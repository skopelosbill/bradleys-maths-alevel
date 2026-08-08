import re
import json
import sys

def clean_pseudo_math_text(text):
    """
    Finds display math blocks $$ ... $$ that contain pseudo-math text
    (words separated by backslashes) and converts them to standard HTML text
    with inline math $...$ where appropriate.
    """
    def convert_block(match):
        inner = match.group(1).strip()
        # If there are double backslashes in memory (written as \\\\ in raw file)
        # and it contains alphabetical characters (text words)
        if "\\" in inner and any(c.isalpha() for c in inner):
            # Split by backslashes
            parts = re.split(r'\\+', inner)
            cleaned_parts = []
            for part in parts:
                part = part.strip()
                if not part:
                    continue
                # If the part is an algebraic expression (contains operators or is a single variable)
                if any(op in part for op in ['=', '+', '-', '*', '/', '^', '<', '>', '\\theta']) or (len(part) == 1 and part.isalpha()):
                    # Wrap in standard inline math
                    cleaned_parts.append(f"${part}$")
                else:
                    # Keep as plain text
                    cleaned_parts.append(part)
            
            # Join parts with single spaces
            joined = " ".join(cleaned_parts)
            return joined
        return match.group(0)

    # Apply to all display math blocks $$...$$
    return re.sub(r'\$\$(.*?)\$\$', convert_block, text, flags=re.DOTALL)

def verticalize_math_chain(block):
    """
    Converts a horizontal display math chain to a vertical \begin{aligned} block.
    Uses strict Team Bradley standard carriage return '\\cr' formatting.
    """
    block = block.strip()
    
    # Check if there is an implication arrow
    if "\\implies" in block:
        parts = [p.strip() for p in block.split("\\implies")]
        aligned_lines = []
        for p in parts:
            if "=" in p:
                lhs, rhs = p.split("=", 1)
                aligned_lines.append(f"{lhs.strip()} &= {rhs.strip()}")
            else:
                aligned_lines.append(p)
        inner = " \\cr\n".join(aligned_lines)
        return f"\\begin{{aligned}}\n{inner}\n\\end{{aligned}}"
    
    # If it is a chain of multiple '=' signs
    if block.count("=") > 1:
        parts = [p.strip() for p in block.split("=")]
        aligned_lines = []
        # First line gets LHS &= RHS
        aligned_lines.append(f"{parts[0]} &= {parts[1]}")
        # Subsequent lines get &= RHS
        for p in parts[2:]:
            aligned_lines.append(f"&= {p}")
        inner = " \\cr\n".join(aligned_lines)
        return f"\\begin{{aligned}}\n{inner}\n\\end{{aligned}}"
        
    return block

