import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_math_fork/flutter_math.dart';
import 'package:flutter_widget_from_html_core/flutter_widget_from_html_core.dart';
import 'package:flutter_svg/flutter_svg.dart';
import '../models/filter_state.dart';
import '../database_helper.dart';
import '../theme_controller.dart';

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
  final ScrollController _scrollController = ScrollController();
  final GlobalKey _feedbackKey = GlobalKey();

  late Map<String, dynamic> _currentQuestion;
  List<Map<String, dynamic>> _options = [];
  List<String> _steps = [];
  Map<String, dynamic>? _insight;

  bool _optionsUnlocked = false; 
  int? _selectedOptionIndex;
  int? _disabledOptionIndex; 
  bool _isSubmitted = false;
  int _attemptCount = 0; 
  String? _feedbackText;
  bool _isCorrect = false;
  bool _showModelAnswer = false;
  int _revealedStepsCount = 1;

  // Attempt History for Database Logging
  String? _firstChoiceText;
  bool? _firstChoiceCorrect;
  String? _secondChoiceText;
  bool? _secondChoiceCorrect;
  bool _choseNoneOfAbove = false;

  Set<int> _expandedStepIndices = <int>{0};
  bool _allExpanded = false;

  @override
  void initState() {
    super.initState();
    _loadQuestionData(widget.question);
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  void _scrollToFeedback() {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (_feedbackKey.currentContext != null) {
        Scrollable.ensureVisible(
          _feedbackKey.currentContext!,
          duration: const Duration(milliseconds: 450),
          curve: Curves.easeOutCubic,
          alignment: 0.1,
        );
      }
    });
  }

  void _loadQuestionData(Map<String, dynamic> q) {
    _currentQuestion = Map<String, dynamic>.from(q);
    final qText = q['question'] ?? q['question_text'] ?? '';
    _currentQuestion['question'] = qText;

    final List<dynamic> rawSteps = q['steps'] ?? [];
    _steps = rawSteps.map((s) => s.toString()).toList();

    String correctAnswer = "";
    if (q['correct_answer'] != null && q['correct_answer'].toString().isNotEmpty) {
      correctAnswer = q['correct_answer'].toString()
          .replaceFirst(RegExp(r'<strong>Final Answer</strong>\s*[:\-\—]?\s*', caseSensitive: false), '')
          .replaceFirst(RegExp(r'Final Answer\s*[:\-\—]?\s*', caseSensitive: false), '')
          .replaceAll(RegExp(r'<img[^>]*>', caseSensitive: false), '')
          .trim();
    } else if (_steps.isNotEmpty) {
      correctAnswer = _steps.last
          .replaceFirst(RegExp(r'<strong>Final Answer</strong>\s*[:\-\—]?\s*', caseSensitive: false), '')
          .replaceFirst(RegExp(r'Final Answer\s*[:\-\—]?\s*', caseSensitive: false), '')
          .replaceAll(RegExp(r'<img[^>]*>', caseSensitive: false), '')
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
    choices.shuffle();
    choices.add({
      'ans': 'None of the Above',
      'is_correct': 0,
      'feedback': "Concept revision needed. Take your time to study each step of the model answer below.",
    });

    if (q['bradley_insight'] != null) {
      _insight = Map<String, dynamic>.from(q['bradley_insight']);
    }

    setState(() {
      _options = choices;
      _optionsUnlocked = false;
      _selectedOptionIndex = null;
      _disabledOptionIndex = null;
      _isSubmitted = false;
      _attemptCount = 0;
      _feedbackText = null;
      _isCorrect = false;
      _showModelAnswer = false;
      _revealedStepsCount = 1;
      _expandedStepIndices = <int>{0};
      _allExpanded = false;

      _firstChoiceText = null;
      _firstChoiceCorrect = null;
      _secondChoiceText = null;
      _secondChoiceCorrect = null;
      _choseNoneOfAbove = false;
    });

    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (_scrollController.hasClients) {
        _scrollController.jumpTo(0);
      }
    });
  }

  void _submitChoice() {
    if (_selectedOptionIndex == null) return;
    final selected = _options[_selectedOptionIndex!];
    final isCorrectChoice = selected['is_correct'] == 1;
    final isNoneChoice = _selectedOptionIndex == _options.length - 1;
    final qId = _currentQuestion['id']?.toString() ?? '000000';

    if (isNoneChoice) {
      _choseNoneOfAbove = true;
    }

    setState(() {
      if (isNoneChoice) {
        HapticFeedback.heavyImpact();
        _isCorrect = false;
        _isSubmitted = true;
        _showModelAnswer = true;
        _feedbackText = selected['feedback'];

        widget.dbHelper.recordAttempt(
          questionId: qId,
          firstChoiceText: 'None of the Above',
          firstChoiceCorrect: false,
          choseNoneOfAbove: true,
          viewedModelAnswer: true,
        );
      } else if (_attemptCount == 0) {
        _firstChoiceText = selected['ans'];
        _firstChoiceCorrect = isCorrectChoice;

        if (isCorrectChoice) {
          HapticFeedback.mediumImpact();
          _isCorrect = true;
          _isSubmitted = true;
          _feedbackText = selected['feedback'];
          _showModelAnswer = true;

          widget.dbHelper.recordAttempt(
            questionId: qId,
            firstChoiceText: _firstChoiceText!,
            firstChoiceCorrect: true,
            choseNoneOfAbove: false,
            viewedModelAnswer: true,
          );
        } else {
          HapticFeedback.heavyImpact();
          _attemptCount = 1;
          _disabledOptionIndex = _selectedOptionIndex;
          _selectedOptionIndex = null;
          _feedbackText = "${selected['feedback']}\n\nCheck your working and take a Second Chance!";
        }
      } else {
        _secondChoiceText = selected['ans'];
        _secondChoiceCorrect = isCorrectChoice;
        _isSubmitted = true;
        _showModelAnswer = true;

        if (isCorrectChoice) {
          HapticFeedback.mediumImpact();
          _isCorrect = true;
          _feedbackText = "Good recovery! That's more like it — you've proved to yourself you can do it.";
        } else {
          HapticFeedback.heavyImpact();
          _isCorrect = false;
          _feedbackText = "Don't worry — this concept clearly needs revision. Take your time to study each step of the model answer below.";
        }

        widget.dbHelper.recordAttempt(
          questionId: qId,
          firstChoiceText: _firstChoiceText ?? '',
          firstChoiceCorrect: false,
          secondChoiceText: _secondChoiceText,
          secondChoiceCorrect: isCorrectChoice,
          choseNoneOfAbove: _choseNoneOfAbove,
          viewedModelAnswer: true,
        );
      }
    });

    _scrollToFeedback();
  }

  void _loadDifferentBoardQuestion() async {
    HapticFeedback.selectionClick();
    final nextQ = await widget.dbHelper.fetchDifferentBoardQuestion(_currentQuestion);
    if (nextQ != null) {
      _loadQuestionData(nextQ);
    } else {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('No alternative exam board question available for this topic.')),
        );
      }
    }
  }

  void _loadGroupProgressionQuestion() async {
    HapticFeedback.selectionClick();
    final nextQ = await widget.dbHelper.fetchGroupProgressionQuestion(_currentQuestion);
    if (nextQ != null) {
      _loadQuestionData(nextQ);
    } else {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('No further progression questions in this group.')),
        );
      }
    }
  }

  bool _hasDedicatedImage(dynamic img) {
    if (img == null) return false;
    if (img is bool) return img;
    if (img is String) {
      final s = img.trim().toLowerCase();
      return s.isNotEmpty && s != 'false';
    }
    return false;
  }

  Widget _buildVectorImage(String imgPath) {
    final cleanPath = imgPath.startsWith('assets/') ? imgPath : 'assets/$imgPath';
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Center(
      child: Container(
        margin: const EdgeInsets.symmetric(vertical: 14),
        constraints: const BoxConstraints(maxWidth: 324),
        padding: const EdgeInsets.all(10.0),
        decoration: BoxDecoration(
          color: const Color(0xFFFAF9F6),
          borderRadius: BorderRadius.circular(14),
          border: Border.all(
            color: isDark ? const Color(0xFFFDE68A).withAlpha(160) : const Color(0xFFE2DDD5),
            width: 1.4,
          ),
          boxShadow: [
            BoxShadow(
              color: const Color(0xFFFDE68A).withAlpha(isDark ? 110 : 35),
              blurRadius: 18,
              spreadRadius: 2,
              offset: const Offset(0, 4),
            ),
            BoxShadow(
              color: Colors.black.withAlpha(isDark ? 90 : 25),
              blurRadius: 10,
              offset: const Offset(0, 4),
            ),
          ],
        ),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(10),
          child: cleanPath.toLowerCase().endsWith('.svg')
              ? SvgPicture.asset(cleanPath, fit: BoxFit.contain)
              : Image.asset(cleanPath, fit: BoxFit.contain),
        ),
      ),
    );
  }

  void _showDiagramSheet(BuildContext context, String imgPath) {
    HapticFeedback.selectionClick();
    final isDark = Theme.of(context).brightness == Brightness.dark;

    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (ctx) {
        return Container(
          constraints: BoxConstraints(
            maxHeight: MediaQuery.of(context).size.height * 0.75,
          ),
          decoration: BoxDecoration(
            color: isDark ? const Color(0xFF1E293B) : Colors.white,
            borderRadius: const BorderRadius.vertical(top: Radius.circular(20)),
          ),
          padding: const EdgeInsets.fromLTRB(16, 12, 16, 24),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                width: 40,
                height: 4,
                decoration: BoxDecoration(
                  color: isDark ? Colors.grey.shade600 : Colors.grey.shade400,
                  borderRadius: BorderRadius.circular(2),
                ),
              ),
              const SizedBox(height: 12),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    "Figure 1: Problem Diagram",
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 15,
                      color: isDark ? Colors.white : Colors.black87,
                    ),
                  ),
                  IconButton(
                    icon: Icon(Icons.close, size: 20, color: isDark ? Colors.white70 : Colors.black54),
                    onPressed: () => Navigator.pop(ctx),
                  ),
                ],
              ),
              Divider(height: 8, color: isDark ? Colors.grey.shade700 : Colors.grey.shade300),
              Expanded(
                child: SingleChildScrollView(
                  child: _buildVectorImage(imgPath),
                ),
              ),
            ],
          ),
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final qId = _currentQuestion['id']?.toString() ?? '------';
    final branch = _currentQuestion['branch'] ?? 'Maths';
    final board = _currentQuestion['board'] ?? '';
    final level = _currentQuestion['level'] ?? '';
    final rawImg = _currentQuestion['img'];

    return Scaffold(
      appBar: AppBar(
        title: Text(
          "$branch • ID: $qId",
          style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
        ),
        elevation: 0,
        actions: [
          IconButton(
            icon: Icon(
              isDark ? Icons.light_mode : Icons.dark_mode_outlined,
              color: isDark ? Colors.amber : Colors.indigo.shade700,
              size: 20,
            ),
            tooltip: isDark ? "Switch to Daytime Mode" : "Switch to Dark Mode",
            onPressed: () {
              themeNotifier.value = isDark ? ThemeMode.light : ThemeMode.dark;
            },
          ),
          if (_hasDedicatedImage(rawImg) && rawImg is String)
            Padding(
              padding: const EdgeInsets.only(right: 8.0),
              child: TextButton.icon(
                style: TextButton.styleFrom(
                  foregroundColor: Colors.white,
                  backgroundColor: isDark ? const Color(0xFF334155) : Colors.indigo.shade800,
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                ),
                icon: const Icon(Icons.image_outlined, size: 16),
                label: const Text(
                  "Diagram",
                  style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold),
                ),
                onPressed: () => _showDiagramSheet(context, rawImg),
              ),
            ),
        ],
      ),
      body: Center(
        child: Container(
          constraints: const BoxConstraints(maxWidth: 420),
          child: ListView(
            controller: _scrollController,
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
                        color: isDark ? const Color(0xFF1E293B) : Colors.indigo.shade50,
                        borderRadius: BorderRadius.circular(6),
                        border: Border.all(
                          color: isDark ? const Color(0xFF334155) : Colors.indigo.shade200,
                        ),
                      ),
                      child: Text(
                        "ID: $qId  |  $board $level",
                        style: TextStyle(
                          fontSize: 11,
                          fontWeight: FontWeight.bold,
                          color: isDark ? const Color(0xFFFDE68A) : Colors.indigo.shade800,
                        ),
                      ),
                    ),
                  ],
                ),
              ),

              // ------------------------------------
              // STEP 7: QUESTION PRESENTATION CARD
              // ------------------------------------
              Card(
                elevation: isDark ? 2 : 1,
                color: isDark ? const Color(0xFF1E293B) : Colors.white,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(14),
                  side: BorderSide(
                    color: isDark ? const Color(0xFF334155) : Colors.grey.shade200,
                  ),
                ),
                child: Padding(
                  padding: const EdgeInsets.all(18.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      if (_hasDedicatedImage(rawImg) && rawImg is String) ...[
                        _buildVectorImage(rawImg),
                        const SizedBox(height: 14),
                      ],
                      _renderMixedContent(_currentQuestion['question'] ?? ''),
                    ],
                  ),
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
                    color: isDark ? const Color(0xFF064E3B).withAlpha(50) : const Color(0xFFF0FDF4),
                    border: Border.all(
                      color: isDark ? const Color(0xFF059669) : const Color(0xFF86EFAC),
                    ),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Row(
                    children: [
                      Icon(
                        Icons.edit_note,
                        color: isDark ? const Color(0xFF34D399) : const Color(0xFF15803D),
                        size: 28,
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Text(
                          "Work through the complete solution on paper before inspecting the options.",
                          style: TextStyle(
                            fontSize: 13,
                            fontWeight: FontWeight.w600,
                            color: isDark ? const Color(0xFF6EE7B7) : const Color(0xFF166534),
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
                    onPressed: () {
                      HapticFeedback.mediumImpact();
                      setState(() => _optionsUnlocked = true);
                      _scrollToFeedback();
                    },
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
                  final isDisabled = _disabledOptionIndex == index;
                  final isNoneOfAbove = index == _options.length - 1;

                  Color boxBg;
                  Color boxBorder;
                  if (isDisabled) {
                    boxBg = isDark ? const Color(0xFF451A03).withAlpha(80) : Colors.amber.shade50;
                    boxBorder = isDark ? const Color(0xFFD97706) : Colors.amber.shade400;
                  } else if (isSelected) {
                    boxBg = isDark ? const Color(0xFF312E81) : Colors.indigo.shade50;
                    boxBorder = isDark ? const Color(0xFF818CF8) : Colors.indigo.shade600;
                  } else {
                    boxBg = isDark ? const Color(0xFF1E293B) : Colors.white;
                    boxBorder = isDark ? const Color(0xFF334155) : (isNoneOfAbove ? Colors.grey.shade400 : Colors.grey.shade300);
                  }

                  return Padding(
                    padding: const EdgeInsets.only(bottom: 10.0),
                    child: Material(
                      color: boxBg,
                      borderRadius: BorderRadius.circular(12),
                      child: Container(
                        decoration: BoxDecoration(
                          border: Border.all(
                            color: boxBorder,
                            width: (isSelected || isDisabled) ? 2.0 : 1.0,
                          ),
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: RadioListTile<int>(
                          value: index,
                          groupValue: _selectedOptionIndex,
                          activeColor: isDark ? const Color(0xFF818CF8) : Colors.indigo.shade700,
                          title: Opacity(
                            opacity: isDisabled ? 0.6 : 1.0,
                            child: _renderMixedContent(_options[index]['ans']),
                          ),
                          subtitle: isDisabled
                              ? Text(
                                  "Tried on Attempt 1 (Incorrect)",
                                  style: TextStyle(
                                    fontSize: 11,
                                    fontWeight: FontWeight.bold,
                                    color: isDark ? const Color(0xFFFBBF24) : Colors.amber.shade800,
                                  ),
                                )
                              : null,
                          onChanged: (_isSubmitted || isDisabled)
                              ? null
                              : (v) {
                                  HapticFeedback.lightImpact();
                                  setState(() => _selectedOptionIndex = v);
                                },
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
                        backgroundColor: isDark ? const Color(0xFF4338CA) : Colors.indigo.shade700,
                        foregroundColor: Colors.white,
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                      ),
                      onPressed: _selectedOptionIndex == null ? null : _submitChoice,
                      child: Text(
                        _attemptCount == 0 ? "Submit Answer" : "Submit Second Chance",
                        style: const TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
                      ),
                    ),
                  ),
                ],
              ],

              // ------------------------------------
              // STEP 11: DIAGNOSTIC FEEDBACK BANNER
              // ------------------------------------
              if (_feedbackText != null) ...[
                const SizedBox(height: 18),
                Container(
                  key: _feedbackKey,
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    color: _isCorrect
                        ? (isDark ? const Color(0xFF064E3B).withAlpha(70) : const Color(0xFFF0FDF4))
                        : (isDark ? const Color(0xFF451A03).withAlpha(70) : const Color(0xFFFFFBEB)),
                    border: Border.all(
                      color: _isCorrect
                          ? (isDark ? const Color(0xFF059669) : const Color(0xFF86EFAC))
                          : (isDark ? const Color(0xFFD97706) : const Color(0xFFFCD34D)),
                      width: 1.5,
                    ),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Icon(
                        _isCorrect ? Icons.check_circle : Icons.lightbulb_outline,
                        color: _isCorrect
                            ? (isDark ? const Color(0xFF34D399) : const Color(0xFF16A34A))
                            : (isDark ? const Color(0xFFFBBF24) : Colors.amber.shade800),
                        size: 22,
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: _renderMixedContent(_feedbackText!),
                      ),
                    ],
                  ),
                ),
              ],

              // ------------------------------------
              // STEP 11: MODEL ANSWER & ACCORDION DRAWERS
              // ------------------------------------
              if (_showModelAnswer) ...[
                const SizedBox(height: 24),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      "Textbook Model Answer",
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 16,
                        color: isDark ? Colors.white : Colors.black87,
                      ),
                    ),
                    TextButton.icon(
                      style: TextButton.styleFrom(
                        foregroundColor: isDark ? const Color(0xFF818CF8) : Colors.indigo.shade700,
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                      ),
                      icon: Icon(_allExpanded ? Icons.unfold_less : Icons.unfold_more, size: 18),
                      label: Text(
                        _allExpanded ? "Collapse" : "Unfold All",
                        style: const TextStyle(fontSize: 12, fontWeight: FontWeight.bold),
                      ),
                      onPressed: () {
                        HapticFeedback.selectionClick();
                        setState(() {
                          _allExpanded = !_allExpanded;
                          if (_allExpanded) {
                            _expandedStepIndices = List.generate(_revealedStepsCount, (i) => i).toSet();
                          } else {
                            _expandedStepIndices = <int>{_revealedStepsCount - 1};
                          }
                        });
                      },
                    ),
                  ],
                ),
                const SizedBox(height: 8),

                ...List.generate(_revealedStepsCount.clamp(0, _steps.length), (i) {
                  final isExpanded = _expandedStepIndices.contains(i);
                  final isFinal = i == _steps.length - 1;

                  Color drawerBg;
                  Color drawerBorder;
                  if (isFinal) {
                    drawerBg = isDark ? const Color(0xFF064E3B).withAlpha(50) : const Color(0xFFF0FDF4);
                    drawerBorder = isDark ? const Color(0xFF059669) : const Color(0xFF86EFAC);
                  } else {
                    drawerBg = isDark ? const Color(0xFF1E293B) : Colors.white;
                    drawerBorder = isDark
                        ? (isExpanded ? const Color(0xFF818CF8) : const Color(0xFF334155))
                        : (isExpanded ? Colors.indigo.shade300 : Colors.grey.shade300);
                  }

                  return Container(
                    margin: const EdgeInsets.only(bottom: 8),
                    decoration: BoxDecoration(
                      color: drawerBg,
                      border: Border.all(
                        color: drawerBorder,
                        width: isExpanded ? 1.5 : 1.0,
                      ),
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        InkWell(
                          onTap: () {
                            HapticFeedback.selectionClick();
                            setState(() {
                              if (_allExpanded) {
                                if (isExpanded) {
                                  _expandedStepIndices.remove(i);
                                } else {
                                  _expandedStepIndices.add(i);
                                }
                              } else {
                                if (isExpanded) {
                                  _expandedStepIndices.clear();
                                } else {
                                  _expandedStepIndices = <int>{i};
                                }
                              }
                            });
                          },
                          borderRadius: BorderRadius.circular(10),
                          child: Padding(
                            padding: const EdgeInsets.symmetric(horizontal: 14.0, vertical: 10.0),
                            child: Row(
                              children: [
                                Icon(
                                  isFinal ? Icons.check_circle : (isExpanded ? Icons.expand_circle_down : Icons.radio_button_checked),
                                  size: 18,
                                  color: isFinal
                                      ? (isDark ? const Color(0xFF34D399) : const Color(0xFF16A34A))
                                      : (isDark ? const Color(0xFF818CF8) : Colors.indigo.shade700),
                                ),
                                const SizedBox(width: 10),
                                Expanded(
                                  child: Text(
                                    isFinal ? "Final Answer" : "Step ${i + 1} of ${_steps.length}",
                                    style: TextStyle(
                                      fontSize: 13,
                                      fontWeight: FontWeight.bold,
                                      color: isFinal
                                          ? (isDark ? const Color(0xFF6EE7B7) : const Color(0xFF16A34A))
                                          : (isDark ? Colors.white : Colors.black87),
                                    ),
                                  ),
                                ),
                                Icon(
                                  isExpanded ? Icons.keyboard_arrow_up : Icons.keyboard_arrow_down,
                                  size: 20,
                                  color: isDark ? Colors.grey.shade400 : Colors.grey.shade600,
                                ),
                              ],
                            ),
                          ),
                        ),

                        if (isExpanded)
                          Padding(
                            padding: const EdgeInsets.fromLTRB(14, 0, 14, 14),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.stretch,
                              children: [
                                Divider(height: 12, color: isDark ? const Color(0xFF334155) : Colors.grey.shade300),
                                _renderMixedContent(_steps[i]),
                              ],
                            ),
                          ),
                      ],
                    ),
                  );
                }),

                if (_revealedStepsCount < _steps.length)
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 4.0),
                    child: OutlinedButton.icon(
                      icon: const Icon(Icons.add_circle_outline, size: 18),
                      style: OutlinedButton.styleFrom(
                        foregroundColor: isDark ? const Color(0xFF818CF8) : Colors.indigo.shade700,
                        side: BorderSide(color: isDark ? const Color(0xFF4F46E5) : Colors.indigo.shade200),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                        padding: const EdgeInsets.symmetric(vertical: 12),
                      ),
                      onPressed: () {
                        HapticFeedback.lightImpact();
                        setState(() {
                          _revealedStepsCount++;
                          if (!_allExpanded) {
                            _expandedStepIndices = <int>{_revealedStepsCount - 1};
                          } else {
                            _expandedStepIndices.add(_revealedStepsCount - 1);
                          }
                        });
                      },
                      label: Text(
                        "Reveal Step ${_revealedStepsCount + 1} of ${_steps.length}",
                        style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 13),
                      ),
                    ),
                  ),

                if (_revealedStepsCount >= _steps.length && _insight != null)
                  _renderInsightCard(_insight!),

                const SizedBox(height: 28),

                // ------------------------------------
                // STEP 12: SMART RECOMMENDATIONS
                // ------------------------------------
                Text(
                  "Smart Next Steps",
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 16,
                    color: isDark ? Colors.white : Colors.black87,
                  ),
                ),
                const SizedBox(height: 12),

                SizedBox(
                  width: double.infinity,
                  height: 48,
                  child: ElevatedButton.icon(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: isDark ? const Color(0xFF4338CA) : Colors.indigo.shade700,
                      foregroundColor: Colors.white,
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                    ),
                    icon: const Icon(Icons.swap_horiz, size: 20),
                    onPressed: _loadDifferentBoardQuestion,
                    label: const Text(
                      "Option A: Try a Different Board",
                      style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
                    ),
                  ),
                ),
                const SizedBox(height: 10),

                SizedBox(
                  width: double.infinity,
                  height: 48,
                  child: ElevatedButton.icon(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.teal.shade700,
                      foregroundColor: Colors.white,
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                    ),
                    icon: const Icon(Icons.trending_up, size: 20),
                    onPressed: _loadGroupProgressionQuestion,
                    label: const Text(
                      "Option B: Progression (Twin / Cousin)",
                      style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
                    ),
                  ),
                ),
                const SizedBox(height: 10),

                SizedBox(
                  width: double.infinity,
                  height: 48,
                  child: OutlinedButton.icon(
                    style: OutlinedButton.styleFrom(
                      foregroundColor: isDark ? Colors.white70 : Colors.grey.shade800,
                      side: BorderSide(color: isDark ? const Color(0xFF475569) : Colors.grey.shade400),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                    ),
                    icon: const Icon(Icons.dashboard_outlined, size: 20),
                    onPressed: () => Navigator.pop(context),
                    label: const Text(
                      "Option C: Return to Dashboard",
                      style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
                    ),
                  ),
                ),
                const SizedBox(height: 24),
              ]
            ],
          ),
        ),
      ),
    );
  }

  Widget _renderInsightCard(Map<String, dynamic> insight) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final type = insight['type']?.toString().toLowerCase() ?? 'pro-tip';

    Color bgColor;
    Color borderColor;
    Color textColor;
    IconData icon;

    if (type.contains('caution')) {
      bgColor = isDark ? const Color(0xFF451A03).withAlpha(60) : const Color(0xFFFEFCE8);
      borderColor = isDark ? const Color(0xFFB45309) : const Color(0xFFFACC15);
      textColor = isDark ? const Color(0xFFFDE68A) : const Color(0xFF854D0E);
      icon = Icons.warning_amber_rounded;
    } else if (type.contains('deeper')) {
      bgColor = isDark ? const Color(0xFF3B0764).withAlpha(60) : const Color(0xFFFAF5FF);
      borderColor = isDark ? const Color(0xFF7E22CE) : const Color(0xFFC084FC);
      textColor = isDark ? const Color(0xFFE9D5FF) : const Color(0xFF581C87);
      icon = Icons.psychology;
    } else {
      bgColor = isDark ? const Color(0xFF1E3A8A).withAlpha(60) : const Color(0xFFEFF6FF);
      borderColor = isDark ? const Color(0xFF2563EB) : const Color(0xFF93C5FD);
      textColor = isDark ? const Color(0xFFBFDBFE) : const Color(0xFF1E40AF);
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
          Divider(height: 18, color: borderColor.withAlpha(80)),
          _renderMixedContent(insight['content'] ?? ''),
        ],
      ),
    );
  }

  // ----------------------------------------------------
  // HTML + TEXTBOOK LATEX + VECTOR SVG/PNG RENDERER
  // ----------------------------------------------------
  Widget _renderMixedContent(String rawData) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    // Direct String Sanitizer: Strips light-mode background color completely
    String processed = rawData;
    if (isDark) {
      processed = processed
          .replaceAll(RegExp(r'background\s*:\s*#[a-fA-F0-9]+;?', caseSensitive: false), 'background: #1E293B;')
          .replaceAll(RegExp(r'border-left\s*:\s*4px solid #[a-fA-F0-9]+;?', caseSensitive: false), 'border-left: 4px solid #38BDF8;')
          .replaceAll(RegExp(r'color\s*:\s*#[a-fA-F0-9]+;?', caseSensitive: false), 'color: #F1F5F9;');
    } else {
      processed = processed
          .replaceAll(RegExp(r'background\s*:\s*#[a-fA-F0-9]+;?', caseSensitive: false), 'background: #F1F5F9;')
          .replaceAll(RegExp(r'border-left\s*:\s*4px solid #[a-fA-F0-9]+;?', caseSensitive: false), 'border-left: 4px solid #005A9C;');
    }

    return HtmlWidget(
      processed,
      factoryBuilder: () => _MathWidgetFactory(isDark: isDark),
      textStyle: TextStyle(
        fontSize: 15,
        height: 1.5,
        color: isDark ? const Color(0xFFF1F5F9) : Colors.black87,
      ),
      customWidgetBuilder: (el) {
        if (el.localName == 'img') {
          final src = el.attributes['src'] ?? '';
          if (src.isNotEmpty) {
            return _buildVectorImage(src);
          }
        }
        return null;
      },
    );
  }
}

