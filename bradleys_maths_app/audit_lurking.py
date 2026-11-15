import sqlite3
import re
import sys

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

DB_PATH = "assets/bradleys_maths.db"
REPORT_PATH = "audit_report.txt"

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

lines = []
def log(msg=""):
    lines.append(msg)

# Collect all text fields per question
records = []
for row in cur.execute("SELECT id, group_id, topic, question_text FROM questions ORDER BY id"):
    qid, gid, topic, qtext = row
    records.append((qid, gid, topic, "question_text", qtext or ""))

for row in cur.execute("""
    SELECT qs.question_id, q.group_id, q.topic, qs.step_number, qs.step_text
    FROM question_steps qs
    JOIN questions q ON q.id = qs.question_id
    ORDER BY qs.question_id, qs.step_number
"""):
    qid, gid, topic, snum, stext = row
    records.append((qid, gid, topic, f"step_{snum}", stext or ""))

for row in cur.execute("""
    SELECT qo.question_id, q.group_id, q.topic, qo.id, qo.ans_text, qo.feedback_text
    FROM question_options qo
    JOIN questions q ON q.id = qo.question_id
    ORDER BY qo.question_id, qo.id
"""):
    qid, gid, topic, oid, atext, ftext = row
    records.append((qid, gid, topic, f"option_{oid}", atext or ""))
    if ftext:
        records.append((qid, gid, topic, f"feedback_{oid}", ftext))

for row in cur.execute("""
    SELECT bi.question_id, q.group_id, q.topic, bi.title, bi.content
    FROM bradley_insights bi
    JOIN questions q ON q.id = bi.question_id
    ORDER BY bi.question_id
"""):
    qid, gid, topic, title, content = row
    records.append((qid, gid, topic, "insight_title", title or ""))
    records.append((qid, gid, topic, "insight_content", content or ""))

# 1. Locate 3x^2 + 6x + 8 and inspect its whole topic
log("=" * 72)
log("1. TARGET QUESTION (3x^2 + 6x + 8) & ITS SECTION")
log("=" * 72)
target_topics = set()
for qid, gid, topic, field, text in records:
    compact = re.sub(r"\s+", "", text)
    if "3x^2+6x+8" in compact:
        target_topics.add(topic)
        log(f"MATCH -> ID={qid} | group={gid} | topic={topic} | field={field}")
        log(f"  TEXT: {text}")

if target_topics:
    log("\nAll questions in same topic(s) containing '\\in':")
    for t in sorted(target_topics):
        for qid, gid, topic, field, text in records:
            if topic == t and "\\in" in text:
                log(f"  {qid} [{field}]: {text}")
else:
    log("No exact '3x^2+6x+8' match found.")

# 2. Synthetic division check
log("\n" + "=" * 72)
log("2. 'SYNTHETIC' / 'SYNTHETIC DIVISION' HITS")
log("=" * 72)
synth_hits = []
for qid, gid, topic, field, text in records:
    if "synthetic" in text.lower():
        synth_hits.append((qid, topic, field, text))
log(f"Total occurrences of 'synthetic': {len(synth_hits)}")
for qid, topic, field, text in synth_hits:
    log(f"  {qid} ({topic}) [{field}]: {text}")

# 3. Squished domain restrictions & \textbb
log("\n" + "=" * 72)
log("3. SQUISHED DOMAINS (missing comma/space before \\in) & \\textbb")
log("=" * 72)
domain_hits = []
textbb_hits = []
for qid, gid, topic, field, text in records:
    if "\\textbb" in text:
        textbb_hits.append((qid, field, text))
    for m in MATH_RE.finditer(text):
        span = m.group(0)
        for im in re.finditer(r"\\in\s*\\mathbb", span):
            start_ctx = max(2 if span.startswith(DDOLLAR) else 1, im.start() - 18)
            before = span[start_ctx:im.start()]
            # Flag if there is substantial expression before \in with no comma, semicolon, pipe, colon, or \quad
            stripped = before.strip()
            if len(stripped) > 3 and not any(sep in before for sep in [",", ";", "|", ":", "\\quad", "\\qquad", "\\text", "for", "where", "if", "\\implies", "\\Rightarrow"]):
                domain_hits.append((qid, topic, field, span))
                break

log(f"\\textbb hits: {len(textbb_hits)}")
for h in textbb_hits:
    log(f"  {h}")
log(f"Suspicious squished domain hits: {len(domain_hits)}")
for qid, topic, field, span in domain_hits:
    log(f"  {qid} ({topic}) [{field}]: {span}")

