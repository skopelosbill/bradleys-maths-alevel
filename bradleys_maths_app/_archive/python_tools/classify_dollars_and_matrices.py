import sqlite3
import re

DB_PATH = 'assets/bradleys_maths.db'
conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()

# Pattern for a TRUE single dollar (not preceded by $ and not followed by $)
single_dollar_before_begin = re.compile(r'(?<!\$)\$(?!\$)\s*\\begin\{([a-zA-Z*]+)\}')
single_dollar_after_end = re.compile(r'\\end\{([a-zA-Z*]+)\}\s*(?<!\$)\$(?!\$)')

real_single_dollar_count = 0
single_dollar_questions = set()
matrix_slash_count = 0
matrix_slash_questions = set()

def scan_text(q_id, text):
    global real_single_dollar_count, matrix_slash_count
    if not text:
        return
    
    # Check for real single $ around environments
    m1 = single_dollar_before_begin.findall(text)
    m2 = single_dollar_after_end.findall(text)
    if m1 or m2:
        real_single_dollar_count += len(m1) + len(m2)
        single_dollar_questions.add(q_id)
        
    # Check for matrix using \\ instead of \cr
    pmatrix_blocks = re.findall(r'\\begin\{pmatrix\}(.*?)\\end\{pmatrix\}', text, re.DOTALL)
    for pblock in pmatrix_blocks:
        if ('\\\\' in pblock) and (r'\cr' not in pblock):
            matrix_slash_count += 1
            matrix_slash_questions.add(q_id)

# Scan all tables
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
        scan_text(q_id, txt)

print("=" * 70)
print("     FORENSIC CLASSIFICATION OF REMAINING ANOMALIES")
print("=" * 70)
print(f"1. Real Single-Dollar ($) Vector Wrappers: {real_single_dollar_count} occurrences across {len(single_dollar_questions)} questions")
print(f"2. Matrix (\\\\) Row Breaks: {matrix_slash_count} occurrences across {len(matrix_slash_questions)} questions")

# Check the 15 Option \implies disparity questions
cur.execute("SELECT question_id, ans_text, is_correct FROM question_options ORDER BY question_id")
opts_by_q = {}
for q_id, ans, corr in cur.fetchall():
    opts_by_q.setdefault(q_id, []).append((ans, corr))

implies_questions = []
for q_id, opts in opts_by_q.items():
    if len(opts) == 4:
        flags = [('\\implies' in o[0]) for o in opts]
        if sum(flags) == 1 or sum(flags) == 3:
            implies_questions.append((q_id, sum(flags)))

print(f"\n3. Option \\implies Parity Disparities: {len(implies_questions)} questions")
for q_id, count in implies_questions:
    print(f"   • ID {q_id}: {count} of 4 options have \\implies")

conn.close()
print("=" * 70)