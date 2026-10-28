#!/usr/bin/env python3
"""Bradley's Maths — Overflow Triage & Severity Analyzer

Categorizes math expressions into severity tiers and shows the top 10 worst offenders.
"""

import json
import os
import re
import sqlite3
import sys

# Import width estimator from our auditor script
from audit_360_math import audit_text_content, load_questions


def main():
    questions = load_questions()
    all_findings = []

    for q in questions:
        qid = q.get('id', 'UNKNOWN')
        branch = q.get('branch', '')
        topic = q.get('topic', '')

        # Check prompt
        for iss in audit_text_content(q.get('question', '')):
            all_findings.append((qid, branch, topic, 'Question', iss))

        # Check steps
        for s_idx, step in enumerate(q.get('steps', []), 1):
            for iss in audit_text_content(step):
                all_findings.append(
                    (qid, branch, topic, f'Step {s_idx}', iss)
                )

        # Check distractors
        for p_idx, pi in enumerate(q.get('pi_options', []), 1):
            for iss in audit_text_content(pi.get('ans', '')):
                all_findings.append(
                    (qid, branch, topic, f'PI {p_idx} ans', iss)
                )
            for iss in audit_text_content(pi.get('feedback', '')):
                all_findings.append(
                    (qid, branch, topic, f'PI {p_idx} fb', iss)
                )

        # Check insight
        bi = q.get('bradley_insight', {})
        if isinstance(bi, dict):
            for iss in audit_text_content(bi.get('content', '')):
                all_findings.append((qid, branch, topic, 'Insight', iss))

    # Tiers
    # Tier 1: Borderline (Est width 35 - 45 chars) -> usually fits fine
    # Tier 2: Moderate Risk (Est width 46 - 55 chars) -> might wrap or squeeze
    # Tier 3: High Risk (Est width 56 - 65 chars) -> very likely overflow
    # Tier 4: Severe / Catastrophic (> 65 chars) -> definitely overflows 360px
    t1 = [f for f in all_findings if 35 <= f[4]['est_width'] <= 45]
    t2 = [f for f in all_findings if 46 <= f[4]['est_width'] <= 55]
    t3 = [f for f in all_findings if 56 <= f[4]['est_width'] <= 65]
    t4 = [f for f in all_findings if f[4]['est_width'] > 65]

    print('===============================================================')
    print("      BRADLEY'S MATHS — OVERFLOW SEVERITY TRIAGE REPORT        ")
    print('===============================================================')
    print(f'Total Math Findings Flagged: {len(all_findings)}')
    print('---------------------------------------------------------------')
    print(
        f'Tier 1 (Borderline 35-45 chars, mostly safe): {len(t1):>5} ({len(t1)/len(all_findings)*100:4.1f}%)'
    )
    print(
        f'Tier 2 (Moderate   46-55 chars, worth check): {len(t2):>5} ({len(t2)/len(all_findings)*100:4.1f}%)'
    )
    print(
        f'Tier 3 (High Risk  56-65 chars, needs break): {len(t3):>5} ({len(t3)/len(all_findings)*100:4.1f}%)'
    )
    print(
        f'Tier 4 (Severe     > 65 chars, DEFINITE FIX): {len(t4):>5} ({len(t4)/len(all_findings)*100:4.1f}%)'
    )
    print('===============================================================\n')

    # Sort all findings by estimated width descending
    all_findings.sort(key=lambda x: x[4]['est_width'], reverse=True)

    print('TOP 10 LONGEST MATHEMATICAL LINES IN ENTIRE BANK:')
    print('=' * 65)
    for i, (qid, branch, topic, loc, iss) in enumerate(all_findings[:10], 1):
        print(f"#{i} [{qid}] ({branch} - {topic}) at {loc}")
        print(f"   Type: {iss['type']} | Width: {iss['est_width']} chars")
        snippet = iss['snippet'].replace('\n', ' ')
        if len(snippet) > 80:
            snippet = snippet[:80] + '...'
        print(f'   Snippet: {snippet}\n')


if __name__ == '__main__':
    main()