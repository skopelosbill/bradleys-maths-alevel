import 'dart:convert';
import 'dart:io';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';
import 'models/filter_state.dart';
import 'models/honour_item.dart';

class DatabaseHelper {
  static Database? _db;
  static List<Map<String, dynamic>>? _jsonCache;
  static final List<Map<String, dynamic>> _webAttempts = [];

  Future<Database> get database async {
    if (_db != null) return _db!;
    
    var databasesPath = await getDatabasesPath();
    var path = join(databasesPath, "bradleys_maths.db");

    // Check if the database exists and actually contains the questions table
    bool shouldCopy = false;
    bool exists = await databaseExists(path);

    if (!exists) {
      shouldCopy = true;
    } else {
      try {
        final testDb = await openDatabase(path, readOnly: true);
        final check = await testDb.rawQuery(
          "SELECT name FROM sqlite_master WHERE type='table' AND name='questions'"
        );
        await testDb.close();
        if (check.isEmpty) {
          shouldCopy = true;
        }
      } catch (_) {
        shouldCopy = true;
      }
    }

    if (shouldCopy) {
      debugPrint("[DB INIT] Copying bradleys_maths.db from assets to $path...");
      try {
        await Directory(dirname(path)).create(recursive: true);
      } catch (_) {}

      // Copy from asset
      ByteData data = await rootBundle.load("assets/bradleys_maths.db");
      List<int> bytes = data.buffer.asUint8List(data.offsetInBytes, data.lengthInBytes);

      // Write and flush the bytes written
      await File(path).writeAsBytes(bytes, flush: true);
      debugPrint("[DB INIT] Copy complete! Size: ${bytes.length} bytes.");
    }

    _db = await openDatabase(path);

    // Ensure the user_attempts table is ready to log progress
    await _db!.execute('''
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
    ''');

    return _db!;
  }

  // Hydrates a SQLite question row with its related steps, options, and insight
  Future<Map<String, dynamic>> _hydrateQuestionFromDb(Database db, Map<String, dynamic> row) async {
    final qId = row['id']?.toString() ?? '';
    final Map<String, dynamic> questionMap = Map<String, dynamic>.from(row);

    // 1. Question text
    final qText = row['question_text'] ?? row['question'] ?? '';
    questionMap['question'] = qText;
    questionMap['question_text'] = qText;

    // 2. Fetch steps ordered by step_number
    final stepsRes = await db.query(
      'question_steps',
      columns: ['step_text', 'is_final_answer'],
      where: 'question_id = ?',
      whereArgs: [qId],
      orderBy: 'step_number ASC',
    );
    questionMap['steps'] = stepsRes.map((s) => s['step_text']?.toString() ?? '').toList();

    // 3. Fetch options
    final optionsRes = await db.query(
      'question_options',
      columns: ['ans_text', 'feedback_text', 'is_correct'],
      where: 'question_id = ?',
      whereArgs: [qId],
    );

    // Distractors (is_correct == 0)
    final piOptions = optionsRes
        .where((o) => (o['is_correct'] as int? ?? 0) == 0)
        .map((o) => {
              'ans': o['ans_text']?.toString() ?? '',
              'feedback': o['feedback_text']?.toString() ?? 'Check your paper working carefully.',
            })
        .toList();
    questionMap['pi_options'] = piOptions;

    // Correct Answer (is_correct == 1)
    final correctOpt = optionsRes.firstWhere(
      (o) => (o['is_correct'] as int? ?? 0) == 1,
      orElse: () => {},
    );
    if (correctOpt.isNotEmpty) {
      questionMap['correct_answer'] = correctOpt['ans_text']?.toString() ?? '';
    }

    // 4. Fetch Bradley Insight
    final insightRes = await db.query(
      'bradley_insights',
      columns: ['insight_type', 'title', 'content'],
      where: 'question_id = ?',
      whereArgs: [qId],
      limit: 1,
    );
    if (insightRes.isNotEmpty) {
      final i = insightRes.first;
      questionMap['bradley_insight'] = {
        'type': i['insight_type']?.toString() ?? 'pro-tip',
        'title': i['title']?.toString() ?? "The Head Teacher's Eye",
        'content': i['content']?.toString() ?? '',
      };
    }

    return questionMap;
  }

  // Reads the full 1400 questions.json asset for Web fallback
  Future<List<Map<String, dynamic>>> _loadWebData() async {
    if (_jsonCache != null) return _jsonCache!;
    try {
      final String response = await rootBundle.loadString('assets/questions.json');
      final List<dynamic> data = json.decode(response);
      _jsonCache = data.cast<Map<String, dynamic>>();
      return _jsonCache!;
    } catch (e) {
      debugPrint("JSON Load Error: $e");
      return [];
    }
  }

