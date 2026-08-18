window.ALEVEL_QUESTIONS = [
        {
                "id": "004501",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Functions",
                "subtopic": [
                        "Functions and Mappings",
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
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Functions",
                "subtopic": [
                        "Curved Graphs",
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
                "branch": "Pure",
                "level": "A",
                "major_area": "Exponentials and Logarithms",
                "topic": "Functions",
                "subtopic": [
                        "Exponential and Logarithmic Functions and Graphs",
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
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Graph Transformations",
                        "Trigonometry"
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
                                "feedback": "This graph represents $y = 1 - \\sin(x)$. The period of this wave is $2\\pi$ instead of $\\pi$, meaning it only completes half of its cycle within the domain $[0, \\pi]$, reaching its minimum at $x = \\dfrac{ \\pi }{ 2 }$."
                        },
                        {
                                "ans": "Graph <strong>D</strong>",
                                "feedback": "This graph represents $y = 1 - \\cos(2x)$. This curve is a cosine wave translation that starts at $(0, 0)$ instead of $(0, 1)$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Phase and Period Check",
                        "content": "For trigonometric transformations, do not just look at the shape\u2014always check the start point at $x = 0$ and the end of the first cycle. For $y = 1 - \\sin(2x)$, the period is $\\pi$, and it starts at $(0, 1)$."
                }
        },
        {
                "id": "004505",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Functions",
                "subtopic": [
                        "Functions and Mappings",
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
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods"
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
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods"
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
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods"
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
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods"
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
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods"
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
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Functions",
                "subtopic": [
                        "Functions and Mappings"
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
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Functions",
                "subtopic": [
                        "Functions and Mappings"
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
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Functions",
                "subtopic": [
                        "Functions and Mappings"
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
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Functions",
                "subtopic": [
                        "Functions and Mappings"
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
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Functions",
                "subtopic": [
                        "Functions and Mappings"
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
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods"
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
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods"
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
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods"
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
                        "content": "For a linear factor of the form $(mx - n)$, the root is always the fraction $x = \\dfrac{ n }{ m }$. Substituting fractional roots into polynomials requires clear fractional arithmetic\u2014always clear denominators early to avoid complex algebra."
                }
        },
        {
                "id": "004519",
                "board": "AQA",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods"
                ],
                "img": false,
                "question": "The quadratics $x^2 + ax + b$ and $x^2 + cx + d$ have a common factor of $(x - 1)$. <br><br>Show that $a - c = d - b$, fully justifying your answer. <br><br>Which of the following equations represents the correct relationship you have shown? <br><strong>A:</strong> $a - c = b - d$ <br><strong>B:</strong> $a + c = b + d$ <br><strong>C:</strong> $a - c = d - b$ <br><strong>D:</strong> $a - d = c - b$",
                "steps": [
                        "Apply the Factor Theorem. If $(x - 1)$ is a factor of a polynomial $P(x)$, then $P(1) = 0$. <br>For the first quadratic $x^2 + ax + b$: <br>\\begin{aligned} (1)^2 + a(1) + b &= 0 \\cr 1 + a + b &= 0 \\cr a + b &= -1 \\cr \\end{aligned}",
                        "Similarly, for the second quadratic $x^2 + cx + d$: <br>\\begin{aligned} (1)^2 + c(1) + d &= 0 \\cr 1 + c + d &= 0 \\cr c + d &= -1 \\cr \\end{aligned}",
                        "Equate the two expressions since both are equal to $-1$: <br>\\begin{aligned} a + b &= c + d \\cr \\end{aligned} <br>Now, rearrange the terms to group the coefficients $a$ and $c$ on one side and $b$ and $d$ on the other: <br>\\begin{aligned} a - c &= d - b \\cr \\end{aligned} <br>Therefore, the correct option is <strong>C</strong>."
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
                        "title": "The Head Teacher's Eye: Unity Factor Equating",
                        "content": "When quadratics have a common factor of $(x - 1)$, evaluating them at $x = 1$ leads to a direct linear relationship between their coefficients. Because the leading coefficients are identical, they cancel out, leaving a pure subtraction mapping: $a - c = d - b$."
                }
        },
        {
                "id": "004520",
                "board": "AQA",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods"
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
        },
        {
                "id": "004521",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differential Equations",
                "subtopic": [
                        "Integration"
                ],
                "img": false,
                "question": "Solve the differential equation: <br>$$\\dfrac{ \\mathrm{d}t }{ \\mathrm{d}x } = \\dfrac{ \\ln x }{ x^3 t } \\quad \\text{for } x > 0$$ <br>given that $x = 1$ when $t = 2$. <br><br>Write your answer in the form $t^2 = f(x)$.",
                "steps": [
                        "Separate the variables by multiplying both sides by $t$ and integrating with respect to $x$: <br>\\begin{aligned} t \\dfrac{ \\mathrm{d}t }{ \\mathrm{d}x } &= \\dfrac{ \\ln x }{ x^3 } \\cr \\int t \\mathrm{d}t &= \\int x^{-3} \\ln x \\mathrm{d}x \\cr \\end{aligned}",
                        "Integrate the left-hand side directly: <br>\\begin{aligned} \\int t \\mathrm{d}t &= \\dfrac{ t^2 }{ 2 } \\cr \\end{aligned}",
                        "Integrate the right-hand side, $\\int x^{-3} \\ln x \\mathrm{d}x$, using integration by parts, where $\\int u \\dfrac{ \\mathrm{d}v }{ \\mathrm{d}x } \\mathrm{d}x = uv - \\int v \\dfrac{ \\mathrm{d}u }{ \\mathrm{d}x } \\mathrm{d}x$: <br>Let $u = \\ln x \\implies \\dfrac{ \\mathrm{d}u }{ \\mathrm{d}x } = \\dfrac{ 1 }{ x }$ <br>Let $\\dfrac{ \\mathrm{d}v }{ \\mathrm{d}x } = x^{-3} \\implies v = -\\dfrac{ 1 }{ 2x^2 }$ <br>Substituting these into the integration by parts formula gives: <br>\\begin{aligned} \\int x^{-3} \\ln x \\mathrm{d}x &= (\\ln x)\\left( -\\dfrac{ 1 }{ 2x^2 } \\right) - \\int \\left( -\\dfrac{ 1 }{ 2x^2 } \\right)\\left( \\dfrac{ 1 }{ x } \\right) \\mathrm{d}x \\cr &= -\\dfrac{ \\ln x }{ 2x^2 } + \\dfrac{ 1 }{ 2 } \\int x^{-3} \\mathrm{d}x \\cr &= -\\dfrac{ \\ln x }{ 2x^2 } - \\dfrac{ 1 }{ 4x^2 } + C \\cr \\end{aligned}",
                        "Equate the integrated left-hand side and right-hand side expressions: <br>\\begin{aligned} \\dfrac{ t^2 }{ 2 } &= -\\dfrac{ \\ln x }{ 2x^2 } - \\dfrac{ 1 }{ 4x^2 } + C \\cr \\end{aligned} <br>Substitute the initial conditions $x = 1$ and $t = 2$ to find the constant of integration $C$: <br>\\begin{aligned} \\dfrac{ (2)^2 }{ 2 } &= -\\dfrac{ \\ln(1) }{ 2(1)^2 } - \\dfrac{ 1 }{ 4(1)^2 } + C \\cr 2 &= 0 - \\dfrac{ 1 }{ 4 } + C \\cr C &= \\dfrac{ 9 }{ 4 } \\cr \\end{aligned}",
                        "Substitute $C = \\dfrac{ 9 }{ 4 }$ back into the general equation: <br>\\begin{aligned} \\dfrac{ t^2 }{ 2 } &= -\\dfrac{ \\ln x }{ 2x^2 } - \\dfrac{ 1 }{ 4x^2 } + \\dfrac{ 9 }{ 4 } \\cr \\end{aligned} <br>Multiply the entire equation by $2$ to write the final solution in the required form: <br>\\begin{aligned} t^2 &= -\\dfrac{ \\ln x }{ x^2 } - \\dfrac{ 1 }{ 2x^2 } + \\dfrac{ 9 }{ 2 } \\cr \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$t^2 = -\\dfrac{ \\ln x }{ x^2 } - \\dfrac{ 1 }{ 2x^2 } + 4$$",
                                "feedback": "This is incorrect. This error occurs if you solve for the constant of integration as $C = 2$ because you forgot to divide $(2)^2$ by $2$ on the left-hand side when substituting the initial condition $t = 2$."
                        },
                        {
                                "ans": "$$t^2 = -\\dfrac{ 2\\ln x }{ x^2 } - \\dfrac{ 1 }{ 2x^2 } + 5$$",
                                "feedback": "This is incorrect. This error arises from a sign or coefficient transposition slip during the integration by parts step, failing to correctly distribute the $\\dfrac{ 1 }{ 2 }$ factor to the second integral term."
                        },
                        {
                                "ans": "$$t^2 = -\\dfrac{ \\ln x }{ x^2 } - \\dfrac{ 1 }{ x^2 } + \\dfrac{ 9 }{ 2 }$$",
                                "feedback": "This is incorrect. This error occurs if you integrated $\\int x^{-3} \\mathrm{d}x$ as $-x^{-2}$ instead of $-\\dfrac{ 1 }{ 2 }x^{-2}$, losing the factor of $\\dfrac{ 1 }{ 2 }$ on the second term."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Variable Separation",
                        "content": "Always separate variables carefully before attempting to integrate. Attempting to integrate without separating variables is a critical error that receives zero marks."
                }
        },
        {
                "id": "004522",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differential Equations",
                "subtopic": [
                        "Integration"
                ],
                "img": false,
                "question": "Solve the differential equation: <br>$$\\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } = \\dfrac{ x \\mathrm{e}^{2x} }{ y } \\quad \\text{for } x \\in \\mathbb{ R }$$ <br>given that $y = 3$ when $x = 0$. <br><br>Write your answer in the form $y^2 = f(x)$.",
                "steps": [
                        "Separate the variables and set up the integrals on both sides: <br>\\begin{aligned} y \\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } &= x \\mathrm{e}^{2x} \\cr \\int y \\mathrm{d}y &= \\int x \\mathrm{e}^{2x} \\mathrm{d}x \\cr \\end{aligned}",
                        "Integrate the left-hand side: <br>\\begin{aligned} \\int y \\mathrm{d}y &= \\dfrac{ y^2 }{ 2 } \\cr \\end{aligned}",
                        "Integrate the right-hand side using integration by parts, where $\\int u \\dfrac{ \\mathrm{d}v }{ \\mathrm{d}x } \\mathrm{d}x = uv - \\int v \\dfrac{ \\mathrm{d}u }{ \\mathrm{d}x } \\mathrm{d}x$: <br>Let $u = x \\implies \\dfrac{ \\mathrm{d}u }{ \\mathrm{d}x } = 1$ <br>Let $\\dfrac{ \\mathrm{d}v }{ \\mathrm{d}x } = \\mathrm{e}^{2x} \\implies v = \\dfrac{ 1 }{ 2 } \\mathrm{e}^{2x}$ <br>This gives: <br>\\begin{aligned} \\int x \\mathrm{e}^{2x} \\mathrm{d}x &= x\\left( \\dfrac{ 1 }{ 2 } \\mathrm{e}^{2x} \\right) - \\int \\dfrac{ 1 }{ 2 } \\mathrm{e}^{2x} \\mathrm{d}x \\cr &= \\dfrac{ 1 }{ 2 } x \\mathrm{e}^{2x} - \\dfrac{ 1 }{ 4 } \\mathrm{e}^{2x} + C \\cr \\end{aligned}",
                        "Equate the integrated sides: <br>\\begin{aligned} \\dfrac{ y^2 }{ 2 } &= \\dfrac{ 1 }{ 2 } x \\mathrm{e}^{2x} - \\dfrac{ 1 }{ 4 } \\mathrm{e}^{2x} + C \\cr \\end{aligned} <br>Apply the boundary conditions $y = 3$ and $x = 0$ to find the constant of integration $C$: <br>\\begin{aligned} \\dfrac{ (3)^2 }{ 2 } &= \\dfrac{ 1 }{ 2 }(0)\\mathrm{e}^{0} - \\dfrac{ 1 }{ 4 }\\mathrm{e}^{0} + C \\cr \\dfrac{ 9 }{ 2 } &= -\\dfrac{ 1 }{ 4 } + C \\cr C &= \\dfrac{ 19 }{ 4 } \\cr \\end{aligned}",
                        "Substitute $C = \\dfrac{ 19 }{ 4 }$ back and multiply by $2$ to write the final equation in the form $y^2 = f(x)$: <br>\\begin{aligned} \\dfrac{ y^2 }{ 2 } &= \\dfrac{ 1 }{ 2 } x \\mathrm{e}^{2x} - \\dfrac{ 1 }{ 4 } \\mathrm{e}^{2x} + \\dfrac{ 19 }{ 4 } \\cr y^2 &= x \\mathrm{e}^{2x} - \\dfrac{ 1 }{ 2 } \\mathrm{e}^{2x} + \\dfrac{ 19 }{ 2 } \\cr \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$y^2 = x\\mathrm{ e }^{ 2x } - \\dfrac{ 1 }{ 2 }\\mathrm{ e }^{ 2x } + 9$$",
                                "feedback": "This is incorrect. This error occurs if you solved for the constant of integration correctly as $C = \\dfrac{ 19 }{ 4 }$ but forgot to multiply this term by $2$ when converting the general solution $\\dfrac{ y^2 }{ 2 }$ to $y^2$ (instead mistakenly adding $2C$ as $9$)."
                        },
                        {
                                "ans": "$$y^2 = 2x\\mathrm{ e }^{ 2x } - \\dfrac{ 1 }{ 2 }\\mathrm{ e }^{ 2x } + \\dfrac{ 19 }{ 2 }$$",
                                "feedback": "This is incorrect. This error arises if you integrated $\\int x \\mathrm{e}^{2x} \\mathrm{d}x$ by parts incorrectly, multiplying the coefficient by $2$ instead of dividing by $2$ in the first step."
                        },
                        {
                                "ans": "$$y^2 = x\\mathrm{ e }^{ 2x } - \\mathrm{ e }^{ 2x } + 10$$",
                                "feedback": "This is incorrect. This error occurs if you integrated the exponential term $\\mathrm{e}^{2x}$ as $\\mathrm{e}^{2x}$ instead of $\\dfrac{ 1 }{ 2 }\\mathrm{e}^{2x}$ in both integration stages."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Integration by Parts Casing",
                        "content": "When choosing $u$ and $v$ for integration by parts, follow the 'LATE' hierarchy (Logarithmic, Algebraic, Trigonometric, Exponential) to select $u$. For $\\int x \\mathrm{e}^{2x} \\mathrm{d}x$, Algebraic $x$ must be $u$ so that it simplifies to $1$ when differentiated."
                }
        },
        {
                "id": "004523",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differential Equations",
                "subtopic": [
                        "Integration"
                ],
                "img": false,
                "question": "Solve the differential equation: <br>$$\\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } = \\dfrac{ x \\sin x }{ y } \\quad \\text{for } x \\in \\mathbb{ R }$$ <br>given that $y = 2$ when $x = 0$. <br><br>Write your answer in the form $y^2 = f(x)$.",
                "steps": [
                        "Separate the variables and set up the integration: <br>\\begin{aligned} y \\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } &= x \\sin x \\cr \\int y \\mathrm{d}y &= \\int x \\sin x \\mathrm{d}x \\cr \\end{aligned}",
                        "Integrate the left-hand side directly: <br>\\begin{aligned} \\int y \\mathrm{d}y &= \\dfrac{ y^2 }{ 2 } \\cr \\end{aligned}",
                        "Integrate the right-hand side using integration by parts, where $\\int u \\dfrac{ \\mathrm{d}v }{ \\mathrm{d}x } \\mathrm{d}x = uv - \\int v \\dfrac{ \\mathrm{d}u }{ \\mathrm{d}x } \\mathrm{d}x$: <br>Let $u = x \\implies \\dfrac{ \\mathrm{d}u }{ \\mathrm{d}x } = 1$ <br>Let $\\dfrac{ \\mathrm{d}v }{ \\mathrm{d}x } = \\sin x \\implies v = -\\cos x$ <br>Substituting these into the integration by parts formula gives: <br>\\begin{aligned} \\int x \\sin x \\mathrm{d}x &= x(-\\cos x) - \\int (-\\cos x) \\mathrm{d}x \\cr &= -x\\cos x + \\sin x + C \\cr \\end{aligned}",
                        "Equate both sides to form the general equation: <br>\\begin{aligned} \\dfrac{ y^2 }{ 2 } &= -x\\cos x + \\sin x + C \\cr \\end{aligned} <br>Apply the initial boundary conditions $y = 2$ and $x = 0$ to find the constant of integration $C$: <br>\\begin{aligned} \\dfrac{ (2)^2 }{ 2 } &= -(0)\\cos(0) + \\sin(0) + C \\cr 2 &= 0 + 0 + C \\cr C &= 2 \\cr \\end{aligned}",
                        "Substitute $C = 2$ back and multiply by $2$ to write the final solution in the required form: <br>\\begin{aligned} \\dfrac{ y^2 }{ 2 } &= -x\\cos x + \\sin x + 2 \\cr y^2 &= -2x\\cos x + 2\\sin x + 4 \\cr \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$y^2 = -2x\\cos x + \\sin x + 4$$",
                                "feedback": "This is incorrect. This error occurs if you forgot to distribute the factor of $2$ to the $\\sin x$ term when multiplying the entire equation by $2$ to convert $\\dfrac{ y^2 }{ 2 }$ to $y^2$."
                        },
                        {
                                "ans": "$$y^2 = 2x\\cos x - 2\\sin x + 4$$",
                                "feedback": "This is incorrect. This error arises from a sign error when integrating $\\sin x$, forgetting that $\\int \\sin x \\mathrm{d}x = -\\cos x$ and that subtracting the second integral introduces another negative sign."
                        },
                        {
                                "ans": "$$y^2 = -x\\cos x + \\sin x + 2$$",
                                "feedback": "This is incorrect. This error occurs if you forgot to multiply any of the right-hand side terms by $2$ when converting the general solution $\\dfrac{ y^2 }{ 2 }$ to $y^2$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Trig Integration Signs",
                        "content": "Be extremely vigilant with signs when integrating trigonometric functions. Remember that $\\int \\sin x \\mathrm{d}x = -\\cos x$, whereas $\\int \\cos x \\mathrm{d}x = \\sin x$. A simple sign error here will carry through and corrupt your constant of integration $C$."
                }
        },
        {
                "id": "004524",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differential Equations",
                "subtopic": [
                        "Integration"
                ],
                "img": false,
                "question": "Solve the differential equation: <br>$$\\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } = \\dfrac{ x \\ln x }{ y } \\quad \\text{for } x > 0$$ <br>given that $y = 4$ when $x = 1$. <br><br>Write your answer in the form $y^2 = f(x)$.",
                "steps": [
                        "Separate the variables and set up the integrals on both sides: <br>\\begin{aligned} y \\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } &= x \\ln x \\cr \\int y \\mathrm{d}y &= \\int x \\ln x \\mathrm{d}x \\cr \\end{aligned}",
                        "Integrate the left-hand side directly: <br>\\begin{aligned} \\int y \\mathrm{d}y &= \\dfrac{ y^2 }{ 2 } \\cr \\end{aligned}",
                        "Integrate the right-hand side using integration by parts, where $\\int u \\dfrac{ \\mathrm{d}v }{ \\mathrm{d}x } \\mathrm{d}x = uv - \\int v \\dfrac{ \\mathrm{d}u }{ \\mathrm{d}x } \\mathrm{d}x$: <br>Let $u = \\ln x \\implies \\dfrac{ \\mathrm{d}u }{ \\mathrm{d}x } = \\dfrac{ 1 }{ x }$ <br>Let $\\dfrac{ \\mathrm{d}v }{ \\mathrm{d}x } = x \\implies v = \\dfrac{ x^2 }{ 2 }$ <br>Substituting these into the formula gives: <br>\\begin{aligned} \\int x \\ln x \\mathrm{d}x &= (\\ln x)\\left( \\dfrac{ x^2 }{ 2 } \\right) - \\int \\left( \\dfrac{ x^2 }{ 2 } \\right)\\left( \\dfrac{ 1 }{ x } \\right) \\mathrm{d}x \\cr &= \\dfrac{ x^2 }{ 2 } \\ln x - \\dfrac{ 1 }{ 2 } \\int x \\mathrm{d}x \\cr &= \\dfrac{ x^2 }{ 2 } \\ln x - \\dfrac{ x^2 }{ 4 } + C \\cr \\end{aligned}",
                        "Equate the integrated sides to form the general equation: <br>\\begin{aligned} \\dfrac{ y^2 }{ 2 } &= \\dfrac{ x^2 }{ 2 } \\ln x - \\dfrac{ x^2 }{ 4 } + C \\cr \\end{aligned} <br>Apply the boundary conditions $y = 4$ and $x = 1$ to calculate the constant of integration $C$: <br>\\begin{aligned} \\dfrac{ (4)^2 }{ 2 } &= \\dfrac{ (1)^2 }{ 2 }\\ln(1) - \\dfrac{ (1)^2 }{ 4 } + C \\cr 8 &= 0 - \\dfrac{ 1 }{ 4 } + C \\cr C &= \\dfrac{ 33 }{ 4 } \\cr \\end{aligned}",
                        "Substitute $C = \\dfrac{ 33 }{ 4 }$ back and multiply by $2$ to write the final equation in the required form: <br>\\begin{aligned} \\dfrac{ y^2 }{ 2 } &= \\dfrac{ x^2 }{ 2 } \\ln x - \\dfrac{ x^2 }{ 4 } + \\dfrac{ 33 }{ 4 } \\cr y^2 &= x^2 \\ln x - \\dfrac{ x^2 }{ 2 } + \\dfrac{ 33 }{ 2 } \\cr \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$y^2 = x^2\\ln x - \\dfrac{ 1 }{ 2 }x^2 + 16$$",
                                "feedback": "This is incorrect. This error occurs if you solved for the constant of integration correctly as $C = \\dfrac{ 33 }{ 4 }$ but forgot to multiply this term by $2$ when converting $\\dfrac{ y^2 }{ 2 }$ to $y^2$ (instead mistakenly adding $2C$ as $16$)."
                        },
                        {
                                "ans": "$$y^2 = 2x^2\\ln x - \\dfrac{ 1 }{ 2 }x^2 + \\dfrac{ 33 }{ 2 }$$",
                                "feedback": "This is incorrect. This error arises if you integrated $x \\ln x$ by parts incorrectly, multiplying the coefficient by $2$ instead of dividing by $2$ in the first step."
                        },
                        {
                                "ans": "$$y^2 = x^2\\ln x - x^2 + 17$$",
                                "feedback": "This is incorrect. This error occurs if you integrated the algebraic term $x$ as $x^2$ instead of $\\dfrac{ 1 }{ 2 }x^2$ during the integration by parts process."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Logarithm Domain Limits",
                        "content": "When integrating functions involving $\\ln x$, the domain constraint $x > 0$ is mathematically critical. This guarantees that both the logarithm and its derivative $\\dfrac{ 1 }{ x }$ are defined and real over the entire interval of integration."
                }
        },
        {
                "id": "004525",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differential Equations",
                "subtopic": [
                        "Integration"
                ],
                "img": false,
                "question": "Solve the differential equation: <br>$$\\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } = \\dfrac{ x \\mathrm{e}^{-x} }{ y } \\quad \\text{for } x \\in \\mathbb{ R }$$ <br>given that $y = 2$ when $x = 0$. <br><br>Write your answer in the form $y^2 = f(x)$.",
                "steps": [
                        "Separate the variables and set up the integration: <br>\\begin{aligned} y \\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } &= x \\mathrm{e}^{-x} \\cr \\int y \\mathrm{d}y &= \\int x \\mathrm{e}^{-x} \\mathrm{d}x \\cr \\end{aligned}",
                        "Integrate the left-hand side directly: <br>\\begin{aligned} \\int y \\mathrm{d}y &= \\dfrac{ y^2 }{ 2 } \\cr \\end{aligned}",
                        "Integrate the right-hand side using integration by parts, where $\\int u \\dfrac{ \\mathrm{d}v }{ \\mathrm{d}x } \\mathrm{d}x = uv - \\int v \\dfrac{ \\mathrm{d}u }{ \\mathrm{d}x } \\mathrm{d}x$: <br>Let $u = x \\implies \\dfrac{ \\mathrm{d}u }{ \\mathrm{d}x } = 1$ <br>Let $\\dfrac{ \\mathrm{d}v }{ \\mathrm{d}x } = \\mathrm{e}^{-x} \\implies v = -\\mathrm{e}^{-x}$ <br>Substituting these into the formula yields: <br>\\begin{aligned} \\int x \\mathrm{e}^{-x} \\mathrm{d}x &= x(-\\mathrm{e}^{-x}) - \\int (-\\mathrm{e}^{-x}) \\mathrm{d}x \\cr &= -x\\mathrm{e}^{-x} + \\int \\mathrm{e}^{-x} \\mathrm{d}x \\cr &= -x\\mathrm{e}^{-x} - \\mathrm{e}^{-x} + C \\cr \\end{aligned}",
                        "Equate the integrated expressions: <br>\\begin{aligned} \\dfrac{ y^2 }{ 2 } &= -x\\mathrm{e}^{-x} - \\mathrm{e}^{-x} + C \\cr \\end{aligned} <br>Substitute the boundary conditions $y = 2$ and $x = 0$ to find the constant of integration $C$: <br>\\begin{aligned} \\dfrac{ (2)^2 }{ 2 } &= -(0)\\mathrm{e}^{0} - \\mathrm{e}^{0} + C \\cr 2 &= 0 - 1 + C \\cr C &= 3 \\cr \\end{aligned}",
                        "Substitute $C = 3$ back into the general equation: <br>\\begin{aligned} \\dfrac{ y^2 }{ 2 } &= -x\\mathrm{e}^{-x} - \\mathrm{e}^{-x} + 3 \\cr \\end{aligned} <br>Multiply the entire equation by $2$ to write the final equation in the required form (which can optionally be factorised): <br>\\begin{aligned} y^2 &= -2x\\mathrm{e}^{-x} - 2\\mathrm{e}^{-x} + 6 \\cr y^2 &= -2(x + 1)\\mathrm{e}^{-x} + 6 \\cr \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$y^2 = -2(x + 1)\\mathrm{ e }^{-x} + 4$$",
                                "feedback": "This is incorrect. This error occurs if you solved for the constant of integration correctly as $C = 3$ but forgot to multiply this term by $2$ when converting the general solution $\\dfrac{ y^2 }{ 2 }$ to $y^2$ (instead mistakenly adding $2C$ as $4$)."
                        },
                        {
                                "ans": "$$y^2 = -x\\mathrm{ e }^{-x} - \\mathrm{ e }^{-x} + 3$$",
                                "feedback": "This is incorrect. This error occurs if you forgot to multiply any of the right-hand side terms by $2$ when converting the general solution $\\dfrac{ y^2 }{ 2 }$ to $y^2$."
                        },
                        {
                                "ans": "$$y^2 = 2(x - 1)\\mathrm{ e }^{-x} + 6$$",
                                "feedback": "This is incorrect. This represents a double sign error in the integration by parts step, resulting in positive exponential products and an incorrect subtraction sign inside the parentheses."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Factoring Exponential Terms",
                        "content": "For solutions involving terms like $-2x\\mathrm{e}^{-x} - 2\\mathrm{e}^{-x}$, it is often considered elegant and clean to factorise the exponential term: $-2(x + 1)\\mathrm{e}^{-x}$. Both forms are mathematically equivalent and fully accepted in examinations."
                }
        },
        {
                "id": "004526",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Trigonometry",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": "images/Pure/004526.png",
                "question": "A curve has the equation: <br>$$y = a \\sin x + b \\cos x$$ <br>where $a$ and $b$ are constants. <br><br>The maximum value of $y$ is $6$ and the curve passes through the point $\\left( \\dfrac{ \\pi }{ 3 }, 3\\sqrt{ 3 } \\right)$ as shown in the diagram. <br><br>Find the exact values of $a$ and $b$.",
                "steps": [
                        "Apply the amplitude condition. For a trigonometric curve of the form $y = a \\sin x + b \\cos x$, the maximum value is given by $R = \\sqrt{ a^2 + b^2 }$. Given that the maximum value is $6$: <br>\\begin{aligned} \\sqrt{ a^2 + b^2 } &= 6 \\cr a^2 + b^2 &= 36 \\cr \\end{aligned}",
                        "Apply the point condition. The curve passes through $\\left( \\dfrac{ \\pi }{ 3 }, 3\\sqrt{ 3 } \\right)$, so substituting these coordinates gives: <br>\\begin{aligned} 3\\sqrt{ 3 } &= a \\sin\\left( \\dfrac{ \\pi }{ 3 } \\right) + b \\cos\\left( \\dfrac{ \\pi }{ 3 } \\right) \\cr \\end{aligned}",
                        "Substitute the exact values $\\sin\\left( \\dfrac{ \\pi }{ 3 } \\right) = \\dfrac{ \\sqrt{ 3 } }{ 2 }$ and $\\cos\\left( \\dfrac{ \\pi }{ 3 } \\right) = \\dfrac{ 1 }{ 2 }$: <br>\\begin{aligned} 3\\sqrt{ 3 } &= a\\left( \\dfrac{ \\sqrt{ 3 } }{ 2 } \\right) + b\\left( \\dfrac{ 1 }{ 2 } \\right) \\cr \\end{aligned} <br>Multiply the entire equation by $2$ to clear the denominators: <br>\\begin{aligned} 6\\sqrt{ 3 } &= a\\sqrt{ 3 } + b \\cr b &= \\sqrt{ 3 }(6 - a) \\cr \\end{aligned}",
                        "Substitute $b = \\sqrt{ 3 }(6 - a)$ into the amplitude equation $a^2 + b^2 = 36$: <br>\\begin{aligned} a^2 + \\left( \\sqrt{ 3 }(6 - a) \\right)^2 &= 36 \\cr a^2 + 3(36 - 12a + a^2) &= 36 \\cr a^2 + 108 - 36a + 3a^2 &= 36 \\cr 4a^2 - 36a + 72 &= 0 \\cr \\end{aligned} <br>Divide the entire quadratic equation by $4$: <br>\\begin{aligned} a^2 - 9a + 18 &= 0 \\cr (a - 3)(a - 6) &= 0 \\cr \\end{aligned} <br>This yields two algebraic solutions: $a = 3$ or $a = 6$.",
                        "Evaluate the solutions to match the diagram. <br>1. If $a = 6$, substituting this gives $b = \\sqrt{ 3 }(6 - 6) = 0$. This would mean $y = 6 \\sin x$, which passes through the origin $(0, 0)$. However, the diagram shows a curve starting at a positive y-intercept, so we reject $b = 0$. <br>2. If $a = 3$, substituting this gives: <br>\\begin{aligned} b &= \\sqrt{ 3 }(6 - 3) \\cr b &= 3\\sqrt{ 3 } \\cr \\end{aligned} <br>This yields a positive y-intercept $b = 3\\sqrt{ 3 } > 0$, matching the diagram perfectly. <br>Thus, the exact values are $a = 3$ and $b = 3\\sqrt{ 3 }$."
                ],
                "pi_options": [
                        {
                                "ans": "$$a = 6, \\quad b = 0$$",
                                "feedback": "This is incorrect. This is the other algebraic branch from solving the quadratic equation. However, if $b = 0$, the curve passes through the origin $(0,0)$, which contradicts the positive y-intercept shown in the diagram."
                        },
                        {
                                "ans": "$$a = 3\\sqrt{ 3 }, \\quad b = 3$$",
                                "feedback": "This is incorrect. This error occurs if you accidentally swapped the values of $a$ and $b$, which typically arises from swapping the values of the sine and cosine fractions when evaluating at $x = \\dfrac{ \\pi }{ 3 }$."
                        },
                        {
                                "ans": "$$a = 3, \\quad b = 9$$",
                                "feedback": "This is incorrect. This error occurs if you made an arithmetic slip when expanding $b = \\sqrt{ 3 }(6 - a)$, or if you wrote the amplitude equation as $a^2 + b^2 = 6$ (forgetting to square the maximum value of $6$)."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Boundary Case Rejections",
                        "content": "In trigonometric problems where two algebraic solutions arise, always refer back to the geometric diagram. The y-intercept of $y = a\\sin x + b\\cos x$ occurs at $(0, b)$. If the diagram shows a positive y-intercept, then we must have $b > 0$, which allows us to reject the boundary case $b = 0$."
                }
        },
        {
                "id": "004527",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Trigonometry",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": "images/Pure/004527.png",
                "question": "A curve has the equation: <br>$$y = a \\sin x - b \\cos x$$ <br>where $a$ and $b$ are positive constants. <br><br>The maximum value of $y$ is $5$ and the curve passes through the point $\\left( \\dfrac{ \\pi }{ 2 }, 4 \\right)$ as shown in the diagram. <br><br>Find the exact values of $a$ and $b$.",
                "steps": [
                        "Apply the amplitude condition. For a trigonometric curve of the form $y = a \\sin x - b \\cos x$, the maximum value is given by $R = \\sqrt{ a^2 + b^2 }$. Given that the maximum value is $5$: <br>\\begin{aligned} \\sqrt{ a^2 + b^2 } &= 5 \\cr a^2 + b^2 &= 25 \\cr \\end{aligned}",
                        "Apply the point condition. The curve passes through $\\left( \\dfrac{ \\pi }{ 2 }, 4 \\right)$, so substituting these coordinates gives: <br>\\begin{aligned} 4 &= a \\sin\\left( \\dfrac{ \\pi }{ 2 } \\right) - b \\cos\\left( \\dfrac{ \\pi }{ 2 } \\right) \\cr \\end{aligned}",
                        "Substitute the exact values $\\sin\\left( \\dfrac{ \\pi }{ 2 } \\right) = 1$ and $\\cos\\left( \\dfrac{ \\pi }{ 2 } \\right) = 0$: <br>\\begin{aligned} 4 &= a(1) - b(0) \\cr a &= 4 \\cr \\end{aligned}",
                        "Substitute $a = 4$ into the amplitude equation $a^2 + b^2 = 25$ to solve for $b$: <br>\\begin{aligned} (4)^2 + b^2 &= 25 \\cr 16 + b^2 &= 25 \\cr b^2 &= 9 \\cr \\end{aligned} <br>Since the problem states that $b$ is a positive constant, we take the positive square root: <br>\\begin{aligned} b &= 3 \\cr \\end{aligned} <br>Thus, the exact values are $a = 4$ and $b = 3$."
                ],
                "pi_options": [
                        {
                                "ans": "$$a = 3, \\quad b = 4$$",
                                "feedback": "This is incorrect. This error occurs if you swapped the values of $a$ and $b$, which typically arises from evaluating the trigonometric conditions at $x = \\dfrac{ \\pi }{ 2 }$ incorrectly by writing $\\sin\\left( \\dfrac{ \\pi }{ 2 } \\right) = 0$ and $\\cos\\left( \\dfrac{ \\pi }{ 2 } \\right) = 1$."
                        },
                        {
                                "ans": "$$a = 4, \\quad b = -3$$",
                                "feedback": "This is incorrect. While $-3$ is algebraically a solution to $b^2 = 9$, the problem explicitly states that $b$ must be a positive constant."
                        },
                        {
                                "ans": "$$a = 4, \\quad b = 9$$",
                                "feedback": "This is incorrect. This error occurs if you forgot to take the square root of $b^2 = 9$ to find $b$, or if you incorrectly solved $16 + b^2 = 25$ as $16 + b = 25$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Quadrant Evaluations",
                        "content": "Selecting points on the coordinate axes (such as $x = \\dfrac{ \\pi }{ 2 }$) is highly strategic because one of the trigonometric terms will evaluate to zero, allowing you to instantly isolate and solve for one of the constants."
                }
        },
        {
                "id": "004528",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Trigonometry",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": "images/Pure/004528.png",
                "question": "A curve has the equation: <br>$$y = a \\sin(2x) + b \\cos(2x)$$ <br>where $a$ and $b$ are constants. <br><br>The maximum value of $y$ is $10$ and the curve passes through the point $\\left( \\dfrac{ \\pi }{ 12 }, 5\\sqrt{ 3 } \\right)$ as shown in the diagram. <br><br>Find the exact values of $a$ and $b$.",
                "steps": [
                        "Apply the amplitude condition. For a trigonometric curve of the form $y = a \\sin(2x) + b \\cos(2x)$, the maximum value is given by $R = \\sqrt{ a^2 + b^2 }$. Given that the maximum value is $10$: <br>\\begin{aligned} \\sqrt{ a^2 + b^2 } &= 10 \\cr a^2 + b^2 &= 100 \\cr \\end{aligned}",
                        "Apply the point condition. The curve passes through $\\left( \\dfrac{ \\pi }{ 12 }, 5\\sqrt{ 3 } \\right)$, so substituting these coordinates gives: <br>\\begin{aligned} 5\\sqrt{ 3 } &= a \\sin\\left( 2\\left( \\dfrac{ \\pi }{ 12 } \\right) \\right) + b \\cos\\left( 2\\left( \\dfrac{ \\pi }{ 12 } \\right) \\right) \\cr 5\\sqrt{ 3 } &= a \\sin\\left( \\dfrac{ \\pi }{ 6 } \\right) + b \\cos\\left( \\dfrac{ \\pi }{ 6 } \\right) \\cr \\end{aligned}",
                        "Substitute the exact values $\\sin\\left( \\dfrac{ \\pi }{ 6 } \\right) = \\dfrac{ 1 }{ 2 }$ and $\\cos\\left( \\dfrac{ \\pi }{ 6 } \\right) = \\dfrac{ \\sqrt{ 3 } }{ 2 }$: <br>\\begin{aligned} 5\\sqrt{ 3 } &= a\\left( \\dfrac{ 1 }{ 2 } \\right) + b\\left( \\dfrac{ \\sqrt{ 3 } }{ 2 } \\right) \\cr \\end{aligned} <br>Multiply the entire equation by $2$ to clear the denominators: <br>\\begin{aligned} 10\\sqrt{ 3 } &= a + b\\sqrt{ 3 } \\cr a &= \\sqrt{ 3 }(10 - b) \\cr \\end{aligned}",
                        "Substitute $a = \\sqrt{ 3 }(10 - b)$ into the amplitude equation $a^2 + b^2 = 100$: <br>\\begin{aligned} \\left( \\sqrt{ 3 }(10 - b) \\right)^2 + b^2 &= 100 \\cr 3(100 - 20b + b^2) + b^2 &= 100 \\cr 300 - 60b + 3b^2 + b^2 &= 100 \\cr 4b^2 - 60b + 200 &= 0 \\cr \\end{aligned} <br>Divide the entire quadratic equation by $4$: <br>\\begin{aligned} b^2 - 15b + 50 &= 0 \\cr (b - 5)(b - 10) &= 0 \\cr \\end{aligned} <br>This yields two algebraic solutions: $b = 5$ or $b = 10$.",
                        "Evaluate the solutions to match the diagram. <br>1. If $b = 10$, substituting this gives $a = \\sqrt{ 3 }(10 - 10) = 0$. This would mean $y = 10 \\cos(2x)$, but the diagram represents a curve containing both sine and cosine components (meaning $a \\neq 0$). So we reject $a = 0$. <br>2. If $b = 5$, substituting this gives: <br>\\begin{aligned} a &= \\sqrt{ 3 }(10 - 5) \\cr a &= 5\\sqrt{ 3 } \\cr \\end{aligned} <br>This matches our geometric conditions perfectly. <br>Thus, the exact values are $a = 5\\sqrt{ 3 }$ and $b = 5$."
                ],
                "pi_options": [
                        {
                                "ans": "$$a = 0, \\quad b = 10$$",
                                "feedback": "This is incorrect. This is the other algebraic branch from solving the quadratic equation. However, if $a = 0$, the curve contains no sine component, which contradicts the graph shown in the diagram."
                        },
                        {
                                "ans": "$$a = 5, \\quad b = 5\\sqrt{ 3 }$$",
                                "feedback": "This is incorrect. This error occurs if you swapped the values of $a$ and $b$, which typically arises from swapping the values of the sine and cosine fractions when evaluating at $x = \\dfrac{ \\pi }{ 12 }$."
                        },
                        {
                                "ans": "$$a = 5\\sqrt{ 3 }, \\quad b = 25$$",
                                "feedback": "This is incorrect. This error occurs if you made an arithmetic slip when expanding $a = \\sqrt{ 3 }(10 - b)$, or if you wrote the amplitude equation as $a^2 + b^2 = 10$ (forgetting to square the maximum value of $10$)."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Frequency Scaling",
                        "content": "Always remember that the frequency term (the $2$ in $2x$) scales the horizontal axis. When substituting coordinates like $x = \\dfrac{ \\pi }{ 12 }$ into $y = a\\sin(2x) + b\\cos(2x)$, you must evaluate the trigonometric functions at the scaled angle $2x = \\dfrac{ \\pi }{ 6 }$."
                }
        },
        {
                "id": "004529",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Trigonometry",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": "images/Pure/004529.png",
                "question": "A curve has the equation: <br>$$y = a \\sin x + b \\cos x$$ <br>where $a$ and $b$ are constants. <br><br>The maximum value of $y$ is $13$ and the curve passes through the point $\\left( \\dfrac{ \\pi }{ 2 }, 12 \\right)$ as shown in the diagram. <br><br>Find the exact values of $a$ and $b$.",
                "steps": [
                        "Apply the amplitude condition. For a trigonometric curve of the form $y = a \\sin x + b \\cos x$, the maximum value is given by $R = \\sqrt{ a^2 + b^2 }$. Given that the maximum value is $13$: <br>\\begin{aligned} \\sqrt{ a^2 + b^2 } &= 13 \\cr a^2 + b^2 &= 169 \\cr \\end{aligned}",
                        "Apply the point condition. The curve passes through $\\left( \\dfrac{ \\pi }{ 2 }, 12 \\right)$, so substituting these coordinates gives: <br>\\begin{aligned} 12 &= a \\sin\\left( \\dfrac{ \\pi }{ 2 } \\right) + b \\cos\\left( \\dfrac{ \\pi }{ 2 } \\right) \\cr \\end{aligned}",
                        "Substitute the exact values $\\sin\\left( \\dfrac{ \\pi }{ 2 } \\right) = 1$ and $\\cos\\left( \\dfrac{ \\pi }{ 2 } \\right) = 0$: <br>\\begin{aligned} 12 &= a(1) + b(0) \\cr a &= 12 \\cr \\end{aligned}",
                        "Substitute $a = 12$ into the amplitude equation $a^2 + b^2 = 169$ to solve for $b$: <br>\\begin{aligned} (12)^2 + b^2 &= 169 \\cr 144 + b^2 &= 169 \\cr b^2 &= 25 \\cr \\end{aligned} <br>Since the diagram shows a positive y-intercept $b$ (at $x=0$, $y=b$), we take the positive root: <br>\\begin{aligned} b &= 5 \\cr \\end{aligned} <br>Thus, the exact values are $a = 12$ and $b = 5$."
                ],
                "pi_options": [
                        {
                                "ans": "$$a = 5, \\quad b = 12$$",
                                "feedback": "This is incorrect. This error occurs if you swapped the values of $a$ and $b$, which typically arises from evaluating the trigonometric conditions at $x = \\dfrac{ \\pi }{ 2 }$ incorrectly by writing $\\sin\\left( \\dfrac{ \\pi }{ 2 } \\right) = 0$ and $\\cos\\left( \\dfrac{ \\pi }{ 2 } \\right) = 1$."
                        },
                        {
                                "ans": "$$a = 12, \\quad b = -5$$",
                                "feedback": "This is incorrect. While $-5$ is algebraically a solution to $b^2 = 25$, this would represent a curve with a negative y-intercept, which contradicts the graph shown in the diagram."
                        },
                        {
                                "ans": "$$a = 12, \\quad b = 25$$",
                                "feedback": "This is incorrect. This error occurs if you forgot to take the square root of $b^2 = 25$ to find $b$, or if you incorrectly solved $144 + b^2 = 169$ as $144 + b = 169$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Pythagorean Triples",
                        "content": "Recognising standard Pythagorean triples (like $5\\text{-}12\\text{-}13$) can instantly verify your calculations in amplitude equations. Since $12^2 + 5^2 = 13^2$, finding $a = 12$ and a maximum of $13$ guarantees that $b = \\pm 5$."
                }
        },
        {
                "id": "004530",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Trigonometry",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": "images/Pure/004530.png",
                "question": "A curve has the equation: <br>$$y = a \\sin x + b \\cos x$$ <br>where $a$ and $b$ are constants. <br><br>The maximum value of $y$ is $2$ and the curve passes through the point $\\left( \\dfrac{ \\pi }{ 6 }, \\sqrt{ 3 } \\right)$ as shown in the diagram. <br><br>Find the exact values of $a$ and $b$.",
                "steps": [
                        "Apply the amplitude condition. For a trigonometric curve of the form $y = a \\sin x + b \\cos x$, the maximum value is given by $R = \\sqrt{ a^2 + b^2 }$. Given that the maximum value is $2$: <br>\\begin{aligned} \\sqrt{ a^2 + b^2 } &= 2 \\cr a^2 + b^2 &= 4 \\cr \\end{aligned}",
                        "Apply the point condition. The curve passes through $\\left( \\dfrac{ \\pi }{ 6 }, \\sqrt{ 3 } \\right)$, so substituting these coordinates gives: <br>\\begin{aligned} \\sqrt{ 3 } &= a \\sin\\left( \\dfrac{ \\pi }{ 6 } \\right) + b \\cos\\left( \\dfrac{ \\pi }{ 6 } \\right) \\cr \\end{aligned}",
                        "Substitute the exact values $\\sin\\left( \\dfrac{ \\pi }{ 6 } \\right) = \\dfrac{ 1 }{ 2 }$ and $\\cos\\left( \\dfrac{ \\pi }{ 6 } \\right) = \\dfrac{ \\sqrt{ 3 } }{ 2 }$: <br>\\begin{aligned} \\sqrt{ 3 } &= a\\left( \\dfrac{ 1 }{ 2 } \\right) + b\\left( \\dfrac{ \\sqrt{ 3 } }{ 2 } \\right) \\cr \\end{aligned} <br>Multiply the entire equation by $2$ to clear the denominators: <br>\\begin{aligned} 2\\sqrt{ 3 } &= a + b\\sqrt{ 3 } \\cr a &= \\sqrt{ 3 }(2 - b) \\cr \\end{aligned}",
                        "Substitute $a = \\sqrt{ 3 }(2 - b)$ into the amplitude equation $a^2 + b^2 = 4$: <br>\\begin{aligned} \\left( \\sqrt{ 3 }(2 - b) \\right)^2 + b^2 &= 4 \\cr 3(4 - 4b + b^2) + b^2 &= 4 \\cr 12 - 12b + 3b^2 + b^2 &= 4 \\cr 4b^2 - 12b + 8 &= 0 \\cr \\end{aligned} <br>Divide the entire quadratic equation by $4$: <br>\\begin{aligned} b^2 - 3b + 2 &= 0 \\cr (b - 1)(b - 2) &= 0 \\cr \\end{aligned} <br>This yields two algebraic solutions: $b = 1$ or $b = 2$.",
                        "Evaluate the solutions to match the diagram. <br>1. If $b = 2$, substituting this gives $a = \\sqrt{ 3 }(2 - 2) = 0$. This would mean $y = 2 \\cos x$, which starts at its maximum value at $x = 0$. However, the diagram shows the maximum occurs to the right of the y-axis, so we reject $a = 0$. <br>2. If $b = 1$, substituting this gives: <br>\\begin{aligned} a &= \\sqrt{ 3 }(2 - 1) \\cr a &= \\sqrt{ 3 } \\cr \\end{aligned} <br>This matches our geometric conditions perfectly. <br>Thus, the exact values are $a = \\sqrt{ 3 }$ and $b = 1$."
                ],
                "pi_options": [
                        {
                                "ans": "$$a = 0, \\quad b = 2$$",
                                "feedback": "This is incorrect. This is the other algebraic branch from solving the quadratic equation. However, if $a = 0$, the curve contains no sine component, which contradicts the graph shown in the diagram."
                        },
                        {
                                "ans": "$$a = 1, \\quad b = \\sqrt{ 3 }$$",
                                "feedback": "This is incorrect. This error occurs if you swapped the values of $a$ and $b$, which typically arises from swapping the values of the sine and cosine fractions when evaluating at $x = \\dfrac{ \\pi }{ 6 }$."
                        },
                        {
                                "ans": "$$a = \\sqrt{ 3 }, \\quad b = 3$$",
                                "feedback": "This is incorrect. This error occurs if you made an arithmetic slip when expanding $a = \\sqrt{ 3 }(2 - b)$, or if you wrote the amplitude equation as $a^2 + b^2 = 2$ (forgetting to square the maximum value of $2$)."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Complete Wave Forms",
                        "content": "When solving wave equations, always double-check the general form $R\\sin(x+\\alpha)$. Since $a^2+b^2=R^2$, you can quickly use the exact values of $a$ and $b$ to calculate $\\tan \\alpha = \\dfrac{ b }{ a }$ to verify that the phase shift $\\alpha$ matches the horizontal position of the peak."
                }
        },
        {
                "id": "004531",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Applications of Differentiation",
                "subtopic": [
                        "Curved Graphs",
                        "Differentiation"
                ],
                "img": false,
                "question": "The cubic function $f(x)$ is defined by: <br>$$f(x) = x^3 - 3px^2 + q$$ <br>where $p$ and $q$ are constants and $p > 0$. <br><br>(a) Sketch any cubic function that has both three distinct real roots and a positive coefficient of $x^3$. <br><br>(b)(i) Show that there is a turning point where the curve $y = f(x)$ crosses the $y$-axis. <br><br>(b)(ii) Given that the equation $f(x) = 0$ has three distinct real roots, find, in terms of $p$, the range of possible values of $q$, fully justifying your answer.",
                "steps": [
                        "For part (a), a cubic curve with a positive coefficient of $x^3$ and three distinct real roots starts in the bottom-left quadrant (as $x \\to -\\infty$, $y \\to -\\infty$) and goes to the top-right quadrant (as $x \\to \\infty$, $y \\to \\infty$). To cross the x-axis exactly three times, it must have two distinct turning points: a local maximum strictly above the x-axis and a local minimum strictly below the x-axis. <br><br>The sketch of the curve should look like this: <br><br><img src='images/Pure/004531_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
                        "For part (b)(i), find the derivative $f'(x)$ of the function $f(x) = x^3 - 3px^2 + q$ and set it to zero to locate the x-coordinates of the turning points: <br>\\begin{aligned} f'(x) &= 3x^2 - 6px \\cr 3x(x - 2p) &= 0 \\cr \\end{aligned} <br>This gives turning points at $x = 0$ and $x = 2p$.",
                        "The curve crosses the y-axis at $x = 0$. Substituting $x = 0$ into the original function gives: <br>\\begin{aligned} y &= f(0) \\cr y &= (0)^3 - 3p(0)^2 + q = q \\cr \\end{aligned} <br>Since the derivative $f'(0) = 0$, there is indeed a stationary turning point at the coordinate $(0, q)$, which lies exactly on the y-axis.",
                        "For part (b)(ii), determine the y-coordinates of both turning points to apply our root conditions from the sketch. <br>1. The first turning point at $x = 0$ has coordinate $(0, q)$. Since $p > 0$, the second derivative $f''(0) = -6p < 0$, making this a local maximum. <br>2. The second turning point at $x = 2p$ has coordinate: <br>\\begin{aligned} f(2p) &= (2p)^3 - 3p(2p)^2 + q \\cr &= 8p^3 - 12p^3 + q \\cr &= q - 4p^3 \\cr \\end{aligned} <br>Since $f''(2p) = 6p > 0$, this is a local minimum.",
                        "To have three distinct real roots, the local maximum must lie above the x-axis and the local minimum must lie below the x-axis: <br>\\begin{aligned} q &> 0 \\cr q - 4p^3 &< 0 \\cr \\end{aligned} <br>Solving these simultaneous inequalities yields the final range of possible values for $q$: <br>\\begin{aligned} 0 < q < 4p^3 \\cr \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$-4p^3 < q < 0$$",
                                "feedback": "This is incorrect. This range represents the solution for a cubic with turning points structured such that $x = 0$ is a local minimum and $x = -2p$ is a local maximum (as in $x^3 + 3px^2 + q$), which is the reverse of our function's stationary behaviors."
                        },
                        {
                                "ans": "$$q < 4p^3$$",
                                "feedback": "This is incorrect. This represents only one boundary condition (local minimum below the x-axis). You have forgotten to apply the other boundary condition (local maximum above the x-axis, $q > 0$)."
                        },
                        {
                                "ans": "$$0 < q < 8p^3$$",
                                "feedback": "This is incorrect. This error occurs if you made an algebraic slip when expanding $(2p)^3$ as $8p^3$ but then failed to subtract $12p^3$ when evaluating $f(2p)$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Boundary Case Rejections",
                        "content": "For a cubic equation to have three distinct roots, the local maximum and local minimum must be on opposite sides of the x-axis (meaning $y_{\\text{max}} > 0$ and $y_{\\text{min}} < 0$). If they were equal to zero, the equation would have a repeated root, resulting in only two distinct roots."
                }
        },
        {
                "id": "004532",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Applications of Differentiation",
                "subtopic": [
                        "Curved Graphs",
                        "Differentiation"
                ],
                "img": false,
                "question": "The cubic function $f(x)$ is defined by: <br>$$f(x) = -x^3 + 3px^2 + q$$ <br>where $p$ and $q$ are constants and $p > 0$. <br><br>(a) Sketch any cubic function that has both three distinct real roots and a negative coefficient of $x^3$. <br><br>(b)(i) Show that there is a turning point where the curve $y = f(x)$ crosses the $y$-axis. <br><br>(b)(ii) Given that the equation $f(x) = 0$ has three distinct real roots, find, in terms of $p$, the range of possible values of $q$, fully justifying your answer.",
                "steps": [
                        "For part (a), a cubic curve with a negative coefficient of $x^3$ and three distinct real roots starts in the top-left quadrant (as $x \\to -\\infty$, $y \\to \\infty$) and goes to the bottom-right quadrant (as $x \\to \\infty$, $y \\to -\\infty$). To cross the x-axis exactly three times, it must have two distinct turning points: a local minimum strictly below the x-axis and a local maximum strictly above the x-axis. <br><br>The sketch of the curve should look like this: <br><br><img src='images/Pure/004532_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
                        "For part (b)(i), find the derivative $f'(x)$ of the function $f(x) = -x^3 + 3px^2 + q$ and set it to zero to locate the x-coordinates of the turning points: <br>\\begin{aligned} f'(x) &= -3x^2 + 6px \\cr -3x(x - 2p) &= 0 \\cr \\end{aligned} <br>This gives turning points at $x = 0$ and $x = 2p$.",
                        "The curve crosses the y-axis at $x = 0$. Substituting $x = 0$ into the original function gives: <br>\\begin{aligned} y &= f(0) \\cr y &= -(0)^3 + 3p(0)^2 + q = q \\cr \\end{aligned} <br>Since the derivative $f'(0) = 0$, there is indeed a stationary turning point at the coordinate $(0, q)$, which lies exactly on the y-axis.",
                        "For part (b)(ii), determine the y-coordinates of both turning points to apply our root conditions from the sketch. <br>1. The first turning point at $x = 0$ has coordinate $(0, q)$. Since $p > 0$, the second derivative $f''(0) = 6p > 0$, making this a local minimum. <br>2. The second turning point at $x = 2p$ has coordinate: <br>\\begin{aligned} f(2p) &= -(2p)^3 + 3p(2p)^2 + q \\cr &= -8p^3 + 12p^3 + q \\cr &= 4p^3 + q \\cr \\end{aligned} <br>Since $f''(2p) = -6p < 0$, this is a local maximum.",
                        "To have three distinct real roots, the local minimum must lie below the x-axis and the local maximum must lie above the x-axis: <br>\\begin{aligned} q &< 0 \\cr 4p^3 + q &> 0 \\cr \\end{aligned} <br>Solving these simultaneous inequalities yields the final range of possible values for $q$: <br>\\begin{aligned} -4p^3 < q < 0 \\cr \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$0 < q < 4p^3$$",
                                "feedback": "This is incorrect. This range is the solution for a positive cubic curve. Because our leading coefficient is negative, the positions and natures of our local maximum and local minimum are reversed, resulting in different signs for the range."
                        },
                        {
                                "ans": "$$q > -4p^3$$",
                                "feedback": "This is incorrect. This represents only one boundary condition (local maximum above the x-axis). You have forgotten to apply the other boundary condition (local minimum below the x-axis, $q < 0$)."
                        },
                        {
                                "ans": "$$-8p^3 < q < 0$$",
                                "feedback": "This is incorrect. This error arises from an arithmetic slip when evaluating $-(2p)^3 = -8p^3$, failing to correctly add the $12p^3$ term during expansion."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Leading Coefficients",
                        "content": "A negative leading coefficient completely reverses the end behavior of the graph. Ensure you sketch the curve carefully from top-left to bottom-right to determine the correct inequalities for the turning points."
                }
        },
        {
                "id": "004533",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Applications of Differentiation",
                "subtopic": [
                        "Curved Graphs",
                        "Differentiation"
                ],
                "img": false,
                "question": "The cubic function $f(x)$ is defined by: <br>$$f(x) = x^3 - 3x^2 + q$$ <br>where $q$ is a constant. <br><br>(a) Sketch any cubic function that has three distinct real roots and a positive coefficient of $x^3$. <br><br>(b)(i) Show that the turning points of the curve $y = f(x)$ occur at $x = 0$ and $x = 2$. <br><br>(b)(ii) Given that the equation $f(x) = 0$ has three distinct real roots, find the range of possible values of $q$, fully justifying your answer.",
                "steps": [
                        "For part (a), a cubic curve with a positive coefficient of $x^3$ and three distinct real roots starts in the bottom-left quadrant (as $x \\to -\\infty$, $y \\to -\\infty$) and goes to the top-right quadrant (as $x \\to \\infty$, $y \\to \\infty$). To cross the x-axis exactly three times, it must have two distinct turning points: a local maximum strictly above the x-axis and a local minimum strictly below the x-axis. <br><br>The sketch of the curve should look like this: <br><br><img src='images/Pure/004533_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
                        "For part (b)(i), find the derivative $f'(x)$ of the function $f(x) = x^3 - 3x^2 + q$ and set it to zero to locate the x-coordinates of the turning points: <br>\\begin{aligned} f'(x) &= 3x^2 - 6x \\cr 3x(x - 2) &= 0 \\cr \\end{aligned} <br>This confirms turning points occur at $x = 0$ and $x = 2$.",
                        "For part (b)(ii), determine the y-coordinates of both turning points to apply our root conditions from the sketch. <br>1. The first turning point at $x = 0$ has coordinate $(0, q)$. Since the second derivative $f''(0) = -6 < 0$, this is a local maximum. <br>2. The second turning point at $x = 2$ has coordinate: <br>\\begin{aligned} f(2) &= (2)^3 - 3(2)^2 + q \\cr &= 8 - 12 + q \\cr &= q - 4 \\cr \\end{aligned} <br>Since $f''(2) = 6 > 0$, this is a local minimum.",
                        "To have three distinct real roots, the local maximum must lie above the x-axis and the local minimum must lie below the x-axis: <br>\\begin{aligned} q &> 0 \\cr q - 4 &< 0 \\cr \\end{aligned} <br>Solving these simultaneous inequalities yields the final range of possible values for $q$: <br>\\begin{aligned} 0 < q < 4 \\cr \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$-4 < q < 0$$",
                                "feedback": "This is incorrect. This range is the solution for a negative cubic curve, or arises if you confused the maximum and minimum coordinates."
                        },
                        {
                                "ans": "$$q < 4$$",
                                "feedback": "This is incorrect. This represents only one boundary condition (local minimum below the x-axis). You have forgotten to apply the other boundary condition (local maximum above the x-axis, $q > 0$)."
                        },
                        {
                                "ans": "$$0 < q < 12$$",
                                "feedback": "This is incorrect. This error occurs if you made an arithmetic slip when evaluating $f(2)$, such as incorrectly evaluating $3(2)^2 = 6$ or failing to subtract the linear components properly."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Numerical Verifications",
                        "content": "For numerical cubics, you can easily test values within your range to verify your solution. For example, if $q = 2$ (which lies in $0 < q < 4$), $f(0) = 2 > 0$ and $f(2) = -2 < 0$. Since the maximum is positive and the minimum is negative, a three-root curve is guaranteed."
                }
        },
        {
                "id": "004534",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Applications of Differentiation",
                "subtopic": [
                        "Curved Graphs",
                        "Differentiation"
                ],
                "img": false,
                "question": "The cubic function $f(x)$ is defined by: <br>$$f(x) = x^3 - 12x + q$$ <br>where $q$ is a constant. <br><br>(a) Sketch any cubic function that has three distinct real roots and a positive coefficient of $x^3$. <br><br>(b)(i) Find the coordinates of the turning points of the curve $y = f(x)$ in terms of $q$, determining their nature. <br><br>(b)(ii) Given that the equation $f(x) = 0$ has three distinct real roots, find the range of possible values of $q$, fully justifying your answer.",
                "steps": [
                        "For part (a), a cubic curve with a positive coefficient of $x^3$ and three distinct real roots starts in the bottom-left quadrant (as $x \\to -\\infty$, $y \\to -\\infty$) and goes to the top-right quadrant (as $x \\to \\infty$, $y \\to \\infty$). To cross the x-axis exactly three times, it must have two distinct turning points: a local maximum strictly above the x-axis and a local minimum strictly below the x-axis. <br><br>The sketch of the curve should look like this: <br><br><img src='images/Pure/004534_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
                        "For part (b)(i), find the derivative $f'(x)$ of the function $f(x) = x^3 - 12x + q$ and set it to zero to locate the x-coordinates of the turning points: <br>\\begin{aligned} f'(x) &= 3x^2 - 12 \\cr 3(x^2 - 4) &= 0 \\cr \\end{aligned} <br>This gives turning points at $x = -2$ and $x = 2$.",
                        "Determine the y-coordinates and the nature of the turning points: <br>1. At $x = -2$: <br>\\begin{aligned} f(-2) &= (-2)^3 - 12(-2) + q \\cr &= -8 + 24 + q = q + 16 \\cr \\end{aligned} <br>Since the second derivative $f''(-2) = 6(-2) = -12 < 0$, this is a local maximum at $(-2, q + 16)$. <br>2. At $x = 2$: <br>\\begin{aligned} f(2) &= (2)^3 - 12(2) + q \\cr &= 8 - 24 + q = q - 16 \\cr \\end{aligned} <br>Since the second derivative $f''(2) = 6(2) = 12 > 0$, this is a local minimum at $(2, q - 16)$.",
                        "For part (b)(ii), to have three distinct real roots, the local maximum must lie above the x-axis and the local minimum must lie below the x-axis: <br>\\begin{aligned} q + 16 &> 0 \\cr q - 16 &< 0 \\cr \\end{aligned} <br>Solving these simultaneous inequalities yields the final range of possible values for $q$: <br>\\begin{aligned} -16 < q < 16 \\cr \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$q < 16$$",
                                "feedback": "This is incorrect. This represents only one boundary condition (local minimum below the x-axis). You have forgotten to apply the other boundary condition (local maximum above the x-axis, $q > -16$)."
                        },
                        {
                                "ans": "$$-8 < q < 8$$",
                                "feedback": "This is incorrect. This error occurs from an arithmetic slip when evaluating $12(2) = 24$ or $2^3 = 8$, such as evaluating $f(2) = 2^3 - 12(2) + q = 8 - 16 + q = -8 + q < 0$."
                        },
                        {
                                "ans": "$$-32 < q < 32$$",
                                "feedback": "This is incorrect. This error arises from incorrectly multiplying the constant values by $2$ during the inequality setup."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Symmetric Ranges",
                        "content": "For cubic functions of the form $f(x) = x^3 - kx + q$, the turning points are symmetrically located around the y-axis at $x = \\pm\\sqrt{ \\dfrac{ k }{ 3 } }$. Because of this symmetry, the range of $q$ required to produce three distinct roots will always be symmetrical around zero (i.e., $-M < q < M$)."
                }
        },
        {
                "id": "004535",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Applications of Differentiation",
                "subtopic": [
                        "Curved Graphs",
                        "Differentiation"
                ],
                "img": false,
                "question": "The cubic function $f(x)$ is defined by: <br>$$f(x) = x^3 - 3px + q$$ <br>where $p$ and $q$ are constants and $p > 0$. <br><br>(a) Sketch any cubic function that has three distinct real roots and a positive coefficient of $x^3$. <br><br>(b)(i) Find the coordinates of the turning points of the curve $y = f(x)$ in terms of $p$ and $q$, determining their nature. <br><br>(b)(ii) Given that the equation $f(x) = 0$ has three distinct real roots, find, in terms of $p$, the range of possible values of $q$, fully justifying your answer.",
                "steps": [
                        "For part (a), a cubic curve with a positive coefficient of $x^3$ and three distinct real roots starts in the bottom-left quadrant (as $x \\to -\\infty$, $y \\to -\\infty$) and goes to the top-right quadrant (as $x \\to \\infty$, $y \\to \\infty$). To cross the x-axis exactly three times, it must have two distinct turning points: a local maximum strictly above the x-axis and a local minimum strictly below the x-axis. <br><br>The sketch of the curve should look like this: <br><br><img src='images/Pure/004535_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
                        "For part (b)(i), find the derivative $f'(x)$ of the function $f(x) = x^3 - 3px + q$ and set it to zero to locate the x-coordinates of the turning points: <br>\\begin{aligned} f'(x) &= 3x^2 - 3p \\cr 3(x^2 - p) &= 0 \\cr \\end{aligned} <br>Since $p > 0$, we find stationary points at $x = -\\sqrt{ p }$ and $x = \\sqrt{ p }$.",
                        "Determine the y-coordinates and the nature of the turning points: <br>1. At $x = -\\sqrt{ p }$: <br>\\begin{aligned} f(-\\sqrt{ p }) &= (-\\sqrt{ p })^3 - 3p(-\\sqrt{ p }) + q \\cr &= -p\\sqrt{ p } + 3p\\sqrt{ p } + q = 2p\\sqrt{ p } + q \\cr \\end{aligned} <br>Since the second derivative $f''(-\\sqrt{ p }) = -6\\sqrt{ p } < 0$, this is a local maximum at $(-\\sqrt{ p }, 2p\\sqrt{ p } + q)$. <br>2. At $x = \\sqrt{ p }$: <br>\\begin{aligned} f(\\sqrt{ p }) &= (\\sqrt{ p })^3 - 3p(\\sqrt{ p }) + q \\cr &= p\\sqrt{ p } - 3p\\sqrt{ p } + q = -2p\\sqrt{ p } + q \\cr \\end{aligned} <br>Since the second derivative $f''(\\sqrt{ p }) = 6\\sqrt{ p } > 0$, this is a local minimum at $(\\sqrt{ p }, -2p\\sqrt{ p } + q)$.",
                        "For part (b)(ii), to have three distinct real roots, the local maximum must lie above the x-axis and the local minimum must lie below the x-axis: <br>\\begin{aligned} 2p\\sqrt{ p } + q &> 0 \\cr -2p\\sqrt{ p } + q &< 0 \\cr \\end{aligned} <br>Solving these simultaneous inequalities yields the final range of possible values for $q$: <br>\\begin{aligned} -2p\\sqrt{ p } < q < 2p\\sqrt{ p } \\cr \\end{aligned} <br>This can also be written in fractional exponent form as $-2p^{\\frac{ 3 }{ 2 }} < q < 2p^{\\frac{ 3 }{ 2 }}$."
                ],
                "pi_options": [
                        {
                                "ans": "$$-2p^{\\frac{ 3 }{ 2 }} < q < 0$$",
                                "feedback": "This is incorrect. This range represents only the local maximum boundary, setting the minimum bound arbitrarily to $0$ as if the turning point were on the y-axis."
                        },
                        {
                                "ans": "$$q < 2p\\sqrt{ p }$$",
                                "feedback": "This is incorrect. This represents only one boundary condition (local minimum below the x-axis). You have forgotten to apply the other boundary condition (local maximum above the x-axis, $q > -2p\\sqrt{ p }$)."
                        },
                        {
                                "ans": "$$-4p\\sqrt{ p } < q < 4p\\sqrt{ p }$$",
                                "feedback": "This is incorrect. This error occurs if you made an arithmetic slip when evaluating $f(-\\sqrt{ p })$, incorrectly combining the terms as $-p\\sqrt{ p } + 5p\\sqrt{ p } = 4p\\sqrt{ p }$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Fractional Exponent Notation",
                        "content": "Always be comfortable translating between radical form and index form. The term $p\\sqrt{ p }$ is algebraically equivalent to $p^1 \\times p^{\\frac{ 1 }{ 2 }} = p^{\\frac{ 3 }{ 2 }}$. Both forms are completely identical in examinations."
                }
        },
        {
                "id": "004536",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Exponential and Logarithmic Functions and Graphs",
                        "Modelling and Applications"
                ],
                "img": "images/Pure/004536.png",
                "question": "Arthur bought an antique painting on 1 January 1980 for \u00a35000. The painting was valued by an auctioneer on the same date every 10 years up to 2020. The valuations are shown in the following table: <br><br><table style='width:100%; border-collapse: collapse; margin: 15px auto; border: 1px solid #000; text-align: center; font-family: sans-serif;'> <tr style='border: 1px solid #000;'> <th style='border: 1px solid #000; padding: 8px; background-color: #f2f2f2; width: 30%;'><strong>Year</strong></th> <td style='border: 1px solid #000; padding: 8px;'>1980</td> <td style='border: 1px solid #000; padding: 8px;'>1990</td> <td style='border: 1px solid #000; padding: 8px;'>2000</td> <td style='border: 1px solid #000; padding: 8px;'>2010</td> <td style='border: 1px solid #000; padding: 8px;'>2020</td> </tr> <tr style='border: 1px solid #000;'> <th style='border: 1px solid #000; padding: 8px; background-color: #f2f2f2; width: 30%;'><strong>Valuation price ($V$)</strong></th> <td style='border: 1px solid #000; padding: 8px;'>\u00a35000</td> <td style='border: 1px solid #000; padding: 8px;'>\u00a311000</td> <td style='border: 1px solid #000; padding: 8px;'>\u00a324000</td> <td style='border: 1px solid #000; padding: 8px;'>\u00a355000</td> <td style='border: 1px solid #000; padding: 8px;'>\u00a3120000</td> </tr> </table><br>The valuation price of the painting can be modelled by the equation: <br>$$V = p q^t$$ <br>where $V$ pounds is the valuation price $t$ years after 1 January 1980, and $p$ and $q$ are constants. <br><br><strong>(a)</strong> Show that $V = p q^t$ can be written as $\\log_{10} V = \\log_{10} p + t \\log_{10} q$. <br><br><strong>(b)</strong> The values in the table of $\\log_{10} V$ against $t$ have been plotted and a line of best fit has been drawn, as shown in the diagram. <br>Using this line of best fit (which has a vertical intercept of $3.70$ and passes through the point $(40, 5.08)$), find estimates for the values of $p$ and $q$. Give your answers correct to three significant figures. <br><br><strong>(c)</strong> Determine the year in which Arthur's painting will first be valued at over \u00a3300,000. <br><br><strong>(d)</strong> Explain whether your answer to part (c) is likely to be reliable.",
                "steps": [
                        "For part <strong>(a)</strong>, apply the laws of logarithms to linearise the exponential equation: <br>Take the logarithm to base $10$ of both sides of $V = p q^t$: <br>\\begin{aligned} \\log_{10} V &= \\log_{10}(p q^t) \\cr \\log_{10} V &= \\log_{10} p + \\log_{10}(q^t) \\cr \\log_{10} V &= \\log_{10} p + t \\log_{10} q \\cr \\end{aligned} <br>This is a linear equation of the form $Y = mX + c$, where $Y = \\log_{10} V$, $X = t$, the vertical intercept is $c = \\log_{10} p$, and the gradient is $m = \\log_{10} q$.",
                        "For part <strong>(b)</strong>, find the gradient $m$ of the line of best fit using the intercept $(0, 3.70)$ and the point $(40, 5.08)$: <br>\\begin{aligned} m &= \\dfrac{ 5.08 - 3.70 }{ 40 - 0 } \\cr &= \\dfrac{ 1.38 }{ 40 } = 0.0345 \\cr \\end{aligned} <br>This gives the linearised regression model: <br>\\begin{aligned} \\log_{10} V &= 3.70 + 0.0345 t \\cr \\end{aligned}",
                        "Equate the regression parameters to find estimates for $p$ and $q$: <br>1. For $p$: <br>\\begin{aligned} \\log_{10} p &= 3.70 \\cr p &= 10^{ 3.70 } \\approx 5012 \\cr \\end{aligned} <br>To three significant figures, $p \\approx 5010$ (or $5.01 \\times 10^3$). <br><br>2. For $q$: <br>\\begin{aligned} \\log_{10} q &= 0.0345 \\cr q &= 10^{ 0.0345 } \\approx 1.0827 \\cr \\end{aligned} <br>To three significant figures, $q \\approx 1.08$.",
                        "For part <strong>(c)</strong>, determine when $V > 300,000$ by substituting this value into the linearised log model: <br>\\begin{aligned} \\log_{10}(300,000) &= 3.70 + 0.0345 t \\cr \\log_{10}(3 \\times 10^5) &= 3.70 + 0.0345 t \\cr 5.4771 &= 3.70 + 0.0345 t \\cr 0.0345 t &= 1.7771 \\cr t &= \\dfrac{ 1.7771 }{ 0.0345 } \\approx 51.5 \\text{ years} \\cr \\end{aligned} <br>Since $t$ is the number of years after 1 January 1980: <br>\\begin{aligned} \\text{Year} &= 1980 + 51.5 \\cr &= 2031.5 \\cr \\end{aligned} <br>Thus, the valuation first exceeds \u00a3300,000 during the year $2031$ (or approximately 52 years after 1980).",
                        "For part <strong>(d)</strong>, comment on the reliability: <br>The model is based on only five data points spanning 40 years, and assumes a constant, uninterrupted rate of exponential growth. Antique art markets are highly volatile and influenced by unpredictable factors (such as economic recessions, changing tastes, fashion, or provenance). Extrapolating over a decade beyond the data range introduces substantial uncertainty, making the prediction mathematically consistent with the model but not highly reliable in real life."
                ],
                "pi_options": [
                        {
                                "ans": "$$p = 3.70, \\quad q = 0.0345, \\quad \\text{Year: } 2032$$",
                                "feedback": "This is incorrect. This error occurs if you forgot to apply the inverse logarithm (base 10) to the vertical intercept and gradient, stating that the parameters $p$ and $q$ are equal to the linear constants themselves."
                        },
                        {
                                "ans": "$$p = 5.01 \\times 10^3, \\quad q = 1.08, \\quad \\text{Year: } 2033$$",
                                "feedback": "This is incorrect. This error arises if you rounded your parameter values to three significant figures ($p \\approx 5010$ and $q \\approx 1.08$) and used them to solve $5010 \\times (1.08)^t = 300,000$ in the exponential equation. This intermediate rounding error yields $t \\approx 53.1$ years, leading incorrectly to the year $2033$."
                        },
                        {
                                "ans": "$$p = 5010, \\quad q = 1.08, \\quad \\text{Year: } 2030$$",
                                "feedback": "This is incorrect. This occurs due to an arithmetic error when calculating the logarithm of $300,000$, or a division error in $t = 1.777 / 0.0345$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Avoid Early Rounding",
                        "content": "When solving logarithmic equations, never use rounded intermediate parameters (like $p = 5010$ and $q = 1.08$) to solve the final exponential equation. Instead, always perform your algebra within the linearised log model (e.g., using $\\log_{10} V = 3.70 + 0.0345 t$) to prevent compounding rounding errors."
                }
        },
        {
                "id": "004537",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Exponential and Logarithmic Functions and Graphs",
                        "Modelling and Applications"
                ],
                "img": "images/Pure/004537.png",
                "question": "The population $N$ of a rare species of bird on a restricted island has been monitored every 5 years since the year 2000. The data collected is shown in the table below: <br><br><table style='width:100%; border-collapse: collapse; margin: 15px auto; border: 1px solid #000; text-align: center; font-family: sans-serif;'> <tr style='border: 1px solid #000;'> <th style='border: 1px solid #000; padding: 8px; background-color: #f2f2f2; width: 30%;'><strong>Year</strong></th> <td style='border: 1px solid #000; padding: 8px;'>2000</td> <td style='border: 1px solid #000; padding: 8px;'>2005</td> <td style='border: 1px solid #000; padding: 8px;'>2010</td> <td style='border: 1px solid #000; padding: 8px;'>2015</td> <td style='border: 1px solid #000; padding: 8px;'>2020</td> </tr> <tr style='border: 1px solid #000;'> <th style='border: 1px solid #000; padding: 8px; background-color: #f2f2f2; width: 30%;'><strong>Population ($N$)</strong></th> <td style='border: 1px solid #000; padding: 8px;'>120</td> <td style='border: 1px solid #000; padding: 8px;'>200</td> <td style='border: 1px solid #000; padding: 8px;'>330</td> <td style='border: 1px solid #000; padding: 8px;'>540</td> <td style='border: 1px solid #000; padding: 8px;'>900</td> </tr> </table><br>The population of birds can be modelled by the equation: <br>$$N = a \\mathrm{e}^{b t}$$ <br>where $t$ represents the number of years since the year 2000, and $a$ and $b$ are constants. <br><br><strong>(a)</strong> Show that $N = a \\mathrm{e}^{b t}$ can be written as $\\ln N = \\ln a + b t$. <br><br><strong>(b)</strong> The values in the table of $\\ln N$ against $t$ have been plotted and a line of best fit has been drawn, as shown in the diagram. <br>Using this line of best fit (which has a vertical intercept of $4.79$ and passes through the point $(20, 6.80)$), find estimates for the values of $a$ and $b$. Give your answers correct to three significant figures. <br><br><strong>(c)</strong> Using your model, determine the calendar year in which the bird population is predicted to first exceed 5,000. <br><br><strong>(d)</strong> Comment briefly on the reliability of this projection.",
                "steps": [
                        "For part <strong>(a)</strong>, take the natural logarithm ($\\ln$) of both sides of the exponential equation $N = a \\mathrm{e}^{b t}$ to linearise it: <br>\\begin{aligned} \\ln N &= \\ln(a \\mathrm{e}^{b t}) \\cr \\ln N &= \\ln a + \\ln(\\mathrm{e}^{b t}) \\cr \\ln N &= \\ln a + b t \\cr \\end{aligned} <br>This is a linear equation of the form $Y = mX + c$, where $Y = \\ln N$, $X = t$, the vertical intercept is $c = \\ln a$, and the gradient is $m = b$.",
                        "For part <strong>(b)</strong>, find the gradient $m$ (which represents the parameter $b$) of the line of best fit using the intercept $(0, 4.79)$ and the point $(20, 6.80)$: <br>\\begin{aligned} b &= \\dfrac{ 6.80 - 4.79 }{ 20 - 0 } \\cr &= \\dfrac{ 2.01 }{ 20 } = 0.1005 \\cr \\end{aligned} <br>To three significant figures, the growth constant is $b \\approx 0.101$.",
                        "Find the estimate for $a$ by equating the vertical intercept of $4.79$ to $\\ln a$: <br>\\begin{aligned} \\ln a &= 4.79 \\cr a &= \\mathrm{e}^{ 4.79 } \\approx 120.3 \\cr \\end{aligned} <br>To three significant figures, $a \\approx 120$.",
                        "For part <strong>(c)</strong>, substitute $N = 5000$ into the linearised natural log model to find $t$: <br>\\begin{aligned} \\ln(5000) &= 4.79 + 0.1005 t \\cr 8.5172 &= 4.79 + 0.1005 t \\cr 0.1005 t &= 3.7272 \\cr t &= \\dfrac{ 3.7272 }{ 0.1005 } \\approx 37.1 \\text{ years} \\cr \\end{aligned} <br>Since $t$ is the number of years after 2000: <br>\\begin{aligned} \\text{Year} &= 2000 + 37.1 \\cr &= 2037.1 \\cr \\end{aligned} <br>Thus, the bird population is predicted to first exceed 5,000 during the year $2037$ (or approximately 37 years after 2000).",
                        "For part <strong>(d)</strong>, comment on the reliability: <br>The model assumes continuous, unchecked exponential growth with no limiting environmental factors. In reality, biological systems are constrained by factors like carrying capacity, food supply, territorial nesting space, disease, and predation (represented by a logistic curve rather than an exponential one). Furthermore, predicting nearly 20 years beyond the available data range introduces significant extrapolation uncertainty."
                ],
                "pi_options": [
                        {
                                "ans": "$$a = 4.79, \\quad b = 0.101, \\quad \\text{Year: } 2037$$",
                                "feedback": "This is incorrect. This error occurs if you forgot to apply the inverse natural exponent ($\\mathrm{e}^x$) to the vertical intercept, writing the parameter $a$ as equal to the intercept value of $4.79$ directly."
                        },
                        {
                                "ans": "$$a = 120, \\quad b = 0.101, \\quad \\text{Year: } 2036$$",
                                "feedback": "This is incorrect. This error occurs if you rounded $t \\approx 37.1$ down to $36$ years, or if you used rounded values ($a = 120, b = 0.101$) to solve $120 \\mathrm{e}^{ 0.101 t } = 5000$ in the exponential form, resulting in an intermediate rounding discrepancy."
                        },
                        {
                                "ans": "$$a = 120, \\quad b = 1.11, \\quad \\text{Year: } 2037$$",
                                "feedback": "This is incorrect. This error occurs if you applied the base 10 inverse logarithm ($10^{0.1005}$) to find $b$ instead of preserving the natural exponent base $\\mathrm{e}$ used in the model."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Base Tracking",
                        "content": "Always carefully observe which base is being used in the model. If the equation uses $\\mathrm{e}$ (as in $N = a \\mathrm{e}^{b t}$), you must linearise using natural logarithms ($\\ln$) and use the inverse base $\\mathrm{e}^x$ to find the parameters."
                }
        },
        {
                "id": "004538",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Exponential and Logarithmic Functions and Graphs",
                        "Modelling and Applications"
                ],
                "img": "images/Pure/004538.png",
                "question": "An experiment was conducted to measure the period of oscillation, $T$ seconds, of a simple pendulum of length $L$ metres. The results are shown in the table below: <br><br><table style='width:100%; border-collapse: collapse; margin: 15px auto; border: 1px solid #000; text-align: center; font-family: sans-serif;'> <tr style='border: 1px solid #000;'> <th style='border: 1px solid #000; padding: 8px; background-color: #f2f2f2; width: 30%;'><strong>Length ($L$)</strong></th> <td style='border: 1px solid #000; padding: 8px;'>0.1</td> <td style='border: 1px solid #000; padding: 8px;'>0.2</td> <td style='border: 1px solid #000; padding: 8px;'>0.5</td> <td style='border: 1px solid #000; padding: 8px;'>1.0</td> <td style='border: 1px solid #000; padding: 8px;'>2.0</td> </tr> <tr style='border: 1px solid #000;'> <th style='border: 1px solid #000; padding: 8px; background-color: #f2f2f2; width: 30%;'><strong>Period ($T$)</strong></th> <td style='border: 1px solid #000; padding: 8px;'>0.63</td> <td style='border: 1px solid #000; padding: 8px;'>0.89</td> <td style='border: 1px solid #000; padding: 8px;'>1.41</td> <td style='border: 1px solid #000; padding: 8px;'>2.01</td> <td style='border: 1px solid #000; padding: 8px;'>2.84</td> </tr> </table><br>The relationship between $T$ and $L$ is modelled by the power law equation: <br>$$T = a L^b$$ <br>where $a$ and $b$ are constants. <br><br><strong>(a)</strong> Show that $T = a L^b$ can be written as $\\log_{10} T = \\log_{10} a + b \\log_{10} L$. <br><br><strong>(b)</strong> The values of $\\log_{10} T$ against $\\log_{10} L$ have been plotted and a line of best fit has been drawn, as shown in the diagram. <br>Using this line of best fit (which has a vertical intercept of $0.30$ and passes through the point $(-1.0, -0.20)$), find estimates for the values of $a$ and $b$. Give your answers correct to three significant figures. <br><br><strong>(c)</strong> Predict the period of oscillation for a pendulum of length $5.0$ metres. <br><br><strong>(d)</strong> Explain whether this prediction is likely to be reliable.",
                "steps": [
                        "For part <strong>(a)</strong>, take the logarithm to base $10$ of both sides of the power law equation $T = a L^b$: <br>\\begin{aligned} \\log_{10} T &= \\log_{10}(a L^b) \\cr \\log_{10} T &= \\log_{10} a + \\log_{10}(L^b) \\cr \\log_{10} T &= \\log_{10} a + b \\log_{10} L \\cr \\end{aligned} <br>This is a linear equation of the form $Y = mX + c$, where $Y = \\log_{10} T$, $X = \\log_{10} L$, the vertical intercept is $c = \\log_{10} a$, and the gradient is $m = b$.",
                        "For part <strong>(b)</strong>, find the gradient $m$ (which represents the parameter $b$) of the line of best fit using the intercept $(0, 0.30)$ and the point $(-1.0, -0.20)$: <br>\\begin{aligned} b &= \\dfrac{ -0.20 - 0.30 }{ -1.0 - 0 } \\cr &= \\dfrac{ -0.50 }{ -1.0 } = 0.500 \\cr \\end{aligned} <br>To three significant figures, the power is $b = 0.500$.",
                        "Find the estimate for $a$ by equating the vertical intercept of $0.30$ to $\\log_{10} a$: <br>\\begin{aligned} \\log_{10} a &= 0.30 \\cr a &= 10^{ 0.30 } \\approx 1.995 \\cr \\end{aligned} <br>To three significant figures, $a \\approx 2.00$.",
                        "For part <strong>(c)</strong>, construct the power model using $a = 2.00$ and $b = 0.500$: <br>\\begin{aligned} T &= 2.00 \\times L^{ 0.500 } \\cr T &= 2.00 \\sqrt{ L } \\cr \\end{aligned} <br>Substitute the value $L = 5.0$ into this equation to predict the period $T$: <br>\\begin{aligned} T &= 2.00 \\sqrt{ 5.0 } \\cr T &\\approx 2.00 \\times 2.236 \\approx 4.47 \\text{ seconds} \\cr \\end{aligned}",
                        "For part <strong>(d)</strong>, comment on the reliability: <br>The data covers lengths from $0.1$ m to $2.0$ m, so predicting at $5.0$ m represents a significant extrapolation. For much longer pendulums, real-world factors (such as air resistance, joint friction, and cable weight) may slightly alter the period from the simple power law. However, because $T = 2\\pi \\sqrt{ L/g }$ is a fundamental physical law, the model's form remains physically highly reliable if structural setups are preserved."
                ],
                "pi_options": [
                        {
                                "ans": "$$a = 0.30, \\quad b = 0.500, \\quad \\text{Period: } 1.12\\text{ s}$$",
                                "feedback": "This is incorrect. This error occurs if you forgot to apply the inverse base-10 logarithm ($10^x$) to the vertical intercept, stating that the parameter $a$ is equal to the intercept value of $0.30$ directly."
                        },
                        {
                                "ans": "$$a = 2.00, \\quad b = 0.500, \\quad \\text{Period: } 10.0\\text{ s}$$",
                                "feedback": "This is incorrect. This error occurs if you evaluated $T = 2.00 \\times 5.0^1$ instead of raising $L$ to the correct power $b = 0.500$, failing to perform the fractional exponent calculation."
                        },
                        {
                                "ans": "$$a = 2.00, \\quad b = 2.00, \\quad \\text{Period: } 50.0\\text{ s}$$",
                                "feedback": "This is incorrect. This error occurs if you calculated the gradient $b$ incorrectly (such as writing $b = 2.00$), leading to a completely incorrect quadratic-length model."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Log-Log Plot Slopes",
                        "content": "In a log-log plot (where $\\log y$ is plotted against $\\log x$), the gradient of the line is exactly equal to the exponent $b$ in $y = a x^b$. Unlike exponential plots where you must apply inverse logs to find the rate parameter, the power can be read directly off the gradient."
                }
        },
        {
                "id": "004539",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Exponential and Logarithmic Functions and Graphs",
                        "Modelling and Applications"
                ],
                "img": "images/Pure/004539.png",
                "question": "The mass $M$ grams of a radioactive isotope decays over time $t$ days. The mass is measured every 5 days, and the results are shown in the table below: <br><br><table style='width:100%; border-collapse: collapse; margin: 15px auto; border: 1px solid #000; text-align: center; font-family: sans-serif;'> <tr style='border: 1px solid #000;'> <th style='border: 1px solid #000; padding: 8px; background-color: #f2f2f2; width: 30%;'><strong>Time ($t$)</strong></th> <td style='border: 1px solid #000; padding: 8px;'>0</td> <td style='border: 1px solid #000; padding: 8px;'>5</td> <td style='border: 1px solid #000; padding: 8px;'>10</td> <td style='border: 1px solid #000; padding: 8px;'>15</td> <td style='border: 1px solid #000; padding: 8px;'>20</td> </tr> <tr style='border: 1px solid #000;'> <th style='border: 1px solid #000; padding: 8px; background-color: #f2f2f2; width: 30%;'><strong>Mass ($M$)</strong></th> <td style='border: 1px solid #000; padding: 8px;'>80</td> <td style='border: 1px solid #000; padding: 8px;'>48</td> <td style='border: 1px solid #000; padding: 8px;'>29</td> <td style='border: 1px solid #000; padding: 8px;'>17</td> <td style='border: 1px solid #000; padding: 8px;'>10</td> </tr> </table><br>The decay of the isotope can be modelled by the equation: <br>$$M = a b^t$$ <br>where $a$ and $b$ are constants. <br><br><strong>(a)</strong> Show that $M = a b^t$ can be written as $\\log_{10} M = \\log_{10} a + t \\log_{10} b$. <br><br><strong>(b)</strong> The values of $\\log_{10} M$ against $t$ have been plotted and a line of best fit has been drawn, as shown in the diagram. <br>Using this line of best fit (which has a vertical intercept of $1.90$ and passes through the point $(20, 1.00)$), find estimates for the values of $a$ and $b$. Give your answers correct to three significant figures. <br><br><strong>(c)</strong> Determine the number of days it takes for the mass of the isotope to first drop below $1$ gram. Give your answer to the nearest integer. <br><br><strong>(d)</strong> Discuss briefly whether your calculation in part (c) is likely to be reliable.",
                "steps": [
                        "For part <strong>(a)</strong>, take the logarithm to base $10$ of both sides of the decay equation $M = a b^t$: <br>\\begin{aligned} \\log_{10} M &= \\log_{10}(a b^t) \\cr \\log_{10} M &= \\log_{10} a + \\log_{10}(b^t) \\cr \\log_{10} M &= \\log_{10} a + t \\log_{10} b \\cr \\end{aligned} <br>This is a linear equation of the form $Y = mX + c$, where $Y = \\log_{10} M$, $X = t$, the vertical intercept is $c = \\log_{10} a$, and the gradient is $m = \\log_{10} b$.",
                        "For part <strong>(b)</strong>, find the gradient $m$ of the line of best fit using the intercept $(0, 1.90)$ and the point $(20, 1.00)$: <br>\\begin{aligned} m &= \\dfrac{ 1.00 - 1.90 }{ 20 - 0 } \\cr &= \\dfrac{ -0.90 }{ 20 } = -0.045 \\cr \\end{aligned} <br>This gives the linearised regression model: <br>\\begin{aligned} \\log_{10} M &= 1.90 - 0.045 t \\cr \\end{aligned}",
                        "Equate the linear parameters to find the estimates for $a$ and $b$: <br>1. For $a$: <br>\\begin{aligned} \\log_{10} a &= 1.90 \\cr a &= 10^{ 1.90 } \\approx 79.43 \\cr \\end{aligned} <br>To three significant figures, $a \\approx 79.4$. <br><br>2. For $b$: <br>\\begin{aligned} \\log_{10} b &= -0.045 \\cr b &= 10^{ -0.045 } \\approx 0.9016 \\cr \\end{aligned} <br>To three significant figures, $b \\approx 0.902$ (showing decay since $b < 1$).",
                        "For part <strong>(c)</strong>, determine when the mass drops below $1$ gram by setting $M = 1$, which corresponds to $\\log_{10} M = 0$: <br>\\begin{aligned} 0 &= 1.90 - 0.045 t \\cr 0.045 t &= 1.90 \\cr t &= \\dfrac{ 1.90 }{ 0.045 } \\approx 42.22 \\text{ days} \\cr \\end{aligned} <br>Thus, rounding to the nearest integer, it takes $42$ days for the mass to first drop below $1$ gram.",
                        "For part <strong>(d)</strong>, discuss reliability: <br>Unlike economic or biological systems, radioactive decay is a fundamental physical process governed by stable physical laws (constant half-life). Because there are no external, volatile variables that can shift the decay rate over time, this model's extrapolation is highly mathematically reliable, making the 42-day estimate very accurate in practice."
                ],
                "pi_options": [
                        {
                                "ans": "$a = 1.90, \\quad b = 0.902, \\quad \\text{Time: } 42\\text{ days}$",
                                "feedback": "This is incorrect. This error occurs if you forgot to apply the inverse base-10 logarithm ($10^x$) to the vertical intercept, stating that the parameter $a$ is equal to the intercept value of $1.90$ directly."
                        },
                        {
                                "ans": "$a = 79.4, \\quad b = 0.902, \\quad \\text{Time: } 43\\text{ days}$",
                                "feedback": "This is incorrect. This represents a rounding error. You may have rounded $t \\approx 42.2$ up to $43$ days instead of rounding to the nearest integer of $42$."
                        },
                        {
                                "ans": "$a = 79.4, \\quad b = -0.045, \\quad \\text{Time: } 42\\text{ days}$",
                                "feedback": "This is incorrect. This error occurs if you forgot to apply the inverse base-10 logarithm to the gradient, mistakenly writing the parameter $b$ as equal to the negative rate gradient of $-0.045$."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Decay Rates and Bases",
                        "content": "When dealing with radioactive decay models of the form $M = a b^t$, because the mass is decreasing, the base $b$ must always lie in the range $0 < b < 1$. Correspondingly, the gradient of the linearised model, $\\log_{10} b$, will always be a negative value."
                }
        },
        {
                "id": "004540",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Exponential and Logarithmic Functions and Graphs",
                        "Modelling and Applications"
                ],
                "img": "images/Pure/004540.png",
                "question": "The concentration $C$ mg/L of a drug in a patient's bloodstream $t$ hours after injection is monitored. The data collected is shown in the table below: <br><br><table style='width:100%; border-collapse: collapse; margin: 15px auto; border: 1px solid #000; text-align: center; font-family: sans-serif;'> <tr style='border: 1px solid #000;'> <th style='border: 1px solid #000; padding: 8px; background-color: #f2f2f2; width: 30%;'><strong>Time ($t$)</strong></th> <td style='border: 1px solid #000; padding: 8px;'>1</td> <td style='border: 1px solid #000; padding: 8px;'>2</td> <td style='border: 1px solid #000; padding: 8px;'>3</td> <td style='border: 1px solid #000; padding: 8px;'>4</td> <td style='border: 1px solid #000; padding: 8px;'>5</td> </tr> <tr style='border: 1px solid #000;'> <th style='border: 1px solid #000; padding: 8px; background-color: #f2f2f2; width: 30%;'><strong>Concentration ($C$)</strong></th> <td style='border: 1px solid #000; padding: 8px;'>45</td> <td style='border: 1px solid #000; padding: 8px;'>32</td> <td style='border: 1px solid #000; padding: 8px;'>22</td> <td style='border: 1px solid #000; padding: 8px;'>16</td> <td style='border: 1px solid #000; padding: 8px;'>11</td> </tr> </table><br>The elimination of the drug is modelled by the exponential equation: <br>$$C = a b^t$$ <br>where $a$ and $b$ are constants. <br><br><strong>(a)</strong> Show that $C = a b^t$ can be written as $\\log_{10} C = \\log_{10} a + t \\log_{10} b$. <br><br><strong>(b)</strong> The values of $\\log_{10} C$ against $t$ have been plotted and a line of best fit has been drawn, as shown in the diagram. <br>Using this line of best fit (which has a vertical intercept of $1.80$ and passes through the point $(5, 1.04)$), find estimates for the values of $a$ and $b$. Give your answers correct to three significant figures. <br><br><strong>(c)</strong> Calculate the time, to the nearest hour, when the concentration of the drug in the patient's bloodstream first falls below $1$ mg/L. <br><br><strong>(d)</strong> State one reason, contextual or mathematical, why the drug concentration predicted by this model may not be highly accurate over a long period.",
                "steps": [
                        "For part <strong>(a)</strong>, take the logarithm to base $10$ of both sides of the drug equation $C = a b^t$: <br>\\begin{aligned} \\log_{10} C &= \\log_{10}(a b^t) \\cr \\log_{10} C &= \\log_{10} a + \\log_{10}(b^t) \\cr \\log_{10} C &= \\log_{10} a + t \\log_{10} b \\cr \\end{aligned} <br>This is a linear equation of the form $Y = mX + c$, where $Y = \\log_{10} C$, $X = t$, the vertical intercept is $c = \\log_{10} a$, and the gradient is $m = \\log_{10} b$.",
                        "For part <strong>(b)</strong>, find the gradient $m$ of the line of best fit using the intercept $(0, 1.80)$ and the point $(5, 1.04)$: <br>\\begin{aligned} m &= \\dfrac{ 1.04 - 1.80 }{ 5 - 0 } \\cr &= \\dfrac{ -0.76 }{ 5 } = -0.152 \\cr \\end{aligned} <br>This gives the linearised log model: <br>\\begin{aligned} \\log_{10} C &= 1.80 - 0.152 t \\cr \\end{aligned}",
                        "Equate the linear parameters to find the estimates for $a$ and $b$: <br>1. For $a$: <br>\\begin{aligned} \\log_{10} a &= 1.80 \\cr a &= 10^{ 1.80 } \\approx 63.09 \\cr \\end{aligned} <br>To three significant figures, $a \\approx 63.1$. <br><br>2. For $b$: <br>\\begin{aligned} \\log_{10} b &= -0.152 \\cr b &= 10^{ -0.152 } \\approx 0.7047 \\cr \\end{aligned} <br>To three significant figures, $b \\approx 0.705$.",
                        "For part <strong>(c)</strong>, find when the concentration falls below $1$ mg/L, which corresponds to setting $C = 1$ and $\\log_{10} C = 0$: <br>\\begin{aligned} 0 &= 1.80 - 0.152 t \\cr 0.152 t &= 1.80 \\cr t &= \\dfrac{ 1.80 }{ 0.152 } \\approx 11.84 \\text{ hours} \\cr \\end{aligned} <br>Thus, rounding to the nearest hour, the drug concentration first falls below $1$ mg/L after $12$ hours.",
                        "For part <strong>(d)</strong>, state a limiting reason: <br>The model assumes a constant rate of exponential clearance (first-order kinetics), but in biological systems, metabolic pathways can saturate or change as concentrations become extremely low, altering the clearance rate. Furthermore, patient-specific factors (such as kidney/liver function or hydration levels) can affect the excretion rate over longer timeframes."
                ],
                "pi_options": [
                        {
                                "ans": "$a = 1.80, \\quad b = 0.705, \\quad \\text{Time: } 12\\text{ hours}$",
                                "feedback": "This is incorrect. This error occurs if you forgot to apply the inverse base-10 logarithm ($10^x$) to the vertical intercept, stating that the parameter $a$ is equal to the intercept value of $1.80$ directly."
                        },
                        {
                                "ans": "$a = 63.1, \\quad b = 0.705, \\quad \\text{Time: } 11\\text{ hours}$",
                                "feedback": "This is incorrect. This represents a rounding error. You may have rounded $t \\approx 11.84$ down to $11$ hours instead of rounding to the nearest hour of $12$ hours."
                        },
                        {
                                "ans": "$a = 63.1, \\quad b = -0.152, \\quad \\text{Time: } 12\\text{ hours}$",
                                "feedback": "This is incorrect. This error occurs if you forgot to apply the inverse base-10 logarithm to the gradient, mistakenly writing the parameter $b$ as equal to the negative rate gradient of $-0.152$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Contextual Model Boundaries",
                        "content": "Always read the context of mathematical models carefully. While a mathematical model can extrapolate infinitely, biological and economic systems have real-world limitations (like changing metabolic kinetics or environmental bounds) that disrupt long-term exponential trends."
                }
        },
        {
                "id": "004541",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Integration",
                "topic": "Integration",
                "subtopic": [
                        "Numerical Methods"
                ],
                "img": false,
                "question": "The function $f(x)$ is defined by $f(x) = \\sqrt{ 9 - 18x^2 }$. <br><br><strong>(a)</strong> Show that the first two terms of the binomial expansion of $f(x)$ in ascending powers of $x$ are $3 - 3x^2$. <br><br><strong>(b)</strong> State the range of values of $x$ for which the expansion found in part (a) is valid. <br><br><strong>(c)</strong> Hence, using the small-angle approximation $\\cos(2x) \\approx 1 - 2x^2$, find an approximation for $\\int_{0}^{0.3} \\sqrt{ \\cos(2x) } \\, \\mathrm{d}x$, giving your answer to five decimal places. Fully justify your answer.",
                "steps": [
                        "For part <strong>(a)</strong>, factor out the constant $9$ first to write the expression in the standard binomial form $(1 + u)^n$: <br>\\begin{aligned} \\sqrt{ 9 - 18x^2 } &= \\sqrt{ 9\\left( 1 - 2x^2 \\right) } \\cr &= 3\\left( 1 - 2x^2 \\right)^{\\frac{ 1 }{ 2 }} \\cr \\end{aligned}",
                        "Apply the general binomial expansion $(1 + u)^n = 1 + nu + \\dfrac{ n(n - 1 ) }{ 2! }u^2 + \\dots$ for $n = \\dfrac{ 1 }{ 2 }$ and $u = -2x^2$: <br>\\begin{aligned} 3\\left( 1 - 2x^2 \\right)^{\\frac{ 1 }{ 2 }} &\\approx 3\\left( 1 + \\left( \\dfrac{ 1 }{ 2 } \\right)\\left( -2x^2 \\right) \\right) \\cr &= 3\\left( 1 - x^2 \\right) \\cr &= 3 - 3x^2 \\cr \\end{aligned}",
                        "For part <strong>(b)</strong>, recall that the binomial expansion of $(1 + u)^n$ is valid if and only if $|u| < 1$. Substituting $u = -2x^2$ gives: <br>\\begin{aligned} |-2x^2| &< 1 \\cr 2x^2 &< 1 \\cr x^2 &< \\dfrac{ 1 }{ 2 } \\cr \\end{aligned} <br>Taking the square root yields the range of validity: <br>\\begin{aligned} |x| &< \\dfrac{ 1 }{ \\sqrt{ 2 } } \\cr \\end{aligned} <br>This can also be written in interval notation as $-\\dfrac{ 1 }{ \\sqrt{ 2 } } < x < \\dfrac{ 1 }{ \\sqrt{ 2 } }$ (or approximately $-0.707 < x < 0.707$).",
                        "For part <strong>(c)</strong>, use the small-angle approximation $\\cos(2x) \\approx 1 - 2x^2$ to substitute into our integral: <br>\\begin{aligned} \\sqrt{ \\cos(2x) } &\\approx \\sqrt{ 1 - 2x^2 } \\cr \\end{aligned} <br>Notice that from part (a), $f(x) = 3\\sqrt{ 1 - 2x^2 } \\approx 3 - 3x^2$, which means: <br>\\begin{aligned} \\sqrt{ 1 - 2x^2 } &\\approx 1 - x^2 \\cr \\end{aligned}",
                        "Substitute this expansion into the definite integral: <br>\\begin{aligned} \\int_{0}^{0.3} \\sqrt{ \\cos(2x) } \\, \\mathrm{d}x &\\approx \\int_{0}^{0.3} \\left( 1 - x^2 \\right) \\, \\mathrm{d}x \\cr &= \\left[ x - \\dfrac{ x^3 }{ 3 } \\right]_{0}^{0.3} \\cr &= \\left( 0.3 - \\dfrac{ (0.3)^3 }{ 3 } \\right) - (0) \\cr &= 0.3 - 0.009 = 0.29100 \\cr \\end{aligned} <br>Since the upper limit of integration $x = 0.3$ is well within the range of validity $|x| < 0.707$ and $2x = 0.6$ is small enough for the small-angle approximation to remain highly accurate, this is a fully justified approximation."
                ],
                "pi_options": [
                        {
                                "ans": "$$0.30000$$",
                                "feedback": "This is incorrect. This error occurs if you integrated your binomial expansion incorrectly by evaluating only the leading linear term $x$ at the upper limit (completely forgetting to integrate or subtract the quadratic component $-x^2$)."
                        },
                        {
                                "ans": "$$0.27300$$",
                                "feedback": "This is incorrect. This represents a minor decimal subtraction error, arising from miscalculating the difference $0.3 - 0.009$ as $0.273$ instead of $0.291$."
                        },
                        {
                                "ans": "$$0.28200$$",
                                "feedback": "This is incorrect. This error occurs if you integrated the quadratic term $-x^2$ incorrectly, such as forgetting to divide by the new power of $3$ (leading to $x - x^3$), which yields $0.3 - 0.027 = 0.273$ plus rounding variances."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Bridging Algebra and Calculus",
                        "content": "This is a classic 'bridging' question. When asked to approximate an integral of a complex function, always look to use your binomial expansion. This transforms a non-integrable root function into a simple polynomial that can be integrated using basic term-by-term calculus."
                }
        },
        {
                "id": "004542",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Integration",
                "topic": "Integration",
                "subtopic": [
                        "Numerical Methods"
                ],
                "img": false,
                "question": "The function $f(x)$ is defined by $f(x) = \\sqrt{ 16 - 8x^2 }$. <br><br><strong>(a)</strong> Show that the first two terms of the binomial expansion of $f(x)$ in ascending powers of $x$ are $4 - x^2$. <br><br><strong>(b)</strong> State the range of values of $x$ for which the expansion found in part (a) is valid. <br><br><strong>(c)</strong> Hence, using the small-angle approximation $\\cos x \\approx 1 - \\dfrac{ x^2 }{ 2 }$, find an approximation for $\\int_{0}^{0.5} \\sqrt{ \\cos x } \\, \\mathrm{d}x$, giving your answer to five decimal places. Fully justify your answer.",
                "steps": [
                        "For part <strong>(a)</strong>, factor out the constant $16$ first to write the expression in the standard binomial form $(1 + u)^n$: <br>\\begin{aligned} \\sqrt{ 16 - 8x^2 } &= \\sqrt{ 16\\left( 1 - \\dfrac{ x^2 }{ 2 } \\right) } \\cr &= 4\\left( 1 - \\dfrac{ x^2 }{ 2 } \\right)^{\\frac{ 1 }{ 2 }} \\cr \\end{aligned}",
                        "Apply the general binomial expansion $(1 + u)^n = 1 + nu + \\dfrac{ n(n - 1 ) }{ 2! }u^2 + \\dots$ for $n = \\dfrac{ 1 }{ 2 }$ and $u = -\\dfrac{ x^2 }{ 2 }$: <br>\\begin{aligned} 4\\left( 1 - \\dfrac{ x^2 }{ 2 } \\right)^{\\frac{ 1 }{ 2 }} &\\approx 4\\left( 1 + \\left( \\dfrac{ 1 }{ 2 } \\right)\\left( -\\dfrac{ x^2 }{ 2 } \\right) \\right) \\cr &= 4\\left( 1 - \\dfrac{ x^2 }{ 4 } \\right) \\cr &= 4 - x^2 \\cr \\end{aligned}",
                        "For part <strong>(b)</strong>, recall that the binomial expansion of $(1 + u)^n$ is valid if and only if $|u| < 1$. Substituting $u = -\\dfrac{ x^2 }{ 2 }$ gives: <br>\\begin{aligned} \\left| -\\dfrac{ x^2 }{ 2 } \\right| &< 1 \\cr \\dfrac{ x^2 }{ 2 } &< 1 \\cr x^2 &< 2 \\cr \\end{aligned} <br>Taking the square root yields the range of validity: <br>\\begin{aligned} |x| &< \\sqrt{ 2 } \\cr \\end{aligned} <br>This can also be written in interval notation as $-\\sqrt{ 2 } < x < \\sqrt{ 2 }$ (or approximately $-1.414 < x < 1.414$).",
                        "For part <strong>(c)</strong>, use the small-angle approximation $\\cos x \\approx 1 - \\dfrac{ x^2 }{ 2 }$ to substitute into our integral: <br>\\begin{aligned} \\sqrt{ \\cos x } &\\approx \\sqrt{ 1 - \\dfrac{ x^2 }{ 2 } } \\cr \\end{aligned} <br>Notice that from part (a), $f(x) = 4\\sqrt{ 1 - \\dfrac{ x^2 }{ 2 } } \\approx 4 - x^2$, which means: <br>\\begin{aligned} \\sqrt{ 1 - \\dfrac{ x^2 }{ 2 } } &\\approx 1 - \\dfrac{ x^2 }{ 4 } \\cr \\end{aligned}",
                        "Substitute this expansion into the definite integral: <br>\\begin{aligned} \\int_{0}^{0.5} \\sqrt{ \\cos x } \\, \\mathrm{d}x &\\approx \\int_{0}^{0.5} \\left( 1 - \\dfrac{ x^2 }{ 4 } \\right) \\, \\mathrm{d}x \\cr &= \\left[ x - \\dfrac{ x^3 }{ 12 } \\right]_{0}^{0.5} \\cr &= \\left( 0.5 - \\dfrac{ (0.5)^3 }{ 12 } \\right) - (0) \\cr &= 0.5 - \\dfrac{ 0.125 }{ 12 } \\approx 0.48958 \\cr \\end{aligned} <br>Since the upper limit of integration $x = 0.5$ is well within the range of validity $|x| < 1.414$ and is small enough for the small-angle approximation to remain highly accurate, this is a fully justified approximation."
                ],
                "pi_options": [
                        {
                                "ans": "$$0.50000$$",
                                "feedback": "This is incorrect. This error occurs if you integrated your binomial expansion incorrectly by evaluating only the leading linear term $x$ at the upper limit (completely forgetting to integrate or subtract the quadratic component $-\\dfrac{ x^2 }{ 4 }$)."
                        },
                        {
                                "ans": "$$0.45833$$",
                                "feedback": "This is incorrect. This error arises if you integrated the quadratic term $-\\dfrac{ x^2 }{ 4 }$ incorrectly as $-\\dfrac{ x^3 }{ 3 }$, completely losing the factor of $4$ in the denominator during integration."
                        },
                        {
                                "ans": "$$0.49479$$",
                                "feedback": "This is incorrect. This occurs if you integrated the term $-\\dfrac{ x^2 }{ 4 }$ as $-\\dfrac{ x^3 }{ 24 }$ instead of $-\\dfrac{ x^3 }{ 12 }$, multiplying the denominator incorrectly by $2$ instead of $3$ during power integration."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Validity Range Checks",
                        "content": "Always state and double-check your range of validity. If your upper limit of integration (like $x = 0.5$) lay outside your range of validity, your binomial expansion would diverge, rendering the resulting definite integral approximation completely mathematically invalid."
                }
        },
        {
                "id": "004543",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Integration",
                "topic": "Integration",
                "subtopic": [
                        "Algebraic Methods"
                ],
                "img": false,
                "question": "The function $f(x)$ is defined by $f(x) = \\dfrac{ 1 }{ \\sqrt{ 1 - 4x^2 } }$. <br><br><strong>(a)</strong> Show that the first two terms of the binomial expansion of $f(x)$ in ascending powers of $x$ are $1 + 2x^2$. <br><br><strong>(b)</strong> State the range of values of $x$ for which the expansion found in part (a) is valid. <br><br><strong>(c)</strong> Hence, find an approximation for $\\int_{0}^{0.3} \\dfrac{ 1 }{ \\sqrt{ 1 - 4x^2 } } \\, \\mathrm{d}x$, giving your answer to five decimal places. Fully justify your answer.",
                "steps": [
                        "For part <strong>(a)</strong>, rewrite the expression in index form as $(1 + u)^n$: <br>\\begin{aligned} \\dfrac{ 1 }{ \\sqrt{ 1 - 4x^2 } } &= \\left( 1 - 4x^2 \\right)^{-\\frac{ 1 }{ 2 }} \\cr \\end{aligned}",
                        "Apply the general binomial expansion $(1 + u)^n = 1 + nu + \\dfrac{ n(n - 1 ) }{ 2! }u^2 + \\dots$ for $n = -\\dfrac{ 1 }{ 2 }$ and $u = -4x^2$: <br>\\begin{aligned} \\left( 1 - 4x^2 \\right)^{-\\frac{ 1 }{ 2 }} &\\approx 1 + \\left( -\\dfrac{ 1 }{ 2 } \\right)\\left( -4x^2 \\right) \\cr &= 1 + 2x^2 \\cr \\end{aligned}",
                        "For part <strong>(b)</strong>, recall that the binomial expansion of $(1 + u)^n$ is valid if and only if $|u| < 1$. Substituting $u = -4x^2$ gives: <br>\\begin{aligned} |-4x^2| &< 1 \\cr 4x^2 &< 1 \\cr x^2 &< \\dfrac{ 1 }{ 4 } \\cr \\end{aligned} <br>Taking the square root yields the range of validity: <br>\\begin{aligned} |x| &< \\dfrac{ 1 }{ 2 } \\cr \\end{aligned} <br>This can also be written in interval notation as $-\\dfrac{ 1 }{ 2 } < x < \\dfrac{ 1 }{ 2 }$ (or $-0.5 < x < 0.5$).",
                        "For part <strong>(c)</strong>, substitute our binomial expansion into the definite integral: <br>\\begin{aligned} \\int_{0}^{0.3} \\dfrac{ 1 }{ \\sqrt{ 1 - 4x^2 } } \\, \\mathrm{d}x &\\approx \\int_{0}^{0.3} \\left( 1 + 2x^2 \\right) \\, \\mathrm{d}x \\cr \\end{aligned}",
                        "Integrate the polynomial term-by-term and evaluate: <br>\\begin{aligned} \\int_{0}^{0.3} \\left( 1 + 2x^2 \\right) \\, \\mathrm{d}x &= \\left[ x + \\dfrac{ 2x^3 }{ 3 } \\right]_{0}^{0.3} \\cr &= \\left( 0.3 + \\dfrac{ 2(0.3)^3 }{ 3 } \\right) - (0) \\cr &= 0.3 + \\dfrac{ 2(0.027) }{ 3 } \\cr &= 0.3 + 0.018 = 0.31800 \\cr \\end{aligned} <br>Since the upper limit of integration $x = 0.3$ is well within our range of validity $|x| < 0.5$, truncating the binomial expansion after the quadratic term provides a highly justified, accurate approximation."
                ],
                "pi_options": [
                        {
                                "ans": "$$0.30000$$",
                                "feedback": "This is incorrect. This error occurs if you integrated your binomial expansion incorrectly by evaluating only the leading linear term $x$ at the upper limit (completely forgetting to integrate or add the quadratic component $+2x^2$)."
                        },
                        {
                                "ans": "$$0.33600$$",
                                "feedback": "This is incorrect. This error arises if you integrated the term $+2x^2$ incorrectly as $+2x^3$, completely forgetting to divide by the new power of $3$ during integration, yielding $0.3 + 2(0.027) = 0.354$ plus decimal discrepancies."
                        },
                        {
                                "ans": "$$0.30900$$",
                                "feedback": "This is incorrect. This occurs if you integrated $+2x^2$ as $+\\dfrac{ x^3 }{ 3 }$, accidentally losing the factor of $2$ in the numerator."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Negative Rational Powers",
                        "content": "Pay extreme attention to signs when expanding terms with negative rational powers. A negative multiplier $n = -\\dfrac{ 1 }{ 2 }$ combined with a negative variable $u = -4x^2$ must yield a positive quadratic term: $1 + 2x^2$. A single sign error here will corrupt your entire integration."
                }
        },
        {
                "id": "004544",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Integration",
                "topic": "Integration",
                "subtopic": [
                        "Algebraic Methods"
                ],
                "img": false,
                "question": "The function $f(x)$ is defined by $f(x) = \\sqrt{ 1 - 3x }$. <br><br><strong>(a)</strong> Show that the first three terms of the binomial expansion of $f(x)$ in ascending powers of $x$ are $1 - \\dfrac{ 3 }{ 2 }x - \\dfrac{ 9 }{ 8 }x^2$. <br><br><strong>(b)</strong> State the range of values of $x$ for which the expansion found in part (a) is valid. <br><br><strong>(c)</strong> Hence, find an approximation for $\\int_{0}^{0.1} \\sqrt{ 1 - 3x } \\, \\mathrm{d}x$, giving your answer to five decimal places. Fully justify your answer.",
                "steps": [
                        "For part <strong>(a)</strong>, write the expression in index form: <br>\\begin{aligned} \\sqrt{ 1 - 3x } &= \\left( 1 - 3x \\right)^{\\frac{ 1 }{ 2 }} \\cr \\end{aligned}",
                        "Apply the general binomial expansion $(1 + u)^n = 1 + nu + \\dfrac{ n(n - 1 ) }{ 2! }u^2 + \\dots$ for $n = \\dfrac{ 1 }{ 2 }$ and $u = -3x$: <br>\\begin{aligned} \\left( 1 - 3x \\right)^{\\frac{ 1 }{ 2 }} &\\approx 1 + \\left( \\dfrac{ 1 }{ 2 } \\right)\\left( -3x \\right) + \\dfrac{ \\left( \\frac{ 1 }{ 2 } \\right)\\left( -\\frac{ 1 }{ 2 } \\right) }{ 2 }\\left( -3x \\right)^2 \\cr &= 1 - \\dfrac{ 3 }{ 2 }x + \\left( -\\dfrac{ 1 }{ 8 } \\right)\\left( 9x^2 \\right) \\cr &= 1 - \\dfrac{ 3 }{ 2 }x - \\dfrac{ 9 }{ 8 }x^2 \\cr \\end{aligned}",
                        "For part <strong>(b)</strong>, recall that the binomial expansion of $(1 + u)^n$ is valid if and only if $|u| < 1$. Substituting $u = -3x$ gives: <br>\\begin{aligned} |-3x| &< 1 \\cr 3x &< 1 \\cr \\end{aligned} <br>This yields the range of validity: <br>\\begin{aligned} |x| &< \\dfrac{ 1 }{ 3 } \\cr \\end{aligned} <br>This can also be written in interval notation as $-\\dfrac{ 1 }{ 3 } < x < \\dfrac{ 1 }{ 3 }$ (or $-0.333 < x < 0.333$).",
                        "For part <strong>(c)</strong>, substitute our binomial expansion into the definite integral: <br>\\begin{aligned} \\int_{0}^{0.1} \\sqrt{ 1 - 3x } \\, \\mathrm{d}x &\\approx \\int_{0}^{0.1} \\left( 1 - \\dfrac{ 3 }{ 2 }x - \\dfrac{ 9 }{ 8 }x^2 \\right) \\, \\mathrm{d}x \\cr \\end{aligned}",
                        "Integrate the polynomial term-by-term and evaluate: <br>\\begin{aligned} \\int_{0}^{0.1} \\left( 1 - \\dfrac{ 3 }{ 2 }x - \\dfrac{ 9 }{ 8 }x^2 \\right) \\, \\mathrm{d}x &= \\left[ x - \\dfrac{ 3 }{ 4 }x^2 - \\dfrac{ 3 }{ 8 }x^3 \\right]_{0}^{0.1} \\cr &= \\left( 0.1 - \\dfrac{ 3 }{ 4 }(0.1)^2 - \\dfrac{ 3 }{ 8 }(0.1)^3 \\right) - (0) \\cr &= 0.1 - \\dfrac{ 3 }{ 4 }(0.01) - \\dfrac{ 3 }{ 8 }(0.001) \\cr &= 0.1 - 0.0075 - 0.000375 \\cr &= 0.092125 \\approx 0.09213 \\cr \\end{aligned} <br>Since the upper limit of integration $x = 0.1$ is well within our range of validity $|x| < 0.333$, truncating the binomial expansion after the quadratic term provides a highly justified, accurate approximation."
                ],
                "pi_options": [
                        {
                                "ans": "$$0.10000$$",
                                "feedback": "This is incorrect. This error occurs if you evaluated only the first integrated term $x$ at the upper limit of $0.1$ and completely neglected the negative quadratic and cubic integration terms."
                        },
                        {
                                "ans": "$$0.09250$$",
                                "feedback": "This is incorrect. This error occurs if you forgot to integrate the third term $-\\dfrac{ 9 }{ 8 }x^2$, evaluating only the first two terms as $x - \\dfrac{ 3 }{ 4 }x^2 = 0.1 - 0.0075 = 0.09250$."
                        },
                        {
                                "ans": "$$0.08838$$",
                                "feedback": "This is incorrect. This error arises from a sign error, integrating the second and third terms with positive signs instead of negative signs, or making a subtraction slip during the decimal arithmetic."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Coefficient Tracking",
                        "content": "When evaluating your definite integral, write down your decimals clearly. For example, $(0.1)^2 = 0.01$ and $(0.1)^3 = 0.001$. A simple decimal place slip when subtracting $0.0075$ and $0.000375$ will easily corrupt your fifth decimal place."
                }
        },
        {
                "id": "004545",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Integration",
                "topic": "Integration",
                "subtopic": [
                        "Algebraic Methods"
                ],
                "img": false,
                "question": "The function $f(x)$ is defined by $f(x) = \\dfrac{ 1 }{ 1 + 2x }$. <br><br><strong>(a)</strong> Show that the first three terms of the binomial expansion of $f(x)$ in ascending powers of $x$ are $1 - 2x + 4x^2$. <br><br><strong>(b)</strong> State the range of values of $x$ for which the expansion found in part (a) is valid. <br><br><strong>(c)</strong> Hence, find an approximation for $\\int_{0}^{0.25} \\dfrac{ 1 }{ 1 + 2x } \\, \\mathrm{d}x$, giving your answer to five decimal places. Fully justify your answer.",
                "steps": [
                        "For part <strong>(a)</strong>, write the expression in index form: <br>\\begin{aligned} \\dfrac{ 1 }{ 1 + 2x } &= \\left( 1 + 2x \\right)^{-1} \\cr \\end{aligned}",
                        "Apply the general binomial expansion $(1 + u)^n = 1 + nu + \\dfrac{ n(n - 1 ) }{ 2! }u^2 + \\dots$ for $n = -1$ and $u = 2x$: <br>\\begin{aligned} \\left( 1 + 2x \\right)^{-1} &\\approx 1 + (-1)(2x) + \\dfrac{ (-1)(-2) }{ 2 }\\left( 2x \\right)^2 \\cr &= 1 - 2x + (1)\\left( 4x^2 \\right) \\cr &= 1 - 2x + 4x^2 \\cr \\end{aligned}",
                        "For part <strong>(b)</strong>, recall that the binomial expansion of $(1 + u)^n$ is valid if and only if $|u| < 1$. Substituting $u = 2x$ gives: <br>\\begin{aligned} |2x| &< 1 \\cr \\end{aligned} <br>This yields the range of validity: <br>\\begin{aligned} |x| &< \\dfrac{ 1 }{ 2 } \\cr \\end{aligned} <br>This can also be written in interval notation as $-\\dfrac{ 1 }{ 2 } < x < \\dfrac{ 1 }{ 2 }$ (or $-0.5 < x < 0.5$).",
                        "For part <strong>(c)</strong>, substitute our binomial expansion into the definite integral: <br>\\begin{aligned} \\int_{0}^{0.25} \\dfrac{ 1 }{ 1 + 2x } \\, \\mathrm{d}x &\\approx \\int_{0}^{0.25} \\left( 1 - 2x + 4x^2 \\right) \\, \\mathrm{d}x \\cr \\end{aligned}",
                        "Integrate the polynomial term-by-term and evaluate: <br>\\begin{aligned} \\int_{0}^{0.25} \\left( 1 - 2x + 4x^2 \\right) \\, \\mathrm{d}x &= \\left[ x - x^2 + \\dfrac{ 4x^3 }{ 3 } \\right]_{0}^{0.25} \\cr &= \\left( 0.25 - (0.25)^2 + \\dfrac{ 4(0.25)^3 }{ 3 } \\right) - (0) \\cr &= 0.25 - 0.0625 + \\dfrac{ 4(0.015625) }{ 3 } \\cr &= 0.1875 + \\dfrac{ 0.0625 }{ 3 } \\cr &\\approx 0.1875 + 0.020833 \\approx 0.20833 \\cr \\end{aligned} <br>Since the upper limit of integration $x = 0.25$ is well within our range of validity $|x| < 0.5$, truncating the binomial expansion after the quadratic term provides a highly justified, accurate approximation (the exact integral evaluates to $\\dfrac{ 1 }{ 2 }\\ln(1.5) \\approx 0.20273$)."
                ],
                "pi_options": [
                        {
                                "ans": "$$0.25000$$",
                                "feedback": "This is incorrect. This error occurs if you evaluated only the leading linear term $x$ at the upper limit of $0.25$, neglecting the quadratic and cubic integration components."
                        },
                        {
                                "ans": "$$0.18750$$",
                                "feedback": "This is incorrect. This error occurs if you forgot to integrate the third term $+4x^2$, evaluating only the first two terms as $x - x^2 = 0.25 - 0.0625 = 0.18750$."
                        },
                        {
                                "ans": "$$0.22917$$",
                                "feedback": "This is incorrect. This error arises from a sign error during the expansion or integration step, such as integrating $(1 - 2x + 4x^2)$ with a positive sign on the $2x$ term."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Base Expansion Verification",
                        "content": "For simple rational functions of the form $\\dfrac{ 1 }{ 1 + kx }$, the binomial expansion is equivalent to the sum of a geometric series with common ratio $-kx$. The expansion is strictly $1 - kx + k^2x^2 - k^3x^3 + \\dots$, which allows you to instantly write down and verify your series terms."
                }
        },
        {
                "id": "004546",
                "board": "OCR",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Quadratics"
                ],
                "img": false,
                "question": "<strong>(i)</strong> Express $3x^2 - 24x + 53$ in the form $a(x + b)^2 + c$, where $a$, $b$, and $c$ are constants to be found.<br><br><strong>(ii)</strong> Use your result from part (i) to show that the equation $3x^2 - 24x + 53 = 0$ has no real roots.<br><br><strong>(iii)</strong> Given instead that the equation $3x^2 - 24x + k = 0$ has repeated roots, find the value of the constant $k$.",
                "steps": [
                        "To complete the square for $3x^2 - 24x + 53$, we first factor out the coefficient of $x^2$ from the $x$ terms:<br><br>\\begin{aligned} 3x^2 - 24x + 53 & = 3(x^2 - 8x) + 53 \\end{aligned}<br><br>Next, we complete the square inside the bracket by halving the coefficient of $x$ (which is $-8$), squaring it, and subtracting it:<br><br>\\begin{aligned} 3(x^2 - 8x) + 53 & = 3\\left[ (x - 4)^2 - 4^2 \\right] + 53 \\cr & = 3\\left[ (x - 4)^2 - 16 \\right] + 53 \\cr & = 3(x - 4)^2 - 48 + 53 \\cr & = 3(x - 4)^2 + 5 \\end{aligned}<br><br>Thus, $a = 3$, $b = -4$, and $c = 5$.",
                        "To show that the equation $3x^2 - 24x + 53 = 0$ has no real roots, we set our completed square form from part (i) to $0$:<br><br>\\begin{aligned} 3(x - 4)^2 + 5 & = 0 \\cr 3(x - 4)^2 & = -5 \\cr (x - 4)^2 & = -\\dfrac{ 5 }{ 3 } \\end{aligned}<br><br>Since the square of any real number must be non-negative (i.e., $(x - 4)^2 \\ge 0$ for all real $x$), it can never equal the negative value $-\\dfrac{ 5 }{ 3 }$. Therefore, the equation has no real roots.",
                        "For the quadratic equation $3x^2 - 24x + k = 0$ to have repeated roots, its discriminant must be exactly equal to zero.<br><br>Comparing $3x^2 - 24x + k = 0$ to the standard form $Ax^2 + Bx + C = 0$, we have $A = 3$, $B = -24$, and $C = k$.<br><br>The discriminant $\\Delta$ is:<br><br>\\begin{aligned} \\Delta & = B^2 - 4AC \\cr & = (-24)^2 - 4(3)(k) \\cr & = 576 - 12k \\end{aligned}<br><br>Setting this discriminant to zero:<br><br>\\begin{aligned} 576 - 12k & = 0 \\cr 12k & = 576 \\cr k & = 48 \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$k = -48$$",
                                "feedback": "This error arises from a sign slip when rearranging $576 - 12k = 0$, leading to $-12k = 576$, which incorrectly yields a negative value for $k$."
                        },
                        {
                                "ans": "$$k = 12$$",
                                "feedback": "This error occurs if you make a major transposition slip during rearrangement, such as simplifying the discriminant equation to $24 - 12k = 0$ instead of using $(-24)^2 = 576$."
                        },
                        {
                                "ans": "$$k = 192$$",
                                "feedback": "This error occurs if you omit the factor of $4$ in the discriminant formula, using $\\Delta = B^2 - AC = 0$, which leads to $576 - 3k = 0$ and $k = 192$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Complete Factorization First",
                        "content": "When completing the square for quadratic expressions with a leading coefficient other than $1$, such as $3x^2 - 24x + 53$, always factor out the leading coefficient $3$ from the variable terms first. A very common student slip is to forget to multiply the subtracted term inside the brackets by this leading factor (e.g., subtracting $16$ instead of $3 \\times 16 = 48$). This is a major source of dropped marks in exams."
                }
        },
        {
                "id": "004547",
                "board": "OCR",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Differentiation",
                        "Quadratics"
                ],
                "img": false,
                "question": "<strong>(i)</strong> Express $17 + 8x - 2x^2$ in the form $p - q(x + r)^2$, where $p$, $q$, and $r$ are constants to be found.<br><br><strong>(ii)</strong> State the coordinates of the maximum point of the curve $y = 17 + 8x - 2x^2$ and explain why the equation $17 + 8x - 2x^2 = 30$ has no real solutions.<br><br><strong>(iii)</strong> Given that the equation $c + 8x - 2x^2 = 0$ has two distinct real roots, find the range of possible values for the constant $c$.",
                "steps": [
                        "To complete the square for $17 + 8x - 2x^2$, we first rearrange the terms in descending powers of $x$ and factor out $-2$ from the $x$ terms:<br><br>\\begin{aligned} -2x^2 + 8x + 17 & = -2(x^2 - 4x) + 17 \\end{aligned}<br><br>Now, we complete the square for the expression inside the bracket by halving the coefficient of $x$ (which is $-4$), squaring it, and subtracting it:<br><br>\\begin{aligned} -2(x^2 - 4x) + 17 & = -2\\left[ (x - 2)^2 - 2^2 \\right] + 17 \\cr & = -2\\left[ (x - 2)^2 - 4 \\right] + 17 \\cr & = -2(x - 2)^2 + 8 + 17 \\cr & = 25 - 2(x - 2)^2 \\end{aligned}<br><br>Thus, $p = 25$, $q = 2$, and $r = -2$.",
                        "For the curve $y = 25 - 2(x - 2)^2$, since the term $-2(x - 2)^2 \\le 0$ for all real $x$, the maximum possible value of $y$ is $25$, which occurs when $(x - 2)^2 = 0 \\implies x = 2$.<br><br>Therefore, the coordinates of the maximum point are $(2, 25)$.<br><br>To explain why $17 + 8x - 2x^2 = 30$ has no real solutions, we set our completed square form to $30$:<br><br>\\begin{aligned} 25 - 2(x - 2)^2 & = 30 \\cr -2(x - 2)^2 & = 5 \\cr (x - 2)^2 & = -2.5 \\end{aligned}<br><br>Since the square of any real number must be non-negative (i.e., $(x - 2)^2 \\ge 0$), it cannot equal the negative value $-2.5$. Thus, there are no real solutions.",
                        "To find the range of $c$ for which $-2x^2 + 8x + c = 0$ has two distinct real roots, we look at its discriminant $\\Delta$.<br><br>Here, $A = -2$, $B = 8$, and $C = c$. The discriminant is:<br><br>\\begin{aligned} \\Delta & = B^2 - 4AC \\cr & = 8^2 - 4(-2)(c) \\cr & = 64 + 8c \\end{aligned}<br><br>For two distinct real roots, we require $\\Delta > 0$:<br><br>\\begin{aligned} 64 + 8c & > 0 \\cr 8c & > -64 \\cr c & > -8 \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$c < -8$$",
                                "feedback": "This error occurs if you incorrectly flip the inequality sign when dividing by the positive number $8$ in the final step of rearranging $8c > -64$."
                        },
                        {
                                "ans": "$$c > -2$$",
                                "feedback": "This mistake comes from a calculation slip in the discriminant where the multiplication of $4AC$ is computed as $4(-2)c = -8c$ and the subtraction from $B^2$ is forgotten, leading to $64 - 32c > 0 \\implies c > -2$."
                        },
                        {
                                "ans": "$$c < 8$$",
                                "feedback": "This error occurs if you make a sign error inside the discriminant itself, calculating $\\Delta = 64 - 8c > 0$, which leads to $c < 8$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Max Point of Negative Quadratics",
                        "content": "For a negative quadratic $p - q(x + r)^2$, the maximum value is always $p$ because the term $-q(x + r)^2$ is always less than or equal to zero for all real $x$. Remembering this simple relationship saves valuable time compared to expanding the quadratic and using calculus to find stationary points!"
                }
        },
        {
                "id": "004548",
                "board": "OCR",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Differentiation",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Quadratics",
                        "Tangents and Normals"
                ],
                "img": false,
                "question": "<strong>(i)</strong> Express $2x^2 - 5x + 6$ in the form $a(x + b)^2 + c$, where $a$, $b$, and $c$ are constants to be found.<br><br><strong>(ii)</strong> Hence, find the minimum distance from the curve $y = 2x^2 - 5x + 6$ to the $x$-axis.<br><br><strong>(iii)</strong> The line $y = mx - 2$ is a tangent to the curve $y = 2x^2 - 5x + 6$. Find the possible values of the constant $m$.",
                "steps": [
                        "To complete the square for $2x^2 - 5x + 6$, we first factor out the coefficient $2$ from the $x$ terms:<br><br>\\begin{aligned} 2x^2 - 5x + 6 & = 2\\left( x^2 - \\dfrac{ 5 }{ 2 }x \\right) + 6 \\end{aligned}<br><br>Next, we complete the square inside the bracket by halving $-\\dfrac{ 5 }{ 2 }$ to get $-\\dfrac{ 5 }{ 4 }$, squaring it, and subtracting it:<br><br>\\begin{aligned} 2\\left( x^2 - \\dfrac{ 5 }{ 2 }x \\right) + 6 & = 2\\left[ \\left( x - \\dfrac{ 5 }{ 4 } \\right)^2 - \\left( \\dfrac{ 5 }{ 4 } \\right)^2 \\right] + 6 \\cr & = 2\\left[ \\left( x - \\dfrac{ 5 }{ 4 } \\right)^2 - \\dfrac{ 25 }{ 16 } \\right] + 6 \\cr & = 2\\left( x - \\dfrac{ 5 }{ 4 } \\right)^2 - \\dfrac{ 25 }{ 8 } + 6 \\cr & = 2\\left( x - \\dfrac{ 5 }{ 4 } \\right)^2 + \\dfrac{ 23 }{ 8 } \\end{aligned}<br><br>Thus, $a = 2$, $b = -\\dfrac{ 5 }{ 4 }$, and $c = \\dfrac{ 23 }{ 8 }$.",
                        "The minimum point on the curve $y = 2\\left( x - \\dfrac{ 5 }{ 4 } \\right)^2 + \\dfrac{ 23 }{ 8 }$ occurs where the squared term is zero, which is at $x = \\dfrac{ 5 }{ 4 }$. At this point, the $y$-value is $\\dfrac{ 23 }{ 8 }$.<br><br>Since the minimum $y$-coordinate of the curve is positive, the minimum distance from the curve to the $x$-axis is simply this minimum vertical height:<br><br>\\begin{aligned} \\text{Minimum distance} & = \\dfrac{ 23 }{ 8 } \\end{aligned}",
                        "To find when the line $y = mx - 2$ is tangent to the curve $y = 2x^2 - 5x + 6$, we set their equations equal to find their intersection points:<br><br>\\begin{aligned} 2x^2 - 5x + 6 & = mx - 2 \\cr 2x^2 - (5 + m)x + 8 & = 0 \\end{aligned}<br><br>For the line to be a tangent, this combined quadratic equation must have exactly one real solution, meaning its discriminant $\\Delta$ must equal zero.<br><br>Here, $A = 2$, $B = -(5 + m)$, and $C = 8$. The discriminant is:<br><br>\\begin{aligned} \\Delta & = B^2 - 4AC \\cr & = [-(5 + m)]^2 - 4(2)(8) \\cr & = (5 + m)^2 - 64 \\end{aligned}<br><br>Setting the discriminant to zero:<br><br>\\begin{aligned} (5 + m)^2 - 64 & = 0 \\cr (5 + m)^2 & = 64 \\cr 5 + m & = \\pm 8 \\end{aligned}<br><br>This gives two possibilities:<br><br>\\begin{aligned} 5 + m = 8 & \\implies m = 3 \\cr 5 + m = -8 & \\implies m = -13 \\end{aligned}<br><br>Thus, the possible values of $m$ are $m = 3$ or $m = -13$."
                ],
                "pi_options": [
                        {
                                "ans": "$$m = 3 \\text{ or } m = -3$$",
                                "feedback": "This error typically occurs if you expand $(5+m)^2$ incorrectly, forgetting the linear middle term $10m$, which leads to $m^2 + 25 - 64 = 0$ and yields $\\pm \\sqrt{ 39 }$, or if you confuse the quadratic constant with another term."
                        },
                        {
                                "ans": "$$m = 13 \\text{ or } m = -3$$",
                                "feedback": "This results from a sign slip after correctly getting $5 + m = \\pm 8$, but incorrectly rearranging it to $m = -5 \\pm 8$, giving the opposite signs."
                        },
                        {
                                "ans": "$$m = -3 \\text{ or } m = -13$$",
                                "feedback": "This is a sign transposition mistake where the positive branch $5 + m = 8$ is incorrectly rearranged to $m = -3$ instead of $m = 3$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Tangents and the Discriminant",
                        "content": "When a line is tangent to a quadratic curve, their combined intersection equation has exactly one real solution. This means you must set the discriminant of the combined equation $2x^2 - (5 + m)x + 8 = 0$ to zero. Be extremely careful when working with quadratic brackets like $(5 + m)^2$\u2014it is best to solve directly as $(5 + m)^2 = 64 \\implies 5 + m = \\pm 8$ to avoid expansion errors."
                }
        },
        {
                "id": "004549",
                "board": "OCR",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Integration",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Integration",
                        "Quadratics"
                ],
                "img": false,
                "question": "<strong>(i)</strong> By completing the square on the quadratic expression $4u^2 - 12u + 13$, show that $4u^2 - 12u + 13 \\ge 4$ for all real values of $u$.<br><br><strong>(ii)</strong> Hence, or otherwise, prove that the equation $4\\cos^2\\theta - 12\\cos\\theta + 13 = w$ has no real solutions for any constant $w < 5$.<br><br><strong>(iii)</strong> Given instead that the quadratic equation $4u^2 - 12u + d = 0$ has no real roots, find the range of possible values for the constant $d$.",
                "steps": [
                        "To complete the square for $4u^2 - 12u + 13$, we can factor out the coefficient $4$ from the $u$ terms:<br><br>\\begin{aligned} 4u^2 - 12u + 13 & = 4\\left( u^2 - 3u \\right) + 13 \\end{aligned}<br><br>Next, we complete the square inside the bracket by halving the coefficient of $u$ (which is $-3$), squaring it, and subtracting it:<br><br>\\begin{aligned} 4\\left[ \\left( u - \\dfrac{ 3 }{ 2 } \\right)^2 - \\left(\\dfrac{ 3 }{ 2 }\\right)^2 \\right] + 13 & = 4\\left[ \\left( u - \\dfrac{ 3 }{ 2 } \\right)^2 - \\dfrac{ 9 }{ 4 } \\right] + 13 \\cr & = 4\\left( u - \\dfrac{ 3 }{ 2 } \\right)^2 - 9 + 13 \\cr & = 4\\left( u - \\dfrac{ 3 }{ 2 } \\right)^2 + 4 \\end{aligned}<br><br>Since the squared term $4\\left( u - \\dfrac{ 3 }{ 2 } \\right)^2 \\ge 0$ for all real values of $u$, we have:<br><br>\\begin{aligned} 4\\left( u - \\dfrac{ 3 }{ 2 } \\right)^2 + 4 & \\ge 4 \\end{aligned}<br><br>Thus, $4u^2 - 12u + 13 \\ge 4$ for all real values of $u$.",
                        "Let $u = \\cos\\theta$. Since $\\theta$ is a real number, the domain of $u$ is strictly restricted to the interval $[-1, 1]$.<br><br>Using our result from part (i), the expression becomes:<br><br>\\begin{aligned} f(u) & = 4\\left( u - \\dfrac{ 3 }{ 2 } \\right)^2 + 4 \\end{aligned}<br><br>The vertex of this quadratic function is at $\\left( \\dfrac{ 3 }{ 2 }, 4 \\right)$. However, the $u$-coordinate of this vertex is $1.5$, which lies strictly outside the interval $[-1, 1]$.<br><br>Since the quadratic curve opens upwards and its vertex is to the right of the interval $[-1, 1]$, the function is strictly decreasing on the interval $[-1, 1]$.<br><br>Therefore, the minimum value of $f(u)$ on this interval occurs at the right-hand boundary, where $u = 1$:<br><br>\\begin{aligned} f(1) & = 4\\left( 1 - \\dfrac{ 3 }{ 2 } \\right)^2 + 4 \\cr & = 4\\left( -\\dfrac{ 1 }{ 2 } \\right)^2 + 4 \\cr & = 4\\left( \\dfrac{ 1 }{ 4 } \\right) + 4 \\cr & = 5 \\end{aligned}<br><br>The maximum value occurs at the left-hand boundary, where $u = -1$:<br><br>\\begin{aligned} f(-1) & = 4\\left( -1 - \\dfrac{ 3 }{ 2 } \\right)^2 + 4 \\cr & = 4\\left( -\\dfrac{ 5 }{ 2 } \\right)^2 + 4 \\cr & = 4\\left( \\dfrac{ 25 }{ 4 } \\right) + 4 \\cr & = 29 \\end{aligned}<br><br>This means that for all real values of $\\theta$, the range of the expression is $5 \\le 4\\cos^2\\theta - 12\\cos\\theta + 13 \\le 29$.<br><br>Since the minimum possible value of the expression is $5$, the equation $4\\cos^2\\theta - 12\\cos\\theta + 13 = w$ can never have any real solutions for any constant $w < 5$.",
                        "For the quadratic equation $4u^2 - 12u + d = 0$ to have no real roots, its discriminant $\\Delta$ must be strictly negative.<br><br>Here, $A = 4$, $B = -12$, and $C = d$. The discriminant is:<br><br>\\begin{aligned} \\Delta & = B^2 - 4AC \\cr & = (-12)^2 - 4(4)(d) \\cr & = 144 - 16 d \\end{aligned}<br><br>We require $\\Delta < 0$:<br><br>\\begin{aligned} 144 - 16d & < 0 \\cr 16d & > 144 \\cr d & > 9 \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$d < 9$$",
                                "feedback": "This error occurs from an inequality sign slip when rearranging $144 - 16d < 0$, incorrectly maintaining the '<' sign as $d < 9$ instead of flipping it when dividing by the negative coefficient $-16$."
                        },
                        {
                                "ans": "$$d > 3$$",
                                "feedback": "This error arises if the factor of $4$ in the discriminant formula is omitted, or if $A=4$ is substituted incorrectly, leading to an incorrect inequality limit."
                        },
                        {
                                "ans": "$$d < -9$$",
                                "feedback": "This is caused by a sign error inside the discriminant where the expression is written as $144 + 16d < 0$, yielding $16d < -144 \\implies d < -9$."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Domain Restrictions and Boundary Values",
                        "content": "In substitution problems like $u = \\cos\\theta$, you must respect the restricted domain $[-1, 1]$. Even though the algebraic vertex of the quadratic lies at $u = 1.5$, this value is impossible for $\\cos\\theta$. The actual minimum of the expression on this domain occurs at the boundary $u = 1$, where the curve is closest to the vertex. Always check your boundaries when working with trigonometric domains!"
                }
        },
        {
                "id": "004550",
                "board": "OCR",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Inequalities",
                        "Quadratics"
                ],
                "img": false,
                "question": "<strong>(i)</strong> Express $x^2 + 2kx + (3k + 4)$ in the form $(x + p)^2 + q$, where $p$ and $q$ are expressed in terms of the constant $k$.<br><br><strong>(ii)</strong> Find the values of $k$ for which the minimum value of the quadratic expression $y = x^2 + 2kx + (3k + 4)$ is equal to zero.<br><br><strong>(iii)</strong> Find the set of values of $k$ for which the curve $y = x^2 + 2kx + (3k + 4)$ lies entirely above the $x$-axis.",
                "steps": [
                        "To complete the square for $x^2 + 2kx + (3k + 4)$, we halve the coefficient of $x$ (which is $2k$) to get $k$, square it, and subtract it:<br><br>\\begin{aligned} x^2 + 2kx + (3k + 4) & = (x + k)^2 - k^2 + 3k + 4 \\end{aligned}<br><br>Thus, $p = k$ and $q = -k^2 + 3k + 4$.",
                        "The minimum value of the quadratic curve $y = (x + k)^2 - k^2 + 3k + 4$ occurs at its vertex, where $(x + k)^2 = 0$. This minimum value is $q = -k^2 + 3k + 4$.<br><br>We want this minimum value to be exactly zero:<br><br>\\begin{aligned} -k^2 + 3k + 4 & = 0 \\cr k^2 - 3k - 4 & = 0 \\end{aligned}<br><br>Factoring this quadratic equation:<br><br>\\begin{aligned} (k - 4)(k + 1) & = 0 \\end{aligned}<br><br>This yields:<br><br>\\begin{aligned} k = 4 \\quad \\text{or} \\quad k = -1 \\end{aligned}",
                        "For the curve to lie entirely above the $x$-axis, its minimum value must be strictly greater than zero (or equivalently, its discriminant must be strictly less than zero).<br><br>Using the minimum value $q = -k^2 + 3k + 4$:<br><br>\\begin{aligned} -k^2 + 3k + 4 & > 0 \\cr k^2 - 3k - 4 & < 0 \\end{aligned}<br><br>Factoring the expression:<br><br>\\begin{aligned} (k - 4)(k + 1) & < 0 \\end{aligned}<br><br>For the product to be negative, the value of $k$ must lie strictly between the roots of the corresponding equation. Therefore, the set of values is:<br><br>\\begin{aligned} -1 < k < 4 \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$k < -1 \\text{ or } k > 4$$",
                                "feedback": "This is a standard inequality region error. This set represents the region where the quadratic is positive ($k^2 - 3k - 4 > 0$), which would correspond to the curve having a minimum value less than zero (meaning it has two distinct real roots)."
                        },
                        {
                                "ans": "$$-4 < k < 1$$",
                                "feedback": "This is caused by factoring the quadratic as $(k + 4)(k - 1) < 0$ due to a sign slip in the linear coefficient $-3k$ during the factorization process."
                        },
                        {
                                "ans": "$$-1 \\le k \\le 4$$",
                                "feedback": "This error uses non-strict inequalities. If $k = -1$ or $k = 4$, the minimum value of the curve is exactly zero, meaning it touches the $x$-axis rather than lying strictly above it."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Strict vs. Non-Strict Inequalities",
                        "content": "When a question states that a curve lies *entirely above* the $x$-axis, the minimum value must be strictly greater than zero ($y > 0$). This corresponds to a strict inequality $-1 < k < 4$. Using non-strict inequalities like $-1 \\le k \\le 4$ is a costly error, as it would allow the curve to touch the $x$-axis."
                }
        }
];