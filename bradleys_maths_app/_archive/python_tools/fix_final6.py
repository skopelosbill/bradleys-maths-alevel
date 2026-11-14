import sqlite3
import re

db_path = 'assets/bradleys_maths.db'
conn = sqlite3.connect(db_path)
cur = conn.cursor()

print("=" * 60)
print("     APPLYING FINAL 6 POLISH FIXES")
print("=" * 60)

# 1. Fix 004313 & 004319 (Wrap in $$)
for q_id in ('004313', '004319'):
    cur.execute("SELECT id, ans_text FROM question_options WHERE question_id = ? AND ans_text LIKE '\\begin{aligned}%'", (q_id,))
    for opt_id, ans in cur.fetchall():
        cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (f"$${ans}$$", opt_id))
    print(f"  • ID {q_id}: Wrapped aligned blocks in $$")

# 2. Fix 004325 (Counterexample inline)
clean_004325 = "Disproved by counterexample: $\\cos(60^\\circ + 60^\\circ) \\neq \\cos(60^\\circ) + \\cos(60^\\circ)$"
cur.execute("UPDATE question_options SET ans_text = ? WHERE question_id = '004325' AND is_correct = 1", (clean_004325,))
print("  • ID 004325: Inlined counterexample formula")

# 3. Fix 004331 (Wrap in $$)
cur.execute("SELECT id, ans_text FROM question_options WHERE question_id = '004331' AND ans_text LIKE '\\begin{aligned}%'")
for opt_id, ans in cur.fetchall():
    cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (f"$${ans}$$", opt_id))
print("  • ID 004331: Wrapped area options in $$")

# 4. Fix 004333 Option 4
clean_004333 = "$$8.8\\text{ cm} \\text{ and } -10.8\\text{ cm}$$"
cur.execute("UPDATE question_options SET ans_text = ? WHERE question_id = '004333' AND ans_text LIKE '%-10.8%'", (clean_004333,))
print("  • ID 004333: Inlined Option 4 to match single-line pills")

# 5. Fix 004348 Option 4
clean_004348 = "$$k < -1 \\text{ or } k > 9 \\text{ (excluding } k = 0\\text{)}$$"
cur.execute("UPDATE question_options SET ans_text = ? WHERE question_id = '004348' AND ans_text LIKE '%excluding%'", (clean_004348,))
print("  • ID 004348: Inlined Option 4 to match single-line pills")

conn.commit()
conn.close()
print("\n" + "=" * 60)
print("ALL FINAL FIXES COMMITTED SUCCESSFULLY!")
print("=" * 60)