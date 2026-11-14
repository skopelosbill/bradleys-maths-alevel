import sqlite3
conn = sqlite3.connect('assets/bradleys_maths.db')
c = conn.cursor()
c.execute("SELECT question_text FROM questions WHERE id='004042'")
print("QUESTION:", c.fetchone())
c.execute("SELECT step_number, step_text FROM question_steps WHERE question_id='004042' ORDER BY step_number")
print("STEPS:", len(c.fetchall()))
c.execute("SELECT ans_text, is_correct FROM question_options WHERE question_id='004042'")
print("OPTIONS:", c.fetchall())
