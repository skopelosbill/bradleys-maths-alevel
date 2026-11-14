with open('lib/screens/question_screen.dart', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f"Dumping _MathWidgetFactory (Lines 1040 to {len(lines)}):\n")
print(''.join(lines[1040:]))