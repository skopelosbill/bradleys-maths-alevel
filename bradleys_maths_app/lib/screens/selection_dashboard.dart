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
    {'name': 'Random', 'icon': Icons.shuffle, 'color': Colors.deepPurple},
    {'name': 'Pure', 'icon': Icons.functions, 'color': Colors.blue},
    {'name': 'Mechanics', 'icon': Icons.speed, 'color': Colors.orange},
    {'name': 'Statistics', 'icon': Icons.bar_chart, 'color': Colors.teal},
    {'name': 'Comprehension', 'icon': Icons.menu_book, 'color': Colors.indigo},
  ];

  List<String> _majorAreas = ['Random'];
  List<String> _topics = ['Random'];
  bool _isLoading = false;

  @override
  void initState() {
    super.initState();
    _loadTaxonomy();
  }

  // Reloads both Major Areas and Topics based on ALL current filters
  Future<void> _loadTaxonomy() async {
    final areas = await _dbHelper.getMajorAreas(
      board: _filter.board,
      level: _filter.level,
      branch: _filter.branch,
    );

    // Safeguard: If the currently selected Major Area is not in the new valid list, reset it
    if (_filter.majorArea != null && !areas.contains(_filter.majorArea)) {
      _filter.majorArea = null;
    }

    final topics = await _dbHelper.getTopics(
      board: _filter.board,
      level: _filter.level,
      branch: _filter.branch,
      majorArea: _filter.majorArea,
    );

    // Safeguard: If the currently selected Topic is not in the new valid list, reset it
    if (_filter.topic != null && !topics.contains(_filter.topic)) {
      _filter.topic = null;
    }

    setState(() {
      _majorAreas = ['Random', ...areas];
      _topics = ['Random', ...topics];
    });
  }

  void _onBoardSelected(String boardName) async {
    setState(() {
      _filter.board = boardName == 'Random' ? null : boardName;
    });
    await _loadTaxonomy();
  }

  void _onLevelSelected(String levelName) async {
    setState(() {
      _filter.level = levelName == 'Random' ? null : levelName;
    });
    await _loadTaxonomy();
  }

  void _onBranchSelected(String branchName) async {
    setState(() {
      _filter.setBranch(branchName == 'Random' ? null : branchName);
    });
    await _loadTaxonomy();
  }

  void _onMajorAreaSelected(String? areaName) async {
    setState(() {
      _filter.setMajorArea(areaName == 'Random' ? null : areaName);
    });

    final topics = await _dbHelper.getTopics(
      board: _filter.board,
      level: _filter.level,
      branch: _filter.branch,
      majorArea: _filter.majorArea,
    );

    setState(() {
      _topics = ['Random', ...topics];
      if (_filter.topic != null && !topics.contains(_filter.topic)) {
        _filter.topic = null;
      }
    });
  }

  void _onTopicSelected(String? topicName) {
    setState(() {
      _filter.topic = topicName == 'Random' ? null : topicName;
    });
  }

  Future<void> _startQuestionFlow() async {
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

  @override
  Widget build(BuildContext context) {
    final activeBranch = _filter.branch ?? 'Random';

    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "Bradley's Maths",
          style: TextStyle(fontWeight: FontWeight.bold),
        ),
        elevation: 0,
        centerTitle: true,
      ),
      body: Center(
        child: Container(
          constraints: const BoxConstraints(maxWidth: 420), // 360-420px mobile viewport
          child: ListView(
            padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 12.0),
            children: [
              // ------------------------------------
              // STEP 2: EXAM BOARD SELECTOR
              // ------------------------------------
              _buildSectionHeader("Step 2: Choose Board"),
              Wrap(
                alignment: WrapAlignment.center,
                spacing: 8.0,
                runSpacing: 4.0,
                children: _boards.map((b) {
                  final isSelected = (_filter.board ?? 'Random') == b;
                  return ChoiceChip(
                    label: Text(b),
                    selected: isSelected,
                    onSelected: (selected) {
                      if (selected) _onBoardSelected(b);
                    },
                  );
                }).toList(),
              ),

              const SizedBox(height: 16),

              // ------------------------------------
              // STEP 3: LEVEL SELECTOR
              // ------------------------------------
              _buildSectionHeader("Step 3: Choose Level"),
              Row(
                children: _levels.map((lvl) {
                  final isSelected = (_filter.level ?? 'Random') == lvl;
                  return Expanded(
                    child: Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 4.0),
                      child: ChoiceChip(
                        label: Center(child: Text(lvl)),
                        selected: isSelected,
                        onSelected: (selected) {
                          if (selected) _onLevelSelected(lvl);
                        },
                      ),
                    ),
                  );
                }).toList(),
              ),

              const SizedBox(height: 16),

              // ------------------------------------
              // STEP 4: BRANCH SELECTOR
              // ------------------------------------
              _buildSectionHeader(
                "Step 4: Branch of Mathematics",
                subtext: "Rule: 'Random' automatically excludes Comprehension",
              ),
              Wrap(
                alignment: WrapAlignment.center,
                spacing: 8.0,
                runSpacing: 8.0,
                children: _branches.map((br) {
                  final name = br['name'] as String;
                  final isSelected = activeBranch == name;
                  final color = br['color'] as Color;

                  return InkWell(
                    onTap: () => _onBranchSelected(name),
                    borderRadius: BorderRadius.circular(12),
                    child: Container(
                      width: 96,
                      padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 6),
                      decoration: BoxDecoration(
                        color: isSelected ? color.withAlpha(46) : Colors.grey.shade100,
                        border: Border.all(
                          color: isSelected ? color : Colors.grey.shade300,
                          width: isSelected ? 2.0 : 1.0,
                        ),
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Icon(br['icon'] as IconData, color: isSelected ? color : Colors.grey.shade700, size: 24),
                          const SizedBox(height: 6),
                          Text(
                            name,
                            style: TextStyle(
                              fontSize: 11,
                              fontWeight: isSelected ? FontWeight.bold : FontWeight.w500,
                              color: isSelected ? color : Colors.black87,
                            ),
                            textAlign: TextAlign.center,
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                          ),
                        ],
                      ),
                    ),
                  );
                }).toList(),
              ),

              const SizedBox(height: 20),

              // ------------------------------------
              // STEP 5: DYNAMIC MAJOR AREA SELECTOR
              // ------------------------------------
              _buildSectionHeader("Step 5: Major Area"),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 4),
                decoration: BoxDecoration(
                  border: Border.all(color: Colors.grey.shade400),
                  borderRadius: BorderRadius.circular(10),
                ),
                child: DropdownButtonHideUnderline(
                  child: DropdownButton<String>(
                    value: _filter.majorArea ?? 'Random',
                    isExpanded: true,
                    items: _majorAreas.map((area) {
                      return DropdownMenuItem<String>(
                        value: area,
                        child: Text(area, overflow: TextOverflow.ellipsis),
                      );
                    }).toList(),
                    onChanged: _onMajorAreaSelected,
                  ),
                ),
              ),

              const SizedBox(height: 16),

              // ------------------------------------
              // STEP 6: DYNAMIC TOPIC SELECTOR
              // ------------------------------------
              _buildSectionHeader("Step 6: Topic"),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 4),
                decoration: BoxDecoration(
                  border: Border.all(color: Colors.grey.shade400),
                  borderRadius: BorderRadius.circular(10),
                ),
                child: DropdownButtonHideUnderline(
                  child: DropdownButton<String>(
                    value: _filter.topic ?? 'Random',
                    isExpanded: true,
                    items: _topics.map((top) {
                      return DropdownMenuItem<String>(
                        value: top,
                        child: Text(top, overflow: TextOverflow.ellipsis),
                      );
                    }).toList(),
                    onChanged: _onTopicSelected,
                  ),
                ),
              ),

              const SizedBox(height: 28),

              // ------------------------------------
              // LAUNCH ACTION (STEP 7 GATE)
              // ------------------------------------
              SizedBox(
                height: 52,
                child: ElevatedButton.icon(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.indigo.shade700,
                    foregroundColor: Colors.white,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                  ),
                  icon: _isLoading
                      ? const SizedBox(
                          width: 20,
                          height: 20,
                          child: CircularProgressIndicator(color: Colors.white, strokeWidth: 2),
                        )
                      : const Icon(Icons.edit_note, size: 24),
                  label: Text(
                    _isLoading ? "Loading..." : "Attempt Question (Paper First)",
                    style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                  ),
                  onPressed: _isLoading ? null : _startQuestionFlow,
                ),
              ),

              const SizedBox(height: 24),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildSectionHeader(String title, {String? subtext}) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 6.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            title,
            style: const TextStyle(fontSize: 14, fontWeight: FontWeight.bold, color: Colors.black87),
          ),
          if (subtext != null)
            Text(
              subtext,
              style: TextStyle(fontSize: 11, color: Colors.grey.shade600, fontStyle: FontStyle.italic),
            ),
        ],
      ),
    );
  }
}