# 4. Unescaped trig/log inside math spans
log("\n" + "=" * 72)
log("4. UNESCAPED TRIG/LOG (sin, cos, tan, sec, cosec, cot, log, ln)")
log("=" * 72)
trig_hits = []
TRIG_RE = re.compile(r"(?<![\\a-zA-Z])(sin|cos|tan|sec|cosec|cot|log|ln)(?=\s*[\(\^a-zA-Z0-9\\])")
for qid, gid, topic, field, text in records:
    for m in MATH_RE.finditer(text):
        span = m.group(0)
        # Skip text inside \text{...}
        cleaned = re.sub(r"\\text\{[^}]*\}", "", span)
        if TRIG_RE.search(cleaned):
            trig_hits.append((qid, field, span))
            break
log(f"Total fields with possible unescaped trig/log: {len(trig_hits)}")
for qid, field, span in trig_hits[:50]:
    log(f"  {qid} [{field}]: {span}")
if len(trig_hits) > 50:
    log(f"  ... ({len(trig_hits) - 50} more saved in report)")

# 5. Missing spaces around math delimiters & prose double-words / punctuation
log("\n" + "=" * 72)
log("5. MISSING SPACES AROUND MATH, DOUBLE WORDS & PROSE PUNCTUATION")
log("=" * 72)
space_hits = []
double_word_hits = []
punct_hits = []

DUP_RE = re.compile(r"\b(the|is|are|was|were|of|to|in|and|or|for|that|with|a|an|at|by|from)\s+\1\b", re.IGNORECASE)
PUNCT_RE = re.compile(r"(?<!e\.g)(?<!i\.e)(?<!\d)[,\.](?=[A-Za-z])")

for qid, gid, topic, field, text in records:
    # Check chars touching math boundaries
    for m in MATH_RE.finditer(text):
        s, e = m.span()
        prev_c = text[s - 1] if s > 0 else " "
        next_c = text[e] if e < len(text) else " "
        if re.match(r"[A-Za-z0-9,;:]", prev_c) or re.match(r"[A-Za-z0-9]", next_c):
            ctx = text[max(0, s - 15):min(len(text), e + 15)]
            space_hits.append((qid, field, ctx))
            break

    # Prose-only checks (replace math with token)
    prose = MATH_RE.sub(" __MATH__ ", text)
    prose_no_html = re.sub(r"<[^>]+>", " ", prose)
    if DUP_RE.search(prose_no_html):
        double_word_hits.append((qid, field, DUP_RE.search(prose_no_html).group(0), prose_no_html[:140]))
    if PUNCT_RE.search(prose_no_html):
        # ignore URLs like .co.uk or file extensions .png/.svg
        if not any(ext in prose_no_html for ext in [".co.uk", ".com", ".png", ".svg", "e.g.", "i.e."]):
            punct_hits.append((qid, field, prose_no_html[:140]))

log(f"Missing space touching math delimiter: {len(space_hits)}")
for h in space_hits[:40]:
    log(f"  {h}")
log(f"Double-word hits: {len(double_word_hits)}")
for h in double_word_hits:
    log(f"  {h}")
log(f"Missing space after comma/period in prose: {len(punct_hits)}")
for h in punct_hits[:40]:
    log(f"  {h}")

# 6. Option key sanity check
log("\n" + "=" * 72)
log("6. OPTION KEY SANITY CHECK (must have >=2 options and exactly 1 correct)")
log("=" * 72)
bad_opts = []
for row in cur.execute("""
    SELECT q.id,
           COUNT(qo.id) AS total_opts,
           COALESCE(SUM(qo.is_correct), 0) AS correct_opts
    FROM questions q
    LEFT JOIN question_options qo ON q.id = qo.question_id
    GROUP BY q.id
    HAVING total_opts < 2 OR correct_opts != 1
"""):
    bad_opts.append(row)
log(f"Questions with abnormal option counts/correct flags: {len(bad_opts)}")
for b in bad_opts:
    log(f"  {b}")

report = "\n".join(lines)
with open(REPORT_PATH, "w", encoding="utf-8") as f:
    f.write(report)

# Print summary + Sections 1, 2, 3, 6 straight to terminal
print(f"Audit complete! Full report saved to {REPORT_PATH}\n")
print(f"Summary counts:")
print(f"  - Target 3x^2+6x+8 topic(s) matched : {len(target_topics)}")
print(f"  - 'synthetic' hits                  : {len(synth_hits)}")
print(f"  - \\textbb hits                      : {len(textbb_hits)}")
print(f"  - Suspicious squished domains       : {len(domain_hits)}")
print(f"  - Possible unescaped trig/log       : {len(trig_hits)}")
print(f"  - Missing space around math         : {len(space_hits)}")
print(f"  - Double-word typos                 : {len(double_word_hits)}")
print(f"  - Missing space after prose , or .  : {len(punct_hits)}")
print(f"  - Abnormal option/correct keys      : {len(bad_opts)}")