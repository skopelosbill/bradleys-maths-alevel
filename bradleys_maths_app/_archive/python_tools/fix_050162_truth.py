import sqlite3

db_path = 'assets/bradleys_maths.db'
conn = sqlite3.connect(db_path)
cur = conn.cursor()

print("=" * 60)
print("     UPDATING QUESTION 050162 TO TRUE MATHEMATICS")
print("=" * 60)

# 1. Update Step 1 (Group A summary measures)
new_step1 = (
    "<strong>(a) Summary Measures for Group A:</strong><br><br>"
    "For $n = 21$, the median rank is:\\begin{aligned} &\\text{Rank} \\cr "
    "&\\quad = \\dfrac{21 + 1}{2} \\cr &\\quad = 11\\text{th} \\cr "
    "&\\text{Median}_A = 46 \\end{aligned}<br>"
    "Find the quartiles:\\begin{aligned} &Q_1 \\text{ Rank} \\cr "
    "&\\quad = \\dfrac{21 + 1}{4} \\cr &\\quad = 5.5 \\to 6\\text{th} \\cr "
    "&Q_1 = 39 \\cr &Q_3 \\text{ Rank} \\cr "
    "&\\quad = \\dfrac{3(22)}{4} \\cr &\\quad = 16.5 \\to 16\\text{th} \\cr "
    "&Q_3 = 54 \\end{aligned}<br>"
    "Calculate the interquartile range:\\begin{aligned} &\\text{IQR}_A \\cr "
    "&\\quad = 54 - 39 \\cr &\\quad = 15 \\end{aligned}"
)
cur.execute("UPDATE question_steps SET step_text = ? WHERE question_id = '050162' AND step_number = 1", (new_step1,))

# 2. Update Step 3 (Comparison in context)
new_step3 = (
    "<strong>(c) Comparison in Context:</strong><br><br>"
    "<strong>Average:</strong> Group A achieved a higher average mark than Group B, "
    "with a median of $46$ compared to $32$.<br><br>"
    "<strong>Spread:</strong> Both groups exhibited very similar consistency, "
    "with an IQR of $15$ for Group A and $14$ for Group B."
)
cur.execute("UPDATE question_steps SET step_text = ? WHERE question_id = '050162' AND step_number = 3", (new_step3,))

# 3. Update Step 5 (Final Answer)
new_step5 = "Final Answer: (a)(i) $46$, (ii) $15$, (b)(i) $32$, (ii) $14$, (c) Group A higher average, similar spread, (d) Median due to skewness"
cur.execute("UPDATE question_steps SET step_text = ? WHERE question_id = '050162' AND step_number = 5", (new_step5,))

# 4. Update question_options
# Correct Option
cur.execute("""
    UPDATE question_options 
    SET ans_text = '(a)(i) $46$, (ii) $15$, (b)(i) $32$, (ii) $14$, (c) Group A higher average, similar spread, (d) Median due to skewness'
    WHERE question_id = '050162' AND is_correct = 1
""")

# Distractor with 45 (the counting slip)
cur.execute("""
    UPDATE question_options 
    SET ans_text = '(a)(i) $45$, (ii) $15$, (b)(i) $32$, (ii) $14$, (c) Group A higher average, similar spread, (d) Median due to skewness',
        feedback_text = 'Reading leaves from the stem outward for Group A gives 46 for the 11th value. A mark of 45 is only the 10th value.'
    WHERE question_id = '050162' AND is_correct = 0 AND feedback_text LIKE '%Reading leaves%'
""")

# Invert average distractor
cur.execute("""
    UPDATE question_options 
    SET ans_text = '(a)(i) $46$, (ii) $15$, (b)(i) $32$, (ii) $14$, (c) Group B higher average, similar spread, (d) Median due to skewness',
        feedback_text = 'Inverting the average comparison is incorrect; Group A has a higher median of 46 compared to 32 for Group B.'
    WHERE question_id = '050162' AND is_correct = 0 AND feedback_text LIKE '%Inverting the average%'
""")

# Mean/symmetry distractor
cur.execute("""
    UPDATE question_options 
    SET ans_text = '(a)(i) $46$, (ii) $15$, (b)(i) $32$, (ii) $14$, (c) Group A higher average, similar spread, (d) Mean due to symmetry'
    WHERE question_id = '050162' AND is_correct = 0 AND feedback_text LIKE '%Group A is negatively skewed%'
""")

conn.commit()
conn.close()
print("Question 050162 updated to 100% mathematical truth!")