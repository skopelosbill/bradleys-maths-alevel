window.ALEVEL_QUESTIONS = [
{
    "id": "004601",
    "board": "OCR",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Trigonometry",
    "subtopic": [
        "Compound Angle Formulae",
        "Double Angle Formulae"
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
        "We are given that $\\theta$ is an obtuse angle ($90^\\circ < \\theta < 180^\\circ$). In the second quadrant, tangent must be strictly negative:<br><br><strong>•</strong> $-3 + \\sqrt{ 10 } \\approx 0.16 > 0$ (rejected)<br><strong>•</strong> $-3 - \\sqrt{ 10 } \\approx -6.16 < 0$ (accepted)<br><br>Therefore, the exact value in surd form is:<br>$\\tan\\theta = -3 - \\sqrt{ 10 }$"
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
    "topic": "Trigonometry",
    "subtopic": [
        "Compound Angle Formulae",
        "Pythagorean Identities"
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
    "topic": "Trigonometry",
    "subtopic": [
        "Double Angle Formulae",
        "Trigonometric Equations"
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
            "ans": "$\\theta = 30.0^\\circ$, $150.0^\\circ$",
            "feedback": "You have correctly solved for the first branch of solutions, but remember that the quadratic yields a second valid branch of solutions from $\\sin\\theta = -\\dfrac{ 1 }{ 3 }$. You must solve both to find all angles within the domain."
        },
        {
            "ans": "$\\theta = 30.0^\\circ$, $150.0^\\circ$, $19.5^\\circ$, $340.5^\\circ$",
            "feedback": "Check your signs in Case 2. Since $\\sin\\theta = -\\dfrac{ 1 }{ 3 }$ is negative, your answers must lie in the third and fourth quadrants. The angle $19.5^\\circ$ is in the first quadrant where sine is positive."
        },
        {
            "ans": "$\\theta = 60.0^\\circ$, $120.0^\\circ$, $199.5^\\circ$, $340.5^\\circ$",
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
    "topic": "Trigonometry",
    "subtopic": [
        "R-Formula",
        "Maximum and Minimum Values"
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
    "topic": "Trigonometry",
    "subtopic": [
        "Trigonometric Equations",
        "Pythagorean Identities"
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
            "ans": "$\\theta \\approx 0.98$, $4.12$, $\\dfrac{ \\pi }{ 4 }$, $\\dfrac{ 5\\pi }{ 4 }$",
            "feedback": "Check your quadrant boundaries for Case 2. Since $\\tan\\theta = -1$ is negative, your answers must lie in the second and fourth quadrants. The angles $\\dfrac{ \\pi }{ 4 }$ and $\\dfrac{ 5\\pi }{ 4 }$ correspond to $\\tan\\theta = +1$, which is incorrect."
        },
        {
            "ans": "$\\theta \\approx 0.98$, $\\dfrac{ 3\\pi }{ 4 }$",
            "feedback": "You have correctly solved for the principal angles of both cases, but remember that the interval is $0 \\le \\theta < 2\\pi$. Since the tangent function repeats every $\\pi$ radians, you must add $\\pi$ to both principal values to find all valid solutions."
        },
        {
            "ans": "$\\theta \\approx 0.59$, $3.73$, $\\dfrac{ 3\\pi }{ 4 }$, $\\dfrac{ 7\\pi }{ 4 }$",
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
    "major_area": "Algebra and Functions",
    "topic": "Differential Equations",
    "subtopic": [
        "Separation of Variables",
        "Boundary Conditions"
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
    "major_area": "Algebra and Functions",
    "topic": "Differential Equations",
    "subtopic": [
        "Separation of Variables",
        "Logarithmic Integration"
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
    "major_area": "Algebra and Functions",
    "topic": "Differential Equations",
    "subtopic": [
        "Modelling",
        "Boundary Conditions"
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
    "major_area": "Algebra and Functions",
    "topic": "Differential Equations",
    "subtopic": [
        "Separation of Variables",
        "Partial Fractions"
    ],
    "img": false,
    "question": "The variables $x$ and $y$ satisfy the differential equation:<br><br>$\\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } = \\dfrac{ y(y + 3) }{ x }$<br><br>for $x > 0$ and $y > 0$. It is given that $y = 3$ when $x = 1$.<br><br>By solving this differential equation, show that $y = \\dfrac{ 3x^3 }{ 2 - x^3 }$.",
    "steps": [
        "First, separate the variables of the differential equation:<br>\\begin{aligned} \\dfrac{ 1 }{ y(y + 3) } \\mathrm{d}y &= \\dfrac{ 1 }{ x } \\mathrm{d}x \\cr \\int \\dfrac{ 1 }{ y(y + 3) } \\mathrm{d}y &= \\int \\dfrac{ 1 }{ x } \\mathrm{d}x \\end{aligned}",
        "To integrate the left-hand side, express the integrand in partial fractions:<br>\\begin{aligned} \\dfrac{ 1 }{ y(y + 3) } &= \\dfrac{ A }{ y } + \\dfrac{ B }{ y + 3 } \\cr 1 &= A(y + 3) + B y \\end{aligned}",
        "Solve for $A$ and $B$ by substituting convenient values of $y$:<br><strong>•</strong> Let $y = 0 \\implies 1 = 3A \\implies A = \\dfrac{ 1 }{ 3 }$<br><strong>•</strong> Let $y = -3 \\implies 1 = -3B \\implies B = -\\dfrac{ 1 }{ 3 }$<br><br>This gives:<br>$\\dfrac{ 1 }{ y(y + 3) } = \\dfrac{ 1 }{ 3 }\\left( \\dfrac{ 1 }{ y } - \\dfrac{ 1 }{ y + 3 } \\right)$",
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
    "major_area": "Algebra and Functions",
    "topic": "Differential Equations",
    "subtopic": [
        "Separation of Variables",
        "Boundary Conditions"
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
    "major_area": "Geometry",
    "topic": "Trigonometry",
    "subtopic": [
        "Cosine Rule"
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
    "major_area": "Geometry",
    "topic": "Trigonometry",
    "subtopic": [
        "Cosine Rule",
        "Area of a Triangle"
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
    "major_area": "Geometry",
    "topic": "Trigonometry",
    "subtopic": [
        "Sine Rule",
        "Area of a Triangle"
    ],
    "img": "images/Pure/004613.png",
    "question": "The diagram shows a triangle $PQR$ where the side lengths are $PQ = 8\\text{ cm}$ and $QR = 6\\text{ cm}$, and the angle is $\\angle QPR = 40^\\circ$.<br><br><strong>(i)</strong> Show that there are two possible values for the angle $\\angle PRQ$, and find both values to $1$ decimal place.<br><strong>(ii)</strong> Given that the angle $\\angle PRQ$ is obtuse, find the area of triangle $PQR$, giving your answer to $1$ decimal place.",
    "steps": [
        "<strong>(i)</strong> To find a missing angle when given an opposite side and another side-angle pair, use the Sine Rule:<br>\\begin{aligned} \\dfrac{ \\sin(\\angle PRQ) }{ PQ } &= \\dfrac{ \\sin(\\angle QPR) }{ QR } \\end{aligned}",
        "Substitute the given values and rearrange to solve for $\\sin(\\angle PRQ)$:<br>\\begin{aligned} \\dfrac{ \\sin(\\angle PRQ) }{ 8 } &= \\dfrac{ \\sin(40^\\circ) }{ 6 } \\cr \\sin(\\angle PRQ) &= \\dfrac{ 8\\sin(40^\\circ) }{ 6 } \\cr &\\approx \\dfrac{ 8(0.642788) }{ 6 } \\cr &\\approx 0.857051 \\end{aligned}",
        "Since $\\sin(\\angle PRQ) = 0.857051$ is positive and less than $1$, there are two possible geometric solutions within a triangle:<br><br><strong>• Acute Case:</strong><br>\\begin{aligned} \\angle PRQ &= \\arcsin(0.857051) \\cr &\\approx 59.0^\\circ \\end{aligned}<br><strong>• Obtuse Case:</strong><br>\\begin{aligned} \\angle PRQ &= 180^\\circ - 59.0^\\circ \\cr &\\approx 121.0^\\circ \\end{aligned}",
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
    "major_area": "Geometry",
    "topic": "Trigonometry",
    "subtopic": [
        "Coordinate Geometry",
        "Cosine Rule"
    ],
    "img": "images/Pure/004614.png",
    "question": "The diagram shows a coordinate grid containing triangle $ABC$ with vertices $A(1, 2)$, $B(5, 5)$, and $C(2, 6)$.<br><br><strong>(i)</strong> Find the exact lengths of the sides $AB$, $BC$, and $AC$.<br><strong>(ii)</strong> Hence find the size of the angle $\\angle ABC$, giving your answer to the nearest degree.",
    "steps": [
        "<strong>(i)</strong> To find the exact side lengths, apply the coordinate distance formula, $d = \\sqrt{ (x_2 - x_1)^2 + (y_2 - y_1)^2 }$, to each pair of vertices:<br><br><strong>• Side $AB$:</strong><br>\\begin{aligned} AB &= \\sqrt{ (5 - 1)^2 + (5 - 2)^2 } \\cr &= \\sqrt{ 4^2 + 3^2 } \\cr &= \\sqrt{ 16 + 9 } \\cr &= 5 \\end{aligned}",
        "<strong>• Side $BC$:</strong><br>\\begin{aligned} BC &= \\sqrt{ (2 - 5)^2 + (6 - 5)^2 } \\cr &= \\sqrt{ (-3)^2 + 1^2 } \\cr &= \\sqrt{ 9 + 1 } \\cr &= \\sqrt{ 10 } \\end{aligned}",
        "<strong>• Side $AC$:</strong><br>\\begin{aligned} AC &= \\sqrt{ (2 - 1)^2 + (6 - 2)^2 } \\cr &= \\sqrt{ 1^2 + 4^2 } \\cr &= \\sqrt{ 1 + 16 } \\cr &= \\sqrt{ 17 } \\end{aligned}<br>So the exact lengths of the sides are $AB = 5$, $BC = \\sqrt{ 10 }$, and $AC = \\sqrt{ 17 }$.",
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
    "major_area": "Geometry",
    "topic": "Trigonometry",
    "subtopic": [
        "Bearings",
        "Sine and Cosine Rules"
    ],
    "img": "images/Pure/004615.png",
    "question": "The diagram shows the journey of a ship sailing $15\\text{ km}$ from port $P$ on a bearing of $060^\\circ$ to a point $A$. It then changes course and sails $12\\text{ km}$ on a bearing of $130^\\circ$ to a point $B$.<br><br><strong>(i)</strong> Find the distance of the ship from port $P$ when it is at point $B$, giving your answer to $1$ decimal place.<br><strong>(ii)</strong> Find the bearing of $B$ from port $P$, giving your answer to the nearest degree.",
    "steps": [
        "<strong>(i)</strong> To analyze the triangle $PAB$, first determine the interior angle $\\angle PAB$.<br><br>Using parallel lines on North directions:<br><strong>•</strong> The angle from $AP$ to the South direction at $A$ is equal to the original bearing of $060^\\circ$ (alternate angles).<br><strong>•</strong> The bearing of $B$ from $A$ is $130^\\circ$, which is $130^\\circ - 180^\\circ = -50^\\circ$ (or $50^\\circ$ East of South).<br><br>Adding these angles gives the interior angle $\\angle PAB$:<br>\\begin{aligned} \\angle PAB &= 60^\\circ + (180^\\circ - 130^\\circ) \\cr &= 60^\\circ + 50^\\circ \\cr &= 110^\\circ \\end{aligned}",
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
    "topic": "Graphs of Functions",
    "subtopic": [
        "Transformations"
    ],
    "img": false,
    "question": "The curve $y = \\dfrac{ 1 }{ x^2 }$ is translated by the vector $\\begin{pmatrix} -3 \\cr 5 \\end{pmatrix}$.<br><br>Write down the equation of the transformed curve.",
    "steps": [
        "A translation represented by the vector $\\begin{pmatrix} a \\cr b \\end{pmatrix}$ has the following algebraic effects on a curve $y = \\mathrm{f}(x)$:<br><br><strong>• Horizontal shift:</strong> a shift of $a$ units in the $x$-direction replaces every $x$ with $(x - a)$ in the equation.<br><strong>• Vertical shift:</strong> a shift of $b$ units in the $y$-direction adds $b$ to the overall equation.",
        "For the translation vector $\\begin{pmatrix} -3 \\cr 5 \\end{pmatrix}$:<br><br><strong>•</strong> The horizontal translation of $-3$ units (3 units to the left) means we replace $x$ with $(x - (-3)) = (x + 3)$.<br><strong>•</strong> The vertical translation of $5$ units (5 units upwards) means we add $5$ to the overall equation.",
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
    "topic": "Graphs of Functions",
    "subtopic": [
        "Transformations"
    ],
    "img": false,
    "question": "The curve $y = x^3 - 2x$ is translated by the vector $\\begin{pmatrix} 2 \\cr -3 \\end{pmatrix}$.<br><br>Find the equation of the transformed curve, giving your answer in a form not involving expanded brackets.",
    "steps": [
        "A translation represented by the vector $\\begin{pmatrix} a \\cr b \\end{pmatrix}$ has the following algebraic effects on a curve $y = \\mathrm{f}(x)$:<br><br><strong>• Horizontal shift:</strong> replaces every $x$ with $(x - a)$ in the equation.<br><strong>• Vertical shift:</strong> adds $b$ to the overall equation.",
        "For the translation vector $\\begin{pmatrix} 2 \\cr -3 \\end{pmatrix}$:<br><br><strong>•</strong> The horizontal translation of $+2$ units (2 units to the right) means we replace $x$ with $(x - 2)$ everywhere in the equation.<br><strong>•</strong> The vertical translation of $-3$ units (3 units downwards) means we subtract $3$ from the overall equation.",
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
    "topic": "Graphs of Functions",
    "subtopic": [
        "Transformations"
    ],
    "img": false,
    "question": "The curve $y = \\sqrt{ x }$ is transformed by:<br><br><strong>•</strong> a stretch parallel to the $y$-axis with scale factor $3$,<br><strong>•</strong> followed by a translation of vector $\\begin{pmatrix} 4 \\cr 1 \\end{pmatrix}$.<br><br>Find the equation of the transformed curve.",
    "steps": [
        "<strong>Step 1:</strong> Apply the first transformation. A stretch parallel to the $y$-axis with scale factor $k$ corresponds to multiplying the entire function by $k$ (i.e. replacing $y$ with $k y$):<br>\\begin{aligned} y &= 3\\sqrt{ x } \\end{aligned}",
        "<strong>Step 2:</strong> Apply the translation. A translation of vector $\\begin{pmatrix} 4 \\cr 1 \\end{pmatrix}$ corresponds to:<br><br><strong>•</strong> replacing $x$ with $(x - 4)$ (horizontal translation 4 units to the right),<br><strong>•</strong> adding $1$ to the overall function (vertical translation 1 unit upwards).",
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
    "topic": "Graphs of Functions",
    "subtopic": [
        "Transformations"
    ],
    "img": false,
    "question": "The curve $y = 2^x$ is transformed into the curve $y = 2^{x - 3} - 6$.<br><br><strong>(i)</strong> Describe fully the single transformation that maps the first curve onto the second, using vector notation where appropriate.<br><br><strong>(ii)</strong> State the coordinates of the $y$-intercept of the transformed curve.",
    "steps": [
        "<strong>(i)</strong> Compare the transformed equation $y = 2^{x - 3} - 6$ to the original equation $y = 2^x$ to identify the individual changes:<br><br><strong>•</strong> The variable $x$ has been replaced with $(x - 3)$, which corresponds to a horizontal translation of $+3$ units (3 units to the right).<br><strong>•</strong> The term $-6$ has been added to the end of the function, which corresponds to a vertical translation of $-6$ units (6 units downwards).",
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
    "topic": "Graphs of Functions",
    "subtopic": [
        "Transformations"
    ],
    "img": false,
    "question": "The curve $y = \\dfrac{ 3 }{ x - 2 } + 1$ is a transformation of the standard curve $y = \\dfrac{ 1 }{ x }$.<br><br>Describe a sequence of two transformations that maps the curve $y = \\dfrac{ 1 }{ x }$ onto the curve $y = \\dfrac{ 3 }{ x - 2 } + 1$.",
    "steps": [
        "To map $y = \\dfrac{ 1 }{ x }$ onto the transformed equation $y = \\dfrac{ 3 }{ x - 2 } + 1$, analyze the differences:<br><br><strong>• Multiplication by $3$ on the outside:</strong> this corresponds to a vertical stretch parallel to the $y$-axis with scale factor $3$.<br><strong>• Replacing $x$ with $(x - 2)$ and adding $1$:</strong> this corresponds to a translation of $2$ units to the right and $1$ unit upwards.",
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
    "major_area": "Geometry",
    "topic": "Trigonometry",
    "subtopic": [
        "Small Angle Approximations"
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
    "major_area": "Geometry",
    "topic": "Trigonometry",
    "subtopic": [
        "Small Angle Approximations"
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
            "ans": "$\\dfrac{ 3 }{ 4 }$",
            "feedback": "Check your expansion of the numerator. The term $\\theta\\cos\\theta \\approx \\theta(1) = \\theta$. Subtracting this from $3\\sin\\theta \\approx 3\\theta$ yields $2\\theta$ in the numerator, not $3\\theta$. This error leads to an incorrect constant ratio of $\\dfrac{ 3 }{ 4 }$."
        },
        {
            "ans": "$\\dfrac{ 1 }{ 4 }$",
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
    "major_area": "Geometry",
    "topic": "Trigonometry",
    "subtopic": [
        "Small Angle Approximations"
    ],
    "img": false,
    "question": "Show that, when $\\theta$ is small, the expression:<br><br>$2\\cos\\theta + \\sin\\theta\\tan(2\\theta)$<br><br>can be approximated by $a + b\\theta^2$, where $a$ and $b$ are integers to be found.",
    "steps": [
        "Recall the standard small angle approximations for the trigonometric terms in the expression:<br>$\\cos\\theta \\approx 1 - \\dfrac{ 1 }{ 2 }\\theta^2$, $\\sin\\theta \\approx \\theta$, and $\\tan(2\\theta) \\approx 2\\theta$",
        "Substitute these approximations into each term of the expression:<br><br><strong>• First term:</strong><br>\\begin{aligned} 2\\cos\\theta &\\approx 2\\left( 1 - \\dfrac{ 1 }{ 2 }\\theta^2 \\right) \\cr &\\approx 2 - \\theta^2 \\end{aligned}",
        "<strong>• Second term:</strong><br>\\begin{aligned} \\sin\\theta\\tan(2\\theta) &\\approx (\\theta)(2\\theta) \\cr &\\approx 2\\theta^2 \\end{aligned}",
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
    "major_area": "Geometry",
    "topic": "Trigonometry",
    "subtopic": [
        "Small Angle Approximations"
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
            "ans": "$\\dfrac{ 8 }{ 3 }$",
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
    "major_area": "Geometry",
    "topic": "Trigonometry",
    "subtopic": [
        "Small Angle Approximations"
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
}
];