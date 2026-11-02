import 'package:flutter/material.dart';
import '../models/filter_state.dart';
import '../database_helper.dart';
import 'question_screen.dart';
import 'honours_screen.dart';

class SelectionDashboard extends StatefulWidget {
  const SelectionDashboard({super.key});

  @override
  State<SelectionDashboard> createState() => _SelectionDashboardState();
}

class _SelectionDashboardState extends State<SelectionDashboard> {
  final DatabaseHelper _dbHelper = DatabaseHelper();
  final FilterState _filter = FilterState();

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
  };
  Map<String, Map<String, int>> _topicMastery = {};
  Map<String, Map<String, int>> _subtopicMastery = {};

  @override
  void initState() {
    super.initState();
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
      _currentStep = 5;
    });

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

    // Check if fully mastered and not currently in revision mode
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
    return showDialog(
      context: context,
      builder: (ctx) => AlertDialog(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
        title: const Row(
          children: [
            Icon(Icons.stars, color: Color(0xFF16A34A), size: 24),
            SizedBox(width: 8),
            Text("Topic Mastered! 🎉", style: TextStyle(fontSize: 17, fontWeight: FontWeight.bold)),
          ],
        ),
        content: Text(
          "You have successfully solved all questions in '$topicTitle'.\n\nWould you like to enter Exam Revision Mode to practice them again?",
          style: const TextStyle(fontSize: 13, height: 1.4, color: Colors.black87),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(ctx).pop(),
            child: const Text("Cancel", style: TextStyle(color: Colors.grey, fontWeight: FontWeight.bold)),
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
  // QUESTION LAUNCHER
  // ----------------------------------------------------

  Future<void> _launchQuestion({bool forceIncludeMastered = false}) async {
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
        // Refresh live stats & topic completion upon return
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
    return Scaffold(
      backgroundColor: const Color(0xFFF8FAFC),
      appBar: AppBar(
        title: const Text(
          "Bradley's Maths",
          style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18),
        ),
        elevation: 0,
        centerTitle: true,
        leading: _currentStep > 0
            ? IconButton(
                icon: const Icon(Icons.arrow_back),
                onPressed: _stepBack,
              )
            : null,
        actions: [
          // Mathematical Honours Trophy Shortcut
          IconButton(
            icon: const Icon(Icons.workspace_premium, color: Color(0xFFF59E0B)),
            tooltip: "Honours Matrix",
            onPressed: _openHonoursScreen,
          ),
          TextButton.icon(
            icon: const Icon(Icons.bolt, color: Colors.amber, size: 18),
            label: const Text(
              "Random",
              style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 13),
            ),
            onPressed: _isLoading ? null : _quickRandomAll,
          ),
        ],
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator())
          : Center(
              child: Container(
                constraints: const BoxConstraints(maxWidth: 420), // 360-420px mobile viewport
                padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 10.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    // Live Stats Ribbon (Tap Mastered to view Honours!)
                    _buildStatsRibbon(),
                    const SizedBox(height: 8),

                    // Exam Revision Mode Toggle Banner
                    _buildRevisionToggleBanner(),
                    const SizedBox(height: 8),

                    // Live Breadcrumb Trail
                    _buildBreadcrumbHeader(),
                    const SizedBox(height: 12),

                    // Active Step View (Instant Cut)
                    Expanded(
                      child: _buildCurrentStepView(),
                    ),
                  ],
                ),
              ),
            ),
    );
  }

  // ----------------------------------------------------
  // LIVE STATS RIBBON (360px MOBILE OPTIMISED)
  // ----------------------------------------------------

  Widget _buildStatsRibbon() {
    final int total = _userStats['total_attempts'] ?? 0;
    final int correct = _userStats['first_try_correct'] ?? 0;
    final int mastered = _userStats['unique_mastered'] ?? 0;
    final int accuracy = total > 0 ? ((correct / total) * 100).round() : 0;

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: Colors.indigo.shade100),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withAlpha(8),
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
                accentColor: Colors.teal.shade700,
              ),
            ),
          ),
          Container(width: 1, height: 26, color: Colors.grey.shade200),
          Expanded(
            child: _buildStatCell(
              label: "1st-Try Acc.",
              value: "$accuracy%",
              icon: Icons.track_changes,
              accentColor: Colors.indigo.shade700,
            ),
          ),
          Container(width: 1, height: 26, color: Colors.grey.shade200),
          Expanded(
            child: _buildStatCell(
              label: "Attempts",
              value: "$total",
              icon: Icons.history,
              accentColor: Colors.deepPurple.shade700,
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
            color: Colors.grey.shade600,
          ),
        ),
      ],
    );
  }

  // ----------------------------------------------------
  // EXAM REVISION MODE TOGGLE (328px USABLE WIDTH)
  // ----------------------------------------------------

  Widget _buildRevisionToggleBanner() {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
      decoration: BoxDecoration(
        color: _includeMastered ? const Color(0xFFF0FDF4) : Colors.white,
        borderRadius: BorderRadius.circular(10),
        border: Border.all(
          color: _includeMastered ? const Color(0xFF16A34A) : Colors.grey.shade300,
        ),
      ),
      child: Row(
        children: [
          Icon(
            _includeMastered ? Icons.autorenew : Icons.filter_alt_outlined,
            size: 16,
            color: _includeMastered ? const Color(0xFF15803D) : Colors.indigo.shade700,
          ),
          const SizedBox(width: 8),
          Expanded(
            child: Text(
              _includeMastered ? "Exam Revision Mode (All Questions)" : "Practice Mode (Unsolved Only)",
              style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.bold,
                color: _includeMastered ? const Color(0xFF15803D) : Colors.black87,
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

  Widget _buildBreadcrumbHeader() {
    List<String> crumbs = [];
    if (_currentStep > 0) crumbs.add(_filter.board ?? 'Any Board');
    if (_currentStep > 1) crumbs.add(_filter.level ?? 'Any Level');
    if (_currentStep > 2) crumbs.add(_filter.branch ?? 'Any Branch');
    if (_currentStep > 3) crumbs.add(_filter.majorArea ?? 'Any Area');
    if (_currentStep > 4) crumbs.add(_filter.topic ?? 'Any Topic');

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: Colors.grey.shade300),
      ),
      child: Row(
        children: [
          Icon(Icons.tune, size: 16, color: Colors.indigo.shade700),
          const SizedBox(width: 8),
          Expanded(
            child: Text(
              crumbs.isEmpty ? "Tap to choose your revision topic:" : crumbs.join('  ›  '),
              style: TextStyle(
                fontSize: 12,
                fontWeight: FontWeight.w600,
                color: crumbs.isEmpty ? Colors.grey.shade600 : Colors.indigo.shade900,
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
                style: TextStyle(fontSize: 11, color: Colors.red.shade700, fontWeight: FontWeight.bold),
              ),
            ),
        ],
      ),
    );
  }

  // ----------------------------------------------------
  // STEP ROUTER (INSTANT VIEWS)
  // ----------------------------------------------------

  Widget _buildCurrentStepView() {
    switch (_currentStep) {
      case 0:
        return _buildStep(
          stepNumber: "Step 1 of 6",
          title: "Choose Exam Board",
          subtitle: "Select your board or 'Random' for cross-board practice",
          items: _boards,
          onSelected: _onBoardTapped,
          activeItem: _filter.board,
        );
      case 1:
        return _buildStep(
          stepNumber: "Step 2 of 6",
          title: "Choose Level",
          subtitle: "Select AS Level, A Level, or Random",
          items: _levels,
          onSelected: _onLevelTapped,
          activeItem: _filter.level,
        );
      case 2:
        return _buildBranchStep();
      case 3:
        return _buildStep(
          stepNumber: "Step 4 of 6",
          title: "Choose Major Area",
          subtitle: "Filtered by your chosen Branch",
          items: _majorAreas,
          onSelected: _onMajorAreaTapped,
          activeItem: _filter.majorArea,
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
        );
      default:
        return const SizedBox.shrink();
    }
  }

  // ----------------------------------------------------
  // GENERIC STEP LIST BUILDER (WITH RULE B GREEN MASTERY)
  // ----------------------------------------------------

  Widget _buildStep({
    required String stepNumber,
    required String title,
    required String subtitle,
    required List<String> items,
    required Function(String) onSelected,
    String? activeItem,
    Map<String, Map<String, int>>? masteryData,
  }) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Text(
          stepNumber.toUpperCase(),
          style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: Colors.indigo.shade600, letterSpacing: 1),
        ),
        const SizedBox(height: 2),
        Text(
          title,
          style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Colors.black87),
        ),
        Text(
          subtitle,
          style: TextStyle(fontSize: 12, color: Colors.grey.shade600),
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

              // Rule B Mastery Calculation
              final stats = (masteryData != null && !isRandom) ? masteryData[item] : null;
              final total = stats?['total'] ?? 0;
              final mastered = stats?['mastered'] ?? 0;
              final isCompleted = total > 0 && mastered == total;

              // Visual styling
              Color cardBg = Colors.white;
              Color borderColor = Colors.grey.shade300;
              Color textColor = Colors.black87;

              if (isRandom) {
                cardBg = Colors.indigo.shade50;
                borderColor = Colors.indigo.shade300;
                textColor = Colors.indigo.shade900;
              } else if (isCompleted) {
                cardBg = const Color(0xFFF0FDF4); // Soft Emerald
                borderColor = const Color(0xFF86EFAC); // Mint Green border
                textColor = const Color(0xFF14532D); // Deep Green text
              } else if (isCurrent) {
                borderColor = Colors.indigo.shade600;
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
                          Icon(Icons.shuffle, color: Colors.indigo.shade700, size: 20),
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
                        // Mastery Indicator Badges
                        if (isCompleted) ...[
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                            decoration: BoxDecoration(
                              color: const Color(0xFFDCFCE7),
                              borderRadius: BorderRadius.circular(6),
                              border: Border.all(color: const Color(0xFF86EFAC)),
                            ),
                            child: Row(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                const Icon(Icons.check, size: 12, color: Color(0xFF15803D)),
                                const SizedBox(width: 2),
                                Text(
                                  "$mastered/$total",
                                  style: const TextStyle(
                                    fontSize: 11,
                                    fontWeight: FontWeight.bold,
                                    color: Color(0xFF15803D),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ] else if (mastered > 0) ...[
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                            decoration: BoxDecoration(
                              color: Colors.grey.shade100,
                              borderRadius: BorderRadius.circular(6),
                            ),
                            child: Text(
                              "$mastered/$total",
                              style: TextStyle(
                                fontSize: 11,
                                fontWeight: FontWeight.bold,
                                color: Colors.grey.shade700,
                              ),
                            ),
                          ),
                        ],
                        const SizedBox(width: 4),
                        Icon(
                          Icons.chevron_right,
                          color: isCompleted ? const Color(0xFF15803D) : Colors.grey.shade400,
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
  // STEP 3: BRANCH STEP (WITH ICONS & DESCRIPTIONS)
  // ----------------------------------------------------

  Widget _buildBranchStep() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Text(
          "STEP 3 OF 6",
          style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: Colors.indigo.shade600, letterSpacing: 1),
        ),
        const SizedBox(height: 2),
        const Text(
          "Branch of Mathematics",
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Colors.black87),
        ),
        Text(
          "Select Pure, Applied, or Random",
          style: TextStyle(fontSize: 12, color: Colors.grey.shade600),
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
                color: Colors.white,
                borderRadius: BorderRadius.circular(12),
                child: InkWell(
                  onTap: () => _onBranchTapped(name),
                  borderRadius: BorderRadius.circular(12),
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                    decoration: BoxDecoration(
                      border: Border.all(color: Colors.grey.shade300),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Row(
                      children: [
                        Container(
                          padding: const EdgeInsets.all(10),
                          decoration: BoxDecoration(
                            color: color.withAlpha(25),
                            borderRadius: BorderRadius.circular(10),
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
                                style: const TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
                              ),
                              const SizedBox(height: 2),
                              Text(
                                desc,
                                style: TextStyle(fontSize: 11, color: Colors.grey.shade600),
                              ),
                            ],
                          ),
                        ),
                        Icon(Icons.chevron_right, color: Colors.grey.shade400, size: 20),
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