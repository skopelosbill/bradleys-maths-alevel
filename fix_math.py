import re
import os

def clean_questions(filename):
    print(f"Processing {filename}...")
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Fix the 'f' typography: change \text{f} to algebraic f
    # This handles both \text{f} and \text{ f }
    content = re.sub(r"\\text\{\s*f\s*\}", "f", content)

    # 2. Convert standard function notation inside $...$ to italics if needed
    # This ensures any remaining \text{f} in question prompts are fixed
    content = content.replace("$\\text{f}", "$f")

    # 3. Standardize Aligned environments
    # Removes '$' or '$$' from around \begin{aligned} and \end{aligned}
    content = re.sub(r"\$?(\\begin\{aligned\}.*?\\end\{aligned\})\$?", r"\1", content, flags=re.DOTALL)

    # 4. Cleanup trailing commas in arrays (optional but good for JSON health)
    content = re.sub(r",\s*([\]}])", r"\1", content)

    # Write the fixed content back to a new file (so you don't lose the original)
    new_filename = filename.replace(".js", "_FIXED.js")
    with open(new_filename, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Done! Created {new_filename}")

# List the files you want to fix here
files_to_fix = ['Pure_1.js'] 

for file in files_to_fix:
    if os.path.exists(file):
        clean_questions(file)
    else:
        print(f"Could not find {file}")