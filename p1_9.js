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
        "<strong>Step 1: Analyze part (a) using the quadratic discriminant</strong><br>For a quadratic equation $ax^2 + bx + c = 0$ to have no real roots, its discriminant $\\Delta = b^2 - 4ac$ must be strictly less than $0$.<br>For the equation $x^2 + kx + 36 = 0$, we identify the coefficients:<br>\\begin{aligned} a &= 1 \\\\cr b &= k \\\\cr c &= 36 \\\\cr \\\\Delta &= k^2 - 4( 1 )( 36 ) \\\\cr \\\\Delta &= k^2 - 144 \\\\end{aligned}",
        "<strong>Step 2: Solve the inequality for $k$</strong><br>Set the discriminant strictly less than zero:<br>\\begin{aligned} k^2 - 144 &< 0 \\\\cr k^2 &< 144 \\\\cr -12 < k &< 12 \\\\end{aligned}<br>Thus, the range of values of $k$ for which there are no real roots is $-12 < k < 12$.",
        "<strong>Step 3: Analyze part (b) by completing the square</strong><br>To find the centre and radius of the circle, we rearrange the equation $x^2 + 6x + y^2 - 8y - 11 = 0$ by completing the square for both the $x$ and $y$ terms:<br>\\begin{aligned} x^2 + 6x &= ( x + 3 )^2 - 9 \\\\cr y^2 - 8y &= ( y - 4 )^2 - 16 \\\\end{aligned}",
        "<strong>Step 4: Write the circle equation in standard form</strong><br>Substitute these completed square forms back into the circle's equation:<br>\\begin{aligned} ( x + 3 )^2 - 9 + ( y - 4 )^2 - 16 - 11 &= 0 \\\\cr ( x + 3 )^2 + ( y - 4 )^2 - 36 &= 0 \\\\cr ( x + 3 )^2 + ( y - 4 )^2 &= 36 \\\\end{aligned}",
        "<strong>Step 5: Identify the centre and calculate the area</strong><br>Comparing this to the standard circle equation $( x - h )^2 + ( y - k )^2 = r^2$, we obtain:<br>\\begin{aligned} \\\\text{Centre } ( h, k ) &= ( -3, 4 ) \\\\cr r^2 &= 36 \\\\end{aligned}<br>The area of a circle is given by $A = \\pi r^2$. Therefore:<br>\\begin{aligned} A &= \\pi ( 36 ) \\\\cr A &= 36\\pi \\\\end{aligned}"
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
        "<strong>Step 1: Set up the discriminant for part (a)</strong><br>For the quadratic equation $2x^2 - px + 8 = 0$ to have two distinct real roots, its discriminant $\\Delta = b^2 - 4ac$ must be strictly greater than $0$.<br>Identify the coefficients:<br>\\begin{aligned} a &= 2 \\\\cr b &= -p \\\\cr c &= 8 \\\\cr \\\\Delta &= ( -p )^2 - 4( 2 )( 8 ) \\\\cr \\\\Delta &= p^2 - 64 \\\\end{aligned}",
        "<strong>Step 2: Solve the inequality for $p$</strong><br>Set the discriminant strictly greater than zero and solve the quadratic inequality:<br>\\begin{aligned} p^2 - 64 &> 0 \\\\cr p^2 &> 64 \\\\cr p < -8 &\\text{ or } p > 8 \\\\end{aligned}<br>Thus, the range of values is $p < -8$ or $p > 8$.",
        "<strong>Step 3: Determine the radius squared for part (b)</strong><br>The radius $r$ of the circle is the distance between the centre $C(3, -2)$ and the point $P(7, 1)$. The radius squared $r^2$ is given by:<br>\\begin{aligned} r^2 &= ( 7 - 3 )^2 + ( 1 - ( -2 ) )^2 \\\\cr r^2 &= 4^2 + 3^2 \\\\cr r^2 &= 16 + 9 \\\\cr r^2 &= 25 \\\\end{aligned}",
        "<strong>Step 4: Write and expand the circle equation</strong><br>The equation of the circle in standard form is:<br>$$( x - 3 )^2 + ( y + 2 )^2 = 25$$<br>Expand the squared terms:<br>\\begin{aligned} ( x^2 - 6x + 9 ) + ( y^2 + 4y + 4 ) &= 25 \\\\cr x^2 + y^2 - 6x + 4y + 13 &= 25 \\\\cr x^2 + y^2 - 6x + 4y - 12 &= 0 \\\\end{aligned}<br>This is in the required form $x^2 + y^2 + ax + by + c = 0$ with integers $a = -6$, $b = 4$, and $c = -12$."
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
        "<strong>Step 1: Apply the condition for exactly one real root in part (a)</strong><br>A quadratic equation has exactly one real root if and only if its discriminant is equal to zero ($\\Delta = b^2 - 4ac = 0$).<br>For $3x^2 + 2mx + 12 = 0$, we have:<br>\\begin{aligned} a &= 3 \\\\cr b &= 2m \\\\cr c &= 12 \\\\cr \\\\Delta &= ( 2m )^2 - 4( 3 )( 12 ) \\\\cr \\\\Delta &= 4m^2 - 144 \\\\end{aligned}",
        "<strong>Step 2: Solve for $m$</strong><br>Set the discriminant equal to zero:<br>\\begin{aligned} 4m^2 - 144 &= 0 \\\\cr 4m^2 &= 144 \\\\cr m^2 &= 36 \\\\cr m &= \\\\pm 6 \\\\end{aligned}<br>The non-zero values are $m = 6$ and $m = -6$.",
        "<strong>Step 3: Set up the intersection with the $x$-axis for part (b)</strong><br>Any point on the $x$-axis has a $y$-coordinate of $0$. Substitute $y = 0$ directly into the circle's equation:<br>\\begin{aligned} x^2 + ( 0 )^2 - 8x - 4( 0 ) - 9 &= 0 \\\\cr x^2 - 8x - 9 &= 0 \\\\end{aligned}",
        "<strong>Step 4: Solve the quadratic equation to find the intersection points</strong><br>Factorise the quadratic expression:<br>\\begin{aligned} ( x - 9 )( x + 1 ) &= 0 \\\\cr x = 9 &\\text{ or } x = -1 \\\\end{aligned}<br>Thus, the coordinates of the intersection points are $( 9, 0 )$ and $( -1, 0 )$."
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
        "title": "The Head Teacher's Eye: Finding Axis of Intersections directly",
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
        "<strong>Step 1: Set up the intersection equation for part (a)</strong><br>To find where the line and curve intersect, set their equations equal to each other:<br>\\begin{aligned} mx + 2 &= x^2 + 5x + 6 \\\\cr x^2 + ( 5 - m )x + 4 &= 0 \\\\cr \\end{aligned}",
        "<strong>Step 2: Apply the discriminant condition for no intersection</strong><br>The line and curve do not intersect if the resulting quadratic equation has no real solutions. This requires the discriminant $\\Delta = b^2 - 4ac$ to be strictly less than $0$.<br>Identify the coefficients: $a = 1$, $b = 5 - m$, $c = 4$.<br>\\begin{aligned} \\\\Delta &= ( 5 - m )^2 - 4( 1 )( 4 ) \\\\cr \\\\Delta &= ( 5 - m )^2 - 16 \\\\end{aligned}",
        "<strong>Step 3: Solve the quadratic inequality for $m$</strong><br>Set the discriminant strictly less than zero:<br>\\begin{aligned} ( 5 - m )^2 - 16 &< 0 \\\\cr ( 5 - m )^2 &< 16 \\\\cr -4 < 5 - m &< 4 \\\\end{aligned}<br>Subtract $5$ from all parts:<br>$$-9 < -m < -1$$<br>Multiply by $-1$ and reverse the inequality signs:<br>$$1 < m < 9$$",
        "<strong>Step 4: Find the centre of the circle for part (b)</strong><br>The centre $C(h, k)$ of the circle is the midpoint of the diameter segment $AB$:<br>\\begin{aligned} h &= \\\\dfrac{ -1 + 7 }{ 2 } = 3 \\\\cr k &= \\\\dfrac{ 5 + ( -1 ) }{ 2 } = 2 \\\\end{aligned}<br>So, the centre is $C(3, 2)$.",
        "<strong>Step 5: Find the radius squared and write the equation</strong><br>The diameter length squared $AB^2$ is:<br>\\begin{aligned} AB^2 &= ( 7 - ( -1 ) )^2 + ( -1 - 5 )^2 \\\\cr AB^2 &= 8^2 + ( -6 )^2 \\\\cr AB^2 &= 64 + 36 = 100 \\\\end{aligned}<br>The radius $r$ is half the diameter, so $r = \\\\dfrac{ \\\\sqrt{ 100 } }{ 2 } = 5$. Thus, $r^2 = 25$.<br>The equation of the circle is:<br>$$( x - 3 )^2 + ( y - 2 )^2 = 25$$"
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
        "<strong>Step 1: Calculate the discriminant for part (a)</strong><br>An equation has real roots if its discriminant is greater than or equal to zero ($\\Delta \\ge 0$).<br>For $x^2 + ( k - 2 )x - 2k = 0$, identify the coefficients: $a = 1$, $b = k - 2$, $c = -2k$.<br>\\begin{aligned} \\\\Delta &= b^2 - 4ac \\\\cr \\\\Delta &= ( k - 2 )^2 - 4( 1 )( -2k ) \\\\cr \\\\Delta &= k^2 - 4k + 4 + 8k \\\\cr \\\\Delta &= k^2 + 4k + 4 \\\\end{aligned}",
        "<strong>Step 2: Factorise the discriminant and complete the proof</strong><br>Factorise the quadratic expression for the discriminant:<br>$$\\\\Delta = ( k + 2 )^2$$<br>Since any real number squared is non-negative, we have:<br>$$( k + 2 )^2 \\\\ge 0 \\quad \\\\text{for all real } k$$<br>Because $\\Delta \\ge 0$ for all real values of $k$, the equation is guaranteed to have real roots for all real $k$.",
        "<strong>Step 3: Complete the square for the circle in part (b)</strong><br>Rewrite the circle equation $x^2 + y^2 - 10x + 2y - 10 = 0$ to find its centre and radius squared:<br>\\begin{aligned} x^2 - 10x &= ( x - 5 )^2 - 25 \\\\cr y^2 + 2y &= ( y + 1 )^2 - 1 \\\\end{aligned}",
        "<strong>Step 4: Write the circle equation in standard form</strong><br>Substitute these back into the original equation:<br>\\begin{aligned} ( x - 5 )^2 - 25 + ( y + 1 )^2 - 1 - 10 &= 0 \\\\cr ( x - 5 )^2 + ( y + 1 )^2 - 36 &= 0 \\\\cr ( x - 5 )^2 + ( y + 1 )^2 &= 36 \\\\end{aligned}<br>The centre is $C(5, -1)$ and the radius squared is $r^2 = 36$ (so the radius is $r = 6$).",
        "<strong>Step 5: Determine the position of the point $P(8, 4)$</strong><br>Calculate the distance squared from the circle's centre $C(5, -1)$ to the point $P(8, 4)$:<br>\\begin{aligned} CP^2 &= ( 8 - 5 )^2 + ( 4 - ( -1 ) )^2 \\\\cr CP^2 &= 3^2 + 5^2 \\\\cr CP^2 &= 9 + 25 \\\\cr CP^2 &= 34 \\\\end{aligned}<br>Now compare this distance squared to the radius squared ($r^2 = 36$):<br>Since $34 < 36$ (meaning the distance to $P$ is less than the radius), the point $P(8, 4)$ lies <strong>inside</strong> the circle."
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
}
];