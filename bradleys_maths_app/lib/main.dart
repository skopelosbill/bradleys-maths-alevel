import 'package:flutter/material.dart';
import 'screens/selection_dashboard.dart';

void main() {
  runApp(const BradleysMathsApp());
}

class BradleysMathsApp extends StatelessWidget {
  const BradleysMathsApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Bradley's Maths",
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: Colors.indigo,
          brightness: Brightness.light,
        ),
        useMaterial3: true,
        scaffoldBackgroundColor: const Color(0xFFF8F9FD),
        appBarTheme: const AppBarTheme(
          backgroundColor: Colors.white,
          foregroundColor: Colors.black87,
          elevation: 0,
        ),
      ),
      home: const SelectionDashboard(),
    );
  }
}