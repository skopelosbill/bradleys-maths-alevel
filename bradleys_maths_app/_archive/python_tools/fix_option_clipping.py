import re

file_path = 'lib/screens/question_screen.dart'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

print("=" * 70)
print("     UPDATING question_screen.dart: ZERO OPTION CLIPPING")
print("=" * 70)

# 1. Update RadioListTile to include tighter contentPadding and pass isOption: true
old_tile_pattern = r"child:\s*_renderMixedContent\(_options\[index\]\['ans'\]\),"
new_tile_replacement = "child: _renderMixedContent(_options[index]['ans'], isOption: true),"
content = re.sub(old_tile_pattern, new_tile_replacement, content)

old_radio_tile = r"activeColor:\s*isDark\s*\?\s*const\s*Color\(0xFF818CF8\)\s*:\s*Colors\.indigo\.shade700,"
new_radio_tile = "activeColor: isDark ? const Color(0xFF818CF8) : Colors.indigo.shade700,\n                          contentPadding: const EdgeInsets.symmetric(horizontal: 10.0),"
if "contentPadding: const EdgeInsets.symmetric(horizontal: 10.0)" not in content:
    content = re.sub(old_radio_tile, new_radio_tile, content)

# 2. Update _renderMixedContent signature and call to _MathWidgetFactory
old_render_sig = r"Widget _renderMixedContent\(String rawData\) \{"
new_render_sig = "Widget _renderMixedContent(String rawData, {bool isOption = false}) {"
content = re.sub(old_render_sig, new_render_sig, content)

old_factory_call = r"factoryBuilder:\s*\(\)\s*=>\s*_MathWidgetFactory\(isDark:\s*isDark\),"
new_factory_call = "factoryBuilder: () => _MathWidgetFactory(isDark: isDark, isOption: isOption),"
content = re.sub(old_factory_call, new_factory_call, content)

# 3. Update _MathWidgetFactory class definition to accept isOption
old_factory_class = r"class _MathWidgetFactory extends WidgetFactory \{\s*final bool isDark;\s*_MathWidgetFactory\(\{required this\.isDark\}\);"
new_factory_class = """class _MathWidgetFactory extends WidgetFactory {
  final bool isDark;
  final bool isOption;
  _MathWidgetFactory({required this.isDark, this.isOption = false});"""
content = re.sub(old_factory_class, new_factory_class, content)

# 4. In buildText, handle isOption with FittedBox instead of SingleChildScrollView
old_block_math = r"""widgets\.add\(
            Padding\(
              padding: const EdgeInsets\.symmetric\(vertical: 8\.0\),
              child: Center\(
                child: SingleChildScrollView\(
                  scrollDirection: Axis\.horizontal,
                  child: Math\.tex\(
                    math,
                    mathStyle: MathStyle\.display,
                    textStyle: TextStyle\(
                      color: textColor,
                      fontSize: 16,
                      fontWeight: tsh\.style\.fontWeight \?\? FontWeight\.normal,
                    \),
                  \),
                \),
              \),
            \),
          \);"""

new_block_math = """if (isOption) {
            widgets.add(
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 2.0),
                child: FittedBox(
                  fit: BoxFit.scaleDown,
                  alignment: Alignment.centerLeft,
                  child: Math.tex(
                    math,
                    mathStyle: MathStyle.display,
                    textStyle: TextStyle(
                      color: textColor,
                      fontSize: 15,
                      fontWeight: tsh.style.fontWeight ?? FontWeight.normal,
                    ),
                  ),
                ),
              ),
            );
          } else {
            widgets.add(
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 8.0),
                child: Center(
                  child: SingleChildScrollView(
                    scrollDirection: Axis.horizontal,
                    child: Math.tex(
                      math,
                      mathStyle: MathStyle.display,
                      textStyle: TextStyle(
                        color: textColor,
                        fontSize: 16,
                        fontWeight: tsh.style.fontWeight ?? FontWeight.normal,
                      ),
                    ),
                  ),
                ),
              ),
            );
          }"""

content = re.sub(old_block_math, new_block_math, content)

# 5. In single non-block segment with inline math, also wrap in FittedBox if isOption
old_single_inline = r"""if \(_inlineMathPattern\.hasMatch\(text\)\) \{
        return _renderInlineSpan\(text, tsh\);
      \}"""

new_single_inline = """if (_inlineMathPattern.hasMatch(text)) {
        if (isOption) {
          return FittedBox(
            fit: BoxFit.scaleDown,
            alignment: Alignment.centerLeft,
            child: _renderInlineSpan(text, tsh),
          );
        }
        return _renderInlineSpan(text, tsh);
      }"""

content = re.sub(old_single_inline, new_single_inline, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("  [SUCCESS] question_screen.dart successfully patched!")
print("  Option cards will now automatically scale down wide formulas with zero clipping.")
print("=" * 70)