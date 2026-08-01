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
}
];