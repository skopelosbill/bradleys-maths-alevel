import sqlite3

conn = sqlite3.connect('assets/bradleys_maths.db')
cur = conn.cursor()

print("=" * 70)
print("INSPECTING THE 3 SYNTAX BUGS")
print("=" * 70)

# 1. 004108 Step 8
cur.execute("SELECT step_text FROM question_steps WHERE question_id = '004108' AND step_number = 8")
row = cur.fetchone()
print("\n--- 004108 Step 8 ---")
if row:
    print(repr(row[0]))

# 2. 009011 Question Stem
cur.execute("SELECT question_text FROM questions WHERE id = '009011'")
row = cur.fetchone()
print("\n--- 009011 Question Stem ---")
if row:
    print(repr(row[0]))

# 3. 012099 Option 4
cur.execute("SELECT id, ans_text FROM question_options WHERE question_id = '012099'")
rows = cur.fetchall()
print("\n--- 012099 Options ---")
for idx, (oid, ans) in enumerate(rows):
    print(f"  Option {idx+1} (ID {oid}): {repr(ans)}")

conn.close()