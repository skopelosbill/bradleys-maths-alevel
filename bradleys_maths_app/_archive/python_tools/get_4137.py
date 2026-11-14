import sqlite3

conn = sqlite3.connect('assets/bradleys_maths.db')
cur = conn.cursor()

print("=" * 70)
print("QUESTION 004137")
print("=" * 70)

cur.execute("SELECT question_text FROM questions WHERE id = '004137'")
row = cur.fetchone()
if row:
    print("QUESTION TEXT:\n", row[0])

print("\n" + "=" * 70)
print("STEPS:")
print("=" * 70)
cur.execute("SELECT step_number, is_final_answer, step_text FROM question_steps WHERE question_id = '004137' ORDER BY step_number")
for r in cur.fetchall():
    print(f"\nStep {r[0]} [is_final_answer={r[1]}]:\n{r[2]}")

print("\n" + "=" * 70)
print("OPTIONS & FEEDBACK:")
print("=" * 70)
cur.execute("SELECT id, is_correct, ans_text, feedback_text FROM question_options WHERE question_id = '004137' ORDER BY id")
for r in cur.fetchall():
    tag = "[CORRECT]" if r[1] == 1 else "[PI]     "
    print(f"\n{tag} (ID {r[0]}):\n  Ans: {r[2]}\n  Feedback: {r[3]}")

conn.close()