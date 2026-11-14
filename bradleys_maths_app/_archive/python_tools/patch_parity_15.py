import sqlite3

DB_PATH = 'assets/bradleys_maths.db'
conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()

print("=" * 70)
print("     APPLYING FINAL PEDAGOGICAL PARITY PATCHES (15 QUESTIONS)")
print("=" * 70)

# 1. QUESTION 004101 (Option 1 & Final Answer Step)
new_opt_004101 = r"""(b)(i) $$\angle ABC = 90^\circ \implies AC \text{ is a diameter}$$ (b)(ii) $$\text{Inside the circle}$$"""
cur.execute("UPDATE question_options SET ans_text = ? WHERE id = 3041", (new_opt_004101,))
cur.execute("UPDATE question_steps SET step_text = ? WHERE question_id = '004101' AND is_final_answer = 1", ('Final Answer:<br>' + new_opt_004101,))
print("[FIXED] 004101: Corrected Option 1 and Final Answer Step")

# 2. QUESTION 004161 (Option 3: DB ID 3283)
cur.execute("UPDATE question_options SET ans_text = ? WHERE id = 3283", (r"""$$8k^3 + 12k^2 + 16k + 5 \text{ is even}$$""",))
print("[FIXED] 004161: Streamlined Option 3")

# 3. QUESTION 004163 (Option 2: DB ID 3290)
cur.execute("UPDATE question_options SET ans_text = ? WHERE id = 3290", (r"""$$4k^2 + 2 \text{ is divisible by 2}$$""",))
print("[FIXED] 004163: Streamlined Option 2")

# 4. QUESTION 004164 (Option 3: DB ID 3295)
cur.execute("UPDATE question_options SET ans_text = ? WHERE id = 3295", (r"""$$n = 11: \quad 11^2 + 11 + 11 = 143 \text{ (not prime)}$$""",))
print("[FIXED] 004164: Streamlined Option 3")

# 5. QUESTION 004191 (Option 2: DB ID 3402)
opt_3402 = r"""\begin{aligned}&\dfrac{t^2 - 4}{t^2 + 4} \cr &\text{two stationary points } (t = \pm 2) \cr &x^2 - y^2 = 16\end{aligned}"""
cur.execute("UPDATE question_options SET ans_text = ? WHERE id = 3402", (opt_3402,))
print("[FIXED] 004191: Aligned Option 2")

# 6. QUESTION 004195 (Option 3: DB ID 3419)
opt_3419 = r"""\begin{aligned}&\dfrac{2t^2 - 1}{2t^2 + 1} \cr &\text{two stationary points } (t = \pm 1/\sqrt{2}) \cr &x^2 - y^2 = 8\end{aligned}"""
cur.execute("UPDATE question_options SET ans_text = ? WHERE id = 3419", (opt_3419,))
print("[FIXED] 004195: Aligned Option 3")

# 7. QUESTION 004216 (Option 1 & Final Answer Step: Add \implies)
opt_3501 = r"""\begin{aligned} f(0.5) &= 1.1487 > 0 \cr f(1.0) &= -1.2817 < 0 \cr \implies 0.5 &< \alpha < 1.0 \end{aligned}"""
cur.execute("UPDATE question_options SET ans_text = ? WHERE id = 3501", (opt_3501,))
cur.execute("UPDATE question_steps SET step_text = ? WHERE question_id = '004216' AND is_final_answer = 1", ('Final Answer: ' + opt_3501,))
print("[FIXED] 004216: Added \\implies to Option 1 and Final Answer Step for 100% parity")

# 8. QUESTION 004440 (Option 2: DB ID 4398)
opt_4398 = r"""\begin{aligned} &\text{(a) } AB = BC = CA \implies \text{Equilateral} \cr &\text{(b) } \text{Perimeter} = 3\sqrt{14} \end{aligned}"""
cur.execute("UPDATE question_options SET ans_text = ? WHERE id = 4398", (opt_4398,))
print("[FIXED] 004440: Added \\implies to Option 2 for 100% parity")

# 9. NEWTON-RAPHSON GROUP (004451, 004452, 004453, 004455)
# 004451
opt_1401 = r"""\begin{aligned} &\text{(b) } x_2 \approx 0.818, \; x_3 \approx 0.777 \cr &\text{(c) } f'(0) = 0 \text{ causes division by zero} \end{aligned}"""
cur.execute("UPDATE question_options SET ans_text = ? WHERE id = 1401", (opt_1401,))
cur.execute("UPDATE question_steps SET step_text = ? WHERE question_id = '004451' AND is_final_answer = 1", ('<strong>Final Answer</strong>' + opt_1401,))

# 004452
opt_1405 = r"""\begin{aligned} &\text{(b) } x_2 = 1.000, \; x_3 \approx 0.750 \cr &\text{(c) } f'\left(-\dfrac{\pi}{2}\right) = 0 \text{ causes division by zero} \end{aligned}"""
cur.execute("UPDATE question_options SET ans_text = ? WHERE id = 1405", (opt_1405,))
cur.execute("UPDATE question_steps SET step_text = ? WHERE question_id = '004452' AND is_final_answer = 1", ('<strong>Final Answer</strong>' + opt_1405,))

# 004453
opt_1409 = r"""\begin{aligned} &\text{(b) } x_2 \approx 1.91, \; x_3 \approx 1.91 \cr &\text{(c) } f'\left(\dfrac{1}{\sqrt{2}}\right) = 0 \text{ causes division by zero} \end{aligned}"""
cur.execute("UPDATE question_options SET ans_text = ? WHERE id = 1409", (opt_1409,))
cur.execute("UPDATE question_steps SET step_text = ? WHERE question_id = '004453' AND is_final_answer = 1", ('<strong>Final Answer</strong>' + opt_1409,))

# 004455
opt_1417 = r"""\begin{aligned} &\text{(b) } x_2 \approx 1.89, \; x_3 \approx 1.88 \cr &\text{(c) } f'(1) = 0 \text{ causes division by zero} \end{aligned}"""
cur.execute("UPDATE question_options SET ans_text = ? WHERE id = 1417", (opt_1417,))
cur.execute("UPDATE question_steps SET step_text = ? WHERE question_id = '004455' AND is_final_answer = 1", ('<strong>Final Answer</strong>' + opt_1417,))
print("[FIXED] 004451, 004452, 004453, 004455: Unified Newton-Raphson division by zero phrasing")

# 10. QUESTION 004570 (Option 4: DB ID 1880)
cur.execute("UPDATE question_options SET ans_text = ? WHERE id = 1880", (r"""$a^2 = 2b^2 \implies b$ is odd""",))
print("[FIXED] 004570: Aligned Option 4 with deduction format")

# 11. QUESTION 004712 (Option 4: DB ID 2448)
cur.execute("UPDATE question_options SET ans_text = ? WHERE id = 2448", (r"""$$2^p = 5^{-q}$$""",))
print("[FIXED] 004712: Replaced Option 4 with equation distractor")

# 12. QUESTION 004715 (Option 4: DB ID 2460)
cur.execute("UPDATE question_options SET ans_text = ? WHERE id = 2460", (r"""$$m = 7, \, n = 2$$""",))
print("[FIXED] 004715: Replaced Option 4 with candidate pair distractor")

conn.commit()
conn.close()

print("=" * 70)
print("ALL 15 PARITY DISPARITIES RESOLVED & COMMITTED!")
print("=" * 70)