// --------------------------------------------------------
// SMART LATEX WIDGET FACTORY (WITH WHITE ARRAY LINES IN DARK MODE)
// --------------------------------------------------------
class _MathWidgetFactory extends WidgetFactory {
  final bool isDark;
  _MathWidgetFactory({required this.isDark});

  static final RegExp _inlineMathPattern = RegExp(r'\$([^\$]+?)\$');

  List<_MathSegment> _extractSegments(String text) {
    List<_MathSegment> segments = [];
    int i = 0;

    while (i < text.length) {
      if (text.startsWith(r'$$', i)) {
        int end = text.indexOf(r'$$', i + 2);
        if (end != -1) {
          segments.add(_MathSegment(
            content: text.substring(i + 2, end),
            isMath: true,
            isBlock: true,
          ));
          i = end + 2;
          continue;
        }
      }

      if (text.startsWith(r'\begin{', i)) {
        int depth = 0;
        int searchIdx = i;
        int blockEnd = -1;

        while (searchIdx < text.length) {
          int nextBegin = text.indexOf(r'\begin{', searchIdx);
          int nextEnd = text.indexOf(r'\end{', searchIdx);

          if (nextEnd == -1) break;

          if (nextBegin != -1 && nextBegin < nextEnd) {
            depth++;
            searchIdx = nextBegin + 7;
          } else {
            depth--;
            int closeBrace = text.indexOf('}', nextEnd + 5);
            if (closeBrace == -1) break;
            searchIdx = closeBrace + 1;

            if (depth == 0) {
              blockEnd = searchIdx;
              break;
            }
          }
        }

        if (blockEnd != -1) {
          segments.add(_MathSegment(
            content: text.substring(i, blockEnd),
            isMath: true,
            isBlock: true,
          ));
          i = blockEnd;
          continue;
        }
      }

      int nextDollar = text.indexOf(r'$$', i);
      int nextBegin = text.indexOf(r'\begin{', i);

      int nextBlock = text.length;
      if (nextDollar != -1 && nextDollar < nextBlock) nextBlock = nextDollar;
      if (nextBegin != -1 && nextBegin < nextBlock) nextBlock = nextBegin;

      segments.add(_MathSegment(
        content: text.substring(i, nextBlock),
        isMath: false,
        isBlock: false,
      ));
      i = nextBlock;
    }

    return segments;
  }

