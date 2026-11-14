#!/usr/bin/env python3
"""Bradley's Maths — Apply Surgical Fixes for Critical Math/Syntax Issues (v2)

Applies exact verified fixes for:
009003, 009023, 012099, 012119, 004659, 004301, 004304, 004305, 004432,
050018, 050283.
"""

import json
import os
import shutil
import sqlite3


def backup_file(path):
    if os.path.exists(path):
        bak = path + '.bak'
        shutil.copyfile(path, bak)
        print(f'-> Backup created: {bak}')


def fix_all(questions):
    fixed_count = 0

    for q in questions:
        qid = q.get('id')

        # 1. Question 009003: Pure \begin{aligned}...\end{aligned} (NO $$)
        if qid == '009003':
            old_q = q['question']
            q['question'] = old_q.replace(
                r'\begin{aligned}\log_{10} Y & = \log_{10} a \cr & \qquad + b'
                r' \log_{10} X$$',
                r'\begin{aligned}\log_{10} Y &= \log_{10} a \cr &\qquad + b'
                r' \log_{10} X\end{aligned}',
            )
            fixed_count += 1

        # 2. Question 009023: Clean single $$ display block
        elif qid == '009023':
            bi = q.get('bradley_insight', {})
            old_c = bi.get('content', '')
            bi['content'] = old_c.replace(
                r'$$\log_{10}(c \cdot x) $$= \log_{10}(c) + \log_{10}(x)$$',
                r'$$\log_{10}(c \cdot x) = \log_{10}(c) + \log_{10}(x)$$',
            )
            fixed_count += 1

        # 3. Question 012099: Option 3 matched to Options 1 & 2 two-line centered layout
        elif qid == '012099':
            for opt in q.get('pi_options', []):
                ans = opt.get('ans', '')
                if '$Sa = 2.0' in ans:
                    opt['ans'] = (
                        r'$$a = 2.0\text{ m s}^{-2},$$ $$ \text{acceleration} ='
                        r' 11.2\text{ m s}^{-2}$$'
                    )
            fixed_count += 1

        # 4. Question 012119: Cases line break
        elif qid == '012119':
            old_q = q['question']
            q['question'] = old_q.replace(
                r'0 \le t \le 4 \ A - 2t', r'0 \le t \le 4 \cr A - 2t'
            )
            fixed_count += 1

        # 5. Question 004659: Vector line break before "Closest point"
        elif qid == '004659':
            # Step 7
            q['steps'][6] = q['steps'][6].replace(
                r'\end{pmatrix}, Closest point',
                r'\end{pmatrix},<br>Closest point',
            )
            # Distractors
            for opt in q.get('pi_options', []):
                opt['ans'] = opt['ans'].replace(
                    r'\end{pmatrix}, Closest point',
                    r'\end{pmatrix},<br>Closest point',
                )
            fixed_count += 1

        # 6. Question 004301: Trig equation line breaks (\cr)
        elif qid == '004301':
            q['steps'][0] = q['steps'][0].replace(
                r'&= \sin\theta  5 - 6 + 6\sin^2\theta &= \sin\theta  6\sin^2\theta - \sin\theta - 1 &= 0',
                r'&= \sin\theta \cr 5 - 6 + 6\sin^2\theta &= \sin\theta \cr 6\sin^2\theta - \sin\theta - 1 &= 0',
            )
            q['steps'][2] = q['steps'][2].replace(
                r'\theta &= 30^\circ  \theta &= 180^\circ - 30^\circ = 150^\circ',
                r'\theta &= 30^\circ \cr \theta &= 180^\circ - 30^\circ = 150^\circ',
            )
            fixed_count += 1

        # 7. Question 004304: Trig equation line breaks (\cr)
        elif qid == '004304':
            q['steps'][0] = q['steps'][0].replace(
                r'&= \cos\theta  1 - 2 + 2\cos^2\theta &= \cos\theta  2\cos^2\theta - \cos\theta - 1 &= 0',
                r'&= \cos\theta \cr 1 - 2 + 2\cos^2\theta &= \cos\theta \cr 2\cos^2\theta - \cos\theta - 1 &= 0',
            )
            q['steps'][3] = q['steps'][3].replace(
                r'\theta &= 180^\circ - 60^\circ = 120^\circ  \theta &= 180^\circ + 60^\circ = 240^\circ',
                r'\theta &= 180^\circ - 60^\circ = 120^\circ \cr \theta &= 180^\circ + 60^\circ = 240^\circ',
            )
            fixed_count += 1

        # 8. Question 004305: Trig equation line breaks (\cr)
        elif qid == '004305':
            q['steps'][0] = q['steps'][0].replace(
                r'\right)\cos\theta &= 3  2\left(',
                r'\right)\cos\theta &= 3 \cr 2\left(',
            )
            q['steps'][1] = q['steps'][1].replace(
                r'\right) &= 3  2\left(1 - \cos^2\theta\right) &= 3\cos\theta  2 - 2\cos^2\theta &= 3\cos\theta  2\cos^2\theta + 3\cos\theta - 2 &= 0',
                r'\right) &= 3 \cr 2\left(1 - \cos^2\theta\right) &= 3\cos\theta \cr 2 - 2\cos^2\theta &= 3\cos\theta \cr 2\cos^2\theta + 3\cos\theta - 2 &= 0',
            )
            q['steps'][4] = q['steps'][4].replace(
                r'= 60^\circ  \theta &=', r'= 60^\circ \cr \theta &='
            )
            fixed_count += 1

        # 9. Question 004432: Missing closing $
        elif qid == '004432':
            q['steps'][2] = q['steps'][2].replace(
                r'h(x) = \dfrac{4x + 2}{x - 2} approaches',
                r'h(x) = \dfrac{4x + 2}{x - 2}$ approaches',
            )
            fixed_count += 1

        # 10. Question 050018: Long inline prob -> pure \begin{aligned}
        elif qid == '050018':
            bi = q.get('bradley_insight', {})
            bi['content'] = bi.get('content', '').replace(
                r'$\text{P}(\text{Accept Stage 1}) + \text{P}(\text{Stage 1 Retest}) \times \text{P}(\text{Accept Stage 2})$',
                r'<br>\begin{aligned} &\text{P}(\text{Accept Stage 1}) \cr &\quad + \text{P}(\text{Stage 1 Retest}) \times \text{P}(\text{Accept Stage 2}) \end{aligned}<br>',
            )
            fixed_count += 1

        # 11. Question 050283: Pure \begin{aligned} (NO $$)
        elif qid == '050283':
            bi = q.get('bradley_insight', {})
            bi['content'] = bi.get('content', '').replace(
                r'$$p\text{-value}$$ &&= 2 \times P(X \le 11)$$ $$= 0.0818$$',
                r'\begin{aligned} p\text{-value} &= 2 \times \text{P}(X \le 11) \cr &= 0.0818 \end{aligned}',
            )
            fixed_count += 1

    return fixed_count


