import 'dart:io';
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

  // Reads the real questions.json asset on web
  Future<List<Map<String, dynamic>>> _loadWebData() async {
    if (_jsonCache != null) return _jsonCache!;
    try {
      final String response = await rootBundle.loadString('assets/questions.json');
      final List<dynamic> data = json.decode(response);
      _jsonCache = data.cast<Map<String, dynamic>>();
      return _jsonCache!;
    } catch (e) {
      print("JSON Load Error: $e");
      return [];
    }
  }

  // ==========================================
  // CASCADING TAXONOMY QUERIES
  // ==========================================

  Future<List<String>> getMajorAreas({String? branch}) async {
    if (kIsWeb) {
      final data = await _loadWebData();
      return data
          .where((q) {
            if (branch != null && branch != 'Random') return q['branch'] == branch;
            return q['branch'] != 'Comprehension';
          })
          .map((q) => q['major_area']?.toString() ?? '')
          .where((s) => s.isNotEmpty)
          .toSet()
          .toList()..sort();
    }
    final db = await database;
    final res = await db.rawQuery('SELECT DISTINCT major_area FROM questions');
    return res.map((row) => row['major_area']?.toString() ?? '').toList();
  }

  Future<List<String>> getTopics({String? branch, String? majorArea}) async {
    if (kIsWeb) {
      final data = await _loadWebData();
      return data
          .where((q) {
            if (branch != null && branch != 'Random' && q['branch'] != branch) return false;
            if ((branch == null || branch == 'Random') && q['branch'] == 'Comprehension') return false;
            if (majorArea != null && majorArea != 'Random' && q['major_area'] != majorArea) return false;
            return true;
          })
          .map((q) => q['topic']?.toString() ?? '')
          .where((s) => s.isNotEmpty)
          .toSet()
          .toList()..sort();
    }
    final db = await database;
    final res = await db.rawQuery('SELECT DISTINCT topic FROM questions');
    return res.map((row) => row['topic']?.toString() ?? '').toList();
  }

  // ==========================================
  // FETCH QUESTION (MATCHES BILL'S REAL SCHEMA)
  // ==========================================

  Future<Map<String, dynamic>?> fetchQuestion(FilterState filter) async {
    if (kIsWeb) {
      final data = await _loadWebData();
      if (data.isEmpty) return null;

      // Map filter level "A Level" -> "A", "AS Level" -> "AS"
      final String? targetLevel = filter.isRandomLevel
          ? null
          : (filter.level == 'A Level' ? 'A' : (filter.level == 'AS Level' ? 'AS' : filter.level));

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
      // Fallback: Return any question matching the branch
      var fallback = data.where((q) => q['branch'] != 'Comprehension').toList()..shuffle();
      return fallback.isNotEmpty ? fallback.first : data.first;
    }

    final db = await database;
    final res = await db.query('questions', orderBy: 'RANDOM()', limit: 1);
    return res.isNotEmpty ? res.first : null;
  }
}