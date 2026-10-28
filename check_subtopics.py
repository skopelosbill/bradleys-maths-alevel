#!/usr/bin/env python3
"""
Bradley's Maths — Subtopic Granularity Probe for Algebra and Functions
"""

import json
from collections import Counter

with open("bradleys_maths_app/assets/questions.json", "r", encoding="utf-8") as f:
    questions = json.load(f)

# Filter for Algebra and Functions
algebra_qs = [q for q in questions if q.get("major_area") == "Algebra and Functions"]

subtopic_counts = Counter()
generic_count = 0

for q in algebra_qs:
    subtopics = q.get("subtopic", [])
    topic = q.get("topic", "")
    for s in subtopics:
        subtopic_counts[s] += 1
        if s.strip().lower() == topic.strip().lower():
            generic_count += 1

print(f"Total questions in Algebra and Functions: {len(algebra_qs)}")
print(f"Questions where subtopic merely repeats topic: {generic_count}")
print("\nBreakdown of Subtopics in Algebra and Functions:")
print("-" * 55)
for sub, count in subtopic_counts.most_common():
    print(f"  {sub:<40} : {count} questions")