  // ==========================================
  // MASTERED QUESTIONS LOOKUP
  // ==========================================

  Future<Set<String>> getMasteredQuestionIds() async {
    if (kIsWeb) {
      return _webAttempts
          .where((a) => a['first_choice_correct'] == 1 || a['second_choice_correct'] == 1)
          .map((a) => a['question_id'].toString())
          .toSet();
    }

    try {
      final db = await database;
      final res = await db.rawQuery(
        'SELECT DISTINCT question_id FROM user_attempts WHERE first_choice_correct = 1 OR second_choice_correct = 1'
      );
      return res.map((row) => row['question_id'].toString()).toSet();
    } catch (e) {
      debugPrint("[DB MASTERED LOOKUP ERROR] $e");
      return {};
    }
  }

  // ==========================================
  // TRIAL GATEKEEPER ACCOUNTING (UNIQUE QUESTIONS)
  // ==========================================

  Future<int> getAttemptedQuestionsCount() async {
    if (kIsWeb) {
      return _webAttempts.map((a) => a['question_id'].toString()).toSet().length;
    }

    try {
      final db = await database;
      final res = await db.rawQuery(
        'SELECT COUNT(DISTINCT question_id) as count FROM user_attempts'
      );
      return Sqflite.firstIntValue(res) ?? 0;
    } catch (e) {
      debugPrint("[DB ATTEMPTED COUNT ERROR] $e");
      return 0;
    }
  }

  // ==========================================
  // HONOURS MATRIX PROGRESSION (24 HONOURS)
  // ==========================================

  Future<List<HonourItem>> getHonoursProgress() async {
    final honours = HonoursRoster.getDefaultHonours();
    final stats = await getUserStats();
    final totalAttempts = stats['total_attempts'] ?? 0;
    final firstTryCorrect = stats['first_try_correct'] ?? 0;
    final accuracy = totalAttempts > 0 ? ((firstTryCorrect / totalAttempts) * 100).round() : 0;

    List<Map<String, dynamic>> masteredQuestions = [];

    if (kIsWeb) {
      final masteredIds = await getMasteredQuestionIds();
      final allData = await _loadWebData();
      masteredQuestions = allData
          .where((q) => masteredIds.contains(q['id']?.toString()))
          .toList();
    } else {
      try {
        final db = await database;
        masteredQuestions = await db.rawQuery('''
          SELECT q.id, q.board, q.branch, q.major_area, q.topic
          FROM questions q
          JOIN (
            SELECT DISTINCT question_id FROM user_attempts 
            WHERE first_choice_correct = 1 OR second_choice_correct = 1
          ) ua ON q.id = ua.question_id
        ''');
      } catch (e) {
        debugPrint("[HONOURS QUERY ERROR] $e");
      }
    }

    final Map<String, Set<String>> tally = {
      'leibniz': {},
      'newton_calc': {},
      'euler_series': {},
      'descartes': {},
      'argand_vectors': {},
      'hypatia': {},
      'ramanujan': {},
      'archimedes_num': {},
      'de_morgan_proof': {},
      'pure_grandmaster': {},

      'galileo': {},
      'newton_principia': {},
      'archimedes_lever': {},
      'ballistics': {},
      'vector_mechanics': {},
      'mechanics_master': {},

      'gauss_normal': {},
      'bernoulli': {},
      'fisher_hypothesis': {},
      'bayes_prob': {},
      'pearson_regression': {},
      'stats_master': {},
    };

    final Map<String, Set<String>> boardMastery = {};

    for (var q in masteredQuestions) {
      final id = q['id']?.toString() ?? '';
      final branch = q['branch']?.toString().toLowerCase() ?? '';
      final area = q['major_area']?.toString().toLowerCase() ?? '';
      final topic = q['topic']?.toString().toLowerCase() ?? '';
      final board = q['board']?.toString() ?? '';

      if (id.isEmpty) continue;

      if (board.isNotEmpty) {
        boardMastery.putIfAbsent(board, () => {});
        boardMastery[board]!.add(id);
      }

      // Pure
      if (branch == 'pure') {
        tally['pure_grandmaster']!.add(id);
        if (area.contains('diff') || topic.contains('diff') || area.contains('calculus') || topic.contains('calculus')) {
          if (area.contains('diff') || topic.contains('diff')) tally['leibniz']!.add(id);
        }
        if (area.contains('integ') || topic.contains('integ')) tally['newton_calc']!.add(id);
        if (area.contains('series') || topic.contains('series') || area.contains('binomial') || topic.contains('binomial') || area.contains('sequence')) {
          tally['euler_series']!.add(id);
        }
        if (area.contains('coordinate') || topic.contains('coordinate') || area.contains('parametric') || topic.contains('parametric') || area.contains('curve')) {
          tally['descartes']!.add(id);
        }
        if (area.contains('vector') || topic.contains('vector')) tally['argand_vectors']!.add(id);
        if (area.contains('function') || topic.contains('function')) tally['hypatia']!.add(id);
        if (area.contains('trig') || topic.contains('trig')) tally['ramanujan']!.add(id);
        if (area.contains('numerical') || topic.contains('numerical') || topic.contains('iteration')) tally['archimedes_num']!.add(id);
        if (area.contains('proof') || topic.contains('proof')) tally['de_morgan_proof']!.add(id);
      }

      // Mechanics
      if (branch == 'mechanics') {
        tally['mechanics_master']!.add(id);
        if (area.contains('kinematics') || topic.contains('kinematics') || topic.contains('acceleration')) tally['galileo']!.add(id);
        if (area.contains('dynamics') || topic.contains('dynamics') || area.contains('newton') || topic.contains('newton') || area.contains('forces')) {
          tally['newton_principia']!.add(id);
        }
        if (area.contains('statics') || topic.contains('statics') || area.contains('moments') || topic.contains('moments') || area.contains('equilibrium')) {
          tally['archimedes_lever']!.add(id);
        }
        if (area.contains('projectile') || topic.contains('projectile')) tally['ballistics']!.add(id);
        if (area.contains('vector') || topic.contains('vector')) tally['vector_mechanics']!.add(id);
      }

      // Statistics
      if (branch == 'statistics') {
        tally['stats_master']!.add(id);
        if (area.contains('normal') || topic.contains('normal')) tally['gauss_normal']!.add(id);
        if (area.contains('binomial') || topic.contains('binomial')) tally['bernoulli']!.add(id);
        if (area.contains('hypothesis') || topic.contains('hypothesis')) tally['fisher_hypothesis']!.add(id);
        if (area.contains('prob') || topic.contains('prob') || area.contains('venn') || topic.contains('venn')) tally['bayes_prob']!.add(id);
        if (area.contains('regress') || topic.contains('regress') || area.contains('correl') || topic.contains('correl')) {
          tally['pearson_regression']!.add(id);
        }
      }
    }

    for (var h in honours) {
      if (h.id == 'home_nations') {
        int boardsQualified = boardMastery.values.where((set) => set.length >= 5).length;
        h.currentCount = boardsQualified;
        h.isUnlocked = boardsQualified >= h.targetCount;
      } else if (h.id == 'cambridge_standard') {
        h.currentCount = accuracy;
        h.isUnlocked = (totalAttempts >= 50 && accuracy >= 75);
      } else {
        final count = tally[h.id]?.length ?? 0;
        h.currentCount = count;
        h.isUnlocked = count >= h.targetCount;
      }
    }

    return honours;
  }

