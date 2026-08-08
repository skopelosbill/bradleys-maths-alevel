import re
import os

# =====================================================
# DRY_RUN MODE:
# Set to True to generate the audit_report.txt without modifying your original files!
# Set to False only when you are 100% happy with the report.
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
    warnings_count = 0
    
    report_output = []
    report_output.append("=====================================================")
    report_output.append(f"AUDIT REPORT FOR {filename}")
    report_output.append("=====================================================\n")

    for idx, line in enumerate(lines):
        original_line = line
        
        # We only process lines containing actual question, step, or distractor data
        if '"' in line or "'" in line:
            
            # -------------------------------------------------
            # 1. THE AUTOMATED REPAIRS (Safe substitutions)
            # -------------------------------------------------
            
            # Pull "Turning Point:" out of math mode
            line = re.sub(r"\$Turning\s+Point:\s*([^$]+?)\$", r"Turning Point: $\1$", line, flags=re.IGNORECASE)
            line = re.sub(r"\$$Turning\s+Point:\s*([^$]+?)\$$", r"Turning Point: $$\1$$", line, flags=re.IGNORECASE)
            
            # Pull "y-intercept:" out of math mode
            line = re.sub(r"\$y-intercept:\s*([^$]+?)\$", r"$y$-intercept: $\1$", line, flags=re.IGNORECASE)
            line = re.sub(r"\$$y-intercept:\s*([^$]+?)\$$", r"$y$-intercept: $$\1$$", line, flags=re.IGNORECASE)

            # Pull "Translation by" out of math mode
            line = re.sub(r"\$Translation\s+by\s*([^$]+?)\$", r"Translation by $\1$", line, flags=re.IGNORECASE)
            line = re.sub(r"\$$Translation\s+by\s*([^$]+?)\$$", r"Translation by $$\1$$", line, flags=re.IGNORECASE)

            # Pull "Vector" out of math mode
            line = re.sub(r"\$Vector\s*([^$]+?)\$", r"Vector $\1$", line, flags=re.IGNORECASE)
            line = re.sub(r"\$$Vector\s*([^$]+?)\$$", r"Vector $$\1$$", line, flags=re.IGNORECASE)

            # Find loose matrices/binoms not wrapped in $ and wrap them
            line = re.sub(r"(?<!\$)(\\+begin\{pmatrix\}.*?\\+end\{pmatrix\})(?!\$)", r"$\1$", line)
            line = re.sub(r"(?<!\$)(\\+binom\{.*?\}\{.*?\})(?!\$)", r"$\1$", line)

            # -------------------------------------------------
            # RULE F: AUTOMATED PURE-TEXT STRIPPER
            # -------------------------------------------------
            # Find all $...$ or $$...$$ blocks on this line
            math_blocks = re.finditer(r"\${1,2}([^$]+?)\${1,2}", line)
            for block in math_blocks:
                math_full = block.group(0)      # e.g., "$Always true$"
                math_content = block.group(1)   # e.g., "Always true"
                
                # We only strip if the math block contains NO mathematical operators, exponents, or backslashes
                # This guarantees that actual equations like V = 15000(r)^t are kept safe!
                if not re.search(r"[\^_\\]|==|<=|>=|<|>|=", math_content):
                    # Strip the $ delimiters from this pure English phrase
                    line = line.replace(math_full, math_content)

            # -------------------------------------------------
            # 2. THE TRAPPED TEXT AUDITOR
            # -------------------------------------------------
            math_blocks = re.finditer(r"\${1,2}([^$]+?)\${1,2}", line)
            for block in math_blocks:
                math_content = block.group(1)
                
                # Skip valid LaTeX text formatting environments
                if '\\text' in math_content or '\\mathrm' in math_content:
                    continue
                
                # Clean up before checking to avoid false positives
                cleaned = re.sub(r"\\[A-Za-z]+", "", math_content)
                cleaned = re.sub(r"[^A-Za-z\s]", "", cleaned)
                
                # Check for adjacent English words of 2+ letters
                if re.search(r"\b[A-Za-z]{2,}\s+[A-Za-z]{2,}\b", cleaned):
                    warnings_count += 1
                    msg = f"⚠️  WARNING (Line {idx + 1}): Trapped text inside math block!\n" \
                          f"   FOUND TEXT: {math_content.strip()}\n" \
                          f"   FULL LINE : {line.strip()}\n"
                    report_output.append(msg)

        # If the line was changed by an automated repair, count it
        if line != original_line:
            changes_count += 1
            msg = f"✅ REPAIR (Line {idx + 1})\n" \
                  f"   BEFORE: {original_line.strip()}\n" \
                  f"   AFTER : {line.strip()}\n"
            report_output.append(msg)

        fixed_lines.append(line)

    summary = "=====================================================\n" \
              f"Total automated repairs: {changes_count}\n" \
              f"Total trapped text warnings: {warnings_count}\n" \
              "====================================================="
    report_output.append(summary)

    with open("audit_report.txt", "w", encoding="utf-8") as f_report:
        f_report.write('\n'.join(report_output))

    print("=====================================================")
    print(f"Scan complete! Created 'audit_report.txt' in your folder.")
    print(f"It contains all {changes_count} repairs and {warnings_count} warnings.")
    print("You can open 'audit_report.txt' in VS Code to see every single line.")
    print("=====================================================")

    if not DRY_RUN:
        new_filename = filename.replace(".js", "_FIXED.js")
        with open(new_filename, 'w', encoding='utf-8') as f:
            f.write('\n'.join(fixed_lines))
        print(f"\nSuccess! Saved all corrected changes to {new_filename}!")
        print("Verify this file, rename it to Pure_1.js, and push when ready.")

clean_line_by_line('Pure_2.js')