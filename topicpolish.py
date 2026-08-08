import json
import glob

# Final refinement map
FINAL_REFINEMENT = {
    # Consolidation of Algebra & Functions
    "Algebra And Functions": "Functions",
    "Algebraic And Exponential Modeling": "Algebraic Methods",
    "Graphs And Modeling": "Functions and Graphs",
    "Exponentials": "Exponentials and Logarithms",
    "Logarithms": "Exponentials and Logarithms",
    "Exponential Modelling": "Exponentials and Logarithms",
    
    # Consolidation of Trigonometry
    "Trigonometry": "Trigonometric Functions",
    "Small Angle Approximations": "Trigonometric Functions",
    
    # Consolidation of Calculus
    "Calculus": "Differentiation", # Defaulting to Diff unless we specify otherwise
    "Calculus Overview": "Differentiation",
    
    # Cleaning up the 'And' vs 'and' duplicates
    "Sequences And Series": "Sequences and Series"
}

def finalize_topics():
    files = glob.glob("Pure_*.js")
    for file_path in files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            start, end = content.find('['), content.rfind(']') + 1
            if start == -1: continue
            
            header, footer = content[:start], content[end:]
            data = json.loads(content[start:end])
            changed = 0

            for item in data:
                current_topic = item.get("topic", "")
                
                # Check for direct map matches
                if current_topic in FINAL_REFINEMENT:
                    item["topic"] = FINAL_REFINEMENT[current_topic]
                    changed += 1
                
                # Standardise "And" to "and" for all topics
                elif " And " in current_topic:
                    item["topic"] = current_topic.replace(" And ", " and ")
                    changed += 1

            if changed > 0:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(header + json.dumps(data, indent=8) + footer)
                print(f"Refined {file_path}: {changed} records polished.")
                
        except Exception as e:
            print(f"Error in {file_path}: {e}")

if __name__ == "__main__":
    finalize_topics()