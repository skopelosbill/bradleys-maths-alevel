import sqlite3
import re

db_path = 'assets/bradleys_maths.db'
conn = sqlite3.connect(db_path)
cur = conn.cursor()

print("=" * 70)
print("     360px MOBILE VIEWPORT WIDTH AUDIT (CARD LIMIT: 280px)")
print("=" * 70)

cur.execute("SELECT question_id, ans_text, is_correct FROM question_options")
rows = cur.fetchall()

overflow_risks = 0

for q_id, ans, is_c in rows:
    # Look for raw display math blocks $$...$$ that do not contain HTML text wrapping
    math_blocks = re.findall(r'\$\$([^\$]+)\$\$', ans)
    for block in math_blocks:
        # Strip internal LaTeX commands that don't take up visual horizontal space
        visual_str = re.sub(r'\\(text|quad|qquad|left|right|big|Big|big|Big)\b', '', block)
        visual_str = re.sub(r'[{}\\_^]', '', visual_str).strip()
        
        # If the visual math string on a single line exceeds 32 characters, flag it
        if '\cr' not in block and len(visual_str) > 32:
            tag = "CORRECT" if is_c else "PI"
            print(f"  [Width Warning] ID {q_id} [{tag}]: {len(visual_str)} chars -> {visual_str[:40]}...")
            overflow_risks += 1

print("\n" + "=" * 70)
print(f"AUDIT COMPLETE: Found {overflow_risks} math expression(s) exceeding 32 visual characters.")
print("=" * 70)
conn.close()