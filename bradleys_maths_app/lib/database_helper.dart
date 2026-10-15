import 'dart:io';
import 'package:flutter/services.dart';
import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';

class DatabaseHelper {
  static Database? _db;

  // This copies your DB from the assets folder to the phone's internal memory
  Future<Database> get database async {
    if (_db != null) return _db!;
    
    var databasesPath = await getDatabasesPath();
    var path = join(databasesPath, "bradleys_maths.db");

    // Check if it exists, if not, copy it
    var exists = await databaseExists(path);
    if (!exists) {
      ByteData data = await rootBundle.load(join("assets", "bradleys_maths.db"));
      List<int> bytes = data.buffer.asUint8List(data.offsetInBytes, data.lengthInBytes);
      await File(path).writeAsBytes(bytes, flush: true);
    }

    _db = await openDatabase(path);
    return _db!;
  }

  // Your Python "Random Question" query translated to Dart
  Future<Map<String, dynamic>?> getRandomQuestion() async {
    final db = await database;
    List<Map<String, dynamic>> results = await db.rawQuery(
      'SELECT * FROM questions ORDER BY RANDOM() LIMIT 1'
    );
    if (results.isNotEmpty) return results.first;
    return null;
  }
}