import sqlite3
import re

DB_PATH = 'assets/bradleys_maths.db'
conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()

print("=" * 70)
print("     SCANNING FOR ASYMMETRIC DOLLARS ($...$$) AND ODD '$' REMNANTS")
print("=" * 70)

tables = [
    ("questions", "question_text", "id"),
    ("question_steps", "step_text", "question_id"),
    ("question_options", "ans_text", "id"),
    ("question_options", "feedback_text", "id"),
    ("bradley_insights", "content", "question_id")
]

# Pattern for single $ opening followed by $$ closing: $math$$
asym_1 = re.compile(r'(?<!\$)\$(?!\$)[^\$\n]{1,80}\$\$')
# Pattern for $$ opening followed by single $ closing: $$math$
asym_2 = re.compile(r'\$\$[^\$\n]{1,80}(?<!\$)\$(?!\$)')

asym_found = []
odd_remaining = []

for tbl, col, id_col in tables:
    cur.execute(f"SELECT {id_col}, {col} FROM {tbl}")
    for r_id, txt in cur.fetchall():
        if not txt:
            continue
        
        # 1. Asymmetric checks
        m1 = asym_1.findall(txt)
        m2 = asym_2.findall(txt)
        if m1 or m2:
            asym_found.append((tbl, r_id, m1 + m2))

        # 2. Odd dollar count check
        clean = txt.replace('$$', '')
        if clean.count('$') % 2 != 0:
            odd_remaining.append((tbl, r_id, clean.count('$'), txt))

conn.close()

print(f"1. Asymmetric Mismatches Found ($...$$ or $$...$): {len(asym_found)}")
for tbl, r_id, matches in asym_found:
    print(f"   [{tbl} Record {r_id}]: {matches}")

print(f"\n2. Odd Single '$' Fields Remaining (out of original 56): {len(odd_remaining)}")
for tbl, r_id, cnt, txt in odd_remaining[:10]:
    lines = [l.strip() for l in txt.split('<br>') if l.count('$') % 2 != 0]
    sample = lines[0][:80] if lines else txt[:80]
    print(f"   [{tbl} Record {r_id} (count {cnt})]: {sample}...")

if len(odd_remaining) > 10:
    print(f"   ... and {len(odd_remaining) - 10} more.")

print("=" * 70)