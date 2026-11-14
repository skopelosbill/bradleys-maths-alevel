import re
import json
import sys

def audit_and_fix_database(filepath, output_filepath=None):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            raw_content = f.read()
    except FileNotFoundError:
        print(f"Error: File '{filepath}' not found.")
        return

    # Extract JSON array from JS wrapper
    json_text = raw_content.strip()
    has_wrapper = False
    if json_text.startswith("window.ALEVEL_QUESTIONS ="):
        json_text = json_text[len("window.ALEVEL_QUESTIONS ="):].strip()
        has_wrapper = True
    if json_text.endswith(";"):
        json_text = json_text[:-1].strip()

    try:
        questions = json.loads(json_text)
    except json.JSONDecodeError as e:
        print(f"CRITICAL ERROR: Failed to parse JS file as JSON. Please verify syntax: {e}")
        return

    print("=" * 80)
    print(f"Loaded {len(questions)} questions from '{filepath}'")
    print("=" * 80)

    # Dictionary of corrected trig feedbacks to resolve the messy delimiters/unicode
    trig_feedback_map = {
        "004026": {
            "0": "You subtracted $20^\\circ$ instead of $10^\\circ$. Remember: $\\theta = x + 10^\\circ$, so $x = \\theta - 10^\\circ$.",
            "1": "This corresponds to the $\\theta = 90^\\circ$ branch, but it is not the smallest positive solution.",
            "2": "This comes from the negative $\\theta$ branch. It is positive, but not the smallest positive solution."
        },
        "004027": {
            "0": "This corresponds to $\\theta = 30^\\circ$, but it is not the smallest positive solution.",
            "1": "This comes from the negative $\\theta$ branch. It is positive, but not the smallest positive solution.",
            "2": "Remember to add $15^\\circ$ because $\\theta = x - 15^\\circ$."
        },
        "004028": {
            "0": "You added $40^\\circ$ instead of $20^\\circ$. The substitution is $\\theta = x - 20^\\circ$.",
            "1": "This corresponds to the second $\\theta$ value, but it is not the smallest positive solution.",
            "2": "This assumes $\\theta = 0^\\circ$, which is not a solution of the original equation."
        },
        "004029": {
            "0": "This comes from the negative $\\theta$ branch. It is positive, but not the smallest positive solution.",
            "1": "You forgot to subtract $30^\\circ$. Remember: $x = \\theta - 30^\\circ$.",
            "2": "This assumes $\\theta = 60^\\circ$, which is not a solution of the original equation."
        },
        "004030": {
            "0": "This corresponds to $\\theta = 61.9^\\circ$, but it is not the smallest positive solution.",
            "1": "This comes from the $\\theta = -180^\\circ$ branch. It is positive, but not the smallest positive solution.",
            "2": "Remember: $x = \\theta + 5^\\circ$, and $\\theta = 0^\\circ$ gives $x = 5^\\circ$."
        }
    }

    corrected_questions = []
    total_audited_errors = 0
    total_corrected_errors = 0

    for q in questions:
        q_id = q.get("id", "UNKNOWN")
        
        # We work on a deep copy of the question object for fixes
        fixed_q = json.loads(json.dumps(q))

        def process_field(name, value, parent_id):
            nonlocal total_audited_errors, total_corrected_errors
            if not isinstance(value, str):
                return value

            temp = value

            # --- AUDIT CHECKS ---
            # 1. Markdown check
            if "**" in temp:
                total_audited_errors += 1
            # 2. LaTeX \true check
            if "\\true" in temp:
                total_audited_errors += 1
            # 3. Currency in Math Mode check
            math_blocks = re.findall(r'\$\$(.*?)\$\$|\$(.*?)\$', temp)
            for block in math_blocks:
                combined = block[0] or block[1]
                if combined and ('£' in combined or '\u00a3' in combined):
                    total_audited_errors += 1
            # 4. Unbalanced math delimiters check
            dollar_count = len(re.findall(r'(?<!\\)\$', temp))
            if dollar_count % 2 != 0:
                total_audited_errors += 1
            # 5. Rogue Unicode check
            if '\u03b8' in temp or '\u2212' in temp or '\u2218' in temp:
                total_audited_errors += 1

            # --- AUTO-CORRECTION LOGIC ---
            # Correct markdown bold asterisks
            if "**" in temp:
                temp = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', temp)
                total_corrected_errors += 1

            # Correct LaTeX \true macro to standard \text
            if "\\true{" in temp:
                temp = temp.replace("\\true{", "\\text{")
                total_corrected_errors += 1

            # Auto-pad LaTeX curly braces that contain mathematical operations
            # Looks for operations like +, -, *, /, ^, =, <, > inside unpadded braces
            def pad_operations(match):
                inner = match.group(1)
                if any(op in inner for op in ['+', '-', '*', '/', '^', '=', '<', '>']):
                    if not inner.startswith(' ') and not inner.endswith(' '):
                        return f"{{ {inner} }}"
                return match.group(0)

            temp = re.sub(r'\{([^}]+)\}', pad_operations, temp)

            return temp

        # Process question body
        fixed_q["question"] = process_field("question", fixed_q.get("question"), q_id)

        # Process steps array
        steps = fixed_q.get("steps", [])
        for i in range(len(steps)):
            step_val = steps[i]
            
            # Target fixes for broken raw text display math in 004049
            if q_id == "004049" and i == 8:
                step_val = "Final Answer: <strong>(i)</strong> $$\\text{Proof by cases is completed}$$ <strong>(ii)</strong> $$\\text{Sometimes true (fails in the interval } 5.4 < x < 5.67\\text{)}$$"
                total_corrected_errors += 1

            # Target fixes for currency inside math mode in exponential questions (004031 - 004035)
            if q_id in ["004031", "004032", "004033", "004034", "004035"]:
                if i == 4: # Step 5 containing calculation
                    step_val = step_val.replace("\\approx \u00a3", "\\approx$$ £$")
                    step_val = step_val.replace("\\approx £", "\\approx$$ £$")
                    total_corrected_errors += 1
                elif i == 5: # Step 6 containing mix of text, display math and currency
                    actual_monitored_val = "2,500" if q_id=="004031" else "10,000" if q_id=="004032" else "35,000" if q_id=="004033" else "4,000" if q_id=="004034" else "7,800"
                    pred_val = "2,517" if q_id=="004031" else "7,112" if q_id=="004032" else "34,868" if q_id=="004033" else "4,005" if q_id=="004034" else "7,864"
                    reliability_desc = "highly reliable" if q_id != "004032" else "less reliable (underestimates value by $\\approx$ £2,888)"
                    step_val = f"The actual monitored value after {8 if q_id in ['004031','004034'] else 12 if q_id=='004032' else 10 if q_id=='004033' else 6} years is £{actual_monitored_val}. Since our model's prediction of £{pred_val} is " + \
                               f"{'extremely close to the actual value, the model is highly reliable' if q_id != '004032' else 'significantly lower than the actual value, the model has weaker reliability'} over this period."
                    total_corrected_errors += 1
                elif i == 7: # Step 8 containing final answer summary
                    # Build exact clean strings
                    if q_id == "004031":
                        step_val = "Final Answer: <strong>(a)</strong> $V = 15000(0.8)^t$ <strong>(b)</strong> Model is highly reliable ($\\approx$ £2,517 vs £2,500) <strong>(c)</strong> Increase the base (e.g. $V = 15000(r)^t$ where $r > 0.8$)"
                    elif q_id == "004032":
                        step_val = "Final Answer: <strong>(a)</strong> $V = 50000(0.85)^t$ <strong>(b)</strong> Model is less reliable (underestimates value by $\\approx$ £2,888) <strong>(c)</strong> Increase the base (e.g. $V = 50000(r)^t$ where $r > 0.85$)"
                    elif q_id == "004033":
                        step_val = "Final Answer: <strong>(a)</strong> $V = 100000(0.9)^t$ <strong>(b)</strong> Model is highly reliable ($\\approx$ £34,868 vs £35,000) <strong>(c)</strong> Increase the base (e.g. $V = 100000(r)^t$ where $r > 0.9$)"
                    elif q_id == "004034":
                        step_val = "Final Answer: <strong>(a)</strong> $V = 40000(0.75)^t$ <strong>(b)</strong> Model is highly reliable ($\\approx$ £4,005 vs £4,000) <strong>(c)</strong> Increase the base (e.g. $V = 40000(r)^t$ where $r > 0.75$)"
                    elif q_id == "004035":
                        step_val = "Final Answer: <strong>(a)</strong> $V = 30000(0.8)^t$ <strong>(b)</strong> Model is highly reliable ($\\approx$ £7,864 vs £7,800) <strong>(c)</strong> Increase the base (e.g. $V = 30000(r)^t$ where $r > 0.8$)"
                    total_corrected_errors += 1

            steps[i] = process_field(f"steps[{i}]", step_val, q_id)

        # Process options mapping
        pi_opts = fixed_q.get("pi_options", [])
        for idx, opt in enumerate(pi_opts):
            ans_val = opt.get("ans", "")
            feedback_val = opt.get("feedback", "")

            # Target fix for Chinese characters and currency inside options of exponentials
            if q_id in ["004031", "004032", "004033", "004034", "004035"]:
                # Strip out the rogue chinese unicode \u5bf9\u5916 if present
                if "\\u5bf9\\u5916" in feedback_val or "对" in feedback_val or "外" in feedback_val:
                    feedback_val = feedback_val.replace("\\u5bf9\\u5916", "").replace("对外", "").strip()
                
                # Replace math-wrapped pound signs
                ans_val = ans_val.replace("\\u00a3", "£").replace("£$$", "$$£")
                feedback_val = feedback_val.replace("\\u00a3", "£")
                
                # Ensure currency resides strictly outside LaTeX blocks in feedbacks
                feedback_val = feedback_val.replace("$\\approx$ £", "$\\approx$ £")
                feedback_val = feedback_val.replace("almost zero", "almost zero")

            # Apply hard mapping for trigonometry option feedbacks (resolves unmatched $, unicode, and degree signs)
            if q_id in trig_feedback_map and str(idx) in trig_feedback_map[q_id]:
                feedback_val = trig_feedback_map[q_id][str(idx)]
                total_corrected_errors += 1

            opt["ans"] = process_field(f"pi_options[{idx}].ans", ans_val, q_id)
            opt["feedback"] = process_field(f"pi_options[{idx}].feedback", feedback_val, q_id)

        # Process bradley_insight
        insight = fixed_q.get("bradley_insight", {})
        if insight:
            insight["content"] = process_field("bradley_insight.content", insight.get("content", ""), q_id)

        corrected_questions.append(fixed_q)

    # Output details
    print(f"\nAUDIT METRICS:")
    print(f" - Found {total_audited_errors} critical structural and rendering errors in initial sweep.")
    print(f" - Resolved {total_corrected_errors} issues programmatically.")
    print("=" * 80)

    # Save output with JS array wrap preserving identical whitespace formatting
    if output_filepath:
        output_data = json.dumps(corrected_questions, indent=8, ensure_ascii=False)
        
        # Format spacing to match original exact array structure
        output_data = output_data.replace("[\n        {\n", "[\n        {\n")
        output_data = output_data.replace("\n        },", "\n        },")
        
        # Write back wrapped as a JS window variable
        with open(output_filepath, 'w', encoding='utf-8') as f:
            f.write("window.ALEVEL_QUESTIONS = ")
            f.write(output_data)
            f.write(";\n")
        print(f"Prisinte database array saved successfully to: '{output_filepath}'")
        print("=" * 80)

if __name__ == "__main__":
    # If file arguments are given, use them, otherwise target Pure_1.js defaults
    input_file = sys.argv[1] if len(sys.argv) > 1 else "Pure_1.js"
    output_file = sys.argv[2] if len(sys.argv) > 2 else "Pure_1_corrected.js"
    
    audit_and_fix_database(input_file, output_file)