def sync_sqlite(questions, db_path):
    if not os.path.exists(db_path):
        return
    print(f'-> Updating SQLite database: {db_path}')
    conn = sqlite3.connect(db_path)
    cur = conn.cursor()
    for q in questions:
        cur.execute(
            'UPDATE questions SET payload = ? WHERE id = ?',
            (json.dumps(q, ensure_ascii=False), q['id']),
        )
    conn.commit()
    conn.close()
    print('   SQLite database updated successfully.')


def main():
    json_path = 'bradleys_maths_app/assets/questions.json'
    if not os.path.exists(json_path):
        json_path = 'questions.json'

    print(f'Reading: {json_path}')
    with open(json_path, 'r', encoding='utf-8') as f:
        questions = json.load(f)

    # 1. Backups
    backup_file(json_path)
    db_paths = [
        'bradleys_maths.db',
        'bradleys_maths_app/assets/bradleys_maths.db',
    ]
    for db in db_paths:
        backup_file(db)

    # 2. Apply fixes
    count = fix_all(questions)
    print(f'Successfully patched {count} target questions.')

    # 3. Save JSON
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(questions, f, ensure_ascii=False, indent=2)
    print(f'Updated JSON saved to: {json_path}')

    # 4. Sync SQLite
    for db in db_paths:
        sync_sqlite(questions, db)

    print('\nAll files synced! Ready to re-verify.')


if __name__ == '__main__':
    main()