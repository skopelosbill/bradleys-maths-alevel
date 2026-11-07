import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
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

  Future<void> _showFounderKeyDialog(BuildContext context) async {
    final controller = TextEditingController();
    String? errorMsg;

    await showDialog(
      context: context,
      builder: (ctx) {
        return StatefulBuilder(
          builder: (context, setDialogState) {
            return AlertDialog(
              backgroundColor: const Color(0xFF1E293B),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
              title: const Row(
                children: [
                  Icon(Icons.key, color: Color(0xFFF59E0B), size: 22),
                  SizedBox(width: 8),
                  Text(
                    "Founder & Master Access",
                    style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  ),
                ],
              ),
              content: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  const Text(
                    "Enter confidential master passphrase to unlock lifetime access:",
                    style: TextStyle(fontSize: 12, color: Color(0xFFCBD5E1)),
                  ),
                  const SizedBox(height: 12),
                  TextField(
                    controller: controller,
                    autofocus: true,
                    obscureText: true,
                    style: const TextStyle(color: Colors.white),
                    decoration: InputDecoration(
                      hintText: "Enter master key...",
                      hintStyle: TextStyle(color: Colors.grey.shade500, fontSize: 13),
                      errorText: errorMsg,
                      filled: true,
                      fillColor: const Color(0xFF0F172A),
                      contentPadding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(10),
                        borderSide: const BorderSide(color: Color(0xFF334155)),
                      ),
                      enabledBorder: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(10),
                        borderSide: const BorderSide(color: Color(0xFF334155)),
                      ),
                    ),
                    onSubmitted: (_) async {
                      final ok = await _purchaseService.verifyAndUnlockWithMasterKey(controller.text);
                      if (ok) {
                        Navigator.of(ctx).pop();
                        HapticFeedback.mediumImpact();
                        if (mounted) {
                          Navigator.pop(context); // Close Paywall
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
                  child: const Text(
                    "Cancel",
                    style: TextStyle(color: Colors.grey, fontWeight: FontWeight.bold),
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
                        Navigator.pop(context); // Close Paywall
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

  @override
  Widget build(BuildContext context) {
    final product = _purchaseService.productDetails.value;
    final String priceText = product?.price ?? "£12.99";

    return Container(
      constraints: BoxConstraints(
        maxHeight: MediaQuery.of(context).size.height * 0.88,
      ),
      decoration: const BoxDecoration(
        color: Color(0xFF0F172A),
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

          // Header Emblem (Long press opens Founder key)
          Center(
            child: GestureDetector(
              onLongPress: () => _showFounderKeyDialog(context),
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

          // Live Purchase Error feedback (if any)
          ValueListenableBuilder<String?>(
            valueListenable: _purchaseService.purchaseError,
            builder: (ctx, err, _) {
              if (err == null) return const SizedBox.shrink();
              return Padding(
                padding: const EdgeInsets.only(bottom: 8.0),
                child: Text(
                  err,
                  style: const TextStyle(color: Color(0xFFF87171), fontSize: 11),
                  textAlign: TextAlign.center,
                ),
              );
            },
          ),

          // Purchase Button
          ValueListenableBuilder<bool>(
            valueListenable: _purchaseService.isPurchasing,
            builder: (ctx, isBusy, _) {
              return SizedBox(
                height: 52,
                child: ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFFF59E0B),
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
                      ? const SizedBox(
                          width: 22,
                          height: 22,
                          child: CircularProgressIndicator(color: Colors.black87, strokeWidth: 2.5),
                        )
                      : Text(
                          "Unlock Lifetime Access — $priceText",
                          style: const TextStyle(fontSize: 15, fontWeight: FontWeight.bold),
                        ),
                ),
              );
            },
          ),
          const SizedBox(height: 10),

          // Footer: Not Now, Enter Access Key, Restore Purchases
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
              // Founder / Access Key Button
              TextButton.icon(
                icon: const Icon(Icons.key, size: 14, color: Color(0xFFF59E0B)),
                label: const Text(
                  "Access Key",
                  style: TextStyle(color: Color(0xFFF59E0B), fontSize: 12, fontWeight: FontWeight.bold),
                ),
                onPressed: () => _showFounderKeyDialog(context),
              ),
              // Restore Purchases
              TextButton.icon(
                icon: const Icon(Icons.restore, size: 14, color: Color(0xFF94A3B8)),
                label: const Text(
                  "Restore",
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