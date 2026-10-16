import 'dart:io';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';
import 'models/filter_state.dart';

class DatabaseHelper {
  static Database? _db;

  Future<Database> get database async {
    if (_db != null) return _db!;

    var databasesPath = await getDatabasesPath();
    var path = join(databasesPath, "bradleys_maths.db");

    var exists = await databaseExists(path);
    if (!exists) {
      ByteData data = await rootBundle.load(join("assets", "bradleys_maths.db"));
      List<int> bytes =
          data.buffer.asUint8List(data.offsetInBytes, data.lengthInBytes);
      await File(path).writeAsBytes(bytes, flush: true);
    }

    _db = await openDatabase(path);
    return _db!;
  }

  // ==========================================
  // 1. CASCADING TAXONOMY QUERIES (STEPS 4 - 6)
  // ==========================================

  Future<List<String>> getMajorAreas({String? branch}) async {
    if (kIsWeb) {
      return _getWebMajorAreas(branch);
    }

    final db = await database;
    List<Map<String, dynamic>> results;
    if (branch != null && branch != 'Random') {
      results = await db.rawQuery(
        'SELECT DISTINCT major_area FROM questions WHERE branch = ? ORDER BY major_area ASC',
        [branch],
      );
    } else {
      results = await db.rawQuery(
        'SELECT DISTINCT major_area FROM questions WHERE branch != ? ORDER BY major_area ASC',
        ['Comprehension'], // Random excludes Comprehension
      );
    }

    return results
        .map((row) => row['major_area']?.toString() ?? '')
        .where((s) => s.isNotEmpty)
        .toList();
  }

  Future<List<String>> getTopics({String? branch, String? majorArea}) async {
    if (kIsWeb) {
      return _getWebTopics(branch, majorArea);
    }

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
    final results = await db.rawQuery(
      'SELECT DISTINCT topic FROM questions $whereClause ORDER BY topic ASC',
      args,
    );

    return results
        .map((row) => row['topic']?.toString() ?? '')
        .where((s) => s.isNotEmpty)
        .toList();
  }

  // ==========================================
  // 2. QUESTION & OPTION QUERIES (STEPS 7 - 11)
  // ==========================================

  Future<Map<String, dynamic>?> fetchQuestion(FilterState filter) async {
    if (kIsWeb) {
      return _getWebQuestion(filter);
    }

    final db = await database;
    List<String> conditions = [];
    List<dynamic> args = [];

    if (!filter.isRandomBoard) {
      conditions.add('board = ?');
      args.add(filter.board);
    }

    if (!filter.isRandomLevel) {
      conditions.add('level = ?');
      args.add(filter.level);
    }

    if (!filter.isRandomBranch) {
      conditions.add('branch = ?');
      args.add(filter.branch);
    } else {
      // Step 4 Rule: Random excludes Comprehension
      conditions.add('branch != ?');
      args.add('Comprehension');
    }

    if (!filter.isRandomMajorArea) {
      conditions.add('major_area = ?');
      args.add(filter.majorArea);
    }

    if (!filter.isRandomTopic) {
      conditions.add('topic = ?');
      args.add(filter.topic);
    }

    String whereClause = conditions.isNotEmpty ? 'WHERE ${conditions.join(' AND ')}' : '';
    final query = 'SELECT * FROM questions $whereClause ORDER BY RANDOM() LIMIT 1';

    final results = await db.rawQuery(query, args);
    if (results.isNotEmpty) return results.first;

    // Fallback if strict filter yields 0 matches
    final fallback = await db.rawQuery(
      'SELECT * FROM questions WHERE branch != ? ORDER BY RANDOM() LIMIT 1',
      ['Comprehension'],
    );
    return fallback.isNotEmpty ? fallback.first : null;
  }

  Future<List<Map<String, dynamic>>> fetchOptions(dynamic questionId) async {
    if (kIsWeb) {
      return _getWebOptions(questionId);
    }
    final db = await database;
    return await db.rawQuery(
      'SELECT * FROM options WHERE question_id = ? ORDER BY RANDOM()',
      [questionId],
    );
  }

  Future<List<Map<String, dynamic>>> fetchSteps(dynamic questionId) async {
    if (kIsWeb) {
      return _getWebSteps(questionId);
    }
    final db = await database;
    return await db.rawQuery(
      'SELECT * FROM steps WHERE question_id = ? ORDER BY step_number ASC',
      [questionId],
    );
  }

  Future<String?> fetchInsight(dynamic questionId) async {
    if (kIsWeb) {
      return _getWebInsight(questionId);
    }
    final db = await database;
    final results = await db.rawQuery(
      'SELECT insight_text FROM insights WHERE question_id = ? LIMIT 1',
      [questionId],
    );
    if (results.isNotEmpty) return results.first['insight_text'] as String?;
    return null;
  }

  // ==========================================
  // WEB IN-BROWSER SIMULATION DATA ENGINE
  // ==========================================

