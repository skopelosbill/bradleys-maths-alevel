import sqlite3
import re
from collections import Counter

DB_PATH = 'assets/bradleys_maths.db'
conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()

single_dollar_before_begin = re.compile(r'(?<!\$)\$(?!\$)\s*\\begin\{([a-zA-Z*]+)\}')
single_dollar_after_end = re.compile(r'\\end\{([a-zA-Z*]+)\}\s*(?<!\$)\$(?!\$)')

env_counter = Counter()
questions_affected = set()
samples = []

tables = [
    ("questions", "question_text", "id"),
    ("question_steps", "step_text", "question_id"),
    ("question_options", "ans_text", "question_id"),
    ("question_options", "feedback_text", "question_id"),
    ("bradley_insights", "content", "question_id")
]

for tbl, col, id_col in tables:
    cur.execute(f"SELECT {id_col}, {col} FROM {tbl}")
    for q_id, txt in cur.fetchall():
        if not txt:
            continue
        m1 = single_dollar_before_begin.findall(txt)
        m2 = single_dollar_after_end.findall(txt)
        if m1 or m2:
            questions_affected.add(q_id)
            for env in m1 + m2:
                env_counter[env] += 1
            if len(samples) < 5:
                # Capture a short snippet
                snippet = re.search(r'.{0,20}(?<!\$)\$(?!\$)\s*\\begin\{[a-zA-Z*]+\}.{0,35}', txt)
                if snippet:
                    samples.append((q_id, tbl, snippet.group(0).strip()))

conn.close()

print("=" * 70)
print("     SINGLE-DOLLAR ENVIRONMENT BREAKDOWN")
print("=" * 70)
print(f"Total Affected Questions: {len(questions_affected)} (out of 1,400)")
print("\nEnvironments being wrapped in single $:")
for env, cnt in env_counter.most_common():
    print(f"  • \\begin{{{env}}}: {cnt} times")

print("\nSample Snippets:")
for q_id, tbl, snip in samples:
    print(f"  [{tbl} {q_id}] ...{snip}...")
print("=" * 70)