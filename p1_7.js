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
            "Use the fundamental Pythagorean identity $\\cos^2\\theta = 1 - \\sin^2\\theta$ to write the entire equation in terms of $\\sin\\theta$:<br>\\begin{aligned} 5 - 6\\left(1 - \\sin^2\\theta\\right) &= \\sin\\theta \\\\ 5 - 6 + 6\\sin^2\\theta &= \\sin\\theta \\\\ 6\\sin^2\\theta - \\sin\\theta - 1 &= 0 \\end{aligned}",
            "This is a quadratic equation in terms of $\\sin\\theta$. Let $s = \\sin\\theta$ to write the quadratic as:<br>\\begin{aligned} 6s^2 - s - 1 &= 0 \\end{aligned}<br>Factorise this quadratic equation:<br>\\begin{aligned} (3s + 1)(2s - 1) &= 0 \\end{aligned}<br>This yields two solutions: $s = \\dfrac{1}{ 2 }$ and $s = -\\dfrac{1}{ 3 }$.",
            "Case 1: Solve for $\\sin\\theta = \\dfrac{1}{ 2 }$ in the range $0^\\circ \\le \\theta \\le 360^\\circ$. Since sine is positive, the solutions are in the first and second quadrants:<br>\\begin{aligned} \\theta &= 30^\\circ \\\\ \\theta &= 180^\\circ - 30^\\circ = 150^\\circ \\end{aligned}",
            "Case 2: Solve for $\\sin\\theta = -\\dfrac{1}{ 3 }$ in the range $0^\\circ \\le \\theta \\le 360^\\circ$. Since sine is negative, the solutions are in the third and fourth quadrants. First, find the acute reference angle $\\alpha$:<br>\\begin{aligned} \\alpha &= \\arcsin\\left(\\dfrac{1}{ 3 }\\right) \\approx 19.5^\\circ \\end{aligned}",
            "Find the principal angles in the third and fourth quadrants using the reference angle $\\alpha \\approx 19.5^\\circ$:<br>\\begin{aligned} \\theta &= 180^\\circ + 19.5^\\circ = 199.5^\\circ \\\\ \\theta &= 360^\\circ - 19.5^\\circ = 340.5^\\circ \\end{aligned}<br>Combining all solutions yields:<br>$$\\theta = 30^\\circ, \\quad 150^\\circ, \\quad 199.5^\\circ, \\quad 340.5^\\circ$$<br><br>Final Answer: $30^\\circ, 150^\\circ, 199.5^\\circ, 340.5^\\circ$ (approx)"
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
            "Begin by translating the domain for the transformed argument $\\phi = 2\\theta + 30^\\circ$. Since the original domain is $0^\\circ \\le \\theta \\le 180^\\circ$:<br>\\begin{aligned} 0^\\circ \\le \\theta &\\le 180^\\circ \\\\ 0^\\circ \\le 2\\theta &\\le 360^\\circ \\\\ 30^\\circ \\le 2\\theta + 30^\\circ &\\le 390^\\circ \\end{aligned}<br>Thus, find all values of $\\phi$ such that $\\sin\\phi = \\dfrac{\\sqrt{3}}{2}$ in the range $30^\\circ \\le \\phi \\le 390^\\circ$.",
            "Find the principal solutions for $\\sin\\phi = \\dfrac{\\sqrt{3}}{2}$ in the first and second quadrants:<br>\\begin{aligned} \\phi &= 60^\\circ \\\\ \\phi &= 180^\\circ - 60^\\circ = 120^\\circ \\end{aligned}",
            "Check for any secondary solutions within the translated range $30^\\circ \\le \\phi \\le 390^\\circ$ by adding multiples of $360^\\circ$:<br>\\begin{aligned} \\phi &= 60^\\circ + 360^\\circ = 420^\\circ \\quad \\text{(Outside range)} \\\\ \\phi &= 120^\\circ + 360^\\circ = 480^\\circ \\quad \\text{(Outside range)} \\end{aligned}<br>Thus, the only valid values of $\\phi$ are $60^\\circ$ and $120^\\circ$.",
            "Set the expression $2\\theta + 30^\\circ$ equal to these values of $\\phi$ to solve for $\\theta$:<br>\\begin{aligned} 2\\theta + 30^\\circ &= 60^\\circ \\\\ 2\\theta &= 30^\\circ \\\\ \\theta &= 15^\\circ \\end{aligned}",
            "Solve for the second value of $\\phi$:<br>\\begin{aligned} 2\\theta + 30^\\circ &= 120^\\circ \\\\ 2\\theta &= 90^\\circ \\\\ \\theta &= 45^\\circ \\end{aligned}<br>Both values lie within the original domain of $0^\\circ \\le \\theta \\le 180^\\circ$.<br><br>Final Answer: $15^\\circ, 45^\\circ$"
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
            "Bring all terms to one side of the equation. Do not divide both sides by $\\sin\\theta$, as this will eliminate valid solutions. Instead, factorise:<br>\\begin{aligned} 3\\sin\\theta\\cos\\theta - 2\\sin\\theta &= 0 \\\\ \\sin\\theta(3\\cos\\theta - 2) &= 0 \\end{aligned}",
            "This gives two independent trigonometric equations to solve:<ul><li>Case 1: $\\sin\\theta = 0$</li><li>Case 2: $3\\cos\\theta - 2 = 0 \\implies \\cos\\theta = \\dfrac{2}{ 3 }$</li></ul>",
            "Solve Case 1 for $\\sin\\theta = 0$ in the range $0^\\circ \\le \\theta \\le 360^\\circ$:<br>\\begin{aligned} \\theta &= 0^\\circ, \\quad 180^\\circ, \\quad 360^\\circ \\end{aligned}",
            "Solve Case 2 for $\\cos\\theta = \\dfrac{2}{ 3 }$ in the range $0^\\circ \\le \\theta \\le 360^\\circ$. Since cosine is positive, find solutions in the first and fourth quadrants:<br>\\begin{aligned} \\theta &= \\arccos\\left(\\dfrac{2}{ 3 }\\right) \\approx 48.2^\\circ \\\\ \\theta &= 360^\\circ - 48.2^\\circ = 311.8^\\circ \\end{aligned}<br>Combining all five valid solutions yields:<br>$$\\theta = 0^\\circ, \\quad 48.2^\\circ, \\quad 180^\\circ, \\quad 311.8^\\circ, \\quad 360^\\circ$$<br><br>Final Answer: $0^\\circ, 48.2^\\circ, 180^\\circ, 311.8^\\circ, 360^\\circ$ (approx)"
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
            "Use the fundamental identity $\\sin^2\\theta = 1 - \\cos^2\\theta$ to write the entire quadratic equation in terms of $\\cos\\theta$:<br>\\begin{aligned} 1 - 2\\left(1 - \\cos^2\\theta\\right) &= \\cos\\theta \\\\ 1 - 2 + 2\\cos^2\\theta &= \\cos\\theta \\\\ 2\\cos^2\\theta - \\cos\\theta - 1 &= 0 \\end{aligned}",
            "This is a quadratic equation in terms of $\\cos\\theta$. Factorise the quadratic:<br>\\begin{aligned} (2\\cos\\theta + 1)(\\cos\\theta - 1) &= 0 \\end{aligned}<br>This yields two independent solutions: $\\cos\\theta = -\\dfrac{1}{ 2 }$ and $\\cos\\theta = 1$.",
            "Case 1: Solve for $\\cos\\theta = 1$ in the range $0^\\circ \\le \\theta \\le 360^\\circ$. Since cosine is 1 at the boundaries of the interval:<br>\\begin{aligned} \\theta &= 0^\\circ, \\quad 360^\\circ \\end{aligned}",
            "Case 2: Solve for $\\cos\\theta = -\\dfrac{1}{ 2 }$ in the range $0^\\circ \\le \\theta \\le 360^\\circ$. Since cosine is negative, find the solutions in the second and third quadrants using the reference angle $\\alpha = 60^\\circ$:<br>\\begin{aligned} \\theta &= 180^\\circ - 60^\\circ = 120^\\circ \\\\ \\theta &= 180^\\circ + 60^\\circ = 240^\\circ \\end{aligned}<br>Combining all four valid solutions yields:<br>$$\\theta = 0^\\circ, \\quad 120^\\circ, \\quad 240^\\circ, \\quad 360^\\circ$$<br><br>Final Answer: $0^\\circ, 120^\\circ, 240^\\circ, 360^\\circ$"
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
            "Use the tangent identity $\\tan^2\\theta = \\dfrac{\\sin^2\\theta}{ \\cos^2\\theta }$ to rewrite the equation:<br>\\begin{aligned} 2\\left( \\dfrac{\\sin^2\\theta}{ \\cos^2\\theta } \\right)\\cos\\theta &= 3 \\\\ 2\\left( \\dfrac{\\sin^2\\theta}{ \\cos\\theta } \\right) &= 3 \\end{aligned}",
            "Substitute $\\sin^2\\theta = 1 - \\cos^2\\theta$ to write the equation entirely in terms of $\\cos\\theta$:<br>\\begin{aligned} 2\\left( \\dfrac{1 - \\cos^2\\theta}{ \\cos\\theta } \\right) &= 3 \\\\ 2\\left(1 - \\cos^2\\theta\\right) &= 3\\cos\\theta \\\\ 2 - 2\\cos^2\\theta &= 3\\cos\\theta \\\\ 2\\cos^2\\theta + 3\\cos\\theta - 2 &= 0 \\end{aligned}",
            "This is a quadratic equation in terms of $\\cos\\theta$. Factorise the quadratic expression:<br>\\begin{aligned} (2\\cos\\theta - 1)(\\cos\\theta + 2) &= 0 \\end{aligned}<br>This yields two mathematical solutions: $\\cos\\theta = \\dfrac{1}{ 2 }$ and $\\cos\\theta = -2$.",
            "Evaluate Case 2: $\\cos\\theta = -2$. Since the range of the cosine function is strictly bounded between $-1$ and $1$ ($-1 \\le \\cos\\theta \\le 1$), the equation $\\cos\\theta = -2$ has no real solutions and is discarded.",
            "Evaluate Case 1: Solve $\\cos\\theta = \\dfrac{1}{ 2 }$ in the range $0^\\circ \\le \\theta \\le 360^\\circ$. Since cosine is positive, the solutions are in the first and fourth quadrants:<br>\\begin{aligned} \\theta &= \\arccos\\left(\\dfrac{1}{ 2 }\\right) = 60^\\circ \\\\ \\theta &= 360^\\circ - 60^\\circ = 300^\\circ \\end{aligned}<br>Combining these gives the only two valid solutions:<br>$$\\theta = 60^\\circ, \\quad 300^\\circ$$<br><br>Final Answer: $60^\\circ, 300^\\circ$"
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
            "Differentiate each term with respect to $x$ using the standard power rule $\\dfrac{\\text{d}}{\\text{d}x}(x^n) = nx^{n-1}$:<br>\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{4}{ 3 }(-2)x^{-3} + 10\\left(\\dfrac{1}{ 2 }\\right)x^{-1/2} \\\\ &= -\\dfrac{8}{ 3 }x^{-3} + 5x^{-1/2} \\\\ &= -\\dfrac{8}{ 3x^3 } + \\dfrac{5}{ \\sqrt{x} } \\end{aligned}",
            "To evaluate the derivative at $x = 8$, substitute $x = 8$ into the derivative expression:<br>\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x}\\Big|_{x=8} &= -\\dfrac{8}{ 3(8)^3 } + \\dfrac{5}{ \\sqrt{8} } \\\\ &= -\\dfrac{8}{ 3(512) } + \\dfrac{5}{ 2\\sqrt{2} } \\\\ &= -\\dfrac{1}{ 192 } + \\dfrac{5}{ 2\\sqrt{2} } \\end{aligned}",
            "Rationalise the denominator of the second term and combine:<br>\\begin{aligned} \\dfrac{5}{ 2\\sqrt{2} } &= \\dfrac{5\\sqrt{2}}{ 4 } \\\\ \\dfrac{\\text{d}y}{\\text{d}x}\\Big|_{x=8} &= \\dfrac{5\\sqrt{2}}{ 4 } - \\dfrac{1}{ 192 } \\end{aligned}",
            "For part 2, integrate the expression term by term using the integration power rule $\\int x^n \\,\\text{d}x = \\dfrac{x^{n+1}}{ n+1 }$:<br>\\begin{aligned} \\int \\left( 3x^{5/2} + 15x^{-4} + 8 \\right) \\,\\text{d}x &= \\dfrac{3x^{7/2}}{ 7/2 } + \\dfrac{15x^{-3}}{ -3 } + 8x + C \\\\ &= \\dfrac{6}{ 7 }x^{7/2} - 5x^{-3} + 8x + C \\end{aligned}<br><br>Final Answer: $\\dfrac{5\\sqrt{2}}{ 4 } - \\dfrac{1}{ 192 }$ and $\\dfrac{6}{ 7 }x^{7/2} - 5x^{-3} + 8x + C$"
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
            "Substitute the function $f(x) = 5x^2 - 3x$ into the expression for $f(x + h)$ and expand:<br>\\begin{aligned} f(x + h) &= 5(x + h)^2 - 3(x + h) \\\\ &= 5\\left(x^2 + 2xh + h^2\\right) - 3x - 3h \\\\ &= 5x^2 + 10xh + 5h^2 - 3x - 3h \\end{aligned}",
            "Substitute $f(x + h)$ and $f(x)$ into the numerator of our limit definition and simplify:<br>\\begin{aligned} f(x + h) - f(x) &= \\left(5x^2 + 10xh + 5h^2 - 3x - 3h\\right) - \\left(5x^2 - 3x\\right) \\\\ &= 5x^2 - 5x^2 + 10xh + 5h^2 - 3x + 3x - 3h \\\\ &= 10xh + 5h^2 - 3h \\end{aligned}",
            "Divide each term in the simplified numerator expression by $h$:<br>\\begin{aligned} \\dfrac{f(x + h) - f(x)}{ h } &= \\dfrac{10xh + 5h^2 - 3h}{ h } \\\\ &= \\dfrac{h(10x + 5h - 3)}{ h } \\\\ &= 10x + 5h - 3 \\end{aligned}",
            "Evaluate the limit of this expression as $h \\to 0$ to find the derivative:<br>\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= \\lim_{h \\to 0} \\left(10x + 5h - 3\\right) \\\\ &= 10x + 5(0) - 3 \\\\ &= 10x - 3 \\end{aligned}<br><br>Final Answer: $10x - 3$"
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
            "First, find the $y$-coordinate of the point of tangency by substituting $x = 2$ back into the original curve's equation:<br>\\begin{aligned} y(2) &= 3(2)^2 - \\dfrac{4}{ 2 } + 2 \\\\ &= 3(4) - 2 + 2 \\\\ &= 12 \\end{aligned}<br>Thus, the point of tangency is $P(2, 12)$.",
            "Rewrite the equation of the curve using negative indices so that it is ready to be differentiated:<br>\\begin{aligned} y &= 3x^2 - 4x^{-1} + 2 \\end{aligned}",
            "Differentiate the curve's equation with respect to $x$ using the standard power rule:<br>\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= 6x - 4(-1)x^{-2} \\\\ &= 6x + 4x^{-2} \\\\ &= 6x + \\dfrac{4}{ x^2 } \\end{aligned}",
            "Find the gradient $m$ of the tangent line by substituting $x = 2$ into the derivative expression:<br>\\begin{aligned} m &= 6(2) + \\dfrac{4}{ (2)^2 } \\\\ &= 12 + \\dfrac{4}{ 4 } \\\\ &= 12 + 1 = 13 \\end{aligned}",
            "Use the point-gradient formula $y - y_1 = m(x - x_1)$ with the point $P(2, 12)$ and gradient $m = 13$ to find the equation of the tangent:<br>\\begin{aligned} y - 12 &= 13(x - 2) \\\\ y - 12 &= 13x - 26 \\\\ y &= 13x - 14 \\end{aligned}<br><br>Final Answer: $y = 13x - 14$"
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
            "Integrate the polynomial expression using the integration power rule:<br>\\begin{aligned} \\int \\left( 3x^2 + 2x \\right) \\,\\text{d}x &= \\left[ \\dfrac{3x^3}{ 3 } + \\dfrac{2x^2}{ 2 } \\right]_{1}^{3} \\\\ &= \\left[ x^3 + x^2 \\right]_{1}^{3} \\end{aligned}",
            "Evaluate the definite integral by substituting the upper limit $x = 3$ into the integrated expression:<br>\\begin{aligned} \\text{Upper Limit} &= (3)^3 + (3)^2 \\\\ &= 27 + 9 = 36 \\end{aligned}",
            "Substitute the lower limit $x = 1$ into the integrated expression:<br>\\begin{aligned} \\text{Lower Limit} &= (1)^3 + (1)^2 \\\\ &= 1 + 1 = 2 \\end{aligned}",
            "Subtract the lower limit evaluation from the upper limit evaluation to find the exact area of the region:<br>\\begin{aligned} \\text{Area} &= \\text{Upper Limit} - \\text{Lower Limit} \\\\ &= 36 - 2 = 34 \\end{aligned}<br><br>Final Answer: $34$"
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
            "Set the first derivative to $0$ and solve the quadratic equation to find the stationary $x$-coordinates:<br>\\begin{aligned} 6x^2 - 6x - 12 &= 0 \\\\ x^2 - x - 2 &= 0 \\\\ (x - 2)(x + 1) &= 0 \\end{aligned}<br>This yields two stationary values: $x = 2$ and $x = -1$.",
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
    }


];