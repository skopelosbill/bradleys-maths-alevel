import json
import glob
from collections import Counter

def subtopic_audit(output_filename="Subtopic_Audit.md"):
    all_subtopics = []
    files = glob.glob("Pure_*.js")

    for file_path in files:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            start, end = content.find('['), content.rfind(']') + 1
            if start == -1: continue
            data = json.loads(content[start:end])
            
            for item in data:
                subs = item.get("subtopic", [])
                if isinstance(subs, list):
                    all_subtopics.extend(subs)

    counts = Counter(all_subtopics)
    
    with open(output_filename, 'w', encoding='utf-8') as md:
        md.write("# Subtopic Audit\n\n")
        md.write(f"Total Unique Subtopics: {len(counts)}\n\n")
        md.write("| Subtopic Name | Frequency |\n| :--- | :--- |\n")
        for name in sorted(counts.keys()):
            md.write(f"| {name} | {counts[name]} |\n")

    print(f"Audit complete. Open {output_filename} to see the subtopics.")

if __name__ == "__main__":
    subtopic_audit()