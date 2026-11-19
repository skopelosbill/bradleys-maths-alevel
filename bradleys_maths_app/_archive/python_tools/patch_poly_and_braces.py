import sqlite3
import re
import shutil
import os
import sys
from datetime import datetime

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

DB_PATH = "assets/bradleys_maths.db"
STAMP = datetime.now().strftime("%Y%m%d_%H%M%S")
BACKUP_PATH = f"assets/bradleys_maths.db.bak_poly_{STAMP}"

S = chr(36)
D = chr(36) * 2
BS = chr(92)

def m_inline(expr):
    return S + expr + S

def m_block(expr):
    return D + expr + D

def aligned(lines):
    return BS + "begin{aligned}" + (" " + BS + "cr ").join(lines) + BS + "end{aligned}"

def build_cubic_step(intro, dividend, divisor, q1, m1, r1, q2, m2, r2, q3, m3,
                       a_term, a_eq, c_term, c_eq, b_eq, x_check, conclusion):
    parts = [intro, "<br><br><strong>Method 1 — Step-by-Step Algebraic Division:</strong><br>"]
    parts.append(f"1. Divide leading terms ({m_inline(q1[0])} by {m_inline(q1[1])}) to get {m_inline(q1[2])}. Multiply by {m_inline(divisor)} and subtract:<br>")
    parts.append(aligned([
        f"&({dividend})",
        f"&{BS}quad - ({m1})",
        f"&{BS}quad = {r1}",
    ]))
    parts.append(f"<br>2. Divide {m_inline(q2[0])} by {m_inline(q2[1])} to get {m_inline(q2[2])}. Multiply by {m_inline(divisor)} and subtract:<br>")
    parts.append(aligned([
        f"&({r1})",
        f"&{BS}quad - ({m2})",
        f"&{BS}quad = {r2}",
    ]))
    parts.append(f"<br>3. Divide {m_inline(q3[0])} by {m_inline(q3[1])} to get {m_inline(q3[2])}. Multiply by {m_inline(divisor)} and subtract:<br>")
    parts.append(aligned([
        f"&({r2})",
        f"&{BS}quad - ({m3})",
        f"&{BS}quad = 0",
    ]))
    parts.append("<br><br><strong>Method 2 — Equating Coefficients:</strong><br>")
    parts.append(f"Write {m_inline(dividend + ' = (' + divisor + ')(ax^2 + bx + c)')}:<br>")
    parts.append(aligned([
        f"{BS}text{{{a_term}: }} &{a_eq}",
        f"{BS}text{{{c_term}: }} &{c_eq}",
        f"{BS}text{{}}x^2{BS}text{{ term: }} &{b_eq}",
        f"{BS}text{{Check }}x{BS}text{{: }} &{x_check}",
    ]))
    parts.append("<br><br>" + conclusion)
    return "".join(parts)

def build_quad_step(intro, dividend, divisor, q1, m1, r1, q2, m2,
                      a_eq, b_eq, x_check, conclusion):
    parts = [intro, "<br><br><strong>Method 1 — Step-by-Step Algebraic Division:</strong><br>"]
    parts.append(f"1. Divide leading terms ({m_inline(q1[0])} by {m_inline(q1[1])}) to get {m_inline(q1[2])}. Multiply by {m_inline(divisor)} and subtract:<br>")
    parts.append(aligned([
        f"&({dividend})",
        f"&{BS}quad - ({m1})",
        f"&{BS}quad = {r1}",
    ]))
    parts.append(f"<br>2. Divide {m_inline(q2[0])} by {m_inline(q2[1])} to get {m_inline(q2[2])}. Multiply by {m_inline(divisor)} and subtract:<br>")
    parts.append(aligned([
        f"&({r1})",
        f"&{BS}quad - ({m2})",
        f"&{BS}quad = 0",
    ]))
    parts.append("<br><br><strong>Method 2 — Equating Coefficients:</strong><br>")
    parts.append(f"Write {m_inline(dividend + ' = (' + divisor + ')(ax + b)')}:<br>")
    parts.append(aligned([
        f"{BS}text{{}}x^2{BS}text{{ term: }} &{a_eq}",
        f"{BS}text{{Constant: }} &{b_eq}",
        f"{BS}text{{Check }}x{BS}text{{: }} &{x_check}",
    ]))
    parts.append("<br><br>" + conclusion)
    return "".join(parts)

