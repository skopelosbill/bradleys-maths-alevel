import re

print("=" * 60)
print("     APPLYING APP NAME & DATABASE REFRESH ENGINE")
print("=" * 60)

# 1. Update AndroidManifest.xml
manifest_path = 'android/app/src/main/AndroidManifest.xml'
with open(manifest_path, 'r', encoding='utf-8') as f:
    manifest_content = f.read()

new_manifest = re.sub(r'android:label="[^"]*"', 'android:label="AS and A Level Revision"', manifest_content, count=1)
with open(manifest_path, 'w', encoding='utf-8') as f:
    f.write(new_manifest)
print("[1] AndroidManifest.xml: Updated app name to 'AS and A Level Revision'")

# 2. Update ios/Runner/Info.plist
plist_path = 'ios/Runner/Info.plist'
with open(plist_path, 'r', encoding='utf-8') as f:
    plist_content = f.read()

new_plist = re.sub(
    r'<key>CFBundleDisplayName</key>\s*<string>[^<]*</string>',
    '<key>CFBundleDisplayName</key>\n\t<string>AS and A Level Revision</string>',
    plist_content
)
with open(plist_path, 'w', encoding='utf-8') as f:
    f.write(new_plist)
print("[2] Info.plist: Updated iOS display name to 'AS and A Level Revision'")

# 3. Update lib/database_helper.dart to auto-refresh database on phone
db_helper_path = 'lib/database_helper.dart'
with open(db_helper_path, 'r', encoding='utf-8') as f:
    db_helper_content = f.read()

old_db_check = """        if (check.isEmpty) {
          shouldCopy = true;
        }"""

new_db_check = """        if (check.isEmpty) {
          shouldCopy = true;
        } else {
          // Verify Question 050162 is updated to 'out of 60'
          final q162Check = await testDb.rawQuery(
            "SELECT question_text FROM questions WHERE id = '050162' AND question_text LIKE '%marked out of $60%'"
          );
          if (q162Check.isEmpty) {
            debugPrint("[DB REFRESH] Old database detected on device. Forcing update from assets...");
            shouldCopy = true;
          }
        }"""

if old_db_check in db_helper_content:
    db_helper_content = db_helper_content.replace(old_db_check, new_db_check)
    with open(db_helper_path, 'w', encoding='utf-8') as f:
        f.write(db_helper_content)
    print("[3] lib/database_helper.dart: Added self-healing asset refresh trigger!")
else:
    print("[3] lib/database_helper.dart: Check block already updated or structure differs.")

print("\n" + "=" * 60)
print("ALL CONFIGURATION UPDATES COMPLETE!")
print("=" * 60)