#!/usr/bin/env python3
"""Bradley's Maths — Target Question Inspector

Prints the exact raw text for the flagged target questions.
"""

from audit_360_math import load_questions

TARGET_IDS = [
    '009003',
    '009023',
    '012099',
    '012119',
    '004659',
    '004301',
    '004304',
    '004305',
    '004432',
    '050018',
    '050283',
]


def main():
    questions = load_questions()
    q_map = {q.get('id'): q for q in questions}

    for qid in TARGET_IDS:
        q = q_map.get(qid)
        if not q:
            continue
        print('=' * 70)
        print(f"QUESTION ID: {qid} | {q.get('branch')} - {q.get('topic')}")
        print('=' * 70)

        if qid in ['009003', '012119']:
            print(f"--- QUESTION PROMPT ---\n{q.get('question')}\n")

        if qid in ['004301', '004304', '004305', '004432', '004659']:
            print('--- STEPS ---')
            for idx, s in enumerate(q.get('steps', []), 1):
                if any(k in s for k in ['\sin', '\cos', 'asymptote', 'lambda', 'pmatrix']):
                    print(f'Step {idx}: {s}')
            print()

        if qid in ['012099', '004659']:
            print('--- PI OPTIONS ---')
            for idx, pi in enumerate(q.get('pi_options', []), 1):
                print(f"Option {idx} ans: {pi.get('ans')}")
            print()

        if qid in ['009023', '050018', '050283']:
            print(
                f"--- BRADLEY INSIGHT ---\n{q.get('bradley_insight', {}).get('content')}\n"
            )


if __name__ == '__main__':
    main()