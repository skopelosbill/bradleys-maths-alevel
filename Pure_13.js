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
    "question": "In this question you must show detailed reasoning.<br><br>Solve the equation $3\\cos 2\\theta + \\sin\\theta = 2$ for $0^\circ \\le \\theta < 360^\circ$, giving your answers to $1$ decimal place where appropriate.",
    "steps": [
        "Use the double-angle identity for cosine, $\\cos 2\\theta = 1 - 2\\sin^2\\theta$, to write the entire equation in terms of $\\sin\\theta$:<br>\\begin{aligned} 3(1 - 2\\sin^2\\theta) + \\sin\\theta &= 2 \\cr 3 - 6\\sin^2\\theta + \\sin\\theta &= 2 \\end{aligned}",
        "Rearrange the expression to form a standard quadratic equation with a positive lead coefficient:<br>\\begin{aligned} -6\\sin^2\\theta + \\sin\\theta + 1 &= 0 \\cr 6\\sin^2\\theta - \\sin\\theta - 1 &= 0 \\end{aligned}",
        "Factorise the quadratic expression by splitting the middle term:<br>\\begin{aligned} 6\\sin^2\\theta - 3\\sin\\theta + 2\\sin\\theta - 1 &= 0 \\cr 3\\sin\\theta(2\\sin\\theta - 1) + 1(2\\sin\\theta - 1) &= 0 \\cr (2\\sin\\theta - 1)(3\\sin\\theta + 1) &= 0 \\end{aligned}<br>This yields two solutions for $\\sin\\theta$: $\\sin\\theta = \\dfrac{ 1 }{ 2 }$ or $\\sin\\theta = -\\dfrac{ 1 }{ 3 }$."
    ],
    "pi_options": [
        {
            "ans": "$\\theta = 30.0^\circ$, $150.0^\circ$",
            "feedback": "You have correctly solved for the first branch of solutions, but remember that the quadratic yields a second valid branch of solutions from $\\sin\\theta = -\\dfrac{ 1 }{ 3 }$. You must solve both to find all angles within the domain."
        },
        {
            "ans": "$\\theta = 30.0^\circ$, $150.0^\circ$, $19.5^\circ$, $340.5^\circ$",
            "feedback": "Check your signs in Case 2. Since $\\sin\\theta = -\\dfrac{ 1 }{ 3 }$ is negative, your answers must lie in the third and fourth quadrants. The angle $19.5^\circ$ is in the first quadrant where sine is positive."
        },
        {
            "ans": "$\\theta = 60.0^\circ$, $120.0^\circ$, $199.5^\circ$, $340.5^\circ$",
            "feedback": "Check your principal solution for Case 1. The angle for which $\\sin\\theta = \\dfrac{ 1 }{ 2 }$ is $30^\circ$, not $60^\circ$ (which corresponds to $\\sin 60^\circ = \\dfrac{ \\sqrt{ 3 } }{ 2 }$)."
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
    "question": "The expression $3\\sin\\theta - 4\\cos\\theta$ can be written in the form $R\\sin(\\theta - \\alpha)$, where $R > 0$ and $0^\circ < \\alpha < 90^\circ$.<br><br><strong>(i)</strong> Find the value of $R$ and the value of $\\alpha$, giving $\\alpha$ to $2$ decimal places.<br><br><strong>(ii)</strong> Hence find the greatest and least possible values of the expression:<br>$\\dfrac{ 10 }{ 3\\sin\\theta - 4\\cos\\theta + 7 }$",
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
}
];