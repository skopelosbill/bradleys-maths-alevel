import sqlite3

DB_PATH = 'assets/bradleys_maths.db'
conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()

tables = [
    ("questions", "question_text", "id"),
    ("question_steps", "step_text", "question_id"),
    ("question_options", "ans_text", "id"),
    ("question_options", "feedback_text", "id"),
    ("bradley_insights", "content", "question_id")
]

records = []

for tbl, col, id_col in tables:
    cur.execute(f"SELECT {id_col}, {col} FROM {tbl}")
    for r_id, txt in cur.fetchall():
        if not txt:
            continue
        clean = txt.replace('$$', '')
        if clean.count('$') % 2 != 0:
            records.append((tbl, r_id, col, clean.count('$'), txt))

conn.close()

with open('odd_dollars_report.txt', 'w', encoding='utf-8') as f:
    f.write("=" * 70 + "\n")
    f.write(f"     ALL {len(records)} ODD-DOLLAR FIELDS IN DETAIL\n")
    f.write("=" * 70 + "\n\n")
    for tbl, r_id, col, cnt, txt in records:
        f.write(f"[{tbl}.{col}] Record ID: {r_id} (Odd count: {cnt})\n")
        f.write(f"TEXT:\n{txt}\n")
        f.write("-" * 60 + "\n")

print("=" * 70)
print(f"Total Odd-Dollar Records Captured: {len(records)}")
print("Detailed line-by-line report written to: odd_dollars_report.txt")
print("=" * 70)