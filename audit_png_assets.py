import os
import json
import re

# Update these paths if they differ on your PC
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
JSON_PATH = os.path.join(BASE_DIR, "bradleys_maths_app", "assets", "questions.json")

SOURCE_PNG_DIRS = [
    r"C:\Users\user\Desktop\Bradleys Maths\A Level\latex images\Mech_png",
    r"C:\Users\user\Desktop\Bradleys Maths\A Level\latex images\Pure_png",
    r"C:\Users\user\Desktop\Bradleys Maths\A Level\latex images\Stats_png",
]

def audit_images():
    if not os.path.exists(JSON_PATH):
        print(f"[ERROR] Could not find {JSON_PATH}")
        return

    with open(JSON_PATH, "r", encoding="utf-8") as f:
        questions = json.load(f)

    # 1. Build an index of all available PNG files in your 3 source folders
    available_pngs = {}
    for folder in SOURCE_PNG_DIRS:
        if os.path.exists(folder):
            for file in os.listdir(folder):
                if file.lower().endswith(".png"):
                    available_pngs[file.lower()] = os.path.join(folder, file)
        else:
            print(f"[WARNING] Folder not found: {folder}")

    print(f"Total available PNG source files found: {len(available_pngs)}")

    # 2. Collect all images referenced in questions.json
    referenced_images = set()
    for q in questions:
        # Check 'img' field
        img = q.get("img")
        if img and isinstance(img, str) and img.strip().lower() != "false":
            referenced_images.add(os.path.basename(img.strip()))

        # Check for <img> tags in question and steps
        content_to_check = [q.get("question", "")] + (q.get("steps") or [])
        for text in content_to_check:
            for match in re.finditer(r'<img[^>]+src=["\']([^"\']+)["\']', str(text), re.I):
                referenced_images.add(os.path.basename(match.group(1).strip()))

    print(f"Total distinct diagram references in questions: {len(referenced_images)}")

    # 3. Match referenced SVGs to available PNGs
    matched = 0
    missing = []
    for ref in referenced_images:
        png_name = os.path.splitext(ref)[0].lower() + ".png"
        if png_name in available_pngs:
            matched += 1
        else:
            missing.append(ref)

    print(f"[OK] Successfully matched to PNG: {matched} / {len(referenced_images)}")
    if missing:
        print(f"[!] References without a matching PNG ({len(missing)}):")
        for m in missing[:15]:  # print first 15
            print(f"   - {m}")
        if len(missing) > 15:
            print(f"   ... and {len(missing) - 15} more.")

if __name__ == "__main__":
    audit_images()