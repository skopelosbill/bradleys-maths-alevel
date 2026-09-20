window.ALEVEL_QUESTIONS = [
{
    "id": "004751",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Parametric Equations",
    "subtopic": [
        "Cartesian Equations"
    ],
    "img": false,
    "question": "A curve is defined parametrically by: \\begin{aligned} &x = 2at^2 \\cr &y = 4at \\end{aligned} where $a$ is a constant and $t$ is a parameter. Find the Cartesian equation of the curve.",
    "steps": [
        "Rearranging the linear equation for $y$ in terms of $t$: \\begin{aligned} &y = 4at \\cr &\\quad \\implies t = \\dfrac{y}{4a} \\end{aligned}",
        "Substitute this expression for $t$ into the equation for $x$: \\begin{aligned} &x = 2at^2 \\cr &\\quad \\implies x = 2a\\Big(\\dfrac{y}{4a}\\Big)^2 \\end{aligned}",
        "Expanding and simplifying: \\begin{aligned} &x = 2a\\Big(\\dfrac{y^2}{16a^2}\\Big) \\cr &\\quad \\implies x = \\dfrac{2ay^2}{16a^2} \\cr &\\quad \\implies x = \\dfrac{y^2}{8a} \\cr &\\quad \\implies y^2 = 8ax \\end{aligned}",
        "Final Answer: $$y^2 = 8ax$$"
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
        "content": "When converting parametric equations to Cartesian form, isolate the parameter in the linear equation first. Here, $y = 4at$ is linear in $t$, making it much easier to rearrange than the quadratic equation $x = 2at^2$."
    }
},
{
    "id": "004752",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Parametric Equations",
    "subtopic": [
        "Trigonometric Parametric Equations",
        "Hyperbolas"
    ],
    "img": false,
    "question": "A curve is defined parametrically by: \\begin{aligned} &x = a\\sec\\theta \\cr &y = b\\tan\\theta \\end{aligned} where $a$ and $b$ are non-zero constants, and $\\theta$ is a parameter. Find the Cartesian equation of the curve.",
    "steps": [
        "Isolating $\\sec\\theta$ and $\\tan\\theta$ in each parametric equation: \\begin{aligned} &\\sec\\theta = \\dfrac{x}{a} \\cr &\\tan\\theta = \\dfrac{y}{b} \\end{aligned}",
        "We state the Pythagorean identity connecting secant and tangent: \\begin{aligned} &\\sec^2\\theta - \\tan^2\\theta = 1 \\end{aligned}",
        "Substituting the expressions into the identity gives: \\begin{aligned} &\\Big(\\dfrac{x}{a}\\Big)^2 - \\Big(\\dfrac{y}{b}\\Big)^2 = 1 \\cr &\\quad \\implies \\dfrac{x^2}{a^2} - \\dfrac{y^2}{b^2} = 1 \\end{aligned}",
        "Final Answer: $$\\dfrac{ x^2 }{ a^2 } - \\dfrac{ y^2 }{ b^2 } = 1$$"
    ],
    "pi_options": [
        {
            "ans": "$$\\dfrac{ x^2 }{ a^2 } + \\dfrac{ y^2 }{ b^2 } = 1$$",
            "feedback": "This error is caused by using the incorrect trigonometric identity $\\sec^2\\theta + \\tan^2\\theta = 1$, confusing it with the Pythagorean sine/cosine identity."
        },
        {
            "ans": "$$\\dfrac{ y^2 }{ b^2 } - \\dfrac{ x^2 }{ a^2 } = 1$$",
            "feedback": "This mistake occurs if the order of terms in the identity is reversed, using $\\tan^2\\theta - \\sec^2\\theta = 1$ instead of $\\sec^2\\theta - \\tan^2\\theta = 1$."
        },
        {
            "ans": "$$x^2 - y^2 = a^2 b^2$$",
            "feedback": "This arises from a failure to divide by the constant coefficients $a$ and $b$ correctly before applying the identity."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Trigonometric Identity Checklist",
        "content": "Double-check your Pythagorean identities. While $\\sin^2\\theta + \\cos^2\\theta = 1$ has a plus sign, the identity connecting secant and tangent is $\\sec^2\\theta - \\tan^2\\theta = 1$. A sign slip here converts a hyperbola into an ellipse."
    }
},
{
    "id": "004753",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Parametric Equations",
    "subtopic": [
        "Trigonometric Parametric Equations",
        "Double-Angle Identities"
    ],
    "img": false,
    "question": "A curve is defined parametrically by: \\begin{aligned} &x = 2\\cos\\theta \\cr &y = \\cos(2\\theta) + 3 \\end{aligned} where $\\theta$ is a parameter. Find the Cartesian equation of the curve in the form $y = f(x)$.",
    "steps": [
        "Expressing $\\cos\\theta$ in terms of $x$: \\begin{aligned} &\\cos\\theta = \\dfrac{x}{2} \\end{aligned}",
        "Using the double-angle identity for $\\cos(2\\theta)$ in terms of $\\cos\\theta$: \\begin{aligned} &\\cos(2\\theta) = 2\\cos^2\\theta - 1 \\end{aligned}",
        "Substituting into the parametric equation for $y$: \\begin{aligned} &y = (2\\cos^2\\theta - 1) + 3 \\cr &\\quad \\implies y = 2\\cos^2\\theta + 2 \\end{aligned}",
        "Substituting $\\cos\\theta = \\dfrac{x}{2}$ and simplifying: \\begin{aligned} &y = 2\\Big(\\dfrac{x}{2}\\Big)^2 + 2 \\cr &\\quad \\implies y = 2\\Big(\\dfrac{x^2}{4}\\Big) + 2 \\cr &\\quad \\implies y = \\dfrac{x^2}{2} + 2 \\end{aligned}",
        "Final Answer: $$y = \\dfrac{ x^2 }{ 2 } + 2$$"
    ],
    "pi_options": [
        {
            "ans": "$$y = x^2 + 2$$",
            "feedback": "This error occurs if you forget to square the denominator when substituting $\\cos\\theta = \\dfrac{x}{2}$, writing $\\cos^2\\theta = \\dfrac{x^2}{2}$ instead of $\\dfrac{x^2}{4}$."
        },
        {
            "ans": "$$y = \\dfrac{ x^2 }{ 2 } + 4$$",
            "feedback": "This mistake is caused by a sign error in the identity, expanding $\\cos(2\\theta) = 2\\cos^2\\theta + 1$ instead of $2\\cos^2\\theta - 1$."
        },
        {
            "ans": "$$y = 2x^2 + 2$$",
            "feedback": "This arises if the denominator is omitted during substitution, incorrectly setting $\\cos^2\\theta = x^2$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Choosing the Right Double-Angle Identity",
        "content": "There are three common forms for $\\cos(2\\theta)$: $\\cos^2\\theta - \\sin^2\\theta$, $1 - 2\\sin^2\\theta$, and $2\\cos^2\\theta - 1$. Since $x$ is defined using $\\cos\\theta$, choosing $2\\cos^2\\theta - 1$ eliminates $\\theta$ in one clean step."
    }
},
{
    "id": "004754",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Parametric Equations",
    "subtopic": [
        "Exponential Parametric Equations"
    ],
    "img": false,
    "question": "A curve is defined parametrically by: \\begin{aligned} &x = \\mathrm{e}^{2t} - 1 \\cr &y = \\mathrm{e}^t + 2 \\end{aligned} where $t$ is a parameter. Find the Cartesian equation of the curve in the form $x = f(y)$.",
    "steps": [
        "Isolating $\\mathrm{e}^t$ in the equation for $y$: \\begin{aligned} &y = \\mathrm{e}^t + 2 \\cr &\\quad \\implies \\mathrm{e}^t = y - 2 \\end{aligned}",
        "Using index laws to rewrite $x$ in terms of $\\mathrm{e}^t$: \\begin{aligned} &x = (\\mathrm{e}^t)^2 - 1 \\end{aligned}",
        "Substituting $\\mathrm{e}^t = y - 2$ into the expression for $x$: \\begin{aligned} &x = (y - 2)^2 - 1 \\end{aligned}",
        "Expanding and simplifying: \\begin{aligned} &x = (y^2 - 4y + 4) - 1 \\cr &\\quad \\implies x = y^2 - 4y + 3 \\end{aligned}",
        "Final Answer: $$x = y^2 - 4y + 3$$"
    ],
    "pi_options": [
        {
            "ans": "$$x = y^2 - 1$$",
            "feedback": "This error is caused by substituting $\\mathrm{e}^{2t}$ as $y^2$ directly, failing to account for the $+2$ shift in the $y = \\mathrm{e}^t + 2$ equation."
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
        "content": "Using the index law $(a^m)^n = a^{mn}$, we can express $\\mathrm{e}^{2t}$ as $(\\mathrm{e}^t)^2$. This algebraic substitution links the parametric equations cleanly without requiring natural logarithms."
    }
},
{
    "id": "004755",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Parametric Equations",
    "subtopic": [
        "Rational Parametric Equations"
    ],
    "img": false,
    "question": "A curve is defined parametrically by: \\begin{aligned} &x = \\dfrac{2}{t} \\cr &y = 3t^2 + 1 \\end{aligned} where $t \\ne 0$ is a parameter. Find the Cartesian equation of the curve in the form $y = f(x)$.",
    "steps": [
        "Rearranging the equation for $x$ to isolate $t$: \\begin{aligned} &x = \\dfrac{2}{t} \\cr &\\quad \\implies t = \\dfrac{2}{x} \\end{aligned}",
        "Substituting $t = \\dfrac{2}{x}$ into the equation for $y$: \\begin{aligned} &y = 3t^2 + 1 \\cr &\\quad \\implies y = 3\\Big(\\dfrac{2}{x}\\Big)^2 + 1 \\end{aligned}",
        "Expanding and simplifying: \\begin{aligned} &y = 3\\Big(\\dfrac{4}{x^2}\\Big) + 1 \\cr &\\quad \\implies y = \\dfrac{12}{x^2} + 1 \\end{aligned}",
        "Final Answer: $$y = \\dfrac{12}{x^2} + 1$$"
    ],
    "pi_options": [
        {
            "ans": "$$y = \\dfrac{6}{x^2} + 1$$",
            "feedback": "This error occurs if you multiply $3$ by $2$ before squaring, or fail to square the numerator $2$ to $4$."
        },
        {
            "ans": "$$y = \\dfrac{12}{x} + 1$$",
            "feedback": "This mistake is caused by forgetting to square the denominator $x$ when evaluating the squared fraction."
        },
        {
            "ans": "$$y = \\dfrac{6}{x} + 1$$",
            "feedback": "This arises from failing to square both the numerator $2$ and the denominator $x$ during substitution."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Order of Operations with Coefficients",
        "content": "Follow the correct order of operations (BIDMAS). You must square $t = \\dfrac{2}{x}$ to get $\\dfrac{4}{x^2}$ *before* multiplying by the coefficient of $3$."
    }
},
{
    "id": "004756",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Geometry",
    "topic": "Trigonometry",
    "subtopic": [
        "Circular Measure",
        "Arc Length and Sector Area"
    ],
    "img": "images/Pure_SVGs/004756.svg",
    "question": "The diagram shows a design for a symmetrical mirror, $ABCDE$, consisting of a sector of a circle $EBD$ centred at $B$, together with two congruent right-angled triangles, $BAE$ and $BCD$, which are right-angled at $A$ and $C$ respectively.<br><br>The line $AC$ has length $60\\text{ cm}$, and $AE = CD = 40\\text{ cm}$.<br><br><strong>(a)</strong> Find the angle $EBD$ in radians.<br><strong>(b)</strong> Find the total area of the mirror.",
    "steps": [
        "By symmetry, $B$ is the midpoint of $AC$, so: \\begin{aligned} &AB = BC = \\dfrac{60}{2} = 30\\text{ cm} \\end{aligned} In the right-angled triangle $BAE$: \\begin{aligned} &\\tan(\\angle ABE) = \\dfrac{AE}{AB} \\cr &\\quad = \\dfrac{40}{30} \\cr &\\quad \\implies \\angle ABE = \\arctan\\Big(\\dfrac{4}{3}\\Big) \\cr &\\quad \\approx 0.92730\\text{ rad} \\end{aligned}",
        "By symmetry, $\\angle CBD = \\angle ABE$. Since $AC$ is a straight line summing to $\\pi$ radians: \\begin{aligned} &\\angle EBD \\cr &\\quad = \\pi - 2\\angle ABE \\cr &\\quad = \\pi - 2\\arctan\\Big(\\dfrac{4}{3}\\Big) \\cr &\\quad \\approx 3.14159 - 1.85459 \\cr &\\quad \\approx 1.287\\text{ rad} \\end{aligned} This is $1.29\\text{ radians}$ to three significant figures.",
        "Using Pythagoras' theorem to find the radius $R = BE$: \\begin{aligned} &R^2 = AB^2 + AE^2 \\cr &\\quad = 30^2 + 40^2 \\cr &\\quad = 900 + 1600 \\cr &\\quad = 2500 \\cr &\\quad \\implies R = 50\\text{ cm} \\end{aligned}",
        "We calculate the area of the sector and the two congruent triangles: \\begin{aligned} &\\text{Area of Sector } EBD \\cr &\\quad = \\dfrac{1}{2}R^2\\theta \\cr &\\quad = \\dfrac{1}{2}(50^2)(1.28700) \\cr &\\quad \\approx 1608.75\\text{ cm}^2 \\cr &\\text{Area of } \\triangle BAE \\cr &\\quad = \\dfrac{1}{2} \\times 30 \\times 40 \\cr &\\quad = 600\\text{ cm}^2 \\cr &\\text{Total Area} \\cr &\\quad \\approx 1608.75 + 2(600) \\cr &\\quad \\approx 2808.75\\text{ cm}^2 \\end{aligned} This rounds to $2810\\text{ cm}^2$ to three significant figures.",
        "Final Answer: $$2810\\text{ cm}^2$$"
    ],
    "pi_options": [
        {
            "ans": "$$2209\\text{ cm}^2$$",
            "feedback": "This error occurs if the area of the two congruent triangles is omitted, leaving only the area of the circular sector."
        },
        {
            "ans": "$$4019\\text{ cm}^2$$",
            "feedback": "This mistake is caused by using $\\angle EBD \\approx 2.25\\text{ rad}$, which occurs if you subtract $\\angle ABE$ only once instead of twice from $\\pi$."
        },
        {
            "ans": "$$2850\\text{ cm}^2$$",
            "feedback": "This arises if degrees are used instead of radians to compute the sector area, or if the radians value was miscalculated."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Symmetry Angle Double Subtraction",
        "content": "A frequent slip in symmetrical geometry problems is calculating $\\angle EBD = \\pi - \\angle ABE$. Since two congruent triangles flank the central sector, you must subtract the base angle twice: $\\angle EBD = \\pi - 2\\angle ABE$."
    }
},
{
    "id": "004757",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Geometry",
    "topic": "Trigonometry",
    "subtopic": [
        "Circular Measure",
        "Pythagorean Triples",
        "Sector Area"
    ],
    "img": "images/Pure_SVGs/004757.svg",
    "question": "The diagram shows a decorative symmetrical plaque, $ABCDE$, consisting of a sector of a circle $BCD$ centred at $C$, together with two congruent right-angled triangles, $CAB$ and $CDE$, which are right-angled at $A$ and $E$ respectively.<br><br>The straight horizontal base $AE$ has length $32\\text{ cm}$, with $C$ as its midpoint, and $AB = ED = 12\\text{ cm}$.<br><br><strong>(a)</strong> Find the angle $BCD$ in radians.<br><strong>(b)</strong> Find the total area of the plaque.",
    "steps": [
        "Since $C$ is the midpoint of $AE$: \\begin{aligned} &AC = CE = \\dfrac{32}{2} = 16\\text{ cm} \\end{aligned} In the right-angled triangle $CAB$: \\begin{aligned} &\\tan(\\angle ACB) = \\dfrac{AB}{AC} \\cr &\\quad = \\dfrac{12}{16} \\cr &\\quad \\implies \\angle ACB = \\arctan\\Big(\\dfrac{3}{4}\\Big) \\cr &\\quad \\approx 0.64350\\text{ rad} \\end{aligned}",
        "By symmetry, $\\angle DCE = \\angle ACB$. Since $AE$ is a straight line: \\begin{aligned} &\\angle BCD \\cr &\\quad = \\pi - 2\\angle ACB \\cr &\\quad = \\pi - 2\\arctan\\Big(\\dfrac{3}{4}\\Big) \\cr &\\quad \\approx 3.14159 - 1.28700 \\cr &\\quad \\approx 1.855\\text{ rad} \\end{aligned} This is $1.85\\text{ radians}$ to three significant figures.",
        "Using Pythagoras' theorem to find radius $R = BC$: \\begin{aligned} &R^2 = AC^2 + AB^2 \\cr &\\quad = 16^2 + 12^2 \\cr &\\quad = 256 + 144 \\cr &\\quad = 400 \\cr &\\quad \\implies R = 20\\text{ cm} \\end{aligned}",
        "We calculate the total area of the plaque: \\begin{aligned} &\\text{Area of Sector } BCD \\cr &\\quad = \\dfrac{1}{2}R^2\\theta \\cr &\\quad = \\dfrac{1}{2}(20^2)(1.85459) \\cr &\\quad \\approx 370.92\\text{ cm}^2 \\cr &\\text{Area of } \\triangle CAB \\cr &\\quad = \\dfrac{1}{2} \\times 16 \\times 12 \\cr &\\quad = 96\\text{ cm}^2 \\cr &\\text{Total Area} \\cr &\\quad \\approx 370.92 + 2(96) \\cr &\\quad \\approx 562.92\\text{ cm}^2 \\end{aligned} This rounds to $563\\text{ cm}^2$ to three significant figures.",
        "Final Answer: $$563\\text{ cm}^2$$"
    ],
    "pi_options": [
        {
            "ans": "$$371\\text{ cm}^2$$",
            "feedback": "This error occurs if the area of the two flanking right-angled triangles is forgotten, leaving only the area of the circular sector."
        },
        {
            "ans": "$$692\\text{ cm}^2$$",
            "feedback": "This mistake is caused by using $\\angle BCD \\approx 2.50\\text{ rad}$, which occurs if you subtract $\\angle ACB$ only once instead of twice from $\\pi$."
        },
        {
            "ans": "$$590\\text{ cm}^2$$",
            "feedback": "This arises from an arithmetic error during the sector area calculation, or if the radius was incorrectly evaluated."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Spotting Pythagorean Triples",
        "content": "Recognising that sides $12$ and $16$ are multiples of the $3, 4, 5$ triple ($3 \\times 4 = 12$ and $4 \\times 4 = 16$) immediately gives a hypotenuse of $5 \\times 4 = 20\\text{ cm}$ without full calculation."
    }
},
{
    "id": "004758",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Geometry",
    "topic": "Trigonometry",
    "subtopic": [
        "Circular Measure",
        "Asymmetric Layouts",
        "Sector Area"
    ],
    "img": "images/Pure_SVGs/004758.svg",
    "question": "The diagram shows an emblem, $OABC$, consisting of a sector of a circle $OAB$ of radius $10\\text{ cm}$ centred at $O$, and a right-angled triangle $OAC$ which is right-angled at $A$.<br><br>The edge $AC$ has length $10\\text{ cm}$, and $\\angle BOC = 2.0\\text{ rad}$.<br><br><strong>(a)</strong> Find the angle $AOB$ of the sector in radians.<br><strong>(b)</strong> Find the total area of the emblem.",
    "steps": [
        "In the right-angled triangle $OAC$, with adjacent side $OA = 10\\text{ cm}$ and opposite side $AC = 10\\text{ cm}$: \\begin{aligned} &\\tan(\\angle AOC) = \\dfrac{AC}{OA} \\cr &\\quad = \\dfrac{10}{10} \\cr &\\quad \\implies \\angle AOC = \\arctan(1) \\cr &\\quad = \\dfrac{\\pi}{4} \\approx 0.78540\\text{ rad} \\end{aligned}",
        "Subtracting from the total angle $\\angle BOC = 2.0\\text{ rad}$: \\begin{aligned} &\\angle AOB \\cr &\\quad = \\angle BOC - \\angle AOC \\cr &\\quad = 2.0 - 0.78540 \\cr &\\quad \\approx 1.21460\\text{ rad} \\end{aligned} This rounds to $1.21\\text{ radians}$ to three significant figures.",
        "We compute the area of $\\triangle OAC$ and sector $OAB$: \\begin{aligned} &\\text{Area of } \\triangle OAC \\cr &\\quad = \\dfrac{1}{2} \\times 10 \\times 10 \\cr &\\quad = 50\\text{ cm}^2 \\cr &\\text{Area of Sector } OAB \\cr &\\quad = \\dfrac{1}{2}R^2\\theta \\cr &\\quad = \\dfrac{1}{2}(10^2)(1.21460) \\cr &\\quad \\approx 60.73\\text{ cm}^2 \\cr &\\text{Total Area} \\cr &\\quad \\approx 50 + 60.73 \\cr &\\quad \\approx 110.73\\text{ cm}^2 \\end{aligned} This rounds to $111\\text{ cm}^2$ to three significant figures.",
        "Final Answer: $$111\\text{ cm}^2$$"
    ],
    "pi_options": [
        {
            "ans": "$$61\\text{ cm}^2$$",
            "feedback": "This error occurs if the area of the right-angled triangle $OAC$ is completely omitted, leaving only the area of the circular sector."
        },
        {
            "ans": "$$150\\text{ cm}^2$$",
            "feedback": "This mistake is caused by using the total angle of $2.0\\text{ rad}$ as the angle of the sector without subtracting $\\angle AOC$."
        },
        {
            "ans": "$$115\\text{ cm}^2$$",
            "feedback": "This arises if the sector angle is incorrectly rounded prematurely or if an arithmetic slip occurs during angle subtraction."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Isosceles Right-Angled Triangle Angle",
        "content": "When a right-angled triangle is isosceles ($OA = AC = 10\\text{ cm}$), the interior base angle is always exactly $45^\\circ$ or $\\dfrac{\\pi}{4}$ radians."
    }
},
{
    "id": "004759",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Geometry",
    "topic": "Trigonometry",
    "subtopic": [
        "Circular Measure",
        "Asymmetric Layouts",
        "Sector Area"
    ],
    "img": "images/Pure_SVGs/004759.svg",
    "question": "The diagram shows a logo, $OABC$, consisting of a sector of a circle $OAB$ of radius $10\\text{ cm}$ centred at $O$, and a right-angled triangle $OBC$ which is right-angled at $B$.<br><br>The edge $BC$ has length $24\\text{ cm}$, and $\\angle AOC = 3.0\\text{ rad}$.<br><br><strong>(a)</strong> Find the angle $AOB$ of the sector in radians.<br><strong>(b)</strong> Find the total area of the logo.",
    "steps": [
        "In the right-angled triangle $OBC$, with adjacent side $OB = 10\\text{ cm}$ and opposite side $BC = 24\\text{ cm}$: \\begin{aligned} &\\tan(\\angle BOC) = \\dfrac{BC}{OB} \\cr &\\quad = \\dfrac{24}{10} \\cr &\\quad \\implies \\angle BOC = \\arctan(2.4) \\cr &\\quad \\approx 1.17601\\text{ rad} \\end{aligned}",
        "Subtracting from the total angle $\\angle AOC = 3.0\\text{ rad}$: \\begin{aligned} &\\angle AOB \\cr &\\quad = \\angle AOC - \\angle BOC \\cr &\\quad = 3.0 - 1.17601 \\cr &\\quad \\approx 1.82399\\text{ rad} \\end{aligned} This rounds to $1.82\\text{ radians}$ to three significant figures.",
        "We compute the area of $\\triangle OBC$ and sector $OAB$: \\begin{aligned} &\\text{Area of } \\triangle OBC \\cr &\\quad = \\dfrac{1}{2} \\times 10 \\times 24 \\cr &\\quad = 120\\text{ cm}^2 \\cr &\\text{Area of Sector } OAB \\cr &\\quad = \\dfrac{1}{2}R^2\\theta \\cr &\\quad = \\dfrac{1}{2}(10^2)(1.82399) \\cr &\\quad \\approx 91.20\\text{ cm}^2 \\cr &\\text{Total Area} \\cr &\\quad \\approx 120 + 91.20 \\cr &\\quad \\approx 211.20\\text{ cm}^2 \\end{aligned} This rounds to $211\\text{ cm}^2$ to three significant figures.",
        "Final Answer: $$211\\text{ cm}^2$$"
    ],
    "pi_options": [
        {
            "ans": "$$91\\text{ cm}^2$$",
            "feedback": "This error occurs if the area of the right-angled triangle $OBC$ is completely omitted, leaving only the area of the circular sector."
        },
        {
            "ans": "$$270\\text{ cm}^2$$",
            "feedback": "This mistake is caused by using the total angle of $3.0\\text{ rad}$ as the sector angle without subtracting $\\angle BOC$."
        },
        {
            "ans": "$$218\\text{ cm}^2$$",
            "feedback": "This is caused by an arithmetic slip, or assuming the radius equals the hypotenuse $OC = 26\\text{ cm}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Identifying Radius vs. Hypotenuse",
        "content": "Ensure you distinguish between the radius and the hypotenuse. Here, $OA$ and $OB$ are radii ($10\\text{ cm}$), whereas $OC$ is the triangle's hypotenuse ($26\\text{ cm}$) and not a radius."
    }
},
{
    "id": "004760",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Geometry",
    "topic": "Trigonometry",
    "subtopic": [
        "Circular Measure",
        "Symmetrical layouts",
        "Perimeter"
    ],
    "img": "images/Pure_SVGs/004760.svg",
    "question": "The diagram shows a shield-shaped logo, $ABCDE$, consisting of a sector of a circle $EBD$ centred at $B$, together with two congruent right-angled triangles, $BAE$ and $BCD$, which are right-angled at $A$ and $C$ respectively.<br><br>The base $AC$ has length $160\\text{ cm}$, and $AE = CD = 60\\text{ cm}$.<br><br><strong>(a)</strong> Find the angle $EBD$ in radians.<br><strong>(b)</strong> Find the outer perimeter of the shield (boundary $AE + AC + CD + \\text{arc } ED$).",
    "steps": [
        "By symmetry, $B$ is the midpoint of $AC$, so: \\begin{aligned} &AB = BC = \\dfrac{160}{2} = 80\\text{ cm} \\end{aligned} In the right-angled triangle $BAE$: \\begin{aligned} &\\tan(\\angle ABE) = \\dfrac{AE}{AB} \\cr &\\quad = \\dfrac{60}{80} \\cr &\\quad \\implies \\angle ABE = \\arctan(0.75) \\cr &\\quad \\approx 0.64350\\text{ rad} \\end{aligned}",
        "By symmetry, $\\angle CBD = \\angle ABE$. Since $AC$ is a straight line: \\begin{aligned} &\\angle EBD \\cr &\\quad = \\pi - 2\\angle ABE \\cr &\\quad = \\pi - 2(0.64350) \\cr &\\quad \\approx 3.14159 - 1.28700 \\cr &\\quad \\approx 1.855\\text{ rad} \\end{aligned} This rounds to $1.85\\text{ radians}$ to three significant figures.",
        "Using Pythagoras' theorem to find radius $R = BE$: \\begin{aligned} &R^2 = AB^2 + AE^2 \\cr &\\quad = 80^2 + 60^2 \\cr &\\quad = 6400 + 3600 \\cr &\\quad = 10000 \\cr &\\quad \\implies R = 100\\text{ cm} \\end{aligned}",
        "Calculating the arc length $ED$ and the total perimeter: \\begin{aligned} &\\text{Arc Length } ED \\cr &\\quad = R\\theta \\cr &\\quad = 100 \\times 1.85459 \\cr &\\quad \\approx 185.46\\text{ cm} \\cr &\\text{Total Perimeter} \\cr &\\quad = AE + AC + CD + \\text{Arc Length } ED \\cr &\\quad \\approx 60 + 160 + 60 + 185.46 \\cr &\\quad \\approx 465.46\\text{ cm} \\end{aligned} This rounds to $465\\text{ cm}$ to three significant figures.",
        "Final Answer: $$465\\text{ cm}$$"
    ],
    "pi_options": [
        {
            "ans": "$$305\\text{ cm}$$",
            "feedback": "This error is caused by using a sector angle of $1.25\\text{ rad}$ from subtracting $\\angle ABE$ only once from $\\pi$."
        },
        {
            "ans": "$$445\\text{ cm}$$",
            "feedback": "This mistake occurs if the base $AC = 160\\text{ cm}$ is incorrectly omitted or miscalculated during the boundary summation."
        },
        {
            "ans": "$$485\\text{ cm}$$",
            "feedback": "This arises if internal lines $BE$ and $BD$ are mistakenly added to the perimeter in place of the base $AC$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Boundary Perimeter Definitions",
        "content": "When calculating the outer perimeter, do not include internal lines. Radii $BE$ and $BD$ are interior construction lines; the perimeter consists solely of $AE + AC + CD + \\text{arc } ED$."
    }
},
{
    "id": "004761",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Pure Mathematics",
    "topic": "Trigonometry",
    "subtopic": [
        "Double-Angle Identities",
        "Trigonometric Proofs"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Prove the identity: \\begin{aligned} &\\csc(2\\theta) + \\cot(2\\theta) \\equiv \\cot\\theta \\end{aligned} <strong>(b)</strong> Hence find the exact value of $\\cot\\Big(\\dfrac{\\pi}{8}\\Big)$.",
    "steps": [
        "Expressing the terms on the LHS in terms of sine and cosine: \\begin{aligned} &\\csc(2\\theta) + \\cot(2\\theta) \\cr &\\quad = \\dfrac{1}{\\sin(2\\theta)} + \\dfrac{\\cos(2\\theta)}{\\sin(2\\theta)} \\cr &\\quad = \\dfrac{1 + \\cos(2\\theta)}{\\sin(2\\theta)} \\end{aligned}",
        "Using $1 + \\cos(2\\theta) = 2\\cos^2\\theta$ and $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$: \\begin{aligned} &\\dfrac{1 + \\cos(2\\theta)}{\\sin(2\\theta)} \\cr &\\quad = \\dfrac{2\\cos^2\\theta}{2\\sin\\theta\\cos\\theta} \\cr &\\quad = \\dfrac{\\cos\\theta}{\\sin\\theta} \\cr &\\quad = \\cot\\theta \\end{aligned} This matches the RHS, completing the proof.",
        "For part (b), let $\\theta = \\dfrac{\\pi}{8}$, which gives $2\\theta = \\dfrac{\\pi}{4}$: \\begin{aligned} &\\cot\\Big(\\dfrac{\\pi}{8}\\Big) \\cr &\\quad = \\csc\\Big(\\dfrac{\\pi}{4}\\Big) + \\cot\\Big(\\dfrac{\\pi}{4}\\Big) \\cr &\\quad = \\dfrac{1}{\\sin(\\pi/4)} + \\dfrac{1}{\\tan(\\pi/4)} \\cr &\\quad = \\dfrac{1}{1/\\sqrt{2}} + 1 \\cr &\\quad = \\sqrt{2} + 1 \\end{aligned}",
        "Final Answer: $$\\sqrt{2} + 1$$"
    ],
    "pi_options": [
        {
            "ans": "$$\\sqrt{2} - 1$$",
            "feedback": "This error is caused by using the subtraction identity $\\csc(2\\theta) - \\cot(2\\theta) \\equiv \\tan\\theta$, giving the exact value for tangent instead of cotangent."
        },
        {
            "ans": "$$\\sqrt{3} + 1$$",
            "feedback": "This mistake occurs if the exact trigonometric ratios for $\\frac{\\pi}{4}$ are confused with those of $\\frac{\\pi}{6}$ or $\\frac{\\pi}{3}$ during evaluation."
        },
        {
            "ans": "$$1 - \\sqrt{2}$$",
            "feedback": "This is caused by a sign error when reciprocating $\\frac{1}{\\sqrt{2}}$, incorrectly producing $-\\sqrt{2}$ instead of $+\\sqrt{2}$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Choosing the Right Cosine Double-Angle Form",
        "content": "There are three double-angle forms for $\\cos(2\\theta)$. To simplify $1 + \\cos(2\\theta)$, choose $\\cos(2\\theta) = 2\\cos^2\\theta - 1$ so that $-1$ and $+1$ cancel. For $1 - \\cos(2\\theta)$, use $1 - 2\\sin^2\\theta$."
    }
},
{
    "id": "004762",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Pure Mathematics",
    "topic": "Trigonometry",
    "subtopic": [
        "Double-Angle Identities",
        "Reciprocal Trigonometric Proofs"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Prove the identity: \\begin{aligned} &\\sec(2\\theta) + \\tan(2\\theta) \\cr &\\quad \\equiv \\dfrac{\\cos\\theta + \\sin\\theta}{\\cos\\theta - \\sin\\theta} \\end{aligned} <strong>(b)</strong> Hence find the exact value of: \\begin{aligned} &\\dfrac{\\cos(\\pi/12) + \\sin(\\pi/12)}{\\cos(\\pi/12) - \\sin(\\pi/12)} \\end{aligned}",
    "steps": [
        "Expressing the LHS in terms of sine and cosine: \\begin{aligned} &\\sec(2\\theta) + \\tan(2\\theta) \\cr &\\quad = \\dfrac{1}{\\cos(2\\theta)} + \\dfrac{\\sin(2\\theta)}{\\cos(2\\theta)} \\cr &\\quad = \\dfrac{1 + \\sin(2\\theta)}{\\cos(2\\theta)} \\end{aligned}",
        "Rewriting the numerator and denominator using identities: \\begin{aligned} &1 + \\sin(2\\theta) \\cr &\\quad = \\cos^2\\theta + \\sin^2\\theta \\cr &\\qquad + 2\\sin\\theta\\cos\\theta \\cr &\\quad = (\\cos\\theta + \\sin\\theta)^2 \\cr &\\cos(2\\theta) \\cr &\\quad = \\cos^2\\theta - \\sin^2\\theta \\cr &\\quad = (\\cos\\theta - \\sin\\theta) \\cr &\\qquad \\times (\\cos\\theta + \\sin\\theta) \\end{aligned}",
        "Substituting into the fraction and cancelling common factors: \\begin{aligned} &\\dfrac{(\\cos\\theta + \\sin\\theta)^2}{(\\cos\\theta - \\sin\\theta)(\\cos\\theta + \\sin\\theta)} \\cr &\\quad = \\dfrac{\\cos\\theta + \\sin\\theta}{\\cos\\theta - \\sin\\theta} \\end{aligned} This matches the RHS, completing the proof.",
        "For part (b), let $\\theta = \\dfrac{\\pi}{12}$, so $2\\theta = \\dfrac{\\pi}{6}$: \\begin{aligned} &\\sec\\Big(\\dfrac{\\pi}{6}\\Big) + \\tan\\Big(\\dfrac{\\pi}{6}\\Big) \\cr &\\quad = \\dfrac{1}{\\cos(\\pi/6)} + \\tan\\Big(\\dfrac{\\pi}{6}\\Big) \\cr &\\quad = \\dfrac{2}{\\sqrt{3}} + \\dfrac{1}{\\sqrt{3}} \\cr &\\quad = \\dfrac{3}{\\sqrt{3}} \\cr &\\quad = \\sqrt{3} \\end{aligned}",
        "Final Answer: $$\\sqrt{3}$$"
    ],
    "pi_options": [
        {
            "ans": "$$\\dfrac{\\sqrt{3}}{3}$$",
            "feedback": "This error occurs if the final fraction $\\frac{3}{\\sqrt{3}}$ is simplified incorrectly as its reciprocal $\\frac{1}{\\sqrt{3}}$."
        },
        {
            "ans": "$$2 + \\sqrt{3}$$",
            "feedback": "This mistake is caused by using $\\theta = \\frac{\\pi}{12}$ as the input of the double-angle expression, instead of evaluating at $2\\theta = \\frac{\\pi}{6}$."
        },
        {
            "ans": "$$\\sqrt{2}$$",
            "feedback": "This arises from an arithmetic error when adding the fractions, or confusing the trigonometric values of $30^\\circ$ with $45^\\circ$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Spotting Perfect Square Trigonometric Quadratics",
        "content": "The expression $1 + \\sin(2\\theta)$ is a hidden perfect square: since $1 \\equiv \\cos^2\\theta + \\sin^2\\theta$ and $\\sin(2\\theta) \\equiv 2\\sin\\theta\\cos\\theta$, it rewrites directly as $(\\cos\\theta + \\sin\\theta)^2$."
    }
},
{
    "id": "004763",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Pure Mathematics",
    "topic": "Trigonometry",
    "subtopic": [
        "Trigonometric Identities",
        "Double-Angle Formulae"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Prove the identity: \\begin{aligned} &\\dfrac{2\\tan\\theta}{1 + \\tan^2\\theta} \\equiv \\sin(2\\theta) \\end{aligned} <strong>(b)</strong> Hence find the exact value of: \\begin{aligned} &\\dfrac{2\\tan(\\pi/12)}{1 + \\tan^2(\\pi/12)} \\end{aligned}",
    "steps": [
        "Using the Pythagorean identity $1 + \\tan^2\\theta \\equiv \\sec^2\\theta$ on the LHS: \\begin{aligned} &\\dfrac{2\\tan\\theta}{1 + \\tan^2\\theta} \\cr &\\quad = \\dfrac{2\\tan\\theta}{\\sec^2\\theta} \\end{aligned}",
        "Converting to sine and cosine expressions: \\begin{aligned} &\\dfrac{2\\tan\\theta}{\\sec^2\\theta} \\cr &\\quad = \\dfrac{2(\\sin\\theta/\\cos\\theta)}{1/\\cos^2\\theta} \\cr &\\quad = 2\\Big(\\dfrac{\\sin\\theta}{\\cos\\theta}\\Big)\\cos^2\\theta \\cr &\\quad = 2\\sin\\theta\\cos\\theta \\cr &\\quad = \\sin(2\\theta) \\end{aligned} This matches the RHS, completing the proof.",
        "For part (b), let $\\theta = \\dfrac{\\pi}{12}$, so $2\\theta = \\dfrac{\\pi}{6}$: \\begin{aligned} &\\dfrac{2\\tan(\\pi/12)}{1 + \\tan^2(\\pi/12)} \\cr &\\quad = \\sin\\Big(2 \\times \\dfrac{\\pi}{12}\\Big) \\cr &\\quad = \\sin\\Big(\\dfrac{\\pi}{6}\\Big) \\cr &\\quad = \\dfrac{1}{2} \\end{aligned}",
        "Final Answer: $$\\dfrac{1}{2}$$"
    ],
    "pi_options": [
        {
            "ans": "$$\\dfrac{\\sqrt{3}}{2}$$",
            "feedback": "This error occurs if you evaluate $\\cos\\big(\\frac{\\pi}{6}\\big)$ instead of $\\sin\\big(\\frac{\\pi}{6}\\big)$ during final evaluation."
        },
        {
            "ans": "$$1$$",
            "feedback": "This mistake is caused by confusing $\\frac{\\pi}{6}$ with $\\frac{\\pi}{2}$ or making an algebraic slip during division."
        },
        {
            "ans": "$$\\dfrac{\\sqrt{2}}{2}$$",
            "feedback": "This is caused by confusing the exact trigonometric values of $\\frac{\\pi}{6}$ ($30^\\circ$) with those of $\\frac{\\pi}{4}$ ($45^\\circ$)."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: The Rational Sine Identity",
        "content": "This identity represents the rational parameterisation of $\\sin(2\\theta)$ purely in terms of $\\tan\\theta$. Knowing this and $\\cos(2\\theta) \\equiv \\dfrac{1 - \\tan^2\\theta}{1 + \\tan^2\\theta}$ is invaluable for Weierstrass substitutions."
    }
},
{
    "id": "004764",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Pure Mathematics",
    "topic": "Trigonometry",
    "subtopic": [
        "Trigonometric Identities",
        "Double-Angle Formulae"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Prove the identity: \\begin{aligned} &\\dfrac{1 - \\tan^2\\theta}{1 + \\tan^2\\theta} \\equiv \\cos(2\\theta) \\end{aligned} <strong>(b)</strong> Hence find the exact value of: \\begin{aligned} &\\dfrac{1 - \\tan^2(\\pi/8)}{1 + \\tan^2(\\pi/8)} \\end{aligned}",
    "steps": [
        "Using $1 + \\tan^2\\theta \\equiv \\sec^2\\theta$ on the LHS: \\begin{aligned} &\\dfrac{1 - \\tan^2\\theta}{1 + \\tan^2\\theta} \\cr &\\quad = \\dfrac{1 - \\tan^2\\theta}{\\sec^2\\theta} \\end{aligned}",
        "Converting to sine and cosine expressions: \\begin{aligned} &\\dfrac{1 - \\tan^2\\theta}{\\sec^2\\theta} \\cr &\\quad = \\dfrac{1 - \\sin^2\\theta/\\cos^2\\theta}{1/\\cos^2\\theta} \\cr &\\quad = \\Big(1 - \\dfrac{\\sin^2\\theta}{\\cos^2\\theta}\\Big)\\cos^2\\theta \\cr &\\quad = \\cos^2\\theta - \\sin^2\\theta \\cr &\\quad = \\cos(2\\theta) \\end{aligned} This matches the RHS, completing the proof.",
        "For part (b), let $\\theta = \\dfrac{\\pi}{8}$, so $2\\theta = \\dfrac{\\pi}{4}$: \\begin{aligned} &\\dfrac{1 - \\tan^2(\\pi/8)}{1 + \\tan^2(\\pi/8)} \\cr &\\quad = \\cos\\Big(2 \\times \\dfrac{\\pi}{8}\\Big) \\cr &\\quad = \\cos\\Big(\\dfrac{\\pi}{4}\\Big) \\cr &\\quad = \\dfrac{\\sqrt{2}}{2} \\end{aligned}",
        "Final Answer: $$\\dfrac{\\sqrt{2}}{2}$$"
    ],
    "pi_options": [
        {
            "ans": "$$\\dfrac{1}{2}$$",
            "feedback": "This error occurs if you evaluate $\\cos\\big(\\frac{\\pi}{3}\\big)$ instead of $\\cos\\big(\\frac{\\pi}{4}\\big)$ during final evaluation."
        },
        {
            "ans": "$$\\sqrt{2} - 1$$",
            "feedback": "This is caused by failing to apply the identity, instead trying to evaluate the terms directly and making an algebraic slip."
        },
        {
            "ans": "$$\\dfrac{\\sqrt{3}}{2}$$",
            "feedback": "This arises if the angle is incorrectly evaluated as $\\frac{\\pi}{6}$ instead of $\\frac{\\pi}{4}$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Distributing Terms Over Fractions",
        "content": "When multiplying $\\Big(1 - \\dfrac{\\sin^2\\theta}{\\cos^2\\theta}\\Big)$ by $\\cos^2\\theta$, remember to distribute across both terms: $1 \\times \\cos^2\\theta - \\sin^2\\theta = \\cos^2\\theta - \\sin^2\\theta$."
    }
},
{
    "id": "004765",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Pure Mathematics",
    "topic": "Trigonometry",
    "subtopic": [
        "Trigonometric Identities",
        "Double-Angle Proofs"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Prove the identity: \\begin{aligned} &\\dfrac{\\sin(2\\theta)}{1 - \\cos(2\\theta)} \\equiv \\cot\\theta \\end{aligned} <strong>(b)</strong> Hence find the exact value of: \\begin{aligned} &\\dfrac{\\sin(\\pi/4)}{1 - \\cos(\\pi/4)} \\end{aligned}",
    "steps": [
        "Using double-angle identities on the LHS: \\begin{aligned} &\\dfrac{\\sin(2\\theta)}{1 - \\cos(2\\theta)} \\cr &\\quad = \\dfrac{2\\sin\\theta\\cos\\theta}{1 - (1 - 2\\sin^2\\theta)} \\cr &\\quad = \\dfrac{2\\sin\\theta\\cos\\theta}{2\\sin^2\\theta} \\end{aligned}",
        "Cancelling common factors $2\\sin\\theta$: \\begin{aligned} &\\dfrac{2\\sin\\theta\\cos\\theta}{2\\sin^2\\theta} \\cr &\\quad = \\dfrac{\\cos\\theta}{\\sin\\theta} \\cr &\\quad = \\cot\\theta \\end{aligned} This matches the RHS, completing the proof.",
        "For part (b), let $2\\theta = \\dfrac{\\pi}{4}$, which means $\\theta = \\dfrac{\\pi}{8}$: \\begin{aligned} &\\dfrac{\\sin(\\pi/4)}{1 - \\cos(\\pi/4)} \\cr &\\quad = \\cot\\Big(\\dfrac{\\pi}{8}\\Big) \\cr &\\quad = \\csc\\Big(\\dfrac{\\pi}{4}\\Big) + \\cot\\Big(\\dfrac{\\pi}{4}\\Big) \\cr &\\quad = \\sqrt{2} + 1 \\end{aligned}",
        "Final Answer: $$\\sqrt{2} + 1$$"
    ],
    "pi_options": [
        {
            "ans": "$$\\sqrt{2} - 1$$",
            "feedback": "This error occurs if you evaluate $\\tan\\big(\\frac{\\pi}{8}\\big)$ instead of $\\cot\\big(\\frac{\\pi}{8}\\big)$, which represents a reciprocal inversion mistake."
        },
        {
            "ans": "$$1 - \\sqrt{2}$$",
            "feedback": "This is caused by a sign error when rationalising the denominator of the fraction, giving a negative root coefficient."
        },
        {
            "ans": "$$\\sqrt{3} + 1$$",
            "feedback": "This mistake occurs if the exact values for $\\frac{\\pi}{4}$ are confused with those of $\\frac{\\pi}{6}$ or $\\frac{\\pi}{3}$ during evaluation."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Eliminating Constants with Double-Angles",
        "content": "To simplify $1 - \\cos(2\\theta)$, choose $\\cos(2\\theta) = 1 - 2\\sin^2\\theta$. This yields $1 - (1 - 2\\sin^2\\theta) = 2\\sin^2\\theta$, cancelling the constant $1$ completely."
    }
},
{
    "id": "004766",
    "board": "CCEA",
    "branch": "Pure",
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
    "question": "<strong>Part (a)</strong><br>A function $f$ is defined by: \\begin{aligned} &f(x) = x^2 - 5, \\quad x \\ge 0 \\end{aligned} <strong>(i)</strong> State the range of $f(x)$.<br><strong>(ii)</strong> Find $f^{-1}(x)$, clearly stating its domain.<br><br><strong>Part (b)</strong><br>A function $g$ is defined by: \\begin{aligned} &g(x) = |x - 2|, \\quad x \\in \\mathbb{R} \\end{aligned} <strong>(i)</strong> Sketch the graph of $y = g(x)$.<br><strong>(ii)</strong> Find the composite function $gf(x)$.<br><br><strong>Part (c)</strong><br>The graph of $y = h(x)$ is sketched below. Point $Q$ lies on the $y$-axis at $(0, 6)$ and point $P$ lies at $(3, 3)$. For $x \\ge 3$, the graph is horizontal.<br><br><img src='images/Pure_SVGs/004766.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br><strong>(i)</strong> On separate axes, sketch the graph of $y = \\dfrac{1}{3}h(3x)$, labelling images of $P$ and $Q$.<br><br><strong>(ii)</strong> On separate axes, sketch the graph of $y = 6 - h(x)$, labelling images of $P$ and $Q$.",
    "steps": [
        "For part (a)(i), we determine the range of $f(x)$ on $x \\ge 0$: \\begin{aligned} &x \\ge 0 \\cr &\\quad \\implies x^2 \\ge 0 \\cr &\\quad \\implies x^2 - 5 \\ge -5 \\end{aligned} Thus, the range of the function is $f(x) \\ge -5$.",
        "For part (a)(ii), let $y = f(x)$ and make $x$ the subject: \\begin{aligned} &y = x^2 - 5 \\cr &\\quad \\implies x^2 = y + 5 \\cr &\\quad \\implies x = \\sqrt{y + 5} \\end{aligned} Since $x \\ge 0$, we take the positive square root: \\begin{aligned} &f^{-1}(x) = \\sqrt{x + 5} \\end{aligned} The domain of $f^{-1}$ is the range of $f$: $x \\ge -5$.",
        "For part (b)(i), we sketch $y = |x - 2|$. Reflecting the negative portion of $y = x - 2$ upwards gives a V-shaped curve with vertex at $(2, 0)$ and $y$-intercept at $(0, 2)$: <br><br><img src='images/Pure_SVGs/004766_ans1.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "For part (b)(ii), substitute $f(x)$ into $g(x)$: \\begin{aligned} &gf(x) \\cr &\\quad = g(x^2 - 5) \\cr &\\quad = |(x^2 - 5) - 2| \\cr &\\quad = |x^2 - 7| \\end{aligned}",
        "For part (c)(i), $y = \\dfrac{1}{3}h(3x)$ undergoes horizontal and vertical stretches by scale factor $\\dfrac{1}{3}$: \\begin{aligned} &Q(0, 6) \\to Q'(0, 2) \\cr &P(3, 3) \\to P'(1, 1) \\end{aligned} The horizontal line segment now lies along $y = 1$ for $x \\ge 1$: <br><br><img src='images/Pure_SVGs/004766_ans2.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "For part (c)(ii), $y = 6 - h(x) = -h(x) + 6$ reflects in the $x$-axis and translates upwards by $6$ units: \\begin{aligned} &Q(0, 6) \\to (0, -6) \\to Q'(0, 0) \\cr &P(3, 3) \\to (3, -3) \\to P'(3, 3) \\end{aligned} The horizontal segment lies along $y = 3$ for $x \\ge 3$: <br><br><img src='images/Pure_SVGs/004766_ans3.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "Final Answer: $$gf(x) = |x^2 - 7|$$"
    ],
    "pi_options": [
        {
            "ans": "$$gf(x) = |x^2 - 3|$$",
            "feedback": "This error occurs if the subtraction inside the modulus is computed incorrectly as $-5 + 2$ instead of $-5 - 2$."
        },
        {
            "ans": "$$gf(x) = x^2 - 7$$",
            "feedback": "This mistake is caused by completely omitting the modulus brackets from the composite function $gf(x)$."
        },
        {
            "ans": "$$gf(x) = |x^2 - 5| - 2$$",
            "feedback": "This arises if the functions are composed in the incorrect order or if the modulus operation is misapplied to $f(x)$ only."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Inverse Function Domain Rule",
        "content": "Always remember the golden rule of inverse functions: the domain of $f^{-1}(x)$ is exactly equal to the range of $f(x)$. Never deduce the domain of an inverse from its algebraic formula alone."
    }
},
{
    "id": "004767",
    "board": "CCEA",
    "branch": "Pure",
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
    "question": "<strong>Part (a)</strong><br>A function $f$ is defined by: \\begin{aligned} &f(x) = \\dfrac{4}{x - 1}, \\quad x > 1 \\end{aligned} <strong>(i)</strong> State the range of $f(x)$.<br><strong>(ii)</strong> Find $f^{-1}(x)$, clearly stating its domain.<br><br><strong>Part (b)</strong><br>A function $g$ is defined by: \\begin{aligned} &g(x) = 4 - |x - 2|, \\quad x \\in \\mathbb{R} \\end{aligned} <strong>(i)</strong> Sketch the graph of $y = g(x)$.<br><strong>(ii)</strong> Find the composite function $gf(x)$.<br><br><strong>Part (c)</strong><br>The graph of the symmetrical function $y = h(x)$ is sketched below, with peak $P(0, 4)$ and right intercept $Q(4, 0)$.<br><br><img src='images/Pure_SVGs/004767.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br><strong>(i)</strong> On separate axes, sketch $y = \\dfrac{1}{4}h(2x)$, labelling images of $P$ and $Q$.<br><br><strong>(ii)</strong> On separate axes, sketch $y = 2h(x) - 1$, labelling images of $P$ and $Q$.",
    "steps": [
        "For part (a)(i), we determine the range on $x > 1$. As $x \\to 1^+$, the denominator approaches $0^+$, so $f(x) \\to \\infty$. As $x \\to \\infty$, the denominator becomes large, so $f(x) \\to 0$. Thus, the range is: \\begin{aligned} &f(x) > 0 \\end{aligned}",
        "For part (a)(ii), let $y = f(x)$ and isolate $x$: \\begin{aligned} &y = \\dfrac{4}{x - 1} \\cr &\\quad \\implies x - 1 = \\dfrac{4}{y} \\cr &\\quad \\implies x = \\dfrac{4}{y} + 1 \\end{aligned} Swapping variables gives: \\begin{aligned} &f^{-1}(x) = \\dfrac{4}{x} + 1 \\end{aligned} with domain $x > 0$.",
        "For part (b)(i), we sketch $y = 4 - |x - 2|$. The negative sign reflects the modulus V-shape downwards, and $+4$ translates it vertically upwards. The vertex is at $(2, 4)$, with $y$-intercept at $(0, 2)$ and $x$-intercepts at $(-2, 0)$ and $(6, 0)$: <br><br><img src='images/Pure_SVGs/004767_ans1.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "For part (b)(ii), substitute $f(x)$ into $g(x)$: \\begin{aligned} &gf(x) \\cr &\\quad = 4 - \\Big|\\dfrac{4}{x - 1} - 2\\Big| \\cr &\\quad = 4 - \\Big|\\dfrac{4 - 2(x - 1)}{x - 1}\\Big| \\cr &\\quad = 4 - \\Big|\\dfrac{4 - 2x + 2}{x - 1}\\Big| \\cr &\\quad = 4 - \\Big|\\dfrac{6 - 2x}{x - 1}\\Big| \\end{aligned}",
        "For part (c)(i), $y = \\dfrac{1}{4}h(2x)$ undergoes a horizontal stretch of scale factor $\\dfrac{1}{2}$ and a vertical stretch of scale factor $\\dfrac{1}{4}$: \\begin{aligned} &P(0, 4) \\to P'(0, 1) \\cr &Q(4, 0) \\to Q'(2, 0) \\end{aligned} <br><img src='images/Pure_SVGs/004767_ans2.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "For part (c)(ii), $y = 2h(x) - 1$ undergoes a vertical stretch of scale factor $2$ followed by a vertical translation of $-1$: \\begin{aligned} &P(0, 4) \\to (0, 8) \\to P'(0, 7) \\cr &Q(4, 0) \\to (4, 0) \\to Q'(4, -1) \\end{aligned} <br><img src='images/Pure_SVGs/004767_ans3.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "Final Answer: $$gf(x) = 4 - \\left| \\dfrac{ 6 - 2x }{ x - 1 } \\right|$$"
    ],
    "pi_options": [
        {
            "ans": "$$gf(x) = 4 - \\left| \\dfrac{ 2 - 2x }{ x - 1 } \\right|$$",
            "feedback": "This error is caused by a sign error when expanding $-2(x - 1)$ as $-2x - 2$ instead of $-2x + 2$ in the numerator."
        },
        {
            "ans": "$$gf(x) = 4 - \\left| \\dfrac{4}{ x - 1 } \\right| - 2$$",
            "feedback": "This mistake occurs if the composite structure is misapplied, subtracting $2$ outside of the modulus bracket instead of inside."
        },
        {
            "ans": "$$gf(x) = 4 - \\left| \\dfrac{6 - 2x }{ x } \\right|$$",
            "feedback": "This arises if the denominator of the fraction inside the modulus is incorrectly modified during algebraic simplification."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Inverted Modulus Graph Transformations",
        "content": "For equations of the form $y = a - b|x - c|$, the vertex of the inverted V-shape is always at $(c, a)$. The graph opens downwards because of the negative multiplier $-b$."
    }
},
{
    "id": "004768",
    "board": "CCEA",
    "branch": "Pure",
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
    "question": "<strong>Part (a)</strong><br>A function $f$ is defined by: \\begin{aligned} &f(x) = 2x - 3, \\quad x \\in \\mathbb{R} \\end{aligned} <strong>(i)</strong> State the range of $f(x)$.<br><strong>(ii)</strong> Find $f^{-1}(x)$, clearly stating its domain.<br><br><strong>Part (b)</strong><br>A function $g$ is defined by: \\begin{aligned} &g(x) = |x^2 - 4|, \\quad x \\in \\mathbb{R} \\end{aligned} <strong>(i)</strong> Sketch the graph of $y = g(x)$.<br><strong>(ii)</strong> Find the composite function $gf(x)$.<br><br><strong>Part (c)</strong><br>The graph of $y = h(x)$ is sketched below, with points $Q(-3, -2)$ and $P(3, 4)$. For $x \\ge 3$, the graph is horizontal.<br><br><img src='images/Pure_SVGs/004768.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br><strong>(i)</strong> On separate axes, sketch $y = h(-x)$, labelling images of $P$ and $Q$.<br><br><strong>(ii)</strong> On separate axes, sketch $y = |h(x)|$, labelling images of $P$ and $Q$.",
    "steps": [
        "For part (a)(i), since $f(x) = 2x - 3$ is linear over all real numbers, its outputs are unrestricted: \\begin{aligned} &f(x) \\in \\mathbb{R} \\end{aligned}",
        "For part (a)(ii), let $y = f(x)$ and isolate $x$: \\begin{aligned} &y = 2x - 3 \\cr &\\quad \\implies 2x = y + 3 \\cr &\\quad \\implies x = \\dfrac{y + 3}{2} \\end{aligned} Swapping variables gives: \\begin{aligned} &f^{-1}(x) = \\dfrac{x + 3}{2} \\end{aligned} with domain $x \\in \\mathbb{R}$.",
        "For part (b)(i), we sketch $y = |x^2 - 4|$. The portion between the $x$-intercepts $-2$ and $2$ is reflected upwards across the $x$-axis, forming a W-shaped curve with $x$-intercepts at $(-2, 0)$ and $(2, 0)$, and local maximum at $(0, 4)$: <br><br><img src='images/Pure_SVGs/004768_ans1.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "For part (b)(ii), substitute $f(x)$ into $g(x)$: \\begin{aligned} &gf(x) \\cr &\\quad = g(2x - 3) \\cr &\\quad = |(2x - 3)^2 - 4| \\cr &\\quad = |(4x^2 - 12x + 9) - 4| \\cr &\\quad = |4x^2 - 12x + 5| \\end{aligned}",
        "For part (c)(i), $y = h(-x)$ reflects the graph horizontally across the $y$-axis ($x \\to -x$): \\begin{aligned} &Q(-3, -2) \\to Q'(3, -2) \\cr &P(3, 4) \\to P'(-3, 4) \\end{aligned} The horizontal segment lies along $y = 4$ for $x \\le -3$: <br><br><img src='images/Pure_SVGs/004768_ans2.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "For part (c)(ii), $y = |h(x)|$ reflects negative $y$-values vertically across the $x$-axis: \\begin{aligned} &Q(-3, -2) \\to Q'(-3, 2) \\cr &P(3, 4) \\to P'(3, 4) \\end{aligned} The horizontal line segment remains along $y = 4$ for $x \\ge 3$: <br><br><img src='images/Pure_SVGs/004768_ans3.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "Final Answer: $$gf(x) = |4x^2 - 12x + 5|$$"
    ],
    "pi_options": [
        {
            "ans": "$$gf(x) = |4x^2 - 12x + 13|$$",
            "feedback": "This error occurs if $+9$ and $-4$ are incorrectly combined as $+13$ instead of $+5$ inside the modulus brackets."
        },
        {
            "ans": "$$gf(x) = |4x^2 - 6x + 5|$$",
            "feedback": "This mistake is caused by expanding $(2x - 3)^2$ incorrectly with a middle term of $-6x$ instead of $-12x$."
        },
        {
            "ans": "$$gf(x) = |2x^2 - 7|$$",
            "feedback": "This arises if $(2x - 3)^2$ is incorrectly expanded as $2x^2 - 9$ without the middle term."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: The W-Shape Quadratic Reflection",
        "content": "When sketching $y = |ax^2 + bx + c|$, first sketch the standard parabola. Any section below the $x$-axis reflects vertically upwards, turning the vertex $(h, k)$ into a smooth local maximum at $(h, |k|)$."
    }
},
{
    "id": "004769",
    "board": "CCEA",
    "branch": "Pure",
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
    "question": "<strong>Part (a)</strong><br>A function $f$ is defined by: \\begin{aligned} &f(x) = 2 + \\ln x, \\quad x > 0 \\end{aligned} <strong>(i)</strong> State the range of $f(x)$.<br><strong>(ii)</strong> Find $f^{-1}(x)$, clearly stating its domain.<br><br><strong>Part (b)</strong><br>A function $g$ is defined by: \\begin{aligned} &g(x) = |\\mathrm{e}^x - 3|, \\quad x \\in \\mathbb{R} \\end{aligned} <strong>(i)</strong> Sketch the graph of $y = g(x)$.<br><strong>(ii)</strong> Find the composite function $gf(x)$.<br><br><strong>Part (c)</strong><br>The graph of $y = h(x)$ is sketched below, with points $Q(-4, 0)$ and $P(0, 5)$. For $0 \\le x \\le 4$, the graph is horizontal.<br><br><img src='images/Pure_SVGs/004769.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br><strong>(i)</strong> On separate axes, sketch $y = -h(x)$, labelling images of $P$ and $Q$.<br><br><strong>(ii)</strong> On separate axes, sketch $y = h(2x) + 1$, labelling images of $P$ and $Q$.",
    "steps": [
        "For part (a)(i), since $\\ln x$ takes all real values on $x > 0$, the vertical translation by $2$ produces: \\begin{aligned} &f(x) \\in \\mathbb{R} \\end{aligned}",
        "For part (a)(ii), let $y = f(x)$ and isolate $x$: \\begin{aligned} &y = 2 + \\ln x \\cr &\\quad \\implies \\ln x = y - 2 \\cr &\\quad \\implies x = \\mathrm{e}^{y - 2} \\end{aligned} Swapping variables gives: \\begin{aligned} &f^{-1}(x) = \\mathrm{e}^{x - 2} \\end{aligned} with domain $x \\in \\mathbb{R}$.",
        "For part (b)(i), we sketch $y = |\\mathrm{e}^x - 3|$. The curve $y = \\mathrm{e}^x - 3$ has horizontal asymptote $y = -3$, $y$-intercept $(0, -2)$, and $x$-intercept $(\\ln 3, 0)$. Reflecting the negative portion upwards reflects the horizontal asymptote to $y = 3$ and the $y$-intercept to $(0, 2)$: <br><br><img src='images/Pure_SVGs/004769_ans1.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "For part (b)(ii), substitute $f(x)$ into $g(x)$: \\begin{aligned} &gf(x) \\cr &\\quad = |\\mathrm{e}^{2 + \\ln x} - 3| \\cr &\\quad = |\\mathrm{e}^2 \\cdot \\mathrm{e}^{\\ln x} - 3| \\cr &\\quad = |x\\mathrm{e}^2 - 3| \\end{aligned} for $x > 0$.",
        "For part (c)(i), $y = -h(x)$ reflects the graph vertically across the $x$-axis ($y \\to -y$): \\begin{aligned} &Q(-4, 0) \\to Q'(-4, 0) \\cr &P(0, 5) \\to P'(0, -5) \\end{aligned} <br><img src='images/Pure_SVGs/004769_ans2.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "For part (c)(ii), $y = h(2x) + 1$ undergoes a horizontal compression of scale factor $\\dfrac{1}{2}$ followed by a vertical translation upwards of $1$: \\begin{aligned} &Q(-4, 0) \\to (-2, 0) \\to Q'(-2, 1) \\cr &P(0, 5) \\to (0, 5) \\to P'(0, 6) \\end{aligned} The horizontal segment extends to $x = 2$ along $y = 6$: <br><br><img src='images/Pure_SVGs/004769_ans3.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "Final Answer: $$gf(x) = |x e^2 - 3|$$"
    ],
    "pi_options": [
        {
            "ans": "$$gf(x) = |e^{2x} - 3|$$",
            "feedback": "This error occurs if the index laws are misapplied, incorrectly assuming that $\\mathrm{e}^{2 + \\ln x} = \\mathrm{e}^{2x}$."
        },
        {
            "ans": "$$gf(x) = |(x + 2)e^2 - 3|$$",
            "feedback": "This mistake is caused by failing to apply index laws properly, misinterpreting $\\mathrm{e}^{2 + \\ln x}$ as $\\mathrm{e}^2(2 + x)$."
        },
        {
            "ans": "$$gf(x) = |xe^2| - 3$$",
            "feedback": "This arises from placing the constant $-3$ outside of the modulus bracket."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Asymptote Reflections in Modulus Graphs",
        "content": "When applying a modulus transformation to a curve with a negative horizontal asymptote, remember to reflect the asymptote itself! For $y = \\mathrm{e}^x - 3$, the asymptote at $y = -3$ reflects to $y = 3$."
    }
},
{
    "id": "004770",
    "board": "CCEA",
    "branch": "Pure",
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
    "question": "<strong>Part (a)</strong><br>A function $f$ is defined by: \\begin{aligned} &f(x) = 3x - 1, \\quad x \\in \\mathbb{R} \\end{aligned} <strong>(i)</strong> State the range of $f(x)$.<br><strong>(ii)</strong> Find $f^{-1}(x)$, clearly stating its domain.<br><br><strong>Part (b)</strong><br>A function $g$ is defined by: \\begin{aligned} &g(x) = \\Big|\\dfrac{2}{x} - 1\\Big|, \\quad x \\ne 0 \\end{aligned} <strong>(i)</strong> Sketch the graph of $y = g(x)$.<br><strong>(ii)</strong> Find the composite function $gf(x)$.<br><br><strong>Part (c)</strong><br>The graph of $y = h(x)$ is sketched below, with points $Q(0, 2)$ and $P(4, -2)$. For $x \\ge 4$, the graph is horizontal.<br><br><img src='images/Pure_SVGs/004770.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br><strong>(i)</strong> On separate axes, sketch $y = h(x - 3)$, labelling images of $P$ and $Q$.<br><br><strong>(ii)</strong> On separate axes, sketch $y = |h(x)|$, labelling images of $P$ and $Q$.",
    "steps": [
        "For part (a)(i), since $f(x) = 3x - 1$ is linear over all real numbers, its outputs are unrestricted: \\begin{aligned} &f(x) \\in \\mathbb{R} \\end{aligned}",
        "For part (a)(ii), let $y = f(x)$ and isolate $x$: \\begin{aligned} &y = 3x - 1 \\cr &\\quad \\implies 3x = y + 1 \\cr &\\quad \\implies x = \\dfrac{y + 1}{3} \\end{aligned} Swapping variables gives: \\begin{aligned} &f^{-1}(x) = \\dfrac{x + 1}{3} \\end{aligned} with domain $x \\in \\mathbb{R}$.",
        "For part (b)(i), we sketch $y = \\Big|\\dfrac{2}{x} - 1\\Big|$. The curve $y = \\dfrac{2}{x} - 1$ has vertical asymptote $x = 0$, horizontal asymptote $y = -1$, and $x$-intercept $(2, 0)$. Reflecting the negative parts upwards reflects the horizontal asymptote to $y = 1$, while the vertical asymptote at $x = 0$ remains unchanged: <br><br><img src='images/Pure_SVGs/004770_ans1.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "For part (b)(ii), substitute $f(x)$ into $g(x)$: \\begin{aligned} &gf(x) \\cr &\\quad = \\Big|\\dfrac{2}{3x - 1} - 1\\Big| \\cr &\\quad = \\Big|\\dfrac{2 - (3x - 1)}{3x - 1}\\Big| \\cr &\\quad = \\Big|\\dfrac{2 - 3x + 1}{3x - 1}\\Big| \\cr &\\quad = \\Big|\\dfrac{3 - 3x}{3x - 1}\\Big| \\end{aligned} valid for $x \\ne \\dfrac{1}{3}$.",
        "For part (c)(i), $y = h(x - 3)$ translates the graph horizontally to the right by $3$ units ($x \\to x + 3$): \\begin{aligned} &Q(0, 2) \\to Q'(3, 2) \\cr &P(4, -2) \\to P'(7, -2) \\end{aligned} <br><img src='images/Pure_SVGs/004770_ans2.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "For part (c)(ii), $y = |h(x)|$ reflects negative $y$-values vertically across the $x$-axis: \\begin{aligned} &Q(0, 2) \\to Q'(0, 2) \\cr &P(4, -2) \\to P'(4, 2) \\end{aligned} The horizontal line segment lies along $y = 2$ for $x \\ge 4$: <br><br><img src='images/Pure_SVGs/004770_ans3.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "Final Answer: $$gf(x) = \\left| \\dfrac{ 3 - 3x }{ 3x - 1 } \\right|$$"
    ],
    "pi_options": [
        {
            "ans": "$$gf(x) = \\left| \\dfrac{ 1 - 3x }{ 3x - 1 } \\right|$$",
            "feedback": "This error is caused by a sign mistake when expanding $2 - (3x - 1)$, writing $-1$ instead of $+1$."
        },
        {
            "ans": "$$gf(x) = \\left| \\dfrac{2}{ 3x - 2 } \\right|$$",
            "feedback": "This mistake occurs if the subtraction of $1$ is applied inside the fraction's denominator directly instead of finding a common denominator."
        },
        {
            "ans": "$$gf(x) = \\left| \\dfrac{ 3 - 3x }{ 3x } \\right|$$",
            "feedback": "This arises from a simplification error where the denominator $3x - 1$ is incorrectly reduced to $3x$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Reciprocal Graph Modulus Asymptotes",
        "content": "When applying a modulus transformation to $y = \\Big|\\dfrac{a}{x} + b\\Big|$ where $b < 0$, the horizontal asymptote at $y = b$ reflects across the $x$-axis to $y = |b|$."
    }
},
{
    "id": "004771",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Trigonometry",
    "topic": "Trigonometric Identities",
    "subtopic": [
        "R-formula",
        "Trigonometric Optimisation"
    ],
    "img": false,
    "question": "The expression $5\\sin x + 12\\cos x$ can be written in the form $R\\sin(x + \\alpha)$, where $R$ is an integer and $0^\\circ < \\alpha < 90^\\circ$.<br><br><strong>(i)</strong> Find the values of $R$ and $\\alpha$.<br><br><strong>(ii)</strong> Hence, find the maximum value of: \\begin{aligned} &g(x) = \\dfrac{24}{5\\sin x + 12\\cos x + 15} \\end{aligned} and the smallest positive value of $x$ at which this maximum occurs.",
    "steps": [
        "Using the compound angle identity: \\begin{aligned} &R\\sin(x + \\alpha) \\cr &\\quad = R\\sin x\\cos\\alpha \\cr &\\qquad + R\\cos x\\sin\\alpha \\end{aligned} Equating coefficients with $5\\sin x + 12\\cos x$: \\begin{aligned} &R\\cos\\alpha = 5 \\cr &R\\sin\\alpha = 12 \\end{aligned}",
        "To find $R$, square and add the equations: \\begin{aligned} &R^2(\\cos^2\\alpha + \\sin^2\\alpha) = 5^2 + 12^2 \\cr &\\quad \\implies R^2 = 169 \\cr &\\quad \\implies R = 13 \\end{aligned} To find $\\alpha$, divide the equations: \\begin{aligned} &\\tan\\alpha = \\dfrac{12}{5} \\cr &\\quad = 2.4 \\cr &\\quad \\implies \\alpha \\approx 67.38^\\circ \\end{aligned} Thus, the expression is: \\begin{aligned} &13\\sin(x + 67.38^\\circ) \\end{aligned}",
        "Substitute this form into $g(x)$: \\begin{aligned} &g(x) = \\dfrac{24}{13\\sin(x + 67.38^\\circ) + 15} \\end{aligned} To maximise $g(x)$, minimise the denominator using $\\sin(x + 67.38^\\circ) = -1$: \\begin{aligned} &\\text{Min Denominator} \\cr &\\quad = 13(-1) + 15 \\cr &\\quad = 2 \\end{aligned} Evaluating the maximum value gives: \\begin{aligned} &g_{\\text{max}} = \\dfrac{24}{2} \\cr &\\quad = 12 \\end{aligned}",
        "The minimum denominator occurs when: \\begin{aligned} &\\sin(x + 67.38^\\circ) = -1 \\cr &\\quad \\implies x + 67.38^\\circ = 270^\\circ \\cr &\\quad \\implies x = 270^\\circ - 67.38^\\circ \\cr &\\quad \\implies x = 202.6^\\circ \\end{aligned} Since $202.6^\\circ > 0$, this is the smallest positive value.",
        "Final Answer: $$g_{\\text{max}} = 12,\\ x = 202.6^\\circ$$"
    ],
    "pi_options": [
        {
            "ans": "$$g_{\\text{max}} = 24,\\ x = 22.6^\\circ$$",
            "feedback": "This error occurs if you assume the minimum value of the sine term is $0$ instead of $-1$, or if you solved the angle equation as $x + 67.38^\\circ = 90^\\circ$ instead of $270^\\circ$."
        },
        {
            "ans": "$$g_{\\text{max}} = 0.857,\\ x = 22.6^\\circ$$",
            "feedback": "This error occurs if you mistakenly maximise the denominator instead of minimising it. A denominator of $13(1) + 15 = 28$ gives the minimum value of $g(x)$, not its maximum."
        },
        {
            "ans": "$$g_{\\text{max}} = 12,\\ x = 22.6^\\circ$$",
            "feedback": "While $g_{\\text{max}} = 12$ is correct, $x = 22.6^\\circ$ comes from setting the sine function to $+1$ ($x + 67.38^\\circ = 90^\\circ$) rather than $-1$ ($x + 67.38^\\circ = 270^\\circ$)."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Reciprocal Optimisation Signs",
        "content": "To maximise a fraction with a positive constant numerator, you must *minimise* its denominator. Setting the sine term to $-1$ minimizes the denominator and maximizes the overall function."
    }
},
{
    "id": "004772",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Trigonometry",
    "topic": "Trigonometric Identities",
    "subtopic": [
        "R-formula",
        "Trigonometric Optimisation"
    ],
    "img": false,
    "question": "The expression $3\\sin x - 4\\cos x$ can be written in the form $R\\sin(x - \\alpha)$, where $R > 0$ and $0 < \\alpha < \\dfrac{\\pi}{2}$.<br><br><strong>(i)</strong> Find the exact value of $R$ and the value of $\\alpha$ correct to 4 significant figures.<br><br><strong>(ii)</strong> Hence, find the minimum value of: \\begin{aligned} &h(x) = \\dfrac{10}{3\\sin x - 4\\cos x + 7} \\end{aligned} and the smallest positive value of $x$, in radians, at which this minimum occurs, to 3 significant figures.",
    "steps": [
        "Using the compound angle subtraction identity: \\begin{aligned} &R\\sin(x - \\alpha) \\cr &\\quad = R\\sin x\\cos\\alpha \\cr &\\qquad - R\\cos x\\sin\\alpha \\end{aligned} Equating coefficients with $3\\sin x - 4\\cos x$: \\begin{aligned} &R\\cos\\alpha = 3 \\cr &R\\sin\\alpha = 4 \\end{aligned}",
        "To find $R$: \\begin{aligned} &R^2 = 3^2 + 4^2 \\cr &\\quad = 25 \\cr &\\quad \\implies R = 5 \\end{aligned} To find $\\alpha$ in radians: \\begin{aligned} &\\tan\\alpha = \\dfrac{4}{3} \\cr &\\quad \\implies \\alpha \\approx 0.9273\\text{ rad} \\end{aligned} Thus, the expression is: \\begin{aligned} &5\\sin(x - 0.9273) \\end{aligned}",
        "Substitute into $h(x)$: \\begin{aligned} &h(x) = \\dfrac{10}{5\\sin(x - 0.9273) + 7} \\end{aligned} To minimise $h(x)$, maximise the denominator using $\\sin(x - 0.9273) = 1$: \\begin{aligned} &\\text{Max Denominator} \\cr &\\quad = 5(1) + 7 \\cr &\\quad = 12 \\end{aligned} Evaluating the minimum value gives: \\begin{aligned} &h_{\\text{min}} = \\dfrac{10}{12} \\cr &\\quad = \\dfrac{5}{6} \\approx 0.833 \\end{aligned}",
        "The maximum denominator occurs when: \\begin{aligned} &\\sin(x - 0.9273) = 1 \\cr &\\quad \\implies x - 0.9273 = \\dfrac{\\pi}{2} \\cr &\\quad \\implies x = \\dfrac{\\pi}{2} + 0.9273 \\cr &\\quad \\implies x \\approx 2.50\\text{ rad} \\end{aligned}",
        "Final Answer: $$h_{\\text{min}} = 0.833,\\ x = 2.50\\text{ rad}$$"
    ],
    "pi_options": [
        {
            "ans": "$$h_{\\text{min}} = 5,\\ x = 2.50\\text{ rad}$$",
            "feedback": "This error occurs if you mistakenly identify the value of the maximised denominator ($12 - 7 = 5$) as the final minimum value of the function, rather than dividing $10$ by $12$."
        },
        {
            "ans": "$$h_{\\text{min}} = 0.833,\\ x = 0.644\\text{ rad}$$",
            "feedback": "While $0.833$ is correct, you subtracted $0.9273$ from $\\frac{\\pi}{2}$ instead of adding it when solving $x - 0.9273 = \\frac{\\pi}{2}$."
        },
        {
            "ans": "$$h_{\\text{min}} = 5,\\ x = 4.07\\text{ rad}$$",
            "feedback": "This is a dual error: minimising the denominator to find the maximum rather than minimum, and solving $x - 0.9273 = \\frac{3\\pi}{2}$ incorrectly."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Radians Mode and Domain Limits",
        "content": "Ensure your calculator is in <strong>>Radian<\strong> mode. When solving $x - \\alpha = \\dfrac{\\pi}{2}$, add $\\alpha$ to both sides and check that the resulting angle is positive and in range."
    }
},
{
    "id": "004773",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Trigonometry",
    "topic": "Trigonometric Identities",
    "subtopic": [
        "R-formula",
        "Quadratic Trigonometric Expressions"
    ],
    "img": false,
    "question": "The expression $24\\cos\\theta - 7\\sin\\theta$ can be written in the form $R\\cos(\\theta + \\alpha)$, where $R > 0$ and $0^\\circ < \\alpha < 90^\\circ$.<br><br><strong>(i)</strong> Find the value of $R$ and the value of $\\alpha$ correct to 1 decimal place.<br><br><strong>(ii)</strong> Hence, find the maximum and minimum values of: \\begin{aligned} &f(\\theta)\\cr & = (24\\cos\\theta - 7\\sin\\theta)^2 \\cr &\\quad + 6(24\\cos\\theta - 7\\sin\\theta) + 12 \\end{aligned}",
    "steps": [
        "Using the compound angle identity: \\begin{aligned} &R\\cos(\\theta + \\alpha) \\cr &\\quad = R\\cos\\theta\\cos\\alpha \\cr &\\qquad - R\\sin\\theta\\sin\\alpha \\end{aligned} Equating coefficients with $24\\cos\\theta - 7\\sin\\theta$: \\begin{aligned} &R\\cos\\alpha = 24 \\cr &R\\sin\\alpha = 7 \\end{aligned}",
        "To find $R$: \\begin{aligned} &R^2 = 24^2 + 7^2 \\cr &\\quad = 625 \\cr &\\quad \\implies R = 25 \\end{aligned} To find $\\alpha$: \\begin{aligned} &\\tan\\alpha = \\dfrac{7}{24} \\cr &\\quad \\implies \\alpha \\approx 16.3^\\circ \\end{aligned} Thus, the expression is: \\begin{aligned} &25\\cos(\\theta + 16.3^\\circ) \\end{aligned}",
        "Let \\begin{aligned} u & = 24\\cos\\theta - 7\\sin\\theta\\cr & = 25\\cos(\\theta + 16.3^\\circ)\\end{aligned} Since $-1 \\le \\cos(\\dots) \\le 1$, the domain of $u$ is $-25 \\le u \\le 25$.<br><br>Substituting $u$ gives the quadratic: \\begin{aligned} &f(u) = u^2 + 6u + 12 \\end{aligned}",
        "Completing the square on $f(u)$: \\begin{aligned} &f(u) \\cr &\\quad = (u^2 + 6u + 9) - 9 + 12 \\cr &\\quad = (u + 3)^2 + 3 \\end{aligned} The vertex is at $u = -3$. Since $-3 \\in [-25, 25]$, the minimum value is: \\begin{aligned} &f_{\\text{min}} = 3 \\end{aligned}",
        "The maximum occurs at the endpoint furthest from $u = -3$, which is $u = 25$:<br><br>• At $u = -25$: \\begin{aligned} &f(-25) \\cr &\\quad = (-25 + 3)^2 + 3 \\cr &\\quad = (-22)^2 + 3 \\cr &\\quad = 487 \\end{aligned} • At $u = 25$: \\begin{aligned} &f(25) \\cr &\\quad = (25 + 3)^2 + 3 \\cr &\\quad = 28^2 + 3 \\cr &\\quad = 787 \\end{aligned} Thus, $\\text{Max} = 787$ and $\\text{Min} = 3$.",
        "Final Answer: $$\\text{Max} = 787,\\ \\text{Min} = 3$$"
    ],
    "pi_options": [
        {
            "ans": "$$\\text{Max} = 787,\\ \\text{Min} = 487$$",
            "feedback": "This error occurs if you assume the minimum must be at an endpoint. Because the parabola vertex $u = -3$ falls inside $[-25, 25]$, the absolute minimum occurs at the vertex itself, giving $3$."
        },
        {
            "ans": "$$\\text{Max} = 637,\\ \\text{Min} = 3$$",
            "feedback": "Your minimum value is correct, but an arithmetic slip occurred when evaluating $f(25) = (28)^2 + 3 = 787$."
        },
        {
            "ans": "$$\\text{Max} = 787,\\ \\text{Min} = 12$$",
            "feedback": "This happens if you set $u = 0$ to find the minimum instead of checking the quadratic vertex at $u = -3$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Boundaries of Quadratic Trig Functions",
        "content": "When evaluating a quadratic expression in a trigonometric variable $f(u)$, always check whether the vertex lies within the allowed range. If $u = -3$ is in $[-25, 25]$, the minimum is at the vertex, not at the boundaries."
    }
},
{
    "id": "004774",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Trigonometry",
    "topic": "Trigonometric Identities",
    "subtopic": [
        "R-formula",
        "Solving Trigonometric Equations"
    ],
    "img": false,
    "question": "The expression $\\sqrt{3}\\sin 2\\theta - \\cos 2\\theta$ can be written in the form $R\\sin(2\\theta - \\alpha)$, where $R > 0$ and $0 < \\alpha < \\dfrac{\\pi}{2}$.<br><br><strong>(i)</strong> Find the value of $R$ and the exact value of $\\alpha$ in radians.<br><br><strong>(ii)</strong> Hence, solve the trigonometric equation: \\begin{aligned} &\\sqrt{3}\\sin 2\\theta - \\cos 2\\theta = \\sqrt{2} \\end{aligned} in the interval $0 \\le \\theta \\le \\pi$, giving your answers in terms of $\\pi$.",
    "steps": [
        "Using the compound subtraction identity: \\begin{aligned} &R\\sin(2\\theta - \\alpha) \\cr &\\quad = R\\sin 2\\theta\\cos\\alpha \\cr &\\qquad - R\\cos 2\\theta\\sin\\alpha \\end{aligned} Equating coefficients with $\\sqrt{3}\\sin 2\\theta - \\cos 2\\theta$: \\begin{aligned} &R\\cos\\alpha = \\sqrt{3} \\cr &R\\sin\\alpha = 1 \\end{aligned}",
        "To find $R$: \\begin{aligned} &R^2 = (\\sqrt{3})^2 + (-1)^2 \\cr &\\quad = 4 \\cr &\\quad \\implies R = 2 \\end{aligned} To find $\\alpha$ in radians: \\begin{aligned} &\\tan\\alpha = \\dfrac{1}{\\sqrt{3}} \\cr &\\quad \\implies \\alpha = \\dfrac{\\pi}{6} \\end{aligned} Thus, the expression is: \\begin{aligned} &2\\sin\\Big(2\\theta - \\dfrac{\\pi}{6}\\Big) \\end{aligned}",
        "Substituting into the equation: \\begin{aligned} &2\\sin\\Big(2\\theta - \\dfrac{\\pi}{6}\\Big) = \\sqrt{2} \\cr &\\quad \\implies \\sin\\Big(2\\theta - \\dfrac{\\pi}{6}\\Big) = \\dfrac{\\sqrt{2}}{2} \\end{aligned}",
        "For $0 \\le \\theta \\le \\pi$, the interval for $u = 2\\theta - \\dfrac{\\pi}{6}$ is: \\begin{aligned} &0 \\le 2\\theta \\le 2\\pi \\cr &\\quad \\implies -\\dfrac{\\pi}{6} \\le 2\\theta - \\dfrac{\\pi}{6} \\le \\dfrac{11\\pi}{6} \\end{aligned}",
        "Solving $\\sin u = \\dfrac{\\sqrt{2}}{2}$ in $\\big[-\\dfrac{\\pi}{6}, \\dfrac{11\\pi}{6}\\big]$: \\begin{aligned} &u = \\dfrac{\\pi}{4} \\cr &u = \\pi - \\dfrac{\\pi}{4} \\cr &\\quad = \\dfrac{3\\pi}{4} \\end{aligned}",
        "Solving back for $\\theta$:<br><br>• For $u = \\dfrac{\\pi}{4}$: \\begin{aligned} &2\\theta - \\dfrac{\\pi}{6} = \\dfrac{\\pi}{4} \\cr &\\quad \\implies 2\\theta = \\dfrac{5\\pi}{12} \\cr &\\quad \\implies \\theta = \\dfrac{5\\pi}{24} \\end{aligned} • For $u = \\dfrac{3\\pi}{4}$: \\begin{aligned} &2\\theta - \\dfrac{\\pi}{6} = \\dfrac{3\\pi}{4} \\cr &\\quad \\implies 2\\theta = \\dfrac{11\\pi}{12} \\cr &\\quad \\implies \\theta = \\dfrac{11\\pi}{24} \\end{aligned}",
        "Final Answer: $$\\theta = \\dfrac{ 5\\pi }{ 24 },\\ \\theta = \\dfrac{ 11\\pi }{ 24 }$$"
    ],
    "pi_options": [
        {
            "ans": "$$\\theta = \\dfrac{ 5\\pi }{ 24 },\\ \\theta = \\dfrac{ 13\\pi }{ 24 }$$",
            "feedback": "This error occurs if you make an arithmetic error when calculating the second quadrant angle, writing $\\pi - \\frac{\\pi}{6}$ instead of $\\pi - \\frac{\\pi}{4}$."
        },
        {
            "ans": "$$\\theta = \\dfrac{ \\pi }{ 24 },\\ \\theta = \\dfrac{ 7\\pi }{ 24 }$$",
            "feedback": "This occurs if you incorrectly subtract $\\frac{\\pi}{6}$ from the primary angles instead of adding it when solving for $2\\theta$."
        },
        {
            "ans": "$$\\theta = \\dfrac{ 5\\pi }{ 12 },\\ \\theta = \\dfrac{ 11\\pi }{ 12 }$$",
            "feedback": "This error occurs if you solve for $2\\theta$ successfully but forget to divide by $2$ at the final step to isolate $\\theta$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Interval Shifts for $2\\theta$",
        "content": "When solving equations of the form $2\\theta - \\alpha = u$, always compute the transformed domain for $u$ before writing down solutions to avoid missing valid roots."
    }
},
{
    "id": "004775",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Trigonometry",
    "topic": "Trigonometric Identities",
    "subtopic": [
        "R-formula",
        "Trigonometric Modelling",
        "Optimisation"
    ],
    "img": "images/Pure_SVGs/004775.svg",
    "question": "A rectangular sign $ABCD$ has side lengths $AB = 6\\text{ m}$ and $BC = 2\\text{ m}$. The sign is tilted such that corner $A$ rests on horizontal ground, and side $AB$ makes an angle $\\theta$ with the horizontal, where $0^\\circ < \\theta < 90^\\circ$, as shown in the diagram.<br><br><strong>(i)</strong> Show that the vertical height, $H$, in metres, of point $C$ above the ground is: \\begin{aligned} &H = 6\\sin\\theta + 2\\cos\\theta \\end{aligned} <strong>(ii)</strong> Express $6\\sin\\theta + 2\\cos\\theta$ in the form $R\\sin(\\theta + \\alpha)$, where $R > 0$ and $0^\\circ < \\alpha < 90^\\circ$. Give $R$ in exact surd form and $\\alpha$ to 1 decimal place.<br><br><strong>(iii)</strong> Find the maximum height of point $C$ above the ground to 3 significant figures, and the angle $\\theta$ at which this occurs to 1 decimal place.",
    "steps": [
        "With $A$ at the origin $(0, 0)$, the vertical height of $B$ is: \\begin{aligned} &y_B = 6\\sin\\theta \\end{aligned} Side $BC$ of length $2\\text{ m}$ is perpendicular to $AB$, making an angle $\\theta$ with the vertical. The additional vertical rise from $B$ to $C$ is: \\begin{aligned} &\\Delta y = 2\\cos\\theta \\end{aligned} Thus, the overall vertical height $H$ of $C$ is: \\begin{aligned} &H = y_B + \\Delta y \\cr &\\quad = 6\\sin\\theta + 2\\cos\\theta \\end{aligned}",
        "Using the compound angle identity: \\begin{aligned} &R\\sin(\\theta + \\alpha) \\cr &\\quad = R\\sin\\theta\\cos\\alpha \\cr &\\qquad + R\\cos\\theta\\sin\\alpha \\end{aligned} Equating coefficients with $6\\sin\\theta + 2\\cos\\theta$: \\begin{aligned} &R\\cos\\alpha = 6 \\cr &R\\sin\\alpha = 2 \\end{aligned}",
        "To find $R$: \\begin{aligned} &R^2 = 6^2 + 2^2 \\cr &\\quad = 40 \\cr &\\quad \\implies R = 2\\sqrt{10} \\end{aligned} To find $\\alpha$: \\begin{aligned} &\\tan\\alpha = \\dfrac{2}{6} \\cr &\\quad = \\dfrac{1}{3} \\cr &\\quad \\implies \\alpha \\approx 18.4^\\circ \\end{aligned} Thus, the expression is: \\begin{aligned} &H = 2\\sqrt{10}\\sin(\\theta + 18.4^\\circ) \\end{aligned}",
        "The maximum height occurs when $\\sin(\\theta + 18.43^\\circ) = 1$: \\begin{aligned} &H_{\\text{max}} = 2\\sqrt{10} \\cr &\\quad \\approx 6.32\\text{ m} \\end{aligned} This occurs when: \\begin{aligned} &\\theta + 18.43^\\circ = 90^\\circ \\cr &\\quad \\implies \\theta = 90^\\circ - 18.43^\\circ \\cr &\\quad \\implies \\theta \\approx 71.6^\\circ \\end{aligned} Since $71.6^\\circ \\in (0^\\circ, 90^\\circ)$, this is the required angle.",
        "Final Answer: $$H_{\\text{max}} = 6.32\\text{ m},\\ \\theta = 71.6^\\circ$$"
    ],
    "pi_options": [
        {
            "ans": "$$H_{\\text{max}} = 6.32\\text{ m},\\ \\theta = 18.4^\\circ$$",
            "feedback": "This error occurs if you mistakenly identify the phase angle $\\alpha = 18.4^\\circ$ as the physical tilt angle $\\theta$, rather than computing $90^\\circ - \\alpha$."
        },
        {
            "ans": "$$H_{\\text{max}} = 8.00\\text{ m},\\ \\theta = 71.6^\\circ$$",
            "feedback": "While the angle is correct, adding the coefficients directly ($6 + 2 = 8$) is incorrect. You must evaluate $R = \\sqrt{6^2 + 2^2} = 2\\sqrt{10} \\approx 6.32\\text{ m}$."
        },
        {
            "ans": "$$H_{\\text{max}} = 6.32\\text{ m},\\ \\theta = 108.4^\\circ$$",
            "feedback": "This occurs if you solve $\\theta = 90^\\circ + 18.43^\\circ$ ($108.4^\\circ$) by adding $\\alpha$ instead of subtracting it, which also violates $0^\\circ < \\theta < 90^\\circ$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Physical Angle vs Phase Angle",
        "content": "In physical modelling scenarios, the maximum height occurs when the sine term equals $1$, which yields $\\theta + \\alpha = 90^\\circ$. The angle of tilt is the *complement* of the phase angle ($\\theta = 90^\\circ - \\alpha$)."
    }
},
{
    "id": "004776",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Partial Fractions",
    "subtopic": [
        "Linear Denominators"
    ],
    "img": false,
    "question": "Express the following algebraic fraction in partial fractions:$$\\dfrac{ 7x - 1 }{ (x + 3)(x - 1) }$$",
    "steps": [
        "We set up the partial fractions identity for distinct linear factors:\\begin{aligned} &\\dfrac{ 7x - 1 }{ (x + 3)(x - 1) } \\cr &\\quad \\equiv \\dfrac{ A }{ x + 3 } + \\dfrac{ B }{ x - 1 } \\end{aligned}Multiply both sides by $(x + 3)(x - 1)$ to obtain the linear identity:\\begin{aligned} &7x - 1 \\cr &\\quad \\equiv A(x - 1) + B(x + 3) \\end{aligned}",
        "To find the constant $B$, substitute $x = 1$ to eliminate the $A$ term:\\begin{aligned} &7(1) - 1 = B(1 + 3) \\cr &6 = 4B \\cr &B = 1.5 \\end{aligned}",
        "To find the constant $A$, substitute $x = -3$ to eliminate the $B$ term:\\begin{aligned} &7(-3) - 1 = A(-3 - 1) \\cr &-22 = -4A \\cr &A = 5.5 \\end{aligned}",
        "Substitute the values of $A = 5.5$ and $B = 1.5$ back into our initial setup:\\begin{aligned} &\\dfrac{ 7x - 1 }{ (x + 3)(x - 1) } \\cr &\\quad = \\dfrac{ 5.5 }{ x + 3 } + \\dfrac{ 1.5 }{ x - 1 } \\end{aligned}",
        "Final Answer: $$\\dfrac{ 5.5 }{ x + 3 } + \\dfrac{ 1.5 }{ x - 1 }$$"
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
        "content": "Always do a quick sanity check by substituting a simple value like $x = 0$ or $x = 2$ back into both the original fraction and your partial fractions. At $x = 0$, the original fraction gives $\\dfrac{ -1 }{ -3 } = \\dfrac{ 1 }{ 3 }$. Substituting into our partial fractions yields:\\begin{aligned} &\\dfrac{ 5.5 }{ 3 } - 1.5 \\cr &\\quad = \\dfrac{ 11 }{ 6 } - \\dfrac{ 9 }{ 6 } \\cr &\\quad = \\dfrac{ 1 }{ 3 } \\end{aligned}Both values match!"
    }
},
{
    "id": "004777",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Partial Fractions",
    "subtopic": [
        "Repeated Linear Factors"
    ],
    "img": false,
    "question": "Express the following algebraic fraction in partial fractions:$$\\dfrac{ x + 7 }{ (x + 1)(x - 2)^2 }$$",
    "steps": [
        "We set up the partial fractions identity for repeated linear factors in the denominator:\\begin{aligned} &\\dfrac{ x + 7 }{ (x + 1)(x - 2)^2 } \\cr &\\quad \\equiv \\dfrac{ A }{ x + 1 } + \\dfrac{ B }{ x - 2 } \\cr &\\qquad + \\dfrac{ C }{ (x - 2)^2 } \\end{aligned}Multiply both sides by $(x + 1)(x - 2)^2$ to obtain the identity:\\begin{aligned} &x + 7 \\cr &\\quad \\equiv A(x - 2)^2 \\cr &\\qquad + B(x + 1)(x - 2) \\cr &\\qquad + C(x + 1) \\end{aligned}",
        "To find the constant $C$, substitute $x = 2$ to eliminate both the $A$ and $B$ terms:\\begin{aligned} &2 + 7 = C(2 + 1) \\cr &9 = 3C \\cr &C = 3 \\end{aligned}",
        "To find the constant $A$, substitute $x = -1$ to eliminate both the $B$ and $C$ terms:\\begin{aligned} &-1 + 7 = A(-1 - 2)^2 \\cr &6 = A(-3)^2 \\cr &6 = 9A \\cr &A = \\dfrac{ 2 }{ 3 } \\end{aligned}",
        "To find the constant $B$, equate the coefficients of the $x^2$ terms on both sides of the identity:\\begin{aligned} &0 = A + B \\cr &0 = \\dfrac{ 2 }{ 3 } + B \\cr &B = -\\dfrac{ 2 }{ 3 } \\end{aligned}",
        "Substitute the values of $A$, $B$, and $C$ back into our initial setup:\\begin{aligned} &\\dfrac{ x + 7 }{ (x + 1)(x - 2)^2 } \\cr &\\quad = \\dfrac{ 2 }{ 3(x + 1) } - \\dfrac{ 2 }{ 3(x - 2) } \\cr &\\qquad + \\dfrac{ 3 }{ (x - 2)^2 } \\end{aligned}",
        "Final Answer: $$\\dfrac{ 2 }{ 3(x + 1) } - \\dfrac{ 2 }{ 3(x - 2) } + \\dfrac{ 3 }{ (x - 2)^2 }$$"
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
            "feedback": "This occurs if you make an arithmetic slip when simplifying the equation for $A$, calculating $A = \\dfrac{ 9 }{ 6 }$ instead of $A = \\dfrac{ 6 }{ 9 }$, which simplifies to $\\dfrac{ 2 }{ 3 }$."
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
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Partial Fractions",
    "subtopic": [
        "Repeated Linear Factors"
    ],
    "img": false,
    "question": "Express the following algebraic fraction in partial fractions:$$\\dfrac{ 4x^2 - 3x + 5 }{ (x - 1)^2(x + 2) }$$",
    "steps": [
        "We set up the partial fractions identity for the repeated linear factor $(x - 1)^2$ and distinct factor $(x + 2)$:\\begin{aligned} &\\dfrac{ 4x^2 - 3x + 5 }{ (x - 1)^2(x + 2) } \\cr &\\quad \\equiv \\dfrac{ A }{ x - 1 } + \\dfrac{ B }{ (x - 1)^2 } \\cr &\\qquad + \\dfrac{ C }{ x + 2 } \\end{aligned}Multiply both sides by the denominator $(x - 1)^2(x + 2)$ to obtain the linear identity:\\begin{aligned} &4x^2 - 3x + 5 \\cr &\\quad \\equiv A(x - 1)(x + 2) \\cr &\\qquad + B(x + 2) \\cr &\\qquad + C(x - 1)^2 \\end{aligned}",
        "To find the constant $B$, substitute $x = 1$ to eliminate both the $A$ and $C$ terms:\\begin{aligned} &4(1)^2 - 3(1) + 5 = B(1 + 2) \\cr &6 = 3B \\cr &B = 2 \\end{aligned}",
        "To find the constant $C$, substitute $x = -2$ to eliminate both the $A$ and $B$ terms:\\begin{aligned} &4(-2)^2 - 3(-2) + 5 \\cr &\\quad = C(-2 - 1)^2 \\cr &16 + 6 + 5 = 9C \\cr &27 = 9C \\cr &C = 3 \\end{aligned}",
        "To find the constant $A$, equate the coefficients of the $x^2$ terms on both sides of the identity:\\begin{aligned} &4 = A + C \\cr &4 = A + 3 \\cr &A = 1 \\end{aligned}",
        "Substitute the values of $A$, $B$, and $C$ back into our initial setup:\\begin{aligned} &\\dfrac{ 4x^2 - 3x + 5 }{ (x - 1)^2(x + 2) } \\cr &\\quad = \\dfrac{ 1 }{ x - 1 } + \\dfrac{ 2 }{ (x - 1)^2 } \\cr &\\qquad + \\dfrac{ 3 }{ x + 2 } \\end{aligned}",
        "Final Answer: $$\\dfrac{ 1 }{ x - 1 } + \\dfrac{ 2 }{ (x - 1)^2 } + \\dfrac{ 3 }{ x + 2 }$$"
    ],
    "pi_options": [
        {
            "ans": "$$\\dfrac{ 7 }{ x - 1 } + \\dfrac{ 2 }{ (x - 1)^2 } + \\dfrac{ 3 }{ x + 2 }$$",
            "feedback": "This error occurs if you make a sign error when equating the $x^2$ coefficients, solving $A = 4 + C$ to obtain $A = 7$ instead of $A = 4 - C$, which gives $A = 1$."
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
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Partial Fractions",
    "subtopic": [
        "Improper Fractions",
        "Algebraic Division"
    ],
    "img": false,
    "question": "Express the following improper algebraic fraction in partial fractions:$$\\dfrac{ 2x^2 + 5x - 7 }{ (x + 3)(x - 2) }$$",
    "steps": [
        "Since the degree of the numerator (2) is equal to the degree of the denominator (2), this is an improper fraction. We set up our decomposition with a constant term $A$:\\begin{aligned} &\\dfrac{ 2x^2 + 5x - 7 }{ (x + 3)(x - 2) } \\cr &\\quad \\equiv A + \\dfrac{ B }{ x + 3 } + \\dfrac{ C }{ x - 2 } \\end{aligned}Expanding the denominator gives $(x + 3)(x - 2) = x^2 + x - 6$. By equating the coefficients of $x^2$ (or through algebraic division), we find:$$A = 2$$",
        "Now, multiply both sides of the identity by the denominator $(x + 3)(x - 2)$ to form the linear identity:\\begin{aligned} &2x^2 + 5x - 7 \\cr &\\quad \\equiv 2(x^2 + x - 6) \\cr &\\qquad + B(x - 2) \\cr &\\qquad + C(x + 3) \\end{aligned}Expanding $2(x^2 + x - 6)$ gives $2x^2 + 2x - 12$. Subtracting this from both sides simplifies the identity:\\begin{aligned} &3x + 5 \\cr &\\quad \\equiv B(x - 2) + C(x + 3) \\end{aligned}",
        "To find the constant $C$, substitute $x = 2$ to eliminate the $B$ term:\\begin{aligned} &3(2) + 5 = C(2 + 3) \\cr &11 = 5C \\cr &C = 2.2 \\end{aligned}",
        "To find the constant $B$, substitute $x = -3$ to eliminate the $C$ term:\\begin{aligned} &3(-3) + 5 = B(-3 - 2) \\cr &-4 = -5B \\cr &B = 0.8 \\end{aligned}",
        "Substitute $A$, $B$, and $C$ back into our initial setup:\\begin{aligned} &\\dfrac{ 2x^2 + 5x - 7 }{ (x + 3)(x - 2) } \\cr &\\quad = 2 + \\dfrac{ 0.8 }{ x + 3 } + \\dfrac{ 2.2 }{ x - 2 } \\end{aligned}",
        "Final Answer: $$2 + \\dfrac{ 0.8 }{ x + 3 } + \\dfrac{ 2.2 }{ x - 2 }$$"
    ],
    "pi_options": [
        {
            "ans": "$$\\dfrac{ 0.8 }{ x + 3 } + \\dfrac{ 2.2 }{ x - 2 }$$",
            "feedback": "This mistake occurs if you fail to recognize that the fraction is improper and set up the decomposition without the constant term $A$. Always compare the degrees of the numerator and denominator before starting!"
        },
        {
            "ans": "$$1 + \\dfrac{ 0.8 }{ x + 3 } + \\dfrac{ 2.2 }{ x - 2 }$$",
            "feedback": "This occurs if you incorrectly divide the leading terms of the numerator and denominator, setting $A = 1$ instead of $A = 2$ (since $\\dfrac{ 2x^2 }{ x^2 } = 2$)."
        },
        {
            "ans": "$$2 + \\dfrac{ 2.2 }{ x + 3 } + \\dfrac{ 0.8 }{ x - 2 }$$",
            "feedback": "This error occurs if you correctly solve for the coefficients but swap the positions of $B$ and $C$ in the final expression."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Spotting Improper Fractions",
        "content": "Before you write down any partial fraction decomposition, look at the degrees! If the degree of the numerator is <strong>greater than or equal to</strong> the degree of the denominator, the fraction is improper and must be divided first (or written with a polynomial part). Doing standard linear decomposition on an improper fraction will fail completely."
    }
},
{
    "id": "004780",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Partial Fractions",
    "subtopic": [
        "Binomial Expansions",
        "Linear Denominators"
    ],
    "img": false,
    "question": "Consider the algebraic expression:$$f(x) = \\dfrac{ x + 5 }{ (1 - x)(1 + x) }$$<strong>(a)</strong> Express $f(x)$ in partial fractions.<br><br><strong>(b)</strong> Hence, find the binomial expansion of $f(x)$ in ascending powers of $x$, up to and including the term in $x^2$.",
    "steps": [
        "<strong>Part (a):</strong> We set up the partial fractions identity for distinct linear factors:\\begin{aligned} &\\dfrac{ x + 5 }{ (1 - x)(1 + x) } \\cr &\\quad \\equiv \\dfrac{ A }{ 1 - x } + \\dfrac{ B }{ 1 + x } \\end{aligned}Multiply both sides by $(1 - x)(1 + x)$ to form the linear identity:\\begin{aligned} &x + 5 \\cr &\\quad \\equiv A(1 + x) + B(1 - x) \\end{aligned}",
        "Find the constants $A$ and $B$ by substitution.<br><br>Substitute $x = 1$ to find $A$:\\begin{aligned} &1 + 5 = A(1 + 1) \\cr &6 = 2A \\cr &A = 3 \\end{aligned}Substitute $x = -1$ to find $B$:\\begin{aligned} &-1 + 5 = B(1 - (-1)) \\cr &4 = 2B \\cr &B = 2 \\end{aligned}Thus, the partial fractions representation is:$$\\dfrac{ 3 }{ 1 - x } + \\dfrac{ 2 }{ 1 + x }$$",
        "<strong>Part (b):</strong> We rewrite our partial fractions using negative indices to prepare for binomial expansion:\\begin{aligned} &f(x) \\cr &\\quad = 3(1 - x)^{-1} + 2(1 + x)^{-1} \\end{aligned}Using the standard binomial expansions for negative integer powers:\\begin{aligned} &(1 - x)^{-1} \\cr &\\quad = 1 + x + x^2 + \\dots \\cr &(1 + x)^{-1} \\cr &\\quad = 1 - x + x^2 - \\dots \\end{aligned}",
        "Substitute these expansions back into our expression for $f(x)$ and combine like terms:\\begin{aligned} &f(x) \\cr &\\quad \\approx 3(1 + x + x^2) \\cr &\\qquad + 2(1 - x + x^2) \\cr &\\quad = (3 + 3x + 3x^2) \\cr &\\qquad + (2 - 2x + 2x^2) \\cr &\\quad = 5 + x + 5x^2 \\end{aligned}",
        "Final Answer: <strong>(a)</strong> $\\dfrac{ 3 }{ 1 - x } + \\dfrac{ 2 }{ 1 + x }$<br><strong>(b)</strong> $5 + x + 5x^2$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $\\dfrac{ 3 }{ 1 - x } + \\dfrac{ 2 }{ 1 + x }$<br><strong>(b)</strong> $5 + 5x + 5x^2$",
            "feedback": "This error occurs in part (b) if you forget to apply the alternating sign change in the expansion of $(1 + x)^{-1} = 1 - x + x^2$, expanding it incorrectly as $1 + x + x^2$ instead."
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
        "content": "Connecting partial fractions with binomial expansions is a classic A-level exam favourite. Remember, expanding the separate simplified terms $3(1 - x)^{-1}$ and $2(1 + x)^{-1}$ individually is vastly simpler than trying to expand the original expression $(x + 5)(1 - x^2)^{-1}$ using the product rule!"
    }
},
{
    "id": "004781",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "Numerical Integration",
    "subtopic": [
        "Trapezium Rule",
        "Error Analysis"
    ],
    "img": false,
    "question": "<strong>(i)</strong> Use the Trapezium Rule with 3 ordinates to find an approximate value for the integral:$$\\int_{ 2 }^{ 4 } \\dfrac{ x^2 }{ (x + 2)(x - 1) } \\text{d}x$$Give your answer correct to 3 decimal places.<br><br><strong>(ii)</strong> Explain how the use of the Trapezium Rule in part <strong>(i)</strong> could be modified to obtain a better approximation to the integral.",
    "steps": [
        "We identify our integration interval as $[2, 4]$. Since we are using 3 ordinates, the number of strips is $n = 2$.<br><br>First, calculate the strip width $h$:\\begin{aligned} &h = \\dfrac{ b - a }{ n } \\cr &\\quad = \\dfrac{ 4 - 2 }{ 2 } \\cr &\\quad = 1 \\end{aligned}",
        "Next, determine the coordinates $x_0 = 2$, $x_1 = 3$, and $x_2 = 4$, then evaluate the function at each point:<br><br>• For $x_0 = 2$:\\begin{aligned} &y_0 = \\dfrac{ 2^2 }{ (2 + 2)(2 - 1) } \\cr &\\quad = \\dfrac{ 4 }{ 4 } \\cr &\\quad = 1 \\end{aligned}<br>• For $x_1 = 3$:\\begin{aligned} &y_1 = \\dfrac{ 3^2 }{ (3 + 2)(3 - 1) } \\cr &\\quad = \\dfrac{ 9 }{ 10 } \\cr &\\quad = 0.9 \\end{aligned}<br>• For $x_2 = 4$:\\begin{aligned} &y_2 = \\dfrac{ 4^2 }{ (4 + 2)(4 - 1) } \\cr &\\quad = \\dfrac{ 16 }{ 18 } \\cr &\\quad = \\dfrac{ 8 }{ 9 } \\cr &\\quad \\approx 0.8889 \\end{aligned}",
        "Substitute our calculated ordinate values into the Trapezium Rule formula:\\begin{aligned} &\\text{Area} \\cr &\\quad \\approx \\dfrac{ 1 }{ 2 } \\big[ y_0 + y_2 + 2(y_1) \\big] \\cr &\\quad = 0.5 \\big[ 1 + 0.8889 + 2(0.9) \\big] \\cr &\\quad = 0.5(1.8889 + 1.8) \\cr &\\quad = 0.5(3.6889) \\cr &\\quad \\approx 1.844 \\end{aligned}Thus, our approximate area is $1.844$ (to 3 decimal places).",
        "To obtain a better approximation to the integral, we can increase the number of ordinates (which increases the number of strips). This decreases the strip width $h$, making the straight boundaries of the trapeziums follow the curvature of the actual graph more closely.",
        "Final Answer: <strong>(i)</strong> $1.844$<br><strong>(ii)</strong> Increase the number of ordinates to decrease the strip width."
    ],
    "pi_options": [
        {
            "ans": "<strong>(i)</strong> $2.744$<br><strong>(ii)</strong> Increase the width of each strip, $h$.",
            "feedback": "This error occurs in part (i) if you add all the ordinate values directly without doubling the middle term, or if you mistakenly double the outer terms instead of the middle term. Additionally, in part (ii), increasing the strip width makes the approximation worse, not better."
        },
        {
            "ans": "<strong>(i)</strong> $1.844$<br><strong>(ii)</strong> Decrease the number of strips to make calculations simpler.",
            "feedback": "Your calculation in part (i) is correct. However, in part (ii), decreasing the number of strips will increase the strip width $h$, which increases the geometric gap between the straight chords of the trapeziums and the actual curve, making the approximation less accurate."
        },
        {
            "ans": "<strong>(i)</strong> $1.394$<br><strong>(ii)</strong> Increase the number of ordinates to decrease the strip width.",
            "feedback": "While your explanation in part (ii) is correct, your calculation in part (i) is wrong. This occurs if you make an arithmetic slip when evaluating $y_2 = f(4)$, such as mistakenly using $x - 1 = 4$ in the denominator instead of $4 - 1 = 3$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Ordinates vs Strips",
        "content": "Always remember that the number of strips ($n$) is always <strong>one less</strong> than the number of ordinates. A common exam slip is to use the number of ordinates directly as the denominator when calculating the strip width $h$."
    }
},
{
    "id": "004782",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "Numerical Integration",
    "subtopic": [
        "Trapezium Rule",
        "Error Analysis"
    ],
    "img": false,
    "question": "<strong>(i)</strong> Use the Trapezium Rule with 5 ordinates to find an approximate value for the integral:$$\\int_{ 1 }^{ 5 } \\ln(x^2 + 1) \\text{d}x$$Give your answer correct to 3 decimal places.<br><br><strong>(ii)</strong> Explain how the approximation obtained in part <strong>(i)</strong> could be improved.",
    "steps": [
        "We identify our interval as $[1, 5]$. Since we are using 5 ordinates, the number of strips is $n = 4$.<br><br>Calculate the strip width $h$:\\begin{aligned} &h = \\dfrac{ b - a }{ n } \\cr &\\quad = \\dfrac{ 5 - 1 }{ 4 } \\cr &\\quad = 1 \\end{aligned}",
        "Determine our coordinate values $x_0 = 1$, $x_1 = 2$, $x_2 = 3$, $x_3 = 4$, and $x_4 = 5$. Evaluating $f(x) = \\ln(x^2 + 1)$ at each coordinate yields:\\begin{aligned} &y_0 = \\ln 2 \\cr &\\quad \\approx 0.6931 \\cr &y_1 = \\ln 5 \\cr &\\quad \\approx 1.6094 \\cr &y_2 = \\ln 10 \\cr &\\quad \\approx 2.3026 \\cr &y_3 = \\ln 17 \\cr &\\quad \\approx 2.8332 \\cr &y_4 = \\ln 26 \\cr &\\quad \\approx 3.2581 \\end{aligned}",
        "Sum the inner ordinates:\\begin{aligned} &y_1 + y_2 + y_3 \\cr &\\quad = 1.6094 + 2.3026 + 2.8332 \\cr &\\quad = 6.7452 \\end{aligned}Substitute into the Trapezium Rule formula:\\begin{aligned} &\\text{Area} \\cr &\\quad \\approx \\dfrac{ 1 }{ 2 } \\big[ y_0 + y_4 + 2(6.7452) \\big] \\cr &\\quad = 0.5 \\big[ 0.6931 + 3.2581 + 13.4904 \\big] \\cr &\\quad = 0.5(17.4416) \\cr &\\quad \\approx 8.721 \\end{aligned}Thus, our approximate area is $8.721$ (to 3 decimal places).",
        "The approximation can be improved by increasing the number of ordinates (or strips). Doing so decreases the strip width $h$ and reduces the geometric error between the straight chords of the trapeziums and the actual curved path of the function.",
        "Final Answer: <strong>(i)</strong> $8.721$<br><strong>(ii)</strong> Increase the number of ordinates."
    ],
    "pi_options": [
        {
            "ans": "<strong>(i)</strong> $10.692$<br><strong>(ii)</strong> Increase the number of ordinates.",
            "feedback": "While the explanation in part (ii) is correct, the area calculation is incorrect. This error occurs if you forgot to divide by $2$ at the start of the formula, multiplying the sum by $h = 1$ instead of $h/2 = 0.5$."
        },
        {
            "ans": "<strong>(i)</strong> $8.721$<br><strong>(ii)</strong> Increase the width of the strips to reduce calculation errors.",
            "feedback": "Your area calculation is correct. However, in part (ii), increasing the strip width makes the approximation worse, not better, because it increases the geometric gap between the straight chords and the curved graph."
        },
        {
            "ans": "<strong>(i)</strong> $6.745$<br><strong>(ii)</strong> Use more ordinates.",
            "feedback": "This area error occurs if you only sum the inner ordinate values ($y_1 + y_2 + y_3$) and completely forget to include the outer boundary ordinates ($y_0$ and $y_4$) in your formula."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: High-Precision Mid-Steps",
        "content": "When evaluating logarithmic or exponential terms, always keep at least 4 or 5 decimal places in your intermediate steps. Rounding too early (such as to 1 or 2 decimal places) will cause rounding errors to accumulate, leading to an incorrect final 3 decimal place value."
    }
},
{
    "id": "004783",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "Numerical Integration",
    "subtopic": [
        "Trapezium Rule",
        "Trigonometric Functions"
    ],
    "img": false,
    "question": "<strong>(i)</strong> Use the Trapezium Rule with 4 strips to find an approximate value for the integral:$$\\int_{ 0 }^{ \\pi/2 } \\mathrm{e}^{ \\sin x } \\text{d}x$$Give your answer correct to 3 decimal places.<br><br><strong>(ii)</strong> State how the width of the strips, $h$, could be adjusted to obtain a better approximation, and explain briefly why this adjustment improves the accuracy of the result.",
    "steps": [
        "We have $n = 4$ strips over the integration interval $[0, \\pi/2]$.<br><br>First, calculate our strip width $h$ in radians:\\begin{aligned} &h = \\dfrac{ b - a }{ n } \\cr &\\quad = \\dfrac{ \\pi/2 - 0 }{ 4 } \\cr &\\quad = \\dfrac{ \\pi }{ 8 } \\cr &\\quad \\approx 0.3927 \\end{aligned}",
        "Identify our coordinate values $x_0 = 0$, $x_1 = \\pi/8$, $x_2 = \\pi/4$, $x_3 = 3\\pi/8$, and $x_4 = \\pi/2$.<br><br>Set your calculator to **Radian** mode and evaluate $f(x) = \\mathrm{e}^{ \\sin x }$ at each coordinate:\\begin{aligned} &y_0 = \\mathrm{e}^{ \\sin 0 } = 1 \\cr &y_1 = \\mathrm{e}^{ \\sin(\\pi/8) } \\cr &\\quad \\approx 1.4662 \\cr &y_2 = \\mathrm{e}^{ \\sin(\\pi/4) } \\cr &\\quad \\approx 2.0281 \\cr &y_3 = \\mathrm{e}^{ \\sin(3\\pi/8) } \\cr &\\quad \\approx 2.5191 \\cr &y_4 = \\mathrm{e}^{ \\sin(\\pi/2) } \\cr &\\quad = \\mathrm{e} \\cr &\\quad \\approx 2.7183 \\end{aligned}",
        "Sum the inner ordinates:\\begin{aligned} &y_1 + y_2 + y_3 \\cr &\\quad = 1.4662 + 2.0281 + 2.5191 \\cr &\\quad = 6.0134 \\end{aligned}Substitute into the Trapezium Rule formula:\\begin{aligned} &\\text{Area} \\cr &\\quad \\approx \\dfrac{ \\pi }{ 16 } \\big[ y_0 + y_4 + 2(6.0134) \\big] \\cr &\\quad = \\dfrac{ \\pi }{ 16 } \\big[ 1 + 2.7183 + 12.0268 \\big] \\cr &\\quad = \\dfrac{ \\pi }{ 16 }(15.7451) \\cr &\\quad \\approx 3.092 \\end{aligned}Thus, our approximate area is $3.092$ (to 3 decimal places).",
        "The width of the strips $h$ should be decreased. Decreasing $h$ (which requires increasing the number of strips) reduces the size of the geometric gaps between the straight top edges of the trapeziums and the actual curve, which increases the accuracy of our approximation.",
        "Final Answer: <strong>(i)</strong> $3.092$<br><strong>(ii)</strong> Decrease the strip width $h$."
    ],
    "pi_options": [
        {
            "ans": "<strong>(i)</strong> $3.214$<br><strong>(ii)</strong> Decrease $h$.",
            "feedback": "This area error occurs if your calculator is set to **Degree** mode instead of **Radian** mode. For example, in degrees, $\\sin(0.3927^\\circ) \\approx 0.0069$, which leads to completely incorrect ordinate values."
        },
        {
            "ans": "<strong>(i)</strong> $3.092$<br><strong>(ii)</strong> Increase $h$ to make each trapezium wider.",
            "feedback": "Your area calculation is correct. However, in part (ii), increasing the strip width $h$ will decrease the accuracy because wider trapeziums deviate further from the actual curvature of the graph."
        },
        {
            "ans": "<strong>(i)</strong> $1.546$<br><strong>(ii)</strong> Decrease the strip width $h$.",
            "feedback": "While your explanation in part (ii) is correct, this area error occurs if you forgot to multiply the sum of the middle terms by $2$ inside the brackets, or if you divided by $h$ instead of multiplying."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Radian Mode is Mandatory",
        "content": "In calculus (differentiation and integration), trigonometric inputs are <strong>always</strong> in radians. Always double-check that your calculator shows a little 'R' on screen. A single degree-mode calculation will destroy your entire marks allocation!"
    }
},
{
    "id": "004784",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "Numerical Integration",
    "subtopic": [
        "Trapezium Rule",
        "Error Analysis"
    ],
    "img": false,
    "question": "<strong>(i)</strong> Use the Trapezium Rule with 5 ordinates to find an approximate value for the integral:$$\\int_{ 0 }^{ 2 } \\mathrm{e}^{ -x } \\text{d}x$$Give your answer correct to 3 decimal places.<br><br><strong>(ii)</strong> State, with a brief reason, whether the approximation obtained in part <strong>(i)</strong> is an overestimate or an underestimate of the true value of the integral.<br><br><strong>(iii)</strong> Explain how the setup of the rule in part <strong>(i)</strong> could be modified to obtain a more accurate estimate.",
    "steps": [
        "We integrate over $[0, 2]$. With 5 ordinates, the number of strips is $n = 4$.<br><br>First, calculate our strip width $h$:\\begin{aligned} &h = \\dfrac{ b - a }{ n } \\cr &\\quad = \\dfrac{ 2 - 0 }{ 4 } \\cr &\\quad = 0.5 \\end{aligned}",
        "Identify our coordinates $x_0 = 0$, $x_1 = 0.5$, $x_2 = 1$, $x_3 = 1.5$, $x_4 = 2$ and evaluate $f(x) = \\mathrm{e}^{ -x }$ at each coordinate:\\begin{aligned} &y_0 = \\mathrm{e}^{ 0 } = 1 \\cr &y_1 = \\mathrm{e}^{ -0.5 } \\approx 0.6065 \\cr &y_2 = \\mathrm{e}^{ -1 } \\approx 0.3679 \\cr &y_3 = \\mathrm{e}^{ -1.5 } \\approx 0.2231 \\cr &y_4 = \\mathrm{e}^{ -2 } \\approx 0.1353 \\end{aligned}",
        "The sum of the inner ordinates is:\\begin{aligned} &y_1 + y_2 + y_3 \\cr &\\quad = 0.6065 + 0.3679 + 0.2231 \\cr &\\quad = 1.1975 \\end{aligned}Substitute into the Trapezium Rule formula:\\begin{aligned} &\\text{Area} \\cr &\\quad \\approx \\dfrac{ 0.5 }{ 2 } \\big[ y_0 + y_4 + 2(1.1975) \\big] \\cr &\\quad = 0.25 \\big[ 1 + 0.1353 + 2.3950 \\big] \\cr &\\quad = 0.25(3.5303) \\cr &\\quad \\approx 0.883 \\end{aligned}Thus, our approximate area is $0.883$ (to 3 decimal places).",
        "To determine if it is an overestimate or underestimate, analyze the curvature (concavity) of $y = \\mathrm{e}^{ -x }$ by finding its second derivative:\\begin{aligned} &y' = -\\mathrm{e}^{ -x } \\cr &y'' = \\mathrm{e}^{ -x } \\end{aligned}Since $\\mathrm{e}^{ -x } > 0$ for all real values of $x$, we have $y'' > 0$ on the interval $[0, 2]$, which means the curve is concave up (convex).<br><br>Because the curve is concave up, the straight-line chords forming the tops of the trapeziums lie entirely above the actual curve. Therefore, the approximation is an <strong>overestimate</strong>.",
        "To modify the setup to obtain a more accurate estimate, we can increase the number of ordinates (or strips). This decreases our interval width $h$ and reduces the size of the overestimate gap between our straight lines and the actual curve.",
        "Final Answer: <strong>(i)</strong> $0.883$<br><strong>(ii)</strong> Overestimate because the curve is concave up.<br><strong>(iii)</strong> Use more strips."
    ],
    "pi_options": [
        {
            "ans": "<strong>(i)</strong> $0.883$<br><strong>(ii)</strong> Underestimate because the curve is decreasing.<br><strong>(iii)</strong> Use more strips.",
            "feedback": "Your area and explanation for improvement are correct. However, whether the rule over- or under-estimates depends on the curvature (concavity / second derivative $y''$) of the graph, not whether the function is increasing or decreasing. Since $y'' > 0$ (concave up), the straight chords lie above the curve, which results in an overestimate."
        },
        {
            "ans": "<strong>(i)</strong> $0.598$<br><strong>(ii)</strong> Overestimate because the curve is concave up.<br><strong>(iii)</strong> Use more strips.",
            "feedback": "While your qualitative reasoning is correct, your area calculation contains an error. This occurs if you sum the ordinates without doubling the interior terms, multiplying the total directly by $0.25$."
        },
        {
            "ans": "<strong>(i)</strong> $0.883$<br><strong>(ii)</strong> Overestimate because the curve is concave up.<br><strong>(iii)</strong> Increase the strip width $h$.",
            "feedback": "Your area and overestimate reasoning are correct. However, in part (iii), increasing the strip width $h$ will decrease the accuracy, making the estimate less accurate rather than more accurate."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Over vs Underestimates",
        "content": "To determine whether the Trapezium Rule yields an overestimate or underestimate, always look at the concavity of the curve (the sign of $y''$):<br>1. If $y'' > 0$ (concave up), the straight chords lie <strong>above</strong> the curve, yielding an <strong>overestimate</strong>.<br>2. If $y'' < 0$ (concave down), the straight chords lie <strong>below</strong> the curve, yielding an <strong>underestimate</strong>."
    }
},
{
    "id": "004785",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "Numerical Integration",
    "subtopic": [
        "Trapezium Rule",
        "Modelling"
    ],
    "img": "images/Pure_SVGs/004785.svg",
    "question": "A civil engineer is estimating the cross-sectional area of a river bed to design a flood barrier. The width of the river is $4\\text{ m}$. At regular $1\\text{ m}$ intervals from one bank ($x = 0$) to the other bank ($x = 4$), the depth of the river $y$ (in metres) is measured. The cross-sectional profile is modelled by the curve shown in the diagram.<br><br>The depth measurements are recorded in the table below:<br><table style='width: 100%; max-width: 280px; margin: 15px auto; border-collapse: collapse; text-align: center; border: 1px solid #ccc;'><tr style='background-color: #f2f2f2;'><th style='border: 1px solid #ccc; padding: 6px 8px;'>Distance, $x$ (m)</th><th style='border: 1px solid #ccc; padding: 6px 8px;'>Depth, $y$ (m)</th></tr><tr><td style='border: 1px solid #ccc; padding: 6px 8px;'>0</td><td style='border: 1px solid #ccc; padding: 6px 8px;'>3.0</td></tr><tr><td style='border: 1px solid #ccc; padding: 6px 8px;'>1</td><td style='border: 1px solid #ccc; padding: 6px 8px;'>2.9</td></tr><tr><td style='border: 1px solid #ccc; padding: 6px 8px;'>2</td><td style='border: 1px solid #ccc; padding: 6px 8px;'>2.6</td></tr><tr><td style='border: 1px solid #ccc; padding: 6px 8px;'>3</td><td style='border: 1px solid #ccc; padding: 6px 8px;'>2.1</td></tr><tr><td style='border: 1px solid #ccc; padding: 6px 8px;'>4</td><td style='border: 1px solid #ccc; padding: 6px 8px;'>1.4</td></tr></table><br><strong>(i)</strong> Use the Trapezium Rule with all the measurements in the table to find an approximate value for the cross-sectional area of the river.<br><br><strong>(ii)</strong> Explain how the engineer could modify their measurement methodology to obtain a more accurate estimate of the cross-sectional area.",
    "steps": [
        "Since depth measurements are taken at regular intervals of $1\\text{ m}$ from the bank, our constant strip width is $h = 1$.<br><br>Identify our ordinate values directly from the data table:\\begin{aligned} &y_0 = 3.0 \\cr &y_1 = 2.9 \\cr &y_2 = 2.6 \\cr &y_3 = 2.1 \\cr &y_4 = 1.4 \\end{aligned}",
        "The sum of the inner ordinates is:\\begin{aligned} &y_1 + y_2 + y_3 \\cr &\\quad = 2.9 + 2.6 + 2.1 \\cr &\\quad = 7.6 \\end{aligned}Substitute into the Trapezium Rule formula:\\begin{aligned} &\\text{Area} \\cr &\\quad \\approx \\dfrac{ 1 }{ 2 } \\big[ y_0 + y_4 + 2(7.6) \\big] \\cr &\\quad = 0.5 \\big[ 3.0 + 1.4 + 15.2 \\big] \\cr &\\quad = 0.5(19.6) \\cr &\\quad = 9.8 \\end{aligned}Thus, the approximate cross-sectional area of the river is $9.8\\text{ m}^2$.",
        "To obtain a more accurate estimate of the cross-sectional area, the engineer should physically take depth measurements at smaller horizontal intervals (for example, measuring the depth every $0.5\\text{ m}$ instead of every $1\\text{ m}$).<br><br>Decreasing the interval width $h$ increases the total number of strips, which reduces the geometric approximation error between the straight chords of the trapeziums and the actual curvature of the river bed profile.",
        "Final Answer: <strong>(i)</strong> $9.8\\text{ m}^2$<br><strong>(ii)</strong> Take measurements at smaller intervals."
    ],
    "pi_options": [
        {
            "ans": "<strong>(i)</strong> $19.6\\text{ m}^2$<br><strong>(ii)</strong> Take measurements at smaller intervals.",
            "feedback": "While the explanation in part (ii) is correct, your area is incorrect. This error occurs if you forgot to divide by $2$ at the start of the formula, multiplying the sum by $h = 1$ instead of $h/2 = 0.5$."
        },
        {
            "ans": "<strong>(i)</strong> $9.8\\text{ m}^2$<br><strong>(ii)</strong> Extend the total width of the river measurements to obtain more data.",
            "feedback": "Your area calculation is correct. However, extending the total width of the river changes the physical boundaries of the problem rather than improving the accuracy of the current cross-section approximation. To improve accuracy, the horizontal measurement intervals must be made smaller."
        },
        {
            "ans": "<strong>(i)</strong> $12.0\\text{ m}^2$<br><strong>(ii)</strong> Take measurements at smaller intervals.",
            "feedback": "While the explanation in part (ii) is correct, the area is wrong. This occurs if you make an arithmetic error when adding the ordinates, such as evaluating the inner sum $2.9 + 2.6 + 2.1$ as $9.8$ instead of $7.6$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Real-World Discrete Data",
        "content": "In real-world engineering or physical applications, we do not have a mathematical equation for the curve. We only have discrete experimental coordinates. The strip width $h$ is simply the constant gap between consecutive $x$-measurements. To increase accuracy, you must physically take more data points at smaller intervals ($h$ decreases)."
    }
},
{
    "id": "004786",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Differential Equations",
    "topic": "First Order Differential Equations",
    "subtopic": [
        "Separation of Variables",
        "Exponential Growth"
    ],
    "img": false,
    "question": "The population, $P$, of a rare species of birds in a newly established nature reserve grows at a rate proportional to the population at any time $t$ (years). This can be modelled by the differential equation:$$\\dfrac{ \\text{d}P }{ \\text{d}t } = kP$$where $k$ is a constant. The initial population of the birds is $P_0$.<br><br><strong>(i)</strong> Show that $P = P_0 \\mathrm{e}^{ kt }$.<br><br><strong>(ii)</strong> Given that the initial population doubles in 6 years, find the value of $k$ correct to 4 decimal places.<br><br><strong>(iii)</strong> Find the number of years until the initial population is trebled. Give your answer to the nearest year.<br><br><strong>(iv)</strong> State a limitation of this model.",
    "steps": [
        "<strong>Part (i):</strong> We solve the differential equation by separating variables to isolate $P$ on the left and $t$ on the right:$$\\dfrac{ 1 }{ P } \\text{d}P = k \\text{d}t$$Integrate both sides of the equation:\\begin{aligned} &\\int \\dfrac{ 1 }{ P } \\text{d}P = \\int k \\text{d}t \\cr &\\ln P = kt + C \\end{aligned}where $C$ is the constant of integration.",
        "We rewrite the equation in exponential form:\\begin{aligned} &P = \\mathrm{e}^{ kt + C } \\cr &\\quad = \\mathrm{e}^C \\mathrm{e}^{ kt } \\cr &\\quad = A \\mathrm{e}^{ kt } \\end{aligned}where $A = \\mathrm{e}^C$ is a constant.<br><br>Apply the initial condition $P = P_0$ when $t = 0$:\\begin{aligned} &P_0 = A \\mathrm{e}^0 \\cr &A = P_0 \\end{aligned}Substituting $A = P_0$ back gives our required solution:$$P = P_0 \\mathrm{e}^{ kt }$$",
        "<strong>Part (ii):</strong> We are given that the population doubles ($P = 2P_0$) when $t = 6$ years. Substitute these values into the model:\\begin{aligned} &2P_0 = P_0 \\mathrm{e}^{ 6k } \\cr &2 = \\mathrm{e}^{ 6k } \\cr &6k = \\ln 2 \\cr &k = \\dfrac{ \\ln 2 }{ 6 } \\cr &k \\approx 0.1155 \\end{aligned}Thus, $k \\approx 0.1155$ (to 4 decimal places).",
        "<strong>Part (iii):</strong> We seek the time $t$ when the population has trebled ($P = 3P_0$):\\begin{aligned} &3P_0 = P_0 \\mathrm{e}^{ 0.1155 t } \\cr &3 = \\mathrm{e}^{ 0.1155 t } \\cr &0.1155 t = \\ln 3 \\cr &t = \\dfrac{ \\ln 3 }{ 0.1155 } \\cr &t \\approx 9.51 \\end{aligned}To the nearest year, it takes $10\\text{ years}$ for the population to treble.",
        "<strong>Part (iv):</strong> A limitation of this model is that it assumes unlimited growth. In reality, population growth is constrained by environmental carrying capacity, finite physical space, and limited food or nesting resources in the nature reserve.",
        "Final Answer: <strong>(ii)</strong> $k = 0.1155$<br><strong>(iii)</strong> $t = 10\\text{ years}$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(ii)</strong> $k = 0.1155$<br><strong>(iii)</strong> $t = 11\\text{ years}$",
            "feedback": "Your value of $k$ is correct. However, in part (iii), this error occurs if you made a calculation slip, such as dividing by $0.1$ instead of $k$, or if you rounded $9.51$ up to $11$ instead of rounding to the nearest integer, which is $10$."
        },
        {
            "ans": "<strong>(ii)</strong> $k = 0.0578$<br><strong>(iii)</strong> $t = 19\\text{ years}$",
            "feedback": "This occurs if you make a factor of 2 error when solving $\\mathrm{e}^{ 6k } = 2$, mistakenly dividing by $12$ instead of $6$ to get $k = \\dfrac{ \\ln 2 }{ 12 }$, which doubles your time estimate in part (iii)."
        },
        {
            "ans": "<strong>(ii)</strong> $k = 0.1155$<br><strong>(iii)</strong> $t = 8\\text{ years}$",
            "feedback": "While $k$ is correct, this time estimate is wrong. This happens if you mistakenly solved $2 = \\mathrm{e}^{ kt }$ again for the trebling time or solved $kt = \\ln 2$ instead of $kt = \\ln 3$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Explicit Constant of Integration",
        "content": "When separating variables, do not just tack $C$ onto the end of the exponential function. The integration constant must be introduced at the integration stage, yielding $\\ln P = kt + C$. Exponentiating gives $P = \\mathrm{e}^{ kt + C }$, which simplifies to $P = A \\mathrm{e}^{ kt }$, where $A = \\mathrm{e}^C$, giving $A = P_0$. Skip this, and you will lose full marks for the derivation!"
    }
},
{
    "id": "004787",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Differential Equations",
    "topic": "First Order Differential Equations",
    "subtopic": [
        "Separation of Variables",
        "Exponential Decay"
    ],
    "img": false,
    "question": "A patient is injected with a dose of a therapeutic drug. The mass, $M$, in milligrams, of the drug remaining in the patient's bloodstream after $t$ hours decreases at a rate proportional to the mass of the drug present at that time. This is modelled by the differential equation:$$\\dfrac{ \\text{d}M }{ \\text{d}t } = -kM$$where $k$ is a positive constant. The initial mass of the drug injected is $M_0$.<br><br><strong>(i)</strong> Show that $M = M_0 \\mathrm{e}^{ -kt }$.<br><br><strong>(ii)</strong> Given that the mass of the drug halves in 8 hours (a half-life of 8 hours), find the exact value of $k$ in terms of $\\ln 2$.<br><br><strong>(iii)</strong> Find the time taken, in hours, for the mass of the drug in the patient's bloodstream to fall to $15\\%$ of its initial value. Give your answer to the nearest hour.<br><br><strong>(iv)</strong> State a physical reason why this model may not be accurate over an extremely long period.",
    "steps": [
        "<strong>Part (i):</strong> We separate variables to group the drug mass terms on the left and the time terms on the right:$$\\dfrac{ 1 }{ M } \\text{d}M = -k \\text{d}t$$Integrate both sides:\\begin{aligned} &\\int \\dfrac{ 1 }{ M } \\text{d}M = \\int -k \\text{d}t \\cr &\\ln M = -kt + C \\end{aligned}where $C$ is the constant of integration.",
        "Solve for $M$ by exponentiating both sides:\\begin{aligned} &M = \\mathrm{e}^{ -kt + C } \\cr &\\quad = \\mathrm{e}^C \\mathrm{e}^{ -kt } \\cr &\\quad = A \\mathrm{e}^{ -kt } \\end{aligned}where $A = \\mathrm{e}^C$ is a constant.<br><br>Apply the initial condition $M = M_0$ when $t = 0$:\\begin{aligned} &M_0 = A \\mathrm{e}^0 \\cr &A = M_0 \\end{aligned}Substitute $A = M_0$ back to obtain our solution:$$M = M_0 \\mathrm{e}^{ -kt }$$",
        "<strong>Part (ii):</strong> We are given that the drug mass halves ($M = 0.5 M_0$) when $t = 8$ hours. Substitute these values into the model:\\begin{aligned} &0.5 M_0 = M_0 \\mathrm{e}^{ -8k } \\cr &0.5 = \\mathrm{e}^{ -8k } \\cr &\\ln(0.5) = -8k \\cr &-\\ln 2 = -8k \\cr &k = \\dfrac{ \\ln 2 }{ 8 } \\end{aligned}",
        "<strong>Part (iii):</strong> We seek the time $t$ when the remaining mass of the drug is $15\\%$ of its initial mass ($M = 0.15 M_0$):\\begin{aligned} &0.15 M_0 = M_0 \\mathrm{e}^{ -kt } \\cr &0.15 = \\mathrm{e}^{ -kt } \\cr &\\ln(0.15) = -kt \\cr &t = -\\dfrac{ \\ln(0.15) }{ k } \\end{aligned}Substitute $k = \\dfrac{ \\ln 2 }{ 8 }$ into our equation:\\begin{aligned} &t = -\\dfrac{ 8 \\ln(0.15) }{ \\ln 2 } \\cr &t \\approx -\\dfrac{ 8(-1.8971) }{ 0.6931 } \\cr &t \\approx 21.90 \\end{aligned}To the nearest hour, it takes $22\\text{ hours}$ for the mass of the drug to fall to $15\\%$ of its initial value.",
        "<strong>Part (iv):</strong> Over an extremely long period, the model may fail because clearance rates change as the drug reaches very low concentrations, metabolic rates can fluctuate, or the body may completely clear the remaining drug molecules, preventing the mass from truly approaching zero asymptotically.",
        "Final Answer: <strong>(ii)</strong> $k = \\dfrac{ \\ln 2 }{ 8 }$<br><strong>(iii)</strong> $t = 22\\text{ hours}$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(ii)</strong> $k = \\dfrac{ \\ln 2 }{ 8 }$<br><strong>(iii)</strong> $t = 16\\text{ hours}$",
            "feedback": "Your value of $k$ is correct. However, in part (iii), this error occurs if you mistakenly calculated the time for the mass to fall to $25\\%$ (which is exactly two half-lives, $2 \\times 8 = 16\\text{ hours}$) instead of $15\\%$."
        },
        {
            "ans": "<strong>(ii)</strong> $k = 8 \\ln 2$<br><strong>(iii)</strong> $t = 3\\text{ hours}$",
            "feedback": "This error occurs if you solved $\\mathrm{e}^{ -8k } = 0.5$ incorrectly by multiplying by $8$ instead of dividing, obtaining $k = 8 \\ln 2$. This large $k$ value then leads to an unrealistically short clearance time."
        },
        {
            "ans": "<strong>(ii)</strong> $k = \\dfrac{ \\ln 2 }{ 8 }$<br><strong>(iii)</strong> $t = 25\\text{ hours}$",
            "feedback": "While $k$ is correct, this error occurs in part (iii) if you made a sign error when evaluating the logarithm, such as using $\\ln(0.15) = 1.897$, or if you used an incorrect clearance threshold."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Exact Constants vs Decimals",
        "content": "In multi-part questions, always keep your constant $k$ in its exact logarithmic form, such as $k = \\dfrac{ \\ln 2 }{ 8 }$, rather than using a rounded decimal. Using exact forms in your calculator prevents rounding errors from compounding in later steps."
    }
},
{
    "id": "004788",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Differential Equations",
    "topic": "First Order Differential Equations",
    "subtopic": [
        "Separation of Variables",
        "Newton's Law of Cooling"
    ],
    "img": false,
    "question": "A hot cup of tea is left to cool in a room with a constant temperature of $20^\\circ\\text{C}$. The temperature, $\\theta$ (in $^\\circ\\text{C}$), of the tea at any time $t$ minutes after being poured satisfies the differential equation:$$\\dfrac{ \\text{d}\\theta }{ \\text{d}t } = -k(\\theta - 20)$$where $k$ is a positive constant. The initial temperature of the tea is $\\theta_0 = 85^\\circ\\text{C}$.<br><br><strong>(i)</strong> Show by integration that $\\theta = 20 + 65\\mathrm{e}^{ -kt }$.<br><br><strong>(ii)</strong> Given that the tea cools to $55^\\circ\\text{C}$ after 10 minutes, find the value of $k$ correct to 3 decimal places.<br><br><strong>(iii)</strong> Find the temperature of the tea, to the nearest degree, after 25 minutes.<br><br><strong>(iv)</strong> State the limiting temperature of the tea as $t$ becomes very large.",
    "steps": [
        "<strong>Part (i):</strong> We separate variables by treating the expression $(\\theta - 20)$ as a single entity:$$\\dfrac{ 1 }{ \\theta - 20 } \\text{d}\\theta = -k \\text{d}t$$Integrate both sides:\\begin{aligned} &\\int \\dfrac{ 1 }{ \\theta - 20 } \\text{d}\\theta = \\int -k \\text{d}t \\cr &\\ln(\\theta - 20) = -kt + C \\end{aligned}where $C$ is the constant of integration.",
        "Exponentiate both sides of the equation to solve for $\\theta - 20$:\\begin{aligned} &\\theta - 20 = \\mathrm{e}^{ -kt + C } \\cr &\\quad = \\mathrm{e}^C \\mathrm{e}^{ -kt } \\cr &\\quad = A \\mathrm{e}^{ -kt } \\end{aligned}where $A = \\mathrm{e}^C$ is a constant. Thus, our general solution is:$$\\theta = 20 + A \\mathrm{e}^{ -kt }$$",
        "Apply our initial condition $\\theta = 85^\\circ\\text{C}$ when $t = 0$:\\begin{aligned} &85 = 20 + A \\mathrm{e}^0 \\cr &85 = 20 + A \\cr &A = 65 \\end{aligned}Substitute $A = 65$ back into our equation to obtain the cooling model:$$\\theta = 20 + 65\\mathrm{e}^{ -kt }$$",
        "<strong>Part (ii):</strong> We are given that $\\theta = 55^\\circ\\text{C}$ when $t = 10$ minutes. Substitute these values to solve for $k$:\\begin{aligned} &55 = 20 + 65\\mathrm{e}^{ -10k } \\cr &35 = 65\\mathrm{e}^{ -10k } \\cr &\\mathrm{e}^{ -10k } = \\dfrac{ 7 }{ 13 } \\cr &-10k = \\ln\\left( \\dfrac{ 7 }{ 13 } \\right) \\cr &k = -\\dfrac{ 1 }{ 10 } \\ln\\left( \\dfrac{ 7 }{ 13 } \\right) \\cr &k \\approx 0.062 \\end{aligned}",
        "<strong>Part (iii):</strong> We seek the temperature $\\theta$ when $t = 25$ minutes, using $k = 0.0619$:\\begin{aligned} &\\theta = 20 + 65\\mathrm{e}^{ -0.0619(25) } \\cr &\\theta = 20 + 65\\mathrm{e}^{ -1.5475 } \\cr &\\theta \\approx 20 + 65(0.2128) \\cr &\\theta \\approx 20 + 13.83 \\cr &\\theta \\approx 33.83 \\end{aligned}To the nearest degree, the temperature of the tea after 25 minutes is $34^\\circ\\text{C}$.",
        "<strong>Part (iv):</strong> As $t$ becomes very large ($t \\to \\infty$), the term $\\mathrm{e}^{ -kt } \\to 0$. Therefore:$$\\theta \\to 20$$The limiting temperature of the tea is the room temperature of $20^\\circ\\text{C}$.",
        "Final Answer: <strong>(ii)</strong> $k = 0.062$<br><strong>(iii)</strong> $\\theta = 34^\\circ\\text{C}$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(ii)</strong> $k = 0.062$<br><strong>(iii)</strong> $\\theta = 48^\\circ\\text{C}$",
            "feedback": "While your value of $k$ is correct, this temperature is incorrect. It occurs if you evaluated the formula in part (iii) but forgot to add the room temperature constant of $20$ to the exponential decay term ($20 + 13.8 = 34$)."
        },
        {
            "ans": "<strong>(ii)</strong> $k = 0.046$<br><strong>(iii)</strong> $\\theta = 41^\\circ\\text{C}$",
            "feedback": "This occurs if you set up the initial conditions incorrectly in part (i), solving the differential equation as $\\theta = 85 \\mathrm{e}^{ -kt }$ by neglecting the ambient room temperature boundary of $20$, which propagates to an incorrect $k$ value."
        },
        {
            "ans": "<strong>(ii)</strong> $k = 0.062$<br><strong>(iii)</strong> $\\theta = 31^\\circ\\text{C}$",
            "feedback": "While $k$ is correct, this error occurs in part (iii) if you used $t = 30$ instead of $t = 25$, or made a minor rounding slip when evaluating the exponential term."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Shifted Separation of Variables",
        "content": "For Newton's Law of Cooling, the variable to separate is the temperature difference $(\\theta - 20)$. Treat $(\\theta - 20)$ as a single algebraic entity:$$\\int \\dfrac{ 1 }{ \\theta - 20 } \\text{d}\\theta = \\ln(\\theta - 20) + C$$Do not split the terms inside the denominator!"
    }
},
{
    "id": "004789",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "First Order Differential Equations",
    "subtopic": [
        "Separation of Variables",
        "Non-linear Models"
    ],
    "img": false,
    "question": "A water tank with a small leak at the bottom is being drained. The volume of water, $V$ (in $\\text{m}^3$), remaining in the tank at time $t$ (in hours) decreases at a rate proportional to the square root of the volume of water remaining. This is modelled by the differential equation:$$\\dfrac{ \\text{d}V }{ \\text{d}t } = -k \\sqrt{ V }$$where $k$ is a positive constant. The initial volume of water in the tank is $V_0$.<br><br><strong>(i)</strong> Show by integration that $V = \\left( \\sqrt{ V_0 } - \\dfrac{ 1 }{ 2 }kt \\right)^2$.<br><br><strong>(ii)</strong> Given that the initial volume of water is $16\\text{ m}^3$ and it takes exactly 8 hours to drain the tank completely, find the value of $k$.<br><br><strong>(iii)</strong> Find the volume of water remaining in the tank after 3 hours. Give your answer to 2 decimal places.<br><br><strong>(iv)</strong> State a limitation of this model for values of $t > 8$.",
    "steps": [
        "<strong>Part (i):</strong> We solve our differential equation by separating variables:$$V^{ -1/2 } \\text{d}V = -k \\text{d}t$$Integrate both sides:\\begin{aligned} &\\int V^{ -1/2 } \\text{d}V = \\int -k \\text{d}t \\cr &2V^{ 1/2 } = -kt + C \\end{aligned}where $C$ is the constant of integration.",
        "We rearrange this equation to solve for $\\sqrt{ V }$:$$\\sqrt{ V } = -\\dfrac{ 1 }{ 2 }kt + \\dfrac{ C }{ 2 }$$Apply the initial condition $V = V_0$ when $t = 0$:\\begin{aligned} &\\sqrt{ V_0 } = -\\dfrac{ 1 }{ 2 }k(0) + \\dfrac{ C }{ 2 } \\cr &\\sqrt{ V_0 } = \\dfrac{ C }{ 2 } \\end{aligned}Substitute $\\dfrac{ C }{ 2 } = \\sqrt{ V_0 }$ back into our expression and square both sides:\\begin{aligned} &\\sqrt{ V } = \\sqrt{ V_0 } - \\dfrac{ 1 }{ 2 }kt \\cr &V = \\left( \\sqrt{ V_0 } - \\dfrac{ 1 }{ 2 }kt \\right)^2 \\end{aligned}",
        "<strong>Part (ii):</strong> We are given $V_0 = 16\\text{ m}^3$. The tank is completely empty ($V = 0$) when $t = 8$ hours. Substitute these values to solve for $k$:\\begin{aligned} &0 = \\left( \\sqrt{ 16 } - \\dfrac{ 1 }{ 2 }k(8) \\right)^2 \\cr &0 = (4 - 4k)^2 \\cr &4 - 4k = 0 \\cr &k = 1 \\end{aligned}",
        "<strong>Part (iii):</strong> We seek the remaining volume $V$ when $t = 3$ hours, using $V_0 = 16$ and $k = 1$:\\begin{aligned} &V = \\left( \\sqrt{ 16 } - \\dfrac{ 1 }{ 2 }(1)(3) \\right)^2 \\cr &V = (4 - 1.5)^2 \\cr &V = (2.5)^2 \\cr &V = 6.25 \\end{aligned}Thus, the remaining volume of water after 3 hours is $6.25\\text{ m}^3$.",
        "<strong>Part (iv):</strong> For values of $t > 8$, the term $(4 - 0.5t)$ becomes negative. Squaring a negative number yields a positive, increasing value for $V$ (representing a parabola that turns upward). Physically, this implies the tank would start refilling itself after draining, which is impossible. The model's valid domain is restricted to $0 \\le t \\le 8$.",
        "Final Answer: <strong>(ii)</strong> $k = 1$<br><strong>(iii)</strong> $V = 6.25\\text{ m}^3$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(ii)</strong> $k = 2$<br><strong>(iii)</strong> $V = 1.00\\text{ m}^3$",
            "feedback": "This error occurs in part (ii) if you forgot the factor of $\\dfrac{ 1 }{ 2 }$ in the integrated equation, leading to $4 - 8k = 0$ ($k = 0.5$), or if you mistakenly solved $4 - 2k = 0$ to get $k = 2$."
        },
        {
            "ans": "<strong>(ii)</strong> $k = 1$<br><strong>(iii)</strong> $V = 2.50\\text{ m}^3$",
            "feedback": "While your value of $k$ is correct, this volume is incorrect. It occurs if you evaluated $\\sqrt{ V } = 2.5$ but forgot to square the result to obtain the volume $V$, leaving the answer in terms of $\\sqrt{ V }$ instead."
        },
        {
            "ans": "<strong>(ii)</strong> $k = 1$<br><strong>(iii)</strong> $V = 6.25\\text{ m}^3$ but model is valid for all $t > 8$",
            "feedback": "While your calculation values are correct, the claim that the model is valid for $t > 8$ is wrong. For $t > 8$, the term $(\\sqrt{ V_0 } - 0.5kt)$ becomes negative, and squaring it yields a positive, increasing volume, which violates physical realities."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Physical Domain Boundaries",
        "content": "A mathematical model is only as good as its physical domain. The square root model $V = \\big( \\sqrt{ V_0 } - 0.5kt \\big)^2$ is a parabola that turns upward after the vertex at $t = 8$. Since a drained tank cannot refill itself, the model becomes completely invalid for $t > 8$."
    }
},
{
    "id": "004790",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "First Order Differential Equations",
    "subtopic": [
        "Separation of Variables",
        "Variable Growth Models"
    ],
    "img": false,
    "question": "A colony of bacteria is growing in a culture. The population, $P$, at time $t$ (in hours) grows at a rate proportional to the population, but the rate of growth decreases over time due to nutrient depletion. This is modelled by the differential equation:$$\\dfrac{ \\text{d}P }{ \\text{d}t } = \\dfrac{ kP }{ 2t + 3 }$$where $k$ is a positive constant. The initial population of the colony is $P_0$.<br><br><strong>(i)</strong> Show by integration that:$$P = P_0 \\left( \\dfrac{ 2t + 3 }{ 3 } \\right)^{ k/2 }$$<strong>(ii)</strong> Given that the population of the colony is $3P_0$ when $t = 6$ hours, find the exact value of $k$.<br><br><strong>(iii)</strong> Find the population of the colony, in terms of $P_0$, when $t = 15$ hours. Give your coefficient correct to 2 decimal places.<br><br><strong>(iv)</strong> State a physical reason why this model may not be realistic for extremely large values of $t$.",
    "steps": [
        "<strong>Part (i):</strong> We separate variables by grouping $P$ terms on the left and $t$ terms on the right:$$\\dfrac{ 1 }{ P } \\text{d}P = \\dfrac{ k }{ 2t + 3 } \\text{d}t$$Integrate both sides of our separated equation:\\begin{aligned} &\\int \\dfrac{ 1 }{ P } \\text{d}P = \\int \\dfrac{ k }{ 2t + 3 } \\text{d}t \\cr &\\ln P = \\dfrac{ k }{ 2 } \\ln(2t + 3) + C \\end{aligned}where $C$ is the constant of integration.",
        "Apply the laws of logarithms to rewrite our integrated equation:\\begin{aligned} &\\ln P = \\ln\\big( (2t + 3)^{ k/2 } \\big) + C \\cr &P = \\mathrm{e}^C (2t + 3)^{ k/2 } \\cr &P = A(2t + 3)^{ k/2 } \\end{aligned}where $A = \\mathrm{e}^C$ is a constant.",
        "Apply our initial condition $P = P_0$ when $t = 0$:\\begin{aligned} &P_0 = A(2(0) + 3)^{ k/2 } \\cr &P_0 = A(3)^{ k/2 } \\cr &A = P_0(3)^{ -k/2 } \\end{aligned}Substitute this constant $A$ back into our population equation:\\begin{aligned} &P = P_0(3)^{ -k/2 }(2t + 3)^{ k/2 } \\cr &P = P_0 \\left( \\dfrac{ 2t + 3 }{ 3 } \\right)^{ k/2 } \\end{aligned}",
        "<strong>Part (ii):</strong> We are given that $P = 3P_0$ when $t = 6$ hours. Substitute these values into the model to solve for $k$:\\begin{aligned} &3P_0 = P_0 \\left( \\dfrac{ 2(6) + 3 }{ 3 } \\right)^{ k/2 } \\cr &3 = \\left( \\dfrac{ 15 }{ 3 } \\right)^{ k/2 } \\cr &3 = 5^{ k/2 } \\cr &\\ln 3 = \\dfrac{ k }{ 2 } \\ln 5 \\cr &k = \\dfrac{ 2 \\ln 3 }{ \\ln 5 } \\end{aligned}",
        "<strong>Part (iii):</strong> We seek the population $P$ when $t = 15$ hours, using $\\dfrac{ k }{ 2 } \\approx 0.6826$:\\begin{aligned} &P = P_0 \\left( \\dfrac{ 2(15) + 3 }{ 3 } \\right)^{ k/2 } \\cr &P = P_0(11)^{ k/2 } \\cr &P = P_0(11)^{ 0.6826 } \\cr &P \\approx 5.15 P_0 \\end{aligned}Thus, the population of the colony after 15 hours is approximately $5.15 P_0$.",
        "<strong>Part (iv):</strong> For extremely large values of $t$, the model predicts that $P \\to \\infty$. In reality, because nutrient supplies are finite and toxic waste accumulates within the culture, the bacteria population cannot grow indefinitely and must eventually level off and decay.",
        "Final Answer: <strong>(ii)</strong> $k = \\dfrac{ 2\\ln 3 }{ \\ln 5 }$<br><strong>(iii)</strong> $P \\approx 5.15 P_0$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(ii)</strong> $k = \\dfrac{ \\ln 3 }{ \\ln 5 }$<br><strong>(iii)</strong> $P \\approx 2.27 P_0$",
            "feedback": "This error occurs if you forgot the factor of $\\dfrac{ 1 }{ 2 }$ when integrating $\\dfrac{ k }{ 2t + 3 }$, evaluating it incorrectly as $k \\ln(2t + 3)$ instead of $\\dfrac{ k }{ 2 } \\ln(2t + 3)$. This halves your exponent, resulting in $k = \\dfrac{ \\ln 3 }{ \\ln 5 }$."
        },
        {
            "ans": "<strong>(ii)</strong> $k = \\dfrac{ 2\\ln 3 }{ \\ln 5 }$<br><strong>(iii)</strong> $P \\approx 11.00 P_0$",
            "feedback": "While $k$ is correct, this population coefficient is wrong. It occurs if you assumed the term $\\left( \\dfrac{ 2t + 3 }{ 3 } \\right)^{ k/2 }$ simplified directly to $(2t + 3)/3 = 11$, forgetting to apply the exponent of $k/2$."
        },
        {
            "ans": "<strong>(ii)</strong> $k = \\dfrac{ \\ln 3 }{ 2\\ln 5 }$<br><strong>(iii)</strong> $P \\approx 1.51 P_0$",
            "feedback": "This occurs if you inverted the constant factor when solving, setting $\\dfrac{ k }{ 2 } = \\dfrac{ \\ln 5 }{ \\ln 3 }$ when solving the exponential equation in part (ii)."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Integrating Rational Functions",
        "content": "Never forget the reverse chain rule factor when integrating fractions like $\\dfrac{ 1 }{ 2t + 3 }$. The integral is $\\dfrac{ 1 }{ 2 } \\ln(2t + 3) + C$, not $\\ln(2t + 3) + C$. Forgetting this constant factor is one of the most common ways to lose derivation marks."
    }
},
{
    "id": "004791",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Differentiation",
    "topic": "Newton-Raphson Method",
    "subtopic": [
        "Product Rule",
        "Sign Change Rule",
        "Numerical Root Finding"
    ],
    "img": false,
    "question": "A curve has the equation:$$y = (x - 4) \\ln x$$<strong>(i)</strong> Show that:$$\\dfrac{ \\text{d}y }{ \\text{d}x } = 1 - \\dfrac{ 4 }{ x } + \\ln x$$<strong>(ii)</strong> Show that the curve has a turning point between $x = 2$ and $x = 3$.<br><br><strong>(iii)</strong> By taking $2.3$ as a first approximation to the x-coordinate of this turning point, use the Newton-Raphson method once to find a better approximation. Give your answer correct to 3 decimal places.",
    "steps": [
        "<strong>Part (i):</strong> We differentiate $y = (x - 4) \\ln x$ using the product rule. Let $u = x - 4$ and $v = \\ln x$.<br><br>The derivatives are $u' = 1$ and $v' = \\dfrac{ 1 }{ x }$.<br><br>Applying the product rule:\\begin{aligned} &\\dfrac{ \\text{d}y }{ \\text{d}x } \\cr &\\quad = u'v + uv' \\cr &\\quad = \\ln x + (x - 4)\\left( \\dfrac{ 1 }{ x } \\right) \\cr &\\quad = \\ln x + 1 - \\dfrac{ 4 }{ x } \\cr &\\quad = 1 - \\dfrac{ 4 }{ x } + \\ln x \\end{aligned}",
        "<strong>Part (ii):</strong> A turning point on a curve occurs where the first derivative is equal to zero ($y' = 0$).<br><br>Let $g(x) = \\dfrac{ \\text{d}y }{ \\text{d}x } = 1 - \\dfrac{ 4 }{ x } + \\ln x$.<br><br>Evaluate $g(x)$ at the interval boundaries $x = 2$ and $x = 3$:<br><br>• For $x = 2$:\\begin{aligned} &g(2) = 1 - \\dfrac{ 4 }{ 2 } + \\ln 2 \\cr &\\quad = -1 + \\ln 2 \\cr &\\quad \\approx -0.307 \\end{aligned}So $g(2) < 0$.<br><br>• For $x = 3$:\\begin{aligned} &g(3) = 1 - \\dfrac{ 4 }{ 3 } + \\ln 3 \\cr &\\quad = -\\dfrac{ 1 }{ 3 } + \\ln 3 \\cr &\\quad \\approx 0.765 \\end{aligned}So $g(3) > 0$.<br><br>Since there is a change of sign and $g(x)$ is continuous on the interval, a root of $g(x) = 0$ (and thus a turning point of the curve) must lie in $[2, 3]$.",
        "<strong>Part (iii):</strong> Since we are finding the root of the derivative $g(x) = 0$, our Newton-Raphson formula is:$$x_{n+1} = x_n - \\dfrac{ g(x_n) }{ g'(x_n) }$$We first differentiate $g(x) = 1 - 4x^{ -1 } + \\ln x$ to find $g'(x)$:$$g'(x) = \\dfrac{ 4 }{ x^2 } + \\dfrac{ 1 }{ x }$$",
        "Evaluate $g(2.3)$ and $g'(2.3)$ for our first iteration ($x_0 = 2.3$):\\begin{aligned} &g(2.3) = 1 - \\dfrac{ 4 }{ 2.3 } + \\ln(2.3) \\cr &\\quad \\approx 0.0938 \\cr &g'(2.3) = \\dfrac{ 4 }{ 2.3^2 } + \\dfrac{ 1 }{ 2.3 } \\cr &\\quad \\approx 1.1909 \\end{aligned}Substitute these values into the Newton-Raphson formula:\\begin{aligned} &x_1 = 2.3 - \\dfrac{ 0.0938 }{ 1.1909 } \\cr &\\quad \\approx 2.3 - 0.0787 \\cr &\\quad = 2.221 \\end{aligned}Thus, the improved approximation to the x-coordinate of the turning point is $2.221$ (to 3 decimal places).",
        "Final Answer: $$2.221$$"
    ],
    "pi_options": [
        {
            "ans": "$$2.221$$ but you apply Newton-Raphson directly to the original curve $y = 0$",
            "feedback": "Your numerical calculation of $2.221$ is correct. However, always remember that a turning point occurs where the first derivative is zero, meaning Newton-Raphson must be applied to $g(x) = 0$ (where $g(x) = y'$), which requires using $g'(x) = y''$ as the denominator. Applying it to the original equation $y = 0$ is a major conceptual error."
        },
        {
            "ans": "$$2.379$$",
            "feedback": "This error occurs if you make a sign error in the Newton-Raphson formula, incorrectly adding the correction term instead of subtracting it, which yields $x_1 = 2.3 + 0.0787$, giving $2.379$."
        },
        {
            "ans": "$$2.094$$",
            "feedback": "This error occurs if you correctly evaluate $g'(x)$ but make an arithmetic slip when evaluating the function value $g(2.3)$, such as incorrectly subtracting the logarithms or using degree mode on your calculator."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Turning Points via Newton-Raphson",
        "content": "When applying the Newton-Raphson method to locate a stationary point, you must perform the iterations on the derivative of the function, $f'(x) = 0$, not on the original function $f(x) = 0$. This means the denominator of your correction term is the second derivative, $f''(x)$."
    }
},
{
    "id": "004792",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Differentiation",
    "topic": "Newton-Raphson Method",
    "subtopic": [
        "Product Rule",
        "Sign Change Rule",
        "Numerical Root Finding"
    ],
    "img": false,
    "question": "Let $f(x) = x^2 \\mathrm{e}^x - 5$.<br><br><strong>(i)</strong> Show that:$$f'(x) = (x^2 + 2x)\\mathrm{e}^x$$<strong>(ii)</strong> Show that the equation $f(x) = 0$ has a root in the interval $[1.2, 1.3]$.<br><br><strong>(iii)</strong> By taking $1.2$ as a first approximation to this root, use the Newton-Raphson method once to find a better approximation. Give your answer correct to 3 decimal places.",
    "steps": [
        "<strong>Part (i):</strong> We differentiate $f(x) = x^2 \\mathrm{e}^x - 5$ using the product rule. Let $u = x^2$ and $v = \\mathrm{e}^x$.<br><br>The derivatives are $u' = 2x$ and $v' = \\mathrm{e}^x$.<br><br>Applying the product rule:\\begin{aligned} &f'(x) \\cr &\\quad = u'v + uv' \\cr &\\quad = (2x)(\\mathrm{e}^x) + (x^2)(\\mathrm{e}^x) \\cr &\\quad = (x^2 + 2x)\\mathrm{e}^x \\end{aligned}",
        "<strong>Part (ii):</strong> Evaluate $f(x)$ at the interval boundaries $x = 1.2$ and $x = 1.3$:<br><br>• For $x = 1.2$:\\begin{aligned} &f(1.2) = (1.2)^2 \\mathrm{e}^{ 1.2 } - 5 \\cr &\\quad \\approx 1.44(3.3201) - 5 \\cr &\\quad \\approx -0.219 \\end{aligned}So $f(1.2) < 0$.<br><br>• For $x = 1.3$:\\begin{aligned} &f(1.3) = (1.3)^2 \\mathrm{e}^{ 1.3 } - 5 \\cr &\\quad \\approx 1.69(3.6693) - 5 \\cr &\\quad \\approx 1.201 \\end{aligned}So $f(1.3) > 0$.<br><br>Since there is a change of sign and $f(x)$ is continuous on the interval, a root of $f(x) = 0$ must lie in $[1.2, 1.3]$.",
        "<strong>Part (iii):</strong> We apply the Newton-Raphson formula to find our improved root approximation:$$x_{n+1} = x_n - \\dfrac{ f(x_n) }{ f'(x_n) }$$Using $x_0 = 1.2$, evaluate $f(1.2)$ and $f'(1.2)$:\\begin{aligned} &f(1.2) \\approx -0.2185 \\cr &f'(1.2) = ((1.2)^2 + 2(1.2))\\mathrm{e}^{ 1.2 } \\cr &\\quad = 3.84 \\mathrm{e}^{ 1.2 } \\cr &\\quad \\approx 3.84(3.3201) \\cr &\\quad \\approx 12.7492 \\end{aligned}",
        "Substitute these values into the Newton-Raphson formula:\\begin{aligned} &x_1 = 1.2 - \\dfrac{ -0.2185 }{ 12.7492 } \\cr &\\quad \\approx 1.2 + 0.0171 \\cr &\\quad = 1.217 \\end{aligned}Thus, the improved approximation to the root is $1.217$ (to 3 decimal places).",
        "Final Answer: $$1.217$$"
    ],
    "pi_options": [
        {
            "ans": "$$1.183$$",
            "feedback": "This error occurs if you make a sign error in the Newton-Raphson step, subtracting a positive term or adding a negative term incorrectly, which leads to $1.2 - 0.0171 = 1.183$."
        },
        {
            "ans": "$$1.217$$ but evaluated in degree mode",
            "feedback": "Since this function only contains algebraic and exponential terms, degree mode will not affect the calculations. However, always ensure your calculator is set to the correct mode when moving between function families."
        },
        {
            "ans": "$$1.241$$",
            "feedback": "This error occurs if you make an arithmetic mistake when evaluating $f'(1.2)$, such as forgetting the factor of $2x$ in the product rule and using $f'(1.2) = 1.2^2 \\mathrm{e}^{ 1.2 }$ (approximately $4.781$), which yields a larger correction factor."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Product Rule Factoring",
        "content": "When differentiating expressions containing exponential terms like $\\mathrm{e}^x$, always factor out the $\\mathrm{e}^x$ term immediately. This keeps your derivative $f'(x)$ clean and drastically reduces the chance of manual calculator slips during evaluations."
    }
},
{
    "id": "004793",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Differentiation",
    "topic": "Newton-Raphson Method",
    "subtopic": [
        "Product Rule",
        "Sign Change Rule",
        "Trigonometric Functions"
    ],
    "img": false,
    "question": "Let $g(x) = x \\sin x - 1$, where $x$ is measured in radians.<br><br><strong>(i)</strong> Show that:$$g'(x) = \\sin x + x \\cos x$$<strong>(ii)</strong> Show that the equation $g(x) = 0$ has a root in the interval $[1.1, 1.2]$.<br><br><strong>(iii)</strong> By taking $1.1$ as a first approximation to this root, use the Newton-Raphson method once to find a better approximation. Give your answer correct to 3 decimal places.",
    "steps": [
        "<strong>Part (i):</strong> We differentiate $g(x) = x \\sin x - 1$ using the product rule. Let $u = x$ and $v = \\sin x$.<br><br>The derivatives are $u' = 1$ and $v' = \\cos x$.<br><br>Applying the product rule:\\begin{aligned} &g'(x) \\cr &\\quad = u'v + uv' \\cr &\\quad = (1)(\\sin x) + x \\cos x \\cr &\\quad = \\sin x + x \\cos x \\end{aligned}",
        "<strong>Part (ii):</strong> Ensure your calculator is set to <strong>Radian</strong> mode. Evaluate $g(x)$ at the interval boundaries $x = 1.1$ and $x = 1.2$:<br><br>• For $x = 1.1$:\\begin{aligned} &g(1.1) = 1.1 \\sin(1.1) - 1 \\cr &\\quad \\approx 1.1(0.8912) - 1 \\cr &\\quad \\approx -0.0197 \\end{aligned}So $g(1.1) < 0$.<br><br>• For $x = 1.2$:\\begin{aligned} &g(1.2) = 1.2 \\sin(1.2) - 1 \\cr &\\quad \\approx 1.2(0.9320) - 1 \\cr &\\quad \\approx 0.1184 \\end{aligned}So $g(1.2) > 0$.<br><br>Since there is a change of sign and $g(x)$ is continuous on the interval, a root of $g(x) = 0$ must lie in $[1.1, 1.2]$.",
        "<strong>Part (iii):</strong> We apply the Newton-Raphson formula to find our improved root approximation:$$x_{n+1} = x_n - \\dfrac{ g(x_n) }{ g'(x_n) }$$Using $x_0 = 1.1$ in Radian mode, evaluate $g(1.1)$ and $g'(1.1)$:\\begin{aligned} &g(1.1) \\approx -0.0197 \\cr &g'(1.1) = \\sin(1.1) + 1.1 \\cos(1.1) \\cr &\\quad \\approx 0.8912 + 1.1(0.4536) \\cr &\\quad \\approx 0.8912 + 0.4990 \\cr &\\quad = 1.3902 \\end{aligned}",
        "Substitute these values into the Newton-Raphson formula:\\begin{aligned} &x_1 = 1.1 - \\dfrac{ -0.0197 }{ 1.3902 } \\cr &\\quad \\approx 1.1 + 0.0142 \\cr &\\quad = 1.114 \\end{aligned}Thus, the improved approximation to the root is $1.114$ (to 3 decimal places).",
        "Final Answer: $$1.114$$"
    ],
    "pi_options": [
        {
            "ans": "$$1.086$$",
            "feedback": "This error occurs if you make a sign error in the Newton-Raphson step, incorrectly subtracting the correction term when $g(1.1)$ is already negative, resulting in $1.1 - 0.0142 = 1.086$."
        },
        {
            "ans": "$$1.114$$ but evaluated in degree mode",
            "feedback": "This error occurs if you perform the calculations with your calculator set to <strong>Degree</strong> mode instead of Radian mode. In degree mode, $\\sin(1.1^\\circ) \\approx 0.0192$ and $\\cos(1.1^\\circ) \\approx 0.9998$, which leads to completely incorrect intermediate values and a failed approximation."
        },
        {
            "ans": "$$1.122$$",
            "feedback": "This mistake occurs if you make a product rule error when differentiating $x \\sin x$, such as forgetting to include the first term ($\\sin x$) and using $g'(1.1) \\approx 1.1 \\cos(1.1)$, which gives approximately $0.4990$, overestimating the step adjustment."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Radian Mode Check",
        "content": "Any calculus-based numerical method involving trigonometric functions (including the sign change rule and Newton-Raphson) must <strong>always</strong> be performed in Radian mode. Working in Degree mode is one of the most common ways students lose entire question marks on exam papers."
    }
},
{
    "id": "004794",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Differentiation",
    "topic": "Newton-Raphson Method",
    "subtopic": [
        "Quotient Rule",
        "Sign Change Rule",
        "Numerical Root Finding"
    ],
    "img": false,
    "question": "Let $h(x) = \\dfrac{ \\mathrm{e}^x }{ x } - 4$.<br><br><strong>(i)</strong> Show that:$$h'(x) = \\dfrac{ \\mathrm{e}^x(x - 1) }{ x^2 }$$<strong>(ii)</strong> Show that the equation $h(x) = 0$ has a root in the interval $[2.1, 2.2]$.<br><br><strong>(iii)</strong> By taking $2.1$ as a first approximation to this root, use the Newton-Raphson method once to find a better approximation. Give your answer correct to 3 decimal places.",
    "steps": [
        "<strong>Part (i):</strong> We differentiate $h(x) = \\dfrac{ \\mathrm{e}^x }{ x } - 4$ using the quotient rule. Let $u = \\mathrm{e}^x$ and $v = x$.<br><br>The derivatives are $u' = \\mathrm{e}^x$ and $v' = 1$.<br><br>Applying the quotient rule:\\begin{aligned} &h'(x) \\cr &\\quad = \\dfrac{ u'v - uv' }{ v^2 } \\cr &\\quad = \\dfrac{ (\\mathrm{e}^x)(x) - (\\mathrm{e}^x)(1) }{ x^2 } \\cr &\\quad = \\dfrac{ \\mathrm{e}^x(x - 1) }{ x^2 } \\end{aligned}",
        "<strong>Part (ii):</strong> Evaluate $h(x)$ at the interval boundaries $x = 2.1$ and $x = 2.2$:<br><br>• For $x = 2.1$:\\begin{aligned} &h(2.1) = \\dfrac{ \\mathrm{e}^{ 2.1 } }{ 2.1 } - 4 \\cr &\\quad \\approx \\dfrac{ 8.1662 }{ 2.1 } - 4 \\cr &\\quad \\approx -0.1114 \\end{aligned}So $h(2.1) < 0$.<br><br>• For $x = 2.2$:\\begin{aligned} &h(2.2) = \\dfrac{ \\mathrm{e}^{ 2.2 } }{ 2.2 } - 4 \\cr &\\quad \\approx \\dfrac{ 9.0250 }{ 2.2 } - 4 \\cr &\\quad \\approx 0.1023 \\end{aligned}So $h(2.2) > 0$.<br><br>Since there is a change of sign and $h(x)$ is continuous on the interval, a root of $h(x) = 0$ must lie in $[2.1, 2.2]$.",
        "<strong>Part (iii):</strong> We apply the Newton-Raphson formula to find our improved root approximation:$$x_{n+1} = x_n - \\dfrac{ h(x_n) }{ h'(x_n) }$$Using $x_0 = 2.1$, evaluate $h(2.1)$ and $h'(2.1)$:\\begin{aligned} &h(2.1) \\approx -0.1114 \\cr &h'(2.1) = \\dfrac{ \\mathrm{e}^{ 2.1 }(2.1 - 1) }{ 2.1^2 } \\cr &\\quad = \\dfrac{ 8.1662(1.1) }{ 4.41 } \\cr &\\quad \\approx 2.0369 \\end{aligned}",
        "Substitute these values into the Newton-Raphson formula:\\begin{aligned} &x_1 = 2.1 - \\dfrac{ -0.1114 }{ 2.0369 } \\cr &\\quad \\approx 2.1 + 0.0547 \\cr &\\quad = 2.155 \\end{aligned}Thus, the improved approximation to the root is $2.155$ (to 3 decimal places).",
        "Final Answer: $$2.155$$"
    ],
    "pi_options": [
        {
            "ans": "$$2.045$$",
            "feedback": "This error occurs if you make a sign error in the Newton-Raphson step, subtracting a positive value instead of adding the double negative, which yields $2.1 - 0.0547 = 2.045$."
        },
        {
            "ans": "$$2.155$$ but using product rule derivative",
            "feedback": "Your numerical value of $2.155$ is correct. However, make sure you correctly set up the quotient rule derivative. Using a product rule expansion on a quotient by mistake (which would yield $\\dfrac{ \\mathrm{e}^x(x + 1) }{ x^2 }$) is a major algebraic error that would usually prevent you from obtaining the correct root on an exam."
        },
        {
            "ans": "$$2.126$$",
            "feedback": "This error occurs if you make an algebra mistake in the numerator of the quotient rule, such as writing $u'v + uv'$ by mistake, which leads to $h'(2.1) = \\dfrac{ \\mathrm{e}^{ 2.1 }(3.1) }{ 4.41 }$ (approximately $5.740$), reducing the size of the step adjustment."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Quotient Rule Sign Distribution",
        "content": "The numerator of the quotient rule is $u'v - uv'$. A very common exam error is to write a plus sign by mistake (confusing it with the product rule) or to swap the order of the terms. Since division order is critical, swapping terms or signs will completely change your derivative $f'(x)$."
    }
},
{
    "id": "004795",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Differentiation",
    "topic": "Newton-Raphson Method",
    "subtopic": [
        "Sign Change Rule",
        "Numerical Root Finding",
        "Intersection of Curves"
    ],
    "img": false,
    "question": "The curves $y = 3 - x^2$ and $y = \\ln(x + 1)$ intersect at a single point in the first quadrant.<br><br><strong>(i)</strong> Show that finding the x-coordinate of this point of intersection is equivalent to solving the equation:$$\\ln(x + 1) + x^2 - 3 = 0$$<strong>(ii)</strong> Show that the x-coordinate of this point of intersection lies in the interval $[1.4, 1.5]$.<br><br><strong>(iii)</strong> By taking $1.4$ as a first approximation, use the Newton-Raphson method once to find a better approximation to this x-coordinate. Give your answer correct to 3 decimal places.",
    "steps": [
        "<strong>Part (i):</strong> At the point of intersection of the two curves, their $y$-values must be equal:\\begin{aligned} &\\ln(x + 1) = 3 - x^2 \\cr &\\ln(x + 1) + x^2 - 3 = 0 \\end{aligned}",
        "<strong>Part (ii):</strong> Let $f(x) = \\ln(x + 1) + x^2 - 3$. Evaluate $f(x)$ at the interval boundaries $x = 1.4$ and $x = 1.5$:<br><br>• For $x = 1.4$:\\begin{aligned} &f(1.4) = \\ln(2.4) + 1.4^2 - 3 \\cr &\\quad \\approx 0.8755 + 1.96 - 3 \\cr &\\quad \\approx -0.1645 \\end{aligned}So $f(1.4) < 0$.<br><br>• For $x = 1.5$:\\begin{aligned} &f(1.5) = \\ln(2.5) + 1.5^2 - 3 \\cr &\\quad \\approx 0.9163 + 2.25 - 3 \\cr &\\quad \\approx 0.1663 \\end{aligned}So $f(1.5) > 0$.<br><br>Since there is a change of sign and $f(x)$ is continuous on the interval, the curves must intersect at a point with an x-coordinate in $[1.4, 1.5]$.",
        "<strong>Part (iii):</strong> We apply the Newton-Raphson formula to find our improved root approximation:$$x_{n+1} = x_n - \\dfrac{ f(x_n) }{ f'(x_n) }$$We differentiate $f(x) = \\ln(x + 1) + x^2 - 3$ to find $f'(x)$:$$f'(x) = \\dfrac{ 1 }{ x + 1 } + 2x$$",
        "Using our starting approximation $x_0 = 1.4$, evaluate $f(1.4)$ and $f'(1.4)$:\\begin{aligned} &f(1.4) \\approx -0.1645 \\cr &f'(1.4) = \\dfrac{ 1 }{ 2.4 } + 2(1.4) \\cr &\\quad \\approx 0.4167 + 2.8 \\cr &\\quad = 3.2167 \\end{aligned}Substitute these values into the Newton-Raphson formula:\\begin{aligned} &x_1 = 1.4 - \\dfrac{ -0.1645 }{ 3.2167 } \\cr &\\quad \\approx 1.4 + 0.0511 \\cr &\\quad = 1.451 \\end{aligned}Thus, the improved approximation to the x-coordinate of the point of intersection is $1.451$ (to 3 decimal places).",
        "Final Answer: $$1.451$$"
    ],
    "pi_options": [
        {
            "ans": "$$1.349$$",
            "feedback": "This error occurs if you make a sign error in the Newton-Raphson step, subtracting the correction term instead of adding the double negative, which yields $1.4 - 0.0511 = 1.349$."
        },
        {
            "ans": "$$1.451$$ but evaluated in degree mode",
            "feedback": "While this function contains algebraic and logarithmic terms, always make sure you are in Radian mode when applying calculus-based numerical methods, as other families of equations (such as trigonometric ones) will fail completely in degree mode."
        },
        {
            "ans": "$$1.417$$",
            "feedback": "This error occurs if you make a differentiation error when finding $f'(x)$, such as writing $f'(x) = \\dfrac{ 1 }{ x } + 2x$, which leads to $f'(1.4) \\approx 0.7143 + 2.8$, giving $3.5143$ and resulting in a smaller correction step."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Intersections as $f(x) = 0$",
        "content": "When asked to find the intersection of two curves, always equate them and rearrange to form a single function $f(x) = 0$. Trying to apply numerical methods to both equations separately is mathematically impossible. This single-function setup is the fundamental gateway to applying the Newton-Raphson method."
    }
},
{
    "id": "004796",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "Integration Methods",
    "subtopic": [
        "Integration by Parts",
        "Integration by Substitution"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Find:$$\\int x^{-1/3} \\ln x \\text{d}x$$<strong>(b)</strong> Using the substitution $u^2 = x^2 + 9$, or otherwise, find the exact value of:$$\\int_{ 0 }^{ 4 } \\dfrac{ x^3 }{ \\sqrt{x^2 + 9} } \\text{d}x$$",
    "steps": [
        "<strong>Part (a):</strong> We find the indefinite integral using integration by parts:$$\\int u \\text{d}v = uv - \\int v \\text{d}u$$Let $u = \\ln x$ and $\\text{d}v = x^{-1/3} \\text{d}x$.<br><br>The derivatives and integrals are:\\begin{aligned} &\\text{d}u = \\dfrac{ 1 }{ x } \\text{d}x \\cr &v = \\dfrac{ 3 }{ 2 } x^{ 2/3 } \\end{aligned}",
        "Substitute these into our integration by parts formula:\\begin{aligned} &\\int x^{-1/3} \\ln x \\text{d}x \\cr &\\quad = \\dfrac{ 3 }{ 2 } x^{ 2/3 } \\ln x \\cr &\\qquad - \\int \\left( \\dfrac{ 3 }{ 2 } x^{ 2/3 } \\right)\\left( \\dfrac{ 1 }{ x } \\right) \\text{d}x \\cr &\\quad = \\dfrac{ 3 }{ 2 } x^{ 2/3 } \\ln x - \\dfrac{ 3 }{ 2 } \\int x^{-1/3} \\text{d}x \\cr &\\quad = \\dfrac{ 3 }{ 2 } x^{ 2/3 } \\ln x \\cr &\\qquad - \\dfrac{ 3 }{ 2 } \\left( \\dfrac{ 3 }{ 2 } x^{ 2/3 } \\right) + C \\cr &\\quad = \\dfrac{ 3 }{ 2 } x^{ 2/3 } \\ln x - \\dfrac{ 9 }{ 4 } x^{ 2/3 } + C \\end{aligned}",
        "<strong>Part (b):</strong> Evaluate using the substitution $u^2 = x^2 + 9$.<br><br>Differentiating both sides gives:\\begin{aligned} &2u \\text{d}u = 2x \\text{d}x \\cr &u \\text{d}u = x \\text{d}x \\end{aligned}Express the numerator as:\\begin{aligned} &x^3 \\text{d}x = x^2(x \\text{d}x) \\cr &\\phantom{x^3 \\text{d}x} = (u^2 - 9)u \\text{d}u \\end{aligned}Determine the new limits of integration:<br><br>• When $x = 0$:\\begin{aligned} &u^2 = 9 \\cr &u = 3 \\end{aligned}<br>• When $x = 4$:\\begin{aligned} &u^2 = 16 + 9 \\cr &u^2 = 25 \\cr &u = 5 \\end{aligned}",
        "Substitute the terms and the new limits into our integral:\\begin{aligned} &\\int_{ 0 }^{ 4 } \\dfrac{ x^3 }{ \\sqrt{x^2 + 9} } \\text{d}x \\cr &\\quad = \\int_{ 3 }^{ 5 } \\dfrac{ (u^2 - 9)u \\text{d}u }{ u } \\cr &\\quad = \\int_{ 3 }^{ 5 } (u^2 - 9) \\text{d}u \\cr &\\quad = \\left[ \\dfrac{ u^3 }{ 3 } - 9u \\right]_{ 3 }^{ 5 } \\end{aligned}",
        "Evaluate at the upper and lower limits:<br><br>• At $u = 5$:\\begin{aligned} &\\dfrac{ 125 }{ 3 } - 9(5) \\cr &\\quad = \\dfrac{ 125 }{ 3 } - 45 \\cr &\\quad = -\\dfrac{ 10 }{ 3 } \\end{aligned}<br>• At $u = 3$:\\begin{aligned} &\\dfrac{ 27 }{ 3 } - 9(3) \\cr &\\quad = 9 - 27 \\cr &\\quad = -18 \\end{aligned}Subtract the lower limit value from the upper limit value:\\begin{aligned} &-\\dfrac{ 10 }{ 3 } - (-18) \\cr &\\quad = 18 - \\dfrac{ 10 }{ 3 } \\cr &\\quad = \\dfrac{ 44 }{ 3 } \\end{aligned}",
        "Final Answer: <strong>(a)</strong> $\\dfrac{ 3 }{ 2 } x^{ 2/3 } \\ln x - \\dfrac{ 9 }{ 4 } x^{ 2/3 } + C$<br><strong>(b)</strong> $\\dfrac{ 44 }{ 3 }$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $\\dfrac{ 3 }{ 2 } x^{ 2/3 } \\ln x - \\dfrac{ 3 }{ 2 } x^{ 2/3 } + C$<br><strong>(b)</strong> $\\dfrac{ 10 }{ 3 }$",
            "feedback": "This error in part (a) occurs if you forget to divide by the new exponent when integrating the remaining term $\\int \\frac{3}{2} x^{-1/3} \\text{d}x$, writing $\\frac{3}{2}x^{2/3}$ instead of $\\frac{9}{4}x^{2/3}$. In part (b), $\\frac{10}{3}$ is the result of neglecting the lower integration boundary or making a sign error at $u = 5$."
        },
        {
            "ans": "<strong>(a)</strong> $\\dfrac{ 3 }{ 2 } x^{ 2/3 } \\ln x - \\dfrac{ 9 }{ 4 } x^{ 2/3 } + C$<br><strong>(b)</strong> $\\dfrac{ 16 }{ 3 }$",
            "feedback": "Your integration in part (a) is correct. In part (b), this error occurs if you make an arithmetic error when evaluating $u^3/3 - 9u$ at the lower limit $u = 3$, such as evaluating $3^3/3 - 9(3)$ as $-6$ instead of $-18$."
        },
        {
            "ans": "<strong>(a)</strong> $\\dfrac{ 2 }{ 3 } x^{ 2/3 } \\ln x - \\dfrac{ 4 }{ 9 } x^{ 2/3 } + C$<br><strong>(b)</strong> $\\dfrac{ 44 }{ 3 }$",
            "feedback": "Your calculation in part (b) is correct. However, in part (a), this occurs if you integrated $x^{-1/3}$ incorrectly as $\\frac{2}{3}x^{2/3}$ instead of $\\frac{3}{2}x^{2/3}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Choosing $u$ and $v$ in Parts",
        "content": "When integrating products involving logarithm terms like $\\int x^n \\ln x \\text{d}x$, always choose $u = \\ln x$ and $\\text{d}v = x^n \\text{d}x$. Since we cannot directly integrate $\\ln x$ without using parts itself, this selection simplifies the integral immediately because the derivative of $\\ln x$ is a simple rational power $\\dfrac{ 1 }{ x }$."
    }
},
{
    "id": "004797",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "Integration Methods",
    "subtopic": [
        "Integration by Parts",
        "Integration by Substitution"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Find:$$\\int 3x \\cos 2x \\text{d}x$$<strong>(b)</strong> Using the substitution $u = \\cos x$, or otherwise, find the exact value of:$$\\int_{ 0 }^{ \\pi/2 } \\sin^3 x \\cos^2 x \\text{d}x$$",
    "steps": [
        "<strong>Part (a):</strong> We find the indefinite integral using integration by parts:$$\\int u \\text{d}v = uv - \\int v \\text{d}u$$Let $u = 3x$ and $\\text{d}v = \\cos 2x \\text{d}x$.<br><br>The derivatives and integrals are:\\begin{aligned} &\\text{d}u = 3 \\text{d}x \\cr &v = \\dfrac{ 1 }{ 2 } \\sin 2x \\end{aligned}",
        "Substitute these into our integration by parts formula:\\begin{aligned} &\\int 3x \\cos 2x \\text{d}x \\cr &\\quad = \\dfrac{ 3 }{ 2 } x \\sin 2x - \\dfrac{ 3 }{ 2 } \\int \\sin 2x \\text{d}x \\cr &\\quad = \\dfrac{ 3 }{ 2 } x \\sin 2x \\cr &\\qquad - \\dfrac{ 3 }{ 2 } \\left( -\\dfrac{ 1 }{ 2 } \\cos 2x \\right) + C \\cr &\\quad = \\dfrac{ 3 }{ 2 } x \\sin 2x + \\dfrac{ 3 }{ 4 } \\cos 2x + C \\end{aligned}",
        "<strong>Part (b):</strong> We evaluate using the substitution $u = \\cos x$.<br><br>Differentiating both sides gives:\\begin{aligned} &\\text{d}u = -\\sin x \\text{d}x \\cr &-\\text{d}u = \\sin x \\text{d}x \\end{aligned}Rewrite the integrand in terms of $u$:\\begin{aligned} &\\sin^3 x \\cos^2 x \\text{d}x \\cr &\\quad = (\\sin^2 x)(\\cos^2 x)(\\sin x \\text{d}x) \\cr &\\quad = (1 - u^2)(u^2)(-\\text{d}u) \\end{aligned}Determine the new integration limits:<br><br>• When $x = 0$:\\begin{aligned} &u = \\cos 0 \\cr &u = 1 \\end{aligned}<br>• When $x = \\pi/2$:\\begin{aligned} &u = \\cos(\\pi/2) \\cr &u = 0 \\end{aligned}",
        "Substitute the terms and the new limits into our integral:\\begin{aligned} &\\int_{ 0 }^{ \\pi/2 } \\sin^3 x \\cos^2 x \\text{d}x \\cr &\\quad = \\int_{ 1 }^{ 0 } (1 - u^2)(u^2)(-\\text{d}u) \\cr &\\quad = \\int_{ 0 }^{ 1 } (1 - u^2)u^2 \\text{d}u \\cr &\\quad = \\int_{ 0 }^{ 1 } (u^2 - u^4) \\text{d}u \\end{aligned}Note that the negative sign from the substitution reverses the limits of integration.",
        "Now integrate and evaluate the expression:\\begin{aligned} &\\int_{ 0 }^{ 1 } (u^2 - u^4) \\text{d}u \\cr &\\quad = \\left[ \\dfrac{ u^3 }{ 3 } - \\dfrac{ u^5 }{ 5 } \\right]_{ 0 }^{ 1 } \\cr &\\quad = \\left( \\dfrac{ 1 }{ 3 } - \\dfrac{ 1 }{ 5 } \\right) - 0 \\cr &\\quad = \\dfrac{ 2 }{ 15 } \\end{aligned}",
        "Final Answer: <strong>(a)</strong> $\\dfrac{ 3 }{ 2 } x \\sin 2x + \\dfrac{ 3 }{ 4 } \\cos 2x + C$<br><strong>(b)</strong> $\\dfrac{ 2 }{ 15 }$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $\\dfrac{ 3 }{ 2 } x \\sin 2x - \\dfrac{ 3 }{ 4 } \\cos 2x + C$<br><strong>(b)</strong> $\\dfrac{ 2 }{ 15 }$",
            "feedback": "Your part (b) calculation is correct. However, in part (a), this error occurs if you make a sign error when integrating $\\sin 2x$, forgetting that $\\int \\sin 2x \\text{d}x = -\\frac{1}{2}\\cos 2x$, which results in a negative sign instead of a positive sign for the cosine term."
        },
        {
            "ans": "<strong>(a)</strong> $\\dfrac{ 3 }{ 2 } x \\sin 2x + \\dfrac{ 3 }{ 4 } \\cos 2x + C$<br><strong>(b)</strong> $\\dfrac{ 8 }{ 15 }$",
            "feedback": "Your integration in part (a) is correct. In part (b), this occurs if you evaluate the boundaries backwards or fail to handle the negative sign from $\\text{d}u = -\\sin x \\text{d}x$, resulting in $\\int_0^1 (u^2 + u^4) \\text{d}u = \\dfrac{ 8 }{ 15 }$."
        },
        {
            "ans": "<strong>(a)</strong> $3x \\sin 2x + 3 \\cos 2x + C$<br><strong>(b)</strong> $\\dfrac{ 2 }{ 15 }$",
            "feedback": "Your part (b) calculation is correct. In part (a), this occurs if you forget to divide by the coefficients of $x$ when integrating $\\cos 2x$ and $\\sin 2x$ (failing to apply the reverse chain rule, which divides by $2$ at each stage)."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Limit Boundary Flips",
        "content": "When substituting $u = \\cos x$ over the interval $[0, \\pi/2]$, the lower limit $x = 0$ becomes $u = 1$, and the upper limit $x = \\pi/2$ becomes $u = 0$. Since $1 > 0$, the limits appear 'upside down' ($\\int_1^0$). Do not manually flip them! The negative sign from $\\text{d}u = -\\sin x \\text{d}x$ will naturally reverse the limits back to a standard $\\int_0^1$ order."
    }
},
{
    "id": "004798",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "Integration Methods",
    "subtopic": [
        "Integration by Parts",
        "Integration by Substitution"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Find:$$\\int x^2 \\ln 2x \\text{d}x$$<strong>(b)</strong> Using the substitution $u = 2x + 1$, or otherwise, find the exact value of:$$\\int_{ 0 }^{ 4 } x \\sqrt{2x + 1} \\text{d}x$$",
    "steps": [
        "<strong>Part (a):</strong> We find the indefinite integral using integration by parts:$$\\int u \\text{d}v = uv - \\int v \\text{d}u$$Let $u = \\ln 2x$ and $\\text{d}v = x^2 \\text{d}x$.<br><br>The derivatives and integrals are:\\begin{aligned} &\\text{d}u = \\dfrac{ 1 }{ x } \\text{d}x \\cr &v = \\dfrac{ 1 }{ 3 } x^3 \\end{aligned}",
        "Substitute these into our integration by parts formula:\\begin{aligned} &\\int x^2 \\ln 2x \\text{d}x \\cr &\\quad = \\dfrac{ 1 }{ 3 } x^3 \\ln 2x - \\dfrac{ 1 }{ 3 } \\int x^2 \\text{d}x \\cr &\\quad = \\dfrac{ 1 }{ 3 } x^3 \\ln 2x \\cr &\\qquad - \\dfrac{ 1 }{ 3 } \\left( \\dfrac{ 1 }{ 3 } x^3 \\right) + C \\cr &\\quad = \\dfrac{ 1 }{ 3 } x^3 \\ln 2x - \\dfrac{ 1 }{ 9 } x^3 + C \\end{aligned}",
        "<strong>Part (b):</strong> We evaluate using the substitution $u = 2x + 1$.<br><br>Rearranging gives $x = \\dfrac{ u - 1 }{ 2 }$. Differentiating gives:\\begin{aligned} &\\text{d}u = 2 \\text{d}x \\cr &\\text{d}x = \\dfrac{ 1 }{ 2 } \\text{d}u \\end{aligned}Determine the new limits of integration:<br><br>• When $x = 0$:\\begin{aligned} &u = 2(0) + 1 \\cr &u = 1 \\end{aligned}<br>• When $x = 4$:\\begin{aligned} &u = 2(4) + 1 \\cr &u = 9 \\end{aligned}",
        "Substitute the terms and the new limits into our integral:\\begin{aligned} &\\int_{ 0 }^{ 4 } x \\sqrt{2x + 1} \\text{d}x \\cr &\\quad = \\int_{ 1 }^{ 9 } \\left( \\dfrac{ u - 1 }{ 2 } \\right) \\sqrt{u} \\left( \\dfrac{ 1 }{ 2 } \\text{d}u \\right) \\cr &\\quad = \\dfrac{ 1 }{ 4 } \\int_{ 1 }^{ 9 } (u^{ 3/2 } - u^{ 1/2 }) \\text{d}u \\cr &\\quad = \\dfrac{ 1 }{ 4 } \\left[ \\dfrac{ 2 }{ 5 } u^{ 5/2 } - \\dfrac{ 2 }{ 3 } u^{ 3/2 } \\right]_{ 1 }^{ 9 } \\end{aligned}",
        "Evaluate at the limits:<br><br>• At $u = 9$:\\begin{aligned} &\\dfrac{ 2 }{ 5 }(9^{ 5/2 }) - \\dfrac{ 2 }{ 3 }(9^{ 3/2 }) \\cr &\\quad = \\dfrac{ 2 }{ 5 }(243) - \\dfrac{ 2 }{ 3 }(27) \\cr &\\quad = \\dfrac{ 486 }{ 5 } - 18 \\cr &\\quad = \\dfrac{ 396 }{ 5 } \\end{aligned}<br>• At $u = 1$:\\begin{aligned} &\\dfrac{ 2 }{ 5 }(1^{ 5/2 }) - \\dfrac{ 2 }{ 3 }(1^{ 3/2 }) \\cr &\\quad = \\dfrac{ 2 }{ 5 } - \\dfrac{ 2 }{ 3 } \\cr &\\quad = -\\dfrac{ 4 }{ 15 } \\end{aligned}Subtract the limits and apply the outer factor $\\dfrac{ 1 }{ 4 }$:\\begin{aligned} &\\dfrac{ 1 }{ 4 } \\left[ \\dfrac{ 396 }{ 5 } - \\left( -\\dfrac{ 4 }{ 15 } \\right) \\right] \\cr &\\quad = \\dfrac{ 1 }{ 4 } \\left( \\dfrac{ 1192 }{ 15 } \\right) \\cr &\\quad = \\dfrac{ 298 }{ 15 } \\end{aligned}",
        "Final Answer: <strong>(a)</strong> $\\dfrac{ 1 }{ 3 } x^3 \\ln 2x - \\dfrac{ 1 }{ 9 } x^3 + C$<br><strong>(b)</strong> $\\dfrac{ 298 }{ 15 }$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $\\dfrac{ 1 }{ 3 } x^3 \\ln 2x - \\dfrac{ 1 }{ 9 } x^3 + C$<br><strong>(b)</strong> $\\dfrac{ 1192 }{ 15 }$",
            "feedback": "Your integration in part (a) is correct. In part (b), this error occurs if you forgot to multiply the bracket's value by the outer coefficient $\\frac{1}{4}$ at the very end of the calculation."
        },
        {
            "ans": "<strong>(a)</strong> $\\dfrac{ 1 }{ 3 } x^3 \\ln 2x - \\dfrac{ 1 }{ 3 } x^3 + C$<br><strong>(b)</strong> $\\dfrac{ 298 }{ 15 }$",
            "feedback": "Your exact value in part (b) is correct. In part (a), this error occurs if you forgot to divide by the new power $3$ when integrating the remaining term $\\int \\frac{1}{3}x^2 \\text{d}x$, writing $\\frac{1}{3}x^3$ instead of $\\frac{1}{9}x^3$."
        },
        {
            "ans": "<strong>(a)</strong> $\\dfrac{ 1 }{ 3 } x^3 \\ln 2x - \\dfrac{ 1 }{ 9 } x^3 + C$<br><strong>(b)</strong> $-\\dfrac{ 298 }{ 15 }$",
            "feedback": "Your integration in part (a) is correct. However, in part (b), always ensure you substitute the upper limit first and subtract the lower limit. Reversing them yields a negative result, which is invalid for an area under a positive curve."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Keep Fractions in Fractions",
        "content": "When solving definite integration problems, avoid converting intermediate fractions into decimals on your calculator. Keeping values like $\\dfrac{ 1192 }{ 15 }$ in exact fraction form prevents rounding issues and ensures you get the exact value required by high-mark questions."
    }
},
{
    "id": "004799",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "Integration Methods",
    "subtopic": [
        "Integration by Parts",
        "Integration by Substitution"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Find:$$\\int x^2 \\sin x \\text{d}x$$<strong>(b)</strong> Using the substitution $u = \\mathrm{e}^x + 1$, or otherwise, find the exact value of:$$\\int_{ 0 }^{ \\ln 2 } \\dfrac{ \\mathrm{e}^{2x} }{ \\mathrm{e}^x + 1 } \\text{d}x$$",
    "steps": [
        "<strong>Part (a):</strong> We find the indefinite integral using integration by parts. Let $u = x^2$ and $\\text{d}v = \\sin x \\text{d}x$.<br><br>The derivatives and integrals are:\\begin{aligned} &\\text{d}u = 2x \\text{d}x \\cr &v = -\\cos x \\end{aligned}Substitute these into the integration by parts formula:\\begin{aligned} &\\int x^2 \\sin x \\text{d}x \\cr &\\quad = -x^2 \\cos x - \\int -2x \\cos x \\text{d}x \\cr &\\quad = -x^2 \\cos x + \\int 2x \\cos x \\text{d}x \\end{aligned}",
        "Apply integration by parts a second time on $\\int 2x \\cos x \\text{d}x$. Let $u = 2x$ and $\\text{d}v = \\cos x \\text{d}x$.<br><br>The derivatives and integrals are:\\begin{aligned} &\\text{d}u = 2 \\text{d}x \\cr &v = \\sin x \\end{aligned}Substitute these into the formula:\\begin{aligned} &\\int 2x \\cos x \\text{d}x \\cr &\\quad = 2x \\sin x - \\int 2 \\sin x \\text{d}x \\cr &\\quad = 2x \\sin x - 2(-\\cos x) \\cr &\\quad = 2x \\sin x + 2 \\cos x \\end{aligned}",
        "Combine the results to find our final indefinite integral:\\begin{aligned} &\\int x^2 \\sin x \\text{d}x \\cr &\\quad = -x^2 \\cos x + 2x \\sin x \\cr &\\qquad + 2 \\cos x + C \\end{aligned}",
        "<strong>Part (b):</strong> We evaluate using the substitution $u = \\mathrm{e}^x + 1$, which gives $\\mathrm{e}^x = u - 1$.<br><br>Differentiating gives:\\begin{aligned} &\\text{d}u = \\mathrm{e}^x \\text{d}x \\cr &\\text{d}x = \\dfrac{ 1 }{ u - 1 } \\text{d}u \\end{aligned}Rewrite the integrand in terms of $u$:\\begin{aligned} &\\dfrac{ \\mathrm{e}^{2x} }{ \\mathrm{e}^x + 1 } \\text{d}x \\cr &\\quad = \\dfrac{ (u - 1)^2 }{ u } \\cdot \\dfrac{ 1 }{ u - 1 } \\text{d}u \\cr &\\quad = \\dfrac{ u - 1 }{ u } \\text{d}u \\end{aligned}Determine the new limits of integration:<br><br>• When $x = 0$:\\begin{aligned} &u = \\mathrm{e}^0 + 1 \\cr &u = 2 \\end{aligned}<br>• When $x = \\ln 2$:\\begin{aligned} &u = \\mathrm{e}^{ \\ln 2 } + 1 \\cr &u = 2 + 1 \\cr &u = 3 \\end{aligned}",
        "Substitute the terms and new limits into our integral and evaluate:\\begin{aligned} &\\int_{ 0 }^{ \\ln 2 } \\dfrac{ \\mathrm{e}^{2x} }{ \\mathrm{e}^x + 1 } \\text{d}x \\cr &\\quad = \\int_{ 2 }^{ 3 } \\left( 1 - \\dfrac{ 1 }{ u } \\right) \\text{d}u \\cr &\\quad = \\left[ u - \\ln u \\right]_{ 2 }^{ 3 } \\cr &\\quad = (3 - \\ln 3) - (2 - \\ln 2) \\cr &\\quad = 1 - (\\ln 3 - \\ln 2) \\cr &\\quad = 1 - \\ln\\left( \\dfrac{ 3 }{ 2 } \\right) \\end{aligned}",
        "Final Answer: <strong>(a)</strong> $-x^2 \\cos x + 2x \\sin x + 2 \\cos x + C$<br><strong>(b)</strong> $1 - \\ln\\left( \\dfrac{ 3 }{ 2 } \\right)$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $-x^2 \\cos x + 2x \\sin x - 2 \\cos x + C$<br><strong>(b)</strong> $1 - \\ln\\left( \\dfrac{ 3 }{ 2 } \\right)$",
            "feedback": "Your exact value in part (b) is correct. In part (a), this error occurs if you make a sign error during the second integration by parts, incorrectly evaluating the integral of $-2\\sin x$ as $-2\\cos x$ instead of $+2\\cos x$."
        },
        {
            "ans": "<strong>(a)</strong> $-x^2 \\cos x + 2x \\sin x + 2 \\cos x + C$<br><strong>(b)</strong> $1 + \\ln\\left( \\dfrac{ 3 }{ 2 } \\right)$",
            "feedback": "Your part (a) integration is correct. In part (b), this error occurs if you make a sign error when handling the limits, writing $(3 - \\ln 3) - (2 - \\ln 2)$ incorrectly as $1 + \\ln 3 - \\ln 2$, which gives $1 + \\ln(3/2)$."
        },
        {
            "ans": "<strong>(a)</strong> $-x^2 \\cos x - 2x \\sin x - 2 \\cos x + C$<br><strong>(b)</strong> $1 - \\ln\\left( \\dfrac{ 3 }{ 2 } \\right)$",
            "feedback": "Your exact value in part (b) is correct. However, in part (a), this is a common error if you fail to distribute the double negative sign when evaluating the first integration by parts subtraction step, leading to sign errors in all subsequent terms."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Iterated Integration by Parts",
        "content": "For integrals of the form $\\int x^2 \\sin x \\text{d}x$, you must apply integration by parts twice. Be extremely careful with sign distribution on the second pass. The entire second integral is subtracted, so you must wrap it in brackets and distribute the negative sign carefully to avoid losing algebraic marks."
    }
},
{
    "id": "004800",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "Integration Methods",
    "subtopic": [
        "Integration by Parts",
        "Integration by Substitution"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Find:$$\\int (\\ln x)^2 \\text{d}x$$<strong>(b)</strong> Using the substitution $u = \\mathrm{e}^x$, or otherwise, find the exact value of:$$\\int_{ 0 }^{ \\ln 3 } \\dfrac{ 1 }{ \\mathrm{e}^x + \\mathrm{e}^{-x} } \\text{d}x$$",
    "steps": [
        "<strong>Part (a):</strong> We find the indefinite integral using integration by parts. Let $u = (\\ln x)^2$ and $\\text{d}v = \\text{d}x$.<br><br>The derivatives and integrals are:\\begin{aligned} &\\text{d}u = \\dfrac{ 2\\ln x }{ x } \\text{d}x \\cr &v = x \\end{aligned}Substitute these into the integration by parts formula:\\begin{aligned} &\\int (\\ln x)^2 \\text{d}x \\cr &\\quad = x(\\ln x)^2 - \\int x \\left( \\dfrac{ 2\\ln x }{ x } \\right) \\text{d}x \\cr &\\quad = x(\\ln x)^2 - \\int 2\\ln x \\text{d}x \\end{aligned}",
        "Apply integration by parts a second time on $\\int 2\\ln x \\text{d}x$. Let $u = \\ln x$ and $\\text{d}v = 2\\text{d}x$.<br><br>The derivatives and integrals are:\\begin{aligned} &\\text{d}u = \\dfrac{ 1 }{ x } \\text{d}x \\cr &v = 2x \\end{aligned}Substitute these into the formula:\\begin{aligned} &\\int 2\\ln x \\text{d}x \\cr &\\quad = 2x\\ln x - \\int (2x)\\left( \\dfrac{ 1 }{ x } \\text{d}x \\right) \\cr &\\quad = 2x\\ln x - \\int 2 \\text{d}x \\cr &\\quad = 2x\\ln x - 2x \\end{aligned}",
        "Combine the results to find our final indefinite integral:\\begin{aligned} &\\int (\\ln x)^2 \\text{d}x \\cr &\\quad = x(\\ln x)^2 - (2x\\ln x - 2x) + C \\cr &\\quad = x(\\ln x)^2 - 2x\\ln x + 2x + C \\end{aligned}",
        "<strong>Part (b):</strong> We evaluate using the substitution $u = \\mathrm{e}^x$.<br><br>Differentiating gives:\\begin{aligned} &\\text{d}u = \\mathrm{e}^x \\text{d}x \\cr &\\text{d}x = \\dfrac{ 1 }{ u } \\text{d}u \\end{aligned}Rewrite the integrand in terms of $u$:\\begin{aligned} &\\dfrac{ 1 }{ \\mathrm{e}^x + \\mathrm{e}^{-x} } \\text{d}x \\cr &\\quad = \\dfrac{ 1 }{ u + u^{-1} } \\cdot \\dfrac{ 1 }{ u } \\text{d}u \\cr &\\quad = \\dfrac{ 1 }{ u^2 + 1 } \\text{d}u \\end{aligned}Determine the new limits of integration:<br><br>• When $x = 0$:\\begin{aligned} &u = \\mathrm{e}^0 \\cr &u = 1 \\end{aligned}<br>• When $x = \\ln 3$:\\begin{aligned} &u = \\mathrm{e}^{ \\ln 3 } \\cr &u = 3 \\end{aligned}",
        "Substitute the terms and new limits into our integral and evaluate:\\begin{aligned} &\\int_{ 0 }^{ \\ln 3 } \\dfrac{ 1 }{ \\mathrm{e}^x + \\mathrm{e}^{-x} } \\text{d}x \\cr &\\quad = \\int_{ 1 }^{ 3 } \\dfrac{ 1 }{ u^2 + 1 } \\text{d}u \\cr &\\quad = \\left[ \\arctan u \\right]_{ 1 }^{ 3 } \\cr &\\quad = \\arctan 3 - \\arctan 1 \\cr &\\quad = \\arctan 3 - \\dfrac{ \\pi }{ 4 } \\end{aligned}",
        "Final Answer: <strong>(a)</strong> $x(\\ln x)^2 - 2x\\ln x + 2x + C$<br><strong>(b)</strong> $\\arctan 3 - \\dfrac{ \\pi }{ 4 }$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $x(\\ln x)^2 - 2x\\ln x + C$<br><strong>(b)</strong> $\\arctan 3 - \\dfrac{ \\pi }{ 4 }$",
            "feedback": "Your exact value in part (b) is correct. However, in part (a), this occurs if you make an error when integrating the remaining term $\\int 2\\ln x \\text{d}x$, forgetting the $+2x$ term that arises from completing the integration by parts on $\\ln x$."
        },
        {
            "ans": "<strong>(a)</strong> $x(\\ln x)^2 - 2x\\ln x + 2x + C$<br><strong>(b)</strong> $\\arctan 3 + \\dfrac{ \\pi }{ 4 }$",
            "feedback": "Your part (a) integration is correct. In part (b), this error occurs if you make a sign error when subtracting the lower limit $\\arctan(1) = \\frac{\\pi}{4}$, incorrectly adding it instead."
        },
        {
            "ans": "<strong>(a)</strong> $x(\\ln x)^2 - 2x\\ln x + 2x + C$<br><strong>(b)</strong> $\\arctan 3$",
            "feedback": "Your part (a) integration is correct. In part (b), this occurs if you completely neglect the lower boundary condition $x = 0 \\implies u = 1$, evaluating the integral only at the upper boundary as $\\arctan(3)$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Inverse Trigonometric Integrals",
        "content": "Recognizing that $\\int \\dfrac{ 1 }{ u^2 + 1 } \\text{d}u = \\arctan u$ is a highly valuable synoptic connection at A2 level. Always look out for algebraic substitutions that simplify complicated exponential or trigonometric fractions into standard rational forms that match inverse trigonometric patterns."
    }
}

];