if not os.path.exists(DB_PATH):
    raise FileNotFoundError(f"Cannot find {DB_PATH}")

shutil.copy2(DB_PATH, BACKUP_PATH)
print(f"Backup created: {BACKUP_PATH}")

conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()

# Fix Method 2 clean text labels (no empty \text{})
def build_cubic_clean(intro, dividend, divisor, q1, m1, r1, q2, m2, r2, q3, m3,
                      a_eq, c_eq, b_eq, x_check, conclusion):
    parts = [intro, "<br><br><strong>Method 1 — Step-by-Step Algebraic Division:</strong><br>"]
    parts.append(f"1. Divide leading terms ({m_inline(q1[0])} by {m_inline(q1[1])}) to get {m_inline(q1[2])}. Multiply by {m_inline(divisor)} and subtract:<br>")
    parts.append(aligned([
        f"&({dividend})",
        f"&{BS}quad - ({m1})",
        f"&{BS}quad = {r1}",
    ]))
    parts.append(f"<br>2. Divide {m_inline(q2[0])} by {m_inline(q2[1])} to get {m_inline(q2[2])}. Multiply by {m_inline(divisor)} and subtract:<br>")
    parts.append(aligned([
        f"&({r1})",
        f"&{BS}quad - ({m2})",
        f"&{BS}quad = {r2}",
    ]))
    parts.append(f"<br>3. Divide {m_inline(q3[0])} by {m_inline(q3[1])} to get {m_inline(q3[2])}. Multiply by {m_inline(divisor)} and subtract:<br>")
    parts.append(aligned([
        f"&({r2})",
        f"&{BS}quad - ({m3})",
        f"&{BS}quad = 0",
    ]))
    parts.append("<br><br><strong>Method 2 — Equating Coefficients:</strong><br>")
    parts.append(f"Write {m_inline(dividend + ' = (' + divisor + ')(ax^2 + bx + c)')}:<br>")
    parts.append(aligned([
        f"&x^3{BS}text{{ term: }} {a_eq}",
        f"&{BS}text{{Constant: }} {c_eq}",
        f"&x^2{BS}text{{ term: }} {b_eq}",
        f"&{BS}text{{Check }} x{BS}text{{: }} {x_check}",
    ]))
    parts.append("<br><br>" + conclusion)
    return "".join(parts)

def build_quad_clean(intro, dividend, divisor, q1, m1, r1, q2, m2,
                     a_eq, b_eq, x_check, conclusion):
    parts = [intro, "<br><br><strong>Method 1 — Step-by-Step Algebraic Division:</strong><br>"]
    parts.append(f"1. Divide leading terms ({m_inline(q1[0])} by {m_inline(q1[1])}) to get {m_inline(q1[2])}. Multiply by {m_inline(divisor)} and subtract:<br>")
    parts.append(aligned([
        f"&({dividend})",
        f"&{BS}quad - ({m1})",
        f"&{BS}quad = {r1}",
    ]))
    parts.append(f"<br>2. Divide {m_inline(q2[0])} by {m_inline(q2[1])} to get {m_inline(q2[2])}. Multiply by {m_inline(divisor)} and subtract:<br>")
    parts.append(aligned([
        f"&({r1})",
        f"&{BS}quad - ({m2})",
        f"&{BS}quad = 0",
    ]))
    parts.append("<br><br><strong>Method 2 — Equating Coefficients:</strong><br>")
    parts.append(f"Write {m_inline(dividend + ' = (' + divisor + ')(ax + b)')}:<br>")
    parts.append(aligned([
        f"&x^2{BS}text{{ term: }} {a_eq}",
        f"&{BS}text{{Constant: }} {b_eq}",
        f"&{BS}text{{Check }} x{BS}text{{: }} {x_check}",
    ]))
    parts.append("<br><br>" + conclusion)
    return "".join(parts)