  // ==========================================
  // TOPIC & SUBTOPIC MASTERY STATS (RULE B)
  // ==========================================

  Future<Map<String, Map<String, int>>> getTopicMasteryStats({
    String? board,
    String? level,
    String? branch,
    String? majorArea,
  }) async {
    final masteredIds = await getMasteredQuestionIds();
    final String? targetLevel = (level == null || level == 'Random')
        ? null
        : (level == 'A Level' ? 'A' : (level == 'AS Level' ? 'AS' : level));

    if (kIsWeb) {
      final data = await _loadWebData();
      final Map<String, Map<String, int>> stats = {};

      for (var q in data) {
        if (branch != null && branch != 'Random' && q['branch'] != branch) continue;
        if ((branch == null || branch == 'Random') && q['branch'] == 'Comprehension') continue;
        if (targetLevel != null && q['level'] != targetLevel) continue;
        if (board != null && board != 'Random' && q['board'] != board) continue;
        if (majorArea != null && majorArea != 'Random' && q['major_area'] != majorArea) continue;

        final topic = q['topic']?.toString() ?? '';
        if (topic.isEmpty) continue;

        stats.putIfAbsent(topic, () => {'total': 0, 'mastered': 0});
        stats[topic]!['total'] = stats[topic]!['total']! + 1;
        if (masteredIds.contains(q['id']?.toString())) {
          stats[topic]!['mastered'] = stats[topic]!['mastered']! + 1;
        }
      }
      return stats;
    }

    final db = await database;
    List<String> whereClauses = [];
    List<dynamic> whereArgs = [];

    if (branch != null && branch != 'Random') {
      whereClauses.add("branch = ?");
      whereArgs.add(branch);
    } else {
      whereClauses.add("branch != 'Comprehension'");
    }
    if (targetLevel != null) {
      whereClauses.add("level = ?");
      whereArgs.add(targetLevel);
    }
    if (board != null && board != 'Random') {
      whereClauses.add("board = ?");
      whereArgs.add(board);
    }
    if (majorArea != null && majorArea != 'Random') {
      whereClauses.add("major_area = ?");
      whereArgs.add(majorArea);
    }

    final whereString = whereClauses.isNotEmpty ? "WHERE ${whereClauses.join(' AND ')}" : "";
    final res = await db.rawQuery(
      'SELECT id, topic FROM questions $whereString',
      whereArgs,
    );

    final Map<String, Map<String, int>> stats = {};
    for (var row in res) {
      final id = row['id']?.toString() ?? '';
      final topic = row['topic']?.toString() ?? '';
      if (topic.isEmpty) continue;

      stats.putIfAbsent(topic, () => {'total': 0, 'mastered': 0});
      stats[topic]!['total'] = stats[topic]!['total']! + 1;
      if (masteredIds.contains(id)) {
        stats[topic]!['mastered'] = stats[topic]!['mastered']! + 1;
      }
    }
    return stats;
  }

