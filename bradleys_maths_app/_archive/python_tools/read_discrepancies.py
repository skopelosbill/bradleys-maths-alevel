with open('math_audit_discrepancies.txt', 'r', encoding='utf-8') as f:
    content = f.read()

entries = content.split('------------------------------------------------------------')
print(f"Total discrepancies logged so far: {len(entries) - 1}\n")

# Print the first 5 discrepancies
for i, entry in enumerate(entries[:6]):
    if entry.strip():
        print(f"=== ENTRY {i+1} ===")
        print(entry.strip())
        print("\n" + "="*50 + "\n")