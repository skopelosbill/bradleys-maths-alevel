import sqlite3

db_path = 'assets/bradleys_maths.db'
conn = sqlite3.connect(db_path)
cur = conn.cursor()

print("=" * 75)
print("     APPLYING PEDAGOGICAL ALIGNMENT (GROUP 004036 - 004040)")
print("=" * 75)

matrix_data = {
    '004036': {
        'fa': 'Final Answer: <strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{5}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 10b + 5) = 0$$ <strong>(c)</strong> $$b \\approx 2.721 \\text{ signed area cancellation}$$',
        'options': [
            (1, '<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{5}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 10b + 5) = 0$$ <strong>(c)</strong> $$b \\approx 2.721 \\text{ signed area cancellation}$$'),
            (0, '<strong>(a)</strong> $$\\text{Area } R_1 = -\\dfrac{5}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 10b + 5) = 0$$ <strong>(c)</strong> $$b \\approx 2.721 \\text{ signed area cancellation}$$'),
            (0, '<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{5}{12}$$ <strong>(b)</strong> $$(b-1)^2(3b^2 - 10b + 5) = 0$$ <strong>(c)</strong> $$b \\approx 2.721 \\text{ signed area cancellation}$$'),
            (0, '<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{5}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 10b + 5) = 0$$ <strong>(c)</strong> $$b \\approx 2.721 \\text{ local minimum}$$'),
        ]
    },
    '004037': {
        'fa': 'Final Answer: <strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{7}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 14b + 7) = 0$$ <strong>(c)</strong> $$b \\approx 4.097 \\text{ signed area cancellation}$$',
        'options': [
            (1, '<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{7}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 14b + 7) = 0$$ <strong>(c)</strong> $$b \\approx 4.097 \\text{ signed area cancellation}$$'),
            (0, '<strong>(a)</strong> $$\\text{Area } R_1 = -\\dfrac{7}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 14b + 7) = 0$$ <strong>(c)</strong> $$b \\approx 4.097 \\text{ signed area cancellation}$$'),
            (0, '<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{7}{12}$$ <strong>(b)</strong> $$(b-1)^2(3b^2 - 14b + 7) = 0$$ <strong>(c)</strong> $$b \\approx 4.097 \\text{ signed area cancellation}$$'),
            (0, '<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{7}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 14b + 7) = 0$$ <strong>(c)</strong> $$b \\approx 4.097 \\text{ local minimum}$$'),
        ]
    },
    '004038': {
        'fa': 'Final Answer: <strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{16}{3}$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 16b + 16) = 0$$ <strong>(c)</strong> $$b = 4 \\text{ signed area cancellation}$$',
        'options': [
            (1, '<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{16}{3}$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 16b + 16) = 0$$ <strong>(c)</strong> $$b = 4 \\text{ signed area cancellation}$$'),
            (0, '<strong>(a)</strong> $$\\text{Area } R_1 = -\\dfrac{16}{3}$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 16b + 16) = 0$$ <strong>(c)</strong> $$b = 4 \\text{ signed area cancellation}$$'),
            (0, '<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{16}{3}$$ <strong>(b)</strong> $$(b-2)^2(3b^2 - 16b + 16) = 0$$ <strong>(c)</strong> $$b = 4 \\text{ signed area cancellation}$$'),
            (0, '<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{16}{3}$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 16b + 16) = 0$$ <strong>(c)</strong> $$b = 4 \\text{ local minimum}$$'),
        ]
    },
    '004039': {
        'fa': 'Final Answer: <strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{81}{4}$$ <strong>(b)</strong> $$(b+3)^2(b-3)^2 = 0$$ <strong>(c)</strong> $$b = 3 \\text{ signed area cancellation}$$',
        'options': [
            (1, '<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{81}{4}$$ <strong>(b)</strong> $$(b+3)^2(b-3)^2 = 0$$ <strong>(c)</strong> $$b = 3 \\text{ signed area cancellation}$$'),
            (0, '<strong>(a)</strong> $$\\text{Area } R_1 = -\\dfrac{81}{4}$$ <strong>(b)</strong> $$(b+3)^2(b-3)^2 = 0$$ <strong>(c)</strong> $$b = 3 \\text{ signed area cancellation}$$'),
            (0, '<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{81}{4}$$ <strong>(b)</strong> $$(b-3)^4 = 0$$ <strong>(c)</strong> $$b = 3 \\text{ signed area cancellation}$$'),
            (0, '<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{81}{4}$$ <strong>(b)</strong> $$(b+3)^2(b-3)^2 = 0$$ <strong>(c)</strong> $$b = 3 \\text{ local minimum}$$'),
        ]
    },
    '004040': {
        'fa': 'Final Answer: <strong>(a)</strong> $$\\text{Area } R_1 = 8$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 24b + 24) = 0$$ <strong>(c)</strong> $$b \\approx 6.828 \\text{ signed area cancellation}$$',
        'options': [
            (1, '<strong>(a)</strong> $$\\text{Area } R_1 = 8$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 24b + 24) = 0$$ <strong>(c)</strong> $$b \\approx 6.828 \\text{ signed area cancellation}$$'),
            (0, '<strong>(a)</strong> $$\\text{Area } R_1 = -8$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 24b + 24) = 0$$ <strong>(c)</strong> $$b \\approx 6.828 \\text{ signed area cancellation}$$'),
            (0, '<strong>(a)</strong> $$\\text{Area } R_1 = 8$$ <strong>(b)</strong> $$(b-2)^2(3b^2 - 24b + 24) = 0$$ <strong>(c)</strong> $$b \\approx 6.828 \\text{ signed area cancellation}$$'),
            (0, '<strong>(a)</strong> $$\\text{Area } R_1 = 8$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 24b + 24) = 0$$ <strong>(c)</strong> $$b \\approx 6.828 \\text{ local minimum}$$'),
        ]
    },
}

# 1. Update Final Answer steps and options
for q_id, q_data in matrix_data.items():
    # Update question_steps
    cur.execute(
        "UPDATE question_steps SET step_text = ? WHERE question_id = ? AND is_final_answer = 1",
        (q_data['fa'], q_id)
    )
    
    # Update question_options
    cur.execute("SELECT id FROM question_options WHERE question_id = ? ORDER BY id", (q_id,))
    rows = cur.fetchall()
    for (opt_id,), (is_corr, ans_txt) in zip(rows, q_data['options']):
        cur.execute("UPDATE question_options SET ans_text = ? WHERE id = ?", (ans_txt, opt_id))
    print(f"  [ALIGNED] Question {q_id}: Final Answer & 4 options locked to diagnostic matrix.")

# 2. Elevate Bradley Insight on 004039
symmetry_insight = (
    "Pro-tip",
    "The Head Teacher's Eye: The Symmetry Shortcut",
    "Notice that the curve $y = x(x+3)(x-3) = x^3 - 9x$ is an odd function with $180^\\circ$ rotational symmetry about the origin. The area of the lobe above the axis from $-3$ to $0$ must identically equal the area of the lobe below the axis from $0$ to $3$. An astute student can write down $b = 3$ by inspection in 5 seconds without touching a quartic equation!"
)

cur.execute("""
    UPDATE bradley_insights 
    SET insight_type = ?, title = ?, content = ? 
    WHERE question_id = '004039'
""", symmetry_insight)
print("  [INSIGHT UPDATED] 004039: Bradley Insight elevated with the Symmetry Shortcut.")

conn.commit()
conn.close()

print("=" * 75)
print("  PEDAGOGICAL MATRIX COMMITTED TO assets/bradleys_maths.db")
print("=" * 75)