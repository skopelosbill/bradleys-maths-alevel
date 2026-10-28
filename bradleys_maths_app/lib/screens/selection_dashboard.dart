import 'package:flutter/material.dart';
import '../models/filter_state.dart';
import '../database_helper.dart';
import 'question_screen.dart';

class SelectionDashboard extends StatefulWidget {
  const SelectionDashboard({super.key});

  @override
  State<SelectionDashboard> createState() => _SelectionDashboardState();
}

class _SelectionDashboardState extends State<SelectionDashboard> {
  final DatabaseHelper _dbHelper = DatabaseHelper();
  final FilterState _filter = FilterState();

  // Current Step: 0 = Board, 1 = Level, 2 = Branch, 3 = Major Area, 4 = Topic
  int _currentStep = 0;

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
  bool _isLoading = false;

  @override
  void initState() {
    super.initState();
    _loadTaxonomy();
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

    if (mounted) {
      setState(() {
        _majorAreas = ['Random', ...areas];
        _topics = ['Random', ...topics];
      });
    }
  }

  // ----------------------------------------------------
  // INSTANT TAP HANDLERS (STEP ADVANCEMENT)
  // ----------------------------------------------------

  void _onBoardTapped(String boardName) {
    setState(() {
      _filter.board = boardName == 'Random' ? null : boardName;
      _currentStep = 1; // Instant cut to Level
    });
    _loadTaxonomy();
  }

  void _onLevelTapped(String levelName) {
    setState(() {
      _filter.level = levelName == 'Random' ? null : levelName;
      _currentStep = 2; // Instant cut to Branch
    });
    _loadTaxonomy();
  }

  void _onBranchTapped(String branchName) {
    setState(() {
      _filter.setBranch(branchName == 'Random' ? null : branchName);
      _currentStep = 3; // Instant cut to Major Area
    });
    _loadTaxonomy();
  }

  void _onMajorAreaTapped(String areaName) async {
    setState(() {
      _filter.setMajorArea(areaName == 'Random' ? null : areaName);
      _currentStep = 4; // Instant cut to Topic
    });

    final topics = await _dbHelper.getTopics(
      board: _filter.board,
      level: _filter.level,
      branch: _filter.branch,
      majorArea: _filter.majorArea,
    );

    if (mounted) {
      setState(() {
        _topics = ['Random', ...topics];
      });
    }
  }

  void _onTopicTapped(String topicName) {
    _filter.topic = topicName == 'Random' ? null : topicName;
    _launchQuestion(); // Final step: Launch straight into question!
  }

  void _stepBack() {
    if (_currentStep > 0) {
      setState(() => _currentStep--);
    }
  }

  void _quickRandomAll() {
    _filter.board = null;
    _filter.level = null;
    _filter.setBranch(null);
    _filter.majorArea = null;
    _filter.topic = null;
    _launchQuestion();
  }

  Future<void> _launchQuestion() async {
    setState(() => _isLoading = true);

    try {
      final question = await _dbHelper.fetchQuestion(_filter);
      setState(() => _isLoading = false);

      if (question != null && mounted) {
        Navigator.of(context).push(
          MaterialPageRoute(
            builder: (_) => QuestionScreen(
              question: question,
              dbHelper: _dbHelper,
              filterState: _filter,
            ),
          ),
        );
      } else if (mounted) {
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
          // Quick Practice Shortcut
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
                padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 12.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
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
  // BREADCRUMB HEADER
  // ----------------------------------------------------

  Widget _buildBreadcrumbHeader() {
    List<String> crumbs = [];
    if (_currentStep > 0) crumbs.add(_filter.board ?? 'Any Board');
    if (_currentStep > 1) crumbs.add(_filter.level ?? 'Any Level');
    if (_currentStep > 2) crumbs.add(_filter.branch ?? 'Any Branch');
    if (_currentStep > 3) crumbs.add(_filter.majorArea ?? 'Any Area');

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
          stepNumber: "Step 1 of 5",
          title: "Choose Exam Board",
          subtitle: "Select your board or 'Random' for cross-board practice",
          items: _boards,
          onSelected: _onBoardTapped,
          activeItem: _filter.board,
        );
      case 1:
        return _buildStep(
          stepNumber: "Step 2 of 5",
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
          stepNumber: "Step 4 of 5",
          title: "Choose Major Area",
          subtitle: "Filtered by your chosen Branch",
          items: _majorAreas,
          onSelected: _onMajorAreaTapped,
          activeItem: _filter.majorArea,
        );
      case 4:
        return _buildStep(
          stepNumber: "Step 5 of 5",
          title: "Choose Topic",
          subtitle: "Tap a topic to launch your question immediately",
          items: _topics,
          onSelected: _onTopicTapped,
          activeItem: _filter.topic,
        );
      default:
        return const SizedBox.shrink();
    }
  }

  // ----------------------------------------------------
  // GENERIC STEP LIST BUILDER (LARGE THUMB-FRIENDLY CARDS)
  // ----------------------------------------------------

  Widget _buildStep({
    required String stepNumber,
    required String title,
    required String subtitle,
    required List<String> items,
    required Function(String) onSelected,
    String? activeItem,
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

              return Material(
                color: isRandom ? Colors.indigo.shade50 : Colors.white,
                borderRadius: BorderRadius.circular(12),
                child: InkWell(
                  onTap: () => onSelected(item),
                  borderRadius: BorderRadius.circular(12),
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
                    decoration: BoxDecoration(
                      border: Border.all(
                        color: isRandom
                            ? Colors.indigo.shade300
                            : (isCurrent ? Colors.indigo.shade600 : Colors.grey.shade300),
                        width: (isCurrent && !isRandom) ? 2.0 : 1.0,
                      ),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Row(
                      children: [
                        if (isRandom) ...[
                          Icon(Icons.shuffle, color: Colors.indigo.shade700, size: 20),
                          const SizedBox(width: 12),
                        ],
                        Expanded(
                          child: Text(
                            isRandom ? "Any / Random (All)" : item,
                            style: TextStyle(
                              fontSize: 14,
                              fontWeight: isRandom || isCurrent ? FontWeight.bold : FontWeight.w500,
                              color: isRandom ? Colors.indigo.shade900 : Colors.black87,
                            ),
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

  // ----------------------------------------------------
  // STEP 3: BRANCH STEP (WITH ICONS & DESCRIPTIONS)
  // ----------------------------------------------------

  Widget _buildBranchStep() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Text(
          "STEP 3 OF 5",
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