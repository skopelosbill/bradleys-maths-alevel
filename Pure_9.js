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
            "feedback": "You have made a sign error when completing the square for the circle, leading to an incorrect centre and an incorrect radius squared ($r^2 = 11$ instead of $36$). Additionally, writing the inequality as two separate parts without a conjunction or with 'or' is logically incorrect for a 'no real roots' condition."
        },
        {
            "ans": "$$-12 \\le k \\le 12, \\quad \\text{Centre: } (-3, 4), \\quad \\text{Area: } 36\\pi$$",
            "feedback": "You have used weak inequalities ($\\le$) instead of strict inequalities ($<$). Since the question asks for 'no real roots', the discriminant must be strictly less than zero ($\\Delta < 0$). If $\\Delta = 0$, the equation has one repeated real root."
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
            "feedback": "You have two common errors: first, solving $p^2 - 64 > 0$ as a bounded interval $-8 < p < 8$ (which is the solution for $p^2 - 64 < 0$); second, forgetting to subtract the $r^2 = 25$ term from the constant sum of $13$ when expanding the circle equation."
        },
        {
            "ans": "$$p < -8 \\text{ or } p > 8, \\quad x^2 + y^2 + 6x - 4y - 12 = 0$$",
            "feedback": "Your discriminant work is correct. However, when writing the circle equation from the centre $C(3, -2)$, you used the wrong signs inside the brackets: $( x + 3 )^2 + ( y - 2 )^2 = r^2$. This led to incorrect signs for the $x$ and $y$ terms in the expanded form."
        },
        {
            "ans": "$$p \\le -8 \\text{ or } p \\ge 8, \\quad x^2 + y^2 - 6x + 4y - 12 = 0$$",
            "feedback": "You have used non-strict inequalities ($\\le$ and $\\ge$). For two distinct real roots, the discriminant must be strictly greater than zero ($\\Delta > 0$). If $\\Delta = 0$, the roots are real but identical, not distinct."
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
            "feedback": "You have correctly solves part (b), but in part (a) you incorrectly equates $m^2 = 36$ directly to $m = 36$, forgetting to take the square root of $36$."
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
            "feedback": "you made two errors: first, you solved the discriminant inequality $(5-m)^2 < 16$ as outside values rather than a bounded interval; second, you used the diameter squared ($100$) instead of the radius squared ($r^2 = 25$) in the circle's equation."
        },
        {
            "ans": "$$1 < m < 9, \\quad (x + 3)^2 + (y + 2)^2 = 25$$",
            "feedback": "Your range for $m$ is correct. However, for the circle, the midpoint coordinates are $h = 3$ and $k = 2$. When substituted into the standard equation $(x-h)^2 + (y-k)^2 = r^2$, the signs become negative, resulting in $(x-3)^2 + (y-2)^2 = 25$."
        },
        {
            "ans": "$$1 \\le m \\le 9, \\quad (x - 3)^2 + (y - 2)^2 = 25$$",
            "feedback": "You have used non-strict inequalities ($\\le$ and $\\ge$). For the line and curve to have no points of intersection, they must not touch at all, meaning the discriminant must be strictly less than zero ($\\Delta < 0$). A discriminant of zero means they touch at exactly one point (tangent)."
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
            "feedback": "You have two errors: first, a sign error when calculating the discriminant ($-4 \\times 1 \\times -2k$ is $+8k$, not $-8k$); second, concluding that a distance less than the radius ($34 < 36$) means the point lies 'outside' the circle. If the distance to the point is smaller than the radius, it must be inside."
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
            "feedback": "This error arises if you forget to subtract the lower limit of integration (1) during step 2. This leads to the equation $2k^{3/2} = 14 \\implies k^{3/2} = 7 \\implies k = 7^{2/3}$."
        },
        {
            "ans": "$$k = 4, \\quad \\theta = 0^\\circ, 60^\\circ, 300^\\circ$$",
            "feedback": "This error occurs because you resolved $\\cos \\theta = \\dfrac{1}{2}$ instead of $-\\dfrac{1}{2}$ during step 6, mistakenly placing your acute reference angle in quadrants I and IV instead of II and III where cosine is negative."
        },
        {
            "ans": "$$k = 5.29, \\quad \\theta = 0^\\circ, 120^\\circ, 240^\\circ$$",
            "feedback": "You have integrated $\\sqrt{x}$ incorrectly as $\\dfrac{2}{3}x^{1/2}$ or similar, leading to incorrect powers when solving for $k$."
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
            "feedback": "You have the second angle in the fourth quadrant ($340.5^\\circ$) instead of the second quadrant ($160.5^\\circ$). Because $\\sin \\theta = \\dfrac{1}{3}$ is positive, the solutions must lie in the first and second quadrants."
        },
        {
            "ans": "$$k = \\dfrac{ 4 }{ 7 }, \\quad \\theta \\approx 19.5^\\circ, 90.0^\\circ, 160.5^\\circ$$",
            "feedback": "You made a sign error during step 2 when applying the lower limit of integration, solving $-\\dfrac{4}{k} - 4 = 3 \\implies -\\dfrac{4}{k} = 7 \\implies k = -\\dfrac{4}{7}$ (and then dropping the negative sign)."
        },
        {
            "ans": "$$k = 4, \\quad \\theta \\approx 30.0^\\circ, 90.0^\\circ, 150.0^\\circ$$",
            "feedback": "You have used the common exact values of $\\sin 30^\\circ = 0.5$ as a mistaken approximation for $\\sin \\theta = \\dfrac{1}{3}$. Be sure to use your calculator to find $\\sin^{-1}\\left(\\dfrac{1}{3}\\right)$ accurately."
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
            "feedback": "You have made two errors: first, you failed to discard the negative limit $k = -1$ despite the constraint $k > 0$; second, you placed the second angle in quadrant II ($126.9^\\circ$) where tangent is negative, instead of quadrant III ($233.1^\\circ$)."
        },
        {
            "ans": "$$k = 4, \\quad \\theta \\approx 36.9^\\circ, 216.9^\\circ$$",
            "feedback": "You made a reciprocal error when rearranging the trigonometric identity in step 4, mistakenly setting $\\tan \\theta = \\dfrac{3}{4}$ instead of $\\dfrac{4}{3}$."
        },
        {
            "ans": "$$k = 2, \\quad \\theta \\approx 53.1^\\circ, 233.1^\\circ$$",
            "feedback": "You made a factorization error when solving the quadratic $k^2 - 3k - 4 = 0$ in step 3, mistakenly solving it as $(k-2)(k-2)=0$ or similar."
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
            "feedback": "You forgot to adjust the range for the substituted angle $\\phi$ in step 5, or you made a subtraction error when converting $\\phi$ back to $\\theta$ (e.g., dividing by 2 before subtracting 40)."
        },
        {
            "ans": "$$\\text{Area} = 8, \\quad \\theta = 40^\\circ, 100^\\circ$$",
            "feedback": "You made an integration calculation error during step 3, such as integrating $-4x$ as $-4x$ instead of $-2x^2$, which leads to an incorrect value of $8$."
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
            "feedback": "You integrated $ax^{-1/2}$ incorrectly as $ax^{1/2}$ instead of $2ax^{1/2}$, forgetting to divide by the new fractional power of $\\dfrac{1}{2}$."
        },
        {
            "ans": "$$a = 3, \\quad \\theta \\approx 75.5^\\circ, 180.0^\\circ, 284.5^\\circ$$",
            "feedback": "You solved $\\cos \\theta = \\dfrac{1}{4}$ as a positive ratio, placing your solutions in quadrants I and IV instead of the correct quadrants II and III where cosine is negative."
        },
        {
            "ans": "$$a = 6, \\quad \\theta \\approx 104.5^\\circ, 180.0^\\circ, 255.5^\\circ$$",
            "feedback": "You made a simple sign-algebra mistake during step 2, such as expanding $(16 + 4a) - (1 + 2a)$ as $15 + 1a = 21$ or adding terms incorrectly."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Integrating Reciprocal Square Roots",
        "content": "A very common integration term is $\\dfrac{1}{\\sqrt{x}} = x^{-1/2}$. Integrating this yields $\\dfrac{x^{1/2}}{1/2} = 2\\sqrt{x}$. Memorising that $\\int \\dfrac{1}{\\sqrt{x}} \\, \\mathrm{d}x = 2\\sqrt{x}$ can save you valuable time and prevent division-by-fraction errors in your exam."
    }
},
{
    "id": "004411",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Differentiation",
    "topic": "Optimization",
    "subtopic": [
        "Calculus Optimization",
        "Volumes and Surface Areas of Cylinders"
    ],
    "img": false,
    "question": "An open container in the shape of a cylinder has a base radius $r$ cm and height $h$ cm. The total surface area of the container is $108\\pi \\text{ cm}^2$.<br><br><strong>(a)</strong> Express $h$ in terms of $r$. [4]<br><br><strong>(b)</strong> Hence show that the volume of the container, $V\\text{ cm}^3$, can be expressed as:<br>$$V = 54\\pi r - \\dfrac{1}{2}\\pi r^3$$ [3]<br><br><strong>(c)</strong> Using calculus, find the values of $r$ and $h$ for which the volume of the container is a maximum. [6]",
    "steps": [
        "<strong>Step 1: Set up the surface area equation for part (a)</strong><br>The surface area of an open cylinder consists of the area of the circular base and the curved surface area. Setting this equal to $108\\pi$:<br>\\begin{aligned} \\pi r^2 + 2\\pi rh &= 108\\pi \\cr r^2 + 2rh &= 108 \\cr \\end{aligned}",
        "<strong>Step 2: Express $h$ in terms of $r$</strong><br>Rearrange the surface area equation to isolate $h$:<br>\\begin{aligned} 2rh &= 108 - r^2 \\cr h &= \\dfrac{ 108 - r^2 }{ 2r } \\cr \\end{aligned}",
        "<strong>Step 3: Substitute $h$ to find the volume in part (b)</strong><br>The volume $V$ of a cylinder is given by $V = \\pi r^2 h$. Substitute the expression for $h$ from Step 2 into the volume formula:<br>\\begin{aligned} V &= \\pi r^2 \\left( \\dfrac{ 108 - r^2 }{ 2r } \\right) \\cr V &= \\dfrac{ \\pi r ( 108 - r^2 ) }{ 2 } \\cr V &= 54\\pi r - \\dfrac{ 1 }{ 2 }\\pi r^3 \\cr \\end{aligned}",
        "<strong>Step 4: Differentiate the volume function with respect to $r$ in part (c)</strong><br>To find the value of $r$ that maximises the volume, differentiate $V$ with respect to $r$:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}V }{ \\mathrm{d}r } &= \\dfrac{ \\mathrm{d} }{ \\mathrm{d}r } \\left( 54\\pi r - \\dfrac{ 1 }{ 2 }\\pi r^3 \\right) \\cr &= 54\\pi - \\dfrac{ 3 }{ 2 }\\pi r^2 \\cr \\end{aligned}",
        "<strong>Step 5: Set the derivative equal to zero to find stationary points</strong><br>Set $\\dfrac{ \\mathrm{d}V }{ \\mathrm{d}r } = 0$ to find the stationary values of $r$:<br>\\begin{aligned} 54\\pi - \\dfrac{ 3 }{ 2 }\\pi r^2 &= 0 \\cr 54 - \\dfrac{ 3 }{ 2 }r^2 &= 0 \\cr \\dfrac{ 3 }{ 2 }r^2 &= 54 \\cr r^2 &= 36 \\cr r &= 6 \\cr \\end{aligned}<br>Since $r$ is a physical radius, we discard $r = -6$ and keep $r = 6$ cm.",
        "<strong>Step 6: Find the corresponding height $h$ and verify the maximum</strong><br>Substitute $r = 6$ back into the expression for $h$:<br>\\begin{aligned} h &= \\dfrac{ 108 - 6^2 }{ 2( 6 ) } \\cr h &= \\dfrac{ 72 }{ 12 } \\cr h &= 6 \\text{ cm} \\cr \\end{aligned}<br>To verify that this is a maximum, find the second derivative:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}^2V }{ \\mathrm{d}r^2 } &= -3\\pi r \\cr \\end{aligned}<br>Substituting $r = 6$ yields $-18\\pi < 0$, which confirms that the volume is indeed a maximum at $r = 6$ cm and $h = 6$ cm."
    ],
    "pi_options": [
        {
            "ans": "$$r = 6\\text{ cm}, \\quad h = 3\\text{ cm}$$",
            "feedback": "You made an error when calculating $h$ in Step 6, perhaps by forgetting the factor of 2 in the denominator of the expression $h = \\dfrac{108 - r^2}{2r}$."
        },
        {
            "ans": "$$r = 12\\text{ cm}, \\quad h = -1.5\\text{ cm}$$",
            "feedback": "You have made an algebraic error in Step 5 when solving $54 - \\dfrac{3}{2}r^2 = 0$. For instance, writing $\\dfrac{3}{2}r^2 = 54 \\implies 3r^2 = 108 \\implies r^2 = 144$ (mistakenly multiplying by 4) yields $r = 12$ and a physically impossible negative height."
        },
        {
            "ans": "$$r = 6\\text{ cm}, \\quad h = 12\\text{ cm}$$",
            "feedback": "You used the closed cylinder surface area formula $2\\pi r^2 + 2\\pi r h$ instead of the open cylinder formula $\\pi r^2 + 2\\pi r h$ in Step 1, which alters the relationship between $h$ and $r$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Open vs. Closed Containers",
        "content": "Pay extremely close attention to whether a container is described as 'open' or 'closed'. An open cylinder has only one circular end (the base), so its total surface area is $\\pi r^2 + 2\\pi rh$. A closed cylinder has two circular ends (base and top), making its surface area $2\\pi r^2 + 2\\pi rh$. Using the wrong formula will carry a major penalty from the start."
    }
},
{
    "id": "004412",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Differentiation",
    "topic": "Optimization",
    "subtopic": [
        "Calculus Optimization",
        "Volumes and Surface Areas of Cylinders"
    ],
    "img": false,
    "question": "A closed metal cylinder (with a circular top and bottom) has a base radius $r$ cm and height $h$ cm. The total surface area of the cylinder is $150\\pi \\text{ cm}^2$.<br><br><strong>(a)</strong> Express $h$ in terms of $r$. [4]<br><br><strong>(b)</strong> Hence show that the volume of the cylinder, $V\\text{ cm}^3$, is given by:<br>$$V = 75\\pi r - \\pi r^3$$ [3]<br><br><strong>(c)</strong> Using calculus, find the values of $r$ and $h$ for which the volume of the cylinder is a maximum. [6]",
    "steps": [
        "<strong>Step 1: Set up the surface area equation for part (a)</strong><br>Since the cylinder is closed, it has both a base and a top lid. Its total surface area is the sum of the curved surface area and the areas of both circular faces:<br>\\begin{aligned} 2\\pi r^2 + 2\\pi rh &= 150\\pi \\cr 2r^2 + 2rh &= 150 \\cr r^2 + rh &= 75 \\cr \\end{aligned}",
        "<strong>Step 2: Express $h$ in terms of $r$</strong><br>Isolate $h$ in the simplified equation:<br>\\begin{aligned} rh &= 75 - r^2 \\cr h &= \\dfrac{ 75 - r^2 }{ r } \\cr \\end{aligned}",
        "<strong>Step 3: Substitute $h$ into the volume formula for part (b)</strong><br>The volume $V$ of a cylinder is $V = \\pi r^2 h$. Substitute the expression for $h$:<br>\\begin{aligned} V &= \\pi r^2 \\left( \\dfrac{ 75 - r^2 }{ r } \\right) \\cr V &= \\pi r ( 75 - r^2 ) \\cr V &= 75\\pi r - \\pi r^3 \\cr \\end{aligned}",
        "<strong>Step 4: Differentiate the volume function with respect to $r$ in part (c)</strong><br>To find the dimensions that maximise the volume, differentiate $V$ with respect to $r$:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}V }{ \\mathrm{d}r } &= \\dfrac{ \\mathrm{d} }{ \\mathrm{d}r } ( 75\\pi r - \\pi r^3 ) \\cr &= 75\\pi - 3\\pi r^2 \\cr \\end{aligned}",
        "<strong>Step 5: Set the derivative equal to zero to find stationary points</strong><br>Set $\\dfrac{ \\mathrm{d}V }{ \\mathrm{d}r } = 0$ and solve for $r$:<br>\\begin{aligned} 75\\pi - 3\\pi r^2 &= 0 \\cr 75 - 3r^2 &= 0 \\cr 3r^2 &= 75 \\cr r^2 &= 25 \\cr r &= 5 \\cr \\end{aligned}<br>Discard $r = -5$ because the radius must be positive. Thus, $r = 5$ cm.",
        "<strong>Step 6: Find the height $h$ and verify the maximum</strong><br>Substitute $r = 5$ back into the height equation:<br>\\begin{aligned} h &= \\dfrac{ 75 - 5^2 }{ 5 } \\cr h &= \\dfrac{ 50 }{ 5 } \\cr h &= 10 \\text{ cm} \\cr \\end{aligned}<br>To verify that this point is a maximum, check the sign of the second derivative:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}^2V }{ \\mathrm{d}r^2 } &= -6\\pi r \\cr \\end{aligned}<br>At $r = 5$, this equals $-30\\pi < 0$, confirming a maximum. Thus, max volume is achieved at $r = 5$ cm and $h = 10$ cm."
    ],
    "pi_options": [
        {
            "ans": "$$r = 5\\text{ cm}, \\quad h = 5\\text{ cm}$$",
            "feedback": "You used the open cylinder formula $\\pi r^2 + 2\\pi rh$ in Step 1, which yields the incorrect relationship $h = \\dfrac{150 - r^2}{2r}$ and subsequently an incorrect height of 5 cm."
        },
        {
            "ans": "$$r = 5\\text{ cm}, \\quad h = 20\\text{ cm}$$",
            "feedback": "You made a sign error when rearranging the surface area equation, writing $rh = 75 + r^2$ in Step 2, leading to $h = 20$ cm instead of $10$ cm."
        },
        {
            "ans": "$$r = 15\\text{ cm}, \\quad h = 10\\text{ cm}$$",
            "feedback": "You made an arithmetic error in Step 5 when dividing 75 by 3, mistakenly writing $75/3 = 225$ instead of $25$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: The Golden Ratio of Cylinders",
        "content": "For a closed cylinder of fixed surface area, the maximum volume is always achieved when the height is exactly equal to the diameter of the base ($h = 2r$). Since we calculated $r = 5$ and $h = 10$, this perfectly aligns with the ratio! Knowing this rule of thumb lets you instantly verify your answer during your exam."
    }
},
{
    "id": "004413",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Differentiation",
    "topic": "Optimization",
    "subtopic": [
        "Calculus Optimization",
        "Volumes and Surface Areas of Cuboids"
    ],
    "img": false,
    "question": "An open-topped rectangular storage box is to be constructed with a square base of side length $x$ cm and height $y$ cm. The total surface area of the box is $432\\text{ cm}^2$.<br><br><strong>(a)</strong> Express $y$ in terms of $x$. [4]<br><br><strong>(b)</strong> Hence show that the volume of the box, $V\\text{ cm}^3$, can be expressed as:<br>$$V = 108x - \\dfrac{1}{4}x^3$$ [3]<br><br><strong>(c)</strong> Using calculus, find the values of $x$ and $y$ for which the volume of the box is a maximum. [6]",
    "steps": [
        "<strong>Step 1: Set up the surface area equation for part (a)</strong><br>An open-topped box with a square base has 1 square bottom of area $x^2$, and 4 vertical rectangular sides of area $xy$ each. Setting this total area equal to $432$:<br>\\begin{aligned} x^2 + 4xy &= 432 \\cr \\end{aligned}",
        "<strong>Step 2: Express $y$ in terms of $x$</strong><br>Rearrange this equation to isolate the height $y$:<br>\\begin{aligned} 4xy &= 432 - x^2 \\cr y &= \\dfrac{ 432 - x^2 }{ 4x } \\cr \\end{aligned}",
        "<strong>Step 3: Substitute $y$ into the volume formula for part (b)</strong><br>The volume $V$ of a cuboid is given by $\\text{base area} \\times \\text{height}$, which is $V = x^2 y$. Substitute the expression for $y$:<br>\\begin{aligned} V &= x^2 \\left( \\dfrac{ 432 - x^2 }{ 4x } \\right) \\cr V &= \\dfrac{ x( 432 - x^2 ) }{ 4 } \\cr V &= 108x - \\dfrac{ 1 }{ 4 }x^3 \\cr \\end{aligned}",
        "<strong>Step 4: Differentiate the volume function with respect to $x$ in part (c)</strong><br>To find the values of $x$ and $y$ that maximise the volume, differentiate $V$ with respect to $x$:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}V }{ \\mathrm{d}x } &= \\dfrac{ \\mathrm{d} }{ \\mathrm{d}x } \\left( 108x - \\dfrac{ 1 }{ 4 }x^3 \\right) \\cr &= 108 - \\dfrac{ 3 }{ 4 }x^2 \\cr \\end{aligned}",
        "<strong>Step 5: Set the derivative equal to zero to find the stationary base length</strong><br>Set $\\dfrac{ \\mathrm{d}V }{ \\mathrm{d}x } = 0$ to locate the stationary point:<br>\\begin{aligned} 108 - \\dfrac{ 3 }{ 4 }x^2 &= 0 \\cr \\dfrac{ 3 }{ 4 }x^2 &= 108 \\cr 3x^2 &= 432 \\cr x^2 &= 144 \\cr x &= 12 \\cr \\end{aligned}<br>Since a physical length must be positive, we discard $x = -12$ to get $x = 12$ cm.",
        "<strong>Step 6: Determine the height $y$ and verify the maximum</strong><br>Substitute $x = 12$ back into the expression for $y$:<br>\\begin{aligned} y &= \\dfrac{ 432 - 12^2 }{ 4( 12 ) } \\cr y &= \\dfrac{ 432 - 144 }{ 48 } \\cr y &= \\dfrac{ 288 }{ 48 } \\cr y &= 6 \\text{ cm} \\cr \\end{aligned}<br>To verify that this point yields a maximum volume, calculate the second derivative:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}^2V }{ \\mathrm{d}x^2 } &= -\\dfrac{ 3 }{ 2 }x \\cr \\end{aligned}<br>At $x = 12$, we have $-18 < 0$, which confirms that the volume is a maximum. Thus, maximum volume is achieved when $x = 12$ cm and $y = 6$ cm."
    ],
    "pi_options": [
        {
            "ans": "$$x = 12\\text{ cm}, \\quad y = 12\\text{ cm}$$",
            "feedback": "You used the closed box surface area formula $2x^2 + 4xy$ instead of the open-topped box formula $x^2 + 4xy$ in Step 1, which changes the relationship between $y$ and $x$."
        },
        {
            "ans": "$$x = 6\\text{ cm}, \\quad y = 16.5\\text{ cm}$$",
            "feedback": "You made a basic differentiation error in Step 4, differentiating $-\\dfrac{1}{4}x^3$ to get $-3x^2$ instead of $-\\dfrac{3}{4}x^2$."
        },
        {
            "ans": "$$x = 12\\text{ cm}, \\quad y = 9\\text{ cm}$$",
            "feedback": "You made a subtraction or division slip when calculating $y$ in Step 6, perhaps by forgetting to subtract $x^2$ from 432, or using $y = \\dfrac{432}{4x}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Base vs. Side Area Ratio",
        "content": "For any open-topped box with a square base of side length $x$ and height $y$ that is optimized for maximum volume, the height is always exactly half of the base length ($y = 0.5x$). Since $12 \\times 0.5 = 6$, our results perfectly match this design ratio. Keeping this rule in mind acts as an immediate sanity check during exam conditions."
    }
},
{
    "id": "004414",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Differentiation",
    "topic": "Optimization",
    "subtopic": [
        "Calculus Optimization",
        "Volumes and Surface Areas of Cuboids"
    ],
    "img": false,
    "question": "A closed rectangular packaging box has a square base of side length $x$ cm and height $y$ cm. The volume of the box is fixed at $216\\text{ cm}^3$.<br><br><strong>(a)</strong> Express $y$ in terms of $x$. [3]<br><br><strong>(b)</strong> Hence show that the total surface area of the box, $A\\text{ cm}^2$, can be expressed as:<br>$$A = 2x^2 + \\dfrac{864}{x}$$ [4]<br><br><strong>(c)</strong> Using calculus, find the minimum surface area of the box. [6]",
    "steps": [
        "<strong>Step 1: Set up the volume constraint for part (a)</strong><br>The volume of a closed box with a square base is given by $V = x^2 y$. Since the volume is fixed at $216$:<br>\\begin{aligned} x^2 y &= 216 \\cr y &= \\dfrac{ 216 }{ x^2 } \\cr \\end{aligned}",
        "<strong>Step 2: Express the surface area in terms of $x$ for part (b)</strong><br>The total surface area $A$ of a closed rectangular box is the sum of the top and bottom areas ($2x^2$) and the four rectangular side faces ($4xy$):<br>\\begin{aligned} A &= 2x^2 + 4xy \\cr \\end{aligned}<br>Substitute $y = \\dfrac{ 216 }{ x^2 }$ into this formula:<br>\\begin{aligned} A &= 2x^2 + 4x\\left( \\dfrac{ 216 }{ x^2 } \\right) \\cr A &= 2x^2 + \\dfrac{ 864 }{ x } \\cr \\end{aligned}",
        "<strong>Step 3: Differentiate the surface area function in part (c)</strong><br>To find the value of $x$ that minimises the surface area, write the function as $A = 2x^2 + 864x^{ -1 }$ and differentiate with respect to $x$:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}A }{ \\mathrm{d}x } &= \\dfrac{ \\mathrm{d} }{ \\mathrm{d}x } ( 2x^2 + 864x^{ -1 } ) \\cr &= 4x - 864x^{ -2 } \\cr &= 4x - \\dfrac{ 864 }{ x^2 } \\cr \\end{aligned}",
        "<strong>Step 4: Set the derivative to zero to find the optimal base length $x$</strong><br>Set $\\dfrac{ \\mathrm{d}A }{ \\mathrm{d}x } = 0$ to find the optimal base length $x$:<br>\\begin{aligned} 4x - \\dfrac{ 864 }{ x^2 } &= 0 \\cr 4x &= \\dfrac{ 864 }{ x^2 } \\cr 4x^3 &= 864 \\cr x^3 &= 216 \\cr x &= 6 \\cr \\end{aligned}<br>So the optimal base length is $x = 6$ cm.",
        "<strong>Step 5: Verify that this stationary point represents a minimum</strong><br>Find the second derivative of the surface area function:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}^2A }{ \\mathrm{d}x^2 } &= 4 + 1728x^{ -3 } \\cr &= 4 + \\dfrac{ 1728 }{ x^3 } \\cr \\end{aligned}<br>Substituting $x = 6$ gives $4 + \\dfrac{1728}{216} = 4 + 8 = 12 > 0$. Since the second derivative is positive, this represents a local minimum.",
        "<strong>Step 6: Calculate the minimum surface area of the box</strong><br>Substitute $x = 6$ back into the surface area equation to find $A_{\\min}$:<br>\\begin{aligned} A_{\\min} &= 2( 6 )^2 + \\dfrac{ 864 }{ 6 } \\cr &= 2( 36 ) + 144 \\cr &= 72 + 144 \\cr &= 216 \\text{ cm}^2 \\cr \\end{aligned}<br>The minimum surface area of the packaging box is $216 \\text{ cm}^2$ (achieved when $x = 6$ cm and $y = 6$ cm)."
    ],
    "pi_options": [
        {
            "ans": "$$A_{\\min} = 144\\text{ cm}^2$$",
            "feedback": "You used an open-topped box formula $A = x^2 + 4xy \\implies A = x^2 + \\dfrac{864}{x}$ in Step 2. This would lead to a different minimum area."
        },
        {
            "ans": "$$A_{\\min} = 216\\text{ cm}^2, \\text{ with } x = 3\\text{ cm}$$",
            "feedback": "You made an algebraic error when solving $4x^3 = 864$. For example, writing $x^3 = 108$ instead of $216$ would lead to a calculation breakdown."
        },
        {
            "ans": "$$A_{\\min} = 180\\text{ cm}^2$$",
            "feedback": "You found the correct value $x = 6$, but made an arithmetic slip in Step 6 when evaluating $A = 2(36) + \\dfrac{864}{6}$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Cube Symmetry in Minimization",
        "content": "For a closed rectangular box with a square base of side length $x$ and height $y$, the absolute minimum surface area for a fixed volume is always achieved when the box is a perfect cube ($x = y$). Since our calculations show $x = 6$ and $y = \\dfrac{216}{36} = 6$, our result represents a perfect cube, confirming the highest degree of geometric efficiency!"
    }
},
{
    "id": "004415",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Differentiation",
    "topic": "Optimization",
    "subtopic": [
        "Calculus Optimization",
        "2D Area Optimization"
    ],
    "img": false,
    "question": "A rectangular sheep pen is to be constructed against a long, straight stone wall using exactly $120\\text{ m}$ of fencing wire for the remaining three sides. The pen has width $x\\text{ m}$ (perpendicular to the wall) and length $y\\text{ m}$ (parallel to the wall).<br><br><strong>(a)</strong> Express $y$ in terms of $x$. [3]<br><br><strong>(b)</strong> Hence show that the area of the pen, $A\\text{ m}^2$, is given by:<br>$$A = 120x - 2x^2$$ [3]<br><br><strong>(c)</strong> Using calculus, find the maximum possible area of the pen and the dimensions $x$ and $y$ that produce this maximum. [7]",
    "steps": [
        "<strong>Step 1: Set up the perimeter constraint for part (a)</strong><br>Since the stone wall forms one of the lengths of the rectangle, only three sides require fencing wire: two widths ($x$) and one length ($y$). Set the total length of fencing equal to $120$:<br>\\begin{aligned} 2x + y &= 120 \\cr \\end{aligned}",
        "<strong>Step 2: Express $y$ in terms of $x$</strong><br>Isolate $y$ in the linear equation:<br>\\begin{aligned} y &= 120 - 2x \\cr \\end{aligned}",
        "<strong>Step 3: Find the area formula for part (b)</strong><br>The area $A$ of a rectangle is given by $\\text{width} \\times \\text{length}$, which is $A = xy$. Substitute the expression for $y$ from Step 2 into the area equation:<br>\\begin{aligned} A &= x( 120 - 2x ) \\cr A &= 120x - 2x^2 \\cr \\end{aligned}",
        "<strong>Step 4: Differentiate the area function with respect to $x$ in part (c)</strong><br>To find the maximum area, differentiate $A$ with respect to $x$:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}A }{ \\mathrm{d}x } &= \\dfrac{ \\mathrm{d} }{ \\mathrm{d}x } ( 120x - 2x^2 ) \\cr &= 120 - 4x \\cr \\end{aligned}",
        "<strong>Step 5: Locate the stationary point</strong><br>Set $\\dfrac{ \\mathrm{d}A }{ \\mathrm{d}x } = 0$ to find the width that produces a stationary area:<br>\\begin{aligned} 120 - 4x &= 0 \\cr 4x &= 120 \\cr x &= 30 \\cr \\end{aligned}<br>To verify that this yields a maximum area, find the second derivative:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}^2A }{ \\mathrm{d}x^2 } &= -4 \\cr \\end{aligned}<br>Since $-4 < 0$ for all values of $x$, this stationary point is confirmed to be a maximum.",
        "<strong>Step 6: Find the corresponding dimensions and the maximum area</strong><br>Substitute $x = 30$ back into the linear expression for the length $y$:<br>\\begin{aligned} y &= 120 - 2( 30 ) \\cr &= 120 - 60 \\cr &= 60 \\text{ m} \\cr \\end{aligned}<br>Now calculate the maximum area $A_{\\max}$:<br>\\begin{aligned} A_{\\max} &= xy \\cr &= ( 30 )( 60 ) \\cr &= 1800 \\text{ m}^2 \\cr \\end{aligned}<br>The maximum area of the sheep pen is $1800 \\text{ m}^2$, with dimensions $x = 30$ m and $y = 60$ m."
    ],
    "pi_options": [
        {
            "ans": "$$A_{\\max} = 1800\\text{ m}^2, \\text{ with } x = 30\\text{ m}, \\ y = 30\\text{ m}$$",
            "feedback": "You assumed the optimal shape of any rectangular area must be a square ($x = y = 30$), which is only true if all four sides of the pen require fencing wire. Since one side is formed by a stone wall, the optimal length is actually twice the width."
        },
        {
            "ans": "$$A_{\\max} = 900\\text{ m}^2, \\text{ with } x = 30\\text{ m}, \\ y = 30\\text{ m}$$",
            "feedback": "You used the traditional four-sided perimeter constraint $2x + 2y = 120 \\implies y = 60 - x$, forgetting that the wall acts as one of the boundaries and requires no fencing."
        },
        {
            "ans": "$$A_{\\max} = 1800\\text{ m}^2, \\text{ with } x = 40\\text{ m}, \\ y = 40\\text{ m}$$",
            "feedback": "You made a differentiation slip in Step 4, such as differentiating $-2x^2$ to get $-3x$ or $-2x$ instead of $-4x$, leading to an incorrect stationary point."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Three-Sided Fencing Rule",
        "content": "For any rectangular enclosure optimized against a wall (requiring only three sides of fencing), the maximum area is always achieved when the length parallel to the wall is exactly twice the width perpendicular to it ($y = 2x$). Since our width is $30$ m and length is $60$ m, this matches the rule perfectly! Memorising this can help you instantly cross-check your results."
    }
},
{
    "id": "004416",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Algebra and Functions",
    "topic": "Polynomials",
    "subtopic": [
        "Factor Theorem",
        "Cubic Equations"
    ],
    "img": false,
    "question": "Solve the cubic equation:<br>$$2x^3 - 10x^2 + 11x + 3 = 0$$ [8]",
    "steps": [
        "<strong>Step 1: Test values using the Factor Theorem</strong><br>We must find an integer value of $x$ that satisfies the equation $2x^3 - 10x^2 + 11x + 3 = 0$. Test potential factors of the constant term $3$ (such as $\\pm 1, \\pm 3$):<br>Let $f(x) = 2x^3 - 10x^2 + 11x + 3$.<br>Test $x = 3$:<br>\\begin{aligned} f( 3 ) &= 2( 3 )^3 - 10( 3 )^2 + 11( 3 ) + 3 \\cr &= 2( 27 ) - 10( 9 ) + 33 + 3 \\cr &= 54 - 90 + 33 + 3 \\cr &= 0 \\end{aligned}<br>Since $f( 3 ) = 0$, the Factor Theorem states that $( x - 3 )$ is a factor of the polynomial.",
        "<strong>Step 2: Perform polynomial division</strong><br>Divide the cubic polynomial by $( x - 3 )$ to find the remaining quadratic factor. You can use polynomial long division or synthetic division:<br>\\begin{aligned} 2x^3 - 10x^2 + 11x + 3 &= ( x - 3 )( 2x^2 - 4x - 1 ) \\end{aligned}",
        "<strong>Step 3: Solve the remaining quadratic equation</strong><br>Set the quadratic factor equal to zero to find the other roots:<br>$$2x^2 - 4x - 1 = 0$$<br>Using the quadratic formula where $a=2$, $b=-4$, and $c=-1$:<br>\\begin{aligned} x &= \\dfrac{ -b \\pm \\sqrt{ b^2 - 4ac } }{ 2a } \\cr &= \\dfrac{ -( -4 ) \\pm \\sqrt{ ( -4 )^2 - 4( 2 )( -1 ) } }{ 2( 2 ) } \\cr &= \\dfrac{ 4 \\pm \\sqrt{ 16 + 8 } }{ 4 } \\cr &= \\dfrac{ 4 \\pm \\sqrt{ 24 } }{ 4 } \\cr &= \\dfrac{ 4 \\pm 2\\sqrt{ 6 } }{ 4 } \\cr &= \\dfrac{ 2 \\pm \\sqrt{ 6 } }{ 2 } \\cr \\end{aligned}",
        "<strong>Step 4: State all solutions</strong><br>The complete set of solutions to the cubic equation is:<br>\\begin{aligned} x &= 3 \\cr x &= \\dfrac{ 2 + \\sqrt{ 6 } }{ 2 } \\cr x &= \\dfrac{ 2 - \\sqrt{ 6 } }{ 2 } \\cr \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$x = 3, \\quad x = \\dfrac{ 2 \\pm \\sqrt{ 2 } }{ 2 }$$",
            "feedback": "You may have made an arithmetic error when calculating the discriminant under the square root. Check that you used $b^2 - 4ac = 16 - 4(2)(-1) = 16 + 8 = 24$, rather than mistakenly subtracting the 8 to get $16 - 8 = 8$."
        },
        {
            "ans": "$$x = -3, \\quad x = \\dfrac{ 2 \\pm \\sqrt{ 6 } }{ 2 }$$",
            "feedback": "You may have made a sign error when finding your initial linear factor. Since $f( 3 ) = 0$, your linear factor is $( x - 3 )$, which yields a root of $x = 3$ (not $x = -3$)."
        },
        {
            "ans": "$$x = 3, \\quad x = \\dfrac{ 4 \\pm \\sqrt{ 6 } }{ 2 }$$",
            "feedback": "You may have forgotten to divide the leading term '4' by the denominator when simplifying your fraction, leading to an incorrect cancellation of the common factor."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Selecting Candidates for the Factor Theorem",
        "content": "When searching for your first root using the Factor Theorem, do not guess randomly! Any rational root of the polynomial $ax^3 + bx^2 + cx + d = 0$ must be a factor of the constant term $d$ divided by a factor of the leading coefficient $a$. For $2x^3 - 10x^2 + 11x + 3 = 0$, the only possible rational candidates are $\\pm 1, \\pm 3, \\pm \\frac{1}{2}, \\pm \\frac{3}{2}$. Testing these first will save you valuable exam time."
    }
},
{
    "id": "004417",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Algebra and Functions",
    "topic": "Polynomials",
    "subtopic": [
        "Factor Theorem",
        "Cubic Equations"
    ],
    "img": false,
    "question": "Solve the cubic equation:<br>$$3x^3 + 4x^2 - 6x - 4 = 0$$ [8]",
    "steps": [
        "<strong>Step 1: Test values using the Factor Theorem</strong><br>Let $f(x) = 3x^3 + 4x^2 - 6x - 4$. Test factors of the constant term $-4$ (such as $\\pm 1, \\pm 2, \\pm 4$):<br>Test $x = -2$:<br>\\begin{aligned} f( -2 ) &= 3( -2 )^3 + 4( -2 )^2 - 6( -2 ) - 4 \\cr &= 3( -8 ) + 4( 4 ) + 12 - 4 \\cr &= -24 + 16 + 12 - 4 \\cr &= 0 \\end{aligned}<br>Since $f( -2 ) = 0$, $( x + 2 )$ is a factor of the polynomial.",
        "<strong>Step 2: Perform polynomial division</strong><br>Divide the cubic polynomial by $( x + 2 )$ to obtain the remaining quadratic factor:<br>\\begin{aligned} 3x^3 + 4x^2 - 6x - 4 &= ( x + 2 )( 3x^2 - 2x - 2 ) \\end{aligned}",
        "<strong>Step 3: Solve the remaining quadratic equation</strong><br>Set the quadratic factor equal to zero:<br>$$3x^2 - 2x - 2 = 0$$<br>Apply the quadratic formula with $a=3$, $b=-2$, and $c=-2$:<br>\\begin{aligned} x &= \\dfrac{ -b \\pm \\sqrt{ b^2 - 4ac } }{ 2a } \\cr &= \\dfrac{ -( -2 ) \\pm \\sqrt{ ( -2 )^2 - 4( 3 )( -2 ) } }{ 2( 3 ) } \\cr &= \\dfrac{ 2 \\pm \\sqrt{ 4 + 24 } }{ 6 } \\cr &= \\dfrac{ 2 \\pm \\sqrt{ 28 } }{ 6 } \\cr &= \\dfrac{ 2 \\pm 2\\sqrt{ 7 } }{ 6 } \\cr &= \\dfrac{ 1 \\pm \\sqrt{ 7 } }{ 3 } \\cr \\end{aligned}",
        "<strong>Step 4: State all solutions</strong><br>The complete solutions are:<br>\\begin{aligned} x &= -2 \\cr x &= \\dfrac{ 1 + \\sqrt{ 7 } }{ 3 } \\cr x &= \\dfrac{ 1 - \\sqrt{ 7 } }{ 3 } \\cr \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$x = 2, \\quad x = \\dfrac{ 1 \\pm \\sqrt{ 7 } }{ 3 }$$",
            "feedback": "You may have made a sign error when finding your initial root. Since $f( -2 ) = 0$, your linear factor is $( x + 2 )$, which gives a root of $x = -2$ (not $x = 2$)."
        },
        {
            "ans": "$$x = -2, \\quad x = \\dfrac{ 1 \\pm \\sqrt{ 5 } }{ 3 }$$",
            "feedback": "You may have made an arithmetic slip in the quadratic formula's discriminant. Make sure you calculated $b^2 - 4ac = 4 - 4( 3 )( -2 ) = 4 + 24 = 28$, rather than subtracting to get $4 - 24$ (and taking its absolute value)."
        },
        {
            "ans": "$$x = -2, \\quad x = \\dfrac{ 2 \\pm 2\\sqrt{ 7 } }{ 3 }$$",
            "feedback": "You may have forgotten to divide both terms in the numerator by the denominator when simplifying your surd, leading to an incorrect cancellation of the factor of 2."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Double Check Your Factor Signs",
        "content": "A very common mistake is confusing the root with the factor. If your root is $x = -2$, then the corresponding factor is $( x + 2 ) = 0$. If you mistakenly write the factor as $( x - 2 )$, your polynomial long division will produce a remainder and fail to resolve. Always perform a quick check: root $\\rightarrow c$, factor $\\rightarrow ( x - c )$."
    }
},
{
    "id": "004418",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Algebra and Functions",
    "topic": "Polynomials",
    "subtopic": [
        "Factor Theorem",
        "Cubic Equations"
    ],
    "img": false,
    "question": "Solve the cubic equation:<br>$$x^3 - 2x^2 - 5x + 6 = 0$$ [8]",
    "steps": [
        "<strong>Step 1: Test values using the Factor Theorem</strong><br>Let $f(x) = x^3 - 2x^2 - 5x + 6$. Test factors of the constant term $6$ (such as $\\pm 1, \\pm 2, \\pm 3, \\pm 6$):<br>Test $x = 1$:<br>\\begin{aligned} f( 1 ) &= ( 1 )^3 - 2( 1 )^2 - 5( 1 ) + 6 \\cr &= 1 - 2 - 5 + 6 \\cr &= 0 \\end{aligned}<br>Since $f( 1 ) = 0$, $( x - 1 )$ is a factor of the polynomial.",
        "<strong>Step 2: Perform polynomial division</strong><br>Divide the cubic polynomial by $( x - 1 )$ to get the quadratic factor:<br>\\begin{aligned} x^3 - 2x^2 - 5x + 6 &= ( x - 1 )( x^2 - x - 6 ) \\end{aligned}",
        "<strong>Step 3: Solve the remaining quadratic equation</strong><br>Set the quadratic factor equal to zero:<br>$$x^2 - x - 6 = 0$$<br>This quadratic expression factorises easily. Look for two numbers that multiply to $-6$ and add to $-1$ (which are $-3$ and $2$):<br>\\begin{aligned} ( x - 3 )( x + 2 ) &= 0 \\cr x = 3 \\quad \\text{or} \\quad x &= -2 \\cr \\end{aligned}",
        "<strong>Step 4: State all solutions</strong><br>The complete set of solutions is:<br>$$x = 1, \\quad x = 3, \\quad x = -2$$"
    ],
    "pi_options": [
        {
            "ans": "$$x = 1, \\quad x = -3, \\quad x = 2$$",
            "feedback": "You may have made a sign error when factorising the quadratic expression $x^2 - x - 6$. It factorises into $( x - 3 )( x + 2 ) = 0$, which yields the roots $x = 3$ and $x = -2$ (not $x = -3$ and $x = 2$)."
        },
        {
            "ans": "$$x = -1, \\quad x = 3, \\quad x = -2$$",
            "feedback": "You may have made a sign error when interpreting the first root. Since $f( 1 ) = 0$, your root is $x = 1$ and your factor is $( x - 1 )$. Testing $x = -1$ yields $f( -1 ) = 8 \\neq 0$."
        },
        {
            "ans": "$$x = 1, \\quad x = \\dfrac{ 1 \\pm \\sqrt{ 23 } }{ 2 }$$",
            "feedback": "You may have made a sign mistake when applying the quadratic formula to $x^2 - x - 6 = 0$. Using $c = -6$ gives $b^2 - 4ac = 1 - 4( 1 )( -6 ) = 25$ (which is a perfect square). Make sure you did not calculate $1 - 24 = -23$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Spotting Perfect Square Discriminants",
        "content": "If you apply the quadratic formula to a quadratic factor and get a discriminant that is a perfect square (such as $25$), it means the quadratic could have been solved much faster by factorisation! Keep an eye out for simple factors before jumping into the quadratic formula."
    }
},
{
    "id": "004419",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Algebra and Functions",
    "topic": "Polynomials",
    "subtopic": [
        "Factor Theorem",
        "Cubic Equations"
    ],
    "img": false,
    "question": "Solve the cubic equation:<br>$$2x^3 - 9x^2 + 6x - 1 = 0$$ [8]",
    "steps": [
        "<strong>Step 1: Test values using the Rational Root Theorem</strong><br>Let $f(x) = 2x^3 - 9x^2 + 6x - 1$. Test potential rational roots of the form $\\pm 1$ or $\\pm \\dfrac{1}{2}$:<br>Test $x = \\dfrac{1}{2}$:<br>\\begin{aligned} f\\left( \\dfrac{ 1 }{ 2 } \\right) &= 2\\left( \\dfrac{ 1 }{ 2 } \\right)^3 - 9\\left( \\dfrac{ 1 }{ 2 } \\right)^2 + 6\\left( \\dfrac{ 1 }{ 2 } \\right) - 1 \\cr &= 2\\left( \\dfrac{ 1 }{ 8 } \\right) - 9\\left( \\dfrac{ 1 }{ 4 } \\right) + 3 - 1 \\cr &= \\dfrac{ 1 }{ 4 } - \\dfrac{ 9 }{ 4 } + 2 \\cr &= -2 + 2 \\cr &= 0 \\end{aligned}<br>Since $f\\left( \\dfrac{1}{2} \\right) = 0$, $\\left( x - \\dfrac{1}{2} \\right)$—or equivalently $( 2x - 1 )$—is a factor of the polynomial.",
        "<strong>Step 2: Perform polynomial division</strong><br>Divide the cubic polynomial by $\\left( x - \\dfrac{1}{2} \\right)$ to isolate the remaining quadratic factor:<br>\\begin{aligned} 2x^3 - 9x^2 + 6x - 1 &= \\left( x - \\dfrac{ 1 }{ 2 } \\right)( 2x^2 - 8x + 2 ) \\cr &= ( 2x - 1 )( x^2 - 4x + 1 ) \\end{aligned}",
        "<strong>Step 3: Solve the remaining quadratic equation</strong><br>Set the quadratic factor equal to zero:<br>$$x^2 - 4x + 1 = 0$$<br>Using the quadratic formula with $a=1$, $b=-4$, and $c=1$:<br>\\begin{aligned} x &= \\dfrac{ -b \\pm \\sqrt{ b^2 - 4ac } }{ 2a } \\cr &= \\dfrac{ -( -4 ) \\pm \\sqrt{ ( -4 )^2 - 4( 1 )( 1 ) } }{ 2( 1 ) } \\cr &= \\dfrac{ 4 \\pm \\sqrt{ 16 - 4 } }{ 2 } \\cr &= \\dfrac{ 4 \\pm \\sqrt{ 12 } }{ 2 } \\cr &= \\dfrac{ 4 \\pm 2\\sqrt{ 3 } }{ 2 } \\cr &= 2 \\pm \\sqrt{ 3 } \\end{aligned}",
        "<strong>Step 4: State all solutions</strong><br>The complete solutions to the cubic equation are:<br>\\begin{aligned} x &= \\dfrac{ 1 }{ 2 } \\cr x &= 2 + \\sqrt{ 3 } \\cr x &= 2 - \\sqrt{ 3 } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$x = -\\dfrac{ 1 }{ 2 }, \\quad x = 2 \\pm \\sqrt{ 3 }$$",
            "feedback": "You may have made a sign error when finding your linear factor. Since $f\\left( \\dfrac{1}{2} \\right) = 0$, your root is positive $x = \\dfrac{1}{2}$ and your factor is $( 2x - 1 )$ (not $2x + 1$)."
        },
        {
            "ans": "$$x = \\dfrac{ 1 }{ 2 }, \\quad x = 2 \\pm \\sqrt{ 5 }$$",
            "feedback": "You may have made an arithmetic slip in your quadratic formula's discriminant. Check that you calculated $b^2 - 4ac = 16 - 4( 1 )( 1 ) = 12$, rather than mistakenly adding the terms to get $16 + 4 = 20$."
        },
        {
            "ans": "$$x = \\dfrac{ 1 }{ 2 }, \\quad x = 4 \\pm \\sqrt{ 3 }$$",
            "feedback": "You may have made an error when simplifying your surd expression, forgetting to divide the leading term '4' by the denominator of 2."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Handling Fractional Factors",
        "content": "If your initial root is a fraction like $x = \\frac{1}{2}$, write your factor as $( 2x - 1 )$ rather than $( x - \\frac{1}{2} )$. This keeps all the coefficients of your remaining quadratic factor as integers, making both your polynomial division and the subsequent quadratic formula calculations much simpler and less prone to fraction errors."
    }
},
{
    "id": "004420",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Algebra and Functions",
    "topic": "Polynomials",
    "subtopic": [
        "Factor Theorem",
        "Cubic Equations"
    ],
    "img": false,
    "question": "Solve the cubic equation:<br>$$2x^3 - 4x^2 - 3x + 3 = 0$$ [8]",
    "steps": [
        "<strong>Step 1: Test values using the Factor Theorem</strong><br>Let $f(x) = 2x^3 - 4x^2 - 3x + 3$. Test factors of the constant term $3$ (such as $\\pm 1, \\pm 3$):<br>Test $x = -1$:<br>\\begin{aligned} f( -1 ) &= 2( -1 )^3 - 4( -1 )^2 - 3( -1 ) + 3 \\cr &= 2( -1 ) - 4( 1 ) + 3 + 3 \\cr &= -2 - 4 + 3 + 3 \\cr &= 0 \\end{aligned}<br>Since $f( -1 ) = 0$, $( x + 1 )$ is a factor of the polynomial.",
        "<strong>Step 2: Perform polynomial division</strong><br>Divide the cubic polynomial by $( x + 1 )$ to find the remaining quadratic factor:<br>\\begin{aligned} 2x^3 - 4x^2 - 3x + 3 &= ( x + 1 )( 2x^2 - 6x + 3 ) \\end{aligned}",
        "<strong>Step 3: Solve the remaining quadratic equation</strong><br>Set the quadratic factor equal to zero:<br>$$2x^2 - 6x + 3 = 0$$<br>Using the quadratic formula with $a=2$, $b=-6$, and $c=3$:<br>\\begin{aligned} x &= \\dfrac{ -b \\pm \\sqrt{ b^2 - 4ac } }{ 2a } \\cr &= \\dfrac{ -( -6 ) \\pm \\sqrt{ ( -6 )^2 - 4( 2 )( 3 ) } }{ 2( 2 ) } \\cr &= \\dfrac{ 6 \\pm \\sqrt{ 36 - 24 } }{ 4 } \\cr &= \\dfrac{ 6 \\pm \\sqrt{ 12 } }{ 4 } \\cr &= \\dfrac{ 6 \\pm 2\\sqrt{ 3 } }{ 4 } \\cr &= \\dfrac{ 3 \\pm \\sqrt{ 3 } }{ 2 } \\cr \\end{aligned}",
        "<strong>Step 4: State all solutions</strong><br>The complete solutions are:<br>\\begin{aligned} x &= -1 \\cr x &= \\dfrac{ 3 + \\sqrt{ 3 } }{ 2 } \\cr x &= \\dfrac{ 3 - \\sqrt{ 3 } }{ 2 } \\cr \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$x = 1, \\quad x = \\dfrac{ 3 \\pm \\sqrt{ 3 } }{ 2 }$$",
            "feedback": "You may have made a sign error when finding your initial root. Since $f( -1 ) = 0$, your root is $x = -1$ (which corresponds to factor $x + 1$). Testing positive $x = 1$ yields $f( 1 ) = -2 \\neq 0$."
        },
        {
            "ans": "$$x = -1, \\quad x = \\dfrac{ 3 \\pm \\sqrt{ 15 } }{ 2 }$$",
            "feedback": "You may have made an arithmetic slip in your discriminant calculation under the square root. Check that you calculated $b^2 - 4ac = 36 - 4( 2 )( 3 ) = 36 - 24 = 12$, rather than mistakenly adding to get $36 + 24 = 60$."
        },
        {
            "ans": "$$x = -1, \\quad x = \\dfrac{ 6 \\pm 2\\sqrt{ 3 } }{ 2 }$$",
            "feedback": "You may have made an error when simplifying your surd expression, forgetting to divide the leading term '6' by the denominator when factorising out the 2."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Simplifying Quadratic Fractions",
        "content": "When simplifying expressions like $\\frac{6 \\pm 2\\sqrt{3}}{4}$, do not cancel terms individually! First, factorise out the greatest common factor from the numerator: $2(3 \\pm \\sqrt{3})$. Then, divide both the numerator GCF and the denominator by 2 to yield $\\frac{3 \\pm \\sqrt{3}}{2}$. This prevents the extremely common error of only dividing one of the terms in the numerator."
    }
},
{
    "id": "004421",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Coordinate Geometry",
    "topic": "Coordinate Geometry",
    "subtopic": [
        "Perpendicular Lines",
        "Midpoints",
        "Quadratic Equations in Surd Form"
    ],
    "img": false,
    "question": "The points $A$ and $B$ have coordinates $(3a, a^2)$ and $(2a + 2, 2a)$ respectively, where $a \\neq 0$ and $a \\neq 2$.<br><br><strong>(a)</strong> A straight line, perpendicular to $AB$ and passing through the point $A$, cuts the $x$-axis at the point $P$. Find, in terms of $a$, the coordinates of the point $P$. [8]<br><br><strong>(b)</strong> The midpoint of the line segment $AB$ has equal $x$ and $y$ ordinates. Find the possible values of $a$ in their simplest surd form. [5]",
    "steps": [
        "<strong>Step 1: Find the gradient of the line segment $AB$</strong><br>The gradient $m_{ AB }$ is given by the gradient formula $m = \\dfrac{ y_B - y_A }{ x_B - x_A }$:<br>\\begin{aligned} m_{ AB } &= \\dfrac{ 2a - a^2 }{ ( 2a + 2 ) - 3a } \\cr &= \\dfrac{ 2a - a^2 }{ 2 - a } \\cr &= \\dfrac{ a( 2 - a ) }{ 2 - a } \\cr &= a \\end{aligned}<br>Since $a \\neq 2$, the denominator is non-zero, and the gradient simplifies beautifully to $a$.",
        "<strong>Step 2: Determine the equation of the perpendicular line</strong><br>Since the required line is perpendicular to $AB$, its gradient is the negative reciprocal of $m_{ AB }$:<br>\\begin{aligned} m_{\\perp} &= -\\dfrac{ 1 }{ a } \\cr \\end{aligned}<br>The equation of the line passing through $A( 3a, a^2 )$ is:<br>\\begin{aligned} y - a^2 &= -\\dfrac{ 1 }{ a }( x - 3a ) \\cr \\end{aligned}",
        "<strong>Step 3: Solve for the coordinates of $P$</strong><br>The line cuts the $x$-axis at $P$, so we set $y = 0$ to find the $x$-coordinate:<br>\\begin{aligned} 0 - a^2 &= -\\dfrac{ 1 }{ a }( x - 3a ) \\cr -a^2 &= -\\dfrac{ x - 3a }{ a } \\cr a^3 &= x - 3a \\cr x &= a^3 + 3a \\cr \\end{aligned}<br>Thus, the coordinates of the point $P$ are $( a^3 + 3a, 0 )$.",
        "<strong>Step 4: Express the midpoint of $AB$ algebraically</strong><br>The coordinates of the midpoint $M( x_M, y_M )$ are given by $M\\left( \\dfrac{ x_A + x_B }{ 2 }, \\dfrac{ y_A + y_B }{ 2 } \\right)$:<br>\\begin{aligned} M &= \\left( \\dfrac{ 3a + ( 2a + 2 ) }{ 2 }, \\dfrac{ a^2 + 2a }{ 2 } \\right) \\cr &= \\left( \\dfrac{ 5a + 2 }{ 2 }, \\dfrac{ a^2 + 2a }{ 2 } \\right) \\cr \\end{aligned}",
        "<strong>Step 5: Set up and solve the quadratic equation</strong><br>Since the midpoint has equal $x$ and $y$ ordinates, set the $x$-coordinate equal to the $y$-coordinate:<br>\\begin{aligned} \\dfrac{ 5a + 2 }{ 2 } &= \\dfrac{ a^2 + 2a }{ 2 } \\cr 5a + 2 &= a^2 + 2a \\cr a^2 - 3a - 2 &= 0 \\cr \\end{aligned}<br>Solve this quadratic equation using the quadratic formula with $a=1$, $b=-3$, and $c=-2$:<br>\\begin{aligned} a &= \\dfrac{ -b \\pm \\sqrt{ b^2 - 4ac } }{ 2a } \\cr &= \\dfrac{ -( -3 ) \\pm \\sqrt{ ( -3 )^2 - 4( 1 )( -2 ) } }{ 2( 1 ) } \\cr &= \\dfrac{ 3 \\pm \\sqrt{ 9 + 8 } }{ 2 } \\cr &= \\dfrac{ 3 \\pm \\sqrt{ 17 } }{ 2 } \\cr \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$P( a^3 + 3a, 0 ), \\quad a = \\dfrac{ 3 \\pm \\sqrt{ 5 } }{ 2 }$$",
            "feedback": "You may have made a sign error when calculating the discriminant in the quadratic formula. Check that you used $-4ac = -4( 1 )( -2 ) = +8$, which leads to $9 + 8 = 17$, rather than subtracting to get $9 - 8 = 1$."
        },
        {
            "ans": "$$P( a^3 - 3a, 0 ), \\quad a = \\dfrac{ 3 \\pm \\sqrt{ 17 } }{ 2 }$$",
            "feedback": "You may have made a sign error in Step 3 when rearranging $-a^2 = -\\dfrac{ x - 3 a }{ a }$. Multiplying both sides by $-a$ gives $a^3 = x - 3a$, which rearranges to $x = a^3 + 3a$ (not $a^3 - 3a$)."
        },
        {
            "ans": "$$P( a^3 + 3a, 0 ), \\quad a = \\dfrac{ -3 \\pm \\sqrt{ 17 } }{ 2 }$$",
            "feedback": "You may have made a sign error in the quadratic formula when substituting $-b$. Since $b = -3$, $-b$ must be $+3$ (not $-3$)."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Algebraic Simplification of Gradients",
        "content": "When dealing with coordinates containing variables, always look for factorisation in your gradient calculations. Factoring out $a$ in $2a - a^2 = a( 2 - a )$ allowed us to cleanly cancel $( 2 - a )$. If you had not noticed this factorisation, your perpendicular line equation would have become algebraically unmanageable!"
    }
},
{
    "id": "004422",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Coordinate Geometry",
    "topic": "Coordinate Geometry",
    "subtopic": [
        "Perpendicular Lines",
        "Midpoints",
        "Quadratic Equations in Surd Form"
    ],
    "img": false,
    "question": "The points $A$ and $B$ have coordinates $(4a, a^2)$ and $(3a + 3, 3a)$ respectively, where $a \\neq 0$ and $a \\neq 3$.<br><br><strong>(a)</strong> A straight line, perpendicular to $AB$ and passing through the point $B$, cuts the $y$-axis at the point $Q$. Find, in terms of $a$, the coordinates of the point $Q$. [8]<br><br><strong>(b)</strong> The midpoint of the line segment $AB$ has equal $x$ and $y$ ordinates. Find the possible values of $a$ in their simplest surd form. [5]",
    "steps": [
        "<strong>Step 1: Find the gradient of the line segment $AB$</strong><br>The gradient $m_{ AB }$ is given by the gradient formula $m = \\dfrac{ y_B - y_A }{ x_B - x_A }$:<br>\\begin{aligned} m_{ AB } &= \\dfrac{ 3a - a^2 }{ ( 3a + 3 ) - 4a } \\cr &= \\dfrac{ 3a - a^2 }{ 3 - a } \\cr &= \\dfrac{ a( 3 - a ) }{ 3 - a } \\cr &= a \\end{aligned}<br>Since $a \\neq 3$, the denominator is non-zero, and the gradient simplifies to $a$.",
        "<strong>Step 2: Determine the equation of the perpendicular line</strong><br>Since the required line is perpendicular to $AB$, its gradient is the negative reciprocal of $m_{ AB }$:<br>\\begin{aligned} m_{\\perp} &= -\\dfrac{ 1 }{ a } \\cr \\end{aligned}<br>The equation of the line passing through $B( 3a + 3, 3a )$ is:<br>\\begin{aligned} y - 3a &= -\\dfrac{ 1 }{ a }( x - ( 3a + 3 ) ) \\cr \\end{aligned}",
        "<strong>Step 3: Solve for the coordinates of $Q$</strong><br>The line cuts the $y$-axis at $Q$, so we set $x = 0$ to find the $y$-coordinate:<br>\\begin{aligned} y - 3a &= -\\dfrac{ 1 }{ a }( 0 - ( 3a + 3 ) ) \\cr y - 3a &= \\dfrac{ 3a + 3 }{ a } \\cr y &= 3a + \\dfrac{ 3a + 3 }{ a } \\cr y &= 3a + 3 + \\dfrac{ 3 }{ a } \\cr \\end{aligned}<br>Thus, the coordinates of the point $Q$ are $\\left( 0, 3a + 3 + \\dfrac{ 3 }{ a } \\right)$.",
        "<strong>Step 4: Express the midpoint of $AB$ algebraically</strong><br>The coordinates of the midpoint $M( x_M, y_M )$ are given by $M\\left( \\dfrac{ x_A + x_B }{ 2 }, \\dfrac{ y_A + y_B }{ 2 } \\right)$:<br>\\begin{aligned} M &= \\left( \\dfrac{ 4a + ( 3a + 3 ) }{ 2 }, \\dfrac{ a^2 + 3a }{ 2 } \\right) \\cr &= \\left( \\dfrac{ 7a + 3 }{ 2 }, \\dfrac{ a^2 + 3a }{ 2 } \\right) \\cr \\end{aligned}",
        "<strong>Step 5: Set up and solve the quadratic equation</strong><br>Since the midpoint has equal $x$ and $y$ ordinates, set the $x$-coordinate equal to the $y$-coordinate:<br>\\begin{aligned} \\dfrac{ 7a + 3 }{ 2 } &= \\dfrac{ a^2 + 3a }{ 2 } \\cr 7a + 3 &= a^2 + 3a \\cr a^2 - 4a - 3 &= 0 \\cr \\end{aligned}<br>Solve this quadratic equation using the quadratic formula with $a=1$, $b=-4$, and $c=-3$:<br>\\begin{aligned} a &= \\dfrac{ -b \\pm \\sqrt{ b^2 - 4ac } }{ 2a } \\cr &= \\dfrac{ -( -4 ) \\pm \\sqrt{ ( -4 )^2 - 4( 1 )( -3 ) } }{ 2( 1 ) } \\cr &= \\dfrac{ 4 \\pm \\sqrt{ 16 + 12 } }{ 2 } \\cr &= \\dfrac{ 4 \\pm \\sqrt{ 28 } }{ 2 } \\cr &= \\dfrac{ 4 \\pm 2\\sqrt{ 7 } }{ 2 } \\cr &= 2 \\pm \\sqrt{ 7 } \\cr \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$Q\\left( 0, 3a + 3 + \\dfrac{ 3 }{ a } \\right), \\quad a = 2 \\pm \\sqrt{ 5 }$$",
            "feedback": "You may have made an arithmetic sign error in Step 5 when calculating the discriminant, writing $-4ac = -4( 1 )( -3 ) = -12$ instead of $+12$, which leads to $\\sqrt{ 16 - 12 } = \\sqrt{ 4 } = 2$."
        },
        {
            "ans": "$$Q\\left( 0, 3a - 3 - \\dfrac{ 3 }{ a } \\right), \\quad a = 2 \\pm \\sqrt{ 7 }$$",
            "feedback": "You may have made a sign distribution error in Step 3 when simplifying the double negatives. Note that $-\\dfrac{1}{a}( 0 - ( 3a + 3 ) ) = +\\dfrac{ 3a + 3 }{ a }$."
        },
        {
            "ans": "$$Q\\left( 0, 3a + 3 + \\dfrac{ 3 }{ a } \\right), \\quad a = -2 \\pm \\sqrt{ 7 }$$",
            "feedback": "You may have made a sign error when substituting $-b$ in the quadratic formula. Since $b = -4$, your $-b$ term must be $+4$ (not $-4$)."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Expanding Brackets with Negative Signs",
        "content": "In part (a), pay extremely close attention to the negative signs when setting up the perpendicular line. The term $x - ( 3a + 3 )$ has nested brackets. Distributing the negative gradient $-1/a$ across a negative bracket requires careful sign-tracking: the double negatives cancel to produce a clean, positive fraction $\\frac{3a + 3}{a}$. Work slowly on these steps to avoid dropping easy accuracy marks."
    }
},
{
    "id": "004423",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Coordinate Geometry",
    "topic": "Coordinate Geometry",
    "subtopic": [
        "Perpendicular Lines",
        "Midpoints",
        "Rational Solutions"
    ],
    "img": false,
    "question": "The points $A$ and $B$ have coordinates $(2a, 2a^2)$ and $(a + 1, 2a)$ respectively, where $a \\neq 0$ and $a \\neq 1$.<br><br><strong>(a)</strong> A straight line, perpendicular to $AB$ and passing through the point $B$, cuts the $x$-axis at the point $P$. Find, in terms of $a$, the coordinates of the point $P$. [8]<br><br><strong>(b)</strong> The midpoint of the line segment $AB$ has equal $x$ and $y$ ordinates. Find the possible values of $a$. [5]",
    "steps": [
        "<strong>Step 1: Find the gradient of the line segment $AB$</strong><br>The gradient $m_{ AB }$ is calculated using the gradient formula:<br>\\begin{aligned} m_{ AB } &= \\dfrac{ 2a - 2a^2 }{ ( a + 1 ) - 2a } \\cr &= \\dfrac{ 2a( 1 - a ) }{ 1 - a } \\cr &= 2a \\end{aligned}<br>Since $a \\neq 1$, the denominator is non-zero, and the gradient simplifies beautifully to $2a$.",
        "<strong>Step 2: Determine the equation of the perpendicular line</strong><br>Since the required line is perpendicular to $AB$, its gradient is the negative reciprocal of $2a$:<br>\\begin{aligned} m_{\\perp} &= -\\dfrac{ 1 }{ 2a } \\cr \\end{aligned}<br>The equation of the line passing through $B( a + 1, 2a )$ is:<br>\\begin{aligned} y - 2a &= -\\dfrac{ 1 }{ 2a }( x - ( a + 1 ) ) \\cr \\end{aligned}",
        "<strong>Step 3: Solve for the coordinates of $P$</strong><br>The line cuts the $x$-axis at $P$, so we set $y = 0$ to find the $x$-coordinate:<br>\\begin{aligned} 0 - 2a &= -\\dfrac{ 1 }{ 2a }( x - a - 1 ) \\cr -2a &= -\\dfrac{ x - a - 1 }{ 2a } \\cr 4a^2 &= x - a - 1 \\cr x &= 4a^2 + a + 1 \\cr \\end{aligned}<br>Thus, the coordinates of the point $P$ are $( 4a^2 + a + 1, 0 )$.",
        "<strong>Step 4: Express the midpoint of $AB$ algebraically</strong><br>The coordinates of the midpoint $M$ are:<br>\\begin{aligned} M &= \\left( \\dfrac{ 2a + ( a + 1 ) }{ 2 }, \\dfrac{ 2a^2 + 2a }{ 2 } \\right) \\cr &= \\left( \\dfrac{ 3a + 1 }{ 2 }, a^2 + a \\right) \\cr \\end{aligned}",
        "<strong>Step 5: Set up and solve the quadratic equation</strong><br>Since the midpoint has equal $x$ and $y$ ordinates, set the $x$-coordinate equal to the $y$-coordinate:<br>\\begin{aligned} \\dfrac{ 3a + 1 }{ 2 } &= a^2 + a \\cr 3a + 1 &= 2a^2 + 2a \\cr 2a^2 - a - 1 &= 0 \\cr \\end{aligned}<br>Solve this quadratic equation by factorisation:<br>\\begin{aligned} ( 2a + 1 )( a - 1 ) &= 0 \\cr a = -\\dfrac{ 1 }{ 2 } \\quad \\text{or} \\quad a &= 1 \\cr \\end{aligned}<br>Since the initial conditions of the problem specify that $a \\neq 1$, we must discard $a = 1$. This leaves the only valid solution as $a = -\\dfrac{ 1 }{ 2 }$."
    ],
    "pi_options": [
        {
            "ans": "$$P( 4a^2 + a + 1, 0 ), \\quad a = 1 \\text{ or } a = -\\dfrac{ 1 }{ 2 }$$",
            "feedback": "You did some excellent algebraic work, but you forgot to check the boundary constraints given in the question. Since the problem explicitly states $a \\neq 1$, you must discard the root $a = 1$."
        },
        {
            "ans": "$$P( 4a^2 - a - 1, 0 ), \\quad a = -\\dfrac{ 1 }{ 2 }$$",
            "feedback": "You may have made a sign error when solving the equation $-2a = -\\dfrac{ x - a - 1 }{ 2a }$. This should simplify to $4a^2 = x - a - 1$, which gives $x = 4a^2 + a + 1$ (not $4a^2 - a - 1$)."
        },
        {
            "ans": "$$P( 4a^2 + a + 1, 0 ), \\quad a = \\dfrac{ 1 }{ 2 }$$",
            "feedback": "You may have made a sign error when factorising the quadratic equation $2a^2 - a - 1 = 0$. It factorises to $( 2a + 1 )( a - 1 ) = 0$, which yields $a = -\\dfrac{1}{2}$ (not $+\\dfrac{1}{2}$)."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Discarding Invalid Roots From Constraints",
        "content": "Always read the first sentence of a coordinate geometry question carefully! The condition $a \\neq 1$ is not just decorative; it is mathematically required because if $a = 1$, the gradient of $AB$ would have a zero in the denominator and be undefined. In part (b), we had to discard $a = 1$ to maintain mathematical consistency. Leaving it in would cost you accuracy marks."
    }
},
{
    "id": "004424",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Coordinate Geometry",
    "topic": "Coordinate Geometry",
    "subtopic": [
        "Parallel Lines",
        "Midpoints",
        "Quadratic Equations in Surd Form"
    ],
    "img": false,
    "question": "The points $A$ and $B$ have coordinates $(2a, a^2)$ and $(a + 1, a)$ respectively, where $a \\neq 0$ and $a \\neq 1$.<br><br><strong>(a)</strong> A straight line, parallel to $AB$ and passing through the origin $O(0,0)$, cuts the vertical line $x = a$ at the point $Q$. Find, in terms of $a$, the coordinates of the point $Q$. [6]<br><br><strong>(b)</strong> The midpoint of the line segment $AB$ lies on the line $y = 2x$. Find the possible values of $a$ in their simplest surd form. [7]",
    "steps": [
        "<strong>Step 1: Find the gradient of $AB$</strong><br>The gradient $m_{ AB }$ is given by the change in $y$ over change in $x$:<br>\\begin{aligned} m_{ AB } &= \\dfrac{ a - a^2 }{ ( a + 1 ) - 2a } \\cr &= \\dfrac{ a( 1 - a ) }{ 1 - a } \\cr &= a \\end{aligned}<br>Since $a \\neq 1$, the gradient simplifies nicely to $a$.",
        "<strong>Step 2: Find the equation of the parallel line</strong><br>Since the required line is parallel to $AB$, its gradient is equal to $m_{ AB } = a$. The line passes through the origin $O( 0,0 )$, so its equation is simply:<br>\\begin{aligned} y &= ax \\cr \\end{aligned}",
        "<strong>Step 3: Solve for the coordinates of $Q$</strong><br>The line cuts the vertical line $x = a$ at the point $Q$. Substitute $x = a$ into your line equation to find $y$:<br>\\begin{aligned} y &= a( a ) \\cr y &= a^2 \\cr \\end{aligned}<br>Thus, the coordinates of the point $Q$ are $( a, a^2 )$.",
        "<strong>Step 4: Express the midpoint of $AB$ algebraically</strong><br>The coordinates of the midpoint $M$ are calculated using the midpoint formula:<br>\\begin{aligned} M &= \\left( \\dfrac{ 2a + ( a + 1 ) }{ 2 }, \\dfrac{ a^2 + a }{ 2 } \\right) \\cr &= \\left( \\dfrac{ 3a + 1 }{ 2 }, \\dfrac{ a^2 + a }{ 2 } \\right) \\cr \\end{aligned}",
        "<strong>Step 5: Set up and solve the equation under the line constraint</strong><br>Since the midpoint lies on $y = 2x$, substitute the coordinates of $M$ directly into this line equation:<br>\\begin{aligned} \\dfrac{ a^2 + a }{ 2 } &= 2\\left( \\dfrac{ 3a + 1 }{ 2 } \\right) \\cr a^2 + a &= 2( 3a + 1 ) \\cr a^2 + a &= 6a + 2 \\cr a^2 - 5a - 2 &= 0 \\cr \\end{aligned}<br>Solve this using the quadratic formula with $a=1$, $b=-5$, and $c=-2$:<br>\\begin{aligned} a &= \\dfrac{ -b \\pm \\sqrt{ b^2 - 4ac } }{ 2a } \\cr &= \\dfrac{ -( -5 ) \\pm \\sqrt{ ( -5 )^2 - 4( 1 )( -2 ) } }{ 2( 1 ) } \\cr &= \\dfrac{ 5 \\pm \\sqrt{ 25 + 8 } }{ 2 } \\cr &= \\dfrac{ 5 \\pm \\sqrt{ 33 } }{ 2 } \\cr \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$Q( a, a^2 ), \\quad a = \\dfrac{ 5 \\pm \\sqrt{ 17 } }{ 2 }$$",
            "feedback": "You may have made an arithmetic sign error in Step 5 when calculating the discriminant, writing $-4ac = -4( 1 )( -2 ) = -8$ instead of $+8$, leading to $25 - 8 = 17$ instead of $25 + 8 = 33$."
        },
        {
            "ans": "$$Q\\left( a, -\\dfrac{ 1 }{ a } \\right), \\quad a = \\dfrac{ 5 \\pm \\sqrt{ 33 } }{ 2 }$$",
            "feedback": "You may have misread the question and assumed the line was perpendicular to $AB$ rather than parallel. Parallel lines share the exact same gradient, so $m = a$ (not $-1/a$)."
        },
        {
            "ans": "$$Q( a, a^2 ), \\quad a = \\dfrac{ -5 \\pm \\sqrt{ 33 } }{ 2 }$$",
            "feedback": "You may have made a sign error when substituting $-b$ in the quadratic formula. Since $b = -5$, $-b$ must be $+5$ (not $-5$)."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Parallel vs. Perpendicular Gradients",
        "content": "Do not automatically assume coordinate geometry lines are perpendicular! This is a common habit because perpendicular lines are frequently tested. Read carefully: parallel lines have identical gradients $( m_1 = m_2 )$, whereas perpendicular lines have negative reciprocal gradients $( m_1 \\cdot m_2 = -1 )$. A simple misread here will change your entire algebra path."
    }
},
{
    "id": "004425",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Coordinate Geometry",
    "topic": "Coordinate Geometry",
    "subtopic": [
        "Perpendicular Lines",
        "Midpoints",
        "Linear Constraints"
    ],
    "img": false,
    "question": "The points $A$ and $B$ have coordinates $(2a, a^2)$ and $(a + 2, 2a)$ respectively, where $a \\neq 0$ and $a \\neq 2$.<br><br><strong>(a)</strong> A straight line, perpendicular to $AB$ and passing through the point $B$, cuts the $y$-axis at the point $Q$. Find, in terms of $a$, the coordinates of the point $Q$. [8]<br><br><strong>(b)</strong> The midpoint of the line segment $AB$ lies on the line $y = x - 1$. Find the possible value of $a$. [5]",
    "steps": [
        "<strong>Step 1: Find the gradient of the line segment $AB$</strong><br>The gradient $m_{ AB }$ is:<br>\\begin{aligned} m_{ AB } &= \\dfrac{ 2a - a^2 }{ ( a + 2 ) - 2a } \\cr &= \\dfrac{ 2a - a^2 }{ 2 - a } \\cr &= \\dfrac{ a( 2 - a ) }{ 2 - a } \\cr &= a \\end{aligned}<br>Since $a \\neq 2$, the gradient simplifies beautifully to $a$.",
        "<strong>Step 2: Determine the equation of the perpendicular line</strong><br>Since the required line is perpendicular to $AB$, its gradient is negative reciprocal of $m_{ AB }$:<br>\\begin{aligned} m_{\\perp} &= -\\dfrac{ 1 }{ a } \\cr \\end{aligned}<br>The equation of the line passing through $B( a + 2, 2a )$ is:<br>\\begin{aligned} y - 2a &= -\\dfrac{ 1 }{ a }( x - ( a + 2 ) ) \\cr \\end{aligned}",
        "<strong>Step 3: Solve for the coordinates of $Q$</strong><br>The line cuts the $y$-axis at $Q$, so we set $x = 0$ to find the $y$-coordinate:<br>\\begin{aligned} y - 2a &= -\\dfrac{ 1 }{ a }( 0 - ( a + 2 ) ) \\cr y - 2a &= \\dfrac{ a + 2 }{ a } \\cr y &= 2a + \\dfrac{ a + 2 }{ a } \\cr \\end{aligned}<br>Thus, the coordinates of the point $Q$ are $\\left( 0, 2a + \\dfrac{ a + 2 }{ a } \\right)$.",
        "<strong>Step 4: Express the midpoint of $AB$ algebraically</strong><br>The coordinates of the midpoint $M$ are:<br>\\begin{aligned} M &= \\left( \\dfrac{ 2a + ( a + 2 ) }{ 2 }, \\dfrac{ a^2 + 2a }{ 2 } \\right) \\cr &= \\left( \\dfrac{ 3a + 2 }{ 2 }, \\dfrac{ a^2 + 2a }{ 2 } \\right) \\cr \\end{aligned}",
        "<strong>Step 5: Set up and solve the equation under the line constraint</strong><br>Since the midpoint lies on $y = x - 1$, substitute the coordinates of $M$ directly into this line equation:<br>\\begin{aligned} \\dfrac{ a^2 + 2a }{ 2 } &= \\dfrac{ 3a + 2 }{ 2 } - 1 \\cr \\dfrac{ a^2 + 2a }{ 2 } &= \\dfrac{ 3a + 2 - 2 }{ 2 } \\cr \\dfrac{ a^2 + 2a }{ 2 } &= \\dfrac{ 3a }{ 2 } \\cr a^2 + 2a &= 3a \\cr a^2 - a &= 0 \\cr a( a - 1 ) &= 0 \\cr a = 0 \\quad \\text{or} \\quad a &= 1 \\cr \\end{aligned}<br>Since the initial conditions specify $a \\neq 0$, we discard $a = 0$. This leaves our only valid solution as $a = 1$."
    ],
    "pi_options": [
        {
            "ans": "$$Q\\left( 0, 2a + \\dfrac{ a + 2 }{ a } \\right), \\quad a = 0 \\text{ or } a = 1$$",
            "feedback": "You successfully solved the algebra, but you forgot to check the boundary constraints stated at the very beginning of the question. Since $a \\neq 0$, you must discard $a = 0$ as an invalid solution."
        },
        {
            "ans": "$$Q\\left( 0, 2a - \\dfrac{ a + 2 }{ a } \\right), \\quad a = 1$$",
            "feedback": "You may have made a sign error in Step 3 when simplifying $-a - 2$. The term in the brackets is $( x - ( a + 2 ) )$. Substituting $x = 0$ gives $0 - ( a + 2 ) = -a - 2$. Multiplying by $-1/a$ yields $+\\dfrac{a+2}{a}$."
        },
        {
            "ans": "$$Q\\left( 0, 2a + \\dfrac{ a + 2 }{ a } \\right), \\quad a = 5$$",
            "feedback": "You may have made an algebraic slip when simplifying the line constraint equation in Step 5, perhaps by forgetting to subtract the constant 1 correctly after multiplying both sides by 2."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Checking Initial Conditions",
        "content": "Always circle or highlight constraints like $a \\neq 0$ at the start of an exam question. It is very easy to solve a quadratic equation like $a( a - 1 ) = 0$, write down both roots, and lose an accuracy mark because you forgot to discard the boundary value. Be disciplined about checking your final answers against the initial conditions."
    }
},
{
    "id": "004426",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Trigonometry",
    "topic": "Circle Geometry",
    "subtopic": [
        "Trigonometric Proofs",
        "Circle Theorems"
    ],
    "img": "images/Pure/004426.png",
    "question": "The diagram shows a circle with centre $O$ and radius $r$. $AB$ is a diameter of the circle. $S$ lies on the circumference of the circle. $D$ is the foot of the perpendicular from $B$ to $OS$. The acute angle $\\angle BOS$ is $\\theta$. $OA = OB = r$ and $OD = x$.<br><br><strong>(a)</strong> By applying the cosine rule to triangle $AOD$, show that:<br>$$AD^2 = r^2(1 + 3\\cos^2 \\theta)$$ [7]<br><br><strong>(b)</strong> When $BD$ bisects $OS$,<br>$$AD = r\\sqrt{\\dfrac{7}{k}}$$<br>Find the value of $k$, where $k$ is a positive integer. [5]",
    "steps": [
        "<strong>Step 1: Relate the length $OD = x$ to the radius and angle $\\theta$</strong><br>In triangle $BOS$, $BD$ is perpendicular to $OS$, making $OBD$ a right-angled triangle at $D$. The projection of $OB$ onto $OS$ gives:<br>\\begin{aligned} \\cos \\theta &= \\dfrac{ OD }{ OB } \\cr \\cos \\theta &= \\dfrac{ x }{ r } \\cr x &= r \\cos \\theta \\cr \\end{aligned}",
        "<strong>Step 2: Find the angle $\\angle AOD$</strong><br>The points $A$, $O$, and $B$ lie along a straight line because $AB$ is a diameter of the circle. This means the angles on either side of the center are supplementary:<br>\\begin{aligned} \\angle AOD &= 180^\\circ - \\theta \\cr \\end{aligned}",
        "<strong>Step 3: Apply the Cosine Rule to triangle $AOD$</strong><br>Use the cosine rule on triangle $AOD$ with sides $AO = r$, $OD = x$, and angle $\\angle AOD = 180^\\circ - \\theta$:<br>\\begin{aligned} AD^2 &= AO^2 + OD^2 - 2 \\cdot AO \\cdot OD \\cos( \\angle AOD ) \\cr AD^2 &= r^2 + x^2 - 2rx \\cos( 180^\\circ - \\theta ) \\cr \\end{aligned}<br>Using the trigonometric identity $\\cos( 180^\\circ - \\theta ) = -\\cos \\theta$, this simplifies to:<br>\\begin{aligned} AD^2 &= r^2 + x^2 + 2rx \\cos \\theta \\cr \\end{aligned}",
        "<strong>Step 4: Substitute $x = r \\cos \\theta$ to complete the proof for part (a)</strong><br>Substitute $x = r \\cos \\theta$ into the simplified expression:<br>\\begin{aligned} AD^2 &= r^2 + ( r \\cos \\theta )^2 + 2r( r \\cos \\theta ) \\cos \\theta \\cr AD^2 &= r^2 + r^2 \\cos^2 \\theta + 2r^2 \\cos^2 \\theta \\cr AD^2 &= r^2 ( 1 + 3\\cos^2 \\theta ) \\cr \\end{aligned}",
        "<strong>Step 5: Apply the bisection condition in part (b)</strong><br>If $BD$ bisects $OS$, then $D$ is the midpoint of the radius $OS$. This gives us:<br>\\begin{aligned} OD &= \\dfrac{ r }{ 2 } \\cr r \\cos \\theta &= \\dfrac{ r }{ 2 } \\cr \\cos \\theta &= \\dfrac{ 1 }{ 2 } \\cr \\theta &= 60^\\circ \\cr \\end{aligned}",
        "<strong>Step 6: Calculate $AD$ and solve for $k$</strong><br>Substitute $\\cos \\theta = \\dfrac{ 1 }{ 2 }$ into your $AD^2$ formula from part (a):<br>\\begin{aligned} AD^2 &= r^2 \\left( 1 + 3 \\left( \\dfrac{ 1 }{ 2 } \\right)^2 \\right) \\cr &= r^2 \\left( 1 + 3 \\left( \\dfrac{ 1 }{ 4 } \\right) \\right) \\cr &= r^2 \\left( 1 + \\dfrac{ 3 }{ 4 } \\right) \\cr &= r^2 \\left( \\dfrac{ 7 }{ 4 } \\right) \\cr \\end{aligned}<br>Taking the square root yields:<br>\\begin{aligned} AD &= r \\sqrt{ \\dfrac{ 7 }{ 4 } } \\cr \\end{aligned}<br>Comparing this to the given expression $AD = r\\sqrt{\\dfrac{7}{k}}$, we get $k = 4$."
    ],
    "pi_options": [
        {
            "ans": "$$k = 2$$",
            "feedback": "You may have made an error when squaring $\\cos \\theta = \\dfrac{1}{2}$ in Step 6, mistakenly writing $\\left(\\dfrac{1}{2}\\right)^2 = \\dfrac{1}{2}$ instead of $\\dfrac{1}{4}$."
        },
        {
            "ans": "$$k = 16$$",
            "feedback": "You may have made an algebraic slip when equating $AD = r\\sqrt{\\dfrac{7}{4}}$ to $r\\sqrt{\\dfrac{7}{k}}$, perhaps by squaring the denominator a second time."
        },
        {
            "ans": "$$k = 3$$",
            "feedback": "You may have made an arithmetic slip when simplifying the terms inside the parentheses in Step 6, perhaps by writing $1 + 3\\left(\\dfrac{1}{4}\\right) = 1 + \\dfrac{3}{4} = \\dfrac{6}{4}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Supplementary Angle Trigonometry",
        "content": "In geometry proofs, the relation $\\cos( 180^\\circ - \\theta ) = -\\cos \\theta$ is one of the most frequently used identities. If you forget to flip the sign, you will end up with a subtraction $1 - \\cos^2 \\theta$, which will prevent you from completing the proof. Always write down your supplementary angle identities explicitly."
    }
},
{
    "id": "004427",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Trigonometry",
    "topic": "Circle Geometry",
    "subtopic": [
        "Trigonometric Proofs",
        "Circle Theorems"
    ],
    "img": "images/Pure/004427.png",
    "question": "The diagram shows a circle with centre $O$ and radius $r$. $BA$ is a diameter of the circle. $S$ lies on the circumference of the circle. $D$ is the foot of the perpendicular from $A$ to $OS$. The angle $\\angle AOS$ is $\\theta$. $OA = OB = r$ and $OD = x$.<br><br><strong>(a)</strong> By applying the cosine rule to triangle $BOD$, show that:<br>$$BD^2 = r^2(1 + 3\\cos^2 \\theta)$$ [7]<br><br><strong>(b)</strong> When $AD$ bisects $OS$,<br>$$BD = r\\sqrt{\\dfrac{7}{k}}$$<br>Find the value of $k$, where $k$ is a positive integer. [5]",
    "steps": [
        "<strong>Step 1: Relate the length $OD = x$ to the radius and angle $\\theta$</strong><br>In right-angled triangle $ADO$, $D$ is the foot of the perpendicular from $A$ to $OS$, making $\\angle ADO = 90^\\circ$. The projection of $OA$ onto $OS$ gives:<br>\\begin{aligned} \\cos \\theta &= \\dfrac{ OD }{ OA } \\cr \\cos \\theta &= \\dfrac{ x }{ r } \\cr x &= r \\cos \\theta \\cr \\end{aligned}",
        "<strong>Step 2: Find the angle $\\angle BOD$</strong><br>The points $B$, $O$, and $A$ lie along a straight line because $BA$ is a diameter of the circle. This means the angles on either side of the center are supplementary:<br>\\begin{aligned} \\angle BOD &= 180^\\circ - \\theta \\cr \\end{aligned}",
        "<strong>Step 3: Apply the Cosine Rule to triangle $BOD$</strong><br>Use the cosine rule on triangle $BOD$ with sides $OB = r$, $OD = x$, and angle $\\angle BOD = 180^\\circ - \\theta$:<br>\\begin{aligned} BD^2 &= BO^2 + OD^2 - 2 \\cdot BO \\cdot OD \\cos( \\angle BOD ) \\cr BD^2 &= r^2 + x^2 - 2rx \\cos( 180^\\circ - \\theta ) \\cr \\end{aligned}<br>Using the trigonometric identity $\\cos( 180^\\circ - \\theta ) = -\\cos \\theta$, this simplifies to:<br>\\begin{aligned} BD^2 &= r^2 + x^2 + 2rx \\cos \\theta \\cr \\end{aligned}",
        "<strong>Step 4: Substitute $x = r \\cos \\theta$ to complete the proof for part (a)</strong><br>Substitute $x = r \\cos \\theta$ into the simplified expression:<br>\\begin{aligned} BD^2 &= r^2 + ( r \\cos \\theta )^2 + 2r( r \\cos \\theta ) \\cos \\theta \\cr BD^2 &= r^2 + r^2 \\cos^2 \\theta + 2r^2 \\cos^2 \\theta \\cr BD^2 &= r^2 ( 1 + 3\\cos^2 \\theta ) \\cr \\end{aligned}",
        "<strong>Step 5: Apply the bisection condition in part (b)</strong><br>If $AD$ bisects $OS$, then $D$ is the midpoint of the radius $OS$. This gives us:<br>\\begin{aligned} OD &= \\dfrac{ r }{ 2 } \\cr r \\cos \\theta &= \\dfrac{ r }{ 2 } \\cr \\cos \\theta &= \\dfrac{ 1 }{ 2 } \\cr \\theta &= 60^\\circ \\cr \\end{aligned}",
        "<strong>Step 6: Calculate $BD$ and solve for $k$</strong><br>Substitute $\\cos \\theta = \\dfrac{ 1 }{ 2 }$ into your $BD^2$ formula from part (a):<br>\\begin{aligned} BD^2 &= r^2 \\left( 1 + 3 \\left( \\dfrac{ 1 }{ 2 } \\right)^2 \\right) \\cr &= r^2 \\left( 1 + 3 \\left( \\dfrac{ 1 }{ 4 } \\right) \\right) \\cr &= r^2 \\left( 1 + \\dfrac{ 3 }{ 4 } \\right) \\cr &= r^2 \\left( \\dfrac{ 7 }{ 4 } \\right) \\cr \\end{aligned}<br>Taking the square root yields:<br>\\begin{aligned} BD &= r \\sqrt{ \\dfrac{ 7 }{ 4 } } \\cr \\end{aligned}<br>Comparing this to the given expression $BD = r\\sqrt{\\dfrac{7}{k}}$, we get $k = 4$."
    ],
    "pi_options": [
        {
            "ans": "$$k = 2$$",
            "feedback": "You may have made an error when squaring $\\cos \\theta = \\dfrac{1}{2}$ in Step 6, mistakenly writing $\\left(\\dfrac{1}{2}\\right)^2 = \\dfrac{1}{2}$ instead of $\\dfrac{1}{4}$."
        },
        {
            "ans": "$$k = 16$$",
            "feedback": "You may have made an algebraic slip when equating $BD = r\\sqrt{\\dfrac{7}{4}}$ to $r\\sqrt{\\dfrac{7}{k}}$, perhaps by squaring the denominator a second time."
        },
        {
            "ans": "$$k = 3$$",
            "feedback": "You may have made an arithmetic slip when simplifying the terms inside the parentheses in Step 6, perhaps by writing $1 + 3\\left(\\dfrac{1}{4}\\right) = 1 + \\dfrac{3}{4} = \\dfrac{6}{4}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Symmetry in Circle Proofs",
         "content": "When proving trigonometric relations on opposite sides of a circle, the horizontal orientation of your diameter does not change the core projection. Whether you are projecting $OA$ or $OB$ onto a radius $OS$, the projection length remains $r \\cos \\theta$. Recognizing that supplementary angles (like $\\angle AOS = \\theta$ and $\\angle BOS = 180^\\circ - \\theta$) share this symmetrical relationship allows you to solve coordinate geometry proofs with confidence, regardless of which side you are working on."   }
},
{
    "id": "004428",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Trigonometry",
    "topic": "Circle Geometry",
    "subtopic": [
        "Coordinate Proofs",
        "Trigonometric Proofs"
    ],
    "img": "images/Pure/004428.png",
    "question": "The diagram shows a circle with centre $O$ and radius $r$. $AB$ is a diameter of the circle. $S$ lies on the circumference of the circle. $D$ is the foot of the perpendicular from $S$ to $AB$. The acute angle $\\angle SOB$ is $\\theta$. $OA = OB = r$ and $OD = x$.<br><br><strong>(a)</strong> Show that the length $AS$ and length $AD$ satisfy:<br>$$AS^2 = 2r \\cdot AD$$ [6]<br><br><strong>(b)</strong> When $D$ is the midpoint of $OB$, find the exact value of $\\theta$ in degrees and express the length of $AS$ in terms of $r$. [6]",
    "steps": [
        "<strong>Step 1: Set up coordinates for part (a)</strong><br>For clarity, we place the circle on a Cartesian grid with centre $O$ at the origin $( 0,0 )$ and diameter $AB$ along the $x$-axis. This gives:<br>\\begin{aligned} A &= ( -r, 0 ) \\cr B &= ( r, 0 ) \\cr \\end{aligned}",
        "<strong>Step 2: Express the coordinates of $S$ and $D$ in terms of $\\theta$</strong><br>Using polar coordinates, the point $S$ on the circle has coordinates:<br>\\begin{aligned} S &= ( r \\cos \\theta, r \\sin \\theta ) \\cr \\end{aligned}<br>Since $D$ is the foot of the perpendicular from $S$ to the $x$-axis (the line segment $AB$), its coordinates are:<br>\\begin{aligned} D &= ( r \\cos \\theta, 0 ) \\cr \\end{aligned}",
        "<strong>Step 3: Calculate the length squared $AS^2$</strong><br>Using the distance formula, find the distance squared between $A( -r, 0 )$ and $S( r \\cos \\theta, r \\sin \\theta )$:<br>\\begin{aligned} AS^2 &= ( r \\cos \\theta - ( -r ) )^2 + ( r \\sin \\theta - 0 )^2 \\cr &= ( r \\cos \\theta + r )^2 + r^2 \\sin^2 \\theta \\cr &= r^2 ( \\cos^2 \\theta + 2 \\cos \\theta + 1 + \\sin^2 \\theta ) \\cr \\end{aligned}<br>Using the fundamental identity $\\sin^2 \\theta + \\cos^2 \\theta = 1$, we get:<br>\\begin{aligned} AS^2 &= r^2 ( 2 + 2 \\cos \\theta ) \\cr &= 2r^2 ( 1 + \\cos \\theta ) \\cr \\end{aligned}",
        "<strong>Step 4: Calculate the length $AD$ and complete the proof</strong><br>The distance from $A( -r, 0 )$ to $D( r \\cos \\theta, 0 )$ along the horizontal $x$-axis is:<br>\\begin{aligned} AD &= r \\cos \\theta - ( -r ) \\cr &= r( 1 + \\cos \\theta ) \\cr \\end{aligned}<br>Multiply this by $2r$:<br>\\begin{aligned} 2r \\cdot AD &= 2r \\cdot r( 1 + \\cos \\theta ) \\cr &= 2r^2 ( 1 + \\cos \\theta ) \\cr \\end{aligned}<br>This is exactly equal to $AS^2$, completing the proof.",
        "<strong>Step 5: Apply the midpoint condition in part (b)</strong><br>If $D$ is the midpoint of $OB$, then its $x$-coordinate must be half of $OB = r$:<br>\\begin{aligned} r \\cos \\theta &= \\dfrac{ r }{ 2 } \\cr \\cos \\theta &= \\dfrac{ 1 }{ 2 } \\cr \\theta &= 60^\\circ \\cr \\end{aligned}",
        "<strong>Step 6: Express the length of $AS$ in terms of $r$</strong><br>Substitute $\\cos \\theta = \\dfrac{ 1 }{ 2 }$ into the formula for $AS^2$:<br>\\begin{aligned} AS^2 &= 2r^2 \\left( 1 + \\dfrac{ 1 }{ 2 } \\right) \\cr &= 2r^2 \\left( \\dfrac{ 3 }{ 2 } \\right) \\cr &= 3r^2 \\cr \\end{aligned}<br>Taking the square root yields:<br>\\begin{aligned} AS &= r \\sqrt{ 3 } \\cr \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$\\theta = 60^\\circ, \\quad AS = r\\sqrt{2}$$",
            "feedback": "You may have made an arithmetic slip in Step 6 when evaluating $1 + \\cos\\theta$, perhaps by writing $1 + \\dfrac{1}{2} = 1$ or making a sign error, leading to $AS^2 = 2r^2$."
        },
        {
            "ans": "$$\\theta = 30^\\circ, \\quad AS = r\\sqrt{3}$$",
            "feedback": "You may have misidentified $\\cos\\theta = \\dfrac{1}{2}$ as $\\theta = 30^\\circ$ instead of $60^\\circ$. Remember that $\\cos 60^\\circ = 0.5$ and $\\sin 30^\\circ = 0.5$."
        },
        {
            "ans": "$$\\theta = 60^\\circ, \\quad AS = 3r$$",
            "feedback": "You may have forgotten to take the square root of both sides of the equation $AS^2 = 3r^2$ when finding the length $AS$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Coordinate Geometry as a Proof Tool",
        "content": "When asked to prove geometric relations inside a circle, do not hesitate to overlay a Cartesian coordinate system. Placing the centre of the circle at the origin $( 0,0 )$ and aligning the diameter with the $x$-axis often transforms complicated trigonometric proofs into simple distance-formula algebra!"
    }
},
{
    "id": "004429",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Trigonometry",
    "topic": "Circle Geometry",
    "subtopic": [
        "Tangent Geometry",
        "Trigonometric Equations"
    ],
    "img": "images/Pure/004429.png",
    "question": "The diagram shows a circle with centre $O$ and radius $r$. $AOB$ is a diameter of the circle. $T$ lies on the circumference. The tangent to the circle at $T$ meets the extension of the diameter $AB$ at $P$. The acute angle $\\angle TOP$ is $\\theta$. $OA = OB = r$ and $OP = x$.<br><br><strong>(a)</strong> Show that the length of the tangent $TP$ satisfies:<br>$$TP^2 = r^2\\tan^2 \\theta$$ [5]<br><br><strong>(b)</strong> When the distance $BP$ is exactly equal to the radius $r$, find the exact value of $\\theta$ in degrees. [7]",
    "steps": [
        "<strong>Step 1: Set up the right-angled triangle relations for part (a)</strong><br>A fundamental circle theorem states that a tangent line is always perpendicular to the radius at the point of contact. Therefore, the radius $OT$ is perpendicular to the tangent $TP$, making $OTP$ a right-angled triangle with $\\angle OTP = 90^\\circ$.",
        "<strong>Step 2: Relate the tangent to $\\theta$ and complete part (a)</strong><br>In the right-angled triangle $OTP$, the angle at $O$ is $\\theta$. Using basic right-angled trigonometry:<br>\\begin{aligned} \\tan \\theta &= \\dfrac{ \\text{Opposite} }{ \\text{Adjacent} } \\cr \\tan \\theta &= \\dfrac{ TP }{ OT } \\cr \\tan \\theta &= \\dfrac{ TP }{ r } \\cr \\end{aligned}<br>Multiply both sides by $r$ and square the result:<br>\\begin{aligned} TP &= r \\tan \\theta \\cr TP^2 &= r^2 \\tan^2 \\theta \\cr \\end{aligned}",
        "<strong>Step 3: Analyze the boundary conditions in part (b)</strong><br>The diameter $AB$ lies along the straight line through $O$, with $B$ located between the center $O$ and the point $P$. Since the distance $BP$ is given as exactly equal to the radius $r$, calculate the total hypotenuse length $OP$:<br>\\begin{aligned} OP &= OB + BP \\cr &= r + r \\cr &= 2r \\cr \\end{aligned}",
        "<strong>Step 4: Solve for the exact angle $\\theta$</strong><br>In right-angled triangle $OTP$ (where the hypotenuse is $OP = 2r$ and the adjacent side to angle $\\theta$ is $OT = r$), use the cosine ratio:<br>\\begin{aligned} \\cos \\theta &= \\dfrac{ \\text{Adjacent} }{ \\text{Hypotenuse} } \\cr \\cos \\theta &= \\dfrac{ OT }{ OP } \\cr \\cos \\theta &= \\dfrac{ r }{ 2r } \\cr \\cos \\theta &= \\dfrac{ 1 }{ 2 } \\cr \\end{aligned}<br>Since $\\theta$ is acute, we solve to get:<br>$$\\theta = 60^\\circ$$"
    ],
    "pi_options": [
        {
            "ans": "$$\\theta = 30^\\circ$$",
            "feedback": "You may have misidentified the ratio $\\cos \\theta = \\dfrac{1}{2}$ as $\\theta = 30^\\circ$. Double-check your exact values: $\\cos 60^\\circ = 0.5$ while $\\sin 30^\\circ = 0.5$."
        },
        {
            "ans": "$$\\theta = 45^\\circ$$",
            "feedback": "You may have assumed the triangle is an isosceles right-angled triangle. However, the hypotenuse $OP = 2r$ is twice the adjacent side $OT = r$, which determines a $30^\\circ$-$60^\\circ$-$90^\\circ$ triangle."
        },
        {
            "ans": "$$\\theta = 41.8^\\circ$$",
            "feedback": "You may have used the sine ratio instead of the cosine ratio, solving $\\sin \\theta = \\dfrac{r}{2r} = 0.5$, but then mistakenly used your calculator in radian mode or made an inverse trigonometric calculation error."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Tangent Perpendicularity",
        "content": "In any coordinate or geometric problem involving circle tangents, your first step should always be to draw or indicate a right angle $( 90^\\circ )$ between the tangent and the radius at the point of tangency. This immediately unlocks right-angled triangle properties like Pythagoras and standard SOH CAH TOA trigonometry."
    }
},
{
    "id": "004430",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Trigonometry",
    "topic": "Circle Geometry",
    "subtopic": [
        "Angle in a Semicircle",
        "Trigonometric Equations"
    ],
    "img": "images/Pure/004430.png",
    "question": "The diagram shows a sketch of a semicircle with diameter $AB$ and centre $O$. $C$ lies on the circumference of the semicircle. The angle $\\angle CAB$ is $\\theta$ and $OA = OB = r$.<br><br><strong>(a)</strong> By considering the right-angled triangle $ACB$ in the semicircle, show that:<br>$$BC^2 = 4r^2\\sin^2 \\theta$$ [5]<br><br><strong>(b)</strong> When $BC = r$, find the exact value of the angle $\\theta$ in degrees. [7]",
    "steps": [
        "<strong>Step 1: Apply the circle theorem for angles in a semicircle for part (a)</strong><br>A fundamental circle theorem states that the angle subtended by a diameter at any point on the circumference of a circle is a right angle ($90^\\circ$). Since $AB$ is a diameter, we have:<br>$$\\angle ACB = 90^\\circ$$",
        "<strong>Step 2: Set up the trigonometric ratio and complete part (a)</strong><br>In right-angled triangle $ACB$, the hypotenuse is the diameter $AB = 2r$. The side opposite angle $\\theta$ is $BC$. Apply the sine ratio:<br>\\begin{aligned} \\sin \\theta &= \\dfrac{ BC }{ AB } \\cr \\sin \\theta &= \\dfrac{ BC }{ 2r } \\cr BC &= 2r \\sin \\theta \\cr \\end{aligned}<br>Square both sides of this equation to get the required proof:<br>\\begin{aligned} BC^2 &= ( 2r \\sin \\theta )^2 \\cr BC^2 &= 4r^2 \\sin^2 \\theta \\cr \\end{aligned}",
        "<strong>Step 3: Apply the condition in part (b) and simplify</strong><br>We are given that $BC = r$. Substitute this into the formula from part (a):<br>\\begin{aligned} ( r )^2 &= 4r^2 \\sin^2 \\theta \\cr r^2 &= 4r^2 \\sin^2 \\theta \\cr \\end{aligned}",
        "<strong>Step 4: Solve for the exact angle $\\theta$</strong><br>Since $r \\neq 0$, we can divide both sides of the equation by $r^2$:<br>\\begin{aligned} 1 &= 4 \\sin^2 \\theta \\cr \\sin^2 \\theta &= \\dfrac{ 1 }{ 4 } \\cr \\sin \\theta &= \\dfrac{ 1 }{ 2 } \\cr \\end{aligned}<br>Since $\\theta$ is an acute angle in the triangle, we solve to find the principal angle:<br>$$\\theta = 30^\\circ$$"
    ],
    "pi_options": [
        {
            "ans": "$$\\theta = 60^\\circ$$",
            "feedback": "You may have misidentified the ratio $\\sin \\theta = \\dfrac{1}{2}$ as $\\theta = 60^\\circ$ instead of $30^\\circ$. Remember that $\\sin 30^\\circ = 0.5$ and $\\cos 60^\\circ = 0.5$."
        },
        {
            "ans": "$$\\theta = 45^\\circ$$",
            "feedback": "You may have assumed the triangle is an isosceles right-angled triangle. However, the side $BC = r$ is exactly half of the hypotenuse $AB = 2r$, which defines a $30^\\circ$-$60^\\circ$-$90^\\circ$ triangle."
        },
        {
            "ans": "$$\\theta = 14.5^\\circ$$",
            "feedback": "You may have made an error when dividing, solving $\\sin^2 \\theta = 4 \\implies \\sin \\theta = 2$, or made an incorrect inverse trigonometric calculation on your calculator."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Semicircle Right Angles",
        "content": "Always remember the theorem: 'The angle in a semicircle is a right angle.' Whenever you see a triangle drawn inside a circle where one side is the diameter, you can instantly assume the opposite vertex has a $90^\\circ$ angle. This simple realization is the key to setting up trigonometric equations for semicircle problems."
    }
},
{
    "id": "004431",
    "board": "Pearson Edexcel",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "Composite Functions",
        "Inverse Functions",
        "Domain and Range"
    ],
    "img": false,
    "question": "The function $g$ is defined by:<br>$$g(x) = \\dfrac{ 3x + 1 }{ x - 1 }, \\quad x \\ge 3$$<br><br><strong>(a)</strong> Find $gg(3)$. [2]<br><br><strong>(b)</strong> State the range of $g$. [1]<br><br><strong>(c)</strong> Find $g^{-1}(x)$, stating its domain. [3]",
    "steps": [
        "<strong>Step 1: Evaluate the inner function for part (a)</strong><br>To evaluate the composite function $gg(3)$, first substitute $x = 3$ directly into the definition of $g(x)$:<br>\\begin{aligned} g( 3 ) &= \\dfrac{ 3( 3 ) + 1 }{ 3 - 1 } \\cr &= \\dfrac{ 10 }{ 2 } \\cr &= 5 \\cr \\end{aligned}",
        "<strong>Step 2: Evaluate the outer function to find $gg(3)$</strong><br>Now, substitute your result $5$ back into the function $g(x)$:<br>\\begin{aligned} gg( 3 ) &= g( 5 ) \\cr &= \\dfrac{ 3( 5 ) + 1 }{ 5 - 1 } \\cr &= \\dfrac{ 16 }{ 4 } \\cr &= 4 \\cr \\end{aligned}",
        "<strong>Step 3: Analyze the behavior of the function for part (b)</strong><br>As $x \\to \\infty$, the rational function $g(x) = \\dfrac{ 3x + 1 }{ x - 1 }$ approaches its horizontal asymptote:<br>\\begin{aligned} y \\to \\dfrac{ 3 }{ 1 } = 3 \\cr \\end{aligned}<br>Since the function is strictly decreasing for $x \\ge 3$, its maximum value occurs at the starting boundary $x = 3$, where $g( 3 ) = 5$. Therefore, the range of outputs is restricted to:<br>$$3 < g(x) \\le 5$$",
        "<strong>Step 4: Set up the inverse function equation for part (c)</strong><br>Let $y = g(x)$ and rearrange the equation to make $x$ the subject:<br>\\begin{aligned} y &= \\dfrac{ 3x + 1 }{ x - 1 } \\cr y( x - 1 ) &= 3x + 1 \\cr yx - y &= 3x + 1 \\cr \\end{aligned}",
        "<strong>Step 5: Isolate and solve for $x$</strong><br>Group all terms containing $x$ on one side and factorise:<br>\\begin{aligned} yx - 3x &= y + 1 \\cr x( y - 3 ) &= y + 1 \\cr x &= \\dfrac{ y + 1 }{ y - 3 } \\cr \\end{aligned}<br>Replacing $y$ with $x$ yields:<br>$$g^{-1}(x) = \\dfrac{ x + 1 }{ x - 3 }$$",
        "<strong>Step 6: State the domain of the inverse function</strong><br>The domain of the inverse function $g^{-1}(x)$ is identical to the range of the original function $g(x)$ calculated in Step 3:<br>$$\\text{Domain: } 3 < x \\le 5$$"
    ],
    "pi_options": [
        {
            "ans": "$$g^{-1}(x) = \\dfrac{ x + 1 }{ x - 3 }, \\quad \\text{Domain: } x \\ge 3$$",
            "feedback": "You may have made the common mistake of assuming the domain of $g^{-1}(x)$ is the same as the domain of $g(x)$. Remember that the domain of an inverse function is strictly equal to the range of the original function, which is bounded by the restricted domain."
        },
        {
            "ans": "$$g^{-1}(x) = \\dfrac{ x + 1 }{ x - 3 }, \\quad \\text{Domain: } x \\neq 3$$",
            "feedback": "You may have found the domain of the inverse function by looking only at its algebraic expression, which suggests $x$ cannot be 3. However, because the original function has a restricted domain $x \\ge 3$, the range of $g(x)$ is restricted to $3 < y \\le 5$. Thus, the domain of $g^{-1}(x)$ must be restricted to $3 < x \\le 5$."
        },
        {
            "ans": "$$g^{-1}(x) = \\dfrac{ x + 1 }{ x - 3 }, \\quad \\text{Domain: } 3 \\le x \\le 5$$",
            "feedback": "You may have used a weak inequality ($\\le$) for the lower bound of the domain. Because $y = 3$ is a horizontal asymptote that the curve approaches but never reaches as $x \\to \\infty$, the lower bound of the range is strictly greater than 3 ($x > 3$)."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Mapping Domains and Ranges",
        "content": "Always remember the golden rule of inverse functions: the domain of $g^{-1}(x)$ is exactly equal to the range of $g(x)$, and the range of $g^{-1}(x)$ is exactly equal to the domain of $g(x)$. Never attempt to find the domain of an inverse function simply by looking at its algebraic expression; you must evaluate the output boundaries of your original function."
    }
},
{
    "id": "004432",
    "board": "Pearson Edexcel",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "Composite Functions",
        "Inverse Functions",
        "Domain and Range"
    ],
    "img": false,
    "question": "The function $h$ is defined by:<br>$$h(x) = \\dfrac{ 4x + 2 }{ x - 2 }, \\quad x \\ge 3$$<br><br><strong>(a)</strong> Find $hh(3)$. [2]<br><br><strong>(b)</strong> State the range of $h$. [1]<br><br><strong>(c)</strong> Find $h^{-1}(x)$, stating its domain. [3]",
    "steps": [
        "<strong>Step 1: Evaluate the inner function for part (a)</strong><br>To find the composite function value $hh(3)$, first substitute $x = 3$ into the function $h(x)$:<br>\\begin{aligned} h( 3 ) &= \\dfrac{ 4( 3 ) + 2 }{ 3 - 2 } \\cr &= \\dfrac{ 14 }{ 1 } \\cr &= 14 \\cr \\end{aligned}",
        "<strong>Step 2: Evaluate the outer function to find $hh(3)$</strong><br>Now, substitute $14$ back into the function $h(x)$:<br>\\begin{aligned} hh( 3 ) &= h( 14 ) \\cr &= \\dfrac{ 4( 14 ) + 2 }{ 14 - 2 } \\cr &= \\dfrac{ 58 }{ 12 } \\cr &= \\dfrac{ 29 }{ 6 } \\cr \\end{aligned}",
        "<strong>Step 3: Determine the range of $h$ for part (b)</strong><br>As $x \\to \\infty$, the rational function $h(x) = \\dfrac{ 4x + 2 }{ x - 2 }$ approaches its horizontal asymptote:<br>\\begin{aligned} y \\to \\dfrac{ 4 }{ 1 } = 4 \\cr \\end{aligned}<br>Since the function is continuous and decreasing for $x \\ge 3$, its maximum value occurs at the boundary $x = 3$, where $h( 3 ) = 14$. Thus, the range of $h$ is restricted to:<br>$$4 < h(x) \\le 14$$",
        "<strong>Step 4: Set up the inverse function equation for part (c)</strong><br>Let $y = h(x)$ and rearrange the expression to make $x$ the subject:<br>\\begin{aligned} y &= \\dfrac{ 4x + 2 }{ x - 2 } \\cr y( x - 2 ) &= 4x + 2 \\cr yx - 2y &= 4x + 2 \\cr \\end{aligned}",
        "<strong>Step 5: Isolate and solve for $x$</strong><br>Move all terms containing $x$ to one side and factorise:<br>\\begin{aligned} yx - 4x &= 2y + 2 \\cr x( y - 4 ) &= 2( y + 1 ) \\cr x &= \\dfrac{ 2y + 2 }{ y - 4 } \\cr \\end{aligned}<br>Replacing $y$ with $x$ gives:<br>$$h^{-1}(x) = \\dfrac{ 2x + 2 }{ x - 4 }$$",
        "<strong>Step 6: State the domain of the inverse function</strong><br>The domain of $h^{-1}(x)$ is equal to the range of the original function $h(x)$ calculated in Step 3:<br>$$\\text{Domain: } 4 < x \\le 14$$"
    ],
    "pi_options": [
        {
            "ans": "$$h^{-1}(x) = \\dfrac{ 2x + 2 }{ x - 4 }, \\quad \\text{Domain: } x \\ge 3$$",
            "feedback": "You may have incorrectly written the original domain of $h(x)$ as the domain for $h^{-1}(x)$. The domain of an inverse function must always equal the range of the original function, which is bounded by the restricted domain."
        },
        {
            "ans": "$$h^{-1}(x) = \\dfrac{ 2x + 2 }{ x - 4 }, \\quad \\text{Domain: } x \\neq 4$$",
            "feedback": "You may have found the domain of the inverse function by looking only at its algebraic expression, which suggests $x$ cannot be 4. However, because the original function has a restricted domain $x \\ge 3$, the range of $h(x)$ is restricted to $4 < y \\le 14$. Thus, the domain of $h^{-1}(x)$ must be restricted to $4 < x \\le 14$."
        },
        {
            "ans": "$$h^{-1}(x) = \\dfrac{ 2x + 2 }{ x - 4 }, \\quad \\text{Domain: } 4 \\le x \\le 14$$",
            "feedback": "You may have used a non-strict inequality for the lower boundary. Because $y = 4$ is a horizontal asymptote that the graph approaches but never touches as $x \\to \\infty$, the lower bound of the range is strictly greater than 4 ($x > 4$)."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Finding Horizontal Asymptotes",
        "content": "For a rational function of the form $y = \\dfrac{ax + b}{cx + d}$, the horizontal asymptote as $x \\to \\infty$ is always given by the ratio of the leading coefficients, $y = \\dfrac{a}{c}$. Recognizing this allows you to instantly determine the lower limit (or upper limit) of your range without needing to sketch a complex graph."
    }
},
{
    "id": "004433",
    "board": "Pearson Edexcel",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "Composite Functions",
        "Inverse Functions",
        "Logarithmic and Exponential Functions"
    ],
    "img": false,
    "question": "The functions $f$ and $g$ are defined by:<br>$$\\begin{aligned} f(x) &= \\ln( x - 2 ), \\quad x > 3 \\cr g(x) &= \\mathrm{e}^{2x} + 2, \\quad x \\in \\mathbb{R} \\end{aligned}$$<br><br><strong>(a)</strong> Find an expression for the composite function $fg(x)$, writing your answer in its simplest form. [2]<br><br><strong>(b)</strong> State the range of $f$. [1]<br><br><strong>(c)</strong> Find $f^{-1}(x)$, stating its domain. [3]",
    "steps": [
        "<strong>Step 1: Set up the composite function for part (a)</strong><br>To find the composite function $fg(x)$, substitute the entire expression of $g(x)$ as the input inside $f(x)$:<br>\\begin{aligned} fg(x) &= f( g(x) ) \\cr &= \\ln( ( \\mathrm{e}^{2x} + 2 ) - 2 ) \\cr \\end{aligned}",
        "<strong>Step 2: Simplify the composite expression</strong><br>Simplify the terms inside the natural logarithm:<br>\\begin{aligned} fg(x) &= \\ln( \\mathrm{e}^{2x} ) \\cr &= 2x \\cr \\end{aligned}",
        "<strong>Step 3: Determine the range of $f$ for part (b)</strong><br>Since the domain of $f(x) = \\ln( x - 2 )$ is $x > 3$, evaluate the boundary value:<br>\\begin{aligned} f( 3 ) &= \\ln( 3 - 2 ) \\cr &= \\ln( 1 ) \\cr &= 0 \\cr \\end{aligned}<br>Since $\\ln( x - 2 )$ is a strictly increasing function, for all $x > 3$, $f(x)$ will be greater than $0$. Thus, the range of $f$ is:<br>$$f(x) > 0$$",
        "<strong>Step 4: Set up the inverse function equation for part (c)</strong><br>Let $y = f(x)$ and rearrange the logarithmic equation to solve for $x$:<br>\\begin{aligned} y &= \\ln( x - 2 ) \\cr \\mathrm{e}^y &= x - 2 \\cr \\end{aligned}",
        "<strong>Step 5: Solve for $x$ to find the inverse</strong><br>Isolate $x$ on one side:<br>\\begin{aligned} x &= \\mathrm{e}^y + 2 \\cr \\end{aligned}<br>Replacing $y$ with $x$ gives:<br>$$f^{-1}(x) = \\mathrm{e}^x + 2$$",
        "<strong>Step 6: State the domain of the inverse function</strong><br>The domain of $f^{-1}(x)$ is equal to the range of the original function $f(x)$ calculated in Step 3:<br>$$\\text{Domain: } x > 0$$"
    ],
    "pi_options": [
        {
            "ans": "$$f^{-1}(x) = \\mathrm{e}^x + 2, \\quad \\text{Domain: } x > 3$$",
            "feedback": "You may have incorrectly written the original domain of $f(x)$ as the domain of $f^{-1}(x)$. Remember that the domain of $f^{-1}(x)$ must equal the range of $f(x)$, which is $x > 0$."
        },
        {
            "ans": "$$f^{-1}(x) = \\mathrm{e}^{x + 2}, \\quad \\text{Domain: } x > 0$$",
            "feedback": "You may have made an algebraic error when eliminating the natural logarithm, incorrectly writing $\\mathrm{e}^y = x - 2 \\implies \\mathrm{e}^{y+2} = x$. Make sure you add 2 outside of the exponential power."
        },
        {
            "ans": "$$f^{-1}(x) = \\mathrm{e}^x - 2, \\quad \\text{Domain: } x > 0$$",
            "feedback": "You may have made a sign error when isolating $x$, writing $\\mathrm{e}^y = x - 2 \\implies x = \\mathrm{e}^y - 2$. Check your sign transposition."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Exponential and Logarithmic Inverses",
        "content": "Since logarithmic and exponential functions are inverses of each other, applying $\\mathrm{e}$ to both sides of an equation is the standard way to clear a natural logarithm $\\ln$. Always make sure to isolate the $\\ln$ term entirely before raising both sides to the power of $\\mathrm{e}$."
    }
},
{
    "id": "004434",
    "board": "Pearson Edexcel",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "Composite Functions",
        "Inverse Functions",
        "Quadratic Functions"
    ],
    "img": false,
    "question": "The function $f$ is defined by:<br>$$f(x) = x^2 - 4x + 9, \\quad x \\ge 2$$<br><br><strong>(a)</strong> Find $ff(3)$. [2]<br><br><strong>(b)</strong> State the range of $f$. [1]<br><br><strong>(c)</strong> Find $f^{-1}(x)$, stating its domain. [3]",
    "steps": [
        "<strong>Step 1: Evaluate the inner function for part (a)</strong><br>To find the composite function value $ff(3)$, first evaluate the function at $x = 3$:<br>\\begin{aligned} f( 3 ) &= ( 3 )^2 - 4( 3 ) + 9 \\cr &= 9 - 12 + 9 \\cr &= 6 \\cr \\end{aligned}",
        "<strong>Step 2: Evaluate the outer function to find $ff(3)$</strong><br>Now, substitute your result $6$ back into the function $f(x)$:<br>\\begin{aligned} ff( 3 ) &= f( 6 ) \\cr &= ( 6 )^2 - 4( 6 ) + 9 \\cr &= 36 - 24 + 9 \\cr &= 21 \\cr \\end{aligned}",
        "<strong>Step 3: Determine the range of $f$ for part (b)</strong><br>To find the range of the quadratic function $f(x) = x^2 - 4x + 9$, complete the square to locate its vertex:<br>\\begin{aligned} f(x) &= ( x - 2 )^2 - 4 + 9 \\cr &= ( x - 2 )^2 + 5 \\cr \\end{aligned}<br>Since $x \\ge 2$, the term $( x - 2 )^2 \\ge 0$, meaning the minimum value of $f(x)$ is $5$. The range of $f$ is:<br>$$f(x) \\ge 5$$",
        "<strong>Step 4: Set up the inverse function equation for part (c)</strong><br>Let $y = f(x)$ and use the completed square form to rearrange for $x$:<br>\\begin{aligned} y &= ( x - 2 )^2 + 5 \\cr y - 5 &= ( x - 2 )^2 \\cr \\end{aligned}",
        "<strong>Step 5: Solve for $x$ to find the inverse</strong><br>Take the square root of both sides. Since our domain is restricted to $x \\ge 2$, we take the positive square root:<br>\\begin{aligned} x - 2 &= \\sqrt{ y - 5 } \\cr x &= 2 + \\sqrt{ y - 5 } \\cr \\end{aligned}<br>Replacing $y$ with $x$ yields:<br>$$f^{-1}(x) = 2 + \\sqrt{ x - 5 }$$",
        "<strong>Step 6: State the domain of the inverse function</strong><br>The domain of $f^{-1}(x)$ is equal to the range of the original function $f(x)$ calculated in Step 3:<br>$$\\text{Domain: } x \\ge 5$$"
    ],
    "pi_options": [
        {
            "ans": "$$f^{-1}(x) = 2 + \\sqrt{ x - 5 }, \\quad \\text{Domain: } x \\ge 2$$",
            "feedback": "You may have incorrectly stated the original domain of $f(x)$ as the domain of $f^{-1}(x)$. Always remember that the domain of $f^{-1}(x)$ must equal the range of $f(x)$."
        },
        {
            "ans": "$$f^{-1}(x) = 2 - \\sqrt{ x - 5 }, \\quad \\text{Domain: } x \\ge 5$$",
            "feedback": "You may have taken the negative square root in Step 5. Because the original domain is $x \\ge 2$, $x - 2$ must be non-negative, so you must select the positive square root."
        },
        {
            "ans": "$$f^{-1}(x) = 2 + \\sqrt{ x + 5 }, \\quad \\text{Domain: } x \\ge 5$$",
            "feedback": "You may have made a sign error when rearranging $y = (x-2)^2 + 5$, writing $y + 5 = (x-2)^2$ instead of $y - 5$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Completing the Square for Inverses",
        "content": "To find the inverse of a quadratic function, you cannot easily rearrange $y = ax^2 + bx + c$ directly. You must first complete the square to write it in the form $y = a( x - h )^2 + k$. This allows you to isolate the squared bracket and cleanly take the square root."
    }
},
{
    "id": "004435",
    "board": "Pearson Edexcel",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "Composite Functions",
        "Inverse Functions",
        "Radical Functions"
    ],
    "img": false,
    "question": "The function $g$ is defined by:<br>$$g(x) = 1 + \\sqrt{ x - 3 }, \\quad x \\ge 3$$<br><br><strong>(a)</strong> Find $gg(7)$. [2]<br><br><strong>(b)</strong> State the range of $g$. [1]<br><br><strong>(c)</strong> Find $g^{-1}(x)$, stating its domain. [3]",
    "steps": [
        "<strong>Step 1: Evaluate the inner function for part (a)</strong><br>To evaluate the composite function $gg(7)$, first find the value of $g( 7 )$ by substituting $x = 7$:<br>\\begin{aligned} g( 7 ) &= 1 + \\sqrt{ 7 - 3 } \\cr &= 1 + \\sqrt{ 4 } \\cr &= 1 + 2 \\cr &= 3 \\cr \\end{aligned}",
        "<strong>Step 2: Evaluate the outer function to find $gg(7)$</strong><br>Now substitute $3$ back into the function $g(x)$:<br>\\begin{aligned} gg( 7 ) &= g( 3 ) \\cr &= 1 + \\sqrt{ 3 - 3 } \\cr &= 1 + 0 \\cr &= 1 \\cr \\end{aligned}",
        "<strong>Step 3: Determine the range of $g$ for part (b)</strong><br>For $x \\ge 3$, the square root term $\\sqrt{ x - 3 }$ is always non-negative ($\\ge 0$). Thus, the minimum value of $g(x)$ occurs when $\\sqrt{ x - 3 } = 0$, which yields $g( 3 ) = 1$. The range of $g$ is:<br>$$g(x) \\ge 1$$",
        "<strong>Step 4: Set up the inverse function equation for part (c)</strong><br>Let $y = g(x)$ and rearrange the radical equation to solve for $x$:<br>\\begin{aligned} y &= 1 + \\sqrt{ x - 3 } \\cr y - 1 &= \\sqrt{ x - 3 } \\cr \\end{aligned}",
        "<strong>Step 5: Square both sides and isolate $x$</strong><br>Square both sides of the equation to eliminate the radical:<br>\\begin{aligned} ( y - 1 )^2 &= x - 3 \\cr x &= ( y - 1 )^2 + 3 \\cr \\end{aligned}<br>Replacing $y$ with $x$ yields:<br>$$g^{-1}(x) = ( x - 1 )^2 + 3$$",
        "<strong>Step 6: State the domain of the inverse function</strong><br>The domain of $g^{-1}(x)$ is equal to the range of the original function $g(x)$ calculated in Step 3:<br>$$\\text{Domain: } x \\ge 1$$"
    ],
    "pi_options": [
        {
            "ans": "$$g^{-1}(x) = ( x - 1 )^2 + 3, \\quad \\text{Domain: } x \\ge 3$$",
            "feedback": "You may have incorrectly written the original domain of $g(x)$ as the domain of $g^{-1}(x)$. Always remember that the domain of $g^{-1}(x)$ must equal the range of $g(x)$."
        },
        {
            "ans": "$$g^{-1}(x) = ( x + 1 )^2 + 3, \\quad \\text{Domain: } x \\ge 1$$",
            "feedback": "You may have made a sign error when subtracting 1 from both sides in Step 4, writing $y + 1 = \\sqrt{x-3}$ instead of $y - 1$."
        },
        {
            "ans": "$$g^{-1}(x) = ( x - 1 )^2 - 3, \\quad \\text{Domain: } x \\ge 1$$",
            "feedback": "You may have made a sign error when rearranging $(y-1)^2 = x - 3$, writing $x = (y-1)^2 - 3$ instead of adding 3 to both sides."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Restricting Quadratic Inverses",
        "content": "A quadratic function is normally many-to-one, meaning it does not have a unique inverse. However, the inverse $g^{-1}(x) = ( x - 1 )^2 + 3$ is valid here because its domain is strictly restricted to $x \\ge 1$. This restriction ensures that the inverse corresponds exactly to the one-to-one radical branch of our original function."
    }
},
{
    "id": "004436",
    "board": "Pearson Edexcel",
    "level": "A",
    "major_area": "Vectors",
    "topic": "3D Vectors",
    "subtopic": [
        "Position Vectors",
        "Vector Magnitude"
    ],
    "img": false,
    "question": "Relative to a fixed origin $O$, the point $A$ has position vector $(3\\mathbf{ i } + \\mathbf{ j } - 2\\mathbf{ k })$, the point $B$ has position vector $(5\\mathbf{ i } - \\mathbf{ j } + 4\\mathbf{ k })$, and the point $C$ has position vector $(p\\mathbf{ i } + 4\\mathbf{ j } - \\mathbf{ k })$, where $p$ is a constant and $p < 0$. $D$ is the point such that $\\vec{ AB } = \\vec{ BD }$.<br><br><strong>(a)</strong> Find the position vector of $D$. [2]<br><br><strong>(b)</strong> Given that $|\\vec{ AC }| = 5$, find the value of $p$. [3]",
    "steps": [
        "<strong>Step 1: Calculate the displacement vector $\\vec{ AB }$ for part (a)</strong><br>Subtract the position vector of $A$ from the position vector of $B$:<br>\\begin{aligned} \\vec{ AB } &= \\mathbf{b} - \\mathbf{a} \\cr &= ( 5\\mathbf{ i } - \\mathbf{ j } + 4\\mathbf{ k } ) - ( 3\\mathbf{ i } + \\mathbf{ j } - 2\\mathbf{ k } ) \\cr &= ( 5 - 3 )\\mathbf{ i } + ( -1 - 1 )\\mathbf{ j } + ( 4 - ( -2 ) )\\mathbf{ k } \\cr &= 2\\mathbf{ i } - 2\\mathbf{ j } + 6\\mathbf{ k } \\cr \\end{aligned}",
        "<strong>Step 2: Solve for the position vector of $D$</strong><br>Since $\\vec{ AB } = \\vec{ BD }$, the point $B$ is the midpoint of the line segment $AD$. We can find the position vector of $D$ by adding $\\vec{ AB }$ to the position vector of $B$:<br>\\begin{aligned} \\mathbf{d} &= \\mathbf{b} + \\vec{ BD } \\cr &= \\mathbf{b} + \\vec{ AB } \\cr &= ( 5\\mathbf{ i } - \\mathbf{ j } + 4\\mathbf{ k } ) + ( 2\\mathbf{ i } - 2\\mathbf{ j } + 6\\mathbf{ k } ) \\cr &= 7\\mathbf{ i } - 3\\mathbf{ j } + 10\\mathbf{ k } \\cr \\end{aligned}",
        "<strong>Step 3: Express the displacement vector $\\vec{ AC }$ for part (b)</strong><br>Subtract the position vector of $A$ from the position vector of $C$:<br>\\begin{aligned} \\vec{ AC } &= \\mathbf{c} - \\mathbf{a} \\cr &= ( p\\mathbf{ i } + 4\\mathbf{ j } - \\mathbf{ k } ) - ( 3\\mathbf{ i } + \\mathbf{ j } - 2\\mathbf{ k } ) \\cr &= ( p - 3 )\\mathbf{ i } + ( 4 - 1 )\\mathbf{ j } + ( -1 - ( -2 ) )\\mathbf{ k } \\cr &= ( p - 3 )\\mathbf{ i } + 3\\mathbf{ j } + \\mathbf{ k } \\cr \\end{aligned}",
        "<strong>Step 4: Set up the magnitude equation</strong><br>The magnitude of a vector $\\mathbf{v} = x\\mathbf{ i } + y\\mathbf{ j } + z\\mathbf{ k }$ is $|\\mathbf{v}| = \\sqrt{ x^2 + y^2 + z^2 }$. Set the squared magnitude of $\\vec{ AC }$ equal to $5^2$:<br>\\begin{aligned} |\\vec{ AC }|^2 &= ( p - 3 )^2 + 3^2 + 1^2 \\cr 5^2 &= ( p - 3 )^2 + 9 + 1 \\cr 25 &= ( p - 3 )^2 + 10 \\cr \\end{aligned}",
        "<strong>Step 5: Solve the quadratic equation for $p$</strong><br>Isolate the squared term and solve:<br>\\begin{aligned} ( p - 3 )^2 &= 15 \\cr p - 3 &= \\pm \\sqrt{ 15 } \\cr p &= 3 \\pm \\sqrt{ 15 } \\cr \\end{aligned}<br>Since the question specifies that $p < 0$, we must discard the positive root, leaving us with:<br>$$p = 3 - \\sqrt{ 15 }$$"
    ],
    "pi_options": [
        {
            "ans": "$$\\mathbf{d} = 7\\mathbf{ i } - 3\\mathbf{ j } + 10\\mathbf{ k }, \\quad p = 3 + \\sqrt{ 15 }$$",
            "feedback": "You successfully solved the algebra for part (b), but you may have forgotten to check the initial constraint $p < 0$. Since $\\sqrt{15} \\approx 3.87$, the value $3 + \\sqrt{15}$ is positive, so you must discard it and keep only the negative root $3 - \\sqrt{15}$."
        },
        {
            "ans": "$$\\mathbf{d} = 7\\mathbf{ i } - 3\\mathbf{ j } + 10\\mathbf{ k }, \\quad p = 3 - \\sqrt{ 5 }$$",
            "feedback": "You may have made an arithmetic slip in Step 4 when squaring the components. Check that you calculated $3^2 + 1^2 = 9 + 1 = 10$, rather than mistakenly writing $3 + 1 = 4$ or subtracting terms incorrectly."
        },
        {
            "ans": "$$\\mathbf{d} = 2\\mathbf{ i } - 2\\mathbf{ j } + 6\\mathbf{ k }, \\quad p = 3 - \\sqrt{ 15 }$$",
            "feedback": "You may have written the displacement vector $\\vec{AB}$ as your final answer for the position vector of $D$. Remember to add $\\vec{AB}$ to the position vector of $B$ to find the absolute position vector of $D$ relative to the origin."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Displacement vs. Position Vectors",
        "content": "Always distinguish between a displacement vector (the vector path from one point to another, like $\\vec{ AB }$) and a position vector (the coordinates of a point relative to the origin, like $\\mathbf{ a }$ or $\\mathbf{ d }$). A very common exam slip is writing down $\\vec{ AB }$ as your final answer for point $D$ instead of adding it to the reference point $\\mathbf{ b }$."
    }
},
{
    "id": "004437",
    "board": "Pearson Edexcel",
    "level": "A",
    "major_area": "Vectors",
    "topic": "3D Vectors",
    "subtopic": [
        "Position Vectors",
        "Vector Magnitude"
    ],
    "img": false,
    "question": "Relative to a fixed origin $O$, the point $A$ has position vector $(\\mathbf{ i } + 4\\mathbf{ j } - 3\\mathbf{ k })$, the point $B$ has position vector $(3\\mathbf{ i } + \\mathbf{ j } + 2\\mathbf{ k })$, and the point $C$ has position vector $(5\\mathbf{ i } + q\\mathbf{ j } + \\mathbf{ k })$, where $q$ is a constant and $q > 0$. $D$ is the point such that $\\vec{ AD } = 3\\vec{ AB }$.<br><br><strong>(a)</strong> Find the position vector of $D$. [2]<br><br><strong>(b)</strong> Given that $|\\vec{ BC }| = \\sqrt{ 21 }$, find the value of $q$. [3]",
    "steps": [
        "<strong>Step 1: Calculate the displacement vector $\\vec{ AB }$ for part (a)</strong><br>Subtract the position vector of $A$ from the position vector of $B$:<br>\\begin{aligned} \\vec{ AB } &= \\mathbf{b} - \\mathbf{a} \\cr &= ( 3\\mathbf{ i } + \\mathbf{ j } + 2\\mathbf{ k } ) - ( \\mathbf{ i } + 4\\mathbf{ j } - 3\\mathbf{ k } ) \\cr &= ( 3 - 1 )\\mathbf{ i } + ( 1 - 4 )\\mathbf{ j } + ( 2 - ( -3 ) )\\mathbf{ k } \\cr &= 2\\mathbf{ i } - 3\\mathbf{ j } + 5\\mathbf{ k } \\cr \\end{aligned}",
        "<strong>Step 2: Find the position vector of $D$</strong><br>Multiply $\\vec{ AB }$ by $3$ to find the displacement vector $\\vec{ AD }$:<br>\\begin{aligned} \\vec{ AD } &= 3\\vec{ AB } \\cr &= 3( 2\\mathbf{ i } - 3\\mathbf{ j } + 5\\mathbf{ k } ) \\cr &= 6\\mathbf{ i } - 9\\mathbf{ j } + 15\\mathbf{ k } \\cr \\end{aligned}<br>Now, add $\\vec{ AD }$ to the position vector of $A$ to obtain the position vector of $D$:<br>\\begin{aligned} \\mathbf{d} &= \\mathbf{a} + \\vec{ AD } \\cr &= ( \\mathbf{ i } + 4\\mathbf{ j } - 3\\mathbf{ k } ) + ( 6\\mathbf{ i } - 9\\mathbf{ j } + 15\\mathbf{ k } ) \\cr &= 7\\mathbf{ i } - 5\\mathbf{ j } + 12\\mathbf{ k } \\cr \\end{aligned}",
        "<strong>Step 3: Express the displacement vector $\\vec{ BC }$ for part (b)</strong><br>Subtract the position vector of $B$ from the position vector of $C$:<br>\\begin{aligned} \\vec{ BC } &= \\mathbf{c} - \\mathbf{b} \\cr &= ( 5\\mathbf{ i } + q\\mathbf{ j } + \\mathbf{ k } ) - ( 3\\mathbf{ i } + \\mathbf{ j } + 2\\mathbf{ k } ) \\cr &= ( 5 - 3 )\\mathbf{ i } + ( q - 1 )\\mathbf{ j } + ( 1 - 2 )\\mathbf{ k } \\cr &= 2\\mathbf{ i } + ( q - 1 )\\mathbf{ j } - \\mathbf{ k } \\cr \\end{aligned}",
        "<strong>Step 4: Set up the magnitude equation</strong><br>Use the 3D magnitude formula and square both sides to remove the square root, setting $|\\vec{ BC }|^2 = ( \\sqrt{ 21 } )^2$:<br>\\begin{aligned} |\\vec{ BC }|^2 &= 2^2 + ( q - 1 )^2 + ( -1 )^2 \\cr 21 &= 4 + ( q - 1 )^2 + 1 \\cr 21 &= ( q - 1 )^2 + 5 \\cr \\end{aligned}",
        "<strong>Step 5: Solve the quadratic equation for $q$</strong><br>Isolate the squared term and solve for $q$:<br>\\begin{aligned} ( q - 1 )^2 &= 16 \\cr q - 1 &= \\pm 4 \\cr q &= 1 \\pm 4 \\cr \\end{aligned}<br>This yields two potential values: $q = 5$ or $q = -3$. Since the question specifies that $q > 0$, we discard $q = -3$ to get:<br>$$q = 5$$"
    ],
    "pi_options": [
        {
            "ans": "$$\\mathbf{d} = 7\\mathbf{ i } - 5\\mathbf{ j } + 12\\mathbf{ k }, \\quad q = 5 \\text{ or } q = -3$$",
            "feedback": "You successfully solved the quadratic equation, but you may have forgotten to apply the boundary constraint $q > 0$. Since $q$ must be strictly positive, you must discard the negative root $q = -3$."
        },
        {
            "ans": "$$\\mathbf{d} = 6\\mathbf{ i } - 9\\mathbf{ j } + 15\\mathbf{ k }, \\quad q = 5$$",
            "feedback": "You may have written down the displacement vector $\\vec{AD}$ as your final answer for the position vector of $D$. Remember to add $\\vec{AD}$ to the position vector of $A$ to find the absolute position vector relative to the origin."
        },
        {
            "ans": "$$\\mathbf{d} = 7\\mathbf{ i } - 5\\mathbf{ j } + 12\\mathbf{ k }, \\quad q = 1 + \\sqrt{ 17 }$$",
            "feedback": "You may have made an arithmetic slip in Step 4 when squaring the components of $\\vec{BC}$. Check that you calculated $2^2 + ( -1 )^2 = 4 + 1 = 5$, rather than writing $2 + 1 = 3$ or another value."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Tracking Scaling Reference Points",
        "content": "When a vector scaling relation is defined as $\\vec{ AD } = 3\\vec{ AB }$, always remember that the starting point of the path is $A$. Therefore, the position vector of $D$ must be found relative to $A$, which means $\\mathbf{ d } = \\mathbf{ a } + 3\\vec{ AB }$. Adding the scaled vector to $\\mathbf{ b }$ instead of $\\mathbf{ a }$ is a very common source of lost marks."
    }
},
{
    "id": "004438",
    "board": "Pearson Edexcel",
    "level": "A",
    "major_area": "Vectors",
    "topic": "3D Vectors",
    "subtopic": [
        "Displacement Vectors",
        "Perpendicular Vectors"
    ],
    "img": false,
    "question": "Relative to a fixed origin $O$, the points $A$ and $B$ have position vectors:<br>$$\\begin{aligned} \\mathbf{a} &= 4\\mathbf{ i } - 2\\mathbf{ j } + \\lambda\\mathbf{ k } \\cr \\mathbf{b} &= 2\\mathbf{ i } + 3\\mathbf{ j } - \\mathbf{ k } \\end{aligned}$$<br>where $\\lambda$ is a constant.<br><br><strong>(a)</strong> Find the vector $\\vec{ AB }$ in terms of $\\lambda$. [2]<br><br><strong>(b)</strong> Given that the vector $\\vec{ AB }$ is perpendicular to the vector $\\mathbf{u} = 2\\mathbf{ i } + 2\\mathbf{ j } + 3\\mathbf{ k }$, find the value of $\\lambda$. [3]",
    "steps": [
        "<strong>Step 1: Calculate the displacement vector $\\vec{ AB }$ in terms of $\\lambda$</strong><br>Subtract the position vector of $A$ from the position vector of $B$:<br>\\begin{aligned} \\vec{ AB } &= \\mathbf{b} - \\mathbf{a} \\cr &= ( 2\\mathbf{ i } + 3\\mathbf{ j } - \\mathbf{ k } ) - ( 4\\mathbf{ i } - 2\\mathbf{ j } + \\lambda\\mathbf{ k } ) \\cr &= ( 2 - 4 )\\mathbf{ i } + ( 3 - ( -2 ) )\\mathbf{ j } + ( -1 - \\lambda )\\mathbf{ k } \\cr &= -2\\mathbf{ i } + 5\\mathbf{ j } - ( 1 + \\lambda )\\mathbf{ k } \\cr \\end{aligned}",
        "<strong>Step 2: Understand the condition for perpendicular vectors</strong><br>Two vectors are perpendicular if and only if their scalar (dot) product is exactly equal to zero:<br>$$\\vec{ AB } \\cdot \\mathbf{u} = 0$$",
        "<strong>Step 3: Calculate the dot product</strong><br>Multiply the corresponding components of $\\vec{ AB }$ and $\\mathbf{u}$ and add them together:<br>\\begin{aligned} \\vec{ AB } \\cdot \\mathbf{u} &= ( -2 )( 2 ) + ( 5 )( 2 ) + ( -( 1 + \\lambda ) )( 3 ) \\cr &= -4 + 10 - 3( 1 + \\lambda ) \\cr &= 6 - 3 - 3\\lambda \\cr &= 3 - 3\\lambda \\cr \\end{aligned}",
        "<strong>Step 4: Solve for $\\lambda$</strong><br>Set the scalar product equal to zero and solve the linear equation:<br>\\begin{aligned} 3 - 3\\lambda &= 0 \\cr 3\\lambda &= 3 \\cr \\lambda &= 1 \\cr \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$\\vec{ AB } = -2\\mathbf{ i } + 5\\mathbf{ j } - ( 1 + \\lambda )\\mathbf{ k }, \\quad \\lambda = -1$$",
            "feedback": "You may have made a sign error when solving the equation $3 - 3\\lambda = 0$ in Step 4, leading to the incorrect root of $\\lambda = -1$."
        },
        {
            "ans": "$$\\vec{ AB } = -2\\mathbf{ i } + 5\\mathbf{ j } - ( 1 + \\lambda )\\mathbf{ k }, \\quad \\lambda = 3$$",
            "feedback": "You may have made an algebraic slip when expanding $-3(1 + \\lambda)$ in Step 3, perhaps writing it as $-3 + 3\\lambda$, which leads to the incorrect linear equation $3 + 3\\lambda = 0$ or another slip."
        },
        {
            "ans": "$$\\vec{ AB } = 2\\mathbf{ i } - 5\\mathbf{ j } + ( 1 + \\lambda )\\mathbf{ k }, \\quad \\lambda = 1$$",
            "feedback": "You may have subtracted the vectors in the wrong order in part (a), calculating $\\mathbf{a} - \\mathbf{b}$ instead of $\\mathbf{b} - \\mathbf{a}$. Remember that the displacement vector from $A$ to $B$ is always $\\vec{ AB } = \\mathbf{b} - \\mathbf{a}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Perpendicular Dot Product",
        "content": "The scalar product (dot product) is the most standard tool for proving or utilizing perpendicularity in vector geometry. Always remember: $\\mathbf{ a } \\cdot \\mathbf{ b } = 0 \\iff \\mathbf{ a } \\perp \\mathbf{ b }$. Be extremely careful with signs when multiplying negative coordinates in the dot product summation."
    }
},
{
    "id": "004439",
    "board": "Pearson Edexcel",
    "level": "A",
    "major_area": "Vectors",
    "topic": "3D Vectors",
    "subtopic": [
        "Collinear Points",
        "Vector Ratio Division"
    ],
    "img": false,
    "question": "The points $A$, $B$, and $C$ have position vectors relative to a fixed origin $O$ given by:<br>$$\\begin{aligned} \\mathbf{a} &= 2\\mathbf{ i } - \\mathbf{ j } + 3\\mathbf{ k } \\cr \\mathbf{b} &= 5\\mathbf{ i } + 5\\mathbf{ j } - 3\\mathbf{ k } \\cr \\mathbf{c} &= \\mu\\mathbf{ i } + 13\\mathbf{ j } - 11\\mathbf{ k } \\end{aligned}$$<br>where $\\mu$ is a constant.<br><br><strong>(a)</strong> Given that the points $A$, $B$, and $C$ lie on a straight line, find the value of the constant $\\mu$. [4]<br><br><strong>(b)</strong> Find the ratio in which the point $B$ divides the line segment $AC$. [2]",
    "steps": [
        "<strong>Step 1: Calculate the displacement vectors $\\vec{ AB }$ and $\\vec{ AC }$ for part (a)</strong><br>Subtract the corresponding coordinates to find the vectors:<br>\\begin{aligned} \\vec{ AB } &= \\mathbf{b} - \\mathbf{a} \\cr &= ( 5 - 2 )\\mathbf{ i } + ( 5 - ( -1 ) )\\mathbf{ j } + ( -3 - 3 )\\mathbf{ k } \\cr &= 3\\mathbf{ i } + 6\\mathbf{ j } - 6\\mathbf{ k } \\cr \\end{aligned}<br>and:<br>\\begin{aligned} \\vec{ AC } &= \\mathbf{c} - \\mathbf{a} \\cr &= ( \\mu - 2 )\\mathbf{ i } + ( 13 - ( -1 ) )\\mathbf{ j } + ( -11 - 3 )\\mathbf{ k } \\cr &= ( \\mu - 2 )\\mathbf{ i } + 14\\mathbf{ j } - 14\\mathbf{ k } \\cr \\end{aligned}",
        "<strong>Step 2: Apply the condition for collinear points</strong><br>For points $A$, $B$, and $C$ to lie on a straight line (collinear), the displacement vectors $\\vec{ AB }$ and $\\vec{ AC }$ must be parallel. This means there exists a scalar constant $k$ such that:<br>$$\\vec{ AC } = k\\vec{ AB }$$",
        "<strong>Step 3: Solve for $k$ using the known components</strong><br>Compare the $\\mathbf{ j }$ and $\\mathbf{ k }$ components of the two vectors:<br>\\begin{aligned} 14 &= 6k \\implies k = \\dfrac{ 14 }{ 6 } = \\dfrac{ 7 }{ 3 } \\cr -14 &= -6k \\implies k = \\dfrac{ -14 }{ -6 } = \\dfrac{ 7 }{ 3 } \\cr \\end{aligned}<br>This shows consistency, confirming $k = \\dfrac{ 7 }{ 3 }$.",
        "<strong>Step 4: Solve for the constant $\\mu$</strong><br>Equate the $\\mathbf{ i }$ components using $k = \\dfrac{ 7 }{ 3 }$:<br>\\begin{aligned} \\mu - 2 &= 3k \\cr \\mu - 2 &= 3\\left( \\dfrac{ 7 }{ 3 } \\right) \\cr \\mu - 2 &= 7 \\cr \\mu &= 9 \\cr \\end{aligned}",
        "<strong>Step 5: Determine the ratio in part (b)</strong><br>From our calculations, we have established that $\\vec{ AC } = \\dfrac{ 7 }{ 3 }\\vec{ AB }$. This means:<br>\\begin{aligned} 3\\vec{ AC } &= 7\\vec{ AB } \\cr \\end{aligned}<br>The total segment length $AC$ is represented by $7$ units of length, while the segment $AB$ is represented by $3$ units. Therefore, the remaining segment $BC$ is:<br>\\begin{aligned} BC &= AC - AB \\cr &= 7 - 3 \\cr &= 4 \\text{ units} \\cr \\end{aligned}<br>Thus, the ratio in which $B$ divides $AC$ is:<br>$$AB : BC = 3 : 4$$"
    ],
    "pi_options": [
        {
            "ans": "$$\\mu = 9, \\quad \\text{Ratio } 3 : 7$$",
            "feedback": "You may have written the ratio of the segment $AB$ to the entire segment $AC$ ($3 : 7$). The question asks for the ratio in which the point $B$ *divides* the line segment $AC$, which refers to the ratio of the two separate parts, $AB : BC = 3 : 4$."
        },
        {
            "ans": "$$\\mu = 7, \\quad \\text{Ratio } 3 : 4$$",
            "feedback": "You may have made an algebraic slip in Step 4, equating $\\mu = 7$ directly without adding the 2 from the term $( \\mu - 2 )$ on the left-hand side."
        },
        {
            "ans": "$$\\mu = 9, \\quad \\text{Ratio } 4 : 3$$",
            "feedback": "You may have written the ratio backwards. Since $AB$ is shorter than $BC$ ($3$ units vs $4$ units), the ratio of division is $3 : 4$ (not $4 : 3$)."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Collinear Vectors",
        "content": "To prove that three points $A$, $B$, and $C$ are collinear, you must show two things: first, that two vectors formed by these points are parallel (i.e., $\\vec{ AC } = k\\vec{ AB }$); second, that they share a common point (such as $A$ or $B$). Simply showing parallel gradients is not enough, as parallel lines do not necessarily lie on the same straight line."
    }
},
{
    "id": "004440",
    "board": "Pearson Edexcel",
    "level": "A",
    "major_area": "Vectors",
    "topic": "3D Vectors",
    "subtopic": [
        "Vector Magnitude",
        "Geometric Triangles"
    ],
    "img": false,
    "question": "Relative to a fixed origin $O$, the points $A$, $B$, and $C$ have position vectors:<br>$$\\begin{aligned} \\mathbf{a} &= \\mathbf{i} + 2\\mathbf{j} \\cr \\mathbf{b} &= 3\\mathbf{i} + \\mathbf{j} + 3\\mathbf{k} \\cr \\mathbf{c} &= 2\\mathbf{i} + 5\\mathbf{j} + 2\\mathbf{k} \\end{aligned}$$<br><br><strong>(a)</strong> Show that the triangle $ABC$ is isosceles. [3]<br><br><strong>(b)</strong> Find the exact perimeter of triangle $ABC$, giving your answer in the form $a\\sqrt{ 14 } + b\\sqrt{ 2 }$, where $a$ and $b$ are integers. [2]",
    "steps": [
        "<strong>Step 1: Calculate the displacement vectors representing the sides of the triangle</strong><br>Find the vectors $\\vec{ AB }$, $\\vec{ AC }$, and $\\vec{ BC }$ by subtracting position vectors:<br>\\begin{aligned} \\vec{ AB } &= \\mathbf{b} - \\mathbf{a} \\cr &= ( 3 - 1 )\\mathbf{ i } + ( 1 - 2 )\\mathbf{ j } + ( 3 - 0 )\\mathbf{ k } \\cr &= 2\\mathbf{ i } - \\mathbf{ j } + 3\\mathbf{ k } \\cr \\end{aligned}<br>and:<br>\\begin{aligned} \\vec{ AC } &= \\mathbf{c} - \\mathbf{a} \\cr &= ( 2 - 1 )\\mathbf{ i } + ( 5 - 2 )\\mathbf{ j } + ( 2 - 0 )\\mathbf{ k } \\cr &= \\mathbf{ i } + 3\\mathbf{ j } + 2\\mathbf{ k } \\cr \\end{aligned}<br>and:<br>\\begin{aligned} \\vec{ BC } &= \\mathbf{c} - \\mathbf{b} \\cr &= ( 2 - 3 )\\mathbf{ i } + ( 5 - 1 )\\mathbf{ j } + ( 2 - 3 )\\mathbf{ k } \\cr &= -\\mathbf{ i } + 4\\mathbf{ j } - \\mathbf{ k } \\cr \\end{aligned}",
        "<strong>Step 2: Calculate the lengths of sides $AB$ and $AC$</strong><br>Using the 3D magnitude formula, find the side lengths of the triangle:<br>\\begin{aligned} |\\vec{ AB }| &= \\sqrt{ 2^2 + ( -1 )^2 + 3^2 } \\cr &= \\sqrt{ 4 + 1 + 9 } \\cr &= \\sqrt{ 14 } \\cr \\end{aligned}<br>and:<br>\\begin{aligned} |\\vec{ AC }| &= \\sqrt{ 1^2 + 3^2 + 2^2 } \\cr &= \\sqrt{ 1 + 9 + 4 } \\cr &= \\sqrt{ 14 } \\cr \\end{aligned}",
        "<strong>Step 3: Complete the proof for part (a)</strong><br>Since the side lengths $AB$ and $AC$ are exactly equal ($AB = AC = \\sqrt{ 14 }$), the triangle $ABC$ has at least two equal sides. By definition, this proves that triangle $ABC$ is an isosceles triangle.",
        "<strong>Step 4: Find the length of the third side $BC$ for part (b)</strong><br>Calculate the magnitude of the final displacement vector $\\vec{ BC }$:<br>\\begin{aligned} |\\vec{ BC }| &= \\sqrt{ ( -1 )^2 + 4^2 + ( -1 )^2 } \\cr &= \\sqrt{ 1 + 16 + 1 } \\cr &= \\sqrt{ 18 } \\cr &= \\sqrt{ 9 \\cdot 2 } \\cr &= 3\\sqrt{ 2 } \\cr \\end{aligned}",
        "<strong>Step 5: Calculate the perimeter of the triangle</strong><br>The perimeter is the sum of all three side lengths:<br>\\begin{aligned} \\text{Perimeter} &= AB + AC + BC \\cr &= \\sqrt{ 14 } + \\sqrt{ 14 } + 3\\sqrt{ 2 } \\cr &= 2\\sqrt{ 14 } + 3\\sqrt{ 2 } \\cr \\end{aligned}<br>This is in the required form $a\\sqrt{ 14 } + b\\sqrt{ 2 }$ with integers $a = 2$ and $b = 3$."
    ],
    "pi_options": [
        {
            "ans": "$$2\\sqrt{ 14 } + 3\\sqrt{ 2 }, \\quad \\text{but failed to show isosceles property}$$",
            "feedback": "You successfully calculated the correct perimeter, but make sure you wrote a concluding sentence in part (a) explicitly stating that $AB = AC = \\sqrt{14}$ to earn the final communication mark for the proof."
        },
        {
            "ans": "$$\\text{Perimeter} = 2\\sqrt{ 14 } + \\sqrt{ 18 }$$",
            "feedback": "You calculated the correct lengths, but you did not write the final expression in the exact simplified surd form required. You must simplify $\\sqrt{18}$ to $3\\sqrt{2}$ to match the form $a\\sqrt{14} + b\\sqrt{2}$."
        },
        {
            "ans": "$$\\text{Perimeter} = 2\\sqrt{ 12 } + 3\\sqrt{ 2 }$$",
            "feedback": "You may have made an arithmetic error when calculating the magnitude of $\\vec{AB}$ or $\\vec{AC}$, perhaps by subtracting the components instead of adding them ($4 - 1 + 9 = 12$ instead of $4 + 1 + 9 = 14$)."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Simplifying Surds for Perimeters",
        "content": "Whenever an exam question specifies a surd form like $a\\sqrt{14} + b\\sqrt{2}$, it is a strong hint that one of your calculated side lengths (such as $\\sqrt{18}$) can be simplified by factorising out a perfect square: $\\sqrt{18} = \\sqrt{9 \\cdot 2} = 3\\sqrt{2}$. Always simplify your surds fully before summing your perimeter terms."
    }
}
];