import sqlite3
import re
import sys

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

DB_PATH = "assets/bradleys_maths.db"
OUT_PATH = "spacing_exact.txt"

SDOLLAR = chr(36)
DDOLLAR = chr(36) * 2
MATH_RE = re.compile(
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

math_space_hits = []
prose_punct_hits = []

PUNCT_RE = re.compile(r"(?<!\d)[,\.](?=[A-Za-z])")

for qid, field, text in records:
    for m in MATH_RE.finditer(text):
        s, e = m.span()
        prev_c = text[s - 1] if s > 0 else " "
        next_c = text[e] if e < len(text) else " "
        bad_before = bool(re.match(r"[A-Za-z,;:]", prev_c))
        bad_after = bool(re.match(r"[A-Za-z0-9]", next_c))
        if bad_before or bad_after:
            snippet = text[max(0, s - 12):min(len(text), e + 12)].replace("\n", " ")
            math_space_hits.append((qid, field, prev_c, next_c, snippet))

    # Strip math and HTML tags cleanly to inspect true prose punctuation
    prose = MATH_RE.sub(" __MATH__ ", text)
    prose = re.sub(r"<[^>]+>", " ", prose)
    for pm in PUNCT_RE.finditer(prose):
        ctx = prose[max(0, pm.start() - 12):min(len(prose), pm.end() + 15)].replace("\n", " ")
        # Ignore common abbreviations, file extensions, and domains
        if any(ok in ctx.lower() for ok in ["e.g.", "i.e.", "a.m.", "p.m.", ".png", ".svg", ".co.uk", ".com", "etc."]):
            continue
        prose_punct_hits.append((qid, field, ctx))

lines = []
lines.append("=" * 72)
lines.append(f"A. TRUE WORD/PUNCTUATION TOUCHING MATH DELIMITER: {len(math_space_hits)}")
lines.append("=" * 72)
for h in math_space_hits:
    lines.append(f"  {h[0]} [{h[1]}] (before={repr(h[2])}, after={repr(h[3])}): {h[4]}")

lines.append("\n" + "=" * 72)
lines.append(f"B. PROSE COMMA/PERIOD MISSING SPACE: {len(prose_punct_hits)}")
lines.append("=" * 72)
for qid, field, ctx in prose_punct_hits:
    lines.append(f"  {qid} [{field}]: {ctx}")

lines.append("\n" + "=" * 72)
lines.append("C. FULL DETAIL OF 004026 & 004027 (STEPS + OPTIONS)")
lines.append("=" * 72)
for qid, field, text in records:
    if qid in ("004026", "004027"):
        lines.append(f"  {qid} [{field}]: {text}")

with open(OUT_PATH, "w", encoding="utf-8") as f:
    f.write("\n".join(lines))

print(f"Saved clean report to {OUT_PATH}")
print(f"  True word/punctuation touching math : {len(math_space_hits)}")
print(f"  True prose comma/period glitches    : {len(prose_punct_hits)}")