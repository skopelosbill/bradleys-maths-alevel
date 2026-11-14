with open('syntax_audit_report.txt', 'r', encoding='utf-8') as f:
    lines = f.readlines()

current_q = None
q_errors = []

print("=" * 70)
print("     THE 14 CRITICAL STRUCTURAL SYNTAX ISSUES")
print("=" * 70)

for line in lines:
    line_s = line.strip()
    if line_s.startswith("QUESTION ID:"):
        current_q = line_s.split(":")[1].strip()
    elif line_s.startswith("•"):
        is_critical = (
            r'\begin{align}' in line_s or
            "Unclosed '$$'" in line_s or
            "Mismatched environment" in line_s or
            "Unclosed environment" in line_s or
            "Stray closing" in line_s
        )
        if is_critical:
            print(f"ID {current_q}: {line_s.replace('•', '').strip()}")

print("=" * 70)