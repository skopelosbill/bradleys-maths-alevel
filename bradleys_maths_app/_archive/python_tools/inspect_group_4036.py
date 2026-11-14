import sqlite3

conn = sqlite3.connect('assets/bradleys_maths.db')
cur = conn.cursor()

ids = ['004036', '004037', '004038', '004039', '004040']

for q_id in ids:
    cur.execute("SELECT id, board, branch, level, major_area, topic, question_text, img FROM questions WHERE id = ?", (q_id,))
    row = cur.fetchone()
    print("=" * 70)
    print(f"ID: {row[0]} | Board: {row[1]} | Level: {row[3]} | Topic: {row[5]} | Image: {row[7]}")
    print("-" * 70)
    print("QUESTION TEXT:")
    print(row[6])
    print()

conn.close()