window.ALEVEL_QUESTIONS = [
{
        "id": "004601",
        "board": "OCR",
        "branch": "Pure",
        "level": "A",
        "major_area": "Algebra and Functions",
        "topic": "Trigonometric Functions",
        "subtopic": [
                "Trigonometry"
        ],
        "img": false,
        "question": "It is given that the angle $\\theta$ satisfies the equation:<br><br>\\begin{aligned} &\\sin\\left(2\\theta + \\dfrac{1}{4}\\pi\\right) \\cr &\\quad = 2\\cos\\left(2\\theta + \\dfrac{1}{4}\\pi\\right) \\end{aligned}<br><br><strong>(i)</strong> Show that $\\tan 2\\theta = \\dfrac{1}{3}$.<br><br><strong>(ii)</strong> Hence find, in surd form, the exact value of $\\tan\\theta$, given that $\\theta$ is an obtuse angle.",
        "steps": [
                "<strong>(i)</strong> Start with the given equation:\\begin{aligned} &\\sin\\left(2\\theta + \\dfrac{1}{4}\\pi\\right) \\cr &\\quad = 2\\cos\\left(2\\theta + \\dfrac{1}{4}\\pi\\right) \\end{aligned}",
                "Divide both sides by $\\cos\\left(2\\theta + \\dfrac{1}{4}\\pi\\right)$:\\begin{aligned} &\\tan\\left(2\\theta + \\dfrac{1}{4}\\pi\\right) = 2 \\end{aligned}",
                "Use the compound angle formula with $\\tan\\left(\\dfrac{\\pi}{4}\\right) = 1$:\\begin{aligned} &\\dfrac{\\tan 2\\theta + 1}{1 - \\tan 2\\theta} = 2 \\end{aligned}",
                "Solve for $\\tan 2\\theta$:\\begin{aligned} &\\tan 2\\theta + 1 \\cr &\\quad = 2(1 - \\tan 2\\theta) \\cr &\\tan 2\\theta + 1 \\cr &\\quad = 2 - 2\\tan 2\\theta \\cr &3\\tan 2\\theta = 1 \\cr &\\tan 2\\theta = \\dfrac{1}{3} \\end{aligned}",
                "<strong>(ii)</strong> Apply the double-angle formula $\\tan 2\\theta = \\dfrac{2\\tan\\theta}{1 - \\tan^2\\theta}$:\\begin{aligned} &\\dfrac{2\\tan\\theta}{1 - \\tan^2\\theta} = \\dfrac{1}{3} \\end{aligned}",
                "Rearrange into a quadratic equation:\\begin{aligned} &6\\tan\\theta = 1 - \\tan^2\\theta \\cr &\\tan^2\\theta + 6\\tan\\theta - 1 = 0 \\end{aligned}",
                "Apply the quadratic formula:\\begin{aligned} &\\tan\\theta \\cr &\\quad = \\dfrac{-6 \\pm \\sqrt{6^2 - 4(1)(-1)}}{2} \\cr &\\quad = \\dfrac{-6 \\pm \\sqrt{40}}{2} \\cr &\\quad = \\dfrac{-6 \\pm 2\\sqrt{10}}{2} \\cr &\\quad = -3 \\pm \\sqrt{10} \\end{aligned}",
                "Since $\\theta$ is an obtuse angle ($90^\\circ < \\theta < 180^\\circ$), $\\tan\\theta < 0$ in the second quadrant:<br><br>• $-3 + \\sqrt{10} > 0$ (reject)<br><br>• $-3 - \\sqrt{10} < 0$ (accept)",
                "Final Answer: <strong>(i)</strong> $\\tan 2\\theta = \\dfrac{1}{3}$<br><strong>(ii)</strong> $\\tan\\theta = -3 - \\sqrt{10}$"
        ],
        "pi_options": [
                {
                        "ans": "<strong>(i)</strong> $\\tan 2\\theta = \\dfrac{1}{3}$<br><strong>(ii)</strong> $\\tan\\theta = -3 + \\sqrt{10}$",
                        "feedback": "You identified the correct quadratic roots, but check your domain boundary. Since $\\theta$ is an obtuse angle ($90^\\circ < \\theta < 180^\\circ$), $\\tan\\theta$ must be strictly negative. Therefore, you must reject the positive root $-3 + \\sqrt{10}$."
                },
                {
                        "ans": "<strong>(i)</strong> $\\tan 2\\theta = 3$<br><strong>(ii)</strong> $\\tan\\theta = -3 - \\sqrt{10}$",
                        "feedback": "Check your algebraic expansion of the compound angle equation in part <strong>(i)</strong>. Rearranging $\\dfrac{\\tan 2\\theta + 1}{1 - \\tan 2\\theta} = 2$ leads to $3\\tan 2\\theta = 1$, which gives $\\tan 2\\theta = \\dfrac{1}{3}$, not $3$."
                },
                {
                        "ans": "<strong>(i)</strong> $\\tan 2\\theta = \\dfrac{1}{3}$<br><strong>(ii)</strong> $\\tan\\theta = -3 - \\sqrt{8}$",
                        "feedback": "Check your quadratic formula calculation in part <strong>(ii)</strong>. The discriminant is $b^2 - 4ac = 6^2 - 4(1)(-1) = 40$. Taking the square root of $40$ yields $2\\sqrt{10}$, which simplifies to $\\sqrt{10}$ when divided by $2$, not $\\sqrt{8}$."
                }
        ],
        "bradley_insight": {
                "type": "caution",
                "title": "The Head Teacher's Eye: Quadrant Signs",
                "content": "A very common source of lost marks in Year 2 trigonometric equations is ignoring domain boundaries. When a quadratic yields two potential roots (like $-3 \\pm \\sqrt{10}$), always refer back to the specified range of the angle. Since $\\theta$ is obtuse, it lies in the second quadrant, meaning $\\tan\\theta$ must be negative."
        }
},
{
        "id": "004602",
        "board": "OCR",
        "branch": "Pure",
        "level": "A",
        "major_area": "Algebra and Functions",
        "topic": "Trigonometric Functions",
        "subtopic": [
                "Trigonometry"
        ],
        "img": false,
        "question": "It is given that the angle $\\theta$ satisfies the equation:<br><br>\\begin{aligned} &\\sin(\\theta + 60^\\circ) \\cr &\\quad = 3\\cos(\\theta + 30^\\circ) \\end{aligned}<br><br><strong>(i)</strong> Show that $\\tan\\theta = \\dfrac{\\sqrt{3}}{2}$.<br><br><strong>(ii)</strong> Hence find the exact value of $\\sec^2\\theta$.",
        "steps": [
                "<strong>(i)</strong> Apply the compound angle formula to the left-hand side (LHS):\\begin{aligned} &\\sin(\\theta + 60^\\circ) \\cr &\\quad = \\sin\\theta \\cos 60^\\circ \\cr &\\qquad + \\cos\\theta \\sin 60^\\circ \\cr &\\quad = \\dfrac{1}{2}\\sin\\theta + \\dfrac{\\sqrt{3}}{2}\\cos\\theta \\end{aligned}",
                "Expand the right-hand side (RHS):\\begin{aligned} &3\\cos(\\theta + 30^\\circ) \\cr &\\quad = 3(\\cos\\theta \\cos 30^\\circ \\cr &\\qquad - \\sin\\theta \\sin 30^\\circ) \\cr &\\quad = 3\\left(\\dfrac{\\sqrt{3}}{2}\\cos\\theta - \\dfrac{1}{2}\\sin\\theta\\right) \\cr &\\quad = \\dfrac{3\\sqrt{3}}{2}\\cos\\theta - \\dfrac{3}{2}\\sin\\theta \\end{aligned}",
                "Equate the expanded LHS and RHS:\\begin{aligned} &\\dfrac{1}{2}\\sin\\theta + \\dfrac{\\sqrt{3}}{2}\\cos\\theta \\cr &\\quad = \\dfrac{3\\sqrt{3}}{2}\\cos\\theta - \\dfrac{3}{2}\\sin\\theta \\end{aligned}",
                "Multiply by $2$ and collect like terms:\\begin{aligned} &\\sin\\theta + \\sqrt{3}\\cos\\theta \\cr &\\quad = 3\\sqrt{3}\\cos\\theta - 3\\sin\\theta \\cr &4\\sin\\theta = 2\\sqrt{3}\\cos\\theta \\cr &2\\sin\\theta = \\sqrt{3}\\cos\\theta \\end{aligned}",
                "Divide both sides by $2\\cos\\theta$:\\begin{aligned} &\\dfrac{\\sin\\theta}{\\cos\\theta} = \\dfrac{\\sqrt{3}}{2} \\cr &\\tan\\theta = \\dfrac{\\sqrt{3}}{2} \\end{aligned}",
                "<strong>(ii)</strong> Use the Pythagorean identity $\\sec^2\\theta = 1 + \\tan^2\\theta$:\\begin{aligned} &\\sec^2\\theta \\cr &\\quad = 1 + \\left(\\dfrac{\\sqrt{3}}{2}\\right)^2 \\cr &\\quad = 1 + \\dfrac{3}{4} \\cr &\\quad = \\dfrac{7}{4} \\end{aligned}",
                "Final Answer: <strong>(i)</strong> $\\tan\\theta = \\dfrac{\\sqrt{3}}{2}$<br><strong>(ii)</strong> $\\sec^2\\theta = \\dfrac{7}{4}$"
        ],
        "pi_options": [
                {
                        "ans": "<strong>(i)</strong> $\\tan\\theta = \\dfrac{\\sqrt{3}}{2}$<br><strong>(ii)</strong> $\\sec^2\\theta = \\dfrac{5}{4}$",
                        "feedback": "Check your identity application in part <strong>(ii)</strong>. Squaring $\\tan\\theta = \\dfrac{\\sqrt{3}}{2}$ yields $\\dfrac{3}{4}$. Since $\\sec^2\\theta = 1 + \\tan^2\\theta$, you must calculate $1 + \\dfrac{3}{4} = \\dfrac{7}{4}$."
                },
                {
                        "ans": "<strong>(i)</strong> $\\tan\\theta = \\sqrt{3}$<br><strong>(ii)</strong> $\\sec^2\\theta = 4$",
                        "feedback": "Check your algebraic rearrangement in part <strong>(i)</strong>. The equation $4\\sin\\theta = 2\\sqrt{3}\\cos\\theta$ simplifies to $\\tan\\theta = \\dfrac{\\sqrt{3}}{2}$, not $\\sqrt{3}$."
                },
                {
                        "ans": "<strong>(i)</strong> $\\tan\\theta = \\dfrac{\\sqrt{3}}{2}$<br><strong>(ii)</strong> $\\sec^2\\theta = \\dfrac{13}{4}$",
                        "feedback": "Check your identity formula. Remember that $\\sec^2\\theta = 1 + \\tan^2\\theta$. It appears you may have used $\\sec^2\\theta = 1 + 4\\tan^2\\theta$ or made an arithmetic error when adding $1$ to $\\dfrac{3}{4}$."
                }
        ],
        "bradley_insight": {
                "type": "pro-tip",
                "title": "The Head Teacher's Eye: Expanding with Exact Values",
                "content": "Always write down your exact values for common angles (like $\\sin 60^\\circ = \\dfrac{\\sqrt{3}}{2}$ and $\\cos 30^\\circ = \\dfrac{\\sqrt{3}}{2}$) before expanding. This ensures you can easily factorise and simplify coefficients without making early arithmetic slips."
        }
},
{
        "id": "004603",
        "board": "OCR",
        "branch": "Pure",
        "level": "A",
        "major_area": "Algebra and Functions",
        "topic": "Trigonometric Functions",
        "subtopic": [
                "Trigonometry"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Solve the equation $3\\cos 2\\theta + \\sin\\theta = 2$ for $0^\\circ \\le \\theta < 360^\\circ$, giving your answers to $1$ decimal place where appropriate.",
        "steps": [
                "Use the double-angle identity $\\cos 2\\theta = 1 - 2\\sin^2\\theta$:\\begin{aligned} &3(1 - 2\\sin^2\\theta) + \\sin\\theta = 2 \\cr &3 - 6\\sin^2\\theta + \\sin\\theta = 2 \\end{aligned}",
                "Rearrange into quadratic form:\\begin{aligned} &-6\\sin^2\\theta + \\sin\\theta + 1 = 0 \\cr &6\\sin^2\\theta - \\sin\\theta - 1 = 0 \\end{aligned}",
                "Factorise the quadratic expression:\\begin{aligned} &(2\\sin\\theta - 1)(3\\sin\\theta + 1) = 0 \\cr &\\sin\\theta = \\dfrac{1}{2} \\text{ or } \\sin\\theta = -\\dfrac{1}{3} \\end{aligned}",
                "For $\\sin\\theta = \\dfrac{1}{2}$ in the interval $0^\\circ \\le \\theta < 360^\\circ$:\\begin{aligned} &\\theta = 30.0^\\circ \\cr &\\theta = 180^\\circ - 30.0^\\circ \\cr &\\quad = 150.0^\\circ \\end{aligned}",
                "For $\\sin\\theta = -\\dfrac{1}{3}$, the reference angle is $\\arcsin\\left(\\dfrac{1}{3}\\right) \\approx 19.5^\\circ$. Sine is negative in the third and fourth quadrants:\\begin{aligned} &\\theta = 180^\\circ + 19.5^\\circ \\cr &\\quad = 199.5^\\circ \\cr &\\theta = 360^\\circ - 19.5^\\circ \\cr &\\quad = 340.5^\\circ \\end{aligned}",
                "Final Answer: $\\theta = 30.0^\\circ$, $150.0^\\circ$, $199.5^\\circ$, $340.5^\\circ$"
        ],
        "pi_options": [
                {
                        "ans": "$\\theta = 30.0^\\circ$, $150.0^\\circ$",
                        "feedback": "You have correctly solved for the first branch of solutions, but remember that the quadratic yields a second valid branch of solutions from $\\sin\\theta = -\\dfrac{1}{3}$. You must solve both to find all angles within the domain."
                },
                {
                        "ans": "$\\theta = 30.0^\\circ$, $150.0^\\circ$, $19.5^\\circ$, $340.5^\\circ$",
                        "feedback": "Check your signs in Case 2. Since $\\sin\\theta = -\\dfrac{1}{3}$ is negative, your answers must lie in the third and fourth quadrants. The angle $19.5^\\circ$ is in the first quadrant where sine is positive."
                },
                {
                        "ans": "$\\theta = 60.0^\\circ$, $120.0^\\circ$, $199.5^\\circ$, $340.5^\\circ$",
                        "feedback": "Check your principal solution for Case 1. The angle for which $\\sin\\theta = \\dfrac{1}{2}$ is $30^\\circ$, not $60^\\circ$ (which corresponds to $\\sin 60^\\circ = \\dfrac{\\sqrt{3}}{2}$)."
                }
        ],
        "bradley_insight": {
                "type": "pro-tip",
                "title": "The Head Teacher's Eye: Choose the Correct Double-Angle",
                "content": "The cosine double-angle identity has three forms: $\\cos^2\\theta - \\sin^2\\theta$, $2\\cos^2\\theta - 1$, and $1 - 2\\sin^2\\theta$. Always choose the form that matches the other trigonometric term in your equation. Since the equation contains a $\\sin\\theta$ term, using $1 - 2\\sin^2\\theta$ is the only choice that creates a solvable single-variable quadratic."
        }
},
{
        "id": "004604",
        "board": "OCR",
        "branch": "Pure",
        "level": "A",
        "major_area": "Algebra and Functions",
        "topic": "Trigonometric Functions",
        "subtopic": [
                "Trigonometry"
        ],
        "img": false,
        "question": "The expression $3\\sin\\theta - 4\\cos\\theta$ can be written in the form $R\\sin(\\theta - \\alpha)$, where $R > 0$ and $0^\\circ < \\alpha < 90^\\circ$.<br><br><strong>(i)</strong> Find the value of $R$ and the value of $\\alpha$, giving $\\alpha$ to $2$ decimal places.<br><br><strong>(ii)</strong> Hence find the greatest and least possible values of the expression:<br><br>\\begin{aligned} &\\dfrac{10}{3\\sin\\theta - 4\\cos\\theta + 7} \\end{aligned}",
        "steps": [
                "<strong>(i)</strong> Expand $R\\sin(\\theta - \\alpha)$:\\begin{aligned} &R\\sin(\\theta - \\alpha) \\cr &\\quad = R(\\sin\\theta \\cos\\alpha \\cr &\\qquad - \\cos\\theta \\sin\\alpha) \\cr &\\quad = (R\\cos\\alpha)\\sin\\theta \\cr &\\qquad - (R\\sin\\alpha)\\cos\\theta \\end{aligned}",
                "Compare coefficients with $3\\sin\\theta - 4\\cos\\theta$:\\begin{aligned} &R\\cos\\alpha = 3 \\cr &R\\sin\\alpha = 4 \\end{aligned}",
                "Square and add both equations:\\begin{aligned} &R^2\\sin^2\\alpha + R^2\\cos^2\\alpha \\cr &\\quad = 3^2 + 4^2 \\cr &R^2(\\sin^2\\alpha + \\cos^2\\alpha) \\cr &\\quad = 9 + 16 \\cr &R^2 = 25 \\cr &R = 5 \\quad (R > 0) \\end{aligned}",
                "Divide the equations to solve for $\\alpha$:\\begin{aligned} &\\dfrac{R\\sin\\alpha}{R\\cos\\alpha} = \\dfrac{4}{3} \\cr &\\tan\\alpha = \\dfrac{4}{3} \\cr &\\alpha = \\arctan\\left(\\dfrac{4}{3}\\right) \\cr &\\alpha \\approx 53.13^\\circ \\end{aligned}",
                "<strong>(ii)</strong> Rewrite the expression using the compound form:\\begin{aligned} &\\dfrac{10}{3\\sin\\theta - 4\\cos\\theta + 7} \\cr &\\quad = \\dfrac{10}{5\\sin(\\theta - 53.13^\\circ) + 7} \\end{aligned}",
                "The greatest value occurs when the denominator is minimised (when $\\sin(\\theta - 53.13^\\circ) = -1$):\\begin{aligned} &\\text{Greatest Value} \\cr &\\quad = \\dfrac{10}{5(-1) + 7} \\cr &\\quad = \\dfrac{10}{2} \\cr &\\quad = 5 \\end{aligned}",
                "The least value occurs when the denominator is maximised (when $\\sin(\\theta - 53.13^\\circ) = 1$):\\begin{aligned} &\\text{Least Value} \\cr &\\quad = \\dfrac{10}{5(1) + 7} \\cr &\\quad = \\dfrac{10}{12} \\cr &\\quad = \\dfrac{5}{6} \\end{aligned}",
                "Final Answer: <strong>(i)</strong> $R = 5$, $\\alpha \\approx 53.13^\\circ$<br><strong>(ii)</strong> $\\text{Greatest} = 5$, $\\text{Least} = \\dfrac{5}{6}$"
        ],
        "pi_options": [
                {
                        "ans": "<strong>(i)</strong> $R = 5$, $\\alpha \\approx 53.13^\\circ$<br><strong>(ii)</strong> $\\text{Greatest} = \\dfrac{10}{7}$, $\\text{Least} = 0$",
                        "feedback": "When finding the greatest and least values of the fraction, you must vary the entire expression $3\\sin\\theta - 4\\cos\\theta = 5\\sin(\\theta - 53.13^\\circ)$ between its maximum of $5$ and minimum of $-5$. It appears you assumed the trigonometric part has a minimum of $0$."
                },
                {
                        "ans": "<strong>(i)</strong> $R = 25$, $\\alpha \\approx 53.13^\\circ$<br><strong>(ii)</strong> $\\text{Greatest} = 5$, $\\text{Least} = \\dfrac{5}{6}$",
                        "feedback": "Check your calculation for $R$ in part <strong>(i)</strong>. Since $R^2 = 3^2 + 4^2 = 25$, taking the square root of $25$ yields $R = 5$, not $25$."
                },
                {
                        "ans": "<strong>(i)</strong> $R = 5$, $\\alpha \\approx 36.87^\\circ$<br><strong>(ii)</strong> $\\text{Greatest} = 5$, $\\text{Least} = \\dfrac{5}{6}$",
                        "feedback": "Check your calculation for $\\alpha$. Since $R\\sin\\alpha = 4$ and $R\\cos\\alpha = 3$, you must evaluate $\\tan\\alpha = \\dfrac{4}{3}$, which gives $\\alpha \\approx 53.13^\\circ$. Using $\\dfrac{3}{4}$ leads to the incorrect angle $36.87^\\circ$."
                }
        ],
        "bradley_insight": {
                "type": "deeper",
                "title": "The Head Teacher's Eye: Greatest and Least Value Boundaries",
                "content": "For a fraction of the form $\\dfrac{A}{B\\sin(x) + C}$, the maximum value of the fraction occurs when the denominator is at its absolute minimum (i.e. when $\\sin(x) = -1$). Conversely, the minimum of the fraction occurs when the denominator is at its absolute maximum (i.e. when $\\sin(x) = 1$). Always be careful not to make the common error of matching 'greatest' with 'maximum sine'."
        }
},
{
        "id": "004605",
        "board": "OCR",
        "branch": "Pure",
        "level": "A",
        "major_area": "Algebra and Functions",
        "topic": "Trigonometric Functions",
        "subtopic": [
                "Trigonometry"
        ],
        "img": false,
        "question": "Solve the equation $2\\sec^2\\theta - \\tan\\theta = 5$ for $0 \\le \\theta < 2\\pi$, giving your answers in terms of $\\pi$ where exact, or to $2$ decimal places where appropriate.",
        "steps": [
                "Use the identity $\\sec^2\\theta = 1 + \\tan^2\\theta$:\\begin{aligned} &2(1 + \\tan^2\\theta) - \\tan\\theta = 5 \\cr &2 + 2\\tan^2\\theta - \\tan\\theta - 5 = 0 \\cr &2\\tan^2\\theta - \\tan\\theta - 3 = 0 \\end{aligned}",
                "Factorise the quadratic expression:\\begin{aligned} &(2\\tan\\theta - 3)(\\tan\\theta + 1) = 0 \\cr &\\tan\\theta = \\dfrac{3}{2} \\text{ or } \\tan\\theta = -1 \\end{aligned}",
                "<strong>Case 1:</strong> $\\tan\\theta = \\dfrac{3}{2}$<br><br>The principal solution is $\\theta = \\arctan(1.5) \\approx 0.98$. Since tangent is positive in the first and third quadrants:\\begin{aligned} &\\theta \\approx 0.98 \\cr &\\theta \\approx 0.98 + \\pi \\cr &\\quad \\approx 4.12 \\end{aligned}",
                "<strong>Case 2:</strong> $\\tan\\theta = -1$<br><br>Since tangent is negative in the second and fourth quadrants:\\begin{aligned} &\\theta = \\pi - \\dfrac{\\pi}{4} \\cr &\\quad = \\dfrac{3\\pi}{4} \\cr &\\theta = 2\\pi - \\dfrac{\\pi}{4} \\cr &\\quad = \\dfrac{7\\pi}{4} \\end{aligned}",
                "Combining both cases, all valid solutions in $0 \\le \\theta < 2\\pi$ are:\\begin{aligned} &\\theta \\approx 0.98, \\; 4.12, \\; \\dfrac{3\\pi}{4}, \\; \\dfrac{7\\pi}{4} \\end{aligned}",
                "Final Answer: $\\theta \\approx 0.98$, $4.12$, $\\dfrac{3\\pi}{4}$, $\\dfrac{7\\pi}{4}$"
        ],
        "pi_options": [
                {
                        "ans": "$\\theta \\approx 0.98$, $4.12$, $\\dfrac{\\pi}{4}$, $\\dfrac{5\\pi}{4}$",
                        "feedback": "Check your quadrant boundaries for Case 2. Since $\\tan\\theta = -1$ is negative, your answers must lie in the second and fourth quadrants. The angles $\\dfrac{\\pi}{4}$ and $\\dfrac{5\\pi}{4}$ correspond to $\\tan\\theta = +1$, which is incorrect."
                },
                {
                        "ans": "$\\theta \\approx 0.98$, $\\dfrac{3\\pi}{4}$",
                        "feedback": "You have correctly solved for the principal angles of both cases, but remember that the interval is $0 \\le \\theta < 2\\pi$. Since the tangent function repeats every $\\pi$ radians, you must add $\\pi$ to both principal values to find all valid solutions."
                },
                {
                        "ans": "$\\theta \\approx 0.59$, $3.73$, $\\dfrac{3\\pi}{4}$, $\\dfrac{7\\pi}{4}$",
                        "feedback": "Check your calculation for Case 1. The principal solution is $\\theta = \\arctan(1.5) \\approx 0.98$ rad. It appears you may have used $\\arcsin(1.5)$ incorrectly or made a radian/degree conversion slip."
                }
        ],
        "bradley_insight": {
                "type": "pro-tip",
                "title": "The Head Teacher's Eye: Mixed Radian and Degree Modes",
                "content": "Always make sure your calculator is in the correct mode (radians vs degrees) before evaluating inverse trigonometric expressions. When a question specifies the domain in terms of $\\pi$ (like $0 \\le \\theta < 2\\pi$), your calculator MUST be in radian mode. Converting back and forth manually is a major source of rounding and transposition errors."
        }
},
{
        "id": "004606",
        "board": "OCR",
        "branch": "Pure",
        "level": "A",
        "major_area": "Integration",
        "topic": "Differential Equations",
        "subtopic": [
                "Separation of Variables",
                "Reverse Chain Rule",
                "Boundary conditions"
                
        ],
        "img": false,
        "question": "The gradient of the curve $y = \\mathrm{f}(x)$ is given by the differential equation:<br><br>\\begin{aligned} &(2x - 1)^3 \\dfrac{\\text{d}y}{\\text{d}x} + 8y^2 = 0 \\end{aligned}<br><br>and the curve passes through the point $(1, 1)$.<br><br>By solving this differential equation, show that:<br><br>\\begin{aligned} &\\mathrm{f}(x) = \\dfrac{ax^2 - ax + 1}{bx^2 - bx + 1} \\end{aligned}<br><br>where $a$ and $b$ are integers to be determined.",
        "steps": [
                "To solve the differential equation, first separate the variables $x$ and $y$:\\begin{aligned} &(2x - 1)^3 \\dfrac{\\text{d}y}{\\text{d}x} = -8y^2 \\cr &\\dfrac{1}{y^2}\\text{d}y \\cr &\\quad = -\\dfrac{8}{(2x - 1)^3}\\text{d}x \\cr &y^{-2}\\text{d}y \\cr &\\quad = -8(2x - 1)^{-3}\\text{d}x \\end{aligned}",
                "Integrate both sides of the equation:\\begin{aligned} &\\int y^{-2}\\text{d}y \\cr &\\quad = \\int -8(2x - 1)^{-3}\\text{d}x \\end{aligned}",
                "Perform the integration on each side using the reverse chain rule:\\begin{aligned} &-\\dfrac{1}{y} \\cr &\\quad = -8 \\left[\\dfrac{(2x - 1)^{-2}}{(-2)(2)}\\right] \\cr &\\qquad + C \\cr &\\quad = -8 \\left[-\\dfrac{1}{4(2x - 1)^2}\\right] \\cr &\\qquad + C \\cr &\\quad = \\dfrac{2}{(2x - 1)^2} + C \\end{aligned}",
                "Multiply the equation by $-1$, where $K = -C$:\\begin{aligned} &\\dfrac{1}{y} \\cr &\\quad = -\\dfrac{2}{(2x - 1)^2} + K \\end{aligned}",
                "Substitute the boundary condition $(1, 1)$ to find $K$:\\begin{aligned} &\\dfrac{1}{1} = -\\dfrac{2}{(2(1) - 1)^2} + K \\cr &1 = -2 + K \\cr &K = 3 \\end{aligned}",
                "Substitute $K = 3$ back into the equation:\\begin{aligned} &\\dfrac{1}{y} = 3 - \\dfrac{2}{(2x - 1)^2} \\end{aligned}",
                "Express the right-hand side over a common denominator:\\begin{aligned} &\\dfrac{1}{y} \\cr &\\quad = \\dfrac{3(2x - 1)^2 - 2}{(2x - 1)^2} \\cr &\\quad = \\dfrac{3(4x^2 - 4x + 1) - 2}{4x^2 - 4x + 1} \\cr &\\quad = \\dfrac{12x^2 - 12x + 3 - 2}{4x^2 - 4x + 1} \\cr &\\quad = \\dfrac{12x^2 - 12x + 1}{4x^2 - 4x + 1} \\end{aligned}",
                "Take the reciprocal of both sides to solve for $y = \\mathrm{f}(x)$:\\begin{aligned} &y = \\dfrac{4x^2 - 4x + 1}{12x^2 - 12x + 1} \\end{aligned}<br><br>This is in the required form $\\mathrm{f}(x) = \\dfrac{ax^2 - ax + 1}{bx^2 - bx + 1}$ with $a = 4$ and $b = 12$.",
                "Final Answer: $a = 4$, $b = 12$"
        ],
        "pi_options": [
                {
                        "ans": "$a = 4$, $b = 4$",
                        "feedback": "Check your boundary condition. When substituting $x = 1, y = 1$ into $\\dfrac{1}{y} = -\\dfrac{2}{(2x - 1)^2} + K$, you should get $1 = -2 + K$, which gives $K = 3$, not $K = 1$."
                },
                {
                        "ans": "$a = 12$, $b = 4$",
                        "feedback": "Ensure you take the reciprocal of both sides at the final step. Since $\\dfrac{1}{y} = \\dfrac{12x^2 - 12x + 1}{4x^2 - 4x + 1}$, we find $y = \\dfrac{4x^2 - 4x + 1}{12x^2 - 12x + 1}$, so $a = 4$ and $b = 12$."
                },
                {
                        "ans": "$a = 4$, $b = -12$",
                        "feedback": "Check your expansion of $3(2x-1)^2 - 2$. This expands to $12x^2 - 12x + 1$, which gives $b = 12$ as the denominator coefficient."
                }
        ],
        "bradley_insight": {
                "type": "caution",
                "title": "The Head Teacher's Eye: Chain Rule on Linear Arguments",
                "content": "When integrating an expression like $(2x - 1)^{-3}$, do not forget the chain rule adjustment. You must divide the integral by the derivative of the linear argument (which is $2$). Forgetting to divide by $2$ is one of the most common errors in Year 2 calculus integration."
        }
},
{
        "id": "004607",
        "board": "OCR",
        "branch": "Pure",
        "level": "A",
        "major_area": "Integration",
        "topic": "Differential Equations",
        "subtopic": [
                "Separation of Variables",
                "Log, exponential and Trig Functions",
                "Boundary conditions"
                
        ],
        "img": false,
        "question": "The gradient of the curve $y = \\mathrm{f}(x)$ is given by the differential equation:<br><br>\\begin{aligned} &\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{y\\cos x}{1 + 2y} \\end{aligned}<br><br>and the curve passes through the point $(0, 1)$.<br><br>By solving this differential equation, show that $y\\mathrm{e}^{2y} = \\mathrm{e}^{2 + \\sin x}$.",
        "steps": [
                "Separate the variables:\\begin{aligned} &\\dfrac{1 + 2y}{y}\\text{d}y = \\cos x\\text{d}x \\cr &\\int \\left(\\dfrac{1}{y} + 2\\right)\\text{d}y \\cr &\\quad = \\int \\cos x\\text{d}x \\end{aligned}",
                "Integrate both sides analytically:\\begin{aligned} &\\ln y + 2y = \\sin x + C \\end{aligned}",
                "Apply the boundary condition $(0, 1)$ to find $C$:\\begin{aligned} &\\ln(1) + 2(1) = \\sin(0) + C \\cr &0 + 2 = 0 + C \\cr &C = 2 \\end{aligned}",
                "Substitute $C = 2$ back into the equation:\\begin{aligned} &\\ln y + 2y = \\sin x + 2 \\end{aligned}",
                "Exponentiate both sides to eliminate the logarithm:\\begin{aligned} &\\mathrm{e}^{\\ln y + 2y} = \\mathrm{e}^{\\sin x + 2} \\cr &\\mathrm{e}^{\\ln y} \\times \\mathrm{e}^{2y} = \\mathrm{e}^{2 + \\sin x} \\cr &y\\mathrm{e}^{2y} = \\mathrm{e}^{2 + \\sin x} \\end{aligned}",
                "Final Answer: $y\\mathrm{e}^{2y} = \\mathrm{e}^{2 + \\sin x}$"
        ],
        "pi_options": [
                {
                        "ans": "$y\\mathrm{e}^{2y} = \\mathrm{e}^{\\sin x}$",
                        "feedback": "Do not forget the constant of integration $C$. When substituting the initial conditions $(0, 1)$ into $\\ln y + 2y = \\sin x + C$, you find $C = 2$, which must appear as a term $+2$ in the exponent."
                },
                {
                        "ans": "$y\\mathrm{e}^{y} = \\mathrm{e}^{1 + \\sin x}$",
                        "feedback": "Check your integration of the constant term. Integrating $2$ with respect to $y$ yields $2y$, not $y$. This affects both the value of the constant $C$ and the exponential term."
                },
                {
                        "ans": "$y\\mathrm{e}^{2y} = \\mathrm{e}^{2 - \\sin x}$",
                        "feedback": "Verify your trigonometric integration. The integral of $\\cos x$ with respect to $x$ is $\\sin x$, not $-\\sin x$."
                }
        ],
        "bradley_insight": {
                "type": "pro-tip",
                "title": "The Head Teacher's Eye: Power Laws of Exponentials",
                "content": "Recall the fundamental index law $\\mathrm{e}^{A + B} = \\mathrm{e}^{A} \\times \\mathrm{e}^{B}$. This is the key to simplifying the expression $\\mathrm{e}^{\\ln y + 2y}$. Writing it as $\\mathrm{e}^{\\ln y} \\times \\mathrm{e}^{2y}$ allows you to replace $\\mathrm{e}^{\\ln y}$ directly with $y$, simplifying the entire left-hand side to $y\\mathrm{e}^{2y}$."
        }
},
{
        "id": "004608",
        "board": "OCR",
        "branch": "Pure",
        "level": "A",
        "major_area": "Integration",
        "topic": "Differential Equations",
        "subtopic": [
                "Separation of Variables",
                "Moddeling Applications"      
        ],
        "img": false,
        "question": "A tank contains $100$ litres of pure water. Salt water containing $0.2\\text{ kg}$ of salt per litre runs into the tank at a rate of $5$ litres per minute. The well-stirred mixture runs out of the tank at the same rate.<br><br>Let $x\\text{ kg}$ be the amount of salt in the tank at time $t$ minutes.<br><br><strong>(i)</strong> Show that the rate of change of $x$ is given by the differential equation:<br><br>\\begin{aligned} &\\dfrac{\\text{d}x}{\\text{d}t} = \\dfrac{20 - x}{20} \\end{aligned}<br><br><strong>(ii)</strong> Solve this differential equation, given that initially there is no salt in the tank, to find $x$ in terms of $t$.",
        "steps": [
                "<strong>(i)</strong> The rate of change of salt in the tank is given by:\\begin{aligned} &\\dfrac{\\text{d}x}{\\text{d}t} = \\text{Rate In} - \\text{Rate Out} \\end{aligned}",
                "Calculate the input rate of salt:\\begin{aligned} &\\text{Rate In} \\cr &\\quad = 5 \\text{ litres/min} \\cr &\\qquad \\times 0.2 \\text{ kg/litre} \\cr &\\quad = 1 \\text{ kg/min} \\end{aligned}",
                "Calculate the output rate of salt:\\begin{aligned} &\\text{Rate Out} \\cr &\\quad = 5 \\text{ litres/min} \\cr &\\qquad \\times \\dfrac{x}{100} \\text{ kg/litre} \\cr &\\quad = \\dfrac{x}{20} \\text{ kg/min} \\end{aligned}",
                "Subtract the rates to establish the differential equation:\\begin{aligned} &\\dfrac{\\text{d}x}{\\text{d}t} = 1 - \\dfrac{x}{20} \\cr &\\quad = \\dfrac{20 - x}{20} \\end{aligned}",
                "<strong>(ii)</strong> Separate the variables and integrate:\\begin{aligned} &\\dfrac{1}{20 - x}\\text{d}x = \\dfrac{1}{20}\\text{d}t \\cr &\\int \\dfrac{1}{20 - x}\\text{d}x \\cr &\\quad = \\int \\dfrac{1}{20}\\text{d}t \\end{aligned}",
                "Integrate both sides analytically:\\begin{aligned} &-\\ln(20 - x) = \\dfrac{t}{20} + C \\cr &\\ln(20 - x) \\cr &\\quad = -\\dfrac{t}{20} + K \\quad (K = -C) \\end{aligned}",
                "Substitute $x = 0$ when $t = 0$ to find $K$:\\begin{aligned} &\\ln(20 - 0) = -\\dfrac{0}{20} + K \\cr &K = \\ln(20) \\end{aligned}",
                "Substitute $K = \\ln(20)$ back and solve for $x$:\\begin{aligned} &\\ln(20 - x) \\cr &\\quad = -\\dfrac{t}{20} + \\ln(20) \\cr &\\ln(20 - x) - \\ln(20) \\cr &\\quad = -\\dfrac{t}{20} \\cr &\\ln\\left(\\dfrac{20 - x}{20}\\right) = -\\dfrac{t}{20} \\cr &\\dfrac{20 - x}{20} = \\mathrm{e}^{-\\frac{t}{20}} \\cr &20 - x = 20\\mathrm{e}^{-\\frac{t}{20}} \\cr &x = 20\\left(1 - \\mathrm{e}^{-\\frac{t}{20}}\\right) \\end{aligned}",
                "Final Answer: $x = 20\\left(1 - \\mathrm{e}^{-\\frac{t}{20}}\\right)$"
        ],
        "pi_options": [
                {
                        "ans": "$x = 20\\left(1 + \\mathrm{e}^{-\\frac{t}{20}}\\right)$",
                        "feedback": "Check your algebraic rearrangement in the final step. Solving $20 - x = 20\\mathrm{e}^{-\\frac{t}{20}}$ for $x$ yields $x = 20\\left(1 - \\mathrm{e}^{-\\frac{t}{20}}\\right)$."
                },
                {
                        "ans": "$x = 20 - \\mathrm{e}^{-\\frac{t}{20}}$",
                        "feedback": "Remember to apply the exponential to both sides correctly. Taking the exponential of $\\ln(20 - x) = \\ln(20) - \\dfrac{t}{20}$ yields $20 - x = 20\\mathrm{e}^{-\\frac{t}{20}}$."
                },
                {
                        "ans": "$x = 20\\left(1 - \\mathrm{e}^{\\frac{t}{20}}\\right)$",
                        "feedback": "Check your integration of $-\\ln(20 - x) = \\dfrac{t}{20} + C$. Multiplying the equation by $-1$ to isolate the log term must make the exponent term negative: $-\\dfrac{t}{20}$."
                }
        ],
        "bradley_insight": {
                "type": "deeper",
                "title": "The Head Teacher's Eye: Separability of Modelling Equations",
                "content": "When setting up rate equations, always ensure your units match perfectly before separating variables. Additionally, notice how $x = 20\\left(1 - \\mathrm{e}^{-\\frac{t}{20}}\\right)$ behaves as $t \\to \\infty$. The exponential term decays to $0$, meaning $x \\to 20\\text{ kg}$. This is the physical saturation limit (since $100\\text{ L} \\times 0.2\\text{ kg/L} = 20\\text{ kg}$), which serves as an excellent conceptual sanity check!"
        }
},
{
        "id": "004609",
        "board": "OCR",
        "branch": "Pure",
        "level": "A",
        "major_area": "Integration",
        "topic": "Differential Equations",
        "subtopic": [
                "Separation of Variables",
                "Partial Fractions",
                "Exponentials and Logs"      
        ],
        "img": false,
        "question": "The variables $x$ and $y$ satisfy the differential equation:<br><br>\\begin{aligned} &\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{y(y + 3)}{x} \\end{aligned}<br><br>for $x > 0$ and $y > 0$. It is given that $y = 3$ when $x = 1$.<br><br>By solving this differential equation, show that $y = \\dfrac{3x^3}{2 - x^3}$.",
        "steps": [
                "Separate the variables:\\begin{aligned} &\\dfrac{1}{y(y + 3)}\\text{d}y = \\dfrac{1}{x}\\text{d}x \\cr &\\int \\dfrac{1}{y(y + 3)}\\text{d}y \\cr &\\quad = \\int \\dfrac{1}{x}\\text{d}x \\end{aligned}",
                "Express the integrand in partial fractions:\\begin{aligned} &\\dfrac{1}{y(y + 3)} = \\dfrac{A}{y} + \\dfrac{B}{y + 3} \\cr &1 = A(y + 3) + By \\end{aligned}",
                "Solve for $A$ and $B$:<br><br>• For $y = 0$, $1 = 3A$, so $A = \\dfrac{1}{3}$<br><br>• For $y = -3$, $1 = -3B$, so $B = -\\dfrac{1}{3}$<br><br>This gives:\\begin{aligned} &\\dfrac{1}{y(y + 3)} \\cr &\\quad = \\dfrac{1}{3}\\left(\\dfrac{1}{y} - \\dfrac{1}{y + 3}\\right) \\end{aligned}",
                "Substitute back and multiply by $3$:\\begin{aligned} &\\int \\dfrac{1}{3}\\left(\\dfrac{1}{y} - \\dfrac{1}{y + 3}\\right)\\text{d}y \\cr &\\quad = \\int \\dfrac{1}{x}\\text{d}x \\cr &\\int \\left(\\dfrac{1}{y} - \\dfrac{1}{y + 3}\\right)\\text{d}y \\cr &\\quad = \\int \\dfrac{3}{x}\\text{d}x \\end{aligned}",
                "Integrate both sides analytically:\\begin{aligned} &\\ln y - \\ln(y + 3) = 3\\ln x + C \\cr &\\ln\\left(\\dfrac{y}{y + 3}\\right) = \\ln(x^3) + C \\end{aligned}",
                "Exponentiate both sides (where $A = \\mathrm{e}^{C}$):\\begin{aligned} &\\dfrac{y}{y + 3} = Ax^3 \\end{aligned}",
                "Substitute $x = 1$ and $y = 3$ to find $A$:\\begin{aligned} &\\dfrac{3}{3 + 3} = A(1)^3 \\cr &\\dfrac{3}{6} = A \\cr &A = \\dfrac{1}{2} \\end{aligned}",
                "Substitute $A = \\dfrac{1}{2}$ and solve for $y$:\\begin{aligned} &\\dfrac{y}{y + 3} = \\dfrac{1}{2}x^3 \\cr &2y = x^3(y + 3) \\cr &2y = x^3y + 3x^3 \\cr &2y - x^3y = 3x^3 \\cr &y(2 - x^3) = 3x^3 \\cr &y = \\dfrac{3x^3}{2 - x^3} \\end{aligned}",
                "Final Answer: $y = \\dfrac{3x^3}{2 - x^3}$"
        ],
        "pi_options": [
                {
                        "ans": "$y = \\dfrac{3x^3}{1 - x^3}$",
                        "feedback": "Check your initial condition substitution. Substituting $x = 1$ and $y = 3$ into $\\dfrac{y}{y + 3} = Ax^3$ gives $\\dfrac{3}{6} = A$, so $A = \\dfrac{1}{2}$. Using $A = 1$ leads to an incorrect denominator."
                },
                {
                        "ans": "$y = \\dfrac{x^3}{2 - 3x^3}$",
                        "feedback": "Check your algebraic rearrangement when isolating $y$. Expanding $2y = x^3(y+3)$ gives $2y = x^3y + 3x^3$. Grouping the $y$ terms on the left yields $y(2 - x^3) = 3x^3$."
                },
                {
                        "ans": "$y = \\dfrac{3x^3}{2 + x^3}$",
                        "feedback": "Check your signs when transposing $2y = x^3y + 3x^3$. Subtracting $x^3y$ from both sides should yield $2y - x^3y = 3x^3$, which gives $y(2 - x^3) = 3x^3$."
                }
        ],
        "bradley_insight": {
                "type": "pro-tip",
                "title": "The Head Teacher's Eye: Multiplying by the LCM of denominators",
                "content": "When resolving partial fraction coefficients inside a differential equation, multiplying both sides by the denominator coefficient (here, $3$) before integrating keeps your logarithms clean and avoids carrying fractional factors inside logarithmic terms."
        }
},
{
        "id": "004610",
        "board": "OCR",
        "branch": "Pure",
        "level": "A",
        "subtopic": [
                "Separation of Variables",
                "Exponentials and Logs"      
        ],
        "img": false,
        "question": "The variables $x$ and $y$ satisfy the differential equation:<br><br>\\begin{aligned} &\\dfrac{\\text{d}y}{\\text{d}x} = x\\mathrm{e}^{y - x^2} \\end{aligned}<br><br>and $y = 0$ when $x = 0$.<br><br><strong>(i)</strong> Find the general solution of the differential equation, expressing $y$ in terms of $x$.<br><br><strong>(ii)</strong> Hence find the exact value of $y$ when $x = 1$.",
        "steps": [
                "<strong>(i)</strong> Separate the variables using index laws:\\begin{aligned} &\\dfrac{\\text{d}y}{\\text{d}x} = x\\mathrm{e}^{y}\\mathrm{e}^{-x^2} \\cr &\\mathrm{e}^{-y}\\text{d}y = x\\mathrm{e}^{-x^2}\\text{d}x \\end{aligned}",
                "Integrate both sides of the equation:\\begin{aligned} &\\int \\mathrm{e}^{-y}\\text{d}y = \\int x\\mathrm{e}^{-x^2}\\text{d}x \\end{aligned}",
                "Perform the integration on each side:\\begin{aligned} &-\\mathrm{e}^{-y} = -\\dfrac{1}{2}\\mathrm{e}^{-x^2} + C \\cr &\\mathrm{e}^{-y} \\cr &\\quad = \\dfrac{1}{2}\\mathrm{e}^{-x^2} + K \\quad (K = -C) \\end{aligned}",
                "Apply the initial condition $(0, 0)$ to solve for $K$:\\begin{aligned} &\\mathrm{e}^{0} = \\dfrac{1}{2}\\mathrm{e}^{0} + K \\cr &1 = \\dfrac{1}{2} + K \\cr &K = \\dfrac{1}{2} \\end{aligned}",
                "Substitute $K = \\dfrac{1}{2}$ back into the equation:\\begin{aligned} &\\mathrm{e}^{-y} = \\dfrac{1}{2}\\mathrm{e}^{-x^2} + \\dfrac{1}{2} \\cr &\\mathrm{e}^{-y} = \\dfrac{\\mathrm{e}^{-x^2} + 1}{2} \\end{aligned}",
                "Take natural logarithms and solve for $y$:\\begin{aligned} &-y = \\ln\\left(\\dfrac{\\mathrm{e}^{-x^2} + 1}{2}\\right) \\cr &y = -\\ln\\left(\\dfrac{\\mathrm{e}^{-x^2} + 1}{2}\\right) \\cr &y = \\ln\\left(\\dfrac{2}{\\mathrm{e}^{-x^2} + 1}\\right) \\end{aligned}",
                "<strong>(ii)</strong> Substitute $x = 1$ into the general solution:\\begin{aligned} &y = \\ln\\left(\\dfrac{2}{\\mathrm{e}^{-1} + 1}\\right) \\cr &\\quad = \\ln\\left(\\dfrac{2}{\\dfrac{1}{\\mathrm{e}} + 1}\\right) \\cr &\\quad = \\ln\\left(\\dfrac{2}{\\dfrac{1 + \\mathrm{e}}{\\mathrm{e}}}\\right) \\cr &\\quad = \\ln\\left(\\dfrac{2\\mathrm{e}}{1 + \\mathrm{e}}\\right) \\end{aligned}",
                "Final Answer: <strong>(i)</strong> $y = \\ln\\left(\\dfrac{2}{\\mathrm{e}^{-x^2} + 1}\\right)$<br><strong>(ii)</strong> $y = \\ln\\left(\\dfrac{2\\mathrm{e}}{1 + \\mathrm{e}}\\right)$"
        ],
        "pi_options": [
                {
                        "ans": "<strong>(i)</strong> $y = -\\ln\\left(\\dfrac{\\mathrm{e}^{-x^2} + 1}{2}\\right)$<br><strong>(ii)</strong> $y = \\ln\\left(\\dfrac{2}{1 + \\mathrm{e}}\\right)$",
                        "feedback": "Check your fraction simplification in part <strong>(ii)</strong>. Substituting $x = 1$ into $\\dfrac{2}{\\mathrm{e}^{-1} + 1}$ gives $\\dfrac{2}{1/\\mathrm{e} + 1}$. Multiplying the numerator and denominator by $\\mathrm{e}$ yields $\\dfrac{2\\mathrm{e}}{1 + \\mathrm{e}}$."
                },
                {
                        "ans": "<strong>(i)</strong> $y = \\ln\\left(\\dfrac{2}{\\mathrm{e}^{-x^2} - 1}\\right)$<br><strong>(ii)</strong> $y = \\ln\\left(\\dfrac{2\\mathrm{e}}{\\mathrm{e} - 1}\\right)$",
                        "feedback": "Check your signs in step 5. The equation is $\\mathrm{e}^{-y} = \\dfrac{\\mathrm{e}^{-x^2} + 1}{2}$, which has a plus sign in the numerator. A minus sign is incorrect."
                },
                {
                        "ans": "<strong>(i)</strong> $y = \\ln\\left(\\dfrac{1}{\\mathrm{e}^{-x^2} + 1}\\right)$<br><strong>(ii)</strong> $y = \\ln\\left(\\dfrac{\\mathrm{e}}{1 + \\mathrm{e}}\\right)$",
                        "feedback": "Check your boundary condition. When substituting $(0,0)$ into the expression $\\mathrm{e}^{-y} = \\dfrac{1}{2}\\mathrm{e}^{-x^2} + K$, you get $1 = \\dfrac{1}{2} + K$, which gives $K = \\dfrac{1}{2}$. Forgetting the $+1/2$ term leads to an incorrect numerator."
                }
        ],
        "bradley_insight": {
                "type": "pro-tip",
                "title": "The Head Teacher's Eye: Exponentials with Negative Arguments",
                "content": "When dealing with expressions like $\\ln\\left(\\dfrac{2}{\\mathrm{e}^{-1} + 1}\\right)$, always convert $\\mathrm{e}^{-1}$ to $\\dfrac{1}{\\mathrm{e}}$ and find a common denominator for the bottom fraction. This is the only way to simplify the expression into the clean, single-log form $\\ln\\left(\\dfrac{2\\mathrm{e}}{1 + \\mathrm{e}}\\right)$ commonly required in A Level exams."
        }
},
 {
        "id": "004611",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "AS",
        "major_area": "Coordinate Geometry",
        "topic": "Trigonometry",
        "subtopic": [
                "Cosine Rule"
        ],
        "img": "images/Pure_SVGs/004611.svg",
        "question": "The diagram shows a triangle $ABC$ where $AB = 25\\text{ cm}$, $AC = 18\\text{ cm}$, and the included angle is $\\angle BAC = 72^\\circ$.<br><br><strong>(i)</strong> Find the length of $BC$, giving your answer to $2$ decimal places.<br><strong>(ii)</strong> Hence find the perimeter of triangle $ABC$, giving your answer to $2$ decimal places.",
        "steps": [
                "<strong>(i)</strong> Apply the Cosine Rule:\\begin{aligned} &BC^2 \\cr &\\quad = AB^2 + AC^2 \\cr &\\qquad - 2(AB)(AC)\\cos(\\angle BAC) \\end{aligned}",
                "Substitute the given lengths and angle into the formula:\\begin{aligned} &BC^2 \\cr &\\quad = 25^2 + 18^2 \\cr &\\qquad - 2(25)(18)\\cos(72^\\circ) \\cr &\\quad = 625 + 324 \\cr &\\qquad - 900\\cos(72^\\circ) \\cr &\\quad = 949 - 900(0.309017) \\cr &\\quad = 949 - 278.115 \\cr &\\quad = 670.885 \\end{aligned}",
                "Take the square root of both sides to find $BC$:\\begin{aligned} &BC = \\sqrt{670.885} \\cr &\\quad \\approx 25.90\\text{ cm} \\end{aligned}",
                "<strong>(ii)</strong> The perimeter $P$ is the sum of all three sides:\\begin{aligned} &P = AB + AC + BC \\cr &\\quad \\approx 25 + 18 + 25.90 \\cr &\\quad \\approx 68.90\\text{ cm} \\end{aligned}",
                "Final Answer: <strong>(i)</strong> $BC \\approx 25.90\\text{ cm}$<br><strong>(ii)</strong> $P \\approx 68.90\\text{ cm}$"
        ],
        "pi_options": [
                {
                        "ans": "<strong>(i)</strong> $BC \\approx 25.90\\text{ cm}$<br><strong>(ii)</strong> $P \\approx 43.00\\text{ cm}$",
                        "feedback": "You found the correct length of $BC$, but check your perimeter sum. The perimeter must include all three sides of the triangle ($25 + 18 + 25.90 = 68.90\\text{ cm}$), not just the two given sides."
                },
                {
                        "ans": "<strong>(i)</strong> $BC \\approx 30.81\\text{ cm}$<br><strong>(ii)</strong> $P \\approx 73.81\\text{ cm}$",
                        "feedback": "Check your application of the Cosine Rule. Make sure you subtract the term $2(AB)(AC)\\cos(72^\\circ)$ instead of adding it. Adding it leads to $BC^2 = 1227.115$, which is incorrect."
                },
                {
                        "ans": "<strong>(i)</strong> $BC \\approx 25.90\\text{ cm}$<br><strong>(ii)</strong> $P \\approx 50.90\\text{ cm}$",
                        "feedback": "You found the correct length of $BC$, but check your perimeter sum. You only added sides $AB$ and $BC$, forgetting side $AC$ ($18\\text{ cm}$)."
                }
        ],
        "bradley_insight": {
                "type": "caution",
                "title": "The Head Teacher's Eye: Cosine Sign Error",
                "content": "A very common slip when calculating the Cosine Rule is a sign error in the term $-2bc\\cos A$. If the included angle is obtuse (greater than $90^\\circ$), the cosine of the angle is negative, which turns the subtraction into an addition. Always write out your steps carefully to keep track of negative signs."
        }
},
{
        "id": "004612",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "AS",
        "major_area": "Coordinate Geometry",
        "topic": "Trigonometric Functions",
        "topic": "Trigonometry",
        "subtopic": [
                "Cosine Rule",
                "Trig Area Formula"
        ],
        "img": "images/Pure_SVGs/004612.svg",
        "question": "The diagram shows a triangle $XYZ$ where the side lengths are $XY = 12\\text{ cm}$, $XZ = 15\\text{ cm}$, and $YZ = 10\\text{ cm}$.<br><br><strong>(i)</strong> Find the size of the angle $\\angle YXZ$, giving your answer to $1$ decimal place.<br><strong>(ii)</strong> Find the area of triangle $XYZ$, giving your answer to $1$ decimal place.",
        "steps": [
                "<strong>(i)</strong> Rearrange the Cosine Rule to isolate $\\cos(\\angle YXZ)$:\\begin{aligned} &\\cos(\\angle YXZ) \\cr &\\quad = \\dfrac{XY^2 + XZ^2 - YZ^2}{2(XY)(XZ)} \\end{aligned}",
                "Substitute the given side lengths into the formula:\\begin{aligned} &\\cos(\\angle YXZ) \\cr &\\quad = \\dfrac{12^2 + 15^2 - 10^2}{2(12)(15)} \\cr &\\quad = \\dfrac{144 + 225 - 100}{360} \\cr &\\quad = \\dfrac{269}{360} \\cr &\\quad \\approx 0.747222 \\end{aligned}",
                "Take the inverse cosine to find the angle:\\begin{aligned} &\\angle YXZ \\cr &\\quad = \\arccos(0.747222) \\cr &\\quad \\approx 41.6^\\circ \\end{aligned}",
                "<strong>(ii)</strong> Use the trigonometric area formula $\\text{Area} = \\dfrac{1}{2}ab\\sin C$:\\begin{aligned} &\\text{Area} \\cr &\\quad = \\dfrac{1}{2}(XY)(XZ) \\cr &\\qquad \\times \\sin(\\angle YXZ) \\cr &\\quad = \\dfrac{1}{2}(12)(15)\\sin(41.65^\\circ) \\cr &\\quad = 90 \\times 0.6646 \\cr &\\quad \\approx 59.8\\text{ cm}^2 \\end{aligned}",
                "Final Answer: <strong>(i)</strong> $\\angle YXZ \\approx 41.6^\\circ$<br><strong>(ii)</strong> $\\text{Area} \\approx 59.8\\text{ cm}^2$"
        ],
        "pi_options": [
                {
                        "ans": "<strong>(i)</strong> $\\angle YXZ \\approx 41.6^\\circ$<br><strong>(ii)</strong> $\\text{Area} \\approx 60.1\\text{ cm}^2$",
                        "feedback": "You correctly identified the angle, but check your area calculation. It appears you used $\\sin(41.9^\\circ)$ instead of the correct angle $\\sin(41.6^\\circ)$. Using the precise angle yields an area of $59.8\\text{ cm}^2$."
                },
                {
                        "ans": "<strong>(i)</strong> $\\angle YXZ \\approx 48.4^\\circ$<br><strong>(ii)</strong> $\\text{Area} \\approx 59.8\\text{ cm}^2$",
                        "feedback": "Check your application of the Cosine Rule. When setting up the numerator, make sure you subtract the square of the opposite side ($YZ^2 = 100$), not one of the adjacent sides. This error leads to an incorrect angle of $48.4^\\circ$."
                },
                {
                        "ans": "<strong>(i)</strong> $\\angle YXZ \\approx 41.6^\\circ$<br><strong>(ii)</strong> $\\text{Area} \\approx 90.0\\text{ cm}^2$",
                        "feedback": "Remember that the area of a non-right-angled triangle requires the sine of the included angle. Forgetting the $\\sin(\\angle YXZ)$ term and calculating $\\dfrac{1}{2}bh$ directly as $\\dfrac{1}{2} \\times 12 \\times 15 = 90$ is incorrect."
                }
        ],
        "bradley_insight": {
                "type": "pro-tip",
                "title": "The Head Teacher's Eye: Rearranging the Cosine Rule",
                "content": "To find an angle directly, memorising the rearranged form of the Cosine Rule, $\\cos A = \\dfrac{b^2 + c^2 - a^2}{2bc}$, is a great exam time-saver. Just remember that the side being subtracted in the numerator must always be the side directly opposite the angle you are trying to find."
        }
},
{
        "id": "004613",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "AS",
        "major_area": "Coordinate Geometry",
        "topic": "Trigonometric Functions",
        "subtopic": [
                "Sine Rule",
                "Trig Area Formula"
        ],
        "img": "images/Pure_SVGs/004613.svg",
        "question": "The diagram shows a triangle $PQR$ where the side lengths are $PQ = 8\\text{ cm}$ and $QR = 6\\text{ cm}$, and the angle is $\\angle QPR = 40^\\circ$.<br><br><strong>(i)</strong> Show that there are two possible values for the angle $\\angle PRQ$, and find both values to $1$ decimal place.<br><strong>(ii)</strong> Given that the angle $\\angle PRQ$ is obtuse, find the area of triangle $PQR$, giving your answer to $1$ decimal place.",
        "steps": [
                "<strong>(i)</strong> Apply the Sine Rule:\\begin{aligned} &\\dfrac{\\sin(\\angle PRQ)}{PQ} = \\dfrac{\\sin(\\angle QPR)}{QR} \\end{aligned}",
                "Substitute the given values to solve for $\\sin(\\angle PRQ)$:\\begin{aligned} &\\dfrac{\\sin(\\angle PRQ)}{8} = \\dfrac{\\sin(40^\\circ)}{6} \\cr &\\sin(\\angle PRQ) \\cr &\\quad = \\dfrac{8\\sin(40^\\circ)}{6} \\cr &\\quad \\approx \\dfrac{8(0.642788)}{6} \\cr &\\quad \\approx 0.857051 \\end{aligned}",
                "Since $\\sin(\\angle PRQ) = 0.857051$, there are two solutions within a triangle:<br><br>• Acute case:\\begin{aligned} &\\angle PRQ = \\arcsin(0.857051) \\cr &\\quad \\approx 59.0^\\circ \\end{aligned}<br><br>• Obtuse case:\\begin{aligned} &\\angle PRQ = 180^\\circ - 59.0^\\circ \\cr &\\quad \\approx 121.0^\\circ \\end{aligned}",
                "<strong>(ii)</strong> Since $\\angle PRQ$ is obtuse, $\\angle PRQ = 121.0^\\circ$. Find the remaining angle $\\angle PQR$:\\begin{aligned} &\\angle PQR \\cr &\\quad = 180^\\circ - 40^\\circ - 121.0^\\circ \\cr &\\quad = 19.0^\\circ \\end{aligned}",
                "Find the length of side $PR$ using the Sine Rule:\\begin{aligned} &\\dfrac{PR}{\\sin(19.0^\\circ)} = \\dfrac{6}{\\sin(40^\\circ)} \\cr &PR = \\dfrac{6\\sin(19.0^\\circ)}{\\sin(40^\\circ)} \\cr &\\quad \\approx \\dfrac{6(0.325568)}{0.642788} \\cr &\\quad \\approx 3.04\\text{ cm} \\end{aligned}",
                "Calculate the area of the triangle:\\begin{aligned} &\\text{Area} \\cr &\\quad = \\dfrac{1}{2}(PQ)(PR)\\sin(\\angle QPR) \\cr &\\quad = \\dfrac{1}{2}(8)(3.04)\\sin(40^\\circ) \\cr &\\quad \\approx 4(3.04)(0.642788) \\cr &\\quad \\approx 7.8\\text{ cm}^2 \\end{aligned}",
                "Final Answer: <strong>(i)</strong> $\\angle PRQ \\approx 59.0^\\circ$ or $121.0^\\circ$<br><strong>(ii)</strong> $\\text{Area} \\approx 7.8\\text{ cm}^2$"
        ],
        "pi_options": [
                {
                        "ans": "<strong>(i)</strong> $\\angle PRQ \\approx 59.0^\\circ$ or $121.0^\\circ$<br><strong>(ii)</strong> $\\text{Area} \\approx 20.6\\text{ cm}^2$",
                        "feedback": "You identified the correct angles, but check your area calculation. It appears you used the acute angle $\\angle PRQ = 59.0^\\circ$ to find the remaining angle as $81.0^\\circ$. For part <strong>(ii)</strong>, you must use the obtuse case ($121.0^\\circ$), which gives a remaining angle of $19.0^\\circ$ and an area of $7.8\\text{ cm}^2$."
                },
                {
                        "ans": "<strong>(i)</strong> $\\angle PRQ \\approx 59.0^\\circ$ only<br><strong>(ii)</strong> $\\text{Area} \\approx 7.8\\text{ cm}^2$",
                        "feedback": "Remember that because $\\sin(\\theta) = \\sin(180^\\circ - \\theta)$, the Sine Rule always has an ambiguous case yielding both an acute and an obtuse solution when finding an angle. You must state both possible solutions for part <strong>(i)</strong>."
                },
                {
                        "ans": "<strong>(i)</strong> $\\angle PRQ \\approx 59.0^\\circ$ or $121.0^\\circ$<br><strong>(ii)</strong> $\\text{Area} \\approx 12.0\\text{ cm}^2$",
                        "feedback": "Check your side length calculation for $PR$. Ensure you use the Sine Rule correctly with the angle $\\angle PQR = 19.0^\\circ$. This should yield $PR \\approx 3.04\\text{ cm}$, leading to an area of $7.8\\text{ cm}^2$."
                }
        ],
        "bradley_insight": {
                "type": "caution",
                "title": "The Head Teacher's Eye: The Ambiguous Case of the Sine Rule",
                "content": "Always be on the lookout for the 'ambiguous case' of the Sine Rule. This occurs when you are given two sides and a non-included acute angle (ASS). Since $\\sin(180^\\circ - \\theta) = \\sin\\theta$, there will always be both an acute solution and an obtuse solution. Read the question carefully to see if one is explicitly selected."
        }
},
{
        "id": "004614",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "AS",
        "major_area": "Coordinate Geometry",
        "topic": "Trigonometry",
        "subtopic": [
                "Pythagoras",
                "Cosine rule"
        ],
        "img": "images/Pure_SVGs/004614.svg",
        "question": "The diagram shows a coordinate grid containing triangle $ABC$ with vertices $A(1, 2)$, $B(5, 5)$, and $C(2, 6)$.<br><br><strong>(i)</strong> Find the exact lengths of the sides $AB$, $BC$, and $AC$.<br><strong>(ii)</strong> Hence find the size of the angle $\\angle ABC$, giving your answer to the nearest degree.",
        "steps": [
                "<strong>(i)</strong> Apply the distance formula $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$:<br><br>• Side $AB$:\\begin{aligned} &AB = \\sqrt{(5 - 1)^2 + (5 - 2)^2} \\cr &\\quad = \\sqrt{4^2 + 3^2} \\cr &\\quad = \\sqrt{16 + 9} \\cr &\\quad = 5 \\end{aligned}",
                "• Side $BC$:\\begin{aligned} &BC = \\sqrt{(2 - 5)^2 + (6 - 5)^2} \\cr &\\quad = \\sqrt{(-3)^2 + 1^2} \\cr &\\quad = \\sqrt{9 + 1} \\cr &\\quad = \\sqrt{10} \\end{aligned}",
                "• Side $AC$:\\begin{aligned} &AC = \\sqrt{(2 - 1)^2 + (6 - 2)^2} \\cr &\\quad = \\sqrt{1^2 + 4^2} \\cr &\\quad = \\sqrt{1 + 16} \\cr &\\quad = \\sqrt{17} \\end{aligned}<br><br>The exact lengths are $AB = 5$, $BC = \\sqrt{10}$, and $AC = \\sqrt{17}$.",
                "<strong>(ii)</strong> Rearrange the Cosine Rule to find $\\angle ABC$:\\begin{aligned} &\\cos(\\angle ABC) \\cr &\\quad = \\dfrac{AB^2 + BC^2 - AC^2}{2(AB)(BC)} \\end{aligned}",
                "Substitute the exact lengths into the formula:\\begin{aligned} &\\cos(\\angle ABC) \\cr &\\quad = \\dfrac{5^2 + (\\sqrt{10})^2 - (\\sqrt{17})^2}{2(5)(\\sqrt{10})} \\cr &\\quad = \\dfrac{25 + 10 - 17}{10\\sqrt{10}} \\cr &\\quad = \\dfrac{18}{10\\sqrt{10}} \\cr &\\quad \\approx 0.569210 \\end{aligned}",
                "Take the inverse cosine to find $\\angle ABC$:\\begin{aligned} &\\angle ABC = \\arccos(0.569210) \\cr &\\quad \\approx 55^\\circ \\end{aligned}",
                "Final Answer: <strong>(i)</strong> $AB = 5$, $BC = \\sqrt{10}$, $AC = \\sqrt{17}$<br><strong>(ii)</strong> $\\angle ABC \\approx 55^\\circ$"
        ],
        "pi_options": [
                {
                        "ans": "<strong>(i)</strong> $AB = 5$, $BC = 10$, $AC = 17$<br><strong>(ii)</strong> $\\angle ABC \\approx 55^\\circ$",
                        "feedback": "Check your side lengths in part <strong>(i)</strong>. The distance formula contains a square root. The exact lengths are $BC = \\sqrt{10}$ and $AC = \\sqrt{17}$, not $10$ and $17$."
                },
                {
                        "ans": "<strong>(i)</strong> $AB = 5$, $BC = \\sqrt{10}$, $AC = \\sqrt{17}$<br><strong>(ii)</strong> $\\angle ABC \\approx 35^\\circ$",
                        "feedback": "Check your rearranged Cosine Rule formula. Make sure you subtract the square of the opposite side ($AC^2 = 17$) in the numerator, not one of the adjacent sides. Forgetting this detail leads to an incorrect angle of $35^\\circ$."
                },
                {
                        "ans": "<strong>(i)</strong> $AB = 5$, $BC = \\sqrt{10}$, $AC = \\sqrt{17}$<br><strong>(ii)</strong> $\\angle ABC \\approx 45^\\circ$",
                        "feedback": "Check your arithmetic in the Cosine Rule simplification. The numerator is $25 + 10 - 17 = 18$. Forgetting to calculate this correctly can lead to incorrect angle results."
                }
        ],
        "bradley_insight": {
                "type": "pro-tip",
                "title": "The Head Teacher's Eye: Keep Surds Exact",
                "content": "When combining coordinate geometry with trigonometry, always keep your side lengths in exact surd form (like $\\sqrt{10}$ and $\\sqrt{17}$). Substituting exact surds into the Cosine Rule makes squaring them trivial and prevents any rounding errors from throwing off your final angle calculation."
        }
},
{
        "id": "004615",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "AS",
        "major_area": "Coordinate Geometry",
        "topic": "Trigonometric Functions",
        "subtopic": [
                "Bearings",
                "Cosine rule"
        ],
        "img": "images/Pure_SVGs/004615.svg",
        "question": "The diagram shows the journey of a ship sailing $15\\text{ km}$ from port $P$ on a bearing of $060^\\circ$ to a point $A$. It then changes course and sails $12\\text{ km}$ on a bearing of $130^\\circ$ to a point $B$.<br><br><strong>(i)</strong> Find the distance of the ship from port $P$ when it is at point $B$, giving your answer to $1$ decimal place.<br><strong>(ii)</strong> Find the bearing of $B$ from port $P$, giving your answer to the nearest degree.",
        "steps": [
                "<strong>(i)</strong> Find the interior angle $\\angle PAB$ using parallel North lines:<br><br>• Alternate angle from the North line at $P$: $060^\\circ$<br><br>• Angle East of South at $A$: $180^\\circ - 130^\\circ = 50^\\circ$<br><br>Summing these angles gives:\\begin{aligned} &\\angle PAB = 60^\\circ + 50^\\circ \\cr &\\quad = 110^\\circ \\end{aligned}",
                "Apply the Cosine Rule to find $PB$:\\begin{aligned} &PB^2 \\cr &\\quad = PA^2 + AB^2 \\cr &\\qquad - 2(PA)(AB)\\cos(\\angle PAB) \\end{aligned}",
                "Substitute the given lengths and interior angle into the formula:\\begin{aligned} &PB^2 \\cr &\\quad = 15^2 + 12^2 \\cr &\\qquad - 2(15)(12)\\cos(110^\\circ) \\cr &\\quad = 225 + 144 \\cr &\\qquad - 360\\cos(110^\\circ) \\cr &\\quad = 369 - 360(-0.342020) \\cr &\\quad = 369 + 123.127 \\cr &\\quad = 492.127 \\end{aligned}",
                "Take the square root of both sides to find $PB$:\\begin{aligned} &PB = \\sqrt{492.127} \\cr &\\quad \\approx 22.2\\text{ km} \\end{aligned}",
                "<strong>(ii)</strong> Apply the Sine Rule to find $\\angle APB$:\\begin{aligned} &\\dfrac{\\sin(\\angle APB)}{12} = \\dfrac{\\sin(110^\\circ)}{22.184} \\cr &\\sin(\\angle APB) \\cr &\\quad = \\dfrac{12\\sin(110^\\circ)}{22.184} \\cr &\\quad \\approx \\dfrac{12(0.939693)}{22.184} \\cr &\\quad \\approx 0.508316 \\end{aligned}",
                "Take the inverse sine to find $\\angle APB$:\\begin{aligned} &\\angle APB = \\arcsin(0.508316) \\cr &\\quad \\approx 30.6^\\circ \\end{aligned}",
                "Calculate the total bearing of $B$ from port $P$:\\begin{aligned} &\\text{Bearing} = 60^\\circ + 30.6^\\circ \\cr &\\quad = 90.6^\\circ \\cr &\\quad \\approx 091^\\circ \\end{aligned}",
                "Final Answer: <strong>(i)</strong> $PB \\approx 22.2\\text{ km}$<br><strong>(ii)</strong> $\\text{Bearing} \\approx 091^\\circ$"
        ],
        "pi_options": [
                {
                        "ans": "<strong>(i)</strong> $PB \\approx 22.2\\text{ km}$<br><strong>(ii)</strong> $\\text{Bearing} \\approx 031^\\circ$",
                        "feedback": "You correctly calculated the interior angle $\\angle APB = 30.6^\\circ$, but remember that bearings are measured clockwise from North. You must add this angle to the initial bearing of $060^\\circ$ to get $091^\\circ$."
                },
                {
                        "ans": "<strong>(i)</strong> $PB \\approx 15.7\\text{ km}$<br><strong>(ii)</strong> $\\text{Bearing} \\approx 091^\\circ$",
                        "feedback": "Check your interior angle $\\angle PAB$. The angle between the bearings is $110^\\circ$. It appears you may have used $\\angle PAB = 70^\\circ$, which leads to an incorrect distance of $15.7\\text{ km}$."
                },
                {
                        "ans": "<strong>(i)</strong> $PB \\approx 22.2\\text{ km}$<br><strong>(ii)</strong> $\\text{Bearing} \\approx 029^\\circ$",
                        "feedback": "Check your sine rule setup. Make sure you use the opposite side $AB = 12\\text{ km}$ to find the angle at $P$. Forgetting this can lead to incorrect intermediate angle values."
                }
        ],
        "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Drawing Bearings parallel lines",
                        "content": "When dealing with bearings, always draw a vertical dashed line representing North at each vertex. This allows you to easily find interior angles of the triangle using parallel line theorems (alternate and co-interior angles). It completely prevents the common slip of misidentifying the interior angle."
        }
},
 {
        "id": "004616",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Functions and Graphs",
        "subtopic": [
                "Graph Transformations"
        ],
        "img": false,
        "question": "The curve $y = \\dfrac{1}{x^2}$ is translated by the vector $\\begin{pmatrix} -3 \\cr 5 \\end{pmatrix}$.<br><br>Write down the equation of the transformed curve.",
        "steps": [
                "A translation represented by the vector $\\begin{pmatrix} a \\cr b \\end{pmatrix}$ has the following algebraic effects on a curve $y = f(x)$:<br><br>• Horizontal shift: a shift of $a$ units in the $x$-direction replaces $x$ with $(x - a)$.<br><br>• Vertical shift: a shift of $b$ units in the $y$-direction adds $b$ to the overall equation.",
                "For the translation vector $\\begin{pmatrix} -3 \\cr 5 \\end{pmatrix}$:<br><br>• The horizontal translation of $-3$ units replaces $x$ with $(x - (-3)) = (x + 3)$.<br><br>• The vertical translation of $5$ units adds $5$ to the overall equation.",
                "Substitute these transformations into the original curve $y = \\dfrac{1}{x^2}$:\\begin{aligned} &y = \\dfrac{1}{(x + 3)^2} + 5 \\end{aligned}",
                "Final Answer: $y = \\dfrac{1}{(x + 3)^2} + 5$"
        ],
        "pi_options": [
                {
                        "ans": "$y = \\dfrac{1}{(x - 3)^2} + 5$",
                        "feedback": "Check the sign of your horizontal transformation. A translation of $-3$ units in the $x$-direction (to the left) corresponds to replacing $x$ with $(x + 3)$, not $(x - 3)$."
                },
                {
                        "ans": "$y = \\dfrac{1}{(x + 3)^2} - 5$",
                        "feedback": "Check the sign of your vertical transformation. A translation of $+5$ units in the $y$-direction (upwards) corresponds to adding $5$ to the overall equation, not subtracting $5$."
                },
                {
                        "ans": "$y = \\dfrac{1}{x^2 + 3} + 5$",
                        "feedback": "When performing a horizontal translation, you must replace the variable $x$ itself with $(x + 3)$. Replacing $x^2$ with $x^2 + 3$ is mathematically incorrect."
                }
        ],
        "bradley_insight": {
                "type": "caution",
                "title": "The Head Teacher's Eye: Horizontal vs. Vertical Signs",
                "content": "Always remember that horizontal transformations often behave in the opposite way to what you might intuitively expect from the sign of the vector. A shift to the left (negative $x$-direction, $-3$) requires adding to $x$: $(x + 3)$. Vertical transformations, however, match the sign of the vector directly: a shift upwards ($+5$) simply adds $5$ to the overall function."
        }
},
{
        "id": "004617",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Functions and Graphs",
        "subtopic": [
                "Graph Transformations"
        ],
        "img": false,
        "question": "The curve $y = x^3 - 2x$ is translated by the vector $\\begin{pmatrix} 2 \\cr -3 \\end{pmatrix}$.<br><br>Find the equation of the transformed curve, giving your answer in a form not involving expanded brackets.",
        "steps": [
                "A translation by the vector $\\begin{pmatrix} a \\cr b \\end{pmatrix}$ has the following algebraic effects on a curve $y = f(x)$:<br><br>• Horizontal shift: replaces every $x$ with $(x - a)$.<br><br>• Vertical shift: adds $b$ to the overall equation.",
                "For the translation vector $\\begin{pmatrix} 2 \\cr -3 \\end{pmatrix}$:<br><br>• The horizontal translation of $+2$ units replaces $x$ with $(x - 2)$ everywhere in the equation.<br><br>• The vertical translation of $-3$ units subtracts $3$ from the overall equation.",
                "Apply these transformations to the original equation $y = x^3 - 2x$, substituting $(x - 2)$ for every occurrence of $x$:\\begin{aligned} &y = (x - 2)^3 - 2(x - 2) - 3 \\end{aligned}",
                "Final Answer: $y = (x - 2)^3 - 2(x - 2) - 3$"
        ],
        "pi_options": [
                {
                        "ans": "$y = (x - 2)^3 - 2x - 3$",
                        "feedback": "When performing a horizontal translation, you must replace every single occurrence of the variable $x$ in the equation with $(x - 2)$. Forgetting to replace the $x$ in the $-2x$ term is a common error."
                },
                {
                        "ans": "$y = (x + 2)^3 - 2(x + 2) - 3$",
                        "feedback": "Check the sign of your horizontal transformation. A translation of $+2$ units in the $x$-direction (to the right) corresponds to replacing $x$ with $(x - 2)$, not $(x + 2)$."
                },
                {
                        "ans": "$y = (x - 2)^3 - 2(x - 2) + 3$",
                        "feedback": "Check the sign of your vertical transformation. A translation of $-3$ units in the $y$-direction (downwards) corresponds to subtracting $3$ from the overall equation, not adding $3$."
                }
        ],
        "bradley_insight": {
                "type": "caution",
                "title": "The Head Teacher's Eye: Replace Every x",
                "content": "A very frequent mistake in exams is replacing only the first $x$ in a multi-term function (such as translating $x^3$ but leaving $-2x$ untouched). To avoid this, mentally place brackets around every single $x$ in your original function before substituting, e.g., $y = (x)^3 - 2(x)$, and then swap each $(x)$ for $(x - a)$."
        }
},
{
        "id": "004618",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Functions and Graphs",
        "subtopic": [
                "Graph Transformations"
        ],
        "img": false,
        "question": "The curve $y = \\sqrt{x}$ is transformed by:<br><br>• a stretch parallel to the $y$-axis with scale factor $3$,<br>• followed by a translation of vector $\\begin{pmatrix} 4 \\cr 1 \\end{pmatrix}$.<br><br>Find the equation of the transformed curve.",
        "steps": [
                "A stretch parallel to the $y$-axis with scale factor $3$ multiplies the entire function by $3$:\\begin{aligned} &y = 3\\sqrt{x} \\end{aligned}",
                "A translation of vector $\\begin{pmatrix} 4 \\cr 1 \\end{pmatrix}$ corresponds to:<br><br>• replacing $x$ with $(x - 4)$ (horizontal translation $4$ units to the right),<br><br>• adding $1$ to the overall function (vertical translation $1$ unit upwards).",
                "Apply the translation to $y = 3\\sqrt{x}$:\\begin{aligned} &y = 3\\sqrt{x - 4} + 1 \\end{aligned}",
                "Final Answer: $y = 3\\sqrt{x - 4} + 1$"
        ],
        "pi_options": [
                {
                        "ans": "$y = 3\\sqrt{x + 4} + 1$",
                        "feedback": "Check the sign of your horizontal translation. A translation of $+4$ units in the $x$-direction (to the right) requires replacing $x$ with $(x - 4)$, not $(x + 4)$."
                },
                {
                        "ans": "$y = \\sqrt{3(x - 4)} + 1$",
                        "feedback": "Check your stretch type. A stretch parallel to the $y$-axis (vertical stretch) affects the outside of the function, multiplying the entire expression by $3$. Multiplying $x$ inside the square root corresponds to a horizontal stretch, which is incorrect."
                },
                {
                        "ans": "$y = 3\\sqrt{x - 4} - 1$",
                        "feedback": "Check the sign of your vertical translation. A translation of $+1$ unit in the $y$-direction (upwards) corresponds to adding $1$ to the function, not subtracting $1$."
                }
        ],
        "bradley_insight": {
                "type": "pro-tip",
                "title": "The Head Teacher's Eye: Order of Transformations",
                "content": "The order in which transformations are applied is critical. If we had translated first and then stretched, the final equation would have been $y = 3(\\sqrt{x - 4} + 1)$, which expands to $y = 3\\sqrt{x - 4} + 3$. Since the stretch was applied before the translation, the scale factor $3$ only multiplies the square root term, giving $y = 3\\sqrt{x - 4} + 1$."
        }
},
{
        "id": "004619",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Functions and Graphs",
        "subtopic": [
                "Graph Transformations"
        ],
        "img": false,
        "question": "The curve $y = 2^x$ is transformed into the curve $y = 2^{x - 3} - 6$.<br><br><strong>(i)</strong> Describe fully the single transformation that maps the first curve onto the second, using vector notation where appropriate.<br><br><strong>(ii)</strong> State the coordinates of the $y$-intercept of the transformed curve.",
        "steps": [
                "<strong>(i)</strong> Compare $y = 2^{x - 3} - 6$ to $y = 2^x$ to identify the individual shifts:<br><br>• Replacing $x$ with $(x - 3)$ corresponds to a horizontal translation of $+3$ units.<br><br>• Adding $-6$ to the function corresponds to a vertical translation of $-6$ units.",
                "Combine these shifts into a single translation vector:\\begin{aligned} &\\begin{pmatrix} 3 \\cr -6 \\end{pmatrix} \\end{aligned}",
                "<strong>(ii)</strong> To find the $y$-intercept, substitute $x = 0$ into the transformed equation:\\begin{aligned} &y = 2^{0 - 3} - 6 \\cr &\\quad = 2^{-3} - 6 \\cr &\\quad = \\dfrac{1}{8} - 6 \\cr &\\quad = \\dfrac{1 - 48}{8} \\cr &\\quad = -\\dfrac{47}{8} \\end{aligned}",
                "State the coordinates of the $y$-intercept:\\begin{aligned} &\\left(0, -\\dfrac{47}{8}\\right) \\end{aligned}",
                "Final Answer: <strong>(i)</strong> Translation vector $\\begin{pmatrix} 3 \\cr -6 \\end{pmatrix}$<br><strong>(ii)</strong> $\\left(0, -\\dfrac{47}{8}\\right)$"
        ],
        "pi_options": [
                {
                        "ans": "<strong>(i)</strong> Translation vector $\\begin{pmatrix} -3 \\cr -6 \\end{pmatrix}$<br><strong>(ii)</strong> $\\left(0, -\\dfrac{47}{8}\\right)$",
                        "feedback": "Check the sign of your horizontal translation. Replacing $x$ with $(x - 3)$ corresponds to a translation of $+3$ units in the $x$-direction (to the right), so the vector is $\\begin{pmatrix} 3 \\cr -6 \\end{pmatrix}$, not $\\begin{pmatrix} -3 \\cr -6 \\end{pmatrix}$."
                },
                {
                        "ans": "<strong>(i)</strong> Translation vector $\\begin{pmatrix} 3 \\cr -6 \\end{pmatrix}$<br><strong>(ii)</strong> $(0, -12)$",
                        "feedback": "Check your calculation for the $y$-intercept. Substituting $x = 0$ into the equation yields $2^{-3} - 6 = \\dfrac{1}{8} - 6$. It appears you may have incorrectly calculated $2^{-3}$ as $-6$."
                },
                {
                        "ans": "<strong>(i)</strong> Translation vector $\\begin{pmatrix} 3 \\cr -6 \\end{pmatrix}$<br><strong>(ii)</strong> $(0, -5)$",
                        "feedback": "Check your evaluation of the negative exponent. Remember that $2^{-3} = \\dfrac{1}{2^3} = \\dfrac{1}{8}$. It appears you may have incorrectly evaluated $2^{-3}$ as $1$."
                }
        ],
        "bradley_insight": {
                "type": "pro-tip",
                "title": "The Head Teacher's Eye: Finding Coordinates of Features",
                "content": "To find key features of any transformed curve, you can either substitute into the final equation directly or apply the transformation vector to the features of the original curve. For $y = 2^x$, the original $y$-intercept is $(0, 1)$. Applying the translation vector $\\begin{pmatrix} 3 \\cr -6 \\end{pmatrix}$ shifts this point to $(3, -5)$, which lies on the new curve, but note that the new $y$-intercept must always have $x = 0$."
        }
},
{
        "id": "004620",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Functions and Graphs",
        "subtopic": [
                "Graph Transformations"
        ],
        "img": false,
        "question": "The curve $y = \\dfrac{3}{x - 2} + 1$ is a transformation of the standard curve $y = \\dfrac{1}{x}$.<br><br>Describe a sequence of two transformations that maps the curve $y = \\dfrac{1}{x}$ onto the curve $y = \\dfrac{3}{x - 2} + 1$.",
        "steps": [
                "To map $y = \\dfrac{1}{x}$ onto $y = \\dfrac{3}{x - 2} + 1$, analyze the operations:<br><br>• Multiplying the function by $3$ corresponds to a vertical stretch parallel to the $y$-axis with scale factor $3$.<br><br>• Replacing $x$ with $(x - 2)$ and adding $1$ corresponds to a translation of $2$ units to the right and $1$ unit upwards.",
                "Structure these into a sequence of two transformations:<br><br><strong>1. Transformation 1:</strong> A stretch parallel to the $y$-axis with scale factor $3$. This maps $y = \\dfrac{1}{x}$ onto $y = \\dfrac{3}{x}$.",
                "<strong>2. Transformation 2:</strong> A translation represented by the column vector $\\begin{pmatrix} 2 \\cr 1 \\end{pmatrix}$. This maps $y = \\dfrac{3}{x}$ onto $y = \\dfrac{3}{x - 2} + 1$.",
                "Final Answer: <strong>1.</strong> Stretch parallel to $y$-axis with scale factor $3$<br><strong>2.</strong> Translation vector $\\begin{pmatrix} 2 \\cr 1 \\end{pmatrix}$"
        ],
        "pi_options": [
                {
                        "ans": "<strong>1.</strong> Stretch parallel to $y$-axis with scale factor $3$<br><strong>2.</strong> Translation vector $\\begin{pmatrix} -2 \\cr 1 \\end{pmatrix}$",
                        "feedback": "Check the sign of your horizontal translation. Replacing $x$ with $(x - 2)$ corresponds to a translation of $+2$ units (to the right), so the translation vector must be $\\begin{pmatrix} 2 \\cr 1 \\end{pmatrix}$, not $\\begin{pmatrix} -2 \\cr 1 \\end{pmatrix}$."
                },
                {
                        "ans": "<strong>1.</strong> Stretch parallel to $x$-axis with scale factor $3$<br><strong>2.</strong> Translation vector $\\begin{pmatrix} 2 \\cr 1 \\end{pmatrix}$",
                        "feedback": "Check your stretch direction. Multiplying on the outside of the function (changing the numerator from $1$ to $3$) is a vertical stretch parallel to the $y$-axis, not a horizontal stretch parallel to the $x$-axis."
                },
                {
                        "ans": "<strong>1.</strong> Stretch parallel to $y$-axis with scale factor $\\dfrac{1}{3}$<br><strong>2.</strong> Translation vector $\\begin{pmatrix} 2 \\cr 1 \\end{pmatrix}$",
                        "feedback": "Check your stretch scale factor. Since the function is multiplied by $3$ on the outside, the scale factor is $3$. A scale factor of $\\dfrac{1}{3}$ would correspond to dividing the function by $3$, which is incorrect."
                }
        ],
        "bradley_insight": {
                "type": "pro-tip",
                "title": "The Head Teacher's Eye: Combining Shifts into Vectors",
                "content": "When a question asks for a sequence of two transformations but there is a horizontal shift, a vertical shift, and a stretch, you can combine the horizontal and vertical shifts into a single translation vector. A translation represented by $\\begin{pmatrix} a \\cr b \\end{pmatrix}$ counts as a single, combined transformation, keeping your sequence perfectly restricted to two steps."
        }
},
 {
        "id": "004621",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "AS",
        "major_area": "Coordinate Geometry",
        "topic": "Trigonometric Functions",
        "subtopic": [
                "Small Angle Approximation"
        ],
        "img": "images/Pure_SVGs/004621.svg",
        "question": "The diagram shows a circle with centre $O$ and radius $1$ unit. Points $A$ and $B$ lie on the circle such that angle $\\angle AOB = \\theta$ radians, where $\\theta$ is a small angle. Point $C$ lies on $AO$ such that $BC$ is perpendicular to $AO$.<br><br>Show that, when $\\theta$ is small, the length of $AC$ can be approximated by:<br><br>\\begin{aligned} &AC \\approx \\dfrac{1}{2}\\theta^2 \\end{aligned}",
        "steps": [
                "Write down the geometric relationships along radius $OA$:\\begin{aligned} &AO = 1 \\cr &OC = AO\\cos\\theta \\cr &OC = \\cos\\theta \\end{aligned}",
                "The segment $AC$ is the difference between $AO$ and $OC$:\\begin{aligned} &AC = AO - OC \\cr &\\quad = 1 - \\cos\\theta \\end{aligned}",
                "Apply the small angle approximation $\\cos\\theta \\approx 1 - \\dfrac{1}{2}\\theta^2$:\\begin{aligned} &AC \\approx 1 - \\left(1 - \\dfrac{1}{2}\\theta^2\\right) \\cr &\\quad \\approx 1 - 1 + \\dfrac{1}{2}\\theta^2 \\cr &\\quad \\approx \\dfrac{1}{2}\\theta^2 \\end{aligned}",
                "Final Answer: $AC \\approx \\dfrac{1}{2}\\theta^2$"
        ],
        "pi_options": [
                {
                        "ans": "$AC \\approx \\theta$",
                        "feedback": "Check your geometric setup along the radius. The segment $OC = \\cos\\theta$, which yields $AC = 1 - \\cos\\theta$. Applying the approximation $\\cos\\theta \\approx 1 - \\dfrac{1}{2}\\theta^2$ yields a quadratic approximation, not a linear one."
                },
                {
                        "ans": "$AC \\approx 1 - \\theta^2$",
                        "feedback": "Check the standard small angle approximation for cosine. The approximation is $\\cos\\theta \\approx 1 - \\dfrac{1}{2}\\theta^2$. Forgetting the factor of $\\dfrac{1}{2}$ leads to an incorrect coefficient of $1$ for the quadratic term."
                },
                {
                        "ans": "$AC \\approx \\dfrac{1}{2}\\theta$",
                        "feedback": "Check your algebraic subtraction. Simplifying $1 - \\left(1 - \\dfrac{1}{2}\\theta^2\\right)$ results in a term proportional to $\\theta^2$, not $\\theta$. Always check that your powers match during algebraic simplification."
                }
        ],
        "bradley_insight": {
                "type": "caution",
                "title": "The Head Teacher's Eye: Geometrical Derivations",
                "content": "When asked to derive a small angle approximation from a diagram, always identify the exact geometric lengths of the segments first using basic right-angled trigonometry (here, $OC = \\cos\\theta$). Only apply the algebraic small angle approximations (like $\\cos\\theta \\approx 1 - \\dfrac{1}{2}\\theta^2$) at the very end of your derivation."
        }
},
{
        "id": "004622",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "AS",
        "major_area": "Coordinate Geometry",
        "topic": "Trigonometric Functions",
        "subtopic": [
               "Small Angle Approximation"
        ],
        "img": false,
        "question": "When $\\theta$ is small, show that the trigonometric expression:<br><br>\\begin{aligned} &\\dfrac{3\\sin\\theta - \\theta\\cos\\theta}{4\\theta + \\tan^2\\theta} \\end{aligned}<br><br>can be approximated by the constant value $\\dfrac{1}{2}$.",
        "steps": [
                "Recall the standard small angle approximations for small $\\theta$ in radians:<br><br>• $\\sin\\theta \\approx \\theta$<br><br>• $\\cos\\theta \\approx 1 - \\dfrac{1}{2}\\theta^2$<br><br>• $\\tan\\theta \\approx \\theta$",
                "Substitute these approximations into the numerator:\\begin{aligned} &3\\sin\\theta - \\theta\\cos\\theta \\cr &\\quad \\approx 3(\\theta) - \\theta\\left(1 - \\dfrac{1}{2}\\theta^2\\right) \\cr &\\quad \\approx 3\\theta - \\theta + \\dfrac{1}{2}\\theta^3 \\cr &\\quad \\approx 2\\theta + \\dfrac{1}{2}\\theta^3 \\end{aligned}",
                "Since $\\theta$ is small, higher-order terms like $\\theta^3$ are negligible compared to linear terms:\\begin{aligned} &3\\sin\\theta - \\theta\\cos\\theta \\approx 2\\theta \\end{aligned}",
                "Substitute the approximations into the denominator:\\begin{aligned} &4\\theta + \\tan^2\\theta \\cr &\\quad \\approx 4\\theta + (\\theta)^2 \\cr &\\quad \\approx 4\\theta + \\theta^2 \\end{aligned}",
                "The quadratic term $\\theta^2$ is negligible compared to the linear term $4\\theta$:\\begin{aligned} &4\\theta + \\tan^2\\theta \\approx 4\\theta \\end{aligned}",
                "Divide the approximated numerator by the approximated denominator:\\begin{aligned} &\\dfrac{3\\sin\\theta - \\theta\\cos\\theta}{4\\theta + \\tan^2\\theta} \\cr &\\quad \\approx \\dfrac{2\\theta}{4\\theta} \\cr &\\quad \\approx \\dfrac{1}{2} \\end{aligned}",
                "Final Answer: $\\dfrac{1}{2}$"
        ],
        "pi_options": [
                {
                        "ans": "$\\dfrac{3}{4}$",
                        "feedback": "Check your expansion of the numerator. The term $\\theta\\cos\\theta \\approx \\theta(1)$, which gives $\\theta$. Subtracting this from $3\\sin\\theta \\approx 3\\theta$ yields $2\\theta$ in the numerator, not $3\\theta$. This error leads to an incorrect constant ratio of $\\dfrac{3}{4}$."
                },
                {
                        "ans": "$\\dfrac{1}{4}$",
                        "feedback": "Check your numerator subtraction. It appears you evaluated $3\\sin\\theta - \\theta\\cos\\theta \\approx 3\\theta - 2\\theta$, giving $\\theta$. Note that $\\theta\\cos\\theta \\approx \\theta$, so the numerator simplifies to $3\\theta - \\theta = 2\\theta$."
                },
                {
                        "ans": "$1$",
                        "feedback": "Ensure you correctly keep the coefficients of your leading linear terms. The ratio simplifies to $\\dfrac{2\\theta}{4\\theta}$, which reduces to the constant fraction $\\dfrac{1}{2}$, not $1$."
                }
        ],
        "bradley_insight": {
                "type": "caution",
                "title": "The Head Teacher's Eye: Ignoring Higher-Order Terms",
                "content": "When simplifying small angle fractions, always focus on the lowest-power (leading) terms of the numerator and denominator. For very small values of $\\theta$, higher-power terms (like $\\theta^2$ or $\\theta^3$) shrink much faster than linear terms (like $\\theta$), making them mathematically negligible in the final limit."
        }
},
{
        "id": "004623",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "AS",
        "major_area": "Coordinate Geometry",
        "topic": "Trigonometric Functions",
        "subtopic": [
                "Small Angle Approximation"
        ],
        "img": false,
        "question": "Show that, when $\\theta$ is small, the expression:<br><br>\\begin{aligned} &2\\cos\\theta + \\sin\\theta\\tan(2\\theta) \\end{aligned}<br><br>can be approximated by $a + b\\theta^2$, where $a$ and $b$ are integers to be found.",
        "steps": [
                "Recall the standard small angle approximations:<br><br>• $\\cos\\theta \\approx 1 - \\dfrac{1}{2}\\theta^2$<br><br>• $\\sin\\theta \\approx \\theta$<br><br>• $\\tan(2\\theta) \\approx 2\\theta$",
                "Approximate each term of the expression:<br><br>• First term:\\begin{aligned} &2\\cos\\theta \\cr &\\quad \\approx 2\\left(1 - \\dfrac{1}{2}\\theta^2\\right) \\cr &\\quad \\approx 2 - \\theta^2 \\end{aligned}<br><br>• Second term:\\begin{aligned} &\\sin\\theta\\tan(2\\theta) \\cr &\\quad \\approx (\\theta)(2\\theta) \\cr &\\quad \\approx 2\\theta^2 \\end{aligned}",
                "Add the two term approximations together:\\begin{aligned} &2\\cos\\theta + \\sin\\theta\\tan(2\\theta) \\cr &\\quad \\approx (2 - \\theta^2) + 2\\theta^2 \\cr &\\quad \\approx 2 + \\theta^2 \\end{aligned}<br><br>This is in the form $a + b\\theta^2$ with $a = 2$ and $b = 1$.",
                "Final Answer: $2 + \\theta^2$"
        ],
        "pi_options": [
                {
                        "ans": "$2 - 3\\theta^2$",
                        "feedback": "Check your signs when combining the quadratic terms. You should calculate $-\\theta^2 + 2\\theta^2 = +\\theta^2$. It appears you may have subtracted $2\\theta^2$ instead of adding it, leading to the incorrect coefficient of $-3$."
                },
                {
                        "ans": "$2 - \\theta^2$",
                        "feedback": "Check your second term approximation. Forgetting the second term entirely or assuming its product is negligible leads to the incorrect approximation $2 - \\theta^2$. The product $\\sin\\theta\\tan(2\\theta) \\approx 2\\theta^2$ is quadratic and must be included."
                },
                {
                        "ans": "$2 + 2\\theta^2$",
                        "feedback": "Check your expansion of $2\\cos\\theta$. Multiplying $2\\left(1 - \\dfrac{1}{2}\\theta^2\\right)$ yields $2 - \\theta^2$. Forgetting to distribute the $2$ to the quadratic term of the cosine approximation leads to an incorrect final sum."
                }
        ],
        "bradley_insight": {
                "type": "pro-tip",
                "title": "The Head Teacher's Eye: Scaling Trig Arguments",
                "content": "Be careful when applying approximations to scaled arguments, such as $\\tan(2\\theta)$. Since $\\tan(x) \\approx x$, substituting $x = 2\\theta$ yields $\\tan(2\\theta) \\approx 2\\theta$. Always substitute the entire scaled argument directly into the standard approximation formulas."
        }
},
{
        "id": "004624",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "AS",
        "major_area": "Coordinate Geometry",
        "topic": "Trigonometric Functions",
        "subtopic": [
                "Small Angle Approximation"
        ],
        "img": false,
        "question": "When $\\theta$ is small, show that the expression:<br><br>\\begin{aligned} &\\dfrac{4\\cos(2\\theta) - 4}{\\theta\\sin(3\\theta)} \\end{aligned}<br><br>approximates to a constant rational value, and state this value.",
        "steps": [
                "Recall the small angle approximations for the scaled terms:<br><br>• $\\cos(2\\theta) \\approx 1 - \\dfrac{1}{2}(2\\theta)^2$<br><br>• $\\sin(3\\theta) \\approx 3\\theta$",
                "Simplify the cosine term for the numerator:\\begin{aligned} &\\cos(2\\theta) \\cr &\\quad \\approx 1 - \\dfrac{1}{2}(4\\theta^2) \\cr &\\quad \\approx 1 - 2\\theta^2 \\end{aligned}",
                "Substitute this into the numerator:\\begin{aligned} &4\\cos(2\\theta) - 4 \\cr &\\quad \\approx 4(1 - 2\\theta^2) - 4 \\cr &\\quad \\approx 4 - 8\\theta^2 - 4 \\cr &\\quad \\approx -8\\theta^2 \\end{aligned}",
                "Substitute the sine approximation into the denominator:\\begin{aligned} &\\theta\\sin(3\\theta) \\cr &\\quad \\approx \\theta(3\\theta) \\cr &\\quad \\approx 3\\theta^2 \\end{aligned}",
                "Divide the approximated numerator by the denominator:\\begin{aligned} &\\dfrac{4\\cos(2\\theta) - 4}{\\theta\\sin(3\\theta)} \\cr &\\quad \\approx \\dfrac{-8\\theta^2}{3\\theta^2} \\cr &\\quad \\approx -\\dfrac{8}{3} \\end{aligned}",
                "Final Answer: $-\\dfrac{8}{3}$"
        ],
        "pi_options": [
                {
                        "ans": "$-\\dfrac{2}{3}$",
                        "feedback": "Check your squaring of the scaled argument in the cosine approximation. The term $(2\\theta)^2 = 4\\theta^2$. Forgetting to square the coefficient $2$ leads to $\\cos(2\\theta) \\approx 1 - \\theta^2$, which yields an incorrect numerator of $-4\\theta^2$ and a final ratio of $-\\dfrac{2}{3}$."
                },
                {
                        "ans": "$\\dfrac{8}{3}$",
                        "feedback": "Check your signs in the numerator. Expanding $4(1 - 2\\theta^2) - 4$ yields $-8\\theta^2$. Forgetting the negative sign leads to an incorrect positive ratio of $\\dfrac{8}{3}$."
                },
                {
                        "ans": "$-\\dfrac{4}{3}$",
                        "feedback": "Check your numerator arithmetic. It appears you may have neglected the multiplier $4$ in front of the cosine term when evaluating the quadratic, leading to $-4\\theta^2$ in the numerator."
                }
        ],
        "bradley_insight": {
                "type": "caution",
                "title": "The Head Teacher's Eye: Squaring the Bracket",
                "content": "A very frequent slip in exams is writing $\\cos(kx) \\approx 1 - \\dfrac{1}{2}kx^2$ instead of $1 - \\dfrac{1}{2}(kx)^2$. Remember that the entire scaled argument $kx$ must be squared, which changes the coefficient of $x^2$ by a factor of $k^2$."
        }
},
{
        "id": "004625",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "AS",
        "major_area": "Coordinate Geometry",
        "topic": "Trigonometric Functions",
        "subtopic": [
                "Small Angle Approximation"
        ],
        "img": false,
        "question": "In a right-angled triangle $ABC$, the angle $\\angle ABC = 90^\\circ$ and the angle $\\angle BAC = \\theta$ radians, where $\\theta$ is small. The hypotenuse $AC$ has a constant length of $10\\text{ cm}$.<br><br><strong>(i)</strong> Show that the difference between the hypotenuse $AC$ and the adjacent side $AB$ is given by $10 - 10\\cos\\theta$.<br><br><strong>(ii)</strong> Hence show that when $\\theta$ is small, this difference can be approximated by $5\\theta^2$.",
        "steps": [
                "<strong>(i)</strong> Write down the trigonometric ratio for cosine in triangle $ABC$:\\begin{aligned} &\\cos\\theta = \\dfrac{\\text{Adjacent}}{\\text{Hypotenuse}} \\cr &\\cos\\theta = \\dfrac{AB}{AC} \\cr &\\cos\\theta = \\dfrac{AB}{10} \\end{aligned}",
                "Rearrange to make the adjacent side $AB$ the subject:\\begin{aligned} &AB = 10\\cos\\theta \\end{aligned}",
                "Find the difference between hypotenuse $AC$ and adjacent side $AB$:\\begin{aligned} &\\text{Difference} = AC - AB \\cr &\\quad = 10 - 10\\cos\\theta \\end{aligned}",
                "<strong>(ii)</strong> Apply the small angle approximation $\\cos\\theta \\approx 1 - \\dfrac{1}{2}\\theta^2$:\\begin{aligned} &10 - 10\\cos\\theta \\cr &\\quad \\approx 10 - 10\\left(1 - \\dfrac{1}{2}\\theta^2\\right) \\cr &\\quad \\approx 10 - 10 + 5\\theta^2 \\cr &\\quad \\approx 5\\theta^2 \\end{aligned}",
                "Final Answer: <strong>(i)</strong> $AC - AB = 10 - 10\\cos\\theta$<br><strong>(ii)</strong> $5\\theta^2$"
        ],
        "pi_options": [
                {
                        "ans": "<strong>(i)</strong> $AC - AB = 10 - 10\\sin\\theta$<br><strong>(ii)</strong> $10 - 10\\theta$",
                        "feedback": "Remember that the adjacent side $AB$ is related to the hypotenuse $AC$ via the cosine ratio, not the sine ratio. Using the sine ratio corresponds to the opposite side $BC$, which is incorrect."
                },
                {
                        "ans": "<strong>(i)</strong> $AC - AB = 10 - 10\\cos\\theta$<br><strong>(ii)</strong> $10\\theta^2$",
                        "feedback": "Check your expansion in part <strong>(ii)</strong>. When multiplying out $-10\\left(1 - \\dfrac{1}{2}\\theta^2\\right)$, you must multiply $\\dfrac{1}{2}$ by $10$ to yield $5\\theta^2$, not $10\\theta^2$."
                },
                {
                        "ans": "<strong>(i)</strong> $AC - AB = 10 - 10\\cos\\theta$<br><strong>(ii)</strong> $10 - 5\\theta^2$",
                        "feedback": "Check your signs when distributing the negative multiplier $-10$ across the brackets. The constant term simplifies as $10 - 10 = 0$, which leaves only the positive quadratic term $+5\\theta^2$."
                }
        ],
        "bradley_insight": {
                "type": "pro-tip",
                "title": "The Head Teacher's Eye: Right-Angled Small Angles",
                "content": "This geometric question beautifully illustrates how small angles affect right-angled triangles. When $\\theta$ is very small, the adjacent side $AB$ becomes almost equal in length to the hypotenuse $AC$. The tiny difference between them is a quadratic curve approximated by $5\\theta^2$."
        }
},
{
        "id": "004626",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "A",
        "major_area": "Differentiation",
        "topic": "Applications of Differentiation",
        "subtopic": [
                "Curved Graphs",
                "Differentiation"
        ],
        "img": "images/Pure_SVGs/004626.svg",
        "question": "In this question you must show detailed reasoning.<br><br>A curve has equation $y = x - 3 + \\dfrac{1}{x - 4}$.<br>The curve is shown in the diagram.<br><br><strong>(i)</strong> Determine the coordinates of the stationary points on the curve.<br><strong>(ii)</strong> Determine the nature of each stationary point.<br><strong>(iii)</strong> Write down the equation of the vertical asymptote.<br><strong>(iv)</strong> Deduce the set of values of $x$ for which the curve is concave upwards.",
        "steps": [
                "<strong>(i) Finding the stationary points:</strong><br>Differentiate $y = x - 3 + \\dfrac{1}{x - 4}$ with respect to $x$:\\begin{aligned} &\\dfrac{\\text{d}y}{\\text{d}x} = 1 - \\dfrac{1}{(x - 4)^2} \\end{aligned}",
                "Set $\\dfrac{\\text{d}y}{\\text{d}x} = 0$ to find stationary points:\\begin{aligned} &1 - \\dfrac{1}{(x - 4)^2} = 0 \\cr &\\dfrac{1}{(x - 4)^2} = 1 \\cr &(x - 4)^2 = 1 \\cr &x - 4 = \\pm 1 \\end{aligned}",
                "This gives two values for $x$:<br><br>• $x - 4 = 1 \\implies x = 5$<br><br>• $x - 4 = -1 \\implies x = 3$",
                "Find the $y$-coordinates by substituting into the curve equation:<br><br>• For $x = 5$:\\begin{aligned} &y = 5 - 3 + \\dfrac{1}{5 - 4} \\cr &\\quad = 2 + 1 \\cr &\\quad = 3 \\end{aligned}<br><br>• For $x = 3$:\\begin{aligned} &y = 3 - 3 + \\dfrac{1}{3 - 4} \\cr &\\quad = 0 - 1 \\cr &\\quad = -1 \\end{aligned}<br><br>Thus, the stationary points are $(5, 3)$ and $(3, -1)$.",
                "<strong>(ii) Determining the nature of each stationary point:</strong><br>Find the second derivative:\\begin{aligned} &\\dfrac{\\text{d}^2y}{\\text{d}x^2} = \\dfrac{2}{(x - 4)^3} \\end{aligned}",
                "Evaluate at each stationary point:<br><br>• At $x = 5$:\\begin{aligned} &\\dfrac{\\text{d}^2y}{\\text{d}x^2} = \\dfrac{2}{(5 - 4)^3} \\cr &\\quad = 2 \\end{aligned}<br>Since $2 > 0$, $(5, 3)$ is a <strong>local minimum</strong>.<br><br>• At $x = 3$:\\begin{aligned} &\\dfrac{\\text{d}^2y}{\\text{d}x^2} = \\dfrac{2}{(3 - 4)^3} \\cr &\\quad = -2 \\end{aligned}<br>Since $-2 < 0$, $(3, -1)$ is a <strong>local maximum</strong>.",
                "<strong>(iii) Equation of the vertical asymptote:</strong><br>The curve is undefined when the denominator is zero:\\begin{aligned} &x - 4 = 0 \\cr &x = 4 \\end{aligned}<br><br>Therefore, the vertical asymptote is $x = 4$.",
                "<strong>(iv) Finding where the curve is concave upwards:</strong><br>A curve is concave upwards when $\\dfrac{\\text{d}^2y}{\\text{d}x^2} > 0$:\\begin{aligned} &\\dfrac{2}{(x - 4)^3} > 0 \\end{aligned}",
                "Since the numerator $2$ is positive, this requires:\\begin{aligned} &(x - 4)^3 > 0 \\cr &x - 4 > 0 \\cr &x > 4 \\end{aligned}<br><br>Thus, the curve is concave upwards for $x > 4$.",
                "Final Answer: Local minimum at $(5, 3)$, concave upwards for $x > 4$"
        ],
        "pi_options": [
                {
                        "ans": "Local minimum at $(3, -1)$, concave upwards for $x < 4$",
                        "feedback": "This option confuses the local maximum with the local minimum, and incorrectly identifies the region of concavity by solving for when the second derivative is negative rather than positive."
                },
                {
                        "ans": "Local minimum at $(5, 3)$, concave upwards for $x > 3$",
                        "feedback": "While the coordinates of the local minimum are correct, the boundary for concavity is incorrect. The vertical asymptote is at $x = 4$, which is where the second derivative changes sign, not at $x = 3$."
                },
                {
                        "ans": "Local minimum at $(5, 3)$, concave upwards for $x < 4$",
                        "feedback": "The coordinates of the local minimum are correct, but the inequality for concavity is reversed, representing the region where the curve is concave downwards."
                }
        ],
        "bradley_insight": {
                "type": "caution",
                "title": "The Head Teacher's Eye: Asymptotes and Signs",
                "content": "When calculating concavity using the second derivative $\\dfrac{2}{(x - 4)^3}$, always keep in mind that $x = 4$ is a vertical asymptote where the function is undefined. The curve can never be concave upwards at $x = 4$. Make sure to exclude the asymptote value from your final domain of concavity."
        }
},
{
        "id": "004627",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "A",
        "major_area": "Differentiation",
        "topic": "Applications of Differentiation",
        "subtopic": [
                "Curved Graphs",
                "Differentiation"
        ],
        "img": "images/Pure_SVGs/004627.svg",
        "question": "In this question you must show detailed reasoning.<br><br>A curve has equation $y = 2x - 1 + \\dfrac{8}{x - 1}$.<br>The curve is shown in the diagram.<br><br><strong>(i)</strong> Determine the coordinates of the stationary points on the curve.<br><strong>(ii)</strong> Determine the nature of each stationary point.<br><strong>(iii)</strong> Write down the equation of the vertical asymptote.<br><strong>(iv)</strong> Deduce the set of values of $x$ for which the curve is concave upwards.",
        "steps": [
                "<strong>(i) Finding the stationary points:</strong><br>Differentiate $y = 2x - 1 + \\dfrac{8}{x - 1}$ with respect to $x$:\\begin{aligned} &\\dfrac{\\text{d}y}{\\text{d}x} = 2 - \\dfrac{8}{(x - 1)^2} \\end{aligned}",
                "Set $\\dfrac{\\text{d}y}{\\text{d}x} = 0$ to find the stationary points:\\begin{aligned} &2 - \\dfrac{8}{(x - 1)^2} = 0 \\cr &\\dfrac{8}{(x - 1)^2} = 2 \\cr &(x - 1)^2 = 4 \\cr &x - 1 = \\pm 2 \\end{aligned}",
                "This yields two $x$-values:<br><br>• $x - 1 = 2 \\implies x = 3$<br><br>• $x - 1 = -2 \\implies x = -1$",
                "Substitute into the original curve equation to find $y$:<br><br>• For $x = 3$:\\begin{aligned} &y = 2(3) - 1 + \\dfrac{8}{3 - 1} \\cr &\\quad = 5 + 4 \\cr &\\quad = 9 \\end{aligned}<br><br>• For $x = -1$:\\begin{aligned} &y = 2(-1) - 1 + \\dfrac{8}{-1 - 1} \\cr &\\quad = -3 - 4 \\cr &\\quad = -7 \\end{aligned}<br><br>Thus, the stationary points are $(3, 9)$ and $(-1, -7)$.",
                "<strong>(ii) Determining the nature of each stationary point:</strong><br>Find the second derivative:\\begin{aligned} &\\dfrac{\\text{d}^2y}{\\text{d}x^2} = \\dfrac{16}{(x - 1)^3} \\end{aligned}",
                "Evaluate at each stationary point:<br><br>• At $x = 3$:\\begin{aligned} &\\dfrac{\\text{d}^2y}{\\text{d}x^2} = \\dfrac{16}{(3 - 1)^3} \\cr &\\quad = 2 \\end{aligned}<br>Since $2 > 0$, $(3, 9)$ is a <strong>local minimum</strong>.<br><br>• At $x = -1$:\\begin{aligned} &\\dfrac{\\text{d}^2y}{\\text{d}x^2} = \\dfrac{16}{(-1 - 1)^3} \\cr &\\quad = -2 \\end{aligned}<br>Since $-2 < 0$, $(-1, -7)$ is a <strong>local maximum</strong>.",
                "<strong>(iii) Equation of the vertical asymptote:</strong><br>The vertical asymptote occurs where the denominator is zero:\\begin{aligned} &x - 1 = 0 \\cr &x = 1 \\end{aligned}<br><br>So the vertical asymptote is $x = 1$.",
                "<strong>(iv) Finding where the curve is concave upwards:</strong><br>The curve is concave upwards when $\\dfrac{\\text{d}^2y}{\\text{d}x^2} > 0$:\\begin{aligned} &\\dfrac{16}{(x - 1)^3} > 0 \\end{aligned}",
                "Since the numerator is positive, this requires:\\begin{aligned} &(x - 1)^3 > 0 \\cr &x - 1 > 0 \\cr &x > 1 \\end{aligned}<br><br>Thus, the curve is concave upwards for $x > 1$.",
                "Final Answer: Local minimum at $(3, 9)$, concave upwards for $x > 1$"
        ],
        "pi_options": [
                {
                        "ans": "Local minimum at $(-1, -7)$, concave upwards for $x < 1$",
                        "feedback": "This option confuses the local maximum with the local minimum and reverses the inequality of the concavity region."
                },
                {
                        "ans": "Local minimum at $(3, 9)$, concave upwards for $x > 2$",
                        "feedback": "While the stationary point is correct, the concavity interval is incorrect. The vertical asymptote at $x = 1$ is where the second derivative changes sign, not at $x = 2$."
                },
                {
                        "ans": "Local minimum at $(3, 9)$, concave upwards for $x < 1$",
                        "feedback": "The coordinates and nature of the stationary point are correct, but the second derivative is positive when $x - 1 > 0$, which corresponds to $x > 1$, not $x < 1$."
                }
        ],
        "bradley_insight": {
                "type": "pro-tip",
                "title": "The Head Teacher's Eye: Differentiating Efficiently",
                "content": "When given a function such as $y = 2x - 1 + \\dfrac{8}{x - 1}$, differentiating it term-by-term using the chain rule on $8(x - 1)^{-1}$ is much faster and less prone to sign errors than rewriting the equation as a single quotient and using the quotient rule."
        }
},
{
        "id": "004628",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "A",
        "major_area": "Differentiation",
        "topic": "Applications of Differentiation",
        "subtopic": [
                "Curved Graphs",
                "Differentiation"
        ],
        "img": "images/Pure_SVGs/004628.svg",
        "question": "In this question you must show detailed reasoning.<br><br>A curve has equation $y = \\dfrac{x^2 + 3}{x - 1}$.<br>The curve is shown in the diagram.<br><br><strong>(i)</strong> Express the equation of the curve in the form $y = ax + b + \\dfrac{c}{x - 1}$, where $a$, $b$, and $c$ are integers.<br><strong>(ii)</strong> Determine the coordinates and nature of the stationary points on the curve.<br><strong>(iii)</strong> State the equation of the vertical asymptote.<br><strong>(iv)</strong> Deduce the set of values of $x$ for which the curve is concave upwards.",
        "steps": [
                "<strong>(i) Expressing the curve in the given form:</strong><br>Rewrite the numerator $x^2 + 3$ to facilitate division by $(x - 1)$:\\begin{aligned} &x^2 + 3 \\cr &\\quad = (x^2 - 1) + 4 \\cr &\\quad = (x - 1)(x + 1) + 4 \\end{aligned}",
                "Divide each term by $(x - 1)$:\\begin{aligned} &y = \\dfrac{(x - 1)(x + 1) + 4}{x - 1} \\cr &\\quad = x + 1 + \\dfrac{4}{x - 1} \\end{aligned}<br><br>Thus, $a = 1$, $b = 1$, and $c = 4$.",
                "<strong>(ii) Finding coordinates and nature of stationary points:</strong><br>Differentiate $y = x + 1 + 4(x - 1)^{-1}$ with respect to $x$:\\begin{aligned} &\\dfrac{\\text{d}y}{\\text{d}x} = 1 - \\dfrac{4}{(x - 1)^2} \\end{aligned}",
                "Set the derivative to $0$:\\begin{aligned} &1 - \\dfrac{4}{(x - 1)^2} = 0 \\cr &(x - 1)^2 = 4 \\cr &x - 1 = \\pm 2 \\end{aligned}",
                "This gives:<br><br>• $x - 1 = 2 \\implies x = 3$<br><br>• $x - 1 = -2 \\implies x = -1$",
                "Substitute into $y = x + 1 + \\dfrac{4}{x - 1}$ to find the $y$-coordinates:<br><br>• For $x = 3$:\\begin{aligned} &y = 3 + 1 + \\dfrac{4}{3 - 1} \\cr &\\quad = 4 + 2 \\cr &\\quad = 6 \\end{aligned}<br><br>• For $x = -1$:\\begin{aligned} &y = -1 + 1 + \\dfrac{4}{-1 - 1} \\cr &\\quad = 0 - 2 \\cr &\\quad = -2 \\end{aligned}",
                "Find the second derivative to determine their nature:\\begin{aligned} &\\dfrac{\\text{d}^2y}{\\text{d}x^2} = \\dfrac{8}{(x - 1)^3} \\end{aligned}",
                "Evaluate at each point:<br><br>• At $x = 3$:\\begin{aligned} &\\dfrac{\\text{d}^2y}{\\text{d}x^2} = \\dfrac{8}{(3 - 1)^3} \\cr &\\quad = 1 \\end{aligned}<br>Since $1 > 0$, $(3, 6)$ is a <strong>local minimum</strong>.<br><br>• At $x = -1$:\\begin{aligned} &\\dfrac{\\text{d}^2y}{\\text{d}x^2} = \\dfrac{8}{(-1 - 1)^3} \\cr &\\quad = -1 \\end{aligned}<br>Since $-1 < 0$, $(-1, -2)$ is a <strong>local maximum</strong>.",
                "<strong>(iii) Finding the vertical asymptote:</strong><br>The curve is undefined when the denominator is zero:\\begin{aligned} &x - 1 = 0 \\cr &x = 1 \\end{aligned}<br><br>Thus, the equation of the vertical asymptote is $x = 1$.",
                "<strong>(iv) Finding where the curve is concave upwards:</strong><br>The curve is concave upwards when $\\dfrac{\\text{d}^2y}{\\text{d}x^2} > 0$:\\begin{aligned} &\\dfrac{8}{(x - 1)^3} > 0 \\end{aligned}",
                "Since the numerator is positive, this requires:\\begin{aligned} &(x - 1)^3 > 0 \\cr &x - 1 > 0 \\cr &x > 1 \\end{aligned}<br><br>So the curve is concave upwards for $x > 1$.",
                "Final Answer: Local minimum at $(3, 6)$, concave upwards for $x > 1$"
        ],
        "pi_options": [
                {
                        "ans": "Local minimum at $(3, 6)$, concave upwards for $x > 3$",
                        "feedback": "While the stationary point is correct, the concavity interval is incorrect. The vertical asymptote is at $x = 1$, which is where the second derivative changes sign, not at $x = 3$."
                },
                {
                        "ans": "Local minimum at $(3, 6)$, concave upwards for $x < 1$",
                        "feedback": "The coordinates of the local minimum are correct, but the second derivative is positive only for $x > 1$. Therefore, the curve is concave upwards for $x > 1$ rather than $x < 1$."
                },
                {
                        "ans": "Local minimum at $(-1, -2)$, concave upwards for $x > 1$",
                        "feedback": "This option incorrectly identifies the point $(-1, -2)$ as a local minimum. Since the second derivative at $x = -1$ is negative, it is actually a local maximum."
                }
        ],
        "bradley_insight": {
                "type": "deeper",
                "title": "The Head Teacher's Eye: Splitting Fractions",
                "content": "When faced with an improper algebraic fraction where the degree of the numerator is exactly one higher than that of the denominator, performing algebraic division first to write the curve as $x + 1 + \\dfrac{4}{x - 1}$ is a massive timesaver. It not only makes differentiation incredibly direct but also immediately reveals both the vertical and slant asymptotes."
        }
},
{
        "id": "004629",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "A",
        "major_area": "Differentiation",
        "topic": "Applications of Differentiation",
        "subtopic": [
                "Curved Graphs",
                "Differentiation",
                "Exponential and Logarithmic Functions and Graphs"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A curve has equation $y = x - 2\\ln(x - 1)$, defined for $x > 1$.<br><br><strong>(i)</strong> Determine the coordinates of the stationary point on the curve.<br><strong>(ii)</strong> Determine the nature of this stationary point.<br><strong>(iii)</strong> Write down the equation of the vertical asymptote.<br><strong>(iv)</strong> Determine the set of values of $x$ for which the curve is concave upwards.",
        "steps": [
                "<strong>(i) Finding the coordinates of the stationary point:</strong><br>Differentiate $y = x - 2\\ln(x - 1)$ with respect to $x$ for $x > 1$:\\begin{aligned} &\\dfrac{\\text{d}y}{\\text{d}x} = 1 - \\dfrac{2}{x - 1} \\end{aligned}",
                "Set $\\dfrac{\\text{d}y}{\\text{d}x} = 0$ to find stationary points:\\begin{aligned} &1 - \\dfrac{2}{x - 1} = 0 \\cr &\\dfrac{2}{x - 1} = 1 \\cr &x - 1 = 2 \\cr &x = 3 \\end{aligned}",
                "Substitute $x = 3$ into the curve equation:\\begin{aligned} &y = 3 - 2\\ln(3 - 1) \\cr &\\quad = 3 - 2\\ln 2 \\end{aligned}<br><br>Thus, the stationary point is $(3, 3 - 2\\ln 2)$.",
                "<strong>(ii) Determining the nature of the stationary point:</strong><br>Find the second derivative:\\begin{aligned} &\\dfrac{\\text{d}^2y}{\\text{d}x^2} = \\dfrac{2}{(x - 1)^2} \\end{aligned}",
                "Evaluate at $x = 3$:\\begin{aligned} &\\dfrac{\\text{d}^2y}{\\text{d}x^2} = \\dfrac{2}{(3 - 1)^2} \\cr &\\quad = \\dfrac{2}{4} \\cr &\\quad = \\dfrac{1}{2} \\end{aligned}<br><br>Since $\\dfrac{1}{2} > 0$, the curve is concave upwards at this point, so $(3, 3 - 2\\ln 2)$ is a <strong>local minimum</strong>.",
                "<strong>(iii) Equation of the vertical asymptote:</strong><br>As $x \\to 1^+$, $(x - 1) \\to 0^+$, which means $\\ln(x - 1) \\to -\\infty$ and $y \\to +\\infty$.<br><br>Thus, the line $x = 1$ is a vertical asymptote.",
                "<strong>(iv) Determining where the curve is concave upwards:</strong><br>A curve is concave upwards when $\\dfrac{\\text{d}^2y}{\\text{d}x^2} > 0$:\\begin{aligned} &\\dfrac{2}{(x - 1)^2} > 0 \\end{aligned}",
                "Since $(x - 1)^2 > 0$ for all $x > 1$, the expression $\\dfrac{2}{(x - 1)^2}$ is strictly positive on the entire domain.<br><br>Therefore, the curve is concave upwards for all $x > 1$.",
                "Final Answer: Local minimum at $(3, 3 - 2\\ln 2)$, concave upwards for all $x > 1$"
        ],
        "pi_options": [
                {
                        "ans": "Local minimum at $(2, 2)$, concave upwards for all $x > 1$",
                        "feedback": "This option uses an incorrect x-coordinate for the stationary point. Setting the first derivative to $0$ yields $x - 1 = 2 \\implies x = 3$, not $x = 2$."
                },
                {
                        "ans": "Local maximum at $(3, 3 - 2\\ln 2)$, concave upwards for all $x > 1$",
                        "feedback": "This option incorrectly identifies the turning point as a local maximum. At $x = 3$, the second derivative evaluates to a positive value ($0.5 > 0$), confirming the point is a local minimum."
                },
                {
                        "ans": "Local minimum at $(3, 3 - 2\\ln 2)$, concave upwards for $x > 3$",
                        "feedback": "While the coordinates are correct, the interval of concavity is restricted unnecessarily. Since the second derivative is positive on the function's entire domain, the curve is concave upwards for all $x > 1$."
                }
        ],
        "bradley_insight": {
                "type": "caution",
                "title": "The Head Teacher's Eye: Domain Boundaries",
                "content": "When working with logarithmic functions, always check the domain constraints. The term $\\ln(x - 1)$ requires that $x > 1$. Any turning points or concavity intervals you find must lie strictly within this domain."
        }
},
{
        "id": "004630",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "A",
        "major_area": "Differentiation",
        "topic": "Applications of Differentiation",
        "subtopic": [
                "Trigonometry"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A curve has equation $y = \\tan x - 2x$, defined on the domain $0 < x < \\pi$, $x \\neq \\dfrac{\\pi}{2}$.<br><br><strong>(i)</strong> Determine the coordinates of the stationary points on the curve, giving your answers in terms of $\\pi$.<br><strong>(ii)</strong> Determine the nature of each stationary point.<br><strong>(iii)</strong> State the equation of the vertical asymptote on this domain.<br><strong>(iv)</strong> Determine the set of values of $x$ on this domain for which the curve is concave upwards.",
        "steps": [
                "<strong>(i) Finding the coordinates of the stationary points:</strong><br>Differentiate $y = \\tan x - 2x$ with respect to $x$:\\begin{aligned} &\\dfrac{\\text{d}y}{\\text{d}x} = \\sec^2 x - 2 \\end{aligned}",
                "Set the derivative to $0$ to find stationary points:\\begin{aligned} &\\sec^2 x - 2 = 0 \\cr &\\sec^2 x = 2 \\cr &\\cos^2 x = \\dfrac{1}{2} \\cr &\\cos x = \\pm \\dfrac{1}{\\sqrt{2}} \\end{aligned}",
                "On the domain $0 < x < \\pi$, there are two solutions:<br><br>• $\\cos x = \\dfrac{1}{\\sqrt{2}} \\implies x = \\dfrac{\\pi}{4}$<br><br>• $\\cos x = -\\dfrac{1}{\\sqrt{2}} \\implies x = \\dfrac{3\\pi}{4}$",
                "Find the corresponding $y$-coordinates:<br><br>• For $x = \\dfrac{\\pi}{4}$:\\begin{aligned} &y = \\tan\\left(\\dfrac{\\pi}{4}\\right) - 2\\left(\\dfrac{\\pi}{4}\\right) \\cr &\\quad = 1 - \\dfrac{\\pi}{2} \\end{aligned}<br><br>• For $x = \\dfrac{3\\pi}{4}$:\\begin{aligned} &y = \\tan\\left(\\dfrac{3\\pi}{4}\\right) - 2\\left(\\dfrac{3\\pi}{4}\\right) \\cr &\\quad = -1 - \\dfrac{3\\pi}{2} \\end{aligned}<br><br>Thus, the stationary points are $\\left(\\dfrac{\\pi}{4}, 1 - \\dfrac{\\pi}{2}\\right)$ and $\\left(\\dfrac{3\\pi}{4}, -1 - \\dfrac{3\\pi}{2}\\right)$.",
                "<strong>(ii) Determining the nature of each stationary point:</strong><br>Differentiate $\\dfrac{\\text{d}y}{\\text{d}x} = \\sec^2 x - 2$ using the chain rule:\\begin{aligned} &\\dfrac{\\text{d}^2y}{\\text{d}x^2} \\cr &\\quad = 2\\sec x \\cdot (\\sec x \\tan x) \\cr &\\quad = 2\\sec^2 x \\tan x \\end{aligned}",
                "Evaluate at each stationary point:<br><br>• At $x = \\dfrac{\\pi}{4}$:\\begin{aligned} &\\dfrac{\\text{d}^2y}{\\text{d}x^2} \\cr &\\quad = 2\\sec^2\\left(\\dfrac{\\pi}{4}\\right)\\tan\\left(\\dfrac{\\pi}{4}\\right) \\cr &\\quad = 2(2)(1) \\cr &\\quad = 4 \\end{aligned}<br>Since $4 > 0$, $\\left(\\dfrac{\\pi}{4}, 1 - \\dfrac{\\pi}{2}\\right)$ is a <strong>local minimum</strong>.<br><br>• At $x = \\dfrac{3\\pi}{4}$:\\begin{aligned} &\\dfrac{\\text{d}^2y}{\\text{d}x^2} \\cr &\\quad = 2\\sec^2\\left(\\dfrac{3\\pi}{4}\\right)\\tan\\left(\\dfrac{3\\pi}{4}\\right) \\cr &\\quad = 2(2)(-1) \\cr &\\quad = -4 \\end{aligned}<br>Since $-4 < 0$, $\\left(\\dfrac{3\\pi}{4}, -1 - \\dfrac{3\\pi}{2}\\right)$ is a <strong>local maximum</strong>.",
                "<strong>(iii) Stating the equation of the vertical asymptote:</strong><br>On the domain $0 < x < \\pi$, $\\tan x$ is undefined at $x = \\dfrac{\\pi}{2}$.<br><br>Therefore, the vertical asymptote is $x = \\dfrac{\\pi}{2}$.",
                "<strong>(iv) Finding where the curve is concave upwards:</strong><br>A curve is concave upwards when $\\dfrac{\\text{d}^2y}{\\text{d}x^2} > 0$:\\begin{aligned} &2\\sec^2 x \\tan x > 0 \\end{aligned}",
                "Since $\\sec^2 x > 0$ on the entire domain, this requires:\\begin{aligned} &\\tan x > 0 \\end{aligned}<br><br>On $0 < x < \\pi$, $\\tan x > 0$ in the first quadrant, $0 < x < \\dfrac{\\pi}{2}$.<br><br>Thus, the curve is concave upwards for $0 < x < \\dfrac{\\pi}{2}$.",
                "Final Answer: Local minimum at $\\left(\\dfrac{\\pi}{4}, 1 - \\dfrac{\\pi}{2}\\right)$, concave upwards for $0 < x < \\dfrac{\\pi}{2}$"
        ],
        "pi_options": [
                {
                        "ans": "Local minimum at $\\left(\\dfrac{\\pi}{4}, 1 - \\dfrac{\\pi}{2}\\right)$, concave upwards for all $0 < x < \\pi$",
                        "feedback": "The local minimum coordinates are correct, but the concavity interval is wrong. The second derivative contains the factor $\\tan x$, which is negative in the second quadrant, meaning the curve becomes concave downwards for $x > \\dfrac{\\pi}{2}$."
                },
                {
                        "ans": "Local minimum at $\\left(\\dfrac{\\pi}{4}, 1 - \\dfrac{\\pi}{2}\\right)$, concave upwards for $\\dfrac{\\pi}{2} < x < \\pi$",
                        "feedback": "This option identifies the wrong quadrant for concavity. On the interval $\\dfrac{\\pi}{2} < x < \\pi$ (the second quadrant), $\\tan x < 0$, which makes the second derivative negative, indicating the curve is concave downwards."
                },
                {
                        "ans": "Local maximum at $\\left(\\dfrac{\\pi}{4}, 1 - \\dfrac{\\pi}{2}\\right)$, concave upwards for $0 < x < \\dfrac{\\pi}{2}$",
                        "feedback": "This option has the nature of the stationary point reversed. At $x = \\dfrac{\\pi}{4}$, the second derivative is positive, making it a local minimum, not a local maximum."
                }
        ],
        "bradley_insight": {
                "type": "caution",
                "title": "The Head Teacher's Eye: Trigonometric Turning Points",
                "content": "When solving $\\sec^2 x = 2$, don't forget that this implies $\\cos^2 x = \\dfrac{1}{2}$, which yields $\\cos x = \\pm \\dfrac{1}{\\sqrt{2}}$. On the interval $0 < x < \\pi$, this produces a solution in the first quadrant ($\\cos x > 0$) and one in the second quadrant ($\\cos x < 0$). Missing the negative root will lead you to lose half of your stationary points!"
        }
},
{
        "id": "004631",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "A",
        "major_area": "Exponentials and Logarithms",
        "topic": "Exponentials and Logarithms",
        "subtopic": [
                "Exponential and Logarithmic Functions and Graphs",
                "Modelling and Applications"
        ],
        "img": "images/Pure_SVGs/004631.svg",
        "question": "In this question you must show detailed reasoning.<br><br>A video-sharing platform launched on 1 September 2020. The owners of the platform report the number of active users, $n$, at the start of each month. They believe that the relationship between $n$ and the number of months after launch, $t$, can be modelled by $n = a \\times 2^{kt}$, where $a$ and $k$ are constants.<br><br><strong>(i)</strong> Show that, according to the model, the graph of $\\log_{10} n$ against $t$ is a straight line.<br><strong>(ii)</strong> The diagram shows a plot of the values of $t$ and $\\log_{10} n$ for the first seven months after launch, along with a line of best fit. Use this line of best fit to find estimates of the values of $a$ and $k$.<br><strong>(iii)</strong> The owners of the platform want to estimate the date on which they would report that the platform has $250,000$ active users. Use the model to estimate this date.<br><strong>(iv)</strong> Give a reason why this model may not be appropriate for large values of $t$.",
        "steps": [
                "<strong>(i) Linearising the exponential model:</strong><br>Start with the exponential model equation:\\begin{aligned} &n = a \\times 2^{kt} \\end{aligned}",
                "Take the base-$10$ logarithm of both sides:\\begin{aligned} &\\log_{10} n \\cr &\\quad = \\log_{10}(a \\times 2^{kt}) \\cr &\\quad = \\log_{10} a + \\log_{10}(2^{kt}) \\cr &\\quad = \\log_{10} a + kt \\log_{10} 2 \\end{aligned}",
                "Rearrange into the linear form $y = mx + c$, where $y = \\log_{10} n$ and $x = t$:\\begin{aligned} &\\log_{10} n \\cr &\\quad = (k \\log_{10} 2)t + \\log_{10} a \\end{aligned}<br><br>Since $k \\log_{10} 2$ and $\\log_{10} a$ are constants, the graph of $\\log_{10} n$ against $t$ is a straight line.",
                "<strong>(ii) Finding estimates of $a$ and $k$:</strong><br>The line of best fit has vertical intercept $c = 2.0$ and passes through $(0, 2.0)$ and $(8, 4.0)$:\\begin{aligned} &c = 2.0 \\cr &m = \\dfrac{4.0 - 2.0}{8 - 0} \\cr &\\quad = 0.25 \\end{aligned}",
                "Find $a$ from the vertical intercept:\\begin{aligned} &\\log_{10} a = 2.0 \\cr &a = 10^{2.0} \\cr &\\quad = 100 \\end{aligned}",
                "Find $k$ from the gradient:\\begin{aligned} &k \\log_{10} 2 = 0.25 \\cr &k = \\dfrac{0.25}{\\log_{10} 2} \\cr &\\quad \\approx 0.830 \\end{aligned}<br><br>Thus, $a = 100$ and $k = 0.830$ (to $3$ significant figures).",
                "<strong>(iii) Estimating the target date:</strong><br>Substitute $n = 250,000$ into the linear equation:\\begin{aligned} &\\log_{10}(250,000) \\cr &\\quad = 0.25t + 2.0 \\cr &5.398 \\cr &\\quad = 0.25t + 2.0 \\cr &0.25t = 3.398 \\cr &t = \\dfrac{3.398}{0.25} \\cr &\\quad \\approx 13.6 \\text{ months} \\end{aligned}",
                "Convert $13.6$ months after 1 September 2020 into a calendar date:<br><br>• $t = 0$: 1 September 2020<br><br>• $t = 12$: 1 September 2021<br><br>• $t = 13$: 1 October 2021<br><br>• $t = 14$: 1 November 2021<br><br>Since $13.6$ falls between $13$ and $14$ months, the target date is in <strong>October 2021</strong>.",
                "<strong>(iv) Discussing the model's limitations:</strong><br>An exponential model assumes continuous, unchecked growth. In reality, active user numbers are constrained by market saturation, competitor platforms, and finite population sizes. Therefore, the model will overestimate user growth for large values of $t$.",
                "Final Answer: $a = 100$, $k = 0.830$, Date: October 2021"
        ],
        "pi_options": [
                {
                        "ans": "$a = 100$, $k = 0.25$, Date: November 2021",
                        "feedback": "This option confuses the gradient of the log plot ($m = 0.25$) directly with the growth constant $k$. Remember that the gradient represents $k \\log_{10} 2$, so you must divide the gradient by $\\log_{10} 2$ to find $k$."
                },
                {
                        "ans": "$a = 2$, $k = 0.830$, Date: October 2021",
                        "feedback": "This option fails to take the inverse log of the vertical intercept. Since the vertical intercept is $2.0 = \\log_{10} a$, the initial value is $a = 10^{2.0} = 100$, not $a = 2$."
                },
                {
                        "ans": "$a = 100$, $k = 0.830$, Date: September 2021",
                        "feedback": "While the parameters $a$ and $k$ are correctly calculated, the date conversion is off. A value of $t = 13.6$ represents $13$ full months plus a fraction of the $14\\text{th}$ month, which places the target date in October 2021, not September 2021."
                }
        ],
        "bradley_insight": {
                "type": "caution",
                "title": "The Head Teacher's Eye: Gradient vs. Growth Constant",
                "content": "A very common slip is writing the gradient of the line of best fit directly as the growth constant $k$. When linearising $n = a \\times 2^{kt}$, the variable on the horizontal axis is $t$, which means the gradient of the line is actually $k \\log_{10} 2$. Always remember to divide your gradient by $\\log_{10} 2$ to extract the true value of $k$!"
        }
},
{
        "id": "004632",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "A",
        "major_area": "Exponentials and Logarithms",
        "topic": "Exponentials and Logarithms",
        "subtopic": [
                "Exponential and Logarithmic Functions and Graphs",
                "Modelling and Applications"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A biologist researches the relationship between the body mass, $M$ (in kilograms), and the resting metabolic rate, $R$ (in watts), of a group of mammalian species. They believe the relationship can be modelled by $R = a M^b$, where $a$ and $b$ are constants.<br><br><strong>(i)</strong> Show that, according to the model, the graph of $\\log_{10} R$ against $\\log_{10} M$ is a straight line.<br><strong>(ii)</strong> A plot of $\\log_{10} R$ against $\\log_{10} M$ yields a straight line of best fit with a vertical intercept of $1.2$ which passes through the point $(4.0, 4.2)$. Find estimates of the values of $a$ and $b$.<br><strong>(iii)</strong> Use the model to estimate the resting metabolic rate of a mammal with a body mass of $500\\text{ kg}$. Give your answer to the nearest watt.<br><strong>(iv)</strong> Explain why this model may not be appropriate for extremely small organisms, such as single-celled bacteria.",
        "steps": [
                "<strong>(i) Linearising the power law model:</strong><br>Start with the power law equation:\\begin{aligned} &R = a M^b \\end{aligned}",
                "Take base-$10$ logarithms of both sides:\\begin{aligned} &\\log_{10} R \\cr &\\quad = \\log_{10}(a M^b) \\cr &\\quad = \\log_{10} a + \\log_{10}(M^b) \\cr &\\quad = b \\log_{10} M + \\log_{10} a \\end{aligned}<br><br>This is in linear form $Y = mX + c$, where $Y = \\log_{10} R$, $X = \\log_{10} M$, gradient $m = b$, and vertical intercept $c = \\log_{10} a$. Since $b$ and $\\log_{10} a$ are constants, the graph is a straight line.",
                "<strong>(ii) Estimating constants $a$ and $b$:</strong><br>The line has vertical intercept $c = 1.2$ and passes through $(4.0, 4.2)$:\\begin{aligned} &m = \\dfrac{4.2 - 1.2}{4.0 - 0} \\cr &\\quad = \\dfrac{3.0}{4.0} \\cr &\\quad = 0.75 \\end{aligned}<br><br>Since $b = m$, we estimate $b = 0.75$.",
                "Use the vertical intercept to find $a$:\\begin{aligned} &\\log_{10} a = 1.2 \\cr &a = 10^{1.2} \\cr &\\quad \\approx 15.8 \\end{aligned}<br><br>Thus, $a = 15.8$ and $b = 0.75$.",
                "<strong>(iii) Estimating the metabolic rate for $M = 500\\text{ kg}$:</strong><br>Substitute $\\log_{10} M = \\log_{10} 500 \\approx 2.6990$ into the linear equation:\\begin{aligned} &\\log_{10} R \\cr &\\quad = 0.75 \\log_{10} M + 1.2 \\cr &\\quad = 0.75(2.6990) + 1.2 \\cr &\\quad = 2.0243 + 1.2 \\cr &\\quad = 3.2243 \\end{aligned}",
                "Solve for $R$:\\begin{aligned} &R = 10^{3.2243} \\cr &\\quad \\approx 1676\\text{ W} \\end{aligned}<br><br>Thus, to the nearest watt, the resting metabolic rate is $1676\\text{ W}$.",
                "<strong>(iv) Explaining biological limitations:</strong><br>Extremely small organisms such as single-celled bacteria have drastically different surface-area-to-volume ratios, physiology, and heat retention compared to multicellular mammals. Extrapolating a mammalian scaling law down to bacteria is biologically invalid.",
                "Final Answer: $a = 15.8$, $b = 0.75$, $R \\approx 1676\\text{ W}$"
        ],
        "pi_options": [
                {
                        "ans": "$a = 1.2$, $b = 0.75$, $R \\approx 127\\text{ W}$",
                        "feedback": "This option fails to take the inverse log of the vertical intercept. Since $\\log_{10} a = 1.2$, the parameter $a$ must be computed as $10^{1.2} \\approx 15.8$, rather than setting $a$ directly equal to $1.2$."
                },
                {
                        "ans": "$a = 15.8$, $b = 1.2$, $R \\approx 27,300\\text{ W}$",
                        "feedback": "This option mistakes the vertical intercept of $1.2$ directly for the exponent $b$. The gradient of the line represents the power constant $b$, which is calculated as $\\dfrac{4.2 - 1.2}{4.0} = 0.75$."
                },
                {
                        "ans": "$a = 15.8$, $b = 0.75$, $R \\approx 158\\text{ W}$",
                        "feedback": "This option incorrectly computes $R$ by directly multiplying $a \\times M \\times b$ (i.e. $15.8 \\times 500 \\times 0.75$) instead of evaluating the power law $R = aM^b$ (which gives $15.8 \\times 500^{0.75}$)."
                }
        ],
        "bradley_insight": {
                "type": "deeper",
                "title": "The Head Teacher's Eye: Power Laws vs. Exponentials",
                "content": "Make sure you distinguish between a power law ($y = a x^b$) and an exponential model ($y = a b^x$). For power laws, taking logs requires plotting $\\log y$ against $\\log x$, and the gradient yields the constant exponent $b$. For exponentials, taking logs requires plotting $\\log y$ against $t$, where the gradient is related to the growth/decay base."
        }
},
{
        "id": "004633",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "A",
        "major_area": "Exponentials and Logarithms",
        "topic": "Exponentials and Logarithms",
        "subtopic": [
                "Exponential and Logarithmic Functions and Graphs",
                "Modelling and Applications"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The mass, $M$ (in grams), of a radioactive isotope remaining after $t$ years is modelled by $M = M_0 \\mathrm{e}^{-kt}$, where $M_0$ and $k$ are positive constants.<br><br><strong>(i)</strong> Show that, according to the model, the graph of $\\ln M$ against $t$ is a straight line.<br><strong>(ii)</strong> A plot of $\\ln M$ against $t$ yields a straight line of best fit which passes through the points $(0, 4.6)$ and $(100, 3.1)$. Find estimates of the values of $M_0$ and $k$.<br><strong>(iii)</strong> Use the model to find the half-life of the isotope (the time taken for the mass of the isotope to reduce to half of its initial mass), giving your answer to the nearest year.<br><strong>(iv)</strong> State a limitation of using a continuous exponential model to represent radioactive decay in the long run.",
        "steps": [
                "<strong>(i) Linearising using natural logarithms:</strong><br>Start with the decay model:\\begin{aligned} &M = M_0 \\mathrm{e}^{-kt} \\end{aligned}",
                "Take natural logarithms of both sides:\\begin{aligned} &\\ln M = \\ln(M_0 \\mathrm{e}^{-kt}) \\cr &\\quad = \\ln M_0 + \\ln(\\mathrm{e}^{-kt}) \\cr &\\quad = -kt + \\ln M_0 \\end{aligned}",
                "Rearrange into linear form $y = mx + c$:\\begin{aligned} &\\ln M = (-k)t + \\ln M_0 \\end{aligned}<br><br>Since $-k$ and $\\ln M_0$ are constants, the graph of $\\ln M$ against $t$ is a straight line.",
                "<strong>(ii) Finding estimates of $M_0$ and $k$:</strong><br>Using $(0, 4.6)$ and $(100, 3.1)$:\\begin{aligned} &c = 4.6 \\cr &m = \\dfrac{3.1 - 4.6}{100 - 0} \\cr &\\quad = \\dfrac{-1.5}{100} \\cr &\\quad = -0.015 \\end{aligned}",
                "Find $M_0$ and $k$:\\begin{aligned} &\\ln M_0 = 4.6 \\cr &M_0 = \\mathrm{e}^{4.6} \\cr &\\quad \\approx 99.5\\text{ g} \\end{aligned}",
                "For $k$:\\begin{aligned} &-k = -0.015 \\cr &k = 0.015 \\end{aligned}<br><br>Thus, $M_0 = 99.5\\text{ g}$ and $k = 0.015$.",
                "<strong>(iii) Determining the half-life:</strong><br>Let $T$ be the half-life when $M = \\dfrac{1}{2}M_0$:\\begin{aligned} &\\dfrac{1}{2}M_0 = M_0 \\mathrm{e}^{-0.015T} \\cr &\\dfrac{1}{2} = \\mathrm{e}^{-0.015T} \\end{aligned}",
                "Take natural logarithms of both sides:\\begin{aligned} &\\ln\\left(\\dfrac{1}{2}\\right) = -0.015T \\cr &-\\ln 2 = -0.015T \\cr &T = \\dfrac{\\ln 2}{0.015} \\cr &\\quad \\approx 46.2\\text{ years} \\end{aligned}<br><br>To the nearest year, the half-life is $46\\text{ years}$.",
                "<strong>(iv) Identifying limitations in the long run:</strong><br>A continuous exponential decay model predicts remaining mass asymptotically approaches zero without ever reaching it. In reality, radioactive decay is a discrete process of individual nuclei. When few atoms remain, a continuous deterministic model breaks down.",
                "Final Answer: $M_0 = 99.5\\text{ g}$, $k = 0.015$, Half-life $\\approx 46\\text{ years}$"
        ],
        "pi_options": [
                {
                        "ans": "$M_0 = 4.6\\text{ g}$, $k = 0.015$, Half-life $\\approx 46\\text{ years}$",
                        "feedback": "This option fails to take the inverse natural log of the vertical intercept. Since $\\ln M_0 = 4.6$, you must calculate $M_0 = \\mathrm{e}^{4.6} \\approx 99.5\\text{ g}$."
                },
                {
                        "ans": "$M_0 = 99.5\\text{ g}$, $k = -0.015$, Half-life $\\approx 46\\text{ years}$",
                        "feedback": "The decay constant $k$ must be a positive parameter. Since the gradient of the log plot is $-0.015$, we have $-k = -0.015 \\implies k = 0.015$. A negative value for $k$ would represent exponential growth instead of decay."
                },
                {
                        "ans": "$M_0 = 99.5\\text{ g}$, $k = 0.015$, Half-life $\\approx 20\\text{ years}$",
                        "feedback": "The half-life calculation is incorrect. Setting up the equation as $\\mathrm{e}^{-kT} = 0.5$ yields $T = \\dfrac{\\ln 2}{0.015} \\approx 46\\text{ years}$, rather than dividing by a different factor."
                }
        ],
        "bradley_insight": {
                "type": "pro-tip",
                "title": "The Head Teacher's Eye: Half-Life Constant",
                "content": "For any simple exponential decay model of the form $y = y_0 \\mathrm{e}^{-kt}$, the half-life $T$ is completely independent of the starting amount $y_0$. It will always simplify down to the clean relation $T = \\dfrac{\\ln 2}{k}$. Memorising this relation can save you valuable steps during exams!"
        }
},
{
        "id": "004634",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "A",
        "major_area": "Exponentials and Logarithms",
        "topic": "Exponentials and Logarithms",
        "subtopic": [
                "Exponential and Logarithmic Functions and Graphs",
                "Modelling and Applications"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A scientist monitors the population, $P$, of a bacteria culture in a laboratory experiment. The relationship between $P$ and the time, $t$ (in hours) since the start of the experiment, is modelled by $P = A b^t$, where $A$ and $b$ are constants.<br><br><strong>(i)</strong> Show that, according to the model, the graph of $\\log_{10} P$ against $t$ is a straight line.<br><strong>(ii)</strong> A plot of $\\log_{10} P$ against $t$ yields a straight line of best fit which passes through the points $(1, 2.5)$ and $(5, 3.7)$. Find estimates of the values of $A$ and $b$, giving your answers to $3$ significant figures.<br><strong>(iii)</strong> Estimate the population of the bacteria culture after $10$ hours, giving your answer to the nearest thousand.<br><strong>(iv)</strong> Suggest a biological reason why this model will eventually fail for large values of $t$.",
        "steps": [
                "<strong>(i) Showing linearisation:</strong><br>Start with the population model:\\begin{aligned} &P = A b^t \\end{aligned}",
                "Take the base-$10$ logarithm of both sides:\\begin{aligned} &\\log_{10} P \\cr &\\quad = \\log_{10}(A b^t) \\cr &\\quad = \\log_{10} A + \\log_{10}(b^t) \\cr &\\quad = (\\log_{10} b)t + \\log_{10} A \\end{aligned}<br><br>This is in linear form $y = mx + c$, where $y = \\log_{10} P$ and $x = t$. Gradient is $m = \\log_{10} b$ and vertical intercept is $c = \\log_{10} A$. Thus, the graph is a straight line.",
                "<strong>(ii) Finding estimates for $A$ and $b$:</strong><br>Calculate gradient $m$ from $(1, 2.5)$ and $(5, 3.7)$:\\begin{aligned} &m = \\dfrac{3.7 - 2.5}{5 - 1} \\cr &\\quad = \\dfrac{1.2}{4} \\cr &\\quad = 0.3 \\end{aligned}",
                "Find $b$:\\begin{aligned} &\\log_{10} b = 0.3 \\cr &b = 10^{0.3} \\cr &\\quad \\approx 2.00 \\end{aligned}",
                "Find $A$ using $(1, 2.5)$:\\begin{aligned} &\\log_{10} P = 0.3t + \\log_{10} A \\cr &2.5 = 0.3(1) + \\log_{10} A \\cr &\\log_{10} A = 2.2 \\cr &A = 10^{2.2} \\cr &\\quad \\approx 158 \\end{aligned}<br><br>Thus, $A = 158$ and $b = 2.00$ to $3$ significant figures.",
                "<strong>(iii) Estimating population after $10$ hours:</strong><br>Substitute $t = 10$ into $\\log_{10} P = 0.3t + 2.2$:\\begin{aligned} &\\log_{10} P = 0.3(10) + 2.2 \\cr &\\quad = 3 + 2.2 \\cr &\\quad = 5.2 \\end{aligned}",
                "Solve for $P$:\\begin{aligned} &P = 10^{5.2} \\cr &\\quad \\approx 158,489 \\end{aligned}<br><br>Rounding to the nearest thousand, the population is $158,000$.",
                "<strong>(iv) Describing biological failures:</strong><br>An exponential growth model assumes infinite resources. As bacteria multiply, nutrients and space deplete, and waste products accumulate, halting growth for large $t$.",
                "Final Answer: $A = 158$, $b = 2.00$, $P \\approx 158,000$"
        ],
        "pi_options": [
                {
                        "ans": "$A = 2.2$, $b = 0.3$, $P \\approx 15,800$",
                        "feedback": "This option fails to take the inverse base-10 log of both parameters. You must calculate $A = 10^{2.2} \\approx 158$ and $b = 10^{0.3} \\approx 2.00$, rather than treating the intercept and gradient directly as the base constants."
                },
                {
                        "ans": "$A = 158$, $b = 2.00$, $P \\approx 3,160$",
                        "feedback": "This option incorrectly computes $P$ after $10$ hours as $A \\times b \\times t$ (i.e. $158 \\times 2 \\times 10 = 3160$) instead of applying the exponent: $P = Ab^t$, which gives $158 \\times 2^{10} \\approx 162,000$."
                },
                {
                        "ans": "$A = 158$, $b = 2.00$, $P \\approx 15,800,000$",
                        "feedback": "This calculation is off by a factor of 100, which usually stems from a decimal placement error when taking the inverse log of $5.2$. Ensure you evaluate $10^{5.2} \\approx 158,000$ carefully."
                }
        ],
        "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Early Rounding Cascades",
                        "content": "When a question has multiple sequential parts, avoid using rounded parameters ($A \\approx 158$ and $b \\approx 2.00$) for calculations in later parts unless explicitly instructed. Working directly with the exact linear equation $\\log_{10} P = 0.3t + 2.2$ keeps your calculations exact and prevents rounding errors from compounding!"
        }
},
{
        "id": "004635",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "A",
        "major_area": "Exponentials and Logarithms",
        "topic": "Exponentials and Logarithms",
        "subtopic": [
                "Modelling and Applications"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The temperature, $\\theta$ (in $^\\circ\\text{C})$, of a hot metal component cooling in a laboratory where the ambient room temperature is $20^\\circ\\text{C}$ is modelled by $\\theta = 20 + A \\mathrm{e}^{-kt}$, where $t$ is the time in minutes after cooling begins, and $A$ and $k$ are constants.<br><br><strong>(i)</strong> Show that the relationship can be written in the form $\\ln(\\theta - 20) = mt + c$, where $m$ and $c$ are constants to be stated in terms of $A$ and $k$.<br><strong>(ii)</strong> A plot of $\\ln(\\theta - 20)$ against $t$ yields a straight line of best fit with a vertical intercept of $4.0$ and a gradient of $-0.08$. Find the exact value of $k$ and the value of $A$ to $3$ significant figures.<br><strong>(iii)</strong> Estimate the temperature of the metal component after $15$ minutes of cooling, giving your answer to the nearest degree.<br><strong>(iv)</strong> State the long-term temperature predicted by this model, and comment on whether this prediction is realistic in a physical context.",
        "steps": [
                "<strong>(i) Rearranging and taking logarithms:</strong><br>Start with the cooling equation:\\begin{aligned} &\\theta = 20 + A \\mathrm{e}^{-kt} \\cr &\\theta - 20 = A \\mathrm{e}^{-kt} \\end{aligned}",
                "Take natural logarithms of both sides:\\begin{aligned} &\\ln(\\theta - 20) \\cr &\\quad = \\ln(A \\mathrm{e}^{-kt}) \\cr &\\quad = \\ln A + \\ln(\\mathrm{e}^{-kt}) \\cr &\\quad = -kt + \\ln A \\end{aligned}<br><br>This is in the form $\\ln(\\theta - 20) = mt + c$, with $m = -k$ and $c = \\ln A$.",
                "<strong>(ii) Determining $A$ and $k$:</strong><br>Using gradient $m = -0.08$ and intercept $c = 4.0$:\\begin{aligned} &-k = -0.08 \\cr &k = 0.08 \\end{aligned}",
                "Find $A$ from the intercept:\\begin{aligned} &\\ln A = 4.0 \\cr &A = \\mathrm{e}^{4.0} \\cr &\\quad \\approx 54.6 \\end{aligned}<br><br>Thus, $k = 0.08$ and $A = 54.6$.",
                "<strong>(iii) Estimating temperature after $15$ minutes:</strong><br>Substitute $t = 15$ into the cooling model:\\begin{aligned} &\\theta \\cr &\\quad = 20 + 54.598 \\mathrm{e}^{-0.08(15)} \\cr &\\quad = 20 + 54.598 \\mathrm{e}^{-1.2} \\cr &\\quad \\approx 20 + 16.44 \\cr &\\quad \\approx 36.4^\\circ\\text{C} \\end{aligned}<br><br>Rounding to the nearest degree, the temperature is $36^\\circ\\text{C}$.",
                "<strong>(iv) Analyzing long-term predictions:</strong><br>As $t \\to \\infty$, $\\mathrm{e}^{-0.08t} \\to 0$, so $\\theta \\to 20^\\circ\\text{C}$.<br><br>This prediction is physically realistic because the object reaches thermal equilibrium with the ambient room temperature.",
                "Final Answer: $A = 54.6$, $k = 0.08$, $\\text{Temperature} \\approx 36^\\circ\\text{C}$"
        ],
        "pi_options": [
                {
                        "ans": "$A = 4.0$, $k = 0.08$, $\\text{Temperature} \\approx 21^\\circ\\text{C}$",
                        "feedback": "This option fails to take the inverse natural log of the vertical intercept. Since $\\ln A = 4.0$, you must calculate $A = \\mathrm{e}^{4.0} \\approx 54.6$, rather than equating $A$ directly to the intercept."
                },
                {
                        "ans": "$A = 54.6$, $k = -0.08$, $\\text{Temperature} \\approx 201^\\circ\\text{C}$",
                        "feedback": "This option incorrectly sets $k$ as a negative value. Because the gradient of the log plot is negative ($m = -0.08$), the constant $k$ is positive ($k = 0.08$). A negative value of $k$ would model unbounded growth instead of cooling."
                },
                {
                        "ans": "$A = 54.6$, $k = 0.08$, $\\text{Temperature} \\approx 16^\\circ\\text{C}$",
                        "feedback": "This option computes the cooled portion of the temperature $\\theta - 20 \\approx 16.44^\\circ\\text{C}$ but forgets to add the constant ambient temperature of $20^\\circ\\text{C}$ back onto the final result."
                }
        ],
        "bradley_insight": {
                "type": "caution",
                "title": "The Head Teacher's Eye: Shifted Log Pitfalls",
                "content": "When dealing with models that have an added vertical displacement constant (like Newton's Law of Cooling, $\\theta = 20 + A \\mathrm{e}^{-kt}$), never take logarithms before isolating the exponential term first. Attempting to write $\\ln \\theta = \\ln(20 + A \\mathrm{e}^{-kt})$ creates an expression that cannot be simplified or linearised. Always subtract the constant first!"
        }
},
{
        "id": "004636",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "A",
        "major_area": "Sequences and Series",
        "topic": "Binomial Expansion",
        "subtopic": [
                "General Term",
                "Finding a Specific Term"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Find the constant term in the binomial expansion of $\\left(x^3 + \\dfrac{1}{x}\\right)^{12}$.",
        "steps": [
                "<strong>Step 1: Write down the general term of the expansion:</strong><br>The general term in the binomial expansion of $(a + b)^n$ is $T_{r+1} = \\binom{n}{r} a^{n-r} b^r$.<br><br>Substitute $a = x^3$, $b = x^{-1}$, and $n = 12$:\\begin{aligned} &T_{r+1} \\cr &\\quad = \\binom{12}{r} (x^3)^{12 - r} \\left(x^{-1}\\right)^r \\cr &\\quad = \\binom{12}{r} x^{3(12 - r)} x^{-r} \\cr &\\quad = \\binom{12}{r} x^{36 - 3r - r} \\cr &\\quad = \\binom{12}{r} x^{36 - 4r} \\end{aligned}",
                "<strong>Step 2: Solve for $r$ to find the constant term:</strong><br>The constant term corresponds to setting the exponent of $x$ to $0$:\\begin{aligned} &36 - 4r = 0 \\cr &4r = 36 \\cr &r = 9 \\end{aligned}",
                "<strong>Step 3: Calculate the constant term:</strong><br>Substitute $r = 9$ into the general term formula:\\begin{aligned} &T_{10} = \\binom{12}{9} x^0 \\cr &\\quad = \\binom{12}{3} \\cr &\\quad = \\dfrac{12 \\times 11 \\times 10}{3 \\times 2 \\times 1} \\cr &\\quad = 220 \\end{aligned}<br><br>Thus, the constant term in the expansion is $220$.",
                "Final Answer: $220$"
        ],
        "pi_options": [
                {
                        "ans": "$495$",
                        "feedback": "This option results from using the wrong value of $r$. If you incorrectly simplified the exponent as $36 - 2r = 0$, you would get $r = 18$ (which is outside the range $0 \\le r \\le 12$), or if you used $r = 4$, which gives $\\binom{12}{4} = 495$."
                },
                {
                        "ans": "$792$",
                        "feedback": "This option is equal to $\\binom{12}{5}$ or $\\binom{12}{7}$, which corresponds to setting $r = 5$ or $r = 7$. Check your exponent equation $36 - 4r = 0$ to ensure you solve for $r = 9$."
                },
                {
                        "ans": "$12$",
                        "feedback": "This option is equal to $\\binom{12}{1}$ or $\\binom{12}{11}$, which occurs if you incorrectly simplify the exponent of $x$ or guess the index."
                }
        ],
        "bradley_insight": {
                "type": "caution",
                "title": "The Head Teacher's Eye: Power Laws and Fractions",
                "content": "When expanding expressions like $\\left(x^3 + \\dfrac{1}{x}\\right)^{12}$, don't forget to write $\\dfrac{1}{x}$ as $x^{-1}$. If you make a mistake with index laws and write $\\dfrac{1}{x}$ as $x$ or $x^1$, you will get the incorrect exponent equation for the constant term."
        }
},
{
        "id": "004637",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "A",
        "major_area": "Sequences and Series",
        "topic": "Binomial Expansion",
        "subtopic": [
                "General Term",
                "Finding a Specific Term"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Find the constant term in the binomial expansion of $\\left(2x^2 - \\dfrac{3}{x}\\right)^9$.",
        "steps": [
                "<strong>Step 1: Write down the general term of the expansion:</strong><br>Using the binomial general term formula $T_{r+1} = \\binom{n}{r} a^{n-r} b^r$ with $a = 2x^2$, $b = -3x^{-1}$, and $n = 9$:\\begin{aligned} &T_{r+1} \\cr &\\quad = \\binom{9}{r} (2x^2)^{9 - r} (-3x^{-1})^r \\cr &\\quad = \\binom{9}{r} 2^{9 - r} (x^2)^{9 - r} \\cr &\\qquad \\times (-3)^r (x^{-1})^r \\cr &\\quad = \\binom{9}{r} 2^{9 - r} (-3)^r \\cr &\\qquad \\times x^{2(9 - r)} x^{-r} \\cr &\\quad = \\binom{9}{r} 2^{9 - r} (-3)^r x^{18 - 3r} \\end{aligned}",
                "<strong>Step 2: Solve for $r$ to isolate the constant term:</strong><br>The constant term corresponds to setting the exponent of $x$ to $0$:\\begin{aligned} &18 - 3r = 0 \\cr &3r = 18 \\cr &r = 6 \\end{aligned}",
                "<strong>Step 3: Calculate the constant term:</strong><br>Substitute $r = 6$ into the general term:\\begin{aligned} &T_7 = \\binom{9}{6} 2^{9 - 6} (-3)^6 x^0 \\cr &\\quad = \\binom{9}{3} 2^3 (-3)^6 \\cr &\\quad = \\dfrac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1} \\times 8 \\times 729 \\cr &\\quad = 84 \\times 8 \\times 729 \\cr &\\quad = 672 \\times 729 \\cr &\\quad = 489,888 \\end{aligned}<br><br>Thus, the constant term in the expansion is $489,888$.",
                "Final Answer: $489,888$"
        ],
        "pi_options": [
                {
                        "ans": "$-489,888$",
                        "feedback": "This option is incorrect because of a sign error. Note that $(-3)^6 = 729$, which is positive because raising any real number (including a negative one) to an even power yields a positive result. Always be careful when tracking signs!"
                },
                {
                        "ans": "$61,236$",
                        "feedback": "This option arises if you forget to apply the power $2^{9-r} = 8$ to the coefficient, calculating $84 \\times 729 = 61,236$ instead of $84 \\times 8 \\times 729$."
                },
                {
                        "ans": "$5,376$",
                        "feedback": "This option occurs if you forget to raise the constant $-3$ to the power of $r = 6$, calculating $84 \\times 8 \\times (-3) = -2016$, or forgetting to apply $(-3)^6$ entirely."
                }
        ],
        "bradley_insight": {
                "type": "caution",
                "title": "The Head Teacher's Eye: Negative Terms inside Brackets",
                "content": "When dealing with negative terms like $-\\dfrac{3}{x}$, make sure to carry the negative sign with the coefficient inside the general term: $\\left(-\\dfrac{3}{x}\\right)^r = (-3)^r x^{-r}$. Omitting the negative sign or applying the power $r$ incorrectly to only the variable is the most common cause of lost marks on binomial expansion questions."
        }
},
{
        "id": "004638",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "A",
        "major_area": "Sequences and Series",
        "topic": "Binomial Expansion",
        "subtopic": [
                "General Term",
                "Finding a Specific Term"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Find the coefficient of $x^3$ in the binomial expansion of $\\left(2x - \\dfrac{1}{x^2}\\right)^9$.",
        "steps": [
                "<strong>Step 1: Write down the general term of the expansion:</strong><br>Using the binomial general term formula $T_{r+1} = \\binom{n}{r} a^{n-r} b^r$ with $a = 2x$, $b = -x^{-2}$, and $n = 9$:\\begin{aligned} &T_{r+1} \\cr &\\quad = \\binom{9}{r} (2x)^{9 - r} (-x^{-2})^r \\cr &\\quad = \\binom{9}{r} 2^{9 - r} x^{9 - r} \\cr &\\qquad \\times (-1)^r (x^{-2})^r \\cr &\\quad = \\binom{9}{r} 2^{9 - r} (-1)^r x^{9 - 3r} \\end{aligned}",
                "<strong>Step 2: Solve for $r$ to find the term in $x^3$:</strong><br>Set the exponent of $x$ to $3$:\\begin{aligned} &9 - 3r = 3 \\cr &3r = 6 \\cr &r = 2 \\end{aligned}",
                "<strong>Step 3: Calculate the coefficient:</strong><br>Substitute $r = 2$ into the general term:\\begin{aligned} &T_3 = \\binom{9}{2} 2^{9 - 2} (-1)^2 x^3 \\cr &\\quad = \\binom{9}{2} 2^7 (1) x^3 \\cr &\\quad = 36 \\times 128 \\times x^3 \\cr &\\quad = 4608x^3 \\end{aligned}<br><br>Thus, the coefficient of $x^3$ is $4608$.",
                "Final Answer: $4608$"
        ],
        "pi_options": [
                {
                        "ans": "$-4608$",
                        "feedback": "This option has a sign error. Since $r = 2$, the negative sign from the second term is raised to an even power: $(-1)^2 = 1$. The final coefficient must be positive."
                },
                {
                        "ans": "$1152$",
                        "feedback": "This option is equal to $\\binom{9}{2} 2^5 = 36 \\times 32$, which happens if you calculate the exponent of $2^{9-r}$ incorrectly as $2^5$ instead of $2^7$."
                },
                {
                        "ans": "$576$",
                        "feedback": "This option is equal to $\\binom{9}{2} 2^4 = 36 \\times 16$, which results from an arithmetic slip on the power of $2$ or a slip in simplifying $9-r$."
                }
        ],
        "bradley_insight": {
                "type": "pro-tip",
                "title": "The Head Teacher's Eye: General Term Shortcut",
                "content": "Instead of writing out the entire expansion to find a single term, always use the general term formula $T_{r+1} = \\binom{n}{r} a^{n-r} b^r$. This isolates the exponent of $x$ immediately and lets you solve a simple linear equation to find the exact value of $r$ without cluttering your workspace."
        }
},
{
        "id": "004639",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "A",
        "major_area": "Sequences and Series",
        "topic": "Binomial Expansion",
        "subtopic": [
                "General Term",
                "Finding a Specific Term"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Find the coefficient of $x^2$ in the expansion of $(1 + 3x)(2 - x)^6$.",
        "steps": [
                "<strong>Step 1: Write out the terms of $(2 - x)^6$ up to $x^2$:</strong><br>Using the binomial theorem:\\begin{aligned} &(2 - x)^6 \\cr &\\quad = \\binom{6}{0} 2^6 (-x)^0 \\cr &\\qquad + \\binom{6}{1} 2^5 (-x)^1 \\cr &\\qquad + \\binom{6}{2} 2^4 (-x)^2 + \\dots \\cr &\\quad = 1(64)(1) + 6(32)(-x) \\cr &\\qquad + 15(16)x^2 + \\dots \\cr &\\quad = 64 - 192x + 240x^2 + \\dots \\end{aligned}",
                "<strong>Step 2: Collect the $x^2$ terms in the product:</strong><br>Multiply the relevant terms of $(1 + 3x)(64 - 192x + 240x^2 + \\dots)$:\\begin{aligned} &\\text{Term in } x^2 \\cr &\\quad = 1(240x^2) + 3x(-192x) \\cr &\\quad = 240x^2 - 576x^2 \\cr &\\quad = (240 - 576)x^2 \\cr &\\quad = -336x^2 \\end{aligned}<br><br>Thus, the coefficient of $x^2$ in the expansion is $-336$.",
                "Final Answer: $-336$"
        ],
        "pi_options": [
                {
                        "ans": "$816$",
                        "feedback": "This option is equal to $240 + 576$. This results from a sign error when expanding $(2-x)^6$. Since the term is $(-x)^1$, the linear term coefficient is negative ($-192$), so multiplying it by $3x$ yields a negative term: $-576x^2$."
                },
                {
                        "ans": "$240$",
                        "feedback": "This option is simply the coefficient of $x^2$ inside the standalone expansion of $(2-x)^6$. You must multiply the entire expression by $(1+3x)$ and combine the terms to get the final coefficient of the product."
                },
                {
                        "ans": "$-332$",
                        "feedback": "This option results from an arithmetic slip when calculating the product of $3 \\times 192$, or when performing the final subtraction $240 - 576$."
                }
        ],
        "bradley_insight": {
                "type": "deeper",
                "title": "The Head Teacher's Eye: Product Expansion Strategy",
                "content": "When asked to find a specific coefficient in a product like $(1 + 3x)(2 - x)^6$, don't waste time multiplying out the entire expansion! Only expand $(2 - x)^6$ up to the power of $x$ that, when multiplied by the terms of $(1 + 3x)$, can produce $x^2$. This means you only need the constant, $x$, and $x^2$ terms of $(2 - x)^6$."
        }
},
{
        "id": "004640",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "A",
        "major_area": "Sequences and Series",
        "topic": "Binomial Expansion",
        "subtopic": [
                "General Term",
                "Finding a Specific Term"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>In the binomial expansion of $(1 + kx)^n$, where $n$ is a positive integer and $k$ is a non-zero constant, the coefficient of $x$ is $-30$ and the coefficient of $x^2$ is $400$.<br><br>Determine the value of $n$ and the value of $k$.",
        "steps": [
                "<strong>Step 1: Express the coefficients in terms of $n$ and $k$:</strong><br>Using the binomial expansion of $(1 + kx)^n$:\\begin{aligned} &(1 + kx)^n \\cr &\\quad = 1 + \\binom{n}{1}(kx) \\cr &\\qquad + \\binom{n}{2}(kx)^2 + \\dots \\cr &\\quad = 1 + nkx \\cr &\\qquad + \\dfrac{n(n - 1)}{2}k^2 x^2 + \\dots \\end{aligned}",
                "Equating coefficients gives:<br><br>1) Coefficient of $x$ is $-30$:\\begin{aligned} &nk = -30 \\end{aligned}<br><br>2) Coefficient of $x^2$ is $400$:\\begin{aligned} &\\dfrac{n(n - 1)k^2}{2} = 400 \\end{aligned}",
                "<strong>Step 2: Set up a simultaneous equation:</strong><br>From the first equation, express $k$ in terms of $n$:\\begin{aligned} &k = -\\dfrac{30}{n} \\end{aligned}",
                "Substitute this into the second equation:\\begin{aligned} &\\dfrac{n(n - 1)}{2} \\left(-\\dfrac{30}{n}\\right)^2 = 400 \\cr &\\dfrac{n(n - 1)}{2} \\left(\\dfrac{900}{n^2}\\right) = 400 \\cr &\\dfrac{900n(n - 1)}{2n^2} = 400 \\cr &\\dfrac{450(n - 1)}{n} = 400 \\end{aligned}",
                "<strong>Step 3: Solve for $n$:</strong><br>Multiply both sides by $n$ and solve the linear equation:\\begin{aligned} &450(n - 1) = 400n \\cr &450n - 450 = 400n \\cr &50n = 450 \\cr &n = 9 \\end{aligned}",
                "<strong>Step 4: Solve for $k$:</strong><br>Substitute $n = 9$ into the expression for $k$:\\begin{aligned} &k = -\\dfrac{30}{9} \\cr &\\quad = -\\dfrac{10}{3} \\end{aligned}<br><br>Thus, the values are $n = 9$ and $k = -\\dfrac{10}{3}$.",
                "Final Answer: $n = 9$, $k = -\\dfrac{10}{3}$"
        ],
        "pi_options": [
                {
                        "ans": "$n = 9$, $k = -30$",
                        "feedback": "This option arises if you solve for $n = 9$ but then incorrectly assume $k$ is equal to the linear coefficient itself ($-30$), forgetting that the coefficient of $x$ is the product $nk = -30$."
                },
                {
                        "ans": "$n = 8$, $k = -\\dfrac{15}{4}$",
                        "feedback": "This option is caused by an algebraic error when substituting $k = -\\dfrac{30}{n}$ into the $x^2$ coefficient equation, such as failing to square the numerator: $\\left(-\\dfrac{30}{n}\\right)^2 = \\dfrac{900}{n^2}$."
                },
                {
                        "ans": "$n = 9$, $k = \\dfrac{10}{3}$",
                        "feedback": "This option has a sign error on $k$. Since the coefficient of $x$ is $-30$ and $n = 9$ is a positive integer, $nk = -30$ requires $k = -\\dfrac{10}{3}$. A positive $k$ would give a positive coefficient for $x$."
                }
        ],
        "bradley_insight": {
                "type": "caution",
                "title": "The Head Teacher's Eye: Exponents of Constants",
                "content": "When expanding $(1 + kx)^n$, the coefficient of $x^2$ is $\\dfrac{n(n - 1)}{2}k^2$, not $\\dfrac{n(n - 1)}{2}k$. A very common student slip is forgetting to square the constant $k$ when squaring the term $(kx)^2$. Always double check that constants inside your variable terms are raised to the same power as the variable!"
        }
}, 
{
        "id": "004641",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "A",
        "major_area": "Coordinate Geometry",
        "topic": "Straight Lines",
        "subtopic": [
                "Intersections of Lines and Curves"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The line $y = 3 - kx$ crosses the curve $y = 4x - x^2$ on the $x$-axis and at one other point.<br><br>Determine the value of the constant $k$ and the coordinates of this other point.",
        "steps": [
                "<strong>Step 1: Find where the curve crosses the $x$-axis:</strong><br>The curve crosses the $x$-axis where $y = 0$:\\begin{aligned} &4x - x^2 = 0 \\cr &x(4 - x) = 0 \\end{aligned}<br><br>This gives crossing points at $(0, 0)$ and $(4, 0)$.",
                "<strong>Step 2: Determine which crossing point the line passes through:</strong><br>If the line passes through $(0, 0)$:\\begin{aligned} &0 = 3 - k(0) \\cr &0 = 3 \\end{aligned}<br>This is impossible, so the line cannot pass through $(0, 0)$.<br><br>Therefore, the line passes through $(4, 0)$:\\begin{aligned} &0 = 3 - 4k \\cr &4k = 3 \\cr &k = \\dfrac{3}{4} \\end{aligned}",
                "<strong>Step 3: Solve for the other point of intersection:</strong><br>Equate the line and the curve:\\begin{aligned} &4x - x^2 = 3 - \\dfrac{3}{4}x \\cr &16x - 4x^2 = 12 - 3x \\cr &4x^2 - 19x + 12 = 0 \\end{aligned}",
                "Factorise the quadratic:\\begin{aligned} &(x - 4)(4x - 3) = 0 \\end{aligned}<br><br>The roots are $x = 4$ and $x = \\dfrac{3}{4}$, so the other point has $x$-coordinate $x = \\dfrac{3}{4}$.",
                "<strong>Step 4: Find the $y$-coordinate of the other point:</strong><br>Substitute $x = \\dfrac{3}{4}$ into the line equation:\\begin{aligned} &y = 3 - \\dfrac{3}{4}\\left(\\dfrac{3}{4}\\right) \\cr &\\quad = 3 - \\dfrac{9}{16} \\cr &\\quad = \\dfrac{39}{16} \\end{aligned}<br><br>Thus, the other point of intersection is $\\left(\\dfrac{3}{4}, \\dfrac{39}{16}\\right)$.",
                "Final Answer: $k = \\dfrac{3}{4}$, other point $\\left(\\dfrac{3}{4}, \\dfrac{39}{16}\\right)$"
        ],
        "pi_options": [
                {
                        "ans": "$k = \\dfrac{3}{4}$, other point $(4, 0)$",
                        "feedback": "This option lists $(4, 0)$ as the other point of intersection. Remember that $(4, 0)$ is the point on the $x$-axis where the line and curve first cross; the question asks for the other point of intersection, which is $\\left(\\dfrac{3}{4}, \\dfrac{39}{16}\\right)$."
                },
                {
                        "ans": "$k = 0$, other point $(3, 3)$",
                        "feedback": "This option arises if you incorrectly solve the $x$-axis crossing condition using the point $(0,0)$, which yields the impossible equation $0 = 3$. This case must be rejected."
                },
                {
                        "ans": "$k = \\dfrac{3}{4}$, other point $\\left(\\dfrac{3}{4}, -\\dfrac{9}{16}\\right)$",
                        "feedback": "This option has a calculation error in the final step. When substituting $x = \\dfrac{3}{4}$ into the line $y = 3 - \\dfrac{3}{4}x$, you should calculate $3 - \\dfrac{9}{16} = \\dfrac{39}{16}$, not $-\\dfrac{9}{16}$."
                }
        ],
        "bradley_insight": {
                "type": "caution",
                "title": "The Common Trap of Undefined Roots",
                "content": "Many students lose easy marks by failing to explicitly justify why $x = 0$ is rejected. When finding where the line crosses the curve on the $x$-axis, you must show that at $(0,0)$, the line's equation $0 = 3 - k(0)$ yields an impossible statement ($0 = 3$). Rigorous coordinate geometry requires verifying all cases!"
        }
},
{
        "id": "004642",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "A",
        "major_area": "Coordinate Geometry",
        "topic": "Straight Lines",
        "subtopic": [
                "Intersections of Lines and Curves"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The line $y = kx - 6$ crosses the curve $y = x^2 - 3x$ on the $x$-axis and at one other point.<br><br>Determine the value of the constant $k$ and the coordinates of this other point.",
        "steps": [
                "<strong>Step 1: Find where the curve crosses the $x$-axis:</strong><br>Set $y = 0$ in the curve equation:\\begin{aligned} &x^2 - 3x = 0 \\cr &x(x - 3) = 0 \\end{aligned}<br><br>This gives crossing points at $(0, 0)$ and $(3, 0)$.",
                "<strong>Step 2: Determine which crossing point the line passes through:</strong><br>If the line passes through $(0, 0)$:\\begin{aligned} &0 = k(0) - 6 \\cr &0 = -6 \\end{aligned}<br>This is impossible, so the line cannot pass through $(0, 0)$.<br><br>Therefore, the line passes through $(3, 0)$:\\begin{aligned} &0 = 3k - 6 \\cr &3k = 6 \\cr &k = 2 \\end{aligned}",
                "<strong>Step 3: Solve for the other point of intersection:</strong><br>Equate the line and the curve:\\begin{aligned} &x^2 - 3x = 2x - 6 \\cr &x^2 - 5x + 6 = 0 \\end{aligned}",
                "Factorise the quadratic:\\begin{aligned} &(x - 3)(x - 2) = 0 \\end{aligned}<br><br>The roots are $x = 3$ and $x = 2$, so the other point has $x$-coordinate $x = 2$.",
                "<strong>Step 4: Find the $y$-coordinate of the other point:</strong><br>Substitute $x = 2$ into the line equation:\\begin{aligned} &y = 2(2) - 6 \\cr &\\quad = -2 \\end{aligned}<br><br>Thus, the other point of intersection is $(2, -2)$.",
                "Final Answer: $k = 2$, other point $(2, -2)$"
        ],
        "pi_options": [
                {
                        "ans": "$k = 2$, other point $(3, 0)$",
                        "feedback": "This option lists $(3, 0)$ as the other point of intersection. Note that $(3, 0)$ is the point on the $x$-axis where the curve and line first cross; the question asks for the other point of intersection, which is $(2, -2)$."
                },
                {
                        "ans": "$k = 2$, other point $(2, 2)$",
                        "feedback": "This option has a sign error in calculating the $y$-coordinate. Substituting $x = 2$ into the line $y = 2x - 6$ yields $y = -2$, not $+2$."
                },
                {
                        "ans": "$k = -2$, other point $(-2, -2)$",
                        "feedback": "This option is caused by an error in solving for $k$. If you incorrectly set $3k = -6$, you would obtain $k = -2$, which leads to incorrect coordinates."
                }
        ],
        "bradley_insight": {
                "type": "pro-tip",
                "title": "Factoring Shortcut",
                "content": "When solving $x^2 - 5x + 6 = 0$ to find the intersections, remember that you already know one of the roots is $x = 3$ because the line and the curve intersect at $(3,0)$. You can use this to factorise the quadratic immediately as $(x - 3)(x - 2) = 0$ without spending any time on trial-and-improvement or the quadratic formula."
        }
},
{
        "id": "004643",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "A",
        "major_area": "Coordinate Geometry",
        "topic": "Straight Lines",
        "subtopic": [
                "Positive Axis Intersection"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The line $y = kx + 15$ crosses the curve $y = 9 - x^2$ on the positive $x$-axis and at one other point.<br><br>Determine the value of the constant $k$ and the coordinates of this other point.",
        "steps": [
                "<strong>Step 1: Find the positive $x$-axis crossing point:</strong><br>Set $y = 0$ in the curve equation:\\begin{aligned} &9 - x^2 = 0 \\cr &x^2 = 9 \\cr &x = \\pm 3 \\end{aligned}<br><br>Since the crossing occurs on the positive $x$-axis, choose $x = 3$, giving the point $(3, 0)$.",
                "<strong>Step 2: Determine the value of $k$:</strong><br>Substitute $(3, 0)$ into the line equation:\\begin{aligned} &0 = 3k + 15 \\cr &3k = -15 \\cr &k = -5 \\end{aligned}",
                "<strong>Step 3: Solve for the other point of intersection:</strong><br>Equate the line and the curve:\\begin{aligned} &9 - x^2 = -5x + 15 \\cr &x^2 - 5x + 6 = 0 \\end{aligned}",
                "Factorise the quadratic:\\begin{aligned} &(x - 3)(x - 2) = 0 \\end{aligned}<br><br>The roots are $x = 3$ and $x = 2$, so the other point has $x$-coordinate $x = 2$.",
                "<strong>Step 4: Find the $y$-coordinate of the other point:</strong><br>Substitute $x = 2$ into the line equation:\\begin{aligned} &y = -5(2) + 15 \\cr &\\quad = 5 \\end{aligned}<br><br>Thus, the other point of intersection is $(2, 5)$.",
                "Final Answer: $k = -5$, other point $(2, 5)$"
        ],
        "pi_options": [
                {
                        "ans": "$k = 5$, other point $(-2, 5)$",
                        "feedback": "This option results from using the negative crossing point $(-3, 0)$ instead of the positive one. The question explicitly states the crossing occurs on the positive $x$-axis, which requires selecting $(3, 0)$ and finding $k = -5$."
                },
                {
                        "ans": "$k = -5$, other point $(3, 0)$",
                        "feedback": "This option lists $(3, 0)$ as the other point of intersection. Note that $(3, 0)$ is the point where they cross on the $x$-axis; the question asks for the other point of intersection, which is $(2, 5)$."
                },
                {
                        "ans": "$k = -5$, other point $(2, -5)$",
                        "feedback": "This option has a sign error when calculating the $y$-coordinate of the other point. Substituting $x = 2$ into $y = -5x + 15$ yields $y = 5$, not $-5$."
                }
        ],
        "bradley_insight": {
                "type": "caution",
                "title": "Positive and Negative Roots",
                "content": "The curve $y = 9 - x^2$ crosses the $x$-axis at two symmetric points: $(3,0)$ and $(-3,0)$. Pay close attention to the word 'positive' in the question text. Substituting the negative point $(-3,0)$ will yield the wrong constant $k = 5$ and lead to cascading errors for the second intersection. Always write down your initial constraints!"
        }
},
{
        "id": "004644",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "A",
        "major_area": "Differentiation",
        "topic": "Straight Lines",
        "subtopic": [
                "Tangents and Normals"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The line $y = kx + 6$ is a tangent to the curve $y = \\dfrac{8}{x}$.<br><br>Given that $k \\neq 0$, determine the value of the constant $k$ and the coordinates of the point of contact.",
        "steps": [
                "<strong>Step 1: Set up the intersection equation:</strong><br>Equate the line and the curve:\\begin{aligned} &kx + 6 = \\dfrac{8}{x} \\end{aligned}",
                "Multiply through by $x$ (for $x \\neq 0$):\\begin{aligned} &kx^2 + 6x = 8 \\cr &kx^2 + 6x - 8 = 0 \\end{aligned}",
                "<strong>Step 2: Apply the tangency condition (discriminant $\\Delta = 0$):</strong><br>A tangent touches the curve at exactly one point, so the quadratic has a single repeated real root:\\begin{aligned} &\\Delta = 6^2 - 4(k)(-8) \\cr &\\quad = 36 + 32k \\end{aligned}",
                "Set $\\Delta = 0$ and solve for $k$:\\begin{aligned} &36 + 32k = 0 \\cr &32k = -36 \\cr &k = -\\dfrac{9}{8} \\end{aligned}",
                "<strong>Step 3: Find the $x$-coordinate of the point of contact:</strong><br>Substitute $k = -\\dfrac{9}{8}$ into the quadratic equation:\\begin{aligned} &-\\dfrac{9}{8}x^2 + 6x - 8 = 0 \\cr &-9x^2 + 48x - 64 = 0 \\cr &9x^2 - 48x + 64 = 0 \\cr &(3x - 8)^2 = 0 \\end{aligned}<br><br>This gives the repeated root $x = \\dfrac{8}{3}$.",
                "<strong>Step 4: Find the $y$-coordinate of the point of contact:</strong><br>Substitute $x = \\dfrac{8}{3}$ into the curve equation:\\begin{aligned} &y = \\dfrac{8}{\\left(\\dfrac{8}{3}\\right)} \\cr &\\quad = 8 \\times \\dfrac{3}{8} \\cr &\\quad = 3 \\end{aligned}<br><br>Thus, $k = -\\dfrac{9}{8}$ and the point of contact is $\\left(\\dfrac{8}{3}, 3\\right)$.",
                "Final Answer: $k = -\\dfrac{9}{8}$, point of contact $\\left(\\dfrac{8}{3}, 3\\right)$"
        ],
        "pi_options": [
                {
                        "ans": "$k = \\dfrac{9}{8}$, point of contact $\\left(-\\dfrac{8}{3}, -3\\right)$",
                        "feedback": "This option arises if you make a sign error in the discriminant calculation, setting $36 - 32k = 0 \\implies k = \\dfrac{9}{8}$. Since $c = -8$ and $a = k$, $-4ac$ becomes $+32k$, which requires $k = -\\dfrac{9}{8}$."
                },
                {
                        "ans": "$k = -\\dfrac{9}{8}$, point of contact $\\left(\\dfrac{8}{3}, \\dfrac{1}{3}\\right)$",
                        "feedback": "This option has a calculation error in the final step. When substituting $x = \\dfrac{8}{3}$ into $y = \\dfrac{8}{x}$, the result is $y = 3$, not $\\dfrac{1}{3}$."
                },
                {
                        "ans": "$k = -\\dfrac{9}{8}$, point of contact $(8, 1)$",
                        "feedback": "This option is caused by an algebraic mistake when solving the perfect square quadratic $9x^2 - 48x + 64 = 0$, leading to an incorrect $x$-coordinate of $8$ instead of $\\dfrac{8}{3}$."
                }
        ],
        "bradley_insight": {
                "type": "deeper",
                "title": "The Discriminant and Tangency",
                "content": "A line is a tangent to a curve if and only if they intersect at exactly one point (or point of contact). Algebraically, this means that the quadratic intersection equation has a single repeated real root, which corresponds to setting the discriminant $\\Delta = b^2 - 4ac = 0$. This powerful technique is a cornerstone of A Level curve sketching and coordinate geometry."
        }
},
{
        "id": "004645",
        "board": "OCR MEI",
        "branch": "Pure",
        "level": "A",
        "major_area": "Differentiation",
        "topic": "Straight Lines",
        "subtopic": [
                "Tangents and Normals"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The line $y = 3x - k$ is a tangent to the circle $x^2 + y^2 = 10$.<br><br>Given that $k$ is a positive constant, determine the value of $k$ and the coordinates of the point of contact.",
        "steps": [
                "<strong>Step 1: Set up the intersection equation:</strong><br>Substitute $y = 3x - k$ into the circle equation $x^2 + y^2 = 10$:\\begin{aligned} &x^2 + (3x - k)^2 = 10 \\cr &x^2 + 9x^2 - 6kx + k^2 = 10 \\cr &10x^2 - 6kx + (k^2 - 10) = 0 \\end{aligned}",
                "<strong>Step 2: Apply the tangency condition (discriminant $\\Delta = 0$):</strong><br>The line is tangent to the circle when there is a single repeated root:\\begin{aligned} &\\Delta = (-6k)^2 \\cr &\\qquad - 4(10)(k^2 - 10) \\cr &\\quad = 36k^2 - 40(k^2 - 10) \\cr &\\quad = 36k^2 - 40k^2 + 400 \\cr &\\quad = -4k^2 + 400 \\end{aligned}",
                "Set $\\Delta = 0$ and solve for positive $k$:\\begin{aligned} &-4k^2 + 400 = 0 \\cr &4k^2 = 400 \\cr &k^2 = 100 \\cr &k = \\pm 10 \\end{aligned}<br><br>Since $k$ is positive, choose $k = 10$.",
                "<strong>Step 3: Find the $x$-coordinate of the point of contact:</strong><br>Substitute $k = 10$ into the quadratic equation:\\begin{aligned} &10x^2 - 60x + 90 = 0 \\cr &x^2 - 6x + 9 = 0 \\cr &(x - 3)^2 = 0 \\cr &x = 3 \\end{aligned}",
                "<strong>Step 4: Find the $y$-coordinate of the point of contact:</strong><br>Substitute $x = 3$ and $k = 10$ into the line equation:\\begin{aligned} &y = 3(3) - 10 \\cr &\\quad = -1 \\end{aligned}<br><br>Thus, $k = 10$ and the point of contact is $(3, -1)$.",
                "Final Answer: $k = 10$, point of contact $(3, -1)$"
        ],
        "pi_options": [
                {
                        "ans": "$k = 10$, point of contact $(3, 1)$",
                        "feedback": "This option has a sign error when calculating the $y$-coordinate. Substituting $x = 3$ and $k = 10$ into $y = 3x - k$ yields $y = -1$, not $+1$."
                },
                {
                        "ans": "$k = -10$, point of contact $(-3, 1)$",
                        "feedback": "This option uses the negative root $k = -10$. The question explicitly states that $k$ is a positive constant, so you must select $k = 10$."
                },
                {
                        "ans": "$k = 20$, point of contact $(1, -7)$",
                        "feedback": "This option arises from an error when setting up the discriminant, such as failing to distribute the $-40$ across the term $(k^2 - 10)$, which yields an incorrect equation for $k$."
                }
        ],
        "bradley_insight": {
                "type": "caution",
                "title": "Expanding Brackets Safely",
                "content": "Be extremely meticulous when expanding the squared binomial $(3x - k)^2 = 9x^2 - 6kx + k^2$. A very common algebraic slip is forgetting the middle term and expanding it simply as $9x^2 + k^2$. This will completely ruin your discriminant equation and make solving for $k$ impossible."
        }
},
        {
                "id": "004646",
                "board": "OCR MEI",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Parametric Equations",
                "subtopic": [
                        "Cartesian Verification",
                        "Differentiation"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning.<br><br>A curve has parametric equations $x = \\dfrac{ t }{ 1 + t^2 }$, $y = \\dfrac{ t^2 }{ 1 + t^2 }$, defined for all $t \\in \\mathbb{R}$.<br><br><strong>(i)</strong> Determine the gradient of the curve at the point where $t = 3$.<br><strong>(ii)</strong> Verify that the cartesian equation of the curve is $x^2 + y^2 = y$.",
                "steps": [
                        "<strong>(i) Finding the gradient of the curve at $t = 3$:</strong><br>To find the gradient of a parametric curve, we first differentiate both $x$ and $y$ with respect to $t$ using the quotient rule:<br>\\begin{aligned} \\dfrac{\\mathrm{d}x}{\\mathrm{d}t} &= \\dfrac{ (1 + t^2)(1) - t(2t) }{ (1 + t^2)^2 } \\cr &= \\dfrac{ 1 + t^2 - 2t^2 }{ (1 + t^2)^2 } \\cr &= \\dfrac{ 1 - t^2 }{ (1 + t^2)^2 } \\end{aligned}<br><br>\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}t} &= \\dfrac{ (1 + t^2)(2t) - t^2(2t) }{ (1 + t^2)^2 } \\cr &= \\dfrac{ 2t + 2t^3 - 2t^3 }{ (1 + t^2)^2 } \\cr &= \\dfrac{ 2t }{ (1 + t^2)^2 } \\end{aligned}<br><br>Next, we use the chain rule to find $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$:<br>\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= \\dfrac{ \\mathrm{d}y/\\mathrm{d}t }{ \\mathrm{d}x/\\mathrm{d}t } \\cr &= \\dfrac{ \\dfrac{ 2t }{ (1 + t^2)^2 } }{ \\dfrac{ 1 - t^2 }{ (1 + t^2)^2 } } \\cr &= \\dfrac{ 2t }{ 1 - t^2 } \\end{aligned}<br><br>Now, we substitute $t = 3$ to find the gradient of the tangent at this point:<br>\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= \\dfrac{ 2(3) }{ 1 - 3^2 } \\cr &= \\dfrac{ 6 }{ -8 } \\cr &= -\\dfrac{ 3 }{ 4 } \\end{aligned}",
                        "<strong>(ii) Verifying the Cartesian equation $x^2 + y^2 = y$:</strong><br>We substitute our parametric expressions for $x$ and $y$ into the left-hand side of the proposed equation:<br>\\begin{aligned} x^2 + y^2 &= \\left(\\dfrac{ t }{ 1 + t^2 }\\right)^2 + \\left(\\dfrac{ t^2 }{ 1 + t^2 }\\right)^2 \\cr &= \\dfrac{ t^2 }{ (1 + t^2)^2 } + \\dfrac{ t^4 }{ (1 + t^2)^2 } \\cr &= \\dfrac{ t^2 + t^4 }{ (1 + t^2)^2 } \\cr &= \\dfrac{ t^2(1 + t^2) }{ (1 + t^2)^2 } \\cr &= \\dfrac{ t^2 }{ 1 + t^2 } \\end{aligned}<br><br>Since the parametric equation for $y$ is $y = \\dfrac{ t^2 }{ 1 + t^2 }$, we have:<br>\\begin{aligned} x^2 + y^2 &= y \\end{aligned}<br><br>Thus, the Cartesian equation of the curve is verified."
                ],
                "pi_options": [
                        {
                                "ans": "$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = -\\dfrac{ 3 }{ 4 }, \\quad \\text{Cartesian: } x^2 + y^2 = y^2$$",
                                "feedback": "This option lists an incorrect Cartesian equation. When you factorise $t^2 + t^4 = t^2(1 + t^2)$, dividing by $(1+t^2)^2$ yields $\\dfrac{t^2}{1+t^2} = y$, not $y^2$."
                        },
                        {
                                "ans": "$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{ 3 }{ 4 }, \\quad \\text{Cartesian: } x^2 + y^2 = y$$",
                                "feedback": "This option has a sign error in the gradient. Evaluating $\\dfrac{2t}{1-t^2}$ at $t = 3$ gives $\\dfrac{6}{1-9} = \\dfrac{6}{-8} = -\\dfrac{3}{4}$. Be careful when substituting into denominators containing subtraction!"
                        },
                        {
                                "ans": "$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = -\\dfrac{ 3 }{ 5 }, \\quad \\text{Cartesian: } x^2 + y^2 = y$$",
                                "feedback": "This option arises from an error when simplifying the derivative expressions or making an arithmetic mistake in the denominator, such as calculating $1 - 3^2 = 1 - 9 = -10$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "Simplification Safety",
                        "content": "When differentiating rational parametric equations, always simplify your derivatives $\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}$ and $\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}$ completely before dividing them to find $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$. Leaving common denominators un-cancelled leads to algebraic chaos and makes evaluating the gradient much more difficult."
                }
        },
        {
                "id": "004647",
                "board": "OCR MEI",
                "branch": "Pure",
                "level": "A",
                "major_area": "Coordinate Geometry",
                "topic": "Parametric Equations",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning.<br><br>A curve has parametric equations $x = 3\\cos\\theta$, $y = 4\\sin\\theta$, defined for $0 \\le \\theta < 2\\pi$.<br><br><strong>(i)</strong> Determine the exact gradient of the curve at the point where $\\theta = \\dfrac{ \\pi }{ 6 }$.<br><strong>(ii)</strong> Verify that the cartesian equation of the curve is $\\dfrac{ x^2 }{ 9 } + \\dfrac{ y^2 }{ 16 } = 1$.",
                "steps": [
                        "<strong>(i) Finding the gradient of the curve at $\\theta = \\dfrac{ \\pi }{ 6 }$:</strong><br>We differentiate both parametric equations with respect to the parameter $\\theta$:<br>\\begin{aligned} \\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta} &= -3\\sin\\theta \\cr \\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta} &= 4\\cos\\theta \\end{aligned}<br><br>Next, we use the chain rule to find the gradient function $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$:<br>\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= \\dfrac{ \\mathrm{d}y/\\mathrm{d}\\theta }{ \\mathrm{d}x/\\mathrm{d}\\theta } \\cr &= \\dfrac{ 4\\cos\\theta }{ -3\\sin\\theta } \\cr &= -\\dfrac{ 4 }{ 3 }\\cot\\theta \\end{aligned}<br><br>Now, evaluate this gradient at $\\theta = \\dfrac{ \\pi }{ 6 }$:<br>\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= -\\dfrac{ 4 }{ 3 }\\cot\\left(\\dfrac{ \\pi }{ 6 }\\right) \\cr &= -\\dfrac{ 4 }{ 3 }\\left(\\sqrt{ 3 }\\right) \\cr &= -\\dfrac{ 4\\sqrt{ 3 } }{ 3 } \\end{aligned}",
                        "<strong>(ii) Verifying the Cartesian equation $\\dfrac{ x^2 }{ 9 } + \\dfrac{ y^2 }{ 16 } = 1$:</strong><br>We substitute our expressions $x = 3\\cos\\theta$ and $y = 4\\sin\\theta$ into the left-hand side of the Cartesian equation:<br>\\begin{aligned} \\dfrac{ x^2 }{ 9 } + \\dfrac{ y^2 }{ 16 } &= \\dfrac{ (3\\cos\\theta)^2 }{ 9 } + \\dfrac{ (4\\sin\\theta)^2 }{ 16 } \\cr &= \\dfrac{ 9\\cos^2\\theta }{ 9 } + \\dfrac{ 16\\sin^2\\theta }{ 16 } \\cr &= \\cos^2\\theta + \\sin^2\\theta \\end{aligned}<br><br>Using the fundamental trigonometric identity $\\cos^2\\theta + \\sin^2\\theta = 1$, we get:<br>\\begin{aligned} \\dfrac{ x^2 }{ 9 } + \\dfrac{ y^2 }{ 16 } &= 1 \\end{aligned}<br><br>Thus, the Cartesian equation of the curve is verified."
                ],
                "pi_options": [
                        {
                                "ans": "$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = -\\dfrac{ 4\\sqrt{ 3 } }{ 9 }, \\quad \\text{Cartesian: } \\dfrac{ x^2 }{ 9 } + \\dfrac{ y^2 }{ 16 } = 1$$",
                                "feedback": "This option results from a trigonometric error where you evaluated $\\cot\\left(\\dfrac{\\pi}{6}\\right)$ as $\\dfrac{\\sqrt{3}}{3}$ instead of $\\sqrt{3}$. Note that $\\cot\\left(\\dfrac{\\pi}{6}\\right) = \\dfrac{\\cos(\\pi/6)}{\\sin(\\pi/6)} = \\dfrac{\\sqrt{3}/2}{1/2} = \\sqrt{3}$."
                        },
                        {
                                "ans": "$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = -\\dfrac{ 4\\sqrt{ 3 } }{ 3 }, \\quad \\text{Cartesian: } \\dfrac{ x^2 }{ 3 } + \\dfrac{ y^2 }{ 4 } = 1$$",
                                "feedback": "This option lists an incorrect Cartesian equation. When you square $x = 3\\cos\\theta$, you obtain $x^2 = 9\\cos^2\\theta$. To eliminate the coefficient, you must divide by $9$ (not $3$), so the term is $\\dfrac{x^2}{9}$."
                        },
                        {
                                "ans": "$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{ 4\\sqrt{ 3 } }{ 3 }, \\quad \\text{Cartesian: } \\dfrac{ x^2 }{ 9 } + \\dfrac{ y^2 }{ 16 } = 1$$",
                                "feedback": "This option has a sign error on the gradient. Since $\\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta} = -3\\sin\\theta$ has a negative sign, the resulting gradient function must be negative on the interval $0 < \\theta < \\dfrac{\\pi}{2}$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "Cotangent Conversions",
                        "content": "When dealing with ellipse parametrics $x = a\\cos\\theta$ and $y = b\\sin\\theta$, your gradient $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ will always simplify into a form involving $\\cot\\theta$. Converting $\\dfrac{ \\cos\\theta }{ -\\sin\\theta }$ directly to $-\\cot\\theta$ makes it extremely quick to evaluate the gradient, since $\\cot\\left(\\dfrac{ \\pi }{ 6 }\\right) = \\sqrt{ 3 }$ is a standard exact value."
                }
        },
        {
                "id": "004648",
                "board": "OCR MEI",
                "branch": "Pure",
                "level": "A",
                "major_area": "Coordinate Geometry",
                "topic": "Parametric Equations",
                "subtopic": [
                        "Exponential and Logarithmic Functions and Graphs"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning.<br><br>A curve has parametric equations $x = \\mathrm{e}^{ 2t }$, $y = t\\mathrm{e}^{-t}$, defined for all $t \\in \\mathbb{R}$.<br><br><strong>(i)</strong> Determine the gradient of the curve at the point where $t = 0$.<br><strong>(ii)</strong> Verify that the cartesian equation of the curve is $4y^2x = (\\ln x)^2$, for $x > 0$.",
                "steps": [
                        "<strong>(i) Finding the gradient of the curve at $t = 0$:</strong><br>We differentiate $x = \\mathrm{e}^{ 2t }$ and $y = t\\mathrm{e}^{-t}$ with respect to $t$. Note that $y$ requires the product rule because it is a product of $t$ and $\\mathrm{e}^{-t}$:<br>\\begin{aligned} \\dfrac{\\mathrm{d}x}{\\mathrm{d}t} &= 2\\mathrm{e}^{ 2t } \\end{aligned}<br><br>\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}t} &= (1)\\mathrm{e}^{-t} + t(-\\mathrm{e}^{-t}) \\cr &= \\mathrm{e}^{-t}(1 - t) \\end{aligned}<br><br>Now, use the chain rule to find the gradient function $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$:<br>\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= \\dfrac{ \\mathrm{d}y/\\mathrm{d}t }{ \\mathrm{d}x/\\mathrm{d}t } \\cr &= \\dfrac{ \\mathrm{e}^{-t}(1 - t) }{ 2\\mathrm{e}^{ 2t } } \\cr &= \\dfrac{ 1 - t }{ 2\\mathrm{e}^{ 3t } } \\end{aligned}<br><br>Evaluating this gradient at $t = 0$:<br>\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= \\dfrac{ 1 - 0 }{ 2\\mathrm{e}^{ 0 } } \\cr &= \\dfrac{ 1 }{ 2 } \\end{aligned}",
                        "<strong>(ii) Verifying the Cartesian equation $4y^2x = (\\ln x)^2$:</strong><br>From our parametric equation for $x$, we take the natural logarithm of both sides to isolate $t$:<br>\\begin{aligned} x &= \\mathrm{e}^{ 2t } \\cr \\ln x &= 2t \\cr (\\ln x)^2 &= 4t^2 \\end{aligned}<br><br>Now we substitute our parametric expressions for $x$ and $y$ into the left-hand side of the Cartesian equation:<br>\\begin{aligned} 4y^2x &= 4\\left(t\\mathrm{e}^{-t}\\right)^2 \\left(\\mathrm{e}^{ 2t }\\right) \\cr &= 4\\left(t^2\\mathrm{e}^{-2t}\\right) \\left(\\mathrm{e}^{ 2t }\\right) \\cr &= 4t^2 \\mathrm{e}^{-2t + 2t} \\cr &= 4t^2 \\mathrm{e}^{ 0 } \\cr &= 4t^2 \\end{aligned}<br><br>Since both the left-hand side and the right-hand side simplify to $4t^2$, the Cartesian equation $4y^2x = (\\ln x)^2$ is verified."
                ],
                "pi_options": [
                        {
                                "ans": "$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = -\\dfrac{ 1 }{ 2 }, \\quad \\text{Cartesian: } 4y^2x = (\\ln x)^2$$",
                                "feedback": "This option has a sign error on the gradient. Differentiating $y = t\\mathrm{e}^{-t}$ yields $\\mathrm{e}^{-t}(1 - t)$. Substituting $t = 0$ into this expression gives $+1$ in the numerator, leading to a positive gradient of $\\dfrac{1}{2}$."
                        },
                        {
                                "ans": "$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{ 1 }{ 2 }, \\quad \\text{Cartesian: } 2y^2x = (\\ln x)^2$$",
                                "feedback": "This option contains an incorrect coefficient in the Cartesian equation. Squaring $y = t\\mathrm{e}^{-t}$ gives $y^2 = t^2\\mathrm{e}^{-2t}$. When you multiply this by $x = \\mathrm{e}^{2t}$, you get $y^2x = t^2$. Therefore, you need a factor of $4$ to match $(\\ln x)^2 = 4t^2$, making the equation $4y^2x = (\\ln x)^2$."
                        },
                        {
                                "ans": "$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 1, \\quad \\text{Cartesian: } 4y^2x = (\\ln x)^2$$",
                                "feedback": "This option arises if you forget the factor of $2$ when differentiating $x = \\mathrm{e}^{2t}$ (failing to apply the chain rule), which leads to an incorrect gradient of $1$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Product Rule Trap",
                        "content": "Be extremely careful when differentiating $y = t\\mathrm{e}^{-t}$. A common student slip is to differentiate it term-by-term as if it were a simple sum, obtaining $\\mathrm{e}^{-t}$ or $-\\mathrm{e}^{-t}$. Remember that this is a product of two functions, so you must strictly apply the product rule: $u'v + uv'$."
                }
        },
        {
                "id": "004649",
                "board": "OCR MEI",
                "branch": "Pure",
                "level": "A",
                "major_area": "Coordinate Geometry",
                "topic": "Parametric Equations",
                "subtopic": [
                        "Algebraic Methods"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning.<br><br>A curve has parametric equations $x = t + \\dfrac{ 2 }{ t }$, $y = t - \\dfrac{ 2 }{ t }$, defined for $t \\neq 0$.<br><br><strong>(i)</strong> Determine the gradient of the curve at the point where $t = 2$.<br><strong>(ii)</strong> Verify that the cartesian equation of the curve is $x^2 - y^2 = 8$.",
                "steps": [
                        "<strong>(i) Finding the gradient of the curve at $t = 2$:</strong><br>We differentiate our parametric equations with respect to $t$. Using the power rule on the rational terms:<br>\\begin{aligned} \\dfrac{\\mathrm{d}x}{\\mathrm{d}t} &= 1 - \\dfrac{ 2 }{ t^2 } \\end{aligned}<br><br>\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}t} &= 1 + \\dfrac{ 2 }{ t^2 } \\end{aligned}<br><br>Next, we use the chain rule to obtain the gradient function $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$:<br>\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= \\dfrac{ \\mathrm{d}y/\\mathrm{d}t }{ \\mathrm{d}x/\\mathrm{d}t } \\cr &= \\dfrac{ 1 + \\dfrac{ 2 }{ t^2 } }{ 1 - \\dfrac{ 2 }{ t^2 } } \\end{aligned}<br><br>Now, substitute $t = 2$ into this gradient function:<br>\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= \\dfrac{ 1 + \\dfrac{ 2 }{ 2^2 } }{ 1 - \\dfrac{ 2 }{ 2^2 } } \\cr &= \\dfrac{ 1 + \\dfrac{ 1 }{ 2 } }{ 1 - \\dfrac{ 1 }{ 2 } } \\cr &= \\dfrac{ 1.5 }{ 0.5 } \\cr &= 3 \\end{aligned}",
                        "<strong>(ii) Verifying the Cartesian equation $x^2 - y^2 = 8$:</strong><br>We substitute our parametric expressions for $x$ and $y$ into the left-hand side of the proposed Cartesian equation:<br>\\begin{aligned} x^2 - y^2 &= \\left(t + \\dfrac{ 2 }{ t }\\right)^2 - \\left(t - \\dfrac{ 2 }{ t }\\right)^2 \\cr &= \\left(t^2 + 2(t)\\left(\\dfrac{ 2 }{ t }\\right) + \\dfrac{ 4 }{ t^2 }\\right) - \\left(t^2 - 2(t)\\left(\\dfrac{ 2 }{ t }\\right) + \\dfrac{ 4 }{ t^2 }\\right) \\cr &= \\left(t^2 + 4 + \\dfrac{ 4 }{ t^2 }\\right) - \\left(t^2 - 4 + \\dfrac{ 4 }{ t^2 }\\right) \\cr &= t^2 + 4 + \\dfrac{ 4 }{ t^2 } - t^2 + 4 - \\dfrac{ 4 }{ t^2 } \\cr &= 8 \\end{aligned}<br><br>Thus, the Cartesian equation of the curve is verified."
                ],
                "pi_options": [
                        {
                                "ans": "$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = -3, \\quad \\text{Cartesian: } x^2 - y^2 = 8$$",
                                "feedback": "This option has an incorrect sign for the gradient. In the first quadrant (where $t = 2$), both parametric derivatives are positive, resulting in a positive gradient of $3$."
                        },
                        {
                                "ans": "$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3, \\quad \\text{Cartesian: } x^2 - y^2 = 4$$",
                                "feedback": "This option has an incorrect constant on the Cartesian equation. When you expand the squared brackets, the middle terms are $+4$ and $-4$, so their difference is $4 - (-4) = 8$, not $4$."
                        },
                        {
                                "ans": "$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 1, \\quad \\text{Cartesian: } x^2 - y^2 = 8$$",
                                "feedback": "This option results from a differentiation error, such as forgetting to apply the power rule to the $\\dfrac{2}{t}$ terms, obtaining $1$ for both derivatives."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "Difference of Two Squares",
                        "content": "Verifying the Cartesian equation $x^2 - y^2 = 8$ is a classic application of algebraic identities. Instead of expanding the squares term-by-term, you can also view it as a difference of two squares: $(x - y)(x + y)$. Since $x - y = \\dfrac{ 4 }{ t }$ and $x + y = 2t$, multiplying them gives $\\left(\\dfrac{ 4 }{ t }\\right)(2t) = 8$ instantly. Spotting these algebraic structures is an excellent mathematical superpower!"
                }
        },
        {
                "id": "004650",
                "board": "OCR MEI",
                "branch": "Pure",
                "level": "A",
                "major_area": "Coordinate Geometry",
                "topic": "Parametric Equations",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning.<br><br>A curve has parametric equations $x = \\sin\\theta$, $y = \\cos 2\\theta$, defined for $0 \\le \\theta < 2\\pi$.<br><br><strong>(i)</strong> Determine the exact gradient of the curve at the point where $\\theta = \\dfrac{ \\pi }{ 3 }$.<br><strong>(ii)</strong> Verify that the cartesian equation of the curve is $y = 1 - 2x^2$.",
                "steps": [
                        "<strong>(i) Finding the gradient of the curve at $\\theta = \\dfrac{ \\pi }{ 3 }$:</strong><br>We differentiate our parametric equations with respect to the parameter $\\theta$:<br>\\begin{aligned} \\dfrac{\\mathrm{d}x}{\\mathrm{d}\\theta} &= \\cos\\theta \\cr \\dfrac{\\mathrm{d}y}{\\mathrm{d}\\theta} &= -2\\sin 2\\theta \\end{aligned}<br><br>We use the chain rule to obtain the gradient function $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$:<br>\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= \\dfrac{ \\mathrm{d}y/\\mathrm{d}\\theta }{ \\mathrm{d}x/\\mathrm{d}\\theta } \\cr &= \\dfrac{ -2\\sin 2\\theta }{ \\cos\\theta } \\end{aligned}<br><br>Now, we evaluate this gradient at $\\theta = \\dfrac{ \\pi }{ 3 }$:<br>\\begin{aligned} \\cos\\left(\\dfrac{ \\pi }{ 3 }\\right) &= \\dfrac{ 1 }{ 2 } \\cr \\sin\\left(2 \\times \\dfrac{ \\pi }{ 3 }\\right) &= \\sin\\left(\\dfrac{ 2\\pi }{ 3 }\\right) \\cr &= \\dfrac{ \\sqrt{ 3 } }{ 2 } \\end{aligned}<br><br>Substituting these exact values into our gradient function:<br>\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= \\dfrac{ -2\\left(\\dfrac{ \\sqrt{ 3 } }{ 2 }\\right) }{ \\dfrac{ 1 }{ 2 } } \\cr &= \\dfrac{ -\\sqrt{ 3 } }{ \\dfrac{ 1 }{ 2 } } \\cr &= -2\\sqrt{ 3 } \\end{aligned}",
                        "<strong>(ii) Verifying the Cartesian equation $y = 1 - 2x^2$:</strong><br>We recall the trigonometric double-angle identity for cosine:<br>\\begin{aligned} \\cos 2\\theta &= 1 - 2\\sin^2\\theta \\end{aligned}<br><br>Since our parametric equations are $x = \\sin\\theta$ and $y = \\cos 2\\theta$, we can substitute these directly into the identity:<br>\\begin{aligned} y &= 1 - 2x^2 \\end{aligned}<br><br>Thus, the Cartesian equation of the curve is verified."
                ],
                "pi_options": [
                        {
                                "ans": "$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = -\\sqrt{ 3 }, \\quad \\text{Cartesian: } y = 1 - 2x^2$$",
                                "feedback": "This option results from failing to divide by the denominator term $\\cos\\left(\\dfrac{\\pi}{3}\\right) = \\dfrac{1}{2}$. Remember to divide the $y$-derivative by the $x$-derivative to find the gradient."
                        },
                        {
                                "ans": "$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = -2\\sqrt{ 3 }, \\quad \\text{Cartesian: } y = 2x^2 - 1$$",
                                "feedback": "This option has the wrong sign order for the double-angle identity. The correct identity is $\\cos 2\\theta = 1 - 2\\sin^2\\theta$, which maps to $y = 1 - 2x^2$, not $y = 2x^2 - 1$."
                        },
                        {
                                "ans": "$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 2\\sqrt{ 3 }, \\quad \\text{Cartesian: } y = 1 - 2x^2$$",
                                "feedback": "This option has a sign error on the gradient. Differentiating $y = \\cos 2\\theta$ yields $-2\\sin 2\\theta$. In the first quadrant, $\\sin(2\\pi/3) > 0$, so the gradient must be negative."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "Double Angle Identities",
                        "content": "When eliminating the parameter $\\theta$ from trigonometric equations, always select the correct form of the double-angle identity. Since $x = \\sin\\theta$, using the form $\\cos 2\\theta = 1 - 2\\sin^2\\theta$ is by far the cleanest choice as it immediately allows you to substitute $x^2$ for $\\sin^2\\theta$. Choosing the other forms ($\\cos^2\\theta - \\sin^2\\theta$ or $2\\cos^2\\theta - 1$) requires extra, unnecessary algebraic manipulation."
                }
        }
];
