import re
import os

def clean_questions(filename):
    print(f"Processing {filename}...")
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # =====================================================
    # 1. STANDARDISE ALIGNED & GENERAL TYPOGRAPHY
    # =====================================================
    
    # Fix the 'f' typography: change \text{f} to algebraic f
    content = re.sub(r"\\text\{\s*f\s*\}", "f", content)

    # Convert standard function notation inside $...$ to italics if needed
    content = content.replace("$\\text{f}", "$f")

    # Removes '$' or '$$' from around \begin{aligned} and \end{aligned}
    content = re.sub(r"\$?(\\begin\{aligned\}.*?\\end\{aligned\})\$?", r"\1", content, flags=re.DOTALL)


    # =====================================================
    # 2. SEPARATE MIXED TEXT & MATH MODE (SPACING & ITALICS FIX)
    # =====================================================

    # Rule A: Pull headers out of math blocks (e.g. "$Turning Point: (-1,5)$" -> "Turning Point: $(-1,5)$")
    # Matches words followed by a colon inside single dollar signs
    content = re.sub(r"\$([A-Za-z\s\-]+?):\s*([^$]+?)\$", r"\1: $\2$", content)

    # Rule B: Pull "Translation by" or "Vector" out of math blocks
    # Converts: "$Translation by \begin{pmatrix}...$" -> "Translation by $\\begin{pmatrix}...$"
    content = re.sub(r"\$(Translation\s+by|Vector)\s+([^$]+?)\$", r"\1 $\2$", content, flags=re.IGNORECASE)


    # =====================================================
    # 3. WRAP UNWRAPPED VECTORS & MATRICES IN INLINE MATH DELIMITERS
    # =====================================================

    # Rule C: Find any loose \begin{pmatrix}...\end{pmatrix} not wrapped in $ and wrap them
    content = re.sub(r"(?<!\$)(\\+begin\{pmatrix\}.*?\\+end\{pmatrix\})(?!\$)", r"$\1$", content)

    # Rule D: Find any loose \binom{...}{...} not wrapped in $ and wrap them
    content = re.sub(r"(?<!\$)(\\+binom\{.*?\}\{.*?\})(?!\$)", r"$\1$", content)


    # =====================================================
    # 4. REPAIR NESTED LATEX SYNTAX ERRORS
    # =====================================================

    # Rule E: Fix \begin{pmatrix} nested inside \text{...} which crashes KaTeX
    # Converts: \text{Translation by \begin{pmatrix}...}} -> \text{Translation by } \begin{pmatrix}...
    content = re.sub(
        r"\\+text\{([^}]+?)\\+(begin\{pmatrix\}.*?\\+end\{pmatrix\})\s*\}",
        r"\\text{\1} \2",
        content
    )


    # =====================================================
    # 5. SANITY CLEANUPS
    # =====================================================

    # Clean up any accidental double-dollar markers ($$) created during regex substitutions
    content = content.replace("$$", "$")

    # Cleanup trailing commas in arrays (good for JSON health)
    content = re.sub(r",\s*([\]}])", r"\1", content)


    # =====================================================
    # 6. WRITE BACK TO FILE
    # =====================================================
    
    # During testing, you write to _FIXED.js
    # When you are ready to apply this to production, you can change this line to overwrite the original file!
    new_filename = filename.replace(".js", "_FIXED.js")
    
    with open(new_filename, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Done! Created {new_filename}")

# List the files you want to fix here
files_to_fix = ['Pure_1.js'] 

# Pro-Tip: To automatically scan and fix ALL your Pure_*.js database files,
# you can uncomment this line:
# files_to_fix = [f for f in os.listdir('.') if f.startswith('Pure_') and f.endswith('.js') and '_FIXED' not in f]

for file in files_to_fix:
    if os.path.exists(file):
        clean_questions(file)
    else:
        print(f"Could not find {file}")