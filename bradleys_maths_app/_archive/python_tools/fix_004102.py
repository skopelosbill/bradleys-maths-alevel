import sqlite3

conn = sqlite3.connect('assets/bradleys_maths.db')
cur = conn.cursor()

cur.execute("SELECT step_text FROM question_steps WHERE question_id = '004102' AND step_number = 1")
row = cur.fetchone()
if row:
    text = row[0]
    # Replace inline version with centered display blocks
    new_text = text.replace(r'$OA = 10$, $OC = 10$:<br>\begin{aligned}', r'$$OA = 10$$<br>$$OC = 10$$<br>\begin{aligned}')
    new_text = new_text.replace(r'$OA = 10$$ $$OC = 10,\begin{aligned}', r'$$OA = 10$$<br>$$OC = 10$$<br>\begin{aligned}')
    cur.execute("UPDATE question_steps SET step_text = ? WHERE question_id = '004102' AND step_number = 1", (new_text,))
    conn.commit()
    print("[UPDATED] 004102 Step 1 set to stacked centered display blocks $$OA = 10$$ and $$OC = 10$$")

conn.close()