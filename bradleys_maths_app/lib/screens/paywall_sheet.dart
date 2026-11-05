import 'package:flutter/material.dart';
import '../services/purchase_service.dart';

class PaywallSheet extends StatefulWidget {
  const PaywallSheet({super.key});

  static Future<void> show(BuildContext context) {
    return showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (_) => const PaywallSheet(),
    );
  }

  @override
  State<PaywallSheet> createState() => _PaywallSheetState();
}

class _PaywallSheetState extends State<PaywallSheet> {
  final PurchaseService _purchaseService = PurchaseService();

  @override
  Widget build(BuildContext context) {
    final product = _purchaseService.productDetails.value;
    final String priceText = product?.price ?? "£12.99"; // Fallback if store is offline during testing

    return Container(
      constraints: BoxConstraints(
        maxHeight: MediaQuery.of(context).size.height * 0.88,
      ),
      decoration: const BoxDecoration(
        color: Color(0xFF0F172A), // Deep Oxford Slate
        borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
        border: Border(
          top: BorderSide(color: Color(0xFF334155), width: 1.5),
        ),
      ),
      padding: const EdgeInsets.fromLTRB(20, 12, 20, 24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          // Drag Handle
          Center(
            child: Container(
              width: 40,
              height: 4,
              decoration: BoxDecoration(
                color: Colors.grey.shade600,
                borderRadius: BorderRadius.circular(2),
              ),
            ),
          ),
          const SizedBox(height: 16),

          // Header with Secret Founder's Unlock (Long press the emblem!)
          Center(
            child: GestureDetector(
              onLongPress: () async {
                await _purchaseService.debugSimulateUnlock();
                if (mounted) {
                  Navigator.pop(context);
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(
                      content: Text("Founder Master Key Activated: All 1,400 Questions Unlocked!"),
                      backgroundColor: Color(0xFF16A34A),
                    ),
                  );
                }
              },
              child: Container(
                width: 56,
                height: 56,
                decoration: BoxDecoration(
                  color: const Color(0xFF1E293B),
                  shape: BoxShape.circle,
                  border: Border.all(color: const Color(0xFFF59E0B), width: 2),
                ),
                child: const Center(
                  child: Icon(Icons.workspace_premium, color: Color(0xFFF59E0B), size: 30),
                ),
              ),
            ),
          ),
          const SizedBox(height: 12),

          const Text(
            "Unlock Bradley's Maths",
            style: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.bold,
              color: Colors.white,
            ),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 4),
          const Text(
            "The Complete AS & A-Level Mathematics Revision Suite",
            style: TextStyle(fontSize: 12, color: Color(0xFF94A3B8)),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 18),

          // Value Pillars
          Expanded(
            child: ListView(
              physics: const BouncingScrollPhysics(),
              children: [
                _buildFeatureRow(
                  icon: Icons.menu_book,
                  title: "1,400 Cambridge-Standard Questions",
                  subtitle: "Pure, Mechanics, Statistics & Comprehension across all 6 UK Exam Boards.",
                ),
                _buildFeatureRow(
                  icon: Icons.format_list_numbered,
                  title: "Textbook Accordion Model Answers",
                  subtitle: "Fully explained, step-by-step LaTeX working formatted for mobile screens.",
                ),
                _buildFeatureRow(
                  icon: Icons.auto_awesome,
                  title: "Smart Progression Families",
                  subtitle: "Unlimited access to Twin and Cousin questions for true concept mastery.",
                ),
                _buildFeatureRow(
                  icon: Icons.shield,
                  title: "The 24 Mathematical Honours Wall",
                  subtitle: "Conquer syllabus distinctions named after the titans of mathematics.",
                ),
                _buildFeatureRow(
                  icon: Icons.wifi_off,
                  title: "100% Offline Access",
                  subtitle: "Revise anywhere on bus, train, or in school with zero internet connection.",
                ),

                const SizedBox(height: 10),

                // Anti-Subscription Banner
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                  decoration: BoxDecoration(
                    color: const Color(0xFF1E293B),
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(color: const Color(0xFFF59E0B).withAlpha(100)),
                  ),
                  child: const Row(
                    children: [
                      Icon(Icons.verified, color: Color(0xFFF59E0B), size: 20),
                      SizedBox(width: 10),
                      Expanded(
                        child: Text(
                          "Single Lifetime Unlock • Zero Subscriptions • Zero Adverts",
                          style: TextStyle(
                            fontSize: 11,
                            fontWeight: FontWeight.bold,
                            color: Color(0xFFFDE68A),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),

          const SizedBox(height: 12),

          // Purchase Button
          ValueListenableBuilder<bool>(
            valueListenable: _purchaseService.isPurchasing,
            builder: (ctx, isBusy, _) {
              return SizedBox(
                height: 52,
                child: ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFFF59E0B), // Imperial Amber Gold
                    foregroundColor: Colors.black87,
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                  ),
                  onPressed: isBusy
                      ? null
                      : () async {
                          final success = await _purchaseService.buyLifetimeUnlock();
                          if (success && mounted) {
                            Navigator.pop(context);
                          }
                        },
                  child: isBusy
                      ? const CircularProgressIndicator(color: Colors.black87)
                      : Text(
                          "Unlock Lifetime Access — $priceText",
                          style: const TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
                        ),
                ),
              );
            },
          ),
          const SizedBox(height: 10),

          // Restore Purchases and Dismiss Buttons
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              TextButton(
                onPressed: () => Navigator.pop(context),
                child: const Text(
                  "Not Now",
                  style: TextStyle(color: Colors.grey, fontSize: 12),
                ),
              ),
              // Mandatory for Apple App Store Approval
              TextButton.icon(
                icon: const Icon(Icons.restore, size: 14, color: Color(0xFF94A3B8)),
                label: const Text(
                  "Restore Purchases",
                  style: TextStyle(color: Color(0xFF94A3B8), fontSize: 12, fontWeight: FontWeight.bold),
                ),
                onPressed: () async {
                  await _purchaseService.restorePurchases();
                  if (_purchaseService.isUnlocked.value && mounted) {
                    Navigator.pop(context);
                    ScaffoldMessenger.of(context).showSnackBar(
                      const SnackBar(
                        content: Text("Purchases successfully restored!"),
                        backgroundColor: Color(0xFF16A34A),
                      ),
                    );
                  }
                },
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildFeatureRow({
    required IconData icon,
    required String title,
    required String subtitle,
  }) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 12.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            padding: const EdgeInsets.all(8),
            decoration: BoxDecoration(
              color: const Color(0xFF1E293B),
              borderRadius: BorderRadius.circular(8),
              border: Border.all(color: const Color(0xFF334155)),
            ),
            child: Icon(icon, color: const Color(0xFFF59E0B), size: 18),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: const TextStyle(
                    fontSize: 13,
                    fontWeight: FontWeight.bold,
                    color: Colors.white,
                  ),
                ),
                const SizedBox(height: 2),
                Text(
                  subtitle,
                  style: const TextStyle(
                    fontSize: 11,
                    color: Color(0xFF94A3B8),
                    height: 1.3,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}