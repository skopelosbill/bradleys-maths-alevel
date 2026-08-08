import json
import re

def convert_to_aligned(match):
    """
    Transforms a multi-equals LaTeX string into a formatted aligned environment.
    """
    content = match.group(1).strip()
    
    # Check for multiple = signs
    parts = content.split('=')
    
    if len(parts) <= 2:
        return f"$${content}$$"
    
    # Build the aligned string
    aligned_str = "\\begin{aligned}\n  " + parts[0].strip()
    for part in parts[1:]:
        aligned_str += " &= " + part.strip() + " \\\\"
    
    # Clean up the trailing backslashes and close
    aligned_str = aligned_str.rstrip(" \\\\") + "\n\\end{aligned}"
    
    return aligned_str

def test_on_pure_2():
    input_file = "Pure_2.js"
    output_file = "Pure_2_aligned.js"
    
    latex_pattern = re.compile(r"\$\$(.*?)\$\$", re.DOTALL)

    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        start, end = content.find('['), content.rfind(']') + 1
        if start == -1:
            print("Could not find the JSON array in Pure_2.js")
            return
        
        header, footer = content[:start], content[end:]
        data = json.loads(content[start:end])
        changed_count = 0

        # Scan all fields for every object in the array
        for item in data:
            for key in item:
                if isinstance(item[key], str):
                    original = item[key]
                    new_text = latex_pattern.sub(convert_to_aligned, original)
                    
                    if new_text != original:
                        item[key] = new_text
                        changed_count += 1

        # Write to the new test file
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(header + json.dumps(data, indent=8) + footer)
            
        print(f"Success! Created {output_file}.")
        print(f"Total expressions transformed: {changed_count}")

    except FileNotFoundError:
        print("Pure_2.js not found in this folder.")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    test_on_pure_2()