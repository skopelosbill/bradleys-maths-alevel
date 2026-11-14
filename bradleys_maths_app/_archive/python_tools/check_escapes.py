#!/usr/bin/env python3
"""Bradley's Maths — Raw Escape Character Probe."""

import re

# Read the raw text file directly (without JSON parsing)
with open('bradleys_maths_app/assets/questions.json', 'r', encoding='utf-8') as f:
    raw_content = f.read(5000)  # first 5000 chars

# Find the first occurrence of aligned or frac in the raw text
match = re.search(r'(\\+begin\{aligned\}|\\+(?:d)?frac)', raw_content)
if match:
    found = match.group(0)
    print(f'Raw snippet on disk: {found}')
    print(f'Number of backslashes before command: {found.count(chr(92))}')
    print(f'Raw representation: {repr(found)}')
else:
    print('Pattern not found in first 5000 chars.')