step_updates = {
    ("004126", 5): build_cubic_clean(
        f"For Part (b), divide {m_inline('24x^3 - 22x^2 - x + 3')} by {m_inline('3x + 1')}:",
        "24x^3 - 22x^2 - x + 3", "3x + 1",
        ("24x^3", "3x", "8x^2"), "24x^3 + 8x^2", "-30x^2 - x + 3",
        ("-30x^2", "3x", "-10x"), "-30x^2 - 10x", "9x + 3",
        ("9x", "3x", "3"), "9x + 3",
        "3a = 24 " + BS + "implies a = 8",
        "c = 3",
        "3b + 8 = -22 " + BS + "implies b = -10",
        "3(3) + (-10) = -1",
        "Therefore:<br>" + aligned([
            f"&{BS}dfrac{{24x^3 - 22x^2 - x + 3}}{{3x + 1}}",
            f"&{BS}quad = 8x^2 - 10x + 3",
        ]),
    ),
    ("004127", 5): build_quad_clean(
        f"For Part (b), divide {m_inline('6x^2 - 5x + 1')} by {m_inline('2x - 1')}:",
        "6x^2 - 5x + 1", "2x - 1",
        ("6x^2", "2x", "3x"), "6x^2 - 3x", "-2x + 1",
        ("-2x", "2x", "-1"), "-2x + 1",
        "2a = 6 " + BS + "implies a = 3",
        "-b = 1 " + BS + "implies b = -1",
        "2(-1) + (-1)(3) = -5",
        "Therefore:<br>" + aligned([
            f"&{BS}dfrac{{6x^2 - 5x + 1}}{{2x - 1}}",
            f"&{BS}quad = 3x - 1",
        ]),
    ),
    ("004128", 5): build_cubic_clean(
        f"For Part (b), divide {m_inline('2x^3 - 5x^2 - 9x + 18')} by {m_inline('x + 2')}:",
        "2x^3 - 5x^2 - 9x + 18", "x + 2",
        ("2x^3", "x", "2x^2"), "2x^3 + 4x^2", "-9x^2 - 9x + 18",
        ("-9x^2", "x", "-9x"), "-9x^2 - 18x", "9x + 18",
        ("9x", "x", "9"), "9x + 18",
        "a = 2",
        "2c = 18 " + BS + "implies c = 9",
        "b + 4 = -5 " + BS + "implies b = -9",
        "9 + 2(-9) = -9",
        "Therefore:<br>" + aligned([
            f"&{BS}dfrac{{2x^3 - 5x^2 - 9x + 18}}{{x + 2}}",
            f"&{BS}quad = 2x^2 - 9x + 9",
        ]),
    ),
    ("004129", 5): build_cubic_clean(
        f"For Part (b), divide {m_inline('2x^3 - 9x^2 - 2x + 24')} by {m_inline('2x + 3')}:",
        "2x^3 - 9x^2 - 2x + 24", "2x + 3",
        ("2x^3", "2x", "x^2"), "2x^3 + 3x^2", "-12x^2 - 2x + 24",
        ("-12x^2", "2x", "-6x"), "-12x^2 - 18x", "16x + 24",
        ("16x", "2x", "8"), "16x + 24",
        "2a = 2 " + BS + "implies a = 1",
        "3c = 24 " + BS + "implies c = 8",
        "2b + 3 = -9 " + BS + "implies b = -6",
        "2(8) + 3(-6) = -2",
        "Therefore:<br>" + aligned([
            f"&{BS}dfrac{{2x^3 - 9x^2 - 2x + 24}}{{2x + 3}}",
            f"&{BS}quad = x^2 - 6x + 8",
        ]),
    ),
    ("004130", 5): build_quad_clean(
        f"For Part (b), divide {m_inline('12x^2 - 8x + 1')} by {m_inline('2x - 1')}:",
        "12x^2 - 8x + 1", "2x - 1",
        ("12x^2", "2x", "6x"), "12x^2 - 6x", "-2x + 1",
        ("-2x", "2x", "-1"), "-2x + 1",
        "2a = 12 " + BS + "implies a = 6",
        "-b = 1 " + BS + "implies b = -1",
        "2(-1) + (-1)(6) = -8",
        "Therefore:<br>" + aligned([
            f"&{BS}dfrac{{12x^2 - 8x + 1}}{{2x - 1}}",
            f"&{BS}quad = 6x - 1",
        ]),
    ),
    ("004171", 1): build_cubic_clean(
        f"Since {m_inline('(x - 3)')} is a factor of {m_inline('f(x)')}, we divide {m_inline('2x^3 - 5x^2 - 4x + 3')} by {m_inline('(x - 3)')} to find the quadratic factor:",
        "2x^3 - 5x^2 - 4x + 3", "x - 3",
        ("2x^3", "x", "2x^2"), "2x^3 - 6x^2", "x^2 - 4x + 3",
        ("x^2", "x", "x"), "x^2 - 3x", "-x + 3",
        ("-x", "x", "-1"), "-x + 3",
        "a = 2",
        "-3c = 3 " + BS + "implies c = -1",
        "b - 6 = -5 " + BS + "implies b = 1",
        "-1 - 3(1) = -4",
        "Therefore:<br>" + aligned([
            "2x^3 - 5x^2 - 4x + 3",
            f"&{BS}quad = (x - 3)(2x^2 + x - 1)",
        ]),
    ),
    ("004172", 2): build_cubic_clean(
        f"Divide {m_inline('x^3 - 6x^2 + 11x - 6')} by {m_inline('(x - 1)')} to find the quadratic factor:",
        "x^3 - 6x^2 + 11x - 6", "x - 1",
        ("x^3", "x", "x^2"), "x^3 - x^2", "-5x^2 + 11x - 6",
        ("-5x^2", "x", "-5x"), "-5x^2 + 5x", "6x - 6",
        ("6x", "x", "6"), "6x - 6",
        "a = 1",
        "-c = -6 " + BS + "implies c = 6",
        "b - 1 = -6 " + BS + "implies b = -5",
        "6 - (-5) = 11",
        "Therefore:<br>" + m_block("g(x) = (x - 1)(x^2 - 5x + 6)"),
    ),
    ("004173", 2): build_cubic_clean(
        f"Divide {m_inline('x^3 - 3x^2 + 4')} (written with {m_inline('0x')} placeholder as {m_inline('x^3 - 3x^2 + 0x + 4')}) by {m_inline('(x + 1)')} to find the quadratic factor:",
        "x^3 - 3x^2 + 0x + 4", "x + 1",
        ("x^3", "x", "x^2"), "x^3 + x^2", "-4x^2 + 0x + 4",
        ("-4x^2", "x", "-4x"), "-4x^2 - 4x", "4x + 4",
        ("4x", "x", "4"), "4x + 4",
        "a = 1",
        "c = 4",
        "b + 1 = -3 " + BS + "implies b = -4",
        "4 + (-4) = 0",
        "Therefore:<br>" + m_block("h(x) = (x + 1)(x^2 - 4x + 4)"),
    ),
    ("004174", 2): build_cubic_clean(
        f"Rearrange {m_inline('3x^2 - x^3 - 4')} as {m_inline('-x^3 + 3x^2 + 0x - 4')} and divide by {m_inline('(x + 1)')} to find the quadratic factor:",
        "-x^3 + 3x^2 + 0x - 4", "x + 1",
        ("-x^3", "x", "-x^2"), "-x^3 - x^2", "4x^2 + 0x - 4",
        ("4x^2", "x", "4x"), "4x^2 + 4x", "-4x - 4",
        ("-4x", "x", "-4"), "-4x - 4",
        "a = -1",
        "c = -4",
        "b - 1 = 3 " + BS + "implies b = 4",
        "-4 + 4 = 0",
        "Therefore:<br>" + m_block("f(x) = (x + 1)(-x^2 + 4x - 4)"),
    ),
    ("004416", 2): build_cubic_clean(
        f"<strong>Step 2: Perform polynomial division</strong><br><br>Divide {m_inline('2x^3 - 10x^2 + 11x + 3')} by {m_inline('(x - 3)')} to find the remaining quadratic factor:",
        "2x^3 - 10x^2 + 11x + 3", "x - 3",
        ("2x^3", "x", "2x^2"), "2x^3 - 6x^2", "-4x^2 + 11x + 3",
        ("-4x^2", "x", "-4x"), "-4x^2 + 12x", "-x + 3",
        ("-x", "x", "-1"), "-x + 3",
        "a = 2",
        "-3c = 3 " + BS + "implies c = -1",
        "b - 6 = -10 " + BS + "implies b = -4",
        "-1 - 3(-4) = 11",
        "Therefore:<br>" + aligned([
            "&2x^3 - 10x^2 + 11x + 3",
            f"&{BS}quad = (x - 3)(2x^2 - 4x - 1)",
        ]),
    ),
    ("004417", 2): build_cubic_clean(
        f"<strong>Step 2: Perform polynomial division</strong><br><br>Divide {m_inline('3x^3 + 4x^2 - 6x - 4')} by {m_inline('(x + 2)')} to obtain the remaining quadratic factor:",
        "3x^3 + 4x^2 - 6x - 4", "x + 2",
        ("3x^3", "x", "3x^2"), "3x^3 + 6x^2", "-2x^2 - 6x - 4",
        ("-2x^2", "x", "-2x"), "-2x^2 - 4x", "-2x - 4",
        ("-2x", "x", "-2"), "-2x - 4",
        "a = 3",
        "2c = -4 " + BS + "implies c = -2",
        "b + 6 = 4 " + BS + "implies b = -2",
        "-2 + 2(-2) = -6",
        "Therefore:<br>" + aligned([
            "&3x^3 + 4x^2 - 6x - 4",
            f"&{BS}quad = (x + 2)(3x^2 - 2x - 2)",
        ]),
    ),
    ("004418", 2): build_cubic_clean(
        f"<strong>Step 2: Perform polynomial division</strong><br><br>Divide {m_inline('x^3 - 2x^2 - 5x + 6')} by {m_inline('(x - 1)')} to get the quadratic factor:",
        "x^3 - 2x^2 - 5x + 6", "x - 1",
        ("x^3", "x", "x^2"), "x^3 - x^2", "-x^2 - 5x + 6",
        ("-x^2", "x", "-x"), "-x^2 + x", "-6x + 6",
        ("-6x", "x", "-6"), "-6x + 6",
        "a = 1",
        "-c = 6 " + BS + "implies c = -6",
        "b - 1 = -2 " + BS + "implies b = -1",
        "-6 - (-1) = -5",
        "Therefore:<br>" + aligned([
            "&x^3 - 2x^2 - 5x + 6",
            f"&{BS}quad = (x - 1)(x^2 - x - 6)",
        ]),
    ),
    ("004419", 2): (
        f"<strong>Step 2: Perform polynomial division</strong><br><br>Divide {m_inline('2x^3 - 9x^2 + 6x - 1')} by {m_inline('(x - ' + BS + 'frac{1}{2})')} (or equivalently by the integer factor {m_inline('2x - 1')}) to isolate the remaining quadratic factor:"
        "<br><br><strong>Method 1 — Step-by-Step Algebraic Division (by " + m_inline('x - ' + BS + 'frac{1}{2}') + "):</strong><br>"
        f"1. Divide leading terms ({m_inline('2x^3')} by {m_inline('x')}) to get {m_inline('2x^2')}. Multiply by {m_inline('x - ' + BS + 'frac{1}{2}')} and subtract:<br>"
        + aligned(["&(2x^3 - 9x^2 + 6x - 1)", f"&{BS}quad - (2x^3 - x^2)", f"&{BS}quad = -8x^2 + 6x - 1"])
        + f"<br>2. Divide {m_inline('-8x^2')} by {m_inline('x')} to get {m_inline('-8x')}. Multiply and subtract:<br>"
        + aligned(["&(-8x^2 + 6x - 1)", f"&{BS}quad - (-8x^2 + 4x)", f"&{BS}quad = 2x - 1"])
        + f"<br>3. Divide {m_inline('2x')} by {m_inline('x')} to get {m_inline('2')}. Multiply and subtract:<br>"
        + aligned(["&(2x - 1)", f"&{BS}quad - (2x - 1)", f"&{BS}quad = 0"])
        + "<br><br><strong>Method 2 — Equating Coefficients (using integer factor " + m_inline('2x - 1') + "):</strong><br>"
        f"Write {m_inline('2x^3 - 9x^2 + 6x - 1 = (2x - 1)(ax^2 + bx + c)')}:<br>"
        + aligned([
            f"&x^3{BS}text{{ term: }} 2a = 2 {BS}implies a = 1",
            f"&{BS}text{{Constant: }} -c = -1 {BS}implies c = 1",
            f"&x^2{BS}text{{ term: }} 2b - 1 = -9 {BS}implies b = -4",
            f"&{BS}text{{Check }} x{BS}text{{: }} 2(1) - (-4) = 6",
        ])
        + "<br><br>Therefore:<br>"
        + aligned([
            "&2x^3 - 9x^2 + 6x - 1",
            f"&{BS}quad = {BS}left(x - {BS}dfrac{{1}}{{2}}{BS}right)(2x^2 - 8x + 2)",
            f"&{BS}quad = (2x - 1)(x^2 - 4x + 1)",
        ])
    ),
    ("004420", 2): build_cubic_clean(
        f"<strong>Step 2: Perform polynomial division</strong><br><br>Divide {m_inline('2x^3 - 4x^2 - 3x + 3')} by {m_inline('(x + 1)')} to find the remaining quadratic factor:",
        "2x^3 - 4x^2 - 3x + 3", "x + 1",
        ("2x^3", "x", "2x^2"), "2x^3 + 2x^2", "-6x^2 - 3x + 3",
        ("-6x^2", "x", "-6x"), "-6x^2 - 6x", "3x + 3",
        ("3x", "x", "3"), "3x + 3",
        "a = 2",
        "c = 3",
        "b + 2 = -4 " + BS + "implies b = -6",
        "3 + (-6) = -3",
        "Therefore:<br>" + aligned([
            "&2x^3 - 4x^2 - 3x + 3",
            f"&{BS}quad = (x + 1)(2x^2 - 6x + 3)",
        ]),
    ),
}

