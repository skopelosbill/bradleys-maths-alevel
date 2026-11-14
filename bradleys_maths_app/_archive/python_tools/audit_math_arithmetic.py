import sqlite3
import re

db_path = 'assets/bradleys_maths.db'
conn = sqlite3.connect(db_path)
cur = conn.cursor()

print("=" * 70)
print("     MATHEMATICAL STEP ARITHMETIC & FORMULA AUDIT")
print("=" * 70)

cur.execute("SELECT id, branch, topic FROM questions ORDER BY id")
all_questions = cur.fetchall()

mismatches = 0

for q_id, branch, topic in all_questions:
    cur.execute("SELECT step_number, step_text FROM question_steps WHERE question_id = ? ORDER BY step_number", (q_id,))
    steps = cur.fetchall()
    
    for s_num, s_text in steps:
        # 1. Check IQR arithmetic: A - B = C
        iqr_matches = re.findall(r'(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)\s*=\s*(\d+(?:\.\d+)?)', s_text)
        for a, b, c in iqr_matches:
            val_a, val_b, val_c = float(a), float(b), float(c)
            # Check basic subtraction
            if abs((val_a - val_b) - val_c) > 0.05 and val_a > val_b:
                print(f"\n  [Arithmetic Slip - Subtraction] ID {q_id} ({branch} - {topic}) Step {s_num}:")
                print(f"      Written: {a} - {b} = {c}  (Actual: {val_a - val_b:.2f})")
                mismatches += 1

        # 2. Check Rank calculation: (n + 1) / 2 = Rank
        rank_med = re.findall(r'\\dfrac\{\s*(\d+)\s*\+\s*1\s*\}\{\s*2\s*\}\s*=\s*(\d+(?:\.\d+)?)', s_text)
        for n_val, r_val in rank_med:
            expected_rank = (float(n_val) + 1.0) / 2.0
            if abs(expected_rank - float(r_val)) > 0.05:
                print(f"\n  [Rank Slip - Median] ID {q_id} ({branch} - {topic}) Step {s_num}:")
                print(f"      Written: ({n_val} + 1)/2 = {r_val}  (Actual: {expected_rank})")
                mismatches += 1

        # 3. Check Rank calculation: (n + 1) / 4 = Q1 Rank
        rank_q1 = re.findall(r'\\dfrac\{\s*(\d+)\s*\+\s*1\s*\}\{\s*4\s*\}\s*=\s*(\d+(?:\.\d+)?)', s_text)
        for n_val, r_val in rank_q1:
            expected_rank = (float(n_val) + 1.0) / 4.0
            if abs(expected_rank - float(r_val)) > 0.05:
                print(f"\n  [Rank Slip - Q1] ID {q_id} ({branch} - {topic}) Step {s_num}:")
                print(f"      Written: ({n_val} + 1)/4 = {r_val}  (Actual: {expected_rank})")
                mismatches += 1

        # 4. Check Lower Outlier Bound: Q1 - 1.5 * IQR
        lower_bound = re.findall(r'(\d+(?:\.\d+)?)\s*-\s*1\.5\s*[\(\*x]\s*(\d+(?:\.\d+)?)\s*[\)]?\s*=\s*(-?\d+(?:\.\d+)?)', s_text)
        for q1_v, iqr_v, bound_v in lower_bound:
            expected_b = float(q1_v) - 1.5 * float(iqr_v)
            if abs(expected_b - float(bound_v)) > 0.05:
                print(f"\n  [Bound Slip - Lower Outlier] ID {q_id} ({branch} - {topic}) Step {s_num}:")
                print(f"      Written: {q1_v} - 1.5({iqr_v}) = {bound_v}  (Actual: {expected_b:.2f})")
                mismatches += 1

        # 5. Check Upper Outlier Bound: Q3 + 1.5 * IQR
        upper_bound = re.findall(r'(\d+(?:\.\d+)?)\s*\+\s*1\.5\s*[\(\*x]\s*(\d+(?:\.\d+)?)\s*[\)]?\s*=\s*(-?\d+(?:\.\d+)?)', s_text)
        for q3_v, iqr_v, bound_v in upper_bound:
            expected_b = float(q3_v) + 1.5 * float(iqr_v)
            if abs(expected_b - float(bound_v)) > 0.05:
                print(f"\n  [Bound Slip - Upper Outlier] ID {q_id} ({branch} - {topic}) Step {s_num}:")
                print(f"      Written: {q3_v} + 1.5({iqr_v}) = {bound_v}  (Actual: {expected_b:.2f})")
                mismatches += 1

print("\n" + "=" * 70)
print(f"AUDIT COMPLETE: Total arithmetic formula mismatches flagged: {mismatches}")
print("=" * 70)
conn.close()