import sqlite3
import re
from difflib import SequenceMatcher

db_path = 'assets/bradleys_maths.db'
conn = sqlite3.connect(db_path)
cur = conn.cursor()

print("=" * 75)
print("     PEDAGOGICAL DIVERSITY AUDIT: ALL 280 GROUPS (1,400 QUESTIONS)")
print("=" * 75)

# Fetch all questions grouped by group_id
cur.execute("""
    SELECT group_id, id, branch, topic, question_text 
    FROM questions 
    ORDER BY group_id, id
""")
rows = cur.fetchall()

groups = {}
for g_id, q_id, branch, topic, q_txt in rows:
    if g_id not in groups:
        groups[g_id] = {'branch': branch, 'topic': topic, 'questions': []}
    groups[g_id]['questions'].append((q_id, q_txt))

conn.close()

def clean_template(text):
    """Replaces numbers and LaTeX math expressions to extract the core question template."""
    # Replace display math and inline math
    t = re.sub(r'\$\$.*?\$\$', '[MATH]', text, flags=re.DOTALL)
    t = re.sub(r'\$.*?\$', '[MATH]', t)
    # Replace standalone numbers
    t = re.sub(r'\b\d+(?:\.\d+)?\b', '[NUM]', t)
    # Strip HTML tags
    t = re.sub(r'<[^>]+>', ' ', t)
    # Normalize whitespace
    t = re.sub(r'\s+', ' ', t).strip().lower()
    return t

clone_groups = []
partial_clone_groups = []
diverse_groups = []

for g_id, data in groups.items():
    q_list = data['questions']
    if len(q_list) < 5:
        continue
        
    templates = [clean_template(q[1]) for q in q_list]
    
    # Calculate similarity between Q1 and the remaining 4 questions
    base = templates[0]
    similarities = [SequenceMatcher(None, base, other).ratio() for other in templates[1:]]
    
    # Average similarity of the group to the base question
    avg_sim = sum(similarities) / len(similarities)
    
    # Count how many are near-identical copies (similarity > 0.80)
    clone_count = sum(1 for s in similarities if s >= 0.80)
    
    if clone_count == 4:
        # All 4 other questions are copies of Q1
        clone_groups.append((g_id, data['branch'], data['topic'], avg_sim))
    elif clone_count >= 1:
        # At least one twin, but some cousins
        partial_clone_groups.append((g_id, data['branch'], data['topic'], clone_count, avg_sim))
    else:
        # High diversity across all 5 questions
        diverse_groups.append((g_id, data['branch'], data['topic'], avg_sim))

total_groups = len(groups)
print(f"Total 5-Question Groups Analyzed: {total_groups}\n")

print(f"1. PURE CLONE GROUPS (5 Identical Template Quins): {len(clone_groups)} ({len(clone_groups)/total_groups*100:.1f}%)")
print(f"2. MIXED GROUPS (Twins + Cousins):              {len(partial_clone_groups)} ({len(partial_clone_groups)/total_groups*100:.1f}%)")
print(f"3. DIVERSE COUSIN GROUPS (High Variety):        {len(diverse_groups)} ({len(diverse_groups)/total_groups*100:.1f}%)")
print("=" * 75)

print("\n--- SAMPLE OF PURE CLONE GROUPS (FIRST 15) ---")
for gid, br, top, sim in clone_groups[:15]:
    print(f"  Group {gid} [{br} - {top}]: {sim*100:.1f}% template match across all 5")

print("\n--- SAMPLE OF DIVERSE COUSIN GROUPS (FIRST 10) ---")
for gid, br, top, sim in diverse_groups[:10]:
    print(f"  Group {gid} [{br} - {top}]: {sim*100:.1f}% template match (High Cousin Variety)")

print("=" * 75)