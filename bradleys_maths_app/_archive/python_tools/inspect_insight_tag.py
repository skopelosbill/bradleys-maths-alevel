import sqlite3

conn = sqlite3.connect('assets/bradleys_maths.db')
cur = conn.cursor()
cur.execute("SELECT content FROM bradley_insights WHERE question_id = '004772'")
row = cur.fetchone()
print("=" * 70)
print("INSIGHT CONTENT FOR 004772:")
print("=" * 70)
print(row[0] if row else "Not found")
print("=" * 70)
conn.close()