with open('lib/database_helper.dart', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print("Scanning lib/database_helper.dart initialization...\n")
for i, line in enumerate(lines[:65]):
    print(f"{i+1:3d}: {line}", end='')