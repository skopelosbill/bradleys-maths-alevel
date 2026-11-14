from collections import Counter

counts = Counter()
categories = {
    "Unsupported \\begin{align}": 0,
    "Floating single $ around environments": 0,
    "Unclosed $$ block": 0,
    "Mismatched / Unclosed \\begin environment": 0,
    "Matrix \\\\ instead of \\cr": 0,
    "Option \\implies disparity": 0,
    "Other": 0
}

with open('syntax_audit_report.txt', 'r', encoding='utf-8') as f:
    for line in f:
        line = line.strip()
        if not line.startswith('•'):
            continue
        
        if r'\begin{align}' in line:
            categories["Unsupported \\begin{align}"] += 1
        elif "Floating single '$'" in line:
            categories["Floating single $ around environments"] += 1
        elif "Unclosed '$$'" in line:
            categories["Unclosed $$ block"] += 1
        elif "Mismatched environment" in line or "Unclosed environment" in line or "Stray closing" in line:
            categories["Mismatched / Unclosed \\begin environment"] += 1
        elif "Matrix contains" in line:
            categories["Matrix \\\\ instead of \\cr"] += 1
        elif "Structural '\\implies' disparity" in line:
            categories["Option \\implies disparity"] += 1
        else:
            categories["Other"] += 1

print("=" * 65)
print("     ANOMALY BREAKDOWN ACROSS THE 92 FLAGGED QUESTIONS")
print("=" * 65)
for cat, count in categories.items():
    print(f"  {cat.ljust(45)}: {count}")
print("=" * 65)