import sqlite3
import re

db_path = 'assets/bradleys_maths.db'
conn = sqlite3.connect(db_path)
cur = conn.cursor()

print("=" * 60)
print("     APPLYING BATCH 1 OPTION FIXES")
print("=" * 60)

# 1. Clean '<strong>Final Answer</strong>' from any option text
cur.execute("SELECT id, question_id, ans_text FROM question_options WHERE ans_text LIKE '%<strong>Final Answer%'")
fa_rows = cur.fetchall()
print(f"\n[1] Stripping 'Final Answer' prefixes ({len(fa_rows)} found):")
for opt_id, q_id, ans in fa_rows:
    cleaned = re.sub(r'<strong>\s*Final Answer\s*:?\s*</strong>', '', ans, flags=re.IGNORECASE).strip()
    cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (cleaned, opt_id))
    print(f"  • ID {q_id}: Cleaned -> {cleaned[:60]}")

# 2. Clean stray leading HTML tags (</strong>, <br>) from option text
cur.execute("SELECT id, question_id, ans_text FROM question_options WHERE ans_text LIKE '</strong>%' OR ans_text LIKE '<br>%'")
tag_rows = cur.fetchall()
print(f"\n[2] Stripping stray leading HTML tags ({len(tag_rows)} found):")
for opt_id, q_id, ans in tag_rows:
    cleaned = re.sub(r'^(</strong>\s*(<br\s*/?>\s*)*|<br\s*/?>\s*)', '', ans, flags=re.IGNORECASE).strip()
    cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (cleaned, opt_id))
    print(f"  • ID {q_id}: Cleaned -> {cleaned[:60]}")

# 3. Clean embedded <img> tags from options (004006 - 004010)
cur.execute("SELECT id, question_id, ans_text FROM question_options WHERE ans_text LIKE '%<img %'")
img_rows = cur.fetchall()
print(f"\n[3] Stripping embedded <img> tags from options ({len(img_rows)} found):")
for opt_id, q_id, ans in img_rows:
    cleaned = re.sub(r'<img\b[^>]*>', '', ans).strip()
    # Also strip any trailing period or double-dollar irregularities
    cleaned = cleaned.rstrip('.').strip()
    cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (cleaned, opt_id))
    print(f"  • ID {q_id}: Cleaned -> {cleaned}")

# 4. Clean leaked working paragraphs in 004586 - 004589
cur.execute("SELECT id, question_id, ans_text FROM question_options WHERE question_id IN ('004586', '004587', '004588', '004589') AND is_correct = 1")
ineq_rows = cur.fetchall()
print(f"\n[4] Trimming leaked paragraph working in inequalities ({len(ineq_rows)} found):")
for opt_id, q_id, ans in ineq_rows:
    # Extract the final $...$ expression at the end of the text
    matches = re.findall(r'\$[^$]+\$', ans)
    if matches:
        cleaned = matches[-1]
        cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (cleaned, opt_id))
        print(f"  • ID {q_id}: Cleaned -> {cleaned}")

conn.commit()
conn.close()
print("\n" + "=" * 60)
print("BATCH 1 FIXES COMMITTED SUCCESSFULLY!")
print("=" * 60)