steps_patched = 0
for (qid, snum), new_text in step_updates.items():
    res = cur.execute(
        "UPDATE question_steps SET step_text = ? WHERE question_id = ? AND step_number = ?",
        (new_text, qid, snum),
    )
    steps_patched += res.rowcount

# Update the 3 Insights mentioning synthetic division
cur.execute(
    "UPDATE bradley_insights SET title = ?, content = ? WHERE question_id = '004126'",
    (
        "The Head Teacher's Eye: Dividing by Non-Monic Factors like (3x + 1)",
        f"When dividing a cubic by a non-monic factor like {m_inline('(3x + 1)')}, keep a sharp eye on the leading coefficient {m_inline('3')}. Whether you divide term-by-term ({m_inline('24x^3 ' + BS + 'div 3x = 8x^2')}) or equate coefficients ({m_inline('(3x + 1)(ax^2 + bx + c)')}), dividing through cleanly by {m_inline('3')} prevents leaving an unwanted factor in your quadratic quotient.",
    ),
)
cur.execute(
    "UPDATE bradley_insights SET content = ? WHERE question_id = '004129'",
    (
        f"When dividing a polynomial by a non-monic factor like {m_inline('(2x + 3)')}, always divide each remaining leading term by {m_inline('2x')} (or equate coefficients with {m_inline('(2x + 3)(ax^2 + bx + c)')}). Students who only work from the root {m_inline('-' + BS + 'frac{3}{2}')} without tracking the leading coefficient {m_inline('2')} often leave an extra factor of {m_inline('2')} in their final product.",
    ),
)
cur.execute(
    "UPDATE bradley_insights SET content = replace(content, 'synthetic or polynomial division', 'polynomial division') WHERE question_id = '004214'"
)

