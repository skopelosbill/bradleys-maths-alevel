#!/usr/bin/env python3
"""
Bradley's Maths — List the 33 Pure Questions with Generic Subtopics
"""

import json
from collections import defaultdict

with open("bradleys_maths_app/assets/questions.json", "r", encoding="utf-8") as f:
    questions = json.load(f)

# Find the 33 pure questions
targets = []
for q in questions:
    if q.get("branch") == "Pure":
        t = q.get("topic", "").strip().lower()
        sub = [s.strip().lower() for s in q.get("subtopic", []) if s.strip()]
        if not sub or (len(sub) == 1 and sub[0] == t):
            targets.append(q)

groups = defaultdict(list)
for q in targets:
    groups[q.get("group_id", "No Group")].append(q)

print(f"Total Questions to Tidy: {len(targets)} across {len(groups)} groups\n")

for gid, qlist in groups.items():
    first_q = qlist[0]
    print("=" * 70)
    print(f"GROUP: {gid} | Board: {first_q.get('board')} | Level: {first_q.get('level')} | Topic: {first_q.get('topic')}")
    print("=" * 70)
    for q in qlist:
        prompt = q.get('question', '').replace('\n', ' ')
        # Strip simple HTML for clean terminal display
        prompt = prompt.replace('<br>', ' ').replace('<strong>', '').replace('</strong>', '')
        if len(prompt) > 80:
            prompt = prompt[:80] + "..."
        print(f"  [{q.get('id')}] Prompt: {prompt}")
    print()