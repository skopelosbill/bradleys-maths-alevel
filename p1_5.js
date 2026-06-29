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
            "Differentiate the equation of the curve using the quotient rule, where $u = 6\\sin 2x$ and $v = 4 - \\cos 2x$:<br>$$u' = 12\\cos 2x, \\quad v' = 2\\sin 2x$$<br>We apply the quotient rule to find the derivative:<br>$$\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{12\\cos 2x(4 - \\cos 2x) - 6\\sin 2x(2\\sin 2x)}{(4 - \\cos 2x)^2} \\\\ &= \\dfrac{48\\cos 2x - 12\\cos^2 2x - 12\\sin^2 2x}{(4 - \\cos 2x)^2} \\\\ &= \\dfrac{48\\cos 2x - 12(\\cos^2 2x + \\sin^2 2x)}{(4 - \\cos 2x)^2} \\\\ &= \\dfrac{48\\cos 2x - 12}{(4 - \\cos 2x)^2} \\end{aligned}$$",
            "Substitute $x = \\dfrac{1}{2}\\pi$ into the derivative to find the gradient of the tangent at $P$:<br>$$\\text{At } x = \\dfrac{1}{2}\\pi, \\quad 2x = \\pi, \\quad \\cos \\pi = -1$$<br>$$\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x}\\bigg|_{x=\\pi/2} &= \\dfrac{48(-1) - 12}{(4 - (-1))^2} \\\\ &= \\dfrac{-60}{25} \\\\ &= -\\dfrac{12}{5} \\end{aligned}$$<br>The gradient of the normal is the negative reciprocal of the tangent gradient:<br>$$m_{\\text{normal}} = \\dfrac{5}{12}$$",
            "Use the point-gradient formula $y - y_1 = m(x - x_1)$ with the point $P\\left(\\dfrac{1}{2}\\pi, 0\\right)$ to find the equation of the normal:<br>$$\\begin{aligned} y - 0 &= \\dfrac{5}{12}\\left(x - \\dfrac{1}{2}\\pi\\right) \\\\ y &= \\dfrac{5}{12}x - \\dfrac{5}{24}\\pi \\end{aligned}$$",
            "Set up the integral for the area. The curve and the normal meet at $x = \\dfrac{1}{2}\\pi$, and the region is bounded on the left by the $y$-axis ($x = 0$). For $0 \\le x \\le \\dfrac{1}{2}\\pi$, the curve lies above the normal line. Therefore, the area is:<br>$$A = \\int_{0}^{\\pi/2} \\left( \\dfrac{6\\sin 2x}{4 - \\cos 2x} - \\left( \\dfrac{5}{12}x - \\dfrac{5\\pi}{24} \\right) \\right) \\text{d}x = I_1 - I_2$$",
            "Evaluate the first integral $I_1 = \\int_{0}^{\\pi/2} \\dfrac{6\\sin 2x}{4 - \\cos 2x} \\text{d}x$ using the substitution $u = 4 - \\cos 2x$, which gives $\\text{d}u = 2\\sin 2x \\text{d}x$:<br>$$\\text{When } x = 0, \\, u = 4 - \\cos 0 = 3 \\quad \\text{and} \\quad \\text{when } x = \\dfrac{1}{2}\\pi, \\, u = 4 - \\cos \\pi = 5$$<br>$$\\begin{aligned} I_1 &= \\int_{3}^{5} \\dfrac{3}{u} \\text{d}u \\\\ &= \\Big[ 3\\ln u \\Big]_{3}^{5} \\\\ &= 3\\ln 5 - 3\\ln 3 \\\\ &= \\ln\\left(\\dfrac{125}{27}\\right) \\end{aligned}$$",
            "Evaluate the second integral $I_2 = \\int_{0}^{\\pi/2} \\left( \\dfrac{5}{12}x - \\dfrac{5\\pi}{24} \\right) \\text{d}x$:<br>$$\\begin{aligned} I_2 &= \\left[ \\dfrac{5}{24}x^2 - \\dfrac{5\\pi}{24}x \\right]_{0}^{\\pi/2} \\\\ &= \\dfrac{5}{24}\\left(\\dfrac{\\pi^2}{4}\\right) - \\dfrac{5\\pi}{24}\\left(\\dfrac{\\pi}{2}\\right) \\\\ &= \\dfrac{5\\pi^2}{96} - \\dfrac{10\\pi^2}{96} \\\\ &= -\\dfrac{5\\pi^2}{96} \\end{aligned}$$<br>Subtracting $I_2$ from $I_1$ yields the final exact area:<br>$$\\begin{aligned} A &= I_1 - I_2 \\\\ &= \\ln\\left(\\dfrac{125}{27}\\right) - \\left(-\\dfrac{5\\pi^2}{96}\\right) \\\\ &= \\ln\\left(\\dfrac{125}{27}\\right) + \\dfrac{5}{96}\\pi^2 \\end{aligned}$$<br><br>Final Answer: $$y = \\dfrac{5}{12}x - \\dfrac{5\\pi}{24}, \\quad \\text{Area} = \\ln\\left(\\dfrac{125}{27}\\right) + \\dfrac{5}{96}\\pi^2$$"
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
            "Differentiate the equation of the curve using the quotient rule, where $u = 2x+1$ and $v = x^2+x+2$:<br>$$u' = 2, \\quad v' = 2x + 1$$<br>$$\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{2(x^2 + x + 2) - (2x + 1)(2x + 1)}{(x^2 + x + 2)^2} \\\\ &= \\dfrac{2x^2 + 2x + 4 - (4x^2 + 4x + 1)}{(x^2 + x + 2)^2} \\\\ &= \\dfrac{-2x^2 - 2x + 3}{(x^2 + x + 2)^2} \\end{aligned}$$",
            "Substitute $x = 1$ into the derivative to find the tangent gradient at $P$:<br>$$\\dfrac{\\text{d}y}{\\text{d}x}\\bigg|_{x=1} = \\dfrac{-2(1)^2 - 2(1) + 3}{(1^2 + 1 + 2)^2} = \\dfrac{-1}{16}$$<br>The gradient of the normal is the negative reciprocal of the tangent gradient, which is $16$.",
            "Find the equation of the normal line using the point-gradient formula with $P\\left(1, \\dfrac{3}{4}\\right)$:<br>$$\\begin{aligned} y - \\dfrac{3}{4} &= 16(x - 1) \\\\ y &= 16x - 16 + \\dfrac{3}{4} \\\\ y &= 16x - \\dfrac{61}{4} \\end{aligned}$$",
            "Set up the integral for the area bounded by the curve, the normal, and the $y$-axis from $x = 0$ to $x = 1$. Since the curve lies above the normal in this interval, the area is:<br>$$A = \\int_{0}^{1} \\left( \\dfrac{2x + 1}{x^2 + x + 2} - \\left( 16x - \\dfrac{61}{4} \\right) \\right) \\text{d}x = I_1 - I_2$$",
            "Evaluate the curve integral $I_1 = \\int_{0}^{1} \\dfrac{2x + 1}{x^2 + x + 2} \\text{d}x$ using the logarithmic substitution $u = x^2 + x + 2$, where $\\text{d}u = (2x + 1)\\text{d}x$:<br>$$\\begin{aligned} I_1 &= \\Big[ \\ln(x^2 + x + 2) \\Big]_{0}^{1} \\\\ &= \\ln 4 - \\ln 2 \\\\ &= \\ln\\left(\\dfrac{4}{2}\\right) \\\\ &= \\ln 2 \\end{aligned}$$",
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
            "Find the coordinates of the point $P$. Substitute $x = \\dfrac{1}{3}\\pi$ into the curve's equation:<br>$$y = 8\\sin\\left(\\dfrac{1}{3}\\pi\\right)\\cos^3\\left(\\dfrac{1}{3}\\pi\\right) = 8\\left(\\dfrac{\\sqrt{3}}{2}\\right)\\left(\\dfrac{1}{2}\\right)^3 = \\dfrac{\\sqrt{3}}{2}$$<br>The coordinates of $P$ are $\\left(\\dfrac{1}{3}\\pi, \\dfrac{\\sqrt{3}}{2}\\right)$.",
            "Differentiate the equation of the curve using the product rule:<br>$$\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= 8\\cos x \\cos^3 x + 8\\sin x \\left(3\\cos^2 x(-\\sin x)\\right) \\\\ &= 8\\cos^4 x - 24\\sin^2 x \\cos^2 x \\\\ &= 8\\cos^2 x(\\cos^2 x - 3(1 - \\cos^2 x)) \\\\ &= 8\\cos^2 x(4\\cos^2 x - 3) \\end{aligned}$$",
            "Substitute $x = \\dfrac{1}{3}\\pi$ into the derivative to find the tangent gradient at $P$:<br>$$\\cos\\left(\\dfrac{1}{3}\\pi\\right) = \\dfrac{1}{2} \\implies \\cos^2\\left(\\dfrac{1}{3}\\pi\\right) = \\dfrac{1}{4}$$<br>$$\\dfrac{\\text{d}y}{\\text{d}x}\\bigg|_{x=\\pi/3} = 8\\left(\\dfrac{1}{4}\\right)\\left(4\\left(\\dfrac{1}{4}\\right) - 3\\right) = 2(1 - 3) = -4$$<br>The gradient of the normal is the negative reciprocal of the tangent gradient, which is $\\dfrac{1}{4}$.",
            "Use the point-gradient formula with $P\\left(\\dfrac{1}{3}\\pi, \\dfrac{\\sqrt{3}}{2}\\right)$ to obtain the equation of the normal:<br>$$\\begin{aligned} y - \\dfrac{\\sqrt{3}}{2} &= \\dfrac{1}{4}\\left(x - \\dfrac{1}{3}\\pi\\right) \\\\ y &= \\dfrac{1}{4}x - \\dfrac{1}{12}\\pi + \\dfrac{\\sqrt{3}}{2} \\end{aligned}$$",
            "Set up the integral for the area bounded by the curve, the normal, and the $y$-axis from $x = 0$ to $x = \\dfrac{1}{3}\\pi$. The curve lies above the normal, so:<br>$$A = \\int_{0}^{\\pi/3} \\left( 8\\sin x \\cos^3 x - \\left( \\dfrac{1}{4}x - \\dfrac{1}{12}\\pi + \\dfrac{\\sqrt{3}}{2} \\right) \\right) \\text{d}x = I_1 - I_2$$",
            "Evaluate the first integral $I_1 = \\int_{0}^{\\pi/3} 8\\sin x \\cos^3 x \\text{d}x$ using substitution with $u = \\cos x$, which gives $\\text{d}u = -\\sin x \\text{d}x$:<br>$$\\text{When } x = 0, \\, u = 1 \\quad \\text{and} \\quad \\text{when } x = \\dfrac{1}{3}\\pi, \\, u = \\dfrac{1}{2}$$<br>$$\\begin{aligned} I_1 &= \\int_{1/2}^{1} 8u^3 \\text{d}u \\\\ &= \\Big[ 2u^4 \\Big]_{1/2}^{1} \\\\ &= 2(1)^4 - 2\\left(\\dfrac{1}{2}\\right)^4 \\\\ &= 2 - \\dfrac{1}{8} \\\\ &= \\dfrac{15}{8} \\end{aligned}$$",
            "Evaluate the second integral $I_2 = \\int_{0}^{\\pi/3} \\left( \\dfrac{1}{4}x - \\dfrac{1}{12}\\pi + \\dfrac{\\sqrt{3}}{2} \\right) \\text{d}x$:<br>$$\\begin{aligned} I_2 &= \\left[ \\dfrac{1}{8}x^2 + \\left( \\dfrac{\\sqrt{3}}{2} - \\dfrac{\\pi}{12} \\right)x \\right]_{0}^{\\pi/3} \\\\ &= \\dfrac{1}{8}\\left(\\dfrac{\\pi^2}{9}\\right) + \\left( \\dfrac{\\sqrt{3}}{2} - \\dfrac{\\pi}{12} \\right)\\left(\\dfrac{\\pi}{3}\\right) \\\\ &= \\dfrac{\\pi^2}{72} + \\dfrac{\\sqrt{3}\\pi}{6} - \\dfrac{\\pi^2}{36} \\\\ &= \\dfrac{\\sqrt{3}\\pi}{6} - \\dfrac{\\pi^2}{72} \\end{aligned}$$<br>Subtracting $I_2$ from $I_1$ yields the final exact area:<br>$$\\begin{aligned} A &= I_1 - I_2 \\\\ &= \\dfrac{15}{8} - \\left( \\dfrac{\\sqrt{3}\\pi}{6} - \\dfrac{\\pi^2}{72} \\right) \\\\ &= \\dfrac{15}{8} - \\dfrac{\\sqrt{3}\\6}\\pi + \\dfrac{1}{72}\\pi^2 \\end{aligned}$$<br><br>Final Answer: $$y = \\dfrac{1}{4}x - \\dfrac{1}{12}\\pi + \\dfrac{\\sqrt{3}}{2}, \\quad \\text{Area} = \\dfrac{15}{8} - \\dfrac{\\sqrt{3}}{6}\\pi + \\dfrac{1}{72}\\pi^2$$"
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
            "Differentiate the parametric equations with respect to $t$ to find $\\dfrac{\\text{d}y}{\\text{d}x}$:<br>$$\\dfrac{\\text{d}x}{\\text{d}t} = \\cos t, \\quad \\dfrac{\\text{d}y}{\\text{d}t} = 2\\cos 2t \\implies \\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{2\\cos 2t}{\\cos t}$$<br>Substitute $t = \\dfrac{1}{6}\\pi$ to find the tangent gradient:<br>$$\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x}\\bigg|_{t=\\pi/6} &= \\dfrac{2\\cos\\left(\\dfrac{1}{3}\\pi\\right)}{\\cos\\left(\\dfrac{1}{6}\\pi\\right)} \\\\ &= \\dfrac{2\\left(\\dfrac{1}{2}\\right)}{\\dfrac{\\sqrt{3}}{2}} \\\\ &= \\dfrac{2}{\\sqrt{3}} \\end{aligned}$$",
            "Find the normal gradient, which is the negative reciprocal of the tangent gradient:<br>$$m_{\\text{normal}} = -\\dfrac{\\sqrt{3}}{2}$$<br>Use the point-gradient formula with $\\left(\\dfrac{1}{2}, \\dfrac{\\sqrt{3}}{2}\\right)$ to get the equation of the normal:<br>$$\\begin{aligned} y - \\dfrac{\\sqrt{3}}{2} &= -\\dfrac{\\sqrt{3}}{2}\\left(x - \\dfrac{1}{2}\\right) \\\\ y &= -\\dfrac{\\sqrt{3}}{2}x + \\dfrac{3\\sqrt{3}}{4} \\end{aligned}$$",
            "Find the intersections of the curve and the normal with the $x$-axis ($y = 0$):<br>The curve intersects the $x$-axis when $y = \\sin 2t = 0 \\implies t = 0 \\text{ (origin)} \\text{ and } t = \\dfrac{1}{2}\\pi \\implies x = 1$.<br>The normal intersects the $x$-axis when $0 = -\\dfrac{\\sqrt{3}}{2}x + \\dfrac{3\\sqrt{3}}{4} \\implies x = \\dfrac{3}{2}$.<br>The curve and normal meet at $x = \\dfrac{1}{2}$.",
            "Divide the area into two separate parts:<br>Part 1 ($A_1$): Area under the curve from $x = 0$ to $x = 1$.<br>Part 2 ($A_2$): Area under the normal from $x = 1$ to $x = \\dfrac{3}{2}$.<br>$$\\text{Area} = A_1 + A_2$$",
            "Evaluate the parametric curve area $A_1 = \\int_{0}^{1} y \\text{d}x$ by changing the variable to $t$ where $\\text{d}x = \\cos t \\text{d}t$:<br>$$\\begin{aligned} A_1 &= \\int_{0}^{\\pi/2} (\\sin 2t)(\\cos t) \\text{d}t \\\\ &= \\int_{0}^{\\pi/2} 2\\sin t \\cos^2 t \\text{d}t \\end{aligned}$$<br>Using substitution $u = \\cos t$, $\\text{d}u = -\\sin t \\text{d}t$, the limits are $u(0) = 1$ and $u(\\pi/2) = 0$:<br>$$\\begin{aligned} A_1 &= \\int_{0}^{1} 2u^2 \\text{d}u \\\\ &= \\left[ \\dfrac{2}{3}u^3 \\right]_{0}^{1} \\\\ &= \\dfrac{2}{3} \\end{aligned}$$",
            "Evaluate the normal line area $A_2 = \\int_{1}^{3/2} \\left( -\\dfrac{\\sqrt{3}}{2}x + \\dfrac{3\\sqrt{3}}{4} \\right) \\text{d}x$:<br>$$\\begin{aligned} A_2 &= \\left[ -\\dfrac{\\sqrt{3}}{4}x^2 + \\dfrac{3\\sqrt{3}}{4}x \\right]_{1}^{3/2} \\\\ &= \\left( -\\dfrac{\\sqrt{3}}{4}\\left(\\dfrac{9}{4}\\right) + \\dfrac{3\\sqrt{3}}{4}\\left(\\dfrac{3}{2}\\right) \\right) - \\left( -\\dfrac{\\sqrt{3}}{4} + \\dfrac{3\\sqrt{3}}{4} \\right) \\\\ &= \\left( -\\dfrac{9\\sqrt{3}}{16} + \\dfrac{18\\sqrt{3}}{16} \\right) - \\dfrac{2\\sqrt{3}}{4} \\\\ &= \\dfrac{9\\sqrt{3}}{16} - \\dfrac{8\\sqrt{3}}{16} \\\\ &= \\dfrac{\\sqrt{3}}{16} \\end{aligned}$$<br>Summing $A_1$ and $A_2$ yields the total exact area:<br>$$\\begin{aligned} \\text{Area} &= A_1 + A_2 \\\\ &= \\dfrac{2}{3} + \\dfrac{\\sqrt{3}}{16} \\end{aligned}$$<br><br>Final Answer: $$y = -\\dfrac{\\sqrt{3}}{2}x + \\dfrac{3\\sqrt{3}}{4}, \\quad \\text{Area} = \\dfrac{2}{3} + \\dfrac{\\sqrt{3}}{16}$$"
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
            "Evaluate $A_1 = \\int_{1/2}^{e/2} 4x\\ln(2x) \\text{d}x$ using integration by parts with $u = \\ln(2x)$ and $\\text{d}v = 4x \\text{d}x$:<br>$$\\text{d}u = \\dfrac{1}{x} \\text{d}x, \\quad v = 2x^2$$<br>$$\\begin{aligned} \\int 4x\\ln(2x) \\text{d}x &= 2x^2\\ln(2x) - \\int 2x^2\\left(\\dfrac{1}{x}\\right) \\text{d}x \\\\ &= 2x^2\\ln(2x) - \\int 2x \\text{d}x \\\\ &= 2x^2\\ln(2x) - x^2 \\end{aligned}$$<br>Evaluating this from $x = \\dfrac{1}{2}$ to $x = \\dfrac{1}{2}e$:<br>$$\\begin{aligned} A_1 &= \\left( 2\\left(\\dfrac{e}{2}\\right)^2\\ln e - \\left(\\dfrac{e}{2}\\right)^2 \\right) - \\left( 2\\left(\\dfrac{1}{2}\\right)^2\\ln 1 - \\left(\\dfrac{1}{2}\\right)^2 \\right) \\\\ &= \\left( \\dfrac{e^2}{2} - \\dfrac{e^2}{4} \\right) - \\left( 0 - \\dfrac{1}{4} \\right) \\\\ &= \\dfrac{e^2}{4} + \\dfrac{1}{4} \\end{aligned}$$",
            "Evaluate $A_2 = \\int_{e/2}^{33e/2} \\left( -\\dfrac{1}{8}x + \\dfrac{33e}{16} \\right) \\text{d}x$. Since this region is a right-angled triangle with base $\\dfrac{33e}{2} - \\dfrac{e}{2} = 16e$ and height $2e$:<br>$$A_2 = \\dfrac{1}{2} \\times 16e \\times 2e = 16e^2$$<br>Summing the two areas gives the final exact area:<br>$$\\begin{aligned} \\text{Area} &= A_1 + A_2 \\\\ &= \\left( \\dfrac{e^2}{4} + \\dfrac{1}{4} \\right) + 16e^2 \\\\ &= \\dfrac{65}{4}e^2 + \\dfrac{1}{4} \\end{aligned}$$<br><br>Final Answer: $$y = -\\dfrac{1}{8}x + \\dfrac{33e}{16}, \\quad \\text{Area} = \\dfrac{65}{4}e^2 + \\dfrac{1}{4}$$"
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
            "Solve the differential equation by separating the variables and integrating both sides:<br>$$\\begin{aligned} P \\,\\text{d}P &= k \\,\\text{d}t \\\\ \\int P \\,\\text{d}P &= \\int k \\,\\text{d}t \\\\ \\dfrac{1}{2}P^2 &= kt + C \\\\ P^2 &= 2kt + D \\end{aligned}$$<br>where $D = 2C$ is a constant of integration.",
            "Apply the boundary conditions to find the constant values $D$ and $2k$:<br>Substitute $t = 0, \\, P = 100$ into the equation:<br>$$\\begin{aligned} 100^2 &= 2k(0) + D \\\\ D &= 10000 \\end{aligned}$$<br>Now substitute $t = 2, \\, P = 150$ and $D = 10000$ to find $2k$:<br>$$\\begin{aligned} 150^2 &= 2k(2) + 10000 \\\\ 22500 &= 4k + 10000 \\\\ 4k &= 12500 \\\\ 2k &= 6250 \\end{aligned}$$<br>Substitute $2k = 6250$ and $D = 10000$ back into the solved equation and take the positive square root as $P \\ge 0$:<br>$$P(t) = \\sqrt{6250t + 10000}$$",
            "For the revised model, separate the variables and integrate both sides:<br>$$\\begin{aligned} \\dfrac{\\text{d}P}{\\text{d}t} &= \\dfrac{P^2}{300e^{0.5t}} \\\\ \\dfrac{1}{P^2} \\,\\text{d}P &= \\dfrac{1}{300}e^{-0.5t} \\,\\text{d}t \\\\ \\int P^{-2} \\,\\text{d}P &= \\int \\dfrac{1}{300}e^{-0.5t} \\,\\text{d}t \\\\ -\\dfrac{1}{P} &= -\\dfrac{1}{150}e^{-0.5t} + A \\end{aligned}$$",
            "Clean up the equation by multiplying both sides by $-1$:<br>$$\\dfrac{1}{P} = \\dfrac{1}{150}e^{-0.5t} + A'$$<br>where $A' = -A$. Substitute the initial condition $t = 0, \\, P = 100$ to find $A'$:<br>$$\\begin{aligned} \\dfrac{1}{100} &= \\dfrac{1}{150}e^{0} + A' \\\\ \\dfrac{1}{100} &= \\dfrac{1}{150} + A' \\\\ A' &= \\dfrac{1}{100} - \\dfrac{1}{150} = \\dfrac{1}{300} \\end{aligned}$$<br>Combine the fractions and solve for $P$:<br>$$\\begin{aligned} \\dfrac{1}{P} &= \\dfrac{1}{150}e^{-0.5t} + \\dfrac{1}{300} \\\\ \\dfrac{1}{P} &= \\dfrac{2e^{-0.5t} + 1}{300} \\\\ P(t) &= \\dfrac{300}{2e^{-0.5t} + 1} \\end{aligned}$$",
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
            "Solve the differential equation by separating the variables and integrating both sides:<br>$$\\begin{aligned} \\dfrac{1}{10 - x} \\,\\text{d}x &= k \\,\\text{d}t \\\\ \\int \\dfrac{1}{10 - x} \\,\\text{d}x &= \\int k \\,\\text{d}t \\\\ -\\ln(10 - x) &= kt + C \\\\ \\ln(10 - x) &= -kt - C \\\\ 10 - x &= Ae^{-kt} \\end{aligned}$$<br>where $A = e^{-C}$ is a constant of integration.",
            "Apply the boundary conditions to find the values of $A$ and $k$:<br>Substitute $t = 0, \\, x = 0$ into the equation:<br>$$\\begin{aligned} 10 - 0 &= Ae^{0} \\\\ A &= 10 \\end{aligned}$$<br>This gives $x(t) = 10\\left(1 - e^{-kt}\\right)$. Now substitute $t = 1, \\, x = 2$ to find $k$:<br>$$\\begin{aligned} 2 &= 10\\left(1 - e^{-k}\\right) \\\\ 0.2 &= 1 - e^{-k} \\\\ e^{-k} &= 0.8 \\\\ -k &= \\ln 0.8 \\\\ k &= -\\ln 0.8 \\end{aligned}$$<br>Substituting $e^{-kt} = (e^{-k})^t = 0.8^t$ yields:<br>$$x(t) = 10\\left(1 - 0.8^t\\right)$$",
            "For the revised model, separate the variables and integrate both sides:<br>$$\\begin{aligned} \\dfrac{\\text{d}x}{\\text{d}t} &= \\dfrac{3(10 - x)^2}{100(t + 1)} \\\\ \\dfrac{1}{(10 - x)^2} \\,\\text{d}x &= \\dfrac{3}{100(t + 1)} \\,\\text{d}t \\\\ \\int (10 - x)^{-2} \\,\\text{d}x &= \\int \\dfrac{3}{100(t + 1)} \\,\\text{d}t \\\\ \\dfrac{1}{10 - x} &= \\dfrac{3}{100}\\ln(t + 1) + C' \\end{aligned}$$",
            "Apply the initial condition $t = 0, \\, x = 0$ to find $C'$:<br>$$\\begin{aligned} \\dfrac{1}{10 - 0} &= \\dfrac{3}{100}\\ln(1) + C' \\\\ \\dfrac{1}{10} &= 0 + C' \\\\ C' &= \\dfrac{1}{10} \\end{aligned}$$<br>Now substitute $C' = \\dfrac{1}{10}$ back and isolate $x$:<br>$$\\begin{aligned} \\dfrac{1}{10 - x} &= \\dfrac{3}{100}\\ln(t + 1) + \\dfrac{1}{10} \\\\ \\dfrac{1}{10 - x} &= \\dfrac{3\\ln(t + 1) + 10}{100} \\\\ 10 - x &= \\dfrac{100}{3\\ln(t + 1) + 10} \\\\ x(t) &= 10 - \\dfrac{100}{3\\ln(t + 1) + 10} \\end{aligned}$$",
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
            "Separate the variables and integrate to solve the equation:<br>$$\\begin{aligned} \\dfrac{1}{\\theta - 20} \\,\\text{d}\\theta &= -k \\,\\text{d}t \\\\ \\int \\dfrac{1}{\\theta - 20} \\,\\text{d}\\theta &= \\int -k \\,\\text{d}t \\\\ \\ln(\\theta - 20) &= -kt + C \\\\ \\theta - 20 &= Ae^{-kt} \\\\ \\theta(t) &= 20 + Ae^{-kt} \\end{aligned}$$",
            "Apply the initial conditions to find the constants $A$ and $k$:<br>Substitute $t = 0, \\, \\theta = 84$:<br>$$\\begin{aligned} 84 &= 20 + Ae^{0} \\\\ A &= 64 \\end{aligned}$$<br>This gives $\\theta(t) = 20 + 64e^{-kt}$. Substitute $t = 10, \\, \\theta = 52$:<br>$$\\begin{aligned} 52 &= 20 + 64e^{-10k} \\\\ 32 &= 64e^{-10k} \\\\ e^{-10k} &= 0.5 \\\\ -10k &= \\ln 0.5 \\\\ k &= \\dfrac{\\ln 2}{10} \\end{aligned}$$<br>Substituting $e^{-kt} = (e^{-10k})^{t/10} = 0.5^{t/10} = 2^{-t/10}$ yields:<br>$$\\theta(t) = 20 + 64\\cdot 2^{-t/10}$$",
            "For the revised model, separate variables and integrate:<br>$$\\begin{aligned} \\dfrac{\\text{d}\\theta}{\\text{d}t} &= -\\dfrac{(\\theta - 20)^{3/2}}{30\\sqrt{t + 4}} \\\\ (\\theta - 20)^{-3/2} \\,\\text{d}\\theta &= -\\dfrac{1}{30}(t + 4)^{-1/2} \\,\\text{d}t \\\\ \\int (\\theta - 20)^{-3/2} \\,\\text{d}\\theta &= -\\dfrac{1}{30}\\int (t + 4)^{-1/2} \\,\\text{d}t \\\\ -2(\\theta - 20)^{-1/2} &= -\\dfrac{1}{30}\\left(2\\sqrt{t + 4}\\right) + C \\\\ 2(\\theta - 20)^{-1/2} &= \\dfrac{1}{15}\\sqrt{t + 4} - C \\end{aligned}$$",
            "Multiply both sides by $\\dfrac{1}{2}$ to simplify:<br>$$(\\theta - 20)^{-1/2} = \\dfrac{1}{30}\\sqrt{t + 4} + C'$$<br>where $C' = -\\dfrac{1}{2}C$. Use the initial condition $t = 0, \\, \\theta = 84$ to find $C'$:<br>$$\\begin{aligned} (84 - 20)^{-1/2} &= \\dfrac{1}{30}\\sqrt{0 + 4} + C' \\\\ 64^{-1/2} &= \\dfrac{1}{30}(2) + C' \\\\ \\dfrac{1}{8} &= \\dfrac{1}{15} + C' \\\\ C' &= \\dfrac{1}{8} - \\dfrac{1}{15} = \\dfrac{15 - 8}{120} = \\dfrac{7}{120} \\end{aligned}$$",
            "Substitute $C'$ and isolate $\\theta$:<br>$$\\begin{aligned} (\\theta - 20)^{-1/2} &= \\dfrac{1}{30}\\sqrt{t + 4} + \\dfrac{7}{120} \\\\ \\theta(t) - 20 &= \\left( \\dfrac{1}{30}\\sqrt{t + 4} + \\dfrac{7}{120} \\right)^{-2} \\\\ \\theta(t) &= 20 + \\left( \\dfrac{1}{30}\\sqrt{t + 4} + \\dfrac{7}{120} \\right)^{-2} \n\\end{aligned}$$",
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
            "Integrate the separable differential equation:<br>$$\\begin{aligned} \\int \\dfrac{1}{V} \\,\\text{d}V &= \\int k \\,\\text{d}t \\\\ \\ln V &= kt + C \\\\ V(t) &= Ae^{kt} \\end{aligned}$$<br>where $A = e^C$. Substitute the boundary conditions:<br>Substitute $t = 0, \\, V = 10 \\implies A = 10$.<br>Now substitute $t = 5, \\, V = 20$ into $V(t) = 10e^{kt}$:<br>$$\\begin{aligned} 20 &= 10e^{5k} \\\\ 2 &= e^{5k} \\\\ 5k &= \\ln 2 \\\\ k &= \\dfrac{\\ln 2}{5} \\end{aligned}$$<br>Substituting $k$ back into the model gives:<br>$$V(t) = 10e^{\\frac{\\ln 2}{5}t} = 10\\cdot 2^{t/5}$$",
            "For the revised model, separate variables and integrate:<br>$$\\begin{aligned} \\dfrac{\\text{d}V}{\\text{d}t} &= 0.1V - 2 \\\\ \\dfrac{1}{0.1V - 2} \\,\\text{d}V &= \\text{d}t \\\\ \\int \\dfrac{1}{0.1V - 2} \\,\\text{d}V &= \\int \\text{d}t \\\\ 10\\ln|0.1V - 2| &= t + C' \\end{aligned}$$",
            "Solve for $V(t)$:<br>$$\\begin{aligned} \\ln|0.1V - 2| &= 0.1t + 0.1C' \\\\ 0.1V - 2 &= Be^{0.1t} \\\\ 0.1V &= 2 + Be^{0.1t} \\\\ V(t) &= 20 + A'e^{0.1t} \\end{aligned}$$<br>where $A' = 10B$. Substitute the initial condition $t = 0, \\, V = 10$ to find $A'$:<br>$$\\begin{aligned} 10 &= 20 + A'e^{0} \\\\ A' &= -10 \\end{aligned}$$<br>So the value of the fund under the revised model is:<br>$$V(t) = 20 - 10e^{0.1t}$$",
            "Compare the long-term behaviour and find the depletion point:<br>For the first model, $V(t) = 10\\cdot 2^{t/5} \\to \\infty$ as $t \\to \\infty$, representing unbounded compound growth.<br>For the revised model, $V(t) = 20 - 10e^{0.1t}$ eventually decreases because the withdrawal term exceeds the growth term. The fund is exhausted when $V(t) = 0$:<br>$$\\begin{aligned} 20 - 10e^{0.1t} &= 0 \\\\ 10e^{0.1t} &= 20 \\\\ e^{0.1t} &= 2 \\\\ 0.1t &= \\ln 2 \\\\ t &= 10\\ln 2 \\end{aligned}$$<br>The fund runs out after exactly $10\\ln 2$ years (approximately $6.93$ years).<br><br>Final Answer: $$V(t) = 10\\cdot 2^{t/5}, \\quad V(t) = 20 - 10e^{0.1t}, \\quad t = 10\\ln 2 \\text{ years}$$"
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
            "Solve by separating the variables and integrating both sides:<br>$$\\begin{aligned} \\int \\dfrac{1}{B} \\,\\text{d}B &= \\int k \\,\\text{d}t \\\\ \\ln B &= kt + C \\\\ B(t) &= Ae^{kt} \\end{aligned}$$<br>where $A = e^C$. Substitute $t = 0, \\, B = 100 \\implies A = 100$.<br>Substitute $t = 1, \\, B = 150$ into $B(t) = 100e^{kt}$:<br>$$\\begin{aligned} 150 &= 100e^{k} \\\\ e^k &= 1.5 \\\\ k &= \\ln 1.5 \\end{aligned}$$<br>So the first model is:<br>$$B(t) = 100e^{(\\ln 1.5)t} = 100\\cdot 1.5^t$$",
            "For the logistic model, separate the variables:<br>$$\\dfrac{1}{B(500 - B)} \\,\\text{d}B = \\dfrac{1}{2000} \\,\\text{d}t$$<br>Decompose the left-hand fraction using partial fractions:<br>$$\\dfrac{1}{B(500 - B)} = \\dfrac{X}{B} + \\dfrac{Y}{500 - B} \\implies 1 = X(500 - B) + YB$$<br>By substituting $B = 0 \\implies X = \\dfrac{1}{500}$, and $B = 500 \\implies Y = \\dfrac{1}{500}$.<br>So the decomposed expression is:<br>$$\\dfrac{1}{B(500 - B)} = \\dfrac{1}{500}\\left( \\dfrac{1}{B} + \\dfrac{1}{500 - B} \\right)$$,",
            "Integrate both sides using the partial fraction decomposition:<br>$$\\begin{aligned} \\dfrac{1}{500} \\int \\left( \\dfrac{1}{B} + \\dfrac{1}{500 - B} \\right) \\,\\text{d}B &= \\int \\dfrac{1}{2000} \\,\\text{d}t \\\\ \\dfrac{1}{500}\\left( \\ln|B| - \\ln|500 - B| \\right) &= \\dfrac{t}{2000} + C_1 \\\\ \\ln\\left( \\dfrac{B}{500 - B} \\right) &= \\dfrac{t}{4} + C' \\end{aligned}$$<br>where $C' = 500C_1$. Taking exponentials of both sides:<br>$$\\dfrac{B}{500 - B} = Ke^{t/4}$$",
            "Substitute the initial condition $t = 0, \\, B = 100$ to find $K$:<br>$$\\begin{aligned} \\dfrac{100}{500 - 100} &= Ke^{0} \\\\ \\dfrac{100}{400} &= K \\\\ K &= \\dfrac{1}{4} \\end{aligned}$$<br>This gives:<br>$$\\dfrac{B}{500 - B} = \\dfrac{1}{4}e^{t/4}$$",
            "Rearrange to isolate $B(t)$:<br>$$\\begin{aligned} B &= (500 - B)\\left(\\dfrac{1}{4}e^{t/4}\\right) \\\\ B &= 125e^{t/4} - \\dfrac{1}{4}Be^{t/4} \\\\ B\\left(1 + \\dfrac{1}{4}e^{t/4}\\right) &= 125e^{t/4} \\\\ B(t) &= \\dfrac{125e^{t/4}}{1 + \\dfrac{1}{4}e^{t/4}} \\\\ B(t) &= \\dfrac{500e^{t/4}}{4 + e^{t/4}} \\end{aligned}$$",
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
            "Substitute $x = 3$ into the polynomial and evaluate step-by-step:<br>$$\\begin{aligned} f(3) &= 2(3)^3 - 5(3)^2 - 4(3) + 3 \\\\ &= 2(27) - 5(9) - 12 + 3 \\\\ &= 54 - 45 - 12 + 3 \\\\ &= 9 - 12 + 3 \\\\ &= 0 \\end{aligned}$$",
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
            "Substitute $x = -2$ into the expression for $f(x)$:<br>$$\\begin{aligned} f(-2) &= 3(-2)^3 + k(-2)^2 - 4(-2) + 12 \\\\ &= 3(-8) + 4k + 8 + 12 \\\\ &= -24 + 4k + 20 \\\\ &= 4k - 4 \\end{aligned}$$",
            "Set $f(-2)$ equal to $0$ and solve for the constant $k$:<br>$$\\begin{aligned} 4k - 4 &= 0 \\\\ 4k &= 4 \\\\ k &= 1 \\end{aligned}$$<br><br>Final Answer: $$k = 1$$"
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
            "To prove that $(x - 3)$ is a factor of $f(x) = 2x^3 - x^2 - 13x - 6$, apply the Factor Theorem and evaluate $f(3)$:<br>$$\\begin{aligned} f(3) &= 2(3)^3 - (3)^2 - 13(3) - 6 \\\\ &= 2(27) - 9 - 39 - 6 \\\\ &= 54 - 9 - 39 - 6 \\\\ &= 0 \\end{aligned}$$<br>Since $f(3) = 0$, by the Factor Theorem, $(x - 3)$ is a linear factor of $f(x)$.",
            "Perform polynomial division or equate coefficients to divide $f(x)$ by $(x - 3)$ and find the quadratic quotient:<br>$$2x^3 - x^2 - 13x - 6 = (x - 3)(2x^2 + ax + 2)$$<br>Compare the $x^2$ coefficient on both sides:<br>$$\\begin{aligned} -1 &= -3(2) + a \\\\ -1 &= -6 + a \\\\ a &= 5 \\end{aligned}$$<br>So, the quadratic quotient is $2x^2 + 5x + 2$.",
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
            "Evaluate $f(2) = 0$ to set up the first equation:<br>$$\\begin{aligned} f(2) &= a(2)^3 + b(2)^2 - 11(2) - 6 \\\\ &= 8a + 4b - 22 - 6 \\\\ &= 8a + 4b - 28 \\end{aligned}$$<br>Setting this to $0$ and dividing by $4$ gives:<br>$$2a + b = 7 \\quad \\implies \\quad b = 7 - 2a \\quad \\text{--- (Equation 1)}$$",
            "Evaluate $f(-3) = 0$ to set up the second equation:<br>$$\\begin{aligned} f(-3) &= a(-3)^3 + b(-3)^2 - 11(-3) - 6 \\\\ &= -27a + 9b + 33 - 6 \\\\ &= -27a + 9b + 27 \\end{aligned}$$<br>Setting this to $0$ and dividing by $9$ gives:<br>$$-3a + b = -3 \\quad \\implies \\quad b = 3a - 3 \\quad \\text{--- (Equation 2)}$$",
            "Solve the simultaneous equations by equating the two expressions for $b$:<br>$$\\begin{aligned} 7 - 2a &= 3a - 3 \\\\ 10 &= 5a \\\\ a &= 2 \\end{aligned}$$",
            "Substitute $a = 2$ back into Equation 1 to find $b$:<br>$$\\begin{aligned} b &= 7 - 2(2) \\\\ b &= 3 \\end{aligned}$$<br><br>Final Answer: $$a = 2, \\quad b = 3$$"
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
    }




];