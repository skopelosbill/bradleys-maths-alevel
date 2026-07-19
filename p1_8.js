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
                "ans": "Statement A is true, and Statement B is false.",
                "feedback": "A student might make the common algebraic error of distributing the exponent, believing that $(3c + d)^2 = 9c^2 + d^2$. However, squaring a binomial always produces a middle term: $(3c + d)^2 = 9c^2 + 6cd + d^2$."
            },
            {
                "ans": "Statement A is false, but the counterexample $c=0, d=0$ proves it.",
                "feedback": "While Statement A is indeed false, choosing $c=0, d=0$ as a counterexample yields $0 = 0$, which is a true statement. A counterexample must show a case where the equation does not hold, such as $c=1, d=1$."
            },
            {
                "ans": "Both Statement A and Statement B are true.",
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
                "ans": "Statement A is true, and Statement B is false.",
                "feedback": "Remember that the square root of a sum is not equal to the sum of the square roots. For example, $\\sqrt{ 3^2 + 4^2 } = \\sqrt{ 25 } = 5$, whereas $3 + 4 = 7$."
            },
            {
                "ans": "Statement B is false because it does not hold when $a$ and $b$ are negative.",
                "feedback": "Even if $a$ and $b$ are negative, their product $ab$ is positive, and the inequality $(a-b)^2 \\ge 0$ always holds because the square of any real number is non-negative."
            },
            {
                "ans": "Statement A is false, and the counterexample $a=0, b=0$ proves it.",
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
                "ans": "Statement A is true, and Statement B is false.",
                "feedback": "While $n^2 + n + 11$ produces prime numbers for small values of $n$ (such as $n=1, 2, 3$), it fails for $n=10$ or $n=11$. Always test multiple values, especially those related to the constant term."
            },
            {
                "ans": "Statement A is false, and the counterexample $n=1$ proves it.",
                "feedback": "If we substitute $n=1$ into Statement A, we get $1^2 + 1 + 11 = 13$, which is a prime number. Therefore, $n=1$ is not a valid counterexample because it supports the statement rather than disproving it."
            },
            {
                "ans": "Statement B is false because $n^3 - n$ is 0 when $n=1$, which is not a multiple of 6.",
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
                "ans": "Statement A is true, and Statement B is false.",
                "feedback": "The sum of two irrational numbers is not always irrational. For instance, if you add $\\sqrt{ 2 }$ and $-\\sqrt{ 2 }$ (both irrational), the sum is 0 (rational)."
            },
            {
                "ans": "Statement B is false because if $n=1$ (an odd integer), then $n^2 - 1 = 0$, which is not a multiple of 8.",
                "feedback": "When $n=1$, $n^2 - 1 = 0$. Since $0 = 8 \\times 0$, 0 is a multiple of 8. Therefore, $n=1$ is not a counterexample."
            },
            {
                "ans": "Statement A is false, and the counterexample $x = \\sqrt{ 2 }$ and $y = \\sqrt{ 3 }$ proves it.",
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
                "ans": "Statement A is true, and Statement B is false.",
                "feedback": "Statement A is false because squaring a number does not always make it larger (for example, if $0 \\le x \\le 1$). Statement B is true because the quadratic $(x-3)^2 + 1$ is always positive."
            },
            {
                "ans": "Statement A is false, and the counterexample $x=2$ disproves it.",
                "feedback": "If $x=2$, then $x^2 = 4$. Since $4 > 2$, $x=2$ satisfies the inequality $x^2 > x$. A counterexample must show a value that makes the statement false, such as $x=0$, $x=1$, or $x=0.5$."
            },
            {
                "ans": "Statement B is false because if $x = 3$, the expression equals 1, which is not greater than 0.",
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
            "We want to find the value of the motorcycle when it is nine years old, so we set $t = 9$:<br>\\begin{aligned} V &= 16000e^{9k} \\cr V &= 16000\\left( e^{3k} \\right)^3 \\end{aligned}<br><br>Substitute $e^{3k} = \\dfrac{ 3 }{ 4 }$ into this equation:<br>\\begin{aligned} V &= 16000\\left( \\dfrac{ 3 }{ 4 } \\right)^3 \\cr V &= 16000\\left( \\dfrac{ 27 }{ 64 } \\right) \\cr V &= 250 \\times 27 \\cr V &= 6750 \\end{aligned}<br><br>Thus, the predicted value of the motorcycle after nine years is £6,750."
        ],
        "pi_options": [
            {
                "ans": "£4,000",
                "feedback": "This is the result of using a linear depreciation model rather than an exponential model. A linear model assumes the motorcycle loses a constant amount of value each year (linear depreciation of £1,333.33 per year), whereas an exponential model assumes it loses a constant percentage of its value."
            },
            {
                "ans": "£9,000",
                "feedback": "This error occurs if you incorrectly calculate the value at $t=9$ as $V = 16000 \\times \\left( \\dfrac{ 3 }{ 4 } \\right)^2$ instead of $16000 \\times \\left( \\dfrac{ 3 }{ 4 } \\right)^3$. A power of 2 represents the value after 6 years, not 9 years."
            },
            {
                "ans": "£10,000",
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
                "ans": "14.8 years",
                "feedback": "This is a rounding error. Dividing $-\\ln(0.25)$ by $0.0940$ yields approximately $14.748$ years. Since the digit in the hundredths place is 4, this rounds down to $14.7$ years, not up to $14.8$ years."
            },
            {
                "ans": "15.4 years",
                "feedback": "This error occurs if you round the decay constant $k$ too severely to $0.09$ in intermediate steps, leading to $t = \\dfrac{ \\ln(0.25) }{ -0.09 } \\approx 15.4$ years."
            },
            {
                "ans": "12.5 years",
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
                "ans": "30°C",
                "feedback": "This is a minor calculation error. Ensure you do not round the exponent or value of $e^{-1.9325}$ too early. The unrounded calculation yields $29.41^\\circ\\text{C}$, which rounds down to $29^\\circ\\text{C}$."
            },
            {
                "ans": "20°C",
                "feedback": "This represents the limit as $t \\to \\infty$ (the ambient room temperature). While the drink will eventually cool to $20^\\circ\\text{C}$, after only 25 minutes it will still be slightly above room temperature."
            },
            {
                "ans": "34°C",
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
                "ans": "4,500",
                "feedback": "This error occurs if you multiply the population by 3 (calculating $1500 \\times 3$) instead of recognizing that the population triples every 4 hours, which requires cubing the factor of 3 over 12 hours ($3^3 = 27$)."
            },
            {
                "ans": "1,500",
                "feedback": "This is simply the population at $t = 4$ hours. After 12 hours, the population will have undergone two further tripling cycles."
            },
            {
                "ans": "40,500",
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
                "ans": "12.8 years",
                "feedback": "This is a rounding error. The value $t \\approx 12.729$ rounds down to $12.7$ because the digit in the hundredths place is 2."
            },
            {
                "ans": "38.2 years",
                "feedback": "This error occurs if you fail to divide by the combined exponent coefficient of $0.03$, leaving the calculation as $t = \\ln\\left( \\dfrac{ 22 }{ 15 } \\right) / 0.01 \\approx 38.2$ years."
            },
            {
                "ans": "25.6 years",
                "feedback": "This error can occur if you incorrectly subtract the exponents when dividing (calculating $0.02 - 0.01 = 0.01$) instead of correctly adding them when dividing by a negative exponent ($0.02 - (-0.01) = 0.03$)."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "Combining Exponentials with Different Bases",
            "content": "When solving $Ae^{at} = Be^{-bt}$, always divide both sides by $e^{-bt}$ to get $e^{(a+b)t} = \\dfrac{ B }{ A }$. This cleanly combines the exponents into a single positive exponential term, making it simple to take the natural logarithm of both sides."
        }
    }



];