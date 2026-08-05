import re
import os

# =====================================================
# DRY_RUN MODE:
# Set to True to preview the changes in your terminal without writing to the disk.
# Set to False only when you are 100% happy with the terminal preview!
# =====================================================
DRY_RUN = True

def clean_line_by_line(filename):
    print(f"Scanning {filename} (DRY_RUN = {DRY_RUN})...\n")
    
    if not os.path.exists(filename):
        print(f"Error: Could not find {filename}")
        return

    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split the file on standard newlines
    lines = content.split('\n')
    fixed_lines = []
    changes_count = 0

    for idx, line in enumerate(lines):
        original_line = line
        
        # We only process lines containing actual question, step, or distractor data
        if '"' in line or "'" in line:
            
            # 1. Pull "Turning Point:" out of math mode
            line = re.sub(r"\$Turning\s+Point:\s*([^$]+?)\$", r"Turning Point: $\1$", line, flags=re.IGNORECASE)
            
            # 2. Pull "y-intercept:" out of math mode and format 'y' in algebraic italics
            line = re.sub(r"\$y-intercept:\s*([^$]+?)\$", r"$y$-intercept: $\1$", line, flags=re.IGNORECASE)

            # 3. Pull "Translation by" out of math mode
            line = re.sub(r"\$Translation\s+by\s*([^$]+?)\$", r"Translation by $\1$", line, flags=re.IGNORECASE)

            # 4. Pull "Vector" out of math mode
            line = re.sub(r"\$Vector\s*([^$]+?)\$", r"Vector $\1$", line, flags=re.IGNORECASE)

            # 5. Find loose matrices/binoms not wrapped in $ and wrap them
            line = re.sub(r"(?<!\$)(\\+begin\{pmatrix\}.*?\\+end\{pmatrix\})(?!\$)", r"$\1$", line)
            line = re.sub(r"(?<!\$)(\\\\binom\{.*?\}\{.*?\})(?!\$)", r"$\1$", line)

            # 6. Heal any accidental double dollar signs ($$) created during regex merges
            line = line.replace("$$", "$")

        # If the line was changed, count it and print the diff
        if line != original_line:
            changes_count += 1
            if DRY_RUN:
                print(f"--- Line {idx + 1} ---")
                print(f"BEFORE: {original_line.strip()}")
                print(f"AFTER : {line.strip()}\n")

        fixed_lines.append(line)

    print("=====================================================")
    print(f"Total changes detected: {changes_count}")
    print("=====================================================")

    if not DRY_RUN:
        new_filename = filename.replace(".js", "_FIXED.js")
        with open(new_filename, 'w', encoding='utf-8') as f:
            f.write('\n'.join(fixed_lines))
        print(f"\nSuccess! Saved all corrected changes to {new_filename}!")
        print("Verify this file, rename it to Pure_1.js, and push when ready.")

clean_line_by_line('Pure_1.js')