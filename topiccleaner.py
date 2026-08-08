import json
import glob

# The "Topic Standardiser" Map
TOPIC_MAP = {
    # Vectors
    "2d vectors": "Vectors",
    "3d vectors": "Vectors",
    "vectors in 2d": "Vectors",
    
    # Algebra
    "algebraic fractions": "Algebraic Methods",
    "polynomials": "Algebraic Methods",
    "quadratics": "Algebraic Methods",
    "quadratic functions": "Algebraic Methods",
    "surds": "Algebraic Methods",
    "indices": "Algebraic Methods",
    "surds and indices": "Algebraic Methods",
    "simultaneous equations": "Algebraic Methods",
    "equations and inequalities": "Equations and Inequalities",
    "inequalities": "Equations and Inequalities",
    
    # Coordinate Geometry
    "circles": "Circles",
    "circle geometry": "Circles",
    "coordinate geometry of the circle": "Circles",
    "straight lines": "Straight Lines",
    "equations of straight lines": "Straight Lines",
    "curves and lines": "Straight Lines",
    "parametric equations": "Parametric Equations",
    
    # Calculus
    "turning points": "Applications of Differentiation",
    "optimization": "Applications of Differentiation",
    "curves and differentiation": "Applications of Differentiation",
    "definite integration": "Integration",
    "differential equations": "Differential Equations",
    "differentiation and integration": "Calculus Overview", # Rare case
    
    # Sequences/Series
    "arithmetic progressions": "Sequences and Series",
    "series": "Sequences and Series",
    "sequences": "Sequences and Series",
    "binomial expansion": "Binomial Expansion",
    
    # Trig
    "trigonometric equations": "Trigonometric Equations",
    "trigonometric identities": "Trigonometric Identities",
    "trigonometric functions": "Trigonometric Functions",
    "small angle approximations": "Trigonometry",
    
    # Functions
    "graph transformations": "Functions and Graphs",
    "graphs of functions": "Functions and Graphs",
    "curve sketching": "Functions and Graphs",
    
    # Proof
    "mathematical proof": "Proof"
}

def clean_topics():
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
                # 1. Standardise to Title Case first to catch case errors
                raw_topic = item.get("topic", "").strip()
                
                # 2. Check the mapping (lowercase check for safety)
                if raw_topic.lower() in TOPIC_MAP:
                    item["topic"] = TOPIC_MAP[raw_topic.lower()]
                    changed += 1
                else:
                    # 3. If not in map, just fix the casing (e.g. 'numerical methods')
                    item["topic"] = raw_topic.title()
                    changed += 1

            if changed > 0:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(header + json.dumps(data, indent=8) + footer)
                print(f"Updated {file_path}: {changed} topics cleaned.")
                
        except Exception as e:
            print(f"Error in {file_path}: {e}")

if __name__ == "__main__":
    clean_topics()