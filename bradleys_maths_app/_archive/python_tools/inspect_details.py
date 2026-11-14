import sqlite3

conn = sqlite3.connect('assets/bradleys_maths.db')
cur = conn.cursor()

# 1. Inspect 004319 Question & Final Answer Step
print("=" * 70)
print("INSPECTING QUESTION 004319")
print("=" * 70)
cur.execute("SELECT question_text FROM questions WHERE id = '004319'")
print("Question Text:\n", cur.fetchone()[0])

cur.execute("SELECT step_number, step_text FROM question_steps WHERE question_id = '004319' AND is_final_answer = 1")
print("\nFinal Answer Step:\n", cur.fetchone())

# 2. Inspect 004058 and 004059 Options
print("\n" + "=" * 70)
print("INSPECTING SIBLINGS 004058 AND 004059")
print("=" * 70)
for q_id in ['004058', '004059']:
    print(f"\n--- {q_id} Options ---")
    cur.execute("SELECT id, is_correct, ans_text FROM question_options WHERE question_id = ?", (q_id,))
    for row in cur.fetchall():
        tag = "[CORRECT]" if row[1] == 1 else "[PI]     "
        print(f"  {tag} {repr(row[2])}")

conn.close()