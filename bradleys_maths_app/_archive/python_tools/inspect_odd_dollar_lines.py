import re

with open('odd_dollars_report.txt', 'r', encoding='utf-8') as f:
    text = f.read()

entries = text.split("-" * 60)
print("=" * 70)
print("     EXACT SNIPPETS FOR ALL 56 ODD-DOLLAR RECORDS")
print("=" * 70)

for idx, entry in enumerate(entries[:-1], 1):
    lines = entry.strip().splitlines()
    header = lines[0]
    full_text = "\n".join(lines[2:])
    
    # Strip $$ first to find the odd $
    clean = full_text.replace('$$', '')
    
    # Find the line or sentence where the odd $ sits
    chunks = re.split(r'(?:<br>|\n)+', full_text)
    bad_chunks = [c.strip() for c in chunks if c.replace('$$', '').count('$') % 2 != 0]
    
    snippet = bad_chunks[0] if bad_chunks else full_text[:100]
    # Keep snippet concise
    if len(snippet) > 110:
        snippet = snippet[:110] + "..."
    print(f"{idx:02d}. {header}")
    print(f"    Snippet: {snippet}\n")

print("=" * 70)