  Future<Map<String, Map<String, int>>> getSubtopicMasteryStats({
    String? board,
    String? level,
    String? branch,
    String? majorArea,
    String? topic,
  }) async {
    final masteredIds = await getMasteredQuestionIds();
    final String? targetLevel = (level == null || level == 'Random')
        ? null
        : (level == 'A Level' ? 'A' : (level == 'AS Level' ? 'AS' : level));

    List<Map<String, dynamic>> questionsList = [];

    if (kIsWeb) {
      final data = await _loadWebData();
      questionsList = data.where((q) {
        if (branch != null && branch != 'Random' && q['branch'] != branch) return false;
        if ((branch == null || branch == 'Random') && q['branch'] == 'Comprehension') return false;
        if (targetLevel != null && q['level'] != targetLevel) return false;
        if (board != null && board != 'Random' && q['board'] != board) return false;
        if (majorArea != null && majorArea != 'Random' && q['major_area'] != majorArea) return false;
        if (topic != null && topic != 'Random' && q['topic'] != topic) return false;
        return true;
      }).toList();
    } else {
      final db = await database;
      List<String> whereClauses = [];
      List<dynamic> whereArgs = [];

      if (branch != null && branch != 'Random') {
        whereClauses.add("branch = ?");
        whereArgs.add(branch);
      } else {
        whereClauses.add("branch != 'Comprehension'");
      }
      if (targetLevel != null) {
        whereClauses.add("level = ?");
        whereArgs.add(targetLevel);
      }
      if (board != null && board != 'Random') {
        whereClauses.add("board = ?");
        whereArgs.add(board);
      }
      if (majorArea != null && majorArea != 'Random') {
        whereClauses.add("major_area = ?");
        whereArgs.add(majorArea);
      }
      if (topic != null && topic != 'Random') {
        whereClauses.add("topic = ?");
        whereArgs.add(topic);
      }

      final whereString = whereClauses.isNotEmpty ? "WHERE ${whereClauses.join(' AND ')}" : "";
      questionsList = await db.rawQuery('SELECT id, subtopics FROM questions $whereString', whereArgs);
    }

    final Map<String, Map<String, int>> stats = {};

    for (var q in questionsList) {
      final id = q['id']?.toString() ?? '';
      final raw = q['subtopic'] ?? q['subtopics'];
      final List<String> subs = [];

      if (raw is List) {
        for (var item in raw) {
          final s = item?.toString().trim() ?? '';
          if (s.isNotEmpty) subs.add(s);
        }
      } else if (raw is String && raw.isNotEmpty) {
        try {
          final dec = json.decode(raw);
          if (dec is List) {
            for (var item in dec) {
              final s = item?.toString().trim() ?? '';
              if (s.isNotEmpty) subs.add(s);
            }
          }
        } catch (_) {
          final parts = raw.split(',');
          for (var p in parts) {
            final s = p.trim();
            if (s.isNotEmpty) subs.add(s);
          }
        }
      }

      final isMastered = masteredIds.contains(id);
      for (var sub in subs) {
        stats.putIfAbsent(sub, () => {'total': 0, 'mastered': 0});
        stats[sub]!['total'] = stats[sub]!['total']! + 1;
        if (isMastered) {
          stats[sub]!['mastered'] = stats[sub]!['mastered']! + 1;
        }
      }
    }

    return stats;
  }

  // ==========================================
  // CASCADING TAXONOMY QUERIES
  // ==========================================

