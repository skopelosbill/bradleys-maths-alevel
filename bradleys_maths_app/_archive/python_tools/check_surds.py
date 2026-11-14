#!/usr/bin/env python3
"""
Bradley's Maths — Surds Cross-Board Inventory
"""

import json
from collections import Counter

with open("bradleys_maths_app/assets/questions.json", "r", encoding="utf-8") as f:
    questions = json.load(f)

# Find questions in Algebra and Functions that involve surds
surd_matches = []
for q in questions:
    if q.get("major_area") == "Algebra and Functions":
        text = (q.get("question", "") + " " + " ".join(q.get("steps", []))).lower()
        if "surd" in text or "rationalis" in text or "rationaliz" in text:
            surd_matches.append(q)

board_counts = Counter(q.get("board") for q in surd_matches)

print(f"Total Surd / Rationalisation questions found: {len(surd_matches)}\n")
print("Breakdown by Exam Board:")
print("-" * 35)
for board, count in board_counts.most_common():
    print(f"  {board:<15} : {count} questions")

print("\nSample Questions:")
print("-" * 35)
for q in surd_matches[:5]:
    print(f"ID: {q['id']} | Board: {q['board']:<8} | Level: {q['level']} | Topic: {q['topic']} | Subtopic: {q['subtopic']}")