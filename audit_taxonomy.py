import json
import os
from collections import defaultdict

JSON_PATH = os.path.join("bradleys_maths_app", "assets", "questions.json")
OUTPUT_FILE = "taxonomy_audit.txt"

def clean_field(val):
    if isinstance(val, list):
        return ", ".join(str(x) for x in val)
    if val is None:
        return "Unknown"
    return str(val).strip()

def run_audit():
    if not os.path.exists(JSON_PATH):
        print(f"[!] Error: {JSON_PATH} not found.")
        return

    with open(JSON_PATH, "r", encoding="utf-8") as f:
        data = json.load(f)

    # Structure: Branch -> Level -> Major Area -> Topic -> Count
    tree = defaultdict(lambda: defaultdict(lambda: defaultdict(lambda: defaultdict(int))))
    anomalies = []

    for q in data:
        qid = q.get("id", "UNKNOWN")
        branch = clean_field(q.get("branch"))
        level = clean_field(q.get("level"))
        major_area = clean_field(q.get("major_area"))
        
        # Check if topic was saved as a list
        raw_topic = q.get("topic")
        if isinstance(raw_topic, list):
            anomalies.append(f"ID {qid}: 'topic' is a list: {raw_topic}")
            topic = clean_field(raw_topic)
        else:
            topic = clean_field(raw_topic)

        tree[branch][level][major_area][topic] += 1

    # Write clean hierarchical report
    with open(OUTPUT_FILE, "w", encoding="utf-8") as out:
        out.write("============================================================\n")
        out.write("  BRADLEY'S MATHS: MASTER TAXONOMY AUDIT (1400 QUESTIONS)   \n")
        out.write("============================================================\n\n")

        for branch, levels in sorted(tree.items()):
            branch_total = sum(
                cnt for lvls in levels.values() for mas in lvls.values() for cnt in mas.values()
            )
            out.write(f"\n{'='*50}\n")
            out.write(f"  BRANCH: {branch.upper()} ({branch_total} Questions)\n")
            out.write(f"{'='*50}\n")

            for level, major_areas in sorted(levels.items()):
                level_total = sum(cnt for mas in major_areas.values() for cnt in mas.values())
                out.write(f"\n  [{level} Level] ({level_total} Questions)\n")
                out.write(f"  {'-'*40}\n")

                for major_area, topics in sorted(major_areas.items()):
                    ma_total = sum(topics.values())
                    out.write(f"    * {major_area} ({ma_total} Qs)\n")
                    for topic, count in sorted(topics.items()):
                        out.write(f"        - {topic} [{count} Qs]\n")

        if anomalies:
            out.write("\n\n" + "="*50 + "\n")
            out.write(f"  ANOMALIES DETECTED ({len(anomalies)})\n")
            out.write("="*50 + "\n")
            for a in anomalies:
                out.write(f"  [!] {a}\n")

    print(f"[OK] Audit complete! Report written to: {OUTPUT_FILE}")
    print(f"Total questions mapped: {len(data)}")
    if anomalies:
        print(f"Notice: {len(anomalies)} format anomalies detected and logged at the bottom of the report.")

if __name__ == "__main__":
    run_audit()