  Future<List<String>> getMajorAreas({String? board, String? level, String? branch}) async {
    final String? targetLevel = (level == null || level == 'Random')
        ? null
        : (level == 'A Level' ? 'A' : (level == 'AS Level' ? 'AS' : level));

    if (kIsWeb) {
      final data = await _loadWebData();
      return data
          .where((q) {
            if (branch != null && branch != 'Random' && q['branch'] != branch) return false;
            if ((branch == null || branch == 'Random') && q['branch'] == 'Comprehension') return false;
            if (targetLevel != null && q['level'] != targetLevel) return false;
            if (board != null && board != 'Random' && q['board'] != board) return false;
            return true;
          })
          .map((q) => q['major_area']?.toString() ?? '')
          .where((s) => s.isNotEmpty)
          .toSet()
          .toList()..sort();
    }

    final db = await database;
    List<String> whereClauses = [];
    List<dynamic> whereArgs = [];

    if (branch != null && branch != 'Random') {
      whereClauses.add("branch = ?");
      whereArgs.add(branch);
    } else {
      whereClauses.add("branch != 'Comprehension'");
    }
    if (targetLevel != null) {
      whereClauses.add("level = ?");
      whereArgs.add(targetLevel);
    }
    if (board != null && board != 'Random') {
      whereClauses.add("board = ?");
      whereArgs.add(board);
    }

    final whereString = whereClauses.isNotEmpty ? "WHERE ${whereClauses.join(' AND ')}" : "";
    final res = await db.rawQuery('SELECT DISTINCT major_area FROM questions $whereString ORDER BY major_area ASC', whereArgs);
    return res.map((row) => row['major_area']?.toString() ?? '').toList();
  }

  Future<List<String>> getTopics({String? board, String? level, String? branch, String? majorArea}) async {
    final String? targetLevel = (level == null || level == 'Random')
        ? null
        : (level == 'A Level' ? 'A' : (level == 'AS Level' ? 'AS' : level));

    if (kIsWeb) {
      final data = await _loadWebData();
      return data
          .where((q) {
            if (branch != null && branch != 'Random' && q['branch'] != branch) return false;
            if ((branch == null || branch == 'Random') && q['branch'] == 'Comprehension') return false;
            if (targetLevel != null && q['level'] != targetLevel) return false;
            if (board != null && board != 'Random' && q['board'] != board) return false;
            if (majorArea != null && majorArea != 'Random' && q['major_area'] != majorArea) return false;
            return true;
          })
          .map((q) => q['topic']?.toString() ?? '')
          .where((s) => s.isNotEmpty)
          .toSet()
          .toList()..sort();
    }

    final db = await database;
    List<String> whereClauses = [];
    List<dynamic> whereArgs = [];

    if (branch != null && branch != 'Random') {
      whereClauses.add("branch = ?");
      whereArgs.add(branch);
    } else {
      whereClauses.add("branch != 'Comprehension'");
    }
    if (targetLevel != null) {
      whereClauses.add("level = ?");
      whereArgs.add(targetLevel);
    }
    if (board != null && board != 'Random') {
      whereClauses.add("board = ?");
      whereArgs.add(board);
    }
    if (majorArea != null && majorArea != 'Random') {
      whereClauses.add("major_area = ?");
      whereArgs.add(majorArea);
    }

    final whereString = whereClauses.isNotEmpty ? "WHERE ${whereClauses.join(' AND ')}" : "";
    final res = await db.rawQuery('SELECT DISTINCT topic FROM questions $whereString ORDER BY topic ASC', whereArgs);
    return res.map((row) => row['topic']?.toString() ?? '').toList();
  }

