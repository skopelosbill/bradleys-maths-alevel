import sqlite3
import re

db_path = 'assets/bradleys_maths.db'
conn = sqlite3.connect(db_path)
cur = conn.cursor()

print("=" * 75)
print("     FORENSIC DIAGNOSIS: BATCH 1 (QUESTIONS 004001 TO 004050)")
print("=" * 75)

# Fetch all 50 questions
cur.execute("""
    SELECT id, topic, question_text 
    FROM questions 
    WHERE id >= '004001' AND id <= '004050' 
    ORDER BY id
""")
questions = cur.fetchall()

syntax_issues = []
parity_issues = []

for q_id, topic, q_text in questions:
    # -------------------------------------------------------------
    # 1. LATEX SYNTAX AUDIT ON QUESTION & STEPS
    # -------------------------------------------------------------
    cur.execute("SELECT step_number, step_text FROM question_steps WHERE question_id = ? ORDER BY step_number", (q_id,))
    steps = cur.fetchall()
    
    # Check question text
    if q_text.count('$$') % 2 != 0:
        syntax_issues.append((q_id, "Question Stem", "Odd count of $$ delimiters"))
        
    for s_num, s_text in steps:
        # Check odd $$ count
        if s_text.count('$$') % 2 != 0:
            syntax_issues.append((q_id, f"Step {s_num}", "Odd count of $$ delimiters"))
            
        # Check nested $$ inside aligned/matrix environments
        aligned_blocks = re.findall(r'\\begin\{(aligned|matrix|pmatrix|bmatrix)\}(.*?)\\end\{\1\}', s_text, re.DOTALL)
        for env_type, inner in aligned_blocks:
            if '$$' in inner:
                syntax_issues.append((q_id, f"Step {s_num}", f"Rogue $$ nested inside \\begin{{{env_type}}}"))

    # -------------------------------------------------------------
    # 2. OPTION PARITY & ODDE-ONE-OUT AUDIT
    # -------------------------------------------------------------
    cur.execute("SELECT id, ans_text, is_correct FROM question_options WHERE question_id = ?", (q_id,))
    options = cur.fetchall()
    
    correct_opts = [o[1] for o in options if o[2] == 1]
    pi_opts = [o[1] for o in options if o[2] == 0]
    
    if correct_opts and pi_opts:
        corr = correct_opts[0]
        
        # Check odd count of $$ in options
        for idx, (oid, opt_txt, is_c) in enumerate(options):
            if opt_txt.count('$$') % 2 != 0:
                syntax_issues.append((q_id, f"Option {idx+1}", "Odd count of $$ delimiters"))

        # Check for trailing word giveaways (e.g. 'verified', 'units', etc.)
        corr_trailing_text = re.findall(r'\\text\{([a-zA-Z\s]+)\}\s*(?:\$\$)?\s*$', corr)
        if corr_trailing_text:
            word = corr_trailing_text[-1].strip().lower()
            # If word is in correct option but NOT in ANY of the PIs
            if not any(word in pi.lower() for pi in pi_opts):
                parity_issues.append((q_id, f"Trailing giveaway '\\text{{{word}}}' in Correct Option only"))
                
        # Check plain word 'verified' giveaway
        if 'verified' in corr.lower() and not any('verified' in pi.lower() for pi in pi_opts):
            parity_issues.append((q_id, "Word 'verified' in Correct Option but missing in all PIs"))

        # Check sub-part tag parity: e.g. <strong>(a)</strong>, <strong>(b)</strong>
        corr_parts = set(re.findall(r'<strong>\([a-z]\)</strong>', corr))
        for pi_idx, pi in enumerate(pi_opts):
            pi_parts = set(re.findall(r'<strong>\([a-z]\)</strong>', pi))
            if corr_parts != pi_parts:
                parity_issues.append((q_id, f"Sub-part label mismatch: Correct has {corr_parts}, PI {pi_idx+1} has {pi_parts}"))
                break

print("\n--- 1. LATEX SYNTAX / PARSER ANOMALIES ---")
if not syntax_issues:
    print("  [CLEAN] No LaTeX syntax or parser crashes found.")
else:
    for q_id, loc, desc in syntax_issues:
        print(f"  [SYNTAX BUG] ID {q_id} ({loc}): {desc}")

print("\n--- 2. OPTION PARITY / ODDE-ONE-OUT DISCREPANCIES ---")
if not parity_issues:
    print("  [CLEAN] No option format asymmetries found.")
else:
    for q_id, desc in parity_issues:
        print(f"  [PARITY BUG] ID {q_id}: {desc}")

# -------------------------------------------------------------
# 3. GROUP PEDAGOGY / DIVERSITY SUMMARY (10 GROUPS)
# -------------------------------------------------------------
print("\n" + "=" * 75)
print("     GROUP STEM SUMMARIES (10 GROUPS OF 5)")
print("=" * 75)

for group_start in range(4001, 4051, 5):
    group_ids = [f"{i:06d}" for i in range(group_start, group_start + 5)]
    print(f"\n>>> GROUP {group_ids[0]} - {group_ids[-1]}:")
    
    for q_id in group_ids:
        cur.execute("SELECT question_text FROM questions WHERE id = ?", (q_id,))
        row = cur.fetchone()
        if row:
            raw_text = row[0].replace('<br>', ' ').replace('\n', ' ')
            # Extract first 110 characters or the primary equation
            preview = raw_text[:110] + ('...' if len(raw_text) > 110 else '')
            print(f"    ID {q_id}: {preview}")

conn.close()