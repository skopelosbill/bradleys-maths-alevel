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
            "For part 1, the transformation $y = f(x) - 3$ represents a vertical translation downwards by $3$ units.<br>This transformation shifts every point on the original curve downwards, which also shifts the horizontal asymptote:<br>\\begin{aligned} \\text{Vertical asymptote} &: x = 0 \\quad \\text{(Unchanged)} \\\\ \\text{Horizontal asymptote} &: y = -3 \\quad \\text{(Shifted from } y = 0 \\text{)} \\end{aligned}",
            "Using these new asymptotes, sketch the shifted reciprocal curve:<br><br><img src='images/p1/004311_ans1.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
            "For part 2, the transformation $y = f(x + 2)$ represents a horizontal translation to the left by $2$ units.<br>This transformation shifts every point on the original curve to the left, which also shifts the vertical asymptote:<br>\\begin{aligned} \\text{Vertical asymptote} &: x = -2 \\quad \\text{(Shifted from } x = 0 \\text{)} \\\\ \\text{Horizontal asymptote} &: y = 0 \\quad \\text{(Unchanged)} \\end{aligned}",
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
            "For part 1, the transformation $y = -f(x)$ represents a vertical reflection of the curve in the $x$-axis.<br>This operation negates all $y$-coordinates of the stationary points while keeping their $x$-coordinates unchanged. It also reverses their mathematical nature:<br>\\begin{aligned} P(2, 6) &\\implies P'( 2, -6 ) \\quad \\text{(New Local Minimum)} \\\\ Q(4, -2) &\\implies Q'( 4, 2 ) \\quad \\text{(New Local Maximum)} \\end{aligned}",
            "Using these new turning points, sketch the vertically reflected cubic curve:<br><br><img src='images/p1/004312_ans1.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
            "For part 2, the transformation $y = f(2x)$ represents a horizontal stretch by a factor of $\\dfrac{1}{ 2 }$ (horizontal compression).<br>This operation halves the $x$-coordinates of all points on the curve while keeping their $y$-coordinates and mathematical nature completely unchanged:<br>\\begin{aligned} P(2, 6) &\\implies P''( 1, 6 ) \\quad \\text{(Local Maximum)} \\\\ Q(4, -2) &\\implies Q''( 2, -2 ) \\quad \\text{(Local Minimum)} \\end{aligned}",
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
            "To find the new $y$-intercept, substitute $x = 0$ into the translated equation:<br>\\begin{aligned} y(0) &= f(0) - 2 \\\\ &= 3^0 - 2 = 1 - 2 = -1 \\end{aligned}<br>Thus, the new $y$-intercept is $(0, -1)$. Sketch the vertically shifted exponential curve:<br><br><img src='images/p1/004314_ans1.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
            "For part 2, the transformation $y = f(-x)$ represents a horizontal reflection of the curve in the $y$-axis.<br>This reflection does not affect the horizontal asymptote nor the $y$-intercept, because points on the $y$-axis ($x = 0$) are invariant under horizontal reflection:<br>\\begin{aligned} \\text{Asymptote} &: y = 0 \\\\ \\text{y-intercept} &: (0, 1) \\end{aligned}",
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
            "Apply these operations to the coordinates of the original point $P(4, -6)$:<br>\\begin{aligned} x' &= 4 - 3 = 1 \\\\ y' &= -6 - 5 = -11 \\end{aligned}<br>Thus, the coordinates of the corresponding point are $(1, -11)$.",
            "For part 2, analyze the vertical transformations in $y = -2f(x)$:<br><ul><li>The coefficient $-2$ represents a vertical stretch by a scale factor of $2$ combined with a vertical reflection in the $x$-axis.</li><li>Because there are no horizontal terms inside the bracket, the $x$-coordinate remains completely unchanged.</li></ul>",
            "Apply these vertical operations to the $y$-coordinate of the original point $P(4, -6)$:<br>\\begin{aligned} x'' &= 4 \\\\ y'' &= -2 \\times (-6) = 12 \\end{aligned}<br>Thus, the coordinates of the corresponding point are $(4, 12)$.<br><br>Final Answer: $(1, -11)$ for part 1, and $(4, 12)$ for part 2."
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
            "To find the coordinates of the intersection points, set the equation of the curve equal to the equation of the line:<br>\\begin{aligned} 5 + 4x - x^2 &= x + 1 \\\\ -x^2 + 3x + 4 &= 0 \\end{aligned}<br>Multiply the entire quadratic equation by $-1$ to make factoring easier:<br>\\begin{aligned} x^2 - 3x - 4 &= 0 \\\\ (x - 4)(x + 1) &= 0 \\end{aligned}",
            "This yields two $x$-coordinates: $x = 4$ and $x = -1$. Substitute these back into the linear equation $y = x + 1$ to find the corresponding $y$-coordinates:<ul><li>For $x = 4$: $y = 4 + 1 = 5 \\implies B(4, 5)$</li><li>For $x = -1$: $y = -1 + 1 = 0 \\implies A(-1, 0)$</li></ul>Thus, the coordinates of the intersection points are $A(-1, 0)$ and $B(4, 5)$.",
            "To find the enclosed area, integrate the difference between the upper curve $C$ and the lower line $L$ over the interval $[-1, 4]$:<br>\\begin{aligned} \\text{Area} &= \\int_{ -1 }^{ 4 } \\left[ (5 + 4x - x^2) - (x + 1) \\right] \\,\\text{d}x \\\\ &= \\int_{ -1 }^{ 4 } \\left( 4 + 3x - x^2 \\right) \\,\\text{d}x \\end{aligned}",
            "Integrate the polynomial expression term by term:<br>\\begin{aligned} \\text{Area} &= \\left[ 4x + \\dfrac{3}{ 2 }x^2 - \\dfrac{1}{ 3 }x^3 \\right]_{ -1 }^{ 4 } \\end{aligned}",
            "Evaluate the integrated expression at the upper limit $x = 4$:<br>\\begin{aligned} \\text{Upper Limit} &= 4(4) + \\dfrac{3}{ 2 }(16) - \\dfrac{1}{ 3 }(64) \\\\ &= 16 + 24 - \\dfrac{64}{ 3 } \\\\ &= 40 - \\dfrac{64}{ 3 } = \\dfrac{120 - 64}{ 3 } = \\dfrac{56}{ 3 } \\end{aligned}",
            "Evaluate the integrated expression at the lower limit $x = -1$:<br>\\begin{aligned} \\text{Lower Limit} &= 4(-1) + \\dfrac{3}{ 2 }(-1)^2 - \\dfrac{1}{ 3 }(-1)^3 \\\\ &= -4 + \\dfrac{3}{ 2 } + \\dfrac{1}{ 3 } \\\\ &= -4 + \\dfrac{9}{ 6 } + \\dfrac{2}{ 6 } \\\\ &= -4 + \\dfrac{11}{ 6 } = -\\dfrac{13}{ 6 } \\end{aligned}",
            "Subtract the lower limit evaluation from the upper limit evaluation to find the exact area of the enclosed region:<br>\\begin{aligned} \\text{Area} &= \\dfrac{56}{ 3 } - \\left( -\\dfrac{13}{ 6 } \\right) \\\\ &= \\dfrac{112}{ 6 } + \\dfrac{13}{ 6 } = \\dfrac{125}{ 6 } \\end{aligned}<br><br>Final Answer: $A(-1, 0)$ and $B(4, 5)$; exact area is $\\dfrac{125}{ 6 }$"
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
            "To find the points where the curve intersects the $x$-axis, set $y = 0$ and factorise the cubic equation:<br>\\begin{aligned} x^3 - 3x^2 &= 0 \\\\ x^2(x - 3) &= 0 \\end{aligned}<br>This yields two solutions: $x = 0$ and $x = 3$.<br>So, the two $x$-intercept points are $(0, 0)$ and $(3, 0)$.",
            "On the interval $[0, 3]$, the curve lies entirely below the $x$-axis ($y \\le 0$). To find the exact geometric area, take the negative of the definite integral over this interval:<br>\\begin{aligned} \\text{Area} &= -\\int_{ 0 }^{ 3 } \\left( x^3 - 3x^2 \\right) \\,\\text{d}x \\end{aligned}",
            "Integrate the expression using the power rule:<br>\\begin{aligned} \\text{Area} &= -\\left[ \\dfrac{1}{ 4 }x^4 - x^3 \\right]_{ 0 }^{ 3 } \\end{aligned}",
            "Evaluate the integrated expression at the upper limit $x = 3$:<br>\\begin{aligned} \\text{Upper Limit} &= \\dfrac{1}{ 4 }(3)^4 - (3)^3 \\\\ &= \\dfrac{81}{ 4 } - 27 \\\\ &= \\dfrac{81}{ 4 } - \\dfrac{108}{ 4 } = -\\dfrac{27}{ 4 } \\end{aligned}",
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
            "To find the intersection coordinates, set the equations of the two curves equal to each other:<br>\\begin{aligned} 8 - x^2 &= x^2 \\\\ 2x^2 &= 8 \\\\ x^2 &= 4 \\implies x = \\pm 2 \\end{aligned}",
            "Substitute these $x$-values back into $y = x^2$ to find the corresponding $y$-coordinates:<ul><li>For $x = 2$: $y = (2)^2 = 4 \\implies Q(2, 4)$</li><li>For $x = -2$: $y = (-2)^2 = 4 \\implies P(-2, 4)$</li></ul>Thus, the coordinates of the intersection points are $P(-2, 4)$ and $Q(2, 4)$.",
            "On the interval $[-2, 2]$, the curve $C_1$ lies above the curve $C_2$. Integrate the difference between the upper curve and the lower curve:<br>\\begin{aligned} \\text{Area} &= \\int_{ -2 }^{ 2 } \\left[ (8 - x^2) - x^2 \\right] \\,\\text{d}x \\\\ &= \\int_{ -2 }^{ 2 } \\left( 8 - 2x^2 \\right) \\,\\text{d}x \\end{aligned}",
            "Integrate the expression using the power rule:<br>\\begin{aligned} \\text{Area} &= \\left[ 8x - \\dfrac{2}{ 3 }x^3 \\right]_{ -2 }^{ 2 } \\end{aligned}",
            "Evaluate the integrated expression at the upper limit $x = 2$:<br>\\begin{aligned} \\text{Upper Limit} &= 8(2) - \\dfrac{2}{ 3 }(2)^3 \\\\ &= 16 - \\dfrac{16}{ 3 } = \\dfrac{48 - 16}{ 3 } = \\dfrac{32}{ 3 } \\end{aligned}",
            "Evaluate the integrated expression at the lower limit $x = -2$:<br>\\begin{aligned} \\text{Lower Limit} &= 8(-2) - \\dfrac{2}{ 3 }(-2)^3 \\\\ &= -16 + \\dfrac{16}{ 3 } = -\\dfrac{32}{ 3 } \\end{aligned}",
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
            "On the interval $[1, 9]$, the curve $C$ lies above the line $L$. Set up the definite integral for the enclosed area:<br>\\begin{aligned} \\text{Area} &= \\int_{ 1 }^{ 9 } \\left( 4\\sqrt{x} - (x + 3) \\right) \\,\\text{d}x \\\\ &= \\int_{ 1 }^{ 9 } \\left( 4x^{1/2} - x - 3 \\right) \\,\\text{d}x \\end{aligned}",
            "Integrate the expression term by term using the integration power rule:<br>\\begin{aligned} \\text{Area} &= \\left[ 4\\left(\\dfrac{2}{ 3 }x^{3/2}\\right) - \\dfrac{1}{ 2 }x^2 - 3x \\right]_{ 1 }^{ 9 } \\\\ &= \\left[ \\dfrac{8}{ 3 }x^{3/2} - \\dfrac{1}{ 2 }x^2 - 3x \\right]_{ 1 }^{ 9 } \\end{aligned}",
            "Evaluate the integrated expression at the upper limit $x = 9$, noting that $9^{3/2} = (\\sqrt{9})^3 = 27$:<br>\\begin{aligned} \\text{Upper Limit} &= \\dfrac{8}{ 3 }(27) - \\dfrac{1}{ 2 }(81) - 3(9) \\\\ &= 72 - 40.5 - 27 \\\\ &= 72 - 67.5 = 4.5 = \\dfrac{9}{ 2 } \\end{aligned}",
            "Evaluate the integrated expression at the lower limit $x = 1$:<br>\\begin{aligned} \\text{Lower Limit} &= \\dfrac{8}{ 3 }(1)^{3/2} - \\dfrac{1}{ 2 }(1)^2 - 3(1) \\\\ &= \\dfrac{8}{ 3 } - \\dfrac{1}{ 2 } - 3 \\\\ &= \\dfrac{8}{ 3 } - \\dfrac{7}{ 2 } \\\\ &= \\dfrac{16}{ 6 } - \\dfrac{21}{ 6 } = -\\dfrac{5}{ 6 } \\end{aligned}",
            "Subtract the lower limit evaluation from the upper limit evaluation to find the exact area of the enclosed region:<br>\\begin{aligned} \\text{Area} &= \\dfrac{9}{ 2 } - \\left( -\\dfrac{5}{ 6 } \\right) \\\\ &= \\dfrac{27}{ 6 } + \\dfrac{5}{ 6 } = \\dfrac{32}{ 6 } = \\dfrac{16}{ 3 } \\end{aligned}<br><br>Final Answer: Intersections shown; exact area is $\\dfrac{16}{ 3 }$"
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
            "To find the coordinates of point $A$, set the equation of the curve equal to $0$ (since $y = 0$ on the $x$-axis) and solve for $x$:<br>\\begin{aligned} 3\\sqrt{x} - 2 &= 0 \\\\ 3\\sqrt{x} &= 2 \\\\ \\sqrt{x} &= \\dfrac{2}{ 3 } \\\\ x &= \\left(\\dfrac{2}{ 3 }\\right)^2 = \\dfrac{4}{ 9 } \\end{aligned}<br>Thus, the coordinates of point $A$ are $A\\left(\\dfrac{4}{ 9 }, 0\\right)$.",
            "On the interval $\\left[\\dfrac{4}{ 9 }, 4\\right]$, the curve lies entirely above the $x$-axis. Set up the definite integral for the bounded area:<br>\\begin{aligned} \\text{Area} &= \\int_{ 4/9 }^{ 4 } \\left( 3x^{1/2} - 2 \\right) \\,\\text{d}x \\end{aligned}",
            "Integrate the expression using the power rule:<br>\\begin{aligned} \\text{Area} &= \\left[ 3\\left(\\dfrac{2}{ 3 }x^{3/2}\\right) - 2x \\right]_{ 4/9 }^{ 4 } \\\\ &= \\left[ 2x^{3/2} - 2x \\right]_{ 4/9 }^{ 4 } \\end{aligned}",
            "Evaluate the integrated expression at the upper limit $x = 4$, noting that $4^{3/2} = (\\sqrt{4})^3 = 8$:<br>\\begin{aligned} \\text{Upper Limit} &= 2(4)^{3/2} - 2(4) \\\\ &= 2(8) - 8 \\\\ &= 16 - 8 = 8 \\end{aligned}",
            "Evaluate the integrated expression at the lower limit $x = \\dfrac{4}{ 9 }$, noting that $\\left(\\dfrac{4}{ 9 }\\right)^{3/2} = \\left(\\sqrt{\\dfrac{4}{ 9 }}\\right)^3 = \\dfrac{8}{ 27 }$:<br>\\begin{aligned} \\text{Lower Limit} &= 2\\left(\\dfrac{4}{ 9 }\\right)^{3/2} - 2\\left(\\dfrac{4}{ 9 }\\right) \\\\ &= 2\\left(\\dfrac{8}{ 27 }\\right) - \\dfrac{8}{ 9 } \\\\ &= \\dfrac{16}{ 27 } - \\dfrac{24}{ 27 } = -\\dfrac{8}{ 27 } \\end{aligned}",
            "Subtract the lower limit evaluation from the upper limit evaluation to find the exact area of the bounded region:<br>\\begin{aligned} \\text{Area} &= 8 - \\left( -\\dfrac{8}{ 27 } \\right) \\\\ &= \\dfrac{216}{ 27 } + \\dfrac{8}{ 27 } = \\dfrac{224}{ 27 } \\end{aligned}<br><br>Final Answer: $A\\left(\\dfrac{4}{ 9 }, 0\\right)$; exact area is $\\dfrac{224}{ 27 }$"
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
            "Simplify the fraction by dividing both the numerator and denominator by $\\cos^2\\theta$, then apply the identity $\\dfrac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$:<br>\\begin{aligned} \\text{LHS} &= \\dfrac{\\sin\\theta}{\\cos\\theta} \\\\ &= \\tan\\theta \\\\ &= \\text{RHS} \\end{aligned}<br>Since the left-hand side simplifies to the right-hand side, the identity is proven."
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
            "Apply the fundamental Pythagorean identity $\\cos^2\\theta + \\sin^2\\theta = 1$ to simplify the second bracketed term:<br>\\begin{aligned} \\text{LHS} &= \\left(\\cos^2\\theta - \\sin^2\\theta\\right)(1) \\\\ &= \\cos^2\\theta - \\sin^2\\theta \\end{aligned}",
            "To match the target right-hand side, write the expression entirely in terms of $\\sin^2\\theta$. Substitute $\\cos^2\\theta = 1 - \\sin^2\\theta$:<br>\\begin{aligned} \\text{LHS} &= \\left(1 - \\sin^2\\theta\\right) - \\sin^2\\theta \\\\ &= 1 - 2\\sin^2\\theta \\\\ &= \\text{RHS} \\end{aligned}<br>Since the left-hand side simplifies to the right-hand side, the identity is proven."
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
            "Apply the fundamental Pythagorean identity $1 - \\sin^2\\theta = \\cos^2\\theta$ to substitute for the denominator:<br>\\begin{aligned} \\text{LHS} &= \\dfrac{2}{\\cos^2\\theta} \\\\ &= \\text{RHS} \\end{aligned}<br>Since the left-hand side simplifies to the right-hand side, the identity is proven."
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
            "Substitute $\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}$ into both terms of the expression:<br>\\begin{aligned} \\text{First Term} &= \\dfrac{\\sin\\theta/\\cos\\theta}{\\sin\\theta} = \\dfrac{1}{\\cos\\theta} \\\\ \\text{Second Term} &= \\sin\\theta\\left(\\dfrac{\\sin\\theta}{\\cos\\theta}\\right) = \\dfrac{\\sin^2\\theta}{\\cos\\theta} \\end{aligned}",
            "Combine the two terms over their common denominator $\\cos\\theta$:<br>\\begin{aligned} \\text{LHS} &= \\dfrac{1}{\\cos\\theta} - \\dfrac{\\sin^2\\theta}{\\cos\\theta} \\\\ &= \\dfrac{1 - \\sin^2\\theta}{\\cos\\theta} \\end{aligned}",
            "Apply the fundamental Pythagorean identity $1 - \\sin^2\\theta = \\cos^2\\theta$ to substitute for the numerator:<br>\\begin{aligned} \\text{LHS} &= \\dfrac{\\cos^2\\theta}{\\cos\\theta} \\\\ &= \\cos\\theta \\\\ &= \\text{RHS} \\end{aligned}<br>Since the left-hand side simplifies to the right-hand side, the identity is proven."
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
            "Evaluate the left-hand side (LHS) of the statement using these chosen angles:<br>\\begin{aligned} \\text{LHS} &= \\cos\\left(60^\\circ + 60^\\circ\\right) \\\\ &= \\cos\\left(120^\\circ\\right) \\\\ &= -\\dfrac{1}{ 2 } \\end{aligned}",
            "Evaluate the right-hand side (RHS) of the statement using the same angles:<br>\\begin{aligned} \\text{RHS} &= \\cos\\left(60^\\circ\\right) + \\cos\\left(60^\\circ\\right) \\\\ &= \\dfrac{1}{ 2 } + \\dfrac{1}{ 2 } \\\\ &= 1 \\end{aligned}",
            "Compare the results of both sides. Since the LHS is not equal to the RHS:<br>\\begin{aligned} \\text{LHS} &\\neq \\text{RHS} \\\\ -\\dfrac{1}{ 2 } &\\neq 1 \\end{aligned}<br>Because a case has been shown where the equation does not hold, the statement has been disproved by counterexample."
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
    }





];