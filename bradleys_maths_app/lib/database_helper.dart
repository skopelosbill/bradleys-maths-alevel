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
          // If not valid JSON, treat as comma-separated or single string
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
    if (!filter.isRandomSubtopic && filter.subtopic != null) {
      whereClauses.add("subtopics LIKE ?");
      whereArgs.add('%"${filter.subtopic!.trim()}"%');
    }

    final res = await db.query(
      'questions',
      where: whereClauses.join(' AND '),
      whereArgs: whereArgs,
      orderBy: 'RANDOM()',
      limit: 1,
    );
    return res.isNotEmpty ? res.first : null;
  }

  // ==========================================
  // STEP 12: SMART BRANCHING QUERIES
  // ==========================================

  // Option A: Similar question from a DIFFERENT exam board (Subtopic Priority with Topic Fallback)
  Future<Map<String, dynamic>?> fetchDifferentBoardQuestion(Map<String, dynamic> currentQ) async {
    final currentId = currentQ['id']?.toString() ?? '';
    final currentBoard = currentQ['board']?.toString() ?? '';
    final branch = currentQ['branch']?.toString() ?? '';
    final level = currentQ['level']?.toString() ?? '';
    final topic = currentQ['topic']?.toString() ?? '';

    // Extract the primary subtopic if available
    final List<dynamic> rawSubtopics = currentQ['subtopic'] is List ? currentQ['subtopic'] : [];
    final String? primarySubtopic = rawSubtopics.isNotEmpty ? rawSubtopics.first.toString() : null;

    if (kIsWeb) {
      final data = await _loadWebData();

      // Base candidate filter: different ID, different Board, same Branch & Level
      var baseCandidates = data.where((q) {
        if (q['id']?.toString() == currentId) return false;
        if (q['board']?.toString() == currentBoard) return false;
        if (q['branch'] != branch) return false;
        if (q['level'] != level) return false;
        return true;
      }).toList();

      // Priority 1: Exact Subtopic Match across different boards
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

      // Priority 2 (Fallback): Match by Topic across different boards
      var topicMatches = baseCandidates.where((q) => q['topic'] == topic).toList();
      if (topicMatches.isNotEmpty) {
        topicMatches.shuffle();
        return topicMatches.first;
      }

      return null;
    }

    // Native SQLite implementation
    final db = await database;

    // Priority 1: Exact Subtopic Match
    if (primarySubtopic != null && primarySubtopic.isNotEmpty) {
      final subtopicRes = await db.query(
        'questions',
        where: 'id != ? AND board != ? AND branch = ? AND level = ? AND subtopics LIKE ?',
        whereArgs: [currentId, currentBoard, branch, level, '%$primarySubtopic%'],
        orderBy: 'RANDOM()',
        limit: 1,
      );
      if (subtopicRes.isNotEmpty) return subtopicRes.first;
    }

    // Priority 2 (Fallback): Match by Topic
    final topicRes = await db.query(
      'questions',
      where: 'id != ? AND board != ? AND branch = ? AND level = ? AND topic = ?',
      whereArgs: [currentId, currentBoard, branch, level, topic],
      orderBy: 'RANDOM()',
      limit: 1,
    );
    return topicRes.isNotEmpty ? topicRes.first : null;
  }

  // Option B: Progression question from the SAME ID group (Twin / Cousin)
  Future<Map<String, dynamic>?> fetchGroupProgressionQuestion(Map<String, dynamic> currentQ) async {
    final currentId = currentQ['id']?.toString() ?? '';
    final groupId = currentQ['group_id']?.toString() ?? '';

    if (groupId.isEmpty) return null;

    if (kIsWeb) {
      final data = await _loadWebData();
      var matches = data.where((q) {
        if (q['id']?.toString() == currentId) return false;
        if (q['group_id']?.toString() != groupId) return false;
        return true;
      }).toList();

      if (matches.isNotEmpty) {
        // Return the next sequential question in this group if possible
        matches.sort((a, b) => (a['id']?.toString() ?? '').compareTo(b['id']?.toString() ?? ''));
        return matches.first;
      }
      return null;
    }

    final db = await database;
    final res = await db.query(
      'questions',
      where: 'id != ? AND group_id = ?',
      whereArgs: [currentId, groupId],
      orderBy: 'id ASC',
      limit: 1,
    );
    return res.isNotEmpty ? res.first : null;
  }
}