import os
import re
import json

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
QB_DIRS = ['Pure_QB', 'Mech_QB', 'Stats_QB', 'Comp_QB']

def clean_final_answer(raw_step):
    """Strips Final Answer labels to isolate the pure mathematical answer."""
    cleaned = re.sub(r'</?strong>', '', raw_step)
    cleaned = re.sub(r'^Final Answer:?', '', cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r'<br\s*/?>', ' ', cleaned)
    return cleaned.strip()

def extract_subparts(text):
    """Finds all (a), (b), (c), (d) markers in the text."""
    return re.findall(r'\(([a-d])\)', text)

def audit_file(file_path):
    issues = []
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Extract the JSON array from the .js assignment (e.g. const data = [...];)
        match = re.search(r'\[\s*\{.*\}\s*\]', content, re.DOTALL)
        if not match:
            return [f"Could not parse JSON array in {os.path.basename(file_path)}"]

        questions = json.loads(match.group(0))

        for q in questions:
            q_id = q.get('id', 'Unknown')
            topic = q.get('topic', 'Unknown')
            steps = q.get('steps', [])
            pi_options = q.get('pi_options', [])

            if not steps:
                issues.append(f"Q {q_id} ({topic}): No steps found.")
                continue

            final_raw = steps[-1]
            final_ans = clean_final_answer(final_raw)
            final_parts = extract_subparts(final_ans)

            # Check 1: Leading punctuation / colon artifact
            if final_ans.startswith(':') or final_ans.startswith('-'):
                issues.append(f"Q {q_id} ({topic}): Final answer has stray leading punctuation: '{final_ans[:10]}...'")

            # Check 2: Giveaway phrases in Final Answer
            giveaways = ['proof completed', 'as required', 'shown', 'q.e.d.']
            for g in giveaways:
                if g in final_ans.lower():
                    issues.append(f"Q {q_id} ({topic}): Final answer contains giveaway phrase '{g}':\n   -> {final_ans}")

            # Check 3: Symmetrical subparts against the 3 PIs
            if final_parts:
                for idx, pi in enumerate(pi_options):
                    pi_ans = pi.get('ans', '')
                    pi_parts = extract_subparts(pi_ans)

                    if final_parts != pi_parts:
                        issues.append(
                            f"Q {q_id} ({topic}): Subpart mismatch!\n"
                            f"   - Final Answer parts: {final_parts}\n"
                            f"   - PI #{idx+1} parts:       {pi_parts}"
                        )
                        break

    except Exception as e:
        issues.append(f"Error reading {file_path}: {e}")

    return issues

def main():
    print("=" * 60)
    print("BRADLEY'S MATHS: MASTER QUESTION BANK AUDIT")
    print("=" * 60)

    total_issues = 0
    all_reports = []

    for qb in QB_DIRS:
        target_dir = os.path.join(BASE_DIR, qb)
        if not os.path.exists(target_dir):
            print(f"Skipping {qb} (directory not found at {target_dir})")
            continue

        js_files = sorted([f for f in os.listdir(target_dir) if f.endswith('.js')])
        print(f"\nScanning {qb} ({len(js_files)} files)...")

        for js_file in js_files:
            file_path = os.path.join(target_dir, js_file)
            issues = audit_file(file_path)
            if issues:
                total_issues += len(issues)
                report_block = f"\n[{js_file}] ({len(issues)} issues found):"
                print(report_block)
                all_reports.append(report_block)
                for iss in issues:
                    print(f"  • {iss}")
                    all_reports.append(f"  • {iss}")

    print("\n" + "=" * 60)
    print(f"AUDIT COMPLETE: {total_issues} issues flagged across all files.")
    print("=" * 60)

    with open(os.path.join(BASE_DIR, 'audit_report.txt'), 'w', encoding='utf-8') as f:
        f.write("\n".join(all_reports))
    print("Full report saved to audit_report.txt")

if __name__ == '__main__':
    main()