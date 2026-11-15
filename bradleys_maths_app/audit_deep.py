import sqlite3
import re
import sys
from collections import defaultdict

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

DB_PATH = "assets/bradleys_maths.db"
OUT_PATH = "deep_audit.txt"

SDOLLAR = chr(36)
DDOLLAR = chr(36) * 2
# Tokenize $$...$$ first, then single $...$
TOKEN_RE = re.compile(
    re.escape(DDOLLAR) + r".*?" + re.escape(DDOLLAR)
    + r"|"
    + re.escape(SDOLLAR) + r"[^" + re.escape(SDOLLAR) + r"]+?" + re.escape(SDOLLAR),
    re.DOTALL,
)

conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()

records = []
for qid, qtext in cur.execute("SELECT id, question_text FROM questions ORDER BY id"):
    records.append((qid, "question_text", qtext or ""))
for qid, snum, stext in cur.execute("SELECT question_id, step_number, step_text FROM question_steps ORDER BY question_id, step_number"):
    records.append((qid, f"step_{snum}", stext or ""))
for qid, oid, atext, ftext in cur.execute("SELECT question_id, id, ans_text, feedback_text FROM question_options ORDER BY question_id, id"):
    records.append((qid, f"option_{oid}", atext or ""))
    if ftext:
        records.append((qid, f"feedback_{oid}", ftext))
for qid, title, content in cur.execute("SELECT question_id, title, content FROM bradley_insights ORDER BY question_id"):
    records.append((qid, "insight_title", title or ""))
    records.append((qid, "insight_content", content or ""))

lines = []

# 1. Full 004009 question_text
lines.append("=" * 72)
lines.append("1. FULL TEXT OF 004009")
lines.append("=" * 72)
for qid, field, text in records:
    if qid == "004009":
        lines.append(f"  [{field}]: {text}")

# 2. True inline $...$ spacing collisions (excluding $$...$$ and ordinals)
inline_hits = []
for qid, field, text in records:
    for m in TOKEN_RE.finditer(text):
        span = m.group(0)
        if span.startswith(DDOLLAR):
            continue  # skip display math blocks
        s, e = m.span()
        prev_c = text[s - 1] if s > 0 else " "
        next_c = text[e] if e < len(text) else " "
        bad_before = bool(re.match(r"[A-Za-z,;:]", prev_c))
        bad_after = bool(re.match(r"[A-Za-z0-9]", next_c)) and not re.match(r"^(th|st|nd|rd)\b", text[e:e + 4], re.I)
        if bad_before or bad_after:
            ctx = text[max(0, s - 12):min(len(text), e + 12)].replace("\n", " ")
            inline_hits.append((qid, field, ctx))

lines.append("\n" + "=" * 72)
lines.append(f"2. TRUE INLINE MATH SPACING COLLISIONS: {len(inline_hits)}")
lines.append("=" * 72)
for qid, field, ctx in inline_hits:
    lines.append(f"  {qid} [{field}]: {ctx}")

# 3. Out-of-order \begin{aligned} / \end{aligned} nesting or stray &=
nesting_hits = []
ENV_RE = re.compile(r"\\(begin|end)\{aligned\}")
for qid, field, text in records:
    depth = 0
    bad = False
    for em in ENV_RE.finditer(text):
        depth += 1 if em.group(1) == "begin" else -1
        if depth < 0:
            bad = True
            break
    if depth != 0:
        bad = True
    if bad:
        nesting_hits.append((qid, field, text.replace("\n", " ")))

lines.append("\n" + "=" * 72)
lines.append(f"3. OUT-OF-ORDER / UNBALANCED ALIGNED BLOCKS: {len(nesting_hits)}")
lines.append("=" * 72)
for qid, field, txt in nesting_hits:
    lines.append(f"  {qid} [{field}]: {txt}")

# 4. Duplicate steps within the same question
steps_by_q = defaultdict(list)
for qid, snum, stext in cur.execute("SELECT question_id, step_number, step_text FROM question_steps ORDER BY question_id, step_number"):
    steps_by_q[qid].append((snum, (stext or "").strip()))

dup_steps = []
for qid, slist in sorted(steps_by_q.items()):
    seen = {}
    for snum, stext in slist:
        if stext in seen:
            dup_steps.append((qid, seen[stext], snum, stext[:100].replace("\n", " ")))
        else:
            seen[stext] = snum

lines.append("\n" + "=" * 72)
lines.append(f"4. DUPLICATE STEPS WITHIN SAME QUESTION: {len(dup_steps)}")
lines.append("=" * 72)
for qid, s1, s2, preview in dup_steps:
    lines.append(f"  {qid}: step_{s1} == step_{s2} | {preview}...")

with open(OUT_PATH, "w", encoding="utf-8") as f:
    f.write("\n".join(lines))

print(f"Saved deep audit to {OUT_PATH}")
print(f"  Inline math spacing collisions : {len(inline_hits)}")
print(f"  Mis-nested aligned blocks      : {len(nesting_hits)}")
print(f"  Duplicate question steps       : {len(dup_steps)}")