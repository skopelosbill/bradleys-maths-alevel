import os
import re

# Target folders relative to the root
TARGET_FOLDERS = ["Pure_QB", "Mech_QB", "Stats_QB"]

# Regex to match the "id" line and optionally an existing "group_id" line immediately after
ID_PATTERN = re.compile(
    r'([ \t]*)"id":\s*"(\d{6})",(\r?\n)(?:[ \t]*"group_id":\s*"\d{6}",\r?\n)?'
)

def compute_group_id(id_str: str) -> str:
    num = int(id_str)
    group_num = ((num - 1) // 5) * 5 + 1
    return f"{group_num:06d}"

def process_file(filepath: str) -> int:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    count = 0

    def replacer(match):
        nonlocal count
        indent = match.group(1)
        id_str = match.group(2)
        newline = match.group(3)
        group_id = compute_group_id(id_str)
        count += 1
        return f'{indent}"id": "{id_str}",{newline}{indent}"group_id": "{group_id}",{newline}'

    updated_content = ID_PATTERN.sub(replacer, content)

    if count > 0:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(updated_content)

    return count

def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    total_files = 0
    total_questions = 0

    print("--- Starting Group ID Backfill ---")

    for folder in TARGET_FOLDERS:
        folder_path = os.path.join(base_dir, folder)
        if not os.path.exists(folder_path):
            continue

        for filename in sorted(os.listdir(folder_path)):
            if filename.endswith(".js"):
                file_path = os.path.join(folder_path, filename)
                updated_count = process_file(file_path)
                if updated_count > 0:
                    print(f"  [✓] {folder}/{filename}: {updated_count} questions updated")
                    total_files += 1
                    total_questions += updated_count

    print("----------------------------------")
    print(f"Complete! Updated {total_questions} questions across {total_files} files.")

if __name__ == "__main__":
    main()