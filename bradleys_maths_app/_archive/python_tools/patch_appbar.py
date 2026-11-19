import shutil

path = 'lib/screens/selection_dashboard.dart'
bak = path + '.bak'
shutil.copy2(path, bak)

with open(path, 'r', encoding='utf-8') as f:
    text = f.read()

nl = '\r\n' if '\r\n' in text else '\n'

old_block = r'''        centerTitle: true,
        title: Text(
          "Bradley's Maths",
          style: TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 18,
            color: isDark ? Colors.white : const Color(0xFF0F172A),
          ),
        ),
'''.replace('\n', nl)

assert text.count(old_block) == 1, 'Expected title block not found uniquely'
text = text.replace(old_block, '', 1)

with open(path, 'w', encoding='utf-8') as f:
    f.write(text)

print('SUCCESS: AppBar title removed cleanly (backup at ' + bak + ')')