  static final List<Map<String, dynamic>> _webQuestions = [
    {
      'id': 1,
      'board': 'Edexcel',
      'level': 'A Level',
      'branch': 'Pure',
      'major_area': 'Calculus',
      'topic': 'Integration by Parts',
      'question_text': r'Find \int x \cos(2x) \, dx',
    },
    {
      'id': 2,
      'board': 'AQA',
      'level': 'A Level',
      'branch': 'Pure',
      'major_area': 'Algebra & Functions',
      'topic': 'Binomial Expansion',
      'question_text': r'Find the first three terms in ascending powers of x for (1 - 2x)^{-3}',
    },
    {
      'id': 3,
      'board': 'OCR',
      'level': 'AS Level',
      'branch': 'Mechanics',
      'major_area': 'Kinematics',
      'topic': 'Constant Acceleration',
      'question_text': r'A particle moves along a straight line with initial velocity 4 \, \text{m/s} and constant acceleration 3 \, \text{m/s}^2. Calculate distance after 5 seconds.',
    },
    {
      'id': 4,
      'board': 'Edexcel',
      'level': 'A Level',
      'branch': 'Statistics',
      'major_area': 'Probability Distributions',
      'topic': 'Normal Distribution',
      'question_text': r'Let X \sim N(50, 16). Find P(X > 54).',
    },
    {
      'id': 5,
      'board': 'OCR MEI',
      'level': 'A Level',
      'branch': 'Comprehension',
      'major_area': 'Mathematical Modelling',
      'topic': 'Population Dynamics',
      'question_text': r'A population model satisfies \frac{dP}{dt} = 0.05P\left(1 - \frac{P}{2000}\right). State the carrying capacity.',
    },
  ];

  List<String> _getWebMajorAreas(String? branch) {
    var filtered = _webQuestions.where((q) {
      if (branch != null && branch != 'Random') return q['branch'] == branch;
      return q['branch'] != 'Comprehension';
    });
    return filtered.map((q) => q['major_area'] as String).toSet().toList();
  }

  List<String> _getWebTopics(String? branch, String? majorArea) {
    var filtered = _webQuestions.where((q) {
      if (branch != null && branch != 'Random' && q['branch'] != branch) return false;
      if (branch == null || branch == 'Random') {
        if (q['branch'] == 'Comprehension') return false;
      }
      if (majorArea != null && majorArea != 'Random' && q['major_area'] != majorArea) return false;
      return true;
    });
    return filtered.map((q) => q['topic'] as String).toSet().toList();
  }

  Map<String, dynamic> _getWebQuestion(FilterState filter) {
    var matches = _webQuestions.where((q) {
      if (!filter.isRandomBoard && q['board'] != filter.board) return false;
      if (!filter.isRandomLevel && q['level'] != filter.level) return false;
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
    return _webQuestions.first;
  }

  List<Map<String, dynamic>> _getWebOptions(dynamic questionId) {
    return [
      {
        'id': 101,
        'option_text': r'\frac{1}{2}x \sin(2x) + \frac{1}{4}\cos(2x) + C',
        'is_correct': 1,
        'feedback': 'Correct! Standard integration by parts applied correctly.',
      },
      {
        'id': 102,
        'option_text': r'x \sin(2x) - \frac{1}{2}\cos(2x) + C',
        'is_correct': 0,
        'feedback': r'Plausible Error: Forgot the factor of \frac{1}{2} from integrating \cos(2x).',
      },
      {
        'id': 103,
        'option_text': r'\frac{1}{2}x \sin(2x) - \frac{1}{4}\cos(2x) + C',
        'is_correct': 0,
        'feedback': 'Plausible Error: Sign error when integrating the second term.',
      },
      {
        'id': 104,
        'option_text': r'x^2 \sin(2x) + C',
        'is_correct': 0,
        'feedback': 'Plausible Error: Integrated both terms directly without using the product rule.',
      },
    ]..shuffle();
  }

  List<Map<String, dynamic>> _getWebSteps(dynamic questionId) {
    return [
      {'step_number': 1, 'step_text': r'\text{Let } u = x \implies \frac{du}{dx} = 1'},
      {'step_number': 2, 'step_text': r'\text{Let } \frac{dv}{dx} = \cos(2x) \implies v = \frac{1}{2}\sin(2x)'},
      {'step_number': 3, 'step_text': r'\text{Apply formula: } \int u v^\prime dx = uv - \int v u^\prime dx'},
      {'step_number': 4, 'step_text': r'= \frac{1}{2}x\sin(2x) - \int \frac{1}{2}\sin(2x) \, dx'},
      {'step_number': 5, 'step_text': r'= \frac{1}{2}x\sin(2x) + \frac{1}{4}\cos(2x) + C'},
    ];
  }

  String _getWebInsight(dynamic questionId) {
    return "Head Teacher's Eye: In questions of the form $\\int x f(x) dx$, always choose $u = x$ so that differentiation eliminates the polynomial term. Remember to divide by the coefficient inside trigonometric arguments!";
  }
}