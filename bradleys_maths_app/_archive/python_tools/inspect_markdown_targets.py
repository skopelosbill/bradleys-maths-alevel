import sqlite3
import re

DB_PATH = 'assets/bradleys_maths.db'
conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()

print("=" * 70)
print("     INSPECTING ALL MARKDOWN BOLD AND ITALIC OCCURRENCES")
print("=" * 70)

# Matches **text**
md_bold = re.compile(r'\*\*([^\*\n]+?)\*\*')

# Matches *word* (outside of LaTeX math blocks)
md_italic = re.compile(r'(?<!\*)\*([a-zA-Z\s\(\)\-]{2,40})\*(?!\*)')

tables = [
    ("questions", "question_text", "id"),
    ("question_steps", "step_text", "question_id"),
    ("question_options", "ans_text", "question_id"),
    ("question_options", "feedback_text", "question_id"),
    ("bradley_insights", "content", "question_id")
]

bold_found = []
italic_found = []

for tbl, col, id_col in tables:
    cur.execute(f"SELECT {id_col}, {col} FROM {tbl}")
    for q_id, txt in cur.fetchall():
        if not txt:
            continue
        
        # 1. Find bold
        for m in md_bold.finditer(txt):
            bold_found.append((tbl, q_id, m.group(0), m.group(1)))
            
        # 2. Find italic (strip math blocks first so we never match math)
        clean = re.sub(r'\$\$.*?\$\$', '', txt, flags=re.DOTALL)
        clean = re.sub(r'\\begin\{.*?\}.*?\\end\{.*?\}', '', clean, flags=re.DOTALL)
        clean = re.sub(r'\$[^\$]+?\$', '', clean)
        
        for m in md_italic_pattern.finditer(clean) if 'md_italic_pattern' in locals() else md_italic.finditer(clean):
            val = m.group(1).strip()
            if val and not val.startswith('='):
                italic_found.append((tbl, q_id, m.group(0), val))

conn.close()

print(f"\n1. MARKDOWN BOLD (Total: {len(bold_found)}):")
for tbl, q_id, raw, word in bold_found:
    print(f"   [{tbl} {q_id}] {raw}  -->  <strong>{word}</strong>")

print(f"\n2. MARKDOWN ITALIC (Total: {len(italic_found)}):")
for tbl, q_id, raw, word in italic_found[:25]: # Show first 25 samples
    print(f"   [{tbl} {q_id}] {raw}  -->  <em>{word}</em>")
if len(italic_found) > 25:
    print(f"   ... and {len(italic_found) - 25} more identical word patterns.")

print("=" * 70)