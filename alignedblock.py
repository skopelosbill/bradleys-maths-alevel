import json
import glob
import re

def convert_to_aligned(match):
    """
    Callback function to transform a multi-equals LaTeX string 
    into a formatted aligned environment.
    """
    # Remove the surrounding $$ symbols
    content = match.group(1).strip()
    
    # Split by the '=' sign
    parts = content.split('=')
    
    # If there's only one '=' or no '=', don't change it to aligned
    if len(parts) <= 2:
        return f"$${content}$$"
    
    # Build the aligned string
    # The first part stays on the first line, subsequent parts get \\ \le
    aligned_str = "\\begin{aligned}\n  " + parts[0].strip()
    for part in parts[1:]:
        aligned_str += " &= " + part.strip() + " \\\\"
    
    # Remove the trailing backslashes from the last line and close
    aligned_str = aligned_str.rstrip(" \\\\") + "\n\\end{aligned}"
    
    # Return without $$ as aligned is a display-math environment
    return aligned_str

def process_chained_equations():
    files = glob.glob("Pure_2.js")
    
    # Regex to find $$ ... $$ blocks. 
    # Flags=re.DOTALL allows it to match across multiple lines if necessary.
    latex_pattern = re.compile(r"\$\$(.*?)\$\$", re.DOTALL)

    for file_path in files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            start, end = content.find('['), content.rfind(']') + 1
            if start == -1: continue
            
            header, footer = content[:start], content[end:]
            data = json.loads(content[start:end])
            changed_count = 0

            for item in data:
                # Check all common fields that might contain LaTeX
                fields_to_check = ["question", "solution", "working"]
                for field in fields_to_check:
                    if field in item and isinstance(item[field], str):
                        original = item[field]
                        
                        # Apply the transformation
                        new_text = latex_pattern.sub(convert_to_aligned, original)
                        
                        if new_text != original:
                            item[field] = new_text
                            changed_count += 1

            if changed_count > 0:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(header + json.dumps(data, indent=8) + footer)
                print(f"Updated {file_path}: {changed_count} expressions aligned.")
            else:
                print(f"No chained equations found in {file_path}.")

        except Exception as e:
            print(f"Error in {file_path}: {e}")

if __name__ == "__main__":
    process_chained_equations()