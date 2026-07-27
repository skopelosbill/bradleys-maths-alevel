window.ALEVEL_QUESTIONS = [
{
    "id": "004501",
    "board": "AQA",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "Modulus Function",
        "Graph Transformations"
    ],
    "img": "images/Pure/004501.png",
    "question": "Identify which of the graphs <strong>A</strong>, <strong>B</strong>, <strong>C</strong>, or <strong>D</strong> represents the curve $y = 3 - |x - 1|$.",
    "steps": [
        "Start with the parent modulus function, $y = |x|$. This has a 'V' shape with a vertex at $(0, 0)$.",
        "Apply the horizontal translation. Replacing $x$ with $x - 1$ translates the graph $1$ unit to the right, giving $y = |x - 1|$ with a vertex at $(1, 0)$.",
        "Apply the vertical reflection. Multiplying by $-1$ reflects the graph in the $x$-axis, giving $y = -|x - 1|$, which is an inverted 'V' shape with vertex at $(1, 0)$.",
        "Apply the vertical translation. Adding $3$ translates the entire graph upwards by $3$ units, giving the final equation: <br>$y = 3 - |x - 1|$ <br>The vertex is translated from $(1, 0)$ to $(1, 3)$.",
        "Identify key points to confirm the correct graph. The vertex is at $(1, 3)$. Finding the y-intercept by setting $x = 0$ gives: <br>\\begin{aligned} y &= 3 - |0 - 1| \\cr y &= 3 - 1 = 2 \\cr \\end{aligned} <br>The graph is an inverted 'V' shape with a vertex at $(1, 3)$ and a y-intercept at $(0, 2)$, which corresponds to Graph <strong>A</strong>."
    ],
    "pi_options": [
        {
            "ans": "Graph <strong>B</strong>",
            "feedback": "This graph represents $y = 3 - |x + 1|$. Replacing $x$ with $x + 1$ inside the modulus translates the graph to the left by $1$ unit, rather than to the right."
        },
        {
            "ans": "Graph <strong>C</strong>",
            "feedback": "This graph represents $y = |x - 1| - 3$. The positive modulus term means the graph is a 'V' shape opening upwards, rather than an inverted 'V' shape."
        },
        {
            "ans": "Graph <strong>D</strong>",
            "feedback": "This graph represents $y = |x + 1| - 3$. This curve is oriented upwards and has its vertex shifted $1$ unit to the left and $3$ units downwards."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Shift Directions",
        "content": "Always remember that horizontal shifts inside a function are counter-intuitive. Replacing $x$ with $x - c$ shifts the graph to the right, not the left. Many students lose easy marks by shifting $|x - 1|$ to the left."
    }
},
{
    "id": "004502",
    "board": "AQA",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "Reciprocal Graphs",
        "Graph Transformations"
    ],
    "img": "images/Pure/004502.png",
    "question": "Identify which of the graphs <strong>A</strong>, <strong>B</strong>, <strong>C</strong>, or <strong>D</strong> represents the curve $y = 2 - \\dfrac{1}{x+1}$.",
    "steps": [
        "Identify the vertical asymptote. The vertical asymptote occurs where the denominator of the reciprocal term is equal to zero: <br>\\begin{aligned} x + 1 &= 0 \\cr x &= -1 \\cr \\end{aligned} <br>This gives a vertical asymptote at $x = -1$.",
        "Identify the horizontal asymptote. As $x \\to \\pm\\infty$, the reciprocal term approaches zero: <br>\\begin{aligned} \\dfrac{ 1 }{ x + 1 } &\\to 0 \\cr y &\\to 2 \\cr \\end{aligned} <br>This gives a horizontal asymptote at $y = 2$.",
        "Determine the position of the curves relative to the asymptotes. The parent graph $y = \\dfrac{ 1 }{ x }$ lies in the first and third quadrants. The negative reciprocal transformation $y = -\\dfrac{ 1 }{ x + 1 }$ reflects the curves in the horizontal axis, placing them in the top-left and bottom-right regions relative to their asymptotes.",
        "Find the y-intercept to confirm. Setting $x = 0$ gives: <br>\\begin{aligned} y &= 2 - \\dfrac{ 1 }{ 0 + 1 } \\cr y &= 2 - 1 = 1 \\cr \\end{aligned} <br>The curve must pass through $(0, 1)$, have asymptotes $x = -1$ and $y = 2$, and have its branches in the top-left and bottom-right regions. This matches Graph <strong>A</strong>."
    ],
    "pi_options": [
        {
            "ans": "Graph <strong>B</strong>",
            "feedback": "This graph represents $y = 2 + \\dfrac{ 1 }{ x + 1 }$. The positive reciprocal term places the branches in the top-right and bottom-left regions relative to the asymptotes."
        },
        {
            "ans": "Graph <strong>C</strong>",
            "feedback": "This graph represents $y = 2 - \\dfrac{ 1 }{ x - 1 }$. The vertical asymptote for this curve is located at $x = 1$ rather than $x = -1$."
        },
        {
            "ans": "Graph <strong>D</strong>",
            "feedback": "This graph represents $y = -2 - \\dfrac{ 1 }{ x + 1 }$. The horizontal asymptote for this curve is located at $y = -2$ rather than $y = 2$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Quadrant Behavior",
        "content": "For reciprocal transformations of the form $y = a - \\dfrac{ b }{ x - c }$, if $b > 0$, the curves will occupy the top-left and bottom-right 'quadrants' relative to the asymptotes. This is a very quick way to eliminate incorrect graphs."
    }
},
{
    "id": "004503",
    "board": "AQA",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "Exponential Graphs",
        "Graph Transformations"
    ],
    "img": "images/Pure/004503.png",
    "question": "Identify which of the graphs <strong>A</strong>, <strong>B</strong>, <strong>C</strong>, or <strong>D</strong> represents the curve $y = 2 - \\mathrm{e}^{-x}$.",
    "steps": [
        "Identify the horizontal asymptote of the curve. As $x \\to \\infty$, the term $\\mathrm{e}^{-x} \\to 0$. Therefore: <br>\\begin{aligned} y &\\to 2 - 0 \\cr y &\\to 2 \\cr \\end{aligned} <br>This gives a horizontal asymptote at $y = 2$ on the far-right side of the graph.",
        "Determine the behavior of the curve as $x \\to -\\infty$. As $x$ becomes large and negative, $-x$ becomes large and positive, so $\\mathrm{e}^{-x} \\to \\infty$. Therefore: <br>\\begin{aligned} y &= 2 - \\mathrm{e}^{-x} \\to -\\infty \\cr \\end{aligned} <br>The graph must decrease without limit as we move to the left.",
        "Find the y-intercept. Setting $x = 0$ gives: <br>\\begin{aligned} y &= 2 - \\mathrm{e}^{ 0 } \\cr y &= 2 - 1 = 1 \\cr \\end{aligned} <br>The curve passes through $(0, 1)$.",
        "Identify the matching graph. The curve must have a horizontal asymptote at $y = 2$ as $x \\to \\infty$, pass through $(0, 1)$, and decrease to $-\\infty$ as $x \\to -\\infty$. This corresponds to Graph <strong>A</strong>."
    ],
    "pi_options": [
        {
            "ans": "Graph <strong>B</strong>",
            "feedback": "This graph represents $y = 2 - \\mathrm{e}^{ x }$. Because the exponent is positive, the curve approaches the asymptote $y = 2$ as $x \\to -\\infty$ and decreases to $-\\infty$ as $x \\to \\infty$."
        },
        {
            "ans": "Graph <strong>C</strong>",
            "feedback": "This graph represents $y = \\mathrm{e}^{-x} - 2$. This curve has a horizontal asymptote at $y = -2$ instead of $y = 2$ and grows to $+\\infty$ as $x \\to -\\infty$."
        },
        {
            "ans": "Graph <strong>D</strong>",
            "feedback": "This graph represents $y = \\mathrm{e}^{ x } - 2$. This curve has a horizontal asymptote at $y = -2$ instead of $y = 2$ and grows to $+\\infty$ as $x \\to \\infty$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Asymptote Limits",
        "content": "When dealing with exponential graphs, always check the limit as $x \\to \\infty$ and $x \\to -\\infty$ separately. An exponential term like $\\mathrm{e}^{-x}$ decays to $0$ as $x \\to \\infty$ but grows without bound as $x \\to -\\infty$."
    }
},
{
    "id": "004504",
    "board": "AQA",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Trigonometry",
    "subtopic": [
        "Trigonometric Graphs",
        "Graph Transformations"
    ],
    "img": "images/Pure/004504.png",
    "question": "Identify which of the graphs <strong>A</strong>, <strong>B</strong>, <strong>C</strong>, or <strong>D</strong> represents the curve $y = 1 - \\sin(2x)$ for $0 \\le x \\le \\pi$.",
    "steps": [
        "Analyze the individual transformations of the sine wave $y = \\sin(x)$ present in the function $y = 1 - \\sin(2x)$: <br>1. The term $2x$ inside the sine argument represents a horizontal stretch of scale factor $\\dfrac{ 1 }{ 2 }$, which reduces the period of the wave to $\\dfrac{ 2\\pi }{ 2 } = \\pi$. <br>2. The negative sign in front of the sine term reflects the wave vertically in the $x$-axis. <br>3. The constant term $1$ translates the entire wave upwards by $1$ unit.",
        "Calculate the coordinates at key points within the domain $[0, \\pi]$ to track the path of the wave: <br>\\begin{aligned} \\text{At } x = 0: \\quad & y = 1 - \\sin(0) = 1 \\cr \\text{At } x = \\dfrac{ \\pi }{ 4 }: \\quad & y = 1 - \\sin\\left( \\dfrac{ \\pi }{ 2 } \\right) = 1 - 1 = 0 \\cr \\end{aligned}",
        "Continue calculating key coordinate points to trace the rest of the cycle: <br>\\begin{aligned} \\text{At } x = \\dfrac{ \\pi }{ 2 }: \\quad & y = 1 - \\sin(\\pi) = 1 - 0 = 1 \\cr \\text{At } x = \\dfrac{ 3\\pi }{ 4 }: \\quad & y = 1 - \\sin\\left( \\dfrac{ 3\\pi }{ 2 } \\right) = 1 - (-1) = 2 \\cr \\text{At } x = \\pi: \\quad & y = 1 - \\sin(2\\pi) = 1 \\cr \\end{aligned}",
        "Identify the correct graph. The curve must start at $(0, 1)$, fall to a minimum of $0$ at $x = \\dfrac{ \\pi }{ 4 }$, return to $1$ at $x = \\dfrac{ \\pi }{ 2 }$, rise to a maximum of $2$ at $x = \\dfrac{ 3\\pi }{ 4 }$, and finish the cycle at $(\\pi, 1)$. This matches Graph <strong>A</strong>."
    ],
    "pi_options": [
        {
            "ans": "Graph <strong>B</strong>",
            "feedback": "This graph represents $y = 1 + \\sin(2x)$. Without the negative sign reflection, this wave rises to its maximum of $2$ at $x = \\dfrac{ \\pi }{ 4 }$ and falls to its minimum at $x = \\dfrac{ 3\\pi }{ 4 }$."
        },
        {
            "ans": "Graph <strong>C</strong>",
            "feedback": "This graph represents $y = 1 - \\sin(x)$. The period of this wave is $2\\pi$ instead of $\pi$, meaning it only completes half of its cycle within the domain $[0, \\pi]$, reaching its minimum at $x = \\dfrac{ \\pi }{ 2 }$."
        },
        {
            "ans": "Graph <strong>D</strong>",
            "feedback": "This graph represents $y = 1 - \\cos(2x)$. This curve is a cosine wave translation that starts at $(0, 0)$ instead of $(0, 1)$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Phase and Period Check",
        "content": "For trigonometric transformations, do not just look at the shape—always check the start point at $x = 0$ and the end of the first cycle. For $y = 1 - \\sin(2x)$, the period is $\\pi$, and it starts at $(0, 1)$."
    }
},
{
    "id": "004505",
    "board": "AQA",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "Modulus Function",
        "Graph Transformations"
    ],
    "img": "images/Pure/004505.png",
    "question": "Identify which of the graphs <strong>A</strong>, <strong>B</strong>, <strong>C</strong>, or <strong>D</strong> represents the curve $y = \\left| x^2 - 3 \\right|$.",
    "steps": [
        "Analyze the inner quadratic function, $f(x) = x^2 - 3$. This is a standard parabola opening upwards with its vertex at $(0, -3)$ and its x-intercepts at $x = \\pm\\sqrt{ 3 } \\approx \\pm 1.73$.",
        "Understand the effect of the modulus transformation, $y = |f(x)|$. The modulus function takes any negative outputs of $f(x)$ (the portion of the curve lying below the $x$-axis) and reflects them in the $x$-axis to become positive.",
        "Locate the reflected points on the graph: <br>1. The original vertex at $(0, -3)$ lies below the $x$-axis, so its $y$-coordinate becomes positive, translating it to a local maximum at $(0, 3)$. <br>2. The x-intercepts at $x = \\pm\\sqrt{ 3 }$ remain on the axis but become sharp points (cusps) where the curve bounces. <br>3. For $x < -\\sqrt{ 3 }$ and $x > \\sqrt{ 3 }$, the original function values are already positive, so these sections remain unchanged.",
        "Identify the correct graph. The curve must have a double-bounce 'W' shape with a local maximum at $(0, 3)$ and cusps touching the $x$-axis at $\\pm\\sqrt{ 3 }$, which matches Graph <strong>A</strong>."
    ],
    "pi_options": [
        {
            "ans": "Graph <strong>B</strong>",
            "feedback": "This graph represents the unreflected quadratic $y = x^2 - 3$. The portion below the $x$-axis has not been reflected."
        },
        {
            "ans": "Graph <strong>C</strong>",
            "feedback": "This graph represents $y = 3 - x^2$. This is a standard downward-opening parabola with a smooth vertex at $(0, 3)$, lacking the characteristic 'W' shape and sharp bouncing cusps on the $x$-axis."
        },
        {
            "ans": "Graph <strong>D</strong>",
            "feedback": "This graph represents $y = \\left| (x-1)^2 - 3 \\right|$. The horizontal translation shifts the vertex and the local maximum to the right by $1$ unit, placing the local maximum at $(1, 3)$ instead of $(0, 3)$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Cusp Points",
        "content": "The modulus transformation $y = |f(x)|$ creates sharp points (cusps) on the $x$-axis wherever $f(x) = 0$. These are non-differentiable points where the graph abruptly changes direction."
    }
},
{
    "id": "004506",
    "board": "AQA",
    "level": "AS",
    "major_area": "Algebra and Functions",
    "topic": "Indices",
    "subtopic": [
        "Laws of Indices",
        "Fractional Indices"
    ],
    "img": false,
    "question": "Simplify the expression: <br>$$\\sqrt{ x^{\\frac{ 3 }{ 4 }} \\times x^{\\frac{ 1 }{ 3 }} }$$ <br><br>Choose the correct option from the following: <br><strong>A:</strong> $x^{\\frac{ 1 }{ 6 }}$ <br><strong>B:</strong> $x^{\\frac{ 1 }{ 8 }}$ <br><strong>C:</strong> $x^{\\frac{ 13 }{ 24 }}$ <br><strong>D:</strong> $x^{\\frac{ 13 }{ 12 }}$",
    "steps": [
        "First, simplify the multiplication inside the square root by applying the first law of indices: $a^m \\times a^n = a^{m+n}$. This requires adding the fractional exponents: <br>\\begin{aligned} \\dfrac{ 3 }{ 4 } + \\dfrac{ 1 }{ 3 } &= \\dfrac{ 9 }{ 12 } + \\dfrac{ 4 }{ 12 } \\cr &= \\dfrac{ 13 }{ 12 } \\cr \\end{aligned} <br>This simplifies the expression inside the root to $x^{\\frac{ 13 }{ 12 }}$.",
        "Next, apply the law for roots as fractional powers: $\\sqrt{ a } = a^{\\frac{ 1 }{ 2 }}$. This means taking the square root corresponds to raising the inner expression to the power of $\\dfrac{ 1 }{ 2 }$: <br>$$\\left( x^{\\frac{ 13 }{ 12 }} \\right)^{\\frac;{ 1 }{ 2 }}$$",
        "Apply the power of a power law: $\\left( a^m \\right)^n = a^{m \\times n}$. Multiply the two fractional exponents: <br>\\begin{aligned} \\dfrac{ 13 }{ 12 } \\times \\dfrac{ 1 }{ 2 } &= \\dfrac{ 13 \\times 1 }{ 12 \\times 2 } \\cr &= \\dfrac{ 13 }{ 24 } \\cr \\end{aligned} <br>This gives the final simplified expression: <br>$$x^{\\frac{ 13 }{ 24 }}$$ <br>Therefore, the correct option is <strong>C</strong>."
    ],
    "pi_options": [
        {
            "ans": "<strong>A:</strong> $x^{\\frac{ 1 }{ 6 }}$",
            "feedback": "This is incorrect. This error occurs if you multiply the numerators and denominators of the exponents inside the root directly before applying the square root."
        },
        {
            "ans": "<strong>B:</strong> $x^{\\frac{ 1 }{ 8 }}$",
            "feedback": "This is incorrect. This error arises if you multiply the exponents inside the root ($x^{\\frac{ 3 }{ 4 } \\times \\frac{ 1 }{ 3 }} = x^{\\frac{ 1 }{ 4 }}$) instead of adding them, and then apply the square root."
        },
        {
            "ans": "<strong>D:</strong> $x^{\\frac{ 13 }{ 12 }}$",
            "feedback": "This is incorrect. This expression is the simplified form of the term inside the root. You have forgotten to apply the outer square root (raising to the power of $\\dfrac{ 1 }{ 2 }$)."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Root Exponents",
        "content": "A very common slip under exam pressure is simplifying the inner term perfectly but forgetting to apply the outer root. Always write the root as a fractional power, like $(\\dots)^{\\frac{ 1 }{ 2 }}$ for a square root, right at the start so you do not overlook it."
    }
},
{
    "id": "004507",
    "board": "AQA",
    "level": "AS",
    "major_area": "Algebra and Functions",
    "topic": "Indices",
    "subtopic": [
        "Laws of Indices",
        "Fractional Indices"
    ],
    "img": false,
    "question": "Simplify the expression: <br>$$\\sqrt[3]{ y^{\\frac{ 1 }{ 2 }} \\times y^{\\frac{ 2 }{ 5 }} }$$ <br><br>Choose the correct option from the following: <br><strong>A:</strong> $y^{\\frac{ 1 }{ 7 }}$ <br><strong>B:</strong> $y^{\\frac{ 3 }{ 10 }}$ <br><strong>C:</strong> $y^{\\frac{ 9 }{ 10 }}$ <br><strong>D:</strong> $y^{\\frac{ 1 }{ 15 }}$",
    "steps": [
        "Simplify the term inside the cube root first. Since the terms are multiplied, apply the law $a^m \\times a^n = a^{m+n}$ by adding the exponents: <br>\\begin{aligned} \\dfrac{ 1 }{ 2 } + \\dfrac{ 2 }{ 5 } &= \\dfrac{ 5 }{ 10 } + \\dfrac{ 4 }{ 10 } \\cr &= \\dfrac{ 9 }{ 10 } \\cr \\end{aligned} <br>This simplifies the expression inside the root to $y^{\\frac{ 9 }{ 10 }}$.",
        "Rewrite the cube root as a fractional power: $\\sqrt[3]{ a } = a^{\\frac{ 1 }{ 3 }}$. This gives: <br>$$\\left( y^{\\frac{ 9 }{ 10 }} \\right)^{\\frac{ 1 }{ 3 }}$$",
        "Apply the power of a power law $\\left( a^m \\right)^n = a^{m \\times n}$ by multiplying the exponents: <br>\\begin{aligned} \\dfrac{ 9 }{ 10 } \\times \\dfrac{ 1 }{ 3 } &= \\dfrac{ 9 }{ 30 } \\cr &= \\dfrac{ 3 }{ 10 } \\cr \\end{aligned} <br>This yields the final simplified term: <br>$$y^{\\frac{ 3 }{ 10 }}$$ <br>Therefore, the correct option is <strong>B</strong>."
    ],
    "pi_options": [
        {
            "ans": "<strong>A:</strong> $y^{\\frac{ 1 }{ 7 }}$",
            "feedback": "This is incorrect. This error occurs if you add the numerators and denominators of the inside exponents directly ($y^{\\frac{ 3 }{ 7 }}$) and then divide the exponent by $3$ to apply the cube root."
        },
        {
            "ans": "<strong>C:</strong> $y^{\\frac{ 9 }{ 10 }}$",
            "feedback": "This is incorrect. This is only the simplified term inside the root. You have forgotten to apply the outer cube root (raising to the power of $\\dfrac{ 1 }{ 3 }$)."
        },
        {
            "ans": "<strong>D:</strong> $y^{\\frac{ 1 }{ 15 }}$",
            "feedback": "This is incorrect. This error occurs if you multiply the exponents inside the root ($y^{\\frac{ 2 }{ 10 }} = y^{\\frac{ 1 }{ 5 }}$) instead of adding them, and then apply the cube root."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Cube Root Operations",
        "content": "For a cube root, remember that $\\sqrt[3]{ a } = a^{\\frac{ 1 }{ 3 }}$. Applying this power of a power operation means multiplying the inner exponent by $\\dfrac{ 1 }{ 3 }$, which is equivalent to dividing the inner exponent by $3$."
    }
},
{
    "id": "004508",
    "board": "AQA",
    "level": "AS",
    "major_area": "Algebra and Functions",
    "topic": "Indices",
    "subtopic": [
        "Laws of Indices",
        "Fractional Indices"
    ],
    "img": false,
    "question": "Simplify the expression: <br>$$\\sqrt{ \\dfrac{ w^{\\frac{ 5 }{ 6 }} }{ w^{\\frac{ 1 }{ 4 }} } }$$ <br><br>Choose the correct option from the following: <br><strong>A:</strong> $w^{\\frac{ 2 }{ 3 }}$ <br><strong>B:</strong> $w^{\\frac{ 7 }{ 12 }}$ <br><strong>C:</strong> $w^{\\frac{ 13 }{ 24 }}$ <br><strong>D:</strong> $w^{\\frac{ 7 }{ 24 }}$",
    "steps": [
        "First, simplify the division inside the square root by applying the second law of indices: $\\dfrac{ a^m }{ a^n } = a^{m-n}$. This requires subtracting the fractional exponents: <br>\\begin{aligned} \\dfrac{ 5 }{ 6 } - \\dfrac{ 1 }{ 4 } &= \\dfrac{ 10 }{ 12 } - \\dfrac{ 3 }{ 12 } \\cr &= \\dfrac{ 7 }{ 12 } \\cr \\end{aligned} <br>This simplifies the expression inside the root to $w^{\\frac{ 7 }{ 12 }}$.",
        "Next, apply the fractional exponent rule for the square root: $\\sqrt{ a } = a^{\\frac{ 1 }{ 2 }}$. This translates the expression to: <br>$$\\left( w^{\\frac{ 7 }{ 12 }} \\right)^{\\frac{ 1 }{ 2 }}$$",
        "Now multiply the exponents using the power of a power law $\\left( a^m \\right)^n = a^{m \\times n}$: <br>\\begin{aligned} \\dfrac{ 7 }{ 12 } \\times \\dfrac{ 1 }{ 2 } &= \\dfrac{ 7 }{ 24 } \\cr \\end{aligned} <br>The final simplified term is: <br>$$w^{\\frac{ 7 }{ 24 }}$$ <br>Therefore, the correct option is <strong>D</strong>."
    ],
    "pi_options": [
        {
            "ans": "<strong>A:</strong> $w^{\\frac{ 2 }{ 3 }}$",
            "feedback": "This is incorrect. This error occurs if you subtract the denominators and numerators of the exponents inside the root directly."
        },
        {
            "ans": "<strong>B:</strong> $w^{\\frac{ 7 }{ 12 }}$",
            "feedback": "This is incorrect. This is only the simplified term inside the root. You have forgotten to apply the outer square root (raising to the power of $\\dfrac{ 1 }{ 2 }$)."
        },
        {
            "ans": "<strong>C:</strong> $w^{\\frac{ 13 }{ 24 }}$",
            "feedback": "This is incorrect. This error arises if you add the exponents inside the root (treating division as multiplication) and then apply the square root."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Division Laws",
        "content": "Division of base terms always translates to the subtraction of exponents, i.e., $\\dfrac{ x^a }{ x^b } = x^{a-b}$. Be extremely careful with your subtraction arithmetic and double-check your common denominators!"
    }
},
{
    "id": "004509",
    "board": "AQA",
    "level": "AS",
    "major_area": "Algebra and Functions",
    "topic": "Indices",
    "subtopic": [
        "Laws of Indices",
        "Fractional Indices"
    ],
    "img": false,
    "question": "Simplify the expression: <br>$$\\sqrt{ z^{\\frac{ 3 }{ 2 }} \\times z^{-\\frac{ 2 }{ 3 }} }$$ <br><br>Choose the correct option from the following: <br><strong>A:</strong> $z^{\\frac{ 5 }{ 12 }}$ <br><strong>B:</strong> $z^{\\frac{ 5 }{ 6 }}$ <br><strong>C:</strong> $z^{\\frac{ 13 }{ 12 }}$ <br><strong>D:</strong> $z^{\\frac{ 1 }{ 6 }}$",
    "steps": [
        "First, simplify the multiplication inside the root. Apply the multiplication law $a^m \\times a^n = a^{m+n}$ by adding the positive and negative fractional exponents: <br>\\begin{aligned} \\dfrac{ 3 }{ 2 } + \\left( -\\dfrac{ 2 }{ 3 } \\right) &= \\dfrac{ 3 }{ 2 } - \\dfrac{ 2 }{ 3 } \\cr &= \\dfrac{ 9 }{ 6 } - \\dfrac{ 4 }{ 6 } \\cr &= \\dfrac{ 5 }{ 6 } \\cr \\end{aligned} <br>This simplifies the expression inside the root to $z^{\\frac{ 5 }{ 6 }}$.",
        "Now, rewrite the square root as raising to the power of $\\dfrac{ 1 }{ 2 }$: <br>$$\\left( z^{\\frac{ 5 }{ 6 }} \\right)^{\\frac{ 1 }{ 2 }}$$",
        "Multiply the inner and outer exponents using the law $\\left( a^m \\right)^n = a^{m \\times n}$: <br>\\begin{aligned} \\dfrac{ 5 }{ 6 } \\times \\dfrac{ 1 }{ 2 } &= \\dfrac{ 5 }{ 12 } \\cr \\end{aligned} <br>This gives the final simplified term: <br>$$z^{\\frac{ 5 }{ 12 }}$$ <br>Therefore, the correct option is <strong>A</strong>."
    ],
    "pi_options": [
        {
            "ans": "<strong>B:</strong> $z^{\\frac{ 5 }{ 6 }}$",
            "feedback": "This is incorrect. This represents the term inside the root. You have forgotten to apply the outer square root."
        },
        {
            "ans": "<strong>C:</strong> $z^{\\frac{ 13 }{ 12 }}$",
            "feedback": "This is incorrect. This error occurs if you ignore the negative sign on the second exponent and add both exponents as positive quantities ($z^{\\frac{ 9 }{ 6 } + \\frac{ 4 }{ 6 }} = z^{\\frac{ 13 }{ 6 }}$) before applying the square root."
        },
        {
            "ans": "<strong>D:</strong> $z^{\\frac{ 1 }{ 6 }}$",
            "feedback": "This is incorrect. This error occurs if you subtract the exponents and make a common denominator slip, or skip the outer square root incorrectly."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Negative Sign Tracking",
        "content": "Do not let negative exponents throw you off. The multiplication rule $a^m \\times a^n = a^{m+n}$ holds perfectly. When $n$ is negative, this naturally becomes subtraction: $a^{m - |n|}$."
    }
},
{
    "id": "004510",
    "board": "AQA",
    "level": "AS",
    "major_area": "Algebra and Functions",
    "topic": "Indices",
    "subtopic": [
        "Laws of Indices",
        "Fractional Indices"
    ],
    "img": false,
    "question": "Simplify the expression: <br>$$\\sqrt[4]{ \\dfrac{ x^{\\frac{ 2 }{ 3 }} }{ x^{-\\frac{ 1 }{ 2 }} } }$$ <br><br>Choose the correct option from the following: <br><strong>A:</strong> $x^{\\frac{ 1 }{ 24 }}$ <br><strong>B:</strong> $x^{\\frac{ 7 }{ 24 }}$ <br><strong>C:</strong> $x^{\\frac{ 7 }{ 6 }}$ <br><strong>D:</strong> $x^{\\frac{ 5 }{ 12 }}$",
    "steps": [
        "Simplify the division inside the root first. Apply the law $\\dfrac{ a^m }{ a^n } = a^{m-n}$. Subtracting a negative exponent results in addition: <br>\\begin{aligned} \\dfrac{ 2 }{ 3 } - \\left( -\\dfrac{ 1 }{ 2 } \\right) &= \\dfrac{ 2 }{ 3 } + \\dfrac{ 1 }{ 2 } \\cr &= \\dfrac{ 4 }{ 6 } + \\dfrac{ 3 }{ 6 } \\cr &= \\dfrac{ 7 }{ 6 } \\cr \\end{aligned} <br>This simplifies the expression inside the root to $x^{\\frac{ 7 }{ 6 }}$.",
        "Rewrite the fourth root as raising to the power of $\\dfrac{ 1 }{ 4 }$: <br>$$\\left( x^{\\frac{ 7 }{ 6 }} \\right)^{\\frac{ 1 }{ 4 }}$$",
        "Multiply the exponents using the power of a power law $\\left( a^m \\right)^n = a^{m \\times n}$: <br>\\begin{aligned} \\dfrac{ 7 }{ 6 } \\times \\dfrac{ 1 }{ 4 } &= \\dfrac{ 7 }{ 24 } \\cr \\end{aligned} <br>This gives the final simplified term: <br>$$x^{\\frac{ 7 }{ 24 }}$$ <br>Therefore, the correct option is <strong>B</strong>."
    ],
    "pi_options": [
        {
            "ans": "<strong>A:</strong> $x^{\\frac{ 1 }{ 24 }}$",
            "feedback": "This is incorrect. This error occurs if you treat the denominator's exponent as positive and subtract it ($2/3 - 1/2 = 1/6$) instead of adding it, and then apply the fourth root."
        },
        {
            "ans": "<strong>C:</strong> $x^{\\frac{ 7 }{ 6 }}$",
            "feedback": "This is incorrect. This is only the simplified term inside the root. You have forgotten to apply the outer fourth root (raising to the power of $\\dfrac{ 1 }{ 4 }$)."
        },
        {
            "ans": "<strong>D:</strong> $x^{\\frac{ 5 }{ 12 }}$",
            "feedback": "This is incorrect. This error arises from a series of algebraic arithmetic slips, or incorrectly applying a square root instead of a fourth root."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Double Negatives",
        "content": "Subtracting a negative exponent is a common source of easy mistakes. Remember that subtracting a negative value is equivalent to adding its positive value: $x^a \\div x^{-b} = x^{a - (-b)} = x^{a + b}$."
    }
}
];