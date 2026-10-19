import 'dart:io';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:sqflite/sqflite.dart';
import 'package:sqflite_common_ffi_web/sqflite_ffi_web.dart'; 
import 'package:path/path.dart';
import 'models/filter_state.dart';

class DatabaseHelper {
  static Database? _db;

  Future<Database> get database async {
    if (_db != null) return _db!;

    if (kIsWeb) {
      var factory = databaseFactoryFfiWeb;
      try {
        // 1. Explicitly load the asset bytes
        final data = await rootBundle.load("assets/bradleys_maths.db");
        final bytes = data.buffer.asUint8List();

        // 2. Overwrite the virtual file in browser memory
        await factory.writeDatabaseBytes('bradleys_maths.db', bytes);

        // 3. Open the database
        _db = await factory.openDatabase('bradleys_maths.db');
        print("WEB DB: Successfully opened real question bank.");
      } catch (e) {
        print("WEB DB ERROR: $e");
        rethrow;
      }
    } else {
      // MOBILE IMPLEMENTATION
      var databasesPath = await getDatabasesPath();
      var path = join(databasesPath, "bradleys_maths.db");
      var exists = await databaseExists(path);
      if (!exists) {
        ByteData data = await rootBundle.load(join("assets", "bradleys_maths.db"));
        List<int> bytes = data.buffer.asUint8List(data.offsetInBytes, data.lengthInBytes);
        await Directory(dirname(path)).create(recursive: true);
        await File(path).writeAsBytes(bytes, flush: true);
      }
      _db = await openDatabase(path);
    }
    return _db!;
  }

  // --- CASCADING QUERIES ---

  Future<List<String>> getMajorAreas({String? branch}) async {
    final db = await database;
    String query;
    List<dynamic> args = [];

    if (branch != null && branch != 'Random') {
      query = 'SELECT DISTINCT major_area FROM questions WHERE branch = ? ORDER BY major_area ASC';
      args = [branch];
    } else {
      query = 'SELECT DISTINCT major_area FROM questions WHERE branch != ? ORDER BY major_area ASC';
      args = ['Comprehension'];
    }

    final results = await db.rawQuery(query, args);
    return results.map((row) => row['major_area']?.toString() ?? '').where((s) => s.isNotEmpty).toList();
  }

  Future<List<String>> getTopics({String? branch, String? majorArea}) async {
    final db = await database;
    List<String> conditions = [];
    List<dynamic> args = [];

    if (branch != null && branch != 'Random') {
      conditions.add('branch = ?');
      args.add(branch);
    } else {
      conditions.add('branch != ?');
      args.add('Comprehension');
    }

    if (majorArea != null && majorArea != 'Random') {
      conditions.add('major_area = ?');
      args.add(majorArea);
    }

    String whereClause = conditions.isNotEmpty ? 'WHERE ${conditions.join(' AND ')}' : '';
    final results = await db.rawQuery('SELECT DISTINCT topic FROM questions $whereClause ORDER BY topic ASC', args);
    return results.map((row) => row['topic']?.toString() ?? '').where((s) => s.isNotEmpty).toList();
  }

  // --- QUESTION FETCH ---

  Future<Map<String, dynamic>?> fetchQuestion(FilterState filter) async {
    final db = await database;
    List<String> conditions = [];
    List<dynamic> args = [];

    if (!filter.isRandomBoard) { conditions.add('board = ?'); args.add(filter.board); }
    if (!filter.isRandomLevel) { conditions.add('level = ?'); args.add(filter.level); }
    if (!filter.isRandomBranch) { conditions.add('branch = ?'); args.add(filter.branch); }
    else { conditions.add('branch != ?'); args.add('Comprehension'); }
    if (!filter.isRandomMajorArea) { conditions.add('major_area = ?'); args.add(filter.majorArea); }
    if (!filter.isRandomTopic) { conditions.add('topic = ?'); args.add(filter.topic); }

    String whereClause = conditions.isNotEmpty ? 'WHERE ${conditions.join(' AND ')}' : '';
    final results = await db.rawQuery('SELECT * FROM questions $whereClause ORDER BY RANDOM() LIMIT 1', args);

    if (results.isNotEmpty) return results.first;

    // Fallback logic
    final fallback = await db.rawQuery('SELECT * FROM questions WHERE branch != ? ORDER BY RANDOM() LIMIT 1', ['Comprehension']);
    return fallback.isNotEmpty ? fallback.first : null;
  }

  Future<List<Map<String, dynamic>>> fetchOptions(dynamic questionId) async {
    final db = await database;
    return await db.rawQuery('SELECT * FROM options WHERE question_id = ? ORDER BY RANDOM()', [questionId]);
  }
}