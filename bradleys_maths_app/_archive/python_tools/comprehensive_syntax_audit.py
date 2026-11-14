import sqlite3
import re
from collections import defaultdict

DB_PATH = 'assets/bradleys_maths.db'
REPORT_PATH = 'syntax_audit_report.txt'

conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()

print("=" * 75)
print("     BRADLEY'S MATHS — COMPREHENSIVE 1,400-QUESTION DEEP SYNTAX AUDIT")
print("=" * 75)

issues = defaultdict(list)

# Matches true single $ (not part of $$)
single_dollar_before_begin = re.compile(r'(?<!\$)\$(?!\$)\s*\\begin\{([a-zA-Z*]+)\}')
single_dollar_after_end = re.compile(r'\\end\{([a-zA-Z*]+)\}\s*(?<!\$)\$(?!\$)')

def check_text(q_id, location, text):
    if not text:
        return

    # 1. Check for unsupported \begin{align} (flutter_math_fork requires \begin{aligned})
    if r'\begin{align}' in text or r'\begin{align*}' in text:
        issues[q_id].append(f"[{location}] Contains unsupported '\\begin{{align}}' (must be '\\begin{{aligned}}')")

    # 2. Environment balancing check using a Stack
    env_pattern = re.compile(r'\\(begin|end)\{([a-zA-Z*]+)\}')
    stack = []
    for match in env_pattern.finditer(text):
        action, env_name = match.groups()
        if action == 'begin':
            stack.append((env_name, match.start()))
        else: # action == 'end'
            if not stack:
                issues[q_id].append(f"[{location}] Stray closing '\\end{{{env_name}}}' with no matching '\\begin'")
            else:
                last_begin, _ = stack.pop()
                if last_begin != env_name:
                    issues[q_id].append(f"[{location}] Mismatched environment: '\\begin{{{last_begin}}}' closed by '\\end{{{env_name}}}'")

    while stack:
        unclosed_env, _ = stack.pop()
        issues[q_id].append(f"[{location}] Unclosed environment: '\\begin{{{unclosed_env}}}'")

    # 3. Check for true floating single $ wrapping \begin{...}
    if single_dollar_before_begin.search(text):
        issues[q_id].append(f"[{location}] Floating single '$' immediately before '\\begin{{...'")
    if single_dollar_after_end.search(text):
        issues[q_id].append(f"[{location}] Floating single '$' immediately after '\\end{{...'")

    # 4. Check for double dollar $$ balance
    dollar_count = text.count('$$')
    if dollar_count % 2 != 0:
        issues[q_id].append(f"[{location}] Unclosed '$$' block (found {dollar_count} '$$' delimiters)")

    # 5. Check for backslashes inside pmatrix (should use \cr)
    pmatrix_blocks = re.findall(r'\\begin\{pmatrix\}(.*?)\\end\{pmatrix\}', text, re.DOTALL)
    for pblock in pmatrix_blocks:
        if ('\\\\' in pblock) and (r'\cr' not in pblock):
            issues[q_id].append(f"[{location}] Matrix contains '\\\\' row breaks instead of '\\cr'")

# ----------------------------------------------------
# 1. AUDIT QUESTIONS TABLE
# ----------------------------------------------------
cur.execute("SELECT id, question_text FROM questions ORDER BY id")
for q_id, q_text in cur.fetchall():
    check_text(q_id, "Question", q_text)

# ----------------------------------------------------
# 2. AUDIT QUESTION_STEPS TABLE
# ----------------------------------------------------
cur.execute("SELECT question_id, step_number, step_text, is_final_answer FROM question_steps ORDER BY question_id, step_number")
for q_id, s_num, s_text, is_fa in cur.fetchall():
    loc = f"Step {s_num}" if not is_fa else f"Step {s_num} (Final Answer)"
    check_text(q_id, loc, s_text)

# ----------------------------------------------------
# 3. AUDIT QUESTION_OPTIONS & FEEDBACK TABLE
# ----------------------------------------------------
cur.execute("SELECT question_id, ans_text, feedback_text, is_correct FROM question_options ORDER BY question_id")
options_by_q = defaultdict(list)
for q_id, ans, fb, is_corr in cur.fetchall():
    options_by_q[q_id].append((ans, fb, is_corr))
    check_text(q_id, "Option", ans)
    if fb:
        check_text(q_id, "Option Feedback", fb)

# Check option structural parity (\implies disparity)
for q_id, opts in options_by_q.items():
    if len(opts) == 4:
        implies_flags = [('\\implies' in o[0]) for o in opts]
        if sum(implies_flags) == 1 or sum(implies_flags) == 3:
            outlier_idx = implies_flags.index(True) if sum(implies_flags) == 1 else implies_flags.index(False)
            tag = "CORRECT" if opts[outlier_idx][2] else "PI"
            issues[q_id].append(f"[Option Parity] Structural '\\implies' disparity: Option {outlier_idx+1} [{tag}] is the odd-one-out")

# ----------------------------------------------------
# 4. AUDIT BRADLEY_INSIGHTS TABLE
# ----------------------------------------------------
cur.execute("SELECT question_id, title, content FROM bradley_insights ORDER BY question_id")
for q_id, title, content in cur.fetchall():
    check_text(q_id, "Insight Title", title)
    check_text(q_id, "Insight Content", content)

conn.close()

# ----------------------------------------------------
# REPORT GENERATION
# ----------------------------------------------------
total_flagged = len(issues)
total_anomalies = sum(len(errs) for errs in issues.values())

with open(REPORT_PATH, 'w', encoding='utf-8') as f:
    f.write("=" * 75 + "\n")
    f.write("     BRADLEY'S MATHS — MASTER SYNTAX AUDIT REPORT\n")
    f.write("=" * 75 + "\n\n")
    if total_flagged == 0:
        f.write("ALL 1,400 QUESTIONS PASSED! 0 SYNTAX OR DELIMITER ANOMALIES FOUND.\n")
    else:
        for q_id, errs in sorted(issues.items()):
            f.write(f"QUESTION ID: {q_id}\n")
            for e in errs:
                f.write(f"   • {e}\n")
            f.write("-" * 60 + "\n")

print(f"\nAUDIT COMPLETE across all 1,400 questions!")
print(f"Total Questions with flagged syntax items: {total_flagged}")
print(f"Total Anomalies logged: {total_anomalies}")
print(f"Full forensic report written to: {REPORT_PATH}")
print("=" * 75)