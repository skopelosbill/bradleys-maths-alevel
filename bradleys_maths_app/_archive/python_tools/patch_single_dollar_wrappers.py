import sqlite3
import re

DB_PATH = 'assets/bradleys_maths.db'
conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()

print("=" * 70)
print("     STRIPPING SINGLE-DOLLAR WRAPPERS AROUND ENVIRONMENTS")
print("=" * 70)

# Matches single $ before \begin{pmatrix} or \begin{aligned}
pattern_before = re.compile(r'(?<!\$)\$(?!\$)\s*\\begin\{(pmatrix|aligned)\}')

# Matches single $ after \end{pmatrix} or \end{aligned}
pattern_after = re.compile(r'\\end\{(pmatrix|aligned)\}\s*(?<!\$)\$(?!\$)')

def strip_single_dollar(text):
    if not text:
        return text
    new_text = pattern_before.sub(r'\\begin{\1}', text)
    new_text = pattern_after.sub(r'\\end{\1}', new_text)
    return new_text

tables_to_update = [
    ("questions", "question_text", "id"),
    ("question_steps", "step_text", "id"),
    ("question_options", "ans_text", "id"),
    ("question_options", "feedback_text", "id"),
    ("bradley_insights", "content", "question_id")
]

total_updated = 0

for tbl, col, id_col in tables_to_update:
    cur.execute(f"SELECT {id_col}, {col} FROM {tbl}")
    rows = cur.fetchall()
    tbl_updates = 0
    for row_id, val in rows:
        if not val:
            continue
        cleaned = strip_single_dollar(val)
        if cleaned != val:
            cur.execute(f"UPDATE {tbl} SET {col} = ? WHERE {id_col} = ?", (cleaned, row_id))
            tbl_updates += 1
            total_updated += 1
    print(f"[{tbl}.{col}] Updated {tbl_updates} records")

conn.commit()
conn.close()

print("=" * 70)
print(f"ALL SINGLE-DOLLAR WRAPPERS STRIPPED! Total records updated: {total_updated}")
print("=" * 70)