  @override
  Widget? buildText(BuildMetadata meta, TextStyleHtml tsh, InlineSpan span) {
    final text = span.toPlainText();
    final segments = _extractSegments(text);

    if (segments.length == 1 && !segments.first.isBlock) {
      if (_inlineMathPattern.hasMatch(text)) {
        return _renderInlineSpan(text, tsh);
      }
      return super.buildText(meta, tsh, span);
    }

    List<Widget> widgets = [];
    final textColor = isDark ? const Color(0xFFF1F5F9) : Colors.black87;

    for (var seg in segments) {
      if (seg.isBlock) {
        String math = seg.content.replaceAll(r'\cr', r'\\').trim();
        if (math.isNotEmpty) {
          // Force array lines, \hline, and vertical bars to render in white in dark mode
          if (isDark && (math.contains(r'\begin{array}') || math.contains('|') || math.contains(r'\hline'))) {
            math = r'{\color{#F1F5F9} ' + math + r'}';
          }

          widgets.add(
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 8.0),
              child: Center(
                child: SingleChildScrollView(
                  scrollDirection: Axis.horizontal,
                  child: Math.tex(
                    math,
                    mathStyle: MathStyle.display,
                    textStyle: TextStyle(
                      color: textColor,
                      fontSize: 16,
                      fontWeight: tsh.style.fontWeight ?? FontWeight.normal,
                    ),
                  ),
                ),
              ),
            ),
          );
        }
      } else {
        final cleanText = seg.content.trim();
        if (cleanText.isNotEmpty) {
          widgets.add(_renderInlineSpan(cleanText, tsh));
        }
      }
    }

    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      mainAxisSize: MainAxisSize.min,
      children: widgets,
    );
  }

  Widget _renderInlineSpan(String content, TextStyleHtml tsh) {
    if (!_inlineMathPattern.hasMatch(content)) {
      return Text(content, style: tsh.style);
    }

    final inlineMatches = _inlineMathPattern.allMatches(content);
    List<InlineSpan> spans = [];
    int lastIndex = 0;
    final mathColor = isDark ? const Color(0xFFF1F5F9) : Colors.black87;

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
            textStyle: TextStyle(
              color: mathColor,
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

class _MathSegment {
  final String content;
  final bool isMath;
  final bool isBlock;
  _MathSegment({required this.content, required this.isMath, required this.isBlock});
}