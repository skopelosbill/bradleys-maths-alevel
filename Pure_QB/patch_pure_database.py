import os
import re
import glob

def clean_subscript_alignment(match):
    """
    Strips alignment operators (&) and carriage returns (\\cr)
    from inside evaluation bar subscripts to prevent 'Misplaced &' LaTeX crashes.
    """
    bar_cmd = match.group(1)            # e.g., \\bigg| or \\Big|
    subscript_content = match.group(2)  # e.g., x &= 1 or x \\cr\n&= 1
    
    # Strip column alignments and line breaks
    cleaned = subscript_content.replace("&", "")
    cleaned = re.sub(r'\\cr\s*', '', cleaned)
    cleaned = re.sub(r'\s+', ' ', cleaned).strip() # Normalize spaces
    
    return f"{bar_cmd}_{{{cleaned}}}"

def patch_database_files():
    # Target all Pure JS files in the current folder (or change path to your safe folder)
    files = sorted(glob.glob("Pure_*.js"))
    
    if not files:
        # Check in the corrected subfolder as a fallback
        files = sorted(glob.glob("corrected_pure/Pure_*.js"))
        
    if not files:
        print("No database files found to patch.")
        return

    print("=" * 80)
    print(f"STARTING DATABASE PATCHER ({len(files)} files matched)")
    print("=" * 80)

    for filepath in files:
        filename = os.path.basename(filepath)
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # --- TASK 1: Split <br><br>Final Answer into a separate array item ---
        # Match <br><br>Final Answer (case insensitive, optional spaces, optional colon)
        # Replaces it by ending the string and opening a new array item with standard indentation
        orig_content = content
        content = re.sub(
            r'<br><br>[Ff]inal\s+[Aa]nswer\s*(:)?', 
            r'",\n                "Final Answer\1', 
            content
        )
        task_1_count = len(re.findall(r'",\n\s+"Final Answer', content)) - len(re.findall(r'",\n\s+"Final Answer', orig_content))

        # --- TASK 2: Repair Misplaced & Subscript Errors ---
        # Matches evaluation bars \bigg| or \Big| with braced subscripts containing '&'
        orig_content_2 = content
        subscript_pattern = r'(\\bigg\||\\Big\||\\bigg\\s*\||\\Big\\s*\|)_\{([^}]+?)\}'
        content = re.sub(subscript_pattern, clean_subscript_alignment, content)
        
        # Calculate how many subscripts were patched
        task_2_count = 0
        for m in re.finditer(subscript_pattern, orig_content_2):
            if "&" in m.group(2):
                task_2_count += 1

        if task_1_count > 0 or task_2_count > 0:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Patched: {filename:<16} | Final Answers Split: {task_1_count:<3} | Subscripts Repaired: {task_2_count:<3}")
        else:
            print(f"Skipped: {filename:<16} | Already completely clean.")

    print("=" * 80)
    print("PATCHING PROCESS COMPLETE")
    print("=" * 80)

if __name__ == "__main__":
    patch_database_files()