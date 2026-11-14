import sqlite3
import re

DB_PATH = 'assets/bradleys_maths.db'
conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()

print("=" * 70)
print("     INSPECTING THE 6 MATRIX ROW BREAK QUESTIONS")
print("=" * 70)

tables_to_check = [
    ("questions", "question_text", "id"),
    ("question_steps", "step_text", "question_id"),
    ("question_options", "ans_text", "question_id"),
    ("question_options", "feedback_text", "question_id"),
    ("bradley_insights", "content", "question_id")
]

for tbl, col, id_col in tables_to_check:
    cur.execute(f"SELECT {id_col}, {col} FROM {tbl}")
    for q_id, txt in cur.fetchall():
        if not txt:
            continue
        pmatrix_blocks = re.findall(r'\\begin\{pmatrix\}(.*?)\\end\{pmatrix\}', txt, re.DOTALL)
        for pblock in pmatrix_blocks:
            if ('\\\\' in pblock) and (r'\cr' not in pblock):
                print(f"[{tbl}] ID {q_id}:")
                print(f"   \\begin{{pmatrix}}{pblock}\\end{{pmatrix}}")
                print("-" * 50)

conn.close()