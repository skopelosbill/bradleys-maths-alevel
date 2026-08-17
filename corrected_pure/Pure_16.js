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
    "question": "A curve is defined parametrically by:\n$$x = 2 \\cos \\theta \\quad \\text{and} \\quad y = \\cos(2\\theta) + 3$$\nwhere $\\theta$ is a parameter. Find the Cartesian equation of the curve in the form $y =  f(x)$.",
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
    "question": "A curve is defined parametrically by:\n$$x = e^{2t} - 1 \\quad \\text{and} \\quad y = e^t + 2$$\nwhere $t$ is a parameter. Find the Cartesian equation of the curve in the form $x =  f(y)$.",
    "steps": [
        "Isolate the exponential term $e^t$ in the parametric equation for $y$:\n\\begin{aligned} y &= e^t + 2 \\cr e^t &= y - 2 \\end{aligned}",
        "Rewrite the equation for $x$ using exponent laws so that it is expressed in terms of $e^t$:\n\\begin{aligned} x &= \\left( e^t \\right)^2 - 1 \\end{aligned}",
        "Substitute $e^t = y - 2$ into the rewritten equation for $x$:\n\\begin{aligned} x &= (y - 2)^2 - 1 \\end{aligned}",
        "Expand the brackets and simplify the constant terms to write the equation in the form $x =  f(y)$:\n\\begin{aligned} x &= \\left( y^2 - 4y + 4 \\right) - 1 \\cr x &= y^2 - 4y + 3 \\end{aligned}"
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
    "question": "A curve is defined parametrically by:\n$$x = \\dfrac{2}{t} \\quad \\text{and} \\quad y = 3t^2 + 1$$\nwhere $t \\ne 0$ is a parameter. Find the Cartesian equation of the curve in the form $y =  f(x)$.",
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
},
{
    "id": "004756",
    "board": "CCEA",
    "level": "A",
    "major_area": "Geometry",
    "topic": "Trigonometry",
    "subtopic": [
        "Circular Measure",
        "Arc Length and Sector Area"
    ],
    "img": "images/Pure/004756.png",
    "question": "The diagram shows a design for a symmetrical mirror, $ABCDE$, consisting of a sector of a circle $EBD$ centred at $B$, together with two congruent right-angled triangles, $BAE$ and $BCD$, which are right-angled at $A$ and $C$ respectively.<br><br>The straight line $AC$ has a length of $60\\text{ cm}$, and $AE = CD = 40\\text{ cm}$.<br><br><strong>(a)</strong> Find the angle $EBD$ in radians.<br><strong>(b)</strong> Find the total area of the mirror.",
    "steps": [
        "By symmetry, $B$ is the midpoint of $AC$, so the adjacent side $AB = BC = \\dfrac{60}{2} = 30\\text{ cm}$. In the right-angled triangle $BAE$, use the tangent ratio to find the angle $\\angle ABE$:\n\\begin{aligned} \\tan(\\angle ABE) &= \\dfrac{ AE }{ AB } \\cr \\tan(\\angle ABE) &= \\dfrac{ 40 }{ 30 } \\cr \\angle ABE &= \\arctan\\left( \\dfrac{4}{3} \\right) \\cr \\angle ABE &\\approx 0.92730\\text{ rad} \\end{aligned}",
        "Since the shape is symmetrical, $\\angle CBD = \\angle ABE \\approx 0.92730\\text{ rad}$. The points $A$, $B$, and $C$ lie on a straight horizontal line, so the angles sum to $\\pi$ radians. Calculate the angle $EBD$:\n\\begin{aligned} \\angle EBD &= \\pi - 2\\angle ABE \\cr \\angle EBD &= \\pi - 2\\arctan\\left( \\dfrac{4}{3} \\right) \\cr \\angle EBD &\\approx 3.14159 - 1.85459 \\cr \\angle EBD &\\approx 1.287\\text{ rad} \\end{aligned}\nThis is $1.29\\text{ radians}$ to three significant figures.",
        "Find the radius $R$ of the sector $EBD$, which is the hypotenuse $BE$ of the right-angled triangle $BAE$, using Pythagoras' theorem:\n\\begin{aligned} BE^2 &= AB^2 + AE^2 \\cr R^2 &= 30^2 + 40^2 \\cr R^2 &= 900 + 1600 \\cr R^2 &= 2500 \\cr R &= 50\\text{ cm} \\end{aligned}",
        "Calculate the area of the sector $EBD$ and the two congruent right-angled triangles to find the total area of the mirror:\n\\begin{aligned} \\text{Area of Sector } EBD &= \\dfrac{1}{2} R^2 \\theta \\cr \\text{Area of Sector } EBD &= \\dfrac{1}{2} \\left( 50^2 \\right) \\left( 1.28700 \\right) \\cr \\text{Area of Sector } EBD &\\approx 1250 \\times 1.28700 \\cr \\text{Area of Sector } EBD &\\approx 1608.75\\text{ cm}^2 \\cr\\cr \\text{Area of Triangle } BAE &= \\dfrac{1}{2} \\times 30 \\times 40 = 600\\text{ cm}^2 \\cr \\text{Area of Triangle } BCD &= 600\\text{ cm}^2 \\cr\\cr \\text{Total Area} &= 1608.75 + 600 + 600 \\cr \\text{Total Area} &\\approx 2808.75\\text{ cm}^2 \\end{aligned}\nThis is $2810\\text{ cm}^2$ to three significant figures (or $2809\\text{ cm}^2$ using the rounded angle $1.287\\text{ rad}$)."
    ],
    "pi_options": [
        {
            "ans": "$$2209\\text{ cm}^2$$",
            "feedback": "This error occurs if the area of the two congruent triangles is omitted, leaving only the area of the circular sector."
        },
        {
            "ans": "$$4019\\text{ cm}^2$$",
            "feedback": "This mistake is caused by using the incorrect angle $EBD \\approx 2.25\\text{ rad}$, which occurs if you subtract $\\angle ABE$ only once instead of twice from $\\pi$."
        },
        {
            "ans": "$$2850\\text{ cm}^2$$",
            "feedback": "This arises if degrees are used instead of radians to compute the sector area, or if the radians value was miscalculated."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Symmetry Angle Double Subtraction",
        "content": "A very common slip in symmetrical geometry problems is calculating $\\angle EBD = \\pi - \\angle ABE$. Always remember that there are two congruent right-angled triangles flanking the central sector, so you must subtract the base angle twice: $\\angle EBD = \\pi - 2\\angle ABE$."
    }
},
{
    "id": "004757",
    "board": "CCEA",
    "level": "A",
    "major_area": "Geometry",
    "topic": "Trigonometry",
    "subtopic": [
        "Circular Measure",
        "Pythagorean Triples",
        "Sector Area"
    ],
    "img": "images/Pure/004757.png",
    "question": "The diagram shows a decorative symmetrical plaque, $ABCDE$, consisting of a sector of a circle $BCD$ centred at $C$, together with two congruent right-angled triangles, $CAB$ and $CDE$, which are right-angled at $A$ and $E$ respectively.<br>The straight horizontal base $AE$ has a length of $32\\text{ cm}$, and $C$ is the midpoint of $AE$. The vertical edges are $AB = ED = 12\\text{ cm}$.<br><br><strong>(a)</strong> Find the angle $BCD$ in radians.<br><br><strong>(b)</strong> Find the total area of the plaque.",
    "steps": [
        "Since $C$ is the midpoint of $AE$, the adjacent base side is $AC = CE = \\dfrac{32}{2} = 16\\text{ cm}$. In the right-angled triangle $CAB$, use the tangent ratio to calculate the angle $\\angle ACB$:\n\\begin{aligned} \\tan(\\angle ACB) &= \\dfrac{ AB }{ AC } \\cr \\tan(\\angle ACB) &= \\dfrac{ 12 }{ 16 } \\cr \\angle ACB &= \\arctan\\left( \\dfrac{3}{4} \\right) \\cr \\angle ACB &\\approx 0.64350\\text{ rad} \\end{aligned}",
        "The horizontal base $AE$ is a straight line, so the angles sum to $\\pi$ radians. By symmetry, $\\angle DCE = \\angle ACB \\approx 0.64350\\text{ rad}$. Calculate the angle $BCD$:\n\\begin{aligned} \\angle BCD &= \\pi - 2\\angle ACB \\cr \\angle BCD &= \\pi - 2\\arctan\\left( \\dfrac{3}{4} \\right) \\cr \\angle BCD &\\approx 3.14159 - 1.28700 \\cr \\angle BCD &\\approx 1.855\\text{ rad} \\end{aligned}\nThis is $1.85\\text{ radians}$ to three significant figures.",
        "Find the radius $R$ of the sector $BCD$, which is the hypotenuse $BC$ of the right-angled triangle $CAB$, using Pythagoras' theorem (yielding a $12, 16, 20$ Pythagorean triple):\n\\begin{aligned} BC^2 &= AC^2 + AB^2 \\cr R^2 &= 16^2 + 12^2 \\cr R^2 &= 256 + 144 \\cr R^2 &= 400 \\cr R &= 20\\text{ cm} \\end{aligned}",
        "Calculate the area of the sector $BCD$ and the two congruent right-angled triangles to find the total area of the plaque:\n\\begin{aligned} \\text{Area of Sector } BCD &= \\dfrac{1}{2} R^2 \\theta \\cr \\text{Area of Sector } BCD &= \\dfrac{1}{2} \\left( 20^2 \\right) \\left( 1.85459 \\right) \\cr \\text{Area of Sector } BCD &\\approx 200 \\times 1.85459 \\cr \\text{Area of Sector } BCD &\\approx 370.92\\text{ cm}^2 \\cr\\cr \\text{Area of Triangle } CAB &= \\dfrac{1}{2} \\times 16 \\times 12 = 96\\text{ cm}^2 \\cr \\text{Area of Triangle } CDE &= 96\\text{ cm}^2 \\cr\\cr \\text{Total Area} &= 370.92 + 96 + 96 \\cr \\text{Total Area} &\\approx 562.92\\text{ cm}^2 \\end{aligned}\nThis is $563\\text{ cm}^2$ to three significant figures."
    ],
    "pi_options": [
        {
            "ans": "$$371\\text{ cm}^2$$",
            "feedback": "This error occurs if the area of the two flanking right-angled triangles is forgotten, leaving only the area of the circular sector."
        },
        {
            "ans": "$$692\\text{ cm}^2$$",
            "feedback": "This mistake is caused by using the incorrect angle $BCD \\approx 2.50\\text{ rad}$, which occurs if you subtract $\\angle ACB$ only once instead of twice from $\\pi$."
        },
        {
            "ans": "$$590\\text{ cm}^2$$",
            "feedback": "This arises from an arithmetic error during the sector area calculation, or if the radius $R$ was incorrectly calculated as $20.8\\text{ cm}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Spotting Pythagorean Triples",
        "content": "Pythagorean triples are extremely common in A-level geometry. Recognising that the sides $12$ and $16$ are multiples of the famous $3, 4, 5$ triple ($3 \\times 4 = 12$ and $4 \\times 4 = 16$) allows you to immediately deduce that the hypotenuse is $5 \\times 4 = 20\\text{ cm}$ without running through Pythagoras' theorem."
    }
},
{
    "id": "004758",
    "board": "CCEA",
    "level": "A",
    "major_area": "Geometry",
    "topic": "Trigonometry",
    "subtopic": [
        "Circular Measure",
        "Asymmetric Layouts",
        "Sector Area"
    ],
    "img": "images/Pure/004758.png",
    "question": "The diagram shows an emblem, $OABC$, consisting of a sector of a circle $OAB$ of radius $10\\text{ cm}$ centred at $O$, and a right-angled triangle $OAC$ which is right-angled at $A$.<br><br>The vertical edge $AC$ has a length of $10\\text{ cm}$. The total angle of the emblem $\\angle BOC$ is $2.0$ radians.<br><br><strong>(a)</strong> Find the angle $AOB$ of the sector in radians.<br><br><strong>(b)</strong> Find the total area of the emblem.",
    "steps": [
        "In the right-angled triangle $OAC$, the adjacent side is the radius $OA = 10\\text{ cm}$ and the opposite side is $AC = 10\\text{ cm}$. Use the tangent ratio to find the angle $\\angle AOC$:\n\\begin{aligned} \\tan(\\angle AOC) &= \\dfrac{ AC }{ OA } \\cr \\tan(\\angle AOC) &= \\dfrac{ 10 }{ 10 } \\cr \\angle AOC &= \\arctan(1) \\cr \\angle AOC &= \\dfrac{\\pi}{4} \\approx 0.78540\\text{ rad} \\end{aligned}",
        "The total angle of the emblem is given as $\\angle BOC = 2.0\\text{ rad}$. Subtract the angle $\\angle AOC$ to find the angle $AOB$ of the sector:\n\\begin{aligned} \\angle AOB &= \\angle BOC - \\angle AOC \\cr \\angle AOB &= 2.0 - 0.78540 \\cr \\angle AOB &\\approx 1.21460\\text{ rad} \\end{aligned}\nThis is $1.21\\text{ radians}$ to three significant figures.",
        "Calculate the area of the right-angled triangle $OAC$ and the sector $OAB$, then sum them to find the total area:\n\\begin{aligned} \\text{Area of Triangle } OAC &= \\dfrac{1}{2} \\times OA \\times AC \\cr \\text{Area of Triangle } OAC &= \\dfrac{1}{2} \\times 10 \\times 10 = 50\\text{ cm}^2 \\cr\\cr \\text{Area of Sector } OAB &= \\dfrac{1}{2} R^2 \\theta \\cr \\text{Area of Sector } OAB &= \\dfrac{1}{2} \\left( 10^2 \\right) \\left( 1.21460 \\right) \\cr \\text{Area of Sector } OAB &\\approx 50 \\times 1.21460 \\cr \\text{Area of Sector } OAB &\\approx 60.73\\text{ cm}^2 \\cr\\cr \\text{Total Area} &= 50 + 60.73 \\cr \\text{Total Area} &\\approx 110.73\\text{ cm}^2 \\end{aligned}\nThis is $111\\text{ cm}^2$ to three significant figures."
    ],
    "pi_options": [
        {
            "ans": "$$61\\text{ cm}^2$$",
            "feedback": "This error occurs if the area of the right-angled triangle $OAC$ is completely omitted, leaving only the area of the circular sector."
        },
        {
            "ans": "$$150\\text{ cm}^2$$",
            "feedback": "This mistake is caused by using the total angle of $2.0\\text{ rad}$ as the angle of the sector, failing to subtract the triangle angle $\\angle AOC$."
        },
        {
            "ans": "$$115\\text{ cm}^2$$",
            "feedback": "This arises if the sector angle is incorrectly rounded too early or if a sign error occurs during angle subtraction."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Isosceles Right-Angled Triangle Angle",
        "content": "When a right-angled triangle is isosceles (having both perpendicular sides equal, such as $OA = AC = 10\\text{ cm}$), the base angle is always exactly $45^\\circ$ or $\\dfrac{\\pi}{4}$ radians. Recognising this immediately saves you from needing to use a calculator to find the angle."
    }
},   
{
    "id": "004759",
    "board": "CCEA",
    "level": "A",
    "major_area": "Geometry",
    "topic": "Trigonometry",
    "subtopic": [
        "Circular Measure",
        "Asymmetric Layouts",
        "Sector Area"
    ],
    "img": "images/Pure/004759.png",
    "question": "The diagram shows a logo, $OABC$, consisting of a sector of a circle $OAB$ of radius $10\\text{ cm}$ centred at $O$, and a right-angled triangle $OBC$ which is right-angled at $B$.<br>The vertical edge $BC$ has a length of $24\\text{ cm}$. The total angle of the logo $\\angle AOC$ is $3.0$ radians.<br><br><strong>(a)</strong> Find the angle $AOB$ of the sector in radians.<br><br><strong>(b)</strong> Find the total area of the logo.",
    "steps": [
        "In the right-angled triangle $OBC$, the adjacent side is the radius $OB = 10\\text{ cm}$ and the opposite side is $BC = 24\\text{ cm}$. Use the tangent ratio to find the angle $\\angle BOC$:\n\\begin{aligned} \\tan(\\angle BOC) &= \\dfrac{ BC }{ OB } \\cr \\tan(\\angle BOC) &= \\dfrac{ 24 }{ 10 } \\cr \\angle BOC &= \\arctan(2.4) \\cr \\angle BOC &\\approx 1.17601\\text{ rad} \\end{aligned}",
        "The total angle of the logo is given as $\\angle AOC = 3.0\\text{ rad}$. Subtract the angle $\\angle BOC$ to find the angle $AOB$ of the sector:\n\\begin{aligned} \\angle AOB &= \\angle AOC - \\angle BOC \\cr \\angle AOB &= 3.0 - 1.17601 \\cr \\angle AOB &\\approx 1.82399\\text{ rad} \\end{aligned}\nThis is $1.82\\text{ radians}$ to three significant figures.",
        "Calculate the area of the right-angled triangle $OBC$ and the sector $OAB$, then sum them to find the total area:\n\\begin{aligned} \\text{Area of Triangle } OBC &= \\dfrac{1}{2} \\times OB \\times BC \\cr \\text{Area of Triangle } OBC &= \\dfrac{1}{2} \\times 10 \\times 24 = 120\\text{ cm}^2 \\cr\\cr \\text{Area of Sector } OAB &= \\dfrac{1}{2} R^2 \\theta \\cr \\text{Area of Sector } OAB &= \\dfrac{1}{2} \\left( 10^2 \\right) \\left( 1.82399 \\right) \\cr \\text{Area of Sector } OAB &\\approx 50 \\times 1.82399 \\cr \\text{Area of Sector } OAB &\\approx 91.20\\text{ cm}^2 \\cr\\cr \\text{Total Area} &= 120 + 91.20 \\cr \\text{Total Area} &\\approx 211.20\\text{ cm}^2 \\end{aligned}\nThis is $211\\text{ cm}^2$ to three significant figures."
    ],
    "pi_options": [
        {
            "ans": "$$91\\text{ cm}^2$$",
            "feedback": "This error occurs if the area of the right-angled triangle $OBC$ is completely omitted, leaving only the area of the circular sector."
        },
        {
            "ans": "$$270\\text{ cm}^2$$",
            "feedback": "This mistake is caused by using the total angle of $3.0\\text{ rad}$ as the angle of the sector, failing to subtract the triangle angle $\\angle BOC$."
        },
        {
            "ans": "$$218\\text{ cm}^2$$",
            "feedback": "This is caused by an arithmetic slip in the sector area calculation, or if the radius was incorrectly assumed to be the hypotenuse $OC = 26\\text{ cm}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Identifying Radius vs. Hypotenuse",
        "content": "Always make sure you identify which edge represents the radius of the sector. In this diagram, the sector is $OAB$, so the lines $OA$ and $OB$ are the radii ($10\\text{ cm}$). The line $OC$ is the hypotenuse of the right-angled triangle $OBC$ and is not equal to the radius. Confusing these two is a very common source of lost marks."
    }
},
{
    "id": "004760",
    "board": "CCEA",
    "level": "A",
    "major_area": "Geometry",
    "topic": "Trigonometry",
    "subtopic": [
        "Circular Measure",
        "Symmetrical layouts",
        "Perimeter"
    ],
    "img": "images/Pure/004760.png",
    "question": "The diagram shows a shield-shaped logo, $ABCDE$, consisting of a sector of a circle $EBD$ centred at $B$, together with two congruent right-angled triangles, $BAE$ and $BCD$, which are right-angled at $A$ and $C$ respectively.<br>The straight horizontal base $AC$ has a length of $160\\text{ cm}$, and the vertical edges are $AE = CD = 60\\text{ cm}$.<br><br><strong>(a)</strong> Find the angle $EBD$ in radians.<br><br><strong>(b)</strong> Find the outer perimeter of the shield (boundary $AE + AC + CD + \\text{arc } ED$).",
    "steps": [
        "By symmetry, $B$ is the midpoint of $AC$, so the adjacent side $AB = BC = \\dfrac{160}{2} = 80\\text{ cm}$. In the right-angled triangle $BAE$, use the tangent ratio to find the angle $\\angle ABE$:\n\\begin{aligned} \\tan(\\angle ABE) &= \\dfrac{ AE }{ AB } \\cr \\tan(\\angle ABE) &= \\dfrac{ 60 }{ 80 } \\cr \\angle ABE &= \\arctan(0.75) \\cr \\angle ABE &\\approx 0.64350\\text{ rad} \\end{aligned}",
        "The horizontal base $AC$ is a straight line, so the angles sum to $\\pi$ radians. By symmetry, $\\angle CBD = \\angle ABE \\approx 0.64350\\text{ rad}$. Calculate the angle $EBD$:\n\\begin{aligned} \\angle EBD &= \\pi - 2\\angle ABE \\cr \\angle EBD &= \\pi - 2(0.64350) \\cr \\angle EBD &\\approx 3.14159 - 1.28700 \\cr \\angle EBD &\\approx 1.855\\text{ rad} \\end{aligned}\nThis is $1.85\\text{ radians}$ to three significant figures.",
        "Find the radius $R$ of the sector $EBD$, which is the hypotenuse $BE$ of the right-angled triangle $BAE$, using Pythagoras' theorem (yielding a $60, 80, 100$ Pythagorean triple):\n\\begin{aligned} BE^2 &= AB^2 + AE^2 \\cr R^2 &= 80^2 + 60^2 \\cr R^2 &= 6400 + 3600 \\cr R^2 &= 10000 \\cr R &= 100\\text{ cm} \\end{aligned}",
        "Calculate the circular arc length $ED$ and sum the outer edges to find the total perimeter of the shield:\n\\begin{aligned} \\text{Arc Length } ED &= R\\theta \\cr \\text{Arc Length } ED &= 100 \\times 1.85459 \\cr \\text{Arc Length } ED &\\approx 185.46\\text{ cm} \\cr\\cr \\text{Total Perimeter} &= AE + AC + CD + \\text{Arc Length } ED \\cr \\text{Total Perimeter} &= 60 + 160 + 60 + 185.46 \\cr \\text{Total Perimeter} &\\approx 465.46\\text{ cm} \\end{aligned}\nThis is $465\\text{ cm}$ to three significant figures."
    ],
    "pi_options": [
        {
            "ans": "$$305\\text{ cm}$$",
            "feedback": "This error is caused by using the sector angle of $1.25\\text{ rad}$ instead of the correct $1.85\\text{ rad}$ to calculate the arc length, which occurs if you subtract $\\angle ABE$ only once from $\\pi$."
        },
        {
            "ans": "$$445\\text{ cm}$$",
            "feedback": "This mistake occurs if the horizontal base $AC = 160\\text{ cm}$ is incorrectly omitted or replaced by $AB + BC$ being counted differently during final boundary summation."
        },
        {
            "ans": "$$485\\text{ cm}$$",
            "feedback": "This arises if the straight line edges $AE$ and $CD$ are incorrectly added to the internal lines $BE$ and $BD$ instead of the base $AC$ during perimeter evaluation."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Boundary Perimeter Definitions",
        "content": "When calculating the outer perimeter of a composite shape, be careful not to include any internal lines. Here, $BE$ and $BD$ are internal construction lines (the radii of the sector). The outer boundary consists solely of the two vertical sides, the horizontal base, and the circular arc: $AE + AC + CD + \\text{arc } ED$."
    }
},
{
    "id": "004761",
    "board": "CCEA",
    "level": "A",
    "major_area": "Pure Mathematics",
    "topic": "Trigonometry",
    "subtopic": [
        "Double-Angle Identities",
        "Trigonometric Proofs"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Prove the identity:\n$$\\csc(2\\theta) + \\cot(2\\theta) \\equiv \\cot\\theta$$<br><br><strong>(b)</strong> Hence find the exact value of $\\cot\\left( \\dfrac{\\pi}{8} \\right)$.",
    "steps": [
        "Express the reciprocal trigonometric terms on the left-hand side (LHS) in terms of sine and cosine:\n\\begin{aligned} \\text{LHS} &= \\csc(2\\theta) + \\cot(2\\theta) \\cr \\text{LHS} &= \\dfrac{1}{ \\sin(2\\theta) } + \\dfrac{ \\cos(2\\theta) }{ \\sin(2\\theta) } \\cr \\text{LHS} &= \\dfrac{ 1 + \\cos(2\\theta) }{ \\sin(2\\theta) } \\end{aligned}",
        "Apply the double-angle identities $1 + \\cos(2\\theta) = 2\\cos^2\\theta$ and $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$ to simplify the fraction:\n\\begin{aligned} \\text{LHS} &= \\dfrac{ 2\\cos^2\\theta }{ 2\\sin\\theta\\cos\\theta } \\cr \\text{LHS} &= \\dfrac{ \\cos\\theta }{ \\sin\\theta } \\cr \\text{LHS} &= \\cot\\theta \\quad \\text{(RHS)} \\end{aligned}\nTherefore, the identity is proven.",
        "To find the exact value of $\\cot\\left( \\dfrac{\\pi}{8} \\right)$, let $\\theta = \\dfrac{\\pi}{8}$, which means $2\\theta = \\dfrac{\\pi}{4}$. Substitute these into the proven identity:\n\\begin{aligned} \\cot\\left( \\dfrac{\\pi}{8} \\right) &= \\csc\\left( \\dfrac{\\pi}{4} \\right) + \\cot\\left( \\dfrac{\\pi}{4} \\right) \\cr \\cot\\left( \\dfrac{\\pi}{8} \\right) &= \\dfrac{1}{ \\sin\\left( \\dfrac{\\pi}{4} \\right) } + \\dfrac{1}{ \\tan\\left( \\dfrac{\\pi}{4} \\right) } \\cr \\cot\\left( \\dfrac{\\pi}{8} \\right) &= \\dfrac{1}{ \\dfrac{1}{\\sqrt{2}} } + \\dfrac{1}{1} \\cr \\cot\\left( \\dfrac{\\pi}{8} \\right) &= \\sqrt{2} + 1 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$\\sqrt{2} - 1$$",
            "feedback": "This error is caused by using the subtraction identity $\\csc(2\\theta) - \\cot(2\\theta) \\equiv \\tan\\theta$ instead of the addition identity, resulting in the exact value for tangent instead of cotangent."
        },
        {
            "ans": "$$\\sqrt{3} + 1$$",
            "feedback": "This mistake occurs if the trigonometric values of $\\dfrac{\\pi}{4}$ are confused with those of $\\dfrac{\\pi}{6}$ or $\\dfrac{\\pi}{3}$ during evaluation."
        },
        {
            "ans": "$$1 - \\sqrt{2}$$",
            "feedback": "This is caused by a sign error when reciprocating the fraction $\\dfrac{1}{\\sqrt{2}}$, incorrectly yielding $-\\sqrt{2}$ instead of $+\\sqrt{2}$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Choosing the Right Cosine Double-Angle Form",
        "content": "There are three double-angle identities for $\\cos(2\\theta)$. When simplifying $1 + \\cos(2\\theta)$, always select $\\cos(2\\theta) = 2\\cos^2\\theta - 1$ because the $-1$ and $+1$ cancel out perfectly. Likewise, for $1 - \\cos(2\\theta)$, select $\\cos(2\\theta) = 1 - 2\\sin^2\\theta$ to cancel the constant."
    }
},
{
    "id": "004762",
    "board": "CCEA",
    "level": "A",
    "major_area": "Pure Mathematics",
    "topic": "Trigonometry",
    "subtopic": [
        "Double-Angle Identities",
        "Reciprocal Trigonometric Proofs"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Prove the identity:$$\\sec(2\\theta) + \\tan(2\\theta) \\equiv \\dfrac{\\cos\\theta + \\sin\\theta}{\\cos\\theta - \\sin\\theta}$$<br><br><strong>(b)</strong> Hence find the exact value of:$$\\dfrac{\\cos\\left( \\dfrac{\\pi}{12} \\right) + \\sin\\left( \\dfrac{\\pi}{12} \\right)}{\\cos\\left( \\dfrac{\\pi}{12} \\right) - \\sin\\left( \\dfrac{\\pi}{12} \\right)}$$",
    "steps": [
        "Express the reciprocal and tangent terms on the left-hand side (LHS) in terms of sine and cosine:\n\\begin{aligned} \\text{LHS} &= \\sec(2\\theta) + \\tan(2\\theta) \\cr \\text{LHS} &= \\dfrac{1}{ \\cos(2\\theta) } + \\dfrac{ \\sin(2\\theta) }{ \\cos(2\\theta) } \\cr \\text{LHS} &= \\dfrac{ 1 + \\sin(2\\theta) }{ \\cos(2\\theta) } \\end{aligned}",
        "Rewrite the numerator and denominator using trigonometric identities. Replace $1$ with $\\cos^2\\theta + \\sin^2\\theta$ and expand $\\sin(2\\theta)$ to factorise the expression:\n\\begin{aligned} 1 + \\sin(2\\theta) &= \\cos^2\\theta + \\sin^2\\theta + 2\\sin\\theta\\cos\\theta \\cr 1 + \\sin(2\\theta) &= \\left( \\cos\\theta + \\sin\\theta \\right)^2 \\cr\\cr \\cos(2\\theta) &= \\cos^2\\theta - \\sin^2\\theta \\cr \\cos(2\\theta) &= \\left( \\cos\\theta - \\sin\\theta \\right)\\left( \\cos\\theta + \\sin\\theta \\right) \\end{aligned}",
        "Substitute these factorised forms back into the fraction and cancel the common factor $(\\cos\\theta + \\sin\\theta)$:\n\\begin{aligned} \\text{LHS} &= \\dfrac{ \\left( \\cos\\theta + \\sin\\theta \\right)^2 }{ \\left( \\cos\\theta - \\sin\\theta \\right)\\left( \\cos\\theta + \\sin\\theta \\right) } \\cr \\text{LHS} &= \\dfrac{ \\cos\\theta + \\sin\\theta }{ \\cos\\theta - \\sin\\theta } \\quad \\text{(RHS)} \\end{aligned}\nTherefore, the identity is proven.",
        "To find the exact value of the given expression, let $\\theta = \\dfrac{\\pi}{12}$, which means $2\\theta = \\dfrac{\\pi}{6}$. Use the proven identity:\n\\begin{aligned} \\dfrac{\\cos\\left( \\dfrac{\\pi}{12} \\right) + \\sin\\left( \\dfrac{\\pi}{12} \\right)}{\\cos\\left( \\dfrac{\\pi}{12} \\right) - \\sin\\left( \\dfrac{\\pi}{12} \\right)} &= \\sec\\left( \\dfrac{\\pi}{6} \\right) + \\tan\\left( \\dfrac{\\pi}{6} \\right) \\cr &= \\dfrac{1}{ \\cos\\left( \\dfrac{\\pi}{6} \\right) } + \\tan\\left( \\dfrac{\\pi}{6} \\right) \\cr &= \\dfrac{1}{ \\dfrac{\\sqrt{3}}{2} } + \\dfrac{1}{\\sqrt{3}} \\cr &= \\dfrac{2}{\\sqrt{3}} + \\dfrac{1}{\\sqrt{3}} \\cr &= \\dfrac{3}{\\sqrt{3}} \\cr &= \\sqrt{3} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$\\dfrac{\\sqrt{3}}{3}$$",
            "feedback": "This error occurs if the final fraction $\\dfrac{3}{\\sqrt{3}}$ is simplified incorrectly as its reciprocal $\\dfrac{1}{\\sqrt{3}}$."
        },
        {
            "ans": "$$2 + \\sqrt{3}$$",
            "feedback": "This mistake is caused by using the incorrect angle $\\theta = \\dfrac{\\pi}{12}$ as the input of the double-angle side, evaluating $\\sec\\left( \\dfrac{\\pi}{12} \\right)$ incorrectly or performing an incorrect half-angle expansion."
        },
        {
            "ans": "$$\\sqrt{2}$$",
            "feedback": "This arises from an arithmetic error when adding the fractions, or if the exact trigonometric values of $30^\\circ$ were confused with those of $45^\\circ$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Spotting Perfect Square Trigonometric Quadratics",
        "content": "The expression $1 + \\sin(2\\theta)$ is a hidden perfect square quadratic that appears frequently in advanced A-level trigonometry. Since $1 \\equiv \\cos^2\\theta + \\sin^2\\theta$ and $\\sin(2\\theta) \\equiv 2\\sin\\theta\\cos\\theta$, we can always rewrite it as $(\\cos\\theta + \\sin\\theta)^2$. Memorising this pattern saves a significant amount of algebraic derivation."
    }
},
{
    "id": "004763",
    "board": "CCEA",
    "level": "A",
    "major_area": "Pure Mathematics",
    "topic": "Trigonometry",
    "subtopic": [
        "Trigonometric Identities",
        "Double-Angle Formulae"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Prove the identity:$$\\dfrac{2\\tan\\theta}{1 + \\tan^2\\theta} \\equiv \\sin(2\\theta)$$<br><br><strong>(b)</strong> Hence find the exact value of:\n$$\\dfrac{2\\tan\\left( \\dfrac{\\pi}{12} \\right)}{1 + \\tan^2\\left( \\dfrac{\\pi}{12} \\right)}$$",
    "steps": [
        "Express the left-hand side (LHS) using the Pythagorean identity $1 + \\tan^2\\theta \\equiv \\sec^2\\theta$:\n\\begin{aligned} \\text{LHS} &= \\dfrac{2\\tan\\theta}{ 1 + \\tan^2\\theta } \\cr \\text{LHS} &= \\dfrac{2\\tan\\theta}{ \\sec^2\\theta } \\end{aligned}",
        "Convert the tangent and secant terms into sine and cosine expressions to simplify the fraction:\n\\begin{aligned} \\text{LHS} &= \\dfrac{ 2\\left( \\dfrac{\\sin\\theta}{\\cos\\theta} \\right) }{ \\dfrac{1}{\\cos^2\\theta} } \\cr \\text{LHS} &= 2\\left( \\dfrac{\\sin\\theta}{\\cos\\theta} \\right) \\times \\cos^2\\theta \\cr \\text{LHS} &= 2\\sin\\theta\\cos\\theta \\cr \\text{LHS} &= \\sin(2\\theta) \\quad \\text{(RHS)} \\end{aligned}\nTherefore, the identity is proven.",
        "To find the exact value of the given expression, let $\\theta = \\dfrac{\\pi}{12}$, which means $2\\theta = \\dfrac{\\pi}{6}$. Substitute this into our proven identity:\n\\begin{aligned} \\dfrac{2\\tan\\left( \\dfrac{\\pi}{12} \\right)}{1 + \\tan^2\\left( \\dfrac{\\pi}{12} \\right)} &= \\sin\\left( 2 \\times \\dfrac{\\pi}{12} \\right) \\cr &= \\sin\\left( \\dfrac{\\pi}{6} \\right) \\cr &= \\dfrac{1}{2} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$\\dfrac{\\sqrt{3}}{2}$$",
            "feedback": "This error occurs if you evaluate $\\cos\\left( \\dfrac{\\pi}{6} \\right)$ instead of $\\sin\\left( \\dfrac{\\pi}{6} \\right)$ during final evaluation."
        },
        {
            "ans": "$$1$$",
            "feedback": "This mistake is caused by confusing $\\dfrac{\\pi}{6}$ with $\\dfrac{\\pi}{2}$ or making an algebraic slip during the division of sines and cosines."
        },
        {
            "ans": "$$\\dfrac{\\sqrt{2}}{2}$$",
            "feedback": "This is caused by confusing the exact trigonometric values of $\\dfrac{\\pi}{6}$ ($30^\\circ$) with those of $\\dfrac{\\pi}{4}$ ($45^\\circ$)."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: The Rational Sine Identity",
        "content": "This identity represents the rational parameterisation of the sine function, expressing $\\sin(2\\theta)$ purely in terms of $\\tan\\theta$. Knowing this and its cosine counterpart, $\\cos(2\\theta) \\equiv \\dfrac{1 - \\tan^2\\theta}{1 + \\tan^2\\theta}$, is extremely useful for solving calculus problems involving Weierstrass substitutions."
    }
},
{
    "id": "004764",
    "board": "CCEA",
    "level": "A",
    "major_area": "Pure Mathematics",
    "topic": "Trigonometry",
    "subtopic": [
        "Trigonometric Identities",
        "Double-Angle Formulae"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Prove the identity:\n$$\\dfrac{1 - \\tan^2\\theta}{1 + \\tan^2\\theta} \\equiv \\cos(2\\theta)$$<br><br><strong>(b)</strong> Hence find the exact value of:\n$$\\dfrac{1 - \\tan^2\\left( \\dfrac{\\pi}{8} \\right)}{1 + \\tan^2\\left( \\dfrac{\\pi}{8} \\right)}$$",
    "steps": [
        "Express the left-hand side (LHS) using the Pythagorean identity $1 + \\tan^2\\theta \\equiv \\sec^2\\theta$:\n\\begin{aligned} \\text{LHS} &= \\dfrac{1 - \\tan^2\\theta}{ 1 + \\tan^2\\theta } \\cr \\text{LHS} &= \\dfrac{1 - \\tan^2\\theta}{ \\sec^2\\theta } \\end{aligned}",
        "Convert the tangent and secant terms into sine and cosine expressions to simplify the fraction:\n\\begin{aligned} \\text{LHS} &= \\dfrac{ 1 - \\dfrac{\\sin^2\\theta}{\\cos^2\\theta} }{ \\dfrac{1}{\\cos^2\\theta} } \\cr \\text{LHS} &= \\left( 1 - \\dfrac{\\sin^2\\theta}{\\cos^2\\theta} \\right) \\times \\cos^2\\theta \\cr \\text{LHS} &= \\cos^2\\theta - \\sin^2\\theta \\cr \\text{LHS} &= \\cos(2\\theta) \\quad \\text{(RHS)} \\end{aligned}\nTherefore, the identity is proven.",
        "To find the exact value of the given expression, let $\\theta = \\dfrac{\\pi}{8}$, which means $2\\theta = \\dfrac{\\pi}{4}$. Substitute this into our proven identity:\n\\begin{aligned} \\dfrac{1 - \\tan^2\\left( \\dfrac{\\pi}{8} \\right)}{1 + \\tan^2\\left( \\dfrac{\\pi}{8} \\right)} &= \\cos\\left( 2 \\times \\dfrac{\\pi}{8} \\right) \\cr &= \\cos\\left( \\dfrac{\\pi}{4} \\right) \\cr &= \\dfrac{\\sqrt{2}}{2} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$\\dfrac{1}{2}$$",
            "feedback": "This error occurs if you evaluate $\\cos\\left( \\dfrac{\\pi}{3} \\right)$ instead of $\\cos\\left( \\dfrac{\\pi}{4} \\right)$ during final evaluation."
        },
        {
            "ans": "$$\\sqrt{2} - 1$$",
            "feedback": "This is caused by failing to apply the identity, instead trying to evaluate the numerator and denominator directly and making an algebraic error."
        },
        {
            "ans": "$$\\dfrac{\\sqrt{3}}{2}$$",
            "feedback": "This arises if the trigonometric angle is incorrectly evaluated as $\\dfrac{\\pi}{6}$ instead of $\\dfrac{\\pi}{4}$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Distributing Terms Over Fractions",
        "content": "When multiplying $\\left( 1 - \\dfrac{\\sin^2\\theta}{\\cos^2\\theta} \\right)$ by $\\cos^2\\theta$, make sure you distribute the $\\cos^2\\theta$ term across both parts inside the bracket: $1 \\times \\cos^2\\theta - \\dfrac{\\sin^2\\theta}{\\cos^2\\theta} \\times \\cos^2\\theta = \\cos^2\\theta - \\sin^2\\theta$. Forgetting to multiply the first constant of $1$ is a very common mistake."
    }
},
{
    "id": "004765",
    "board": "CCEA",
    "level": "A",
    "major_area": "Pure Mathematics",
    "topic": "Trigonometry",
    "subtopic": [
        "Trigonometric Identities",
        "Double-Angle Proofs"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Prove the identity:\n$$\\dfrac{\\sin(2\\theta)}{1 - \\cos(2\\theta)} \\equiv \\cot\\theta$$<br><br><strong>(b)</strong> Hence find the exact value of:\n$$\\dfrac{\\sin\\left( \\dfrac{\\pi}{4} \\right)}{1 - \\cos\\left( \\dfrac{\\pi}{4} \\right)}$$",
    "steps": [
        "Express the double-angle terms on the left-hand side (LHS) in terms of single-angle sine and cosine expressions using identities:\n\\begin{aligned} \\text{LHS} &= \\dfrac{ \\sin(2\\theta) }{ 1 - \\cos(2\\theta) } \\cr \\text{LHS} &= \\dfrac{ 2\\sin\\theta\\cos\\theta }{ 1 - \\left( 1 - 2\\sin^2\\theta \\right) } \\cr \\text{LHS} &= \\dfrac{ 2\\sin\\theta\\cos\\theta }{ 2\\sin^2\\theta } \\end{aligned}",
        "Cancel the common factors of $2$ and $\\sin\\theta$ in the numerator and denominator to simplify the expression:\n\\begin{aligned} \\text{LHS} &= \\dfrac{ \\cos\\theta }{ \\sin\\theta } \\cr \\text{LHS} &= \\cot\\theta \\quad \\text{(RHS)} \\end{aligned}\nTherefore, the identity is proven.",
        "To find the exact value of the given expression, let $2\\theta = \\dfrac{\\pi}{4}$, which means $\\theta = \\dfrac{\\pi}{8}$. Substitute this into our proven identity:\n\\begin{aligned} \\dfrac{\\sin\\left( \\dfrac{\\pi}{4} \\right)}{1 - \\cos\\left( \\dfrac{\\pi}{4} \\right)} &= \\cot\\left( \\dfrac{\\pi}{8} \\right) \\cr &= \\csc\\left( \\dfrac{\\pi}{4} \\right) + \\cot\\left( \\dfrac{\\pi}{4} \\right) \\cr &= \\sqrt{2} + 1 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$\\sqrt{2} - 1$$",
            "feedback": "This error occurs if you evaluate $\\tan\\left( \\dfrac{\\pi}{8} \\right)$ instead of $\\cot\\left( \\dfrac{\\pi}{8} \\right)$, which represents a reciprocal inversion mistake."
        },
        {
            "ans": "$$1 - \\sqrt{2}$$",
            "feedback": "This is caused by a sign error when rationalising the denominator of the fraction, resulting in a negative coefficient for the root."
        },
        {
            "ans": "$$\\sqrt{3} + 1$$",
            "feedback": "This mistake occurs if the exact values for $\\dfrac{\\pi}{4}$ are confused with those of $\\dfrac{\\pi}{6}$ or $\\dfrac{\\pi}{3}$ during evaluation."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Eliminating Constants with Double-Angles",
        "content": "To simplify $1 - \\cos(2\\theta)$, we choose the double-angle identity $\\cos(2\\theta) = 1 - 2\\sin^2\\theta$. This yields $1 - (1 - 2\\sin^2\\theta) = 2\\sin^2\\theta$, effectively eliminating the constant $1$. Choosing either of the other two forms for $\\cos(2\\theta)$ would keep a constant term in the denominator, making simplification much more difficult."
    }
},
{
    "id": "004766",
    "board": "CCEA",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "Inverse Functions",
        "Domain and Range",
        "Modulus Graphs",
        "Composites",
        "Curve Transformations"
    ],
    "img": false,
    "question": "<strong>Part (a)</strong><br>A function $f$ is defined by:\n$$f(x) = x^2 - 5, \\quad x \\in \\mathbb{ R }, \\quad x \\ge 0$$<br><strong>(i)</strong> State the range of the function $f(x)$.<br><strong>(ii)</strong> Find the inverse function $f^{-1}(x)$, clearly stating its domain.<br><br><strong>Part (b)</strong><br>A function $g$ is defined by:\n$$g(x) = |x - 2|, \\quad x \\in \\mathbb{ R }$$<br><strong>(i)</strong> Sketch the graph of $y = g(x)$.<br><strong>(ii)</strong> Find the composite function $gf(x)$.<br><br><strong>Part (c)</strong><br>The graph of the function $y = h(x)$ is sketched in the diagram below. Point $Q$ lies on the $y$-axis at $(0, 6)$ and point $P$ lies at $(3, 3)$. For $x \\ge 3$, the graph is a horizontal straight line.<br><br><img src='images/Pure/004766.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br><strong>(i)</strong> On separate axes, sketch the graph of:\n$$y = \\dfrac{1}{3}h(3x)$$\nand clearly label the images of the points $P$ and $Q$.<br><br><strong>(ii)</strong> On separate axes, sketch the graph of:\n$$y = 6 - h(x)$$\nand clearly label the images of the points $P$ and $Q$.",
    "steps": [
        "Find the range of $f(x)$ by considering its domain $x \\ge 0$:\n\\begin{aligned} x &\\ge 0 \\cr x^2 &\\ge 0 \\cr x^2 - 5 &\\ge -5 \\end{aligned}\nTherefore, the range of the function is $f(x) \\ge -5$.",
        "Find the inverse function $f^{-1}(x)$ by setting $y = f(x)$ and rearranging to make $x$ the subject:\n\\begin{aligned} y &= x^2 - 5 \\cr x^2 &= y + 5 \\cr x &= \\sqrt{ y + 5 } \\end{aligned}\nSince the domain of $f(x)$ is restricted to $x \\ge 0$, we select the positive square root. Swap the variables to express the inverse function:\n\\begin{aligned} f^{-1}(x) &= \\sqrt{ x + 5 } \\end{aligned}\nThe domain of the inverse function $f^{-1}(x)$ is identical to the range of the original function $f(x)$, which is $x \\ge -5$.",
        "To sketch the modulus graph $y = g(x) = |x - 2|$, start with the linear graph $y = x - 2$ and reflect any negative output values (below the $x$-axis) upwards. This creates a symmetrical V-shape with its vertex at the $x$-intercept $(2, 0)$ and a $y$-intercept at $(0, 2)$:\n<br><br><img src='images/Pure/004766_ans1.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "Find the composite function $gf(x)$ by substituting the expression for $f(x)$ into $g(x)$:\n\\begin{aligned} gf(x) &= g\\left( f(x) \\right) \\cr gf(x) &= g\\left( x^2 - 5 \\right) \\cr gf(x) &= |\\left( x^2 - 5 \\right) - 2| \\cr gf(x) &= |x^2 - 7| \\end{aligned}",
        "For the transformation $y = \\dfrac{1}{3}h(3x)$, the graph of $h(x)$ undergoes a horizontal compression of scale factor $\\dfrac{1}{3}$ and a vertical compression of scale factor $\\dfrac{1}{3}$. Multiply the $x$-coordinates by $\\dfrac{1}{3}$ and the $y$-coordinates by $\\dfrac{1}{3}$:\n\\begin{aligned} Q(0, 6) &\\to Q'\\left( 0 \\times \\dfrac{1}{3}, 6 \\times \\dfrac{1}{3} \\right) = Q'(0, 2) \\cr P(3, 3) &\\to P'\\left( 3 \\times \\dfrac{1}{3}, 3 \\times \\dfrac{1}{3} \\right) = P'(1, 1) \\end{aligned}\nThe horizontal straight line segment now lies along $y = 1$ for $x \\ge 1$:\n<br><br><img src='images/Pure/004766_ans2.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "For the transformation $y = 6 - h(x) = -h(x) + 6$, the graph of $h(x)$ undergoes a reflection in the $x$-axis followed by a vertical translation upwards of $6$ units:\n\\begin{aligned} Q(0, 6) &\\to (0, -6) \\to Q'(0, -6 + 6) = Q'(0, 0) \\cr P(3, 3) &\\to (3, -3) \\to P'(3, -3 + 6) = P'(3, 3) \\end{aligned}\nThe horizontal line segment remains along $y = 3$ for $x \\ge 3$:\n<br><br><img src='images/Pure/004766_ans3.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>"
    ],
    "pi_options": [
        {
            "ans": "$$gf(x) = |x^2 - 3|$$",
            "feedback": "This error occurs if the subtraction inside the modulus is computed incorrectly as -5 + 2 instead of -5 - 2."
        },
        {
            "ans": "$$gf(x) = x^2 - 7$$",
            "feedback": "This mistake is caused by completely omitting the modulus brackets from the composite function gf(x)."
        },
        {
            "ans": "$$gf(x) = |x^2 - 5| - 2$$",
            "feedback": "This arises if the functions are composed in the incorrect order or if the modulus operation is misapplied to f(x) only."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Inverse Function Domain Rule",
        "content": "Always remember the golden rule of inverse functions: the domain of $f^{-1}(x)$ is exactly equal to the range of $f(x)$. Never try to find the domain of the inverse by looking at its algebraic formula alone, as this can lead to forgetting critical domain restrictions (like $x \\ge -5$ for $\\sqrt{x+5}$)."
    }
},
{
    "id": "004767",
    "board": "CCEA",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "Rational Functions",
        "Modulus Graph Reflections",
        "Composites",
        "Triangle Wave Transformations"
    ],
    "img": false,
    "question": "<strong>Part (a)</strong><br>A function $f$ is defined by:\n$$f(x) = \\dfrac{4}{x - 1}, \\quad x \\in \\mathbb{ R }, \\quad x > 1$$<br><strong>(i)</strong> State the range of the function $f(x)$.<br><strong>(ii)</strong> Find the inverse function $f^{-1}(x)$, clearly stating its domain.<br><br><strong>Part (b)</strong><br>A function $g$ is defined by:\n$$g(x) = 4 - |x - 2|, \\quad x \\in \\mathbb{ R }$$<br><strong>(i)</strong> Sketch the graph of $y = g(x)$.<br><strong>(ii)</strong> Find the composite function $gf(x)$.<br><br><strong>Part (c)</strong><br>The graph of the symmetrical function $y = h(x)$ is sketched in the diagram below. The peak of the triangle wave is at point $P(0, 4)$ and the right-hand $x$-intercept is at point $Q(4, 0)$.<br><br><img src='images/Pure/004767.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br><strong>(i)</strong> On separate axes, sketch the graph of:\n$$y = \\dfrac{1}{4}h(2x)$$\nand clearly label the images of the points $P$ and $Q$.<br><br><strong>(ii)</strong> On separate axes, sketch the graph of:\n$$y = 2h(x) - 1$$\nand clearly label the images of the points $P$ and $Q$.",
    "steps": [
        "Find the range of $f(x)$ by considering the behavior of the fraction on the domain $x > 1$. As $x \\to 1$ from the right, the denominator $x - 1$ becomes a very small positive number, so $f(x) \\to \\infty$. As $x \\to \\infty$, the denominator becomes extremely large, so $f(x) \\to 0$. Since the numerator is positive and $x - 1 > 0$, the function values are always strictly positive:\n\\begin{aligned} \\text{Range: } f(x) > 0 \\end{aligned}",
        "Find the inverse function $f^{-1}(x)$ by setting $y = f(x)$ and rearranging to make $x$ the subject:\n\\begin{aligned} y &= \\dfrac{4}{ x - 1 } \\cr x - 1 &= \\dfrac{4}{y} \\cr x &= \\dfrac{4}{y} + 1 \\end{aligned}\nSwap the variables to express the inverse function:\n\\begin{aligned} f^{-1}(x) &= \\dfrac{4}{x} + 1 \\end{aligned}\nThe domain of the inverse function $f^{-1}(x)$ is the range of the original function $f(x)$, which is $x > 0$.",
        "To sketch $y = 4 - |x - 2|$, start with the standard modulus graph $y = |x - 2|$. The negative sign in front of the modulus reflects the V-shape downwards, and the $+4$ translates the entire graph vertically upwards by $4$ units. This results in an inverted V-shape with its vertex at $(2, 4)$, a $y$-intercept at $(0, 2)$, and $x$-intercepts at $(-2, 0)$ and $(6, 0)$:\n<br><br><img src='images/Pure/004767_ans1.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "Find the composite function $gf(x)$ by substituting the expression for $f(x)$ into $g(x)$ and simplifying the fraction inside the modulus:\n\\begin{aligned} gf(x) &= g\\left( f(x) \\right) \\cr gf(x) &= 4 - \\left| \\dfrac{4}{ x - 1 } - 2 \\right| \\cr gf(x) &= 4 - \\left| \\dfrac{ 4 - 2(x - 1) }{ x - 1 } \\right| \\cr gf(x) &= 4 - \\left| \\dfrac{ 4 - 2x + 2 }{ x - 1 } \\right| \\cr gf(x) &= 4 - \\left| \\dfrac{ 6 - 2x }{ x - 1 } \\right| \\end{aligned}",
        "For the transformation $y = \\dfrac{1}{4}h(2x)$, the graph of $h(x)$ undergoes a horizontal compression of scale factor $\\dfrac{1}{2}$ and a vertical compression of scale factor $\\dfrac{1}{4}$. Multiply the $x$-coordinates by $\\dfrac{1}{2}$ and the $y$-coordinates by $\\dfrac{1}{4}$:\n\\begin{aligned} P(0, 4) &\\to P'\\left( 0 \\times \\dfrac{1}{2}, 4 \\times \\dfrac{1}{4} \\right) = P'(0, 1) \\cr Q(4, 0) &\\to Q'\\left( 4 \\times \\dfrac{1}{2}, 0 \\times \\dfrac{1}{4} \\right) = Q'(2, 0) \\end{aligned}\nThis produces a compressed triangle wave on the domain $[-2, 2]$:\n<br><br><img src='images/Pure/004767_ans2.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "For the transformation $y = 2h(x) - 1$, the graph of $h(x)$ undergoes a vertical stretch of scale factor $2$ followed by a vertical translation downwards of $1$ unit:\n\\begin{aligned} P(0, 4) &\\to (0, 8) \\to P'(0, 8 - 1) = P'(0, 7) \\cr Q(4, 0) &\\to (4, 0) \\to Q'(4, 0 - 1) = Q'(4, -1) \\end{aligned}\nThe left-hand intercept similarly moves from $(-4, 0)$ to $(-4, -1)$:\n<br><br><img src='images/Pure/004767_ans3.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>"
    ],
    "pi_options": [
        {
            "ans": "$$gf(x) = 4 - \\left| \\dfrac{ 2 - 2x }{ x - 1 } \\right|$$",
            "feedback": "This error is caused by a sign error when expanding -2(x - 1) inside the numerator as -2x - 2 instead of -2x + 2."
        },
        {
            "ans": "$$gf(x) = 4 - \\left| \\dfrac{4}{ x - 1 } \\right| - 2$$",
            "feedback": "This mistake occurs if the composite structure is misapplied, subtracting 2 outside of the modulus bracket instead of composing the terms correctly."
        },
        {
            "ans": "$$gf(x) = 4 - \\left| \\dfrac{6 - 2x }{ x } \\right|$$",
            "feedback": "This arises if the denominator of the fraction inside the modulus is incorrectly modified during algebraic simplification."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Inverted Modulus Graph Transformations",
        "content": "For equations of the form $y = a - b|x - c|$, the vertex of the inverted V-shape is always located at the coordinate $(c, a)$. The graph opens downwards because of the negative coefficient $-b$. Finding the $x$-intercepts by setting $y = 0$ provides extra landmark coordinates that ensure your sketch is highly accurate."
    }
},
{
    "id": "004768",
    "board": "CCEA",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "Quadratic Modulus Graphs",
        "Linear Inverses",
        "Composites",
        "S-Curve Transformations"
    ],
    "img": false,
    "question": "<strong>Part (a)</strong><br>A function $f$ is defined by:\n$$f(x) = 2x - 3, \\quad x \\in \\mathbb{ R }$$<br><strong>(i)</strong> State the range of the function $f(x)$.<br><strong>(ii)</strong> Find the inverse function $f^{-1}(x)$, clearly stating its domain.<br><br><strong>Part (b)</strong><br>A function $g$ is defined by:\n$$g(x) = |x^2 - 4|, \\quad x \\in \\mathbb{ R }$$<br><strong>(i)</strong> Sketch the graph of $y = g(x)$.<br><strong>(ii)</strong> Find the composite function $gf(x)$.<br><br><strong>Part (c)</strong><br>The graph of the function $y = h(x)$ is sketched in the diagram below. Point $Q$ lies at $(-3, -2)$ and point $P$ lies at $(3, 4)$. For $x \\ge 3$, the graph is a horizontal straight line.<br><br><img src='images/Pure/004768.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br><strong>(i)</strong> On separate axes, sketch the graph of:\n$$y = h(-x)$$\nand clearly label the images of the points $P$ and $Q$.<br><br><strong>(ii)</strong> On separate axes, sketch the graph of:\n$$y = |h(x)|$$\nand clearly label the images of the points $P$ and $Q$.",
    "steps": [
        "Since $f(x)$ is a linear function with a domain of all real numbers ($x \\in \\mathbb{ R }$), its outputs are also unrestricted:\n\\begin{aligned} \\text{Range: } f(x) \\in \\mathbb{ R } \\end{aligned}",
        "Find the inverse function $f^{-1}(x)$ by setting $y = f(x)$ and rearranging to make $x$ the subject:\n\\begin{aligned} y &= 2x - 3 \\cr 2x &= y + 3 \\cr x &= \\dfrac{ y + 3 }{ 2 } \\end{aligned}\nSwap the variables to express the inverse function:\n\\begin{aligned} f^{-1}(x) &= \\dfrac{ x + 3 }{ 2 } \\end{aligned}\nThe domain of the inverse function $f^{-1}(x)$ is identical to the range of the original function, which is $x \\in \\mathbb{ R }$.",
        "To sketch $y = |x^2 - 4|$, start with the quadratic parabola $y = x^2 - 4$. The modulus operation reflects any negative part of the curve (the section between the $x$-intercepts $-2$ and $2$, which is below the $x$-axis) upwards. This creates a symmetrical W-shaped curve with $x$-intercepts at $(-2, 0)$ and $(2, 0)$, and a local maximum at $(0, 4)$:\n<br><br><img src='images/Pure/004768_ans1.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "Find the composite function $gf(x)$ by substituting the expression for $f(x)$ into $g(x)$ and expanding the quadratic expression:\n\\begin{aligned} gf(x) &= g\\left( f(x) \\right) \\cr gf(x) &= |\\left( 2x - 3 \\right)^2 - 4| \\cr gf(x) &= |\\left( 4x^2 - 12x + 9 \\right) - 4| \\cr gf(x) &= |4x^2 - 12x + 5| \\end{aligned}",
        "For the transformation $y = h(-x)$, the graph of $h(x)$ is reflected horizontally in the $y$-axis. Multiply the $x$-coordinates by $-1$ while keeping the $y$-coordinates the same:\n\\begin{aligned} Q(-3, -2) &\\to Q'(3, -2) \\cr P(3, 4) &\\to P'(-3, 4) \\end{aligned}\nThe horizontal straight line segment now lies along $y = 4$ for $x \\le -3$:\n<br><br><img src='images/Pure/004768_ans2.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "For the transformation $y = |h(x)|$, any negative $y$-values on the graph of $h(x)$ are reflected vertically across the $x$-axis into positive $y$-values. The positive portion of the graph remains unchanged, and the negative section (from $x = -3$ to $x = 0$) is reflected upwards:\n\\begin{aligned} Q(-3, -2) &\\to Q'(-3, 2) \\cr P(3, 4) &\\to P'(3, 4) \\quad \\text{(remains unchanged)} \\end{aligned}\nThe horizontal straight line segment remains along $y = 4$ for $x \\ge 3$:\n<br><br><img src='images/Pure/004768_ans3.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>"
    ],
    "pi_options": [
        {
            "ans": "$$gf(x) = |4x^2 - 12x + 13|$$",
            "feedback": "This error occurs if +9 and -4 are incorrectly added as +13 instead of +5 inside the modulus brackets."
        },
        {
            "ans": "$$gf(x) = |4x^2 - 6x + 5|$$",
            "feedback": "This mistake is caused by a quadratic expansion slip, incorrectly writing the middle term of (2x-3)^2 as -6x instead of -12x."
        },
        {
            "ans": "$$gf(x) = |2x^2 - 7|$$",
            "feedback": "This arises if the binomial term (2x-3)^2 is incorrectly expanded as 2x^2 - 9 or if other basic algebra rules are violated."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: The W-Shape Quadratic Reflection",
        "content": "When sketching the modulus of a quadratic function $y = |ax^2 + bx + c|$, first sketch the standard parabola. Any portion of the curve that lies below the $x$-axis must be reflected vertically across the $x$-axis. The vertex $(h, k)$ below the axis becomes a smooth local maximum at $(h, |k|)$."
    }
},
{
    "id": "004769",
    "board": "CCEA",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "Exponential Modulus Graphs",
        "Logarithmic Inverses",
        "Composites",
        "Dome Curve Transformations"
    ],
    "img": false,
    "question": "<strong>Part (a)</strong><br>A function $f$ is defined by:\n$$f(x) = 2 + \\ln x, \\quad x \\in \\mathbb{ R }, \\quad x > 0$$<br><strong>(i)</strong> State the range of the function $f(x)$.<br><strong>(ii)</strong> Find the inverse function $f^{-1}(x)$, clearly stating its domain.<br><br><strong>Part (b)</strong><br>A function $g$ is defined by:\n$$g(x) = |e^x - 3|, \\quad x \\in \\mathbb{ R }$$<br><strong>(i)</strong> Sketch the graph of $y = g(x)$.<br><strong>(ii)</strong> Find the composite function $gf(x)$.<br><br><strong>Part (c)</strong><br>The graph of the function $y = h(x)$ is sketched in the diagram below. Point $Q$ lies at $(-4, 0)$ and point $P$ lies at $(0, 5)$. For $0 \\le x \\le 4$, the graph is a horizontal straight line.<br><br><img src='images/Pure/004769.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br><strong>(i)</strong> On separate axes, sketch the graph of:\n$$y = -h(x)$$\nand clearly label the images of the points $P$ and $Q$.<br><br><strong>(ii)</strong> On separate axes, sketch the graph of:\n$$y = h(2x) + 1$$\nand clearly label the images of the points $P$ and $Q$.",
    "steps": [
        "The natural logarithm function $\\ln x$ has a range of all real numbers for the domain $x > 0$. Therefore, adding a vertical translation of $2$ does not restrict the outputs:\n\\begin{aligned} \\text{Range: } f(x) \\in \\mathbb{ R } \\end{aligned}",
        "Find the inverse function $f^{-1}(x)$ by setting $y = f(x)$ and rearranging to make $x$ the subject:\n\\begin{aligned} y &= 2 + \\ln x \\cr \\ln x &= y - 2 \\cr x &= e^{ y - 2 } \\end{aligned}\nSwap the variables to express the inverse function:\n\\begin{aligned} f^{-1}(x) &= e^{ x - 2 } \\end{aligned}\nThe domain of the inverse function $f^{-1}(x)$ is identical to the range of the original function, which is $x \\in \\mathbb{ R }$.",
        "To sketch $y = |e^x - 3|$, start with the exponential curve $y = e^x - 3$. This starting curve has a horizontal asymptote at $y = -3$, a $y$-intercept at $(0, -2)$, and an $x$-intercept at $(\ln 3, 0)$. The modulus operation reflects the negative portion below the $x$-axis upwards. Consequently, the horizontal asymptote reflections to $y = 3$, the $y$-intercept reflects to $(0, 2)$, and the curve pivots upwards from the $x$-intercept $(\ln 3, 0)$:\n<br><br><img src='images/Pure/004769_ans1.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "Find the composite function $gf(x)$ by substituting the expression for $f(x)$ into $g(x)$ and simplifying using exponential-logarithmic cancellation laws:\n\\begin{aligned} gf(x) &= g\\left( f(x) \\right) \\cr gf(x) &= |e^{ 2 + \\ln x } - 3| \\cr gf(x) &= |e^2 \\cdot e^{ \\ln x } - 3| \\cr gf(x) &= |x e^2 - 3| \\end{aligned}\nThis is valid for the domain $x > 0$.",
        "For the transformation $y = -h(x)$, the graph of $h(x)$ is reflected vertically in the $x$-axis. Multiply the $y$-coordinates by $-1$ while keeping the $x$-coordinates the same:\n\\begin{aligned} Q(-4, 0) &\\to Q'(-4, 0) \\cr P(0, 5) &\\to P'(0, -5) \\end{aligned}\nThe horizontal straight line segment now lies along $y = -5$ for $x \\ge 0$:\n<br><br><img src='images/Pure/004769_ans2.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "For the transformation $y = h(2x) + 1$, the graph of $h(x)$ undergoes a horizontal compression of scale factor $\\dfrac{1}{2}$ followed by a vertical translation upwards of $1$ unit:\n\\begin{aligned} Q(-4, 0) &\\to (-2, 0) \\to Q'(-2, 1) \\cr P(0, 5) &\\to (0, 5) \\to P'(0, 5 + 1) = P'(0, 6) \\end{aligned}\nThe horizontal line segment now begins at $P'(0, 6)$ and extends to $x = 2$ along the line $y = 6$:\n<br><br><img src='images/Pure/004769_ans3.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>"
    ],
    "pi_options": [
        {
            "ans": "$$gf(x) = |e^{2x} - 3|$$",
            "feedback": "This error occurs if the power rule of exponents is misapplied, incorrectly assuming that e^(2 + ln x) = e^(2x)."
        },
        {
            "ans": "$$gf(x) = |(x + 2)e^2 - 3|$$",
            "feedback": "This mistake is caused by a failure to apply index laws correctly, misinterpreting e^(2 + ln x) as e^2(2 + x) or similar."
        },
        {
            "ans": "$$gf(x) = |xe^2| - 3$$",
            "feedback": "This arises from a failure to keep the entire composed expression inside the modulus brackets."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Asymptote Reflections in Modulus Graphs",
        "content": "When sketching the modulus of a function with a horizontal asymptote (like $y = e^x - 3$, which has an asymptote at $y = -3$), do not forget that the asymptote itself must be reflected! The horizontal line $y = -3$ reflects across the $x$-axis to become $y = 3$. Drawing this reflected asymptote is a key requirement to secure full marks."
    }
},
{
    "id": "004770",
    "board": "CCEA",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "Rational Modulus Graphs",
        "Linear Inverses",
        "Composites",
        "Segmented Curve Transformations"
    ],
    "img": false,
    "question": "<strong>Part (a)</strong><br>A function $f$ is defined by:\n$$f(x) = 3x - 1, \\quad x \\in \\mathbb{ R }$$<br><strong>(i)</strong> State the range of the function $f(x)$.<br><strong>(ii)</strong> Find the inverse function $f^{-1}(x)$, clearly stating its domain.<br><br><strong>Part (b)</strong><br>A function $g$ is defined by:\n$$g(x) = \\left| \\dfrac{2}{x} - 1 \\right|, \\quad x \\in \\mathbb{ R }, \\quad x \\ne 0$$<br><strong>(i)</strong> Sketch the graph of $y = g(x)$.<br><strong>(ii)</strong> Find the composite function $gf(x)$.<br><br><strong>Part (c)</strong><br>The graph of the function $y = h(x)$ is sketched in the diagram below. Point $Q$ lies on the $y$-axis at $(0, 2)$ and point $P$ lies at $(4, -2)$. For $x \\ge 4$, the graph is a horizontal straight line.<br><br><img src='images/Pure/004770.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br><strong>(i)</strong> On separate axes, sketch the graph of:\n$$y = h(x - 3)$$\nand clearly label the images of the points $P$ and $Q$.<br><br><strong>(ii)</strong> On separate axes, sketch the graph of:\n$$y = |h(x)|$$\nand clearly label the images of the points $P$ and $Q$.",
    "steps": [
        "Since $f(x)$ is a linear function with a domain of all real numbers ($x \\in \\mathbb{ R }$), its outputs are also unrestricted:\n\\begin{aligned} \\text{Range: } f(x) \\in \\mathbb{ R } \\end{aligned}",
        "Find the inverse function $f^{-1}(x)$ by setting $y = f(x)$ and rearranging to make $x$ the subject:\n\\begin{aligned} y &= 3x - 1 \\cr 3x &= y + 1 \\cr x &= \\dfrac{ x + 1 }{ 3 } \\end{aligned}\nSwap the variables to express the inverse function:\n\\begin{aligned} f^{-1}(x) &= \\dfrac{ x + 1 }{ 3 } \\end{aligned}\nThe domain of the inverse function $f^{-1}(x)$ is identical to the range of the original function, which is $x \\in \\mathbb{ R }$.",
        "To sketch $y = \\left| \\dfrac{2}{x} - 1 \\right|$, start with the rational reciprocal curve $y = \\dfrac{2}{x} - 1$. This starting curve has a vertical asymptote at $x = 0$, a horizontal asymptote at $y = -1$, and an $x$-intercept at $(2, 0)$. The modulus operation reflects any negative portions (the parts below the $x$-axis) upwards. This reflects the horizontal asymptote to $y = 1$, while the vertical asymptote at $x = 0$ remains unchanged. The curve then pivots upwards from the $x$-intercept at $(2, 0)$:\n<br><br><img src='images/Pure/004770_ans1.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "Find the composite function $gf(x)$ by substituting the expression for $f(x)$ into $g(x)$ and writing it over a common denominator:\n\\begin{aligned} gf(x) &= g\\left( f(x) \\right) \\cr gf(x) &= \\left| \\dfrac{2}{ 3x - 1 } - 1 \\right| \\cr gf(x) &= \\left| \\dfrac{ 2 - (3x - 1) }{ 3x - 1 } \\right| \\cr gf(x) &= \\left| \\dfrac{ 2 - 3x + 1 }{ 3x - 1 } \\right| \\cr gf(x) &= \\left| \\dfrac{ 3 - 3x }{ 3x - 1 } \\right| \\end{aligned}\nThis is valid for the domain $x \\ne \\dfrac{1}{3}$.",
        "For the transformation $y = h(x - 3)$, the graph of $h(x)$ is translated horizontally to the right by $3$ units. Add $3$ to the $x$-coordinates while keeping the $y$-coordinates the same:\n\\begin{aligned} Q(0, 2) &\\to Q'(3, 2) \\cr P(4, -2) &\\to P'(7, -2) \\end{aligned}\nThe horizontal straight line segment now lies along $y = -2$ for $x \\ge 7$:\n<br><br><img src='images/Pure/004770_ans2.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "For the transformation $y = |h(x)|$, any negative $y$-values on the graph of $h(x)$ are reflected vertically across the $x$-axis into positive $y$-values. The positive portion of the graph (from $x = 0$ to $x = 3$) remains unchanged, while the negative portion (from $x = 3$ to $x \to \\infty$) is reflected upwards:\n\\begin{aligned} Q(0, 2) &\\to Q'(0, 2) \\quad \\text{(remains unchanged)} \\cr P(4, -2) &\\to P'(4, 2) \\end{aligned}\nThe horizontal straight line segment now lies along $y = 2$ for $x \\ge 4$:\n<br><br><img src='images/Pure/004770_ans3.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>"
    ],
    "pi_options": [
        {
            "ans": "$$gf(x) = \\left| \\dfrac{ 1 - 3x }{ 3x - 1 } \\right|$$",
            "feedback": "This error is caused by a sign mistake when expanding the numerator, incorrectly subtracting the +1 term instead of adding it when subtracting the fraction."
        },
        {
            "ans": "$$gf(x) = \\left| \\dfrac{2}{ 3x - 2 } \\right|$$",
            "feedback": "This mistake occurs if the subtraction of 1 is applied inside the fraction's denominator directly instead of finding a common denominator."
        },
        {
            "ans": "$$gf(x) = \\left| \\dfrac{ 3 - 3x }{ 3x } \\right|$$",
            "feedback": "This arises from a simplification error where the denominator 3x - 1 is incorrectly reduced to 3x."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Reciprocal Graph Modulus Asymptotes",
        "content": "When applying a modulus transformation to rational curves of the form $y = \\left| \\dfrac{a}{x} + b \\right|$, always sketch the asymptotes first. If $b < 0$, the horizontal asymptote at $y = b$ is reflected across the $x$-axis to become $y = |b|$. The vertical asymptote at $x = 0$ is unaffected because it does not cross the $y$-axis."
    }
},
{
    "id": "004771",
    "board": "CCEA",
    "level": "A",
    "major_area": "Trigonometry",
    "topic": "Trigonometric Identities",
    "subtopic": [
        "R-formula",
        "Trigonometric Optimisation"
    ],
    "img": false,
    "question": "The expression $5 \\sin x + 12 \\cos x$ can be written in the form $R \\sin(x + \\alpha)$, where $R$ is an integer and $0^\\circ < \\alpha < 90^\\circ$.<br><br><strong>(i)</strong> Find the values of $R$ and $\\alpha$.<br><br><strong>(ii)</strong> Hence, find the maximum value of $g(x) = \\dfrac{ 24 }{ 5 \\sin x + 12 \\cos x + 15 }$ and the smallest positive value of $x$ at which this maximum occurs.",
    "steps": [
        "To write $5 \\sin x + 12 \\cos x$ in the form $R \\sin(x + \\alpha)$, we expand using the compound angle identity:<br>$R \\sin(x + \\alpha) \\equiv R \\sin x \\cos \\alpha + R \\cos x \\sin \\alpha$<br><br>By comparing the coefficients of $\\sin x$ and $\\cos x$ with our original expression, we set up the simultaneous equations:<br>\\begin{aligned} R \\cos \\alpha &= 5 \\cr R \\sin \\alpha &= 12 \\end{aligned}",
        "To find the value of $R$, square and add both equations:<br>\\begin{aligned} R^2 \\cos^2 \\alpha + R^2 \\sin^2 \\alpha &= 5^2 + 12^2 \\cr R^2(\\cos^2 \\alpha + \\sin^2 \\alpha) &= 25 + 144 \\cr R^2 &= 169 \\cr R &= 13 \\end{aligned}<br><br>To find the value of $\\alpha$, divide the second equation by the first equation:<br>\\begin{aligned} \\dfrac{ R \\sin \\alpha }{ R \\cos \\alpha } &= \\dfrac{ 12 }{ 5 } \\cr \\tan \\alpha &= 2.4 \\cr \\alpha &= \\arctan(2.4) \\approx 67.4^\\circ \\end{aligned}<br>Thus, our expression can be rewritten as:<br>$5 \\sin x + 12 \\cos x \\equiv 13 \\sin(x + 67.38^\\circ)$",
        "We now substitute this $R$-formula result into our function $g(x)$:<br>$g(x) = \\dfrac{ 24 }{ 13 \\sin(x + 67.38^\\circ) + 15 }$<br><br>To find the maximum value of $g(x)$, we must find the minimum possible value of the denominator. Since the minimum value of any sine function is $-1$, we set $\\sin(x + 67.38^\\circ) = -1$.<br><br>This gives a minimum denominator of:<br>\\begin{aligned} \\text{Minimum Denominator} &= 13(-1) + 15 \\cr &= 2 \\end{aligned}<br><br>Substituting this minimum denominator back into $g(x)$ gives the maximum value:<br>\\begin{aligned} g_{\\text{max}} &= \\dfrac{ 24 }{ 2 } \\cr &= 12 \\end{aligned}",
        "To find the smallest positive value of $x$ where this maximum occurs, we solve the minimum condition:<br>\\begin{aligned} \\sin(x + 67.38^\\circ) &= -1 \\cr x + 67.38^\\circ &= 270^\\circ \\cr x &= 270^\\circ - 67.38^\\circ \\cr x &= 202.6^\\circ \\end{aligned}<br>Since $202.6^\\circ$ is positive and falls within the interval $0^\\circ \\le x < 360^\\circ$, this is the smallest positive value of $x$."
    ],
    "pi_options": [
        {
            "ans": "$$g_{\\text{max}} = 24,\\ x = 22.6^\\circ$$",
            "feedback": "This error occurs if you assume the minimum value of the sine term is $0$ instead of $-1$, which yields a minimum denominator of $15$ and a maximum value of $24/15$, or if you solved the angle equation as $x + 67.38^\\circ = 90^\\circ$ instead of $270^\\circ$."
        },
        {
            "ans": "$$g_{\\text{max}} = 0.857,\\ x = 22.6^\\circ$$",
            "feedback": "This error occurs if you mistakenly seek the maximum of the denominator instead of its minimum. A maximum denominator of $13(1) + 15 = 28$ gives a minimum function value of $24/28 \\approx 0.857$. Solving the maximum condition $x + 67.38^\\circ = 90^\\circ$ yields $x = 22.6^\\circ$."
        },
        {
            "ans": "$$g_{\\text{max}} = 12,\\ x = 22.6^\\circ$$",
            "feedback": "While your maximum value of $12$ is correct, the angle $x = 22.6^\\circ$ is incorrect. It is obtained by solving the maximum condition of the sine function ($x + 67.38^\\circ = 90^\\circ$) instead of the minimum condition ($x + 67.38^\\circ = 270^\\circ$) which is required to minimize the denominator."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Reciprocal Optimisation Signs",
        "content": "To maximize a fraction with a constant numerator, you must *minimize* its denominator. Students often mistakenly search for the maximum of the trigonometric term ($13$ instead of $-13$), resulting in the minimum of the overall function rather than its maximum."
    }
},
{
    "id": "004772",
    "board": "CCEA",
    "level": "A",
    "major_area": "Trigonometry",
    "topic": "Trigonometric Identities",
    "subtopic": [
        "R-formula",
        "Trigonometric Optimisation"
    ],
    "img": false,
    "question": "The expression $3 \\sin x - 4 \\cos x$ can be written in the form $R \\sin(x - \\alpha)$, where $R > 0$ and $0 < \\alpha < \\dfrac{ \\pi }{ 2 }$.<br><br><strong>(i)</strong> Find the exact value of $R$ and the value of $\\alpha$ correct to 4 significant figures.<br><br><strong>(ii)</strong> Hence, find the minimum value of $h(x) = \\dfrac{ 10 }{ 3 \\sin x - 4 \\cos x + 7 }$ and the smallest positive value of $x$, in radians, at which this minimum occurs. Give your answer for $x$ correct to 3 significant figures.",
    "steps": [
        "To write $3 \\sin x - 4 \\cos x$ in the form $R \\sin(x - \\alpha)$, we expand using the compound angle subtraction identity:<br>$R \\sin(x - \\alpha) \\equiv R \\sin x \\cos \\alpha - R \\cos x \\sin \\alpha$<br><br>By comparing coefficients with our original expression, we establish the simultaneous equations:<br>\\begin{aligned} R \\cos \\alpha &= 3 \\cr R \\sin \\alpha &= 4 \\end{aligned}",
        "To find the exact value of $R$:<br>\\begin{aligned} R^2 &= 3^2 + 4^2 \\cr R^2 &= 9 + 16 = 25 \\cr R &= 5 \\end{aligned}<br><br>To find the value of $\\alpha$ in radians, divide the second equation by the first equation:<br>\\begin{aligned} \\tan \\alpha &= \\dfrac{ 4 }{ 3 } \\cr \\alpha &= \\arctan\\left( \\dfrac{ 4 }{ 3 } \\right) \\approx 0.9273 \\text{ rad} \\end{aligned}<br>Thus, our expression can be written as:<br>$3 \\sin x - 4 \\cos x \\equiv 5 \\sin(x - 0.9273)$",
        "Substituting this $R$-formula result into our function $h(x)$ gives:<br>$h(x) = \\dfrac{ 10 }{ 5 \\sin(x - 0.9273) + 7 }$<br><br>To find the minimum value of $h(x)$, we must maximize its denominator. The maximum value of any sine function is $1$, which occurs when $\\sin(x - 0.9273) = 1$.<br><br>This yields a maximum denominator of:<br>\\begin{aligned} \\text{Maximum Denominator} &= 5(1) + 7 \\cr &= 12 \\end{aligned}<br><br>Therefore, the minimum value of the function is:<br>\\begin{aligned} h_{\\text{min}} &= \\dfrac{ 10 }{ 12 } = \\dfrac{ 5 }{ 6 } \\approx 0.833 \\end{aligned}",
        "To find the smallest positive value of $x$ where this minimum occurs, we solve the maximum condition:<br>\\begin{aligned} \\sin(x - 0.9273) &= 1 \\cr x - 0.9273 &= \\dfrac{ \\pi }{ 2 } \\cr x &= \\dfrac{ \\pi }{ 2 } + 0.9273 \\cr x &\\approx 1.571 + 0.9273 \\cr x &\\approx 2.50 \\text{ rad} \\end{aligned}<br>Since $2.50 > 0$, this is the smallest positive value of $x$ in radians."
    ],
    "pi_options": [
        {
            "ans": "$$h_{\\text{min}} = 5,\\ x = 2.50\\text{ rad}$$",
            "feedback": "This error occurs if you mistakenly identify the value of the maximized denominator ($12 - 7 = 5$) as the final minimum value of the function, rather than dividing $10$ by the total maximized denominator of $12$."
        },
        {
            "ans": "$$h_{\\text{min}} = 0.833,\\ x = 0.644\\text{ rad}$$",
            "feedback": "While your minimum value of $0.833$ is correct, the angle is wrong. This happens if you mistakenly subtracted $0.9273$ from $\\pi/2$ instead of adding it when solving $x - 0.9273 = \\pi/2$."
        },
        {
            "ans": "$$h_{\\text{min}} = 5,\\ x = 4.07\\text{ rad}$$",
            "feedback": "This is a dual error. You minimized the denominator ($7 - 5 = 2$) to find the function's maximum ($10/2 = 5$) instead of its minimum. You also solved the angle equation as $x - 0.9273 = 3\\pi/2 \\approx 4.712$, incorrectly subtracting $0.9273$ to get $4.07$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Radians Mode and Domain Limits",
        "content": "Ensure your calculator is set to **Radian** mode! A very common exam slip is to write $\\alpha$ in degrees even when the question specifies the interval using fractions of $\\pi$. Always verify that your final value of $x$ is positive and falls within the required domain."
    }
},
{
    "id": "004773",
    "board": "CCEA",
    "level": "A",
    "major_area": "Trigonometry",
    "topic": "Trigonometric Identities",
    "subtopic": [
        "R-formula",
        "Quadratic Trigonometric Expressions"
    ],
    "img": false,
    "question": "The expression $24 \\cos \\theta - 7 \\sin \\theta$ can be written in the form $R \\cos(\\theta + \\alpha)$, where $R > 0$ and $0^\\circ < \\alpha < 90^\\circ$.<br><br><strong>(i)</strong> Find the value of $R$ and the value of $\\alpha$ correct to 1 decimal place.<br><br><strong>(ii)</strong> Hence, find the maximum and minimum values of the quadratic expression:<br>$$f(\\theta) = (24 \\cos \\theta - 7 \\sin \\theta)^2 + 6(24 \\cos \\theta - 7 \\sin \\theta) + 12$$",
    "steps": [
        "To write $24 \\cos \\theta - 7 \\sin \\theta$ in the form $R \\cos(\\theta + \\alpha)$, we expand using the compound angle identity:<br>$R \\cos(\\theta + \\alpha) \\equiv R \\cos \\theta \\cos \\alpha - R \\sin \\theta \\sin \\alpha$<br><br>Comparing the coefficients of $\\cos \\theta$ and $\\sin \\theta$ with our expression gives:<br>\\begin{aligned} R \\cos \\alpha &= 24 \\cr R \\sin \\alpha &= 7 \\end{aligned}",
        "To find the value of $R$:<br>\\begin{aligned} R^2 &= 24^2 + 7^2 \\cr R^2 &= 576 + 49 = 625 \\cr R &= 25 \\end{aligned}<br><br>To find the value of $\\alpha$, divide the second equation by the first equation:<br>\\begin{aligned} \\tan \\alpha &= \\dfrac{ 7 }{ 24 } \\cr \\alpha &= \\arctan\\left( \\dfrac{ 7 }{ 24 } \\right) \\approx 16.3^\\circ \\end{aligned}<br>Thus, our expression can be written as:<br>$24 \\cos \\theta - 7 \\sin \\theta \\equiv 25 \\cos(\\theta + 16.3^\\circ)$",
        "We can now substitute $u = 24 \\cos \\theta - 7 \\sin \\theta = 25 \\cos(\\theta + 16.3^\\circ)$ into the quadratic function.<br><br>Since the range of $\\cos(\\theta + 16.3^\\circ)$ is $[-1, 1]$, the range of $u$ is constrained to:<br>$-25 \\le u \\le 25$<br><br>Substituting $u$ into our quadratic expression $f(\\theta)$ yields:<br>$f(u) = u^2 + 6u + 12$",
        "To find the minimum value, we complete the square on our quadratic in $u$:<br>\\begin{aligned} f(u) &= (u^2 + 6u + 9) - 9 + 12 \\cr &= (u + 3)^2 + 3 \\end{aligned}<br><br>The vertex of this upward-opening parabola is at $u = -3$. Since the value $u = -3$ falls within our valid domain $[-25, 25]$, the absolute minimum of the expression is simply the $y$-value of the vertex:<br>\\begin{aligned} f_{\\text{min}} &= 3 \\end{aligned}",
        "The maximum of our quadratic function must occur at the boundary value of $u$ that is furthest from the vertex at $u = -3$.<br><br>Comparing the distances from the vertex, $u = 25$ is further away than $u = -25$. We evaluate $f(u)$ at both endpoints to confirm:<br><br>At $u = -25$:<br>\\begin{aligned} f(-25) &= (-25 + 3)^2 + 3 \\cr &= (-22)^2 + 3 \\cr &= 484 + 3 = 487 \\end{aligned}<br><br>At $u = 25$:<br>\\begin{aligned} f(25) &= (25 + 3)^2 + 3 \\cr &= (28)^2 + 3 \\cr &= 784 + 3 = 787 \\end{aligned}<br><br>Thus, the maximum value of the expression is $787$ and the minimum value is $3$."
    ],
    "pi_options": [
        {
            "ans": "$$\\text{Max} = 787,\\ \\text{Min} = 487$$",
            "feedback": "This error occurs if you mistakenly assume that the minimum value must occur at one of the physical boundaries ($u = -25$ or $u = 25$). Because the vertex of the parabola ($u = -3$) falls within your valid domain $[-25, 25]$, the absolute minimum occurs at the vertex itself, giving $3$."
        },
        {
            "ans": "$$\\text{Max} = 637,\\ \\text{Min} = 3$$",
            "feedback": "Your minimum value is correct. However, this maximum error occurs if you make an arithmetic error during the evaluation of $f(25)$, such as squaring $25$ to $625$ but subtracting $6(25)$ or miscalculating the squared term $(-25)^2$ as negative."
        },
        {
            "ans": "$$\\text{Max} = 787,\\ \\text{Min} = 12$$",
            "feedback": "While your maximum is correct, the minimum is incorrect. This happens if you set $u = 0$ to find the minimum of the expression, yielding $f(0) = 12$. Always check the vertex of the quadratic ($u = -3$) rather than simply setting the variable to zero."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Boundaries of Quadratic Trig Functions",
        "content": "When dealing with quadratic expressions of a trigonometric function $f(u)$, don't just test the endpoints! If the vertex of the completed square ($u = -3$) lies inside the interval $[-25, 25]$, the absolute minimum is exactly the $y$-value at that vertex. The maximum will always be at whichever boundary is furthest from the vertex."
    }
},
{
    "id": "004774",
    "board": "CCEA",
    "level": "A",
    "major_area": "Trigonometry",
    "topic": "Trigonometric Identities",
    "subtopic": [
        "R-formula",
        "Solving Trigonometric Equations"
    ],
    "img": false,
    "question": "The expression $\\sqrt{3} \\sin 2\\theta - \\cos 2\\theta$ can be written in the form $R \\sin(2\\theta - \\alpha)$, where $R > 0$ and $0 < \\alpha < \\dfrac{ \\pi }{ 2 }$.<br><br><strong>(i)</strong> Find the value of $R$ and the exact value of $\\alpha$ in radians.<br><br><strong>(ii)</strong> Hence, solve the trigonometric equation:<br>$$\\sqrt{3} \\sin 2\\theta - \\cos 2\\theta = \\sqrt{2}$$<br>in the interval $0 \\le \\theta \\le \\pi$, giving your answers in terms of $\\pi$.",
    "steps": [
        "To express $\\sqrt{3} \\sin 2\\theta - \\cos 2\\theta$ in the form $R \\sin(2\\theta - \\alpha)$, we expand using the compound subtraction identity:<br>$R \\sin(2\\theta - \\alpha) \\equiv R \\sin 2\\theta \\cos \\alpha - R \\cos 2\\theta \\sin \\alpha$<br><br>Comparing coefficients with our expression yields:<br>\\begin{aligned} R \\cos \\alpha &= \\sqrt{3} \\cr R \\sin \\alpha &= 1 \\end{aligned}",
        "To find the value of $R$:<br>\\begin{aligned} R^2 &= (\\sqrt{3})^2 + (-1)^2 \\cr R^2 &= 3 + 1 = 4 \\cr R &= 2 \\end{aligned}<br><br>To find the exact value of $\\alpha$ in radians:<br>\\begin{aligned} \\tan \\alpha &= \\dfrac{ 1 }{ \\sqrt{3} } \\cr \\alpha &= \\dfrac{ \\pi }{ 6 } \\end{aligned}<br>Thus, our expression can be written as:<br>$\\sqrt{3} \\sin 2\\theta - \\cos 2\\theta \\equiv 2 \\sin\\left( 2\\theta - \\dfrac{ \\pi }{ 6 } \\right)$",
        "We now substitute this form back into our equation to solve it:<br>\\begin{aligned} 2 \\sin\\left( 2\\theta - \\dfrac{ \\pi }{ 6 } \\right) &= \\sqrt{2} \\cr \\sin\\left( 2\\theta - \\dfrac{ \\pi }{ 6 } \\right) &= \\dfrac{ \\sqrt{ 2 } }{ 2 } \\end{aligned}",
        "To solve within the domain $0 \\le \\theta \\le \\pi$, we must find the valid interval for the transformed variable $u = 2\\theta - \\dfrac{ \\pi }{ 6 }$:<br>\\begin{aligned} 0 &\\le \\theta \\le \\pi \\cr 0 &\\le 2\\theta \\le 2\\pi \\cr -\\dfrac{ \\pi }{ 6 } &\\le 2\\theta - \\dfrac{ \\pi }{ 6 } \\le \\dfrac{ 11\\pi }{ 6 } \\end{aligned}<br>So, we seek solutions for $\\sin u = \\dfrac{ \\sqrt{ 2 } }{ 2 }$ in the interval $-\\dfrac{ \\pi }{ 6 } \\le u \\le \\dfrac{ 11\\pi }{ 6 }$.",
        "Since the sine value is positive, $u$ lies in the first or second quadrant. The principal value is $\\dfrac{ \\pi }{ 4 }$.<br><br>Our solutions for $u$ are:<br>\\begin{aligned} u &= \\dfrac{ \\pi }{ 4 } \\cr u &= \\pi - \\dfrac{ \\pi }{ 4 } = \\dfrac{ 3\\pi }{ 4 } \\end{aligned}<br>Both values lie comfortably within the transformed interval.",
        "We now solve back for $\\theta$:<br><br>For $u = \\dfrac{ \\pi }{ 4 }$:<br>\\begin{aligned} 2\\theta - \\dfrac{ \\pi }{ 6 } &= \\dfrac{ \\pi }{ 4 } \\cr 2\\theta &= \\dfrac{ \\pi }{ 4 } + \\dfrac{ \\pi }{ 6 } \\cr 2\\theta &= \\dfrac{ 3\\pi }{ 12 } + \\dfrac{ 2\\pi }{ 12 } = \\dfrac{ 5\\pi }{ 12 } \\cr \\theta &= \\dfrac{ 5\\pi }{ 24 } \\end{aligned}<br><br>For $u = \\dfrac{ 3\\pi }{ 4 }$:<br>\\begin{aligned} 2\\theta - \\dfrac{ \\pi }{ 6 } &= \\dfrac{ 3\\pi }{ 4 } \\cr 2\\theta &= \\dfrac{ 3\\pi }{ 4 } + \\dfrac{ \\pi }{ 6 } \\cr 2\\theta &= \\dfrac{ 9\\pi }{ 12 } + \\dfrac{ 2\\pi }{ 12 } = \\dfrac{ 11\\pi }{ 12 } \\cr \\theta &= \\dfrac{ 11\\pi }{ 24 } \\end{aligned}<br><br>Thus, the solutions are $\\theta = \\dfrac{ 5\\pi }{ 24 }$ and $\\theta = \\dfrac{ 11\\pi }{ 24 }$."
    ],
    "pi_options": [
        {
            "ans": "$$\\theta = \\dfrac{ 5\\pi }{ 24 },\\ \\theta = \\dfrac{ 13\\pi }{ 24 }$$",
            "feedback": "This error occurs if you make an arithmetic error when calculating the second quadrant angle, or mistakenly write the second solution of the sine equation as $\\pi - \\pi/6$ (from the phase shift) instead of working with the principal value $\\pi - \\pi/4$."
        },
        {
            "ans": "$$\\theta = \\dfrac{ \\pi }{ 24 },\\ \\theta = \\dfrac{ 7\\pi }{ 24 }$$",
            "feedback": "This occurs if you incorrectly subtract the phase angle $\\pi/6$ from the primary solutions instead of adding it when solving for $2\\theta$, resulting in $2\\theta = \\pi/4 - \\pi/6$ and $2\\theta = 3\\pi/4 - \\pi/6$."
        },
        {
            "ans": "$$\\theta = \\dfrac{ 5\\pi }{ 12 },\\ \\theta = \\dfrac{ 11\\pi }{ 12 }$$",
            "feedback": "This error occurs if you successfully carry out the algebraic steps to solve for the expression $2\\theta$ but forget to divide by $2$ at the very last step to find the final values of $\\theta$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Interval Shifts for $2\\theta$",
        "content": "When solving $2\\theta - \\alpha = u$, always map out the shifted interval for $u$ before writing down solutions. Finding solutions for $\\theta$ outside the interval $0 \\le \\theta \\le \\pi$, or missing solutions entirely, is usually caused by failing to transform the boundaries first."
    }
},
{
    "id": "004775",
    "board": "CCEA",
    "level": "A",
    "major_area": "Trigonometry",
    "topic": "Trigonometric Identities",
    "subtopic": [
        "R-formula",
        "Trigonometric Modelling",
        "Optimisation"
    ],
    "img": "images/Pure/004775.png",
    "question": "A rectangular sign $ABCD$ has side lengths $AB = 6\\text{ m}$ and $BC = 2\\text{ m}$. The sign is tilted such that the corner $A$ rests on horizontal ground, and the side $AB$ makes an angle $\\theta$ with the horizontal, where $0^\\circ < \\theta < 90^\\circ$, as shown in the diagram.<br><br><strong>(i)</strong> Show that the vertical height, $H$, in metres, of the highest point $C$ above the ground is given by:<br>$$H = 6 \\sin \\theta + 2 \\cos \\theta$$<br><strong>(ii)</strong> Express $6 \\sin \\theta + 2 \\cos \\theta$ in the form $R \\sin(\\theta + \\alpha)$, where $R > 0$ and $0^\\circ < \\alpha < 90^\\circ$. Give $R$ in exact simplified surd form and $\\alpha$ correct to 1 decimal place.<br><br><strong>(iii)</strong> Find the maximum possible height of point $C$ above the ground, and the angle $\\theta$ at which this occurs. Give the height to 3 significant figures and the angle to 1 decimal place.",
    "steps": [
        "Let us represent point $A$ on the ground as the origin $(0,0)$. Since side $AB$ has length $6\\text{ m}$ and is inclined at angle $\\theta$ to the horizontal ground, we can find the vertical height of point $B$ above the ground by constructing a right-angled triangle:<br>\\begin{aligned} y_B &= 6 \\sin \\theta \\end{aligned}<br><br>Now, side $BC$ has length $2\\text{ m}$ and is perpendicular to $AB$. Since $AB$ is at angle $\\theta$ to the horizontal, $BC$ must make an angle of $\\theta$ with the vertical line passing through $B$ (tilted back to the left).<br><br>The additional vertical distance $\\Delta y$ from $B$ up to $C$ is given by:<br>\\begin{aligned} \\Delta y &= 2 \\cos \\theta \\end{aligned}<br><br>Thus, the overall vertical height $H$ of the highest point $C$ above the ground is:<br>\\begin{aligned} H &= y_B + \\Delta y \\cr H &= 6 \\sin \\theta + 2 \\cos \\theta \\end{aligned}",
        "To write $6 \\sin \\theta + 2 \\cos \\theta$ in the form $R \\sin(\\theta + \\alpha)$, expand using the compound angle identity:<br>$R \\sin(\\theta + \\alpha) \\equiv R \\sin \\theta \\cos \\alpha + R \\cos \\theta \\sin \\alpha$<br><br>Comparing the coefficients of $\\sin \\theta$ and $\\cos \\theta$ gives us:<br>\\begin{aligned} R \\cos \\alpha &= 6 \\cr R \\sin \\alpha &= 2 \\end{aligned}",
        "To find the exact surd value of $R$:<br>\\begin{aligned} R^2 &= 6^2 + 2^2 \\cr R^2 &= 36 + 4 = 40 \\cr R &= \\sqrt{ 40 } = 2\\sqrt{ 10 } \\end{aligned}<br><br>To find the value of $\\alpha$, divide the equations:<br>\\begin{aligned} \\tan \\alpha &= \\dfrac{ 2 }{ 6 } = \\dfrac{ 1 }{ 3 } \\cr \\alpha &= \\arctan\\left( \\dfrac{ 1 }{ 3 } \\right) \\approx 18.4^\\circ \\end{aligned}<br>Thus, our expression can be written as:<br>$H \\equiv 2\\sqrt{ 10 } \\sin(\\theta + 18.4^\\circ)$",
        "The maximum value of the height $H$ occurs when the sine term reaches its maximum value of $1$, which occurs when $\\sin(\\theta + 18.43^\\circ) = 1$.<br><br>The maximum height is:<br>\\begin{aligned} H_{\\text{max}} &= 2\\sqrt{ 10 } \\approx 6.32\\text{ m (to 3 significant figures).} \\end{aligned} <br><br>This maximum occurs when:<br>\\begin{aligned} \\theta + 18.43^\\circ &= 90^\\circ \\cr \\theta &= 90^\\circ - 18.43^\\circ \\cr \\theta &\\approx 71.6^\\circ \\text{ (to 1 decimal place).} \\end{aligned} br>Since $71.6^\\circ$ is within our physical boundaries ($0^\\circ < \\theta < 90^\\circ$), this is our optimal angle."
    ],
    "pi_options": [
        {
            "ans": "$$H_{\\text{max}} = 6.32\\text{ m},\\ \\theta = 18.4^\\circ$$",
            "feedback": "This error occurs if you mistakenly identify the phase angle $\\alpha = 18.4^\\circ$ as the physical angle of tilt $\\theta$ at which the maximum height occurs, rather than subtracting it from the complement angle ($90^\\circ - \\alpha$)."
        },
        {
            "ans": "$$H_{\\text{max}} = 8.00\\text{ m},\\ \\theta = 71.6^\\circ$$",
            "feedback": "While the angle is correct, the maximum height of $8.00\\text{ m}$ is wrong. This happens if you mistakenly add the two coefficient values directly ($6 + 2 = 8$) to find the maximum instead of using the vector addition rule $R = \\sqrt{ a^2 + b^2 }$."
        },
        {
            "ans": "$$H_{\\text{max}} = 6.32\\text{ m},\\ \\theta = 108.4^\\circ$$",
            "feedback": "This occurs if you incorrectly solve the angle equation as $\\theta = 90^\\circ + 18.43^\\circ = 108.4^\\circ$ by adding instead of subtracting $\\alpha$. Note that an angle of $108.4^\\circ$ also violates the physical boundary $0^\\circ < \\theta < 90^\\circ$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Physical Angle vs Phase Angle",
        "content": "In physical modelling scenarios, the maximum height of $R$ occurs when the sine term equals $1$, which yields $\\theta + \\alpha = 90^\\circ$. The angle of tilt is therefore the *complement* of the phase angle ($\\theta = 90^\\circ - \\alpha$). Don't confuse the two!"
    }
},
{
    "id": "004776",
    "board": "CCEA",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Partial Fractions",
    "subtopic": [
        "Linear Denominators"
    ],
    "img": false,
    "question": "Express the following algebraic fraction in partial fractions:<br>$$\\dfrac{ 7x - 1 }{ (x + 3)(x - 1) }$$",
    "steps": [
        "We set up the partial fractions identity for distinct linear factors:<br>$$\\dfrac{ 7x - 1 }{ (x + 3)(x - 1) } \\equiv \\dfrac{ A }{ x + 3 } + \\dfrac{ B }{ x - 1 }$$<br>Multiply both sides by $(x + 3)(x - 1)$ to obtain the linear identity:<br>$$7x - 1 \\equiv A(x - 1) + B(x + 3)$$",
        "To find the constant $B$, substitute $x = 1$ to eliminate the $A$ term:<br>\\begin{aligned} 7(1) - 1 &= B(1 + 3) \\cr 6 &= 4B \\cr B &= 1.5 \\end{aligned}",
        "To find the constant $A$, substitute $x = -3$ to eliminate the $B$ term:<br>\\begin{aligned} 7(-3) - 1 &= A(-3 - 1) \\cr -22 &= -4A \\cr A &= 5.5 \\end{aligned}",
        "Substituting the values of $A$ and $B$ back into our initial expression gives the final partial fractions:<br>$$\\dfrac{ 5.5 }{ x + 3 } + \\dfrac{ 1.5 }{ x - 1 }$$"
    ],
    "pi_options": [
        {
            "ans": "$$\\dfrac{ 1.5 }{ x + 3 } + \\dfrac{ 5.5 }{ x - 1 }$$",
            "feedback": "This error occurs if you solve the coefficients correctly but accidentally swap the positions of $A$ and $B$, placing $A = 5.5$ over $(x - 1)$ and $B = 1.5$ over $(x + 3)$."
        },
        {
            "ans": "$$\\dfrac{ 5.5 }{ x + 3 } - \\dfrac{ 1.5 }{ x - 1 }$$",
            "feedback": "This mistake occurs if you make a sign slip when solving for $B$, such as evaluating $7(1) - 1$ as $-6$, or forgetting to change the sign when dividing by $4$, which results in a negative coefficient."
        },
        {
            "ans": "$$\\dfrac{ 8 }{ x + 3 } + \\dfrac{ 6 }{ x - 1 }$$",
            "feedback": "This error occurs if you make arithmetic slips when substituting values. For example, evaluating $7(1) - 1$ incorrectly as $8$ instead of $6$ when $x = 1$, or simplifying $-22 = -4A$ incorrectly."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Checking Partial Fractions",
        "content": "Always do a quick sanity check by substituting a simple value like $x = 0$ or $x = 2$ back into both the original fraction and your partial fractions. At $x = 0$, the original is $\\frac{ -1 }{ -3 } = \\frac{ 1 }{ 3 }$, and the answer is $\\frac{ 5.5 }{ 3 } - 1.5 = 1.833 - 1.5 = 0.333 = \\frac{ 1 }{ 3 }$. It works!"
    }
},
{
    "id": "004777",
    "board": "CCEA",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Partial Fractions",
    "subtopic": [
        "Repeated Linear Factors"
    ],
    "img": false,
    "question": "Express the following algebraic fraction in partial fractions:<br>$$\\dfrac{ x + 7 }{ (x + 1)(x - 2)^2 }$$",
    "steps": [
        "We set up the partial fractions identity for repeated linear factors in the denominator:<br>$$\\dfrac{ x + 7 }{ (x + 1)(x - 2)^2 } \\equiv \\dfrac{ A }{ x + 1 } + \\dfrac{ B }{ x - 2 } + \\dfrac{ C }{ (x - 2)^2 }$$<br>Multiply both sides by $(x + 1)(x - 2)^2$ to obtain the identity:<br>$$x + 7 \\equiv A(x - 2)^2 + B(x + 1)(x - 2) + C(x + 1)$$",
        "To find the constant $C$, substitute $x = 2$ to eliminate both the $A$ and $B$ terms:<br>\\begin{aligned} 2 + 7 &= C(2 + 1) \\cr 9 &= 3C \\cr C &= 3 \\end{aligned}",
        "To find the constant $A$, substitute $x = -1$ to eliminate both the $B$ and $C$ terms:<br>\\begin{aligned} -1 + 7 &= A(-1 - 2)^2 \\cr 6 &= A(-3)^2 \\cr 6 &= 9A \\cr A &= \\dfrac{ 2 }{ 3 } \\end{aligned}",
        "To find the constant $B$, we equate the coefficients of the $x^2$ terms on both sides of the identity:<br>\\begin{aligned} 0 &= A + B \\cr 0 &= \\dfrac{ 2 }{ 3 } + B \\cr B &= -\\dfrac{ 2 }{ 3 } \\end{aligned}",
        "Substituting the values of $A$, $B$, and $C$ back into our initial setup gives:<br>$$\\dfrac{ 2 }{ 3(x + 1) } - \\dfrac{ 2 }{ 3(x - 2) } + \\dfrac{ 3 }{ (x - 2)^2 }$$"
    ],
    "pi_options": [
        {
            "ans": "$$\\dfrac{ 2 }{ 3(x + 1) } + \\dfrac{ 2 }{ 3(x - 2) } + \\dfrac{ 3 }{ (x - 2)^2 }$$",
            "feedback": "This error occurs if you make a sign error when equating the $x^2$ coefficients, setting $A = B$ or $B = A$ instead of $A + B = 0$."
        },
        {
            "ans": "$$\\dfrac{ 2 }{ 3(x + 1) } + \\dfrac{ 3 }{ (x - 2)^2 }$$",
            "feedback": "This mistake occurs if you forget to include the linear partial fraction term $\\dfrac{ B }{ x - 2 }$ in your initial setup. Repeated factors of the form $(x - a)^2$ always require both the linear term $(x - a)$ and the squared term $(x - a)^2$."
        },
        {
            "ans": "$$\\dfrac{ 1 }{ x + 1 } - \\dfrac{ 1 }{ x - 2 } + \\dfrac{ 3 }{ (x - 2)^2 }$$",
            "feedback": "This occurs if you make an arithmetic slip when simplifying the equation for $A$, such as simplifying $9A = 6$ to $A = 9/6 = 1.5$ instead of $A = 6/9 = 2/3$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Repeated Factor Setup",
        "content": "When dealing with repeated linear factors like $(x - 2)^2$, you must include two separate partial fractions: one with the linear denominator $(x - 2)$ and one with the squared denominator $(x - 2)^2$. Leaving out the linear term is a very common exam slip!"
    }
},
{
    "id": "004778",
    "board": "CCEA",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Partial Fractions",
    "subtopic": [
        "Repeated Linear Factors"
    ],
    "img": false,
    "question": "Express the following algebraic fraction in partial fractions:<br>$$\\dfrac{ 4x^2 - 3x + 5 }{ (x - 1)^2(x + 2) }$$",
    "steps": [
        "We set up the partial fractions identity for the repeated linear factor $(x - 1)^2$ and distinct factor $(x + 2)$:<br>$$\\dfrac{ 4x^2 - 3x + 5 }{ (x - 1)^2(x + 2) } \\equiv \\dfrac{ A }{ x - 1 } + \\dfrac{ B }{ (x - 1)^2 } + \\dfrac{ C }{ x + 2 }$$<br>Multiply both sides by the denominator $(x - 1)^2(x + 2)$ to obtain the linear identity:<br>$$4x^2 - 3x + 5 \\equiv A(x - 1)(x + 2) + B(x + 2) + C(x - 1)^2$$",
        "To find the constant $B$, substitute $x = 1$ to eliminate both the $A$ and $C$ terms:<br>\\begin{aligned} 4(1)^2 - 3(1) + 5 &= B(1 + 2) \\cr 6 &= 3B \\cr B &= 2 \\end{aligned}",
        "To find the constant $C$, substitute $x = -2$ to eliminate both the $A$ and $B$ terms:<br>\\begin{aligned} 4(-2)^2 - 3(-2) + 5 &= C(-2 - 1)^2 \\cr 16 + 6 + 5 &= 9C \\cr 27 &= 9C \\cr C &= 3 \\end{aligned}",
        "To find the constant $A$, we equate the coefficients of the $x^2$ terms on both sides of the identity:<br>\\begin{aligned} 4 &= A + C \\cr 4 &= A + 3 \\cr A &= 1 \\end{aligned}",
        "Substituting the values of $A$, $B$, and $C$ back into our initial setup yields the final partial fractions:<br>$$\\dfrac{ 1 }{ x - 1 } + \\dfrac{ 2 }{ (x - 1)^2 } + \\dfrac{ 3 }{ x + 2 }$$"
    ],
    "pi_options": [
        {
            "ans": "$$\\dfrac{ 7 }{ x - 1 } + \\dfrac{ 2 }{ (x - 1)^2 } + \\dfrac{ 3 }{ x + 2 }$$",
            "feedback": "This error occurs if you make a sign error when equating the $x^2$ coefficients, solving the equation as $A = 4 + C = 4 + 3 = 7$ instead of $A = 4 - C = 1$."
        },
        {
            "ans": "$$\\dfrac{ 1 }{ x - 1 } + \\dfrac{ 6 }{ (x - 1)^2 } + \\dfrac{ 3 }{ x + 2 }$$",
            "feedback": "This occurs if you make an arithmetic mistake on the left-hand side when substituting $x = 1$, evaluating $4(1)^2 - 3(1) + 5 = 18$ instead of $6$, which leads to $B = 6$."
        },
        {
            "ans": "$$\\dfrac{ 2 }{ (x - 1)^2 } + \\dfrac{ 3 }{ x + 2 }$$",
            "feedback": "This error occurs if you completely omit the linear fraction term $\\dfrac{ A }{ x - 1 }$ from your initial setup. This omission is a major algebraic error because the numerator is of degree 2."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Equating $x^2$ Terms",
        "content": "Once you have found the 'easy' constants ($B$ and $C$) using substitution, equating the coefficients of the highest power ($x^2$) is the fastest and cleanest way to find the remaining constant ($A$). It avoids tedious simultaneous equations!"
    }
},
{
    "id": "004779",
    "board": "CCEA",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Partial Fractions",
    "subtopic": [
        "Improper Fractions",
        "Algebraic Division"
    ],
    "img": false,
    "question": "Express the following improper algebraic fraction in partial fractions:<br>$$\\dfrac{ 2x^2 + 5x - 7 }{ (x + 3)(x - 2) }$$",
    "steps": [
        "Since the degree of the numerator (2) is equal to the degree of the denominator (2), this is an improper fraction. We must set up our decomposition with a constant term $A$:<br>$$\\dfrac{ 2x^2 + 5x - 7 }{ (x + 3)(x - 2) } \\equiv A + \\dfrac{ B }{ x + 3 } + \\dfrac{ C }{ x - 2 }$$<br>Expanding the denominator gives $(x + 3)(x - 2) = x^2 + x - 6$. By equating the coefficients of $x^2$ (or through algebraic division), we find:<br>$$A = 2$$",
        "Now, multiply both sides of the identity by the denominator $(x + 3)(x - 2)$ to form the linear identity:<br>$$2x^2 + 5x - 7 \\equiv 2(x^2 + x - 6) + B(x - 2) + C(x + 3)$$<br>Subtract $2(x^2 + x - 6) = 2x^2 + 2x - 12$ from both sides to simplify the identity:<br>$$3x + 5 \\equiv B(x - 2) + C(x + 3)$$",
        "To find the constant $C$, substitute $x = 2$ to eliminate the $B$ term:<br>\\begin{aligned} 3(2) + 5 &= C(2 + 3) \\cr 11 &= 5C \\cr C &= 2.2 \\end{aligned}",
        "To find the constant $B$, substitute $x = -3$ to eliminate the $C$ term:<br>\\begin{aligned} 3(-3) + 5 &= B(-3 - 2) \\cr -4 &= -5B \\cr B &= 0.8 \\end{aligned}",
        "Substituting $A$, $B$, and $C$ back into our initial setup yields the final expression:<br>$$2 + \\dfrac{ 0.8 }{ x + 3 } + \\dfrac{ 2.2 }{ x - 2 }$$"
    ],
    "pi_options": [
        {
            "ans": "$$\\dfrac{ 0.8 }{ x + 3 } + \\dfrac{ 2.2 }{ x - 2 }$$",
            "feedback": "This mistake occurs if you fail to recognize that the fraction is improper and set up the decomposition without the constant term $A$. Always compare the degrees of the numerator and denominator before starting!"
        },
        {
            "ans": "$$1 + \\dfrac{ 0.8 }{ x + 3 } + \\dfrac{ 2.2 }{ x - 2 }$$",
            "feedback": "This occurs if you incorrectly divide the leading terms of the numerator and denominator, setting $A = 1$ instead of $A = 2$ ($2x^2 / x^2 = 2$)."
        },
        {
            "ans": "$$2 + \\dfrac{ 2.2 }{ x + 3 } + \\dfrac{ 0.8 }{ x - 2 }$$",
            "feedback": "This error occurs if you correctly solve for the coefficients but swap the positions of $B$ and $C$ in the final expression."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Spotting Improper Fractions",
        "content": "Before you write down any partial fraction decomposition, look at the degrees! If the degree of the numerator is **greater than or equal to** the degree of the denominator, the fraction is improper and must be divided first (or written with a polynomial part). Doing standard linear decomposition on an improper fraction will fail completely."
    }
},
{
    "id": "004780",
    "board": "CCEA",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Partial Fractions",
    "subtopic": [
        "Binomial Expansions",
        "Linear Denominators"
    ],
    "img": false,
    "question": "Consider the algebraic expression $f(x) = \\dfrac{ x + 5 }{ (1 - x)(1 + x) }$.<br><br><strong>(a)</strong> Express $f(x)$ in partial fractions.<br><br><strong>(b)</strong> Hence, find the binomial expansion of $f(x)$ in ascending powers of $x$, up to and including the term in $x^2$.",
    "steps": [
        "<strong>Part (a):</strong> We set up the partial fractions identity for distinct linear factors:<br>$$\\dfrac{ x + 5 }{ (1 - x)(1 + x) } \\equiv \\dfrac{ A }{ 1 - x } + \\dfrac{ B }{ 1 + x }$$<br>Multiply both sides by $(1 - x)(1 + x)$ to form the linear identity:<br>$$x + 5 \\equiv A(1 + x) + B(1 - x)$$",
        "Find the constants $A$ and $B$ by substitution:<br>Substitute $x = 1$ to find $A$:<br>\\begin{aligned} 1 + 5 &= A(1 + 1) \\cr 6 &= 2A \\cr A &= 3 \\end{aligned}<br>Substitute $x = -1$ to find $B$:<br>\\begin{aligned} -1 + 5 &= B(1 - (-1)) \\cr 4 &= 2B \\cr B &= 2 \\end{aligned}<br>Thus, the partial fractions representation is:<br>$$\\dfrac{ 3 }{ 1 - x } + \\dfrac{ 2 }{ 1 + x }$$",
        "<strong>Part (b):</strong> We rewrite our partial fractions using negative indices to prepare for binomial expansion:<br>$$f(x) = 3(1 - x)^{ -1 } + 2(1 + x)^{ -1 }$$<br>Using the standard binomial expansions for negative integer powers:<br>\\begin{aligned} (1 - x)^{ -1 } &= 1 + x + x^2 + \\dots \\cr (1 + x)^{ -1 } &= 1 - x + x^2 - \\dots \\end{aligned}",
        "Substitute these expansions back into our expression for $f(x)$ and combine like terms:<br>\\begin{aligned} f(x) &\\approx 3(1 + x + x^2) + 2(1 - x + x^2) \\cr &\\approx (3 + 3x + 3x^2) + (2 - 2x + 2x^2) \\cr &\\approx 5 + x + 5x^2 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $\\dfrac{ 3 }{ 1 - x } + \\dfrac{ 2 }{ 1 + x }$<br><strong>(b)</strong> $5 + 5x + 5x^2$",
            "feedback": "This error occurs in part (b) if you forget to apply the alternating sign change in the expansion of $(1 + x)^{ -1 } = 1 - x + x^2$, expanding it incorrectly as $1 + x + x^2$ instead."
        },
        {
            "ans": "<strong>(a)</strong> $\\dfrac{ 3 }{ 1 - x } - \\dfrac{ 2 }{ 1 + x }$<br><strong>(b)</strong> $1 + 5x + x^2$",
            "feedback": "This happens if you make a sign error when solving for the constants in part (a), yielding $B = -2$. This sign error then propagates into your binomial expansion in part (b)."
        },
        {
            "ans": "<strong>(a)</strong> $\\dfrac{ 3 }{ 1 - x } + \\dfrac{ 2 }{ 1 + x }$<br><strong>(b)</strong> $5 + x + x^2$",
            "feedback": "This error occurs in part (b) if you forget to distribute the multiplier constants $3$ and $2$ to the quadratic terms ($x^2$), mistakenly adding them as $3x^2 - 2x^2 = x^2$ instead of $3x^2 + 2x^2 = 5x^2$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Synoptic Binomial Connections",
        "content": "Connecting partial fractions with binomial expansions is a classic A-level exam favourite. Remember, expanding the separate simplified terms $3(1 - x)^{ -1 } + 2(1 + x)^{ -1 }$ individually is vastly simpler than trying to expand the original expression $(x + 5)(1 - x^2)^{ -1 }$ using the product rule!"
    }
}

];