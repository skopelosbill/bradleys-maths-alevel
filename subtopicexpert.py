import json
import glob
import re

def expert_harmonise(s):
    s = s.strip()
    
    # Priority Mappings based on your expert suggestions
    rules = {
        # Exponential & Logarithmic Functions and Graphs
        r".*(Logarithmic|Exponential|Natural Log|Doubling Time|Log-Log|Newton's Law of Cooling).*": "Exponential and Logarithmic Functions and Graphs",
        
        # Trigonometry
        r".*(Trigonometric|Sine Rule|Cosine Rule|Ambiguous Case|Bearings|Radian|3D Trig|Direction Angle|Direction Cosine|Secant|Wave Equation|Harmonic Form).*": "Trigonometry",
        
        # Differentiation
        r".*(Differentiation|Stationary|Turning|Concavity|Second Derivative|First Principles|Rate of Change|Maximum|Minimum|Optimization).*": "Differentiation",
        
        # Integration
        r".*(Integration|Area Under a Curve|Definite Integration|Indefinite Integration|Separation of Variables|Differential Equation).*": "Integration",
        
        # Curved Graphs
        r".*(Cubic|Curve|Asymptote|Hyperbola|Polynomial Curves|Reciprocal Curves|Quartic|Equation of Curve).*": "Curved Graphs",
        
        # Quadratics
        r".*(Quadratic|Vertex Form|Discriminant|Roots|Completing the Square|Difference of Two Squares).*": "Quadratics",
        
        # Intersections
        r".*(Intersection of Line|Intersection of Curve|Intersecting).*": "Intersections of Lines and Curves",
        
        # Coordinate Geometry
        r".*(Parallel Line|Perpendicular|Coordinate Geometry|Distance Formula|Line Division|Triangles in Coordinate).*": "Coordinate Geometry",
        
        # Circle Geometry
        r".*(Circle|Chord|Semicircle|Diameter|Cyclic Quadrilateral|Segment Ratio).*": "Circle Geometry",
        
        # Algebraic Methods
        r".*(Factor Theorem|Algebraic|Polynomial Remainders|Improper Fraction|Simplifying Fraction|Partial Fraction|Conjugate).*": "Algebraic Methods",
        
        # Functions
        r".*(Modulus|Function|Mapping|Domain|Range|Boundary Condition|Boundary Value).*": "Functions and Mappings",
        
        # Linear Equations
        r".*(Linear Equation|Simultaneous|Solving Equation|Find.*Constant|Find.*Coefficient|Cartesian Equation).*": "Linear Equations",
        
        # Three Linear Factors
        r".*(Three Linear Factors|Three-Variable|Word Problems in Three Variables).*": "Three Linear Factors",
        
        # Proof
        r".*(Proof|Consecutive Integer|Number Theory|Detailed Reasoning).*": "Proof",
        
        # Limits
        r".*(Limit|Infinit).*": "Limits",
        
        # Sequences and Series
        r".*(Sequence|Series|Progression|Sigma|Sum to Infinity).*": "Sequences and Series"
       
    }

    for pattern, replacement in rules.items():
        if re.search(pattern, s, re.IGNORECASE):
            return replacement
            
    # Cleanup for anything else
    s = s.replace("Identities", "Identity").replace("Equations", "Equation")
    if s.lower().startswith("the "): s = s[4:]
    return s[0].upper() + s[1:] if s else s

def run_expert_cleanup():
    files = glob.glob("Pure_*.js")
    for file_path in files:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        start, end = content.find('['), content.rfind(']') + 1
        if start == -1: continue
        
        data = json.loads(content[start:end])
        for item in data:
            if "subtopic" in item and isinstance(item["subtopic"], list):
                # Apply harmonisation, remove 'Modelling' if it's paired with something specific
                cleaned = list(set([expert_harmonise(st) for st in item["subtopic"]]))
                
                # Special handling for 'Trigonometry' and 'Differentiation' overlap
                if "Trigonometry" in cleaned and "Differentiation" in cleaned:
                    cleaned = ["Trigonometry and Differentiation"]
                elif "Trigonometry" in cleaned and "Integration" in cleaned:
                    cleaned = ["Trigonometry and Integration"]
                
                item["subtopic"] = sorted(cleaned)

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content[:start] + json.dumps(data, indent=8) + content[end:])
    
    print("Expert Harmonisation Complete.")

if __name__ == "__main__":
    run_expert_cleanup()