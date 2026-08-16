window.ALEVEL_QUESTIONS = [
{
    "id": "004751",
    "board": "CCEA",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Parametric Equations",
    "subtopic": [
        "Cartesian Equations"
    ],
    "img": false,
    "question": "A curve is defined parametrically by:\n$$x = 2at^2 \\quad \\text{and} \\quad y = 4at$$\nwhere $a$ is a constant and $t$ is a parameter. Find the Cartesian equation of the curve.",
    "steps": [
        "Express the parameter $t$ in terms of $y$ and the constant $a$ using the linear equation for $y$:\n\\begin{aligned} y &= 4at \\cr t &= \\dfrac{ y }{ 4a } \\end{aligned}",
        "Substitute the expression for $t$ into the parametric equation for $x$:\n\\begin{aligned} x &= 2a t^2 \\cr x &= 2a\\left( \\dfrac{ y }{ 4a } \\right)^2 \\end{aligned}",
        "Expand the bracket and simplify the fraction to find the final Cartesian equation:\n\\begin{aligned} x &= 2a\\left( \\dfrac{ y^2 }{ 16a^2 } \\right) \\cr x &= \\dfrac{ 2a y^2 }{ 16a^2 } \\cr x &= \\dfrac{ y^2 }{ 8a } \\cr y^2 &= 8ax \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$y^2 = 4ax$$",
            "feedback": "This error arises if you square the $4a$ in the denominator incorrectly as $8a$ or fail to square the coefficient $4$ completely."
        },
        {
            "ans": "$$y^2 = 16ax$$",
            "feedback": "This mistake occurs if you forget to multiply by the factor of $2a$ on the right-hand side of the equation when substituting."
        },
        {
            "ans": "$$y^2 = 8a^2 x$$",
            "feedback": "This is caused by a failure to cancel the factor of $a$ in the numerator with the $a^2$ in the denominator correctly."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Choosing the Easiest Parameter to Isolate",
        "content": "When converting parametric equations to Cartesian form, always look for the equation that allows you to isolate the parameter $t$ most easily. In this case, $y = 4at$ is linear in $t$, making it much simpler to rearrange than the quadratic equation $x = 2at^2$."
    }
},
{
    "id": "004752",
    "board": "CCEA",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Parametric Equations",
    "subtopic": [
        "Trigonometric Parametric Equations",
        "Hyperbolas"
    ],
    "img": false,
    "question": "A curve is defined parametrically by:\n$$x = a \\sec \\theta \\quad \\text{and} \\quad y = b \\tan \\theta$$\nwhere $a$ and $b$ are non-zero constants, and $\\theta$ is a parameter. Find the Cartesian equation of the curve.",
    "steps": [
        "Isolate the trigonometric terms $\\sec \\theta$ and $\\tan \\theta$ in each parametric equation:\n\\begin{aligned} \\sec \\theta &= \\dfrac{ x }{ a } \\cr \\tan \\theta &= \\dfrac{ y }{ b } \\end{aligned}",
        "State the fundamental Pythagorean identity connecting $\\sec \\theta$ and $\\tan \\theta$:\n\\begin{aligned} \\sec^2 \\theta - \\tan^2 \\theta &= 1 \\end{aligned}",
        "Substitute the isolated expressions for $\\sec \\theta$ and $\\tan \\theta$ into the trigonometric identity to obtain the Cartesian equation:\n\\begin{aligned} \\left( \\dfrac{ x }{ a } \\right)^2 - \\left( \\dfrac{ y }{ b } \\right)^2 &= 1 \\cr \\dfrac{ x^2 }{ a^2 } - \\dfrac{ y^2 }{ b^2 } &= 1 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$\\dfrac{ x^2 }{ a^2 } + \\dfrac{ y^2 }{ b^2 } = 1$$",
            "feedback": "This error is caused by using the incorrect trigonometric identity $\\sec^2 \\theta + \\tan^2 \\theta = 1$, which is a common confusion with the sine/cosine identity."
        },
        {
            "ans": "$$\\dfrac{ y^2 }{ b^2 } - \\dfrac{ x^2 }{ a^2 } = 1$$",
            "feedback": "This mistake occurs if the order of terms in the identity is reversed, writing $\\tan^2 \\theta - \\sec^2 \\theta = 1$ instead of $\\sec^2 \\theta - \\tan^2 \\theta = 1$."
        },
        {
            "ans": "$$x^2 - y^2 = a^2 b^2$$",
            "feedback": "This arises from a failure to divide by the constant coefficients $a$ and $b$ correctly before applying the identity."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Trigonometric Identity Checklist",
        "content": "Always double-check your Pythagorean identities. While $\\sin^2 \\theta + \\cos^2 \\theta = 1$ has a plus sign, the identity connecting secant and tangent is $\\sec^2 \\theta - \\tan^2 \\theta = 1$. A sign slip here will convert a hyperbola into an ellipse, resulting in a loss of marks."
    }
},
{
    "id": "004753",
    "board": "CCEA",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Parametric Equations",
    "subtopic": [
        "Trigonometric Parametric Equations",
        "Double-Angle Identities"
    ],
    "img": false,
    "question": "A curve is defined parametrically by:\n$$x = 2 \\cos \\theta \\quad \\text{and} \\quad y = \\cos(2\\theta) + 3$$\nwhere $\\theta$ is a parameter. Find the Cartesian equation of the curve in the form $y = \\mathrm{f}(x)$.",
    "steps": [
        "Express $\\cos \\theta$ in terms of $x$:\n\\begin{aligned} \\cos \\theta &= \\dfrac{ x }{ 2 } \\end{aligned}",
        "Recall the double-angle identity for $\\cos(2\\theta)$ that involves only cosine terms, to match our expression for $x$:\n\\begin{aligned} \\cos(2\\theta) &= 2\\cos^2 \\theta - 1 \\end{aligned}",
        "Substitute this double-angle expression into the equation for $y$:\n\\begin{aligned} y &= \\left( 2\\cos^2 \\theta - 1 \\right) + 3 \\cr y &= 2\\cos^2 \\theta + 2 \\end{aligned}",
        "Substitute $\\cos \\theta = \\dfrac{ x }{ 2 }$ into the simplified expression for $y$ and simplify:\n\\begin{aligned} y &= 2\\left( \\dfrac{ x }{ 2 } \\right)^2 + 2 \\cr y &= 2\\left( \\dfrac{ x^2 }{ 4 } \\right) + 2 \\cr y &= \\dfrac{ x^2 }{ 2 } + 2 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$y = x^2 + 2$$",
            "feedback": "This error occurs if you forget to square the denominator when substituting $\\cos \\theta = \\dfrac{x}{2}$, writing $\\cos^2 \\theta = \\dfrac{x^2}{2}$ instead of $\\dfrac{x^2}{4}$."
        },
        {
            "ans": "$$y = \\dfrac{ x^2 }{ 2 } + 4$$",
            "feedback": "This mistake is caused by a sign error when expanding $\\cos(2\\theta) = 2\\cos^2 \\theta + 1$ instead of $2\\cos^2 \\theta - 1$."
        },
        {
            "ans": "$$y = 2x^2 + 2$$",
            "feedback": "This arises if the denominator is completely ignored during substitution, setting $\\cos^2 \\theta = x^2$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Choosing the Right Double-Angle Identity",
        "content": "There are three common forms for the $\\cos(2\\theta)$ identity: $\\cos^2 \\theta - \\sin^2 \\theta$, $1 - 2\\sin^2 \\theta$, and $2\\cos^2 \\theta - 1$. Since our expression for $x$ is defined in terms of $\\cos \\theta$, choosing the version $2\\cos^2 \\theta - 1$ is the most direct path to the Cartesian equation."
    }
},
{
    "id": "004754",
    "board": "CCEA",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Parametric Equations",
    "subtopic": [
        "Exponential Parametric Equations"
    ],
    "img": false,
    "question": "A curve is defined parametrically by:\n$$x = e^{2t} - 1 \\quad \\text{and} \\quad y = e^t + 2$$\nwhere $t$ is a parameter. Find the Cartesian equation of the curve in the form $x = \\mathrm{f}(y)$.",
    "steps": [
        "Isolate the exponential term $e^t$ in the parametric equation for $y$:\n\\begin{aligned} y &= e^t + 2 \\cr e^t &= y - 2 \\end{aligned}",
        "Rewrite the equation for $x$ using exponent laws so that it is expressed in terms of $e^t$:\n\\begin{aligned} x &= \\left( e^t \\right)^2 - 1 \\end{aligned}",
        "Substitute $e^t = y - 2$ into the rewritten equation for $x$:\n\\begin{aligned} x &= (y - 2)^2 - 1 \\end{aligned}",
        "Expand the brackets and simplify the constant terms to write the equation in the form $x = \\mathrm{f}(y)$:\n\\begin{aligned} x &= \\left( y^2 - 4y + 4 \\right) - 1 \\cr x &= y^2 - 4y + 3 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$x = y^2 - 1$$",
            "feedback": "This error is caused by substituting $e^{2t}$ as $y^2$ directly, failing to account for the $+2$ shift in the $y = e^t + 2$ equation."
        },
        {
            "ans": "$$x = y^2 - 4y + 5$$",
            "feedback": "This mistake arises from a sign error when expanding the brackets, writing $(y - 2)^2 = y^2 - 4y - 4$ or making an arithmetic slip with the final constant $-1$."
        },
        {
            "ans": "$$x = y^2 + 4y + 3$$",
            "feedback": "This is caused by expanding $(y - 2)^2$ incorrectly as $y^2 + 4y + 4$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Exponential Substitution Laws",
        "content": "Remember the index law $\\left( a^m \\right)^n = a^{ mn }$. This allows us to write $e^{2t}$ as $\\left( e^t \\right)^2$. Recognising this structure is extremely helpful for simplifying exponential parametric equations without needing to introduce natural logarithms."
    }
},
{
    "id": "004755",
    "board": "CCEA",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Parametric Equations",
    "subtopic": [
        "Rational Parametric Equations"
    ],
    "img": false,
    "question": "A curve is defined parametrically by:\n$$x = \\dfrac{2}{t} \\quad \\text{and} \\quad y = 3t^2 + 1$$\nwhere $t \\ne 0$ is a parameter. Find the Cartesian equation of the curve in the form $y = \\mathrm{f}(x)$.",
    "steps": [
        "Rearrange the equation for $x$ to express the parameter $t$ in terms of $x$:\n\\begin{aligned} x &= \\dfrac{2}{t} \\cr t &= \\dfrac{2}{x} \\end{aligned}",
        "Substitute this expression for $t$ into the parametric equation for $y$:\n\\begin{aligned} y &= 3t^2 + 1 \\cr y &= 3\\left( \\dfrac{2}{x} \\right)^2 + 1 \\end{aligned}",
        "Expand the squared bracket and simplify the fraction to find the final Cartesian equation:\n\\begin{aligned} y &= 3\\left( \\dfrac{4}{x^2} \\right) + 1 \\cr y &= \\dfrac{12}{x^2} + 1 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$y = \\dfrac{6}{x^2} + 1$$",
            "feedback": "This error occurs if you multiply the $3$ by the $2$ before squaring, or fail to square the numerator $2$ to $4$."
        },
        {
            "ans": "$$y = \\dfrac{12}{x} + 1$$",
            "feedback": "This mistake is caused by forgetting to square the denominator $x$ when evaluating the squared fraction."
        },
        {
            "ans": "$$y = \\dfrac{6}{x} + 1$$",
            "feedback": "This arises from a combined error of failing to square both the numerator $2$ and the denominator $x$ during substitution."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Order of Operations with Coefficients",
        "content": "When substituting into $y = 3t^2 + 1$, always follow the order of operations (BIDMAS/BODMAS). You must square the term $t = \\dfrac{2}{x}$ *before* multiplying by the coefficient of $3$. A very common mistake is attempting to multiply by the coefficient first."
    }
}
];