#!/usr/bin/env python3
"""
Bradley's Maths — Synchronize SQLite Database with Patched questions.json
"""

import json
import os
import sqlite3

TARGET_IDS = [
    "009003", "009023", "012099", "012119", "004659",
    "004301", "004304", "004305", "004432", "050018", "050283"
]

def sync_db(db_path, questions_map):
    if not os.path.exists(db_path):
        return

    print(f"-> Syncing SQLite database at: {db_path}")
    conn = sqlite3.connect(db_path)
    cur = conn.cursor()

    for qid in TARGET_IDS:
        q = questions_map.get(qid)
        if not q:
            continue

        # 1. Update questions table
        cur.execute(
            "UPDATE questions SET question_text = ? WHERE id = ?",
            (q.get("question", ""), qid)
        )

        # 2. Update question_steps table
        cur.execute("DELETE FROM question_steps WHERE question_id = ?", (qid,))
        for idx, step in enumerate(q.get("steps", []), 1):
            is_final = 1 if "Final Answer" in step else 0
            cur.execute("""
                INSERT INTO question_steps (question_id, step_number, step_text, is_final_answer)
                VALUES (?, ?, ?, ?)
            """, (qid, idx, step, is_final))

        # 3. Update question_options table
        cur.execute("DELETE FROM question_options WHERE question_id = ?", (qid,))
        for opt in q.get("pi_options", []):
            cur.execute("""
                INSERT INTO question_options (question_id, ans_text, feedback_text, is_correct)
                VALUES (?, ?, ?, 0)
            """, (qid, opt.get("ans", ""), opt.get("feedback", "")))

        # 4. Update bradley_insights table
        bi = q.get("bradley_insight", {})
        if bi:
            cur.execute("""
                INSERT OR REPLACE INTO bradley_insights (question_id, insight_type, title, content)
                VALUES (?, ?, ?, ?)
            """, (qid, bi.get("type", ""), bi.get("title", ""), bi.get("content", "")))

    conn.commit()
    conn.close()
    print(f"   Successfully synchronized target questions in {db_path}.")

def main():
    json_path = "bradleys_maths_app/assets/questions.json"
    if not os.path.exists(json_path):
        json_path = "questions.json"

    with open(json_path, "r", encoding="utf-8") as f:
        questions = json.load(f)

    questions_map = {q["id"]: q for q in questions}

    db_paths = [
        "bradleys_maths.db",
        "bradleys_maths_app/assets/bradleys_maths.db"
    ]

    for db in db_paths:
        sync_db(db, questions_map)

    print("\nDatabase synchronization complete!")

if __name__ == "__main__":
    main()