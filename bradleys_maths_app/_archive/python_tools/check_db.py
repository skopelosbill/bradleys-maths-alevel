import sqlite3

con = sqlite3.connect('assets/bradleys_maths.db')
cur = con.cursor()

ids = ('050161', '050162', '050163')

for q_id in ids:
    print(f"\n{'='*20} QUESTION {q_id} {'='*20}")
    cur.execute("SELECT question FROM questions WHERE id = ?", (q_id,))
    q_row = cur.fetchone()
    if q_row:
        print(f"[QUESTION TEXT]:\n{q_row[0]}\n")
    else:
        print("Not found in questions table.")

    cur.execute("SELECT step_num, step_text FROM question_steps WHERE question_id = ? ORDER BY step_num", (q_id,))
    steps = cur.fetchall()
    if steps:
        print("[STEPS]:")
        for s_num, s_text in steps:
            print(f"Step {s_num}: {s_text}")

con.close()