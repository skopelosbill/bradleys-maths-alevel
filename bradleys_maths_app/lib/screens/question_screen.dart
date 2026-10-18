import 'package:flutter/material.dart';
import 'package:flutter_math_fork/flutter_math.dart';
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
  List<Map<String, dynamic>> _steps = [];
  String? _insight;

  // Flow State
  bool _optionsUnlocked = false; // Step 8 & 9 Gate
  int? _selectedOptionIndex;
  bool _isSubmitted = false;
  int _attemptCount = 0; // Tracks first attempt vs second chance (11b)
  String? _feedbackText;
  bool _isCorrect = false;

  // Step-through Model Answer State (11)
  bool _showModelAnswer = false;
  int _revealedStepsCount = 1;

  @override
  void initState() {
    super.initState();
    _currentQuestion = widget.question;
    _loadQuestionAssets(_currentQuestion['id']);
  }

  Future<void> _loadQuestionAssets(dynamic qId) async {
    final opts = await widget.dbHelper.fetchOptions(qId);
    final stps = await widget.dbHelper.fetchSteps(qId);
    final ins = await widget.dbHelper.fetchInsight(qId);

    // Box 5: Fixed "None of the Above"
    final fullOptions = List<Map<String, dynamic>>.from(opts);
    fullOptions.add({
      'id': -1,
      'option_text': 'None of the Above',
      'is_correct': 0,
      'feedback': 'None of the Above selected. Targeted coaching: Concept revision is recommended.',
    });

    setState(() {
      _options = fullOptions;
      _steps = stps;
      _insight = ins;
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
    final isNoneOfAbove = selected['id'] == -1;
    final isCorrectChoice = selected['is_correct'] == 1;

    setState(() {
      if (isCorrectChoice) {
        // ------------------------------------
        // 11a: CORRECT
        // ------------------------------------
        _isCorrect = true;
        _isSubmitted = true;
        _feedbackText = "Outstanding! That is spot on. Study the textbook model answer below.";
        _showModelAnswer = true;
      } else if (isNoneOfAbove) {
        // ------------------------------------
        // 11c: NONE OF THE ABOVE
        // ------------------------------------
        _isCorrect = false;
        _isSubmitted = true;
        _feedbackText = "Revision Needed: You recognized that none of the mathematical forms matched your working. Step through the model answer to consolidate the concept.";
        _showModelAnswer = true;
      } else {
        // ------------------------------------
        // 11b: DIAGNOSTIC DISTRACTOR (PI)
        // ------------------------------------
        if (_attemptCount == 0) {
          // First Miss -> Second Chance
          _attemptCount = 1;
          _feedbackText = "${selected['feedback']}\n\nCheck your paper working carefully and give it a Second Chance!";
          _selectedOptionIndex = null; // Let them pick again
        } else {
          // Missed Second Chance -> Reveal Answer
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
      _currentQuestion = nextQ;
      _loadQuestionAssets(nextQ['id']);
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
          constraints: const BoxConstraints(maxWidth: 420), // Mobile viewport rule
          child: ListView(
            padding: const EdgeInsets.all(16.0),
            children: [
              // Metadata tags (Board & Level)
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
                      _currentQuestion['level']?.toString() ?? 'A Level',
                      style: TextStyle(fontSize: 11, color: Colors.purple.shade900, fontWeight: FontWeight.bold),
                    ),
                  ),
                ],
              ),

              const SizedBox(height: 12),

              // ------------------------------------
              // STEP 7: QUESTION PRESENTATION
              // ------------------------------------
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
                      _buildMathContent(_currentQuestion['question_text'] ?? ''),
                    ],
                  ),
                ),
              ),

              const SizedBox(height: 16),

              // ------------------------------------
              // STEP 8: THE "PAPER FIRST" MANDATE BANNER
              // ------------------------------------
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

                // ------------------------------------
                // STEP 9: READINESS GATE
                // ------------------------------------
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
                    onPressed: () {
                      setState(() => _optionsUnlocked = true);
                    },
                  ),
                ),
              ],

              // ------------------------------------
              // STEP 10: 5-BOX OPTION GRID
              // ------------------------------------
              if (_optionsUnlocked) ...[
                const Text(
                  "Step 10: Select your answer",
                  style: TextStyle(fontSize: 13, fontWeight: FontWeight.bold, color: Colors.black87),
                ),
                const SizedBox(height: 10),

                ...List.generate(_options.length, (index) {
                  final opt = _options[index];
                  final isSelected = _selectedOptionIndex == index;
                  final isNoneOfAbove = opt['id'] == -1;

                  Color borderColor = Colors.grey.shade300;
                  Color bgColor = Colors.white;

                  if (_isSubmitted) {
                    if (opt['is_correct'] == 1) {
                      borderColor = Colors.green;
                      bgColor = Colors.green.shade50;
                    } else if (isSelected && opt['is_correct'] != 1) {
                      borderColor = Colors.red;
                      bgColor = Colors.red.shade50;
                    }
                  } else if (isSelected) {
                    borderColor = isNoneOfAbove ? Colors.deepOrange : Colors.indigo;
                    bgColor = isNoneOfAbove ? Colors.deepOrange.shade50 : Colors.indigo.shade50;
                  }

                  return Padding(
                    padding: const EdgeInsets.only(bottom: 10.0),
                    child: InkWell(
                      onTap: _isSubmitted ? null : () => setState(() => _selectedOptionIndex = index),
                      borderRadius: BorderRadius.circular(12),
                      child: Container(
                        padding: const EdgeInsets.all(14),
                        decoration: BoxDecoration(
                          color: bgColor,
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(color: borderColor, width: isSelected ? 2 : 1),
                        ),
                        child: Row(
                          children: [
                            CircleAvatar(
                              radius: 12,
                              backgroundColor: borderColor.withAlpha(51),
                              child: Text(
                                isNoneOfAbove ? "5" : String.fromCharCode(65 + index),
                                style: TextStyle(
                                  fontSize: 11,
                                  fontWeight: FontWeight.bold,
                                  color: borderColor == Colors.grey.shade300 ? Colors.black87 : borderColor,
                                ),
                              ),
                            ),
                            const SizedBox(width: 12),
                            Expanded(child: _buildMathContent(opt['option_text'] ?? '')),
                          ],
                        ),
                      ),
                    ),
                  );
                }),

                if (!_isSubmitted)
                  SizedBox(
                    height: 48,
                    child: ElevatedButton(
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Colors.indigo.shade700,
                        foregroundColor: Colors.white,
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                      ),
                      onPressed: _selectedOptionIndex == null ? null : _submitChoice,
                      child: Text(
                        _attemptCount == 1 ? "Submit Second Chance" : "Submit Answer",
                        style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 15),
                      ),
                    ),
                  ),
              ],

              // ------------------------------------
