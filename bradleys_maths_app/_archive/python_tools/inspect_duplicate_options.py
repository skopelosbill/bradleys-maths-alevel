import sqlite3

DB_PATH = 'assets/bradleys_maths.db'
conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()

target_ids = ['004154', '004180', '004196', '012026', '050260']

print("=" * 70)
print("     INSPECTING THE 5 DUPLICATE OPTION QUESTIONS")
print("=" * 70)

for q_id in target_ids:
    cur.execute("SELECT question_text FROM questions WHERE id = ?", (q_id,))
    q_txt = cur.fetchone()[0]
    
    cur.execute("SELECT step_text FROM question_steps WHERE question_id = ? AND is_final_answer = 1", (q_id,))
    fa_row = cur.fetchone()
    fa_txt = fa_row[0] if fa_row else "None"
    
    print(f"\n==================== QUESTION {q_id} ====================")
    print(f"QUESTION: {q_txt[:140]}...")
    print(f"FINAL ANSWER: {fa_txt}\n")
    
    cur.execute("SELECT id, ans_text, feedback_text, is_correct FROM question_options WHERE question_id = ? ORDER BY id", (q_id,))
    for idx, (opt_id, ans, fb, corr) in enumerate(cur.fetchall(), 1):
        tag = "[CORRECT]" if corr else "[PI]     "
        print(f"  Option {idx} {tag} (DB ID {opt_id}): {ans}")
        print(f"     Feedback: {fb}\n")

conn.close()