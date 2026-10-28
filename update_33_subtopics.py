#!/usr/bin/env python3
"""
Bradley's Maths — Update 33 Pure Questions with Granular Subtopics
"""

import json
import os
import sqlite3

# Exact ID to Subtopic mapping
MAPPING = {
    # Group 004506: Laws of Indices
    "004506": ["Laws of Indices"],
    "004507": ["Laws of Indices"],
    "004508": ["Laws of Indices"],
    "004509": ["Laws of Indices"],
    "004510": ["Laws of Indices"],

    # Group 004516: Factor Theorem
    "004516": ["Factor Theorem"],
    "004517": ["Factor Theorem"],
    "004518": ["Factor Theorem"],
    "004519": ["Factor Theorem"],
    "004520": ["Factor Theorem"],

    # Group 004566: Proof
    "004566": ["Proof by Counterexample"],
    "004567": ["Proof by Counterexample"],
    "004568": ["Proof by Exhaustion"],
    "004570": ["Proof by Contradiction"],

    # Group 004161: Proof
    "004161": ["Deductive Proof"],
    "004162": ["Deductive Proof"],
    "004163": ["Deductive Proof"],
    "004165": ["Proof by Contradiction"],

    # Group 004211: Algebraic Division
    "004213": ["Algebraic Division"],

    # Group 004246: Surds (OCR MEI)
    "004246": ["Surds"],
    "004247": ["Surds"],
    "004248": ["Surds"],

    # Group 004291: Surds (WJEC)
    "004291": ["Surds"],
    "004292": ["Surds"],
    "004293": ["Surds"],
    "004295": ["Surds"],

    # Group 004356: Proof
    "004356": ["Proof by Counterexample"],
    "004358": ["Proof by Counterexample"],
    "004359": ["Proof by Counterexample"],

    # Group 004366: Discriminants
    "004370": ["Discriminants"],

    # Group 004446: Sequences and Series
    "004448": ["Sigma Notation"],
    "004449": ["Arithmetic Progressions"],
    "004450": ["Geometric Progressions"],
}

def sync_sqlite(db_path, mapping):
    if not os.path.exists(db_path):
        return
    print(f"-> Updating SQLite database: {db_path}")
    conn = sqlite3.connect(db_path)
    cur = conn.cursor()
    for qid, sub_list in mapping.items():
        sub_json = json.dumps(sub_list)
        cur.execute("UPDATE questions SET subtopics = ? WHERE id = ?", (sub_json, qid))
    conn.commit()
    conn.close()
    print(f"   Successfully updated subtopics in {db_path}.")

def main():
    json_path = "bradleys_maths_app/assets/questions.json"
    if not os.path.exists(json_path):
        json_path = "questions.json"

    with open(json_path, "r", encoding="utf-8") as f:
        questions = json.load(f)

    updated_count = 0
    for q in questions:
        qid = q.get("id")
        if qid in MAPPING:
            q["subtopic"] = MAPPING[qid]
            updated_count += 1

    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(questions, f, ensure_ascii=False, indent=2)

    print(f"Successfully updated {updated_count} questions in {json_path}.")

    db_paths = [
        "bradleys_maths.db",
        "bradleys_maths_app/assets/bradleys_maths.db"
    ]
    for db in db_paths:
        sync_sqlite(db, MAPPING)

    print("\nAll files synchronized successfully!")

if __name__ == "__main__":
    main()