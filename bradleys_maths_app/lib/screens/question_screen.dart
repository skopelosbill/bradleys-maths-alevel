import 'package:flutter/material.dart';
import 'package:flutter_math_fork/flutter_math.dart';
import 'package:flutter_html/flutter_html.dart';
import 'package:flutter_html_math/flutter_html_math.dart';
import '../models/filter_state.dart';
import '../database_helper.dart';

class QuestionScreen extends StatefulWidget {
  final Map<String, dynamic> question;
  final DatabaseHelper dbHelper;
  final FilterState filterState;

  const QuestionScreen({
    super.key,
    required this.question,
    required this.dbHelper,
    required this.filterState,
  });

  @override
  State<QuestionScreen> createState() => _QuestionScreenState();
}

class _QuestionScreenState extends State<QuestionScreen> {
  late Map<String, dynamic> _currentQuestion;
  List<Map<String, dynamic>> _options = [];
  List<String> _steps = [];
  Map<String, dynamic>? _insight;

  // Flow State
  bool _optionsUnlocked = false; 
  int? _selectedOptionIndex;
  bool _isSubmitted = false;
  int _attemptCount = 0; 
  String? _feedbackText;
  bool _isCorrect = false;

  // Step-through Model Answer State
  bool _showModelAnswer = false;
  int _revealedStepsCount = 1;

  @override
  void initState() {
    super.initState();
    _loadQuestionData(widget.question);
  }

  void _loadQuestionData(Map<String, dynamic> q) {
    _currentQuestion = q;

    // 1. Parse steps
    final List<dynamic> rawSteps = q['steps'] ?? [];
    _steps = rawSteps.map((s) => s.toString()).toList();

    // 2. Extract Correct Answer from the last step
    // We keep the tags so the HTML renderer can handle formatting
    String correctAnswer = "";
    if (_steps.isNotEmpty) {
      correctAnswer = _steps.last
          .replaceAll('<strong>Final Answer</strong>', '')
          .replaceAll('Final Answer', '')
          .trim();
    }

    // 3. Extract 3 Distractors from pi_options
    final List<dynamic> piList = q['pi_options'] ?? [];
    List<Map<String, dynamic>> choices = [];

    choices.add({
      'ans': correctAnswer,
      'is_correct': 1,
      'feedback': 'Correct! Textbook derivation.',
    });

    for (var pi in piList) {
      choices.add({
        'ans': pi['ans']?.toString() ?? '',
        'is_correct': 0,
        'feedback': pi['feedback']?.toString() ?? 'Check your paper working carefully.',
      });
    }

    choices.shuffle();

    choices.add({
      'ans': 'None of the Above',
      'is_correct': 0,
      'feedback': 'None of the Above selected. Targeted coaching: Concept revision is recommended.',
    });

    if (q['bradley_insight'] != null && q['bradley_insight'] is Map) {
      _insight = Map<String, dynamic>.from(q['bradley_insight']);
    } else {
      _insight = null;
    }

    setState(() {
      _options = choices;
      _optionsUnlocked = false;
      _selectedOptionIndex = null;
      _isSubmitted = false;
      _attemptCount = 0;
      _feedbackText = null;
      _isCorrect = false;
      _showModelAnswer = false;
      _revealedStepsCount = 1;
    });
  }

  void _submitChoice() {
    if (_selectedOptionIndex == null) return;

    final selected = _options[_selectedOptionIndex!];
    final isNoneOfAbove = _selectedOptionIndex == _options.length - 1;
    final isCorrectChoice = selected['is_correct'] == 1;

    setState(() {
      if (isCorrectChoice) {
        _isCorrect = true;
        _isSubmitted = true;
        _feedbackText = "Outstanding! That is spot on. Study the textbook model answer below.";
        _showModelAnswer = true;
      } else if (isNoneOfAbove) {
        _isCorrect = false;
        _isSubmitted = true;
        _feedbackText = selected['feedback'];
        _showModelAnswer = true;
      } else {
        if (_attemptCount == 0) {
          _attemptCount = 1;
          _feedbackText = "${selected['feedback']}\n\nCheck your paper working carefully and take a Second Chance!";
          _selectedOptionIndex = null;
        } else {
          _isCorrect = false;
          _isSubmitted = true;
          _feedbackText = "${selected['feedback']}\n\nHere is the full step-by-step model answer to guide your revision.";
          _showModelAnswer = true;
        }
      }
    });
  }

