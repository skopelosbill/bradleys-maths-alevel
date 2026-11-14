import sqlite3
import re

db_path = 'assets/bradleys_maths.db'
conn = sqlite3.connect(db_path)
cur = conn.cursor()

print("=" * 60)
print("     APPLYING BATCH 3 PARITY & FORMAT FIXES")
print("=" * 60)

# 1. Fix Trig Smallest-x in 004026 - 004030 (Trim Option 1 to just final x value)
trig_x_fixes = {
    '004026': "Smallest positive $x = 51.0^\\circ$",
    '004027': "$x = 15^\\circ$",
    '004028': "$x \\approx 44.4^\\circ$",
    '004029': "$x \\approx 133.7^\\circ$",
    '004030': "$x = 5^\\circ$"
}
print("\n[1] Harmonizing smallest-x trig options (004026 - 004030):")
for q_id, clean_ans in trig_x_fixes.items():
    cur.execute("UPDATE question_options SET ans_text = ? WHERE question_id = ? AND is_correct = 1", (clean_ans, q_id))
    print(f"  • ID {q_id}: Set Option 1 -> {clean_ans}")

# 2. Fix Exponential Depreciation in 004031 - 004035 (Flatten \\begin{aligned} in PI options)
cur.execute("SELECT id, question_id, ans_text FROM question_options WHERE question_id IN ('004031', '004032', '004033', '004034', '004035') AND ans_text LIKE '%\\begin{aligned}%'")
exp_rows = cur.fetchall()
print(f"\n[2] Flattening aligned blocks in exponential models ({len(exp_rows)} found):")
for opt_id, q_id, ans in exp_rows:
    cleaned = re.sub(r'\\begin\{aligned\}\s*&?\s*([^\\]+)\s*\\cr\s*&?\s*([^\\]+)\s*\\end\{aligned\}', r'\1 \2', ans)
    cleaned = re.sub(r'\s{2,}', ' ', cleaned)
    cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (cleaned, opt_id))
    print(f"  • ID {q_id}: Flattened")

# 3. Fix Bouncing Curves in 004058 & 004059 (Remove extra line-breaks in Option 1)
bounce_fixes = {
    '004058': "<strong>(a)</strong> $$\\tan x = 3$$ <strong>(b)</strong> Bouncing curves sketched <strong>(c)</strong> $$2.63\\text{ m}$$ <strong>(d)</strong> Bounces occur at constant intervals of $\\pi\\text{ seconds}$",
    '004059': "<strong>(a)</strong> $$\\tan x = 8$$ <strong>(b)</strong> Bouncing curves sketched <strong>(c)</strong> $$3.36\\text{ m}$$ <strong>(d)</strong> Bounces occur at constant intervals of $\\pi\\text{ seconds}$"
}
print("\n[3] Inlining bouncing curves options (004058, 004059):")
for q_id, clean_ans in bounce_fixes.items():
    cur.execute("UPDATE question_options SET ans_text = ? WHERE question_id = ? AND is_correct = 1", (clean_ans, q_id))
    print(f"  • ID {q_id}: Set Option 1 -> Cleaned")

# 4. Fix Parametric options in 004091 - 004095 (Match two $$ blocks)
param_fixes = {
    '004091': "$$\\text{(a) } \\dfrac{dy}{dx} = -\\dfrac{5}{2} \\times 2^{2t},$$ $$\\text{(b) } xy + x - 4y = 14$$",
    '004092': "$$\\text{(a) } \\dfrac{dy}{dx} = -\\dfrac{2}{3} \\times 3^{2t},$$ $$\\text{(b) } xy + 4x - 2y = 14$$",
    '004093': "$$\\text{(a) } \\dfrac{dy}{dx} = -\\dfrac{4}{5} \\times 2^{2t},$$ $$\\text{(b) } xy + 3x - y = 23$$",
    '004094': "$$\\text{(a) } \\dfrac{dy}{dx} = -2 \\times 3^{2t},$$ $$\\text{(b) } xy + x - 5y = 13$$",
    '004095': "$$\\text{(a) } \\dfrac{dy}{dx} = -\\dfrac{2}{3} \\times 2^{2t},$$ $$\\text{(b) } xy + 6x - 2y = 18$$"
}
print("\n[4] Harmonizing parametric options (004091 - 004095):")
for q_id, clean_ans in param_fixes.items():
    cur.execute("UPDATE question_options SET ans_text = ? WHERE question_id = ? AND is_correct = 1", (clean_ans, q_id))
    print(f"  • ID {q_id}: Standardized to two $$ blocks")

# 5. Fix typo //end{aligned} and flatten in 004104
cur.execute("SELECT id, ans_text FROM question_options WHERE question_id = '004104' AND is_correct = 1")
row = cur.fetchone()
if row:
    opt_id, _ = row
    clean_004104 = "(b)(i) $$PT^2 = R^2 \\text{ is verified}$$ (b)(ii) $$\\text{Inside the circle}$$"
    cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (clean_004104, opt_id))
    print("\n[5] Fixed typo //end{aligned} in 004104")

# 6. Standardize 004400 (Change \\begin{aligned} x = ... \\end{aligned} to $$x = ...$$)
cur.execute("SELECT id, ans_text FROM question_options WHERE question_id = '004400' AND is_correct = 0")
for opt_id, ans in cur.fetchall():
    match = re.search(r'x\s*=\s*(-?\d+)', ans)
    if match:
        val = match.group(1)
        cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (f"$$x = {val}$$", opt_id))
print("\n[6] Standardized all options in 004400 to $$x = ...$$")

conn.commit()
conn.close()
print("\n" + "=" * 60)
print("BATCH 3 FIXES COMMITTED SUCCESSFULLY!")
print("=" * 60)