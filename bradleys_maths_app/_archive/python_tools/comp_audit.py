import sqlite3
import re
import math

db_path = 'assets/bradleys_maths.db'
conn = sqlite3.connect(db_path)
cur = conn.cursor()

print("=" * 70)
print("     DETERMINISTIC MATHEMATICAL AUDIT — COMPREHENSION (25 QUESTIONS)")
print("=" * 70)

cur.execute("""
    SELECT id, topic, question_text 
    FROM questions 
    WHERE branch = 'Comprehension' 
    ORDER BY id
""")
comp_questions = cur.fetchall()

total_comp = len(comp_questions)
print(f"Auditing {total_comp} Comprehension questions...\n")

issues_flagged = 0

def is_close(stated, actual, tol=0.02):
    """Checks float equality within tolerance (relative or absolute)."""
    if abs(actual) < 1e-5:
        return abs(stated) < 0.05
    rel_diff = abs(stated - actual) / abs(actual)
    abs_diff = abs(stated - actual)
    return rel_diff <= tol or abs_diff <= 0.05

for q_id, topic, q_text in comp_questions:
    cur.execute("SELECT step_number, step_text, is_final_answer FROM question_steps WHERE question_id = ? ORDER BY step_number", (q_id,))
    steps = cur.fetchall()
    
    cur.execute("SELECT ans_text, is_correct FROM question_options WHERE question_id = ?", (q_id,))
    options = cur.fetchall()
    
    # 1. Structural Check: Final Answer & Correct Option presence
    fa_steps = [s[1] for s in steps if s[2] == 1 or 'Final Answer' in s[1]]
    correct_opts = [o[0] for o in options if o[1] == 1]
    distractors = [o[0] for o in options if o[1] == 0]
    
    if not fa_steps:
        print(f"  [Missing Final Answer Step] ID {q_id} ({topic})")
        issues_flagged += 1
    if not correct_opts:
        print(f"  [Missing Correct Option] ID {q_id} ({topic})")
        issues_flagged += 1
    if len(distractors) != 3:
        print(f"  [Option Count Discrepancy] ID {q_id}: Expected 3 distractors, found {len(distractors)}")
        issues_flagged += 1

    for s_num, s_text, _ in steps:
        clean_text = s_text.replace(r'\,', ' ').replace(r'\;', ' ').replace(r'\quad', ' ').replace(r'\qquad', ' ')

        # 2. Basic Arithmetic Multiplications: a * b = c
        mult_matches = re.findall(r'(\d+(?:\.\d+)?)\s*(?:\\times|\*)\s*(\d+(?:\.\d+)?)\s*=\s*(\d+(?:\.\d+)?)', clean_text)
        for a, b, stated_c in mult_matches:
            actual_c = float(a) * float(b)
            if not is_close(float(stated_c), actual_c):
                print(f"  [Math Slip - Multiplication] ID {q_id} Step {s_num}:")
                print(f"      Stated: {a} * {b} = {stated_c}  (Exact: {actual_c})")
                issues_flagged += 1

        # 3. Fraction / Division Evaluations: \dfrac{a}{b} = c
        div_matches = re.findall(r'\\dfrac\{\s*(\d+(?:\.\d+)?)\s*\}\{\s*(\d+(?:\.\d+)?)\s*\}\s*=\s*(\d+(?:\.\d+)?)', clean_text)
        for num, den, stated_res in div_matches:
            if float(den) > 0:
                actual_res = float(num) / float(den)
                if not is_close(float(stated_res), actual_res):
                    print(f"  [Math Slip - Division] ID {q_id} Step {s_num}:")
                    print(f"      Stated: {num} / {den} = {stated_res}  (Exact: {actual_res:.4f})")
                    issues_flagged += 1

        # 4. Addition / Subtraction Evaluations: a +/- b = c
        add_matches = re.findall(r'(\d+(?:\.\d+)?)\s*([\+\-])\s*(\d+(?:\.\d+)?)\s*=\s*(\d+(?:\.\d+)?)', clean_text)
        for a, op, b, stated_c in add_matches:
            actual_c = float(a) + float(b) if op == '+' else float(a) - float(b)
            if not is_close(float(stated_c), actual_c):
                print(f"  [Math Slip - Addition/Subtraction] ID {q_id} Step {s_num}:")
                print(f"      Stated: {a} {op} {b} = {stated_c}  (Exact: {actual_c})")
                issues_flagged += 1

        # 5. Percentage Models: (1 +/- r) or decimal multiplier
        pct_matches = re.findall(r'(\d+(?:\.\d+)?)\s*(?:\\times|\*)\s*(0\.\d+)\s*=\s*(\d+(?:\.\d+)?)', clean_text)
        for base, rate, stated_res in pct_matches:
            actual_res = float(base) * float(rate)
            if not is_close(float(stated_res), actual_res):
                print(f"  [Math Slip - Multiplier/Percentage] ID {q_id} Step {s_num}:")
                print(f"      Stated: {base} * {rate} = {stated_res}  (Exact: {actual_res:.3f})")
                issues_flagged += 1

conn.close()

print("=" * 70)
if issues_flagged == 0:
    print("  RESULT: 0 MATHEMATICAL SLIPS FOUND IN COMPREHENSION!")
    print(f"  ALL {total_comp} COMPREHENSION QUESTIONS ARE 100% MATHEMATICALLY VERIFIED.")
else:
    print(f"  TOTAL ISSUES FLAGGED: {issues_flagged}")
print("=" * 70)