  void _loadNextQuestion() async {
    final nextQ = await widget.dbHelper.fetchQuestion(widget.filterState);
    if (nextQ != null) {
      _loadQuestionData(nextQ);
    } else {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('No further questions found for this topic.')),
        );
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "${_currentQuestion['branch'] ?? 'Maths'} • ${_currentQuestion['topic'] ?? 'Topic'}",
          style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
        ),
        centerTitle: true,
      ),
      body: Center(
        child: Container(
          constraints: const BoxConstraints(maxWidth: 420),
          child: ListView(
            padding: const EdgeInsets.all(16.0),
            children: [
              Wrap(
                spacing: 6,
                children: [
                  Chip(
                    visualDensity: VisualDensity.compact,
                    backgroundColor: Colors.blue.shade50,
                    label: Text(
                      _currentQuestion['board']?.toString() ?? 'UK Board',
                      style: TextStyle(fontSize: 11, color: Colors.blue.shade900, fontWeight: FontWeight.bold),
                    ),
                  ),
                  Chip(
                    visualDensity: VisualDensity.compact,
                    backgroundColor: Colors.purple.shade50,
                    label: Text(
                      _currentQuestion['level'] == 'A' ? 'A Level' : 'AS Level',
                      style: TextStyle(fontSize: 11, color: Colors.purple.shade900, fontWeight: FontWeight.bold),
                    ),
                  ),
                ],
              ),

              const SizedBox(height: 12),

              Card(
                elevation: 1,
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                child: Padding(
                  padding: const EdgeInsets.all(18.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text(
                        "QUESTION",
                        style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: Colors.grey, letterSpacing: 1.2),
                      ),
                      const SizedBox(height: 10),
                      _renderMixedContent(_currentQuestion['question'] ?? ''),
                    ],
                  ),
                ),
              ),

              const SizedBox(height: 16),

              if (!_optionsUnlocked) ...[
                Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: Colors.amber.shade50,
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(color: Colors.amber.shade400, width: 1.5),
                  ),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Icon(Icons.edit_note, color: Colors.amber.shade900, size: 28),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              "PAPER FIRST MANDATE",
                              style: TextStyle(fontWeight: FontWeight.bold, color: Colors.amber.shade900, fontSize: 13),
                            ),
                            const SizedBox(height: 4),
                            const Text(
                              "Work through the entire question on paper with full method before looking at options.",
                              style: TextStyle(fontSize: 13, height: 1.35),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 20),
                SizedBox(
                  height: 52,
                  child: ElevatedButton.icon(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.teal.shade700,
                      foregroundColor: Colors.white,
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                    ),
                    icon: const Icon(Icons.lock_open, size: 20),
                    label: const Text(
                      "I've worked it out on paper — Show Options",
                      style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
                    ),
                    onPressed: () => setState(() => _optionsUnlocked = true),
                  ),
                ),
              ],

              if (_optionsUnlocked) ...[
                const Text(
                  "Select your answer",
                  style: TextStyle(fontSize: 13, fontWeight: FontWeight.bold, color: Colors.black87),
                ),
                const SizedBox(height: 10),
                ...List.generate(_options.length, (index) {
                  final opt = _options[index];
                  final isSelected = _selectedOptionIndex == index;
                  final isNoneOfAbove = index == _options.length - 1;

                  Color borderColor = isSelected ? Colors.indigo : Colors.grey.shade300;
                  Color bgColor = isSelected ? Colors.indigo.shade50 : Colors.white;

                  if (_isSubmitted) {
                    if (opt['is_correct'] == 1) {
                      borderColor = Colors.green;
                      bgColor = Colors.green.shade50;
                    } else if (isSelected) {
                      borderColor = Colors.red;
                      bgColor = Colors.red.shade50;
                    }
                  }

                  return Padding(
                    padding: const EdgeInsets.only(bottom: 10.0),
                    child: InkWell(
                      onTap: _isSubmitted ? null : () => setState(() => _selectedOptionIndex = index),
                      child: Container(
                        padding: const EdgeInsets.all(14),
                        decoration: BoxDecoration(
                          color: bgColor,
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(color: borderColor, width: isSelected ? 2 : 1),
                        ),
                        child: Row(
                          children: [
                            Text(isNoneOfAbove ? "5" : String.fromCharCode(65 + index), style: const TextStyle(fontWeight: FontWeight.bold)),
                            const SizedBox(width: 12),
                            Expanded(child: _renderMixedContent(opt['ans'] ?? '')),
                          ],
                        ),
                      ),
                    ),
                  );
                }),

                if (!_isSubmitted)
                  SizedBox(
                    width: double.infinity,
                    child: ElevatedButton(
                      style: ElevatedButton.styleFrom(backgroundColor: Colors.indigo.shade700, foregroundColor: Colors.white),
                      onPressed: _selectedOptionIndex == null ? null : _submitChoice,
                      child: Text(_attemptCount == 1 ? "Submit Second Chance" : "Submit Answer"),
                    ),
                  ),
              ],

              if (_feedbackText != null) ...[
                const SizedBox(height: 18),
                Container(
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    color: _isCorrect ? Colors.green.shade50 : Colors.orange.shade50,
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(color: _isCorrect ? Colors.green : Colors.orange),
                  ),
                  child: _renderMixedContent(_feedbackText!),
                ),
              ],

              if (_showModelAnswer) ...[
                const SizedBox(height: 24),
                const Text("Model Answer", style: TextStyle(fontWeight: FontWeight.bold)),
                ...List.generate(_revealedStepsCount.clamp(0, _steps.length), (i) {
                  return Container(
                    margin: const EdgeInsets.symmetric(vertical: 4),
                    padding: const EdgeInsets.all(10),
                    decoration: BoxDecoration(border: Border.all(color: Colors.grey.shade300), borderRadius: BorderRadius.circular(8)),
                    child: _renderMixedContent(_steps[i]),
                  );
                }),
                if (_revealedStepsCount < _steps.length)
                  TextButton(onPressed: () => setState(() => _revealedStepsCount++), child: const Text("Reveal Next Step")),
                
                if (_revealedStepsCount >= _steps.length && _insight != null) 
                  _renderInsightCard(_insight!),

                const SizedBox(height: 20),
                ElevatedButton(onPressed: _loadNextQuestion, child: const Text("Next Question")),
              ],
            ],
          ),
        ),
      ),
    );
  }

  Widget _renderInsightCard(Map<String, dynamic> insight) {
    final type = insight['type']?.toString().toLowerCase() ?? 'pro-tip';
    Color themeColor = type.contains('caution') ? Colors.orange : (type.contains('deeper') ? Colors.purple : Colors.blue);
    
    return Container(
      margin: const EdgeInsets.only(top: 16),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(color: themeColor.withOpacity(0.1), border: Border.all(color: themeColor), borderRadius: BorderRadius.circular(12)),
      child: Column(
        children: [
          Text(insight['title'] ?? "Insight", style: TextStyle(fontWeight: FontWeight.bold, color: themeColor)),
          const Divider(),
          _renderMixedContent(insight['content'] ?? ''),
        ],
      ),
    );
  }

  Widget _renderMixedContent(String raw) {
    return Html(
      data: raw,
      extensions: const [MathHtmlExtension()],
      style: {
        "body": Style(margin: Margins.zero, padding: HtmlPaddings.zero, fontSize: FontSize(15)),
        "table": Style(width: Width(100, Unit.percent), border: Border.all(color: Colors.black54)),
        "td": Style(padding: HtmlPaddings.all(4), border: Border.all(color: Colors.black54), textAlign: TextAlign.center),
        "th": Style(padding: HtmlPaddings.all(4), border: Border.all(color: Colors.black54), backgroundColor: Colors.grey.shade200),
      },
    );
  }
}