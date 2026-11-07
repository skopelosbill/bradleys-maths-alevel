import sqlite3
conn = sqlite3.connect('assets/bradleys_maths.db')
c = conn.cursor()
c.execute("SELECT id, topic, substr(question_text, 1, 100) FROM questions WHERE id IN ('009003', '009008')")
for r in c.fetchall():
    print(r)