# Fix unescaped {x : ...} braces across steps & options for 004171-004175 (plus {2} in 004174, {a} in 004174 insight)
brace_re = re.compile(r"(?<!" + re.escape(BS) + r")\{(x\s*:[^\}]+)\}")
cup2_re = re.compile(re.escape(BS + "cup ") + r"\{2\s*\}")

def fix_set_braces(text):
    text = brace_re.sub(lambda m: BS + "{" + m.group(1).strip() + BS + "}", text)
    text = cup2_re.sub(lambda m: BS + "cup " + BS + "{2" + BS + "}", text)
    return text

braces_patched = 0
for row_id, qid, text in cur.execute(
    "SELECT id, question_id, step_text FROM question_steps WHERE question_id IN ('004171','004172','004173','004174','004175')"
).fetchall():
    new_text = fix_set_braces(text)
    if qid == "004175":
        new_text = new_text.replace(" and} ", " and ")
        new_text = new_text.replace("images/Pure_PNGs/004171_ans.png", "images/Pure_PNGs/004175_ans.png")
    if new_text != text:
        cur.execute("UPDATE question_steps SET step_text = ? WHERE id = ?", (new_text, row_id))
        braces_patched += 1

for row_id, text in cur.execute(
    "SELECT id, ans_text FROM question_options WHERE question_id IN ('004171','004172','004173','004174','004175')"
).fetchall():
    new_text = fix_set_braces(text)
    if new_text != text:
        cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (new_text, row_id))
        braces_patched += 1

