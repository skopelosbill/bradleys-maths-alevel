import sqlite3

DB_PATH = 'assets/bradleys_maths.db'
conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()

print("=" * 70)
print("     PATCHING 5 DUPLICATE MULTIPLE-CHOICE OPTIONS")
print("=" * 70)

# 1. 004154 (Option 2: DB ID 3254 -> $$3.98$$)
cur.execute("UPDATE question_options SET ans_text = ? WHERE id = 3254", (r'$$3.98$$',))
print("[FIXED] 004154 Option 2: Updated to $$3.98$$")

# 2. 004180 (Option 3: DB ID 3359 -> £30,700 and £13,625)
opt_3359 = r'\begin{aligned}&£30,700 \cr &£13,625\end{aligned}'
fb_3359 = "You evaluated the value after 3 years instead of 4 (£30,700), and found the remaining value after 8 years (£13,625) rather than the total depreciation."
cur.execute("UPDATE question_options SET ans_text = ?, feedback_text = ? WHERE id = 3359", (opt_3359, fb_3359))
print("[FIXED] 004180 Option 3: Updated to £30,700 / £13,625 with targeted diagnostic feedback")

# 3. 004196 (Option 3: DB ID 3423 -> 8.66 min and 21.4 min)
opt_3423 = r'\begin{aligned}&8.66\text{ minutes} \cr &21.4\text{ minutes}\end{aligned}'
fb_3423 = "You used 50 g instead of 100 g for the initial half-life in part (a), and made an error calculating the second decay constant in part (b)."
cur.execute("UPDATE question_options SET ans_text = ?, feedback_text = ? WHERE id = 3423", (opt_3423, fb_3423))
print("[FIXED] 004196 Option 3: Updated to 8.66 min / 21.4 min with targeted diagnostic feedback")

# 4. 012026 (Option 2: DB ID 202 -> Parallelogram and a rhombus)
opt_202 = r'<strong>(a)</strong> $\vec{AB} = \begin{pmatrix} 1 \cr 3 \cr -3 \end{pmatrix}<br><strong>(b)</strong> Parallelogram and a rhombus (adjacent sides equal)'
cur.execute("UPDATE question_options SET ans_text = ? WHERE id = 202", (opt_202,))
print("[FIXED] 012026 Option 2: Updated distractor to 'Parallelogram and a rhombus'")

# 5. 050260 (Option 4: DB ID 5480 -> 0.854 and 0.53 kg per kg)
opt_5480 = r'(a) $0.854$, (b) $0.53\text{ kg per kg}$'
fb_5480 = "In part (a), you made an arithmetic slip in the correlation denominator, and in part (b), you inverted the regression gradient ratio to Sxx/Sxy."
cur.execute("UPDATE question_options SET ans_text = ?, feedback_text = ? WHERE id = 5480", (opt_5480, fb_5480))
print("[FIXED] 050260 Option 4: Updated to 0.854 / 0.53 with targeted diagnostic feedback")

conn.commit()
conn.close()

print("=" * 70)
print("ALL 5 DUPLICATE OPTIONS FIXED & COMMITTED!")
print("=" * 70)