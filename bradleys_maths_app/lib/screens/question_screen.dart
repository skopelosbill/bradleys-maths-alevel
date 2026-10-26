import 'package:flutter/material.dart';
import 'package:flutter_math_fork/flutter_math.dart';
import 'package:flutter_widget_from_html_core/flutter_widget_from_html_core.dart';
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

  bool _optionsUnlocked = false; 
  int? _selectedOptionIndex;
  bool _isSubmitted = false;
  int _attemptCount = 0; 
  String? _feedbackText;
  bool _isCorrect = false;
  bool _showModelAnswer = false;
  int _revealedStepsCount = 1;

  @override
  void initState() {
    super.initState();
    _loadQuestionData(widget.question);
  }

  void _loadQuestionData(Map<String, dynamic> q) {
    _currentQuestion = q;
    final List<dynamic> rawSteps = q['steps'] ?? [];
    _steps = rawSteps.map((s) => s.toString()).toList();

    // Strip out 'Final Answer' label if present in the last step
    String correctAnswer = "";
    if (_steps.isNotEmpty) {
      correctAnswer = _steps.last
          .replaceFirst(RegExp(r'<strong>Final Answer</strong>\s*[:\-\—]?\s*', caseSensitive: false), '')
          .replaceFirst(RegExp(r'Final Answer\s*[:\-\—]?\s*', caseSensitive: false), '')
          .trim();
    }

    final List<dynamic> piList = q['pi_options'] ?? [];
    List<Map<String, dynamic>> choices = [];
    choices.add({
      'ans': correctAnswer,
      'is_correct': 1,
      'feedback': 'Outstanding! That is spot on.',
    });

    for (var pi in piList) {
      choices.add({
        'ans': pi['ans']?.toString() ?? '',
        'is_correct': 0,
        'feedback': pi['feedback']?.toString() ?? 'Check your paper working carefully.',
      });
    }
    choices.shuffle(); // Shuffle the 4 choices
    choices.add({
      'ans': 'None of the Above',
      'is_correct': 0,
      'feedback': 'Concept revision is recommended. Study the model answer below.',
    });

    if (q['bradley_insight'] != null) {
      _insight = Map<String, dynamic>.from(q['bradley_insight']);
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
    final isCorrectChoice = selected['is_correct'] == 1;

    setState(() {
      if (isCorrectChoice) {
        _isCorrect = true;
        _isSubmitted = true;
        _feedbackText = selected['feedback'];
        _showModelAnswer = true;
      } else if (_attemptCount == 0) {
        _attemptCount = 1;
        _feedbackText = "${selected['feedback']}\n\nCheck your working and take a Second Chance!";
        _selectedOptionIndex = null;
      } else {
        _isCorrect = false;
        _isSubmitted = true;
        _feedbackText = "${selected['feedback']}\n\nStudy the textbook model answer below.";
        _showModelAnswer = true;
      }
    });
  }

  void _loadNextQuestion() async {
    final nextQ = await widget.dbHelper.fetchQuestion(widget.filterState);
    if (nextQ != null) _loadQuestionData(nextQ);
  }

  @override
  Widget build(BuildContext context) {
    final qId = _currentQuestion['id']?.toString() ?? '------';
    final branch = _currentQuestion['branch'] ?? 'Maths';
    final board = _currentQuestion['board'] ?? '';
    final level = _currentQuestion['level'] ?? '';

    return Scaffold(
      appBar: AppBar(
        title: Text(
          "$branch • ID: $qId",
          style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
        ),
        elevation: 0,
      ),
      body: Center(
        child: Container(
          constraints: const BoxConstraints(maxWidth: 420), // 360-420px mobile viewport
          child: ListView(
            padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 12.0),
            children: [
              // Metadata Header Badge
              Padding(
                padding: const EdgeInsets.only(bottom: 8.0),
                child: Row(
                  children: [
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                      decoration: BoxDecoration(
                        color: Colors.indigo.shade50,
                        borderRadius: BorderRadius.circular(6),
                        border: Border.all(color: Colors.indigo.shade200),
                      ),
                      child: Text(
                        "ID: $qId  |  $board $level",
                        style: TextStyle(
                          fontSize: 11,
                          fontWeight: FontWeight.bold,
                          color: Colors.indigo.shade800,
                        ),
                      ),
                    ),
                  ],
                ),
              ),

              // ------------------------------------
              // STEP 7: QUESTION PRESENTATION
              // ------------------------------------
              Card(
                elevation: 1,
                color: Colors.white,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(14),
                  side: BorderSide(color: Colors.grey.shade200),
                ),
                child: Padding(
                  padding: const EdgeInsets.all(18.0),
                  child: _renderMixedContent(_currentQuestion['question'] ?? ''),
                ),
              ),

              const SizedBox(height: 16),

              // ------------------------------------
              // STEP 8: THE PAPER-FIRST MANDATE
              // ------------------------------------
              if (!_optionsUnlocked) ...[
                Container(
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    color: const Color(0xFFF0FDF4),
                    border: Border.all(color: const Color(0xFF86EFAC)),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: const Row(
                    children: [
                      Icon(Icons.edit_note, color: Color(0xFF15803D), size: 28),
                      SizedBox(width: 12),
                      Expanded(
                        child: Text(
                          "Work through the complete solution on paper before inspecting the options.",
                          style: TextStyle(
                            fontSize: 13,
                            fontWeight: FontWeight.w600,
                            color: Color(0xFF166534),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 14),

                // ------------------------------------
                // STEP 9: READINESS GATE
                // ------------------------------------
                SizedBox(
                  height: 50,
                  child: ElevatedButton(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.teal.shade700,
                      foregroundColor: Colors.white,
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                    ),
                    onPressed: () => setState(() => _optionsUnlocked = true),
                    child: const Text(
                      "I've worked it out on paper — Show Options",
                      style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
                    ),
                  ),
                ),
              ],

              // ------------------------------------
              // STEP 10: 5-BOX OPTION GRID
              // ------------------------------------
              if (_optionsUnlocked) ...[
                ...List.generate(_options.length, (index) {
                  final isSelected = _selectedOptionIndex == index;
                  final isNoneOfAbove = index == _options.length - 1;

                  return Padding(
                    padding: const EdgeInsets.only(bottom: 10.0),
                    child: Material(
                      color: isSelected ? Colors.indigo.shade50 : Colors.white,
                      borderRadius: BorderRadius.circular(12),
                      child: Container(
                        decoration: BoxDecoration(
                          border: Border.all(
                            color: isSelected
                                ? Colors.indigo.shade600
                                : (isNoneOfAbove ? Colors.grey.shade400 : Colors.grey.shade300),
                            width: isSelected ? 2.0 : 1.0,
                          ),
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: RadioListTile<int>(
                          value: index,
                          groupValue: _selectedOptionIndex,
                          activeColor: Colors.indigo.shade700,
                          title: _renderMixedContent(_options[index]['ans']),
                          onChanged: _isSubmitted
                              ? null
                              : (v) => setState(() => _selectedOptionIndex = v),
                        ),
                      ),
                    ),
                  );
                }),

                if (!_isSubmitted) ...[
                  const SizedBox(height: 6),
                  SizedBox(
                    height: 48,
                    child: ElevatedButton(
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Colors.indigo.shade700,
                        foregroundColor: Colors.white,
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                      ),
                      onPressed: _selectedOptionIndex == null ? null : _submitChoice,
                      child: const Text(
                        "Submit Answer",
                        style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
                      ),
                    ),
                  ),
                ],
              ],

              // ------------------------------------
              // STEP 11: DIAGNOSTIC FEEDBACK
              // ------------------------------------
              if (_feedbackText != null) ...[
                const SizedBox(height: 18),
                Container(
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    color: _isCorrect ? const Color(0xFFF0FDF4) : const Color(0xFFFFFBEB),
                    border: Border.all(
                      color: _isCorrect ? const Color(0xFF86EFAC) : const Color(0xFFFCD34D),
                    ),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: _renderMixedContent(_feedbackText!),
                ),
              ],

              // ------------------------------------
              // STEP 11: MODEL ANSWER & INSIGHT
              // ------------------------------------
              if (_showModelAnswer) ...[
                const SizedBox(height: 24),
                const Text(
                  "Textbook Model Answer",
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: Colors.black87),
                ),
                const SizedBox(height: 10),

                ...List.generate(_revealedStepsCount.clamp(0, _steps.length), (i) {
                  return Container(
                    margin: const EdgeInsets.only(bottom: 10),
                    padding: const EdgeInsets.all(14),
                    decoration: BoxDecoration(
                      color: Colors.grey.shade50,
                      border: Border.all(color: Colors.grey.shade300),
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: _renderMixedContent(_steps[i]),
                  );
                }),

                if (_revealedStepsCount < _steps.length)
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 4.0),
                    child: OutlinedButton.icon(
                      icon: const Icon(Icons.add_circle_outline, size: 18),
                      style: OutlinedButton.styleFrom(
                        foregroundColor: Colors.indigo.shade700,
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                      ),
                      onPressed: () => setState(() => _revealedStepsCount++),
                      label: Text(
                        "Reveal Next Step (${_revealedStepsCount + 1}/${_steps.length})",
                        style: const TextStyle(fontWeight: FontWeight.bold),
                      ),
                    ),
                  ),

                if (_revealedStepsCount >= _steps.length && _insight != null)
                  _renderInsightCard(_insight!),

                const SizedBox(height: 28),

                // ------------------------------------
                // STEP 12: SMART RECOMMENDATIONS
                // ------------------------------------
                SizedBox(
                  height: 50,
                  child: ElevatedButton.icon(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.indigo.shade700,
                      foregroundColor: Colors.white,
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                    ),
                    icon: const Icon(Icons.arrow_forward),
                    onPressed: _loadNextQuestion,
                    label: const Text(
                      "Next Question",
                      style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
                    ),
                  ),
                ),
                const SizedBox(height: 20),
              ]
            ],
          ),
        ),
      ),
    );
  }

  // ----------------------------------------------------
  // BRADLEY INSIGHT CARD (Deeper, Pro-tip, Caution)
  // ----------------------------------------------------
  Widget _renderInsightCard(Map<String, dynamic> insight) {
    final type = insight['type']?.toString().toLowerCase() ?? 'pro-tip';

    Color bgColor;
    Color borderColor;
    Color textColor;
    IconData icon;

    if (type.contains('caution')) {
      bgColor = const Color(0xFFFEFCE8);      // Soft yellow
      borderColor = const Color(0xFFFACC15);  // Amber border
      textColor = const Color(0xFF854D0E);    // Deep browny orange
      icon = Icons.warning_amber_rounded;
    } else if (type.contains('deeper')) {
      bgColor = const Color(0xFFFAF5FF);      // Soft purple
      borderColor = const Color(0xFFC084FC);  // Purple border
      textColor = const Color(0xFF581C87);    // Deep purple
      icon = Icons.psychology;
    } else {
      bgColor = const Color(0xFFEFF6FF);      // Soft blue
      borderColor = const Color(0xFF93C5FD);  // Blue border
      textColor = const Color(0xFF1E40AF);    // Deep blue
      icon = Icons.lightbulb_outline;
    }

    return Container(
      margin: const EdgeInsets.only(top: 14),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: bgColor,
        border: Border.all(color: borderColor, width: 1.5),
        borderRadius: BorderRadius.circular(14),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Icon(icon, color: textColor, size: 20),
              const SizedBox(width: 8),
              Expanded(
                child: Text(
                  insight['title'] ?? "The Head Teacher's Eye",
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    color: textColor,
                    fontSize: 14,
                  ),
                ),
              ),
            ],
          ),
          const Divider(height: 18),
          _renderMixedContent(insight['content'] ?? ''),
        ],
      ),
    );
  }

  // ----------------------------------------------------
  // HTML + TEXTBOOK LATEX RENDERER (MOBILE-FIRST)
  // ----------------------------------------------------
  Widget _renderMixedContent(String rawData) {
    return HtmlWidget(
      rawData,
      factoryBuilder: () => _MathWidgetFactory(),
      textStyle: const TextStyle(fontSize: 15, height: 1.5, color: Colors.black87),
      customStylesBuilder: (el) {
        if (el.localName == 'table') {
          return {
            'width': '100%',
            'max-width': '300px',
            'margin': '12px auto',
            'border-collapse': 'collapse',
            'border': '1px solid #999',
          };
        }
        if (el.localName == 'th') {
          return {
            'font-weight': 'bold',
            'background-color': '#eef2f6',
            'border': '1px solid #999',
            'padding': '6px 8px',
            'text-align': 'center',
          };
        }
        if (el.localName == 'td') {
          return {
            'border': '1px solid #ccc',
            'padding': '6px 8px',
            'text-align': 'center',
          };
        }
        return null;
      },
    );
  }
}

