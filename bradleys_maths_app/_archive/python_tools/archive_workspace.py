import os
import shutil

# Root directory of the flutter app
root_dir = os.path.abspath(os.path.dirname(__file__))

archive_dir = os.path.join(root_dir, '_archive')

# Target subdirectories inside _archive
folders = {
    'raw_qb': os.path.join(archive_dir, 'raw_question_banks'),
    'images_staging': os.path.join(archive_dir, 'raw_images_staging'),
    'web_tools': os.path.join(archive_dir, 'web_tools'),
    'db_backups': os.path.join(archive_dir, 'db_backups'),
    'reports': os.path.join(archive_dir, 'reports'),
    'python_tools': os.path.join(archive_dir, 'python_tools'),
}

for folder in folders.values():
    os.makedirs(folder, exist_ok=True)

print("=" * 70)
print("     ARCHIVING TEMPORARY AND RAW ASSETS FOR BRADLEY'S MATHS")
print("=" * 70)

# 1. Move Raw Question Bank Directories
raw_qb_dirs = ['Comp_QB', 'Mech_QB', 'Pure_QB', 'Stats_QB']
for d in raw_qb_dirs:
    src = os.path.join(root_dir, d)
    if os.path.isdir(src):
        dst = os.path.join(folders['raw_qb'], d)
        shutil.move(src, dst)
        print(f"  [Moved Folder] {d} -> _archive/raw_question_banks/")

# 2. Move Root Staging Images Folder (assets/images is untouched!)
root_images = os.path.join(root_dir, 'images')
if os.path.isdir(root_images):
    dst = os.path.join(folders['images_staging'], 'images')
    shutil.move(root_images, dst)
    print(f"  [Moved Folder] images -> _archive/raw_images_staging/")

# 3. Specific Web Tools / Files
web_files = ['a-level-engine.js', 'index.html', 'styles.css', 'audit.html', 'generate_icon.html', 'CNAME']
for f in web_files:
    src = os.path.join(root_dir, f)
    if os.path.isfile(src):
        dst = os.path.join(folders['web_tools'], f)
        shutil.move(src, dst)
        print(f"  [Moved File] {f} -> _archive/web_tools/")

# 4. Root Database Backups (assets/bradleys_maths.db is untouched!)
db_files = ['bradleys_maths_OLD.db', 'bradleys_maths.db.bak', 'bradleys_maths.db']
for f in db_files:
    src = os.path.join(root_dir, f)
    if os.path.isfile(src):
        dst = os.path.join(folders['db_backups'], f)
        shutil.move(src, dst)
        print(f"  [Moved File] {f} -> _archive/db_backups/")

# 5. Reports and Scratch Checkpoints
report_exts = ['.txt']
for item in os.listdir(root_dir):
    src = os.path.join(root_dir, item)
    if os.path.isfile(src):
        if item.endswith('.txt') or item.startswith('math_audit_'):
            dst = os.path.join(folders['reports'], item)
            shutil.move(src, dst)
            print(f"  [Moved File] {item} -> _archive/reports/")

# 6. Python Scripts (except this script itself)
this_script = os.path.basename(__file__)
for item in os.listdir(root_dir):
    src = os.path.join(root_dir, item)
    if os.path.isfile(src) and item.endswith('.py') and item != this_script:
        dst = os.path.join(folders['python_tools'], item)
        shutil.move(src, dst)
        print(f"  [Moved File] {item} -> _archive/python_tools/")

print("=" * 70)
print("  CLEANUP COMPLETE!")
print("  All tools, audits, raw folders, and backups are safely preserved in _archive/")
print("  Flutter core structure is clean and ready for release packaging.")
print("=" * 70)

# Verify assets are safe
assets_db = os.path.join(root_dir, 'assets', 'bradleys_maths.db')
if os.path.isfile(assets_db):
    print("  [VERIFIED] assets/bradleys_maths.db is present and safe.")
else:
    print("  [ALERT] Check assets/bradleys_maths.db!")