import sqlite3

db_path = 'assets/bradleys_maths.db'
conn = sqlite3.connect(db_path)
cur = conn.cursor()

flagged_ids = ('050167', '050222', '050267', '004167', '004377', '004401', '004576')

print("=" * 70)
print("     INSPECTING FLAGGED QUESTIONS")
print("=" * 70)

for q_id in flagged_ids:
    cur.execute("SELECT id, topic, question_text FROM questions WHERE id = ?", (q_id,))
    q_row = cur.fetchone()
    print(f"\n{'='*20} ID {q_id} ({q_row[1]}) {'='*20}")
    print(f"QUESTION:\n{q_row[2][:250]}...\n")
    
    cur.execute("SELECT step_number, step_text FROM question_steps WHERE question_id = ? ORDER BY step_number", (q_id,))
    for s_num, s_text in cur.fetchall():
        print(f"--- Step {s_num} ---")
        print(s_text)
        print()

conn.close()