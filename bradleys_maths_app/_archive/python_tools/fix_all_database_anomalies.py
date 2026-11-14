import sqlite3

db_path = 'assets/bradleys_maths.db'
conn = sqlite3.connect(db_path)
cur = conn.cursor()

print("=" * 75)
print("     PATCHING ALL REMAINING DATABASE ANOMALIES")
print("=" * 75)

# ---------------------------------------------------------------------
# 1. FIX THE 3 SYNTAX BUGS
# ---------------------------------------------------------------------
# 004108 Step 8
cur.execute("SELECT step_text FROM question_steps WHERE question_id = '004108' AND step_number = 8")
r = cur.fetchone()
if r:
    fixed_s8 = r[0].replace(r'\approx 0.57\%$$', r'\approx 0.57\%\end{aligned}$$')
    if not fixed_s8.startswith('$$') and r'\begin{aligned}' in fixed_s8:
        fixed_s8 = fixed_s8.replace(r'\begin{aligned}', r'$$\begin{aligned}')
    cur.execute("UPDATE question_steps SET step_text = ? WHERE question_id = '004108' AND step_number = 8", (fixed_s8,))
    print("  [SYNTAX FIXED] 004108 Step 8: Correctly closed \\end{aligned}$$.")

# 009011 Question Stem
cur.execute("SELECT question_text FROM questions WHERE id = '009011'")
r = cur.fetchone()
if r:
    fixed_stem = r[0].replace(r'+ b \log_{10} X$$When', r'+ b \log_{10} X\end{aligned}$$When')
    if r'$$\begin{aligned}' not in fixed_stem and r'\begin{aligned}' in fixed_stem:
        fixed_stem = fixed_stem.replace(r'\begin{aligned}', r'$$\begin{aligned}')
    cur.execute("UPDATE questions SET question_text = ? WHERE id = '009011'", (fixed_stem,))
    print("  [SYNTAX FIXED] 009011 Question Stem: Correctly closed \\end{aligned}$$.")

# 012099 Option 4 typo $Sa -> $$a
cur.execute("SELECT id, ans_text FROM question_options WHERE question_id = '012099' AND ans_text LIKE '$Sa%'")
r = cur.fetchone()
if r:
    fixed_opt = r[1].replace('$Sa', '$$a')
    cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (fixed_opt, r[0]))
    print("  [SYNTAX FIXED] 012099 Option 4: Corrected '$Sa' typo to '$$a'.")

# ---------------------------------------------------------------------
# 2. FIX 004056, 004057, 004060 (PARITY WITH 004058/004059)
# ---------------------------------------------------------------------
clean_bouncing_options = {
    '004056': {
        'fa': 'Final Answer: <strong>(a)</strong> $$\\tan x = 2$$ <strong>(b)</strong> Bouncing curves sketched <strong>(c)</strong> $$1.60\\text{ m}$$ <strong>(d)</strong> Bounces occur at constant intervals of $\\pi\\text{ seconds}$',
        'correct': '<strong>(a)</strong> $$\\tan x = 2$$ <strong>(b)</strong> Bouncing curves sketched <strong>(c)</strong> $$1.60\\text{ m}$$ <strong>(d)</strong> Bounces occur at constant intervals of $\\pi\\text{ seconds}$'
    },
    '004057': {
        'fa': 'Final Answer: <strong>(a)</strong> $$\\tan x = 5$$ <strong>(b)</strong> Bouncing curves sketched <strong>(c)</strong> $$3.18\\text{ m}$$ <strong>(d)</strong> Bounces occur at constant intervals of $\\pi\\text{ seconds}$',
        'correct': '<strong>(a)</strong> $$\\tan x = 5$$ <strong>(b)</strong> Bouncing curves sketched <strong>(c)</strong> $$3.18\\text{ m}$$ <strong>(d)</strong> Bounces occur at constant intervals of $\\pi\\text{ seconds}$'
    },
    '004060': {
        'fa': 'Final Answer: <strong>(a)</strong> $$\\tan x = 6$$ <strong>(b)</strong> Bouncing curves sketched <strong>(c)</strong> $$9.25\\text{ m}$$ <strong>(d)</strong> Bounces occur at constant intervals of $\\pi\\text{ seconds}$',
        'correct': '<strong>(a)</strong> $$\\tan x = 6$$ <strong>(b)</strong> Bouncing curves sketched <strong>(c)</strong> $$9.25\\text{ m}$$ <strong>(d)</strong> Bounces occur at constant intervals of $\\pi\\text{ seconds}$'
    },
}

for q_id, data in clean_bouncing_options.items():
    # Update Final Answer step
    cur.execute("UPDATE question_steps SET step_text = ? WHERE question_id = ? AND is_final_answer = 1", (data['fa'], q_id))
    # Update Correct Option
    cur.execute("UPDATE question_options SET ans_text = ? WHERE question_id = ? AND is_correct = 1", (data['correct'], q_id))
    print(f"  [PARITY FIXED] {q_id}: Removed 'verified' and aligned with 004058/004059 standard.")

# ---------------------------------------------------------------------
# 3. FIX 004104 AND 004105 (STRIP 'is verified')
# ---------------------------------------------------------------------
for q_id in ['004104', '004105']:
    cur.execute("SELECT id, ans_text FROM question_options WHERE question_id = ?", (q_id,))
    for opt_id, ans_txt in cur.fetchall():
        cleaned_ans = ans_txt.replace(r'\text{ is verified}', '').replace(r'\text{is verified}', '').replace(r'\text{ is verified }', '')
        cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (cleaned_ans, opt_id))
    
    cur.execute("SELECT step_text FROM question_steps WHERE question_id = ? AND is_final_answer = 1", (q_id,))
    fa_row = cur.fetchone()
    if fa_row:
        cleaned_fa = fa_row[0].replace(r'\text{ is verified}', '').replace(r'\text{is verified}', '').replace(r'\text{ is verified }', '')
        cur.execute("UPDATE question_steps SET step_text = ? WHERE question_id = ? AND is_final_answer = 1", (cleaned_fa, q_id))
    print(f"  [PARITY FIXED] {q_id}: Cleaned 'is verified' from options and final answer.")

# ---------------------------------------------------------------------
# 4. FIX 004319 (REMOVE GIVEAWAY COORDINATES FROM CORRECT OPTION)
# ---------------------------------------------------------------------
cur.execute("UPDATE question_options SET ans_text = '$$\\text{Area} = \\dfrac{16}{3}$$' WHERE question_id = '004319' AND is_correct = 1")
cur.execute("UPDATE question_steps SET step_text = 'Final Answer: $$\\text{Area} = \\dfrac{16}{3}$$' WHERE question_id = '004319' AND is_final_answer = 1")
print("  [PARITY FIXED] 004319: Set correct answer to '$$\\text{Area} = \\dfrac{16}{3}$$' to match distractors.")

conn.commit()
conn.close()

print("=" * 75)
print("  ALL PATCHES COMMITTED SUCCESSFULLY TO assets/bradleys_maths.db")
print("=" * 75)