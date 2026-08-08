import json
import glob
import re

def final_polish(s):
    """The most aggressive harmoniser to bring subtopics under 100 entries."""
    s = s.strip()
    
    # 1. Broad Category Merges (The 'Big Buckets')
    rules = {
        r".*(Algebraic|Fraction|Expansion|Indices|Surd|Discriminant|Roots|Rational).*": "Algebraic Methods",
        r".*(Circle|Chord|Semicircle|Diameter|Arc|Sector).*": "Circle Geometry",
        r".*(Modelling|Modeling|Population|Logistic|Cooling|Decay|Growth).*": "Modelling and Applications",
        r".*(Stationary|Turning|Maxima|Minima|Optimization|Inflection).*": "Stationary Points",
        r".*(Tangent|Normal|Gradient).*": "Tangents and Normals",
        r".*(Newton|Iteration|Trapezium|Bisection|Approximation|Numerical).*": "Numerical Methods",
        r".*(Double|Compound|Harmonic|Addition|R-Formula|Identit).*": "Trigonometric Identities",
        r".*(Differentiation Rules|Chain|Product|Quotient|Implicit|Parametric Diff).*": "Differentiation Techniques",
        r".*(Advanced Integration|Parts|Substitution|Differential Equation|Separation).*": "Advanced Integration",
        r".*(Vector|Magnitude|Collinear).*": "Vector Properties",
        r".*(Proof|Contradiction|Exhaustion|Counterexample).*": "Mathematical Proof",
        r".*(Transformation|Translation|Stretch|Reflect).*": "Graph Transformations",
        r".*(Domain|Range|Inverse|Composite|Mapping).*": "Functions and Mappings",
        r".*(Sequence|Series|Progression|Sigma|Recurrence).*": "Sequences and Series",
        r".*(Linear Equation|Simultaneous|Straight Line).*": "Linear Equations",
        r".*(Inequalit).*": "Inequalities",
        r".*(Trigonometric Equation|Trig Equation).*": "Trigonometric Equations",
        r".*(Radials|Radians|Degree).*": "Radian Measure"
    }

    for pattern, replacement in rules.items():
        if re.search(pattern, s, re.IGNORECASE):
            return replacement
            
    # 2. Case and Plural consistency
    s = s.replace("Equations", "Equation").replace("Identities", "Identity")
    return s[0].upper() + s[1:] if s else s

def ultimate_cleanup():
    files = glob.glob("Pure_*.js")
    for file_path in files:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        start, end = content.find('['), content.rfind(']') + 1
        if start == -1: continue
        
        data = json.loads(content[start:end])
        for item in data:
            if "subtopic" in item and isinstance(item["subtopic"], list):
                # Clean, deduplicate, and remove generic placeholders like 'Proof' 
                # if more specific proofs are present
                cleaned = list(set([final_polish(st) for st in item["subtopic"]]))
                
                # If 'Algebraic Methods' is in there with others, it's often redundant
                if len(cleaned) > 1 and "Algebraic Methods" in cleaned:
                    cleaned.remove("Algebraic Methods")
                
                item["subtopic"] = sorted(cleaned)

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content[:start] + json.dumps(data, indent=8) + content[end:])
    
    print("Final Subtopic Harmonisation Complete.")

if __name__ == "__main__":
    ultimate_cleanup()