  Future<List<String>> getSubtopics({String? board, String? level, String? branch, String? majorArea, String? topic}) async {
    final String? targetLevel = (level == null || level == 'Random')
        ? null
        : (level == 'A Level' ? 'A' : (level == 'AS Level' ? 'AS' : level));

    if (kIsWeb) {
      final data = await _loadWebData();
      final Set<String> subtopics = {};
      for (var q in data) {
        if (branch != null && branch != 'Random' && q['branch'] != branch) continue;
        if ((branch == null || branch == 'Random') && q['branch'] == 'Comprehension') continue;
        if (targetLevel != null && q['level'] != targetLevel) continue;
        if (board != null && board != 'Random' && q['board'] != board) continue;
        if (majorArea != null && majorArea != 'Random' && q['major_area'] != majorArea) continue;
        if (topic != null && topic != 'Random' && q['topic'] != topic) continue;

        final raw = q['subtopic'] ?? q['subtopics'];
        if (raw is List) {
          for (var item in raw) {
            final s = item?.toString().trim() ?? '';
            if (s.isNotEmpty) subtopics.add(s);
          }
        } else if (raw is String && raw.isNotEmpty) {
          try {
            final decoded = json.decode(raw);
            if (decoded is List) {
              for (var item in decoded) {
                final s = item?.toString().trim() ?? '';
                if (s.isNotEmpty) subtopics.add(s);
              }
            }
          } catch (_) {}
        }
      }
      return subtopics.toList()..sort();
    }

    final db = await database;
    List<String> whereClauses = [];
    List<dynamic> whereArgs = [];

    if (branch != null && branch != 'Random') {
      whereClauses.add("branch = ?");
      whereArgs.add(branch);
    } else {
      whereClauses.add("branch != 'Comprehension'");
    }
    if (targetLevel != null) {
      whereClauses.add("level = ?");
      whereArgs.add(targetLevel);
    }
    if (board != null && board != 'Random') {
      whereClauses.add("board = ?");
      whereArgs.add(board);
    }
    if (majorArea != null && majorArea != 'Random') {
      whereClauses.add("major_area = ?");
      whereArgs.add(majorArea);
    }
    if (topic != null && topic != 'Random') {
      whereClauses.add("topic = ?");
      whereArgs.add(topic);
    }

    final whereString = whereClauses.isNotEmpty ? "WHERE ${whereClauses.join(' AND ')}" : "";
    final res = await db.rawQuery('SELECT subtopics FROM questions $whereString', whereArgs);

    final Set<String> subtopics = {};
    for (var row in res) {
      final raw = row['subtopics']?.toString() ?? '';
      if (raw.isNotEmpty) {
        try {
          final decoded = json.decode(raw);
          if (decoded is List) {
            for (var item in decoded) {
              final s = item?.toString().trim() ?? '';
              if (s.isNotEmpty) subtopics.add(s);
            }
          }
        } catch (_) {
          final parts = raw.split(',');
          for (var p in parts) {
            final s = p.trim();
            if (s.isNotEmpty) subtopics.add(s);
          }
        }
      }
    }
    return subtopics.toList()..sort();
  }

  // ==========================================
  // FETCH QUESTION (HYDRATED FROM SQLITE)
  // ==========================================

  Future<Map<String, dynamic>?> fetchQuestion(
    FilterState filter, {
    bool includeMastered = false,
  }) async {
    final String? targetLevel = filter.isRandomLevel
        ? null
        : (filter.level == 'A Level' ? 'A' : (filter.level == 'AS Level' ? 'AS' : filter.level));

    final Set<String> masteredIds = includeMastered ? {} : await getMasteredQuestionIds();

    if (kIsWeb) {
      final data = await _loadWebData();
      if (data.isEmpty) return null;

      var matches = data.where((q) {
        final qId = q['id']?.toString() ?? '';
        if (!includeMastered && masteredIds.contains(qId)) return false;

        if (!filter.isRandomBoard && q['board'] != filter.board) return false;
        if (targetLevel != null && q['level'] != targetLevel) return false;
        if (!filter.isRandomBranch && q['branch'] != filter.branch) return false;
        if (filter.isRandomBranch && q['branch'] == 'Comprehension') return false;
        if (!filter.isRandomMajorArea && q['major_area'] != filter.majorArea) return false;
        if (!filter.isRandomTopic && q['topic'] != filter.topic) return false;
        if (!filter.isRandomSubtopic && filter.subtopic != null) {
          final raw = q['subtopic'] ?? q['subtopics'];
          List<String> list = [];
          if (raw is List) {
            list = raw.map((e) => e.toString().trim()).toList();
          } else if (raw is String && raw.isNotEmpty) {
            try {
              final dec = json.decode(raw);
              if (dec is List) list = dec.map((e) => e.toString().trim()).toList();
            } catch (_) {}
          }
          if (!list.contains(filter.subtopic!.trim())) return false;
        }
        return true;
      }).toList();

      if (matches.isNotEmpty) {
        matches.shuffle();
        return matches.first;
      }

      return null;
    }

    final db = await database;
    List<String> whereClauses = [];
    List<dynamic> whereArgs = [];

    if (!includeMastered) {
      whereClauses.add("""
        id NOT IN (
          SELECT DISTINCT question_id FROM user_attempts 
          WHERE first_choice_correct = 1 OR second_choice_correct = 1
        )
      """);
    }

    if (!filter.isRandomBranch) {
      whereClauses.add("branch = ?");
      whereArgs.add(filter.branch);
    } else {
      whereClauses.add("branch != 'Comprehension'");
    }
    if (targetLevel != null) {
      whereClauses.add("level = ?");
      whereArgs.add(targetLevel);
    }
    if (!filter.isRandomBoard) {
      whereClauses.add("board = ?");
      whereArgs.add(filter.board);
    }
    if (!filter.isRandomMajorArea) {
      whereClauses.add("major_area = ?");
      whereArgs.add(filter.majorArea);
    }
    if (!filter.isRandomTopic) {
      whereClauses.add("topic = ?");
      whereArgs.add(filter.topic);
    }
    if (!filter.isRandomSubtopic && filter.subtopic != null) {
      whereClauses.add("subtopics LIKE ?");
      whereArgs.add('%"${filter.subtopic!.trim()}"%');
    }

    // Bill's Rule: Comprehension and focused topics start at Question 1 (lowest unmastered),
    // while Random practice retains unpredictable exam-style shuffling!
    final bool useSequential = filter.branch == 'Comprehension' || 
        (!filter.isRandomTopic && (!filter.isRandomSubtopic || filter.subtopic != null));

    final res = await db.query(
      'questions',
      where: whereClauses.join(' AND '),
      whereArgs: whereArgs,
      orderBy: useSequential ? 'id ASC' : 'RANDOM()',
      limit: 1,
    );
    
    if (res.isNotEmpty) {
      return await _hydrateQuestionFromDb(db, res.first);
    }
    return null;
  }

