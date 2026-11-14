import sqlite3

conn = sqlite3.connect('assets/bradleys_maths.db')
cur = conn.cursor()

cur.execute("SELECT id, ans_text, is_correct FROM question_options WHERE question_id = '004032'")
options = cur.fetchall()

print("OPTIONS FOR 004032:")
for idx, (oid, ans, is_c) in enumerate(options):
    print(f"  Option {idx+1} [ID {oid}, correct={is_c}]: {repr(ans)}")

conn.close()