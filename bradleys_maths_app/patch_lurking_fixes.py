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
BACKUP_PATH = f"assets/bradleys_maths.db.bak_{STAMP}"

S = chr(36)
D = chr(36) * 2
BS = chr(92)

if not os.path.exists(DB_PATH):
    raise FileNotFoundError(f"Cannot find {DB_PATH}")

shutil.copy2(DB_PATH, BACKUP_PATH)
print(f"Backup created: {BACKUP_PATH}")

conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()

counts = {
    "004021_004025_domains": 0,
    "004026_004027_commas": 0,
    "empty_text_before_cr": 0,
    "004062_comma_space": 0,
    "gx_spacing": 0,
    "004065_aligned_dollars": 0,
    "apply_linebreaks": 0,
    "012126_012128_pmatrix_and_dollars": 0,
}

# 1. Fix 004021-004025 squished domains
pat_dom = re.compile(
    re.escape(BS + "text{}")
    + r"(?:"
    + re.escape(D) + r"\s*" + re.escape(D)
    + r"|\s*)x\s*"
    + re.escape(BS + "in")
    + r"\s*"
    + re.escape(BS + "mathbb{R}")
)
rep_dom = ", " + BS + "quad x " + BS + "in " + BS + "mathbb{R}"

for qid, text in cur.execute("SELECT id, question_text FROM questions WHERE id IN ('004021','004022','004023','004024','004025')").fetchall():
    new_text, n = pat_dom.subn(lambda m: rep_dom, text)
    if n:
        cur.execute("UPDATE questions SET question_text = ? WHERE id = ?", (new_text, qid))
        counts["004021_004025_domains"] += n

# 2. Fix 004026 & 004027 missing commas where \text{} sat between angle solutions
pat_empty_text = re.compile(re.escape(BS + "text{}") + r"\s*")
for row_id, text in cur.execute("SELECT id, step_text FROM question_steps WHERE question_id IN ('004026','004027')").fetchall():
    if BS + "text{}" in text:
        new_text, n = pat_empty_text.subn(", ", text)
        if n:
            cur.execute("UPDATE question_steps SET step_text = ? WHERE id = ?", (new_text, row_id))
            counts["004026_004027_commas"] += n

# 3. Tidy harmless empty \text{} right before \cr in 004046-004050, 050217
pat_cr = re.compile(r"\s*" + re.escape(BS + "text{}") + r"(\s*" + re.escape(BS + "cr") + r")")
for row_id, text in cur.execute("SELECT id, step_text FROM question_steps WHERE question_id IN ('004046','004047','004048','004050','050217')").fetchall():
    new_text, n = pat_cr.subn(lambda m: m.group(1), text)
    if n:
        cur.execute("UPDATE question_steps SET step_text = ? WHERE id = ?", (new_text, row_id))
        counts["empty_text_before_cr"] += n
for row_id, text in cur.execute("SELECT id, ans_text FROM question_options WHERE question_id IN ('004046','004047','004048','004050','050217')").fetchall():
    new_text, n = pat_cr.subn(lambda m: m.group(1), text)
    if n:
        cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (new_text, row_id))
        counts["empty_text_before_cr"] += n

# 4. Fix 004062 comma missing space
for qid, text in cur.execute("SELECT id, question_text FROM questions WHERE id = '004062'").fetchall():
    if "constants,passes through" in text:
        new_text = text.replace("constants,passes through", "constants, passes through")
        cur.execute("UPDATE questions SET question_text = ? WHERE id = ?", (new_text, qid))
        counts["004062_comma_space"] += 1

# 5. Fix missing spaces around $g(x)$ in 004017 & 004021-004025
gx_wrapped = S + "g(x)" + S
gx_replacements = [
    ("Rewrite" + gx_wrapped + "in", "Rewrite " + gx_wrapped + " in"),
    ("for" + gx_wrapped + "to", "for " + gx_wrapped + " to"),
    ("of" + gx_wrapped + "is", "of " + gx_wrapped + " is"),
    ("of" + gx_wrapped + "at", "of " + gx_wrapped + " at"),
]

