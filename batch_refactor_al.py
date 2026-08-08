import os
import re
import json
import glob

def clean_pseudo_math_text(text):
    """
    Finds display math blocks $$ ... $$ that contain pseudo-math spacing text
    (words separated strictly by double backslashes in memory, which is 4 in the raw JSON)
    and converts them to standard HTML text.
    """
    def convert_block(match):
        inner = match.group(1).strip()
        # r"\\" searches strictly for TWO consecutive backslashes in Python's parsed memory.
        if r"\\" in inner and any(c.isalpha() for c in inner):
            parts = re.split(r'\\{2,}', inner)
            cleaned_parts = []
            for part in parts:
                part = part.strip()
                if not part:
                    continue
                # If part is an algebraic expression (contains operators or is a single variable)
                if any(op in part for op in ['=', '+', '-', '*', '/', '^', '<', '>', '\\theta']) or (len(part) == 1 and part.isalpha()):
                    cleaned_parts.append(f"${part}$")
                else:
                    cleaned_parts.append(part)
            return " ".join(cleaned_parts)
        return match.group(0)

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

def run_batch_refactor():
    # 1. Locate all files matching Pure_*.js in the current directory
    target_pattern = "Pure_*.js"
    files = sorted(glob.glob(target_pattern))
    
    if not files:
        print(f"Error: No files matching '{target_pattern}' found in this folder.")
        print("Please make sure this script is placed in the folder containing your database files.")
        return

    # 2. Create output directory for clean files
    output_dir = "corrected_pure"
    os.makedirs(output_dir, exist_ok=True)

    print("=" * 80)
    print(f"STARTING BATCH REFACTOR OF THE 'al' DATABASE ({len(files)} files found)")
    print("=" * 80)

    summary_stats = []

    # 3. Process each file
    for filepath in files:
        filename = os.path.basename(filepath)
        
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                raw_content = f.read()
        except Exception as e:
            print(f"[{filename}] Error reading file: {e}")
            continue

        # Unpack JS wrapper
        json_text = raw_content.strip()
        if json_text.startswith("window.ALEVEL_QUESTIONS ="):
            json_text = json_text[len("window.ALEVEL_QUESTIONS ="):].strip()
        if json_text.endswith(";"):
            json_text = json_text[:-1].strip()

        try:
            questions = json.loads(json_text)
        except json.JSONDecodeError as e:
            print(f"[{filename}] CRITICAL ERROR: JSON Parsing failed. Skipping file. Error: {e}")
            continue

        text_corrections_count = 0
        chain_corrections_count = 0

        # Scan and process
        for q in questions:
            q_id = q.get("id", "UNKNOWN")
            
            # Clean up pseudo-math text
            def clean_fields_in_object(obj):
                nonlocal text_corrections_count
                if isinstance(obj, dict):
                    for k, v in obj.items():
                        if isinstance(v, str) and "$$" in v:
                            cleaned = clean_pseudo_math_text(v)
                            if cleaned != v:
                                text_corrections_count += 1
                                obj[k] = cleaned
                        elif isinstance(v, (dict, list)):
                            clean_fields_in_object(v)
                elif isinstance(obj, list):
                    for idx, item in enumerate(obj):
                        if isinstance(item, str) and "$$" in item:
                            cleaned = clean_pseudo_math_text(item)
                            if cleaned != item:
                                text_corrections_count += 1
                                obj[idx] = cleaned
                        elif isinstance(item, (dict, list)):
                            clean_fields_in_object(item)

            clean_fields_in_object(q)

            # Check and verticalize Horizontal Chaining (Rule D)
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
                        orig_str = f"$${block}$$"
                        steps[idx] = steps[idx].replace(orig_str, proposed)
                        chain_corrections_count += 1

        # Save corrected file to isolated directory
        output_path = os.path.join(output_dir, filename)
        output_data = json.dumps(questions, indent=8, ensure_ascii=False)
        
        try:
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write("window.ALEVEL_QUESTIONS = ")
                f.write(output_data)
                f.write(";\n")
            
            print(f"Processed: {filename:<16} | Pseudo-Math Text Fixed: {text_corrections_count:<4} | Horizontal Chains Aligned: {chain_corrections_count:<4}")
            summary_stats.append({
                "file": filename,
                "text_fixes": text_corrections_count,
                "chain_fixes": chain_corrections_count,
                "status": "Success"
            })
        except Exception as e:
            print(f"[{filename}] Error writing file: {e}")
            summary_stats.append({
                "file": filename,
                "text_fixes": text_corrections_count,
                "chain_fixes": chain_corrections_count,
                "status": f"Write Error: {e}"
            })

    # 4. Final summary metrics report
    print("\n" + "=" * 80)
    print("CONSOLIDATED BATCH PROCESS SUMMARY REPORT")
    print("=" * 80)
    print(f"{'Source File':<18} | {'Pseudo-Math Fixed':<18} | {'Horizontal Chains Aligned':<25} | {'Status':<10}")
    print("-" * 80)
    
    total_text = 0
    total_chains = 0
    
    for s in summary_stats:
        print(f"{s['file']:<18} | {s['text_fixes']:<18} | {s['chain_fixes']:<25} | {s['status']:<10}")
        total_text += s['text_fixes']
        total_chains += s['chain_fixes']
        
    print("-" * 80)
    print(f"{'TOTALS':<18} | {total_text:<18} | {total_chains:<25} |")
    print("=" * 80)
    print(f"Prisinte corrected database copies stored in the directory: './{output_dir}/'")
    print("=" * 80)

if __name__ == "__main__":
    run_batch_refactor()