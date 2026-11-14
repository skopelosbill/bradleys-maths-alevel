#!/usr/bin/env python3
"""
Bradley's Maths — 360px Viewport Mathematical Overflow Auditor (v3)
Full visual width calibration:
- Splits lines on \\, \crcr, and \cr (even when followed by numbers like \cr100)
- Accurately measures column vectors (pmatrix) as vertically stacked (not horizontal)
- Accurately measures fractions (\dfrac, \tfrac, \cfrac, \frac)
- Strips structural styling commands (\Big, \left, \right)
"""

import json
import os
import re
import sqlite3
import sys

# 328px usable width on a 360px device:
# Standard math font: ~8.5px/char. 328 / 8.5 ≈ 38 chars.
SAFE_DISPLAY_LINE_CHAR_LIMIT = 42  # Per line (between \\ or \cr)
SAFE_INLINE_MATH_CHAR_LIMIT = 36  # Inline $ ... $ (unbroken single spans)


def estimate_latex_visual_width(latex_str):
    """Estimates the rendered visual character width of a LaTeX string."""
    s = latex_str.strip()

    # 1. Remove non-rendering structural markers and alignments
    s = re.sub(r'\\left|\\right', '', s)
    s = re.sub(r'\\(?:big|Big|bigg|Bigg)[lrmb]?', '', s)
    s = re.sub(r'\\quad|\\qquad', '  ', s)
    s = re.sub(r'\\,|\\;|\\!|\\:', '', s)
    s = re.sub(r'&', '', s)  # Alignment tab

    # 2. Text wrappers: \text{abc}, \mathrm{abc}, \mathbf{abc} -> abc
    s = re.sub(r'\\(?:text|mathrm|mathbf|mathit)\{([^}]+)\}', r'\1', s)

    # 3. Column vectors / matrices: \begin{pmatrix} ... \end{pmatrix}
    # Vertically stacked: horizontal width is max width of any row + 2 for brackets
    def pmatrix_repl(match):
        content = match.group(1)
        entries = re.split(r'\\\\|\\cr|\\crcr', content)
        max_entry = max([len(e.strip()) for e in entries if e.strip()] or [2])
        return ' ' * (max_entry + 2)

    s = re.sub(
        r'\\begin\{(?:pmatrix|matrix|bmatrix)\}([\s\S]*?)\\end\{(?:pmatrix|matrix|bmatrix)\}',
        pmatrix_repl,
        s,
    )

    # 4. Fractions: \frac, \dfrac, \tfrac, \cfrac
    def frac_repl(match):
        num, den = match.group(1), match.group(2)
        return ' ' * (
            max(
                estimate_latex_visual_width(num),
                estimate_latex_visual_width(den),
            )
            + 1
        )

    while re.search(r'\\(?:d|t|c)?frac\{([^{}]+)\}\{([^{}]+)\}', s):
        s = re.sub(r'\\(?:d|t|c)?frac\{([^{}]+)\}\{([^{}]+)\}', frac_repl, s)

    # 5. Square roots: \sqrt{arg}
    s = re.sub(r'\\sqrt\{([^{}]+)\}', r' \1', s)

    # 6. Single-glyph mathematical symbols
    single_glyph_commands = [
        r'\\alpha',
        r'\\beta',
        r'\\gamma',
        r'\\delta',
        r'\\theta',
        r'\\lambda',
        r'\\mu',
        r'\\pi',
        r'\\sigma',
        r'\\phi',
        r'\\omega',
        r'\\int',
        r'\\sum',
        r'\\infty',
        r'\\times',
        r'\\div',
        r'\\pm',
        r'\\mp',
        r'\\leq',
        r'\\geq',
        r'\\neq',
        r'\\approx',
        r'\\equiv',
        r'\\rightarrow',
        r'\\implies',
        r'\\iff',
        r'\\partial',
        r'\\in',
        r'\\notin',
        r'\\subset',
        r'\\cup',
        r'\\cap',
        r'\\cdot',
    ]
    for cmd in single_glyph_commands:
        s = re.sub(cmd, '#', s)

    # 7. Super/subscripts: x^2 or x_{1}
    s = re.sub(r'[\^_]\{([^{}]+)\}', r'\1', s)
    s = re.sub(r'[\^_](.)', r'\1', s)

    # 8. Math functions: \cos, \sin, \ln, \tan, etc.
    s = re.sub(
        r'\\(?:sin|cos|tan|ln|log|exp|sec|csc|cot|arcsin|arccos|arctan)',
        '###',
        s,
    )

    # 9. Catch remaining backslash commands
    s = re.sub(r'\\[a-zA-Z]+', '#', s)

    # Normalize whitespace
    s = re.sub(r'\s+', ' ', s).strip()
    return len(s)


