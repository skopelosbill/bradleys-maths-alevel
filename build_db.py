import os
import re
import sqlite3
import json

DB_FILE = "bradleys_maths.db"

def clean_str(val):
    if isinstance(val, list):
        return ", ".join(str(x) for x in val)
    if val is None:
        return ""
    return str(val)

def clean_json_list(val):
    if isinstance(val, list):
        return json.dumps(val)
    if isinstance(val, str) and val.strip():
        return json.dumps([val.strip()])
    return json.dumps([])

def init_db(conn):
    cursor = conn.cursor()
    cursor.executescript("""
    DROP TABLE IF EXISTS bradley_insights;
    DROP TABLE IF EXISTS question_options;
    DROP TABLE IF EXISTS question_steps;
    DROP TABLE IF EXISTS questions;
    DROP TABLE IF EXISTS user_attempts;
    DROP TABLE IF EXISTS user_bookmarks;
    DROP TABLE IF EXISTS users;

    CREATE TABLE questions (
        id TEXT PRIMARY KEY,
        group_id TEXT NOT NULL,
        board TEXT NOT NULL,
        branch TEXT NOT NULL,
        level TEXT NOT NULL,
        major_area TEXT NOT NULL,
        topic TEXT NOT NULL,
        subtopics TEXT,
        has_image INTEGER DEFAULT 0,
        question_text TEXT NOT NULL
    );

    CREATE TABLE question_steps (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        question_id TEXT NOT NULL,
        step_number INTEGER NOT NULL,
        step_text TEXT NOT NULL,
        is_final_answer INTEGER DEFAULT 0,
        FOREIGN KEY (question_id) REFERENCES questions(id)
    );

    CREATE TABLE question_options (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        question_id TEXT NOT NULL,
        ans_text TEXT NOT NULL,
        feedback_text TEXT,
        is_correct INTEGER NOT NULL,
        FOREIGN KEY (question_id) REFERENCES questions(id)
    );

    CREATE TABLE bradley_insights (
        question_id TEXT PRIMARY KEY,
        insight_type TEXT NOT NULL,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        FOREIGN KEY (question_id) REFERENCES questions(id)
    );

    CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE,
        name TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE user_attempts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        question_id TEXT NOT NULL,
        first_choice_text TEXT,
        first_choice_correct INTEGER,
        second_choice_text TEXT,
        second_choice_correct INTEGER,
        chose_none_of_above INTEGER DEFAULT 0,
        viewed_model_answer INTEGER DEFAULT 0,
        attempted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (question_id) REFERENCES questions(id)
    );

    CREATE TABLE user_bookmarks (
        user_id INTEGER NOT NULL,
        question_id TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (user_id, question_id)
    );
    """)
    conn.commit()

def extract_question_objects(content):
    objects = []
    for match in re.finditer(r'\{\s*"id"\s*:', content):
        start_idx = match.start()
        brace_count = 0
        in_string = False
        escape = False
        end_idx = -1

        for i in range(start_idx, len(content)):
            char = content[i]
            if escape:
                escape = False
                continue
            if char == '\\':
                escape = True
                continue
            if char == '"':
                in_string = not in_string
                continue
            if not in_string:
                if char == '{':
                    brace_count += 1
                elif char == '}':
                    brace_count -= 1
                    if brace_count == 0:
                        end_idx = i + 1
                        break

        if end_idx != -1:
            raw_obj = content[start_idx:end_idx]
            # 1. Clean trailing commas
            cleaned = re.sub(r',\s*([\}\]])', r'\1', raw_obj)
            # 2. Safeguard: Auto-double any unescaped LaTeX single backslashes
            cleaned = re.sub(r'(?<!\\)\\(?!["\\])', r'\\\\', cleaned)
            try:
                obj = json.loads(cleaned, strict=False)
                objects.append(obj)
            except Exception as e:
                id_sub = re.search(r'"id"\s*:\s*"([^"]+)"', raw_obj)
                qid = id_sub.group(1) if id_sub else "UNKNOWN"
                print(f"  [ERROR] Could not parse question ID {qid}: {e}")

    return objects

