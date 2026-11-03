import 'dart:ui';
import 'package:flutter/material.dart';
import '../models/honour_item.dart';
import '../database_helper.dart';

class HonoursScreen extends StatefulWidget {
  final DatabaseHelper dbHelper;

  const HonoursScreen({super.key, required this.dbHelper});

  @override
  State<HonoursScreen> createState() => _HonoursScreenState();
}

class _HonoursScreenState extends State<HonoursScreen> {
  final ScrollController _scrollController = ScrollController();
  List<HonourItem> _honours = [];
  bool _isLoading = true;
  String _selectedCategory = 'All';

  final List<String> _categories = ['All', 'Pure', 'Mechanics', 'Statistics', 'Elite'];

  @override
  void initState() {
    super.initState();
    _loadHonours();
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  Future<void> _loadHonours() async {
    final list = await widget.dbHelper.getHonoursProgress();
    if (mounted) {
      setState(() {
        _honours = list;
        _isLoading = false;
      });
    }
  }

  List<HonourItem> get _filteredHonours {
    if (_selectedCategory == 'All') return _honours;
    return _honours.where((h) => h.category == _selectedCategory).toList();
  }

  int get _unlockedCount => _honours.where((h) => h.isUnlocked).length;

  void _showHonourDetails(HonourItem item) {
    showModalBottomSheet(
      context: context,
      backgroundColor: Colors.transparent,
      isScrollControlled: true,
      builder: (ctx) => _HonourDetailSheet(item: item),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF0F172A), // Deep Oxford Slate
      appBar: AppBar(
        backgroundColor: const Color(0xFF0F172A),
        foregroundColor: Colors.white,
        elevation: 0,
        centerTitle: true,
        title: const Text(
          "Mathematical Honours",
          style: TextStyle(fontWeight: FontWeight.bold, fontSize: 17, letterSpacing: 0.5),
        ),
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator(color: Color(0xFFF59E0B)))
          : Center(
              child: Container(
                constraints: const BoxConstraints(maxWidth: 420), // 360-420px mobile viewport
                padding: const EdgeInsets.symmetric(horizontal: 16.0),
                child: Column(
                  children: [
                    const SizedBox(height: 8),
                    // Progress Banner
                    _buildProgressHeader(),
                    const SizedBox(height: 12),

                    // Category Filter Pills
                    _buildCategoryFilter(),
                    const SizedBox(height: 16),

                    // Honeycomb Tile Wall with Visible Scrollbar
                    Expanded(
                      child: ScrollConfiguration(
                        behavior: ScrollConfiguration.of(context).copyWith(
                          dragDevices: {
                            PointerDeviceKind.touch,
                            PointerDeviceKind.mouse,
                            PointerDeviceKind.trackpad,
                          },
                        ),
                        child: RawScrollbar(
                          controller: _scrollController,
                          thumbVisibility: true,
                          thickness: 6,
                          radius: const Radius.circular(3),
                          thumbColor: const Color(0xFFF59E0B).withAlpha(180), // Visible Amber Gold
                          trackVisibility: true,
                          trackColor: const Color(0xFF1E293B),
                          trackRadius: const Radius.circular(3),
                          child: SingleChildScrollView(
                            controller: _scrollController,
                            physics: const AlwaysScrollableScrollPhysics(
                              parent: BouncingScrollPhysics(),
                            ),
                            padding: const EdgeInsets.only(right: 12, bottom: 32),
                            child: Center(
                              child: Wrap(
                                spacing: 12,
                                runSpacing: 14,
                                alignment: WrapAlignment.center,
                                children: _filteredHonours.map((item) {
                                  return HexagonTile(
                                    item: item,
                                    onTap: () => _showHonourDetails(item),
                                  );
                                }).toList(),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
    );
  }

  Widget _buildProgressHeader() {
    final double percent = _honours.isEmpty ? 0 : (_unlockedCount / _honours.length);

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
      decoration: BoxDecoration(
        color: const Color(0xFF1E293B),
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: const Color(0xFF334155)),
      ),
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Row(
                children: [
                  Icon(Icons.workspace_premium, color: Color(0xFFF59E0B), size: 20),
                  SizedBox(width: 8),
                  Text(
                    "Distinctions Conquered",
                    style: TextStyle(color: Colors.white, fontSize: 13, fontWeight: FontWeight.bold),
                  ),
                ],
              ),
              Text(
                "$_unlockedCount / ${_honours.length}",
                style: const TextStyle(
                  color: Color(0xFFF59E0B),
                  fontSize: 14,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ],
          ),
          const SizedBox(height: 8),
          ClipRRect(
            borderRadius: BorderRadius.circular(6),
            child: LinearProgressIndicator(
              value: percent,
              minHeight: 6,
              backgroundColor: const Color(0xFF334155),
              valueColor: const AlwaysStoppedAnimation<Color>(Color(0xFFF59E0B)),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildCategoryFilter() {
    return SizedBox(
      height: 32,
      child: ListView.separated(
        scrollDirection: Axis.horizontal,
        itemCount: _categories.length,
        separatorBuilder: (_, __) => const SizedBox(width: 8),
        itemBuilder: (ctx, i) {
          final cat = _categories[i];
          final isSelected = cat == _selectedCategory;

          return GestureDetector(
            onTap: () {
              setState(() => _selectedCategory = cat);
              if (_scrollController.hasClients) {
                _scrollController.jumpTo(0);
              }
            },
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 6),
              decoration: BoxDecoration(
                color: isSelected ? const Color(0xFFF59E0B) : const Color(0xFF1E293B),
                borderRadius: BorderRadius.circular(20),
                border: Border.all(
                  color: isSelected ? const Color(0xFFF59E0B) : const Color(0xFF334155),
                ),
              ),
              child: Center(
                child: Text(
                  cat,
                  style: TextStyle(
                    fontSize: 11,
                    fontWeight: isSelected ? FontWeight.bold : FontWeight.w500,
                    color: isSelected ? Colors.black87 : Colors.white70,
                  ),
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}

// ==========================================
// HEXAGON TILE (328px RESPONSIVE)
// ==========================================

class HexagonTile extends StatelessWidget {
  final HonourItem item;
  final VoidCallback onTap;

  const HexagonTile({super.key, required this.item, required this.onTap});

  @override
  Widget build(BuildContext context) {
    final bool unlocked = item.isUnlocked;

    // Academic Tiers Accent
    Color accentColor;
    if (!unlocked) {
      accentColor = const Color(0xFF475569);
    } else {
      switch (item.category) {
        case 'Pure':
          accentColor = const Color(0xFF38BDF8); // Sapphire Sky
          break;
        case 'Mechanics':
          accentColor = const Color(0xFFFB923C); // Amber Orange
          break;
        case 'Statistics':
          accentColor = const Color(0xFF34D399); // Emerald Mint
          break;
        case 'Elite':
        default:
          accentColor = const Color(0xFFF59E0B); // Imperial Gold
          break;
      }
    }

    return GestureDetector(
      onTap: onTap,
      child: SizedBox(
        width: 92,
        height: 104,
        child: Stack(
          alignment: Alignment.center,
          children: [
            // Hexagon Background
            ClipPath(
              clipper: _HexagonClipper(),
              child: Container(
                color: unlocked ? const Color(0xFF1E293B) : const Color(0xFF0F172A),
                child: Container(
                  decoration: BoxDecoration(
                    border: Border.all(
                      color: unlocked ? accentColor : const Color(0xFF334155),
                      width: unlocked ? 2.0 : 1.0,
                    ),
                  ),
                ),
              ),
            ),

            // Content inside Hexagon
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 8),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  if (!unlocked)
                    const Icon(Icons.lock_outline, size: 14, color: Color(0xFF64748B))
                  else
                    Icon(Icons.workspace_premium, size: 14, color: accentColor),
                  const SizedBox(height: 2),
                  FittedBox(
                    fit: BoxFit.scaleDown,
                    child: Text(
                      item.glyph,
                      style: TextStyle(
                        fontSize: 13,
                        fontWeight: FontWeight.bold,
                        color: unlocked ? Colors.white : const Color(0xFF64748B),
                      ),
                      maxLines: 1,
                    ),
                  ),
                  const SizedBox(height: 2),
                  Text(
                    item.title.replaceFirst("The ", ""),
                    style: TextStyle(
                      fontSize: 8,
                      fontWeight: FontWeight.w600,
                      color: unlocked ? accentColor : const Color(0xFF64748B),
                    ),
                    textAlign: TextAlign.center,
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

// Regular Pointy-Topped Hexagon Clipper
class _HexagonClipper extends CustomClipper<Path> {
  @override
  Path getClip(Size size) {
    final w = size.width;
    final h = size.height;
    final path = Path();
    path.moveTo(w * 0.5, 0);
    path.lineTo(w, h * 0.25);
    path.lineTo(w, h * 0.75);
    path.lineTo(w * 0.5, h);
    path.lineTo(0, h * 0.75);
    path.lineTo(0, h * 0.25);
    path.close();
    return path;
  }

  @override
  bool shouldReclip(covariant CustomClipper<Path> oldClipper) => false;
}

// ==========================================
// BOTTOM SHEET (HEAD TEACHER'S EYE MODAL)
// ==========================================

class _HonourDetailSheet extends StatelessWidget {
  final HonourItem item;

  const _HonourDetailSheet({required this.item});

  @override
  Widget build(BuildContext context) {
    final bool unlocked = item.isUnlocked;

    Color accentColor;
    switch (item.category) {
      case 'Pure':
        accentColor = const Color(0xFF38BDF8);
        break;
      case 'Mechanics':
        accentColor = const Color(0xFFFB923C);
        break;
      case 'Statistics':
        accentColor = const Color(0xFF34D399);
        break;
      case 'Elite':
      default:
        accentColor = const Color(0xFFF59E0B);
        break;
    }

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 24),
      decoration: const BoxDecoration(
        color: Color(0xFF1E293B),
        borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          // Drag Handle
          Center(
            child: Container(
              width: 36,
              height: 4,
              decoration: BoxDecoration(
                color: Colors.grey.shade600,
                borderRadius: BorderRadius.circular(2),
              ),
            ),
          ),
          const SizedBox(height: 18),

          // Header Row
          Row(
            children: [
              Container(
                width: 52,
                height: 52,
                decoration: BoxDecoration(
                  color: unlocked ? accentColor.withAlpha(35) : const Color(0xFF0F172A),
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(
                    color: unlocked ? accentColor : const Color(0xFF334155),
                  ),
                ),
                child: Center(
                  child: FittedBox(
                    fit: BoxFit.scaleDown,
                    child: Padding(
                      padding: const EdgeInsets.all(4.0),
                      child: Text(
                        item.glyph,
                        style: TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                          color: unlocked ? accentColor : const Color(0xFF64748B),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              const SizedBox(width: 14),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      item.title,
                      style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.white),
                    ),
                    const SizedBox(height: 2),
                    Text(
                      item.subtitle,
                      style: TextStyle(fontSize: 12, color: accentColor, fontWeight: FontWeight.w600),
                    ),
                  ],
                ),
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                decoration: BoxDecoration(
                  color: unlocked ? const Color(0xFF16A34A).withAlpha(40) : const Color(0xFF334155),
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(
                    color: unlocked ? const Color(0xFF22C55E) : const Color(0xFF475569),
                  ),
                ),
                child: Text(
                  unlocked ? "CONQUERED" : "LOCKED",
                  style: TextStyle(
                    fontSize: 10,
                    fontWeight: FontWeight.bold,
                    color: unlocked ? const Color(0xFF4ADE80) : const Color(0xFF94A3B8),
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 16),

          // Progress Bar
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: const Color(0xFF0F172A),
              borderRadius: BorderRadius.circular(12),
              border: Border.all(color: const Color(0xFF334155)),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Expanded(
                      child: Text(
                        item.description,
                        style: const TextStyle(fontSize: 12, color: Colors.white70),
                      ),
                    ),
                    const SizedBox(width: 8),
                    Text(
                      "${item.currentCount} / ${item.targetCount}",
                      style: TextStyle(
                        fontSize: 12,
                        fontWeight: FontWeight.bold,
                        color: unlocked ? const Color(0xFF4ADE80) : Colors.white,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 8),
                ClipRRect(
                  borderRadius: BorderRadius.circular(4),
                  child: LinearProgressIndicator(
                    value: item.progressPercentage,
                    minHeight: 6,
                    backgroundColor: const Color(0xFF1E293B),
                    valueColor: AlwaysStoppedAnimation<Color>(
                      unlocked ? const Color(0xFF22C55E) : accentColor,
                    ),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 14),

          // The Head Teacher's Eye
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: const Color(0xFF2E1065).withAlpha(60), // Deep Academic Purple
              borderRadius: BorderRadius.circular(12),
              border: Border.all(color: const Color(0xFF8B5CF6).withAlpha(80)),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Row(
                  children: [
                    Icon(Icons.visibility, size: 14, color: Color(0xFFA78BFA)),
                    SizedBox(width: 6),
                    Text(
                      "The Head Teacher's Eye",
                      style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: Color(0xFFA78BFA)),
                    ),
                  ],
                ),
                const SizedBox(height: 6),
                Text(
                  item.headTeachersEye,
                  style: const TextStyle(fontSize: 12, height: 1.4, color: Color(0xFFE2E8F0)),
                ),
              ],
            ),
          ),
          const SizedBox(height: 16),

          // Dismiss Button
          ElevatedButton(
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xFF334155),
              foregroundColor: Colors.white,
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
              padding: const EdgeInsets.symmetric(vertical: 12),
            ),
            onPressed: () => Navigator.of(context).pop(),
            child: const Text("Close", style: TextStyle(fontWeight: FontWeight.bold)),
          ),
        ],
      ),
    );
  }
}