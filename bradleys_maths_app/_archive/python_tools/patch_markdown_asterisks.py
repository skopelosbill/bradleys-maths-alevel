import sqlite3
import re

DB_PATH = 'assets/bradleys_maths.db'
conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()

print("=" * 70)
print("     CONVERTING MARKDOWN ASTERISKS TO HTML (STRONG & EM)")
print("=" * 70)

def convert_markdown(text):
    if not text or ('*' not in text):
        return text
    
    math_blocks = []
    def save_math(match):
        math_blocks.append(match.group(0))
        return f"___MATH_SHIELD_{len(math_blocks)-1}___"
    
    # 1. Shield all math blocks so no formula is ever touched
    masked = re.sub(r'\$\$.*?\$\$', save_math, text, flags=re.DOTALL)
    masked = re.sub(r'\\begin\{.*?\}.*?\\end\{.*?\}', save_math, masked, flags=re.DOTALL)
    masked = re.sub(r'(?<!\$)\$(?!\$).*?(?<!\$)\$(?!\$)', save_math, masked, flags=re.DOTALL)
    
    # 2. Convert Bold **text** -> <strong>text</strong>
    masked = re.sub(r'\*\*([^\*\n]+?)\*\*', r'<strong>\1</strong>', masked)
    
    # 3. Convert Italic *word* -> <em>word</em>
    masked = re.sub(r'(?<!\*)\*([a-zA-Z\s\(\)\-]{2,40})\*(?!\*)', r'<em>\1</em>', masked)
    
    # 4. Restore math blocks
    for idx, mb in enumerate(math_blocks):
        masked = masked.replace(f"___MATH_SHIELD_{idx}___", mb)
        
    return masked

tables = [
    ("questions", "question_text", "id"),
    ("question_steps", "step_text", "id"),
    ("question_options", "ans_text", "id"),
    ("question_options", "feedback_text", "id"),
    ("bradley_insights", "content", "question_id")
]

total_updated = 0

for tbl, col, id_col in tables:
    cur.execute(f"SELECT {id_col}, {col} FROM {tbl}")
    rows = cur.fetchall()
    tbl_updates = 0
    for row_id, val in rows:
        if not val or '*' not in val:
            continue
        cleaned = convert_markdown(val)
        if cleaned != val:
            cur.execute(f"UPDATE {tbl} SET {col} = ? WHERE {id_col} = ?", (cleaned, row_id))
            tbl_updates += 1
            total_updated += 1
    print(f"[{tbl}.{col}] Converted {tbl_updates} records")

conn.commit()
conn.close()

print("=" * 70)
print(f"ALL MARKDOWN ASTERISKS CONVERTED TO HTML! Total records updated: {total_updated}")
print("=" * 70)