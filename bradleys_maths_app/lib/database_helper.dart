import 'dart:convert';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';
import 'models/filter_state.dart';

class DatabaseHelper {
  static Database? _db;
  static List<Map<String, dynamic>>? _jsonCache;

  Future<Database> get database async {
    if (_db != null) return _db!;
    var databasesPath = await getDatabasesPath();
    var path = join(databasesPath, "bradleys_maths.db");
    _db = await openDatabase(path);
    return _db!;
  }

  // Reads the full 1400 questions.json asset
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
  // CASCADING TAXONOMY QUERIES (RESPECTS BOARD & LEVEL)
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

  // ==========================================
  // FETCH QUESTION (STRICT MATCHING, NO SILENT FALLBACK)
  // ==========================================

  Future<Map<String, dynamic>?> fetchQuestion(FilterState filter) async {
    final String? targetLevel = filter.isRandomLevel
        ? null
        : (filter.level == 'A Level' ? 'A' : (filter.level == 'AS Level' ? 'AS' : filter.level));

    if (kIsWeb) {
      final data = await _loadWebData();
      if (data.isEmpty) return null;

      var matches = data.where((q) {
        if (!filter.isRandomBoard && q['board'] != filter.board) return false;
        if (targetLevel != null && q['level'] != targetLevel) return false;
        if (!filter.isRandomBranch && q['branch'] != filter.branch) return false;
        if (filter.isRandomBranch && q['branch'] == 'Comprehension') return false;
        if (!filter.isRandomMajorArea && q['major_area'] != filter.majorArea) return false;
        if (!filter.isRandomTopic && q['topic'] != filter.topic) return false;
        return true;
      }).toList();

      if (matches.isNotEmpty) {
        matches.shuffle();
        return matches.first;
      }

      // No silent fallback! Returns null so the UI can notify the student
      return null;
    }

    final db = await database;
    List<String> whereClauses = [];
    List<dynamic> whereArgs = [];

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

    final whereString = whereClauses.isNotEmpty ? "WHERE ${whereClauses.join(' AND ')}" : "";
    final res = await db.query(
      'questions',
      where: whereClauses.join(' AND '),
      whereArgs: whereArgs,
      orderBy: 'RANDOM()',
      limit: 1,
    );
    return res.isNotEmpty ? res.first : null;
  }
}