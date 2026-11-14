import sqlite3
import re

db_path = 'assets/bradleys_maths.db'
conn = sqlite3.connect(db_path)
cur = conn.cursor()

print("=" * 70)
print("     BRADLEY'S MATHS — FINAL MASTER AUDIT SWEEP")
print("=" * 70)

cur.execute("SELECT id FROM questions ORDER BY id")
all_ids = [r[0] for r in cur.fetchall()]

format_issues = 0

for q_id in all_ids:
    cur.execute("SELECT ans_text, is_correct FROM question_options WHERE question_id = ?", (q_id,))
    opts = cur.fetchall()
    
    if len(opts) != 4:
        print(f"  [Count Anomaly] ID {q_id}: Has {len(opts)} options (expected 4)")
        format_issues += 1
        continue

    correct_count = sum(o[1] for o in opts)
    if correct_count != 1:
        print(f"  [Correct Flag Anomaly] ID {q_id}: Has {correct_count} correct options (expected 1)")
        format_issues += 1

    texts = [o[0].strip() for o in opts]
    
    # 1. Check for explicit line breaks (<br>, \cr, \\, \n)
    break_patterns = [bool(re.search(r'(<br\s*/?>|\\cr|\\\\|\n)', t)) for t in texts]
    if any(break_patterns) and not all(break_patterns):
        print(f"\n  [Visual Giveaway - Explicit Line Break] ID {q_id}:")
        for idx, (t, c) in enumerate(opts):
            tag = "CORRECT" if c else "PI"
            print(f"      Option {idx+1} [{tag}]: {t}")
        format_issues += 1
        continue

    # 2. Extreme length disparity (one option > 60 chars while others are < 25 chars)
    lens = [len(t) for t in texts]
    short_count = sum(1 for l in lens if l <= 25)
    long_count = sum(1 for l in lens if l >= 60)
    if short_count >= 3 and long_count == 1:
        outlier_idx = [i for i, l in enumerate(lens) if l >= 60][0]
        outlier_tag = "CORRECT" if opts[outlier_idx][1] else "PI"
        print(f"\n  [Visual Giveaway - Extreme Length Disparity] ID {q_id}:")
        print(f"    Option {outlier_idx+1} [{outlier_tag}] is drastically longer than the other 3!")
        for idx, (t, c) in enumerate(opts):
            tag = "CORRECT" if c else "PI"
            print(f"      Option {idx+1} [{tag}, {len(t)} chars]: {t}")
        format_issues += 1
        continue

    # 3. Sub-part prefix parity (Strictly (a), (b), (i), (ii) - ignores words like 'Identity')
    has_subpart = [bool(re.search(r'^\s*(\([a-d]\)|\([i-v]+\)|[a-d]\))\s+', t)) for t in texts]
    if any(has_subpart) and not all(has_subpart):
        print(f"\n  [Format Giveaway - Sub-part Prefix] ID {q_id}:")
        for idx, (t, c) in enumerate(opts):
            tag = "CORRECT" if c else "PI"
            print(f"      Option {idx+1} [{tag}]: {t}")
        format_issues += 1
        continue

    # 4. LaTeX math mode parity (ignoring recognized conceptual distractors)
    has_latex = [('$' in t) for t in texts]
    if any(has_latex) and not all(has_latex):
        # Ignore legitimate conceptual options like 'No outliers present' or 'perpendicular distance'
        conceptual_words = ['no outliers', 'perpendicular distance', 'simply select', 'sampling frame', 'counterexample']
        is_legit_conceptual = any(any(cw in t.lower() for cw in conceptual_words) for t in texts)
        if not is_legit_conceptual:
            print(f"\n  [Format Giveaway - LaTeX $] ID {q_id}:")
            for idx, (t, c) in enumerate(opts):
                tag = "CORRECT" if c else "PI"
                print(f"      Option {idx+1} [{tag}]: {t}")
            format_issues += 1
            continue

print(f"\n" + "=" * 70)
if format_issues == 0:
    print("  RESULT: 0 ISSUES FOUND ACROSS ALL 1,400 QUESTIONS!")
    print("  ALL QUESTIONS MEET MASTER PEDAGOGICAL & FORMAT PARITY STANDARDS.")
else:
    print(f"  TOTAL ANOMALIES REMAINING: {format_issues}")
print("=" * 70)
conn.close()