for qid, text in cur.execute("SELECT id, question_text FROM questions WHERE id IN ('004017','004021','004022','004023','004024','004025')").fetchall():
    new_text = text
    for old, new in gx_replacements:
        if old in new_text:
            counts["gx_spacing"] += new_text.count(old)
            new_text = new_text.replace(old, new)
    if new_text != text:
        cur.execute("UPDATE questions SET question_text = ? WHERE id = ?", (new_text, qid))

for row_id, text in cur.execute("SELECT id, step_text FROM question_steps WHERE question_id IN ('004017','004021','004022','004023','004024','004025')").fetchall():
    new_text = text
    for old, new in gx_replacements:
        if old in new_text:
            counts["gx_spacing"] += new_text.count(old)
            new_text = new_text.replace(old, new)
    if new_text != text:
        cur.execute("UPDATE question_steps SET step_text = ? WHERE id = ?", (new_text, row_id))

for row_id, text in cur.execute("SELECT id, feedback_text FROM question_options WHERE question_id IN ('004017','004021','004022','004023','004024','004025') AND feedback_text IS NOT NULL").fetchall():
    new_text = text
    for old, new in gx_replacements:
        if old in new_text:
            counts["gx_spacing"] += new_text.count(old)
            new_text = new_text.replace(old, new)
    if new_text != text:
        cur.execute("UPDATE question_options SET feedback_text = ? WHERE id = ?", (new_text, row_id))

# 6. Fix 004065 step 9 stray $ inside \begin{aligned}
for row_id, text in cur.execute("SELECT id, step_text FROM question_steps WHERE question_id = '004065' AND step_number = 9").fetchall():
    target = BS + "begin{aligned} " + S + "x &="
    fixed = BS + "begin{aligned} x &="
    if target in text:
        counts["004065_aligned_dollars"] += text.count(target)
        new_text = text.replace(target, fixed)
        cur.execute("UPDATE question_steps SET step_text = ? WHERE id = ?", (new_text, row_id))

# 7. Fix 012058 step 5 & 012060 step 4 missing line break before Apply
for qid, snum in [("012058", 5), ("012060", 4)]:
    for row_id, text in cur.execute("SELECT id, step_text FROM question_steps WHERE question_id = ? AND step_number = ?", (qid, snum)).fetchall():
        target = BS + "text{ m}" + S + "Apply"
        fixed = BS + "text{ m}" + S + "<br><br>Apply"
        if target in text:
            new_text = text.replace(target, fixed)
            cur.execute("UPDATE question_steps SET step_text = ? WHERE id = ?", (new_text, row_id))
            counts["apply_linebreaks"] += 1

# 8. Fix 012126 & 012128 pmatrix row breaks (\ -> \cr) and missing $ wrappers in 012128
pmat_re = re.compile(re.escape(BS + "begin{pmatrix}") + r"(.*?)" + re.escape(BS + "end{pmatrix}"), re.DOTALL)
def fix_pmat(text):
    changed = 0
    def repl(m):
        nonlocal changed
        inner = m.group(1)
        bad_sep = " " + BS + " "
        good_sep = " " + BS + "cr "
        if bad_sep in inner:
            changed += inner.count(bad_sep)
            inner = inner.replace(bad_sep, good_sep)
        return m.group(0)[:len(BS + "begin{pmatrix}")] + inner + BS + "end{pmatrix}"
    return pmat_re.sub(repl, text), changed

def fix_012128_dollars(text):
    changed = 0
    for tag in ["(b) ", "(d) "]:
        old = tag + BS + "begin{pmatrix}"
        new = tag + S + BS + "begin{pmatrix}"
        if old in text:
            changed += text.count(old)
            text = text.replace(old, new)
    old_ins = "base vector " + BS + "begin{pmatrix} 1 " + BS + "cr 2 " + BS + "end{pmatrix}."
    new_ins = "base vector " + S + BS + "begin{pmatrix} 1 " + BS + "cr 2 " + BS + "end{pmatrix}" + S + "."
    if old_ins in text:
        changed += text.count(old_ins)
        text = text.replace(old_ins, new_ins)
    return text, changed

