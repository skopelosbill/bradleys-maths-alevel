import sqlite3
import re

db_path = 'assets/bradleys_maths.db'
conn = sqlite3.connect(db_path)
cur = conn.cursor()

print("=" * 60)
print("     APPLYING BATCH 4 (THE FINAL POLISH)")
print("=" * 60)

# 1. Fix 004171 Option 2 (Replace 5.03 with 3-part distractor)
cur.execute("SELECT id FROM question_options WHERE question_id = '004171' AND ans_text LIKE '%5.03%'")
row = cur.fetchone()
if row:
    opt_id = row[0]
    new_ans = (
        "\\begin{aligned}&(x - 3)(2x + 1)(x - 1) \\cr "
        "& {x : x < -0.5 } \\cup {x : 1 < x < 3 } \\cr "
        "&y = 54x^3 - 45x^2 - 12x + 3\\end{aligned}"
    )
    new_fb = "Check your factorisation of the quadratic quotient. The expression 2x^2 + x - 1 factorises into (2x - 1)(x + 1), not (2x + 1)(x - 1)."
    cur.execute("UPDATE question_options SET ans_text = ?, feedback_text = ? WHERE id = ?", (new_ans, new_fb, opt_id))
    print("  • ID 004171: Replaced 5.03 with 3-part factorisation distractor")

# 2. Flatten aligned blocks in 004031 - 004035
print("\n[2] Flattening aligned blocks in 004031 - 004035:")
cur.execute("SELECT id, question_id, ans_text FROM question_options WHERE question_id IN ('004031', '004032', '004033', '004034', '004035') AND ans_text LIKE '%\\begin{aligned}%'")
for opt_id, q_id, ans in cur.fetchall():
    cleaned = ans.replace(r'\begin{aligned}', '').replace(r'\end{aligned}', '')
    cleaned = re.sub(r'\\cr\s*&?\s*', ' ', cleaned)
    cleaned = re.sub(r'\s{2,}', ' ', cleaned).strip()
    cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (cleaned, opt_id))
    print(f"  • ID {q_id}: Inlined")

# 3. Flatten 004104 and 004105
flat_circle_fixes = {
    '004104': {
        2: "(b)(i) $$d^2 + (AB/2)^2 = 25 = R^2 \\text{ is verified}$$ (b)(ii) $$\\text{On the circle}$$",
        3: "(b)(i) $$d^2 + (AB/2)^2 = 25 = R^2 \\text{ is verified}$$ (b)(ii) $$\\text{Outside the circle}$$"
    },
    '004105': {
        2: "(b)(i) $$PT = 8 \\text{ is verified}$$ (b)(ii) $$\\text{Inside the circle}$$",
        3: "(b)(i) $$PT = 8 \\text{ is verified}$$ (b)(ii) $$\\text{On the circle}$$"
    }
}
print("\n[3] Inlining circle proof options (004104, 004105):")
for q_id, opt_map in flat_circle_fixes.items():
    cur.execute("SELECT id FROM question_options WHERE question_id = ? AND is_correct = 0 ORDER BY id", (q_id,))
    distractor_ids = [r[0] for r in cur.fetchall()]
    if len(distractor_ids) >= 2:
        cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (opt_map[2], distractor_ids[0]))
        cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (opt_map[3], distractor_ids[1]))
        print(f"  • ID {q_id}: Options inlined")

# 4. Inlining Proof by Deduction (004162 - 004165)
print("\n[4] Inlining proof expressions (004162 - 004165):")
cur.execute("SELECT id, question_id, ans_text FROM question_options WHERE question_id IN ('004162', '004163', '004164', '004165') AND ans_text LIKE '%\\cr%'")
for opt_id, q_id, ans in cur.fetchall():
    cleaned = ans.replace(r'\begin{aligned}', '').replace(r'\end{aligned}', '')
    cleaned = re.sub(r'\\cr\s*&?\s*', ' ', cleaned)
    cleaned = re.sub(r'\s{2,}', ' ', cleaned).strip()
    if not cleaned.startswith('$$'):
        cleaned = f"$${cleaned}$$"
    cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (cleaned, opt_id))
    print(f"  • ID {q_id}: Inlined -> {cleaned[:50]}")

# 5. Inlining Trig Multi-Solutions (004221, 004224, 004225, 004228, 004261, 004262, 004263, 004264)
trig_ids = ('004221', '004224', '004225', '004228', '004261', '004262', '004263', '004264')
print(f"\n[5] Inlining multi-solution trig linebreaks in {len(trig_ids)} questions:")
cur.execute("SELECT id, question_id, ans_text FROM question_options WHERE question_id IN ({}) AND ans_text LIKE '%\\cr%'".format(','.join(f"'{x}'" for x in trig_ids)))
for opt_id, q_id, ans in cur.fetchall():
    cleaned = re.sub(r'\\cr\s*&?\s*(\\quad)?\s*', ' ', ans)
    cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (cleaned, opt_id))
    print(f"  • ID {q_id}: Inlined")

# 6. Inlining remaining linebreaks (004313, 004319, 004325, 004331, 004333, 004348, 004378, 004390)
misc_ids = ('004313', '004319', '004325', '004331', '004333', '004348', '004378', '004390')
print(f"\n[6] Inlining miscellaneous options in {len(misc_ids)} questions:")
cur.execute("SELECT id, question_id, ans_text FROM question_options WHERE question_id IN ({}) AND ans_text LIKE '%\\cr%'".format(','.join(f"'{x}'" for x in misc_ids)))
for opt_id, q_id, ans in cur.fetchall():
    cleaned = re.sub(r'\\cr\s*&?\s*(\\quad|\\qquad)?\s*', ', \\; ', ans)
    cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (cleaned, opt_id))
    print(f"  • ID {q_id}: Inlined")

conn.commit()
conn.close()
print("\n" + "=" * 60)
print("BATCH 4 FIXES COMMITTED SUCCESSFULLY!")
print("=" * 60)