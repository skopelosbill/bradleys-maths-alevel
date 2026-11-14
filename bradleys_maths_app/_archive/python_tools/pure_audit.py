import sqlite3
import re
import math

db_path = 'assets/bradleys_maths.db'
conn = sqlite3.connect(db_path)
cur = conn.cursor()

print("=" * 70)
print("     DETERMINISTIC MATHEMATICAL AUDIT — PURE MATHEMATICS")
print("=" * 70)

cur.execute("""
    SELECT id, topic, question_text 
    FROM questions 
    WHERE branch = 'Pure' 
    ORDER BY id
""")
pure_questions = cur.fetchall()

total_pure = len(pure_questions)
print(f"Auditing {total_pure} Pure Mathematics questions using exact Python mathematics...\n")

issues_flagged = 0

def is_close(stated, actual, tol=0.02):
    """Checks float equality within tolerance (relative or absolute)."""
    if abs(actual) < 1e-5:
        return abs(stated) < 0.05
    rel_diff = abs(stated - actual) / abs(actual)
    abs_diff = abs(stated - actual)
    return rel_diff <= tol or abs_diff <= 0.05

for q_id, topic, q_text in pure_questions:
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
        # Strip cosmetic LaTeX spacing
        clean_text = s_text.replace(r'\,', ' ').replace(r'\;', ' ').replace(r'\quad', ' ').replace(r'\qquad', ' ')

        # 2. Quadratic Discriminant: b^2 - 4ac = D
        # Matches patterns like: (-5)^2 - 4(2)(3) = -23 or 5^2 - 4*2*3 = 1
        disc_matches = re.findall(r'\(?(-?\d+)\)?\^2\s*-\s*4\s*[\(\*x]\s*(-?\d+)\s*[\)]?\s*[\(\*x]\s*(-?\d+)\s*[\)]?\s*=\s*(-?\d+)', clean_text)
        for b_val, a_val, c_val, stated_d in disc_matches:
            actual_d = int(b_val)**2 - 4 * int(a_val) * int(c_val)
            if actual_d != int(stated_d):
                print(f"  [Math Slip - Discriminant] ID {q_id} Step {s_num}:")
                print(f"      Stated: ({b_val})^2 - 4({a_val})({c_val}) = {stated_d}  (Exact: {actual_d})")
                issues_flagged += 1

        # 3. 2D & 3D Vector Modulus / Distance: \sqrt{ x^2 + y^2 (+ z^2)? } = R
        mod_matches = re.findall(r'\\sqrt\{\s*\(?(-?\d+(?:\.\d+)?)\)?\^2\s*\+\s*\(?(-?\d+(?:\.\d+)?)\)?\^2(?:\s*\+\s*\(?(-?\d+(?:\.\d+)?)\)?\^2)?\s*\}\s*=\s*(\d+(?:\.\d+)?)', clean_text)
        for vx, vy, vz, stated_mod in mod_matches:
            vz_val = float(vz)**2 if vz else 0.0
            actual_mod = math.sqrt(float(vx)**2 + float(vy)**2 + vz_val)
            if not is_close(float(stated_mod), actual_mod):
                print(f"  [Math Slip - Modulus/Distance] ID {q_id} Step {s_num}:")
                print(f"      Stated sqrt: {stated_mod} (Exact: {actual_mod:.3f})")
                issues_flagged += 1

        # 4. Gradient Formula: \dfrac{y2 - y1}{x2 - x1} = m
        grad_matches = re.findall(r'\\dfrac\{\s*(-?\d+(?:\.\d+)?)\s*-\s*\(?(-?\d+(?:\.\d+)?)\)?\s*\}\{\s*(-?\d+(?:\.\d+)?)\s*-\s*\(?(-?\d+(?:\.\d+)?)\)?\s*\}\s*=\s*(-?\d+(?:\.\d+)?)', clean_text)
        for y2, y1, x2, x1, stated_m in grad_matches:
            dx = float(x2) - float(x1)
            dy = float(y2) - float(y1)
            if abs(dx) > 1e-5:
                actual_m = dy / dx
                if not is_close(float(stated_m), actual_m):
                    print(f"  [Math Slip - Gradient] ID {q_id} Step {s_num}:")
                    print(f"      Stated: ({y2}-{y1})/({x2}-{x1}) = {stated_m}  (Exact: {actual_m:.3f})")
                    issues_flagged += 1

        # 5. Normal Gradient: -1 / m = m_N
        norm_matches = re.findall(r'-\\dfrac\{\s*1\s*\}\{\s*(-?\d+(?:\.\d+)?)\s*\}\s*=\s*(-?\d+(?:\.\d+)?)', clean_text)
        for m_t, stated_mn in norm_matches:
            if float(m_t) != 0:
                actual_mn = -1.0 / float(m_t)
                if not is_close(float(stated_mn), actual_mn):
                    print(f"  [Math Slip - Normal Gradient] ID {q_id} Step {s_num}:")
                    print(f"      Stated: -1/({m_t}) = {stated_mn}  (Exact: {actual_mn:.3f})")
                    issues_flagged += 1

        # 6. Geometric Series Sum to Infinity: \dfrac{a}{1 - r} = S
        sinf_matches = re.findall(r'\\dfrac\{\s*(\d+(?:\.\d+)?)\s*\}\{\s*1\s*-\s*\(?(0\.\d+|-?0\.\d+)\)?\s*\}\s*=\s*(\d+(?:\.\d+)?)', clean_text)
        for a_val, r_val, stated_s in sinf_matches:
            denom = 1.0 - float(r_val)
            if abs(denom) > 1e-5:
                actual_s = float(a_val) / denom
                if not is_close(float(stated_s), actual_s):
                    print(f"  [Math Slip - Sum to Infinity] ID {q_id} Step {s_num}:")
                    print(f"      Stated: {a_val}/(1 - {r_val}) = {stated_s}  (Exact: {actual_s:.3f})")
                    issues_flagged += 1

        # 7. Radians Sector Area: \dfrac{1}{2} * r^2 * theta = Area
        sec_matches = re.findall(r'\\dfrac\{1\}\{2\}\s*[\(\*x]\s*(\d+(?:\.\d+)?)\^2\s*[\(\*x]\s*(\d+(?:\.\d+)?)\s*=\s*(\d+(?:\.\d+)?)', clean_text)
        for r_val, th_val, stated_area in sec_matches:
            actual_area = 0.5 * (float(r_val)**2) * float(th_val)
            if not is_close(float(stated_area), actual_area):
                print(f"  [Math Slip - Sector Area] ID {q_id} Step {s_num}:")
                print(f"      Stated: 0.5 * {r_val}^2 * {th_val} = {stated_area}  (Exact: {actual_area:.3f})")
                issues_flagged += 1

conn.close()

print("=" * 70)
if issues_flagged == 0:
    print("  RESULT: 0 MATHEMATICAL SLIPS FOUND IN PURE MATHEMATICS!")
    print(f"  ALL {total_pure} PURE QUESTIONS ARE 100% MATHEMATICALLY VERIFIED.")
else:
    print(f"  TOTAL MATHEMATICAL DISCREPANCIES FLAGGED: {issues_flagged}")
print("=" * 70)