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
    "question": "<strong>(a)</strong> Prove the identity:\n$$\\sec(2\\theta) + \\tan(2\\theta) \\equiv \\dfrac{\\cos\\theta + \\sin\\theta}{\\cos\\theta - \\sin\\theta}$<br><br><strong>(b)</strong> Hence find the exact value of:\n$$\\dfrac{\\cos\\left( \\dfrac{\\pi}{12} \\right) + \\sin\\left( \\dfrac{\\pi}{12} \\right)}{\\cos\\left( \\dfrac{\\pi}{12} \\right) - \\sin\\left( \\dfrac{\\pi}{12} \\right)}$$",
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
    "question": "<strong>(a)</strong> Prove the identity:\n$$\\dfrac{2\\tan\\theta}{1 + \\tan^2\\theta} \\equiv \\sin(2\\theta)$$<br><br><strong>(b)</strong> Hence find the exact value of:\n$$\\dfrac{2\\tan\\left( \\dfrac{\\pi}{12} \\right)}{1 + \\tan^2\\left( \\dfrac{\\pi}{12} \\right)}$$",
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
}
];