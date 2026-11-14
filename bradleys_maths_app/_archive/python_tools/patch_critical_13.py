import sqlite3

conn = sqlite3.connect('assets/bradleys_maths.db')
cur = conn.cursor()

print("=" * 70)
print("PATCHING ALL 13 CRITICAL STRUCTURAL SYNTAX ERRORS")
print("=" * 70)

# 1. QUESTION 004323: \begin{align} -> \begin{aligned}
cur.execute("SELECT question_text FROM questions WHERE id = '004323'")
q = cur.fetchone()[0]
q_new = q.replace(r'\begin{align}', r'\begin{aligned}').replace(r'\end{align}', r'\end{aligned}')
cur.execute("UPDATE questions SET question_text = ? WHERE id = '004323'", (q_new,))
print("[FIXED] Question 004323: \\begin{align} replaced with \\begin{aligned}")

# 2. QUESTION 050119: \begin{aligned) -> \begin{aligned}
cur.execute("SELECT question_text FROM questions WHERE id = '050119'")
q = cur.fetchone()[0]
q_new = q.replace(r'\begin{aligned)', r'\begin{aligned}')
cur.execute("UPDATE questions SET question_text = ? WHERE id = '050119'", (q_new,))
print("[FIXED] Question 050119: \\begin{aligned) fixed to \\begin{aligned}")

# 3. STEP 004057 Step 4: \begin(aligned} -> \begin{aligned}
cur.execute("SELECT step_text FROM question_steps WHERE question_id = '004057' AND step_number = 4")
s = cur.fetchone()[0]
s_new = s.replace(r'\begin(aligned}', r'\begin{aligned}')
cur.execute("UPDATE question_steps SET step_text = ? WHERE question_id = '004057' AND step_number = 4", (s_new,))
print("[FIXED] Step 004057 (Step 4): \\begin(aligned} fixed to \\begin{aligned}")

# 4. STEP 004104 Step 10: //end{aligned} -> \end{aligned}
cur.execute("SELECT step_text FROM question_steps WHERE question_id = '004104' AND step_number = 10")
s = cur.fetchone()[0]
s_new = s.replace('//end{aligned}', r'\end{aligned}')
cur.execute("UPDATE question_steps SET step_text = ? WHERE question_id = '004104' AND step_number = 10", (s_new,))
print("[FIXED] Step 004104 (Step 10): //end{aligned} fixed to \\end{aligned}")

# 5. INSIGHT 009015: Stray middle $$
cur.execute("SELECT content FROM bradley_insights WHERE question_id = '009015'")
c = cur.fetchone()[0]
c_new = c.replace(r'$$\log_{10}(c \cdot x) $$= \log_{10}(c) + \log_{10}(x)$$', r'$$\log_{10}(c \cdot x) = \log_{10}(c) + \log_{10}(x)$$')
cur.execute("UPDATE bradley_insights SET content = ? WHERE question_id = '009015'", (c_new,))
print("[FIXED] Insight 009015: Removed stray middle $$ delimiter")

# 6. INSIGHT 012258: \emd{aligned} -> \end{aligned}
cur.execute("SELECT content FROM bradley_insights WHERE question_id = '012258'")
c = cur.fetchone()[0]
c_new = c.replace(r'\emd{aligned}', r'\end{aligned}')
cur.execute("UPDATE bradley_insights SET content = ? WHERE question_id = '012258'", (c_new,))
print("[FIXED] Insight 012258: \\emd{aligned} fixed to \\end{aligned}")

# 7. INSIGHT 050283: fragmented $$ and &&=
cur.execute("SELECT content FROM bradley_insights WHERE question_id = '050283'")
c = cur.fetchone()[0]
old_part = r'$$p\text{-value}$$ &&= 2 \times P(X \le 11)$$ $$= 0.0818$$'
new_part = r'$$p\text{-value} = 2 \times \text{P}(X \le 11) = 0.0818$$'
c_new = c.replace(old_part, new_part)
cur.execute("UPDATE bradley_insights SET content = ? WHERE question_id = '050283'", (c_new,))
print("[FIXED] Insight 050283: Replaced fragmented math block with unified $$ block")

# 8. OPTION FEEDBACK 012143 (Option ID 671): \ebd{aligned -> \end{aligned}
cur.execute("SELECT feedback_text FROM question_options WHERE id = 671")
fb = cur.fetchone()[0]
fb_new = fb.replace(r'\ebd{aligned', r'\end{aligned}')
cur.execute("UPDATE question_options SET feedback_text = ? WHERE id = 671", (fb_new,))
print("[FIXED] Option Feedback 012143: \\ebd{aligned fixed to \\end{aligned}")

# 9. OPTION FEEDBACK 012220 (Option ID 980): Missing \end{aligned}
cur.execute("SELECT feedback_text FROM question_options WHERE id = 980")
fb = cur.fetchone()[0]
fb_new = fb.replace(r'& \approx 30.9\text{ N}$.', r'& \approx 30.9\text{ N}\end{aligned}.')
cur.execute("UPDATE question_options SET feedback_text = ? WHERE id = 980", (fb_new,))
print("[FIXED] Option Feedback 012220: Closed unclosed \\begin{aligned} block")

# 10. OPTION FEEDBACK 004065 (Option ID 2899): \begin{align} -> \begin{aligned}
cur.execute("SELECT feedback_text FROM question_options WHERE id = 2899")
fb = cur.fetchone()[0]
fb_new = fb.replace(r'\begin{align}', r'\begin{aligned}').replace(r'\end{align}', r'\end{aligned}')
cur.execute("UPDATE question_options SET feedback_text = ? WHERE id = 2899", (fb_new,))
print("[FIXED] Option Feedback 004065: \\begin{align} replaced with \\begin{aligned}")

# 11. OPTION FEEDBACK 004121 (Option ID 3122): $210,240$$ -> $210,240$
cur.execute("SELECT feedback_text FROM question_options WHERE id = 3122")
fb = cur.fetchone()[0]
fb_new = fb.replace('$210,240$$', '$210,240$')
cur.execute("UPDATE question_options SET feedback_text = ? WHERE id = 3122", (fb_new,))
print("[FIXED] Option Feedback 004121: Removed accidental double dollar")

# 12. OPTION FEEDBACK 004212 (Option ID 3486): \end{aligned. -> \end{aligned}
cur.execute("SELECT feedback_text FROM question_options WHERE id = 3486")
fb = cur.fetchone()[0]
fb_new = fb.replace(r'\end{aligned.', r'\end{aligned}')
cur.execute("UPDATE question_options SET feedback_text = ? WHERE id = 3486", (fb_new,))
print("[FIXED] Option Feedback 004212: \\end{aligned. fixed to \\end{aligned}")

# 13. OPTION FEEDBACK 050054 (Option ID 4656): \begin{align} -> \begin{aligned}
cur.execute("SELECT feedback_text FROM question_options WHERE id = 4656")
fb = cur.fetchone()[0]
fb_new = fb.replace(r'\begin{align}', r'\begin{aligned}').replace(r'\end{align}', r'\end{aligned}')
cur.execute("UPDATE question_options SET feedback_text = ? WHERE id = 4656", (fb_new,))
print("[FIXED] Option Feedback 050054: \\begin{align} replaced with \\begin{aligned}")

conn.commit()
conn.close()

print("=" * 70)
print("ALL 13 CRITICAL STRUCTURAL SYNTAX ERRORS COMMITTED!")
print("=" * 70)