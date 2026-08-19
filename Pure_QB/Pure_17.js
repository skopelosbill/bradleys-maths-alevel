window.ALEVEL_QUESTIONS = [
{
    "id": "004801",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "Applications of Integration",
    "subtopic": [
        "Area Between Curves",
        "Volume of Revolution",
        "Trigonometric Integration"
    ],
    "img": "images/Pure_SVGs/004801.svg",
    "question": "The diagram shows a sketch of the curves $y = \\sin 3x$ and $y = \\cos 3x$ for $0 \\le x \\le \\dfrac{ \\pi }{ 2 }$. The curves intersect at the points $A$ and $B$, enclosing a region $R$.<br><br><strong>(i)</strong> Show that the x-coordinates of the points $A$ and $B$ are $\\dfrac{ \\pi }{ 12 }$ and $\\dfrac{ 5\\pi }{ 12 }$.<br><br><strong>(ii)</strong> Calculate the exact area of the region $R$.<br><br><strong>(iii)</strong> A company is designing a trophy base. The base can be modelled as the solid formed when the area bounded by the circle $x^2 + y^2 = 9$, the y-axis, and the vertical line $x = 2$ is rotated through $360^\\circ$ about the x-axis. Find the exact volume of this trophy base.",
    "steps": [
        "<strong>Part (i):</strong> To find the points of intersection of the curves $y = \\sin 3x$ and $y = \\cos 3x$, we equate them:<br>\\begin{aligned} \\sin 3x &= \\cos 3x \\cr \\dfrac{ \\sin 3x }{ \\cos 3x } &= 1 \\cr \\tan 3x &= 1 \\end{aligned}<br><br>Solve for $3x$ within the corresponding interval $0 \\le 3x \\le \\dfrac{ 3\\pi }{ 2 }$:<br>\\begin{aligned} 3x &= \\dfrac{ \\pi }{ 4 }, \\ \\dfrac{ 5\\pi }{ 4 } \\cr x &= \\dfrac{ \\pi }{ 12 }, \\ \\dfrac{ 5\\pi }{ 12 } \\end{aligned}<br>Thus, the x-coordinates of $A$ and $B$ are $\\dfrac{ \\pi }{ 12 }$ and $\\dfrac{ 5\\pi }{ 12 }$. <strong>(Shown)</strong>",
        "<strong>Part (ii):</strong> Over the interval $\\left[ \\dfrac{ \\pi }{ 12 }, \\dfrac{ 5\\pi }{ 12 } \\right]$, the curve $y = \\sin 3x$ lies above $y = \\cos 3x$.<br>The area of the region $R$ is given by:<br>\\begin{aligned} \\text{Area} &= \\int_{ \\pi/12 }^{ 5\\pi/12 } (\\sin 3x - \\cos 3x) \\mathrm{d}x \\cr &= \\left[ -\\dfrac{ 1 }{ 3 } \\cos 3x - \\dfrac{ 1 }{ 3 } \\sin 3x \\right]_{ \\pi/12 }^{ 5\\pi/12 } \\end{aligned}",
        "Substitute the upper and lower limits of integration:<br>At the upper limit $x = \\dfrac{ 5\\pi }{ 12 }$:<br>\\begin{aligned} -\\dfrac{ 1 }{ 3 } \\cos\\left( \\dfrac{ 5\\pi }{ 4 } \\right) - \\dfrac{ 1 }{ 3 } \\sin\\left( \\dfrac{ 5\\pi }{ 4 } \\right) &= -\\dfrac{ 1 }{ 3 }\\left( -\\dfrac{ \\sqrt{2} }{ 2 } \\right) - \\dfrac{ 1 }{ 3 }\\left( -\\dfrac{ \\sqrt{2} }{ 2 } \\right) \\cr &= \\dfrac{ \\sqrt{2} }{ 6 } + \\dfrac{ \\sqrt{2} }{ 6 } = \\dfrac{ \\sqrt{2} }{ 3 } \\end{aligned}<br><br>At the lower limit $x = \\dfrac{ \\pi }{ 12 }$:<br>\\begin{aligned} -\\dfrac{ 1 }{ 3 } \\cos\\left( \\dfrac{ \\pi }{ 4 } \\right) - \\dfrac{ 1 }{ 3 } \\sin\\left( \\dfrac{ \\pi }{ 4 } \\right) &= -\\dfrac{ 1 }{ 3 }\\left( \\dfrac{ \\sqrt{2} }{ 2 } \\right) - \\dfrac{ 1 }{ 3 }\\left( \\dfrac{ \\sqrt{2} }{ 2 } \\right) \\cr &= -\\dfrac{ \\sqrt{2} }{ 6 } - \\dfrac{ \\sqrt{2} }{ 6 } = -\\dfrac{ \\sqrt{2} }{ 3 } \\end{aligned}<br><br>Subtract the lower limit evaluation from the upper limit evaluation:<br>\\begin{aligned} \\text{Area} &= \\dfrac{ \\sqrt{2} }{ 3 } - \\left( -\\dfrac{ \\sqrt{2} }{ 3 } \\right) \\cr &= \\dfrac{ 2\\sqrt{2} }{ 3 } \\end{aligned}",
        "<strong>Part (iii):</strong> We rearrange the circle equation to express $y^2$ in terms of $x$:<br>$$y^2 = 9 - x^2$$<br>The volume of revolution $V$ is formed by rotating this region from $x = 0$ to $x = 2$ about the x-axis:<br>\\begin{aligned} V &= \\pi \\int_{ 0 }^{ 2 } y^2 \\mathrm{d}x \\cr &= \\pi \\int_{ 0 }^{ 2 } (9 - x^2) \\mathrm{d}x \\cr &= \\pi \\left[ 9x - \\dfrac{ 1 }{ 3 } x^3 \\right]_{ 0 }^{ 2 } \\cr &= \\pi \\left( 9(2) - \\dfrac{ 1 }{ 3 }(2)^3 - (0) \\right) \\cr &= \\pi \\left( 18 - \\dfrac{ 8 }{ 3 } \\right) = \\dfrac{ 46\\pi }{ 3 } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "<strong>(ii)</strong> $\\dfrac{ \\sqrt{2} }{ 3 }$, <strong>(iii)</strong> $\\dfrac{ 46\\pi }{ 3 }$",
            "feedback": "This error occurs in part (ii) if you make a calculation slip when adding the upper and lower limit evaluations, such as evaluating $\\dfrac{\\sqrt{2}}{3} - \\left( -\\dfrac{\\sqrt{2}}{3} \\right)$ as $\\dfrac{\\sqrt{2}}{3}$ by failing to distribute the double negative."
        },
        {
            "ans": "<strong>(ii)</strong> $\\dfrac{ 2\\sqrt{2} }{ 3 }$, <strong>(iii)</strong> $18\\pi$",
            "feedback": "Your area in part (ii) is correct. In part (iii), this error occurs if you forgot to integrate the $x^2/3$ term, evaluating the integral as $9(2) - 0 = 18$ and multiplying by $\\pi$."
        },
        {
            "ans": "<strong>(ii)</strong> $\\dfrac{ 4\\sqrt{2} }{ 3 }$, <strong>(iii)</strong> $\\dfrac{ 46\\pi }{ 3 }$",
            "feedback": "Your volume in part (iii) is correct. In part (ii), this occurs if you integrated $\\sin 3x$ and $\\cos 3x$ incorrectly without dividing by $3$ (forgetting the reverse chain rule factor), which doubles your final area."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Shading Trig Boundaries",
        "content": "When evaluating areas between trigonometric curves, sketching the graphs is essential to identify which curve is upper ($y_{\\text{upper}}$) and which is lower ($y_{\\text{lower}}$) over the interval. Substituting a midpoint value (like $x = \\dfrac{ \\pi }{ 4 }$) into both equations is a fast, bulletproof way to confirm which curve lies on top."
    }
},
{
    "id": "004802",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "Applications of Integration",
    "subtopic": [
        "Area Between Curves",
        "Volume of Revolution",
        "Exponential Integration"
    ],
    "img": "images/Pure_SVGs/004802.svg",
    "question": "The diagram shows the region $R$ bounded by the curves $y = x^2$ and $y = 8 - x^2$.<br><br><strong>(i)</strong> Find the coordinates of the points of intersection of the two curves.<br><br><strong>(ii)</strong> Calculate the exact area of the region $R$.<br><br><strong>(iii)</strong> The base of a stone pillar can be modelled as the solid formed when the region bounded by the curve $y = e^x$, the x-axis, the y-axis, and the vertical line $x = \\ln 3$ is rotated through $360^\\circ$ about the x-axis. Find the exact volume of this pillar base.",
    "steps": [
        "<strong>Part (i):</strong> To find the points of intersection of the curves $y = x^2$ and $y = 8 - x^2$, we equate them:<br>\\begin{aligned} x^2 &= 8 - x^2 \\cr 2x^2 &= 8 \\cr x^2 &= 4 \\cr x &= \\pm 2 \\end{aligned}<br>Substitute $x = \\pm 2$ back into $y = x^2$ to find the corresponding y-coordinates:<br>$$y = (\\pm 2)^2 = 4$$<br>Thus, the coordinates of the points of intersection are $(-2, 4)$ and $(2, 4)$.",
        "<strong>Part (ii):</strong> The area of the enclosed region $R$ is bounded by the upper curve $y = 8 - x^2$ and the lower curve $y = x^2$ from $x = -2$ to $x = 2$:<br>\\begin{aligned} \\text{Area} &= \\int_{ -2 }^{ 2 } ((8 - x^2) - x^2) \\mathrm{d}x \\cr &= \\int_{ -2 }^{ 2 } (8 - 2x^2) \\mathrm{d}x \\cr &= \\left[ 8x - \\dfrac{ 2 }{ 3 } x^3 \\right]_{ -2 }^{ 2 } \\end{aligned}",
        "Substitute the upper and lower limits of integration:<br>\\begin{aligned} \\text{Area} &= \\left( 8(2) - \\dfrac{ 2 }{ 3 }(2)^3 \\right) - \\left( 8(-2) - \\dfrac{ 2 }{ 3 }(-2)^3 \\right) \\cr &= \\left( 16 - \\dfrac{ 16 }{ 3 } \\right) - \\left( -16 + \\dfrac{ 16 }{ 3 } \\right) \\cr &= \\dfrac{ 32 }{ 3 } - \\left( -\\dfrac{ 32 }{ 3 } \\right) = \\dfrac{ 64 }{ 3 } \\end{aligned}",
        "<strong>Part (iii):</strong> The volume of revolution $V$ is formed by rotating the region bounded by $y = e^x$ from $x = 0$ (the y-axis) to $x = \\ln 3$ about the x-axis:<br>\\begin{aligned} V &= \\pi \\int_{ 0 }^{ \\ln 3 } y^2 \\mathrm{d}x \\cr &= \\pi \\int_{ 0 }^{ \\ln 3 } (e^x)^2 \\mathrm{d}x \\cr &= \\pi \\int_{ 0 }^{ \\ln 3 } e^{ 2x } \\mathrm{d}x \\cr &= \\pi \\left[ \\dfrac{ 1 }{ 2 } e^{ 2x } \\right]_{ 0 }^{ \\ln 3 } \\cr &= \\dfrac{ \\pi }{ 2 } \\left( e^{ 2\\ln 3 } - e^0 \\right) \\cr &= \\dfrac{ \\pi }{ 2 } \\left( 9 - 1 \\right) = 4\\pi \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "<strong>(ii)</strong> $\\dfrac{ 32 }{ 3 }$, <strong>(iii)</strong> $4\\pi$",
            "feedback": "Your volume in part (iii) is correct. In part (ii), this error occurs if you only evaluate the integral on the positive interval $[0, 2]$ and forget to double it (or add the negative interval $[-2, 0]$), neglecting the symmetric nature of the shaded region."
        },
        {
            "ans": "<strong>(ii)</strong> $\\dfrac{ 64 }{ 3 }$, <strong>(iii)</strong> $8\\pi$",
            "feedback": "Your area in part (ii) is correct. In part (iii), this error occurs if you forgot to divide by $2$ when integrating $e^{ 2x }$, evaluating the integral as $\\pi [ e^{ 2x } ]_0^{\\ln 3} = \\pi (9 - 1) = 8\\pi$."
        },
        {
            "ans": "<strong>(ii)</strong> $\\dfrac{ 64 }{ 3 }$, <strong>(iii)</strong> $4$",
            "feedback": "Your area in part (ii) is correct. In part (iii), this error occurs if you completely forgot to include the factor of $\\pi$ in the Volume of Revolution formula."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Symmetry in Integration",
        "content": "For symmetric boundaries (like $[-2, 2]$) of an even function, you can double the integral over the positive half: $2 \\int_{ 0 }^{ 2 } f(x) \\mathrm{d}x$. This is an excellent pro-tip because substituting $0$ as a lower limit is far less prone to arithmetic and sign errors than substituting $-2$."
    }
},
{
    "id": "004803",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "Applications of Integration",
    "subtopic": [
        "Area Between Curves",
        "Volume of Revolution"
    ],
    "img": "images/Pure_SVGs/004803.svg",
    "question": "The diagram shows the region $R$ bounded by the straight line $y = x$ and the curve $y = 4x - x^2$.<br><br><strong>(i)</strong> Find the coordinates of the points of intersection of the line and the curve.<br><br><strong>(ii)</strong> Calculate the exact area of the region $R$.<br><br><strong>(iii)</strong> A plastic container lid can be modelled as the solid formed when the region bounded by the curve $y = \\sqrt{x}$, the x-axis, and the vertical line $x = 4$ is rotated through $360^\\circ$ about the x-axis. Find the exact volume of the lid.",
    "steps": [
        "<strong>Part (i):</strong> To find the points of intersection of the line $y = x$ and the curve $y = 4x - x^2$, we equate them:<br>\\begin{aligned} x &= 4x - x^2 \\cr x^2 - 3x &= 0 \\cr x(x - 3) &= 0 \\end{aligned}<br>This gives $x = 0$ and $x = 3$.<br><br>Substitute these back into the linear equation $y = x$ to find the corresponding y-coordinates:<br>\\begin{aligned} \\text{When } x &= 0 \\implies y = 0 \\cr \\text{When } x &= 3 \\implies y = 3 \\end{aligned}<br>Thus, the coordinates of the points of intersection are $(0, 0)$ and $(3, 3)$.",
        "<strong>Part (ii):</strong> Over the interval $[0, 3]$, the curve $y = 4x - x^2$ lies above the straight line $y = x$.<br>The area of the region $R$ is given by:<br>\\begin{aligned} \\text{Area} &= \\int_{ 0 }^{ 3 } ((4x - x^2) - x) \\mathrm{d}x \\cr &= \\int_{ 0 }^{ 3 } (3x - x^2) \\mathrm{d}x \\cr &= \\left[ \\dfrac{ 3 }{ 2 } x^2 - \\dfrac{ 1 }{ 3 } x^3 \\right]_{ 0 }^{ 3 } \\end{aligned}",
        "Substitute the upper and lower limits of integration:<br>\\begin{aligned} \\text{Area} &= \\left( \\dfrac{ 3 }{ 2 }(3)^2 - \\dfrac{ 1 }{ 3 }(3)^3 \\right) - (0) \\cr &= \\left( \\dfrac{ 27 }{ 2 } - 9 \\right) \\cr &= 13.5 - 9 = 4.5 \\end{aligned}<br>Thus, the exact area of the region $R$ is $4.5$ (or $\\dfrac{ 9 }{ 2 }$).",
        "<strong>Part (iii):</strong> The volume of revolution $V$ is formed by rotating the region bounded by $y = \\sqrt{x}$ from $x = 0$ to $x = 4$ about the x-axis:<br>\\begin{aligned} V &= \\pi \\int_{ 0 }^{ 4 } y^2 \\mathrm{d}x \\cr &= \\pi \\int_{ 0 }^{ 4 } (\\sqrt{x})^2 \\mathrm{d}x \\cr &= \\pi \\int_{ 0 }^{ 4 } x \\mathrm{d}x \\cr &= \\pi \\left[ \\dfrac{ 1 }{ 2 } x^2 \\right]_{ 0 }^{ 4 } \\cr &= \\pi \\left( \\dfrac{ 1 }{ 2 }(4)^2 - (0) \\right) \\cr &= \\pi \\left( 8 \\right) = 8\\pi \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "<strong>(ii)</strong> $9$, <strong>(iii)</strong> $8\\pi$",
            "feedback": "Your volume in part (iii) is correct. In part (ii), this error occurs if you forgot to divide the $3x^2$ term by $2$, evaluating the integral as $3(9) - 9 = 18$ or forgetting to divide the entire sum by $2$, yielding double the actual area."
        },
        {
            "ans": "<strong>(ii)</strong> $4.5$, <strong>(iii)</strong> $16\\pi$",
            "feedback": "Your area in part (ii) is correct. In part (iii), this error occurs if you forgot to divide by $2$ when integrating $x$, writing $\\pi [ x^2 ]_0^4 = 16\\pi$."
        },
        {
            "ans": "<strong>(ii)</strong> $4.5$, <strong>(iii)</strong> $8$",
            "feedback": "Your area in part (ii) is correct. In part (iii), this occurs if you forgot to multiply the integrated value by $\\pi$ in the Volume of Revolution formula."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Squaring the Integrand",
        "content": "In the Volume of Revolution formula $V = \\pi \\int y^2 \\mathrm{d}x$, always square the function $y$ <em>before</em> you integrate. For a function like $y = \\sqrt{x}$, squaring simplifies the integrand directly to $x$, making the integration exceptionally straightforward. Don't forget the factor of $\\pi$!"
    }
},
{
    "id": "004804",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "Applications of Integration",
    "subtopic": [
        "Area Between Curves",
        "Volume of Revolution",
        "Exponential Integration"
    ],
    "img": false,
    "question": "The curves $y = e^x$ and $y = 4e^{-x}$ intersect at a single point in the first quadrant.<br><br><strong>(i)</strong> Show that the x-coordinate of the point of intersection of the two curves is $\\ln 2$.<br><br><strong>(ii)</strong> Calculate the exact area of the region bounded by the curve $y = e^x$, the curve $y = 4e^{-x}$, and the y-axis.<br><br><strong>(iii)</strong> The base of a glass funnel can be modelled as the solid formed when the region bounded by the curve $y = \\dfrac{ 1 }{ x }$, the x-axis, and the vertical lines $x = 1$ and $x = 3$ is rotated through $360^\\circ$ about the x-axis. Find the exact volume of the funnel base.",
    "steps": [
        "<strong>Part (i):</strong> Equate the two curves $y = e^x$ and $y = 4e^{-x}$ to find their intersection:<br>\\begin{aligned} e^x &= 4e^{ -x } \\cr e^{ 2x } &= 4 \\cr 2x &= \\ln 4 \\cr 2x &= \\ln(2^2) \\cr 2x &= 2\\ln 2 \\cr x &= \\ln 2 \\end{aligned}<br>Thus, the x-coordinate of the point of intersection is $\\ln 2$. <strong>(Shown)</strong>",
        "<strong>Part (ii):</strong> We are integrating between the y-axis ($x = 0$) and the point of intersection ($x = \\ln 2$).<br>Over this interval, $y = 4e^{-x}$ lies above $y = e^x$. The area of the region is given by:<br>\\begin{aligned} \\text{Area} &= \\int_{ 0 }^{ \\ln 2 } (4e^{ -x } - e^x) \\mathrm{d}x \\cr &= \\left[ -4e^{ -x } - e^x \\right]_{ 0 }^{ \\ln 2 } \\end{aligned}",
        "Substitute the upper and lower limits of integration:<br>\\begin{aligned} \\text{Area} &= \\left( -4e^{ -\\ln 2 } - e^{ \\ln 2 } \\right) - \\left( -4e^0 - e^0 \\right) \\cr &= \\left( -4\\left( \\dfrac{ 1 }{ 2 } \\right) - 2 \\right) - (-4 - 1) \\cr &= (-2 - 2) - (-5) \\cr &= -4 + 5 = 1 \\end{aligned}<br>Thus, the exact area of the region is $1$.",
        "<strong>Part (iii):</strong> The volume of revolution $V$ is formed by rotating the region bounded by $y = \\dfrac{ 1 }{ x }$ from $x = 1$ to $x = 3$ about the x-axis:<br>\\begin{aligned} V &= \\pi \\int_{ 1 }^{ 3 } y^2 \\mathrm{d}x \\cr &= \\pi \\int_{ 1 }^{ 3 } \\left( \\dfrac{ 1 }{ x } \\right)^2 \\mathrm{d}x \\cr &= \\pi \\int_{ 1 }^{ 3 } x^{ -2 } \\mathrm{d}x \\cr &= \\pi \\left[ -x^{ -1 } \\right]_{ 1 }^{ 3 } \\cr &= \\pi \\left[ -\\dfrac{ 1 }{ x } \\right]_{ 1 }^{ 3 } \\cr &= \\pi \\left( -\\dfrac{ 1 }{ 3 } - (-1) \\right) \\cr &= \\pi \\left( \\dfrac{ 2 }{ 3 } \\right) = \\dfrac{ 2\\pi }{ 3 } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "<strong>(ii)</strong> $3$, <strong>(iii)</strong> $\\dfrac{ 2\\pi }{ 3 }$",
            "feedback": "Your volume in part (iii) is correct. This error in part (ii) occurs if you make sign errors when substituting $e^{ -\\ln 2 } = 0.5$ and $e^{ \\ln 2 } = 2$, or if you evaluated $-4(0.5) - 2$ incorrectly as $0$ instead of $-4$."
        },
        {
            "ans": "<strong>(ii)</strong> $1$, <strong>(iii)</strong> $\\dfrac{ 4\\pi }{ 3 }$",
            "feedback": "Your area in part (ii) is correct. In part (iii), this error occurs if you integrated $x^{ -2 }$ as $\\dfrac{x^{ -1 }}{ 2 }$ by mistake, or made an arithmetic slip when evaluating $-1/3 - (-1)$."
        },
        {
            "ans": "<strong>(ii)</strong> $1$, <strong>(iii)</strong> $\\dfrac{ 2 }{ 3 }$",
            "feedback": "Your area in part (ii) is correct. In part (iii), this occurs if you forgot to include the factor of $\\pi$ in the Volume of Revolution formula."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Laws of Logarithms in Substitution",
        "content": "When substituting logarithmic limits into exponential functions, remember that $e^{ \\ln a } = a$ and $e^{ -\\ln a } = e^{ \\ln(a^{ -1 }) } = a^{ -1 } = \\dfrac{ 1 }{ a }$. Using these algebraic identities immediately transforms complicated-looking exponential limits into simple, clean rational numbers."
    }
},
{
    "id": "004805",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "Applications of Integration",
    "subtopic": [
        "Area Between Curves",
        "Volume of Revolution",
        "Logarithmic Integration"
    ],
    "img": false,
    "question": "The curve $y = \\dfrac{ 4 }{ x }$ and the straight line $y = 5 - x$ intersect at two points.<br><br><strong>(i)</strong> Find the x-coordinates of the points of intersection.<br><br><strong>(ii)</strong> Calculate the exact area of the region bounded by the curve and the straight line.<br><br><strong>(iii)</strong> A decorative glass paperweight can be modelled as the solid formed when the region bounded by the curve $y = \\sin x$, the x-axis, and the vertical lines $x = 0$ and $x = \\pi$ is rotated through $360^\\circ$ about the x-axis. Find the exact volume of the paperweight.",
    "steps": [
        "<strong>Part (i):</strong> To find the points of intersection, we equate the curve $y = \\dfrac{ 4 }{ x }$ and the straight line $y = 5 - x$:<br>\\begin{aligned} \\dfrac{ 4 }{ x } &= 5 - x \\cr 4 &= 5x - x^2 \\cr x^2 - 5x + 4 &= 0 \\cr (x - 1)(x - 4) &= 0 \\end{aligned}<br>Thus, the x-coordinates of the points of intersection are $x = 1$ and $x = 4$.",
        "<strong>Part (ii):</strong> Over the interval $[1, 4]$, the line $y = 5 - x$ lies above the curve $y = \\dfrac{ 4 }{ x }$.<br>The area of the region is given by:<br>\\begin{aligned} \\text{Area} &= \\int_{ 1 }^{ 4 } \\left( 5 - x - \\dfrac{ 4 }{ x } \\right) \\mathrm{d}x \\cr &= \\left[ 5x - \\dfrac{ 1 }{ 2 } x^2 - 4\\ln x \\right]_{ 1 }^{ 4 } \\end{aligned}",
        "Substitute the upper and lower limits of integration:<br>\\begin{aligned} \\text{Area} &= \\left( 5(4) - \\dfrac{ 1 }{ 2 }(4)^2 - 4\\ln 4 \\right) - \\left( 5(1) - \\dfrac{ 1 }{ 2 }(1)^2 - 4\\ln 1 \\right) \\cr &= \\left( 20 - 8 - 4\\ln 4 \\right) - \\left( 5 - 0.5 - 0 \\right) \\cr &= \\left( 12 - 4\\ln 4 \\right) - 4.5 \\cr &= 7.5 - 4\\ln 4 \\end{aligned}<br>Note that this can also be expressed as $7.5 - 8\\ln 2$.",
        "<strong>Part (iii):</strong> The volume of revolution $V$ is formed by rotating $y = \\sin x$ from $x = 0$ to $x = \\pi$ about the x-axis:<br>$$V = \\pi \\int_{ 0 }^{ \\pi } y^2 \\mathrm{d}x = \\pi \\int_{ 0 }^{ \\pi } \\sin^2 x \\mathrm{d}x$$<br>Apply the double-angle identity $\\sin^2 x = \\dfrac{ 1 - \\cos 2x }{ 2 }$:<br>\\begin{aligned} V &= \\dfrac{ \\pi }{ 2 } \\int_{ 0 }^{ \\pi } (1 - \\cos 2x) \\mathrm{d}x \\cr &= \\dfrac{ \\pi }{ 2 } \\left[ x - \\dfrac{ 1 }{ 2 } \\sin 2x \\right]_{ 0 }^{ \\pi } \\cr &= \\dfrac{ \\pi }{ 2 } \\left( \\left( \\pi - \\dfrac{ 1 }{ 2 } \\sin(2\\pi) \\right) - (0) \\right) \\cr &= \\dfrac{ \\pi }{ 2 } (\\pi - 0) = \\dfrac{ \\pi^2 }{ 2 } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "<strong>(ii)</strong> $7.5 - 4\\ln 4$, <strong>(iii)</strong> $\\pi^2$",
            "feedback": "Your area in part (ii) is correct. In part (iii), this error occurs if you forgot to divide by $2$ when using the double-angle identity $\\sin^2 x = \\dfrac{1 - \\cos 2x}{2}$, leading to an integrated value of $\\pi^2$ instead of $\\dfrac{\\pi^2}{2}$."
        },
        {
            "ans": "<strong>(ii)</strong> $12 - 4\\ln 4$, <strong>(iii)</strong> $\\dfrac{ \\pi^2 }{ 2 }$",
            "feedback": "Your volume in part (iii) is correct. In part (ii), this occurs if you forgot to subtract the evaluation at the lower limit $x=1$ ($5 - 0.5 = 4.5$), incorrectly reporting the upper limit's value of $12 - 4\\ln 4$ as the final area."
        },
        {
            "ans": "<strong>(ii)</strong> $7.5 - 4\\ln 4$, <strong>(iii)</strong> $\\dfrac{ \\pi }{ 2 }$",
            "feedback": "Your area in part (ii) is correct. In part (iii), this error occurs if you forgot to square the integrand (integrating $\\sin x$ instead of $\\sin^2 x$), which yields $\\pi [ -\\cos x ]_0^\\pi = 2\\pi$, or if you made a power-of-$\\pi$ omission."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Double Angle Identity for $\\sin^2 x$",
        "content": "To integrate $\\sin^2 x$ or $\\cos^2 x$, you must use the double-angle trigonometric identities:<br>1. $\\sin^2 x = \\dfrac{ 1 - \\cos 2x }{ 2 }$<br>2. $\\cos^2 x = \\dfrac{ 1 + \\cos 2x }{ 2 }$<br>Integrating these squared terms directly without this linear conversion is a fatal algebraic error."
    }
},
{
    "id": "004806",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Sequences and Series",
    "subtopic": [
        "Arithmetic Progressions",
        "Geometric Progressions",
        "Financial Modelling"
    ],
    "img": false,
    "question": "<strong>Section (a)</strong><br><br><strong>(i)</strong> Prove that the sum of $n$ terms of an arithmetic progression with first term $a$ and last term $l$ is:<br>$$S_n = \\dfrac{ 1 }{ 2 }n(a + l)$$<br><strong>(ii)</strong> The first term of an arithmetic progression is $5$ and the last term is $85$. The sum of the progression is $945$. Find the number of terms, $n$.<br><br><strong>(iii)</strong> Find the common difference, $d$.<br><br><strong>Section (b)</strong><br><br>A woman decides to invest her annual savings in a savings account. At the end of Year 1 she invests £500. At the end of Year 2 she invests a further £500 and receives 3% interest on the first year's £500. At the end of Year 3 she invests a further £500 and 3% interest is added to the total sum of money which she has accumulated during the first two years.<br><br><strong>(i)</strong> Show that she has £1,545.45 in her account at the end of Year 3.<br><br><strong>(ii)</strong> Assuming that the woman continues to invest in this way, form and sum a series to prove that she will have $\\dfrac{ 50000 }{ 3 }(1.03^n - 1)$ in her account at the end of $n$ years.<br><br><strong>(iii)</strong> Hence, find the least number of years until her investment exceeds £9,000.",
    "steps": [
        "<strong>Section (a)</strong><br><br><strong>Part (i):</strong> Let the sum of the arithmetic progression be represented as:<br>$$S_n = a + (a + d) + (a + 2d) + \\dots + (l - d) + l$$<br>Reversing the order of the terms gives:<br>$$S_n = l + (l - d) + (l - 2d) + \\dots + (a + d) + a$$<br>Add these two equations together term-by-term:<br>\\begin{aligned} 2S_n &= (a + l) + (a + l) + \\dots + (a + l) \\cr 2S_n &= n(a + l) \\cr S_n &= \\dfrac{ 1 }{ 2 }n(a + l) \\end{aligned} <strong>(Proven)</strong>",
        "<strong>Part (ii):</strong> We are given first term $a = 5$, last term $l = 85$, and sum $S_n = 945$. Substitute these values into the sum formula:<br>\\begin{aligned} 945 &= \\dfrac{ n }{ 2 }(5 + 85) \\cr 945 &= 45n \\cr n &= 21 \\end{aligned}<br>Thus, the number of terms is $21$.",
        "<strong>Part (iii):</strong> Use the formula for the $n$-th term of an arithmetic progression to find $d$:<br>\\begin{aligned} l &= a + (n - 1)d \\cr 85 &= 5 + (21 - 1)d \\cr 80 &= 20d \\cr d &= 4 \\end{aligned}<br>Thus, the common difference is $4$.",
        "<strong>Section (b)</strong><br><br><strong>Part (i):</strong> Let us trace the accumulated value at the end of each year:<br>End of Year 1: £$500$<br>End of Year 2: The previous £$500$ earns 3% interest, and a further £$500$ is added:<br>$$\\text{Value} = 500(1.03) + 500 = 515 + 500 = 1015$$<br>End of Year 3: The previous £$1015$ earns 3% interest, and a further £$500$ is added:<br>$$\\text{Value} = 1015(1.03) + 500 = 1045.45 + 500 = 1545.45$$<br>Thus, the accumulated balance at the end of Year 3 is £1,545.45. <strong>(Shown)</strong>",
        "<strong>Part (ii):</strong> The total value of the investment at the end of $n$ years forms a geometric series:<br>$$S_n = 500 + 500(1.03) + 500(1.03)^2 + \\dots + 500(1.03)^{ n-1 }$$<br>This is a geometric progression with first term $a = 500$ and common ratio $r = 1.03$.<br>Summing the series using the geometric sum formula:<br>\\begin{aligned} S_n &= \\dfrac{ a(r^n - 1) }{ r - 1 } \\cr &= \\dfrac{ 500(1.03^n - 1) }{ 1.03 - 1 } \\cr &= \\dfrac{ 500(1.03^n - 1) }{ 0.03 } \\cr &= \\dfrac{ 50000 }{ 3 }(1.03^n - 1) \\end{aligned} <strong>(Proven)</strong>",
        "<strong>Part (iii):</strong> We set up the inequality to find when the investment exceeds £9,000:<br>\\begin{aligned} \\dfrac{ 50000 }{ 3 }(1.03^n - 1) &> 9000 \\cr 1.03^n - 1 &> \\dfrac{ 27000 }{ 50000 } \\cr 1.03^n - 1 &> 0.54 \\cr 1.03^n &> 1.54 \\end{aligned}<br>Taking natural logarithms of both sides:<br>\\begin{aligned} n \\ln(1.03) &> \\ln(1.54) \\cr n &> \\dfrac{ \\ln(1.54) }{ \\ln(1.03) } \\cr n &> 14.61 \\end{aligned}<br>Since $n$ must be an integer, the least number of years required is $15$ years."
    ],
    "pi_options": [
        {
            "ans": "<strong>Section (a) (ii)</strong> $n = 21$, <strong>(iii)</strong> $d = 4$<br><strong>Section (b) (iii)</strong> $14\\text{ years}$",
            "feedback": "This error occurs in part (b)(iii) if you incorrectly round down your decimal value of $n > 14.61$ to $14$. At $14$ years, the accumulated investment is only £$8,543.14$, which does not exceed £9,000. You must round up to the next integer, which is $15$."
        },
        {
            "ans": "<strong>Section (a) (ii)</strong> $n = 22$, <strong>(iii)</strong> $d = 3.81$<br><strong>Section (b) (iii)</strong> $15\\text{ years}$",
            "feedback": "Your part (b) calculation is correct. However, this error occurs in Section (a) if you made an arithmetic slip when calculating $n$, such as using an incorrect sum formula or dividing incorrectly."
        },
        {
            "ans": "<strong>Section (a) (ii)</strong> $n = 21$, <strong>(iii)</strong> $d = 4$<br><strong>Section (b) (iii)</strong> $19\\text{ years}$",
            "feedback": "Your Section (a) calculations are correct. In Section (b)(iii), this error occurs if you set up the series sum incorrectly, such as using $a = 500(1.03) = 515$ instead of $500$ as the first term of the series, which shifts the powers of your geometric progression."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Deposit Timing in Financial Series",
        "content": "When modeling savings schemes, look closely at when deposits are made. If deposits are made at the end of each year, the first year's deposit only accumulates interest for $n-1$ years. This shifts the power of the first term and changes the structure of your geometric series."
    }
},
{
    "id": "004807",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Sequences and Series",
    "subtopic": [
        "Geometric Progressions",
        "Sum to Infinity",
        "Financial Modelling"
    ],
    "img": false,
    "question": "<strong>Section (a)</strong><br><br><strong>(i)</strong> Prove that the sum of $n$ terms of a geometric progression with first term $a$ and common ratio $r$ is:<br>$$S_n = \\dfrac{ a(1 - r^n) }{ 1 - r }$$<br><strong>(ii)</strong> An infinite geometric progression has first term $12$ and third term $3$. Given that the common ratio $r$ is positive, find the value of $r$.<br><br><strong>(iii)</strong> Find the sum to infinity, $S_\\infty$, of this progression.<br><br><strong>Section (b)</strong><br><br>A graduate starts a new job with an initial salary of £24,000 in Year 1. Each year, their salary increases by 4% of the previous year's salary.<br><br><strong>(i)</strong> Show that their salary in Year 4 is £26,996.74.<br><br><strong>(ii)</strong> Form and sum a geometric series to prove that their total cumulative earnings over a career of $n$ years is given by $600000(1.04^n - 1)$.<br><br><strong>(iii)</strong> Hence, find the least number of years of work required for their total cumulative earnings to exceed £350,000.",
    "steps": [
        "<strong>Section (a)</strong><br><br><strong>Part (i):</strong> Let the sum of the first $n$ terms of the geometric progression be represented as:<br>$$S_n = a + ar + ar^2 + \\dots + ar^{ n-1 }$$<br>Multiply both sides of this equation by $r$:<br>$$rS_n = ar + ar^2 + ar^3 + \\dots + ar^n$$<br>Subtract the second equation from the first equation to eliminate the middle terms:<br>\\begin{aligned} S_n - rS_n &= a - ar^n \\cr S_n(1 - r) &= a(1 - r^n) \\cr S_n &= \\dfrac{ a(1 - r^n) }{ 1 - r } \\end{aligned} <strong>(Proven)</strong>",
        "<strong>Part (ii):</strong> We are given the first term $a = 12$ and third term $u_3 = 3$.<br>The formula for the $n$-th term of a geometric progression is $u_n = a r^{ n-1 }$. Substitute our values:<br>\\begin{aligned} 3 &= 12 r^2 \\cr r^2 &= 0.25 \\cr r &= 0.5 \\end{aligned}<br>Since $r$ is specified as positive, we reject the negative root.",
        "<strong>Part (iii):</strong> Find the sum to infinity $S_\\infty$ using the formula:<br>\\begin{aligned} S_\\infty &= \\dfrac{ a }{ 1 - r } \\cr S_\\infty &= \\dfrac{ 12 }{ 1 - 0.5 } = 24 \\end{aligned}",
        "<strong>Section (b)</strong><br><br><strong>Part (i):</strong> The salary receives a 4% increase each year, which represents a multiplier of $1.04$.<br>Since the initial salary in Year 1 is £$24000$, the salary in Year 4 is:<br>\\begin{aligned} \\text{Salary} &= 24000(1.04)^3 \\cr &= 24000(1.124864) \\cr &\\approx 26996.74 \\end{aligned}<br>Thus, the salary in Year 4 is £26,996.74. <strong>(Shown)</strong>",
        "<strong>Part (ii):</strong> The total cumulative earnings over $n$ years is the sum of the annual salaries:<br>$$S_n = 24000 + 24000(1.04) + 24000(1.04)^2 + \\dots + 24000(1.04)^{ n-1 }$$<br>This is a geometric series with first term $a = 24000$ and common ratio $r = 1.04$.<br>Using the sum formula:<br>\\begin{aligned} S_n &= \\dfrac{ a(r^n - 1) }{ r - 1 } \\cr &= \\dfrac{ 24000(1.04^n - 1) }{ 1.04 - 1 } \\cr &= \\dfrac{ 24000(1.04^n - 1) }{ 0.04 } \\cr &= 600000(1.04^n - 1) \\end{aligned} <strong>(Proven)</strong>",
        "<strong>Part (iii):</strong> Set up the inequality to find when the cumulative earnings exceed £350,000:<br>\\begin{aligned} 600000(1.04^n - 1) &> 350000 \\cr 1.04^n - 1 &> \\dfrac{ 350000 }{ 600000 } \\cr 1.04^n - 1 &> \\dfrac{ 7 }{ 12 } \\cr 1.04^n &> \\dfrac{ 19 }{ 12 } \\end{aligned}<br>Taking natural logarithms of both sides:<br>\\begin{aligned} n \\ln(1.04) &> \\ln\\left( \\dfrac{ 19 }{ 12 } \\right) \\cr n &> \\dfrac{ \\ln(1.5833) }{ \\ln(1.04) } \\cr n &> 11.72 \\end{aligned}<br>Since $n$ must be an integer, the least number of years required is $12$ years."
    ],
    "pi_options": [
        {
            "ans": "<strong>Section (a) (ii)</strong> $r = 0.5$, <strong>(iii)</strong> $S_\\infty = 24$<br><strong>Section (b) (iii)</strong> $11\\text{ years}$",
            "feedback": "This error occurs in part (b)(iii) if you incorrectly round down your decimal value of $n > 11.72$ to $11$. At $11$ years, the total cumulative earnings are only £$323,674.31$, which does not exceed £350,000. You must round up to the next integer, which is $12$."
        },
        {
            "ans": "<strong>Section (a) (ii)</strong> $r = 0.25$, <strong>(iii)</strong> $S_\\infty = 16$<br><strong>Section (b) (iii)</strong> $12\\text{ years}$",
            "feedback": "Your part (b) calculation is correct. However, this error occurs in Section (a) if you forgot to take the square root of $r^2 = 0.25$ when solving for $r$ in part (ii), incorrectly setting $r = 0.25$ instead of $0.5$."
        },
        {
            "ans": "<strong>Section (a) (ii)</strong> $r = 0.5$, <strong>(iii)</strong> $S_\\infty = 24$<br><strong>Section (b) (iii)</strong> $16\\text{ years}$",
            "feedback": "Your Section (a) calculations are correct. In Section (b)(iii), this error occurs if you set up the series sum incorrectly, such as using $a = 24000(1.04) = 24960$ instead of $24000$ as the first term of the series, which shifts the powers of your geometric progression."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Identifying Year $n$ Terms",
        "content": "In exponential growth or salary models, remember that the salary in Year $n$ is represented by $a r^{ n-1 }$, not $a r^n$, because the salary in Year 1 does not receive an increase. Forgetting to subtract $1$ from the power is a very common exam error."
    }
},
{
    "id": "004808",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Sequences and Series",
    "subtopic": [
        "Arithmetic Progressions",
        "Quadratic Equations",
        "Financial Modelling"
    ],
    "img": false,
    "question": "<strong>Section (a)</strong><br><br><strong>(i)</strong> Prove that the sum of $n$ terms of an arithmetic progression with first term $a$ and common difference $d$ is:<br>$$S_n = \\dfrac{ n }{ 2 }[2a + (n - 1)d]$$<br><strong>(ii)</strong> An arithmetic progression has first term $11$ and common difference $6$. The sum of the first $k$ terms of this progression is $1220$. Show that:<br>$$3k^2 + 8k - 1220 = 0$$<br><strong>(iii)</strong> Hence, find the value of $k$.<br><br><strong>Section (b)</strong><br><br>A student starts a savings scheme. In Month 1, they save £50. Each subsequent month, they increase the amount they save by £5.<br><br><strong>(i)</strong> Show that the amount saved in Month 12 is £105.<br><br><strong>(ii)</strong> Find the total amount saved by the student over a period of $n$ months, expressing your answer in the form $An^2 + Bn$, where $A$ and $B$ are constants to be found.<br><br><strong>(iii)</strong> Hence, find the least number of months required for the student's total savings to exceed £2,000.",
    "steps": [
        "<strong>Section (a)</strong><br><br><strong>Part (i):</strong> We start with our previously proven sum formula $S_n = \\dfrac{ n }{ 2 }(a + l)$.<br>The formula for the last term of an arithmetic progression is $l = a + (n - 1)d$. Substitute this into our sum formula:<br>\\begin{aligned} S_n &= \\dfrac{ n }{ 2 }(a + [a + (n - 1)d]) \\cr S_n &= \\dfrac{ n }{ 2 }[2a + (n - 1)d] \\end{aligned} <strong>(Proven)</strong>",
        "<strong>Part (ii):</strong> We are given the first term $a = 11$, common difference $d = 6$, and sum $S_k = 1220$. Substitute these into our sum formula:<br>\\begin{aligned} 1220 &= \\dfrac{ k }{ 2 }[2(11) + (k - 1)6] \\cr 1220 &= \\dfrac{ k }{ 2 }[22 + 6k - 6] \\cr 1220 &= \\dfrac{ k }{ 2 }[6k + 16] \\cr 1220 &= k[3k + 8] \\cr 1220 &= 3k^2 + 8k \\cr 3k^2 + 8k - 1220 &= 0 \\end{aligned} <strong>(Shown)</strong>",
        "<strong>Part (iii):</strong> We solve our quadratic equation $3k^2 + 8k - 1220 = 0$ by factoring:<br>\\begin{aligned} (3k + 61)(k - 20) &= 0 \\end{aligned}<br>This gives $k = -\\dfrac{ 61 }{ 3 }$ or $k = 20$. Since the number of terms $k$ must be a positive integer, we reject the negative root. Thus:<br>$$k = 20$$",
        "<strong>Section (b)</strong><br><br><strong>Part (i):</strong> The monthly savings form an arithmetic progression with first term $a = 50$ and common difference $d = 5$.<br>The savings in Month 12 is:<br>\\begin{aligned} u_{12} &= a + (12 - 1)d \\cr &= 50 + 11(5) \\cr &= 50 + 55 = 105 \\end{aligned}<br>Thus, the amount saved in Month 12 is £105. <strong>(Shown)</strong>",
        "<strong>Part (ii):</strong> The total savings over a period of $n$ months is the sum of our arithmetic series:<br>\\begin{aligned} S_n &= \\dfrac{ n }{ 2 }[2(50) + (n - 1)5] \\cr &= \\dfrac{ n }{ 2 }[100 + 5n - 5] \\cr &= \\dfrac{ n }{ 2 }[5n + 95] \\cr &= 2.5n^2 + 47.5n \\end{aligned}<br>Thus, our constants are $A = 2.5$ and $B = 47.5$.",
        "<strong>Part (iii):</strong> We set up the quadratic inequality to find when the total savings exceed £2,000:<br>\\begin{aligned} 2.5n^2 + 47.5n &> 2000 \\cr n^2 + 19n - 800 &> 0 \\end{aligned}<br>Solve the corresponding quadratic equation $n^2 + 19n - 800 = 0$ using the quadratic formula:<br>\\begin{aligned} n &= \\dfrac{ -19 \\pm \\sqrt{ 19^2 - 4(1)(-800) } }{ 2 } \\cr &= \\dfrac{ -19 \\pm \\sqrt{ 361 + 3200 } }{ 2 } \\cr &= \\dfrac{ -19 \\pm \\sqrt{ 3561 } }{ 2 } \\cr &\\approx \\dfrac{ -19 + 59.67 }{ 2 } \\approx 20.33 \\end{aligned}<br>Since $n$ must be an integer, the least number of months required for the student's total savings to exceed £2,000 is $21$ months."
    ],
    "pi_options": [
        {
            "ans": "<strong>Section (a) (iii)</strong> $k = 20$<br><strong>Section (b) (iii)</strong> $20\\text{ months}$",
            "feedback": "This error occurs in part (b)(iii) if you incorrectly round down your decimal value of $n > 20.33$ to $20$. At $20$ months, the total amount saved is only £$1,950$, which does not exceed £2,000. You must round up to the next integer, which is $21$."
        },
        {
            "ans": "<strong>Section (a) (iii)</strong> $k = -20.33$<br><strong>Section (b) (iii)</strong> $21\\text{ months}$",
            "feedback": "Your part (b) calculation is correct. However, this error occurs in Section (a) if you solved the quadratic equation incorrectly or failed to reject the negative root, reporting a negative or decimal value for the number of terms."
        },
        {
            "ans": "<strong>Section (a) (iii)</strong> $k = 20$<br><strong>Section (b) (iii)</strong> $24\\text{ months}$",
            "feedback": "Your Section (a) calculations are correct. In Section (b)(iii), this error occurs if you set up the series sum incorrectly, such as using $A = 5$ and $B = 50$ from a misinterpretation of the first term and common difference."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Rejecting Extraneous Roots",
        "content": "When solving quadratic equations derived from real-world models (like finding the number of months $k$), you will often get a positive and a negative root. Since a number of terms must be positive, you must explicitly state that you are rejecting the negative root ($k > 0$)."
    }
},
{
    "id": "004809",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Sequences and Series",
    "subtopic": [
        "Arithmetic Progressions",
        "Geometric Progressions",
        "Financial Modelling"
    ],
    "img": false,
    "question": "<strong>Section (a)</strong><br><br><strong>(i)</strong> The first three terms of an arithmetic progression are $x$, $3x + 1$, and $3x^2$, where $x > 0$. Show that $x = 2$.<br><br><strong>(ii)</strong> Find the common difference, $d$, of this progression.<br><br><strong>(iii)</strong> Find the sum of the first $15$ terms of this arithmetic progression.<br><br><strong>Section (b)</strong><br><br>An investor deposits £1,000 into a fund at the beginning of each year. The fund pays 5% compound interest per annum, which is calculated and added to the total accumulated value of the fund at the end of each year.<br><br><strong>(i)</strong> Show that at the end of Year 3, the total value of the fund is £3,310.13.<br><br><strong>(ii)</strong> Form and sum a geometric series to prove that the total value of the fund at the end of $n$ years is given by $21000(1.05^n - 1)$.<br><br><strong>(iii)</strong> Hence, find the minimum number of years required for the total value of the fund to exceed £50,000.",
    "steps": [
        "<strong>Section (a)</strong><br><br><strong>Part (i):</strong> Since the terms $x$, $3x + 1$, and $3x^2$ form an arithmetic progression, the difference between consecutive terms must be constant:<br>\\begin{aligned} (3x + 1) - x &= 3x^2 - (3x + 1) \\cr 2x + 1 &= 3x^2 - 3x - 1 \\cr 3x^2 - 5x - 2 &= 0 \\end{aligned}<br>Solve this quadratic equation by factoring:<br>\\begin{aligned} (3x + 1)(x - 2) &= 0 \\end{aligned}<br>This gives $x = -\\dfrac{ 1 }{ 3 }$ or $x = 2$. Since we are given $x > 0$, we reject the negative root. Thus, $x = 2$. <strong>(Proven)</strong>",
        "<strong>Part (ii):</strong> Substitute $x = 2$ back into the term differences to find the common difference $d$:<br>\\begin{aligned} d &= 2x + 1 \\cr d &= 2(2) + 1 = 5 \\end{aligned}",
        "<strong>Part (iii):</strong> Our arithmetic progression has first term $a = x = 2$ and common difference $d = 5$.<br>Calculate the sum of the first 15 terms using the sum formula:<br>\\begin{aligned} S_{15} &= \\dfrac{ 15 }{ 2 }[2(2) + (15 - 1)5] \\cr &= 7.5[4 + 14(5)] \\cr &= 7.5[4 + 70] \\cr &= 7.5(74) = 555 \\end{aligned}",
        "<strong>Section (b)</strong><br><br><strong>Part (i):</strong> Deposits are made at the beginning of each year, and interest is calculated at the end of each year:<br>End of Year 1: £$1000$ deposit earns 5% interest:<br>$$\\text{Value} = 1000(1.05) = 1050$$<br>End of Year 2: A further £$1000$ is added at the start of the year, and the total earns 5% interest:<br>$$\\text{Value} = (1050 + 1000)(1.05) = 2050(1.05) = 2152.50$$<br>End of Year 3: A further £$1000$ is added at the start of the year, and the total earns 5% interest:<br>$$\\text{Value} = (2152.50 + 1000)(1.05) = 3152.50(1.05) = 3310.125 \\approx 3310.13$$<br>Thus, the total value at the end of Year 3 is £3,310.13. <strong>(Shown)</strong>",
        "<strong>Part (ii):</strong> At the end of $n$ years, the total accumulated savings forms a geometric series:<br>$$S_n = 1000(1.05) + 1000(1.05)^2 + 1000(1.05)^3 + \\dots + 1000(1.05)^n$$<br>This is a geometric progression with first term $a = 1000(1.05) = 1050$ and common ratio $r = 1.05$.<br>Using the sum formula:<br>\\begin{aligned} S_n &= \\dfrac{ a(r^n - 1) }{ r - 1 } \\cr &= \\dfrac{ 1050(1.05^n - 1) }{ 1.05 - 1 } \\cr &= \\dfrac{ 1050(1.05^n - 1) }{ 0.05 } \\cr &= 21000(1.05^n - 1) \\end{aligned} <strong>(Proven)</strong>",
        "<strong>Part (iii):</strong> Set up the inequality to find when the total value exceeds £50,000:<br>\\begin{aligned} 21000(1.05^n - 1) &&> 50000 \\cr 1.05^n - 1 &> \\dfrac{ 50000 }{ 21000 } \\cr 1.05^n - 1 &> \\dfrac{ 50 }{ 21 } \\cr 1.05^n &> \\dfrac{ 71 }{ 21 } \\cr 1.05^n &> 3.3810 \\end{aligned}<br>Taking natural logarithms of both sides:<br>\\begin{aligned} n \\ln(1.05) &> \\ln(3.3810) \\cr n &> \\dfrac{ \\ln(3.3810) }{ \\ln(1.05) } \\cr n &> 24.97 \\end{aligned}<br>Since $n$ must be an integer, the minimum number of years required is $25$ years."
    ],
    "pi_options": [
        {
            "ans": "<strong>Section (a) (ii)</strong> $d = 5$, <strong>(iii)</strong> $S_{15} = 555$<br><strong>Section (b) (iii)</strong> $26\\text{ years}$",
            "feedback": "This error occurs in part (b)(iii) if you made a calculation or rounding slip when evaluating the natural log division (such as rounding $24.97$ up to $26$ instead of evaluating $25$ years). Substituting $25$ years into the formula yields £$50,113.45$, which is indeed greater than £50,000."
        },
        {
            "ans": "<strong>Section (a) (ii)</strong> $d = 3$, <strong>(iii)</strong> $S_{15} = 345$<br><strong>Section (b) (iii)</strong> $25\\text{ years}$",
            "feedback": "Your part (b) calculation is correct. However, this error occurs in Section (a) if you solved for $d$ incorrectly, such as setting $d = 2x - 1 = 3$ by mistake instead of $2x + 1$."
        },
        {
            "ans": "<strong>Section (a) (ii)</strong> $d = 5$, <strong>(iii)</strong> $S_{15} = 555$<br><strong>Section (b) (iii)</strong> $30\\text{ years}$",
            "feedback": "Your Section (a) calculations are correct. In Section (b)(iii), this error occurs if you set up the series sum incorrectly, such as using $a = 1000$ instead of $1050$ as the first term of the series, which shifts the powers of your geometric progression."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Shifting the Sum to Infinity",
        "content": "When deposits are made at the beginning of each year, every deposit receives interest at the end of that year. This means the first term of your geometric series is $1000(1.05) = 1050$ instead of $1000$. Paying attention to this detail is the key to setting up your series correctly."
    }
},
{
    "id": "004810",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Sequences and Series",
    "subtopic": [
        "Geometric Progressions",
        "Sum to Infinity",
        "Financial Modelling"
    ],
    "img": false,
    "question": "<strong>Section (a)</strong><br><br><strong>(i)</strong> Prove that the sum to infinity, $S_\\infty$, of a geometric progression with first term $a$ and common ratio $r$ is:<br>$$S_\\infty = \\dfrac{ a }{ 1 - r }$$<br>stating the condition on $r$ for which this sum exists.<br><br><strong>(ii)</strong> An infinite geometric progression has sum to infinity $54$. Given that the sum of the first two terms of this progression is $48$ and the common ratio $r$ is positive, show that:<br>$$9r^2 - 1 = 0$$<br><strong>(iii)</strong> Hence, find the value of $r$.<br><br><strong>Section (b)</strong><br><br>A person takes out a loan of £10,000. Interest is charged at a rate of 1.5% per month, calculated and added to the outstanding balance at the end of each month. At the end of each month, immediately after interest is added, the borrower makes a fixed repayment of £$X$.<br><br><strong>(i)</strong> Show that the amount owed at the end of Month 3, after the third repayment has been made, is given by:<br>$$10000(1.015)^3 - X(1.015^2 + 1.015 + 1)$$<br><strong>(ii)</strong> Form and sum a geometric series to prove that the amount owed at the end of Month $n$, after the $n$-th repayment has been made, is given by:<br>$$10000(1.015)^n - \\dfrac{ X }{ 0.015 }(1.015^n - 1)$$<br><strong>(iii)</strong> Hence, find the exact monthly repayment £$X$ required to completely pay off the loan in exactly $60$ months (5 years). Give your answer to the nearest penny.",
    "steps": [
        "<strong>Section (a)</strong><br><br><strong>Part (i):</strong> We start with our geometric progression sum formula $S_n = \\dfrac{ a(1 - r^n) }{ 1 - r }$.<br>For the sum to infinity to exist, the term $r^n$ must approach zero as $n \\to \\infty$. This occurs if and only if:<br>$$|r| < 1 \\quad (\\text{or } -1 < r < 1)$$<br>Under this condition, $r^n \\to 0$, which yields:<br>$$S_\\infty = \\dfrac{ a }{ 1 - r }$$ <strong>(Proven)</strong>",
        "<strong>Part (ii):</strong> We are given the sum to infinity $S_\\infty = 54$, which implies:<br>\\begin{aligned} 54 &= \\dfrac{ a }{ 1 - r } \\implies a = 54(1 - r) \\end{aligned}<br>We are also given the sum of the first two terms $S_2 = a + ar = a(1 + r) = 48$. Substitute $a = 54(1 - r)$ into this equation:<br>\\begin{aligned} 54(1 - r)(1 + r) &= 48 \\cr 54(1 - r^2) &= 48 \\cr 1 - r^2 &= \\dfrac{ 48 }{ 54 } = \\dfrac{ 8 }{ 9 } \\cr r^2 &= \\dfrac{ 1 }{ 9 } \\cr 9r^2 - 1 &= 0 \\end{aligned} <strong>(Shown)</strong>",
        "<strong>Part (iii):</strong> We solve our equation $9r^2 - 1 = 0$:<br>\\begin{aligned} r^2 &= \\dfrac{ 1 }{ 9 } \\cr r &= \\pm \\dfrac{ 1 }{ 3 } \\end{aligned}<br>Since we are given that the common ratio $r$ is positive, we reject the negative root. Thus:<br>$$r = \\dfrac{ 1 }{ 3 }$$",
        "<strong>Section (b)</strong><br><br><strong>Part (i):</strong> Let us trace the balance owed at the end of each month:<br>End of Month 1: $10000(1.015) - X$<br>End of Month 2: The previous balance is multiplied by $1.015$, and a further repayment $X$ is made:<br>\\begin{aligned} \\text{Balance} &= [10000(1.015) - X](1.015) - X \\cr &= 10000(1.015)^2 - X(1.015) - X \\cr &= 10000(1.015)^2 - X(1.015 + 1) \\end{aligned}<br>End of Month 3: The previous balance is multiplied by $1.015$, and a further repayment $X$ is made:<br>\\begin{aligned} \\text{Balance} &= [10000(1.015)^2 - X(1.015 + 1)](1.015) - X \\cr &= 10000(1.015)^3 - X(1.015^2 + 1.015 + 1) \\end{aligned} <strong>(Shown)</strong>",
        "<strong>Part (ii):</strong> Following this recurrence pattern, the balance owed at the end of Month $n$ is:<br>$$\\text{Balance} = 10000(1.015)^n - X\\left( 1 + 1.015 + 1.015^2 + \\dots + 1.015^{ n-1 } \\right)$$<br>The term inside the brackets is a geometric series with first term $a = 1$ and common ratio $r = 1.015$. Summing this series gives:<br>\\begin{aligned} S_n &= \\dfrac{ 1(1.015^n - 1) }{ 1.015 - 1 } = \\dfrac{ 1.015^n - 1 }{ 0.015 } \\end{aligned}<br>Substitute this back to find our remaining balance:<br>$$\\text{Balance} = 10000(1.015)^n - \\dfrac{ X }{ 0.015 }(1.015^n - 1)$$ <strong>(Proven)</strong>",
        "<strong>Part (iii):</strong> To pay off the loan completely in 60 months, the balance at $n = 60$ must be equal to $0$:<br>\\begin{aligned} 0 &= 10000(1.015)^{ 60 } - \\dfrac{ X }{ 0.015 }\\left( 1.015^{ 60 } - 1 \\right) \\cr 10000(1.015)^{ 60 } &= \\dfrac{ X }{ 0.015 }\\left( 1.015^{ 60 } - 1 \\right) \\cr X &= \\dfrac{ 150(1.015)^{ 60 } }{ 1.015^{ 60 } - 1 } \\end{aligned}<br>Using a calculator to find $1.015^{ 60 } \\approx 2.44322$:<br>\\begin{aligned} X &\\approx \\dfrac{ 150(2.44322) }{ 2.44322 - 1 } \\cr &\\approx \\dfrac{ 366.48297 }{ 1.44322 } \\cr &\\approx 253.934 \\end{aligned}<br>Thus, the required monthly repayment is £253.93 (to the nearest penny)."
    ],
    "pi_options": [
        {
            "ans": "<strong>Section (a) (iii)</strong> $r = \\dfrac{ 1 }{ 3 }$<br><strong>Section (b) (iii)</strong> £$251.23$",
            "feedback": "Your Section (a) calculations are correct. In Section (b)(iii), this error occurs if you made a calculation slip when evaluating the exponential quotient, such as dividing by $1.45$ instead of $1.44322$."
        },
        {
            "ans": "<strong>Section (a) (iii)</strong> $r = \\dfrac{ 1 }{ 9 }$<br><strong>Section (b) (iii)</strong> £$253.93$",
            "feedback": "Your monthly repayment calculation in part (b) is correct. However, this error occurs in Section (a)(iii) if you forgot to take the square root of $r^2 = 1/9$, reporting $r = 1/9$ instead."
        },
        {
            "ans": "<strong>Section (a) (iii)</strong> $r = \\dfrac{ 1 }{ 3 }$<br><strong>Section (b) (iii)</strong> £$166.67$",
            "feedback": "Your Section (a) calculations are correct. In Section (b)(iii), this error occurs if you set up the equation incorrectly by neglecting the accumulated compound interest on the initial loan principal of £10,000, simply dividing the initial principal by 60 months ($10000/60 = 166.67$)."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Reducing Balance Loan Recurrence",
        "content": "Reducing balance loans are the most advanced application of geometric series. When setting up the recurrence relation, expand the first three terms step-by-step. This reveals the structure of the geometric series of repayments and prevents sign errors when subtracting the total repaid amount."
    }
}
];