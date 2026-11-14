import sqlite3
import re

db_path = 'assets/bradleys_maths.db'
conn = sqlite3.connect(db_path)
cur = conn.cursor()

print("=" * 60)
print("     APPLYING BATCH 2 FORMAT & PARITY FIXES")
print("=" * 60)

# 1. Fix 004791 Option 2 (Replace duplicate 2.221 with 2.176 and clean feedback)
cur.execute("SELECT id FROM question_options WHERE question_id = '004791' AND is_correct = 0 AND ans_text LIKE '%2.221%'")
row = cur.fetchone()
if row:
    opt_id = row[0]
    new_ans = "$$2.176$$"
    new_fb = "This error occurs if you omit the derivative of \\ln x when calculating g'(x), taking g'(x) = \\dfrac{4}{x^2} = 0.756, which yields x_1 = 2.3 - 0.124 = 2.176."
    cur.execute("UPDATE question_options SET ans_text = ?, feedback_text = ? WHERE id = ?", (new_ans, new_fb, opt_id))
    print("  • ID 004791: Cleaned Option 2 -> $$2.176$$ with updated feedback")

# 2. Strip stray leading \cr from options (e.g. 004108 - 004110)
cur.execute("SELECT id, question_id, ans_text FROM question_options WHERE ans_text LIKE '\\cr %' OR ans_text LIKE '\\cr%'")
cr_rows = cur.fetchall()
print(f"\n[2] Stripping stray leading \\cr ({len(cr_rows)} found):")
for opt_id, q_id, ans in cr_rows:
    cleaned = re.sub(r'^\\cr\s*', '', ans).strip()
    cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (cleaned, opt_id))
    print(f"  • ID {q_id}: Cleaned -> {cleaned[:50]}")

# 3. Harmonize outer $$ on \\begin{aligned} for Option 1
ids_need_math = ['004096', '004097', '004098', '004099', '004100',
                 '004122', '004123', '004124', '004125',
                 '004201', '004202', '004203', '004204', '004205', '004206']
print(f"\n[3] Adding matching math mode delimiters to Option 1 in {len(ids_need_math)} questions:")
for q_id in ids_need_math:
    cur.execute("SELECT id, ans_text FROM question_options WHERE question_id = ? AND is_correct = 1", (q_id,))
    row = cur.fetchone()
    if row:
        opt_id, ans = row
        if not ans.startswith('$') and ans.startswith(r'\begin{aligned}'):
            cleaned = f"$${ans}$$"
            cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (cleaned, opt_id))
            print(f"  • ID {q_id}: Wrapped in $$")

# 4. Flatten multi-part answers in 004134, 004135, 004137 to single line matching other options
multi_part_fixes = {
    '004134': "$$x = 2\\text{ cm}, \\quad V = 128\\text{ cm}^3$$",
    '004135': "$$\\theta = \\dfrac{\\pi}{4}, \\quad A = 50\\text{ cm}^2$$",
    '004137': "$$\\tan(A+B) = -1, \\quad A+B = 135^\\circ$$"
}
print("\n[4] Harmonizing multi-part options to single line:")
for q_id, clean_ans in multi_part_fixes.items():
    cur.execute("UPDATE question_options SET ans_text = ? WHERE question_id = ? AND is_correct = 1", (clean_ans, q_id))
    print(f"  • ID {q_id}: Set to -> {clean_ans}")

# 5. Split time in 004476 and 004478 onto 2 lines matching the other 3 options
time_fixes = {
    '004476': "\\begin{aligned} &3\\text{ minutes} \\cr &\\quad 26\\text{ seconds} \\end{aligned}",
    '004478': "\\begin{aligned} &13\\text{ hours} \\cr &\\quad 53\\text{ minutes} \\end{aligned}"
}
print("\n[5] Harmonizing 2-line time options:")
for q_id, clean_ans in time_fixes.items():
    cur.execute("UPDATE question_options SET ans_text = ? WHERE question_id = ? AND is_correct = 1", (clean_ans, q_id))
    print(f"  • ID {q_id}: Set to 2-line layout")

# 6. Flatten disjoint inequalities (004346, 004347, 004348, 004350)
cur.execute("SELECT id, question_id, ans_text FROM question_options WHERE question_id IN ('004346', '004347', '004348', '004350') AND ans_text LIKE '%\\cr%\\text{or%'")
ineq_disjoint = cur.fetchall()
print(f"\n[6] Flattening disjoint inequality line-breaks ({len(ineq_disjoint)} found):")
for opt_id, q_id, ans in ineq_disjoint:
    cleaned = re.sub(r'\\begin\{aligned\}\s*&?([^\\]+)\s*\\cr\s*&?\\text\{or\s*\}\s*([^\\]+)\s*\\end\{aligned\}', r'$$\1 \\text{ or } \2$$', ans)
    cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (cleaned, opt_id))
    print(f"  • ID {q_id}: Inlined -> {cleaned}")

conn.commit()
conn.close()
print("\n" + "=" * 60)
print("BATCH 2 FIXES COMMITTED SUCCESSFULLY!")
print("=" * 60)