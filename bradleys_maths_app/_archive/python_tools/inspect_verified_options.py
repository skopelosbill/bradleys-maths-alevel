import sqlite3

conn = sqlite3.connect('assets/bradleys_maths.db')
cur = conn.cursor()

ids = ['004056', '004057', '004060', '004104', '004105', '004319']

print("=" * 70)
print("INSPECTING OPTIONS WITH 'VERIFIED'")
print("=" * 70)

for q_id in ids:
    print(f"\n--- QUESTION {q_id} ---")
    cur.execute("SELECT id, is_correct, ans_text FROM question_options WHERE question_id = ? ORDER BY id", (q_id,))
    for idx, (oid, is_c, ans) in enumerate(cur.fetchall()):
        tag = "[CORRECT]" if is_c == 1 else f"[PI {idx}]   "
        print(f"  {tag} (ID {oid}): {repr(ans)}")

conn.close()