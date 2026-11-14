import sqlite3

DB_PATH = 'assets/bradleys_maths.db'
conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()

print("=" * 70)
print("     INSPECTING THE LAST 2 RECORDS")
print("=" * 70)

# 1. question_steps 004363
cur.execute("SELECT step_number, step_text FROM question_steps WHERE question_id = '004363'")
for s_num, txt in cur.fetchall():
    clean = txt.replace('$$', '')
    if clean.count('$') % 2 != 0:
        print(f"[Step {s_num} for Question 004363]:")
        print(txt)
        print("-" * 50)

# 2. question_options for 050254
cur.execute("SELECT id, ans_text FROM question_options WHERE question_id = '050254'")
for opt_id, ans in cur.fetchall():
    clean = ans.replace('$$', '')
    if clean.count('$') % 2 != 0:
        print(f"[Option ID {opt_id} for Question 050254]:")
        print(ans)
        print("-" * 50)

conn.close()