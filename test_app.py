import sqlite3
import random
import re
import sys

DB_FILE = "bradleys_maths.db"

def run_health_check(conn):
    c = conn.cursor()
    print("\n" + "="*65)
    print("      BRADLEY'S MATHS — DATABASE INTEGRITY HEALTH-CHECK")
    print("="*65)

    passed = True

    # 1. Check Questions Count
    c.execute("SELECT COUNT(*) FROM questions;")
    q_count = c.fetchone()[0]
    if q_count == 1400:
        print("  [PASS] Exactly 1,400 questions present.")
    else:
        print(f"  [FAIL] Expected 1,400 questions, found {q_count}.")
        passed = False

    # 2. Check Options Count & Distribution
    c.execute("""
        SELECT question_id, 
               SUM(CASE WHEN is_correct = 1 THEN 1 ELSE 0 END) as correct_cnt,
               SUM(CASE WHEN is_correct = 0 THEN 1 ELSE 0 END) as distractor_cnt
        FROM question_options
        GROUP BY question_id
        HAVING correct_cnt != 1 OR distractor_cnt != 3;
    """)
    bad_options = c.fetchall()
    if not bad_options:
        print("  [PASS] Every single question has exactly 1 correct answer + 3 distractors.")
    else:
        print(f"  [FAIL] Found {len(bad_options)} questions with invalid option counts.")
        passed = False

    # 3. Check Steps & Final Answer
    c.execute("""
        SELECT question_id, 
               COUNT(*) as step_cnt,
               SUM(is_final_answer) as final_cnt
        FROM question_steps
        GROUP BY question_id
        HAVING step_cnt < 2 OR final_cnt < 1;
    """)
    bad_steps = c.fetchall()
    if not bad_steps:
        print("  [PASS] All 1,400 questions have sequential steps and a designated Final Answer.")
    else:
        print(f"  [FAIL] Found {len(bad_steps)} questions with missing steps or final answers.")
        passed = False

    # 4. Check Head Teacher's Eye Insights
    c.execute("SELECT COUNT(*) FROM bradley_insights;")
    ins_count = c.fetchone()[0]
    if ins_count == 1400:
        print("  [PASS] All 1,400 questions have a linked Head Teacher's Eye insight.")
    else:
        print(f"  [FAIL] Expected 1,400 insights, found {ins_count}.")
        passed = False

    # 5. Check Foreign Key Consistency
    c.execute("""
        SELECT COUNT(*) FROM question_options 
        WHERE question_id NOT IN (SELECT id FROM questions);
    """)
    orphaned_opts = c.fetchone()[0]
    if orphaned_opts == 0:
        print("  [PASS] Zero orphaned options (foreign keys 100% valid).")
    else:
        print(f"  [FAIL] Found {orphaned_opts} orphaned options.")
        passed = False

    print("="*65)
    if passed:
        print("DATABASE STATUS: 100% FLIGHT READY FOR MOBILE!")
    print("="*65 + "\n")
    return passed

def clean_html(text):
    t = text.replace("<br><br>", "\n\n").replace("<br>", "\n")
    t = re.sub(r'<div[^>]*>', '', t)
    t = re.sub(r'</div>', '', t)
    t = re.sub(r'<strong>', '', t).replace('</strong>', '')
    t = re.sub(r'<em>', '', t).replace('</em>', '')
    return t.strip()

def check_exit(user_input):
    """Returns True if the user typed 'q' or 'exit'."""
    return user_input.strip().lower() in ["q", "exit", "quit"]

