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
    }

];