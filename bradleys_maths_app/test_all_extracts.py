import sqlite3, re
conn = sqlite3.connect('assets/bradleys_maths.db')
c = conn.cursor()
c.execute("SELECT id, topic, question_text FROM questions WHERE branch='Comprehension' ORDER BY id")
for q_id, topic, text in c.fetchall():
    m = re.search(r'<strong>(Extract[^<]+)</strong>', text)
    title = m.group(1) if m else 'No Extract Title'
    print(f"ID: {q_id} | Topic: {topic:22} | {title}")
