import os
import re
from collections import defaultdict

def scan_question_bank(root_dir="."):
    """
    Scans all .js and .json files in root_dir and subdirectories,
    extracting id, board, branch, and level for every question.
    """
    # Regex to capture individual question JSON objects inside JS files
    # Matches patterns like {"id": "...", ...}
    question_regex = re.compile(r'\{[^{}]*?"id"\s*:\s*"(\d+)"[^{}]*?\}', re.DOTALL)
    
    # Specific attribute extractors for robustness
    id_re = re.compile(r'"id"\s*:\s*"([^"]+)"')
    board_re = re.compile(r'"board"\s*:\s*"([^"]+)"')
    branch_re = re.compile(r'"branch"\s*:\s*"([^"]+)"')
    level_re = re.compile(r'"level"\s*:\s*"([^"]+)"')

    questions = []
    seen_ids = set()
    duplicates = []

    # Walk directory
    for root, _, files in os.walk(root_dir):
        for file in files:
            if file.endswith((".js", ".json")) and not file.startswith("audit"):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        content = f.read()
                except Exception as e:
                    print(f"Could not read {file_path}: {e}")
                    continue

                # Find all question objects
                # We split by "id": to catch each question cleanly even across multi-line objects
                chunks = re.split(r'(?=\s*\{\s*"id"\s*:)', content)
                for chunk in chunks:
                    id_match = id_re.search(chunk)
                    if not id_match:
                        continue
                    
                    q_id = id_match.group(1).strip()
                    if q_id in seen_ids:
                        duplicates.append((q_id, file))
                    else:
                        seen_ids.add(q_id)

                    # Extract attributes with normalisation
                    board_match = board_re.search(chunk)
                    branch_match = branch_re.search(chunk)
                    level_match = level_re.search(chunk)

                    raw_board = board_match.group(1).strip() if board_match else "UNKNOWN"
                    raw_branch = branch_match.group(1).strip() if branch_match else "UNKNOWN"
                    raw_level = level_match.group(1).strip() if level_match else "UNKNOWN"

                    # Normalise common variations
                    # Branch normalisation
                    branch = raw_branch
                    if "pure" in raw_branch.lower():
                        branch = "Pure Maths"
                    elif "mech" in raw_branch.lower():
                        branch = "Mechanics"
                    elif "stat" in raw_branch.lower():
                        branch = "Statistics"
                    elif "comp" in raw_branch.lower():
                        branch = "Comprehension"

                    # Board normalisation
                    board = raw_board
                    if "mei" in raw_board.lower():
                        board = "OCR MEI"
                    elif "ocr" in raw_board.lower() and "mei" not in raw_board.lower():
                        board = "OCR"
                    elif "edexcel" in raw_board.lower():
                        board = "Edexcel"
                    elif "aqa" in raw_board.lower():
                        board = "AQA"
                    elif "wjec" in raw_board.lower():
                        board = "WJEC"
                    elif "ccea" in raw_board.lower():
                        board = "CCEA"

                    # Level normalisation
                    level = raw_level.upper()
                    if level not in ["A", "AS"]:
                        level = "OTHER"

                    questions.append({
                        "id": q_id,
                        "board": board,
                        "branch": branch,
                        "level": level,
                        "file": file
                    })

    return questions, duplicates

def display_statistics(questions, duplicates):
    total_q = len(questions)
    print("\n" + "="*70)
    print("           BRADLEY'S MATHS — QUESTION BANK AUDIT REPORT")
    print("="*70)
    print(f"Total Unique Questions Found: {total_q}")
    if duplicates:
        print(f"WARNING: Found {len(duplicates)} duplicate IDs: {duplicates}")
    print("="*70)

    # 1. Branch vs Level Breakdown
    branch_level = defaultdict(lambda: defaultdict(int))
    for q in questions:
        branch_level[q["branch"]][q["level"]] += 1

    branches_order = ["Pure Maths", "Mechanics", "Statistics", "Comprehension"]
    # Include any unexpected branches
    for b in sorted(branch_level.keys()):
        if b not in branches_order:
            branches_order.append(b)

    print("\n--- TABLE 1: QUESTIONS BY BRANCH & LEVEL ---")
    header_1 = f"{'Branch':<18} | {'AS Level':<10} | {'A Level':<10} | {'Total':<10}"
    print(header_1)
    print("-" * len(header_1))
    
    grand_as = 0
    grand_a = 0
    for branch in branches_order:
        as_cnt = branch_level[branch]["AS"]
        a_cnt = branch_level[branch]["A"]
        total = as_cnt + a_cnt + branch_level[branch]["OTHER"]
        grand_as += as_cnt
        grand_a += a_cnt
        print(f"{branch:<18} | {as_cnt:<10} | {a_cnt:<10} | {total:<10}")

    print("-" * len(header_1))
    print(f"{'GRAND TOTAL':<18} | {grand_as:<10} | {grand_a:<10} | {total_q:<10}")

    # 2. Board vs Branch & Level Breakdown
    # Boards: AQA, Edexcel, OCR, OCR MEI, WJEC, CCEA
    known_boards = ["AQA", "Edexcel", "OCR", "OCR MEI", "WJEC", "CCEA"]
    for q in questions:
        if q["board"] not in known_boards:
            known_boards.append(q["board"])

    board_branch_level = defaultdict(lambda: defaultdict(lambda: defaultdict(int)))
    for q in questions:
        board_branch_level[q["board"]][q["branch"]][q["level"]] += 1

    print("\n--- TABLE 2: EXAM BOARD BREAKDOWN ACROSS BRANCHES ---")
    header_2 = (
        f"{'Exam Board':<12} | "
        f"{'Pure (AS/A)':<14} | "
        f"{'Mech (AS/A)':<14} | "
        f"{'Stats (AS/A)':<14} | "
        f"{'Comp (A)':<10} | "
        f"{'Board Total':<11}"
    )
    print(header_2)
    print("-" * len(header_2))

    for b in known_boards:
        p_as = board_branch_level[b]["Pure Maths"]["AS"]
        p_a  = board_branch_level[b]["Pure Maths"]["A"]
        m_as = board_branch_level[b]["Mechanics"]["AS"]
        m_a  = board_branch_level[b]["Mechanics"]["A"]
        s_as = board_branch_level[b]["Statistics"]["AS"]
        s_a  = board_branch_level[b]["Statistics"]["A"]
        c_a  = board_branch_level[b]["Comprehension"]["A"]
        
        b_total = (p_as + p_a + m_as + m_a + s_as + s_a + c_a +
                   board_branch_level[b]["Pure Maths"]["OTHER"] +
                   board_branch_level[b]["Mechanics"]["OTHER"] +
                   board_branch_level[b]["Statistics"]["OTHER"])

        pure_str = f"{p_as} / {p_a}"
        mech_str = f"{m_as} / {m_a}"
        stats_str = f"{s_as} / {s_a}"
        comp_str = f"{c_a}"

        print(f"{b:<12} | {pure_str:<14} | {mech_str:<14} | {stats_str:<14} | {comp_str:<10} | {b_total:<11}")

    print("-" * len(header_2))
    print("="*70 + "\n")

if __name__ == "__main__":
    qs, dups = scan_question_bank(".")
    display_statistics(qs, dups)