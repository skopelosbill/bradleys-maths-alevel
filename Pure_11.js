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
        "Next, apply the law for roots as fractional powers: $\\sqrt{ a } = a^{\\frac{ 1 }{ 2 }}$. This means taking the square root corresponds to raising the inner expression to the power of $\\dfrac{ 1 }{ 2 }$: <br>$$\\left( x^{\\frac{ 13 }{ 12 }} \\right)^{\\frac{ 1 }{ 2 }}$$",
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
},
{
    "id": "004511",
    "board": "AQA",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "One-to-One Functions",
        "Inverse Functions"
    ],
    "img": false,
    "question": "Each of these functions has domain $x \\in \\mathbb{ R }$. Which function does not have an inverse? <br><br>Choose the correct option from the following: <br><strong>A:</strong> $f(x) = x^3$ <br><strong>B:</strong> $f(x) = 3x - 2$ <br><strong>C:</strong> $f(x) = x^2 + 1$ <br><strong>D:</strong> $f(x) = \\mathrm{ e }^{ 2x }$",
    "steps": [
        "Recall the definition of an inverse function. An inverse function $f^{-1}(x)$ exists if and only if the original function $f(x)$ is one-to-one over its defined domain. This means that for every output $y$, there is exactly one corresponding input $x$.",
        "Evaluate each option over the domain $x \\in \\mathbb{ R }$: <br>1. For $f(x) = x^3$, every real number has a unique cube root, so the function is one-to-one. <br>2. For $f(x) = 3x - 2$, this is a straight line with a non-zero gradient, so the function is one-to-one. <br>3. For $f(x) = \\mathrm{ e }^{ 2x }$, the exponential function is strictly increasing, so the function is one-to-one.",
        "For $f(x) = x^2 + 1$, consider positive and negative values of $x$. For example: <br>\\begin{aligned} f(2) &= 2^2 + 1 = 5 \\cr f(-2) &= (-2)^2 + 1 = 5 \\cr \\end{aligned} <br>Since two distinct inputs produce the same output, $f(x) = x^2 + 1$ is a many-to-one function over the domain of real numbers.",
        "Because $f(x) = x^2 + 1$ is many-to-one over the domain $x \\in \\mathbb{ R }$, it does not have an inverse. <br>Therefore, the correct option is <strong>C</strong>."
    ],
    "pi_options": [
        {
            "ans": "<strong>A:</strong> $f(x) = x^3$",
            "feedback": "This is incorrect. The cubic function is strictly increasing over all real numbers, meaning it is one-to-one and has a well-defined cube root inverse function."
        },
        {
            "ans": "<strong>B:</strong> $f(x) = 3x - 2$",
            "feedback": "This is incorrect. This is a linear function with a non-zero gradient, which represents a one-to-one mapping and always possesses a linear inverse function."
        },
        {
            "ans": "<strong>D:</strong> $f(x) = \\mathrm{ e }^{ 2x }$",
            "feedback": "This is incorrect. The exponential function is strictly increasing over all real numbers and is one-to-one, possessing a logarithmic inverse function."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Horizontal Line Test",
        "content": "To quickly check if a function has an inverse, visualise its graph and apply the Horizontal Line Test. If any horizontal line intersects the graph more than once, the function is many-to-one and cannot have an inverse unless its domain is restricted."
    }
},
{
    "id": "004512",
    "board": "AQA",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "Domain Restriction",
        "Inverse Functions"
    ],
    "img": false,
    "question": "The function $g(x) = (x - 2)^2 + 3$ has domain $x \\ge k$. What is the minimum value of $k$ for which the inverse function $g^{-1}(x)$ exists? <br><br>Choose the correct option from the following: <br><strong>A:</strong> $k = 3$ <br><strong>B:</strong> $k = 2$ <br><strong>C:</strong> $k = 0$ <br><strong>D:</strong> $k = -2$",
    "steps": [
        "Recognise that $g(x) = (x - 2)^2 + 3$ is a quadratic function whose graph is a parabola opening upwards. The vertex of this parabola represents the stationary minimum point of the function.",
        "Identify the coordinates of the vertex from the completed square form: <br>\\begin{aligned} g(x) &= (x - 2)^2 + 3 \\cr \\text{Vertex} &= (2, 3) \\cr \\end{aligned} <br>The line of symmetry of the parabola is $x = 2$.",
        "Explain how domain restriction affects the existence of an inverse. A quadratic function defined on $x \\in \\mathbb{ R }$ is many-to-one and has no inverse. To make it one-to-one, the domain must be restricted so that it contains only one side of the line of symmetry $x = 2$.",
        "For a domain of the form $x \\ge k$, the minimum value of $k$ that avoids including points on both sides of the vertex is the x-coordinate of the vertex itself: <br>\\begin{aligned} k &= 2 \\cr \\end{aligned} <br>Therefore, the correct option is <strong>B</strong>."
    ],
    "pi_options": [
        {
            "ans": "<strong>A:</strong> $k = 3$",
            "feedback": "This is incorrect. While the function is indeed one-to-one on the restricted domain $x \\ge 3$, this is not the <strong>minimum</strong> value of $k$ for which an inverse exists."
        },
        {
            "ans": "<strong>C:</strong> $k = 0$",
            "feedback": "This is incorrect. If $k = 0$, the domain $x \\ge 0$ includes the vertex at $x = 2$, making the function many-to-one and preventing an inverse from existing."
        },
        {
            "ans": "<strong>D:</strong> $k = -2$",
            "feedback": "This is incorrect. This value lies to the left of the vertex, which means the domain $x \\ge -2$ includes parts of both the decreasing and increasing branches of the parabola."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Vertex Domain Boundary",
        "content": "For any quadratic function, the boundary of the domain restriction required to construct an inverse will always occur exactly at the x-coordinate of its stationary point (vertex), which is found at $x = -\\dfrac{ b }{ 2a }$."
    }
},
{
    "id": "004513",
    "board": "AQA",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "Composite Functions",
        "Domains and Ranges"
    ],
    "img": false,
    "question": "Let the functions $f(x) = \\ln(x - 1)$ with domain $x > 1$, and $g(x) = x^2$ with domain $x \\in \\mathbb{ R }$, be defined. Which of the following represents the composite function $fg(x)$ and its correct domain? <br><br>Choose the correct option from the following: <br><strong>A:</strong> $fg(x) = \\ln(x^2 - 1)$ with domain $x > 1$ or $x < -1$ <br><strong>B:</strong> $fg(x) = (\\ln(x - 1))^2$ with domain $x > 1$ <br><strong>C:</strong> $fg(x) = \\ln(x^2 - 1)$ with domain $x > 1$ <br><strong>D:</strong> $fg(x) = \\ln(x^2 - 1)$ with domain $x \\in \\mathbb{ R }$",
    "steps": [
        "Find the algebraic expression for the composite function $fg(x) = f(g(x))$. Substitute the expression for $g(x)$ into $f(x)$: <br>\\begin{aligned} fg(x) &= f(x^2) \\cr &= \\ln(x^2 - 1) \\cr \\end{aligned}",
        "Determine the requirements for the domain of $fg(x)$. For a composite function to exist, the inputs $x$ must be in the domain of $g(x)$, and the outputs $g(x)$ must lie within the domain of $f(x)$.",
        "Set up the domain inequality. The domain of $f(x)$ is $x > 1$, which means the input to $f$ must be strictly greater than $1$. Therefore, we must have: <br>\\begin{aligned} g(x) &> 1 \\cr x^2 &> 1 \\cr \\end{aligned}",
        "Solve the quadratic inequality $x^2 > 1$. Taking the square root of both sides gives: <br>\\begin{aligned} |x| &> 1 \\cr \\end{aligned} <br>This splits into two disjoint intervals: <br>\\begin{aligned} x > 1 \\quad \\text{or} \\quad x < -1 \\cr \\end{aligned} <br>Therefore, the correct option is <strong>A</strong>."
    ],
    "pi_options": [
        {
            "ans": "<strong>B:</strong> $fg(x) = (\\ln(x - 1))^2$ with domain $x > 1$",
            "feedback": "This is incorrect. This expression represents $gf(x) = g(f(x))$, which is the opposite composite order."
        },
        {
            "ans": "<strong>C:</strong> $fg(x) = \\ln(x^2 - 1)$ with domain $x > 1$",
            "feedback": "This is incorrect. While $fg(x)$ is defined for $x > 1$, this domain is too restrictive because the negative branch $x < -1$ also satisfies $x^2 > 1$ and yields valid real outputs."
        },
        {
            "ans": "<strong>D:</strong> $fg(x) = \\ln(x^2 - 1)$ with domain $x \\in \\mathbb{ R }$",
            "feedback": "This is incorrect. For any value in the interval $-1 \\le x \\le 1$, the term $x^2 - 1 \\le 0$, which is undefined for the natural logarithm function."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Composite Domains",
        "content": "To find the domain of a composite function $f(g(x))$, always solve the inequality $g(x) \\in \\text{Domain of } f$. Never just find the algebraic expression first and look at its natural domain, as this can lead to overlooking restrictions."
    }
},
{
    "id": "004514",
    "board": "AQA",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "Inverse Functions",
        "Domains and Ranges"
    ],
    "img": false,
    "question": "The function $h(x) = \\dfrac{2x + 1}{x - 3}$ has domain $x \\in \\mathbb{ R }, x \\neq 3$. What is the domain of the inverse function $h^{-1}(x)$? <br><br>Choose the correct option from the following: <br><strong>A:</strong> $x \\in \\mathbb{ R }, x \\neq 3$ <br><strong>B:</strong> $x \\in \\mathbb{ R }, x \\neq -\\dfrac{ 1 }{ 2 }$ <br><strong>C:</strong> $x \\in \\mathbb{ R }, x \\neq 2$ <br><strong>D:</strong> $x \\in \\mathbb{ R }$",
    "steps": [
        "Recall the fundamental relationship between a function and its inverse. The domain of the inverse function $h^{-1}(x)$ is exactly equal to the range of the original function $h(x)$.",
        "Find the range of $h(x) = \\dfrac{2x + 1}{x - 3}$. To do this, analyze the behavior of the horizontal asymptote of this rational function by taking the limit as $x \\to \\pm\\infty$.",
        "Divide the numerator and denominator by $x$: <br>\\begin{aligned} h(x) &= \\dfrac{ 2 + \\frac{ 1 }{ x } }{ 1 - \\frac{ 3 }{ x } } \\cr \\end{aligned} <br>As $x \\to \\pm\\infty$, the fractional terms $\\dfrac{ 1 }{ x } \\to 0$ and $\\dfrac{ 3 }{ x } \\to 0$, giving: <br>\\begin{aligned} h(x) &\\to \\dfrac{ 2 + 0 }{ 1 - 0 } = 2 \\cr \\end{aligned} <br>Thus, the horizontal asymptote is $y = 2$.",
        "Since the rational function never outputs its horizontal asymptote value, the range of $h(x)$ is $y \\in \\mathbb{ R }, y \\neq 2$. Therefore, the domain of $h^{-1}(x)$ is $x \\in \\mathbb{ R }, x \\neq 2$. <br>Therefore, the correct option is <strong>C</strong>."
    ],
    "pi_options": [
        {
            "ans": "<strong>A:</strong> $x \\in \\mathbb{ R }, x \\neq 3$",
            "feedback": "This is incorrect. This is the domain of the original function $h(x)$, which represents the range of the inverse function $h^{-1}(x)$, not its domain."
        },
        {
            "ans": "<strong>B:</strong> $x \\in \\mathbb{ R }, x \\neq -\\dfrac{ 1 }{ 2 }$",
            "feedback": "This is incorrect. The value $-\\dfrac{ 1 }{ 2 }$ is the x-intercept of the original function where $h(x) = 0$, which is a valid output and thus must be included in the domain of the inverse."
        },
        {
            "ans": "<strong>D:</strong> $x \\in \\mathbb{ R }$",
            "feedback": "This is incorrect. The range of the rational function excludes the horizontal asymptote value of $2$, meaning the inverse function cannot accept an input of $2$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Horizontal Asymptotes",
        "content": "For any linear fractional rational function of the form $y = \\dfrac{ ax + b }{ cx + d }$, the horizontal asymptote is always $y = \\dfrac{ a }{ c }$. This value is excluded from the range, meaning the domain of the inverse will always exclude $x = \\dfrac{ a }{ c }$."
    }
},
{
    "id": "004515",
    "board": "AQA",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "Composite Functions",
        "Domains and Ranges"
    ],
    "img": false,
    "question": "The functions $p(x) = \\mathrm{ e }^x$ for $x \\in \\mathbb{ R }$, and $q(x) = 2x - 5$ for $x \\ge 0$, are defined. Which of the following is the correct range of the composite function $pq(x)$? <br><br>Choose the correct option from the following: <br><strong>A:</strong> $pq(x) \\ge \\mathrm{ e }^{-5}$ <br><strong>B:</strong> $pq(x) > 0$ <br><strong>C:</strong> $pq(x) \\ge 0$ <br><strong>D:</strong> $pq(x) \\ge 1$",
    "steps": [
        "Write the algebraic form of the composite function $pq(x) = p(q(x))$. Substitute $q(x)$ into $p(x)$: <br>\\begin{aligned} pq(x) &= p(2x - 5) \\cr &= \\mathrm{ e }^{ 2x - 5 } \\cr \\end{aligned}",
        "Find the range of the inner function $q(x)$ over its domain $x \\ge 0$. Since $q(x) = 2x - 5$ is a strictly increasing linear function, we find its minimum value at the boundary $x = 0$: <br>\\begin{aligned} x &\\ge 0 \\cr 2x &\\ge 0 \\cr 2x - 5 &\\ge -5 \\cr \\end{aligned} <br>So, the range of the inner function is $q(x) \\ge -5$.",
        "Apply the outer exponential function $p(x) = \\mathrm{ e }^x$ to this range. Since the exponential function is strictly increasing over its entire domain, we preserve the inequality direction: <br>\\begin{aligned} pq(x) &\\ge \\mathrm{ e }^{-5} \\cr \\end{aligned} <br>Thus, the range of $pq(x)$ is $pq(x) \\ge \\mathrm{ e }^{-5}$.",
        "Therefore, the correct option is <strong>A</strong>."
    ],
    "pi_options": [
        {
            "ans": "<strong>B:</strong> $pq(x) > 0$",
            "feedback": "This is incorrect. While this represents the range of the parent exponential function $\\mathrm{ e }^x$ over all real numbers, the restriction on the domain of $q(x)$ ($x \\ge 0$) makes this range too broad."
        },
        {
            "ans": "<strong>C:</strong> $pq(x) \\ge 0$",
            "feedback": "This is incorrect. An exponential function of the form $\\mathrm{ e }^k$ is strictly positive and can never equal zero."
        },
        {
            "ans": "<strong>D:</strong> $pq(x) \\ge 1$",
            "feedback": "This is incorrect. This would be the correct range if the domain of the inner function $q(x)$ were restricted to $x \\ge 2.5$ (giving $2x - 5 \\ge 0$, which yields $\\mathrm{ e }^0 = 1$)."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Increasing Range Composites",
        "content": "If both the inner function $q(x)$ and the outer function $p(x)$ are strictly increasing, finding the range of $pq(x)$ is straightforward: simply find the minimum value of $q(x)$ at its domain boundary and substitute it directly into $p(x)$."
    }
},
{
    "id": "004516",
    "board": "AQA",
    "level": "AS",
    "major_area": "Algebra and Functions",
    "topic": "Polynomials",
    "subtopic": [
        "Factor Theorem",
        "Algebraic Proof"
    ],
    "img": false,
    "question": "The quadratics $x^2 + px + q$ and $x^2 + rx + s$ have a common factor of $(x + 3)$. <br><br>Show that $3(r - p) = s - q$, fully justifying your answer. <br><br>Which of the following equations represents the correct relationship you have shown? <br><strong>A:</strong> $3(p - r) = s - q$ <br><strong>B:</strong> $3(r - p) = s - q$ <br><strong>C:</strong> $3(r - p) = q - s$ <br><strong>D:</strong> $r - p = 3(s - q)$",
    "steps": [
        "Apply the Factor Theorem to both quadratics. If $(x + 3)$ is a factor of a polynomial $P(x)$, then $P(-3) = 0$. <br>For the first quadratic $x^2 + px + q$: <br>\\begin{aligned} (-3)^2 + p(-3) + q &= 0 \\cr 9 - 3p + q &= 0 \\cr q - 3p &= -9 \\cr \\end{aligned}",
        "Similarly, for the second quadratic $x^2 + rx + s$: <br>\\begin{aligned} (-3)^2 + r(-3) + s &= 0 \\cr 9 - 3r + s &= 0 \\cr s - 3r &= -9 \\cr \\end{aligned}",
        "Equate the two expressions since both are equal to $-9$: <br>\\begin{aligned} q - 3p &= s - 3r \\cr \\end{aligned} <br>Now, rearrange the terms to group the coefficients of the linear terms on one side and the constant terms on the other: <br>\\begin{aligned} 3r - 3p &= s - q \\cr 3(r - p) &= s - q \\cr \\end{aligned} <br>Therefore, the correct option is <strong>B</strong>."
    ],
    "pi_options": [
        {
            "ans": "<strong>A:</strong> $3(p - r) = s - q$",
            "feedback": "This is incorrect. This sign error occurs if you incorrectly expand or transpose the negative terms when grouping $p$ and $r$ across the equation."
        },
        {
            "ans": "<strong>C:</strong> $3(r - p) = q - s$",
            "feedback": "This is incorrect. This error arises if you multiply one side of the equation by $-1$ but fail to do so for the other, resulting in a transposition error."
        },
        {
            "ans": "<strong>D:</strong> $r - p = 3(s - q)$",
            "feedback": "This is incorrect. This error occurs if you divide the coefficient term incorrectly, swapping the multiplication factor to the wrong side of the equation."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Sign Transposition",
        "content": "When equating constant terms in algebraic proofs, be extremely meticulous with your positive and negative signs. Grouping terms like $-3p$ and $-3r$ requires careful factoring: $-3p - (-3r) = 3(r - p)$."
    }
},
{
    "id": "004517",
    "board": "AQA",
    "level": "AS",
    "major_area": "Algebra and Functions",
    "topic": "Polynomials",
    "subtopic": [
        "Factor Theorem",
        "Algebraic Proof"
    ],
    "img": false,
    "question": "The cubic $x^3 + ax + b$ and the quadratic $x^2 + cx + d$ have a common factor of $(x - 2)$. <br><br>Show that $2(a - 2c) = 2d - b$, fully justifying your answer. <br><br>Which of the following equations represents the correct relationship you have shown? <br><strong>A:</strong> $a - 2c = 2d - b$ <br><strong>B:</strong> $2(a - 2c) = b - 2d$ <br><strong>C:</strong> $2(2c - a) = 2d - b$ <br><strong>D:</strong> $2(a - 2c) = 2d - b$",
    "steps": [
        "Apply the Factor Theorem. If $(x - 2)$ is a factor, then substituting $x = 2$ must yield zero for both polynomials. <br>For the cubic expression $x^3 + ax + b$: <br>\\begin{aligned} (2)^3 + a(2) + b &= 0 \\cr 8 + 2a + b &= 0 \\cr b &= -8 - 2a \\cr \\end{aligned}",
        "Similarly, for the quadratic expression $x^2 + cx + d$: <br>\\begin{aligned} (2)^2 + c(2) + d &= 0 \\cr 4 + 2c + d &= 0 \\cr d &= -4 - 2c \\cr \\end{aligned}",
        "To prove the relationship, we substitute our expressions for $b$ and $d$ into the right-hand side of the target identity, $2d - b$: <br>\\begin{aligned} 2d - b &= 2(-4 - 2c) - (-8 - 2a) \\cr &= -8 - 4c + 8 + 2a \\cr &= 2a - 4c \\cr &= 2(a - 2c) \\cr \\end{aligned} <br>Thus, we have successfully shown that $2(a - 2c) = 2d - b$. <br>Therefore, the correct option is <strong>D</strong>."
    ],
    "pi_options": [
        {
            "ans": "<strong>A:</strong> $a - 2c = 2d - b$",
            "feedback": "This is incorrect. This error occurs if you fail to distribute the multiplication factor of $2$ when factorising $2a - 4c$ into $2(a - 2c)$."
        },
        {
            "ans": "<strong>B:</strong> $2(a - 2c) = b - 2d$",
            "feedback": "This is incorrect. This represents the negative of the target relation, which arises from a sign transposition error when subtracting the $b$ term."
        },
        {
            "ans": "<strong>C:</strong> $2(2c - a) = 2d - b$",
            "feedback": "This is incorrect. This occurs if you make a sign error inside the parentheses, swapping the positive $a$ and negative $2c$ terms."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Substitution Proofs",
        "content": "For algebraic proofs linking different polynomials, isolating the constant terms (like $b$ and $d$) and substituting them into the target identity is often much easier and cleaner than attempting to eliminate variables by equating equations directly."
    }
},
{
    "id": "004518",
    "board": "AQA",
    "level": "AS",
    "major_area": "Algebra and Functions",
    "topic": "Polynomials",
    "subtopic": [
        "Factor Theorem",
        "Algebraic Proof"
    ],
    "img": false,
    "question": "The quadratics $2x^2 + ax + b$ and $2x^2 + cx + d$ have a common factor of $(2x - 1)$. <br><br>Show that $a - c = 2(d - b)$, fully justifying your answer. <br><br>Which of the following equations represents the correct relationship you have shown? <br><strong>A:</strong> $a - c = 2(d - b)$ <br><strong>B:</strong> $c - a = 2(d - b)$ <br><strong>C:</strong> $a - c = 2(b - d)$ <br><strong>D:</strong> $2(a - c) = d - b$",
    "steps": [
        "First, identify the root corresponding to the linear factor $(2x - 1)$: <br>\\begin{aligned} 2x - 1 &= 0 \\cr x &= \\dfrac{ 1 }{ 2 } \\cr \\end{aligned}",
        "Apply the Factor Theorem. Substituting $x = \\dfrac{ 1 }{ 2 }$ into both quadratic expressions must yield zero. <br>For the first quadratic $2x^2 + ax + b$: <br>\\begin{aligned} 2\\left( \\dfrac{ 1 }{ 2 } \\right)^2 + a\\left( \\dfrac{ 1 }{ 2 } \\right) + b &= 0 \\cr 2\\left( \\dfrac{ 1 }{ 4 } \\right) + \\dfrac{ a }{ 2 } + b &= 0 \\cr \\dfrac{ 1 }{ 2 } + \\dfrac{ a }{ 2 } + b &= 0 \\cr \\end{aligned} <br>Multiply the entire equation by $2$ to clear the fractional denominators: <br>\\begin{aligned} 1 + a + 2b &= 0 \\cr a + 2b &= -1 \\cr \\end{aligned}",
        "Similarly, for the second quadratic $2x^2 + cx + d$: <br>\\begin{aligned} 2\\left( \\dfrac{ 1 }{ 2 } \\right)^2 + c\\left( \\dfrac{ 1 }{ 2 } \\right) + d &= 0 \\cr 1 + c + 2d &= 0 \\cr c + 2d &= -1 \\cr \\end{aligned}",
        "Equate the two expressions since both are equal to $-1$: <br>\\begin{aligned} a + 2b &= c + 2d \\cr \\end{aligned} <br>Rearrange the terms to isolate the variables and group the constant coefficients: <br>\\begin{aligned} a - c &= 2d - 2b \\cr a - c &= 2(d - b) \\cr \\end{aligned} <br>Therefore, the correct option is <strong>A</strong>."
    ],
    "pi_options": [
        {
            "ans": "<strong>B:</strong> $c - a = 2(d - b)$",
            "feedback": "This is incorrect. This sign error occurs if you transpose the variable terms incorrectly when grouping $a$ and $c$ across the equals sign."
        },
        {
            "ans": "<strong>C:</strong> $a - c = 2(b - d)$",
            "feedback": "This is incorrect. This error arises if you factor out the constant $2$ but reverse the signs of the terms inside the parentheses."
        },
        {
            "ans": "<strong>D:</strong> $2(a - c) = d - b$",
            "feedback": "This is incorrect. This error occurs if you multiply the wrong side of the equation by $2$ when attempting to factorise the constant coefficients."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Rational Roots",
        "content": "For a linear factor of the form $(mx - n)$, the root is always the fraction $x = \\dfrac{ n }{ m }$. Substituting fractional roots into polynomials requires clear fractional arithmetic—always clear denominators early to avoid complex algebra."
    }
},
{
    "id": "004519",
    "board": "AQA",
    "level": "AS",
    "major_area": "Algebra and Functions",
    "topic": "Polynomials",
    "subtopic": [
        "Remainder Theorem",
        "Algebraic Proof"
    ],
    "img": false,
    "question": "When $x^2 + ax + b$ is divided by $(x - 1)$, the remainder is $R_1$. When $x^2 + cx + d$ is divided by $(x - 1)$, the remainder is $R_2$. <br><br>Given that the two remainders are equal ($R_1 = R_2$), show that $a - c = d - b$, fully justifying your answer. <br><br>Which of the following equations represents the correct relationship you have shown? <br><strong>A:</strong> $a - c = b - d$ <br><strong>B:</strong> $a + c = b + d$ <br><strong>C:</strong> $a - c = d - b$ <br><strong>D:</strong> $a - d = c - b$",
    "steps": [
        "Apply the Remainder Theorem. Dividing a polynomial $P(x)$ by $(x - 1)$ yields a remainder equal to $P(1)$. <br>For the first quadratic expression $x^2 + ax + b$: <br>\\begin{aligned} R_1 &= (1)^2 + a(1) + b \\cr &= 1 + a + b \\cr \\end{aligned}",
        "Similarly, for the second quadratic expression $x^2 + cx + d$: <br>\\begin{aligned} R_2 &= (1)^2 + c(1) + d \\cr &= 1 + c + d \\cr \\end{aligned}",
        "Since we are given that the remainders are equal ($R_1 = R_2$), we can equate our two expressions: <br>\\begin{aligned} 1 + a + b &= 1 + c + d \\cr \\end{aligned} <br>Subtract $1$ from both sides of the equation: <br>\\begin{aligned} a + b &= c + d \\cr \\end{aligned} <br>Rearrange the terms to group the coefficients: <br>\\begin{aligned} a - c &= d - b \\cr \\end{aligned} <br>Therefore, the correct option is <strong>C</strong>."
    ],
    "pi_options": [
        {
            "ans": "<strong>A:</strong> $a - c = b - d$",
            "feedback": "This is incorrect. This sign error occurs if you subtract $d$ and $b$ incorrectly across the horizontal terms of the equation."
        },
        {
            "ans": "<strong>B:</strong> $a + c = b + d$",
            "feedback": "This is incorrect. This occurs if you fail to change the positive signs to negative when transposing the coefficients across the equals sign."
        },
        {
            "ans": "<strong>D:</strong> $a - d = c - b$",
            "feedback": "This is incorrect. This error arises if you group the coefficients of different quadratic expressions incorrectly, pairing $a$ with $d$ instead of $c$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Remainder Equating",
        "content": "The Remainder Theorem is a powerful generalisation of the Factor Theorem. When remainders are equal, equating the polynomial evaluations allows constant offset terms to cancel out, leaving a pure relationship between the coefficients."
    }
},
{
    "id": "004520",
    "board": "AQA",
    "level": "AS",
    "major_area": "Algebra and Functions",
    "topic": "Polynomials",
    "subtopic": [
        "Factor Theorem",
        "Algebraic Proof"
    ],
    "img": false,
    "question": "The quadratics $ax^2 + bx + c$ and $ax^2 + dx + e$ have a common factor of $(x - p)$, where $a \\neq 0$ and $p \\neq 0$. <br><br>Show that $p(b - d) = e - c$, fully justifying your answer. <br><br>Which of the following equations represents the correct relationship you have shown? <br><strong>A:</strong> $p(d - b) = e - c$ <br><strong>B:</strong> $p(b - d) = e - c$ <br><strong>C:</strong> $p(b - d) = c - e$ <br><strong>D:</strong> $b - d = p(e - c)$",
    "steps": [
        "Apply the Factor Theorem. If $(x - p)$ is a factor of both quadratics, then substituting $x = p$ must yield zero for both expressions. <br>For the first quadratic $ax^2 + bx + c$: <br>\\begin{aligned} ap^2 + bp + c &= 0 \\cr bp + c &= -ap^2 \\cr \\end{aligned}",
        "Similarly, for the second quadratic $ax^2 + dx + e$: <br>\\begin{aligned} ap^2 + dp + e &= 0 \\cr dp + e &= -ap^2 \\cr \\end{aligned}",
        "Equate the two expressions since both are equal to $-ap^2$: <br>\\begin{aligned} bp + c &= dp + e \\cr \\end{aligned} <br>Rearrange the terms to group the coefficients of $p$ on the left and the constant terms on the right: <br>\\begin{aligned} bp - dp &= e - c \\cr p(b - d) &= e - c \\cr \\end{aligned} <br>Therefore, the correct option is <strong>B</strong>."
    ],
    "pi_options": [
        {
            "ans": "<strong>A:</strong> $p(d - b) = e - c$",
            "feedback": "This is incorrect. This sign error occurs if you factorise $bp - dp$ incorrectly, swapping the positive $b$ and negative $d$ terms."
        },
        {
            "ans": "<strong>C:</strong> $p(b - d) = c - e$",
            "feedback": "This is incorrect. This represents the negative of the target identity, which arises from a transposition error when grouping the constants $c$ and $e$."
        },
        {
            "ans": "<strong>D:</strong> $b - d = p(e - c)$",
            "feedback": "This is incorrect. This error occurs if you multiply by the parameter $p$ instead of dividing when transposing terms across the equation."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Non-Monic Cancellation",
        "content": "Even in complex non-monic quadratics, the leading coefficient term (like $ap^2$) completely cancels out when the equations are equated. This isolates a neat, linear relationship between the remaining coefficients."
    }
}
];