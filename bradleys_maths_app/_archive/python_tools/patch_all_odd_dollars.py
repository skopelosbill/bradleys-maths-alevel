import sqlite3
import re

DB_PATH = 'assets/bradleys_maths.db'
conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()

print("=" * 70)
print("     PATCHING ALL REMAINING ODD-DOLLAR DELIMITERS & REMAINING MARKDOWN")
print("=" * 70)

# 1. SPECIFIC TEXT REPLACEMENTS
# Insight 004577 (Stray $ after 7^2)
cur.execute("SELECT content FROM bradley_insights WHERE question_id = '004577'")
row = cur.fetchone()
if row and '7^2 $=' in row[0]:
    cur.execute("UPDATE bradley_insights SET content = ? WHERE question_id = '004577'", (row[0].replace(r'7^2 $=', r'7^2 ='),))
    print("[FIXED] Insight 004577: Removed stray $ after 7^2")

# Option Feedback 2900 (004065)
cur.execute("SELECT feedback_text FROM question_options WHERE id = 2900")
row = cur.fetchone()
if row and r'\text{Area}' in row[0] and not row[0].startswith('$'):
    cur.execute("UPDATE question_options SET feedback_text = ? WHERE id = 2900", (row[0].replace(r'\text{Area} = \text{F}(6) - \text{F}(4)$.', r'$\text{Area} = \text{F}(6) - \text{F}(4)$.'),))
    print("[FIXED] Option Feedback 2900: Added opening $ to $\\text{Area} = ...$")

# Option Feedback 579 (012120)
cur.execute("SELECT feedback_text FROM question_options WHERE id = 579")
row = cur.fetchone()
if row and 'not $108\\text{ m}.' in row[0]:
    cur.execute("UPDATE question_options SET feedback_text = ? WHERE id = 579", (row[0].replace(r'not $108\text{ m}.', r'not $108\text{ m}$.'),))
    print("[FIXED] Option Feedback 579: Added closing $ to $108\\text{ m}$")

# Option Feedback 2236 (004659)
cur.execute("SELECT feedback_text FROM question_options WHERE id = 2236")
row = cur.fetchone()
if row and '$C - B =' in row[0]:
    new_fb = row[0].replace(r'$C - B = \begin{pmatrix} 1 \cr 2 \cr -2 \end{pmatrix}.', r'$$C - B = \begin{pmatrix} 1 \cr 2 \cr -2 \end{pmatrix}$$')
    cur.execute("UPDATE question_options SET feedback_text = ? WHERE id = 2236", (new_fb,))
    print("[FIXED] Option Feedback 2236: Wrapped vector equation in $$...$$")

# Step 004432 (Step 3)
cur.execute("SELECT step_text FROM question_steps WHERE question_id = '004432' AND step_number = 3")
row = cur.fetchone()
if row and 'x - 2} approaches' in row[0]:
    new_s = row[0].replace(r'h(x) = \dfrac{4x + 2}{x - 2} approaches', r'h(x) = \dfrac{4x + 2}{x - 2}$ approaches')
    cur.execute("UPDATE question_steps SET step_text = ? WHERE question_id = '004432' AND step_number = 3", (new_s,))
    print("[FIXED] Step 004432 (Step 3): Added closing $ to rational function")

# Step 004241 (Step 1)
cur.execute("SELECT step_text FROM question_steps WHERE question_id = '004241' AND step_number = 1")
row = cur.fetchone()
if row and '= R^2\\begin{aligned}' in row[0]:
    new_s = row[0].replace(r'= R^2\begin{aligned}', r'= R^2$:<br>\begin{aligned}')
    cur.execute("UPDATE question_steps SET step_text = ? WHERE question_id = '004241' AND step_number = 1", (new_s,))
    print("[FIXED] Step 004241 (Step 1): Added closing $ after R^2")

# Step 004363 & Option 4089 ($29^\circ\text{C$)
cur.execute("UPDATE question_steps SET step_text = replace(step_text, '$29^\\circ\\text{C', '$29^\\circ\\text{C}$') WHERE question_id = '004363'")
cur.execute("UPDATE question_options SET ans_text = '$29^\\circ\\text{C}$' WHERE id = 4089")
print("[FIXED] 004363 Step & Option 4089: Added closing $ to $29^\\circ\\text{C}$")

# Question 050124 (Step & Options 4933-4936)
cur.execute("UPDATE question_steps SET step_text = replace(step_text, '$38.8\\%', '$38.8\\%$') WHERE question_id = '050124'")
cur.execute("UPDATE question_options SET ans_text = replace(ans_text, '$38.8\\%', '$38.8\\%$') WHERE question_id = '050124'")
cur.execute("UPDATE question_options SET ans_text = replace(ans_text, '$61.3\\%', '$61.3\\%$') WHERE question_id = '050124'")
print("[FIXED] 050124 Step & Options: Added closing $ to percentage terms")

# Question 050254 (Options 5454-5456)
cur.execute("UPDATE question_options SET ans_text = replace(ans_text, '$10\\%', '$10\\%$') WHERE question_id = '050254'")
cur.execute("UPDATE question_options SET ans_text = replace(ans_text, '$12\\%', '$12\\%$') WHERE question_id = '050254'")
print("[FIXED] 050254 Options: Added closing $ to percentage terms")

