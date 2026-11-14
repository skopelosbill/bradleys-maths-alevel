import glob

f = glob.glob('C:/Users/user/AppData/Local/Pub/Cache/hosted/pub.dev/flutter_math_fork-0.7.4/**/matrix.dart', recursive=True)[0]
code = open(f, 'r', encoding='utf-8').read()

# Make color have a default value so it never causes a compile error
code = code.replace(
    'required this.color,',
    'this.color = const Color(0xFFF1F5F9),'
)

# Supply options.color at the call site
code = code.replace(
    'delegate: MatrixLayoutDelegate(',
    'delegate: MatrixLayoutDelegate(\n            color: options.color,'
)

open(f, 'w', encoding='utf-8').write(code)
print("PATCH COMPLETE: Matrix color configured safely!")
