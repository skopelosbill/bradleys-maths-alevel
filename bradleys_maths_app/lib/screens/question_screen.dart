import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_math_fork/flutter_math.dart';
import 'package:flutter_widget_from_html_core/flutter_widget_from_html_core.dart';
import 'package:flutter_svg/flutter_svg.dart';
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
  final ScrollController _scrollController = ScrollController();
  final GlobalKey _feedbackKey = GlobalKey();

  late Map<String, dynamic> _currentQuestion;
  List<Map<String, dynamic>> _options = [];
  List<String> _steps = [];
  Map<String, dynamic>? _insight;

  bool _optionsUnlocked = false; 
  int? _selectedOptionIndex;
  int? _disabledOptionIndex; // For ambering out the first failed choice
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

  // Smooth scroll specifically to bring the feedback banner and model answer into comfortable view
  void _scrollToFeedback() {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (_feedbackKey.currentContext != null) {
        Scrollable.ensureVisible(
          _feedbackKey.currentContext!,
          duration: const Duration(milliseconds: 450),
          curve: Curves.easeOutCubic,
          alignment: 0.1, // Positions feedback banner near the top of the viewport
        );
      }
    });
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
      // ----------------------------------------------------
      // CASE 1: NONE OF THE ABOVE (Immediate Model Answer Unlock)
      // ----------------------------------------------------
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
      }
      // ----------------------------------------------------
      // CASE 2: FIRST ATTEMPT
      // ----------------------------------------------------
      else if (_attemptCount == 0) {
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
          // Missed on attempt 1 -> Amber-out this choice and prompt second chance
          HapticFeedback.heavyImpact();
          _attemptCount = 1;
          _disabledOptionIndex = _selectedOptionIndex;
          _selectedOptionIndex = null;
          _feedbackText = "${selected['feedback']}\n\nCheck your working and take a Second Chance!";
        }
      }
      // ----------------------------------------------------
      // CASE 3: SECOND ATTEMPT
      // ----------------------------------------------------
      else {
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
    return Center(
      child: Container(
        margin: const EdgeInsets.symmetric(vertical: 12),
        constraints: const BoxConstraints(maxWidth: 320),
        padding: const EdgeInsets.all(8.0),
        decoration: BoxDecoration(
          border: Border.all(color: Colors.grey.shade300),
          borderRadius: BorderRadius.circular(10),
          color: Colors.white,
        ),
        child: cleanPath.toLowerCase().endsWith('.svg')
            ? SvgPicture.asset(cleanPath, fit: BoxFit.contain)
            : Image.asset(cleanPath, fit: BoxFit.contain),
      ),
    );
  }

  void _showDiagramSheet(BuildContext context, String imgPath) {
    HapticFeedback.selectionClick();
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (ctx) {
        return Container(
          constraints: BoxConstraints(
            maxHeight: MediaQuery.of(context).size.height * 0.75,
          ),
          decoration: const BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
          ),
          padding: const EdgeInsets.fromLTRB(16, 12, 16, 24),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                width: 40,
                height: 4,
                decoration: BoxDecoration(
                  color: Colors.grey.shade400,
                  borderRadius: BorderRadius.circular(2),
                ),
              ),
              const SizedBox(height: 12),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text(
                    "Figure 1: Problem Diagram",
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 15),
                  ),
                  IconButton(
                    icon: const Icon(Icons.close, size: 20),
                    onPressed: () => Navigator.pop(ctx),
                  ),
                ],
              ),
              const Divider(height: 8),
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
          if (_hasDedicatedImage(rawImg) && rawImg is String)
            Padding(
              padding: const EdgeInsets.only(right: 8.0),
              child: TextButton.icon(
                style: TextButton.styleFrom(
                  foregroundColor: Colors.white,
                  backgroundColor: Colors.indigo.shade800,
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
          constraints: const BoxConstraints(maxWidth: 420), // 360-420px mobile viewport
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

                  return Padding(
                    padding: const EdgeInsets.only(bottom: 10.0),
                    child: Material(
                      color: isDisabled
                          ? Colors.amber.shade50
                          : (isSelected ? Colors.indigo.shade50 : Colors.white),
                      borderRadius: BorderRadius.circular(12),
                      child: Container(
                        decoration: BoxDecoration(
                          border: Border.all(
                            color: isDisabled
                                ? Colors.amber.shade400
                                : (isSelected
                                    ? Colors.indigo.shade600
                                    : (isNoneOfAbove ? Colors.grey.shade400 : Colors.grey.shade300)),
                            width: (isSelected || isDisabled) ? 2.0 : 1.0,
                          ),
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: RadioListTile<int>(
                          value: index,
                          groupValue: _selectedOptionIndex,
                          activeColor: Colors.indigo.shade700,
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
                                    color: Colors.amber.shade800,
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
                        backgroundColor: Colors.indigo.shade700,
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
              // STEP 11: DIAGNOSTIC FEEDBACK BANNER (Targeted Scroll Landmark)
              // ------------------------------------
              if (_feedbackText != null) ...[
                const SizedBox(height: 18),
                Container(
                  key: _feedbackKey, // Auto-scroll target anchor
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    color: _isCorrect ? const Color(0xFFF0FDF4) : const Color(0xFFFFFBEB),
                    border: Border.all(
                      color: _isCorrect ? const Color(0xFF86EFAC) : const Color(0xFFFCD34D),
                      width: 1.5,
                    ),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Icon(
                        _isCorrect ? Icons.check_circle : Icons.lightbulb_outline,
                        color: _isCorrect ? const Color(0xFF16A34A) : Colors.amber.shade800,
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
                    const Text(
                      "Textbook Model Answer",
                      style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: Colors.black87),
                    ),
                    // Unfold / Fold Complete Proof Button
                    TextButton.icon(
                      style: TextButton.styleFrom(
                        foregroundColor: Colors.indigo.shade700,
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

                // Step Drawers (True Accordion: Opening drawer closes prior drawer unless unfolded)
                ...List.generate(_revealedStepsCount.clamp(0, _steps.length), (i) {
                  final isExpanded = _expandedStepIndices.contains(i);
                  final isFinal = i == _steps.length - 1;

                  return Container(
                    margin: const EdgeInsets.only(bottom: 8),
                    decoration: BoxDecoration(
                      color: isFinal ? const Color(0xFFF0FDF4) : Colors.white,
                      border: Border.all(
                        color: isFinal
                            ? const Color(0xFF86EFAC)
                            : (isExpanded ? Colors.indigo.shade300 : Colors.grey.shade300),
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
                                // Accordion behavior: close others, open this one
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
                                  color: isFinal ? const Color(0xFF16A34A) : Colors.indigo.shade700,
                                ),
                                const SizedBox(width: 10),
                                Expanded(
                                  child: Text(
                                    isFinal ? "Final Answer" : "Step ${i + 1} of ${_steps.length}",
                                    style: TextStyle(
                                      fontSize: 13,
                                      fontWeight: FontWeight.bold,
                                      color: isFinal ? const Color(0xFF166534) : Colors.black87,
                                    ),
                                  ),
                                ),
                                Icon(
                                  isExpanded ? Icons.keyboard_arrow_up : Icons.keyboard_arrow_down,
                                  size: 20,
                                  color: Colors.grey.shade600,
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
                                const Divider(height: 12),
                                _renderMixedContent(_steps[i]),
                              ],
                            ),
                          ),
                      ],
                    ),
                  );
                }),

                // Reveal Next Step Button
                if (_revealedStepsCount < _steps.length)
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 4.0),
                    child: OutlinedButton.icon(
                      icon: const Icon(Icons.add_circle_outline, size: 18),
                      style: OutlinedButton.styleFrom(
                        foregroundColor: Colors.indigo.shade700,
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                        padding: const EdgeInsets.symmetric(vertical: 12),
                      ),
                      onPressed: () {
                        HapticFeedback.lightImpact();
                        setState(() {
                          _revealedStepsCount++;
                          if (!_allExpanded) {
                            // Focus on newly revealed drawer
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

                // Bradley Insight
                if (_revealedStepsCount >= _steps.length && _insight != null)
                  _renderInsightCard(_insight!),

                const SizedBox(height: 28),

                // ------------------------------------
                // STEP 12: SMART RECOMMENDATIONS
                // ------------------------------------
                const Text(
                  "Smart Next Steps",
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: Colors.black87),
                ),
                const SizedBox(height: 12),

                // Option A: Cross-Board Mastery
                SizedBox(
                  width: double.infinity,
                  height: 48,
                  child: ElevatedButton.icon(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.indigo.shade700,
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

                // Option B: Progression in Same ID Group (Twin / Cousin)
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

                // Option C: Dashboard / Change Topic
                SizedBox(
                  width: double.infinity,
                  height: 48,
                  child: OutlinedButton.icon(
                    style: OutlinedButton.styleFrom(
                      foregroundColor: Colors.grey.shade800,
                      side: BorderSide(color: Colors.grey.shade400),
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
      bgColor = const Color(0xFFFEFCE8);
      borderColor = const Color(0xFFFACC15);
      textColor = const Color(0xFF854D0E);
      icon = Icons.warning_amber_rounded;
    } else if (type.contains('deeper')) {
      bgColor = const Color(0xFFFAF5FF);
      borderColor = const Color(0xFFC084FC);
      textColor = const Color(0xFF581C87);
      icon = Icons.psychology;
    } else {
      bgColor = const Color(0xFFEFF6FF);
      borderColor = const Color(0xFF93C5FD);
      textColor = const Color(0xFF1E40AF);
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
  // HTML + TEXTBOOK LATEX + VECTOR SVG/PNG RENDERER
  // ----------------------------------------------------
  Widget _renderMixedContent(String rawData) {
    return HtmlWidget(
      rawData,
      factoryBuilder: () => _MathWidgetFactory(),
      textStyle: const TextStyle(fontSize: 15, height: 1.5, color: Colors.black87),
      customWidgetBuilder: (el) {
        if (el.localName == 'img') {
          final src = el.attributes['src'] ?? '';
          if (src.isNotEmpty) {
            return _buildVectorImage(src);
          }
        }
        return null;
      },
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
// --------------------------------------------------------
class _MathWidgetFactory extends WidgetFactory {
  static final RegExp _blockPattern = RegExp(
    r'(\$\$[\s\S]*?\$\$|\\begin\{[a-zA-Z*]+\}[\s\S]*?\\end\{[a-zA-Z*]+\})',
  );

  static final RegExp _inlineMathPattern = RegExp(r'\$([^\$]+?)\$');

  @override
  Widget? buildText(BuildMetadata meta, TextStyleHtml tsh, InlineSpan span) {
    final text = span.toPlainText();

    if (!_blockPattern.hasMatch(text)) {
      if (_inlineMathPattern.hasMatch(text)) {
        return _renderInlineSpan(text, tsh);
      }
      return super.buildText(meta, tsh, span);
    }

    final matches = _blockPattern.allMatches(text);
    List<Widget> blockWidgets = [];
    int lastEnd = 0;

    for (final match in matches) {
      if (match.start > lastEnd) {
        final leadingText = text.substring(lastEnd, match.start).trim();
        if (leadingText.isNotEmpty) {
          blockWidgets.add(_renderInlineSpan(leadingText, tsh));
        }
      }

      String mathContent = match.group(0)!;
      if (mathContent.startsWith(r'$$') && mathContent.endsWith(r'$$')) {
        mathContent = mathContent.substring(2, mathContent.length - 2).trim();
      }
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