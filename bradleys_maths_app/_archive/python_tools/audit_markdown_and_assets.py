import sqlite3
import os
import re
from collections import defaultdict

DB_PATH = 'assets/bradleys_maths.db'
conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()

print("=" * 75)
print("     BRADLEY'S MATHS — MARKDOWN, ASSETS & INTEGRITY AUDIT")
print("=" * 75)

markdown_bold = []
markdown_italic = []
missing_images = []
unclosed_html = []
odd_single_dollars = []
structural_issues = []

# Pattern to find **text** outside of math
md_bold_pattern = re.compile(r'\*\*([^\*\n]+?)\*\*')

# Pattern to find *text* (word wrapped in single asterisks, avoiding multiplication like 2 * 3)
md_italic_pattern = re.compile(r'(?<!\*)\*([a-zA-Z0-9_\-\s]{2,40})\*(?!\*)')

def check_field(q_id, location, text):
    if not text:
        return

    # 1. Check for Markdown Bold **...**
    for m in md_bold_pattern.finditer(text):
        markdown_bold.append((q_id, location, m.group(0)))

    # 2. Check for Markdown Italic *...* (outside of LaTeX tags)
    # Strip $$...$$ and \begin...\end to avoid math symbols
    clean_no_math = re.sub(r'\$\$.*?\$\$', '', text, flags=re.DOTALL)
    clean_no_math = re.sub(r'\\begin\{.*?\}.*?\\end\{.*?\}', '', clean_no_math, flags=re.DOTALL)
    clean_no_math = re.sub(r'\$[^\$]+?\$', '', clean_no_math)
    
    for m in md_italic_pattern.finditer(clean_no_math):
        # Ignore things like bullet points "* item"
        val = m.group(1).strip()
        if val and not val.startswith('='):
            markdown_italic.append((q_id, location, m.group(0)))

    # 3. Check Image Assets on disk
    img_matches = re.findall(r'<img\s+[^>]*src=[\'"]([^\'"]+)[\'"]', text)
    for src in img_matches:
        # Resolve path relative to assets/ or project root
        asset_path = os.path.join('assets', src)
        root_path = src
        if not os.path.exists(asset_path) and not os.path.exists(root_path):
            missing_images.append((q_id, location, src))

    # 4. Check for Unclosed HTML tags: <strong> and <em>
    for tag in ['strong', 'em', 'b', 'i']:
        opens = text.count(f'<{tag}>')
        closes = text.count(f'</{tag}>')
        if opens != closes:
            unclosed_html.append((q_id, location, f"<{tag}> count ({opens}) != </{tag}> count ({closes})"))

    # 5. Check for odd counts of single $ (delimiters balance)
    # Remove double dollars $$ first
    temp = text.replace('$$', '')
    single_dollars = temp.count('$')
    if single_dollars % 2 != 0:
        odd_single_dollars.append((q_id, location, f"{single_dollars} single '$' delimiters"))

# ----------------------------------------------------
# 1. SCAN ALL TABLES
# ----------------------------------------------------
tables = [
    ("questions", "question_text", "id"),
    ("question_steps", "step_text", "question_id"),
    ("question_options", "ans_text", "question_id"),
    ("question_options", "feedback_text", "question_id"),
    ("bradley_insights", "content", "question_id")
]

for tbl, col, id_col in tables:
    cur.execute(f"SELECT {id_col}, {col} FROM {tbl}")
    for q_id, val in cur.fetchall():
        check_field(q_id, tbl, val)

# ----------------------------------------------------
# 2. STRUCTURAL INTEGRITY
# ----------------------------------------------------
cur.execute("SELECT id FROM questions")
all_q_ids = [r[0] for r in cur.fetchall()]

for q_id in all_q_ids:
    # A. Check Final Answer step exists
    cur.execute("SELECT count(*) FROM question_steps WHERE question_id = ? AND is_final_answer = 1", (q_id,))
    if cur.fetchone()[0] == 0:
        structural_issues.append((q_id, "Missing Step with is_final_answer = 1"))

    # B. Check Bradley Insight exists
    cur.execute("SELECT count(*) FROM bradley_insights WHERE question_id = ?", (q_id,))
    if cur.fetchone()[0] == 0:
        structural_issues.append((q_id, "Missing Bradley's Insight"))

    # C. Check for duplicate options
    cur.execute("SELECT ans_text FROM question_options WHERE question_id = ?", (q_id,))
    opts = [r[0].strip() for r in cur.fetchall()]
    if len(opts) != len(set(opts)):
        structural_issues.append((q_id, f"Has duplicate options in question_options: {opts}"))

conn.close()

# ----------------------------------------------------
# REPORT SUMMARY
# ----------------------------------------------------
print(f"1. Markdown Bold (**...**) Found : {len(markdown_bold)}")
print(f"2. Markdown Italic (*...*) Found : {len(markdown_italic)}")
print(f"3. Missing Image Files on Disk   : {len(missing_images)}")
print(f"4. Unclosed HTML Tags            : {len(unclosed_html)}")
print(f"5. Odd Single '$' Delimiters     : {len(odd_single_dollars)}")
print(f"6. Structural Integrity Anomalies: {len(structural_issues)}")
print("=" * 75)

# Print first few samples of any that exist
if markdown_bold:
    print("\nSAMPLE MARKDOWN BOLD (**...**):")
    for q_id, loc, val in markdown_bold[:10]:
        print(f"  [{loc} {q_id}]: {val}")

if markdown_italic:
    print("\nSAMPLE MARKDOWN ITALIC (*...*):")
    for q_id, loc, val in markdown_italic[:10]:
        print(f"  [{loc} {q_id}]: {val}")

if missing_images:
    print("\nMISSING IMAGE ASSETS:")
    for q_id, loc, src in missing_images[:10]:
        print(f"  [{loc} {q_id}] Cannot find file: {src}")

if unclosed_html:
    print("\nUNCLOSED HTML TAGS:")
    for q_id, loc, err in unclosed_html[:10]:
        print(f"  [{loc} {q_id}]: {err}")

if odd_single_dollars:
    print("\nODD SINGLE '$' DELIMITERS:")
    for q_id, loc, err in odd_single_dollars[:10]:
        print(f"  [{loc} {q_id}]: {err}")

if structural_issues:
    print("\nSTRUCTURAL ISSUES:")
    for q_id, issue in structural_issues[:10]:
        print(f"  [ID {q_id}]: {issue}")