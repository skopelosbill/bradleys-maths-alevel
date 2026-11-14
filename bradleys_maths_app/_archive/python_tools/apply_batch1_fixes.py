import sqlite3

db_path = 'assets/bradleys_maths.db'
conn = sqlite3.connect(db_path)
cur = conn.cursor()

print("=" * 70)
print("     APPLYING BATCH 1 PARITY & SYNTAX FIXES")
print("=" * 70)

# ---------------------------------------------------------------------
# 1. FIX 004036 STEP 6 (ROGUE $$ DELIMITER INSIDE ALIGNED)
# ---------------------------------------------------------------------
cur.execute("SELECT step_text FROM question_steps WHERE question_id = '004036' AND step_number = 6")
step_row = cur.fetchone()
if step_row:
    cleaned_step6 = step_row[0].replace('+ 5$$ \\cr', '+ 5 \\cr')
    cur.execute(
        "UPDATE question_steps SET step_text = ? WHERE question_id = '004036' AND step_number = 6", 
        (cleaned_step6,)
    )
    print("  [FIXED] 004036 Step 6: Removed rogue '$$' delimiter.")

# ---------------------------------------------------------------------
# 2. FIX GROUP 004036 - 004040 (FINAL ANSWER STEPS & OPTIONS)
# ---------------------------------------------------------------------
group_4036_data = {
    '004036': {
        'final_answer_step': 'Final Answer: <strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{5}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 10b + 5) = 0$$ <strong>(c)</strong> $$b \\approx 2.721 \\text{ signed area cancellation}$$',
        'options': [
            '<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{5}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 10b + 5) = 0$$ <strong>(c)</strong> $$b \\approx 2.721 \\text{ signed area cancellation}$$',
            '<strong>(a)</strong> $$\\text{Area } R_1 = -\\dfrac{5}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 10b + 5) = 0$$ <strong>(c)</strong> $$b \\approx 2.721 \\text{ turning point}$$',
            '<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{5}{12}$$ <strong>(b)</strong> $$(b-1)^2(3b^2 - 10b + 5) = 0$$ <strong>(c)</strong> $$b \\approx 2.721 \\text{ area cancellation}$$',
            '<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{5}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 10b + 5) = 0$$ <strong>(c)</strong> $$b \\approx 2.721 \\text{ local minimum}$$',
        ]
    },
    '004037': {
        'final_answer_step': 'Final Answer: <strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{7}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 14b + 7) = 0$$ <strong>(c)</strong> $$b \\approx 4.097 \\text{ signed area cancellation}$$',
        'options': [
            '<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{7}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 14b + 7) = 0$$ <strong>(c)</strong> $$b \\approx 4.097 \\text{ signed area cancellation}$$',
            '<strong>(a)</strong> $$\\text{Area } R_1 = -\\dfrac{7}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 14b + 7) = 0$$ <strong>(c)</strong> $$b \\approx 4.097 \\text{ turning point}$$',
            '<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{7}{12}$$ <strong>(b)</strong> $$(b-1)^2(3b^2 - 14b + 7) = 0$$ <strong>(c)</strong> $$b \\approx 4.097 \\text{ area cancellation}$$',
            '<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{7}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 14b + 7) = 0$$ <strong>(c)</strong> $$b \\approx 4.097 \\text{ local minimum}$$',
        ]
    },
    '004038': {
        'final_answer_step': 'Final Answer: <strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{16}{3}$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 16b + 16) = 0$$ <strong>(c)</strong> $$b = 4 \\text{ signed area cancellation}$$',
        'options': [
            '<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{16}{3}$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 16b + 16) = 0$$ <strong>(c)</strong> $$b = 4 \\text{ signed area cancellation}$$',
            '<strong>(a)</strong> $$\\text{Area } R_1 = -\\dfrac{16}{3}$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 16b + 16) = 0$$ <strong>(c)</strong> $$b = 4 \\text{ turning point}$$',
            '<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{16}{3}$$ <strong>(b)</strong> $$(b-2)^2(3b^2 - 16b + 16) = 0$$ <strong>(c)</strong> $$b = 4 \\text{ area cancellation}$$',
            '<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{16}{3}$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 16b + 16) = 0$$ <strong>(c)</strong> $$b = 4 \\text{ local minimum}$$',
        ]
    },
    '004039': {
        'final_answer_step': 'Final Answer: <strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{81}{4}$$ <strong>(b)</strong> $$(b+3)^2(b-3)^2 = 0$$ <strong>(c)</strong> $$b = 3 \\text{ signed area cancellation}$$',
        'options': [
            '<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{81}{4}$$ <strong>(b)</strong> $$(b+3)^2(b-3)^2 = 0$$ <strong>(c)</strong> $$b = 3 \\text{ signed area cancellation}$$',
            '<strong>(a)</strong> $$\\text{Area } R_1 = -\\dfrac{81}{4}$$ <strong>(b)</strong> $$(b+3)^2(b-3)^2 = 0$$ <strong>(c)</strong> $$b = 3 \\text{ turning point}$$',
            '<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{81}{4}$$ <strong>(b)</strong> $$(b-3)^4 = 0$$ <strong>(c)</strong> $$b = 3 \\text{ area cancellation}$$',
            '<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{81}{4}$$ <strong>(b)</strong> $$(b+3)^2(b-3)^2 = 0$$ <strong>(c)</strong> $$b = 3 \\text{ local minimum}$$',
        ]
    },
    '004040': {
        'final_answer_step': 'Final Answer: <strong>(a)</strong> $$\\text{Area } R_1 = 8$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 24b + 24) = 0$$ <strong>(c)</strong> $$b \\approx 6.828 \\text{ signed area cancellation}$$',
        'options': [
            '<strong>(a)</strong> $$\\text{Area } R_1 = 8$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 24b + 24) = 0$$ <strong>(c)</strong> $$b \\approx 6.828 \\text{ signed area cancellation}$$',
            '<strong>(a)</strong> $$\\text{Area } R_1 = -8$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 24b + 24) = 0$$ <strong>(c)</strong> $$b \\approx 6.828 \\text{ turning point}$$',
            '<strong>(a)</strong> $$\\text{Area } R_1 = 8$$ <strong>(b)</strong> $$(b-2)^2(3b^2 - 24b + 24) = 0$$ <strong>(c)</strong> $$b \\approx 6.828 \\text{ area cancellation}$$',
            '<strong>(a)</strong> $$\\text{Area } R_1 = 8$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 24b + 24) = 0$$ <strong>(c)</strong> $$b \\approx 6.828 \\text{ local minimum}$$',
        ]
    },
}