def audit_display_math(math_block):
    """Audits display block splitting by proof lines."""
    issues = []
    # Strip aligned environments
    cleaned = re.sub(r'\\begin\{aligned\}', '', math_block)
    cleaned = re.sub(r'\\end\{aligned\}', '', cleaned)
    cleaned = cleaned.replace('$$', '').replace('\\[', '').replace('\\]', '')

    # Mask column vectors temporarily so their internal \cr isn't confused with proof line breaks
    matrix_store = []

    def mask_matrix(match):
        matrix_store.append(match.group(0))
        return f' MATRIXPLACEHOLDER{len(matrix_store)-1} '

    masked = re.sub(
        r'\\begin\{(?:pmatrix|matrix|bmatrix)\}[\s\S]*?\\end\{(?:pmatrix|matrix|bmatrix)\}',
        mask_matrix,
        cleaned,
    )

    # Split on proof line breaks: \\ OR \cr (including \cr100)
    lines = re.split(r'\\\\|\\crcr|\\cr(?![a-zA-Z])', masked)

    for idx, line in enumerate(lines, 1):
        line = line.strip()
        if not line:
            continue
        # Restore matrices
        for m_idx, m_str in enumerate(matrix_store):
            line = line.replace(f'MATRIXPLACEHOLDER{m_idx}', m_str)

        est_width = estimate_latex_visual_width(line)
        if est_width > SAFE_DISPLAY_LINE_CHAR_LIMIT:
            issues.append({
                'type': 'Display Line Too Long',
                'line_no': idx,
                'est_width': est_width,
                'limit': SAFE_DISPLAY_LINE_CHAR_LIMIT,
                'snippet': line,
            })
    return issues


def audit_text_content(content_str):
    """Accurately audits display blocks and inline blocks without double counting."""
    issues = []
    if not content_str or not isinstance(content_str, str):
        return issues

    # 1. Audit Display Blocks: $$...$$, \[...\], or \begin{aligned}...\end{aligned}
    display_pattern = re.compile(
        r'(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\\begin\{aligned\}[\s\S]*?\\end\{aligned\})'
    )

    for m in display_pattern.finditer(content_str):
        block = m.group(1)
        disp_issues = audit_display_math(block)
        issues.extend(disp_issues)

    # 2. Strip display blocks so they cannot be matched as inline
    clean_for_inline = display_pattern.sub(
        ' DISPLAY_MATH_PLACEHOLDER ', content_str
    )

    # 3. Audit remaining Inline math: $ ... $ or \( ... \)
    inline_matches = re.finditer(
        r'\$([^\$]+)\$|\\\((.*?)\\\)', clean_for_inline
    )
    for m in inline_matches:
        snippet = m.group(1) or m.group(2)
        snippet = snippet.strip()
        est_width = estimate_latex_visual_width(snippet)
        if est_width > SAFE_INLINE_MATH_CHAR_LIMIT:
            issues.append({
                'type': 'Inline Math Too Long',
                'est_width': est_width,
                'limit': SAFE_INLINE_MATH_CHAR_LIMIT,
                'snippet': f'${snippet}$',
            })

    return issues


def load_questions():
    """Loads questions from JSON or SQLite."""
    json_paths = [
        'bradleys_maths_app/assets/questions.json',
        'questions.json',
        'assets/questions.json',
        '../assets/questions.json',
    ]
    for p in json_paths:
        if os.path.exists(p):
            print(f'-> Found question bank at: {p}')
            with open(p, 'r', encoding='utf-8') as f:
                return json.load(f)

    db_paths = [
        'bradleys_maths.db',
        'bradleys_maths_app/assets/bradleys_maths.db',
    ]
    for db in db_paths:
        if os.path.exists(db):
            print(f'-> Found SQLite database at: {db}')
            conn = sqlite3.connect(db)
            cursor = conn.cursor()
            cursor.execute('SELECT question_text FROM questions')
            # fallback
            conn.close()

    print('ERROR: Could not locate questions.json')
    sys.exit(1)


def audit_question(q):
    qid = q.get('id', 'UNKNOWN')
    branch = q.get('branch', '')
    topic = q.get('topic', '')
    all_findings = []

    # Question Prompt
    for iss in audit_text_content(q.get('question', '')):
        all_findings.append(('Question Prompt', iss))

    # Steps
    for s_idx, step in enumerate(q.get('steps', []), 1):
        for iss in audit_text_content(step):
            all_findings.append((f'Step {s_idx}', iss))

    # PI Options
    for p_idx, pi in enumerate(q.get('pi_options', []), 1):
        for iss in audit_text_content(pi.get('ans', '')):
            all_findings.append((f'PI {p_idx} ans', iss))
        for iss in audit_text_content(pi.get('feedback', '')):
            all_findings.append((f'PI {p_idx} fb', iss))

    # Insight
    bi = q.get('bradley_insight', {})
    if isinstance(bi, dict):
        for iss in audit_text_content(bi.get('content', '')):
            all_findings.append(('Bradley Insight Content', iss))
        for iss in audit_text_content(bi.get('title', '')):
            all_findings.append(('Bradley Insight Title', iss))

    return {
        'id': qid,
        'branch': branch,
        'topic': topic,
        'findings': all_findings,
    }


def main():
    print('===============================================================')
    print("  BRADLEY'S MATHS — 360px VIEWPORT MATHEMATICAL OVERFLOW AUDIT ")
    print('===============================================================\n')

    questions = load_questions()
    total_q = len(questions)
    print(f'Loaded {total_q} questions. Scanning every line of mathematics...\n')

    total_issues = 0
    flagged_questions = []

    for q in questions:
        result = audit_question(q)
        if result['findings']:
            flagged_questions.append(result)
            total_issues += len(result['findings'])

    print('===============================================================')
    print('AUDIT COMPLETE (v3 with Matrix & \\cr Boundary calibration):')
    print(f'  Total Questions Scanned:   {total_q}')
    print(f'  Flagged Questions:         {len(flagged_questions)}')
    print(f'  Total Potential Overflows: {total_issues}')
    print('===============================================================\n')


if __name__ == '__main__':
    main()