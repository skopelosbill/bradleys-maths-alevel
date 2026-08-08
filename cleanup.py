import json
import os
import glob

def get_dfe_area(item):
    topic = item.get("topic", "").lower()
    subtopics = [s.lower() for s in item.get("subtopic", [])]
    combined = topic + " " + " ".join(subtopics)

    # 1. Differentiation (Optimization and Turning Points)
    diff_keywords = ["diff", "deriv", "stationary", "turning", "optimization", "maxima", "minima", "inflection", "tangent"]
    if any(kw in combined for kw in diff_keywords):
        return "Differentiation"

    # 2. Integration
    int_keywords = ["integ", "area under", "differential equation", "parts", "substitution", "volume"]
    if any(kw in combined for kw in int_keywords):
        return "Integration"

    # 3. Coordinate Geometry (Parametrics)
    if "parametric" in combined:
        return "Coordinate Geometry"

    # 4. Exponentials and Logarithms
    if "exponential" in combined or "logarithm" in combined:
        return "Exponentials and Logarithms"

    # 5. Numerical Methods
    if any(kw in combined for kw in ["trapezium", "newton", "iteration", "numerical"]):
        return "Numerical Methods"

    # 6. Default Mappings for remaining Major Areas
    major = item.get("major_area", "").lower()
    mapping = {
        "algebra": "Algebra and Functions",
        "algebra & functions": "Algebra and Functions",
        "algebra and functions": "Algebra and Functions",
        "sequences & series": "Sequences and Series",
        "sequences and series": "Sequences and Series",
        "trigonometry": "Trigonometry",
        "vectors": "Vectors",
        "proof": "Proof"
    }
    
    return mapping.get(major, item.get("major_area"))

def align_to_dfe():
    files = glob.glob("Pure_*.js")
    
    for file_path in files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            start_idx = content.find('[')
            end_idx = content.rfind(']') + 1
            if start_idx == -1: continue
            
            header = content[:start_idx]
            footer = content[end_idx:]
            data = json.loads(content[start_idx:end_idx])

            changed = 0
            for item in data:
                old_area = item.get("major_area")
                new_area = get_dfe_area(item)
                
                if old_area != new_area:
                    item["major_area"] = new_area
                    changed += 1

            if changed > 0:
                with open(file_path, 'w', encoding='utf-8') as f:
                    # Using indent=8 to match your original file style
                    f.write(header + json.dumps(data, indent=8) + footer)
                print(f"Updated {file_path}: {changed} records reclassified.")
            else:
                print(f"No changes needed for {file_path}.")

        except Exception as e:
            print(f"Error in {file_path}: {e}")

if __name__ == "__main__":
    align_to_dfe()