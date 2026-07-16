window.ALEVEL_QUESTIONS = [
    {
        "id": "004301",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Trigonometry",
        "topic": "Trigonometric Equations",
        "subtopic": [
            "Quadratic Equations",
            "Trigonometric Identities",
            "Interval Solving"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Solve the following equation for values of $\\theta$ in the range $0^\\circ \\le \\theta \\le 360^\\circ$:<br>$$5 - 6\\cos^2\\theta = \\sin\\theta$$",
        "steps": [
            "Use the fundamental Pythagorean identity $\\cos^2\\theta = 1 - \\sin^2\\theta$ to write the entire equation in terms of $\\sin\\theta$:<br>\\begin{aligned} 5 - 6\\left(1 - \\sin^2\\theta\\right) &= \\sin\\theta \\ 5 - 6 + 6\\sin^2\\theta &= \\sin\\theta \\ 6\\sin^2\\theta - \\sin\\theta - 1 &= 0 \\end{aligned}",
            "This is a quadratic equation in terms of $\\sin\\theta$. Let $s = \\sin\\theta$ to write the quadratic as:<br>\\begin{aligned} 6s^2 - s - 1 &= 0 \\end{aligned}<br>Factorise this quadratic equation:<br>\\begin{aligned} (3s + 1)(2s - 1) &= 0 \\end{aligned}<br>This yields two solutions: $s = \\dfrac{1}{ 2 }$ and $s = -\\dfrac{1}{ 3 }$.",
            "Case 1: Solve for $\\sin\\theta = \\dfrac{1}{ 2 }$ in the range $0^\\circ \\le \\theta \\le 360^\\circ$. Since sine is positive, the solutions are in the first and second quadrants:<br>\\begin{aligned} \\theta &= 30^\\circ \\ \\theta &= 180^\\circ - 30^\\circ = 150^\\circ \\end{aligned}",
            "Case 2: Solve for $\\sin\\theta = -\\dfrac{1}{ 3 }$ in the range $0^\\circ \\le \\theta \\le 360^\\circ$. Since sine is negative, the solutions are in the third and fourth quadrants. First, find the acute reference angle $\\alpha$:<br>\\begin{aligned} \\alpha &= \\arcsin\\left(\\dfrac{1}{ 3 }\\right) \\approx 19.5^\\circ \\end{aligned}",
            "Find the principal angles in the third and fourth quadrants using the reference angle $\\alpha \\approx 19.5^\\circ$:<br>\\begin{aligned} \\theta &= 180^\\circ + 19.5^\\circ = 199.5^\\circ \\ \\theta &= 360^\\circ - 19.5^\\circ = 340.5^\\circ \\end{aligned}<br>Combining all solutions yields:<br>$$\\theta = 30^\\circ, \\quad 150^\\circ, \\quad 199.5^\\circ, \\quad 340.5^\\circ$$<br><br>Final Answer: $30^\\circ, 150^\\circ, 199.5^\\circ, 340.5^\\circ$ (approx)"
        ],
        "pi_options": [
            {
                "ans": "$$\\theta = 30^\\circ, \\quad 150^\\circ, \\quad -19.5^\\circ$$",
                "feedback": "Check the specified domain in the question. While $-19.5^\\circ$ is a mathematically valid principal angle, the question asks for solutions in the range $0^\\circ \\le \\theta \\le 360^\\circ$. You must find the corresponding positive angles in the third and fourth quadrants."
            },
            {
                "ans": "$$\\theta = 30^\\circ, \\quad 150^\\circ, \\quad 160.5^\\circ, \\quad 340.5^\\circ$$",
                "feedback": "Check your quadrant rules for sine. Since $\\sin\\theta$ is negative ($-\\dfrac{1}{ 3 }$), the angles must lie in the third quadrant ($180^\\circ + \\alpha$) and fourth quadrant ($360^\\circ - \\alpha$). It seems you may have mistakenly calculated a second-quadrant angle ($180^\\circ - 19.5^\\circ$)."
            },
            {
                "ans": "$$\\theta = 30^\\circ, \\quad 150^\\circ, \\quad 199.5^\\circ$$",
                "feedback": "Check your calculations to ensure you have found all possible solutions. Any valid quadratic in sine can yield up to four real solutions within a $360^\\circ$ interval. You appear to have missed the fourth-quadrant solution for $\\sin\\theta = -\\dfrac{1}{ 3 }$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Finding All Interval Solutions",
            "content": "When solving trig equations like $\\sin\\theta = -\\dfrac{1}{ 3 }$, the calculator principal output is approximately $-19.5^\\circ$. To translate this into the required $0^\\circ \\le \\theta \\le 360^\\circ$ domain, use the CAST quadrant rules: since sine is negative, find the angles in the 3rd quadrant ($180^\\circ + 19.5^\\circ = 199.5^\\circ$) and 4th quadrant ($360^\\circ - 19.5^\\circ = 340.5^\\circ$)."
        }
    },
    {
        "id": "004302",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Trigonometry",
        "topic": "Trigonometric Equations",
        "subtopic": [
            "Double Angles",
            "Domain Translation",
            "Interval Solving"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Solve the following equation for values of $\\theta$ in the range $0^\\circ \\le \\theta \\le 180^\\circ$:<br>$$\\sin\\left(2\\theta + 30^\\circ\\right) = \\dfrac{\\sqrt{3}}{2}$$",
        "steps": [
            "Begin by translating the domain for the transformed argument $\\phi = 2\\theta + 30^\\circ$. Since the original domain is $0^\\circ \\le \\theta \\le 180^\\circ$:<br>\\begin{aligned} 0^\\circ \\le \\theta &\\le 180^\\circ \\ 0^\\circ \\le 2\\theta &\\le 360^\\circ \\ 30^\\circ \\le 2\\theta + 30^\\circ &\\le 390^\\circ \\end{aligned}<br>Thus, find all values of $\\phi$ such that $\\sin\\phi = \\dfrac{\\sqrt{3}}{2}$ in the range $30^\\circ \\le \\phi \\le 390^\\circ$.",
            "Find the principal solutions for $\\sin\\phi = \\dfrac{\\sqrt{3}}{2}$ in the first and second quadrants:<br>\\begin{aligned} \\phi &= 60^\\circ \\ \\phi &= 180^\\circ - 60^\\circ = 120^\\circ \\end{aligned}",
            "Check for any secondary solutions within the translated range $30^\\circ \\le \\phi \\le 390^\\circ$ by adding multiples of $360^\\circ$:<br>\\begin{aligned} \\phi &= 60^\\circ + 360^\\circ = 420^\\circ \\quad \\text{(Outside range)} \\ \\phi &= 120^\\circ + 360^\\circ = 480^\\circ \\quad \\text{(Outside range)} \\end{aligned}<br>Thus, the only valid values of $\\phi$ are $60^\\circ$ and $120^\\circ$.",
            "Set the expression $2\\theta + 30^\\circ$ equal to these values of $\\phi$ to solve for $\\theta$:<br>\\begin{aligned} 2\\theta + 30^\\circ &= 60^\\circ \\ 2\\theta &= 30^\\circ \\ \\theta &= 15^\\circ \\end{aligned}",
            "Solve for the second value of $\\phi$:<br>\\begin{aligned} 2\\theta + 30^\\circ &= 120^\\circ \\ 2\\theta &= 90^\\circ \\ \\theta &= 45^\\circ \\end{aligned}<br>Both values lie within the original domain of $0^\\circ \\le \\theta \\le 180^\\circ$.<br><br>Final Answer: $15^\\circ, 45^\\circ$"
        ],
        "pi_options": [
            {
                "ans": "$$\\theta = 15^\\circ, \\quad 45^\\circ, \\quad 195^\\circ$$",
                "feedback": "Check the specified domain for $\\theta$ in the question. While $\\theta = 195^\\circ$ is a solution to the equation $\\sin(2\\theta+30^\\circ) = \\dfrac{\\sqrt{3}}{2}$, it is outside the range $0^\\circ \\le \\theta \\le 180^\\circ$."
            },
            {
                "ans": "$$\\theta = 30^\\circ, \\quad 60^\\circ$$",
                "feedback": "These are the values for the argument $\\phi = 2\\theta$. Remember that once you solve for the argument angle, you must subtract $30^\\circ$ and then divide by 2 to isolate $\\theta$."
            },
            {
                "ans": "$$\\theta = 15^\\circ, \\quad 75^\\circ$$",
                "feedback": "Check your second-quadrant angle calculation for the argument $\\phi = 2\\theta + 30^\\circ$. The second-quadrant solution is $180^\\circ - 60^\\circ = 120^\\circ$, leading to $2\\theta = 90^\\circ \\implies \\theta = 45^\\circ$, not $75^\\circ$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Domain Translations",
            "content": "When solving trigonometric equations with a transformed argument like $2\\theta + 30^\\circ$, always translate the search domain first. Failing to do this often leads to either missing valid solutions (like forgetting that $390^\\circ$ lies within the domain of the argument) or including invalid ones."
        }
    },
    {
        "id": "004303",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Trigonometry",
        "topic": "Trigonometric Equations",
        "subtopic": [
            "Tangent Identity",
            "Factorisation Methods",
            "Interval Solving"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Solve the following equation for values of $\\theta$ in the range $0^\\circ \\le \\theta \\le 360^\\circ$:<br>$$3\\sin\\theta = 2\\tan\\theta$$",
        "steps": [
            "Use the fundamental identity $\\tan\\theta = \\dfrac{\\sin\\theta}{ \\cos\\theta }$ to substitute for the tangent term:<br>\\begin{aligned} 3\\sin\\theta &= 2\\left( \\dfrac{\\sin\\theta}{ \\cos\\theta } \\right) \\end{aligned}",
            "Multiply both sides by $\\cos\\theta$ to clear the fraction (making a note that $\\cos\\theta \\neq 0$):<br>\\begin{aligned} 3\\sin\\theta\\cos\\theta &= 2\\sin\\theta \\end{aligned}",
            "Bring all terms to one side of the equation. Do not divide both sides by $\\sin\\theta$, as this will eliminate valid solutions. Instead, factorise:<br>\\begin{aligned} 3\\sin\\theta\\cos\\theta - 2\\sin\\theta &= 0 \\ \\sin\\theta(3\\cos\\theta - 2) &= 0 \\end{aligned}",
            "This gives two independent trigonometric equations to solve:<ul><li>Case 1: $\\sin\\theta = 0$</li><li>Case 2: $3\\cos\\theta - 2 = 0 \\implies \\cos\\theta = \\dfrac{2}{ 3 }$</li></ul>",
            "Solve Case 1 for $\\sin\\theta = 0$ in the range $0^\\circ \\le \\theta \\le 360^\\circ$:<br>\\begin{aligned} \\theta &= 0^\\circ, \\quad 180^\\circ, \\quad 360^\\circ \\end{aligned}",
            "Solve Case 2 for $\\cos\\theta = \\dfrac{2}{ 3 }$ in the range $0^\\circ \\le \\theta \\le 360^\\circ$. Since cosine is positive, find solutions in the first and fourth quadrants:<br>\\begin{aligned} \\theta &= \\arccos\\left(\\dfrac{2}{ 3 }\\right) \\approx 48.2^\\circ \\ \\theta &= 360^\\circ - 48.2^\\circ = 311.8^\\circ \\end{aligned}<br>Combining all five valid solutions yields:<br>$$\\theta = 0^\\circ, \\quad 48.2^\\circ, \\quad 180^\\circ, \\quad 311.8^\\circ, \\quad 360^\\circ$$<br><br>Final Answer: $0^\\circ, 48.2^\\circ, 180^\\circ, 311.8^\\circ, 360^\\circ$ (approx)"
        ],
        "pi_options": [
            {
                "ans": "$$\\theta = 48.2^\\circ, \\quad 311.8^\\circ$$",
                "feedback": "Check your algebraic manipulation. It seems you may have divided both sides of the equation by $\\sin\\theta$ in the second step. Doing this discards the solutions where $\\sin\\theta = 0$. You must bring all terms to one side and factorise instead."
            },
            {
                "ans": "$$\\theta = 0^\\circ, \\quad 48.2^\\circ, \\quad 180^\\circ, \\quad 360^\\circ$$",
                "feedback": "Check your calculations for the cosine case. Since $\\cos\\theta = \\dfrac{2}{ 3 }$ is positive, there are two solutions: one in the first quadrant ($48.2^\\circ$) and one in the fourth quadrant ($360^\\circ - 48.2^\\circ = 311.8^\\circ$). It seems you missed the fourth-quadrant solution."
            },
            {
                "ans": "$$\\theta = 180^\\circ, \\quad 48.2^\\circ, \\quad 311.8^\\circ$$",
                "feedback": "Check the boundaries of the interval specified in the question ($0^\\circ \\le \\theta \\le 360^\\circ$). Because the boundaries are inclusive, both $0^\\circ$ and $360^\\circ$ are valid solutions to the equation $\\sin\\theta = 0$ and must be listed."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Never Divide by Variables",
            "content": "An extremely common mistake in trigonometric algebra is dividing both sides of an equation by a common term like $\\sin\\theta$. Dividing by a variable term implicitly assumes that the term cannot equal zero, which eliminates all the valid solutions corresponding to $\\sin\\theta = 0$ ($0^\\circ, 180^\\circ, 360^\\circ$). Always factorise instead!"
        }
    },
    {
        "id": "004304",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Trigonometry",
        "topic": "Trigonometric Equations",
        "subtopic": [
            "Trigonometric Identities",
            "Quadratic Equations",
            "Interval Solving"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Solve the following equation for values of $\\theta$ in the range $0^\\circ \\le \\theta \\le 360^\\circ$:<br>$$1 - 2\\sin^2\\theta = \\cos\\theta$$",
        "steps": [
            "Use the fundamental identity $\\sin^2\\theta = 1 - \\cos^2\\theta$ to write the entire quadratic equation in terms of $\\cos\\theta$:<br>\\begin{aligned} 1 - 2\\left(1 - \\cos^2\\theta\\right) &= \\cos\\theta \\ 1 - 2 + 2\\cos^2\\theta &= \\cos\\theta \\ 2\\cos^2\\theta - \\cos\\theta - 1 &= 0 \\end{aligned}",
            "This is a quadratic equation in terms of $\\cos\\theta$. Factorise the quadratic:<br>\\begin{aligned} (2\\cos\\theta + 1)(\\cos\\theta - 1) &= 0 \\end{aligned}<br>This yields two independent solutions: $\\cos\\theta = -\\dfrac{1}{ 2 }$ and $\\cos\\theta = 1$.",
            "Case 1: Solve for $\\cos\\theta = 1$ in the range $0^\\circ \\le \\theta \\le 360^\\circ$. Since cosine is 1 at the boundaries of the interval:<br>\\begin{aligned} \\theta &= 0^\\circ, \\quad 360^\\circ \\end{aligned}",
            "Case 2: Solve for $\\cos\\theta = -\\dfrac{1}{ 2 }$ in the range $0^\\circ \\le \\theta \\le 360^\\circ$. Since cosine is negative, find the solutions in the second and third quadrants using the reference angle $\\alpha = 60^\\circ$:<br>\\begin{aligned} \\theta &= 180^\\circ - 60^\\circ = 120^\\circ \\ \\theta &= 180^\\circ + 60^\\circ = 240^\\circ \\end{aligned}<br>Combining all four valid solutions yields:<br>$$\\theta = 0^\\circ, \\quad 120^\\circ, \\quad 240^\\circ, \\quad 360^\\circ$$<br><br>Final Answer: $0^\\circ, 120^\\circ, 240^\\circ, 360^\\circ$"
        ],
        "pi_options": [
            {
                "ans": "$$\\theta = 120^\\circ, \\quad 240^\\circ$$",
                "feedback": "Check your calculations for both factored cases. It seems you solved the Case 2 equation successfully but completely missed the Case 1 equation ($\\cos\\theta = 1 \\implies \\theta = 0^\\circ, 360^\\circ$)."            },
            {
                "ans": "$$\\theta = 0^\\circ, \\quad 60^\\circ, \\quad 300^\\circ, \\quad 360^\\circ$$",
                "feedback": "Check your sign evaluation for Case 2. Since $\\cos\\theta = -\\dfrac{1}{ 2 }$ is negative, your answers must lie in the second and third quadrants ($120^\\circ$ and $240^\\circ$). It seems you may have mistakenly solved for positive $\\cos\\theta = \\dfrac{1}{ 2 }$."
            },
            {
                "ans": "$$\\theta = 120^\\circ, \\quad 240^\\circ, \\quad 360^\\circ$$",
                "feedback": "Check the boundaries of the specified interval ($0^\\circ \\le \\theta \\le 360^\\circ$). Since the interval is inclusive of $0^\\circ$, you must include $0^\\circ$ as a valid solution along with $360^\\circ$."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Reduction to Quadratics",
            "content": "The identity $\\sin^2\\theta + \\cos^2\\theta = 1$ is the primary tool in AS-level mathematics for solving mixed trigonometric equations. It allows you to convert any squared term (like $\\sin^2\\theta$) into terms of the other function, immediately reducing a mixed expression into a standard, easily solvable quadratic equation."
        }
    },
    {
        "id": "004305",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Trigonometry",
        "topic": "Trigonometric Equations",
        "subtopic": [
            "Trigonometric Identities",
            "Quadratic Equations",
            "Boundary Values"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Solve the following equation for values of $\\theta$ in the range $0^\\circ \\le \\theta \\le 360^\\circ$:<br>$$2\\tan^2\\theta\\cos\\theta = 3$$",
        "steps": [
            "Use the tangent identity $\\tan^2\\theta = \\dfrac{\\sin^2\\theta}{ \\cos^2\\theta }$ to rewrite the equation:<br>\\begin{aligned} 2\\left( \\dfrac{\\sin^2\\theta}{ \\cos^2\\theta } \\right)\\cos\\theta &= 3 \\ 2\\left( \\dfrac{\\sin^2\\theta}{ \\cos\\theta } \\right) &= 3 \\end{aligned}",
            "Substitute $\\sin^2\\theta = 1 - \\cos^2\\theta$ to write the equation entirely in terms of $\\cos\\theta$:<br>\\begin{aligned} 2\\left( \\dfrac{1 - \\cos^2\\theta}{ \\cos\\theta } \\right) &= 3 \\ 2\\left(1 - \\cos^2\\theta\\right) &= 3\\cos\\theta \\ 2 - 2\\cos^2\\theta &= 3\\cos\\theta \\ 2\\cos^2\\theta + 3\\cos\\theta - 2 &= 0 \\end{aligned}",
            "This is a quadratic equation in terms of $\\cos\\theta$. Factorise the quadratic expression:<br>\\begin{aligned} (2\\cos\\theta - 1)(\\cos\\theta + 2) &= 0 \\end{aligned}<br>This yields two mathematical solutions: $\\cos\\theta = \\dfrac{1}{ 2 }$ and $\\cos\\theta = -2$.",
            "Evaluate Case 2: $\\cos\\theta = -2$. Since the range of the cosine function is strictly bounded between $-1$ and $1$ ($-1 \\le \\cos\\theta \\le 1$), the equation $\\cos\\theta = -2$ has no real solutions and is discarded.",
            "Evaluate Case 1: Solve $\\cos\\theta = \\dfrac{1}{ 2 }$ in the range $0^\\circ \\le \\theta \\le 360^\\circ$. Since cosine is positive, the solutions are in the first and fourth quadrants:<br>\\begin{aligned} \\theta &= \\arccos\\left(\\dfrac{1}{ 2 }\\right) = 60^\\circ \\ \\theta &= 360^\\circ - 60^\\circ = 300^\\circ \\end{aligned}<br>Combining these gives the only two valid solutions:<br>$$\\theta = 60^\\circ, \\quad 300^\\circ$$<br><br>Final Answer: $60^\\circ, 300^\\circ$"
        ],
        "pi_options": [
            {
                "ans": "$$\\theta = 60^\\circ, \\quad 300^\\circ, \\quad 120^\\circ, \\quad 240^\\circ$$",
                "feedback": "Check your handling of the quadratic roots. While the quadratic equation yielded $\\cos\\theta = -2$, this has no real solutions because cosine cannot be less than $-1$. It seems you may have mistakenly solved for $\\cos\\theta = -0.5$ as well."
            },
            {
                "ans": "$$\\theta = 60^\\circ, \\quad 120^\\circ$$",
                "feedback": "Check your quadrant rules for cosine. Since $\\cos\\theta = \\dfrac{1}{ 2 }$ is positive, the solutions lie in the first quadrant ($60^\\circ$) and the fourth quadrant ($360^\\circ - 60^\\circ = 300^\\circ$). It seems you may have used the sine quadrant rule ($180^\\circ - 60^\\circ$) by mistake."
            },
            {
                "ans": "$$\\theta = 60^\\circ$$",
                "feedback": "Check to ensure you have found all possible solutions in the $360^\\circ$ interval. Cosine is positive in both the first and fourth quadrants, so you must include $300^\\circ$ alongside $60^\\circ$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Discarding Invalid Trigonometric Roots",
            "content": "When solving quadratic equations in terms of $\\sin\\theta$ or $\\cos\\theta$, you will often find one of the roots lies outside the interval $[-1, 1]$ (like $\\cos\\theta = -2$). Since the sine and cosine functions cannot output values greater than $1$ or less than $-1$, these roots have no real solutions and must be immediately discarded."
        }
    },
    {
        "id": "004306",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Calculus",
        "topic": "Differentiation and Integration",
        "subtopic": [
            "Basic Differentiation",
            "Indefinite Integration",
            "Power Rule"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Showing all your working, solve the following:<br>1. Given that $y = \\dfrac{4}{3x^2} + 10\\sqrt{x}$, find the value of $\\dfrac{\\text{d}y}{\\text{d}x}$ when $x = 8$.<br>2. Find $\\int \\left( 3x^{5/2} + 15x^{-4} + 8 \\right) \\,\\text{d}x$.",
        "steps": [
            "First, rewrite the terms of the equation for $y$ using fractional and negative indices so they are ready to be differentiated:<br>\\begin{aligned} y &= \\dfrac{4}{ 3 }x^{-2} + 10x^{1/2} \\end{aligned}",
            "Differentiate each term with respect to $x$ using the standard power rule $\\dfrac{\\text{d}}{\\text{d}x}(x^n) = nx^{n-1}$:<br>\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{4}{ 3 }(-2)x^{-3} + 10\\left(\\dfrac{1}{ 2 }\\right)x^{-1/2} \\ &= -\\dfrac{8}{ 3 }x^{-3} + 5x^{-1/2} \\ &= -\\dfrac{8}{ 3x^3 } + \\dfrac{5}{ \\sqrt{x} } \\end{aligned}",
            "To evaluate the derivative at $x = 8$, substitute $x = 8$ into the derivative expression:<br>\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x}\\Big|_{x=8} &= -\\dfrac{8}{ 3(8)^3 } + \\dfrac{5}{ \\sqrt{8} } \\ &= -\\dfrac{8}{ 3(512) } + \\dfrac{5}{ 2\\sqrt{2} } \\ &= -\\dfrac{1}{ 192 } + \\dfrac{5}{ 2\\sqrt{2} } \\end{aligned}",
            "Rationalise the denominator of the second term and combine:<br>\\begin{aligned} \\dfrac{5}{ 2\\sqrt{2} } &= \\dfrac{5\\sqrt{2}}{ 4 } \\ \\dfrac{\\text{d}y}{\\text{d}x}\\Big|_{x=8} &= \\dfrac{5\\sqrt{2}}{ 4 } - \\dfrac{1}{ 192 } \\end{aligned}",
            "For part 2, integrate the expression term by term using the integration power rule $\\int x^n \\,\\text{d}x = \\dfrac{x^{n+1}}{ n+1 }$:<br>\\begin{aligned} \\int \\left( 3x^{5/2} + 15x^{-4} + 8 \\right) \\,\\text{d}x &= \\dfrac{3x^{7/2}}{ 7/2 } + \\dfrac{15x^{-3}}{ -3 } + 8x + C \\ &= \\dfrac{6}{ 7 }x^{7/2} - 5x^{-3} + 8x + C \\end{aligned}<br><br>Final Answer: $\\dfrac{5\\sqrt{2}}{ 4 } - \\dfrac{1}{ 192 }$ and $\\dfrac{6}{ 7 }x^{7/2} - 5x^{-3} + 8x + C$"
        ],
        "pi_options": [
            {
                "ans": "$$\\dfrac{5\\sqrt{2}}{ 4 } - \\dfrac{1}{ 192 } \\text{ and } \\dfrac{6}{ 7 }x^{7/2} - 5x^{-3} + 8x$$",
                "feedback": "Check your final integration expression. Remember that for any indefinite integral, you must always include the constant of integration $+ C$."
            },
            {
                "ans": "$$\\dfrac{5\\sqrt{2}}{ 4 } + \\dfrac{1}{ 192 } \\text{ and } \\dfrac{6}{ 7 }x^{7/2} - 5x^{-3} + 8x + C$$",
                "feedback": "Check your signs in the derivative step. Differentiating $\\dfrac{4}{3}x^{-2}$ yields $-\\dfrac{8}{3}x^{-3}$. It seems you may have missed the negative sign, which led to a positive constant term in your final evaluation."
            },
            {
                "ans": "$$\\dfrac{5\\sqrt{2}}{ 4 } - \\dfrac{1}{ 192 } \\text{ and } \\dfrac{3}{ 7 }x^{7/2} - 15x^{-3} + 8x + C$$",
                "feedback": "Check your coefficient division in the integration step. When integrating $3x^{5/2}$, dividing $3$ by $\\dfrac{7}{2}$ yields $3 \\times \\dfrac{2}{7} = \\dfrac{6}{7}$, not $\\dfrac{3}{7}$. Also, when integrating $15x^{-4}$, dividing $15$ by $-3$ yields $-5$, not $-15$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Power Indices Prep",
            "content": "Before applying any differentiation or integration rules, always take a brief moment to rewrite all terms using standard index forms ($x^n$). Converting roots like $\\sqrt{x}$ into $x^{1/2}$ and fractions like $\\dfrac{4}{3x^2}$ into $\\dfrac{4}{3}x^{-2}$ reduces the calculus to a simple, systematic application of the power rules."
        }
    },
    {
        "id": "004307",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Calculus",
        "topic": "Differentiation",
        "subtopic": [
            "First Principles",
            "Algebraic Expansion",
            "Limits"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Given that $y = 5x^2 - 3x$, find $\\dfrac{\\text{d}y}{\\text{d}x}$ from first principles.",
        "steps": [
            "Begin by writing down the formal definition of the derivative from first principles:<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\lim_{h \\to 0} \\dfrac{f(x + h) - f(x)}{ h }$$",
            "Substitute the function $f(x) = 5x^2 - 3x$ into the expression for $f(x + h)$ and expand:<br>\\begin{aligned} f(x + h) &= 5(x + h)^2 - 3(x + h) \\ &= 5\\left(x^2 + 2xh + h^2\\right) - 3x - 3h \\ &= 5x^2 + 10xh + 5h^2 - 3x - 3h \\end{aligned}",
            "Substitute $f(x + h)$ and $f(x)$ into the numerator of our limit definition and simplify:<br>\\begin{aligned} f(x + h) - f(x) &= \\left(5x^2 + 10xh + 5h^2 - 3x - 3h\\right) - \\left(5x^2 - 3x\\right) \\ &= 5x^2 - 5x^2 + 10xh + 5h^2 - 3x + 3x - 3h \\ &= 10xh + 5h^2 - 3h \\end{aligned}",
            "Divide each term in the simplified numerator expression by $h$:<br>\\begin{aligned} \\dfrac{f(x + h) - f(x)}{ h } &= \\dfrac{10xh + 5h^2 - 3h}{ h } \\ &= \\dfrac{h(10x + 5h - 3)}{ h } \\ &= 10x + 5h - 3 \\end{aligned}",
            "Evaluate the limit of this expression as $h \\to 0$ to find the derivative:<br>\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= \\lim_{h \\to 0} \\left(10x + 5h - 3\\right) \\ &= 10x + 5(0) - 3 \\ &= 10x - 3 \\end{aligned}<br><br>Final Answer: $10x - 3$"
        ],
        "pi_options": [
            {
                "ans": "$$10x + 5h - 3$$",
                "feedback": "Remember to evaluate the limit as $h \\to 0$ in the final step. The derivative cannot contain the parameter $h$, so you must substitute $h = 0$ to complete the proof."
            },
            {
                "ans": "$$10x - 3h$$",
                "feedback": "Check your division of the $3h$ term by $h$. Dividing $-3h$ by $h$ yields $-3$, not $-3h$. Ensure you divide every term in the numerator by the denominator."
            },
            {
                "ans": "$$5x - 3$$",
                "feedback": "Check your expansion of $(x + h)^2$. It expands to $x^2 + 2xh + h^2$. If you expand it as $x^2 + h^2$, you miss the middle term $2xh$, which prevents the correct $10x$ derivative term from appearing."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: First Principles Brackets Trap",
            "content": "A common point of failure when differentiating from first principles is expanding binomials incorrectly. Always expand terms like $(x + h)^2$ as $(x^2 + 2xh + h^2)$. Neglecting the middle $2xh$ term will prevent you from dividing out the $h$, stalling your proof."
        }
    },
    {
        "id": "004308",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Calculus",
        "topic": "Differentiation",
        "subtopic": [
            "Equations of Tangents",
            "Coordinates of Curves",
            "Power Rule"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A curve has the equation:<br>$$y = 3x^2 - \\dfrac{4}{ x } + 2$$<br>Find the equation of the tangent to the curve at the point where $x = 2$, giving your answer in the form $y = mx + c$.",
        "steps": [
            "First, find the $y$-coordinate of the point of tangency by substituting $x = 2$ back into the original curve's equation:<br>\\begin{aligned} y(2) &= 3(2)^2 - \\dfrac{4}{ 2 } + 2 \\ &= 3(4) - 2 + 2 \\ &= 12 \\end{aligned}<br>Thus, the point of tangency is $P(2, 12)$.",
            "Rewrite the equation of the curve using negative indices so that it is ready to be differentiated:<br>\\begin{aligned} y &= 3x^2 - 4x^{-1} + 2 \\end{aligned}",
            "Differentiate the curve's equation with respect to $x$ using the standard power rule:<br>\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= 6x - 4(-1)x^{-2} \\ &= 6x + 4x^{-2} \\ &= 6x + \\dfrac{4}{ x^2 } \\end{aligned}",
            "Find the gradient $m$ of the tangent line by substituting $x = 2$ into the derivative expression:<br>\\begin{aligned} m &= 6(2) + \\dfrac{4}{ (2)^2 } \\ &= 12 + \\dfrac{4}{ 4 } \\ &= 12 + 1 = 13 \\end{aligned}",
            "Use the point-gradient formula $y - y_1 = m(x - x_1)$ with the point $P(2, 12)$ and gradient $m = 13$ to find the equation of the tangent:<br>\\begin{aligned} y - 12 &= 13(x - 2) \\ y - 12 &= 13x - 26 \\ y &= 13x - 14 \\end{aligned}<br><br>Final Answer: $y = 13x - 14$"
        ],
        "pi_options": [
            {
                "ans": "$$y = 13x - 12$$",
                "feedback": "Check your straight line equation rearrangement. Expanding $13(x - 2)$ yields $13x - 26$. Adding $12$ to both sides yields $13x - 26 + 12 = 13x - 14$, not $13x - 12$."
            },
            {
                "ans": "$$y = 11x - 10$$",
                "feedback": "Check your derivative calculation for the term $-4x^{-1}$. Differentiating this with respect to $x$ yields $+4x^{-2}$ because the double negative from multiplying by $-1$ makes it positive. It seems you may have kept a negative sign, resulting in $6x - \\dfrac{4}{ x^2 }$."
            },
            {
                "ans": "$$y = 13x - 14$$ but evaluated at point $(2, 13)$",
                "feedback": "Remember to evaluate the $y$-coordinate using the original curve equation, which yields $y = 12$. Do not use the gradient value as your coordinate."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Finding Coordinates Correctly",
            "content": "To find the coordinates of the point of tangency, always substitute the given $x$-value back into the *original* curve's equation, not the derivative. The derivative only gives you the gradient ($m$) at that point, whereas the original curve gives you the physical $y$-coordinate."
        }
    },
    {
        "id": "004309",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Calculus",
        "topic": "Integration",
        "subtopic": [
            "Definite Integration",
            "Area Under a Curve",
            "Polynomial Integration"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Find the exact area of the finite region bounded by the curve $y = 3x^2 + 2x$, the $x$-axis, and the vertical lines $x = 1$ and $x = 3$.",
        "steps": [
            "Set up the definite integral for the area of the region bounded by the curve between the lower boundary $x = 1$ and the upper boundary $x = 3$:<br>$$\\text{Area} = \\int_{1}^{3} \\left( 3x^2 + 2x \\right) \\,\\text{d}x$$",
            "Integrate the polynomial expression using the integration power rule:<br>\\begin{aligned} \\int \\left( 3x^2 + 2x \\right) \\,\\text{d}x &= \\left[ \\dfrac{3x^3}{ 3 } + \\dfrac{2x^2}{ 2 } \\right]_{1}^{3} \\ &= \\left[ x^3 + x^2 \\right]_{1}^{3} \\end{aligned}",
            "Evaluate the definite integral by substituting the upper limit $x = 3$ into the integrated expression:<br>\\begin{aligned} \\text{Upper Limit} &= (3)^3 + (3)^2 \\ &= 27 + 9 = 36 \\end{aligned}",
            "Substitute the lower limit $x = 1$ into the integrated expression:<br>\\begin{aligned} \\text{Lower Limit} &= (1)^3 + (1)^2 \\ &= 1 + 1 = 2 \\end{aligned}",
            "Subtract the lower limit evaluation from the upper limit evaluation to find the exact area of the region:<br>\\begin{aligned} \\text{Area} &= \\text{Upper Limit} - \\text{Lower Limit} \\ &= 36 - 2 = 34 \\end{aligned}<br><br>Final Answer: $34$"
        ],
        "pi_options": [
            {
                "ans": "$$36$$",
                "feedback": "Remember to subtract the evaluation of the lower limit. After integrating and substituting the upper limit to get $36$, you must substitute the lower limit $x=1$ to get $2$, and compute $36 - 2 = 34$."
            },
            {
                "ans": "$$38$$",
                "feedback": "Check your sign operation when combining your limits. The definite integral is evaluated as $\\text{Upper Limit} - \\text{Lower Limit}$. It seems you may have mistakenly added the lower limit instead of subtracting it."
            },
            {
                "ans": "$$\\dfrac{160}{ 3 }$$",
                "feedback": "Check your integration steps. When integrating $3x^2$, the result is $\\dfrac{3x^3}{3} = x^3$. It appears you may have integrated it incorrectly as $3x^3$ without dividing by the new exponent."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Positive Area Verification",
            "content": "When evaluating areas under curves that lie strictly above the $x$-axis, your definite integral must always yield a positive value. If you calculate a negative area, always check for sign distribution errors during your limit substitutions or check if your integrated terms are correct."
        }
    },
    {
        "id": "004310",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Calculus",
        "topic": "Differentiation",
        "subtopic": [
            "Stationary Points",
            "Second Derivative Test",
            "Quadratic Factoring"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A curve has the equation:<br>$$y = 2x^3 - 3x^2 - 12x + 5$$<br>1. Find the coordinates of the stationary points on the curve.<br>2. Determine the nature of each stationary point.",
        "steps": [
            "To find the coordinates of the stationary points, differentiate the curve's equation to find the first derivative:<br>\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= 6x^2 - 6x - 12 \\end{aligned}",
            "Set the first derivative to $0$ and solve the quadratic equation to find the stationary $x$-coordinates:<br>\\begin{aligned} 6x^2 - 6x - 12 &= 0 \\ x^2 - x - 2 &= 0 \\ (x - 2)(x + 1) &= 0 \\end{aligned}<br>This yields two stationary values: $x = 2$ and $x = -1$.",
            "Substitute these $x$-values back into the original curve's equation to find their corresponding $y$-coordinates:<ul><li>For $x = 2$: $y = 2(2)^3 - 3(2)^2 - 12(2) + 5 = 16 - 12 - 24 + 5 = -15 \\implies (2, -15)$</li><li>For $x = -1$: $y = 2(-1)^3 - 3(-1)^2 - 12(-1) + 5 = -2 - 3 + 12 + 5 = 12 \\implies (-1, 12)$</li></ul>",
            "Find the second derivative of the curve's equation to help determine the nature of these points:<br>\\begin{aligned} \\dfrac{\\text{d}^2y}{\\text{d}x^2} &= 12x - 6 \\end{aligned}",
            "Evaluate the second derivative at each stationary point:<ul><li>At $x = 2$: $\\dfrac{\\text{d}^2y}{\\text{d}x^2} = 12(2) - 6 = 18 > 0$ (Local Minimum)</li><li>At $x = -1$: $\\dfrac{\\text{d}^2y}{\\text{d}x^2} = 12(-1) - 6 = -18 < 0$ (Local Maximum)</li></ul><br><br>Final Answer: Stationary points are $(2, -15)$ (local minimum) and $(-1, 12)$ (local maximum)"
        ],
        "pi_options": [
            {
                "ans": "$$(2, -15) \\text{ is a local maximum and } (-1, 12) \\text{ is a local minimum}$$",
                "feedback": "Check your second derivative classifications. If $\\dfrac{\\text{d}^2y}{\\text{d}x^2} > 0$, the curve is concave up, which signifies a local minimum. If $\\dfrac{\\text{d}^2y}{\\text{d}x^2} < 0$, it is concave down, signifying a local maximum. It seems you swapped these rules."
            },
            {
                "ans": "$$(2, -3) \\text{ and } (-1, 12)$$",
                "feedback": "Check your calculations for the $y$-coordinate of the first point. Substituting $x = 2$ yields $y = 2(8) - 3(4) - 24 + 5 = -15$. It seems you may have calculated the $12(2)$ term as $12$ or made an arithmetic slip."
            },
            {
                "ans": "$$(2, -15) \\text{ and } (1, 8)$$",
                "feedback": "Check your factorisation of the quadratic derivative $x^2 - x - 2 = 0$. Since the constant term is negative and the middle term is $-1$, the factors are $(x-2)(x+1) = 0$, yielding solutions $x = 2$ and $x = -1$ rather than $x = 1$."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Deciphering the Second Derivative",
            "content": "The sign of the second derivative $\\dfrac{\\text{d}^2y}{\\text{d}x^2}$ indicates the concavity of the curve. When $\\dfrac{\\text{d}^2y}{\\text{d}x^2} > 0$, the curve is concave up (holding water like a cup), meaning the stationary point lies at the bottom (a minimum). When $\\dfrac{\\text{d}^2y}{\\text{d}x^2} < 0$, the curve is concave down, indicating the stationary point lies at the top (a maximum)."
        }
    },
    {
        "id": "004311",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Functions",
        "subtopic": [
            "Translations",
            "Reciprocal Curves",
            "Asymptotes"
        ],
        "img": "images/p1/004311.png",
        "question": "In this question you must show detailed reasoning.<br><br>The diagram shows a sketch of $y = f(x)$, which is a reciprocal-type curve with asymptotes $x = 0$ and $y = 0$.<br><br>1. Sketch the graph of $y = f(x) - 3$, clearly indicating the equation of any asymptotes.<br>2. Sketch the graph of $y = f(x + 2)$, clearly indicating the equation of any asymptotes.",
        "steps": [
            "For part 1, the transformation $y = f(x) - 3$ represents a vertical translation downwards by $3$ units.<br>This transformation shifts every point on the original curve downwards, which also shifts the horizontal asymptote:<br>\\begin{aligned} \\text{Vertical asymptote} &: x = 0 \\quad \\text{(Unchanged)} \\ \\text{Horizontal asymptote} &: y = -3 \\quad \\text{(Shifted from } y = 0 \\text{)} \\end{aligned}",
            "Using these new asymptotes, sketch the shifted reciprocal curve:<br><br><img src='images/p1/004311_ans1.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
            "For part 2, the transformation $y = f(x + 2)$ represents a horizontal translation to the left by $2$ units.<br>This transformation shifts every point on the original curve to the left, which also shifts the vertical asymptote:<br>\\begin{aligned} \\text{Vertical asymptote} &: x = -2 \\quad \\text{(Shifted from } x = 0 \\text{)} \\ \\text{Horizontal asymptote} &: y = 0 \\quad \\text{(Unchanged)} \\end{aligned}",
            "Using these new asymptotes, sketch the shifted reciprocal curve:<br><br><img src='images/p1/004311_ans2.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br>Final Answer: Sketches completed with asymptotes $y = -3$ for part 1, and $x = -2$ for part 2."
        ],
        "pi_options": [
            {
                "ans": "$$y = f(x) - 3 \\implies y = -3, x = 0; \\quad y = f(x+2) \\implies y = 0, x = 2$$",
                "feedback": "Check the direction of your horizontal translation for $y = f(x + 2)$. A transformation inside the bracket of the form $f(x + c)$ represents a translation to the left by $c$ units, which shifts the vertical asymptote to $x = -2$, not $x = 2$."
            },
            {
                "ans": "$$y = f(x) - 3 \\implies y = 3, x = 0; \\quad y = f(x+2) \\implies y = 0, x = -2$$",
                "feedback": "Check the direction of your vertical translation for $y = f(x) - 3$. A vertical transformation of the form $f(x) - d$ shifts the entire curve downwards, meaning the horizontal asymptote must be at $y = -3$, not $y = 3$."
            },
            {
                "ans": "$$y = f(x) - 3 \\implies y = 0, x = -3; \\quad y = f(x+2) \\implies y = -2, x = 0$$",
                "feedback": "Check which asymptotes are affected by each translation. A vertical translation (outside the bracket) only shifts the horizontal asymptote, while a horizontal translation (inside the bracket) only shifts the vertical asymptote. It seems you swapped these effects."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Shifting Asymptotes",
            "content": "When translating reciprocal curves with asymptotic boundaries: Vertical shifts of the form $f(x) + a$ only affect the horizontal asymptote ($y = a$). Horizontal shifts of the form $f(x + b)$ only affect the vertical asymptote ($x = -b$). Separating these two effects makes sketching translations extremely simple."
        }
    },
    {
        "id": "004312",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Functions",
        "subtopic": [
            "Reflections",
            "Stretches",
            "Stationary Points"
        ],
        "img": "images/p1/004312.png",
        "question": "In this question you must show detailed reasoning.<br><br>The diagram shows a sketch of the curve $y = f(x)$, which has a local maximum at $P(2, 6)$ and a local minimum at $Q(4, -2)$.<br><br>1. Sketch the graph of $y = -f(x)$, clearly indicating the new coordinates and nature of the stationary points.<br>2. Sketch the graph of $y = f(2x)$, clearly indicating the new coordinates and nature of the stationary points.",
        "steps": [
            "For part 1, the transformation $y = -f(x)$ represents a vertical reflection of the curve in the $x$-axis.<br>This operation negates all $y$-coordinates of the stationary points while keeping their $x$-coordinates unchanged. It also reverses their mathematical nature:<br>\\begin{aligned} P(2, 6) &\\implies P'( 2, -6 ) \\quad \\text{(New Local Minimum)} \\ Q(4, -2) &\\implies Q'( 4, 2 ) \\quad \\text{(New Local Maximum)} \\end{aligned}",
            "Using these new turning points, sketch the vertically reflected cubic curve:<br><br><img src='images/p1/004312_ans1.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
            "For part 2, the transformation $y = f(2x)$ represents a horizontal stretch by a factor of $\\dfrac{1}{ 2 }$ (horizontal compression).<br>This operation halves the $x$-coordinates of all points on the curve while keeping their $y$-coordinates and mathematical nature completely unchanged:<br>\\begin{aligned} P(2, 6) &\\implies P''( 1, 6 ) \\quad \\text{(Local Maximum)} \\ Q(4, -2) &\\implies Q''( 2, -2 ) \\quad \\text{(Local Minimum)} \\end{aligned}",
            "Using these compressed coordinate points, sketch the horizontally scaled cubic curve:<br><br><img src='images/p1/004312_ans2.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br>Final Answer: Sketches completed with $P'(2, -6)$ and $Q'(4, 2)$ for part 1, and $P''(1, 6)$ and $Q''(2, -2)$ for part 2."
        ],
        "pi_options": [
            {
                "ans": "$$y = -f(x) \\implies P'(2, -6) \\text{ max}, Q'(4, 2) \\text{ min}$$",
                "feedback": "Check the nature of your stationary points after the vertical reflection. Reflecting a peak (local maximum) across the $x$-axis turns it into a trough (local minimum), and vice versa. It seems you forgot to reverse their classifications."
            },
            {
                "ans": "$$y = f(2x) \\implies P''(4, 6), Q''(8, -2)$$",
                "feedback": "Check your scale factor for the horizontal transformation $f(2x)$. Horizontal transformations inside the function bracket behave as the reciprocal of the coefficient, representing a compression factor of $\\dfrac{1}{ 2 }$. You must divide the $x$-coordinates by 2 rather than multiplying them by 2."
            },
            {
                "ans": "$$y = f(2x) \\implies P''(1, 12), Q''(2, -4)$$",
                "feedback": "Check which coordinates are affected by the horizontal transformation $f(2x)$. Transformations inside the bracket only affect the $x$-coordinates, leaving the vertical $y$-coordinates of your stationary points completely unchanged."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Horizontal Scale Factor Traps",
            "content": "Remember that horizontal transformations inside the function bracket (such as $f(kx)$) behave as the reciprocal of the coefficient, representing a horizontal stretch of factor $\\dfrac{1}{ k }$. For $f(2x)$, you must multiply all $x$-coordinates by $\\dfrac{1}{ 2 }$, leaving the $y$-coordinates completely unchanged."
        }
    },
    {
        "id": "004313",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Functions",
        "subtopic": [
            "Translations",
            "Quadratic Curves",
            "Vertices"
        ],
        "img": "images/p1/004313.png",
        "question": "In this question you must show detailed reasoning.<br><br>The diagram shows a sketch of the quadratic curve $y = f(x)$, which has its vertex (minimum point) at $(3, -4)$ and crosses the $x$-axis at $(1, 0)$ and $(5, 0)$.<br><br>1. Sketch the graph of $y = f(x) + 4$, clearly indicating the coordinates of the new vertex and any $x$-intercepts.<br>2. Sketch the graph of $y = f(x - 2)$, clearly indicating the coordinates of the new vertex.",
        "steps": [
            "For part 1, the transformation $y = f(x) + 4$ represents a vertical translation upwards by $4$ units.<br>This operation adds $4$ to the $y$-coordinates of all points on the curve while keeping their $x$-coordinates unchanged:<br>\\begin{aligned} \\text{New Vertex} &= ( 3, -4 + 4 ) = (3, 0) \\end{aligned}",
            "To find the new $x$-intercepts, solve $f(x) + 4 = 0 \\implies f(x) = -4$. The original curve only reaches $y = -4$ at its vertex ($x = 3$), so the new graph has only a single double-root intersection point on the $x$-axis, which occurs at the new vertex $(3, 0)$. Sketch this shifted parabola:<br><br><img src='images/p1/004313_ans1.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
            "For part 2, the transformation $y = f(x - 2)$ represents a horizontal translation to the right by $2$ units.<br>This operation adds $2$ to the $x$-coordinates of all points on the curve while keeping their $y$-coordinates completely unchanged:<br>\\begin{aligned} \\text{New Vertex} &= ( 3 + 2, -4 ) = (5, -4) \\end{aligned}",
            "Using this new vertex coordinate, sketch the horizontally translated parabola:<br><br><img src='images/p1/004313_ans2.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br>Final Answer: New vertex at $(3, 0)$ touching the $x$-axis for part 1, and new vertex at $(5, -4)$ for part 2."
        ],
        "pi_options": [
            {
                "ans": "$$y = f(x) + 4 \\implies \\text{Vertex: } (3, 0), \\quad \\text{Intercepts: } (1, 4) \\text{ and } (5, 4)$$",
                "feedback": "Check your $x$-intercepts for part 1. Intercepts are defined as the points where the curve crosses the $x$-axis (where $y = 0$). While $(1, 4)$ and $(5, 4)$ are points on the new curve, they are no longer $x$-intercepts. The only $x$-intercept is the new vertex at $(3, 0)$."
            },
            {
                "ans": "$$y = f(x - 2) \\implies \\text{Vertex: } (1, -4)$$",
                "feedback": "Check the direction of your horizontal translation for $y = f(x - 2)$. A transformation inside the bracket of the form $f(x - c)$ represents a horizontal translation to the right by $c$ units, which adds $2$ to the $x$-coordinate: $(3 + 2, -4) = (5, -4)$, not $(1, -4)$."
            },
            {
                "ans": "$$y = f(x - 2) \\implies \\text{Vertex: } (5, -6)$$",
                "feedback": "Check which coordinates are affected by the horizontal transformation $f(x - 2)$. Transformations inside the bracket only affect the $x$-coordinates, leaving the vertical $y$-coordinates of your vertex completely unchanged."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Tracking the Vertex",
            "content": "For any quadratic curve transformation, tracking the vertex (minimum or maximum point) is the absolute best way to orient your sketch. Once you establish the new coordinates of the vertex, the rest of the parabola simply retains its symmetric shape around that central point."
        }
    },
    {
        "id": "004314",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Functions",
        "subtopic": [
            "Translations",
            "Reflections",
            "Exponential Curves",
            "Asymptotes"
        ],
        "img": "images/p1/004314.png",
        "question": "In this question you must show detailed reasoning.<br><br>The diagram shows a sketch of the curve $y = f(x)$ where $f(x) = 3^x$, which passes through the point $(0, 1)$ and has a horizontal asymptote at $y = 0$.<br><br>1. Sketch the graph of $y = f(x) - 2$, clearly indicating the equation of the new horizontal asymptote and the coordinates of the point where the curve crosses the $y$-axis.<br>2. Sketch the graph of $y = f(-x)$, clearly indicating the coordinates of the point where the curve crosses the $y$-axis.",
        "steps": [
            "For part 1, the transformation $y = f(x) - 2$ represents a vertical translation downwards by $2$ units.<br>This operation shifts both the curve and its horizontal asymptote downwards by $2$ units:<br>\\begin{aligned} \\text{New Asymptote} &: y = -2 \\end{aligned}",
            "To find the new $y$-intercept, substitute $x = 0$ into the translated equation:<br>\\begin{aligned} y(0) &= f(0) - 2 \\ &= 3^0 - 2 = 1 - 2 = -1 \\end{aligned}<br>Thus, the new $y$-intercept is $(0, -1)$. Sketch the vertically shifted exponential curve:<br><br><img src='images/p1/004314_ans1.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
            "For part 2, the transformation $y = f(-x)$ represents a horizontal reflection of the curve in the $y$-axis.<br>This reflection does not affect the horizontal asymptote nor the $y$-intercept, because points on the $y$-axis ($x = 0$) are invariant under horizontal reflection:<br>\\begin{aligned} \\text{Asymptote} &: y = 0 \\ \\text{y-intercept} &: (0, 1) \\end{aligned}",
            "Sketch this horizontally reflected exponential decay curve:<br><br><img src='images/p1/004314_ans2.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br>Final Answer: New asymptote at $y = -2$ with intercept $(0, -1)$ for part 1, and asymptote at $y = 0$ with intercept $(0, 1)$ for part 2."
        ],
        "pi_options": [
            {
                "ans": "$$y = f(x) - 2 \\implies \\text{Asymptote: } y = 0, \\quad \\text{y-intercept: } (0, -1)$$",
                "feedback": "Check your horizontal asymptote for part 1. When translating an exponential curve vertically, the horizontal asymptote is shifted along with the curve, meaning it moves from $y = 0$ to $y = -2$."
            },
            {
                "ans": "$$y = f(x) - 2 \\implies \\text{Asymptote: } y = -2, \\quad \\text{y-intercept: } (0, 1)$$",
                "feedback": "Check your $y$-intercept calculation for part 1. You must shift the entire curve downwards, which moves the $y$-intercept from $(0, 1)$ down by 2 units to $(0, -1)$."
            },
            {
                "ans": "$$y = f(-x) \\implies \\text{Asymptote: } x = 0, \\quad \\text{y-intercept: } (1, 0)$$",
                "feedback": "Check the nature of your reflection for $y = f(-x)$. This represents a horizontal reflection in the $y$-axis. The horizontal asymptote remains at $y = 0$ and the $y$-intercept remains at $(0, 1)$. It seems you may have mistakenly treated it as an inverse function reflection."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Exponential Limits",
            "content": "The horizontal asymptote of an exponential growth curve represents its limiting behavior as $x \\to -\\infty$. Translating the curve vertically by $k$ units shifts the entire output range of the function, which is why the horizontal asymptote moves from $y = 0$ directly to $y = k$."
        }
    },
    {
        "id": "004315",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Functions",
        "subtopic": [
            "Translations",
            "Reflections",
            "Stretches",
            "Point Transformations"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The point $P(4, -6)$ lies on the curve with equation $y = f(x)$. Find the coordinates of the corresponding point on the curve with equation:<br><br>1. $y = f(x + 3) - 5$<br>2. $y = -2f(x)$",
        "steps": [
            "For part 1, analyze the horizontal and vertical transformations in $y = f(x + 3) - 5$ individually:<br><ul><li>The term $f(x + 3)$ represents a horizontal translation to the left by $3$ units, which affects the $x$-coordinate.</li><li>The term $- 5$ represents a vertical translation downwards by $5$ units, which affects the $y$-coordinate.</li></ul>",
            "Apply these operations to the coordinates of the original point $P(4, -6)$:<br>\\begin{aligned} x' &= 4 - 3 = 1 \\ y' &= -6 - 5 = -11 \\end{aligned}<br>Thus, the coordinates of the corresponding point are $(1, -11)$.",
            "For part 2, analyze the vertical transformations in $y = -2f(x)$:<br><ul><li>The coefficient $-2$ represents a vertical stretch by a scale factor of $2$ combined with a vertical reflection in the $x$-axis.</li><li>Because there are no horizontal terms inside the bracket, the $x$-coordinate remains completely unchanged.</li></ul>",
            "Apply these vertical operations to the $y$-coordinate of the original point $P(4, -6)$:<br>\\begin{aligned} x'' &= 4 \\ y'' &= -2 \\times (-6) = 12 \\end{aligned}<br>Thus, the coordinates of the corresponding point are $(4, 12)$.<br><br>Final Answer: $(1, -11)$ for part 1, and $(4, 12)$ for part 2."
        ],
        "pi_options": [
            {
                "ans": "$$(7, -11) \\text{ and } (4, 12)$$",
                "feedback": "Check the direction of your horizontal transformation in part 1. A transformation inside the bracket of the form $f(x + 3)$ translates the graph to the left, which means you must subtract 3 from the $x$-coordinate: $4 - 3 = 1$, not $4 + 3 = 7$."
            },
            {
                "ans": "$$(1, -11) \\text{ and } (2, -12)$$",
                "feedback": "Check which coordinates are affected by the vertical transformation $y = -2f(x)$. Since the coefficient is outside the bracket, it only affects the $y$-coordinate. The $x$-coordinate must remain completely unchanged at $4$."
            },
            {
                "ans": "$$(1, -11) \\text{ and } (4, -12)$$",
                "feedback": "Check your sign operation in the vertical stretch of part 2. Multiplying the negative coordinate $y = -6$ by the negative coefficient $-2$ yields a positive coordinate: $-2 \\times (-6) = 12$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Coordinate Independence",
            "content": "When transforming individual coordinate points algebraically, horizontal transformations (inside the bracket) only affect the $x$-coordinates, while vertical transformations (outside the bracket) only affect the $y$-coordinates. Keeping these operations independent is key to avoiding mixed-coordinate errors."
        }
    },
    {
        "id": "004316",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Calculus",
        "topic": "Integration",
        "subtopic": [
            "Area Under a Curve",
            "Definite Integration",
            "Equations of Curves"
        ],
        "img": "images/p1/004316.png",
        "question": "In this question you must show detailed reasoning.<br><br>The diagram shows a sketch of the curve $C$ with equation $y = 5 + 4x - x^2$ and the line $L$ with equation $y = x + 1$. The line intersects the curve at the points $A$ and $B$.<br><br>1. Find the coordinates of $A$ and $B$.<br>2. Calculate the exact area of the region enclosed by the curve $C$ and the line $L$.",
        "steps": [
            "To find the coordinates of the intersection points, set the equation of the curve equal to the equation of the line:<br>\\begin{aligned} 5 + 4x - x^2 &= x + 1 \\ -x^2 + 3x + 4 &= 0 \\end{aligned}<br>Multiply the entire quadratic equation by $-1$ to make factoring easier:<br>\\begin{aligned} x^2 - 3x - 4 &= 0 \\ (x - 4)(x + 1) &= 0 \\end{aligned}",
            "This yields two $x$-coordinates: $x = 4$ and $x = -1$. Substitute these back into the linear equation $y = x + 1$ to find the corresponding $y$-coordinates:<ul><li>For $x = 4$: $y = 4 + 1 = 5 \\implies B(4, 5)$</li><li>For $x = -1$: $y = -1 + 1 = 0 \\implies A(-1, 0)$</li></ul>Thus, the coordinates of the intersection points are $A(-1, 0)$ and $B(4, 5)$.",
            "To find the enclosed area, integrate the difference between the upper curve $C$ and the lower line $L$ over the interval $[-1, 4]$:<br>\\begin{aligned} \\text{Area} &= \\int_{ -1 }^{ 4 } \\left[ (5 + 4x - x^2) - (x + 1) \\right] \\,\\text{d}x \\ &= \\int_{ -1 }^{ 4 } \\left( 4 + 3x - x^2 \\right) \\,\\text{d}x \\end{aligned}",
            "Integrate the polynomial expression term by term:<br>\\begin{aligned} \\text{Area} &= \\left[ 4x + \\dfrac{3}{ 2 }x^2 - \\dfrac{1}{ 3 }x^3 \\right]_{ -1 }^{ 4 } \\end{aligned}",
            "Evaluate the integrated expression at the upper limit $x = 4$:<br>\\begin{aligned} \\text{Upper Limit} &= 4(4) + \\dfrac{3}{ 2 }(16) - \\dfrac{1}{ 3 }(64) \\ &= 16 + 24 - \\dfrac{64}{ 3 } \\ &= 40 - \\dfrac{64}{ 3 } = \\dfrac{120 - 64}{ 3 } = \\dfrac{56}{ 3 } \\end{aligned}",
            "Evaluate the integrated expression at the lower limit $x = -1$:<br>\\begin{aligned} \\text{Lower Limit} &= 4(-1) + \\dfrac{3}{ 2 }(-1)^2 - \\dfrac{1}{ 3 }(-1)^3 \\ &= -4 + \\dfrac{3}{ 2 } + \\dfrac{1}{ 3 } \\ &= -4 + \\dfrac{9}{ 6 } + \\dfrac{2}{ 6 } \\ &= -4 + \\dfrac{11}{ 6 } = -\\dfrac{13}{ 6 } \\end{aligned}",
            "Subtract the lower limit evaluation from the upper limit evaluation to find the exact area of the enclosed region:<br>\\begin{aligned} \\text{Area} &= \\dfrac{56}{ 3 } - \\left( -\\dfrac{13}{ 6 } \\right) \\ &= \\dfrac{112}{ 6 } + \\dfrac{13}{ 6 } = \\dfrac{125}{ 6 } \\end{aligned}<br><br>Final Answer: $A(-1, 0)$ and $B(4, 5)$; exact area is $\\dfrac{125}{ 6 }$"
        ],
        "pi_options": [
            {
                "ans": "$$A(-1, 0), \\quad B(4, 5); \\quad \\text{Area: } \\dfrac{99}{ 6 }$$",
                "feedback": "Check your sign operation in the final limit subtraction step. The exact area is calculated as $\\text{Upper Limit} - \\text{Lower Limit} = \\dfrac{112}{ 6 } - \\left(-\\dfrac{13}{ 6 }\\right) = \\dfrac{125}{ 6 }$. It seems you may have subtracted the absolute values instead of adding them."
            },
            {
                "ans": "$$A(1, 2), \\quad B(-4, -3); \\quad \\text{Area: } \\dfrac{125}{ 6 }$$",
                "feedback": "Check your factorisation of the quadratic equation $x^2 - 3x - 4 = 0$. Since the constant term is negative, the signs inside the binomial factors must be opposite, giving $(x - 4)(x + 1) = 0$, yielding solutions $x = 4$ and $x = -1$ rather than $x = -4$ and $x = 1$."
            },
            {
                "ans": "$$A(-1, 0), \\quad B(4, 5); \\quad \\text{Area: } 40$$",
                "feedback": "Check your limit evaluations. It seems you only evaluated the constant parts of your upper limit terms and forgot to subtract both the fractional power terms and the lower limit evaluation."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Distributing Subtractions",
            "content": "When calculating the area enclosed between a curve $y = f(x)$ and a line $y = g(x)$, always integrate the difference $\\int [f(x) - g(x)] \\,\\text{d}x$. Ensure you distribute the subtraction sign to every term of the lower function $g(x) = x + 1$ to avoid sign slips."
        }
    },
    {
        "id": "004317",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Calculus",
        "topic": "Integration",
        "subtopic": [
            "Area Under a Curve",
            "Definite Integration",
            "Polynomial Curves"
        ],
        "img": "images/p1/004317.png",
        "question": "In this question you must show detailed reasoning.<br><br>The diagram shows a sketch of the curve $C$ with equation $y = x^3 - 3x^2$ and the $x$-axis.<br><br>1. Find the coordinates of the points where the curve intersects the $x$-axis.<br>2. Find the exact area of the finite region bounded by the curve and the $x$-axis.",
        "steps": [
            "To find the points where the curve intersects the $x$-axis, set $y = 0$ and factorise the cubic equation:<br>\\begin{aligned} x^3 - 3x^2 &= 0 \\ x^2(x - 3) &= 0 \\end{aligned}<br>This yields two solutions: $x = 0$ and $x = 3$.<br>So, the two $x$-intercept points are $(0, 0)$ and $(3, 0)$.",
            "On the interval $[0, 3]$, the curve lies entirely below the $x$-axis ($y \\le 0$). To find the exact geometric area, take the negative of the definite integral over this interval:<br>\\begin{aligned} \\text{Area} &= -\\int_{ 0 }^{ 3 } \\left( x^3 - 3x^2 \\right) \\,\\text{d}x \\end{aligned}",
            "Integrate the expression using the power rule:<br>\\begin{aligned} \\text{Area} &= -\\left[ \\dfrac{1}{ 4 }x^4 - x^3 \\right]_{ 0 }^{ 3 } \\end{aligned}",
            "Evaluate the integrated expression at the upper limit $x = 3$:<br>\\begin{aligned} \\text{Upper Limit} &= \\dfrac{1}{ 4 }(3)^4 - (3)^3 \\ &= \\dfrac{81}{ 4 } - 27 \\ &= \\dfrac{81}{ 4 } - \\dfrac{108}{ 4 } = -\\dfrac{27}{ 4 } \\end{aligned}",
            "Substitute the lower limit $x = 0$ into the expression:<br>\\begin{aligned} \\text{Lower Limit} &= \\dfrac{1}{ 4 }(0)^4 - (0)^3 = 0 \\end{aligned}",
            "Subtract the lower limit from the upper limit and negate the result to find the exact geometric area:<br>\\begin{aligned} \\text{Area} &= -\\left( -\\dfrac{27}{ 4 } - 0 \\right) = \\dfrac{27}{ 4 } \\end{aligned}<br><br>Final Answer: $(0, 0)$ and $(3, 0)$; exact area is $\\dfrac{27}{ 4 }$"
        ],
        "pi_options": [
            {
                "ans": "$$(0, 0) \\text{ and } (3, 0); \\quad \\text{Area: } -\\dfrac{27}{ 4 }$$",
                "feedback": "Check your final area value. Since area represents a physical geometric quantity, it must always be positive. You must negate your definite integral result if the region lies entirely below the $x$-axis."
            },
            {
                "ans": "$$(0, 0) \\text{ and } (9, 0); \\quad \\text{Area: } \\dfrac{27}{ 4 }$$",
                "feedback": "Check your factorization of $x^3 - 3x^2 = 0$. Factoring out $x^2$ gives $x^2(x - 3) = 0$, which yields $x = 3$, not $x = 9$."
            },
            {
                "ans": "$$(0, 0) \\text{ and } (3, 0); \\quad \\text{Area: } 27$$",
                "feedback": "Check your limit evaluation. It seems you forgot to divide the first term $x^4$ by 4 during the integration step, which led to $81 - 27 = 54$ before division."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Negative Integrals",
            "content": "Since the region lies entirely below the $x$-axis on the interval $[0, 3]$, the definite integral of the function will naturally evaluate to a negative value. To find the geometric area, take the absolute value or negate the integral: $A = -\\int_{0}^{3} y \\,\\text{d}x$."
        }
    },
    {
        "id": "004318",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Calculus",
        "topic": "Integration",
        "subtopic": [
            "Area Under a Curve",
            "Definite Integration",
            "Intersecting Curves"
        ],
        "img": "images/p1/004318.png",
        "question": "In this question you must show detailed reasoning.<br><br>The diagram shows a sketch of the curve $C_1$ with equation $y = 8 - x^2$ and the curve $C_2$ with equation $y = x^2$. The two curves intersect at the points $P$ and $Q$.<br><br>1. Find the coordinates of the points of intersection $P$ and $Q$.<br>2. Calculate the exact area of the region enclosed between the two curves.",
        "steps": [
            "To find the intersection coordinates, set the equations of the two curves equal to each other:<br>\\begin{aligned} 8 - x^2 &= x^2 \\ 2x^2 &= 8 \\ x^2 &= 4 \\implies x = \\pm 2 \\end{aligned}",
            "Substitute these $x$-values back into $y = x^2$ to find the corresponding $y$-coordinates:<ul><li>For $x = 2$: $y = (2)^2 = 4 \\implies Q(2, 4)$</li><li>For $x = -2$: $y = (-2)^2 = 4 \\implies P(-2, 4)$</li></ul>Thus, the coordinates of the intersection points are $P(-2, 4)$ and $Q(2, 4)$.",
            "On the interval $[-2, 2]$, the curve $C_1$ lies above the curve $C_2$. Integrate the difference between the upper curve and the lower curve:<br>\\begin{aligned} \\text{Area} &= \\int_{ -2 }^{ 2 } \\left[ (8 - x^2) - x^2 \\right] \\,\\text{d}x \\ &= \\int_{ -2 }^{ 2 } \\left( 8 - 2x^2 \\right) \\,\\text{d}x \\end{aligned}",
            "Integrate the expression using the power rule:<br>\\begin{aligned} \\text{Area} &= \\left[ 8x - \\dfrac{2}{ 3 }x^3 \\right]_{ -2 }^{ 2 } \\end{aligned}",
            "Evaluate the integrated expression at the upper limit $x = 2$:<br>\\begin{aligned} \\text{Upper Limit} &= 8(2) - \\dfrac{2}{ 3 }(2)^3 \\ &= 16 - \\dfrac{16}{ 3 } = \\dfrac{48 - 16}{ 3 } = \\dfrac{32}{ 3 } \\end{aligned}",
            "Evaluate the integrated expression at the lower limit $x = -2$:<br>\\begin{aligned} \\text{Lower Limit} &= 8(-2) - \\dfrac{2}{ 3 }(-2)^3 \\ &= -16 + \\dfrac{16}{ 3 } = -\\dfrac{32}{ 3 } \\end{aligned}",
            "Subtract the lower limit evaluation from the upper limit evaluation to find the exact area:<br>\\begin{aligned} \\text{Area} &= \\dfrac{32}{ 3 } - \\left( -\\dfrac{32}{ 3 } \\right) = \\dfrac{64}{ 3 } \\end{aligned}<br><br>Final Answer: $P(-2, 4)$ and $Q(2, 4)$; exact area is $\\dfrac{64}{ 3 }$"
        ],
        "pi_options": [
            {
                "ans": "$$P(-2, 4), \\quad Q(2, 4); \\quad \\text{Area: } 0$$",
                "feedback": "Check your subtraction at the final step. Because you are calculating $\\text{Upper Limit} - \\text{Lower Limit}$, the double negative resolves to addition: $\\dfrac{32}{ 3 } - \\left(-\\dfrac{32}{ 3 }\\right) = \\dfrac{64}{ 3 }$. It seems you may have subtracted them directly to get $0$."
            },
            {
                "ans": "$$P(-4, 16), \\quad Q(4, 16); \\quad \\text{Area: } \\dfrac{64}{ 3 }$$",
                "feedback": "Check your algebraic step when solving $2x^2 = 8$. Dividing by 2 yields $x^2 = 4 \\implies x = \\pm 2$. It seems you may have forgotten to divide by 2 first, leading to $x^2 = 8 \\implies x = \\pm 4$."
            },
            {
                "ans": "$$P(-2, 4), \\quad Q(2, 4); \\quad \\text{Area: } 16$$",
                "feedback": "Check your integration step. When integrating $2x^2$, the result is $\\dfrac{2}{3}x^3$. It seems you may have omitted the fraction and integrated it as simply $2x^3$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Symmetry Shortcuts",
            "content": "When integrating a symmetric region across the $y$-axis (such as from $-2$ to $2$ for even functions), you can simplify your calculation by integrating from $0$ to $2$ and doubling the result: $\\text{Area} = 2 \\int_{0}^{2} (8 - 2x^2) \\,\\text{d}x$. This dramatically reduces the risk of arithmetic slips with negative limits!"
        }
    },
    {
        "id": "004319",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Calculus",
        "topic": "Integration",
        "subtopic": [
            "Area Under a Curve",
            "Definite Integration",
            "Radical Curves"
        ],
        "img": "images/p1/004319.png",
        "question": "In this question you must show detailed reasoning.<br><br>The diagram shows a sketch of the curve $C$ with equation $y = 4\\sqrt{x}$ and the line $L$ with equation $y = x + 3$. The line intersects the curve at the points $A$ and $B$.<br><br>1. Show that the coordinates of the points of intersection are $A(1, 4)$ and $B(9, 12)$.<br>2. Calculate the exact area of the region enclosed by the curve $C$ and the line $L$.",
        "steps": [
            "To verify the coordinates, substitute the points into both equations:<ul><li>For $A(1, 4)$: $y = 4\\sqrt{1} = 4$, and $y = 1 + 3 = 4$. Verified.</li><li>For $B(9, 12)$: $y = 4\\sqrt{9} = 12$, and $y = 9 + 3 = 12$. Verified.</li></ul>Both points lie on both the curve and the line.",
            "On the interval $[1, 9]$, the curve $C$ lies above the line $L$. Set up the definite integral for the enclosed area:<br>\\begin{aligned} \\text{Area} &= \\int_{ 1 }^{ 9 } \\left( 4\\sqrt{x} - (x + 3) \\right) \\,\\text{d}x \\ &= \\int_{ 1 }^{ 9 } \\left( 4x^{1/2} - x - 3 \\right) \\,\\text{d}x \\end{aligned}",
            "Integrate the expression term by term using the integration power rule:<br>\\begin{aligned} \\text{Area} &= \\left[ 4\\left(\\dfrac{2}{ 3 }x^{3/2}\\right) - \\dfrac{1}{ 2 }x^2 - 3x \\right]_{ 1 }^{ 9 } \\ &= \\left[ \\dfrac{8}{ 3 }x^{3/2} - \\dfrac{1}{ 2 }x^2 - 3x \\right]_{ 1 }^{ 9 } \\end{aligned}",
            "Evaluate the integrated expression at the upper limit $x = 9$, noting that $9^{3/2} = (\\sqrt{9})^3 = 27$:<br>\\begin{aligned} \\text{Upper Limit} &= \\dfrac{8}{ 3 }(27) - \\dfrac{1}{ 2 }(81) - 3(9) \\ &= 72 - 40.5 - 27 \\ &= 72 - 67.5 = 4.5 = \\dfrac{9}{ 2 } \\end{aligned}",
            "Evaluate the integrated expression at the lower limit $x = 1$:<br>\\begin{aligned} \\text{Lower Limit} &= \\dfrac{8}{ 3 }(1)^{3/2} - \\dfrac{1}{ 2 }(1)^2 - 3(1) \\ &= \\dfrac{8}{ 3 } - \\dfrac{1}{ 2 } - 3 \\ &= \\dfrac{8}{ 3 } - \\dfrac{7}{ 2 } \\ &= \\dfrac{16}{ 6 } - \\dfrac{21}{ 6 } = -\\dfrac{5}{ 6 } \\end{aligned}",
            "Subtract the lower limit evaluation from the upper limit evaluation to find the exact area of the enclosed region:<br>\\begin{aligned} \\text{Area} &= \\dfrac{9}{ 2 } - \\left( -\\dfrac{5}{ 6 } \\right) \\ &= \\dfrac{27}{ 6 } + \\dfrac{5}{ 6 } = \\dfrac{32}{ 6 } = \\dfrac{16}{ 3 } \\end{aligned}<br><br>Final Answer: Intersections shown; exact area is $\\dfrac{16}{ 3 }$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Area: } \\dfrac{11}{ 3 }$$",
                "feedback": "Check your sign operation in the final limit subtraction step. The exact area is calculated as $\\text{Upper Limit} - \\text{Lower Limit} = \\dfrac{9}{ 2 } - \\left(-\\dfrac{5}{ 6 }\\right) = \\dfrac{16}{ 3 }$. It seems you may have subtracted the absolute values instead of adding them."
            },
            {
                "ans": "$$\\text{Area: } \\dfrac{22}{ 3 }$$",
                "feedback": "Check your calculation for the upper limit. Evaluating $\\dfrac{8}{3} \\times 9^{3/2}$ yields $\\dfrac{8}{3} \\times 27 = 72$. It seems you may have evaluated it as $\\dfrac{8}{3} \\times 9 = 24$."
            },
            {
                "ans": "$$\\text{Area: } \\dfrac{16}{ 3 } \\text{ but evaluated on interval } [0, 9]$$",
                "feedback": "Check the limits of integration. The enclosed region is bounded between the two intersection points $A$ and $B$, which means the integration boundaries are $x = 1$ and $x = 9$, not starting from $x = 0$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Evaluating Fractional Bounds",
            "content": "When evaluating $x^{3/2}$ at the upper bound $x = 9$, first take the square root of $9$ to get $3$, and then cube it to get $27$. Splitting fractional powers into root-then-power operations keeps your mental arithmetic precise and error-free."
        }
    },
    {
        "id": "004320",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Calculus",
        "topic": "Integration",
        "subtopic": [
            "Area Under a Curve",
            "Definite Integration",
            "Radical Curves"
        ],
        "img": "images/p1/004320.png",
        "question": "In this question you must show detailed reasoning.<br><br>The diagram shows a sketch of the curve with equation $y = 3\\sqrt{x} - 2$, which crosses the $x$-axis at the point $A$.<br><br>1. Find the exact coordinates of the point $A$.<br>2. Find the exact area of the region bounded by the curve, the $x$-axis, and the vertical line $x = 4$.",
        "steps": [
            "To find the coordinates of point $A$, set the equation of the curve equal to $0$ (since $y = 0$ on the $x$-axis) and solve for $x$:<br>\\begin{aligned} 3\\sqrt{x} - 2 &= 0 \\ 3\\sqrt{x} &= 2 \\ \\sqrt{x} &= \\dfrac{2}{ 3 } \\ x &= \\left(\\dfrac{2}{ 3 }\\right)^2 = \\dfrac{4}{ 9 } \\end{aligned}<br>Thus, the coordinates of point $A$ are $A\\left(\\dfrac{4}{ 9 }, 0\\right)$.",
            "On the interval $\\left[\\dfrac{4}{ 9 }, 4\\right]$, the curve lies entirely above the $x$-axis. Set up the definite integral for the bounded area:<br>\\begin{aligned} \\text{Area} &= \\int_{ 4/9 }^{ 4 } \\left( 3x^{1/2} - 2 \\right) \\,\\text{d}x \\end{aligned}",
            "Integrate the expression using the power rule:<br>\\begin{aligned} \\text{Area} &= \\left[ 3\\left(\\dfrac{2}{ 3 }x^{3/2}\\right) - 2x \\right]_{ 4/9 }^{ 4 } \\ &= \\left[ 2x^{3/2} - 2x \\right]_{ 4/9 }^{ 4 } \\end{aligned}",
            "Evaluate the integrated expression at the upper limit $x = 4$, noting that $4^{3/2} = (\\sqrt{4})^3 = 8$:<br>\\begin{aligned} \\text{Upper Limit} &= 2(4)^{3/2} - 2(4) \\ &= 2(8) - 8 \\ &= 16 - 8 = 8 \\end{aligned}",
            "Evaluate the integrated expression at the lower limit $x = \\dfrac{4}{ 9 }$, noting that $\\left(\\dfrac{4}{ 9 }\\right)^{3/2} = \\left(\\sqrt{\\dfrac{4}{ 9 }}\\right)^3 = \\dfrac{8}{ 27 }$:<br>\\begin{aligned} \\text{Lower Limit} &= 2\\left(\\dfrac{4}{ 9 }\\right)^{3/2} - 2\\left(\\dfrac{4}{ 9 }\\right) \\ &= 2\\left(\\dfrac{8}{ 27 }\\right) - \\dfrac{8}{ 9 } \\ &= \\dfrac{16}{ 27 } - \\dfrac{24}{ 27 } = -\\dfrac{8}{ 27 } \\end{aligned}",
            "Subtract the lower limit evaluation from the upper limit evaluation to find the exact area of the bounded region:<br>\\begin{aligned} \\text{Area} &= 8 - \\left( -\\dfrac{8}{ 27 } \\right) \\ &= \\dfrac{216}{ 27 } + \\dfrac{8}{ 27 } = \\dfrac{224}{ 27 } \\end{aligned}<br><br>Final Answer: $A\\left(\\dfrac{4}{ 9 }, 0\\right)$; exact area is $\\dfrac{224}{ 27 }$"
        ],
        "pi_options": [
            {
                "ans": "$$A\\left(\\dfrac{4}{ 9 }, 0\\right); \\quad \\text{Area: } \\dfrac{208}{ 27 }$$",
                "feedback": "Check your sign operation in the final limit subtraction step. The exact area is calculated as $\\text{Upper Limit} - \\text{Lower Limit} = 8 - \\left(-\\dfrac{8}{ 27 }\\right) = \\dfrac{224}{ 27 }$. It seems you may have subtracted the absolute values instead of adding them."
            },
            {
                "ans": "$$A\\left(\\dfrac{2}{ 3 }, 0\\right); \\quad \\text{Area: } \\dfrac{224}{ 27 }$$",
                "feedback": "Check your calculation for point $A$. To isolate $x$ from $\\sqrt{x} = \\dfrac{2}{ 3 }$, you must square both sides of the equation, which yields $x = \\dfrac{4}{ 9 }$, not $x = \\dfrac{2}{ 3 }$."
            },
            {
                "ans": "$$A\\left(\\dfrac{4}{ 9 }, 0\\right); \\quad \\text{Area: } 8$$",
                "feedback": "Remember to evaluate the definite integral at both limits. Simply substituting $x = 4$ only evaluates the upper limit. You must also evaluate and subtract the lower limit at $x = \\dfrac{4}{ 9 }$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Fraction Limit Subtraction",
            "content": "When subtracting negative fractional limits (like $-\\left(-\\dfrac{8}{ 27 }\\right)$), be extremely vigilant with double negatives. Expanding them systematically prevents simple sign errors from ruining your final exact fraction."
        }
    },
    {
        "id": "004321",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Trigonometry",
        "topic": "Trigonometric Identities",
        "subtopic": [
            "Identity Proofs",
            "Pythagorean Identity",
            "Algebraic Fraction Simplification"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Prove the identity:<br>$$\\dfrac{\\sin\\theta - \\sin^3\\theta}{\\cos^3\\theta} \\equiv \\tan\\theta$$",
        "steps": [
            "Start with the left-hand side (LHS) of the identity:<br>\\begin{aligned} \\text{LHS} &= \\dfrac{\\sin\\theta - \\sin^3\\theta}{\\cos^3\\theta} \\end{aligned}",
            "Factorise out the common term $\\sin\\theta$ from the numerator expression:<br>\\begin{aligned} \\text{LHS} &= \\dfrac{\\sin\\theta\\left(1 - \\sin^2\\theta\\right)}{\\cos^3\\theta} \\end{aligned}",
            "Apply the fundamental Pythagorean identity $1 - \\sin^2\\theta = \\cos^2\\theta$ to substitute for the term in the brackets:<br>\\begin{aligned} \\text{LHS} &= \\dfrac{\\sin\\theta\\cos^2\\theta}{\\cos^3\\theta} \\end{aligned}",
            "Simplify the fraction by dividing both the numerator and denominator by $\\cos^2\\theta$, then apply the identity $\\dfrac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$:<br>\\begin{aligned} \\text{LHS} &= \\dfrac{\\sin\\theta}{\\cos\\theta} \\ &= \\tan\\theta \\ &= \\text{RHS} \\end{aligned}<br>Since the left-hand side simplifies to the right-hand side, the identity is proven."
        ],
        "pi_options": [
            {
                "ans": "Proof incorrect due to expanding $1 - \\sin^2\\theta$ as $1 - \\cos^2\\theta$",
                "feedback": "Check your trigonometric identities. Recall that the fundamental identity is $\\sin^2\\theta + \\cos^2\\theta = 1$. Rearranging this gives $1 - \\sin^2\\theta = \\cos^2\\theta$, not $1 - \\cos^2\\theta$."
            },
            {
                "ans": "Proof incorrect due to writing $\\dfrac{\\sin\\theta}{\\cos\\theta} = \\dfrac{1}{\\tan\\theta}$",
                "feedback": "Check your basic trigonometric definitions. By definition, $\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}$. The reciprocal identity is $\\dfrac{1}{\\tan\\theta} = \\dfrac{\\cos\\theta}{\\sin\\theta}$."
            },
            {
                "ans": "Proof incorrect due to simplifying $\\dfrac{\\sin\\theta\\cos^2\\theta}{\\cos^3\\theta}$ to $\\sin\\theta\\cos\\theta$",
                "feedback": "Check your division of powers. When dividing $\\cos^2\\theta$ by $\\cos^3\\theta$, the remaining term is in the denominator: $\\dfrac{\\cos^2\\theta}{\\cos^3\\theta} = \\dfrac{1}{\\cos\\theta}$. It seems you may have mistakenly multiplied them instead."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Initiating Identity Proofs",
            "content": "When proving trigonometric identities, a reliable strategy is to start with the more algebraically complex side (usually the left-hand side, LHS) and manipulate it systematically using fundamental identities until it simplifies down to the simpler side (RHS)."
        }
    },
    {
        "id": "004322",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Trigonometry",
        "topic": "Trigonometric Identities",
        "subtopic": [
            "Identity Proofs",
            "Pythagorean Identity",
            "Difference of Two Squares"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Prove the identity:<br>$$\\cos^4\\theta - \\sin^4\\theta \\equiv 1 - 2\\sin^2\\theta$$",
        "steps": [
            "Start with the left-hand side (LHS) of the identity:<br>\\begin{aligned} \\text{LHS} &= \\cos^4\\theta - \\sin^4\\theta \\end{aligned}",
            "Treat the quartic expression as a difference of two squares, $a^4 - b^4 = \\left(a^2 - b^2\\right)\\left(a^2 + b^2\\right)$, and factorise:<br>\\begin{aligned} \\text{LHS} &= \\left(\\cos^2\\theta - \\sin^2\\theta\\right)\\left(\\cos^2\\theta + \\sin^2\\theta\\right) \\end{aligned}",
            "Apply the fundamental Pythagorean identity $\\cos^2\\theta + \\sin^2\\theta = 1$ to simplify the second bracketed term:<br>\\begin{aligned} \\text{LHS} &= \\left(\\cos^2\\theta - \\sin^2\\theta\\right)(1) \\ &= \\cos^2\\theta - \\sin^2\\theta \\end{aligned}",
            "To match the target right-hand side, write the expression entirely in terms of $\\sin^2\\theta$. Substitute $\\cos^2\\theta = 1 - \\sin^2\\theta$:<br>\\begin{aligned} \\text{LHS} &= \\left(1 - \\sin^2\\theta\\right) - \\sin^2\\theta \\ &= 1 - 2\\sin^2\\theta \\ &= \\text{RHS} \\end{aligned}<br>Since the left-hand side simplifies to the right-hand side, the identity is proven."
        ],
        "pi_options": [
            {
                "ans": "Proof incorrect due to expanding $\\cos^4\\theta - \\sin^4\\theta$ as $(\\cos^2\\theta - \\sin^2\\theta)^2$",
                "feedback": "Check your algebraic factorisation. The difference of two squares is factorised as $a^2 - b^2 = (a-b)(a+b)$. The expression $a^2 - b^2$ is not equivalent to $(a-b)^2 = a^2 - 2ab + b^2$."
            },
            {
                "ans": "Proof incorrect due to writing $\\cos^2\\theta - \\sin^2\\theta = 1$",
                "feedback": "Check your fundamental identity. The Pythagorean identity is $\\cos^2\\theta + \\sin^2\\theta = 1$. The difference of squares, $\\cos^2\\theta - \\sin^2\\theta$, does not equal 1."
            },
            {
                "ans": "Proof incorrect due to substituting $\\cos^2\\theta = \\sin^2\\theta - 1$",
                "feedback": "Check your rearrangement of the Pythagorean identity. Since $\\sin^2\\theta + \\cos^2\\theta = 1$, isolating $\\cos^2\\theta$ yields $\\cos^2\\theta = 1 - \\sin^2\\theta$, not $\\sin^2\\theta - 1$."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Factoring in Trigonometry",
            "content": "The difference of two squares algebraic rule $a^4 - b^4 = (a^2 - b^2)(a^2 + b^2)$ is exceptionally useful when working with trigonometric functions. Because $\\cos^2\\theta + \\sin^2\\theta = 1$, any quartic difference $\\cos^4\\theta - \\sin^4\\theta$ simplifies instantly to a much simpler quadratic difference $\\cos^2\\theta - \\sin^2\\theta$."
        }
    },
    {
        "id": "004323",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Trigonometry",
        "topic": "Trigonometric Identities",
        "subtopic": [
            "Identity Proofs",
            "Algebraic Fractions",
            "Pythagorean Identity"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Prove the identity:<br>$$\\dfrac{1}{1 - \\sin\\theta} + \\dfrac{1}{1 + \\sin\\theta} \\equiv \\dfrac{2}{\\cos^2\\theta}$$",
        "steps": [
            "Start with the left-hand side (LHS) of the identity:<br>\\begin{aligned} \\text{LHS} &= \\dfrac{1}{1 - \\sin\\theta} + \\dfrac{1}{1 + \\sin\\theta} \\end{aligned}",
            "Combine the two fractions by finding a common denominator, which is the product of the two denominators: $(1 - \\sin\\theta)(1 + \\sin\\theta)$:<br>\\begin{aligned} \\text{LHS} &= \\dfrac{(1 + \\sin\\theta) + (1 - \\sin\\theta)}{(1 - \\sin\\theta)(1 + \\sin\\theta)} \\end{aligned}",
            "Simplify the numerator by combining like terms and expand the denominator using the difference of two squares:<br>\\begin{aligned} \\text{LHS} &= \\dfrac{2}{1 - \\sin^2\\theta} \\end{aligned}",
            "Apply the fundamental Pythagorean identity $1 - \\sin^2\\theta = \\cos^2\\theta$ to substitute for the denominator:<br>\\begin{aligned} \\text{LHS} &= \\dfrac{2}{\\cos^2\\theta} \\ &= \\text{RHS} \\end{aligned}<br>Since the left-hand side simplifies to the right-hand side, the identity is proven."
        ],
        "pi_options": [
            {
                "ans": "Proof incorrect due to writing $(1 - \\sin\\theta)(1 + \\sin\\theta) = 1 - \\sin\\theta$",
                "feedback": "Check your expansion of the denominator. By the difference of two squares, $(1 - \\sin\\theta)(1 + \\sin\\theta) = 1 - \\sin^2\\theta$. It seems you forgot to square the trigonometric term during expansion."
            },
            {
                "ans": "Proof incorrect due to simplifying the numerator $(1 + \\sin\\theta) + (1 - \\sin\\theta) = 2\\sin\\theta$",
                "feedback": "Check your algebraic addition in the numerator. Combining $(1 + \\sin\\theta) + (1 - \\sin\\theta)$ yields $1 + 1 + \\sin\\theta - \\sin\\theta = 2$. It seems you accidentally subtracted the constants and added the sine terms."
            },
            {
                "ans": "Proof incorrect due to substituting $1 - \\sin^2\\theta = \\sin^2\\theta$",
                "feedback": "Check your Pythagorean identity. Rearranging $\\sin^2\\theta + \\cos^2\\theta = 1$ yields $1 - \\sin^2\\theta = \\cos^2\\theta$. It does not equal $\\sin^2\\theta$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Trigonometric Denominators",
            "content": "When adding fractions with algebraic trigonometric denominators such as $1 - \\sin\\theta$ and $1 + \\sin\\theta$, multiplying them together to find the common denominator naturally creates a difference of squares: $(1 - \\sin\\theta)(1 + \\sin\\theta) = 1 - \\sin^2\\theta = \\cos^2\\theta$. Always look out for this identity to simplify denominators quickly."
        }
    },
    {
        "id": "004324",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Trigonometry",
        "topic": "Trigonometric Identities",
        "subtopic": [
            "Identity Proofs",
            "Tangent Identity",
            "Fraction Simplification"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Prove the identity:<br>$$\\dfrac{\\tan\\theta}{\\sin\\theta} - \\sin\\theta\\tan\\theta \\equiv \\cos\\theta$$",
        "steps": [
            "Start with the left-hand side (LHS) of the identity:<br>\\begin{aligned} \\text{LHS} &= \\dfrac{\\tan\\theta}{\\sin\\theta} - \\sin\\theta\\tan\\theta \\end{aligned}",
            "Substitute $\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}$ into both terms of the expression:<br>\\begin{aligned} \\text{First Term} &= \\dfrac{\\sin\\theta/\\cos\\theta}{\\sin\\theta} = \\dfrac{1}{\\cos\\theta} \\ \\text{Second Term} &= \\sin\\theta\\left(\\dfrac{\\sin\\theta}{\\cos\\theta}\\right) = \\dfrac{\\sin^2\\theta}{\\cos\\theta} \\end{aligned}",
            "Combine the two terms over their common denominator $\\cos\\theta$:<br>\\begin{aligned} \\text{LHS} &= \\dfrac{1}{\\cos\\theta} - \\dfrac{\\sin^2\\theta}{\\cos\\theta} \\ &= \\dfrac{1 - \\sin^2\\theta}{\\cos\\theta} \\end{aligned}",
            "Apply the fundamental Pythagorean identity $1 - \\sin^2\\theta = \\cos^2\\theta$ to substitute for the numerator:<br>\\begin{aligned} \\text{LHS} &= \\dfrac{\\cos^2\\theta}{\\cos\\theta} \\ &= \\cos\\theta \\ &= \\text{RHS} \\end{aligned}<br>Since the left-hand side simplifies to the right-hand side, the identity is proven."
        ],
        "pi_options": [
            {
                "ans": "Proof incorrect due to simplifying $\\dfrac{\\tan\\theta}{\\sin\\theta}$ as $\\dfrac{1}{\\sin\\theta}$",
                "feedback": "Check your tangent identity substitution. Since $\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}$, dividing this by $\\sin\\theta$ cancels out the $\\sin\\theta$, leaving $\\dfrac{1}{\\cos\\theta}$ rather than $\\dfrac{1}{\\sin\\theta}$."
            },
            {
                "ans": "Proof incorrect due to writing $\\sin\\theta\\tan\\theta = \\sin^2\\theta\\cos\\theta$",
                "feedback": "Check your algebra. Multiplying $\\sin\\theta$ by $\\dfrac{\\sin\\theta}{\\cos\\theta}$ yields $\\dfrac{\\sin^2\\theta}{\\cos\\theta}$. The term $\\cos\\theta$ remains in the denominator."
            },
            {
                "ans": "Proof incorrect due to substituting $1 - \\sin^2\\theta = 1 - \\cos^2\\theta$",
                "feedback": "Check your fundamental identity. The Pythagorean identity is $1 - \\sin^2\\theta = \\cos^2\\theta$. Do not leave the constant $1$ in the expression after performing the substitution."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Converting to Basic Functions",
            "content": "A reliable, standard strategy for proving any trigonometric identity is to convert all non-basic functions (like tangent) into terms of sine and cosine: $\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}$. Once everything is expressed using sines and cosines, standard algebraic fraction rules will lead you to the proof."
        }
    },
    {
        "id": "004325",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Trigonometry",
        "topic": "Mathematical Proof",
        "subtopic": [
            "Proof by Counterexample",
            "Trigonometric Addition",
            "Mathematical Proof"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Show, by means of a counterexample, that the statement:<br>$$\\cos(A + B) \\equiv \\cos A + \\cos B$$<br>is not generally true for all angles $A$ and $B$.",
        "steps": [
            "To disprove a universal mathematical statement, find a single specific counterexample (a set of angles $A$ and $B$) where the left-hand side (LHS) is not equal to the right-hand side (RHS). Let $A = 60^\\circ$ and $B = 60^\\circ$.",
            "Evaluate the left-hand side (LHS) of the statement using these chosen angles:<br>\\begin{aligned} \\text{LHS} &= \\cos\\left(60^\\circ + 60^\\circ\\right) \\ &= \\cos\\left(120^\\circ\\right) \\ &= -\\dfrac{1}{ 2 } \\end{aligned}",
            "Evaluate the right-hand side (RHS) of the statement using the same angles:<br>\\begin{aligned} \\text{RHS} &= \\cos\\left(60^\\circ\\right) + \\cos\\left(60^\\circ\\right) \\ &= \\dfrac{1}{ 2 } + \\dfrac{1}{ 2 } \\ &= 1 \\end{aligned}",
            "Compare the results of both sides. Since the LHS is not equal to the RHS:<br>\\begin{aligned} \\text{LHS} &\\neq \\text{RHS} \\ -\\dfrac{1}{ 2 } &\\neq 1 \\end{aligned}<br>Because a case has been shown where the equation does not hold, the statement has been disproved by counterexample."
        ],
        "pi_options": [
            {
                "ans": "Proof incorrect due to choosing $A = 0^\\circ$ and $B = 0^\\circ$ as a counterexample",
                "feedback": "Check your choice of angles. If you choose $A = 0^\\circ$ and $B = 0^\\circ$, then $\\text{LHS} = \\cos(0^\\circ) = 1$ and $\\text{RHS} = \\cos(0^\\circ) + \\cos(0^\\circ) = 1 + 1 = 2$. While this is a valid counterexample because $1 \\neq 2$, choosing non-zero angles is much safer and more illustrative for trigonometric functions."
            },
            {
                "ans": "Attempting to prove the statement algebraically instead of providing a counterexample",
                "feedback": "Read the question carefully. The question asks you to show that the statement is *not* generally true 'by means of a counterexample'. You must choose specific numerical values for $A$ and $B$ to disprove the statement, rather than attempting an algebraic proof."
            },
            {
                "ans": "Proof incorrect due to stating $\\cos(120^\\circ) = 1$",
                "feedback": "Check your basic trigonometric values. The value of $\\cos(120^\\circ)$ is equal to $-\\dfrac{1}{2}$ (or $-0.5$), not $1$. Use your calculator or the quadrant rules to verify your exact values."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Disproving Universal Claims",
            "content": "In mathematics, proving a statement requires showing that it holds true for all possible cases, which requires general algebraic reasoning. However, disproving a statement (showing it is not generally true) only requires finding a single specific instance—a counterexample—where the statement fails."
        }
    },
    {
        "id": "004326",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Polynomials",
        "subtopic": [
            "Factor Theorem",
            "Simultaneous Equations",
            "Linear Factors"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Given that $(x - 1)$ and $(x + 1)$ are factors of the polynomial $3x^3 + px^2 + qx - 10$:<br><br>1. Find the values of the constants $p$ and $q$.<br>2. Determine the third linear factor of the polynomial.",
        "steps": [
            "According to the factor theorem, if $(x - 1)$ is a factor of the polynomial $f(x) = 3x^3 + px^2 + qx - 10$, then $f(1) = 0$. Substitute $x = 1$ into the polynomial:<br>\\begin{aligned} 3(1)^3 + p(1)^2 + q(1) - 10 &= 0 \\ 3 + p + q - 10 &= 0 \\ p + q &= 7 \\quad \\text{(Equation 1)} \\end{aligned}",
            "Similarly, if $(x + 1)$ is a factor, then $f(-1) = 0$. Substitute $x = -1$ into the polynomial:<br>\\begin{aligned} 3(-1)^3 + p(-1)^2 + q(-1) - 10 &= 0 \\ -3 + p - q - 10 &= 0 \\ p - q &= 13 \\quad \\text{(Equation 2)} \\end{aligned}",
            "Solve the system of equations by adding Equation 1 and Equation 2:<br>\\begin{aligned} (p + q) + (p - q) &= 7 + 13 \\ 2p &= 20 \\implies p = 10 \\end{aligned}<br>Substitute $p = 10$ back into Equation 1 to find $q$:<br>\\begin{aligned} 10 + q &= 7 \\implies q = -3 \\end{aligned}<br>Thus, the constants are $p = 10$ and $q = -3$.",
            "Substitute the constants back to write the full polynomial:<br>\\begin{aligned} f(x) &= 3x^3 + 10x^2 - 3x - 10 \\end{aligned}<br>Since $(x - 1)$ and $(x + 1)$ are factors, their quadratic product $(x - 1)(x + 1) = x^2 - 1$ must also be a factor of the polynomial.",
            "Write the cubic polynomial as the product of the quadratic factor and the unknown third linear factor $(ax + b)$:<br>\\begin{aligned} 3x^3 + 10x^2 - 3x - 10 &= \\left(x^2 - 1\\right)(ax + b) \\ 3x^3 + 10x^2 - 3x - 10 &= ax^3 + bx^2 - ax - b \\end{aligned}",
            "Equate the coefficients of the terms on both sides of the identity to find $a$ and $b$:<ul><li>For the $x^3$ term: $a = 3$</li><li>For the constant term: $-b = -10 \\implies b = 10$</li></ul>Thus, the third linear factor is $3x + 10$.<br><br>Final Answer: $p = 10, q = -3$; the third factor is $3x + 10$"
        ],
        "pi_options": [
            {
                "ans": "$$p = 10, \\quad q = -3; \\quad \\text{Third factor: } x + 10$$",
                "feedback": "Check your leading coefficient. The cubic term of the polynomial is $3x^3$. Since the quadratic factor starts with $x^2$, the third linear factor must start with $3x$ to produce $3x^3$, not just $x$."
            },
            {
                "ans": "$$p = 10, \\quad q = 3; \\quad \\text{Third factor: } 3x + 10$$",
                "feedback": "Check your algebraic addition when solving the system of equations. Substituting $p = 10$ into $p + q = 7$ yields $10 + q = 7 \\implies q = -3$, not $q = 3$."
            },
            {
                "ans": "$$p = 13, \\quad q = -6; \\quad \\text{Third factor: } 3x + 10$$",
                "feedback": "Check your initial equations. Differentiating between $(x-1)$ and $(x+1)$ factors is critical. For $(x-1)$ we set $f(1)=0$, and for $(x+1)$ we set $f(-1)=0$. It seems you may have swapped the signs during substitution."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Equating Coefficients",
            "content": "To find the third factor of a cubic when you already know two factors, multiply the two known factors to get a quadratic (here, $x^2 - 1$). You can then write the cubic as $(x^2 - 1)(ax + b)$. This inspection method is extremely fast and much less prone to sign errors than formal polynomial division."
        }
    },
    {
        "id": "004327",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Polynomials",
        "subtopic": [
            "Factor Theorem",
            "Simultaneous Equations"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Given that $(x - 2)$ and $(x + 3)$ are factors of the polynomial $f(x) = 2x^3 + ax^2 + bx - 12$:<br><br>Find the values of the constants $a$ and $b$.",
        "steps": [
            "According to the factor theorem, if $(x - 2)$ is a factor of the polynomial $f(x)$, then $f(2) = 0$. Substitute $x = 2$ into the polynomial expression:<br>\\begin{aligned} 2(2)^3 + a(2)^2 + b(2) - 12 &= 0 \\ 16 + 4a + 2b - 12 &= 0 \\ 4a + 2b + 4 &= 0 \\ 2a + b &= -2 \\quad \\text{(Equation 1)} \\end{aligned}",
            "Similarly, if $(x + 3)$ is a factor of the polynomial $f(x)$, then $f(-3) = 0$. Substitute $x = -3$ into the polynomial expression:<br>\\begin{aligned} 2(-3)^3 + a(-3)^2 + b(-3) - 12 &= 0 \\ -54 + 9a - 3b - 12 &= 0 \\ 9a - 3b - 66 &= 0 \\ 3a - b &= 22 \\quad \\text{(Equation 2)} \\end{aligned}",
            "Solve the system of equations by adding Equation 1 and Equation 2:<br>\\begin{aligned} (2a + b) + (3a - b) &= -2 + 22 \\ 5a &= 20 \\implies a = 4 \\end{aligned}",
            "Substitute $a = 4$ back into Equation 1 to find $b$:<br>\\begin{aligned} 2(4) + b &= -2 \\ 8 + b &= -2 \\implies b = -10 \\end{aligned}<br>Thus, the constants are $a = 4$ and $b = -10$."
        ],
        "pi_options": [
            {
                "ans": "$$a = 4, \\quad b = -2$$",
                "feedback": "Check your substitution in Equation 1. Substituting $a = 4$ into $2a + b = -2$ yields $8 + b = -2 \\implies b = -10$. It seems you may have mistakenly added 8 to $-2$ instead of subtracting it."
            },
            {
                "ans": "$$a = -4, \\quad b = 6$$",
                "feedback": "Check your addition step when combining the equations. Adding $-2$ and $22$ yields $20$. Therefore, $5a = 20 \\implies a = 4$. It seems you may have made a sign error, resulting in $a = -4$."
            },
            {
                "ans": "$$a = 4, \\quad b = -6$$",
                "feedback": "Check your simplification of Equation 1. Substituting $x = 2$ yields $16 + 4a + 2b - 12 = 0 \\implies 4a + 2b = -4 \\implies 2a + b = -2$. It seems you may have made an arithmetic slip in dividing the constants."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Dual Factor Theorem Solving",
            "content": "When a polynomial has two unknown constants, you will always be given two factors to create two separate equations. Remember to write both in terms of $f(a) = 0$ using the Factor Theorem, and then solve them systematically using standard simultaneous elimination."
        }
    },
    {
        "id": "004328",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Polynomials",
        "subtopic": [
            "Factor Theorem",
            "Factorisation",
            "Cubic Polynomials"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Let $f(x) = x^3 - 2x^2 - 5x + 6$.<br><br>1. Show that $(x - 3)$ is a factor of the polynomial $f(x)$.<br>2. Hence, factorise the polynomial $f(x)$ completely.",
        "steps": [
            "According to the factor theorem, $(x - 3)$ is a factor of $f(x)$ if and only if $f(3) = 0$. Substitute $x = 3$ into the polynomial:<br>\\begin{aligned} f(3) &= (3)^3 - 2(3)^2 - 5(3) + 6 \\ &= 27 - 2(9) - 15 + 6 \\ &= 27 - 18 - 15 + 6 \\ &= 33 - 33 = 0 \\end{aligned}<br>Since $f(3) = 0$, the linear term $(x - 3)$ is verified to be a factor.",
            "Since $(x - 3)$ is a factor, the cubic polynomial can be written as the product of $(x - 3)$ and a quadratic quotient $(ax^2 + bx + c)$:<br>\\begin{aligned} x^3 - 2x^2 - 5x + 6 &= (x - 3)\\left(ax^2 + bx + c\\right) \\ &= ax^3 + bx^2 + cx - 3ax^2 - 3bx - 3c \\ &= ax^3 + (b - 3a)x^2 + (c - 3b)x - 3c \\end{aligned}",
            "Equate the coefficients on both sides of the identity to find the values of $a$, $b$, and $c$:<ul><li>For the $x^3$ term: $a = 1$</li><li>For the constant term: $-3c = 6 \\implies c = -2$</li><li>For the $x^2$ term: $b - 3a = -2 \\implies b - 3(1) = -2 \\implies b = 1$</li></ul>",
            "Substitute these values to write the quadratic quotient:<br>\\begin{aligned} \\text{Quotient} &= x^2 + x - 2 \\end{aligned}<br>Verify by checking the $x$ term: $c - 3b = -2 - 3(1) = -5$, which matches the $-5x$ term perfectly.",
            "Factorise this quadratic expression into two linear factors:<br>\\begin{aligned} x^2 + x - 2 &= (x + 2)(x - 1) \\end{aligned}",
            "Combine all the linear factors to write the completely factorised form of the cubic polynomial:<br>\\begin{aligned} f(x) &= (x - 3)(x + 2)(x - 1) \\end{aligned}"
        ],
        "pi_options": [
            {
                "ans": "$$f(x) = (x - 3)(x - 2)(x + 1)$$",
                "feedback": "Check your factorisation of the quadratic quotient $x^2 + x - 2$. The factors must multiply to $-2$ and add to $+1$. This gives $(x + 2)(x - 1) = 0$, not $(x - 2)(x + 1)$."
            },
            {
                "ans": "$$f(x) = (x - 3)\\left(x^2 - x - 2\\right)$$",
                "feedback": "Check your coefficient matching for the $x^2$ term. From $b - 3a = -2$ with $a = 1$, we get $b - 3 = -2 \\implies b = 1$. It seems you made a sign error, resulting in $b = -1$."
            },
            {
                "ans": "$$f(x) = (x + 3)(x + 2)(x - 1)$$",
                "feedback": "Check your verified factor. The question states that $(x - 3)$ is a factor since $f(3) = 0$. You cannot replace it with $(x + 3)$, which would correspond to $f(-3) = 0$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Spotting Quadratic Roots",
            "content": "Using algebraic coefficient matching is an excellent alternative to long division. By setting $x^3 - 2x^2 - 5x + 6 = (x - 3)(ax^2 + bx + c)$, you can easily identify $a$ from the leading term and $c$ from the constant term. This leaves only a simple subtraction to find the middle coefficient $b$."
        }
    },
    {
        "id": "004329",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Polynomials",
        "subtopic": [
            "Factor Theorem",
            "Cubic Equations",
            "Solving Equations"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Use the factor theorem to find an integer root of the cubic equation:<br>$$2x^3 - 5x^2 - 4x + 3 = 0$$<br>Hence, solve the equation completely.",
        "steps": [
            "Use the factor theorem to find an integer root. Test small integer factors of the constant term $3$, starting with $x = 1$:<br>\\begin{aligned} f(1) &= 2(1)^3 - 5(1)^2 - 4(1) + 3 \\ &= 2 - 5 - 4 + 3 = -4 \\neq 0 \\end{aligned}",
            "Next, test $x = -1$:<br>\\begin{aligned} f(-1) &= 2(-1)^3 - 5(-1)^2 - 4(-1) + 3 \\ &= -2 - 5 + 4 + 3 = 0 \\end{aligned}<br>Since $f(-1) = 0$, $x = -1$ is verified to be an integer root, and $(x + 1)$ is a factor of the polynomial.",
            "Write the cubic expression as the product of $(x + 1)$ and a quadratic quotient $(ax^2 + bx + c)$:<br>\\begin{aligned} 2x^3 - 5x^2 - 4x + 3 &= (x + 1)\\left(ax^2 + bx + c\\right) \\ &= ax^3 + (b + a)x^2 + (c + b)x + c \\end{aligned}",
            "Equate the coefficients on both sides of the identity to find the values of $a$, $b$, and $c$:<ul><li>For the $x^3$ term: $a = 2$</li><li>For the constant term: $c = 3$</li><li>For the $x^2$ term: $b + a = -5 \\implies b + 2 = -5 \\implies b = -7$</li></ul>",
            "Substitute these values to write the quadratic quotient expression:<br>\\begin{aligned} \\text{Quotient} &= 2x^2 - 7x + 3 \\end{aligned}<br>Verify by checking the $x$ term: $b + c = -7 + 3 = -4$, which matches the $-4x$ term perfectly.",
            "Set the quadratic quotient to $0$ and factorise to find the remaining roots of the equation:<br>\\begin{aligned} 2x^2 - 7x + 3 &= 0 \\ (2x - 1)(x - 3) &= 0 \\end{aligned}<br>This yields two remaining roots: $x = \\dfrac{1}{ 2 }$ and $x = 3$.<br>Combining these with $x = -1$, the complete set of roots is $x = -1, \\dfrac{1}{ 2 }, 3$."
        ],
        "pi_options": [
            {
                "ans": "$$x = 1, \\quad \\dfrac{1}{ 2 }, \\quad 3$$",
                "feedback": "Check your initial root. Testing $x = 1$ yields $f(1) = -4 \\neq 0$. The integer root is $x = -1$ because $f(-1) = 0$."
            },
            {
                "ans": "$$x = -1, \\quad -\\dfrac{1}{ 2 }, \\quad -3$$",
                "feedback": "Check your factorisation of the quadratic quotient $2x^2 - 7x + 3 = 0$. The factors are $(2x - 1)(x - 3) = 0$. Solving these for $x$ yields positive roots $x = \\dfrac{1}{ 2 }$ and $x = 3$."
            },
            {
                "ans": "$$x = -1, \\quad \\dfrac{1}{ 2 }$$",
                "feedback": "Check to ensure you have found all roots. A cubic equation can have up to three distinct real roots. It seems you forgot to list the root from the second linear factor $(x - 3) = 0 \\implies x = 3$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Root Hunting Strategy",
            "content": "When hunting for an initial integer root of a polynomial, always search systematically among the integer factors of the constant term (here, the factors of $3$ are $\\pm 1, \\pm 3$). Starting with $1$ and $-1$ is the most efficient exam strategy."
        }
    },
    {
        "id": "004330",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Polynomials",
        "subtopic": [
            "Quadratics",
            "Discriminants",
            "Inequalities"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Find the range of values of the constant $k$ for which the quadratic equation:<br>$$3x^2 - 6x + k = 0$$<br>has no real roots.",
        "steps": [
            "Write down the coefficients of the quadratic equation $ax^2 + bx + c = 0$:<br>\\begin{aligned} a &= 3 \\ b &= -6 \\ c &= k \\end{aligned}",
            "Write the algebraic formula for the discriminant $\\Delta$:<br>\\begin{aligned} \\Delta &= b^2 - 4ac \\end{aligned}",
            "Substitute the coefficients into the discriminant formula:<br>\\begin{aligned} \\Delta &= (-6)^2 - 4(3)(k) \\ &= 36 - 12k \\end{aligned}",
            "According to the properties of quadratic equations, the equation has no real roots when the discriminant is strictly negative ($\\Delta < 0$):<br>\\begin{aligned} 36 - 12k &< 0 \\end{aligned}",
            "Solve the linear inequality for the range of the parameter $k$:<br>\\begin{aligned} -12k &< -36 \\end{aligned}<br>Divide both sides of the inequality by $-12$ and reverse the inequality sign:<br>\\begin{aligned} k &> 3 \\end{aligned}<br>Thus, the quadratic equation has no real roots when $k > 3$."
        ],
        "pi_options": [
            {
                "ans": "$$k < 3$$",
                "feedback": "Check your inequality operations. When dividing or multiplying both sides of an inequality by a negative number (such as $-12$), you must always reverse the direction of the inequality sign."
            },
            {
                "ans": "$$k \\ge 3$$",
                "feedback": "Check your boundary condition. For an equation to have 'no real roots', the discriminant must be strictly less than zero ($\\Delta < 0$). The boundary condition $\\Delta \\le 0$ would include $\\Delta = 0$, which corresponds to real, repeated roots."
            },
            {
                "ans": "$$k > 9$$",
                "feedback": "Check your multiplication steps inside the discriminant. The term is $4ac = 4 \\times 3 \\times k = 12k$. It seems you may have squared the coefficient $a = 3$ or made an arithmetic slip."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Inequality Direction flips",
            "content": "A very frequent slip in AS-level exam papers is forgetting to reverse the inequality sign when dividing by a negative number (such as dividing $-12k < -36$ by $-12$ to get $k > 3$). Always double-check this step to prevent losing easy marks."
        }
    },
    {
        "id": "004331",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Trigonometry",
        "topic": "Trigonometric Equations",
        "subtopic": [
            "Sine Rule",
            "Ambiguous Case",
            "Area of a Triangle"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The triangle $ABC$ is such that $AC = 12\\text{ cm}$, $AB = 18\\text{ cm}$, and angle $ABC = 35^\\circ$.<br><br>Find the two possible values for the area of triangle $ABC$. Give your answers to $1$ decimal place.",
        "steps": [
            "First, sketch a diagram representing the given information. Because side $AC = 12\\text{ cm}$ is shorter than the adjacent side $AB = 18\\text{ cm}$, the side $AC$ can swing into two possible locations, creating an acute triangle ($ABC_2$) and an obtuse triangle ($ABC_1$):<br><br><img src='images/p1/004331.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
            "Use the Sine Rule to find the two possible values for the angle $C = \\angle ACB$:<br>\\begin{aligned} \\dfrac{\\sin C}{ c } &= \\dfrac{\\sin B}{ b } \\ \\dfrac{\\sin C}{ 18 } &= \\dfrac{\\sin 35^\\circ}{ 12 } \\ \\sin C &= 1.5\\sin 35^\\circ \\approx 0.860364 \\end{aligned}",
            "Find the acute angle $C_1$ and the obtuse angle $C_2$ (where $C_2 = 180^\\circ - C_1$):<br>\\begin{aligned} C_1 &= \\arcsin(0.860364) \\approx 59.4^\\circ \\ C_2 &= 180^\\circ - 59.4^\\circ = 120.6^\\circ \\end{aligned}",
            "For each case, calculate the corresponding third angle $A = \\angle BAC$:<br>\\begin{aligned} \\text{Case 1 (Acute C)} &: A_1 = 180^\\circ - 35^\\circ - 59.4^\\circ = 85.6^\\circ \\ \\text{Case 2 (Obtuse C)} &: A_2 = 180^\\circ - 35^\\circ - 120.6^\\circ = 24.4^\\circ \\end{aligned}",
            "Calculate the area for Case 1 using the area formula $\\text{Area} = \\dfrac{1}{ 2 }bc\\sin A$ with $b = 12$ and $c = 18$:<br>\\begin{aligned} \\text{Area}_1 &= \\dfrac{1}{ 2 }(12)(18)\\sin(85.6^\\circ) \\ &= 108\\sin(85.6^\\circ) \\approx 107.7\\text{ cm}^2 \\end{aligned}",
            "Calculate the area for Case 2:<br>\\begin{aligned} \\text{Area}_2 &= \\dfrac{1}{ 2 }(12)(18)\\sin(24.4^\\circ) \\ &= 108\\sin(24.4^\\circ) \\approx 44.5\\text{ cm}^2 \\end{aligned}<br><br>Final Answer: The two possible areas are $107.7\\text{ cm}^2$ and $44.5\\text{ cm}^2$"
        ],
        "pi_options": [
            {
                "ans": "$$107.7\\text{ cm}^2 \\text{ and } 54.0\\text{ cm}^2$$",
                "feedback": "Check your calculations for Case 2. The angle $A_2$ is $180^\\circ - 35^\\circ - 120.6^\\circ = 24.4^\\circ$. It seems you may have mistakenly calculated $A_2 = 30^\\circ$ or made a subtraction slip."
            },
            {
                "ans": "$$107.7\\text{ cm}^2 \\text{ only}$$",
                "feedback": "Remember that the Sine Rule is ambiguous when the side opposite the given angle is shorter than the adjacent side. This allows two valid, different triangles to be constructed, meaning you must calculate two possible areas."
            },
            {
                "ans": "$$107.7\\text{ cm}^2 \\text{ and } 10.8\\text{ cm}^2$$",
                "feedback": "Check your area calculations. Make sure you use the correct formula $\\text{Area} = \\dfrac{1}{ 2 }bc\\sin A$. It seems you may have missed multiplying by the constant $108$ in the second case."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Ambiguous Case",
            "content": "The ambiguous case of the Sine Rule (SSA) occurs when you are given two sides and a non-included acute angle, and the side opposite the angle is shorter than the other given side. This allows the opposite side to swing, creating an acute triangle and an obtuse triangle."
        }
    },
    {
        "id": "004332",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Trigonometry",
        "topic": "Trigonometric Equations",
        "subtopic": [
            "Bearings",
            "Cosine Rule",
            "Practical Modeling"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A ship sails from port $P$ on a bearing of $045^\\circ$ for $12\\text{ km}$ to point $A$. It then changes course and sails on a bearing of $130^\\circ$ for $15\\text{ km}$ to point $B$.<br><br>Calculate the direct distance of $B$ from $P$, giving your answer in kilometres to $1$ decimal place.",
        "steps": [
            "First, sketch a diagram with North-pointing lines at each vertex to help determine the internal angles of the triangle formed by $P$, $A$, and $B$:<br><br><img src='images/p1/004332.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
            "Calculate the interior angle $\\angle PAB$ using parallel North lines. The line $PA$ pointing South-West from $A$ makes an angle of $45^\\circ$ with the South line (alternate interior angles with the bearing at $P$). Since the bearing of $B$ from $A$ is $130^\\circ$:<br>\\begin{aligned} \\angle PAB &= (180^\\circ + 45^\\circ) - 130^\\circ \\ &= 225^\\circ - 130^\\circ = 95^\\circ \\end{aligned}",
            "Use the Cosine Rule to find the unknown direct distance $PB$ in triangle $PAB$ with sides $PA = 12$, $AB = 15$, and included angle $\\angle PAB = 95^\\circ$:<br>\\begin{aligned} PB^2 &= PA^2 + AB^2 - 2(PA)(AB)\\cos\\angle PAB \\ PB^2 &= 12^2 + 15^2 - 2(12)(15)\\cos(95^\\circ) \\end{aligned}",
            "Substitute the values and evaluate, noting that $\\cos(95^\\circ) \\approx -0.087156$ is negative:<br>\\begin{aligned} PB^2 &= 144 + 225 - 360(-0.087156) \\ &= 369 + 31.376 \\ &= 400.376 \\end{aligned}",
            "Take the square root to find the direct distance $PB$:<br>\\begin{aligned} PB &= \\sqrt{400.376} \\approx 20.0 \\text{ km} \\end{aligned}<br><br>Final Answer: $20.0\\text{ km}$"
        ],
        "pi_options": [
            {
                "ans": "$$18.4\\text{ km}$$",
                "feedback": "Check your interior angle calculation. Simply subtracting the bearings ($130^\\circ - 45^\\circ = 85^\\circ$) is incorrect because the angle must be measured relative to the parallel North lines. The interior angle is actually $95^\\circ$."
            },
            {
                "ans": "$$19.1\\text{ km}$$",
                "feedback": "Check your Cosine Rule signs. Because $\\cos(95^\\circ)$ is negative, the last term in the formula becomes positive: $-2bc\\cos A = -360(-0.087) = +31.4$. It seems you may have subtracted this term instead of adding it."
            },
            {
                "ans": "$$27.0\\text{ km}$$",
                "feedback": "Check your initial values inside the Cosine Rule. Ensure you calculate $12^2 = 144$ and $15^2 = 225$ correctly. It seems you may have neglected to square the side lengths."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Parallel North Lines",
            "content": "When solving bearings questions, always draw parallel North lines at each vertex. Use the alternate interior angle rule to relate the bearings between points before calculating the internal angles of the triangle."
        }
    },
    {
        "id": "004333",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Trigonometry",
        "topic": "Trigonometric Equations",
        "subtopic": [
            "Cosine Rule",
            "Quadratic Equations",
            "Syllabus Problems"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A triangle has sides of length $x\\text{ cm}$, $(x + 2)\\text{ cm}$, and $10\\text{ cm}$. The angle between the sides of length $x\\text{ cm}$ and $(x + 2)\\text{ cm}$ is $60^\\circ$.<br><br>Use the Cosine Rule to find the value of $x$. Give your answer to $1$ decimal place.",
        "steps": [
            "First, sketch the triangle with the given side lengths and the included angle of $60^\\circ$ to visualize the problem:<br><br><img src='images/p1/004333.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
            "Apply the Cosine Rule, using the opposite side $a = 10$, and the adjacent sides $b = x$ and $c = x + 2$:<br>\\begin{aligned} a^2 &= b^2 + c^2 - 2bc\\cos A \\ 10^2 &= x^2 + (x + 2)^2 - 2x(x + 2)\\cos(60^\\circ) \\end{aligned}",
            "Substitute $\\cos(60^\\circ) = 0.5$ and expand the algebraic terms:<br>\\begin{aligned} 100 &= x^2 + (x^2 + 4x + 4) - 2x(x + 2)(0.5) \\ 100 &= 2x^2 + 4x + 4 - (x^2 + 2x) \\ 100 &= x^2 + 2x + 4 \\end{aligned}",
            "Rearrange the terms into a standard quadratic equation of the form $ax^2 + bx + c = 0$:<br>\\begin{aligned} x^2 + 2x - 96 &= 0 \\end{aligned}",
            "Solve the quadratic equation using the quadratic formula:<br>\\begin{aligned} x &= \\dfrac{-2 \\pm \\sqrt{2^2 - 4(1)(-96)}}{ 2(1) } \\ &= \\dfrac{-2 \\pm \\sqrt{4 + 384}}{ 2 } \\ &= \\dfrac{-2 \\pm \\sqrt{388}}{ 2 } \\end{aligned}",
            "Find the positive root since a side length must be positive, noting that $\\sqrt{388} \\approx 19.6977$:<br>\\begin{aligned} x &\\approx \\dfrac{-2 + 19.6977}{ 2 } \\ &\\approx \\dfrac{17.6977}{ 2 } \\approx 8.8 \\text{ cm} \\end{aligned}<br><br>Final Answer: $8.8\\text{ cm}$"
        ],
        "pi_options": [
            {
                "ans": "$$8.9\\text{ cm}$$",
                "feedback": "Check your rounding steps. The exact positive root is $\\dfrac{-2 + \\sqrt{388}}{2} \\approx 8.8488$. When rounding to $1$ decimal place, this evaluates to $8.8\\text{ cm}$, not $8.9\\text{ cm}$. Avoid rounding intermediate roots too early."
            },
            {
                "ans": "$$10.8\\text{ cm}$$",
                "feedback": "Check your expansion of $(x + 2)^2$. It expands to $x^2 + 4x + 4$. It seems you may have missed the middle term $4x$ during expansion."
            },
            {
                "ans": "$$8.8\\text{ cm} \\text{ and } -10.8\\text{ cm}$$",
                "feedback": "Since $x$ represents a physical side length of a triangle, it must be strictly positive. You must discard the negative root of your quadratic equation."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Discarding Non-Physical Roots",
            "content": "When solving coordinate geometry or trigonometry problems that lead to quadratic equations, always verify your roots against real-world constraints. Negative values for physical side lengths must be explicitly discarded."
        }
    },
    {
        "id": "004334",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Trigonometry",
        "topic": "Trigonometric Equations",
        "subtopic": [
            "3D Trigonometry",
            "Pyramids",
            "Right-Angled Triangles"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A right pyramid $VABCD$ has a horizontal square base $ABCD$ of side $8\\text{ cm}$ and a vertical height of $12\\text{ cm}$ centered at $O$.<br><br>Calculate the angle between the sloping edge $VB$ and the base plane $ABCD$. Give your answer to $1$ decimal place.",
        "steps": [
            "First, sketch the 3D right pyramid to visualize the vertical height $VO$, the base diagonal $BD$, and the target angle $\\theta$ between the sloping edge $VB$ and the projection $OB$ on the base plane:<br><br><img src='images/p1/004334.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
            "Find the length of the base diagonal $BD$ using Pythagoras' theorem on the horizontal square base $ABCD$ of side $8\\text{ cm}$:<br>\\begin{aligned} BD &= \\sqrt{8^2 + 8^2} \\ &= \\sqrt{64 + 64} = \\sqrt{128} = 8\\sqrt{2} \\text{ cm} \\end{aligned}",
            "The center $O$ of the square base bisects the diagonal $BD$, so find the length of $OB$:<br>\\begin{aligned} OB &= \\dfrac{BD}{ 2 } \\ &= \\dfrac{8\\sqrt{2}}{ 2 } = 4\\sqrt{2} \\text{ cm} \\approx 5.65685 \\text{ cm} \\end{aligned}",
            "The vertical height $VO = 12\\text{ cm}$ is perpendicular to $OB$. In the right-angled triangle $VOB$, the angle $\\theta = \\angle VBO$ represents the angle of elevation of $VB$ from the base:<br>\\begin{aligned} \\tan\\theta &= \\dfrac{VO}{ OB } \\ \\tan\\theta &= \\dfrac{12}{ 4\\sqrt{2} } = \\dfrac{3}{ \\sqrt{2} } \\approx 2.12132 \\end{aligned}",
            "Solve for the angle $\\theta$ by taking the inverse tangent:<br>\\begin{aligned} \\theta &= \\arctan(2.12132) \\ &\\approx 64.76059^\\circ \\approx 64.8^\\circ \\end{aligned}<br><br>Final Answer: $64.8^\\circ$"
        ],
        "pi_options": [
            {
                "ans": "$$64.7^\\circ$$",
                "feedback": "Check your rounding of the final angle. The exact value of $\\arctan\\left(\\dfrac{3}{\\sqrt{2}}\\right)$ is approximately $64.7606^\\circ$. When rounding to $1$ decimal place, this is $64.8^\\circ$, not $64.7^\\circ$."
            },
            {
                "ans": "$$56.3^\\circ$$",
                "feedback": "Check your baseline length. The horizontal distance is $OB$ (half the diagonal of the base), which is $4\\sqrt{2} \\approx 5.66\\text{ cm}$. It seems you may have mistakenly used half the side length ($4\\text{ cm}$), leading to $\\tan\\theta = \\dfrac{12}{4} = 3$."
            },
            {
                "ans": "$$71.6^\\circ$$",
                "feedback": "Check your vertical height. Ensure you use $VO = 12\\text{ cm}$ as the opposite side in your tangent ratio, not the side length of the square base."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Projections in 3D Space",
            "content": "To find the angle between any sloping line and a horizontal plane in 3D, always find the projection of that line onto the plane first (here, $OB$ is the projection of $VB$). This reduces the problem to a standard, 2D right-angled triangle."
        }
    },
    {
        "id": "004335",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Trigonometry",
        "topic": "Trigonometric Equations",
        "subtopic": [
            "Sector Area",
            "Arc Length",
            "Radians"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A sector of a circle of radius $r\\text{ cm}$ has an arc length of $10\\text{ cm}$ and an area of $40\\text{ cm}^2$.<br><br>Find the value of $r$ and the angle of the sector in radians.",
        "steps": [
            "First, sketch the circular sector showing the radius $r$, the arc length of $10\\text{ cm}$, and the central angle $\\theta$ in radians:<br><br><img src='images/p1/004335.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
            "Write down the formulas for the arc length $s$ and area $A$ of a circular sector in radians:<br>\\begin{aligned} s &= r\\theta \\ A &= \\dfrac{1}{ 2 }r^2\\theta \\end{aligned}",
            "Substitute the given values $s = 10$ and $A = 40$ into the equations:<br>\\begin{aligned} r\\theta &= 10 \\quad \\text{(Equation 1)} \\ \\dfrac{1}{ 2 }r^2\\theta &= 40 \\quad \\text{(Equation 2)} \\end{aligned}",
            "Substitute Equation 1 ($r\\theta = 10$) into Equation 2 by rewriting $r^2\\theta$ as $r(r\\theta)$:<br>\\begin{aligned} \\dfrac{1}{ 2 }r(r\\theta) &= 40 \\ \\dfrac{1}{ 2 }r(10) &= 40 \\ 5r &= 40 \\implies r = 8 \\text{ cm} \\end{aligned}",
            "Substitute $r = 8$ back into Equation 1 to find the central angle $\\theta$ in radians:<br>\\begin{aligned} 8\\theta &= 10 \\ \\theta &= \\dfrac{10}{ 8 } = 1.25 \\text{ radians} \\end{aligned}<br><br>Final Answer: $r = 8\\text{ cm}$ and $\\theta = 1.25\\text{ radians}$"
        ],
        "pi_options": [
            {
                "ans": "$$r = 4\\text{ cm}, \\quad \\theta = 2.5\\text{ radians}$$",
                "feedback": "Check your substitution steps. When substituting $r\\theta = 10$ into $\\dfrac{1}{2}r^2\\theta = 40$, we get $\\dfrac{1}{2}r(10) = 40 \\implies 5r = 40 \\implies r = 8$. It seems you may have missed the factor of $\\dfrac{1}{2}$."
            },
            {
                "ans": "$$r = 8\\text{ cm}, \\quad \\theta = 0.8\\text{ radians}$$",
                "feedback": "Check your division step when isolating $\\theta$. From $8\\theta = 10$, dividing by 8 yields $\\theta = \\dfrac{10}{8} = 1.25$ radians. It seems you may have divided 8 by 10 instead."
            },
            {
                "ans": "$$r = 8\\text{ cm}, \\quad \\theta = 71.6^\\circ$$",
                "feedback": "Read the question carefully. The question asks for the central angle of the sector 'in radians'. Do not convert your final answer into degrees."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Quick Radians Substitution",
            "content": "For sector problems involving both area and arc length, you can always use the elegant relation $A = \\dfrac{1}{2}rs$. This bypasses needing to solve for $\\theta$ first, letting you find the radius $r$ instantly through a single, clean division."
        }
    },
    {
        "id": "004336",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Binomial Expansion",
        "subtopic": [
            "Binomial Theorem",
            "Conjugates",
            "Surds"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>1. Use the Binomial Theorem to expand:<br>$$(x + \\sqrt{y})^4$$<br>2. Hence, write down the expansion of $(x - \\sqrt{y})^4$ and find a simplified expression for:<br>$$(x + \\sqrt{y})^4 + (x - \\sqrt{y})^4$$<br>giving your answer in terms of $x$ and $y$.",
        "steps": [
            "Use the Binomial Theorem to expand $(x + \\sqrt{y})^4$ term by term using the binomial coefficients $1, 4, 6, 4, 1$:<br>\\begin{aligned} (x + \\sqrt{y})^4 &= \\binom{4}{0}x^4(\\sqrt{y})^0 + \\binom{4}{1}x^3(\\sqrt{y})^1 + \\binom{4}{2}x^2(\\sqrt{y})^2 + \\binom{4}{3}x(\\sqrt{y})^3 + \\binom{4}{4}x^0(\\sqrt{y})^4 \\end{aligned}",
            "Simplify each term of the expansion individually, noting that $(\\sqrt{y})^3 = y\\sqrt{y}$:<br>\\begin{aligned} (x + \\sqrt{y})^4 &= 1(x^4)(1) + 4(x^3)(\\sqrt{y}) + 6(x^2)(y) + 4(x)(y\\sqrt{y}) + 1(1)(y^2) \\ &= x^4 + 4x^3\\sqrt{y} + 6x^2y + 4xy\\sqrt{y} + y^2 \\end{aligned}",
            "To write down the expansion of the conjugate term $(x - \\sqrt{y})^4$, simply negate the odd powers of $\\sqrt{y}$ from the previous expansion:<br>\\begin{aligned} (x - \\sqrt{y})^4 &= x^4 - 4x^3\\sqrt{y} + 6x^2y - 4xy\\sqrt{y} + y^2 \\end{aligned}",
            "Add the two expansions together. Notice that the irrational terms containing $\\sqrt{y}$ have opposite signs and cancel out completely:<br>\\begin{aligned} (x + \\sqrt{y})^4 + (x - \\sqrt{y})^4 &= \\left(x^4 + 4x^3\\sqrt{y} + 6x^2y + 4xy\\sqrt{y} + y^2\\right) \\ &\\quad + \\left(x^4 - 4x^3\\sqrt{y} + 6x^2y - 4xy\\sqrt{y} + y^2\\right) \\ &= 2x^4 + 12x^2y + 2y^2 \\end{aligned}<br>Factor out the common factor of 2 to write the final simplified expression:<br>\\begin{aligned} (x + \\sqrt{y})^4 + (x - \\sqrt{y})^4 &= 2\\left(x^4 + 6x^2y + y^2\\right) \\end{aligned}<br><br>Final Answer: $x^4 + 4x^3\\sqrt{y} + 6x^2y + 4xy\\sqrt{y} + y^2$ and $2\\left(x^4 + 6x^2y + y^2\\right)$"
        ],
        "pi_options": [
            {
                "ans": "$$x^4 + 4x^3\\sqrt{y} + 6x^2y + 4xy\\sqrt{y} + y^2 \\quad \\text{and} \\quad 2x^4 + 2y^2$$",
                "feedback": "Check your addition step. When combining the two expansions, only the odd-powered irrational terms containing $\\sqrt{y}$ cancel out. The even-powered algebraic term $6x^2y$ exists in both expansions with positive signs, so adding them yields $12x^2y$, not $0$."
            },
            {
                "ans": "$$x^4 + 4x^3\\sqrt{y} + 6x^2y + 4xy^2 + y^2 \\quad \\text{and} \\quad 2\\left(x^4 + 6x^2y + y^2\\right)$$",
                "feedback": "Check your fourth term in the first expansion. The term is $\\binom{4}{3}x(\\sqrt{y})^3$. Since $(\\sqrt{y})^3 = (\\sqrt{y})^2 \\times \\sqrt{y} = y\\sqrt{y}$, this term simplifies to $4xy\\sqrt{y}$, not $4xy^2$."
            },
            {
                "ans": "$$x^4 + 4x^3\\sqrt{y} + 6x^2y + 4xy\\sqrt{y} + y^2 \\quad \\text{and} \\quad 8x^3\\sqrt{y} + 8xy\\sqrt{y}$$",
                "feedback": "Check your addition step. The question asks you to find the sum of $(x + \\sqrt{y})^4 + (x - \\sqrt{y})^4$. It seems you may have subtracted them instead, which would have cancelled the rational terms and doubled the irrational terms."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Conjugate Cancellations",
            "content": "When adding binomial expansions of the form $(x + a)^n + (x - a)^n$, all the odd-powered terms of $a$ (which contain the negative sign in the second expansion) will cancel out completely, while the even-powered terms will double. This conjugate structure is a highly useful algebraic shortcut."
        }
    },
    {
        "id": "004337",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Binomial Expansion",
        "subtopic": [
            "Binomial Theorem",
            "Isolating Coefficients",
            "Indices"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Find the coefficient of $x^3$ in the binomial expansion of:<br>$$(2 - 3x)^6$$",
        "steps": [
            "Write down the general term formula $T_{r+1}$ for the binomial expansion of $(a + b)^n$:<br>\\begin{aligned} T_{r+1} &= \\binom{n}{r} a^{n-r} b^r \\end{aligned}",
            "Substitute the given parameters $a = 2$, $b = -3x$, and $n = 6$ into the general term formula:<br>\\begin{aligned} T_{r+1} &= \\binom{6}{r} (2)^{6-r} (-3x)^r \\ T_{r+1} &= \\binom{6}{r} (2)^{6-r} (-3)^r x^r \\end{aligned}",
            "To find the coefficient of the term in $x^3$, we require the exponent of $x$ to be $3$, which means setting $r = 3$:<br>\\begin{aligned} T_{4} &= \\binom{6}{3} (2)^{6-3} (-3)^3 x^3 \\ T_{4} &= \\binom{6}{3} (2)^3 (-3)^3 x^3 \\end{aligned}",
            "Evaluate the constant components of the term individually, taking extreme care with the negative base raised to an odd power:<br>\\begin{aligned} \\binom{6}{3} &= 20 \\ (2)^3 &= 8 \\ (-3)^3 &= -27 \\end{aligned}",
            "Multiply these evaluated constants together to find the final coefficient of $x^3$:<br>\\begin{aligned} T_4 &= 20 \\times 8 \\times (-27)x^3 \\ &= 160 \\times (-27)x^3 \\ &= -4320x^3 \\end{aligned}<br>Thus, the coefficient of $x^3$ in the expansion is $-4320$."
        ],
        "pi_options": [
            {
                "ans": "$$4320$$",
                "feedback": "Check your signs. Since the term is $(-3x)^3$, raising the negative coefficient to an odd power preserves the negative sign: $(-3)^3 = -27$. This makes the final coefficient negative."
            },
            {
                "ans": "$$-1440$$",
                "feedback": "Check your binomial coefficient calculation. The value of $\\binom{6}{3}$ is $\\dfrac{6 \\times 5 \\times 4}{ 3 \\times 2 \\times 1 } = 20$. It seems you may have used $\\binom{6}{1} = 6$ or made an arithmetic slip."
            },
            {
                "ans": "$$-480$$",
                "feedback": "Check your term evaluations. Ensure you evaluate $(-3)^3 = -27$ and $2^3 = 8$. It seems you may have multiplied the bases by their exponents (e.g., calculating $2 \\times 3 = 6$ and $-3 \\times 3 = -9$) instead of raising them to those powers."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Odd Powers of Negatives",
            "content": "When isolating coefficients in binomial expansions containing subtraction (like $a - bx$), always include the negative sign with the term: $(-bx)^r$. Raising a negative term to an odd power ($r = 1, 3, 5$) will result in a negative coefficient, which is a very frequent source of sign errors."
        }
    },
    {
        "id": "004338",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Binomial Expansion",
        "subtopic": [
            "Binomial Theorem",
            "Negative Indices",
            "Simplifying Fractions"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Use the Binomial Theorem to expand:<br>$$\\left(x^2 - \\dfrac{2}{x}\\right)^4, \\quad x \\neq 0$$<br>giving each term in its simplest form.",
        "steps": [
            "Write the binomial expansion of $(a + b)^4$ using the binomial coefficients $1, 4, 6, 4, 1$:<br>\\begin{aligned} (a + b)^4 &= a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4 \\end{aligned}",
            "Substitute $a = x^2$ and $b = -\\dfrac{2}{ x }$ into the expansion formula:<br>\\begin{aligned} \\left(x^2 - \\dfrac{2}{x}\\right)^4 &= (x^2)^4 + 4(x^2)^3\\left(-\\dfrac{2}{x}\\right) + 6(x^2)^2\\left(-\\dfrac{2}{x}\\right)^2 + 4(x^2)\\left(-\\dfrac{2}{x}\\right)^3 + \\left(-\\dfrac{2}{x}\\right)^4 \\end{aligned}",
            "Simplify each of the five terms individually by applying the index laws:<ul><li>Term 1: $(x^2)^4 = x^8$</li><li>Term 2: $4(x^6)\\left(-\\dfrac{2}{x}\\right) = -8x^5$</li><li>Term 3: $6(x^4)\\left(\\dfrac{4}{x^2}\\right) = 24x^2$</li><li>Term 4: $4(x^2)\\left(-\\dfrac{8}{x^3}\\right) = -\\dfrac{32}{x}$</li><li>Term 5: $\\left(-\\dfrac{2}{x}\\right)^4 = \\dfrac{16}{x^4}$</li></ul>",
            "Combine the simplified terms to write the final expanded expression in descending powers of $x$:<br>\\begin{aligned} \\left(x^2 - \\dfrac{2}{x}\\right)^4 &= x^8 - 8x^5 + 24x^2 - \\dfrac{32}{x} + \\dfrac{16}{x^4} \\end{aligned}"
        ],
        "pi_options": [
            {
                "ans": "$$x^8 + 8x^5 + 24x^2 + \\dfrac{32}{x} + \\dfrac{16}{x^4}$$",
                "feedback": "Check your signs. Raising a negative term to an odd power (the second and fourth terms with exponents 1 and 3) must result in a negative term. It seems you lost your negative signs during expansion."
            },
            {
                "ans": "$$x^8 - 8x^6 + 24x^4 - \\dfrac{32}{x^2} + \\dfrac{16}{x^4}$$",
                "feedback": "Check your division of algebraic indices. When simplifying Term 2, we have $\\dfrac{x^6}{x} = x^5$, not $x^6$. For Term 3, we have $\\dfrac{x^4}{x^2} = x^2$, not $x^4$. Ensure you subtract exponents when dividing variables."
            },
            {
                "ans": "$$x^8 - 2x^5 + 6x^2 - \\dfrac{8}{x} + \\dfrac{16}{x^4}$$",
                "feedback": "Check your coefficient multiplications. Remember to multiply the binomial coefficients ($1, 4, 6, 4, 1$) by the constants generated from squaring or cubing the base term $-2$ (e.g., $4 \\times (-2) = -8$ and $6 \\times 4 = 24$)."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Combining Indices",
            "content": "When expanding binomials with variable terms in both slots, be highly systematic with index laws. For each term, simplify the constants and the powers of $x$ independently (remembering that $\\left(x^a\\right)^b = x^{ab}$ and $\\dfrac{x^a}{x^b} = x^{a-b}$) to avoid algebraic slips."
        }
    },
    {
        "id": "004339",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Binomial Expansion",
        "subtopic": [
            "Binomial Theorem",
            "Decimal Approximation",
            "Truncation"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>1. Find the first four terms in the binomial expansion of $(1 + 2x)^5$ in ascending powers of $x$.<br>2. By substituting an appropriate value of $x$ into your expansion, find an approximate value for $1.02^5$. Show all your working.",
        "steps": [
            "Find the first four terms ($r = 0, 1, 2, 3$) of the binomial expansion of $(1 + 2x)^5$ using the binomial coefficients $1, 5, 10, 10$:<br>\\begin{aligned} (1 + 2x)^5 &\\approx \\binom{5}{0}(1)^5(2x)^0 + \\binom{5}{1}(1)^4(2x)^1 + \\binom{5}{2}(1)^3(2x)^2 + \\binom{5}{3}(1)^2(2x)^3 \\end{aligned}",
            "Simplify each of the four terms individually:<br>\\begin{aligned} \\text{Term 1} &= 1(1)(1) = 1 \\ \\text{Term 2} &= 5(1)(2x) = 10x \\ \\text{Term 3} &= 10(1)(4x^2) = 40x^2 \\ \\text{Term 4} &= 10(1)(8x^3) = 80x^3 \\end{aligned}<br>Thus, the truncated expansion is:<br>$$(1 + 2x)^5 \\approx 1 + 10x + 40x^2 + 80x^3$$",
            "To approximate $1.02^5$, set the base of our binomial $(1 + 2x)$ equal to the target base $1.02$ to solve for $x$:<br>\\begin{aligned} 1 + 2x &= 1.02 \\ 2x &= 0.02 \\implies x = 0.01 \\end{aligned}",
            "Substitute $x = 0.01$ into the truncated binomial expansion:<br>\\begin{aligned} 1.02^5 &\\approx 1 + 10(0.01) + 40(0.01)^2 + 80(0.01)^3 \\end{aligned}",
            "Evaluate each decimal term carefully, keeping track of the decimal places:<br>\\begin{aligned} 10(0.01) &= 0.1 \\ 40(0.0001) &= 0.004 \\ 80(0.000001) &= 0.00008 \\end{aligned}",
            "Combine the evaluated decimal terms to find the final approximation:<br>\\begin{aligned} 1.02^5 &\\approx 1 + 0.1 + 0.004 + 0.00008 \\ &= 1.10408 \\end{aligned}<br><br>Final Answer: $1 + 10x + 40x^2 + 80x^3$ and $1.10408$ (or $1.1041$ to 4 d.p.)"
        ],
        "pi_options": [
            {
                "ans": "$$1 + 5x + 10x^2 + 10x^3 \\quad \\text{and} \\quad 1.0511$$",
                "feedback": "Check your expansion terms. Remember to raise the entire term $(2x)$ to the respective powers (e.g., $(2x)^2 = 4x^2$ and $(2x)^3 = 8x^3$). It seems you forgot to square and cube the coefficient 2."
            },
            {
                "ans": "$$1 + 10x + 40x^2 + 80x^3 \\quad \\text{and} \\quad 1.20408$$",
                "feedback": "Check your substitution value. To match $1 + 2x = 1.02$, you must use $x = 0.01$. It seems you may have used $x = 0.02$ by mistake, which would correspond to approximating $1.04^5$."
            },
            {
                "ans": "$$1 + 10x + 40x^2 + 80x^3 \\quad \\text{and} \\quad 1.14080$$",
                "feedback": "Check your decimal places during addition. Note that $40(0.01)^2 = 40(0.0001) = 0.0040$. It seems you made an addition alignment slip, placing the 4 in the hundredths place instead of the thousandths place."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Appropriate X Selection",
            "content": "When approximating decimal values using binomial expansions, always equate the algebraic base $(1 + kx)$ to your target base (such as $1.02$) to find the correct value of $x$. Trying to guess $x$ directly often leads to using $x = 0.02$ by mistake, which ruins the calculation."
        }
    },
    {
        "id": "004340",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Binomial Expansion",
        "subtopic": [
            "Binomial Theorem",
            "Solving for Parameters",
            "Quadratic Equations"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>In the binomial expansion of $(1 + kx)^7$, the coefficient of $x^2$ is $189$.<br><br>Given that $k$ is a positive constant ($k > 0$), find the value of $k$.",
        "steps": [
            "Write down the general term formula $T_{r+1}$ for the binomial expansion of $(1 + kx)^7$:<br>\\begin{aligned} T_{r+1} &= \\binom{7}{r} (1)^{7-r} (kx)^r \\ &= \\binom{7}{r} k^r x^r \\end{aligned}",
            "To find the coefficient of the term in $x^2$, set $r = 2$ in the general term formula:<br>\\begin{aligned} T_3 &= \\binom{7}{2} k^2 x^2 \\end{aligned}",
            "Evaluate the binomial coefficient $\\binom{7}{2}$:<br>\\begin{aligned} \\binom{7}{2} &= \\dfrac{7 \\times 6}{ 2 \\times 1 } = 21 \\end{aligned}",
            "Set the expression for the coefficient of $x^2$ equal to the given value of $189$:<br>\\begin{aligned} 21k^2 &= 189 \\end{aligned}",
            "Solve the quadratic equation to find the value of $k$:<br>\\begin{aligned} k^2 &= \\dfrac{189}{ 21 } \\ k^2 &= 9 \\ k &= \\pm 3 \\end{aligned}",
            "Since the question specifies that $k$ must be a positive constant ($k > 0$), we reject the negative root $k = -3$. Thus, the value of the constant is $k = 3$."
        ],
        "pi_options": [
            {
                "ans": "$$k = \\pm 3$$",
                "feedback": "Read the question carefully. The question states that $k$ must be a positive constant ($k > 0$). You must discard the negative root of your quadratic equation, leaving only $k = 3$."
            },
            {
                "ans": "$$k = 9$$",
                "feedback": "Check your solving steps. From $k^2 = 9$, you must take the square root of both sides to find $k = 3$. It seems you forgot to take the square root."
            },
            {
                "ans": "$$k = 5.2$$",
                "feedback": "Check your evaluation of the binomial coefficient $\\binom{7}{2}$. It seems you may have calculated $\\binom{7}{2} = 7 \\times 2 = 14$ or made an arithmetic slip."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Squaring Unknown Parameters",
            "content": "When evaluating terms like $(kx)^2$, ensure you square both the constant parameter and the variable: $k^2 x^2$. Forgetting to square the parameter $k$ is an incredibly common slip that leads to a linear equation ($21k = 189$) instead of the correct quadratic one."
        }
    },
{
"id": "04341",
"board": "WJEC",
"level": "AS",
"major_area": "Vectors",
"topic": "2D Vectors",
"subtopic": [
"Magnitude and Direction",
"Line Division",
"Inequalities"
],
"img": false,
"question": "<strong>Part (a)</strong><br>The vectors <strong>u</strong> and <strong>v</strong> are defined by $\\mathbf{ u } = 8\\mathbf{ i } - 15\\mathbf{ j }$ and $\\mathbf{ v } = 3\\mathbf{ i } + 4\\mathbf{ j }$. Determine the range of values for $\\mu$ such that:<br>$$\\mu|\\mathbf{ v }| > |\\mathbf{ u }|$$<br><strong>Part (b)</strong><br>The point $A$ has position vector $5\\mathbf{ i } - 8\\mathbf{ j }$ and the point $B$ has position vector $17\\mathbf{ i } + 10\\mathbf{ j }$. Determine the position vector of the point $C$, which lies between $A$ and $B$, such that $AC : CB$ is $1 : 2$.",
"steps": [
"<strong>Part (a): Find the magnitude of each vector</strong><br>To start, compute the magnitudes of <strong>u</strong> and <strong>v</strong> using the Pythagorean formula $|x\\mathbf{ i } + y\\mathbf{ j }| = \\sqrt{ x^2 + y^2 }$:<br>\\begin{aligned}\n|\\mathbf{ u }| &= \\sqrt{ 8^2 + (-15)^2 } \\\\\n&= \\sqrt{ 64 + 225 } \\\\\n&= \\sqrt{ 289 } \\\\\n&= 17\n\\end{aligned}<br>Now find the magnitude of <strong>v</strong>:<br>\\begin{aligned}\n|\\mathbf{ v }| &= \\sqrt{ 3^2 + 4^2 } \\\\\n&= \\sqrt{ 9 + 16 } \\\\\n&= \\sqrt{ 25 } \\\\\n&= 5\n\\end{aligned}",
"<strong>Part (a): Solve the inequality</strong><br>Substitute the computed magnitudes into the inequality $\\mu|\\mathbf{ v }| > |\\mathbf{ u }|$:<br>\\begin{aligned}\n\\mu \\cdot 5 &> 17 \\\\\n\\mu &> \\frac{ 17 }{ 5 } \\\\\n\\mu &> 3.4\n\\end{aligned}",
"<strong>Part (b): Calculate vector $\\vec{ AB }$ and find $\\vec{ AC }$</strong><br>Find the displacement vector $\\vec{ AB }$ by subtracting the position vector of $A$ from $B$:<br>\\begin{aligned}\n\\vec{ AB } &= \\mathbf{ b } - \\mathbf{ a } \\\\\n&= (17\\mathbf{ i } + 10\\mathbf{ j }) - (5\\mathbf{ i } - 8\\mathbf{ j }) \\\\\n&= 12\\mathbf{ i } + 18\\mathbf{ j }\n\\end{aligned}<br>Now multiply this displacement vector by $\\frac{ 1 }{ 3 }$ to find $\\vec{ AC }$:<br>\\begin{aligned}\n\\vec{ AC } &= \\frac{ 1 }{ 3 }(12\\mathbf{ i } + 18\\mathbf{ j }) \\\\\n&= 4\\mathbf{ i } + 6\\mathbf{ j }\n\\end{aligned}",
"<strong>Part (b): Determine the position vector of point $C$</strong><br>Add the displacement $\\vec{ AC }$ to the starting position vector $\\mathbf{ a }$:<br>\\begin{aligned}\n\\mathbf{ c } &= \\mathbf{ a } + \\vec{ AC } \\\\\n&= (5\\mathbf{ i } - 8\\mathbf{ j }) + (4\\mathbf{ i } + 6\\mathbf{ j }) \\\\\n&= 9\\mathbf{ i } - 2\\mathbf{ j }\n\\end{aligned}"
],
"pi_options": [
{
"ans": "$\\mu > 3.4$ and $\\mathbf{ c } = 13\\mathbf{ i } + 4\\mathbf{ j }$",
"feedback": "Your range for $\\mu$ is correct, but check how you divided the segment. A position vector of $13\\mathbf{ i } + 4\\mathbf{ j }$ suggests you used a $2 : 1$ ratio from $A$ to $B$ (i.e. multiplying by $\\frac{ 2 }{ 3 }$) instead of the correct $1 : 2$ ratio (which corresponds to $\\frac{ 1 }{ 3 }$)."
},
{
"ans": "$\\mu > 2.125$ and $\\mathbf{ c } = 9\\mathbf{ i } - 2\\mathbf{ j }$",
"feedback": "Your position vector $\\mathbf{ c }$ is correct, but check your calculation for $|\\mathbf{ u }|$. Did you compute $|\\mathbf{ u }| = \\sqrt{ 8^2 + (-15)^2 }$ correctly? It looks like you might have added the linear components ($8+15=23$) instead of using the Pythagorean formula, yielding an incorrect magnitude."
},
{
"ans": "$\\mu > 3.4$ and $\\mathbf{ c } = 11\\mathbf{ i } - 2\\mathbf{ j }$",
"feedback": "Your range for $\\mu$ is correct, but check your addition or scalar multiplication when finding $\\mathbf{ c }$. Ensure you correctly calculated $\\vec{ AC } = \\frac{ 1 }{ 3 }(12\\mathbf{ i } + 18\\mathbf{ j }) = 4\\mathbf{ i } + 6\\mathbf{ j }$ before adding it to $\\mathbf{ a }$."
}
],
"bradley_insight": {
"type": "caution",
"title": "The Head Teacher's Eye: Ratio Partitioning",
"content": "Always remember that a ratio of $m : n$ divides a line segment into $m + n$ total parts. For $AC : CB = 1 : 2$, the fraction used to find the displacement of $C$ from $A$ is $\\frac{ 1 }{ 1 + 2 } = \\frac{ 1 }{ 3 }$, not $\\frac{ 1 }{ 2 }$. Drawing a quick 1D sketch will save you from this very common mistake."
}
},
{
"id": "04342",
"board": "WJEC",
"level": "AS",
"major_area": "Vectors",
"topic": "2D Vectors",
"subtopic": [
"Magnitude and Direction",
"Unit Vectors"
],
"img": false,
"question": "<strong>Part (a)</strong><br>The vector <strong>w</strong> is defined by $\\mathbf{ w } = -12\\mathbf{ i } + 5\\mathbf{ j }$. Find the unit vector in the direction of <strong>w</strong>, expressing your answer in the form $a\\mathbf{ i } + b\\mathbf{ j }$.<br><br><strong>Part (b)</strong><br>Given that $\\mathbf{ p } = 4\\mathbf{ i } - 3\\mathbf{ j }$, find the position vector of a point $X$ that lies in the direction of <strong>p</strong> such that the distance of $X$ from the origin is $35$ units.",
"steps": [
"<strong>Part (a): Find the magnitude of <strong>w</strong></strong><br>The magnitude $|\\mathbf{ w }|$ is computed as:<br>\\begin{aligned}\n|\\mathbf{ w }| &= \\sqrt{ (-12)^2 + 5^2 } \\\\\n&= \\sqrt{ 144 + 25 } \\\\\n&= \\sqrt{ 169 } \\\\\n&= 13\n\\end{aligned}",
"<strong>Part (a): Construct the unit vector</strong><br>To find the unit vector $\\hat{ \\mathbf{ w } }$ in the direction of <strong>w</strong>, divide <strong>w</strong> by its magnitude $|\\mathbf{ w }|$:<br>\\begin{aligned}\n\\hat{ \\mathbf{ w } } &= \\frac{ \\mathbf{ w } }{ |\\mathbf{ w }| } \\\\\n&= \\frac{ -12\\mathbf{ i } + 5\\mathbf{ j } }{ 13 } \\\\\n&= -\\frac{ 12 }{ 13 }\\mathbf{ i } + \\frac{ 5 }{ 13 }\\mathbf{ j }\n\\end{aligned}",
"<strong>Part (b): Find the magnitude and unit vector of <strong>p</strong></strong><br>First find the magnitude $|\\mathbf{ p }|$:<br>\\begin{aligned}\n|\\mathbf{ p }| &= \\sqrt{ 4^2 + (-3)^2 } \\\\\n&= \\sqrt{ 16 + 9 } \\\\\n&= \\sqrt{ 25 } \\\\\n&= 5\n\\end{aligned}<br>Now find the unit vector $\\hat{ \\mathbf{ p } }$:<br>\\begin{aligned}\n\\hat{ \\mathbf{ p } } &= \\frac{ \\mathbf{ p } }{ |\\mathbf{ p }| } \\\\\n&= \\frac{ 4 }{ 5 }\\mathbf{ i } - \\frac{ 3 }{ 5 }\\mathbf{ j }\n\\end{aligned}",
"<strong>Part (b): Scale to the required distance</strong><br>Since $X$ is at a distance of $35$ units from the origin in the direction of <strong>p</strong>, scale the unit vector $\\hat{ \\mathbf{ p } }$ by a factor of $35$:<br>\\begin{aligned}\n\\mathbf{ x } &= 35 \\hat{\\mathbf{ p } } \\\\\n&= 35 \\left( \\frac{ 4 }{ 5 }\\mathbf{ i } - \\frac{ 3 }{ 5 }\\mathbf{ j } \\right) \\\\\n&= 7(4\\mathbf{ i } - 3\\mathbf{ j }) \\\\\n&= 28\\mathbf{ i } - 21\\mathbf{ j }\n\\end{aligned}"
],
"pi_options": [
{
"ans": "$\\hat{ \\mathbf{ w } } = -\\frac{ 12 }{ 7 }\\mathbf{ i } + \\frac{ 5 }{ 7 }\\mathbf{ j }$ and $\\mathbf{ x } = 28\\mathbf{ i } - 21\\mathbf{ j }$",
"feedback": "Your value for $\\mathbf{ x }$ is correct, but check your magnitude calculation for <strong>w</strong>. The magnitude of a vector is calculated using the Pythagorean formula, which gives $13$, not by summing the individual coordinate values."
},
{
"ans": "$\\hat{ \\mathbf{ w } } = -\\frac{ 12 }{ 13 }\\mathbf{ i } + \\frac{ 5 }{ 13 }\\mathbf{ j }$ and $\\mathbf{ x } = 140\\mathbf{ i } - 105\\mathbf{ j }$",
"feedback": "Your unit vector is correct, but you scaled <strong>p</strong> directly by $35$. Since <strong>p</strong> already has a magnitude of $5$, multiplying it directly by $35$ yields a vector with a magnitude of $175$. You must first find the unit vector of <strong>p</strong> before multiplying by $35$."
},
{
"ans": "$\\hat{ \\mathbf{ w } } = \\frac{ 12 }{ 13 }\\mathbf{ i } - \\frac{ 5 }{ 13 }\\mathbf{ j }$ and $\\mathbf{ x } = -28\\mathbf{ i } + 21\\mathbf{ j }$",
"feedback": "Be very careful with signs. You have reversed the direction of both vectors. A vector in the direction of <strong>w</strong> must have the same component signs as <strong>w</strong>."
}
],
"bradley_insight": {
"type": "pro-tip",
"title": "The Head Teacher's Eye: Scaling Vectors",
"content": "To find a vector of any specific length $L$ in the direction of a vector $\\mathbf{ v }$, always break it into two simple steps: 1) Convert $\\mathbf{ v }$ to a unit vector (length 1) by dividing by its magnitude, and 2) Multiply this unit vector by $L$. This prevents accidental double-scaling."
}
},
{
"id": "04343",
"board": "WJEC",
"level": "AS",
"major_area": "Vectors",
"topic": "2D Vectors",
"subtopic": [
"Line Division",
"Midpoints"
],
"img": false,
"question": "<strong>Part (a)</strong><br>Points $P$ and $Q$ have position vectors $\\mathbf{ p } = -3\\mathbf{ i } + 10\\mathbf{ j }$ and $\\mathbf{ q } = 7\\mathbf{ i } - 4\\mathbf{ j }$ respectively. Find the position vector of the midpoint of $PQ$.<br><br><strong>Part (b)</strong><br>The point $R$ lies on the line $PQ$ extended such that $Q$ lies between $P$ and $R$, and $PQ : QR$ is $2 : 1$. Find the position vector of $R$.",
"steps": [
"<strong>Part (a): Find the midpoint of $PQ$</strong><br>The position vector of the midpoint $\\mathbf{ m }$ is the average of the position vectors $\\mathbf{ p }$ and $\\mathbf{ q }$:<br>\\begin{aligned}\n\\mathbf{ m } &= \\frac{ \\mathbf{ p } + \\mathbf{ q } }{ 2 } \\\\\n&= \\frac{ (-3 + 7)\\mathbf{ i } + (10 - 4)\\mathbf{ j } }{ 2 } \\\\\n&= \\frac{ 4\\mathbf{ i } + 6\\mathbf{ j } }{ 2 } \\\\\n&= 2\\mathbf{ i } + 3\\mathbf{ j }\n\\end{aligned}",
"<strong>Part (b): Compute the vector $\\vec{ PQ }$</strong><br>Find the vector $\\vec{ PQ }$ by subtracting the position vector of $P$ from $Q$:<br>\\begin{aligned}\n\\vec{ PQ } &= \\mathbf{ q } - \\mathbf{ a } \\\\\n&= (7\\mathbf{ i } - 4\\mathbf{ j }) - (-3\\mathbf{ i } + 10\\mathbf{ j }) \\\\\n&= 10\\mathbf{ i } - 14\\mathbf{ j }\n\\end{aligned}",
"<strong>Part (b): Find vector $\\vec{ QR }$ and position vector $\\mathbf{ r }$</strong><br>Now find $\\vec{ QR }$:<br>\\begin{aligned}\n\\vec{ QR } &= \\frac{ 1 }{ 2 }\\vec{ PQ } \\\\\n&= \\frac{ 1 }{ 2 }(10\\mathbf{ i } - 14\\mathbf{ j }) \\\\\n&= 5\\mathbf{ i } - 7\\mathbf{ j }\n\\end{aligned}<br>Add this displacement to the position vector of $Q$ to find the position vector of $R$:<br>\\begin{aligned}\n\\mathbf{ r } &= \\mathbf{ q } + \\vec{ QR } \\\\\n&= (7\\mathbf{ i } - 4\\mathbf{ j }) + (5\\mathbf{ i } - 7\\mathbf{ j }) \\\\\n&= 12\\mathbf{ i } - 11\\mathbf{ j }\n\\end{aligned}"
],
"pi_options": [
{
"ans": "$\\mathbf{ m } = 4\\mathbf{ i } + 6\\mathbf{ j }$ and $\\mathbf{ r } = 12\\mathbf{ i } - 11\\mathbf{ j }$",
"feedback": "Your calculation of $\\mathbf{ r }$ is correct, but check your midpoint. It looks like you added the components of $\\mathbf{ p }$ and $\\mathbf{ q }$ without dividing by $2$. Remember that a midpoint is the average of the coordinates."
},
{
"ans": "$\\mathbf{ m } = 2\\mathbf{ i } + 3\\mathbf{ j }$ and $\\mathbf{ r } = 27\\mathbf{ i } - 32\\mathbf{ j }$",
"feedback": "Your midpoint is correct, but check how you interpreted the ratio for $R$. It looks like you calculated $\\vec{ QR } = 2\\vec{ PQ }$ instead of $\\frac{ 1 }{ 2 }\\vec{ PQ }$. The ratio $PQ : QR = 2 : 1$ means $PQ$ is twice the length of $QR$."
},
{
"ans": "$\\mathbf{ m } = 2\\mathbf{ i } + 3\\mathbf{ j }$ and $\\mathbf{ r } = 2\\mathbf{ i } + 3\\mathbf{ j }$",
"feedback": "Your midpoint calculation is correct, but the position vector of $R$ cannot be identical to the midpoint of $PQ$. Re-read the definition of $R$, noting that $Q$ lies between $P$ and $R$."
}
],
"bradley_insight": {
"type": "deeper",
"title": "The Head Teacher's Eye: External Division",
"content": "When a point lies on a line extended (external division), pay close attention to the order of points. 'Q lies between P and R' tells you that the path goes $P \\rightarrow Q \\rightarrow R$. Thus, the vectors $\\vec{ PQ }$ and $\\vec{ QR }$ point in the same direction, making the relationship $\\vec{ QR } = \\frac{ 1 }{ 2 }\\vec{ PQ }$ straightforward."
}
},
{
"id": "04344",
"board": "WJEC",
"level": "AS",
"major_area": "Vectors",
"topic": "2D Vectors",
"subtopic": [
"Collinear Points",
"Line Division"
],
"img": false,
"question": "<strong>Part (a)</strong><br>Relative to a fixed origin $O$, the points $D$, $E$, and $F$ have position vectors $\\mathbf{ d } = \\mathbf{ i } - 2\\mathbf{ j }$, $\\mathbf{ e } = 5\\mathbf{ i } + 4\\mathbf{ j }$, and $\\mathbf{ f } = k\\mathbf{ i } + 13\\mathbf{ j }$ respectively, where $k$ is a constant.<br>&bull; (i) Express $\\vec{ DE }$ and $\\vec{ EF }$ in terms of $\\mathbf{ i }$, $\\mathbf{ j }$, and $k$.<br>&bull; (ii) Given that the points $D$, $E$, and $F$ are collinear, determine the value of $k$.<br><br><strong>Part (b)</strong><br>Using the value of $k$ found in part (a), find the ratio $DE : EF$.",
"steps": [
"<strong>Part (a)(i): Express the displacement vectors</strong><br>Find $\\vec{ DE }$ and $\\vec{ EF }$ by subtracting the respective position vectors:<br>\\begin{aligned}\n\\vec{ DE } &= \\mathbf{ e } - \\mathbf{ d } \\\\\n&= (5\\mathbf{ i } + 4\\mathbf{ j }) - (\\mathbf{ i } - 2\\mathbf{ j }) \\\\\n&= 4\\mathbf{ i } + 6\\mathbf{ j }\n\\end{aligned}<br>Now find $\\vec{ EF }$:<br>\\begin{aligned}\n\\vec{ EF } &= \\mathbf{ f } - \\mathbf{ e } \\\\\n&= (k\\mathbf{ i } + 13\\mathbf{ j }) - (5\\mathbf{ i } + 4\\mathbf{ j }) \\\\\n&= (k - 5)\\mathbf{ i } + 9\\mathbf{ j }\n\\end{aligned}",
"<strong>Part (a)(ii): Solve for $k$ using collinearity</strong><br>Since $D$, $E$, and $F$ are collinear, the vectors $\\vec{ DE }$ and $\\vec{ EF }$ must be parallel. Therefore, $\\vec{ EF } = \\lambda \\vec{ DE }$ for some scalar multiplier $\\lambda$:<br>$$(k - 5)\\mathbf{ i } + 9\\mathbf{ j } = \\lambda (4\\mathbf{ i } + 6\\mathbf{ j })$$",
"<strong>Part (a)(ii): Equate the components</strong><br>Equate the $\\mathbf{ j }$ components to find $\\lambda$:<br>\\begin{aligned}\n9 &= 6\\lambda \\\\\n\\lambda &= 1.5\n\\end{aligned}<br>Now equate the $\\mathbf{ i }$ components and substitute $\\lambda = 1.5$:<br>\\begin{aligned}\nk - 5 &= 4\\lambda \\\\\nk - 5 &= 4(1.5) \\\\\nk - 5 &= 6 \\\\\nk &= 11\n\\end{aligned}",
"<strong>Part (b): Determine the ratio $DE : EF$</strong><br>From the relation $\\vec{ EF } = 1.5 \\vec{ DE }$ (since $\\lambda = 1.5$), we know that the length of segment $EF$ is $1.5$ times the length of segment $DE$:<br>\\begin{aligned}\nDE : EF &= 1 : 1.5 \\\\\n&= 2 : 3\n\\end{aligned}"
],
"pi_options": [
{
"ans": "$k = 11$ and $DE : EF = 3 : 2$",
"feedback": "Your value for $k$ is correct, but check your ratio order. Since $\\vec{ EF } = 1.5\\vec{ DE }$, segment $EF$ is longer than $DE$. This means the ratio $DE : EF$ must be $1 : 1.5$, which simplifies to $2 : 3$, not $3 : 2$."
},
{
"ans": "$k = 8$ and $DE : EF = 2 : 3$",
"feedback": "Your ratio is correct, but check your equation for $k$. Since $k - 5 = 6$, you need to add $5$ to both sides to solve for $k$. It looks like you may have subtracted $5$ or made another arithmetic slip."
},
{
"ans": "$k = 14$ and $DE : EF = 1 : 2$",
"feedback": "Check your collinearity components. Equating the $\\mathbf{ j }$ components should yield $9 = 6\\lambda \\implies \\lambda = 1.5$. It looks like you may have miscalculated $\\lambda$, leading to errors in both $k$ and the final ratio."
}
],
"bradley_insight": {
"type": "pro-tip",
"title": "The Head Teacher's Eye: Collinearity Simplification",
"content": "To test if three points $D$, $E$, and $F$ are collinear, always select a shared vertex to build two vectors (e.g. $\\vec{ DE }$ and $\\vec{ EF }$). Since they share the point $E$, if they are parallel (one is a scalar multiple of the other), they must lie on the exact same line."
}
},
{
"id": "04345",
"board": "WJEC",
"level": "AS",
"major_area": "Vectors",
"topic": "2D Vectors",
"subtopic": [
"Parallel Vectors",
"Resultant Vectors"
],
"img": false,
"question": "<strong>Part (a)</strong><br>Two vectors <strong>a</strong> and <strong>b</strong> are defined by $\\mathbf{ a } = 2\\mathbf{ i } + \\lambda\\mathbf{ j }$ and $\\mathbf{ b } = -6\\mathbf{ i } + 9\\mathbf{ j }$. Given that <strong>a</strong> and <strong>b</strong> are parallel, find the value of the constant $\\lambda$.<br><br><strong>Part (b)</strong><br>Using the value of $\\lambda$ found in part (a), find the magnitude of the resultant vector $\\mathbf{ r } = 4\\mathbf{ a } + \\mathbf{ b }$.",
"steps": [
"<strong>Part (a): Set up the parallel relation</strong><br>If <strong>a</strong> and <strong>b</strong> are parallel, then $\\mathbf{ b } = k\\mathbf{ a }$ for some scalar constant $k$:<br>$$-6\\mathbf{ i } + 9\\mathbf{ j } = k(2\\mathbf{ i } + \\lambda\\mathbf{ j })$$",
"<strong>Part (a): Equate components to find $\\lambda$</strong><br>Equate the $\\mathbf{ i }$ components:<br>\\begin{aligned}\n-6 &= 2k \\\\\nk &= -3\n\\end{aligned}<br>Now equate the $\\mathbf{ j }$ components and substitute $k = -3$:<br>\\begin{aligned}\n9 &= k\\lambda \\\\\n9 &= -3\\lambda \\\\\n\\lambda &= -3\n\\end{aligned}",
"<strong>Part (b): Find the resultant vector $\\mathbf{ r }$</strong><br>Substitute $\\lambda = -3$ into <strong>a</strong> to get $\\mathbf{ a } = 2\\mathbf{ i } - 3\\mathbf{ j }$. Then calculate the linear combination $\\mathbf{ r } = 4\\mathbf{ a } + \\mathbf{ b }$:<br>\\begin{aligned}\n\\mathbf{ r } &= 4(2\\mathbf{ i } - 3\\mathbf{ j }) + (-6\\mathbf{ i } + 9\\mathbf{ j }) \\\\\n&= (8\\mathbf{ i } - 12\\mathbf{ j }) + (-6\\mathbf{ i } + 9\\mathbf{ j }) \\\\\n&= 2\\mathbf{ i } - 3\\mathbf{ j }\n\\end{aligned}",
"<strong>Part (b): Calculate the magnitude of $\\mathbf{ r }$</strong><br>Compute the magnitude using the Pythagorean formula:<br>\\begin{aligned}\n|\\mathbf{ r }| &= \\sqrt{ 2^2 + (-3)^2 } \\\\\n&= \\sqrt{ 4 + 9 } \\\\\n&= \\sqrt{ 13 }\n\\end{aligned}"
],
"pi_options": [
{
"ans": "$\\lambda = -3$ and $|\\mathbf{ r }| = 13$",
"feedback": "Your value for $\\lambda$ is correct, but check your magnitude calculation. To find the magnitude of $2\\mathbf{ i } - 3\\mathbf{ j }$, you must take the square root of $4 + 9 = 13$."
},
{
"ans": "$\\lambda = -4.5$ and $|\\mathbf{ r }| = \\sqrt{ 13 }$",
"feedback": "Your magnitude calculation is correct, but check your value of $\\lambda$. Since the $\\mathbf{ i }$ component of <strong>b</strong> is $-3$ times that of <strong>a</strong>, the same scale factor must apply to the $\\mathbf{ j }$ components, meaning $9 = -3\\lambda \\implies \\lambda = -3$."
},
{
"ans": "$\\lambda = 3$ and $|\\mathbf{ r }| = \\sqrt{ 205 }$",
"feedback": "Be careful with signs. Since the $\\mathbf{ i }$ component of <strong>b</strong> is negative and <strong>a</strong> is positive, the scaling constant $k$ must be negative, which makes $\\lambda = -3$."
}
],
"bradley_insight": {
"type": "caution",
"title": "The Head Teacher's Eye: Parallel Scaling Direction",
"content": "When two vectors are parallel, their components must be in the exact same ratio. If one vector has a positive component and the other has a negative component, the scale factor $k$ is negative, which means the vectors point in opposite directions (antiparallel), though they are still geometrically parallel."
}
},
    {
        "id": "04346",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Equations and Inequalities",
        "subtopic": [
            "Discriminant",
            "Quadratic Equations",
            "No Real Roots"
        ],
        "img": false,
        "question": "Find the range of values of $k$ for which the quadratic equation $x^2 + 2kx + 12k = 0$ has no real roots.",
        "steps": [
            "<strong>Step 1: Identify the coefficients of the quadratic equation</strong><br>The standard form of a quadratic equation is $ax^2 + bx + c = 0$. For the given equation $x^2 + 2kx + 12k = 0$, the coefficients are:<br>\\begin{aligned}\na &= 1 \\cr\nb &= 2k \\cr\nc &= 12k\n\\end{aligned}",
            "<strong>Step 2: Set up the discriminant condition</strong><br>For a quadratic equation to have no real roots, the discriminant $\\Delta = b^2 - 4ac$ must be strictly less than zero ($\\Delta < 0$):<br>\\begin{aligned}\nb^2 - 4ac &< 0 \\cr\n(2k)^2 - 4(1)(12k) &< 0 \\cr\n4k^2 - 48k &< 0\n\\end{aligned}",
            "<strong>Step 3: Solve the quadratic inequality</strong><br>First, divide the entire inequality by $4$ to simplify, and then factorise:<br>\\begin{aligned}\nk^2 - 12k &< 0 \\cr\nk(k - 12) &< 0\n\\end{aligned}<br>The critical values where the expression equals zero are $k = 0$ and $k = 12$. Since we are looking for the range where the product is less than zero (negative), the solution lies strictly between the critical values:<br>$$0 < k < 12$$"
        ],
        "pi_options": [
            {
                "ans": "$k < 0$ or $k > 12$",
                "feedback": "You identified the correct critical values of $0$ and $12$, but you chose the region where the quadratic is positive. Since we require no real roots, we need $\\Delta < 0$, which corresponds to the region between the critical values."
            },
            {
                "ans": "$0 < k < 48$",
                "feedback": "Check your simplification in the factorisation step. It looks like you forgot to square the $2k$ term as $(2k)^2 = 4k^2$, or you made an arithmetic slip while dividing by the common factor."
            },
            {
                "ans": "$-12 < k < 0$",
                "feedback": "Be careful with signs. Setting the factor $k - 12 = 0$ yields a positive critical value $k = 12$, not $k = -12$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Quadratic Inequality Regions",
            "content": "For a quadratic inequality of the form $k(k - c) < 0$ where $c > 0$, the solution region always lies between the critical values: $0 < k < c$. If the inequality were $> 0$, the solution would lie outside the critical values ($k < 0$ or $k > c$)."
        }
    },
    {
        "id": "04347",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Equations and Inequalities",
        "subtopic": [
            "Discriminant",
            "Quadratic Equations",
            "Distinct Roots"
        ],
        "img": false,
        "question": "Find the range of values of $k$ for which the quadratic equation $x^2 + 2kx + (3k + 4) = 0$ has two distinct real roots.",
        "steps": [
            "<strong>Step 1: Identify the coefficients</strong><br>For the quadratic equation $x^2 + 2kx + (3k + 4) = 0$, the coefficients are:<br>\\begin{aligned}\na &= 1 \\cr\nb &= 2k \\cr\nc &= 3k + 4\n\\end{aligned}",
            "<strong>Step 2: Set up the discriminant condition</strong><br>For the quadratic equation to have two distinct real roots, the discriminant $\\Delta = b^2 - 4ac$ must be strictly greater than zero ($\\Delta > 0$):<br>\\begin{aligned}\nb^2 - 4ac &> 0 \\cr\n(2k)^2 - 4(1)(3k + 4) &> 0 \\cr\n4k^2 - 12k - 16 &> 0\n\\end{aligned}",
            "<strong>Step 3: Solve the quadratic inequality</strong><br>Divide the entire inequality by $4$ and factorise the quadratic expression:<br>\\begin{aligned}\nk^2 - 3k - 4 &> 0 \\cr\n(k - 4)(k + 1) &> 0\n\\end{aligned}<br>The critical values are $k = -1$ and $k = 4$. Since we require the product to be strictly positive ($> 0$), the solution lies outside the interval between the critical values:<br>$$k < -1 \\quad \\text{or} \\quad k > 4$$"
        ],
        "pi_options": [
            {
                "ans": "$-1 < k < 4$",
                "feedback": "You found the correct critical values of $-1$ and $4$, but you chose the region between them. Since we require two distinct real roots, we need $\\Delta > 0$, which corresponds to the outside regions: $k < -1$ or $k > 4$."
            },
            {
                "ans": "$k < -4$ or $k > 1$",
                "feedback": "Check your factorisation of the quadratic $k^2 - 3k - 4$. Ensure the signs are correct: we need a product of $-4$ and a sum of $-3$, which gives $(k - 4)(k + 1) = 0$, leading to critical values $4$ and $-1$."
            },
            {
                "ans": "$k > 4$",
                "feedback": "You correctly identified the upper region, but do not forget the negative region. Multiplying two negative factors also yields a positive result, so $k < -1$ is also a valid part of the solution."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Distinct Roots vs Repeated Roots",
            "content": "For distinct real roots, always use a strict inequality $\\Delta > 0$. Only use $\\Delta \\ge 0$ if the question asks for 'real roots' without specifying that they must be distinct."
        }
    },
    {
        "id": "04348",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Equations and Inequalities",
        "subtopic": [
            "Discriminant",
            "Quadratic Equations",
            "No Real Roots"
        ],
        "img": false,
        "question": "Find the range of values of $k$ for which the quadratic equation $kx^2 + 6x + (k - 8) = 0$ has no real roots.",
        "steps": [
            "<strong>Step 1: Identify the coefficients</strong><br>Identify the coefficients of the quadratic equation $kx^2 + 6x + (k - 8) = 0$:<br>\\begin{aligned}\na &= k \\cr\nb &= 6 \\cr\nc &= k - 8\n\\end{aligned}",
            "<strong>Step 2: Set up the discriminant condition</strong><br>For the equation to have no real roots, we require the discriminant to be strictly less than zero ($\\Delta < 0$):<br>\\begin{aligned}\nb^2 - 4ac &< 0 \\cr\n6^2 - 4(k)(k - 8) &< 0 \\cr\n36 - 4k^2 + 32k &< 0\n\\end{aligned}",
            "<strong>Step 3: Solve the quadratic inequality</strong><br>Divide the entire inequality by $-4$. Remember that dividing by a negative number reverses the direction of the inequality sign:<br>\\begin{aligned}\nk^2 - 8k - 9 &> 0\n\\end{aligned}<br>Factorise the quadratic expression:<br>\\begin{aligned}\n(k - 9)(k + 1) &> 0\n\\end{aligned}<br>The critical values are $k = -1$ and $k = 9$. Since the inequality is now greater than zero ($> 0$), the solution lies outside the critical values:<br>$$k < -1 \\quad \\text{or} \\quad k > 9$$"
        ],
        "pi_options": [
            {
                "ans": "$-1 < k < 9$",
                "feedback": "Be careful when dividing an inequality by a negative number. When you divided $36 - 4k^2 + 32k < 0$ by $-4$, you must reverse the inequality sign to $> 0$. This makes the solution region outside the critical values, rather than between them."
            },
            {
                "ans": "$k < -9$ or $k > 1$",
                "feedback": "Check your factorisation of $k^2 - 8k - 9$. We need two numbers that multiply to $-9$ and add to $-8$. These are $-9$ and $+1$, giving $(k-9)(k+1) > 0$, which yields critical values $9$ and $-1$."
            },
            {
                "ans": "$k < -1$ or $k > 9$ (excluding $k=0$)",
                "feedback": "While $k=0$ is indeed the value for which the equation is no longer quadratic, the solved range $k < -1$ or $k > 9$ already completely excludes $0$. Thus, stating the exclusion is mathematically redundant."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Inequality Sign Reversal",
            "content": "The most common source of lost marks in quadratic inequalities is forgetting to flip the inequality sign when multiplying or dividing by a negative number. Always double-check this step carefully."
        }
    },
    {
        "id": "04349",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Equations and Inequalities",
        "subtopic": [
            "Discriminant",
            "Quadratic Equations",
            "Equal Roots"
        ],
        "img": false,
        "question": "The quadratic equation $(k + 1)x^2 + 4kx + (2k + 3) = 0$ has equal roots. Find the possible values of $k$.",
        "steps": [
            "<strong>Step 1: Identify the coefficients</strong><br>For $(k + 1)x^2 + 4kx + (2k + 3) = 0$, the coefficients are:<br>\\begin{aligned}\na &= k + 1 \\cr\nb &= 4k \\cr\nc &= 2k + 3\n\\end{aligned}",
            "<strong>Step 2: Set up the equal roots condition</strong><br>For a quadratic equation to have equal (repeated) roots, its discriminant must be exactly equal to zero ($\\Delta = 0$):<br>\\begin{aligned}\nb^2 - 4ac &= 0 \\cr\n(4k)^2 - 4(k + 1)(2k + 3) &= 0 \\cr\n16k^2 - 4(2k^2 + 5k + 3) &= 0 \\cr\n16k^2 - 8k^2 - 20k - 12 &= 0 \\cr\n8k^2 - 20k - 12 &= 0\n\\end{aligned}",
            "<strong>Step 3: Solve for $k$</strong><br>Divide the entire equation by $4$ to simplify, and then factorise:<br>\\begin{aligned}\n2k^2 - 5k - 3 &= 0 \\cr\n(2k + 1)(k - 3) &= 0\n\\end{aligned}<br>Solving this equation gives the possible values of $k$:<br>$$k = -0.5 \\quad \\text{or} \\quad k = 3$$"
        ],
        "pi_options": [
            {
                "ans": "$k = 0.5$ or $k = -3$",
                "feedback": "You factorised or solved the quadratic incorrectly at the end. Setting $2k + 1 = 0 \\implies k = -0.5$ and setting $k - 3 = 0 \\implies k = 3$. Make sure you solve each bracket correctly for the signs."
            },
            {
                "ans": "$k = -0.5$ or $k = 3$ (excluding $k=-1$)",
                "feedback": "While the original coefficient $a = k+1$ cannot be $0$ (which would make $k = -1$), neither of your solved values is $-1$, so explicitly adding this exclusion is redundant."
            },
            {
                "ans": "$k = -1$ or $k = 3$",
                "feedback": "Check your expansion and simplification. Ensure you expanded $4(k+1)(2k+3)$ correctly as $4(2k^2 + 5k + 3) = 8k^2 + 20k + 12$ before subtracting."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Checking the Quadratic Assumption",
            "content": "For any quadratic equation $ax^2 + bx + c = 0$ where the coefficient $a$ depends on $k$, always verify that your solved values of $k$ do not make $a = 0$. If a value of $k$ makes $a = 0$, the equation is no longer quadratic and that specific value of $k$ must be discarded."
        }
    },
    {
        "id": "04350",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Equations and Inequalities",
        "subtopic": [
            "Discriminant",
            "Line-Curve Intersection",
            "No Real Roots"
        ],
        "img": false,
        "question": "Find the range of values of $k$ for which the line $y = kx - 1$ does not intersect the curve $y = x^2 + 4x + 8$.",
        "steps": [
            "<strong>Step 1: Set up the intersection equation</strong><br>To find the points of intersection, set the linear and quadratic equations equal to each other:<br>\\begin{aligned}\nkx - 1 &= x^2 + 4x + 8\n\\end{aligned}<br>Rearrange all terms to one side to form a standard quadratic equation $ax^2 + bx + c = 0$:<br>\\begin{aligned}\nx^2 + (4 - k)x + 9 &= 0\n\\end{aligned}",
            "<strong>Step 2: Identify the coefficients and set up the discriminant</strong><br>For the quadratic equation $x^2 + (4 - k)x + 9 = 0$, the coefficients are:<br>\\begin{aligned}\na &= 1 \\cr\nb &= 4 - k \\cr\nc &= 9\n\\end{aligned}<br>Since the line and the curve do not intersect, the equation has no real solutions. Therefore, the discriminant must be strictly less than zero ($\\Delta < 0$):<br>\\begin{aligned}\nb^2 - 4ac &< 0 \\cr\n(4 - k)^2 - 4(1)(9) &< 0 \\cr\n(4 - k)^2 - 36 &< 0\n\\end{aligned}",
            "<strong>Step 3: Solve the quadratic inequality</strong><br>Solve the inequality $(4 - k)^2 < 36$ directly:<br>\\begin{aligned}\n-6 < 4 - k &< 6\n\\end{aligned}<br>Subtract $4$ from all parts of the inequality:<br>\\begin{aligned}\n-10 < -k &< 2\n\\end{aligned}<br>Multiply by $-1$ and reverse the inequality directions:<br>\\begin{aligned}\n-2 < k &< 10\n\\end{aligned}"
        ],
        "pi_options": [
            {
                "ans": "$k < -2$ or $k > 10$",
                "feedback": "You found the correct boundary values of $-2$ and $10$, but you selected the outside regions. Since we want the discriminant to be strictly less than zero (no intersection), the solution must lie within the boundaries: $-2 < k < 10$."
            },
            {
                "ans": "$-10 < k < 2$",
                "feedback": "When solving $-10 < -k < 2$, remember that multiplying by $-1$ reverses the inequality directions and changes the signs of the terms, which results in $-2 < k < 10$."
            },
            {
                "ans": "$-2 < k < 6$",
                "feedback": "Check your discriminant constant. It looks like you computed $4ac = 4(1)(9) = 36$ correctly, but made a slip when taking the square root or adding/subtracting values."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Line-Curve Intersections",
            "content": "Questions about a line and curve intersecting are secretly discriminant questions in disguise. Always start by equating the two formulas, collect the terms into a single quadratic, and apply the appropriate discriminant condition based on whether they intersect twice ($( \\Delta > 0 )$), touch once ($( \\Delta = 0 )$), or do not meet ($( \\Delta < 0 )$)."
        }
    }







];