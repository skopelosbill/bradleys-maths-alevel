window.ALEVEL_QUESTIONS = [
       {
  "id": "004401",
  "group_id": "004401",
  "board": "CCEA",
  "branch": "Pure",
  "level": "AS",
  "major_area": "Coordinate Geometry",
  "topic": "Circles",
  "subtopic": [
    "Circle Geometry"
  ],
  "img": false,
  "question": "<strong>(a)</strong> Find the range of values of $k$ for which the quadratic equation $x^2 + kx + 36 = 0$ has no real roots. [6]<br><br><strong>(b)</strong> Find the coordinates of the centre and the exact area of the circle given by the equation:$$x^2 + 6x + y^2 - 8y - 11 = 0$$[6]",
  "steps": [
    "<strong>Step 1: Analyze part (a) using the quadratic discriminant</strong><br><br>For a quadratic equation $ax^2 + bx + c = 0$ to have no real roots, its discriminant $\\Delta = b^2 - 4ac$ must be strictly less than $0$.<br><br>For the equation $x^2 + kx + 36 = 0$, we identify the coefficients:\\begin{aligned} a &= 1 \\cr b &= k \\cr c &= 36 \\cr \\Delta &= k^2 - 4(1)(36) \\cr &= k^2 - 144 \\end{aligned}",
    "<strong>Step 2: Solve the inequality for $k$</strong><br><br>Set the discriminant strictly less than zero:\\begin{aligned} k^2 - 144 &< 0 \\cr k^2 &< 144 \\end{aligned}Thus, the range of values of $k$ for which there are no real roots is $-12 < k < 12$.",
    "<strong>Step 3: Analyze part (b) by completing the square</strong><br><br>To find the centre and radius of the circle, we rearrange the equation $x^2 + 6x + y^2 - 8y - 11 = 0$ by completing the square for both the $x$ and $y$ terms:\\begin{aligned} x^2 + 6x &= (x + 3)^2 - 9 \\cr y^2 - 8y &= (y - 4)^2 - 16 \\end{aligned}",
    "<strong>Step 4: Write the circle equation in standard form</strong><br><br>Substitute these completed square forms back into the circle's equation:\\begin{aligned} &(x + 3)^2 - 9 + (y - 4)^2 \\cr &\\qquad - 16 - 11 = 0 \\cr &(x + 3)^2 + (y - 4)^2 - 36 = 0 \\cr &(x + 3)^2 + (y - 4)^2 = 36 \\end{aligned}",
    "<strong>Step 5: Identify the centre and calculate the area</strong><br><br>Comparing this to the standard circle equation $(x - h)^2 + (y - k)^2 = r^2$, we obtain:\\begin{aligned} \\text{Centre } (h, k) &= (-3, 4) \\cr r^2 &= 36 \\end{aligned}The area of a circle is given by $A = \\pi r^2$. Therefore:\\begin{aligned} A &= \\pi(36) \\cr &= 36\\pi \\end{aligned}",
    "Final Answer:\\begin{aligned} &\\text{(a) } -12 < k < 12 \\cr &\\text{(b) Centre: } (-3, 4) \\cr &\\quad \\text{Area} = 36\\pi \\end{aligned}"
  ],
  "pi_options": [
    {
      "ans": "\\begin{aligned} &\\text{(a) } k < 12 \\text{ or } k > -12 \\cr &\\text{(b) Centre: } (3, -4) \\cr &\\quad \\text{Area: } 11\\pi \\end{aligned}",
      "feedback": "You have made a sign error when completing the square for the circle, leading to an incorrect centre and an incorrect radius squared ($r^2 = 11$ instead of $36$). Additionally, writing the inequality as two separate parts without a conjunction or with 'or' is logically incorrect for a 'no real roots' condition."
    },
    {
      "ans": "\\begin{aligned} &\\text{(a) } -12 \\le k \\le 12 \\cr &\\text{(b) Centre: } (-3, 4) \\cr &\\quad \\text{Area: } 36\\pi \\end{aligned}",
      "feedback": "You have used weak inequalities ($\\le$) instead of strict inequalities ($<$). Since the question asks for 'no real roots', the discriminant must be strictly less than zero ($\\Delta < 0$). If $\\Delta = 0$, the equation has one repeated real root."
    },
    {
      "ans": "\\begin{aligned} &\\text{(a) } -12 < k < 12 \\cr &\\text{(b) Centre: } (-3, 4) \\cr &\\quad \\text{Area: } 6\\pi \\end{aligned}",
      "feedback": "You identified the correct range for $k$ and the correct centre, but you calculated the area of the circle using $A = \\pi r$ instead of $A = \\pi r^2$."
    }
  ],
  "bradley_insight": {
    "type": "caution",
    "title": "The Head Teacher's Eye: Watch the Boundaries of Discriminants",
    "content": "Always pay close attention to whether inequality signs are strict or non-strict. For no real roots, we use a strict inequality $(\\Delta < 0)$. Also, watch out when finding the area of a circle from the standard equation: the constant term on the right is $r^2$, so the area is simply $\\pi$ multiplied by that exact value, without needing to square it again!"
  }
},
{
  "id": "004402",
  "group_id": "004401",
  "board": "CCEA",
  "branch": "Pure",
  "level": "AS",
  "major_area": "Coordinate Geometry",
  "topic": "Circles",
  "subtopic": [
    "Circle Geometry"
  ],
  "img": false,
  "question": "<strong>(a)</strong> Find the range of values of $p$ for which the quadratic equation $2x^2 - px + 8 = 0$ has two distinct real roots. [6]<br><br><strong>(b)</strong> A circle has centre $C(3, -2)$ and passes through the point $P(7, 1)$. Find the equation of the circle, giving your answer in the form $x^2 + y^2 + ax + by + c = 0$, where $a$, $b$, and $c$ are integers. [6]",
  "steps": [
    "<strong>Step 1: Set up the discriminant for part (a)</strong><br><br>For the quadratic equation $2x^2 - px + 8 = 0$ to have two distinct real roots, its discriminant $\\Delta = b^2 - 4ac$ must be strictly greater than $0$.<br><br>Identify the coefficients:\\begin{aligned} a &= 2 \\cr b &= -p \\cr c &= 8 \\cr \\Delta &= (-p)^2 - 4(2)(8) \\cr &= p^2 - 64 \\end{aligned}",
    "<strong>Step 2: Solve the inequality for $p$</strong><br><br>Set the discriminant strictly greater than zero and solve the quadratic inequality:\\begin{aligned} p^2 - 64 &> 0 \\cr p^2 &> 64 \\end{aligned}Thus, the range of values is $p < -8$ or $p > 8$.",
    "<strong>Step 3: Determine the radius squared for part (b)</strong><br><br>The radius $r$ of the circle is the distance between the centre $C(3, -2)$ and the point $P(7, 1)$. The radius squared $r^2$ is given by:\\begin{aligned} r^2 &= (7 - 3)^2 + (1 - (-2))^2 \\cr &= 4^2 + 3^2 \\cr &= 16 + 9 \\cr &= 25 \\end{aligned}",
    "<strong>Step 4: Write and expand the circle equation</strong><br><br>The equation of the circle in standard form is:$$(x - 3)^2 + (y + 2)^2 = 25$$Expand the squared terms:\\begin{aligned} &(x^2 - 6x + 9) \\cr &\\qquad + (y^2 + 4y + 4) = 25 \\cr &x^2 + y^2 - 6x + 4y \\cr &\\qquad + 13 = 25 \\cr &x^2 + y^2 - 6x + 4y \\cr &\\qquad - 12 = 0 \\end{aligned}This is in the required form $x^2 + y^2 + ax + by + c = 0$ with integers $a = -6$, $b = 4$, and $c = -12$.",
    "Final Answer:\\begin{aligned} &\\text{(a) } p < -8 \\text{ or } p > 8 \\cr &\\text{(b) } x^2 + y^2 - 6x + 4y \\cr &\\qquad - 12 = 0 \\end{aligned}"
  ],
  "pi_options": [
    {
      "ans": "\\begin{aligned} &\\text{(a) } -8 < p < 8 \\cr &\\text{(b) } x^2 + y^2 - 6x + 4y \\cr &\\qquad + 13 = 0 \\end{aligned}",
      "feedback": "You have two common errors: first, solving $p^2 - 64 > 0$ as a bounded interval $-8 < p < 8$ (which is the solution for $p^2 - 64 < 0$); second, forgetting to subtract the $r^2 = 25$ term from the constant sum of $13$ when expanding the circle equation."
    },
    {
      "ans": "\\begin{aligned} &\\text{(a) } p < -8 \\text{ or } p > 8 \\cr &\\text{(b) } x^2 + y^2 + 6x - 4y \\cr &\\qquad - 12 = 0 \\end{aligned}",
      "feedback": "Your discriminant work is correct. However, when writing the circle equation from the centre $C(3, -2)$, you used the wrong signs inside the brackets: $(x + 3)^2 + (y - 2)^2 = r^2$. This led to incorrect signs for the $x$ and $y$ terms in the expanded form."
    },
    {
      "ans": "\\begin{aligned} &\\text{(a) } p \\le -8 \\text{ or } p \\ge 8 \\cr &\\text{(b) } x^2 + y^2 - 6x + 4y \\cr &\\qquad - 12 = 0 \\end{aligned}",
      "feedback": "You have used non-strict inequalities ($\\le$ and $\\ge$). For two distinct real roots, the discriminant must be strictly greater than zero ($\\Delta > 0$). If $\\Delta = 0$, the roots are real but identical, not distinct."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Expanding Circle Conventions",
    "content": "When expanding the standard equation $(x - h)^2 + (y - k)^2 = r^2$, always remember to subtract $r^2$ from both sides to set the final quadratic form to $0$. A very common oversight is leaving $+(h^2 + k^2)$ on the left without moving $r^2$ across."
  }
},
{
  "id": "004403",
  "group_id": "004401",
  "board": "CCEA",
  "branch": "Pure",
  "level": "AS",
  "major_area": "Coordinate Geometry",
  "topic": "Circles",
  "subtopic": [
    "Circle Geometry"
  ],
  "img": false,
  "question": "<strong>(a)</strong> Find the non-zero values of $m$ for which the quadratic equation $3x^2 + 2mx + 12 = 0$ has exactly one real root. [5]<br><br><strong>(b)</strong> A circle is defined by the equation:$$x^2 + y^2 - 8x - 4y - 9 = 0$$Find the coordinates of the points where this circle intersects the $x$-axis. [7]",
  "steps": [
    "<strong>Step 1: Apply the condition for exactly one real root in part (a)</strong><br><br>A quadratic equation has exactly one real root if and only if its discriminant is equal to zero ($\\Delta = b^2 - 4ac = 0$).<br><br>For $3x^2 + 2mx + 12 = 0$, we have:\\begin{aligned} a &= 3 \\cr b &= 2m \\cr c &= 12 \\cr \\Delta &= (2m)^2 - 4(3)(12) \\cr &= 4m^2 - 144 \\end{aligned}",
    "<strong>Step 2: Solve for $m$</strong><br><br>Set the discriminant equal to zero:\\begin{aligned} 4m^2 - 144 &= 0 \\cr 4m^2 &= 144 \\cr m^2 &= 36 \\cr m &= \\pm 6 \\end{aligned}The non-zero values are $m = 6$ and $m = -6$.",
    "<strong>Step 3: Set up the intersection with the $x$-axis for part (b)</strong><br><br>Any point on the $x$-axis has a $y$-coordinate of $0$. Substitute $y = 0$ directly into the circle's equation:\\begin{aligned} x^2 - 8x - 9 = 0 \\end{aligned}",
    "<strong>Step 4: Solve the quadratic equation to find the intersection points</strong><br><br>Factorise the quadratic expression:\\begin{aligned} (x - 9)(x + 1) &= 0 \\cr x &= 9 \\text{ or } x = -1 \\end{aligned}Thus, the coordinates of the intersection points are $(9, 0)$ and $(-1, 0)$.",
    "Final Answer:\\begin{aligned} &\\text{(a) } m = 6 \\text{ or } m = -6 \\cr &\\text{(b) } (9, 0) \\text{ and } (-1, 0) \\end{aligned}"
  ],
  "pi_options": [
    {
      "ans": "\\begin{aligned} &\\text{(a) } m = 36 \\cr &\\text{(b) } (9, 0) \\text{ and } (-1, 0) \\end{aligned}",
      "feedback": "You have correctly solved part (b), but in part (a) you incorrectly equated $m^2 = 36$ directly to $m = 36$, forgetting to take the square root of $36$."
    },
    {
      "ans": "\\begin{aligned} &\\text{(a) } m = \\pm 6 \\cr &\\text{(b) } (0, 9) \\text{ and } (0, -1) \\end{aligned}",
      "feedback": "Your values for $m$ are correct. However, for the intersection with the $x$-axis, you must set $y = 0$ to find the $x$-coordinates. Setting $x = 0$ finds the intersections with the $y$-axis instead, and writing them as $(0, x)$ transposes the coordinates."
    },
    {
      "ans": "\\begin{aligned} &\\text{(a) } m = \\pm 12 \\cr &\\text{(b) } (9, 0) \\text{ and } (-1, 0) \\end{aligned}",
      "feedback": "In part (a), you calculated $2m^2 - 144 = 0$, giving $m^2 = 72$, by miscalculating $(2m)^2$ as $2m^2$ instead of $4m^2$. Remember to square the entire coefficient: $(2m)^2 = 4m^2$."
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
  "group_id": "004401",
  "board": "CCEA",
  "branch": "Pure",
  "level": "AS",
  "major_area": "Coordinate Geometry",
  "topic": "Circles",
  "subtopic": [
    "Circle Geometry"
  ],
  "img": false,
  "question": "<strong>(a)</strong> Find the range of values of $m$ for which the straight line $y = mx + 2$ and the curve $y = x^2 + 5x + 6$ do not intersect. [7]<br><br><strong>(b)</strong> The line segment joining the points $A(-1, 5)$ and $B(7, -1)$ forms a diameter of a circle. Find the equation of this circle, leaving your answer in the form $(x-h)^2 + (y-k)^2 = r^2$. [5]",
  "steps": [
    "<strong>Step 1: Set up the intersection equation for part (a)</strong><br><br>To find where the line and curve intersect, set their equations equal to each other:\\begin{aligned} mx + 2 &= x^2 + 5x + 6 \\cr x^2 + (5 - m)x + 4 &= 0 \\end{aligned}",
    "<strong>Step 2: Apply the discriminant condition for no intersection</strong><br><br>The line and curve do not intersect if the resulting quadratic equation has no real solutions. This requires the discriminant $\\Delta = b^2 - 4ac$ to be strictly less than $0$.<br><br>Identify the coefficients: $a = 1$, $b = 5 - m$, $c = 4$:\\begin{aligned} \\Delta &= (5 - m)^2 - 4(1)(4) \\cr &= (5 - m)^2 - 16 \\end{aligned}",
    "<strong>Step 3: Solve the quadratic inequality for $m$</strong><br><br>Set the discriminant strictly less than zero:\\begin{aligned} (5 - m)^2 - 16 &< 0 \\cr (5 - m)^2 &< 16 \\end{aligned}This gives $-4 < 5 - m < 4$.<br><br>Subtract $5$ from all parts:$$-9 < -m < -1$$Multiply by $-1$ and reverse the inequality signs:$$1 < m < 9$$",
    "<strong>Step 4: Find the centre of the circle for part (b)</strong><br><br>The centre $C(h, k)$ of the circle is the midpoint of the diameter segment $AB$:\\begin{aligned} h &= \\dfrac{-1 + 7}{2} \\cr &= 3 \\cr k &= \\dfrac{5 + (-1)}{2} \\cr &= 2 \\end{aligned}So, the centre is $C(3, 2)$.",
    "<strong>Step 5: Find the radius squared and write the equation</strong><br><br>The diameter length squared $AB^2$ is:\\begin{aligned} AB^2 &= (7 - (-1))^2 + (-1 - 5)^2 \\cr &= 8^2 + (-6)^2 \\cr &= 64 + 36 \\cr &= 100 \\end{aligned}The radius $r$ is half the diameter, so $r = \\dfrac{\\sqrt{100}}{2}$, which equals $5$. Thus, $r^2 = 25$.<br><br>The equation of the circle is:$$(x - 3)^2 + (y - 2)^2 = 25$$",
    "Final Answer:\\begin{aligned} &\\text{(a) } 1 < m < 9 \\cr &\\text{(b) } (x - 3)^2 + (y - 2)^2 = 25 \\end{aligned}"
  ],
  "pi_options": [
    {
      "ans": "\\begin{aligned} &\\text{(a) } m < 1 \\text{ or } m > 9 \\cr &\\text{(b) } (x - 3)^2 + (y - 2)^2 = 100 \\end{aligned}",
      "feedback": "You made two errors: first, you solved the discriminant inequality $(5-m)^2 < 16$ as outside values rather than a bounded interval; second, you used the diameter squared ($100$) instead of the radius squared ($r^2 = 25$) in the circle's equation."
    },
    {
      "ans": "\\begin{aligned} &\\text{(a) } 1 < m < 9 \\cr &\\text{(b) } (x + 3)^2 + (y + 2)^2 = 25 \\end{aligned}",
      "feedback": "Your range for $m$ is correct. However, for the circle, the midpoint coordinates are $h = 3$ and $k = 2$. When substituted into the standard equation $(x-h)^2 + (y-k)^2 = r^2$, the signs become negative, resulting in $(x-3)^2 + (y-2)^2 = 25$."
    },
    {
      "ans": "\\begin{aligned} &\\text{(a) } 1 \\le m \\le 9 \\cr &\\text{(b) } (x - 3)^2 + (y - 2)^2 = 25 \\end{aligned}",
      "feedback": "You have used non-strict inequalities ($\\le$ and $\\ge$). For the line and curve to have no points of intersection, they must not touch at all, meaning the discriminant must be strictly less than zero ($\\Delta < 0$). A discriminant of zero means they touch at exactly one point (tangent)."
    }
  ],
  "bradley_insight": {
    "type": "deeper",
    "title": "The Head Teacher's Eye: Geometric Interpretations of the Discriminant",
    "content": "The quadratic discriminant is a powerful tool for analyzing intersections between lines and curves. When setting $y_{\\text{line}} = y_{\\text{curve}}$, the resulting $x$-equation represents the $x$-coordinates of the intersection points. Having no real solutions $(\\Delta < 0)$ algebraically corresponds to no intersection points geometrically."
  }
},
{
  "id": "004405",
  "group_id": "004401",
  "board": "CCEA",
  "branch": "Pure",
  "level": "AS",
  "major_area": "Coordinate Geometry",
  "topic": "Circles",
  "subtopic": [
    "Circle Geometry"
  ],
  "img": false,
  "question": "<strong>(a)</strong> Show that the quadratic equation $x^2 + (k-2)x - 2k = 0$ has real roots for all real values of $k$. [5]<br><br><strong>(b)</strong> A circle is given by the equation:$$x^2 + y^2 - 10x + 2y - 10 = 0$$Determine, with a clear algebraic reason, whether the point $P(8, 4)$ lies inside, on, or outside this circle. [7]",
  "steps": [
    "<strong>Step 1: Calculate the discriminant for part (a)</strong><br><br>An equation has real roots if its discriminant is greater than or equal to zero ($\\Delta \\ge 0$).<br><br>For $x^2 + (k - 2)x - 2k = 0$, identify the coefficients: $a = 1$, $b = k - 2$, $c = -2k$:\\begin{aligned} \\Delta &= b^2 - 4ac \\cr &= (k - 2)^2 - 4(1)(-2k) \\cr &= k^2 - 4k + 4 + 8k \\cr &= k^2 + 4k + 4 \\end{aligned}",
    "<strong>Step 2: Factorise the discriminant and complete the proof</strong><br><br>Factorise the quadratic expression for the discriminant:$$\\Delta = (k + 2)^2$$Since any real number squared is non-negative, we have:$$(k + 2)^2 \\ge 0 \\quad \\text{for all real } k$$Because $\\Delta \\ge 0$ for all real values of $k$, the equation is guaranteed to have real roots for all real $k$.",
    "<strong>Step 3: Complete the square for the circle in part (b)</strong><br><br>Rewrite the circle equation $x^2 + y^2 - 10x + 2y - 10 = 0$ to find its centre and radius squared:\\begin{aligned} x^2 - 10x &= (x - 5)^2 - 25 \\cr y^2 + 2y &= (y + 1)^2 - 1 \\end{aligned}",
    "<strong>Step 4: Write the circle equation in standard form</strong><br><br>Substitute these back into the original equation:\\begin{aligned} &(x - 5)^2 - 25 + (y + 1)^2 \\cr &\\qquad - 1 - 10 = 0 \\cr &(x - 5)^2 + (y + 1)^2 - 36 = 0 \\cr &(x - 5)^2 + (y + 1)^2 = 36 \\end{aligned}The centre is $C(5, -1)$ and the radius squared is $r^2 = 36$ (so the radius is $r = 6$).",
    "<strong>Step 5: Determine the position of the point $P(8, 4)$</strong><br><br>Calculate the distance squared from the circle's centre $C(5, -1)$ to the point $P(8, 4)$:\\begin{aligned} CP^2 &= (8 - 5)^2 + (4 - (-1))^2 \\cr &= 3^2 + 5^2 \\cr &= 9 + 25 \\cr &= 34 \\end{aligned}Now compare this distance squared to the radius squared ($r^2 = 36$):<br><br>Since $34 < 36$ (meaning the distance to $P$ is less than the radius), the point $P(8, 4)$ lies <strong>inside</strong> the circle.",
    "Final Answer:\\begin{aligned}  &\\Delta = (k+2)^2 \\ge 0 \\cr &\\text{ Inside the circle (since } 34 < 36\\text{)} \\end{aligned}"
  ],
  "pi_options": [
    {
      "ans": "\\begin{aligned} &\\Delta = (k-2)^2 - 8k \\cr &P(8, 4) \\text{ lies outside (} 34 < 36\\text{)} \\end{aligned}",
      "feedback": "You have two errors: first, a sign error when calculating the discriminant ($-4 \\times 1 \\times -2k$ is $+8k$, not $-8k$); second, concluding that a distance less than the radius ($34 < 36$) means the point lies 'outside' the circle. If the distance to the point is smaller than the radius, it must be inside."
    },
    {
      "ans": "\\begin{aligned} &\\Delta = (k+2)^2 \\cr &P(8, 4) \\text{ lies on the circle} \\end{aligned}",
      "feedback": "Your discriminant and completed square work are correct. However, for a point to lie 'on' the circle, the distance squared from the centre must be exactly equal to $r^2 = 36$. Since $34 \\ne 36$, it does not lie on the circle."
    },
    {
      "ans": "\\begin{aligned} &\\Delta = (k+2)^2 \\cr &P(8, 4) \\text{ lies outside the circle} \\end{aligned}",
      "feedback": "Your calculations are correct, but you misapplied the logic. Because the distance squared from the centre to $P$ ($34$) is less than the radius squared ($36$), the point lies inside the boundary of the circle, not outside."
    }
  ],
  "bradley_insight": {
    "type": "caution",
    "title": "The Head Teacher's Eye: Comparing Distances to the Radius",
    "content": "To determine whether a point lies inside, on, or outside a circle, compare the square of the distance from the centre to the point, $d^2$, with the radius squared, $r^2$. If $d^2 < r^2$, the point is inside; if $d^2 = r^2$, it is on the boundary; and if $d^2 > r^2$, it is outside."
  }
},
 {
  "id": "004406",
  "group_id": "004406",
  "board": "CCEA",
  "branch": "Pure",
  "level": "AS",
  "major_area": "Integration",
  "topic": "Trigonometry",
  "subtopic": [
        "Definite Integration",
        "Trigonometric Equations"
  ],
  "img": false,
  "question": "<strong>(a)</strong> Given that$$\\int_{1}^{k} 3\\sqrt{x} \\text{d}x = 14$$where $k > 1$, find the value of $k$. [6]<br><br><strong>(b)</strong> Solve the equation$$2\\sin^2 \\theta + \\cos \\theta = 1$$for $0^\\circ \\le \\theta < 360^\\circ$. [7]",
  "steps": [
    "<strong>Step 1: Integrate the function in part (a)</strong><br><br>First, rewrite the integrand $3\\sqrt{x}$ in index form as $3x^{1/2}$. Integrate this expression with respect to $x$ using the power rule:\\begin{aligned} \\int 3x^{1/2} \\text{d}x &= 3 \\cdot \\dfrac{x^{3/2}}{3/2} \\cr &= 2x^{3/2} \\end{aligned}",
    "<strong>Step 2: Apply the limits of integration and simplify</strong><br><br>Substitute the integration limits of $1$ and $k$ into your integrated expression, then set the result equal to $14$:\\begin{aligned} [2x^{3/2}]_{1}^{k} &= 14 \\cr 2k^{3/2} - 2(1)^{3/2} &= 14 \\cr 2k^{3/2} - 2 &= 14 \\end{aligned}",
    "<strong>Step 3: Solve the equation for $k$</strong><br><br>Rearrange the simplified equation to solve for the unknown limit $k$:\\begin{aligned} 2k^{3/2} &= 16 \\cr k^{3/2} &= 8 \\cr (\\sqrt{k})^3 &= 8 \\cr \\sqrt{k} &= 2 \\cr k &= 4 \\end{aligned}Since $k = 4$ is greater than $1$, this is our correct solution.",
    "<strong>Step 4: Express the trigonometric equation in terms of a single ratio</strong><br><br>For the equation $2\\sin^2 \\theta + \\cos \\theta = 1$, use the fundamental identity $\\sin^2 \\theta = 1 - \\cos^2 \\theta$ to rewrite the entire equation in terms of $\\cos \\theta$:\\begin{aligned} 2(1 - \\cos^2 \\theta) + \\cos \\theta &= 1 \\cr 2 - 2\\cos^2 \\theta + \\cos \\theta &= 1 \\cr -2\\cos^2 \\theta + \\cos \\theta + 1 &= 0 \\cr 2\\cos^2 \\theta - \\cos \\theta - 1 &= 0 \\end{aligned}",
    "<strong>Step 5: Factorise the quadratic trigonometric equation</strong><br><br>Let $u = \\cos \\theta$ to form a standard quadratic equation $2u^2 - u - 1 = 0$. Factorise this expression:\\begin{aligned} (2u + 1)(u - 1) &= 0 \\cr u &= -\\dfrac{1}{2} \\text{ or } u = 1 \\end{aligned}",
    "<strong>Step 6: Determine all solutions within the specified interval</strong><br><br>Substitute back $u = \\cos \\theta$ and find the angle solutions for $\\theta$ in the interval $0^\\circ \\le \\theta < 360^\\circ$:<br><br>For $\\cos \\theta = 1$:$$\\theta = 0^\\circ$$For $\\cos \\theta = -\\dfrac{1}{2}$:\\begin{aligned} \\theta &= 180^\\circ - 60^\\circ \\cr &= 120^\\circ \\cr \\theta &= 180^\\circ + 60^\\circ \\cr &= 240^\\circ \\end{aligned}Combining these yields the final solutions: $\\theta = 0^\\circ, 120^\\circ, 240^\\circ$.",
    "Final Answer:\\begin{aligned} &\\text{(a) } k = 4 \\cr &\\text{(b) } \\theta = 0^\\circ, 120^\\circ, 240^\\circ \\end{aligned}"
  ],
  "pi_options": [
    {
      "ans": "\\begin{aligned} &\\text{(a) } k = 22^{2/3} \\cr &\\text{(b) } \\theta = 0^\\circ, 120^\\circ, 240^\\circ \\end{aligned}",
      "feedback": "This error arises if you forget to subtract the lower limit of integration (1) during step 2. This gives $2k^{3/2} = 14$, leading to $k^{3/2} = 7$, so $k = 7^{2/3}$."
    },
    {
      "ans": "\\begin{aligned} &\\text{(a) } k = 4 \\cr &\\text{(b) } \\theta = 0^\\circ, 60^\\circ, 300^\\circ \\end{aligned}",
      "feedback": "This error occurs because you resolved $\\cos \\theta = \\dfrac{1}{2}$ instead of $-\\dfrac{1}{2}$ during step 6, mistakenly placing your acute reference angle in quadrants I and IV instead of II and III where cosine is negative."
    },
    {
      "ans": "\\begin{aligned} &\\text{(a) } k = 5.29 \\cr &\\text{(b) } \\theta = 0^\\circ, 120^\\circ, 240^\\circ \\end{aligned}",
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
  "group_id": "004406",
  "board": "CCEA",
  "branch": "Pure",
  "level": "AS",
  "major_area": "Integration",
  "topic": "Trigonometry",
  "subtopic": [
        "Definite Integration",
        "Trigonometric Equations"
  ],
  "img": false,
  "question": "<strong>(a)</strong> Given that$$\\int_{1}^{k} \\dfrac{4}{x^2} \\text{d}x = 3$$where $k > 1$, find the value of $k$. [6]<br><br><strong>(b)</strong> Solve the equation$$3\\cos^2 \\theta + 4\\sin \\theta = 4$$for $0^\\circ \\le \\theta \\le 360^\\circ$. [7]",
  "steps": [
    "<strong>Step 1: Integrate the reciprocal function in part (a)</strong><br><br>First, express the term $\\dfrac{4}{x^2}$ with a negative exponent as $4x^{-2}$. Integrate this with respect to $x$:\\begin{aligned} \\int 4x^{-2} \\text{d}x &= 4 \\cdot \\dfrac{x^{-1}}{-1} \\cr &= -\\dfrac{4}{x} \\end{aligned}",
    "<strong>Step 2: Substitute the integration limits</strong><br><br>Apply the integration limits of $1$ and $k$ and set the result equal to $3$:\\begin{aligned} \\left[ -\\dfrac{4}{x} \\right]_{1}^{k} &= 3 \\cr \\left( -\\dfrac{4}{k} \\right) - \\left( -\\dfrac{4}{1} \\right) &= 3 \\cr -\\dfrac{4}{k} + 4 &= 3 \\end{aligned}",
    "<strong>Step 3: Solve for the upper limit $k$</strong><br><br>Rearrange the algebraic equation to find $k$:\\begin{aligned} 4 - \\dfrac{4}{k} &= 3 \\cr 1 &= \\dfrac{4}{k} \\cr k &= 4 \\end{aligned}Since $k = 4$ is greater than $1$, this satisfies our boundary condition.",
    "<strong>Step 4: Substitute a trigonometric identity in part (b)</strong><br><br>For the equation $3\\cos^2 \\theta + 4\\sin \\theta = 4$, use the identity $\\cos^2 \\theta = 1 - \\sin^2 \\theta$ to rewrite the equation entirely in terms of $\\sin \\theta$:\\begin{aligned} 3(1 - \\sin^2 \\theta) + 4\\sin \\theta &= 4 \\cr 3 - 3\\sin^2 \\theta + 4\\sin \\theta &= 4 \\cr -3\\sin^2 \\theta + 4\\sin \\theta - 1 &= 0 \\cr 3\\sin^2 \\theta - 4\\sin \\theta + 1 &= 0 \\end{aligned}",
    "<strong>Step 5: Factorise and solve for $\\sin \\theta$</strong><br><br>Let $u = \\sin \\theta$. The quadratic form is $3u^2 - 4u + 1 = 0$. Factorise this expression:\\begin{aligned} (3u - 1)(u - 1) &= 0 \\cr u &= \\dfrac{1}{3} \\text{ or } u = 1 \\end{aligned}",
    "<strong>Step 6: Determine all angle solutions within the interval</strong><br><br>Find the values of $\\theta$ in the range $0^\\circ \\le \\theta \\le 360^\\circ$:<br><br>For $\\sin \\theta = 1$:$$\\theta = 90.0^\\circ$$For $\\sin \\theta = \\dfrac{1}{3}$:\\begin{aligned} \\theta &= \\sin^{-1}\\left( \\dfrac{1}{3} \\right) \\cr &\\approx 19.5^\\circ \\cr \\theta &= 180^\\circ - 19.5^\\circ \\cr &= 160.5^\\circ \\end{aligned}The final solutions (to the nearest tenth of a degree) are: $\\theta \\approx 19.5^\\circ, 90.0^\\circ, 160.5^\\circ$.",
    "Final Answer:\\begin{aligned} &\\text{(a) } k = 4 \\cr &\\text{(b) } \\theta \\approx 19.5^\\circ, 90.0^\\circ, 160.5^\\circ \\end{aligned}"
  ],
  "pi_options": [
    {
      "ans": "\\begin{aligned} &\\text{(a) } k = 4 \\cr &\\text{(b) } \\theta \\approx 19.5^\\circ, 90.0^\\circ, 340.5^\\circ \\end{aligned}",
      "feedback": "You have the second angle in the fourth quadrant ($340.5^\\circ$) instead of the second quadrant ($160.5^\\circ$). Because $\\sin \\theta = \\dfrac{1}{3}$ is positive, the solutions must lie in the first and second quadrants."
    },
    {
      "ans": "\\begin{aligned} &\\text{(a) } k = \\dfrac{4}{7} \\cr &\\text{(b) } \\theta \\approx 19.5^\\circ, 90.0^\\circ, 160.5^\\circ \\end{aligned}",
      "feedback": "You made a sign error during step 2 when applying the lower limit of integration, solving $-\\dfrac{4}{k} - 4 = 3$, which gives $-\\dfrac{4}{k} = 7$, so $k = -\\dfrac{4}{7}$ (and then dropping the negative sign)."
    },
    {
      "ans": "\\begin{aligned} &\\text{(a) } k = 4 \\cr &\\text{(b) } \\theta \\approx 30.0^\\circ, 90.0^\\circ, 150.0^\\circ \\end{aligned}",
      "feedback": "You have used the common exact values of $\\sin 30^\\circ = 0.5$ as a mistaken approximation for $\\sin \\theta = \\dfrac{1}{3}$. Be sure to use your calculator to find $\\sin^{-1}\\left(\\dfrac{1}{3}\\right)$ accurately."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Power Rule with Negative Exponents",
    "content": "When integrating terms with variables in the denominator like $\\dfrac{c}{x^n}$, always rewrite them with negative indices as $cx^{-n}$ before applying the power rule $\\int x^p \\text{d}x = \\dfrac{x^{p+1}}{p+1}$. Don't forget that raising $-2$ by $1$ yields $-1$, not $-3$!"
  }
},
{
  "id": "004408",
  "group_id": "004406",
  "board": "CCEA",
  "branch": "Pure",
  "level": "AS",
 "major_area": "Integration",
  "topic": "Trigonometry",
  "subtopic": [
        "Definite Integration",
        "Trigonometric Equations"
  ],
  "img": false,
  "question": "<strong>(a)</strong> Given that$$\\int_{0}^{k} (2x - 3) \\text{d}x = 4$$where $k > 0$, find the value of $k$. [5]<br><br><strong>(b)</strong> Solve the equation$$3\\sin \\theta - 4\\cos \\theta = 0$$for $0^\\circ \\le \\theta \\le 360^\\circ$. [6]",
  "steps": [
    "<strong>Step 1: Integrate the polynomial in part (a)</strong><br><br>Integrate the expression $(2x - 3)$ term-by-term with respect to $x$:\\begin{aligned} \\int (2x - 3) \\text{d}x &= \\dfrac{2x^2}{2} - 3x \\cr &= x^2 - 3x \\end{aligned}",
    "<strong>Step 2: Apply the limits of integration and set up the quadratic</strong><br><br>Substitute the limits of $0$ and $k$ into the expression and set the result equal to $4$:\\begin{aligned} [x^2 - 3x]_{0}^{k} &= 4 \\cr (k^2 - 3k) - (0^2 - 3(0)) &= 4 \\cr k^2 - 3k &= 4 \\cr k^2 - 3k - 4 &= 0 \\end{aligned}",
    "<strong>Step 3: Solve the quadratic equation for $k$</strong><br><br>Factorise the quadratic expression to find the roots:\\begin{aligned} (k - 4)(k + 1) &= 0 \\cr k &= 4 \\text{ or } k = -1 \\end{aligned}Since the initial condition specifies $k > 0$, we discard the negative root $k = -1$, giving our final answer as $k = 4$.",
    "<strong>Step 4: Rearrange the trigonometric equation in part (b)</strong><br><br>To solve $3\\sin \\theta - 4\\cos \\theta = 0$, isolate the trigonometric terms and divide both sides by $\\cos \\theta$ to express the equation in terms of $\\tan \\theta$:\\begin{aligned} 3\\sin \\theta &= 4\\cos \\theta \\cr \\dfrac{\\sin \\theta}{\\cos \\theta} &= \\dfrac{4}{3} \\cr \\tan \\theta &= \\dfrac{4}{3} \\end{aligned}",
    "<strong>Step 5: Identify the target quadrants and calculate the angles</strong><br><br>Since $\\tan \\theta = \\dfrac{4}{3}$ is positive, the solutions must lie in quadrant I and quadrant III:<br><br>In Quadrant I:\\begin{aligned} \\theta &= \\tan^{-1}\\left( \\dfrac{4}{3} \\right) \\cr &\\approx 53.1^\\circ \\end{aligned}In Quadrant III:\\begin{aligned} \\theta &= 180^\\circ + 53.1^\\circ \\cr &= 233.1^\\circ \\end{aligned}The solutions (to the nearest tenth of a degree) are: $\\theta \\approx 53.1^\\circ, 233.1^\\circ$.",
    "Final Answer:\\begin{aligned} &\\text{(a) } k = 4 \\cr &\\text{(b) } \\theta \\approx 53.1^\\circ, 233.1^\\circ \\end{aligned}"
  ],
  "pi_options": [
    {
      "ans": "\\begin{aligned} &\\text{(a) } k = 4 \\text{ or } k = -1 \\cr &\\text{(b) } \\theta \\approx 53.1^\\circ, 126.9^\\circ \\end{aligned}",
      "feedback": "You have made two errors: first, you failed to discard the negative limit $k = -1$ despite the constraint $k > 0$; second, you placed the second angle in quadrant II ($126.9^\\circ$) where tangent is negative, instead of quadrant III ($233.1^\\circ$)."
    },
    {
      "ans": "\\begin{aligned} &\\text{(a) } k = 4 \\cr &\\text{(b) } \\theta \\approx 36.9^\\circ, 216.9^\\circ \\end{aligned}",
      "feedback": "You made a reciprocal error when rearranging the trigonometric identity in step 4, mistakenly setting $\\tan \\theta = \\dfrac{3}{4}$ instead of $\\dfrac{4}{3}$."
    },
    {
      "ans": "\\begin{aligned} &\\text{(a) } k = 2 \\cr &\\text{(b) } \\theta \\approx 53.1^\\circ, 233.1^\\circ \\end{aligned}",
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
  "group_id": "004406",
  "board": "CCEA",
  "branch": "Pure",
  "level": "AS",
  "major_area": "Integration",
  "topic": "Trigonometry",
  "subtopic": [
        "Definite Integration",
        "Trigonometric Equations"
  ],
  "img": false,
  "question": "<strong>(a)</strong> Find the exact area of the finite region bounded by the curve $y = x^2 - 4x$ and the $x$-axis. [6]<br><br><strong>(b)</strong> Solve the equation$$\\cos(2\\theta + 40^\\circ) = -0.5$$for $0^\\circ \\le \\theta \\le 180^\\circ$. [7]",
  "steps": [
    "<strong>Step 1: Find the bounding limits of the region for part (a)</strong><br><br>The boundary limits are the $x$-intercepts of the curve. Set $y = 0$ and factorise the quadratic equation:\\begin{aligned} x^2 - 4x &= 0 \\cr x(x - 4) &= 0 \\cr x &= 0 \\text{ or } x = 4 \\end{aligned}The integration limits are therefore $0$ and $4$.",
    "<strong>Step 2: Set up and calculate the definite integral</strong><br><br>Integrate the expression $(x^2 - 4x)$ with respect to $x$:\\begin{aligned} \\int (x^2 - 4x) \\text{d}x &= \\dfrac{x^3}{3} - \\dfrac{4x^2}{2} \\cr &= \\dfrac{x^3}{3} - 2x^2 \\end{aligned}",
    "<strong>Step 3: Evaluate the definite integral</strong><br><br>Substitute your limits of $0$ and $4$ into the integrated expression:\\begin{aligned} \\left[ \\dfrac{x^3}{3} - 2x^2 \\right]_{0}^{4} &= \\left( \\dfrac{4^3}{3} - 2(4)^2 \\right) - 0 \\cr &= \\dfrac{64}{3} - 32 \\cr &= \\dfrac{64}{3} - \\dfrac{96}{3} \\cr &= -\\dfrac{32}{3} \\end{aligned}",
    "<strong>Step 4: State the final area</strong><br><br>Because the curve lies entirely below the $x$-axis on the interval $(0, 4)$, the integral is negative. Area is always positive, so we take the absolute value:$$\\text{Area} = \\dfrac{32}{3}$$",
    "<strong>Step 5: Define a substituted variable and adjust the interval for part (b)</strong><br><br>For the equation $\\cos(2\\theta + 40^\\circ) = -0.5$, let $\\phi = 2\\theta + 40^\\circ$.<br><br>Since $0^\\circ \\le \\theta \\le 180^\\circ$, adjust the limits for $\\phi$:\\begin{aligned} 2(0^\\circ) + 40^\\circ &\\le 2\\theta + 40^\\circ \\cr &\\le 2(180^\\circ) + 40^\\circ \\cr \\implies 40^\\circ &\\le \\phi \\le 400^\\circ \\end{aligned}",
    "<strong>Step 6: Solve for $\\phi$ and convert back to $\\theta$</strong><br><br>Solve $\\cos \\phi = -0.5$ within the interval $40^\\circ \\le \\phi \\le 400^\\circ$. The principal angles are:$$\\phi = 120^\\circ, 240^\\circ$$Now calculate the values of $\\theta$ using $2\\theta + 40^\\circ = \\phi$:<br><br>For $\\phi = 120^\\circ$:\\begin{aligned} 2\\theta + 40^\\circ &= 120^\\circ \\cr 2\\theta &= 80^\\circ \\cr \\theta &= 40^\\circ \\end{aligned}For $\\phi = 240^\\circ$:\\begin{aligned} 2\\theta + 40^\\circ &= 240^\\circ \\cr 2\\theta &= 200^\\circ \\cr \\theta &= 100^\\circ \\end{aligned}The final solutions are $\\theta = 40^\\circ, 100^\\circ$.",
    "Final Answer:\\begin{aligned} &\\text{(a) Area} = \\dfrac{32}{3} \\cr &\\text{(b) } \\theta = 40^\\circ, 100^\\circ \\end{aligned}"
  ],
  "pi_options": [
    {
      "ans": "\\begin{aligned} &\\text{(a) Area} = -\\dfrac{32}{3} \\cr &\\text{(b) } \\theta = 40^\\circ, 100^\\circ \\end{aligned}",
      "feedback": "Area is a physical measure and must always be stated as a positive quantity. Even though the definite integral yielded $-\\dfrac{32}{3}$ because the region lies below the $x$-axis, you must drop the negative sign when stating the area."
    },
    {
      "ans": "\\begin{aligned} &\\text{(a) Area} = \\dfrac{32}{3} \\cr &\\text{(b) } \\theta = 10^\\circ, 70^\\circ \\end{aligned}",
      "feedback": "You forgot to adjust the range for the substituted angle $\\phi$ in step 5, or you made a subtraction error when converting $\\phi$ back to $\\theta$ (e.g., dividing by 2 before subtracting 40)."
    },
    {
      "ans": "\\begin{aligned} &\\text{(a) Area} = 8 \\cr &\\text{(b) } \\theta = 40^\\circ, 100^\\circ \\end{aligned}",
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
  "group_id": "004406",
  "board": "CCEA",
  "branch": "Pure",
  "level": "AS",
  "major_area": "Integration",
  "topic": "Trigonometry",
  "subtopic": [
        "Definite Integration",
        "Trigonometric Equations"
  ],
  "img": false,
  "question": "<strong>(a)</strong> Given that$$\\int_{1}^{4} \\left( 2x + \\dfrac{a}{\\sqrt{x}} \\right) \\text{d}x = 21$$find the value of the constant $a$. [6]<br><br><strong>(b)</strong> Solve the equation$$4\\cos^2 \\theta + 5\\cos \\theta + 1 = 0$$for $0^\\circ \\le \\theta \\le 360^\\circ$. [7]",
  "steps": [
    "<strong>Step 1: Rewrite and integrate the function in part (a)</strong><br><br>Rewrite the term $\\dfrac{a}{\\sqrt{x}}$ in index form as $ax^{-1/2}$. Now integrate the entire expression with respect to $x$:\\begin{aligned} \\int (2x + ax^{-1/2}) \\text{d}x &= x^2 + a \\cdot \\dfrac{x^{1/2}}{1/2} \\cr &= x^2 + 2a\\sqrt{x} \\end{aligned}",
    "<strong>Step 2: Apply the limits of integration</strong><br><br>Substitute the integration boundaries of $1$ and $4$ and set the resulting expression equal to $21$:\\begin{aligned} \\big[ x^2 + 2a\\sqrt{x} \\big]_{1}^{4} &= 21 \\cr (4^2 + 2a\\sqrt{4}) \\cr &\\quad - (1^2 + 2a\\sqrt{1}) = 21 \\cr (16 + 4a) - (1 + 2a) &= 21 \\cr 15 + 2a &= 21 \\end{aligned}",
    "<strong>Step 3: Solve for the constant $a$</strong><br><br>Solve the linear equation to find the value of $a$:\\begin{aligned} 2a &= 6 \\cr a &= 3 \\end{aligned}",
    "<strong>Step 4: Factorise the quadratic trigonometric equation in part (b)</strong><br><br>The equation $4\\cos^2 \\theta + 5\\cos \\theta + 1 = 0$ is a quadratic in terms of $\\cos \\theta$. Let $u = \\cos \\theta$ and factorise the quadratic expression:\\begin{aligned} 4u^2 + 5u + 1 &= 0 \\cr (4u + 1)(u + 1) &= 0 \\cr u &= -\\dfrac{1}{4} \\text{ or } u = -1 \\end{aligned}",
    "<strong>Step 5: Solve for the angles within the interval</strong><br><br>Substitute back $u = \\cos \\theta$ and find the values of $\\theta$ in the range $0^\\circ \\le \\theta \\le 360^\\circ$:<br><br>For $\\cos \\theta = -1$:$$\\theta = 180.0^\\circ$$For $\\cos \\theta = -\\dfrac{1}{4}$:<br><br>The acute reference angle is $\\alpha = \\cos^{-1}\\left( \\dfrac{1}{4} \\right) \\approx 75.5^\\circ$. Since cosine is negative, the angles lie in quadrants II and III:\\begin{aligned} \\theta &= 180^\\circ - 75.5^\\circ \\cr &= 104.5^\\circ \\cr \\theta &= 180^\\circ + 75.5^\\circ \\cr &= 255.5^\\circ \\end{aligned}The final solutions (to the nearest tenth of a degree) are: $\\theta \\approx 104.5^\\circ, 180.0^\\circ, 255.5^\\circ$.",
    "Final Answer:\\begin{aligned} &\\text{(a) } a = 3 \\cr &\\text{(b) } \\theta \\approx 104.5^\\circ, 180.0^\\circ, 255.5^\\circ \\end{aligned}"
  ],
  "pi_options": [
    {
      "ans": "\\begin{aligned} &\\text{(a) } a = 1.5 \\cr &\\text{(b) } \\theta \\approx 104.5^\\circ, 180.0^\\circ, 255.5^\\circ \\end{aligned}",
      "feedback": "You integrated $ax^{-1/2}$ incorrectly as $ax^{1/2}$ instead of $2ax^{1/2}$, forgetting to divide by the new fractional power of $\\dfrac{1}{2}$."
    },
    {
      "ans": "\\begin{aligned} &\\text{(a) } a = 3 \\cr &\\text{(b) } \\theta \\approx 75.5^\\circ, 180.0^\\circ, 284.5^\\circ \\end{aligned}",
      "feedback": "You solved $\\cos \\theta = \\dfrac{1}{4}$ as a positive ratio, placing your solutions in quadrants I and IV instead of the correct quadrants II and III where cosine is negative."
    },
    {
      "ans": "\\begin{aligned} &\\text{(a) } a = 6 \\cr &\\text{(b) } \\theta \\approx 104.5^\\circ, 180.0^\\circ, 255.5^\\circ \\end{aligned}",
      "feedback": "You made a simple sign-algebra mistake during step 2, such as expanding $(16 + 4a) - (1 + 2a)$ as $15 + 1a = 21$ or adding terms incorrectly."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Integrating Reciprocal Square Roots",
    "content": "A very common integration term is $\\dfrac{1}{\\sqrt{x}} = x^{-1/2}$. Integrating this yields $\\dfrac{x^{1/2}}{1/2} = 2\\sqrt{x}$. Memorising that $\\int \\dfrac{1}{\\sqrt{x}} \\text{d}x = 2\\sqrt{x}$ can save you valuable time and prevent division-by-fraction errors in your exam."
  }
},
  {
    "id": "004411",
    "group_id": "004411",
    "board": "CCEA",
    "branch": "Pure",
    "level": "AS",
    "major_area": "Differentiation",
    "topic": "Applications of Differentiation",
    "subtopic": [
      "Geometry: Solids",
      "Maximum Volume"
    ],
    "img": false,
    "question": "An open container in the shape of a cylinder has a base radius $r$ cm and height $h$ cm. The total surface area of the container is $108\\pi \\text{ cm}^2$.<br><br><strong>(a)</strong> Express $h$ in terms of $r$. [4]<br><br><strong>(b)</strong> Hence show that the volume of the container, $V\\text{ cm}^3$, can be expressed as:$$V = 54\\pi r - \\dfrac{1}{2}\\pi r^3$$[3]<br><br><strong>(c)</strong> Using calculus, find the values of $r$ and $h$ for which the volume of the container is a maximum. [6]",
    "steps": [
      "<strong>Step 1: Set up the surface area equation for part (a)</strong><br><br>The surface area of an open cylinder consists of the area of the circular base and the curved surface area. Setting this equal to $108\\pi$:\\begin{aligned} \\pi r^2 + 2\\pi rh &= 108\\pi \\cr r^2 + 2rh &= 108 \\end{aligned}",
      "<strong>Step 2: Express $h$ in terms of $r$</strong><br><br>Rearrange the surface area equation to isolate $h$:\\begin{aligned} 2rh &= 108 - r^2 \\cr h &= \\dfrac{108 - r^2}{2r} \\end{aligned}",
      "<strong>Step 3: Substitute $h$ to find the volume in part (b)</strong><br><br>The volume $V$ of a cylinder is given by $V = \\pi r^2 h$. Substitute the expression for $h$ from Step 2 into the volume formula:\\begin{aligned} V &= \\pi r^2 \\left( \\dfrac{108 - r^2}{2r} \\right) \\cr &= \\dfrac{\\pi r (108 - r^2)}{2} \\cr &= 54\\pi r - \\dfrac{1}{2}\\pi r^3 \\end{aligned}",
      "<strong>Step 4: Differentiate the volume function with respect to $r$ in part (c)</strong><br><br>To find the value of $r$ that maximises the volume, differentiate $V$ with respect to $r$:\\begin{aligned} \\dfrac{\\text{d}V}{\\text{d}r} &= \\dfrac{\\text{d}}{\\text{d}r}\\left( 54\\pi r - \\dfrac{1}{2}\\pi r^3 \\right) \\cr &= 54\\pi - \\dfrac{3}{2}\\pi r^2 \\end{aligned}",
      "<strong>Step 5: Set the derivative equal to zero to find stationary points</strong><br><br>Set $\\dfrac{\\text{d}V}{\\text{d}r} = 0$ to find the stationary values of $r$:\\begin{aligned} 54\\pi - \\dfrac{3}{2}\\pi r^2 &= 0 \\cr 54 - \\dfrac{3}{2}r^2 &= 0 \\cr \\dfrac{3}{2}r^2 &= 54 \\cr r^2 &= 36 \\cr r &= 6 \\end{aligned}Since $r$ is a physical radius, we discard $r = -6$ and keep $r = 6$ cm.",
      "<strong>Step 6: Find the corresponding height $h$ and verify the maximum</strong><br><br>Substitute $r = 6$ back into the expression for $h$:\\begin{aligned} h &= \\dfrac{108 - 6^2}{2(6)} \\cr &= \\dfrac{72}{12} \\cr &= 6 \\text{ cm} \\end{aligned}To verify that this is a maximum, find the second derivative:\\begin{aligned} \\dfrac{\\text{d}^2V}{\\text{d}r^2} = -3\\pi r \\end{aligned}Substituting $r = 6$ yields $-18\\pi < 0$, which confirms that the volume is indeed a maximum at $r = 6$ cm and $h = 6$ cm.",
      "<strong>Final Answer</strong><br><strong>(a)</strong> $h = \\dfrac{108 - r^2}{2r}$ <br><strong>(c)</strong> $r = 6\\text{ cm}, h = 6\\text{ cm}$"
    ],
    "pi_options": [
      {
        "ans": "<strong>(a)</strong> $h = \\dfrac{108 - r^2}{2r}$ <br><strong>(c)</strong> $r = 6\\text{ cm}, h = 3\\text{ cm}$",
        "feedback": "Your expression for $h$ in part (a) is correct, but you made an error when calculating the numerical value for $h$ in part (c), perhaps by forgetting the factor of 2 in the denominator when substituting $r=6$."
      },
      {
        "ans": "<strong>(a)</strong> $h = \\dfrac{108 - r^2}{r}$ <br><strong>(c)</strong> $r = 12\\text{ cm}, h = -1.5\\text{ cm}$",
        "feedback": "In part (a), you missed the factor of 2 from the $2rh$ term in the surface area. This led to an incorrect volume function and a physically impossible negative height in part (c)."
      },
      {
        "ans": "<strong>(a)</strong> $h = \\dfrac{108 - 2r^2}{2r}$ <br><strong>(c)</strong> $r = 6\\text{ cm}, h = 12\\text{ cm}$",
        "feedback": "You used the closed cylinder surface area formula $2\\pi r^2 + 2\\pi rh$ in part (a) instead of the open cylinder formula $\\pi r^2 + 2\\pi rh$. This error changed the relationship between $r$ and $h$."
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
    "group_id": "004411",
    "board": "CCEA",
    "branch": "Pure",
    "level": "AS",
    "major_area": "Differentiation",
    "topic": "Applications of Differentiation",
    "subtopic": [
      "Geometry: Solids",
      "Maximum Volume"
    ],
    "img": false,
    "question": "A closed metal cylinder (with a circular top and bottom) has a base radius $r$ cm and height $h$ cm. The total surface area of the cylinder is $150\\pi \\text{ cm}^2$.<br><br><strong>(a)</strong> Express $h$ in terms of $r$. [4]<br><br><strong>(b)</strong> Hence show that the volume of the cylinder, $V\\text{ cm}^3$, is given by:$$V = 75\\pi r - \\pi r^3$$[3]<br><br><strong>(c)</strong> Using calculus, find the values of $r$ and $h$ for which the volume of the cylinder is a maximum. [6]",
    "steps": [
      "<strong>Step 1: Set up the surface area equation for part (a)</strong><br><br>Since the cylinder is closed, it has both a base and a top lid. Its total surface area is the sum of the curved surface area and the areas of both circular faces:\\begin{aligned} 2\\pi r^2 + 2\\pi rh &= 150\\pi \\cr 2r^2 + 2rh &= 150 \\cr r^2 + rh &= 75 \\end{aligned}",
      "<strong>Step 2: Express $h$ in terms of $r$</strong><br><br>Isolate $h$ in the simplified equation:\\begin{aligned} rh &= 75 - r^2 \\cr h &= \\dfrac{75 - r^2}{r} \\end{aligned}",
      "<strong>Step 3: Substitute $h$ into the volume formula for part (b)</strong><br><br>The volume $V$ of a cylinder is $V = \\pi r^2 h$. Substitute the expression for $h$:\\begin{aligned} V &= \\pi r^2 \\left( \\dfrac{75 - r^2}{r} \\right) \\cr &= \\pi r (75 - r^2) \\cr &= 75\\pi r - \\pi r^3 \\end{aligned}",
      "<strong>Step 4: Differentiate the volume function with respect to $r$ in part (c)</strong><br><br>To find the dimensions that maximise the volume, differentiate $V$ with respect to $r$:\\begin{aligned} \\dfrac{\\text{d}V}{\\text{d}r} &= \\dfrac{\\text{d}}{\\text{d}r}(75\\pi r - \\pi r^3) \\cr &= 75\\pi - 3\\pi r^2 \\end{aligned}",
      "<strong>Step 5: Set the derivative equal to zero to find stationary points</strong><br><br>Set $\\dfrac{\\text{d}V}{\\text{d}r} = 0$ and solve for $r$:\\begin{aligned} 75\\pi - 3\\pi r^2 &= 0 \\cr 75 - 3r^2 &= 0 \\cr 3r^2 &= 75 \\cr r^2 &= 25 \\cr r &= 5 \\end{aligned}Discard $r = -5$ because the radius must be positive. Thus, $r = 5$ cm.",
      "<strong>Step 6: Find the height $h$ and verify the maximum</strong><br><br>Substitute $r = 5$ back into the height equation:\\begin{aligned} h &= \\dfrac{75 - 5^2}{5} \\cr &= \\dfrac{50}{5} \\cr &= 10 \\text{ cm} \\end{aligned}To verify that this point is a maximum, check the sign of the second derivative:\\begin{aligned} \\dfrac{\\text{d}^2V}{\\text{d}r^2} = -6\\pi r \\end{aligned}At $r = 5$, this equals $-30\\pi < 0$, confirming a maximum. Thus, max volume is achieved at $r = 5$ cm and $h = 10$ cm.",
      "<strong>Final Answer</strong><br><strong>(a)</strong> $h = \\dfrac{75 - r^2}{r}$ <br><strong>(c)</strong> $r = 5\\text{ cm}, h = 10\\text{ cm}$"
    ],
    "pi_options": [
      {
        "ans": "<strong>(a)</strong> $h = \\dfrac{75 - r^2}{r}$ <br><strong>(c)</strong> $r = 5\\text{ cm}, h = 5\\text{ cm}$",
        "feedback": "Your rearrangement in part (a) is correct for a closed cylinder. However, in part (c), you have calculated a height that does not match the $h = 2r$ ratio expected for a closed cylinder of maximum volume."
      },
      {
        "ans": "<strong>(a)</strong> $h = \\dfrac{150 - r^2}{2r}$ <br><strong>(c)</strong> $r = 5\\text{ cm}, h = 6.25\\text{ cm}$",
        "feedback": "In part (a), you mistakenly used the open cylinder formula $\\pi r^2 + 2\\pi rh$. This cylinder is closed, meaning it has two circular ends, so the surface area is $2\\pi r^2 + 2\\pi rh$."
      },
      {
        "ans": "<strong>(a)</strong> $h = \\dfrac{75 - r^2}{r}$ <br><strong>(c)</strong> $r = 15\\text{ cm}, h = 10\\text{ cm}$",
        "feedback": "While your expression for $h$ is correct, you made an arithmetic error in part (c) when solving $3r^2 = 75$. Dividing 75 by 3 gives 25, so $r = 5$, not 15."
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
    "group_id": "004411",
    "board": "CCEA",
    "branch": "Pure",
    "level": "AS",
    "major_area": "Differentiation",
    "topic": "Applications of Differentiation",
    "subtopic": [
      "Geometry: Solids",
      "Minimum Surface Area"
    ],
    "img": false,
    "question": "An open-topped rectangular storage box is to be constructed with a square base of side length $x$ cm and height $y$ cm. The total surface area of the box is $432\\text{ cm}^2$.<br><br><strong>(a)</strong> Express $y$ in terms of $x$. [4]<br><br><strong>(b)</strong> Hence show that the volume of the box, $V\\text{ cm}^3$, can be expressed as:$$V = 108x - \\dfrac{1}{4}x^3$$[3]<br><br><strong>(c)</strong> Using calculus, find the values of $x$ and $y$ for which the volume of the box is a maximum. [6]",
    "steps": [
      "<strong>Step 1: Set up the surface area equation for part (a)</strong><br><br>An open-topped box with a square base has 1 square bottom of area $x^2$, and 4 vertical rectangular sides of area $xy$ each. Setting this total area equal to $432$:\\begin{aligned} x^2 + 4xy = 432 \\end{aligned}",
      "<strong>Step 2: Express $y$ in terms of $x$</strong><br><br>Rearrange this equation to isolate the height $y$:\\begin{aligned} 4xy &= 432 - x^2 \\cr y &= \\dfrac{432 - x^2}{4x} \\end{aligned}",
      "<strong>Step 3: Substitute $y$ into the volume formula for part (b)</strong><br><br>The volume $V$ of a cuboid is given by $\\text{base area} \\times \\text{height}$, which is $V = x^2 y$. Substitute the expression for $y$:\\begin{aligned} V &= x^2 \\left( \\dfrac{432 - x^2}{4x} \\right) \\cr &= \\dfrac{x(432 - x^2)}{4} \\cr &= 108x - \\dfrac{1}{4}x^3 \\end{aligned}",
      "<strong>Step 4: Differentiate the volume function with respect to $x$ in part (c)</strong><br><br>To find the values of $x$ and $y$ that maximise the volume, differentiate $V$ with respect to $x$:\\begin{aligned} \\dfrac{\\text{d}V}{\\text{d}x} &= \\dfrac{\\text{d}}{\\text{d}x}\\left( 108x - \\dfrac{1}{4}x^3 \\right) \\cr &= 108 - \\dfrac{3}{4}x^2 \\end{aligned}",
      "<strong>Step 5: Set the derivative equal to zero to find the stationary base length</strong><br><br>Set $\\dfrac{\\text{d}V}{\\text{d}x} = 0$ to locate the stationary point:\\begin{aligned} 108 - \\dfrac{3}{4}x^2 &= 0 \\cr \\dfrac{3}{4}x^2 &= 108 \\cr 3x^2 &= 432 \\cr x^2 &= 144 \\cr x &= 12 \\end{aligned}Since a physical length must be positive, we discard $x = -12$ to get $x = 12$ cm.",
      "<strong>Step 6: Determine the height $y$ and verify the maximum</strong><br><br>Substitute $x = 12$ back into the expression for $y$:\\begin{aligned} y &= \\dfrac{432 - 12^2}{4(12)} \\cr &= \\dfrac{432 - 144}{48} \\cr &= \\dfrac{288}{48} \\cr &= 6 \\text{ cm} \\end{aligned}To verify that this point yields a maximum volume, calculate the second derivative:\\begin{aligned} \\dfrac{\\text{d}^2V}{\\text{d}x^2} = -\\dfrac{3}{2}x \\end{aligned}At $x = 12$, we have $-18 < 0$, which confirms that the volume is a maximum. Thus, maximum volume is achieved when $x = 12$ cm and $y = 6$ cm.",
      "<strong>Final Answer</strong><br><strong>(a)</strong> $y = \\dfrac{432 - x^2}{4x}$ <br><strong>(c)</strong> $x = 12\\text{ cm}, y = 6\\text{ cm}$"
    ],
    "pi_options": [
      {
        "ans": "<strong>(a)</strong> $y = \\dfrac{432 - 2x^2}{4x}$ <br><strong>(c)</strong> $x = 12\\text{ cm}, y = 12\\text{ cm}$",
        "feedback": "In part (a), you used the closed box formula $2x^2 + 4xy$. However, this is an open-topped box, so it only has one square base, meaning the surface area should be $x^2 + 4xy$."
      },
      {
        "ans": "<strong>(a)</strong> $y = \\dfrac{432 - x^2}{4x}$ <br><strong>(c)</strong> $x = 6\\text{ cm}, y = 16.5\\text{ cm}$",
        "feedback": "Your expression for $y$ in part (a) is correct, but you made a differentiation error in part (c) when calculating $x$, resulting in the wrong dimensions for the maximum volume."
      },
      {
        "ans": "<strong>(a)</strong> $y = \\dfrac{432 - x^2}{4x}$ <br><strong>(c)</strong> $x = 12\\text{ cm}, y = 9\\text{ cm}$",
        "feedback": "While you correctly expressed $y$ in terms of $x$, you made an arithmetic slip in the final calculation of $y$ in part (c), perhaps by failing to correctly subtract $x^2$ before dividing."
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
    "group_id": "004411",
    "board": "CCEA",
    "branch": "Pure",
    "level": "AS",
    "major_area": "Differentiation",
    "topic": "Applications of Differentiation",
    "subtopic": [
      "Geometry: Solids",
      "Minimum Surface Area"
    ],
    "img": false,
    "question": "A closed rectangular packaging box has a square base of side length $x$ cm and height $y$ cm. The volume of the box is fixed at $216\\text{ cm}^3$.<br><br><strong>(a)</strong> Express $y$ in terms of $x$. [3]<br><br><strong>(b)</strong> Hence show that the total surface area of the box, $A\\text{ cm}^2$, can be expressed as:$$A = 2x^2 + \\dfrac{864}{x}$$[4]<br><br><strong>(c)</strong> Using calculus, find the minimum surface area of the box. [6]",
    "steps": [
      "<strong>Step 1: Set up the volume constraint for part (a)</strong><br><br>The volume of a closed box with a square base is given by $V = x^2 y$. Since the volume is fixed at $216$:\\begin{aligned} x^2 y &= 216 \\cr y &= \\dfrac{216}{x^2} \\end{aligned}",
      "<strong>Step 2: Express the surface area in terms of $x$ for part (b)</strong><br><br>The total surface area $A$ of a closed rectangular box is the sum of the top and bottom areas ($2x^2$) and the four rectangular side faces ($4xy$):\\begin{aligned} A &= 2x^2 + 4xy \\end{aligned}Substitute $y = \\dfrac{216}{x^2}$ into this formula:\\begin{aligned} A &= 2x^2 + 4x\\left( \\dfrac{216}{x^2} \\right) \\cr &= 2x^2 + \\dfrac{864}{x} \\end{aligned}",
      "<strong>Step 3: Differentiate the surface area function in part (c)</strong><br><br>To find the value of $x$ that minimises the surface area, write the function as $A = 2x^2 + 864x^{-1}$ and differentiate with respect to $x$:\\begin{aligned} \\dfrac{\\text{d}A}{\\text{d}x} &= \\dfrac{\\text{d}}{\\text{d}x}(2x^2 + 864x^{-1}) \\cr &= 4x - 864x^{-2} \\cr &= 4x - \\dfrac{864}{x^2} \\end{aligned}",
      "<strong>Step 4: Set the derivative to zero to find the optimal base length $x$</strong><br><br>Set $\\dfrac{\\text{d}A}{\\text{d}x} = 0$ to find the optimal base length $x$:\\begin{aligned} 4x - \\dfrac{864}{x^2} &= 0 \\cr 4x &= \\dfrac{864}{x^2} \\cr 4x^3 &= 864 \\cr x^3 &= 216 \\cr x &= 6 \\end{aligned}So the optimal base length is $x = 6$ cm.",
      "<strong>Step 5: Verify that this stationary point represents a minimum</strong><br><br>Find the second derivative of the surface area function:\\begin{aligned} \\dfrac{\\text{d}^2A}{\\text{d}x^2} &= 4 + 1728x^{-3} \\cr &= 4 + \\dfrac{1728}{x^3} \\end{aligned}Substituting $x = 6$ gives $4 + \\dfrac{1728}{216} = 12$, which is $> 0$. Since the second derivative is positive, this represents a local minimum.",
      "<strong>Step 6: Calculate the minimum surface area of the box</strong><br><br>Substitute $x = 6$ back into the surface area equation to find $A_{\\min}$:\\begin{aligned} A_{\\min} &= 2(6)^2 + \\dfrac{864}{6} \\cr &= 2(36) + 144 \\cr &= 72 + 144 \\cr &= 216 \\text{ cm}^2 \\end{aligned}The minimum surface area of the packaging box is $216 \\text{ cm}^2$ (achieved when $x = 6$ cm and $y = 6$ cm).",
      "<strong>Final Answer</strong><br><strong>(a)</strong> $y = \\dfrac{216}{x^2}$ <br><strong>(c)</strong> $A_{\\min} = 216\\text{ cm}^2$"
    ],
    "pi_options": [
      {
        "ans": "<strong>(a)</strong> $y = \\dfrac{216}{x^2}$ <br><strong>(c)</strong> $A_{\\min} = 144\\text{ cm}^2$",
        "feedback": "Your expression for $y$ is correct, but you used the area formula for an open-topped box ($x^2 + 4xy$) in part (c) rather than the closed box formula required by the question."
      },
      {
        "ans": "<strong>(a)</strong> $y = \\dfrac{108}{x^2}$ <br><strong>(c)</strong> $A_{\\min} = 216\\text{ cm}^2$ (with $x = 3\\text{ cm}$)",
        "feedback": "In part (a), your substitution logic was flawed. In part (c), you made an algebraic error when solving $4x^3 = 864$, leading to an incorrect base length $x=3$."
      },
      {
        "ans": "<strong>(a)</strong> $y = \\dfrac{216}{x^2}$ <br><strong>(c)</strong> $A_{\\min} = 180\\text{ cm}^2$",
        "feedback": "While you correctly expressed $y$ and found $x = 6$, you made an arithmetic slip in the final calculation of the area $A$ in part (c)."
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
    "group_id": "004411",
    "board": "CCEA",
    "branch": "Pure",
    "level": "AS",
    "major_area": "Differentiation",
    "topic": "Applications of Differentiation",
    "subtopic": [
      "Maximum Area"
    ],
    "img": false,
    "question": "A rectangular sheep pen is to be constructed against a long, straight stone wall using exactly $120\\text{ m}$ of fencing wire for the remaining three sides. The pen has width $x\\text{ m}$ (perpendicular to the wall) and length $y\\text{ m}$ (parallel to the wall).<br><br><strong>(a)</strong> Express $y$ in terms of $x$. [3]<br><br><strong>(b)</strong> Hence show that the area of the pen, $A\\text{ m}^2$, is given by:$$A = 120x - 2x^2$$[3]<br><br><strong>(c)</strong> Using calculus, find the maximum possible area of the pen and the dimensions $x$ and $y$ that produce this maximum. [7]",
    "steps": [
      "<strong>Step 1: Set up the perimeter constraint for part (a)</strong><br><br>Since the stone wall forms one of the lengths of the rectangle, only three sides require fencing wire: two widths ($x$) and one length ($y$). Set the total length of fencing equal to $120$:\\begin{aligned} 2x + y = 120 \\end{aligned}",
      "<strong>Step 2: Express $y$ in terms of $x$</strong><br><br>Isolate $y$ in the linear equation:\\begin{aligned} y = 120 - 2x \\end{aligned}",
      "<strong>Step 3: Find the area formula for part (b)</strong><br><br>The area $A$ of a rectangle is given by $\\text{width} \\times \\text{length}$, which is $A = xy$. Substitute the expression for $y$ from Step 2 into the area equation:\\begin{aligned} A &= x(120 - 2x) \\cr &= 120x - 2x^2 \\end{aligned}",
      "<strong>Step 4: Differentiate the area function with respect to $x$ in part (c)</strong><br><br>To find the maximum area, differentiate $A$ with respect to $x$:\\begin{aligned} \\dfrac{\\text{d}A}{\\text{d}x} &= \\dfrac{\\text{d}}{\\text{d}x}(120x - 2x^2) \\cr &= 120 - 4x \\end{aligned}",
      "<strong>Step 5: Locate the stationary point</strong><br><br>Set $\\dfrac{\\text{d}A}{\\text{d}x} = 0$ to find the width that produces a stationary area:\\begin{aligned} 120 - 4x &= 0 \\cr 4x &= 120 \\cr x &= 30 \\end{aligned}To verify that this yields a maximum area, find the second derivative:\\begin{aligned} \\dfrac{\\text{d}^2A}{\\text{d}x^2} = -4 \\end{aligned}Since $-4 < 0$ for all values of $x$, this stationary point is confirmed to be a maximum.",
      "<strong>Step 6: Find the corresponding dimensions and the maximum area</strong><br><br>Substitute $x = 30$ back into the linear expression for the length $y$:\\begin{aligned} y &= 120 - 2(30) \\cr &= 120 - 60 \\cr &= 60 \\text{ m} \\end{aligned}Now calculate the maximum area $A_{\\max}$:\\begin{aligned} A_{\\max} &= xy \\cr &= (30)(60) \\cr &= 1800 \\text{ m}^2 \\end{aligned}The maximum area of the sheep pen is $1800 \\text{ m}^2$, with dimensions $x = 30$ m and $y = 60$ m.",
      "<strong>Final Answer</strong><br><strong>(a)</strong> $y = 120 - 2x$ <br><strong>(c)</strong> $A_{\\max} = 1800\\text{ m}^2, x = 30\\text{ m}, y = 60\\text{ m}$"
    ],
    "pi_options": [
      {
        "ans": "<strong>(a)</strong> $y = 120 - 2x$ <br><strong>(c)</strong> $A_{\\max} = 1800\\text{ m}^2, x = 30\\text{ m}, y = 30\\text{ m}$",
        "feedback": "Your expression for $y$ in part (a) is correct, but you assumed the optimal shape must be a square ($x=y=30$) in part (c). This is only true if four sides are fenced; against a wall, the length $y$ should be $2x$."
      },
      {
        "ans": "<strong>(a)</strong> $y = 60 - x$ <br><strong>(c)</strong> $A_{\\max} = 900\\text{ m}^2, x = 30\\text{ m}, y = 30\\text{ m}$",
        "feedback": "In part (a), you used the four-sided perimeter formula $2x+2y=120$. Since the wall is one side, the wire only covers $2x+y=120$. This error led to an incorrect area in part (c)."
      },
      {
        "ans": "<strong>(a)</strong> $y = 120 - 2x$ <br><strong>(c)</strong> $A_{\\max} = 1800\\text{ m}^2, x = 40\\text{ m}, y = 40\\text{ m}$",
        "feedback": "You correctly identified $y$ in part (a), but made a differentiation slip in part (c) when calculating the stationary point for the maximum area."
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
  "group_id": "004416",
  "board": "CCEA",
  "branch": "Pure",
  "level": "AS",
  "major_area": "Algebra and Functions",
  "topic": "Algebraic Methods",
  "subtopic": [
        "Solving Cubic Equations"
  ],
  "img": false,
  "question": "Solve the cubic equation:$$2x^3 - 10x^2 + 11x + 3 = 0$$[8]",
  "steps": [
    "<strong>Step 1: Test values using the Factor Theorem</strong><br><br>We must find an integer value of $x$ that satisfies the equation $2x^3 - 10x^2 + 11x + 3 = 0$. Test potential factors of the constant term $3$ (such as $\\pm 1, \\pm 3$):<br><br>Let $f(x) = 2x^3 - 10x^2 + 11x + 3$.<br><br>Test $x = 3$:\\begin{aligned} &f(3) \\cr &\\quad = 2(3)^3 - 10(3)^2 \\cr &\\qquad + 11(3) + 3 \\cr &\\quad = 54 - 90 + 33 + 3 \\cr &\\quad = 0 \\end{aligned}Since $f(3) = 0$, the Factor Theorem states that $(x - 3)$ is a factor of the polynomial.",
    "<strong>Step 2: Perform polynomial division</strong><br><br>Divide the cubic polynomial by $(x - 3)$ to find the remaining quadratic factor:\\begin{aligned} &2x^3 - 10x^2 + 11x + 3 \\cr &\\quad = (x - 3)(2x^2 - 4x - 1) \\end{aligned}",
    "<strong>Step 3: Solve the remaining quadratic equation</strong><br><br>Set the quadratic factor equal to zero to find the other roots:$$2x^2 - 4x - 1 = 0$$Using the quadratic formula with $a=2$, $b=-4$, and $c=-1$:\\begin{aligned} x &= \\dfrac{4 \\pm \\sqrt{16 + 8}}{4} \\cr &= \\dfrac{4 \\pm \\sqrt{24}}{4} \\cr &= \\dfrac{4 \\pm 2\\sqrt{6}}{4} \\cr &= \\dfrac{2 \\pm \\sqrt{6}}{2} \\end{aligned}",
    "<strong>Step 4: State all solutions</strong><br><br>The complete set of solutions to the cubic equation is:\\begin{aligned} x &= 3 \\cr x &= \\dfrac{2 + \\sqrt{6}}{2} \\cr x &= \\dfrac{2 - \\sqrt{6}}{2} \\end{aligned}",
    "Final Answer:\\begin{aligned} &x = 3 \\cr &x = \\dfrac{2 \\pm \\sqrt{6}}{2} \\end{aligned}"
  ],
  "pi_options": [
    {
      "ans": "\\begin{aligned} &x = 3 \\cr &x = \\dfrac{2 \\pm \\sqrt{2}}{2} \\end{aligned}",
      "feedback": "You may have made an arithmetic error when calculating the discriminant under the square root. Check that you used $b^2 - 4ac = 16 - 4(2)(-1)$, which gives $16 + 8 = 24$, rather than mistakenly subtracting the 8 to get $16 - 8 = 8$."
    },
    {
      "ans": "\\begin{aligned} &x = -3 \\cr &x = \\dfrac{2 \\pm \\sqrt{6}}{2} \\end{aligned}",
      "feedback": "You may have made a sign error when finding your initial linear factor. Since $f(3) = 0$, your linear factor is $(x - 3)$, which yields a root of $x = 3$ (not $x = -3$)."
    },
    {
      "ans": "\\begin{aligned} &x = 3 \\cr &x = \\dfrac{4 \\pm \\sqrt{6}}{2} \\end{aligned}",
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
  "group_id": "004416",
  "board": "CCEA",
  "branch": "Pure",
  "level": "AS",
  "major_area": "Algebra and Functions",
  "topic": "Algebraic Methods",
 "subtopic": [
        "Solving Cubic Equations"
  ],
  "img": false,
  "question": "Solve the cubic equation:$$3x^3 + 4x^2 - 6x - 4 = 0$$[8]",
  "steps": [
    "<strong>Step 1: Test values using the Factor Theorem</strong><br><br>Let $f(x) = 3x^3 + 4x^2 - 6x - 4$. Test factors of the constant term $-4$ (such as $\\pm 1, \\pm 2, \\pm 4$):<br><br>Test $x = -2$:\\begin{aligned} &f(-2) \\cr &\\quad = 3(-2)^3 + 4(-2)^2 \\cr &\\qquad - 6(-2) - 4 \\cr &\\quad = -24 + 16 + 12 - 4 \\cr &\\quad = 0 \\end{aligned}Since $f(-2) = 0$, $(x + 2)$ is a factor of the polynomial.",
    "<strong>Step 2: Perform polynomial division</strong><br><br>Divide the cubic polynomial by $(x + 2)$ to obtain the remaining quadratic factor:\\begin{aligned} &3x^3 + 4x^2 - 6x - 4 \\cr &\\quad = (x + 2)(3x^2 - 2x - 2) \\end{aligned}",
    "<strong>Step 3: Solve the remaining quadratic equation</strong><br><br>Set the quadratic factor equal to zero:$$3x^2 - 2x - 2 = 0$$Apply the quadratic formula with $a=3$, $b=-2$, and $c=-2$:\\begin{aligned} x &= \\dfrac{2 \\pm \\sqrt{4 + 24}}{6} \\cr &= \\dfrac{2 \\pm \\sqrt{28}}{6} \\cr &= \\dfrac{2 \\pm 2\\sqrt{7}}{6} \\cr &= \\dfrac{1 \\pm \\sqrt{7}}{3} \\end{aligned}",
    "<strong>Step 4: State all solutions</strong><br><br>The complete solutions are:\\begin{aligned} x &= -2 \\cr x &= \\dfrac{1 + \\sqrt{7}}{3} \\cr x &= \\dfrac{1 - \\sqrt{7}}{3} \\end{aligned}",
    "Final Answer:\\begin{aligned} &x = -2 \\cr &x = \\dfrac{1 \\pm \\sqrt{7}}{3} \\end{aligned}"
  ],
  "pi_options": [
    {
      "ans": "\\begin{aligned} &x = 2 \\cr &x = \\dfrac{1 \\pm \\sqrt{7}}{3} \\end{aligned}",
      "feedback": "You may have made a sign error when finding your initial root. Since $f(-2) = 0$, your linear factor is $(x + 2)$, which gives a root of $x = -2$ (not $x = 2$)."
    },
    {
      "ans": "\\begin{aligned} &x = -2 \\cr &x = \\dfrac{1 \\pm \\sqrt{5}}{3} \\end{aligned}",
      "feedback": "You may have made an arithmetic slip in the quadratic formula's discriminant. Make sure you calculated $b^2 - 4ac = 4 - 4(3)(-2)$, which gives $4 + 24 = 28$, rather than subtracting to get $4 - 24$."
    },
    {
      "ans": "\\begin{aligned} &x = -2 \\cr &x = \\dfrac{2 \\pm 2\\sqrt{7}}{3} \\end{aligned}",
      "feedback": "You may have forgotten to divide both terms in the numerator by the denominator when simplifying your surd, leading to an incorrect cancellation of the factor of 2."
    }
  ],
  "bradley_insight": {
    "type": "caution",
    "title": "The Head Teacher's Eye: Double Check Your Factor Signs",
    "content": "A very common mistake is confusing the root with the factor. If your root is $x = -2$, then the corresponding factor is $(x + 2) = 0$. If you mistakenly write the factor as $(x - 2)$, your polynomial long division will produce a remainder and fail to resolve. Always perform a quick check: root $\\rightarrow c$, factor $\\rightarrow (x - c)$."
  }
},
{
  "id": "004418",
  "group_id": "004416",
  "board": "CCEA",
  "branch": "Pure",
  "level": "AS",
  "major_area": "Algebra and Functions",
  "topic": "Algebraic Methods",
  "subtopic": [
        "Solving Cubic Equations"
  ],
  "img": false,
  "question": "Solve the cubic equation:$$x^3 - 2x^2 - 5x + 6 = 0$$[8]",
  "steps": [
    "<strong>Step 1: Test values using the Factor Theorem</strong><br><br>Let $f(x) = x^3 - 2x^2 - 5x + 6$. Test factors of the constant term $6$ (such as $\\pm 1, \\pm 2, \\pm 3, \\pm 6$):<br><br>Test $x = 1$:\\begin{aligned} f(1) &= (1)^3 - 2(1)^2 - 5(1) + 6 \\cr &= 1 - 2 - 5 + 6 \\cr &= 0 \\end{aligned}Since $f(1) = 0$, $(x - 1)$ is a factor of the polynomial.",
    "<strong>Step 2: Perform polynomial division</strong><br><br>Divide the cubic polynomial by $(x - 1)$ to get the quadratic factor:\\begin{aligned} &x^3 - 2x^2 - 5x + 6 \\cr &\\quad = (x - 1)(x^2 - x - 6) \\end{aligned}",
    "<strong>Step 3: Solve the remaining quadratic equation</strong><br><br>Set the quadratic factor equal to zero:$$x^2 - x - 6 = 0$$This quadratic expression factorises easily. Look for two numbers that multiply to $-6$ and add to $-1$ (which are $-3$ and $2$):\\begin{aligned} (x - 3)(x + 2) &= 0 \\cr x &= 3 \\text{ or } x = -2 \\end{aligned}",
    "<strong>Step 4: State all solutions</strong><br><br>The complete set of solutions is:\\begin{aligned} x &= 1 \\cr x &= 3 \\cr x &= -2 \\end{aligned}",
    "Final Answer:\\begin{aligned} &x = 1 \\cr &x = 3 \\cr &x = -2 \\end{aligned}"
  ],
  "pi_options": [
    {
      "ans": "\\begin{aligned} &x = 1 \\cr &x = -3 \\cr &x = 2 \\end{aligned}",
      "feedback": "You may have made a sign error when factorising the quadratic expression $x^2 - x - 6$. It factorises into $(x - 3)(x + 2) = 0$, which yields the roots $x = 3$ and $x = -2$ (not $x = -3$ and $x = 2$)."
    },
    {
      "ans": "\\begin{aligned} &x = -1 \\cr &x = 3 \\cr &x = -2 \\end{aligned}",
      "feedback": "You may have made a sign error when interpreting the first root. Since $f(1) = 0$, your root is $x = 1$ and your factor is $(x - 1)$. Testing $x = -1$ yields $f(-1) = 8 \\neq 0$."
    },
    {
      "ans": "\\begin{aligned} &x = 1 \\cr &x = \\dfrac{1 \\pm \\sqrt{23}}{2} \\end{aligned}",
      "feedback": "You may have made a sign mistake when applying the quadratic formula to $x^2 - x - 6 = 0$. Using $c = -6$ gives $b^2 - 4ac = 1 - 4(1)(-6) = 25$ (which is a perfect square). Make sure you did not calculate $1 - 24 = -23$."
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
  "group_id": "004416",
  "board": "CCEA",
  "branch": "Pure",
  "level": "AS",
  "major_area": "Algebra and Functions",
  "topic": "Algebraic Methods",
  "subtopic": [
        "Solving Cubic Equations"
  ],
  "img": false,
  "question": "Solve the cubic equation:$$2x^3 - 9x^2 + 6x - 1 = 0$$[8]",
  "steps": [
    "<strong>Step 1: Test values using the Rational Root Theorem</strong><br><br>Let $f(x) = 2x^3 - 9x^2 + 6x - 1$. Test potential rational roots of the form $\\pm 1$ or $\\pm \\dfrac{1}{2}$:<br><br>Test $x = \\dfrac{1}{2}$:\\begin{aligned} &f\\left(\\dfrac{1}{2}\\right) \\cr &\\quad = 2\\left(\\dfrac{1}{2}\\right)^3 - 9\\left(\\dfrac{1}{2}\\right)^2 \\cr &\\qquad + 6\\left(\\dfrac{1}{2}\\right) - 1 \\cr &\\quad = \\dfrac{1}{4} - \\dfrac{9}{4} + 2 \\cr &\\quad = 0 \\end{aligned}Since $f\\left(\\dfrac{1}{2}\\right) = 0$, $\\left(x - \\dfrac{1}{2}\\right)$—or equivalently $(2x - 1)$—is a factor of the polynomial.",
    "<strong>Step 2: Perform polynomial division</strong><br><br>Divide the cubic polynomial by $\\left(x - \\dfrac{1}{2}\\right)$ to isolate the remaining quadratic factor:\\begin{aligned} &2x^3 - 9x^2 + 6x - 1 \\cr &\\quad = \\left(x - \\dfrac{1}{2}\\right)(2x^2 - 8x + 2) \\cr &\\quad = (2x - 1)(x^2 - 4x + 1) \\end{aligned}",
    "<strong>Step 3: Solve the remaining quadratic equation</strong><br><br>Set the quadratic factor equal to zero:$$x^2 - 4x + 1 = 0$$Using the quadratic formula with $a=1$, $b=-4$, and $c=1$:\\begin{aligned} x &= \\dfrac{4 \\pm \\sqrt{16 - 4}}{2} \\cr &= \\dfrac{4 \\pm \\sqrt{12}}{2} \\cr &= \\dfrac{4 \\pm 2\\sqrt{3}}{2} \\cr &= 2 \\pm \\sqrt{3} \\end{aligned}",
    "<strong>Step 4: State all solutions</strong><br><br>The complete solutions to the cubic equation are:\\begin{aligned} x &= \\dfrac{1}{2} \\cr x &= 2 + \\sqrt{3} \\cr x &= 2 - \\sqrt{3} \\end{aligned}",
    "Final Answer:\\begin{aligned} &x = \\dfrac{1}{2} \\cr &x = 2 \\pm \\sqrt{3} \\end{aligned}"
  ],
  "pi_options": [
    {
      "ans": "\\begin{aligned} &x = -\\dfrac{1}{2} \\cr &x = 2 \\pm \\sqrt{3} \\end{aligned}",
      "feedback": "You may have made a sign error when finding your linear factor. Since $f\\left(\\dfrac{1}{2}\\right) = 0$, your root is positive $x = \\dfrac{1}{2}$ and your factor is $(2x - 1)$ (not $2x + 1$)."
    },
    {
      "ans": "\\begin{aligned} &x = \\dfrac{1}{2} \\cr &x = 2 \\pm \\sqrt{5} \\end{aligned}",
      "feedback": "You may have made an arithmetic slip in your quadratic formula's discriminant. Check that you calculated $b^2 - 4ac = 16 - 4(1)(1) = 12$, rather than mistakenly adding the terms to get $16 + 4 = 20$."
    },
    {
      "ans": "\\begin{aligned} &x = \\dfrac{1}{2} \\cr &x = 4 \\pm \\sqrt{3} \\end{aligned}",
      "feedback": "You may have made an error when simplifying your surd expression, forgetting to divide the leading term '4' by the denominator of 2."
    }
  ],
  "bradley_insight": {
    "type": "deeper",
    "title": "The Head Teacher's Eye: Handling Fractional Factors",
    "content": "If your initial root is a fraction like $x = \\frac{1}{2}$, write your factor as $(2x - 1)$ rather than $(x - \\frac{1}{2})$. This keeps all the coefficients of your remaining quadratic factor as integers, making both your polynomial division and the subsequent quadratic formula calculations much simpler and less prone to fraction errors."
  }
},
{
  "id": "004420",
  "group_id": "004416",
  "board": "CCEA",
  "branch": "Pure",
  "level": "AS",
  "major_area": "Algebra and Functions",
  "topic": "Algebraic Methods",
  "subtopic": [
        "Solving Cubic Equations"
  ],
  "img": false,
  "question": "Solve the cubic equation:$$2x^3 - 4x^2 - 3x + 3 = 0$$[8]",
  "steps": [
    "<strong>Step 1: Test values using the Factor Theorem</strong><br><br>Let $f(x) = 2x^3 - 4x^2 - 3x + 3$. Test factors of the constant term $3$ (such as $\\pm 1, \\pm 3$):<br><br>Test $x = -1$:\\begin{aligned} &f(-1) \\cr &\\quad = 2(-1)^3 - 4(-1)^2 \\cr &\\qquad - 3(-1) + 3 \\cr &\\quad = -2 - 4 + 3 + 3 \\cr &\\quad = 0 \\end{aligned}Since $f(-1) = 0$, $(x + 1)$ is a factor of the polynomial.",
    "<strong>Step 2: Perform polynomial division</strong><br><br>Divide the cubic polynomial by $(x + 1)$ to find the remaining quadratic factor:\\begin{aligned} &2x^3 - 4x^2 - 3x + 3 \\cr &\\quad = (x + 1)(2x^2 - 6x + 3) \\end{aligned}",
    "<strong>Step 3: Solve the remaining quadratic equation</strong><br><br>Set the quadratic factor equal to zero:$$2x^2 - 6x + 3 = 0$$Using the quadratic formula with $a=2$, $b=-6$, and $c=3$:\\begin{aligned} x &= \\dfrac{6 \\pm \\sqrt{36 - 24}}{4} \\cr &= \\dfrac{6 \\pm \\sqrt{12}}{4} \\cr &= \\dfrac{6 \\pm 2\\sqrt{3}}{4} \\cr &= \\dfrac{3 \\pm \\sqrt{3}}{2} \\end{aligned}",
    "<strong>Step 4: State all solutions</strong><br><br>The complete solutions are:\\begin{aligned} x &= -1 \\cr x &= \\dfrac{3 + \\sqrt{3}}{2} \\cr x &= \\dfrac{3 - \\sqrt{3}}{2} \\end{aligned}",
    "Final Answer:\\begin{aligned} &x = -1 \\cr &x = \\dfrac{3 \\pm \\sqrt{3}}{2} \\end{aligned}"
  ],
  "pi_options": [
    {
      "ans": "\\begin{aligned} &x = 1 \\cr &x = \\dfrac{3 \\pm \\sqrt{3}}{2} \\end{aligned}",
      "feedback": "You may have made a sign error when finding your initial root. Since $f(-1) = 0$, your root is $x = -1$ (which corresponds to factor $x + 1$). Testing positive $x = 1$ yields $f(1) = -2 \\neq 0$."
    },
    {
      "ans": "\\begin{aligned} &x = -1 \\cr &x = \\dfrac{3 \\pm \\sqrt{15}}{2} \\end{aligned}",
      "feedback": "You may have made an arithmetic slip in your discriminant calculation under the square root. Check that you calculated $b^2 - 4ac = 36 - 4(2)(3)$, which gives $36 - 24 = 12$, rather than mistakenly adding to get $36 + 24 = 60$."
    },
    {
      "ans": "\\begin{aligned} &x = -1 \\cr &x = \\dfrac{6 \\pm 2\\sqrt{3}}{2} \\end{aligned}",
      "feedback": "You may have forgotten to divide the leading term '6' by the denominator when simplifying your surd expression, leading to an incorrect cancellation of the factor of 2."
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
    "group_id": "004421",
    "board": "CCEA",
    "branch": "Pure",
    "level": "AS",
    "major_area": "Coordinate Geometry",
    "topic": "Gradient, Perpendicularity, Midpoint",
    "subtopic": [
      "Coordinate Geometry using Algebraic Values"
    ],
    "img": false,
    "question": "The points $A$ and $B$ have coordinates $(3a, a^2)$ and $(2a + 2, 2a)$ respectively, where $a \\neq 0$ and $a \\neq 2$.<br><br><strong>(a)</strong> A straight line, perpendicular to $AB$ and passing through the point $A$, cuts the $x$-axis at the point $P$. Find, in terms of $a$, the coordinates of the point $P$. [8]<br><br><strong>(b)</strong> The midpoint of the line segment $AB$ has equal $x$ and $y$ ordinates. Find the possible values of $a$ in their simplest surd form. [5]",
    "steps": [
      "<strong>Step 1: Find the gradient of the line segment $AB$</strong><br><br>The gradient $m_{AB}$ is given by the gradient formula $m = \\dfrac{y_B - y_A}{x_B - x_A}$:\\begin{aligned} m_{AB} &= \\dfrac{2a - a^2}{(2a + 2) - 3a} \\cr &= \\dfrac{2a - a^2}{2 - a} \\cr &= \\dfrac{a(2 - a)}{2 - a} \\cr &= a \\end{aligned}Since $a \\neq 2$, the denominator is non-zero, and the gradient simplifies to $a$.",
      "<strong>Step 2: Determine the equation of the perpendicular line</strong><br><br>Since the required line is perpendicular to $AB$, its gradient is the negative reciprocal of $m_{AB}$:\\begin{aligned} m_{\\perp} = -\\dfrac{1}{a} \\end{aligned}The equation of the line passing through $A(3a, a^2)$ is:\\begin{aligned} y - a^2 = -\\dfrac{1}{a}(x - 3a) \\end{aligned}",
      "<strong>Step 3: Solve for the coordinates of $P$</strong><br><br>The line cuts the $x$-axis at $P$, so we set $y = 0$ to find the $x$-coordinate:\\begin{aligned} 0 - a^2 &= -\\dfrac{1}{a}(x - 3a) \\cr -a^2 &= -\\dfrac{x - 3a}{a} \\cr a^3 &= x - 3a \\cr x &= a^3 + 3a \\end{aligned}Thus, the coordinates of the point $P$ are $(a^3 + 3a, 0)$.",
      "<strong>Step 4: Express the midpoint of $AB$ algebraically</strong><br><br>The coordinates of the midpoint $M$ are found by averaging the coordinates of $A$ and $B$:\\begin{aligned} x_M &= \\dfrac{3a + (2a + 2)}{2} \\cr &= \\dfrac{5a + 2}{2} \\cr y_M &= \\dfrac{a^2 + 2a}{2} \\end{aligned}",
      "<strong>Step 5: Set up and solve the quadratic equation</strong><br><br>Since the midpoint has equal $x$ and $y$ ordinates, set the $x$-coordinate equal to the $y$-coordinate:\\begin{aligned} \\dfrac{5a + 2}{2} &= \\dfrac{a^2 + 2a}{2} \\cr 5a + 2 &= a^2 + 2a \\cr a^2 - 3a - 2 &= 0 \\end{aligned}Solve this quadratic equation using the quadratic formula with $a=1$, $b=-3$, and $c=-2$:\\begin{aligned} a &= \\dfrac{-(-3) \\pm \\sqrt{(-3)^2 - 4(1)(-2)}}{2(1)} \\cr &= \\dfrac{3 \\pm \\sqrt{9 + 8}}{2} \\cr &= \\dfrac{3 \\pm \\sqrt{17}}{2} \\end{aligned}",
      "Final Answer:<br><strong>(a)</strong> $P(a^3 + 3a, 0)$ <br><strong>(b)</strong> $a = \\dfrac{3 \\pm \\sqrt{17}}{2}$"
    ],
    "pi_options": [
      {
        "ans": "<strong>(a)</strong> $P(a^3 + 3a, 0)$ <br><strong>(b)</strong> $a = \\dfrac{3 \\pm \\sqrt{5}}{2}$ ",
        "feedback": "In part (b), you may have made a sign error when calculating the discriminant. $9 - 4(1)(-2) = 17$, not 5."
      },
      {
        "ans": "<strong>(a)</strong> $P(a^3 - 3a, 0)$ <br><strong>(b)</strong> $a = \\dfrac{3 \\pm \\sqrt{17}}{2}$ ",
        "feedback": "In part (a), you made a sign error when rearranging the equation for $x$. Multiplying $-a^2$ by $-a$ gives positive $a^3$, and adding $3a$ to the other side gives $a^3 + 3a$."
      },
      {
        "ans": "<strong>(a)</strong> $P(a^3 + 3a, 0)$ <br><strong>(b)</strong> $a = \\dfrac{-3 \\pm \\sqrt{17}}{2}$ ",
        "feedback": "In part (b), you made a sign error when substituting $-b$ into the quadratic formula. Since $b = -3$, the leading term should be positive 3."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Algebraic Simplification of Gradients",
      "content": "When dealing with coordinates containing variables, always look for factorisation in your gradient calculations. Factoring out $a$ in $2a - a^2 = a(2 - a)$ allowed us to cleanly cancel $(2 - a)$. If you had not noticed this factorisation, your perpendicular line equation would have become algebraically unmanageable!"
    }
  },
  {
    "id": "004422",
    "group_id": "004421",
    "board": "CCEA",
    "branch": "Pure",
    "level": "AS",
    "major_area": "Coordinate Geometry",
    "topic": "Gradient, Perpendicularity, Midpoint",
    "subtopic": [
      "Coordinate Geometry using Algebraic Values"
    ],
    "img": false,
    "question": "The points $A$ and $B$ have coordinates $(4a, a^2)$ and $(3a + 3, 3a)$ respectively, where $a \\neq 0$ and $a \\neq 3$.<br><br><strong>(a)</strong> A straight line, perpendicular to $AB$ and passing through the point $B$, cuts the $y$-axis at the point $Q$. Find, in terms of $a$, the coordinates of the point $Q$. [8]<br><br><strong>(b)</strong> The midpoint of the line segment $AB$ has equal $x$ and $y$ ordinates. Find the possible values of $a$ in their simplest surd form. [5]",
    "steps": [
      "<strong>Step 1: Find the gradient of the line segment $AB$</strong><br><br>The gradient $m_{AB}$ is given by the gradient formula $m = \\dfrac{y_B - y_A}{x_B - x_A}$:\\begin{aligned} m_{AB} &= \\dfrac{3a - a^2}{(3a + 3) - 4a} \\cr &= \\dfrac{3a - a^2}{3 - a} \\cr &= \\dfrac{a(3 - a)}{3 - a} \\cr &= a \\end{aligned}Since $a \\neq 3$, the denominator is non-zero, and the gradient simplifies to $a$.",
      "<strong>Step 2: Determine the equation of the perpendicular line</strong><br><br>Since the required line is perpendicular to $AB$, its gradient is the negative reciprocal of $m_{AB}$:\\begin{aligned} m_{\\perp} = -\\dfrac{1}{a} \\end{aligned}The equation of the line passing through $B(3a + 3, 3a)$ is:\\begin{aligned} y - 3a = -\\dfrac{1}{a}(x - (3a + 3)) \\end{aligned}",
      "<strong>Step 3: Solve for the coordinates of $Q$</strong><br><br>The line cuts the $y$-axis at $Q$, so we set $x = 0$ to find the $y$-coordinate:\\begin{aligned} y - 3a &= -\\dfrac{1}{a}(0 - (3a + 3)) \\cr y - 3a &= \\dfrac{3a + 3}{a} \\cr y &= 3a + \\dfrac{3a + 3}{a} \\cr &= 3a + 3 + \\dfrac{3}{a} \\end{aligned}Thus, the coordinates of the point $Q$ are $\\left(0, 3a + 3 + \\dfrac{3}{a}\\right)$.",
      "<strong>Step 4: Express the midpoint of $AB$ algebraically</strong><br><br>The coordinates of the midpoint $M$ are found by averaging the coordinates of $A$ and $B$:\\begin{aligned} x_M &= \\dfrac{4a + (3a + 3)}{2} \\cr &= \\dfrac{7a + 3}{2} \\cr y_M &= \\dfrac{a^2 + 3a}{2} \\end{aligned}",
      "<strong>Step 5: Set up and solve the quadratic equation</strong><br><br>Since the midpoint has equal $x$ and $y$ ordinates, set the $x$-coordinate equal to the $y$-coordinate:\\begin{aligned} \\dfrac{7a + 3}{2} &= \\dfrac{a^2 + 3a}{2} \\cr 7a + 3 &= a^2 + 3a \\cr a^2 - 4a - 3 &= 0 \\end{aligned}Solve this quadratic equation using the quadratic formula with $a=1$, $b=-4$, and $c=-3$:\\begin{aligned} a &= \\dfrac{-(-4) \\pm \\sqrt{(-4)^2 - 4(1)(-3)}}{2(1)} \\cr &= \\dfrac{4 \\pm \\sqrt{16 + 12}}{2} \\cr &= \\dfrac{4 \\pm \\sqrt{28}}{2} \\cr &= \\dfrac{4 \\pm 2\\sqrt{7}}{2} \\cr &= 2 \\pm \\sqrt{7} \\end{aligned}",
      "Final Answer:<br><strong>(a)</strong> $Q\\left(0, 3a + 3 + \\dfrac{3}{a}\\right)$ <br><strong>(b)</strong> $a = 2 \\pm \\sqrt{7}$"
    ],
    "pi_options": [
      {
        "ans": "<strong>(a)</strong> $Q\\left(0, 3a + 3 + \\dfrac{3}{a}\\right)$ <br><strong>(b)</strong> $a = 2 \\pm \\sqrt{5}$ ",
        "feedback": "In part (b), check your discriminant calculation. $16 - 4(1)(-3) = 28$, not 20. This leads to the $\\sqrt{7}$ term after simplification."
      },
      {
        "ans": "<strong>(a)</strong> $Q\\left(0, 3a - 3 - \\dfrac{3}{a}\\right)$ <br><strong>(b)</strong> $a = 2 \\pm \\sqrt{7}$ ",
        "feedback": "In part (a), you made a sign error when handling the double negatives. The negative gradient and the negative constant in the bracket should combine to a positive fraction."
      },
      {
        "ans": "<strong>(a)</strong> $Q\\left(0, 3a + 3 + \\dfrac{3}{a}\\right)$ <br><strong>(b)</strong> $a = -2 \\pm \\sqrt{7}$ ",
        "feedback": "In part (b), the quadratic formula $-b$ term should be positive 4, as $b = -4$."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Expanding Brackets with Negative Signs",
      "content": "In part (a), pay extremely close attention to the negative signs when setting up the perpendicular line. The term $x - (3a + 3)$ has nested brackets. Distributing the negative gradient $-1/a$ across a negative bracket requires careful sign-tracking: the double negatives cancel to produce a clean, positive fraction $\\frac{3a + 3}{a}$. Work slowly on these steps to avoid dropping easy accuracy marks."
    }
  },
  {
    "id": "004423",
    "group_id": "004421",
    "board": "CCEA",
    "branch": "Pure",
    "level": "AS",
    "major_area": "Coordinate Geometry",
    "topic": "Gradient, Perpendicularity, Midpoint",
    "subtopic": [
      "Coordinate Geometry using Algebraic Values"
    ],
    "img": false,
    "question": "The points $A$ and $B$ have coordinates $(2a, 2a^2)$ and $(a + 1, 2a)$ respectively, where $a \\neq 0$ and $a \\neq 1$.<br><br><strong>(a)</strong> A straight line, perpendicular to $AB$ and passing through the point $B$, cuts the $x$-axis at the point $P$. Find, in terms of $a$, the coordinates of the point $P$. [8]<br><br><strong>(b)</strong> The midpoint of the line segment $AB$ has equal $x$ and $y$ ordinates. Find the possible values of $a$. [5]",
    "steps": [
      "<strong>Step 1: Find the gradient of the line segment $AB$</strong><br><br>The gradient $m_{AB}$ is calculated using the gradient formula:\\begin{aligned} m_{AB} &= \\dfrac{2a - 2a^2}{(a + 1) - 2a} \\cr &= \\dfrac{2a(1 - a)}{1 - a} \\cr &= 2a \\end{aligned}Since $a \\neq 1$, the denominator is non-zero, and the gradient simplifies to $2a$.",
      "<strong>Step 2: Determine the equation of the perpendicular line</strong><br><br>Since the required line is perpendicular to $AB$, its gradient is the negative reciprocal of $2a$:\\begin{aligned} m_{\\perp} = -\\dfrac{1}{2a} \\end{aligned}The equation of the line passing through $B(a + 1, 2a)$ is:\\begin{aligned} y - 2a = -\\dfrac{1}{2a}(x - (a + 1)) \\end{aligned}",
      "<strong>Step 3: Solve for the coordinates of $P$</strong><br><br>The line cuts the $x$-axis at $P$, so we set $y = 0$ to find the $x$-coordinate:\\begin{aligned} 0 - 2a &= -\\dfrac{1}{2a}(x - a - 1) \\cr -2a &= -\\dfrac{x - a - 1}{2a} \\cr 4a^2 &= x - a - 1 \\cr x &= 4a^2 + a + 1 \\end{aligned}Thus, the coordinates of the point $P$ are $(4a^2 + a + 1, 0)$.",
      "<strong>Step 4: Express the midpoint of $AB$ algebraically</strong><br><br>The coordinates of the midpoint $M$ are calculated by averaging coordinates:\\begin{aligned} x_M &= \\dfrac{2a + (a + 1)}{2} \\cr &= \\dfrac{3a + 1}{2} \\cr y_M &= \\dfrac{2a^2 + 2a}{2} \\cr &= a^2 + a \\end{aligned}",
      "<strong>Step 5: Set up and solve the quadratic equation</strong><br><br>Since the midpoint has equal $x$ and $y$ ordinates, set the $x$-coordinate equal to the $y$-coordinate:\\begin{aligned} \\dfrac{3a + 1}{2} &= a^2 + a \\cr 3a + 1 &= 2a^2 + 2a \\cr 2a^2 - a - 1 &= 0 \\cr (2a + 1)(a - 1) &= 0 \\cr a &= -\\dfrac{1}{2} \\text{ or } a = 1 \\end{aligned}Since the initial conditions of the problem specify that $a \\neq 1$, we must discard $a = 1$. This leaves the only valid solution as $a = -\\dfrac{1}{2}$.",
      "Final Answer:<br><strong>(a)</strong> $P(4a^2 + a + 1, 0)$ <br><strong>(b)</strong> $a = -\\dfrac{1}{2}$"
    ],
    "pi_options": [
      {
        "ans": "<strong>(a)</strong> $P(4a^2 + a + 1, 0)$ <br><strong>(b)</strong> $a = 1 \\text{ or } a = -\\dfrac{1}{2}$ ",
        "feedback": "You found both roots in part (b) but forgot to apply the constraint $a \\neq 1$ given in the question. Undefined gradients must be discarded."
      },
      {
        "ans": "<strong>(a)</strong> $P(4a^2 - a - 1, 0)$ <br><strong>(b)</strong> $a = -\\dfrac{1}{2}$ ",
        "feedback": "In part (a), you made a sign error when solving the algebraic equation for $x$. Multiplying $-2a$ by $-2a$ results in positive $4a^2$."
      },
      {
        "ans": "<strong>(a)</strong> $P(4a^2 + a + 1, 0)$ <br><strong>(b)</strong> $a = \\dfrac{1}{2}$ ",
        "feedback": "In part (b), you made a sign error during factorization. $2a^2 - a - 1 = 0$ gives $a = -1/2$ and $a = 1$."
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
    "group_id": "004421",
    "board": "CCEA",
    "branch": "Pure",
    "level": "AS",
    "major_area": "Coordinate Geometry",
    "topic": "Gradient, Perpendicularity, Midpoint",
    "subtopic": [
      "Coordinate Geometry using Algebraic Values"
    ],
    "img": false,
    "question": "The points $A$ and $B$ have coordinates $(2a, a^2)$ and $(a + 1, a)$ respectively, where $a \\neq 0$ and $a \\neq 1$.<br><br><strong>(a)</strong> A straight line, parallel to $AB$ and passing through the origin $O(0,0)$, cuts the vertical line $x = a$ at the point $Q$. Find, in terms of $a$, the coordinates of the point $Q$. [6]<br><br><strong>(b)</strong> The midpoint of the line segment $AB$ lies on the line $y = 2x$. Find the possible values of $a$ in their simplest surd form. [7]",
    "steps": [
      "<strong>Step 1: Find the gradient of $AB$</strong><br><br>The gradient $m_{AB}$ is given by the change in $y$ over change in $x$:\\begin{aligned} m_{AB} &= \\dfrac{a - a^2}{(a + 1) - 2a} \\cr &= \\dfrac{a(1 - a)}{1 - a} \\cr &= a \\end{aligned}Since $a \\neq 1$, the gradient simplifies to $a$.",
      "<strong>Step 2: Find the equation of the parallel line</strong><br><br>Since the required line is parallel to $AB$, its gradient is equal to $m_{AB} = a$. The line passes through the origin $O(0,0)$, so its equation is simply:\\begin{aligned} y = ax \\end{aligned}",
      "<strong>Step 3: Solve for the coordinates of $Q$</strong><br><br>The line cuts the vertical line $x = a$ at the point $Q$. Substitute $x = a$ into your line equation to find $y$:\\begin{aligned} y &= a(a) \\cr &= a^2 \\end{aligned}Thus, the coordinates of the point $Q$ are $(a, a^2)$.",
      "<strong>Step 4: Express the midpoint of $AB$ algebraically</strong><br><br>The coordinates of the midpoint $M$ are calculated using the midpoint formula:\\begin{aligned} x_M &= \\dfrac{2a + (a + 1)}{2} \\cr &= \\dfrac{3a + 1}{2} \\cr y_M &= \\dfrac{a^2 + a}{2} \\end{aligned}",
      "<strong>Step 5: Set up and solve the equation under the line constraint</strong><br><br>Since the midpoint lies on $y = 2x$, substitute the coordinates of $M$ directly into this line equation:\\begin{aligned} \\dfrac{a^2 + a}{2} &= 2\\left( \\dfrac{3a + 1}{2} \\right) \\cr a^2 + a &= 2(3a + 1) \\cr a^2 + a &= 6a + 2 \\cr a^2 - 5a - 2 &= 0 \\end{aligned}Solve this using the quadratic formula with $a=1$, $b=-5$, and $c=-2$:\\begin{aligned} a &= \\dfrac{-(-5) \\pm \\sqrt{(-5)^2 - 4(1)(-2)}}{2(1)} \\cr &= \\dfrac{5 \\pm \\sqrt{25 + 8}}{2} \\cr &= \\dfrac{5 \\pm \\sqrt{33}}{2} \\end{aligned}",
      "Final Answer:<br><strong>(a)</strong> $Q(a, a^2)$ <br><strong>(b)</strong> $a = \\dfrac{5 \\pm \\sqrt{33}}{2}$"
    ],
    "pi_options": [
      {
        "ans": "<strong>(a)</strong> $Q(a, a^2)$ <br><strong>(b)</strong> $a = \\dfrac{5 \\pm \\sqrt{17}}{2}$ ",
        "feedback": "In part (b), check the discriminant calculation. $-4(1)(-2)$ results in $+8$, so you should have $\\sqrt{25+8} = \\sqrt{33}$."
      },
      {
        "ans": "<strong>(a)</strong> $Q\\left(a, -\\dfrac{1}{a}\\right)$ <br><strong>(b)</strong> $a = \\dfrac{5 \\pm \\sqrt{33}}{2}$ ",
        "feedback": "In part (a), you used a perpendicular gradient. The question specifies a parallel line, which must use the same gradient, $m = a$."
      },
      {
        "ans": "<strong>(a)</strong> $Q(a, a^2)$ <br><strong>(b)</strong> $a = \\dfrac{-5 \\pm \\sqrt{33}}{2}$ ",
        "feedback": "In part (b), the quadratic formula term $-b$ should be positive 5, as $b = -5$ in our equation."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Parallel vs. Perpendicular Gradients",
      "content": "Do not automatically assume coordinate geometry lines are perpendicular! This is a common habit because perpendicular lines are frequently tested. Read carefully: parallel lines have identical gradients $(m_1 = m_2)$, whereas perpendicular lines have negative reciprocal gradients $(m_1 \\cdot m_2 = -1)$. A simple misread here will change your entire algebra path."
    }
  },
  {
    "id": "004425",
    "group_id": "004421",
    "board": "CCEA",
    "branch": "Pure",
    "level": "AS",
    "major_area": "Coordinate Geometry",
    "topic": "Gradient, Perpendicularity, Midpoint",
    "subtopic": [
      "Coordinate Geometry using Algebraic Values"
    ],
    "img": false,
    "question": "The points $A$ and $B$ have coordinates $(2a, a^2)$ and $(a + 2, 2a)$ respectively, where $a \\neq 0$ and $a \\neq 2$.<br><br><strong>(a)</strong> A straight line, perpendicular to $AB$ and passing through the point $B$, cuts the $y$-axis at the point $Q$. Find, in terms of $a$, the coordinates of the point $Q$. [8]<br><br><strong>(b)</strong> The midpoint of the line segment $AB$ lies on the line $y = x - 1$. Find the possible value of $a$. [5]",
    "steps": [
      "<strong>Step 1: Find the gradient of the line segment $AB$</strong><br><br>The gradient $m_{AB}$ is:\\begin{aligned} m_{AB} &= \\dfrac{2a - a^2}{(a + 2) - 2a} \\cr &= \\dfrac{2a - a^2}{2 - a} \\cr &= \\dfrac{a(2 - a)}{2 - a} \\cr &= a \\end{aligned}Since $a \\neq 2$, the gradient simplifies to $a$.",
      "<strong>Step 2: Determine the equation of the perpendicular line</strong><br><br>Since the required line is perpendicular to $AB$, its gradient is the negative reciprocal of $m_{AB}$:\\begin{aligned} m_{\\perp} = -\\dfrac{1}{a} \\end{aligned}The equation of the line passing through $B(a + 2, 2a)$ is:\\begin{aligned} y - 2a = -\\dfrac{1}{2a}(x - (a + 2)) \\end{aligned}",
      "<strong>Step 3: Solve for the coordinates of $Q$</strong><br><br>The line cuts the $y$-axis at $Q$, so we set $x = 0$ to find the $y$-coordinate:\\begin{aligned} y - 2a &= -\\dfrac{1}{a}(0 - (a + 2)) \\cr y - 2a &= \\dfrac{a + 2}{a} \\cr y &= 2a + \\dfrac{a + 2}{a} \\end{aligned}Thus, the coordinates of the point $Q$ are $\\left(0, 2a + \\dfrac{a + 2}{a}\\right)$.",
      "<strong>Step 4: Express the midpoint of $AB$ algebraically</strong><br><br>The coordinates of the midpoint $M$ are:\\begin{aligned} x_M &= \\dfrac{2a + (a + 2)}{2} \\cr &= \\dfrac{3a + 2}{2} \\cr y_M &= \\dfrac{a^2 + 2a}{2} \\end{aligned}",
      "<strong>Step 5: Set up and solve the equation under the line constraint</strong><br><br>Since the midpoint lies on $y = x - 1$, substitute the coordinates of $M$ directly into this line equation:\\begin{aligned} \\dfrac{a^2 + 2a}{2} &= \\dfrac{3a + 2}{2} - 1 \\cr &= \\dfrac{3a + 2 - 2}{2} \\cr &= \\dfrac{3a}{2} \\cr a^2 + 2a &= 3a \\cr a^2 - a &= 0 \\cr a(a - 1) &= 0 \\cr a &= 0 \\text{ or } a = 1 \\end{aligned}Since the initial conditions specify $a \\neq 0$, we discard $a = 0$. This leaves our only valid solution as $a = 1$.",
      "Final Answer:<br><strong>(a)</strong> $Q\\left(0, 2a + \\dfrac{a + 2}{a}\\right)$ <br><strong>(b)</strong> $a = 1$"
    ],
    "pi_options": [
      {
        "ans": "<strong>(a)</strong> $Q\\left(0, 2a + \\dfrac{a + 2}{a}\\right)$ <br><strong>(b)</strong> $a = 0 \\text{ or } a = 1 $",
        "feedback": "You successfully solved the algebra in part (b) but forgot to apply the boundary constraint $a \\neq 0$ given at the start of the question."
      },
      {
        "ans": "<strong>(a)</strong> $Q\\left(0, 2a - \\dfrac{a + 2}{a}\\right)$ <br><strong>(b)</strong> $a = 1 $",
        "feedback": "In part (a), check your sign distribution. The $-1/a$ and the $-(a+2)$ in the bracket should combine to give a positive term."
      },
      {
        "ans": "<strong>(a)</strong> $Q\\left(0, 2a + \\dfrac{a + 2}{a}\\right)$ <br><strong>(b)</strong> $a = 5 $",
        "feedback": "In part (b), you made an arithmetic slip when applying the line constraint $y = x - 1$, possibly failing to correctly handle the constant subtraction."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Checking Initial Conditions",
      "content": "Always circle or highlight constraints like $a \\neq 0$ at the start of an exam question. It is very easy to solve a quadratic equation like $a(a - 1) = 0$, write down both roots, and lose an accuracy mark because you forgot to discard the boundary value. Be disciplined about checking your final answers against the initial conditions."
    }
  },
  {
    "id": "004426",
    "group_id": "004426",
    "board": "CCEA",
    "branch": "Pure",
    "level": "AS",
    "major_area": "Coordinate Geometry",
    "topic": "Circles",
    "subtopic": [
      "Circle Geometry",
      "Proof"
    ],
    "img": "images/Pure_PNGs/004426.png",
    "question": "The diagram shows a circle with centre $O$ and radius $r$. $AB$ is a diameter of the circle. $S$ lies on the circumference of the circle. $D$ is the foot of the perpendicular from $B$ to $OS$. The acute angle $\\angle BOS$ is $\\theta$. $OA = OB = r$ and $OD = x$.<br><br><strong>(a)</strong> By applying the cosine rule to triangle $AOD$, show that:$$AD^2 = r^2(1 + 3\\cos^2 \\theta)$$[7]<br><br><strong>(b)</strong> When $BD$ bisects $OS$,$$AD = r\\sqrt{\\dfrac{7}{k}}$$Find the value of $k$, where $k$ is a positive integer. [5]",
    "steps": [
      "<strong>Step 1: Relate the length $OD = x$ to the radius and angle $\\theta$</strong><br><br>In triangle $BOS$, $BD$ is perpendicular to $OS$, making $OBD$ a right-angled triangle at $D$. The projection of $OB$ onto $OS$ gives:\\begin{aligned} \\cos \\theta &= \\dfrac{OD}{OB} \\cr &= \\dfrac{x}{r} \\cr x &= r\\cos \\theta \\end{aligned}",
      "<strong>Step 2: Find the angle $\\angle AOD$</strong><br><br>The points $A$, $O$, and $B$ lie along a straight line because $AB$ is a diameter of the circle. This means the angles on either side of the center are supplementary:\\begin{aligned} \\angle AOD = 180^\\circ - \\theta \\end{aligned}",
      "<strong>Step 3: Apply the Cosine Rule to triangle $AOD$</strong><br><br>Use the cosine rule on triangle $AOD$ with sides $AO = r$, $OD = x$, and angle $\\angle AOD = 180^\\circ - \\theta$:\\begin{aligned} &AD^2 \\cr &\\quad = AO^2 + OD^2 \\cr &\\qquad - 2(AO)(OD)\\cos(\\angle AOD) \\cr &\\quad = r^2 + x^2 \\cr &\\qquad - 2rx\\cos(180^\\circ - \\theta) \\end{aligned}Using the trigonometric identity $\\cos(180^\\circ - \\theta) = -\\cos \\theta$, this simplifies to:\\begin{aligned} AD^2 = r^2 + x^2 + 2rx\\cos \\theta \\end{aligned}",
      "<strong>Step 4: Substitute $x = r \\cos \\theta$ to complete the proof for part (a)</strong><br><br>Substitute $x = r \\cos \\theta$ into the simplified expression:\\begin{aligned} &AD^2 \\cr &\\quad = r^2 + (r\\cos \\theta)^2 \\cr &\\qquad + 2r(r\\cos \\theta)\\cos \\theta \\cr &\\quad = r^2 + r^2\\cos^2 \\theta \\cr &\\qquad + 2r^2\\cos^2 \\theta \\cr &\\quad = r^2(1 + 3\\cos^2 \\theta) \\end{aligned}",
      "<strong>Step 5: Apply the bisection condition in part (b)</strong><br><br>If $BD$ bisects $OS$, then $D$ is the midpoint of the radius $OS$. This gives us:\\begin{aligned} OD &= \\dfrac{r}{2} \\cr r\\cos \\theta &= \\dfrac{r}{2} \\cr \\cos \\theta &= \\dfrac{1}{2} \\cr \\theta &= 60^\\circ \\end{aligned}",
      "<strong>Step 6: Calculate $AD$ and solve for $k$</strong><br><br>Substitute $\\cos \\theta = \\dfrac{1}{2}$ into your $AD^2$ formula from part (a):\\begin{aligned} AD^2 &= r^2\\left( 1 + 3\\left(\\dfrac{1}{2}\\right)^2 \\right) \\cr &= r^2\\left( 1 + 3\\left(\\dfrac{1}{4}\\right) \\right) \\cr &= r^2\\left( 1 + \\dfrac{3}{4} \\right) \\cr &= r^2\\left(\\dfrac{7}{4}\\right) \\end{aligned}Taking the square root yields:\\begin{aligned} AD = r\\sqrt{\\dfrac{7}{4}} \\end{aligned}Comparing this to the given expression $AD = r\\sqrt{\\dfrac{7}{k}}$, we get $k = 4$.",
      "<strong>Final Answer</strong><br><strong>(a)</strong> $AD^2 = r^2(1 + 3\\cos^2 \\theta)$ <br><strong>(b)</strong> $k = 4$"
    ],
    "pi_options": [
      {
        "ans": "<strong>(a)</strong> $AD^2 = r^2(1 + 3\\cos^2 \\theta)$ <br><strong>(b)</strong> $k = 2$",
        "feedback": "In part (b), you may have made an error when squaring $\\cos \\theta = 1/2$, writing it as $1/2$ instead of $1/4$, which led to a coefficient of $1 + 3/2 = 5/2$ inside the root."
      },
      {
        "ans": "<strong>(a)</strong> $AD^2 = r^2(1 + 3\\cos^2 \\theta)$ <br><strong>(b)</strong> $k = 16$",
        "feedback": "In part (b), after finding $AD^2 = r^2(7/4)$, you might have squared the denominator again when determining $k$ instead of identifying $k$ as the value already under the square root."
      },
      {
        "ans": "<strong>(a)</strong> $AD^2 = r^2(1 + 3\\cos^2 \\theta)$ <br><strong>(b)</strong> $k = 3$",
        "feedback": "In part (b), you likely made an arithmetic slip in Step 6, miscalculating $1 + 3/4$ as $6/4$ instead of $7/4$."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Supplementary Angle Trigonometry",
      "content": "In geometry proofs, the relation $\\cos(180^\\circ - \\theta) = -\\cos \\theta$ is one of the most frequently used identities. If you forget to flip the sign, you will end up with a subtraction $1 - \\cos^2 \\theta$, which will prevent you from completing the proof. Always write down your supplementary angle identities explicitly."
    }
  },
  {
    "id": "004427",
    "group_id": "004426",
    "board": "CCEA",
    "branch": "Pure",
    "level": "AS",
    "major_area": "Coordinate Geometry",
    "topic": "Circles",
    "subtopic": [
      "Circle Geometry",
      "Proof"
    ],
    "img": "images/Pure_PNGs/004427.png",
    "question": "The diagram shows a circle with centre $O$ and radius $r$. $BA$ is a diameter of the circle. $S$ lies on the circumference of the circle. $D$ is the foot of the perpendicular from $A$ to $OS$. The angle $\\angle AOS$ is $\\theta$. $OA = OB = r$ and $OD = x$.<br><br><strong>(a)</strong> By applying the cosine rule to triangle $BOD$, show that:$$BD^2 = r^2(1 + 3\\cos^2 \\theta)$$[7]<br><br><strong>(b)</strong> When $AD$ bisects $OS$,$$BD = r\\sqrt{\\dfrac{7}{k}}$$Find the value of $k$, where $k$ is a positive integer. [5]",
    "steps": [
      "<strong>Step 1: Relate the length $OD = x$ to the radius and angle $\\theta$</strong><br><br>In right-angled triangle $ADO$, $D$ is the foot of the perpendicular from $A$ to $OS$, making $\\angle ADO = 90^\\circ$. The projection of $OA$ onto $OS$ gives:\\begin{aligned} \\cos \\theta &= \\dfrac{OD}{OA} \\cr &= \\dfrac{x}{r} \\cr x &= r\\cos \\theta \\end{aligned}",
      "<strong>Step 2: Find the angle $\\angle BOD$</strong><br><br>The points $B$, $O$, and $A$ lie along a straight line because $BA$ is a diameter of the circle. This means the angles on either side of the center are supplementary:\\begin{aligned} \\angle BOD = 180^\\circ - \\theta \\end{aligned}",
      "<strong>Step 3: Apply the Cosine Rule to triangle $BOD$</strong><br><br>Use the cosine rule on triangle $BOD$ with sides $OB = r$, $OD = x$, and angle $\\angle BOD = 180^\\circ - \\theta$:\\begin{aligned} &BD^2 \\cr &\\quad = BO^2 + OD^2 \\cr &\\qquad - 2(BO)(OD)\\cos(\\angle BOD) \\cr &\\quad = r^2 + x^2 \\cr &\\qquad - 2rx\\cos(180^\\circ - \\theta) \\end{aligned}Using the trigonometric identity $\\cos(180^\\circ - \\theta) = -\\cos \\theta$, this simplifies to:\\begin{aligned} BD^2 = r^2 + x^2 + 2rx\\cos \\theta \\end{aligned}",
      "<strong>Step 4: Substitute $x = r \\cos \\theta$ to complete the proof for part (a)</strong><br><br>Substitute $x = r \\cos \\theta$ into the simplified expression:\\begin{aligned} &BD^2 \\cr &\\quad = r^2 + (r\\cos \\theta)^2 \\cr &\\qquad + 2r(r\\cos \\theta)\\cos \\theta \\cr &\\quad = r^2 + r^2\\cos^2 \\theta \\cr &\\qquad + 2r^2\\cos^2 \\theta \\cr &\\quad = r^2(1 + 3\\cos^2 \\theta) \\end{aligned}",
      "<strong>Step 5: Apply the bisection condition in part (b)</strong><br><br>If $AD$ bisects $OS$, then $D$ is the midpoint of the radius $OS$. This gives us:\\begin{aligned} OD &= \\dfrac{r}{2} \\cr r\\cos \\theta &= \\dfrac{r}{2} \\cr \\cos \\theta &= \\dfrac{1}{2} \\cr \\theta &= 60^\\circ \\end{aligned}",
      "<strong>Step 6: Calculate $BD$ and solve for $k$</strong><br><br>Substitute $\\cos \\theta = \\dfrac{1}{2}$ into your $BD^2$ formula from part (a):\\begin{aligned} BD^2 &= r^2\\left( 1 + 3\\left(\\dfrac{1}{2}\\right)^2 \\right) \\cr &= r^2\\left( 1 + 3\\left(\\dfrac{1}{4}\\right) \\right) \\cr &= r^2\\left( 1 + \\dfrac{3}{4} \\right) \\cr &= r^2\\left(\\dfrac{7}{4}\\right) \\end{aligned}Taking the square root yields:\\begin{aligned} BD = r\\sqrt{\\dfrac{7}{4}} \\end{aligned}Comparing this to the given expression $BD = r\\sqrt{\\dfrac{7}{k}}$, we get $k = 4$.",
      "<strong>Final Answer</strong><br><strong>(a)</strong> $BD^2 = r^2(1 + 3\\cos^2 \\theta)$ <br><strong>(b)</strong> $k = 4$"
    ],
    "pi_options": [
      {
        "ans": "<strong>(a)</strong> $BD^2 = r^2(1 + 3\\cos^2 \\theta)$ <br><strong>(b)</strong> $k = 2$",
        "feedback": "In part (b), you may have made an error when squaring $\\cos \\theta = 1/2$. Ensure you use $(1/2)^2 = 1/4$ rather than $1/2$."
      },
      {
        "ans": "<strong>(a)</strong> $BD^2 = r^2(1 + 3\\cos^2 \\theta)$ <br><strong>(b)</strong> $k = 16$",
        "feedback": "In part (b), after getting $BD = r\\sqrt{7/4}$, you may have squared the denominator again to get 16 instead of identifying $k$ as the value currently inside the root."
      },
      {
        "ans": "<strong>(a)</strong> $BD^2 = r^2(1 + 3\\cos^2 \\theta)$ <br><strong>(b)</strong> $k = 3$",
        "feedback": "In part (b), you likely made an arithmetic slip when summing the terms $1 + 3/4$, misidentifying the result as $6/4$."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Symmetry in Circle Proofs",
      "content": "When proving trigonometric relations on opposite sides of a circle, the horizontal orientation of your diameter does not change the core projection. Recognizing that supplementary angles share this symmetrical relationship allows you to solve coordinate geometry proofs with confidence."
    }
  },
  {
    "id": "004428",
    "group_id": "004426",
    "board": "CCEA",
    "branch": "Pure",
    "level": "AS",
    "major_area": "Coordinate Geometry",
    "topic": "Circles",
    "subtopic": [
      "Proof"
    ],
    "img": "images/Pure_PNGs/004428.png",
    "question": "The diagram shows a circle with centre $O$ and radius $r$. $AB$ is a diameter of the circle. $S$ lies on the circumference of the circle. $D$ is the foot of the perpendicular from $S$ to $AB$. The acute angle $\\angle SOB$ is $\\theta$. $OA = OB = r$ and $OD = x$.<br><br><strong>(a)</strong> Show that the length $AS$ and length $AD$ satisfy:$$AS^2 = 2r \\cdot AD$$[6]<br><br><strong>(b)</strong> When $D$ is the midpoint of $OB$, find the exact value of $\\theta$ in degrees and express the length of $AS$ in terms of $r$. [6]",
    "steps": [
      "<strong>Step 1: Set up coordinates for part (a)</strong><br><br>For clarity, we place the circle on a Cartesian grid with centre $O$ at the origin $(0,0)$ and diameter $AB$ along the $x$-axis. This gives:\\begin{aligned} A &= (-r, 0) \\cr B &= (r, 0) \\end{aligned}",
      "<strong>Step 2: Express the coordinates of $S$ and $D$ in terms of $\\theta$</strong><br><br>Using polar coordinates, the point $S$ on the circle has coordinates:\\begin{aligned} S = (r\\cos \\theta, r\\sin \\theta) \\end{aligned}Since $D$ is the foot of the perpendicular from $S$ to the $x$-axis (the line segment $AB$), its coordinates are:\\begin{aligned} D = (r\\cos \\theta, 0) \\end{aligned}",
      "<strong>Step 3: Calculate the length squared $AS^2$</strong><br><br>Using the distance formula, find the distance squared between $A(-r, 0)$ and $S(r\\cos \\theta, r\\sin \\theta)$:\\begin{aligned} &AS^2 \\cr &\\quad = (r\\cos \\theta - (-r))^2 \\cr &\\qquad + (r\\sin \\theta - 0)^2 \\cr &\\quad = (r\\cos \\theta + r)^2 \\cr &\\qquad + r^2\\sin^2 \\theta \\cr &\\quad = r^2(\\cos^2 \\theta + 2\\cos \\theta \\cr &\\qquad + 1 + \\sin^2 \\theta) \\cr &\\quad = r^2(2 + 2\\cos \\theta) \\cr &\\quad = 2r^2(1 + \\cos \\theta) \\end{aligned}",
      "<strong>Step 4: Calculate the length $AD$ and complete the proof</strong><br><br>The distance from $A(-r, 0)$ to $D(r\\cos \\theta, 0)$ along the horizontal $x$-axis is:\\begin{aligned} AD &= r\\cos \\theta - (-r) \\cr &= r(1 + \\cos \\theta) \\end{aligned}Multiply this by $2r$:\\begin{aligned} 2r \\cdot AD &= 2r \\cdot r(1 + \\cos \\theta) \\cr &= 2r^2(1 + \\cos \\theta) \\end{aligned}This is exactly equal to $AS^2$, completing the proof.",
      "<strong>Step 5: Apply the midpoint condition in part (b)</strong><br><br>If $D$ is the midpoint of $OB$, then its $x$-coordinate must be half of $OB = r$:\\begin{aligned} r\\cos \\theta &= \\dfrac{r}{2} \\cr \\cos \\theta &= \\dfrac{1}{2} \\cr \\theta &= 60^\\circ \\end{aligned}",
      "<strong>Step 6: Express the length of $AS$ in terms of $r$</strong><br><br>Substitute $\\cos \\theta = \\dfrac{1}{2}$ into the formula for $AS^2$:\\begin{aligned} AS^2 &= 2r^2\\left( 1 + \\dfrac{1}{2} \\right) \\cr &= 2r^2\\left( \\dfrac{3}{2} \\right) \\cr &= 3r^2 \\end{aligned}Taking the square root yields:\\begin{aligned} AS = r\\sqrt{3} \\end{aligned}",
      "<strong>Final Answer</strong><br><strong>(a)</strong> $AS^2 = 2r \\cdot AD$ <br><strong>(b)</strong> $\\theta = 60^\\circ, AS = r\\sqrt{3}$"
    ],
    "pi_options": [
      {
        "ans": "<strong>(a)</strong> $AS^2 = 2r \\cdot AD$ <br><strong>(b)</strong> $\\theta = 60^\\circ, AS = r\\sqrt{2}$ ",
        "feedback": "In part (b), check your arithmetic in Step 6. $2r^2(1 + 1/2) = 3r^2$, which leads to $r\\sqrt{3}$, not $r\\sqrt{2}$."
      },
      {
        "ans": "<strong>(a)</strong> $AS^2 = 2r \\cdot AD$ <br><strong>(b)</strong> $\\theta = 30^\\circ, AS = r\\sqrt{3}$ ",
        "feedback": "In part (b), you misidentified the angle. While $\\sin(30^\\circ) = 1/2$, it is $\\cos(60^\\circ)$ that equals $1/2$."
      },
      {
        "ans": "<strong>(a)</strong> $AS^2 = 2r \\cdot AD$ <br><strong>(b)</strong> $\\theta = 60^\\circ, AS = 3r$ ",
        "feedback": "In part (b), you forgot to take the square root of the $3r^2$ term to find the length $AS$."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Coordinate Geometry as a Proof Tool",
      "content": "When asked to prove geometric relations inside a circle, do not hesitate to overlay a Cartesian coordinate system. Placing the centre of the circle at the origin often transforms complicated trigonometric proofs into simple distance-formula algebra!"
    }
  },
  {
    "id": "004429",
    "group_id": "004426",
    "board": "CCEA",
    "branch": "Pure",
    "level": "AS",
    "major_area": "Coordinate Geometry",
    "topic": "Circles",
    "subtopic": [
      "Tangents and Normals",
      "Trigonometry"
    ],
    "img": "images/Pure_PNGs/004429.png",
    "question": "The diagram shows a circle with centre $O$ and radius $r$. $AOB$ is a diameter of the circle. $T$ lies on the circumference. The tangent to the circle at $T$ meets the extension of the diameter $AB$ at $P$. The acute angle $\\angle TOP$ is $\\theta$. $OA = OB = r$ and $OP = x$.<br><br><strong>(a)</strong> Show that the length of the tangent $TP$ satisfies:$$TP^2 = r^2\\tan^2 \\theta$$[5]<br><br><strong>(b)</strong> When the distance $BP$ is exactly equal to the radius $r$, find the exact value of $\\theta$ in degrees. [7]",
    "steps": [
      "<strong>Step 1: Set up the right-angled triangle relations for part (a)</strong><br><br>A fundamental circle theorem states that a tangent line is always perpendicular to the radius at the point of contact. Therefore, the radius $OT$ is perpendicular to the tangent $TP$, making $OTP$ a right-angled triangle with $\\angle OTP = 90^\\circ$.",
      "<strong>Step 2: Relate the tangent to $\\theta$ and complete part (a)</strong><br><br>In the right-angled triangle $OTP$, the angle at $O$ is $\\theta$. Using basic right-angled trigonometry:\\begin{aligned} \\tan \\theta &= \\dfrac{TP}{OT} \\cr &= \\dfrac{TP}{r} \\cr TP &= r\\tan \\theta \\cr TP^2 &= r^2\\tan^2 \\theta \\end{aligned}",
      "<strong>Step 3: Analyze the boundary conditions in part (b)</strong><br><br>The diameter $AB$ lies along the straight line through $O$, with $B$ located between the center $O$ and the point $P$. Since the distance $BP$ is given as exactly equal to the radius $r$, calculate the total hypotenuse length $OP$:\\begin{aligned} OP &= OB + BP \\cr &= r + r \\cr &= 2r \\end{aligned}",
      "<strong>Step 4: Solve for the exact angle $\\theta$</strong><br><br>In right-angled triangle $OTP$ (where the hypotenuse is $OP = 2r$ and the adjacent side to angle $\\theta$ is $OT = r$), use the cosine ratio:\\begin{aligned} \\cos \\theta &= \\dfrac{OT}{OP} \\cr &= \\dfrac{r}{2r} \\cr &= \\dfrac{1}{2} \\end{aligned}Since $\\theta$ is acute, we solve to get:$$\\theta = 60^\\circ$$",
      "<strong>Final Answer</strong><br><strong>(a)</strong> $TP^2 = r^2\\tan^2 \\theta$ <br><strong>(b)</strong> $\\theta = 60^\\circ$"
    ],
    "pi_options": [
      {
        "ans": "<strong>(a)</strong> $TP^2 = r^2\\tan^2 \\theta$ <br><strong>(b)</strong> $\\theta = 30^\\circ$ ",
        "feedback": "In part (b), check your exact values. While $\\sin(30^\\circ) = 1/2$, the cosine ratio in this triangle adjacent/hypotenuse requires $\\cos(60^\\circ) = 1/2$."
      },
      {
        "ans": "<strong>(a)</strong> $TP^2 = r^2\\tan^2 \\theta$ <br><strong>(b)</strong> $\\theta = 45^\\circ$ ",
        "feedback": "In part (b), you may have assumed the triangle was isosceles. However, the hypotenuse $2r$ is twice the adjacent side $r$, which determines a $60^\\circ$ angle."
      },
      {
        "ans": "<strong>(a)</strong> $TP^2 = r^2\\tan^2 \\theta$ <br><strong>(b)</strong> $\\theta = 41.8^\\circ$ ",
        "feedback": "In part (b), you may have used the sine ratio instead of the cosine ratio or had your calculator in the wrong mode."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Tangent Perpendicularity",
      "content": "In any coordinate or geometric problem involving circle tangents, your first step should always be to indicate a right angle between the tangent and the radius at the point of tangency."
    }
  },
  {
    "id": "004430",
    "group_id": "004426",
    "board": "CCEA",
    "branch": "Pure",
    "level": "AS",
    "major_area": "Coordinate Geometry",
    "topic": "Circles",
    "subtopic": [
      "Circle Geometry",
      "Trigonometry"
    ],
    "img": "images/Pure_PNGs/004430.png",
    "question": "The diagram shows a sketch of a semicircle with diameter $AB$ and centre $O$. $C$ lies on the circumference of the semicircle. The angle $\\angle CAB$ is $\\theta$ and $OA = OB = r$.<br><br><strong>(a)</strong> By considering the right-angled triangle $ACB$ in the semicircle, show that:$$BC^2 = 4r^2\\sin^2 \\theta$$[5]<br><br><strong>(b)</strong> When $BC = r$, find the exact value of the angle $\\theta$ in degrees. [7]",
    "steps": [
      "<strong>Step 1: Apply the circle theorem for angles in a semicircle for part (a)</strong><br><br>A fundamental circle theorem states that the angle subtended by a diameter at any point on the circumference of a circle is a right angle ($90^\\circ$). Since $AB$ is a diameter, we have:$$\\angle ACB = 90^\\circ$$",
      "<strong>Step 2: Set up the trigonometric ratio and complete part (a)</strong><br><br>In right-angled triangle $ACB$, the hypotenuse is the diameter $AB = 2r$. The side opposite angle $\\theta$ is $BC$. Apply the sine ratio:\\begin{aligned} \\sin \\theta &= \\dfrac{BC}{AB} \\cr &= \\dfrac{BC}{2r} \\cr BC &= 2r\\sin \\theta \\end{aligned}Square both sides of this equation to get the required proof:\\begin{aligned} BC^2 &= (2r\\sin \\theta)^2 \\cr &= 4r^2\\sin^2 \\theta \\end{aligned}",
      "<strong>Step 3: Apply the condition in part (b) and simplify</strong><br><br>We are given that $BC = r$. Substitute this into the formula from part (a):\\begin{aligned} r^2 &= 4r^2\\sin^2 \\theta \\end{aligned}",
      "<strong>Step 4: Solve for the exact angle $\\theta$</strong><br><br>Since $r \\neq 0$, we can divide both sides of the equation by $r^2$:\\begin{aligned} 1 &= 4\\sin^2 \\theta \\cr \\sin^2 \\theta &= \\dfrac{1}{4} \\cr \\sin \\theta &= \\dfrac{1}{2} \\end{aligned}Since $\\theta$ is an acute angle in the triangle, we solve to find the principal angle:$$\\theta = 30^\\circ$$",
      "<strong>Final Answer</strong><br><strong>(a)</strong> $BC^2 = 4r^2\\sin^2 \\theta$ <br><strong>(b)</strong> $\\theta = 30^\\circ$"
    ],
    "pi_options": [
      {
        "ans": "<strong>(a)</strong> $BC^2 = 4r^2\\sin^2 \\theta$ <br><strong>(b)</strong> $\\theta = 60^\\circ$ ",
        "feedback": "In part (b), check your exact values. While $\\cos(60^\\circ) = 1/2$, the sine ratio $\\sin(\\theta) = 1/2$ corresponds to $30^\\circ$."
      },
      {
        "ans": "<strong>(a)</strong> $BC^2 = 4r^2\\sin^2 \\theta$ <br><strong>(b)</strong> $\\theta = 45^\\circ$ ",
        "feedback": "In part (b), you may have assumed an isosceles triangle. However, the side $BC=r$ is exactly half the length of the hypotenuse $AB=2r$, which defines a $30$-$60$-$90$ triangle."
      },
      {
        "ans": "<strong>(a)</strong> $BC^2 = 4r^2\\sin^2 \\theta$ <br><strong>(b)</strong> $\\theta = 14.5^\\circ$ ",
        "feedback": "In part (b), you may have made an error when rearranging $\\sin^2 \\theta = 1/4$ or used the wrong mode on your calculator."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Semicircle Right Angles",
      "content": "Always remember the theorem: 'The angle in a semicircle is a right angle.' Whenever you see a triangle drawn inside a circle where one side is the diameter, you can instantly assume the opposite vertex has a $90^\\circ$ angle."
    }
  },
  {
    "id": "004431",
    "group_id": "004431",
    "board": "Edexcel",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
      "Functions and Mappings"
    ],
    "img": false,
    "question": "The function $g$ is defined by:\\begin{aligned} &g(x) = \\dfrac{3x + 1}{x - 1} \\cr &x \\ge 3 \\end{aligned}<strong>(a)</strong> Find $gg(3)$. [2]<br><br><strong>(b)</strong> State the range of $g$. [1]<br><br><strong>(c)</strong> Find $g^{-1}(x)$, stating its domain. [3]",
    "steps": [
      "<strong>Step 1: Evaluate the inner function for part (a)</strong><br>To evaluate the composite function $gg(3)$, first substitute $x = 3$ directly into the definition of $g(x)$:\\begin{aligned} g(3) &= \\dfrac{3(3) + 1}{3 - 1} \\cr &= \\dfrac{10}{2} \\cr &= 5 \\end{aligned}",
      "<strong>Step 2: Evaluate the outer function to find $gg(3)$</strong><br>Now, substitute your result $5$ back into the function $g(x)$:\\begin{aligned} gg(3) &= g(5) \\cr &= \\dfrac{3(5) + 1}{5 - 1} \\cr &= \\dfrac{16}{4} \\cr &= 4 \\end{aligned}",
      "<strong>Step 3: Analyze the behavior of the function for part (b)</strong><br>As $x \\to \\infty$, the rational function $g(x) = \\dfrac{3x + 1}{x - 1}$ approaches its horizontal asymptote:\\begin{aligned} y &\\to \\dfrac{3}{1} \\cr &= 3 \\end{aligned}Since the function is strictly decreasing for $x \\ge 3$, its maximum value occurs at the starting boundary $x = 3$, where $g(3) = 5$. Therefore, the range of outputs is restricted to:$$3 < g(x) \\le 5$$",
      "<strong>Step 4: Set up the inverse function equation for part (c)</strong><br>Let $y = g(x)$ and rearrange the equation to make $x$ the subject:\\begin{aligned} y &= \\dfrac{3x + 1}{x - 1} \\cr y(x - 1) &= 3x + 1 \\cr yx - y &= 3x + 1 \\end{aligned}",
      "<strong>Step 5: Isolate and solve for $x$</strong><br>Group all terms containing $x$ on one side and factorise:\\begin{aligned} yx - 3x &= y + 1 \\cr x(y - 3) &= y + 1 \\cr x &= \\dfrac{y + 1}{y - 3} \\end{aligned}Replacing $y$ with $x$ yields:$$g^{-1}(x) = \\dfrac{x + 1}{x - 3}$$",
      "<strong>Step 6: State the domain of the inverse function</strong><br>The domain of the inverse function $g^{-1}(x)$ is identical to the range of the original function $g(x)$ calculated in Step 3:$$\\text{Domain: } 3 < x \\le 5$$",
      "<strong>Final Answer</strong>\\begin{aligned} &\\text{(a) } gg(3) = 4 \\cr &\\text{(b) } 3 < g(x) \\le 5 \\cr &\\text{(c) } g^{-1}(x) = \\dfrac{x + 1}{x - 3} \\cr &\\quad\\text{Domain: } 3 < x \\le 5 \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\text{(a) } gg(3) = 4 \\cr &\\text{(b) } 3 < g(x) \\le 5 \\cr &\\text{(c) } g^{-1}(x) = \\dfrac{x + 1}{x - 3} \\cr &\\quad\\text{Domain: } x \\ge 3 \\end{aligned}",
        "feedback": "Your calculation for part (a) is correct. However, for part (c), you assumed the domain of the inverse is the same as the domain of the original function. The domain of $g^{-1}(x)$ must equal the range of $g(x)$."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } gg(3) = 5 \\cr &\\text{(b) } g(x) \\neq 3 \\cr &\\text{(c) } g^{-1}(x) = \\dfrac{x + 1}{x - 3} \\cr &\\quad\\text{Domain: } x \\neq 3 \\end{aligned}",
        "feedback": "In part (a), you only calculated $g(3)$ and forgot the second application of the function. In part (c), you identified the algebraic restriction $x \\neq 3$ but ignored the bounds created by the original domain $x \\ge 3$."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } gg(3) = 4 \\cr &\\text{(b) } 3 \\le g(x) \\le 5 \\cr &\\text{(c) } g^{-1}(x) = \\dfrac{x + 1}{x - 3} \\cr &\\quad\\text{Domain: } 3 \\le x \\le 5 \\end{aligned}",
        "feedback": "In part (b), you used a non-strict inequality for the lower bound. Since $y=3$ is a horizontal asymptote that the curve never actually reaches, the range (and inverse domain) must be strictly $x > 3$."
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
    "group_id": "004431",
    "board": "Edexcel",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
      "Functions and Mappings"
    ],
    "img": false,
    "question": "The function $h$ is defined by:\\begin{aligned} &h(x) = \\dfrac{4x + 2}{x - 2} \\cr &x \\ge 3 \\end{aligned}<strong>(a)</strong> Find $hh(3)$. [2]<br><br><strong>(b)</strong> State the range of $h$. [1]<br><br><strong>(c)</strong> Find $h^{-1}(x)$, stating its domain. [3]",
    "steps": [
      "<strong>Step 1: Evaluate the inner function for part (a)</strong><br>To find the composite function value $hh(3)$, first substitute $x = 3$ into the function $h(x)$:\\begin{aligned} h(3) &= \\dfrac{4(3) + 2}{3 - 2} \\cr &= \\dfrac{14}{1} \\cr &= 14 \\end{aligned}",
      "<strong>Step 2: Evaluate the outer function to find $hh(3)$</strong><br>Now, substitute $14$ back into the function $h(x)$:\\begin{aligned} hh(3) &= h(14) \\cr &= \\dfrac{4(14) + 2}{14 - 2} \\cr &= \\dfrac{58}{12} \\cr &= \\dfrac{29}{6} \\end{aligned}",
      "<strong>Step 3: Determine the range of $h$ for part (b)</strong><br>As $x \\to \\infty$, the rational function $h(x) = \\dfrac{4x + 2}{x - 2} approaches its horizontal asymptote:\\begin{aligned} y &\\to \\dfrac{4}{1} \\cr &= 4 \\end{aligned}Since the function is continuous and decreasing for $x \\ge 3$, its maximum value occurs at the boundary $x = 3$, where $h(3) = 14$. Thus, the range of $h$ is restricted to:$$4 < h(x) \\le 14$$",
      "<strong>Step 4: Set up the inverse function equation for part (c)</strong><br>Let $y = h(x)$ and rearrange the expression to make $x$ the subject:\\begin{aligned} y &= \\dfrac{4x + 2}{x - 2} \\cr y(x - 2) &= 4x + 2 \\cr yx - 2y &= 4x + 2 \\end{aligned}",
      "<strong>Step 5: Isolate and solve for $x$</strong><br>Move all terms containing $x$ to one side and factorise:\\begin{aligned} yx - 4x &= 2y + 2 \\cr x(y - 4) &= 2(y + 1) \\cr x &= \\dfrac{2y + 2}{y - 4} \\end{aligned}Replacing $y$ with $x$ gives:$$h^{-1}(x) = \\dfrac{2x + 2}{x - 4}$$",
      "<strong>Step 6: State the domain of the inverse function</strong><br>The domain of $h^{-1}(x)$ is equal to the range of the original function $h(x)$ calculated in Step 3:$$\\text{Domain: } 4 < x \\le 14$$",
      "<strong>Final Answer</strong>\\begin{aligned} &\\text{(a) } hh(3) = \\dfrac{29}{6} \\cr &\\text{(b) } 4 < h(x) \\le 14 \\cr &\\text{(c) } h^{-1}(x) = \\dfrac{2x + 2}{x - 4} \\cr &\\quad\\text{Domain: } 4 < x \\le 14 \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\text{(a) } hh(3) = \\dfrac{29}{6} \\cr &\\text{(b) } 4 < h(x) \\le 14 \\cr &\\text{(c) } h^{-1}(x) = \\dfrac{2x + 2}{x - 4} \\cr &\\quad\\text{Domain: } x \\ge 3 \\end{aligned}",
        "feedback": "Parts (a) and (b) are correct, but for part (c), you correctly found the inverse expression but incorrectly stated the domain of the original function instead of its range."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } hh(3) = 14 \\cr &\\text{(b) } h(x) \\neq 4 \\cr &\\text{(c) } h^{-1}(x) = \\dfrac{2x + 2}{x - 4} \\cr &\\quad\\text{Domain: } x \\neq 4 \\end{aligned}",
        "feedback": "In part (a), you only calculated the first stage of the composition. In part (c), you provided the algebraic domain of the expression rather than the domain restricted by the original function's range."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } hh(3) = \\dfrac{29}{6} \\cr &\\text{(b) } 4 \\le h(x) \\le 14 \\cr &\\text{(c) } h^{-1}(x) = \\dfrac{2x + 2}{x - 4} \\cr &\\quad\\text{Domain: } 4 \\le x \\le 14 \\end{aligned}",
        "feedback": "Your calculation for part (a) is correct. In part (b) and (c), however, you must use a strict inequality for the lower bound because the function never actually reaches its horizontal asymptote at $y=4$."
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
    "group_id": "004431",
    "board": "Edexcel",
    "branch": "Pure",
    "level": "A",
    "major_area": "Exponentials and Logarithms",
    "topic": "Functions",
    "subtopic": [
      "Exponential and Logarithmic Functions and Graphs",
      "Functions and Mappings"
    ],
    "img": false,
    "question": "The functions $f$ and $g$ are defined by:\\begin{aligned} &f(x) = \\ln(x - 2) \\cr &\\quad x > 3 \\cr &g(x) = \\mathrm{e}^{2x} + 2 \\cr &\\quad x \\in \\mathbb{R} \\end{aligned}<strong>(a)</strong> Find an expression for the composite function $fg(x)$, writing your answer in its simplest form. [2]<br><br><strong>(b)</strong> State the range of $f$. [1]<br><br><strong>(c)</strong> Find $f^{-1}(x)$, stating its domain. [3]",
    "steps": [
      "<strong>Step 1: Set up the composite function for part (a)</strong><br>To find the composite function $fg(x)$, substitute the entire expression of $g(x)$ as the input inside $f(x)$:\\begin{aligned} fg(x) &= f(g(x)) \\cr &= \\ln((\\mathrm{e}^{2x} + 2) - 2) \\end{aligned}",
      "<strong>Step 2: Simplify the composite expression</strong><br>Simplify the terms inside the natural logarithm:\\begin{aligned} fg(x) &= \\ln(\\mathrm{e}^{2x}) \\cr &= 2x \\end{aligned}",
      "<strong>Step 3: Determine the range of $f$ for part (b)</strong><br>Since the domain of $f(x) = \\ln(x - 2)$ is $x > 3$, evaluate the boundary value:\\begin{aligned} f(3) &= \\ln(3 - 2) \\cr &= \\ln(1) \\cr &= 0 \\end{aligned}Since $\\ln(x - 2)$ is a strictly increasing function, for all $x > 3$, $f(x)$ will be greater than $0$. Thus, the range of $f$ is:$$f(x) > 0$$",
      "<strong>Step 4: Set up the inverse function equation for part (c)</strong><br>Let $y = f(x)$ and rearrange the logarithmic equation to solve for $x$:\\begin{aligned} y &= \\ln(x - 2) \\cr \\mathrm{e}^y &= x - 2 \\end{aligned}",
      "<strong>Step 5: Solve for $x$ to find the inverse</strong><br>Isolate $x$ on one side:\\begin{aligned} x &= \\mathrm{e}^y + 2 \\end{aligned}Replacing $y$ with $x$ gives:$$f^{-1}(x) = \\mathrm{e}^x + 2$$",
      "<strong>Step 6: State the domain of the inverse function</strong><br>The domain of $f^{-1}(x)$ is equal to the range of the original function $f(x)$ calculated in Step 3:$$\\text{Domain: } x > 0$$",
      "<strong>Final Answer</strong>\\begin{aligned} &\\text{(a) } fg(x) = 2x \\cr &\\text{(b) } f(x) > 0 \\cr &\\text{(c) } f^{-1}(x) = \\mathrm{e}^x + 2 \\cr &\\quad\\text{Domain: } x > 0 \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\text{(a) } fg(x) = 2x \\cr &\\text{(b) } f(x) > 0 \\cr &\\text{(c) } f^{-1}(x) = \\mathrm{e}^x + 2 \\cr &\\quad\\text{Domain: } x > 3 \\end{aligned}",
        "feedback": "Parts (a) and (b) are correct. In part (c), you correctly found the inverse but erroneously used the domain of $f$ as the domain of $f^{-1}$."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } fg(x) = \\ln(e^{2x}) \\cr &\\text{(b) } f(x) > 0 \\cr &\\text{(c) } f^{-1}(x) = \\mathrm{e}^{x + 2} \\cr &\\quad\\text{Domain: } x > 0 \\end{aligned}",
        "feedback": "In part (a), you did not provide the simplest form. In part (c), you incorrectly applied the addition of 2 inside the exponential power instead of as a separate constant term."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } fg(x) = 2x \\cr &\\text{(b) } f(x) < 0 \\cr &\\text{(c) } f^{-1}(x) = \\mathrm{e}^x - 2 \\cr &\\quad\\text{Domain: } x > 0 \\end{aligned}",
        "feedback": "In part (b), you reversed the inequality; $f(x)$ is increasing. In part (c), you made a sign error when rearranging the equation to isolate $x$."
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
    "group_id": "004431",
    "board": "Edexcel",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
      "Functions and Mappings",
      "Quadratics"
    ],
    "img": false,
    "question": "The function $f$ is defined by:\\begin{aligned} &f(x) = x^2 - 4x + 9 \\cr &x \\ge 2 \\end{aligned}<strong>(a)</strong> Find $ff(3)$. [2]<br><br><strong>(b)</strong> State the range of $f$. [1]<br><br><strong>(c)</strong> Find $f^{-1}(x)$, stating its domain. [3]",
    "steps": [
      "<strong>Step 1: Evaluate the inner function for part (a)</strong><br>To find the composite function value $ff(3)$, first evaluate the function at $x = 3$:\\begin{aligned} f(3) &= 3^2 - 4(3) + 9 \\cr &= 9 - 12 + 9 \\cr &= 6 \\end{aligned}",
      "<strong>Step 2: Evaluate the outer function to find $ff(3)$</strong><br>Now, substitute your result $6$ back into the function $f(x)$:\\begin{aligned} ff(3) &= f(6) \\cr &= 6^2 - 4(6) + 9 \\cr &= 36 - 24 + 9 \\cr &= 21 \\end{aligned}",
      "<strong>Step 3: Determine the range of $f$ for part (b)</strong><br>To find the range of the quadratic function $f(x) = x^2 - 4x + 9$, complete the square to locate its vertex:\\begin{aligned} f(x) &= (x - 2)^2 - 4 + 9 \\cr &= (x - 2)^2 + 5 \\end{aligned}Since $x \\ge 2$, the term $(x - 2)^2 \\ge 0$, meaning the minimum value of $f(x)$ is $5$. The range of $f$ is:$$f(x) \\ge 5$$",
      "<strong>Step 4: Set up the inverse function equation for part (c)</strong><br>Let $y = f(x)$ and use the completed square form to rearrange for $x$:\\begin{aligned} y &= (x - 2)^2 + 5 \\cr y - 5 &= (x - 2)^2 \\end{aligned}",
      "<strong>Step 5: Solve for $x$ to find the inverse</strong><br>Take the square root of both sides. Since our domain is restricted to $x \\ge 2$, we take the positive square root:\\begin{aligned} x - 2 &= \\sqrt{y - 5} \\cr x &= 2 + \\sqrt{y - 5} \\end{aligned}Replacing $y$ with $x$ yields:$$f^{-1}(x) = 2 + \\sqrt{x - 5}$$",
      "<strong>Step 6: State the domain of the inverse function</strong><br>The domain of $f^{-1}(x)$ is equal to the range of the original function $f(x)$ calculated in Step 3:$$\\text{Domain: } x \\ge 5$$",
      "<strong>Final Answer</strong>\\begin{aligned} &\\text{(a) } ff(3) = 21 \\cr &\\text{(b) } f(x) \\ge 5 \\cr &\\text{(c) } f^{-1}(x) = 2 + \\sqrt{x - 5} \\cr &\\quad\\text{Domain: } x \\ge 5 \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\text{(a) } ff(3) = 21 \\cr &\\text{(b) } f(x) \\ge 5 \\cr &\\text{(c) } f^{-1}(x) = 2 + \\sqrt{x - 5} \\cr &\\quad\\text{Domain: } x \\ge 2 \\end{aligned}",
        "feedback": "Parts (a) and (b) are correct. For part (c), you must remember that the domain of an inverse function is strictly defined by the range of the original function, which is $x \\ge 5$."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } ff(3) = 6 \\cr &\\text{(b) } f(x) \\ge 5 \\cr &\\text{(c) } f^{-1}(x) = 2 - \\sqrt{x - 5} \\cr &\\quad\\text{Domain: } x \\ge 5 \\end{aligned}",
        "feedback": "In part (a), you only calculated $f(3)$. In part (c), because the original domain is $x \\ge 2$, the term $x-2$ is positive, so you must use the positive square root for the inverse."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } ff(3) = 21 \\cr &\\text{(b) } f(x) \\ge 9 \\cr &\\text{(c) } f^{-1}(x) = 2 + \\sqrt{x + 5} \\cr &\\quad\\text{Domain: } x \\ge 5 \\end{aligned}",
        "feedback": "In part (b), you likely used the constant term 9 as the range boundary instead of finding the vertex. In part (c), you made a sign error when rearranging the equation."
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
    "group_id": "004431",
    "board": "Edexcel",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
      "Functions and Mappings"
    ],
    "img": false,
    "question": "The function $g$ is defined by:\\begin{aligned} &g(x) = 1 + \\sqrt{x - 3} \\cr &x \\ge 3 \\end{aligned}<strong>(a)</strong> Find $gg(7)$. [2]<br><br><strong>(b)</strong> State the range of $g$. [1]<br><br><strong>(c)</strong> Find $g^{-1}(x)$, stating its domain. [3]",
    "steps": [
      "<strong>Step 1: Evaluate the inner function for part (a)</strong><br>To evaluate the composite function $gg(7)$, first find the value of $g(7)$ by substituting $x = 7$:\\begin{aligned} g(7) &= 1 + \\sqrt{7 - 3} \\cr &= 1 + \\sqrt{4} \\cr &= 1 + 2 \\cr &= 3 \\end{aligned}",
      "<strong>Step 2: Evaluate the outer function to find $gg(7)$</strong><br>Now substitute $3$ back into the function $g(x)$:\\begin{aligned} gg(7) &= g(3) \\cr &= 1 + \\sqrt{3 - 3} \\cr &= 1 + 0 \\cr &= 1 \\end{aligned}",
      "<strong>Step 3: Determine the range of $g$ for part (b)</strong><br>For $x \\ge 3$, the square root term $\\sqrt{x - 3}$ is always non-negative ($\\ge 0$). Thus, the minimum value of $g(x)$ occurs when $\\sqrt{x - 3} = 0$, which yields $g(3) = 1$. The range of $g$ is:$$g(x) \\ge 1$$",
      "<strong>Step 4: Set up the inverse function equation for part (c)</strong><br>Let $y = g(x)$ and rearrange the radical equation to solve for $x$:\\begin{aligned} y &= 1 + \\sqrt{x - 3} \\cr y - 1 &= \\sqrt{x - 3} \\end{aligned}",
      "<strong>Step 5: Square both sides and isolate $x$</strong><br>Square both sides of the equation to eliminate the radical:\\begin{aligned} (y - 1)^2 &= x - 3 \\cr x &= (y - 1)^2 + 3 \\end{aligned}Replacing $y$ with $x$ yields:$$g^{-1}(x) = (x - 1)^2 + 3$$",
      "<strong>Step 6: State the domain of the inverse function</strong><br>The domain of $g^{-1}(x)$ is equal to the range of the original function $g(x)$ calculated in Step 3:$$\\text{Domain: } x \\ge 1$$",
      "<strong>Final Answer</strong>\\begin{aligned} &\\text{(a) } gg(7) = 1 \\cr &\\text{(b) } g(x) \\ge 1 \\cr &\\text{(c) } g^{-1}(x) = (x - 1)^2 + 3 \\cr &\\quad\\text{Domain: } x \\ge 1 \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\text{(a) } gg(7) = 1 \\cr &\\text{(b) } g(x) \\ge 1 \\cr &\\text{(c) } g^{-1}(x) = (x - 1)^2 + 3 \\cr &\\quad\\text{Domain: } x \\ge 3 \\end{aligned}",
        "feedback": "Parts (a) and (b) are correct. In part (c), you correctly calculated the inverse expression but mistakenly reused the domain of the original function as the domain for $g^{-1}$."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } gg(7) = 3 \\cr &\\text{(b) } g(x) \\ge 1 \\cr &\\text{(c) } g^{-1}(x) = (x + 1)^2 + 3 \\cr &\\quad\\text{Domain: } x \\ge 1 \\end{aligned}",
        "feedback": "In part (a), you stopped after the first stage. In part (c), you made a sign error when moving the 1 to the other side of the equation before squaring."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } gg(7) = 1 \\cr &\\text{(b) } g(x) \\ge 3 \\cr &\\text{(c) } g^{-1}(x) = (x - 1)^2 - 3 \\cr &\\quad\\text{Domain: } x \\ge 1 \\end{aligned}",
        "feedback": "In part (b), you used the domain boundary as the range boundary. In part (c), you made a sign error when isolating $x$ at the final step."
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
    "group_id": "004436",
    "board": "Edexcel",
    "branch": "Pure",
    "level": "A",
    "major_area": "Vectors",
    "topic": "Vectors",
    "subtopic": [
      "Vector Properties"
    ],
    "img": false,
    "question": "Relative to a fixed origin $O$, the point $A$ has position vector $(3\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k})$, the point $B$ has position vector $(5\\mathbf{i} - \\mathbf{j} + 4\\mathbf{k})$, and the point $C$ has position vector $(p\\mathbf{i} + 4\\mathbf{j} - \\mathbf{k})$, where $p$ is a constant and $p < 0$. $D$ is the point such that $\\vec{AB} = \\vec{BD}$.<br><br><strong>(a)</strong> Find the position vector of $D$. [2]<br><br><strong>(b)</strong> Given that $|\\vec{AC}| = 5$, find the value of $p$. [3]",
    "steps": [
      "<strong>Step 1: Calculate the displacement vector $\\vec{AB}$ for part (a)</strong><br>Subtract the position vector of $A$ from the position vector of $B$:\\begin{aligned} &\\vec{AB} = \\mathbf{b} - \\mathbf{a} \\cr &\\quad = (5\\mathbf{i} - \\mathbf{j} + 4\\mathbf{k}) \\cr &\\qquad - (3\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k}) \\cr &\\quad = 2\\mathbf{i} - 2\\mathbf{j} + 6\\mathbf{k} \\end{aligned}",
      "<strong>Step 2: Solve for the position vector of $D$</strong><br>Since $\\vec{AB} = \\vec{BD}$, the point $B$ is the midpoint of the line segment $AD$. We can find the position vector of $D$ by adding $\\vec{AB}$ to the position vector of $B$:\\begin{aligned} &\\mathbf{d} = \\mathbf{b} + \\vec{BD} \\cr &\\quad = \\mathbf{b} + \\vec{AB} \\cr &\\quad = (5\\mathbf{i} - \\mathbf{j} + 4\\mathbf{k}) \\cr &\\qquad + (2\\mathbf{i} - \\mathbf{j} + 6\\mathbf{k}) \\cr &\\quad = 7\\mathbf{i} - 3\\mathbf{j} + 10\\mathbf{k} \\end{aligned}",
      "<strong>Step 3: Express the displacement vector $\\vec{AC}$ for part (b)</strong><br>Subtract the position vector of $A$ from the position vector of $C$:\\begin{aligned} &\\vec{AC} = \\mathbf{c} - \\mathbf{a} \\cr &\\quad = (p\\mathbf{i} + 4\\mathbf{j} - \\mathbf{k}) \\cr &\\qquad - (3\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k}) \\cr &\\quad = (p - 3)\\mathbf{i} + 3\\mathbf{j} + \\mathbf{k} \\end{aligned}",
      "<strong>Step 4: Set up the magnitude equation</strong><br>The magnitude of a vector $\\mathbf{v} = x\\mathbf{i} + y\\mathbf{j} + z\\mathbf{k}$ is $|\\mathbf{v}| = \\sqrt{x^2 + y^2 + z^2}$. Set the squared magnitude of $\\vec{AC}$ equal to $5^2$:\\begin{aligned} |\\vec{AC}|^2 &= (p - 3)^2 + 3^2 + 1^2 \\cr 5^2 &= (p - 3)^2 + 9 + 1 \\cr 25 &= (p - 3)^2 + 10 \\end{aligned}",
      "<strong>Step 5: Solve the quadratic equation for $p$</strong><br>Isolate the squared term and solve:\\begin{aligned} (p - 3)^2 &= 15 \\cr p - 3 &= \\pm\\sqrt{15} \\cr p &= 3 \\pm \\sqrt{15} \\end{aligned}Since the question specifies that $p < 0$, we must discard the positive root, leaving us with:$$p = 3 - \\sqrt{15}$$",
      "<strong>Final Answer</strong>\\begin{aligned} &\\text{(a) } \\mathbf{d} = 7\\mathbf{i} - 3\\mathbf{j} + 10\\mathbf{k} \\cr &\\text{(b) } p = 3 - \\sqrt{15} \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\text{(a) } \\mathbf{d} = 7\\mathbf{i} - 3\\mathbf{j} + 10\\mathbf{k} \\cr &\\text{(b) } p = 3 + \\sqrt{15} \\end{aligned}",
        "feedback": "Your vector for part (a) is correct, but for part (b), you failed to apply the constraint $p < 0$. $3 + \\sqrt{15}$ is positive, so only the negative root is valid."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } \\mathbf{d} = 7\\mathbf{i} - 3\\mathbf{j} + 10\\mathbf{k} \\cr &\\text{(b) } p = 3 - \\sqrt{5} \\end{aligned}",
        "feedback": "Check your arithmetic in part (b). When calculating the constant term in the magnitude equation, $3^2 + 1^2 = 10$. Subtracting this from 25 gives 15, not 5."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } \\mathbf{d} = 2\\mathbf{i} - 2\\mathbf{j} + 6\\mathbf{k} \\cr &\\text{(b) } p = 3 - \\sqrt{15} \\end{aligned}",
        "feedback": "In part (a), you provided the displacement vector $\\vec{AB}$ as the position vector of $D$. You must add this displacement to point $B$ to find the final position of $D$."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Displacement vs. Position Vectors",
      "content": "Always distinguish between a displacement vector (the vector path from one point to another, like $\\vec{ AB }$) and a position vector (the coordinates of a point relative to the origin, like $\\mathbf{ a }$ or $\\mathbf{ d }$)."
    }
  },
  {
    "id": "004437",
    "group_id": "004436",
    "board": "Edexcel",
    "branch": "Pure",
    "level": "A",
    "major_area": "Vectors",
    "topic": "Vectors",
    "subtopic": [
      "Vector Properties"
    ],
    "img": false,
    "question": "Relative to a fixed origin $O$, the point $A$ has position vector $(\\mathbf{i} + 4\\mathbf{j} - 3\\mathbf{k})$, the point $B$ has position vector $(3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k})$, and the point $C$ has position vector $(5\\mathbf{i} + q\\mathbf{j} + \\mathbf{k})$, where $q$ is a constant and $q > 0$. $D$ is the point such that $\\vec{AD} = 3\\vec{AB}$.<br><br><strong>(a)</strong> Find the position vector of $D$. [2]<br><br><strong>(b)</strong> Given that $|\\vec{BC}| = \\sqrt{21}$, find the value of $q$. [3]",
    "steps": [
      "<strong>Step 1: Calculate the displacement vector $\\vec{AB}$ for part (a)</strong><br>Subtract the position vector of $A$ from the position vector of $B$:\\begin{aligned} &\\vec{AB} = \\mathbf{b} - \\mathbf{a} \\cr &\\quad = (3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}) \\cr &\\qquad - (\\mathbf{i} + 4\\mathbf{j} - 3\\mathbf{k}) \\cr &\\quad = 2\\mathbf{i} - 3\\mathbf{j} + 5\\mathbf{k} \\end{aligned}",
      "<strong>Step 2: Find the position vector of $D$</strong><br>Multiply $\\vec{AB}$ by $3$ to find the displacement vector $\\vec{AD}$:\\begin{aligned} \\vec{AD} &= 3\\vec{AB} \\cr &= 3(2\\mathbf{i} - 3\\mathbf{j} + 5\\mathbf{k}) \\cr &= 6\\mathbf{i} - 9\\mathbf{j} + 15\\mathbf{k} \\end{aligned}Now, add $\\vec{AD}$ to the position vector of $A$ to obtain the position vector of $D$:\\begin{aligned} &\\mathbf{d} = \\mathbf{a} + \\vec{AD} \\cr &\\quad = (\\mathbf{i} + 4\\mathbf{j} - 3\\mathbf{k}) \\cr &\\qquad + (6\\mathbf{i} - 9\\mathbf{j} + 15\\mathbf{k}) \\cr &\\quad = 7\\mathbf{i} - 5\\mathbf{j} + 12\\mathbf{k} \\end{aligned}",
      "<strong>Step 3: Express the displacement vector $\\vec{BC}$ for part (b)</strong><br>Subtract the position vector of $B$ from the position vector of $C$:\\begin{aligned} &\\vec{BC} = \\mathbf{c} - \\mathbf{b} \\cr &\\quad = (5\\mathbf{i} + q\\mathbf{j} + \\mathbf{k}) \\cr &\\qquad - (3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}) \\cr &\\quad = 2\\mathbf{i} + (q - 1)\\mathbf{j} - \\mathbf{k} \\end{aligned}",
      "<strong>Step 4: Set up the magnitude equation</strong><br>Use the 3D magnitude formula and square both sides to remove the square root, setting $|\\vec{BC}|^2 = (\\sqrt{21})^2$:\\begin{aligned} |\\vec{BC}|^2 &= 2^2 + (q - 1)^2 + (-1)^2 \\cr 21 &= 4 + (q - 1)^2 + 1 \\cr 21 &= (q - 1)^2 + 5 \\end{aligned}",
      "<strong>Step 5: Solve the quadratic equation for $q$</strong><br>Isolate the squared term and solve for $q$:\\begin{aligned} (q - 1)^2 &= 16 \\cr q - 1 &= \\pm 4 \\cr q &= 1 \\pm 4 \\end{aligned}This yields two potential values: $q = 5$ or $q = -3$. Since the question specifies that $q > 0$, we discard $q = -3$ to get:$$q = 5$$",
      "<strong>Final Answer</strong>\\begin{aligned} &\\text{(a) } \\mathbf{d} = 7\\mathbf{i} - 5\\mathbf{j} + 12\\mathbf{k} \\cr &\\text{(b) } q = 5 \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\text{(a) } \\mathbf{d} = 7\\mathbf{i} - 5\\mathbf{j} + 12\\mathbf{k} \\cr &\\text{(b) } q = 5 \\text{ or } q = -3 \\end{aligned}",
        "feedback": "While your work in part (a) is correct, for part (b) you must discard the negative root because the question explicitly specifies that $q > 0$."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } \\mathbf{d} = 6\\mathbf{i} - 9\\mathbf{j} + 15\\mathbf{k} \\cr &\\text{(b) } q = 5 \\end{aligned}",
        "feedback": "In part (a), you provided the displacement vector $\\vec{AD}$. Position vectors are measured from the origin, so you must add $\\vec{AD}$ to the position vector of $A$."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } \\mathbf{d} = 7\\mathbf{i} - 5\\mathbf{j} + 12\\mathbf{k} \\cr &\\text{(b) } q = 1 + \\sqrt{17} \\end{aligned}",
        "feedback": "Check your magnitude algebra for part (b). $2^2 + (-1)^2 = 5$. Subtracting this from 21 gives 16, which is a perfect square. It appears you made a subtraction or component-squaring error."
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
    "group_id": "004436",
    "board": "Edexcel",
    "branch": "Pure",
    "level": "A",
    "major_area": "Vectors",
    "topic": "Vectors",
    "subtopic": [
      "Vector Properties"
    ],
    "img": false,
    "question": "Relative to a fixed origin $O$, the points $A$ and $B$ have position vectors:\\begin{aligned} \\mathbf{a} &= 4\\mathbf{i} - 2\\mathbf{j} + \\lambda\\mathbf{k} \\cr \\mathbf{b} &= 2\\mathbf{i} + 3\\mathbf{j} - \\mathbf{k} \\end{aligned}where $\\lambda$ is a constant.<br><br><strong>(a)</strong> Find the vector $\\vec{AB}$ in terms of $\\lambda$. [2]<br><br><strong>(b)</strong> Given that the vector $\\vec{AB}$ is perpendicular to the vector $\\mathbf{u} = 2\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}$, find the value of $\\lambda$. [3]",
    "steps": [
      "<strong>Step 1: Calculate the displacement vector $\\vec{AB}$ in terms of $\\lambda$</strong><br>Subtract the position vector of $A$ from the position vector of $B$:\\begin{aligned} &\\vec{AB} = \\mathbf{b} - \\mathbf{a} \\cr &\\quad = (2\\mathbf{i} + 3\\mathbf{j} - \\mathbf{k}) \\cr &\\qquad - (4\\mathbf{i} - 2\\mathbf{j} + \\lambda\\mathbf{k}) \\cr &\\quad = -2\\mathbf{i} + 5\\mathbf{j} - (1 + \\lambda)\\mathbf{k} \\end{aligned}",
      "<strong>Step 2: Understand the condition for perpendicular vectors</strong><br>Two vectors are perpendicular if and only if their scalar (dot) product is exactly equal to zero:$$\\vec{AB} \\cdot \\mathbf{u} = 0$$",
      "<strong>Step 3: Calculate the dot product</strong><br>Multiply the corresponding components of $\\vec{AB}$ and $\\mathbf{u}$ and add them together:\\begin{aligned} &\\vec{AB} \\cdot \\mathbf{u} \\cr &\\quad = (-2)(2) + (5)(2) \\cr &\\qquad - 3(1 + \\lambda) \\cr &\\quad = -4 + 10 - 3 - 3\\lambda \\cr &\\quad = 3 - 3\\lambda \\end{aligned}",
      "<strong>Step 4: Solve for $\\lambda$</strong><br>Set the scalar product equal to zero and solve the linear equation:\\begin{aligned} 3 - 3\\lambda &= 0 \\cr 3\\lambda &= 3 \\cr \\lambda &= 1 \\end{aligned}",
      "<strong>Final Answer</strong>\\begin{aligned} &\\text{(a) } \\vec{AB} = -2\\mathbf{i} + 5\\mathbf{j} - (1 + \\lambda)\\mathbf{k} \\cr &\\text{(b) } \\lambda = 1 \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\text{(a) } \\vec{AB} = -2\\mathbf{i} + 5\\mathbf{j} - (1 + \\lambda)\\mathbf{k} \\cr &\\text{(b) } \\lambda = -1 \\end{aligned}",
        "feedback": "You correctly found $\\vec{AB}$ but made a sign error when solving the dot product equation $3 - 3\\lambda = 0$."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } \\vec{AB} = -2\\mathbf{i} + 5\\mathbf{j} - (1 + \\lambda)\\mathbf{k} \\cr &\\text{(b) } \\lambda = 3 \\end{aligned}",
        "feedback": "Check your expansion of the dot product in part (b). Specifically, make sure you distributed the constant 3 correctly across $(1 + \\lambda)$."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } \\vec{AB} = 2\\mathbf{i} - 5\\mathbf{j} + (1 + \\lambda)\\mathbf{k} \\cr &\\text{(b) } \\lambda = 1 \\end{aligned}",
        "feedback": "In part (a), you subtracted the vectors in the wrong order. The displacement from $A$ to $B$ is always terminal minus initial: $\\mathbf{b} - \\mathbf{a}$."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Perpendicular Dot Product",
      "content": "The scalar product (dot product) is the most standard tool for proving or utilizing perpendicularity in vector geometry. Always remember: $\\mathbf{ a } \\cdot \\mathbf{ b } = 0 \\iff \\mathbf{ a } \\perp \\mathbf{ b }$."
    }
  },
  {
    "id": "004439",
    "group_id": "004436",
    "board": "Edexcel",
    "branch": "Pure",
    "level": "A",
    "major_area": "Vectors",
    "topic": "Vectors",
    "subtopic": [
      "Vector Properties"
    ],
    "img": false,
    "question": "The points $A$, $B$, and $C$ have position vectors relative to a fixed origin $O$ given by:\\begin{aligned} \\mathbf{a} &= 2\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k} \\cr \\mathbf{b} &= 5\\mathbf{i} + 5\\mathbf{j} - \\mathbf{k} \\cr \\mathbf{c} &= \\mu\\mathbf{i} + 13\\mathbf{j} - 11\\mathbf{k} \\end{aligned}where $\\mu$ is a constant.<br><br><strong>(a)</strong> Given that the points $A$, $B$, and $C$ lie on a straight line, find the value of the constant $\\mu$. [4]<br><br><strong>(b)</strong> Find the ratio in which the point $B$ divides the line segment $AC$. [2]",
    "steps": [
      "<strong>Step 1: Calculate the displacement vectors $\\vec{AB}$ and $\\vec{AC}$ for part (a)</strong><br>Subtract the corresponding coordinates to find the vectors:\\begin{aligned} &\\vec{AB} = \\mathbf{b} - \\mathbf{a} \\cr &\\quad = (5\\mathbf{i} + 5\\mathbf{j} - 3\\mathbf{k}) \\cr &\\qquad - (2\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k}) \\cr &\\quad = 3\\mathbf{i} + 6\\mathbf{j} - 6\\mathbf{k} \\end{aligned}and:\\begin{aligned} &\\vec{AC} = \\mathbf{c} - \\mathbf{a} \\cr &\\quad = (\\mu\\mathbf{i} + 13\\mathbf{j} - 11\\mathbf{k}) \\cr &\\qquad - (2\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k}) \\cr &\\quad = (\\mu - 2)\\mathbf{i} \\cr &\\qquad + 14\\mathbf{j} - 14\\mathbf{k} \\end{aligned}",
      "<strong>Step 2: Apply the condition for collinear points</strong><br>For points $A$, $B$, and $C$ to lie on a straight line (collinear), the displacement vectors $\\vec{AB}$ and $\\vec{AC}$ must be parallel. This means there exists a scalar constant $k$ such that:$$\\vec{AC} = k\\vec{AB}$$",
      "<strong>Step 3: Solve for $k$ using the known components</strong><br>Compare the $\\mathbf{j}$ components of the two vectors:\\begin{aligned} 14 &= 6k \\cr k &= \\dfrac{14}{6} \\cr &= \\dfrac{7}{3} \\end{aligned}Comparing the $\\mathbf{k}$ components confirms consistency:\\begin{aligned} -14 &= -6k \\cr k &= \\dfrac{-14}{-6} \\cr &= \\dfrac{7}{3} \\end{aligned}",
      "<strong>Step 4: Solve for the constant $\\mu$</strong><br>Equate the $\\mathbf{i}$ components using $k = \\dfrac{7}{3}$:\\begin{aligned} \\mu - 2 &= 3k \\cr \\mu - 2 &= 3\\left(\\dfrac{7}{3}\\right) \\cr \\mu - 2 &= 7 \\cr \\mu &= 9 \\end{aligned}",
      "<strong>Step 5: Determine the ratio in part (b)</strong><br>From our calculations, we have established that $\\vec{AC} = \\dfrac{7}{3}\\vec{AB}$. This means:\\begin{aligned} 3\\vec{AC} &= 7\\vec{AB} \\end{aligned}The total segment length $AC$ is represented by $7$ units of length, while the segment $AB$ is represented by $3$ units. Therefore, the remaining segment $BC$ is:\\begin{aligned} BC &= AC - AB \\cr &= 7 - 3 \\cr &= 4 \\end{aligned}Thus, the ratio in which $B$ divides $AC$ is:$$AB : BC = 3 : 4$$",
      "<strong>Final Answer</strong>\\begin{aligned} &\\text{(a) } \\mu = 9 \\cr &\\text{(b) } AB : BC = 3 : 4 \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\text{(a) } \\mu = 9 \\cr &\\text{(b) } AB : BC = 3 : 7 \\end{aligned}",
        "feedback": "In part (b), you gave the ratio of part to whole ($AB:AC$) instead of the ratio of the two internal segments ($AB:BC$)."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } \\mu = 7 \\cr &\\text{(b) } AB : BC = 3 : 4 \\end{aligned}",
        "feedback": "In part (a), you forgot to add the constant 2 when isolating $\\mu$ from the term $(\\mu - 2) = 7$."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } \\mu = 9 \\cr &\\text{(b) } AB : BC = 4 : 3 \\end{aligned}",
        "feedback": "In part (b), you reversed the ratio. Since $AB$ represents 3 parts of the 7-part total length $AC$, the ratio must be $3:4$."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Collinear Vectors",
      "content": "To prove that three points $A$, $B$, and $C$ are collinear, you must show two things: first, that two vectors formed by these points are parallel (i.e., $\\vec{ AC } = k\\vec{ AB }$); second, that they share a common point."
    }
  },
  {
    "id": "004440",
    "group_id": "004436",
    "board": "Edexcel",
    "branch": "Pure",
    "level": "A",
    "major_area": "Vectors",
    "topic": "Vectors",
    "subtopic": [
      "Trigonometry",
      "Vector Properties"
    ],
    "img": false,
    "question": "Relative to a fixed origin $O$, the points $A$, $B$, and $C$ have position vectors:\\begin{aligned} \\mathbf{a} &= \\mathbf{i} + 2\\mathbf{j} \\cr \\mathbf{b} &= 3\\mathbf{i} + \\mathbf{j} + 3\\mathbf{k} \\cr \\mathbf{c} &= 2\\mathbf{i} + 5\\mathbf{j} + 2\\mathbf{k} \\end{aligned}<strong>(a)</strong> Show that the triangle $ABC$ is isosceles. [3]<br><br><strong>(b)</strong> Find the exact perimeter of triangle $ABC$, giving your answer in the form $a\\sqrt{14} + b\\sqrt{2}$, where $a$ and $b$ are integers. [2]",
    "steps": [
      "<strong>Step 1: Calculate the displacement vectors representing the sides of the triangle</strong><br>Find the vectors $\\vec{AB}$, $\\vec{AC}$, and $\\vec{BC}$ by subtracting position vectors:\\begin{aligned} &\\vec{AB} = \\mathbf{b} - \\mathbf{a} \\cr &\\quad = (3\\mathbf{i} + \\mathbf{j} + 3\\mathbf{k}) \\cr &\\qquad - (\\mathbf{i} + 2\\mathbf{j}) \\cr &\\quad = 2\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k} \\end{aligned}and:\\begin{aligned} &\\vec{AC} = \\mathbf{c} - \\mathbf{a} \\cr &\\quad = (2\\mathbf{i} + 5\\mathbf{j} + 2\\mathbf{k}) \\cr &\\qquad - (\\mathbf{i} + 2\\mathbf{j}) \\cr &\\quad = \\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k} \\end{aligned}and:\\begin{aligned} &\\vec{BC} = \\mathbf{c} - \\mathbf{b} \\cr &\\quad = (2\\mathbf{i} + 5\\mathbf{j} + 2\\mathbf{k}) \\cr &\\qquad - (3\\mathbf{i} + \\mathbf{j} + 3\\mathbf{k}) \\cr &\\quad = -\\mathbf{i} + 4\\mathbf{j} - \\mathbf{k} \\end{aligned}",
      "<strong>Step 2: Calculate the lengths of sides $AB$ and $AC$</strong><br>Using the 3D magnitude formula, find the side lengths of the triangle:\\begin{aligned} |\\vec{AB}| &= \\sqrt{2^2 + (-1)^2 + 3^2} \\cr &= \\sqrt{4 + 1 + 9} \\cr &= \\sqrt{14} \\end{aligned}and:\\begin{aligned} |\\vec{AC}| &= \\sqrt{1^2 + 3^2 + 2^2} \\cr &= \\sqrt{1 + 9 + 4} \\cr &= \\sqrt{14} \\end{aligned}",
      "<strong>Step 3: Complete the proof for part (a)</strong><br>Since the side lengths $AB$ and $AC$ are exactly equal ($AB = AC = \\sqrt{14}$), the triangle $ABC$ has at least two equal sides. By definition, this proves that triangle $ABC$ is an isosceles triangle.",
      "<strong>Step 4: Find the length of the third side $BC$ for part (b)</strong><br>Calculate the magnitude of the final displacement vector $\\vec{BC}$:\\begin{aligned} |\\vec{BC}| &= \\sqrt{(-1)^2 + 4^2 + (-1)^2} \\cr &= \\sqrt{1 + 16 + 1} \\cr &= \\sqrt{18} \\cr &= \\sqrt{9 \\cdot 2} \\cr &= 3\\sqrt{2} \\end{aligned}",
      "<strong>Step 5: Calculate the perimeter of the triangle</strong><br>The perimeter is the sum of all three side lengths:\\begin{aligned} \\text{Perimeter} &= AB + AC + BC \\cr &= \\sqrt{14} + \\sqrt{14} + 3\\sqrt{2} \\cr &= 2\\sqrt{14} + 3\\sqrt{2} \\end{aligned}This is in the required form $a\\sqrt{14} + b\\sqrt{2}$ with integers $a = 2$ and $b = 3$.",
      "<strong>Final Answer</strong>\\begin{aligned} &\\text{(a) } AB = AC = \\sqrt{14} \\implies \\text{Isosceles} \\cr &\\text{(b) } \\text{Perimeter} = 2\\sqrt{14} + 3\\sqrt{2} \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\text{(a) } \\triangle ABC \\text{ is equilateral} \\cr &\\text{(b) } \\text{Perimeter} = 3\\sqrt{14} \\end{aligned}",
        "feedback": "You assumed all three sides were equal. However, the third side $BC$ has a magnitude of $\\sqrt{18}$, which is not equal to $\\sqrt{14}$."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } AB = AC = \\sqrt{14} \\implies \\text{Isosceles} \\cr &\\text{(b) } \\text{Perimeter} = 2\\sqrt{14} + \\sqrt{18} \\end{aligned}",
        "feedback": "Your side lengths are correct, but you did not fully simplify the surd $\\sqrt{18}$ to $3\\sqrt{2}$ as required by the question's format."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } AB = AC = \\sqrt{12} \\implies \\text{Isosceles} \\cr &\\text{(b) } \\text{Perimeter} = 2\\sqrt{12} + 3\\sqrt{2} \\end{aligned}",
        "feedback": "Check your magnitude calculation in part (a). $2^2 + (-1)^2 + 3^2 = 4 + 1 + 9 = 14$, not 12."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Simplifying Surds for Perimeters",
      "content": "Whenever an exam question specifies a surd form like $a\\sqrt{14} + b\\sqrt{2}$, it is a strong hint that one of your calculated side lengths (such as $\\sqrt{18}$) can be simplified by factorising out a perfect square: $\\sqrt{18} = \\sqrt{9 \\cdot 2} = 3\\sqrt{2}$."
    }
  },
  {
    "id": "004441",
    "group_id": "004441",
    "board": "Edexcel",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
      "Functions and Mappings",
      "Inequalities",
      "Proof",
      "Sketching the Modulus Function"
    ],
    "img": false,
    "question": "<strong>(a)</strong> \"If $m$ and $n$ are irrational numbers, where $m \\neq n$, then $m + n$ is also irrational.\" Disprove this statement by means of a counterexample. [2]<br><br><strong>(b)</strong> (i) Sketch the graph of $y = |x| + 2$. [2]<br><br><strong>(b)</strong> (ii) Explain why $|x| + 2 \\ge |x + 2|$ for all real values of $x$. [3]",
    "steps": [
      "<strong>Step 1: Disprove the statement in part (a) with a counterexample</strong><br>To disprove the statement, we must find two distinct irrational numbers $m$ and $n$ whose sum is rational:<br><br>Let $m = \\sqrt{2}$ (which is irrational) and let $n = 2 - \\sqrt{2}$ (which is also irrational).<br><br>Now calculate their sum:\\begin{aligned} m + n &= \\sqrt{2} + (2 - \\sqrt{2}) \\cr &= 2 \\end{aligned}Since the sum $2$ is a rational number, the statement is disproven.",
      "<strong>Step 2: Sketch the modulus graph for part (b)(i)</strong><br>The graph of $y = |x| + 2$ is a vertical translation of the basic modulus graph $y = |x|$ upwards by $2$ units:<br><br>The vertex is located at $(0, 2)$. For $x \\ge 0$, the graph behaves like the line $y = x + 2$, and for $x < 0$, it behaves like the line $y = -x + 2$. The graph is symmetrical about the $y$-axis.<br><br><img src='images/Pure_PNGs/004441_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
      "<strong>Step 3: Analyze the inequality in part (b)(ii) by cases</strong><br>We can prove that $|x| + 2 \\ge |x + 2|$ holds for all real $x$ by examining different intervals:<br><br><strong>Case 1:</strong> $x \\ge 0$<br>Here, $|x| = x$. Since $x \\ge 0$, we have $x + 2 \\ge 2 > 0$, so $|x + 2| = x + 2$. Substitute these into the inequality:\\begin{aligned} |x| + 2 &= x + 2 \\cr |x + 2| &= x + 2 \\end{aligned}Thus, $|x| + 2 = |x + 2|$, meaning the inequality holds (as equality).",
      "<strong>Step 4: Analyze the negative interval cases</strong><br><strong>Case 2:</strong> $x < 0$<br>Here, $|x| = -x$.<br><br>Sub-case 2a: $-2 \\le x < 0$<br>Here, $x + 2 \\ge 0 \\implies |x + 2| = x + 2$. Compare both sides:\\begin{aligned} |x| + 2 &= -x + 2 \\cr |x + 2| &= x + 2 \\end{aligned}Since $x < 0$, $-x > x$, which gives $-x + 2 > x + 2$, and therefore $|x| + 2 > |x + 2|$, which holds true.<br><br>Sub-case 2b: $x < -2$<br>Here, $x + 2 < 0 \\implies |x + 2| = -(x + 2) = -x - 2$. Compare both sides:\\begin{aligned} |x| + 2 &= -x + 2 \\cr |x + 2| &= -x - 2 \\end{aligned}Since $2 > -2$, $-x + 2 > -x - 2$, and therefore $|x| + 2 > |x + 2|$, which holds true.<br><br>Hence, $|x| + 2 \\ge |x + 2|$ for all real values of $x$.<br><br><em>Alternative Proof:</em> By the Triangle Inequality, $|a + b| \\le |a| + |b|$. Letting $a = x$ and $b = 2$ gives $|x + 2| \\le |x| + |2| = |x| + 2$ directly.",
      "<strong>Final Answer</strong>\\begin{aligned} &\\text{(a) } m = \\sqrt{2},\\; n = 2 - \\sqrt{2} \\cr &\\text{(b)(i) Vertex at } (0, 2) \\cr &\\text{(b)(ii) } |x| + 2 \\ge |x + 2| \\text{ holds} \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\text{(a) } m = \\sqrt{2},\\; n = \\sqrt{3} \\cr &\\text{(b)(i) Vertex at } (0, 2) \\cr &\\text{(b)(ii) } |x| + 2 \\ge |x + 2| \\text{ holds} \\end{aligned}",
        "feedback": "You may have chosen two irrational numbers whose sum is still irrational ($\\sqrt{2} + \\sqrt{3}$ is irrational). A counterexample must show a case where the premise is true but the conclusion is false (i.e. the sum must be rational). Additionally, simply stating both sides of an inequality are positive does not constitute a rigorous proof."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } m = \\sqrt{2},\\; n = -\\sqrt{2} \\cr &\\text{(b)(i) Vertex at } (0, 2) \\cr &\\text{(b)(ii) } |x| + 2 \\ge |x + 2| \\text{ is false for } x = -5 \\end{aligned}",
        "feedback": "Your counterexample $m = \\sqrt{2}, n = -\\sqrt{2}$ is correct. However, your assertion that the inequality does not work for $x = -5$ is incorrect. Substituting $x = -5$ yields $|-5| + 2 = 5 + 2 = 7$ on the left, and $|-5 + 2| = |-3| = 3$ on the right. Since $7 \\ge 3$, the inequality holds."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } m = \\sqrt{2},\\; n = 2 - \\sqrt{2} \\cr &\\text{(b)(i) Vertex at } (0, 2) \\cr &\\text{(b)(ii) } |x| + 2 \\ge |x + 2| \\text{ is false for } x = 0 \\end{aligned}",
        "feedback": "Your counterexample is correct. However, your evaluation of the inequality at $x = 0$ is incorrect. For $x = 0$, the left-hand side is $|0| + 2 = 2$ and the right-hand side is $|0 + 2| = 2$. Since $2 \\ge 2$ is a true statement, the inequality holds."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Leveraging the Triangle Inequality",
      "content": "For part (b)(ii), while a case-by-case algebraic analysis is a perfectly rigorous way to earn full marks, the most elegant proof leverages the standard Triangle Inequality: $|a + b| \\le |a| + |b|$. Since $|2| = 2$, substituting $a = x$ and $b = 2$ yields $|x + 2| \\le |x| + 2$ in a single line! Memorising the Triangle Inequality can save you valuable time on modulus proofs."
    }
  },
  {
    "id": "004442",
    "group_id": "004441",
    "board": "Edexcel",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
      "Functions and Mappings",
      "Inequalities",
      "Proof",
      "Sketching the Modulus Function"
    ],
    "img": false,
    "question": "<strong>(a)</strong> \"If $m$ and $n$ are irrational numbers, where $m \\neq n$, then $\\dfrac{m}{n}$ is also irrational.\" Disprove this statement by means of a counterexample. [2]<br><br><strong>(b)</strong> (i) Sketch the graph of $y = 3 - |x|$. [3]<br><br><strong>(b)</strong> (ii) Solve the inequality $3 - |x| > 0$. [2]",
    "steps": [
      "<strong>Step 1: Disprove the statement in part (a) with a counterexample</strong><br>We must find two distinct irrational numbers $m$ and $n$ whose quotient $\\dfrac{m}{n}$ is rational:<br><br>Let $m = 2\\sqrt{2}$ (irrational) and let $n = \\sqrt{2}$ (irrational).<br><br>Calculate their quotient:\\begin{aligned} \\dfrac{m}{n} &= \\dfrac{2\\sqrt{2}}{\\sqrt{2}} \\cr &= 2 \\end{aligned}Since $2$ is a rational number, the statement is disproven.",
      "<strong>Step 2: Sketch the modulus graph for part (b)(i)</strong><br>The graph of $y = 3 - |x|$ is an inverted V-shape. The basic graph $y = -|x|$ is translated vertically upwards by $3$ units:<br><br>The vertex is at $(0, 3)$. For $x \\ge 0$, the graph is the line $y = 3 - x$. For $x < 0$, the graph is the line $y = 3 + x$. The graph cuts the $x$-axis at $x = \\pm 3$ and is symmetrical about the $y$-axis.<br><br><img src='images/Pure_PNGs/004442_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
      "<strong>Step 3: Solve the inequality in part (b)(ii)</strong><br>We must solve $3 - |x| > 0$. Rearrange the inequality to isolate the modulus term:\\begin{aligned} 3 - |x| &> 0 \\cr |x| &< 3 \\end{aligned}",
      "<strong>Step 4: Write the final interval solution</strong><br>The inequality $|x| < 3$ represents all numbers whose distance from the origin is strictly less than $3$. This defines the bounded interval:$$-3 < x < 3$$",
      "<strong>Final Answer</strong>\\begin{aligned} &\\text{(a) } m = 2\\sqrt{2},\\; n = \\sqrt{2} \\cr &\\text{(b)(i) Vertex at } (0, 3) \\cr &\\text{(b)(ii) } -3 < x < 3 \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\text{(a) } m = \\sqrt{2},\\; n = 2\\sqrt{2} \\cr &\\text{(b)(i) Vertex at } (0, 3) \\cr &\\text{(b)(ii) } x < 3 \\end{aligned}",
        "feedback": "Your counterexample is correct. However, your inequality solution is incomplete. The inequality $|x| < 3$ limits $x$ from both sides, meaning $x$ must be strictly greater than $-3$ and strictly less than $3$ ($-3 < x < 3$)."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } m = \\sqrt{2},\\; n = \\sqrt{2} \\cr &\\text{(b)(i) Vertex at } (0, 3) \\cr &\\text{(b)(ii) } -3 < x < 3 \\end{aligned}",
        "feedback": "You may have forgotten the constraint $m \\neq n$ specified in the statement. Choosing $m = \\sqrt{2}$ and $n = \\sqrt{2}$ is invalid because the two irrational numbers are identical, violating the 'where $m \\neq n$' condition."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } m = \\sqrt{3},\\; n = \\sqrt{2} \\cr &\\text{(b)(i) Vertex at } (0, 3) \\cr &\\text{(b)(ii) } -3 < x < 3 \\end{aligned}",
        "feedback": "Your inequality solution is correct. However, your chosen counterexample is invalid because $\\dfrac{\\sqrt{3}}{\\sqrt{2}} = \\sqrt{1.5}$ is still an irrational number, which does not disprove the statement."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Watching Boundary Conditions",
      "content": "When selecting a counterexample, always read the exact conditions of the statement. The clause 'where $m \\neq n$' is a strict constraint. Choosing identical numbers (like $m = \\sqrt{2}, n = \\sqrt{2}$) to get a quotient of $1$ will earn $0$ marks because it violates the rules of the statement."
    }
  },
  {
    "id": "004443",
    "group_id": "004441",
    "board": "Edexcel",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
      "Functions and Mappings",
      "Inequalities",
      "Proof",
      "Sketching the Modulus Function"
    ],
    "img": false,
    "question": "<strong>(a)</strong> \"If $x$ is a real number, then $x^2 \\ge x$.\" Disprove this statement by means of a counterexample. [2]<br><br><strong>(b)</strong> (i) Sketch the graph of $y = |x - 2| + 1$. [3]<br><br><strong>(b)</strong> (ii) Explain why $|x - 2| + 1 \\ge 1$ for all real values of $x$. [2]",
    "steps": [
      "<strong>Step 1: Disprove the statement in part (a) with a counterexample</strong><br>We must find a real number $x$ such that $x^2 < x$. This occurs for any fractional value strictly between $0$ and $1$:<br><br>Let $x = \\dfrac{1}{2}$. Calculate $x^2$:\\begin{aligned} x^2 &= \\left(\\dfrac{1}{2}\\right)^2 \\cr &= \\dfrac{1}{4} \\end{aligned}Since $\\dfrac{1}{4} < \\dfrac{1}{2}$, the statement $x^2 \\ge x$ is disproven.",
      "<strong>Step 2: Sketch the modulus graph for part (b)(i)</strong><br>The graph of $y = |x - 2| + 1$ is a V-shaped graph translated $2$ units horizontally to the right and $1$ unit vertically upwards:<br><br>The vertex is located at $(2, 1)$. At $x = 0$, the $y$-intercept is $y = |0 - 2| + 1 = 3$. For $x \\ge 2$, it behaves as $y = x - 1$. For $x < 2$, it behaves as $y = -x + 3$.<br><br><img src='images/Pure_PNGs/004443_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
      "<strong>Step 3: Explain the inequality in part (b)(ii)</strong><br>By definition, the absolute value of any real number is always non-negative:\\begin{aligned} &|x - 2| \\ge 0 \\cr &\\text{for all } x \\in \\mathbb{R} \\end{aligned}",
      "<strong>Step 4: Conclude the proof</strong><br>Add $1$ to both sides of the inequality $|x - 2| \\ge 0$:\\begin{aligned} |x - 2| + 1 &\\ge 0 + 1 \\cr |x - 2| + 1 &\\ge 1 \\end{aligned}Therefore, the expression $|x - 2| + 1$ is always greater than or equal to $1$ for all real values of $x$.",
      "<strong>Final Answer</strong>\\begin{aligned} &\\text{(a) } x = \\dfrac{1}{2},\\; x^2 = \\dfrac{1}{4} \\cr &\\text{(b)(i) Vertex at } (2, 1) \\cr &\\text{(b)(ii) } |x - 2| + 1 \\ge 1 \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\text{(a) } x = 2 \\cr &\\text{(b)(i) Vertex at } (2, 1) \\cr &\\text{(b)(ii) } |x - 2| + 1 \\ge 1 \\text{ is false for } x = 2 \\end{aligned}",
        "feedback": "You may have chosen $x = 2$ as a counterexample, which gives $x^2 = 4 \\ge 2$ (so it does not disprove the statement). Additionally, $1 \\ge 1$ is a true statement, so the inequality still holds at $x = 2$."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } x = -1 \\cr &\\text{(b)(i) Vertex at } (2, 1) \\cr &\\text{(b)(ii) } |x - 2| + 1 \\ge 1 \\text{ holds for } x = -1 \\end{aligned}",
        "feedback": "You may have chosen $x = -1$ as a counterexample, which gives $(-1)^2 = 1 \\ge -1$ (so it does not disprove the statement). A counterexample must yield a false conclusion."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } x = \\dfrac{1}{2} \\cr &\\text{(b)(i) Vertex at } (2, 1) \\cr &\\text{(b)(ii) } |x - 2| + 1 \\ge 1 \\text{ is false for negative } x \\end{aligned}",
        "feedback": "Your counterexample is correct. However, your assertion that the inequality breaks for negative numbers is incorrect. For any negative number, say $x = -5$, we have $|-5-2| + 1 = 8 \\ge 1$, which is true."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Domain of Quadratic Squaring Inequalities",
      "content": "The statement $x^2 \\ge x$ is actually true for almost all real numbers, except for the open interval $( 0, 1 )$. Squaring any fraction between $0$ and $1$ makes the number smaller, which is why any value in this interval (such as $0.5$ or $0.1$) serves as a perfect counterexample."
    }
  },
  {
    "id": "004444",
    "group_id": "004441",
    "board": "Edexcel",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
      "Functions and Mappings",
      "Inequalities",
      "Proof",
      "Sketching the Modulus Function"
    ],
    "img": false,
    "question": "<strong>(a)</strong> \"For any real numbers $a$ and $b$, if $a^2 = b^2$, then $a = b$.\" Disprove this statement by means of a counterexample. [2]<br><br><strong>(b)</strong> (i) Sketch the graph of $y = |2x| - 4$. [3]<br><br><strong>(b)</strong> (ii) Find the coordinates of the points where the graph of $y = |2x| - 4$ intersects the $x$-axis. [2]",
    "steps": [
      "<strong>Step 1: Disprove the statement in part (a) with a counterexample</strong><br>We must find two real numbers $a$ and $b$ such that $a^2 = b^2$, but $a \\neq b$. This occurs if we choose any non-zero number and its negative counterpart:<br><br>Let $a = 2$ and $b = -2$. Calculate their squares:\\begin{aligned} a^2 &= 2^2 \\cr &= 4 \\cr b^2 &= (-2)^2 \\cr &= 4 \\end{aligned}Here, $a^2 = b^2$ is true ($4 = 4$), but $a \\neq b$ ($2 \\neq -2$). Thus, the statement is disproven.",
      "<strong>Step 2: Sketch the modulus graph for part (b)(i)</strong><br>Since $|2x| = 2|x|$, the graph of $y = |2x| - 4 = 2|x| - 4$ is a V-shaped graph with steeper sides (gradient of $\\pm 2$) translated vertically downwards by $4$ units:<br><br>The vertex is located at $(0, -4)$. For $x \\ge 0$, the graph behaves like the line $y = 2x - 4$. For $x < 0$, it behaves like $y = -2x - 4$.<br><br><img src='images/Pure_PNGs/004444_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
      "<strong>Step 3: Set up the equation for the $x$-axis intersections in part (b)(ii)</strong><br>To find the coordinates of the points where the graph intersects the $x$-axis, set $y = 0$:\\begin{aligned} |2x| - 4 &= 0 \\cr |2x| &= 4 \\end{aligned}",
      "<strong>Step 4: Solve for $x$ and state the coordinate points</strong><br>Solve the absolute value equation:\\begin{aligned} 2x = 4 \\quad &\\text{or} \\quad 2x = -4 \\cr x = 2 \\quad &\\text{or} \\quad x = -2 \\end{aligned}Thus, the coordinates of the intersection points are $(2, 0)$ and $(-2, 0)$.",
      "<strong>Final Answer</strong>\\begin{aligned} &\\text{(a) } a = 2,\\; b = -2 \\cr &\\text{(b)(i) Vertex at } (0, -4) \\cr &\\text{(b)(ii) Intersections at } (2, 0), (-2, 0) \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\text{(a) } a = 0,\\; b = 0 \\cr &\\text{(b)(i) Vertex at } (0, -4) \\cr &\\text{(b)(ii) Intersections at } (2, 0), (-2, 0) \\end{aligned}",
        "feedback": "You may have chosen $a = 0$ and $b = 0$. While $0^2 = 0^2$, this is not a valid counterexample because $a = b$ ($0 = 0$). A counterexample must satisfy the premise ($a^2 = b^2$) but fail the conclusion ($a \\neq b$)."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } a = 2,\\; b = -2 \\cr &\\text{(b)(i) Vertex at } (0, -4) \\cr &\\text{(b)(ii) Intersections at } (4, 0), (-4, 0) \\end{aligned}",
        "feedback": "Your counterexample is correct. However, you may have made an algebraic error when solving $|2x| = 4$, mistakenly writing $x = \\pm 4$ instead of dividing by the factor of 2."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } a = 2,\\; b = -2 \\cr &\\text{(b)(i) Vertex at } (0, -4) \\cr &\\text{(b)(ii) Intersections at } (2, -4), (-2, -4) \\end{aligned}",
        "feedback": "Your counterexample is correct. However, the coordinates you provided are not on the $x$-axis. Intersections with the $x$-axis must have a $y$-coordinate of $0$, which gives $(2, 0)$ and $(-2, 0)$."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Finding Intercepts on Modulus Graphs",
      "content": "When solving for intercepts on modulus graphs of the form $y = |f(x)| - c = 0$, you must always set up two separate branch equations: $f(x) = c$ and $f(x) = -c$. This ensures you find both symmetric intersection points on the V-shaped graph."
    }
  },
  {
    "id": "004445",
    "group_id": "004441",
    "board": "Edexcel",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
      "Functions and Mappings",
      "Inequalities",
      "Proof",
      "Sketching the Modulus Function"
    ],
    "img": false,
    "question": "<strong>(a)</strong> \"If $p$ is a prime number, then $2^p - 1$ is also a prime number.\" Disprove this statement by means of a counterexample. [2]<br><br><strong>(b)</strong> (i) Sketch the graph of $y = |x - 3|$. [3]<br><br><strong>(b)</strong> (ii) Solve the inequality $|x - 3| < 2$. [2]",
    "steps": [
      "<strong>Step 1: Disprove the statement in part (a) with a counterexample</strong><br>We must find a prime number $p$ such that $2^p - 1$ is a composite number. Test consecutive primes $p = 2, 3, 5, 7, 11$:<br><br>For $p = 2$: $2^2 - 1 = 3$ (prime).<br><br>For $p = 3$: $2^3 - 1 = 7$ (prime).<br><br>For $p = 5$: $2^5 - 1 = 31$ (prime).<br><br>For $p = 7$: $2^7 - 1 = 127$ (prime).<br><br>For $p = 11$: Calculate $2^{11} - 1$:\\begin{aligned} 2^{11} - 1 &= 2048 - 1 \\cr &= 2047 \\end{aligned}Since $2047 = 23 \\times 89$, it is composite. Thus, the prime $p = 11$ serves as a counterexample disproving the statement.",
      "<strong>Step 2: Sketch the modulus graph for part (b)(i)</strong><br>The graph of $y = |x - 3|$ is a V-shaped graph translated $3$ units horizontally to the right:<br><br>The vertex is at $(3, 0)$. The $y$-intercept is at $y = |0 - 3| = 3$. For $x \\ge 3$, the graph behaves as the line $y = x - 3$. For $x < 3$, it behaves as the line $y = 3 - x$.<br><br><img src='images/Pure_PNGs/004445_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
      "<strong>Step 3: Set up the inequality in part (b)(ii)</strong><br>To solve the inequality $|x - 3| < 2$, we rewrite the absolute value inequality as a compound inequality:$$-2 < x - 3 < 2$$",
      "<strong>Step 4: Solve the compound inequality</strong><br>Add $3$ to all parts of the inequality to isolate $x$:\\begin{aligned} -2 + 3 &< x < 2 + 3 \\cr 1 &< x < 5 \\end{aligned}Thus, the solution is the open interval $1 < x < 5$.",
      "<strong>Final Answer</strong>\\begin{aligned} &\\text{(a) } p = 11, \\; 2^{11}-1 = 2047 \\cr &\\text{(b)(i) Vertex at } (3, 0) \\cr &\\text{(b)(ii) } 1 < x < 5 \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\text{(a) } p = 11 \\cr &\\text{(b)(i) Vertex at } (3, 0) \\cr &\\text{(b)(ii) } x < 5 \\end{aligned}",
        "feedback": "Your counterexample is correct. However, your inequality solution is incomplete. The inequality $|x - 3| < 2$ bounds $x$ from both sides. Solving it yields $1 < x < 5$, not just $x < 5$."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } p = 4 \\cr &\\text{(b)(i) Vertex at } (3, 0) \\cr &\\text{(b)(ii) } 1 < x < 5 \\end{aligned}",
        "feedback": "Your inequality solution is correct. However, your chosen counterexample $p = 4$ is invalid because $4$ is not a prime number. A counterexample must strictly satisfy the premise of the statement."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } p = 11 \\cr &\\text{(b)(i) Vertex at } (3, 0) \\cr &\\text{(b)(ii) } 1 \\le x \\le 5 \\end{aligned}",
        "feedback": "You may have made an error with the inequality boundaries. Since the original inequality $|x - 3| < 2$ is strict ($<$), your final boundary solutions must also be strict ($1 < x < 5$ rather than $\\le$)."
      }
    ],
    "bradley_insight": {
      "type": "deeper",
      "title": "The Head Teacher's Eye: Mersenne Primes and Counterexamples",
      "content": "Numbers of the form $M_p = 2^p - 1$ where $p$ is prime are called Mersenne numbers. While many are prime (Mersenne primes), $p = 11$ is the first prime exponent that yields a composite number ($2047 = 23 \\times 89$). Highlighting this famous prime number is a highly classic way to disprove primality hypotheses in exam boards."
    }
  },
  {
    "id": "004446",
    "group_id": "004446",
    "board": "Edexcel",
    "branch": "Pure",
    "level": "A",
    "major_area": "Sequences and Series",
    "topic": "APs and GPs",
    "subtopic": [
      "Sigma Notation",
      "Compound Summation"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Show that:$$\\sum_{r=1}^{12} (4 + 3r + 2^r) = 8472$$[4]<br><br><strong>(b)</strong> A sequence $u_1, u_2, u_3, \\dots$ is defined by:\\begin{aligned} &u_{n+1} = \\dfrac{1}{u_n} \\cr &u_1 = \\dfrac{3}{4} \\end{aligned}Find the exact value of:$$\\sum_{r=1}^{80} u_r$$[3]",
    "steps": [
      "<strong>Step 1: Decompose the compound summation in part (a)</strong><br>We can split the single summation into three separate parts: a constant sum, an arithmetic sum, and a geometric sum:\\begin{aligned} &\\sum_{r=1}^{12} (4 + 3r + 2^r) \\cr &\\quad = \\sum_{r=1}^{12} 4 + 3\\sum_{r=1}^{12} r \\cr &\\qquad + \\sum_{r=1}^{12} 2^r \\end{aligned}",
      "<strong>Step 2: Evaluate the constant and arithmetic parts</strong><br>For the constant term, multiply the constant by the number of terms: $4 \\times 12 = 48$.<br><br>For the arithmetic part, use the natural number sum formula $S_n = \\dfrac{n(n + 1)}{2}$:\\begin{aligned} 3\\sum_{r=1}^{12} r &= 3 \\cdot \\dfrac{12(13)}{2} \\cr &= 3 \\cdot 78 \\cr &= 234 \\end{aligned}",
      "<strong>Step 3: Evaluate the geometric part and sum all terms to complete part (a)</strong><br>The term $2^r$ defines a geometric series with first term $a = 2$, common ratio $r = 2$, and $n = 12$ terms:\\begin{aligned} \\sum_{r=1}^{12} 2^r &= \\dfrac{a(r^n - 1)}{r - 1} \\cr &= \\dfrac{2(2^{12} - 1)}{2 - 1} \\cr &= 2(4096 - 1) \\cr &= 8190 \\end{aligned}Now, add the three evaluated parts together:\\begin{aligned} \\text{Total Sum} &= 48 + 234 + 8190 \\cr &= 8472 \\end{aligned}",
      "<strong>Step 4: Find the first few terms of the sequence in part (b)</strong><br>Substitute $u_1 = \\dfrac{3}{4}$ into the recurrence relation to find the sequence's behavior:\\begin{aligned} u_1 &= \\dfrac{3}{4} \\cr u_2 &= \\dfrac{1}{u_1} \\cr &= \\dfrac{4}{3} \\cr u_3 &= \\dfrac{1}{u_2} \\cr &= \\dfrac{3}{4} \\end{aligned}This shows that the sequence is periodic with a period of $2$, repeating the terms $\\dfrac{3}{4}$ and $\\dfrac{4}{3}$.",
      "<strong>Step 5: Group the terms into pairs and calculate the total sum</strong><br>Calculate the sum of a single repeating pair:\\begin{aligned} \\text{Pair Sum} &= u_1 + u_2 \\cr &= \\dfrac{3}{4} + \\dfrac{4}{3} \\cr &= \\dfrac{9 + 16}{12} \\cr &= \\dfrac{25}{12} \\end{aligned}The summation has $80$ terms in total, which forms exactly $40$ complete pairs:\\begin{aligned} \\sum_{r=1}^{80} u_r &= 40 \\cdot \\left(\\dfrac{25}{12}\\right) \\cr &= \\dfrac{1000}{12} \\cr &= \\dfrac{250}{3} \\end{aligned}",
      "<strong>Final Answer</strong>\\begin{aligned} &\\text{(a) Total Sum} = 8472 \\cr &\\text{(b) } \\sum_{r=1}^{80} u_r = \\dfrac{250}{3} \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\text{(a) Total Sum} = 8472 \\cr &\\text{(b) } \\sum_{r=1}^{80} u_r = \\dfrac{500}{3} \\end{aligned}",
        "feedback": "You may have made an error when counting the number of complete repeating pairs in part (b). Since the sequence repeats every 2 terms, 80 terms contain exactly 40 complete pairs, not 80."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) Total Sum} = 8424 \\cr &\\text{(b) } \\sum_{r=1}^{80} u_r = \\dfrac{250}{3} \\end{aligned}",
        "feedback": "You may have made an error when calculating the constant part of the summation in Step 2, perhaps by writing $\\sum_{r=1}^{12} 4 = 4$ instead of multiplying the constant by the total number of terms ($4 \\times 12 = 48$)."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) Total Sum} = 8472 \\cr &\\text{(b) } \\sum_{r=1}^{80} u_r = \\dfrac{25}{12} \\end{aligned}",
        "feedback": "You may have calculated the sum of only one repeating pair ($u_1 + u_2$) rather than multiplying it by the 40 complete pairs that make up the entire 80-term series."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Summing Constant Terms",
      "content": "A very common student mistake when decomposing compound summations is evaluating $\\sum_{r=1}^{n} c$ as simply $c$. Remember that $\\sum_{r=1}^{n} c$ means adding the constant $c$ to itself $n$ times, which yields $n \\cdot c$. Forgetting this scaling factor is one of the most frequent reasons for dropped marks in series exams."
    }
  },
  {
    "id": "004447",
    "group_id": "004446",
    "board": "Edexcel",
    "branch": "Pure",
    "level": "A",
    "major_area": "Sequences and Series",
    "topic": "APs and GPs",
    "subtopic": [
      "Sigma Notation",
      "Compound Summation"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Show that:$$\\sum_{r=1}^{8} (5 + 2r + 3^r) = 9952$$[4]<br><br><strong>(b)</strong> A sequence $u_1, u_2, u_3, \\dots$ is defined by:\\begin{aligned} &u_{n+1} = -\\dfrac{1}{u_n} \\cr &u_1 = 2 \\end{aligned}Find the exact value of:$$\\sum_{r=1}^{100} u_r$$[3]",
    "steps": [
      "<strong>Step 1: Decompose the compound summation in part (a)</strong><br>Split the single summation into three separate components: a constant sum, an arithmetic sum, and a geometric sum:\\begin{aligned} &\\sum_{r=1}^{8} (5 + 2r + 3^r) \\cr &\\quad = \\sum_{r=1}^{8} 5 + 2\\sum_{r=1}^{8} r \\cr &\\qquad + \\sum_{r=1}^{8} 3^r \\end{aligned}",
      "<strong>Step 2: Evaluate the constant and arithmetic parts</strong><br>Evaluate the constant sum: $5 \\times 8 = 40$.<br><br>For the arithmetic part, use the natural number sum formula $S_n = \\dfrac{n(n + 1)}{2}$:\\begin{aligned} 2\\sum_{r=1}^{8} r &= 2 \\cdot \\dfrac{8(9)}{2} \\cr &= 72 \\end{aligned}",
      "<strong>Step 3: Evaluate the geometric part and sum all terms to complete part (a)</strong><br>The term $3^r$ defines a geometric series with first term $a = 3$, common ratio $r = 3$, and $n = 8$ terms:\\begin{aligned} \\sum_{r=1}^{8} 3^r &= \\dfrac{a(r^n - 1)}{r - 1} \\cr &= \\dfrac{3(3^8 - 1)}{3 - 1} \\cr &= \\dfrac{3(6561 - 1)}{2} \\cr &= 3 \\cdot 3280 \\cr &= 9840 \\end{aligned}Sum the three parts together to complete the proof:\\begin{aligned} \\text{Total Sum} &= 40 + 72 + 9840 \\cr &= 9952 \\end{aligned}",
      "<strong>Step 4: Find the first few terms of the sequence in part (b)</strong><br>Substitute $u_1 = 2$ into the recurrence relation to identify the periodic behavior:\\begin{aligned} u_1 &= 2 \\cr u_2 &= -\\dfrac{1}{u_1} \\cr &= -\\dfrac{1}{2} \\cr u_3 &= -\\dfrac{1}{u_2} \\cr &= 2 \\end{aligned}This shows that the sequence has a period of $2$, repeating the terms $2$ and $-\\dfrac{1}{2}$.",
      "<strong>Step 5: Group the terms into pairs and calculate the total sum</strong><br>Find the sum of a single repeating pair:\\begin{aligned} \\text{Pair Sum} &= u_1 + u_2 \\cr &= 2 - \\dfrac{1}{2} \\cr &= \\dfrac{3}{2} \\end{aligned}The series has $100$ terms in total, which forms exactly $50$ complete pairs:\\begin{aligned} \\sum_{r=1}^{100} u_r &= 50 \\cdot \\left(\\dfrac{3}{2}\\right) \\cr &= 75 \\end{aligned}",
      "<strong>Final Answer</strong>\\begin{aligned} &\\text{(a) Total Sum} = 9952 \\cr &\\text{(b) } \\sum_{r=1}^{100} u_r = 75 \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\text{(a) Total Sum} = 9952 \\cr &\\text{(b) } \\sum_{r=1}^{100} u_r = 150 \\end{aligned}",
        "feedback": "You may have made an error when pairing the terms, multiplying the pair sum of $\\dfrac{3}{2}$ by the total number of terms (100) instead of the number of complete pairs (50)."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) Total Sum} = 9917 \\cr &\\text{(b) } \\sum_{r=1}^{100} u_r = 75 \\end{aligned}",
        "feedback": "You may have made an error when calculating the constant part of the summation in Step 2, writing $\\sum_{r=1}^{8} 5 = 5$ instead of $5 \\times 8 = 40$."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) Total Sum} = 9952 \\cr &\\text{(b) } \\sum_{r=1}^{100} u_r = \\dfrac{3}{2} \\end{aligned}",
        "feedback": "You may have calculated the sum of only one repeating pair ($u_1 + u_2$) rather than multiplying it by the 50 complete pairs that make up the entire 100-term series."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Identifying Geometric Sum Parameters",
      "content": "When evaluating a geometric sum like $\\sum_{r=1}^{n} c^r$, the first term is $a = c^1 = c$ (since $r$ starts at 1), and the ratio is $c$. A common mistake is writing the first term $a = 1$, which is only true if the summation index starts at $r = 0$. Always plug in $r = 1$ to find your correct first term."
    }
  },
  {
    "id": "004448",
    "group_id": "004446",
    "board": "Edexcel",
    "branch": "Pure",
    "level": "A",
    "major_area": "Sequences and Series",
    "topic": "Sequences and Series",
    "subtopic": [
      "Sequences and Series"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Show that:$$\\sum_{r=1}^{10} (20 - 3r + 2^r) = 2081$$[4]<br><br><strong>(b)</strong> A sequence $u_1, u_2, u_3, \\dots$ is defined by:\\begin{aligned} &u_{n+1} = 1 - u_n \\cr &u_1 = 4 \\end{aligned}Find the exact value of:$$\\sum_{r=1}^{50} u_r$$[3]",
    "steps": [
      "<strong>Step 1: Decompose the compound summation in part (a)</strong><br>Split the single summation into three separate parts: a constant sum, an arithmetic sum, and a geometric sum:\\begin{aligned} &\\sum_{r=1}^{10} (20 - 3r + 2^r) \\cr &\\quad = \\sum_{r=1}^{10} 20 - 3\\sum_{r=1}^{10} r \\cr &\\qquad + \\sum_{r=1}^{10} 2^r \\end{aligned}",
      "<strong>Step 2: Evaluate the constant and arithmetic parts</strong><br>Evaluate the constant sum: $20 \\times 10 = 200$.<br><br>For the arithmetic part, use the natural number sum formula $S_n = \\dfrac{n(n + 1)}{2}$:\\begin{aligned} 3\\sum_{r=1}^{10} r &= 3 \\cdot \\dfrac{10(11)}{2} \\cr &= 3 \\cdot 55 \\cr &= 165 \\end{aligned}",
      "<strong>Step 3: Evaluate the geometric part and sum all terms to complete part (a)</strong><br>The term $2^r$ defines a geometric series with first term $a = 2$, common ratio $r = 2$, and $n = 10$ terms:\\begin{aligned} \\sum_{r=1}^{10} 2^r &= \\dfrac{a(r^n - 1)}{r - 1} \\cr &= \\dfrac{2(2^{10} - 1)}{2 - 1} \\cr &= 2(1024 - 1) \\cr &= 2046 \\end{aligned}Combine the evaluated parts to complete the proof:\\begin{aligned} \\text{Total Sum} &= 200 - 165 + 2046 \\cr &= 2081 \\end{aligned}",
      "<strong>Step 4: Find the first few terms of the sequence in part (b)</strong><br>Substitute $u_1 = 4$ into the recurrence relation to identify the periodic behavior:\\begin{aligned} u_1 &= 4 \\cr u_2 &= 1 - u_1 \\cr &= 1 - 4 \\cr &= -3 \\cr u_3 &= 1 - u_2 \\cr &= 1 - (-3) \\cr &= 4 \\end{aligned}This shows that the sequence is periodic with a period of $2$, repeating the terms $4$ and $-3$.",
      "<strong>Step 5: Group the terms into pairs and calculate the total sum</strong><br>Find the sum of a single repeating pair:\\begin{aligned} \\text{Pair Sum} &= u_1 + u_2 \\cr &= 4 + (-3) \\cr &= 1 \\end{aligned}The series has $50$ terms in total, which forms exactly $25$ complete pairs:\\begin{aligned} \\sum_{r=1}^{50} u_r &= 25 \\cdot 1 \\cr &= 25 \\end{aligned}",
      "<strong>Final Answer</strong>\\begin{aligned} &\\text{(a) Total Sum} = 2081 \\cr &\\text{(b) } \\sum_{r=1}^{50} u_r = 25 \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\text{(a) Total Sum} = 2081 \\cr &\\text{(b) } \\sum_{r=1}^{50} u_r = 50 \\end{aligned}",
        "feedback": "You may have multiplied your pair sum (1) by the total number of terms (50) instead of the number of complete pairs (25)."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) Total Sum} = 2062 \\cr &\\text{(b) } \\sum_{r=1}^{50} u_r = 25 \\end{aligned}",
        "feedback": "You may have made an error when calculating the constant part of the summation in Step 2, writing $\\sum_{r=1}^{10} 20 = 20$ instead of $20 \\times 10 = 200$."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) Total Sum} = 2081 \\cr &\\text{(b) } \\sum_{r=1}^{50} u_r = 2 \\end{aligned}",
        "feedback": "You may have calculated the sum of only one repeating pair ($u_1 + u_2$) rather than multiplying it by the 25 complete pairs that make up the entire 50-term series."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Signs in Arithmetic Progressions",
      "content": "When evaluating arithmetic summations that have a negative coefficient (like $-3r$), make sure to carry the negative sign strictly through all your intermediate sum stages. A very common exam slip is adding the arithmetic sum ($200 + 165$) instead of subtracting it ($200 - 165$)."
    }
  },
  {
    "id": "004449",
    "group_id": "004446",
    "board": "Edexcel",
    "branch": "Pure",
    "level": "A",
    "major_area": "Sequences and Series",
    "topic": "Sequences and Series",
    "subtopic": [
      "Sequences and Series"
    ],
    "img": false,
    "question": "<strong>(a)</strong> An arithmetic series has first term $a = 5$ and common difference $d = 3$. Find the sum of the first $n$ terms in terms of $n$, simplifying your answer fully. [3]<br><br><strong>(b)</strong> A sequence $u_1, u_2, u_3, \\dots$ is defined by:\\begin{aligned} &u_{n+1} = -u_n \\cr &u_1 = 5 \\end{aligned}Find the exact value of:$$\\sum_{r=1}^{101} u_r$$[4]",
    "steps": [
      "<strong>Step 1: Set up the arithmetic progression formula for part (a)</strong><br>The sum of the first $n$ terms of an arithmetic progression is given by:$$S_n = \\dfrac{n}{2}(2a + (n - 1)d)$$Substitute $a = 5$ and $d = 3$ into the formula:\\begin{aligned} S_n &= \\dfrac{n}{2}(2(5) + (n - 1)3) \\end{aligned}",
      "<strong>Step 2: Simplify the algebraic expression</strong><br>Expand and simplify the terms inside the parentheses:\\begin{aligned} S_n &= \\dfrac{n}{2}(10 + 3n - 3) \\cr &= \\dfrac{n}{2}(3n + 7) \\end{aligned}",
      "<strong>Step 3: Identify the behavior of the sequence in part (b)</strong><br>Substitute $u_1 = 5$ into the recurrence relation to find the first few terms:\\begin{aligned} u_1 &= 5 \\cr u_2 &= -u_1 \\cr &= -5 \\cr u_3 &= -u_2 \\cr &= 5 \\end{aligned}This shows that the sequence is periodic with a period of $2$, repeating the terms $5$ and $-5$.",
      "<strong>Step 4: Solve for the total sum of $101$ terms</strong><br>Calculate the sum of a single repeating pair:\\begin{aligned} \\text{Pair Sum} &= u_1 + u_2 \\cr &= 5 + (-5) \\cr &= 0 \\end{aligned}The series has $101$ terms in total. This consists of exactly $50$ complete pairs (which sum to $50 \\times 0 = 0$) plus one remaining term at the end, which is the 101st term $u_{101}$:\\begin{aligned} \\sum_{r=1}^{101} u_r &= 50(0) + u_{101} \\end{aligned}Since the 101st term has an odd index, $u_{101} = u_1 = 5$. Thus:\\begin{aligned} \\sum_{r=1}^{101} u_r &= 0 + 5 \\cr &= 5 \\end{aligned}",
      "<strong>Final Answer</strong>\\begin{aligned} &\\text{(a) } S_n = \\dfrac{n}{2}(3n + 7) \\cr &\\text{(b) } \\sum_{r=1}^{101} u_r = 5 \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\text{(a) } S_n = \\dfrac{n}{2}(3n + 7) \\cr &\\text{(b) } \\sum_{r=1}^{101} u_r = 0 \\end{aligned}",
        "feedback": "You may have assumed that because the pairs sum to 0, the total sum must be 0. Since there is an odd number of terms (101), there is one unpaired term left over at the end ($u_{101} = 5$), which must be added to the sum of the 50 complete pairs."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } S_n = \\dfrac{n}{2}(3n + 10) \\cr &\\text{(b) } \\sum_{r=1}^{101} u_r = 5 \\end{aligned}",
        "feedback": "You may have made an error when expanding $(n-1)d$ in Step 2, perhaps by writing it as $3n - 1$ instead of $3n - 3$, resulting in an incorrect constant term of 10 inside the brackets."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } S_n = \\dfrac{n}{2}(3n + 7) \\cr &\\text{(b) } \\sum_{r=1}^{101} u_r = -5 \\end{aligned}",
        "feedback": "You may have correctly identified that there is one unpaired term left over, but you mistakenly assumed it was the even-indexed term $u_{102} = -5$. Since 101 is an odd number, the remaining term is $u_{101} = 5$."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Boundary Terms in Periodic Sums",
      "content": "When summing a periodic sequence over an odd number of terms, always separate the sum into complete cycles and the remaining fractional cycle terms. For a sequence of period 2 summed over $2n+1$ terms, there will always be $n$ complete pairs (summing to $n \\times \\text{pair sum}$) plus one final term $u_{2n+1}$, which is identical to the first term $u_1$."
    }
  },
  {
    "id": "004450",
    "group_id": "004446",
    "board": "Edexcel",
    "branch": "Pure",
    "level": "A",
    "major_area": "Sequences and Series",
    "topic": "Sequences and Series",
    "subtopic": [
      "Sequences and Series"
    ],
    "img": false,
    "question": "<strong>(a)</strong> A geometric series has first term $a = 6$ and common ratio $r = 3$. Show that the sum of the first $5$ terms of this series is $726$. [3]<br><br><strong>(b)</strong> A sequence $u_1, u_2, u_3, \\dots$ is defined by:\\begin{aligned} &u_{n+1} = \\cos\\left(\\dfrac{n\\pi}{2}\\right) u_n \\cr &u_1 = 4 \\end{aligned}Find the exact value of:$$\\sum_{r=1}^{10} u_r$$[4]",
    "steps": [
      "<strong>Step 1: Apply the geometric progression sum formula for part (a)</strong><br>The sum of the first $n$ terms of a geometric progression is given by:$$S_n = \\dfrac{a(r^n - 1)}{r - 1}$$Substitute $a = 6$, $r = 3$, and $n = 5$ into the formula:\\begin{aligned} S_5 &= \\dfrac{6(3^5 - 1)}{3 - 1} \\cr &= \\dfrac{6(243 - 1)}{2} \\end{aligned}",
      "<strong>Step 2: Simplify to complete the proof in part (a)</strong><br>Evaluate the fraction to find the sum:\\begin{aligned} S_5 &= 3(242) \\cr &= 726 \\end{aligned}This completes the proof.",
      "<strong>Step 3: Analyze the first step of the recurrence relation in part (b)</strong><br>Use the recurrence relation with $u_1 = 4$ to calculate $u_2$ (where $n = 1$):\\begin{aligned} u_2 &= \\cos\\left(\\dfrac{\\pi}{2}\\right) u_1 \\cr &= 0 \\cdot 4 \\cr &= 0 \\end{aligned}",
      "<strong>Step 4: Determine the subsequent terms of the sequence</strong><br>Evaluate the next term $u_3$ (where $n = 2$) using our value of $u_2 = 0$:\\begin{aligned} u_3 &= \\cos(\\pi) \\cdot u_2 \\cr &= (-1) \\cdot 0 \\cr &= 0 \\end{aligned}Since $u_2 = 0$ and any subsequent term is found by multiplying the previous term by a cosine factor, all terms from $u_2$ onwards must be identically equal to $0$:$$u_r = 0 \\quad \\text{for all } r \\ge 2$$",
      "<strong>Step 5: Calculate the final sum</strong><br>Sum all the terms of the series from $r = 1$ to $10$:\\begin{aligned} \\sum_{r=1}^{10} u_r &= 4 + 0 + \\dots + 0 \\cr &= 4 \\end{aligned}",
      "<strong>Final Answer</strong>\\begin{aligned} &\\text{(a) } S_5 = 726 \\cr &\\text{(b) } \\sum_{r=1}^{10} u_r = 4 \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\text{(a) } S_5 = 726 \\cr &\\text{(b) } \\sum_{r=1}^{10} u_r = 0 \\end{aligned}",
        "feedback": "You may have made an error by assuming that because all terms from $u_2$ onwards are 0, the total sum of the series must also be 0. Remember that the first term $u_1 = 4$ is non-zero, so the sum is $u_1 + 0 = 4$."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } S_5 = 726 \\cr &\\text{(b) } \\sum_{r=1}^{10} u_r = 40 \\end{aligned}",
        "feedback": "You may have assumed the sequence is a constant sequence where every term is equal to 4, which would yield a sum of $4 \\times 10 = 40$. Remember to evaluate the recurrence relation step-by-step; the $\\cos\\left(\\dfrac{\\pi}{2}\\right) = 0$ multiplier immediately collapses all subsequent terms to 0."
      },
      {
        "ans": "\\begin{aligned} &\\text{(a) } S_5 = 726 \\cr &\\text{(b) } \\sum_{r=1}^{10} u_r = -4 \\end{aligned}",
        "feedback": "You may have made a sign or calculation error when evaluating the recurrence relation, perhaps by assuming the sequence alternates signs (like $4, -4, 4, -4, \\dots$) instead of collapsing to 0."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Spotting Collapsing Recurrence Relations",
      "content": "In advanced sequence questions, always write out the first three or four terms explicitly. Recurrence relations containing multipliers like $\\cos\\left( \\frac{n\\pi}{2} \\right)$ or $( n - 2 )$ will often produce a $0$ at a specific step. Once a multiplicative term in a recurrence relation of the form $u_{n+1} = k_n u_n$ becomes $0$, the entire sequence collapses to $0$ from that point onward."
    }
  }
];
