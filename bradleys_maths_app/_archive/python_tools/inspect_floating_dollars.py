import sqlite3
import re

conn = sqlite3.connect('assets/bradleys_maths.db')
cur = conn.cursor()

print("=" * 70)
print("SAMPLING FLOATING $ AND MATRIX PATTERNS ACROSS TABLES")
print("=" * 70)

def inspect_matches(table_name, col_name, id_col='id'):
    cur.execute(f"SELECT {id_col}, {col_name} FROM {table_name}")
    found = 0
    for row in cur.fetchall():
        text = row[1]
        if not text:
            continue
        # Find any instance of $\begin{...}
        matches = re.findall(r'.{0,25}\$\s*\\begin\{[a-zA-Z*]+\}.{0,40}', text)
        if matches:
            for m in matches[:2]:
                print(f"[{table_name} {row[0]}] ...{m}...")
                found += 1
        if found >= 3:
            break

print("\n1. QUESTIONS:")
inspect_matches('questions', 'question_text')

print("\n2. QUESTION STEPS:")
inspect_matches('question_steps', 'step_text', id_col='question_id')

print("\n3. QUESTION OPTIONS:")
inspect_matches('question_options', 'ans_text', id_col='question_id')

print("\n4. OPTION FEEDBACK:")
inspect_matches('question_options', 'feedback_text', id_col='question_id')

print("\n5. BRADLEY INSIGHTS:")
inspect_matches('bradley_insights', 'content', id_col='question_id')

conn.close()