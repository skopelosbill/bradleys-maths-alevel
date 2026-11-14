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
print("     INSPECTING THE 15 OPTION PARITY QUESTIONS")
print("=" * 70)

for q_id in target_ids:
    cur.execute("SELECT id, ans_text, is_correct FROM question_options WHERE question_id = ? ORDER BY id", (q_id,))
    opts = cur.fetchall()
    print(f"\n--- QUESTION {q_id} ---")
    for idx, (opt_id, ans, corr) in enumerate(opts, 1):
        tag = "[CORRECT]" if corr else "[PI]     "
        has_imp = "HAS \\implies" if r'\implies' in ans else "NO \\implies "
        # Print a clean one-line representation
        ans_clean = ans.replace('\n', ' ').strip()
        print(f"  Option {idx} {tag} ({has_imp}) [DB ID {opt_id}]: {ans_clean}")

conn.close()
print("=" * 70)