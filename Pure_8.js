window.ALEVEL_QUESTIONS = [
    {
        "id": "004351",
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
            "<strong>Step 2: Solve for the stationary points</strong><br>Set the first derivative equal to zero to find the critical values of $x$:<br>\\begin{aligned}\n3x^2 - 12x &= 0 \\cr\n3x(x - 4) &= 0 \\cr\nx = 0 \\quad &\\text{or} \\quad x = 4\n\\end{aligned}<br><br>Substitute these values of $x$ back into the original equation to find their corresponding $y$-coordinates:<br><br><strong>For $x = 0$:</strong><br>\\begin{aligned}\ny &= 0^3 - 6(0)^2 \\cr\ny &= 0 \\implies (0, 0)\n\\end{aligned}<br><br><strong>For $x = 4$:</strong><br>\\begin{aligned}\ny &= 4^3 - 6(4)^2 \\cr\ny &= 64 - 96 \\cr\ny &= -32 \\implies (4, -32)\n\\end{aligned}",
            "<strong>Step 3: Determine the nature of the stationary points</strong><br>Find the second derivative of the function:<br>\\begin{aligned}\n\\dfrac{\\text{d}^2y}{\\text{d}x^2} &= 6x - 12\n\\end{aligned}<br>Evaluate the second derivative at each critical point:<br><br><strong>At $x = 0$:</strong><br>\\begin{aligned}\n\\dfrac{\\text{d}^2y}{\\text{d}x^2} &= 6(0) - 12 \\cr\n\\dfrac{\\text{d}^2y}{\\text{d}x^2} &= -12 < 0 \\implies (0, 0) \\text{ is a local maximum}\n\\end{aligned}<br><br><strong>At $x = 4$:</strong><br>\\begin{aligned}\n\\dfrac{\\text{d}^2y}{\\text{d}x^2} &= 6(4) - 12 \\cr\n\\dfrac{\\text{d}^2y}{\\text{d}x^2} &= 12 > 0 \\implies (4, -32) \\text{ is a local minimum}\n\\end{aligned}",
            "<strong>Step 4: Find the coordinate intercepts and sketch the curve</strong><br>Find where the curve crosses the axes:<br><br><strong>To find the $y$-intercept, set $x = 0$:</strong><br>\\begin{aligned}\ny &= 0^3 - 6(0)^2 \\cr\ny &= 0 \\implies (0, 0)\n\\end{aligned}<br><br><strong>To find the $x$-intercepts, set $y = 0$:</strong><br>\\begin{aligned}\nx^3 - 6x^2 &= 0 \\cr\nx^2(x - 6) &= 0\n\\end{aligned}<br><br>This gives the intercepts $x = 0$ (touching point) and $x = 6$ (crossing point) at:<br>$$(0, 0) \\quad \\text{and} \\quad (6, 0)$$<br>Using these key features, the sketch of the curve $C$ is shown below:<br><br><img src='images/p1/004351_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
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
        "id": "004352",
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
            "<strong>Step 2: Solve for the stationary points</strong><br>Set the derivative equal to zero and factorise to find the critical values of $x$:<br>\\begin{aligned}\n6(x^2 - x - 2) &= 0 \\cr\n6(x - 2)(x + 1) &= 0\n\\end{aligned}<br><br>Substitute these values of $x$ back into the original equation to find their corresponding $y$-coordinates:<br><br><strong>For $x = -1$:</strong><br>\\begin{aligned}\ny &= 2(-1)^3 - 3(-1)^2 - 12(-1) + 8 \\cr\ny &= -2 - 3 + 12 + 8 \\cr\ny &= 15 \\implies (-1, 15)\n\\end{aligned}<br><br><strong>For $x = 2$:</strong><br>\\begin{aligned}\ny &= 2(2)^3 - 3(2)^2 - 12(2) + 8 \\cr\ny &= 16 - 12 - 24 + 8 \\cr\ny &= -12 \\implies (2, -12)\n\\end{aligned}",
            "<strong>Step 3: Determine the nature of the stationary points</strong><br>Find the second derivative:<br>\\begin{aligned}\n\\dfrac{\\text{d}^2y}{\\text{d}x^2} &= 12x - 6\n\\end{aligned}<br>Evaluate the second derivative at each critical value:<br><br><strong>At $x = -1$:</strong><br>\\begin{aligned}\n\\dfrac{\\text{d}^2y}{\\text{d}x^2} &= 12(-1) - 6 \\cr\n\\dfrac{\\text{d}^2y}{\\text{d}x^2} &= -18 < 0 \\implies (-1, 15) \\text{ is a local maximum}\n\\end{aligned}<br><br><strong>At $x = 2$:</strong><br>\\begin{aligned}\n\\dfrac{\\text{d}^2y}{\\text{d}x^2} &= 12(2) - 6 \\cr\n\\dfrac{\\text{d}^2y}{\\text{d}x^2} &= 18 > 0 \\implies (2, -12) \\text{ is a local minimum}\n\\end{aligned}",
            "<strong>Step 4: Sketch the curve</strong><br>Find the $y$-intercept by setting $x = 0$:<br>\\begin{aligned}\ny &= 2(0)^3 - 3(0)^2 - 12(0) + 8 \\cr\ny &= 8 \\implies (0, 8)\n\\end{aligned}<br>Sketch the positive cubic shape passing through the maximum $(-1, 15)$, the intercept $(0, 8)$, and the minimum $(2, -12)$:<br><br><img src='images/p1/004352_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
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
        "id": "004353",
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
            "<strong>Step 2: Find the stationary points</strong><br>Set the derivative equal to zero to find the critical values of $x$:<br>\\begin{aligned}\n12 - 3x^2 &= 0 \\cr\n3(4 - x^2) &= 0 \\cr\nx = 2 \\quad &\\text{or} \\quad x = -2\n\\end{aligned}<br><br>Substitute these back into the original equation to find their $y$-coordinates:<br><br><strong>For $x = 2$:</strong><br>\\begin{aligned}\ny &= 12(2) - 2^3 \\cr\ny &= 24 - 8 \\cr\ny &= 16 \\implies (2, 16)\n\\end{aligned}<br><br><strong>For $x = -2$:</strong><br>\\begin{aligned}\ny &= 12(-2) - (-2)^3 \\cr\ny &= -24 - (-8) \\cr\ny &= -16 \\implies (-2, -16)\n\\end{aligned}",
            "<strong>Step 3: Determine the nature of the stationary points</strong><br>Find the second derivative of the curve:<br>\\begin{aligned}\n\\dfrac{\\text{d}^2y}{\\text{d}x^2} &= -6x\n\\end{aligned}<br>Evaluate the second derivative at each critical point:<br><br><strong>At $x = 2$:</strong><br>\\begin{aligned}\n\\dfrac{\\text{d}^2y}{\\text{d}x^2} &= -6(2) \\cr\n\\dfrac{\\text{d}^2y}{\\text{d}x^2} &= -12 < 0 \\implies (2, 16) \\text{ is a local maximum}\n\\end{aligned}<br><br><strong>At $x = -2$:</strong><br>\\begin{aligned}\n\\dfrac{\\text{d}^2y}{\\text{d}x^2} &= -6(-2) \\cr\n\\dfrac{\\text{d}^2y}{\\text{d}x^2} &= 12 > 0 \\implies (-2, -16) \\text{ is a local minimum}\n\\end{aligned}",
            "<strong>Step 4: Determine coordinate intercepts and sketch</strong><br>Find where the curve crosses the axes:<br><br><strong>To find the $y$-intercept, set $x = 0$:</strong><br>\\begin{aligned}\ny &= 12(0) - 0^3 \\cr\ny &= 0 \\implies (0, 0)\n\\end{aligned}<br><br><strong>To find the $x$-intercepts, set $y = 0$:</strong><br>\\begin{aligned}\n12x - x^3 &= 0 \\cr\nx(12 - x^2) &= 0\n\\end{aligned}<br><br>This gives the intercepts $x = 0$ or $x = \\pm\\sqrt{ 12 } \\approx \\pm 3.46$.<br>Using these features, the sketch of the curve $C$ is shown below:<br><br><img src='images/p1/004353_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
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
        "id": "004354",
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
            "<strong>Step 1: Identify the asymptotes</strong><br>The vertical asymptote occurs where the denominator of the fraction is equal to zero, causing the function to be undefined:<br>\\begin{aligned}\nx - 1 &= 0 \\cr\nx &= 1\n\\end{aligned}<br>The horizontal asymptote is found by observing the behavior of $y$ as $x \\to \\pm\\infty$. As $x$ becomes extremely large, $\\dfrac{ 1 }{ x - 1 } \\to 0$:<br>\\begin{aligned}\ny &\\to 2\n\\end{aligned}",
            "<strong>Step 2: Find the axis intercepts</strong><br>To find the $y$-intercept, set $x = 0$:<br>\\begin{aligned}\ny &= 2 + \\dfrac{ 1 }{ 0 - 1 } \\cr\ny &= 2 - 1 \\cr\ny &= 1 \\implies (0, 1)\n\\end{aligned}<br><br><strong>To find the $x$-intercept, set $y = 0$:</strong><br>\\begin{aligned}\n0 &= 2 + \\dfrac{ 1 }{ x - 1 } \\cr\n\\dfrac{ 1 }{ x - 1 } &= -2 \\cr\nx - 1 &= -0.5 \\cr\nx &= 0.5 \\implies (0.5, 0)\n\\end{aligned}",
            "<strong>Step 3: Sketch the curve</strong><br>This is a translated reciprocal curve of $y = \\dfrac{ 1 }{ x }$. Draw the asymptotes $x = 1$ and $y = 2$ as dashed lines, and sketch the branches passing through $(0, 1)$ and $(0.5, 0):$<br><br><img src='images/p1/004354_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>"
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
        "id": "004355",
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
            "<strong>Step 1: Sketch the primary curve $y = f(x)$</strong><br>The function $f(x) = 9 - x^2$ is an inverted parabola (negative quadratic). To find the intercepts and turning point:<br><br><strong>Maximum Turning Point:</strong><br>The curve is an inverted parabola with its maximum turning point on the $y$-axis at $(0, 9)$.<br><br><strong>$y$-intercept:</strong><br>Setting $x = 0 \\implies y = 9 \\implies (0, 9)$.<br><br><strong>$x$-intercepts:</strong><br>To find the $x$-intercepts, set $y = 0$:<br>\\begin{aligned}\n9 - x^2 &= 0 \\cr\\nx^2 &= 9 \\cr\\nx &= \\pm 3 \\implies (3, 0) \\quad \\text{and} \\quad (-3, 0)\n\\end{aligned}",
            "<strong>Step 2: Understand the transformations</strong><br>We apply standard function transformation rules:<ul><li>(i) $y = f(x) - 4$: This represents a vertical translation downwards by $4$ units. The turning point shifts from $(0, 9)$ down to $(0, 5)$.</li><li>(ii) $y = f(x + 2)$: This represents a horizontal translation to the left by $2$ units. The turning point shifts from $(0, 9)$ left to $(-2, 9)$.</li></ul>",
            "<strong>Step 3: Sketch the transformed curves</strong><br>The separate sets of axes for the original function and its two transformations are shown side-by-side below:<br><br><img src='images/p1/004355_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>"
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
    },
    {
        "id": "004356",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Proof",
        "subtopic": [
            "Proof and Counterexample",
            "Algebraic Identities"
        ],
        "img": false,
        "question": "In each of the two statements below, $c$ and $d$ are real numbers. One of the statements is true, while the other is false.<br><br>$$\\text{A} : (3c + d)^2 = 9c^2 + d^2\\text{, for all values of } c \\text{ and } d.$$<br>$$\\text{B} : 27c^3 + d^3 = (3c + d)(9c^2 - 3cd + d^2)\\text{, for all values of } c \\text{ and } d.$$<br><br><strong>(a)</strong> Identify the statement which is false. Show, by counterexample, that this statement is in fact false.<br><br><strong>(b)</strong> Identify the statement which is true. Give a proof to show that this statement is in fact true.",
        "steps": [
            "To begin, we examine the two statements and determine which is false and which is true.<br><br>Statement A claims that $(3c + d)^2 = 9c^2 + d^2$ for all real $c$ and $d$. This is false because the expansion of a squared binomial always contains a middle term: $(3c + d)^2 = 9c^2 + 6cd + d^2$.<br><br>Statement B claims that $27c^3 + d^3 = (3c + d)(9c^2 - 3cd + d^2)$. This is a standard algebraic identity (the sum of cubes), so it is true.",
            "<strong>Part (a): Disproving Statement A</strong><br><br>To prove Statement A is false, we must provide a single counterexample where the left-hand side does not equal the right-hand side.<br><br>Let $c = 1$ and $d = 1$.<br><br>The left-hand side (LHS) of Statement A is:<br>\\begin{aligned} (3c + d)^2 &= (3(1) + 1)^2 \\cr &= 4^2 \\cr &= 16 \\end{aligned}<br><br>The right-hand side (RHS) of Statement A is:<br>\\begin{aligned} 9c^2 + d^2 &= 9(1)^2 + 1^2 \\cr &= 9 + 1 \\cr &= 10 \\end{aligned}<br><br>Since $16 \\ne 10$, the identity does not hold for all real numbers $c$ and $d$, confirming Statement A is false.",
            "<strong>Part (b): Proving Statement B</strong><br><br>To prove Statement B is true for all real numbers $c$ and $d$, we expand the right-hand side of the equation and show that it simplifies to the left-hand side:<br>\\begin{aligned} (3c + d)(9c^2 - 3cd + d^2) &= 3c(9c^2 - 3cd + d^2) + d(9c^2 - 3cd + d^2) \\cr &= 27c^3 - 9c^2d + 3cd^2 + 9c^2d - 3cd^2 + d^3 \\end{aligned}<br><br>Grouping the terms:<br>\\begin{aligned} 27c^3 + (-9c^2d + 9c^2d) + (3cd^2 - 3cd^2) + d^3 &= 27c^3 + d^3 \\end{aligned}<br><br>Since expanding the right-hand side results in the exact expression on the left-hand side, Statement B is proved to be true for all real values of $c$ and $d$."
        ],
        "pi_options": [
            {
                "ans": "Statement $A$ is true, and Statement $B$ is false.",
                "feedback": "A student might make the common algebraic error of distributing the exponent, believing that $(3c + d)^2 = 9c^2 + d^2$. However, squaring a binomial always produces a middle term: $(3c + d)^2 = 9c^2 + 6cd + d^2$."
            },
            {
                "ans": "Statement $A$ is false, but the counterexample $c = 0, d = 0$ proves it.",
                "feedback": "While Statement A is indeed false, choosing $c=0, d=0$ as a counterexample yields $0 = 0$, which is a true statement. A counterexample must show a case where the equation does not hold, such as $c=1, d=1$."
            },
            {
                "ans": "Both Statement $A$ and Statement $B$ are true.",
                "feedback": "Statement A is false because $(3c + d)^2 = 9c^2 + 6cd + d^2 \\ne 9c^2 + d^2$ for general non-zero values of $c$ and $d$. Double-check the expansion of the square of a sum."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Freshman's Dream and Difference of Cubes",
            "content": "Always remember that squaring a binomial is not the same as squaring the individual terms: $(x + y)^2 \\ne x^2 + y^2$. This common algebraic trap is known as the 'Freshman's Dream'. In contrast, the sum and difference of cubes are strict algebraic identities: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$."
        }
    },
    {
        "id": "004357",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Proof",
        "subtopic": [
            "Proof and Counterexample",
            "Inequalities"
        ],
        "img": false,
        "question": "In each of the two statements below, $a$ and $b$ are real numbers. One of the statements is true, while the other is false.<br><br>$$\\text{A} : \\sqrt{ a^2 + b^2 } = a + b\\text{, for all positive real numbers } a \\text{ and } b.$$<br>$$\\text{B} : a^2 + b^2 \\ge 2ab\\text{, for all real numbers } a \\text{ and } b.$$<br><br><strong>(a)</strong> Identify the statement which is false. Show, by counterexample, that this statement is in fact false.<br><br><strong>(b)</strong> Identify the statement which is true. Give a proof to show that this statement is in fact true.",
        "steps": [
            "First, we analyze both statements.<br><br>Statement A claims that $\\sqrt{ a^2 + b^2 } = a + b$ for all positive real numbers $a$ and $b$. This is false because the square root does not distribute over addition.<br><br>Statement B claims that $a^2 + b^2 \\ge 2ab$ for all real numbers $a$ and $b$. This is a well-known inequality (related to the AM-GM inequality) and is true.",
            "<strong>Part (a): Disproving Statement A</strong><br><br>To prove Statement A is false, we find a counterexample with positive real numbers $a$ and $b$.<br><br>Let $a = 3$ and $b = 4$.<br><br>The left-hand side (LHS) of Statement A is:<br>\\begin{aligned} \\sqrt{ a^2 + b^2 } &= \\sqrt{ 3^2 + 4^2 } \\cr &= \\sqrt{ 9 + 16 } \\cr &= \\sqrt{ 25 } \\cr &= 5 \\end{aligned}<br><br>The right-hand side (RHS) of Statement A is:<br>\\begin{aligned} a + b &= 3 + 4 \\cr &= 7 \\end{aligned}<br><br>Since $5 \\ne 7$, Statement A is false.",
            "<strong>Part (b): Proving Statement B</strong><br><br>To prove that $a^2 + b^2 \\ge 2ab$ for all real numbers $a$ and $b$, we start from the fundamental property that the square of any real number is always non-negative:<br>\\begin{aligned} (a - b)^2 \\ge 0 \\end{aligned}<br><br>Expanding the left-hand side of this inequality:<br>\\begin{aligned} a^2 - 2ab + b^2 \\ge 0 \\end{aligned}<br><br>Adding $2ab$ to both sides of the inequality:<br>\\begin{aligned} a^2 + b^2 \\ge 2ab \\end{aligned}<br><br>Since $(a-b)^2 \\ge 0$ is true for all real numbers $a$ and $b$, the derived inequality $a^2 + b^2 \\ge 2ab$ is also true for all real numbers $a$ and $b$."
        ],
        "pi_options": [
            {
                "ans": "Statement $A$ is true, and Statement $B$ is false.",
                "feedback": "Remember that the square root of a sum is not equal to the sum of the square roots. For example, $\\sqrt{ 3^2 + 4^2 } = \\sqrt{ 25 } = 5$, whereas $3 + 4 = 7$."
            },
            {
                "ans": "Statement $B$ is false because it does not hold when $a$ and $b$ are negative.",
                "feedback": "Even if $a$ and $b$ are negative, their product $ab$ is positive, and the inequality $(a-b)^2 \\ge 0$ always holds because the square of any real number is non-negative."
            },
            {
                "ans": "Statement $A$ is false, and the counterexample $a = 0, b = 0$ proves it.",
                "feedback": "The question specifies that $a$ and $b$ must be positive real numbers ($a, b > 0$). Therefore, $a=0, b=0$ is not a valid counterexample because it violates the given condition."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "Square Roots and Binomial Addition",
            "content": "A very common error is assuming that the square root distributes over addition, i.e., $\\sqrt{ a^2 + b^2 } = a + b$. Remember that $\\sqrt{ a^2 + b^2 } < a + b$ for all positive real numbers $a$ and $b$ because squaring both sides shows $a^2 + b^2 < a^2 + 2ab + b^2$ since $2ab > 0$."
        }
    },
    {
        "id": "004358",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Proof",
        "subtopic": [
            "Proof and Counterexample",
            "Number Theory"
        ],
        "img": false,
        "question": "In each of the two statements below, $n$ represents a positive integer. One of the statements is true, while the other is false.<br><br>$$\\text{A} : n^2 + n + 11 \\text{ is a prime number for all positive integers } n.$$<br>$$\\text{B} : n^3 - n \\text{ is a multiple of } 6 \\text{ for all positive integers } n.$$<br><br><strong>(a)</strong> Identify the statement which is false. Show, by counterexample, that this statement is in fact false.<br><br><strong>(b)</strong> Identify the statement which is true. Give a proof to show that this statement is in fact true.",
        "steps": [
            "First, we analyze both statements.<br><br>Statement A claims that $n^2 + n + 11$ is prime for all positive integers $n$. This is false because we can find values of $n$ that make the expression composite.<br><br>Statement B claims that $n^3 - n$ is a multiple of 6 for all positive integers $n$. This is a true statement of number theory.",
            "<strong>Part (a): Disproving Statement A</strong><br><br>To show Statement A is false, we search for a positive integer $n$ that results in a composite number.<br><br>Let $n = 10$.<br><br>Substituting $n = 10$ into the expression:<br>\\begin{aligned} n^2 + n + 11 &= 10^2 + 10 + 11 \\cr &= 100 + 10 + 11 \\cr &= 121 \\end{aligned}<br><br>Since $121 = 11 \\times 11$, it is a composite number (not prime). Therefore, Statement A is false.",
            "<strong>Part (b): Proving Statement B</strong><br><br>To prove that $n^3 - n$ is always a multiple of 6 for any positive integer $n$, we begin by factoring the expression:<br>\\begin{aligned} n^3 - n &= n(n^2 - 1) \\cr &= (n - 1)n(n + 1) \\cr \\end{aligned}<br><br>The factored expression is the product of three consecutive integers: $(n - 1)$, $n$, and $(n + 1)$.<br><br>We must show this product is divisible by both 2 and 3:<br><br><strong>Divisibility by 2:</strong> In any set of three consecutive integers, at least one of them must be an even number. Therefore, the product must be divisible by 2.<br><br><strong>Divisibility by 3:</strong> In any set of three consecutive integers, exactly one of them must be a multiple of 3. Therefore, the product must be divisible by 3.<br><br>Since 2 and 3 are prime numbers with no common factors, any number that is divisible by both 2 and 3 must also be divisible by their product, which is $2 \\times 3 = 6$. Thus, $n^3 - n$ is always a multiple of 6."
        ],
        "pi_options": [
            {
                "ans": "Statement $A$ is true, and Statement $B$ is false.",
                "feedback": "While $n^2 + n + 11$ produces prime numbers for small values of $n$ (such as $n=1, 2, 3$), it fails for $n=10$ or $n=11$. Always test multiple values, especially those related to the constant term."
            },
            {
                "ans": "Statement $A$ is false, and the counterexample $n = 1$ proves it.",
                "feedback": "If we substitute $n=1$ into Statement A, we get $1^2 + 1 + 11 = 13$, which is a prime number. Therefore, $n=1$ is not a valid counterexample because it supports the statement rather than disproving it."
            },
            {
                "ans": "Statement $B$ is false because $n^3 - n$ is $0$ when $n = 1$, which is not a multiple of $6$.",
                "feedback": "When $n=1$, $n^3 - n = 0$. By definition, 0 is a multiple of any integer since $0 = 6 \\times 0$. Thus, $n=1$ is not a counterexample."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "Consecutive Integers and Divisibility",
            "content": "A product of $k$ consecutive integers is always divisible by $k!$. For $k=3$ consecutive integers, $(n-1)n(n+1)$ must be divisible by $3! = 6$. This is because at least one of the integers must be even (divisible by 2) and exactly one must be a multiple of 3."
        }
    },
    {
        "id": "004359",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Proof",
        "subtopic": [
            "Proof and Counterexample",
            "Rationality and Parity"
        ],
        "img": false,
        "question": "In each of the two statements below, we are considering numbers under specific definitions. One of the statements is true, while the other is false.<br><br>$$\\text{A} : \\text{The sum of any two irrational numbers is always irrational.}$$<br>$$\\text{B} : \\text{If } n \\text{ is an odd integer, then } n^2 - 1 \\text{ is always a multiple of } 8.$$<br><br><strong>(a)</strong> Identify the statement which is false. Show, by counterexample, that this statement is in fact false.<br><br><strong>(b)</strong> Identify the statement which is true. Give a proof to show that this statement is in fact true.",
        "steps": [
            "First, we analyze both statements.<br><br>Statement A claims that the sum of any two irrational numbers is always irrational. This is false because we can construct two irrational numbers whose irrational parts cancel out upon addition.<br><br>Statement B claims that if $n$ is an odd integer, then $n^2 - 1$ is always a multiple of 8. This is a true statement.",
            "<strong>Part (a): Disproving Statement A</strong><br><br>To prove Statement A is false, we find two irrational numbers, $x$ and $y$, whose sum $x + y$ is rational.<br><br>Let $x = \\sqrt{ 2 }$ and $y = 2 - \\sqrt{ 2 }$.<br><br>Both $x$ and $y$ are irrational numbers because they cannot be expressed as a fraction of two integers.<br><br>Adding them together:<br>\\begin{aligned} x + y &= \\sqrt{ 2 } + (2 - \\sqrt{ 2 }) \\cr &= 2 \\end{aligned}<br><br>Since 2 is a rational number, we have found two irrational numbers whose sum is rational. This proves Statement A is false.",
            "<strong>Part (b): Proving Statement B</strong><br><br>To prove Statement B is true, let $n$ be any odd integer. By definition, we can express $n$ as:<br>\\begin{aligned} n = 2k + 1 \\end{aligned}<br>where $k$ is an integer.<br><br>Now, substitute this expression into $n^2 - 1$:<br>\\begin{aligned} n^2 - 1 &= (2k + 1)^2 - 1 \\cr &= (4k^2 + 4k + 1) - 1 \\cr &= 4k^2 + 4k \\cr &= 4k(k + 1) \\end{aligned}<br><br>We now analyze the term $k(k + 1)$, which is the product of two consecutive integers $k$ and $k + 1$. Since one of any two consecutive integers must be even, the product $k(k + 1)$ must be divisible by 2. Thus, we can write:<br>\\begin{aligned} k(k + 1) = 2m \\end{aligned}<br>for some integer $m$.<br><br>Substituting this back into our expression for $n^2 - 1$:<br>\\begin{aligned} n^2 - 1 &= 4(2m) \\cr &= 8m \\end{aligned}<br><br>Since $8m$ is clearly a multiple of 8, Statement B is proved to be true for all odd integers $n$."
        ],
        "pi_options": [
            {
                "ans": "Statement $A$ is true, and Statement $B$ is false.",
                "feedback": "The sum of two irrational numbers is not always irrational. For instance, if you add $\\sqrt{ 2 }$ and $-\\sqrt{ 2 }$ (both irrational), the sum is 0 (rational)."
            },
            {
                "ans": "Statement $B$ is false because if $n = 1$ (an odd integer), then $n^2 - 1 = 0$, which is not a multiple of $8$.",
                "feedback": "When $n=1$, $n^2 - 1 = 0$. Since $0 = 8 \\times 0$, 0 is a multiple of 8. Therefore, $n=1$ is not a counterexample."
            },
            {
                "ans": "Statement $A$ is false, and the counterexample $x = \\sqrt{ 2 }$ and $y = \\sqrt{ 3 }$ proves it.",
                "feedback": "The sum $\\sqrt{ 2 } + \\sqrt{ 3 }$ is irrational, so this pair does not serve as a counterexample. To disprove Statement A, you must find a pair of irrational numbers whose sum is rational."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "Defining Odd Integers in Proofs",
            "content": "When proving statements about odd integers, always write $n = 2k + 1$ for some integer $k$. This allows you to expand and factor expressions algebraically. In this case, $4k(k+1)$ contains the product of two consecutive integers $k(k+1)$, which is always even, yielding an extra factor of 2."
        }
    },
    {
        "id": "004360",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Proof",
        "subtopic": [
            "Proof and Counterexample",
            "Quadratics"
        ],
        "img": false,
        "question": "In each of the two statements below, $x$ is a real number. One of the statements is true, while the other is false.<br><br>$$\\text{A} : x^2 > x \\text{ for all real numbers } x.$$<br>$$\\text{B} : x^2 - 6x + 10 > 0 \\text{ for all real numbers } x.$$<br><br><strong>(a)</strong> Identify the statement which is false. Show, by counterexample, that this statement is in fact false.<br><br><strong>(b)</strong> Identify the statement which is true. Give a proof to show that this statement is in fact true.",
        "steps": [
            "First, we analyze both statements.<br><br>Statement A claims that $x^2 > x$ for all real numbers $x$. This is false because squaring real numbers between 0 and 1 (inclusive) does not make them strictly larger.<br><br>Statement B claims that $x^2 - 6x + 10 > 0$ for all real numbers $x$. This is a true quadratic inequality.",
            "<strong>Part (a): Disproving Statement A</strong><br><br>To prove Statement A is false, we need to find a single real number $x$ for which $x^2$ is not strictly greater than $x$.<br><br>Let $x = 0$.<br><br>Substituting $x = 0$ into the inequality $x^2 > x$:<br>\\begin{aligned} 0^2 &&gt; 0 \\cr 0 &&gt; 0 \\end{aligned}<br><br>Since $0 > 0$ is a false statement, $x = 0$ is a valid counterexample. (Alternatively, choosing $x = 1$ yields $1 > 1$, which is also false, and choosing $x = 0.5$ yields $0.25 > 0.5$, which is false). Thus, Statement A is false.",
            "<strong>Part (b): Proving Statement B</strong><br><br>To prove Statement B is true for all real numbers $x$, we complete the square for the quadratic expression $x^2 - 6x + 10$:<br>\\begin{aligned} x^2 - 6x + 10 &= (x^2 - 6x + 9) + 1 \\cr &= (x - 3)^2 + 1 \\end{aligned}<br><br>We now analyze the components of this rewritten expression:<br>1. Since the square of any real number is always non-negative, we have:<br>\\begin{aligned} (x - 3)^2 \\ge 0 \\end{aligned}<br>for all real numbers $x$.<br><br>2. Adding 1 to both sides of this inequality:<br>\\begin{aligned} (x - 3)^2 + 1 \\ge 1 \\end{aligned}<br><br>3. Since $1 > 0$, we have:<br>\\begin{aligned} x^2 - 6x + 10 \\ge 1 > 0 \\end{aligned}<br><br>Therefore, $x^2 - 6x + 10 > 0$ for all real numbers $x$, which proves Statement B is true."
        ],
        "pi_options": [
            {
                "ans": "Statement $A$ is true, and Statement $B$ is false.",
                "feedback": "Statement A is false because squaring a number does not always make it larger (for example, if $0 \\le x \\le 1$). Statement B is true because the quadratic $(x-3)^2 + 1$ is always positive."
            },
            {
                "ans": "Statement $A$ is false, and the counterexample $x = 2$ disproves it.",
                "feedback": "If $x=2$, then $x^2 = 4$. Since $4 > 2$, $x=2$ satisfies the inequality $x^2 > x$. A counterexample must show a value that makes the statement false, such as $x=0$, $x=1$, or $x=0.5$."
            },
            {
                "ans": "Statement $B$ is false because if $x = 3$, the expression equals $1$, which is not greater than $0$.",
                "feedback": "If $x=3$, the expression $x^2 - 6x + 10$ evaluates to $3^2 - 6(3) + 10 = 9 - 18 + 10 = 1$. Since 1 is strictly greater than 0 ($1 > 0$), this value does not make the statement false."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Power of Completing the Square",
            "content": "Completing the square is one of the most powerful tools for proving quadratic inequalities. By writing a quadratic in the form $(x - p)^2 + q$, you instantly establish its minimum value. Since any real square $(x - p)^2 \\ge 0$, the expression $(x - p)^2 + q$ is guaranteed to be at least $q$."
        }
    },
    {
        "id": "004361",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Exponentials and Logarithms",
        "subtopic": [
            "Exponential Decay Modeling"
        ],
        "img": false,
        "question": "The value of a motorcycle, £$V$, may be modeled as a continuous variable. At time $t$ years, the value of the motorcycle is given by:<br>$$V = Ae^{kt}$$<br>where $A$ and $k$ are constants.<br><br>When the motorcycle is new, it is worth £16,000. When the motorcycle is three years old, it is worth £12,000.<br><br>Determine the predicted value of the motorcycle when it is nine years old.",
        "steps": [
            "To find the value of the constants, we first use the initial condition. When the motorcycle is new, $t = 0$ and $V = 16000$.<br><br>Substitute these values into the model equation:<br>\\begin{aligned} 16000 &= Ae^{k(0)} \\cr 16000 &= A(1) \\cr A &= 16000 \\end{aligned}<br><br>So, the model becomes $V = 16000e^{kt}$.",
            "Next, we use the second condition. When the motorcycle is three years old, $t = 3$ and $V = 12000$.<br><br>Substitute these values into our updated equation:<br>\\begin{aligned} 12000 &= 16000e^{3k} \\cr e^{3k} &= \\dfrac{ 12000 }{ 16000 } \\cr e^{3k} &= \\dfrac{ 3 }{ 4 } \\end{aligned}<br><br>We can leave the expression in this form instead of solving for $k$ as a decimal, which avoids rounding errors in the next step.",
            "We want to find the value of the motorcycle when it is nine years old, so we set $t = 9$:<br>$$V = 16000e^{9k}$$<br>$$V = 16000\\left( e^{3k} \\right)^3$$<br><br>Substitute $e^{3k} = \\dfrac{ 3 }{ 4 }$ into this equation:<br>\\begin{aligned} V &= 16000\\left( \\dfrac{ 3 }{ 4 } \\right)^3 \\cr V &= 16000\\left( \\dfrac{ 27 }{ 64 } \\right) \\cr V &= 250 \\times 27 \\cr V &= 6750 \\end{aligned}<br><br>Thus, the predicted value of the motorcycle after nine years is £6,750."
        ],
        "pi_options": [
            {
                "ans": "£$4{,}000$",
                "feedback": "This is the result of using a linear depreciation model rather than an exponential model. A linear model assumes the motorcycle loses a constant amount of value each year (linear depreciation of £1,333.33 per year), whereas an exponential model assumes it loses a constant percentage of its value."
            },
            {
                "ans": "£$9{,}000$",
                "feedback": "This error occurs if you incorrectly calculate the value at $t=9$ as $V = 16000 \\times \\left( \\dfrac{ 3 }{ 4 } \\right)^2$ instead of $16000 \\times \\left( \\dfrac{ 3 }{ 4 } \\right)^3$. A power of 2 represents the value after 6 years, not 9 years."
            },
            {
                "ans": "£$10{,}000$",
                "feedback": "This can occur from a combination of algebraic errors in index laws or if you solve for $k$ as a rounded decimal too early, causing a significant loss of precision in the final calculation."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "Using Powers of the Base Instead of Solving for k",
            "content": "When the target time ($t = 9$) is an exact multiple of the given time interval ($t = 3$), you do not need to find the numerical decimal value of $k$. Since $V = A(e^{3k})^3$, you can simply substitute the fraction representing $e^{3k}$ directly. This avoids rounding errors and keeps the calculations exact."
        }
    },
    {
        "id": "004362",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Exponentials and Logarithms",
        "subtopic": [
            "Radioactive Decay"
        ],
        "img": false,
        "question": "The mass, $M$ grams, of a radioactive substance remaining at time $t$ years is modeled by:<br>$$M = M_0 e^{-kt}$$<br>where $M_0$ and $k$ are positive constants.<br><br>Initially, the mass of the substance is $80\\text{ grams}$. After $5$ years, the mass has decayed to $50\\text{ grams}$.<br><br><strong>(a)</strong> Find the value of $M_0$ and show that $k \\approx 0.0940$.<br><br><strong>(b)</strong> Find the time taken, to the nearest tenth of a year, for the mass of the substance to decay to $20\\text{ grams}$.",
        "steps": [
            "<strong>Part (a): Finding $M_0$ and $k$</strong><br><br>The initial mass is $80\\text{ grams}$, which means $M = 80$ when $t = 0$.<br>\\begin{aligned} 80 &= M_0 e^{-k(0)} \\cr M_0 &= 80 \\end{aligned}<br><br>Now we use the second condition: $M = 50$ when $t = 5$.<br>\\begin{aligned} 50 &= 80e^{-5k} \\cr e^{-5k} &= \\dfrac{ 50 }{ 80 } \\cr e^{-5k} &= 0.625 \\end{aligned}",
            "Take the natural logarithm of both sides to solve for $k$:<br>\\begin{aligned} -5k &= \\ln(0.625) \\cr k &= -\\dfrac{ 1 }{ 5 }\\ln(0.625) \\cr k &\\approx 0.0940007 \\cr k &\\approx 0.0940 \\text{ (to 4 d.p.)} \\end{aligned}",
            "<strong>Part (b): Finding the time to decay to $20\\text{ grams}$</strong><br><br>Set $M = 20$ and solve for $t$ using our model $M = 80e^{-0.0940t}$:<br>\\begin{aligned} 20 &= 80e^{-0.0940t} \\cr e^{-0.0940t} &= \\dfrac{ 20 }{ 80 } \\cr e^{-0.0940t} &= 0.25 \\end{aligned}<br><br>Take the natural logarithm of both sides:<br>\\begin{aligned} -0.0940t &= \\ln(0.25) \\cr t &= \\dfrac{ \\ln(0.25) }{ -0.0940 } \\cr t &\\approx 14.74787 \\end{aligned}<br><br>Rounding $14.74787$ to the nearest tenth of a year gives $14.7$ years."
        ],
        "pi_options": [
            {
                "ans": "$14.8$ years",
                "feedback": "This is a rounding error. Dividing $-\\ln(0.25)$ by $0.0940$ yields approximately $14.748$ years. Since the digit in the hundredths place is 4, this rounds down to $14.7$ years, not up to $14.8$ years."
            },
            {
                "ans": "$15.4$ years",
                "feedback": "This error occurs if you round the decay constant $k$ too severely to $0.09$ in intermediate steps, leading to $t = \\dfrac{ \\ln(0.25) }{ -0.09 } \\approx 15.4$ years."
            },
            {
                "ans": "$12.5$ years",
                "feedback": "This error occurs if you use common logarithms (base 10) instead of natural logarithms (base $e$) when solving the exponential equation, or if you make an error in changing the sign during algebraic rearrangement."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "Rounding of Intermediate Constants",
            "content": "Be very careful when using rounded intermediate values (like $k \\approx 0.0940$) in subsequent calculations. To ensure maximum accuracy, always store the exact value of $k$ in your calculator's memory and use it for the final calculation before rounding the final answer."
        }
    },
    {
        "id": "004363",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Exponentials and Logarithms",
        "subtopic": [
            "Newton's Law of Cooling"
        ],
        "img": false,
        "question": "The temperature, $\\theta^\\circ\\text{C}$, of a hot drink in a room at time $t$ minutes after being poured is modeled by:<br>$$\\theta = 20 + Ae^{-kt}$$<br>where $A$ and $k$ are constants.<br><br>The initial temperature of the drink is $85^\\circ\\text{C}$. After $10$ minutes, the temperature has cooled to $50^\\circ\\text{C}$.<br><br><strong>(a)</strong> Find the value of $A$.<br><br><strong>(b)</strong> Find the value of $k$, giving your answer correct to 4 decimal places.<br><br><strong>(c)</strong> Determine the temperature of the drink, to the nearest degree, after $25$ minutes.",
        "steps": [
            "<strong>Part (a): Finding $A$</strong><br><br>The initial temperature is $85^\\circ\\text{C}$, so $\\theta = 85$ when $t = 0$.<br>\\begin{aligned} 85 &= 20 + Ae^{-k(0)} \\cr 85 &= 20 + A \\cr A &= 65 \\end{aligned}",
            "<strong>Part (b): Finding $k$</strong><br><br>We are given that $\\theta = 50$ when $t = 10$. Substitute $A = 65$ and these values into the model:<br>\\begin{aligned} 50 &= 20 + 65e^{-10k} \\cr 30 &= 65e^{-10k} \\cr e^{-10k} &= \\dfrac{ 30 }{ 65 } \\cr e^{-10k} &= \\dfrac{ 6 }{ 13 } \\end{aligned}<br><br>Take the natural logarithm of both sides:<br>\\begin{aligned} -10k &= \\ln\\left( \\dfrac{ 6 }{ 13 } \\right) \\cr k &= -\\dfrac{ 1 }{ 10 }\\ln\\left( \\dfrac{ 6 }{ 13 } \\right) \\cr k &\\approx 0.0773189 \\cr k &\\approx 0.0773 \\text{ (to 4 d.p.)} \\end{aligned}",
            "<strong>Part (c): Finding the temperature after $25$ minutes</strong><br><br>Substitute $t = 25$, $A = 65$, and $k = 0.0773$ into the model:<br>\\begin{aligned} \\theta &= 20 + 65e^{-0.0773(25)} \\cr \\theta &= 20 + 65e^{-1.9325} \\cr \\theta &\\approx 20 + 65(0.144783) \\cr \\theta &\\approx 20 + 9.4109 \\cr \\theta &\\approx 29.4109 \\end{aligned}<br><br>Rounding to the nearest degree gives $29^\\circ\\text{C}$."
        ],
        "pi_options": [
            {
                "ans": "$30^\\circ\\text{C}$",
                "feedback": "This is a minor calculation error. Ensure you do not round the exponent or value of $e^{-1.9325}$ too early. The unrounded calculation yields $29.41^\\circ\\text{C}$, which rounds down to $29^\\circ\\text{C}$."
            },
            {
                "ans": "$20^\\circ\\text{C}$",
                "feedback": "This represents the limit as $t \\to \\infty$ (the ambient room temperature). While the drink will eventually cool to $20^\\circ\\text{C}$, after only 25 minutes it will still be slightly above room temperature."
            },
            {
                "ans": "$34^\\circ\\text{C}$",
                "feedback": "This error can occur if you forget the negative sign in the exponent (evaluating $e^{1.9325}$), or if you make an error in subtracting the constant offset of 20."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "Understanding the Room Temperature Offset",
            "content": "In the model $\\theta = 20 + Ae^{-kt}$, as $t \\to \\infty$, the term $Ae^{-kt} \\to 0$. This means that the temperature $\\theta$ approaches $20^\\circ\\text{C}$ (the ambient room temperature). The constant offset represents this physical lower bound."
        }
    },
    {
        "id": "004364",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Exponentials and Logarithms",
        "subtopic": [
            "Exponential Growth"
        ],
        "img": false,
        "question": "The number of bacteria, $N$, in a laboratory culture at time $t$ hours is modeled by:<br>$$N = Ae^{kt}$$<br>where $A$ and $k$ are positive constants.<br><br>The initial population of bacteria is $500$. After $4$ hours, the population has grown to $1500$.<br><br><strong>(a)</strong> State the value of $A$.<br><br><strong>(b)</strong> Show that $e^{4k} = 3$, and hence find the exact value of $k$.<br><br><strong>(c)</strong> Determine the population of bacteria in the culture after $12$ hours.",
        "steps": [
            "<strong>Part (a): Finding $A$</strong><br><br>The initial population of bacteria is $500$, which means $N = 500$ when $t = 0$.<br>\\begin{aligned} 500 &= Ae^{k(0)} \\cr A &= 500 \\end{aligned}",
            "<strong>Part (b): Finding $k$</strong><br><br>We are given that $N = 1500$ when $t = 4$. Substitute $A = 500$ into the equation:<br>\\begin{aligned} 1500 &= 500e^{4k} \\cr e^{4k} &= \\dfrac{ 1500 }{ 500 } \\cr e^{4k} &= 3 \\end{aligned}<br><br>Taking the natural logarithm of both sides to find the exact value of $k$:<br>\\begin{aligned} 4k &= \\ln(3) \\cr k &= \\dfrac{ \\ln(3) }{ 4 } \\end{aligned}",
            "<strong>Part (c): Finding the population after $12$ hours</strong><br><br>We want to evaluate $N$ when $t = 12$. Substitute $A = 500$ and $t = 12$ into our model equation:<br>\\begin{aligned} N &= 500e^{12k} \\cr N &= 500\\left( e^{4k} \\right)^3 \\end{aligned}<br><br>Since we know from Part (b) that $e^{4k} = 3$, we can substitute this directly:<br>\\begin{aligned} N &= 500(3)^3 \\cr N &= 500(27) \\cr N &= 13500 \\end{aligned}<br><br>Thus, the population of bacteria after 12 hours is $13,500$."
        ],
        "pi_options": [
            {
                "ans": "$4{,}500$",
                "feedback": "This error occurs if you multiply the population by 3 (calculating $1500 \\times 3$) instead of recognizing that the population triples every 4 hours, which requires cubing the factor of 3 over 12 hours ($3^3 = 27$)."
            },
            {
                "ans": "$1{,}500$",
                "feedback": "This is simply the population at $t = 4$ hours. After 12 hours, the population will have undergone two further tripling cycles."
            },
            {
                "ans": "$40{,}500$",
                "feedback": "This error occurs if you apply the tripling factor of 27 directly to the $t = 4$ population of 1500 (calculating $1500 \\times 27$) instead of multiplying it by the initial population $A = 500$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "Recognizing Tripling Times",
            "content": "Since the population triples every 4 hours ($e^{4k} = 3$), the population after 12 hours (which is exactly three 4-hour intervals) must triple three times: $500 \\times 3 \\times 3 \\times 3 = 13500$. Recognizing this scaling factor is a fast way to verify your answers."
        }
    },
    {
        "id": "004365",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Exponentials and Logarithms",
        "subtopic": [
            "Comparing Exponential Models"
        ],
        "img": false,
        "question": "The population of Town $X$, $P$, is modeled by $P = 15000e^{0.02t}$, and the population of Town $Y$, $Q$, is modeled by $Q = 22000e^{-0.01t}$, where $t$ is the number of years after the year 2020.<br><br><strong>(a)</strong> State which town's population is predicted to grow and which is predicted to decay, justifying your answer.<br><br><strong>(b)</strong> Find the number of years, to the nearest tenth of a year, after 2020 when the populations of the two towns are predicted to be equal.",
        "steps": [
            "<strong>Part (a): Growth vs Decay</strong><br><br>The behavior of an exponential model $y = Ae^{kt}$ depends on the sign of the constant exponent coefficient, $k$:<br>1. For Town $X$, $k = 0.02 > 0$. Since the exponent is positive, the population is predicted to **grow**.<br>2. For Town $Y$, $k = -0.01 < 0$. Since the exponent is negative, the population is predicted to **decay**.",
            "<strong>Part (b): Finding when populations are equal</strong><br><br>To find when the populations are equal, set $P = Q$ and solve for $t$:<br>\\begin{aligned} 15000e^{0.02t} &= 22000e^{-0.01t} \\end{aligned}<br><br>Divide both sides by $15000$:<br>\\begin{aligned} e^{0.02t} &= \\dfrac{ 22000 }{ 15000 }e^{-0.01t} \\cr e^{0.02t} &= \\dfrac{ 22 }{ 15 }e^{-0.01t} \\end{aligned}",
            "To combine the exponential terms, divide both sides by $e^{-0.01t}$ (which is equivalent to multiplying both sides by $e^{0.01t}$):<br>\\begin{aligned} \\dfrac{ e^{0.02t} }{ e^{-0.01t} } &= \\dfrac{ 22 }{ 15 } \\cr e^{0.02t - (-0.01t)} &= \\dfrac{ 22 }{ 15 } \\cr e^{0.03t} &= \\dfrac{ 22 }{ 15 } \\end{aligned}<br><br>Take the natural logarithm of both sides:<br>\\begin{aligned} 0.03t &= \\ln\\left( \\dfrac{ 22 }{ 15 } \\right) \\cr t &= \\dfrac{ 1 }{ 0.03 }\\ln\\left( \\dfrac{ 22 }{ 15 } \\right) \\cr t &\\approx 12.729 \\end{aligned}<br><br>Rounding to the nearest tenth of a year gives $12.7$ years."
        ],
        "pi_options": [
            {
                "ans": "$12.8$ years",
                "feedback": "This is a rounding error. The value $t \\approx 12.729$ rounds down to $12.7$ because the digit in the hundredths place is 2."
            },
            {
                "ans": "$38.2$ years",
                "feedback": "This error occurs if you fail to divide by the combined exponent coefficient of $0.03$, leaving the calculation as $t = \\ln\\left( \\dfrac{ 22 }{ 15 } \\right) / 0.01 \\approx 38.2$ years."
            },
            {
                "ans": "$25.6$ years",
                "feedback": "This error can occur if you incorrectly subtract the exponents when dividing (calculating $0.02 - 0.01 = 0.01$) instead of correctly adding them when dividing by a negative exponent ($0.02 - (-0.01) = 0.03$)."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "Combining Exponentials with Different Bases",
            "content": "When solving $Ae^{at} = Be^{-bt}$, always divide both sides by $e^{-bt}$ to get $e^{(a+b)t} = \\dfrac{ B }{ A }$. This cleanly combines the exponents into a single positive exponential term, making it simple to take the natural logarithm of both sides."
        }
    },
    {
        "id": "004366",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Differentiation",
        "subtopic": [
            "Tangents and Normals"
        ],
        "img": false,
        "question": "A curve $C$ has the equation:<br>$$y = 3x^2 - 14x - 8$$<br>The point $P$ lies on $C$ and is such that the tangent to $C$ at $P$ has the equation:<br>$$y = -2x + c$$<br>where $c$ is a constant.<br><br>Find the coordinates of $P$ and the value of $c$.",
        "steps": [
            "First, we find the gradient function of the curve by differentiating the equation with respect to $x$:<br>\\begin{aligned} y &= 3x^2 - 14x - 8 \\cr \\dfrac{ \\mathrm{ d }y }{ \\mathrm{ d }x } &= 6x - 14 \\end{aligned}",
            "We are given that the tangent to the curve at $P$ is $y = -2x + c$. The gradient of this tangent line is $-2$.<br><br>Since the gradient of the curve at the point of tangency $P$ must equal the gradient of the tangent line, we set our derivative equal to $-2$ and solve for $x$:<br>\\begin{aligned} 6x - 14 &= -2 \\cr 6x &= 12 \\cr x &= 2 \\end{aligned}<br><br>Thus, the $x$-coordinate of the point $P$ is $2$.",
            "Next, we find the $y$-coordinate of $P$ by substituting $x = 2$ back into the curve's original equation:<br>\\begin{aligned} y &= 3(2)^2 - 14(2) - 8 \\cr y &= 3(4) - 28 - 8 \\cr y &= 12 - 36 \\cr y &= -24 \\end{aligned}<br><br>So, the coordinates of the point of tangency are $P(2, -24)$.",
            "Finally, since the tangent line passes through $P(2, -24)$, we substitute these coordinates into the tangent line equation $y = -2x + c$ to solve for $c$:<br>\\begin{aligned} -24 &= -2(2) + c \\cr -24 &= -4 + c \\cr c &= -20 \\end{aligned}<br><br>Thus, the coordinates of $P$ are $(2, -24)$ and the constant value is $c = -20$."
        ],
        "pi_options": [
            {
                "ans": "$P(2, -24)$, $c = -28$",
                "feedback": "This error occurs if you make a sign error when substituting the coordinates of $P(2, -24)$ into $y = -2x + c$, mistakenly calculating $-24 = -4 + c$ as $c = -28$ instead of $c = -20$."
            },
            {
                "ans": "$P(2, -24)$, $c = -24$",
                "feedback": "This represents a common misconception where the constant $c$ is assumed to be the $y$-coordinate of the point of tangency. This is only true if the tangent line is horizontal (gradient is 0)."
            },
            {
                "ans": "$P(2, 12)$, $c = -16$",
                "feedback": "This is a calculation slip where the $y$-coordinate of $P$ is evaluated incorrectly (for example, by calculating $12 - 28 - 8$ as positive $12$), which consequently leads to an incorrect value for $c$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "Finding Tangent Constants From Derivatives",
            "content": "A tangent line $y = mx + c$ shares both the gradient and the coordinates of the tangency point $P$ with the curve. First, solve $\\dfrac{\\mathrm{ d }y}{\\mathrm{ d }x} = m$ to find the $x$-coordinate, evaluate the curve's equation to find the $y$-coordinate, and then substitute both into the tangent equation to find $c$."
        }
    },
    {
        "id": "004367",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Differentiation",
        "subtopic": [
            "Tangent and Area of Triangles"
        ],
        "img": false,
        "question": "A curve $C$ has the equation:<br>$$y = 2x^2 - 8x + 9$$<br><strong>(a)</strong> Find the equation of the tangent to $C$ at the point $A$ where $x = 3$.<br><br><strong>(b)</strong> This tangent intersects the $x$-axis at the point $P$ and the $y$-axis at the point $Q$. Find the area of the triangle $OPQ$, where $O$ is the origin.",
        "steps": [
            "<strong>Part (a): Finding the equation of the tangent</strong><br><br>First, find the $y$-coordinate of point $A$ by substituting $x = 3$ into the curve's equation:<br>\\begin{aligned} y &= 2(3)^2 - 8(3) + 9 \\cr y &= 18 - 24 + 9 \\cr y &= 3 \\end{aligned}<br><br>So, the point of tangency is $A(3, 3)$.",
            "Next, find the gradient function of the curve by differentiating:<br>\\begin{aligned} \\dfrac{ \\mathrm{ d }y }{ \\mathrm{ d }x } = 4x - 8 \\end{aligned}<br><br>Now, evaluate the derivative at $x = 3$ to find the gradient of the tangent, $m$:<br>\\begin{aligned} m = 4(3) - 8 = 4 \\end{aligned}",
            "Using the point-slope formula $y - y_1 = m(x - x_1)$ with $A(3, 3)$ and $m = 4$, we find the equation of the tangent line:<br>\\begin{aligned} y - 3 &= 4(x - 3) \\cr y - 3 &= 4x - 12 \\cr y &= 4x - 9 \\end{aligned}",
            "<strong>Part (b): Finding the area of triangle $OPQ$</strong><br><br>Find the coordinate intercepts of the tangent line $y = 4x - 9$:<br><br>1. For the $x$-axis intercept (point $P$), set $y = 0$:<br>\\begin{aligned} 0 &= 4x - 9 \\cr 4x &= 9 \\cr x &= \\dfrac{ 9 }{ 4 } \\end{aligned}<br>So, $P\\left( \\dfrac{ 9 }{ 4 }, 0 \\right)$.<br><br>2. For the $y$-axis intercept (point $Q$), set $x = 0$:<br>\\begin{aligned} y &= -9 \\end{aligned}<br>So, $Q(0, -9)$.",
            "The triangle $OPQ$ is a right-angled triangle at the origin $O(0, 0)$.<br><br>The base along the $x$-axis has a positive length of $\\dfrac{ 9 }{ 4 }$ units, and the height along the $y$-axis has a positive length of $9$ units.<br><br>Calculate the area:<br>\\begin{aligned} \\text{Area} &= \\dfrac{ 1 }{ 2 } \\times \\text{base} \\times \\text{height} \\cr \\text{Area} &= \\dfrac{ 1 }{ 2 } \\times \\dfrac{ 9 }{ 4 } \\times 9 \\cr \\text{Area} &= \\dfrac{ 81 }{ 8 } \\text{ (or } 10.125 \\text{)} \\end{aligned}<br><br>Thus, the area of triangle $OPQ$ is $\\dfrac{ 81 }{ 8 }$ square units."
        ],
        "pi_options": [
            {
                "ans": "Tangent: $y = 4x - 9$; Area $= 20.25$",
                "feedback": "This is double the correct area. Remember that the area of a right-angled triangle is calculated using $\\dfrac{ 1 }{ 2 } \\times \\text{base} \\times \\text{height}$, not just $\\text{base} \\times \\text{height}$."
            },
            {
                "ans": "Tangent: $y = 4x - 3$; Area $= 1.125$",
                "feedback": "This error occurs if you make an algebraic mistake when simplifying the tangent equation, calculating $y - 3 = 4(x - 3)$ as $y = 4x - 3$. This leads to incorrect intercepts and an incorrect area calculation."
            },
            {
                "ans": "Tangent: $y = 4x - 9$; Area $= 40.5$",
                "feedback": "This error occurs if you evaluate the base intercept incorrectly as $x = 9$ (confusing it with the value of the $y$-intercept) rather than the correct value of $x = \\dfrac{ 9 }{ 4 }$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "Handling Negative Intercept Coordinates in Area Calculations",
            "content": "When finding the area of a triangle formed by coordinate axes, the base and height must always be positive lengths. If an intercept coordinate is negative (such as $y = -9$), the corresponding physical length is $+9$. Never multiply by negative values for geometric areas."
        }
    },
    {
        "id": "004368",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Differentiation",
        "subtopic": [
            "Intersection of a Curve and a Normal"
        ],
        "img": false,
        "question": "A curve $C$ has the equation:<br>$$y = 3x^2 - 5x + 2$$<br><strong>(a)</strong> Find the equation of the normal to $C$ at the point $P(1, 0)$.<br><br><strong>(b)</strong> Find the coordinates of the point $Q$ where this normal intersects the curve $C$ again.",
        "steps": [
            "<strong>Part (a): Finding the equation of the normal</strong><br><br>First, find the gradient function of the curve by differentiating:<br>\\begin{aligned} \\dfrac{ \\mathrm{ d }y }{ \\mathrm{ d }x } = 6x - 5 \\end{aligned}<br><br>Evaluate the derivative at $x = 1$ to find the gradient of the tangent, $m_t$:<br>\\begin{aligned} m_t = 6(1) - 5 = 1 \\end{aligned}",
            "The normal is perpendicular to the tangent, so its gradient ($m_n$) is the negative reciprocal of $m_t$:<br>\\begin{aligned} m_n = -\\dfrac{ 1 }{ m_t } = -\\dfrac{ 1 }{ 1 } = -1 \\end{aligned}<br><br>Use the point-slope formula with $P(1, 0)$ and gradient $m_n = -1$ to write the equation of the normal line:<br>\\begin{aligned} y - 0 &= -1(x - 1) \\cr y &= -x + 1 \\end{aligned}",
            "<strong>Part (b): Finding the second intersection point $Q$</strong><br><br>To find where the normal intersects the curve again, solve the equations simultaneously:<br>\\begin{aligned} 3x^2 - 5x + 2 &= -x + 1 \\cr 3x^2 - 4x + 1 &= 0 \\end{aligned}",
            "Since we already know that $x = 1$ is a point of intersection (the point $P$), $(x - 1)$ must be a factor of the quadratic expression. We factor the quadratic:<br>\\begin{aligned} (3x - 1)(x - 1) = 0 \\end{aligned}<br><br>This gives $x = 1$ (which is $P$) or $x = \\dfrac{ 1 }{ 3 }$ (which is $Q$).",
            "Substitute $x = \\dfrac{ 1 }{ 3 }$ back into the normal equation $y = -x + 1$ to find the $y$-coordinate of $Q$:<br>\\begin{aligned} y &= -\\left( \\dfrac{ 1 }{ 3 } \\right) + 1 \\cr y &= \\dfrac{ 2 }{ 3 } \\end{aligned}<br><br>Thus, the coordinates of the point $Q$ are $Q\\left( \\dfrac{ 1 }{ 3 }, \\dfrac{ 2 }{ 3 } \\right)$."
        ],
        "pi_options": [
            {
                "ans": "Normal: $y = -x + 1$; $Q\\left( \\dfrac{ 1 }{ 2 }, \\dfrac{ 1 }{ 2 } \\right)$",
                "feedback": "This error occurs from a factoring mistake when solving the simultaneous quadratic equation $3x^2 - 4x + 1 = 0$, incorrectly identifying the factors as $(2x - 1)(x - 1) = 0$ instead of the correct $(3x - 1)(x - 1) = 0$."
            },
            {
                "ans": "Normal: $y = x - 1$; $Q\\left( \\dfrac{ 1 }{ 3 }, -\\dfrac{ 2 }{ 3 } \\right)$",
                "feedback": "This error stems from using the gradient of the tangent ($m_t = 1$) as the gradient of the normal, or forgetting to apply the negative reciprocal sign ($m_n = -\\dfrac{ 1 }{ m_t }$)."
            },
            {
                "ans": "Normal: $y = -x + 1$; $Q\\left( \\dfrac{ 1 }{ 3 }, \\dfrac{ 1 }{ 3 } \\right)$",
                "feedback": "This is a basic calculation slip when evaluating the $y$-coordinate of the point $Q$. Substituting $x = \\dfrac{ 1 }{ 3 }$ into the line equation $y = -x + 1$ yields $y = \\dfrac{ 2 }{ 3 }$, not $\\dfrac{ 1 }{ 3 }$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "Using Known Roots to Factor Simultaneous Quadratics",
            "content": "When finding where a normal (or tangent) intersects a curve again, you already know one intersection point: the point of tangency, $P$. This means $(x - x_P)$ is guaranteed to be a factor of the resulting simultaneous equation. In this case, since $P$ is at $x = 1$, $(x - 1)$ must be a factor of $3x^2 - 4x + 1 = 0$, making the factorization $(3x - 1)(x - 1) = 0$ much easier to spot."
        }
    },
    {
        "id": "004369",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Differentiation",
        "subtopic": [
            "Stationary Points and Normals"
        ],
        "img": false,
        "question": "A curve $C$ has the equation:<br>$$y = \\frac{8}{x} + 2x$$<br><strong>(a)</strong> Find an expression for $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$.<br><br><strong>(b)</strong> The tangent to $C$ at a point $P$ in the first quadrant has a gradient of $0$. Find the coordinates of $P$.<br><br><strong>(c)</strong> Find the equation of the normal to $C$ at the point where $x = 4$.",
        "steps": [
            "<strong>Part (a): Differentiating the expression</strong><br><br>Rewrite the curve's equation using negative indices:<br>\\begin{aligned} y = 8x^{-1} + 2x \\end{aligned}<br><br>Now, apply the power rule of differentiation:<br>\\begin{aligned} \\dfrac{ \\mathrm{ d }y }{ \\mathrm{ d }x } &= -8x^{-2} + 2 \\cr &= -\\dfrac{ 8 }{ x^2 } + 2 \\end{aligned}",
            "<strong>Part (b): Finding the point $P$</strong><br><br>Since the gradient of the tangent at $P$ is $0$, we set our derivative equal to $0$:<br>\\begin{aligned} -\\dfrac{ 8 }{ x^2 } + 2 &= 0 \\cr \\dfrac{ 8 }{ x^2 } &= 2 \\cr 2x^2 &= 8 \\cr x^2 &= 4 \\cr x &= \\pm 2 \\end{aligned}<br><br>Since $P$ is in the first quadrant, the $x$-coordinate must be positive, so we take $x = 2$.",
            "Substitute $x = 2$ back into the curve's original equation to find the $y$-coordinate of $P$:<br>\\begin{aligned} y = \\dfrac{ 8 }{ 2 } + 2(2) = 4 + 4 = 8 \\end{aligned}<br><br>Thus, the coordinates of $P$ are $P(2, 8)$.",
            "<strong>Part (c): Finding the equation of the normal at $x = 4$</strong><br><br>First, find the point on the curve when $x = 4$:<br>\\begin{aligned} y = \\dfrac{ 8 }{ 4 } + 2(4) = 2 + 8 = 10 \\end{aligned}<br>So, the point on the curve is $(4, 10)$.",
            "Next, find the gradient of the tangent at $x = 4$ by evaluating the derivative:<br>\\begin{aligned} m_t = -\\dfrac{ 8 }{ 4^2 } + 2 = -\\dfrac{ 8 }{ 16 } + 2 = -0.5 + 2 = 1.5 = \\dfrac{ 3 }{ 2 } \\end{aligned}",
            "The gradient of the normal is the negative reciprocal of the tangent gradient:<br>\\begin{aligned} m_n = -\\dfrac{ 1 }{ m_t } = -\\dfrac{ 2 }{ 3 } \\end{aligned}<br><br>Use the point-slope formula with point $(4, 10)$ and gradient $m_n = -\\dfrac{ 2 }{ 3 }$ to write the normal equation:<br>\\begin{aligned} y - 10 &= -\\dfrac{ 2 }{ 3 }(x - 4) \\cr 3(y - 10) &= -2(x - 4) \\cr 3y - 30 &= -2x + 8 \\cr 2x + 3y - 38 &= 0 \\text{ (or } y = -\\dfrac{ 2 }{ 3 }x + \\dfrac{ 38 }{ 3 }\\text{)} \\end{aligned}"
        ],
        "pi_options": [
            {
                "ans": "$P(-2, -8)$, Normal: $2x + 3y - 38 = 0$",
                "feedback": "This error occurs if you ignore the restriction that $P$ must lie in the first quadrant. In the first quadrant, both coordinates must be positive, which means you must choose $x = 2$ instead of $x = -2$."
            },
            {
                "ans": "$P(2, 8)$, Normal: $y = 1.5x + 4$",
                "feedback": "This error occurs if you use the gradient of the tangent ($m_t = 1.5$) instead of the perpendicular gradient of the normal ($m_n = -\\dfrac{ 2 }{ 3 }$) to find the equation of the normal."
            },
            {
                "ans": "$P(2, 8)$, Normal: $2x + 3y - 26 = 0$",
                "feedback": "This is the result of using the correct normal gradient but mistakenly using the coordinates of point $P(2, 8)$ instead of the coordinates at $x = 4$ (which are $(4, 10)$) to write the normal equation."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "Understanding Perpendicular Gradients",
            "content": "Always distinguish carefully between the tangent and the normal. The tangent gradient is given by the derivative $m_t = \\dfrac{\\mathrm{ d }y}{\\mathrm{ d }x}$. The normal is perpendicular to the tangent, so its gradient is the negative reciprocal: $m_n = -\\dfrac{ 1 }{ m_t }$. Verify that $m_t \\times m_n = -1$."
        }
    },
    {
        "id": "004370",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Quadratics",
        "subtopic": [
            "Discriminant Tangency Condition"
        ],
        "img": false,
        "question": "A curve $C$ has the equation $y = x^2 - 4x + 7$ and a family of lines $L$ has the equation $y = mx + 3$, where $m$ is a constant.<br><br><strong>(a)</strong> Show that if the line $L$ is a tangent to the curve $C$, then $m$ must satisfy the equation:<br>$$(m+4)^2 - 16 = 0$$<br><strong>(b)</strong> Hence, find the two possible values of the gradient $m$.<br><br><strong>(c)</strong> For each value of $m$, find the coordinates of the point of tangency.",
        "steps": [
            "<strong>Part (a): Setting up the tangency condition</strong><br><br>To find the intersection of the curve and the line, set their equations equal to each other:<br>\\begin{aligned} x^2 - 4x + 7 &= mx + 3 \\cr x^2 - 4x - mx + 7 - 3 &= 0 \\cr x^2 - (m+4)x + 4 &= 0 \\end{aligned}",
            "For the line to be a tangent to the curve, they must intersect at exactly one point. This means the quadratic equation must have exactly one real root, so its discriminant must equal zero ($\\{ b^2 - 4ac = 0 \\}$):<br>\\begin{aligned} a &= 1 \\cr b &= -(m + 4) \\cr c &= 4 \\end{aligned}<br><br>Substitute these values into the discriminant formula:<br>\\begin{aligned} [-(m + 4)]^2 - 4(1)(4) &= 0 \\cr (m + 4)^2 - 16 &= 0 \\end{aligned}<br>This is the required equation.",
            "<strong>Part (b): Solving for $m$</strong><br><br>We solve the equation by rearranging and taking square roots:<br>\\begin{aligned} (m+4)^2 &= 16 \\cr m+4 &= \\pm 4 \\end{aligned}<br><br>This gives two possible equations:<br>1. $m+4 = 4 \\implies m = 0$<br>2. $m+4 = -4 \\implies m = -8$<br><br>Thus, the two possible gradients are $m = 0$ and $m = -8$.",
            "<strong>Part (c): Finding the points of tangency</strong><br><br>We find the points of tangency by substituting each value of $m$ back into our simultaneous quadratic $x^2 - (m+4)x + 4 = 0$:<br><br><strong>Case 1: $m = 0$</strong><br>\\begin{aligned} x^2 - (0+4)x + 4 &= 0 \\cr x^2 - 4x + 4 &= 0 \\cr (x - 2)^2 &= 0 \\cr x &= 2 \\end{aligned}<br><br>Substitute $x = 2$ into the line equation $y = 0x + 3$ to get $y = 3$.<br>So, the first point of tangency is $(2, 3)$.",
            "<strong>Case 2: $m = -8$</strong><br>\\begin{aligned} x^2 - (-8+4)x + 4 &= 0 \\cr x^2 + 4x + 4 &= 0 \\cr (x + 2)^2 &= 0 \\cr x &= -2 \\end{aligned}<br><br>Substitute $x = -2$ into the line equation $y = -8x + 3$ to get $y = -8(-2) + 3 = 19$.<br>So, the second point of tangency is $(-2, 19)$."
        ],
        "pi_options": [
            {
                "ans": "$m = 4$ or $m = -4$; Points: $(2, 3)$ and $(-2, 19)$",
                "feedback": "This error occurs when solving the quadratic $(m+4)^2 = 16$ as $m+4 = 4 \\implies m = 0$ but incorrectly carrying out the arithmetic for the negative root to get $m = \\pm 4$ instead of $m = 0$ and $m = -8$."
            },
            {
                "ans": "$m = 0$ or $m = -8$; Points: $(2, 3)$ and $(2, 19)$",
                "feedback": "This is a slip in finding the points of tangency. Remember that each gradient $m$ yields a distinct repeated root quadratic, resulting in different $x$-coordinates ($x = 2$ and $x = -2$)."
            },
            {
                "ans": "$m = 0$ or $m = -8$; Points: $(3, 3)$ and $(-2, 15)$",
                "feedback": "This error stems from a coordinate calculation slip when substituting the $x$-coordinates back into the equations to find the corresponding $y$-coordinates."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Dual Approaches of Calculus and the Discriminant",
            "content": "A line $y = mx + c$ is tangent to a quadratic curve $y = ax^2 + bx + d$ if and only if they intersect at exactly one point. This can be solved in two ways: by setting the discriminant of their simultaneous quadratic to zero (algebraic), or by setting $\\dfrac{\\mathrm{ d }y}{\\mathrm{ d }x} = m$ (calculus). Both methods lead to the exact same results, showing the deep connection between algebra and calculus."
        }
    },
    {
        "id": "004371",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Exponentials and Logarithms",
        "subtopic": [
            "Solving Logarithmic and Exponential Equations"
        ],
        "img": false,
        "question": "<strong>(a)</strong> Solve the logarithmic equation:<br>$$2\\log_{10} x = 1 + \\log_{10} 8 - \\log_{10} 5$$<br><strong>(b)</strong> Solve the exponential equation:<br>$$5^x = 3e^{0.2x}$$<br>giving your answer correct to 3 decimal places.<br><br><strong>(c)</strong> Express $9^x - 12 \\times 3^x$ in terms of $y$, where $y = 3^x$. <br>Hence, solve the equation:<br>$$9^x - 12 \\times 3^x = -27$$",
        "steps": [
            "<strong>Part (a): Solving the logarithmic equation</strong><br><br>To solve the equation, we rewrite the constant 1 as a logarithm in base 10: $1 = \\log_{10} 10$.<br><br>Substitute this into the equation and use the laws of logarithms:<br>\\begin{aligned} 2\\log_{10} x &= \\log_{10} 10 + \\log_{10} 8 - \\log_{10} 5 \\cr \\log_{10} (x^2) &= \\log_{10} \\left( \\dfrac{ 10 \\times 8 }{ 5 } \\right) \\cr \\log_{10} (x^2) &= \\log_{10} 16 \\end{aligned}",
            "Now, equate the arguments of the logarithms:<br>\\begin{aligned} x^2 &= 16 \\cr x &= \\pm 4 \\end{aligned}<br><br>Since the argument of a logarithm must be strictly positive ($x > 0$), we reject $x = -4$.<br>Thus, the only valid solution is $x = 4$.",
            "<strong>Part (b): Solving the exponential equation</strong><br><br>Take the natural logarithm ($\\ln$) of both sides of $5^x = 3e^{0.2x}$:<br>\\begin{aligned} \\ln(5^x) &= \\ln(3e^{0.2x}) \\cr x\\ln(5) &= \\ln(3) + 0.2x \\end{aligned}",
            "Rearrange to group the $x$ terms on one side and solve:<br>\\begin{aligned} x\\ln(5) - 0.2x &= \\ln(3) \\cr x\\left( \\ln(5) - 0.2 \\right) &= \\ln(3) \\cr x &= \\dfrac{ \\ln(3) }{ \\ln(5) - 0.2 } \\end{aligned}<br><br>Evaluate this expression numerically:<br>\\begin{aligned} x &\\approx \\dfrac{ 1.098612 }{ 1.609438 - 0.2 } \\cr x &\\approx \\dfrac{ 1.098612 }{ 1.409438 } \\cr x &\\approx 0.779468 \\end{aligned}<br><br>Rounding to 3 decimal places gives $x \\approx 0.779$.",
            "<strong>Part (c): Solving the quadratic in exponential form</strong><br><br>Let $y = 3^x$. We can express $9^x$ as $(3^2)^x = (3^x)^2 = y^2$.<br><br>Substituting these into $9^x - 12 \\times 3^x$, our expression in terms of $y$ is $y^2 - 12y$.<br><br>We now solve the equation $y^2 - 12y = -27$:<br>\\begin{aligned} y^2 - 12y + 27 &= 0 \\cr (y - 3)(y - 9) &= 0 \\end{aligned}<br><br>This yields $y = 3$ or $y = 9$.",
            "Now substitute back $y = 3^x$ and solve for $x$:<br>1. For $y = 3$:<br>\\begin{aligned} 3^x &= 3 \\implies x = 1 \\end{aligned}<br><br>2. For $y = 9$:<br>\\begin{aligned} 3^x &= 9 \\implies x = 2 \\end{aligned}<br><br>Thus, the solutions are $x = 1$ or $x = 2$."
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $x = 4$; <strong>(b)</strong> $x = 0.780$; <strong>(c)</strong> $x = 1$ or $x = 2$",
                "feedback": "This is a rounding slip in part (b). Evaluating $\\dfrac{ \\ln(3) }{ \\ln(5) - 0.2 }$ yields $0.779468...$ Since the digit in the ten-thousandths place is 4, this must round down to $0.779$ instead of up to $0.780$."
            },
            {
                "ans": "<strong>(a)</strong> $x = 4$; <strong>(b)</strong> $x = 0.779$; <strong>(c)</strong> $x = 3$ or $x = 9$",
                "feedback": "In part (c), $y = 3$ and $y = 9$ are the intermediate solutions for $y$, where $y = 3^x$. You must complete the final step of solving for $x$ by writing $3^x = 3 \\implies x = 1$ and $3^x = 9 \\implies x = 2$."
            },
            {
                "ans": "<strong>(a)</strong> $x = 4$ or $x = -4$; <strong>(b)</strong> $x = 0.779$; <strong>(c)</strong> $x = 1$ or $x = 2$",
                "feedback": "In part (a), the quadratic equation $x^2 = 16$ mathematically yields $x = \\pm 4$. However, you must reject $x = -4$ because the original equation contains $\\log_{10} x$, and the argument of a logarithm must be strictly positive."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "Logarithmic Domain Constraints",
            "content": "Always check your final answers against the domain constraints of the original logarithmic equations. Since $\\log_b(f(x))$ is only defined when $f(x) > 0$, any algebraic solution that causes an argument to be negative or zero must be strictly rejected."
        }
    },
    {
        "id": "004372",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Exponentials and Logarithms",
        "subtopic": [
            "Solving Logarithmic Equations with Divisibility"
        ],
        "img": false,
        "question": "Solve the following equation for $x$:<br>$$\\log_2 (2x + 1) - \\log_2 (x - 1) = 3$$<br>Show all of your working clearly.",
        "steps": [
            "Apply the subtraction law of logarithms ($\\{\\log_b A - \\log_b B = \\log_b \\left( \\dfrac{ A }{ B } \\right)\\}$) to combine the left-hand side into a single logarithmic term:<br>\\begin{aligned} \\log_2 \\left( \\dfrac{ 2x + 1 }{ x - 1 } \\right) = 3 \\end{aligned}",
            "To remove the logarithm, rewrite the equation in its equivalent exponential form:<br>\\begin{aligned} \\dfrac{ 2x + 1 }{ x - 1 } &= 2^3 \\cr \\dfrac{ 2x + 1 }{ x - 1 } &= 8 \\end{aligned}",
            "Solve the resulting linear equation for $x$:<br>\\begin{aligned} 2x + 1 &= 8(x - 1) \\cr 2x + 1 &= 8x - 8 \\cr -6x &= -9 \\cr x &= \\dfrac{ -9 }{ -6 } \\cr x &= 1.5 \\text{ (or } \\dfrac{ 3 }{ 2 }\\text{)} \\end{aligned}",
            "We must verify that $x = 1.5$ satisfies the domain of the original logs:<br>1. For $\\log_2 (2x + 1)$: $2(1.5) + 1 = 4 > 0$. (Valid)<br>2. For $\\log_2 (x - 1)$: $1.5 - 1 = 0.5 > 0$. (Valid)<br><br>Thus, the solution is $x = 1.5$."
        ],
        "pi_options": [
            {
                "ans": "$x = -1.5$",
                "feedback": "This is a sign error during algebraic rearrangement. Moving terms across the equals sign correctly yields $2x - 8x = -8 - 1 \\implies -6x = -9 \\implies x = 1.5$."
            },
            {
                "ans": "$x = 1.25$",
                "feedback": "This error occurs if you incorrectly expand $8(x-1)$ as $8x-1$ or $8x-2$, failing to distribute the multiplication to the constant term inside the parentheses."
            },
            {
                "ans": "$x = 0.4$",
                "feedback": "This error can occur if you mistake the base of the exponent as $3^2 = 9$ or $2 \\times 3 = 6$ instead of $2^3 = 8$ when converting the logarithmic equation to exponential form."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "Verifying Logarithmic Arguments",
            "content": "Even if your algebraic steps are perfectly correct, you should always check your final values against the original logs. If any solution results in a negative argument, such as $\\log_b(-5)$, it must be discarded immediately."
        }
    },
    {
        "id": "004373",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Exponentials and Logarithms",
        "subtopic": [
            "Solving Exponential Equations with Different Bases"
        ],
        "img": false,
        "question": "Solve the exponential equation:<br>$$4^{2x - 1} = 5^{x + 2}$$<br>giving your answer correct to 3 decimal places.",
        "steps": [
            "Take the natural logarithm ($\\ln$) of both sides of the equation:<br>\\begin{aligned} \\ln\\left( 4^{2x - 1} \\right) &= \\ln\\left( 5^{x + 2} \\right) \\end{aligned}",
            "Use the power law of logarithms to bring the exponents down as multipliers:<br>\\begin{aligned} (2x - 1)\\ln(4) &= (x + 2)\\ln(5) \\end{aligned}",
            "Expand the brackets and group all terms containing $x$ on one side of the equation:<br>\\begin{aligned} 2x\\ln(4) - \\ln(4) &= x\\ln(5) + 2\\ln(5) \\cr 2x\\ln(4) - x\\ln(5) &= \\ln(4) + 2\\ln(5) \\end{aligned}",
            "Factor out $x$ on the left-hand side and solve:<br>\\begin{aligned} x\\left( 2\\ln(4) - \\ln(5) \\right) &= \\ln(4) + 2\\ln(5) \\cr x &= \\dfrac{ \\ln(4) + 2\\ln(5) }{ 2\\ln(4) - \\ln(5) } \\end{aligned}",
            "Evaluate this expression numerically using a calculator:<br>\\begin{aligned} x &\\approx \\dfrac{ 1.386294 + 2(1.609438) }{ 2(1.386294) - 1.609438 } \\cr x &\\approx \\dfrac{ 1.386294 + 3.218876 }{ 2.772588 - 1.609438 } \\cr x &\\approx \\dfrac{ 4.605170 }{ 1.163150 } \\cr x &\\approx 3.959220 \\end{aligned}<br><br>Rounding to 3 decimal places gives $x \\approx 3.959$."
        ],
        "pi_options": [
            {
                "ans": "$x = 3.961$",
                "feedback": "This is a minor calculation/rounding slip that occurs if you use rounded intermediate values for $\\ln(4) \\approx 1.3863$ and $\\ln(5) \\approx 1.6094$ and make a rounding error during division. Always use full calculator precision before rounding at the very end."
            },
            {
                "ans": "$x = 1.000$",
                "feedback": "This error occurs if you attempt to simplify the exponents directly without taking logarithms, such as incorrectly writing $2x - 1 = x + 2$ which ignores the differing base values."
            },
            {
                "ans": "$x = 2.454$",
                "feedback": "This error is typically caused by a sign error when grouping the terms, such as subtracting $\\ln(4)$ on the right-hand side instead of adding it, leading to $x = \\dfrac{ 2\\ln(5) - \\ln(4) }{ 2\\ln(4) - \\ln(5) } \\approx 2.454$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "Exact Algebraic Rearrangements",
            "content": "To avoid early rounding errors, do not convert logs to decimals in the intermediate steps. Keep them in their exact form (like $\\ln(4)$ and $\\ln(5)$) as coefficients, factor out $x$ algebraically, and only compute the final fraction at the very end."
        }
    },
    {
        "id": "004374",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Exponentials and Logarithms",
        "subtopic": [
            "Solving Quadratics in Exponential Form"
        ],
        "img": false,
        "question": "Solve the equation:<br>$$2^{2x} - 2^{x + 2} - 32 = 0$$<br>giving your answer in its simplest exact form.",
        "steps": [
            "Use the laws of indices to split and rewrite the exponential terms in terms of a single base $2^x$:<br>1. $2^{2x} = (2^x)^2$<br>2. $2^{x + 2} = 2^x \\times 2^2 = 4(2^x)$<br><br>Substitute these into our equation:<br>\\begin{aligned} (2^x)^2 - 4(2^x) - 32 = 0 \\end{aligned}",
            "Introduce a substitution variable. Let $y = 2^x$. This transforms the exponential equation into a standard quadratic equation in terms of $y$:<br>\\begin{aligned} y^2 - 4y - 32 = 0 \\end{aligned}",
            "Solve the quadratic equation by factoring:<br>\\begin{aligned} (y - 8)(y + 4) = 0 \\end{aligned}<br>This gives $y = 8$ or $y = -4$.",
            "Now substitute $y = 2^x$ back to solve for $x$:<br><br>1. For $y = 8$:<br>\\begin{aligned} 2^x &= 8 \\cr 2^x &= 2^3 \\implies x = 3 \\end{aligned}<br><br>2. For $y = -4$:<br>\\begin{aligned} 2^x &= -4 \\end{aligned}<br>Since $2^x$ must be strictly positive for all real values of $x$ (the range of $a^x$ is $y > 0$), this equation has no real solutions.<br><br>Thus, the only valid solution is $x = 3$."
        ],
        "pi_options": [
            {
                "ans": "$x = 3$ or $x = -2$",
                "feedback": "This is a very common error where a student attempts to solve $2^x = -4$ by writing $x = -2$. However, $2^{-2} = \\dfrac{ 1 }{ 4 }$, which is positive. An exponential term with a positive base can never equal a negative number."
            },
            {
                "ans": "$y = 8$ or $y = -4$",
                "feedback": "These are the values for the substitution variable $y$, where $y = 2^x$. You must complete the final step of the problem by substituting $2^x$ back in and solving for $x$."
            },
            {
                "ans": "$x = 5$",
                "feedback": "This error occurs if you misinterpret the laws of indices, for example, incorrectly expanding $2^{x+2}$ as $2^x + 2$, which changes the quadratic coefficients and leads to incorrect roots."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "Exponential Range Limitations",
            "content": "Always remember that $a^x > 0$ for any real $x$ and any positive base $a$. When solving equations in quadratic form, any negative roots for the substitution variable (such as $y = -4$) must be discarded immediately as they cannot yield any real solutions for $x$."
        }
    },
    {
        "id": "004375",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Exponentials and Logarithms",
        "subtopic": [
            "Simultaneous Logarithmic Equations"
        ],
        "img": false,
        "question": "Solve the simultaneous equations:<br>$$\\log_3 x + \\log_3 y = 2$$<br>$$\\log_3 (2x - y) = 1$$<br>Show all of your algebraic working clearly, explaining why any solutions must be rejected.",
        "steps": [
            "Apply the addition law of logarithms to combine the left-hand side of the first equation:<br>\\begin{aligned} \\log_3(xy) = 2 \\end{aligned}<br><br>Convert this to its equivalent exponential form:<br>\\begin{aligned} xy = 3^2 \\implies xy = 9 \\end{aligned}",
            "Now convert the second equation to its equivalent exponential form:<br>\\begin{aligned} 2x - y = 3^1 \\implies 2x - y = 3 \\end{aligned}",
            "We now have a system of simultaneous equations:<br>1. $xy = 9$<br>2. $2x - y = 3 \\implies y = 2x - 3$<br><br>Substitute the expression for $y$ from the second equation into the first equation:<br>\\begin{aligned} x(2x - 3) &= 9 \\cr 2x^2 - 3x - 9 &= 0 \\end{aligned}",
            "Solve the quadratic equation by factoring:<br>\\begin{aligned} 2x^2 - 6x + 3x - 9 &= 0 \\cr 2x(x - 3) + 3(x - 3) &= 0 \\cr (2x + 3)(x - 3) &= 0 \\end{aligned}<br><br>This gives $x = 3$ or $x = -1.5$ (or $-\\dfrac{ 3 }{ 2 }$).",
            "Now, calculate the corresponding $y$-values using $y = 2x - 3$:<br><br>1. If $x = 3$:<br>\\begin{aligned} y = 2(3) - 3 = 3 \\end{aligned}<br><br>2. If $x = -1.5$:<br>\\begin{aligned} y = 2(-1.5) - 3 = -6 \\end{aligned}",
            "Verify both coordinate pairs against the domains of the original logarithmic equations:<br><br>1. For $(3, 3)$: the log arguments are $x = 3 > 0$, $y = 3 > 0$, and $2x - y = 6 - 3 = 3 > 0$. All are positive, so $(3, 3)$ is a valid solution.<br><br>2. For $(-1.5, -6)$: the log arguments are $x = -1.5 < 0$ and $y = -6 < 0$. Since logarithms of negative numbers are undefined, this coordinate pair must be rejected.<br><br>Thus, the only valid solution is $x = 3, y = 3$."
        ],
        "pi_options": [
            {
                "ans": "$x = 3, y = 3$ and $x = -1.5, y = -6$",
                "feedback": "This is a failure to apply domain restrictions. You must reject the coordinate pair $(-1.5, -6)$ because substituting negative values into $\\log_3 x$ and $\\log_3 y$ results in undefined real values."
            },
            {
                "ans": "$x = 1.5, y = 6$",
                "feedback": "This error occurs from a sign mistake during the factoring step, incorrectly factoring $2x^2 - 3x - 9 = 0$ as $(2x - 3)(x + 3) = 0$, leading to incorrect $x$-coordinates."
            },
            {
                "ans": "$x = 3, y = -3$",
                "feedback": "This is a basic algebraic slip when substituting $x = 3$ into $y = 2x - 3$, incorrectly performing the subtraction as $6 - 3 = -3$ instead of $+3$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "Mandatory Domain Checks in Systems of Equations",
            "content": "When solving simultaneous logarithmic systems, algebraic manipulations can introduce extraneous solutions. Always check each candidate solution pair $(x, y)$ in every original logarithmic term. If any term has a non-positive argument, that entire coordinate pair must be rejected."
        }
    },
    {
        "id": "004376",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Coordinate Geometry",
        "topic": "Coordinate Geometry of the Circle",
        "subtopic": [
            "Semicircles and Finding Circle Equations"
        ],
        "img": false,
        "question": "The coordinates of three points $A$, $B$, and $C$ are $(2, 6)$, $(4, 10)$, and $(6, 4)$ respectively.<br><br><strong>(a)</strong> Show that $BAC$ is a right angle.<br><br><strong>(b)</strong> A circle passes through all three points $A$, $B$, and $C$. Determine the equation of the circle.",
        "steps": [
            "<strong>Part (a): Showing $BAC$ is a right angle</strong><br><br>To show that angle $BAC$ is a right angle, we calculate the gradients of the line segments $AB$ and $AC$ and show that they are perpendicular:<br><br>1. Gradient of $AB$ ($m_{AB}$):<br>\\begin{aligned} m_{AB} &= \\dfrac{ 10 - 6 }{ 4 - 2 } \\cr m_{AB} &= \\dfrac{ 4 }{ 2 } \\cr m_{AB} &= 2 \\end{aligned}<br><br>2. Gradient of $AC$ ($m_{AC}$):<br>\\begin{aligned} m_{AC} &= \\dfrac{ 4 - 6 }{ 6 - 2 } \\cr m_{AC} &= \\dfrac{ -2 }{ 4 } \\cr m_{AC} &= -\\dfrac{ 1 }{ 2 } \\end{aligned}",
            "Multiply the two gradients to check for perpendicularity:<br>\\begin{aligned} m_{AB} \\times m_{AC} &= 2 \\times \\left( -\\dfrac{ 1 }{ 2 } \\right) \\cr &= -1 \\end{aligned}<br><br>Since the product of the gradients is $-1$, the lines $AB$ and $AC$ are perpendicular, which proves that $BAC$ is a right angle.",
            "<strong>Part (b): Determining the equation of the circle</strong><br><br>By Thales's Theorem, since $BAC$ is a right angle on the circumference of a circle, the line segment connecting $B(4, 10)$ and $C(6, 4)$ must be a diameter of the circle.<br><br>The centre of the circle is the midpoint of the diameter $BC$:<br>\\begin{aligned} \\text{Centre } (h, k) &= \\left( \\dfrac{ 4 + 6 }{ 2 }, \\dfrac{ 10 + 4 }{ 2 } \\right) \\cr &= (5, 7) \\end{aligned}",
            "The radius squared ($r^2$) is the distance from the centre $(5, 7)$ to any point on the circle, such as $C(6, 4)$:<br>\\begin{aligned} r^2 &= (6 - 5)^2 + (4 - 7)^2 \\cr r^2 &= 1^2 + (-3)^2 \\cr r^2 &= 1 + 9 \\cr r^2 &= 10 \\end{aligned}<br><br>Now, write the equation of the circle in standard form $(x - h)^2 + (y - k)^2 = r^2$:<br>\\begin{aligned} (x - 5)^2 + (y - 7)^2 = 10 \\end{aligned}"
        ],
        "pi_options": [
            {
                "ans": "$(x - 5)^2 + (y - 7)^2 = 100$",
                "feedback": "This error occurs if you use the diameter squared (or $2r$ squared) instead of the radius squared ($r^2$) in the equation of the circle, incorrectly calculating $r^2 = 100$ instead of $r^2 = 10$."
            },
            {
                "ans": "$(x - 5)^2 + (y - 7)^2 = 40$",
                "feedback": "This is a calculation error in finding the radius squared. Make sure you calculate the distance from the centre $(5, 7)$ to one of the points correctly: $r^2 = (6-5)^2 + (4-7)^2 = 1^2 + (-3)^2 = 1 + 9 = 10$, not $40$."
            },
            {
                "ans": "$(x + 5)^2 + (y + 7)^2 = 10$",
                "feedback": "This error occurs if you forget to flip the signs of the coordinates when writing the equation of the circle. A centre of $(h, k) = (5, 7)$ results in $(x - 5)^2 + (y - 7)^2 = r^2$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "Thales's Theorem in Circle Coordinate Geometry",
            "content": "According to Thales's Theorem, the angle subtended by a diameter at any point on the circle is a right angle. Conversely, if three points $A$, $B$, and $C$ on a circle form a right angle at $A$, then the line segment $BC$ must be a diameter of the circle. This lets you immediately find the centre of the circle (midpoint of $BC$) and its radius without solving simultaneous equations."
        }
    },
    {
        "id": "004377",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Coordinate Geometry",
        "topic": "Coordinate Geometry of the Circle",
        "subtopic": [
            "Completing the Square and Tangents to Circles"
        ],
        "img": false,
        "question": "A circle $C$ has the equation:<br>$$x^2 + y^2 - 6x + 8y - 9 = 0$$<br><strong>(a)</strong> Find the coordinates of the centre of $C$ and the exact radius of $C$.<br><br><strong>(b)</strong> Show that the point $P(6, 1)$ lies on the circle.<br><br><strong>(c)</strong> Find the equation of the tangent to $C$ at the point $P$, giving your answer in the form $ax + by + c = 0$, where $a$, $b$, and $c$ are integers.",
        "steps": [
            "<strong>Part (a): Finding the centre and radius</strong><br><br>Complete the square for both $x$ and $y$ variables in the equation:<br>\\begin{aligned} x^2 - 6x &= (x - 3)^2 - 9 \\cr y^2 + 8y &= (y + 4)^2 - 16 \\end{aligned}<br><br>Substitute these back into the original equation:<br>\\begin{aligned} (x - 3)^2 - 9 + (y + 4)^2 - 16 - 9 &= 0 \\cr (x - 3)^2 + (y + 4)^2 - 34 &= 0 \\cr (x - 3)^2 + (y + 4)^2 &= 34 \\end{aligned}<br><br>Thus, the centre of $C$ is $(3, -4)$ and the exact radius is $r = \\sqrt{ 34 }$.",
            "<strong>Part (b): Showing $P(6, 1)$ lies on the circle</strong><br><br>Substitute the coordinates $x = 6, y = 1$ into our completed square equation:<br>\\begin{aligned} (6 - 3)^2 + (1 + 4)^2 &= 3^2 + 5^2 \\cr &= 9 + 25 \\cr &= 34 \\end{aligned}<br><br>Since the substitution satisfies the circle's equation, the point $P(6, 1)$ lies on the circle.",
            "<strong>Part (c): Finding the equation of the tangent at $P$</strong><br><br>First, find the gradient of the radius connecting the centre $C(3, -4)$ to $P(6, 1)$:<br>\\begin{aligned} m_r = \\dfrac{ 1 - (-4) }{ 6 - 3 } = \\dfrac{ 5 }{ 3 } \\end{aligned}<br><br>Since the tangent is perpendicular to the radius, its gradient ($m_t$) is the negative reciprocal:<br>\\begin{aligned} m_t = -\\dfrac{ 1 }{ m_r } = -\\dfrac{ 3 }{ 5 } \\end{aligned}",
            "Use the point-slope formula with $P(6, 1)$ and $m_t = -\\dfrac{ 3 }{ 5 }$:<br>\\begin{aligned} y - 1 &= -\\dfrac{ 3 }{ 5 }(x - 6) \\cr 5(y - 1) &= -3(x - 6) \\cr 5y - 5 &= -3x + 18 \\cr 3x + 5y - 23 &= 0 \\end{aligned}<br><br>Thus, the equation of the tangent is $3x + 5y - 23 = 0$."
        ],
        "pi_options": [
            {
                "ans": "Centre: $(3, -4)$, Radius: $34$, Tangent: $3x + 5y - 23 = 0$",
                "feedback": "Remember that when completing the square, the constant on the right-hand side is $r^2$. Thus, the radius is $\\sqrt{ 34 }$, not $34$."
            },
            {
                "ans": "Centre: $(-3, 4)$, Radius: $\\sqrt{ 34 }$, Tangent: $3x + 5y + 23 = 0$",
                "feedback": "Be careful with signs when completing the square: $x^2 - 6x = (x-3)^2 - 9$ and $y^2 + 8y = (y+4)^2 - 16$. This gives a centre of $(3, -4)$, not $(-3, 4)$."
            },
            {
                "ans": "Centre: $(3, -4)$, Radius: $\\sqrt{ 34 }$, Tangent: $5x - 3y - 27 = 0$",
                "feedback": "This is the result of using the gradient of the radius ($m_r = \\dfrac{ 5 }{ 3 }$) instead of the perpendicular gradient of the tangent ($m_t = -\\dfrac{ 3 }{ 5 }$) to write the tangent equation."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "Finding Tangents via the Radius Gradient",
            "content": "A tangent to a circle at point $P$ is always perpendicular to the radius connecting the centre to $P$. Therefore, first find the gradient of the radius, $m_r = \\dfrac{ y_P - y_C }{ x_P - x_C }$, and then use the negative reciprocal $m_t = -\\dfrac{ 1 }{ m_r }$ for the tangent's gradient."
        }
    },
    {
        "id": "004378",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Coordinate Geometry",
        "topic": "Coordinate Geometry of the Circle",
        "subtopic": [
            "Intersection of a Line and a Circle"
        ],
        "img": false,
        "question": "A circle $C$ has the equation:<br>$$(x - 2)^2 + (y - 1)^2 = 25$$<br>The line $L$ has the equation:<br>$$y = x - 2$$<br><strong>(a)</strong> Show that the line $L$ intersects the circle $C$ at the points $P(6, 4)$ and $Q(-1, -3)$.<br><br><strong>(b)</strong> Calculate the exact length of the chord $PQ$, giving your answer in its simplest surd form.",
        "steps": [
            "<strong>Part (a): Showing the intersection points</strong><br><br>Substitute the equation of the line $y = x - 2$ into the equation of the circle:<br>\\begin{aligned} (x - 2)^2 + (x - 2 - 1)^2 &= 25 \\cr (x - 2)^2 + (x - 3)^2 &= 25 \\end{aligned}<br><br>Expand both brackets and simplify:<br>\\begin{aligned} (x^2 - 4x + 4) + (x^2 - 6x + 9) &= 25 \\cr 2x^2 - 10x + 13 &= 25 \\cr 2x^2 - 10x - 12 &= 0 \\end{aligned}",
            "Divide the entire equation by 2 and factor the resulting quadratic:<br>\\begin{aligned} x^2 - 5x - 6 &= 0 \\cr (x - 6)(x + 1) &= 0 \\end{aligned}<br><br>This gives $x = 6$ or $x = -1$.",
            "Now substitute these $x$-values back into $y = x - 2$ to find the corresponding $y$-coordinates:<br><br>1. For $x = 6$: $y = 6 - 2 = 4 \\implies P(6, 4)$<br>2. For $x = -1$: $y = -1 - 2 = -3 \\implies Q(-1, -3)$<br><br>This confirms that the line intersects the circle at $P(6, 4)$ and $Q(-1, -3)$.",
            "<strong>Part (b): Calculating the chord length $PQ$</strong><br><br>Use the distance formula between the points $P(6, 4)$ and $Q(-1, -3)$:<br>\\begin{aligned} PQ &= \\sqrt{ (6 - (-1))^2 + (4 - (-3))^2 } \\cr &= \\sqrt{ 7^2 + 7^2 } \\cr &= \\sqrt{ 49 + 49 } \\cr &= \\sqrt{ 98 } \\end{aligned}<br><br>Simplify the surd:<br>\\begin{aligned} PQ &= \\sqrt{ 49 \\times 2 } \\cr &= 7\\sqrt{ 2 } \\end{aligned}<br><br>Thus, the exact length of the chord $PQ$ is $7\\sqrt{ 2 }$ units."
        ],
        "pi_options": [
            {
                "ans": "$PQ = \\sqrt{ 14 }$",
                "feedback": "This error occurs if you subtract the coordinates incorrectly or forget to square the differences before adding, calculating $PQ = \\sqrt{ (6 - (-1)) + (4 - (-3)) } = \\sqrt{ 7 + 7 } = \\sqrt{ 14 }$."
            },
            {
                "ans": "$PQ = 14$",
                "feedback": "This error occurs if you assume $PQ = 7 + 7 = 14$. You must use the Pythagorean distance formula $PQ = \\sqrt{ \\Delta x^2 + \\Delta y^2 } = \\sqrt{ 49 + 49 } = \\sqrt{ 98 } = 7\\sqrt{ 2 }$."
            },
            {
                "ans": "$PQ = 7\\sqrt{ 2 }$ (with $P(6, 4)$ and $Q(1, -1)$)",
                "feedback": "Double check your factorization of the simultaneous quadratic $x^2 - 5x - 6 = 0$. This factors to $(x-6)(x+1) = 0$, giving $x = 6$ and $x = -1$, not $x = 1$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "Symmetric Surds in Diagonal Chords",
            "content": "When a line has a gradient of $1$ (like $y = x - 2$), the change in $x$ and $y$ between any two points is identical: $\\Delta x = \\Delta y$. Therefore, the chord length will always be in the form $\\sqrt{ d^2 + d^2 } = d\\sqrt{ 2 }$, where $d$ is the difference in $x$-coordinates. This is a quick way to double-check surd calculations."
        }
    },
    {
        "id": "004379",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Coordinate Geometry",
        "topic": "Coordinate Geometry of the Circle",
        "subtopic": [
            "Circle Diameter Endpoints"
        ],
        "img": false,
        "question": "The points $A(-2, 5)$ and $B(6, 11)$ are the endpoints of a diameter of a circle $C$.<br><br><strong>(a)</strong> Find the coordinates of the centre of $C$.<br><br><strong>(b)</strong> Find the radius of $C$, giving your answer in its simplest surd form.<br><br><strong>(c)</strong> Write down the equation of the circle in the form $x^2 + y^2 + ax + by + c = 0$, where $a$, $b$, and $c$ are integers.",
        "steps": [
            "<strong>Part (a): Finding the centre of $C$</strong><br><br>Since $A$ and $B$ are the endpoints of a diameter, the centre of the circle is the midpoint of the line segment $AB$:<br>\\begin{aligned} \\text{Centre } (h, k) &= \\left( \\dfrac{ -2 + 6 }{ 2 }, \\dfrac{ 5 + 11 }{ 2 } \\right) \\cr &= \\left( \\dfrac{ 4 }{ 2 }, \\dfrac{ 16 }{ 2 } \\right) \\cr &= (2, 8) \\end{aligned}",
            "<strong>Part (b): Finding the radius of $C$</strong><br><br>First, calculate the length of the diameter $AB$ using the distance formula:<br>\\begin{aligned} AB &= \\sqrt{ (6 - (-2))^2 + (11 - 5)^2 } \\cr &= \\sqrt{ 8^2 + 6^2 } \\cr &= \\sqrt{ 64 + 36 } \\cr &= \\sqrt{ 100 } \\cr &= 10 \\end{aligned}<br><br>The radius $r$ is half the length of the diameter:<br>\\begin{aligned} r = \\dfrac{ AB }{ 2 } = \\dfrac{ 10 }{ 2 } = 5 \\end{aligned}",
            "<strong>Part (c): Determining the expanded equation of the circle</strong><br><br>First, write the equation of the circle in standard centre-radius form:<br>\\begin{aligned} (x - 2)^2 + (y - 8)^2 = 5^2 \\cr (x - 2)^2 + (y - 8)^2 = 25 \\end{aligned}",
            "Now, fully expand the brackets and group the terms:<br>\\begin{aligned} (x^2 - 4x + 4) + (y^2 - 16y + 64) &= 25 \\cr x^2 + y^2 - 4x - 16y + 68 &= 25 \\end{aligned}<br><br>Subtract 25 from both sides to set the equation to zero in the required standard form:<br>\\begin{aligned} x^2 + y^2 - 4x - 16y + 43 = 0 \\end{aligned}"
        ],
        "pi_options": [
            {
                "ans": "$x^2 + y^2 - 4x - 16y + 93 = 0$",
                "feedback": "This error occurs when expanding $(x-2)^2 + (y-8)^2 = 25$ if you add the constants $+4$ and $+64$ to get $+68$, but fail to subtract the $r^2 = 25$ term correctly (calculating $68 + 25 = 93$ instead of $68 - 25 = 43$)."
            },
            {
                "ans": "$x^2 + y^2 + 4x + 16y + 43 = 0$",
                "feedback": "This is a sign error in the expanded form, which happens if you use a centre of $(-2, -8)$ instead of $(2, 8)$."
            },
            {
                "ans": "$x^2 + y^2 - 4x - 16y + 68 = 0$",
                "feedback": "This error occurs if you forget to equate the equation of the circle to $r^2 = 25$ on the right-hand side before expanding and grouping terms."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "From Centre-Radius to Expanded Standard Form",
            "content": "When asked to express a circle equation in the expanded form $x^2 + y^2 + ax + by + c = 0$, start by writing it in the standard centre-radius form $(x - h)^2 + (y - k)^2 = r^2$. Fully expand the brackets, collect the constant terms on the left-hand side, and set the equation equal to zero."
        }
    },
    {
        "id": "004380",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Coordinate Geometry",
        "topic": "Coordinate Geometry of the Circle",
        "subtopic": [
            "Tangency of a Line to a Circle using Quadratics"
        ],
        "img": false,
        "question": "A circle $C$ has the equation $x^2 + y^2 = 20$ and a line $L$ has the equation $y = 2x + k$, where $k$ is a constant.<br><br><strong>(a)</strong> Show that if the line $L$ is a tangent to the circle $C$, then $k$ must satisfy the equation:<br>$$k^2 - 100 = 0$$<br><strong>(b)</strong> Hence, find the two possible values of the constant $k$.",
        "steps": [
            "<strong>Part (a): Setting up the simultaneous equation and discriminant</strong><br><br>Substitute the line equation $y = 2x + k$ into the circle equation:<br>\\begin{aligned} x^2 + (2x + k)^2 &= 20 \\cr x^2 + (4x^2 + 4kx + k^2) &= 20 \\cr 5x^2 + 4kx + k^2 - 20 &= 0 \\end{aligned}",
            "This is a quadratic equation of the form $ax^2 + bx + c = 0$, where:<br>\\begin{aligned} a &= 5 \\cr b &= 4k \\cr c &= k^2 - 20 \\end{aligned}<br><br>For the line to be tangent to the circle, they must intersect at exactly one point. This means our quadratic equation must have exactly one real root, so its discriminant must equal zero ($\\{ b^2 - 4ac = 0 \\}$):<br>\\begin{aligned} (4k)^2 - 4(5)(k^2 - 20) &= 0 \\cr 16k^2 - 20(k^2 - 20) &= 0 \\cr 16k^2 - 20k^2 + 400 &= 0 \\cr -4k^2 + 400 &= 0 \\end{aligned}",
            "Divide the entire equation by $-4$ to simplify:<br>\\begin{aligned} k^2 - 100 = 0 \\end{aligned}<br>This is the required equation.",
            "<strong>Part (b): Solving for $k$</strong><br><br>Solve the equation by taking square roots:<br>\\begin{aligned} k^2 &= 100 \\cr k &= \\pm 10 \\end{aligned}<br><br>Thus, the two possible values of $k$ are $k = 10$ or $k = -10$."
        ],
        "pi_options": [
            {
                "ans": "$k = 100$ or $k = -100$",
                "feedback": "This is a basic algebraic error where taking the square root is omitted: $k^2 = 100 \\implies k = \\pm 10$, not $\\pm 100$."
            },
            {
                "ans": "$k = 20$ or $k = -20$",
                "feedback": "This error occurs if you make a calculation slip in evaluating the discriminant, such as calculating $16k^2 - 20(k^2 - 20) = 0$ as $-4k^2 + 80 = 0 \\implies k^2 = 20$."
            },
            {
                "ans": "$k = 10$",
                "feedback": "Remember that the equation $k^2 = 100$ has two real roots: a positive root $k = 10$ and a negative root $k = -10$. Both are valid and represent parallel tangent lines."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "Geometric Interpretation of Parallel Tangents",
            "content": "Since the circle $x^2 + y^2 = 20$ is centred at the origin, a line of fixed gradient $m = 2$ can be tangent to the circle at two distinct, opposite points. This is why we get two symmetric values of $k$ ($k = 10$ and $k = -10$), representing the upper and lower parallel tangents."
        }
    },
    {
        "id": "004381",
        "board": "CCEA",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Simultaneous Equations",
        "subtopic": [
            "Three-Variable Simultaneous Equations"
        ],
        "img": false,
        "question": "Solve the following simultaneous equations:<br>$$2x + y - z = 5$$<br>$$x - 2y + 3z = -6$$<br>$$3x + y + 2z = 3$$<br><br>Show all of your algebraic working clearly.",
        "steps": [
            "We label our three equations to keep our working organized:<br>1. $2x + y - z = 5$<br>2. $x - 2y + 3z = -6$<br>3. $3x + y + 2z = 3$",
            "<strong>Step 1: Eliminate $y$ using Equations 1 and 3</strong><br><br>Rearrange Equation 1 to express $y$ in terms of $x$ and $z$:<br>\\begin{aligned} y = 5 - 2x + z \\end{aligned}<br><br>Substitute this expression into Equation 3:<br>\\begin{aligned} 3x + (5 - 2x + z) + 2z &= 3 \\cr 3x + 5 - 2x + z + 2z &= 3 \\cr x + 3z + 5 &= 3 \\cr x + 3z &= -2 \\end{aligned}<br><br>We call this Equation 4: $x + 3z = -2$. Rearranging gives:<br>\\begin{aligned} x = -2 - 3z \\end{aligned}",
            "<strong>Step 2: Substitute our expressions into Equation 2</strong><br><br>Now, substitute $y = 5 - 2x + z$ and $x = -2 - 3z$ into Equation 2:<br>\\begin{aligned} x - 2y + 3z &= -6 \\cr (-2 - 3z) - 2(5 - 2x + z) + 3z &= -6 \\end{aligned}<br><br>First, replace the $x$ inside the parentheses:<br>\\begin{aligned} y &= 5 - 2(-2 - 3z) + z \\cr &= 5 + 4 + 6z + z \\cr &= 9 + 7z \\end{aligned}<br><br>Substitute $y = 9 + 7z$ and $x = -2 - 3z$ directly into Equation 2:<br>\\begin{aligned} (-2 - 3z) - 2(9 + 7z) + 3z &= -6 \\cr -2 - 3z - 18 - 14z + 3z &= -6 \\cr -20 - 14z &= -6 \\cr -14z &= 14 \\cr z &= -1 \\end{aligned}",
            "<strong>Step 3: Solve for $x$ and $y$</strong><br><br>Substitute $z = -1$ back into our expression for $x$:<br>\\begin{aligned} x &= -2 - 3(-1) \\cr x &= -2 + 3 \\cr x &= 1 \\end{aligned}<br><br>Substitute $x = 1$ and $z = -1$ back into our expression for $y$ (Equation 1):<br>\\begin{aligned} y &= 5 - 2(1) + (-1) \\cr y &= 5 - 2 - 1 \\cr y &= 2 \\end{aligned}<br><br>Thus, the solutions are $x = 1, y = 2, z = -1$."
        ],
        "pi_options": [
            {
                "ans": "$x = 2, y = -1, z = 3$",
                "feedback": "This error typically arises if you make a sign error when rearranging the first equation (e.g., writing $y = 5 + 2x - z$ instead of $y = 5 - 2x + z$) and then carry this mistake through the rest of the elimination steps."
            },
            {
                "ans": "$x = 1, y = 2, z = 1$",
                "feedback": "This error is typically caused by a sign slip when substituting intermediate expressions, which leads to an incorrect value for $z$ (such as positive $1$ instead of $-1$)."
            },
            {
                "ans": "$x = -1, y = 2, z = -1$",
                "feedback": "This error occurs if you make a calculation slip when evaluating the linear equation $x + 3z = -2$. Double-check that substituting $z = -1$ yields $x - 3 = -2 \\implies x = 1$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "Systematic Variable Substitution",
            "content": "When solving simultaneous equations in three variables, choose the variable that is easiest to isolate (usually one with a coefficient of $1$ or $-1$). Isolate it, substitute it into the other two equations, and you will reduce the problem to a standard two-variable simultaneous system."
        }
    },
    {
        "id": "004382",
        "board": "CCEA",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Simultaneous Equations",
        "subtopic": [
            "Three-Variable System with a Missing Variable"
        ],
        "img": false,
        "question": "Solve the simultaneous equations:<br>$$x + 3y + z = 1$$<br>$$2x - y = 8$$<br>$$x - 2y - z = 3$$",
        "steps": [
            "We label our three equations to analyze the system:<br>1. $x + 3y + z = 1$<br>2. $2x - y = 8$<br>3. $x - 2y - z = 3$",
            "<strong>Step 1: Eliminate $z$ using Equations 1 and 3</strong><br><br>Notice that Equation 2 does not contain the variable $z$. We can easily eliminate $z$ from the other two equations by adding Equation 1 and Equation 3 directly:<br>\\begin{aligned} (x + 3y + z) + (x - 2y - z) &= 1 + 3 \\cr 2x + y &= 4 \\end{aligned}<br><br>We call this Equation 4: $2x + y = 4$.",
            "<strong>Step 2: Solve the two-variable system</strong><br><br>We now have a simple system of two simultaneous equations in terms of $x$ and $y$:<br>\\begin{aligned} 2x - y &= 8 \\quad \\text{(Equation 2)} \\cr 2x + y &= 4 \\quad \\text{(Equation 4)} \\end{aligned}<br><br>Add Equation 2 and Equation 4 to eliminate $y$:<br>\\begin{aligned} (2x - y) + (2x + y) &= 8 + 4 \\cr 4x &= 12 \\cr x &= 3 \\end{aligned}",
            "Substitute $x = 3$ back into Equation 4 to solve for $y$:<br>\\begin{aligned} 2(3) + y &= 4 \\cr 6 + y &= 4 \\cr y &= -2 \\end{aligned}",
            "<strong>Step 3: Solve for $z$</strong><br><br>Substitute $x = 3$ and $y = -2$ into Equation 1 to find $z$:<br>\\begin{aligned} x + 3y + z &= 1 \\cr 3 + 3(-2) + z &= 1 \\cr 3 - 6 + z &= 1 \\cr -3 + z &= 1 \\cr z &= 4 \\end{aligned}<br><br>Thus, the solutions are $x = 3, y = -2, z = 4$."
        ],
        "pi_options": [
            {
                "ans": "$x = 3, y = -2, z = 1$",
                "feedback": "This is a calculation slip in the final step. Substituting $x = 3$ and $y = -2$ back into the first equation $x + 3y + z = 1$ yields $3 - 6 + z = 1 \\implies z = 4$, not $z = 1$."
            },
            {
                "ans": "$x = -3, y = 2, z = 4$",
                "feedback": "This represents a systemic sign error, which typically occurs if you subtract the simultaneous equations incorrectly or make a sign mistake during the initial algebraic rearrangement."
            },
            {
                "ans": "$x = 3, y = -2, z = -4$",
                "feedback": "This error occurs if you make a sign error when solving the final linear equation $-3 + z = 1$, mistakenly calculating $z = -4$ instead of $z = 4$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "Exploiting Missing Variables",
            "content": "If one of the equations in a three-variable system is already missing a variable (such as $z$ in $2x - y = 8$), do not use substitution. Instead, eliminate that exact same variable from the other two equations. This immediately creates a standard two-variable simultaneous system."
        }
    },
    {
        "id": "004383",
        "board": "CCEA",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Simultaneous Equations",
        "subtopic": [
            "Word Problems in Three Variables"
        ],
        "img": false,
        "question": "At a local cinema, ticket prices are £$x$ for children, £$y$ for students, and £$z$ for adults.<br><br>*   The cost of $1$ child ticket, $2$ student tickets, and $1$ adult ticket is £$26$.<br>*   The cost of $2$ child tickets, $1$ student ticket, and $3$ adult tickets is £$44$.<br>*   The cost of $3$ child tickets and $2$ adult tickets is £$32$.<br><br><strong>(a)</strong> Write down three equations in terms of $x$, $y$, and $z$ to represent this information.<br><br><strong>(b)</strong> Solve your equations algebraically to find the price of each type of ticket.",
        "steps": [
            "<strong>Part (a): Writing the equations</strong><br><br>Translate each bullet point into an algebraic equation:<br>1. $x + 2y + z = 26$<br>2. $2x + y + 3z = 44$<br>3. $3x + 2z = 32$",
            "<strong>Part (b): Solving the system</strong><br><br>We notice that Equation 3 does not contain $y$. Let's express $z$ in terms of $x$ from Equation 3:<br>\\begin{aligned} 2z &= 32 - 3x \\cr z &= 16 - 1.5x \\end{aligned}",
            "Now, eliminate $y$ from Equations 1 and 2. Rearrange Equation 1 to express $y$:<br>\\begin{aligned} 2y = 26 - x - z \\implies y = 13 - 0.5x - 0.5z \\end{aligned}<br><br>Substitute this expression for $y$ into Equation 2:<br>\\begin{aligned} 2x + y + 3z &= 44 \\cr 2x + (13 - 0.5x - 0.5z) + 3z &= 44 \\cr 1.5x + 13 + 2.5z &= 44 \\cr 1.5x + 2.5z &= 31 \\end{aligned}",
            "Multiply this simplified equation by 2 to clear the decimals, forming Equation 4:<br>\\begin{aligned} 3x + 5z = 62 \\end{aligned}<br><br>Substitute our expression for $z$ ($z = 16 - 1.5x$) into Equation 4:<br>\\begin{aligned} 3x + 5(16 - 1.5x) &= 62 \\cr 3x + 80 - 7.5x &= 62 \\cr -4.5x + 80 &= 62 \\cr -4.5x &= -18 \\cr x &= 4 \\end{aligned}",
            "Now, find $y$ and $z$ by substituting $x = 4$ back into our expressions:<br><br>1. For $z$:<br>\\begin{aligned} z &= 16 - 1.5(4) \\cr z &= 16 - 6 \\cr z &= 10 \\end{aligned}<br><br>2. For $y$ (substituting $x = 4, z = 10$ into Equation 1):<br>\\begin{aligned} 4 + 2y + 10 &= 26 \\cr 14 + 2y &= 26 \\cr 2y &= 12 \\cr y &= 6 \\end{aligned}<br><br>Thus, the ticket prices are £$4$ for children, £$6$ for students, and £$10$ for adults."
        ],
        "pi_options": [
            {
                "ans": "Child: £$5$, Student: £$5$, Adult: £$11$",
                "feedback": "This is a calculation error that typically occurs if you use early decimal rounding on fractions in intermediate steps or make an algebraic slip when combining the ticket cost equations."
            },
            {
                "ans": "Child: £$4$, Student: £$6$, Adult: £$8$",
                "feedback": "This is a substitution error when solving for the adult ticket price $z$. Substituting $x = 4$ into the third equation $3x + 2z = 32$ yields $12 + 2z = 32 \\implies 2z = 20 \\implies z = 10$, not $8$."
            },
            {
                "ans": "Child: £$6$, Student: £$4$, Adult: £$10$",
                "feedback": "This error occurs if you mix up the pricing variables $x$ (child tickets) and $y$ (student tickets) during the algebraic elimination process."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "Contextual Reality Checks",
            "content": "In real-world modeling questions, the solutions represent physical quantities (such as currency values, ages, or dimensions). Therefore, the answers are almost guaranteed to be positive, clean integers or simple fractions. If you calculate negative or highly complex decimal values, review your initial equations immediately."
        }
    },
    {
        "id": "004384",
        "board": "CCEA",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Simultaneous Equations",
        "subtopic": [
            "Curve Fitting"
        ],
        "img": false,
        "question": "A quadratic curve has the equation:<br>$$y = ax^2 + bx + c$$<br>The curve passes through the three coordinates $(1, 2)$, $(2, 9)$, and $(-1, 0)$.<br><br><strong>(a)</strong> Show that these coordinates lead to the following system of linear equations:<br>$$a + b + c = 2$$<br>$$4a + 2b + c = 9$$<br>$$a - b + c = 0$$<br><strong>(b)</strong> Solve the system of equations algebraically to determine the values of $a$, $b$, and $c$.",
        "steps": [
            "<strong>Part (a): Setting up the equations</strong><br><br>Substitute each coordinate $(x, y)$ into the quadratic curve equation $y = ax^2 + bx + c$:<br><br>1. For $(1, 2)$:<br>\\begin{aligned} 2 = a(1)^2 + b(1) + c \\implies a + b + c = 2 \\end{aligned}<br><br>2. For $(2, 9)$:<br>\\begin{aligned} 9 = a(2)^2 + b(2) + c \\implies 4a + 2b + c = 9 \\end{aligned}<br><br>3. For $(-1, 0)$:<br>\\begin{aligned} 0 = a(-1)^2 + b(-1) + c \\implies a - b + c = 0 \\end{aligned}<br><br>This confirms the system of equations.",
            "<strong>Part (b): Solving the system</strong><br><br>Label the three equations:<br>1. $a + b + c = 2$<br>2. $4a + 2b + c = 9$<br>3. $a - b + c = 0$",
            "Subtract Equation 3 from Equation 1 to eliminate $a$ and $c$ directly:<br>\\begin{aligned} (a + b + c) - (a - b + c) &= 2 - 0 \\cr 2b &= 2 \\cr b &= 1 \\end{aligned}",
            "Substitute $b = 1$ back into Equation 1 and Equation 2:<br><br>1. From Equation 1:<br>\\begin{aligned} a + 1 + c = 2 \\implies a + c = 1 \\implies c = 1 - a \\end{aligned}<br><br>2. From Equation 2:<br>\\begin{aligned} 4a + 2(1) + c = 9 \\implies 4a + c = 7 \\end{aligned}",
            "Substitute $c = 1 - a$ into our simplified Equation 2:<br>\\begin{aligned} 4a + (1 - a) &= 7 \\cr 3a + 1 &= 7 \\cr 3a &= 6 \\cr a &= 2 \\end{aligned}<br><br>Finally, solve for $c$:<br>\\begin{aligned} c = 1 - a = 1 - 2 = -1 \\end{aligned}<br><br>Thus, the values are $a = 2, b = 1, c = -1$. (The curve has the equation $y = 2x^2 + x - 1$)."
        ],
        "pi_options": [
            {
                "ans": "$a = 2, b = -1, c = 1$",
                "feedback": "This is a sign slip. Subtracting the third equation from the first equation $a + b + c - (a - b + c) = 2 - 0$ yields $2b = 2 \\implies b = 1$. Substituting this back yields $a = 2$ and $c = -1$."
            },
            {
                "ans": "$a = 3, b = 1, c = -2$",
                "feedback": "This error arises from an addition or subtraction error when simplifying the simultaneous equations (such as miscalculating the difference between the first and second equations)."
            },
            {
                "ans": "$a = 2, b = 1, c = 1$",
                "feedback": "This is a calculation error in evaluating $c$. Since $a - b + c = 0$, substituting $a=2, b=1$ yields $2 - 1 + c = 0 \\implies c = -1$, not $1$."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "Curve Fitting and Simultaneous Linear Systems",
            "content": "Any polynomial curve of degree $n$ is uniquely determined by $n+1$ distinct points. For a quadratic curve (degree 2), we require exactly 3 points. Substituting these points yields a system of three linear equations, showing the direct link between coordinate geometry and linear algebra."
        }
    },
    {
        "id": "004385",
        "board": "CCEA",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Simultaneous Equations",
        "subtopic": [
            "Algebraic Elimination with Negative Coefficients"
        ],
        "img": false,
        "question": "Solve the simultaneous equations:<br>$$x + 2y - z = 3$$<br>$$3x - y + 2z = -7$$<br>$$2x + 3y + 3z = 8$$",
        "steps": [
            "We label our three equations to begin the algebraic elimination process:<br>1. $x + 2y - z = 3$<br>2. $3x - y + 2z = -7$<br>3. $2x + 3y + 3z = 8$",
            "<strong>Step 1: Express $z$ from Equation 1</strong><br><br>Equation 1 has a coefficient of $-1$ for $z$. Rearrange it to express $z$ in terms of $x$ and $y$:<br>\\begin{aligned} z = x + 2y - 3 \\end{aligned}",
            "<strong>Step 2: Substitute $z$ into Equations 2 and 3</strong><br><br>1. Substitute into Equation 2:<br>\\begin{aligned} 3x - y + 2(x + 2y - 3) &= -7 \\cr 3x - y + 2x + 4y - 6 &= -7 \\cr 5x + 3y &= -1 \\quad \\text{(Equation 4)} \\end{aligned}<br><br>2. Substitute into Equation 3:<br>\\begin{aligned} 2x + 3y + 3(x + 2y - 3) &= 8 \\cr 2x + 3y + 3x + 6y - 9 &= 8 \\cr 5x + 9y &= 17 \\quad \\text{(Equation 5)} \\end{aligned}",
            "<strong>Step 3: Solve the two-variable system</strong><br><br>We now have a simplified system of two equations:<br>\\begin{aligned} 5x + 3y &= -1 \\cr 5x + 9y &= 17 \\end{aligned}<br><br>Subtract Equation 4 from Equation 5 to eliminate the $x$ terms:<br>\\begin{aligned} (5x + 9y) - (5x + 3y) &= 17 - (-1) \\cr 6y &= 18 \\cr y &= 3 \\end{aligned}",
            "Substitute $y = 3$ back into Equation 4 to solve for $x$:<br>\\begin{aligned} 5x + 3(3) &= -1 \\cr 5x + 9 &= -1 \\cr 5x &= -10 \\cr x &= -2 \\end{aligned}<br><br>Substitute $x = -2$ and $y = 3$ back into our expression for $z$:<br>\\begin{aligned} z &= x + 2y - 3 \\cr z &= -2 + 2(3) - 3 \\cr z &= 1 \\end{aligned}<br><br>Thus, the solutions are $x = -2, y = 3, z = 1$."
        ],
        "pi_options": [
            {
                "ans": "$x = -2, y = 3, z = -1$",
                "feedback": "This represents a sign error in the final step. Evaluating $z = x + 2y - 3$ with $x = -2$ and $y = 3$ yields $z = -2 + 6 - 3 = 1$, not $-1$."
            },
            {
                "ans": "$x = 2, y = -3, z = 1$",
                "feedback": "This is a global sign error. This can happen if you multiply equations by negative factors but fail to distribute the negative sign to all terms, or if you subtract the equations in the wrong order."
            },
            {
                "ans": "$x = -2, y = 1, z = 3$",
                "feedback": "This is a calculation slip when solving the two-variable simultaneous system $5x + 3y = -1$ and $5x + 9y = 17$, leading to incorrect values for $y$ and subsequently $z$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "Sign Distribution with Negative Values",
            "content": "When substituting expressions with negative values or subtracting simultaneous equations, always use parentheses: e.g., $17 - (-1) = 18$. Forgetting to distribute negative signs is the single most common cause of error in algebraic elimination."
        }
    },
    {
        "id": "004386",
        "board": "CCEA",
        "level": "AS",
        "major_area": "Vectors",
        "topic": "Vectors in 2D",
        "subtopic": [
            "Magnitude and Direction of a Vector"
        ],
        "img": false,
        "question": "The position vectors of the points $A$ and $B$ relative to an origin $O$ are given by:<br>$$\\vec{OA} = 3\\mathbf{ i } - 2\\mathbf{ j }$$<br>$$\\vec{OB} = 7\\mathbf{ i } + \\mathbf{ j }$$<br><br>Find:<br><br><strong>(a)</strong> the magnitude of the vector $\\vec{AB}$,<br><br><strong>(b)</strong> the angle $\\vec{AB}$ makes with the positive $x$-axis.",
        "steps": [
            "<strong>Part (a): Finding the magnitude of $\\vec{AB}$</strong><br><br>First, we find the vector $\\vec{AB}$ by subtracting the position vector of $A$ from the position vector of $B$:<br>\\begin{aligned} \\vec{AB} &= \\vec{OB} - \\vec{OA} \\cr &= (7\\mathbf{ i } + \\mathbf{ j }) - (3\\mathbf{ i } - 2\\mathbf{ j }) \\cr &= (7 - 3)\\mathbf{ i } + (1 - (-2))\\mathbf{ j } \\cr &= 4\\mathbf{ i } + 3\\mathbf{ j } \\end{aligned}",
            "Next, calculate the magnitude of the vector $\\vec{AB}$ using Pythagoras' theorem:<br>\\begin{aligned} |\\vec{AB}| &= \\sqrt{ 4^2 + 3^2 } \\cr &= \\sqrt{ 16 + 9 } \\cr &= \\sqrt{ 25 } \\cr &= 5 \\end{aligned}<br><br>Thus, the magnitude of the vector $\\vec{AB}$ is $5$ units.",
            "<strong>Part (b): Finding the angle with the positive $x$-axis</strong><br><br>The vector $\\vec{AB} = 4\\mathbf{ i } + 3\\mathbf{ j }$ lies in the first quadrant because both the $\\mathbf{ i }$ and $\\mathbf{ j }$ components are positive.<br><br>We find the angle $\\theta$ that the vector makes with the positive $x$-axis using trigonometry:<br>\\begin{aligned} \\tan\\theta &= \\dfrac{ 3 }{ 4 } \\cr \\theta &= \\tan^{-1}\\left( \\dfrac{ 3 }{ 4 } \\right) \\cr \\theta &\\approx 36.9^\\circ \\end{aligned}<br><br>Thus, the angle the vector makes with the positive $x$-axis is approximately $36.9^\\circ$."
        ],
        "pi_options": [
            {
                "ans": "Magnitude: $5$, Angle: $\\theta \\approx 53.1^\\circ$",
                "feedback": "This error occurs if you calculate the angle using the $x$-component divided by the $y$-component, evaluating $\\tan\\theta = \\dfrac{ 4 }{ 3 }$ instead of $\\tan\\theta = \\dfrac{ y }{ x } = \\dfrac{ 3 }{ 4 }$."
            },
            {
                "ans": "Magnitude: $\\sqrt{ 7 }$, Angle: $\\theta \\approx 36.9^\\circ$",
                "feedback": "This is a calculation error in finding the magnitude. Remember to add the squares of the components under the square root ($4^2 + 3^2 = 25$), rather than subtracting them."
            },
            {
                "ans": "Magnitude: $7$, Angle: $\\theta \\approx 36.9^\\circ$",
                "feedback": "This is the result of adding the components directly ($4 + 3 = 7$) instead of using Pythagoras' theorem to find the magnitude ($|\\vec{AB}| = \\sqrt{ 4^2 + 3^2 } = 5$)."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Right-Angled Triangle of a Vector",
            "content": "A 2D vector $x\\mathbf{ i } + y\\mathbf{ j }$ can always be viewed as the hypotenuse of a right-angled triangle with a base of $x$ and a height of $y$. Finding the magnitude is simply applying Pythagoras ($r = \\sqrt{ x^2 + y^2 }$), and finding the direction angle $\\theta$ is simply applying trigonometry ($\\tan\\theta = \\dfrac{ y }{ x }$)."
        }
    },
    {
        "id": "004387",
        "board": "CCEA",
        "level": "AS",
        "major_area": "Vectors",
        "topic": "Vectors in 2D",
        "subtopic": [
            "Direction Angle in Different Quadrants"
        ],
        "img": false,
        "question": "The position vectors of the points $A$ and $B$ relative to an origin $O$ are given by:<br>$$\\vec{OA} = 2\\mathbf{ i } + 5\\mathbf{ j }$$<br>$$\\vec{OB} = -2\\mathbf{ i } + 8\\mathbf{ j }$$<br><br>Find:<br><br><strong>(a)</strong> the magnitude of the vector $\\vec{AB}$,<br><br><strong>(b)</strong> the angle $\\vec{AB}$ makes with the positive $x$-axis, giving your answer to the nearest tenth of a degree.",
        "steps": [
            "<strong>Part (a): Finding the magnitude of $\\vec{AB}$</strong><br><br>First, find the vector $\\vec{AB}$:<br>\\begin{aligned} \\vec{AB} &= \\vec{OB} - \\vec{OA} \\cr &= (-2\\mathbf{ i } + 8\\mathbf{ j }) - (2\\mathbf{ i } + 5\\mathbf{ j }) \\cr &= (-2 - 2)\\mathbf{ i } + (8 - 5)\\mathbf{ j } \\cr &= -4\\mathbf{ i } + 3\\mathbf{ j } \\end{aligned}",
            "Next, calculate the magnitude of the vector $\\vec{AB}$:<br>\\begin{aligned} |\\vec{AB}| &= \\sqrt{ (-4)^2 + 3^2 } \\cr &= \\sqrt{ 16 + 9 } \\cr &= \\sqrt{ 25 } \\cr &= 5 \\end{aligned}<br><br>Thus, the magnitude of the vector $\\vec{AB}$ is $5$ units.",
            "<strong>Part (b): Finding the angle with the positive $x$-axis</strong><br><br>The vector $\\vec{AB} = -4\\mathbf{ i } + 3\\mathbf{ j }$ has a negative $\\mathbf{ i }$ component and a positive $\\mathbf{ j }$ component, which places it in the second quadrant.<br><br>First, calculate the acute base angle $\\alpha$ that the vector makes with the negative $x$-axis:<br>\\begin{aligned} \\tan\\alpha &= \\dfrac{ 3 }{ 4 } \\cr \\alpha &= \\tan^{-1}\\left( \\dfrac{ 3 }{ 4 } \\right) \\cr \\alpha &\\approx 36.87^\\circ \\end{aligned}",
            "The angle $\\theta$ with the positive $x$-axis (measured counter-clockwise) is found by subtracting the acute base angle from $180^\\circ$:<br>\\begin{aligned} \\theta &= 180^\\circ - 36.87^\\circ \\cr \\theta &\\approx 143.13^\\circ \\end{aligned}<br><br>Rounding to the nearest tenth of a degree gives $\\theta \\approx 143.1^\\circ$."
        ],
        "pi_options": [
            {
                "ans": "Magnitude: $5$, Angle: $\\theta \\approx 36.9^\\circ$",
                "feedback": "This is the acute base angle $\\alpha$ with the negative $x$-axis. Since the vector has a negative $x$-component and a positive $y$-component ($-4\\mathbf{ i } + 3\\mathbf{ j }$), it lies in the second quadrant. Therefore, the angle with the positive $x$-axis is $180^\\circ - 36.9^\\circ = 143.1^\\circ$."
            },
            {
                "ans": "Magnitude: $5$, Angle: $\\theta \\approx 126.9^\\circ$",
                "feedback": "This is a calculation error when working with the quadrant. The base angle is $\\alpha = 36.9^\\circ$. Subtracting this from $180^\\circ$ yields $143.1^\\circ$."
            },
            {
                "ans": "Magnitude: $\\sqrt{ 7 }$, Angle: $\\theta \\approx 143.1^\\circ$",
                "feedback": "This error occurs if you subtract the squares of the components under the square root when finding the magnitude. Always add them: $(-4)^2 + 3^2 = 16 + 9 = 25$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "Direction Angles and Quadrants",
            "content": "Be careful when finding the direction angle of a vector with a negative component. Since calculators only return the principal value of $\\tan^{-1}\\left( \\dfrac{ y }{ x } \\right)$ in the range $[-90^\\circ, 90^\\circ]$, you must sketch the vector to identify its quadrant and manually adjust the angle (e.g., subtracting the acute base angle from $180^\\circ$ for the second quadrant)."
        }
    },
    {
        "id": "004388",
        "board": "CCEA",
        "level": "AS",
        "major_area": "Vectors",
        "topic": "Vectors in 2D",
        "subtopic": [
            "Scalar Multiplication and Magnitude"
        ],
        "img": false,
        "question": "Two vectors $\\vec{a}$ and $\\vec{b}$ are defined as:<br>$$\\vec{a} = 5\\mathbf{ i } - 2\\mathbf{ j }$$<br>$$\\vec{b} = -\\mathbf{ i } + 5\\mathbf{ j }$$<br><br>The vector $\\vec{c}$ is given by $\\vec{c} = \\vec{a} + 2\\vec{b}$.<br><br>Find:<br><br><strong>(a)</strong> the vector $\\vec{c}$ in the form $x\\mathbf{ i } + y\\mathbf{ j }$,<br><br><strong>(b)</strong> the magnitude of $\\vec{c}$, giving your answer correct to 3 significant figures,<br><br><strong>(c)</strong> the angle $\\vec{c}$ makes with the positive $x$-axis, to the nearest tenth of a degree.",
        "steps": [
            "<strong>Part (a): Finding the vector $\\vec{c}$</strong><br><br>First, multiply the vector $\\vec{b}$ by the scalar $2$:<br>\\begin{aligned} 2\\vec{b} &= 2(-\\mathbf{ i } + 5\\mathbf{ j }) \\cr &= -2\\mathbf{ i } + 10\\mathbf{ j } \\end{aligned}<br><br>Now, add this to vector $\\vec{a}$ to find $\\vec{c}$:<br>\\begin{aligned} \\vec{c} &= \\vec{a} + 2\\vec{b} \\cr &= (5\\mathbf{ i } - 2\\mathbf{ j }) + (-2\\mathbf{ i } + 10\\mathbf{ j }) \\cr &= (5 - 2)\\mathbf{ i } + (-2 + 10)\\mathbf{ j } \\cr &= 3\\mathbf{ i } + 8\\mathbf{ j } \\end{aligned}",
            "<strong>Part (b): Finding the magnitude of $\\vec{c}$</strong><br><br>Calculate the magnitude using Pythagoras' theorem:<br>\\begin{aligned} |\\vec{c}| &= \\sqrt{ 3^2 + 8^2 } \\cr &= \\sqrt{ 9 + 64 } \\cr &= \\sqrt{ 73 } \\cr &\\approx 8.54400 \\end{aligned}<br><br>Rounding to 3 significant figures gives $|\\vec{c}| \\approx 8.54$ units.",
            "<strong>Part (c): Finding the angle with the positive $x$-axis</strong><br><br>Since both components of $\\vec{c} = 3\\mathbf{ i } + 8\\mathbf{ j }$ are positive, the vector lies in the first quadrant.<br><br>Calculate the angle $\\theta$:<br>\\begin{aligned} \\tan\\theta &= \\dfrac{ 8 }{ 3 } \\cr \\theta &= \\tan^{-1}\\left( \\dfrac{ 8 }{ 3 } \\right) \\cr \\theta &\\approx 69.44^\\circ \\end{aligned}<br><br>Rounding to the nearest tenth of a degree gives $\\theta \\approx 69.4^\\circ$."
        ],
        "pi_options": [
            {
                "ans": "Vector: $3\\mathbf{ i } + 8\\mathbf{ j }$, Magnitude: $8.54$, Angle: $\\theta \\approx 20.6^\\circ$",
                "feedback": "This error occurs if you calculate the angle as $\\tan\\theta = \\dfrac{ x }{ y } = \\dfrac{ 3 }{ 8 }$ instead of $\\tan\\theta = \\dfrac{ y }{ x } = \\dfrac{ 8 }{ 3 }$."
            },
            {
                "ans": "Vector: $4\\mathbf{ i } + 3\\mathbf{ j }$, Magnitude: $5.00$, Angle: $\\theta \\approx 36.9^\\circ$",
                "feedback": "This is the result of failing to distribute the scalar factor of 2 to both components of $\\vec{b}$, evaluating $\\vec{c} = (5\\mathbf{ i } - 2\\mathbf{ j }) + 2(-\\mathbf{ i }) + 5\\mathbf{ j }$ instead of $(5\\mathbf{ i } - 2\\mathbf{ j }) + (-2\\mathbf{ i } + 10\\mathbf{ j })$."
            },
            {
                "ans": "Vector: $3\\mathbf{ i } + 8\\mathbf{ j }$, Magnitude: $11.0$, Angle: $\\theta \\approx 69.4^\\circ$",
                "feedback": "This represents adding the components directly ($3 + 8 = 11$) to find the magnitude, rather than using Pythagoras' theorem ($|\\vec{c}| = \\sqrt{ 3^2 + 8^2 } = \\sqrt{ 73 } \\approx 8.54$)."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "Distributing Scalars in Vector Arithmetic",
            "content": "When performing vector arithmetic with scalars, such as $\\vec{a} + 2\\vec{b}$, treat the vector components just like terms in algebraic brackets. Multiply both the $\\mathbf{ i }$ and $\\mathbf{ j }$ components of $\\vec{b}$ by $2$ before adding them to the corresponding components of $\\vec{a}$."
        }
    },
    {
        "id": "004389",
        "board": "CCEA",
        "level": "AS",
        "major_area": "Vectors",
        "topic": "Vectors in 2D",
        "subtopic": [
            "Position Vectors and Ratio Division"
        ],
        "img": false,
        "question": "The position vectors of the points $P$ and $Q$ relative to an origin $O$ are:<br>$$\\vec{OP} = \\mathbf{ i } + 4\\mathbf{ j }$$<br>$$\\vec{OQ} = 9\\mathbf{ i } - 2\\mathbf{ j }$$<br><br>The point $R$ lies on the line segment $PQ$ such that $PR:RQ = 1:3$.<br><br><strong>(a)</strong> Find the vector $\\vec{PQ}$.<br><br><strong>(b)</strong> Calculate the magnitude of $\\vec{PQ}$.<br><br><strong>(c)</strong> Determine the position vector of the point $R$.",
        "steps": [
            "<strong>Part (a): Finding the vector $\\vec{PQ}$</strong><br><br>The vector $\\vec{PQ}$ is found by subtracting the position vector of the starting point $P$ from the position vector of the endpoint $Q$:<br>\\begin{aligned} \\vec{PQ} &= \\vec{OQ} - \\vec{OP} \\cr &= (9\\mathbf{ i } - 2\\mathbf{ j }) - (\\mathbf{ i } + 4\\mathbf{ j }) \\cr &= (9 - 1)\\mathbf{ i } + (-2 - 4)\\mathbf{ j } \\cr &= 8\\mathbf{ i } - 6\\mathbf{ j } \\end{aligned}",
            "<strong>Part (b): Finding the magnitude of $\\vec{PQ}$</strong><br><br>Calculate the magnitude using Pythagoras' theorem:<br>\\begin{aligned} |\\vec{PQ}| &= \\sqrt{ 8^2 + (-6)^2 } \\cr &= \\sqrt{ 64 + 36 } \\cr &= \\sqrt{ 100 } \\cr &= 10 \\end{aligned}<br><br>Thus, the magnitude of $\\vec{PQ}$ is $10$ units.",
            "<strong>Part (c): Finding the position vector of $R$</strong><br><br>The ratio $PR:RQ = 1:3$ means that the segment is split into $1 + 3 = 4$ equal parts, and point $R$ lies $\\dfrac{ 1 }{ 4 }$ of the way along the vector $\\vec{PQ}$ starting from point $P$:<br>\\begin{aligned} \\vec{OR} &= \\vec{OP} + \\dfrac{ 1 }{ 4 }\\vec{PQ} \\cr &= (\\mathbf{ i } + 4\\mathbf{ j }) + \\dfrac{ 1 }{ 4 }(8\\mathbf{ i } - 6\\mathbf{ j }) \\cr &= \\mathbf{ i } + 4\\mathbf{ j } + 2\\mathbf{ i } - 1.5\\mathbf{ j } \\cr &= 3\\mathbf{ i } + 2.5\\mathbf{ j } \\text{ (or } 3\\mathbf{ i } + \\dfrac{ 5 }{ 2 }\\mathbf{ j }\\text{)} \\end{aligned}"
        ],
        "pi_options": [
            {
                "ans": "Vector: $8\\mathbf{ i } - 6\\mathbf{ j }$, Magnitude: $10$, Position Vector of $R$: $5\\mathbf{ i } + \\mathbf{ j }$",
                "feedback": "This is the midpoint of $PQ$, which would correspond to a ratio of $1:1$. For a ratio of $1:3$, the point $R$ lies $\\dfrac{ 1 }{ 4 }$ of the way along the vector $\\vec{PQ}$ starting from $P$."
            },
            {
                "ans": "Vector: $8\\mathbf{ i } - 6\\mathbf{ j }$, Magnitude: $10$, Position Vector of $R$: $3\\mathbf{ i } - 2.5\\mathbf{ j }$",
                "feedback": "This is a sign error in the $y$-component of $\\vec{OR}$. Calculating $4\\mathbf{ j } - 1.5\\mathbf{ j }$ yields $+2.5\\mathbf{ j }$, not $-2.5\\mathbf{ j }$."
            },
            {
                "ans": "Vector: $10\\mathbf{ i } + 2\\mathbf{ j }$, Magnitude: $10.2$, Position Vector of $R$: $3.5\\mathbf{ i } + 4.5\\mathbf{ j }$",
                "feedback": "This error occurs if you calculate the vector $\\vec{PQ}$ by adding the position vectors ($\\vec{OP} + \\vec{OQ}$) instead of subtracting them ($\\vec{OQ} - \\vec{OP}$)."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "Understanding Ratio Division in Vectors",
            "content": "If a point $R$ divides a line segment $PQ$ in the ratio $a:b$, then the fraction of the way $R$ lies along the segment from $P$ to $Q$ is $\\dfrac{ a }{ a + b }$. Therefore, the position vector is given by $\\vec{OR} = \\vec{OP} + \\dfrac{ a }{ a + b }\\vec{PQ}$."
        }
    },
    {
        "id": "004390",
        "board": "CCEA",
        "level": "AS",
        "major_area": "Vectors",
        "topic": "Vectors in 2D",
        "subtopic": [
            "Finding Unknown Constants from Magnitudes"
        ],
        "img": false,
        "question": "The position vectors of points $A$ and $B$ relative to an origin $O$ are given by:<br>$$\\vec{OA} = 2\\mathbf{ i } - 3\\mathbf{ j }$$<br>$$\\vec{OB} = 5\\mathbf{ i } + k\\mathbf{ j }$$<br>where $k$ is a constant.<br><br>Given that the magnitude of the vector $\\vec{AB}$ is $5$ units:<br><br><strong>(a)</strong> Find the vector $\\vec{AB}$ in terms of $k$,<br><br><strong>(b)</strong> Find the two possible values of the constant $k$.",
        "steps": [
            "<strong>Part (a): Finding $\\vec{AB}$ in terms of $k$</strong><br><br>Find the vector $\\vec{AB}$ by subtracting position vectors:<br>\\begin{aligned} \\vec{AB} &= \\vec{OB} - \\vec{OA} \\cr &= (5\\mathbf{ i } + k\\mathbf{ j }) - (2\\mathbf{ i } - 3\\mathbf{ j }) \\cr &= (5 - 2)\\mathbf{ i } + (k - (-3))\\mathbf{ j } \\cr &= 3\\mathbf{ i } + (k + 3)\\mathbf{ j } \\end{aligned}",
            "<strong>Part (b): Finding the two possible values of $k$</strong><br><br>We are given that the magnitude of $\\vec{AB}$ is $5$ units:<br>\\begin{aligned} |\\vec{AB}| &= \\sqrt{ 3^2 + (k + 3)^2 } = 5 \\end{aligned}<br><br>Square both sides of the equation:<br>\\begin{aligned} 3^2 + (k + 3)^2 &= 25 \\cr 9 + (k + 3)^2 &= 25 \\cr (k + 3)^2 &= 16 \\end{aligned}",
            "Take the square root of both sides, keeping in mind both the positive and negative roots:<br>\\begin{aligned} k + 3 = \\pm 4 \\end{aligned}<br><br>This gives two possible linear equations to solve:<br>1. $k + 3 = 4 \\implies k = 1$<br>2. $k + 3 = -4 \\implies k = -7$<br><br>Thus, the two possible values of $k$ are $k = 1$ and $k = -7$."
        ],
        "pi_options": [
            {
                "ans": "$k = 1$",
                "feedback": "This is only one of the possible values. When solving $(k + 3)^2 = 16$, taking the square of both sides yields two equations: $k + 3 = 4 \\implies k = 1$ and $k + 3 = -4 \\implies k = -7$."
            },
            {
                "ans": "$k = 1$ or $k = -1$",
                "feedback": "This is an error in solving the equation $(k + 3)^2 = 16$. Taking the square root of 16 gives $\\pm 4$, so we must solve $k + 3 = \\pm 4$, which does not yield $k = -1$."
            },
            {
                "ans": "$k = 2$ or $k = -8$",
                "feedback": "This is a calculation error. Ensure you correctly set up the magnitude equation as $3^2 + (k + 3)^2 = 25 \\implies (k + 3)^2 = 16$, which yields $k = 1$ and $k = -7$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Symmetry of Circle Intersections",
            "content": "The equation $|\\vec{AB}| = 5$ represents a circle of radius $5$ centred at $A$. Since the $x$-coordinate of $B$ is fixed at $5$, the line $x = 5$ intersects this circle at exactly two points. This explains why we get two perfectly symmetric values for the vertical component $k$."
        }
    },
    {
        "id": "004391",
        "board": "CCEA",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Coordinate Geometry",
        "subtopic": [
            "Transformations of Graphs"
        ],
        "img": "images/p1/004391.png",
        "question": "A curve has the equation $y = f(x)$. The point $A(0, 2)$ lies on the curve.<br><br><strong>(a)</strong> Write down the coordinates of the point $A$ under the following transformations:<br>*   <strong>(i)</strong> $y = f(x) + 3$<br>*   <strong>(ii)</strong> $y = f(x - 4)$<br>*   <strong>(iii)</strong> $y = f(-x)$<br><br><strong>(b)</strong> Given that the curve $y = f(x)$ has an asymptote given by the equation $y = 1$, write down the equation of the asymptote of the curve under the transformation:<br>$$y + 3 = f(x)$$",
        "steps": [
            "<strong>Part (a)(i): Under the transformation $y = f(x) + 3$</strong><br><br>The transformation $+3$ outside the function represents a vertical translation upwards by $3$ units.<br><br>Apply this to the coordinates of $A(0, 2)$:<br>\\begin{aligned} (x, y) &\\to (x, y + 3) \\cr (0, 2) &\\to (0, 2 + 3) \\cr &\\to (0, 5) \\end{aligned}",
            "<strong>Part (a)(ii): Under the transformation $y = f(x - 4)$</strong><br><br>The transformation $-4$ inside the function arguments represents a horizontal translation to the right by $4$ units.<br><br>Apply this to the coordinates of $A(0, 2)$:<br>\\begin{aligned} (x, y) &\\to (x + 4, y) \\cr (0, 2) &\\to (0 + 4, 2) \\cr &\\to (4, 2) \\end{aligned}",
            "<strong>Part (a)(iii): Under the transformation $y = f(-x)$</strong><br><br>The negative sign inside the function arguments represents a reflection of the graph in the $y$-axis, which flips the sign of all $x$-coordinates.<br><br>Apply this to the coordinates of $A(0, 2)$:<br>\\begin{aligned} (x, y) &\\to (-x, y) \\cr (0, 2) &\\to (-0, 2) \\cr &\\to (0, 2) \\end{aligned}",
            "<strong>Part (b): Finding the transformed asymptote</strong><br><br>Rearrange the given transformation equation $y + 3 = f(x)$ to express $y$ explicitly:<br>\\begin{aligned} y = f(x) - 3 \\end{aligned}<br><br>This represents a vertical translation downwards by $3$ units.<br><br>Apply this translation to the original horizontal asymptote equation $y = 1$:<br>\\begin{aligned} y &= 1 - 3 \\cr y &= -2 \\end{aligned}<br><br>Thus, the new horizontal asymptote is $y = -2$."
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> (i) $(0, 5)$, (ii) $(-4, 2)$, (iii) $(0, 2)$; <strong>(b)</strong> $y = 4$",
                "feedback": "This option contains horizontal translation errors. For part (a)(ii), $y = f(x-4)$ translates the graph 4 units to the right, so the $x$-coordinate increases from $0$ to $+4$, not $-4$. For part (b), $y+3 = f(x) \\implies y = f(x)-3$ shifts the asymptote down to $y = 1 - 3 = -2$."
            },
            {
                "ans": "<strong>(a)</strong> (i) $(3, 2)$, (ii) $(4, 2)$, (iii) $(0, -2)$; <strong>(b)</strong> $y = -2$",
                "feedback": "This option confuses vertical and horizontal transformations. For part (a)(i), $y = f(x) + 3$ shifts the graph vertically, changing the $y$-coordinate of $A(0, 2)$ to $5$, not the $x$-coordinate."
            },
            {
                "ans": "<strong>(a)</strong> (i) $(0, 5)$, (ii) $(4, 2)$, (iii) $(0, -2)$; <strong>(b)</strong> $y = -2$",
                "feedback": "This error occurs in part (a)(iii). Reflecting the graph in the $y$-axis ($y = f(-x)$) changes the sign of the $x$-coordinate. Since $x = 0$, the coordinate remains $0$, so the point is $(0, 2)$, not $(0, -2)$ (which would be a reflection in the $x$-axis)."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "Inside vs. Outside Transformations",
            "content": "Always remember the golden rule of graph transformations: operations <strong>outside</strong> the function (e.g., $f(x) + a$) affect the $y$-coordinates directly and behave intuitively. Operations <strong>outside</strong> the function (e.g., $f(x + b)$) affect the $x$-coordinates and behave counter-intuitively (opposite to the sign)."
        }
    },
    {
        "id": "004392",
        "board": "CCEA",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Coordinate Geometry",
        "subtopic": [
            "Stretches and Reflections of Graph Coordinates"
        ],
        "img": false,
        "question": "A curve has the equation $y = f(x)$. The point $A(2, -3)$ lies on the curve.<br><br>Write down the coordinates of the image of point $A$ under each of the following transformations:<br><br><strong>(a)</strong> $y = f(2x)$<br><br><strong>(b)</strong> $y = -f(x)$<br><br><strong>(c)</strong> $y = 3f(x + 1)$",
        "steps": [
            "<strong>Part (a): Under the transformation $y = f(2x)$</strong><br><br>A multiplier inside the function represents a horizontal stretch. Because it is inside, it behaves counter-intuitively: we stretch by a scale factor of $\\dfrac{ 1 }{ 2 }$, which divides all $x$-coordinates by $2$ while keeping $y$-coordinates unchanged:<br>\\begin{aligned} (x, y) &\\to \\left( \\dfrac{ x }{ 2 }, y \\right) \\cr (2, -3) &\\to \\left( \\dfrac{ 2 }{ 2 }, -3 \\right) \\cr &\\to (1, -3) \\end{aligned}",
            "<strong>Part (b): Under the transformation $y = -f(x)$</strong><br><br>A negative sign outside the function represents a vertical reflection in the $x$-axis. This multiplies all $y$-coordinates by $-1$ while keeping $x$-coordinates unchanged:<br>\\begin{aligned} (x, y) &\\to (x, -y) \\cr (2, -3) &\\to (2, -(-3)) \\cr &\\to (2, 3) \\end{aligned}",
            "<strong>Part (c): Under the transformation $y = 3f(x + 1)$</strong><br><br>This transformation combines two distinct shifts:<br>1. An addition of $+1$ inside ($f(x+1)$) is a horizontal translation left by $1$ unit ($x \\to x - 1$).<br>2. A multiplier of $3$ outside ($3f(x)$) is a vertical stretch by factor $3$ ($y \\to 3y$).<br><br>Apply both transformations to $A(2, -3)$:<br>\\begin{aligned} (x, y) &\\to (x - 1, 3y) \\cr (2, -3) &\\to (2 - 1, 3(-3)) \\cr &\\to (1, -9) \\end{aligned}"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $(4, -3)$, <strong>(b)</strong> $(-2, -3)$, <strong>(c)</strong> $(3, -9)$",
                "feedback": "This option contains multiple standard scaling and translation errors. For part (a), $y = f(2x)$ compresses the graph horizontally by a factor of $\\dfrac{ 1 }{ 2 }$, meaning the $x$-coordinate is divided by 2 to become $1$, not multiplied to become $4$. For part (b), $y = -f(x)$ reflects the graph in the $x$-axis, changing the $y$-coordinate sign, not the $x$-coordinate."
            },
            {
                "ans": "<strong>(a)</strong> $(1, -3)$, <strong>(b)</strong> $(2, 3)$, <strong>(c)</strong> $(1, -1)$",
                "feedback": "This is a stretch multiplier error in part (c). Under $y = 3f(x+1)$, the $y$-coordinate is scaled by a factor of 3. Thus, the $y$-coordinate changes from $-3$ to $3 \\times (-3) = -9$, not $-1$."
            },
            {
                "ans": "<strong>(a)</strong> $(1, -3)$, <strong>(b)</strong> $(2, 3)$, <strong>(c)</strong> $(3, -9)$",
                "feedback": "This is a horizontal translation sign error in part (c). The transformation $f(x+1)$ translates the graph to the left by 1 unit, meaning the $x$-coordinate decreases from $2$ to $1$, not increases to $3$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Sequence of Compound Transformations",
            "content": "When dealing with multiple compound transformations, such as $y = af(bx + c) + d$, apply horizontal operations first (translations, then stretches) and then vertical operations (stretches, then translations). This systematic order ensures you never miscalculate the final coordinates."
        }
    },
    {
        "id": "004393",
        "board": "CCEA",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Coordinate Geometry",
        "subtopic": [
            "Completing the Square and Vertex Transformations"
        ],
        "img": false,
        "question": "A quadratic curve $C$ has the equation $y = x^2 - 4x + 7$.<br><br><strong>(a)</strong> By completing the square, write down the coordinates of the vertex of $C$.<br><br><strong>(b)</strong> Find the coordinates of the vertex of the curve after each of the following transformations:<br><strong>(i)</strong> $y = f(x + 2) - 4$<br><strong>(ii)</strong> $y = -f(2x)$",
        "steps": [
            "<strong>Part (a): Completing the square to find the vertex</strong><br><br>First, rewrite the quadratic equation in completed square form $(x - h)^2 + k$:<br>\\begin{aligned} y &= x^2 - 4x + 7 \\cr &= (x^2 - 4x + 4) - 4 + 7 \\cr &= (x - 2)^2 + 3 \\end{aligned}<br><br>The vertex (minimum point) of this parabola is $(2, 3)$. We define this function as $f(x) = (x-2)^2 + 3$.",
            "<strong>Part (b)(i): Under the transformation $y = f(x + 2) - 4$</strong><br><br>This compound transformation shifts the graph:<br>1. Horizontal translation left by $2$ units ($x \\to x - 2$).<br>2. Vertical translation downwards by $4$ units ($y \\to y - 4$).<br><br>Apply these transformations to the vertex $(2, 3)$:<br>\\begin{aligned} (x, y) &\\to (x - 2, y - 4) \\cr (2, 3) &\\to (2 - 2, 3 - 4) \\cr &\\to (0, -1) \\end{aligned}<br><br>Alternatively, substituting algebraically yields $y = (x+2-2)^2 + 3 - 4 \\implies y = x^2 - 1$, which has its vertex at $(0, -1)$.",
            "<strong>Part (b)(ii): Under the transformation $y = -f(2x)$</strong><br><br>This compound transformation shifts the graph:<br>1. Horizontal compression by factor $\\dfrac{ 1 }{ 2 }$ ($x \\to \\dfrac{ x }{ 2 }$).<br>2. Vertical reflection in the $x$-axis ($y \\to -y$).<br><br>Apply these transformations to the vertex $(2, 3)$:<br>\\begin{aligned} (x, y) &\\to \\left( \\dfrac{ x }{ 2 }, -y \\right) \\cr (2, 3) &\\to \\left( \\dfrac{ 2 }{ 2 }, -3 \\right) \\cr &\\to (1, -3) \\end{aligned}"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $(2, 3)$, <strong>(b)</strong> (i) $(0, -4)$, (ii) $(1, -3)$",
                "feedback": "This is a common calculation slip in part (b)(i). Simplifying $y = f(x+2) - 4$ yields $y = (x+2-2)^2 + 3 - 4 \\implies y = x^2 - 1$. The vertex of $y = x^2 - 1$ is $(0, -1)$, not $(0, -4)$."
            },
            {
                "ans": "<strong>(a)</strong> $(-2, 3)$, <strong>(b)</strong> (i) $(0, -1)$, (ii) $(2, -3)$",
                "feedback": "This is an error in completing the square for part (a). The quadratic $x^2 - 4x + 7$ completes to $(x-2)^2 + 3$, which gives a vertex of $(2, 3)$, not $(-2, 3)$."
            },
            {
                "ans": "<strong>(a)</strong> $(2, 3)$, <strong>(b)</strong> (i) $(0, -1)$, (ii) $(1, 3)$",
                "feedback": "This is a sign error in the vertical reflection of part (b)(ii). The transformation $y = -f(2x)$ reflects the curve in the $x$-axis, so the $y$-coordinate of the vertex must change sign from $+3$ to $-3$."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "Connecting Algebra and Geometry through Vertex Forms",
            "content": "Completing the square exposes the vertex of a parabola directly. Since the completed square form $(x-h)^2 + k$ represents a horizontal shift of $+h$ and vertical shift of $+k$ from the parent graph $y=x^2$, tracking the vertex $(h, k)$ geometric properties is exactly equivalent to applying algebraic transformations."
        }
    },
    {
        "id": "004394",
        "board": "CCEA",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Coordinate Geometry",
        "subtopic": [
            "Transformations on Trigonometric Graphs"
        ],
        "img": false,
        "question": "The curve $C$ has the equation $y = \\cos x$ for $0^\circ \\le x \\le 360^\circ$. A local minimum of this curve occurs at the point $M(180^\circ, -1)$.<br><br>Find the coordinates of the corresponding local minimum point under the following transformations:<br><br><strong>(a)</strong> $y = 3\\cos x$<br><br><strong>(b)</strong> $y = \\cos(x - 30^\circ)$<br><br><strong>(c)</strong> $y = \\cos(2x) + 1$",
        "steps": [
            "<strong>Part (a): Under the transformation $y = 3\\cos x$</strong><br><br>A coefficient of $3$ outside the function represents a vertical stretch by factor $3$. This multiplies all $y$-coordinates by $3$ while keeping $x$-coordinates unchanged:<br>\\begin{aligned} (x, y) &\\to (x, 3y) \\cr (180^\\circ, -1) &\\to (180^\\circ, 3(-1)) \\cr &\\to (180^\\circ, -3) \\end{aligned}",
            "<strong>Part (b): Under the transformation $y = \\cos(x - 30^\circ)$</strong><br><br>Subtracting $30^\circ$ inside the function represents a horizontal translation to the right by $30^\circ$. This adds $30^\circ$ to all $x$-coordinates while keeping $y$-coordinates unchanged:<br>\\begin{aligned} (x, y) &\\to (x + 30^\\circ, y) \\cr (180^\\circ, -1) &\\to (180^\\circ + 30^\\circ, -1) \\cr &\\to (210^\\circ, -1) \\end{aligned}",
            "<strong>Part (c): Under the transformation $y = \\cos(2x) + 1$</strong><br><br>This compound transformation contains two shifts:<br>1. A multiplier of $2$ inside ($\\cos(2x)$) is a horizontal compression by factor $\\dfrac{ 1 }{ 2 }$ ($x \\to \\dfrac{ x }{ 2 }$).<br>2. An addition of $+1$ outside ($\\% + 1$) is a vertical translation up by $1$ unit ($y \\to y + 1$).<br><br>Apply both transformations to $M(180^\circ, -1)$:<br>\\begin{aligned} (x, y) &\\to \\left( \\dfrac{ x }{ 2 }, y + 1 \\right) \\cr (180^\\circ, -1) &\\to \\left( \\dfrac{ 180^\\circ }{ 2 }, -1 + 1 \\right) \\cr &\\to (90^\\circ, 0) \\end{aligned}"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $(540^\\circ, -1)$, <strong>(b)</strong> $(150^\\circ, -1)$, <strong>(c)</strong> $(90^\\circ, 1)$",
                "feedback": "This option applies horizontal and vertical transformations incorrectly. For part (a), $y=3\\cos x$ scales the $y$-coordinates by a factor of 3, leaving the $x$-coordinates unchanged. For part (b), $\\cos(x - 30^\\circ)$ shifts the graph to the right by $30^\\circ$, increasing the $x$-coordinate to $210^\\circ$."
            },
            {
                "ans": "<strong>(a)</strong> $(180^\\circ, -3)$, <strong>(b)</strong> $(210^\\circ, -1)$, <strong>(c)</strong> $(360^\\circ, 0)$",
                "feedback": "This error is in part (c). The transformation $y = \\cos(2x) + 1$ compresses the graph horizontally by a factor of $\\dfrac{ 1 }{ 2 }$, meaning the $x$-coordinate is divided by 2 ($180^\\circ \\div 2 = 90^\\circ$), not multiplied by 2."
            },
            {
                "ans": "<strong>(a)</strong> $(180^\\circ, -3)$, <strong>(b)</strong> $(150^\\circ, -1)$, <strong>(c)</strong> $(90^\\circ, 0)$",
                "feedback": "This is a horizontal shift sign error in part (b). The transformation $\\cos(x-30^\\circ)$ translates the graph to the right, so we add $30^\\circ$ to the $x$-coordinate ($180^\\circ + 30^\\circ = 210^\\circ$), rather than subtracting."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "Period and Amplitude Transformations",
            "content": "For trigonometric graphs of the form $y = a\\cos(bx)$, the constant $a$ changes the vertical amplitude (stretching the $y$-axis by $a$), and the constant $b$ changes the period (compressing the horizontal $x$-axis by $\\dfrac{ 1 }{ b }$). Recognizing these parameters makes transforming trigonometric coordinates straightforward."
        }
    },
    {
        "id": "004395",
        "board": "CCEA",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Coordinate Geometry",
        "subtopic": [
            "Determining Transformation Constants from Images"
        ],
        "img": false,
        "question": "A curve has the equation $y = f(x)$. The curve has a local maximum at $P(3, 4)$.<br><br>For each of the following new maximum points, identify the values of the constants $a$ and $b$ for the given transformation function:<br><br><strong>(a)</strong> New maximum at $(3, 9)$ under the transformation $y = f(x) + a$.<br><br><strong>(b)</strong> New maximum at $(1, 4)$ under the transformation $y = f(x + b)$.<br><br><strong>(c)</strong> New maximum at $(6, 12)$ under the transformation $y = af(bx)$.",
        "steps": [
            "<strong>Part (a): Under the transformation $y = f(x) + a$</strong><br><br>Since the $x$-coordinate is unchanged ($3 \\to 3$), this is a pure vertical translation.<br><br>Equate the original and new $y$-coordinates to find $a$:<br>\\begin{aligned} 4 + a &= 9 \\cr a &= 5 \\end{aligned}",
            "<strong>Part (b): Under the transformation $y = f(x + b)$</strong><br><br>Since the $y$-coordinate is unchanged ($4 \\to 4$), this is a pure horizontal translation.<br><br>The original maximum occurs when the input to $f$ is $3$. For the new maximum to occur at $x = 1$, the input $(x + b)$ must evaluate to $3$ when $x = 1$:<br>\\begin{aligned} 1 + b &= 3 \\cr b &= 2 \\end{aligned}<br><br>Thus, $b = 2$, which represents a shift left by $2$ units ($y = f(x + 2)$).",
            "<strong>Part (c): Under the transformation $y = af(bx)$</strong><br><br>This transformation represents a vertical stretch by factor $a$ and a horizontal stretch by factor $\\dfrac{ 1 }{ b }$.<br><br>1. For the vertical stretch ($y$-coordinates):<br>\\begin{aligned} a \\times 4 &= 12 \\cr a &= 3 \\end{aligned}<br><br>2. For the horizontal stretch ($x$-coordinates): the input $bx$ must evaluate to $3$ when the new $x = 6$:<br>\\begin{aligned} b(6) &= 3 \\cr b &= \\dfrac{ 3 }{ 6 } \\cr b &= 0.5 \\text{ (or } \\dfrac{ 1 }{ 2 }\\text{)} \\end{aligned}<br><br>Thus, the constants are $a = 3$ and $b = 0.5$."
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $a = 5$, <strong>(b)</strong> $b = -2$, <strong>(c)</strong> $a = 3, b = 2$",
                "feedback": "This option contains sign and scaling reciprocal errors. For part (b), shifting the maximum horizontally from $3$ to $1$ is a shift to the left, which corresponds to $f(x+2)$, so $b = 2$, not $-2$. For part (c), stretching the graph horizontally from $3$ to $6$ is a stretch of factor 2, which corresponds to $f(\\dfrac{ 1 }{ 2 }x)$, so $b = 0.5$, not $2$."
            },
            {
                "ans": "<strong>(a)</strong> $a = 9$, <strong>(b)</strong> $b = 2$, <strong>(c)</strong> $a = 3, b = 0.5$",
                "feedback": "This error is in part (a). The vertical transformation $y = f(x) + a$ shifts the graph by $a$ units, meaning the new $y$-coordinate is $4 + a = 9 \\implies a = 5$, not $9$."
            },
            {
                "ans": "<strong>(a)</strong> $a = 5$, <strong>(b)</strong> $b = 2$, <strong>(c)</strong> $a = 12, b = 2$",
                "feedback": "This error is in part (c). Under $y = af(bx)$, the new vertical maximum is $4a = 12 \\implies a = 3$, and the new horizontal maximum is $\\dfrac{ 3 }{ b } = 6 \\implies b = 0.5$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "Reverse-Engineering Graph Transformations",
            "content": "To reverse-engineer a transformation from a coordinates shift, map the operations to their axes. For vertical operations, solve $a \\times y_{\\text{old}} + d = y_{\\text{new}}$. For horizontal operations, solve the input equation $b \\times x_{\\text{new}} + c = x_{\\text{old}}$."
        }
    },
    {
        "id": "004396",
        "board": "CCEA",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Exponentials and Logarithms",
        "subtopic": [
            "Solving Logarithmic and Exponential Equations"
        ],
        "img": false,
        "question": "<strong>(a)</strong> Given that $\\log_3 a = 2$, state the value of $a$.<br><br><strong>(b)</strong> Hence, solve the equation:<br>$$\\log_3 \\left(\\frac{2x}{x-2}\\right) = 2$$<br><strong>(c)</strong> Solve the exponential equation:<br>$$5e^{3x} = 7$$<br>giving your answer correct to 3 decimal places.",
        "steps": [
            "<strong>Part (a): Stating the value of $a$</strong><br><br>To find $a$, rewrite the logarithmic equation in its equivalent exponential form:<br>\\begin{aligned} \\log_3 a &= 2 \\cr a &= 3^2 \\cr a &= 9 \\end{aligned}",
            "<strong>Part (b): Solving the logarithmic equation</strong><br><br>Since $\\log_3 a = 2 \\implies a = 9$, we can solve the equation $\\log_3 \\left( \\dfrac{ 2x }{ x-2 } \\right) = 2$ by setting the argument equal to $9$:<br>\\begin{aligned} \\dfrac{ 2x }{ x-2 } &= 9 \\cr 2x &= 9(x - 2) \\cr 2x &= 9x - 18 \\cr -7x &= -18 \\cr x &= \\dfrac{ 18 }{ 7 } \\end{aligned}<br><br>Check the domain: since $\\dfrac{ 18 }{ 7 } \\approx 2.57 > 2$, the argument remains positive, so $x = \\dfrac{ 18 }{ 7 }$ is a valid solution.",
            "<strong>Part (c): Solving the exponential equation</strong><br><br>First, isolate the exponential term by dividing both sides of $5e^{3x} = 7$ by $5$:<br>\\begin{aligned} e^{3x} = \\dfrac{ 7 }{ 5 } = 1.4 \\end{aligned}<br><br>Now, take the natural logarithm ($\\ln$) of both sides to remove the exponential:<br>\\begin{aligned} 3x &= \\ln(1.4) \\cr x &= \\dfrac{ 1 }{ 3 }\\ln(1.4) \\end{aligned}",
            "Evaluate this expression numerically using a calculator:<br>\\begin{aligned} x &\\approx \\dfrac{ 0.336472 }{ 3 } \\cr x &\\approx 0.112157 \\end{aligned}<br><br>Rounding to 3 decimal places gives $x \\approx 0.112$."
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $a = 6$; <strong>(b)</strong> $x = \\dfrac{ 18 }{ 7 }$; <strong>(c)</strong> $x \\approx 0.112$",
                "feedback": "In part (a), the equation $\\log_3 a = 2$ converts to exponential form as $a = 3^2 = 9$. Multiplying $3 \\times 2 = 6$ is a basic operational error."
            },
            {
                "ans": "<strong>(a)</strong> $a = 9$; <strong>(b)</strong> $x = \\dfrac{ 18 }{ 7 }$; <strong>(c)</strong> $x \\approx 0.118$",
                "feedback": "This is a rounding/calculation slip in part (c). Evaluating $\\dfrac{ 1 }{ 3 }\\ln(1.4)$ yields approximately $0.112157...$ which rounds down to $0.112$ to 3 decimal places, not $0.118$."
            },
            {
                "ans": "<strong>(a)</strong> $a = 9$; <strong>(b)</strong> $x = \\dfrac{ 9 }{ 7 }$; <strong>(c)</strong> $x \\approx 0.112$",
                "feedback": "This error is in part (b). Solving $\\dfrac{ 2x }{ x-2 } = 9 \\implies 2x = 9x - 18 \\implies -7x = -18 \\implies x = \\dfrac{ 18 }{ 7 }$, not $\\dfrac{ 9 }{ 7 }$ (which occurs if you forget to distribute the multiplier 9 to the constant term $-2$)."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "Making Links Between Sub-parts",
            "content": "Syllabuses often use 'Hence' to indicate that the result of a previous part must be used directly. Recognizing that $\\log_3 a = 2 \\implies a = 9$ lets you bypass converting the logarithm in part (b) from scratch, saving valuable exam time."
        }
    },
    {
        "id": "004397",
        "board": "CCEA",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Exponentials and Logarithms",
        "subtopic": [
            "Solving Logarithmic Equations"
        ],
        "img": false,
        "question": "Solve the logarithmic equation:<br>$$\\log_5 (3x + 1) - \\log_5 (x - 1) = 1$$<br>Show all of your algebraic working clearly.",
        "steps": [
            "Apply the subtraction law of logarithms ($\\{\\log_b A - \\log_b B = \\log_b \\left( \\dfrac{ A }{ B } \\right)\\}$) to combine the left-hand side:<br>\\begin{aligned} \\log_5 \\left( \\dfrac{ 3x + 1 }{ x - 1 } \\right) = 1 \\end{aligned}",
            "Convert the logarithmic equation to its equivalent exponential form to eliminate the log:<br>\\begin{aligned} \\dfrac{ 3x + 1 }{ x - 1 } &= 5^1 \\cr \\dfrac{ 3x + 1 }{ x - 1 } &= 5 \\end{aligned}",
            "Solve the resulting linear equation for $x$:<br>\\begin{aligned} 3x + 1 &= 5(x - 1) \\cr 3x + 1 &= 5x - 5 \\cr -2x &= -6 \\cr x &= 3 \\end{aligned}",
            "Verify the solution against the domain of the original logarithms:<br>1. For $\\log_5 (3x + 1)$: $3(3) + 1 = 10 > 0$. (Valid)<br>2. For $\\log_5 (x - 1)$: $3 - 1 = 2 > 0$. (Valid)<br><br>Thus, the solution is $x = 3$."
        ],
        "pi_options": [
            {
                "ans": "$x = -3$",
                "feedback": "This is a sign error during algebraic rearrangement. Solving $3x + 1 = 5x - 5 \\implies -2x = -6 \\implies x = 3$, not $-3$."
            },
            {
                "ans": "$x = 2$",
                "feedback": "This error occurs if you convert the log equation incorrectly, such as writing $\\dfrac{ 3x + 1 }{ x - 1 } = 1$ (forgetting that $\\log_5 A = 1 \\implies A = 5^1 = 5$)."
            },
            {
                "ans": "$x = 3.5$",
                "feedback": "This is a calculation slip that happens if you fail to distribute the multiplier 5 to all terms of the denominator when multiplying both sides of the equation."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "Verifying Logarithmic Domains",
            "content": "Always substitute your final $x$-values back into the original logarithmic arguments. Since logarithms of negative numbers or zero are undefined, any algebraic solution that makes an argument non-positive must be rejected."
        }
    },
    {
        "id": "004398",
        "board": "CCEA",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Exponentials and Logarithms",
        "subtopic": [
            "Solving Exponential Equations with Base 10"
        ],
        "img": false,
        "question": "Solve the exponential equation:<br>$$2 \\times 10^{4x} = 50$$<br>giving your answer correct to 3 decimal places.",
        "steps": [
            "First, isolate the exponential term on one side of the equation by dividing both sides by $2$:<br>\\begin{aligned} 10^{4x} = 25 \\end{aligned}",
            "To solve this base 10 exponential equation, take the common logarithm ($\\log_{10}$) of both sides:<br>\\begin{aligned} 4x = \\log_{10}(25) \\end{aligned}",
            "Rearrange to solve for $x$:<br>\\begin{aligned} x = \\dfrac{ 1 }{ 4 }\\log_{10}(25) \\end{aligned}",
            "Evaluate this expression numerically using a calculator:<br>\\begin{aligned} x &\\approx \\dfrac{ 1.397940 }{ 4 } \\cr x &\\approx 0.349485 \\end{aligned}<br><br>Rounding to 3 decimal places gives $x \\approx 0.349$."
        ],
        "pi_options": [
            {
                "ans": "$x \\approx 0.350$",
                "feedback": "This is a minor rounding slip. Calculating $x = \\dfrac{ 1 }{ 4 }\\log_{10}(25)$ yields $0.349485...$ Since the digit in the ten-thousandths place is 4, this must round down to $0.349$ to 3 decimal places."
            },
            {
                "ans": "$x \\approx 0.805$",
                "feedback": "This error occurs if you use natural logarithms ($\\ln$) instead of common logarithms (base 10, $\\log_{10}$) when solving the exponential equation with base 10."
            },
            {
                "ans": "$x \\approx 0.174$",
                "feedback": "This error happens if you take the log of 50 before dividing by 2, evaluating $4x = \\log_{10}(50) \\implies x = \\dfrac{ \\log_{10}(50) }{ 4 } \\approx 0.174$, which violates algebraic order of operations."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "Selecting the Right Logarithm Base",
            "content": "While you can use natural logarithms ($\\ln$) to solve any exponential equation, using a log base that matches the exponential base (like $\\log_{10}$ for base 10) simplifies the algebra significantly because $\\log_{10}(10^k) = k$ directly."
        }
    },
    {
        "id": "004399",
        "board": "CCEA",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Exponentials and Logarithms",
        "subtopic": [
            "Quadratics in Exponential Form"
        ],
        "img": false,
        "question": "Solve the equation:<br>$$e^{2x} - 5e^x + 6 = 0$$<br>giving your answers in their simplest exact form.",
        "steps": [
            "Introduce a substitution variable. Let $y = e^x$. Since $e^{2x} = (e^x)^2 = y^2$, the equation becomes a standard quadratic equation in terms of $y$:<br>\\begin{aligned} y^2 - 5y + 6 = 0 \\end{aligned}",
            "Solve this quadratic equation by factoring:<br>\\begin{aligned} (y - 2)(y - 3) = 0 \\end{aligned}<br>This yields $y = 2$ or $y = 3$. Both are valid since $y = e^x > 0$ for all real $x$.",
            "Substitute back $y = e^x$ and solve for $x$ by taking natural logarithms:<br><br>1. For $y = 2$:<br>\\begin{aligned} e^x &= 2 \\cr x &= \\ln(2) \\end{aligned}<br><br>2. For $y = 3$:<br>\\begin{aligned} e^x &= 3 \\cr x &= \\ln(3) \\end{aligned}<br><br>Thus, the exact solutions are $x = \\ln(2)$ and $x = \\ln(3)$."
        ],
        "pi_options": [
            {
                "ans": "$x = 2$ or $x = 3$",
                "feedback": "These are the solutions for the substitution variable $y$, where $y = e^x$. You must complete the final step by taking the natural logarithm: $e^x = 2 \\implies x = \\ln 2$ and $e^x = 3 \\implies x = \\ln 3$."
            },
            {
                "ans": "$x = \\ln(-2)$ or $x = \\ln(-3)$",
                "feedback": "This is a sign error when factoring the quadratic $y^2 - 5y + 6 = 0$. Factoring correctly gives $(y-2)(y-3) = 0 \\implies y = 2, 3$, not negative values."
            },
            {
                "ans": "$x = \\ln(6)$",
                "feedback": "This is an index law misconception, where you incorrectly assume that $e^{2x} - 5e^x + 6 = 0 \\implies e^x = 6$. You must use a substitution variable to solve this quadratic-form equation."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "Distinguishing Substitution from Final Solutions",
            "content": "A very common test-day mistake is stopping once you solve the quadratic for the substitution variable (e.g., writing $y = 2, 3$). Always remind yourself that the original question asks to solve for $x$, so you must carry out the final logarithmic step."
        }
    },
    {
        "id": "004400",
        "board": "CCEA",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Exponentials and Logarithms",
        "subtopic": [
            "Logarithmic Proofs and Reciprocals"
        ],
        "img": false,
        "question": "<strong>(a)</strong> Prove that:<br>$$\\log_a \\left(\\frac{1}{k}\\right) = -\\log_a k$$<br>for any positive real numbers $a$ and $k$ where $a \\ne 1$.<br><br><strong>(b)</strong> Hence, showing all of your algebraic working, solve the equation:<br>$$\\log_4 (x - 3) + \\log_4 \\left(\\frac{1}{x}\\right) = -1$$",
        "steps": [
            "<strong>Part (a): Proving the identity</strong><br><br>We begin with the left-hand side and apply the laws of indices to express the fraction as a negative power:<br>\\begin{aligned} \\log_a \\left( \\dfrac{ 1 }{ k } \\right) &= \\log_a(k^{-1}) \\end{aligned}<br><br>Using the power law of logarithms ($\\log_b (A^r) = r\\log_b A$):<br>\\begin{aligned} \\log_a(k^{-1}) &= -1 \\times \\log_a k \\cr &= -\\log_a k \\end{aligned}<br>This completes the proof.",
            "<strong>Part (b): Solving the equation</strong><br><br>Using the identity proved in Part (a), we can replace the term $\\log_4 \\left( \\dfrac{ 1 }{ x } \\right)$ with $-\\log_4 x$:<br>\\begin{aligned} \\log_4 (x - 3) - \\log_4 x = -1 \\end{aligned}<br><br>Apply the subtraction law of logarithms:<br>\\begin{aligned} \\log_4 \\left( \\dfrac{ x - 3 }{ x } \\right) = -1 \\end{aligned}",
            "Convert to exponential form to remove the logarithm:<br>\\begin{aligned} \\dfrac{ x - 3 }{ x } &= 4^{-1} \\cr \\dfrac{ x - 3 }{ x } &= \\dfrac{ 1 }{ 4 } \\end{aligned}",
            "Solve the resulting linear equation for $x$:<br>\\begin{aligned} 4(x - 3) &= x \\cr 4x - 12 &= x \\cr 3x &= 12 \\cr x &= 4 \\end{aligned}<br><br>Check the domain: for $x = 4$, the arguments are $x - 3 = 1 > 0$ and $x = 4 > 0$. Both are valid. Thus, $x = 4$."
        ],
        "pi_options": [
            {
                "ans": "<strong>(b)</strong> $x = 2$",
                "feedback": "This is a calculation error. Solving $\\dfrac{ x - 3 }{ x } = \\dfrac{ 1 }{ 4 } \\implies 4x - 12 = x \\implies 3x = 12 \\implies x = 4$, not $2$."
            },
            {
                "ans": "<strong>(b)</strong> $x = -1$",
                "feedback": "This is a sign error that occurs if you set up the division equation incorrectly, or if you fail to reject a negative coordinate that violates the domain of the logarithms ($x > 3$)."
            },
            {
                "ans": "<strong>(b)</strong> $x = 12$",
                "feedback": "This error occurs if you multiply the terms instead of dividing them, solving $x(x-3) = 4^{-1}$ or another incorrect algebraic configuration."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "Using Logarithmic Identities to Simplify Fractions",
            "content": "The identity $\\log_a \\left( \\dfrac{ 1 }{ x } \\right) = -\\log_a x$ is an extremely powerful simplification shortcut. It allows you to convert division-based logarithmic problems into simple subtraction-based equations, avoiding complex fractional equations in intermediate steps."
        }
    }





];