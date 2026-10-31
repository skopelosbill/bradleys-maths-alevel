import os
import shutil
import re

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
APP_IMAGES_DIR = os.path.join(BASE_DIR, "bradleys_maths_app", "assets", "images")

MAPPING = [
    {
        "src": r"C:\Users\user\Desktop\Bradleys Maths\A Level\latex images\Mech_png",
        "dest": os.path.join(APP_IMAGES_DIR, "Mechanics_PNGs"),
        "old_prefix": "images/Mechanics_SVGs/",
        "new_prefix": "images/Mechanics_PNGs/"
    },
    {
        "src": r"C:\Users\user\Desktop\Bradleys Maths\A Level\latex images\Pure_png",
        "dest": os.path.join(APP_IMAGES_DIR, "Pure_PNGs"),
        "old_prefix": "images/Pure_SVGs/",
        "new_prefix": "images/Pure_PNGs/"
    },
    {
        "src": r"C:\Users\user\Desktop\Bradleys Maths\A Level\latex images\Stats_png",
        "dest": os.path.join(APP_IMAGES_DIR, "Statistics_PNGs"),
        "old_prefix": "images/Statistics_SVGs/",
        "new_prefix": "images/Statistics_PNGs/"
    }
]

def migrate_assets():
    print("=" * 60)
    print("  STEP 1: COPYING PNG ASSETS TO FLUTTER APP")
    print("=" * 60)
    total_copied = 0
    for item in MAPPING:
        src = item["src"]
        dest = item["dest"]
        os.makedirs(dest, exist_ok=True)
        
        if not os.path.exists(src):
            print(f"[!] Warning: Source directory does not exist: {src}")
            continue
            
        count = 0
        for fname in os.listdir(src):
            if fname.lower().endswith(".png"):
                shutil.copy2(os.path.join(src, fname), os.path.join(dest, fname))
                count += 1
                total_copied += 1
        print(f"Copied {count} PNGs from {os.path.basename(src)} -> {os.path.basename(dest)}")

    print(f"\n[OK] Total PNG files copied into app: {total_copied}")

    print("\n" + "=" * 60)
    print("  STEP 2: UPDATING IMAGE PATHS IN QUESTION .JS FILES")
    print("=" * 60)
    
    js_files_updated = 0
    total_replacements = 0

    for root, _, files in os.walk(BASE_DIR):
        if "bradleys_maths_app" in root or ".git" in root:
            continue
        for file in files:
            if file.endswith(".js") and not file.endswith(".bak") and not file.startswith("audit"):
                file_path = os.path.join(root, file)
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()

                new_content = content
                file_replacements = 0

                for item in MAPPING:
                    old_p = item["old_prefix"]
                    new_p = item["new_prefix"]
                    
                    # Replace paths and change .svg to .png
                    pattern = re.escape(old_p) + r"([a-zA-Z0-9_\-]+)\.svg"
                    def replacer(match):
                        nonlocal file_replacements
                        file_replacements += 1
                        return f"{new_p}{match.group(1)}.png"

                    new_content = re.sub(pattern, replacer, new_content, flags=re.IGNORECASE)

                if file_replacements > 0:
                    with open(file_path, "w", encoding="utf-8") as f:
                        f.write(new_content)
                    print(f"Updated: {file:<18} -> {file_replacements} diagram references switched to PNG")
                    js_files_updated += 1
                    total_replacements += file_replacements

    print(f"\n[OK] Updated {js_files_updated} JS files with {total_replacements} total PNG references.")

    print("\n" + "=" * 60)
    print("  STEP 3: REBUILDING DATABASE & JSON ASSET")
    print("=" * 60)
    build_db_path = os.path.join(BASE_DIR, "build_db.py")
    if os.path.exists(build_db_path):
        import subprocess
        subprocess.run(["python", build_db_path], check=True)
    else:
        print("[!] build_db.py not found; please run it manually.")

if __name__ == "__main__":
    migrate_assets()