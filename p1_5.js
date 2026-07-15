window.ALEVEL_QUESTIONS = [
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
            "Differentiate the equation of the curve using the quotient rule, where $u = 6\\sin 2x$ and $v = 4 - \\cos 2x$:<br>$$u' = 12\\cos 2x, \\quad v' = 2\\sin 2x$$<br>We apply the quotient rule to find the derivative:<br>$$\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{12\\cos 2x(4 - \\cos 2x) - 6\\sin 2x(2\\sin 2x)}{(4 - \\cos 2x)^2} \\ &= \\dfrac{48\\cos 2x - 12\\cos^2 2x - 12\\sin^2 2x}{(4 - \\cos 2x)^2} \\ &= \\dfrac{48\\cos 2x - 12(\\cos^2 2x + \\sin^2 2x)}{(4 - \\cos 2x)^2} \\ &= \\dfrac{48\\cos 2x - 12}{(4 - \\cos 2x)^2} \\end{aligned}$$",
            "Substitute $x = \\dfrac{1}{2}\\pi$ into the derivative to find the gradient of the tangent at $P$:<br>$$\\text{At } x = \\dfrac{1}{2}\\pi, \\quad 2x = \\pi, \\quad \\cos \\pi = -1$$<br>$$\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x}\\bigg|_{x=\\pi/2} &= \\dfrac{48(-1) - 12}{(4 - (-1))^2} \\ &= \\dfrac{-60}{25} \\ &= -\\dfrac{12}{5} \\end{aligned}$$<br>The gradient of the normal is the negative reciprocal of the tangent gradient:<br>$$m_{\\text{normal}} = \\dfrac{5}{12}$$",
            "Use the point-gradient formula $y - y_1 = m(x - x_1)$ with the point $P\\left(\\dfrac{1}{2}\\pi, 0\\right)$ to find the equation of the normal:<br>$$\\begin{aligned} y - 0 &= \\dfrac{5}{12}\\left(x - \\dfrac{1}{2}\\pi\\right) \\ y &= \\dfrac{5}{12}x - \\dfrac{5}{24}\\pi \\end{aligned}$$",
            "Set up the integral for the area. The curve and the normal meet at $x = \\dfrac{1}{2}\\pi$, and the region is bounded on the left by the $y$-axis ($x = 0$). For $0 \\le x \\le \\dfrac{1}{2}\\pi$, the curve lies above the normal line. Therefore, the area is:<br>$$A = \\int_{0}^{\\pi/2} \\left( \\dfrac{6\\sin 2x}{4 - \\cos 2x} - \\left( \\dfrac{5}{12}x - \\dfrac{5\\pi}{24} \\right) \\right) \\text{d}x = I_1 - I_2$$",
            "Evaluate the first integral $I_1 = \\int_{0}^{\\pi/2} \\dfrac{6\\sin 2x}{4 - \\cos 2x} \\text{d}x$ using the substitution $u = 4 - \\cos 2x$, which gives $\\text{d}u = 2\\sin 2x \\text{d}x$:<br>$$\\text{When } x = 0, \\, u = 4 - \\cos 0 = 3 \\quad \\text{and} \\quad \\text{when } x = \\dfrac{1}{2}\\pi, \\, u = 4 - \\cos \\pi = 5$$<br>$$\\begin{aligned} I_1 &= \\int_{3}^{5} \\dfrac{3}{u} \\text{d}u \\ &= \\Big[ 3\\ln u \\Big]_{3}^{5} \\ &= 3\\ln 5 - 3\\ln 3 \\ &= \\ln\\left(\\dfrac{125}{27}\\right) \\end{aligned}$$",
            "Evaluate the second integral $I_2 = \\int_{0}^{\\pi/2} \\left( \\dfrac{5}{12}x - \\dfrac{5\\pi}{24} \\right) \\text{d}x$:<br>$$\\begin{aligned} I_2 &= \\left[ \\dfrac{5}{24}x^2 - \\dfrac{5\\pi}{24}x \\right]_{0}^{\\pi/2} \\ &= \\dfrac{5}{24}\\left(\\dfrac{\\pi^2}{4}\\right) - \\dfrac{5\\pi}{24}\\left(\\dfrac{\\pi}{2}\\right) \\ &= \\dfrac{5\\pi^2}{96} - \\dfrac{10\\pi^2}{96} \\ &= -\\dfrac{5\\pi^2}{96} \\end{aligned}$$<br>Subtracting $I_2$ from $I_1$ yields the final exact area:<br>$$\\begin{aligned} A &= I_1 - I_2 \\ &= \\ln\\left(\\dfrac{125}{27}\\right) - \\left(-\\dfrac{5\\pi^2}{96}\\right) \\ &= \\ln\\left(\\dfrac{125}{27}\\right) + \\dfrac{5}{96}\\pi^2 \\end{aligned}$$<br><br>Final Answer: $$y = \\dfrac{5}{12}x - \\dfrac{5\\pi}{24}, \\quad \\text{Area} = \\ln\\left(\\dfrac{125}{27}\\right) + \\dfrac{5}{96}\\pi^2$$"
        ],
        "pi_options": [
            {
                "ans": "$$y = -\\dfrac{12}{5}x + \\dfrac{6\\pi}{5}, \\quad \\text{Area} = \\ln\\left(\\dfrac{125}{27}\\right) + \\dfrac{5}{96}\\pi^2$$",
                "feedback": "You have used the gradient of the tangent ($-\\dfrac{12}{5}$) instead of the gradient of the normal ($\\dfrac{5}{12}$) in your straight line equation. Remember that the normal is perpendicular to the tangent, so its gradient is the negative reciprocal of the tangent gradient."
            },
            {
                "ans": "$$y = \\dfrac{5}{12}x - \\dfrac{5\\pi}{24}, \\quad \\text{Area} = \\ln\\left(\\dfrac{5}{3}\\right) + \\dfrac{5}{96}\\pi^2$$",
                "feedback": "Check your substitution step in the first integral. The derivative of $u = 4 - \\cos 2x$ is $\\text{d}u = 2\\sin 2x \\text{d}x$. Since the numerator has $6\\sin 2x$, the integral becomes $\\int \\dfrac{3}{u} \\text{d}u = 3\\ln u$. This results in $3\\ln\\left(\\dfrac{5}{3}\\right) = \\ln\\left(\\dfrac{125}{27}\\right)$, not $\\ln\\left(\\dfrac{5}{3}\\right)$."
            },
            {
                "ans": "$$y = \\dfrac{5}{12}x - \\dfrac{5\\pi}{24}, \\quad \\text{Area} = \\ln\\left(\\dfrac{125}{27}\\right) - \\dfrac{5}{96}\\pi^2$$",
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
            "Differentiate the equation of the curve using the quotient rule, where $u = 2x+1$ and $v = x^2+x+2$:<br>$$u' = 2, \\quad v' = 2x + 1$$<br>$$\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{2(x^2 + x + 2) - (2x + 1)(2x + 1)}{(x^2 + x + 2)^2} \\ &= \\dfrac{2x^2 + 2x + 4 - (4x^2 + 4x + 1)}{(x^2 + x + 2)^2} \\ &= \\dfrac{-2x^2 - 2x + 3}{(x^2 + x + 2)^2} \\end{aligned}$$",
            "Substitute $x = 1$ into the derivative to find the tangent gradient at $P$:<br>$$\\dfrac{\\text{d}y}{\\text{d}x}\\bigg|_{x=1} = \\dfrac{-2(1)^2 - 2(1) + 3}{(1^2 + 1 + 2)^2} = \\dfrac{-1}{16}$$<br>The gradient of the normal is the negative reciprocal of the tangent gradient, which is $16$.",
            "Find the equation of the normal line using the point-gradient formula with $P\\left(1, \\dfrac{3}{4}\\right)$:<br>$$\\begin{aligned} y - \\dfrac{3}{4} &= 16(x - 1) \\ y &= 16x - 16 + \\dfrac{3}{4} \\ y &= 16x - \\dfrac{61}{4} \\end{aligned}$$",
            "Set up the integral for the area bounded by the curve, the normal, and the $y$-axis from $x = 0$ to $x = 1$. Since the curve lies above the normal in this interval, the area is:<br>$$A = \\int_{0}^{1} \\left( \\dfrac{2x + 1}{x^2 + x + 2} - \\left( 16x - \\dfrac{61}{4} \\right) \\right) \\text{d}x = I_1 - I_2$$",
            "Evaluate the curve integral $I_1 = \\int_{0}^{1} \\dfrac{2x + 1}{x^2 + x + 2} \\text{d}x$ using the logarithmic substitution $u = x^2 + x + 2$, where $\\text{d}u = (2x + 1)\\text{d}x$:<br>$$\\begin{aligned} I_1 &= \\Big[ \\ln(x^2 + x + 2) \\Big]_{0}^{1} \\ &= \\ln 4 - \\ln 2 \\ &= \\ln\\left(\\dfrac{4}{2}\\right) \\ &= \\ln 2 \\end{aligned}$$",
            "Evaluate the normal line integral $I_2 = \\int_{0}^{1} \\left( 16x - \\dfrac{61}{4} \\right) \\text{d}x$:<br>$$\\begin{aligned} I_2 &= \\left[ 8x^2 - \\dfrac{61}{4}x \\right]_{0}^{1} \\ &= 8 - \\dfrac{61}{4} \\ &= -\\dfrac{29}{4} \\end{aligned}$$<br>Subtracting the two results gives the final exact area:<br>$$\\begin{aligned} A &= I_1 - I_2 \\ &= \\ln 2 - \\left(-\\dfrac{29}{4}\\right) \\ &= \\ln 2 + \\dfrac{29}{4} \\end{aligned}$$<br><br>Final Answer: $$y = 16x - \\dfrac{61}{4}, \\quad \\text{Area} = \\ln 2 + \\dfrac{29}{4}$$"
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
            "Find the coordinates of the point $P$. Substitute $x = \\dfrac{1}{3}\\pi$ into the curve's equation:<br>$$y = 8\\sin\\left(\\dfrac{1}{3}\\pi\\right)\\cos^3\\left(\\dfrac{1}{3}\\pi\\right) = 8\\left(\\dfrac{\\sqrt{3}}{2}\\right)\\left(\\dfrac{1}{2}\\right)^3 = \\dfrac{\\sqrt{3}}{2}$$<br>The coordinates of $P$ are $\\left(\\dfrac{1}{3}\\pi, \\dfrac{\\sqrt{3}}{2}\\right)$.",
            "Differentiate the equation of the curve using the product rule:<br>$$\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= 8\\cos x \\cos^3 x + 8\\sin x \\left(3\\cos^2 x(-\\sin x)\\right) \\ &= 8\\cos^4 x - 24\\sin^2 x \\cos^2 x \\ &= 8\\cos^2 x(\\cos^2 x - 3(1 - \\cos^2 x)) \\ &= 8\\cos^2 x(4\\cos^2 x - 3) \\end{aligned}$$",
            "Substitute $x = \\dfrac{1}{3}\\pi$ into the derivative to find the tangent gradient at $P$:<br>$$\\cos\\left(\\dfrac{1}{3}\\pi\\right) = \\dfrac{1}{2} \\implies \\cos^2\\left(\\dfrac{1}{3}\\pi\\right) = \\dfrac{1}{4}$$<br>$$\\dfrac{\\text{d}y}{\\text{d}x}\\bigg|_{x=\\pi/3} = 8\\left(\\dfrac{1}{4}\\right)\\left(4\\left(\\dfrac{1}{4}\\right) - 3\\right) = 2(1 - 3) = -4$$<br>The gradient of the normal is the negative reciprocal of the tangent gradient, which is $\\dfrac{1}{4}$.",
            "Use the point-gradient formula with $P\\left(\\dfrac{1}{3}\\pi, \\dfrac{\\sqrt{3}}{2}\\right)$ to obtain the equation of the normal:<br>$$\\begin{aligned} y - \\dfrac{\\sqrt{3}}{2} &= \\dfrac{1}{4}\\left(x - \\dfrac{1}{3}\\pi\\right) \\ y &= \\dfrac{1}{4}x - \\dfrac{1}{12}\\pi + \\dfrac{\\sqrt{3}}{2} \\end{aligned}$$",
            "Set up the integral for the area bounded by the curve, the normal, and the $y$-axis from $x = 0$ to $x = \\dfrac{1}{3}\\pi$. The curve lies above the normal, so:<br>$$A = \\int_{0}^{\\pi/3} \\left( 8\\sin x \\cos^3 x - \\left( \\dfrac{1}{4}x - \\dfrac{1}{12}\\pi + \\dfrac{\\sqrt{3}}{2} \\right) \\right) \\text{d}x = I_1 - I_2$$",
            "Evaluate the first integral $I_1 = \\int_{0}^{\\pi/3} 8\\sin x \\cos^3 x \\text{d}x$ using substitution with $u = \\cos x$, which gives $\\text{d}u = -\\sin x \\text{d}x$:<br>$$\\text{When } x = 0, \\, u = 1 \\quad \\text{and} \\quad \\text{when } x = \\dfrac{1}{3}\\pi, \\, u = \\dfrac{1}{2}$$<br>$$\\begin{aligned} I_1 &= \\int_{1/2}^{1} 8u^3 \\text{d}u \\ &= \\Big[ 2u^4 \\Big]_{1/2}^{1} \\ &= 2(1)^4 - 2\\left(\\dfrac{1}{2}\\right)^4 \\ &= 2 - \\dfrac{1}{8} \\ &= \\dfrac{15}{8} \\end{aligned}$$",
            "Evaluate the second integral $I_2 = \\int_{0}^{\\pi/3} \\left( \\dfrac{1}{4}x - \\dfrac{1}{12}\\pi + \\dfrac{\\sqrt{3}}{2} \\right) \\text{d}x$:<br>$$\\begin{aligned} I_2 &= \\left[ \\dfrac{1}{8}x^2 + \\left( \\dfrac{\\sqrt{3}}{2} - \\dfrac{\\pi}{12} \\right)x \\right]_{0}^{\\pi/3} \\ &= \\dfrac{1}{8}\\left(\\dfrac{\\pi^2}{9}\\right) + \\left( \\dfrac{\\sqrt{3}}{2} - \\dfrac{\\pi}{12} \\right)\\left(\\dfrac{\\pi}{3}\\right) \\ &= \\dfrac{\\pi^2}{72} + \\dfrac{\\sqrt{3}\\pi}{6} - \\dfrac{\\pi^2}{36} \\ &= \\dfrac{\\sqrt{3}\\pi}{6} - \\dfrac{\\pi^2}{72} \\end{aligned}$$<br>Subtracting $I_2$ from $I_1$ yields the final exact area:<br>$$\\begin{aligned} A &= I_1 - I_2 \\ &= \\dfrac{15}{8} - \\left( \\dfrac{\\sqrt{3}\\pi}{6} - \\dfrac{\\pi^2}{72} \\right) \\ &= \\dfrac{15}{8} - \\dfrac{\\sqrt{3}\\6}\\pi + \\dfrac{1}{72}\\pi^2 \\end{aligned}$$<br><br>Final Answer: $$y = \\dfrac{1}{4}x - \\dfrac{1}{12}\\pi + \\dfrac{\\sqrt{3}}{2}, \\quad \\text{Area} = \\dfrac{15}{8} - \\dfrac{\\sqrt{3}}{6}\\pi + \\dfrac{1}{72}\\pi^2$$"
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
            "Differentiate the parametric equations with respect to $t$ to find $\\dfrac{\\text{d}y}{\\text{d}x}$:<br>$$\\dfrac{\\text{d}x}{\\text{d}t} = \\cos t, \\quad \\dfrac{\\text{d}y}{\\text{d}t} = 2\\cos 2t \\implies \\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{2\\cos 2t}{\\cos t}$$<br>Substitute $t = \\dfrac{1}{6}\\pi$ to find the tangent gradient:<br>$$\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x}\\bigg|_{t=\\pi/6} &= \\dfrac{2\\cos\\left(\\dfrac{1}{3}\\pi\\right)}{\\cos\\left(\\dfrac{1}{6}\\pi\\right)} \\ &= \\dfrac{2\\left(\\dfrac{1}{2}\\right)}{\\dfrac{\\sqrt{3}}{2}} \\ &= \\dfrac{2}{\\sqrt{3}} \\end{aligned}$$",
            "Find the normal gradient, which is the negative reciprocal of the tangent gradient:<br>$$m_{\\text{normal}} = -\\dfrac{\\sqrt{3}}{2}$$<br>Use the point-gradient formula with $\\left(\\dfrac{1}{2}, \\dfrac{\\sqrt{3}}{2}\\right)$ to get the equation of the normal:<br>$$\\begin{aligned} y - \\dfrac{\\sqrt{3}}{2} &= -\\dfrac{\\sqrt{3}}{2}\\left(x - \\dfrac{1}{2}\\right) \\ y &= -\\dfrac{\\sqrt{3}}{2}x + \\dfrac{3\\sqrt{3}}{4} \\end{aligned}$$",
            "Find the intersections of the curve and the normal with the $x$-axis ($y = 0$):<br>The curve intersects the $x$-axis when $y = \\sin 2t = 0 \\implies t = 0 \\text{ (origin)} \\text{ and } t = \\dfrac{1}{2}\\pi \\implies x = 1$.<br>The normal intersects the $x$-axis when $0 = -\\dfrac{\\sqrt{3}}{2}x + \\dfrac{3\\sqrt{3}}{4} \\implies x = \\dfrac{3}{2}$.<br>The curve and normal meet at $x = \\dfrac{1}{2}$.",
            "Divide the area into two separate parts:<br>Part 1 ($A_1$): Area under the curve from $x = 0$ to $x = 1$.<br>Part 2 ($A_2$): Area under the normal from $x = 1$ to $x = \\dfrac{3}{2}$.<br>$$\\text{Area} = A_1 + A_2$$",
            "Evaluate the parametric curve area $A_1 = \\int_{0}^{1} y \\text{d}x$ by changing the variable to $t$ where $\\text{d}x = \\cos t \\text{d}t$:<br>$$\\begin{aligned} A_1 &= \\int_{0}^{\\pi/2} (\\sin 2t)(\\cos t) \\text{d}t \\ &= \\int_{0}^{\\pi/2} 2\\sin t \\cos^2 t \\text{d}t \\end{aligned}$$<br>Using substitution $u = \\cos t$, $\\text{d}u = -\\sin t \\text{d}t$, the limits are $u(0) = 1$ and $u(\\pi/2) = 0$:<br>$$\\begin{aligned} A_1 &= \\int_{0}^{1} 2u^2 \\text{d}u \\ &= \\left[ \\dfrac{2}{3}u^3 \\right]_{0}^{1} \\ &= \\dfrac{2}{3} \\end{aligned}$$",
            "Evaluate the normal line area $A_2 = \\int_{1}^{3/2} \\left( -\\dfrac{\\sqrt{3}}{2}x + \\dfrac{3\\sqrt{3}}{4} \\right) \\text{d}x$:<br>$$\\begin{aligned} A_2 &= \\left[ -\\dfrac{\\sqrt{3}}{4}x^2 + \\dfrac{3\\sqrt{3}}{4}x \\right]_{1}^{3/2} \\ &= \\left( -\\dfrac{\\sqrt{3}}{4}\\left(\\dfrac{9}{4}\\right) + \\dfrac{3\\sqrt{3}}{4}\\left(\\dfrac{3}{2}\\right) \\right) - \\left( -\\dfrac{\\sqrt{3}}{4} + \\dfrac{3\\sqrt{3}}{4} \\right) \\ &= \\left( -\\dfrac{9\\sqrt{3}}{16} + \\dfrac{18\\sqrt{3}}{16} \\right) - \\dfrac{2\\sqrt{3}}{4} \\ &= \\dfrac{9\\sqrt{3}}{16} - \\dfrac{8\\sqrt{3}}{16} \\ &= \\dfrac{\\sqrt{3}}{16} \\end{aligned}$$<br>Summing $A_1$ and $A_2$ yields the total exact area:<br>$$\\begin{aligned} \\text{Area} &= A_1 + A_2 \\ &= \\dfrac{2}{3} + \\dfrac{\\sqrt{3}}{16} \\end{aligned}$$<br><br>Final Answer: $$y = -\\dfrac{\\sqrt{3}}{2}x + \\dfrac{3\\sqrt{3}}{4}, \\quad \\text{Area} = \\dfrac{2}{3} + \\dfrac{\\sqrt{3}}{16}$$"
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
            "Differentiate the curve's equation using the product rule:<br>$$\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= 4\\ln(2x) + 4x\\left(\\dfrac{2}{2x}\\right) \\ &= 4\\ln(2x) + 4 \\end{aligned}$$<br>Substitute $x = \\dfrac{1}{2}e$ to find the tangent gradient at $P$:<br>$$\\dfrac{\\text{d}y}{\\text{d}x}\\bigg|_{x=e/2} = 4\\ln e + 4 = 8$$<br>The gradient of the normal is the negative reciprocal of the tangent gradient, which is $-\\dfrac{1}{8}$.",
            "Use the point-gradient formula with $P\\left(\\dfrac{1}{2}e, 2e\\right)$ to get the equation of the normal:<br>$$\\begin{aligned} y - 2e &= -\\dfrac{1}{8}\\left(x - \\dfrac{1}{2}e\\right) \\ y &= -\\dfrac{1}{8}x + \\dfrac{e}{16} + 2e \\ y &= -\\dfrac{1}{8}x + \\dfrac{33e}{16} \\end{aligned}$$",
            "Find the intersections of the curve and normal with the $x$-axis ($y = 0$):<br>The curve intersects the $x$-axis when $4x\\ln(2x) = 0 \\implies 2x = 1 \\implies x = \\dfrac{1}{2}$.<br>The normal intersects the $x$-axis when $0 = -\\dfrac{1}{8}x + \\dfrac{33e}{16} \\implies x = \\dfrac{33e}{2}$.<br>The boundary between the curve and the normal is at $x = \\dfrac{1}{2}e$.",
            "Set up the integrals to find the area of the region. The area is divided into two parts:<br>Part 1 ($A_1$): Area under the curve from $x = \\dfrac{1}{2}$ to $x = \\dfrac{1}{2}e$.<br>Part 2 ($A_2$): Area under the normal from $x = \\dfrac{1}{2}e$ to $x = \\dfrac{33e}{2}$.",
            "Evaluate $A_1 = \\int_{1/2}^{e/2} 4x\\ln(2x) \\text{d}x$ using integration by parts with $u = \\ln(2x)$ and $\\text{d}v = 4x \\text{d}x$:<br>$$\\text{d}u = \\dfrac{1}{x} \\text{d}x, \\quad v = 2x^2$$<br>$$\\begin{aligned} \\int 4x\\ln(2x) \\text{d}x &= 2x^2\\ln(2x) - \\int 2x^2\\left(\\dfrac{1}{x}\\right) \\text{d}x \\ &= 2x^2\\ln(2x) - \\int 2x \\text{d}x \\ &= 2x^2\\ln(2x) - x^2 \\end{aligned}$$<br>Evaluating this from $x = \\dfrac{1}{2}$ to $x = \\dfrac{1}{2}e$:<br>$$\\begin{aligned} A_1 &= \\left( 2\\left(\\dfrac{e}{2}\\right)^2\\ln e - \\left(\\dfrac{e}{2}\\right)^2 \\right) - \\left( 2\\left(\\dfrac{1}{2}\\right)^2\\ln 1 - \\left(\\dfrac{1}{2}\\right)^2 \\right) \\ &= \\left( \\dfrac{e^2}{2} - \\dfrac{e^2}{4} \\right) - \\left( 0 - \\dfrac{1}{4} \\right) \\ &= \\dfrac{e^2}{4} + \\dfrac{1}{4} \\end{aligned}$$",
            "Evaluate $A_2 = \\int_{e/2}^{33e/2} \\left( -\\dfrac{1}{8}x + \\dfrac{33e}{16} \\right) \\text{d}x$. Since this region is a right-angled triangle with base $\\dfrac{33e}{2} - \\dfrac{e}{2} = 16e$ and height $2e$:<br>$$A_2 = \\dfrac{1}{2} \\times 16e \\times 2e = 16e^2$$<br>Summing the two areas gives the final exact area:<br>$$\\begin{aligned} \\text{Area} &= A_1 + A_2 \\ &= \\left( \\dfrac{e^2}{4} + \\dfrac{1}{4} \\right) + 16e^2 \\ &= \\dfrac{65}{4}e^2 + \\dfrac{1}{4} \\end{aligned}$$<br><br>Final Answer: $$y = -\\dfrac{1}{8}x + \\dfrac{33e}{16}, \\quad \\text{Area} = \\dfrac{65}{4}e^2 + \\dfrac{1}{4}$$"
        ],
        "pi_options": [
            {
                "ans": "$$y = 8x - 2e, \\quad \\text{Area} = \\dfrac{65}{4}e^2 + \\dfrac{1}{4}$$",
                "feedback": "You used the tangent gradient of $8$ instead of the normal gradient. The normal is perpendicular to the tangent curve, meaning its gradient is $-\\dfrac{1}{8}$."
            },
            {
                "ans": "$$y = -\\dfrac{1}{8}x + \\dfrac{33e}{16}, \\quad \\text{Area} = \\dfrac{65}{4}e^2 - \\dfrac{1}{4}$$",
                "feedback": "Be careful when evaluating the lower limit $x = \\dfrac{1}{2}$ in your integration by parts. The expression evaluated at the lower limit is $2(1/2)^2\\ln 1 - (1/2)^2 = -1/4$. Since we subtract the lower limit, this becomes $-\\left(-\\dfrac{1}{4}\\right) = +\\dfrac{1}{4}$."
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
    },
    {
        "id": "004206",
        "board": "OCR",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Differential Equations",
        "subtopic": [
            "Separation of Variables",
            "Exponential Growth",
            "Proportionality Models"
        ],
        "img": false,
        "question": "A biologist is attempting to model the population of a yeast colony, $P$, at time $t$ hours. When $t = 0$ there are $100$ cells, and when $t = 2$ there are $150$ cells.<br><br>1. The biologist first assumes that the rate of increase of the yeast population is inversely proportional to the population size present at time $t$.<br>&nbsp;&nbsp;&nbsp;&nbsp;(a) Write down a differential equation to model this situation.<br>&nbsp;&nbsp;&nbsp;&nbsp;(b) Solve this differential equation to find $P$ in terms of $t$.<br>2. In a revised model, it is assumed that:<br>$$\\dfrac{\\text{d}P}{\\text{d}t} = \\dfrac{P^2}{300e^{0.5t}}$$<br>Solve this differential equation to find $P$ in terms of $t$, using the same initial population of $100$ cells at $t = 0$.<br>3. Compare the long-term behaviour of the two models.",
        "steps": [
            "Write the rate of increase as a differential equation representing inverse proportionality:<br>$$\\dfrac{\\text{d}P}{\\text{d}t} = \\dfrac{k}{P}$$<br>where $k > 0$ is a constant of proportionality.",
            "Solve the differential equation by separating the variables and integrating both sides:<br>$$\\begin{aligned} P \\,\\text{d}P &= k \\,\\text{d}t \\ \\int P \\,\\text{d}P &= \\int k \\,\\text{d}t \\ \\dfrac{1}{2}P^2 &= kt + C \\ P^2 &= 2kt + D \\end{aligned}$$<br>where $D = 2C$ is a constant of integration.",
            "Apply the boundary conditions to find the constant values $D$ and $2k$:<br>Substitute $t = 0, \\, P = 100$ into the equation:<br>$$\\begin{aligned} 100^2 &= 2k(0) + D \\ D &= 10000 \\end{aligned}$$<br>Now substitute $t = 2, \\, P = 150$ and $D = 10000$ to find $2k$:<br>$$\\begin{aligned} 150^2 &= 2k(2) + 10000 \\ 22500 &= 4k + 10000 \\ 4k &= 12500 \\ 2k &= 6250 \\end{aligned}$$<br>Substitute $2k = 6250$ and $D = 10000$ back into the solved equation and take the positive square root as $P \\ge 0$:<br>$$P(t) = \\sqrt{6250t + 10000}$$",
            "For the revised model, separate the variables and integrate both sides:<br>$$\\begin{aligned} \\dfrac{\\text{d}P}{\\text{d}t} &= \\dfrac{P^2}{300e^{0.5t}} \\ \\dfrac{1}{P^2} \\,\\text{d}P &= \\dfrac{1}{300}e^{-0.5t} \\,\\text{d}t \\ \\int P^{-2} \\,\\text{d}P &= \\int \\dfrac{1}{300}e^{-0.5t} \\,\\text{d}t \\ -\\dfrac{1}{P} &= -\\dfrac{1}{150}e^{-0.5t} + A \\end{aligned}$$",
            "Clean up the equation by multiplying both sides by $-1$:<br>$$\\dfrac{1}{P} = \\dfrac{1}{150}e^{-0.5t} + A'$$<br>where $A' = -A$. Substitute the initial condition $t = 0, \\, P = 100$ to find $A'$:<br>$$\\begin{aligned} \\dfrac{1}{100} &= \\dfrac{1}{150}e^{0} + A' \\ \\dfrac{1}{100} &= \\dfrac{1}{150} + A' \\ A' &= \\dfrac{1}{100} - \\dfrac{1}{150} = \\dfrac{1}{300} \\end{aligned}$$<br>Combine the fractions and solve for $P$:<br>$$\\begin{aligned} \\dfrac{1}{P} &= \\dfrac{1}{150}e^{-0.5t} + \\dfrac{1}{300} \\ \\dfrac{1}{P} &= \\dfrac{2e^{-0.5t} + 1}{300} \\ P(t) &= \\dfrac{300}{2e^{-0.5t} + 1} \\end{aligned}$$",
            "Evaluate and compare the long-term behaviour as $t \\to \\infty$:<br>For the first model:<br>$$\\text{As } t \\to \\infty, \\quad P(t) = \\sqrt{6250t + 10000} \\to \\infty$$<br>For the revised model:<br>$$\\text{As } t \\to \\infty, \\quad e^{-0.5t} \\to 0 \\implies P(t) \\to \\dfrac{300}{1} = 300$$<br>The first model predicts unbounded growth, while the revised model predicts the population will level off and saturate at $300$ cells.<br><br>Final Answer: $$P(t) = \\sqrt{6250t + 10000}, \\quad P(t) = \\dfrac{300}{2e^{-0.5t} + 1}$$"
        ],
        "pi_options": [
            {
                "ans": "$$P(t) = \\sqrt{6250t + 10000}, \\quad P(t) = \\dfrac{300}{e^{-0.5t} + 2}$$",
                "feedback": "You may have made an integration error on the exponential term. The integral of $\\dfrac{1}{300}e^{-0.5t}$ is $-\\dfrac{1}{150}e^{-0.5t}$, not $-\\dfrac{1}{300}e^{-0.5t}$."
            },
            {
                "ans": "$$P(t) = \\sqrt{6250t + 10000}, \\quad P(t) = \\dfrac{300}{2e^{-0.5t} - 1}$$",
                "feedback": "Check the sign of your constant of integration. Substituting $P = 100$ at $t = 0$ gives $\\dfrac{1}{100} = \\dfrac{1}{150} + A'$, which yields $A' = +\\dfrac{1}{300}$, not $-\\dfrac{1}{300}$."
            },
            {
                "ans": "$$P(t) = 6250t + 10000, \\quad P(t) = \\dfrac{300}{2e^{-0.5t} + 1}$$",
                "feedback": "Don't forget to take the square root of both sides at the end of the first model. Since the solved equation is $P^2 = 6250t + 10000$, taking the square root yields $P(t) = \\sqrt{6250t + 10000}$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Proportionality Integration Steps",
            "content": "For standard separable differential equations of inverse proportionality (like $P \\,\\text{d}P = k \\,\\text{d}t$), always group the numeric multipliers with the linear constant $2k$ first. This avoids dragging fractions of $\\dfrac{1}{2}$ through the algebra and eliminates minor arithmetic slips when applying the boundary conditions."
        }
    },
    {
        "id": "004207",
        "board": "OCR",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Differential Equations",
        "subtopic": [
            "Separation of Variables",
            "Logarithmic Integration",
            "Medical Modelling"
        ],
        "img": false,
        "question": "A clinical researcher is studying the concentration of a newly administered drug in a patient's bloodstream. Let $x$ represent the concentration of the drug (in units/L) at time $t$ hours. Initially, when $t = 0$, the concentration is $x = 0$. After $1$ hour, the concentration is $2$ units/L.<br><br>1. The researcher first assumes that the rate of increase of the drug concentration is proportional to the difference between a maximum saturation level of $10$ units/L and the current concentration $x$.<br>&nbsp;&nbsp;&nbsp;&nbsp;(a) Write down a differential equation to model this situation.<br>&nbsp;&nbsp;&nbsp;&nbsp;(b) Solve this differential equation to find $x$ in terms of $t$.<br>2. In a revised model, it is assumed that:<br>$$\\dfrac{\\text{d}x}{\\text{d}t} = \\dfrac{3(10 - x)^2}{100(t + 1)}$$<br>Solve this differential equation to find $x$ in terms of $t$, using the same initial condition of $x = 0$ at $t = 0$.<br>3. Compare the long-term behaviour of the two models as $t \\to \\infty$.",
        "steps": [
            "Write the rate of increase for the first model as a differential equation:<br>$$\\dfrac{\\text{d}x}{\\text{d}t} = k(10 - x)$$<br>where $k > 0$ is a constant of proportionality.",
            "Solve the differential equation by separating the variables and integrating both sides:<br>$$\\begin{aligned} \\dfrac{1}{10 - x} \\,\\text{d}x &= k \\,\\text{d}t \\ \\int \\dfrac{1}{10 - x} \\,\\text{d}x &= \\int k \\,\\text{d}t \\ -\\ln(10 - x) &= kt + C \\ \\ln(10 - x) &= -kt - C \\ 10 - x &= Ae^{-kt} \\end{aligned}$$<br>where $A = e^{-C}$ is a constant of integration.",
            "Apply the boundary conditions to find the values of $A$ and $k$:<br>Substitute $t = 0, \\, x = 0$ into the equation:<br>$$\\begin{aligned} 10 - 0 &= Ae^{0} \\ A &= 10 \\end{aligned}$$<br>This gives $x(t) = 10\\left(1 - e^{-kt}\\right)$. Now substitute $t = 1, \\, x = 2$ to find $k$:<br>$$\\begin{aligned} 2 &= 10\\left(1 - e^{-k}\\right) \\ 0.2 &= 1 - e^{-k} \\ e^{-k} &= 0.8 \\ -k &= \\ln 0.8 \\ k &= -\\ln 0.8 \\end{aligned}$$<br>Substituting $e^{-kt} = (e^{-k})^t = 0.8^t$ yields:<br>$$x(t) = 10\\left(1 - 0.8^t\\right)$$",
            "For the revised model, separate the variables and integrate both sides:<br>$$\\begin{aligned} \\dfrac{\\text{d}x}{\\text{d}t} &= \\dfrac{3(10 - x)^2}{100(t + 1)} \\ \\dfrac{1}{(10 - x)^2} \\,\\text{d}x &= \\dfrac{3}{100(t + 1)} \\,\\text{d}t \\ \\int (10 - x)^{-2} \\,\\text{d}x &= \\int \\dfrac{3}{100(t + 1)} \\,\\text{d}t \\ \\dfrac{1}{10 - x} &= \\dfrac{3}{100}\\ln(t + 1) + C' \\end{aligned}$$",
            "Apply the initial condition $t = 0, \\, x = 0$ to find $C'$:<br>$$\\begin{aligned} \\dfrac{1}{10 - 0} &= \\dfrac{3}{100}\\ln(1) + C' \\ \\dfrac{1}{10} &= 0 + C' \\ C' &= \\dfrac{1}{10} \\end{aligned}$$<br>Now substitute $C' = \\dfrac{1}{10}$ back and isolate $x$:<br>$$\\begin{aligned} \\dfrac{1}{10 - x} &= \\dfrac{3}{100}\\ln(t + 1) + \\dfrac{1}{10} \\ \\dfrac{1}{10 - x} &= \\dfrac{3\\ln(t + 1) + 10}{100} \\ 10 - x &= \\dfrac{100}{3\\ln(t + 1) + 10} \\ x(t) &= 10 - \\dfrac{100}{3\\ln(t + 1) + 10} \\end{aligned}$$",
            "Analyze the long-term behaviour as $t \\to \\infty$:<br>For the first model:<br>$$\\text{As } t \\to \\infty, \\quad 0.8^t \\to 0 \\implies x(t) \\to 10\\left(1 - 0\\right) = 10$$<br>For the revised model:<br>$$\\text{As } t \\to \\infty, \\quad \\ln(t + 1) \\to \\infty \\implies \\dfrac{100}{3\\ln(t + 1) + 10} \\to 0 \\implies x(t) \\to 10$$<br>Both models predict that the concentration will saturate at a limit of $10$ units/L. However, the first model approaches this limit much faster (exponential decay of the remaining concentration gap) compared to the slow logarithmic decay of the revised model.<br><br>Final Answer: $$x(t) = 10\\left(1 - 0.8^t\\right), \\quad x(t) = 10 - \\dfrac{100}{3\\ln(t + 1) + 10}$$"
        ],
        "pi_options": [
            {
                "ans": "$$x(t) = 10\\left(1 - 0.8^t\\right), \\quad x(t) = 10 - \\dfrac{100}{3\\ln(t + 1) - 10}$$",
                "feedback": "Check the sign of your constant of integration $C'$. Substituting the boundary condition $t = 0, \\, x = 0$ into the expression $\\dfrac{1}{10 - x} = \\dfrac{3}{100}\\ln(t + 1) + C'$ yields $C' = +\\dfrac{1}{10}$, not $-\\dfrac{1}{10}$."
            },
            {
                "ans": "$$x(t) = 10\\left(1 - 0.8^t\\right), \\quad x(t) = 10 + \\dfrac{100}{3\\ln(t + 1) + 10}$$",
                "feedback": "Double check your algebraic rearrangements when isolating $x$. Since $10 - x = \\dfrac{100}{3\\ln(t + 1) + 10}$, subtracting $10$ and multiplying by $-1$ results in subtracting the fraction from $10$, not adding it."
            },
            {
                "ans": "$$x(t) = 10\\left(1 - 0.2^t\\right), \\quad x(t) = 10 - \\dfrac{100}{3\\ln(t + 1) + 10}$$",
                "feedback": "Check your exponential growth base in the first model. Since $e^{-k} = 0.8$, the function should contain $0.8^t$. It seems you may have mistakenly written $1 - e^{-k} = 0.2$ as the base itself."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Watch Your Signs in Log Integrals",
            "content": "A very common error in GCE examinations is forgetting to apply the chain rule when integrating reciprocal linear functions. Integrating $\\int \\dfrac{1}{10 - x} \\,\\text{d}x$ must result in $-\\ln(10 - x) + C$. Forgetting this negative sign completely skews the exponential growth behaviour of the concentration."
        }
    },
    {
        "id": "004208",
        "board": "OCR",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Differential Equations",
        "subtopic": [
            "Newton's Law of Cooling",
            "Separation of Variables",
            "Fractional Calculus"
        ],
        "img": false,
        "question": "A liquid is cooling in a temperature-controlled laboratory. Let $\\theta$ be the temperature of the liquid in $^\\circ\\text{C}$ at time $t$ minutes. The ambient room temperature is kept constant at $20^\\circ\\text{C}$. At $t = 0$, the liquid is at $84^\\circ\\text{C}$, and at $t = 10$ minutes, it has cooled to $52^\\circ\\text{C}$.<br><br>1. A classic model assumes that the rate of decrease of the liquid's temperature is proportional to the difference between its current temperature $\\theta$ and the ambient room temperature.<br>&nbsp;&nbsp;&nbsp;&nbsp;(a) Write down a differential equation to model this situation.<br>&nbsp;&nbsp;&nbsp;&nbsp;(b) Solve this differential equation to find $\\theta$ in terms of $t$.<br>2. In a revised model, the rate of cooling is assumed to be governed by:<br>$$\\dfrac{\\text{d}\\theta}{\\text{d}t} = -\\dfrac{(\\theta - 20)^{3/2}}{30\\sqrt{t + 4}}$$<br>Solve this differential equation to find $\\theta$ in terms of $t$, using the same initial temperature of $84^\\circ\\text{C}$ at $t = 0$.<br>3. State, with a brief reason, what both models predict about the temperature of the liquid in the long term.",
        "steps": [
            "Represent Newton's Law of Cooling as a differential equation, writing the rate of decrease as a negative rate of change:<br>$$\\dfrac{\\text{d}\\theta}{\\text{d}t} = -k(\\theta - 20)$$<br>where $k > 0$ is a constant of proportionality.",
            "Separate the variables and integrate to solve the equation:<br>$$\\begin{aligned} \\dfrac{1}{\\theta - 20} \\,\\text{d}\\theta &= -k \\,\\text{d}t \\ \\int \\dfrac{1}{\\theta - 20} \\,\\text{d}\\theta &= \\int -k \\,\\text{d}t \\ \\ln(\\theta - 20) &= -kt + C \\ \\theta - 20 &= Ae^{-kt} \\ \\theta(t) &= 20 + Ae^{-kt} \\end{aligned}$$",
            "Apply the initial conditions to find the constants $A$ and $k$:<br>Substitute $t = 0, \\, \\theta = 84$:<br>$$\\begin{aligned} 84 &= 20 + Ae^{0} \\ A &= 64 \\end{aligned}$$<br>This gives $\\theta(t) = 20 + 64e^{-kt}$. Substitute $t = 10, \\, \\theta = 52$:<br>$$\\begin{aligned} 52 &= 20 + 64e^{-10k} \\ 32 &= 64e^{-10k} \\ e^{-10k} &= 0.5 \\ -10k &= \\ln 0.5 \\ k &= \\dfrac{\\ln 2}{10} \\end{aligned}$$<br>Substituting $e^{-kt} = (e^{-10k})^{t/10} = 0.5^{t/10} = 2^{-t/10}$ yields:<br>$$\\theta(t) = 20 + 64\\cdot 2^{-t/10}$$",
            "For the revised model, separate variables and integrate:<br>$$\\begin{aligned} \\dfrac{\\text{d}\\theta}{\\text{d}t} &= -\\dfrac{(\\theta - 20)^{3/2}}{30\\sqrt{t + 4}} \\ (\\theta - 20)^{-3/2} \\,\\text{d}\\theta &= -\\dfrac{1}{30}(t + 4)^{-1/2} \\,\\text{d}t \\ \\int (\\theta - 20)^{-3/2} \\,\\text{d}\\theta &= -\\dfrac{1}{30}\\int (t + 4)^{-1/2} \\,\\text{d}t \\ -2(\\theta - 20)^{-1/2} &= -\\dfrac{1}{30}\\left(2\\sqrt{t + 4}\\right) + C \\ 2(\\theta - 20)^{-1/2} &= \\dfrac{1}{15}\\sqrt{t + 4} - C \\end{aligned}$$",
            "Multiply both sides by $\\dfrac{1}{2}$ to simplify:<br>$$(\\theta - 20)^{-1/2} = \\dfrac{1}{30}\\sqrt{t + 4} + C'$$<br>where $C' = -\\dfrac{1}{2}C$. Use the initial condition $t = 0, \\, \\theta = 84$ to find $C'$:<br>$$\\begin{aligned} (84 - 20)^{-1/2} &= \\dfrac{1}{30}\\sqrt{0 + 4} + C' \\ 64^{-1/2} &= \\dfrac{1}{30}(2) + C' \\ \\dfrac{1}{8} &= \\dfrac{1}{15} + C' \\ C' &= \\dfrac{1}{8} - \\dfrac{1}{15} = \\dfrac{15 - 8}{120} = \\dfrac{7}{120} \\end{aligned}$$",
            "Substitute $C'$ and isolate $\\theta$:<br>$$\\begin{aligned} (\\theta - 20)^{-1/2} &= \\dfrac{1}{30}\\sqrt{t + 4} + \\dfrac{7}{120} \\ \\theta(t) - 20 &= \\left( \\dfrac{1}{30}\\sqrt{t + 4} + \\dfrac{7}{120} \\right)^{-2} \\ \\theta(t) &= 20 + \\left( \\dfrac{1}{30}\\sqrt{t + 4} + \\dfrac{7}{120} \\right)^{-2} \n\\end{aligned}$$",
            "Examine the long-term behaviour as $t \\to \\infty$:<br>For the first model:<br>$$\\text{As } t \\to \\infty, \\quad 2^{-t/10} \\to 0 \\implies \\theta(t) \\to 20 + 0 = 20$$<br>For the revised model:<br>$$\\text{As } t \\to \\infty, \\quad \\sqrt{t + 4} \\to \\infty \\implies \\left( \\dfrac{1}{30}\\sqrt{t + 4} + \\dfrac{7}{120} \\right)^{-2} \\to 0 \\implies \\theta(t) \\to 20 + 0 = 20$$<br>Both models predict that the liquid will cool down to approach the room temperature of $20^\\circ\\text{C}$ in the long term, and neither model projects that the temperature will fall below this ambient level.<br><br>Final Answer: $$\\theta(t) = 20 + 64\\cdot 2^{-t/10}, \\quad \\theta(t) = 20 + \\left( \\dfrac{1}{30}\\sqrt{t + 4} + \\dfrac{7}{120} \\right)^{-2}$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\theta(t) = 20 + 64\\cdot 2^{-t/10}, \\quad \\theta(t) = 20 + \\left( \\dfrac{1}{30}\\sqrt{t + 4} + \\dfrac{1}{15} \\right)^{-2}$$",
                "feedback": "Check your calculation for $C'$. When substituting $t = 0, \\, \\theta = 84$, the equation is $\\dfrac{1}{8} = \\dfrac{1}{15} + C'$. This yields $C' = \\dfrac{1}{8} - \\dfrac{1}{15} = \\dfrac{7}{120}$, not $\\dfrac{1}{15}$."
            },
            {
                "ans": "$$\\theta(t) = 20 + 64\\cdot 2^{-t/10}, \\quad \\theta(t) = 20 + \\left( \\dfrac{1}{30}\\sqrt{t + 4} + \\dfrac{7}{120} \\right)^{2}$$",
                "feedback": "Note the sign of your power when isolating the expression. Since $(\\theta - 20)^{-1/2} = X$, taking the reciprocal of the square of both sides gives $\\theta - 20 = X^{-2}$, not $X^2$."
            },
            {
                "ans": "$$\\theta(t) = 20 + 84\\cdot 2^{-t/10}, \\quad \\theta(t) = 20 + \\left( \\dfrac{1}{30}\\sqrt{t + 4} + \\dfrac{7}{120} \\right)^{-2}$$",
                "feedback": "Make sure you subtract the ambient temperature of $20$ before solving for the multiplier $A$. At $t = 0$, $84 = 20 + A \\implies A = 64$, not $84$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Fractional Integration Tricks",
            "content": "When integrating powers of functions like $\\int (\\theta - 20)^{-3/2} \\,\\text{d}\\theta$, be very precise with the fractional arithmetic. Increasing the power by $1$ gives a new power of $-1/2$. Dividing by this new power introduces a multiplier of $-2$, which must be handled cleanly before applying any substitutions."
        }
    },
    {
        "id": "004209",
        "board": "OCR",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Differential Equations",
        "subtopic": [
            "Separation of Variables",
            "Linear First Order",
            "Financial Modelling"
        ],
        "img": false,
        "question": "An investor establishes a retirement fund. Let $V$ represent the value of the fund (in thousands of pounds) at time $t$ years. Initially, when $t = 0$, the fund has a value of $V = 10$. After $5$ years, the value of the fund is $V = 20$.<br><br>1. A simple model assumes that the rate of increase of the fund's value is directly proportional to its current value.<br>&nbsp;&nbsp;&nbsp;&nbsp;(a) Write down a differential equation to model this situation.<br>&nbsp;&nbsp;&nbsp;&nbsp;(b) Solve this differential equation to find $V$ in terms of $t$.<br>2. In a revised model, the investor makes continuous annual withdrawals, and the rate of change of the fund's value is given by:<br>$$\\dfrac{\\text{d}V}{\\text{d}t} = 0.1V - 2$$<br>Solve this differential equation to find $V$ in terms of $t$, using the same initial value of $V = 10$ at $t = 0$.<br>3. Compare the long-term behaviour predicted by the two models. Determine the exact time at which the fund is projected to run out under the revised model.",
        "steps": [
            "Represent the rate of change for direct proportionality as a differential equation:<br>$$\\dfrac{\\text{d}V}{\\text{d}t} = kV$$<br>where $k > 0$ is a constant of proportionality.",
            "Integrate the separable differential equation:<br>$$\\begin{aligned} \\int \\dfrac{1}{V} \\,\\text{d}V &= \\int k \\,\\text{d}t \\ \\ln V &= kt + C \\ V(t) &= Ae^{kt} \\end{aligned}$$<br>where $A = e^C$. Substitute the boundary conditions:<br>Substitute $t = 0, \\, V = 10 \\implies A = 10$.<br>Now substitute $t = 5, \\, V = 20$ into $V(t) = 10e^{kt}$:<br>$$\\begin{aligned} 20 &= 10e^{5k} \\ 2 &= e^{5k} \\ 5k &= \\ln 2 \\ k &= \\dfrac{\\ln 2}{5} \\end{aligned}$$<br>Substituting $k$ back into the model gives:<br>$$V(t) = 10e^{\\frac{\\ln 2}{5}t} = 10\\cdot 2^{t/5}$$",
            "For the revised model, separate variables and integrate:<br>$$\\begin{aligned} \\dfrac{\\text{d}V}{\\text{d}t} &= 0.1V - 2 \\ \\dfrac{1}{0.1V - 2} \\,\\text{d}V &= \\text{d}t \\ \\int \\dfrac{1}{0.1V - 2} \\,\\text{d}V &= \\int \\text{d}t \\ 10\\ln|0.1V - 2| &= t + C' \\end{aligned}$$",
            "Solve for $V(t)$:<br>$$\\begin{aligned} \\ln|0.1V - 2| &= 0.1t + 0.1C' \\ 0.1V - 2 &= Be^{0.1t} \\ 0.1V &= 2 + Be^{0.1t} \\ V(t) &= 20 + A'e^{0.1t} \\end{aligned}$$<br>where $A' = 10B$. Substitute the initial condition $t = 0, \\, V = 10$ to find $A'$:<br>$$\\begin{aligned} 10 &= 20 + A'e^{0} \\ A' &= -10 \\end{aligned}$$<br>So the value of the fund under the revised model is:<br>$$V(t) = 20 - 10e^{0.1t}$$",
            "Compare the long-term behaviour and find the depletion point:<br>For the first model, $V(t) = 10\\cdot 2^{t/5} \\to \\infty$ as $t \\to \\infty$, representing unbounded compound growth.<br>For the revised model, $V(t) = 20 - 10e^{0.1t}$ eventually decreases because the withdrawal term exceeds the growth term. The fund is exhausted when $V(t) = 0$:<br>$$\\begin{aligned} 20 - 10e^{0.1t} &= 0 \\ 10e^{0.1t} &= 20 \\ e^{0.1t} &= 2 \\ 0.1t &= \\ln 2 \\ t &= 10\\ln 2 \\end{aligned}$$<br>The fund runs out after exactly $10\\ln 2$ years (approximately $6.93$ years).<br><br>Final Answer: $$V(t) = 10\\cdot 2^{t/5}, \\quad V(t) = 20 - 10e^{0.1t}, \\quad t = 10\\ln 2 \\text{ years}$$"
        ],
        "pi_options": [
            {
                "ans": "$$V(t) = 10\\cdot 2^{t/5}, \\quad V(t) = 20 - 10e^{0.1t}, \\quad t = 5\\ln 2 \\text{ years}$$",
                "feedback": "Check the final coefficient when solving for depletion time. The equation is $0.1t = \\ln 2$, which means $t = 10\\ln 2$ years, not $5\\ln 2$ years."
            },
            {
                "ans": "$$V(t) = 10\\cdot 2^{t/5}, \\quad V(t) = 20 + 10e^{0.1t}, \\quad t = 10\\ln 2 \\text{ years}$$",
                "feedback": "Check the sign of your constant of integration. Since the initial value is $V = 10$ and $V(t) = 20 + A'e^{0.1t}$, substituting $t = 0$ gives $10 = 20 + A' \\implies A' = -10$, not $+10$."
            },
            {
                "ans": "$$V(t) = 10\\cdot 2^{t/5}, \\quad V(t) = 20 - 10e^{t}, \\quad t = \\ln 2 \\text{ years}$$",
                "feedback": "Be careful when integrating $\\int \\dfrac{1}{0.1V - 2} \\,\\text{d}V$. Because of the linear coefficient of $0.1$, the integral is $10\\ln|0.1V - 2|$, which introduces the $0.1$ exponent factor in the exponential, not $1$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Watch Linear coefficients",
            "content": "When integrating reciprocal linear expressions of the form $\\int \\dfrac{1}{aV - b} \\,\\text{d}V$, always remember the factor of $\\dfrac{1}{a}$ that arises from reversing the chain rule. Omitting this multiplier leads to incorrect scale factors in the exponential exponent during subsequent rearrangements."
        }
    },
    {
        "id": "004210",
        "board": "OCR",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Differential Equations",
        "subtopic": [
            "Separation of Variables",
            "Logistic Growth",
            "Partial Fractions"
        ],
        "img": false,
        "question": "An environmental scientist is monitoring a bird population, $B$, on an isolated island. When monitoring begins at $t = 0$, there are $100$ birds, and at $t = 1$ year, there are $150$ birds.<br><br>1. A simple geometric model assumes that the rate of increase of the bird population is directly proportional to the number of birds present.<br>&nbsp;&nbsp;&nbsp;&nbsp;(a) Write down a differential equation to model this situation.<br>&nbsp;&nbsp;&nbsp;&nbsp;(b) Solve this differential equation to find $B$ in terms of $t$.<br>2. A more realistic logistic model assumes that the island has a maximum carrying capacity of $500$ birds, and that the rate of growth is modeled by the differential equation:<br>$$\\dfrac{\\text{d}B}{\\text{d}t} = \\dfrac{B(500 - B)}{2000}$$<br>Solve this differential equation to find $B$ in terms of $t$, using the same initial population of $100$ birds at $t = 0$.<br>3. Compare the long-term behaviour predicted by the two models as $t \\to \\infty$.",
        "steps": [
            "Represent exponential growth as a differential equation:<br>$$\\dfrac{\\text{d}B}{\\text{d}t} = kB$$<br>where $k > 0$ is a constant of proportionality.",
            "Solve by separating the variables and integrating both sides:<br>$$\\begin{aligned} \\int \\dfrac{1}{B} \\,\\text{d}B &= \\int k \\,\\text{d}t \\ \\ln B &= kt + C \\ B(t) &= Ae^{kt} \\end{aligned}$$<br>where $A = e^C$. Substitute $t = 0, \\, B = 100 \\implies A = 100$.<br>Substitute $t = 1, \\, B = 150$ into $B(t) = 100e^{kt}$:<br>$$\\begin{aligned} 150 &= 100e^{k} \\ e^k &= 1.5 \\ k &= \\ln 1.5 \\end{aligned}$$<br>So the first model is:<br>$$B(t) = 100e^{(\\ln 1.5)t} = 100\\cdot 1.5^t$$",
            "For the logistic model, separate the variables:<br>$$\\dfrac{1}{B(500 - B)} \\,\\text{d}B = \\dfrac{1}{2000} \\,\\text{d}t$$<br>Decompose the left-hand fraction using partial fractions:<br>$$\\dfrac{1}{B(500 - B)} = \\dfrac{X}{B} + \\dfrac{Y}{500 - B} \\implies 1 = X(500 - B) + YB$$<br>By substituting $B = 0 \\implies X = \\dfrac{1}{500}$, and $B = 500 \\implies Y = \\dfrac{1}{500}$.<br>So the decomposed expression is:<br>$$\\dfrac{1}{B(500 - B)} = \\dfrac{1}{500}\\left( \\dfrac{1}{B} + \\dfrac{1}{500 - B} \\right)$$,",
            "Integrate both sides using the partial fraction decomposition:<br>$$\\begin{aligned} \\dfrac{1}{500} \\int \\left( \\dfrac{1}{B} + \\dfrac{1}{500 - B} \\right) \\,\\text{d}B &= \\int \\dfrac{1}{2000} \\,\\text{d}t \\ \\dfrac{1}{500}\\left( \\ln|B| - \\ln|500 - B| \\right) &= \\dfrac{t}{2000} + C_1 \\ \\ln\\left( \\dfrac{B}{500 - B} \\right) &= \\dfrac{t}{4} + C' \\end{aligned}$$<br>where $C' = 500C_1$. Taking exponentials of both sides:<br>$$\\dfrac{B}{500 - B} = Ke^{t/4}$$",
            "Substitute the initial condition $t = 0, \\, B = 100$ to find $K$:<br>$$\\begin{aligned} \\dfrac{100}{500 - 100} &= Ke^{0} \\ \\dfrac{100}{400} &= K \\ K &= \\dfrac{1}{4} \\end{aligned}$$<br>This gives:<br>$$\\dfrac{B}{500 - B} = \\dfrac{1}{4}e^{t/4}$$",
            "Rearrange to isolate $B(t)$:<br>$$\\begin{aligned} B &= (500 - B)\\left(\\dfrac{1}{4}e^{t/4}\\right) \\ B &= 125e^{t/4} - \\dfrac{1}{4}Be^{t/4} \\ B\\left(1 + \\dfrac{1}{4}e^{t/4}\\right) &= 125e^{t/4} \\ B(t) &= \\dfrac{125e^{t/4}}{1 + \\dfrac{1}{4}e^{t/4}} \\ B(t) &= \\dfrac{500e^{t/4}}{4 + e^{t/4}} \\end{aligned}$$",
            "Examine the long-term behaviour as $t \\to \\infty$:<br>For the simple geometric model, $B(t) = 100\\cdot 1.5^t \\to \\infty$, which predicts unbounded population expansion.<br>For the logistic model, divide numerator and denominator by $e^{t/4}$:<br>$$B(t) = \\dfrac{500}{4e^{-t/4} + 1}$$<br>As $t \\to \\infty, \\, e^{-t/4} \\to 0$. Therefore:<br>$$B(t) \\to \\dfrac{500}{0 + 1} = 500$$<br>The simple model assumes infinite growth, whereas the logistic model predicts the population is bounded and will level off at the carrying capacity of $500$ birds.<br><br>Final Answer: $$B(t) = 100\\cdot 1.5^t, \\quad B(t) = \\dfrac{500e^{t/4}}{4 + e^{t/4}}$$"
        ],
        "pi_options": [
            {
                "ans": "$$B(t) = 100\\cdot 1.5^t, \\quad B(t) = \\dfrac{500e^{t/4}}{4 - e^{t/4}}$$",
                "feedback": "Be careful with signs during your algebraic isolation steps. Rearranging $B\\left(1 + \\dfrac{1}{4}e^{t/4}\\right) = 125e^{t/4}$ leads to addition in the denominator: $B(t) = \\dfrac{500e^{t/4}}{4 + e^{t/4}}$, not subtraction."
            },
            {
                "ans": "$$B(t) = 100\\cdot 1.5^t, \\quad B(t) = \\dfrac{125e^{t/4}}{4 + e^{t/4}}$$",
                "feedback": "Check your scaling factor when multiplying numerator and denominator by $4$. The numerator $125e^{t/4}$ multiplied by $4$ becomes $500e^{t/4}$, not $125e^{t/4}$."
            },
            {
                "ans": "$$B(t) = 100\\cdot 1.5^t, \\quad B(t) = \\dfrac{500}{e^{-t/4} + 4}$$",
                "feedback": "Check your division steps when evaluating limits. Dividing the numerator and denominator of $\\dfrac{500e^{t/4}}{4 + e^{t/4}}$ by $e^{t/4}$ yields $\\dfrac{500}{4e^{-t/4} + 1}$, not $\\dfrac{500}{e^{-t/4} + 4}$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Master Partial Fractions in ODEs",
            "content": "For logistic growth differential equations, decomposing the expression using partial fractions is a staple GCE topic. Always remember to divide by the carrying capacity multiplier (such as $500$) outside of the logarithmic brackets. Forgetting this coefficient causes incorrect constant values when applying initial conditions."
        }
    },
    {
        "id": "004211",
        "board": "OCR MEI",
        "level": "AS",
        "major_area": "Algebra",
        "topic": "Polynomials",
        "subtopic": [
            "The Factor Theorem",
            "Cubic Polynomials"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Show that $(x - 3)$ is a factor of:<br>$$2x^3 - 5x^2 - 4x + 3$$",
        "steps": [
            "Define the polynomial as a function $f(x)$:<br>$$f(x) = 2x^3 - 5x^2 - 4x + 3$$<br>According to the Factor Theorem, a linear term $(x - a)$ is a factor of a polynomial $f(x)$ if and only if $f(a) = 0$. Therefore, $(x - 3)$ is a factor if $f(3) = 0$.",
            "Substitute $x = 3$ into the polynomial and evaluate step-by-step:<br>$$\\begin{aligned} f(3) &= 2(3)^3 - 5(3)^2 - 4(3) + 3 \\ &= 2(27) - 5(9) - 12 + 3 \\ &= 54 - 45 - 12 + 3 \\ &= 9 - 12 + 3 \\ &= 0 \\end{aligned}$$",
            "Conclude the proof based on the result:<br>Since $f(3) = 0$, by the Factor Theorem, $(x - 3)$ is indeed a factor of $2x^3 - 5x^2 - 4x + 3$.<br><br>Final Answer: $$f(3) = 0 \\implies (x - 3) \\text{ is a factor}$$"
        ],
        "pi_options": [
            {
                "ans": "$$f(-3) = 0 \\implies (x - 3) \\text{ is a factor}$$",
                "feedback": "Be careful with the sign when using the Factor Theorem. For a factor of $(x - a)$, you must test the root $x = a$, which means evaluating $f(3)$, not $f(-3)$."
            },
            {
                "ans": "$$f(3) = 12 \\implies (x - 3) \\text{ is a factor}$$",
                "feedback": "For $(x - 3)$ to be a factor, evaluating the polynomial at $x = 3$ must result in exactly $0$. Any non-zero remainder means it is not a factor."
            },
            {
                "ans": "$$f(3) = 0 \\implies (x + 3) \\text{ is a factor}$$",
                "feedback": "The root $x = 3$ corresponds to the factor $(x - 3)$, not $(x + 3)$. If $f(-3) = 0$, then $(x + 3)$ would be a factor."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Root Signs in the Factor Theorem",
            "content": "A frequent error under pressure is substituting the wrong sign into the polynomial. Remember that the linear factor $(x - a)$ corresponds to the root $x = a$. For $(x - 3)$, always evaluate $f(3)$, whereas for $(x + 3)$, you would evaluate $f(-3)$."
        }
    },
    {
        "id": "004212",
        "board": "OCR MEI",
        "level": "AS",
        "major_area": "Algebra",
        "topic": "Polynomials",
        "subtopic": [
            "The Factor Theorem",
            "Finding Coefficients"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The polynomial $f(x)$ is defined by:<br>$$f(x) = 3x^3 + kx^2 - 4x + 12$$<br>where $k$ is a constant.<br><br>Given that $(x + 2)$ is a factor of $f(x)$, find the value of $k$.",
        "steps": [
            "According to the Factor Theorem, since $(x + 2)$ is a factor of $f(x)$, the polynomial evaluated at the root $x = -2$ must equal $0$. That is:<br>$$f(-2) = 0$$",
            "Substitute $x = -2$ into the expression for $f(x)$:<br>$$\\begin{aligned} f(-2) &= 3(-2)^3 + k(-2)^2 - 4(-2) + 12 \\ &= 3(-8) + 4k + 8 + 12 \\ &= -24 + 4k + 20 \\ &= 4k - 4 \\end{aligned}$$",
            "Set $f(-2)$ equal to $0$ and solve for the constant $k$:<br>$$\\begin{aligned} 4k - 4 &= 0 \\ 4k &= 4 \\ k &= 1 \\end{aligned}$$<br><br>Final Answer: $$k = 1$$"
        ],
        "pi_options": [
            {
                "ans": "$$k = -11$$",
                "feedback": "Check your evaluation of $(-2)^3$. It is $-8$, not $+8$. Using $+8$ gives $24 + 4k + 20 = 0 \\implies 4k = -44 \\implies k = -11$."
            },
            {
                "ans": "$$k = -1$$",
                "feedback": "Check your signs during the final solving steps. When setting $4k - 4 = 0$, adding $4$ to both sides gives $4k = 4$, which leads to $k = 1$, not $k = -1$."
            },
            {
                "ans": "$$k = -4$$",
                "feedback": "You may have evaluated $f(2) = 0$ instead of $f(-2) = 0$. Remember that for a factor of $(x + 2)$, the root to substitute is $x = -2$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Power of Negative Numbers",
            "content": "When evaluating cubic powers of negative numbers like $(-2)^3$, ensure you preserve the negative sign, giving $-8$. It is highly common to accidentally write positive values when substituting, leading to completely incorrect algebraic systems."
        }
    },
    {
    "id": "004213",
    "board": "OCR MEI",
    "level": "AS",
    "major_area": "Algebra",
    "topic": "Polynomials",
    "subtopic": [
        "Algebraic Division",
        "Polynomial Remainders"
    ],
    "img": false,
    "question": "In this question you must show detailed reasoning.<br><br>Find the remainder when the polynomial:<br>$$2x^3 - 3x^2 - 5x + 8$$<br>is divided by $(x - 2)$ using algebraic division.",
    "steps": [
        "To find the remainder, we perform polynomial division on $2x^3 - 3x^2 - 5x + 8$ using the divisor $(x - 2)$.<br><br>First, divide the leading term $2x^3$ by $x$ to get $2x^2$. Multiply $2x^2$ by the divisor $(x - 2)$:<br>$$2x^2(x - 2) = 2x^3 - 4x^2$$<br>Subtract this from the original polynomial to find the first partial remainder:<br>$$\\left(2x^3 - 3x^2 - 5x + 8\\right) - \\left(2x^3 - 4x^2\\right) = x^2 - 5x + 8$$",
        "Next, divide the leading term of the partial remainder, $x^2$, by $x$ to get $x$. Multiply $x$ by the divisor $(x - 2)$:<br>$$x(x - 2) = x^2 - 2x$$<br>Subtract this from the current partial remainder:<br>$$\\left(x^2 - 5x + 8\\right) - \\left(x^2 - 2x\\right) = -3x + 8$$",
        "Finally, divide the leading term of the new partial remainder, $-3x$, by $x$ to get $-3$. Multiply $-3$ by the divisor $(x - 2)$:<br>$$-3(x - 2) = -3x + 6$$<br>Subtract this to find the final numerical remainder:<br>$$\\left(-3x + 8\\right) - \\left(-3x + 6\\right) = 2$$<br><br>Final Answer: $$\\text{Remainder} = 2$$"
    ],
    "pi_options": [
        {
            "ans": "$$\\text{Remainder} = -30$$",
            "feedback": "Be very careful with your signs during subtraction at each step. For example, during the first subtraction, we compute $-3x^2 - (-4x^2)$, which is $-3x^2 + 4x^2 = x^2$. A sign error here will propagate through the remaining steps and yield an incorrect remainder."
        },
        {
            "ans": "$$\\text{Remainder} = 10$$",
            "feedback": "Check your final subtraction step. We have $(-3x + 8) - (-3x + 6)$. This evaluates to $8 - 6 = 2$, not $8 + 6 = 14$ or any other addition error."
        },
        {
            "ans": "$$\\text{Remainder} = 0$$",
            "feedback": "A remainder of $0$ would mean that $(x - 2)$ is a perfect factor of the polynomial. Double-check your subtraction steps; after dividing all terms, we are left with a constant remainder of $2$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Subtraction of Negatives",
        "content": "When performing algebraic long division, the single most common error is a sign slip during subtraction. Always write out the subtraction of negative terms explicitly (such as $-3x^2 - (-4x^2) = x^2$) to avoid making easy mental arithmetic mistakes."
    }
},
    {
        "id": "004214",
        "board": "OCR MEI",
        "level": "AS",
        "major_area": "Algebra",
        "topic": "Polynomials",
        "subtopic": [
            "The Factor Theorem",
            "Cubic Factorisation"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The cubic polynomial $f(x)$ is given by:<br>$$f(x) = 2x^3 - x^2 - 13x - 6$$<br>1. Use the Factor Theorem to show that $(x - 3)$ is a linear factor of $f(x)$.<br>2. Hence, express $f(x)$ as the product of three linear factors.",
        "steps": [
            "To prove that $(x - 3)$ is a factor of $f(x) = 2x^3 - x^2 - 13x - 6$, apply the Factor Theorem and evaluate $f(3)$:<br>$$\\begin{aligned} f(3) &= 2(3)^3 - (3)^2 - 13(3) - 6 \\ &= 2(27) - 9 - 39 - 6 \\ &= 54 - 9 - 39 - 6 \\ &= 0 \\end{aligned}$$<br>Since $f(3) = 0$, by the Factor Theorem, $(x - 3)$ is a linear factor of $f(x)$.",
            "Perform polynomial division or equate coefficients to divide $f(x)$ by $(x - 3)$ and find the quadratic quotient:<br>$$2x^3 - x^2 - 13x - 6 = (x - 3)(2x^2 + ax + 2)$$<br>Compare the $x^2$ coefficient on both sides:<br>$$\\begin{aligned} -1 &= -3(2) + a \\ -1 &= -6 + a \\ a &= 5 \\end{aligned}$$<br>So, the quadratic quotient is $2x^2 + 5x + 2$.",
            "Fully factorise the quadratic quotient $2x^2 + 5x + 2$ into two linear factors:<br>$$2x^2 + 5x + 2 = (2x + 1)(x + 2)$$<br>Combine all three factors to express $f(x)$ in its fully factorised form:<br>$$f(x) = (x - 3)(2x + 1)(x + 2)$$<br><br>Final Answer: $$f(x) = (x - 3)(2x + 1)(x + 2)$$"
        ],
        "pi_options": [
            {
                "ans": "$$f(x) = (x - 3)(2x - 1)(x - 2)$$",
                "feedback": "Check your quadratic factorization. Factoring the positive terms of $2x^2 + 5x + 2$ must yield $(2x + 1)(x + 2)$, not $(2x - 1)(x - 2)$."
            },
            {
                "ans": "$$f(x) = (x - 3)(2x^2 + 5x + 2)$$",
                "feedback": "The question asks you to express $f(x)$ as the product of 'three linear factors'. You must fully factorise the quadratic quotient $2x^2 + 5x + 2$ to complete the problem."
            },
            {
                "ans": "$$f(x) = (x + 3)(2x + 1)(x + 2)$$",
                "feedback": "Be careful with your signs. Since $f(3) = 0$, the corresponding factor is $(x - 3)$, not $(x + 3)$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Equating Coefficients over Long Division",
            "content": "For factorising cubic polynomials once a root is known, equating coefficients is much faster than running a full synthetic or polynomial division. Since $2x^3$ requires the lead quadratic term to be $2x^2$, and $-6$ requires the constant term to be $+2$ when divided by $-3$, you only need a single comparison to find the middle coefficient $a$."
        }
    },
    {
        "id": "004215",
        "board": "OCR MEI",
        "level": "AS",
        "major_area": "Algebra",
        "topic": "Polynomials",
        "subtopic": [
            "The Factor Theorem",
            "Simultaneous Equations"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The polynomial $f(x)$ is defined by:<br>$$f(x) = ax^3 + bx^2 - 11x - 6$$<br>where $a$ and $b$ are constants.<br><br>Given that both $(x - 2)$ and $(x + 3)$ are factors of $f(x)$, find the values of $a$ and $b$.",
        "steps": [
            "According to the Factor Theorem, because $(x - 2)$ and $(x + 3)$ are factors, evaluating $f(x)$ at their roots $x = 2$ and $x = -3$ must result in $0$:<br>$$f(2) = 0 \\quad \\text{and} \\quad f(-3) = 0$$",
            "Evaluate $f(2) = 0$ to set up the first equation:<br>$$\\begin{aligned} f(2) &= a(2)^3 + b(2)^2 - 11(2) - 6 \\ &= 8a + 4b - 22 - 6 \\ &= 8a + 4b - 28 \\end{aligned}$$<br>Setting this to $0$ and dividing by $4$ gives:<br>$$2a + b = 7 \\quad \\implies \\quad b = 7 - 2a \\quad \\text{--- (Equation 1)}$$",
            "Evaluate $f(-3) = 0$ to set up the second equation:<br>$$\\begin{aligned} f(-3) &= a(-3)^3 + b(-3)^2 - 11(-3) - 6 \\ &= -27a + 9b + 33 - 6 \\ &= -27a + 9b + 27 \\end{aligned}$$<br>Setting this to $0$ and dividing by $9$ gives:<br>$$-3a + b = -3 \\quad \\implies \\quad b = 3a - 3 \\quad \\text{--- (Equation 2)}$$",
            "Solve the simultaneous equations by equating the two expressions for $b$:<br>$$\\begin{aligned} 7 - 2a &= 3a - 3 \\ 10 &= 5a \\ a &= 2 \\end{aligned}$$",
            "Substitute $a = 2$ back into Equation 1 to find $b$:<br>$$\\begin{aligned} b &= 7 - 2(2) \\ b &= 3 \\end{aligned}$$<br><br>Final Answer: $$a = 2, \\quad b = 3$$"
        ],
        "pi_options": [
            {
                "ans": "$$a = -2, \\quad b = 11$$",
                "feedback": "You may have made a sign error when expanding $(-3)^3$. $(-3)^3 = -27$, not $+27$. This changes your second equation and leads to incorrect values for $a$ and $b$."
            },
            {
                "ans": "$$a = 3, \\quad b = 2$$",
                "feedback": "Double check your final substitution. Make sure you solve for $a$ first and substitute its value back to find $b$. It seems you may have reversed the values of $a$ and $b$."
            },
            {
                "ans": "$$a = 2, \\quad b = -3$$",
                "feedback": "Check your signs in Equation 1. Since $b = 7 - 2a$, substituting $a = 2$ yields $b = 7 - 4 = 3$, not $-3$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Simplifying Simultaneous Coefficients",
            "content": "When solving simultaneous equations from factor evaluations, always search for common factors to simplify the linear equations before equating or using elimination. Reducing $8a + 4b = 28$ directly to $2a + b = 7$ keeps the mental arithmetic simple and highly resistant to minor division errors."
        }
    },
    {
        "id": "004216",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Numerical Methods",
        "subtopic": [
            "Change of Sign",
            "Intervals of Roots"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>By considering a change of sign, show that the equation:<br>$$e^x - 4x^3 = 0$$<br>has a root, $\\alpha$, in the interval $[0.5, 1.0]$.",
        "steps": [
            "Define the equation as a function $f(x)$:<br>$$f(x) = e^x - 4x^3$$<br>According to the Change of Sign rule, if a continuous function $f(x)$ changes sign over an interval $[a, b]$, then there must be at least one root of the equation $f(x) = 0$ in the interval $a < x < b$.",
            "Evaluate the function at the lower boundary $x = 0.5$:<br>$$\\begin{aligned} f(0.5) &= e^{0.5} - 4(0.5)^3 \\ &\\approx 1.6487 - 4(0.125) \\ &\\approx 1.6487 - 0.5 \\ &= 1.1487 \\end{aligned}$$<br>Since $1.1487 > 0$, the function is positive at $x = 0.5$.",
            "Evaluate the function at the upper boundary $x = 1.0$:<br>$$\\begin{aligned} f(1.0) &= e^{1.0} - 4(1.0)^3 \\ &\\approx 2.7183 - 4 \\ &= -1.2817 \\end{aligned}$$<br>Since $-1.2817 < 0$, the function is negative at $x = 1.0$.",
            "Conclude based on the change of sign:<br>Since $f(x)$ is continuous on the interval $[0.5, 1.0]$, and there is a change of sign between $x = 0.5$ ($f(0.5) > 0$) and $x = 1.0$ ($f(1.0) < 0$), there must be a root $\\alpha$ in the interval $0.5 < \\alpha < 1.0$.<br><br>Final Answer: $$f(0.5) = 1.1487 > 0, \\quad f(1.0) = -1.2817 < 0 \\implies 0.5 < \\alpha < 1.0$$"
        ],
        "pi_options": [
            {
                "ans": "$$f(0.5) = -1.1487 < 0, \\quad f(1.0) = 1.2817 > 0 \\implies 0.5 < \\alpha < 1.0$$",
                "feedback": "Check your signs during the evaluation steps. Since $e^{0.5} \\approx 1.6487$ and $4(0.5)^3 = 0.5$, the value is $1.6487 - 0.5 = 1.1487$, which is positive. At $x = 1.0$, $e^{1.0} \\approx 2.7183 < 4$, which yields a negative result."
            },
            {
                "ans": "$$f(0.5) = 1.1487 > 0, \\quad f(1.0) = -1.2817 < 0 \\implies \\alpha = 0.5$$",
                "feedback": "The change of sign rule only shows that a root lies *between* the boundaries of the interval, $0.5 < \\alpha < 1.0$. It does not mean the root itself is equal to one of the boundaries."
            },
            {
                "ans": "$$f(0) = 1 > 0, \\quad f(1.0) = -1.2817 < 0 \\implies 0.5 < \\alpha < 1.0$$",
                "feedback": "While evaluating $f(0) = 1$ is mathematically correct, the question specifically asks to show that the root lies in the interval $[0.5, 1.0]$. You must use $x = 0.5$ as your lower bound rather than $x = 0$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Intermediate Value Theorem",
            "content": "To secure full marks in root-locating questions, you must explicitly state two criteria: first, that there is a change of sign between the boundary values, and second, that the function $f(x)$ is continuous over that interval."
        }
    },
    {
        "id": "004217",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Numerical Methods",
        "subtopic": [
            "Change of Sign",
            "Interval Bisection"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The equation $x^3 - 5x + 3 = 0$ has a real root, $\\alpha$, in the interval $[0.5, 1.0]$.<br><br>1. Show that $\\alpha$ lies in the interval $[0.6, 0.7]$.<br>2. By considering the sign of the function at a suitable boundary, show that the value of $\\alpha$ is $0.66$ correct to $2$ decimal places.",
        "steps": [
            "Define the function $f(x) = x^3 - 5x + 3$. To show that the root $\\alpha$ lies in the interval $[0.6, 0.7]$, evaluate $f(x)$ at the boundaries $x = 0.6$ and $x = 0.7$:<br>$$\\begin{aligned} f(0.6) &= 0.6^3 - 5(0.6) + 3 \\ &= 0.216 - 3 + 3 \\ &= 0.216 \\quad ( > 0 ) \\ f(0.7) &= 0.7^3 - 5(0.7) + 3 \\ &= 0.343 - 3.5 + 3 \\ &= -0.157 \\quad ( < 0 ) \\end{aligned}$$<br>Since $f(0.6) > 0$ and $f(0.7) < 0$, the change of sign confirms that $0.6 < \\alpha < 0.7$.",
            "To prove that the root is $0.66$ correct to $2$ decimal places, we must establish that it lies within the rounding boundary interval $[0.655, 0.665]$. Let's test the lower rounding boundary $x = 0.655$:<br>$$\\begin{aligned} f(0.655) &= 0.655^3 - 5(0.655) + 3 \\ &\\approx 0.2809 - 3.2750 + 3 \\ &= 0.0059 \\quad ( > 0 ) \\end{aligned}$$",
            "Now evaluate the function at the target value $x = 0.66$:<br>$$\\begin{aligned} f(0.66) &= 0.66^3 - 5(0.66) + 3 \\ &\\approx 0.2875 - 3.3000 + 3 \\ &= -0.0125 \\quad ( < 0 ) \\end{aligned}$$",
            "Conclude based on the sign change:<br>Since $f(0.655) > 0$ and $f(0.66) < 0$, the root $\\alpha$ must lie in the interval $0.655 < \\alpha < 0.66$. Because any value within this narrow interval rounds directly to $0.66$ to $2$ decimal places, the proof is complete.<br><br>Final Answer: $$0.655 < \\alpha < 0.66 \\implies \\alpha \\approx 0.66 \\text{ (to 2 d.p.)}$$"
        ],
        "pi_options": [
            {
                "ans": "$$0.65 < \\alpha < 0.66 \\implies \\alpha \\approx 0.66 \\text{ (to 2 d.p.)}$$",
                "feedback": "Testing $0.65$ is not sufficient to guarantee that the root rounds to $0.66$. Values between $0.65$ and $0.655$ round down to $0.65$. You must test the exact rounding boundary of $0.655$ to complete the proof."
            },
            {
                "ans": "$$f(0.6) = -0.216, \\quad f(0.7) = 0.157 \\implies 0.6 < \\alpha < 0.7$$",
                "feedback": "Check your evaluations. Since $0.6^3 = 0.216$ and $-5(0.6) + 3 = 0$, $f(0.6) = 0.216$, which is positive. At $x = 0.7$, $f(0.7) = -0.157$, which is negative."
            },
            {
                "ans": "$$0.66 < \\alpha < 0.665 \\implies \\alpha \\approx 0.66 \\text{ (to 2 d.p.)}$$",
                "feedback": "While values in this interval do round to $0.66$, your evaluation showed $f(0.66) < 0$ and $f(0.655) > 0$. This confirms the root is in the interval $0.655 < \\alpha < 0.66$, not above $0.66$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Root Rounding Boundaries",
            "content": "When an exam asks you to show a root is equal to a value to $d$ decimal places, do not just evaluate the rounded values. You must always test the midpoints of the rounding boundaries (i.e., ending in $5$ at the next decimal place) to prove the root is trapped within the correct rounding region."
        }
    },
    {
        "id": "004218",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Numerical Methods",
        "subtopic": [
            "Fixed-Point Iteration",
            "Rearranging Equations"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The equation $x^3 - 3x - 1 = 0$ has a root, $\\alpha$, in the interval $[1.5, 2.0]$.<br><br>1. Show that the equation can be rearranged into the iterative formula:<br>$$x_{n+1} = \\sqrt{3 + \\dfrac{1}{x_n}}$$<br>2. Using this iterative formula with a starting value of $x_1 = 1.8$, find the values of $x_2$, $x_3$, and $x_4$, giving your answers to $4$ decimal places.",
        "steps": [
            "Rearrange the equation $x^3 - 3x - 1 = 0$ to isolate $x$ on one side:<br>$$\\begin{aligned} x^3 &= 3x + 1 \\ x^2 &= 3 + \\dfrac{1}{x} \\quad \\text{(dividing both sides by } x \\ne 0) \\ x &= \\sqrt{3 + \\dfrac{1}{x}} \\end{aligned}$$<br>Writing this in iterative form yields the required formula:<br>$$x_{n+1} = \\sqrt{3 + \\dfrac{1}{x_n}}$$",
            "Calculate $x_2$ by substituting $x_1 = 1.8$ into the formula:<br>$$\\begin{aligned} x_2 &= \\sqrt{3 + \\dfrac{1}{1.8}} \\ &= \\sqrt{3 + 0.5556} \\ &= \\sqrt{3.5556} \\ &\\approx 1.8856 \\end{aligned}$$",
            "Calculate $x_3$ by substituting $x_2 \\approx 1.885618$ (using full calculator precision to prevent intermediate rounding errors):<br>$$\\begin{aligned} x_3 &= \\sqrt{3 + \\dfrac{1}{1.885618}} \\ &\\approx \\sqrt{3 + 0.5303} \\ &= \\sqrt{3.5303} \\ &\\approx 1.8789 \\end{aligned}$$",
            "Calculate $x_4$ by substituting $x_3 \\approx 1.878916$:<br>$$\\begin{aligned} x_4 &= \\sqrt{3 + \\dfrac{1}{1.878917}} \\ &\\approx \\sqrt{3 + 0.5322} \\ &= \\sqrt{3.5322} \\ &\\approx 1.8794 \\end{aligned}$$<br><br>Final Answer: $$x_2 \\approx 1.8856, \\quad x_3 \\approx 1.8789, \\quad x_4 \\approx 1.8794$$"
        ],
        "pi_options": [
            {
                "ans": "$$x_2 \\approx 1.8878, \\quad x_3 \\approx 1.8790, \\quad x_4 \\approx 1.8800$$",
                "feedback": "You may have made an arithmetic slip when evaluating $x_2 = \\sqrt{3.5556}$. $\\sqrt{3.5555...} \\approx 1.8856$, not $1.8878$. This initial rounding slip cascaded into your calculations for $x_3$ and $x_4$."
            },
            {
                "ans": "$$x_2 \\approx 1.8856, \\quad x_3 \\approx 1.8789, \\quad x_4 \\approx 1.8812$$",
                "feedback": "Check your calculations for $x_4$. Substituting $x_3 \\approx 1.8789$ back into the formula yields $\\sqrt{3 + 1/1.8789} \\approx \\sqrt{3.5322} \\approx 1.8794$, not $1.8812$."
            },
            {
                "ans": "$$x_2 \\approx 1.8856, \\quad x_3 \\approx 1.8924, \\quad x_4 \\approx 1.8794$$",
                "feedback": "Check your calculation steps for $x_3$. Substituting $x_2 \\approx 1.8856$ yields $\\sqrt{3 + 1/1.8856} \\approx 1.8789$. Make sure you divide $1$ by $x_n$ before adding $3$ and taking the square root."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Avoid Intermediate Rounding",
            "content": "When evaluating iterative formulas, never clear your calculator screen or use rounded 4 d.p. values for subsequent steps. Always store the full value in your calculator memory and run the formula on the exact decimal to ensure your final rounded answers are precise."
        }
    },
    {
        "id": "004219",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Numerical Methods",
        "subtopic": [
            "Fixed-Point Iteration",
            "Rearranging Equations"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A curve has the equation $y = e^{-x} + x^2 - 3$.<br><br>1. Show that the equation $e^{-x} + x^2 - 3 = 0$ can be rearranged into the iterative form:<br>$$x_{n+1} = \\sqrt{3 - e^{-x_n}}$$<br>2. Using this iterative form with $x_1 = 1.5$, find the values of $x_2$, $x_3$, and $x_4$, giving your answers to $4$ decimal places.",
        "steps": [
            "Set $y = 0$ to find the $x$-intercept root of the equation:<br>$$\\begin{aligned} e^{-x} + x^2 - 3 &= 0 \\ x^2 &= 3 - e^{-x} \\ x &= \\sqrt{3 - e^{-x}} \\end{aligned}$$<br>Writing this in iterative form yields the required equation:<br>$$x_{n+1} = \\sqrt{3 - e^{-x_n}}$$",
            "Calculate $x_2$ by substituting $x_1 = 1.5$ into the formula:<br>$$\\begin{aligned} x_2 &= \\sqrt{3 - e^{-1.5}} \\ &\\approx \\sqrt{3 - 0.2231} \\ &= \\sqrt{2.7769} \\ &\\approx 1.6664 \\end{aligned}$$",
            "Calculate $x_3$ by substituting $x_2 \\approx 1.666394$ (using full calculator precision):<br>$$\\begin{aligned} x_3 &= \\sqrt{3 - e^{-1.666394}} \\ &\\approx \\sqrt{3 - 0.1889} \\ &= \\sqrt{2.8111} \\ &\\approx 1.6766 \\end{aligned}$$",
            "Calculate $x_4$ by substituting $x_3 \\approx 1.676626$:<br>$$\\begin{aligned} x_4 &= \\sqrt{3 - e^{-1.676626}} \\ &\\approx \\sqrt{3 - 0.1870} \\ &= \\sqrt{2.8130} \\ &\\approx 1.6772 \\end{aligned}$$<br><br>Final Answer: $$x_2 \\approx 1.6664, \\quad x_3 \\approx 1.6766, \\quad x_4 \\approx 1.6772$$"
        ],
        "pi_options": [
            {
                "ans": "$$x_2 \\approx 1.6664, \\quad x_3 \\approx 1.6772, \\quad x_4 \\approx 1.6775$$",
                "feedback": "You may have made a rounding error in $x_3$. $e^{-1.6664} \\approx 0.1889$, which yields $x_3 = \\sqrt{3 - 0.1889} \\approx 1.6766$, not $1.6772$. Be careful not to skip an iteration step."
            },
            {
                "ans": "$$x_2 \\approx 1.6664, \\quad x_3 \\approx 1.6766, \\quad x_4 \\approx 1.6912$$",
                "feedback": "Check your calculations for $x_4$. Substituting $x_3 \\approx 1.6766$ into the formula yields $\\sqrt{3 - e^{-1.6766}} \\approx \\sqrt{3 - 0.1870} = \\sqrt{2.8130} \\approx 1.6772$, not $1.6912$."
            },
            {
                "ans": "$$x_2 \\approx 1.6664, \\quad x_3 \\approx 1.5831, \\quad x_4 \\approx 1.6772$$",
                "feedback": "Check your exponent sign in $x_3$. Remember that the term is $e^{-x_n}$. A positive exponent $e^{x_n}$ will yield a completely incorrect series of iterative approximations."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Exponential Sign Care",
            "content": "When evaluating terms of the form $e^{-x_n}$ on a calculator, always be careful with the negative sign in the exponent. Dropping this sign changes the decay term into an exponential growth term, causing the iteration to rapidly diverge."
        }
    },
    {
        "id": "004220",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Numerical Methods",
        "subtopic": [
            "The Newton-Raphson Method"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The equation $f(x) = 0$ is to be solved, where $f(x) = e^x - 5x^3$.<br><br>1. Show that the Newton-Raphson formula for this equation can be written in the form:<br>$$x_{n+1} = \\dfrac{e^{x_n}(x_n - 1) - 10x_n^3}{e^{x_n} - 15x_n^2}$$<br>2. Using the starting value $x_1 = 0.8$, find the values of $x_2$ and $x_3$ correct to $4$ decimal places.",
        "steps": [
            "Find the derivative of $f(x) = e^x - 5x^3$:<br>$$f'(x) = e^x - 15x^2$$<br>The general Newton-Raphson formula is:<br>$$x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}$$",
            "Substitute $f(x_n)$ and $f'(x_n)$ into the formula and simplify into a single fraction:<br>$$\\begin{aligned} x_{n+1} &= x_n - \\dfrac{e^{x_n} - 5x_n^3}{e^{x_n} - 15x_n^2} \\ &= \\dfrac{x_n\\left(e^{x_n} - 15x_n^2\\right) - \\left(e^{x_n} - 5x_n^3\\right)}{e^{x_n} - 15x_n^2} \\ &= \\dfrac{x_n e^{x_n} - 15x_n^3 - e^{x_n} + 5x_n^3}{e^{x_n} - 15x_n^2} \\ &= \\dfrac{e^{x_n}(x_n - 1) - 10x_n^3}{e^{x_n} - 15x_n^2} \\end{aligned}$$<br>This is exactly the required form.",
            "Calculate $x_2$ using the starting value $x_1 = 0.8$:<br>$$\\begin{aligned} f(0.8) &= e^{0.8} - 5(0.8)^3 \\ &\\approx 2.2255 - 2.5600 \\ &= -0.3345 \\ f'(0.8) &= e^{0.8} - 15(0.8)^2 \\ &\\approx 2.2255 - 9.6000 \\ &= -7.3745 \\ x_2 &= 0.8 - \\dfrac{-0.3345}{-7.3745} \\ &\\approx 0.8 - 0.0454 \\ &= 0.7546 \\end{aligned}$$",
            "Calculate $x_3$ using $x_2 = 0.7546$:<br>$$\\begin{aligned} f(0.7546) &= e^{0.7546} - 5(0.7546)^3 \\ &\\approx 2.1267 - 2.1465 \\ &= -0.0198 \\ f'(0.7546) &= e^{0.7546} - 15(0.7546)^2 \\ &\\approx 2.1267 - 8.5410 \\ &= -6.4143 \\ x_3 &= 0.7546 - \\dfrac{-0.0198}{-6.4143} \\ &\\approx 0.7546 - 0.0031 \\ &= 0.7515 \\end{aligned}$$<br><br>Final Answer: $$x_2 \\approx 0.7546, \\quad x_3 \\approx 0.7515$$"
        ],
        "pi_options": [
            {
                "ans": "$$x_2 \\approx 0.7546, \\quad x_3 \\approx 0.7577$$",
                "feedback": "Check your division sign when computing $x_3$. Since both $f(x_2)$ and $f'(x_2)$ are negative, their division yields a positive value: $\\dfrac{-0.0198}{-6.4143} \\approx +0.0031$. Subtracting this positive value gives $0.7546 - 0.0031 = 0.7515$, not $0.7546 + 0.0031 = 0.7577$."
            },
            {
                "ans": "$$x_2 \\approx 0.8454, \\quad x_3 \\approx 0.7515$$",
                "feedback": "Be careful with signs during division in the step for $x_2$. We have $0.8 - \\dfrac{-0.3345}{-7.3745}$. Since the fraction evaluates to positive $+0.0454$, we are subtracting a positive number, yielding $0.8 - 0.0454 = 0.7546$, not $0.8 + 0.0454 = 0.8454$."
            },
            {
                "ans": "$$x_2 \\approx 0.7546, \\quad x_3 \\approx 0.7512$$",
                "feedback": "This value of $x_3$ is extremely close and corresponds to keeping full calculator precision ($x_3 \\approx 0.7512$). However, if using the standard classroom method of substituting the rounded 4 d.p. value $x_2 = 0.7546$ back into the formula, the result resolves to $0.7515$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Newton-Raphson Sign Clashes",
            "content": "The Newton-Raphson method is a major, high-yield A-Level topic, but it is highly prone to sign errors. Since the formula is $x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}$, you must track three separate negative signs: the minus in the formula, the sign of $f(x_n)$, and the sign of $f'(x_n)$. Writing each evaluation step out clearly is key to preventing mistakes."
        }
    },
    {
        "id": "004221",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Trigonometry",
        "topic": "Trigonometric Equations",
        "subtopic": [
            "Trigonometric Identities",
            "Quadratic Equations in Trig",
            "Degree Measures"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Solve the equation:<br>$$\\sec^2 \\theta + 3\\tan \\theta = 5$$<br>for $0^\\circ \\le \\theta \\le 360^\\circ$, giving your answers correct to $1$ decimal place where appropriate.",
        "steps": [
            "Use the fundamental trigonometric identity $\\sec^2 \\theta = 1 + \\tan^2 \\theta$ to write the entire equation in terms of $\\tan \\theta$:<br>$$\\left(1 + \\tan^2 \\theta\\right) + 3\\tan \\theta = 5$$",
            "Rearrange the equation to form a standard quadratic equation in $\\tan \\theta$:<br>$$\\tan^2 \\theta + 3\\tan \\theta - 4 = 0$$",
            "Factorise the quadratic equation:<br>$$\\left( \\tan \\theta + 4 \\right)\\left( \\tan \\theta - 1 \\right) = 0$$<br>This gives two possible values for $\\tan \\theta$:<br>$$\\tan \\theta = 1 \\quad \\text{or} \\quad \\tan \\theta = -4$$",
            "Solve for the first case, $\\tan \\theta = 1$, in the domain $0^\\circ \\le \\theta \\le 360^\\circ$:<br>$$\\begin{aligned} \\theta &= \\tan^{-1}(1) \\ \\theta &= 45.0^\\circ, \\, 225.0^\\circ \\end{aligned}$$",
            "Solve for the second case, $\\tan \\theta = -4$, in the domain $0^\\circ \\le \\theta \\le 360^\\circ$:<br>The principal value is $\\theta \\approx -75.96^\\circ$. Find the positive solutions within the required domain:<br>$$\\begin{aligned} \\theta &= 180^\\circ - 75.96^\\circ = 104.0^\\circ \\ \\theta &= 360^\\circ - 75.96^\\circ = 284.0^\\circ \\end{aligned}$$<br>Combining all solutions gives the final set of answers.<br><br>Final Answer: $$\\theta = 45.0^\\circ, \\, 104.0^\\circ, \\, 225.0^\\circ, \\, 284.0^\\circ$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\theta = 45.0^\\circ, \\, 225.0^\\circ, \\, 284.0^\\circ, \\quad \\text{Area} = \\text{N/A}$$",
                "feedback": "You may have missed one of the negative tangent solutions. Since $\\tan \\theta = -4$, there are two solutions in the $0^\\circ \\le \\theta \\le 360^\\circ$ range: one in the second quadrant ($180^\\circ - 76.0^\circ = 104.0^\circ$) and one in the fourth quadrant ($360^\circ - 76.0^\circ = 284.0^\circ$)."
            },
            {
                "ans": "$$\\theta = 45.0^\\circ, \\, 76.0^\\circ, \\, 225.0^\\circ, \\, 256.0^\\circ$$",
                "feedback": "Be careful when translating negative tangent values. The root $x = -4$ corresponds to angles in the second and fourth quadrants, which are $104.0^\circ$ and $284.0^\circ$, not $76.0^\circ$ and $256.0^\circ$."
            },
            {
                "ans": "$$y = 45^\\circ, \\, 225^\\circ$$",
                "feedback": "You found the solutions for the factor $(\\tan \\theta - 1) = 0$, but you must also solve for $(\\tan \\theta + 4) = 0$ to get the complete set of four solutions."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Quadrant Analysis of Negatives",
            "content": "When solving trig equations yielding negative values (like $\\tan \\theta = -4$), always sketch a CAST diagram or tangent curve to help locate the correct quadrants. Tangent is negative in the second and fourth quadrants, which dictates performing $180^\\circ - |\\theta_{PV}|$ and $360^\\circ - |\\theta_{PV}|$ to find the correct angles within the positive domain."
        }
    },
    {
        "id": "004222",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Trigonometry",
        "topic": "Trigonometric Equations",
        "subtopic": [
            "Trigonometric Identities",
            "Quadratic Equations in Trig",
            "Degree Measures"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Solve the equation:<br>$$2\\text{cosec}^2 \\theta + 5\\cot \\theta = 5$$<br>for $0^\\circ \\le \\theta \\le 360^\\circ$, giving your answers correct to $1$ decimal place where appropriate.",
        "steps": [
            "Use the cosecant-cotangent identity $\\csc^2 \\theta = 1 + \\cot^2 \\theta$ to rewrite the equation in terms of $\\cot \\theta$:<br>$$2\\left(1 + \\cot^2 \\theta\\right) + 5\\cot \\theta = 5$$",
            "Expand and rearrange to form a standard quadratic equation:<br>$$\\begin{aligned} 2 + 2\\cot^2 \\theta + 5\\cot \\theta &= 5 \\ 2\\cot^2 \\theta + 5\\cot \\theta - 3 &= 0 \\end{aligned}$$",
            "Factorise the quadratic expression:<br>$$(2\\cot \\theta - 1)(\\cot \\theta + 3) = 0 \\implies \\cot \\theta = 0.5 \\quad \\text{or} \\quad \\cot \\theta = -3$$",
            "Solve the first branch, $\\cot \\theta = 0.5$, which is equivalent to $\\tan \\theta = 2$:<br>$$\\begin{aligned} \\theta &= \\tan^{-1}(2) \\ &\\approx 63.4^\\circ, \\quad 243.4^circ \\end{aligned}$$",
            "Solve the second branch, $\\cot \\theta = -3$, which is equivalent to $\\tan \\theta = -\\dfrac{1}{3}$:<br>The principal value is $\\theta \\approx -18.4^\circ$. Finding the positive solutions in the domain:<br>$$\\begin{aligned} \\theta &= 180^\\circ - 18.4^\\circ = 161.6^\\circ \\ \\theta &= 360^\\circ - 18.4^\\circ = 341.6^\\circ \\end{aligned}$$<br>Combining all solutions yields the final set of answers.<br><br>Final Answer: $$\\theta = 63.4^\\circ, \\, 161.6^\\circ, \\, 243.4^\\circ, \\, 341.6^\\circ$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\theta = 63.4^\\circ, \\, 243.4^\\circ, \\, 341.6^\\circ$$",
                "feedback": "Make sure you completely evaluate both branches of the quadratic equation. The branch $\\cot \\theta = -3 \\implies \\tan \\theta = -\\dfrac{1}{3}$ yields two solutions in the domain: $161.6^\circ$ and $341.6^\circ$."
            },
            {
                "ans": "$$\\theta = 26.6^\\circ, \\, 161.6^\\circ, \\, 206.6^\\circ, \\, 341.6^\\circ$$",
                "feedback": "When taking the reciprocal of $\\cot \\theta = 0.5$, you must solve $\\tan \\theta = \\dfrac{1}{0.5} = 2$. It seems you may have mistakenly solved $\\tan \\theta = 0.5$, which yields $\\theta \\approx 26.6^\circ$."
            },
            {
                "ans": "$$\\theta = 63.4^\\circ, \\, 161.6^\\circ, \\, 243.4^\\circ$$",
                "feedback": "Make sure you fully solve the quadratic equation. Both positive and negative trigonometric branches should yield exactly two distinct solutions within the $0^\circ \\le \\theta \\le 360^\circ$ interval."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Reciprocating Trig Equations",
            "content": "When solving equations written in terms of reciprocal functions like $\\cot \\theta = y$, always convert them to primary functions immediately using $\\tan \\theta = \\dfrac{1}{y}$ before using your calculator's inverse functions. This completely avoids simple input mistakes."
        }
    },
    {
        "id": "004223",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Trigonometry",
        "topic": "Trigonometric Equations",
        "subtopic": [
            "Double Angle Formula",
            "Quadratic Equations in Trig",
            "Degree Measures"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Solve the equation:<br>$$3\\cos 2\\theta - \\sin \\theta = 2$$<br>for $0^\\circ \\le \\theta \\le 360^\\circ$, giving your answers correct to $1$ decimal place where appropriate.",
        "steps": [
            "Use the double-angle cosine identity $\\cos 2\\theta = 1 - 2\\sin^2 \\theta$ to write the equation in terms of $\\sin \\theta$:<br>$$3\\left(1 - 2\\sin^2 \\theta\\right) - \\sin \\theta = 2$$",
            "Expand, simplify, and rearrange the terms into a standard quadratic form:<br>$$\\begin{aligned} 3 - 6\\sin^2 \\theta - \\sin \\theta &= 2 \\ -6\\sin^2 \\theta - \\sin \\theta + 1 &= 0 \\ 6\\sin^2 \\theta + \\sin \\theta - 1 &= 0 \\end{aligned}$$",
            "Factorise the quadratic equation:<br>$$\\left(3\\sin \\theta - 1\\right)\\left(2\\sin \\theta + 1\\right) = 0$$<br>This gives two possible values for $\\sin \\theta$:<br>$$\\sin \\theta = \\dfrac{1}{3} \\quad \\text{or} \\quad \\sin \\theta = -\\dfrac{1}{2}$$",
            "Solve the first case, $\\sin \\theta = \\dfrac{1}{3}$, in the domain $0^\\circ \\le \\theta \\le 360^\\circ$:<br>$$\\begin{aligned} \\theta &= \\sin^{-1}\\left(\\dfrac{1}{3}\\right) \\ \\theta &\\approx 19.5^\\circ, \\, 160.5^\\circ \\end{aligned}$$",
            "Solve the second case, $\\sin \\theta = -\\dfrac{1}{2}$, in the domain $0^\\circ \\le \\theta \\le 360^\\circ$:<br>The principal value is $\\theta = -30.0^\\circ$. The positive angles within the domain are:<br>$$\\begin{aligned} \\theta &= 180^\\circ - (-30.0^\\circ) = 210.0^\\circ \\ \\theta &= 360^\\circ + (-30.0^\\circ) = 330.0^\\circ \\end{aligned}$$<br>Combining all solutions gives the final set of answers.<br><br>Final Answer: $$\\theta = 19.5^\\circ, \\, 160.5^\\circ, \\, 210.0^\\circ, \\, 330.0^\\circ$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\theta = 19.5^\\circ, \\, 160.5^\\circ, \\, 150.0^\\circ, \\, 330.0^\\circ$$",
                "feedback": "Check your quadrant adjustments for $\\sin \\theta = -\\dfrac{1}{2}$. Sine is negative in the third and fourth quadrants. The third quadrant solution is $180^\circ - (-30.0^\circ) = 210.0^\circ$, not $150.0^\circ$ (which is in the second quadrant where sine is positive)."
            },
            {
                "ans": "$$\\theta = 19.5^\\circ, \\, 160.5^\\circ, \\, 210.0^\\circ$$",
                "feedback": "Remember to solve completely for both roots of your factorised quadratic. The branch $\\sin \\theta = -\\dfrac{1}{2}$ must produce two positive angles in the interval: $210.0^\circ$ and $330.0^\circ$."
            },
            {
                "ans": "$$\\theta = 19.5^\\circ, \\, 210.0^\\circ, \\, 330.0^\\circ$$",
                "feedback": "For the positive branch $\\sin \\theta = \\dfrac{1}{3}$, sine is positive in the first and second quadrants. This yields two solutions in the domain: $19.5^\circ$ and $180^\circ - 19.5^\circ = 160.5^\circ$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Choosing Double Angle Identities",
            "content": "When dealing with $\\cos 2\\theta$, always look at the other trigonometric term in the equation to decide which identity to use. Since the other term is $-\\sin \\theta$, using $\\cos 2\\theta = 1 - 2\\sin^2 \\theta$ immediately yields a solvable quadratic in sine."
        }
    },
    {
        "id": "004224",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Trigonometry",
        "topic": "Trigonometric Equations",
        "subtopic": [
            "Trigonometric Identities",
            "Quadratic Equations in Trig",
            "Radian Measures"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Solve the equation:<br>$$4\\sin^2 \\theta - 8\\cos \\theta = 1$$<br>for $0 \\le \\theta \\le 2\\pi$, giving your answers in terms of $\\arccos$.",
        "steps": [
            "Use the fundamental identity $\\sin^2 \\theta = 1 - \\cos^2 \\theta$ to write the entire equation in terms of $\\cos \\theta$:<br>$$4\\left(1 - \\cos^2 \\theta\\right) - 8\\cos \\theta = 1$$",
            "Expand, simplify, and rearrange the quadratic equation:<br>$$\\begin{aligned} 4 - 4\\cos^2 \\theta - 8\\cos \\theta - 1 &= 0 \\ -4\\cos^2 \\theta - 8\\cos \\theta + 3 &= 0 \\ 4\\cos^2 \\theta + 8\\cos \\theta - 3 &= 0 \\end{aligned}$$",
            "Since the quadratic expression does not factorise cleanly, apply the quadratic formula with $a = 4$, $b = 8$, and $c = -3$ to solve for $\\cos \\theta$:<br>$$\\begin{aligned} \\cos \\theta &= \\dfrac{-8 \\pm \\sqrt{8^2 - 4(4)(-3)}}{2(4)} \\ &= \\dfrac{-8 \\pm \\sqrt{64 + 48}}{8} \\ &= \\dfrac{-8 \\pm \\sqrt{112}}{8} \\ &= \\dfrac{-8 \\pm 4\\sqrt{7}}{8} \\ &= \\dfrac{-2 \\pm \\sqrt{7}}{2} \\end{aligned}$$",
            "Determine the valid branch of solutions by checking the range constraint of cosine, $-1 \\le \\cos \\theta \\le 1$:<br>Checking both branches:<br>$$\\begin{aligned} \\dfrac{-2 - \\sqrt{7}}{2} &\\approx -2.32 \\quad \\text{(outside range)} \\ \\dfrac{-2 + \\sqrt{7}}{2} &\\approx 0.32 \\quad \\text{(within range)} \\end{aligned}$$<br>Therefore, we only solve the equation for the valid branch: $\\cos \\theta = \\dfrac{-2 + \\sqrt{7}}{2}$.",
            "Find the solutions in radians within the domain $0 \\le \\theta \\le 2\\pi$:<br>Since $\\cos \\theta$ is positive, there are two solutions (one in the first quadrant, one in the fourth quadrant):<br>$$\\begin{aligned} \\theta &= \\arccos\\left(\\dfrac{-2 + \\sqrt{7}}{2}\\right) \\ \\theta &= 2\\pi - \\arccos\\left(\\dfrac{-2 + \\sqrt{7}}{2}\\right) \\end{aligned}$$<br><br>Final Answer: $$\\theta = \\arccos\\left(\\dfrac{-2 + \\sqrt{7}}{2}\\right), \\, 2\\pi - \\arccos\\left(\\dfrac{-2 + \\sqrt{7}}{2}\\right)$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\theta = \\arccos\\left(\\dfrac{-2 - \\sqrt{7}}{2}\\right), \\, \\arccos\\left(\\dfrac{-2 + \\sqrt{7}}{2}\\right)$$",
                "feedback": "Remember to evaluate the validity of both branches of your quadratic formula result. The branch $\\cos \\theta = \\dfrac{-2 - \\sqrt{7}}{2} \\approx -2.32$ is strictly outside the defined range of cosine, $-1 \\le \\cos \\theta \\le 1$, and produces no real solutions."
            },
            {
                "ans": "$$\\theta = \\arccos\\left(\\dfrac{-2 + \\sqrt{7}}{2}\\right), \\, \\pi - \\arccos\\left(\\dfrac{-2 + \\sqrt{7}}{2}\\right)$$",           "feedback": "Check your quadrant adjustments for a positive cosine value. Cosine is positive in the first and fourth quadrants. The fourth quadrant solution is $2\\pi - \\theta_{PV}$, not $\\pi - \\theta_{PV}$ (which is in the second quadrant)."
            },
            {
                "ans": "$$\\theta = \\arccos\\left(\\dfrac{-2 + \\sqrt{7}}{2}\\right)$$",
                "feedback": "You found the principal value in the first quadrant, but remember that cosine is also positive in the fourth quadrant. You must include the corresponding fourth-quadrant solution $2\\pi - \\theta_{PV}$ to complete the set."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Range Boundaries of Cosine",
            "content": "Whenever you solve a quadratic equation in sine or cosine, always check the validity of your roots. Since $-1 \\le \\cos \\theta \\le 1$, any roots outside this range are invalid. Discarding the incorrect branch immediately is essential to avoid writing down phantom solutions."
        }
    },
    {
        "id": "004225",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Trigonometry",
        "topic": "Trigonometric Equations",
        "subtopic": [
            "Double Angle Formula",
            "Factoring Trigonometric Functions",
            "Degree Measures"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Solve the equation:<br>$$3\\sin 2\\theta = 4\\cos \\theta$$<br>for $0^\\circ \\le \\theta \\le 360^\\circ$, giving your answers correct to $1$ decimal place where appropriate.",
        "steps": [
            "Use the double-angle sine identity $\\sin 2\\theta = 2\\sin \\theta \\cos \\theta$ to expand the left-hand side:<br>$$3\\left(2\\sin \\theta \\cos \\theta\\right) = 4\\cos \\theta$$",
            "Bring all terms to one side of the equation:<br>$$6\\sin \\theta \\cos \\theta - 4\\cos \\theta = 0$$",
            "Factorise out the common term $2\\cos \\theta$:<br>$$2\\cos \\theta\\left(3\\sin \\theta - 2\\right) = 0$$<br>This gives two branches to solve:<br>$$\\cos \\theta = 0 \\quad \\text{or} \\quad \\sin \\theta = \\dfrac{2}{3}$$",
            "Solve the first branch, $\\cos \\theta = 0$, in the domain $0^\\circ \\le \\theta \\le 360^\\circ$:<br>$$\\theta = 90.0^\\circ, \\, 270.0^\\circ$$",
            "Solve the second branch, $\\sin \\theta = \\dfrac{2}{3}$, in the domain $0^\\circ \\le \\theta \\le 360^\\circ$:<br>$$\\begin{aligned} \\theta &= \\sin^{-1}\\left(\\dfrac{2}{3}\\right) \\ \\theta &\\approx 41.8^\\circ, \\, 180^\\circ - 41.8^\\circ = 138.2^\\circ \\end{aligned}$$<br>Combining all solutions yields the final set of answers.<br><br>Final Answer: $$\\theta = 41.8^\\circ, \\, 90.0^\\circ, \\, 138.2^\\circ, \\, 270.0^\\circ$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\theta = 41.8^\\circ, \\, 138.2^\\circ$$",
                "feedback": "You may have made the classic mistake of dividing both sides by $\\cos \\theta$ in the first step. Dividing by a variable term that can equal zero loses the valid solutions where $\\cos \\theta = 0 \\implies \\theta = 90.0^\circ, \\, 270.0^\circ$. Always bring terms to one side and factorise."
            },
            {
                "ans": "$$\\theta = 41.8^\\circ, \\, 90.0^\\circ, \\, 221.8^\\circ, \\, 270.0^\\circ$$",
                "feedback": "Check your second quadrant calculation for $\\sin \\theta = \\dfrac{2}{3}$. Sine is positive in the first and second quadrants. The second quadrant solution is $180^\circ - 41.8^\circ = 138.2^\circ$, not $180^\circ + 41.8^\circ = 221.8^\circ$."
            },
            {
                "ans": "$$\\theta = 90.0^\\circ, \\, 270.0^\\circ$$",
                "feedback": "You found the solutions for the $\\cos \\theta = 0$ branch, but you must also solve for $3\\sin \\theta - 2 = 0 \\implies \\sin \\theta = \\dfrac{2}{3}$ to find the complete set of four solutions."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Never Divide by Variable Trig Terms",
            "content": "A very common error in A-Level exams is dividing both sides of an equation by a function like $\\cos \\theta$. This is algebraically illegal because it assumes $\\cos \\theta \\ne 0$, resulting in the loss of major valid branches of solutions. Always bring all terms to one side and factorise."
        }
    },
    {
        "id": "004226",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Algebra",
        "topic": "Sequences and Series",
        "subtopic": [
            "Arithmetic Progressions",
            "Geometric Progressions",
            "Modelling Sequences"
        ],
        "img": false,
        "question": "Clara and Dan are saving up for a holiday. Clara saves £80 in the first month, and increases the amount she saves by £15 each month.<br><br>1. Calculate how much Clara saves in total over 2 years (24 months).<br><br>Dan also saves £80 in the first month. The amount he saves each month is 8% more than the amount he saved in the previous month.<br><br>2. Explain why the amounts Dan saves each month form a geometric progression.<br>3. Calculate how much Dan saves in total over 2 years (24 months), giving your answer to the nearest pound.<br>4. Determine the month in which Dan's monthly savings first exceed Clara's monthly savings.",
        "steps": [
            "Clara's monthly savings form an arithmetic progression with first term $a = 80$, common difference $d = 15$, and number of terms $n = 24$ months. Use the arithmetic sum formula:<br>$$S_n = \\dfrac{n}{2}\\left(2a + (n-1)d\\right)$$<br>Substitute the values to find the total sum:<br>$$\\begin{aligned} S_{24} &= \\dfrac{24}{2}\\left(2(80) + (24-1)15\\right) \\ &= 12\\left(160 + 23(15)\\right) \\ &= 12\\left(160 + 345\\right) \\ &= 12(505) \\ &= 6060 \\end{aligned}$$<br>Clara saves £6060 in total.",
            "Dan's monthly savings increase by a constant percentage of $8\\%$ each month. This means each month's savings is a constant multiplier of $1.08$ times the previous month's savings:<br>$$\\text{Month}_{n+1} = 1.08 \\times \\text{Month}_n$$<br>Because there is a constant common ratio of $r = 1.08$, the savings form a geometric progression.",
            "Dan's savings form a geometric progression with first term $a = 80$, common ratio $r = 1.08$, and $n = 24$ months. Use the geometric sum formula:<br>$$S_n = \\dfrac{a\\left(r^n - 1\\right)}{r - 1}$$<br>Substitute the values to calculate the total sum:<br>\\begin{aligned} S_{24} &= \\dfrac{80\\left(1.08^{24} - 1\\right)}{1.08 - 1} \\ &\\approx \\dfrac{80\\left(6.3412 - 1\\right)}{0.08} \\ &= 1000(5.3412) \\ &\\approx 5341 \\end{aligned}<br>Dan saves £5341 to the nearest pound (or £5349 if using the rounded value $1.08^{24} \\approx 6.35$ during calculation).",            "Write the expressions for the savings in month $n$ for both Clara ($C_n$) and Dan ($D_n$):<br>$$\\begin{aligned} C_n &= a + (n-1)d = 80 + 15(n-1) \\ D_n &= a r^{n-1} = 80(1.08)^{n-1} \\end{aligned}$$<br>We seek the smallest integer $n$ such that $D_n > C_n$. Let's test values near $n = 21$ and $n = 22$:<br>$$\\begin{aligned} \\text{For } n = 21: \\quad C_{21} &= 80 + 15(20) = 380 \\ D_{21} &= 80(1.08)^{20} \\approx 372.88 \\quad (< 380) \\ \\text{For } n = 22: \\quad C_{22} &= 80 + 15(21) = 395 \\ D_{22} &= 80(1.08)^{21} \\approx 402.71 \\quad (> 395) \\end{aligned}$$<br>Therefore, Dan's monthly savings first exceed Clara's monthly savings in month 22.<br><br>Final Answer: $$S_{\\text{Clara}} = 6060, \\quad S_{\\text{Dan}} = 5341, \\quad \\text{Month } 22$$"
        ],
        "pi_options": [
            {
                "ans": "$$S_{\\text{Clara}} = 6060, \\quad S_{\\text{Dan}} = 5341, \\quad \\text{Month } 21$$",
                "feedback": "Check your calculations for month 21. In month 21, Clara saves $80 + 15(20) = 380$, while Dan saves $80(1.08)^{20} \\approx 372.88$, which is still less than Clara. Dan first exceeds Clara in month 22."
            },
            {
                "ans": "$$S_{\\text{Clara}} = 5820, \\quad S_{\\text{Dan}} = 5341, \\quad \\text{Month } 22$$",
                "feedback": "Check your term index in the arithmetic sum formula. The formula uses $(n-1)d$. For $n = 24$, this is $23d$, which is $345$. Using $24d = 360$ gives an incorrect sum of $5820$ or $6120$."
            },
            {
                "ans": "$$S_{\\text{Clara}} = 6060, \\quad S_{\\text{Dan}} = 5050, \\quad \\text{Month } 22$$",
                "feedback": "Check your calculation for Dan's geometric sum. The formula is $\\dfrac{80(1.08^{24} - 1)}{0.08} = 1000(1.08^{24} - 1)$. Make sure you evaluate the exponent power first before subtracting $1$ and multiplying."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Track Term Indices Carefully",
            "content": "When working with series word problems, be extremely careful with indices. The sum formula uses $(n-1)d$ and the $n$-th term formula uses $a r^{n-1}$. It is very common under pressure to use $nd$ or $a r^n$, which will shift all your calculations by a month and result in lost marks."
        }
    },
    {
        "id": "004227",
        "board": "OCR MEI",
        "level": "AS",
        "major_area": "Algebra",
        "topic": "Sequences and Series",
        "subtopic": [
            "Arithmetic Progressions"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>An athlete is training for a marathon. On day 1, they run $5$ km. Each day they increase their distance by $d$ km.<br><br>1. Write down an expression in terms of $d$ for the distance run on day $20$.<br>2. Given that the total distance run over the first $20$ days is $195$ km, find the value of $d$.<br>3. Hence, calculate the distance the athlete runs on day $30$.",
        "steps": [
            "Use the standard $n$-th term formula for an arithmetic progression, $u_n = a + (n-1)d$, with first term $a = 5$:<br>$$u_{20} = 5 + (20 - 1)d = 5 + 19d$$",
            "Set up the sum equation over the first $20$ days using $S_n = \\dfrac{n}{2}\\left(2a + (n-1)d\\right)$:<br>$$\\begin{aligned} S_{20} &= \\dfrac{20}{2}\\left(2(5) + (20-1)d\\right) \\ 195 &= 10\\left(10 + 19d\\right) \\end{aligned}$$",
            "Solve for the common difference $d$:<br>$$\\begin{aligned} 19.5 &= 10 + 19d \\ 19d &= 9.5 \\ d &= 0.5 \\end{aligned}$$<br>So the common daily increase is $0.5$ km.",
            "Calculate the distance run on day $30$ using $a = 5$ and $d = 0.5$:<br>$$\\begin{aligned} u_{30} &= a + 29d \\ &= 5 + 29(0.5) \\ &= 5 + 14.5 \\ &= 19.5 \\end{aligned}$$<br>The athlete runs $19.5$ km on day $30$.<br><br>Final Answer: $$u_{20} = 5 + 19d, \\quad d = 0.5, \\quad u_{30} = 19.5$$"
        ],
        "pi_options": [
            {
                "ans": "$$u_{20} = 5 + 20d, \\quad d = 0.5, \\quad u_{30} = 19.5$$",
                "feedback": "Remember that the $n$-th term formula is $u_n = a + (n-1)d$. The distance on day 20 must be $5 + 19d$, not $5 + 20d$."
            },
            {
                "ans": "$$u_{20} = 5 + 19d, \\quad d = 0.45, \\quad u_{30} = 18.05$$",
                "feedback": "Check your expansion of the sum formula. $S_{20} = 10(2a + 19d)$. Since $a = 5$, $2a = 10$, giving $10(10 + 19d) = 195$. If you used $a = 5$ instead of $2a = 10$, you would get an incorrect value of $d$."
            },
            {
                "ans": "$$u_{20} = 5 + 19d, \\quad d = 0.5, \\quad u_{30} = 20.0$$",
                "feedback": "Check your calculation for day 30. The distance is $a + 29d$. Since $d = 0.5$, this evaluates to $5 + 14.5 = 19.5$ km, not $20.0$ km."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: AS Level Foundations",
            "content": "Arithmetic sequences are classified as AS-Level material, meaning they form the foundation of series questions. Always ensure you distinguish between the $n$-th term formula $a+(n-1)d$ and the sum formula $\\dfrac{n}{2}(2a+(n-1)d)$; mixing these up is a very common source of lost marks."
        }
    },
    {
        "id": "004228",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Algebra",
        "topic": "Sequences and Series",
        "subtopic": [
            "Geometric Progressions",
            "Sum to Infinity",
            "Parameter Solving"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A geometric series has a first term $a$ and a common ratio $r$.<br><br>1. Given that the second term of the series is $6$ and the sum to infinity is $25$, show that:<br>$$25r^2 - 25r + 6 = 0$$<br>2. Find the two possible values of $r$, and the corresponding values of $a$.",
        "steps": [
            "Write down expressions for the second term and the sum to infinity:<br>$$\\begin{aligned} u_2 &= ar = 6 \\ S_{\\infty} &= \\dfrac{a}{1 - r} = 25 \\end{aligned}$$",
            "Isolate $a$ in both equations and equate them to eliminate $a$:<br>$$\\begin{aligned} a &= \\dfrac{6}{r} \\ a &= 25\\left(1 - r\\right) \\ \\dfrac{6}{r} &= 25\\left(1 - r\\right) \\end{aligned}$$",
            "Rearrange the equation into the required quadratic form:<br>$$\\begin{aligned} 6 &= 25r\\left(1 - r\\right) \\ 6 &= 25r - 25r^2 \\ 25r^2 - 25r + 6 &= 0 \\end{aligned}$$",
            "Solve the quadratic equation using factorisation or the quadratic formula:<br>$$\\begin{aligned} (5r - 2)(5r - 3) &= 0 \\ r &= \\dfrac{2}{5} \\quad \\text{or} \\quad r = \\dfrac{3}{5} \\end{aligned}$$<br>Both ratios are valid because they satisfy the convergence condition $|r| < 1$.",
            "Find the corresponding values of $a$ for each value of $r$:<br>$$\\begin{aligned} \\text{If } r = \\dfrac{2}{5}: \\quad a &= \\dfrac{6}{2/5} = 15 \\ \\text{If } r = \\dfrac{3}{5}: \\quad a &= \\dfrac{6}{3/5} = 10 \\end{aligned}$$<br><br>Final Answer: $$r = \\dfrac{2}{5}, \\, a = 15 \\quad \\text{and} \\quad r = \\dfrac{3}{5}, \\, a = 10$$"
        ],
        "pi_options": [
            {
                "ans": "$$r = -\\dfrac{2}{5}, \\, a = -15 \\quad \\text{and} \\quad r = -\\dfrac{3}{5}, \\, a = -10$$",
                "feedback": "Check your signs when factorising the quadratic equation $25r^2 - 25r + 6 = 0$. Since the middle term is negative and the constant term is positive, both roots must be positive: $(5r - 2)(5r - 3) = 0 \\implies r = 0.4, \\, 0.6$."
            },
            {
                "ans": "$$r = \\dfrac{2}{5}, \\, a = 2.4 \\quad \\text{and} \\quad r = \\dfrac{3}{5}, \\, a = 3.6$$",
                "feedback": "When calculating the first term $a$, remember that $a = \\dfrac{6}{r}$. Dividing $6$ by a fraction $\\dfrac{2}{5}$ is equivalent to $6 \\times \\dfrac{5}{2} = 15$, not $6 \\times 0.4 = 2.4$."
            },
            {
                "ans": "$$r = \\dfrac{2}{5}, \\, a = 15$$",
                "feedback": "The quadratic equation yields two distinct positive roots, both of which are strictly less than $1$ (convergent). You must evaluate and write down both valid coordinate pairs of $(a, r)$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Convergence Restrictions on Infinity",
            "content": "Whenever a question refers to the 'sum to infinity', keep the convergence condition $|r| < 1$ in mind. If your quadratic equation produces any root $|r| \\ge 1$, you must reject it immediately because a geometric series only converges when the common ratio lies strictly between $-1$ and $1$."
        }
    },
    {
        "id": "004229",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Algebra",
        "topic": "Sequences and Series",
        "subtopic": [
            "Sigma Notation",
            "Arithmetic Progressions",
            "Geometric Progressions"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Evaluate the following sums:<br>1. $$\\sum_{r=1}^{50} (3r + 2)$$<br>2. $$\\sum_{k=1}^{10} \\left(5\\cdot 2^k\\right)$$",
        "steps": [
            "Identify the first sum $\\sum_{r=1}^{50} (3r + 2)$ as an arithmetic series with $n = 50$ terms. Calculate the first term $a$ and last term $L$:<br>$$\\begin{aligned} a &= 3(1) + 2 = 5 \\ L &= 3(50) + 2 = 152 \\end{aligned}$$",
            "Use the arithmetic sum formula $S_n = \\dfrac{n}{2}(a + L)$ to find the total:<br>$$\\begin{aligned} S_{50} &= \\dfrac{50}{2}(5 + 152) \\ &= 25(157) \\ &= 3925 \\end{aligned}$$",
            "Identify the second sum $\\sum_{k=1}^{10} \\left(5\\cdot 2^k\\right)$ as a geometric series. Write out the first few terms to find $a$ and $r$:<br>$$\\begin{aligned} \\text{Term 1 } (k=1): \\quad u_1 &= 5\\cdot 2^1 = 10 \\ \\text{Term 2 } (k=2): \\quad u_2 &= 5\\cdot 2^2 = 20 \\end{aligned}$$<br>This gives a first term of $a = 10$, a common ratio of $r = 2$, and $n = 10$ terms.",
            "Use the geometric sum formula $S_n = \\dfrac{a\\left(r^n - 1\\right)}{r - 1}$ to calculate the total sum:<br>$$\\begin{aligned} S_{10} &= \\dfrac{10\\left(2^{10} - 1\\right)}{2 - 1} \\ &= 10(1024 - 1) \\ &= 10(1023) \\ &= 10230 \\end{aligned}$$<br><br>Final Answer: $$\\sum_{r=1}^{50} (3r + 2) = 3925, \\quad \\sum_{k=1}^{10} \\left(5\\cdot 2^k\\right) = 10230$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\sum_{r=1}^{50} (3r + 2) = 3925, \\quad \\sum_{k=1}^{10} \\left(5\\cdot 2^k\\right) = 5115$$",
                "feedback": "Be careful when identifying the first term $a$ of the geometric series. Since the lower limit is $k = 1$, the first term is $5 \\cdot 2^1 = 10$, not $5$. Using $a = 5$ yields an incorrect sum of $5115$."
            },
            {
                "ans": "$$\\sum_{r=1}^{50} (3r + 2) = 3850, \\quad \\sum_{k=1}^{10} \\left(5\\cdot 2^k\\right) = 10230$$",
                "feedback": "Check your arithmetic on Clara's sum. Make sure you add the constant $2$ to the first and last term calculation: $a = 5$ and $L = 152$. Forgetting to add $2$ to the terms will lead to an incorrect sum."
            },
            {
                "ans": "$$\\sum_{r=1}^{50} (3r + 2) = 3925, \\quad \\sum_{k=1}^{10} \\left(5\\cdot 2^k\\right) = 5110$$",
                "feedback": "Check your geometric sum power index. The series has exactly $10$ terms ($k=1$ to $10$). Using $n=9$ instead of $10$ in the formula will produce an incorrect total."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Identifying First Terms in Sigma",
            "content": "Never assume the coefficient of a term is the first term $a$ in sigma notation. Always substitute the lower limit of the sum (such as $k=1$ or $r=1$) directly into the expression to find the true first term of the series."
        }
    },
    {
        "id": "004230",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Algebra",
        "topic": "Sequences and Series",
        "subtopic": [
            "Linear Recurrence Relations",
            "Simultaneous Equations"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A sequence is defined by the recurrence relation:<br>$$u_{n+1} = p u_n + q, \\quad \\text{for } n \\ge 1$$<br>where $p$ and $q$ are constants.<br><br>Given that $u_1 = 4$, $u_2 = 14$, and $u_3 = 44$:<br>1. Find the values of $p$ and $q$.<br>2. Calculate the value of $u_4$.",
        "steps": [
            "Use the recurrence relation to set up a linear equation for $u_2$ in terms of $u_1$:<br>$$\\begin{aligned} u_2 &= p u_1 + q \\ 14 &= 4p + q \\quad \\text{--- (Equation 1)} \\end{aligned}$$",
            "Set up a second linear equation for $u_3$ in terms of $u_2$:<br>$$\\begin{aligned} u_3 &= p u_2 + q \\ 44 &= 14p + q \\quad \\text{--- (Equation 2)} \\end{aligned}$$",
            "Solve the simultaneous equations by subtracting Equation 1 from Equation 2:<br>$$\\begin{aligned} (14p + q) - (4p + q) &= 44 - 14 \\ 10p &= 30 \\ p &= 3 \\end{aligned}$$",
            "Substitute $p = 3$ back into Equation 1 to find $q$:<br>$$\\begin{aligned} 4(3) + q &= 14 \\ 12 + q &= 14 \\ q &= 2 \\end{aligned}$$",
            "Use the solved relation $u_{n+1} = 3u_n + 2$ with $u_3 = 44$ to calculate the value of $u_4$:<br>$$\\begin{aligned} u_4 &= 3u_3 + 2 \\ &= 3(44) + 2 \\ &= 132 + 2 \\ &= 134 \\end{aligned}$$<br><br>Final Answer: $$p = 3, \\, q = 2, \\, u_4 = 134$$"
        ],
        "pi_options": [
            {
                "ans": "$$p = 3, \\, q = 2, \\, u_4 = 132$$",
                "feedback": "Don't forget to add the constant term $q = 2$ in the final step. $u_4 = 3(44) + 2 = 134$, not $132$."
            },
            {
                "ans": "$$p = -3, \\, q = 26, \\, u_4 = -106$$",
                "feedback": "Check your signs during subtraction. Subtracting $(4p+q)$ from $(14p+q)$ yields $+10p$, not $-10p$. Similarly, $44-14 = +30$, which gives $p = 3$."
            },
            {
                "ans": "$$p = 3, \\, q = 2, \\, u_4 = 44$$",
                "feedback": "You wrote down the value of $u_3$ instead of calculating the next term $u_4$. Make sure to run the recurrence relation once more using $u_3 = 44$ to find $u_4$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Recurrence Linear Systems",
            "content": "Recurrence relation problems are highly structured. Subtracting adjacent terms (such as $u_3 - u_2$) directly eliminates the additive constant $q$, immediately yielding a single-variable equation in the common multiplier $p$. This is always the most efficient path to solve these systems."
        }
    },
    {
        "id": "004231",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Integration",
        "subtopic": [
            "Trigonometric Proof",
            "Reciprocal Trigonometry",
            "Trigonometric Integration"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>1. Show that the expression:<br>$$\\dfrac{\\cos^2 x - \\sin^2 x}{\\sin^2 x \\cos^2 x}$$<br>can be written as $\\csc^2 x - \\sec^2 x$.<br>2. Hence find:<br>$$\\int \\dfrac{\\cos^2 x - \\sin^2 x}{\\sin^2 x \\cos^2 x} \\,\\text{d}x$$",
        "steps": [
            "To prove the identity, split the algebraic fraction into two separate terms over the common denominator:<br>\\begin{aligned} \\dfrac{\\cos^2 x - \\sin^2 x}{\\sin^2 x \\cos^2 x} &= \\dfrac{\\cos^2 x}{\\sin^2 x \\cos^2 x} - \\dfrac{\\sin^2 x}{\\sin^2 x \\cos^2 x} \\ &= \\dfrac{1}{\\sin^2 x} - \\dfrac{1}{\\cos^2 x} \\end{aligned}",
            "Apply the reciprocal identities $\\csc x = \\dfrac{1}{\\sin x}$ and $\\sec x = \\dfrac{1}{\\cos x}$ to complete the proof:<br>$$\\dfrac{1}{\\sin^2 x} - \\dfrac{1}{\\cos^2 x} = \\csc^2 x - \\sec^2 x$$",
            "Use the simplified identity to rewrite the integral in terms of standard integrable functions:<br>$$\\int \\dfrac{\\cos^2 x - \\sin^2 x}{\\sin^2 x \\cos^2 x} \\,\\text{d}x = \\int \\left( \\csc^2 x - \\sec^2 x \\right) \\,\\text{d}x$$",
            "Integrate each term individually using standard trigonometric integrals, remembering to add the constant of integration $C$:<br>\\begin{aligned} \\int \\csc^2 x \\,\\text{d}x &= -\\cot x \\ \\int \\sec^2 x \\,\\text{d}x &= \\tan x \\ \\int \\left( \\csc^2 x - \\sec^2 x \\right) \\,\\text{d}x &= -\\cot x - \\tan x + C \\end{aligned}<br><br>Final Answer: $$-\\cot x - \\tan x + C$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\cot x - \\tan x + C$$",
                "feedback": "Check your standard integrals carefully. The integral of $\\csc^2 x \\,\\text{d}x$ is $-\\cot x + C$, not positive $\\cot x + C$."
            },
            {
                "ans": "$$-\\cot x + \\tan x + C$$",
                "feedback": "Be careful with your signs during integration. The integral of $-\\sec^2 x \\,\\text{d}x$ is $-\\tan x + C$. It seems you may have mistakenly integrated it as a positive tangent."
            },
            {
                "ans": "$$-\\cot x - \\tan x$$",
                "feedback": "This is algebraically correct, but do not forget to include the arbitrary constant of integration, $+ C$, for an indefinite integral."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Splitting Complex Fractions",
            "content": "When simplifying trigonometric quotients with a single term in the denominator, split the fraction into individual terms immediately. This frequently reduces the expression to basic reciprocal functions like $\\sec^2 x$ or $\\csc^2 x$, which have standard, easily integrable forms."
        }
    },
    {
        "id": "004232",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Integration",
        "subtopic": [
            "Trigonometric Proof",
            "Pythagorean Identities",
            "Trigonometric Integration"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>1. Show that:<br>$$\\dfrac{1 - \\sin^2 x}{\\cos^2 x \\sin^2 x}$$<br>can be written as $\\csc^2 x$.<br>2. Hence find:<br>$$\\int \\dfrac{1 - \\sin^2 x}{\\cos^2 x \\sin^2 x} \\,\\text{d}x$$",
        "steps": [
            "Substitute the Pythagorean identity $1 - \\sin^2 x = \\cos^2 x$ into the numerator of the expression:<br>$$\\dfrac{1 - \\sin^2 x}{\\cos^2 x \\sin^2 x} = \\dfrac{\\cos^2 x}{\\cos^2 x \\sin^2 x}$$",
            "Cancel the common term $\\cos^2 x$ from both the numerator and the denominator, and apply the reciprocal identity $\\csc x = \\dfrac{1}{\\sin x}$:<br>$$\\dfrac{1}{\\sin^2 x} = \\csc^2 x$$",
            "Rewrite the integral using the proven identity:<br>$$\\int \\dfrac{1 - \\sin^2 x}{\\cos^2 x \\sin^2 x} \\,\\text{d}x = \\int \\csc^2 x \\,\\text{d}x$$",
            "Perform the integration using the standard trigonometric derivative rule, where the derivative of $\\cot x$ is $-\\csc^2 x$:<br>$$\\int \\csc^2 x \\,\\text{d}x = -\\cot x + C$$<br><br>Final Answer: $$-\\cot x + C$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\cot x + C$$",
                "feedback": "Remember that the derivative of $\\cot x$ is $-\\csc^2 x$. Therefore, the indefinite integral of $\\csc^2 x \\,\\text{d}x$ must be $-\\cot x + C$, not positive $\\cot x + C$."
            },
            {
                "ans": "$$-\\tan x + C$$",
                "feedback": "Double check your reciprocal identities. Since $\\csc x = \\dfrac{1}{\\sin x}$, the integral simplifies to $\\int \\csc^2 x \\,\\text{d}x$, which integrates to $-\\cot x + C$. It seems you may have integrated as if it simplified to $\\sec^2 x$."
            },
            {
                "ans": "$$-\\cot x$$",
                "feedback": "Your integration is correct, but always remember to add the arbitrary constant of integration, $+ C$, to complete any indefinite integration problem."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Spotting Pythagorean Identities",
            "content": "Always look out for the standard identity $1 - \\sin^2 x = \\cos^2 x$ in algebraic fractions. Substituting this identity simplifies the quotient instantly, leaving a single reciprocal function that can be integrated using basic standard formulas."
        }
    },
    {
        "id": "004233",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Integration",
        "subtopic": [
            "Trigonometric Proof",
            "Double Angle Formula",
            "Trigonometric Integration"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>1. Show that:<br>$$\\dfrac{\\cos 2x}{\\sin^2 2x}$$<br>can be written as $\\csc 2x \\cot 2x$.<br>2. Hence find:<br>$$\\int \\dfrac{\\cos 2x}{\\sin^2 2x} \\,\\text{d}x$$",
        "steps": [
            "Separate the fraction into a product of two distinct trigonometric ratios:<br>\\begin{aligned} \\dfrac{\\cos 2x}{\\sin^2 2x} &= \\dfrac{\\cos 2x}{\\sin 2x \\cdot \\sin 2x} \\ &= \\dfrac{\\cos 2x}{\\sin 2x} \\cdot \\dfrac{1}{\\sin 2x} \\end{aligned}",
            "Use the standard definitions $\\cot 2x = \\dfrac{\\cos 2x}{\\sin 2x}$ and $\\csc 2x = \\dfrac{1}{\\sin 2x}$ to complete the proof:<br>$$\\dfrac{\\cos 2x}{\\sin 2x} \\cdot \\dfrac{1}{\\sin 2x} = \\cot 2x \\csc 2x = \\csc 2x \\cot 2x$$",
            "Rewrite the integral using the simplified identity:<br>$$\\int \\dfrac{\\cos 2x}{\\sin^2 2x} \\,\\text{d}x = \\int \\csc 2x \\cot 2x \\,\\text{d}x$$",
            "Apply the standard integral $\\int \\csc u \\cot u \\,\\text{d}u = -\\csc u + C$. Since $u = 2x$, use the reverse chain rule and divide the result by the linear coefficient $2$:<br>$$\\int \\csc 2x \\cot 2x \\,\\text{d}x = -\\dfrac{1}{2}\\csc 2x + C$$<br><br>Final Answer: $$-\\dfrac{1}{2}\\csc 2x + C$$"
        ],
        "pi_options": [
            {
                "ans": "$$-2\\csc 2x + C$$",
                "feedback": "When applying the reverse chain rule to composite functions of the form $f(kx)$, you must divide by the derivative of the inner function (which is $k = 2$), yielding $-\\dfrac{1}{2}\\csc 2x + C$. It seems you multiplied by $2$ instead of dividing."
            },
            {
                "ans": "$$-\\dfrac{1}{2}\\cot 2x + C$$",
                "feedback": "Check your standard trigonometric integration formulas. The integral of $\\csc u \\cot u \\,\\text{d}u$ evaluates to $-\\csc u + C$, not $-\\cot u + C$."
            },
            {
                "ans": "$$\\dfrac{1}{2}\\csc 2x + C$$",
                "feedback": "Be careful with your signs during integration. Since the derivative of $\\csc u$ is $-\\csc u \\cot u$, the integral of $\\csc u \\cot u \\,\\text{d}u$ must be negative: $-\\dfrac{1}{2}\\csc 2x + C$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Reversing the Chain Rule",
            "content": "Integrating composite trigonometric functions of the form $\\csc kx \\cot kx$ requires applying the reverse chain rule. Do not forget to divide the final standard integral $-\\csc kx$ by the linear coefficient $k$ (which is $2$ in this question) to yield $-\\dfrac{1}{2}\\csc 2x + C$."
        }
    },
    {
        "id": "004234",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Integration",
        "subtopic": [
            "Trigonometric Proof",
            "Double Angle Formula",
            "Trigonometric Integration"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>1. Use the double-angle identity for $\\cos 2A$ to show that:<br>$$\\cos^2 3x = \\dfrac{1}{2}\\left(1 + \\cos 6x\\right)$$<br>2. Hence find:<br>$$\\int \\cos^2 3x \\,\\text{d}x$$",
        "steps": [
            "Write down the standard double-angle cosine identity that expresses $\\cos^2 A$ as a linear term:<br>$$\\cos 2A = 2\\cos^2 A - 1 \\implies \\cos^2 A = \\dfrac{1}{2}\\left(1 + \\cos 2A\\right)$$",
            "Substitute $A = 3x$ into the identity to complete the proof, doubling the angle from $3x$ to $6x$:<br>$$\\cos^2 3x = \\dfrac{1}{2}\\left(1 + \\cos 6x\\right)$$$",
            "Rewrite the integral using the power-reduction identity:<br>$$\\int \\cos^2 3x \\,\\text{d}x = \\int \\dfrac{1}{2}\\left(1 + \\cos 6x\\right) \\,\\text{d}x$$",
            "Integrate term-by-step. Remember to apply the reverse chain rule to the $\\cos 6x$ term, dividing it by the linear coefficient $6$:<br>\\begin{aligned} \\int \\cos^2 3x \\,\\text{d}x &= \\dfrac{1}{2} \\int \\left( 1 + \\cos 6x \\right) \\,\\text{d}x \\ &= \\dfrac{1}{2}\\left( x + \\dfrac{1}{6}\\sin 6x \\right) + C \\ &= \\dfrac{1}{2}x + \\dfrac{1}{12}\\sin 6x + C \\end{aligned}<br><br>Final Answer: $$\\dfrac{1}{2}x + \\dfrac{1}{12}\\sin 6x + C$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\dfrac{1}{2}x + 3\\sin 6x + C$$",
                "feedback": "When integrating composite trigonometric terms of the form $\\cos(kx)$, you must divide by the derivative of the inner function ($k = 6$), which yields $\\dfrac{1}{12}\\sin 6x + C$. It seems you multiplied by $6$ instead of dividing."
            },
            {
                "ans": "$$\\dfrac{1}{2}x - \\dfrac{1}{12}\\sin 6x + C$$",
                "feedback": "Check your integration signs. The derivative of $\\sin(kx)$ is positive $k\\cos(kx)$, which means the integral of $\\cos(kx)$ is positive $\\dfrac{1}{k}\\sin(kx)$. The sign of the $\\sin 6x$ term must remain positive."
            },
            {
                "ans": "$$x + \\dfrac{1}{6}\\sin 6x + C$$",
                "feedback": "Don't forget to distribute the common factor of $\\dfrac{1}{2}$ from outside the integration brackets to both terms inside during your final expansion."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Power-Reduction Substitutions",
            "content": "You cannot integrate terms like $\\cos^2 kx$ directly. You must first apply the double-angle power-reduction identity $\\cos^2 A = \\dfrac{1}{2}(1 + \\cos 2A)$. Remember that doubling the angle $3x$ yields $6x$, and do not forget to divide by $6$ when integrating the $\\cos 6x$ term."
        }
    },
    {
        "id": "004235",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Integration",
        "subtopic": [
            "Trigonometric Proof",
            "Pythagorean Identities",
            "Trigonometric Integration"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>1. Show that the expression:<br>$$\\dfrac{\\sec^2 x - 1}{\\sin^2 x}$$<br>can be written as $\\sec^2 x$.<br>2. Hence find:<br>$$\\int \\dfrac{\\sec^2 x - 1}{\\sin^2 x} \\,\\text{d}x$$",
        "steps": [
            "Substitute the standard Pythagorean identity $\\sec^2 x - 1 = \\tan^2 x$ into the numerator of the expression:<br>$$\\dfrac{\\sec^2 x - 1}{\\sin^2 x} = \\dfrac{\\tan^2 x}{\\sin^2 x}$$",
            "Use the definition $\\tan x = \\dfrac{\\sin x}{\\cos x}$ to rewrite $\\tan^2 x$, and expand the compound fraction:<br>\\begin{aligned} \\dfrac{\\tan^2 x}{\\sin^2 x} &= \\dfrac{\\sin^2 x / \\cos^2 x}{\\sin^2 x} \\ &= \\dfrac{\\sin^2 x}{\\cos^2 x \\cdot \\sin^2 x} \\end{aligned}",
            "Cancel the common term $\\sin^2 x$ from both the numerator and the denominator, and apply the definition of secant to complete the proof:<br>$$\\dfrac{1}{\\cos^2 x} = \\sec^2 x$$",
            "Rewrite the integral using the simplified identity:<br>$$\\int \\dfrac{\\sec^2 x - 1}{\\sin^2 x} \\,\\text{d}x = \\int \\sec^2 x \\,\\text{d}x$$",
            "Integrate using the standard trigonometric derivative rule, where the derivative of $\\tan x$ is exactly $\\sec^2 x$:<br>$$\\int \\sec^2 x \\,\\text{d}x = \\tan x + C$$<br><br>Final Answer: $$\\tan x + C$$"
        ],
        "pi_options": [
            {
                "ans": "$$-\\tan x + C$$",
                "feedback": "Recall that the derivative of $\\tan x$ is positive $\\sec^2 x$. Therefore, integrating $\\sec^2 x \\,\\text{d}x$ must yield a positive $\\tan x + C$, not a negative tangent."
            },
            {
                "ans": "$$\\sec x + C$$",
                "feedback": "Check your standard integration formulas. The derivative of $\\sec x$ is $\\sec x \\tan x$, but the integral of $\\sec^2 x \\,\\text{d}x$ is $\\tan x + C$."
            },
            {
                "ans": "$$\\tan x$$",
                "feedback": "While your integration steps are algebraically correct, always remember to add the constant of integration, $+ C$, to complete any indefinite integral."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Simplifying Compound Ratios",
            "content": "When confronted with mixed trigonometric ratios such as secant, tangent, and sine, convert all terms into their fundamental sine and cosine forms. This often leads to dramatic algebraic cancellations, leaving a simple, standard integrable term."
        }
    },
    {
        "id": "004236",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Integration",
        "subtopic": [
            "Integration by Parts",
            "Area Under a Curve",
            "Logarithmic Integration"
        ],
        "img": "images/p1/004236.png",
        "question": "In this question you must show detailed reasoning.<br><br>The curve $C$ has equation:<br>$$y = (c - x)\\ln x, \\quad \\text{where } c \\text{ is a constant } (c > 1)$$<br>The curve intersects the $x$-axis at the points $(1,0)$ and $(c,0)$.<br><br>Find, in terms of $c$, the exact area of the finite region bounded by the curve $C$ and the $x$-axis.",
        "steps": [
            "The curve intersects the $x$-axis at the boundaries $x = 1$ and $x = c$. To find the exact area, set up the definite integral of the function over this interval:<br>$$A = \\int_{1}^{c} (c - x)\\ln x \\,\\text{d}x$$<br>We can split this into two separate integrals to simplify the integration by parts:<br>$$A = c \\int_{1}^{c} \\ln x \\,\\text{d}x - \\int_{1}^{c} x\\ln x \\,\\text{d}x = c I_1 - I_2$$",
            "Evaluate the first integral $I_1 = \\int_{1}^{c} \\ln x \\,\\text{d}x$ using integration by parts, where $u = \\ln x$ and $v' = 1$:<br>\\begin{aligned} u = \\ln x &\\implies u' = \\dfrac{1}{x} \\ v' = 1 &\\implies v = x \\ \\int \\ln x \\,\\text{d}x &= x\\ln x - \\int 1 \\,\\text{d}x = x\\ln x - x + C \\end{aligned}",
            "Evaluate the definite limits for $I_1$ from $1$ to $c$:<br>\\begin{aligned} I_1 = \\Big[ x\\ln x - x \\Big]_{1}^{c} &= (c\\ln c - c) - (1\\ln 1 - 1) \\ &= c\\ln c - c + 1 \\end{aligned}",
            "Evaluate the second integral $I_2 = \\int_{1}^{c} x\\ln x \\,\\text{d}x$ using integration by parts, where $u = \\ln x$ and $v' = x$:<br>\\begin{aligned} u = \\ln x &\\implies u' = \\dfrac{1}{x} \\ v' = x &\\implies v = \\dfrac{x^2}{2} \\ \\int x\\ln x \\,\\text{d}x &= \\dfrac{x^2}{2}\\ln x - \\int \\dfrac{x}{2} \\,\\text{d}x = \\dfrac{x^2}{2}\\ln x - \\dfrac{x^2}{4} + C \\end{aligned}",
            "Evaluate the definite limits for $I_2$ from $1$ to $c$:<br>\\begin{aligned} I_2 = \\left[ \\dfrac{x^2}{2}\\ln x - \\dfrac{x^2}{4} \\right]_{1}^{c} &= \\left( \\dfrac{c^2}{2}\\ln c - \\dfrac{c^2}{4} \\right) - \\left( \\dfrac{1}{2}\\ln 1 - \\dfrac{1}{4} \\right) \\ &= \\dfrac{c^2}{2}\\ln c - \\dfrac{c^2}{4} + \\dfrac{1}{4} \\end{aligned}",
            "Assemble and simplify the terms to find the total area $A = c I_1 - I_2$:<br>\\begin{aligned} A &= c(c\\ln c - c + 1) - \\left( \\dfrac{c^2}{2}\\ln c - \\dfrac{c^2}{4} + \\dfrac{1}{4} \\right) \\ &= c^2\\ln c - c^2 + c - \\dfrac{c^2}{2}\\ln c + \\dfrac{c^2}{4} - \\dfrac{1}{4} \\ &= \\dfrac{c^2}{2}\\ln c - \\dfrac{3c^2}{4} + c - \\dfrac{1}{4} \\end{aligned}<br><br>Final Answer: $$\\dfrac{c^2}{2}\\ln c - \\dfrac{3c^2}{4} + c - \\dfrac{1}{4}$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\dfrac{c^2}{2}\\ln c - \\dfrac{c^2}{4} + c - \\dfrac{1}{4}$$",
                "feedback": "Check your collection of the $-c^2$ terms. Combining $-c^2 + \\dfrac{c^2}{4}$ yields $-\\dfrac{3c^2}{4}$, not $-\\dfrac{c^2}{4}$."
            },
            {
                "ans": "$$\\dfrac{c^2}{2}\\ln c - \\dfrac{3c^2}{4} + c + \\dfrac{1}{4}$$",
                "feedback": "Be very careful with your signs when subtracting $I_2$. The lower limit of $I_2$ evaluates to $-\\dfrac{1}{4}$. Since we are subtracting $I_2$, we have $-\\left(-\\dfrac{1}{4}\\right) = +\\dfrac{1}{4}$ inside the brackets, which becomes $-\\dfrac{1}{4}$ when the negative sign is distributed."
            },
            {
                "ans": "$$c^2\\ln c - \\dfrac{3c^2}{4} + c - \\dfrac{1}{4}$$",
                "feedback": "Don't forget to combine the $\\ln c$ terms. We have $c^2\\ln c - \\dfrac{c^2}{2}\\ln c$, which simplifies to $\\dfrac{c^2}{2}\\ln c$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Tracking Constants in Integration",
            "content": "When integrating products involving algebraic terms and logarithms, such as $\\int (c - x)\\ln x \\,\\text{d}x$, perform the integration by parts on the general components first. Carefully track the constant $c$ during subtraction of the upper and lower limits to avoid sign errors."
        }
    },
    {
        "id": "004237",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Integration",
        "subtopic": [
            "Integration by Parts",
            "Area Under a Curve",
            "Logarithmic Integration"
        ],
        "img": "images/p1/004237.png",
        "question": "In this question you must show detailed reasoning.<br><br>The curve has equation $y = 3x^2 \\ln x$. The finite region $R$ is bounded by the curve, the $x$-axis, and the vertical lines $x = 1$ and $x = e$.<br><br>Find the exact area of the region $R$.",
        "steps": [
            "Set up the definite integral for the area bounded by the curve, $x = 1$, and $x = e$:<br>$$A = \\int_{1}^{e} 3x^2 \\ln x \\,\\text{d}x = 3 \\int_{1}^{e} x^2 \\ln x \\,\\text{d}x$$",
            "Evaluate the indefinite integral $\\int x^2 \\ln x \\,\\text{d}x$ using integration by parts, where $u = \\ln x$ and $v' = x^2$:<br>\\begin{aligned} u = \\ln x &\\implies u' = \\dfrac{1}{x} \\ v' = x^2 &\\implies v = \\dfrac{x^3}{3} \\ \\int x^2 \\ln x \\,\\text{d}x &= \\dfrac{x^3}{3}\\ln x - \\int \\dfrac{x^2}{3} \\,\\text{d}x \\ &= \\dfrac{x^3}{3}\\ln x - \\dfrac{x^3}{9} + C \\end{aligned}",
            "Multiply the indefinite integral by the coefficient $3$ before substituting the limits:<br>$$3 \\int x^2 \\ln x \\,\\text{d}x = 3\\left( \\dfrac{x^3}{3}\\ln x - \\dfrac{x^3}{9} \\right) = x^3\\ln x - \\dfrac{x^3}{3}$$",
            "Evaluate the definite integral using the upper limit $x = e$ and the lower limit $x = 1$:<br>\\begin{aligned} A = \\left[ x^3\\ln x - \\dfrac{x^3}{3} \\right]_{1}^{e} &= \\left( e^3\\ln e - \\dfrac{e^3}{3} \\right) - \\left( 1^3\\ln 1 - \\dfrac{1}{3} \\right) \\ &= \\left( e^3 - \\dfrac{e^3}{3} \\right) - \\left( 0 - \\dfrac{1}{3} \\right) \\ &= \\dfrac{2e^3}{3} + \\dfrac{1}{3} \\ &= \\dfrac{2e^3 + 1}{3} \\end{aligned}<br><br>Final Answer: $$\\dfrac{2e^3 + 1}{3}$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\dfrac{2e^3 - 1}{3}$$",
                "feedback": "Check your evaluation of the lower limit. The lower limit is $x = 1$, which gives $-\\dfrac{1}{3}$. Since we subtract the lower limit, this becomes $-\\left(-\\dfrac{1}{3}\\right) = +\\dfrac{1}{3}$. This results in addition, not subtraction."
            },
            {
                "ans": "$$\\dfrac{2e^3 + 1}{9}$$",
                "feedback": "You may have forgotten to multiply by the coefficient $3$ from the original equation. The integral of $x^2 \\ln x$ is indeed $\\dfrac{2e^3 + 1}{9}$, but multiplying by $3$ yields $\\dfrac{2e^3 + 1}{3}$."
            },
            {
                "ans": "$$e^3\\ln e - \\dfrac{e^3}{3}$$",
                "feedback": "This is only the evaluation at the upper limit $x = e$. You must also subtract the evaluation at the lower limit $x = 1$ to find the complete area of the region."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Limits of Integration with e",
            "content": "When evaluating definite integrals with limits containing $e$, use the standard properties $\\ln e = 1$ and $\\ln 1 = 0$ to simplify your calculations early. This prevents cluttered algebraic terms and makes it easier to combine fractions."
        }
    },
    {
        "id": "004238",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Integration",
        "subtopic": [
            "Integration by Parts",
            "Area Under a Curve",
            "Exponential Integration"
        ],
        "img": "images/p1/004238.png",
        "question": "In this question you must show detailed reasoning.<br><br>The curve has equation:<br>$$y = (x - 2)e^{-x}$$<br>1. Show that the curve intersects the $x$-axis at the point $(2,0)$.<br>2. The finite region $R$ is bounded by the curve, the $x$-axis, and the vertical line $x = 4$. Find the exact area of the region $R$.",
        "steps": [
            "Find the $x$-intercept by setting $y = 0$:<br>$$(x - 2)e^{-x} = 0$$<br>Since $e^{-x} \\ne 0$ for all real $x$, we must have:<br>$$x - 2 = 0 \\implies x = 2$$<br>This confirms the curve intersects the $x$-axis at the point $(2,0)$.",
            "The finite region $R$ lies between $x = 2$ and $x = 4$. Set up the definite integral for the area:<br>$$A = \\int_{2}^{4} (x - 2)e^{-x} \\,\\text{d}x$$",
            "Evaluate the indefinite integral $\\int (x - 2)e^{-x} \\,\\text{d}x$ using integration by parts, where $u = x - 2$ and $v' = e^{-x}$:<br>\\begin{aligned} u = x - 2 &\\implies u' = 1 \\ v' = e^{-x} &\\implies v = -e^{-x} \\ \\int (x - 2)e^{-x} \\,\\text{d}x &= (x - 2)\\left(-e^{-x}\\right) - \\int \\left(-e^{-x}\\right) \\,\\text{d}x \\ &= -(x - 2)e^{-x} - e^{-x} + C \\ &= -(x - 1)e^{-x} + C \\end{aligned}",
            "Evaluate the definite integral using the upper limit $x = 4$ and the lower limit $x = 2$:<br>\\begin{aligned} A = \\Big[ -(x - 1)e^{-x} \\Big]_{2}^{4} &= \\left( -(4 - 1)e^{-4} \\right) - \\left( -(2 - 1)e^{-2} \\right) \\ &= -3e^{-4} - \\left( -e^{-2} \\right) \\ &= e^{-2} - 3e^{-4} \\end{aligned}<br><br>Final Answer: $$e^{-2} - 3e^{-4}$$"
        ],
        "pi_options": [
            {
                "ans": "$$-3e^{-4} - e^{-2}$$",
                "feedback": "Check your signs at the lower limit. The lower limit is $x = 2$, which evaluates to $-1e^{-2} = -e^{-2}$. Since we subtract the lower limit, this becomes $-\\left(-e^{-2}\\right) = +e^{-2}$."
            },
            {
                "ans": "$$e^{-2} + 3e^{-4}$$",
                "feedback": "Check the evaluation of the upper limit $x = 4$. Substituting $x = 4$ into $-(x-1)e^{-x}$ yields $-3e^{-4}$. The term must remain negative."
            },
            {
                "ans": "$$(x - 1)e^{-x}$$",
                "feedback": "This is only the indefinite integral expression. You must evaluate this expression at the limits $x = 4$ and $x = 2$ to find the exact numerical area."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Tracking Negative Exponents",
            "content": "When integrating expressions of the form $(x - a)e^{-x}$ by parts, the derivative of $e^{-x}$ introduces a negative sign. Consistently group and factorise the $e^{-x}$ terms at each stage of the integration to prevent simple algebraic slips."
        }
    },
    {
        "id": "004239",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Integration",
        "subtopic": [
            "Integration by Parts",
            "Area Under a Curve",
            "Trigonometric Integration"
        ],
        "img": "images/p1/004239.png",
        "question": "In this question you must show detailed reasoning.<br><br>The curve has equation $y = x \\cos x$. The finite region $R$ is bounded by the curve, the $x$-axis, and the vertical lines $x = 0$ and $x = \\dfrac{1}{2}\\pi$.<br><br>Find the exact area of the region $R$.",
        "steps": [
            "Set up the definite integral for the area under the curve from $x = 0$ to $x = \\dfrac{1}{2}\\pi$:<br>$$A = \\int_{0}^{\\frac{1}{2}\\pi} x \\cos x \\,\\text{d}x$$",
            "Evaluate the indefinite integral $\\int x \\cos x \\,\\text{d}x$ using integration by parts, where $u = x$ and $v' = \\cos x$:<br>\\begin{aligned} u = x &\\implies u' = 1 \\ v' = \\cos x &\\implies v = \\sin x \\ \\int x \\cos x \\,\\text{d}x &= x\\sin x - \\int \\sin x \\,\\text{d}x \\ &= x\\sin x + \\cos x + C \\end{aligned}",
            "Evaluate the definite integral using the upper limit $x = \\dfrac{1}{2}\\pi$ and the lower limit $x = 0$:<br>\\begin{aligned} A = \\Big[ x\\sin x + \\cos x \\Big]_{0}^{\\frac{1}{2}\\pi} &= \\left( \\dfrac{1}{2}\\pi\\sin\\left(\\dfrac{1}{2}\\pi\\right) + \\cos\\left(\\dfrac{1}{2}\\pi\\right) \\right) - \\left( 0\\sin 0 + \\cos 0 \\right) \\ &= \\left( \\dfrac{1}{2}\\pi(1) + 0 \\right) - \\left( 0 + 1 \\right) \\ &= \\dfrac{1}{2}\\pi - 1 \\end{aligned}<br><br>Final Answer: $$\\dfrac{1}{2}\\pi - 1$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\dfrac{1}{2}\\pi + 1$$",
                "feedback": "Check your evaluation of the lower limit. The lower limit is $x = 0$, which evaluates to $\\cos 0 = 1$. Since we subtract the lower limit, this must be subtracted from the upper limit, yielding $\\dfrac{1}{2}\\pi - 1$, not $\\dfrac{1}{2}\\pi + 1$."
            },
            {
                "ans": "$$\\dfrac{1}{2}\\pi$$",
                "feedback": "You may have forgotten to evaluate the lower limit or assumed that substituting $x = 0$ into $x\\sin x + \\cos x$ yields $0$. While $0\\sin 0 = 0$, the term $\\cos 0$ is equal to $1$, which must be subtracted."
            },
            {
                "ans": "$$x\\sin x - \\cos x + C$$",
                "feedback": "Check your integration steps. The derivative of $\\sin x$ is $\\cos x$, so integrating $-\\sin x$ gives positive $\\cos x$, not negative $\\cos x$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Trigonometric Integration by Parts",
            "content": "When integrating $x \\cos x$ by parts, ensure you select $u = x$ to reduce the degree of the polynomial term, and $v' = \\cos x$ to integrate. This reduces the problem to a basic standard integral, $\\int \\sin x \\,\\text{d}x = -\\cos x$, which is straightforward to evaluate."
        }
    },
    {
        "id": "004240",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Integration",
        "subtopic": [
            "Equations of Tangents",
            "Integration by Parts",
            "Area Under a Curve"
        ],
        "img": "images/p1/004240.png",
        "question": "In this question you must show detailed reasoning.<br><br>The curve has equation $y = \\ln x$ for $x > 0$.<br><br>1. Find the equation of the tangent to the curve at the point $P(e, 1)$.<br>2. Show that this tangent passes through the origin $(0,0)$.<br>3. Find the exact area of the region bounded by the curve $y = \\ln x$, the tangent at $P$, and the $x$-axis.",
        "steps": [
            "Find the derivative of $y = \\ln x$ to determine the gradient at $P$:<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{1}{x}$$<br>At $x = e$, the gradient of the tangent is $m = \\dfrac{1}{e}$. Use the point-gradient formula with $P(e, 1)$:<br>$$\\begin{aligned} y - 1 &= \\dfrac{1}{e}(x - e) \\ y &= \\dfrac{1}{e}x - 1 + 1 \\ y &= \\dfrac{x}{e} \\end{aligned}$$",
            "Show that the tangent passes through the origin by substituting $x = 0$ into its equation:<br>$$y = \\dfrac{0}{e} = 0$$<br>This confirms that the tangent passes through the origin $(0,0)$.",
            "Set up the area of the region. The tangent line is $y = \\dfrac{x}{e}$ and the curve is $y = \\ln x$. The $x$-axis is $y = 0$.<br>The region is bounded above by the tangent from $x = 0$ to $x = e$. Underneath, the lower boundary switches at $x = 1$:<br>• From $x = 0$ to $x = 1$, the lower boundary is the $x$-axis ($y = 0$).<br>• From $x = 1$ to $x = e$, the lower boundary is the curve ($y = \\ln x$).<br>Therefore, the area of the region is most easily calculated as the area under the tangent line minus the area under the curve:<br>$$A = \\int_{0}^{e} \\dfrac{x}{e} \\,\\text{d}x - \\int_{1}^{e} \\ln x \\,\\text{d}x$$",
            "Evaluate the first part, which is a right-angled triangle of base $e$ and height $1$:<br>$$\\int_{0}^{e} \\dfrac{x}{e} \\,\\text{d}x = \\left[ \\dfrac{x^2}{2e} \\right]_{0}^{e} = \\dfrac{e^2}{2e} - 0 = \\dfrac{e}{2}$$",
            "Evaluate the second part, $\\int_{1}^{e} \\ln x \\,\\text{d}x$, using integration by parts:<br>\\begin{aligned} \\int_{1}^{e} \\ln x \\,\\text{d}x &= \\Big[ x\\ln x - x \\Big]_{1}^{e} \\ &= (e\\ln e - e) - (1\\ln 1 - 1) \\ &= (e - e) - (0 - 1) \\ &= 1 \\end{aligned}",
            "Subtract the area under the curve from the area under the tangent to find the exact area of the region:<br>$$A = \\dfrac{e}{2} - 1$$<br><br>Final Answer: $$y = \\dfrac{x}{e}, \\quad \\text{Area} = \\dfrac{e}{2} - 1$$"
        ],
        "pi_options": [
            {
                "ans": "$$y = \\dfrac{x}{e}, \\quad \\text{Area} = 1 - \\dfrac{e}{2} + \\dfrac{1}{e}$$",
                "feedback": "Be very careful with your boundary subtraction order. On the interval $[1, e]$, the tangent line $y = \\dfrac{x}{e}$ lies strictly above the curve $y = \\ln x$. Subtracting the lower curve from the upper curve is essential to get a positive, geometrically valid area."
            },
            {
                "ans": "$$y = \\dfrac{x}{e}, \\quad \\text{Area} = \\dfrac{e}{2}$$",
                "feedback": "You calculated the area under the tangent line, but you forgot to subtract the area under the curve $y = \\ln x$ from $x = 1$ to $x = e$."
            },
            {
                "ans": "$$y = \\dfrac{x}{e}, \\quad \\text{Area} = \\dfrac{e}{2} + 1$$",
                "feedback": "Check your signs. The area under the curve is subtracted from the area under the tangent. This must result in $\\dfrac{e}{2} - 1$, not $\\dfrac{e}{2} + 1$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Boundary Order in Area Integrals",
            "content": "When finding the area bounded by multiple curves, always determine which curve is higher over each interval. On the interval $[1, e]$, the tangent line $y = \\dfrac{x}{e}$ lies strictly above the curve $y = \\ln x$. Subtracting the lower curve from the upper curve is essential to obtain a positive, geometrically valid area."
        }
    },
    {
        "id": "004241",
        "board": "OCR MEI",
        "level": "AS",
        "major_area": "Coordinate Geometry",
        "topic": "Circles",
        "subtopic": [
            "Equations of Circles",
            "Equations of Tangents",
            "Sectors of Circles"
        ],
        "img": "images/p1/004241.png",
        "question": "In this question you must show detailed reasoning.<br><br>The circle $C$ has equation:<br>$$(x - 2)^2 + (y - 1)^2 = 25$$<br>The point $A(6, 4)$ lies on the circle. The tangent to the circle at $A$ intersects the line $4y = 3x - 27$ at the point $D$.<br><br>1. Write down the coordinates of $C$, the centre of the circle.<br>2. Show that the line $4y = 3x - 27$ is a tangent to the circle, and find the coordinates of $B$, the point where this line touches the circle.<br>3. Prove that $ADBC$ is a square.<br>4. The point $E$ is the lowest point on the circle. Find the exact area of the sector $ECB$.",
        "steps": [
            "Identify the centre and the radius of the circle directly from its standard form $(x - x_0)^2 + (y - y_0)^2 = R^2$:<br>$$\\text{Centre is } C(2, 1) \\quad \\text{and} \\quad \\text{radius is } R = 5$$",
            "Write the line equation in standard linear form $ax + by + c = 0$:<br>$$4y = 3x - 27 \\implies 3x - 4y - 27 = 0$$<br>Show the line is a tangent by finding the perpendicular distance from the centre $C(2,1)$ to this line and verifying it equals the radius:<br>$$\\text{Distance} = \\dfrac{|3(2) - 4(1) - 27|}{\\sqrt{3^2 + (-4)^2}} = \\dfrac{|6 - 4 - 27|}{5} = \\dfrac{25}{5} = 5$$<br>Since the perpendicular distance is exactly $5$ (equal to the radius), the line is indeed a tangent.",
            "To find the point of contact $B$, solve the system of equations:<br>\\begin{aligned} (x - 2)^2 + (y - 1)^2 &= 25 \\ y &= \\dfrac{3x - 27}{4} \\end{aligned}<br>Substitute the expression for $y$ into the circle equation and multiply by $16$ to clear the denominator:<br>\\begin{aligned} (x - 2)^2 + \\left( \\dfrac{3x - 31}{4} \\right)^2 &= 25 \\ 16(x - 2)^2 + (3x - 31)^2 &= 400 \\ 16\\left(x^2 - 4x + 4\\right) + \\left(9x^2 - 186x + 961\\right) &= 400 \\ 25x^2 - 250x + 1025 &= 400 \\ 25x^2 - 250x + 625 &= 0 \\ x^2 - 10x + 25 &= 0 \\ (x - 5)^2 &= 0 \\implies x = 5 \\end{aligned}",
            "Substitute $x = 5$ back into the line equation to find the $y$-coordinate of $B$:<br>$$y = \\dfrac{3(5) - 27}{4} = \\dfrac{15 - 27}{4} = -3$$<br>So, the point of contact is $B(5, -3)$.",
            "To prove $ADBC$ is a square, find the equation of the tangent at $A(6,4)$. The gradient of the radius $CA$ is:<br>$$m_{CA} = \\dfrac{4 - 1}{6 - 2} = \\dfrac{3}{4}$$<br>Since the tangent is perpendicular to the radius, its gradient is $m_{\\text{tangent}} = -\\dfrac{4}{3}$. Use the point-gradient formula with $A(6,4)$ to find its equation:<br>$$y - 4 = -\\dfrac{4}{3}(x - 6) \\implies y = -\\dfrac{4}{3}x + 12$$",
            "Find the intersection point $D$ of the two tangents by substituting the equation of the tangent at $A$ into the tangent at $B$:<br>\\begin{aligned} 4\\left( -\\dfrac{4}{3}x + 12 \\right) &= 3x - 27 \\ -\\dfrac{16}{3}x + 48 &= 3x - 27 \\ -16x + 144 &= 9x - 81 \\ -25x &= -225 \\implies x = 9 \\ y &= -\\dfrac{4}{3}(9) + 12 = 0 \\end{aligned}<br>This gives the coordinates of $D(9, 0)$.",
            "Calculate all four side lengths using the distance formula:<br>\\begin{aligned} |AD| &= \\sqrt{(9 - 6)^2 + (0 - 4)^2} = \\sqrt{9 + 16} = 5 \\ |DB| &= \\sqrt{(5 - 9)^2 + (-3 - 0)^2} = \\sqrt{16 + 9} = 5 \\ |BC| &= \\sqrt{(2 - 5)^2 + (1 - (-3))^2} = \\sqrt{9 + 16} = 5 \\ |CA| &= \\sqrt{(6 - 2)^2 + (4 - 1)^2} = \\sqrt{16 + 9} = 5 \\end{aligned}<br>Since all four sides are equal to $5$, and the adjacent sides are perpendicular (the product of the tangent and radius gradients $m_{AD} \\cdot m_{DB} = -\\dfrac{4}{3} \\cdot \\dfrac{3}{4} = -1$), $ADBC$ is a square.",
            "Find the coordinates of $E$, the lowest point of the circle, by subtracting the radius from the $y$-coordinate of the centre:<br>$$E = (2, 1 - 5) = (2, -4)$$<br>Find the angle $\\theta = \\angle ECB$ using the dot product of vectors $\\mathbf{CE}$ and $\\mathbf{CB}$:<br>\\begin{aligned} \\mathbf{CE} &= \\begin{pmatrix} 2 - 2 \\ -4 - 1 \\end{pmatrix} = \\begin{pmatrix} 0 \\ -5 \\end{pmatrix} \\ \\mathbf{CB} &= \\begin{pmatrix} 5 - 2 \\ -3 - 1 \\end{pmatrix} = \\begin{pmatrix} 3 \\ -4 \\end{pmatrix} \\ \\mathbf{CE} \\cdot \\mathbf{CB} &= 0(3) + (-5)(-4) = 20 \\ \\cos \\theta &= \\dfrac{20}{|\\mathbf{CE}||\\mathbf{CB}|} = \\dfrac{20}{5 \\cdot 5} = \\dfrac{4}{5} \\ \\theta &= \\arccos\\left(\\dfrac{4}{5}\\right) \\end{aligned}",
            "Calculate the exact area of the sector $ECB$ using the sector area formula, $A = \\dfrac{1}{2}r^2 \\theta$:<br>$$\\text{Area} = \\dfrac{1}{2}(25)\\arccos\\left(\\dfrac{4}{5}\\right) = \\dfrac{25}{2}\\arccos\\left(\\dfrac{4}{5}\\right)$$<br><br>Final Answer: $$C(2,1), \\quad B(5,-3), \\quad \\text{Area} = \\dfrac{25}{2}\\arccos\\left(\\dfrac{4}{5}\\right)$$"
        ],
        "pi_options": [
            {
                "ans": "$$C(2,1), \\quad B(5,-3), \\quad \\text{Area} = 25\\arccos\\left(\\dfrac{4}{5}\\right)$$",
                "feedback": "Check your sector area formula. The formula is $\\dfrac{1}{2}r^2 \\theta$. Since $r = 5$, $r^2 = 25$, which yields $\\dfrac{25}{2}\\arccos\\left(\\dfrac{4}{5}\\right)$, not $25\\arccos\\left(\\dfrac{4}{5}\\right)$."
            },
            {
                "ans": "$$C(2,1), \\quad B(5,3), \\quad \\text{Area} = \\dfrac{25}{2}\\arccos\\left(\\dfrac{4}{5}\\right)$$",
                "feedback": "Check your $y$-coordinate of the point of contact $B$. Substituting $x = 5$ into $y = \\dfrac{3x - 27}{4}$ yields $y = \\dfrac{15 - 27}{4} = -3$, not $+3$."
            },
            {
                "ans": "$$C(-2,-1), \\quad B(5,-3), \\quad \\text{Area} = \\dfrac{25}{2}\\arccos\\left(\\dfrac{4}{5}\\right)$$",
                "feedback": "Be careful with signs when writing down the centre from the circle equation $(x - 2)^2 + (y - 1)^2 = 25$. This corresponds to a centre of $(2, 1)$, not $(-2, -1)$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Geometry of Tangent Polygons",
            "content": "When proving that a quadrilateral like $ADBC$ formed by two adjacent radii and two tangents is a square, show two conditions: first, that all four sides are equal to the radius ($5$ in this question), and second, that adjacent sides are perpendicular (dot product of slopes is $-1$). This provides a mathematically complete proof without leaving any logical gaps."
        }
    },
    {
        "id": "004242",
        "board": "OCR MEI",
        "level": "AS",
        "major_area": "Coordinate Geometry",
        "topic": "Circles",
        "subtopic": [
            "Equations of Circles",
            "Equations of Tangents"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A circle has equation:<br>$$(x - 1)^2 + (y - 2)^2 = 5$$<br>1. Show that the line $y = 2x - 5$ is a tangent to the circle.<br>2. Find the coordinates of the point of contact, $P$, where this line touches the circle.",
        "steps": [
            "Identify the centre and the radius of the circle directly from its standard form $(x - x_0)^2 + (y - y_0)^2 = R^2$:<br>$$\\text{Centre is } (1, 2) \\quad \\text{and} \\quad \\text{radius is } R = \\sqrt{5}$$",
            "Write the line equation in standard linear form $ax + by + c = 0$:<br>$$y = 2x - 5 \\implies 2x - y - 5 = 0$$<br>To show the line is a tangent, calculate the perpendicular distance from the centre $(1,2)$ to the line and check if it equals the radius:<br>$$\\text{Distance} = \\dfrac{|2(1) - 2 - 5|}{\\sqrt{2^2 + (-1)^2}} = \\dfrac{|2 - 2 - 5|}{\\sqrt{5}} = \\dfrac{5}{\\sqrt{5}} = \\sqrt{5}$$<br>Since the perpendicular distance from the centre to the line is exactly equal to the radius, the line is indeed a tangent to the circle.",
            "To find the point of contact $P$, substitute $y = 2x - 5$ into the equation of the circle:<br>\\begin{aligned} (x - 1)^2 + (2x - 5 - 2)^2 &= 5 \\ (x - 1)^2 + (2x - 7)^2 &= 5 \\ \\left(x^2 - 2x + 1\\right) + \\left(4x^2 - 28x + 49\\right) &= 5 \\ 5x^2 - 30x + 50 &= 5 \\ 5x^2 - 30x + 45 &= 0 \\end{aligned}",
            "Divide the quadratic equation by $5$ and solve for $x$:<br>$$\\begin{aligned} x^2 - 6x + 9 &= 0 \\ (x - 3)^2 &= 0 \\implies x = 3 \\end{aligned}$$<br>Since there is a repeated root at $x = 3$, it confirms there is exactly one point of contact, supporting the proof of tangency.",
            "Substitute $x = 3$ back into the line equation to find the $y$-coordinate of $P$:<br>$$y = 2(3) - 5 = 1$$<br>So, the coordinates of the point of contact are $P(3, 1)$.<br><br>Final Answer: $$P(3,1)$$"
        ],
        "pi_options": [
            {
                "ans": "$$P(3,-1)$$",
                "feedback": "Check your substitution in the final step. Substituting $x = 3$ into the tangent line equation yields $y = 2(3) - 5 = 1$, not $-1$."
            },
            {
                "ans": "$$P(-3,1)$$",
                "feedback": "Check your quadratic factorization. Dividing $5x^2 - 30x + 45 = 0$ by $5$ yields $x^2 - 6x + 9 = 0 \\implies (x - 3)^2 = 0$, which gives a positive root $x = 3$, not $x = -3$."
            },
            {
                "ans": "$$P(3,5)$$",
                "feedback": "Make sure you substitute $x = 3$ into the actual equation of the tangent line ($y = 2x - 5$), rather than accidentally adding the constants."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Proving Tangency via Discriminant or Distance",
            "content": "To prove a line is a tangent to a circle, you have two highly efficient methods: either show the perpendicular distance from the centre to the line is equal to the radius, or substitute the line into the circle and show the resulting quadratic has a discriminant of zero ($b^2 - 4ac = 0$). Showing both steps is excellent practice for full-mark reasoning."
        }
    },
    {
        "id": "004243",
        "board": "OCR MEI",
        "level": "AS",
        "major_area": "Coordinate Geometry",
        "topic": "Circles",
        "subtopic": [
            "Equations of Circles",
            "Equations of Tangents",
            "Diameters of Circles"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The points $A(1, 2)$ and $B(7, 10)$ are the endpoints of a diameter of a circle $C$.<br><br>1. Find the coordinates of the centre of the circle.<br>2. Find the exact radius of the circle, and hence write down the equation of the circle in the form $(x - a)^2 + (y - b)^2 = r^2$.<br>3. Find the equation of the tangent to the circle at the point $B$, giving your answer in the form $ax + by + c = 0$, where $a, b, c$ are integers.",
        "steps": [
            "The centre of the circle is the midpoint of the diameter $AB$. Use the midpoint formula:<br>$$\\text{Centre} = \\left( \\dfrac{1 + 7}{2}, \\, \\dfrac{2 + 10}{2} \\right) = (4, 6)$$",
            "The radius $r$ is the distance from the centre $(4,6)$ to either endpoint, say $A(1,2)$. Use the distance formula:<br>$$\\begin{aligned} r &= \\sqrt{(1 - 4)^2 + (2 - 6)^2} \\ &= \\sqrt{(-3)^2 + (-4)^2} \\ &= \\sqrt{9 + 16} = 5 \\end{aligned}$$",
            "Write down the equation of the circle using the centre $(4,6)$ and radius $r = 5$:<br>$$(x - 4)^2 + (y - 6)^2 = 25$$",
            "To find the tangent at $B(7,10)$, calculate the gradient of the radius $CB$:<br>$$m_{CB} = \\dfrac{10 - 6}{7 - 4} = \\dfrac{4}{3}$$<br>Since the tangent is perpendicular to the radius at the point of contact, its gradient is the negative reciprocal:<br>$$m_{\\text{tangent}} = -\\dfrac{3}{4}$$",
            "Use the point-gradient formula with $B(7,10)$ to obtain the tangent equation and rearrange it into integer standard form:<br>$$\\begin{aligned} y - 10 &= -\\dfrac{3}{4}(x - 7) \\ 4(y - 10) &= -3(x - 7) \\ 4y - 40 &= -3x + 21 \\ 3x + 4y - 61 &= 0 \\end{aligned}$$<br><br>Final Answer: $$(x - 4)^2 + (y - 6)^2 = 25, \\quad 3x + 4y - 61 = 0$$"
        ],
        "pi_options": [
            {
                "ans": "$$(x - 4)^2 + (y - 6)^2 = 25, \\quad 3x - 4y + 19 = 0$$",
                "feedback": "Check your tangent gradient sign. The radius gradient is $m_{CB} = \\dfrac{4}{3}$, which means your tangent gradient must be the negative reciprocal, $m_{\\text{tangent}} = -\\dfrac{3}{4}$, not positive $\\dfrac{3}{4}$."
            },
            {
                "ans": "$$(x - 4)^2 + (y - 6)^2 = 25, \\quad 4x + 3y - 68 = 0$$",
                "feedback": "Check that you did not swap your rise and run in the reciprocal gradient calculation. The perpendicular gradient to $\\dfrac{4}{3}$ is $-\\dfrac{3}{4}$, not $-\\dfrac{4}{3}$."
            },
            {
                "ans": "$$(x + 4)^2 + (y + 6)^2 = 25, \\quad 3x + 4y - 61 = 0$$",
                "feedback": "Be careful with signs in the circle equation. A centre of $(4, 6)$ yields the equation $(x - 4)^2 + (y - 6)^2 = 25$, not $(x + 4)^2 + (y + 6)^2 = 25$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Finding Tangents from Diameters",
            "content": "When finding the equation of a tangent at the endpoint of a diameter, find the gradient of the radius joining the centre to that point first. Since the tangent is always perpendicular to the radius at the point of contact, taking the negative reciprocal of the radius gradient gives you the exact tangent gradient instantly."
        }
    },
    {
        "id": "004244",
        "board": "OCR MEI",
        "level": "AS",
        "major_area": "Coordinate Geometry",
        "topic": "Circles",
        "subtopic": [
            "Equations of Circles",
            "Intersections of Lines and Circles",
            "Chord Lengths"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A circle has the equation:<br>$$(x - 2)^2 + (y - 3)^2 = 25$$<br>1. Show that the line $y = x + 2$ intersects the circle at two distinct points, $P$ and $Q$.<br>2. Find the coordinates of $P$ and $Q$.<br>3. Calculate the exact length of the chord $PQ$.",
        "steps": [
            "Substitute $y = x + 2$ into the circle equation to find the $x$-coordinates of the intersection points:<br>$$\\begin{aligned} (x - 2)^2 + (x + 2 - 3)^2 &= 25 \\ (x - 2)^2 + (x - 1)^2 &= 25 \\ \\left(x^2 - 4x + 4\\right) + \\left(x^2 - 2x + 1\\right) &= 25 \\ 2x^2 - 6x + 5 &= 25 \\ 2x^2 - 6x - 20 &= 0 \\end{aligned}$$",
            "Divide by $2$ to simplify the quadratic equation:<br>$$x^2 - 3x - 10 = 0$$<br>Calculate the discriminant ($b^2 - 4ac$) to show there are two distinct real roots (intersections):<br>$$\\text{Discriminant} = (-3)^2 - 4(1)(-10) = 9 + 40 = 49$$<br>Since the discriminant $49 > 0$, the equation has two real roots, proving the line intersects the circle at two distinct points.",
            "Solve the quadratic equation by factorisation:<br>$$\\begin{aligned} (x - 5)(x + 2) &= 0 \\ x = 5 \\quad &\\text{or} \\quad x = -2 \\end{aligned}$$",
            "Substitute the $x$-values back into the line equation $y = x + 2$ to find the corresponding $y$-coordinates:<br>\\begin{aligned} \\text{For } x = 5: \\quad y &= 5 + 2 = 7 \\implies P(5, 7) \\ \\text{For } x = -2: \\quad y &= -2 + 2 = 0 \\implies Q(-2, 0) \\end{aligned}",
            "Calculate the exact length of the chord $PQ$ using the distance formula:<br>$$\\begin{aligned} |PQ| &= \\sqrt{(5 - (-2))^2 + (7 - 0)^2} \\ &= \\sqrt{7^2 + 7^2} \\ &= \\sqrt{49 + 49} \\ &= \\sqrt{98} = 7\\sqrt{2} \\end{aligned}$$<br><br>Final Answer: $$P(5,7), \\, Q(-2,0), \\, |PQ| = 7\\sqrt{2}$$"
        ],
        "pi_options": [
            {
                "ans": "$$P(5,7), \\, Q(-2,0), \\, |PQ| = 98$$",
                "feedback": "Don't forget to take the square root of the sum of squares when using the distance formula. The length of the chord is $\\sqrt{98} = 7\\sqrt{2}$, not $98$."
            },
            {
                "ans": "$$P(5,7), \\, Q(-2,0), \\, |PQ| = 14$$",
                "feedback": "Check your simplification of $\\sqrt{98}$. $\\sqrt{98} = \\sqrt{49 \\cdot 2} = 7\\sqrt{2}$. It seems you may have mistakenly evaluated it as $\\sqrt{196} = 14$."
            },
            {
                "ans": "$$P(5,7), \\, Q(2,4), \\, |PQ| = 3\\sqrt{2}$$",
                "feedback": "Check your signs when solving the quadratic $x^2 - 3x - 10 = 0$. The roots are $x = 5$ and $x = -2$, not $x = 5$ and $x = 2$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Exact Chord Lengths",
            "content": "When calculating chord lengths between intersection points $P(x_1, y_1)$ and $Q(x_2, y_2)$ of a line with gradient $m = 1$, the horizontal and vertical differences are equal: $|x_1 - x_2| = |y_1 - y_2| = d$. The distance formula simplifies to $d\\sqrt{1 + m^2} = 7\\sqrt{1 + 1} = 7\\sqrt{2}$, saving valuable time in examinations."
        }
    },
    {
        "id": "004245",
        "board": "OCR MEI",
        "level": "AS",
        "major_area": "Coordinate Geometry",
        "topic": "Circles",
        "subtopic": [
            "Equations of Circles",
            "Equations of Tangents",
            "Completed Square Form"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The circle $C$ has equation:<br>$$x^2 + y^2 - 6x - 8y = 0$$<br>1. Find the coordinates of the centre and the exact radius of the circle $C$.<br>2. Given that the line $y = 2x + c$ is a tangent to the circle, find the two possible exact values of the constant $c$.",
        "steps": [
            "Complete the square for both the $x$ and $y$ terms in the general equation $x^2 + y^2 - 6x - 8y = 0$:<br>$$\\begin{aligned} \\left(x^2 - 6x\\right) + \\left(y^2 - 8y\\right) &= 0 \\ \\left((x - 3)^2 - 9\\right) + \\left((y - 4)^2 - 16\\right) &= 0 \\ (x - 3)^2 + (y - 4)^2 &= 25 \\end{aligned}$$<br>This shows that the centre is $C(3, 4)$ and the radius is $R = \\sqrt{25} = 5$.",
            "Write the tangent line equation $y = 2x + c$ in standard form $ax + by + c = 0$:<br>$$2x - y + c = 0$$",
            "Set the perpendicular distance from the centre $C(3, 4)$ to this line equal to the radius $5$:<br>$$\\dfrac{|2(3) - 4 + c|}{\\sqrt{2^2 + (-1)^2}} = 5$$",
            "Simplify the equation to solve for $c$:<br>$$\\begin{aligned} \\dfrac{|2 + c|}{\\sqrt{5}} &= 5 \\ |2 + c| &= 5\\sqrt{5} \\end{aligned}$$<br>This gives two possible equations:<br>$$2 + c = 5\\sqrt{5} \\quad \\text{or} \\quad 2 + c = -5\\sqrt{5}$$",
            "Isolate $c$ to find the two possible exact values:<br>$$c = -2 + 5\\sqrt{5} \\quad \\text{or} \\quad c = -2 - 5\\sqrt{5}$$<br><br>Final Answer: $$C(3,4), \\, R = 5, \\, c = -2 \\pm 5\\sqrt{5}$$"
        ],
        "pi_options": [
            {
                "ans": "$$C(3,4), \\, R = 5, \\, c = 2 \\pm 5\\sqrt{5}$$",
                "feedback": "Check your signs in the final step. Solving $|2 + c| = 5\\sqrt{5}$ means $2 + c = \\pm 5\\sqrt{5}$, which subtracts $2$ from both sides, yielding $c = -2 \\pm 5\\sqrt{5}$, not $+2$."
            },
            {
                "ans": "$$C(3,4), \\, R = 5, \\, c = -2 \\pm 25$$",
                "feedback": "Remember to multiply the right side by $\\sqrt{5}$ when cross-multiplying. This results in $5\\sqrt{5}$, not $25$."
            },
            {
                "ans": "$$C(-3,-4), \\, R = 5, \\, c = -2 \\pm 5\\sqrt{5}$$",
                "feedback": "Be careful with signs when writing down the centre from the completed square form $(x - 3)^2 + (y - 4)^2 = 25$. This corresponds to a centre of $(3, 4)$, not $(-3, -4)$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Solving for Parametric Tangents",
            "content": "When finding the possible values of $c$ for which $y = mx + c$ is a tangent to a circle, setting the perpendicular distance from the centre to the line equal to the radius is significantly faster than expanding a substituted quadratic. It cleanly isolates $|c + k| = r\\sqrt{m^2 + 1}$, yielding the exact values instantly."
        }
    },
    {
        "id": "004246",
        "board": "OCR MEI",
        "level": "AS",
        "major_area": "Algebra",
        "topic": "Surds and Indices",
        "subtopic": [
            "Simplifying Surds",
            "Prime Bases"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Show that:<br>$$\\sqrt{45} + \\sqrt{80} = a\\sqrt{b}$$<br>where $a$ and $b$ are prime numbers to be determined.",
        "steps": [
            "Simplify each surd individually by finding the largest perfect square factor for both $45$ and $80$:<br>\\begin{aligned} \\sqrt{45} &= \\sqrt{9 \\cdot 5} = 3\\sqrt{5} \\ \\sqrt{80} &= \\sqrt{16 \\cdot 5} = 4\\sqrt{5} \\end{aligned}",
            "Substitute these simplified expressions back into the original sum and collect like terms:<br>$$\\sqrt{45} + \\sqrt{80} = 3\\sqrt{5} + 4\\sqrt{5} = 7\\sqrt{5}$$",
            "Identify the values of the constants $a$ and $b$ from the expression $7\\sqrt{5}$ and confirm they are both prime numbers:<br>$$a = 7 \\quad \\text{and} \\quad b = 5$$<br>Since $7$ and $5$ are both prime, the conditions are satisfied.<br><br>Final Answer: $$a = 7, \\quad b = 5$$"
        ],
        "pi_options": [
            {
                "ans": "$$a = 5, \\quad b = 5$$",
                "feedback": "Check your simplification of $\\sqrt{80}$. Since $80 = 16 \\cdot 5$, $\\sqrt{80} = 4\\sqrt{5}$, not $2\\sqrt{5}$. This gives the sum $3\\sqrt{5} + 4\\sqrt{5} = 7\\sqrt{5}$, not $5\\sqrt{5}$."
            },
            {
                "ans": "$$a = 25, \\quad b = 5$$",
                "feedback": "Check your simplification of the individual surds. When simplifying $\\sqrt{45} = \\sqrt{9 \\cdot 5}$, you must take the square root of $9$, which is $3$, to get $3\\sqrt{5}$. It seems you forgot to take the square root of the extracted factors and left them as $9\\sqrt{5}$ and $16\\sqrt{5}$ respectively, leading to $25\\sqrt{5}$."
            },
            {
                "ans": "$$a = 7, \\quad b = 25$$",
                "feedback": "Remember to take the square root of your squared factor when simplifying. The term inside the square root must be the remaining prime factor, $b = 5$, not the squared term $25$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Prime Base Simplification",
            "content": "When simplifying surds into prime components, always look for the largest perfect square factor ($9$ in $\\sqrt{45}$ and $16$ in $\\sqrt{80}$). Factoring these out leaves a common radical base $\\sqrt{5}$, which allows the terms to be collected easily into the form $a\\sqrt{b}$."
        }
    },
    {
        "id": "004247",
        "board": "OCR MEI",
        "level": "AS",
        "major_area": "Algebra",
        "topic": "Surds and Indices",
        "subtopic": [
            "Rationalising Denominators",
            "Surd Expressions"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Show that the expression:<br>$$\\dfrac{4 + \\sqrt{5}}{3 - \\sqrt{5}}$$<br>can be written in the form $x + y\\sqrt{5}$, where $x$ and $y$ are rational numbers to be determined.",
        "steps": [
            "To rationalise the denominator, multiply both the numerator and the denominator by the conjugate of the denominator, which is $3 + \\sqrt{5}$:<br>$$\\dfrac{4 + \\sqrt{5}}{3 - \\sqrt{5}} = \\dfrac{(4 + \\sqrt{5})(3 + \\sqrt{5})}{(3 - \\sqrt{5})(3 + \\sqrt{5})}$$",
            "Expand and simplify the denominator using the difference of two squares identity, $(a-b)(a+b) = a^2 - b^2$:<br>$$\\left(3 - \\sqrt{5}\\right)\\left(3 + \\sqrt{5}\\right) = 3^2 - \\left(\\sqrt{5}\\right)^2 = 9 - 5 = 4$$",
            "Expand the numerator step-by-step:<br>$$\\begin{aligned} \\left(4 + \\sqrt{5}\\right)\\left(3 + \\sqrt{5}\\right) &= 12 + 4\\sqrt{5} + 3\\sqrt{5} + \\left(\\sqrt{5}\\right)^2 \\ &= 12 + 7\\sqrt{5} + 5 \\ &= 17 + 7\\sqrt{5} \\end{aligned}$$",
            "Combine the simplified numerator and denominator into a single fraction and split it into individual terms:<br>$$\\dfrac{17 + 7\\sqrt{5}}{4} = \\dfrac{17}{4} + \\dfrac{7}{4}\\sqrt{5}$$<br>This matches the required form $x + y\\sqrt{5}$, where $x = \\dfrac{17}{4}$ and $y = \\dfrac{7}{4}$ are both rational numbers.<br><br>Final Answer: $$x = \\dfrac{17}{4}, \\quad y = \\dfrac{7}{4}$$"
        ],
        "pi_options": [
            {
                "ans": "$$x = \\dfrac{17}{14}, \\quad y = \\dfrac{7}{14}$$",
                "feedback": "Check your denominator expansion. Using the difference of two squares, $(3-\\sqrt{5})(3+\\sqrt{5})$ is $9 - 5 = 4$, not $9 + 5 = 14$."
            },
            {
                "ans": "$$x = \\dfrac{7}{4}, \\quad y = \\dfrac{17}{4}$$",
                "feedback": "Be careful when identifying the constants $x$ and $y$. The rational term is $x = \\dfrac{17}{4}$ and the coefficient of the surd is $y = \\dfrac{7}{4}$. It seems you may have reversed their values."
            },
            {
                "ans": "$$x = \\dfrac{13}{4}, \\quad y = \\dfrac{7}{4}$$",
                "feedback": "Check your expansion of the constant term in the numerator. The product $(\\sqrt{5})(\\sqrt{5})$ evaluates to $+5$, not $-5$. Adding this to $12$ gives $12 + 5 = 17$, not $12 - 5 = 7$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Rationalising Denominators",
            "content": "To rationalise the denominator of a fraction containing a surd, multiply both the numerator and the denominator by the conjugate of the denominator (changing the sign between the terms). This exploits the difference of two squares to eliminate all square roots from the denominator."
        }
    },
    {
        "id": "004248",
        "board": "OCR MEI",
        "level": "AS",
        "major_area": "Algebra",
        "topic": "Surds and Indices",
        "subtopic": [
            "Solving Surd Equations",
            "Simplifying Surds"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Solve the equation:<br>$$x\\sqrt{8} - \\sqrt{18} = x\\sqrt{2} + \\sqrt{32}$$<br>giving your answer for $x$ in exact simplified form.",
        "steps": [
            "Simplify all the surds in the equation to express them in terms of their simplest radical components:<br>\\begin{aligned} \\sqrt{8} &= \\sqrt{4 \\cdot 2} = 2\\sqrt{2} \\ \\sqrt{18} &= \\sqrt{9 \\cdot 2} = 3\\sqrt{2} \\ \\sqrt{32} &= \\sqrt{16 \\cdot 2} = 4\\sqrt{2} \\end{aligned}",
            "Substitute these simplified expressions back into the original equation:<br>$$2x\\sqrt{2} - 3\\sqrt{2} = x\\sqrt{2} + 4\\sqrt{2}$$",
            "Factorise out the common term $\\sqrt{2}$ from both sides of the equation:<br>$$\\left(2x - 3\\right)\\sqrt{2} = \\left(x + 4\\right)\\sqrt{2}$$",
            "Divide both sides of the equation by $\\sqrt{2}$ and solve the resulting linear equation for $x$:<br>$$\\begin{aligned} 2x - 3 &= x + 4 \\ x &= 7 \\end{aligned}$$<br><br>Final Answer: $$x = 7$$"
        ],
        "pi_options": [
            {
                "ans": "$$x = 1$$",
                "feedback": "Check your signs when isolating $x$. From $2x - 3 = x + 4$, subtracting $x$ from both sides gives $x - 3 = 4$, and adding $3$ to both sides yields $x = 7$, not $x = 1$."
            },
            {
                "ans": "$$x = -7$$",
                "feedback": "Be careful when moving variables and constants. When simplifying $2x - 3 = x + 4$, both sides reduce to positive $x = 7$. Check your sign steps."
            },
            {
                "ans": "$$x = \\dfrac{7}{3}$$",
                "feedback": "Check your expansion of the $x\\sqrt{8}$ term. Since $\\sqrt{8} = 2\\sqrt{2}$, the coefficient is $2x$, not $4x$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Factoring Common Radicals",
            "content": "When solving linear equations with surds, simplify each individual radical first. Factoring out the common term $\\sqrt{2}$ allows you to divide the entire equation by $\\sqrt{2}$ instantly, reducing a complex-looking surd equation to a simple linear system."
        }
    },
    {
        "id": "004249",
        "board": "OCR MEI",
        "level": "AS",
        "major_area": "Algebra",
        "topic": "Surds and Indices",
        "subtopic": [
            "Geometric Applications",
            "Rationalising Denominators"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A rectangle has an area of $12\\sqrt{3} \\text{ cm}^2$ and a width of $3 - \\sqrt{3} \\text{ cm}$.<br><br>Show that the length of the rectangle can be written in the form $p + q\\sqrt{3}$, where $p$ and $q$ are integers to be determined.",
        "steps": [
            "The length of the rectangle is found by dividing the area by the width:<br>$$\\text{Length} = \\dfrac{12\\sqrt{3}}{3 - \\sqrt{3}}$$",
            "Rationalise the denominator by multiplying both the numerator and the denominator by the conjugate $3 + \\sqrt{3}$:<br>$$\\text{Length} = \\dfrac{12\\sqrt{3}\\left(3 + \\sqrt{3}\\right)}{\\left(3 - \\sqrt{3}\\right)\\left(3 + \\sqrt{3}\\right)}$$",
            "Simplify the denominator using the difference of two squares:<br>$$\\left(3 - \\sqrt{3}\\right)\\left(3 + \\sqrt{3}\\right) = 3^2 - \\left(\\sqrt{3}\\right)^2 = 9 - 3 = 6$$",
            "Expand the numerator step-by-step:<br>$$12\\sqrt{3}\\left(3 + \\sqrt{3}\\right) = 36\\sqrt{3} + 12\\left(3\\right) = 36\\sqrt{3} + 36$$",
            "Divide the expanded numerator by the simplified denominator, and write it in the required form $p + q\\sqrt{3}$:<br>$$\\text{Length} = \\dfrac{36 + 36\\sqrt{3}}{6} = 6 + 6\\sqrt{3}$$<br>This matches the required form where $p = 6$ and $q = 6$ are both integers.<br><br>Final Answer: $$p = 6, \\quad q = 6$$"
        ],
        "pi_options": [
            {
                "ans": "$$p = 6, \\quad q = -6$$",
                "feedback": "Check your signs in the numerator expansion. Multiplying $12\\sqrt{3}$ by positive $\\sqrt{3}$ yields $+36$, not $-36$."
            },
            {
                "ans": "$$p = 3, \\quad q = 3$$",
                "feedback": "Check your denominator evaluation. The denominator $(3-\\sqrt{3})(3+\\sqrt{3})$ is $9 - 3 = 6$, not $12$. Dividing by $6$ gives $6 + 6\\sqrt{3}$."
            },
            {
                "ans": "$$p = 12, \\quad q = 12$$",
                "feedback": "Don't forget to divide your expanded terms by the simplified denominator. You must divide both $36$ and $36\\sqrt{3}$ by $6$ to get the correct coefficients."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Reversing Multiplication with Conjugates",
            "content": "In geometric word problems involving surds, find the required length by dividing the exact area by the width. Multiplying both parts by the conjugate of the width's surd expression eliminates fractional denominators, leaving integer coefficients."
        }
    },
    {
        "id": "004250",
        "board": "OCR MEI",
        "level": "AS",
        "major_area": "Algebra",
        "topic": "Polynomials",
        "subtopic": [
            "Simultaneous Equations",
            "Surd Coefficients"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Solve the simultaneous equations:<br>$$\\begin{aligned} x + y\\sqrt{3} &= 11 \\ x\\sqrt{3} - 3y &= 5\\sqrt{3} \\end{aligned}$$<br>giving your answers for $x$ and $y$ in exact simplified form.",
        "steps": [
            "Rearrange the first equation to express $x$ in terms of $y$:<br>$$x = 11 - y\\sqrt{3}$$",
            "Substitute the expression for $x$ into the second equation:<br>\\begin{aligned} \\left(11 - y\\sqrt{3}\\right)\\sqrt{3} - 3y &= 5\\sqrt{3} \\ 11\\sqrt{3} - 3y - 3y &= 5\\sqrt{3} \\ 11\\sqrt{3} - 6y &= 5\\sqrt{3} \\end{aligned}",
            "Isolate the term in $y$ to solve the equation:<br>$$\\begin{aligned} -6y &= 5\\sqrt{3} - 11\\sqrt{3} \\ -6y &= -6\\sqrt{3} \\ y &= \\sqrt{3} \\end{aligned}$$",
            "Substitute $y = \\sqrt{3}$ back into the expression for $x$ to find its value:<br>$$\\begin{aligned} x &= 11 - \\left(\\sqrt{3}\\right)\\sqrt{3} \\ x &= 11 - 3 \\ x &= 8 \\end{aligned}$$<br><br>Final Answer: $$x = 8, \\quad y = \\sqrt{3}$$"
        ],
        "pi_options": [
            {
                "ans": "$$x = 8, \\quad y = -\\sqrt{3}$$",
                "feedback": "Check your signs when simplifying the $y$-terms. On the left side, we have $11\\sqrt{3} - 6y = 5\\sqrt{3}$, which simplifies to $-6y = -6\\sqrt{3}$, leading to positive $y = \\sqrt{3}$."
            },
            {
                "ans": "$$x = 5, \\quad y = \\sqrt{3}$$",
                "feedback": "Check your final calculation for $x$. When substituting $y = \\sqrt{3}$, we have $x = 11 - (\\sqrt{3})(\\sqrt{3}) = 11 - 3 = 8$, not $11 - 6 = 5$."
            },
            {
                "ans": "$$x = 11, \\quad y = 0$$",
                "feedback": "While $x = 11, \\, y = 0$ satisfies the first equation, it does not satisfy the second equation. You must solve the system simultaneously to find the correct coordinates."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Substitution with Surds",
            "content": "When solving simultaneous equations containing surds, substitution is often more direct than elimination. Isolate the linear variable $x$ first and substitute it into the second equation; the resulting terms in $y$ will collapse into integers once $\\sqrt{3} \\cdot \\sqrt{3}$ is evaluated."
        }
    }











];