for q_id, q_data in group_4036_data.items():
    # Update question_steps where is_final_answer = 1
    cur.execute(
        "UPDATE question_steps SET step_text = ? WHERE question_id = ? AND is_final_answer = 1", 
        (q_data['final_answer_step'], q_id)
    )
    
    # Update question_options rows
    cur.execute("SELECT id FROM question_options WHERE question_id = ? ORDER BY id", (q_id,))
    option_rows = cur.fetchall()
    for (opt_id,), new_ans in zip(option_rows, q_data['options']):
        cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (new_ans, opt_id))
    print(f"  [UPDATED] Group 004036: Question {q_id} final answer step and options aligned.")

# ---------------------------------------------------------------------
# 3. FIX GROUP 004031 - 004035 (REMOVE ROGUE &, FIX SS TYPO, PARITY)
# ---------------------------------------------------------------------
group_4031_options = {
    '004031': [
        '<strong>(a)</strong> $V = 15000(0.8)^t$ <strong>(b)</strong> Model is highly reliable ($\approx$ £2,517 vs £2,500) <strong>(c)</strong> Increase the base (e.g. $V = 15000(r)^t$ where $r > 0.8$)',
        '<strong>(a)</strong> $V = 15000 - 3000t$ <strong>(b)</strong> Model is highly reliable ($\approx$ £2,517 vs £2,500) <strong>(c)</strong> Increase the base (e.g. $V = 15000(r)^t$ where $r > 0.8$)',
        '<strong>(a)</strong> $V = 15000(0.8)^t$ <strong>(b)</strong> Model is highly reliable ($\approx$ £2,517 vs £2,500) <strong>(c)</strong> Decrease the base (e.g. $V = 15000(r)^t$ where $r < 0.8$)',
        '<strong>(a)</strong> $V = 15000(0.2)^t$ <strong>(b)</strong> Model is completely unreliable <strong>(c)</strong> Increase the base (e.g. $V = 15000(r)^t$ where $r > 0.8$)',
    ],
    '004032': [
        '<strong>(a)</strong> $V = 50000(0.85)^t$ <strong>(b)</strong> Model is less reliable (underestimates value by $\approx$ £2,888) <strong>(c)</strong> Increase the base (e.g. $V = 50000(r)^t$ where $r > 0.85$)',
        '<strong>(a)</strong> $V = 50000(0.85)^t$ <strong>(b)</strong> Model is highly reliable <strong>(c)</strong> Increase the base (e.g. $V = 50000(r)^t$ where $r > 0.85$)',
        '<strong>(a)</strong> $V = 50000 - 7500t$ <strong>(b)</strong> Model is less reliable (underestimates value by $\approx$ £2,888) <strong>(c)</strong> Increase the base (e.g. $V = 50000(r)^t$ where $r > 0.85$)',
        '<strong>(a)</strong> $V = 50000(0.85)^t$ <strong>(b)</strong> Model is less reliable (underestimates value by $\approx$ £2,888) <strong>(c)</strong> Decrease the base (e.g. $V = 50000(r)^t$ where $r < 0.85$)',
    ],
    '004033': [
        '<strong>(a)</strong> $V = 100000(0.9)^t$ <strong>(b)</strong> Model is highly reliable ($\approx$ £34,868 vs £35,000) <strong>(c)</strong> Increase the base (e.g. $V = 100000(r)^t$ where $r > 0.9$)',
        '<strong>(a)</strong> $V = 100000(0.9)^t$ <strong>(b)</strong> Model is highly reliable ($\approx$ £34,868 vs £35,000) <strong>(c)</strong> Decrease the base (e.g. $V = 100000(r)^t$ where $r < 0.9$)',
        '<strong>(a)</strong> $V = 100000 - 10000t$ <strong>(b)</strong> Model is highly reliable <strong>(c)</strong> Increase the base (e.g. $V = 100000(r)^t$ where $r > 0.9$)',
        '<strong>(a)</strong> $V = 100000(0.1)^t$ <strong>(b)</strong> Model is completely unreliable <strong>(c)</strong> Increase the base (e.g. $V = 100000(r)^t$ where $r > 0.9$)',
    ],
    '004034': [
        '<strong>(a)</strong> $V = 40000(0.75)^t$ <strong>(b)</strong> Model is highly reliable ($\approx$ £4,005 vs £4,000) <strong>(c)</strong> Increase the base (e.g. $V = 40000(r)^t$ where $r > 0.75$)',
        '<strong>(a)</strong> $V = 40000(0.75)^t$ <strong>(b)</strong> Model is highly reliable ($\approx$ £4,005 vs £4,000) <strong>(c)</strong> Decrease the base (e.g. $V = 40000(r)^t$ where $r < 0.75$)',
        '<strong>(a)</strong> $V = 40000(0.25)^t$ <strong>(b)</strong> Model is completely unreliable <strong>(c)</strong> Increase the base (e.g. $V = 40000(r)^t$ where $r > 0.75$)',
        '<strong>(a)</strong> $V = 40000 - 1250t$ <strong>(b)</strong> Model is highly reliable <strong>(c)</strong> Increase the base (e.g. $V = 40000(r)^t$ where $r > 0.75$)',
    ],
    '004035': [
        '<strong>(a)</strong> $V = 30000(0.8)^t$ <strong>(b)</strong> Model is highly reliable ($\approx$ £7,864 vs £7,800) <strong>(c)</strong> Increase the base (e.g. $V = 30000(r)^t$ where $r > 0.8$)',
        '<strong>(a)</strong> $V = 30000(0.8)^t$ <strong>(b)</strong> Model is highly reliable ($\approx$ £7,864 vs £7,800) <strong>(c)</strong> Decrease the base (e.g. $V = 30000(r)^t$ where $r < 0.8$)',
        '<strong>(a)</strong> $V = 30000(0.2)^t$ <strong>(b)</strong> Model is completely unreliable <strong>(c)</strong> Increase the base (e.g. $V = 30000(r)^t$ where $r > 0.8$)',
        '<strong>(a)</strong> $V = 30000 - 6000t$ <strong>(b)</strong> Model is highly reliable <strong>(c)</strong> Increase the base (e.g. $V = 30000(r)^t$ where $r > 0.8$)',
    ],
}

for q_id, opt_texts in group_4031_options.items():
    cur.execute("SELECT id FROM question_options WHERE question_id = ? ORDER BY id", (q_id,))
    option_rows = cur.fetchall()
    for (opt_id,), new_ans in zip(option_rows, opt_texts):
        cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (new_ans, opt_id))
    print(f"  [UPDATED] Group 004031: Question {q_id} options aligned cleanly.")

conn.commit()
conn.close()

print("=" * 70)
print("  ALL UPDATES COMMITTED TO assets/bradleys_maths.db")
print("=" * 70)