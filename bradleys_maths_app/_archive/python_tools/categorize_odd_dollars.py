import sqlite3
import re

DB_PATH = 'assets/bradleys_maths.db'
conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()

print("=" * 70)
print("     CATEGORISING ALL 56 ODD-DOLLAR OCCURRENCES")
print("=" * 70)

tables = [
    ("questions", "question_text", "id"),
    ("question_steps", "step_text", "question_id"),
    ("question_options", "ans_text", "question_id"),
    ("question_options", "feedback_text", "question_id"),
    ("bradley_insights", "content", "question_id")
]

vector_pattern = re.compile(r'\$(?:\\vec|\\mathbf|[a-zA-Z_]+)\s*=\s*\\begin\{pmatrix\}')
case_pattern = re.compile(r'\$[^\$]+?\\begin\{aligned\}')

vector_eqs = []
case_conditions = []
other_odds = []

for tbl, col, id_col in tables:
    cur.execute(f"SELECT {id_col}, {col} FROM {tbl}")
    for q_id, txt in cur.fetchall():
        if not txt:
            continue
        clean = txt.replace('$$', '')
        if clean.count('$') % 2 != 0:
            if vector_pattern.search(txt):
                vector_eqs.append((tbl, q_id, txt))
            elif case_pattern.search(txt):
                case_conditions.append((tbl, q_id, txt))
            else:
                other_odds.append((tbl, q_id, txt))

conn.close()

print(f"1. Vector Equations missing unified wrap (e.g. $\\vec{{OA}} = \\begin{{pmatrix}}): {len(vector_eqs)}")
for tbl, q_id, txt in vector_eqs[:5]:
    m = re.search(r'.{0,15}\$(?:\\vec|\\mathbf|[a-zA-Z_]+)\s*=\s*\\begin\{pmatrix\}.{0,35}', txt)
    if m:
        print(f"   [{tbl} {q_id}] ...{m.group(0)}...")

print(f"\n2. Case Conditions missing closing $ before \\begin{{aligned}}: {len(case_conditions)}")
for tbl, q_id, txt in case_conditions[:5]:
    m = case_pattern.search(txt)
    if m:
        print(f"   [{tbl} {q_id}] ...{m.group(0)}...")

print(f"\n3. Other Odd-Dollar Fields: {len(other_odds)}")
for tbl, q_id, txt in other_odds:
    # Print a short snippet containing the lone $
    lines = [l.strip() for l in txt.split('<br>') if l.count('$') % 2 != 0]
    sample = lines[0][:80] if lines else txt[:80]
    print(f"   [{tbl} {q_id}]: {sample}...")

print("=" * 70)