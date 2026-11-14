import glob

f = glob.glob('C:/Users/user/AppData/Local/Pub/Cache/hosted/pub.dev/flutter_math_fork-0.7.4/**/matrix.dart', recursive=True)[0]
code = open(f, 'r', encoding='utf-8').read()

# 1. Pass color into MatrixLayoutDelegate
code = code.replace(
    'delegate: MatrixLayoutDelegate(\n                  rows: rows,',
    'delegate: MatrixLayoutDelegate(\n                  color: options.color,\n                  rows: rows,'
)
code = code.replace(
    'delegate: MatrixLayoutDelegate(\r\n                  rows: rows,',
    'delegate: MatrixLayoutDelegate(\r\n                  color: options.color,\r\n                  rows: rows,'
)

# 2. Add color field to MatrixLayoutDelegate class
code = code.replace(
    'class MatrixLayoutDelegate extends IntrinsicLayoutDelegate<int> {\n  final int rows;',
    'class MatrixLayoutDelegate extends IntrinsicLayoutDelegate<int> {\n  final Color color;\n  final int rows;'
)
code = code.replace(
    'class MatrixLayoutDelegate extends IntrinsicLayoutDelegate<int> {\r\n  final int rows;',
    'class MatrixLayoutDelegate extends IntrinsicLayoutDelegate<int> {\r\n  final Color color;\r\n  final int rows;'
)

# 3. Add color to MatrixLayoutDelegate constructor
code = code.replace(
    'MatrixLayoutDelegate({\n    required this.rows,',
    'MatrixLayoutDelegate({\n    required this.color,\n    required this.rows,'
)
code = code.replace(
    'MatrixLayoutDelegate({\r\n    required this.rows,',
    'MatrixLayoutDelegate({\r\n    required this.color,\r\n    required this.rows,'
)

# 4. Set paint.color in additionalPaint
code = code.replace(
    'final paint = Paint()..strokeWidth = ruleThickness;',
    'final paint = Paint()..strokeWidth = ruleThickness..color = color;'
)

open(f, 'w', encoding='utf-8').write(code)
print("SUCCESS: matrix.dart patched with dynamic theme color!")
