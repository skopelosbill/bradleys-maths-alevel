import json
import glob

def check_remaining_calculus():
    files = glob.glob("Pure_*.js")
    print(f"{'Topic':<30} | {'Subtopics'}")
    print("-" * 60)
    for file_path in files:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            start, end = content.find('['), content.rfind(']') + 1
            if start == -1: continue
            data = json.loads(content[start:end])
            for item in data:
                if item.get("major_area") == "Calculus":
                    print(f"{item.get('topic', 'N/A'):<30} | {item.get('subtopic', [])}")

if __name__ == "__main__":
    check_remaining_calculus()