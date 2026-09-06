window.ALEVEL_QUESTIONS = [
        {
                "id": "004101",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Circles",
                "subtopic": [
                        "Circle Geometry"
                ],
                "img": false,
                "question": "Three points $A$, $B$, and $C$ have coordinates $A(-9, 4)$, $B(7, 12)$, and $C(11, 4)$.<br><br>(a) Show that angle $ABC$ is a right angle.<br><br>(b) $A$, $B$, and $C$ lie on a circle.<br>(i) Explain why $AC$ is a diameter of the circle.<br>(ii) Determine whether the point $D(4, 10)$ lies inside the circle, on the circle, or outside the circle. Fully justify your answer.",
                "steps": [
                        "For Part (a), calculate the gradients of the lines $AB$ and $BC$: \\begin{aligned}m_{AB} &= \\dfrac{12-4}{7 - (-9)} \\cr&= \\dfrac{8}{16} \\cr&= \\dfrac{1}{2}\\end{aligned} and \\begin{aligned}m_{BC} &= \\dfrac{4-12}{11-7} \\cr&= \\dfrac{-8}{4} \\cr&= -2\\end{aligned}",
                        "Since the product of their gradients is \\begin{aligned}m_{AB} \\times m_{BC} &= \\dfrac{1}{2} \\times (-2) \\cr&= -1\\end{aligned}, the lines $AB$ and $BC$ are perpendicular, meaning angle $ABC$ is a right angle.",
                        "For Part (b)(i), recall the circle theorem that the angle in a semicircle is a right angle. Since angle $ABC = 90^\\circ$ and the points $A$, $B$, and $C$ lie on the circumference of a circle, the hypotenuse $AC$ must be a diameter of the circle.",
                        "For Part (b)(ii), find the center of the circle, which is the midpoint of the diameter $AC$: \\begin{aligned}M &= \\left(\\dfrac{-9+11}{2}, \\dfrac{4+4}{2}\\right) \\cr&= (1, 4)\\end{aligned}",
                        "Calculate the radius $R$, which is half the length of the diameter $AC$: \\begin{aligned}AC &= \\sqrt{(11 - (-9))^2 + (4-4)^2}\\cr &= \\sqrt{20^2 + 0} \\cr &= 20 \\cr R &= 10\\end{aligned}",
                        "Find the distance squared from point $D(4, 10)$ to the center $M(1, 4)$: \\begin{aligned}MD^2 &= (4-1)^2 + (10-4)^2 \\cr&= 3^2 + 6^2 \\cr&= 9 + 36 \\cr&= 45\\end{aligned}",
                        "Since the distance squared $$45 < R^2 = 100$$, the distance from the point to the center of the circle is less than the radius. Thus, the point $D$ lies inside the circle.",
                        "Final Answer:<br>(b)(i) $$4\\angle ABC = 90^\\circ$$ $$AC \\text{ is a diameter} $$ (b)(ii) $$\\text{Inside the circle}$$"
                ],
                "pi_options": [
                        {
                                "ans": "<br>(b)(i) $$\\angle ABC = 90^\\circ \\implies AC \\text{ is diameter}$$ (b)(ii): $$\\text{On the circle}$$",
                                "feedback": "In Part (b)(ii), you probably calculated the distance from $D$ to the center incorrectly, or confused the value with the radius squared. Since $MD^2 = 45$, which is strictly less than $R^2 = 100$, the point must lie inside the circle, not on it."
                        },
                        {
                                "ans": "<br>(b)(i) $$\\text{Opposite angles supplementary}$$ (b)(ii) $$\\text{Inside the circle}$$",
                                "feedback": "In Part (b)(i), supplementary opposite angles is a theorem for cyclic quadrilaterals, not for proving a diameter. The correct theorem to cite is that an angle in a semicircle is a right angle, which means the hypotenuse $AC$ is a diameter."
                        },
                        {
                                "ans": "<br>(b)(i) $$\\text{Alternate segment theorem}$$  (b)(ii) $$\\text{Outside the circle}$$",
                                "feedback": "In Part (b)(i), the alternate segment theorem concerns tangents and chords, which is not applicable here. In Part (b)(ii), $D$ lies inside the circle because its distance to the center, $\\sqrt{45}$, is less than the radius of $10$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Circle Theorem Terminology",
                        "content": "When justifying why a line is a diameter, always state the geometric theorem clearly on your page. Citing that 'the angle in a semicircle is a right angle' is probably the safest and most standard way to secure this explanation mark."
                }
        },
        {
                "id": "004102",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Coordinate Geometry",
                "topic": "Circles",
                "subtopic": [
                        "Circle Geometry"
                ],
                "img": false,
                "question": "A circle has center $O(0, 0)$ and radius $R = 10$. Three points lie on the circle: $A(8, 6)$, $B(0, -10)$, and $C(-8, 6)$.<br><br>(a) Show that the angle at the center, $\\angle AOC$, is exactly twice the size of the angle at the circumference, $\\angle ABC$.<br><br>(b) (i) Show that the chord $AC$ is bisected by the $y$-axis.<br>(ii) Determine whether the point $D(3, -9)$ lies inside the circle, on the circle, or outside the circle. Fully justify your answer.",
                "steps": [
                        "For Part (a), calculate the side lengths of triangle $AOC$ to find $\\angle AOC$: $OA = 10$$ $$OC = 10,$ \\begin{aligned} AC &= \\sqrt{(-8-8)^2 + (6-6)^2}\\cr &= 16\\end{aligned}",
                        "Apply the Cosine Rule to find $\\angle AOC$:  \\begin{aligned}\\text{Let }\\phi &=\\angle AOC\\cr16^2 &= 10^2 + 10^2  \\cr &\\quad - 2(10)(10)\\cos\\phi \\cr 256 &= 200 - 200\\cos\\phi \\cr \\cos\\phi &= -0.28 \\cr \\phi &\\approx 106.26^\\circ\\end{aligned}",
                        "Next, calculate the side lengths of triangle $ABC$ to find $\\angle ABC$: \\begin{aligned}BA &= \\sqrt{(8-0)^2 + (6 - (-10))^2} \\cr&= \\sqrt{320}\\end{aligned} and \\begin{aligned}BC &= \\sqrt{(-8-0)^2 + (6 - (-10))^2} \\cr&= \\sqrt{320}\\end{aligned}, with $$AC = 16$$",
                        "Apply the Cosine Rule on triangle $ABC$: \\begin{aligned}\\text{Let }\\theta &=\\angle ABC\\cr16^2 &= 320 + 320 \\cr &\\quad - 2(\\sqrt{ 320 })(\\sqrt{ 320 })\\cos\\theta \\cr 256 &= 640 - 640\\cos\\theta \\cr 640\\cos \\theta &= 384 \\cr \\cos\\theta &= 0.6 \\cr \\theta &\\approx 53.13^{ \\circ }\\end{aligned}",
                        "Since $$2 \\times 53.13^\\circ = 106.26^\\circ$$, the angle at the center $\\angle AOC$ is exactly twice the angle at the circumference $\\angle ABC$.",
                        "For Part (b)(i), find the midpoint of the chord $AC$: \\begin{aligned}K &= \\left(\\dfrac{8+(-8)}{2}, \\dfrac{6+6}{2}\\right) \\cr&= (0, 6)\\end{aligned}",
                        "Since the midpoint of $AC$ lies on the line $x = 0$ (the $y$-axis), the chord $AC$ is bisected by the $y$-axis.",
                        "For Part (b)(ii), calculate the distance squared from point $D(3, -9)$ to the center $O(0, 0)$: \\begin{aligned}OD^2 &= 3^2 + (-9)^2 \\cr&= 9 + 81 \\cr&= 90\\end{aligned}",
                        "Since the distance squared $$90 < R^2 = 100$$, the distance from the point to the center of the circle is less than the radius. Thus, the point $D$ lies inside the circle.",
                        "Final Answer: <br>(b)(i) $$\\text{ Midpoint is (0, 6)}$$ $$\\text{which lies on the } y\\text{-axis} $$ (b)(ii) $$\\text{Inside the circle}$$"
                ],
                "pi_options": [
                        {
                                "ans": "<br>(b)(i) $$\\text{ Midpoint is (0, 6)}$$ $$\\text{which lies on the } y\\text{-axis} $$ (b)(ii) $$\\text{On the circle}$$",
                                "feedback": "In Part (b)(ii), you probably miscalculated the distance or confused the radius squared ($100$) with the coordinate values. Since $OD^2 = 90 < 100$, the point must lie inside the circle."
                        },
                        {
                                "ans": "<br>(b)(i) $$\\text{ Midpoint is (0, 6)}$$ $$\\text{which lies on the } y\\text{-axis} $$ (b)(ii) $$\\text{Outside the circle}$$",
                                "feedback": "In Part (b)(ii), the distance squared to the origin is $3^2 + (-9)^2 = 90$. Because this is less than the radius squared ($100$), the point lies inside the circle, not outside."
                        },
                        {
                                "ans": "<br>(b)(i) $$\\text{ Gradient is zero} $$ (b)(ii) $$\\text{Inside the circle}$$",
                                "feedback": "In Part (b)(i), showing the gradient is zero proves the chord is horizontal, but does not prove it is bisected by the $y$-axis. You must show the midpoint of $AC$ has an $x$-coordinate of $0$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Distance Formula is Probably Safest",
                        "content": "For calculating angles in coordinate geometry without vector dot products, calculating the three side lengths and using the Cosine Rule is probably the safest and most robust method. It keeps your steps firmly within standard Pure 1 geometry."
                }
        },
        {
                "id": "004103",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Coordinate Geometry",
                "topic": "Circles",
                "subtopic": [
                        "Circle Geometry"
                ],
                "img": false,
                "question": "Four points lie on a circle centered at the origin: $A(-3, 4)$, $B(3, 4)$, $C(4, -3)$, and $D(-4, -3)$.<br><br>(a) Show that the opposite interior angles of the cyclic quadrilateral $ABCD$ sum to $180^\\circ$ (i.e. show that $\\angle ADC + \\angle ABC = 180^\\circ$).<br><br>(b) (i) Explain why the center of the circle on which $A, B, C, D$ lie must be the origin $(0, 0)$.<br>(ii) Determine whether the point $E(-4, 4)$ lies inside the circle, on the circle, or outside the circle. Fully justify your answer.",
                "steps": [
                        "For Part (a), calculate the side lengths of triangle $ADC$ to find angle $\\angle ADC$: \\begin{aligned}&DA \\cr &= \\sqrt{(-3-(-4))^2 + (4-(-3))^2} \\cr &= \\sqrt{50}\\cr \\cr &DC\\cr & = \\sqrt{(4-(-4))^2 + (-3-(-3))^2}\\cr & = 8 \\cr \\cr &AC = \\sqrt{(4-(-3))^2 + (-3-4)^2} \\cr&= \\sqrt{98}\\end{aligned}",
                        "Apply the Cosine Rule to find $\\angle ADC$: \\begin{aligned}\\text{Let }\\theta &= \\angle ADC\\cr 98 &= 50 + 64 \\cr & \\quad- 2(\\sqrt{50})(8)\\cos\\theta \\cr 98 &= 114 - 16\\sqrt{50}\\cos\\theta \\cr\\cos\\theta &= \\dfrac{1}{\\sqrt{50}} \\cr\\theta &\\approx 81.87^\\circ\\end{aligned}",
                        "Next, calculate the side lengths of triangle $ABC$ to find angle $\\angle ABC$: \\begin{aligned}BA &= \\sqrt{(-3-3)^2 + (4-4)^2} \\cr&= 6\\end{aligned} and \\begin{aligned}BC &= \\sqrt{(4-3)^2 + (-3-4)^2} \\cr&= \\sqrt{50}\\end{aligned}, with $$AC = \\sqrt{98}$$",
                        "Apply the Cosine Rule to find $\\angle ABC$: \\begin{aligned}\\text{Let }\\phi &=\\angle ABC \\cr 98 &= 36 + 50 - 2(6)(\\sqrt{50})\\cos\\phi \\cr98 &= 86 - 12\\sqrt{50}\\cos\\phi \\cr\\cos\\phi &= -\\dfrac{1}{\\sqrt{50}} \\cr\\phi &\\approx 98.13^\\circ\\end{aligned}",
                        "Sum the opposite interior angles: $$\\theta + \\phi \\approx 81.87^\\circ + 98.13^\\circ = 180^\\circ$$, proving they are supplementary.",
                        "For Part (b)(i), calculate the distance from each of the four points to the origin: \\begin{aligned}OA^2 &= OB^2 = OC^2 = OD^2\\cr &= 3^2 + 4^2 \\cr &= 25 \\cr OA &= OB = OC = OD = 5\\end{aligned}",
                        "Since a circle is defined as the set of points equidistant from a fixed center, and all four points are at a distance of $5$ from $(0, 0)$, the origin must be the center of the circle.",
                        "For Part (b)(ii), calculate the distance squared from point $E(-4, 4)$ to the center $(0, 0)$: \\begin{aligned}OE^2 &= (-4)^2 + 4^2 \\cr&= 16 + 16 \\cr&= 32\\end{aligned}",
                        "Since the distance squared $$32 > R^2 = 25$$, the distance from the point to the center of the circle is greater than the radius. Thus, the point $E$ lies outside the circle.",
                        "Final Answer: <br>(b)(i) $$\\text{ All points are distance } 5 \\text{ from (0, 0)} $$ (b)(ii) $$\\text{Outside the circle}$$"
                ],
                "pi_options": [
                        {
                                "ans": "<br>(b)(i) $$\\text{ All points are distance } 5 \\text{ from (0, 0)} $$ (b)(ii) $$\\text{Inside the circle}$$",
                                "feedback": "In Part (b)(ii), you probably miscalculated the distance. The distance squared from $E$ to $(0,0)$ is $32$. Since $32 > R^2 = 25$, the point lies outside the circle, not inside."
                        },
                        {
                                "ans": "<br>(b)(i) $$\\text{ All points are distance } 5 \\text{ from (0, 0)} $$ (b)(ii) $$\\text{On the circle}$$",
                                "feedback": "In Part (b)(ii), the distance squared from $E(-4,4)$ is $(-4)^2 + 4^2 = 32$. Since this is strictly greater than the radius squared ($25$), the point must lie outside the circle."
                        },
                        {
                                "ans": "<br>(b)(i) $$\\text{ The midpoint of BD is (0, 0)} $$ (b)(ii) $$\\text{Outside the circle}$$",
                                "feedback": "In Part (b)(i), the midpoint of $BD$ being $(0,0)$ proves that $BD$ is a diameter, but this is only true for diagonals and doesn't explicitly prove $(0,0)$ is the center unless you also prove the equidistance of $A$ and $C$."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Cyclic Quadrilateral Supplementary Angles",
                        "content": "A cyclic quadrilateral has opposite angles summing to $180^\\circ$. By working with coordinate lengths and the Cosine Rule, we can verify this theorem algebraically without relying on circle geometry alone, which is probably the most elegant way to link Pure 1 coordinate and trigonometric topics."
                }
        },
        {
                "id": "004104",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Coordinate Geometry",
                "topic": "Circles",
                "subtopic": [
                        "Circle Geometry"
                ],
                "img": false,
                "question": "A circle has center $M(1, 1)$ and radius $R = 5$. A chord $AB$ is drawn on the circle with endpoints $A(-2, 5)$ and $B(5, 4)$.<br><br>(a) Show that the perpendicular bisector of the chord $AB$ passes through the center of the circle $M(1, 1)$.<br><br>(b) (i) Calculate the length of the chord $AB$ and the perpendicular distance from the center $M$ to the chord $AB$, using these to verify the right-angled triangle relation: $R^2 = d^2 + \\left(\\dfrac{AB}{2}\\right)^2$.<br>(ii) Determine whether the point $D(4, -2)$ lies inside the circle, on the circle, or outside the circle. Fully justify your answer.",
                "steps": [
                        "For Part (a), find the midpoint of the chord $AB$: \\begin{aligned}K &= \\left(\\dfrac{-2+5}{2}, \\dfrac{5+4}{2}\\right) \\cr&= (1.5, 4.5)\\end{aligned}",
                        "Calculate the gradient of the chord $AB$: \\begin{aligned}m_{AB} &= \\dfrac{4-5}{5 - (-2)} \\cr&= -\\dfrac{1}{7}\\end{aligned}",
                        "The perpendicular bisector must have a gradient of $$m_{\\perp} = 7$$. Find its equation: $$y - 4.5 = 7(x - 1.5)$$",
                        "Substitute the center $M(1, 1)$ into this line equation to verify: \\begin{aligned}1 - 4.5 &= 7(1 - 1.5) \\cr-3.5 &= -3.5\\end{aligned}. Since the coordinates satisfy the line, the perpendicular bisector passes through $M$.",
                        "For Part (b)(i), calculate the length of the chord $AB$: \\begin{aligned}AB &= \\sqrt{(5 - (-2))^2 + (4-5)^2} \\cr&= \\sqrt{7^2 + (-1)^2} \\cr&= \\sqrt{50}\\end{aligned}<br>\\begin{aligned} \\cr\\left(\\dfrac{AB}{2}\\right)^2 &= \\dfrac{50}{4} = 12.5\\end{aligned}",
                        "Next, find the perpendicular distance from $M(1, 1)$ to the line $x + 7y - 33 = 0$ (the line $AB$): \\begin{aligned}d &= \\dfrac{|1 + 7(1) - 33|}{\\sqrt{1^2 + 7^2}}\\cr &= \\dfrac{25}{\\sqrt{50}} \\cr d^2 &= \\dfrac{625}{50}\\cr &= 12.5\\end{aligned}",
                        "Sum the squares to verify the relation: \\begin{aligned}d^2 + \\left(\\dfrac{AB}{2}\\right)^2 &= 12.5 + 12.5 \\cr&= 25 \\cr&= R^2\\end{aligned}. The relation is verified.",
                        "For Part (b)(ii), calculate the distance squared from point $D(4, -2)$ to the center $M(1, 1)$: \\begin{aligned}MD^2 &= (4-1)^2 + (-2-1)^2 \\cr&= 3^2 + (-3)^2 \\cr&= 18\\end{aligned}",
                        "Since the distance squared $$18 < R^2 = 25$$, the distance from the point to the center of the circle is less than the radius. Thus, the point $D$ lies inside the circle.",
                        "Final Answer: (b)(i):\\begin{aligned} d^2 + (AB/2)^2 &= 12.5 + 12.5 \\cr&= 25 \\cr&= R^2 \\text{ is verified}//end{aligned}  (b)(ii) $$\\text{Inside the circle}$$"
                ],
                "pi_options": [
                        {
                                "ans": "<br>(b)(i) \\begin{aligned}d^2 + (AB/2)^2 &= 12.5 + 12.5\\cr &= 25\\cr &= R^2 \\text{ is verified} \\end{aligned} (b)(ii) $$\\text{On the circle}$$",
                                "feedback": "In Part (b)(ii), you probably miscalculated the distance to the center. Since $MD^2 = 18 < R^2 = 25$, the distance from $D$ to the center is strictly less than the radius of $5$, meaning it lies inside the circle, not on it."
                        },
                        {
                                "ans": "<br>(b)(i) \\begin{aligned}d^2 + (AB/2)^2 &= 12.5 + 12.5 \\cr & = 25 \\cr & = R^2 \\text{ is verified} \\end{aligned} (b)(ii) $$\\text{Outside the circle}$$",
                                "feedback": "In Part (b)(ii), the distance squared to the center $M(1,1)$ is $(4-1)^2 + (-2-1)^2 = 18$. Since this is less than the radius squared ($25$), the point lies inside the circle, not outside."
                        },
                        {
                                "ans": "<br>(b)(i) $$\\text{ Gradient of bisector is -7} $$ (b)(ii) $$\\text{Inside the circle}$$",
                                "feedback": "In Part (b)(i), you probably made a sign error when finding the perpendicular gradient. Since $m_{AB} = -1/7$, the perpendicular gradient is $+7$, not $-7$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Perpendicular Gradient Sign Trap",
                        "content": "When finding the gradient of a perpendicular bisector, remember that $m_1 \\times m_2 = -1$. If the gradient of the chord is negative, the perpendicular bisector's gradient must be strictly positive. Forgetting this sign change is probably the most common way students lose marks on this topic."
                }
        },
        {
                "id": "004105",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Circles",
                "subtopic": [
                        "Circle Geometry"
                ],
                "img": false,
                "question": "A circle has center $O(0, 0)$ and radius $R = 6$. A tangent is drawn to the circle from an external point $P(10, 0)$, touching the circle at $T(3.6, 4.8)$.<br><br>(a) Show that the tangent line $PT$ is perpendicular to the radius $OT$.<br><br>(b) (i) Find the cosine of angle $POT$ using the side lengths of triangle $OPT$, and hence use the Cosine Rule on triangle $OPT$ to show that $PT = 8$.<br><br>(b) (ii) Determine whether the point $D(5, -4)$ lies inside the circle, on the circle, or outside the circle. Fully justify your answer.",
                "steps": [
                        "For Part (a), calculate the gradients of the radius $OT$ and the tangent line $PT$: \\begin{aligned}m_{OT} &= \\dfrac{4.8-0}{3.6-0} \\cr&= \\dfrac{4}{3}\\end{aligned} and \\begin{aligned}m_{PT} &= \\dfrac{4.8-0}{3.6-10} \\cr&= \\dfrac{4.8}{-6.4} \\cr&= -\\dfrac{3}{4}\\end{aligned}",
                        "Since the product of their gradients is \\begin{aligned}m_{OT} \\times m_{PT} &= \\dfrac{4}{3} \\times \\left(-\\dfrac{3}{4}\\right) \\cr&= -1\\end{aligned}, the radius $OT$ and the tangent $PT$ are perpendicular.",
                        "For Part (b)(i), calculate the side lengths of triangle $OPT$: $OT = 6$$ $$OP = 10$, and \\begin{aligned}PT &= \\sqrt{(3.6 - 10)^2 + 4.8^2} \\cr&= \\sqrt{(-6.4)^2 + 23.04} \\cr&= \\sqrt{40.96 + 23.04} \\cr&= 8\\end{aligned}",
                        "Apply the Cosine Rule to find $\\cos\\theta$: \\begin{aligned}\\text{let }\\angle POT &=\\theta \\cr PT^2 &= OP^2 + OT^2 \\cr &\\quad - 2(OP)(OT)\\cos\\theta \\cr 8^2 &= 10^2 + 6^2 - 2(10)(6)\\cos\\theta\\end{aligned}",
                        "Simplify to find the cosine value: \\begin{aligned}64 &= 100 + 36 - 120\\cos\\theta \\cr64 &= 136 - 120\\cos\\theta \\cr\\cos\\theta &= 0.6\\end{aligned}",
                        "Using the Cosine Rule with $\\cos\\theta = 0.6$ verifies the length of the tangent: \\begin{aligned}PT &= \\sqrt{10^2 + 6^2 - 2(10)(6)(0.6)} \\cr&= \\sqrt{64} \\cr&= 8\\end{aligned}, as required.",
                        "For Part (b)(ii), calculate the distance squared from $D(5, -4)$ to the center $O(0, 0)$: \\begin{aligned}OD^2 &= 5^2 + (-4)^2 \\cr&= 25 + 16 \\cr&= 41\\end{aligned}",
                        "Since the distance squared $$41 > R^2 = 36$$, the distance from the point to the center of the circle is greater than the radius. Thus, the point $D$ lies outside the circle.",
                        "Final Answer: <br>(b)(i) $$\\text{ } PT = 8 \\text{ is verified } $$ (b)(ii) $$\\text{Outside the circle}$$"
                ],
                "pi_options": [
                        {
                                "ans": "<br>(b)(i) \\begin{aligned}PT^2 &= 100 + 36 - 72\\cr & = 64 \\cr\\implies PT &= 8 \\end{aligned} (b)(ii) $$\\text{Inside the circle}$$",
                                "feedback": "In Part (b)(ii), you probably calculated the distance from the center incorrectly. The distance squared from $D(5,-4)$ to the origin is $41$. Since $41 > R^2 = 36$, the point must lie outside the circle."
                        },
                        {
                                "ans": "<br>(b)(i)  \\begin{aligned}PT^2 &= 100 + 36 - 72\\cr &= 64 \\cr \\implies PT &= 8 \\end{aligned} (b)(ii) $$\\text{On the circle}$$",
                                "feedback": "In Part (b)(ii), the distance squared to the origin is $5^2 + (-4)^2 = 41$. Since this is strictly greater than the radius squared ($36$), the point lies outside the circle, not on it."
                        },
                        {
                                "ans": "<br>(b)(i) $$\\text{ } \\cos\\theta = 0.8 $$ (b)(ii) $$\\text{Outside the circle}$$",
                                "feedback": "In Part (b)(i), the cosine of angle $POT$ is $0.6$, which arises from $72 \\div 120 = 0.6$. A value of $0.8$ is incorrect and will affect the subsequent Cosine Rule calculation."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Integrating Coordinate and Trig Methods",
                        "content": "Integrating coordinate geometry with trigonometry (like using the Cosine Rule to verify tangent lengths) is probably the most common way AQA stretches students. Keep your coordinate calculations clear on paper before substituting them into geometric formulas."
                }
        },
        {
                "id": "004106",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Trigonometry",
                "subtopic": [
                        "Numerical Methods",
                        "Newton Raphson"
                ],
                "img": "images/Pure_SVGs/004106.svg",
                "question": "The diagram shows a sector of a circle $OAB$. $C$ is the midpoint of $OB$. Angle $AOB$ is $\\theta$ radians.<br><br>(a) Given that the area of the triangle $OAC$ is equal to one-third of the area of the sector $OAB$, show that $\\theta = 1.5\\sin\\theta$.<br><br>(b) Use the Newton-Raphson method with $\\theta_1 = \\pi$ to find $\\theta_3$ as an approximation for $\\theta$. Give your answer correct to five decimal places.<br><br>(c) Given that the actual value of $\\theta = 1.49579$ to five decimal places, find an estimate for the percentage error in the approximation found in part (b).",
                "steps": [
                        "First, state the formulas for both areas in terms of $r$ and $\\theta$. The area of the sector $OAB$ is: $$\\text{Area of sector } OAB = \\dfrac{1}{2}r^2\\theta$$",
                        "Since $C$ is the midpoint of $OB$, $OC = \\dfrac{1}{2}r$. The area of triangle $OAC$ is: \\begin{aligned}\\text{Area}_{\\triangle OAC} &= \\dfrac{1}{2}(r)\\left(\\dfrac{1}{2}r\\right)\\sin\\theta \\cr&= \\dfrac{r^2}{4}\\sin\\theta\\end{aligned}",
                        "Next, set the area of the triangle equal to one-third of the area of the sector: \\begin{aligned}\\dfrac{r^2}{4}\\sin\\theta &= \\dfrac{1}{3} \\left(\\dfrac{1}{2}r^2\\theta\\right) \\cr\\dfrac{r^2}{4}\\sin\\theta &= \\dfrac{r^2}{6}\\theta\\end{aligned}",
                        "Divide both sides by $r^2$ (since $r > 0$) to eliminate the radius variable: $$\\dfrac{1}{4}\\sin\\theta = \\dfrac{1}{6}\\theta$$",
                        "Multiply both sides by $6$ to isolate $\\theta$, and simplify the resulting fraction to reach the target equation: \\begin{aligned}\\theta &= \\dfrac{6}{4}\\sin\\theta \\cr\\theta &= 1.5\\sin\\theta\\end{aligned}",
                        "For Part (b), define $f(\\theta) = \\theta - 1.5\\sin\\theta$ and its derivative $f'(\\theta) = 1 - 1.5\\cos\\theta$. Use the Newton-Raphson formula: $$\\theta_{n+1} = \\theta_n - \\dfrac{\\theta_n - 1.5\\sin\\theta_n}{1 - 1.5\\cos\\theta_n}$$",
                        "With $\\theta_1 = \\pi$, calculate the iterations. In the first iteration: \\begin{aligned}\\theta_2 &= \\pi - \\dfrac{\\pi - 1.5\\sin\\pi}{1 - 1.5\\cos\\pi} \\cr&= \\pi - \\dfrac{\\pi}{1 - 1.5(-1)} \\cr&= \\pi - \\dfrac{\\pi}{2.5} \\cr&= 0.6\\pi \\approx 1.88496\\end{aligned}",
                        "In the second iteration: \\begin{aligned}\\theta_3 &= 1.88496\\cr & \\quad - \\dfrac{1.88496 - 1.5\\sin(1.88496)}{1 - 1.5\\cos(1.88496)}\\cr & \\approx 1.57176\\end{aligned}",
                        "For Part (c), calculate the percentage error by comparing the approximation $\\theta_3 \\approx 1.57176$ with the actual root $\\theta = 1.49579$: \\begin{aligned}\\text{% error} &= \\dfrac{|1.57176 - 1.49579|}{1.49579} \\times 100 \\cr &\\approx 5.08\\%\\end{aligned}",
                        "Final Answer: (b)$$ 1.57176$$(c)$$ 5.08\\%$$"
                ],
                "pi_options": [
                        {
                                "ans": "(b)$$ 1.57176$$(c)$$ 5.06\\% $$",
                                "feedback": "This error probably results from a minor rounding slip during your multi-digit division steps. Ensure you carry at least six decimal places in your intermediate steps before rounding to five."
                        },
                        {
                                "ans": "(b)$$ 1.57156$$(c)$$ 5.06\\% $$",
                                "feedback": "You probably rounded $\\theta_2$ prematurely, or made a subtraction error in your second iteration. Double-check your values for $f(\\theta_2)$ and $f'(\\theta_2)$ on your page."
                        },
                        {
                                "ans": "(b)$$ 1.88496$$(c)$$ 26.02\\% $$",
                                "feedback": "You have calculated $\\theta_2$ instead of $\\theta_3$. The question requires two full applications of the Newton-Raphson formula to find $\\theta_3$ starting from $\\theta_1$."
                        }
                ],
                       
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Newton-Raphson Radians Trap",
                        "content": "When evaluating trigonometric terms like $\\sin\\theta$ or $\\cos\\theta$ inside the Newton-Raphson iterations, your calculator must be set to Radians mode. Working in Degrees is probably the single most common way students score zero on these questions."
                }
        },
        {
                "id": "004107",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Trigonometry",
                "subtopic": [
                        "Numerical Methods",
                        "Newton Raphson"
                ],
                "img": "images/Pure_SVGs/004107.svg",
                "question": "The diagram shows a sector of a circle $OAB$ with radius $r$ and angle $\\theta$ radians. A chord $AB$ divides the sector into a segment and a triangle $OAB$.<br><br>(a) Given that the area of the segment is equal to one-third of the area of the triangle $OAB$, show that $4\\sin\\theta = 3\\theta$.<br><br>(b) Use the Newton-Raphson method with $\\theta_1 = 1.5$ to find $\\theta_3$ as an approximation for $\\theta$. Give your answer correct to five decimal places.<br><br>(c) Given that the actual value of $\\theta = 1.27570$ to five decimal places, find an estimate for the percentage error in the approximation found in part (b).",
                "steps": [
                        "First, state the formulas for both areas in terms of $r$ and $\\theta$. The area of the triangle $OAB$ is: $$\\text{Area}_{\\triangle OAB} = \\dfrac{1}{2}r^2\\sin\\theta$$",
                        "The area of the sector $OAB$ is: $$\\text{Area}_{sect OAB} = \\dfrac{1}{2}r^2\\theta$$",
                        "Find the area of the segment by subtracting the area of the triangle from the area of the sector: \\begin{aligned}\\text{Area}_{seg} &= \\dfrac{1}{2}r^2\\theta - \\dfrac{1}{2}r^2\\sin\\theta \\cr&= \\dfrac{1}{2}r^2(\\theta - \\sin\\theta)\\end{aligned}",
                        "Set the segment area equal to one-third of the triangle area: $$\\dfrac{1}{2}r^2(\\theta - \\sin\\theta) = \\dfrac{1}{3}\\left(\\dfrac{1}{2}r^2\\sin\\theta\\right)$$",
                        "Divide both sides by $\\dfrac{1}{2}r^2$ to simplify: $$\\theta - \\sin\\theta = \\dfrac{1}{3}\\sin\\theta$$",
                        "Add $\\sin\\theta$ to both sides and multiply by $3$ to obtain the target equation: \\begin{aligned}\\theta &= \\dfrac{4}{3}\\sin\\theta \\cr3\\theta &= 4\\sin\\theta \\cr4\\sin\\theta &= 3\\theta\\end{aligned}",
                        "For Part (b), define $f(\\theta) = 3\\theta - 4\\sin\\theta$ and its derivative $f'(\\theta) = 3 - 4\\cos\\theta$. Use the Newton-Raphson formula: $$\\theta_{n+1} = \\theta_n - \\dfrac{3\\theta_n - 4\\sin\\theta_n}{3 - 4\\cos\\theta_n}$$",
                        "With $\\theta_1 = 1.5$, calculate the iterations. In the first iteration: \\begin{aligned}\\theta_2 &= 1.5 - \\dfrac{3(1.5) - 4\\sin(1.5)}{3 - 4\\cos(1.5)}\\cr & \\approx 1.31229\\end{aligned}",
                        "In the second iteration: \\begin{aligned}\\theta_3 &= 1.31229\\cr & \\quad - \\dfrac{3(1.31229) - 4\\sin(1.31229)}{3 - 4\\cos(1.31229)}\\cr & \\approx 1.27741\\end{aligned}",
                        "For Part (c), calculate the percentage error of $\\theta_3 \\approx 1.27741$ against the true root $\\theta = 1.27570$: \\begin{aligned}\\text{% Error} &= \\dfrac{|1.27741 - 1.27570|}{1.27570} \\times 100 \\cr & \\approx 0.13\\%\\end{aligned}",
                        "Final Answer: \\cr(b)$$ 1.27741$$ (c)$$0.13\\%$$"
                ],
                "pi_options": [
                        {
                                "ans": "\\cr (b)$$1.27510$$ $$(c) 0.05\\%$$",
                                "feedback": "This incorrect option probably results from a minor rounding slip during your second iteration. Double-check your values for $f(1.31229)$ and $f'(1.31229)$ on your page."
                        },
                        {
                                "ans": "\\cr (b)$$1.27741$$ (c) $$0.05\\%$$",
                                "feedback": "Your value for $\\theta_3$ is correct, but your percentage error calculation has a minor rounding slip. It should round to $0.13\\%$, not $0.05\\%$."
                        },
                        {
                                "ans": "\\cr (b)$$1.31229$$(c)$$2.87\\%$$",
                                "feedback": "You have calculated $\\theta_2$ instead of $\\theta_3$. The question requires two full applications of the Newton-Raphson formula to find $\\theta_3$ starting from $\\theta_1$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Tracking Multiple Terms",
                        "content": "When dealing with segment and triangle area ratios, always write out the full algebraic forms on your page before cancelling terms. It is probably easiest to cancel the $r^2$ coefficients first so you are left with a simple relationship in $\\theta$ and $\\sin\\theta$."
                }
        },
        {
                "id": "004108",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Trigonometry",
                "subtopic": [
                        "Numerical Methods",
                        "Newton Raphson"
                ],
                "img": "images/Pure_SVGs/004108.svg",
                "question": "The diagram shows a sector of a circle $OAB$ with radius $r$ and angle $\\theta$ radians. A line is drawn from $A$ perpendicular to $OB$, meeting $OB$ at $C$ to form a right-angled triangle $OAC$.<br><br>(a) Given that the area of the right-angled triangle $OAC$ is equal to three-tenths of the area of the sector $OAB$, show that $5\\sin(2\\theta) = 3\\theta$.<br><br>(b) Use the Newton-Raphson method with $\\theta_1 = 1.0$ to find $\\theta_3$ as an approximation for $\\theta$. Give your answer correct to five decimal places.<br><br>(c) Given that the actual value of $\\theta = 1.17243$ to five decimal places, find an estimate for the percentage error in the approximation found in part (b).",
                "steps": [
                        "First, state the formulas for the areas in terms of $r$ and $\\theta$. In the right-angled triangle $OAC$, the sides are $OC = r\\cos\\theta$ and $AC = r\\sin\\theta$. The area of this triangle is: \\begin{aligned}\\text{Area}_{\\triangle OAC} &= \\dfrac{1}{2}r^2\\sin\\theta\\cos\\theta \\cr&= \\dfrac{1}{4}r^2\\sin(2\\theta)\\end{aligned}",
                        "The area of the sector $OAB$ is: $$\\text{Area}_{sect OAB} = \\dfrac{1}{2}r^2\\theta$$",
                        "Set the triangle area equal to three-tenths of the sector area: \\begin{aligned}\\dfrac{1}{4}r^2\\sin(2\\theta) &= \\dfrac{3}{10} \\left(\\dfrac{1}{2}r^2\\theta\\right) \\cr\\dfrac{1}{4}r^2\\sin(2\\theta) &= \\dfrac{3}{20}r^2\\theta\\end{aligned}",
                        "Divide both sides by $r^2$ and multiply by $20$ to clear the fractions and obtain the target equation: \\begin{aligned}\\dfrac{1}{4}\\sin(2\\theta) &= \\dfrac{3}{20}\\theta \\cr5\\sin(2\\theta) &= 3\\theta\\end{aligned}",
                        "For Part (b), define $f(\\theta) = 3\\theta - 5\\sin(2\\theta)$ and its derivative $f'(\\theta) = 3 - 10\\cos(2\\theta)$. Use the Newton-Raphson formula: $$\\theta_{n+1} = \\theta_n - \\dfrac{3\\theta_n - 5\\sin(2\\theta_n)}{3 - 10\\cos(2\\theta_n)}$$",
                        "With $\\theta_1 = 1.0$, calculate the iterations. In the first iteration:\\begin{aligned}\\theta_2 &= 1.0 - \\dfrac{3(1.0) - 5\\sin(2)}{3 - 10\\cos(2)}\\cr &\\approx 1.21594\\end{aligned}",
                        "In the second iteration: \\begin{aligned}\\theta_3 &= 1.21594\\cr &\\quad - \\dfrac{3(1.21594) - 5\\sin(2.43188)}{3 - 10\\cos(2.43188)}\\cr & \\approx 1.17911\\end{aligned}",
                        "For Part (c), calculate the percentage error of $\\theta_3 \\approx 1.17911$ against the true root $\\theta = 1.17243$: \\begin{aligned}\\text{% error} &= \\dfrac{|1.17911 - 1.17243|}{1.17243} \\times 100\\cr &\\approx 0.57\\%$$",
                        "Final Answer: <br> (b)$$1.17911$$ (c) $$0.57\\%$$"
                ],
                "pi_options": [
                        {
                                "ans": "\\cr (b)$$1.17880$$ (c) $$0.54\\%$$",
                                "feedback": "This incorrect option probably results from a minor rounding slip during your second iteration. Double-check your values for $f(1.21594)$ and $f'(1.21594)$ on your page."
                        },
                        {
                                "ans": "\\cr (b)$$1.17911$$ (c) $$0.54\\%$$",
                                "feedback": "Your value for $\\theta_3$ is correct, but your percentage error calculation has a minor rounding slip. It should round to $0.57\\%$, not $0.54\\%$."
                        },
                        {
                                "ans": "\\cr (b)$$1.21594$$(c) $$3.71\\%$$",
                                "feedback": "You have calculated $\\theta_2$ instead of $\\theta_3$. The question requires two full applications of the Newton-Raphson formula to find $\\theta_3$ starting from $\\theta_1$."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Trigonometric Identity Shortcuts",
                        "content": "Recall the double-angle identity $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$. Rewriting the right-angled triangle area using this identity is probably the most elegant way to simplify the expression and match the target equation directly."
                }
        },
        {
                "id": "004109",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Trigonometry",
                "subtopic": [
                        "Numerical Methods",
                        "Newton Raphson"
                ],
                "img": "images/Pure_SVGs/004109.svg",
                "question": "The diagram shows two concentric sectors of circles $OAB$ and $OCD$ sharing the same angle $\\theta$ radians. The larger sector $OAB$ has radius $r$, and the smaller sector $OCD$ has radius $R = 0.6r$.<br><br>(a) Given that the area of the smaller sector $OCD$ is equal to $\\frac{9}{25}$ of the area of the triangle $OAB$ formed inside the larger sector, show that $2\\theta = 5\\sin\\theta$.<br><br>(b) Use the Newton-Raphson method with $\\theta_1 = 2.5$ to find $\\theta_3$ as an approximation for $\\theta$. Give your answer correct to five decimal places.<br><br>(c) Given that the actual value of $\\theta = 2.12463$ to five decimal places, find an estimate for the percentage error in the approximation found in part (b).",
                "steps": [
                        "First, state the formulas for both areas in terms of $r$ and $\\theta$. The area of the triangle $OAB$ inside the larger sector is: $$\\text{Area}_{\\triangle OAB}= \\dfrac{1}{2}r^2\\sin\\theta$$",
                        "Since the smaller sector has a radius of $R = 0.6r$, its area is: \\begin{aligned}\\text{Area}_{sect OCD}&= \\dfrac{1}{2}(0.6r)^2\\theta \\cr&= \\dfrac{1}{2}(0.36r^2)\\theta \\cr&= 0.18r^2\\theta\\end{aligned}",
                        "Set the smaller sector area equal to nine-tenths of the area of the triangle $OAB$: \\begin{aligned}0.18r^2\\theta &= \\dfrac{9}{10}\\left(\\dfrac{1}{2}r^2\\sin\\theta\\right) \\cr0.18r^2\\theta &= 0.45r^2\\sin\\theta\\end{aligned}",
                        "Divide both sides by $r^2$ and simplify the decimal ratio to obtain the target equation: \\begin{aligned}0.18\\theta &= 0.45\\sin\\theta \\cr\\theta &= \\dfrac{0.45}{0.18}\\sin\\theta \\cr\\theta &= 2.5\\sin\\theta \\cr2\\theta &= 5\\sin\\theta\\end{aligned}",
                        "For Part (b), define $f(\\theta) = 2\\theta - 5\\sin\\theta$ and its derivative $f'(\\theta) = 2 - 5\\cos\\theta$. Use the Newton-Raphson formula: $$\\theta_{n+1} = \\theta_n - \\dfrac{2\\theta_n - 5\\sin\\theta_n}{2 - 5\\cos\\theta_n}$$",
                        "With $\\theta_1 = 2.5$, calculate the iterations. In the first iteration: \\begin{aligned}\\theta_2 &= 2.5 - \\dfrac{2(2.5) - 5\\sin(2.5)}{2 - 5\\cos(2.5)}\\cr &\\approx 2.16571\\end{aligned}",
                        "In the second iteration: \\begin{aligned}\\theta_3 &= 2.16571\\cr & \\quad - \\dfrac{2(2.16571) - 5\\sin(2.16571)}{2 - 5\\cos(2.16571)}\\cr & \\approx 2.12654\\end{aligned}",
                        "For Part (c), calculate the percentage error of $\\theta_3 \\approx 2.12654$ against the true root $\\theta = 2.12463$: \\begin{aligned}\\text{% error} &= \\dfrac{|2.12654 - 2.12463|}{2.12463} \\times 100\\cr & \\approx 0.09\\%\\end{aligned}",
                        "Final Answer: <br> (b)$$2.12654$$ (c) $$0.09\\% $$"
                ],
                "pi_options": [
                        {
                                "ans": "\\cr (b)$$2.12680$$(c) $$0.10\\%$$",
                                "feedback": "This incorrect option probably results from a minor rounding slip during your second iteration. Double-check your values for $f(2.16571)$ and $f'(2.16571)$ on your page."
                        },
                        {
                                "ans": "\\cr (b)$$2.12654$$(c) $$0.10\\%$$",
                                "feedback": "Your value for $\\theta_3$ is correct, but your percentage error calculation has a minor rounding slip. It should round to $0.09\\%$, not $0.10\\%$."
                        },
                        {
                                "ans": "\\cr (b)$$2.16571$$(c) $$1.93\\%$$",
                                "feedback": "You have calculated $\\theta_2$ instead of $\\theta_3$. The question requires two full applications of the Newton-Raphson formula to find $\\theta_3$ starting from $\\theta_1$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Concentric Radius Pitfalls",
                        "content": "When dealing with concentric sectors, remember that area scales with the square of the radius. If $R = 0.6r$, the area scales by $0.36r^2$. Forgetting to square the scale factor is probably the most common way students lose marks on this topic."
                }
        },
        {
                "id": "004110",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Trigonometry",
                "subtopic": [
                        "Numerical Methods",
                        "Newton Raphson"
                ],
                "img": "images/Pure_SVGs/004110.svg",
                "question": "The diagram shows a sector of a circle $OAB$ with radius $r$ and angle $\\theta$ radians. A point $C$ lies on $OB$ such that $OC = \\frac{1}{3}r$.<br><br>(a) Given that the area of the triangle $OAC$ is equal to one-fifth of the area of the sector $OAB$, show that $3\\theta = 5\\sin\\theta$.<br><br>(b) Use the Newton-Raphson method with $\\theta_1 = 2.0$ to find $\\theta_3$ as an approximation for $\\theta$. Give your answer correct to five decimal places.<br><br>(c) Given that the actual value of $\\theta = 1.65215$ to five decimal places, find an estimate for the percentage error in the approximation found in part (b).",
                "steps": [
                        "First, state the formulas for both areas in terms of $r$ and $\\theta$. The area of the sector $OAB$ is: $$\\text{Area}_{sect OAB} = \\dfrac{1}{2}r^2\\theta$$",
                        "Since $OC = \\dfrac{1}{3}r$, the area of the triangle $OAC$ is: \\begin{aligned}\\text{Area}_{\\triangle OAC} &= \\dfrac{1}{2}(r)\\left(\\dfrac{1}{3}r\\right)\\sin\\theta \\cr&= \\dfrac{r^2}{6}\\sin\\theta\\end{aligned}",
                        "Set the triangle area equal to one-fifth of the sector area: \\begin{aligned}\\dfrac{r^2}{6}\\sin\\theta &= \\dfrac{1}{5}\\left(\\dfrac{1}{2}r^2\\theta\\right) \\cr\\dfrac{r^2}{6}\\sin\\theta &= \\dfrac{r^2}{10}\\theta\\end{aligned}",
                        "Divide both sides by $r^2$ and multiply by $30$ to clear the fractions and obtain the target equation: \\begin{aligned}\\dfrac{1}{6}\\sin\\theta &= \\dfrac{1}{10}\\theta \\cr5\\sin\\theta &= 3\\theta \\cr3\\theta &= 5\\sin\\theta\\end{aligned}",
                        "For Part (b), define $f(\\theta) = 3\\theta - 5\\sin\\theta$ and its derivative $f'(\\theta) = 3 - 5\\cos\\theta$. Use the Newton-Raphson formula: $$\\theta_{n+1} = \\theta_n - \\dfrac{3\\theta_n - 5\\sin\\theta_n}{3 - 5\\cos\\theta_n}$$",
                        "With $\\theta_1 = 2.0$, calculate the iterations. In the first iteration: \\begin{aligned}\\theta_2 &= 2.0 - \\dfrac{3(2.0) - 5\\sin(2.0)}{3 - 5\\cos(2.0)}\\cr & \\approx 1.71392\\end{aligned}",
                        "In the second iteration: \\begin{aligned}\\theta_3 &= 1.71392 \\cr & \\ quad- \\dfrac{3(1.71392) - 5\\sin(1.71392)}{3 - 5\\cos(1.71392)} \\cr &\\approx 1.66164\\end{aligned}",
                        "For Part (c), calculate the percentage error of $\\theta_3 \\approx 1.66164$ against the true root $\\theta = 1.65215$: \\begin{aligned}\\text{%error} &= \\dfrac{|1.66164 - 1.65215|}{1.65215} \\times 100\\cr & \\approx 0.57\\%\\end{aligned}",
                        "Final Answer: <br> (b) $$1.66164$$ (c) $$0.57\\% $$"
                ],
                "pi_options": [
                        {
                                "ans": "\\cr (b)$$1.66120$$(c) $$0.55\\%$$",
                                "feedback": "This incorrect option probably results from a minor rounding slip during your second iteration. Double-check your values for $f(1.71392)$ and $f'(1.71392)$ on your page."
                        },
                        {
                                "ans": "\\cr (b)$$1.66164$$(c) $$0.55\\%$$",
                                "feedback": "Your value for $\\theta_3$ is correct, but your percentage error calculation has a minor rounding slip. It should round to $0.57\\%$, not $0.55\\%$."
                        },
                        {
                                "ans": "\\cr (b)$$1.71392$$(c) $$3.74\\%$$",
                                "feedback": "You have calculated $\\theta_2$ instead of $\\theta_3$. The question requires two full applications of the Newton-Raphson formula to find $\\theta_3$ starting from $\\theta_1$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Intermediate Rounding Caution",
                        "content": "When evaluating multi-step numerical methods like Newton-Raphson, rounding your intermediate values (like $\\theta_2$) too early is probably the easiest way to lose precision in your final answer. Always keep the full unrounded value stored in your calculator's memory."
                }
        },
        {
                "id": "004111",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and Series",
                "topic": "Arithmetic series",
                "subtopic": [
                        "Sum of an AP"
                ],
                "img": false,
                "question": "An arithmetic sequence has first term $a$ and common difference $d$.<br><br>The sum of the first 16 terms of the sequence is equal to the square of the sum of the first 4 terms.<br><br>(a) Show that $4a + 30d = 4a^2 + 12ad + 9d^2$.<br><br>(b) Given that the fourth term of the sequence is 10, find the smallest possible value of $a$.",
                "steps": [
                        "First, state the formulas for both sums. The sum of the first 16 terms is: \\begin{aligned}S_{16} &= \\dfrac{16}{2}\\left(2a + 15d\\right) \\cr&= 8(2a + 15d) \\cr&= 16a + 120d\\end{aligned}",
                        "The sum of the first 4 terms is: \\begin{aligned}S_4 &= \\dfrac{4}{2}\\left(2a + 3d\\right) \\cr&= 2(2a + 3d) \\cr&= 4a + 6d\\end{aligned}",
                        "Next, set the sum of the first 16 terms equal to the square of the sum of the first 4 terms: $$16a + 120d = (4a + 6d)^2$$",
                        "Expand the perfect square on the right-hand side: $$16a + 120d = 16a^2 + 48ad + 36d^2$$",
                        "Divide both sides of the equation by $4$ to reach the target relation: $$4a + 30d = 4a^2 + 12ad + 9d^2$$",
                        "For Part (b), state the formula for the fourth term and rearrange for $d$: \\begin{aligned}u_4 &= a + 3d = 10 \\cr3d &= 10 - a \\cr d &= \\dfrac{10-a}{3}\\end{aligned}",
                        "Notice that the right-hand side of the Part (a) relation can be factored as a perfect square: $$4a + 30d = (2a + 3d)^2$$",
                        "Substitute $3d = 10 - a$ into both sides of the factored equation: \\begin{aligned}4a + 10(3d) &= (2a + 10 - a)^2 \\cr4a + 10(10-a) &= (a + 10)^2\\end{aligned}",
                        "Expand and simplify the resulting quadratic equation: \\begin{aligned}4a + 100 - 10a &= a^2 + 20a + 100 \\cr100 - 6a &= a^2 + 20a + 100 \\cr a^2 + 26a &= 0\\end{aligned}",
                        "Factor the quadratic to find the two possible values of $a$: \\begin{aligned}a(a + 26) &= 0 \\cr a &= 0 \\quad \\text{or} \\quad a = -26\\end{aligned}",
                        "Comparing the two roots, the smallest possible value of $a$ is $-26$.",
                        "Final Answer: <br> (b)$$a = -26$$"
                ],
                "pi_options": [
                        {
                                "ans": "<br>(b)$$a = 0$$",
                                "feedback": "You have found the larger of the two possible values of $a$. The question asks for the smallest possible value, which requires you to compare the two roots ($0$ and $-26$) and select $-26$."
                        },
                        {
                                "ans": "<br>(b)$$a = -10$$",
                                "feedback": "This incorrect answer probably arises from forgetting the middle term $48ad$ when expanding $(4a + 6d)^2$. Always write out the expansion of a perfect square step-by-step to prevent this common slip."
                        },
                        {
                                "ans": "<br>(b)$$a = 26$$",
                                "feedback": "This incorrect answer results from a sign error when factoring the quadratic $a^2 + 26a = 0$ or when transposing the root. The factorization gives $a(a+26) = 0$, so the roots are $a = 0$ and $a = -26$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Expanding Perfect Squares",
                        "content": "When expanding the squared sum term like $(4a + 6d)^2$, always write out the expansion step-by-step. A very common slip under exam pressure is to write $(4a+6d)^2 = 16a^2 + 36d^2$, completely forgetting the middle term $48ad$. This error is probably the most frequent way students lose easy marks on this topic."
                }
        },
        {
                "id": "004112",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and Series",
                "topic": "Arithmetic series",
                "subtopic": [
                        "Sum of an AP"
                ],
                "img": false,
                "question": "An arithmetic sequence has first term $a$ and common difference $d$.<br><br>The sum of the first 4 terms of the sequence is equal to the square of the sum of the first 2 terms.<br><br>(a) Show that $4a + 6d = 4a^2 + 4ad + d^2$.<br><br>(b) Given that the second term of the sequence is 3, find the smallest possible value of $a$.",
                "steps": [
                        "First, state the formulas for both sums. The sum of the first 4 terms is: \\begin{aligned}S_4 &= \\dfrac{4}{2}\\left(2a + 3d\\right) \\cr&= 2(2a + 3d) \\cr&= 4a + 6d\\end{aligned}",
                        "The sum of the first 2 terms is: \\begin{aligned}S_2 &= \\dfrac{2}{2}\\left(2a + d\\right) \\cr&= 2a + d\\end{aligned}",
                        "Next, set the sum of the first 4 terms equal to the square of the sum of the first 2 terms to reach the target relation: \\begin{aligned}4a + 6d &= (2a + d)^2 \\cr4a + 6d &= 4a^2 + 4ad + d^2\\end{aligned}",
                        "For Part (b), state the formula for the second term and rearrange for $d$: \\begin{aligned}u_2 &= a + d = 3 \\cr d &= 3 - a\\end{aligned}",
                        "Notice that the right-hand side of the Part (a) relation can be factored as a perfect square: $$4a + 6d = (2a + d)^2$$",
                        "Substitute $d = 3 - a$ into both sides of the factored equation: \\begin{aligned}4a + 6(3-a) &= (2a + 3 - a)^2 \\cr4a + 18 - 6a &= (a + 3)^2\\end{aligned}",
                        "Expand and simplify the resulting quadratic equation: \\begin{aligned}18 - 2a &= a^2 + 6a + 9 \\cr a^2 + 8a - 9 &= 0\\end{aligned}",
                        "Factor the quadratic to find the two possible values of $a$: \\begin{aligned}(a - 1)(a + 9) &= 0 \\cr a &= 1 \\quad \\text{or} \\quad a = -9\\end{aligned}",
                        "Comparing the two roots, the smallest possible value of $a$ is $-9$.",
                        "Final Answer: <br> (b)$$a = -9$$"
                ],
                "pi_options": [
                        {
                                "ans": "<br>(b)$$a = 1$$",
                                "feedback": "You have found the larger of the two possible values of $a$. The question asks for the smallest possible value, which requires you to compare the two roots ($1$ and $-9$) and select $-9$."
                        },
                        {
                                "ans": "<br>(b)$$a = -3$$",
                                "feedback": "This error probably arises from forgetting the middle term $4ad$ when expanding $(2a + d)^2$. Double-check your algebraic expansions carefully."
                        },
                        {
                                "ans": "<br>(b)$$a = 9$$",
                                "feedback": "This incorrect answer results from a sign error when transposing the roots of $a^2 + 8a - 9 = 0$. Since the quadratic factors to $(a-1)(a+9) = 0$, the roots are $a = 1$ and $a = -9$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Factoring Perfect Squares",
                        "content": "Notice that the quadratic expression $4a^2 + 4ad + d^2$ can be factored directly back into $(2a + d)^2$. Spotting this algebraic perfect square is probably the quickest shortcut to simplifying your steps, as it allows you to substitute the second term value $u_2$ directly into the squared term."
                }
        },
        {
                "id": "004113",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and Series",
                "topic": "Arithmetic series",
                "subtopic": [
                        "Sum of an AP"
                ],
                "img": false,
                "question": "An arithmetic sequence has first term $a$ and common difference $d$.<br><br>The sum of the first 8 terms of the sequence is equal to the square of the sum of the first 2 terms.<br><br>(a) Show that $8a + 28d = 4a^2 + 4ad + d^2$.<br><br>(b) Given that the second term of the sequence is 2, find the smallest possible value of $a$.",
                "steps": [
                        "First, state the formulas for both sums. The sum of the first 8 terms is: \\begin{aligned}S_8 &= \\dfrac{8}{2}\\left(2a + 7d\\right) \\cr&= 4(2a + 7d) \\cr&= 8a + 28d\\end{aligned}",
                        "The sum of the first 2 terms is: \\begin{aligned}S_2 &= \\dfrac{2}{2}\\left(2a + d\\right) \\cr&= 2a + d\\end{aligned}",
                        "Next, set the sum of the first 8 terms equal to the square of the sum of the first 2 terms to reach the target relation: \\begin{aligned}8a + 28d &= (2a + d)^2 \\cr8a + 28d &= 4a^2 + 4ad + d^2\\end{aligned}",
                        "For Part (b), state the formula for the second term and rearrange for $d$: \\begin{aligned}u_2 &= a + d = 2 \\cr d &= 2 - a\\end{aligned}",
                        "Notice that the right-hand side of the Part (a) relation can be factored as a perfect square: $$8a + 28d = (2a + d)^2$$",
                        "Substitute $d = 2 - a$ into both sides of the factored equation: \\begin{aligned}8a + 28(2-a) &= (2a + 2 - a)^2 \\cr8a + 56 - 28a &= (a + 2)^2\\end{aligned}",
                        "Expand and simplify the resulting quadratic equation: \\begin{aligned}56 - 20a &= a^2 + 4a + 4 \\cr a^2 + 24a - 52 &= 0\\end{aligned}",
                        "Factor the quadratic to find the two possible values of $a$: \\begin{aligned}(a - 2)(a + 26) &= 0 \\cr a &= 2 \\quad \\text{or} \\quad a = -26\\end{aligned}",
                        "Comparing the two roots, the smallest possible value of $a$ is $-26$.",
                        "Final Answer: <br> (b)$$a = -26$$"
                ],
                "pi_options": [
                        {
                                "ans": "<br>(b)$$a = 2$$",
                                "feedback": "You have found the larger of the two possible values of $a$. The question asks for the smallest possible value, which requires you to compare the two roots ($2$ and $-26$) and select $-26$."
                        },
                        {
                                "ans": "<br>(b)$$a = -12$$",
                                "feedback": "This incorrect answer probably arises from forgetting the middle term $4ad$ when expanding $(2a + d)^2$ in Part (a), which leads to an incorrect quadratic in Part (b)."
                        },
                        {
                                "ans": "<br>(b)$$a = 26$$",
                                "feedback": "This incorrect answer results from a sign error when transposing the roots of $a^2 + 24a - 52 = 0$. Since the quadratic factors to $(a-2)(a+26) = 0$, the roots are $a = 2$ and $a = -26$."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Quadratic Discriminants in Progressions",
                        "content": "In the final step of finding the first term $a$, we solve the quadratic equation $a^2 + 24a - 52 = 0$. Since the discriminant of this quadratic is $24^2 - 4(1)(-52) = 784 = 28^2$, it is a perfect square, meaning our roots are integers. This is a reassuring sign that your algebraic transpositions have probably been performed correctly."
                }
        },
        {
                "id": "004114",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and Series",
                "topic": "Arithmetic series",
                "subtopic": [
                        "Sum of an AP"
                ],
                "img": false,
                "question": "An arithmetic sequence has first term $a$ and common difference $d$.<br><br>The sum of the first 9 terms of the sequence is equal to the square of the sum of the first 3 terms.<br><br>(a) Show that $a + 4d = a^2 + 2ad + d^2$.<br><br>(b) Given that the third term of the sequence is 8, find the smallest possible value of $a$.",
                "steps": [
                        "First, state the formulas for both sums. The sum of the first 9 terms is: \\begin{aligned}S_9 &= \\dfrac{9}{2}\\left(2a + 8d\\right) \\cr&= 9a + 36d\\end{aligned}",
                        "The sum of the first 3 terms is: \\begin{aligned}S_3 &= \\dfrac{3}{2}\\left(2a + 2d\\right) \\cr&= 3a + 3d\\end{aligned}",
                        "Next, set the sum of the first 9 terms equal to the square of the sum of the first 3 terms: \\begin{aligned}9a + 36d &= (3a + 3d)^2 \\cr9a + 36d &= 9(a + d)^2\\end{aligned}",
                        "Divide both sides of the equation by $9$ to reach the target relation: \\begin{aligned}a + 4d &= (a + d)^2 \\cr a + 4d &= a^2 + 2ad + d^2\\end{aligned}",
                        "For Part (b), state the formula for the third term and rearrange for $d$: \\begin{aligned}u_3 &= a + 2d = 8 \\cr2d &= 8 - a \\cr d &= \\dfrac{8-a}{2}\\end{aligned}",
                        "Substitute $d = \\dfrac{8-a}{2}$ into both sides of the simplified relation: $$a + 4\\left(\\dfrac{8-a}{2}\\right) = \\left(a + \\dfrac{8-a}{2}\\right)^2$$",
                        "Simplify both sides of the equation: \\begin{aligned}a + 2(8-a) &= \\left(\\dfrac{2a + 8 - a}{2}\\right)^2 \\cr16 - a &= \\dfrac{(a+8)^2}{4}\\end{aligned}",
                        "Clear the fraction by multiplying both sides by $4$: \\begin{aligned}64 - 4a &= a^2 + 16a + 64 \\cr a^2 + 20a &= 0\\end{aligned}",
                        "Factor the quadratic to find the two possible values of $a$: \\begin{aligned}a(a + 20) &= 0 \\cr a &= 0 \\quad \\text{or} \\quad a = -20\\end{aligned}",
                        "Comparing the two roots, the smallest possible value of $a$ is $-20$.",
                        "Final Answer: <br> (b)$$a = -20$$"
                ],
                "pi_options": [
                        {
                                "ans": "<br>(b)$$a = 0$$",
                                "feedback": "You have found the larger of the two possible values of $a$. The question asks for the smallest possible value, which requires you to compare the two roots ($0$ and $-20$) and select $-20$."
                        },
                        {
                                "ans": "<br>(b)$$a = -5$$",
                                "feedback": "This incorrect answer probably arises from forgetting to square the denominator when substituting $d = \\frac{8-a}{2}$ into $d^2$ in Part (b)."
                        },
                        {
                                "ans": "<br>(b)$$a = 20$$",
                                "feedback": "This incorrect answer results from a sign error when transposing the roots of $a^2 + 20a = 0$. Since the quadratic factors to $a(a+20) = 0$, the roots are $a = 0$ and $a = -20$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Fractional Exponent Handling",
                        "content": "When substituting $d = \\frac{8-a}{2}$ into the term $d^2$, you must square both the numerator and the denominator, yielding $\\frac{(8-a)^2}{4}$. Forgetting to square the denominator is a major slip that will prevent you from reaching the correct quadratic equation. Always expand brackets deliberately on your page."
                }
        },
        {
                "id": "004115",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and Series",
                "topic": "Arithmetic series",
                "subtopic": [
                        "Sum of an AP"
                ],
                "img": false,
                "question": "An arithmetic sequence has first term $a$ and common difference $d$.<br><br>The sum of the first 16 terms of the sequence is equal to the square of the sum of the first 2 terms.<br><br>(a) Show that $16a + 120d = 4a^2 + 4ad + d^2$.<br><br>(b) Given that the second term of the sequence is 4, find the smallest possible value of $a$.",
                "steps": [
                        "First, state the formulas for both sums. The sum of the first 16 terms is: \\begin{aligned}S_{16} &= \\dfrac{16}{2}\\left(2a + 15d\\right) \\cr&= 8(2a + 15d) \\cr&= 16a + 120d\\end{aligned}",
                        "The sum of the first 2 terms is: \\begin{aligned}S_2 &= \\dfrac{2}{2}\\left(2a + d\\right) \\cr&= 2a + d\\end{aligned}",
                        "Next, set the sum of the first 16 terms equal to the square of the sum of the first 2 terms to reach the target relation: \\begin{aligned}16a + 120d &= (2a + d)^2 \\cr16a + 120d &= 4a^2 + 4ad + d^2\\end{aligned}",
                        "For Part (b), state the formula for the second term and rearrange for $d$: \\begin{aligned}u_2 &= a + d = 4 \\cr d &= 4 - a\\end{aligned}",
                        "Notice that the right-hand side of the Part (a) relation can be factored as a perfect square: $$16a + 120d = (2a + d)^2$$",
                        "Substitute $d = 4 - a$ into both sides of the factored equation: \\begin{aligned}16a + 120(4-a) &= (2a + 4 - a)^2 \\cr16a + 480 - 120a &= (a + 4)^2\\end{aligned}",
                        "Expand and simplify the resulting quadratic equation: \\begin{aligned}480 - 104a &= a^2 + 8a + 16 \\cr a^2 + 112a - 464 &= 0\\end{aligned}",
                        "Factor the quadratic to find the two possible values of $a$: \\begin{aligned}(a - 4)(a + 116) &= 0 \\cr a &= 4 \\quad \\text{or} \\quad a = -116\\end{aligned}",
                        "Comparing the two roots, the smallest possible value of $a$ is $-116$.",
                        "Final Answer: <br> (b)$$a = -116$$"
                ],
                "pi_options": [
                        {
                                "ans": "<br>(b)$$a = 4$$",
                                "feedback": "You have found the larger of the two possible values of $a$. The question asks for the smallest possible value, which requires you to compare the two roots ($4$ and $-116$) and select $-116$."
                        },
                        {
                                "ans": "<br>(b)$$a = -16$$",
                                "feedback": "This incorrect answer probably arises from forgetting the middle term $4ad$ when expanding $(2a+d)^2$ in Part (a), which leads to an incorrect quadratic in Part (b)."
                        },
                        {
                                "ans": "<br>(b)$$a = 116$$",
                                "feedback": "This incorrect answer results from a sign error when transposing the roots of $a^2 + 112a - 464 = 0$. Since the quadratic factors to $(a-4)(a+116) = 0$, the roots are $a = 4$ and $a = -116$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Double-Checking Quadratic Factors",
                        "content": "To solve high-coefficient quadratics like $a^2 + 112a - 464 = 0$, we look for two numbers that multiply to $-464$ and add to $112$. If factoring is not immediately obvious, utilizing the quadratic formula is probably the most reliable and stress-free strategy to secure your marks."
                }
        },
        {
                "id": "004116",
                "board": "AQA",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Functions and Mappings",
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "A patient takes a dose of a prescribed drug. A doctor models the mass of the drug in the patient's body using<br>$$m = m_0 \\text{e}^{-kt}$$<br>where $m_0$ milligrams is the initial mass of the drug in the body and $m$ milligrams is the mass of the drug in the body after $t$ hours.<br><br>On average, it takes 4.5 hours for the mass of the drug in the body to halve. One standard dose contains 150 mg of the drug.<br><br>(a) The patient takes two standard doses at 9 am. Use the model to estimate the mass of the drug remaining in the patient's body at 2 pm.<br><br>(b) To prevent toxicity, the patient must ensure the mass of the drug in her body remains below 350 mg. Use the model to find the earliest time after 9 am that she can take another single standard dose of 150 mg. Give your answer to the nearest minute.<br><br>(c) State a biological reason why the mass of the drug remaining in the patient's body predicted by the model may not be completely accurate.",
                "steps": [
                        "First, calculate the decay constant $k$ by setting $m = \\dfrac{1}{2}m_0$ when $t = 4.5$: \\begin{aligned}\\dfrac{1}{2}m_0 &= m_0\\text{e}^{-4.5k} \\cr\\text{e}^{-4.5k} &= 0.5 \\cr-4.5k &= \\ln(0.5) \\cr k &= \\dfrac{\\ln(2)}{4.5}\\cr &\\approx 0.15403\\end{aligned}",
                        "For Part (a), calculate the initial mass $m_0$ for two standard doses of 150 mg: \\begin{aligned}m_0 &= 2 \\times 150 \\cr&= 300\\text{ mg}\\end{aligned}",
                        "Calculate the time elapsed between 9 am and 2 pm, which is $t = 5$ hours. Substitute $m_0 = 300$ and $t = 5$ into the model: \\begin{aligned}m &= 300\\text{e}^{-0.15403 \\times 5} \\cr&= 300\\text{e}^{-0.77015} \\cr &\\approx 138.93\\text{ mg} \\cr &\\approx 139\\text{ mg}\\end{aligned}",
                        "For Part (b), to stay below 350 mg immediately after taking a new 150 mg dose, the mass remaining in the body just before the dose must satisfy: \\begin{aligned}\\text{Mass remaining} + 150 &\\le 350 \\cr\\implies \\text{Mass remaining} &\\le 200\\text{ mg}\\end{aligned}",
                        "Set $m = 200$ and solve for $t$: \\begin{aligned}200 &= 300\\text{e}^{-kt} \\cr\\text{e}^{-kt} &= \\dfrac{200}{300} = \\dfrac{2}{3}\\end{aligned}",
                        "Take the natural logarithm of both sides to isolate the exponent: \\begin{aligned}-kt &= \\ln\\left(\\dfrac{2}{3}\\right) \\cr kt &= \\ln(1.5)\\cr & \\approx 0.40547\\end{aligned}",
                        "Divide by the decay constant $k = 0.15403$ to find the time $t$ in hours: $$t = \\dfrac{0.40547}{0.15403} \\approx 2.63233\\text{ hours}$$",
                        "Convert the decimal hours to minutes: \\begin{aligned}&2\\text{ hours and } (0.63233 \\times 60)\\text{ minutes} \\cr & \\quad \\approx 2\\text{ hours and } 38\\text{ minutes}\\end{aligned}",
                        "Add this time elapsed to 9 am: \\begin{aligned}9\\text{ am} &+ 2\\text{ hours } 38\\text{ minutes}\\cr & = 11\\text{:}38\\text{ am}\\end{aligned}",
                        "For Part (c), identify a biological limitation: the elimination rate of a drug is not perfectly constant. It varies based on individual liver and kidney function, metabolic speed, hydration levels, and other physiological factors.",
                        "Final Answer: (a) $$ 139\\text{ mg}$$ (b) $$11\\text{:}38\\text{ am}$$"
                ],
                "pi_options": [
                        {
                                "ans": "(a) $$ 75\\text{ mg}$$ (b) $$11\\text{:}38\\text{ am}$$",
                                "feedback": "In Part (a), you probably assumed the drug halves twice because 5 hours is close to two half-lives of 4.5 hours (which would divide 300 mg by 4 to get 75 mg). However, you must use the continuous exponential decay model with the decay constant $k$ to get the precise remaining mass of $139\\text{ mg}$."
                        },
                        {
                                "ans": "(a) $$ 139\\text{ mg}$$ (b) $$11\\text{:}25\\text{ am}$$",
                                "feedback": "In Part (b), you probably made an error when setting up the limit. Remember that she can only take a 150 mg dose once the remaining mass drops to $350 - 150 = 200\\text{ mg}$, not $150\\text{ mg}$."
                        },
                        {
                                "ans": "(a) $$ 139\\text{ mg}$$ (b) $$12\\text{:}08\\text{ pm}$$",
                                "feedback": "In Part (b), you probably made a sign error during your logarithmic rearrangement, calculating $kt = \\ln(2.5)$ instead of $kt = \\ln(1.5)$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Dosage Boundary Thresholds",
                        "content": "For dose safety questions, pay close attention to the wording. The patient must decay down to $350 - 150 = 200\\text{ mg}$ before taking the next dose. Setting the decay target directly to $150\\text{ mg}$ is probably the most common threshold slip on these papers."
                }
        },
        {
                "id": "004117",
                "board": "AQA",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Functions and Mappings",
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "A hot cup of tea is left to cool in a room held at a constant temperature of $20^\\circ\\text{C}$. The temperature of the tea, $\\theta$ (in $^\\circ\\text{C}$), after $t$ minutes is modelled by<br>$$\\theta = 20 + 70\\text{e}^{-kt}$$<br>On average, the temperature difference between the tea and the room halves every 12 minutes.<br><br>(a) The tea is poured at 1 pm. Use the model to estimate the temperature of the tea at 1:30 pm.<br><br>(b) The tea is considered comfortable to drink once its temperature drops below $55^\\circ\\text{C}$. Find the earliest time after 1 pm that the tea is comfortable to drink. Give your answer to the nearest minute.<br><br>(c) State a physical reason why the temperature of the tea predicted by the model may not be completely accurate.",
                "steps": [
                        "First, identify the term representing the temperature difference: $$\\theta - 20 = 70\\text{e}^{-kt}$$",
                        "Calculate the decay constant $k$ using the fact that this difference halves every 12 minutes: \\begin{aligned}\\dfrac{1}{2} \\times 70 &= 70\\text{e}^{-12k} \\cr\\text{e}^{-12k} &= 0.5 \\cr-12k &= \\ln(0.5) \\cr k &= \\dfrac{\\ln(2)}{12} \\approx 0.05776\\end{aligned}",
                        "For Part (a), calculate the time elapsed between 1 pm and 1:30 pm, which is $t = 30$ minutes. Substitute $t = 30$ into the model: \\begin{aligned}\\theta &= 20 + 70\\text{e}^{-0.05776 \\times 30} \\cr&= 20 + 70\\text{e}^{-1.7328}\\cr & \\approx 20 + 12.37 \\cr &\\approx 32.4^\\circ\\text{C}\\end{aligned}",
                        "For Part (b), set $\\theta = 55$ and solve for $t$: \\begin{aligned}55 &= 20 + 70\\text{e}^{-kt} \\cr70\\text{e}^{-kt} &= 35 \\cr\\text{e}^{-kt} &= 0.5\\end{aligned}",
                        "Take the natural logarithm of both sides to isolate the exponent: \\begin{aligned}-kt &= \\ln(0.5) \\cr kt &= \\ln(2)\\cr t &= \\dfrac{\\ln(2)}{k}\\end{aligned}",
                        "Substitute $k = \\dfrac{\\ln(2)}{12}$ into the equation: \\begin{aligned}t &= \\dfrac{\\ln(2)}{\\ln(2)/12} \\cr&= 12\\text{ minutes}\\end{aligned}",
                        "Add this elapsed time to 1 pm: $$1\\text{ pm} + 12\\text{ minutes} = 1\\text{:}12\\text{ pm}$$",
                        "For Part (c), identify a physical limitation: the ambient room temperature may not remain perfectly constant. Stirring the tea, draft currents, or the thermal properties of the mug can also accelerate or slow down the cooling rate.",
                        "Final Answer: (a) $$ 32.4^\\circ\\text{C}$$ (b) $$1\\text{:}12\\text{ pm}$$"
                ],
                "pi_options": [
                        {
                                "ans": "(a) $$ 32.4^\\circ\\text{C}$$ (b) $$1\\text{:}24\\text{ pm}$$",
                                "feedback": "In Part (b), you probably made a calculation error. Since the initial temperature difference of $70^\\circ\\text{C}$ needs to drop to $35^\\circ\\text{C}$ (which is exactly half), it must take exactly one half-life cycle of $12$ minutes, not $24$."
                        },
                        {
                                "ans": "(a) $$ 35.0^\\circ\\text{C}$$ (b) $$1\\text{:}12\\text{ pm}$$",
                                "feedback": "In Part (a), you probably forgot to add the ambient room temperature of $20^\\circ\\text{C}$ back to your cooling difference value, or forgot that the exponent was a negative term."
                        },
                        {
                                "ans": "(a) $$ 32.4^\\circ\\text{C}$$ (b) $$1\\text{:}08\\text{ pm}$$",
                                "feedback": "In Part (b), check your transposition of the cooling threshold. The comfortable drinking threshold is $55^\\circ\\text{C}$, meaning the difference must halve once, taking exactly 12 minutes."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Newton's Law of Cooling Constants",
                        "content": "For cooling models written as $\\theta = T_{\\text{ambient}} + C\\text{e}^{-kt}$, always isolate the exponential term first by subtracting $T_{\\text{ambient}}$. If the threshold is exactly half of the initial difference, the time required will always be exactly one half-life period, which is probably the fastest mental verification shortcut on the exam."
                }
        },
        {
                "id": "004118",
                "board": "AQA",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Functions and Mappings",
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "A biologist is researching the growth of a bacterial culture. She models the population of the bacteria, $P$, using<br>$$P = P_0\\text{e}^{kt}$$<br>where $P_0$ is the initial population of the culture and $t$ is the time in hours. On average, the population of the bacteria doubles every 4.2 hours.<br><br>(a) The biologist starts a culture with an initial population of 5000 bacteria at 10 am. Use the model to estimate the population of the culture at 4 pm. Give your answer to 3 significant figures.<br><br>(b) The culture must be transferred to a larger container once the population exceeds 30,000 bacteria. Find the earliest time after 10 am that the transfer must take place. Give your answer to the nearest minute.<br><br>(c) State a biological reason why this exponential growth model is unlikely to remain accurate over a long period of time.",
                "steps": [
                        "First, calculate the growth constant $k$ using the doubling time of 4.2 hours: \\begin{aligned}2P_0 &= P_0\\text{e}^{4.2k} \\cr\\text{e}^{4.2k} &= 2 \\cr4.2k &= \\ln(2) \\cr k &= \\dfrac{\\ln(2)}{4.2} \\approx 0.16504\\end{aligned}",
                        "For Part (a), calculate the time elapsed between 10 am and 4 pm, which is $t = 6$ hours. Substitute $P_0 = 5000$ and $t = 6$ into the model: \\begin{aligned}P &= 5000\\text{e}^{0.16504 \\times 6} \\cr&= 5000\\text{e}^{0.99024}\\cr &\\approx 13459 \\cr &\\approx 13500\\text{ bacteria}\\end{aligned}",
                        "For Part (b), set $P = 30000$ and solve for $t$: \\begin{aligned}30000 &= 5000\\text{e}^{kt} \\cr\\text{e}^{kt} &= \\dfrac{30000}{5000} = 6\\end{aligned}",
                        "Take the natural logarithm of both sides to isolate the exponent: $$kt = \\ln(6) \\approx 1.79176$$",
                        "Divide by the growth constant $k = 0.16504$ to find the time $t$ in hours: $$t = \\dfrac{1.79176}{0.16504} \\approx 10.8568\\text{ hours}$$",
                        "Convert the decimal hours to minutes: \\begin{aligned}10 & \\text{ hours and } (0.8568 \\times 60)\\text{ minutes} \\cr & \\quad\\approx 10\\text{ hours and } 51\\text{ minutes}\\end{aligned}",
                        "Add this elapsed time to 10 am: \\begin{aligned}10\\text{ am} &+ 10\\text{ hours } 51\\text{ minutes}\\cr & = 8\\text{:}51\\text{ pm}\\end{aligned}",
                        "For Part (c), identify a biological limitation: in the real world, nutrient resources become depleted, space becomes limited, and toxic metabolic waste products accumulate, which will eventually slow down the reproduction rate.",
                        "Final Answer: (a) $$ 13500\\text{ bacteria}$$ (b) $$8\\text{:}51\\text{ pm}$$"
                ],
                "pi_options": [
                        {
                                "ans": "(a) $$ 13500\\text{ bacteria}$$ (b) $$8\\text{:}52\\text{ pm}$$",
                                "feedback": "In Part (b), you probably used a prematurely rounded value of the growth constant $k \\approx 0.165$. Carrying the full calculator accuracy of $k \\approx 0.16504$ yields $10$ hours and $51$ minutes, leading to $8:51\\text{ pm}$."
                        },
                        {
                                "ans": "(a) $$ 10000\\text{ bacteria}$$ (b) $$8\\text{:}51\\text{ pm}$$",
                                "feedback": "In Part (a), you probably assumed that the population only doubles once. Over $6$ hours, which is longer than the $4.2$ hour doubling time, the population must grow by a factor of $2^{6/4.2} \\approx 2.69$."
                        },
                        {
                                "ans": "(a) $$ 13500\\text{ bacteria}$$ (b) $$9\\text{:}12\\text{ pm}$$",
                                "feedback": "In Part (b), check your division steps. Solving $\\text{e}^{kt} = 6$ requires dividing $\\ln(6)$ by $k$, not $\\ln(5)$ or other incorrect constants."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Limits of Exponential Growth",
                        "content": "Exponential growth models are highly accurate in early phases but fail over long periods. Mentioning nutrient depletion, space limitations, or waste buildup are probably the most accepted ecological explanations to secure these reasoning marks."
                }
        },
        {
                "id": "004119",
                "board": "AQA",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Functions and Mappings",
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "A physics laboratory is storing a sample of a radioactive isotope. The activity of the sample, $A$ (in Becquerels, Bq), is modelled by<br>$$A = A_0\\text{e}^{-\\lambda t}$$<br>where $A_0$ is the initial activity of the sample and $t$ is the time in days. The half-life of this radioactive isotope is 8.1 days.<br><br>(a) A sample of the isotope has an initial activity of 800 Bq on Monday at 12 pm. Use the model to estimate the remaining activity exactly 12 days later. Give your answer to 3 significant figures.<br><br>(b) The sample is considered safe to handle without special shielding once its activity drops below 100 Bq. Find the minimum storage time required before the sample is safe, giving your answer in days and hours (to the nearest hour).<br><br>(c) State a physical reason why the measured activity of the sample at any given moment might differ slightly from the model's prediction.",
                "steps": [
                        "First, calculate the decay constant $\\lambda$ using the half-life of 8.1 days: \\begin{aligned}\\dfrac{1}{2}A_0 &= A_0\\text{e}^{-8.1\\lambda} \\cr\\text{e}^{-8.1\\lambda} &= 0.5 \\cr-8.1\\lambda &= \\ln(0.5) \\cr\\lambda &= \\dfrac{\\ln(2)}{8.1} \\approx 0.08557\\end{aligned}",
                        "For Part (a), substitute $A_0 = 800$, $\\lambda = 0.08557$, and $t = 12$ days into the model: \\begin{aligned}A &= 800\\text{e}^{-0.08557 \\times 12} \\cr&= 800\\text{e}^{-1.02684} \\approx 286.49 \\approx 286\\text{ Bq}\\end{aligned}",
                        "For Part (b), set $A = 100$ and solve for $t$: \\begin{aligned}100 &= 800\\text{e}^{-\\lambda t} \\cr\\text{e}^{-\\lambda t} &= \\dfrac{100}{800} = \\dfrac{1}{8} = 2^{-3}\\end{aligned}",
                        "Take the natural logarithm of both sides to isolate the exponent: \\begin{aligned}-\\lambda t &= \\ln(2^{-3}) \\cr-\\lambda t &= -3\\ln(2)\\cr t &= \\dfrac{3\\ln(2)}{\\lambda}\\end{aligned}",
                        "Substitute $\\lambda = \\dfrac{\\ln(2)}{8.1}$ into the equation: \\begin{aligned}t &= 3 \\times 8.1 \\cr&= 24.3\\text{ days}\\end{aligned}",
                        "Convert the decimal days to hours: \\begin{aligned}24\\text{ days and }& (0.3 \\times 24)\\text{ hours}\\cr  = 24\\text{ days and }& 7.2\\text{ hours} \\cr &\\approx 24\\text{ days and } 7\\cr &\\text{ hours}\\end{aligned}",
                        "For Part (c), identify a physical limitation: radioactive decay is a random, stochastic quantum process. The model predicts the average expected decay, but the actual measurements will fluctuate statistically around this smooth curve.",
                        "Final Answer: (a) $$ 286\\text{ Bq}$$ (b) $$24\\text{ days and } 7\\text{ hours}$$"
                ],
                "pi_options": [
                        {
                                "ans": "(a) $$ 225\\text{ Bq}$$ (b) $$24\\text{ days and } 7\\text{ hours}$$",
                                "feedback": "In Part (a), you probably made a calculation slip in your fractional indices or exponent multiplications. Double-check your calculator entry for $800 \\times \\text{e}^{-12\\lambda}$."
                        },
                        {
                                "ans": "(a) $$ 286\\text{ Bq}$$ (b) $$24\\text{ days and } 12\\text{ hours}$$",
                                "feedback": "In Part (b), when converting $0.3$ days to hours, remember that a day has 24 hours. Therefore, $0.3 \\times 24 = 7.2\\text{ hours}$, which rounds to $7\\text{ hours}$ (not $12$)."
                        },
                        {
                                "ans": "(a) $$ 286\\text{ Bq}$$ (b) $$8\\text{ days and } 3\\text{ hours}$$",
                                "feedback": "In Part (b), you probably solved for 1 half-life instead of 3. Since the activity must drop to $\\frac{1}{8}$ of the initial value, it must undergo exactly three half-lives."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Integer Half-Life Shortcut",
                        "content": "When a target value is an exact fractional power of 2 (like $\\frac{1}{8} = 2^{-3}$), the time required is exactly $3$ half-lives. Recognising this is probably the quickest way to skip complex log rearrangements in Part (b) and secure full marks instantly."
                }
        },
        {
                "id": "004120",
                "board": "AQA",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Functions and Mappings",
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "A meteorologist models the atmospheric pressure, $P$ (in kilopascals, kPa), at an altitude of $h$ kilometres above sea level using<br>$$P = P_0\\text{e}^{-kh}$$<br>where $P_0$ kPa is the pressure at sea level. On average, the atmospheric pressure halves for every 5.5 km increase in altitude.<br><br>(a) Given that the atmospheric pressure at sea level is 101.3 kPa, use the model to estimate the pressure at the summit of Mount Kilimanjaro, which is at an altitude of 5895 metres. Give your answer to 3 significant figures.<br><br>(b) A weather balloon is designed to transmit data until the surrounding pressure drops below 15 kPa. Use the model to find the maximum altitude the balloon can reach before it stops transmitting. Give your answer to the nearest 10 metres.<br><br>(c) State a meteorological reason why this pressure model may not be perfectly accurate.",
                "steps": [
                        "First, convert the altitude of Mount Kilimanjaro from metres to kilometres to match the variable unit of $h$: $$5895\\text{ metres} = 5.895\\text{ km}$$",
                        "Calculate the decay constant $k$ by setting $P = \\dfrac{1}{2}P_0$ when $h = 5.5$: \\begin{aligned}\\dfrac{1}{2}P_0 &= P_0\\text{e}^{-5.5k} \\cr\\text{e}^{-5.5k} &= 0.5 \\cr-5.5k &= \\ln(0.5) \\cr k &= \\dfrac{\\ln(2)}{5.5} \\approx 0.12603\\end{aligned}",
                        "For Part (a), substitute $P_0 = 101.3$, $k = 0.12603$, and $h = 5.895$ into the model: \\begin{aligned}P &= 101.3\\text{e}^{-0.12603 \\times 5.895} \\cr&= 101.3\\text{e}^{-0.74295}\\cr & \\approx 48.19 \\cr &\\approx 48.2\\text{ kPa}\\end{aligned}",
                        "For Part (b), set $P = 15$ to find the altitude limit: \\begin{aligned}15 &= 101.3\\text{e}^{-kh} \\cr\\text{e}^{-kh} &= \\dfrac{15}{101.3} \\approx 0.14808\\end{aligned}",
                        "Take the natural logarithm of both sides to isolate the exponent: \\begin{aligned}-kh &= \\ln(0.14808)\\cr & \\approx -1.91006 \\cr kh &\\approx 1.91006\\end{aligned}",
                        "Divide by the decay constant $k = 0.12603$ to solve for $h$: $$h = \\dfrac{1.91006}{0.12603} \\approx 15.1555\\text{ km}$$",
                        "Convert this altitude back to metres: $$15.1555\\text{ km} = 15,155.5\\text{ metres}$$",
                        "Round to the nearest 10 metres: $$15,155.5\\text{ metres} \\approx 15,160\\text{ metres}$$",
                        "For Part (c), identify a meteorological limitation: the model assumes a uniform, static atmosphere. Real-world atmospheric pressure is dynamically affected by local temperature profiles, humidity, and weather fronts independently of altitude.",
                        "Final Answer: (a) $$ 48.2\\text{ kPa}$$ (b) $$15,160\\text{ metres}$$"
                ],
                "pi_options": [
                        {
                                "ans": "(a) $$ 47.9\\text{ kPa}$$ (b) $$15,050\\text{ metres}$$",
                                "feedback": "This incorrect option probably results from a minor rounding slip when calculating $k$. Carrying the rounded value $k \\approx 0.1269$ instead of $0.12603$ shifts your results. Use full calculator accuracy for $k$."
                        },
                        {
                                "ans": "(a) $$ 48.2\\text{ kPa}$$ (b) $$15,160\\text{ km}$$",
                                "feedback": "In Part (b), you probably forgot to convert your final answer back from kilometres to metres. An altitude of $15,160\\text{ km}$ would extend into outer space; the target unit is metres."
                        },
                        {
                                "ans": "(a) $$ 48.2\\text{ kPa}$$ (b) $$15,120\\text{ metres}$$",
                                "feedback": "In Part (b), check your division steps. Solving $\\text{e}^{-kh} = 0.14808$ requires dividing the natural log of this term by $k$, carrying full decimal precision."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Variable Unit Consistency",
                        "content": "Always check the units of your variables before substituting them. Since the height model is defined with $h$ in kilometres, substituting $h = 5895\\text{ metres}$ directly is a major trap. Converting metres to kilometres first is probably the safest way to avoid losing all accuracy marks on this question."
                }
        },
        {
                "id": "004121",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Modelling and Applications",
                        "Numerical Methods"
                ],
                "img": false,
                "question": "The daily world production of natural gas can be modelled using:\\begin{aligned}V &= 20 + 200\\left(\\dfrac{t}{40}\\right)^3 \\cr & \\quad- 100\\left(\\dfrac{t}{40}\\right)^4\\end{aligned}where $V$ is the volume of gas in billions of cubic metres, and $t$ is the time in years since 1 January 1990.<br><br>(a) (i) The model is used to predict the time, $T$, when gas production will fall to zero. Show that $T$ satisfies the equation:<br>$$T = \\sqrt[3]{80T^2 + \\dfrac{512\\,000}{T}}$$ <br>(a) (ii) Use the iterative formula $T_{n+1} = \\sqrt[3]{80T_n^2 + \\dfrac{512\\,000}{T_n}}$, with $T_0 = 50$, to find the values of $T_1$, $T_2$, and $T_3$, giving your answers to three decimal places.<br><br>(a) (iii) Explain the relevance of using $T_0 = 50$.<br><br>(b) From 1 January 1990, the daily use of natural gas by one technologically developing country can be modelled as:<br>$$V = 8.5 \\times 1.058^t$$<br>Use the models to show that the country's use of gas and the world production of gas will be equal during the year 2044.",
                "steps": [
                        "For Part (a)(i), set the volume $V$ equal to $0$ and expand the exponents: \\begin{aligned}0 &= 20 + 200\\left(\\dfrac{T}{40}\\right)^3 - 100\\left(\\dfrac{T}{40}\\right)^4 \\cr 0 &= 20 + 200\\left(\\dfrac{T^3}{64\\,000}\\right)\\cr & \\quad - 100\\left(\\dfrac{T^4}{2\\,560\\,000}\\right)\\end{aligned} which simplifies to: $$0 = 20 + \\dfrac{T^3}{320} - \\dfrac{T^4}{25\\,600}$$",
                        "Multiply the entire equation by $25\\,600$ to clear the fractions: $$0 = 512\\,000 + 80T^3 - T^4$$",
                        "Rearrange the terms and divide both sides by $T$ (since $T > 0$): \\begin{aligned}T^4 &= 80T^3 + 512\\,000\\cr t^3 &= 80T^2 + \\dfrac{512\\,000}{T}\\end{aligned}",
                        "Take the cube root of both sides to obtain the target iterative relation: $$T = \\sqrt[3]{80T^2 + \\dfrac{512\\,000}{T}}$$ as required.",
                        "For Part (a)(ii), substitute $T_0 = 50$ into the formula to find the successive iterations: \\begin{aligned}T_1 &= \\sqrt[3]{80(50)^2 + \\dfrac{512\\,000}{50}} \\cr&= \\sqrt[3]{200\\,000 + 10\\,240} \\cr&= \\sqrt[3]{210\\,240} \\approx 59.464\\end{aligned}",
                        "Find the subsequent terms carrying full decimal precision: \\begin{aligned}T_2 &= \\sqrt[3]{80(59.4643)^2 + \\dfrac{512\\,000}{59.4643}}\\cr & \\approx \\sqrt[3]{291\\,491.0}\\cr &\\approx 66.305\\end{aligned} and \\begin{aligned}T_3 &= \\sqrt[3]{80(66.3051)^2 + \\dfrac{512\\,000}{66.3051}} \\cr &\\approx \\sqrt[3]{359\\,430.4} \\cr &\\approx 71.099\\end{aligned}",
                        "For Part (a)(iii), explain the relevance: $T = 50$ corresponds to the year 2040 (since $1990 + 50 = 2040$). This provides a realistic starting estimate that is close to the expected root, which improves the speed of convergence.",
                        "For Part (b), find the intersection interval by evaluating the difference between production and consumption. Let $$f(t) = V_{\\text{prod}} - V_{\\text{use}}$$ The year 2044 corresponds to $t = 54$ (since $1990 + 54 = 2044$).",
                        "Evaluate both models at $t = 54$: \\begin{aligned}V_{\\text{prod}} &= 20 + 200\\left(\\dfrac{54}{40}\\right)^3\\cr & \\quad - 100\\left(\\dfrac{54}{40}\\right)^4 \\cr &\\approx 180.12\\text{ Bcm}\\end{aligned} and \\begin{aligned}V_{\\text{use}} &= 8.5 \\times 1.058^{54}\\cr & \\approx 178.53\\text{ Bcm}\\end{aligned}. Since $180.12 > 178.53$, production exceeds consumption.",
                        "Evaluate both models at $t = 55$: \\begin{aligned}V_{\\text{prod}} &= 20 + 200\\left(\\dfrac{55}{40}\\right)^3\\cr & \\quad - 100\\left(\\dfrac{55}{40}\\right)^4 \cr &\\approx 182.44\\text{ Bcm}\\end{aligned} and \\begin{aligned}V_{\\text{use}} &= 8.5 \\times 1.058^{55}\\cr &\\approx 188.88\\text{ Bcm}\\end{aligned} Since $182.44 < 188.88$, consumption now exceeds production.",
                        "Since the difference $V_{\\text{prod}} - V_{\\text{use}}$ changes sign from positive to negative between $t = 54$ and $t = 55$, the curves must intersect during this interval (which corresponds exactly to the calendar year 2044).",
                        "Final Answer: (a)(ii) $$T_1 = 59.464$$ $$T_2 = 66.305$$ $$T_3 = 71.099$$ $$(b)54 < t < 55 \\implies 2044$$"
                ],
                "pi_options": [
                        {
                                "ans": "(a)(ii) $$ T_1 = 59.452$$ $$T_2 = 66.292$$ $$T_3 = 70.987$$ $$(b)54 < t < 55 \\implies 2044$$",
                                "feedback": "In Part (a)(ii), you probably made a minor rounding slip when calculating the cube root of $210,240$$. Carrying the rounded value $T_1 \\approx 59.452$ instead of $59.464$ caused your subsequent iterations to drift. Use full calculator accuracy."
                        },
                        {
                                "ans": "(a)(ii) $$T_1 = 59.464$$ $$T_2 = 66.305$$ $$T_3 = 71.099$$ $$(b)50 < t < 51 \\implies 2040$$",
                                "feedback": "In Part (b), check your interval analysis. While $t = 50$ is your starting iteration value, evaluating the production and consumption curves shows that they do not cross until $t$ is between $54$ and $55$, which corresponds to the year 2044."
                        },
                        {
                                "ans": "(a)(ii) $$T_1 = 59.464$$ $$T_2 = 66.305$$ $$T_3 = 71.099$$ $$(b)53 < t < 54 \\implies 2043$$",
                                "feedback": "In Part (b), check your arithmetic when evaluating both models at $t = 54$. Since $V_{\\text{prod}} \\approx 180.12$ and $V_{\\text{use}} \\approx 178.53$, production is still greater than consumption, meaning they have not crossed yet."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Intermediate Calculation Accuracy",
                        "content": "When evaluating nested iterations like cube roots, never round your intermediate values on your page before performing the next step. Carrying unrounded values stored in your calculator memory is probably the safest way to prevent rounding drift in your final decimal places."
                }
        },
        {
                "id": "004122",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Modelling and Applications",
                        "Numerical Methods"
                ],
                "img": false,
                "question": "A technology company models its annual revenue, $R$ (in millions of pounds), using:<br>\\begin{aligned} R &= 5 + 30\\left(\\dfrac{ t }{ 10 }\\right)^2 \\cr &\\quad - 10\\left(\\dfrac{ t }{ 10 }\\right)^3 \\end{aligned}<br>where $t$ is the number of years since 1 January 2010.<br><br>(a) (i) The model is used to predict the time, $T$, when annual revenue will drop to zero. Show that $T$ satisfies the equation:<br>$$T = \\sqrt{30T + \\dfrac{500}{T}}$$ <br>(a) (ii) Use the iterative formula $T_{n+1} = \\sqrt{30T_n + \\dfrac{500}{T_n}}$, with $T_0 = 31$, to find the values of $T_1$, $T_2$, and $T_3$, giving your answers to three decimal places.<br><br>(a) (iii) Explain the relevance of using $T_0 = 31$.<br><br>(b) The company's annual operating cost, $C$ (in millions of pounds), is modelled by:<br>$$C = 1.2 \\times 1.09^t$$<br>Use the models to show that the company's annual costs and annual revenue will be equal during the year 2038.<br><br><strong>Note:</strong> Select the option that matches your calculated results for <strong>Part (a)(ii)</strong> and <strong>Part (b)</strong>.",
                "steps": [
                        "For Part (a)(i), set the revenue $R$ equal to $0$ and expand the exponents:<br><br>\\begin{aligned} &0 = 5 + 30\\left(\\dfrac{ T }{ 10 }\\right)^2 - 10\\left(\\dfrac{ T }{ 10 }\\right)^3 \\cr &\\quad = 5 + 30\\left(\\dfrac{ T^2 }{ 100 }\\right) - 10\\left(\\dfrac{ T^3 }{ 1\\,000 }\\right) \\cr &\\quad = 5 + \\dfrac{ 3T^2 }{ 10 } - \\dfrac{ T^3 }{ 100 } \\end{aligned}",
                        "Multiply the entire equation by $100$ to clear the fractions:<br><br>$$0 = 500 + 30T^2 - T^3$$",
                        "Rearrange the terms and divide both sides by $T$ (since $T > 0$):<br><br>\\begin{aligned} T^3 &= 30T^2 + 500 \\cr T^2 &= 30T + \\dfrac{ 500 }{ T } \\end{aligned}",
                        "Take the square root of both sides to obtain the target iterative relation:<br><br>$$T = \\sqrt{ 30T + \\dfrac{ 500 }{ T } }$$ as required.",
                        "For Part (a)(ii), substitute $T_0 = 31$ into the formula to find the successive iterations:<br><br>\\begin{aligned} T_1 &= \\sqrt{ 30(31) + \\dfrac{ 500 }{ 31 } } \\cr &= \\sqrt{ 930 + 16.129 } \\cr &= \\sqrt{ 946.129 } \\cr &\\approx 30.759 \\end{aligned}",
                        "Find the subsequent terms carrying full decimal precision:<br><br>\\begin{aligned} T_2 &= \\sqrt{ 30(30.7592) + \\dfrac{ 500 }{ 30.7592 } } \\cr &\\approx \\sqrt{ 939.031 } \\cr &\\approx 30.644 \\end{aligned}<br><br>and<br><br>\\begin{aligned} T_3 &= \\sqrt{ 30(30.6436) + \\dfrac{ 500 }{ 30.6436 } } \\cr &\\approx \\sqrt{ 935.625 } \\cr &\\approx 30.588 \\end{aligned}",
                        "For Part (a)(iii), explain the relevance: $T = 31$ years corresponds to the year 2041 (since $2010 + 31 = 2041$). This provides a realistic starting estimate that is close to the expected root, which improves the speed of convergence.",
                        "For Part (b), find the intersection interval by evaluating the difference between revenue and costs. Let $f(t) = R - C$. The year 2038 corresponds to $t = 28$ (since $2010 + 28 = 2038$).",
                        "Evaluate both models at $t = 28$:<br><br>\\begin{aligned} R &= 5 + 30\\left(\\dfrac{ 28 }{ 10 }\\right)^2 - 10\\left(\\dfrac{ 28 }{ 10 }\\right)^3 \\cr &\\approx 20.68\\text{ million} \\end{aligned}<br><br>and<br><br>\\begin{aligned} C &= 1.2 \\times 1.09^{ 28 } \\cr &\\approx 13.40\\text{ million} \\end{aligned}<br><br>Since $20.68 > 13.40$, revenue exceeds operating costs.",
                        "Evaluate both models at $t = 29$:<br><br>\\begin{aligned} R &= 5 + 30\\left(\\dfrac{ 29 }{ 10 }\\right)^2 - 10\\left(\\dfrac{ 29 }{ 10 }\\right)^3 \\cr &\\approx 13.41\\text{ million} \\end{aligned}<br><br>and<br><br>\\begin{aligned} C &= 1.2 \\times 1.09^{ 29 } \\cr &\\approx 14.61\\text{ million} \\end{aligned}<br><br>Since $13.41 < 14.61$, costs now exceed revenue.",
                        "Since the difference $R - C$ changes sign from positive to negative between $t = 28$ and $t = 29$, the curves must intersect during this interval (which corresponds exactly to the calendar year 2038).",
                        "<strong>Final Answer:</strong><br><br>\\begin{aligned} T_1 &= 30.759 \\cr T_2 &= 30.644 \\cr T_3 &= 30.588 \\cr \\text{Interval:} & \\quad 28 < t < 29 \\implies 2038 \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$\\begin{aligned} T_1 &= 30.763 \\cr T_2 &= 30.642 \\cr T_3 &= 30.593 \\cr \\text{Interval:} & \\quad 28 < t < 29 \\implies 2038 \\end{aligned}",
                                "feedback": "In Part (a)(ii), you probably made a minor rounding slip when calculating the square root of $946.129$. Carrying the rounded value $T_1 \\approx 30.763$ instead of $30.759$ caused your subsequent iterations to drift. Use full calculator accuracy."
                        },
                        {
                                "ans": "$\\begin{aligned} T_1 &= 30.759 \\cr T_2 &= 30.644 \\cr T_3 &= 30.588 \\cr \\text{Interval:} & \\quad 27 < t < 28 \\implies 2037 \\end{aligned}",
                                "feedback": "In Part (b), check your interval analysis. While $t = 28$ is your target value, evaluating both models shows that they do not cross until $t$ is between $28$ and $29$, which corresponds to the year 2038."
                        },
                        {
                                "ans": "$\\begin{aligned} T_1 &= 30.759 \\cr T_2 &= 30.644 \\cr T_3 &= 30.588 \\cr \\text{Interval:} & \\quad 29 < t < 30 \\implies 2039 \\end{aligned}",
                                "feedback": "In Part (b), check your arithmetic when evaluating both models at $t = 28$. Since $R \\approx 20.68$ and $C \\approx 13.40$, revenue is still greater than costs, meaning they have not crossed yet."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Variable Rearrangements",
                        "content": "When manipulating polynomial equations to isolate $T^2$ or $T^3$, always check which index power you are dividing by. A common slip under exam pressure is to divide by the wrong power, which completely prevents you from matching the target iterative formula."
                }
        },
        {
                "id": "004123",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Modelling and Applications",
                        "Numerical Methods"
                ],
                "img": false,
                "question": "The volume of water, $V$ (in thousands of cubic metres), in a reservoir $t$ months after a prolonged dry spell begins is modelled by:<br>\\begin{aligned} V &= 8 + 48\\left(\\dfrac{ t }{ 12 }\\right)^2 \\cr &\\quad - 8\\left(\\dfrac{ t }{ 12 }\\right)^3 \\end{aligned}<br>(a) (i) The model is used to predict the time, $T$, when the reservoir will be completely empty. Show that $T$ satisfies the equation:<br>$$T = \\sqrt[3]{72T^2 + 1728}$$ <br>(a) (ii) Use the iterative formula $T_{n+1} = \\sqrt[3]{72T_n^2 + 1728}$, with $T_0 = 73$, to find the values of $T_1$, $T_2$, and $T_3$, giving your answers to three decimal places.<br><br>(a) (iii) Explain the relevance of using $T_0 = 73$.<br><br>(b) The constant inflow of water from a small feeding stream, $V_{\\text{in}}$ (in thousands of cubic metres per month), is modelled by:<br>$$V_{\\text{in}} = 0.5 \\times 1.07^t$$<br>Use the models to show that the inflow of water and the volume of water in the reservoir will be equal during the 70th month.<br><br><strong>Note:</strong> Select the option that matches your calculated results for <strong>Part (a)(ii)</strong> and <strong>Part (b)</strong>.",
                "steps": [
                        "For Part (a)(i), set the volume $V$ equal to $0$ and expand the exponents:<br><br>\\begin{aligned} &0 = 8 + 48\\left(\\dfrac{ T }{ 12 }\\right)^2 - 8\\left(\\dfrac{ T }{ 12 }\\right)^3 \\cr &\\quad = 8 + 48\\left(\\dfrac{ T^2 }{ 144 }\\right) - 8\\left(\\dfrac{ T^3 }{ 1728 }\\right) \\cr &\\quad = 8 + \\dfrac{ T^2 }{ 3 } - \\dfrac{ T^3 }{ 216 } \\end{aligned}",
                        "Multiply the entire equation by $216$ to clear the fractions:<br><br>$$0 = 1728 + 72T^2 - T^3$$",
                        "Rearrange the terms and isolate $T^3$:<br><br>$$T^3 = 72T^2 + 1728$$",
                        "Take the cube root of both sides to obtain the target iterative relation:<br><br>$$T = \\sqrt[3]{ 72T^2 + 1728 }$$ as required.",
                        "For Part (a)(ii), substitute $T_0 = 73$ into the formula to find the successive iterations:<br><br>\\begin{aligned} T_1 &= \\sqrt[3]{ 72(73)^2 + 1728 } \\cr &= \\sqrt[3]{ 383\\,688 + 1728 } \\cr &= \\sqrt[3]{ 385\\,416 } \\cr &\\approx 72.775 \\end{aligned}",
                        "Find the subsequent terms carrying full decimal precision:<br><br>\\begin{aligned} T_2 &= \\sqrt[3]{ 72(72.7749)^2 + 1728 } \\cr &\\approx \\sqrt[3]{ 383\\,052.9 } \\cr &\\approx 72.626 \\end{aligned}<br><br>and<br><br>\\begin{aligned} T_3 &= \\sqrt[3]{ 72(72.6256)^2 + 1728 } \\cr &\\approx \\sqrt[3]{ 381\\,489.3 } \\cr &\\approx 72.527 \\end{aligned}",
                        "For Part (a)(iii), explain the relevance: $T = 73$ months corresponds to just over 6 years ($6 \\times 12 = 72$ months). This provides a realistic starting estimate that is close to the expected root, which improves the speed of convergence.",
                        "For Part (b), find the intersection interval by evaluating the difference between reservoir volume and inflow. Let $f(t) = V - V_{\\text{in}}$.",
                        "Evaluate both models at $t = 69$:<br><br>\\begin{aligned} V &= 8 + 48\\left(\\dfrac{ 69 }{ 12 }\\right)^2 - 8\\left(\\dfrac{ 69 }{ 12 }\\right)^3 \\cr &\\approx 74.13\\text{ thousand} \\end{aligned}<br><br>and<br><br>\\begin{aligned} V_{\\text{in}} &= 0.5 \\times 1.07^{ 69 } \\cr &\\approx 53.20\\text{ thousand} \\end{aligned}<br><br>Since $74.13 > 53.20$, reservoir volume exceeds inflow.",
                        "Evaluate both models at $t = 70$:<br><br>\\begin{aligned} V &= 8 + 48\\left(\\dfrac{ 70 }{ 12 }\\right)^2 - 8\\left(\\dfrac{ 70 }{ 12 }\\right)^3 \\cr &\\approx 53.37\\text{ thousand} \\end{aligned}<br><br>and<br><br>\\begin{aligned} V_{\\text{in}} &= 0.5 \\times 1.07^{ 70 } \\cr &\\approx 56.92\\text{ thousand} \\end{aligned}<br><br>Since $53.37 < 56.92$, inflow now exceeds reservoir volume.",
                        "Since the difference $V - V_{\\text{in}}$ changes sign from positive to negative between $t = 69$ and $t = 70$, the curves must intersect during this interval (which corresponds exactly to the 70th month).",
                        "<strong>Final Answer:</strong><br><br>\\begin{aligned} T_1 &= 72.775 \\cr T_2 &= 72.626 \\cr T_3 &= 72.527 \\cr \\text{Interval:} & \\quad 69 < t < 70 \\cr & \\implies \\text{70th month} \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$\\begin{aligned} T_1 &= 72.700 \\cr T_2 &= 72.400 \\cr T_3 &= 72.200 \\cr \\text{Interval:} & \\quad 69 < t < 70  \\cr & \\implies \\text{70th month} \\end{aligned}",
                                "feedback": "In Part (a)(ii), you probably made a minor rounding slip when calculating the cube root of $385,416$. Carrying the rounded value $T_1 \\approx 72.700$ instead of $72.775$ caused your subsequent iterations to drift. Use full calculator accuracy."
                        },
                        {
                                "ans": "$\\begin{aligned} T_1 &= 72.775 \\cr T_2 &= 72.626 \\cr T_3 &= 72.527 \\cr \\text{Interval:} & \\quad 68 < t < 69 \\cr &  \\implies \\text{69th month} \\end{aligned}",
                                "feedback": "In Part (b), check your interval analysis. While $t = 69$ is your target value, evaluating both models shows that they do not cross until $t$ is between $69$ and $70$, which corresponds to the 70th month."
                        },
                        {
                                "ans": "$\\begin{aligned} T_1 &= 72.775 \\cr T_2 &= 72.626 \\cr T_3 &= 72.527 \\cr \\text{Interval:} & \\quad 70 < t < 71  \\cr & \\implies \\text{71st month} \\end{aligned}",
                                "feedback": "In Part (b), check your arithmetic when evaluating both models at $t = 69$. Since $V \\approx 74.13$ and $V_{\\text{in}} \\approx 53.20$, reservoir volume is still greater than inflow, meaning they have not crossed yet."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Tracking Fractional Exponents",
                        "content": "When expanding and simplifying terms like $(t/12)^3$, write out the denominator power clearly as $1728$. Cancelling the coefficient factors systematically is probably the safest way to avoid arithmetic slips during your algebraic rearrangments."
                }
        },
        {
                "id": "004124",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Numerical Methods",
                "topic": "Numerical Methods",
                "subtopic": [
                        "Numerical Methods",
                        "Trigonometry"
                ],
                "img": false,
                "question": "The rate of a primary chemical reaction, $R$ (in moles per second), is modelled by<br>\\begin{aligned} R &= 5 + 50\\left(\\dfrac{ t }{ 10 }\\right)^3 \\cr &\\quad - 25\\left(\\dfrac{ t }{ 10 }\\right)^4 \\end{aligned}<br>where $t$ is the time in minutes.<br><br>(a) (i) The model is used to predict the time, $T$, when the primary reaction stops. Show that $T$ satisfies the equation:<br>$$T = \\sqrt[3]{20T^2 + \\dfrac{2000}{T}}$$<br>(a) (ii) Use the iterative formula $T_{n+1} = \\sqrt[3]{20T_n^2 + \\dfrac{2000}{T_n}}$, with $T_0 = 21$, to find the values of $T_1$, $T_2$, and $T_3$, giving your answers to three decimal places.<br><br>(a) (iii) Explain the relevance of using $T_0 = 21$.<br><br>(b) A secondary chemical inhibitor is introduced, and its reaction rate, $R_{\\text{inh}}$ (in moles per second), is modelled by:<br>$$R_{\\text{inh}} = 0.8 \\times 1.15^t$$<br>Use the models to show that the inhibitor's reaction rate and the primary reaction rate will be equal during the 20th minute.<br><br><strong>Note:</strong> Select the option that matches your calculated results for <strong>Part (a)(ii)</strong> and <strong>Part (b)</strong>.",
                "steps": [
                        "For Part (a)(i), set the rate $R$ equal to $0$ and expand the exponents:<br><br>\\begin{aligned} &0 = 5 + 50\\left(\\dfrac{ T }{ 10 }\\right)^3 - 25\\left(\\dfrac{ T }{ 10 }\\right)^4 \\cr &\\quad = 5 + 50\\left(\\dfrac{ T^3 }{ 1\\,000 }\\right) - 25\\left(\\dfrac{ T^4 }{ 10\\,000 }\\right) \\cr &\\quad = 5 + \\dfrac{ T^3 }{ 20 } - \\dfrac{ T^4 }{ 400 } \\end{aligned}",
                        "Multiply the entire equation by $400$ to clear the fractions:<br><br>$$0 = 2\\,000 + 20T^3 - T^4$$",
                        "Rearrange the terms and divide both sides by $T$ (since $T > 0$):<br><br>\\begin{aligned} T^4 &= 20T^3 + 2\\,000 \\cr T^3 &= 20T^2 + \\dfrac{ 2\\,000 }{ T } \\end{aligned}",
                        "Take the cube root of both sides to obtain the target iterative relation:<br><br>$$T = \\sqrt[3]{ 20T^2 + \\dfrac{ 2\\,000 }{ T } }$$ as required.",
                        "For Part (a)(ii), substitute $T_0 = 21$ into the formula to find the successive iterations:<br><br>\\begin{aligned} T_1 &= \\sqrt[3]{ 20(21)^2 + \\dfrac{ 2\\,000 }{ 21 } } \\cr &= \\sqrt[3]{ 8\\,820 + 95.238 } \\cr &= \\sqrt[3]{ 8\\,915.238 } \\cr &\\approx 20.735 \\end{aligned}",
                        "Find the subsequent terms carrying full decimal precision:<br><br>\\begin{aligned} T_2 &= \\sqrt[3]{ 20(20.7352)^2 + \\dfrac{ 2\\,000 }{ 20.7352 } } \\cr &\\approx \\sqrt[3]{ 8\\,695.45 } \\cr &\\approx 20.563 \\end{aligned}<br><br>and<br><br>\\begin{aligned} T_3 &= \\sqrt[3]{ 20(20.5631)^2 + \\dfrac{ 2\\,000 }{ 20.5631 } } \\cr &\\approx \\sqrt[3]{ 8\\,554.16 } \\cr &\\approx 20.451 \\end{aligned}",
                        "For Part (a)(iii), explain the relevance: $T = 21$ minutes is a realistic starting estimate that is close to the expected root (since the reaction stops just over 20 minutes), which improves the speed of convergence.",
                        "For Part (b), find the intersection interval by evaluating the difference between reaction rates. Let $f(t) = R - R_{\\text{inh}}$.",
                        "Evaluate both models at $t = 19$:<br><br>\\begin{aligned} R &= 5 + 50\\left(\\dfrac{ 19 }{ 10 }\\right)^3 - 25\\left(\\dfrac{ 19 }{ 10 }\\right)^4 \\cr &\\approx 22.15\\text{ moles/s} \\end{aligned}<br><br>and<br><br>\\begin{aligned} R_{\\text{inh}} &= 0.8 \\times 1.15^{ 19 } \\cr &\\approx 11.39\\text{ moles/s} \\end{aligned}<br><br>Since $22.15 > 11.39$, primary reaction rate exceeds the inhibitor rate.",
                        "Evaluate both models at $t = 20$:<br><br>\\begin{aligned} R &= 5 + 50\\left(\\dfrac{ 20 }{ 10 }\\right)^3 - 25\\left(\\dfrac{ 20 }{ 10 }\\right)^4 \\cr &= 5\\text{ moles/s} \\end{aligned}<br><br>and<br><br>\\begin{aligned} R_{\\text{inh}} &= 0.8 \\times 1.15^{ 20 } \\cr &\\approx 13.09\\text{ moles/s} \\end{aligned}<br><br>Since $5 < 13.09$, the inhibitor rate now exceeds the primary reaction rate.",
                        "Since the difference $R - R_{\\text{inh}}$ changes sign from positive to negative between $t = 19$ and $t = 20$, the curves must intersect during this interval (which corresponds exactly to the 20th minute).",
                        "<strong>Final Answer:</strong><br><br>\\begin{aligned} T_1 &= 20.735 \\cr T_2 &= 20.563 \\cr T_3 &= 20.451 \\cr \\text{Interval:} & \\quad 19 < t < 20  \\cr & \\implies \\text{20th minute} \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$\\begin{aligned} T_1 &= 20.730 \\cr T_2 &= 20.610 \\cr T_3 &= 20.540 \\cr \\text{Interval:} & \\quad 19 < t < 20  \\cr & \\implies \\text{20th minute} \\end{aligned}",
                                "feedback": "In Part (a)(ii), you probably made a minor rounding slip when calculating the cube root of $8,915.24$. Carrying the rounded value $T_1 \\approx 20.730$ instead of $20.735$ caused your subsequent iterations to drift. Use full calculator accuracy."
                        },
                        {
                                "ans": "$\\begin{aligned} T_1 &= 20.735 \\cr T_2 &= 20.563 \\cr T_3 &= 20.451 \\cr \\text{Interval:} & \\quad 18 < t < 19 \\cr &  \\implies \\text{19th minute} \\end{aligned}",
                                "feedback": "In Part (b), check your interval analysis. While $t = 19$ is your target value, evaluating both models shows that they do not cross until $t$ is between $19$ and $20$, which corresponds to the 20th minute."
                        },
                        {
                                "ans": "$\\begin{aligned} T_1 &= 20.735 \\cr T_2 &= 20.563 \\cr T_3 &= 20.451 \\cr \\text{Interval:} & \\quad 20 < t < 21 \\cr &  \\implies \\text{21st minute} \\end{aligned}",
                                "feedback": "In Part (b), check your arithmetic when evaluating both models at $t = 19$. Since $R \\approx 22.15$ and $R_{\\text{inh}} \\approx 11.39$, primary rate is still greater than inhibitor rate, meaning they have not crossed yet."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Intermediate Step Preservation",
                        "content": "When performing iterative operations like cube roots, always keep the unrounded value in your calculator. Rounding too early is probably the most common way students lose accuracy marks on these numerical sequences."
                }
        },
        {
                "id": "004125",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Modelling and Applications",
                        "Numerical Methods"
                ],
                "img": false,
                "question": "The total value of a corporate delivery fleet, $V$ (in millions of pounds), $t$ years after purchase is modelled by:<br>\\begin{aligned} V &= 4 + 40\\left(\\dfrac{ t }{ 20 }\\right)^3 \\cr &\\quad - 20\\left(\\dfrac{ t }{ 20 }\\right)^4 \\end{aligned}<br>(a) (i) The model is used to predict the time, $T$, when the total value of the fleet will depreciate to zero. Show that $T$ satisfies the equation:<br>$$T = \\sqrt[3]{40T^2 + \\dfrac{32\\,000}{T}}$$ <br>(a) (ii) Use the iterative formula $T_{n+1} = \\sqrt[3]{40T_n^2 + \\dfrac{32\\,000}{T_n}}$, with $T_0 = 41$, to find the values of $T_1$, $T_2$, and $T_3$, giving your answers to three decimal places.<br><br>(a) (iii) Explain the relevance of using $T_0 = 41$.<br><br>(b) The company's annual fleet maintenance cost, $C$ (in millions of pounds), is modelled by:<br>$$C = 0.2 \\times 1.085^t$$<br>Use the models to show that the annual maintenance cost and the total fleet value will be equal during the 40th year.<br><br><strong>Note:</strong> Select the option that matches your calculated results for <strong>Part (a)(ii)</strong> and <strong>Part (b)</strong>.",
                "steps": [
                        "For Part (a)(i), set the value $V$ equal to $0$ and expand the exponents:<br><br>\\begin{aligned} &0 = 4 + 40\\left(\\dfrac{ T }{ 20 }\\right)^3 - 20\\left(\\dfrac{ T }{ 20 }\\right)^4 \\cr &\\quad = 4 + 40\\left(\\dfrac{ T^3 }{ 8\\,000 }\\right) - 20\\left(\\dfrac{ T^4 }{ 160\\,000 }\\right) \\cr &\\quad = 4 + \\dfrac{ T^3 }{ 200 } - \\dfrac{ T^4 }{ 8\\,000 } \\end{aligned}",
                        "Multiply the entire equation by $8\\,000$ to clear the fractions:<br><br>$$0 = 32\\,000 + 40T^3 - T^4$$",
                        "Rearrange the terms and divide both sides by $T$ (since $T > 0$):<br><br>\\begin{aligned} T^4 &= 40T^3 + 32\\,000 \\cr T^3 &= 40T^2 + \\dfrac{ 32\\,000 }{ T } \\end{aligned}",
                        "Take the cube root of both sides to obtain the target iterative relation:<br><br>$$T = \\sqrt[3]{ 40T^2 + \\dfrac{ 32\\,000 }{ T } }$$ as required.",
                        "For Part (a)(ii), substitute $T_0 = 41$ into the formula to find the successive iterations:<br><br>\\begin{aligned} T_1 &= \\sqrt[3]{ 40(41)^2 + \\dfrac{ 32\\,000 }{ 41 } } \\cr &= \\sqrt[3]{ 67\\,240 + 780.487 } \\cr &= \\sqrt[3]{ 68\\,020.487 } \\cr &\\approx 40.821 \\end{aligned}",
                        "Find the subsequent terms carrying full decimal precision:<br><br>\\begin{aligned} T_2 &= \\sqrt[3]{ 40(40.8205)^2 + \\dfrac{ 32\\,000 }{ 40.8205 } } \\cr &\\approx \\sqrt[3]{ 67\\,436.4 } \\cr &\\approx 40.704 \\end{aligned}<br><br>and<br><br>\\begin{aligned} T_3 &= \\sqrt[3]{ 40(40.7037)^2 + \\dfrac{ 32\\,000 }{ 40.7037 } } \\cr &\\approx \\sqrt[3]{ 67\\,057.5 } \\cr &\\approx 40.627 \\end{aligned}",
                        "For Part (a)(iii), explain the relevance: $T = 41$ years corresponds to a realistic starting estimate that is close to the expected root (since the fleet value depreciates to zero just over 40 years), which improves the speed of convergence.",
                        "For Part (b), find the intersection interval by evaluating the difference between fleet value and maintenance costs. Let $f(t) = V - C$.",
                        "Evaluate both models at $t = 39$:<br><br>\\begin{aligned} V &= 4 + 40\\left(\\dfrac{ 39 }{ 20 }\\right)^3 - 20\\left(\\dfrac{ 39 }{ 20 }\\right)^4 \\cr &\\approx 11.42\\text{ million} \\end{aligned}<br><br>and<br><br>\\begin{aligned} C &= 0.2 \\times 1.085^{ 39 } \\cr &\\approx 4.82\\text{ million} \\end{aligned}<br><br>Since $11.42 > 4.82$, fleet value exceeds maintenance costs.",
                        "Evaluate both models at $t = 40$:<br><br>\\begin{aligned} V &= 4 + 40\\left(\\dfrac{ 40 }{ 20 }\\right)^3 - 20\\left(\\dfrac{ 40 }{ 20 }\\right)^4 \\cr &= 4\\text{ million} \\end{aligned}<br><br>and<br><br>\\begin{aligned} C &= 0.2 \\times 1.085^{ 40 } \\cr &\\approx 5.23\\text{ million} \\end{aligned}<br><br>Since $4 < 5.23$, maintenance costs now exceed the fleet value.",
                        "Since the difference $V - C$ changes sign from positive to negative between $t = 39$ and $t = 40$, the curves must intersect during this interval (which corresponds exactly to the 40th year).",
                        "<strong>Final Answer:</strong><br><br>\\begin{aligned} T_1 &= 40.821 \\cr T_2 &= 40.704 \\cr T_3 &= 40.627 \\cr \\text{Interval:} & \\quad 39 < t < 40 \\cr &  \\implies \\text{40th year} \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$\\begin{aligned} T_1 &= 40.820 \\cr T_2 &= 40.730 \\cr T_3 &= 40.670 \\cr \\text{Interval:} & \\quad 39 < t < 40 \\implies \\cr &  \\text{40th year} \\end{aligned}",
                                "feedback": "In Part (a)(ii), you probably made a minor rounding slip when calculating the cube root of $68,020.5$. Carrying the rounded value $T_1 \\approx 40.820$ instead of $40.821$ caused your subsequent iterations to drift. Use full calculator accuracy."
                        },
                        {
                                "ans": "$\\begin{aligned} T_1 &= 40.821 \\cr T_2 &= 40.704 \\cr T_3 &= 40.627 \\cr \\text{Interval:} & \\quad 38 < t < 39 \\implies \\cr &  \\text{39th year} \\end{aligned}",
                                "feedback": "In Part (b), check your interval analysis. While $t = 39$ is your target value, evaluating both models shows that they do not cross until $t$ is between $39$ and $40$, which corresponds to the 40th year."
                        },
                        {
                                "ans": "$\\begin{aligned} T_1 &= 40.821 \\cr T_2 &= 40.704 \\cr T_3 &= 40.627 \\cr \\text{Interval:} & \\quad 40 < t < 41 \\implies \\cr & S \\text{41st year} \\end{aligned}",
                                "feedback": "In Part (b), check your arithmetic when evaluating both models at $t = 39$. Since $V \\approx 11.42$ and $C \\approx 4.82$, fleet value is still greater than maintenance costs, meaning they have not crossed yet."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Sanity Checking Your Boundaries",
                        "content": "When performing interval analysis, always write out the decimal values of both models at the boundary endpoints. Showing a clear sign change in your difference function is probably the most reliable way to secure full reasoning marks."
                }
        },
        {
                "id": "004126",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods",
                        "Proof"
                ],
                "img": false,
                "question": "Let $p(x) = 24x^3 - 22x^2 - x + 3$.<br><br>(a) Prove that $(3x+1)$ is a factor of $p(x)$.<br><br>(b) Factorise $p(x)$ completely.<br><br>(c) Prove that there are no real solutions to the equation:\\begin{aligned} & \\dfrac{24\\sec^2 x + 3\\cos x}{22}\\cr & \\quad \\quad = \\sec x + \\dfrac{1}{22}\\end{aligned}",
                "steps": [
                        "For Part (a), apply the Factor Theorem. If $(3x+1)$ is a factor of $p(x)$, then $p\\left(-\\dfrac{1}{3}\\right) = 0$. Evaluate the polynomial at $$x = -\\dfrac{1}{3}$$",
                        "\\begin{aligned}p\\left(-\\dfrac{1}{3}\\right) &= 24\\left(-\\dfrac{1}{3}\\right)^3 - 22\\left(-\\dfrac{1}{3}\\right)^2\\cr & \\quad - \\left(-\\dfrac{1}{3}\\right) + 3\\end{aligned}",
                        "\\begin{aligned}p\\left(-\\dfrac{1}{3}\\right) &= 24\\left(-\\dfrac{1}{27}\\right) - 22\\left(\\dfrac{1}{9}\\right) \\cr & \\quad + \\dfrac{1}{3} + 3 \\cr &= -\\dfrac{8}{9} - \\dfrac{22}{9} + \\dfrac{3}{9} + \\dfrac{27}{9} \\cr &= \\dfrac{0}{9} \\cr&= 0\\end{aligned}",
                        "Since $p\\left(-\\dfrac{1}{3}\\right) = 0$, by the Factor Theorem, $(3x+1)$ is indeed a factor of $p(x)$.",
                        "For Part (b), perform polynomial division to divide $$24x^3 - 22x^2 - x + 3$$ by $$(3x+1)$$<br> \\begin{aligned} & \\dfrac{24x^3 - 22x^2 - x + 3}{3x+1} \\cr & \\quad \\quad \\quad= 8x^2 - 10x + 3\\end{aligned}",
                        "Factorise the quadratic quotient completely: $$8x^2 - 10x + 3 = (2x-1)(4x-3)$$",
                        "Combine the linear factors to write the complete factorisation of $p(x)$: $$p(x) = (3x+1)(2x-1)(4x-3)$$",
                        "For Part (c), multiply both sides of the equation by $22$ to clear the denominators: $$24\\sec^2 x + 3\\cos x = 22\\sec x + 1$$",
                        "Substitute $y = \\sec x$ into the equation, noting that $\\cos x = \\dfrac{1}{y}$: $$24y^2 + \\dfrac{3}{y} = 22y + 1$$",
                        "Multiply both sides by $y$ to clear the fraction and rearrange to form a cubic equation: \\begin{aligned}24y^3 &+ 3 = 22y^2 + y \\cr 24y^3 &- 22y^2 - y + 3 = 0\\end{aligned}",
                        "Notice that this is exactly the cubic equation $p(y) = 0$. From Part (b), the three roots of this equation are: \\begin{aligned}y &= -\\dfrac{1}{3},\\quad \\cr y &= \\dfrac{1}{2},\\quad  \\cr y &= \\dfrac{3}{4}\\end{aligned}",
                        "Since $y = \\sec x$, we must have $\\sec x = -\\dfrac{1}{3}$, $\\sec x = \\dfrac{1}{2}$, or $\\sec x = \\dfrac{3}{4}$.",
                        "Recall that the range of the secant function is strictly restricted to $|\\sec x| \\ge 1$. Since all three roots have absolute values strictly less than $1$ ($|-\\frac{1}{3}| < 1$, $|\\frac{1}{2}| < 1$, and $|\\frac{3}{4}| < 1$), there are no real values of $x$ that satisfy these equations.",
                        "Final Answer: <br>(b) $$p(x) = (3x+1)(2x-1)(4x-3)$$(c) $$|\\sec x| \\ge 1 $$ $$\\text{No real solutions}$$"
                ],
                "pi_options": [
                        {
                                "ans": "(b) $$p(x) = (3x+1)(2x-1)(4x-3)$$(c) $$x = -\\dfrac{1}{3}$$",
                                "feedback": "In Part (c), you probably solved for the variable $y = \\sec x$ but forgot that we are solving for $x$. Since $\\sec x = -1/3$ has no real solutions (as $|-1/3| < 1$), $x = -1/3$ is not a valid solution for the trigonometric equation."
                        },
                        {
                                "ans": "(b) $$p(x) = (3x+1)(2x+1)(4x-3)$$(c)$$ \\text{No real solutions}$$",
                                "feedback": "Check your signs in Part (b). Factoring the quadratic quotient $8x^2 - 10x + 3$ yields $(2x-1)(4x-3)$. Having a factor of $(2x+1)$ is incorrect."
                        },
                        {
                                "ans": "(b) $$p(x) = 3(3x+1)(2x-1)(4x-3)$$(c)$$ \\text{No real solutions}$$",
                                "feedback": "In Part (b), you probably introduced an extra factor of $3$ when factoring the quadratic. Since $(3x+1)(2x-1)(4x-3)$ expands to exactly $24x^3 - 22x^2 - x + 3$, no additional scalar multiplier is needed."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Synthetic Division of Fractional Roots",
                        "content": "When using synthetic division with a fractional root like $-\\frac{1}{3}$, the resulting quotient coefficients must be divided by the denominator $3$ to find the true quotient polynomial. Forgetting this step is probably the most common way students introduce incorrect constant factors into their final factorisations."
                }
        },
        {
                "id": "004127",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods",
                        "Proof"
                ],
                "img": false,
                "question": "Let $q(x) = 6x^2 - 5x + 1$.<br><br>(a) Prove that $(2x-1)$ is a factor of $q(x)$.<br><br>(b) Factorise $q(x)$ completely.<br><br>(c) Prove that there are no real solutions to the equation:$$6\\csc x + \\sin x = 5$$",
                "steps": [
                        "For Part (a), apply the Factor Theorem. If $(2x-1)$ is a factor of $q(x)$, then $q\\left(\\dfrac{1}{2}\\right) = 0$. Evaluate the polynomial at $$x = \\dfrac{1}{2}$$",
                        "\\begin{aligned}q\\left(\\dfrac{1}{2}\\right) &= 6\\left(\\dfrac{1}{2}\\right)^2 \\cr & \\quad - 5\\left(\\dfrac{1}{2}\\right) + 1\\end{aligned}",
                        "\\begin{aligned}q\\left(\\dfrac{1}{2}\\right) &= 6\\left(\\dfrac{1}{4}\\right) - \\dfrac{5}{2} + 1 \\cr &= \\dfrac{3}{2} - \\dfrac{5}{2} + 1 \\cr &= -1 + 1 \\cr &= 0\\end{aligned}",
                        "Since $q\\left(\\dfrac{1}{2}\\right) = 0$, by the Factor Theorem, $(2x-1)$ is indeed a factor of $q(x)$.",
                        "For Part (b), perform polynomial division to divide $$6x^2 - 5x + 1$$ by $$(2x-1)$$<br> \\begin{aligned} & \\dfrac{6x^2 - 5x + 1}{2x-1} \\cr & \\quad \\quad \\quad= 3x - 1\\end{aligned}",
                        "Combine the linear factors to write the complete factorisation of $q(x)$: $$q(x) = (2x-1)(3x-1)$$",
                        "For Part (c), let $y = \\sin x$, noting that $\\csc x = \\dfrac{1}{y}$ (where $y \\ne 0$): $$6\\left(\\dfrac{1}{y}\\right) + y = 5$$",
                        "Multiply both sides by $y$ to clear the fraction and rearrange to form a quadratic equation: \\begin{aligned}6 + y^2 &= 5y \\cr y^2 - 5y + 6 &= 0\\end{aligned}",
                        "Factorise the quadratic equation: \\begin{aligned}(y-2)(y-3) &= 0 \\cr y &= 2 \\quad \\text{or} \\quad y = 3\\end{aligned}",
                        "Since $y = \\sin x$, we must have $\\sin x = 2$ or $\\sin x = 3$.",
                        "Recall that the range of the sine function is strictly restricted to $-1 \\le \\sin x \\le 1$. Since both roots are strictly greater than $1$ ($2 > 1$ and $3 > 1$), there are no real values of $x$ that satisfy these equations.",
                        "Final Answer: <br>(b) $$q(x) = (2x-1)(3x-1)$$(c) $$-1 \\le \\sin x \\le 1$$ $$\\text{No real solutions}$$"
                ],
                "pi_options": [
                        {
                                "ans": "(b) $$q(x) = (2x-1)(3x-1)$$(c) $$x = 2 \\text{ or } x = 3$$",
                                "feedback": "In Part (c), you have stated the roots of the quadratic in $y$. However, the original equation is in terms of $\\sin x$. Since $\\sin x = 2$ has no real solutions, $x=2$ is not a valid solution."
                        },
                        {
                                "ans": "(b) $$q(x) = (2x-1)(3x+1)$$(c) $$\\text{No real solutions}$$",
                                "feedback": "Check your signs in Part (b). Expanding $(2x-1)(3x+1)$ yields $6x^2 - x - 1$, which does not match our quadratic $q(x) = 6x^2 - 5x + 1$."
                        },
                        {
                                "ans": "(b) $$q(x) = (2x+1)(3x-1)$$(c) $$\\text{No real solutions}$$",
                                "feedback": "Check your factor signs in Part (b). Since we proved $(2x-1)$ is a factor in Part (a), having a factor of $(2x+1)$ is mathematically incorrect."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Cosecant Boundary Conditions",
                        "content": "To prove that a cosecant equation has no real solutions, always state the standard range of the cosecant function clearly on your page: $|\\csc x| \\ge 1$. Since any roots with absolute values strictly less than 1 lie outside this range, this is probably the most concise way to secure your final reasoning marks."
                }
        },
        {
                "id": "004128",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods",
                        "Proof"
                ],
                "img": false,
                "question": "Let $p(x) = 2x^3 - 5x^2 - 9x + 18$.<br><br>(a) Prove that $(x+2)$ is a factor of $p(x)$.<br><br>(b) Factorise $p(x)$ completely.<br><br>(c) Prove that there are no real solutions to the equation:\\begin{aligned}2\\sin^2 x &+ 18\\csc x \\cr & \\quad = 5\\sin x + 9\\end{aligned}",
                "steps": [
                        "For Part (a), apply the Factor Theorem. If $(x+2)$ is a factor of $p(x)$, then $p(-2) = 0$. Evaluate the polynomial at $$x = -2$$",
                        "\\begin{aligned}p(-2) &= 2(-2)^3 - 5(-2)^2 \\cr & \\quad - 9(-2) + 18\\end{aligned}",
                        "\\begin{aligned}p(-2) &= 2(-8) - 5(4) + 18 + 18 \\cr &= -16 - 20 + 36 \\cr &= 0\\end{aligned}",
                        "Since $p(-2) = 0$, by the Factor Theorem, $(x+2)$ is indeed a factor of $p(x)$.",
                        "For Part (b), perform polynomial division to divide $$2x^3 - 5x^2 - 9x + 18$$ by $$(x+2)$$<br> \\begin{aligned} & \\dfrac{2x^3 - 5x^2 - 9x + 18}{x+2} \\cr & \\quad \\quad \\quad= 2x^2 - 9x + 9\\end{aligned}",
                        "Factorise the quadratic quotient completely: $$2x^2 - 9x + 9 = (x-3)(2x-3)$$",
                        "Combine the linear factors to write the complete factorisation of $p(x)$: $$p(x) = (x+2)(x-3)(2x-3)$$",
                        "For Part (c), let $y = \\sin x$, noting that $\\csc x = \\dfrac{1}{y}$ (where $y \\ne 0$): $$2y^2 + 18\\left(\\dfrac{1}{y}\\right) = 5y + 9$$",
                        "Multiply both sides by $y$ to clear the fraction and rearrange to form a cubic equation: \\begin{aligned}2y^3 + 18 &= 5y^2 + 9y \\cr 2y^3 - 5y^2 - 9y + 18 &= 0\\end{aligned}",
                        "Notice that this is exactly the cubic equation $p(y) = 0$. From Part (b), the three roots of this equation are: \\begin{aligned}y &= -2,\\quad \\cr y &= 3,\\quad  \\cr y &= \\dfrac{3}{2}\\end{aligned}",
                        "Since $y = \\sin x$, we must have $\\sin x = -2$, $\\sin x = 3$, or $\\sin x = \\dfrac{3}{2}$.",
                        "Recall that the range of the sine function is strictly restricted to $-1 \\le \\sin x \\le 1$. Since all three roots have absolute values strictly greater than $1$ ($|-2| > 1$, $|3| > 1$, and $|\\frac{3}{2}| > 1$), there are no real values of $x$ that satisfy these equations.",
                        "Final Answer: <br>(b) $$p(x) = (x+2)(x-3)(2x-3)$$(c) $$-1 \\le \\sin x \\le 1$$ $$\\text{No real solutions}$$"
                ],
                "pi_options": [
                        {
                                "ans": "(b) $$p(x) = (x+2)(x-3)(2x-3)$$(c) $$x = 3$$",
                                "feedback": "In Part (c), you have stated the roots of the cubic in $y = \\sin x$. However, the original equation is in terms of $x$. Since $\\sin x = 3$ has no real solutions, $x=3$ is not a valid solution."
                        },
                        {
                                "ans": "(b) $$p(x) = (x+2)(x+3)(2x-3)$$(c) $$\\text{No real solutions}$$",
                                "feedback": "Check your signs in Part (b). Factoring the quadratic quotient $2x^2 - 9x + 9$ yields $(x-3)(2x-3)$. Having a factor of $(x+3)$ is incorrect."
                        },
                        {
                                "ans": "(b) $$p(x) = (x-2)(x-3)(2x-3)$$(c) $$\\text{No real solutions}$$",
                                "feedback": "Check your factor signs in Part (b). Since we proved $(x+2)$ is a factor in Part (a), having a factor of $(x-2)$ is mathematically incorrect."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Sine and Cosecant Inversions",
                        "content": "In this question, we substitute $y = \\sin x$ into a cosecant equation, which leads to a cubic in $y$. Since the range of the sine function is $-1 \\le \\sin x \\le 1$, any roots outside this interval (such as $y = -2, 1.5, 3$) automatically yield no real solutions for $x$. This is an elegant way of using coordinate range boundaries to solve complex trigonometric proofs."
                }
        },
        {
                "id": "004129",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods",
                        "Proof"
                ],
                "img": false,
                "question": "Let $p(x) = 2x^3 - 9x^2 - 2x + 24$.<br><br>(a) Prove that $(2x+3)$ is a factor of $p(x)$.<br><br>(b) Factorise $p(x)$ completely.<br><br>(c) Prove that there are no real solutions to the equation:\\begin{aligned}2\\cos^2 x &+ 24\\sec x \\cr & \\quad = 9\\cos x + 2\\end{aligned}",
                "steps": [
                        "For Part (a), apply the Factor Theorem. If $(2x+3)$ is a factor of $p(x)$, then $p\\left(-\\dfrac{3}{2}\\right) = 0$. Evaluate the polynomial at $$x = -\\dfrac{3}{2}$$",
                        "\\begin{aligned}p\\left(-\\dfrac{3}{2}\\right) &= 2\\left(-\\dfrac{3}{2}\\right)^3 - 9\\left(-\\dfrac{3}{2}\\right)^2 \\cr & \\quad - 2\\left(-\\dfrac{3}{2}\\right) + 24\\end{aligned}",
                        "\\begin{aligned}p\\left(-\\dfrac{3}{2}\\right) &= 2\\left(-\\dfrac{27}{8}\\right) - 9\\left(\\dfrac{9}{4}\\right) \\cr & \\quad + 3 + 24 \\cr &= -\\dfrac{27}{4} - \\dfrac{81}{4} + 27 \\cr &= -\\dfrac{108}{4} + 27 \\cr &= -27 + 27 \\cr &= 0\\end{aligned}",
                        "Since $p\\left(-\\dfrac{3}{2}\\right) = 0$, by the Factor Theorem, $(2x+3)$ is indeed a factor of $p(x)$.",
                        "For Part (b), perform polynomial division to divide $$2x^3 - 9x^2 - 2x + 24$$ by $$(2x+3)$$<br> \\begin{aligned} & \\dfrac{2x^3 - 9x^2 - 2x + 24}{2x+3} \\cr & \\quad \\quad \\quad= x^2 - 6x + 8\\end{aligned}",
                        "Factorise the quadratic quotient completely: $$x^2 - 6x + 8 = (x-2)(x-4)$$",
                        "Combine the linear factors to write the complete factorisation of $p(x)$: $$p(x) = (2x+3)(x-2)(x-4)$$",
                        "For Part (c), let $y = \\cos x$, noting that $\\sec x = \\dfrac{1}{y}$ (where $y \\ne 0$): $$2y^2 + 24\\left(\\dfrac{1}{y}\\right) = 9y + 2$$",
                        "Multiply both sides by $y$ to clear the fraction and rearrange to form a cubic equation: \\begin{aligned}2y^3 + 24 &= 9y^2 + 2y \\cr 2y^3 - 9y^2 - 2y + 24 &= 0\\end{aligned}",
                        "Notice that this is exactly the cubic equation $p(y) = 0$. From Part (b), the three roots of this equation are: \\begin{aligned}y &= -\\dfrac{3}{2},\\quad \\cr y &= 2,\\quad  \\cr y &= 4\\end{aligned}",
                        "Since $y = \\cos x$, we must have $\\cos x = -\\dfrac{3}{2}$, $\\cos x = 2$, or $\\cos x = 4$.",
                        "Recall that the range of the cosine function is strictly restricted to $-1 \\le \\cos x \\le 1$. Since all three roots have absolute values strictly greater than $1$ ($|-\\frac{3}{2}| > 1$, $|2| > 1$, and $|4| > 1$), there are no real values of $x$ that satisfy these equations.",
                        "Final Answer: <br>(b) $$p(x) = (2x+3)(x-2)(x-4)$$(c) $$-1 \\le \\cos x \\le 1$$ $$\\text{No real solutions}$$"
                ],
                "pi_options": [
                        {
                                "ans": "(b) $$p(x) = 2(2x+3)(x-2)(x-4)$$(c) $$\\text{No real solutions}$$",
                                "feedback": "In Part (b), you probably made a division slip when factoring. Note that $(2x+3)(x-2)(x-4)$ expands directly to our cubic $2x^3 - 9x^2 - 2x + 24$, so no additional scalar multiplier of $2$ is needed."
                        },
                        {
                                "ans": "(b) $$p(x) = (2x+3)(x-2)(x-4)$$(c) $$x = 2 \\text{ or } x = 4$$",
                                "feedback": "In Part (c), you have stated the roots of the cubic in $y = \\cos x$. However, the original equation is in terms of $x$. Since $\\cos x = 2$ has no real solutions, $x=2$ is not a valid solution."
                        },
                        {
                                "ans": "(b) $$p(x) = (2x+3)(x+2)(x-4)$$(c) $$\\text{No real solutions}$$",
                                "feedback": "Check your signs in Part (b). Factoring the quadratic quotient $x^2 - 6x + 8$ yields $(x-2)(x-4)$. Having a factor of $(x+2)$ is incorrect."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Linear Divisor Division Rules",
                        "content": "When dividing a polynomial by $(2x+3)$ using synthetic division with root $-1.5$, your raw coefficients will be $(2, -12, 16)$, which represents $2x^2 - 12x + 16$. You must divide these coefficients by the leading coefficient $2$ to find the true quotient $x^2 - 6x + 8$. Forgetting this division step is a classic error that leads to an extra factor of $2$ in your final product."
                }
        },
        {
                "id": "004130",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods",
                        "Proof"
                ],
                "img": false,
                "question": "Let $q(x) = 12x^2 - 8x + 1$.<br><br>(a) Prove that $(2x-1)$ is a factor of $q(x)$.<br><br>(b) Factorise $q(x)$ completely.<br><br>(c) Prove that there are no real solutions to the equation:$$12\\sec x + \\cos x = 8$$",
                "steps": [
                        "For Part (a), apply the Factor Theorem. If $(2x-1)$ is a factor of $q(x)$, then $q\\left(\\dfrac{1}{2}\\right) = 0$. Evaluate the polynomial at $$x = \\dfrac{1}{2}$$",
                        "\\begin{aligned}q\\left(\\dfrac{1}{2}\\right) &= 12\\left(\\dfrac{1}{2}\\right)^2 \\cr & \\quad - 8\\left(\\dfrac{1}{2}\\right) + 1\\end{aligned}",
                        "\\begin{aligned}q\\left(\\dfrac{1}{2}\\right) &= 12\\left(\\dfrac{1}{4}\\right) - 4 + 1 \\cr &= 3 - 4 + 1 \\cr &= 0\\end{aligned}",
                        "Since $q\\left(\\dfrac{1}{2}\\right) = 0$, by the Factor Theorem, $(2x-1)$ is indeed a factor of $q(x)$.",
                        "For Part (b), perform polynomial division to divide $$12x^2 - 8x + 1$$ by $$(2x-1)$$<br> \\begin{aligned} & \\dfrac{12x^2 - 8x + 1}{2x-1} \\cr & \\quad \\quad \\quad= 6x - 1\\end{aligned}",
                        "Combine the linear factors to write the complete factorisation of $q(x)$: $$q(x) = (2x-1)(6x-1)$$",
                        "For Part (c), let $y = \\cos x$, noting that $\\sec x = \\dfrac{1}{y}$ (where $y \\ne 0$): $$12\\left(\\dfrac{1}{y}\\right) + y = 8$$",
                        "Multiply both sides by $y$ to clear the fraction and rearrange to form a quadratic equation: \\begin{aligned}12 + y^2 &= 8y \\cr y^2 - 8y + 12 &= 0\\end{aligned}",
                        "Factorise the quadratic equation: \\begin{aligned}(y-2)(y-6) &= 0 \\cr y &= 2 \\quad \\text{or} \\quad y = 6\\end{aligned}",
                        "Since $y = \\cos x$, we must have $\\cos x = 2$ or $\\cos x = 6$.",
                        "Recall that the range of the cosine function is strictly restricted to $-1 \\le \\cos x \\le 1$. Since both roots are strictly greater than $1$ ($2 > 1$ and $6 > 1$), there are no real values of $x$ that satisfy these equations.",
                        "Final Answer: <br>(b) $$q(x) = (2x-1)(6x-1)$$(c) $$-1 \\le \\cos x \\le 1$$ $$\\text{No real solutions}$$"
                ],
                "pi_options": [
                        {
                                "ans": "(b) $$q(x) = (2x-1)(6x-1)$$(c) $$x = 2 \\text{ or } x = 6$$",
                                "feedback": "In Part (c), you have stated the roots of the quadratic in $y = \\cos x$. However, the original equation is in terms of $x$. Since $\\cos x = 2$ has no real solutions, $x=2$ is not a valid solution."
                        },
                        {
                                "ans": "(b) $$q(x) = (2x-1)(6x+1)$$(c) $$\\text{No real solutions}$$",
                                "feedback": "Check your signs in Part (b). Expanding $(2x-1)(6x+1)$ yields $12x^2 - 4x - 1$, which does not match our quadratic $q(x) = 12x^2 - 8x + 1$."
                        },
                        {
                                "ans": "(b) $$q(x) = (2x+1)(6x-1)$$(c) $$\\text{No real solutions}$$",
                                "feedback": "Check your factor signs in Part (b). Since we proved $(2x-1)$ is a factor in Part (a), having a factor of $(2x+1)$ is mathematically incorrect."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Secant Boundary Ranges",
                        "content": "To show that $\\cos x = y$ has no real solutions when $y > 1$, always refer directly to the bounded range $-1 \\le \\cos x \\le 1$. Stating this boundary is probably the quickest and safest way to complete your trigonometric proofs under exam conditions."
                }
        },
        {
                "id": "004131",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Coordinate Geometry",
                        "Differentiation",
                        "Modelling and Applications"
                ],
                "img": "images/Pure_SVGs/004131.svg",
                "question": "A company is designing a logo. The logo is a circle of radius $6\\text{ inches}$ with an inscribed rectangle. The rectangle must be as large as possible. The company models the logo on an $x$-$y$ coordinate plane with the circle centred at the origin.<br><br>Use calculus to find the maximum area of the rectangle, in square inches. Fully justify your answer.",
                "steps": [
                        "Let the circle be centred at the origin $(0,0)$. Since the radius is $6$, the equation of the circle is:<br>$$x^2 + y^2 = 36$$",
                        "Let $P(x,y)$ be a vertex of the rectangle in the first quadrant, so that $x > 0$ and $y > 0$. By symmetry, the total width of the inscribed rectangle is $2x$ and its total height is $2y$.<br><br>The area, $A$, of the rectangle is given by:<br>\\begin{aligned}A &= 2x \\times 2y \\cr&= 4xy\\end{aligned}",
                        "Using the equation of the circle, we can express $y$ in terms of $x$ as:<br>$$y = \\sqrt{36 - x^2}$$<br>Substituting this into our area formula gives:<br>$$A = 4x\\sqrt{36 - x^2}$$",
                        "To find the stationary points, we differentiate $A$ with respect to $x$ using the product rule and chain rule:\\begin{aligned}\\dfrac{\\text{d}A}{\\text{d}x} & = 4\\sqrt{36 - x^2}\\cr & \\quad + 4x \\cdot \\left(\\dfrac{-2x}{2\\sqrt{36 - x^2}}\\right)\\end{aligned}<br>$$\\dfrac{\\text{d}A}{\\text{d}x} = 4\\sqrt{36 - x^2} - \\dfrac{4x^2}{\\sqrt{36 - x^2}}$$<br>Combine these over a common denominator:<br>\\begin{aligned}\\dfrac{\\text{d}A}{\\text{d}x} &= \\dfrac{4(36 - x^2) - 4x^2}{\\sqrt{36 - x^2}} \\cr&= \\dfrac{144 - 8x^2}{\\sqrt{36 - x^2}}\\end{aligned}",
                        "Set $\\dfrac{\\text{d}A}{\\text{d}x} = 0$ to find the stationary points:<br>\\begin{aligned}\\dfrac{144 - 8x^2}{\\sqrt{36 - x^2}} &= 0 \\cr144 - 8x^2 &= 0 \\cr8x^2 &= 144 \\cr x^2 &= 18\\end{aligned}<br>Since $x > 0$, we choose the positive square root:<br>\\begin{aligned}x &= \\sqrt{18} \\cr&= 3\\sqrt{2}\\end{aligned}",
                        "To fully justify that this stationary point is a maximum, we can examine the sign of the first derivative $\\dfrac{\\text{d}A}{\\text{d}x}$ around $x = 3\\sqrt{2}$:<br><br>For $x < 3\\sqrt{2}$, the numerator $(144 - 8x^2)$ is positive, so $\\dfrac{\\text{d}A}{\\text{d}x} > 0$.<br>For $x > 3\\sqrt{2}$, the numerator $(144 - 8x^2)$ is negative, so $\\dfrac{\\text{d}A}{\\text{d}x} < 0$.<br><br>Since the gradient changes from positive to negative, $x = 3\\sqrt{2}$ is a local maximum.",
                        "Calculate the maximum area by substituting $x = 3\\sqrt{2}$ back into the area formula:<br>\\begin{aligned}A &= 4(3\\sqrt{2})\\sqrt{36 - (3\\sqrt{2})^2} \\cr&= 12\\sqrt{2}\\sqrt{18} \\cr&= 12\\sqrt{2}(3\\sqrt{2}) \\cr&= 72\\end{aligned}",
                "Final Answer: $$72\\text{ in}^2$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$18\\text{ in}^2$$",
                                "feedback": "You may have defined the area as $xy$ instead of $4xy$. Remember that the rectangle spans across all four quadrants, so its width is $2x$ and its height is $2y$."
                        },
                        {
                                "ans": "$$36\\text{ in}^2$$",
                                "feedback": "This is probably because you assumed the rectangle has dimensions $x$ by $y$ and used a different radius, or incorrectly simplified the area. Ensure your dimensions are $2x$ by $2y$."
                        },
                        {
                                "ans": "$$144\\text{ in}^2$$",
                                "feedback": "You may have doubled the correct dimensions or made an arithmetic error in your final substitution. Carefully verify the area formula $A = 4xy$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Differentiating the Square",
                        "content": "When maximising an area expression like $A = 4x\\sqrt{36 - x^2}$, a neat shortcut is to maximise its square instead, let us call it $S = A^2 = 16x^2(36 - x^2) = 576x^2 - 16x^4$. This is a simple polynomial that is much easier to differentiate and yields the exact same critical point, saving valuable time in an exam."
                }
        },
        {
                "id": "004132",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Coordinate Geometry",
                        "Differentiation",
                        "Modelling and Applications"
                ],
                "img": "images/Pure_SVGs/004132.svg",
                "question": "A window designer is creating a rectangular window pane inscribed inside a semicircular archway of radius $4\\text{ m}$. The base of the window lies along the diameter of the semicircle, and the upper two vertices touch the curved boundary.<br><br>The archway is modelled on a coordinate grid as the upper half of the circle $x^2 + y^2 = 16$ for $y \\ge 0$, with the centre of the flat base at the origin.<br><br>Use calculus to find the maximum area of the rectangular window pane. Fully justify your answer.",
                "steps": [
                        "Let the top-right vertex of the rectangle touching the semicircle be $P(x,y)$ where $x > 0$ and $y > 0$. The semicircle has equation:<br>$$x^2 + y^2 = 16 \\quad \\text{for} \\quad y \\ge 0$$",
                        "Since the base of the rectangle lies along the horizontal diameter from $-x$ to $x$, the total width of the window is $2x$. The height of the window is simply the $y$-coordinate of the curve.<br><br>The area, $A$, of the rectangular pane is given by:<br>\\begin{aligned}A &= 2x \\times y \\cr &= 2xy\\end{aligned}",
                        "Using the equation of the semicircle, express $y$ in terms of $x$ as:<br>$$y = \\sqrt{16 - x^2}$$<br>Substituting this into our area formula gives:<br>$$A = 2x\\sqrt{16 - x^2}$$",
                        "To find the stationary points, we differentiate $A$ with respect to $x$ using the product rule and chain rule:<br>\\begin{aligned}\\dfrac{\\text{d}A}{\\text{d}x} &= 2\\sqrt{16 - x^2} \\cr & \\quad + 2x \\cdot \\left(\\dfrac{-2x}{2\\sqrt{16 - x^2}}\\right)\\end{aligned}<br>$$\\dfrac{\\text{d}A}{\\text{d}x} = 2\\sqrt{16 - x^2} - \\dfrac{2x^2}{\\sqrt{16 - x^2}}$$<br>Combine these over a common denominator:<br>\\begin{aligned}\\dfrac{\\text{d}A}{\\text{d}x} &= \\dfrac{2(16 - x^2) - 2x^2}{\\sqrt{16 - x^2}} \\cr &= \\dfrac{32 - 4x^2}{\\sqrt{16 - x^2}}\\end{aligned}",
                        "Set $\\dfrac{\\text{d}A}{\\text{d}x} = 0$ to find the stationary points:<br>\\begin{aligned}\\dfrac{32 - 4x^2}{\\sqrt{16 - x^2}} &= 0 \\cr 32 - 4x^2 &= 0 \\cr 4x^2 &= 32 \\cr x^2 &= 8\\end{aligned}<br>Since $x > 0$, we choose the positive square root:<br>\\begin{aligned}x &= \\sqrt{8} \\cr &= 2\\sqrt{2}\\end{aligned}",
                        "To justify that this stationary point is a maximum, we can examine the sign of the first derivative $\\dfrac{\\text{d}A}{\\text{d}x}$:<br><br>For $x < 2\\sqrt{2}$, the numerator $(32 - 4x^2)$ is positive, so $\\dfrac{\\text{d}A}{\\text{d}x} > 0$.<br>For $x > 2\\sqrt{2}$, the numerator $(32 - 4x^2)$ is negative, so $\\dfrac{\\text{d}A}{\\text{d}x} < 0$.<br><br>Since the gradient changes from positive to negative, $x = 2\\sqrt{2}$ represents a local maximum.",
                        "Calculate the maximum area by substituting $x = 2\\sqrt{2}$ back into the area equation:<br>\\begin{aligned}A &= 2(2\\sqrt{2})\\sqrt{16 - (2\\sqrt{2})^2} \\cr &= 4\\sqrt{2}\\sqrt{8} \\cr &= 4\\sqrt{2}(2\\sqrt{2}) \\cr &= 16\\end{aligned}<br>At this maximum, the dimensions of the rectangular pane are width $2x = 4\\sqrt{2}\\text{ m}$ and height $y = 2\\sqrt{2}\\text{ m}$.",
                        "Final Answer: $$16\\text{ m}^2$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$8\\text{ m}^2$$",
                                "feedback": "You may have defined the area as $xy$ instead of $2xy$. Note that because the base lies along the diameter and spans from $-x$ to $x$, its total width is $2x$."
                        },
                        {
                                "ans": "$$32\\text{ m}^2$$",
                                "feedback": "This occurs if you defined the area as $4xy$, which is the area formula for a rectangle inscribed in a full circle. Since the window is inscribed in a semicircle, its height only spans up from the $x$-axis, meaning the height is $y$, not $2y$."
                        },
                        {
                                "ans": "$$12\\text{ m}^2$$",
                                "feedback": "This is probably due to an arithmetic error during substitution or differentiation. Double-check that $x^2 = 8$ and carefully compute the product $2xy$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Symmetry and Boundaries",
                        "content": "Pay careful attention to whether a shape is inscribed inside a full circle or a semicircle. In a full circle, the rectangle spans all four quadrants, leading to dimensions of $2x$ by $2y$. In a semicircle with its base along the horizontal axis, the height of the rectangle is only $y$, not $2y$. Always sketch the coordinate setup to avoid this distinction trap."
                }
        },
        {
                "id": "004133",
                "board": "AQA",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Differentiation",
                        "Modelling and Applications",
                        "Polynomials"
                ],
                "img": "images/Pure_SVGs/004133.svg",
                "question": "A ventilation duct with a rectangular cross-section is to be installed under a parabolic archway. The archway is modelled by the curve $y = 12 - x^2$ for $y \\ge 0$, where $x$ and $y$ are measured in metres. The base of the duct lies along the $x$-axis, and the two upper vertices of the duct touch the parabola.<br><br>Use calculus to find the maximum possible cross-sectional area of the ventilation duct. Fully justify your answer.",
                "steps": [
                        "Let the width of the rectangular duct extend from $-x$ to $x$ along the horizontal axis, where $x > 0$. The total width of the duct is $2x$.<br><br>The height of the duct is given by the $y$-coordinate on the parabola: $y = 12 - x^2$.",
                        "The cross-sectional area, $A$, of the duct is the product of its width and height:<br>\\begin{aligned}A &= 2x(12 - x^2) \\cr &= 24x - 2x^3\\end{aligned}",
                        "To find the value of $x$ that maximises this area, we differentiate $A$ with respect to $x$:<br>$$\\dfrac{\\text{d}A}{\\text{d}x} = 24 - 6x^2$$",
                        "Set the derivative equal to zero to locate the stationary points:<br>\\begin{aligned}24 - 6x^2 &= 0 \\cr 6x^2 &= 24 \\cr x^2 &= 4\\end{aligned}<br>Since $x$ represents a physical half-width, $x > 0$. Therefore, we have $x = 2$.",
                        "To fully justify that this stationary point is a maximum, we find the second derivative:<br>$$\\dfrac{\\text{d}^2A}{\\text{d}x^2} = -12x$$<br><br>At $x = 2$, the second derivative is:<br>\\begin{aligned}\\dfrac{\\text{d}^2A}{\\text{d}x^2} &= -12(2) \\cr &= -24\\end{aligned}<br><br>Since $-24 < 0$, the point $x = 2$ is indeed a local maximum.",
                        "Finally, calculate the maximum area by substituting $x = 2$ back into the area equation:<br>\\begin{aligned}A &= 24(2) - 2(2^3) \\cr &= 48 - 16 \\cr &= 32\\end{aligned}",
                        "Final Answer: $$32\\text{ m}^2$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$16\\text{ m}^2$$",
                                "feedback": "You probably modelled the width as $x$ instead of $2x$. The base of the duct lies between $-x$ and $x$ on the coordinate axes, so its full width is $2x$."
                        },
                        {
                                "ans": "$$48\\text{ m}^2$$",
                                "feedback": "This value is probably due to an arithmetic slip when evaluating $24x - 2x^3$ at $x = 2$. Double-check that $2(2^3) = 16$."
                        },
                        {
                                "ans": "$$24\\text{ m}^2$$",
                                "feedback": "You might have calculated the height as $12 - 2^2 = 8$, but then incorrectly multiplied by a width of $3$ or made a slip. The maximum area occurs when $x=2$, giving width $4$ and height $8$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Sketching the Setup",
                        "content": "Even when a diagram is not provided, sketching the parabola $y = 12 - x^2$ and the inscribed rectangle on scrap paper will save you from the classic trap of using $x$ as the width instead of $2x$. Always identify your variables and write down their physical domains."
                }
        },
        {
                "id": "004134",
                "board": "AQA",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Differentiation",
                        "Modelling and Applications",
                        "Polynomials"
                ],
                "img": "images/Pure_SVGs/004134.svg",
                "question": "An open-topped box is to be constructed from a square sheet of cardboard with a side length of $12\\text{ cm}$. Equal square corners of side length $x\\text{ cm}$ are cut out from each corner, and the remaining sides are folded upwards to form the box.<br><br>Use calculus to find the value of $x$ that maximises the volume of the box, and calculate this maximum volume. Fully justify your answer.",
                "steps": [
                        "When we cut a square of side $x$ from each of the four corners of a $12\\text{ cm}$ square sheet, the dimensions of the base of the box become $(12 - 2x)$ by $(12 - 2x)$.<br><br>The height of the box is $x$.",
                        "The volume, $V$, of the box is given by:<br>\\begin{aligned}V &= x(12 - 2x)^2 \\cr &= x(144 - 48x + 4x^2) \\cr &= 4x^3 - 48x^2 + 144x\\end{aligned}<br><br>Note that since $x > 0$ and $12 - 2x > 0$, the domain of $x$ is $0 < x < 6$.",
                        "To find the value of $x$ that maximises the volume, we differentiate $V$ with respect to $x$:<br>$$\\dfrac{\\text{d}V}{\\text{d}x} = 12x^2 - 96x + 144$$",
                        "Set the derivative to zero:<br>\\begin{aligned}12x^2 - 96x + 144 &= 0 \\cr 12(x^2 - 8x + 12) &= 0\\end{aligned}<br>Factoring the quadratic equation gives:<br>$$12(x - 2)(x - 6) = 0$$",
                        "This yields two solutions: $x = 2$ and $x = 6$.<br><br>Since $x = 6$ is outside our domain $0 < x < 6$ (and would leave zero base area), the only valid stationary point is $x = 2$.",
                        "To justify that $x = 2$ is a maximum, we use the second derivative test:<br>$$\\dfrac{\\text{d}^2V}{\\text{d}x^2} = 24x - 96$$<br><br>At $x = 2$:<br>\\begin{aligned}\\dfrac{\\text{d}^2V}{\\text{d}x^2} &= 24(2) - 96 \\cr &= -48\\end{aligned}<br><br>Since the second derivative is negative ($-48 < 0$), $x = 2$ is a local maximum.",
                        "Substitute $x = 2$ back into the volume formula to find the maximum volume:<br>\\begin{aligned}V &= 4(2)^3 - 48(2)^2 + 144(2) \\cr &= 32 - 192 + 288 \\cr &= 128\\end{aligned}",
                        "Final Answer: \\begin{aligned}x &= 2\\text{ cm} \\cr V &= 128\\text{ cm}^3\\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$x = 4\\text{ cm}, V = 64\\text{ cm}^3$$",
                                "feedback": "You might have assumed the side of the base is $12-x$ instead of $12-2x$. Remember that cutting squares of side $x$ from both ends reduces the length by $2x$."
                        },
                        {
                                "ans": "$$x = 6\\text{ cm}, V = 0\\text{ cm}^3$$",
                                "feedback": "An $x$ value of $6$ is the upper boundary of the domain. This actually yields a minimum volume of zero because no cardboard is left for the base."
                        },
                        {
                                "ans": "$$x = 2\\text{ cm}, V = 72\\text{ cm}^3$$",
                                "feedback": "This is probably due to a minor calculation error in your final volume step. The dimensions at $x = 2$ are $8\\text{ cm}$ by $8\\text{ cm}$ for the base and $2\\text{ cm}$ for the height."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Boundary Conditions",
                        "content": "Always state the domain of your variable. Here, $x$ must lie in the interval $0 < x < 6$ because a fold cannot be of negative length and you cannot cut away more than half the sheet's width. This allows you to immediately dismiss the stationary point at $x = 6$."
                }
        },
       {
                "id": "004135",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": "images/Pure_SVGs/004135.svg",
                "question": "A circular medallion has a radius of $5\\text{ cm}$. A rectangle is inscribed inside the medallion. Let the angle between the diagonal of the rectangle and the horizontal coordinate axis be $\\theta$, where $0 < \\theta < \\dfrac{\\pi}{2}$ radians.<br><br>1. Show that the area, $A$, of the rectangle is given by $A = 50\\sin(2\\theta)$.<br>2. Use calculus to find the value of $\\theta$ that maximises the area of the rectangle, and state this maximum area. Fully justify your answer.",
                "steps": [
                        "By modelling the medallion as a circle centred at the origin with radius $5$, any point on the boundary in the first quadrant has coordinates $(5\\cos\\theta, 5\\sin\\theta)$.<br><br>The width of the inscribed rectangle is $2x = 10\\cos\\theta$, and the height is $2y = 10\\sin\\theta$.",
                        "The area, $A$, of the rectangle can be written as:<br>\\begin{aligned}A &= \\text{width} \\times \\text{height} \\cr &= (10\\cos\\theta)(10\\sin\\theta) \\cr &= 100\\sin\\theta\\cos\\theta\\end{aligned}",
                        "Using the double-angle identity $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$, we simplify the expression for $A$ to:<br>\\begin{aligned}A &= 50(2\\sin\\theta\\cos\\theta) \\cr &= 50\\sin(2\\theta)\\end{aligned}",
                        "To find the stationary points, we differentiate $A$ with respect to $\\theta$:<br>$$\\dfrac{\\text{d}A}{\\text{d}\\theta} = 100\\cos(2\\theta)$$",
                        "Set $\\dfrac{\\text{d}A}{\\text{d}\\theta} = 0$:<br>\\begin{aligned}100\\cos(2\\theta) &= 0 \\cr \\cos(2\\theta) &= 0\\end{aligned}<br><br>Given that $0 < \\theta < \\dfrac{\\pi}{2}$, we have $0 < 2\\theta < \\pi$. Within this range:<br>\\begin{aligned}2\\theta &= \\dfrac{\\pi}{2} \\cr \\theta &= \\dfrac{\\pi}{4}\\end{aligned}",
                        "To justify that this value of $\\theta$ yields a maximum, we find the second derivative of $A$:<br>$$\\dfrac{\\text{d}^2A}{\\text{d}\\theta^2} = -200\\sin(2\\theta)$$<br><br>Substituting $\\theta = \\dfrac{\\pi}{4}$ into the second derivative gives:<br>\\begin{aligned}\\dfrac{\\text{d}^2A}{\\text{d}\\theta^2} &= -200\\sin\\left(\\dfrac{\\pi}{2}\\right) \\cr &= -200(1) \\cr &= -200\\end{aligned}<br><br>Since the second derivative is negative ($-200 < 0$), $\\theta = \\dfrac{\\pi}{4}$ is indeed a maximum.",
                        "Substitute $\\theta = \\dfrac{\\pi}{4}$ back into the area equation to find the maximum area:<br>\\begin{aligned}A &= 50\\sin\\left(2 \\cdot \\dfrac{\\pi}{4}\\right) \\cr &= 50\\sin\\left(\\dfrac{\\pi}{2}\\right) \\cr &= 50\\end{aligned}",
                        "Final Answer: \\begin{aligned}\\theta &= \\dfrac{\\pi}{4} \\cr A &= 50\\text{ cm}^2\\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\theta = \\dfrac{\\pi}{4}, A = 100\\text{ cm}^2$$",
                                "feedback": "Check your double-angle conversion. Since $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$, the expression $100\\sin\\theta\\cos\\theta$ simplifies to $50\\sin(2\\theta)$, not $100\\sin(2\\theta)$."
                        },
                        {
                                "ans": "$$\\theta = \\dfrac{\\pi}{2}, A = 0\\text{ cm}^2$$",
                                "feedback": "An angle of $\\dfrac{\\pi}{2}$ yields a flat line with zero area. This is the minimum possible area, not the maximum."
                        },
                        {
                                "ans": "$$\\theta = \\dfrac{\\pi}{4}, A = 25\\text{ cm}^2$$",
                                "feedback": "This is probably because you calculated the area of only one quadrant. The entire inscribed rectangle spans across all four quadrants, meaning you need to multiply your single-quadrant area by $4$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Radian Mode Always",
                        "content": "When doing calculus with trigonometric functions, you must work in radians. If you use degrees, the derivative of $\\sin\\theta$ is not simply $\\cos\\theta$, but has a scale factor of $\\dfrac{\\pi}{180}$. Always verify your calculator is in radian mode before evaluating trigonometric values."
                }
        },
       {
                "id": "004136",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Trigonometry",
                "topic": "Trigonometric Identities",
                "subtopic": [
                        "Proof of Trig Identities"
                ],
                "img": "images/Pure_SVGs/004136.svg",
                "question": "Some students are trying to prove an identity for $\\cos(A+B)$. They start by drawing two right-angled triangles $ODE$ and $OEF$ as shown in the diagram below. Let angle $DOE = A$ and angle $EOF = B$. In triangle $OFR$, the horizontal line is $OD$, and $FR$ is perpendicular to $OD$ at $R$. The line $EP$ is perpendicular to $FR$ at $P$.<br><br>The students' incomplete proof continues:<br>Line 1: $\\cos(A+B) = \\dfrac{OR}{OF}$<br><br>Line 2: $= \\dfrac{OD - RD}{OF}$<br>Line 3: $= \\dfrac{OD - EP}{OF}$ since $RD = EP$<br>Line 4: $= \\dfrac{OD}{OF} - \\dfrac{EP}{OF}$<br>Line 4 (expanded): $= \\dfrac{OD}{OE} \\times \\dfrac{OE}{OF} - \\dfrac{EP}{EF} \\times \\dfrac{EF}{OF}$<br><br>1. Explain why $\\dfrac{EP}{EF} \\times \\dfrac{EF}{OF}$ in Line 4 leads to $\\sin A \\sin B$ in Line 5.<br><br>2. Complete Line 4 and Line 5 to prove the identity<br>\\begin{aligned} & \\cos(A+B) \\cr & \\quad = \\cos A \\cos B - \\sin A \\sin B\\end{aligned}<br><br>3. Explain why the argument used only proves the identity when $A$ and $B$ are acute angles.<br><br>4. Show how to prove the identity for $\\cos(A-B)$ by substituting $-B$ into the identity for $\\cos(A+B)$, stating any properties of trigonometric functions that you use.",
                "steps": [
                        "To show why $\\dfrac{EP}{EF} \\times \\dfrac{EF}{OF} = \\sin A \\sin B$, we first identify the angles in our coordinate setup:<br><br>Since $EP \\parallel OD$ (both are horizontal), the alternate angle $\\angle OEP = \\angle DOE = A$.<br><br>Since the triangle $OEF$ is right-angled at $E$, $\\angle OEF = 90^\\circ$. This gives:<br>\\begin{aligned}\\angle PEF &= 90^\\circ - \\angle OEP \\cr&= 90^\\circ - A\\end{aligned}<br><br>Inside the right-angled triangle $EPF$, the angles must sum to $180^\\circ$, meaning:<br>\\begin{aligned}\\angle EFP &= 90^\\circ - \\angle PEF \\cr&= 90^\\circ - (90^\\circ - A) \\cr&= A\\end{aligned}",
                        "Now we use our identified angle $A$ inside the right-angled triangle $EPF$:<br>\\begin{aligned}\\sin A &= \\dfrac{\\text{Opposite}}{\\text{Hypotenuse}} \\cr&= \\dfrac{EP}{EF}\\end{aligned}<br><br>Next, looking at the right-angled triangle $OEF$ (with right angle at $E$):<br>\\begin{aligned}\\sin B &= \\dfrac{\\text{Opposite}}{\\text{Hypotenuse}} \\cr&= \\dfrac{EF}{OF}\\end{aligned}<br><br>Multiplying these two ratios together gives:<br>$$\\dfrac{EP}{EF} \\times \\dfrac{EF}{OF} = \\sin A \\sin B$$",
                        "To complete the proof, we interpret the first term in the expanded expression of Line 4:<br>$$\\dfrac{OD}{OE} \\times \\dfrac{OE}{OF}$$<br><br>In the right-angled triangle $ODE$:<br>\\begin{aligned}\\cos A &= \\dfrac{\\text{Adjacent}}{\\text{Hypotenuse}} \\cr&= \\dfrac{OD}{OE}\\end{aligned}<br><br>In the right-angled triangle $OEF$:<br>\\begin{aligned}\\cos B &= \\dfrac{\\text{Adjacent}}{\\text{Hypotenuse}} \\cr&= \\dfrac{OE}{OF}\\end{aligned}",
                        "Substituting these trigonometric ratios back into the expanded expression of Line 4 completed in Line 5 yields:<br>\\begin{aligned} & \\cos(A+B) \\cr & \\quad = \\cos A \\cos B - \\sin A \\sin B\\end{aligned}",
                        "This geometric argument only proves the identity when $A$ and $B$ are acute because it relies on the physical lengths of sides inside right-angled triangles. In this geometric context, angles must satisfy $0^\\circ < A < 90^\\circ$, $0^\\circ < B < 90^\\circ$, and $A+B < 90^\\circ$. For obtuse or negative angles, these triangles cannot exist, and we must define trigonometric functions using coordinates on a unit circle.",
                        "To prove the identity for $\\cos(A-B)$, we substitute $-B$ into our newly proven identity:<br>\\begin{aligned} & \\cos(A + (-B)) \\cr & \\quad = \\cos A \\cos(-B) - \\sin A \\sin(-B)\\end{aligned}",
                        "Final Answer:<br>\\begin{aligned} & \\cos(A - B) \\cr & \\quad = \\cos A \\cos B + \\sin A \\sin B\\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "\\begin{aligned} & \\cos(A-B) \\cr & \\quad = \\cos A \\cos B - \\sin A \\sin B\\end{aligned}",
                                "feedback": "Remember that substituting $-B$ into $\\cos(A+B)$ changes the sign of the second term because $\\sin(-B) = -\\sin B$, which changes the minus sign in the formula to a plus sign."
                        },
                        {
                                "ans": "\\begin{aligned} & \\cos(A-B) \\cr & \\quad = \\sin A \\cos B - \\cos A \\sin B\\end{aligned}",
                                "feedback": "Be careful not to confuse the sine and cosine subtraction formulas. The cosine subtraction formula consists of products of like functions (cosine-cosine and sine-sine)."
                        },
                        {
                                "ans": "\\begin{aligned} & \\cos(A-B) \\cr & \\quad = -\\cos A \\cos B + \\sin A \\sin B\\end{aligned}",
                                "feedback": "Remember that cosine is an even function, which means $\\cos(-B) = \\cos B$. It does not change its sign to negative like sine does."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Tracking Triangles",
                        "content": "When explaining geometric proofs, never guess which triangles contain which ratios. It is highly common to mix up your hypotenuses. Always trace the triangle vertices carefully and identify which vertex contains the right angle before defining your sine and cosine ratios."
                }
        },
        {
                "id": "004137",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Trigonometry",
                "topic": "Trigonometric Identities",
                "subtopic": [
                        "Proof of Trig Identities",
                        
                ],
                "img": false,
                "question": "A student is trying to prove the identity for $\\tan(A+B)$ using the known identities for $\\sin(A+B)$ and $\\cos(A+B)$. The student's proof starts:<br>\\begin{aligned}\\tan(A+B) &= \\dfrac{\\sin(A+B)}{\\cos(A+B)} \\cr & \\quad = \\dfrac{\\sin A \\cos B + \\cos A \\sin B}{\\cos A \\cos B - \\sin A \\sin B}\\end{aligned}<br><br>To convert this expression into terms of $\\tan A$ and $\\tan B$, the student decides to divide both the numerator and the denominator by $\\cos A \\cos B$.<br><br>1. Show that this division leads to the identity:<br>$$\\tan(A+B) = \\dfrac{\\tan A + \\tan B}{1 - \\tan A \\tan B}$$<br>2. Explain why this identity is not valid if $\\cos A \\cos B = 0$ or if $\\tan A \\tan B = 1$. State the geometric meaning of these restrictions.<br><br>3. Given that $\\tan A = 2$ and $\\tan B = 3$, find the exact value of $\\tan(A+B)$ and deduce the value of the angle $(A+B)$ in degrees, where $A$ and $B$ are acute angles.",
                "steps": [
                        "Dividing each term in the numerator of the expression by $\\cos A \\cos B$ gives:<br>\\begin{aligned}\\dfrac{\\sin A \\cos B + \\cos A \\sin B}{\\cos A \\cos B} &= \\dfrac{\\sin A \\cos B}{\\cos A \\cos B} \\cr & \\quad + \\dfrac{\\cos A \\sin B}{\\cos A \\cos B} \\cr &= \\dfrac{\\sin A}{\\cos A} + \\dfrac{\\sin B}{\\cos B} \\cr &= \\tan A + \\tan B\\end{aligned}",
                        "Dividing each term in the denominator of the expression by $\\cos A \\cos B$ gives:<br>\\begin{aligned}\\dfrac{\\cos A \\cos B - \\sin A \\sin B}{\\cos A \\cos B} &= \\dfrac{\\cos A \\cos B}{\\cos A \\cos B} \\cr & \\quad - \\dfrac{\\sin A \\sin B}{\\cos A \\cos B} \\cr &= 1 - \\left(\\dfrac{\\sin A}{\\cos A}\\right)\\left(\\dfrac{\\sin B}{\\cos B}\\right) \\cr &= 1 - \\tan A \\tan B\\end{aligned}",
                        "Combining these two results into the original fraction yields the required identity:<br>$$\\tan(A+B) = \\dfrac{\\tan A + \\tan B}{1 - \\tan A \\tan B}$$",
                        "If $\\cos A \\cos B = 0$, then either $\\cos A = 0$ or $\\cos B = 0$. This implies that either $A$ or $B$ is an odd multiple of $90^\\circ$ (such as $90^\\circ$ or $270^\\circ$), where the tangent function itself is undefined, which makes the division step mathematically invalid.<br><br>If $\\tan A \\tan B = 1$, the denominator becomes $1 - 1 = 0$, resulting in division by zero. Geometrically, this occurs when $A+B$ is an odd multiple of $90^\\circ$, which is where $\\tan(A+B)$ is undefined.",
                        "To find the value when $\\tan A = 2$ and $\\tan B = 3$, we substitute these into the identity:<br>\\begin{aligned}\\tan(A+B) &= \\dfrac{2 + 3}{1 - (2)(3)} \\cr &= \\dfrac{5}{1 - 6} \\cr &= \\dfrac{5}{-5} \\cr &= -1\\end{aligned}",
                        "Since $A$ and $B$ are acute angles ($0^\\circ < A, B < 90^\\circ$), their sum must lie in the range $0^\\circ < A+B < 180^\\circ$. Within this interval, the only angle satisfying $\\tan(A+B) = -1$ is in the second quadrant:<br>\\begin{aligned}A+B &= 180^\\circ - 45^\\circ \\cr &= 135^\\circ\\end{aligned}",
                        "Final Answer:<br>\\begin{aligned}\\tan(A+B) &= -1 \\cr A+B &= 135^\\circ\\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\tan(A+B) = 1, \\quad A+B = 45^\\circ$$",
                                "feedback": "Be careful with the sign in the denominator. The denominator is $1 - \\tan A \\tan B$, which gives $1 - 6 = -5$. This results in a value of $-1$, not $+1$."
                        },
                        {
                                "ans": "$$\\tan(A+B) = -1, \\quad A+B = 45^\\circ$$",
                                "feedback": "You have correctly found $\\tan(A+B) = -1$, but $45^\\circ$ is the reference angle. Since tangent is negative, the angle $A+B$ must be in the second quadrant, making it $135^\\circ$."
                        },
                        {
                                "ans": "$$\\tan(A+B) = -1, \\quad A+B = 315^\\circ$$",
                                "feedback": "Although $\\tan(315^\\circ) = -1$, this angle is outside the possible range for the sum of two acute angles. The sum of two acute angles must be less than $180^\\circ$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: The Quadrant Check",
                        "content": "When working with the tangent of a sum of angles, always consider the quadrants of the individual angles. If $A$ and $B$ are both acute, their sum can easily exceed $90^\\circ$, pushing the result into the second quadrant where tangent is negative."
                }
        },
        {
                "id": "004138",
                "board": "AQA",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Trigonometry",
                "topic": "Trigonometric Identities",
                "subtopic": [
                        "Proof of Trig Identities"
                ],
                "img": false,
                "question": "A student attempts to prove the trigonometric identity:<br>$$\\dfrac{1}{\\cos\\theta} - \\cos\\theta = \\sin\\theta\\tan\\theta$$<br>Their written proof is shown below:<br>Line 1: $\\text{LHS} = \\dfrac{1}{\\cos\\theta} - \\cos\\theta$<br>Line 2: $= \\dfrac{1 - \\cos^2\\theta}{\\cos\\theta}$<br>Line 3: $= \\dfrac{\\sin^2\\theta}{\\cos\\theta}$<br>Line 4: $= \\sin\\theta \\left(\\dfrac{\\sin\\theta}{\\cos\\theta}\\right)$<br>Line 5: $= \\sin\\theta\\tan\\theta = \\text{RHS}$<br><br>1. State the name of the fundamental trigonometric identity used to transition from Line 2 to Line 3.<br>2. Explain why this proof is invalid for $\\theta = 90^\\circ$ and $\\theta = 270^\\circ$.<br><br>3. Hence, or otherwise, solve the equation:<br>$$\\dfrac{1}{\\cos\\theta} - \\cos\\theta = 3\\sin\\theta$$<br>for $0^\\circ \\le \\theta \\le 180^\\circ$.",
                "steps": [
                        "The identity used to transition from Line 2 to Line 3 is $\\sin^2\\theta + \\cos^2\\theta = 1$ (known as the Pythagorean identity), rearranged to $1 - \\cos^2\\theta = \\sin^2\\theta$.",
                        "For $\\theta = 90^\\circ$ and $\\theta = 270^\\circ$, we have $\\cos\\theta = 0$. This makes both the fraction $\\dfrac{1}{\\cos\\theta}$ and the tangent function $\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}$ undefined due to division by zero. Thus, the algebraic steps in this proof are invalid at these specific angles.",
                        "To solve the equation $\\dfrac{1}{\\cos\\theta} - \\cos\\theta = 3\\sin\\theta$, we substitute our simplified identity for the left-hand side:<br>$$\\dfrac{\\sin^2\\theta}{\\cos\\theta} = 3\\sin\\theta$$",
                        "We must consider two cases to solve this equation without losing solutions by dividing by zero:<br><br>**Case 1:** $\\sin\\theta = 0$<br><br>Within the domain $0^\\circ \\le \\theta \\le 180^\\circ$, this yields:<br>\\begin{aligned}\\theta &= 0^\\circ \\cr \\theta &= 180^\\circ\\end{aligned}<br><br>Both of these are valid solutions because $\\cos(0^\\circ) = 1 \\ne 0$ and $\\cos(180^\\circ) = -1 \\ne 0$.",
                        "**Case 2:** $\\sin\\theta \\ne 0$<br><br>Since $\\sin\\theta \\ne 0$, we can safely divide both sides of the equation by $\\sin\\theta$:<br>\\begin{aligned}\\dfrac{\\sin\\theta}{\\cos\\theta} &= 3 \\cr \\tan\\theta &= 3\\end{aligned}",
                        "Find the principal value within the range $0^\\circ \\le \\theta \\le 180^\\circ$ using a calculator:<br>$$\\theta = \\tan^{-1}(3) \\approx 71.6^\\circ$$<br><br>Combining both cases, our complete set of solutions is:<br>\\begin{aligned}\\theta &= 0^\\circ \\cr \\theta &\\approx 71.6^\\circ \\cr \\theta &= 180^\\circ\\end{aligned}",
                        "Final Answer:<br>$$\\theta = 0^\\circ, \\quad 71.6^\\circ, \\quad 180^\\circ$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\theta = 71.6^\\circ$$",
                                "feedback": "Be careful when dividing both sides of an equation by $\\sin\\theta$. You must check if $\\sin\\theta = 0$ is a solution first, otherwise you lose the solutions $\\theta = 0^\\circ$ and $\\theta = 180^\\circ$."
                        },
                        {
                                "ans": "$$\\theta = 0^\\circ, \\quad 180^\\circ$$",
                                "feedback": "You have correctly identified the boundary solutions where $\\sin\\theta = 0$, but you also need to solve the case where $\\sin\\theta \\ne 0$, which leads to $\\tan\\theta = 3$."
                        },
                        {
                                "ans": "$$\\theta = 0^\\circ, \\quad 71.6^\\circ, \\quad 108.4^\\circ, \\quad 180^\\circ$$",
                                "feedback": "Tangent is positive in the first quadrant and negative in the second quadrant. Since $\\tan\\theta = 3$ is positive, there is only one solution ($71.6^\\circ$) in the range $0^\\circ \\le \\theta \\le 180^\\circ$."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Division Pitfalls",
                        "content": "Dividing both sides of a trigonometric equation by a variable expression like $\\sin\\theta$ is one of the most common ways to lose valid solutions. Always factorise instead, or separate the equation into explicit cases."
                }
        },
        {
                "id": "004139",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Trigonometry",
                "topic": "Trigonometric Identities",
                "subtopic": [
                        "Proof of Trig Identities",
                ],
                "img": false,
                "question": "A student is trying to prove the triple-angle identity:<br>$$\\cos(3\\theta) = 4\\cos^3\\theta - 3\\cos\\theta$$<br>The student begins by writing $3\\theta$ as $(2\\theta + \\theta)$.<br><br>1. Use the compound angle formula for cosine to express $\\cos(3\\theta)$ in terms of $\\cos(2\\theta)$, $\\sin(2\\theta)$, $\\cos\\theta$, and $\\sin\\theta$.<br>2. By substituting the double-angle formulas for $\\cos(2\\theta)$ and $\\sin(2\\theta)$, complete the proof to show that $\\cos(3\\theta) = 4\\cos^3\\theta - 3\\cos\\theta$.<br><br>3. Explain why this algebraic proof is valid for all real values of $\\theta$, unlike geometric proofs that rely on right-angled triangles.",
                "steps": [
                        "Using the compound angle formula $\\cos(A+B) = \\cos A \\cos B - \\sin A \\sin B$ with $A = 2\\theta$ and $B = \\theta$, we expand $\\cos(3\\theta)$ as:<br>\\begin{aligned}\\cos(3\\theta) &= \\cos(2\\theta + \\theta) \\cr &= \\cos(2\\theta)\\cos\\theta - \\sin(2\\theta)\\sin\\theta\\end{aligned}",
                        "To express the entire formula in terms of $\\cos\\theta$, we substitute the relevant double-angle formulas:<br>$$\\cos(2\\theta) = 2\\cos^2\\theta - 1$$<br>$$\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$$<br>Substituting these in gives:<br>\\begin{aligned}\\cos(3\\theta) &= (2\\cos^2\\theta - 1)\\cos\\theta \\cr & \\quad - (2\\sin\\theta\\cos\\theta)\\sin\\theta\\end{aligned}",
                        "Expand the terms in our expression:<br>\\begin{aligned}\\cos(3\\theta) &= 2\\cos^3\\theta - \\cos\\theta \\cr & \\quad - 2\\sin^2\\theta\\cos\\theta\\end{aligned}",
                        "Use the Pythagorean identity $\\sin^2\\theta = 1 - \\cos^2\\theta$ to replace the sine term:<br>\\begin{aligned}\\cos(3\\theta) &= 2\\cos^3\\theta - \\cos\\theta \\cr & \\quad - 2(1 - \\cos^2\\theta)\\cos\\theta \\cr &= 2\\cos^3\\theta - \\cos\\theta \\cr & \\quad - 2\\cos\\theta + 2\\cos^3\\theta\\end{aligned}",
                        "Collect like terms to complete the algebraic proof:<br>\\begin{aligned}\\cos(3\\theta) &= (2\\cos^3\\theta + 2\\cos^3\\theta) \\cr & \\quad + (-\\cos\\theta - 2\\cos\\theta) \\cr &= 4\\cos^3\\theta - 3\\cos\\theta\\end{aligned}",
                        "Unlike geometric proofs that require right-angled triangles where angles are strictly acute (between $0^\\circ$ and $90^\\circ$), this algebraic proof relies solely on identities derived from the unit circle definition of trigonometric functions. Because these core identities are valid for all real angles, this proof is also valid for all real values of $\\theta$.",
                        "Final Answer:<br>$$\\cos(3\\theta) = 4\\cos^3\\theta - 3\\cos\\theta$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\cos(3\\theta) = 3\\cos^3\\theta - 4\\cos\\theta$$",
                                "feedback": "Watch your coefficients. The final formula has $4\\cos^3\\theta$ and $-3\\cos\\theta$. Double-check your final collection of terms."
                        },
                        {
                                "ans": "$$\\cos(3\\theta) = 4\\cos^3\\theta + 3\\cos\\theta$$",
                                "feedback": "Be careful when expanding. $-1\\cos\\theta - 2\\cos\\theta$ simplifies to $-3\\cos\\theta$, not $+3\\cos\\theta$."
                        },
                        {
                                "ans": "$$\\cos(3\\theta) = 4\\cos^3\\theta - \\cos\\theta$$",
                                "feedback": "Ensure you expand $-2(1-\\cos^2\\theta)\\cos\\theta$ fully to $-2\\cos\\theta + 2\\cos^3\\theta$ before gathering terms."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Choosing the Double Angle Formula",
                        "content": "When expanding $\\cos(2\\theta)$, there are three common identities to choose from. Since the target expression is entirely in terms of cosine, choosing the version $2\\cos^2\\theta - 1$ saves you the extra step of converting sines to cosines later."
                }
        },
        {
                "id": "004140",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Trigonometry",
                "topic": "Trigonometric Identities",
                "subtopic": [
                        "Proof of trig Identities",
                ],
                "img": false,
                "question": "A student is investigating the formula for $\\sin(A-B)$.<br><br>1. Assuming the compound angle identity $\\sin(A+B) = \\sin A \\cos B + \\cos A \\sin B$ is valid for all real angles, prove that:<br>$$\\sin(A-B) = \\sin A \\cos B - \\cos A \\sin B$$<br>State clearly any properties of even and odd trigonometric functions used in your proof.<br>2. By choosing suitable values for $A$ and $B$, use this identity to show that:<br>$$\\sin(15^\\circ) = \\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$$<br>3. A second student claims that since $\\sin(15^\\circ) > 0$, then $\\sin(-15^\\circ)$ must also be positive. Explain why this claim is incorrect, referencing the symmetry of the sine function.",
                "steps": [
                        "To prove the identity for $\\sin(A-B)$, we substitute $-B$ into our identity for $\\sin(A+B)$:<br>$$\\sin(A + (-B)) = \\sin A \\cos(-B) + \\cos A \\sin(-B)$$$",
                        "We apply the symmetry properties of sine and cosine:<br>Cosine is an even function, so $\\cos(-B) = \\cos B$.<br>Sine is an odd function, so $\\sin(-B) = -\\sin B$.<br><br>Substituting these yields:<br>\\begin{aligned}\\sin(A-B) &= \\sin A (\\cos B) + \\cos A (-\\sin B) \\cr &= \\sin A \\cos B - \\cos A \\sin B\\end{aligned}",
                        "To evaluate $\\sin(15^\\circ)$, we choose $A = 45^\\circ$ and $B = 30^\\circ$ because we know their exact trigonometric values:<br>\\begin{aligned}\\sin(15^\\circ) &= \\sin(45^\\circ - 30^\\circ) \\cr &= \\sin(45^\\circ)\\cos(30^\\circ) \\cr & \\quad - \\cos(45^\\circ)\\sin(30^\\circ)\\end{aligned}",
                        "Substitute the exact values into the formula:<br>\\begin{aligned}\\sin(45^\\circ) &= \\dfrac{\\sqrt{2}}{2} \\cr \\cos(45^\\circ) &= \\dfrac{\\sqrt{2}}{2} \\cr \\cos(30^\\circ) &= \\dfrac{\\sqrt{3}}{2} \\cr \\sin(30^\\circ) &= \\dfrac{1}{2}\\end{aligned}<br><br>\\begin{aligned}\\sin(15^\\circ) &= \\left(\\dfrac{\\sqrt{2}}{2}\\right)\\left(\\dfrac{\\sqrt{3}}{2}\\right) \\cr & \\quad - \\left(\\dfrac{\\sqrt{2}}{2}\\right)\\left(\\dfrac{1}{2}\\right)\\end{aligned}",
                        "Simplify the fractions:<br>\\begin{aligned}\\sin(15^\\circ) &= \\dfrac{\\sqrt{6}}{4} - \\dfrac{\\sqrt{2}}{4} \\cr &= \\dfrac{\\sqrt{6} - \\sqrt{2}}{4}\\end{aligned}",
                        "The second student's claim that $\\sin(-15^\\circ)$ is positive is incorrect. Because sine is an odd function, it has rotational symmetry about the origin, which means:<br>$$\\sin(-\\theta) = -\\sin(\\theta)$$<br>Therefore, $\\sin(-15^\\circ) = -\\sin(15^\\circ)$. Since $\\sin(15^\\circ) > 0$, $\\sin(-15^\\circ)$ must be negative.",
                        "Final Answer:<br>$$\\sin(15^\\circ) = \\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\sin(15^\\circ) = \\dfrac{\\sqrt{6} + \\sqrt{2}}{4}$$",
                                "feedback": "The subtraction formula for sine contains a minus sign: $\\sin(A-B) = \\sin A\\cos B - \\cos A\\sin B$. Be careful not to use a plus sign."
                        },
                        {
                                "ans": "$$\\sin(15^\\circ) = \\dfrac{\\sqrt{2} - \\sqrt{6}}{4}$$",
                                "feedback": "Ensure you follow the correct order of the terms in the formula. It is $\\sin A\\cos B - \\cos A\\sin B$, which gives $\\dfrac{\\sqrt{6}}{4} - \\dfrac{\\sqrt{2}}{4}$."
                        },
                        {
                                "ans": "$$\\sin(15^\\circ) = \\dfrac{\\sqrt{3} - 1}{2}$$",
                                "feedback": "Check your exact value multiplications. Remember that $\\dfrac{\\sqrt{2}}{2} \\times \\dfrac{\\sqrt{3}}{2} = \\dfrac{\\sqrt{6}}{4}$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Odd and Even Symmetry",
                        "content": "Always remember the physical, graphical meaning of symmetry: an odd function like sine is symmetrical about the origin (rotational symmetry of $180^\\circ$), while an even function like cosine is symmetrical about the $y$-axis (reflectional symmetry)."
                }
        },
        {
                "id": "004141",
                "board": "AQA",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Curved Graphs",
                        "Differentiation"
                ],
                "img": false,
                "question": "A curve has equation $y = x^3 - 27x$.<br><br>The point $A$ on the curve has $x$-coordinate $-3$.<br>The point $B$ on the curve has $x$-coordinate $-3 + h$.<br><br>1. Show that the gradient of the line $AB$ is $h^2 - 9h$.<br>2. Explain how the result of part (1) can be used to show that $A$ is a stationary point on the curve.",
                "steps": [
                        "Find the $y$-coordinate of point $A$ by substituting $x = -3$ into the curve's equation:<br>\\begin{aligned}y_A &= (-3)^3 - 27(-3) \\cr&= -27 + 81 \\cr&= 54\\end{aligned}<br>So, the coordinates of $A$ are $(-3, 54)$.",
                        "Find the $y$-coordinate of point $B$ by substituting $x = -3 + h$ into the curve's equation:<br>$$y_B = (-3 + h)^3 - 27(-3 + h)$$<br>Using the binomial expansion for $(-3+h)^3$, we expand this expression as:<br>$$y_B = (h^3 - 9h^2 + 27h - 27) + 81 - 27h$$<br>$$y_B = h^3 - 9h^2 + 54$$<br>So, the coordinates of $B$ are $(-3 + h, \\, h^3 - 9h^2 + 54)$.",
                        "Calculate the gradient of the chord $AB$ using the gradient formula $m = \\dfrac{y_B - y_A}{x_B - x_A}$:<br>$$m_{AB} = \\dfrac{(h^3 - 9h^2 + 54) - 54}{(-3 + h) - (-3)}$$<br>$$m_{AB} = \\dfrac{h^3 - 9h^2}{h}$$<br>Dividing each term in the numerator by $h$ (where $h \\ne 0$) gives the required gradient:<br>$$m_{AB} = h^2 - 9h$$",
                        "To show that $A$ is a stationary point, we consider the limit of the chord gradient $m_{AB}$ as $h \\to 0$. As $h$ approaches $0$, the chord $AB$ becomes the tangent to the curve at point $A$:<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\lim_{h \\to 0} (h^2 - 9h) \\cr&= 0^2 - 9(0) \\cr&= 0\\end{aligned}",
                        "Since the derivative (gradient of the tangent) at $x = -3$ is $0$, the tangent line is completely horizontal. Therefore, point $A$ is a stationary point on the curve.",
                "Final Answer: $$h^2 - 9h, \\quad \\lim_{h \\to 0} (h^2 - 9h) = 0$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$h^2 - 27h, \\quad \\lim_{h \\to 0} (h^2 - 27h) = 0$$",
                                "feedback": "This is probably because you made an error while expanding the cubic term $(-3+h)^3$. Remember that the expansion is $h^3 - 9h^2 + 27h - 27$. Double-check that your linear $h$ terms cancel out with the linear term from $-27(-3+h)$."
                        },
                        {
                                "ans": "$$h^3 - 9h^2, \\quad \\lim_{h \\to 0} (h^3 - 9h^2) = 0$$",
                                "feedback": "You may have forgotten to divide the numerator $y_B - y_A$ by the denominator $x_B - x_A = h$. Always ensure you apply the full gradient formula."
                        },
                        {
                                "ans": "$$h^2 - 9h, \\quad \\lim_{h \\to 0} (h^2 - 9h) = -9$$",
                                "feedback": "Your gradient expression is correct, but your limit evaluation as $h \\to 0$ has a slip. Substituting $h=0$ into $h^2 - 9h$ yields $0$, not $-9$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Checking with Rules",
                        "content": "Even though a question requires differentiation from first principles, always check your final answer using the standard power rule. Differentiating $y = x^3 - 27x$ directly yields $\\dfrac{\\text{d}y}{\\text{d}x} = 3x^2 - 27$. Evaluating this at $x = -3$ gives $3(-3)^2 - 27 = 27 - 27 = 0$, confirming your limit is correct."
                }
        },
        {
                "id": "004142",
                "board": "AQA",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Differentiation",
                        "Quadratics",
                        "Tangents and Normals"
                ],
                "img": false,
                "question": "A curve has equation $y = 2x^2 - 5x$.<br><br>The point $P$ on the curve has $x$-coordinate $2$.<br>The point $Q$ on the curve has $x$-coordinate $2 + h$.<br><br>1. Show that the gradient of the chord $PQ$ is $2h + 3$.<br>2. Explain how this result can be used to show that the gradient of the tangent to the curve at $P$ is $3$.",
                "steps": [
                        "Find the $y$-coordinate of point $P$ by substituting $x = 2$ into the curve's equation:<br>\\begin{aligned}y_P &= 2(2)^2 - 5(2) \\cr&= 8 - 10 \\cr&= -2\\end{aligned}<br>So, the coordinates of $P$ are $(2, -2)$.",
                        "Find the $y$-coordinate of point $Q$ by substituting $x = 2 + h$ into the curve's equation:<br>$$y_Q = 2(2 + h)^2 - 5(2 + h)$$<br>Expand the quadratic term and simplify:<br>$$y_Q = 2(4 + 4h + h^2) - 10 - 5h$$<br>\\begin{aligned}y_Q &= 8 + 8h + 2h^2 - 10 - 5h \\cr&= 2h^2 + 3h - 2\\end{aligned}<br>So, the coordinates of $Q$ are $(2 + h, \\, 2h^2 + 3h - 2)$.",
                        "Calculate the gradient of the chord $PQ$ using the formula $m = \\dfrac{y_Q - y_P}{x_Q - x_P}$:<br>$$m_{PQ} = \\dfrac{(2h^2 + 3h - 2) - (-2)}{(2 + h) - 2}$$<br>$$m_{PQ} = \\dfrac{2h^2 + 3h}{h}$$<br>Divide the numerator by $h$ (where $h \\ne 0$):<br>$$m_{PQ} = 2h + 3$$",
                        "To find the gradient of the tangent to the curve at $P$, we evaluate the limit of the chord gradient $m_{PQ}$ as the point $Q$ moves infinitely close to $P$, which corresponds to $h \\to 0$:<br>\\begin{aligned}\\text{Gradient at } P &= \\lim_{h \\to 0} (2h + 3) \\cr&= 2(0) + 3 \\cr&= 3\\end{aligned}",
                "Final Answer: $$2h + 3, \\quad \\lim_{h \\to 0} (2h + 3) = 3$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$2h - 5, \\quad \\lim_{h \\to 0} (2h - 5) = -5$$",
                                "feedback": "This is probably because you made a sign error during expansion. Ensure you carefully expand the term $-5(2+h)$ to $-10 - 5h$, rather than $-10 + 5h$."
                        },
                        {
                                "ans": "$$2h^2 + 3h, \\quad \\lim_{h \\to 0} (2h^2 + 3h) = 0$$",
                                "feedback": "You may have forgotten to divide the change in $y$ by the change in $x$, which is $h$. Remember that the chord gradient is a ratio of changes in coordinates."
                        },
                        {
                                "ans": "$$2h + 3, \\quad \\lim_{h \\to 0} (2h + 3) = 2$$",
                                "feedback": "Your algebraic derivation is correct, but your limit step has a slip. Evaluating $2h+3$ as $h \\to 0$ leaves only the constant term $3$, not $2$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: The Concept of a Chord",
                        "content": "Always remember that a chord is a secant line connecting two distinct points on a curve. This is why we must state $h \\ne 0$ when simplifying the gradient algebraically. It is only when we take the limit as $h \\to 0$ that the chord transforms conceptually into a tangent line at a single point."
                }
        },
        {
                "id": "004143",
                "board": "AQA",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Curved Graphs",
                        "Differentiation"
                ],
                "img": false,
                "question": "A curve has equation $y = 2x^3 - 6x$.<br><br>The point $A$ on the curve has $x$-coordinate $1$.<br>The point $B$ on the curve has $x$-coordinate $1 + h$.<br><br>1. Show that the gradient of the line $AB$ is $2h^2 + 6h$.<br>2. Explain how the result of part (1) can be used to show that $A$ is a stationary point on the curve.",
                "steps": [
                        "Find the $y$-coordinate of point $A$ by substituting $x = 1$ into the curve's equation:<br>\\begin{aligned}y_A &= 2(1)^3 - 6(1) \\cr&= 2 - 6 \\cr&= -4\\end{aligned}<br>So, the coordinates of $A$ are $(1, -4)$.",
                        "Find the $y$-coordinate of point $B$ by substituting $x = 1 + h$ into the curve's equation:<br>$$y_B = 2(1 + h)^3 - 6(1 + h)$$<br>Expand the cubic term and simplify:<br>$$y_B = 2(1 + 3h + 3h^2 + h^3) - 6 - 6h$$<br>\\begin{aligned}y_B &= 2 + 6h + 6h^2 + 2h^3 - 6 - 6h \\cr&= 2h^3 + 6h^2 - 4\\end{aligned}<br>So, the coordinates of $B$ are $(1 + h, \\, 2h^3 + 6h^2 - 4)$.",
                        "Calculate the gradient of the line $AB$ using $m = \\dfrac{y_B - y_A}{x_B - x_A}$:<br>$$m_{AB} = \\dfrac{(2h^3 + 6h^2 - 4) - (-4)}{(1 + h) - 1}$$<br>$$m_{AB} = \\dfrac{2h^3 + 6h^2}{h}$$<br>Divide the numerator by $h$ (where $h \\ne 0$):<br>$$m_{AB} = 2h^2 + 6h$$",
                        "To show that $A$ is a stationary point, we find the gradient of the tangent at $A$ by taking the limit of the chord gradient $m_{AB}$ as $h \\to 0$:<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\lim_{h \\to 0} (2h^2 + 6h) \\cr&= 2(0)^2 + 6(0) \\cr&= 0\\end{aligned}",
                        "Since the derivative at $x = 1$ is $0$, the curve has a horizontal tangent line at $A$. Therefore, point $A$ is a stationary point on the curve.",
                "Final Answer: $$2h^2 + 6h, \\quad \\lim_{h \\to 0} (2h^2 + 6h) = 0$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$2h^2 - 6h, \\quad \\lim_{h \\to 0} (2h^2 - 6h) = 0$$",
                                "feedback": "This is probably due to a sign error during your algebraic simplification. Double-check that your linear $h$ terms $+6h$ and $-6h$ cancel out cleanly, leaving only the positive quadratic terms."
                        },
                        {
                                "ans": "$$2h^2 + 6h, \\quad \\lim_{h \\to 0} (2h^2 + 6h) = 6$$",
                                "feedback": "You simplified the gradient expression correctly, but you made a slip in the limit step. Substituting $h = 0$ into $2h^2 + 6h$ results in $0$, not $6$."
                        },
                        {
                                "ans": "$$2h^3 + 6h^2, \\quad \\lim_{h \\to 0} (2h^3 + 6h^2) = 0$$",
                                "feedback": "You may have forgotten to divide by the horizontal distance $x_B - x_A = h$. Remember that the chord gradient requires dividing the difference in $y$-values by $h$."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Defining Stationary Points",
                        "content": "A stationary point is formally defined as any point on a smooth curve where the first derivative $\\dfrac{\\text{d}y}{\\text{d}x} = 0$. Showing that the limiting gradient of a chord is $0$ is the most mathematically rigorous way to establish this without using standard differentiation shortcut rules."
                }
        },
        {
                "id": "004144",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Differentiation",
                        "Tangents and Normals"
                ],
                "img": false,
                "question": "A curve has equation $y = \\dfrac{4}{x}$ for $x > 0$.<br><br>The point $A$ on the curve has $x$-coordinate $2$.<br>The point $B$ on the curve has $x$-coordinate $2 + h$.<br><br>1. Show that the gradient of the line $AB$ is $-\\dfrac{2}{2+h}$.<br>2. State the gradient of the tangent to the curve at $A$ by considering the limit of this expression as $h \\to 0$.",
                "steps": [
                        "Find the $y$-coordinate of point $A$ by substituting $x = 2$ into the curve's equation:<br>\\begin{aligned}y_A &= \\dfrac{4}{2} \\cr&= 2\\end{aligned}<br>So, the coordinates of $A$ are $(2, 2)$.",
                        "Find the $y$-coordinate of point $B$ by substituting $x = 2 + h$ into the curve's equation:<br>$$y_B = \\dfrac{4}{2 + h}$$<br>So, the coordinates of $B$ are $\\left(2 + h, \\, \\dfrac{4}{2+h}\\right)$.",
                        "Calculate the gradient of the line $AB$ using the formula $m = \\dfrac{y_B - y_A}{x_B - x_A}$:<br>\\begin{aligned}m_{AB} &= \\dfrac{\\dfrac{4}{2 + h} - 2}{(2 + h) - 2} \\cr&= \\dfrac{\\dfrac{4}{2 + h} - 2}{h}\\end{aligned}",
                        "Simplify the numerator by finding a common denominator of $(2+h)$:<br>\\begin{aligned}\\dfrac{4}{2 + h} - 2 &= \\dfrac{4 - 2(2 + h)}{2 + h} \\cr&= \\dfrac{4 - 4 - 2h}{2 + h} \\cr&= \\dfrac{-2h}{2 + h}\\end{aligned}",
                        "Substitute this simplified fraction back into the gradient expression:<br>\\begin{aligned}m_{AB} &= \\dfrac{\\dfrac{-2h}{2 + h}}{h} \\cr&= \\dfrac{-2h}{h(2 + h)}\\end{aligned}<br>Cancel the factor of $h$ in the numerator and denominator (where $h \\ne 0$):<br>$$m_{AB} = -\\dfrac{2}{2 + h}$$",
                        "To find the gradient of the tangent to the curve at $A$, we evaluate the limit of $m_{AB}$ as $h \\to 0$:<br>\\begin{aligned}\\text{Gradient at } A &= \\lim_{h \\to 0} \\left(-\\dfrac{2}{2 + h}\\right) \\cr&= -\\dfrac{2}{2 + 0} \\cr&= -1\\end{aligned}",
                "Final Answer: $$-\\dfrac{2}{2 + h}, \\quad \\lim_{h \\to 0} \\left(-\\dfrac{2}{2 + h}\\right) = -1$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\dfrac{2}{2+h}, \\quad \\lim_{h \\to 0} \\left(\\dfrac{2}{2+h}\\right) = 1$$",
                                "feedback": "This is probably due to a sign error when expanding the numerator. Be careful: $4 - 2(2+h) = 4 - 4 - 2h = -2h$. Ensure you do not lose the negative sign."
                        },
                        {
                                "ans": "$$-\\dfrac{2}{2+h}, \\quad \\lim_{h \\to 0} \\left(-\\dfrac{2}{2+h}\\right) = 0$$",
                                "feedback": "You simplified the gradient of the chord correctly, but you made a slip in the limit calculation. Substituting $h = 0$ into $-\\dfrac{2}{2+h}$ yields $-\\dfrac{2}{2} = -1$, not $0$."
                        },
                        {
                                "ans": "$$-\\dfrac{4}{2+h}, \\quad \\lim_{h \\to 0} \\left(-\\dfrac{4}{2+h}\\right) = -2$$",
                                "feedback": "This occurs if you forgot to multiply the entire term by $2$ when finding the common denominator in the numerator. Carefully verify that $-2(2+h) = -4 - 2h$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Working with Algebraic Fractions",
                        "content": "When doing first-principles differentiation on rational functions, the algebraic algebra can get messy. Always simplify the numerator into a single unified fraction before dividing by $h$ to avoid complex, nested fractions."
                }
        },
        {
                "id": "004145",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Differentiation",
                        "Functions and Mappings",
                        "Tangents and Normals"
                ],
                "img": false,
                "question": "A curve has equation $y = \\sqrt{x}$ for $x \\ge 0$.<br><br>The point $A$ on the curve has $x$-coordinate $4$.<br>The point $B$ on the curve has $x$-coordinate $4 + h$.<br><br>1. Show that the gradient of the line $AB$ can be written as $\\dfrac{1}{\\sqrt{4+h} + 2}$.<br>2. Explain how this result can be used to show that the gradient of the curve at $A$ is $0.25$.",
                "steps": [
                        "Find the $y$-coordinate of point $A$ by substituting $x = 4$ into the curve's equation:<br>\\begin{aligned}y_A &= \\sqrt{4} \\cr&= 2\\end{aligned}<br>So, the coordinates of $A$ are $(4, 2)$.",
                        "Find the $y$-coordinate of point $B$ by substituting $x = 4 + h$ into the curve's equation:<br>$$y_B = \\sqrt{4 + h}$$<br>So, the coordinates of $B$ are $(4 + h, \\, \\sqrt{4 + h})$.",
                        "Calculate the gradient of the line $AB$ using the formula $m = \\dfrac{y_B - y_A}{x_B - x_A}$:<br>\\begin{aligned}m_{AB} &= \\dfrac{\\sqrt{4 + h} - 2}{(4 + h) - 4} \\cr&= \\dfrac{\\sqrt{4 + h} - 2}{h}\\end{aligned}",
                        "To eliminate the $h$ in the denominator and simplify, we rationalise the numerator by multiplying both the numerator and the denominator by the conjugate expression $(\\sqrt{4 + h} + 2)$:<br>$$m_{AB} = \\dfrac{(\\sqrt{4 + h} - 2)(\\sqrt{4 + h} + 2)}{h(\\sqrt{4 + h} + 2)}$$",
                        "Expand the numerator using the difference of two squares identity, $(a-b)(a+b) = a^2 - b^2$:<br>\\begin{aligned}m_{AB} &= \\dfrac{(4 + h) - 4}{h(\\sqrt{4 + h} + 2)} \\cr&= \\dfrac{h}{h(\\sqrt{4 + h} + 2)}\\end{aligned}<br>Cancel the factor of $h$ (where $h \\ne 0$) to obtain the required expression:<br>$$m_{AB} = \\dfrac{1}{\\sqrt{4 + h} + 2}$$",
                        "To find the gradient of the curve at $A$, we evaluate the limit of the simplified chord gradient $m_{AB}$ as $h \\to 0$:<br>\\begin{aligned}\\text{Gradient at } A &= \\lim_{h \\to 0} \\left(\\dfrac{1}{\\sqrt{4 + h} + 2}\\right) \\cr&= \\dfrac{1}{\\sqrt{4 + 0} + 2} \\cr&= \\dfrac{1}{2 + 2} \\cr&= \\dfrac{1}{4} \\cr&= 0.25\\end{aligned}",
                "Final Answer: $$\\dfrac{1}{\\sqrt{4+h} + 2}, \\quad \\lim_{h \\to 0} \\left(\\dfrac{1}{\\sqrt{4+h} + 2}\\right) = 0.25$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\dfrac{1}{\\sqrt{4+h} - 2}, \\quad \\text{gradient is undefined}$$",
                                "feedback": "This is probably because you multiplied by the wrong conjugate. To rationalise the numerator $(\\sqrt{4+h}-2)$, you must multiply both top and bottom by $(\\sqrt{4+h}+2)$."
                        },
                        {
                                "ans": "$$\\dfrac{1}{\\sqrt{4+h} + 2}, \\quad \\lim_{h \\to 0} \\left(\\dfrac{1}{\\sqrt{4+h} + 2}\\right) = 0.5$$",
                                "feedback": "Your algebraic rationalisation is correct, but your final limit evaluation has a slip. Substituting $h = 0$ yields $\\dfrac{1}{\\sqrt{4}+2} = \\dfrac{1}{2+2} = \\dfrac{1}{4} = 0.25$, not $0.5$."
                        },
                        {
                                "ans": "$$\\dfrac{1}{\\sqrt{4+h} + 4}, \\quad \\lim_{h \\to 0} \\left(\\dfrac{1}{\\sqrt{4+h} + 4}\\right) = 0.167$$",
                                "feedback": "Check your difference of squares expansion in the numerator. Squaring the term $2$ gives $4$, which cancels the $+4$ term inside the radical perfectly."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Rationalising to Clear Limits",
                        "content": "When dealing with radical limits of the form $\\dfrac{0}{0}$ as $h \\to 0$, standard substitution fails. Rationalising the numerator is a vital algebraic technique that isolates the troublesome factor of $h$ in the denominator so it can be canceled out."
                }
        },
        {
                "id": "004146",
                "board": "OCR",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Coordinate Geometry",
                "topic": "Straight Lines",
                "subtopic": [
                        "Coordinate Geometry",
                        "Linear Equations"
                ],
                "img": false,
                "question": "The points $A$ and $B$ have coordinates $(2, 7)$ and $(5, 19)$ respectively.<br><br>Find the equation of the straight line which passes through the point $(3, 10)$ and is perpendicular to $AB$. Give your answer in the form $ax + by = c$, where $a$, $b$, and $c$ are integers.",
                "steps": [
                        "Calculate the gradient of the line segment $AB$ using $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$:<br>\\begin{aligned}m_{AB} &= \\dfrac{19 - 7}{5 - 2} \\cr&= \\dfrac{12}{3} \\cr&= 4\\end{aligned}",
                        "Find the gradient of the line perpendicular to $AB$ using the negative reciprocal relationship $m_{\\perp} = -\\dfrac{1}{m_{AB}}$:<br>$$m_{\\perp} = -\\dfrac{1}{4}$$",
                        "Write the equation of the perpendicular line passing through the point $(3, 10)$ using the point-slope formula $y - y_1 = m(x - x_1)$:<br>$$y - 10 = -\\dfrac{1}{4}(x - 3)$$",
                        "Multiply the entire equation by $4$ to eliminate the fraction:<br>$$4(y - 10) = -(x - 3)$$<br>$$4y - 40 = -x + 3$$",
                        "Rearrange the terms into the form $ax + by = c$ where $a$, $b$, and $c$ are integers:<br>$$x + 4y = 43$$",
                "Final Answer: $$x + 4y = 43$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$x - 4y = -37$$",
                                "feedback": "You may have forgotten to change the sign of the perpendicular gradient. The perpendicular gradient is the negative reciprocal, so it should be $-\\dfrac{1}{4}$, not $\\dfrac{1}{4}$."
                        },
                        {
                                "ans": "$$4x - y = 2$$",
                                "feedback": "It looks like you used the gradient of $AB$ directly instead of finding the perpendicular gradient. Remember that perpendicular lines have gradients that multiply to $-1$."
                        },
                        {
                                "ans": "$$x + 4y = 13$$",
                                "feedback": "Check your expansion of the right-hand side. Multiplying $-\\dfrac{1}{4}$ by $-3$ yields $+\\dfrac{3}{4}$. Multiplying by $4$ should give $+3$, not $-3$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Spotting Perpendicular Gradients",
                        "content": "A very common slip in straight-line questions is changing only the sign or only taking the reciprocal. To be safe, always write down the check $m_1 \\times m_2 = -1$ before proceeding with your line equation."
                }
        },
        {
                "id": "004147",
                "board": "OCR",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Coordinate Geometry",
                "topic": "Straight Lines",
                "subtopic": [
                        "Coordinate Geometry",
                        "Intersections of Lines and Curves"
                ],
                "img": false,
                "question": "The line $L_1$ passes through the points $P(-1, 4)$ and $Q(3, 12)$. The line $L_2$ is perpendicular to $L_1$ and intersects the $y$-axis at $(0, 5)$.<br><br>Find the coordinates of the point of intersection of the lines $L_1$ and $L_2$.",
                "steps": [
                        "Find the gradient of line $L_1$ using the coordinates of $P$ and $Q$:<br>\\begin{aligned}m_{L_1} &= \\dfrac{12 - 4}{3 - (-1)} \\cr&= \\dfrac{8}{4} \\cr&= 2\\end{aligned}",
                        "Find the equation of line $L_1$ using the point-slope form with $P(-1, 4)$:<br>\\begin{aligned}y - 4 &= 2(x + 1) \\cry &= 2x + 6\\end{aligned}",
                        "Since $L_2$ is perpendicular to $L_1$, its gradient is the negative reciprocal of $2$:<br>$$m_{L_2} = -\\dfrac{1}{2}$$",
                        "Since $L_2$ intersects the $y$-axis at $(0, 5)$, its $y$-intercept is $5$. Write its equation in slope-intercept form $y = mx + c$:<br>$$y = -\\dfrac{1}{2}x + 5$$",
                        "To find the intersection point, set the two linear equations equal to each other:<br>$$2x + 6 = -\\dfrac{1}{2}x + 5$$<br>Multiply the entire equation by $2$ to clear the fraction:<br>$$4x + 12 = -x + 10$$",
                        "Solve for $x$ by collecting like terms:<br>\\begin{aligned}5x &= -2 \\cr x &= -\\dfrac{2}{5}\\end{aligned}",
                        "Substitute $x = -\\dfrac{2}{5}$ back into the equation for $L_1$ to find the $y$-coordinate:<br>\\begin{aligned}y &= 2\\left(-\\dfrac{2}{5}\\right) + 6 \\cr&= -\\dfrac{4}{5} + \\dfrac{30}{5} \\cr&= \\dfrac{26}{5}\\end{aligned}",
                "Final Answer: $$\\left(-\\dfrac{2}{5}, \\, \\dfrac{26}{5}\\right)$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\left(\\dfrac{2}{5}, \\, \\dfrac{34}{5}\\right)$$",
                                "feedback": "This is probably because you made a sign error when solving $4x + 12 = -x + 10$. Adding $x$ to both sides gives $5x$, and subtracting $12$ gives $-2$, which yields a negative $x$ value."
                        },
                        {
                                "ans": "$$\\left(-\\dfrac{2}{3}, \\, \\dfrac{14}{3}\\right)$$",
                                "feedback": "You may have used a gradient of $-\\dfrac{1}{2}$ for $L_1$ instead of perpendicular $L_2$. Ensure you associate the correct gradients with the respective lines before finding the intersection."
                        },
                        {
                                "ans": "$$\\left(-\\dfrac{2}{5}, \\, 5\\right)$$",
                                "feedback": "It looks like you found the correct $x$-coordinate, but made an error during substitution. Ensure you substitute $x$ back into the full equation $y = 2x + 6$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Clear Fraction Work",
                        "content": "When solving simultaneous equations containing fractional coordinates, multiplying through by the lowest common multiple of the denominators (in this case, 2) is a highly reliable way to prevent arithmetic errors."
                }
        },
        {
                "id": "004148",
                "board": "OCR",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Coordinate Geometry",
                "topic": "Straight Lines",
                "subtopic": [
                        "Coordinate Geometry"
                ],
                "img": false,
                "question": "A triangle has vertices at $X(1, 2)$, $Y(5, 10)$, and $Z(-1, 3)$.<br><br>1. Show that the triangle is right-angled at $X$ by comparing the gradients of its sides.<br>2. Find the equation of the altitude of the triangle drawn from vertex $X$ to the side $YZ$. Give your answer in the form $ax + by = c$, where $a$, $b$, and $c$ are integers.",
                "steps": [
                        "Calculate the gradients of the sides meeting at vertex $X$, which are $XY$ and $XZ$:<br>\\begin{aligned}m_{XY} &= \\dfrac{10 - 2}{5 - 1} \\cr&= \\dfrac{8}{4} \\cr&= 2\\end{aligned}<br>\\begin{aligned}m_{XZ} &= \\dfrac{3 - 2}{-1 - 1} \\cr&= \\dfrac{1}{-2} \\cr&= -0.5\\end{aligned}",
                        "Compare the product of these gradients to test for perpendicularity:<br>\\begin{aligned}m_{XY} \\times m_{XZ} &= 2 \\times (-0.5) \\cr&= -1\\end{aligned}<br>Since the product of the gradients of $XY$ and $XZ$ is $-1$, the lines are perpendicular, proving that the triangle is right-angled at $X$.",
                        "To find the equation of the altitude from $X$ to $YZ$, we first need the gradient of the side $YZ$:<br>\\begin{aligned}m_{YZ} &= \\dfrac{3 - 10}{-1 - 5} \\cr&= \\dfrac{-7}{-6} \\cr&= \\dfrac{7}{6}\\end{aligned}",
                        "The altitude is a line perpendicular to $YZ$, so its gradient is the negative reciprocal of $m_{YZ}$:<br>$$m_{\\text{alt}} = -\\dfrac{6}{7}$$",
                        "Write the equation of this altitude passing through $X(1, 2)$ using the point-slope formula:<br>$$y - 2 = -\\dfrac{6}{7}(x - 1)$$",
                        "Multiply by $7$ to clear the fraction and rearrange into the form $ax + by = c$:<br>$$7(y - 2) = -6(x - 1)$$<br>\\begin{aligned}7y - 14 &= -6x + 6 \\cr6x + 7y &= 20\\end{aligned}",
                "Final Answer: $$6x + 7y = 20$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$7x - 6y = -5$$",
                                "feedback": "You may have used the gradient of $YZ$ directly as the gradient of the altitude. Remember that the altitude is perpendicular to the base, so you must use the negative reciprocal gradient $-\\dfrac{6}{7}$."
                        },
                        {
                                "ans": "$$6x + 7y = 13$$",
                                "feedback": "Check your expansion of the right-hand side. Multiplying $-\\dfrac{6}{7}$ by $-1$ yields $+\\dfrac{6}{7}$, which becomes $+6$ when multiplied through by $7$. Your constant term should be $20$, not $13$."
                        },
                        {
                                "ans": "$$x + 2y = 5$$",
                                "feedback": "This is the equation of the line $XZ$. While $XZ$ is perpendicular to $XY$ at vertex $X$, it is not perpendicular to the base $YZ$. Make sure you use the base $YZ$ to find the altitude gradient."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Altitude Definition",
                        "content": "An altitude of a triangle is a line segment from a vertex perpendicular to the opposite side. Do not confuse it with a perpendicular bisector, which must also pass through the midpoint of the base."
                }
        },
        {
                "id": "004149",
                "board": "OCR",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Coordinate Geometry",
                "topic": "Straight Lines",
                "subtopic": [
                        "Coordinate Geometry"
                ],
                "img": false,
                "question": "The straight line $L$ passes through the point $M(4, -1)$ and has a gradient of $-\\dfrac{2}{3}$. A second line, $K$, passes through the origin $O(0,0)$ and is perpendicular to $L$.<br><br>Find the shortest distance from the origin $O$ to the line $L$.",
                "steps": [
                        "Find the equation of line $L$ using the point $M(4, -1)$ and gradient $-\\dfrac{2}{3}$:<br>\\begin{aligned}y - (-1) &= -\\dfrac{2}{3}(x - 4) \\cry + 1 &= -\\dfrac{2}{3}x + \\dfrac{8}{3}\\end{aligned}",
                        "Multiply the entire equation by $3$ to eliminate the fraction:<br>\\begin{aligned}3y + 3 &= -2x + 8 \\cr2x + 3y - 5 &= 0\\end{aligned}",
                        "The shortest distance from a point $(x_1, y_1)$ to a line $Ax + By + C = 0$ is given by the formula:<br>$$d = \\dfrac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}}$$",
                        "Substitute the coordinates of the origin $(0, 0)$ and the coefficients of line $L$ ($A=2, B=3, C=-5$) into the distance formula:<br>$$d = \\dfrac{|2(0) + 3(0) - 5|}{\\sqrt{2^2 + 3^2}}$$",
                        "Evaluate the numerator and denominator to find the distance:<br>\\begin{aligned}d &= \\dfrac{|-5|}{\\sqrt{4 + 9}} \\cr&= \\dfrac{5}{\\sqrt{13}}\\end{aligned}",
                "Final Answer: $$\\dfrac{5}{\\sqrt{13}}$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\dfrac{11}{\\sqrt{13}}$$",
                                "feedback": "You may have made a sign error when expanding $y + 1 = -\\dfrac{2}{3}(x-4)$, leading to $3y + 3 = -2x - 8$ and a constant of $-11$. Double-check that $-\\dfrac{2}{3} \\times -4 = +\\dfrac{8}{3}$."
                        },
                        {
                                "ans": "$$\\dfrac{5}{13}$$",
                                "feedback": "Remember that the denominator of the distance formula contains a square root: $\\sqrt{A^2 + B^2}$. Make sure you do not forget to take the root of $13$."
                        },
                        {
                                "ans": "$$\\sqrt{13}$$",
                                "feedback": "It looks like you found the length of the vector representing the gradient but did not use the distance-to-line formula correctly. Re-evaluate the ratio carefully."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Distance to Origin",
                        "content": "The shortest distance from any point to a line always lies along the perpendicular. While you can solve this by finding the equation of $K$ ($y = \\dfrac{3}{2}x$), finding the intersection point, and using the distance between two points, the standard formula $d = \\dfrac{|C|}{\\sqrt{A^2+B^2}}$ is much faster and less prone to errors."
                }
        },
        {
                "id": "004150",
                "board": "OCR",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Coordinate Geometry",
                "topic": "Straight Lines",
                "subtopic": [
                        "Circle Geometry",
                        "Intersections of Lines and Curves"
                ],
                "img": false,
                "question": "The perpendicular bisector of the line segment joining $C(-2, 3)$ and $D(4, 11)$ intersects the line $y = 3x - 1$ at point $E$.<br><br>Find the coordinates of point $E$.",
                "steps": [
                        "Find the coordinates of the midpoint, $M$, of the line segment $CD$:<br>\\begin{aligned}M &= \\left(\\dfrac{-2 + 4}{2}, \\, \\dfrac{3 + 11}{2}\\right) \\cr&= (1, 7)\\end{aligned},",
                        "Calculate the gradient of the line segment $CD$:<br>\\begin{aligned}m_{CD} &= \\dfrac{11 - 3}{4 - (-2)} \\cr&= \\dfrac{8}{6} \\cr&= \\dfrac{4}{3}\\end{aligned}",
                        "The perpendicular bisector has a gradient that is the negative reciprocal of $m_{CD}$:<br>$$m_{\\perp} = -\\dfrac{3}{4}$$",
                        "Write the equation of the perpendicular bisector passing through the midpoint $M(1, 7)$:<br>$$y - 7 = -\\dfrac{3}{4}(x - 1)$$<br>Multiply by $4$ to clear the fraction:<br>\\begin{aligned}4y - 28 &= -3x + 3 \\cr3x + 4y &= 31\\end{aligned}",
                        "Solve the simultaneous equations to find the intersection point $E$. Substitute $y = 3x - 1$ into our perpendicular bisector equation:<br>$$3x + 4(3x - 1) = 31$$<br>\\begin{aligned}3x + 12x - 4 &= 31 \\cr15x &= 35\\end{aligned}",
                        "Simplify to find the $x$-coordinate:<br>\\begin{aligned}x &= \\dfrac{35}{15} \\cr&= \\dfrac{7}{3}\\end{aligned}",
                        "Substitute $x = \\dfrac{7}{3}$ back into the equation $y = 3x - 1$ to find the $y$-coordinate:<br>\\begin{aligned}y &= 3\\left(\\dfrac{7}{3}\\right) - 1 \\cr&= 7 - 1 \\cr&= 6\\end{aligned}",
                "Final Answer: $$\\left(\\dfrac{7}{3}, \\, 6\\right)$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\left(\\dfrac{1}{3}, \\, 0\\right)$$",
                                "feedback": "This is the intersection of $y = 3x - 1$ with the $x$-axis. Ensure you are setting up the simultaneous equations using the perpendicular bisector line, not coordinates from the axes."
                        },
                        {
                                "ans": "$$\\left(2, \\, 5\\right)$$",
                                "feedback": "You may have found the equation of a line passing through $C$ or $D$ instead of their midpoint. A perpendicular bisector must strictly pass through the midpoint $(1, 7)$."
                        },
                        {
                                "ans": "$$\\left(\\dfrac{31}{15}, \\, \\dfrac{26}{5}\\right)$$",
                                "feedback": "This occurs if you used a gradient of $-\\dfrac{4}{3}$ instead of $-\\dfrac{3}{4}$ for the perpendicular bisector. Remember to take the negative reciprocal of the original gradient."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Breaking Down Multi-Step Problems",
                        "content": "When a question mentions a 'perpendicular bisector', immediately break it down into two distinct tasks: find the midpoint (for the 'bisector' part) and find the negative reciprocal gradient (for the 'perpendicular' part). Never attempt to merge these steps mentally."
                }
        }
];
