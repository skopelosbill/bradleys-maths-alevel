import sqlite3
import json

db_path = 'assets/bradleys_maths.db'
conn = sqlite3.connect(db_path)
cur = conn.cursor()

print("=" * 70)
print("APPLYING TARGETED FIXES TO BRADLEYS_MATHS.DB")
print("=" * 70)

# 1. Fix 004171 Step 3 (\begin{align} -> \begin{aligned})
cur.execute("SELECT step_text FROM question_steps WHERE question_id = '004171' AND step_number = 3")
row = cur.fetchone()
if row:
    old_text = row[0]
    new_text = old_text.replace(r'\begin{align}', r'\begin{aligned}')
    cur.execute("UPDATE question_steps SET step_text = ? WHERE question_id = '004171' AND step_number = 3", (new_text,))
    print("[FIXED] 004171 Step 3: \\begin{align} replaced with \\begin{aligned}")

# 2. Fix 004172 (Question, Step 7, Insight)
# Question Text
cur.execute("SELECT question_text FROM questions WHERE id = '004172'")
row = cur.fetchone()
if row:
    old_q = row[0]
    # Replace $\begin{pmatrix} 2 \\\ -1 \end{pmatrix}$ with \begin{pmatrix} 2 \cr -1 \end{pmatrix}
    new_q = old_q.replace(r'$\begin{pmatrix} 2 \\\ -1 \end{pmatrix}$', r'\begin{pmatrix} 2 \cr -1 \end{pmatrix}')
    new_q = new_q.replace(r'$\begin{pmatrix} 2 \\ -1 \end{pmatrix}$', r'\begin{pmatrix} 2 \cr -1 \end{pmatrix}')
    cur.execute("UPDATE questions SET question_text = ? WHERE id = '004172'", (new_q,))
    print("[FIXED] 004172 Question Text: Stripped floating $ and fixed \\cr")

# Step 7
cur.execute("SELECT step_text FROM question_steps WHERE question_id = '004172' AND step_number = 7")
row = cur.fetchone()
if row:
    old_s = row[0]
    new_s = old_s.replace(r'$\begin{pmatrix} 2 \\\ -1 \end{pmatrix}$', r'\begin{pmatrix} 2 \cr -1 \end{pmatrix}')
    new_s = new_s.replace(r'$\begin{pmatrix} 2 \\ -1 \end{pmatrix}$', r'\begin{pmatrix} 2 \cr -1 \end{pmatrix}')
    cur.execute("UPDATE question_steps SET step_text = ? WHERE question_id = '004172' AND step_number = 7", (new_s,))
    print("[FIXED] 004172 Step 7: Stripped floating $ and fixed \\cr")

# Insight
cur.execute("SELECT content FROM bradley_insights WHERE question_id = '004172'")
row = cur.fetchone()
if row:
    old_in = row[0]
    new_in = old_in.replace(r'$\begin{pmatrix} a \\ b \end{pmatrix}$', r'\begin{pmatrix} a \cr b \end{pmatrix}')
    cur.execute("UPDATE bradley_insights SET content = ? WHERE question_id = '004172'", (new_in,))
    print("[FIXED] 004172 Insight: Stripped floating $ and fixed \\cr")

# 3. Fix 004175 Step 4
cur.execute("SELECT step_text FROM question_steps WHERE question_id = '004175' AND step_number = 4")
row = cur.fetchone()
if row:
    old_s = row[0]
    new_s = old_s.replace(r'$\begin{pmatrix} 3 \\\ 0 \end{pmatrix}$', r'\begin{pmatrix} 3 \cr 0 \end{pmatrix}')
    new_s = new_s.replace(r'$\begin{pmatrix} 3 \\ 0 \end{pmatrix}$', r'\begin{pmatrix} 3 \cr 0 \end{pmatrix}')
    cur.execute("UPDATE question_steps SET step_text = ? WHERE question_id = '004175' AND step_number = 4", (new_s,))
    print("[FIXED] 004175 Step 4: Stripped floating $ and fixed \\cr")

# 4. Fix 004211 (Final Answer Step & Correct Option)
# Final Answer Step
cur.execute("SELECT step_text FROM question_steps WHERE question_id = '004211' AND is_final_answer = 1")
row = cur.fetchone()
if row:
    old_ans = row[0]
    new_ans = old_ans.replace(r'\cr (x - 3) &\text{ is a factor}', r'\cr \implies (x - 3) &\text{ is a factor}')
    cur.execute("UPDATE question_steps SET step_text = ? WHERE question_id = '004211' AND is_final_answer = 1", (new_ans,))
    print("[FIXED] 004211 Step (Final Answer): Added \\implies for parity")

# Correct Option
cur.execute("SELECT ans_text FROM question_options WHERE question_id = '004211' AND is_correct = 1")
row = cur.fetchone()
if row:
    old_opt = row[0]
    new_opt = old_opt.replace(r'\cr (x - 3) &\text{ is a factor}', r'\cr \implies (x - 3) &\text{ is a factor}')
    cur.execute("UPDATE question_options SET ans_text = ? WHERE question_id = '004211' AND is_correct = 1", (new_opt,))
    print("[FIXED] 004211 Option (Correct): Added \\implies for parity")

# 5. Fix 004211 to 004215 Subtopics -> ["Factor Theorem"]
subtopic_json = json.dumps(["Factor Theorem"])
for q_num in range(4211, 4216):
    q_id = f"{q_num:06d}"
    cur.execute("UPDATE questions SET subtopics = ? WHERE id = ?", (subtopic_json, q_id))
    print(f"[FIXED] {q_id} Subtopics updated to [\"Factor Theorem\"]")

conn.commit()
conn.close()

print("=" * 70)
print("ALL 5 TARGETED FIXES SUCCESSFULLY APPLIED AND COMMITTED!")
print("=" * 70)