// STEP 11: DIAGNOSTIC EVALUATION FEEDBACK
// ------------------------------------
if (_feedbackText != null) ...[
  const SizedBox(height: 18),
  Container(
    padding: const EdgeInsets.all(14),
    decoration: BoxDecoration(
      color: _isCorrect ? Colors.green.shade50 : Colors.orange.shade50,
      borderRadius: BorderRadius.circular(12),
      border: Border.all(
        color: _isCorrect ? Colors.green : Colors.orange, 
        width: 1.5
      ),
    ),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            Icon(
              _isCorrect ? Icons.check_circle : Icons.warning_amber,
              color: _isCorrect ? Colors.green.shade800 : Colors.orange.shade900,
            ),
            const SizedBox(width: 8),
            Text(
              _isCorrect 
                  ? "Correct!" 
                  : (_attemptCount == 1 && !_isSubmitted ? "Second Chance" : "Review Needed"),
              style: TextStyle(
                fontWeight: FontWeight.bold,
                color: _isCorrect ? Colors.green.shade800 : Colors.orange.shade900,
              ),
            ),
          ],
        ),
        const SizedBox(height: 6),
        // FIXED: Now uses the math builder instead of raw Text
        _buildMathContent(_feedbackText!),
      ],
    ),
  ),
],

              // ------------------------------------
              // MODEL ANSWER STEP-THROUGH & INSIGHT
              // ------------------------------------
              if (_showModelAnswer) ...[
                const SizedBox(height: 24),
                const Divider(),
                const SizedBox(height: 12),
                const Text(
                  "Textbook Model Answer (Step-by-Step)",
                  style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 12),

                ...List.generate(
                  _revealedStepsCount.clamp(0, _steps.length),
                  (i) => Container(
                    margin: const EdgeInsets.only(bottom: 8),
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      color: Colors.grey.shade50,
                      borderRadius: BorderRadius.circular(10),
                      border: Border.all(color: Colors.grey.shade300),
                    ),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          "Step ${i + 1}: ",
                          style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 13),
                        ),
                        Expanded(child: _buildMathContent(_steps[i]['step_text'] ?? '')),
                      ],
                    ),
                  ),
                ),

                if (_revealedStepsCount < _steps.length)
                  OutlinedButton.icon(
                    icon: const Icon(Icons.arrow_downward, size: 18),
                    label: Text("Reveal Next Step (${_revealedStepsCount + 1}/${_steps.length})"),
                    onPressed: () {
                      setState(() => _revealedStepsCount++);
                    },
                  ),

                // Head Teacher's Eye Insight
                if (_revealedStepsCount >= _steps.length && _insight != null) ...[
                  const SizedBox(height: 14),
                  Container(
                    padding: const EdgeInsets.all(14),
                    decoration: BoxDecoration(
                      color: Colors.indigo.shade50,
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(color: Colors.indigo.shade200),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          children: [
                            Icon(Icons.lightbulb, color: Colors.indigo.shade800, size: 20),
                            const SizedBox(width: 8),
                            Text(
                              "Head Teacher's Eye",
                              style: TextStyle(fontWeight: FontWeight.bold, color: Colors.indigo.shade900),
                            ),
                          ],
                        ),
                        const SizedBox(height: 6),
                        Text(
                          _insight!,
                          style: TextStyle(fontSize: 12.5, color: Colors.indigo.shade900, height: 1.35),
                        ),
                      ],
                    ),
                  ),
                ],

                // ------------------------------------
                // STEP 12: SMART NEXT STEPS
                // ------------------------------------
                const SizedBox(height: 24),
                Row(
                  children: [
                    Expanded(
                      child: OutlinedButton(
                        onPressed: () => Navigator.of(context).pop(),
                        child: const Text("Dashboard"),
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: ElevatedButton(
                        style: ElevatedButton.styleFrom(backgroundColor: Colors.indigo.shade700, foregroundColor: Colors.white),
                        onPressed: _loadNextQuestion,
                        child: const Text("Next Question"),
                      ),
                    ),
                  ],
                ),
              ],

              const SizedBox(height: 40),
            ],
          ),
        ),
      ),
    );
  }

 Widget _buildMathContent(String rawText) {
  final clean = rawText.replaceAll('<br>', '\n');
  
  // This Regex looks for LaTeX commands, powers, or subscripts
  // It captures the math part separately from the text
  final regex = RegExp(r'(\\[a-zA-Z]+(?:\{.*?\})?|[\^_{}]|[0-9]+/[0-9]+)');
  final parts = clean.split(RegExp(r'\s+')); // Still split by space for basic layout

  return Wrap(
    crossAxisAlignment: WrapCrossAlignment.center,
    children: parts.map((part) {
      // If the part contains a backslash or math symbol
      bool isMath = part.contains(r'\') || part.contains('^') || part.contains('_');
      
      if (isMath) {
        // Separate math from trailing punctuation (like a period)
        final mathMatch = RegExp(r'([^\.,!?]*)([\.,!?]*)').firstMatch(part);
        final mathPart = mathMatch?.group(1) ?? part;
        final punctuation = mathMatch?.group(2) ?? '';

        return Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Math.tex(
              mathPart,
              textStyle: const TextStyle(fontSize: 15),
              onErrorFallback: (_) => Text(mathPart, style: const TextStyle(fontSize: 15)),
            ),
            if (punctuation.isNotEmpty) 
              Text(punctuation, style: const TextStyle(fontSize: 15)),
            const Text(' '), // Add the space back
          ],
        );
      } else {
        return Text('$part ', style: const TextStyle(fontSize: 15, height: 1.3));
      }
    }).toList(),
  );
}
}