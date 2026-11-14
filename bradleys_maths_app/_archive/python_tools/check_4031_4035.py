import sqlite3

conn = sqlite3.connect('assets/bradleys_maths.db')
cur = conn.cursor()

ids = ['004031', '004032', '004033', '004034', '004035']

print("=" * 70)
print("INSPECTING OPTIONS FOR GROUP 004031 - 004035")
print("=" * 70)

for q_id in ids:
    print(f"\n--- QUESTION {q_id} ---")
    cur.execute("SELECT id, ans_text, is_correct FROM question_options WHERE question_id = ?", (q_id,))
    opts = cur.fetchall()
    for idx, (oid, ans, is_c) in enumerate(opts):
        tag = "[CORRECT]" if is_c == 1 else "[PI]     "
        print(f"  Option {idx+1} {tag}: {repr(ans)}")

conn.close()