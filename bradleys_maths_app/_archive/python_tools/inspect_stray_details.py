import sqlite3

DB_PATH = 'assets/bradleys_maths.db'
conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()

print("=" * 70)
print("     INSPECTING REMAINING STRAY ODD-DOLLAR RECORDS")
print("=" * 70)

# Steps: 004102, 004241, 004432
cur.execute("SELECT question_id, step_number, step_text FROM question_steps WHERE question_id IN ('004102', '004241', '004432')")
for q_id, s_num, txt in cur.fetchall():
    clean = txt.replace('$$', '')
    if clean.count('$') % 2 != 0:
        print(f"[Step {q_id} (Step {s_num})]:\n{txt}\n" + "-" * 50)

# Options feedback: 579, 2236, 2900
cur.execute("SELECT id, question_id, feedback_text FROM question_options WHERE id IN (579, 2236, 2900)")
for opt_id, q_id, fb in cur.fetchall():
    print(f"[Option Feedback ID {opt_id} (Question {q_id})]:\n{fb}\n" + "-" * 50)

# Insight: 004577
cur.execute("SELECT question_id, content FROM bradley_insights WHERE question_id = '004577'")
row = cur.fetchone()
if row:
    print(f"[Insight {row[0]}]:\n{row[1]}\n" + "-" * 50)

conn.close()