def parse_and_insert(conn, root_dir="."):
    cursor = conn.cursor()
    total_inserted = 0
    file_count = 0

    # Sort files to load cleanly
    all_files = []
    for root, _, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".js") and not file.endswith(".bak") and not file.startswith("audit"):
                all_files.append((root, file))

    all_files.sort(key=lambda x: x[1])

    for root, file in all_files:
        path = os.path.join(root, file)
        try:
            with open(path, "r", encoding="utf-8") as f:
                content = f.read()
        except Exception as e:
            print(f"Could not open {file}: {e}")
            continue

        questions = extract_question_objects(content)
        if not questions:
            continue

        file_count += 1
        inserted_this_file = 0

        for q in questions:
            q_id = q.get("id")
            if not q_id:
                continue

            # 1. Insert into questions
            subtopics_str = clean_json_list(q.get("subtopic") or q.get("subtopics"))
            cursor.execute("""
                INSERT OR REPLACE INTO questions (id, group_id, board, branch, level, major_area, topic, subtopics, has_image, question_text)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (
                clean_str(q_id),
                clean_str(q.get("group_id", q_id)),
                clean_str(q.get("board", "Edexcel")),
                clean_str(q.get("branch", "Pure Maths")),
                clean_str(q.get("level", "A")),
                clean_str(q.get("major_area", "")),
                clean_str(q.get("topic", "")),
                subtopics_str,
                1 if q.get("img") else 0,
                clean_str(q.get("question", ""))
            ))

          # 2. Insert Steps
            steps = q.get("steps", [])
            final_ans_text = ""
            for idx, step_text in enumerate(steps, 1):
                step_str = clean_str(step_text)
                # Robust regex match for "Final Answer" with optional HTML tags, spaces, or cases
                match_final = re.search(r'Final\s+Answer\s*[:\-\—]\s*(.*)', step_str, re.IGNORECASE | re.DOTALL)
                is_final = 1 if match_final or idx == len(steps) and "final" in step_str.lower() else 0
                if match_final:
                    final_ans_text = match_final.group(1).strip()
                elif is_final and not final_ans_text:
                    final_ans_text = step_str.strip()

                cursor.execute("""
                    INSERT INTO question_steps (question_id, step_number, step_text, is_final_answer)
                    VALUES (?, ?, ?, ?)
                """, (q_id, idx, step_str, is_final))

            # 3. Insert Options
            # First, correct option
            if final_ans_text:
                cursor.execute("""
                    INSERT INTO question_options (question_id, ans_text, feedback_text, is_correct)
                    VALUES (?, ?, ?, 1)
                """, (q_id, final_ans_text, "Correct! Excellent work."))

            # Next, distractors
            for opt in q.get("pi_options", []):
                cursor.execute("""
                    INSERT INTO question_options (question_id, ans_text, feedback_text, is_correct)
                    VALUES (?, ?, ?, 0)
                """, (q_id, clean_str(opt.get("ans", "")), clean_str(opt.get("feedback", ""))))

            # 4. Insert Bradley Insight
            insight = q.get("bradley_insight")
            if insight:
                cursor.execute("""
                    INSERT OR REPLACE INTO bradley_insights (question_id, insight_type, title, content)
                    VALUES (?, ?, ?, ?)
                """, (
                    q_id,
                    clean_str(insight.get("type", "pro-tip")),
                    clean_str(insight.get("title", "The Head Teacher's Eye")),
                    clean_str(insight.get("content", ""))
                ))

            inserted_this_file += 1
            total_inserted += 1

        print(f"Loaded: {file:<18} -> {inserted_this_file} questions")

    conn.commit()
    return total_inserted

if __name__ == "__main__":
    if os.path.exists(DB_FILE):
        try:
            os.remove(DB_FILE)
        except Exception:
            pass
    
    conn = sqlite3.connect(DB_FILE)
    print("Initialising database tables...")
    init_db(conn)
    print("Parsing files and populating database...\n")
    count = parse_and_insert(conn, ".")
    print(f"\n=======================================================")
    print(f"SUCCESS! Populated {count} questions into '{DB_FILE}'")
    print(f"=======================================================")
    
    cursor = conn.cursor()
    cursor.execute("SELECT COUNT(*) FROM questions;")
    q_count = cursor.fetchone()[0]
    cursor.execute("SELECT COUNT(*) FROM question_options;")
    opt_count = cursor.fetchone()[0]
    cursor.execute("SELECT COUNT(*) FROM question_steps;")
    step_count = cursor.fetchone()[0]
    cursor.execute("SELECT COUNT(*) FROM bradley_insights;")
    ins_count = cursor.fetchone()[0]

    print("\n--- DATABASE SANITY CHECK ---")
    print(f"Questions stored:    {q_count} (Target: 1400)")
    print(f"Options stored:      {opt_count} (Expect ~5600: 4 per question)")
    print(f"Steps stored:        {step_count}")
    print(f"Insights stored:     {ins_count} (Target: 1400)")
    conn.close()