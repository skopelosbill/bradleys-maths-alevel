import json
import glob
import re

def production_harmonise(s):
    s = s.strip()
    
    # 1. Final Aggressive Mappings
    rules = {
        r".*(Algebraic Methods|Factorisation|Linear Factor|Prime|Rearranging|Isolating|Rational|Square Form).*": "Algebraic Methods",
        r".*(Trigonometry|Triangle|Sine Rule|Cosine Rule|Pyramid|Bearings|Radian).*": "Trigonometry",
        r".*(Differentiation|Rates of Change|Applied Calculus|Stationary|Turning|Optimization).*": "Differentiation",
        r".*(Integration|Area Under|Definite|Indefinite|Differential Equation).*": "Integration",
        r".*(Functions and Mappings|Modulus|Interval of Validity|Inverse|Domain|Range).*": "Functions and Mappings",
        r".*(Linear Equation|Line Equation|Equation|Parameter Solving|Constant Determination|Axes Intersection).*": "Linear Equations",
        r".*(Coordinate Geometry|Vertex|Vertices|Isosceles|Distance|Ratio Theorem|Shortest Distance).*": "Coordinate Geometry",
        r".*(Circle Geometry|Chord|Semicircle).*": "Circle Geometry",
        r".*(Curved Graphs|Reciprocal Graph|Interpreting Graph|Asymptote).*": "Curved Graphs",
        r".*(Modelling|Practical|Word Problem).*": "Modelling and Applications",
        r".*(Volumes and Surface Areas).*": "Geometry: Solids"
    }

    for pattern, replacement in rules.items():
        if re.search(pattern, s, re.IGNORECASE):
            return replacement
            
    # Standardise case for anything missed
    return s[0].upper() + s[1:] if s else s

def final_production_run():
    files = glob.glob("Pure_*.js")
    for file_path in files:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        start, end = content.find('['), content.rfind(']') + 1
        if start == -1: continue
        
        data = json.loads(content[start:end])
        for item in data:
            if "subtopic" in item and isinstance(item["subtopic"], list):
                # Clean, deduplicate, and sort
                cleaned = sorted(list(set([production_harmonise(st) for st in item["subtopic"]])))
                
                # Cleanup logic: If specific Calc-Trig tags exist, keep them 
                # but remove the generic parent tags to avoid redundancy
                if "Trigonometry and Differentiation" in cleaned:
                    if "Trigonometry" in cleaned: cleaned.remove("Trigonometry")
                    if "Differentiation" in cleaned: cleaned.remove("Differentiation")
                
                item["subtopic"] = cleaned

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content[:start] + json.dumps(data, indent=8) + content[end:])
    
    print("Production Cleanup Complete.")

if __name__ == "__main__":
    final_production_run()