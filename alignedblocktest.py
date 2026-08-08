import json
import os

def transform_chained_algebra(text):
    if not isinstance(text, str) or "$$" not in text:
        return text

    new_text = ""
    cursor = 0
    
    while True:
        start_idx = text.find("$$", cursor)
        if start_idx == -1:
            new_text += text[cursor:]
            break
            
        new_text += text[cursor:start_idx]
        end_idx = text.find("$$", start_idx + 2)
        if end_idx == -1:
            new_text += text[start_idx:]
            break
            
        formula = text[start_idx + 2 : end_idx].strip()
        
        # We search for = OR \\approx as alignment points
        # Using a regex to split by either while keeping the delimiter is complex, 
        # so we normalize to a placeholder then split.
        temp_formula = formula.replace('\\approx', 'PLACEHOLDER_APPROX').replace('=', 'PLACEHOLDER_EQUAL')
        parts = re.split(r'PLACEHOLDER_EQUAL|PLACEHOLDER_APPROX', temp_formula)
        
        # Find all delimiters in order to re-insert them
        delims = re.findall(r'\\approx|=', formula)

        if len(parts) > 2:
            aligned = "\\begin{aligned}\n  " + parts[0].strip()
            for i in range(len(delims)):
                symbol = " &" + delims[i] + " "
                content = parts[i+1].strip()
                aligned += f"\n{symbol}{content} \\\\"
            
            aligned = aligned.rstrip(" \\\\") + "\n\\end{aligned}"
            new_text += aligned
        else:
            new_text += "$$" + formula + "$$"
            
        cursor = end_idx + 2
        
    return new_text

import re # Ensure re is imported

def run_fix():
    filename = "Pure_2.js"
    output_name = "Pure_2_ALIGNED.js"
    
    with open(filename, 'r', encoding='utf-8') as f:
        full_content = f.read()
            
    start_json = full_content.find('[')
    end_json = full_content.rfind(']') + 1
    
    header = full_content[:start_json]
    footer = full_content[end_json:]
    data = json.loads(full_content[start_json:end_json])
    
    changed_count = 0
    for item in data:
        for key in item:
            if isinstance(item[key], str):
                original = item[key]
                updated = transform_chained_algebra(original)
                if original != updated:
                    item[key] = updated
                    changed_count += 1
    
    with open(output_name, 'w', encoding='utf-8') as f:
        f.write(header + json.dumps(data, indent=8) + footer)
            
    print(f"Items changed: {changed_count}")

if __name__ == "__main__":
    run_fix()