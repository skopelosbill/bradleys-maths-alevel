#!/usr/bin/env python3
"""
Bradley's Maths — Bank-Wide Topic vs Subtopic Audit
"""

import json
from collections import defaultdict

with open("bradleys_maths_app/assets/questions.json", "r", encoding="utf-8") as f:
    questions = json.load(f)

branch_stats = defaultdict(lambda: {"total": 0, "identical": 0, "granular": 0})

for q in questions:
    branch = q.get("branch", "Unknown")
    topic = q.get("topic", "").strip().lower()
    subtopics = [s.strip().lower() for s in q.get("subtopic", []) if s.strip()]

    branch_stats[branch]["total"] += 1

    # Check if subtopic is missing, empty, or merely repeats the topic
    if not subtopics or (len(subtopics) == 1 and subtopics[0] == topic):
        branch_stats[branch]["identical"] += 1
    else:
        branch_stats[branch]["granular"] += 1

print("===============================================================")
print("     BRADLEY'S MATHS — BANK-WIDE SUBTOPIC GRANULARITY AUDIT   ")
print("===============================================================\n")
print(f"{'Branch':<15} | {'Total Qs':<10} | {'Identical (sub=topic)':<22} | {'Granular Subtopics'}")
print("-" * 75)

total_all = 0
identical_all = 0
granular_all = 0

for branch, stats in sorted(branch_stats.items()):
    total = stats["total"]
    ident = stats["identical"]
    gran = stats["granular"]
    pct_ident = (ident / total * 100) if total else 0

    total_all += total
    identical_all += ident
    granular_all += gran

    print(f"{branch:<15} | {total:<10} | {ident:>5} ({pct_ident:4.1f}%)        | {gran:>5} ({100-pct_ident:4.1f}%)")

print("=" * 75)
pct_all = (identical_all / total_all * 100) if total_all else 0
print(f"{'TOTAL':<15} | {total_all:<10} | {identical_all:>5} ({pct_all:4.1f}%)        | {granular_all:>5} ({100-pct_all:4.1f}%)")