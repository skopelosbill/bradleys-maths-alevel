window.ALEVEL_QUESTIONS = [
{
    "id": "004801",
    "board": "CCEA",
    "level": "A",
    "major_area": "Integration",
    "topic": "Applications of Integration",
    "subtopic": [
        "Area Between Curves",
        "Volume of Revolution",
        "Trigonometric Integration"
    ],
    "img": "images/Pure/004801.png",
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
    "level": "A",
    "major_area": "Integration",
    "topic": "Applications of Integration",
    "subtopic": [
        "Area Between Curves",
        "Volume of Revolution",
        "Exponential Integration"
    ],
    "img": "images/Pure/004802.png",
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
    "level": "A",
    "major_area": "Integration",
    "topic": "Applications of Integration",
    "subtopic": [
        "Area Between Curves",
        "Volume of Revolution"
    ],
    "img": "images/Pure/004803.png",
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
        "content": "In the Volume of Revolution formula $V = \\pi \\int y^2 \\mathrm{d}x$, always square the function $y$ *before* you integrate. For a function like $y = \\sqrt{x}$, squaring simplifies the integrand directly to $x$, making the integration exceptionally straightforward. Don't forget the factor of $\\pi$!"
    }
},
{
    "id": "004804",
    "board": "CCEA",
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
}
];