import sqlite3

DB_PATH = 'assets/bradleys_maths.db'
conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()

target_ids = [
    '004101', '004161', '004163', '004164', '004191', 
    '004195', '004216', '004440', '004451', '004452', 
    '004453', '004455', '004570', '004712', '004715'
]

print("=" * 70)
print("     DETAILED CONTEXT FOR THE 15 PARITY QUESTIONS")
print("=" * 70)

for q_id in target_ids:
    cur.execute("SELECT question_text FROM questions WHERE id = ?", (q_id,))
    q_txt = cur.fetchone()[0]
    
    cur.execute("SELECT step_text FROM question_steps WHERE question_id = ? AND is_final_answer = 1", (q_id,))
    fa_row = cur.fetchone()
    fa_txt = fa_row[0] if fa_row else "No final answer step marked"

    print(f"\n==================== QUESTION {q_id} ====================")
    print(f"QUESTION: {q_txt[:160]}...")
    print(f"FINAL ANSWER STEP: {fa_txt}")

conn.close()