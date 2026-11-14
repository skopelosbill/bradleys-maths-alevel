import sqlite3

conn = sqlite3.connect('assets/bradleys_maths.db')
cur = conn.cursor()

def show(header, text):
    print("=" * 70)
    print(header)
    print("=" * 70)
    print(text)
    print()

# 1. Questions: 004323, 050119
cur.execute("SELECT id, question_text FROM questions WHERE id IN ('004323', '050119')")
for q_id, q_text in cur.fetchall():
    show(f"QUESTION {q_id}", q_text)

# 2. Steps: 004057 (Step 4), 004104 (Step 10)
cur.execute("SELECT question_id, step_number, step_text FROM question_steps WHERE (question_id='004057' AND step_number=4) OR (question_id='004104' AND step_number=10)")
for q_id, s_num, s_text in cur.fetchall():
    show(f"STEP {q_id} (Step {s_num})", s_text)

# 3. Insights: 009015, 012258, 050283
cur.execute("SELECT question_id, content FROM bradley_insights WHERE question_id IN ('009015', '012258', '050283')")
for q_id, cont in cur.fetchall():
    show(f"INSIGHT {q_id}", cont)

# 4. Option Feedback: 004065, 004121, 004212, 012143, 012220, 050054
cur.execute("""
    SELECT question_id, id, feedback_text 
    FROM question_options 
    WHERE question_id IN ('004065', '004121', '004212', '012143', '012220', '050054')
      AND feedback_text IS NOT NULL
""")
for q_id, opt_id, fb in cur.fetchall():
    # Only show feedback containing the syntax trigger
    if any(k in fb for k in ['\\begin{align}', '$$', '\\begin{aligned}']):
        # If it has an unclosed or align pattern, print it
        if fb.count('$$') % 2 != 0 or r'\begin{align}' in fb or fb.count(r'\begin{aligned}') != fb.count(r'\end{aligned}'):
            show(f"OPTION FEEDBACK {q_id} (Option DB ID: {opt_id})", fb)

conn.close()