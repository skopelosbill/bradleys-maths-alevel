import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'screens/selection_dashboard.dart';
import 'theme_controller.dart';

void main() async {
  // Ensure Flutter engine bindings are initialized before locking orientation
  WidgetsFlutterBinding.ensureInitialized();

  // Formally lock app to Portrait Mode Only (360px mobile-first standard)
  await SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp,
    DeviceOrientation.portraitDown,
  ]);

  runApp(const BradleysMathsApp());
}

class BradleysMathsApp extends StatelessWidget {
  const BradleysMathsApp({super.key});

  @override
  Widget build(BuildContext context) {
    return ValueListenableBuilder<ThemeMode>(
      valueListenable: themeNotifier,
      builder: (_, ThemeMode currentMode, __) {
        return MaterialApp(
          debugShowCheckedModeBanner: false,
          title: "Bradley's Maths",
          themeMode: currentMode,
          // ------------------------------------
          // DAYTIME LIGHT THEME
          // ------------------------------------
          theme: ThemeData(
            colorScheme: ColorScheme.fromSeed(
              seedColor: Colors.indigo,
              brightness: Brightness.light,
            ),
            useMaterial3: true,
            scaffoldBackgroundColor: const Color(0xFFF8FAFC),
            appBarTheme: const AppBarTheme(
              backgroundColor: Colors.white,
              foregroundColor: Colors.black87,
              elevation: 0,
            ),
          ),
          // ------------------------------------
          // OXFORD SLATE DARK THEME
          // ------------------------------------
          darkTheme: ThemeData(
            colorScheme: ColorScheme.fromSeed(
              seedColor: const Color(0xFFF59E0B),
              brightness: Brightness.dark,
              surface: const Color(0xFF1E293B),
            ),
            useMaterial3: true,
            scaffoldBackgroundColor: const Color(0xFF0F172A), // Deep Oxford Slate
            appBarTheme: const AppBarTheme(
              backgroundColor: Color(0xFF0F172A),
              foregroundColor: Colors.white,
              elevation: 0,
            ),
          ),
          home: const SelectionDashboard(),
        );
      },
    );
  }
}