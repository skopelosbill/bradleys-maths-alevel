#!/usr/bin/env python3
"""
Bradley's Maths — Group Structure Probe
"""

import json

with open("bradleys_maths_app/assets/questions.json", "r", encoding="utf-8") as f:
    questions = json.load(f)

# Inspect the 5 questions in group 004246
group_qs = [q for q in questions if q.get("group_id") == "004246"]

print(f"Questions found in group 004246: {len(group_qs)}\n")
for q in group_qs:
    q_text = q.get('question', '').replace('\n', ' ')
    if len(q_text) > 70:
        q_text = q_text[:70] + "..."
    print(f"ID: {q.get('id')} | Board: {q.get('board'):<8} | Level: {q.get('level')} | Subtopic: {q.get('subtopic')}")
    print(f"   Prompt: {q_text}\n")