import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import '../models/filter_state.dart';
import '../database_helper.dart';
import '../theme_controller.dart';
import '../services/purchase_service.dart';
import 'question_screen.dart';
import 'honours_screen.dart';
import 'paywall_sheet.dart';

class SelectionDashboard extends StatefulWidget {
  const SelectionDashboard({super.key});

  @override
  State<SelectionDashboard> createState() => _SelectionDashboardState();
}

class _SelectionDashboardState extends State<SelectionDashboard> {
  final DatabaseHelper _dbHelper = DatabaseHelper();
  final FilterState _filter = FilterState();
  final PurchaseService _purchaseService = PurchaseService();

  // Current Step: 0 = Board, 1 = Level, 2 = Branch, 3 = Major Area, 4 = Topic, 5 = Subtopic
  int _currentStep = 0;

  // Revision Mode Toggle
  bool _includeMastered = false;

  final List<String> _boards = [
    'Random',
    'Edexcel',
    'AQA',
    'OCR',
    'OCR MEI',
    'WJEC',
    'CCEA'
  ];

  final List<String> _levels = [
    'Random',
    'AS Level',
    'A Level',
  ];

  final List<Map<String, dynamic>> _branches = [
    {'name': 'Random', 'icon': Icons.shuffle, 'color': Colors.deepPurple, 'desc': 'Excludes Comprehension'},
    {'name': 'Pure', 'icon': Icons.functions, 'color': Colors.blue, 'desc': 'Calculus, Algebra, Proof, Vectors'},
    {'name': 'Mechanics', 'icon': Icons.speed, 'color': Colors.orange, 'desc': 'Kinematics, Forces, Moments'},
    {'name': 'Statistics', 'icon': Icons.bar_chart, 'color': Colors.teal, 'desc': 'Probability, Distributions, Tests'},
    {'name': 'Comprehension', 'icon': Icons.menu_book, 'color': Colors.indigo, 'desc': 'Mathematical Modelling'},
  ];

  List<String> _majorAreas = ['Random'];
  List<String> _topics = ['Random'];
  List<String> _subtopics = ['Random'];
  bool _isLoading = false;

  // Live Stats & Mastery Dictionaries
  Map<String, int> _userStats = {
    'total_attempts': 0,
    'first_try_correct': 0,
    'unique_mastered': 0,
    'unique_attempted': 0,
  };
  Map<String, Map<String, int>> _topicMastery = {};
  Map<String, Map<String, int>> _subtopicMastery = {};

  @override
  void initState() {
    super.initState();
    _purchaseService.initialize();
    _loadStats();
    _loadTaxonomy();
  }

  Future<void> _loadStats() async {
    final stats = await _dbHelper.getUserStats();
    if (mounted) {
      setState(() {
        _userStats = stats;
      });
    }
  }

  Future<void> _loadMasteryForCurrentStep() async {
    if (_currentStep == 4) {
      final tStats = await _dbHelper.getTopicMasteryStats(
        board: _filter.board,
        level: _filter.level,
        branch: _filter.branch,
        majorArea: _filter.majorArea,
      );
      if (mounted) setState(() => _topicMastery = tStats);
    } else if (_currentStep == 5) {
      final sStats = await _dbHelper.getSubtopicMasteryStats(
        board: _filter.board,
        level: _filter.level,
        branch: _filter.branch,
        majorArea: _filter.majorArea,
        topic: _filter.topic,
      );
      if (mounted) setState(() => _subtopicMastery = sStats);
    }
  }

  Future<void> _loadTaxonomy() async {
    final areas = await _dbHelper.getMajorAreas(
      board: _filter.board,
      level: _filter.level,
      branch: _filter.branch,
    );

    if (_filter.majorArea != null && !areas.contains(_filter.majorArea)) {
      _filter.majorArea = null;
    }

    final topics = await _dbHelper.getTopics(
      board: _filter.board,
      level: _filter.level,
      branch: _filter.branch,
      majorArea: _filter.majorArea,
    );

    if (_filter.topic != null && !topics.contains(_filter.topic)) {
      _filter.topic = null;
    }

    final subs = await _dbHelper.getSubtopics(
      board: _filter.board,
      level: _filter.level,
      branch: _filter.branch,
      majorArea: _filter.majorArea,
      topic: _filter.topic,
    );

    if (_filter.subtopic != null && !subs.contains(_filter.subtopic)) {
      _filter.subtopic = null;
    }

    if (mounted) {
      setState(() {
        _majorAreas = ['Random', ...areas];
        _topics = ['Random', ...topics];
        _subtopics = ['Random', ...subs];
      });
      _loadMasteryForCurrentStep();
    }
  }

