import shutil

path = 'lib/database_helper.dart'
bak = path + '.bak'
shutil.copy2(path, bak)

with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

nl = '\r\n' if '\r\n' in text else '\n'

start_marker = '  static Database? _db;'
end_marker = '  // Hydrates a SQLite question row with its related steps, options, and insight'

assert text.count(start_marker) == 1, 'Start marker not found uniquely'
assert text.count(end_marker) == 1, 'End marker not found uniquely'

s_idx = text.index(start_marker)
e_idx = text.index(end_marker)

new_block = r'''  static Database? _db;
  static Future<Database>? _dbInitFuture;
  static List<Map<String, dynamic>>? _jsonCache;
  static final List<Map<String, dynamic>> _webAttempts = [];

  Future<Database> get database async {
    if (_db != null && _db!.isOpen) return _db!;
    final f = _dbInitFuture ??= _initDatabase();
    try {
      return await f;
    } finally {
      if (identical(_dbInitFuture, f)) {
        _dbInitFuture = null;
      }
    }
  }

  String _computeAssetSignature(Uint8List bytes) {
    int s1 = 1;
    int s2 = 0;
    void mix(int start, int end) {
      for (int i = start; i < end; i++) {
        s1 = (s1 + bytes[i]) % 65521;
        s2 = (s2 + s1) % 65521;
      }
    }

    final int n = bytes.length;
    if (n <= 16384) {
      mix(0, n);
    } else {
      mix(0, 4096);
      final int mid = n ~/ 2;
      mix(mid - 2048, mid + 2048);
      mix(n - 4096, n);
    }
    return '$n:${(s2 * 65536) + s1}';
  }

  Future<Database> _initDatabase() async {
    if (_db != null && _db!.isOpen) return _db!;

    var databasesPath = await getDatabasesPath();
    var path = join(databasesPath, "bradleys_maths.db");
    var metaFile = File("$path.asset_sig");

    bool shouldCopy = false;
    bool exists = await databaseExists(path);

    // Load bundled asset and compute a stable signature (size + header/sample checksum)
    ByteData assetData = await rootBundle.load("assets/bradleys_maths.db");
    Uint8List assetBytes = assetData.buffer.asUint8List(
      assetData.offsetInBytes,
      assetData.lengthInBytes,
    );
    String assetSig = _computeAssetSignature(assetBytes);

    if (!exists) {
      shouldCopy = true;
    } else {
      try {
        String? savedSig;
        if (await metaFile.exists()) {
          savedSig = (await metaFile.readAsString()).trim();
        }
        if (savedSig != assetSig) {
          debugPrint("[DB REFRESH] Bundled asset update detected. Refreshing database...");
          shouldCopy = true;
        } else {
          final testDb = await openDatabase(path, readOnly: true);
          final check = await testDb.rawQuery(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='questions'"
          );
          await testDb.close();
          if (check.isEmpty) {
            shouldCopy = true;
          }
        }
      } catch (_) {
        shouldCopy = true;
      }
    }

    if (shouldCopy) {
      debugPrint("[DB INIT] Refreshing bradleys_maths.db from assets...");

      // PRESERVE STUDENT ATTEMPTS BEFORE REPLACING DATABASE
      List<Map<String, dynamic>> savedAttempts = [];
      if (exists) {
        try {
          final oldDb = await openDatabase(path);
          final checkAttempts = await oldDb.rawQuery(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='user_attempts'"
          );
          if (checkAttempts.isNotEmpty) {
            savedAttempts = await oldDb.query('user_attempts');
            debugPrint("[DB PRESERVE] Saved ${savedAttempts.length} existing student attempts.");
          }
          await oldDb.close();
        } catch (e) {
          debugPrint("[DB PRESERVE ERROR] Could not read old attempts: $e");
        }
      }

      try {
        await Directory(dirname(path)).create(recursive: true);
      } catch (_) {}

      // Copy new asset and record its signature
      await File(path).writeAsBytes(assetBytes, flush: true);
      await metaFile.writeAsString(assetSig, flush: true);
      debugPrint("[DB INIT] Copy complete! Size: ${assetBytes.length} bytes.");

      // RESTORE PRESERVED STUDENT ATTEMPTS INTO THE NEW DATABASE
      if (savedAttempts.isNotEmpty) {
        try {
          final freshDb = await openDatabase(path);
          await freshDb.execute("""
            CREATE TABLE IF NOT EXISTS user_attempts (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              user_id INTEGER DEFAULT 1,
              question_id TEXT NOT NULL,
              first_choice_text TEXT,
              first_choice_correct INTEGER,
              second_choice_text TEXT,
              second_choice_correct INTEGER,
              chose_none_of_above INTEGER DEFAULT 0,
              viewed_model_answer INTEGER DEFAULT 0,
              attempted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
          """);

          await freshDb.transaction((txn) async {
            for (var att in savedAttempts) {
              final row = Map<String, dynamic>.from(att);
              row.remove('id'); // let SQLite autoincrement ID
              await txn.insert('user_attempts', row);
            }
          });
          await freshDb.close();
          debugPrint("[DB RESTORE] Successfully restored ${savedAttempts.length} student attempts!");
        } catch (e) {
          debugPrint("[DB RESTORE ERROR] Could not restore attempts: $e");
        }
      }
    }

    _db = await openDatabase(path);

    // Ensure the user_attempts table exists
    await _db!.execute("""
      CREATE TABLE IF NOT EXISTS user_attempts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER DEFAULT 1,
        question_id TEXT NOT NULL,
        first_choice_text TEXT,
        first_choice_correct INTEGER,
        second_choice_text TEXT,
        second_choice_correct INTEGER,
        chose_none_of_above INTEGER DEFAULT 0,
        viewed_model_answer INTEGER DEFAULT 0,
        attempted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    """);

    return _db!;
  }

'''.replace('\n', nl)

text = text[:s_idx] + new_block + text[e_idx:]

old_import = (
    '      await db.transaction((txn) async {' + nl +
    '        for (var item in list) {'
)
new_import = (
    '      await db.transaction((txn) async {' + nl +
    "        await txn.delete('user_attempts');" + nl +
    '        for (var item in list) {'
)
assert text.count(old_import) == 1, 'importProgressJson block not found uniquely'
text = text.replace(old_import, new_import, 1)

with open(path, 'w', encoding='utf-8') as f:
    f.write(text)

print('SUCCESS: database_helper.dart patched cleanly (backup at ' + bak + ')')
