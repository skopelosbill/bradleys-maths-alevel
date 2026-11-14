import sqlite3

conn = sqlite3.connect('assets/bradleys_maths.db')
cur = conn.cursor()

ids = ['004036', '004037', '004038', '004039', '004040']

print("=" * 70)
print("INSPECTING QUESTIONS 004036 - 004040")
print("=" * 70)

for q_id in ids:
    print(f"\n--- QUESTION ID: {q_id} ---")
    cur.execute("SELECT step_number, step_text FROM question_steps WHERE question_id = ? ORDER BY step_number", (q_id,))
    steps = cur.fetchall()
    for s_num, s_text in steps:
        if q_id == '004036' and s_num == 6:
            print(f"  Step 6: {repr(s_text)}")
        if 'Final Answer' in s_text:
            print(f"  Final Answer Step: {repr(s_text)}")
            
    cur.execute("SELECT ans_text, is_correct FROM question_options WHERE question_id = ?", (q_id,))
    opts = cur.fetchall()
    print("  Options:")
    for opt, is_corr in opts:
        tag = "[CORRECT]" if is_corr == 1 else "[PI]     "
        print(f"    {tag} {repr(opt)}")

conn.close()