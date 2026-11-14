import sqlite3

db_path = 'assets/bradleys_maths.db'
conn = sqlite3.connect(db_path)
cur = conn.cursor()

# 1. Update Question 050162 (Out of 60, reordered split-stems, Group B n=21)
q162_text = (
    "A physics teacher gives the same test (marked out of $60$) to two different classes, "
    "Group A and Group B, each containing $21$ students. The results are shown in the back-to-back "
    "stem-and-leaf diagram below:<br><br>"
    "\\begin{aligned} &\\begin{array}{r|c|l} "
    "\\text{A} & \\text{Stem} & \\text{B} \\cr "
    "\\hline "
    "& 1 & 4\\,8\\,9 \\cr "
    "8\\,5 & 2 & 1\\,3\\,5\\,7\\,8 \\cr "
    "9\\,7\\,4\\,2 & 3 & 0\\,1\\,2\\,4 \\cr "
    "& & 6\\,7\\,8\\,9 \\cr "
    "3\\,1\\,0 & 4 & 1\\,3 \\cr "
    "8\\,7\\,6\\,5 & & 5\\,7 \\cr "
    "5\\,4\\,2\\,0 & 5 & 0 \\cr "
    "9\\,8\\,8\\,6 & & "
    "\\end{array} \\end{aligned}<br><br>"
    "$\\text{Key: } 5 \\mid 2 \\mid 1 $ <br> "
    "$\\text{ represents } 25 \\text{ for A and } 21 \\text{ for B}$<br><br>"
    "<strong>(a)</strong> For Group A:<br><strong>(i)</strong> Find the median mark.<br>"
    "<strong>(ii)</strong> Find the interquartile range (IQR).<br><br>"
    "<strong>(b)</strong> For Group B:<br><strong>(i)</strong> Find the median mark.<br>"
    "<strong>(ii)</strong> Find the interquartile range (IQR).<br><br>"
    "<strong>(c)</strong> Compare the performance of Group A and Group B in context, referencing both "
    "an appropriate measure of average and an appropriate measure of spread.<br><br>"
    "<strong>(d)</strong> State, with a reason, whether the mean or the median is the more appropriate "
    "measure of central tendency to compare these two distributions."
)

cur.execute("UPDATE questions SET question_text = ? WHERE id = '050162'", (q162_text,))
print(f"Updated 050162 question_text: {cur.rowcount} row(s) affected")

# 2. Update Question 050163 (Add 14.1 to make n=25 athletes)
q163_text = (
    "A sports scientist measures the sprint times (in seconds) of $25$ athletes over a $100\\text{ m}$ track. "
    "The recorded times are displayed in the stem-and-leaf diagram below:<br><br>"
    "\\begin{aligned} &\\begin{array}{r|l} "
    "\\text{Stem} & \\text{Leaf} \\cr "
    "\\hline "
    "11 & 8 \\cr "
    "12 & 2\\,5\\,9 \\cr "
    "13 & 1\\,4\\,4\\,6\\,8 \\cr "
    "14 & 0\\,1\\,2\\,3\\,5 \\cr "
    "& 5\\,7\\,8\\,9 \\cr "
    "15 & 1\\,2\\,4\\,6\\,8 \\cr "
    "16 & 1\\,9 "
    "\\end{array} \\end{aligned}<br><br>"
    "$\\text{Key: } 13 \\mid 4$<br> "
    "$\\text{ represents a time of } 13.4\\text{ seconds}$<br><br>"
    "<strong>(a)</strong> State the modal sprint time.<br><br>"
    "<strong>(b)</strong> Calculate:<br><strong>(i)</strong> the median sprint time;<br>"
    "<strong>(ii)</strong> the interquartile range (IQR) of the sprint times.<br><br>"
    "<strong>(c)</strong> The fastest athlete recorded a time of $11.8\\text{ seconds}$ and the slowest athlete recorded a time of $16.9\\text{ seconds}$.<br><br>"
    "Using the $1.5 \\times \\text{IQR}$ rule, determine whether either of these extreme times is an outlier."
)

cur.execute("UPDATE questions SET question_text = ? WHERE id = '050163'", (q163_text,))
print(f"Updated 050163 question_text: {cur.rowcount} row(s) affected")

# 3. Update Question 050161 Step (d) (Fix 8th -> 7th value typo in step)
cur.execute("SELECT id, step_text FROM question_steps WHERE question_id = '050161' AND step_text LIKE '%7.5 \\to 8%'")
step_row = cur.fetchone()
if step_row:
    step_id, old_text = step_row
    new_text = old_text.replace("7.5 \\to 8\\text{th}", "7.5 \\to 7\\text{th}")
    cur.execute("UPDATE question_steps SET step_text = ? WHERE id = ?", (new_text, step_id))
    print(f"Updated 050161 step_text: {cur.rowcount} row(s) affected")
else:
    print("050161 step with '7.5 -> 8' not found or already updated.")

conn.commit()
conn.close()
print("\nAll database updates committed successfully!")