for qid, text in cur.execute("SELECT question_id, content FROM bradley_insights WHERE question_id = '004174'").fetchall():
    new_text = text.replace("{a }", BS + "{a" + BS + "}")
    if new_text != text:
        cur.execute("UPDATE bradley_insights SET content = ? WHERE question_id = ?", (new_text, qid))
        braces_patched += 1

conn.commit()

# Post-patch verification
qs_all = [
    ("Q", "SELECT id, question_text FROM questions"),
    ("S", "SELECT question_id, step_text FROM question_steps"),
    ("O", "SELECT question_id, ans_text FROM question_options"),
    ("F", "SELECT question_id, feedback_text FROM question_options"),
    ("I", "SELECT question_id, content || ' ' || title FROM bradley_insights"),
]
synth_left = sum(1 for _, q in qs_all for r in cur.execute(q) if "synthetic" in (r[1] or "").lower())
unesc_x = sum(1 for _, q in qs_all for r in cur.execute(q) if (r[1] or "").count("{x :") > (r[1] or "").count(BS + "{x :"))
odd_dollar = sum(1 for _, q in qs_all for r in cur.execute(q) if (r[1] or "").replace(D, "").count(S) % 2 == 1)
img_4175 = cur.execute("SELECT step_text FROM question_steps WHERE question_id='004175' AND step_number=2").fetchone()[0]
has_4175_img = ("004175_ans.png" in img_4175) and ("and}" not in img_4175)

print(f"Polynomial division steps updated : {steps_patched} (expected 14)")
print(f"Brace/004175 rows updated         : {braces_patched}")
print("\nPost-patch verification:")
print(f"  'synthetic' remaining anywhere  : {synth_left} (should be 0)")
print(f"  Unescaped '{{x :' remaining      : {unesc_x} (should be 0)")
print(f"  Odd single '$' remaining        : {odd_dollar} (should be 0)")
print(f"  004175 image & stray brace OK   : {has_4175_img} (should be True)")

conn.close()