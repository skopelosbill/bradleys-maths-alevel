import sqlite3
import re

DB_PATH = 'assets/bradleys_maths.db'
conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()

print("=" * 70)
print("     PATCHING MATRIX ROW BREAKS & DOLLAR WRAPPERS (004021-004025, 004172)")
print("=" * 70)

target_ids = ('004021', '004022', '004023', '004024', '004025', '004172')

def clean_pmatrix(text):
    if not text:
        return text
    
    # 1. Strip single $ immediately wrapping \begin{pmatrix}...\end{pmatrix}
    # Matches $\begin{pmatrix}...\end{pmatrix}$
    def repl_pmatrix(match):
        inner = match.group(1)
        # Convert \\\ or \\ to \cr
        inner_fixed = re.sub(r'\\{2,3}', r'\\cr', inner)
        return r'\begin{pmatrix}' + inner_fixed + r'\end{pmatrix}'

    # First handle $\begin{pmatrix}...\end{pmatrix}$
    cleaned = re.sub(r'(?<!\$)\$\s*\\begin\{pmatrix\}(.*?)\\end\{pmatrix\}\s*(?!\$)\$', repl_pmatrix, text, flags=re.DOTALL)
    
    # Then handle any remaining \begin{pmatrix}...\end{pmatrix} without dollars
    cleaned = re.sub(r'\\begin\{pmatrix\}(.*?)\\end\{pmatrix\}', repl_pmatrix, cleaned, flags=re.DOTALL)
    
    return cleaned

# 1. Update questions
for q_id in target_ids:
    cur.execute("SELECT question_text FROM questions WHERE id = ?", (q_id,))
    row = cur.fetchone()
    if row and row[0]:
        new_q = clean_pmatrix(row[0])
        if new_q != row[0]:
            cur.execute("UPDATE questions SET question_text = ? WHERE id = ?", (new_q, q_id))
            print(f"[FIXED] questions {q_id}")

# 2. Update question_steps
for q_id in target_ids:
    cur.execute("SELECT id, step_text FROM question_steps WHERE question_id = ?", (q_id,))
    for step_id, step_text in cur.fetchall():
        new_s = clean_pmatrix(step_text)
        if new_s != step_text:
            cur.execute("UPDATE question_steps SET step_text = ? WHERE id = ?", (new_s, step_id))
            print(f"[FIXED] question_steps {q_id} (row {step_id})")

# 3. Update question_options (ans_text & feedback_text)
for q_id in target_ids:
    cur.execute("SELECT id, ans_text, feedback_text FROM question_options WHERE question_id = ?", (q_id,))
    for opt_id, ans_text, fb_text in cur.fetchall():
        new_ans = clean_pmatrix(ans_text)
        new_fb = clean_pmatrix(fb_text) if fb_text else fb_text
        if new_ans != ans_text or new_fb != fb_text:
            cur.execute("UPDATE question_options SET ans_text = ?, feedback_text = ? WHERE id = ?", (new_ans, new_fb, opt_id))
            print(f"[FIXED] question_options {q_id} (option {opt_id})")

# 4. Update bradley_insights
for q_id in target_ids:
    cur.execute("SELECT content FROM bradley_insights WHERE question_id = ?", (q_id,))
    row = cur.fetchone()
    if row and row[0]:
        new_c = clean_pmatrix(row[0])
        if new_c != row[0]:
            cur.execute("UPDATE bradley_insights SET content = ? WHERE question_id = ?", (new_c, q_id))
            print(f"[FIXED] bradley_insights {q_id}")

conn.commit()
conn.close()

print("=" * 70)
print("ALL MATRIX ROW BREAKS AND WRAPPER DOLLARS PATCHED & COMMITTED!")
print("=" * 70)