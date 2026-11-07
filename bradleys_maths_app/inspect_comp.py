import sqlite3
conn = sqlite3.connect('assets/bradleys_maths.db')
c = conn.cursor()
c.execute("SELECT id, group_id, topic, substr(question_text, 1, 55) FROM questions WHERE branch='Comprehension' ORDER BY id")
rows = c.fetchall()
print(f"Total Comprehension questions: {len(rows)}")
for r in rows:
    print(r)