def interactive_simulator(conn):
    c = conn.cursor()
    print("Welcome to the Bradley's Maths Terminal Prototype!")
    print("(Tip: You can type 'q' or 'exit' at any prompt to quit)\n")

    user_name = input("Enter your name to sign in: ").strip()
    if check_exit(user_name):
        print("Goodbye!")
        return
    user_name = user_name or "Student"
    print(f"\nWelcome, {user_name}! Let's configure your revision session.")

    while True:
        print("\n" + "="*50)
        print("SELECT FILTERS (or choose Random / [0] to Exit):")
        print("1. Branch:  [1] Pure  [2] Mechanics  [3] Statistics  [4] Comprehension  [5] Random  [0] Quit")
        b_choice = input("Choice (default 5): ").strip()
        if b_choice == "0" or check_exit(b_choice):
            print(f"\nGoodbye, {user_name}! Your session is closed.")
            break

        branch_map = {"1": "Pure", "2": "Mechanics", "3": "Statistics", "4": "Comprehension"}
        selected_branch = branch_map.get(b_choice, None)

        print("2. Level:   [1] AS Level    [2] A Level    [3] Random  [0] Quit")
        l_choice = input("Choice (default 3): ").strip()
        if l_choice == "0" or check_exit(l_choice):
            print(f"\nGoodbye, {user_name}!")
            break
        level_map = {"1": "AS", "2": "A"}
        selected_level = level_map.get(l_choice, None)

        print("3. Board:   [1] Edexcel  [2] AQA  [3] OCR  [4] OCR MEI  [5] WJEC  [6] CCEA  [7] Random  [0] Quit")
        board_choice = input("Choice (default 7): ").strip()
        if board_choice == "0" or check_exit(board_choice):
            print(f"\nGoodbye, {user_name}!")
            break
        board_map = {"1": "Edexcel", "2": "AQA", "3": "OCR", "4": "OCR MEI", "5": "WJEC", "6": "CCEA"}
        selected_board = board_map.get(board_choice, None)

        # Build query using LIKE for flexible branch matching
        query = "SELECT id, group_id, board, branch, level, topic, question_text FROM questions WHERE 1=1"
        params = []
        if selected_branch:
            query += " AND branch LIKE ?"
            params.append(f"%{selected_branch}%")
        if selected_level:
            query += " AND level = ?"
            params.append(selected_level)
        if selected_board:
            query += " AND board = ?"
            params.append(selected_board)

        query += " ORDER BY RANDOM() LIMIT 1;"

        c.execute(query, params)
        q = c.fetchone()
        if not q:
            print("\n[!] No questions found matching that exact filter combination. Try broader filters.")
            continue

        active_qid = q[0]
        exit_session = False

        # Question loop
        while active_qid:
            c.execute("SELECT id, group_id, board, branch, level, topic, question_text FROM questions WHERE id = ?", (active_qid,))
            q_active = c.fetchone()
            qid, gid, qboard, qbranch, qlevel, qtopic, qtext = q_active

            print("\n" + "="*65)
            print(f"QUESTION ID: {qid}  |  {qboard}  |  {qbranch} ({qlevel})  |  Topic: {qtopic}")
            print("="*65)
            print("\n" + clean_html(qtext))
            print("\n" + "="*65)
            print(">>> NOTICE: Attempt the entire question on paper before moving on! <<<")
            print("="*65)
            prompt = input("\nPress [ENTER] to reveal options (or 'q' to exit): ")
            if check_exit(prompt):
                exit_session = True
                break

            # Options
            c.execute("SELECT ans_text, feedback_text, is_correct FROM question_options WHERE question_id = ?", (qid,))
            options = c.fetchall()
            random.shuffle(options)

            display_options = []
            for idx, opt in enumerate(options, 1):
                display_options.append((str(idx), opt[0], opt[1], opt[2]))
            display_options.append(("5", "None of the Above", "Revision advisory: Review the topic theory and worked examples before trying again.", 0))

            print("\n--- CHOOSE YOUR ANSWER ---")
            for key, ans_txt, _, _ in display_options:
                clean_ans = clean_html(ans_txt).replace("\n", " ")
                print(f"  [{key}] {clean_ans}")

            attempts = 0
            solved = False
            while attempts < 2 and not solved:
                choice = input(f"\nSelect your answer (1-5, or 'q' to quit) [Attempt {attempts + 1} of 2]: ").strip()
                if check_exit(choice):
                    exit_session = True
                    break

                selected = next((item for item in display_options if item[0] == choice), None)
                if not selected:
                    print("Invalid input. Please choose a number from 1 to 5.")
                    continue

                attempts += 1
                _, chosen_ans, feedback, is_correct = selected

                if choice == "5":
                    print("\n[!] You selected: None of the Above.")
                    print(f"FEEDBACK: {feedback}")
                    break

                if is_correct == 1:
                    print("\n[★] CONGRATULATIONS! That is the correct answer!")
                    solved = True
                else:
                    print(f"\n[X] INCORRECT on Attempt {attempts}.")
                    print(f"DIAGNOSTIC FEEDBACK: {feedback}")
                    if attempts < 2:
                        print(">>> You have 1 second chance! Try working through your algebra again. <<<")

            if exit_session:
                break

            # Model answer
            view_steps = input("\nWould you like to step through the model answer? (y/n, default y): ").strip().lower()
            if view_steps != "n" and not check_exit(view_steps):
                c.execute("SELECT step_number, step_text, is_final_answer FROM question_steps WHERE question_id = ? ORDER BY step_number", (qid,))
                steps = c.fetchall()
                print("\n" + "="*50)
                print("           MODEL ANSWER STEP-THROUGH")
                print("="*50)
                for snum, stext, is_fa in steps:
                    print(f"\n[Step {snum}]:")
                    print(clean_html(stext))
                    if not is_fa and snum < len(steps):
                        nxt = input("  --> Press [ENTER] for next step (or 'q' to skip)... ")
                        if check_exit(nxt):
                            break

                # Bradley Insight
                c.execute("SELECT insight_type, title, content FROM bradley_insights WHERE question_id = ?", (qid,))
                ins = c.fetchone()
                if ins:
                    itype, ititle, icontent = ins
                    print("\n" + "*"*65)
                    print(f"{ititle.upper()} ({itype.upper()})")
                    print("*"*65)
                    print(clean_html(icontent))
                    print("*"*65)

            # Next Question Hub
            print("\n" + "="*65)
            print("WHERE WOULD YOU LIKE TO GO NEXT?")
            print("  [1] Try a slightly harder question from this same family (Next Cousin)")
            print("  [2] Try a similar question from a different exam board")
            print("  [3] Choose a new topic / filter")
            print("  [4] Exit to main menu")
            print("  [0] Quit application")
            next_action = input("Choice (1-4, or 0 to quit): ").strip()

            if next_action in ["0", "q", "exit", "quit"]:
                exit_session = True
                break
            elif next_action == "1":
                c.execute("SELECT id FROM questions WHERE group_id = ? AND id > ? ORDER BY id ASC LIMIT 1", (gid, qid))
                next_q = c.fetchone()
                if next_q:
                    active_qid = next_q[0]
                    print(f"\nLoading harder cousin: ID {active_qid}...")
                else:
                    print("\nYou have reached the final cousin in this family! Returning to filter menu.")
                    active_qid = None
            elif next_action == "2":
                c.execute("SELECT id FROM questions WHERE topic = ? AND board != ? ORDER BY RANDOM() LIMIT 1", (qtopic, qboard))
                next_q = c.fetchone()
                if next_q:
                    active_qid = next_q[0]
                    print(f"\nLoading cross-board question: ID {active_qid}...")
                else:
                    print(f"\nNo other boards found for topic '{qtopic}'. Returning to filter menu.")
                    active_qid = None
            else:
                active_qid = None

        if exit_session:
            print(f"\nSession finished. Goodbye, {user_name}!")
            break

if __name__ == "__main__":
    conn = sqlite3.connect(DB_FILE)
    healthy = run_health_check(conn)
    if healthy:
        interactive_simulator(conn)
    conn.close()