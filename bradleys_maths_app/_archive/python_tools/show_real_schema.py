import sqlite3

conn = sqlite3.connect('assets/bradleys_maths.db')
cur = conn.cursor()

print("=" * 70)
print("TABLE SCHEMA: question_steps")
print("=" * 70)
cur.execute("PRAGMA table_info(question_steps)")
for col in cur.fetchall():
    print(f"  Column {col[0]}: {col[1]} ({col[2]})")

print("\n" + "=" * 70)
print("TABLE SCHEMA: question_options")
print("=" * 70)
cur.execute("PRAGMA table_info(question_options)")
for col in cur.fetchall():
    print(f"  Column {col[0]}: {col[1]} ({col[2]})")

print("\n" + "=" * 70)
print("RAW ROWS IN question_steps FOR 004036:")
print("=" * 70)
cur.execute("SELECT step_number, is_final_answer, step_text FROM question_steps WHERE question_id = '004036' ORDER BY step_number")
for row in cur.fetchall():
    print(f"  Step {row[0]} [is_final_answer={row[1]}]:\n    {row[2][:120]}...\n")

conn.close()