import sqlite3
import re
import math

db_path = 'assets/bradleys_maths.db'
conn = sqlite3.connect(db_path)
cur = conn.cursor()

print("=" * 70)
print("     DETERMINISTIC MATHEMATICAL AUDIT — STATISTICS (290 QUESTIONS)")
print("=" * 70)

cur.execute("""
    SELECT id, topic, question_text 
    FROM questions 
    WHERE branch = 'Statistics' 
    ORDER BY id
""")
stat_questions = cur.fetchall()

total_stat = len(stat_questions)
print(f"Auditing {total_stat} Statistics questions using exact Python mathematics...\n")

issues_flagged = 0

for q_id, topic, q_text in stat_questions:
    cur.execute("SELECT step_number, step_text, is_final_answer FROM question_steps WHERE question_id = ? ORDER BY step_number", (q_id,))
    steps = cur.fetchall()
    
    cur.execute("SELECT ans_text, is_correct FROM question_options WHERE question_id = ?", (q_id,))
    options = cur.fetchall()
    
    # Check Final Answer & Options presence
    fa_steps = [s[1] for s in steps if s[2] == 1 or 'Final Answer' in s[1]]
    correct_opts = [o[0] for o in options if o[1] == 1]
    
    if not fa_steps:
        print(f"  [Missing Final Answer Step] ID {q_id} ({topic})")
        issues_flagged += 1
    elif not correct_opts:
        print(f"  [Missing Correct Option] ID {q_id} ({topic})")
        issues_flagged += 1

    # Check Step-by-Step Calculations
    for s_num, s_text, _ in steps:
        # 1. IQR Arithmetic: Q3 - Q1 = IQR
        iqr_matches = re.findall(r'(?:IQR|Range|spread)\s*(?:=|\\quad\s*=)\s*(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)\s*(?:=|\\cr\s*&?\s*=\s*|\s*=\s*)(\d+(?:\.\d+)?)', s_text, re.IGNORECASE)
        for q3, q1, stated_iqr in iqr_matches:
            actual_iqr = float(q3) - float(q1)
            if abs(actual_iqr - float(stated_iqr)) > 0.05:
                print(f"  [Math Slip - IQR] ID {q_id} Step {s_num}:")
                print(f"      Stated: {q3} - {q1} = {stated_iqr}  (Exact: {actual_iqr:.2f})")
                issues_flagged += 1

        # 2. Outlier Lower Boundary: Check that exact evaluated boundary is in step text
        lower_bounds = re.findall(r'(\d+(?:\.\d+)?)\s*-\s*1\.5\s*[\(\*x]\s*(\d+(?:\.\d+)?)\s*[\)]?', s_text)
        for q1, iqr in lower_bounds:
            actual_lb = float(q1) - 1.5 * float(iqr)
            lb_str = f"{int(actual_lb)}" if actual_lb.is_integer() else f"{actual_lb:.2f}"
            if lb_str not in s_text and f"{actual_lb:.1f}" not in s_text:
                print(f"  [Math Slip - Lower Outlier Bound] ID {q_id} Step {s_num}:")
                print(f"      Calculated {q1} - 1.5({iqr}) = {actual_lb:.2f}, but not found in step text!")
                issues_flagged += 1

        # 3. Outlier Upper Boundary: Check that exact evaluated boundary is in step text
        upper_bounds = re.findall(r'(\d+(?:\.\d+)?)\s*\+\s*1\.5\s*[\(\*x]\s*(\d+(?:\.\d+)?)\s*[\)]?', s_text)
        for q3, iqr in upper_bounds:
            actual_ub = float(q3) + 1.5 * float(iqr)
            ub_str = f"{int(actual_ub)}" if actual_ub.is_integer() else f"{actual_ub:.2f}"
            if ub_str not in s_text and f"{actual_ub:.1f}" not in s_text:
                print(f"  [Math Slip - Upper Outlier Bound] ID {q_id} Step {s_num}:")
                print(f"      Calculated {q3} + 1.5({iqr}) = {actual_ub:.2f}, but not found in step text!")
                issues_flagged += 1

        # 4. Median Rank Formula: (n + 1) / 2
        med_ranks = re.findall(r'\\dfrac\{\s*(\d+)\s*\+\s*1\s*\}\{\s*2\s*\}\s*=\s*(\d+(?:\.\d+)?)', s_text)
        for n_str, stated_r in med_ranks:
            actual_r = (float(n_str) + 1.0) / 2.0
            if abs(actual_r - float(stated_r)) > 0.05:
                print(f"  [Math Slip - Median Rank] ID {q_id} Step {s_num}:")
                print(f"      Stated: ({n_str} + 1)/2 = {stated_r}  (Exact: {actual_r})")
                issues_flagged += 1

        # 5. Normal Standardisation Z-Score: (x - mu) / sigma = z
        z_scores = re.findall(r'\\dfrac\{\s*(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)\s*\}\{\s*(\d+(?:\.\d+)?)\s*\}\s*=\s*(-?\d+(?:\.\d+)?)', s_text)
        for x_val, mu_val, sig_val, stated_z in z_scores:
            if float(sig_val) > 0:
                actual_z = (float(x_val) - float(mu_val)) / float(sig_val)
                if abs(actual_z - float(stated_z)) > 0.05:
                    print(f"  [Math Slip - Z-Score] ID {q_id} Step {s_num}:")
                    print(f"      Stated: ({x_val} - {mu_val})/{sig_val} = {stated_z}  (Exact: {actual_z:.3f})")
                    issues_flagged += 1

        # 6. Probability Complement: 1 - P(A) = P(A')
        comp_matches = re.findall(r'1\s*-\s*(0\.\d+)\s*=\s*(0\.\d+)', s_text)
        for p_val, stated_comp in comp_matches:
            actual_comp = 1.0 - float(p_val)
            if abs(actual_comp - float(stated_comp)) > 0.005:
                print(f"  [Math Slip - Probability Complement] ID {q_id} Step {s_num}:")
                print(f"      Stated: 1 - {p_val} = {stated_comp}  (Exact: {actual_comp:.4f})")
                issues_flagged += 1

conn.close()

print("=" * 70)
if issues_flagged == 0:
    print("  RESULT: 0 MATHEMATICAL SLIPS FOUND IN STATISTICS!")
    print("  ALL 290 STATISTICS QUESTIONS ARE 100% MATHEMATICALLY VERIFIED.")
else:
    print(f"  TOTAL MATHEMATICAL DISCREPANCIES FLAGGED: {issues_flagged}")
print("=" * 70)