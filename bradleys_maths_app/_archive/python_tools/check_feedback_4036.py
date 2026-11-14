import sqlite3

conn = sqlite3.connect('assets/bradleys_maths.db')
cur = conn.cursor()

cur.execute("""
    SELECT id, is_correct, ans_text, feedback_text 
    FROM question_options 
    WHERE question_id = '004036' 
    ORDER BY id
""")
rows = cur.fetchall()

print("=" * 70)
print("OPTIONS & FEEDBACK FOR 004036")
print("=" * 70)

for idx, (oid, is_c, ans, fb) in enumerate(rows):
    tag = "[CORRECT]" if is_c == 1 else f"[PI {idx}]   "
    print(f"\n{tag} (ID {oid}):\n  Ans: {ans}\n  Feedback: {fb}")

conn.close()