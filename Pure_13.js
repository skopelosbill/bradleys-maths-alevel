window.ALEVEL_QUESTIONS = [
        {
                "id": "004601",
                "board": "OCR",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "It is given that the angle $\\theta$ satisfies the equation:<br><br>$\\sin\\left(2\\theta + \\dfrac{ 1 }{ 4 }\\pi\\right) = 2\\cos\\left(2\\theta + \\dfrac{ 1 }{ 4 }\\pi\\right)$<br><br><strong>(i)</strong> Show that $\\tan 2\\theta = \\dfrac{ 1 }{ 3 }$.<br><br><strong>(ii)</strong> Hence find, in surd form, the exact value of $\\tan\\theta$, given that $\\theta$ is an obtuse angle.",
                "steps": [
                        "<strong>(i)</strong> Start with the given trigonometric equation:<br>$\\sin\\left(2\\theta + \\dfrac{ 1 }{ 4 }\\pi\\right) = 2\\cos\\left(2\\theta + \\dfrac{ 1 }{ 4 }\\pi\\right)$",
                        "Divide both sides of the equation by $\\cos\\left(2\\theta + \\dfrac{ 1 }{ 4 }\\pi\\right)$ (noting that this term is non-zero):<br>$\\tan\\left(2\\theta + \\dfrac{ 1 }{ 4 }\\pi\\right) = 2$",
                        "Use the compound angle formula for tangent, $\\tan(A + B) = \\dfrac{ \\tan A + \\tan B }{ 1 - \\tan A \\tan B }$, where $A = 2\\theta$ and $B = \\dfrac{ \\pi }{ 4 }$ (recalling that $\\tan\\left(\\dfrac{ \\pi }{ 4 }\\right) = 1$):<br>\\begin{aligned} \\tan\\left(2\\theta + \\dfrac{ 1 }{ 4 }\\pi\\right) &= 2 \\cr \\dfrac{ \\tan 2\\theta + 1 }{ 1 - \\tan 2\\theta } &= 2 \\end{aligned}",
                        "Solve this equation for $\\tan 2\\theta$:<br>\\begin{aligned} \\tan 2\\theta + 1 &= 2(1 - \\tan 2\\theta) \\cr \\tan 2\\theta + 1 &= 2 - 2\\tan 2\\theta \\cr 3\\tan 2\\theta &= 1 \\cr \\tan 2\\theta &= \\dfrac{ 1 }{ 3 } \\end{aligned}",
                        "<strong>(ii)</strong> To find $\\tan\\theta$, apply the double-angle formula for tangent, $\\tan 2\\theta = \\dfrac{ 2\\tan\\theta }{ 1 - \\tan^2\\theta }$:<br>\\begin{aligned} \\dfrac{ 2\\tan\\theta }{ 1 - \\tan^2\\theta } &= \\dfrac{ 1 }{ 3 } \\end{aligned}",
                        "Rearrange this expression to form a standard quadratic equation in terms of $\\tan\\theta$:<br>\\begin{aligned} 6\\tan\\theta &= 1 - \\tan^2\\theta \\cr \\tan^2\\theta + 6\\tan\\theta - 1 &= 0 \\end{aligned}",
                        "Apply the quadratic formula to solve for $\\tan\\theta$:<br>\\begin{aligned} \\tan\\theta &= \\dfrac{ -6 \\pm \\sqrt{ 6^2 - 4(1)(-1) } }{ 2 } \\cr &= \\dfrac{ -6 \\pm \\sqrt{ 36 + 4 } }{ 2 } \\cr &= \\dfrac{ -6 \\pm \\sqrt{ 40 } }{ 2 } \\cr &= \\dfrac{ -6 \\pm 2\\sqrt{ 10 } }{ 2 } \\cr &= -3 \\pm \\sqrt{ 10 } \\end{aligned}",
                        "We are given that $\\theta$ is an obtuse angle ($90^\\circ < \\theta < 180^\\circ$). In the second quadrant, tangent must be strictly negative:<br><br><strong>\u2022</strong> $-3 + \\sqrt{ 10 } \\approx 0.16 > 0$ (rejected)<br><strong>\u2022</strong> $-3 - \\sqrt{ 10 } \\approx -6.16 < 0$ (accepted)<br><br>Therefore, the exact value in surd form is:<br>$\\tan\\theta = -3 - \\sqrt{ 10 }$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(i)</strong> $\\tan 2\\theta = \\dfrac{ 1 }{ 3 }$<br><strong>(ii)</strong> $\\tan\\theta = -3 + \\sqrt{ 10 }$",
                                "feedback": "You identified the correct quadratic roots, but check your domain boundary. Since $\\theta$ is an obtuse angle ($90^\\circ < \\theta < 180^\\circ$), $\\tan\\theta$ must be strictly negative. Therefore, you must reject the positive root $-3 + \\sqrt{ 10 }$."
                        },
                        {
                                "ans": "<strong>(i)</strong> $\\tan 2\\theta = 3$<br><strong>(ii)</strong> $\\tan\\theta = -3 - \\sqrt{ 10 }$",
                                "feedback": "Check your algebraic expansion of the compound angle equation in part <strong>(i)</strong>. Rearranging $\\dfrac{ \\tan 2\\theta + 1 }{ 1 - \\tan 2\\theta } = 2$ leads to $3\\tan 2\\theta = 1 \\implies \\tan 2\\theta = \\dfrac{ 1 }{ 3 }$, not $3$."
                        },
                        {
                                "ans": "<strong>(i)</strong> $\\tan 2\\theta = \\dfrac{ 1 }{ 3 }$<br><strong>(ii)</strong> $\\tan\\theta = -3 - \\sqrt{ 8 }$",
                                "feedback": "Check your quadratic formula calculation in part <strong>(ii)</strong>. The discriminant is $b^2 - 4ac = 6^2 - 4(1)(-1) = 40$. Taking the square root of $40$ yields $2\\sqrt{ 10 }$, which simplifies to $\\sqrt{ 10 }$ when divided by $2$, not $\\sqrt{ 8 }$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Quadrant Signs",
                        "content": "A very common source of lost marks in Year 2 trigonometric equations is ignoring domain boundaries. When a quadratic yields two potential roots (like $-3 \\pm \\sqrt{ 10 }$), always refer back to the specified range of the angle. Since $\\theta$ is obtuse, it lies in the second quadrant, meaning $\\tan\\theta$ must be negative."
                }
        },
        {
                "id": "004602",
                "board": "OCR",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "It is given that the angle $\\theta$ satisfies the equation:<br><br>$\\sin(\\theta + 60^\\circ) = 3\\cos(\\theta + 30^\\circ)$<br><br><strong>(i)</strong> Show that $\\tan\\theta = \\dfrac{ \\sqrt{ 3 } }{ 2 }$.<br><br><strong>(ii)</strong> Hence find the exact value of $\\sec^2\\theta$.",
                "steps": [
                        "<strong>(i)</strong> Apply the compound angle expansion formulas for sine and cosine, $\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B$ and $\\cos(A + B) = \\cos A \\cos B - \\sin A \\sin B$:<br><br><strong>Left-hand side (LHS):</strong><br>\\begin{aligned} \\sin(\\theta + 60^\\circ) &= \\sin\\theta \\cos 60^\\circ + \\cos\\theta \\sin 60^\\circ \\cr &= \\dfrac{ 1 }{ 2 }\\sin\\theta + \\dfrac{ \\sqrt{ 3 } }{ 2 }\\cos\\theta \\end{aligned}",
                        "<strong>Right-hand side (RHS):</strong><br>\\begin{aligned} 3\\cos(\\theta + 30^\\circ) &= 3(\\cos\\theta \\cos 30^\\circ - \\sin\\theta \\sin 30^\\circ) \\cr &= 3\\left( \\dfrac{ \\sqrt{ 3 } }{ 2 }\\cos\\theta - \\dfrac{ 1 }{ 2 }\\sin\\theta \\right) \\cr &= \\dfrac{ 3\\sqrt{ 3 } }{ 2 }\\cos\\theta - \\dfrac{ 3 }{ 2 }\\sin\\theta \\end{aligned}",
                        "Equate the expanded LHS and RHS expressions:<br>$\\dfrac{ 1 }{ 2 }\\sin\\theta + \\dfrac{ \\sqrt{ 3 } }{ 2 }\\cos\\theta = \\dfrac{ 3\\sqrt{ 3 } }{ 2 }\\cos\\theta - \\dfrac{ 3 }{ 2 }\\sin\\theta$",
                        "Multiply both sides of the equation by $2$ to clear the denominators, then group like terms:<br>\\begin{aligned} \\sin\\theta + \\sqrt{ 3 }\\cos\\theta &= 3\\sqrt{ 3 }\\cos\\theta - 3\\sin\\theta \\cr \\sin\\theta + 3\\sin\\theta &= 3\\sqrt{ 3 }\\cos\\theta - \\sqrt{ 3 }\\cos\\theta \\cr 4\\sin\\theta &= 2\\sqrt{ 3 }\\cos\\theta \\cr 2\\sin\\theta &= \\sqrt{ 3 }\\cos\\theta \\end{aligned}",
                        "Divide both sides of the equation by $2\\cos\\theta$ to express in terms of $\\tan\\theta$:<br>\\begin{aligned} \\dfrac{ \\sin\\theta }{ \\cos\\theta } &= \\dfrac{ \\sqrt{ 3 } }{ 2 } \\cr \\tan\\theta &= \\dfrac{ \\sqrt{ 3 } }{ 2 } \\end{aligned}",
                        "<strong>(ii)</strong> To find $\\sec^2\\theta$, use the fundamental Pythagorean trigonometric identity, $\\sec^2\\theta = 1 + \\tan^2\\theta$:<br>\\begin{aligned} \\sec^2\\theta &= 1 + \\left( \\dfrac{ \\sqrt{ 3 } }{ 2 } \\right)^2 \\cr &= 1 + \\dfrac{ 3 }{ 4 } \\cr &= \\dfrac{ 7 }{ 4 } \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(i)</strong> $\\tan\\theta = \\dfrac{ \\sqrt{ 3 } }{ 2 }$<br><strong>(ii)</strong> $\\sec^2\\theta = \\dfrac{ 5 }{ 4 }$",
                                "feedback": "Check your identity application in part <strong>(ii)</strong>. Squaring $\\tan\\theta = \\dfrac{ \\sqrt{ 3 } }{ 2 }$ yields $\\dfrac{ 3 }{ 4 }$. Since $\\sec^2\\theta = 1 + \\tan^2\\theta$, you must calculate $1 + \\dfrac{ 3 }{ 4 } = \\dfrac{ 7 }{ 4 }$."
                        },
                        {
                                "ans": "<strong>(i)</strong> $\\tan\\theta = \\sqrt{ 3 }$<br><strong>(ii)</strong> $\\sec^2\\theta = 4$",
                                "feedback": "Check your algebraic rearrangement in part <strong>(i)</strong>. The equation $4\\sin\\theta = 2\\sqrt{ 3 }\\cos\\theta$ simplifies to $\\tan\\theta = \\dfrac{ 2\\sqrt{ 3 } }{ 4 } = \\dfrac{ \\sqrt{ 3 } }{ 2 }$, not $\\sqrt{ 3 }$."
                        },
                        {
                                "ans": "<strong>(i)</strong> $\\tan\\theta = \\dfrac{ \\sqrt{ 3 } }{ 2 }$<br><strong>(ii)</strong> $\\sec^2\\theta = \\dfrac{ 13 }{ 4 }$",
                                "feedback": "Check your identity formula. Remember that $\\sec^2\\theta = 1 + \\tan^2\\theta$. It appears you may have used $\\sec^2\\theta = 1 + 4\\tan^2\\theta$ or made an arithmetic error when adding $1$ to $\\dfrac{ 3 }{ 4 }$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Expanding with Exact Values",
                        "content": "Always write down your exact values for common angles (like $\\sin 60^\\circ = \\dfrac{ \\sqrt{ 3 } }{ 2 }$ and $\\cos 30^\\circ = \\dfrac{ \\sqrt{ 3 } }{ 2 }$) before expanding. This ensures you can easily factorise and simplify coefficients without making early arithmetic slips."
                }
        },
        {
                "id": "004603",
                "board": "OCR",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning.<br><br>Solve the equation $3\\cos 2\\theta + \\sin\\theta = 2$ for $0^\\circ \\le \\theta < 360^\\circ$, giving your answers to $1$ decimal place where appropriate.",
                "steps": [
                        "Use the double-angle identity for cosine, $\\cos 2\\theta = 1 - 2\\sin^2\\theta$, to write the entire equation in terms of $\\sin\\theta$:<br>\\begin{aligned} 3(1 - 2\\sin^2\\theta) + \\sin\\theta &= 2 \\cr 3 - 6\\sin^2\\theta + \\sin\\theta &= 2 \\end{aligned}",
                        "Rearrange the expression to form a standard quadratic equation with a positive lead coefficient:<br>\\begin{aligned} -6\\sin^2\\theta + \\sin\\theta + 1 &= 0 \\cr 6\\sin^2\\theta - \\sin\\theta - 1 &= 0 \\end{aligned}",
                        "Factorise the quadratic expression by splitting the middle term:<br>\\begin{aligned} 6\\sin^2\\theta - 3\\sin\\theta + 2\\sin\\theta - 1 &= 0 \\cr 3\\sin\\theta(2\\sin\\theta - 1) + 1(2\\sin\\theta - 1) &= 0 \\cr (2\\sin\\theta - 1)(3\\sin\\theta + 1) &= 0 \\end{aligned}<br>This yields two solutions for $\\sin\\theta$: $\\sin\\theta = \\dfrac{ 1 }{ 2 }$ or $\\sin\\theta = -\\dfrac{ 1 }{ 3 }$."
                ],
                "pi_options": [
                        {
                                "ans": "$$\\theta = 30.0^\\circ$, $150.0^\\circ$",
                                "feedback": "You have correctly solved for the first branch of solutions, but remember that the quadratic yields a second valid branch of solutions from $\\sin\\theta = -\\dfrac{ 1 }{ 3 }$. You must solve both to find all angles within the domain."
                        },
                        {
                                "ans": "$$\\theta = 30.0^\\circ$, $150.0^\\circ$, $19.5^\\circ$, $340.5^\\circ$",
                                "feedback": "Check your signs in Case 2. Since $\\sin\\theta = -\\dfrac{ 1 }{ 3 }$ is negative, your answers must lie in the third and fourth quadrants. The angle $19.5^\\circ$ is in the first quadrant where sine is positive."
                        },
                        {
                                "ans": "$$\\theta = 60.0^\\circ$, $120.0^\\circ$, $199.5^\\circ$, $340.5^\\circ$",
                                "feedback": "Check your principal solution for Case 1. The angle for which $\\sin\\theta = \\dfrac{ 1 }{ 2 }$ is $30^\\circ$, not $60^\\circ$ (which corresponds to $\\sin 60^\\circ = \\dfrac{ \\sqrt{ 3 } }{ 2 }$)."
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
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "The expression $3\\sin\\theta - 4\\cos\\theta$ can be written in the form $R\\sin(\\theta - \\alpha)$, where $R > 0$ and $0^\\circ < \\alpha < 90^\\circ$.<br><br><strong>(i)</strong> Find the value of $R$ and the value of $\\alpha$, giving $\\alpha$ to $2$ decimal places.<br><br><strong>(ii)</strong> Hence find the greatest and least possible values of the expression:<br>$\\dfrac{ 10 }{ 3\\sin\\theta - 4\\cos\\theta + 7 }$",
                "steps": [
                        "<strong>(i)</strong> Expand $R\\sin(\\theta - \\alpha)$ using the compound angle identity for sine:<br>\\begin{aligned} R\\sin(\\theta - \\alpha) &= R(\\sin\\theta \\cos\\alpha - \\cos\\theta \\sin\\alpha) \\cr &= (R\\cos\\alpha)\\sin\\theta - (R\\sin\\alpha)\\cos\\theta \\end{aligned}",
                        "Compare this expansion with the coefficients of the given expression, $3\\sin\\theta - 4\\cos\\theta$:<br>\\begin{aligned} R\\cos\\alpha &= 3 \\cr R\\sin\\alpha &= 4 \\end{aligned}",
                        "Solve for $R$ by squaring and adding both equations, recalling that $\\sin^2\\alpha + \\cos^2\\alpha = 1$:<br>\\begin{aligned} R^2\\sin^2\\alpha + R^2\\cos^2\\alpha &= 3^2 + 4^2 \\cr R^2(\\sin^2\\alpha + \\cos^2\\alpha) &= 9 + 16 \\cr R^2 &= 25 \\cr R &= 5 \\quad (\\text{since } R > 0) \\end{aligned}",
                        "Solve for $\\alpha$ by dividing the equations:<br>\\begin{aligned} \\dfrac{ R\\sin\\alpha }{ R\\cos\\alpha } &= \\dfrac{ 4 }{ 3 } \\cr \\tan\\alpha &= \\dfrac{ 4 }{ 3 } \\cr \\alpha &= \\arctan\\left( \\dfrac{ 4 }{ 3 } \\right) \\approx 53.13^\\circ \\end{aligned}",
                        "<strong>(ii)</strong> Use your $R\\sin(\\theta - \\alpha)$ compound form to rewrite the expression:<br>\\begin{aligned} \\dfrac{ 10 }{ 3\\sin\\theta - 4\\cos\\theta + 7 } &= \\dfrac{ 10 }{ 5\\sin(\\theta - 53.13^\\circ) + 7 } \\end{aligned}",
                        "To find the greatest and least values, analyze the range of the sine function, $-1 \\le \\sin(\\theta - 53.13^\\circ) \\le 1$:<br><br><strong>Greatest value:</strong> occurs when the denominator is minimised, which is when $\\sin(\\theta - 53.13^\\circ) = -1$:<br>\\begin{aligned} \\text{Greatest Value} &= \\dfrac{ 10 }{ 5(-1) + 7 } \\cr &= \\dfrac{ 10 }{ 2 } \\cr &= 5 \\end{aligned}",
                        "<strong>Least value:</strong> occurs when the denominator is maximised, which is when $\\sin(\\theta - 53.13^\\circ) = 1$:<br>\\begin{aligned} \\text{Least Value} &= \\dfrac{ 10 }{ 5(1) + 7 } \\cr &= \\dfrac{ 10 }{ 12 } \\cr &= \\dfrac{ 5 }{ 6 } \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(i)</strong> $R = 5$, $\\alpha \\approx 53.13^\\circ$<br><strong>(ii)</strong> $\\text{Greatest} = \\dfrac{ 10 }{ 7 }$, $\\text{Least} = 0$",
                                "feedback": "When finding the greatest and least values of the fraction, you must vary the entire expression $3\\sin\\theta - 4\\cos\\theta = 5\\sin(\\theta - 53.13^\\circ)$ between its maximum of $5$ and minimum of $-5$. It appears you assumed the trigonometric part has a minimum of $0$."
                        },
                        {
                                "ans": "<strong>(i)</strong> $R = 25$, $\\alpha \\approx 53.13^\\circ$<br><strong>(ii)</strong> $\\text{Greatest} = 5$, $\\text{Least} = \\dfrac{ 5 }{ 6 }$",
                                "feedback": "Check your calculation for $R$ in part <strong>(i)</strong>. Since $R^2 = 3^2 + 4^2 = 25$, taking the square root of $25$ yields $R = 5$, not $25$."
                        },
                        {
                                "ans": "<strong>(i)</strong> $R = 5$, $\\alpha \\approx 36.87^\\circ$<br><strong>(ii)</strong> $\\text{Greatest} = 5$, $\\text{Least} = \\dfrac{ 5 }{ 6 }$",
                                "feedback": "Check your calculation for $\\alpha$. Since $R\\sin\\alpha = 4$ and $R\\cos\\alpha = 3$, you must evaluate $\\tan\\alpha = \\dfrac{ 4 }{ 3 } \\implies \\alpha \\approx 53.13^\\circ$. Using $\\dfrac{ 3 }{ 4 }$ leads to the incorrect angle $36.87^\\circ$."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Greatest and Least Value Boundaries",
                        "content": "For a fraction of the form $\\dfrac{ A }{ B\\sin(x) + C }$, the maximum value of the fraction occurs when the denominator is at its absolute minimum (i.e. when $\\sin(x) = -1$). Conversely, the minimum of the fraction occurs when the denominator is at its absolute maximum (i.e. when $\\sin(x) = 1$). Always be careful not to make the common error of matching 'greatest' with 'maximum sine'."
                }
        },
        {
                "id": "004605",
                "board": "OCR",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "Solve the equation $2\\sec^2\\theta - \\tan\\theta = 5$ for $0 \\le \\theta < 2\\pi$, giving your answers in terms of $\\pi$ where exact, or to $2$ decimal places where appropriate.",
                "steps": [
                        "Use the Pythagorean trigonometric identity, $\\sec^2\\theta = 1 + \\tan^2\\theta$, to write the entire equation in terms of $\\tan\\theta$:<br>\\begin{aligned} 2(1 + \\tan^2\\theta) - \\tan\\theta &= 5 \\cr 2 + 2\\tan^2\\theta - \\tan\\theta - 5 &= 0 \\cr 2\\tan^2\\theta - \\tan\\theta - 3 &= 0 \\end{aligned}",
                        "Factorise the quadratic expression by splitting the middle term:<br>\\begin{aligned} 2\\tan^2\\theta - 3\\tan\\theta + 2\\tan\\theta - 3 &= 0 \\cr \\tan\\theta(2\\tan\\theta - 3) + 1(2\\tan\\theta - 3) &= 0 \\cr (2\\tan\\theta - 3)(\\tan\\theta + 1) &= 0 \\end{aligned}<br>This yields two solutions for $\\tan\\theta$: $\\tan\\theta = \\dfrac{ 3 }{ 2 }$ or $\\tan\\theta = -1$.",
                        "Divide the problem into two cases to find all angles within the interval $0 \\le \\theta < 2\\pi$:<br><br><strong>Case 1:</strong> $\\tan\\theta = \\dfrac{ 3 }{ 2 }$<br>The principal solution is $\\theta = \\arctan\\left( \\dfrac{ 3 }{ 2 } \\right) \\approx 0.98$ rad. Since tangent is positive in the first and third quadrants, the second solution is:<br>\\begin{aligned} \\theta &= 0.98 + \\pi \\cr \\theta &\\approx 4.12 \\text{ rad} \\end{aligned}",
                        "<strong>Case 2:</strong> $\\tan\\theta = -1$<br>Since tangent is negative in the second and fourth quadrants, the exact solutions in the given interval are:<br>\\begin{aligned} \\theta &= \\pi - \\dfrac{ \\pi }{ 4 } = \\dfrac{ 3\\pi }{ 4 } \\cr \\theta &= 2\\pi - \\dfrac{ \\pi }{ 4 } = \\dfrac{ 7\\pi }{ 4 } \\end{aligned}",
                        "Combining both cases, all valid solutions in the interval $0 \\le \\theta < 2\\pi$ (expressed to $2$ decimal places where not exact) are:<br>$\\theta \\approx 0.98$, $4.12$, $\\dfrac{ 3\\pi }{ 4 }$, $\\dfrac{ 7\\pi }{ 4 }$"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\theta \\approx 0.98$, $4.12$, $\\dfrac{ \\pi }{ 4 }$, $\\dfrac{ 5\\pi }{ 4 }$",
                                "feedback": "Check your quadrant boundaries for Case 2. Since $\\tan\\theta = -1$ is negative, your answers must lie in the second and fourth quadrants. The angles $\\dfrac{ \\pi }{ 4 }$ and $\\dfrac{ 5\\pi }{ 4 }$ correspond to $\\tan\\theta = +1$, which is incorrect."
                        },
                        {
                                "ans": "$$\\theta \\approx 0.98$, $\\dfrac{ 3\\pi }{ 4 }$",
                                "feedback": "You have correctly solved for the principal angles of both cases, but remember that the interval is $0 \\le \\theta < 2\\pi$. Since the tangent function repeats every $\\pi$ radians, you must add $\\pi$ to both principal values to find all valid solutions."
                        },
                        {
                                "ans": "$$\\theta \\approx 0.59$, $3.73$, $\\dfrac{ 3\\pi }{ 4 }$, $\\dfrac{ 7\\pi }{ 4 }$",
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
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differential Equations",
                "subtopic": [
                        "Functions and Mappings",
                        "Integration"
                ],
                "img": false,
                "question": "The gradient of the curve $y = \\mathrm{f}(x)$ is given by the differential equation:<br><br>$(2x - 1)^3 \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} + 8y^2 = 0$ <br><br>and the curve passes through the point $(1, 1)$.<br><br>By solving this differential equation, show that $\\mathrm{f}(x) = \\dfrac{ ax^2 - ax + 1 }{ bx^2 - bx + 1 }$, where $a$ and $b$ are integers to be determined.",
                "steps": [
                        "To solve the differential equation, first separate the variables $x$ and $y$:<br>\\begin{aligned} (2x - 1)^3 \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= -8y^2 \\cr \\dfrac{ 1 }{ y^2 } \\mathrm{d}y &= -\\dfrac{ 8 }{ (2x - 1)^3 } \\mathrm{d}x \\cr y^{ -2 } \\mathrm{d}y &= -8(2x - 1)^{ -3 } \\mathrm{d}x \\end{aligned}",
                        "Integrate both sides of the equation:<br>\\begin{aligned} \\int y^{ -2 } \\mathrm{d}y &= \\int -8(2x - 1)^{ -3 } \\mathrm{d}x \\end{aligned}",
                        "Perform the integration on each side (applying the reverse chain rule to the linear bracket on the right-hand side):<br>\\begin{aligned} -\\dfrac{ 1 }{ y } &= -8 \\left[ \\dfrac{ (2x - 1)^{ -2 } }{ (-2)(2) } \\right] + C \\cr -\\dfrac{ 1 }{ y } &= -8 \\left[ -\\dfrac{ 1 }{ 4(2x - 1)^2 } \\right] + C \\cr -\\dfrac{ 1 }{ y } &= \\dfrac{ 2 }{ (2x - 1)^2 } + C \\end{aligned}",
                        "Multiply the entire equation by $-1$ to simplify (where $K = -C$ is a new constant of integration):<br>\\begin{aligned} \\dfrac{ 1 }{ y } &= -\\dfrac{ 2 }{ (2x - 1)^2 } + K \\end{aligned}",
                        "Apply the boundary condition that the curve passes through $(1, 1)$, substituting $x = 1$ and $y = 1$ into the equation to find $K$:<br>\\begin{aligned} \\dfrac{ 1 }{ 1 } &= -\\dfrac{ 2 }{ (2(1) - 1)^2 } + K \\cr 1 &= -2 + K \\cr K &= 3 \\end{aligned}",
                        "Substitute $K = 3$ back into the expression for $\\dfrac{ 1 }{ y }$:<br>\\begin{aligned} \\dfrac{ 1 }{ y } &= 3 - \\dfrac{ 2 }{ (2x - 1)^2 } \\end{aligned}",
                        "Express the right-hand side over a single common denominator:<br>\\begin{aligned} \\dfrac{ 1 }{ y } &= \\dfrac{ 3(2x - 1)^2 - 2 }{ (2x - 1)^2 } \\cr \\dfrac{ 1 }{ y } &= \\dfrac{ 3(4x^2 - 4x + 1) - 2 }{ 4x^2 - 4x + 1 } \\cr \\dfrac{ 1 }{ y } &= \\dfrac{ 12x^2 - 12x + 3 - 2 }{ 4x^2 - 4x + 1 } \\cr \\dfrac{ 1 }{ y } &= \\dfrac{ 12x^2 - 12x + 1 }{ 4x^2 - 4x + 1 } \\end{aligned}",
                        "Take the reciprocal of both sides to solve for $y = \\mathrm{f}(x)$:<br>\\begin{aligned} y &= \\dfrac{ 4x^2 - 4x + 1 }{ 12x^2 - 12x + 1 } \\end{aligned}<br>This is in the required form $\\mathrm{f}(x) = \\dfrac{ ax^2 - ax + 1 }{ bx^2 - bx + 1 }$ with $a = 4$ and $b = 12$."
                ],
                "pi_options": [
                        {
                                "ans": "$a = 4$, $b = 4$",
                                "feedback": "Check your boundary condition. When substituting $x = 1, y = 1$ into $\\dfrac{ 1 }{ y } = -\\dfrac{ 2 }{ (2x - 1)^2 } + K$, you should get $1 = -2 + K \\implies K = 3$, not $K = 1$."
                        },
                        {
                                "ans": "$a = 12$, $b = 4$",
                                "feedback": "Ensure you take the reciprocal of both sides at the final step. Since $\\dfrac{ 1 }{ y } = \\dfrac{ 12x^2 - 12x + 1 }{ 4x^2 - 4x + 1 }$, we find $y = \\dfrac{ 4x^2 - 4x + 1 }{ 12x^2 - 12x + 1 }$, so $a = 4$ and $b = 12$."
                        },
                        {
                                "ans": "$a = 4$, $b = -12$",
                                "feedback": "Check your expansion of $3(2x-1)^2 - 2$. This expands to $12x^2 - 12x + 1$, which gives $b = 12$ as the denominator coefficient."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Chain Rule on Linear Arguments",
                        "content": "When integrating an expression like $(2x - 1)^{ -3 }$, do not forget the chain rule adjustment. You must divide the integral by the derivative of the linear argument (which is $2$). Forgetting to divide by $2$ is one of the most common errors in Year 2 calculus integration."
                }
        },
        {
                "id": "004607",
                "board": "OCR",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differential Equations",
                "subtopic": [
                        "Exponential and Logarithmic Functions and Graphs",
                        "Integration"
                ],
                "img": false,
                "question": "The gradient of the curve $y = \\mathrm{f}(x)$ is given by the differential equation:<br><br>$\\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } = \\dfrac{ y \\cos x }{ 1 + 2y }$<br><br>and the curve passes through the point $(0, 1)$.<br><br>By solving this differential equation, show that $y \\mathrm{e}^{ 2y } = \\mathrm{e}^{ 2 + \\sin x }$.",
                "steps": [
                        "First, separate the variables by multiplying both sides of the equation by $\\dfrac{ 1 + 2y }{ y }$ and separating the differentials:<br>\\begin{aligned} \\dfrac{ 1 + 2y }{ y } \\mathrm{d}y &= \\cos x \\mathrm{d}x \\cr \\int \\left( \\dfrac{ 1 }{ y } + 2 \\right) \\mathrm{d}y &= \\int \\cos x \\mathrm{d}x \\end{aligned}",
                        "Integrate both sides of the equation analytically:<br>\\begin{aligned} \\ln y + 2y &= \\sin x + C \\end{aligned}",
                        "Apply the boundary condition $(0, 1)$, substituting $x = 0$ and $y = 1$ into the integrated equation to find the constant $C$:<br>\\begin{aligned} \\ln(1) + 2(1) &= \\sin(0) + C \\cr 0 + 2 &= 0 + C \\cr C &= 2 \\end{aligned}",
                        "Substitute $C = 2$ back into the equation:<br>\\begin{aligned} \\ln y + 2y &= \\sin x + 2 \\end{aligned}",
                        "Exponentiate both sides of the equation to eliminate the natural logarithm and simplify the expression:<br>\\begin{aligned} \\mathrm{e}^{ \\ln y + 2y } &= \\mathrm{e}^{ \\sin x + 2 } \\cr \\mathrm{e}^{ \\ln y } \\times \\mathrm{e}^{ 2y } &= \\mathrm{e}^{ 2 + \\sin x } \\cr y \\mathrm{e}^{ 2y } &= \\mathrm{e}^{ 2 + \\sin x } \\end{aligned}<br>This completes the proof."
                ],
                "pi_options": [
                        {
                                "ans": "$y \\mathrm{e}^{ 2y } = \\mathrm{e}^{ \\sin x }$",
                                "feedback": "Do not forget the constant of integration $C$. When substituting the initial conditions $(0, 1)$ into $\\ln y + 2y = \\sin x + C$, you find $C = 2$, which must appear as a term $+2$ in the exponent."
                        },
                        {
                                "ans": "$y \\mathrm{e}^{ y } = \\mathrm{e}^{ 1 + \\sin x }$",
                                "feedback": "Check your integration of the constant term. Integrating $2$ with respect to $y$ yields $2y$, not $y$. This affects both the value of the constant $C$ and the exponential term."
                        },
                        {
                                "ans": "$y \\mathrm{e}^{ 2y } = \\mathrm{e}^{ 2 - \\sin x }$",
                                "feedback": "Verify your trigonometric integration. The integral of $\\cos x$ with respect to $x$ is $\\sin x$, not $-\\sin x$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Power Laws of Exponentials",
                        "content": "Recall the fundamental index law $\\mathrm{e}^{ A + B } = \\mathrm{e}^{ A } \\times \\mathrm{e}^{ B }$. This is the key to simplifying the expression $\\mathrm{e}^{ \\ln y + 2y }$. Writing it as $\\mathrm{e}^{ \\ln y } \\times \\mathrm{e}^{ 2y }$ allows you to replace $\\mathrm{e}^{ \\ln y }$ directly with $y$, simplifying the entire left-hand side to $y \\mathrm{e}^{ 2y }$."
                }
        },
        {
                "id": "004608",
                "board": "OCR",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differential Equations",
                "subtopic": [
                        "Functions and Mappings",
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "A tank contains $100$ litres of pure water. Salt water containing $0.2\\text{ kg}$ of salt per litre runs into the tank at a rate of $5$ litres per minute. The well-stirred mixture runs out of the tank at the same rate.<br><br>Let $x\\text{ kg}$ be the amount of salt in the tank at time $t$ minutes.<br><br><strong>(i)</strong> Show that the rate of change of $x$ is given by the differential equation:<br>$\\dfrac{ \\mathrm{d}x }{ \\mathrm{d}t } = \\dfrac{ 20 - x }{ 20 }$<br><br><strong>(ii)</strong> Solve this differential equation, given that initially there is no salt in the tank, to find $x$ in terms of $t$.",
                "steps": [
                        "<strong>(i)</strong> The rate of change of salt in the tank is given by the difference between the input rate of salt and the output rate of salt:<br>$\\dfrac{ \\mathrm{d}x }{ \\mathrm{d}t } = \\text{Rate In} - \\text{Rate Out}$",
                        "Calculate the input rate of salt:<br>\\begin{aligned} \\text{Rate In} &= 5 \\text{ litres/min} \\times 0.2 \\text{ kg/litre} \\cr &= 1 \\text{ kg/min} \\end{aligned}",
                        "Calculate the output rate of salt. Since the mixture is well-stirred and the volume remains constant at $100$ litres, the concentration of salt is $\\dfrac{ x }{ 100 }\\text{ kg/litre}$. The mixture leaves at $5$ litres/min:<br>\\begin{aligned} \\text{Rate Out} &= 5 \\text{ litres/min} \\times \\dfrac{ x }{ 100 } \\text{ kg/litre} \\cr &= \\dfrac{ x }{ 20 } \\text{ kg/min} \\end{aligned}",
                        "Subtract the rates to find the differential equation:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}x }{ \\mathrm{d}t } &= 1 - \\dfrac{ x }{ 20 } \\cr &= \\dfrac{ 20 - x }{ 20 } \\end{aligned}<br>This matches the required differential equation.",
                        "<strong>(ii)</strong> To solve the differential equation, separate the variables and integrate:<br>\\begin{aligned} \\dfrac{ 1 }{ 20 - x } \\mathrm{d}x &= \\dfrac{ 1 }{ 20 } \\mathrm{d}t \\cr \\int \\dfrac{ 1 }{ 20 - x } \\mathrm{d}x &= \\int \\dfrac{ 1 }{ 20 } \\mathrm{d}t \\end{aligned}",
                        "Integrate both sides (noting that the integral of $\\dfrac{ 1 }{ 20 - x }$ is $-\\ln|20 - x|$ due to the chain rule on the linear term):<br>\\begin{aligned} -\\ln(20 - x) &= \\dfrac{ t }{ 20 } + C \\cr \\ln(20 - x) &= -\\dfrac{ t }{ 20 } + K \\quad (\\text{where } K = -C) \\end{aligned}",
                        "Initially, the tank contains pure water, which means $x = 0$ when $t = 0$. Substitute these conditions into the equation to find $K$:<br>\\begin{aligned} \\ln(20 - 0) &= -\\dfrac{ 0 }{ 20 } + K \\cr K &= \\ln(20) \\end{aligned}",
                        "Substitute $K = \\ln(20)$ back into the equation and isolate $x$ using logarithmic properties:<br>\\begin{aligned} \\ln(20 - x) &= -\\dfrac{ t }{ 20 } + \\ln(20) \\cr \\ln(20 - x) - \\ln(20) &= -\\dfrac{ t }{ 20 } \\cr \\ln\\left( \\dfrac{ 20 - x }{ 20 } \\right) &= -\\dfrac{ t }{ 20 } \\cr \\dfrac{ 20 - x }{ 20 } &= \\mathrm{e}^{ -\\frac{ t }{ 20 } } \\cr 20 - x &= 20\\mathrm{e}^{ -\\frac{ t }{ 20 } } \\cr x &= 20\\left( 1 - \\mathrm{e}^{ -\\frac{ t }{ 20 } } \\right) \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$x = 20\\left( 1 + \\mathrm{e}^{ -\\frac{ t }{ 20 } } \\right)$",
                                "feedback": "Check your algebraic rearrangement in the final step. Solving $20 - x = 20\\mathrm{e}^{ -\\frac{ t }{ 20 } }$ for $x$ should yield $x = 20 - 20\\mathrm{e}^{ -\\frac{ t }{ 20 } } = 20\\left( 1 - \\mathrm{e}^{ -\\frac{ t }{ 20 } } \\right)$."
                        },
                        {
                                "ans": "$x = 20 - \\mathrm{e}^{ -\\frac{ t }{ 20 } }$",
                                "feedback": "Remember to apply the exponential to both sides correctly. Taking the exponential of $\\ln(20 - x) = \\ln(20) - \\dfrac{ t }{ 20 }$ yields $20 - x = \\mathrm{e}^{ \\ln(20) - \\frac{ t }{ 20 } } = 20\\mathrm{e}^{ -\\frac{ t }{ 20 } }$."
                        },
                        {
                                "ans": "$x = 20\\left( 1 - \\mathrm{e}^{ \\frac{ t }{ 20 } } \\right)$",
                                "feedback": "Check your integration of $-\\ln(20 - x) = \\dfrac{ t }{ 20 } + C$. Multiplying the equation by $-1$ to isolate the log term must make the exponent term negative: $-\\dfrac{ t }{ 20 }$."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Separability of Modelling Equations",
                        "content": "When setting up rate equations, always ensure your units match perfectly before separating variables. Additionally, notice how $x = 20\\left( 1 - \\mathrm{e}^{ -\\frac{ t }{ 20 } } \\right)$ behaves as $t \\to \\infty$. The exponential term decays to $0$, meaning $x \\to 20\\text{ kg}$. This is the physical saturation limit (since $100\\text{ L} \\times 0.2\\text{ kg/L} = 20\\text{ kg}$), which serves as an excellent conceptual sanity check!"
                }
        },
        {
                "id": "004609",
                "board": "OCR",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differential Equations",
                "subtopic": [
                        "Integration"
                ],
                "img": false,
                "question": "The variables $x$ and $y$ satisfy the differential equation:<br><br>$\\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } = \\dfrac{ y(y + 3) }{ x }$<br><br>for $x > 0$ and $y > 0$. It is given that $y = 3$ when $x = 1$.<br><br>By solving this differential equation, show that $y = \\dfrac{ 3x^3 }{ 2 - x^3 }$.",
                "steps": [
                        "First, separate the variables of the differential equation:<br>\\begin{aligned} \\dfrac{ 1 }{ y(y + 3) } \\mathrm{d}y &= \\dfrac{ 1 }{ x } \\mathrm{d}x \\cr \\int \\dfrac{ 1 }{ y(y + 3) } \\mathrm{d}y &= \\int \\dfrac{ 1 }{ x } \\mathrm{d}x \\end{aligned}",
                        "To integrate the left-hand side, express the integrand in partial fractions:<br>\\begin{aligned} \\dfrac{ 1 }{ y(y + 3) } &= \\dfrac{ A }{ y } + \\dfrac{ B }{ y + 3 } \\cr 1 &= A(y + 3) + B y \\end{aligned}",
                        "Solve for $A$ and $B$ by substituting convenient values of $y$:<br><strong>\u2022</strong> Let $y = 0 \\implies 1 = 3A \\implies A = \\dfrac{ 1 }{ 3 }$<br><strong>\u2022</strong> Let $y = -3 \\implies 1 = -3B \\implies B = -\\dfrac{ 1 }{ 3 }$<br><br>This gives:<br>$\\dfrac{ 1 }{ y(y + 3) } = \\dfrac{ 1 }{ 3 }\\left( \\dfrac{ 1 }{ y } - \\dfrac{ 1 }{ y + 3 } \\right)$",
                        "Substitute this back into the integral equation and multiply both sides by $3$ to simplify:<br>\\begin{aligned} \\int \\dfrac{ 1 }{ 3 }\\left( \\dfrac{ 1 }{ y } - \\dfrac{ 1 }{ y + 3 } \\right) \\mathrm{d}y &= \\int \\dfrac{ 1 }{ x } \\mathrm{d}x \\cr \\int \\left( \\dfrac{ 1 }{ y } - \\dfrac{ 1 }{ y + 3 } \\right) \\mathrm{d}y &= \\int \\dfrac{ 3 }{ x } \\mathrm{d}x \\end{aligned}",
                        "Integrate both sides analytically:<br>\\begin{aligned} \\ln y - \\ln(y + 3) &= 3\\ln x + C \\cr \\ln\\left( \\dfrac{ y }{ y + 3 } \\right) &= \\ln(x^3) + C \\end{aligned}",
                        "Exponentiate both sides of the equation (where $A = \\mathrm{e}^{ C }$ is a new constant of integration):<br>\\begin{aligned} \\dfrac{ y }{ y + 3 } &= A x^3 \\end{aligned}",
                        "Apply the initial conditions, substituting $x = 1$ and $y = 3$ to solve for $A$:<br>\\begin{aligned} \\dfrac{ 3 }{ 3 + 3 } &= A (1)^3 \\cr \\dfrac{ 3 }{ 6 } &= A \\cr A &= \\dfrac{ 1 }{ 2 } \\end{aligned}",
                        "Substitute $A = \\dfrac{ 1 }{ 2 }$ back into the equation and rearrange to make $y$ the subject:<br>\\begin{aligned} \\dfrac{ y }{ y + 3 } &= \\dfrac{ 1 }{ 2 } x^3 \\cr 2y &= x^3(y + 3) \\cr 2y &= x^3 y + 3x^3 \\cr 2y - x^3 y &= 3x^3 \\cr y(2 - x^3) &= 3x^3 \\cr y &= \\dfrac{ 3x^3 }{ 2 - x^3 } \\end{aligned}<br>This completes the proof."
                ],
                "pi_options": [
                        {
                                "ans": "$y = \\dfrac{ 3x^3 }{ 1 - x^3 }$",
                                "feedback": "Check your initial condition substitution. Substituting $x = 1$ and $y = 3$ into $\\dfrac{ y }{ y + 3 } = A x^3$ gives $\\dfrac{ 3 }{ 6 } = A \\implies A = \\dfrac{ 1 }{ 2 }$. Using $A = 1$ leads to an incorrect denominator."
                        },
                        {
                                "ans": "$y = \\dfrac{ x^3 }{ 2 - 3x^3 }$",
                                "feedback": "Check your algebraic rearrangement when isolating $y$. Expanding $2y = x^3(y+3)$ gives $2y = x^3 y + 3x^3$. Grouping the $y$ terms on the left yields $y(2 - x^3) = 3x^3$."
                        },
                        {
                                "ans": "$y = \\dfrac{ 3x^3 }{ 2 + x^3 }$",
                                "feedback": "Check your signs when transposing $2y = x^3 y + 3x^3$. Subtracting $x^3 y$ from both sides should yield $2y - x^3 y = 3x^3 \\implies y(2 - x^3) = 3x^3$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Multiplying by the LCM of denominators",
                        "content": "When resolving partial fraction coefficients inside a differential equation, multiplying both sides by the denominator coefficient (here, $3$) before integrating keeps your logarithms incredibly clean and avoids carrying fractional factors inside logarithmic terms."
                }
        },
        {
                "id": "004610",
                "board": "OCR",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differential Equations",
                "subtopic": [
                        "Functions and Mappings",
                        "Integration"
                ],
                "img": false,
                "question": "The variables $x$ and $y$ satisfy the differential equation:<br><br>$\\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } = x \\mathrm{e}^{ y - x^2 }$<br><br>and $y = 0$ when $x = 0$.<br><br><strong>(i)</strong> Find the general solution of the differential equation, expressing $y$ in terms of $x$.<br><br><strong>(ii)</strong> Hence find the exact value of $y$ when $x = 1$.",
                "steps": [
                        "<strong>(i)</strong> Rewrite the exponential expression using index laws, $\\mathrm{e}^{ y - x^2 } = \\mathrm{e}^{ y } \\times \\mathrm{e}^{ -x^2 }$, to allow variable separation:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } &= x \\mathrm{e}^{ y } \\mathrm{e}^{ -x^2 } \\cr \\mathrm{e}^{ -y } \\mathrm{d}y &= x \\mathrm{e}^{ -x^2 } \\mathrm{d}x \\end{aligned}",
                        "Integrate both sides of the equation:<br>\\begin{aligned} \\int \\mathrm{e}^{ -y } \\mathrm{d}y &= \\int x \\mathrm{e}^{ -x^2 } \\mathrm{d}x \\end{aligned}",
                        "Perform the integrations on both sides (using the reverse chain rule/substitution for the right-hand side, letting $u = -x^2 \\implies \\mathrm{d}u = -2x \\mathrm{d}x$):<br>\\begin{aligned} -\\mathrm{e}^{ -y } &= -\\dfrac{ 1 }{ 2 }\\mathrm{e}^{ -x^2 } + C \\cr \\mathrm{e}^{ -y } &= \\dfrac{ 1 }{ 2 }\\mathrm{e}^{ -x^2 } + K \\quad (\\text{where } K = -C) \\end{aligned}",
                        "Apply the initial condition $(0, 0)$, substituting $x = 0$ and $y = 0$ to solve for $K$:<br>\\begin{aligned} \\mathrm{e}^{ 0 } &= \\dfrac{ 1 }{ 2 }\\mathrm{e}^{ 0 } + K \\cr 1 &= \\dfrac{ 1 }{ 2 } + K \\cr K &= \\dfrac{ 1 }{ 2 } \\end{aligned}",
                        "Substitute $K = \\dfrac{ 1 }{ 2 }$ back into the integrated expression:<br>\\begin{aligned} \\mathrm{e}^{ -y } &= \\dfrac{ 1 }{ 2 }\\mathrm{e}^{ -x^2 } + \\dfrac{ 1 }{ 2 } \\cr \\mathrm{e}^{ -y } &= \\dfrac{ \\mathrm{e}^{ -x^2 } + 1 }{ 2 } \\end{aligned}",
                        "Take natural logarithms of both sides and solve for $y$:<br>\\begin{aligned} -y &= \\ln\\left( \\dfrac{ \\mathrm{e}^{ -x^2 } + 1 }{ 2 } \\right) \\cr y &= -\\ln\\left( \\dfrac{ \\mathrm{e}^{ -x^2 } + 1 }{ 2 } \\right) \\cr y &= \\ln\\left( \\dfrac{ 2 }{ \\mathrm{e}^{ -x^2 } + 1 } \\right) \\end{aligned}",
                        "<strong>(ii)</strong> Substitute $x = 1$ into the general solution to find the exact value of $y$:<br>\\begin{aligned} y &= \\ln\\left( \\dfrac{ 2 }{ \\mathrm{e}^{ -1 } + 1 } \\right) \\cr &= \\ln\\left( \\dfrac{ 2 }{ \\dfrac{ 1 }{ \\mathrm{e} } + 1 } \\right) \\cr &= \\ln\\left( \\dfrac{ 2 }{ \\dfrac{ 1 + \\mathrm{e} }{ \\mathrm{e} } } \\right) \\cr &= \\ln\\left( \\dfrac{ 2\\mathrm{e} }{ 1 + \\mathrm{e} } \\right) \\end{aligned}<br>So, the exact value of $y$ is $\\ln\\left( \\dfrac{ 2\\mathrm{e} }{ 1 + \\mathrm{e} } \\right)$."
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(i)</strong> $y = -\\ln\\left( \\dfrac{ \\mathrm{e}^{ -x^2 } + 1 }{ 2 } \\right)$<br><strong>(ii)</strong> $y = \\ln\\left( \\dfrac{ 2 }{ 1 + \\mathrm{e} } \\right)$",
                                "feedback": "Check your fraction simplification in part <strong>(ii)</strong>. Substituting $x = 1$ into $\\dfrac{ 2 }{ \\mathrm{e}^{-1} + 1 }$ gives $\\dfrac{ 2 }{ 1/\\mathrm{e} + 1 }$. Multiplying the numerator and denominator by $\\mathrm{e}$ yields $\\dfrac{ 2\\mathrm{e} }{ 1 + \\mathrm{e} }$."
                        },
                        {
                                "ans": "<strong>(i)</strong> $y = \\ln\\left( \\dfrac{ 2 }{ \\mathrm{e}^{ -x^2 } - 1 } \\right)$<br><strong>(ii)</strong> $y = \\ln\\left( \\dfrac{ 2\\mathrm{e} }{ \\mathrm{e} - 1 } \\right)$",
                                "feedback": "Check your signs in step 5. The equation is $\\mathrm{e}^{-y} = \\dfrac{ \\mathrm{e}^{-x^2} + 1 }{ 2 }$, which has a plus sign in the numerator. A minus sign is incorrect."
                        },
                        {
                                "ans": "<strong>(i)</strong> $y = \\ln\\left( \\dfrac{ 1 }{ \\mathrm{e}^{ -x^2 } + 1 } \\right)$<br><strong>(ii)</strong> $y = \\ln\\left( \\dfrac{ \\mathrm{e} }{ 1 + \\mathrm{e} } \\right)$",
                                "feedback": "Check your boundary condition. When substituting $(0,0)$ into the expression $\\mathrm{e}^{-y} = \\dfrac{ 1 }{ 2 }\\mathrm{e}^{-x^2} + K$, you get $1 = \\dfrac{ 1 }{ 2 } + K \\implies K = \\dfrac{ 1 }{ 2 }$. Forgetting the $+1/2$ term leads to an incorrect numerator."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Exponentials with Negative Arguments",
                        "content": "When dealing with expressions like $\\ln\\left( \\dfrac{ 2 }{ \\mathrm{e}^{ -1 } + 1 } \\right)$, always convert $\\mathrm{e}^{ -1 }$ to $\\dfrac{ 1 }{ \\mathrm{e} }$ and find a common denominator for the bottom fraction. This is the only way to simplify the expression into the clean, single-log form $\\ln\\left( \\dfrac{ 2\\mathrm{e} }{ 1 + \\mathrm{e} } \\right)$ commonly required in A Level exams."
                }
        },
        {
                "id": "004611",
                "board": "OCR MEI",
                "level": "AS",
                "major_area": "Coordinate Geometry",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": "images/Pure/004611.png",
                "question": "The diagram shows a triangle $ABC$ where $AB = 25\\text{ cm}$, $AC = 18\\text{ cm}$, and the included angle is $\\angle BAC = 72^\\circ$.<br><br><strong>(i)</strong> Find the length of $BC$, giving your answer to $2$ decimal places.<br><strong>(ii)</strong> Hence find the perimeter of triangle $ABC$, giving your answer to $2$ decimal places.",
                "steps": [
                        "<strong>(i)</strong> To find the missing side $BC$ when given two sides and the included angle, use the Cosine Rule:<br>\\begin{aligned} BC^2 &= AB^2 + AC^2 - 2(AB)(AC)\\cos(\\angle BAC) \\end{aligned}",
                        "Substitute the given lengths and angle into the formula:<br>\\begin{aligned} BC^2 &= 25^2 + 18^2 - 2(25)(18)\\cos(72^\\circ) \\cr &= 625 + 324 - 900\\cos(72^\\circ) \\cr &= 949 - 900(0.309017) \\cr &= 949 - 278.115 \\cr &= 670.885 \\end{aligned}",
                        "Take the square root of both sides to find $BC$ (giving your answer to $2$ decimal places):<br>\\begin{aligned} BC &= \\sqrt{ 670.885 } \\cr &\\approx 25.90 \\text{ cm} \\end{aligned}",
                        "<strong>(ii)</strong> The perimeter $P$ of a triangle is the sum of all three side lengths:<br>\\begin{aligned} P &= AB + AC + BC \\cr &\\approx 25 + 18 + 25.90 \\cr &\\approx 68.90 \\text{ cm} \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(i)</strong> $BC \\approx 25.90\\text{ cm}$<br><strong>(ii)</strong> $P \\approx 43.00\\text{ cm}$",
                                "feedback": "You found the correct length of $BC$, but check your perimeter sum. The perimeter must include all three sides of the triangle ($25 + 18 + 25.90 = 68.90\\text{ cm}$), not just the two given sides."
                        },
                        {
                                "ans": "<strong>(i)</strong> $BC \\approx 30.81\\text{ cm}$<br><strong>(ii)</strong> $P \\approx 73.81\\text{ cm}$",
                                "feedback": "Check your application of the Cosine Rule. Make sure you subtract the term $2(AB)(AC)\\cos(72^\\circ)$ instead of adding it. Adding it leads to $BC^2 = 949 + 278.115 = 1227.115$, which is incorrect."
                        },
                        {
                                "ans": "<strong>(i)</strong> $BC \\approx 25.90\\text{ cm}$<br><strong>(ii)</strong> $P \\approx 68.90\\text{ cm}$",
                                "feedback": "Both values are correct! (Note: Ensure this is matched with the correct option slot during deployment)."
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
                "level": "AS",
                "major_area": "Coordinate Geometry",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": "images/Pure/004612.png",
                "question": "The diagram shows a triangle $XYZ$ where the side lengths are $XY = 12\\text{ cm}$, $XZ = 15\\text{ cm}$, and $YZ = 10\\text{ cm}$.<br><br><strong>(i)</strong> Find the size of the angle $\\angle YXZ$, giving your answer to $1$ decimal place.<br><strong>(ii)</strong> Find the area of triangle $XYZ$, giving your answer to $1$ decimal place.",
                "steps": [
                        "<strong>(i)</strong> To find a missing angle when given all three sides of a triangle, rearrange the Cosine Rule to isolate the cosine term:<br>\\begin{aligned} \\cos(\\angle YXZ) &= \\dfrac{ XY^2 + XZ^2 - YZ^2 }{ 2(XY)(XZ) } \\end{aligned}",
                        "Substitute the given side lengths into the rearranged formula:<br>\\begin{aligned} \\cos(\\angle YXZ) &= \\dfrac{ 12^2 + 15^2 - 10^2 }{ 2(12)(15) } \\cr &= \\dfrac{ 144 + 225 - 100 }{ 360 } \\cr &= \\dfrac{ 269 }{ 360 } \\cr &\\approx 0.747222 \\end{aligned}",
                        "Take the inverse cosine of both sides to find the angle (giving your answer to $1$ decimal place):<br>\\begin{aligned} \\angle YXZ &= \\arccos(0.747222) \\cr &\\approx 41.6^\\circ \\end{aligned}",
                        "<strong>(ii)</strong> Use the trigonometric area formula, $\\text{Area} = \\dfrac{ 1 }{ 2 } a b \\sin C$, with the two sides $XY$ and $XZ$ and their included angle $\\angle YXZ$:<br>\\begin{aligned} \\text{Area} &= \\dfrac{ 1 }{ 2 }(XY)(XZ)\\sin(\\angle YXZ) \\cr &= \\dfrac{ 1 }{ 2 }(12)(15)\\sin(41.649^\\circ) \\cr &= 90 \\times 0.66456 \\cr &\\approx 59.8 \\text{ cm}^2 \\end{aligned}"
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
                                "feedback": "Remember that the area of a non-right-angled triangle requires the sine of the included angle. Forgetting the $\\sin(\\angle YXZ)$ term and calculating $\\dfrac{ 1 }{ 2 } b h$ directly as $\\dfrac{ 1 }{ 2 } \\times 12 \\times 15 = 90$ is incorrect."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Rearranging the Cosine Rule",
                        "content": "To find an angle directly, memorising the rearranged form of the Cosine Rule, $\\cos A = \\dfrac{ b^2 + c^2 - a^2 }{ 2bc }$, is a great exam time-saver. Just remember that the side being subtracted in the numerator must always be the side directly opposite the angle you are trying to find."
                }
        },
        {
                "id": "004613",
                "board": "OCR MEI",
                "level": "AS",
                "major_area": "Coordinate Geometry",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": "images/Pure/004613.png",
                "question": "The diagram shows a triangle $PQR$ where the side lengths are $PQ = 8\\text{ cm}$ and $QR = 6\\text{ cm}$, and the angle is $\\angle QPR = 40^\\circ$.<br><br><strong>(i)</strong> Show that there are two possible values for the angle $\\angle PRQ$, and find both values to $1$ decimal place.<br><strong>(ii)</strong> Given that the angle $\\angle PRQ$ is obtuse, find the area of triangle $PQR$, giving your answer to $1$ decimal place.",
                "steps": [
                        "<strong>(i)</strong> To find a missing angle when given an opposite side and another side-angle pair, use the Sine Rule:<br>\\begin{aligned} \\dfrac{ \\sin(\\angle PRQ) }{ PQ } &= \\dfrac{ \\sin(\\angle QPR) }{ QR } \\end{aligned}",
                        "Substitute the given values and rearrange to solve for $\\sin(\\angle PRQ)$:<br>\\begin{aligned} \\dfrac{ \\sin(\\angle PRQ) }{ 8 } &= \\dfrac{ \\sin(40^\\circ) }{ 6 } \\cr \\sin(\\angle PRQ) &= \\dfrac{ 8\\sin(40^\\circ) }{ 6 } \\cr &\\approx \\dfrac{ 8(0.642788) }{ 6 } \\cr &\\approx 0.857051 \\end{aligned}",
                        "Since $\\sin(\\angle PRQ) = 0.857051$ is positive and less than $1$, there are two possible geometric solutions within a triangle:<br><br><strong>\u2022 Acute Case:</strong><br>\\begin{aligned} \\angle PRQ &= \\arcsin(0.857051) \\cr &\\approx 59.0^\\circ \\end{aligned}<br><strong>\u2022 Obtuse Case:</strong><br>\\begin{aligned} \\angle PRQ &= 180^\\circ - 59.0^\\circ \\cr &\\approx 121.0^\\circ \\end{aligned}",
                        "<strong>(ii)</strong> We are given that $\\angle PRQ$ is obtuse, so we select $\\angle PRQ = 121.0^\\circ$. Find the remaining angle $\\angle PQR$ using the sum of angles in a triangle:<br>\\begin{aligned} \\angle PQR &= 180^\\circ - 40^\\circ - 121.0^\\circ \\cr &= 19.0^\\circ \\end{aligned}",
                        "Now, find the exact length of the side $PR$ using the Sine Rule:<br>\\begin{aligned} \\dfrac{ PR }{ \\sin(\\angle PQR) } &= \\dfrac{ QR }{ \\sin(\\angle QPR) } \\cr \\dfrac{ PR }{ \\sin(19.0^\\circ) } &= \\dfrac{ 6 }{ \\sin(40^\\circ) } \\cr PR &= \\dfrac{ 6\\sin(19.0^\\circ) }{ \\sin(40^\\circ) } \\cr &\\approx \\dfrac{ 6(0.325568) }{ 0.642788 } \\cr &\\approx 3.04 \\text{ cm} \\end{aligned}",
                        "Calculate the area of the triangle using the formula $\\text{Area} = \\dfrac{ 1 }{ 2 } a b \\sin C$ with sides $PQ$ and $PR$ and their included angle $\\angle QPR = 40^\\circ$:<br>\\begin{aligned} \\text{Area} &= \\dfrac{ 1 }{ 2 }(PQ)(PR)\\sin(\\angle QPR) \\cr &= \\dfrac{ 1 }{ 2 }(8)(3.04)\\sin(40^\\circ) \\cr &\\approx 4(3.04)(0.642788) \\cr &\\approx 7.8 \\text{ cm}^2 \\end{aligned}"
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
                "level": "AS",
                "major_area": "Coordinate Geometry",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Coordinate Geometry",
                        "Trigonometry"
                ],
                "img": "images/Pure/004614.png",
                "question": "The diagram shows a coordinate grid containing triangle $ABC$ with vertices $A(1, 2)$, $B(5, 5)$, and $C(2, 6)$.<br><br><strong>(i)</strong> Find the exact lengths of the sides $AB$, $BC$, and $AC$.<br><strong>(ii)</strong> Hence find the size of the angle $\\angle ABC$, giving your answer to the nearest degree.",
                "steps": [
                        "<strong>(i)</strong> To find the exact side lengths, apply the coordinate distance formula, $d = \\sqrt{ (x_2 - x_1)^2 + (y_2 - y_1)^2 }$, to each pair of vertices:<br><br><strong>\u2022 Side $AB$:</strong><br>\\begin{aligned} AB &= \\sqrt{ (5 - 1)^2 + (5 - 2)^2 } \\cr &= \\sqrt{ 4^2 + 3^2 } \\cr &= \\sqrt{ 16 + 9 } \\cr &= 5 \\end{aligned}",
                        "<strong>\u2022 Side $BC$:</strong><br>\\begin{aligned} BC &= \\sqrt{ (2 - 5)^2 + (6 - 5)^2 } \\cr &= \\sqrt{ (-3)^2 + 1^2 } \\cr &= \\sqrt{ 9 + 1 } \\cr &= \\sqrt{ 10 } \\end{aligned}",
                        "<strong>\u2022 Side $AC$:</strong><br>\\begin{aligned} AC &= \\sqrt{ (2 - 1)^2 + (6 - 2)^2 } \\cr &= \\sqrt{ 1^2 + 4^2 } \\cr &= \\sqrt{ 1 + 16 } \\cr &= \\sqrt{ 17 } \\end{aligned}<br>So the exact lengths of the sides are $AB = 5$, $BC = \\sqrt{ 10 }$, and $AC = \\sqrt{ 17 }$.",
                        "<strong>(ii)</strong> To find the angle $\\angle ABC$ (which is the angle at vertex $B$ opposite side $AC$), rearrange the Cosine Rule:<br>\\begin{aligned} \\cos(\\angle ABC) &= \\dfrac{ AB^2 + BC^2 - AC^2 }{ 2(AB)(BC) } \\end{aligned}",
                        "Substitute the exact side lengths into this formula and simplify:<br>\\begin{aligned} \\cos(\\angle ABC) &= \\dfrac{ 5^2 + (\\sqrt{ 10 })^2 - (\\sqrt{ 17 })^2 }{ 2(5)(\\sqrt{ 10 }) } \\cr &= \\dfrac{ 25 + 10 - 17 }{ 10\\sqrt{ 10 } } \\cr &= \\dfrac{ 18 }{ 10\\sqrt{ 10 } } \\cr &\\approx 0.569210 \\end{aligned}",
                        "Take the inverse cosine to find the angle (giving your answer to the nearest degree):<br>\\begin{aligned} \\angle ABC &= \\arccos(0.569210) \\cr &\\approx 55^\\circ \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(i)</strong> $AB = 5$, $BC = 10$, $AC = 17$<br><strong>(ii)</strong> $\\angle ABC \\approx 55^\\circ$",
                                "feedback": "Check your side lengths in part <strong>(i)</strong>. The distance formula contains a square root. The exact lengths are $BC = \\sqrt{ 10 }$ and $AC = \\sqrt{ 17 }$, not $10$ and $17$."
                        },
                        {
                                "ans": "<strong>(i)</strong> $AB = 5$, $BC = \\sqrt{ 10 }$, $AC = \\sqrt{ 17 }$<br><strong>(ii)</strong> $\\angle ABC \\approx 35^\\circ$",
                                "feedback": "Check your rearranged Cosine Rule formula. Make sure you subtract the square of the opposite side ($AC^2 = 17$) in the numerator, not one of the adjacent sides. Forgetting this details leads to an incorrect angle of $35^\\circ$."
                        },
                        {
                                "ans": "<strong>(i)</strong> $AB = 5$, $BC = \\sqrt{ 10 }$, $AC = \\sqrt{ 17 }$<br><strong>(ii)</strong> $\\angle ABC \\approx 45^\\circ$",
                                "feedback": "Check your arithmetic in the Cosine Rule simplification. The numerator is $25 + 10 - 17 = 18$. Forgetting to calculate this correctly can lead to incorrect angle results."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Keep Surds Exact",
                        "content": "When combining coordinate geometry with trigonometry, always keep your side lengths in exact surd form (like $\\sqrt{ 10 }$ and $\\sqrt{ 17 }$). Substituting exact surds into the Cosine Rule makes squaring them trivial and prevents any rounding errors from throwing off your final angle calculation."
                }
        },
        {
                "id": "004615",
                "board": "OCR MEI",
                "level": "AS",
                "major_area": "Coordinate Geometry",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": "images/Pure/004615.png",
                "question": "The diagram shows the journey of a ship sailing $15\\text{ km}$ from port $P$ on a bearing of $060^\\circ$ to a point $A$. It then changes course and sails $12\\text{ km}$ on a bearing of $130^\\circ$ to a point $B$.<br><br><strong>(i)</strong> Find the distance of the ship from port $P$ when it is at point $B$, giving your answer to $1$ decimal place.<br><strong>(ii)</strong> Find the bearing of $B$ from port $P$, giving your answer to the nearest degree.",
                "steps": [
                        "<strong>(i)</strong> To analyze the triangle $PAB$, first determine the interior angle $\\angle PAB$.<br><br>Using parallel lines on North directions:<br><strong>\u2022</strong> The angle from $AP$ to the South direction at $A$ is equal to the original bearing of $060^\\circ$ (alternate angles).<br><strong>\u2022</strong> The bearing of $B$ from $A$ is $130^\\circ$, which is $130^\\circ - 180^\\circ = -50^\\circ$ (or $50^\\circ$ East of South).<br><br>Adding these angles gives the interior angle $\\angle PAB$:<br>\\begin{aligned} \\angle PAB &= 60^\\circ + (180^\\circ - 130^\\circ) \\cr &= 60^\\circ + 50^\\circ \\cr &= 110^\\circ \\end{aligned}",
                        "Now, find the missing side $PB$ of triangle $PAB$ using the Cosine Rule:<br>\\begin{aligned} PB^2 &= PA^2 + AB^2 - 2(PA)(AB)\\cos(\\angle PAB) \\end{aligned}",
                        "Substitute the given lengths and our calculated interior angle into the formula:<br>\\begin{aligned} PB^2 &= 15^2 + 12^2 - 2(15)(12)\\cos(110^\\circ) \\cr &= 225 + 144 - 360\\cos(110^\\circ) \\cr &= 369 - 360(-0.342020) \\cr &= 369 + 123.127 \\cr &= 492.127 \\end{aligned}",
                        "Take the square root of both sides to find the distance $PB$ (giving your answer to $1$ decimal place):<br>\\begin{aligned} PB &= \\sqrt{ 492.127 } \\cr &\\approx 22.2 \\text{ km} \\end{aligned}",
                        "<strong>(ii)</strong> To find the bearing of $B$ from port $P$, we first need the interior angle $\\angle APB$. Apply the Sine Rule:<br>\\begin{aligned} \\dfrac{ \\sin(\\angle APB) }{ AB } &= \\dfrac{ \\sin(\\angle PAB) }{ PB } \\cr \\dfrac{ \\sin(\\angle APB) }{ 12 } &= \\dfrac{ \\sin(110^\\circ) }{ 22.184 } \\cr \\sin(\\angle APB) &= \\dfrac{ 12\\sin(110^\\circ) }{ 22.184 } \\cr &\\approx \\dfrac{ 12(0.939693) }{ 22.184 } \\cr &\\approx 0.508316 \\end{aligned}",
                        "Take the inverse sine to find the angle $\\angle APB$:<br>\\begin{aligned} \\angle APB &= \\arcsin(0.508316) \\cr &\\approx 30.6^\\circ \\end{aligned}",
                        "The bearing of $A$ from port $P$ is $060^\\circ$, and point $B$ lies clockwise from line $PA$. Therefore, the total bearing of $B$ from port $P$ is:<br>\\begin{aligned} \\text{Bearing} &= 60^\\circ + 30.6^\\circ \\cr &= 90.6^\\circ \\cr &\\approx 091^\\circ \\quad (\\text{to the nearest degree}) \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(i)</strong> $PB \\approx 22.2\\text{ km}$<br><strong>(ii)</strong> $\\text{Bearing} \\approx 031^\\circ$",
                                "feedback": "You correctly calculated the interior angle $\\angle APB = 31.0^\\circ$, but remember that bearings are measured clockwise from North. You must add this angle to the initial bearing of $060^\\circ$ to get $091^\\circ$."
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
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Functions and Graphs",
                "subtopic": [
                        "Graph Transformations"
                ],
                "img": false,
                "question": "The curve $y = \\dfrac{ 1 }{ x^2 }$ is translated by the vector $\\begin{pmatrix} -3 \\cr 5 \\end{pmatrix}$.<br><br>Write down the equation of the transformed curve.",
                "steps": [
                        "A translation represented by the vector $\\begin{pmatrix} a \\cr b \\end{pmatrix}$ has the following algebraic effects on a curve $y = \\mathrm{f}(x)$:<br><br><strong>\u2022 Horizontal shift:</strong> a shift of $a$ units in the $x$-direction replaces every $x$ with $(x - a)$ in the equation.<br><strong>\u2022 Vertical shift:</strong> a shift of $b$ units in the $y$-direction adds $b$ to the overall equation.",
                        "For the translation vector $\\begin{pmatrix} -3 \\cr 5 \\end{pmatrix}$:<br><br><strong>\u2022</strong> The horizontal translation of $-3$ units (3 units to the left) means we replace $x$ with $(x - (-3)) = (x + 3)$.<br><strong>\u2022</strong> The vertical translation of $5$ units (5 units upwards) means we add $5$ to the overall equation.",
                        "Substitute these transformations into the original curve $y = \\dfrac{ 1 }{ x^2 }$:<br>\\begin{aligned} y &= \\dfrac{ 1 }{ (x + 3)^2 } + 5 \\end{aligned}<br>This is the final equation of the transformed curve."
                ],
                "pi_options": [
                        {
                                "ans": "$y = \\dfrac{ 1 }{ (x - 3)^2 } + 5$",
                                "feedback": "Check the sign of your horizontal transformation. A translation of $-3$ units in the $x$-direction (to the left) corresponds to replacing $x$ with $(x + 3)$, not $(x - 3)$."
                        },
                        {
                                "ans": "$y = \\dfrac{ 1 }{ (x + 3)^2 } - 5$",
                                "feedback": "Check the sign of your vertical transformation. A translation of $+5$ units in the $y$-direction (upwards) corresponds to adding $5$ to the overall equation, not subtracting $5$."
                        },
                        {
                                "ans": "$y = \\dfrac{ 1 }{ x^2 + 3 } + 5$",
                                "feedback": "When performing a horizontal translation, you must replace the variable $x$ itself with $(x + 3)$. Replacing $x^2$ with $x^2 + 3$ is a common error and is mathematically incorrect."
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
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Functions and Graphs",
                "subtopic": [
                        "Graph Transformations"
                ],
                "img": false,
                "question": "The curve $y = x^3 - 2x$ is translated by the vector $\\begin{pmatrix} 2 \\cr -3 \\end{pmatrix}$.<br><br>Find the equation of the transformed curve, giving your answer in a form not involving expanded brackets.",
                "steps": [
                        "A translation represented by the vector $\\begin{pmatrix} a \\cr b \\end{pmatrix}$ has the following algebraic effects on a curve $y = \\mathrm{f}(x)$:<br><br><strong>\u2022 Horizontal shift:</strong> replaces every $x$ with $(x - a)$ in the equation.<br><strong>\u2022 Vertical shift:</strong> adds $b$ to the overall equation.",
                        "For the translation vector $\\begin{pmatrix} 2 \\cr -3 \\end{pmatrix}$:<br><br><strong>\u2022</strong> The horizontal translation of $+2$ units (2 units to the right) means we replace $x$ with $(x - 2)$ everywhere in the equation.<br><strong>\u2022</strong> The vertical translation of $-3$ units (3 units downwards) means we subtract $3$ from the overall equation.",
                        "Apply these transformations to the original equation $y = x^3 - 2x$. Ensure you substitute $(x - 2)$ for *every* single occurrence of $x$:<br>\\begin{aligned} y &= (x - 2)^3 - 2(x - 2) - 3 \\end{aligned}<br>This is the required unexpanded form."
                ],
                "pi_options": [
                        {
                                "ans": "$y = (x - 2)^3 - 2x - 3$",
                                "feedback": "When performing a horizontal translation, you must replace *every* single occurrence of the variable $x$ in the equation with $(x - 2)$. Forgetting to replace the $x$ in the $-2x$ term is a common error."
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
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Functions and Graphs",
                "subtopic": [
                        "Graph Transformations"
                ],
                "img": false,
                "question": "The curve $y = \\sqrt{ x }$ is transformed by:<br><br><strong>\u2022</strong> a stretch parallel to the $y$-axis with scale factor $3$,<br><strong>\u2022</strong> followed by a translation of vector $\\begin{pmatrix} 4 \\cr 1 \\end{pmatrix}$.<br><br>Find the equation of the transformed curve.",
                "steps": [
                        "<strong>Step 1:</strong> Apply the first transformation. A stretch parallel to the $y$-axis with scale factor $k$ corresponds to multiplying the entire function by $k$ (i.e. replacing $y$ with $k y$):<br>\\begin{aligned} y &= 3\\sqrt{ x } \\end{aligned}",
                        "<strong>Step 2:</strong> Apply the translation. A translation of vector $\\begin{pmatrix} 4 \\cr 1 \\end{pmatrix}$ corresponds to:<br><br><strong>\u2022</strong> replacing $x$ with $(x - 4)$ (horizontal translation 4 units to the right),<br><strong>\u2022</strong> adding $1$ to the overall function (vertical translation 1 unit upwards).",
                        "Apply these translation steps directly to our equation $y = 3\\sqrt{ x }$:<br>\\begin{aligned} y &= 3\\sqrt{ x - 4 } + 1 \\end{aligned}<br>This is the final equation of the transformed curve."
                ],
                "pi_options": [
                        {
                                "ans": "$y = 3\\sqrt{ x + 4 } + 1$",
                                "feedback": "Check the sign of your horizontal translation. A translation of $+4$ units in the $x$-direction (to the right) requires replacing $x$ with $(x - 4)$, not $(x + 4)$."
                        },
                        {
                                "ans": "$y = \\sqrt{ 3(x - 4) } + 1$",
                                "feedback": "Check your stretch type. A stretch parallel to the $y$-axis (vertical stretch) affects the outside of the function, multiplying the entire expression by $3$. Multiplying $x$ inside the square root corresponds to a horizontal stretch, which is incorrect."
                        },
                        {
                                "ans": "$y = 3\\sqrt{ x - 4 } - 1$",
                                "feedback": "Check the sign of your vertical translation. A translation of $+1$ unit in the $y$-direction (upwards) corresponds to adding $1$ to the function, not subtracting $1$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Order of Transformations",
                        "content": "The order in which transformations are applied is critical. If we had translated first and then stretched, the final equation would have been $y = 3(\\sqrt{ x - 4 } + 1) = 3\\sqrt{ x - 4 } + 3$. Since the stretch was applied *before* the translation, the scale factor $3$ only multiplies the square root term, giving $y = 3\\sqrt{ x - 4 } + 1$."
                }
        },
        {
                "id": "004619",
                "board": "OCR MEI",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Functions and Graphs",
                "subtopic": [
                        "Graph Transformations"
                ],
                "img": false,
                "question": "The curve $y = 2^x$ is transformed into the curve $y = 2^{x - 3} - 6$.<br><br><strong>(i)</strong> Describe fully the single transformation that maps the first curve onto the second, using vector notation where appropriate.<br><br><strong>(ii)</strong> State the coordinates of the $y$-intercept of the transformed curve.",
                "steps": [
                        "<strong>(i)</strong> Compare the transformed equation $y = 2^{x - 3} - 6$ to the original equation $y = 2^x$ to identify the individual changes:<br><br><strong>\u2022</strong> The variable $x$ has been replaced with $(x - 3)$, which corresponds to a horizontal translation of $+3$ units (3 units to the right).<br><strong>\u2022</strong> The term $-6$ has been added to the end of the function, which corresponds to a vertical translation of $-6$ units (6 units downwards).",
                        "These two translations can be combined into a single overall translation represented by the column vector:<br>\\begin{aligned} \\begin{pmatrix} 3 \\cr -6 \\end{pmatrix} \\end{aligned}",
                        "<strong>(ii)</strong> To find the $y$-intercept of the transformed curve, substitute $x = 0$ into its equation:<br>\\begin{aligned} y &= 2^{0 - 3} - 6 \\cr &= 2^{ -3 } - 6 \\cr &= \\dfrac{ 1 }{ 8 } - 6 \\cr &= \\dfrac{ 1 - 48 }{ 8 } \\cr &= -\\dfrac{ 47 }{ 8 } \\quad (\\text{or } -5.875) \\end{aligned}",
                        "Therefore, the coordinates of the $y$-intercept are:<br>\\begin{aligned} \\left( 0, -\\dfrac{ 47 }{ 8 } \\right) \\end{aligned} (or $(0, -5.875)$)."
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(i)</strong> Translation vector $\\begin{pmatrix} -3 \\cr -6 \\end{pmatrix}$<br><strong>(ii)</strong> $\\left( 0, -\\dfrac{ 47 }{ 8 } \\right)$",
                                "feedback": "Check the sign of your horizontal translation. Replacing $x$ with $(x - 3)$ corresponds to a translation of $+3$ units in the $x$-direction (to the right), so the vector is $\\begin{pmatrix} 3 \\cr -6 \\end{pmatrix}$, not $\\begin{pmatrix} -3 \\cr -6 \\end{pmatrix}$."
                        },
                        {
                                "ans": "<strong>(i)</strong> Translation vector $\\begin{pmatrix} 3 \\cr -6 \\end{pmatrix}$<br><strong>(ii)</strong> $(0, -12)$",
                                "feedback": "Check your calculation for the $y$-intercept. Substituting $x = 0$ into the equation yields $2^{ -3 } - 6 = \\dfrac{ 1 }{ 8 } - 6$. It appears you may have incorrectly calculated $2^{ -3 }$ as $-6$ or made a multiplication slip."
                        },
                        {
                                "ans": "<strong>(i)</strong> Translation vector $\\begin{pmatrix} 3 \\cr -6 \\end{pmatrix}$<br><strong>(ii)</strong> $(0, -5)$",
                                "feedback": "Check your evaluation of the negative exponent. Remember that $2^{ -3 } = \\dfrac{ 1 }{ 2^3 } = \\dfrac{ 1 }{ 8 }$. It appears you may have incorrectly evaluated $2^{ -3 }$ as $1$ (yielding $1 - 6 = -5$)."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Finding Coordinates of Features",
                        "content": "To find key features of any transformed curve (such as intercepts or stationary points), you can either substitute into the final equation directly or apply the transformation vector to the features of the original curve. For $y = 2^x$, the original $y$-intercept is $(0, 1)$. Applying the translation vector $\\begin{pmatrix} 3 \\cr -6 \\end{pmatrix}$ shifts this point to $(0+3, 1-6) = (3, -5)$, which lies on the new curve, but note that the new $y$-intercept must always have $x = 0$."
                }
        },
        {
                "id": "004620",
                "board": "OCR MEI",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Functions and Graphs",
                "subtopic": [
                        "Graph Transformations"
                ],
                "img": false,
                "question": "The curve $y = \\dfrac{ 3 }{ x - 2 } + 1$ is a transformation of the standard curve $y = \\dfrac{ 1 }{ x }$.<br><br>Describe a sequence of two transformations that maps the curve $y = \\dfrac{ 1 }{ x }$ onto the curve $y = \\dfrac{ 3 }{ x - 2 } + 1$.",
                "steps": [
                        "To map $y = \\dfrac{ 1 }{ x }$ onto the transformed equation $y = \\dfrac{ 3 }{ x - 2 } + 1$, analyze the differences:<br><br><strong>\u2022 Multiplication by $3$ on the outside:</strong> this corresponds to a vertical stretch parallel to the $y$-axis with scale factor $3$.<br><strong>\u2022 Replacing $x$ with $(x - 2)$ and adding $1$:</strong> this corresponds to a translation of $2$ units to the right and $1$ unit upwards.",
                        "We can structure these observations into a formal sequence of exactly two transformations:<br><br><strong>1. Transformation 1:</strong> A stretch parallel to the $y$-axis with scale factor $3$. This maps $y = \\dfrac{ 1 }{ x }$ onto $y = \\dfrac{ 3 }{ x }$.",
                        "<strong>2. Transformation 2:</strong> A translation represented by the column vector $\\begin{pmatrix} 2 \\cr 1 \\end{pmatrix}$. This maps $y = \\dfrac{ 3 }{ x }$ onto $y = \\dfrac{ 3 }{ x - 2 } + 1$."
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
                                "ans": "<strong>1.</strong> Stretch parallel to $y$-axis with scale factor $\\dfrac{ 1 }{ 3 }$<br><strong>2.</strong> Translation vector $\\begin{pmatrix} 2 \\cr 1 \\end{pmatrix}$",
                                "feedback": "Check your stretch scale factor. Since the function is multiplied by $3$ on the outside, the scale factor is $3$. A scale factor of $\\dfrac{ 1 }{ 3 }$ would correspond to dividing the function by $3$, which is incorrect."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Combining Shifts into Vectors",
                        "content": "When a question asks for a sequence of 'two' transformations but there is a horizontal shift, a vertical shift, and a stretch, you can combine the horizontal and vertical shifts into a single translation vector. A translation represented by $\\begin{pmatrix} a \\cr b \\end{pmatrix}$ counts as a single, combined transformation, keeping your sequence perfectly restricted to two steps."
                }
        },
        {
                "id": "004621",
                "board": "OCR MEI",
                "level": "AS",
                "major_area": "Coordinate Geometry",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Numerical Methods"
                ],
                "img": "images/Pure/004621.png",
                "question": "The diagram shows a circle with centre $O$ and radius $1$ unit. Points $A$ and $B$ lie on the circle such that angle $\\angle AOB = \\theta$ radians, where $\\theta$ is a small angle. Point $C$ lies on $AO$ such that $BC$ is perpendicular to $AO$.<br><br>Show that, when $\\theta$ is small, the length of $AC$ can be approximated by:<br>$$AC \\approx \\dfrac{ 1 }{ 2 }\\theta^2$$",
                "steps": [
                        "First, write down the geometric relationships along the radius $OA$ of the unit circle:<br>\\begin{aligned} AO &= 1 \\cr OC &= AO \\cos\\theta \\cr OC &= \\cos\\theta \\end{aligned}",
                        "The segment $AC$ is the difference between the full radius $AO$ and the segment $OC$:<br>\\begin{aligned} AC &= AO - OC \\cr &= 1 - \\cos\\theta \\end{aligned}",
                        "For small angles measured in radians, apply the standard small angle approximation for cosine, $\\cos\\theta \\approx 1 - \\dfrac{ 1 }{ 2 }\\theta^2$:<br>\\begin{aligned} AC &\\approx 1 - \\left( 1 - \\dfrac{ 1 }{ 2 }\\theta^2 \\right) \\cr &\\approx 1 - 1 + \\dfrac{ 1 }{ 2 }\\theta^2 \\cr &\\approx \\dfrac{ 1 }{ 2 }\\theta^2 \\end{aligned}<br>This completes the proof."
                ],
                "pi_options": [
                        {
                                "ans": "$AC \\approx \\theta$",
                                "feedback": "Check your geometric setup along the radius. The segment $OC = \\cos\\theta$, which yields $AC = 1 - \\cos\\theta$. Applying the approximation $\\cos\\theta \\approx 1 - \\dfrac{ 1 }{ 2 }\\theta^2$ yields a quadratic approximation, not a linear one."
                        },
                        {
                                "ans": "$AC \\approx 1 - \\theta^2$",
                                "feedback": "Check the standard small angle approximation for cosine. The approximation is $\\cos\\theta \\approx 1 - \\dfrac{ 1 }{ 2 }\\theta^2$. Forgetting the factor of $\\dfrac{ 1 }{ 2 }$ leads to an incorrect coefficient of $1$ for the quadratic term."
                        },
                        {
                                "ans": "$AC \\approx \\dfrac{ 1 }{ 2 }\\theta$",
                                "feedback": "Check your algebraic subtraction. Simplifying $1 - \\left( 1 - \\dfrac{ 1 }{ 2 }\\theta^2 \\right)$ results in a term proportional to $\\theta^2$, not $\\theta$. Always check that your powers match during algebraic simplification."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Geometrical Derivations",
                        "content": "When asked to derive a small angle approximation from a diagram, always identify the exact geometric lengths of the segments first using basic right-angled trigonometry (here, $OC = \\cos\\theta$). Only apply the algebraic small angle approximations (like $\\cos\\theta \\approx 1 - \\dfrac{ 1 }{ 2 }\\theta^2$) at the very end of your derivation."
                }
        },
        {
                "id": "004622",
                "board": "OCR MEI",
                "level": "AS",
                "major_area": "Coordinate Geometry",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Numerical Methods"
                ],
                "img": false,
                "question": "When $\\theta$ is small, show that the trigonometric expression:<br><br>$\\dfrac{ 3\\sin\\theta - \\theta\\cos\\theta }{ 4\\theta + \\tan^2\\theta }$<br><br>can be approximated by the constant value $\\dfrac{ 1 }{ 2 }$.",
                "steps": [
                        "Recall the standard small angle approximations for trigonometric functions (where $\\theta$ is measured in radians):<br>$\\sin\\theta \\approx \\theta$, $\\cos\\theta \\approx 1 - \\dfrac{ 1 }{ 2 }\\theta^2$, and $\\tan\\theta \\approx \\theta$",
                        "Substitute these approximations into the numerator of the expression:<br>\\begin{aligned} 3\\sin\\theta - \\theta\\cos\\theta &\\approx 3(\\theta) - \\theta\\left( 1 - \\dfrac{ 1 }{ 2 }\\theta^2 \\right) \\cr &\\approx 3\\theta - \\theta + \\dfrac{ 1 }{ 2 }\\theta^3 \\cr &\\approx 2\\theta + \\dfrac{ 1 }{ 2 }\\theta^3 \\end{aligned}",
                        "Since $\\theta$ is very small, higher-order terms like $\\theta^3$ are negligible compared to linear terms like $2\\theta$, so we can approximate the numerator as:<br>$3\\sin\\theta - \\theta\\cos\\theta \\approx 2\\theta$",
                        "Substitute the approximations into the denominator of the expression:<br>\\begin{aligned} 4\\theta + \\tan^2\\theta &\\approx 4\\theta + (\\theta)^2 \\cr &\\approx 4\\theta + \\theta^2 \\end{aligned}",
                        "For very small values of $\\theta$, the quadratic term $\\theta^2$ is negligible compared to the linear term $4\\theta$, so the denominator approximates to:<br>$4\\theta + \\tan^2\\theta \\approx 4\\theta$",
                        "Divide the approximated numerator by the approximated denominator:<br>\\begin{aligned} \\dfrac{ 3\\sin\\theta - \\theta\\cos\\theta }{ 4\\theta + \\tan^2\\theta } &\\approx \\dfrac{ 2\\theta }{ 4\\theta } \\cr &\\approx \\dfrac{ 1 }{ 2 } \\end{aligned}<br>This completes the proof."
                ],
                "pi_options": [
                        {
                                "ans": "$$\\dfrac{ 3 }{ 4 }$",
                                "feedback": "Check your expansion of the numerator. The term $\\theta\\cos\\theta \\approx \\theta(1) = \\theta$. Subtracting this from $3\\sin\\theta \\approx 3\\theta$ yields $2\\theta$ in the numerator, not $3\\theta$. This error leads to an incorrect constant ratio of $\\dfrac{ 3 }{ 4 }$."
                        },
                        {
                                "ans": "$$\\dfrac{ 1 }{ 4 }$",
                                "feedback": "Check your numerator subtraction. It appears you calculated $3\\sin\\theta - \\theta\\cos\\theta \\approx 3\\theta - 2\\theta = \\theta$. Note that $\\theta\\cos\\theta \\approx \\theta(1) = \\theta$, so the numerator simplifies to $3\\theta - \\theta = 2\\theta$."
                        },
                        {
                                "ans": "$1$",
                                "feedback": "Ensure you correctly keep the coefficients of your leading linear terms. The ratio simplifies to $\\dfrac{ 2\\theta }{ 4\\theta }$, which reduces to the constant fraction $\\dfrac{ 1 }{ 2 }$, not $1$."
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
                "level": "AS",
                "major_area": "Coordinate Geometry",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Numerical Methods"
                ],
                "img": false,
                "question": "Show that, when $\\theta$ is small, the expression:<br><br>$2\\cos\\theta + \\sin\\theta\\tan(2\\theta)$<br><br>can be approximated by $a + b\\theta^2$, where $a$ and $b$ are integers to be found.",
                "steps": [
                        "Recall the standard small angle approximations for the trigonometric terms in the expression:<br>$\\cos\\theta \\approx 1 - \\dfrac{ 1 }{ 2 }\\theta^2$, $\\sin\\theta \\approx \\theta$, and $\\tan(2\\theta) \\approx 2\\theta$",
                        "Substitute these approximations into each term of the expression:<br><br><strong>\u2022 First term:</strong><br>\\begin{aligned} 2\\cos\\theta &\\approx 2\\left( 1 - \\dfrac{ 1 }{ 2 }\\theta^2 \\right) \\cr &\\approx 2 - \\theta^2 \\end{aligned}",
                        "<strong>\u2022 Second term:</strong><br>\\begin{aligned} \\sin\\theta\\tan(2\\theta) &\\approx (\\theta)(2\\theta) \\cr &\\approx 2\\theta^2 \\end{aligned}",
                        "Add the two term approximations together to simplify the expression:<br>\\begin{aligned} 2\\cos\\theta + \\sin\\theta\\tan(2\\theta) &\\approx (2 - \\theta^2) + 2\\theta^2 \\cr &\\approx 2 + \\theta^2 \\end{aligned}<br>This is in the form $a + b\\theta^2$ with $a = 2$ and $b = 1$."
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
                                "feedback": "Check your expansion of $2\\cos\\theta$. Multiplying $2\\left( 1 - \\dfrac{ 1 }{ 2 }\\theta^2 \\right)$ yields $2 - \\theta^2$. Forgetting to distribute the $2$ to the quadratic term of the cosine approximation leads to an incorrect final sum."
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
                "level": "AS",
                "major_area": "Coordinate Geometry",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Numerical Methods"
                ],
                "img": false,
                "question": "When $\\theta$ is small, show that the expression:<br><br>$\\dfrac{ 4\\cos(2\\theta) - 4 }{ \\theta\\sin(3\\theta) }$<br><br>approximates to a constant rational value, and state this value.",
                "steps": [
                        "Recall the standard small angle approximations for the scaled trigonometric terms in the expression:<br>$\\cos(2\\theta) \\approx 1 - \\dfrac{ 1 }{ 2 }(2\\theta)^2$ and $\\sin(3\\theta) \\approx 3\\theta$",
                        "First, simplify the cosine approximation term for the numerator:<br>\\begin{aligned} \\cos(2\\theta) &\\approx 1 - \\dfrac{ 1 }{ 2 }(4\\theta^2) \\cr &\\approx 1 - 2\\theta^2 \\end{aligned}",
                        "Substitute this simplified term into the numerator of the expression:<br>\\begin{aligned} 4\\cos(2\\theta) - 4 &\\approx 4(1 - 2\\theta^2) - 4 \\cr &\\approx 4 - 8\\theta^2 - 4 \\cr &\\approx -8\\theta^2 \\end{aligned}",
                        "Substitute the sine approximation into the denominator of the expression:<br>\\begin{aligned} \\theta\\sin(3\\theta) &\\approx \\theta(3\\theta) \\cr &\\approx 3\\theta^2 \\end{aligned}",
                        "Divide the approximated numerator by the approximated denominator to find the constant rational value:<br>\\begin{aligned} \\dfrac{ 4\\cos(2\\theta) - 4 }{ \\theta\\sin(3\\theta) } &\\approx \\dfrac{ -8\\theta^2 }{ 3\\theta^2 } \\cr &\\approx -\\dfrac{ 8 }{ 3 } \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$-\\dfrac{ 2 }{ 3 }$",
                                "feedback": "Check your squaring of the scaled argument in the cosine approximation. The term $(2\\theta)^2 = 4\\theta^2$. Forgetting to square the coefficient $2$ leads to $\\cos(2\\theta) \\approx 1 - \\theta^2$, which yields an incorrect numerator of $-4\\theta^2$ and a final ratio of $-\\dfrac{ 2 }{ 3 }$."
                        },
                        {
                                "ans": "$$\\dfrac{ 8 }{ 3 }$",
                                "feedback": "Check your signs in the numerator. Expanding $4(1 - 2\\theta^2) - 4$ yields $-8\\theta^2$. Forgetting the negative sign leads to an incorrect positive ratio of $\\dfrac{ 8 }{ 3 }$."
                        },
                        {
                                "ans": "$-\\dfrac{ 4 }{ 3 }$",
                                "feedback": "Check your numerator arithmetic. It appears you may have neglected the multiplier $4$ in front of the cosine term when evaluating the quadratic, leading to $-4\\theta^2$ in the numerator."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Squaring the Bracket",
                        "content": "A very frequent slip in exams is writing $\\cos(kx) \\approx 1 - \\dfrac{ 1 }{ 2 }k x^2$ instead of $1 - \\dfrac{ 1 }{ 2 }(kx)^2$. Remember that the entire scaled argument $kx$ must be squared, which changes the coefficient of $x^2$ by a factor of $k^2$."
                }
        },
        {
                "id": "004625",
                "board": "OCR MEI",
                "level": "AS",
                "major_area": "Coordinate Geometry",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Numerical Methods"
                ],
                "img": false,
                "question": "In a right-angled triangle $ABC$, the angle $\\angle ABC = 90^\\circ$ and the angle $\\angle BAC = \\theta$ radians, where $\\theta$ is small. The hypotenuse $AC$ has a constant length of $10\\text{ cm}$.<br><br><strong>(i)</strong> Show that the difference between the hypotenuse $AC$ and the adjacent side $AB$ is given by $10 - 10\\cos\\theta$.<br><br><strong>(ii)</strong> Hence show that when $\\theta$ is small, this difference can be approximated by $5\\theta^2$.",
                "steps": [
                        "<strong>(i)</strong> In the right-angled triangle $ABC$, the adjacent side to the angle $\\theta$ is the side $AB$. Write down the basic trigonometric ratio for cosine:<br>\\begin{aligned} \\cos\\theta &= \\dfrac{ \\text{Adjacent} }{ \\text{Hypotenuse} } \\cr \\cos\\theta &= \\dfrac{ AB }{ AC } \\cr \\cos\\theta &= \\dfrac{ AB }{ 10 } \\end{aligned}",
                        "Rearrange this expression to make the adjacent side $AB$ the subject:<br>\\begin{aligned} AB &= 10\\cos\\theta \\end{aligned}",
                        "Find the difference between the hypotenuse $AC$ and the adjacent side $AB$:<br>\\begin{aligned} \\text{Difference} &= AC - AB \\cr &= 10 - 10\\cos\\theta \\end{aligned}<br>This completes the proof for part <strong>(i)</strong>.",
                        "<strong>(ii)</strong> For small angles measured in radians, apply the standard small angle approximation for cosine, $\\cos\\theta \\approx 1 - \\dfrac{ 1 }{ 2 }\\theta^2$:<br>\\begin{aligned} 10 - 10\\cos\\theta &\\approx 10 - 10\\left( 1 - \\dfrac{ 1 }{ 2 }\\theta^2 \\right) \\cr &\\approx 10 - 10 + 5\\theta^2 \\cr &\\approx 5\\theta^2 \\end{aligned}<br>This completes the proof."
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(i)</strong> $AC - AB = 10 - 10\\sin\\theta$<br><strong>(ii)</strong> $10 - 10\\theta$",
                                "feedback": "Remember that the adjacent side $AB$ is related to the hypotenuse $AC$ via the cosine ratio, not the sine ratio. Using the sine ratio corresponds to the opposite side $BC$, which is incorrect."
                        },
                        {
                                "ans": "<strong>(i)</strong> $AC - AB = 10 - 10\\cos\\theta$<br><strong>(ii)</strong> $10\\theta^2$",
                                "feedback": "Check your expansion in part <strong>(ii)</strong>. When multiplying out $-10\\left( 1 - \\dfrac{ 1 }{ 2 }\\theta^2 \\right)$, you must multiply $\\dfrac{ 1 }{ 2 }$ by $10$ to yield $5\\theta^2$, not $10\\theta^2$."
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
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Applications of Differentiation",
                "subtopic": [
                        "Curved Graphs",
                        "Differentiation"
                ],
                "img": "images/Pure/004626.png",
                "question": "In this question you must show detailed reasoning.<br><br>A curve has equation $y = x - 3 + \\dfrac{ 1 }{ x - 4 }$.<br>The curve is shown in the diagram.<br><br><strong>(i)</strong> Determine the coordinates of the stationary points on the curve.<br><strong>(ii)</strong> Determine the nature of each stationary point.<br><strong>(iii)</strong> Write down the equation of the vertical asymptote.<br><strong>(iv)</strong> Deduce the set of values of $x$ for which the curve is concave upwards.",
                "steps": [
                        "<strong>(i) Finding the stationary points:</strong><br>To find the coordinates of the stationary points, we first differentiate the curve equation $y = x - 3 + \\dfrac{ 1 }{ x - 4 }$ with respect to $x$.<br><br>Using the chain rule on the fractional term, we obtain:<br>\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= 1 - \\dfrac{ 1 }{ (x - 4)^2 } \\end{aligned}<br><br>At a stationary point, the gradient $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 0$. Setting the derivative to $0$ and solving for $x$:<br>\\begin{aligned} 1 - \\dfrac{ 1 }{ (x - 4)^2 } &= 0 \\cr \\dfrac{ 1 }{ (x - 4)^2 } &= 1 \\cr (x - 4)^2 &= 1 \\cr x - 4 &= \\pm 1 \\end{aligned}<br><br>This gives two possible values for $x$:<br>\\begin{aligned} x - 4 = 1 &\\implies x = 5 \\cr x - 4 = -1 &\\implies x = 3 \\end{aligned}<br><br>Now, we find the corresponding $y$-coordinates by substituting these values back into the original curve equation:<br><br>For $x = 5$:<br>\\begin{aligned} y &= 5 - 3 + \\dfrac{ 1 }{ 5 - 4 } \\cr &= 2 + 1 \\cr &= 3 \\end{aligned}<br><br>For $x = 3$:<br>\\begin{aligned} y &= 3 - 3 + \\dfrac{ 1 }{ 3 - 4 } \\cr &= 0 - 1 \\cr &= -1 \\end{aligned}<br><br>Thus, the coordinates of the stationary points are $(5, 3)$ and $(3, -1)$..",
                        "<strong>(ii) Determining the nature of each stationary point:</strong><br>To determine the nature of the stationary points, we find the second derivative, $\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2}$, by differentiating $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 1 - (x - 4)^{-2}$:<br>\\begin{aligned} \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} &= \\dfrac{ 2 }{ (x - 4)^3 } \\end{aligned}<br><br>We now evaluate this second derivative at each of our stationary points:<br><br>At $x = 5$:<br>\\begin{aligned} \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} &= \\dfrac{ 2 }{ (5 - 4)^3 } \\cr &= 2 \\end{aligned}<br>Since $2 > 0$, the curve is concave upwards at this point, so $(5, 3)$ is a <strong>local minimum</strong>.<br><br>At $x = 3$:<br>\\begin{aligned} \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} &= \\dfrac{ 2 }{ (3 - 4)^3 } \\cr &= -2 \\end{aligned}<br>Since $-2 < 0$, the curve is concave downwards at this point, so $(3, -1)$ is a <strong>local maximum</strong>.",
                        "<strong>(iii) Equation of the vertical asymptote:</strong><br>The vertical asymptote occurs where the rational function is undefined. This happens when the denominator of the fractional term is equal to zero:<br>\\begin{aligned} x - 4 &= 0 \\cr x &= 4 \\end{aligned}<br><br>Therefore, the equation of the vertical asymptote is $x = 4$.",
                        "<strong>(iv) Finding where the curve is concave upwards:</strong><br>A curve is concave upwards when the second derivative is strictly positive, $\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} > 0$.<br><br>Using our expression for the second derivative:<br>\\begin{aligned} \\dfrac{ 2 }{ (x - 4)^3 } &> 0 \\end{aligned}<br><br>Since the numerator is a positive constant ($2$), the fraction is positive if and only if the denominator is positive:<br>\\begin{aligned} (x - 4)^3 &> 0 \\cr x - 4 &> 0 \\cr x &> 4 \\end{aligned}<br><br>Thus, the set of values for which the curve is concave upwards is $x > 4$."
                ],
                "pi_options": [
                        {
                                "ans": "$$\\text{Local minimum at } (3, -1), \\text{ concave upwards for } x < 4$$",
                                "feedback": "This option confuses the local maximum with the local minimum, and incorrectly identifies the region of concavity by solving for when the second derivative is negative rather than positive."
                        },
                        {
                                "ans": "$$\\text{Local minimum at } (5, 3), \\text{ concave upwards for } x > 3$$",
                                "feedback": "While the coordinates of the local minimum are correct, the boundary for concavity is incorrect. The vertical asymptote is at $x = 4$, which is where the second derivative changes sign, not at the coordinate $x = 3$."
                        },
                        {
                                "ans": "$$\\text{Local minimum at } (5, 3), \\text{ concave upwards for } x < 4$$",
                                "feedback": "The coordinates of the local minimum are correct, but the inequality for concavity is reversed, representing the region where the curve is concave downwards."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Asymptotes and Signs",
                        "content": "When calculating concavity using the second derivative $\\dfrac{ 2 }{ (x - 4)^3 }$, always keep in mind that $x = 4$ is a vertical asymptote where the function is undefined. The curve can never be concave upwards at $x = 4$. Make sure to exclude the asymptote value from your final domain of concavity."
                }
        },
        {
                "id": "004627",
                "board": "OCR MEI",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Applications of Differentiation",
                "subtopic": [
                        "Curved Graphs",
                        "Differentiation"
                ],
                "img": "images/Pure/004627.png",
                "question": "In this question you must show detailed reasoning.<br><br>A curve has equation $y = 2x - 1 + \\dfrac{ 8 }{ x - 1 }$.<br>The curve is shown in the diagram.<br><br><strong>(i)</strong> Determine the coordinates of the stationary points on the curve.<br><strong>(ii)</strong> Determine the nature of each stationary point.<br><strong>(iii)</strong> Write down the equation of the vertical asymptote.<br><strong>(iv)</strong> Deduce the set of values of $x$ for which the curve is concave upwards.",
                "steps": [
                        "<strong>(i) Finding the stationary points:</strong><br>To find the coordinates of the stationary points, we differentiate the curve equation $y = 2x - 1 + \\dfrac{ 8 }{ x - 1 }$ with respect to $x$.<br><br>Using the chain rule on the fraction, we get:<br>\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= 2 - \\dfrac{ 8 }{ (x - 1)^2 } \\end{aligned}<br><br>At a stationary point, $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 0$. Setting the derivative to $0$ and solving for $x$:<br>\\begin{aligned} 2 - \\dfrac{ 8 }{ (x - 1)^2 } &= 0 \\cr \\dfrac{ 8 }{ (x - 1)^2 } &= 2 \\cr (x - 1)^2 &= 4 \\cr x - 1 &= \\pm 2 \\end{aligned}<br><br>This yields two $x$-values:<br>\\begin{aligned} x - 1 = 2 &\\implies x = 3 \\cr x - 1 = -2 &\\implies x = -1 \\end{aligned}<br><br>Now, substitute these back into the original equation to find the corresponding $y$-coordinates:<br><br>For $x = 3$:<br>\\begin{aligned} y &= 2(3) - 1 + \\dfrac{ 8 }{ 3 - 1 } \\cr &= 5 + 4 \\cr &= 9 \\end{aligned}<br><br>For $x = -1$:<br>\\begin{aligned} y &= 2(-1) - 1 + \\dfrac{ 8 }{ -1 - 1 } \\cr &= -3 - 4 \\cr &= -7 \\end{aligned}<br><br>Thus, the coordinates of the stationary points are $(3, 9)$ and $(-1, -7)$.",
                        "<strong>(ii) Determining the nature of each stationary point:</strong><br>To find the nature, we calculate the second derivative, $\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2}$, by differentiating $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 2 - 8(x - 1)^{-2}$:<br>\\begin{aligned} \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} &= \\dfrac{ 16 }{ (x - 1)^3 } \\end{aligned}<br><br>We evaluate this at each stationary point:<br><br>At $x = 3$:<br>\\begin{aligned} \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} &= \\dfrac{ 16 }{ (3 - 1)^3 } \\cr &= 2 \\end{aligned}<br>Since $2 > 0$, $(3, 9)$ is a <strong>local minimum</strong>.<br><br>At $x = -1$:<br>\\begin{aligned} \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} &= \\dfrac{ 16 }{ (-1 - 1)^3 } \\cr &= -2 \\end{aligned}<br>Since $-2 < 0$, $(-1, -7)$ is a <strong>local maximum</strong>.",
                        "<strong>(iii) Equation of the vertical asymptote:</strong><br>The vertical asymptote occurs where the denominator of the fraction is zero:<br>\\begin{aligned} x - 1 &= 0 \\cr x &= 1 \\end{aligned}<br><br>So the vertical asymptote is the line $x = 1$.",
                        "<strong>(iv) Finding where the curve is concave upwards:</strong><br>The curve is concave upwards when the second derivative is positive, $\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} > 0$.<br><br>Using our second derivative expression:<br>\\begin{aligned} \\dfrac{ 16 }{ (x - 1)^3 } &> 0 \\end{aligned}<br><br>Since the numerator ($16$) is positive, the fraction is positive when:<br>\\begin{aligned} (x - 1)^3 &> 0 \\cr x - 1 &> 0 \\cr x &> 1 \\end{aligned}<br><br>Thus, the curve is concave upwards for $x > 1$."
                ],
                "pi_options": [
                        {
                                "ans": "$$\\text{Local minimum at } (-1, -7), \\text{ concave upwards for } x < 1$$",
                                "feedback": "This option confuses the local maximum with the local minimum and reverses the inequality of the concavity region."
                        },
                        {
                                "ans": "$$\\text{Local minimum at } (3, 9), \\text{ concave upwards for } x > 2$$",
                                "feedback": "While the stationary point is correct, the concavity interval is incorrect. The vertical asymptote at $x = 1$ is where the second derivative changes sign, not at $x = 2$."
                        },
                        {
                                "ans": "$$\\text{Local minimum at } (3, 9), \\text{ concave upwards for } x < 1$$",
                                "feedback": "The coordinates and nature of the stationary point are correct, but the second derivative is positive when $x - 1 > 0$, which corresponds to $x > 1$, not $x < 1$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Differentiating Efficiently",
                        "content": "When given a function such as $y = 2x - 1 + \\dfrac{ 8 }{ x - 1 }$, differentiating it term-by-term using the chain rule on $8(x - 1)^{-1}$ is much faster and less prone to sign errors than rewriting the equation as a single quotient and using the quotient rule."
                }
        },
        {
                "id": "004628",
                "board": "OCR MEI",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Applications of Differentiation",
                "subtopic": [
                        "Curved Graphs",
                        "Differentiation"
                ],
                "img": "images/Pure/004628.png",
                "question": "In this question you must show detailed reasoning.<br><br>A curve has equation $y = \\dfrac{ x^2 + 3 }{ x - 1 }$.<br>The curve is shown in the diagram.<br><br><strong>(i)</strong> Express the equation of the curve in the form $y = ax + b + \\dfrac{ c }{ x - 1 }$, where $a$, $b$, and $c$ are integers.<br><strong>(ii)</strong> Determine the coordinates and nature of the stationary points on the curve.<br><strong>(iii)</strong> State the equation of the vertical asymptote.<br><strong>(iv)</strong> Deduce the set of values of $x$ for which the curve is concave upwards.",
                "steps": [
                        "<strong>(i) Expressing the curve in the given form:</strong><br>We can rewrite the numerator $x^2 + 3$ to facilitate division by $(x - 1)$:<br>\\begin{aligned} x^2 + 3 &= (x^2 - 1) + 4 \\cr &= (x - 1)(x + 1) + 4 \\end{aligned}<br><br>Now we divide each term by $(x - 1)$:<br>\\begin{aligned} y &= \\dfrac{ (x - 1)(x + 1) + 4 }{ x - 1 } \\cr &= x + 1 + \\dfrac{ 4 }{ x - 1 } \\end{aligned}<br><br>Thus, the equation of the curve in the required form is $y = x + 1 + \\dfrac{ 4 }{ x - 1 }$, where $a = 1$, $b = 1$, and $c = 4$.",
                        "<strong>(ii) Finding coordinates and nature of stationary points:</strong><br>Using the rewritten form, we differentiate $y = x + 1 + 4(x - 1)^{-1}$ with respect to $x$:<br>\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= 1 - \\dfrac{ 4 }{ (x - 1)^2 } \\end{aligned}<br><br>Set the derivative to $0$ to find stationary points:<br>\\begin{aligned} 1 - \\dfrac{ 4 }{ (x - 1)^2 } &= 0 \\cr (x - 1)^2 &= 4 \\cr x - 1 &= \\pm 2 \\end{aligned}<br><br>This gives:<br>\\begin{aligned} x - 1 = 2 &\\implies x = 3 \\cr x - 1 = -2 &\\implies x = -1 \\end{aligned}<br><br>Substitute these into $y = x + 1 + \\dfrac{ 4 }{ x - 1 }$ to find the $y$-coordinates:<br><br>For $x = 3$:<br>\\begin{aligned} y &= 3 + 1 + \\dfrac{ 4 }{ 3 - 1 } \\cr &= 4 + 2 \\cr &= 6 \\end{aligned}<br><br>For $x = -1$:<br>\\begin{aligned} y &= -1 + 1 + \\dfrac{ 4 }{ -1 - 1 } \\cr &= 0 - 2 \\cr &= -2 \\end{aligned}<br><br>Now, find the second derivative to determine their nature:<br>\\begin{aligned} \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} &= \\dfrac{ 8 }{ (x - 1)^3 } \\end{aligned}<br><br>Evaluate at each point:<br><br>At $x = 3$:<br>\\begin{aligned} \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} &= \\dfrac{ 8 }{ (3 - 1)^3 } \\cr &= 1 > 0 \\end{aligned}<br>Since $1 > 0$, $(3, 6)$ is a <strong>local minimum</strong>.<br><br>At $x = -1$:<br>\\begin{aligned} \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} &= \\dfrac{ 8 }{ (-1 - 1)^3 } \\cr &= -1 < 0 \\end{aligned}<br>Since $-1 < 0$, $(-1, -2)$ is a <strong>local maximum</strong>.",
                        "<strong>(iii) Finding the vertical asymptote:</strong><br>The curve is undefined when the denominator of the fraction is zero:<br>\\begin{aligned} x - 1 &= 0 \\cr x &= 1 \\end{aligned}<br><br>Thus, the equation of the vertical asymptote is $x = 1$.",
                        "<strong>(iv) Finding where the curve is concave upwards:</strong><br>The curve is concave upwards when the second derivative is positive:<br>\\begin{aligned} \\dfrac{ 8 }{ (x - 1)^3 } &> 0 \\end{aligned}<br><br>Since the numerator is positive, this requires:<br>\\begin{aligned} (x - 1)^3 &> 0 \\cr x - 1 &> 0 \\cr x &> 1 \\end{aligned}<br><br>So the curve is concave upwards for $x > 1$."
                ],
                "pi_options": [
                        {
                                "ans": "$$y = x - 1 + \\dfrac{ 4 }{ x - 1 }$$",
                                "feedback": "This division is incorrect. If you multiply out $(x-1)(x-1) + 4$, you get $x^2 - 2x + 5$, which does not equal the original numerator $x^2 + 3$."
                        },
                        {
                                "ans": "$$\\text{Local minimum at } (3, 6), \\text{ concave upwards for } x < 1$$",
                                "feedback": "The coordinates of the local minimum are correct, but the second derivative is positive only for $x > 1$. Therefore, the curve is concave upwards for $x > 1$ rather than $x < 1$."
                        },
                        {
                                "ans": "$$\\text{Local minimum at } (-1, -2), \\text{ concave upwards for } x > 1$$",
                                "feedback": "This option incorrectly identifies the point $(-1, -2)$ as a local minimum. Since the second derivative at $x = -1$ is negative, it is actually a local maximum."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Splitting Fractions",
                        "content": "When faced with an improper algebraic fraction where the degree of the numerator is exactly one higher than that of the denominator, performing algebraic division first to write the curve as $x + 1 + \\dfrac{ 4 }{ x - 1 }$ is a massive timesaver. It not only makes differentiation incredibly direct but also immediately reveals both the vertical and slant asymptotes."
                }
        },
        {
                "id": "004629",
                "board": "OCR MEI",
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
                        "<strong>(i) Finding the coordinates of the stationary point:</strong><br>We differentiate the equation $y = x - 2\\ln(x - 1)$ with respect to $x$ for the domain $x > 1$:<br>\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= 1 - \\dfrac{ 2 }{ x - 1 } \\end{aligned}<br><br>To find the stationary points, set $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 0$:<br>\\begin{aligned} 1 - \\dfrac{ 2 }{ x - 1 } &= 0 \\cr \\dfrac{ 2 }{ x - 1 } &= 1 \\cr x - 1 &= 2 \\cr x &= 3 \\end{aligned}<br><br>Now, substitute $x = 3$ back into the original curve equation:<br>\\begin{aligned} y &= 3 - 2\\ln(3 - 1) \\cr &= 3 - 2\\ln 2 \\end{aligned}<br><br>Thus, the coordinates of the stationary point are $(3, 3 - 2\\ln 2)$.",
                        "<strong>(ii) Determining the nature of the stationary point:</strong><br>We find the second derivative $\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2}$ by differentiating $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 1 - 2(x - 1)^{-1}$:<br>\\begin{aligned} \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} &= \\dfrac{ 2 }{ (x - 1)^2 } \\end{aligned}<br><br>Evaluate this at $x = 3$:<br>\\begin{aligned} \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} &= \\dfrac{ 2 }{ (3 - 1)^2 } \\cr &= \\dfrac{ 2 }{ 4 } \\cr &= \\dfrac{ 1 }{ 2 } \\end{aligned}<br><br>Since $\\dfrac{ 1 }{ 2 } > 0$, the curve is concave upwards at this point. Thus, the stationary point is a <strong>local minimum</strong>.",
                        "<strong>(iii) Equation of the vertical asymptote:</strong><br>The logarithmic function $\\ln(x - 1)$ is defined only for $x > 1$. As $x$ approaches $1$ from the right ($x \\to 1^+$), $(x - 1) \\to 0^+$, which means $\\ln(x - 1) \\to -\\infty$.<br><br>Consequently:<br>\\begin{aligned} y &= x - 2\\ln(x - 1) \\to +\\infty \\end{aligned}<br><br>Thus, the line $x = 1$ is a vertical asymptote.",
                        "<strong>(iv) Determining where the curve is concave upwards:</strong><br>A curve is concave upwards when its second derivative is strictly positive:<br>\\begin{aligned} \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} &> 0 \\cr \\dfrac{ 2 }{ (x - 1)^2 } &> 0 \\end{aligned}<br><br>Since $(x - 1)^2 > 0$ for all $x > 1$, the expression $\\dfrac{ 2 }{ (x - 1)^2 }$ is always strictly positive on the entire domain of the function.<br><br>Therefore, the curve is concave upwards for all $x > 1$ (its entire domain)."
                ],
                "pi_options": [
                        {
                                "ans": "$$\\text{Stationary point at } (2, 2), \\text{ concave upwards for all } x > 1$$",
                                "feedback": "This option uses an incorrect x-coordinate for the stationary point. Setting the first derivative to $0$ yields $x - 1 = 2 \\implies x = 3$, not $x = 2$."
                        },
                        {
                                "ans": "$$\\text{Stationary point at } (3, 3 - 2\\ln 2), \\text{ which is a local maximum}$$",
                                "feedback": "This option incorrectly identifies the turning point as a local maximum. At $x = 3$, the second derivative evaluates to a positive value ($0.5 > 0$), confirming the point is a local minimum."
                        },
                        {
                                "ans": "$$\\text{Stationary point at } (3, 3 - 2\\ln 2), \\text{ concave upwards for } x > 3$$",
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
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Applications of Differentiation",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning.<br><br>A curve has equation $y = \\tan x - 2x$, defined on the domain $0 < x < \\pi$, $x \\neq \\dfrac{ \\pi }{ 2 }$.<br><br><strong>(i)</strong> Determine the coordinates of the stationary points on the curve, giving your answers in terms of $\\pi$.<br><strong>(ii)</strong> Determine the nature of each stationary point.<br><strong>(iii)</strong> State the equation of the vertical asymptote on this domain.<br><strong>(iv)</strong> Determine the set of values of $x$ on this domain for which the curve is concave upwards.",
                "steps": [
                        "<strong>(i) Finding the coordinates of the stationary points:</strong><br>We differentiate the equation $y = \\tan x - 2x$ with respect to $x$:<br>\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= \\sec^2 x - 2 \\end{aligned}<br><br>Set the first derivative to $0$ to find stationary points:<br>\\begin{aligned} \\sec^2 x - 2 &= 0 \\cr \\sec^2 x &= 2 \\cr \\cos^2 x &= \\dfrac{ 1 }{ 2 } \\cr \\cos x &= \\pm \\dfrac{ 1 }{ \\sqrt{ 2 } } \\end{aligned}<br><br>On the domain $0 < x < \\pi$, there are two solutions:<br>\\begin{aligned} \\cos x = \\dfrac{ 1 }{ \\sqrt{ 2 } } &\\implies x = \\dfrac{ \\pi }{ 4 } \\cr \\cos x = -\\dfrac{ 1 }{ \\sqrt{ 2 } } &\\implies x = \\dfrac{ 3\\pi }{ 4 } \\end{aligned}<br><br>Now, find the corresponding $y$-coordinates by substituting these values back into the original curve equation:<br><br>For $x = \\dfrac{ \\pi }{ 4 }$:<br>\\begin{aligned} y &= \\tan\\left(\\dfrac{ \\pi }{ 4 }\\right) - 2\\left(\\dfrac{ \\pi }{ 4 }\\right) \\cr &= 1 - \\dfrac{ \\pi }{ 2 } \\end{aligned}<br><br>For $x = \\dfrac{ 3\\pi }{ 4 }$:<br>\\begin{aligned} y &= \\tan\\left(\\dfrac{ 3\\pi }{ 4 }\\right) - 2\\left(\\dfrac{ 3\\pi }{ 4 }\\right) \\cr &= -1 - \\dfrac{ 3\\pi }{ 2 } \\end{aligned}<br><br>Thus, the coordinates of the stationary points are:<br>\\begin{aligned} \\left(\\dfrac{ \\pi }{ 4 }, 1 - \\dfrac{ \\pi }{ 2 }\\right) \\quad \\text{and} \\quad \\left(\\dfrac{ 3\\pi }{ 4 }, -1 - \\dfrac{ 3\\pi }{ 2 }\\right) \\end{aligned}",
                        "<strong>(ii) Determining the nature of each stationary point:</strong><br>We find the second derivative $\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2}$ by differentiating $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\sec^2 x - 2$ using the chain rule:<br>\\begin{aligned} \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} &= 2\\sec x \\cdot (\\sec x \\tan x) \\cr &= 2\\sec^2 x \\tan x \\end{aligned}<br><br>We now evaluate this at each stationary point:<br><br>At $x = \\dfrac{ \\pi }{ 4 }$:<br>\\begin{aligned} \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} &= 2\\sec^2\\left(\\dfrac{ \\pi }{ 4 }\\right) \\tan\\left(\\dfrac{ \\pi }{ 4 }\\right) \\cr &= 2(2)(1) \\cr &= 4 \\end{aligned}<br>Since $4 > 0$, the stationary point $\\left(\\dfrac{ \\pi }{ 4 }, 1 - \\dfrac{ \\pi }{ 2 }\\right)$ is a <strong>local minimum</strong>.<br><br>At $x = \\dfrac{ 3\\pi }{ 4 }$:<br>\\begin{aligned} \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} &= 2\\sec^2\\left(\\dfrac{ 3\\pi }{ 4 }\\right) \\tan\\left(\\dfrac{ 3\\pi }{ 4 }\\right) \\cr &= 2(2)(-1) \\cr &= -4 \\end{aligned}<br>Since $-4 < 0$, the stationary point $\\left(\\dfrac{ 3\\pi }{ 4 }, -1 - \\dfrac{ 3\\pi }{ 2 }\\right)$ is a <strong>local maximum</strong>.",
                        "<strong>(iii) Stating the equation of the vertical asymptote:</strong><br>On the domain $0 < x < \\pi$, the function $\\tan x$ is undefined at $x = \\dfrac{ \\pi }{ 2 }$, where the curve has a vertical asymptote.<br><br>Therefore, the equation of the vertical asymptote is $x = \\dfrac{ \\pi }{ 2 }$.",
                        "<strong>(iv) Finding where the curve is concave upwards:</strong><br>A curve is concave upwards when its second derivative is strictly positive:<br>\\begin{aligned} \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} &> 0 \\cr 2\\sec^2 x \\tan x &> 0 \\end{aligned}<br><br>Since $\\sec^2 x = \\dfrac{ 1 }{ \\cos^2 x }$ is always positive for all valid values in our domain, we only need:<br>\\begin{aligned} \\tan x &> 0 \\end{aligned}<br><br>On the domain $0 < x < \\pi$, the tangent function is positive only in the first quadrant, which corresponds to the interval:<br>\\begin{aligned} 0 < x < \\dfrac{ \\pi }{ 2 } \\end{aligned}<br><br>Thus, the curve is concave upwards for the set of values $0 < x < \\dfrac{ \\pi }{ 2 }$."
                ],
                "pi_options": [
                        {
                                "ans": "$$\\text{Local minimum at } \\left(\\dfrac{ \\pi }{ 4 }, 1 - \\dfrac{ \\pi }{ 2 }\\right), \\text{ concave upwards for all } 0 < x < \\pi$$",
                                "feedback": "The local minimum coordinates are correct, but the concavity interval is wrong. The second derivative contains the factor $\\tan x$, which is negative in the second quadrant, meaning the curve becomes concave downwards for $x > \\dfrac{\\pi}{2}$."
                        },
                        {
                                "ans": "$$\\text{Local minimum at } \\left(\\dfrac{ \\pi }{ 4 }, 1 - \\dfrac{ \\pi }{ 2 }\\right), \\text{ concave upwards for } \\dfrac{ \\pi }{ 2 } < x < \\pi$$",
                                "feedback": "This option identifies the wrong quadrant for concavity. On the interval $\\dfrac{\\pi}{2} < x < \\pi$ (the second quadrant), $\\tan x < 0$, which makes the second derivative negative, indicating the curve is concave downwards."
                        },
                        {
                                "ans": "$$\\text{Local maximum at } \\left(\\dfrac{ \\pi }{ 4 }, 1 - \\dfrac{ \\pi }{ 2 }\\right), \\text{ local minimum at } \\left(\\dfrac{ 3\\pi }{ 4 }, -1 - \\dfrac{ 3\\pi }{ 2 }\\right)$$$",
                                "feedback": "This option has the natures of the stationary points reversed. At $x = \\dfrac{\\pi}{4}$, the second derivative is positive, making it a local minimum, while at $x = \\dfrac{3\\pi}{4}$, the second derivative is negative, making it a local maximum."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Trigonometric Turning Points",
                        "content": "When solving $\\sec^2 x = 2$, don't forget that this implies $\\cos^2 x = \\dfrac{ 1 }{ 2 }$, which yields $\\cos x = \\pm \\dfrac{ 1 }{ \\sqrt{ 2 } }$. On the interval $0 < x < \\pi$, this produces a solution in the first quadrant ($\\cos x > 0$) and one in the second quadrant ($\\cos x < 0$). Missing the negative root will lead you to lose half of your stationary points!"
                }
        },
        {
                "id": "004631",
                "board": "OCR MEI",
                "level": "A",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Exponential and Logarithmic Functions and Graphs",
                        "Modelling and Applications"
                ],
                "img": "images/Pure/004631.png",
                "question": "In this question you must show detailed reasoning.<br><br>A video-sharing platform launched on 1 September 2020. The owners of the platform report the number of active users, $n$, at the start of each month. They believe that the relationship between $n$ and the number of months after launch, $t$, can be modelled by $n = a \\times 2^{kt}$, where $a$ and $k$ are constants.<br><br><strong>(i)</strong> Show that, according to the model, the graph of $\\log_{10} n$ against $t$ is a straight line.<br><strong>(ii)</strong> The diagram shows a plot of the values of $t$ and $\\log_{10} n$ for the first seven months after launch, along with a line of best fit. Use this line of best fit to find estimates of the values of $a$ and $k$.<br><strong>(iii)</strong> The owners of the platform want to estimate the date on which they would report that the platform has $250,000$ active users. Use the model to estimate this date.<br><strong>(iv)</strong> Give a reason why this model may not be appropriate for large values of $t$.",
                "steps": [
                        "<strong>(i) Linearising the exponential model:</strong><br>We start with the exponential model equation:<br>\\begin{aligned} n &= a \\times 2^{kt} \\end{aligned}<br><br>Taking the base-$10$ logarithm of both sides:<br>\\begin{aligned} \\log_{10} n &= \\log_{10}(a \\times 2^{kt}) \\cr &= \\log_{10} a + \\log_{10}(2^{kt}) \\cr &= \\log_{10} a + kt \\log_{10} 2 \\end{aligned}<br><br>Rearranging this into the standard linear form $y = mx + c$, where $y = \\log_{10} n$ and $x = t$:<br>\\begin{aligned} \\log_{10} n &= (k \\log_{10} 2)t + \\log_{10} a \\end{aligned}<br><br>Since $k \\log_{10} 2$ and $\\log_{10} a$ are constants, this represents a linear equation in $t$. Thus, the graph of $\\log_{10} n$ against $t$ is a straight line.",
                        "<strong>(ii) Finding estimates of $a$ and $k$:</strong><br>From the diagram, the vertical intercept ($c$) of the line of best fit is at $2.0$, and the line passes through the points $(0, 2.0)$ and $(8, 4.0)$:<br><br>We first find the vertical intercept $c$ and gradient $m$ of this line:<br>\\begin{aligned} c &= 2.0 \\cr m &= \\dfrac{ 4.0 - 2.0 }{ 8 - 0 } \\cr &= 0.25 \\end{aligned}<br><br>Now, we relate these to our linearised model parameters:<br><br>For $a$:<br>\\begin{aligned} \\log_{10} a &= 2.0 \\cr a &= 10^{ 2.0 } \\cr &= 100 \\end{aligned}<br><br>For $k$:<br>\\begin{aligned} k \\log_{10} 2 &= 0.25 \\cr k &= \\dfrac{ 0.25 }{ \\log_{10} 2 } \\cr &\\approx 0.830 \\end{aligned}<br><br>Thus, our estimated parameters are $a = 100$ and $k = 0.830$ (to $3$ significant figures).",
                        "<strong>(iii) Estimating the target date:</strong><br>The owners want to find when the user count reaches $n = 250,000$. Substituting $n = 250,000$ into our linear model equation:<br>\\begin{aligned} \\log_{10}(250,000) &= 0.25t + 2.0 \\cr 5.3979... &= 0.25t + 2.0 \\cr 0.25t &= 3.3979... \\cr t &= \\dfrac{ 3.3979... }{ 0.25 } \\cr &\\approx 13.6 \\text{ months} \\end{aligned}<br><br>Now we convert $13.6$ months after 1 September 2020 into a calendar date:<br><br>$t = 0$ is 1 September 2020<br>$t = 12$ is 1 September 2021<br>$t = 13$ is 1 October 2021<br>$t = 14$ is 1 November 2021<br><br>Since $13.6$ falls between $13$ and $14$ months, the platform is estimated to reach $250,000$ users during <strong>October 2021</strong>.",
                        "<strong>(iv) Discussing the model's limitations:</strong><br>An exponential model assumes continuous, unchecked growth. In reality, the number of potential active users is constrained by market saturation, competitor platform entry, and the finite size of the target population. Therefore, the model will overestimate user growth for large values of $t$."
                ],
                "pi_options": [
                        {
                                "ans": "$$a = 100, \\quad k = 0.25, \\quad \\text{Date: November 2021}$$",
                                "feedback": "This option confuses the gradient of the log plot ($m = 0.25$) directly with the growth constant $k$. Remember that the gradient represents $k \\log_{10} 2$, so you must divide the gradient by $\\log_{10} 2$ to find $k$."
                        },
                        {
                                "ans": "$$a = 2, \\quad k = 0.830, \\quad \\text{Date: October 2021}$$",
                                "feedback": "This option fails to take the inverse log of the vertical intercept. Since the vertical intercept is $2.0 = \\log_{10} a$, the initial value is $a = 10^{2.0} = 100$, not $a = 2$."
                        },
                        {
                                "ans": "$$a = 100, \\quad k = 0.830, \\quad \\text{Date: September 2021}$$",
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
                        "<strong>(i) Linearising the power law model:</strong><br>We begin with the power law equation:<br>\\begin{aligned} R &= a M^b \\end{aligned}<br><br>Taking base-$10$ logarithms of both sides:<br>\\begin{aligned} \\log_{10} R &= \\log_{10}(a M^b) \\cr &= \\log_{10} a + \\log_{10}(M^b) \\cr &= b \\log_{10} M + \\log_{10} a \\end{aligned}<br><br>This is in the linear form $Y = mX + c$, where $Y = \\log_{10} R$, $X = \\log_{10} M$, the gradient $m = b$, and the vertical intercept $c = \\log_{10} a$. Since $b$ and $\\log_{10} a$ are constants, the graph of $\\log_{10} R$ against $\\log_{10} M$ is a straight line.",
                        "<strong>(ii) Estimating the constants $a$ and $b$:</strong><br>We are given that the straight line of best fit has a vertical intercept $c = 1.2$ and passes through $(4.0, 4.2)$:<br><br>First, find the gradient $m$:<br>\\begin{aligned} m &= \\dfrac{ 4.2 - 1.2 }{ 4.0 - 0 } \\cr &= \\dfrac{ 3.0 }{ 4.0 } \\cr &= 0.75 \\end{aligned}<br><br>Since $b = m$, we estimate $b = 0.75$.<br><br>Next, we use the vertical intercept to find $a$:<br>\\begin{aligned} \\log_{10} a &= 1.2 \\cr a &= 10^{ 1.2 } \\cr &\\approx 15.8 \\end{aligned}<br><br>Thus, our estimates are $a = 15.8$ (or $15.9$ to $3$ significant figures depending on intermediate rounding) and $b = 0.75$.",
                        "<strong>(iii) Estimating the metabolic rate for $M = 500\\text{ kg}$:</strong><br>We can calculate this directly using our straight-line relationship where $\\log_{10} M = \\log_{10} 500 \\approx 2.6990$:<br>\\begin{aligned} \\log_{10} R &= 0.75 \\log_{10} M + 1.2 \\cr &= 0.75(2.6990...) + 1.2 \\cr &= 2.0242... + 1.2 \\cr &= 3.2242... \\end{aligned}<br><br>Solving for $R$:<br>\\begin{aligned} R &= 10^{ 3.2242... } \\cr &\\approx 1676 \\text{ W} \\end{aligned}<br><br>(Note: If using the rounded formula $R = 15.85 \\times M^{0.75}$, we obtain $R = 15.85 \\times 500^{0.75} \\approx 1676\\text{ W}$. If using the rounded value $a = 15.8$, we get $R = 15.8 \\times 500^{0.75} \\approx 1671\\text{ W}$. Both approaches are structurally sound.)<br><br>Thus, to the nearest watt, the resting metabolic rate is estimated as $1676\\text{ W}$ (or $1671\\text{ W}$).",
                        "<strong>(iv) Explaining biological limitations:</strong><br>Extremely small organisms like single-celled bacteria have highly different surface-area-to-volume ratios, physiology, and thermal properties compared to multicellular mammals. Extrapolating a mammalian-derived metabolic scaling power law down to single-celled structures is biologically invalid because the underlying metabolic mechanisms do not scale uniformly across such vast differences in biological complexity."
                ],
                "pi_options": [
                        {
                                "ans": "$$a = 1.2, \\quad b = 0.75, \\quad R \\approx 127\\text{ W}$$",
                                "feedback": "This option fails to take the inverse log of the vertical intercept. Since $\\log_{10} a = 1.2$, the parameter $a$ must be computed as $10^{1.2} \\approx 15.8$, rather than setting $a$ directly equal to $1.2$."
                        },
                        {
                                "ans": "$$a = 15.8, \\quad b = 1.2, \\quad R \\approx 27,300\\text{ W}$$",
                                "feedback": "This option mistakes the vertical intercept of $1.2$ directly for the exponent $b$. The gradient of the line represents the power constant $b$, which is calculated as $\\dfrac{4.2 - 1.2}{4.0} = 0.75$."
                        },
                        {
                                "ans": "$$a = 15.8, \\quad b = 0.75, \\quad R \\approx 158\\text{ W}$$",
                                "feedback": "This option incorrectly computes $R$ by directly multiplying $a \\times M \\times b$ (i.e. $15.8 \\times 500 \\times 0.75$) instead of evaluating the power law $R = aM^b = 15.8 \\times 500^{0.75}$."
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
                        "<strong>(i) Linearising using natural logarithms:</strong><br>We begin with our exponential decay model:<br>\\begin{aligned} M &= M_0 \\mathrm{e}^{-kt} \\end{aligned}<br><br>Taking the natural logarithm of both sides:<br>\\begin{aligned} \\ln M &= \\ln(M_0 \\mathrm{e}^{-kt}) \\cr &= \\ln M_0 + \\ln(\\mathrm{e}^{-kt}) \\cr &= -kt + \\ln M_0 \\end{aligned}<br><br>Rearranging this into the linear form $y = mx + c$, where $y = \\ln M$ and $x = t$:<br>\\begin{aligned} \\ln M &= (-k)t + \\ln M_0 \\end{aligned}<br><br>Since $-k$ and $\\ln M_0$ are constants, the graph of $\\ln M$ against $t$ is a straight line with a gradient of $-k$ and a vertical intercept of $\\ln M_0$.",
                        "<strong>(ii) Finding estimates of $M_0$ and $k$:</strong><br>We use the given coordinate points $(0, 4.6)$ and $(100, 3.1)$ to find the vertical intercept ($c$) and gradient ($m$):<br><br>Vertical intercept:<br>\\begin{aligned} c &= 4.6 \\end{aligned}<br><br>Gradient:<br>\\begin{aligned} m &= \\dfrac{ 3.1 - 4.6 }{ 100 - 0 } \\cr &= \\dfrac{ -1.5 }{ 100 } \\cr &= -0.015 \\end{aligned}<br><br>Now, map these to our linearised model parameters:<br><br>For $M_0$:<br>\\begin{aligned} \\ln M_0 &= 4.6 \\cr M_0 &= \\mathrm{e}^{ 4.6 } \\cr &\\approx 99.5 \\text{ g} \\end{aligned}<br><br>For $k$:<br>\\begin{aligned} -k &= -0.015 \\cr k &= 0.015 \\end{aligned}<br><br>Thus, our estimates are $M_0 = 99.5\\text{ g}$ (or $100\\text{ g}$ to $3$ significant figures) and $k = 0.015$.",
                        "<strong>(iii) Determining the half-life:</strong><br>The half-life, $T$, is the time taken for $M$ to reduce to $\\dfrac{ 1 }{ 2 } M_0$. Substituting this into the model:<br>\\begin{aligned} \\dfrac{ 1 }{ 2 } M_0 &= M_0 \\mathrm{e}^{-0.015T} \\cr \\dfrac{ 1 }{ 2 } &= \\mathrm{e}^{-0.015T} \\end{aligned}<br><br>Taking the natural logarithm of both sides:<br>\\begin{aligned} \\ln\\left(\\dfrac{ 1 }{ 2 }\\right) &= -0.015T \\cr -\\ln 2 &= -0.015T \\cr T &= \\dfrac{ \\ln 2 }{ 0.015 } \\cr &\\approx 46.2 \\text{ years} \\end{aligned}<br><br>To the nearest year, the half-life of the isotope is $46\\text{ years}$.",
                        "<strong>(iv) Identifying limitations in the long run:</strong><br>A continuous exponential decay model predicts that the remaining mass will approach zero asymptotically but will never actually reach it. In reality, radioactive decay is a discrete, probabilistic process consisting of individual atomic nuclei. Once only a small number of atoms remain, a continuous deterministic model breaks down and cannot accurately predict the exact time of the final decays."
                ],
                "pi_options": [
                        {
                                "ans": "$$M_0 = 4.6\\text{ g}, \\quad k = 0.015, \\quad \\text{Half-life} \\approx 46\\text{ years}$$",
                                "feedback": "This option fails to take the inverse natural log of the vertical intercept. Since $\\ln M_0 = 4.6$, you must calculate $M_0 = \\mathrm{e}^{4.6} \\approx 99.5\\text{ g}$."
                        },
                        {
                                "ans": "$$M_0 = 99.5\\text{ g}, \\quad k = -0.015, \\quad \\text{Half-life} \\approx 46\\text{ years}$$",
                                "feedback": "The decay constant $k$ must be a positive parameter. Since the gradient of the log plot is $-0.015 = -k$, we have $k = 0.015$. A negative value for $k$ would represent exponential growth instead of decay."
                        },
                        {
                                "ans": "$$M_0 = 99.5\\text{ g}, \\quad k = 0.015, \\quad \\text{Half-life} \\approx 20\\text{ years}$$",
                                "feedback": "The half-life calculation is incorrect. Ensure you set up the equation as $\\mathrm{e}^{-kT} = 0.5$, which yields $T = \\dfrac{\\ln 2}{k} = \\dfrac{\\ln 2}{0.015} \\approx 46\\text{ years}$, rather than dividing by a different factor."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Half-Life Constant",
                        "content": "For any simple exponential decay model of the form $y = y_0 \\mathrm{e}^{-kt}$, the half-life $T$ is completely independent of the starting amount $y_0$. It will always simplify down to the incredibly clean and useful formula: $T = \\dfrac{ \\ln 2 }{ k }$. Memorising this relation can save you valuable steps during exams!"
                }
        },
        {
                "id": "004634",
                "board": "OCR MEI",
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
                        "<strong>(i) Showing linearisation:</strong><br>We begin with our exponential population model:<br>\\begin{aligned} P &= A b^t \\end{aligned}<br><br>Taking the base-$10$ logarithm of both sides:<br>\\begin{aligned} \\log_{10} P &= \\log_{10}(A b^t) \\cr &= \\log_{10} A + \\log_{10}(b^t) \\cr &= (\\log_{10} b)t + \\log_{10} A \\end{aligned}<br><br>This is in the linear form $y = mx + c$, where $y = \\log_{10} P$ and $x = t$. The constant gradient is $m = \\log_{10} b$ and the vertical intercept is $c = \\log_{10} A$. Thus, the graph of $\\log_{10} P$ against $t$ is a straight line.",
                        "<strong>(ii) Finding estimates for $A$ and $b$:</strong><br>We calculate the gradient ($m$) of the line of best fit passing through $(1, 2.5)$ and $(5, 3.7)$:<br>\\begin{aligned} m &= \\dfrac{ 3.7 - 2.5 }{ 5 - 1 } \\cr &= \\dfrac{ 1.2 }{ 4 } \\cr &= 0.3 \\end{aligned}<br><br>Since $m = \\log_{10} b$, we have:<br>\\begin{aligned} \\log_{10} b &= 0.3 \\cr b &= 10^{ 0.3 } \\cr &\\approx 2.00 \\end{aligned}<br><br>Now we use one of our points, say $(1, 2.5)$, to find the vertical intercept $c = \\log_{10} A$:<br>\\begin{aligned} \\log_{10} P &= 0.3t + \\log_{10} A \\cr 2.5 &= 0.3(1) + \\log_{10} A \\cr \\log_{10} A &= 2.2 \\end{aligned}<br><br>Solving for $A$:<br>\\begin{aligned} A &= 10^{ 2.2 } \\cr &\\approx 158 \\end{aligned}<br><br>Thus, to $3$ significant figures, our estimates are $A = 158$ and $b = 2.00$.",
                        "<strong>(iii) Estimating the population after $10$ hours:</strong><br>We can substitute $t = 10$ directly into our linear equation $\\log_{10} P = 0.3t + 2.2$:<br>\\begin{aligned} \\log_{10} P &= 0.3(10) + 2.2 \\cr &= 3 + 2.2 \\cr &= 5.2 \\end{aligned}<br><br>Solving for $P$:<br>\\begin{aligned} P &= 10^{ 5.2 } \\cr &\\approx 158,489 \\end{aligned}<br><br>(Alternatively, substituting our rounded parameters $A = 158.49$ and $b = 1.995$ into $P = Ab^t$ gives $P = 158.49 \\times 1.995^{10} \\approx 158,000$. If using the fully rounded parameter model $P = 158 \\times 2^{10}$, we obtain $161,792 \\approx 162,000$. Both methods of calculation are chemically and mathematically valid depending on where rounding is executed.)<br><br>Rounding to the nearest thousand, we estimate the population to be $158,000$ (or $162,000$).",
                        "<strong>(iv) Describing biological failures:</strong><br>An exponential growth model assumes infinite resources. In a real laboratory experiment, as the bacteria population grows, resources (such as nutrients, space, and oxygen) become exhausted, and toxic metabolic waste products accumulate. This limits and eventually halts population growth, meaning the model fails for large values of $t$."
                ],
                "pi_options": [
                        {
                                "ans": "$$A = 2.2, \\quad b = 0.3, \\quad P \\approx 15,800$$",
                                "feedback": "This option fails to take the inverse base-10 log of both parameters. You must calculate $A = 10^{2.2} \\approx 158$ and $b = 10^{0.3} \\approx 2.00$, rather than treating the intercept and gradient directly as the base constants."
                        },
                        {
                                "ans": "$$A = 158, \\quad b = 2.00, \\quad P \\approx 3,160$$",
                                "feedback": "This option incorrectly computes $P$ after $10$ hours as $A \\times b \\times t$ (i.e. $158 \\times 2 \\times 10 = 3160$) instead of applying the exponent: $P = Ab^t = 158 \\times 2^{10} = 161,792$."
                        },
                        {
                                "ans": "$$A = 158, \\quad b = 2.00, \\quad P \\approx 15,800,000$$",
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
                "level": "A",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning.<br><br>The temperature, $\\theta$ (in $^\\circ\\text{C}$), of a hot metal component cooling in a laboratory where the ambient room temperature is $20^\\circ\\text{C}$ is modelled by $\\theta = 20 + A \\mathrm{e}^{-kt}$, where $t$ is the time in minutes after cooling begins, and $A$ and $k$ are constants.<br><br><strong>(i)</strong> Show that the relationship can be written in the form $\\ln(\theta - 20) = mt + c$, where $m$ and $c$ are constants to be stated in terms of $A$ and $k$.<br><strong>(ii)</strong> A plot of $\\ln(\theta - 20)$ against $t$ yields a straight line of best fit with a vertical intercept of $4.0$ and a gradient of $-0.08$. Find the exact value of $k$ and the value of $A$ to $3$ significant figures.<br><strong>(iii)</strong> Estimate the temperature of the metal component after $15$ minutes of cooling, giving your answer to the nearest degree.<br><strong>(iv)</strong> State the long-term temperature predicted by this model, and comment on whether this prediction is realistic in a physical context.",
                "steps": [
                        "<strong>(i) Rearranging and taking logarithms:</strong><br>We begin with the cooling equation:<br>\\begin{aligned} \\theta &= 20 + A \\mathrm{e}^{-kt} \\end{aligned}<br><br>To isolate the exponential term, we subtract $20$ from both sides:<br>\\begin{aligned} \\theta - 20 &= A \\mathrm{e}^{-kt} \\end{aligned}<br><br>Now, taking the natural logarithm of both sides:<br>\\begin{aligned} \\ln(\\theta - 20) &= \\ln(A \\mathrm{e}^{-kt}) \\cr &= \\ln A + \\ln(\\mathrm{e}^{-kt}) \\cr &= -kt + \\ln A \\end{aligned}<br><br>This is in the requested form $\\ln(\theta - 20) = mt + c$, where the constants are $m = -k$ and $c = \\ln A$.",
                        "<strong>(ii) Determining $A$ and $k$:</strong><br>We are given that the line of best fit has a vertical intercept $c = 4.0$ and a gradient $m = -0.08$.<br><br>Using our linear relationship $m = -k$:<br>\\begin{aligned} -k &= -0.08 \\cr k &= 0.08 \\end{aligned}<br><br>Using our relationship for the vertical intercept $c = \\ln A$:<br>\\begin{aligned} \\ln A &= 4.0 \\cr A &= \\mathrm{e}^{ 4.0 } \\cr &\\approx 54.6 \\end{aligned}<br><br>Thus, the exact value of $k = 0.08$ and the value of $A = 54.6$ (to $3$ significant figures).",
                        "<strong>(iii) Estimating temperature after $15$ minutes:</strong><br>Substituting $t = 15$, along with our parameters, into our original cooling model equation:<br>\\begin{aligned} \\theta &= 20 + 54.598... \\mathrm{e}^{-0.08(15)} \\cr &= 20 + 54.598... \\mathrm{e}^{-1.2} \\cr &\\approx 20 + 54.598...(0.30119...) \\cr &\\approx 20 + 16.444 \\cr &\\approx 36.44^\\circ\\text{C} \\end{aligned}<br><br>Rounding to the nearest degree, the estimated temperature after $15$ minutes is $36^\\circ\\text{C}$.",
                        "<strong>(iv) Analyzing long-term predictions:</strong><br>As $t \\to \\infty$, the exponential term $\\mathrm{e}^{-0.08t} \\to 0$.<br><br>Substituting this limit into the temperature model:<br>\\begin{aligned} \\theta \\to 20 + A(0) \\implies \\theta \\to 20^\\circ\\text{C} \\end{aligned}<br><br>This prediction is highly realistic in a physical context, as any hot object left to cool in a room will eventually reach thermal equilibrium with its surrounding environment, meaning its temperature will settle at the ambient room temperature of $20^\\circ\\text{C}$."
                ],
                "pi_options": [
                        {
                                "ans": "$$A = 4.0, \\quad k = 0.08, \\quad \\text{Temperature} \\approx 21^\\circ\\text{C}$$",
                                "feedback": "This option fails to take the inverse natural log of the vertical intercept. Since $\\ln A = 4.0$, you must calculate $A = \\mathrm{e}^{4.0} \\approx 54.6$, rather than equating $A$ directly to the intercept."
                        },
                        {
                                "ans": "$$A = 54.6, \\quad k = -0.08, \\quad \\text{Temperature} \\approx 201^\\circ\\text{C}$$",
                                "feedback": "This option incorrectly sets $k$ as a negative value. Because the gradient of the log plot is negative ($m = -0.08 = -k$), the constant $k$ is positive ($k = 0.08$). A negative value of $k$ would model heat explosion (unbounded growth) instead of cooling."
                        },
                        {
                                "ans": "$$A = 54.6, \\quad k = 0.08, \\quad \\text{Temperature} \\approx 16^\\circ\\text{C}$$",
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
                "level": "A",
                "major_area": "Sequences and Series",
                "topic": "Binomial Expansion",
                "subtopic": [
                        "Linear Equations"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning.<br><br>Find the constant term in the binomial expansion of $\\left(x^3 + \\dfrac{ 1 }{ x }\\right)^{12}$.",
                "steps": [
                        "<strong>Step 1: Write down the general term of the expansion:</strong><br>The general term in the binomial expansion of $(a + b)^n$ is given by $T_{r+1} = \\binom{ n }{ r } a^{n-r} b^r$.<br><br>For the expansion of $\\left(x^3 + \\dfrac{ 1 }{ x }\\right)^{12}$, we substitute $a = x^3$, $b = x^{-1}$, and $n = 12$:<br>\\begin{aligned} T_{r+1} &= \\binom{ 12 }{ r } (x^3)^{12 - r} \\left(x^{-1}\\right)^r \\cr &= \\binom{ 12 }{ r } x^{3(12 - r)} x^{-r} \\cr &= \\binom{ 12 }{ r } x^{36 - 3r - r} \\cr &= \\binom{ 12 }{ r } x^{36 - 4r} \\end{aligned}",
                        "<strong>Step 2: Solve for $r$ to find the constant term:</strong><br>The constant term corresponds to the term where the exponent of $x$ is equal to $0$:<br>\\begin{aligned} 36 - 4r &= 0 \\cr 4r &= 36 \\cr r &= 9 \\end{aligned}",
                        "<strong>Step 3: Calculate the constant term:</strong><br>Substitute $r = 9$ back into our general term formula:<br>\\begin{aligned} T_{10} &= \\binom{ 12 }{ 9 } x^0 \\cr &= \\binom{ 12 }{ 3 } \\cr &= \\dfrac{ 12 \\times 11 \\times 10 }{ 3 \\times 2 \\times 1 } \\cr &= 220 \\end{aligned}<br><br>Thus, the constant term in the expansion is $220$."
                ],
                "pi_options": [
                        {
                                "ans": "$$495$$",
                                "feedback": "This option results from using the wrong value of $r$. If you incorrectly set $3(12-r) - r = 36 - 2r = 0$, you would get $r = 18$ (which is outside the expansion range) or if you used $36-3r=0 \\implies r=12$ which gives $\\binom{12}{12}=1$, or if you chose $\\binom{12}{4} = 495$, which corresponds to $r = 4$."
                        },
                        {
                                "ans": "$$792$$",
                                "feedback": "This option is equal to $\\binom{12}{5}$ or $\\binom{12}{7}$, which corresponds to setting $r = 5$ or $r = 7$. Check your exponent equation $36 - 4r = 0$ to ensure you solve for $r = 9$."
                        },
                        {
                                "ans": "$$12$$",
                                "feedback": "This option is equal to $\\binom{12}{1}$ or $\\binom{12}{11}$, which occurs if you incorrectly simplify the exponent of $x$ or guess the index."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Power Laws and Fractions",
                        "content": "When expanding expressions like $\\left(x^3 + \\dfrac{ 1 }{ x }\\right)^{12}$, don't forget to write $\\dfrac{ 1 }{ x }$ as $x^{-1}$. If you make a mistake with index laws and write $\\dfrac{ 1 }{ x }$ as $x$ or $x^1$, you will get the incorrect exponent equation for the constant term."
                }
        },
        {
                "id": "004637",
                "board": "OCR MEI",
                "level": "A",
                "major_area": "Sequences and Series",
                "topic": "Binomial Expansion",
                "subtopic": [
                        "Linear Equations"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning.<br><br>Find the constant term in the binomial expansion of $\\left(2x^2 - \\dfrac{ 3 }{ x }\\right)^9$.",
                "steps": [
                        "<strong>Step 1: Write down the general term of the expansion:</strong><br>Using the binomial general term formula $T_{r+1} = \\binom{ n }{ r } a^{n-r} b^r$ with $a = 2x^2$, $b = -3x^{-1}$, and $n = 9$:<br>\\begin{aligned} T_{r+1} &= \\binom{ 9 }{ r } (2x^2)^{9 - r} \\left(-3x^{-1}\\right)^r \\cr &= \\binom{ 9 }{ r } 2^{9 - r} (x^2)^{9 - r} (-3)^r (x^{-1})^r \\cr &= \\binom{ 9 }{ r } 2^{9 - r} (-3)^r x^{2(9 - r)} x^{-r} \\cr &= \\binom{ 9 }{ r } 2^{9 - r} (-3)^r x^{18 - 2r - r} \\cr &= \\binom{ 9 }{ r } 2^{9 - r} (-3)^r x^{18 - 3r} \\end{aligned}",
                        "<strong>Step 2: Solve for $r$ to isolate the constant term:</strong><br>The constant term is the term where the power of $x$ is equal to $0$:<br>\\begin{aligned} 18 - 3r &= 0 \\cr 3r &= 18 \\cr r &= 6 \\end{aligned}",
                        "<strong>Step 3: Calculate the constant term:</strong><br>Substitute $r = 6$ back into our general term expression:<br>\\begin{aligned} T_{7} &= \\binom{ 9 }{ 6 } 2^{9 - 6} (-3)^6 x^0 \\cr &= \\binom{ 9 }{ 3 } 2^3 (-3)^6 \\cr &= \\dfrac{ 9 \\times 8 \\times 7 }{ 3 \\times 2 \\times 1 } \\times 8 \\times 729 \\cr &= 84 \\times 8 \\times 729 \\cr &= 672 \\times 729 \\cr &= 489,888 \\end{aligned}<br><br>Thus, the constant term in the expansion is $489,888$."
                ],
                "pi_options": [
                        {
                                "ans": "$$-489,888$$",
                                "feedback": "This option is incorrect because of a sign error. Note that $(-3)^6 = 729$, which is positive because raising any real number (including a negative one) to an even power yields a positive result. Always be careful when tracking signs!"
                        },
                        {
                                "ans": "$$61,236$$",
                                "feedback": "This option arises if you forget to apply the power of $2^{9-r} = 2^3 = 8$ to the coefficient, calculating $84 \\times 729 = 61,236$ instead of $84 \\times 8 \\times 729$."
                        },
                        {
                                "ans": "$$5,376$$",
                                "feedback": "This option occurs if you forget to raise the constant $-3$ to the power of $r = 6$, calculating $\\binom{9}{6} 2^3 (-3)^1 = 84 \\times 8 \\times (-3) = -2016$, or forgetting to apply $(-3)^6$ entirely."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Negative Terms inside Brackets",
                        "content": "When dealing with negative terms like $-\\dfrac{ 3 }{ x }$, make sure to carry the negative sign with the coefficient inside the general term: $\\left(-\\dfrac{ 3 }{ x }\\right)^r = (-3)^r x^{-r}$. Omitting the negative sign or applying the power $r$ incorrectly to only the variable is the most common cause of lost marks on binomial expansion questions."
                }
        },
        {
                "id": "004638",
                "board": "OCR MEI",
                "level": "A",
                "major_area": "Sequences and Series",
                "topic": "Binomial Expansion",
                "subtopic": [
                        "Linear Equations"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning.<br><br>Find the coefficient of $x^3$ in the binomial expansion of $\\left(2x - \\dfrac{ 1 }{ x^2 }\\right)^9$.",
                "steps": [
                        "<strong>Step 1: Write down the general term of the expansion:</strong><br>Using the binomial general term formula $T_{r+1} = \\binom{ n }{ r } a^{n-r} b^r$ with $a = 2x$, $b = -x^{-2}$, and $n = 9$:<br>\\begin{aligned} T_{r+1} &= \\binom{ 9 }{ r } (2x)^{9 - r} \\left(-x^{-2}\\right)^r \\cr &= \\binom{ 9 }{ r } 2^{9 - r} x^{9 - r} (-1)^r (x^{-2})^r \\cr &= \\binom{ 9 }{ r } 2^{9 - r} (-1)^r x^{9 - r} x^{-2r} \\cr &= \\binom{ 9 }{ r } 2^{9 - r} (-1)^r x^{9 - 3r} \\end{aligned}",
                        "<strong>Step 2: Solve for $r$ to find the term in $x^3$:</strong><br>We want the power of $x$ to equal $3$, so we set the exponent to $3$:<br>\\begin{aligned} 9 - 3r &= 3 \\cr 3r &= 6 \\cr r &= 2 \\end{aligned}",
                        "<strong>Step 3: Calculate the coefficient:</strong><br>Substitute $r = 2$ back into the general term expression:<br>\\begin{aligned} T_{3} &= \\binom{ 9 }{ 2 } 2^{9 - 2} (-1)^2 x^3 \\cr &= \\binom{ 9 }{ 2 } 2^7 (1) x^3 \\cr &= 36 \\times 128 \\times x^3 \\cr &= 4608x^3 \\end{aligned}<br><br>Thus, the coefficient of $x^3$ is $4608$."
                ],
                "pi_options": [
                        {
                                "ans": "$$-4608$$",
                                "feedback": "This option has a sign error. Since $r = 2$, the negative sign from the second term is raised to an even power: $(-1)^2 = 1$. The final coefficient must be positive."
                        },
                        {
                                "ans": "$$1152$$",
                                "feedback": "This option is equal to $\\binom{9}{2} 2^5 = 36 \\times 32$, which happens if you calculate the exponent of $2^{9-r}$ incorrectly as $2^5$ instead of $2^7$."
                        },
                        {
                                "ans": "$$576$$",
                                "feedback": "This option is equal to $\\binom{9}{2} 2^4 = 36 \\times 16$, which results from a arithmetic slip on the power of $2$ or a slip in simplifying $9-r$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: General Term Shortcut",
                        "content": "Instead of writing out the entire expansion to find a single term, always use the general term formula $T_{r+1} = \\binom{ n }{ r } a^{n-r} b^r$. This isolates the exponent of $x$ immediately and lets you solve a simple linear equation to find the exact value of $r$ without cluttering your workspace."
                }
        },
        {
                "id": "004639",
                "board": "OCR MEI",
                "level": "A",
                "major_area": "Sequences and Series",
                "topic": "Binomial Expansion",
                "subtopic": [
                        "Algebraic Methods"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning.<br><br>Find the coefficient of $x^2$ in the expansion of $(1 + 3x)(2 - x)^6$.",
                "steps": [
                        "<strong>Step 1: Write out the terms of $(2 - x)^6$ up to $x^2$:</strong><br>We only need the terms of the expansion $(2 - x)^6$ that can contribute to an $x^2$ term when multiplied by $(1 + 3x)$. These are the constant, $x$, and $x^2$ terms.<br><br>Using the binomial theorem:<br>\\begin{aligned} (2 - x)^6 &= \\binom{ 6 }{ 0 } 2^6 (-x)^0 + \\binom{ 6 }{ 1 } 2^5 (-x)^1 + \\binom{ 6 }{ 2 } 2^4 (-x)^2 + \\dots \\cr &= 1 \\times 64 \\times 1 + 6 \\times 32 \\times (-x) + 15 \\times 16 \\times x^2 + \\dots \\cr &= 64 - 192x + 240x^2 + \\dots \\end{aligned}",
                        "<strong>Step 2: Multiply the relevant terms by $(1 + 3x)$:</strong><br>Now we expand $(1 + 3x)(64 - 192x + 240x^2 + \\dots)$ and collect only the terms containing $x^2$:<br>\\begin{aligned} \\text{Term in } x^2 &= 1 \\times (240x^2) + 3x \\times (-192x) \\cr &= 240x^2 - 576x^2 \\cr &= (240 - 576)x^2 \\cr &= -336x^2 \\end{aligned}<br><br>Thus, the coefficient of $x^2$ in the expansion is $-336$."
                ],
                "pi_options": [
                        {
                                "ans": "$$816$$",
                                "feedback": "This option is equal to $240 + 576$. This results from a sign error when expanding $(2-x)^6$. Since the term is $(-x)^1$, the linear term coefficient is negative ($-192$), so multiplying it by $3x$ yields a negative term: $-576x^2$."
                        },
                        {
                                "ans": "$$240$$",
                                "feedback": "This option is simply the coefficient of $x^2$ inside the standalone expansion of $(2-x)^6$. You must multiply the entire expression by $(1+3x)$ and combine the terms to get the final coefficient of the product."
                        },
                        {
                                "ans": "$$-332$$",
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
                "level": "A",
                "major_area": "Sequences and Series",
                "topic": "Binomial Expansion",
                "subtopic": [
                        "Linear Equations"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning.<br><br>In the binomial expansion of $(1 + kx)^n$, where $n$ is a positive integer and $k$ is a non-zero constant, the coefficient of $x$ is $-30$ and the coefficient of $x^2$ is $400$.<br><br>Determine the value of $n$ and the value of $k$.",
                "steps": [
                        "<strong>Step 1: Express the coefficients in terms of $n$ and $k$:</strong><br>Using the binomial expansion of $(1 + kx)^n$:<br>\\begin{aligned} (1 + kx)^n &= 1 + \\binom{ n }{ 1 } (kx) + \\binom{ n }{ 2 } (kx)^2 + \\dots \\cr &= 1 + nkx + \\dfrac{ n(n - 1) }{ 2 } k^2 x^2 + \\dots \\end{aligned}<br><br>We are given:<br>1) The coefficient of $x$ is $-30$:<br>\\begin{aligned} nk &= -30 \\end{aligned}<br><br>2) The coefficient of $x^2$ is $400$:<br>\\begin{aligned} \\dfrac{ n(n - 1) k^2 }{ 2 } &= 400 \\end{aligned}",
                        "<strong>Step 2: Set up a simultaneous equation:</strong><br>From the first equation, we can express $k$ in terms of $n$:<br>\\begin{aligned} k &= -\\dfrac{ 30 }{ n } \\end{aligned}<br><br>Substitute this expression for $k$ into our second equation:<br>\\begin{aligned} \\dfrac{ n(n - 1) }{ 2 } \\left(-\\dfrac{ 30 }{ n }\\right)^2 &= 400 \\cr \\dfrac{ n(n - 1) }{ 2 } \\left(\\dfrac{ 900 }{ n^2 }\\right) &= 400 \\cr \\dfrac{ 900 n(n - 1) }{ 2 n^2 } &= 400 \\cr \\dfrac{ 450 (n - 1) }{ n } &= 400 \\end{aligned}",
                        "<strong>Step 3: Solve for $n$:</strong><br>Multiply both sides by $n$ and solve the linear equation:<br>\\begin{aligned} 450(n - 1) &= 400n \\cr 450n - 450 &= 400n \\cr 50n &= 450 \\cr n &= 9 \\end{aligned}",
                        "<strong>Step 4: Solve for $k$:</strong><br>Now, substitute $n = 9$ back into the expression for $k$:<br>\\begin{aligned} k &= -\\dfrac{ 30 }{ 9 } \\cr &= -\\dfrac{ 10 }{ 3 } \\end{aligned}<br><br>Thus, the values are $n = 9$ and $k = -\\dfrac{ 10 }{ 3 }$."
                ],
                "pi_options": [
                        {
                                "ans": "$$n = 9, \\quad k = -30$$",
                                "feedback": "This option arises if you solve for $n = 9$ but then incorrectly assume $k$ is equal to the linear coefficient itself ($-30$), forgetting that the coefficient of $x$ is the product $nk = -30$."
                        },
                        {
                                "ans": "$$n = 8, \\quad k = -\\dfrac{ 15 }{ 4 }$$",
                                "feedback": "This option is caused by an algebraic error when substituting $k = -\\dfrac{30}{n}$ into the $x^2$ coefficient equation, such as failing to square the numerator: $\\left(-\\dfrac{30}{n}\\right)^2 = \\dfrac{900}{n^2}$."
                        },
                        {
                                "ans": "$$n = 9, \\quad k = \\dfrac{ 10 }{ 3 }$$",
                                "feedback": "This option has a sign error on $k$. Since the coefficient of $x$ is $-30$ and $n = 9$ is a positive integer, $nk = -30$ requires $k = -\\dfrac{30}{9} = -\\dfrac{10}{3}$. A positive $k$ would give a positive coefficient for $x$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Exponents of Constants",
                        "content": "When expanding $(1 + kx)^n$, the coefficient of $x^2$ is $\\dfrac{ n(n - 1) }{ 2 } k^2$, not $\\dfrac{ n(n - 1) }{ 2 } k$. A very common student slip is forgetting to square the constant $k$ when squaring the term $(kx)^2$. Always double check that constants inside your variable terms are raised to the same power as the variable!"
                }
        },
        {
                "id": "004641",
                "board": "OCR MEI",
                "level": "A",
                "major_area": "Coordinate Geometry",
                "topic": "Straight Lines",
                "subtopic": [
                        "Intersections of Lines and Curves"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning.<br><br>The line $y = 3 - kx$ crosses the curve $y = 4x - x^2$ on the $x$-axis and at one other point.<br><br>Determine the value of the constant $k$ and the coordinates of this other point.",
                "steps": [
                        "<strong>Step 1: Find where the curve crosses the $x$-axis:</strong><br>The curve crosses the $x$-axis where $y = 0$. We find these points by setting the curve equation to $0$ and solving for $x$:<br>\\begin{aligned} 4x - x^2 &= 0 \\cr x(4 - x) &= 0 \\end{aligned}<br><br>This gives two possible crossing points on the $x$-axis:<br>\\begin{aligned} x = 0 \\quad \\text{and} \\quad x = 4 \\end{aligned}<br><br>So the curve crosses the $x$-axis at $(0, 0)$ and $(4, 0)$..",
                        "<strong>Step 2: Determine which $x$-axis crossing point the line passes through:</strong><br>The line $y = 3 - kx$ must also pass through one of these two $x$-axis crossing points ($y = 0$). Let's test both coordinates:<br><br>If the line passes through $(0, 0)$:<br>\\begin{aligned} 0 &= 3 - k(0) \\cr 0 &= 3 \\end{aligned}<br>This is an impossible statement, so the line cannot pass through $(0, 0)$.<br><br>Therefore, the line must pass through $(4, 0)$. We substitute $x = 4$ and $y = 0$ into the line equation to find $k$:<br>\\begin{aligned} 0 &= 3 - 4k \\cr 4k &= 3 \\cr k &= \\dfrac{ 3 }{ 4 } \\end{aligned}",
                        "<strong>Step 3: Solve for the other point of intersection:</strong><br>Now we substitute $k = \\dfrac{ 3 }{ 4 }$ back into the line equation and set it equal to the curve to find the intersection points:<br>\\begin{aligned} 4x - x^2 &= 3 - \\dfrac{ 3 }{ 4 }x \\cr 16x - 4x^2 &= 12 - 3x \\cr 4x^2 - 19x + 12 &= 0 \\end{aligned}<br><br>Since we already know that $(4, 0)$ is a point of intersection, $x = 4$ must be a root of this quadratic equation. We can factorise the quadratic immediately:<br>\\begin{aligned} (x - 4)(4x - 3) &= 0 \\end{aligned}<br><br>This gives the roots $x = 4$ and $x = \\dfrac{ 3 }{ 4 }$. Thus, the $x$-coordinate of the other point of intersection is $x = \\dfrac{ 3 }{ 4 }$.",
                        "<strong>Step 4: Find the $y$-coordinate of the other point:</strong><br>Substitute $x = \\dfrac{ 3 }{ 4 }$ into the line equation to find the corresponding $y$-coordinate:<br>\\begin{aligned} y &= 3 - \\dfrac{ 3 }{ 4 }\\left(\\dfrac{ 3 }{ 4 }\\right) \\cr &= 3 - \\dfrac{ 9 }{ 16 } \\cr &= \\dfrac{ 39 }{ 16 } \\end{aligned}<br><br>Thus, the coordinates of the other point of intersection are $\\left(\\dfrac{ 3 }{ 4 }, \\dfrac{ 39 }{ 16 }\\right)$."
                ],
                "pi_options": [
                        {
                                "ans": "$$k = \\dfrac{ 3 }{ 4 }, \\quad \\text{other point } (4, 0)$$",
                                "feedback": "This option lists $(4, 0)$ as the other point of intersection. Remember that $(4, 0)$ is the point on the $x$-axis where the line and curve first cross; the question asks for the other point of intersection, which is $\\left(\\dfrac{3}{4}, \\dfrac{39}{16}\\right)$."
                        },
                        {
                                "ans": "$$k = 0, \\quad \\text{other point } (3, 3)$$",
                                "feedback": "This option arises if you incorrectly solve the $x$-axis crossing condition using the point $(0,0)$, which yields the impossible equation $0 = 3$. This case must be rejected."
                        },
                        {
                                "ans": "$$k = \\dfrac{ 3 }{ 4 }, \\quad \\text{other point } \\left(\\dfrac{ 3 }{ 4 }, -\\dfrac{ 9 }{ 16 }\\right)$$",
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
                "level": "A",
                "major_area": "Coordinate Geometry",
                "topic": "Straight Lines",
                "subtopic": [
                        "Intersections of Lines and Curves"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning.<br><br>The line $y = kx - 6$ crosses the curve $y = x^2 - 3x$ on the $x$-axis and at one other point.<br><br>Determine the value of the constant $k$ and the coordinates of this other point.",
                "steps": [
                        "<strong>Step 1: Find where the curve crosses the $x$-axis:</strong><br>The curve crosses the $x$-axis where $y = 0$. Setting the curve equation to $0$ and factorising:<br>\\begin{aligned} x^2 - 3x &= 0 \\cr x(x - 3) &= 0 \\end{aligned}<br><br>This gives the crossing coordinates $(0, 0)$ and $(3, 0)$..",
                        "<strong>Step 2: Determine which crossing point the line passes through:</strong><br>The line $y = kx - 6$ crosses on the $x$-axis, so it must pass through $(0, 0)$ or $(3, 0)$ where $y = 0$. Let's test both points:<br><br>If the line passes through $(0, 0)$:<br>\\begin{aligned} 0 &= k(0) - 6 \\cr 0 &= -6 \\end{aligned}<br>This is impossible, so the line cannot pass through $(0, 0)$.<br><br>Therefore, the line must pass through $(3, 0)$. Substituting $x = 3$ and $y = 0$ into the line equation:<br>\\begin{aligned} 0 &= 3k - 6 \\cr 3k &= 6 \\cr k &= 2 \\end{aligned}",
                        "<strong>Step 3: Solve for the other point of intersection:</strong><br>Now, substitute $k = 2$ back into the line equation and equate it to the curve:<br>\\begin{aligned} x^2 - 3x &= 2x - 6 \\cr x^2 - 5x + 6 &= 0 \\end{aligned}<br><br>Since we know $x = 3$ is one of the roots of intersection, we can factorise this immediately:<br>\\begin{aligned} (x - 3)(x - 2) &= 0 \\end{aligned}<br><br>This yields the roots $x = 3$ and $x = 2$. The other point of intersection has $x$-coordinate $x = 2$.",
                        "<strong>Step 4: Find the $y$-coordinate of the other point:</strong><br>Substitute $x = 2$ back into the line equation $y = 2x - 6$:<br>\\begin{aligned} y &= 2(2) - 6 \\cr &= -2 \\end{aligned}<br><br>Thus, the coordinates of the other point of intersection are $(2, -2)$."
                ],
                "pi_options": [
                        {
                                "ans": "$$k = 2, \\quad \\text{other point } (3, 0)$$",
                                "feedback": "This option lists $(3, 0)$ as the other point of intersection. Note that $(3, 0)$ is the point on the $x$-axis where the curve and line first cross; the question asks for the other point of intersection, which is $(2, -2)$."
                        },
                        {
                                "ans": "$$k = 2, \\quad \\text{other point } (2, 2)$$",
                                "feedback": "This option has a sign error in calculating the $y$-coordinate. Substituting $x = 2$ into the line $y = 2x - 6$ yields $y = 4 - 6 = -2$, not $+2$."
                        },
                        {
                                "ans": "$$k = -2, \\quad \\text{other point } (-2, -2)$$",
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
                "level": "A",
                "major_area": "Coordinate Geometry",
                "topic": "Straight Lines",
                "subtopic": [
                        "Positive Axis Intersection"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning.<br><br>The line $y = kx + 15$ crosses the curve $y = 9 - x^2$ on the positive $x$-axis and at one other point.<br><br>Determine the value of the constant $k$ and the coordinates of this other point.",
                "steps": [
                        "<strong>Step 1: Find the positive $x$-axis crossing point of the curve:</strong><br>The curve crosses the $x$-axis where $y = 0$. Setting the curve equation to $0$ and solving for $x$:<br>\\begin{aligned} 9 - x^2 &= 0 \\cr x^2 &= 9 \\cr x &= \\pm 3 \\end{aligned}<br><br>Since the question specifies the crossing occurs on the <strong>positive</strong> $x$-axis, we select $x = 3$. This gives the crossing point $(3, 0)$..",
                        "<strong>Step 2: Determine the value of $k$:</strong><br>The line $y = kx + 15$ must also pass through $(3, 0)$. Substituting $x = 3$ and $y = 0$ into the line equation:<br>\\begin{aligned} 0 &= 3k + 15 \\cr 3k &= -15 \\cr k &= -5 \\end{aligned}",
                        "<strong>Step 3: Solve for the other point of intersection:</strong><br>Substitute $k = -5$ back into the line equation and set it equal to the curve:<br>\\begin{aligned} 9 - x^2 &= -5x + 15 \\cr x^2 - 5x + 6 &= 0 \\end{aligned}<br><br>Since we know $x = 3$ is one of the roots of intersection, we factorise the quadratic equation immediately:<br>\\begin{aligned} (x - 3)(x - 2) &= 0 \\end{aligned}<br><br>This yields the roots $x = 3$ and $x = 2$. The other point of intersection has $x$-coordinate $x = 2$.",
                        "<strong>Step 4: Find the $y$-coordinate of the other point:</strong><br>Substitute $x = 2$ back into the line equation $y = -5x + 15$:<br>\\begin{aligned} y &= -5(2) + 15 \\cr &= 5 \\end{aligned}<br><br>Thus, the coordinates of the other point of intersection are $(2, 5)$."
                ],
                "pi_options": [
                        {
                                "ans": "$$k = 5, \\quad \\text{other point } (-2, 5)$$",
                                "feedback": "This option results from using the negative crossing point $(-3, 0)$ instead of the positive one. The question explicitly states the crossing occurs on the positive $x$-axis, which requires selecting $(3, 0)$ and finding $k = -5$."
                        },
                        {
                                "ans": "$$k = -5, \\quad \\text{other point } (3, 0)$$",
                                "feedback": "This option lists $(3, 0)$ as the other point of intersection. Note that $(3, 0)$ is the point where they cross on the $x$-axis; the question asks for the other point of intersection, which is $(2, 5)$."
                        },
                        {
                                "ans": "$$k = -5, \\quad \\text{other point } (2, -5)$$",
                                "feedback": "This option has a sign error when calculating the $y$-coordinate of the other point. Substituting $x = 2$ into $y = -5x + 15$ yields $y = -10 + 15 = 5$, not $-5$."
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
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Straight Lines",
                "subtopic": [
                        "Tangents and Normals"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning.<br><br>The line $y = kx + 6$ is a tangent to the curve $y = \\dfrac{ 8 }{ x }$.<br><br>Given that $k \\neq 0$, determine the value of the constant $k$ and the coordinates of the point of contact.",
                "steps": [
                        "<strong>Step 1: Set up the intersection equation:</strong><br>To find where the line and curve intersect, we set their equations equal to each other:<br>\\begin{aligned} kx + 6 &= \\dfrac{ 8 }{ x } \\end{aligned}<br><br>Multiply through by $x$ (since $x \\neq 0$) to form a quadratic equation:<br>\\begin{aligned} kx^2 + 6x &= 8 \\cr kx^2 + 6x - 8 &= 0 \\end{aligned}..",
                        "<strong>Step 2: Use the tangent condition (discriminant $\\Delta = 0$):</strong><br>A line is tangent to a curve if they touch at exactly one point. This means our quadratic equation in $x$ must have a single repeated real root, which corresponds to setting its discriminant to zero:<br>\\begin{aligned} \\Delta &= b^2 - 4ac \\cr &= 6^2 - 4(k)(-8) \\cr &= 36 + 32k \\end{aligned}<br><br>Setting the discriminant to $0$ and solving for $k$:<br>\\begin{aligned} 36 + 32k &= 0 \\cr 32k &= -36 \\cr k &= -\\dfrac{ 9 }{ 8 } \\end{aligned}",
                        "<strong>Step 3: Find the $x$-coordinate of the point of contact:</strong><br>Substitute $k = -\\dfrac{ 9 }{ 8 }$ back into our quadratic equation and solve for $x$:<br>\\begin{aligned} -\\dfrac{ 9 }{ 8 }x^2 + 6x - 8 &= 0 \\cr -9x^2 + 48x - 64 &= 0 \\cr 9x^2 - 48x + 64 &= 0 \\cr (3x - 8)^2 &= 0 \\end{aligned}<br><br>This perfect square yields the repeated root:<br>\\begin{aligned} 3x - 8 = 0 &\\implies x = \\dfrac{ 8 }{ 3 } \\end{aligned}",
                        "<strong>Step 4: Find the $y$-coordinate of the point of contact:</strong><br>Substitute $x = \\dfrac{ 8 }{ 3 }$ back into the curve equation $y = \\dfrac{ 8 }{ x }$:<br>\\begin{aligned} y &= \\dfrac{ 8 }{ \\left(\\dfrac{ 8 }{ 3 }\\right) } \\cr &= 8 \\times \\dfrac{ 3 }{ 8 } \\cr &= 3 \\end{aligned}<br><br>Thus, the value of the constant is $k = -\\dfrac{ 9 }{ 8 }$ and the coordinates of the point of contact are $\\left(\\dfrac{ 8 }{ 3 }, 3\\right)$."
                ],
                "pi_options": [
                        {
                                "ans": "$$k = \\dfrac{ 9 }{ 8 }, \\quad \\text{point of contact } \\left(-\\dfrac{ 8 }{ 3 }, -3\\right)$$",
                                "feedback": "This option arises if you make a sign error in the discriminant calculation, setting $36 - 32k = 0 \\implies k = \\dfrac{9}{8}$. Since $c = -8$ and $a = k$, $-4ac$ becomes $+32k$, which requires $k = -\\dfrac{9}{8}$."
                        },
                        {
                                "ans": "$$k = -\\dfrac{ 9 }{ 8 }, \\quad \\text{point of contact } \\left(\\dfrac{ 8 }{ 3 }, \\dfrac{ 1 }{ 3 }\\right)$$",
                                "feedback": "This option has a calculation error in the final step. When substituting $x = \\dfrac{8}{3}$ into $y = \\dfrac{8}{x}$, the result is $y = 3$, not $\\dfrac{1}{3}$."
                        },
                        {
                                "ans": "$$k = -\\dfrac{ 9 }{ 8 }, \\quad \\text{point of contact } (8, 1)$$",
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
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Straight Lines",
                "subtopic": [
                        "Tangents and Normals"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning.<br><br>The line $y = 3x - k$ is a tangent to the circle $x^2 + y^2 = 10$.<br><br>Given that $k$ is a positive constant, determine the value of $k$ and the coordinates of the point of contact.",
                "steps": [
                        "<strong>Step 1: Set up the intersection equation:</strong><br>We find where the line and circle intersect by substituting $y = 3x - k$ into the circle equation $x^2 + y^2 = 10$:<br>\\begin{aligned} x^2 + (3x - k)^2 &= 10 \\cr x^2 + 9x^2 - 6kx + k^2 &= 10 \\cr 10x^2 - 6kx + (k^2 - 10) &= 0 \\end{aligned}..",
                        "<strong>Step 2: Use the tangent condition (discriminant $\\Delta = 0$):</strong><br>For the line to be tangent to the circle, the quadratic intersection equation must have a single repeated real root. Therefore, we set its discriminant to zero:<br>\\begin{aligned} \\Delta &= (-6k)^2 - 4(10)(k^2 - 10) \\cr &= 36k^2 - 40(k^2 - 10) \\cr &= 36k^2 - 40k^2 + 400 \\cr &= -4k^2 + 400 \\end{aligned}<br><br>Setting the discriminant to $0$ and solving for $k$:<br>\\begin{aligned} -4k^2 + 400 &= 0 \\cr 4k^2 &= 400 \\cr k^2 &= 100 \\cr k &= \\pm 10 \\end{aligned}<br><br>Since we are given that $k$ is a positive constant, we select $k = 10$.",
                        "<strong>Step 3: Find the $x$-coordinate of the point of contact:</strong><br>Substitute $k = 10$ back into our quadratic equation in $x$:<br>\\begin{aligned} 10x^2 - 6(10)x + (10^2 - 10) &= 0 \\cr 10x^2 - 60x + 90 &= 0 \\end{aligned}<br><br>Divide the entire equation by $10$ to simplify:<br>\\begin{aligned} x^2 - 6x + 9 &= 0 \\cr (x - 3)^2 &= 0 \\cr x &= 3 \\end{aligned}",
                        "<strong>Step 4: Find the $y$-coordinate of the point of contact:</strong><br>Substitute $x = 3$ and $k = 10$ into the line equation $y = 3x - k$:<br>\\begin{aligned} y &= 3(3) - 10 \\cr &= -1 \\end{aligned}<br><br>Thus, the value of the positive constant is $k = 10$ and the coordinates of the point of contact are $(3, -1)$."
                ],
                "pi_options": [
                        {
                                "ans": "$$k = 10, \\quad \\text{point of contact } (3, 1)$$",
                                "feedback": "This option has a sign error when calculating the $y$-coordinate. Substituting $x = 3$ and $k = 10$ into $y = 3x - k$ yields $y = 9 - 10 = -1$, not $+1$."
                        },
                        {
                                "ans": "$$k = -10, \\quad \\text{point of contact } (-3, 1)$$",
                                "feedback": "This option uses the negative root $k = -10$. The question explicitly states that $k$ is a positive constant, so you must select $k = 10$."
                        },
                        {
                                "ans": "$$k = 20, \\quad \\text{point of contact } (1, -7)$$",
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