import 'package:flutter/material.dart';
import 'database_helper.dart';
import 'package:flutter_math_fork/flutter_math.dart';

void main() {
  runApp(const BradleysMathsApp());
}

class BradleysMathsApp extends StatelessWidget {
  const BradleysMathsApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
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
  Map<String, dynamic>? _question;
  final DatabaseHelper _dbHelper = DatabaseHelper();

  @override
  void initState() {
    super.initState();
    _loadRandomQuestion();
  }

  void _loadRandomQuestion() async {
    var q = await _dbHelper.getRandomQuestion();
    setState(() {
      _question = q;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Bradley's Maths Prototype")),
      body: _question == null
          ? const Center(child: CircularProgressIndicator())
          : Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text("Topic: ${_question!['topic']}", 
                       style: const TextStyle(fontWeight: FontWeight.bold)),
                  const Divider(),
                  const SizedBox(height: 20),
                  // This is a simple text display for now
                  Text(_question!['question_text'].toString().replaceAll('<br>', '\n')),
                  const Spacer(),
                  ElevatedButton(
                    onPressed: _loadRandomQuestion,
                    child: const Text("Next Random Question"),
                  ),
                ],
              ),
            ),
    );
  }
}