def audit_and_refactor_chains(filepath, output_filepath=None):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            raw_content = f.read()
    except FileNotFoundError:
        print(f"Error: File '{filepath}' not found.")
        return

    # Unpack JS wrapper
    json_text = raw_content.strip()
    if json_text.startswith("window.ALEVEL_QUESTIONS ="):
        json_text = json_text[len("window.ALEVEL_QUESTIONS ="):].strip()
    if json_text.endswith(";"):
        json_text = json_text[:-1].strip()

    try:
        questions = json.loads(json_text)
    except json.JSONDecodeError as e:
        print(f"CRITICAL ERROR: Failed to parse file as JSON. Please verify syntax: {e}")
        return

    print("=" * 80)
    print(f"Loaded {len(questions)} questions from '{filepath}'")
    print("=" * 80)

    violations = []
    text_corrections = []

    # Scan for violations and text-in-math corrections
    for q in questions:
        q_id = q.get("id", "UNKNOWN")
        
        # 1. Clean up pseudo-math text in steps, question, and options
        def clean_fields_in_object(obj):
            nonlocal text_corrections
            if isinstance(obj, dict):
                for k, v in obj.items():
                    if isinstance(v, str) and "$$" in v:
                        cleaned = clean_pseudo_math_text(v)
                        if cleaned != v:
                            text_corrections.append((q_id, k, v, cleaned))
                            obj[k] = cleaned
                    elif isinstance(v, (dict, list)):
                        clean_fields_in_object(v)
            elif isinstance(obj, list):
                for idx, item in enumerate(obj):
                    if isinstance(item, str) and "$$" in item:
                        cleaned = clean_pseudo_math_text(item)
                        if cleaned != item:
                            text_corrections.append((q_id, f"array_item[{idx}]", item, cleaned))
                            obj[idx] = cleaned
                    elif isinstance(item, (dict, list)):
                        clean_fields_in_object(item)

        clean_fields_in_object(q)

        # 2. Check for Horizontal Chaining (Rule D)
        steps = q.get("steps", [])
        for idx, step in enumerate(steps):
            if not isinstance(step, str):
                continue
                
            display_blocks = re.findall(r'\$\$(.*?)\$\$', step, re.DOTALL)
            for block in display_blocks:
                if "begin{aligned}" in block:
                    continue
                
                is_chained = False
                if block.count("=") > 1:
                    is_chained = True
                elif "=" in block and ("\\implies" in block or "\\rightarrow" in block):
                    is_chained = True
                    
                if is_chained:
                    proposed = verticalize_math_chain(block)
                    violations.append({
                        "q_id": q_id,
                        "step_index": idx,
                        "original_step": step,
                        "original_block": block,
                        "proposed_block": proposed
                    })

    # Display Text Math Corrections
    if text_corrections:
        print(f"Found {len(text_corrections)} instances of pseudo-math text to clean up:\n")
        for q_id, field, orig, clean in text_corrections[:15]: # Show preview
            print(f"[{q_id}] in field '{field}':")
            print(f"  [ORIGINAL]: {orig}")
            print(f"  [CLEANED] : {clean}")
            print("-" * 80)
        if len(text_corrections) > 15:
            print(f"...and {len(text_corrections) - 15} more text formatting improvements.")
            print("-" * 80)
    else:
        print("No pseudo-math text blocks found.")
        print("=" * 80)

    # Display Chaining Violations
    if violations:
        print(f"Found {len(violations)} horizontal chaining violations:\n")
        for v in violations:
            print(f"[{v['q_id']}] Step [{v['step_index']}] Chained Math:")
            print(f"  [ORIGINAL]: $${v['original_block']}$$")
            print(f"  [PROPOSED]:")
            indented_prop = "\n".join(f"    {line}" for line in v['proposed_block'].split('\n'))
            print(indented_prop)
            print("-" * 80)
    else:
        print("No Rule D (Horizontal Chaining) violations found in this file.")
        print("=" * 80)

    total_issues = len(violations) + len(text_corrections)
    if total_issues == 0:
        print("Everything is pristine. No actions required.")
        return

    # Prompt user for refactoring decision
    choice = input(f"Would you like to automatically clean up these {total_issues} issues and write a corrected file? [y/N]: ").strip().lower()
    
    if choice == 'y' and output_filepath:
        # Apply vertical math changes as well
        for v in violations:
            for q in questions:
                if q.get("id") == v["q_id"]:
                    steps = q.get("steps", [])
                    orig_str = f"$${v['original_block']}$$"
                    steps[v["step_index"]] = steps[v["step_index"]].replace(orig_str, v["proposed_block"])

        # Write output file back wrapped as JS window variable
        output_data = json.dumps(questions, indent=8, ensure_ascii=False)
        with open(output_filepath, 'w', encoding='utf-8') as f:
            f.write("window.ALEVEL_QUESTIONS = ")
            f.write(output_data)
            f.write(";\n")
        print(f"\nSUCCESS: Pristine database array saved to: '{output_filepath}'")
        print("=" * 80)
    else:
        print("\nNo changes written to disk.")
        print("=" * 80)

if __name__ == "__main__":
    input_file = sys.argv[1] if len(sys.argv) > 1 else "Pure_2.js"
    output_file = sys.argv[2] if len(sys.argv) > 2 else "Pure_2_corrected.js"
    
    audit_and_refactor_chains(input_file, output_file)