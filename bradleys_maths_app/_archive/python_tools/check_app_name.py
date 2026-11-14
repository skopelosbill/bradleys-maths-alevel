print("=== ANDROID MANIFEST (App Name) ===")
with open('android/app/src/main/AndroidManifest.xml', 'r', encoding='utf-8') as f:
    for line in f:
        if 'android:label=' in line:
            print(line.strip())

print("\n=== IOS INFO.PLIST (App Name) ===")
with open('ios/Runner/Info.plist', 'r', encoding='utf-8') as f:
    lines = f.readlines()
    for i, line in enumerate(lines):
        if 'CFBundleDisplayName' in line or 'CFBundleName' in line:
            print(lines[i].strip())
            print(lines[i+1].strip())