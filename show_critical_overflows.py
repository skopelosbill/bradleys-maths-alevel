#!/usr/bin/env python3
"""Bradley's Maths — Show Tier 3 & Tier 4 Critical Overflows."""

from audit_360_math import audit_text_content, load_questions


def main():
    questions = load_questions()
    critical = []

    for q in questions:
        qid = q.get('id', 'UNKNOWN')
        branch = q.get('branch', '')
        topic = q.get('topic', '')

        for loc, text in [
            ('Question', q.get('question', '')),
            (
                'Bradley Insight Content',
                (q.get('bradley_insight') or {}).get('content', ''),
            ),
        ]:
            for iss in audit_text_content(text):
                if iss['est_width'] >= 56:
                    critical.append((qid, branch, topic, loc, iss))

        for s_idx, step in enumerate(q.get('steps', []), 1):
            for iss in audit_text_content(step):
                if iss['est_width'] >= 56:
                    critical.append(
                        (qid, branch, topic, f'Step {s_idx}', iss)
                    )

        for p_idx, pi in enumerate(q.get('pi_options', []), 1):
            for iss in audit_text_content(pi.get('ans', '')):
                if iss['est_width'] >= 56:
                    critical.append(
                        (qid, branch, topic, f'PI {p_idx} ans', iss)
                    )
            for iss in audit_text_content(pi.get('feedback', '')):
                if iss['est_width'] >= 56:
                    critical.append(
                        (qid, branch, topic, f'PI {p_idx} fb', iss)
                    )

    print(f'Total Critical Overflows (Tier 3 & 4): {len(critical)}\n')
    for idx, (qid, branch, topic, loc, iss) in enumerate(critical, 1):
        print(f"[{idx}] ID: {qid} | {branch} - {topic} | Location: {loc}")
        print(f"    Width: {iss['est_width']} chars | Type: {iss['type']}")
        print(f"    Snippet: {iss['snippet']}")
        print('-' * 70)


if __name__ == '__main__':
    main()