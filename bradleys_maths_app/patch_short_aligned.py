import os
import re
import shutil
import sqlite3
import sys
from datetime import datetime

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

DB_PATH = "assets/bradleys_maths.db"
STAMP = datetime.now().strftime("%Y%m%d_%H%M%S")
BACKUP_PATH = f"assets/bradleys_maths.db.bak_aligned_{STAMP}"
BS = chr(92)

A_RE = re.compile(
    re.escape(BS + "begin{aligned}") + r".*?" + re.escape(BS + "end{aligned}"),
    re.DOTALL,
)
HEAD_RE = re.compile(
    re.escape(BS + "begin{aligned}")
    + r"\s*&?\s*([A-Za-z][A-Za-z0-9_{}^]{0,7})\s*"
    + re.escape(BS + "cr")
    + r"\s*&\s*"
    + re.escape(BS + "quad")
    + r"\s*=\s*([^\x0a\x0d]{1,60})"
)
LHS_RE = re.compile(
    r"&\s*([A-Za-z][A-Za-z0-9_{}^]{0,7})\s*"
    + re.escape(BS + "cr")
    + r"\s*&\s*"
    + re.escape(BS + "quad")
    + r"\s*="
)
CONT_RE = re.compile(
    r"&\s*" + re.escape(BS + "quad") + r"\s*(=|" + re.escape(BS + "approx") + r")"
)


def main():
    if not os.path.exists(DB_PATH):
        raise FileNotFoundError(f"Cannot find {DB_PATH}")

    shutil.copy2(DB_PATH, BACKUP_PATH)
    print(f"Backup created: {BACKUP_PATH}")

    conn = sqlite3.connect(DB_PATH)
    steps = conn.execute("SELECT id, step_text FROM question_steps").fetchall()
    counts = {"blocks": 0, "rows": 0}

    def repl_block(m):
        block = m.group(0)
        if BS + "qquad" in block:
            return block
        pm = HEAD_RE.match(block)
        if not pm:
            return block
        lhs = pm.group(1)
        rhs1 = pm.group(2).split(BS + "cr")[0].split(BS + "end{aligned}")[0].strip()
        if len(lhs) + len(rhs1) > 22 or BS + "frac" in rhs1 or BS + "dfrac" in rhs1:
            return block
        new_block = LHS_RE.sub(lambda lm: lm.group(1) + " &=", block)
        new_block = CONT_RE.sub(lambda cm: "&" + cm.group(1), new_block)
        if new_block != block:
            counts["blocks"] += 1
        return new_block

    sql_upd = "UPDATE question_steps SET step_text = ? WHERE id = ?"
    for row_id, text in steps:
        if not text:
            continue
        new_text = A_RE.sub(repl_block, text)
        if new_text != text:
            conn.execute(sql_upd, (new_text, row_id))
            counts["rows"] += 1

    conn.commit()
    print(f"Short aligned blocks fixed : {counts['blocks']} (expected 43)")
    print(f"Step rows updated          : {counts['rows']}")

    print("\nSample after patch:")
    sql_q = "SELECT step_text FROM question_steps WHERE question_id = ? AND step_number = ?"
    for qid, snum in [("012056", 2), ("012058", 5)]:
        txt = conn.execute(sql_q, (qid, snum)).fetchone()[0]
        print(f"  {qid}#{snum}: {txt}")

    conn.close()


if __name__ == "__main__":
    main()