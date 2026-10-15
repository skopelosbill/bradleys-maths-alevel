import 'package:flutter/material.dart';
import 'database_helper.dart';

void main() {
  runApp(const BradleysMathsApp());
}

class BradleysMathsApp extends StatelessWidget {
  const BradleysMathsApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Bradley's Maths",
      theme: ThemeData(primarySwatch: Colors.blue, useMaterial3: true),
      home: const QuestionPage(),
    );
  }
}

class QuestionPage extends StatefulWidget {
  const QuestionPage({super.key});

  @override
  State<QuestionPage> createState() => _QuestionPageState();
}

class _QuestionPageState extends State<QuestionPage> {
  // We start with the Welcome message so the wheel never spins on startup
  Map<String, dynamic> _question = {
    'topic': 'System Check',
    'question_text': 'Welcome, Bill! The App Chassis is ALIVE.\n\nTap the button below to attempt a database connection.'
  };
  
  final DatabaseHelper _dbHelper = DatabaseHelper();

  void _loadRandomQuestion() async {
    try {
      var q = await _dbHelper.getRandomQuestion();
      setState(() {
        _question = q;
      });
    } catch (e) {
      setState(() {
        _question = {
          'topic': 'Connection Note',
          'question_text': 'Database access is restricted in Chrome.\n\nError: $e'
        };
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Bradley's Maths Prototype"),
        backgroundColor: Colors.blue.shade100,
      ),
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Container(
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: Colors.blue.shade50,
                borderRadius: BorderRadius.circular(10),
              ),
              child: Text(
                "TOPIC: ${_question['topic']}",
                style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 18),
              ),
            ),
            const SizedBox(height: 30),
            Expanded(
              child: SingleChildScrollView(
                child: Text(
                  _question['question_text'].toString().replaceAll('<br>', '\n'),
                  style: const TextStyle(fontSize: 16),
                  textAlign: TextAlign.center,
                ),
              ),
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              style: ElevatedButton.styleFrom(
                minimumSize: const Size(200, 50),
              ),
              onPressed: _loadRandomQuestion,
              child: const Text("Try Database Connection"),
            ),
          ],
        ),
      ),
    );
  }
}