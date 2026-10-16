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
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
        useMaterial3: true,
      ),
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
  // 1. Setup the initial state
  Map<String, dynamic> _question = {
    'topic': 'System Check',
    'question_text': 'Welcome, Bill!\n\nThe App Chassis is ALIVE.\n\nTap the button below to test the logic.'
  };
  
  final DatabaseHelper _dbHelper = DatabaseHelper();

  // 2. The Logic Function
   void _loadRandomQuestion() async {
    try {
      final q = await _dbHelper.getRandomQuestion();
      setState(() {
        // The ?? operator provides a fallback if q is null
        _question = q ?? {
          'topic': 'Database Note',
          'question_text': 'No question found or database restricted.'
        };
      });
    } catch (e) {
      setState(() {
        _question = {
          'topic': 'Environment Note',
          'question_text': 'Database restricted in Browser.\n\nError: $e'
        };
      });
    }
  }

  // 3. The Visual Layout
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Bradley's Maths Prototype"),
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
      ),
      body: Center(
        child: Container(
          constraints: const BoxConstraints(maxWidth: 360), // Our 360px Rule!
          padding: const EdgeInsets.all(20.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Card(
                color: Colors.blue.shade50,
                child: Padding(
                  padding: const EdgeInsets.all(12.0),
                  child: Text(
                    "TOPIC: ${_question['topic']}",
                    style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 18),
                  ),
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
              ElevatedButton.icon(
                icon: const Icon(Icons.refresh),
                label: const Text("Try Database Connection"),
                onPressed: _loadRandomQuestion,
              ),
            ],
          ),
        ),
      ),
    );
  }
}