  // ==========================================
  // ATTEMPT RECORDING & PROGRESS TRACKING
  // ==========================================

  Future<void> recordAttempt({
    required String questionId,
    required String firstChoiceText,
    required bool firstChoiceCorrect,
    String? secondChoiceText,
    bool? secondChoiceCorrect,
    bool choseNoneOfAbove = false,
    bool viewedModelAnswer = false,
  }) async {
    final record = {
      'user_id': 1,
      'question_id': questionId,
      'first_choice_text': firstChoiceText,
      'first_choice_correct': firstChoiceCorrect ? 1 : 0,
      'second_choice_text': secondChoiceText,
      'second_choice_correct': secondChoiceCorrect == null ? null : (secondChoiceCorrect ? 1 : 0),
      'chose_none_of_above': choseNoneOfAbove ? 1 : 0,
      'viewed_model_answer': viewedModelAnswer ? 1 : 0,
    };

    if (kIsWeb) {
      _webAttempts.add(record);
      debugPrint("[WEB PROGRESS] Recorded attempt for Q#$questionId (Correct: $firstChoiceCorrect)");
      return;
    }

    try {
      final db = await database;
      await db.insert('user_attempts', record);
      debugPrint("[DB PROGRESS] Saved attempt for Q#$questionId to user_attempts");
    } catch (e) {
      debugPrint("[DB PROGRESS ERROR] Could not save attempt: $e");
    }
  }

  Future<Map<String, int>> getUserStats() async {
    if (kIsWeb) {
      final total = _webAttempts.length;
      final correct = _webAttempts.where((a) => a['first_choice_correct'] == 1).length;
      final uniqueMastered = _webAttempts
          .where((a) => a['first_choice_correct'] == 1 || a['second_choice_correct'] == 1)
          .map((a) => a['question_id'])
          .toSet()
          .length;
      final uniqueAttempted = _webAttempts.map((a) => a['question_id']).toSet().length;

      return {
        'total_attempts': total,
        'first_try_correct': correct,
        'unique_mastered': uniqueMastered,
        'unique_attempted': uniqueAttempted,
      };
    }

    try {
      final db = await database;
      final totalRes = await db.rawQuery('SELECT COUNT(*) as count FROM user_attempts');
      final correctRes = await db.rawQuery('SELECT COUNT(*) as count FROM user_attempts WHERE first_choice_correct = 1');
      final uniqueRes = await db.rawQuery(
        'SELECT COUNT(DISTINCT question_id) as count FROM user_attempts WHERE first_choice_correct = 1 OR second_choice_correct = 1'
      );
      final uniqueAttemptedRes = await db.rawQuery(
        'SELECT COUNT(DISTINCT question_id) as count FROM user_attempts'
      );

      return {
        'total_attempts': Sqflite.firstIntValue(totalRes) ?? 0,
        'first_try_correct': Sqflite.firstIntValue(correctRes) ?? 0,
        'unique_mastered': Sqflite.firstIntValue(uniqueRes) ?? 0,
        'unique_attempted': Sqflite.firstIntValue(uniqueAttemptedRes) ?? 0,
      };
    } catch (e) {
      debugPrint("[DB STATS ERROR] $e");
      return {'total_attempts': 0, 'first_try_correct': 0, 'unique_mastered': 0, 'unique_attempted': 0};
    }
  }

  // ==========================================
  // STEP 12: SMART BRANCHING QUERIES (HYDRATED)
  // ==========================================

