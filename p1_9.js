window.ALEVEL_QUESTIONS = [
{
    "id": "004401",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Coordinate Geometry",
    "topic": "Circles",
    "subtopic": [
        "Equations of Circles",
        "Quadratic Discriminants"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Find the range of values of $k$ for which the quadratic equation $x^2 + kx + 36 = 0$ has no real roots. [6]<br><br><strong>(b)</strong> Find the coordinates of the centre and the exact area of the circle given by the equation:<br>$$x^2 + 6x + y^2 - 8y - 11 = 0$$ [6]",
    "steps": [
        "<strong>Step 1: Analyze part (a) using the quadratic discriminant</strong><br>For a quadratic equation $ax^2 + bx + c = 0$ to have no real roots, its discriminant $\\Delta = b^2 - 4ac$ must be strictly less than $0$.<br>For the equation $x^2 + kx + 36 = 0$, we identify the coefficients:<br>\\begin{aligned} a &= 1 \\cr b &= k \\cr c &= 36 \\cr \\Delta &= k^2 - 4( 1 )( 36 ) \\cr \\Delta &= k^2 - 144 \\end{aligned}",
        "<strong>Step 2: Solve the inequality for $k$</strong><br>Set the discriminant strictly less than zero:<br>\\begin{aligned} k^2 - 144 &< 0 \\cr k^2 &< 144 \\cr -12 < k &< 12 \\end{aligned}<br>Thus, the range of values of $k$ for which there are no real roots is $-12 < k < 12$.",
        "<strong>Step 3: Analyze part (b) by completing the square</strong><br>To find the centre and radius of the circle, we rearrange the equation $x^2 + 6x + y^2 - 8y - 11 = 0$ by completing the square for both the $x$ and $y$ terms:<br>\\begin{aligned} x^2 + 6x &= ( x + 3 )^2 - 9 \\cr y^2 - 8y &= ( y - 4 )^2 - 16 \\end{aligned}",
        "<strong>Step 4: Write the circle equation in standard form</strong><br>Substitute these completed square forms back into the circle's equation:<br>\\begin{aligned} ( x + 3 )^2 - 9 + ( y - 4 )^2 - 16 - 11 &= 0 \\cr ( x + 3 )^2 + ( y - 4 )^2 - 36 &= 0 \\cr ( x + 3 )^2 + ( y - 4 )^2 &= 36 \\cr \\end{aligned}",
        "<strong>Step 5: Identify the centre and calculate the area</strong><br>Comparing this to the standard circle equation $( x - h )^2 + ( y - k )^2 = r^2$, we obtain:<br>\\begin{aligned} \\text{Centre } ( h, k ) &= ( -3, 4 ) \\cr r^2 &= 36 \\cr \\end{aligned}<br>The area of a circle is given by $A = \\pi r^2$. Therefore:<br>\\begin{aligned} A &= \\pi ( 36 ) \\cr A &= 36\\pi \\cr \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$k < 12 \\text{ or } k > -12, \\quad \\text{Centre: } (3, -4), \\quad \\text{Area: } 11\\pi$$",
            "feedback": "This feedback shows a sign error when completing the square for the circle, leading to an incorrect centre and an incorrect radius squared ($r^2 = 11$ instead of $36$). Additionally, writing the inequality as two separate parts without a conjunction or with 'or' is logically incorrect for a 'no real roots' condition."
        },
        {
            "ans": "$$-12 \\le k \\le 12, \\quad \\text{Centre: } (-3, 4), \\quad \\text{Area: } 36\\pi$$",
            "feedback": "This option uses weak inequalities ($\\le$) instead of strict inequalities ($<$). Since the question asks for 'no real roots', the discriminant must be strictly less than zero ($\\Delta < 0$). If $\\Delta = 0$, the equation has one repeated real root."
        },
        {
            "ans": "$$-12 < k < 12, \\quad \\text{Centre: } (-3, 4), \\quad \\text{Area: } 6\\pi$$",
            "feedback": "You identified the correct range for $k$ and the correct centre, but you calculated the area of the circle using $A = \\pi r$ instead of $A = \\pi r^2$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Watch the Boundaries of Discriminants",
        "content": "Always pay close attention to whether inequality signs are strict or non-strict. For no real roots, we use a strict inequality $( \\Delta < 0 )$. Also, watch out when finding the area of a circle from the standard equation: the constant term on the right is $r^2$, so the area is simply $\\pi$ multiplied by that exact value, without needing to square it again!"
    }
},
{
    "id": "004402",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Coordinate Geometry",
    "topic": "Circles",
    "subtopic": [
        "Equations of Circles",
        "Quadratic Discriminants"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Find the range of values of $p$ for which the quadratic equation $2x^2 - px + 8 = 0$ has two distinct real roots. [6]<br><br><strong>(b)</strong> A circle has centre $C(3, -2)$ and passes through the point $P(7, 1)$. Find the equation of the circle, giving your answer in the form $x^2 + y^2 + ax + by + c = 0$, where $a$, $b$, and $c$ are integers. [6]",
    "steps": [
        "<strong>Step 1: Set up the discriminant for part (a)</strong><br>For the quadratic equation $2x^2 - px + 8 = 0$ to have two distinct real roots, its discriminant $\\Delta = b^2 - 4ac$ must be strictly greater than $0$.<br>Identify the coefficients:<br>\\begin{aligned} a &= 2 \\cr b &= -p \\cr c &= 8 \\cr \\Delta &= ( -p )^2 - 4( 2 )( 8 ) \\cr \\Delta &= p^2 - 64 \\end{aligned}",
        "<strong>Step 2: Solve the inequality for $p$</strong><br>Set the discriminant strictly greater than zero and solve the quadratic inequality:<br>\\begin{aligned} p^2 - 64 &> 0 \\cr p^2 &> 64 \\cr p < -8 &\\text{ or } p > 8 \\end{aligned}<br>Thus, the range of values is $p < -8$ or $p > 8$.",
        "<strong>Step 3: Determine the radius squared for part (b)</strong><br>The radius $r$ of the circle is the distance between the centre $C(3, -2)$ and the point $P(7, 1)$. The radius squared $r^2$ is given by:<br>\\begin{aligned} r^2 &= ( 7 - 3 )^2 + ( 1 - ( -2 ) )^2 \\cr r^2 &= 4^2 + 3^2 \\cr r^2 &= 16 + 9 \\cr r^2 &= 25 \\end{aligned}",
        "<strong>Step 4: Write and expand the circle equation</strong><br>The equation of the circle in standard form is:<br>$$( x - 3 )^2 + ( y + 2 )^2 = 25$$<br>Expand the squared terms:<br>\\begin{aligned} ( x^2 - 6x + 9 ) + ( y^2 + 4y + 4 ) &= 25 \\cr x^2 + y^2 - 6x + 4y + 13 &= 25 \\cr x^2 + y^2 - 6x + 4y - 12 &= 0 \\cr \\end{aligned}<br>This is in the required form $x^2 + y^2 + ax + by + c = 0$ with integers $a = -6$, $b = 4$, and $c = -12$."
    ],
    "pi_options": [
        {
            "ans": "$$-8 < p < 8, \\quad x^2 + y^2 - 6x + 4y + 13 = 0$$",
            "feedback": "This option contains two common errors: first, solving $p^2 - 64 > 0$ as a bounded interval $-8 < p < 8$ (which is the solution for $p^2 - 64 < 0$); second, forgetting to subtract the $r^2 = 25$ term from the constant sum of $13$ when expanding the circle equation."
        },
        {
            "ans": "$$p < -8 \\text{ or } p > 8, \\quad x^2 + y^2 + 6x - 4y - 12 = 0$$",
            "feedback": "Your discriminant work is correct. However, when writing the circle equation from the centre $C(3, -2)$, you used the wrong signs inside the brackets: $( x + 3 )^2 + ( y - 2 )^2 = r^2$. This led to incorrect signs for the $x$ and $y$ terms in the expanded form."
        },
        {
            "ans": "$$p \\le -8 \\text{ or } p \\ge 8, \\quad x^2 + y^2 - 6x + 4y - 12 = 0$$",
            "feedback": "This option uses non-strict inequalities ($\\le$ and $\\ge$). For two distinct real roots, the discriminant must be strictly greater than zero ($\\Delta > 0$). If $\\Delta = 0$, the roots are real but identical, not distinct."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Expanding Circle Conventions",
        "content": "When expanding the standard equation $( x - h )^2 + ( y - k )^2 = r^2$, always remember to subtract $r^2$ from both sides to set the final quadratic form to $0$. A very common oversight is leaving $+ ( h^2 + k^2 )$ on the left without moving $r^2$ across."
    }
},
{
    "id": "004403",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Coordinate Geometry",
    "topic": "Circles",
    "subtopic": [
        "Equations of Circles",
        "Quadratic Discriminants"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Find the non-zero values of $m$ for which the quadratic equation $3x^2 + 2mx + 12 = 0$ has exactly one real root. [5]<br><br><strong>(b)</strong> A circle is defined by the equation:<br>$$x^2 + y^2 - 8x - 4y - 9 = 0$$<br>Find the coordinates of the points where this circle intersects the $x$-axis. [7]",
    "steps": [
        "<strong>Step 1: Apply the condition for exactly one real root in part (a)</strong><br>A quadratic equation has exactly one real root if and only if its discriminant is equal to zero ($\\Delta = b^2 - 4ac = 0$).<br>For $3x^2 + 2mx + 12 = 0$, we have:<br>\\begin{aligned} a &= 3 \\cr b &= 2m \\cr c &= 12 \\cr \\Delta &= ( 2m )^2 - 4( 3 )( 12 ) \\cr \\Delta &= 4m^2 - 144 \\end{aligned}",
        "<strong>Step 2: Solve for $m$</strong><br>Set the discriminant equal to zero:<br>\\begin{aligned} 4m^2 - 144 &= 0 \\cr 4m^2 &= 144 \\cr m^2 &= 36 \\cr m &= \\pm 6 \\end{aligned}<br>The non-zero values are $m = 6$ and $m = -6$.",
        "<strong>Step 3: Set up the intersection with the $x$-axis for part (b)</strong><br>Any point on the $x$-axis has a $y$-coordinate of $0$. Substitute $y = 0$ directly into the circle's equation:<br>\\begin{aligned} x^2 + ( 0 )^2 - 8x - 4( 0 ) - 9 &= 0 \\cr x^2 - 8x - 9 &= 0 \\cr \\end{aligned}",
        "<strong>Step 4: Solve the quadratic equation to find the intersection points</strong><br>Factorise the quadratic expression:<br>\\begin{aligned} ( x - 9 )( x + 1 ) &= 0 \\cr x = 9 &\\text{ or } x = -1 \\cr \\end{aligned}<br>Thus, the coordinates of the intersection points are $( 9, 0 )$ and $( -1, 0 )$."
    ],
    "pi_options": [
        {
            "ans": "$$m = 36, \\quad (9, 0) \\text{ and } (-1, 0)$$",
            "feedback": "This option correctly solves part (b), but in part (a) it incorrectly equates $m^2 = 36$ directly to $m = 36$, forgetting to take the square root of $36$."
        },
        {
            "ans": "$$m = \\pm 6, \\quad (0, 9) \\text{ and } (0, -1)$$",
            "feedback": "Your values for $m$ are correct. However, for the intersection with the $x$-axis, you must set $y = 0$ to find the $x$-coordinates. Setting $x = 0$ finds the intersections with the $y$-axis instead, and writing them as $(0, x)$ is coordinates transposing."
        },
        {
            "ans": "$$m = \\pm 12, \\quad (9, 0) \\text{ and } (-1, 0)$$",
            "feedback": "In part (a), you calculated $\\Delta = 2m^2 - 144 = 0 \\implies m^2 = 72$, or miscalculated $(2m)^2$ as $2m^2$ instead of $4m^2$. Remember to square the entire coefficient: $(2m)^2 = 4m^2$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Finding Axis Intersections Directly",
        "content": "To find the intersection points of any curve with the coordinate axes, you do not need to complete the square first! Simply set $y = 0$ for $x$-axis intersections, or $x = 0$ for $y$-axis intersections, and solve the remaining single-variable equation directly. This saves time and avoids algebraic mistakes."
    }
},
{
    "id": "004404",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Coordinate Geometry",
    "topic": "Circles",
    "subtopic": [
        "Equations of Circles",
        "Line-Circle Intersections"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Find the range of values of $m$ for which the straight line $y = mx + 2$ and the curve $y = x^2 + 5x + 6$ do not intersect. [7]<br><br><strong>(b)</strong> The line segment joining the points $A(-1, 5)$ and $B(7, -1)$ forms a diameter of a circle. Find the equation of this circle, leaving your answer in the form $(x-h)^2 + (y-k)^2 = r^2$. [5]",
    "steps": [
        "<strong>Step 1: Set up the intersection equation for part (a)</strong><br>To find where the line and curve intersect, set their equations equal to each other:<br>\\begin{aligned} mx + 2 &= x^2 + 5x + 6 \\cr x^2 + ( 5 - m )x + 4 &= 0 \\cr \\end{aligned}",
        "<strong>Step 2: Apply the discriminant condition for no intersection</strong><br>The line and curve do not intersect if the resulting quadratic equation has no real solutions. This requires the discriminant $\\Delta = b^2 - 4ac$ to be strictly less than $0$.<br>Identify the coefficients: $a = 1$, $b = 5 - m$, $c = 4$.<br>\\begin{aligned} \\Delta &= ( 5 - m )^2 - 4( 1 )( 4 ) \\cr \\Delta &= ( 5 - m )^2 - 16 \\cr \\end{aligned}",
        "<strong>Step 3: Solve the quadratic inequality for $m$</strong><br>Set the discriminant strictly less than zero:<br>\\begin{aligned} ( 5 - m )^2 - 16 &< 0 \\cr ( 5 - m )^2 &< 16 \\cr -4 < 5 - m &< 4 \\cr \\end{aligned}<br>Subtract $5$ from all parts:<br>$$-9 < -m < -1$$<br>Multiply by $-1$ and reverse the inequality signs:<br>$$1 < m < 9$$",
        "<strong>Step 4: Find the centre of the circle for part (b)</strong><br>The centre $C(h, k)$ of the circle is the midpoint of the diameter segment $AB$:<br>\\begin{aligned} h &= \\dfrac{ -1 + 7 }{ 2 } = 3 \\cr k &= \\dfrac{ 5 + ( -1 ) }{ 2 } = 2 \\cr \\end{aligned}<br>So, the centre is $C(3, 2)$.",
        "<strong>Step 5: Find the radius squared and write the equation</strong><br>The diameter length squared $AB^2$ is:<br>\\begin{aligned} AB^2 &= ( 7 - ( -1 ) )^2 + ( -1 - 5 )^2 \\cr AB^2 &= 8^2 + ( -6 )^2 \\cr AB^2 &= 64 + 36 = 100 \\cr \\end{aligned}<br>The radius $r$ is half the diameter, so $r = \\dfrac{ \\sqrt{ 100 } }{ 2 } = 5$. Thus, $r^2 = 25$.<br>The equation of the circle is:<br>$$( x - 3 )^2 + ( y - 2 )^2 = 25$$"
    ],
    "pi_options": [
        {
            "ans": "$$m < 1 \\text{ or } m > 9, \\quad (x - 3)^2 + (y - 2)^2 = 100$$",
            "feedback": "This option has two errors: first, it solves the discriminant inequality $(5-m)^2 < 16$ as outside values rather than a bounded interval; second, it uses the diameter squared ($100$) instead of the radius squared ($r^2 = 25$) in the circle's equation."
        },
        {
            "ans": "$$1 < m < 9, \\quad (x + 3)^2 + (y + 2)^2 = 25$$",
            "feedback": "Your range for $m$ is correct. However, for the circle, the midpoint coordinates are $h = 3$ and $k = 2$. When substituted into the standard equation $(x-h)^2 + (y-k)^2 = r^2$, the signs become negative, resulting in $(x-3)^2 + (y-2)^2 = 25$."
        },
        {
            "ans": "$$1 \\le m \\le 9, \\quad (x - 3)^2 + (y - 2)^2 = 25$$",
            "feedback": "This option uses non-strict inequalities ($\\le$ and $\\ge$). For the line and curve to have no points of intersection, they must not touch at all, meaning the discriminant must be strictly less than zero ($\\Delta < 0$). A discriminant of zero means they touch at exactly one point (tangent)."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Geometric Interpretations of the Discriminant",
        "content": "The quadratic discriminant is a powerful tool for analyzing intersections between lines and curves. When setting $y_{\\text{line}} = y_{\\text{curve}}$, the resulting $x$-equation represents the $x$-coordinates of the intersection points. Having no real solutions $( \\Delta < 0 )$ algebraically corresponds to no intersection points geometrically."
    }
},
{
    "id": "004405",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Coordinate Geometry",
    "topic": "Circles",
    "subtopic": [
        "Equations of Circles",
        "Quadratic Discriminants"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Show that the quadratic equation $x^2 + (k-2)x - 2k = 0$ has real roots for all real values of $k$. [5]<br><br><strong>(b)</strong> A circle is given by the equation:<br>$$x^2 + y^2 - 10x + 2y - 10 = 0$$<br>Determine, with a clear algebraic reason, whether the point $P(8, 4)$ lies inside, on, or outside this circle. [7]",
    "steps": [
        "<strong>Step 1: Calculate the discriminant for part (a)</strong><br>An equation has real roots if its discriminant is greater than or equal to zero ($\\Delta \\ge 0$).<br>For $x^2 + ( k - 2 )x - 2k = 0$, identify the coefficients: $a = 1$, $b = k - 2$, $c = -2k$.<br>\\begin{aligned} \\Delta &= b^2 - 4ac \\cr \\Delta &= ( k - 2 )^2 - 4( 1 )( -2k ) \\cr \\Delta &= k^2 - 4k + 4 + 8k \\cr \\Delta &= k^2 + 4k + 4 \\cr \\end{aligned}",
        "<strong>Step 2: Factorise the discriminant and complete the proof</strong><br>Factorise the quadratic expression for the discriminant:<br>$$\\Delta = ( k + 2 )^2$$<br>Since any real number squared is non-negative, we have:<br>$$( k + 2 )^2 \\ge 0 \\quad \\text{for all real } k$$<br>Because $\\Delta \\ge 0$ for all real values of $k$, the equation is guaranteed to have real roots for all real $k$.",
        "<strong>Step 3: Complete the square for the circle in part (b)</strong><br>Rewrite the circle equation $x^2 + y^2 - 10x + 2y - 10 = 0$ to find its centre and radius squared:<br>\\begin{aligned} x^2 - 10x &= ( x - 5 )^2 - 25 \\cr y^2 + 2y &= ( y + 1 )^2 - 1 \\cr \\end{aligned}",
        "<strong>Step 4: Write the circle equation in standard form</strong><br>Substitute these back into the original equation:<br>\\begin{aligned} ( x - 5 )^2 - 25 + ( y + 1 )^2 - 1 - 10 &= 0 \\cr ( x - 5 )^2 + ( y + 1 )^2 - 36 &= 0 \\cr ( x - 5 )^2 + ( y + 1 )^2 &= 36 \\cr \\end{aligned}<br>The centre is $C(5, -1)$ and the radius squared is $r^2 = 36$ (so the radius is $r = 6$).",
        "<strong>Step 5: Determine the position of the point $P(8, 4)$</strong><br>Calculate the distance squared from the circle's centre $C(5, -1)$ to the point $P(8, 4)$:<br>\\begin{aligned} CP^2 &= ( 8 - 5 )^2 + ( 4 - ( -1 ) )^2 \\cr CP^2 &= 3^2 + 5^2 \\cr CP^2 &= 9 + 25 \\cr CP^2 &= 34 \\cr \\end{aligned}<br>Now compare this distance squared to the radius squared ($r^2 = 36$):<br>Since $34 < 36$ (meaning the distance to $P$ is less than the radius), the point $P(8, 4)$ lies <strong>inside</strong> the circle."
    ],
    "pi_options": [
        {
            "ans": "$$\\Delta = (k-2)^2 - 8k, \\quad P(8, 4) \\text{ lies outside the circle because } 34 < 36$$",
            "feedback": "This contains two errors: first, a sign error when calculating the discriminant ($-4 \\times 1 \\times -2k$ is $+8k$, not $-8k$); second, concluding that a distance less than the radius ($34 < 36$) means the point lies 'outside' the circle. If the distance to the point is smaller than the radius, it must be inside."
        },
        {
            "ans": "$$\\Delta = (k+2)^2, \\quad P(8, 4) \\text{ lies on the circle because the distance is close to 6}$$",
            "feedback": "Your discriminant and completed square work are correct. However, for a point to lie 'on' the circle, the distance squared from the centre must be exactly equal to $r^2 = 36$. Since $34 \\ne 36$, it does not lie on the circle."
        },
        {
            "ans": "$$\\Delta = (k+2)^2, \\quad P(8, 4) \\text{ lies outside the circle because } CP^2 = 34$$",
            "feedback": "Your calculations are correct, but you misapplied the logic. Because the distance squared from the centre to $P$ ($34$) is less than the radius squared ($36$), the point lies inside the boundary of the circle, not outside."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Classifying Points Relative to Circles",
        "content": "To classify whether a point lies inside, on, or outside a circle, simply find the squared distance from the centre to that point, $d^2$, and compare it directly to $r^2$. You do not need to calculate the actual square root of the distance! If $d^2 < r^2$, the point is inside. If $d^2 = r^2$, it lies on the circle. If $d^2 > r^2$, it is outside."
    }
},
{
    "id": "004406",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Integration",
    "topic": "Definite Integration",
    "subtopic": [
        "Definite Integration",
        "Trigonometric Equations"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Given that<br>$$\\int_{ 1 }^{ k } 3\\sqrt{x} \\, \\mathrm{d}x = 14$$<br>where $k > 1$, find the value of $k$. [6]<br><br><strong>(b)</strong> Solve the equation<br>$$2\\sin^2 \\theta + \\cos \\theta = 1$$<br>for $0^\\circ \\le \\theta < 360^\\circ$. [7]",
    "steps": [
        "<strong>Step 1: Integrate the function in part (a)</strong><br>First, rewrite the integrand $3\\sqrt{x}$ in index form as $3x^{ 1/2 }$. Integrate this expression with respect to $x$ using the power rule:<br>\\begin{aligned} \\int 3x^{ 1/2 } \\, \\mathrm{d}x &= 3 \\cdot \\dfrac{ x^{ 3/2 } }{ 3/2 } \\cr &= 2x^{ 3/2 } \\end{aligned}",
        "<strong>Step 2: Apply the limits of integration and simplify</strong><br>Substitute the integration limits of $1$ and $k$ into your integrated expression, then set the result equal to $14$:<br>\\begin{aligned} \\left[ 2x^{ 3/2 } \\right]_{ 1 }^{ k } &= 14 \\cr 2k^{ 3/2 } - 2( 1 )^{ 3/2 } &= 14 \\cr 2k^{ 3/2 } - 2 &= 14 \\end{aligned}",
        "<strong>Step 3: Solve the equation for $k$</strong><br>Rearrange the simplified equation to solve for the unknown limit $k$:<br>\\begin{aligned} 2k^{ 3/2 } &= 16 \\cr k^{ 3/2 } &= 8 \\cr ( \\sqrt{ k } )^3 &= 8 \\cr \\sqrt{ k } &= 2 \\cr k &= 4 \\end{aligned}<br>Since $k = 4$ is greater than $1$, this is our correct solution.",
        "<strong>Step 4: Express the trigonometric equation in terms of a single ratio</strong><br>For the equation $2\\sin^2 \\theta + \\cos \\theta = 1$, use the fundamental identity $\\sin^2 \\theta = 1 - \\cos^2 \\theta$ to rewrite the entire equation in terms of $\\cos \\theta$:<br>\\begin{aligned} 2( 1 - \\cos^2 \\theta ) + \\cos \\theta &= 1 \\cr 2 - 2\\cos^2 \\theta + \\cos \\theta &= 1 \\cr -2\\cos^2 \\theta + \\cos \\theta + 1 &= 0 \\cr 2\\cos^2 \\theta - \\cos \\theta - 1 &= 0 \\cr \\end{aligned}",
        "<strong>Step 5: Factorise the quadratic trigonometric equation</strong><br>Let $u = \\cos \\theta$ to form a standard quadratic equation $2u^2 - u - 1 = 0$. Factorise this expression:<br>\\begin{aligned} ( 2u + 1 )( u - 1 ) &= 0 \\cr u = -\\dfrac{ 1 }{ 2 } \\quad \\text{or} \\quad u &= 1 \\cr \\end{aligned}",
        "<strong>Step 6: Determine all solutions within the specified interval</strong><br>Substitute back $u = \\cos \\theta$ and find the angle solutions for $\\theta$ in the interval $0^\\circ \\le \\theta < 360^\\circ$:<br>For $\\cos \\theta = 1$:<br>$$\\theta = 0^\\circ$$<br>For $\\cos \\theta = -\\dfrac{ 1 }{ 2 }$:<br>\\begin{aligned} \\theta &= 180^\\circ - 60^\\circ = 120^\\circ \\cr \\theta &= 180^\\circ + 60^\\circ = 240^\\circ \\cr \\end{aligned}<br>Combining these yields the final solutions: $\\theta = 0^\\circ, 120^\\circ, 240^\\circ$."
    ],
    "pi_options": [
        {
            "ans": "$$k = 22^{ 2/3 }, \\quad \\theta = 0^\\circ, 120^\\circ, 240^\\circ$$",
            "feedback": "This distractor arises if you forget to subtract the lower limit of integration (1) during step 2. This leads to the equation $2k^{3/2} = 14 \\implies k^{3/2} = 7 \\implies k = 7^{2/3}$."
        },
        {
            "ans": "$$k = 4, \\quad \\theta = 0^\\circ, 60^\\circ, 300^\\circ$$",
            "feedback": "This option occurs if you resolved $\\cos \\theta = \\dfrac{1}{2}$ instead of $-\\dfrac{1}{2}$ during step 6, mistakenly placing your acute reference angle in quadrants I and IV instead of II and III where cosine is negative."
        },
        {
            "ans": "$$k = 5.29, \\quad \\theta = 0^\\circ, 120^\\circ, 240^\\circ$$",
            "feedback": "This distractor occurs if you integrated $\\sqrt{x}$ incorrectly as $\\dfrac{2}{3}x^{1/2}$ or similar, leading to incorrect powers when solving for $k$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Tracking Trigonometric Quadrants",
        "content": "When solving $\\cos \\theta = -c$ where $c > 0$, always remember that cosine is negative in the second and third quadrants. Use the reference angle $\\alpha$ to calculate the solutions as $180^\\circ - \\alpha$ and $180^\\circ + \\alpha$. Misidentifying the quadrants is a very common source of lost marks in AS level exams."
    }
},
{
    "id": "004407",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Integration",
    "topic": "Definite Integration",
    "subtopic": [
        "Definite Integration",
        "Trigonometric Equations"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Given that<br>$$\\int_{ 1 }^{ k } \\dfrac{ 4 }{ x^2 } \\, \\mathrm{d}x = 3$$<br>where $k > 1$, find the value of $k$. [6]<br><br><strong>(b)</strong> Solve the equation<br>$$3\\cos^2 \\theta + 4\\sin \\theta = 4$$<br>for $0^\\circ \\le \\theta \\le 360^\\circ$. [7]",
    "steps": [
        "<strong>Step 1: Integrate the reciprocal function in part (a)</strong><br>First, express the term $\\dfrac{ 4 }{ x^2 }$ with a negative exponent as $4x^{ -2 }$. Integrate this with respect to $x$:<br>\\begin{aligned} \\int 4x^{ -2 } \\, \\mathrm{d}x &= 4 \\cdot \\dfrac{ x^{ -1 } }{ -1 } \\cr &= -\\dfrac{ 4 }{ x } \\end{aligned}",
        "<strong>Step 2: Substitute the integration limits</strong><br>Apply the integration limits of $1$ and $k$ and set the result equal to $3$:<br>\\begin{aligned} \\left[ -\\dfrac{ 4 }{ x } \\right]_{ 1 }^{ k } &= 3 \\cr \\left( -\\dfrac{ 4 }{ k } \\right) - \\left( -\\dfrac{ 4 }{ 1 } \\right) &= 3 \\cr -\\dfrac{ 4 }{ k } + 4 &= 3 \\cr \\end{aligned}",
        "<strong>Step 3: Solve for the upper limit $k$</strong><br>Rearrange the algebraic equation to find $k$:<br>\\begin{aligned} 4 - \\dfrac{ 4 }{ k } &= 3 \\cr 1 &= \\dfrac{ 4 }{ k } \\cr k &= 4 \\end{aligned}<br>Since $k = 4$ is greater than $1$, this satisfies our boundary condition.",
        "<strong>Step 4: Substitute a trigonometric identity in part (b)</strong><br>For the equation $3\\cos^2 \\theta + 4\\sin \\theta = 4$, use the identity $\\cos^2 \\theta = 1 - \\sin^2 \\theta$ to rewrite the equation entirely in terms of $\\sin \\theta$:<br>\\begin{aligned} 3( 1 - \\sin^2 \\theta ) + 4\\sin \\theta &= 4 \\cr 3 - 3\\sin^2 \\theta + 4\\sin \\theta &= 4 \\cr -3\\sin^2 \\theta + 4\\sin \\theta - 1 &= 0 \\cr 3\\sin^2 \\theta - 4\\sin \\theta + 1 &= 0 \\cr \\end{aligned}",
        "<strong>Step 5: Factorise and solve for $\\sin \\theta$</strong><br>Let $u = \\sin \\theta$. The quadratic form is $3u^2 - 4u + 1 = 0$. Factorise this expression:<br>\\begin{aligned} ( 3u - 1 )( u - 1 ) &= 0 \\cr u = \\dfrac{ 1 }{ 3 } \\quad \\text{or} \\quad u &= 1 \\cr \\end{aligned}",
        "<strong>Step 6: Determine all angle solutions within the interval</strong><br>Find the values of $\\theta$ in the range $0^\\circ \\le \\theta \\le 360^\\circ$:<br>For $\\sin \\theta = 1$:<br>$$\\theta = 90.0^\\circ$$<br>For $\\sin \\theta = \\dfrac{ 1 }{ 3 }$:<br>\\begin{aligned} \\theta &= \\sin^{ -1 }\\left( \\dfrac{ 1 }{ 3 } \\right) \\approx 19.5^\\circ \\cr \\theta &= 180^\\circ - 19.5^\\circ = 160.5^\\circ \\cr \\end{aligned}<br>The final solutions (to the nearest tenth of a degree) are: $\\theta \\approx 19.5^\\circ, 90.0^\\circ, 160.5^\\circ$."
    ],
    "pi_options": [
        {
            "ans": "$$k = 4, \\quad \\theta \\approx 19.5^\\circ, 90.0^\\circ, 340.5^\\circ$$",
            "feedback": "This distractor has the second angle in the fourth quadrant ($340.5^\\circ$) instead of the second quadrant ($160.5^\\circ$). Because $\\sin \\theta = \\dfrac{1}{3}$ is positive, the solutions must lie in the first and second quadrants."
        },
        {
            "ans": "$$k = \\dfrac{ 4 }{ 7 }, \\quad \\theta \\approx 19.5^\\circ, 90.0^\\circ, 160.5^\\circ$$",
            "feedback": "This option arises if you made a sign error during step 2 when applying the lower limit of integration, solving $-\\dfrac{4}{k} - 4 = 3 \\implies -\\dfrac{4}{k} = 7 \\implies k = -\\dfrac{4}{7}$ (and then dropping the negative sign)."
        },
        {
            "ans": "$$k = 4, \\quad \\theta \\approx 30.0^\\circ, 90.0^\\circ, 150.0^\\circ$$",
            "feedback": "This distractor uses the common exact values of $\\sin 30^\\circ = 0.5$ as a mistaken approximation for $\\sin \\theta = \\dfrac{1}{3}$. Be sure to use your calculator to find $\\sin^{-1}\\left(\\dfrac{1}{3}\\right)$ accurately."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Power Rule with Negative Exponents",
        "content": "When integrating terms with variables in the denominator like $\\dfrac{c}{x^n}$, always rewrite them with negative indices as $cx^{-n}$ before applying the power rule $\\int x^p \\, \\mathrm{d}x = \\dfrac{x^{p+1}}{p+1}$. Don't forget that raising $-2$ by $1$ yields $-1$, not $-3$!"
    }
},
{
    "id": "004408",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Integration",
    "topic": "Definite Integration",
    "subtopic": [
        "Definite Integration",
        "Trigonometric Equations"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Given that<br>$$\\int_{ 0 }^{ k } ( 2x - 3 ) \\, \\mathrm{d}x = 4$$<br>where $k > 0$, find the value of $k$. [5]<br><br><strong>(b)</strong> Solve the equation<br>$$3\\sin \\theta - 4\\cos \\theta = 0$$<br>for $0^\\circ \\le \\theta \\le 360^\\circ$. [6]",
    "steps": [
        "<strong>Step 1: Integrate the polynomial in part (a)</strong><br>Integrate the expression $( 2x - 3 )$ term-by-term with respect to $x$:<br>\\begin{aligned} \\int ( 2x - 3 ) \\, \\mathrm{d}x &= \\dfrac{ 2x^2 }{ 2 } - 3x \\cr &= x^2 - 3x \\end{aligned}",
        "<strong>Step 2: Apply the limits of integration and set up the quadratic</strong><br>Substitute the limits of $0$ and $k$ into the expression and set the result equal to $4$:<br>\\begin{aligned} \\left[ x^2 - 3x \\right]_{ 0 }^{ k } &= 4 \\cr ( k^2 - 3k ) - ( 0^2 - 3( 0 ) ) &= 4 \\cr k^2 - 3k &= 4 \\cr k^2 - 3k - 4 &= 0 \\cr \\end{aligned}",
        "<strong>Step 3: Solve the quadratic equation for $k$</strong><br>Factorise the quadratic expression to find the roots:<br>\\begin{aligned} ( k - 4 )( k + 1 ) &= 0 \\cr k = 4 \\quad \\text{or} \\quad k &= -1 \\cr \\end{aligned}<br>Since the initial condition specifies $k > 0$, we discard the negative root $k = -1$, giving our final answer as $k = 4$.",
        "<strong>Step 4: Rearrange the trigonometric equation in part (b)</strong><br>To solve $3\\sin \\theta - 4\\cos \\theta = 0$, isolate the trigonometric terms and divide both sides by $\\cos \\theta$ to express the equation in terms of $\\tan \\theta$:<br>\\begin{aligned} 3\\sin \\theta &= 4\\cos \\theta \\cr \\dfrac{ \\sin \\theta }{ \\cos \\theta } &= \\dfrac{ 4 }{ 3 } \\cr \\tan \\theta &= \\dfrac{ 4 }{ 3 } \\cr \\end{aligned}",
        "<strong>Step 5: Identify the target quadrants and calculate the angles</strong><br>Since $\\tan \\theta = \\dfrac{ 4 }{ 3 }$ is positive, the solutions must lie in quadrant I and quadrant III:<br>In Quadrant I:<br>$$\\theta = \\tan^{ -1 }\\left( \\dfrac{ 4 }{ 3 } \\right) \\approx 53.1^\\circ$$<br>In Quadrant III:<br>$$\\theta = 180^\\circ + 53.1^\\circ = 233.1^\\circ$$<br>The solutions (to the nearest tenth of a degree) are: $\\theta \\approx 53.1^\\circ, 233.1^\\circ$."
    ],
    "pi_options": [
        {
            "ans": "$$k = 4 \\text{ or } k = -1, \\quad \\theta \\approx 53.1^\\circ, 126.9^\\circ$$",
            "feedback": "This distractor contains two errors: first, it fails to discard the negative limit $k = -1$ despite the constraint $k > 0$; second, it places the second angle in quadrant II ($126.9^\\circ$) where tangent is negative, instead of quadrant III ($233.1^\\circ$)."
        },
        {
            "ans": "$$k = 4, \\quad \\theta \\approx 36.9^\\circ, 216.9^\\circ$$",
            "feedback": "This option is formed if you made a reciprocal error when rearranging the trigonometric identity in step 4, mistakenly setting $\\tan \\theta = \\dfrac{3}{4}$ instead of $\\dfrac{4}{3}$."
        },
        {
            "ans": "$$k = 2, \\quad \\theta \\approx 53.1^\\circ, 233.1^\\circ$$",
            "feedback": "This distractor arises from a factorization error when solving the quadratic $k^2 - 3k - 4 = 0$ in step 3, mistakenly solving it as $(k-2)(k-2)=0$ or similar."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Discarding Invalid Solutions",
        "content": "When a quadratic equation arises in the middle of a coordinate geometry or calculus problem, always look back at the initial conditions of the question. Here, $k > 0$ dictates that we must discard the negative root $k = -1$. Leaving both values in your final answer is an easy way to drop accuracy marks."
    }
},
{
    "id": "004409",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Integration",
    "topic": "Definite Integration",
    "subtopic": [
        "Definite Integration",
        "Trigonometric Equations"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Find the exact area of the finite region bounded by the curve $y = x^2 - 4x$ and the $x$-axis. [6]<br><br><strong>(b)</strong> Solve the equation<br>$$\\cos( 2\\theta + 40^\\circ ) = -0.5$$<br>for $0^\\circ \\le \\theta \\le 180^\\circ$. [7]",
    "steps": [
        "<strong>Step 1: Find the bounding limits of the region for part (a)</strong><br>The boundary limits are the $x$-intercepts of the curve. Set $y = 0$ and factorise the quadratic equation:<br>\\begin{aligned} x^2 - 4x &= 0 \\cr x( x - 4 ) &= 0 \\cr x = 0 \\quad \\text{or} \\quad x &= 4 \\cr \\end{aligned}<br>The integration limits are therefore $0$ and $4$.",
        "<strong>Step 2: Set up and calculate the definite integral</strong><br>Integrate the expression $( x^2 - 4x )$ with respect to $x$:<br>\\begin{aligned} \\int ( x^2 - 4x ) \\, \\mathrm{d}x &= \\dfrac{ x^3 }{ 3 } - \\dfrac{ 4x^2 }{ 2 } \\cr &= \\dfrac{ x^3 }{ 3 } - 2x^2 \\cr \\end{aligned}",
        "<strong>Step 3: Evaluate the definite integral</strong><br>Substitute your limits of $0$ and $4$ into the integrated expression:<br>\\begin{aligned} \\left[ \\dfrac{ x^3 }{ 3 } - 2x^2 \\right]_{ 0 }^{ 4 } &= \\left( \\dfrac{ 4^3 }{ 3 } - 2( 4 )^2 \\right) - ( 0 ) \\cr &= \\left( \\dfrac{ 64 }{ 3 } - 32 \\right) \\cr &= \\dfrac{ 64 }{ 3 } - \\dfrac{ 96 }{ 3 } \\cr &= -\\dfrac{ 32 }{ 3 } \\cr \\end{aligned}",
        "<strong>Step 4: State the final area</strong><br>Because the curve lies entirely below the $x$-axis on the interval $( 0, 4 )$, the integral is negative. Area is always positive, so we take the absolute value:<br>$$\\text{Area} = \\dfrac{ 32 }{ 3 }$$",
        "<strong>Step 5: Define a substituted variable and adjust the interval for part (b)</strong><br>For the equation $\\cos( 2\\theta + 40^\\circ ) = -0.5$, let $\\phi = 2\\theta + 40^\\circ$.<br>Since $0^\\circ \\le \\theta \\le 180^\\circ$, adjust the limits for $\\phi$:<br>\\begin{aligned} 2( 0^\\circ ) + 40^\\circ &\\le 2\\theta + 40^\\circ \\le 2( 180^\\circ ) + 40^\\circ \\cr 40^\\circ &\\le \\phi \\le 400^\\circ \\cr \\end{aligned}",
        "<strong>Step 6: Solve for $\\phi$ and convert back to $\\theta$</strong><br>Solve $\\cos \\phi = -0.5$ within the interval $40^\\circ \\le \\phi \\le 400^\\circ$. The principal angles are:<br>$$\\phi = 120^\\circ, 240^\\circ$$<br>Now calculate the values of $\\theta$ using $2\\theta + 40^\\circ = \\phi$:<br>For $\\phi = 120^\\circ$:<br>\\begin{aligned} 2\\theta + 40^\\circ &= 120^\\circ \\cr 2\\theta &= 80^\\circ \\cr \\theta &= 40^\\circ \\cr \\end{aligned}<br>For $\\phi = 240^\\circ$:<br>\\begin{aligned} 2\\theta + 40^\\circ &= 240^\\circ \\cr 2\\theta &= 200^\\circ \\cr \\theta &= 100^\\circ \\cr \\end{aligned}<br>The final solutions are $\\theta = 40^\\circ, 100^\\circ$."
    ],
    "pi_options": [
        {
            "ans": "$$\\text{Area} = -\\dfrac{ 32 }{ 3 }, \\quad \\theta = 40^\\circ, 100^\\circ$$",
            "feedback": "Area is a physical measure and must always be stated as a positive quantity. Even though the definite integral yielded $-\\dfrac{32}{3}$ because the region lies below the $x$-axis, you must drop the negative sign when stating the area."
        },
        {
            "ans": "$$\\text{Area} = \\dfrac{ 32 }{ 3 }, \\quad \\theta = 10^\\circ, 70^\\circ$$",
            "feedback": "This distractor arises if you forgot to adjust the range for the substituted angle $\\phi$ in step 5, or if you made a subtraction error when converting $\\phi$ back to $\\theta$ (e.g., dividing by 2 before subtracting 40)."
        },
        {
            "ans": "$$\\text{Area} = 8, \\quad \\theta = 40^\\circ, 100^\\circ$$",
            "feedback": "This distractor occurs from an integration calculation error during step 3, such as integrating $-4x$ as $-4x$ instead of $-2x^2$, which leads to an incorrect value of $8$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Finding Bounding Limits for Areas",
        "content": "When finding the area of a region bounded by a curve and the $x$-axis, if the limits are not explicitly given, they are always the $x$-intercepts of the curve. Find these by setting $y = 0$ and factorising the equation before integrating."
    }
},
{
    "id": "004410",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Integration",
    "topic": "Definite Integration",
    "subtopic": [
        "Definite Integration",
        "Trigonometric Equations"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Given that<br>$$\\int_{ 1 }^{ 4 } \\left( 2x + \\dfrac{ a }{ \\sqrt{ x } } \\right) \\mathrm{d}x = 21$$<br>find the value of the constant $a$. [6]<br><br><strong>(b)</strong> Solve the equation<br>$$4\\cos^2 \\theta + 5\\cos \\theta + 1 = 0$$<br>for $0^\\circ \\le \\theta \\le 360^\\circ$. [7]",
    "steps": [
        "<strong>Step 1: Rewrite and integrate the function in part (a)</strong><br>Rewrite the term $\\dfrac{ a }{ \\sqrt{ x } }$ in index form as $ax^{ -1/2 }$. Now integrate the entire expression with respect to $x$:<br>\\begin{aligned} \\int \\left( 2x + ax^{ -1/2 } \\right) \\, \\mathrm{d}x &= x^2 + a \\cdot \\dfrac{ x^{ 1/2 } }{ 1/2 } \\cr &= x^2 + 2a\\sqrt{ x } \\cr \\end{aligned}",
        "<strong>Step 2: Apply the limits of integration</strong><br>Substitute the integration boundaries of $1$ and $4$ and set the resulting expression equal to $21$:<br>\\begin{aligned} \\left[ x^2 + 2a\\sqrt{ x } \\right]_{ 1 }^{ 4 } &= 21 \\cr \\left( 4^2 + 2a\\sqrt{ 4 } \\right) - \\left( 1^2 + 2a\\sqrt{ 1 } \\right) &= 21 \\cr ( 16 + 4a ) - ( 1 + 2a ) &= 21 \\cr 15 + 2a &= 21 \\cr \\end{aligned}",
        "<strong>Step 3: Solve for the constant $a$</strong><br>Solve the linear equation to find the value of $a$:<br>\\begin{aligned} 2a &= 6 \\cr a &= 3 \\cr \\end{aligned}",
        "<strong>Step 4: Factorise the quadratic trigonometric equation in part (b)</strong><br>The equation $4\\cos^2 \\theta + 5\\cos \\theta + 1 = 0$ is a quadratic in terms of $\\cos \\theta$. Let $u = \\cos \\theta$ and factorise the quadratic expression:<br>\\begin{aligned} 4u^2 + 5u + 1 &= 0 \\cr ( 4u + 1 )( u + 1 ) &= 0 \\cr u = -\\dfrac{ 1 }{ 4 } \\quad \\text{or} \\quad u &= -1 \\cr \\end{aligned}",
        "<strong>Step 5: Solve for the angles within the interval</strong><br>Substitute back $u = \\cos \\theta$ and find the values of $\\theta$ in the range $0^\\circ \\le \\theta \\le 360^\\circ$:<br>For $\\cos \\theta = -1$:<br>$$\\theta = 180.0^\\circ$$<br>For $\\cos \\theta = -\\dfrac{ 1 }{ 4 }$:<br>The acute reference angle is $\\alpha = \\cos^{ -1 }\\left( \\dfrac{ 1 }{ 4 } \\right) \\approx 75.5^\\circ$. Since cosine is negative, the angles lie in quadrants II and III:<br>\\begin{aligned} \\theta &= 180^\\circ - 75.5^\\circ = 104.5^\\circ \\cr \\theta &= 180^\\circ + 75.5^\\circ = 255.5^\\circ \\cr \\end{aligned}<br>The final solutions (to the nearest tenth of a degree) are: $\\theta \\approx 104.5^\\circ, 180.0^\\circ, 255.5^\\circ$."
    ],
    "pi_options": [
        {
            "ans": "$$a = 1.5, \\quad \\theta \\approx 104.5^\\circ, 180.0^\\circ, 255.5^\\circ$$",
            "feedback": "This distractor arises if you integrated $ax^{-1/2}$ incorrectly as $ax^{1/2}$ instead of $2ax^{1/2}$, forgetting to divide by the new fractional power of $\\dfrac{1}{2}$."
        },
        {
            "ans": "$$a = 3, \\quad \\theta \\approx 75.5^\\circ, 180.0^\\circ, 284.5^\\circ$$",
            "feedback": "This option is formed if you solved $\\cos \\theta = \\dfrac{1}{4}$ as a positive ratio, placing your solutions in quadrants I and IV instead of the correct quadrants II and III where cosine is negative."
        },
        {
            "ans": "$$a = 6, \\quad \\theta \\approx 104.5^\\circ, 180.0^\\circ, 255.5^\\circ$$",
            "feedback": "This distractor occurs from a simple sign-algebra mistake during step 2, such as expanding $(16 + 4a) - (1 + 2a)$ as $15 + 1a = 21$ or adding terms incorrectly."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Integrating Reciprocal Square Roots",
        "content": "A very common integration term is $\\dfrac{1}{\\sqrt{x}} = x^{-1/2}$. Integrating this yields $\\dfrac{x^{1/2}}{1/2} = 2\\sqrt{x}$. Memorising that $\\int \\dfrac{1}{\\sqrt{x}} \\, \\mathrm{d}x = 2\\sqrt{x}$ can save you valuable time and prevent division-by-fraction errors in your exam."
    }
}
];