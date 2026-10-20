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
  List<String> _steps = [];
  Map<String, dynamic>? _insight;

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
    _loadQuestionData(widget.question);
  }

  void _loadQuestionData(Map<String, dynamic> q) {
    _currentQuestion = q;

    // 1. Parse steps
    final List<dynamic> rawSteps = q['steps'] ?? [];
    _steps = rawSteps.map((s) => s.toString()).toList();

    // 2. Extract Correct Answer from the last step
    String correctAnswer = "";
    if (_steps.isNotEmpty) {
      correctAnswer = _steps.last
          .replaceAll('<strong>Final Answer</strong>', '')
          .replaceAll('Final Answer', '')
          .replaceAll('<br>', '')
          .trim();
    }

    // 3. Extract 3 Distractors from pi_options
    final List<dynamic> piList = q['pi_options'] ?? [];
    List<Map<String, dynamic>> choices = [];

    // Add Correct Choice
    choices.add({
      'ans': correctAnswer,
      'is_correct': 1,
      'feedback': 'Correct! Textbook derivation.',
    });

    // Add 3 Distractors
    for (var pi in piList) {
      choices.add({
        'ans': pi['ans']?.toString() ?? '',
        'is_correct': 0,
        'feedback': pi['feedback']?.toString() ?? 'Check your paper working carefully.',
      });
    }

    // Shuffle 1 Correct + 3 Distractors
    choices.shuffle();

    // Box 5: Fixed "None of the Above"
    choices.add({
      'ans': 'None of the Above',
      'is_correct': 0,
      'feedback': 'None of the Above selected. Targeted coaching: Concept revision is recommended.',
    });

    // 4. Extract Bradley Insight
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
        // 11a: CORRECT
        _isCorrect = true;
        _isSubmitted = true;
        _feedbackText = "Outstanding! That is spot on. Study the textbook model answer below.";
        _showModelAnswer = true;
      } else if (isNoneOfAbove) {
        // 11c: NONE OF THE ABOVE
        _isCorrect = false;
        _isSubmitted = true;
        _feedbackText = selected['feedback'];
        _showModelAnswer = true;
      } else {
        // 11b: DIAGNOSTIC DISTRACTOR (PI)
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
                      _currentQuestion['level'] == 'A' ? 'A Level' : (_currentQuestion['level'] == 'AS' ? 'AS Level' : 'A Level'),
                      style: TextStyle(fontSize: 11, color: Colors.purple.shade900, fontWeight: FontWeight.bold),
                    ),
                  ),
                ],
              ),

              const SizedBox(height: 12),

              // ------------------------------------
              // STEP 7: QUESTION STATEMENT
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
                      _renderMixedMath(_currentQuestion['question'] ?? ''),
                    ],
                  ),
                ),
              ),

              const SizedBox(height: 16),

              // ------------------------------------
              // STEP 8: PAPER FIRST MANDATE BANNER
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
                  final isNoneOfAbove = index == _options.length - 1;

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
                            Expanded(child: _renderMixedMath(opt['ans'] ?? '')),
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
              // STEP 11: DIAGNOSTIC FEEDBACK
              // ------------------------------------
              if (_feedbackText != null) ...[
                const SizedBox(height: 18),
                Container(
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    color: _isCorrect ? Colors.green.shade50 : Colors.orange.shade50,
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(color: _isCorrect ? Colors.green : Colors.orange, width: 1.5),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Icon(_isCorrect ? Icons.check_circle : Icons.warning_amber,
                              color: _isCorrect ? Colors.green.shade800 : Colors.orange.shade900),
                          const SizedBox(width: 8),
                          Text(
                            _isCorrect ? "Correct!" : (_attemptCount == 1 && !_isSubmitted ? "Second Chance" : "Review Needed"),
                            style: TextStyle(
                              fontWeight: FontWeight.bold,
                              color: _isCorrect ? Colors.green.shade800 : Colors.orange.shade900,
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 6),
                      _renderMixedMath(_feedbackText!),
                    ],
                  ),
                ),
              ],

              // ------------------------------------
              // MODEL ANSWER & HEAD TEACHER INSIGHT
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
                  (i) {
                    final cleanStep = _steps[i].replaceAll('<br>', '\n');
                    return Container(
                      margin: const EdgeInsets.only(bottom: 8),
                      padding: const EdgeInsets.all(12),
                      decoration: BoxDecoration(
                        color: Colors.grey.shade50,
                        borderRadius: BorderRadius.circular(10),
                        border: Border.all(color: Colors.grey.shade300),
                      ),
                      child: _renderMixedMath(cleanStep),
                    );
                  },
                ),

                if (_revealedStepsCount < _steps.length)
                  OutlinedButton.icon(
                    icon: const Icon(Icons.arrow_downward, size: 18),
                    label: Text("Reveal Next Step (${_revealedStepsCount + 1}/${_steps.length})"),
                    onPressed: () {
                      setState(() => _revealedStepsCount++);
                    },
                  ),

              // ------------------------------------
                // BRADLEY INSIGHT: CENTERED 2-LINE CARD
                // ------------------------------------
                if (_revealedStepsCount >= _steps.length && _insight != null) ...[
                  Builder(
                    builder: (context) {
                      final type = (_insight!['type']?.toString() ?? 'pro-tip').toLowerCase();
                      final rawTitle = _insight!['title']?.toString() ?? "The Head Teacher's Eye";
                      final content = _insight!['content']?.toString() ?? '';

                      // 1. Color Themes from Schema: Deeper, Pro-tip, Caution
                      Color bgColor;
                      Color borderColor;
                      Color primaryColor;
                      Color subtitleColor;

                      if (type.contains('deeper')) {
                        bgColor = const Color(0xFFF3E8FF); // Soft purple
                        borderColor = const Color(0xFFD8B4FE);
                        primaryColor = const Color(0xFF581C87); // Deep purple
                        subtitleColor = const Color(0xFF6B21A8);
                      } else if (type.contains('caution')) {
                        bgColor = const Color(0xFFFEF9C3); // Soft yellow
                        borderColor = const Color(0xFFFDE047);
                        primaryColor = const Color(0xFF78350F); // Deep browny-orange
                        subtitleColor = const Color(0xFF92400E);
                      } else {
                        // Default / Pro-tip: Blue
                        bgColor = const Color(0xFFEFF6FF); // Soft blue
                        borderColor = const Color(0xFFBFDBFE);
                        primaryColor = const Color(0xFF1E3A8A); // Deep blue
                        subtitleColor = const Color(0xFF1E40AF);
                      }

                      // 2. Parse into 2 Centered Lines
                      String line1 = "The Head Teacher's Eye";
                      String line2 = "";

                      if (rawTitle.contains(':')) {
                        final parts = rawTitle.split(':');
                        line1 = parts[0].trim();
                        line2 = parts.sublist(1).join(':').trim();
                      } else {
                        line2 = rawTitle.trim();
                      }

                      return Container(
                        margin: const EdgeInsets.only(top: 16),
                        padding: const EdgeInsets.all(16),
                        decoration: BoxDecoration(
                          color: bgColor,
                          borderRadius: BorderRadius.circular(14),
                          border: Border.all(color: borderColor, width: 1.5),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            // Line 1: Centered Brand Badge
                            Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                Icon(Icons.lightbulb, color: primaryColor, size: 20),
                                const SizedBox(width: 6),
                                Text(
                                  line1,
                                  style: TextStyle(
                                    fontWeight: FontWeight.w800,
                                    fontSize: 13,
                                    letterSpacing: 0.5,
                                    color: primaryColor,
                                  ),
                                ),
                              ],
                            ),

                            // Line 2: Centered Subtitle
                            if (line2.isNotEmpty) ...[
                              const SizedBox(height: 6),
                              Text(
                                line2,
                                textAlign: TextAlign.center,
                                style: TextStyle(
                                  fontWeight: FontWeight.bold,
                                  fontSize: 14.5,
                                  color: subtitleColor,
                                ),
                              ),
                            ],

                            const SizedBox(height: 12),
                            Divider(color: borderColor, height: 1),
                            const SizedBox(height: 12),

                            // Content Body (Left-aligned for natural reading)
                            Align(
                              alignment: Alignment.centerLeft,
                              child: _renderMixedMath(content),
                            ),
                          ],
                        ),
                      );
                    },
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

  // =======================================================
  // MATHEMATICS & PROSE PARSER (Eliminates 1286px Overflows)
  // =======================================================

  Widget _renderMixedMath(String raw) {
    if (raw.isEmpty) return const SizedBox.shrink();

    // 1. Clean HTML tags
    String text = raw.replaceAll('<br>', '\n').replaceAll(RegExp(r'</?strong>'), '');

    // 2. Normalize standalone \begin{aligned} blocks so they are treated as display math
    if (text.contains(r'\begin{aligned}') && !text.contains(r'$$')) {
      text = text.replaceAll(r'\begin{aligned}', r'$$\begin{aligned}')
                 .replaceAll(r'\end{aligned}', r'\end{aligned}$$');
    }

    // 3. Split by display math: $$...$$
    final displayParts = text.split(r'$$');
    List<Widget> columnChildren = [];

    for (int i = 0; i < displayParts.length; i++) {
      final part = displayParts[i].trim();
      if (part.isEmpty) continue;

      if (i % 2 == 1) {
        // Odd index = Display Math Equation ($$...$$)
        // Wrapped in horizontal scroll protection so big fractions never overflow screen
        columnChildren.add(
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 8.0),
            child: Center(
              child: SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Math.tex(
                  part,
                  mathStyle: MathStyle.display,
                  textStyle: const TextStyle(fontSize: 16),
                  onErrorFallback: (_) => Text(part, style: const TextStyle(fontSize: 14)),
                ),
              ),
            ),
          ),
        );
      } else {
        // Even index = English sentences with potential inline $...$ math
        final paragraphs = part.split('\n');
        for (final p in paragraphs) {
          final trimmed = p.trim();
          if (trimmed.isEmpty) continue;
          columnChildren.add(
            Padding(
              padding: const EdgeInsets.only(bottom: 6.0),
              child: _buildInlineMathParagraph(trimmed),
            ),
          );
        }
      }
    }

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: columnChildren,
    );
  }

  Widget _buildInlineMathParagraph(String paragraph) {
    // Split by single dollar sign: $...$
    final parts = paragraph.split(r'$');
    List<InlineSpan> spans = [];

    for (int i = 0; i < parts.length; i++) {
      final chunk = parts[i];
      if (chunk.isEmpty) continue;

      if (i % 2 == 1) {
        // Odd index = Inline Math ($...$)
        spans.add(
          WidgetSpan(
            alignment: PlaceholderAlignment.middle,
            child: Math.tex(
              chunk,
              mathStyle: MathStyle.text,
              textStyle: const TextStyle(fontSize: 15),
              onErrorFallback: (_) => Text(chunk, style: const TextStyle(fontSize: 15)),
            ),
          ),
        );
      } else {
        // Even index = Plain English words that wrap naturally across lines
        spans.add(
          TextSpan(
            text: chunk,
            style: const TextStyle(
              fontSize: 15,
              height: 1.45,
              color: Colors.black87,
            ),
          ),
        );
      }
    }

    return Text.rich(
      TextSpan(children: spans),
    );
  }
}