import sqlite3

DB_PATH = 'assets/bradleys_maths.db'
conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()

print("=" * 70)
print("     PATCHING THE FINAL TWO DELIMITER SLIPS")
print("=" * 70)

# 1. Fix 004363 Step 3: Replace $29^\circ\text{C}$}$ with $29^\circ\text{C}$
cur.execute("SELECT step_text FROM question_steps WHERE question_id = '004363' AND step_number = 3")
row = cur.fetchone()
if row:
    new_s = row[0].replace(r'$29^\circ\text{C}$}$.', r'$29^\circ\text{C}$.')
    cur.execute("UPDATE question_steps SET step_text = ? WHERE question_id = '004363' AND step_number = 3", (new_s,))
    print("[FIXED] 004363 Step 3: Cleaned '$29^\\circ\\text{C}$}$.' to '$29^\\circ\\text{C}$.'")

# 2. Fix 050254 Option ID 5453: Replace $10\%$$ with $10\%$
cur.execute("SELECT ans_text FROM question_options WHERE id = 5453")
row = cur.fetchone()
if row:
    new_ans = row[0].replace(r'$10\%$$', r'$10\%$')
    cur.execute("UPDATE question_options SET ans_text = ? WHERE id = 5453", (new_ans,))
    print("[FIXED] 050254 Option 5453: Cleaned '$10\\%$$' to '$10\\%$'")

conn.commit()
conn.close()

print("=" * 70)
print("FINAL TWO PATCHES COMMITTED!")
print("=" * 70)