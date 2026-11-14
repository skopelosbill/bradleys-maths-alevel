import sqlite3

db_path = 'assets/bradleys_maths.db'
conn = sqlite3.connect(db_path)
cur = conn.cursor()

# Fix spacing in 004110 options 2, 3, 4
cur.execute("SELECT id, ans_text FROM question_options WHERE question_id = '004110' AND is_correct = 0")
for opt_id, ans in cur.fetchall():
    cleaned = ans.replace('(b)$$', '(b) $$').replace('(c)$$', ' (c) $$').replace('(c) $$', ' (c) $$')
    cleaned = ' '.join(cleaned.split())
    cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (cleaned, opt_id))

conn.commit()python fix_last.py
conn.close()
print("Cleaned 004110 spacing!")