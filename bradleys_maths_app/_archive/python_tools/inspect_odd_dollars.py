import sqlite3

DB_PATH = 'assets/bradleys_maths.db'
conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()

print("=" * 70)
print("     INSPECTING THE ODD SINGLE '$' DELIMITERS")
print("=" * 70)

tables = [
    ("questions", "question_text", "id"),
    ("question_steps", "step_text", "question_id"),
    ("question_options", "ans_text", "question_id"),
    ("question_options", "feedback_text", "question_id"),
    ("bradley_insights", "content", "question_id")
]

odd_found = []

for tbl, col, id_col in tables:
    cur.execute(f"SELECT {id_col}, {col} FROM {tbl}")
    for q_id, txt in cur.fetchall():
        if not txt:
            continue
        # Strip $$ first
        clean = txt.replace('$$', '')
        # Count remaining single $
        cnt = clean.count('$')
        if cnt % 2 != 0:
            odd_found.append((tbl, q_id, cnt, txt))

conn.close()

print(f"Total Fields with Odd '$' Count: {len(odd_found)}\n")

for tbl, q_id, cnt, txt in odd_found[:15]: # Show first 15 samples
    print(f"--- [{tbl}] Question {q_id} (Found {cnt} single '$') ---")
    # Print the lines or a snippet around the dollar signs
    lines = [l.strip() for l in txt.split('<br>') if '$' in l]
    for l in lines[:3]:
        print(f"   {l[:100]}...")
    print()

if len(odd_found) > 15:
    print(f"... and {len(odd_found) - 15} more fields.")
print("=" * 70)