  void _openHonoursScreen() {
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (_) => HonoursScreen(dbHelper: _dbHelper),
      ),
    );
  }

  void _openPaywall() {
    PaywallSheet.show(context);
  }

  // ----------------------------------------------------
  // SECRET FOUNDER'S ACCESS DIALOG
  // ----------------------------------------------------

  Future<void> _showFounderKeyDialog(BuildContext context, bool isDark) async {
    final controller = TextEditingController();
    String? errorMsg;

    await showDialog(
      context: context,
      builder: (ctx) {
        return StatefulBuilder(
          builder: (context, setDialogState) {
            return AlertDialog(
              backgroundColor: isDark ? const Color(0xFF1E293B) : Colors.white,
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
              title: Row(
                children: [
                  const Icon(Icons.key, color: Color(0xFFF59E0B), size: 22),
                  const SizedBox(width: 8),
                  Text(
                    "Founder & Master Access",
                    style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                      color: isDark ? Colors.white : Colors.black87,
                    ),
                  ),
                ],
              ),
              content: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Text(
                    "Enter confidential master passphrase to unlock lifetime access:",
                    style: TextStyle(
                      fontSize: 12,
                      color: isDark ? const Color(0xFFCBD5E1) : Colors.black87,
                    ),
                  ),
                  const SizedBox(height: 12),
                  TextField(
                    controller: controller,
                    autofocus: true,
                    obscureText: true,
                    style: TextStyle(color: isDark ? Colors.white : Colors.black87),
                    decoration: InputDecoration(
                      hintText: "Enter master key...",
                      hintStyle: TextStyle(color: isDark ? Colors.grey.shade500 : Colors.grey.shade400, fontSize: 13),
                      errorText: errorMsg,
                      filled: true,
                      fillColor: isDark ? const Color(0xFF0F172A) : Colors.grey.shade100,
                      contentPadding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(10),
                        borderSide: BorderSide(color: isDark ? const Color(0xFF334155) : Colors.grey.shade300),
                      ),
                      enabledBorder: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(10),
                        borderSide: BorderSide(color: isDark ? const Color(0xFF334155) : Colors.grey.shade300),
                      ),
                    ),
                    onSubmitted: (_) async {
                      final ok = await _purchaseService.verifyAndUnlockWithMasterKey(controller.text);
                      if (ok) {
                        Navigator.of(ctx).pop();
                        HapticFeedback.mediumImpact();
                        if (mounted) {
                          setState(() {});
                          ScaffoldMessenger.of(context).showSnackBar(
                            const SnackBar(
                              content: Text("Master Key Verified: Lifetime Edition Unlocked! Welcome, Bill."),
                              backgroundColor: Color(0xFF16A34A),
                              duration: Duration(seconds: 4),
                            ),
                          );
                        }
                      } else {
                        HapticFeedback.heavyImpact();
                        setDialogState(() => errorMsg = "Invalid master passphrase.");
                      }
                    },
                  ),
                ],
              ),
              actions: [
                TextButton(
                  onPressed: () => Navigator.of(ctx).pop(),
                  child: Text(
                    "Cancel",
                    style: TextStyle(color: isDark ? Colors.grey.shade400 : Colors.grey, fontWeight: FontWeight.bold),
                  ),
                ),
                ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFFF59E0B),
                    foregroundColor: Colors.black87,
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                  ),
                  onPressed: () async {
                    final ok = await _purchaseService.verifyAndUnlockWithMasterKey(controller.text);
                    if (ok) {
                      Navigator.of(ctx).pop();
                      HapticFeedback.mediumImpact();
                      if (mounted) {
                        setState(() {});
                        ScaffoldMessenger.of(context).showSnackBar(
                          const SnackBar(
                            content: Text("Master Key Verified: Lifetime Edition Unlocked! Welcome, Bill."),
                            backgroundColor: Color(0xFF16A34A),
                            duration: Duration(seconds: 4),
                          ),
                        );
                      }
                    } else {
                      HapticFeedback.heavyImpact();
                      setDialogState(() => errorMsg = "Invalid master passphrase.");
                    }
                  },
                  child: const Text("Verify & Unlock", style: TextStyle(fontWeight: FontWeight.bold)),
                ),
              ],
            );
          },
        );
      },
    );
  }

  // ----------------------------------------------------
  // INSTANT TAP HANDLERS (STEP ADVANCEMENT)
  // ----------------------------------------------------

  void _onBoardTapped(String boardName) {
    setState(() {
      _filter.board = boardName == 'Random' ? null : boardName;
      _currentStep = 1;
    });
    _loadTaxonomy();
  }

  void _onLevelTapped(String levelName) {
    setState(() {
      _filter.level = levelName == 'Random' ? null : levelName;
      _currentStep = 2;
    });
    _loadTaxonomy();
  }

  void _onBranchTapped(String branchName) {
    setState(() {
      _filter.setBranch(branchName == 'Random' ? null : branchName);
      _currentStep = 3;
    });
    _loadTaxonomy();
  }

  void _onMajorAreaTapped(String areaName) async {
    setState(() {
      _filter.setMajorArea(areaName == 'Random' ? null : areaName);
      _currentStep = 4;
    });

    final topics = await _dbHelper.getTopics(
      board: _filter.board,
      level: _filter.level,
      branch: _filter.branch,
      majorArea: _filter.majorArea,
    );

    final tStats = await _dbHelper.getTopicMasteryStats(
      board: _filter.board,
      level: _filter.level,
      branch: _filter.branch,
      majorArea: _filter.majorArea,
    );

    if (mounted) {
      setState(() {
        _topics = ['Random', ...topics];
        _topicMastery = tStats;
      });
    }
  }

  void _onTopicTapped(String topicName) async {
    setState(() {
      _filter.setTopic(topicName == 'Random' ? null : topicName);
    });

    // In Comprehension, the topic IS the document! Launch directly into Question 1!
    if (_filter.branch == 'Comprehension') {
      _filter.subtopic = null;
      _launchQuestion();
      return;
    }

    setState(() => _currentStep = 5);

    final subs = await _dbHelper.getSubtopics(
      board: _filter.board,
      level: _filter.level,
      branch: _filter.branch,
      majorArea: _filter.majorArea,
      topic: _filter.topic,
    );

    final sStats = await _dbHelper.getSubtopicMasteryStats(
      board: _filter.board,
      level: _filter.level,
      branch: _filter.branch,
      majorArea: _filter.majorArea,
      topic: _filter.topic,
    );

    if (mounted) {
      setState(() {
        _subtopics = ['Random', ...subs];
        _subtopicMastery = sStats;
      });
    }
  }

  void _onSubtopicTapped(String subtopicName) {
    _filter.subtopic = subtopicName == 'Random' ? null : subtopicName;

    if (!_includeMastered && subtopicName != 'Random') {
      final stats = _subtopicMastery[subtopicName];
      final total = stats?['total'] ?? 0;
      final mastered = stats?['mastered'] ?? 0;
      if (total > 0 && mastered == total) {
        _showTopicMasteredDialog(subtopicName);
        return;
      }
    }

    _launchQuestion();
  }

  void _stepBack() {
    if (_currentStep > 0) {
      setState(() => _currentStep--);
      _loadMasteryForCurrentStep();
    }
  }

  void _quickRandomAll() {
    _filter.reset();
    _launchQuestion();
  }

  // ----------------------------------------------------
  // SMART REVISIT DIALOG
  // ----------------------------------------------------

  Future<void> _showTopicMasteredDialog(String topicTitle) async {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return showDialog(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: isDark ? const Color(0xFF1E293B) : Colors.white,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
        title: Row(
          children: [
            const Icon(Icons.stars, color: Color(0xFF16A34A), size: 24),
            const SizedBox(width: 8),
            Text(
              "Topic Mastered! 🎉",
              style: TextStyle(
                fontSize: 17,
                fontWeight: FontWeight.bold,
                color: isDark ? Colors.white : Colors.black87,
              ),
            ),
          ],
        ),
        content: Text(
          "You have successfully solved all questions in '$topicTitle'.\n\nWould you like to enter Exam Revision Mode to practice them again?",
          style: TextStyle(
            fontSize: 13,
            height: 1.4,
            color: isDark ? const Color(0xFFCBD5E1) : Colors.black87,
          ),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(ctx).pop(),
            child: Text(
              "Cancel",
              style: TextStyle(
                color: isDark ? Colors.grey.shade400 : Colors.grey,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          ElevatedButton(
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xFF16A34A),
              foregroundColor: Colors.white,
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
            ),
            onPressed: () {
              Navigator.of(ctx).pop();
              _launchQuestion(forceIncludeMastered: true);
            },
            child: const Text("Practice Mastered", style: TextStyle(fontWeight: FontWeight.bold)),
          ),
        ],
      ),
    );
  }

  // ----------------------------------------------------
  // QUESTION LAUNCHER (WITH 25-QUESTION GATEKEEPER LOCK)
  // ----------------------------------------------------

  Future<void> _launchQuestion({bool forceIncludeMastered = false}) async {
    final bool isFullAccess = _purchaseService.isUnlocked.value;
    final int uniqueAttempted = _userStats['unique_attempted'] ?? 0;

    if (!isFullAccess && uniqueAttempted >= PurchaseService.freeTrialLimit) {
      _openPaywall();
      return;
    }

    setState(() => _isLoading = true);

    try {
      final question = await _dbHelper.fetchQuestion(
        _filter,
        includeMastered: _includeMastered || forceIncludeMastered,
      );
      setState(() => _isLoading = false);

      if (question != null && mounted) {
        await Navigator.of(context).push(
          MaterialPageRoute(
            builder: (_) => QuestionScreen(
              question: question,
              dbHelper: _dbHelper,
              filterState: _filter,
            ),
          ),
        );
        _loadStats();
        _loadMasteryForCurrentStep();
      } else if (mounted) {
        if (!_includeMastered && !forceIncludeMastered) {
          final reviewCheck = await _dbHelper.fetchQuestion(_filter, includeMastered: true);
          if (reviewCheck != null && mounted) {
            _showTopicMasteredDialog(
              _filter.subtopic ?? _filter.topic ?? _filter.majorArea ?? 'this selection',
            );
            return;
          }
        }
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('No question matched this combination.')),
        );
      }
    } catch (e) {
      setState(() => _isLoading = false);
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Error fetching question: $e')),
        );
      }
    }
  }

  // ----------------------------------------------------
  // MAIN BUILD
  // ----------------------------------------------------

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Scaffold(
      backgroundColor: isDark ? const Color(0xFF0F172A) : const Color(0xFFF8FAFC),
      appBar: AppBar(
        backgroundColor: isDark ? const Color(0xFF0F172A) : Colors.white,
        elevation: 0,
        centerTitle: true,
        // Secret Founder's Unlock: Long-press prompts for passphrase
        title: GestureDetector(
          onLongPress: () => _showFounderKeyDialog(context, isDark),
          child: Text(
            "Bradley's Maths",
            style: TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 18,
              color: isDark ? Colors.white : const Color(0xFF0F172A),
            ),
          ),
        ),
        leading: _currentStep > 0
            ? IconButton(
                icon: Icon(Icons.arrow_back, color: isDark ? Colors.white : Colors.black87),
                onPressed: _stepBack,
              )
            : null,
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
          IconButton(
            icon: const Icon(Icons.workspace_premium, color: Color(0xFFF59E0B)),
            tooltip: "Honours Matrix",
            onPressed: _openHonoursScreen,
          ),
          TextButton.icon(
            icon: const Icon(Icons.bolt, color: Colors.amber, size: 18),
            label: Text(
              "Random",
              style: TextStyle(
                color: isDark ? Colors.white : Colors.indigo.shade800,
                fontWeight: FontWeight.bold,
                fontSize: 13,
              ),
            ),
            onPressed: _isLoading ? null : _quickRandomAll,
          ),
        ],
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator(color: Color(0xFFF59E0B)))
          : Center(
              child: Container(
                constraints: const BoxConstraints(maxWidth: 420),
                padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 10.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    _buildStatsRibbon(isDark),
                    const SizedBox(height: 8),

                    _buildTrialCountdownBanner(isDark),
                    const SizedBox(height: 8),

                    _buildRevisionToggleBanner(isDark),
                    const SizedBox(height: 8),

                    _buildBreadcrumbHeader(isDark),
                    const SizedBox(height: 12),

                    Expanded(
                      child: _buildCurrentStepView(isDark),
                    ),
                  ],
                ),
              ),
            ),
    );
  }

  // ----------------------------------------------------
  // 25-QUESTION TRIAL COUNTDOWN / LIFETIME UNLOCKED BANNER
  // ----------------------------------------------------

  Widget _buildTrialCountdownBanner(bool isDark) {
    return ValueListenableBuilder<bool>(
      valueListenable: _purchaseService.isUnlocked,
      builder: (ctx, unlocked, _) {
        if (unlocked) {
          return Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
            decoration: BoxDecoration(
              color: isDark ? const Color(0xFF1E293B) : const Color(0xFFFEF3C7),
              borderRadius: BorderRadius.circular(10),
              border: Border.all(color: const Color(0xFFF59E0B)),
            ),
            child: const Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(Icons.workspace_premium, color: Color(0xFFF59E0B), size: 16),
                SizedBox(width: 8),
                Text(
                  "Full Lifetime Access Unlocked",
                  style: TextStyle(
                    fontSize: 11,
                    fontWeight: FontWeight.bold,
                    color: Color(0xFFF59E0B),
                  ),
                ),
              ],
            ),
          );
        }

        final int uniqueAttempted = _userStats['unique_attempted'] ?? 0;
        final int remaining = (PurchaseService.freeTrialLimit - uniqueAttempted).clamp(0, PurchaseService.freeTrialLimit);

        return InkWell(
          onTap: _openPaywall,
          borderRadius: BorderRadius.circular(10),
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
            decoration: BoxDecoration(
              color: isDark ? const Color(0xFF1E293B) : Colors.indigo.shade50,
              borderRadius: BorderRadius.circular(10),
              border: Border.all(
                color: remaining <= 5
                    ? (isDark ? const Color(0xFFF87171) : Colors.red.shade400)
                    : (isDark ? const Color(0xFF818CF8) : Colors.indigo.shade300),
              ),
            ),
            child: Row(
              children: [
                Icon(
                  remaining <= 5 ? Icons.lock_clock : Icons.stars,
                  size: 16,
                  color: remaining <= 5
                      ? (isDark ? const Color(0xFFF87171) : Colors.red.shade700)
                      : (isDark ? const Color(0xFFFDE68A) : Colors.indigo.shade700),
                ),
                const SizedBox(width: 8),
                Expanded(
                  child: Text(
                    remaining > 0
                        ? "Free Trial: $remaining / ${PurchaseService.freeTrialLimit} questions left"
                        : "Free Trial Complete: Tap to Unlock All 1,400",
                    style: TextStyle(
                      fontSize: 11,
                      fontWeight: FontWeight.bold,
                      color: isDark ? Colors.white : Colors.indigo.shade900,
                    ),
                  ),
                ),
                Text(
                  "Unlock",
                  style: TextStyle(
                    fontSize: 11,
                    fontWeight: FontWeight.bold,
                    color: isDark ? const Color(0xFFF59E0B) : Colors.indigo.shade700,
                  ),
                ),
                const SizedBox(width: 2),
                Icon(
                  Icons.chevron_right,
                  size: 16,
                  color: isDark ? const Color(0xFFF59E0B) : Colors.indigo.shade700,
                ),
              ],
            ),
          ),
        );
      },
    );
  }

  // ----------------------------------------------------
  // LIVE STATS RIBBON
  // ----------------------------------------------------

  Widget _buildStatsRibbon(bool isDark) {
    final int total = _userStats['total_attempts'] ?? 0;
    final int correct = _userStats['first_try_correct'] ?? 0;
    final int mastered = _userStats['unique_mastered'] ?? 0;
    final int accuracy = total > 0 ? ((correct / total) * 100).round() : 0;

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF1E293B) : Colors.white,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(
          color: isDark ? const Color(0xFF334155) : Colors.indigo.shade100,
        ),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withAlpha(isDark ? 60 : 8),
            blurRadius: 4,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Row(
        children: [
          Expanded(
            child: InkWell(
              onTap: _openHonoursScreen,
              borderRadius: BorderRadius.circular(8),
              child: _buildStatCell(
                label: "Mastered",
                value: "$mastered",
                icon: Icons.check_circle_outline,
                accentColor: isDark ? const Color(0xFF34D399) : Colors.teal.shade700,
                isDark: isDark,
              ),
            ),
          ),
          Container(
            width: 1,
            height: 26,
            color: isDark ? const Color(0xFF334155) : Colors.grey.shade200,
          ),
          Expanded(
            child: _buildStatCell(
              label: "1st-Try Acc.",
              value: "$accuracy%",
              icon: Icons.track_changes,
              accentColor: isDark ? const Color(0xFF818CF8) : Colors.indigo.shade700,
              isDark: isDark,
            ),
          ),
          Container(
            width: 1,
            height: 26,
            color: isDark ? const Color(0xFF334155) : Colors.grey.shade200,
          ),
          Expanded(
            child: _buildStatCell(
              label: "Attempts",
              value: "$total",
              icon: Icons.history,
              accentColor: isDark ? const Color(0xFFC084FC) : Colors.deepPurple.shade700,
              isDark: isDark,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildStatCell({
    required String label,
    required String value,
    required IconData icon,
    required Color accentColor,
    required bool isDark,
  }) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(icon, size: 13, color: accentColor),
            const SizedBox(width: 4),
            Text(
              value,
              style: TextStyle(
                fontSize: 14,
                fontWeight: FontWeight.bold,
                color: accentColor,
              ),
            ),
          ],
        ),
        const SizedBox(height: 1),
        Text(
          label,
          style: TextStyle(
            fontSize: 10,
            fontWeight: FontWeight.w600,
            color: isDark ? Colors.grey.shade400 : Colors.grey.shade600,
          ),
        ),
      ],
    );
  }

  // ----------------------------------------------------
  // EXAM REVISION MODE TOGGLE
  // ----------------------------------------------------

  Widget _buildRevisionToggleBanner(bool isDark) {
    Color bannerBg;
    Color bannerBorder;
    Color bannerText;

    if (_includeMastered) {
      bannerBg = isDark ? const Color(0xFF064E3B).withAlpha(50) : const Color(0xFFF0FDF4);
      bannerBorder = isDark ? const Color(0xFF059669) : const Color(0xFF16A34A);
      bannerText = isDark ? const Color(0xFF6EE7B7) : const Color(0xFF15803D);
    } else {
      bannerBg = isDark ? const Color(0xFF1E293B) : Colors.white;
      bannerBorder = isDark ? const Color(0xFF334155) : Colors.grey.shade300;
      bannerText = isDark ? Colors.white : Colors.black87;
    }

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
      decoration: BoxDecoration(
        color: bannerBg,
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: bannerBorder),
      ),
      child: Row(
        children: [
          Icon(
            _includeMastered ? Icons.autorenew : Icons.filter_alt_outlined,
            size: 16,
            color: _includeMastered
                ? (isDark ? const Color(0xFF34D399) : const Color(0xFF15803D))
                : (isDark ? const Color(0xFF818CF8) : Colors.indigo.shade700),
          ),
          const SizedBox(width: 8),
          Expanded(
            child: Text(
              _includeMastered ? "Exam Revision Mode (All Questions)" : "Practice Mode (Unsolved Only)",
              style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.bold,
                color: bannerText,
              ),
            ),
          ),
          SizedBox(
            height: 24,
            child: Switch.adaptive(
              value: _includeMastered,
              activeColor: const Color(0xFF16A34A),
              onChanged: (val) {
                setState(() => _includeMastered = val);
              },
            ),
          ),
        ],
      ),
    );
  }

  // ----------------------------------------------------
  // BREADCRUMB HEADER
  // ----------------------------------------------------

  Widget _buildBreadcrumbHeader(bool isDark) {
    List<String> crumbs = [];
    if (_currentStep > 0) crumbs.add(_filter.board ?? 'Any Board');
    if (_currentStep > 1) crumbs.add(_filter.level ?? 'Any Level');
    if (_currentStep > 2) crumbs.add(_filter.branch ?? 'Any Branch');
    if (_currentStep > 3) crumbs.add(_filter.majorArea ?? 'Any Area');
    if (_currentStep > 4) crumbs.add(_filter.topic ?? 'Any Topic');

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF1E293B) : Colors.white,
        borderRadius: BorderRadius.circular(10),
        border: Border.all(
          color: isDark ? const Color(0xFF334155) : Colors.grey.shade300,
        ),
      ),
      child: Row(
        children: [
          Icon(
            Icons.tune,
            size: 16,
            color: isDark ? const Color(0xFF818CF8) : Colors.indigo.shade700,
          ),
          const SizedBox(width: 8),
          Expanded(
            child: Text(
              crumbs.isEmpty ? "Tap to choose your revision topic:" : crumbs.join('  ›  '),
              style: TextStyle(
                fontSize: 12,
                fontWeight: FontWeight.w600,
                color: crumbs.isEmpty
                    ? (isDark ? Colors.grey.shade400 : Colors.grey.shade600)
                    : (isDark ? Colors.white : Colors.indigo.shade900),
              ),
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
            ),
          ),
          if (_currentStep > 0)
            GestureDetector(
              onTap: () => setState(() => _currentStep = 0),
              child: Text(
                "Reset",
                style: TextStyle(
                  fontSize: 11,
                  color: isDark ? const Color(0xFFF87171) : Colors.red.shade700,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
        ],
      ),
    );
  }

  // ----------------------------------------------------
  // STEP ROUTER
  // ----------------------------------------------------

  Widget _buildCurrentStepView(bool isDark) {
    switch (_currentStep) {
      case 0:
        return _buildStep(
          stepNumber: "Step 1 of 6",
          title: "Choose Exam Board",
          subtitle: "Select your board or 'Random' for cross-board practice",
          items: _boards,
          onSelected: _onBoardTapped,
          activeItem: _filter.board,
          isDark: isDark,
        );
      case 1:
        return _buildStep(
          stepNumber: "Step 2 of 6",
          title: "Choose Level",
          subtitle: "Select AS Level, A Level, or Random",
          items: _levels,
          onSelected: _onLevelTapped,
          activeItem: _filter.level,
          isDark: isDark,
        );
      case 2:
        return _buildBranchStep(isDark);
      case 3:
        return _buildStep(
          stepNumber: "Step 4 of 6",
          title: "Choose Major Area",
          subtitle: "Filtered by your chosen Branch",
          items: _majorAreas,
          onSelected: _onMajorAreaTapped,
          activeItem: _filter.majorArea,
          isDark: isDark,
        );
      case 4:
        return _buildStep(
          stepNumber: "Step 5 of 6",
          title: "Choose Topic",
          subtitle: "Filtered by your chosen Major Area",
          items: _topics,
          onSelected: _onTopicTapped,
          activeItem: _filter.topic,
          masteryData: _topicMastery,
          isDark: isDark,
        );
      case 5:
        return _buildStep(
          stepNumber: "Step 6 of 6",
          title: "Choose Subtopic",
          subtitle: "Select a laser-focused subtopic or 'All' to launch",
          items: _subtopics,
          onSelected: _onSubtopicTapped,
          activeItem: _filter.subtopic,
          masteryData: _subtopicMastery,
          isDark: isDark,
        );
      default:
        return const SizedBox.shrink();
    }
  }

  // ----------------------------------------------------
  // GENERIC STEP LIST BUILDER
  // ----------------------------------------------------

  Widget _buildStep({
    required String stepNumber,
    required String title,
    required String subtitle,
    required List<String> items,
    required Function(String) onSelected,
    String? activeItem,
    Map<String, Map<String, int>>? masteryData,
    required bool isDark,
  }) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Text(
          stepNumber.toUpperCase(),
          style: TextStyle(
            fontSize: 11,
            fontWeight: FontWeight.bold,
            color: isDark ? const Color(0xFF818CF8) : Colors.indigo.shade600,
            letterSpacing: 1,
          ),
        ),
        const SizedBox(height: 2),
        Text(
          title,
          style: TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.bold,
            color: isDark ? Colors.white : const Color(0xFF0F172A),
          ),
        ),
        Text(
          subtitle,
          style: TextStyle(
            fontSize: 12,
            color: isDark ? Colors.grey.shade400 : Colors.grey.shade600,
          ),
        ),
        const SizedBox(height: 14),

        Expanded(
          child: ListView.separated(
            itemCount: items.length,
            separatorBuilder: (_, __) => const SizedBox(height: 8),
            itemBuilder: (context, index) {
              final item = items[index];
              final isRandom = item == 'Random';
              final isCurrent = (activeItem ?? 'Random') == item;

              final stats = (masteryData != null && !isRandom) ? masteryData[item] : null;
              final total = stats?['total'] ?? 0;
              final mastered = stats?['mastered'] ?? 0;
              final isCompleted = total > 0 && mastered == total;

              Color cardBg;
              Color borderColor;
              Color textColor;

              if (isDark) {
                if (isRandom) {
                  cardBg = const Color(0xFF1E1B4B);
                  borderColor = const Color(0xFF4338CA);
                  textColor = const Color(0xFFC7D2FE);
                } else if (isCompleted) {
                  cardBg = const Color(0xFF064E3B).withAlpha(60);
                  borderColor = const Color(0xFF059669);
                  textColor = const Color(0xFF6EE7B7);
                } else if (isCurrent) {
                  cardBg = const Color(0xFF1E293B);
                  borderColor = const Color(0xFF818CF8);
                  textColor = Colors.white;
                } else {
                  cardBg = const Color(0xFF1E293B);
                  borderColor = const Color(0xFF334155);
                  textColor = Colors.white;
                }
              } else {
                if (isRandom) {
                  cardBg = Colors.indigo.shade50;
                  borderColor = Colors.indigo.shade300;
                  textColor = Colors.indigo.shade900;
                } else if (isCompleted) {
                  cardBg = const Color(0xFFF0FDF4);
                  borderColor = const Color(0xFF86EFAC);
                  textColor = const Color(0xFF14532D);
                } else if (isCurrent) {
                  cardBg = Colors.white;
                  borderColor = Colors.indigo.shade600;
                  textColor = Colors.black87;
                } else {
                  cardBg = Colors.white;
                  borderColor = Colors.grey.shade300;
                  textColor = Colors.black87;
                }
              }

              return Material(
                color: cardBg,
                borderRadius: BorderRadius.circular(12),
                child: InkWell(
                  onTap: () => onSelected(item),
                  borderRadius: BorderRadius.circular(12),
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                    decoration: BoxDecoration(
                      border: Border.all(
                        color: borderColor,
                        width: (isCompleted || (isCurrent && !isRandom)) ? 1.5 : 1.0,
                      ),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Row(
                      children: [
                        if (isRandom) ...[
                          Icon(
                            Icons.shuffle,
                            color: isDark ? const Color(0xFF818CF8) : Colors.indigo.shade700,
                            size: 20,
                          ),
                          const SizedBox(width: 10),
                        ],
                        Expanded(
                          child: Text(
                            isRandom ? "Any / Random (All)" : item,
                            style: TextStyle(
                              fontSize: 14,
                              fontWeight: isRandom || isCompleted || isCurrent ? FontWeight.bold : FontWeight.w500,
                              color: textColor,
                            ),
                          ),
                        ),
                        if (isCompleted) ...[
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                            decoration: BoxDecoration(
                              color: isDark ? const Color(0xFF064E3B) : const Color(0xFFDCFCE7),
                              borderRadius: BorderRadius.circular(6),
                              border: Border.all(
                                color: isDark ? const Color(0xFF059669) : const Color(0xFF86EFAC),
                              ),
                            ),
                            child: Row(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                Icon(
                                  Icons.check,
                                  size: 12,
                                  color: isDark ? const Color(0xFF34D399) : const Color(0xFF15803D),
                                ),
                                const SizedBox(width: 2),
                                Text(
                                  "$mastered/$total",
                                  style: TextStyle(
                                    fontSize: 11,
                                    fontWeight: FontWeight.bold,
                                    color: isDark ? const Color(0xFF34D399) : const Color(0xFF15803D),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ] else if (mastered > 0) ...[
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                            decoration: BoxDecoration(
                              color: isDark ? const Color(0xFF334155) : Colors.grey.shade100,
                              borderRadius: BorderRadius.circular(6),
                            ),
                            child: Text(
                              "$mastered/$total",
                              style: TextStyle(
                                fontSize: 11,
                                fontWeight: FontWeight.bold,
                                color: isDark ? Colors.grey.shade300 : Colors.grey.shade700,
                              ),
                            ),
                          ),
                        ],
                        const SizedBox(width: 4),
                        Icon(
                          Icons.chevron_right,
                          color: isCompleted
                              ? (isDark ? const Color(0xFF34D399) : const Color(0xFF15803D))
                              : (isDark ? Colors.grey.shade500 : Colors.grey.shade400),
                          size: 20,
                        ),
                      ],
                    ),
                  ),
                ),
              );
            },
          ),
        ),
      ],
    );
  }

  // ----------------------------------------------------
  // STEP 3: BRANCH STEP
  // ----------------------------------------------------

  Widget _buildBranchStep(bool isDark) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Text(
          "STEP 3 OF 6",
          style: TextStyle(
            fontSize: 11,
            fontWeight: FontWeight.bold,
            color: isDark ? const Color(0xFF818CF8) : Colors.indigo.shade600,
            letterSpacing: 1,
          ),
        ),
        const SizedBox(height: 2),
        Text(
          "Branch of Mathematics",
          style: TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.bold,
            color: isDark ? Colors.white : const Color(0xFF0F172A),
          ),
        ),
        Text(
          "Select Pure, Applied, or Random",
          style: TextStyle(
            fontSize: 12,
            color: isDark ? Colors.grey.shade400 : Colors.grey.shade600,
          ),
        ),
        const SizedBox(height: 14),

        Expanded(
          child: ListView.separated(
            itemCount: _branches.length,
            separatorBuilder: (_, __) => const SizedBox(height: 10),
            itemBuilder: (context, index) {
              final br = _branches[index];
              final name = br['name'] as String;
              final icon = br['icon'] as IconData;
              final color = br['color'] as Color;
              final desc = br['desc'] as String;

              return Material(
                color: isDark ? const Color(0xFF1E293B) : Colors.white,
                borderRadius: BorderRadius.circular(12),
                child: InkWell(
                  onTap: () => _onBranchTapped(name),
                  borderRadius: BorderRadius.circular(12),
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                    decoration: BoxDecoration(
                      border: Border.all(
                        color: isDark ? const Color(0xFF334155) : Colors.grey.shade300,
                      ),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Row(
                      children: [
                        Container(
                          padding: const EdgeInsets.all(10),
                          decoration: BoxDecoration(
                            color: color.withAlpha(isDark ? 45 : 25),
                            borderRadius: BorderRadius.circular(10),
                            border: Border.all(color: color.withAlpha(isDark ? 80 : 40)),
                          ),
                          child: Icon(icon, color: color, size: 24),
                        ),
                        const SizedBox(width: 14),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                name,
                                style: TextStyle(
                                  fontSize: 15,
                                  fontWeight: FontWeight.bold,
                                  color: isDark ? Colors.white : const Color(0xFF0F172A),
                                ),
                              ),
                              const SizedBox(height: 2),
                              Text(
                                desc,
                                style: TextStyle(
                                  fontSize: 11,
                                  fontWeight: FontWeight.w500,
                                  color: isDark ? const Color(0xFF94A3B8) : const Color(0xFF475569),
                                ),
                              ),
                            ],
                          ),
                        ),
                        Icon(
                          Icons.chevron_right,
                          color: isDark ? Colors.grey.shade500 : Colors.grey.shade400,
                          size: 20,
                        ),
                      ],
                    ),
                  ),
                ),
              );
            },
          ),
        ),
      ],
    );
  }
}