for qid, text in cur.execute("SELECT id, question_text FROM questions WHERE id IN ('012126','012128')").fetchall():
    new_text, n = fix_pmat(text)
    if n:
        cur.execute("UPDATE questions SET question_text = ? WHERE id = ?", (new_text, qid))
        counts["012126_012128_pmatrix_and_dollars"] += n

for row_id, qid, text in cur.execute("SELECT id, question_id, step_text FROM question_steps WHERE question_id IN ('012126','012128')").fetchall():
    new_text, n1 = fix_pmat(text)
    n2 = 0
    if qid == "012128":
        new_text, n2 = fix_012128_dollars(new_text)
    if n1 + n2:
        cur.execute("UPDATE question_steps SET step_text = ? WHERE id = ?", (new_text, row_id))
        counts["012126_012128_pmatrix_and_dollars"] += n1 + n2

for row_id, qid, text in cur.execute("SELECT id, question_id, ans_text FROM question_options WHERE question_id IN ('012126','012128')").fetchall():
    new_text, n1 = fix_pmat(text)
    n2 = 0
    if qid == "012128":
        new_text, n2 = fix_012128_dollars(new_text)
    if n1 + n2:
        cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (new_text, row_id))
        counts["012126_012128_pmatrix_and_dollars"] += n1 + n2

for qid, text in cur.execute("SELECT question_id, content FROM bradley_insights WHERE question_id IN ('012126','012128')").fetchall():
    new_text, n1 = fix_pmat(text)
    n2 = 0
    if qid == "012128":
        new_text, n2 = fix_012128_dollars(new_text)
    if n1 + n2:
        cur.execute("UPDATE bradley_insights SET content = ? WHERE question_id = ?", (new_text, qid))
        counts["012126_012128_pmatrix_and_dollars"] += n1 + n2

conn.commit()

print("\nFixes applied:")
for k, v in counts.items():
    print(f"  {k:34s}: {v}")

# Post-patch verification
P_MAT = re.compile(re.escape(BS + "begin{") + r"[pbv]?matrix\}" + r".*?" + re.escape(BS + "end{") + r"[pbv]?matrix\}", re.DOTALL)
A_MAT = re.compile(re.escape(BS + "begin{aligned}") + r".*?" + re.escape(BS + "end{aligned}"), re.DOTALL)
qs_all = [
    ("Q", "SELECT id, question_text FROM questions"),
    ("S", "SELECT question_id, step_text FROM question_steps"),
    ("O", "SELECT question_id, ans_text FROM question_options"),
    ("F", "SELECT question_id, feedback_text FROM question_options"),
    ("I", "SELECT question_id, content FROM bradley_insights"),
]
bad_matrix = sum(1 for _, q in qs_all for r in cur.execute(q) for m in P_MAT.finditer(r[1] or "") if (BS * 2 not in m.group(0) and BS + "cr" not in m.group(0)))
dollar_in_aligned = sum(1 for _, q in qs_all for r in cur.execute(q) for m in A_MAT.finditer(r[1] or "") if S in m.group(0))
odd_dollar = sum(1 for _, q in qs_all for r in cur.execute(q) if (r[1] or "").replace(D, "").count(S) % 2 == 1)
empty_text_left = sum(1 for _, q in qs_all for r in cur.execute(q) if r[0] in ("004021","004022","004023","004024","004025","004026","004027") and BS + "text{}" in (r[1] or ""))

print("\nPost-patch verification (all should be 0):")
print(f"  bad_matrix               : {bad_matrix}")
print(f"  dollar_in_aligned        : {dollar_in_aligned}")
print(f"  odd_dollar               : {odd_dollar}")
print(f"  empty_text_in_004021_27  : {empty_text_left}")

conn.close()