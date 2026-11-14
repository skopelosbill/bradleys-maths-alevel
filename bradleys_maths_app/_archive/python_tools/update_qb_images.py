import os
import re
import shutil

# --- CONFIGURATION ---
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

TARGETS = [
    {
        "name": "Mechanics",
        "folder": os.path.join(BASE_DIR, "Mech_QB"),
        "files": [f"Mech_{i}.js" for i in range(1, 7)],
        "old_subfolder": "Mechanics_pngs",
        "new_subfolder": "Mechanics_SVGs",
        "svg_dir": os.path.join(BASE_DIR, "images", "Mechanics_SVGs")
    },
    {
        "name": "Statistics",
        "folder": os.path.join(BASE_DIR, "Stats_QB"),
        "files": [f"Stats_{i}.js" for i in range(1, 7)],
        # Catch both Statistics_pngs and Stats_pngs just in case
        "old_patterns": [r"images/Statistics_pngs/", r"images/Stats_pngs/"],
        "new_subfolder": "Statistics_SVGs",
        "svg_dir": os.path.join(BASE_DIR, "images", "Statistics_SVGs")
    }
]

def run_update():
    print("=" * 60)
    print("  BRADLEY'S MATHS: QB IMAGE VECTOR REFACTOR")
    print("=" * 60)

    grand_total_replacements = 0
    missing_svg_count = 0

    for target in TARGETS:
        print(f"\n>>> Processing {target['name']}...")
        svg_dir = target["svg_dir"]
        
        if not os.path.exists(svg_dir):
            print(f"[!] ERROR: Target SVG directory not found: {svg_dir}")
            continue

        available_svgs = set(os.listdir(svg_dir))
        print(f"    Target directory verified ({len(available_svgs)} SVGs on disk).")

        for file_name in target["files"]:
            file_path = os.path.join(target["folder"], file_name)
            if not os.path.exists(file_path):
                print(f"    [!] Skipping {file_name} (file not found)")
                continue

            # 1. Create a safety backup
            backup_path = file_path + ".bak"
            shutil.copy2(file_path, backup_path)

            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()

            # 2. Perform replacements
            modified_content = content
            file_replacements = 0

            if target["name"] == "Mechanics":
                # Matches: images/Mechanics_pngs/(id).png
                pattern = re.compile(r"images/Mechanics_pngs/([a-zA-Z0-9_\-]+)\.png", re.IGNORECASE)
                
                # Check all referenced files exist in SVG folder
                for m in pattern.finditer(content):
                    svg_name = f"{m.group(1)}.svg"
                    if svg_name not in available_svgs:
                        print(f"      [!] WARNING: {svg_name} referenced in {file_name} but missing in Mechanics_SVGs!")
                        missing_svg_count += 1

                modified_content, file_replacements = pattern.subn(r"images/Mechanics_SVGs/\1.svg", content)

            elif target["name"] == "Statistics":
                # Matches: images/Statistics_pngs/(id).png or images/Stats_pngs/(id).png
                pattern = re.compile(r"images/(?:Statistics|Stats)_pngs/([a-zA-Z0-9_\-]+)\.png", re.IGNORECASE)

                for m in pattern.finditer(content):
                    svg_name = f"{m.group(1)}.svg"
                    if svg_name not in available_svgs:
                        print(f"      [!] WARNING: {svg_name} referenced in {file_name} but missing in Statistics_SVGs!")
                        missing_svg_count += 1

                modified_content, file_replacements = pattern.subn(r"images/Statistics_SVGs/\1.svg", content)

            # 3. Save modified file
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(modified_content)

            print(f"    - {file_name}: {file_replacements} image references updated to .svg")
            grand_total_replacements += file_replacements

    print("\n" + "=" * 60)
    print(f"  REFACTOR COMPLETE")
    print(f"  Total replacements made: {grand_total_replacements}")
    print(f"  Missing SVGs detected:   {missing_svg_count}")
    print(f"  Safety backups created:  *.js.bak")
    print("=" * 60)

if __name__ == "__main__":
    run_update()