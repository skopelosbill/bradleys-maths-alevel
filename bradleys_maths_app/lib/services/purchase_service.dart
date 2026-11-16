import 'dart:async';
import 'package:flutter/foundation.dart';
import 'package:in_app_purchase/in_app_purchase.dart';
import 'package:shared_preferences/shared_preferences.dart';

class PurchaseService {
  // Singleton pattern so the entire app shares one purchase state
  static final PurchaseService _instance = PurchaseService._internal();
  factory PurchaseService() => _instance;
  PurchaseService._internal();

  // The official Product ID matching App Store Connect and Google Play Console
  static const String productLifetimeUnlock = 'bradleys_maths_lifetime_unlock';
  static const int freeTrialLimit = 25;
  static const String _prefKeyUnlocked = 'is_lifetime_unlocked';

  final InAppPurchase _iap = InAppPurchase.instance;
  StreamSubscription<List<PurchaseDetails>>? _subscription;

  // Reactive state notifiers for the UI
  final ValueNotifier<bool> isUnlocked = ValueNotifier<bool>(false);
  final ValueNotifier<ProductDetails?> productDetails = ValueNotifier<ProductDetails?>(null);
  final ValueNotifier<bool> isPurchasing = ValueNotifier<bool>(false);
  final ValueNotifier<String?> purchaseError = ValueNotifier<String?>(null);

  /// Initialise the purchase service on app startup
  Future<void> initialize() async {
    // 1. Load locally cached unlock status immediately for instant offline access
    final prefs = await SharedPreferences.getInstance();
    isUnlocked.value = prefs.getBool(_prefKeyUnlocked) ?? false;
    debugPrint("[PURCHASE] Initialised. Lifetime Unlocked = ${isUnlocked.value}");

    // 2. Listen to transaction updates from Apple & Google
    _subscription = _iap.purchaseStream.listen(
      _handlePurchaseUpdates,
      onDone: () => _subscription?.cancel(),
      onError: (error) {
        debugPrint("[PURCHASE STREAM ERROR] $error");
        isPurchasing.value = false;
      },
    );

    // 3. Query the store for the live price and product details
    await loadProductDetails();
  }

  /// Query the store for live pricing (e.g. £13.99)
  Future<void> loadProductDetails() async {
    try {
      final bool available = await _iap.isAvailable();
      if (!available) {
        debugPrint("[PURCHASE] Store not available on this platform/device.");
        return;
      }

      const Set<String> ids = {productLifetimeUnlock};
      final ProductDetailsResponse response = await _iap.queryProductDetails(ids);

      if (response.notFoundIDs.isNotEmpty) {
        debugPrint("[PURCHASE WARNING] Product ID not found in store: ${response.notFoundIDs}");
      }

      if (response.productDetails.isNotEmpty) {
        productDetails.value = response.productDetails.first;
        debugPrint("[PURCHASE] Found product: ${productDetails.value?.title} (${productDetails.value?.price})");
      }
    } catch (e) {
      debugPrint("[PURCHASE QUERY ERROR] $e");
    }
  }

  /// Trigger the Apple / Google native purchase flow
  Future<bool> buyLifetimeUnlock() async {
    final product = productDetails.value;
    purchaseError.value = null;

    if (product == null) {
      await loadProductDetails();
      if (productDetails.value == null) {
        purchaseError.value = "Store connection unavailable. Please check your internet connection.";
        return false;
      }
    }

    try {
      isPurchasing.value = true;
      final PurchaseParam purchaseParam = PurchaseParam(productDetails: productDetails.value!);
      final bool success = await _iap.buyNonConsumable(purchaseParam: purchaseParam);
      if (!success) {
        isPurchasing.value = false;
      }
      return success;
    } catch (e) {
      debugPrint("[PURCHASE INITIATION ERROR] $e");
      isPurchasing.value = false;
      purchaseError.value = "Could not start purchase: $e";
      return false;
    }
  }

  /// Mandatory Apple/Google requirement: Restore prior purchases (with safety timeout)
  Future<void> restorePurchases() async {
    try {
      isPurchasing.value = true;
      purchaseError.value = null;
      debugPrint("[PURCHASE] Restoring purchases...");

      final bool available = await _iap.isAvailable();
      if (!available) {
        purchaseError.value = "Store connection unavailable. Please check your internet connection.";
        return;
      }

      await _iap.restorePurchases().timeout(const Duration(seconds: 4), onTimeout: () {
        debugPrint("[PURCHASE] Store check completed.");
      });

      await Future.delayed(const Duration(milliseconds: 1500));
      if (!isUnlocked.value) {
        purchaseError.value = "No prior purchase found for this store account.";
      }
    } catch (e) {
      debugPrint("[PURCHASE RESTORE ERROR] $e");
      purchaseError.value = "Store communication error: $e";
    } finally {
      isPurchasing.value = false;
    }
  }

  /// Handle incoming transactions from Apple App Store / Google Play
  Future<void> _handlePurchaseUpdates(List<PurchaseDetails> purchaseDetailsList) async {
    for (var purchase in purchaseDetailsList) {
      if (purchase.productID != productLifetimeUnlock) continue;

      switch (purchase.status) {
        case PurchaseStatus.pending:
          isPurchasing.value = true;
          debugPrint("[PURCHASE] Transaction pending...");
          break;

        case PurchaseStatus.purchased:
        case PurchaseStatus.restored:
          debugPrint("[PURCHASE SUCCESS] Status: ${purchase.status}");
          await _markAsUnlocked();
          isPurchasing.value = false;
          purchaseError.value = null;
          break;

        case PurchaseStatus.error:
          debugPrint("[PURCHASE ERROR] ${purchase.error?.message}");
          isPurchasing.value = false;
          purchaseError.value = purchase.error?.message ?? "Transaction failed.";
          break;

        case PurchaseStatus.canceled:
          debugPrint("[PURCHASE CANCELLED]");
          isPurchasing.value = false;
          break;
      }

      if (purchase.pendingCompletePurchase) {
        await _iap.completePurchase(purchase);
      }
    }
  }

  /// Permanently record the unlock in local offline storage
  Future<void> _markAsUnlocked() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setBool(_prefKeyUnlocked, true);
    isUnlocked.value = true;
    debugPrint("[PURCHASE] Lifetime Unlock successfully saved to device storage!");
  }

  void dispose() {
    _subscription?.cancel();
  }
}