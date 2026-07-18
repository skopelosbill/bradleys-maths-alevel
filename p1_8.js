window.ALEVEL_QUESTIONS = [
    {
        "id": "04351",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Curve Sketching",
        "subtopic": [
            "Stationary Points",
            "Cubic Graphs",
            "Definite Integration"
        ],
        "img": false,
        "question": "A curve $C$ has equation $y = f(x)$ where $f(x) = x^3 - 6x^2$.<br><br><strong>Part (a)</strong> Find the coordinates of the stationary points of $C$ and determine their nature.<br><strong>Part (b)</strong> Sketch the curve $C$, clearly indicating the coordinates of the stationary points and the points where the curve crosses the coordinate axes.<br><strong>Part (c)</strong> Without performing the integration, state whether the integral below is positive or negative, giving a clear reason for your answer:<br>$$\\int_{ 2 }^{ 6 } (x^3 - 6x^2) \\,\\text{d}x$$",
        "steps": [
            "<strong>Step 1: Find the first derivative of the function</strong><br>To find the stationary points, we first differentiate $f(x) = x^3 - 6x^2$ with respect to $x$:<br>\\begin{aligned}\n\\dfrac{\\text{d}y}{\\text{d}x} &= 3x^2 - 12x\n\\end{aligned}",
            "<strong>Step 2: Solve for the stationary points</strong><br>Set the first derivative equal to zero to find the critical values of $x$:<br>\\begin{aligned}\n3x^2 - 12x &= 0 \\cr\n3x(x - 4) &= 0 \\cr\nx = 0 \\quad &\\text{or} \\quad x = 4\n\\end{aligned}<br>Substitute these values of $x$ back into the original equation to find their corresponding $y$-coordinates:<ul><li>For $x = 0$: $y = 0^3 - 6(0)^2 = 0 \\implies (0, 0)$</li><li>For $x = 4$: $y = 4^3 - 6(4)^2 = 64 - 96 = -32 \\implies (4, -32)$</li></ul>",
            "<strong>Step 3: Determine the nature of the stationary points</strong><br>Find the second derivative of the function:<br>\\begin{aligned}\n\\dfrac{\\text{d}^2y}{\\text{d}x^2} &= 6x - 12\n\\end{aligned}<br>Evaluate the second derivative at each critical point:<ul><li>At $x = 0$: $\\dfrac{\\text{d}^2y}{\\text{d}x^2} = 6(0) - 12 = -12 < 0$, which indicates that $(0, 0)$ is a <strong>local maximum</strong>.</li><li>At $x = 4$: $\\dfrac{\\text{d}^2y}{\\text{d}x^2} = 6(4) - 12 = 12 > 0$, which indicates that $(4, -32)$ is a <strong>local minimum</strong>.</li></ul>",
            "<strong>Step 4: Find the coordinate intercepts and sketch the curve</strong><br>Find where the curve crosses the axes:<ul><li>$y$-intercept: Setting $x = 0 \\implies y = 0 \\implies (0, 0)$</li><li>$x$-intercepts: Setting $y = 0 \\implies x^3 - 6x^2 = 0 \\implies x^2(x - 6) = 0 \\implies x = 0 \\text{ (touching point)} \\text{ and } x = 6 \\text{ (crossing point)}.$</li></ul>Using these key features, the sketch of the curve $C$ is shown below:<br><br><img src='images/p1/04351_ans1.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
            "<strong>Step 5: Determine the sign of the definite integral</strong><br>Over the interval $[2, 6]$, the curve lies entirely on or below the $x$-axis (since the intercepts are at $0$ and $6$, and the local minimum is at $(4, -32)$). Since the area is located entirely beneath the $x$-axis, the value of the integral must be <strong>negative</strong>."
        ],
        "pi_options": [
            {
                "ans": "Stationary points: $(0,0)$ (Min), $(4,-32)$ (Max); Intercepts: $(0,0)$, $(6,0)$; Integral: Negative",
                "feedback": "Check your second derivative test. At $x = 0$, $\\dfrac{\\text{d}^2y}{\\text{d}x^2} = -12 < 0$, which means $(0,0)$ must be a local maximum, not a minimum. At $x = 4$, $\\dfrac{\\text{d}^2y}{\\text{d}x^2} = 12 > 0$, making $(4,-32)$ a local minimum, not a maximum."
            },
            {
                "ans": "Stationary points: $(0,0)$ (Max), $(4,-32)$ (Min); Intercepts: $(0,0)$, $(6,0)$; Integral: Positive",
                "feedback": "Your stationary points are correct, but look closely at the graph between $x = 2$ and $x = 6$. The curve lies entirely below the $x$-axis in this interval. Since definite integration calculates the signed area, any area below the $x$-axis evaluates to a negative value."
            },
            {
                "ans": "Stationary points: $(0,0)$ (Max), $(4,-16)$ (Min); Intercepts: $(0,0)$, $(6,0)$; Integral: Negative",
                "feedback": "Check your calculation of the $y$-coordinate for the stationary point at $x = 4$. Substituting $x = 4$ into $y = x^3 - 6x^2$ gives $4^3 - 6(4^2) = 64 - 96 = -32$, not $-16$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Qualitative Integration",
            "content": "To determine the sign of a definite integral qualitatively, always look at your sketch. If the curve lies entirely below the $x$-axis over the boundaries of integration, the integral evaluates to a negative value. There is no need to calculate the actual integral."
        }
    },
    {
        "id": "04352",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Curve Sketching",
        "subtopic": [
            "Stationary Points",
            "Cubic Graphs",
            "Root Analysis"
        ],
        "img": false,
        "question": "A curve $C$ has equation $y = 2x^3 - 3x^2 - 12x + 8$.<br><br><strong>Part (a)</strong> Find the coordinates of the stationary points of $C$ and determine their nature.<br><strong>Part (b)</strong> Sketch the curve $C$, clearly indicating the coordinates of the stationary points and the $y$-intercept.<br><strong>Part (c)</strong> Using your sketch, state the number of distinct real roots of the equation $2x^3 - 3x^2 - 12x + 8 = 0$, giving a clear reason for your answer.",
        "steps": [
            "<strong>Step 1: Differentiate the function</strong><br>Find the first derivative of $y = 2x^3 - 3x^2 - 12x + 8$:<br>\\begin{aligned}\n\\dfrac{\\text{d}y}{\\text{d}x} &= 6x^2 - 6x - 12\n\\end{aligned}",
            "<strong>Step 2: Solve for the stationary points</strong><br>Set the derivative equal to zero and factorise to find the critical values of $x$:<br>\\begin{aligned}\n6(x^2 - x - 2) &= 0 \\cr\n6(x - 2)(x + 1) &= 0\n\\end{aligned}<br>This yields $x = 2$ and $x = -1$. Now find the corresponding $y$-coordinates:<ul><li>For $x = -1$: $y = 2(-1)^3 - 3(-1)^2 - 12(-1) + 8 = -2 - 3 + 12 + 8 = 15 \\implies (-1, 15)$</li><li>For $x = 2$: $y = 2(2)^3 - 3(2)^2 - 12(2) + 8 = 16 - 12 - 24 + 8 = -12 \\implies (2, -12)$</li></ul>",
            "<strong>Step 3: Determine the nature of the stationary points</strong><br>Find the second derivative:<br>\\begin{aligned}\n\\dfrac{\\text{d}^2y}{\\text{d}x^2} &= 12x - 6\n\\end{aligned}<br>Evaluate the second derivative at each critical value:<ul><li>At $x = -1$: $\\dfrac{\\text{d}^2y}{\\text{d}x^2} = 12(-1) - 6 = -18 < 0 \\implies (-1, 15)$ is a <strong>local maximum</strong>.</li><li>At $x = 2$: $\\dfrac{\\text{d}^2y}{\\text{d}x^2} = 12(2) - 6 = 18 > 0 \\implies (2, -12)$ is a <strong>local minimum</strong>.</li></ul>",
            "<strong>Step 4: Sketch the curve</strong><br>Find the $y$-intercept by setting $x = 0 \\implies y = 8 \\implies (0, 8)$. Sketch the positive cubic shape passing through $(-1, 15)$ as a maximum, $(0,8)$ as the intercept, and $(2, -12)$ as a minimum:<br><br><img src='images/p1/04352_ans1.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
            "<strong>Step 5: Determine the number of real roots</strong><br>From the sketch, we observe that the local maximum $y$-value is positive ($15$) and the local minimum $y$-value is negative ($-12$). Since the curve must cross the $x$-axis between these values, it intersects the $x$-axis exactly **three** times. Therefore, there are exactly <strong>three distinct real roots</strong>."
        ],
        "pi_options": [
            {
                "ans": "Stationary points: $(-1,15)$ (Max), $(2,-12)$ (Min); Intercept: $(0,8)$; Roots: 1",
                "feedback": "Your stationary points and intercept are correct, but think about the shape. Since the local maximum lies above the $x$-axis ($y = 15$) and the local minimum lies below the $x$-axis ($y = -12$), the curve must transition from positive to negative, crossing the $x$-axis 3 times in total."
            },
            {
                "ans": "Stationary points: $(-1,9)$ (Max), $(2,-12)$ (Min); Intercept: $(0,8)$; Roots: 3",
                "feedback": "Check your calculation of the $y$-coordinate for $x = -1$. Evaluating $y = 2(-1)^3 - 3(-1)^2 - 12(-1) + 8$ gives $-2 - 3 + 12 + 8 = 15$, not $9$."
            },
            {
                "ans": "Stationary points: $(-1,15)$ (Min), $(2,-12)$ (Max); Intercept: $(0,8)$; Roots: 3",
                "feedback": "Check your second derivative test. Since $\\dfrac{\\text{d}^2y}{\\text{d}x^2} = 12x - 6$, at $x = -1$ we get $-18 < 0$, making it a local maximum. At $x = 2$ we get $18 > 0$, making it a local minimum."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Stationary Points and Roots",
            "content": "The coordinates of the local turning points of a cubic equation are a powerful tool for determining the number of roots. If $y_{\\text{max}} \\cdot y_{\\text{min}} < 0$, the cubic must cross the $x$-axis three times (3 real roots). If $y_{\\text{max}} \\cdot y_{\\text{min}} > 0$, it only crosses once (1 real root)."
        }
    },
    {
        "id": "04353",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Curve Sketching",
        "subtopic": [
            "Stationary Points",
            "Cubic Graphs",
            "Definite Integration"
        ],
        "img": false,
        "question": "A curve $C$ has equation $y = 12x - x^3$.<br><br><strong>Part (a)</strong> Find the coordinates of the stationary points of $C$ and determine their nature.<br><strong>Part (b)</strong> Sketch the curve $C$, clearly indicating the coordinates of the stationary points and the points where the curve crosses the coordinate axes.<br><strong>Part (c)</strong> Without performing the integration, state whether the integral below is positive or negative, giving a clear reason for your answer:<br>$$\\int_{ 0 }^{ \\sqrt{ 12 } } (12x - x^3) \\,\\text{d}x$$",
        "steps": [
            "<strong>Step 1: Differentiate the function</strong><br>Differentiate $y = 12x - x^3$ with respect to $x$:<br>\\begin{aligned}\n\\dfrac{\\text{d}y}{\\text{d}x} &= 12 - 3x^2\n\\end{aligned}",
            "<strong>Step 2: Find the stationary points</strong><br>Set the derivative equal to zero to find the critical values of $x$:<br>\\begin{aligned}\n12 - 3x^2 &= 0 \\cr\n3(4 - x^2) &= 0 \\cr\nx = 2 \\quad &\\text{or} \\quad x = -2\n\\end{aligned}<br>Substitute these back into the original equation to find their $y$-coordinates:<ul><li>For $x = 2$: $y = 12(2) - 2^3 = 24 - 8 = 16 \\implies (2, 16)$</li><li>For $x = -2$: $y = 12(-2) - (-2)^3 = -24 - (-8) = -16 \\implies (-2, -16)$</li></ul>",
            "<strong>Step 3: Determine the nature of the stationary points</strong><br>Find the second derivative of the curve:<br>\\begin{aligned}\n\\dfrac{\\text{d}^2y}{\\text{d}x^2} &= -6x\n\\end{aligned}<br>Evaluate the second derivative at each critical point:<ul><li>At $x = 2$: $\\dfrac{\\text{d}^2y}{\\text{d}x^2} = -6(2) = -12 < 0 \\implies (2, 16)$ is a <strong>local maximum</strong>.</li><li>At $x = -2$: $\\dfrac{\\text{d}^2y}{\\text{d}x^2} = -6(-2) = 12 > 0 \\implies (-2, -16)$ is a <strong>local minimum</strong>.</li></ul>",
            "<strong>Step 4: Determine coordinate intercepts and sketch</strong><br>Find where the curve crosses the axes:<ul><li>$y$-intercept: Setting $x = 0 \\implies y = 0 \\implies (0, 0)$</li><li>$x$-intercepts: Setting $y = 0 \\implies x(12 - x^2) = 0 \\implies x = 0 \\text{ or } x = \\pm\\sqrt{ 12 } \\approx \\pm 3.46$</li></ul>Using these features, the sketch of the curve $C$ is shown below:<br><br><img src='images/p1/04353_ans1.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
            "<strong>Step 5: Determine the sign of the definite integral</strong><br>Over the interval $[0, \\sqrt{ 12 }]$, the curve lies entirely on or above the $x$-axis (since the boundary roots are at $0$ and $\\sqrt{ 12 }$, and the local maximum at $x = 2$ is positive). Since the area is located entirely above the $x$-axis, the integral must be <strong>positive</strong>."
        ],
        "pi_options": [
            {
                "ans": "Stationary points: $(2,16)$ (Max), $(-2,-32)$ (Min); Intercepts: $(0,0)$, $(\\pm\\sqrt{ 12 },0)$; Integral: Positive",
                "feedback": "Be very careful with sign evaluation. Substituting $x = -2$ into $y = 12x - x^3$ gives $12(-2) - (-2)^3 = -24 - (-8) = -24 + 8 = -16$, not $-32$. This is a very common sign error when cubing negative bases."
            },
            {
                "ans": "Stationary points: $(2,16)$ (Max), $(-2,-16)$ (Min); Intercepts: $(0,0)$, $(\\pm\\sqrt{ 12 },0)$; Integral: Negative",
                "feedback": "Your stationary points are correct, but check the sign of the integral over the interval $[0, \\sqrt{ 12 }]$. Within this domain, the function lies above the $x$-axis, meaning the signed area must be positive."
            },
            {
                "ans": "Stationary points: $(2,16)$ (Min), $(-2,-16)$ (Max); Intercepts: $(0,0)$, $(\\pm\\sqrt{ 12 },0)$; Integral: Positive",
                "feedback": "Check your second derivative test. Since $\\dfrac{\\text{d}^2y}{\\text{d}x^2} = -6x$, at $x = 2$ we get $-12 < 0 \\implies$ local maximum, and at $x = -2$ we get $12 > 0 \\implies$ local minimum."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Cubing Negative Numbers",
            "content": "When evaluating terms like $-x^3$ with a negative value of $x$, always write out the expansion step-by-step: $-(-2)^3 = -(-8) = +8$. Forgetting that cubing a negative base maintains the negative sign is one of the most common ways to lose marks."
        }
    },
    {
        "id": "04354",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Curve Sketching",
        "subtopic": [
            "Asymptotes",
            "Hyperbolas",
            "Reciprocal Graphs"
        ],
        "img": false,
        "question": "A curve $C$ has equation $y = 2 + \\dfrac{ 1 }{ x - 1 }$.<br><br><strong>Part (a)</strong> State the equations of the vertical and horizontal asymptotes of $C$.<br><strong>Part (b)</strong> Find the coordinates of the points where $C$ crosses the coordinate axes.<br><strong>Part (c)</strong> Sketch the curve $C$, clearly indicating the asymptotes and the coordinates of the intersection points with the coordinate axes.",
        "steps": [
            "<strong>Step 1: Identify the asymptotes</strong><br>The vertical asymptote occurs where the denominator of the fraction is equal to zero, causing the function to be undefined:<br>\\begin{aligned}\nx - 1 &= 0 \\implies x = 1\n\\end{aligned}<br>The horizontal asymptote is found by observing the behavior of $y$ as $x \\to \\pm\\infty$. As $x$ becomes extremely large, $\\dfrac{ 1 }{ x - 1 } \\to 0$:<br>\\begin{aligned}\ny &\\to 2 + 0 \\implies y = 2\n\\end{aligned}",
            "<strong>Step 2: Find the axis intercepts</strong><br>Find the coordinates of the intercepts:<ul><li>$y$-intercept: Setting $x = 0 \\implies y = 2 + \\dfrac{ 1 }{ 0 - 1 } = 2 - 1 = 1 \\implies (0, 1)$</li><li>$x$-intercept: Setting $y = 0$:<br>\\begin{aligned}\n0 &= 2 + \\dfrac{ 1 }{ x - 1 } \\cr\n\\dfrac{ 1 }{ x - 1 } &= -2 \\cr\nx - 1 &= -0.5 \\cr\nx &= 0.5 \\implies (0.5, 0)\n\\end{aligned}</li></ul>",
            "<strong>Step 3: Sketch the curve</strong><br>This is a translated reciprocal curve of $y = \\dfrac{ 1 }{ x }$. Draw the asymptotes $x = 1$ and $y = 2$ as dashed lines, and sketch the branches passing through $(0, 1)$ and $(0.5, 0):$<br><br><img src='images/p1/04354_ans1.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>"
        ],
        "pi_options": [
            {
                "ans": "Asymptotes: $x=1, y=2$; Intercepts: $(0,-1), (0.5,0)$",
                "feedback": "Check your $y$-intercept calculation. When $x = 0$, $y = 2 + \\dfrac{ 1 }{ 0 - 1 } = 2 - 1 = 1$, not $-1$."
            },
            {
                "ans": "Asymptotes: $x=-1, y=2$; Intercepts: $(0,1), (0.5,0)$",
                "feedback": "Check your vertical asymptote. The denominator is $x - 1$, which is undefined when $x = 1$, so the vertical asymptote is $x = 1$, not $x = -1$."
            },
            {
                "ans": "Asymptotes: $x=1, y=2$; Intercepts: $(0,1), (2,0)$",
                "feedback": "Check your algebra when solving for the $x$-intercept. Setting $y = 0 \\implies \\dfrac{ 1 }{ x - 1 } = -2 \\implies x - 1 = -0.5$, which yields $x = 0.5$, not $2$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Asymptote Anchors",
            "content": "When sketching reciprocal functions, always draw the asymptotes first as dashed lines and label them with their equations. These act as boundaries that anchor your curve branches, ensuring your sketch is neat and mathematically accurate."
        }
    },
    {
        "id": "04355",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Curve Sketching",
        "subtopic": [
            "Quadratic Graphs",
            "Graph Transformations",
            "Turning Points"
        ],
        "img": false,
        "question": "A curve $C$ has equation $y = f(x)$, where $f(x) = 9 - x^2$.<br><br><strong>Part (a)</strong> Sketch the graph of $y = f(x)$, indicating the coordinates of the turning point and the intercepts with the axes.<br><strong>Part (b)</strong> On separate sets of axes, sketch the graphs of:<ul><li>(i) $y = f(x) - 4$</li><li>(ii) $y = f(x + 2)$</li></ul>showing clearly the coordinates of the new turning points in each case.",
        "steps": [
            "<strong>Step 1: Sketch the primary curve $y = f(x)$</strong><br>The function $f(x) = 9 - x^2$ is an inverted parabola (negative quadratic).<ul><li>The maximum turning point lies on the $y$-axis at $(0, 9)$.</li><li>The $y$-intercept is $(0, 9)$.</li><li>The $x$-intercepts occur where $9 - x^2 = 0 \\implies x = \\pm 3 \\implies (3, 0) \\text{ and } (-3, 0).$</li></ul>",
            "<strong>Step 2: Understand the transformations</strong><br>We apply standard function transformation rules:<ul><li>**(i) $y = f(x) - 4$**: This represents a vertical translation downwards by $4$ units. The turning point shifts from $(0, 9)$ down to $(0, 5)$.</li><li>**(ii) $y = f(x + 2)$**: This represents a horizontal translation to the left by $2$ units. The turning point shifts from $(0, 9)$ left to $(-2, 9)$.</li></ul>",
            "<strong>Step 3: Sketch the transformed curves</strong><br>The separate sets of axes for the original function and its two transformations are shown side-by-side below:<br><br><img src='images/p1/04355_ans1.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>"
        ],
        "pi_options": [
            {
                "ans": "Turning point: $(0,9)$; (i) Turning point: $(0,5)$; (ii) Turning point: $(2,9)$",
                "feedback": "Be careful with horizontal transformations. The graph of $f(x + a)$ represents a horizontal translation of $a$ units to the left (negative direction), so the turning point shifts to $(-2, 9)$, not $(2, 9)$."
            },
            {
                "ans": "Turning point: $(0,9)$; (i) Turning point: $(4,9)$; (ii) Turning point: $(-2,9)$",
                "feedback": "Check your transformation directions. The graph of $f(x) - a$ is a vertical shift downwards, which modifies the $y$-coordinate of the turning point to $(0, 5)$, not the $x$-coordinate."
            },
            {
                "ans": "Turning point: $(0,9)$; (i) Turning point: $(0,13)$; (ii) Turning point: $(-2,9)$",
                "feedback": "Check the sign of your vertical translation. Subtracting $4$ from $f(x)$ shifts the curve down, so the $y$-coordinate should be $9 - 4 = 5$, not $9 + 4 = 13$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Horizontal Shifting",
            "content": "Horizontal translations often confuse students because they seem counter-intuitive: $f(x + a)$ shifts the graph $a$ units to the left (negative direction), while $f(x - a)$ shifts the graph $a$ units to the right (positive direction). Always double-check your horizontal shift direction."
        }
    }

];