// --------------------------------------------------------
// SMART LATEX WIDGET FACTORY
// Separates Display/Aligned Block Math from Inline Math
// --------------------------------------------------------
class _MathWidgetFactory extends WidgetFactory {
  // Regex to isolate Display Blocks ($$...$$ and \begin{...}...\end{...})
  static final RegExp _blockPattern = RegExp(
    r'(\$\$[\s\S]*?\$\$|\\begin\{[a-zA-Z*]+\}[\s\S]*?\\end\{[a-zA-Z*]+\})',
  );

  // Regex for standard inline math ($...$)
  static final RegExp _inlineMathPattern = RegExp(r'\$([^\$]+?)\$');

  @override
  Widget? buildText(BuildMetadata meta, TextStyleHtml tsh, InlineSpan span) {
    final text = span.toPlainText();

    // If there is no block math (no $$ and no \begin), handle purely with inline parser
    if (!_blockPattern.hasMatch(text)) {
      if (_inlineMathPattern.hasMatch(text)) {
        return _renderInlineSpan(text, tsh);
      }
      return super.buildText(meta, tsh, span);
    }

    // Split text into English paragraphs and Centered Block Equations
    final matches = _blockPattern.allMatches(text);
    List<Widget> blockWidgets = [];
    int lastEnd = 0;

    for (final match in matches) {
      // 1. Text appearing BEFORE the aligned block equation
      if (match.start > lastEnd) {
        final leadingText = text.substring(lastEnd, match.start).trim();
        if (leadingText.isNotEmpty) {
          blockWidgets.add(_renderInlineSpan(leadingText, tsh));
        }
      }

      // 2. The Aligned / Display Math Block (Centered on its own line)
      String mathContent = match.group(0)!;
      if (mathContent.startsWith(r'$$') && mathContent.endsWith(r'$$')) {
        mathContent = mathContent.substring(2, mathContent.length - 2).trim();
      }
      // Standardize TeX carriage returns (\cr) to (\\)
      mathContent = mathContent.replaceAll(r'\cr', r'\\').trim();

      if (mathContent.isNotEmpty) {
        blockWidgets.add(
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 8.0),
            child: Center(
              child: SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Math.tex(
                  mathContent,
                  mathStyle: MathStyle.display,
                  textStyle: tsh.style.copyWith(
                    fontSize: 16,
                    fontWeight: tsh.style.fontWeight ?? FontWeight.normal,
                  ),
                ),
              ),
            ),
          ),
        );
      }

      lastEnd = match.end;
    }

    // 3. Any trailing text appearing AFTER the aligned block equation
    if (lastEnd < text.length) {
      final trailingText = text.substring(lastEnd).trim();
      if (trailingText.isNotEmpty) {
        blockWidgets.add(_renderInlineSpan(trailingText, tsh));
      }
    }

    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      mainAxisSize: MainAxisSize.min,
      children: blockWidgets,
    );
  }

  // Helper method for rendering text that may contain inline $...$ math
  Widget _renderInlineSpan(String content, TextStyleHtml tsh) {
    if (!_inlineMathPattern.hasMatch(content)) {
      return Text(content, style: tsh.style);
    }

    final inlineMatches = _inlineMathPattern.allMatches(content);
    List<InlineSpan> spans = [];
    int lastIndex = 0;

    for (final m in inlineMatches) {
      if (m.start > lastIndex) {
        spans.add(TextSpan(text: content.substring(lastIndex, m.start), style: tsh.style));
      }
      final mathStr = m.group(1)?.trim() ?? '';
      if (mathStr.isNotEmpty) {
        spans.add(WidgetSpan(
          alignment: PlaceholderAlignment.middle,
          child: Math.tex(
            mathStr,
            mathStyle: MathStyle.text,
            textStyle: tsh.style.copyWith(
              fontSize: 15,
              fontWeight: tsh.style.fontWeight ?? FontWeight.normal,
            ),
          ),
        ));
      }
      lastIndex = m.end;
    }

    if (lastIndex < content.length) {
      spans.add(TextSpan(text: content.substring(lastIndex), style: tsh.style));
    }

    return Text.rich(TextSpan(children: spans));
  }
}