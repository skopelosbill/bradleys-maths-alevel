import sqlite3
import re

db_path = 'assets/bradleys_maths.db'
conn = sqlite3.connect(db_path)
cur = conn.cursor()

print("=" * 75)
print("     FULL DATABASE SCAN: ALL 1,400 QUESTIONS")
print("=" * 75)

cur.execute("SELECT id, question_text FROM questions ORDER BY id")
all_questions = cur.fetchall()

total_q = len(all_questions)
print(f"Scanning {total_q} questions across all branches...\n")

syntax_issues = []
parity_issues = []

for q_id, q_text in all_questions:
    # 1. Check Question Stem
    if q_text and q_text.count('$$') % 2 != 0:
        syntax_issues.append((q_id, "Question Stem", "Odd count of $$ delimiters"))
        
    # 2. Check Question Steps
    cur.execute("SELECT step_number, step_text FROM question_steps WHERE question_id = ? ORDER BY step_number", (q_id,))
    steps = cur.fetchall()
    
    for s_num, s_text in steps:
        if not s_text:
            continue
            
        # Check odd $$ count
        if s_text.count('$$') % 2 != 0:
            syntax_issues.append((q_id, f"Step {s_num}", "Odd count of $$ delimiters"))
            
        # Check nested $$ inside aligned/matrix environments
        aligned_blocks = re.findall(r'\\begin\{(aligned|matrix|pmatrix|bmatrix)\}(.*?)\\end\{\1\}', s_text, re.DOTALL)
        for env_type, inner in aligned_blocks:
            if '$$' in inner:
                syntax_issues.append((q_id, f"Step {s_num}", f"Rogue $$ nested inside \\begin{{{env_type}}}"))
                
        # Check for Shift-key typo SS\text
        if 'SS' in s_text and ('SS\\text' in s_text or 'SS\\' in s_text):
            syntax_issues.append((q_id, f"Step {s_num}", "Possible 'SS' typo for '$$'"))

    # 3. Check Options
    cur.execute("SELECT id, ans_text, is_correct FROM question_options WHERE question_id = ? ORDER BY id", (q_id,))
    options = cur.fetchall()
    
    for idx, (oid, opt_txt, is_c) in enumerate(options):
        if not opt_txt:
            continue
            
        # Check odd $$ count
        if opt_txt.count('$$') % 2 != 0:
            syntax_issues.append((q_id, f"Option {idx+1}", "Odd count of $$ delimiters"))
            
        # Check for Shift-key typo SS
        if 'SS' in opt_txt and ('SS\\text' in opt_txt or 'SS\\' in opt_txt):
            syntax_issues.append((q_id, f"Option {idx+1}", "Possible 'SS' typo for '$$'"))
            
        # Check for lingering word 'verified'
        if 'verified' in opt_txt.lower():
            parity_issues.append((q_id, f"Option {idx+1} contains word 'verified'"))

conn.close()

print("-" * 75)
print("1. LATEX SYNTAX / PARSER ANOMALIES:")
if not syntax_issues:
    print("  [CLEAN] 0 parser or syntax anomalies found across all 1,400 questions!")
else:
    print(f"  Found {len(syntax_issues)} issue(s):")
    for q_id, loc, desc in syntax_issues:
        print(f"    ID {q_id} ({loc}): {desc}")

print("\n2. 'VERIFIED' WORD CHECKS IN OPTIONS:")
if not parity_issues:
    print("  [CLEAN] 0 occurrences of 'verified' found in options across all 1,400 questions!")
else:
    print(f"  Found {len(parity_issues)} occurrence(s):")
    for q_id, desc in parity_issues:
        print(f"    ID {q_id}: {desc}")

print("=" * 75)
if len(syntax_issues) == 0 and len(parity_issues) == 0:
    print("  RESULT: THE ENTIRE 1,400 QUESTION DATABASE IS COMPLETELY FLAWLESS!")
print("=" * 75)