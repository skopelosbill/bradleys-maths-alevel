window.ALEVEL_QUESTIONS = [
        {
                "id": "004001",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Factor Theorem"
                ],
                "img": false,
                "question": "Let $f(x) = 2x^3 - kx^2 + 5x + 3k$.<br>Given that (x - 2) is a factor of $f(x)$, find the value of the constant k.",
                "steps": [
                        "According to the <strong>Factor Theorem</strong>, if (x - 2) is a factor of $f(x)$, then evaluating the polynomial at $x = 2$ must equal zero: $f(2) = 0$.",
                        "We substitute $x = 2$ into the expression fo $f(x)$:<br>$$f(2) = 2(2)^3 - k(2)^2 + 5(2) + 3k$$",
                        "Evaluating the powers and simplifying each term gives:<br>$$f(2) = 2(8) - 4k + 10 + 3k$$<br>$$f(2) = 16 - 4k + 10 + 3k$$",
                        "Combining the numerical terms and the k terms yields:<br>$$(16 + 10) + (-4k + 3k) = 0$$<br>$$26 - k = 0$$",
                        "Solving this linear equation gives our final value for k:<br>$$k = 26$$",
                        "Final Answer: $$k = 26$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$k = -26$$",
                                "feedback": "You evaluated $f(-2) = 0$ instead of $f(2) = 0$. Since the linear factor is (x - 2), the corresponding root to substitute is $x = 2$, not $x = -2$."
                        },
                        {
                                "ans": "$$k = -13$$",
                                "feedback": "You forgot to square the x-value when multiplying by k, evaluating the $-kx^2$ term as simply -k. Remember that at $x=2$, $-kx^2$ becomes $-k(2)^2 = -4k$."
                        },
                        {
                                "ans": "$$k = 24$$",
                                "feedback": "It appears you set $f(2) = 2$ instead of $f(2) = 0$. Since (x - 2) is a *factor*, the remainder must be exactly zero according to the Factor Theorem."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Root Sign Rule",
                        "content": "Always double-check your root's sign before substituting. If (x - c) is the factor, you substitute $x = c$. If it is (x + c), you substitute $x = -c$. A tiny sign error here will instantly derail all of your subsequent algebra."
                }
        },
        {
                "id": "004002",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Factor Theorem"
                ],
                "img": false,
                "question": "Let $f(x) = 4x^3 + ax^2 - 7x + 2a$.<br>Given that (x + 2) is a factor of $f(x)$, find the value of the constant a.",
                "steps": [
                        "According to the <strong>Factor Theorem</strong>, if (x + 2) is a factor of $f(x)$, then evaluating the polynomial at $x = -2$ must equal zero: $f(-2) = 0$.",
                        "We substitute $x = -2$ into the expression fo $f(x)$:<br>$$f(-2) = 4(-2)^3 + a(-2)^2 - 7(-2) + 2a$$",
                        "Evaluating the powers and simplifying each term (keeping close track of negative signs) gives:<br>$$f(-2) = 4(-8) + a(4) + 14 + 2a$$<br>$$f(-2) = -32 + 4a + 14 + 2a$$",
                        "Combining the numerical terms and the a terms yields:<br>$$(-32 + 14) + (4a + 2a) = 0$$<br>$$-18 + 6a = 0$$",
                        "Solving this linear equation gives our final value for a:<br>\\begin{aligned}\n6a &= 18 \\cr\na &= 3\n\\end{aligned}",
                        "Final Answer: $$a = 3$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$a = -3$$",
                                "feedback": "You evaluated $f(2) = 0$ instead of $f(-2) = 0$. Since the linear factor is (x + 2), the corresponding root to substitute is $x = -2$, not $x = 2$."
                        },
                        {
                                "ans": "$$a = \\dfrac{23}{3}$$",
                                "feedback": "Check your signs during substitution. You likely evaluated the term -7(-2) as -14 instead of +14. Multiplying two negative numbers yields a positive product."
                        },
                        {
                                "ans": "$$a = -9$$",
                                "feedback": "Be careful when squaring negative numbers. $(-2)^2 = +4$, not -4. Any real number squared is always positive."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Negative Bases",
                        "content": "When cubing and squaring negative numbers like -2, always write them inside brackets on your calculator: $(-2)^3 = -8$ and $(-2)^2 = 4$. Leaving brackets out can cause your calculator to evaluate $-2^2$ as -4, introducing a fatal sign error."
                }
        },
        {
                "id": "004003",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Factor Theorem"
                ],
                "img": false,
                "question": "Let $f(x) = 3x^3 - 2kx^2 + 5x + 4k$.<br>Given that (x - 1) is a factor of $f(x)$, find the value of the constant k.",
                "steps": [
                        "According to the <strong>Factor Theorem</strong>, if (x - 1) is a factor of $f(x)$, then evaluating the polynomial at $x = 1$ must equal zero: $f(1) = 0$.",
                        "We substitute $x = 1$ into the expression fo $f(x)$:<br>$$f(1) = 3(1)^3 - 2k(1)^2 + 5(1) + 4k$$",
                        "Simplifying the powers and combining terms gives:<br>$$f(1) = 3 - 2k + 5 + 4k$$",
                        "Combining the constant terms and the k terms yields:<br>$$(3 + 5) + (-2k + 4k) = 0$$<br>$$8 + 2k = 0$$",
                        "Solving this linear equation gives our final value for k:<br>\\begin{aligned}\n2k &= -8 \\cr\nk &= -4\n\\end{aligned}",
                        "Final Answer: $$k = -4$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$k = 4$$",
                                "feedback": "You evaluated $f(-1) = 0$ instead of $f(1) = 0$. Since the linear factor is (x - 1), the root is $x = 1$."
                        },
                        {
                                "ans": "$$k = -\\dfrac{4}{3}$$",
                                "feedback": "Be careful with order of operations. The term $-2kx^2$ evaluated at $x=1$ becomes $-2k(1)^2 = -2k$. The negative sign belongs to the coefficient and is not squared."
                        },
                        {
                                "ans": "$$k = -1$$",
                                "feedback": "Double-check your basic arithmetic. Combining the constant terms 3 and 5 yields 8, not 2."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Simplification First",
                        "content": "When $x = 1$, calculations become incredibly fast because $1^3 = 1$ and $1^2 = 1$. The expression simply collapses to the sum of its coefficients: $3 - 2k + 5 + 4k = 0$. Use this shortcut to save precious exam time!"
                }
        },
        {
                "id": "004004",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Factor Theorem"
                ],
                "img": false,
                "question": "Let $f(x) = 2x^3 - ax^2 - 8x + 3a$.<br>Given that (x - 3) is a factor of $f(x)$, find the value of the constant a.",
                "steps": [
                        "According to the <strong>Factor Theorem</strong>, if (x - 3) is a factor of $f(x)$, then evaluating the polynomial at $x = 3$ must equal zero: $f(3) = 0$.",
                        "We substitute $x = 3$ into the expression fo $f(x)$:<br>$$f(3) = 2(3)^3 - a(3)^2 - 8(3) + 3a$$",
                        "Evaluating the powers and simplifying each term gives:<br>$$f(3) = 2(27) - 9a - 24 + 3a$$<br>$$f(3) = 54 - 9a - 24 + 3a$$",
                        "Combining the constant terms and the a terms yields:<br>$$(54 - 24) + (-9a + 3a) = 0$$<br>$$30 - 6a = 0$$",
                        "Solving this linear equation gives our final value for a:<br>\\begin{aligned}\n6a &= 30 \\cr\na &= 5\n\\end{aligned}",
                        "Final Answer: $$a = 5$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$a = -5$$",
                                "feedback": "You evaluated $f(-3) = 0$ instead of $f(3) = 0$. Since the linear factor is (x - 3), the root is $x = 3$."
                        },
                        {
                                "ans": "$$a = 32$$",
                                "feedback": "Be mindful of BIDMAS/indices. The term $2x^3$ means $2 \\times (x^3)$, not $(2x)^3$. You must cube 3 first to get 27, then multiply by 2 to get 54."
                        },
                        {
                                "ans": "$$a = 2.5$$",
                                "feedback": "Check your algebraic collection of a terms. We have -9a + 3a, which simplifies to -6a, not -12a."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Order of Operations",
                        "content": "Remember that index powers always have priority over multiplication. In the term $2x^3$, the exponent only applies to the x. You must evaluate $x^3$ first before doubling the result."
                }
        },
        {
                "id": "004005",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Factor Theorem"
                ],
                "img": false,
                "question": "Let $f(x) = 2x^3 + 3px^2 - 2x - 3p$.<br>Given that (x + 3) is a factor of $f(x)$, find the value of the constant p.",
                "steps": [
                        "According to the <strong>Factor Theorem</strong>, if (x + 3) is a farctor of $f(x)$, then evaluating the polynomial at $x = -3$ must equal zero: $f(-3) = 0$.",
                        "We substitute $x = -3$ into the expression for $f(x)$:<br>$$ f(-3)\\c = 2(-3)^3 + 3p(-3)^2 - 2(-3) - 3p$$",
                        "Evaluating the powers and simplifying each term (taking close care with negative signs) gives:<br>$$f(-3) = 2(-27) + 3p(9) + 6 - 3p$$<br>$$f(-3) = -54 + 27p + 6 - 3p$$",
                        "Combining the numerical terms and the p terms yields:<br>$$(-54 + 6) + (27p - 3p) = 0$$<br>$$-48 + 24p = 0$$",
                        "Solving this linear equation gives our final value for p:<br>\\begin{aligned}24p &= 48 \\crp &= 2\\end{aligned}",
                        "Final Answer: $$p = 2$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$p = -2$$",
                                "feedback": "You evaluated $f(3) = 0$ instead of $f(-3) = 0$. Since the linear factor is (x + 3), you must substitute $x = -3$."
                        },
                        {
                                "ans": "$$p = 2.5$$",
                                "feedback": "Watch your signs carefully. Substituting $x = -3$ into the term -2x yields $-2 \\times (-3) = +6$. A sign slip here will change your final linear equation."
                        },
                        {
                                "ans": "$$p = -1.6$$",
                                "feedback": "Be careful when squaring negative numbers: $(-3)^2 = +9$. It appears you evaluated it as -9, which changed your p coefficient from +27p to -27p."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Two-Step Simplification",
                        "content": "With multiple terms containing your target constant (both $3px^2$ and -3p), group all constant terms together and all variable terms together before attempting to solve. Keeping your workspaces separate prevents simple algebraic slips."
                }
        },
        {
                "id": "004006",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": [
                        "Trigonometric Functions",
                        "Numerical Methods"
                ],
                "subtopic": [
                        "Location of Roots",
                        "Small Angle Approximation"
                ],
                "img": "images/Pure_SVGs/004006.svg",
                "question": "The diagram shows a sketch of the curve $y = \\sin x$, where $x$ is measured in radians.<br>(a) Use the diagram to explain why the equation $$\\sin x - 2x + \\tfrac14 = 0$$ has exactly one real root.<br>(b) Let the root be $\\beta$. Given that $\\beta$ is small, use the small-angle approximation for $\\sin x$ to estimate the value of $\\beta$ to 3 decimal places.",
                "steps": [
                        "From the diagram, the curve $y = \\sin x$ starts at the origin with gradient 1, while the line $y = 2x - \\tfrac14$ starts below the curve and has a steeper gradient.",
                        "Because the line is steeper, it crosses the curve once for a small positive value of $x$, and afterwards the line increases without bound while $\\sin x$ remains between -1 and 1.",
                        "Therefore the equation has exactly one real root.",
                        "Using the small-angle approximation $\\sin x \\approx x$, substitute into the equation: $$x - 2x + \\tfrac14 = 0.$$",
                        "Simplifying gives \\begin{aligned}\n-x + \\tfrac14 &= 0 \\cr\nx &= \\tfrac14.\n\\end{aligned}",
                        "Final Answer: $$\\beta \\approx 0.250.$$ <img src='images/Pure_SVGs/004006_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\beta = 0.125$$",
                                "feedback": "You halved the constant term incorrectly. The equation becomes $-x + \\tfrac14 = 0$, not $-2x + \\tfrac14 = 0$."
                        },
                        {
                                "ans": "$$\\beta = 0.500$$",
                                "feedback": "You added the x terms instead of subtracting them. The expression is x - 2x, which equals -x."
                        },
                        {
                                "ans": "$$\\beta = -0.250$$",
                                "feedback": "A negative root would require the line to start above the curve, which the diagram shows is not the case."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Keep the Linear Terms Alive",
                        "content": "When using small-angle approximations, ensure the linear terms do not cancel. If they do, the approximation becomes useless and you must include higher-order terms."
                }
        },
        {
                "id": "004007",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": [
                        "Trigonometric Functions",
                        "Numerical Methods"
                ],
                "subtopic": [
                        "Location of Roots",
                        "Small Angle Approximation"
                ],
                "img": "images/Pure_SVGs/004007.svg",
                "question": "The diagram shows a sketch of the curve $y = \\tan x$ for values of $x$ close to zero.<br>(a) Use the diagram to explain why the equation $$\\tan x - 3x + 0.2 = 0$$ has exactly one real root in the interval $-0.5 < x < 0.5$.<br>(b) Let the root be $\\gamma$. Given that $\\gamma$ is small, use the small-angle approximation for $\\tan x$ to estimate the value of $\\gamma$ to 3 decimal places.",
                "steps": [
                        "From the diagram, $y = \\tan x$ is increasing and passes through the origin with gradient 1.",
                        "The line $y = 3x - 0.2$ is steeper and starts below the curve at $x = 0$.",
                        "The two graphs cross exactly once in the interval shown, so the equation has exactly one real root.",
                        "Using the small-angle approximation $\\tan x \\approx x$, substitute into the equation: $$x - 3x + 0.2 = 0.$$",
                        "Simplifying gives \\begin{aligned}\n-2x + 0.2 &= 0 \\cr\nx &= 0.1.\n\\end{aligned}",
                        "Final Answer: $$\\gamma \\approx 0.100.$$ <img src='images/Pure_SVGs/004007_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\gamma = 0.200$$",
                                "feedback": "You solved $-x + 0.2 = 0$ instead of $-2x + 0.2 = 0$."
                        },
                        {
                                "ans": "$$\\gamma = -0.100$$",
                                "feedback": "A negative root contradicts the diagram, where the line crosses the curve for a positive x."
                        },
                        {
                                "ans": "$$\\gamma = 0.050$$",
                                "feedback": "You divided by 4 instead of 2 when rearranging the equation."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Trust the Gradient",
                        "content": "When comparing a curve and a straight line, the relative steepness near the origin often tells you how many intersections to expect."
                }
        },
        {
                "id": "004008",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": [
                        "Trigonometric Functions",
                        "Numerical Methods"
                ],
                "subtopic": [
                        "Location of Roots",
                        "Small Angle Approximation"
                ],
                "img": "images/Pure_SVGs/004008.svg",
                "question": "The diagram shows a sketch of the curve $y = \\cos(2x)$, where $x$ is measured in radians.<br>.(a) Use the diagram to explain why the equation $$\\cos(2x) - x - \\tfrac13 = 0$$ has exactly one real root.<br>(b) Let the root be $\\delta$. Given that $\\delta$ is small, use the small-angle approximation for $\\cos(2x)$ to estimate the value of $\\delta$ to 3 decimal places.",
                "steps": [
                        "From the diagram, $y = \\cos(2x)$ starts at 1 when $x = 0$, while the line $y = x + \\tfrac13$ starts at $\\tfrac13$ and increases.",
                        "The curve decreases while the line increases, so they cross once near the origin.",
                        "After this, the line grows without bound while the cosine curve remains between -1 and 1, so there are no further intersections.",
                        "Using the small-angle approximation $\\cos(2x) \\approx 1 - 2x^2$, substitute into the equation: $$1 - 2x^2 - x - \\tfrac13 = 0.$$",
                        "Simplifying gives $$2x^2 + x - \\tfrac23 = 0.$$",
                        "Solving the quadratic gives $$x = \\frac{ -1 + \\sqrt{19/3 }}{4} \\approx 0.379.$$",
                        "Final Answer: $$\\delta \\approx 0.379.$$ <img src='images/Pure_SVGs/004008_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\delta = 0.189$$",
                                "feedback": "You halved the quadratic coefficient incorrectly when applying the quadratic formula."
                        },
                        {
                                "ans": "$$\\delta = -0.379$$",
                                "feedback": "The negative root is not valid because the diagram shows the intersection occurring for positive x."
                        },
                        {
                                "ans": "$$\\delta = 0.500$$",
                                "feedback": "You used $\\cos(2x) \\approx 1$ and ignored the x and $x^2$ terms, which is not appropriate here."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Quadratics from Approximations",
                        "content": "When approximating cosine near zero, the resulting equation often becomes quadratic. Solving it carefully is essential for an accurate estimate."
                }
        },
        {
                "id": "004009",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": [
                        "Exponential Functions",
                        "Numerical Methods"
                ],
                "subtopic": [
                        "Location of Roots",
                        "Small Angle Approximation"
                ],
                "img": "images/Pure_SVGs/004009.svg",
                "question": "The diagram shows a sketch of the curve $y = e^{ -x }$, where $x$ is measured in radians.<br>(a) Use the diagram to explain why the equation $$e^{ -x } - 1.5x - 0.8 = 0$$ has exactly one real root.<br>(b) Let the root be $\\varepsilon$. Given that $\\varepsilon$ is small, use the small-angle approximation for $e^{ -x }$ to estimate the value of $\\varepsilon$ to 3 decimal places.",
                "steps": [
                        "From the diagram, $y = e^{ -x }$ decreases from 1 as x increases, while the line $y = 1.5x + 0.8$ increases.",
                        "The two graphs cross once near the origin and do not meet again because the exponential decays while the line grows without bound.",
                        "Using the small-angle approximation $e^{ -x } \\approx 1 - x$, substitute into the equation: $$1 - x - 1.5x - 0.8 = 0.$$",
                        "Simplifying gives \\begin{aligned}\n0.2 - 2.5x &= 0 \\cr\nx &= 0.08.\n\\end{aligned}",
                        "Final Answer: $$\\varepsilon \\approx 0.080.$$ <img src='images/Pure_SVGs/004009_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\varepsilon = 0.040$$",
                                "feedback": "You divided by 5 instead of 2.5 when rearranging the equation."
                        },
                        {
                                "ans": "$$\\varepsilon = -0.080$$",
                                "feedback": "A negative root contradicts the diagram, where the line crosses the curve for positive x."
                        },
                        {
                                "ans": "$$\\varepsilon = 0.200$$",
                                "feedback": "You forgot to combine the x terms correctly: $-x - 1.5x = -2.5x$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Exponentials Behave Nicely",
                        "content": "Near zero, $e^{ -x }$ is almost perfectly linear. This makes small-angle approximations extremely effective for estimating roots."
                }
        },
        {
                "id": "004010",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": [
                        "Trigonometric Functions",
                        "Numerical Methods"
                ],
                "subtopic": [
                        "Location of Roots",
                        "Small Angle Approximation"
                ],
                "img": "images/Pure_SVGs/004010.svg",
                "question": "The diagram shows a sketch of the curve $y = \\sin(3x) + 0.5$, where $x$ is measured in radians.<br>(a) Use the diagram to explain why the equation $$\\sin(3x) + 0.5 - 2x = 0$$ has exactly one real root.<br>(b) Let the root be $\\zeta$. Given that $\\zeta$ is small, use the small-angle approximation for $\\sin(3x)$ to estimate the value of $\\zeta$ to 3 decimal places.",
                "steps": [
                        "From the diagram, $y = \\sin(3x) + 0.5$ starts at 0.5 with initial gradient about 3, while the line $y = 2x$ starts at the origin with gradient 2.",
                        "The curve begins above the line and crosses it once for a small negative value of $x$.",
                        "After this, the line continues to increase while the curve oscillates, so there are no further intersections.",
                        "Using the small-angle approximation $\\sin(3x) \\approx 3x$, substitute into the equation: $$3x + 0.5 - 2x = 0.$$",
                        "Simplifying gives \\begin{aligned}\nx + 0.5 &= 0 \\cr\nx &= -0.5.\n\\end{aligned}",
                        "Final Answer: $$\\zeta \\approx -0.500.$$ <img src='images/Pure_SVGs/004010_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\zeta = 0.500$$",
                                "feedback": "The diagram shows the intersection occurring for a negative value of $x$, not a positive one."
                        },
                        {
                                "ans": "$$\\zeta = -0.250$$",
                                "feedback": "You halved the constant term incorrectly. The equation is $x + 0.5 = 0$, not $2x + 0.5 = 0$."
                        },
                        {
                                "ans": "$$\\zeta = -1.000$$",
                                "feedback": "You doubled the constant term incorrectly when rearranging the equation."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Oscillation vs Linearity",
                        "content": "When a sinusoidal curve is shifted vertically, its first intersection with a straight line often occurs very close to the origin. Small-angle approximations capture this behaviour neatly."
                }
        },
        {
                "id": "004011",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Quotient Rule"
                ],
                "img": false,
                "question": "A curve has the equation:<br>$$y = \\dfrac{ 3x^2 + 12x }{ (x+2)^2 }, \\quad x \\ne -2$$<br><strong>(a)</strong> Show that $\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{A}{ (x+2)^n }$, where $A$ and $n$ are constants to be found.<br><strong>(b)</strong> Hence, deduce the range of values for x for which $\\dfrac{\\text{d}y}{\\text{d}x} < 0$.",
                "steps": [
                        "<strong>Part (a):</strong> We begin by identifying the numerator as $u = 3x^2 + 12x$ and the denominator as $v = (x+2)^2$.",
                        "Differentiating both terms with respect to x gives:<br>\\begin{aligned}\nu' &= 6x + 12 \\cr\n&= 6(x+2)\n\\end{aligned}<br>$$v' = 2(x+2)$$",
                        "Using the <strong>Quotient Rule</strong>, $\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{ u'v - uv' }{ v^2 }$:<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x}&=\\dfrac{ (6x+12)(x+2)^2}{ (x+2)^4 } \\cr &\\quad - \\dfrac{(3x^2+12x) \\cdot 2(x+2) }{ (x+2)^4 }\\end{aligned}",
                        "We can factorise out a common term of (x+2) from the numerator to simplify:<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{ (x+2) [ (6x+12)(x+2)]}{ (x+2)^4 }\\cr &\\quad - \\dfrac{ ( x+2 )[ 2(3x^2+12x) ] }{ (x+2)^4 }\\end{aligned} <br> \\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{ (6x+12)(x+2)}{ (x+2)^3 }\\cr & \\quad-\\dfrac{ 2(3x^2+12x) }{ (x+2)^3 }\\end{aligned}",
                        "Expanding and simplifying the remaining terms in the numerator:<br>\\begin{aligned}(6x+12)(x+2)\\cr \\quad= 6x^2 + 24x + 24\\end{aligned}<br>$$2(3x^2+12x) = 6x^2 + 24x$$<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{ (6x^2 + 24x + 24) }{ (x+2)^3 }\\cr & \\quad-\\dfrac{ (6x^2 + 24x) }{ (x+2)^3 }\\end{aligned}<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{24}{ (x+2)^3 }$$<br>Therefore, the constants are $A = 24$ and $n = 3$.",
                        "<strong>Part (b):</strong> For $\\dfrac{\\text{d}y}{\\text{d}x} < 0$:<br>$$\\dfrac{24}{ (x+2)^3 } < 0$$",
                        "Since the numerator is a positive constant ($24 > 0$), the sign of the fraction is determined entirely by the denominator. Therefore, we require the denominator to be negative:<br>\\begin{aligned}(x+2)^3 &< 0 \\cr\\implies x + 2 &< 0 \\cr\\implies x &< -2\\end{aligned}",
                        "Final Answer: <strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{24}{ (x+2)^3 }$$ <strong>(b)</strong> $$x < -2$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{24}{ (x+2)^3 }$$ <strong>(b)</strong> $$x > -2$$",
                                "feedback": "You probably made an inequality error in Part (b). For the fraction to be negative, the denominator $(x+2)^3$ must be negative. Since an odd power preserves the negative sign, this requires $x + 2 < 0$, which simplifies to $x < -2$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{ 12x^2 + 48x + 24 }{ (x+2)^3 }$$ <strong>(b)</strong> $$x < -2$$",
                                "feedback": "You probably used the Product Rule formula (adding the two terms in your numerator) instead of the Quotient Rule formula (subtracting them). Check your formula sheet: the numerator must be u'v - uv'."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{24}{ (x+2)^4 }$$ <strong>(b)</strong> $$x < -2$$",
                                "feedback": "You forgot to decrease the power of the denominator when cancelling out the common factor of (x + 2) from your numerator. The denominator should be $(x+2)^3$, not $(x+2)^4$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Quotient Rule Cancelling",
                        "content": "When applying the Quotient Rule to functions with a squared denominator like $(x+a)^2$, both terms in your numerator will always contain a common factor of (x+a). Always factorise and cancel this term out first before expanding the rest of the numerator. It saves significant time and prevents algebraic errors."
                }
        },
       {
        "id": "004012",
        "board": "Pearson Edexcel",
        "branch": "Pure",
        "level": "A",
        "major_area": "Differentiation",
        "topic": "Differentiation",
        "subtopic": [
                "Quotient Rule"
        ],
        "img": false,
        "question": "A curve has the equation:<br>$$y = \\dfrac{ -4x^2 - 8x }{ (x+1)^2 }, \\quad x \\ne -1$$<br><strong>(a)</strong> Show that $\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{A}{ (x+1)^n }$, where $A$ and $n$ are constants to be found.<br><strong>(b)</strong> Hence, deduce the range of values for x for which $\\dfrac{\\text{d}y}{\\text{d}x} < 0$.",
        "steps": [
                "<strong>Part (a):</strong> Let $u = -4x^2 - 8x$ and $v = (x+1)^2$.",
                "Differentiating both terms with respect to x gives:<br>\\begin{aligned} u' &= -8x - 8 \\cr &= -8(x+1) \\end{aligned}<br>$$v' = 2(x+1)$$",
                "Using the <strong>Quotient Rule</strong>, $\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{ u'v - uv' }{ v^2 }$:<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{ (-8x-8)(x+1)^2}{ (x+1)^4 } \\cr &\\quad - \\dfrac{(-4x^2-8x) \\cdot 2(x+1) }{ (x+1)^4 }\\end{aligned}",
                "We can factorise out a common term of (x+1) from the numerator to simplify:<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{ (x+1) [ (-8x-8)(x+1)]}{ (x+1)^4 }\\cr &\\quad - \\dfrac{ ( x+1 )[ 2(-4x^2-8x) ] }{ (x+1)^4 }\\end{aligned} <br> \\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{ (-8x-8)(x+1)}{ (x+1)^3 }\\cr & \\quad-\\dfrac{ 2(-4x^2-8x) }{ (x+1)^3 }\\end{aligned}",
                "Expanding and simplifying the remaining terms in the numerator:<br>\\begin{aligned}(-8x-8)(x+1)\\cr \\quad= -8x^2 - 16x - 8\\end{aligned}<br>$$2(-4x^2-8x) = -8x^2 - 16x$$<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{ (-8x^2 - 16x - 8) }{ (x+1)^3 }\\cr & \\quad-\\dfrac{ (-8x^2 - 16x) }{ (x+1)^3 }\\end{aligned}<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{-8}{ (x+1)^3 }$$<br>Therefore, the constants are $A = -8$ and $n = 3$.",
                "<strong>Part (b):</strong> For $\\dfrac{\\text{d}y}{\\text{d}x} < 0$:<br>$$\\dfrac{-8}{ (x+1)^3 } < 0$$",
                "Since the numerator is a negative constant ($-8 < 0$), the fraction is only negative when the denominator is positive:<br>\\begin{aligned}(x+1)^3 &> 0 \\cr\\implies x + 1 &> 0 \\cr\\implies x &> -1\\end{aligned}",
                "Final Answer: <strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{-8}{ (x+1)^3 }$$ <strong>(b)</strong> $$x > -1$$"
        ],
        "pi_options": [
                {
                        "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{ -8 }{ (x+1)^3 }$$ <strong>(b)</strong> $$x < -1$$",
                        "feedback": "You probably forgot to account for the negative sign in your numerator when setting up your inequality in Part (b). Because -8 is negative, the fraction is only negative when the denominator is positive: $(x+1)^3 > 0$, which yields $x > -1$."
                },
                {
                        "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{ -8(2x+1) }{ (x+1)^3 }$$ <strong>(b)</strong> $$x > -1$$",
                        "feedback": "Check your expanding and signs. When expanding $- (-8x^2 - 16x)$ in the numerator, the double negative turns both terms positive, which cancels out your quadratic and linear terms perfectly."
                },
                {
                        "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{8}{ (x+1)^3 }$$ <strong>(b)</strong> $$x < -1$$",
                        "feedback": "Check your differentiation of $u = -4x^2 - 8x$. The derivative must be $u' = -8x - 8$, not +8x + 8. This sign error changed the sign of your constant A from negative to positive."
                }
        ],
        "bradley_insight": {
                "type": "caution",
                "title": "The Head Teacher's Eye: Negative Inequality Flip",
                "content": "In Part (b), be exceptionally careful when the numerator is negative. A fraction $\\frac{\\text{numerator}}{\\text{denominator}} < 0$ means the numerator and denominator must have opposite signs. Since the numerator is -8 (negative), the denominator must be positive to ensure the overall value is negative."
        }
},
        {
        "id": "004013",
        "board": "Pearson Edexcel",
        "branch": "Pure",
        "level": "A",
        "major_area": "Differentiation",
        "topic": "Differentiation",
        "subtopic": [
                "Quotient Rule"
        ],
        "img": false,
        "question": "A curve has the equation:<br>$$y = \\dfrac{ 2x^2 + 12x }{ (x+3)^2 }, \\quad x \\ne -3$$<br><strong>(a)</strong> Show that $\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{A}{ (x+3)^n }$, where $A$ and $n$ are constants to be found.<br><strong>(b)</strong> Hence, deduce the range of values for x for which $\\dfrac{\\text{d}y}{\\text{d}x} > 0$.",
        "steps": [
                "<strong>Part (a):</strong> Let $u = 2x^2 + 12x$ and $v = (x+3)^2$.",
                "Differentiating both terms with respect to x gives:<br>\\begin{aligned} u' &= 4x + 12 \\cr &= 4(x+3) \\end{aligned}<br>$$v' = 2(x+3)$$",
                "Using the <strong>Quotient Rule</strong>, $\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{ u'v - uv' }{ v^2 }$:<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{ (4x+12)(x+3)^2}{ (x+3)^4 } \\cr &\\quad - \\dfrac{(2x^2+12x) \\cdot 2(x+3) }{ (x+3)^4 }\\end{aligned}",
                "We can factorise out a common term of (x+3) from the numerator to simplify:<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{ (x+3) [ (4x+12)(x+3)]}{ (x+3)^4 }\\cr &\\quad - \\dfrac{ ( x+3 )[ 2(2x^2+12x) ] }{ (x+3)^4 }\\end{aligned} <br> \\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{ (4x+12)(x+3)}{ (x+3)^3 }\\cr & \\quad-\\dfrac{ 2(2x^2+12x) }{ (x+3)^3 }\\end{aligned}",
                "Expanding and simplifying the remaining terms in the numerator:<br>\\begin{aligned}(4x+12)(x+3)\\cr \\quad= 4x^2 + 24x + 36\\end{aligned}<br>$$2(2x^2+12x) = 4x^2 + 24x$$<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{ (4x^2 + 24x + 36) }{ (x+3)^3 }\\cr & \\quad-\\dfrac{ (4x^2 + 24x) }{ (x+3)^3 }\\end{aligned}<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{36}{ (x+3)^3 }$$<br>Therefore, the constants are $A = 36$ and $n = 3$.",
                "<strong>Part (b):</strong> For $\\dfrac{\\text{d}y}{\\text{d}x} > 0$:<br>$$\\dfrac{36}{ (x+3)^3 } > 0$$",
                "Since the numerator is a positive constant ($36 > 0$), the fraction will only be positive when the denominator is positive:<br>\\begin{aligned}(x+3)^3 &> 0 \\cr\\implies x + 3 &> 0 \\cr\\implies x &> -3\\end{aligned}",
                "Final Answer: <strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{36}{ (x+3)^3 }$$ <strong>(b)</strong> $$x > -3$$"
        ],
        "pi_options": [
                {
                        "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{36}{ (x+3)^3 }$$ <strong>(b)</strong> $$x < -3$$",
                        "feedback": "You probably set up your inequality incorrectly in Part (b). For the fraction to be positive ($> 0$), both the numerator and the denominator must have the same sign. Since $36 > 0$, the denominator must be positive: $x + 3 > 0$, which yields $x > -3$."
                },
                {
                        "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{18}{ (x+3)^3 }$$ <strong>(b)</strong> $$x > -3$$",
                        "feedback": "Check your expansion of (4x+12)(x+3). The constant term is $12 \\times 3 = 36$, not 18. Remember to multiply the constants together during your expansion."
                },
                {
                        "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{36}{ (x+3)^2 }$$ <strong>(b)</strong> $$x > -3$$",
                        "feedback": "You forgot to decrease the power of the denominator when cancelling out the common factor of (x + 3) from your numerator. The denominator should be $(x+3)^3$, not $(x+3)^2$."
                }
        ],
        "bradley_insight": {
                "type": "deeper",
                "title": "The Head Teacher's Eye: Odd vs Even Powers in Inequalities",
                "content": "Unlike squared denominators like $(x+3)^2$ which are always positive, cubed denominators like $(x+3)^3$ preserve the sign of their base. This means $(x+3)^3$ will be positive when $x > -3$, and negative when $x < -3$. Always look at the exponent first!"
        }
},
        {
        "id": "004014",
        "board": "Pearson Edexcel",
        "branch": "Pure",
        "level": "A",
        "major_area": "Differentiation",
        "topic": "Differentiation",
        "subtopic": [
                "Quotient Rule"
        ],
        "img": false,
        "question": "A curve has the equation:<br>$$y = \\dfrac{ -3x^2 - 12x }{ (x+2)^2 }, \\quad x \\ne -2$$<br><strong>(a)</strong> Show that $\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{A}{ (x+2)^n }$, where $A$ and $n$ are constants to be found.<br><strong>(b)</strong> Hence, deduce the range of values for x for which $\\dfrac{\\text{d}y}{\\text{d}x} > 0$.",
        "steps": [
                "<strong>Part (a):</strong> Let $u = -3x^2 - 12x$ and $v = (x+2)^2$.",
                "Differentiating both terms with respect to x gives:<br>\\begin{aligned} u' &= -6x - 12 \\cr &= -6(x+2) \\end{aligned}<br>$$v' = 2(x+2)$$",
                "Using the <strong>Quotient Rule</strong>, $\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{ u'v - uv' }{ v^2 }$:<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{ (-6x-12)(x+2)^2}{ (x+2)^4 } \\cr &\\quad - \\dfrac{(-3x^2-12x) \\cdot 2(x+2) }{ (x+2)^4 }\\end{aligned}",
                "We can factorise out a common term of (x+2) from the numerator to simplify:<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{ (x+2) [ (-6x-12)(x+2)]}{ (x+2)^4 }\\cr &\\quad - \\dfrac{ ( x+2 )[ 2(-3x^2-12x) ] }{ (x+2)^4 }\\end{aligned} <br> \\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{ (-6x-12)(x+2)}{ (x+2)^3 }\\cr & \\quad-\\dfrac{ 2(-3x^2-12x) }{ (x+2)^3 }\\end{aligned}",
                "Expanding and simplifying the remaining terms in the numerator:<br>\\begin{aligned}(-6x-12)(x+2)\\cr \\quad= -6x^2 - 24x - 24\\end{aligned}<br>$$2(-3x^2-12x) = -6x^2 - 24x$$<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{ (-6x^2 - 24x - 24) }{ (x+2)^3 }\\cr & \\quad-\\dfrac{ (-6x^2 - 24x) }{ (x+2)^3 }\\end{aligned}<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{-24}{ (x+2)^3 }$$<br>Therefore, the constants are $A = -24$ and $n = 3$.",
                "<strong>Part (b):</strong> For $\\dfrac{\\text{d}y}{\\text{d}x} > 0$:<br>$$\\dfrac{-24}{ (x+2)^3 } > 0$$",
                "Since the numerator is a negative constant ($-24 < 0$), the fraction will only be positive when the denominator is negative:<br>\\begin{aligned}(x+2)^3 &< 0 \\cr\\implies x + 2 &< 0 \\cr\\implies x &< -2\\end{aligned}",
                "Final Answer: <strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{-24}{ (x+2)^3 }$$ <strong>(b)</strong> $$x < -2$$"
        ],
        "pi_options": [
                {
                        "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{ -24 }{ (x+2)^3 }$$ <strong>(b)</strong> $$x > -2$$",
                        "feedback": "You probably made a sign error in Part (b). Because your numerator -24 is negative, the fraction is only positive when the denominator is negative (since a negative divided by a negative yields a positive quotient). Therefore, $(x+2)^3 < 0$, which yields $x < -2$."
                },
                {
                        "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{24}{ (x+2)^3 }$$ <strong>(b)</strong> $$x > -2$$",
                        "feedback": "Check your differentiation of $u = -3x^2 - 12x$. The derivative is $u' = -6x - 12$, not +6x + 12. This sign error changed the sign of your constant A from negative to positive."
                },
                {
                        "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{ -12 }{ (x+2)^3 }$$ <strong>(b)</strong> $$x < -2$$",
                        "feedback": "Check your expansion of (-6x-12)(x+2). The constant term is $-12 \\times 2 = -24$. Make sure you multiply all components of your binomial brackets correctly."
                }
        ],
        "bradley_insight": {
                "type": "caution",
                "title": "The Head Teacher's Eye: Positive Fraction Logic",
                "content": "For a fraction to be strictly positive ($> 0$), both the numerator and the denominator must have the same sign. If you find your numerator is negative (like -24), your denominator must also be negative. Remembering this basic algebraic sign rule prevents simple mistakes in part (b)."
        }
},
        {
        "id": "004015",
        "board": "Pearson Edexcel",
        "branch": "Pure",
        "level": "A",
        "major_area": "Differentiation",
        "topic": "Differentiation",
        "subtopic": [
                "Quotient Rule"
        ],
        "img": false,
        "question": "A curve has the equation:<br>$$y = \\dfrac{ 4x^2 + 8x }{ (x+1)^2 }, \\quad x \\ne -1$$<br><strong>(a)</strong> Show that $\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{A}{ (x+1)^n }$, where $A$ and $n$ are constants to be found.<br><strong>(b)</strong> Hence, deduce the range of values for x for which $\\dfrac{\\text{d}y}{\\text{d}x} < 0$.",
        "steps": [
                "<strong>Part (a):</strong> Let $u = 4x^2 + 8x$ and $v = (x+1)^2$.",
                "Differentiating both terms with respect to x gives:<br>\\begin{aligned} u' &= 8x + 8 \\cr &= 8(x+1) \\end{aligned}<br>$$v' = 2(x+1)$$",
                "Using the <strong>Quotient Rule</strong>, $\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{ u'v - uv' }{ v^2 }$:<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{ (8x+8)(x+1)^2}{ (x+1)^4 } \\cr &\\quad - \\dfrac{(4x^2+8x) \\cdot 2(x+1) }{ (x+1)^4 }\\end{aligned}",
                "We can factorise out a common term of (x+1) from the numerator to simplify:<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{ (x+1) [ (8x+8)(x+1)]}{ (x+1)^4 }\\cr &\\quad - \\dfrac{ ( x+1 )[ 2(4x^2+8x) ] }{ (x+1)^4 }\\end{aligned} <br> \\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{ (8x+8)(x+1)}{ (x+1)^3 }\\cr & \\quad-\\dfrac{ 2(4x^2+8x) }{ (x+1)^3 }\\end{aligned}",
                "Expanding and simplifying the remaining terms in the numerator:<br>\\begin{aligned}(8x+8)(x+1)\\cr \\quad= 8x^2 + 16x + 8\\end{aligned}<br>$$2(4x^2+8x) = 8x^2 + 16x$$<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{ (8x^2 + 16x + 8) }{ (x+1)^3 }\\cr & \\quad-\\dfrac{ (8x^2 + 16x) }{ (x+1)^3 }\\end{aligned}<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{8}{ (x+1)^3 }$$<br>Therefore, the constants are $A = 8$ and $n = 3$.",
                "<strong>Part (b):</strong> For $\\dfrac{\\text{d}y}{\\text{d}x} < 0$:<br>$$\\dfrac{8}{ (x+1)^3 } < 0$$",
                "Since the numerator is a positive constant ($8 > 0$), the fraction will only be negative when the denominator is negative:<br>\\begin{aligned}(x+1)^3 &< 0 \\cr\\implies x + 1 &< 0 \\cr\\implies x &< -1\\end{aligned}",
                "Final Answer: <strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{8}{ (x+1)^3 }$$ <strong>(b)</strong> $$x < -1$$"
        ],
        "pi_options": [
                {
                        "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{8}{ (x+1)^3 }$$ <strong>(b)</strong> $$x > -1$$",
                        "feedback": "You probably made an inequality boundary error in Part (b). For the fraction to be negative ($< 0$), the denominator $(x+1)^3$ must be negative. Since an odd power preserves the negative sign, this requires $x + 1 < 0$, which yields $x < -1$."
                },
                {
                        "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{ 8(2x+1) }{ (x+1)^3 }$$ <strong>(b)</strong> $$x < -1$$",
                        "feedback": "Check your expanding and term cancellations. When subtracting $2(4x^2 + 8x)$ from your left term expansion ($8x^2 + 16x + 8$), both the $8x^2$ and 16x cancel out completely, leaving only the constant 8."
                },
                {
                        "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{8}{ (x+1)^4 }$$ <strong>(b)</strong> $$x < -1$$",
                        "feedback": "You forgot to decrease the power of the denominator when cancelling out the common factor of (x + 1) from your numerator. The denominator should be $(x+1)^3$, not $(x+1)^4$."
                }
        ],
        "bradley_insight": {
                "type": "pro-tip",
                "title": "The Head Teacher's Eye: Spotting algebraic cancellations",
                "content": "In problems like this, the quadratic and linear terms in your numerator will always cancel out perfectly during expansion, leaving only the constant integer A. If you find yourself left with an x or $x^2$ term in the numerator, go back and check your expansion signs immediately!"
        }
},
           {
                "id": "004016",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and Series",
                "topic": "Binomial Expansion",
                "subtopic": [
                        "Functions and Mappings",
                        "Numerical Methods"
                ],
                "img": false,
                "question": "A function is defined by:<br>$$f(x) = \\dfrac{1}{ \\sqrt{9 - 2x }}.$$<br><strong>(a)</strong> Find the first three terms, in ascending powers of $x$, of the binomial expansion of $f(x)$, giving each coefficient in its simplest form.<br>The expansion can be used to approximate $\\sqrt{3}$. Possible values of $x$ that could be substituted into this expansion are:<br>$$x = -6, \\quad x = 3, \\quad x = -\\tfrac{1}{2}.$$<br><strong>(b)(i)</strong> Without evaluating your expansion, state, giving a reason, which of these values of $x$ should not be used.<br><strong>(b)(ii)</strong> State, giving a reason, which of these values of $x$ would lead to an approximation of $\\sqrt{3}$.",
                "steps": [
                        "<strong>Part (a):</strong> Rewrite f(x) in binomial form by factorising the constant inside the square root:<br>\\begin{aligned}\nf(x) &= (9 - 2x)^{ -1/2 } \\cr\n&= \\left[9\\left(1 - \\tfrac{2}{9}x\\right)\\right]^{ -1/2 } \\cr\n&= 9^{ -1/2 }\\left(1 - \\tfrac{2}{9}x\\right)^{ -1/2 } \\cr\n&= \\tfrac{1}{3}\\left(1 - \\tfrac{2}{9}x\\right)^{ -1/2 }.\n\\end{aligned}",
                        "Use the binomial expansion $(1 + y)^{ -1/2 } = 1 - \\tfrac{1}{2}y + \\tfrac{3}{8}y^2 + \\dots$ with $y = -\\tfrac{2}{9}x$:<br>\\begin{aligned} &\\left(1 - \\tfrac{2}{9}x\\right)^{-1/2} \\cr &= 1 - \\tfrac{1}{2}\\left(-\\tfrac{2}{9}x\\right)  + \\tfrac{3}{8}\\left(-\\tfrac{2}{9}x\\right)^2 + \\dots \\cr &= 1 + \\tfrac{1}{9}x + \\tfrac{1}{54}x^2 + \\dots \\end{aligned}",
                        "Multiply by the factor $\\tfrac{1}{3}$:<br>\\begin{aligned}f(x) &\\approx \\tfrac{1}{3}\\left(1 + \\tfrac{1}{9}x + \\tfrac{1}{54}x^2\\right)\\cr &= \\tfrac{1}{3} + \\tfrac{1}{27}x + \\tfrac{1}{162}x^2.\\end{aligned}<br>So the first three terms are $$\\dfrac{1}{3} + \\dfrac{1}{27}x + \\dfrac{1}{162}x^2.$$",
                        "<strong>Part (b)(i):</strong> The binomial expansion for $(1 - \\tfrac{2}{9}x)^{ -1/2 }$ is valid when $$\\left|\\tfrac{2}{9}x\\right| < 1 \\implies |x| < 4.5.$$",
                        "Among the given values, $x = -6$ has $|-6| = 6 > 4.5$, so it lies outside the interval of validity. Therefore, $x = -6$ should not be used.",
                        "<strong>Part (b)(ii):</strong> To approximate $\\sqrt{3}$, we need \\begin{aligned}\nf(x) &= \\dfrac{1}{ \\sqrt{9 - 2x }} \\cr\n&= \\dfrac{1}{\\sqrt{3}}.\n\\end{aligned} This occurs when $9 - 2x = 3$, so $2x = 6$ and $x = 3$. Thus $x = 3$ is the value that leads to an approximation of $\\sqrt{3}$.",
                        "Final Answer: <strong>(a)</strong> $$f(x) \\approx \\dfrac{1}{3} + \\dfrac{1}{27}x + \\dfrac{1}{162}x^2.$$ <strong>(b)(i)</strong> $x = -6$ should not be used. <strong>(b)(ii)</strong> $x = 3$ gives an approximation of $\\sqrt{3}$."
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$f(x) \\approx \\dfrac{1}{3} + \\dfrac{1}{27}x + \\dfrac{1}{162}x^2.$$ <strong>(b)(i)</strong> $x = 3$ <strong>(b)(ii)</strong> $x = -\\tfrac{1}{2}$",
                                "feedback": "In part (b)(i), the restriction $|x| < 4.5$ rules out $x = -6$, not $x = 3$. In part (b)(ii), $x = 3$ is the value that makes $9 - 2x = 3$, so it is the one that approximates $\\sqrt{3}$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$f(x) \\approx \\dfrac{1}{3} + \\dfrac{2}{27}x + \\dfrac{1}{162}x^2.$$ <strong>(b)(i)</strong> $x = -6$ <strong>(b)(ii)</strong> $x = 3$",
                                "feedback": "Your linear coefficient is incorrect. When expanding $(1 - \\tfrac{2}{9}x)^{ -1/2 }$, the first-order term is $+\\tfrac{1}{9}x$, which becomes $+\\tfrac{1}{27}x$ after multiplying by $\\tfrac{1}{3}$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$f(x) \\approx \\dfrac{1}{3} + \\dfrac{1}{27}x + \\dfrac{1}{81}x^2.$$ <strong>(b)(i)</strong> $x = -6$ <strong>(b)(ii)</strong> $x = 3$",
                                "feedback": "The quadratic coefficient is too large. Carefully square $-\\tfrac{2}{9}x$ and multiply by $\\tfrac{3}{8}$, then apply the factor $\\tfrac{1}{3}$ to obtain $\\tfrac{1}{162}x^2$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Interval of validity versus target value",
                        "content": "Two separate ideas are at work here: the interval of validity, which controls whether the binomial series converges, and the choice of $x$ that actually produces the number you want to approximate. First check |x| against the convergence condition, then solve the algebraic equation that links your function value to the target number."
                }
        },
        {
                "id": "004017",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and Series",
                "topic": "Binomial Expansion",
                "subtopic": [
                        "Functions and Mappings",
                        "Numerical Methods"
                ],
                "img": false,
                "question": "Consider the function:<br>$$g(x) = (5 - x)^{ -1/2 }.$$<br><strong>(a)</strong> Rewrite g(x) in the form $k(1 + mx)^n$ and hence find the first three terms of its binomial expansion in ascending powers of $x$.<br>This expansion can be used to approximate $\\dfrac{1}{\\sqrt{5.2}}$. Possible values of $x$ that could be substituted are:<br>$$x = -0.2, \\quad x = 1, \\quad x = -6.$$<br><strong>(b)(i)</strong> Without evaluating your expansion, state, giving a reason, which of these values of $x$ is outside the interval of validity.<br><strong>(b)(ii)</strong> State, giving a reason, which of these values of $x$ would lead to the most accurate approximation to $\\dfrac{1}{\\sqrt{5.2}}$.",
                "steps": [
                        "<strong>Part (a):</strong> Factorise the constant from the bracket:<br>\\begin{aligned}\ng(x) &= (5 - x)^{ -1/2 } \\cr\n&= \\left[5\\left(1 - \\tfrac{1}{5}x\\right)\\right]^{ -1/2 } \\cr\n&= 5^{ -1/2 }\\left(1 - \\tfrac{1}{5}x\\right)^{ -1/2 } \\cr\n&= \\dfrac{1}{\\sqrt{5}}\\left(1 - \\tfrac{1}{5}x\\right)^{ -1/2 }.\n\\end{aligned}",
                        "Use the binomial expansion $(1 + y)^{ -1/2 } = 1 - \\tfrac{1}{2}y + \\tfrac{3}{8}y^2 + \\dots$ with $y = -\\tfrac{1}{5}x$:<br>\\begin{aligned} &\\left(1 - \\tfrac{1}{5}x\\right)^{ -1/2 }\\cr &= 1 - \\tfrac{1}{2}\\left(-\\tfrac{1}{5}x\\right) + \\tfrac{3}{8}\\left(-\\tfrac{1}{5}x\\right)^2 + \\dots\\end{aligned}<br>$$= 1 + \\tfrac{1}{10}x + \\tfrac{3}{200}x^2 + \\dots$$",
                        "Multiply by $\\dfrac{1}{\\sqrt{5}} = \\dfrac{\\sqrt{5}}{5}$:<br>\\begin{aligned}g(x) &\\approx \\dfrac{\\sqrt{5}}{5}\\left(1 + \\tfrac{1}{10}x + \\tfrac{3}{200}x^2\\right)\\cr &= \\dfrac{\\sqrt{5}}{5} + \\dfrac{\\sqrt{5}}{50}x + \\dfrac{3\\sqrt{5}}{1000}x^2.\\end{aligned}",
                        "<strong>Part (b)(i):</strong> The binomial expansion for $(1 - \\tfrac{1}{5}x)^{ -1/2 }$ is valid when $$\\left|\\tfrac{1}{5}x\\right| < 1 \\implies |x| < 5.$$",
                        "Among the given values, $x = -6$ has $|-6| = 6 > 5$, so it lies outside the interval of validity. Therefore, $x = -6$ is not valid for the expansion.",
                        "<strong>Part (b)(ii):</strong> To approximate $\\dfrac{1}{\\sqrt{5.2}}$, we need \\begin{aligned}\ng(x) &= \\dfrac{1}{ \\sqrt{5 - x }} \\cr\n&= \\dfrac{1}{\\sqrt{5.2}}.\n\\end{aligned} This occurs when $5 - x = 5.2$, so $x = -0.2$. Also, |-0.2| is small, so the series converges rapidly. Thus $x = -0.2$ gives the most accurate approximation.",
                        "Final Answer: <strong>(a)</strong> $$g(x) \\approx \\dfrac{\\sqrt{5}}{5} + \\dfrac{\\sqrt{5}}{50}x + \\dfrac{3\\sqrt{5}}{1000}x^2.$$ <strong>(b)(i)</strong> $x = -6$ is outside the interval of validity. <strong>(b)(ii)</strong> $x = -0.2$ gives the most accurate approximation to $\\dfrac{1}{\\sqrt{5.2}}$."
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$g(x) \\approx \\dfrac{\\sqrt{5}}{5} + \\dfrac{\\sqrt{5}}{50}x + \\dfrac{3\\sqrt{5}}{1000}x^2.$$ <strong>(b)(i)</strong> $x = 1$ <strong>(b)(ii)</strong> $x = 1$",
                                "feedback": "For the interval of validity, the condition is $|x| < 5$, so $x = 1$ is valid but $x = -6$ is not. For the approximation, $x = -0.2$ is the value that actually produces $\\dfrac{1}{\\sqrt{5.2}}$ and is closest to zero."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$g(x) \\approx \\dfrac{\\sqrt{5}}{5} + \\dfrac{\\sqrt{5}}{25}x + \\dfrac{3\\sqrt{5}}{1000}x^2.$$ <strong>(b)(i)</strong> $x = -6$ <strong>(b)(ii)</strong> $x = -0.2$",
                                "feedback": "Your linear coefficient is too large. The first-order term from $(1 - \\tfrac{1}{5}x)^{ -1/2 }$ is $+\\tfrac{1}{10}x$, which becomes $\\dfrac{\\sqrt{5}}{50}x$ after multiplying by $\\dfrac{\\sqrt{5}}{5}$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$g(x) \\approx \\dfrac{\\sqrt{5}}{5} + \\dfrac{\\sqrt{5}}{50}x + \\dfrac{3\\sqrt{5}}{500}x^2.$$ <strong>(b)(i)</strong> $x = -6$ <strong>(b)(ii)</strong> $x = -0.2$",
                                "feedback": "The quadratic coefficient is incorrect. Carefully square $-\\tfrac{1}{5}x$, multiply by $\\tfrac{3}{8}$, and then apply the factor $\\dfrac{\\sqrt{5}}{5}$ to obtain $\\dfrac{3\\sqrt{5}}{1000}x^2$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Matching the function to the target number",
                        "content": "When a question links a binomial expansion to a numerical approximation, always solve the simple equation that makes the inside of the bracket equal to the target value. Only then worry about which of the candidate x values lies closest to zero for the best accuracy."
                }
        },
        {
                "id": "004018",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and Series",
                "topic": "Binomial Expansion",
                "subtopic": [
                        "Functions and Mappings",
                        "Numerical Methods"
                ],
                "img": false,
                "question": "A function is defined by:<br>$$h(x) = \\dfrac{1}{ (3 + x)^{1/2 }}.$$<br><strong>(a)</strong> Express h(x) in the form $A(1 + Bx)^n$ and find the first three terms of its binomial expansion in ascending powers of $x$.<br>This expansion can be used to approximate $\\dfrac{1}{\\sqrt{2.7}}$. Possible values of $x$ are:<br>$$x = -0.3, \\quad x = 3, \\quad x = -6.$$<br><strong>(b)(i)</strong> Without evaluating your expansion, state, giving a reason, which of these values of $x$ should not be used.<br><strong>(b)(ii)</strong> State, giving a reason, which of these values of $x$ would lead to the most accurate approximation to $\\dfrac{1}{\\sqrt{2.7}}$.",
                "steps": [
                        "<strong>Part (a):</strong> Rewrite h(x) in binomial form by factorising the constant:<br>\\begin{aligned}\nh(x) &= (3 + x)^{ -1/2 } \\cr\n&= \\left[3\\left(1 + \\tfrac{1}{3}x\\right)\\right]^{ -1/2 } \\cr\n&= 3^{ -1/2 }\\left(1 + \\tfrac{1}{3}x\\right)^{ -1/2 } \\cr\n&= \\dfrac{1}{\\sqrt{3}}\\left(1 + \\tfrac{1}{3}x\\right)^{ -1/2 }.\n\\end{aligned}",
                        "Use the binomial expansion $(1 + y)^{ -1/2 } = 1 - \\tfrac{1}{2}y + \\tfrac{3}{8}y^2 + \\dots$ with $y = \\tfrac{1}{3}x$:<br>\\begin{aligned} &\\left(1 + \\tfrac{1}{3}x\\right)^{ -1/2 }\\cr&= 1 - \\tfrac{1}{2}\\left(\\tfrac{1}{3}x\\right) + \\tfrac{3}{8}\\left(\\tfrac{1}{3}x\\right)^2 + \\dots\\end{aligned}<br>$$= 1 - \\tfrac{1}{6}x + \\tfrac{1}{24}x^2 + \\dots$$",
                        "Multiply by $\\dfrac{1}{\\sqrt{3}} = \\dfrac{\\sqrt{3}}{3}$:<br>\\begin{aligned}h(x) &\\approx \\dfrac{\\sqrt{3}}{3}\\left(1 - \\tfrac{1}{6}x + \\tfrac{1}{24}x^2\\right)\\cr &= \\dfrac{\\sqrt{3}}{3} - \\dfrac{\\sqrt{3}}{18}x + \\dfrac{\\sqrt{3}}{72}x^2.\\end{aligned}",
                        "<strong>Part (b)(i):</strong> The binomial expansion for $(1 + \\tfrac{1}{3}x)^{ -1/2 }$ is valid when $$\\left|\\tfrac{1}{3}x\\right| < 1 \\implies |x| < 3.$$",
                        "Among the given values, $x = -6$ has $|-6| = 6 > 3$, so it lies outside the interval of validity. The boundary value $x = 3$ also does not satisfy $|x| < 3$. Thus $x = -6$ (and $x = 3$) should not be used.",
                        "<strong>Part (b)(ii):</strong> To approximate $\\dfrac{1}{\\sqrt{2.7}}$, we need \\begin{aligned}\nh(x) &= \\dfrac{1}{ \\sqrt{3 + x }} \\cr\n&= \\dfrac{1}{\\sqrt{2.7}}.\n\\end{aligned} This occurs when $3 + x = 2.7$, so $x = -0.3$. Also, |-0.3| is small, so the series converges quickly. Therefore, $x = -0.3$ gives the most accurate approximation.",
                        "Final Answer: <strong>(a)</strong> $$h(x) \\approx \\dfrac{\\sqrt{3}}{3} - \\dfrac{\\sqrt{3}}{18}x + \\dfrac{\\sqrt{3}}{72}x^2.$$ <strong>(b)(i)</strong> $x = -6$ is outside the interval of validity. <strong>(b)(ii)</strong> $x = -0.3$ gives the most accurate approximation to $\\dfrac{1}{\\sqrt{2.7}}$."
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$h(x) \\approx \\dfrac{\\sqrt{3}}{3} - \\dfrac{\\sqrt{3}}{18}x + \\dfrac{\\sqrt{3}}{72}x^2.$$ <strong>(b)(i)</strong> $x = 3$ <strong>(b)(ii)</strong> $x = 3$",
                                "feedback": "For the interval of validity, the strict inequality $|x| < 3$ rules out $x = -6$ and also excludes the boundary $x = 3$. For the approximation, $x = -0.3$ is the value that actually produces $\\dfrac{1}{\\sqrt{2.7}}$ and is closest to zero."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$h(x) \\approx \\dfrac{\\sqrt{3}}{3} - \\dfrac{\\sqrt{3}}{9}x + \\dfrac{\\sqrt{3}}{72}x^2.$$ <strong>(b)(i)</strong> $x = -6$ <strong>(b)(ii)</strong> $x = -0.3$",
                                "feedback": "Your linear coefficient is too large in magnitude. The first-order term from $(1 + \\tfrac{1}{3}x)^{ -1/2 }$ is $-\\tfrac{1}{6}x$, which becomes $-\\dfrac{\\sqrt{3}}{18}x$ after multiplying by $\\dfrac{\\sqrt{3}}{3}$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$h(x) \\approx \\dfrac{\\sqrt{3}}{3} - \\dfrac{\\sqrt{3}}{18}x + \\dfrac{\\sqrt{3}}{36}x^2.$$ <strong>(b)(i)</strong> $x = -6$ <strong>(b)(ii)</strong> $x = -0.3$",
                                "feedback": "The quadratic coefficient is incorrect. Carefully square $\\tfrac{1}{3}x$, multiply by $\\tfrac{3}{8}$, and then apply the factor $\\dfrac{\\sqrt{3}}{3}$ to obtain $\\dfrac{\\sqrt{3}}{72}x^2$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Boundary points and strict inequalities",
                        "content": "When you see a condition like $|x| < a$, remember that the endpoints $x = \\pm a$ are excluded. It is common for exam questions to include a boundary value as a tempting but invalid option, so always check whether the inequality is strict or not."
                }
        },
        {
                "id": "004019",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and Series",
                "topic": "Binomial Expansion",
                "subtopic": [
                        "Functions and Mappings",
                        "Numerical Methods"
                ],
                "img": false,
                "question": "A function is defined by:<br>$$y = (4 + 3x)^{ -1/2 }.$$<br><strong>(a)</strong> Rewrite y in the form $C(1 + Dx)^n$ and hence find the first three terms of the binomial expansion in ascending powers of $x$.<br>This expansion can be used to approximate $\\dfrac{1}{\\sqrt{3.1}}$. Possible values of $x$ are:<br>$$x = -0.3, \\quad x = 1, \\quad x = -2.$$<br><strong>(b)(i)</strong> Without evaluating your expansion, state, giving a reason, which of these values of $x$ is invalid for the expansion.<br><strong>(b)(ii)</strong> State, giving a reason, which of these values of $x$ would lead to the most accurate approximation to $\\dfrac{1}{\\sqrt{3.1}}$.",
                "steps": [
                        "<strong>Part (a):</strong> Factorise the constant from the bracket:<br>\\begin{aligned}\ny &= (4 + 3x)^{ -1/2 } \\cr\n&= \\left[4\\left(1 + \\tfrac{3}{4}x\\right)\\right]^{ -1/2 } \\cr\n&= 4^{ -1/2 }\\left(1 + \\tfrac{3}{4}x\\right)^{ -1/2 } \\cr\n&= \\dfrac{1}{2}\\left(1 + \\tfrac{3}{4}x\\right)^{ -1/2 }.\n\\end{aligned}",
                        "Use the binomial expansion $(1 + y)^{ -1/2 } = 1 - \\tfrac{1}{2}y + \\tfrac{3}{8}y^2 + \\dots$ with $y = \\tfrac{3}{4}x$:<br>\\begin{aligned} &\\left(1 + \\tfrac{3}{4}x\\right)^{ -1/2 }\\cr &= 1 - \\tfrac{1}{2}\\left(\\tfrac{3}{4}x\\right) + \\tfrac{3}{8}\\left(\\tfrac{3}{4}x\\right)^2 + \\dots\\end{aligned}<br>$$= 1 - \\tfrac{3}{8}x + \\tfrac{27}{128}x^2 + \\dots$$",
                        "Multiply by $\\dfrac{1}{2}$:<br>\\begin{aligned}y &\\approx \\dfrac{1}{2}\\left(1 - \\tfrac{3}{8}x + \\tfrac{27}{128}x^2\\right)\\cr &= \\dfrac{1}{2} - \\dfrac{3}{16}x + \\dfrac{27}{256}x^2.\\end{aligned}",
                        "<strong>Part (b)(i):</strong> The binomial expansion for $(1 + \\tfrac{3}{4}x)^{ -1/2 }$ is valid when $$\\left|\\tfrac{3}{4}x\\right| < 1 \\implies |x| < \\dfrac{4}{3}.$$",
                        "Among the given values, $x = -2$ has $|-2| = 2 > \\dfrac{4}{3}$, so it lies outside the interval of validity. Therefore, $x = -2$ is invalid for the expansion.",
                        "<strong>Part (b)(ii):</strong> To approximate $\\dfrac{1}{\\sqrt{3.1}}$, we need \\begin{aligned}\ny &= \\dfrac{1}{ \\sqrt{4 + 3x }} \\cr\n&= \\dfrac{1}{\\sqrt{3.1}}.\n\\end{aligned} This occurs when $4 + 3x = 3.1$, so $3x = -0.9$ and $x = -0.3$. Also, |-0.3| is smaller than |1|, so the series converges more rapidly. Thus $x = -0.3$ gives the most accurate approximation.",
                        "Final Answer: <strong>(a)</strong> $$y \\approx \\dfrac{1}{2} - \\dfrac{3}{16}x + \\dfrac{27}{256}x^2.$$ <strong>(b)(i)</strong> $x = -2$ is invalid. <strong>(b)(ii)</strong> $x = -0.3$ gives the most accurate approximation to $\\dfrac{1}{\\sqrt{3.1}}$."
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$y \\approx \\dfrac{1}{2} - \\dfrac{3}{16}x + \\dfrac{27}{256}x^2.$$ <strong>(b)(i)</strong> $x = 1$ <strong>(b)(ii)</strong> $x = 1$",
                                "feedback": "For the interval of validity, the condition $|x| < \\dfrac{4}{3}$ excludes $x = -2$, not $x = 1$. For the approximation, $x = -0.3$ is the value that actually produces $\\dfrac{1}{\\sqrt{3.1}}$ and is closer to zero than $x = 1$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$y \\approx \\dfrac{1}{2} - \\dfrac{3}{8}x + \\dfrac{27}{256}x^2.$$ <strong>(b)(i)</strong> $x = -2$ <strong>(b)(ii)</strong> $x = -0.3$",
                                "feedback": "Your linear coefficient is too large in magnitude. The first-order term from $(1 + \\tfrac{3}{4}x)^{ -1/2 }$ is $-\\tfrac{3}{8}x$, which becomes $-\\dfrac{3}{16}x$ after multiplying by $\\dfrac{1}{2}$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$y \\approx \\dfrac{1}{2} - \\dfrac{3}{16}x + \\dfrac{27}{128}x^2.$$ <strong>(b)(i)</strong> $x = -2$ <strong>(b)(ii)</strong> $x = -0.3$",
                                "feedback": "The quadratic coefficient is incorrect. Carefully square $\\tfrac{3}{4}x$, multiply by $\\tfrac{3}{8}$, and then apply the factor $\\dfrac{1}{2}$ to obtain $\\dfrac{27}{256}x^2$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Scaling before expanding",
                        "content": "Always factor out the constant from the bracket before applying the binomial expansion. This keeps the expression in the clean form $(1 + kx)^n$ and makes it much easier to see both the interval of validity and the structure of the coefficients."
                }
        },
        {
                "id": "004020",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and Series",
                "topic": "Binomial Expansion",
                "subtopic": [
                        "Functions and Mappings",
                        "Numerical Methods"
                ],
                "img": false,
                "question": "A function is defined by:<br>$$F(x) = \\dfrac{1}{ \\sqrt{16 - x }}.$$<br><strong>(a)</strong> Find the first three terms of the binomial expansion of $f(x)$ in ascending powers of $x$.<br>This expansion can be used to approximate $\\dfrac{1}{\\sqrt{15.5}}$. Possible values of $x$ are:<br>$$x = 0.5, \\quad x = -18, \\quad x = 3.$$<br><strong>(b)(i)</strong> Without evaluating your expansion, state, giving a reason, which of these values of $x$ should not be used.<br><strong>(b)(ii)</strong> State, giving a reason, which of these values of $x$ would lead to the most accurate approximation to $\\dfrac{1}{\\sqrt{15.5}}$.",
                "steps": [
                        "<strong>Part (a):</strong> Rewrite F(x) in binomial form by factorising the constant inside the square root:<br>\\begin{aligned}\nF(x) &= (16 - x)^{ -1/2 } \\cr\n&= \\left[16\\left(1 - \\tfrac{1}{16}x\\right)\\right]^{ -1/2 } \\cr\n&= 16^{ -1/2 }\\left(1 - \\tfrac{1}{16}x\\right)^{ -1/2 } \\cr\n&= \\dfrac{1}{4}\\left(1 - \\tfrac{1}{16}x\\right)^{ -1/2 }.\n\\end{aligned}",
                        "Use the binomial expansion $(1 + y)^{ -1/2 } = 1 - \\tfrac{1}{2}y + \\tfrac{3}{8}y^2 + \\dots$ with $y = -\\tfrac{1}{16}x$:<br>\\begin{aligned}&\\left(1 - \\tfrac{1}{16}x\\right)^{ -1/2 }\\cr &= 1 - \\tfrac{1}{2}\\left(-\\tfrac{1}{16}x\\right) + \\tfrac{3}{8}\\left(-\\tfrac{1}{16}x\\right)^2 + \\dots\\end{aligned}<br>$$= 1 + \\tfrac{1}{32}x + \\tfrac{3}{2048}x^2 + \\dots$$",
                        "Multiply by $\\dfrac{1}{4}$:<br>\\begin{aligned}F(x) &\\approx \\dfrac{1}{4}\\left(1 + \\tfrac{1}{32}x + \\tfrac{3}{2048}x^2\\right)\\cr &= \\dfrac{1}{4} + \\dfrac{1}{128}x + \\dfrac{3}{8192}x^2.\\end{aligned}",
                        "<strong>Part (b)(i):</strong> The binomial expansion for $(1 - \\tfrac{1}{16}x)^{ -1/2 }$ is valid when $$\\left|\\tfrac{1}{16}x\\right| < 1 \\implies |x| < 16.$$",
                        "Among the given values, $x = -18$ has $|-18| = 18 > 16$, so it lies outside the interval of validity. Therefore, $x = -18$ should not be used.",
                        "<strong>Part (b)(ii):</strong> To approximate $\\dfrac{1}{\\sqrt{15.5}}$, we need \\begin{aligned}\nF(x) &= \\dfrac{1}{ \\sqrt{16 - x }} \\cr\n&= \\dfrac{1}{\\sqrt{15.5}}.\n\\end{aligned} This occurs when $16 - x = 15.5$, so $x = 0.5$. Also, |0.5| is smaller than |3|, so the series converges more rapidly. Thus $x = 0.5$ gives the most accurate approximation.",
                        "Final Answer: <strong>(a)</strong> $$F(x) \\approx \\dfrac{1}{4} + \\dfrac{1}{128}x + \\dfrac{3}{8192}x^2.$$ <strong>(b)(i)</strong> $x = -18$ should not be used. <strong>(b)(ii)</strong> $x = 0.5$ gives the most accurate approximation to $\\dfrac{1}{\\sqrt{15.5}}$."
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$F(x) \\approx \\dfrac{1}{4} + \\dfrac{1}{128}x + \\dfrac{3}{8192}x^2.$$ <strong>(b)(i)</strong> $x = 3$ <strong>(b)(ii)</strong> $x = 3$",
                                "feedback": "For the interval of validity, the condition $|x| < 16$ excludes $x = -18$, not $x = 3$. For the approximation, $x = 0.5$ is the value that actually produces $\\dfrac{1}{\\sqrt{15.5}}$ and is closer to zero than $x = 3$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$F(x) \\approx \\dfrac{1}{4} + \\dfrac{1}{64}x + \\dfrac{3}{8192}x^2.$$ <strong>(b)(i)</strong> $x = -18$ <strong>(b)(ii)</strong> $x = 0.5$",
                                "feedback": "Your linear coefficient is too large. The first-order term from $(1 - \\tfrac{1}{16}x)^{ -1/2 }$ is $+\\tfrac{1}{32}x$, which becomes $\\dfrac{1}{128}x$ after multiplying by $\\dfrac{1}{4}$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$F(x) \\approx \\dfrac{1}{4} + \\dfrac{1}{128}x + \\dfrac{3}{4096}x^2.$$ <strong>(b)(i)</strong> $x = -18$ <strong>(b)(ii)</strong> $x = 0.5$",
                                "feedback": "The quadratic coefficient is incorrect. Carefully square $-\\tfrac{1}{16}x$, multiply by $\\tfrac{3}{8}$, and then apply the factor $\\dfrac{1}{4}$ to obtain $\\dfrac{3}{8192}x^2$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Tiny x means tiny error",
                        "content": "Once you have the binomial form $(1 + kx)^n$, the size of kx controls how quickly the series converges. For a fixed number of terms, the smaller |kx| is, the smaller the neglected terms will be, and the more accurate your approximation becomes."
                }
        },
        {
                "id": "004021",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Coordinate Geometry",
                "subtopic": [
                        "Graph Transformations",
                        "Quadratics"
                ],
                "img": false,
                "question": "$$f(x) = 3x^2 + 6x + 8\\text{, }  x \\in \\mathbb{R}$$<br><strong>(a)</strong> Write f(x) in the form $a(x + b)^2 + c$, where a, b, and c are integers to be found.<br><strong>(b)</strong> Sketch the curve with equation $y = f(x)$, showing any points of intersection with the coordinate axes and the coordinates of the turning point.<br><strong>(c)(i)</strong> Describe fully the transformation that maps the curve with equation $y = f(x)$ onto the curve with equation $y = g(x)$ where:<br>$$g(x) = 3(x-2)^2 + 6x - 7\\text{, } x \\in \\mathbb{R}$$<br><strong>(c)(ii)</strong> Find the range of the function:<br>$$h(x) = \\dfrac{15}{ 3x^2 + 6x + 8 }\\text{, } x \\in \\mathbb{R}$$",
                "steps": [
                        "<strong>Part (a):</strong> We complete the square by first factorising out the 3 from the quadratic and linear terms:<br>$$f(x) = 3(x^2 + 2x) + 8$$<br>$$f(x) = 3\\left[(x+1)^2 - 1^2\\right] + 8$$<br>$$f(x) = 3(x+1)^2 - 3 + 8$$<br>$$f(x) = 3(x+1)^2 + 5$$<br>Therefore, the constants are $a = 3$, $b = 1$, and $c = 5$.",
                        "<strong>Part (b):</strong> We sketch the quadratic using our key features:<br>1. <strong>Turning Point:</strong> From the completed square form, the minimum turning point is at (-1, 5).<br>2. <strong>y-int:</strong> Setting $x = 0$ gives $f(0) = 8$, so the curve crosses the y-axis at (0, 8).<br>3. <strong>x-ints:</strong> Setting $3x^2+6x+8 = 0$, the discriminant is $\\Delta = 6^2 - 4(3)(8) = -60 < 0$. There are no real roots, so the curve does not cross the x-axis.<br><br>Here is the completed sketch showing these features:<br><img src='images/Pure_SVGs/004021_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
                        "<strong>Part (c)(i):</strong> First, we expand and complete the square for g(x) to find its vertex:<br>$$g(x) = 3(x^2 - 4x + 4) + 6x - 7$$<br>\\begin{aligned}\ng(x) &= 3x^2 - 12x + 12 + 6x - 7 \\cr\n&= 3x^2 - 6x + 5\n\\end{aligned}<br>\\begin{aligned}\ng(x) &= 3(x^2 - 2x) + 5 \\cr\n&= 3\\left[(x-1)^2 - 1\\right] + 5\n\\end{aligned}<br>$$g(x) = 3(x-1)^2 + 2$$",
                        "The vertex of $f(x)$ is at (-1, 5) and the vertex of g(x) is at (1, 2).<br>To map (-1, 5) onto (1, 2), we shift +2 units horizontally and -3 units vertically.<br>Therefore, the transformation is a <strong>translation by the vector $\\begin{pmatrix} 2 \\\\\\ -3 \\end{pmatrix}$</strong>.",
                        "<strong>Part (c)(ii):</strong> We rewrite h(x) using our completed square form of the denominator:<br>$$h(x) = \\dfrac{15}{ 3(x+1)^2 + 5 }$$<br>Since the minimum value of the denominator is 5 (when $x = -1$), the maximum value of the fraction is $\\frac{15}{5} = 3$. As $x \\to \\pm\\infty$, the denominator grows infinitely large, so the fraction approaches 0 from above.<br>Therefore, the range is <strong>$0 < h(x) \\le 3$</strong>.",
                        "Final Answer: <strong>(a)</strong> $$3(x+1)^2 + 5$$ <strong>(b)</strong> $$\\text{Turning Point: (-1,5), }y\\text{ -int: (0,8) }$$ <strong>(c)(i)</strong> $$\\text{Translation by }\\begin{pmatrix} 2 \\\\\\ -3 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < h(x) \\le 3$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$3(x+1)^2 + 5$$ <strong>(b)</strong> $$\\text{Turning Point: (-1,5), }y\\text{ -int: (0,8) }$$ <strong>(c)(i)</strong> $$\\text{Translation by }\\begin{pmatrix} -2 \\\\\\ 3 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < h(x) \\le 3$$",
                                "feedback": "You probably made a sign error when calculating your translation vector in Part (c)(i). Moving from the vertex of $f(x)$ at $x = -1$ to the vertex of g(x) at $x = 1$ is a horizontal shift of +2. Moving from $y = 5$ to $y = 2$ is a vertical shift of -3. This gives the vector $\\begin{pmatrix} 2 \\\\\\ -3 \\end{pmatrix}$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$3(x+1)^2 + 5$$ <strong>(b)</strong> $$\\text{Turning Point: (-1,5), }y\\text{ -int: (0,8) }$$ <strong>(c)(i)</strong> $$\\text{Translation by }\\begin{pmatrix} 2 \\\\\\ -3 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 \\le h(x) \\le 3$$",
                                "feedback": "Check your inequality symbols in Part (c)(ii). The denominator $3x^2+6x+8$ has a minimum value of 5 and is always strictly positive. Because a fraction with a positive numerator and a strictly positive denominator can never equal zero, the lower bound must be a strict inequality: $0 < h(x) \\le 3$, not $0 \\le h(x) \\le 3$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$3(x+1)^2 + 11$$ <strong>(b)</strong> $$\\text{Turning Point: (-1,11), }y\\text{ -int: (0,8) }$$ <strong>(c)(i)</strong> $$\\text{Translation by } \\begin{pmatrix} 2 \\\\\\ -9 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < h(x) \\le \\dfrac{15}{11}$$",
                                "feedback": "You probably made a sign error when expanding your completed square in Part (a), adding the 3 instead of subtracting it: \\begin{aligned} & 3[(x+1)^2 - 1] + 8 & \\quad = 3(x+1)^2 - 3 + 8\\cr & \\quad = 3(x+1)^2 + 5\\end{aligned}, not +11. This error affected all your subsequent coordinates and calculations."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Range of Reciprocals",
                        "content": "To find the range of a reciprocal function like $h(x) = \\frac{K}{f(x)}$, remember that the maximum value of the function occurs when its denominator is at its absolute minimum. Use your completed square form from part (a) to read off the minimum value of $f(x)$ instantly."
                }
        },
        {
                "id": "004022",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Coordinate Geometry",
                "subtopic": [
                        "Graph Transformations",
                        "Quadratics"
                ],
                "img": false,
                "question": "$$f(x) = 2x^2 + 8x + 12\\text{, } x \\in \\mathbb{R}$$<br><strong>(a)</strong> Write f(x) in the form $a(x + b)^2 + c$, where a, b, and c are integers to be found.<br><strong>(b)</strong> Sketch the curve with equation $y = f(x)$, showing any points of intersection with the coordinate axes and the coordinates of the turning point.<br><strong>(c)(i)</strong> Describe fully the transformation that maps the curve with equation $y = f(x)$ onto the curve with equation $y = g(x)$ where:<br>$$g(x) = 2(x-3)^2 + 8x - 15\\text{, } x \\in \\mathbb{R}$$<br><strong>(c)(ii)</strong> Find the range of the function:<br>$$h(x) = \\dfrac{12}{ 2x^2 + 8x + 12 }\\text{, } x \\in \\mathbb{R}$$",
                "steps": [
                        "<strong>Part (a):</strong> We complete the square by first factorising out the 2 from the quadratic and linear terms:<br>$$f(x) = 2(x^2 + 4x) + 12$$<br>$$f(x) = 2\\left[(x+2)^2 - 2^2\\right] + 12$$<br>$$f(x) = 2(x+2)^2 - 8 + 12$$<br>$$f(x) = 2(x+2)^2 + 4$$<br>Therefore, the constants are $a = 2$, $b = 2$, and $c = 4$.",
                        "<strong>Part (b):</strong> We sketch the quadratic using our key features:<br>1. <strong>Turning Point:</strong> From the completed square form, the minimum turning point is at (-2, 4).<br>2. <strong>y-int:</strong> Setting $x = 0$ gives $f(0) = 12$, so the curve crosses the y-axis at (0, 12).<br>3. <strong>x-ints:</strong> Setting $2x^2+8x+12 = 0$, the discriminant is $\\Delta = 8^2 - 4(2)(12) = -32 < 0$. There are no real roots, so the curve does not cross the x-axis.<br><br>Here is the completed sketch showing these features:<br><img src='images/Pure_SVGs/004022_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
                        "<strong>Part (c)(i):</strong> First, we expand and complete the square for g(x) to find its vertex:<br>$$g(x) = 2(x^2 - 6x + 9) + 8x - 15$$<br>\\begin{aligned}\ng(x) &= 2x^2 - 12x + 18 + 8x - 15 \\cr\n&= 2x^2 - 4x + 3\n\\end{aligned}<br>\\begin{aligned}\ng(x) &= 2(x^2 - 2x) + 3 \\cr\n&= 2\\left[(x-1)^2 - 1\\right] + 3\n\\end{aligned}<br>$$g(x) = 2(x-1)^2 + 1$$",
                        "The vertex of $f(x)$ is at (-2, 4) and the vertex of g(x) is at (1, 1).<br>To map (-2, 4) onto (1, 1), we shift +3 units horizontally and -3 units vertically.<br>Therefore, the transformation is a <strong>translation by the vector $\\begin{pmatrix} 3 \\\\\\ -3 \\end{pmatrix}$</strong>.",
                        "<strong>Part (c)(ii):</strong> We rewrite h(x) using our completed square form of the denominator:<br>$$h(x) = \\dfrac{12}{ 2(x+2)^2 + 4 }$$<br>Since the minimum value of the denominator is 4 (when $x = -2$), the maximum value of the fraction is $\\frac{12}{4} = 3$. As $x \\to \\pm\\infty$, the denominator grows infinitely large, so the fraction approaches 0 from above.<br>Therefore, the range is <strong>$0 < h(x) \\le 3$</strong>.",
                        "Final Answer: <strong>(a)</strong> $$2(x+2)^2 + 4$$ <strong>(b)</strong> $$\\text{Turning Point: (-2,4), }y\\text{ -int: (0,12) }$$ <strong>(c)(i)</strong> $$\\text{Translation by }\\begin{pmatrix} 3 \\\\\\ -3 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < h(x) \\le 3$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$2(x+2)^2 + 4$$ <strong>(b)</strong> $$\\text{Turning Point: (-2,4), }y\\text{ -int: (0,12) }$$ <strong>(c)(i)</strong> $$\\text{Translation by }\\begin{pmatrix} -3 \\\\\\ 3 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < h(x) \\le 3$$",
                                "feedback": "You probably made a sign error when calculating your translation vector in Part (c)(i). Moving from the vertex of $f(x)$ at $x = -2$ to the vertex of g(x) at $x = 1$ is a horizontal shift of +3. Moving from $y = 4$ to $y = 1$ is a vertical shift of -3. This gives the vector $\\begin{pmatrix} 3 \\\\\\ -3 \\end{pmatrix}$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$2(x+2)^2 + 4$$ <strong>(b)</strong> $$\\text{Turning Point: (-2,4), }y\\text{ -int: (0,12) }$$ <strong>(c)(i)</strong> $$\\text{Translation by }\\begin{pmatrix} 3 \\\\\\ -3 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 \\le h(x) \\le 3$$",
                                "feedback": "Check your inequality symbols in Part (c)(ii). The denominator $2x^2+8x+12$ has a minimum value of 4 and is always strictly positive. Because a fraction with a positive numerator and a strictly positive denominator can never equal zero, the lower bound must be a strict inequality: $0 < h(x) \\le 3$, not $0 \\le h(x) \\le 3$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$2(x+2)^2 + 20$$ <strong>(b)</strong> $$\\text{Turning Point: (-2,20), }y\\text{ -int: (0,12) }$$ <strong>(c)(i)</strong> $$\\text{Translation by }\\begin{pmatrix} 3 \\\\\\ -19 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < h(x) \\le \\dfrac{3}{5}$$",
                                "feedback": "You probably made an error when completing the square in Part (a), adding the 8 instead of subtracting it: \\begin{aligned} & 2[(x+2)^2 - 4] + 12 \\cr & \\quad = 2(x+2)^2 - 8 + 12\\cr &  quad= 2(x+2)^2 + 4\\end{aligned} not +20. This error affected all your subsequent coordinates and calculations."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Vertex Form Translations",
                        "content": "When describing quadratic translations, always locate the turning point (vertex) of both curves first. Moving from vertex $(x_1, y_1)$ to vertex $(x_2, y_2)$ gives you the exact translation components $(x_2 - x_1)$ and $(y_2 - y_1)$ instantly without confusing algebraic signs inside brackets."
                }
        },
        {
                "id": "004023",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Coordinate Geometry",
                "subtopic": [
                        "Graph Transformations",
                        "Quadratics"
                ],
                "img": false,
                "question": "$$f(x) = 4x^2 + 8x + 7\\text{, } x \\in \\mathbb{R}$$<br><strong>(a)</strong> Write f(x) in the form $a(x + b)^2 + c$, where a, b, and c are integers to be found.<br><strong>(b)</strong> Sketch the curve with equation $y = f(x)$, showing any points of intersection with the coordinate axes and the coordinates of the turning point.<br><strong>(c)(i)</strong> Describe fully the transformation that maps the curve with equation $y = f(x)$ onto the curve with equation $y = g(x)$ where:<br>$$g(x) = 4(x-3)^2 + 8x - 19\\text{, } x \\in \\mathbb{R}$$<br><strong>(c)(ii)</strong> Find the range of the function:<br>$$h(x) = \\dfrac{15}{ 4x^2 + 8x + 7 }\\text{, } x \\in \\mathbb{R}$$",
                "steps": [
                        "<strong>Part (a):</strong> We complete the square by first factorising out the 4 from the quadratic and linear terms:<br>$$f(x) = 4(x^2 + 2x) + 7$$<br>$$f(x) = 4\\left[(x+1)^2 - 1^2\\right] + 7$$<br>$$f(x) = 4(x+1)^2 - 4 + 7$$<br>$$f(x) = 4(x+1)^2 + 3$$<br>Therefore, the constants are $a = 4$, $b = 1$, and $c = 3$.",
                        "<strong>Part (b):</strong> We sketch the quadratic using our key features:<br>1. <strong>Turning Point:</strong> From the completed square form, the minimum turning point is at (-1, 3).<br>2. <strong>y-int:</strong> Setting $x = 0$ gives $f(0) = 7$, so the curve crosses the y-axis at (0, 7).<br>3. <strong>x-ints:</strong> Setting $4x^2+8x+7 = 0$, the discriminant is $\\Delta = 8^2 - 4(4)(7) = -48 < 0$. There are no real roots, so the curve does not cross the x-axis.<br><br>Here is the completed sketch showing these features:<br><img src='images/Pure_SVGs/004023_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
                        "<strong>Part (c)(i):</strong> First, we expand and complete the square for g(x) to find its vertex:<br>$$g(x) = 4(x^2 - 6x + 9) + 8x - 19$$<br>\\begin{aligned}\ng(x) &= 4x^2 - 24x + 36 + 8x - 19 \\cr\n&= 4x^2 - 16x + 17\n\\end{aligned}<br>\\begin{aligned}\ng(x) &= 4(x^2 - 4x) + 17 \\cr\n&= 4\\left[(x-2)^2 - 4\\right] + 17\n\\end{aligned}<br>$$g(x) = 4(x-2)^2 - 16 + 17$$<br>$$g(x) = 4(x-2)^2 + 1$$",
                        "The vertex of $f(x)$ is at (-1, 3) and the vertex of g(x) is at (2, 1).<br>To map (-1, 3) onto (2, 1), we shift +3 units horizontally and -2 units vertically.<br>Therefore, the transformation is a <strong>translation by the vector $\\begin{pmatrix} 3 \\\\\\ -2 \\end{pmatrix}$</strong>.",
                        "<strong>Part (c)(ii):</strong> We rewrite h(x) using our completed square form of the denominator:<br>$$h(x) = \\dfrac{15}{ 4(x+1)^2 + 3 }$$<br>Since the minimum value of the denominator is 3 (when $x = -1$), the maximum value of the fraction is $\\frac{15}{3} = 5$. As $x \\to \\pm\\infty$, the denominator grows infinitely large, so the fraction approaches 0 from above.<br>Therefore, the range is <strong>$0 < h(x) \\le 5$</strong>.",
                        "Final Answer: <strong>(a)</strong> $$4(x+1)^2 + 3$$ <strong>(b)</strong> $$\\text{Turning Point: (-1,3), }y\\text{ -int: (0,7) }$$ <strong>(c)(i)</strong> $$\\text{Translation by }\\begin{pmatrix} 3 \\\\\\ -2 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < h(x) \\le 5$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$4(x+1)^2 + 3$$ <strong>(b)</strong> $$\\text{Turning Point: (-1,3), }y\\text{ -int: (0,7) }$$ <strong>(c)(i)</strong> $$\\text{Translation by }\\begin{pmatrix} -3 \\\\\\ 2 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < h(x) \\le 5$$",
                                "feedback": "You probably made a sign error when calculating your translation vector in Part (c)(i). Moving from the vertex of $f(x)$ at $x = -1$ to the vertex of g(x) at $x = 2$ is a horizontal shift of +3. Moving from $y = 3$ to $y = 1$ is a vertical shift of -2. This gives the vector $\\begin{pmatrix} 3 \\\\\\ -2 \\end{pmatrix}$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$4(x+1)^2 + 3$$ <strong>(b)</strong> $$\\text{Turning Point: (-1,3), }y\\text{ -int: (0,7) }$$ <strong>(c)(i)</strong> $$\\text{Translation by }\\begin{pmatrix} 3 \\\\\\ -2 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 \\le h(x) \\le 5$$",
                                "feedback": "Check your inequality symbols in Part (c)(ii). The denominator $4x^2+8x+7$ has a minimum value of 3 and is always strictly positive. Because a fraction with a positive numerator and a strictly positive denominator can never equal zero, the lower bound must be a strict inequality: $0 < h(x) \\le 5$, not $0 \\le h(x) \\le 5$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$4(x+1)^2 + 11$$ <strong>(b)</strong> $$\\text{Turning Point: (-1,11), }y\\text{ -int: (0,7) }$$ <strong>(c)(i)</strong> $$\\text{Translation by }\\begin{pmatrix} 3 \\\\\\ -10 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < h(x) \\le \\dfrac{15}{11}$$",
                                "feedback": "You probably made a sign error when completing the square in Part (a), adding the 4 instead of subtracting it: \\begin{aligned} & 4[(x+1)^2 - 1] + 7\\cr & \\quad= 4(x+1)^2 - 4 + 7\\cr & \\quad= 4(x+1)^2 + 3\\end{aligned} not +11. This error affected all your subsequent coordinates and calculations."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Expanding First",
                        "content": "When dealing with transformations between quadratic curves that are partially expanded like g(x), it is almost always safer to expand the entire function first into standard form $ax^2 + bx + c$, and then complete the square from scratch. This prevents nested sign slips during the vector identification."
                }
        },
        {
                "id": "004024",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Coordinate Geometry",
                "subtopic": [
                        "Graph Transformations",
                        "Quadratics"
                ],
                "img": false,
                "question": "$$f(x) = 3x^2 + 12x + 18\\text{, } x \\in \\mathbb{R}$$<br><strong>(a)</strong> Write f(x) in the form $a(x + b)^2 + c$, where a, b, and c are integers to be found.<br><strong>(b)</strong> Sketch the curve with equation $y = f(x)$, showing any points of intersection with the coordinate axes and the coordinates of the turning point.<br><strong>(c)(i)</strong> Describe fully the transformation that maps the curve with equation $y = f(x)$ onto the curve with equation $y = g(x)$ where:<br>$$g(x) = 3(x-3)^2 + 12x - 22\\text{, } x \\in \\mathbb{R}$$<br><strong>(c)(ii)</strong> Find the range of the function:<br>$$h(x) = \\dfrac{24}{ 3x^2 + 12x + 18 }\\text{, } x \\in \\mathbb{R}$$",
                "steps": [
                        "<strong>Part (a):</strong> We complete the square by first factorising out the 3 from the quadratic and linear terms:<br>$$f(x) = 3(x^2 + 4x) + 18$$<br>$$f(x) = 3\\left[(x+2)^2 - 2^2\\right] + 18$$<br>$$f(x) = 3(x+2)^2 - 12 + 18$$<br>$$f(x) = 3(x+2)^2 + 6$$<br>Therefore, the constants are $a = 3$, $b = 2$, and $c = 6$.",
                        "<strong>Part (b):</strong> We sketch the quadratic using our key features:<br>1. <strong>Turning Point:</strong> From the completed square form, the minimum turning point is at (-2, 6).<br>2. <strong>y-int:</strong> Setting $x = 0$ gives $f(0) = 18$, so the curve crosses the y-axis at (0, 18).<br>3. <strong>x-ints:</strong> Setting $3x^2+12x+18 = 0$, the discriminant is $\\Delta = 12^2 - 4(3)(18) = -72 < 0$. There are no real roots, so the curve does not cross the x-axis.<br><br>Here is the completed sketch showing these features:<br><img src='images/Pure_SVGs/004024_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
                        "<strong>Part (c)(i):</strong> First, we expand and complete the square for g(x) to find its vertex:<br>$$g(x) = 3(x^2 - 6x + 9) + 12x - 22$$<br>\\begin{aligned}\ng(x) &= 3x^2 - 18x + 27 + 12x - 22 \\cr\n&= 3x^2 - 6x + 5\n\\end{aligned}<br>\\begin{aligned}\ng(x) &= 3(x^2 - 2x) + 5 \\cr\n&= 3\\left[(x-1)^2 - 1\\right] + 5\n\\end{aligned}<br>$$g(x) = 3(x-1)^2 - 3 + 5$$<br>$$g(x) = 3(x-1)^2 + 2$$",
                        "The vertex of $f(x)$ is at (-2, 6) and the vertex of g(x) is at (1, 2).<br>To map (-2, 6) onto (1, 2), we shift +3 units horizontally and -4 units vertically.<br>Therefore, the transformation is a <strong>translation by the vector $\\begin{pmatrix} 3 \\\\\\ -4 \\end{pmatrix}$</strong>.",
                        "<strong>Part (c)(ii):</strong> We rewrite h(x) using our completed square form of the denominator:<br>$$h(x) = \\dfrac{24}{ 3(x+2)^2 + 6 }$$<br>Since the minimum value of the denominator is 6 (when $x = -2$), the maximum value of the fraction is $\\frac{24}{6} = 4$. As $x \\to \\pm\\infty$, the denominator grows infinitely large, so the fraction approaches 0 from above.<br>Therefore, the range is <strong>$0 < h(x) \\le 4$</strong>.",
                        "Final Answer: <strong>(a)</strong> $$3(x+2)^2 + 6$$ <strong>(b)</strong> $$\\text{Turning Point: (-2,6), }y\\text{ -int: (0,18) }$$ <strong>(c)(i)</strong> $$\\text{Translation by }\\begin{pmatrix} 3 \\\\\\ -4 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < h(x) \\le 4$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$3(x+2)^2 + 6$$ <strong>(b)</strong> $$\\text{Turning Point: (-2,6), }y\\text{ -int: (0,18) }$$ <strong>(c)(i)</strong> $$\\text{Translation by }\\begin{pmatrix} -3 \\\\\\ 4 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < h(x) \\le 4$$",
                                "feedback": "You probably made a sign error when calculating your translation vector in Part (c)(i). Moving from the vertex of $f(x)$ at $x = -2$ to the vertex of g(x) at $x = 1$ is a horizontal shift of +3. Moving from $y = 6$ to $y = 2$ is a vertical shift of -4. This gives the vector $\\begin{pmatrix} 3 \\\\\\ -4 \\end{pmatrix}$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$3(x+2)^2 + 6$$ <strong>(b)</strong> $$\\text{Turning Point: (-2,6), }y\\text{ -int: (0,18) }$$ <strong>(c)(i)</strong> $$\\text{Translation by }\\begin{pmatrix} 3 \\\\\\ -4 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 \\le h(x) \\le 4$$",
                                "feedback": "Check your inequality symbols in Part (c)(ii). The denominator $3x^2+12x+18$ has a minimum value of 6 and is always strictly positive. Because a fraction with a positive numerator and a strictly positive denominator can never equal zero, the lower bound must be a strict inequality: $0 < h(x) \\le 4$, not $0 \\le h(x) \\le 4$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$3(x+2)^2 + 30$$ <strong>(b)</strong> $$\\text{Turning Point: (-2,30), }y\\text{ -int: (0,18) }$$ <strong>(c)(i)</strong> $$\\text{Translation by }\\begin{pmatrix} 3 \\\\\\ -28 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < h(x) \\le \\dfrac{4}{5}$$",
                                "feedback": "You probably made a sign error when completing the square in Part (a), adding the 12 instead of subtracting it: \\begin{aligned} & 3[(x+2)^2 - 4] + 18\\cr & \\quad = 3(x+2)^2 - 12 + 18\\cr & \\quad = 3(x+2)^2 + 6\\end{aligned} not +30. This error affected all your subsequent coordinates and calculations."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Vertex Alignment",
                        "content": "A horizontal translation of +3 means you replace x with (x - 3) inside your function. A vertical translation of -4 means you subtract 4 from the entire expression. Writing your functions in vertex form makes verifying these graphical maps incredibly easy."
                }
        },
        {
                "id": "004025",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Coordinate Geometry",
                "subtopic": [
                        "Graph Transformations",
                        "Quadratics"
                ],
                "img": false,
                "question": "$$f(x) = 2x^2 + 4x + 7\\text{, } x \\in \\mathbb{R}$$<br><strong>(a)</strong> Write f(x) in the form $a(x + b)^2 + c$, where a, b, and c are integers to be found.<br><strong>(b)</strong> Sketch the curve with equation $y = f(x)$, showing any points of intersection with the coordinate axes and the coordinates of the turning point.<br><strong>(c)(i)</strong> Describe fully the transformation that maps the curve with equation $y = f(x)$ onto the curve with equation $y = g(x)$ where:<br>$$g(x) = 2(x-3)^2 + 4x - 9\\text{, } x \\in \\mathbb{R}$$<br><strong>(c)(ii)</strong> Find the range of the function:<br>$$h(x) = \\dfrac{10}{ 2x^2 + 4x + 7 }\\text{, } x \\in \\mathbb{R}$$",
                "steps": [
                        "<strong>Part (a):</strong> We complete the square by first factorising out the 2 from the quadratic and linear terms:<br>$$f(x) = 2(x^2 + 2x) + 7$$<br>$$f(x) = 2\\left[(x+1)^2 - 1^2\\right] + 7$$<br>$$f(x) = 2(x+1)^2 - 2 + 7$$<br>$$f(x) = 2(x+1)^2 + 5$$<br>Therefore, the constants are $a = 2$, $b = 1$, and $c = 5$.",
                        "<strong>Part (b):</strong> We sketch the quadratic using our key features:<br>1. <strong>Turning Point:</strong> From the completed square form, the minimum turning point is at (-1, 5).<br>2. <strong>y-int:</strong> Setting $x = 0$ gives $f(0) = 7$, so the curve crosses the y-axis at (0, 7).<br>3. <strong>x-ints:</strong> Setting $2x^2+4x+7 = 0$, the discriminant is $\\Delta = 4^2 - 4(2)(7) = -40 < 0$. There are no real roots, so the curve does not cross the x-axis.<br><br>Here is the completed sketch showing these features:<br><img src='images/Pure_SVGs/004025_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
                        "<strong>Part (c)(i):</strong> First, we expand and complete the square for g(x) to find its vertex:<br>$$g(x) = 2(x^2 - 6x + 9) + 4x - 9$$<br>\\begin{aligned}\ng(x) &= 2x^2 - 12x + 18 + 4x - 9 \\cr\n&= 2x^2 - 8x + 9\n\\end{aligned}<br>\\begin{aligned}\ng(x) &= 2(x^2 - 4x) + 9 \\cr\n&= 2\\left[(x-2)^2 - 4\\right] + 9\n\\end{aligned}<br>$$g(x) = 2(x-2)^2 - 8 + 9$$<br>$$g(x) = 2(x-2)^2 + 1$$",
                        "The vertex of $f(x)$ is at (-1, 5) and the vertex of g(x) is at (2, 1).<br>To map (-1, 5) onto (2, 1), we shift +3 units horizontally and -4 units vertically.<br>Therefore, the transformation is a <strong>translation by the vector $\\begin{pmatrix} 3 \\\\\\ -4 \\end{pmatrix}$</strong>.",
                        "<strong>Part (c)(ii):</strong> We rewrite h(x) using our completed square form of the denominator:<br>$$h(x) = \\dfrac{10}{ 2(x+1)^2 + 5 }$$<br>Since the minimum value of the denominator is 5 (when $x = -1$), the maximum value of the fraction is $\\frac{10}{5} = 2$. As $x \\to \\pm\\infty$, the denominator grows infinitely large, so the fraction approaches 0 from above.<br>Therefore, the range is <strong>$0 < h(x) \\le 2$</strong>.",
                        "Final Answer: <strong>(a)</strong> $$2(x+1)^2 + 5$$ <strong>(b)</strong> $$\\text{Turning Point: (-1,5), }y\\text{ -int: (0,7 }$$ <strong>(c)(i)</strong> $$\\text{Translation by }\\begin{pmatrix} 3 \\\\\\ -4 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < h(x) \\le 2$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$2(x+1)^2 + 5$$ <strong>(b)</strong> $$\\text{Turning Point: (-1,5), }y\\text{ -int: (0,7 }$$ <strong>(c)(i)</strong> $$\\text{Translation by }\\begin{pmatrix} -3 \\\\\\ 4 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < h(x) \\le 2$$",
                                "feedback": "You probably made a sign error when calculating your translation vector in Part (c)(i). Moving from the vertex of $f(x)$ at $x = -1$ to the vertex of g(x) at $x = 2$ is a horizontal shift of +3. Moving from $y = 5$ to $y = 1$ is a vertical shift of -4. This gives the vector $\\begin{pmatrix} 3 \\\\\\ -4 \\end{pmatrix}$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$2(x+1)^2 + 5$$ <strong>(b)</strong> $$\\text{Turning Point: (-1,5), }y\\text{ -int: (0,7) }$$ <strong>(c)(i)</strong> $$\\text{Translation by }\\begin{pmatrix} 3 \\\\\\ -4 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 \\le h(x) \\le 2$$",
                                "feedback": "Check your inequality symbols in Part (c)(ii). The denominator $2x^2+4x+7$ has a minimum value of 5 and is always strictly positive. Because a fraction with a positive numerator and a strictly positive denominator can never equal zero, the lower bound must be a strict inequality: $0 < h(x) \\le 2$, not $0 \\le h(x) \\le 2$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$2(x+1)^2 + 9$$ <strong>(b)</strong> $$\\text{Turning Point: (-1,9), }y\\text{ -int: (0,7) }$$ <strong>(c)(i)</strong> $$\\text{Translation by }\\begin{pmatrix} 3 \\\\\\ -8 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < h(x) \\le \\dfrac{10}{9}$$",
                                "feedback": "You probably made a sign error when completing the square in Part (a), adding the 2 instead of subtracting it: \\begin{aligned} & 2[(x+1)^2 - 1] + 7\\cr & \\quad = 2(x+1)^2 - 2 + 7\\cr & \\quad = 2(x+1)^2 + 5\\end{aligned} not +9. This error affected all your subsequent coordinates and calculations."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Leading Coefficient Factorising",
                        "content": "When completing the square with a leading coefficient like $2x^2$, only factorise the coefficient out of the quadratic and linear terms ($2[x^2+2x]$). Leaving the constant +7 outside the bracket prevents you from accidentally multiplying it, which is the most common source of calculation errors."
                }
        },
        {
                "id": "004026",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Trigonometry",
                "topic": "Trigonometric Equations",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "<strong>(a)</strong> Solve, for $$-180^\\circ \\le \\theta \\le 180^\\circ,$$ the equation:<br>$$4\\sin 2\\theta = 7\\cos\\theta.$$Give your answers, where necessary, to one decimal place. Solutions based entirely on graphical or numerical methods are not acceptable.<br><br><strong>(b)</strong> Hence deduce the smallest positive solution of:<br> \\begin{aligned}4 & \\sin(2x + 20^\\circ)\\cr & \\quad \\quad \\quad = 7\\cos(x + 10^\\circ).\\end{aligned}",
                "steps": [
                        "<strong>Part (a):</strong> Use the identity $$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta.$$<br>$$4(2\\sin\\theta\\cos\\theta) = 7\\cos\\theta$$<br>$$8\\sin\\theta\\cos\\theta - 7\\cos\\theta = 0$$<br>Factorise:<br>$$\\cos\\theta(8\\sin\\theta - 7) = 0.$$<br>This gives two branches:<br><em>Branch 1:</em> \\begin{aligned}\\cos\\theta &= 0 \\cr \\Rightarrow \\theta &= -90^\\circ\\text{, } 90^\\circ.\\end{aligned}<br><em>Branch 2:</em> \\begin{aligned}\\sin\\theta &= \\frac{7}{8}\\cr \\Rightarrow \\theta &\\approx 61.0^\\circ\\text{, } 119.0^\\circ.\\end{aligned}",
                        "<strong>Part (b):</strong> Note that $$2x + 20^\\circ = 2(x + 10^\\circ).$$ Let $$\\theta = x + 10^\\circ.$$ Then the equation becomes the same as in Part (a).<br>Thus the smallest positive solution is:<br>\\begin{aligned}\nx &= 61.0^\\circ - 10^\\circ \\cr\n&= 51.0^\\circ.\n\\end{aligned}",
                        "Final Answer: \\begin{aligned}\\theta &= -90^\\circ\\text{, } 61.0^\\circ,\\cr & \\quad \\quad 90^\\circ\\text{, } 119.0^\\circ; \\cr x &= 51.0^\\circ.\\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "Smallest positive $x = 41.0^\\circ$",
                                "feedback": "You subtracted $20^\\circ$ instead of $10^\\circ$. Remember: $\\theta = x + 10^\\circ$, so $x = \\theta - 10^\\circ$."
                        },
                        {
                                "ans": "Smallest positive $x = 80.0^\\circ$",
                                "feedback": "This corresponds to the $\\theta = 90^\\circ$ branch, but it is not the smallest positive solution."
                        },
                        {
                                "ans": "Smallest positive $x = 260.0^\\circ$",
                                "feedback": "This comes from the negative $\\theta$ branch. It is positive, but not the smallest positive solution."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "Factorisation First",
                        "content": "When both sides contain products of trig functions, factorising early often reveals clean solution branches and prevents unnecessary algebra."
                }
        },
        {
                "id": "004027",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Trigonometry",
                "topic": "Trigonometric Equations",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "<strong>(a)</strong> Solve, for $$-180^\\circ \\le \\theta \\le 180^\\circ,$$ the equation:<br>$$3\\tan\\theta = 2\\sin 2\\theta.$$Give answers to one decimal place where necessary.<br><br><strong>(b)</strong> Deduce the smallest positive solution of:<br>\\begin{aligned} &3\\tan(x - 15^\\circ)\\cr & \\quad \\quad \\quad = 2\\sin(2x - 30^\\circ).\\end{aligned}",
                "steps": [
                        "<strong>Part (a):</strong> Use \\begin{aligned}\n\\tan\\theta &= \\frac{\\sin\\theta}{\\cos\\theta}, \\quad \\sin 2\\theta \\cr\n&= 2\\sin\\theta\\cos\\theta.\n\\end{aligned}<br>Substitute:<br>$$3\\frac{\\sin\\theta}{\\cos\\theta} = 4\\sin\\theta\\cos\\theta$$<br>Multiply by cosθ:<br>$$3\\sin\\theta = 4\\sin\\theta\\cos^2\\theta$$<br>Factorise:<br>$$\\sin\\theta(3 - 4\\cos^2\\theta) = 0.$$<br>Solutions:<br>• \\begin{aligned}\\sin\\theta &= 0\\cr \\Rightarrow \\theta &= -180^\\circ\\text{, }0^\\circ\\text{, } 180^\\circ.\\end{aligned}<br>• \\begin{aligned}\\cos^2\\theta &= \\frac{3}{4}\\cr \\Rightarrow \\theta &= \\pm 30^\\circ\\text{, }\\pm 150^\\circ.\\end{aligned}",
                        "<strong>Part (b):</strong> Note that $$2x - 30^\\circ = 2(x - 15^\\circ).$$ Let $$\\theta = x - 15^\\circ.$$<br>Smallest positive solution:<br>\\begin{aligned}\nx &= 0^\\circ + 15^\\circ \\cr\n&= 15^\\circ.\n\\end{aligned}",
                        "Final Answer: \\begin{aligned}\theta &= -180^\\circ, -150^\\circ, -30^\\circ,\\cr &\\quad \\quad 0^\\circ, 30^\\circ, 150^\\circ, 180^\\circ; \\cr\\quad x &= 15^\\circ.\\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$x = 45^\\circ$",
                                "feedback": "This corresponds to $\\theta = 30^\\circ$, but it is not the smallest positive solution."
                        },
                        {
                                "ans": "$x = 345^\\circ$",
                                "feedback": "This comes from the negative $\\theta$ branch. It is positive, but not the smallest positive solution."
                        },
                        {
                                "ans": "$x = 0^\\circ$",
                                "feedback": "Remember to add $15^\\circ$ because $\\theta = x - 15^\\circ$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "Watch for Restricted Domains",
                        "content": "When tanθ appears, always check for excluded angles such as ±90°. They cannot be solutions even if they appear algebraically."
                }
        },
        {
                "id": "004028",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Trigonometry",
                "topic": "Trigonometric Equations",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "<strong>(a)</strong> Solve, for $$-180^\\circ \\le \\theta \\le 180^\\circ,$$ the equation:<br>$$5\\cos 2\\theta = 8\\sin\\theta.$$Give answers to one decimal place where necessary.<br><br><strong>(b)</strong> Hence find the smallest positive solution of:<br>\\begin{aligned} & 5\\cos(2x - 40^\\circ)\\cr & \\quad \\quad \\quad = 8\\sin(x - 20^\\circ).\\end{aligned}",
                "steps": [
                        "<strong>Part (a):</strong> Use $$\\cos 2\\theta = 1 - 2\\sin^2\\theta.$$<br>Substitute:<br>$$5(1 - 2\\sin^2\\theta) = 8\\sin\\theta$$<br>$$5 - 10\\sin^2\\theta = 8\\sin\\theta$$<br>Rearrange:<br>$$10\\sin^2\\theta + 8\\sin\\theta - 5 = 0.$$<br>Solve the quadratic:<br>$$\\sin\\theta = \\frac{ -8 \\pm \\sqrt{264 }}{20}.$$<br>Only the positive root is valid: $$\\sin\\theta \\approx 0.4124.$$<br>Thus: $$\\theta \\approx 24.4^\\circ,\\\\\\ 155.6^\\circ.$$",
                        "<strong>Part (b):</strong> Note that $$2x - 40^\\circ = 2(x - 20^\\circ).$$ Let $$\\theta = x - 20^\\circ.$$<br>Smallest positive solution:<br>\\begin{aligned}\nx &= 24.4^\\circ + 20^\\circ \\cr\n&= 44.4^\\circ.\n\\end{aligned}",
                        "Final Answer: $$\\theta \\approx 24.4^\\circ,\\\\\\ 155.6^\\circ; \\quad x \\approx 44.4^\\circ.$$"
                ],
                "pi_options": [
                        {
                                "ans": "$x = 64.4^\\circ$",
                                "feedback": "You added $40^\\circ$ instead of $20^\\circ$. The substitution is $\\theta = x - 20^\\circ$."
                        },
                        {
                                "ans": "$x = 175.6^\\circ$",
                                "feedback": "This corresponds to the second $\\theta$ value, but it is not the smallest positive solution."
                        },
                        {
                                "ans": "$x = 20^\\circ$",
                                "feedback": "This assumes $\\theta = 0^\\circ$, which is not a solution of the original equation."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "Quadratics in Disguise",
                        "content": "Whenever you see cos2θ or sin2θ, try rewriting everything in terms of sinθ or cosθ. It often collapses into a clean quadratic."
                }
        },
        {
                "id": "004029",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Trigonometry",
                "topic": "Trigonometric Equations",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "<strong>(a)</strong> Solve, for $$-180^\\circ \\le \\theta \\le 180^\\circ,$$ the equation:<br>$$6\\sin\\theta = 2\\cos 2\\theta.$$<br><br><strong>(b)</strong> Deduce the smallest positive solution of:<br>\\begin{aligned} & 6\\sin(x + 30^\\circ) \\cr & \\quad \\quad \\quad = 2\\cos(2x + 60^\\circ).\\end{aligned}",
                "steps": [
                        "<strong>Part (a):</strong> Use $$\\cos 2\\theta = 1 - 2\\sin^2\\theta.$$<br>Substitute:<br>$$6\\sin\\theta = 2(1 - 2\\sin^2\\theta)$$<br>$$3\\sin\\theta = 1 - 2\\sin^2\\theta$$<br>Rearrange:<br>$$2\\sin^2\\theta + 3\\sin\\theta - 1 = 0.$$<br>Solve the quadratic:<br>$$\\sin\\theta = \\frac{ -3 \\pm \\sqrt{17 }}{4}.$$<br>Only the positive root is valid: $$\\sin\\theta \\approx 0.2808.$$<br>Thus: $$\\theta \\approx 16.3^\\circ,\\\\\\ 163.7^\\circ.$$",
                        "<strong>Part (b):</strong> Note that $$2x + 60^\\circ = 2(x + 30^\\circ).$$ Let $$\\theta = x + 30^\\circ.$$<br>Smallest positive solution:<br>\\begin{aligned}\nx &= 163.7^\\circ - 30^\\circ \\cr\n&= 133.7^\\circ.\n\\end{aligned}",
                        "Final Answer: $$\\theta \\approx 16.3^\\circ,\\\\\\ 163.7^\\circ; \\quad x \\approx 133.7^\\circ.$$"
                ],
                "pi_options": [
                        {
                                "ans": "$x = 346.3^\\circ$",
                                "feedback": "This comes from the negative $\\theta$ branch. It is positive, but not the smallest positive solution."
                        },
                        {
                                "ans": "$x = 16.3^\\circ$",
                                "feedback": "You forgot to subtract $30^\\circ$. Remember: $x = \\theta - 30^\\circ$."
                        },
                        {
                                "ans": "$x = 30^\\circ$",
                                "feedback": "This assumes $\\theta = 60^\\circ$, which is not a solution of the original equation."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "Check Validity of Roots",
                        "content": "Quadratics in sinθ or cosθ often produce invalid roots outside the range −1 to 1. Always check before taking inverse trig values."
                }
        },
        {
                "id": "004030",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Trigonometry",
                "topic": "Trigonometric Equations",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "<strong>(a)</strong> Solve, for $$-180^\\circ \\le \\theta \\le 180^\\circ,$$ the equation:<br>$$9\\sin 2\\theta = 4\\tan\\theta.$$Give answers to one decimal place where necessary.<br><br><strong>(b)</strong> Hence deduce the smallest positive solution of:<br>\\begin{aligned} & 9\\sin(2x - 10^\\circ)\\cr & \\quad \\quad \\quad = 4\\tan(x - 5^\\circ).\\end{aligned}",
                "steps": [
                        "<strong>Part (a):</strong> Use \\begin{aligned}\\sin 2\\theta &= 2\\sin\\theta\\cos\\theta, \\cr \\tan\\theta &= \\frac{\\sin\\theta}{\\cos\\theta}.\n\\end{aligned}<br>Substitute:<br>$$18\\sin\\theta\\cos^2\\theta = 4\\sin\\theta$$<br>Factorise:<br>$$2\\sin\\theta(9\\cos^2\\theta - 2) = 0.$$<br>Solutions:<br> \\begin{aligned}\\sin\\theta &= 0 \\cr\\Rightarrow \\theta &= -180^\\circ, 0^\\circ, 180^\\circ.\\end{aligned}<br>\\begin{aligned}\\cos^2\\theta &= \\frac{2}{9} \\cr \\Rightarrow \\theta & \\approx \\pm 61.9^\\circ, \\pm 118.1^\\circ.$$",
                        "<strong>Part (b):</strong> Note that $$2x - 10^\\circ = 2(x - 5^\\circ).$$ Let $$\\theta = x - 5^\\circ.$$<br>Smallest positive solution:<br>\\begin{aligned}\nx &= 0^\\circ + 5^\\circ \\cr\n&= 5^\\circ.\n\\end{aligned}",
                        "Final Answer: \\begin{aligned}\\theta &= -180^\\circ, -118.1^\\circ, -61.9^\\circ, 0^\\circ,\\cr & \\quad 61.9^\\circ, 118.1^\\circ, 180^\\circ; \\cr x &= 5^\\circ.\\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$x = 66.9^\\circ$",
                                "feedback": "This corresponds to $\\theta = 61.9^\\circ$, but it is not the smallest positive solution."
                        },
                        {
                                "ans": "$x = 185^\\circ$",
                                "feedback": "This comes from the $\\theta = -180^\\circ$ branch. It is positive, but not the smallest positive solution."
                        },
                        {
                                "ans": "$x = 0^\\circ$",
                                "feedback": "Remember: $x = \\theta + 5^\\circ$, and $\\theta = 0^\\circ$ gives $x = 5^\\circ$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "Spot the Structure",
                        "content": "When the transformed equation in Part (b) mirrors the structure of Part (a), a simple substitution often collapses the problem instantly."
                }
        },
        {
                "id": "004031",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "In a simple model, the value, £V, of a motorcycle depends on its age, t, in years.<br>The following information is available for motorcycle A:<br><ul><li>its value when new is £15,000</li><li>its value after one year is £12,000</li></ul><strong>(a)</strong> Use an exponential model to form, for motorcycle A, a possible equation linking V with t.<br>The value of motorcycle A is monitored over an 8-year period. Its value after 8 years is £2,500.<br><strong>(b)</strong> Evaluate the reliability of your model in light of this information.<br>The following information is available for motorcycle B:<br><ul><li>it has the same value, when new, as motorcycle A</li><li>its value depreciates more slowly than that of motorcycle A</li></ul><strong>(c)</strong> Explain how you would adapt the equation found in <strong>(a)</strong> so that it could be used to model the value of motorcycle B.",
                "steps": [
                        "<strong>Part (a):</strong> We define our exponential model in the standard form $V = A b^t$, where A is the initial value and b is the annual multiplier.",
                        "Using the initial condition when the motorcycle is new ($t = 0$):<br>\\begin{aligned}\n15000 &= A b^0 \\cr\nA &= 15000\n\\end{aligned}",
                        "Using the value after one year ($t = 1$):<br>\\begin{aligned}\n12000 &= 15000 b^1 \\cr\nb &= \\dfrac{12000}{15000} = 0.8\n\\end{aligned}",
                        "This gives our final exponential equation linking V with t:<br>$$V = 15000(0.8)^t$$",
                        "<strong>Part (b):</strong> We substitute $t = 8$ into our model to find the predicted value:<br>$$V = 15000(0.8)^8 \\approx 15000 \\times 0.16777 \\approx$$ £$2,517$$",
                        "The actual monitored value after 8 years is £2,500. Since our model's prediction of £2,517 is extremely close to the actual value, the model is highly reliable over this period.",
                        "<strong>Part (c):</strong> For motorcycle B, which depreciates more slowly, the value must decrease at a slower rate than $20\\\\%$ per year.<br>Therefore, the base of the exponent (currently 0.8) must be increased to a value closer to 1 (for example, 0.85 or some multiplier $r > 0.8$). The initial value remains at 15000.",
                        "Final Answer: <strong>(a)</strong> $V = 15000(0.8)^t$ <strong>(b)</strong> Model is highly reliable ($\\approx$ £2,517 vs £2,500) <strong>(c)</strong> Increase the base (e.g. $V = 15000(r)^t$ where $r > 0.8$)"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$V = 15000 - 3000t$$ <strong>(b)</strong> \\begin{aligned} & \\text{Model is highly reliable }\\cr & \\quad(\\approx £2,517\\text{ vs } £2,500)\\end{aligned} <strong>(c)</strong> \\begin{aligned} & \\text{Increase the base} \\cr \\text{(e.g. }V = & 15000(r)^t\\text{ where } r > 0.8\\text{)}\\end{aligned}",
                                "feedback": "You formed a linear depreciation model ($V = 15000 - 3000t$) instead of an exponential model in Part (a). Exponential models must be of the form $V = A b^t$ or $V = A \\text{e}^{ -kt }$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$V = 15000(0.8)^t$$ <strong>(b)</strong> \\begin{aligned} & \\text{Model is highly reliable }\\cr & \\quad(\\approx £2,517\\text{ vs } £2,500)$$ <strong>(c)</strong> \\begin{aligned} & \\text{Decrease the base} \\cr  \\text{ (e.g. } V = &  15000(r)^t  \\text{ where } r < 0.8\\text{)}\\end{aligned}",
                                "feedback": "Check your reasoning for Part (c). If motorcycle B depreciates more slowly, it retains more of its value each year. Therefore, its base multiplier r must be larger (closer to 1) than 0.8, not smaller."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$V = 15000(0.2)^t$$ <strong>(b)</strong>$$\\text{Model is completely unreliable}$$ <strong>(c)</strong>  \\begin{aligned} & \\text{Increase the base} \\cr \\text{ (e.g. }V = &  15000(r)^t  \\text{ where } r > 0.8\\text{)}\\end{aligned}",
                                "feedback": "When calculating the exponential base in Part (a), you probably used the rate of depreciation ($20\\\\% = 0.2$) instead of the remaining value multiplier ($1 - 0.2 = 0.8$). This sign error caused your model to predict the motorcycle's value as almost zero after 8 years."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Base Multipliers",
                        "content": "In GCE exponential modeling, the base of the exponent (b in $A b^t$) always represents the proportion of value retained each year. If an asset depreciates by $20\\\\%$, it retains $80\\\\%$ of its value, so $b = 0.8$. If it depreciates more slowly, it retains more value, so b must increase closer to 1."
                }
        },
        {
                "id": "004032",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "In a simple model, the value, £V, of an industrial machine depends on its age, t, in years.<br>The following information is available for machine A:<br><ul><li>its value when new is £50,000</li><li>its value after one year is £42,500</li></ul><strong>(a)</strong> Use an exponential model to form, for machine A, a possible equation linking V with t.<br>The value of machine A is monitored over a 12-year period. Its value after 12 years is £10,000.<br><strong>(b)</strong> Evaluate the reliability of your model in light of this information.<br>The following information is available for machine B:<br><ul><li>it has the same value, when new, as machine A</li><li>its value depreciates more slowly than that of machine A</li></ul><strong>(c)</strong> Explain how you would adapt the equation found in <strong>(a)</strong> so that it could be used to model the value of machine B.",
                "steps": [
                        "<strong>Part (a):</strong> We define our exponential model in the form $V = A b^t$, where A is the initial value and b is the annual multiplier.",
                        "Using the initial condition when the machine is new ($t = 0$):<br>\\begin{aligned}\n50000 &= A b^0 \\cr\nA &= 50000\n\\end{aligned}",
                        "Using the value after one year ($t = 1$):<br>\\begin{aligned}\n42500 &= 50000 b^1 \\cr\nb &= \\dfrac{42500}{50000} = 0.85\n\\end{aligned}",
                        "This gives our final exponential equation linking V with t:<br>$$V = 50000(0.85)^t$$",
                        "<strong>Part (b):</strong> We substitute $t = 12$ into our model to find the predicted value:<br>$$V = 50000(0.85)^{12} \\approx 50000 \\times 0.14224 \\approx$$ £$7,112$$",
                        "The actual monitored value after 12 years is £10,000. Since our model's prediction of £7,112 is significantly lower than the actual value, the model has weaker reliability over this period.",
                        "<strong>Part (c):</strong> For machine B, which depreciates more slowly, the value must decrease at a slower rate than $15\\\\%$ per year.<br>Therefore, the base of the exponent (currently 0.85) must be increased to a value closer to 1 (for example, 0.90 or some multiplier $r > 0.85$). The initial value remains at 50000.",
                        "Final Answer: <strong>(a)</strong> $V = 50000(0.85)^t$ <strong>(b)</strong> Model is less reliable (underestimates value by $\\approx$ £2,888) <strong>(c)</strong> Increase the base (e.g. $V = 50000(r)^t$ where $r > 0.85$)"
                ],
                "pi_options": [
                        {
                                                "ans": "<strong>(a)</strong> $$V = 50000(0.85)^t$$ <strong>(b)</strong> $$\\text{Model is highly reliable}$$ <strong>(c)</strong>  \\begin{aligned} & \\text{Increase the base} \\cr  \\text{(e.g. }V = &  50000(r)^t  \\text{ where } r > 0.85\\text{)}\\end{aligned}",
                                "feedback": "You probably evaluated the model's reliability incorrectly in Part (b). Our model's prediction is £7,112, which is significantly lower than the actual value of £10,000. An underestimation of almost $30\\\\%$ indicates that the model's reliability over this 12-year period is weaker."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$V = 50000 - 7500t$$ <strong>(b)</strong> SS\\text{Model is less reliable}$$ <strong>(c)</strong>  \\begin{aligned} & \\text{Increase the base} \\cr  \\text{ (e.g. }V = &  50000(r)^t  \\text{ where } r > 0.85\\text{)}\\end{aligned}",
                                "feedback": "You formed a linear depreciation model ($V = 50000 - 7500t$) instead of an exponential model in Part (a). Make sure you use the standard exponential structure $V = A b^t$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$V = 50000(0.85)^t$$ <strong>(b)</strong> $$\\text{Model is less reliable}$$ <strong>(c)</strong>  \\begin{aligned} & \\text{Decrease the base} \\cr  \\text{ (e.g. } V = &  50000(r)^t  \\text{ where } r < 0.85\\text{)}\\end{aligned}",
                                "feedback": "Check your reasoning for Part (c). If machine B depreciates more slowly, it retains more of its value each year. Therefore, its base multiplier r must be larger (closer to 1) than 0.85, not smaller."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Evaluating Reliability",
                        "content": "In applied modeling, evaluate reliability objectively by comparing the model's prediction with real-world data. If there is a substantial gap (like the underestimation in this question), state clearly that the model's reliability is weak over that timescale and explain whether it overestimates or underestimates reality."
                }
        },
        {
                "id": "004033",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "In a simple model, the value, £V, of a luxury yacht depends on its age, t, in years.<br>The following information is available for yacht A:<br><ul><li>its value when new is £100,000</li><li>its value after one year is £90,000</li></ul><strong>(a)</strong> Use an exponential model to form, for yacht A, a possible equation linking V with t.<br>The value of yacht A is monitored over a 10-year period. Its value after 10 years is £35,000.<br><strong>(b)</strong> Evaluate the reliability of your model in light of this information.<br>The following information is available for yacht B:<br><ul><li>it has the same value, when new, as yacht A</li><li>its value depreciates more slowly than that of yacht A</li></ul><strong>(c)</strong> Explain how you would adapt the equation found in <strong>(a)</strong> so that it could be used to model the value of yacht B.",
                "steps": [
                        "<strong>Part (a):</strong> We define our exponential model in the form $V = A b^t$, where A is the initial value and b is the annual multiplier.",
                        "Using the initial condition when the yacht is new ($t = 0$):<br>\\begin{aligned}\n100000 &= A b^0 \\cr\nA &= 100000\n\\end{aligned}",
                        "Using the value after one year ($t = 1$):<br>\\begin{aligned}\n90000 &= 100000 b^1 \\cr\nb &= \\dfrac{90000}{100000} = 0.9\n\\end{aligned}",
                        "This gives our final exponential equation linking V with t:<br>$$V = 100000(0.9)^t$$",
                        "<strong>Part (b):</strong> We substitute $t = 10$ into our model to find the predicted value:<br>$$V = 100000(0.9)^{10} \\approx 100000 \\times 0.34868 \\approx$$ £$34,868$$",
                        "The actual monitored value after 10 years is £35,000. Since our model's prediction of £34,868 is extremely close to the actual value, the model is highly reliable over this period.",
                        "<strong>Part (c):</strong> For yacht B, which depreciates more slowly, the value must decrease at a slower rate than $10\\\\%$ per year.<br>Therefore, the base of the exponent (currently 0.9) must be increased to a value closer to 1 (for example, 0.93 or some multiplier $r > 0.9$). The initial value remains at 100000.",
                        "Final Answer: <strong>(a)</strong> $V = 100000(0.9)^t$ <strong>(b)</strong> Model is highly reliable ($\\approx$ £34,868 vs £35,000) <strong>(c)</strong> Increase the base (e.g. $V = 100000(r)^t$ where $r > 0.9$)"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$V = 100000(0.9)^t$$ <strong>(b)</strong> \\begin{aligned} & \\text{Model is highly reliable }\\cr & (\\approx £34,868\\text{ vs } £35,000)\\end{aligned} <strong>(c)</strong> \\begin{aligned} & \\text{Decrease the base} \\cr  \\text{(e.g. } V = &  100000(r)^t  \\text{ where } r < 0.9\\text{)}\\end{aligned}",
                                "feedback": "Check your reasoning for Part (c). If yacht B depreciates more slowly, it retains more of its value each year. Therefore, its base multiplier r must be larger (closer to 1) than 0.9, not smaller."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$V = 100000 - 10000t$$ <strong>(b)</strong> $$\\text{Model is highly reliable}$$ <strong>(c)</strong> \\begin{aligned} & \\text{Increase the base} \\cr  \\text{ (e.g. }V = &  100000(r)^t  \\text{ where } r > 0.9\\text{)}\\end{aligned}",
                                "feedback": "You formed a linear depreciation model ($V = 100000 - 10000t$) instead of an exponential model in Part (a). Exponential models must be of the form $V = A b^t$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$V = 100000(0.1)^t$$ <strong>(b)</strong> $$\\text{Model is completely unreliable}$$ <strong>(c)</strong> \\begin{aligned} & \\text{Increase the base} \\cr  \\text{ (e.g. }V = &  100000(r)^t \\text{ where } r > 0.9\\text{)}\\end{aligned}",
                                "feedback": "When calculating the exponential base in Part (a), you probably used the rate of depreciation ($10\\\\% = 0.1$) instead of the remaining value multiplier ($1 - 0.1 = 0.9$). This error caused your model to predict the yacht's value as almost zero after 10 years."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Percentage Depreciation",
                        "content": "Always remember that an annual depreciation of $P\\\\%$ corresponds to an exponential multiplier of $r = 1 - \\frac{P}{100}$. For a luxury yacht depreciating at $10\\\\%$ per year, the multiplier is $r = 0.9$. This allows you to construct and adapt these models rapidly."
                }
        },
        {
                "id": "004034",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "In a simple model, the value, £V, of an agricultural tractor depends on its age, t, in years.<br>The following information is available for tractor A:<br><ul><li>its value when new is £40,000</li><li>its value after one year is £30,000</li></ul><strong>(a)</strong> Use an exponential model to form, for tractor A, a possible equation linking V with t.<br>The value of tractor A is monitored over an 8-year period. Its value after 8 years is £4,000.<br><strong>(b)</strong> Evaluate the reliability of your model in light of this information.<br>The following information is available for tractor B:<br><ul><li>it has the same value, when new, as tractor A</li><li>its value depreciates more slowly than that of tractor A</li></ul><strong>(c)</strong> Explain how you would adapt the equation found in <strong>(a)</strong> so that it could be used to model the value of tractor B.",
                "steps": [
                        "<strong>Part (a):</strong> We define our exponential model in the form $V = A b^t$, where A is the initial value and b is the annual multiplier.",
                        "Using the initial condition when the tractor is new ($t = 0$):<br>\\begin{aligned}\n40000 &= A b^0 \\cr\nA &= 40000\n\\end{aligned}",
                        "Using the value after one year ($t = 1$):<br>\\begin{aligned}\n30000 &= 40000 b^1 \\cr\nb &= \\dfrac{30000}{40000} = 0.75\n\\end{aligned}",
                        "This gives our final exponential equation linking V with t:<br>$$V = 40000(0.75)^t$$",
                        "<strong>Part (b):</strong> We substitute $t = 8$ into our model to find the predicted value:<br>$$V = 40000(0.75)^8 \\approx 40000 \\times 0.10011 \\approx$$ £$4,005$$",
                        "The actual monitored value after 8 years is £4,000. Since our model's prediction of £4,005 is extremely close to the actual value, the model is highly reliable over this period.",
                        "<strong>Part (c):</strong> For tractor B, which depreciates more slowly, the value must decrease at a slower rate than $25\\\\%$ per year.<br>Therefore, the base of the exponent (currently 0.75) must be increased to a value closer to 1 (for example, 0.80 or some multiplier $r > 0.75$). The initial value remains at 40000.",
                        "Final Answer: <strong>(a)</strong> $V = 40000(0.75)^t$ <strong>(b)</strong> Model is highly reliable ($\\approx$ £4,005 vs £4,000) <strong>(c)</strong> Increase the base (e.g. $V = 40000(r)^t$ where $r > 0.75$)"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong>  $$V = 40000(0.75)^t$$ <strong>(b)</strong>\\begin{aligned} & \\text{Model is highly reliable }\\cr & (\\approx £4,005\\text{ vs } £4,000)\\end{aligned} <strong>(c)</strong> \\begin{aligned} & \\text{Decrease the base} \\cr  \\text{(e.g. } V = &  40000(r)^t  \\text{ where } r < 0.75\\text{)}\\end{aligned}",
                                "feedback": "Check your reasoning for Part (c). If tractor B depreciates more slowly, it retains more of its value each year. Therefore, its base multiplier r must be larger (closer to 1) than 0.75, not smaller."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$V = 40000(0.25)^t$$ <strong>(b)</strong> $$\\text{Model is completely unreliable}$$ <strong>(c)</strong>\\begin{aligned} & \\text{Increase the base} \\cr  \\text{ (e.g. }V = &  40000(r)^t  \\text{ where } r > 0.75\\text{)}\\end{aligned}",
                                "feedback": "When calculating the exponential base in Part (a), you probably used the rate of depreciation ($25\\\\% = 0.25$) instead of the remaining value multiplier ($1 - 0.25 = 0.75$). This error caused your model to predict the tractor's value as almost zero after 8 years."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$V = 40000 - 1250t$$ <strong>(b)</strong> $$\\text{Model is highly reliable}$$ <strong>(c)</strong> \\begin{aligned} & \\text{Increase the base} \\cr  \\text{ (e.g. }V = &  40000(r)^t  \\text{ where } r > 0.75\\text{)}\\end{aligned}",
                                "feedback": "You formed a linear depreciation model ($V = 40000 - 1250t$) instead of an exponential model in Part (a). Exponential models must be of the form $V = A b^t$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Exponential decay curves",
                        "content": "In real-world engineering and agricultural economics, assets like tractors depreciate much faster in their first year than in subsequent years. Exponential curves capture this behavior mathematically far better than linear equations, which is why GCE exams heavily favor exponential models."
                }
        },
        {
                "id": "004035",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "In a simple model, the value, £V, of an electric vehicle (EV) depends on its age, t, in years.<br>The following information is available for EV A:<br><ul><li>its value when new is £30,000</li><li>its value after one year is £24,000</li></ul><strong>(a)</strong> Use an exponential model to form, for EV A, a possible equation linking V with t.<br>The value of EV A is monitored over a 6-year period. Its value after 6 years is £7,800.<br><strong>(b)</strong> Evaluate the reliability of your model in light of this information.<br>The following information is available for EV B:<br><ul><li>it has the same value, when new, as EV A</li><li>its value depreciates more slowly than that of EV A</li></ul><strong>(c)</strong> Explain how you would adapt the equation found in <strong>(a)</strong> so that it could be used to model the value of EV B.",
                "steps": [
                        "<strong>Part (a):</strong> We define our exponential model in the form $V = A b^t$, where A is the initial value and b is the annual multiplier.",
                        "Using the initial condition when the EV is new ($t = 0$):<br>\\begin{aligned}\n30000 &= A b^0 \\cr\nA &= 30000\n\\end{aligned}",
                        "Using the value after one year ($t = 1$):<br>\\begin{aligned}\n24000 &= 30000 b^1 \\cr\nb &= \\dfrac{24000}{30000} = 0.8\n\\end{aligned}",
                        "This gives our final exponential equation linking V with t:<br>$$V = 30000(0.8)^t$$",
                        "<strong>Part (b):</strong> We substitute $t = 6$ into our model to find the predicted value:<br>$$V = 30000(0.8)^6 \\approx 30000 \\times 0.26214 \\approx$$ £$7,864$$",
                        "The actual monitored value after 6 years is £7,800. Since our model's prediction of £7,864 is extremely close to the actual value, the model is highly reliable over this period.",
                        "<strong>Part (c):</strong> For EV B, which depreciates more slowly, the value must decrease at a slower rate than $20\\\\%$ per year.<br>Therefore, the base of the exponent (currently 0.8) must be increased to a value closer to 1 (for example, 0.85 or some multiplier $r > 0.8$). The initial value remains at 30000.",
                        "Final Answer: <strong>(a)</strong> $V = 30000(0.8)^t$ <strong>(b)</strong> Model is highly reliable ($\\approx$ £7,864 vs £7,800) <strong>(c)</strong> Increase the base (e.g. $V = 30000(r)^t$ where $r > 0.8$)"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$V = 30000(0.8)^t$$ <strong>(b)</strong> \\begin{aligned} &\\text{Model is highly reliable }\\cr &(\\approx\\text{£}7,864\\text{ vs } \\text{£}7,800)\\end{aligned} <strong>(c)</strong> \\begin{aligned} & \\text{Decrease the base}\\cr \\text{(e.g. } V = &  30000(r)^t  \\text{ where } r < 0.8\\text{)}\\end{aligned}",
                                "feedback": "Check your reasoning for Part (c). If EV B depreciates more slowly, it retains more of its value each year. Therefore, its base multiplier r must be larger (closer to 1) than 0.8, not smaller."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$V = 30000(0.2)^t$$ <strong>(b)</strong> $$\\text{Model is completely unreliable}$$ <strong>(c)</strong> \\begin{aligned} & \\text{Increase the base}\\cr \\text{ (e.g. }V = &  30000(r)^t  \\text{ where } r > 0.8\\text{)}\\end{aligned}",
                                "feedback": "When calculating the exponential base in Part (a), you probably used the rate of depreciation ($20\\\\% = 0.2$) instead of the remaining value multiplier ($1 - 0.2 = 0.8$). This error caused your model to predict the EV's value as almost zero after 6 years."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$V = 30000 - 6000t$$ <strong>(b)</strong> $$\\text{Model is highly reliable}$$ <strong>(c)</strong> \\begin{aligned} & \\text{Increase the base}\\cr \\text{ (e.g. }V = &  30000(r)^t \\text{ where } r > 0.8\\text{)}\\end{aligned}",
                                "feedback": "You formed a linear depreciation model ($V = 30000 - 6000t$) instead of an exponential model in Part (a). Exponential models must be of the form $V = A b^t$."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Generalizing Models",
                        "content": "In advanced applications, instead of changing the base b, you might see models written as $V = A \\text{e}^{ -kt }$. To model slower depreciation in this form, you would decrease the value of the decay constant k. Both approaches are mathematically equivalent and widely accepted."
                }
        },
        {
                "id": "004036",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Integration",
                "topic": "Integration",
                "subtopic": [
                        "Integration"
                ],
                "img": "images/Pure_SVGs/004036.svg",
                "question": "The diagram shows a sketch of part of the curve with equation:<br>$$y = x(x+1)(x-2)$$<br>The region $R_1$, shown shaded in the diagram, is bounded by the curve and the negative x-axis.<br><strong>(a)</strong> Show that the exact area of $R_1$ is $\\dfrac{5}{12}$.<br><br>The region $R_2$, also shown shaded in the diagram, is bounded by the curve, the positive x-axis, and the line with equation $x = b$, where b is a positive constant and $0 < b < 2$.<br>Given that the area of $R_1$ is equal to the area of $R_2$:<br><strong>(b)</strong> Verify that b satisfies the equation:<br>$$(b+1)^2(3b^2 - 10b + 5) = 0$$<br>The roots of the equation $3b^2 - 10b + 5 = 0$ are 0.613 and 2.721 to 3 decimal places. The value of b is therefore 0.613 to 3 decimal places.<br><strong>(c)</strong> Explain, with the aid of a diagram, the significance of the root 2.721.",
                "steps": [
                        "<strong>Part (a):</strong> First, we expand the cubic equation to make it easy to integrate:<br>\\begin{aligned}\ny &= x(x+1)(x-2) \\cr\n&= x(x^2 - x - 2) \\cr\n&= x^3 - x^2 - 2x\n\\end{aligned}",
                        "Since the region $R_1$ lies entirely above the x-axis between the roots $x = -1$ and $x = 0$, its exact area is given by the definite integral:<br>$$\\text{Area } R_1 = \\int_{ -1 }^{0} (x^3 - x^2 - 2x) \\text{ d}x$$<br>$$\\text{Area } R_1 = \\left[ \\frac{ x^4 }{4} - \\frac{ x^3 }{3} - x^2 \\right]_{ -1 }^{0}$$",
                        "Evaluating this at the limits 0 and -1:<br>$$\\text{Area } R_1 = 0 - \\left( \\frac{ (-1)^4 }{4} - \\frac{ (-1)^3 }{3} - (-1)^2 \\right)$$<br>\\begin{aligned}\n\\text{Area } R_1 &= - \\left( \\frac{1}{4} + \\frac{1}{3} - 1 \\right) \\cr\n&= - \\left( -\\frac{5}{12} \\right) \\cr\n&= \\frac{5}{12}\n\\end{aligned}",
                        "<strong>Part (b):</strong> Since $R_2$ lies entirely below the x-axis in the interval $0 < b < 2$, its area is given by the negative integral:<br>\\begin{aligned}\n\\text{Area } R_2 &= -\\int_{0}^{b} (x^3 - x^2 - 2x) \\text{ d}x \\cr\n&= -\\left[ \\frac{ x^4 }{4} - \\frac{ x^3 }{3} - x^2 \\right]_{0}^{b}\n\\end{aligned}<br>$$\\text{Area } R_2 = -\\left( \\frac{ b^4 }{4} - \\frac{ b^3 }{3} - b^2 \\right)$$",
                        "Setting $\\text{Area } R_1 = \\text{Area } R_2$ gives:<br>\\begin{aligned}\n\\frac{5}{12} &= -\\left( \\frac{ b^4 }{4} - \\frac{ b^3 }{3} - b^2 \\right) \\cr\n\\frac{ b^4 }{4} - \\frac{ b^3 }{3} - b^2 + \\frac{5}{12} &= 0\n\\end{aligned}<br>Multiplying the entire equation by 12 to clear the fractions:<br>$$3b^4 - 4b^3 - 12b^2 + 5 = 0$$",
                        "We can verify that this factorises to $(b+1)^2(3b^2 - 10b + 5) = 0$ by expanding the brackets:<br>$$(b^2 + 2b + 1)(3b^2 - 10b + 5) = b^2(3b^2 - 10b + 5) + 2b(3b^2 - 10b + 5) + 1(3b^2 - 10b + 5)$$<br>$$= 3b^4 - 10b^3 + 5b^2 + 6b^3 - 20b^2 + 10b + 3b^2 - 10b + 5$$<br>\\begin{aligned}\n &= 3b^4 - 4b^3 - 12b^2 + 5 \\cr\n&= 0 \\quad \\text{(verified)}\n\\end{aligned}",
                        "<strong>Part (c):</strong> The root $b \\approx 2.721$ lies to the right of the root $x = 2$, which is outside our interval of validity $0 < b < 2$.<br>Geometrically, this value represents an upper limit where the total net signed area from 0 to 2.721 integrates to $-\\frac{5}{12}$. This occurs because the negative area of the lower lobe (between 0 and 2) is partially cancelled out by the positive area of the upper lobe (between 2 and 2.721).<br><br>Here is the diagram showing this relationship:<br><img src='images/Pure_SVGs/004036_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
                        "Final Answer: <strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{5}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 10b + 5) = 0 \\quad \\text{is verified}$$ <strong>(c)</strong> $$b \\approx 2.721\\\\\\ \\text{represents the point of signed area cancellation}$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = -\\dfrac{5}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 10b + 5) = 0$$ <strong>(c)</strong> $$b \\approx 2.721\\\\\\ \\text{represents a turning point}$$",
                                "feedback": "Check your integration signs in Part (a). Because the region $R_1$ lies strictly above the x-axis, its area must be a positive value: $\\frac{5}{12}$, not $-\\frac{5}{12}$. Area is a physical quantity and cannot be negative."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{5}{12}$$ <strong>(b)</strong> $$(b-1)^2(3b^2 - 10b + 5) = 0$$ <strong>(c)</strong> $$b \\approx 2.721\\\\\\ \\text{represents area cancellation}$$",
                                "feedback": "You probably made a sign error in the double-root factor in Part (b). Since the double root originates from the negative root of the cubic ($x = -1$), the factor must be $(b + 1)^2$, not $(b - 1)^2$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{5}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 10b + 5) = 0$$ <strong>(c)</strong> $$b \\approx 2.721\\\\\\ \\text{is the local minimum of the curve}$$",
                                "feedback": "Check your explanation in Part (c). The value 2.721 is a root of our quartic area equation; it has no relation to the turning points of the curve. It represents the point where the positive area above the axis cancels the excess negative area below the axis."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Net Area Cancellation",
                        "content": "When integrating past a root (like $x = 2$ in this question), the curve changes sign. Definite integration calculates <strong>signed area</strong>, meaning regions above the axis are positive, and regions below are negative. The root 2.721 is simply the algebraic point where these positive and negative lobes balance out."
                }
        },
        {
                "id": "004037",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Integration",
                "topic": "Integration",
                "subtopic": [
                        "Integration"
                ],
                "img": "images/Pure_SVGs/004037.svg",
                "question": "The diagram shows a sketch of part of the curve with equation:<br>$$y = x(x+1)(x-3)$$<br>The region $R_1$, shown shaded in the diagram, is bounded by the curve and the negative x-axis.<br><strong>(a)</strong> Show that the exact area of $R_1$ is $\\dfrac{7}{12}$.<br><br>The region $R_2$, also shown shaded in the diagram, is bounded by the curve, the positive x-axis, and the line with equation $x = b$, where b is a positive constant and $0 < b < 3$.<br>Given that the area of $R_1$ is equal to the area of $R_2$:<br><strong>(b)</strong> Verify that b satisfies the equation:<br>$$(b+1)^2(3b^2 - 14b + 7) = 0$$<br>The roots of the equation $3b^2 - 14b + 7 = 0$ are 0.570 and 4.097 to 3 decimal places. The value of b is therefore 0.570 to 3 decimal places.<br><strong>(c)</strong> Explain, with the aid of a diagram, the significance of the root 4.097.",
                "steps": [
                        "<strong>Part (a):</strong> First, we expand the cubic equation to make it easy to integrate:<br>\\begin{aligned}\ny &= x(x+1)(x-3) \\cr\n&= x(x^2 - 2x - 3) \\cr\n&= x^3 - 2x^2 - 3x\n\\end{aligned}",
                        "Since the region $R_1$ lies entirely above the x-axis between $x = -1$ and $x = 0$, its exact area is given by the definite integral:<br>$$\\text{Area } R_1 = \\int_{ -1 }^{0} (x^3 - 2x^2 - 3x) \\text{ d}x$$<br>$$\\text{Area } R_1 = \\left[ \\frac{ x^4 }{4} - \\frac{ 2x^3 }{3} - \\frac{ 3x^2 }{2} \\right]_{ -1 }^{0}$$",
                        "Evaluating this at the limits 0 and -1:<br>$$\\text{Area } R_1 = 0 - \\left( \\frac{ (-1)^4 }{4} - \\frac{ 2(-1)^3 }{3} - \\frac{ 3(-1)^2 }{2} \\right)$$<br>\\begin{aligned}\n\\text{Area } R_1 &= - \\left( \\frac{1}{4} + \\frac{2}{3} - \\frac{3}{2} \\right) \\cr\n&= - \\left( -\\frac{7}{12} \\right) \\cr\n&= \\frac{7}{12}\n\\end{aligned}",
                        "<strong>Part (b):</strong> Since $R_2$ lies entirely below the x-axis in the interval $0 < b < 3$, its area is given by the negative integral:<br>\\begin{aligned}\n\\text{Area } R_2 &= -\\int_{0}^{b} (x^3 - 2x^2 - 3x) \\text{ d}x \\cr\n&= -\\left[ \\frac{ x^4 }{4} - \\frac{ 2x^3 }{3} - \\frac{ 3x^2 }{2} \\right]_{0}^{b}\n\\end{aligned}<br>$$\\text{Area } R_2 = -\\left( \\frac{ b^4 }{4} - \\frac{ 2b^3 }{3} - \\frac{ 3b^2 }{2} \\right)$$",
                        "Setting $\\text{Area } R_1 = \\text{Area } R_2$ gives:<br>\\begin{aligned}\n\\frac{7}{12} &= -\\left( \\frac{ b^4 }{4} - \\frac{ 2b^3 }{3} - \\frac{ 3b^2 }{2} \\right) \\cr\n\\frac{ b^4 }{4} - \\frac{ 2b^3 }{3} - \\frac{ 3b^2 }{2} + \\frac{7}{12} &= 0\n\\end{aligned}<br>Multiplying the entire equation by 12 to clear the fractions:<br>$$3b^4 - 8b^3 - 18b^2 + 7 = 0$$",
                        "We can verify that this factorises to $(b+1)^2(3b^2 - 14b + 7) = 0$ by expanding the brackets:<br>$$(b^2 + 2b + 1)(3b^2 - 14b + 7) = b^2(3b^2 - 14b + 7) + 2b(3b^2 - 14b + 7) + 1(3b^2 - 14b + 7)$$<br>$$= 3b^4 - 14b^3 + 7b^2 + 6b^3 - 28b^2 + 14b + 3b^2 - 14b + 7$$<br>\\begin{aligned}\n &= 3b^4 - 8b^3 - 18b^2 + 7 \\cr\n&= 0 \\quad \\text{(verified)}\n\\end{aligned}",
                        "<strong>Part (c):</strong> The root $b \\approx 4.097$ lies to the right of the root $x = 3$, which is outside our interval of validity $0 < b < 3$.<br>Geometrically, this value represents an upper limit where the total net signed area from 0 to 4.097 integrates to $-\\frac{7}{12}$. This occurs because the negative area of the lower lobe (between 0 and 3) is partially cancelled out by the positive area of the upper lobe (between 3 and 4.097).<br><br>Here is the diagram showing this relationship:<br><img src='images/Pure_SVGs/004037_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
                        "Final Answer: <strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{7}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 14b + 7) = 0 \\quad \\text{is verified}$$ <strong>(c)</strong> $$b \\approx 4.097\\\\\\ \\text{represents the point of signed area cancellation}$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = -\\dfrac{7}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 14b + 7) = 0$$ <strong>(c)</strong> $$b \\approx 4.097\\\\\\ \\text{represents a turning point}$$",
                                "feedback": "Check your integration signs in Part (a). Because the region $R_1$ lies strictly above the x-axis, its area must be positive: $\\frac{7}{12}$, not $-\\frac{7}{12}$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{7}{12}$$ <strong>(b)</strong> $$(b-1)^2(3b^2 - 14b + 7) = 0$$ <strong>(c)</strong> $$b \\approx 4.097\\\\\\ \\text{represents area cancellation}$$",
                                "feedback": "You probably made a sign error in the double-root factor in Part (b). Since the double root originates from the negative root of the cubic ($x = -1$), the factor must be $(b + 1)^2$, not $(b - 1)^2$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{7}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 14b + 7) = 0$$ <strong>(c)</strong> $$b \\approx 4.097\\\\\\ \\text{is the local minimum of the curve}$$",
                                "feedback": "Check your explanation in Part (c). The value 4.097 is a root of our quartic area equation; it has no relation to the turning points of the curve."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Verifying Factors",
                        "content": "In Part (b), if you are asked to 'verify' a factorization rather than find it, you do not need to perform long algebraic division on the quartic. It is much faster and less error-prone to simply expand the bracketed expression $(b+a)^2(quadratic)$ and show it equals your quartic equation."
                }
        },
        {
                "id": "004038",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Integration",
                "topic": "Integration",
                "subtopic": [
                        "Integration"
                ],
                "img": "images/Pure_SVGs/004038.svg",
                "question": "The diagram shows a sketch of part of the curve with equation:<br>$$y = x(x+2)(x-3)$$<br>The region $R_1$, shown shaded in the diagram, is bounded by the curve and the negative x-axis.<br><strong>(a)</strong> Show that the exact area of $R_1$ is $\\dfrac{16}{3}$.<br><br>The region $R_2$, also shown shaded in the diagram, is bounded by the curve, the positive x-axis, and the line with equation $x = b$, where b is a positive constant and $0 < b < 3$.<br>Given that the area of $R_1$ is equal to the area of $R_2$:<br><strong>(b)</strong> Verify that b satisfies the equation:<br>$$(b+2)^2(3b^2 - 16b + 16) = 0$$<br>The roots of the equation $3b^2 - 16b + 16 = 0$ are $\\dfrac{4}{3}$ and 4. The value of b is therefore $\\dfrac{4}{3}$.<br><strong>(c)</strong> Explain, with the aid of a diagram, the significance of the root 4.",
                "steps": [
                        "<strong>Part (a):</strong> First, we expand the cubic equation to make it easy to integrate:<br>\\begin{aligned}\ny &= x(x+2)(x-3) \\cr\n&= x(x^2 - x - 6) \\cr\n&= x^3 - x^2 - 6x\n\\end{aligned}",
                        "Since the region $R_1$ lies entirely above the x-axis between $x = -2$ and $x = 0$, its exact area is given by the definite integral:<br>$$\\text{Area } R_1 = \\int_{ -2 }^{0} (x^3 - x^2 - 6x) \\text{ d}x$$<br>$$\\text{Area } R_1 = \\left[ \\frac{ x^4 }{4} - \\frac{ x^3 }{3} - 3x^2 \\right]_{ -2 }^{0}$$",
                        "Evaluating this at the limits 0 and -2:<br>$$\\text{Area } R_1 = 0 - \\left( \\frac{ (-2)^4 }{4} - \\frac{ (-2)^3 }{3} - 3(-2)^2 \\right)$$<br>\\begin{aligned}\n\\text{Area } R_1 &= - \\left( 4 + \\frac{8}{3} - 12 \\right) \\cr\n&= - \\left( -\\frac{16}{3} \\right) \\cr\n&= \\frac{16}{3}\n\\end{aligned}",
                        "<strong>Part (b):</strong> Since $R_2$ lies entirely below the x-axis in the interval $0 < b < 3$, its area is given by the negative integral:<br>\\begin{aligned}\n\\text{Area } R_2 &= -\\int_{0}^{b} (x^3 - x^2 - 6x) \\text{ d}x \\cr\n&= -\\left[ \\frac{ x^4 }{4} - \\frac{ x^3 }{3} - 3x^2 \\right]_{0}^{b}\n\\end{aligned}<br>$$\\text{Area } R_2 = -\\left( \\frac{ b^4 }{4} - \\frac{ b^3 }{3} - 3b^2 \\right)$$",
                        "Setting $\\text{Area } R_1 = \\text{Area } R_2$ gives:<br>\\begin{aligned}\n\\frac{16}{3} &= -\\left( \\frac{ b^4 }{4} - \\frac{ b^3 }{3} - 3b^2 \\right) \\cr\n\\frac{ b^4 }{4} - \\frac{ b^3 }{3} - 3b^2 + \\frac{16}{3} &= 0\n\\end{aligned}<br>Multiplying the entire equation by 12 to clear the fractions:<br>$$3b^4 - 4b^3 - 36b^2 + 64 = 0$$",
                        "We can verify that this factorises to $(b+2)^2(3b^2 - 16b + 16) = 0$ by expanding the brackets:<br>$$(b^2 + 4b + 4)(3b^2 - 16b + 16) = b^2(3b^2 - 16b + 16) + 4b(3b^2 - 16b + 16) + 4(3b^2 - 16b + 16)$$<br>$$= 3b^4 - 16b^3 + 16b^2 + 12b^3 - 64b^2 + 64b + 12b^2 - 64b + 64$$<br>\\begin{aligned}\n &= 3b^4 - 4b^3 - 36b^2 + 64 \\cr\n&= 0 \\quad \\text{(verified)}\n\\end{aligned}",
                        "<strong>Part (c):</strong> The root $b = 4$ lies to the right of the root $x = 3$, which is outside our interval of validity $0 < b < 3$.<br>Geometrically, this value represents an upper limit where the total net signed area from 0 to 4 integrates to $-\\frac{16}{3}$. This occurs because the negative area of the lower lobe (between 0 and 3) is partially cancelled out by the positive area of the upper lobe (between 3 and 4).<br><br>Here is the diagram showing this relationship:<br><img src='images/Pure_SVGs/004038_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
                        "Final Answer: <strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{16}{3}$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 16b + 16) = 0 \\quad \\text{is verified}$$ <strong>(c)</strong> $b = 4$ \\text{represents the point of signed area cancellation}"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = -\\dfrac{16}{3}$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 16b + 16) = 0$$ <strong>(c)</strong> $b = 4$ \\text{represents a turning point}",
                                "feedback": "Check your integration signs in Part (a). Because the region $R_1$ lies strictly above the x-axis, its area must be positive: $\\frac{16}{3}$, not $-\\frac{16}{3}$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{16}{3}$$ <strong>(b)</strong> $$(b-2)^2(3b^2 - 16b + 16) = 0$$ <strong>(c)</strong> $b = 4$ \\text{represents area cancellation}",
                                "feedback": "You probably made a sign error in the double-root factor in Part (b). Since the double root originates from the negative root of the cubic ($x = -2$), the factor must be $(b + 2)^2$, not $(b - 2)^2$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{16}{3}$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 16b + 16) = 0$$ <strong>(c)</strong> $b = 4$ \\text{is the local minimum of the curve}",
                                "feedback": "Check your explanation in Part (c). The value 4 is a root of our quartic area equation; it has no relation to the turning points of the curve."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Beautiful Exact Roots",
                        "content": "Notice how this question resolves to perfectly exact rational and integer roots ($\\frac{4}{3}$ and 4). In exam conditions, when your calculations collapse into clean integers rather than long decimals, you can have high confidence that your algebraic working is correct."
                }
        },
        {
                "id": "004039",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Integration",
                "topic": "Integration",
                "subtopic": [
                        "Integration"
                ],
                "img": "images/Pure_SVGs/004039.svg",
                "question": "The diagram shows a sketch of part of the curve with equation:<br>$$y = x(x+3)(x-3)$$<br>The region $R_1$, shown shaded in the diagram, is bounded by the curve and the negative x-axis.<br><strong>(a)</strong> Show that the exact area of $R_1$ is $\\dfrac{81}{4}$.<br><br>The region $R_2$, also shown shaded in the diagram, is bounded by the curve, the positive x-axis, and the line with equation $x = b$, where b is a positive constant and $0 < b < 3$.<br>Given that the area of $R_1$ is equal to the area of $R_2$:<br><strong>(b)</strong> Verify that b satisfies the equation:<br>$$(b+3)^2(b-3)^2 = 0$$<br>The root of the equation $(b-3)^2 = 0$ is 3. The value of b is therefore 3.<br><strong>(c)</strong> Explain, with the aid of a diagram, the significance of this root.",
                "steps": [
                        "<strong>Part (a):</strong> First, we expand the cubic equation to make it easy to integrate:<br>\\begin{aligned}\ny &= x(x+3)(x-3) \\cr\n&= x(x^2 - 9) \\cr\n&= x^3 - 9x\n\\end{aligned}",
                        "Since the region $R_1$ lies entirely above the x-axis between $x = -3$ and $x = 0$, its exact area is given by the definite integral:<br>$$\\text{Area } R_1 = \\int_{ -3 }^{0} (x^3 - 9x) \\text{ d}x$$<br>$$\\text{Area } R_1 = \\left[ \\frac{ x^4 }{4} - \\frac{ 9x^2 }{2} \\right]_{ -3 }^{0}$$",
                        "Evaluating this at the limits 0 and -3:<br>$$\\text{Area } R_1 = 0 - \\left( \\frac{ (-3)^4 }{4} - \\frac{ 9(-3)^2 }{2} \\right)$$<br>\\begin{aligned}\n\\text{Area } R_1 &= - \\left( \\frac{81}{4} - \\frac{81}{2} \\right) \\cr\n&= - \\left( -\\frac{81}{4} \\right) \\cr\n&= \\frac{81}{4}\n\\end{aligned}",
                        "<strong>Part (b):</strong> Since $R_2$ lies entirely below the x-axis in the interval $0 < b < 3$, its area is given by the negative integral:<br>\\begin{aligned}\n\\text{Area } R_2 &= -\\int_{0}^{b} (x^3 - 9x) \\text{ d}x \\cr\n&= -\\left[ \\frac{ x^4 }{4} - \\frac{ 9x^2 }{2} \\right]_{0}^{b}\n\\end{aligned}<br>$$\\text{Area } R_2 = -\\left( \\frac{ b^4 }{4} - \\frac{ 9b^2 }{2} \\right)$$",
                        "Setting $\\text{Area } R_1 = \\text{Area } R_2$ gives:<br>\\begin{aligned}\n\\frac{81}{4} &= -\\left( \\frac{ b^4 }{4} - \\frac{ 9b^2 }{2} \\right) \\cr\n\\frac{ b^4 }{4} - \\frac{ 9b^2 }{2} + \\frac{81}{4} &= 0\n\\end{aligned}<br>Multiplying the entire equation by 4 to clear the fractions:<br>$$b^4 - 18b^2 + 81 = 0$$",
                        "We can verify that this factorises to $(b+3)^2(b-3)^2 = 0$ (which is $(b^2 - 9)^2 = 0$) by expanding the brackets:<br>\\begin{aligned}\n(b^2 - 9)^2 &= (b^2)^2 - 2(9)(b^2) + 81 \\cr\n&= b^4 - 18b^2 + 81 \\cr\n&= 0 \\quad \\text{(verified)}\n\\end{aligned}",
                        "<strong>Part (c):</strong> The root $b = 3$ is exactly the second positive root of the cubic equation.<br>Geometrically, choosing $b = 3$ means that $R_2$ is the entire negative lobe of the curve between 0 and 3. Because $y = x^3 - 9x$ is an odd function, it is perfectly symmetric about the origin, meaning the area of the positive lobe $R_1$ is identical to the area of the negative lobe $R_2$.<br><br>Here is the diagram showing this symmetry:<br><img src='images/Pure_SVGs/004039_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
                        "Final Answer: <strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{81}{4}$$ <strong>(b)</strong> $$(b+3)^2(b-3)^2 = 0 \\quad \\text{is verified}$$ <strong>(c)</strong> $b = 3$ \\text{represents the symmetric opposite lobe boundary}"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = -\\dfrac{81}{4}$$ <strong>(b)</strong> $$(b+3)^2(b-3)^2 = 0$$ <strong>(c)</strong> $b = 3$ \\text{represents a turning point}",
                                "feedback": "Check your integration signs in Part (a). Because the region $R_1$ lies strictly above the x-axis, its area must be positive: $\\frac{81}{4}$, not $-\\frac{81}{4}$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{81}{4}$$ <strong>(b)</strong> $$(b-3)^4 = 0$$ <strong>(c)</strong> $b = 3$ \\text{is the local minimum of the curve}",
                                "feedback": "You probably made an expansion error in Part (b). $b^4 - 18b^2 + 81$ is a quadratic in $b^2$, which factorises to $(b^2 - 9)^2 = (b+3)^2(b-3)^2 = 0$, not $(b-3)^4$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{81}{4}$$ <strong>(b)</strong> $$(b+3)^2(b-3)^2 = 0$$ <strong>(c)</strong> $b = 3$ \\text{is the turning point of the curve}",
                                "feedback": "Check your explanation in Part (c). The value 3 is the x-int of the cubic, not its turning point. It represents the boundary where the two identical lobes are symmetric."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Exploiting Symmetry",
                        "content": "When a curve is symmetric about the origin (an odd function), the integral over symmetric intervals has equal magnitudes. Here, the positive lobe from -3 to 0 is identical in shape and area to the negative lobe from 0 to 3. Keeping an eye out for odd and even functions is a great way to double-check your areas."
                }
        },
        {
                "id": "004040",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Integration",
                "topic": "Integration",
                "subtopic": [
                        "Integration"
                ],
                "img": "images/Pure_SVGs/004040.svg",
                "question": "The diagram shows a sketch of part of the curve with equation:<br>$$y = x(x+2)(x-5)$$<br>The region $R_1$, shown shaded in the diagram, is bounded by the curve and the negative x-axis.<br><strong>(a)</strong> Show that the exact area of $R_1$ is 8.<br><br>The region $R_2$, also shown shaded in the diagram, is bounded by the curve, the positive x-axis, and the line with equation $x = b$, where b is a positive constant and $0 < b < 5$.<br>Given that the area of $R_1$ is equal to the area of $R_2$:<br><strong>(b)</strong> Verify that b satisfies the equation:<br>$$(b+2)^2(3b^2 - 24b + 24) = 0$$<br>The roots of the equation $3b^2 - 24b + 24 = 0$ are 1.172 and 6.828 to 3 decimal places. The value of b is therefore 1.172 to 3 decimal places.<br><strong>(c)</strong> Explain, with the aid of a diagram, the significance of the root 6.828.",
                "steps": [
                        "<strong>Part (a):</strong> First, we expand the cubic equation to make it easy to integrate:<br>\\begin{aligned}\ny &= x(x+2)(x-5) \\cr\n&= x(x^2 - 3x - 10) \\cr\n&= x^3 - 3x^2 - 10x\n\\end{aligned}",
                        "Since the region $R_1$ lies entirely above the x-axis between $x = -2$ and $x = 0$, its exact area is given by the definite integral:<br>$$\\text{Area } R_1 = \\int_{ -2 }^{0} (x^3 - 3x^2 - 10x) \\text{ d}x$$<br>$$\\text{Area } R_1 = \\left[ \\frac{ x^4 }{4} - x^3 - 5x^2 \\right]_{ -2 }^{0}$$",
                        "Evaluating this at the limits 0 and -2:<br>$$\\text{Area } R_1 = 0 - \\left( \\frac{ (-2)^4 }{4} - (-2)^3 - 5(-2)^2 \\right)$$<br>\\begin{aligned}\n\\text{Area } R_1 &= - \\left( 4 + 8 - 20 \\right) \\cr\n&= - \\left( -8 \\right) \\cr\n&= 8\n\\end{aligned}",
                        "<strong>Part (b):</strong> Since $R_2$ lies entirely below the x-axis in the interval $0 < b < 5$, its area is given by the negative integral:<br>\\begin{aligned}\n\\text{Area } R_2 &= -\\int_{0}^{b} (x^3 - 3x^2 - 10x) \\text{ d}x \\cr\n&= -\\left[ \\frac{ x^4 }{4} - x^3 - 5x^2 \\right]_{0}^{b}\n\\end{aligned}<br>$$\\text{Area } R_2 = -\\left( \\frac{ b^4 }{4} - b^3 - 5b^2 \\right)$$",
                        "Setting $\\text{Area } R_1 = \\text{Area } R_2$ gives:<br>\\begin{aligned}\n8 &= -\\left( \\frac{ b^4 }{4} - b^3 - 5b^2 \\right) \\cr\n\\frac{ b^4 }{4} - b^3 - 5b^2 + 8 &= 0\n\\end{aligned}<br>Multiplying the entire equation by 4 to clear the fractions:<br>$$b^4 - 4b^3 - 20b^2 + 32 = 0$$",
                        "We can verify that this factorises to $(b+2)^2(b^2 - 8b + 8) = 0$ (which is equivalent to $(b+2)^2(3b^2 - 24b + 24) = 0$ upon multiplying the quadratic by 3) by expanding the brackets:<br>$$(b^2 + 4b + 4)(3b^2 - 24b + 24) = b^2(3b^2 - 24b + 24) + 4b(3b^2 - 24b + 24) + 4(3b^2 - 24b + 24)$$<br>$$= 3b^4 - 24b^3 + 24b^2 + 12b^3 - 96b^2 + 96b + 12b^2 - 96b + 94$$<br>Wait! Let's check the constants:<br>$$4 \\times 24 = 96$$. So the expansion yields:<br>\\begin{aligned}\n3b^4 - 12b^3 - 60b^2 + 96 &= 0 \\cr\n3(b^4 - 4b^3 - 20b^2 + 32) &= 0 \\quad \\text{(verified)}\n\\end{aligned}",
                        "<strong>Part (c):</strong> The root $b \\approx 6.828$ lies to the right of the root $x = 5$, which is outside our interval of validity $0 < b < 5$.<br>Geometrically, this value represents an upper limit where the total net signed area from 0 to 6.828 integrates to -8. This occurs because the negative area of the lower lobe (between 0 and 5) is partially cancelled out by the positive area of the upper lobe (between 5 and 6.828).<br><br>Here is the diagram showing this relationship:<br><img src='images/Pure_SVGs/004040_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
                        "Final Answer: <strong>(a)</strong> $$\\text{Area } R_1 = 8$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 24b + 24) = 0 \\quad \\text{is verified}$$ <strong>(c)</strong> $$b \\approx 6.828\\\\\\ \\text{represents the point of signed area cancellation}$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = -8$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 24b + 24) = 0$$ <strong>(c)</strong> $$b \\approx 6.828\\\\\\ \\text{represents a turning point}$$",
                                "feedback": "Check your integration signs in Part (a). Because the region $R_1$ lies strictly above the x-axis, its area must be positive: 8, not -8."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = 8$$ <strong>(b)</strong> $$(b-2)^2(3b^2 - 24b + 24) = 0$$ <strong>(c)</strong> $$b \\approx 6.828\\\\\\ \\text{represents area cancellation}$$",
                                "feedback": "You probably made a sign error in the double-root factor in Part (b). Since the double root originates from the negative root of the cubic ($x = -2$), the factor must be $(b + 2)^2$, not $(b - 2)^2$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = 8$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 24b + 24) = 0$$ <strong>(c)</strong> $$b \\approx 6.828\\\\\\ \\text{is the local minimum of the curve}$$",
                                "feedback": "Check your explanation in Part (c). The value 6.828 is a root of our quartic area equation; it has no relation to the turning points of the curve."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Definite Integral Bounds",
                        "content": "Always remember that the definite integral of a function between a and b calculates the <strong>net</strong> area. If your curve lies both below and above the axis over your interval, the positive and negative regions will actively cancel each other out in the final result."
                }
        },
        {
                "id": "004041",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Logarithm Laws"
                ],
                "img": false,
                "question": "Given that $a > 0$ and $b > 0$, and that a and b satisfy the equation:<br>$$\\log a + \\log b = \\log(a + b)$$<br><strong>(a)</strong> Show that:<br>$$a = \\dfrac{b}{ b - 1 }$$<br><strong>(b)</strong> Write down the full restriction on the value of b, explaining the reason for this restriction.",
                "steps": [
                        "<strong>Part (a):</strong> We begin by applying the logarithm addition law, $\\log(x) + \\log(y) = \\log(xy)$, to the left-hand side of our equation:<br>$$\\log(ab) = \\log(a + b)$$,",
                        "Since the logarithmic function is one-to-one, we can remove the logarithms from both sides of the equation:<br>$$ab = a + b$$",
                        "Next, we rearrange the equation to group all terms containing the variable a together on one side:<br>$$ab - a = b$$",
                        "Factorising out a from the left-hand side:<br>$$a(b - 1) = b$$",
                        "Dividing both sides of the equation by (b - 1) gives our target proof:<br>$$a = \\dfrac{b}{ b - 1 }$$",
                        "<strong>Part (b):</strong> For the logarithmic terms to be defined in the original equation, we are given that $a > 0$ and $b > 0$.",
                        "Looking at our equation $a = \\dfrac{b}{ b - 1 }$, since a must be strictly positive ($a > 0$) and the numerator is positive ($b > 0$), the denominator must also be positive to ensure a positive quotient:<br>$$b - 1 > 0 \\implies b > 1$$",
                        "Final Answer: <strong>(a)</strong> $$a = \\dfrac{b}{ b - 1 }\\\\\\ \\text{is verified}$$ <strong>(b)</strong> $$b > 1$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$a = \\dfrac{b}{ b - 1 }$$ <strong>(b)</strong> $$b > 0$$",
                                "feedback": "You probably forgot to account for the positiveness of a when setting your restriction in Part (b). If $b > 0$ but $b < 1$, then the denominator (b-1) would be negative, making a negative. This violates the original condition that $a > 0$ for $\\log a$ to be defined."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$a = \\dfrac{b}{ 1 - b }$$ <strong>(b)</strong> $$b > 1$$",
                                "feedback": "Check your algebraic signs when grouping your a terms in Part (a). Moving a to the left-hand side yields $ab - a = b \\implies a(b - 1) = b$. Be careful not to swap the subtraction order."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$a = \\dfrac{b}{ b - 1 }$$ <strong>(b)</strong> $$b \\ge 1$$",
                                "feedback": "Check your inequality boundary in Part (b). If $b = 1$ exactly, the denominator (b-1) becomes 0, making the fraction undefined. Therefore, the restriction must be a strict inequality: $b > 1$, not $b \\ge 1$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Base Restrictions",
                        "content": "In this question, always look back at the original parameters. Logarithmic inputs must be strictly positive. When finding restrictions on a variable in algebraic proofs, your final value must satisfy both the general domain of the function and the specific inequalities of the question."
                }
        },
        {
                "id": "004042",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Logarithm Laws"
                ],
                "img": false,
                "question": "Given that $a > b > 0$, and that a and b satisfy the equation:<br>$$\\log a - 2\\log b = \\log(a - b)$$<br><strong>(a)</strong> Show that:<br>$$a = \\dfrac{ b^3 }{ b^2 - 1 }$$<br><strong>(b)</strong> Write down the full restriction on the value of b, explaining the reason for this restriction.",
                "steps": [
                        "<strong>Part (a):</strong> We begin by applying the logarithm power law, $c\\log(x) = \\log(x^c)$, to the second term on the left-hand side:<br>$$\\log a - \\log(b^2) = \\log(a - b)$$",
                        "Applying the logarithm subtraction law, $\\log(x) - \\log(y) = \\log\\left(\\frac{x}{y}\\right)$:<br>$$\\log\\left(\\dfrac{a}{ b^2 }\\right) = \\log(a - b)$$",
                        "Removing the logarithms from both sides of the equation:<br>$$\\dfrac{a}{ b^2 } = a - b$$",
                        "Multiplying both sides by $b^2$ to eliminate the fraction:<br>\\begin{aligned}\na &= b^2(a - b) \\cr\na &= ab^2 - b^3\n\\end{aligned}",
                        "Rearranging to group all terms containing the variable a together on the right-hand side:<br>$$b^3 = ab^2 - a$$",
                        "Factorising out a from the right-hand side:<br>$$b^3 = a(b^2 - 1)$$",
                        "Dividing both sides of the equation by $(b^2 - 1)$ gives our target proof:<br>$$a = \\dfrac{ b^3 }{ b^2 - 1 }$$",
                        "<strong>Part (b):</strong> For the logarithmic terms to be defined, we require $a > b > 0$ and $a - b > 0$.",
                        "Looking at our equation $a = \\dfrac{ b^3 }{ b^2 - 1 }$, since a must be strictly positive ($a > 0$) and the numerator is positive ($b^3 > 0$, as $b > 0$), the denominator must also be positive to ensure a positive quotient:<br>$$b^2 - 1 > 0 \\implies b^2 > 1$$<br>Since $b > 0$, this yields the strict restriction:<br>$$b > 1$$",
                        "Final Answer: <strong>(a)</strong> $$a = \\dfrac{ b^3 }{ b^2 - 1 }\\\\\\ \\text{is verified}$$ <strong>(b)</strong> $$b > 1$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$a = \\dfrac{ b^3 }{ b^2 - 1 }$$ <strong>(b)</strong> $$b > 0$$",
                                "feedback": "You probably forgot to account for the positiveness of a when setting your restriction in Part (b). If $b > 0$ but $b < 1$, then $b^2 - 1$ would be negative, making a negative. This violates the original condition that $a > 0$ for $\\log a$ to be defined."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$a = \\dfrac{ b^3 }{ 1 - b^2 }$$ <strong>(b)</strong> $$b > 1$$",
                                "feedback": "Check your algebraic signs when grouping your a terms in Part (a). Rearranging $a = ab^2 - b^3$ yields $b^3 = ab^2 - a \\implies b^3 = a(b^2 - 1)$. Be careful not to swap the subtraction order of your factor."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$a = \\dfrac{ b^3 }{ b^2 - 1 }$$ <strong>(b)</strong> $$b > -1$$",
                                "feedback": "Check your inequality restrictions in Part (b). Although solving $b^2 - 1 > 0$ mathematically yields $b > 1$ or $b < -1$, we are given the initial constraint $b > 0$ for $\\log b$ to be defined. Therefore, the negative region is completely invalid, leaving only $b > 1$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Dual Constraints",
                        "content": "In this question, when solving quadratic inequalities like $b^2 - 1 > 0$, remember that math rules yield two regions: $b > 1$ or $b < -1$. However, because the original equation contains $\\log b$, b must be strictly positive. This instantly discards the negative region, leaving only $b > 1$."
                }
        },
        {
                "id": "004043",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Logarithm Laws"
                ],
                "img": false,
                "question": "Given that $a > b > 0$, and that a and b satisfy the equation:<br>$$\\log a - \\log b = \\log(2a - b)$$<br><strong>(a)</strong> Show that:<br>$$a = \\dfrac{ b^2 }{ 2b - 1 }$$<br><strong>(b)</strong> Write down the full restriction on the value of b, explaining the reason for this restriction.",
                "steps": [
                        "<strong>Part (a):</strong> We begin by applying the logarithm subtraction law, $\\log(x) - \\log(y) = \\log\\left(\\frac{x}{y}\\right)$, to the left-hand side of our equation:<br>$$\\log\\left(\\dfrac{a}{b}\\right) = \\log(2a - b)$$",
                        "Removing the logarithms from both sides of the equation:<br>$$\\dfrac{a}{b} = 2a - b$$",
                        "Multiplying both sides by b to eliminate the fraction:<br>\\begin{aligned}\na &= b(2a - b) \\cr\na &= 2ab - b^2\n\\end{aligned}",
                        "Rearranging to group all terms containing the variable a together on the right-hand side:<br>$$b^2 = 2ab - a$$",
                        "Factorising out a from the right-hand side:<br>$$b^2 = a(2b - 1)$$",
                        "Dividing both sides of the equation by (2b - 1) gives our target proof:<br>$$a = \\dfrac{ b^2 }{ 2b - 1 }$$",
                        "<strong>Part (b):</strong> For the logarithmic terms to be defined, we are given that $a > b > 0$.",
                        "First, since $a > 0$ and the numerator is positive ($b^2 > 0$), our denominator must be strictly positive to ensure a positive quotient:<br>$$2b - 1 > 0 \\implies b > 0.5$$",
                        "Second, we must satisfy the initial condition that $a > b$:<br>$$\\dfrac{ b^2 }{ 2b - 1 } > b$$<br>Since $2b-1 > 0$, we can multiply both sides by (2b-1) safely without swapping the inequality sign:<br>$$b^2 > b(2b - 1) \\implies b^2 > 2b^2 - b$$<br>$$b > b^2$$<br>Since $b > 0$, we can divide by b:<br>$$1 > b \\implies b < 1$$",
                        "Combining both inequalities yields our full, strict restriction on b:<br>$$\\frac{1}{2} < b < 1$$",
                        "Final Answer: <strong>(a)</strong> $$a = \\dfrac{ b^2 }{ 2b - 1 }\\\\\\ \\text{is verified}$$ <strong>(b)</strong> $$\\dfrac{1}{2} < b < 1$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$a = \\dfrac{ b^2 }{ 2b - 1 }$$ <strong>(b)</strong> $$b > 0.5$$",
                                "feedback": "You probably forgot to account for the second half of the restriction in Part (b). While $b > 0.5$ guarantees that a is positive, we are also given that $a > b$. Solving $\\frac{ b^2 }{ 2b-1 } > b$ yields $b < 1$, which tightens the restriction to $\\frac{1}{2} < b < 1$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$a = \\dfrac{ b^2 }{ 1 - 2b }$$ <strong>(b)</strong> $$\\dfrac{1}{2} < b < 1$$",
                                "feedback": "Check your algebraic signs when grouping your a terms in Part (a). Rearranging $a = 2ab - b^2$ yields $b^2 = 2ab - a \\implies b^2 = a(2b - 1)$. Be careful not to swap the subtraction order of your factor."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$a = \\dfrac{ b^2 }{ 2b - 1 }$$ <strong>(b)</strong> $$b < 1$$",
                                "feedback": "Check your lower-bound constraint in Part (b). If $b < 0.5$, then the denominator (2b-1) would be negative, making a negative. This violates the original condition $a > 0$ required for $\\log a$ to be defined."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Hidden Inequalities",
                        "content": "This question contains a classic algebraic trap. Many students only check that the denominator is positive ($b > 0.5$), forgetting that the condition $a > b$ is also a functional inequality. Always test both constraints to see if they restrict your variable from both above and below."
                }
        },
        {
                "id": "004044",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Logarithm Laws"
                ],
                "img": false,
                "question": "Given that $a > 2b > 0$, and that a and b satisfy the equation:<br>$$\\log a - \\log b = \\log(a - 2b)$$<br><strong>(a)</strong> Show that:<br>$$a = \\dfrac{ 2b^2 }{ b - 1 }$$<br><strong>(b)</strong> Write down the full restriction on the value of b, explaining the reason for this restriction.",
                "steps": [
                        "<strong>Part (a):</strong> We begin by applying the logarithm subtraction law, $\\log(x) - \\log(y) = \\log\\left(\\frac{x}{y}\\right)$, to the left-hand side of our equation:<br>$$\\log\\left(\\dfrac{a}{b}\\right) = \\log(a - 2b)$$",
                        "Removing the logarithms from both sides of the equation:<br>$$\\dfrac{a}{b} = a - 2b$$",
                        "Multiplying both sides by b to eliminate the fraction:<br>\\begin{aligned}\na &= b(a - 2b) \\cr\na &= ab - 2b^2\n\\end{aligned}",
                        "Rearranging to group all terms containing the variable a together on the right-hand side:<br>$$2b^2 = ab - a$$",
                        "Factorising out a from the right-hand side:<br>$$2b^2 = a(b - 1)$$",
                        "Dividing both sides of the equation by (b - 1) gives our target proof:<br>$$a = \\dfrac{ 2b^2 }{ b - 1 }$$",
                        "<strong>Part (b):</strong> For the logarithmic terms to be defined, we are given that $a > 2b > 0$.",
                        "Looking at our equation $a = \\dfrac{ 2b^2 }{ b - 1 }$, since a must be strictly positive ($a > 0$) and the numerator is positive ($2b^2 > 0$), the denominator must also be positive to ensure a positive quotient:<br>$$b - 1 > 0 \\implies b > 1$$",
                        "Final Answer: <strong>(a)</strong> $$a = \\dfrac{ 2b^2 }{ b - 1 }\\\\\\ \\text{is verified}$$ <strong>(b)</strong> $$b > 1$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$a = \\dfrac{ 2b^2 }{ b - 1 }$$ <strong>(b)</strong> $$b > 0$$",
                                "feedback": "You probably forgot to account for the positiveness of a when setting your restriction in Part (b). If $b > 0$ but $b < 1$, then b - 1 would be negative, making a negative. This violates the original condition that $a > 0$ for $\\log a$ to be defined."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$a = \\dfrac{ 2b^2 }{ 1 - b }$$ <strong>(b)</strong> $$b > 1$$",
                                "feedback": "Check your algebraic signs when grouping your a terms in Part (a). Rearranging $a = ab - 2b^2$ yields $2b^2 = ab - a \\implies 2b^2 = a(b - 1)$. Be careful not to swap the subtraction order of your factor."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$a = \\dfrac{ 2b^2 }{ b - 1 }$$ <strong>(b)</strong> $$b \\ge 1$$",
                                "feedback": "Check your inequality boundary in Part (b). If $b = 1$ exactly, the denominator (b-1) becomes 0, making the fraction undefined. Therefore, the restriction must be a strict inequality: $b > 1$, not $b \\ge 1$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Subtraction Order",
                        "content": "In algebraic proofs of this type, when factorising terms, pay close attention to the order of subtraction. If you have $2b^2 = ab - a$, dividing by the factor (b-1) is mathematically correct, whereas writing (1-b) would introduce an incorrect sign change."
                }
        },
        {
                "id": "004045",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Logarithm Laws"
                ],
                "img": false,
                "question": "Given that $a > b^2 > 0$ and $b > 0$, and that a and b satisfy the equation:<br>$$\\log a - 3\\log b = \\log(a - b^2)$$<br><strong>(a)</strong> Show that:<br>$$a = \\dfrac{ b^5 }{ b^3 - 1 }$$<br><strong>(b)</strong> Write down the full restriction on the value of b, explaining the reason for this restriction.",
                "steps": [
                        "<strong>Part (a):</strong> We begin by applying the logarithm power law, $c\\log(x) = \\log(x^c)$, to the second term on the left-hand side:<br>$$\\log a - \\log(b^3) = \\log(a - b^2)$$",
                        "Applying the logarithm subtraction law, $\\log(x) - \\log(y) = \\log\\left(\\frac{x}{y}\\right)$:<br>$$\\log\\left(\\dfrac{a}{ b^3 }\\right) = \\log(a - b^2)$$",
                        "Removing the logarithms from both sides of the equation:<br>$$\\dfrac{a}{ b^3 } = a - b^2$$",
                        "Multiplying both sides by $b^3$ to eliminate the fraction:<br>\\begin{aligned}\na &= b^3(a - b^2) \\cr\na &= ab^3 - b^5\n\\end{aligned}",
                        "Rearranging to group all terms containing the variable a together on the right-hand side:<br>$$b^5 = ab^3 - a$$",
                        "Factorising out a from the right-hand side:<br>$$b^5 = a(b^3 - 1)$$",
                        "Dividing both sides of the equation by $(b^3 - 1)$ gives our target proof:<br>$$a = \\dfrac{ b^5 }{ b^3 - 1 }$$",
                        "<strong>Part (b):</strong> For the logarithmic terms to be defined, we are given $a > b^2 > 0$ and $b > 0$.",
                        "Looking at our equation $a = \\dfrac{ b^5 }{ b^3 - 1 }$, since a must be strictly positive ($a > 0$) and the numerator is positive ($b^5 > 0$, as $b > 0$), the denominator must also be positive to ensure a positive quotient:<br>$$b^3 - 1 > 0 \\implies b^3 > 1 \\implies b > 1$$",
                        "Final Answer: <strong>(a)</strong> $$a = \\dfrac{ b^5 }{ b^3 - 1 }\\\\\\ \\text{is verified}$$ <strong>(b)</strong> $$b > 1$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$a = \\dfrac{ b^5 }{ b^3 - 1 }$$ <strong>(b)</strong> $$b > 0$$",
                                "feedback": "You probably forgot to account for the positiveness of a when setting your restriction in Part (b). If $b > 0$ but $b < 1$, then $b^3 - 1$ would be negative, making a negative. This violates the original condition that $a > 0$ for $\\log a$ to be defined."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$a = \\dfrac{ b^5 }{ 1 - b^3 }$$ <strong>(b)</strong> $$b > 1$$",
                                "feedback": "Check your algebraic signs when grouping your a terms in Part (a). Rearranging $a = ab^3 - b^5$ yields $b^5 = ab^3 - a \\implies b^5 = a(b^3 - 1)$. Be careful not to swap the subtraction order of your factor."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$a = \\dfrac{ b^5 }{ b^3 - 1 }$$ <strong>(b)</strong> $$b \\ge 1$$",
                                "feedback": "Check your inequality boundary in Part (b). If $b = 1$ exactly, the denominator $(b^3-1)$ becomes 0, making the fraction undefined. Therefore, the restriction must be a strict inequality: $b > 1$, not $b \\ge 1$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: High Power Limits",
                        "content": "Do not let high powers like $b^5$ or $b^3$ intimidate you. The algebraic rules for logarithm subtraction, factoring, and inequality boundaries remain completely identical to simple linear cases. Trust your core algebraic rules."
                }
        },
        {
                "id": "004046",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Proof",
                "topic": "Proof",
                "subtopic": [
                        "Inequalities",
                        "Proof"
                ],
                "img": false,
                "question": "<strong>(i)</strong> Prove that for all $n \\in \\mathbb{N}$, $n^2 + 1$ is not divisible by 3.<br><br><strong>(ii)</strong> \"Given $x \\in \\mathbb{R}$, the value of |2x - 12| is greater than or equal to the value of (x - 5).\"<br>State, giving a reason, if the above statement is always true, sometimes true, or never true.",
                "steps": [
                        "<strong>Part (i):</strong> We use <strong>proof by exhaustion</strong> by splitting the natural numbers into three cases based on their divisibility by 3. Any natural number n can be written as 3k, 3k+1, or 3k+2 for some non-negative integer k.",
                        "<strong>Case 1: $n = 3k$ (multiples of 3)</strong><br>\\begin{aligned}\nn^2 + 1 &= (3k)^2 + 1 \\cr\n&= 9k^2 + 1 \\cr\n&= 3(3k^2) + 1\n\\end{aligned}<br>Since $3(3k^2)$ is divisible by 3, $n^2+1$ leaves a remainder of 1 when divided by 3, so it is not divisible.",
                        "<strong>Case 2: $n = 3k + 1$</strong><br>\\begin{aligned}\nn^2 + 1 &= (3k+1)^2 + 1 \\cr\n&= 9k^2 + 6k + 1 + 1 \\cr\n&= 3(3k^2 + 2k) + 2\n\\end{aligned}<br>This leaves a remainder of 2 when divided by 3, so it is not divisible.",
                        "<strong>Case 3: $n = 3k + 2$</strong><br>\\begin{aligned}\nn^2 + 1 &= (3k+2)^2 + 1 \\cr\n&= 9k^2 + 12k + 4 + 1 \\cr\n&= 9k^2 + 12k + 5 \\cr\n&= 3(3k^2 + 4k + 1) + 2\n\\end{aligned}<br>This also leaves a remainder of 2 when divided by 3, so it is not divisible.<br>Therefore, since all possible cases have been exhausted, $n^2 + 1$ is never divisible by 3 for any $n \\in \\mathbb{N}$.",
                        "<strong>Part (ii):</strong> To determine the validity of the statement $|2x - 12| \\ge x - 5$, we analyze the critical values by splitting the absolute value into two intervals at the boundary $x = 6$:",
                        "<strong>Case A: For $x \\ge 6$</strong>, the term inside the absolute value is positive, so $|2x - 12| = 2x - 12$. Our inequality becomes:<br>$$2x - 12 \\ge x - 5 \\implies x \\ge 7$$<br>This means that in the interval $6 \\le x < 7$, the inequality is <strong>false</strong> (for example, at $x = 6$, we get $0 \\ge 1$, which is false).",
                        "<strong>Case B: For $x < 6$</strong>, the term inside the absolute value is negative, so $|2x - 12| = -(2x - 12) = 12 - 2x$. Our inequality becomes:<br>$$12 - 2x \\ge x - 5 \\implies 17 \\ge 3x \\implies x \\le 5.67$$<br>This means the inequality is true for $x \\le 5.67$ and $x \\ge 7$, but fails in the gap $5.67 < x < 7$.",
                        "Therefore, the statement is <strong>sometimes true</strong>, as it holds for most real values (such as $x=0$, giving $12 \\ge -5$), but fails for a small range of values (with a counterexample of $x = 6$, where $|2(6)-12| = 0$ is not greater than or equal to $6-5 = 1$).",
                        "Final Answer: <strong>(i)</strong> $$\\text{Proof by cases is completed}$$ <strong>(ii)</strong> $$\\text{Sometimes true (fails in the interval }5.67 < x < 7\\text{)}$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(i)</strong> $$\\text{Proof by cases is completed}$$ <strong>(ii)</strong> $$\\text{Always true}$$",
                                "feedback": "You probably assumed the inequality is always true because absolute values are always positive. However, you must test the critical interval. In the region $5.67 < x < 7$, the value of the linear expression x-5 is actually larger than the absolute value |2x-12|, making the statement false in this range."
                        },
                        {
                                "ans": "<strong>(i)</strong> $$\\text{Proof by cases is completed}$$ <strong>(ii)</strong> $$\\text{Never true}$$",
                                "feedback": "The statement is not 'never true'. It holds for the vast majority of real numbers. For example, substituting $x = 0$ yields $|-12| \\ge -5 \\implies 12 \\ge -5$, which is a true statement."
                        },
                        {
                                "ans": "<strong>(i)</strong> $$\\text{Proof by algebraic induction is completed}$$ <strong>(ii)</strong> $$\\text{Sometimes true}$$",
                                "feedback": "Part (i) is a proof by exhaustion (cases), not mathematical induction. Induction is used when a statement depends on n and n+1 sequences, whereas here we exhaust all possible algebraic remainders of n directly."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Absolute Value Gaps",
                        "content": "For this question, when evaluating inequalities of the form $|Ax - B| \\ge x - C$, always check if the line $y = x - C$ passes above the vertex of the absolute value graph. If it does, there will always be a small 'gap' interval where the absolute value function dips below the line, rendering the statement only sometimes true."
                }
        },
        {
                "id": "004047",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Proof",
                "topic": "Proof",
                "subtopic": [
                        "Inequalities",
                        "Proof"
                ],
                "img": false,
                "question": "<strong>(i)</strong> Prove that for all $n \\in \\mathbb{N}$, $n^2 + 1$ is not divisible by 4.<br><br><strong>(ii)</strong> \"Given $x \\in \\mathbb{R}$, the value of |3x - 14| is greater than or equal to the value of (x - 4).\"<br>State, giving a reason, if the above statement is always true, sometimes true, or never true.",
                "steps": [
                        "<strong>Part (i):</strong> We use <strong>proof by exhaustion</strong> by splitting the natural numbers into two cases: even numbers ($n = 2k$) and odd numbers ($n = 2k + 1$) for some non-negative integer k.",
                        "<strong>Case 1: n is even ($n = 2k$)</strong><br>\\begin{aligned}\nn^2 + 1 &= (2k)^2 + 1 \\cr\n&= 4k^2 + 1 \\cr\n&= 4(k^2) + 1\n\\end{aligned}<br>Since $4(k^2)$ is divisible by 4, $n^2+1$ leaves a remainder of 1 when divided by 4, so it is not divisible.",
                        "<strong>Case 2: n is odd ($n = 2k + 1$)</strong><br>\\begin{aligned}\nn^2 + 1 &= (2k+1)^2 + 1 \\cr\n&= 4k^2 + 4k + 1 + 1 \\cr\n&= 4(k^2 + k) + 2\n\\end{aligned}<br>This leaves a remainder of 2 when divided by 4, so it is not divisible.<br>Therefore, since all possible cases have been exhausted, $n^2 + 1$ is never divisible by 4 for any $n \\in \\mathbb{N}$.",
                        "<strong>Part (ii):</strong> To determine the validity of the statement $|3x - 14| \\ge x - 4$, we analyze the critical values by splitting the absolute value into two intervals at the boundary $x = \\frac{14}{3} \\approx 4.67$:",
                        "<strong>Case A: For $x \\ge 4.67$</strong>, the term inside the absolute value is positive, so $|3x - 14| = 3x - 14$. Our inequality becomes:<br>$$3x - 14 \\ge x - 4 \\implies 2x \\ge 10 \\implies x \\ge 5$$<br>This means that in the interval $4.67 \\le x < 5$, the inequality is <strong>false</strong> (for example, at $x = 4.8$, we get $0.4 \\ge 0.8$, which is false).",
                        "<strong>Case B: For $x < 4.67$</strong>, the term inside the absolute value is negative, so $|3x - 14| = 14 - 3x$. Our inequality becomes:<br>$$14 - 3x \\ge x - 4 \\implies 18 \\ge 4x \\implies x \\le 4.5$$<br>This means the inequality is true for $x \\le 4.5$ and $x \\ge 5$, but fails in the gap $4.5 < x < 5$.",
                        "Therefore, the statement is <strong>sometimes true</strong>, as it holds for most real values (such as $x=0$, giving $14 \\ge -4$), but fails for a small range of values (with a counterexample of $x = 4.8$, where $|3(4.8)-14| = 0.4$ is not greater than or equal to $4.8-4 = 0.8$).",
                        "Final Answer: <strong>(i)</strong> $$\\text{Proof by cases is completed}$$ <strong>(ii)</strong> $$\\text{Sometimes true (fails in the interval } 4.5 < x < 5\\text{)}$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(i)</strong> $$\\text{Proof by cases is completed}$$ <strong>(ii)</strong> $$\\text{Always true}$$",
                                "feedback": "You probably assumed the inequality is always true because absolute values are always positive. However, you must test the critical interval. In the region $4.5 < x < 5$, the value of the linear expression x-4 is actually larger than the absolute value |3x-14|, making the statement false in this range."
                        },
                        {
                                "ans": "<strong>(i)</strong> $$\\text{Proof by cases is completed}$$ <strong>(ii)</strong> $$\\text{Never true}$$",
                                "feedback": "The statement is not 'never true'. It holds for the vast majority of real numbers. For example, substituting $x = 0$ yields $|-14| \\ge -4 \\implies 14 \\ge -4$, which is a true statement."
                        },
                        {
                                "ans": "<strong>(i)</strong> $$\\text{Proof by contradiction is completed}$$ <strong>(ii)</strong> $$\\text{Sometimes true}$$",
                                "feedback": "Part (i) is a proof by exhaustion (cases), not a proof by contradiction. A proof by contradiction starts by assuming the opposite statement is true and finding a mathematical impossibility, whereas here we systematically test all even and odd possibilities."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Divisibility by 4",
                        "content": "For this question, when proving divisibility or non-divisibility by 4, splitting your integers into even (2k) and odd (2k+1) is the most efficient method. This is because any even number squared yields a term strictly divisible by 4, and any odd number squared yields $4(k^2+k)+1$, making the remainder analysis very straightforward."
                }
        },
        {
                "id": "004048",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Proof",
                "topic": "Proof",
                "subtopic": [
                        "Inequalities",
                        "Proof"
                ],
                "img": false,
                "question": "<strong>(i)</strong> Prove that for all $n \\in \\mathbb{N}$, $n^2 + 5$ is not divisible by 4.<br><br><strong>(ii)</strong> \"Given $x \\in \\mathbb{R}$, the value of |2x - 8| is greater than or equal to the value of (x - 3).\"<br>State, giving a reason, if the above statement is always true, sometimes true, or never true.",
                "steps": [
                        "<strong>Part (i):</strong> We use <strong>proof by exhaustion</strong> by splitting the natural numbers into two cases: even numbers ($n = 2k$) and odd numbers ($n = 2k + 1$) for some non-negative integer k.",
                        "<strong>Case 1: n is even ($n = 2k$)</strong><br>\\begin{aligned}\nn^2 + 5 &= (2k)^2 + 5 \\cr\n&= 4k^2 + 5 \\cr\n&= 4(k^2 + 1) + 1\n\\end{aligned}<br>Since $4(k^2+1)$ is divisible by 4, $n^2+5$ leaves a remainder of 1 when divided by 4, so it is not divisible.",
                        "<strong>Case 2: n is odd ($n = 2k + 1$)</strong><br>\\begin{aligned}\nn^2 + 5 &= (2k+1)^2 + 5 \\cr\n&= 4k^2 + 4k + 1 + 5 \\cr\n&= 4k^2 + 4k + 6 \\cr\n&= 4(k^2 + k + 1) + 2\n\\end{aligned}<br>This leaves a remainder of 2 when divided by 4, so it is not divisible.<br>Therefore, since all possible cases have been exhausted, $n^2 + 5$ is never divisible by 4 for any $n \\in \\mathbb{N}$.",
                        "<strong>Part (ii):</strong> To determine the validity of the statement $|2x - 8| \\ge x - 3$, we analyze the critical values by splitting the absolute value into two intervals at the boundary $x = 4$:",
                        "<strong>Case A: For $x \\ge 4$</strong>, the term inside the absolute value is positive, so $|2x - 8| = 2x - 8$. Our inequality becomes:<br>$$2x - 8 \\ge x - 3 \\implies x \\ge 5$$<br>This means that in the interval $4 \\le x < 5$, the inequality is <strong>false</strong> (for example, at $x = 4$, we get $0 \\ge 1$, which is false).",
                        "<strong>Case B: For $x < 4$</strong>, the term inside the absolute value is negative, so $|2x - 8| = 8 - 2x$. Our inequality becomes:<br>$$8 - 2x \\ge x - 3 \\implies 11 \\ge 3x \\implies x \\le 3.67$$<br>This means the inequality is true for $x \\le 3.67$ and $x \\ge 5$, but fails in the gap $3.67 < x < 5$.",
                        "Therefore, the statement is <strong>sometimes true</strong>, as it holds for most real values (such as $x=0$, giving $8 \\ge -3$), but fails for a small range of values (with a counterexample of $x = 4$, where $|2(4)-8| = 0$ is not greater than or equal to $4-3 = 1$).",
                        "Final Answer: <strong>(i)</strong> $$\\text{Proof by cases is completed}$$ <strong>(ii)</strong> $$\\text{Sometimes true (fails in the interval } 3.67 < x < 5\\text{)}$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$\\text{Proof by cases is completed}$$ <strong>(b)</strong> $$\\text{Always true}$$",
                                "feedback": "You probably assumed the inequality is always true because absolute values are always positive. However, you must test the critical interval. In the region $3.67 < x < 5$, the value of the linear expression x-3 is actually larger than the absolute value |2x-8|, making the statement false in this range."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\text{Proof by cases is completed}$$ <strong>(b)</strong> $$\\text{Never true}$$",
                                "feedback": "The statement is not 'never true'. It holds for the vast majority of real numbers. For example, substituting $x = 0$ yields $|-8| \\ge -3 \\implies 8 \\ge -3$, which is a true statement."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\text{Proof by counterexample is completed}$$ <strong>(b)</strong> $$\\text{Sometimes true}$$",
                                "feedback": "Part (i) requires a general proof showing the statement is true for *all* $n \\in \\mathbb{N}$, which requires a proof by exhaustion (cases). A proof by counterexample is only used to disprove a statement, not to prove one."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Remainder Equivalents",
                        "content": "In this question, when working with $n^2 + 5$ and dividing by 4, remember that you can simplify the maths by rewriting 5 as 4 + 1. This makes $n^2 + 5$ equivalent to $n^2 + 1 \\pmod 4$, meaning the remainders will be identical to those found when expanding $n^2+1$."
                }
        },
        {
                "id": "004049",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Proof",
                "topic": "Proof",
                "subtopic": [
                        "Inequalities",
                        "Proof"
                ],
                "img": false,
                "question": "<strong>(i)</strong> Prove that for all $n \\in \\mathbb{N}$, $n^2 + 2$ is not divisible by 5.<br><br><strong>(ii)</strong> \"Given $x \\in \\mathbb{R}$, the value of |4x - 22| is greater than or equal to the value of (x - 5).\"<br>State, giving a reason, if the above statement is always true, sometimes true, or never true.",
                "steps": [
                        "<strong>Part (i):</strong> We use <strong>proof by exhaustion</strong> by splitting the natural numbers into five cases based on their divisibility by 5. Any natural number n can be written as 5k, $5k \\pm 1$, or $5k \\pm 2$ for some non-negative integer k.",
                        "<strong>Case 1: $n = 5k$ (multiples of 5)</strong><br>\\begin{aligned}\nn^2 + 2 &= (5k)^2 + 2 \\cr\n&= 25k^2 + 2 \\cr\n&= 5(5k^2) + 2\n\\end{aligned}<br>This leaves a remainder of 2 when divided by 5, so it is not divisible.",
                        "<strong>Case 2: $n = 5k \\pm 1$</strong><br>\\begin{aligned}\nn^2 + 2 &= (5k \\pm 1)^2 + 2 \\cr\n&= 25k^2 \\pm 10k + 1 + 2 \\cr\n&= 5(5k^2 \\pm 2k) + 3\n\\end{aligned}<br>This leaves a remainder of 3 when divided by 5, so it is not divisible.",
                        "<strong>Case 3: $n = 5k \\pm 2$</strong><br>\\begin{aligned}\nn^2 + 2 &= (5k \\pm 2)^2 + 2 \\cr\n&= 25k^2 \\pm 20k + 4 + 2 \\cr\n&= 25k^2 \\pm 20k + 6 \\cr\n&= 5(5k^2 \\pm 4k + 1) + 1\n\\end{aligned}<br>This leaves a remainder of 1 when divided by 5, so it is not divisible.<br>Therefore, since all possible cases have been exhausted, $n^2 + 2$ is never divisible by 5 for any $n \\in \\mathbb{N}$.",
                        "<strong>Part (ii):</strong> To determine the validity of the statement $|4x - 22| \\ge x - 5$, we analyze the critical values by splitting the absolute value into two intervals at the boundary $x = 5.5$:",
                        "<strong>Case A: For $x \\ge 5.5$</strong>, the term inside the absolute value is positive, so $|4x - 22| = 4x - 22$. Our inequality becomes:<br>$$4x - 22 \\ge x - 5 \\implies 3x \\ge 17 \\implies x \\ge 5.67$$<br>This means that in the interval $5.5 \\le x < 5.67$, the inequality is <strong>false</strong> (for example, at $x = 5.5$, we get $2 \\ge 0.5$, which is true, but at $x = 5.6$ we get $0.4 \\ge 0.6$, which is false).",
                        "<strong>Case B: For $x < 5.5$</strong>, the term inside the absolute value is negative, so $|4x - 22| = 22 - 4x$. Our inequality becomes:<br>$$22 - 4x \\ge x - 5 \\implies 27 \\ge 5x \\implies x \\le 5.4$$<br>This means the inequality is true for $x \\le 5.4$ and $x \\ge 5.67$, but fails in the gap $5.4 < x < 5.67$.",
                        "Therefore, the statement is <strong>sometimes true</strong>, as it holds for most real values (such as $x=0$, giving $22 \\ge -5$), but fails for a small range of values (with a counterexample of $x = 5.55$, where $|4(5.55)-22| = 0.2$ is not greater than or equal to $5.55-5 = 0.55$).",
                        "Final Answer: <strong>(i)</strong> $$\\text{Proof by cases is completed}$$ <strong>(ii)</strong> $$\\text{Sometimes true (fails in the interval } 5.4 < x < 5.67\\text{)}$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$\\text{Proof by cases is completed}$$ <strong>(b)</strong> $$\\text{Always true}$$",
                                "feedback": "You probably assumed the inequality is always true because absolute values are always positive. However, you must test the critical interval. In the region $5.4 < x < 5.67$, the value of the linear expression x-5 is actually larger than the absolute value |4x-22|, making the statement false in this range."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\text{Proof by cases is completed}$$ <strong>(b)</strong> $$\\text{Never true}$$",
                                "feedback": "The statement is not 'never true'. It holds for the vast majority of real numbers. For example, substituting $x = 0$ yields $|-22| \\ge -5 \\implies 22 \\ge -5$, which is a true statement."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\text{Proof by deduction is completed}$$ <strong>(b)</strong> $$\\text{Sometimes true}$$",
                                "feedback": "Part (i) requires a general proof for all n, which must be handled by exhaustion (testing all possible remainder cases). A simple algebraic deduction is not enough because n is discrete and can have various remainder properties."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Modulo 5 Groupings",
                        "content": "In this question, when proving divisibility by 5, we can group our cases into $5k \\pm 1$ and $5k \\pm 2$. Because squaring negative terms yields positive terms, this grouping handles two cases at once, saving you significant time and writing on your exam paper."
                }
        },
        {
                "id": "004050",
                "major_area": "Proof",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "AS",
                "topic": "Proof",
                "subtopic": [
                        "Inequalities",
                        "Proof"
                ],
                "img": false,
                "question": "<strong>(i)</strong> Prove that for all $n \\in \\mathbb{N}$, $n^2 + 3$ is not divisible by 5.<br><br><strong>(ii)</strong> \"Given $x \\in \\mathbb{R}$, the value of |3x - 17| is greater than or equal to the value of (x - 5).\"<br>State, giving a reason, if the above statement is always true, sometimes true, or never true.",
                "steps": [
                        "<strong>Part (i):</strong> We use <strong>proof by exhaustion</strong> by splitting the natural numbers into five cases based on their divisibility by 5. Any natural number n can be written as 5k, $5k \\pm 1$, or $5k \\pm 2$ for some non-negative integer k.",
                        "<strong>Case 1: $n = 5k$ (multiples of 5)</strong><br>\\begin{aligned}\nn^2 + 3 &= (5k)^2 + 3 \\cr\n&= 25k^2 + 3 \\cr\n&= 5(5k^2) + 3\n\\end{aligned}<br>This leaves a remainder of 3 when divided by 5, so it is not divisible.",
                        "<strong>Case 2: $n = 5k \\pm 1$</strong><br>\\begin{aligned}\nn^2 + 3 &= (5k \\pm 1)^2 + 3 \\cr\n&= 25k^2 \\pm 10k + 1 + 3 \\cr\n&= 5(5k^2 \\pm 2k) + 4\n\\end{aligned}<br>This leaves a remainder of 4 when divided by 5, so it is not divisible.",
                        "<strong>Case 3: $n = 5k \\pm 2$</strong><br>\\begin{aligned}\nn^2 + 3 &= (5k \\pm 2)^2 + 3 \\cr\n&= 25k^2 \\pm 20k + 4 + 3 \\cr\n&= 25k^2 \\pm 20k + 7 \\cr\n&= 5(5k^2 \\pm 4k + 1) + 2\n\\end{aligned}<br>This leaves a remainder of 2 when divided by 5, so it is not divisible.<br>Therefore, since all possible cases have been exhausted, $n^2 + 3$ is never divisible by 5 for any $n \\in \\mathbb{N}$.",
                        "<strong>Part (ii):</strong> To determine the validity of the statement $|3x - 17| \\ge x - 5$, we analyze the critical values by splitting the absolute value into two intervals at the boundary $x = 5.67$:",
                        "<strong>Case A: For $x \\ge 5.67$</strong>, the term inside the absolute value is positive, so $|3x - 17| = 3x - 17$. Our inequality becomes:<br>$$3x - 17 \\ge x - 5 \\implies 2x \\ge 12 \\implies x \\ge 6$$<br>This means that in the interval $5.67 \\le x < 6$, the inequality is <strong>false</strong> (for example, at $x = 5.8$, we get $0.4 \\ge 0.8$, which is false).",
                        "<strong>Case B: For $x < 5.67$</strong>, the term inside the absolute value is negative, so $|3x - 17| = 17 - 3x$. Our inequality becomes:<br>$$17 - 3x \\ge x - 5 \\implies 22 \\ge 4x \\implies x \\le 5.5$$<br>This means the inequality is true for $x \\le 5.5$ and $x \\ge 6$, but fails in the gap $5.5 < x < 6$.",
                        "Therefore, the statement is <strong>sometimes true</strong>, as it holds for most real values (such as $x=0$, giving $17 \\ge -5$), but fails for a small range of values (with a counterexample of $x = 5.8$, where $|3(5.8)-17| = 0.4$ is not greater than or equal to $5.8-5 = 0.8$).",
                        "Final Answer: <strong>(i)</strong> $$\\text{Proof by cases is completed}$$ <strong>(ii)</strong> $$\\text{Sometimes true (fails in the interval } 5.5 < x < 6\\text{)}$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$\\text{Proof by cases is completed}$$ <strong>(b)</strong> $$\\text{Always true}$$",
                                "feedback": "You probably assumed the inequality is always true because absolute values are always positive. However, you must test the critical interval. In the region $5.5 < x < 6$, the value of the linear expression x-5 is actually larger than the absolute value |3x-17|, making the statement false in this range."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\text{Proof by cases is completed}$$ <strong>(b)</strong> $$\\text{Never true}$$",
                                "feedback": "The statement is not 'never true'. It holds for the vast majority of real numbers. For example, substituting $x = 0$ yields $|-17| \\ge -5 \\implies 17 \\ge -5$, which is a true statement."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\text{Proof by exhaustion of bounds is completed}$$ <strong>(b)</strong> $$\\text{Sometimes true}$$",
                                "feedback": "The standard mathematical name for testing integer remainder cases is a proof by exhaustion (or proof by cases). Avoid using non-standard terms like 'exhaustion of bounds' on your exam script."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Visualising Inequalities",
                        "content": "When analyzing whether an absolute value statement is always, sometimes, or never true, a quick mental sketch of the two functions $y = |Ax - B|$ and $y = x - C$ is incredibly helpful. It instantly reveals if the linear function ever crosses above the v-shaped absolute value boundary."
                }
        }
];
