import sqlite3

conn = sqlite3.connect('assets/bradleys_maths.db')
cur = conn.cursor()

cur.execute("SELECT question_text FROM questions WHERE id = '004007'")
q_text = cur.fetchone()[0]

print("=" * 60)
print("QUESTION 004007 TEXT:")
print(q_text)

print("\n" + "=" * 60)
print("STEPS:")
cur.execute("SELECT step_number, step_text FROM question_steps WHERE question_id = '004007' ORDER BY step_number")
for s_num, s_text in cur.fetchall():
    print(f"\nStep {s_num}:\n{s_text}")

print("\n" + "=" * 60)
print("OPTIONS:")
cur.execute("SELECT ans_text, is_correct, feedback_text FROM question_options WHERE question_id = '004007'")
for ans, is_c, fb in cur.fetchall():
    tag = "[CORRECT]" if is_c else "[PI]"
    print(f"{tag:<10}: {ans}\n  Feedback: {fb}\n")

conn.close()