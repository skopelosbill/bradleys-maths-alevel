window.ALEVEL_QUESTIONS = [
    [
    {
        "id": "004201",
        "board": "OCR",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Integration",
        "subtopic": [
            "Integration by Substitution",
            "Quotient Rule",
            "Equations of Normals",
            "Area Under a Curve"
        ],
        "img": "images/p1/004201.png",
        "question": "The curve $C$ has equation:<br>$$y = \\dfrac{6\\sin 2x}{4 - \\cos 2x}, \\quad \\text{for } x \\ge 0$$<br>1. Find the equation of the normal to the curve $C$ at the point $P\\left(\\dfrac{1}{2}\\pi, 0\\right)$.<br>2. Find the exact area of the shaded region enclosed by the curve $C$, the normal to the curve, and the $y$-axis.",
        "steps": [
            "Differentiate the equation of the curve using the quotient rule, where $u = 6\\sin 2x$ and $v = 4 - \\cos 2x$:<br>$$u' = 12\\cos 2x, \\quad v' = 2\\sin 2x$$<br>We apply the quotient rule to find the derivative:<br>$$\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{12\\cos 2x(4 - \\cos 2x) - 6\\sin 2x(2\\sin 2x)}{(4 - \\cos 2x)^2} \\\\ &= \\dfrac{48\\cos 2x - 12\\cos^2 2x - 12\\sin^2 2x}{(4 - \\cos 2x)^2} \\\\ &= \\dfrac{48\\cos 2x - 12(\\cos^2 2x + \\sin^2 2x)}{(4 - \\cos 2x)^2} \\\\ &= \\dfrac{48\\cos 2x - 12}{(4 - \\cos 2x)^2} \\end{aligned}$$",
            "Substitute $x = \\dfrac{1}{2}\\pi$ into the derivative to find the gradient of the tangent at $P$:<br>$$\\text{At } x = \\dfrac{1}{2}\\pi, \\quad 2x = \\pi, \\quad \\cos \\pi = -1$$<br>$$\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x}\\bigg|_{x=\\pi/2} &= \\dfrac{48(-1) - 12}{(4 - (-1))^2} \\\\ &= \\dfrac{-60}{25} \\\\ &= -\\dfrac{12}{5} \\end{aligned}$$<br>The gradient of the normal is the negative reciprocal of the tangent gradient:<br>$$m_{\\text{normal}} = \\dfrac{5}{12}$$",
            "Use the point-gradient formula $y - y_1 = m(x - x_1)$ with the point $P\\left(\\dfrac{1}{2}\\pi, 0\\right)$ to find the equation of the normal:<br>$$\\begin{aligned} y - 0 &= \\dfrac{5}{12}\\left(x - \\dfrac{1}{2}\\pi\\right) \\\\ y &= \\dfrac{5}{12}x - \\dfrac{5}{24}\\pi \\end{aligned}$$",
            "Set up the integral for the area. The curve and the normal meet at $x = \\dfrac{1}{2}\\pi$, and the region is bounded on the left by the $y$-axis ($x = 0$). For $0 \\le x \\le \\dfrac{1}{2}\\pi$, the curve lies above the normal line. Therefore, the area is:<br>$$A = \\int_{0}^{\\pi/2} \\left( \\dfrac{6\\sin 2x}{4 - \\cos 2x} - \\left( \\dfrac{5}{12}x - \\dfrac{5\\pi}{24} \\right) \\right) \\text{d}x = I_1 - I_2$$",
            "Evaluate the first integral $I_1 = \\int_{0}^{\\pi/2} \\dfrac{6\\sin 2x}{4 - \\cos 2x} \\text{d}x$ using the substitution $u = 4 - \\cos 2x$, which gives $\\text{d}u = 2\\sin 2x \\text{d}x$:<br>$$\\text{When } x = 0, \\, u = 4 - \\cos 0 = 3 \\quad \\text{and} \\quad \\text{when } x = \\dfrac{1}{2}\\pi, \\, u = 4 - \\cos \\pi = 5$$<br>$$\\begin{aligned} I_1 &= \\int_{3}^{5} \\dfrac{3}{u} \\text{d}u \\\\ &= \\Big[ 3\\ln u \\Big]_{3}^{5} \\\\ &= 3\\ln 5 - 3\\ln 3 \\\\ &= \\ln\\left(\\dfrac{125}{27}\\right) \\end{aligned}$$",
            "Evaluate the second integral $I_2 = \\int_{0}^{\\pi/2} \\left( \\dfrac{5}{12}x - \\dfrac{5\\pi}{24} \\right) \\text{d}x$:<br>$$\\begin{aligned} I_2 &= \\left[ \\dfrac{5}{24}x^2 - \\dfrac{5\\pi}{24}x \\right]_{0}^{\\pi/2} \\\\ &= \\dfrac{5}{24}\\left(\\dfrac{\\pi^2}{4}\\right) - \\dfrac{5\\pi}{24}\\left(\\dfrac{\\pi}{2}\\right) \\\\ &= \\dfrac{5\\pi^2}{96} - \\dfrac{10\\pi^2}{96} \\\\ &= -\\dfrac{5\\pi^2}{96} \\end{aligned}$$<br>Subtracting $I_2$ from $I_1$ yields the final exact area:<br>$$\\begin{aligned} A &= I_1 - I_2 \\\\ &= \\ln\\left(\\dfrac{125}{27}\right) - \\left(-\\dfrac{5\\pi^2}{96}\\right) \\\\ &= \\ln\\left(\\dfrac{125}{27}\right) + \\dfrac{5}{96}\\pi^2 \\end{aligned}$$<br><br>Final Answer: $$y = \\dfrac{5}{12}x - \\dfrac{5\\pi}{24}, \\quad \\text{Area} = \\ln\\left(\\dfrac{125}{27}\right) + \\dfrac{5}{96}\\pi^2$$"
        ],
        "pi_options": [
            {
                "ans": "$$y = -\\dfrac{12}{5}x + \\dfrac{6\\pi}{5}, \\quad \\text{Area} = \\ln\\left(\\dfrac{125}{27}\right) + \\dfrac{5}{96}\\pi^2$$",
                "feedback": "You have used the gradient of the tangent ($-\\dfrac{12}{5}$) instead of the gradient of the normal ($\\dfrac{5}{12}$) in your straight line equation. Remember that the normal is perpendicular to the tangent, so its gradient is the negative reciprocal of the tangent gradient."
            },
            {
                "ans": "$$y = \\dfrac{5}{12}x - \\dfrac{5\\pi}{24}, \\quad \\text{Area} = \\ln\\left(\\dfrac{5}{3}\right) + \\dfrac{5}{96}\\pi^2$$",
                "feedback": "Check your substitution step in the first integral. The derivative of $u = 4 - \\cos 2x$ is $\\text{d}u = 2\\sin 2x \\text{d}x$. Since the numerator has $6\\sin 2x$, the integral becomes $\\int \\dfrac{3}{u} \\text{d}u = 3\\ln u$. This results in $3\\ln\\left(\\dfrac{5}{3}\right) = \\ln\\left(\\dfrac{125}{27}\right)$, not $\\ln\\left(\\dfrac{5}{3}\right)$."
            },
            {
                "ans": "$$y = \\dfrac{5}{12}x - \\dfrac{5\\pi}{24}, \\quad \\text{Area} = \\ln\\left(\\dfrac{125}{27}\right) - \\dfrac{5}{96}\\pi^2$$",
                "feedback": "Be careful with your signs when subtracting the two integrals. The second integral $I_2$ evaluates to $-\\dfrac{5}{96}\\pi^2$. Subtracting this negative quantity from $I_1$ yields a positive addition: $I_1 - I_2 = I_1 - \\left(-\\dfrac{5\\pi^2}{96}\\right) = I_1 + \\dfrac{5\\pi^2}{96}$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Quotient Rule Simplification",
            "content": "When differentiating expressions like $y = \\dfrac{a\\sin kx}{b - \\cos kx}$, factor out terms in the numerator immediately before substituting values. Recognizing the identity $\\sin^2 2x + \\cos^2 2x = 1$ simplifies the numerator from a long trigonometric expression to a neat constant, making the final gradient substitution far less error-prone."
        }
    },
    {
        "id": "004202",
        "board": "OCR",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Integration",
        "subtopic": [
            "Logarithmic Integration",
            "Quotient Rule",
            "Equations of Normals",
            "Area Under a Curve"
        ],
        "img": "images/p1/004202.png",
        "question": "The curve $C$ has equation:<br>$$y = \\dfrac{2x + 1}{x^2 + x + 2}, \\quad \\text{for } x \\ge 0$$<br>1. Show that the equation of the normal to the curve $C$ at the point $P$ where $x = 1$ is $y = 16x - \\dfrac{61}{4}$.<br>2. Find the exact area of the shaded region bounded by the curve $C$, the normal to the curve, and the $y$-axis.",
        "steps": [
            "Find the coordinates of the point $P$. Substitute $x = 1$ into the curve's equation:<br>$$y = \\dfrac{2(1) + 1}{1^2 + 1 + 2} = \\dfrac{3}{4}$$<br>So the coordinates of $P$ are $\\left(1, \\dfrac{3}{4}\\right)$.",
            "Differentiate the equation of the curve using the quotient rule, where $u = 2x+1$ and $v = x^2+x+2$:<br>$$u' = 2, \\quad v' = 2x + 1$$<br>$$\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{2(x^2 + x + 2) - (2x + 1)(2x + 1)}{(x^2 + x + 2)^2} \\\\ &= \\dfrac{2x^2 + 2x + 4 - (4x^2 + 4x + 1)}{(x^2 + x + 2)^2} \\\\ &= \\dfrac{-2x^2 - 2x + 3}{(x^2 + x + 2)^2} \\end{aligned}$$",
            "Substitute $x = 1$ into the derivative to find the tangent gradient at $P$:<br>$$\\dfrac{\\text{d}y}{\\text{d}x}\\bigg|_{x=1} = \\dfrac{-2(1)^2 - 2(1) + 3}{(1^2 + 1 + 2)^2} = \\dfrac{-1}{16}$$<br>The gradient of the normal is the negative reciprocal of the tangent gradient, which is $16$.",
            "Find the equation of the normal line using the point-gradient formula with $P\\left(1, \\dfrac{3}{4}\\right)$:<br>$$\\begin{aligned} y - \\dfrac{3}{4} &= 16(x - 1) \\\\ y &= 16x - 16 + \\dfrac{3}{4} \\\\ y &= 16x - \\dfrac{61}{4} \\end{aligned}$$",
            "Set up the integral for the area bounded by the curve, the normal, and the $y$-axis from $x = 0$ to $x = 1$. Since the curve lies above the normal in this interval, the area is:<br>$$A = \\int_{0}^{1} \\left( \\dfrac{2x + 1}{x^2 + x + 2} - \\left( 16x - \\dfrac{61}{4} \\right) \\right) \\text{d}x = I_1 - I_2$$",
            "Evaluate the curve integral $I_1 = \\int_{0}^{1} \\dfrac{2x + 1}{x^2 + x + 2} \\text{d}x$ using the logarithmic substitution $u = x^2 + x + 2$, where $\\text{d}u = (2x + 1)\\text{d}x$:<br>$$\\begin{aligned} I_1 &= \\Big[ \\ln(x^2 + x + 2) \\Big]_{0}^{1} \\\\ &= \\ln 4 - \\ln 2 \\\\ &= \\ln\\left(\\dfrac{4}{2}\right) \\\\ &= \\ln 2 \\end{aligned}$$",
            "Evaluate the normal line integral $I_2 = \\int_{0}^{1} \\left( 16x - \\dfrac{61}{4} \\right) \\text{d}x$:<br>$$\\begin{aligned} I_2 &= \\left[ 8x^2 - \\dfrac{61}{4}x \\right]_{0}^{1} \\\\ &= 8 - \\dfrac{61}{4} \\\\ &= -\\dfrac{29}{4} \\end{aligned}$$<br>Subtracting the two results gives the final exact area:<br>$$\\begin{aligned} A &= I_1 - I_2 \\\\ &= \\ln 2 - \\left(-\\dfrac{29}{4}\\right) \\\\ &= \\ln 2 + \\dfrac{29}{4} \\end{aligned}$$<br><br>Final Answer: $$y = 16x - \\dfrac{61}{4}, \\quad \\text{Area} = \\ln 2 + \\dfrac{29}{4}$$"
        ],
        "pi_options": [
            {
                "ans": "$$y = -\\dfrac{1}{16}x + \\dfrac{13}{16}, \\quad \\text{Area} = \\ln 2 + \\dfrac{29}{4}$$",
                "feedback": "You used the tangent gradient of $-\\dfrac{1}{16}$ rather than the normal gradient of $16$. The normal is perpendicular to the tangent curve, so its gradient is given by the negative reciprocal: $-\\dfrac{1}{m_{\\text{tangent}}} = 16$."
            },
            {
                "ans": "$$y = 16x - \\dfrac{61}{4}, \\quad \\text{Area} = \\ln 4 + \\dfrac{29}{4}$$",
                "feedback": "Check the limits of integration for the first integral. The lower limit is $x = 0$, which gives $\\ln(0^2 + 0 + 2) = \\ln 2$. The upper limit is $x = 1$, which gives $\\ln(1^2 + 1 + 2) = \\ln 4$. Subtracting the lower limit from the upper limit gives $\\ln 4 - \\ln 2 = \\ln 2$."
            },
            {
                "ans": "$$y = 16x - \\dfrac{61}{4}, \\quad \\text{Area} = \\ln 2 - \\dfrac{29}{4}$$",
                "feedback": "Be careful with signs when subtracting the integrals. The second integral $I_2$ is negative ($-\\dfrac{29}{4}$). Since we are subtracting the normal line's integral from the curve's integral, we have $\\ln 2 - \\left(-\\dfrac{29}{4}\\right) = \\ln 2 + \\dfrac{29}{4}$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Spotting Logarithmic Integrals",
            "content": "Always inspect rational functions for the $f'(x)/f(x)$ form before attempting partial fractions or other complex integration techniques. Since the derivative of $x^2 + x + 2$ is exactly $2x + 1$, the integral simplifies instantly to $\\ln(x^2 + x + 2) + C$, saving valuable exam time."
        }
    },
    {
        "id": "004203",
        "board": "OCR",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Integration",
        "subtopic": [
            "Integration by Substitution",
            "Product Rule",
            "Equations of Normals",
            "Trigonometric Calculus"
        ],
        "img": "images/p1/004203.png",
        "question": "The curve $C$ has equation:<br>$$y = 8\\sin x \\cos^3 x, \\quad \\text{for } 0 \\le x \\le \\dfrac{1}{2}\\pi$$<br>1. Show that the equation of the normal to the curve $C$ at the point $P$ where $x = \\dfrac{1}{3}\\pi$ is $y = \\dfrac{1}{4}x - \\dfrac{1}{12}\\pi + \\dfrac{\\sqrt{3}}{2}$.<br>2. Find the exact area of the shaded region bounded by the curve $C$, the normal to the curve, and the $y$-axis.",
        "steps": [
            "Find the coordinates of the point $P$. Substitute $x = \\dfrac{1}{3}\\pi$ into the curve's equation:<br>$$y = 8\\sin\\left(\\dfrac{1}{3}\\pi\\right)\\cos^3\\left(\\dfrac{1}{3}\\pi\\right) = 8\\left(\\dfrac{\\sqrt{3}}{2}\right)\\left(\\dfrac{1}{2}\right)^3 = \\dfrac{\\sqrt{3}}{2}$$<br>The coordinates of $P$ are $\\left(\\dfrac{1}{3}\\pi, \\dfrac{\\sqrt{3}}{2}\\right)$.",
            "Differentiate the equation of the curve using the product rule:<br>$$\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= 8\\cos x \\cos^3 x + 8\\sin x \\left(3\\cos^2 x(-\\sin x)\\right) \\\\ &= 8\\cos^4 x - 24\\sin^2 x \\cos^2 x \\\\ &= 8\\cos^2 x(\\cos^2 x - 3(1 - \\cos^2 x)) \\\\ &= 8\\cos^2 x(4\\cos^2 x - 3) \\end{aligned}$$",
            "Substitute $x = \\dfrac{1}{3}\\pi$ into the derivative to find the tangent gradient at $P$:<br>$$\\cos\\left(\\dfrac{1}{3}\\pi\\right) = \\dfrac{1}{2} \\implies \\cos^2\\left(\\dfrac{1}{3}\\pi\\right) = \\dfrac{1}{4}$$<br>$$\\dfrac{\\text{d}y}{\\text{d}x}\\bigg|_{x=\\pi/3} = 8\\left(\\dfrac{1}{4}\right)\\left(4\\left(\\dfrac{1}{4}\right) - 3\\right) = 2(1 - 3) = -4$$<br>The gradient of the normal is the negative reciprocal of the tangent gradient, which is $\\dfrac{1}{4}$.",
            "Use the point-gradient formula with $P\\left(\\dfrac{1}{3}\\pi, \\dfrac{\\sqrt{3}}{2}\\right)$ to obtain the equation of the normal:<br>$$\\begin{aligned} y - \\dfrac{\\sqrt{3}}{2} &= \\dfrac{1}{4}\\left(x - \\dfrac{1}{3}\\pi\\right) \\\\ y &= \\dfrac{1}{4}x - \\dfrac{1}{12}\\pi + \\dfrac{\\sqrt{3}}{2} \\end{aligned}$$",
            "Set up the integral for the area bounded by the curve, the normal, and the $y$-axis from $x = 0$ to $x = \\dfrac{1}{3}\\pi$. The curve lies above the normal, so:<br>$$A = \\int_{0}^{\\pi/3} \\left( 8\\sin x \\cos^3 x - \\left( \\dfrac{1}{4}x - \\dfrac{1}{12}\\pi + \\dfrac{\\sqrt{3}}{2} \\right) \\right) \\text{d}x = I_1 - I_2$$",
            "Evaluate the first integral $I_1 = \\int_{0}^{\\pi/3} 8\\sin x \\cos^3 x \\text{d}x$ using substitution with $u = \\cos x$, which gives $\\text{d}u = -\\sin x \\text{d}x$:<br>$$\\text{When } x = 0, \\, u = 1 \\quad \\text{and} \\quad \\text{when } x = \\dfrac{1}{3}\\pi, \\, u = \\dfrac{1}{2}$$<br>$$\\begin{aligned} I_1 &= \\int_{1/2}^{1} 8u^3 \\text{d}u \\\\ &= \\Big[ 2u^4 \\Big]_{1/2}^{1} \\\\ &= 2(1)^4 - 2\\left(\\dfrac{1}{2}\right)^4 \\\\ &= 2 - \\dfrac{1}{8} \\\\ &= \\dfrac{15}{8} \\end{aligned}$$",
            "Evaluate the second integral $I_2 = \\int_{0}^{\\pi/3} \\left( \\dfrac{1}{4}x - \\dfrac{1}{12}\\pi + \\dfrac{\\sqrt{3}}{2} \\right) \\text{d}x$:<br>$$\\begin{aligned} I_2 &= \\left[ \\dfrac{1}{8}x^2 + \\left( \\dfrac{\\sqrt{3}}{2} - \\dfrac{\\pi}{12} \\right)x \\right]_{0}^{\\pi/3} \\\\ &= \\dfrac{1}{8}\\left(\\dfrac{\\pi^2}{9}\right) + \\left( \\dfrac{\\sqrt{3}}{2} - \\dfrac{\\pi}{12} \\right)\\left(\\dfrac{\\pi}{3}\right) \\\\ &= \\dfrac{\\pi^2}{72} + \\dfrac{\\sqrt{3}\\pi}{6} - \\dfrac{\\pi^2}{36} \\\\ &= \\dfrac{\\sqrt{3}\\pi}{6} - \\dfrac{\\pi^2}{72} \\end{aligned}$$<br>Subtracting $I_2$ from $I_1$ yields the final exact area:<br>$$\\begin{aligned} A &= I_1 - I_2 \\\\ &= \\dfrac{15}{8} - \\left( \\dfrac{\\sqrt{3}\\pi}{6} - \\dfrac{\\pi^2}{72} \\right) \\\\ &= \\dfrac{15}{8} - \\dfrac{\\sqrt{3}\\6}\\pi + \\dfrac{1}{72}\\pi^2 \\end{aligned}$$<br><br>Final Answer: $$y = \\dfrac{1}{4}x - \\dfrac{1}{12}\\pi + \\dfrac{\\sqrt{3}}{2}, \\quad \\text{Area} = \\dfrac{15}{8} - \\dfrac{\\sqrt{3}}{6}\\pi + \\dfrac{1}{72}\\pi^2$$"
        ],
        "pi_options": [
            {
                "ans": "$$y = -4x + \\dfrac{4\\pi}{3} + \\dfrac{\\sqrt{3}}{2}, \\quad \\text{Area} = \\dfrac{15}{8} - \\dfrac{\\sqrt{3}}{6}\\pi + \\dfrac{1}{72}\\pi^2$$",
                "feedback": "You have used the tangent gradient of $-4$ in your linear equation instead of the normal gradient. The normal gradient is the negative reciprocal of the tangent gradient, which is $\\dfrac{1}{4}$."
            },
            {
                "ans": "$$y = \\dfrac{1}{4}x - \\dfrac{1}{12}\\pi + \\dfrac{\\sqrt{3}}{2}, \\quad \\text{Area} = -\\dfrac{15}{8} - \\dfrac{\\sqrt{3}}{6}\\pi + \\dfrac{1}{72}\\pi^2$$",
                "feedback": "Check the limits of integration for your substitution in $I_1$. When $x = 0$, $u = \\cos 0 = 1$. When $x = \\dfrac{1}{3}\\pi$, $u = \\cos\\left(\\dfrac{1}{3}\\pi\\right) = \\dfrac{1}{2}$. Swapping these limits yields a negative area component ($-\\dfrac{15}{8}$) instead of the correct positive value of $\\dfrac{15}{8}$."
            },
            {
                "ans": "$$y = \\dfrac{1}{4}x - \\dfrac{1}{12}\\pi + \\dfrac{\\sqrt{3}}{2}, \\quad \\text{Area} = \\dfrac{15}{8} + \\dfrac{\\sqrt{3}}{6}\\pi - \\dfrac{1}{72}\\pi^2$$",
                "feedback": "Be careful when subtracting the terms of $I_2$. Since $I_2 = \\dfrac{\\sqrt{3}}{6}\\pi - \\dfrac{\\pi^2}{72}$, subtracting this whole expression means distributing the negative sign: $I_1 - I_2 = \\dfrac{15}{8} - \\dfrac{\\sqrt{3}}{6}\\pi + \\dfrac{1}{72}\\pi^2$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Trigonometric Substitutions",
            "content": "When performing a substitution like $u = \\cos x$ on trigonometric integrals, remember to transform the limits of integration. Evaluating $u(\\pi/3) = \\cos(\\pi/3) = 1/2$ and $u(0) = \\cos(0) = 1$ allows you to calculate the definite integral entirely in terms of $u$ without needing to convert back to trigonometric terms at the end."
        }
    },
    {
        "id": "004204",
        "board": "OCR",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Integration",
        "subtopic": [
            "Parametric Integration",
            "Parametric Differentiation",
            "Equations of Normals",
            "Area Under a Curve"
        ],
        "img": "images/p1/004204.png",
        "question": "A curve $C$ is defined parametrically by the equations:<br>$$x = \\sin t, \\quad y = \\sin 2t, \\quad \\text{for } 0 \\le t \\le \\dfrac{1}{2}\\pi$$<br>1. Find the equation of the normal to the curve $C$ at the point where $t = \\dfrac{1}{6}\\pi$.<br>2. Find the exact area of the region bounded by the curve $C$, the normal to the curve, and the $x$-axis.",
        "steps": [
            "Find the coordinates of the point at $t = \\dfrac{1}{6}\\pi$:<br>$$x = \\sin\\left(\\dfrac{1}{6}\\pi\\right) = \\dfrac{1}{2}, \\quad y = \\sin\\left(\\dfrac{1}{3}\\pi\\right) = \\dfrac{\\sqrt{3}}{2}$$<br>The point is $\\left(\\dfrac{1}{2}, \\dfrac{\\sqrt{3}}{2}\\right)$.",
            "Differentiate the parametric equations with respect to $t$ to find $\\dfrac{\\text{d}y}{\\text{d}x}$:<br>$$\\dfrac{\\text{d}x}{\\text{d}t} = \\cos t, \\quad \\dfrac{\\text{d}y}{\\text{d}t} = 2\\cos 2t \\implies \\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{2\\cos 2t}{\\cos t}$$<br>Substitute $t = \\dfrac{1}{6}\\pi$ to find the tangent gradient:<br>$$\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x}\\bigg|_{t=\\pi/6} &= \\dfrac{2\\cos\\left(\\dfrac{1}{3}\\pi\\right)}{\\cos\\left(\\dfrac{1}{6}\\pi\\right)} \\\\ &= \\dfrac{2\\left(\\dfrac{1}{2}\right)}{\\dfrac{\\sqrt{3}}{2}} \\\\ &= \\dfrac{2}{\\sqrt{3}} \\end{aligned}$$",
            "Find the normal gradient, which is the negative reciprocal of the tangent gradient:<br>$$m_{\\text{normal}} = -\\dfrac{\\sqrt{3}}{2}$$<br>Use the point-gradient formula with $\\left(\\dfrac{1}{2}, \\dfrac{\\sqrt{3}}{2}\right)$ to get the equation of the normal:<br>$$\\begin{aligned} y - \\dfrac{\\sqrt{3}}{2} &= -\\dfrac{\\sqrt{3}}{2}\\left(x - \\dfrac{1}{2}\right) \\\\ y &= -\\dfrac{\\sqrt{3}}{2}x + \\dfrac{3\\sqrt{3}}{4} \\end{aligned}$$",
            "Find the intersections of the curve and the normal with the $x$-axis ($y = 0$):<br>The curve intersects the $x$-axis when $y = \\sin 2t = 0 \\implies t = 0 \\text{ (origin)} \\text{ and } t = \\dfrac{1}{2}\\pi \\implies x = 1$.<br>The normal intersects the $x$-axis when $0 = -\\dfrac{\\sqrt{3}}{2}x + \\dfrac{3\\sqrt{3}}{4} \\implies x = \\dfrac{3}{2}$.<br>The curve and normal meet at $x = \\dfrac{1}{2}$.",
            "Divide the area into two separate parts:<br>Part 1 ($A_1$): Area under the curve from $x = 0$ to $x = 1$.<br>Part 2 ($A_2$): Area under the normal from $x = 1$ to $x = \\dfrac{3}{2}$.<br>$$\\text{Area} = A_1 + A_2$$",
            "Evaluate the parametric curve area $A_1 = \\int_{0}^{1} y \\text{d}x$ by changing the variable to $t$ where $\\text{d}x = \\cos t \\text{d}t$:<br>$$\\begin{aligned} A_1 &= \\int_{0}^{\\pi/2} (\\sin 2t)(\\cos t) \\text{d}t \\\\ &= \\int_{0}^{\\pi/2} 2\\sin t \\cos^2 t \\text{d}t \\end{aligned}$$<br>Using substitution $u = \\cos t$, $\\text{d}u = -\\sin t \\text{d}t$, the limits are $u(0) = 1$ and $u(\\pi/2) = 0$:<br>$$\\begin{aligned} A_1 &= \\int_{0}^{1} 2u^2 \\text{d}u \\\\ &= \\left[ \\dfrac{2}{3}u^3 \\right]_{0}^{1} \\\\ &= \\dfrac{2}{3} \\end{aligned}$$",
            "Evaluate the normal line area $A_2 = \\int_{1}^{3/2} \\left( -\\dfrac{\\sqrt{3}}{2}x + \\dfrac{3\\sqrt{3}}{4} \\right) \\text{d}x$:<br>$$\\begin{aligned} A_2 &= \\left[ -\\dfrac{\\sqrt{3}}{4}x^2 + \\dfrac{3\\sqrt{3}}{4}x \\right]_{1}^{3/2} \\\\ &= \\left( -\\dfrac{\\sqrt{3}}{4}\\left(\\dfrac{9}{4}\\right) + \\dfrac{3\\sqrt{3}}{4}\\left(\\dfrac{3}{2}\right) \\right) - \\left( -\\dfrac{\\sqrt{3}}{4} + \\dfrac{3\\sqrt{3}}{4} \\right) \\\\ &= \\left( -\\dfrac{9\\sqrt{3}}{16} + \\dfrac{18\\sqrt{3}}{16} \\right) - \\dfrac{2\\sqrt{3}}{4} \\\\ &= \\dfrac{9\\sqrt{3}}{16} - \\dfrac{8\\sqrt{3}}{16} \\\\ &= \\dfrac{\\sqrt{3}}{16} \\end{aligned}$$<br>Summing $A_1$ and $A_2$ yields the total exact area:<br>$$\\begin{aligned} \\text{Area} &= A_1 + A_2 \\\\ &= \\dfrac{2}{3} + \\dfrac{\\sqrt{3}}{16} \\end{aligned}$$<br><br>Final Answer: $$y = -\\dfrac{\\sqrt{3}}{2}x + \\dfrac{3\\sqrt{3}}{4}, \\quad \\text{Area} = \\dfrac{2}{3} + \\dfrac{\\sqrt{3}}{16}$$"
        ],
        "pi_options": [
            {
                "ans": "$$y = \\dfrac{2}{\\sqrt{3}}x - \\dfrac{1}{2\\sqrt{3}}, \\quad \\text{Area} = \\dfrac{2}{3} + \\dfrac{\\sqrt{3}}{16}$$",
                "feedback": "You used the tangent gradient of $\\dfrac{2}{\\sqrt{3}}$ instead of the normal gradient. The normal is perpendicular to the tangent, meaning its gradient is the negative reciprocal, which is $-\\dfrac{\\sqrt{3}}{2}$."
            },
            {
                "ans": "$$y = -\\dfrac{\\sqrt{3}}{2}x + \\dfrac{3\\sqrt{3}}{4}, \\quad \\text{Area} = \\dfrac{1}{3} + \\dfrac{\\sqrt{3}}{16}$$",
                "feedback": "Double check your integration of the parametric curve. The integral is $\\int_{0}^{\\pi/2} 2\\sin t \\cos^2 t \\text{d}t$. Under substitution $u = \\cos t$, this becomes $\\int_{0}^{1} 2u^2 \\text{d}u = \\left[ \\dfrac{2}{3}u^3 \\right]_0^1 = \\dfrac{2}{3}$. It seems you may have missed the factor of 2."
            },
            {
                "ans": "$$y = -\\dfrac{\\sqrt{3}}{2}x + \\dfrac{3\\sqrt{3}}{4}, \\quad \\text{Area} = \\dfrac{2}{3} + \\dfrac{\\sqrt{3}}{4}$$",
                "feedback": "Check the limits of integration for $A_2$. The normal line meets the curve at $x = \\dfrac{1}{2}$ and intersects the $x$-axis at $x = \\dfrac{3}{2}$. However, the curve continues until $x = 1$. The region is bounded by the curve, the normal, and the $x$-axis, meaning the boundary between the curve area and normal area is $x = 1$. Therefore, you must integrate the normal line from $1$ to $\\dfrac{3}{2}$, yielding an area of $\\dfrac{\\sqrt{3}}{16}$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Parametric Area Boundaries",
            "content": "When a region is bounded by a parametric curve and a straight line (such as a normal), find the exact boundary $x$-values for each segment first. Splitting the area into a parametric integral and a simple geometric triangle (or straight-line integral) prevents common mistakes when setting up the integration limits."
        }
    },
    {
        "id": "004205",
        "board": "OCR",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Integration",
        "subtopic": [
            "Integration by Parts",
            "Product Rule",
            "Equations of Normals",
            "Area Under a Curve"
        ],
        "img": "images/p1/004205.png",
        "question": "The curve $C$ has equation:<br>$$y = 4x \\ln(2x), \\quad \\text{for } x > 0$$<br>1. Find the equation of the normal to the curve $C$ at the point $P$ where $x = \\dfrac{1}{2}e$.<br>2. Find the exact area of the region bounded by the curve $C$, the normal to the curve, and the $x$-axis.",
        "steps": [
            "Find the coordinates of the point $P$. Substitute $x = \\dfrac{1}{2}e$ into the curve's equation:<br>$$y = 4\\left(\\dfrac{1}{2}e\\right)\\ln\\left(2\\left(\\dfrac{1}{2}e\\right)\\right) = 2e\\ln e = 2e$$<br>So the coordinates of $P$ are $\\left(\\dfrac{1}{2}e, 2e\\right)$.",
            "Differentiate the curve's equation using the product rule:<br>$$\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= 4\\ln(2x) + 4x\\left(\\dfrac{2}{2x}\\right) \\\\ &= 4\\ln(2x) + 4 \\end{aligned}$$<br>Substitute $x = \\dfrac{1}{2}e$ to find the tangent gradient at $P$:<br>$$\\dfrac{\\text{d}y}{\\text{d}x}\\bigg|_{x=e/2} = 4\\ln e + 4 = 8$$<br>The gradient of the normal is the negative reciprocal of the tangent gradient, which is $-\\dfrac{1}{8}$.",
            "Use the point-gradient formula with $P\\left(\\dfrac{1}{2}e, 2e\\right)$ to get the equation of the normal:<br>$$\\begin{aligned} y - 2e &= -\\dfrac{1}{8}\\left(x - \\dfrac{1}{2}e\\right) \\\\ y &= -\\dfrac{1}{8}x + \\dfrac{e}{16} + 2e \\\\ y &= -\\dfrac{1}{8}x + \\dfrac{33e}{16} \\end{aligned}$$",
            "Find the intersections of the curve and normal with the $x$-axis ($y = 0$):<br>The curve intersects the $x$-axis when $4x\\ln(2x) = 0 \\implies 2x = 1 \\implies x = \\dfrac{1}{2}$.<br>The normal intersects the $x$-axis when $0 = -\\dfrac{1}{8}x + \\dfrac{33e}{16} \\implies x = \\dfrac{33e}{2}$.<br>The boundary between the curve and the normal is at $x = \\dfrac{1}{2}e$.",
            "Set up the integrals to find the area of the region. The area is divided into two parts:<br>Part 1 ($A_1$): Area under the curve from $x = \\dfrac{1}{2}$ to $x = \\dfrac{1}{2}e$.<br>Part 2 ($A_2$): Area under the normal from $x = \\dfrac{1}{2}e$ to $x = \\dfrac{33e}{2}$.",
            "Evaluate $A_1 = \\int_{1/2}^{e/2} 4x\\ln(2x) \\text{d}x$ using integration by parts with $u = \\ln(2x)$ and $\\text{d}v = 4x \\text{d}x$:<br>$$\\text{d}u = \\dfrac{1}{x} \\text{d}x, \\quad v = 2x^2$$<br>$$\\begin{aligned} \\int 4x\\ln(2x) \\text{d}x &= 2x^2\\ln(2x) - \\int 2x^2\\left(\\dfrac{1}{x}\\right) \\text{d}x \\\\ &= 2x^2\\ln(2x) - \\int 2x \\text{d}x \\\\ &= 2x^2\\ln(2x) - x^2 \\end{aligned}$$<br>Evaluating this from $x = \\dfrac{1}{2}$ to $x = \\dfrac{1}{2}e$:<br>$$\\begin{aligned} A_1 &= \\left( 2\\left(\\dfrac{e}{2}\\right)^2\\ln e - \\left(\\dfrac{e}{2}\\right)^2 \\right) - \\left( 2\\left(\\dfrac{1}{2}\right)^2\\ln 1 - \\left(\\dfrac{1}{2}\right)^2 \\right) \\\\ &= \\left( \\dfrac{e^2}{2} - \\dfrac{e^2}{4} \\right) - \\left( 0 - \\dfrac{1}{4} \\right) \\\\ &= \\dfrac{e^2}{4} + \\dfrac{1}{4} \\end{aligned}$$",
            "Evaluate $A_2 = \\int_{e/2}^{33e/2} \\left( -\\dfrac{1}{8}x + \\dfrac{33e}{16} \\right) \\text{d}x$. Since this region is a right-angled triangle with base $\\dfrac{33e}{2} - \\dfrac{e}{2} = 16e$ and height $2e$:<br>$$A_2 = \\dfrac{1}{2} \\times 16e \\times 2e = 16e^2$$<br>Summing the two areas gives the final exact area:<br>$$\\begin{aligned} \\text{Area} &= A_1 + A_2 \\\\ &= \\left( \\dfrac{e^2}{4} + \\dfrac{1}{4} \\right) + 16e^2 \\\\ &= \\dfrac{65}{4}e^2 + \\dfrac{1}{4} \\end{aligned}$$<br><br>Final Answer: $$y = -\\dfrac{1}{8}x + \\dfrac{33e}{16}, \\quad \\text{Area} = \\dfrac{65}{4}e^2 + \\dfrac{1}{4}$$"
        ],
        "pi_options": [
            {
                "ans": "$$y = 8x - 2e, \\quad \\text{Area} = \\dfrac{65}{4}e^2 + \\dfrac{1}{4}$$",
                "feedback": "You used the tangent gradient of $8$ instead of the normal gradient. The normal is perpendicular to the tangent curve, meaning its gradient is $-\\dfrac{1}{8}$."
            },
            {
                "ans": "$$y = -\\dfrac{1}{8}x + \\dfrac{33e}{16}, \\quad \\text{Area} = \\dfrac{65}{4}e^2 - \\dfrac{1}{4}$$",
                "feedback": "Be careful when evaluating the lower limit $x = \\dfrac{1}{2}$ in your integration by parts. The expression evaluated at the lower limit is $2(1/2)^2\\ln 1 - (1/2)^2 = -1/4$. Since we subtract the lower limit, this becomes $-\\left(-\\dfrac{1}{4}\right) = +\\dfrac{1}{4}$."
            },
            {
                "ans": "$$y = -\\dfrac{1}{8}x + \\dfrac{33e}{16}, \\quad \\text{Area} = \\dfrac{33}{4}e^2 + \\dfrac{1}{4}$$",
                "feedback": "Check your calculation of the area under the normal, $A_2$. The normal line intersects the $x$-axis when $y = 0 \\implies x = \\dfrac{33e}{2}$. The base of the triangle runs from $x = \\dfrac{e}{2}$ to $x = \\dfrac{33e}{2}$, which is a length of $16e$. With a height of $2e$, the area of this triangle is $\\dfrac{1}{2} \\times 16e \\times 2e = 16e^2$. It seems you may have used the wrong $x$-intercept or used $17e/2$ as the intercept."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Integration by Parts Limits",
            "content": "When evaluating $\\int x\\ln(2x)\\text{d}x$ by parts, be extremely cautious with the lower limit. Since $\\ln 1 = 0$, evaluating the term $2x^2\\ln(2x)$ at the lower limit $x = 1/2$ results in $0$, but the companion term $-x^2$ evaluates to $-1/4$. Since this term is subtracted, it becomes a positive $+1/4$ in your final area calculation."
        }
    }
]

];