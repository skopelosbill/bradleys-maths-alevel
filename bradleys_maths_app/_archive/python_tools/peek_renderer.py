with open('lib/screens/question_screen.dart', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    if '_renderMixedContent' in line or '_MathWidgetFactory' in line:
        start = max(0, idx - 2)
        end = min(len(lines), idx + 35)
        print(f"--- Lines {start} to {end} ---")
        print("".join(lines[start:end]))
        print("\n" + "=" * 50 + "\n")