import sqlite3

conn = sqlite3.connect('assets/bradleys_maths.db')
cur = conn.cursor()

cur.execute("SELECT question_text FROM questions WHERE id = '004171'")
print("QUESTION 004171 TEXT:")
print(cur.fetchone()[0])

print("\nOPTIONS:")
cur.execute("SELECT ans_text, feedback_text, is_correct FROM question_options WHERE question_id = '004171'")
for row in cur.fetchall():
    print(f"Correct={row[2]} | Ans: {row[0]}")
    print(f"  Feedback: {row[1]}\n")

conn.close()