# 2. CASE CONDITIONS
case_pairs = [
    (r'\$x\^2 - 3 \\ge 0\\begin\{aligned\}', r'$x^2 - 3 \\ge 0$<br>\\begin{aligned}'),
    (r'\$x\^2 - 3 < 0\\begin\{aligned\}', r'$x^2 - 3 < 0$<br>\\begin{aligned}'),
    (r'\$t \\ge 3\\begin\{aligned\}', r'$t \\ge 3$<br>\\begin{aligned}'),
    (r'\$0 < t < 3\\begin\{aligned\}', r'$0 < t < 3$<br>\\begin{aligned}'),
    (r'With \$y = -4\$, the vector \$\\vec\{PQ\}\$ is:\\begin\{aligned\}', r'With $y = -4$, the vector $\\vec{PQ}$ is:<br>\\begin{aligned}')
]

cur.execute("SELECT id, step_text FROM question_steps WHERE question_id IN ('004663', '004664', '004554')")
for step_id, stxt in cur.fetchall():
    new_stxt = stxt
    for pattern, repl in case_pairs:
        new_stxt = re.sub(pattern, repl, new_stxt)
    if new_stxt != stxt:
        cur.execute("UPDATE question_steps SET step_text = ? WHERE id = ?", (new_stxt, step_id))
        print(f"[FIXED] Case condition step {step_id}")

# 3. VECTOR EQUATIONS: REMOVE STRAY LEADING $
# In options and steps, convert stray leading $\vec{...} or $\mathbf{...} to clean TeX
target_q_ids = ['012026', '012027', '012028', '004656', '004657', '004659', '004553', '004554', '004658']

# Steps
cur.execute(f"SELECT id, step_text FROM question_steps WHERE question_id IN ({','.join(['?']*len(target_q_ids))})", target_q_ids)
for s_id, stxt in cur.fetchall():
    # Replace stray $\vec or $\mathbf before \begin{pmatrix} with clean $$\vec...$$
    def fix_vec_step(m):
        return f"$${m.group(1)}$$"
    new_s = re.sub(r'(?<!\$)\$((?:\\vec\{[^\}]+\}|\\mathbf\{[^\}]+\}|[a-zA-Z])\s*=\s*\\begin\{pmatrix\}.*?\\end\{pmatrix\}(?:\s*\+\s*[^\$<\n]+?\\begin\{pmatrix\}.*?\\end\{pmatrix\})?)', fix_vec_step, stxt, flags=re.DOTALL)
    if new_s != stxt:
        cur.execute("UPDATE question_steps SET step_text = ? WHERE id = ?", (new_s, s_id))
        print(f"[FIXED] Step vector wrap {s_id}")

# Options
cur.execute("SELECT id, ans_text FROM question_options WHERE ans_text LIKE '%\\begin{pmatrix}%'")
for opt_id, ans in cur.fetchall():
    def fix_vec_opt(m):
        return f"$${m.group(1)}$$"
    new_ans = re.sub(r'(?<!\$)\$((?:\\vec\{[^\}]+\}|\\mathbf\{[^\}]+\}|[a-zA-Z])\s*=\s*\\begin\{pmatrix\}.*?\\end\{pmatrix\}(?:\s*\+\s*[^\$<\n]+?\\begin\{pmatrix\}.*?\\end\{pmatrix\})?)', fix_vec_opt, ans, flags=re.DOTALL)
    if new_ans != ans:
        cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (new_ans, opt_id))
        print(f"[FIXED] Option ans_text vector wrap {opt_id}")

# Questions 004553, 004554, 004658, 004659 (Remove stray leading $ in position vectors)
for q_id in ['004553', '004554', '004658', '004659']:
    cur.execute("SELECT question_text FROM questions WHERE id = ?", (q_id,))
    q_row = cur.fetchone()
    if q_row:
        q_txt = q_row[0]
        # Strip stray $ right before \vec or \mathbf in vector lists
        new_q = re.sub(r'(?<!\$)\$((?:\\vec\{[^\}]+\}|\\mathbf\{[a-z]\})\s*=\s*\\begin\{pmatrix\})', r'\1', q_txt)
        if new_q != q_txt:
            cur.execute("UPDATE questions SET question_text = ? WHERE id = ?", (new_q, q_id))
            print(f"[FIXED] Question vector lists {q_id}")

# 4. FINAL MARKDOWN PASS ON QUESTION_OPTIONS.ANS_TEXT
cur.execute("SELECT id, ans_text FROM question_options WHERE ans_text LIKE '%*%'")
for opt_id, ans in cur.fetchall():
    # Convert **bold** -> <strong>bold</strong>
    new_ans = re.sub(r'\*\*([^\*\n]+?)\*\*', r'<strong>\1</strong>', ans)
    # Convert *italic* -> <em>italic</em>
    new_ans = re.sub(r'(?<!\*)\*([a-zA-Z\s\(\)\-]{2,40})\*(?!\*)', r'<em>\1</em>', new_ans)
    if new_ans != ans:
        cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (new_ans, opt_id))
        print(f"[FIXED] Option ans_text markdown converted {opt_id}")

conn.commit()
conn.close()

print("=" * 70)
print("ALL ODD DOLLARS & REMAINING MARKDOWN FULLY RESOLVED & COMMITTED!")
print("=" * 70)