  Future<Map<String, dynamic>?> fetchDifferentBoardQuestion(Map<String, dynamic> currentQ) async {
    final currentId = currentQ['id']?.toString() ?? '';
    final currentBoard = currentQ['board']?.toString() ?? '';
    final branch = currentQ['branch']?.toString() ?? '';
    final level = currentQ['level']?.toString() ?? '';
    final topic = currentQ['topic']?.toString() ?? '';

    final List<dynamic> rawSubtopics = currentQ['subtopic'] is List ? currentQ['subtopic'] : [];
    final String? primarySubtopic = rawSubtopics.isNotEmpty ? rawSubtopics.first.toString() : null;

    final masteredIds = await getMasteredQuestionIds();

    if (kIsWeb) {
      final data = await _loadWebData();

      var baseCandidates = data.where((q) {
        final id = q['id']?.toString() ?? '';
        if (id == currentId) return false;
        if (masteredIds.contains(id)) return false;
        if (q['board']?.toString() == currentBoard) return false;
        if (q['branch'] != branch) return false;
        if (q['level'] != level) return false;
        return true;
      }).toList();

      if (primarySubtopic != null && primarySubtopic.isNotEmpty) {
        var subtopicMatches = baseCandidates.where((q) {
          final qSubtopics = q['subtopic'] is List ? q['subtopic'] as List : [];
          return qSubtopics.any((s) => s.toString().toLowerCase() == primarySubtopic.toLowerCase());
        }).toList();

        if (subtopicMatches.isNotEmpty) {
          subtopicMatches.shuffle();
          return subtopicMatches.first;
        }
      }

      var topicMatches = baseCandidates.where((q) => q['topic'] == topic).toList();
      if (topicMatches.isNotEmpty) {
        topicMatches.shuffle();
        return topicMatches.first;
      }

      return null;
    }

    final db = await database;

    final String masteryClause = """
      id NOT IN (
        SELECT DISTINCT question_id FROM user_attempts 
        WHERE first_choice_correct = 1 OR second_choice_correct = 1
      )
    """;

    if (primarySubtopic != null && primarySubtopic.isNotEmpty) {
      final subtopicRes = await db.query(
        'questions',
        where: 'id != ? AND board != ? AND branch = ? AND level = ? AND subtopics LIKE ? AND $masteryClause',
        whereArgs: [currentId, currentBoard, branch, level, '%$primarySubtopic%'],
        orderBy: 'RANDOM()',
        limit: 1,
      );
      if (subtopicRes.isNotEmpty) {
        return await _hydrateQuestionFromDb(db, subtopicRes.first);
      }
    }

    final topicRes = await db.query(
      'questions',
      where: 'id != ? AND board != ? AND branch = ? AND level = ? AND topic = ? AND $masteryClause',
      whereArgs: [currentId, currentBoard, branch, level, topic],
      orderBy: 'RANDOM()',
      limit: 1,
    );
    if (topicRes.isNotEmpty) {
      return await _hydrateQuestionFromDb(db, topicRes.first);
    }
    return null;
  }

  Future<Map<String, dynamic>?> fetchGroupProgressionQuestion(Map<String, dynamic> currentQ) async {
    final currentId = currentQ['id']?.toString() ?? '';
    final groupId = currentQ['group_id']?.toString() ?? '';

    if (groupId.isEmpty) return null;

    final masteredIds = await getMasteredQuestionIds();

    if (kIsWeb) {
      final data = await _loadWebData();

      var family = data.where((q) {
        final id = q['id']?.toString() ?? '';
        if (id == currentId) return false;
        if (q['group_id']?.toString() != groupId) return false;
        if (masteredIds.contains(id)) return false;
        return true;
      }).toList();

      if (family.isEmpty) return null;

      var forwardCandidates = family
          .where((q) => (q['id']?.toString() ?? '').compareTo(currentId) > 0)
          .toList()
        ..sort((a, b) => (a['id']?.toString() ?? '').compareTo(b['id']?.toString() ?? ''));

      if (forwardCandidates.isNotEmpty) {
        return forwardCandidates.first;
      }

      family.sort((a, b) => (a['id']?.toString() ?? '').compareTo(b['id']?.toString() ?? ''));
      return family.first;
    }

    final db = await database;

    final String masteryClause = """
      id NOT IN (
        SELECT DISTINCT question_id FROM user_attempts 
        WHERE first_choice_correct = 1 OR second_choice_correct = 1
      )
    """;

    // 1. Strict Forward Progression: id > currentId
    final forwardRes = await db.query(
      'questions',
      where: 'group_id = ? AND id > ? AND $masteryClause',
      whereArgs: [groupId, currentId],
      orderBy: 'id ASC',
      limit: 1,
    );

    if (forwardRes.isNotEmpty) {
      return await _hydrateQuestionFromDb(db, forwardRes.first);
    }

    // 2. Wrap-around: lowest remaining unmastered in group
    final wrapRes = await db.query(
      'questions',
      where: 'group_id = ? AND id != ? AND $masteryClause',
      whereArgs: [groupId, currentId],
      orderBy: 'id ASC',
      limit: 1,
    );

    if (wrapRes.isNotEmpty) {
      return await _hydrateQuestionFromDb(db, wrapRes.first);
    }

    return null;
  }
}