db_helper_path = 'lib/database_helper.dart'
with open(db_helper_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Escape the $ symbol in Dart string: $60 -> \$60
fixed_content = content.replace("marked out of $60%", r"marked out of \$60%")

with open(db_helper_path, 'w', encoding='utf-8') as f:
    f.write(fixed_content)

print("Fixed Dart string syntax in lib/database_helper.dart!")