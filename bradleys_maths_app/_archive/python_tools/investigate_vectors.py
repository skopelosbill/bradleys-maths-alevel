import sqlite3
import re

# 1. Check how other pmatrix questions are formatted in the DB
conn = sqlite3.connect('assets/bradleys_maths.db')
cur = conn.cursor()

print("=" * 70)
print("SAMPLES OF PMATRIX IN THE DATABASE:")
print("=" * 70)
cur.execute("SELECT id, question_text FROM questions WHERE question_text LIKE '%pmatrix%' LIMIT 3")
for row in cur.fetchall():
    print(f"\nQuestion {row[0]}:")
    print(row[1])

cur.execute("SELECT question_id, step_text FROM question_steps WHERE step_text LIKE '%pmatrix%' LIMIT 3")
for row in cur.fetchall():
    print(f"\nStep for {row[0]}:")
    print(row[1])
conn.close()

# 2. Check Flutter math rendering logic in question_screen.dart
print("\n" + "=" * 70)
print("FLUTTER MATH RENDERING LOGIC:")
print("=" * 70)
try:
    with open('lib/screens/question_screen.dart', 'r', encoding='utf-8') as f:
        code = f.read()
    # Find math parsing or flutter_math / tex references
    matches = re.findall(r'(class\s+_?Math.*|\bMath\.tex\b.*|\bbuildMath.*|\b_render.*)', code)
    for m in matches[:10]:
        print(m)
except Exception as e:
    print(f"Could not read question_screen.dart: {e}")