window.ALEVEL_QUESTIONS = [
    {
        "id": "004101",
        "board": "AQA",
        "major_area": "Coordinate geometry",
        "topic": "Circles",
        "subtopic": [
            "Equations of Circles",
            "Tangents and Chords"
        ],
        "img": false,
        "question": "Three points $A$, $B$, and $C$ have coordinates $A(-9, 4)$, $B(7, 12)$, and $C(11, 4)$.<br><br>(a) Show that angle $ABC$ is a right angle.<br><br>(b) $A$, $B$, and $C$ lie on a circle.<br>(i) Explain why $AC$ is a diameter of the circle.<br>(ii) Determine whether the point $D(4, 10)$ lies inside the circle, on the circle, or outside the circle. Fully justify your answer.",
        "steps": [
            "For Part (a), calculate the gradients of the lines $AB$ and $BC$: $$m_{AB} = \\dfrac{12-4}{7 - (-9)} = \\dfrac{8}{16} = \\dfrac{1}{2}$$ and $$m_{BC} = \\dfrac{4-12}{11-7} = \\dfrac{-8}{4} = -2$$",
            "Since the product of their gradients is $$m_{AB} \\times m_{BC} = \\dfrac{1}{2} \\times (-2) = -1$$, the lines $AB$ and $BC$ are perpendicular, meaning angle $ABC$ is a right angle.",
            "For Part (b)(i), recall the circle theorem that the angle in a semicircle is a right angle. Since angle $ABC = 90^\\circ$ and the points $A$, $B$, and $C$ lie on the circumference of a circle, the hypotenuse $AC$ must be a diameter of the circle.",
            "For Part (b)(ii), find the center of the circle, which is the midpoint of the diameter $AC$: $$M = \\left(\\dfrac{-9+11}{2}, \\dfrac{4+4}{2}\\right) = (1, 4)$$",
            "Calculate the radius $R$, which is half the length of the diameter $AC$: $$AC = \\sqrt{(11 - (-9))^2 + (4-4)^2} = \\sqrt{20^2 + 0} = 20 \\implies R = 10$$",
            "Find the distance squared from point $D(4, 10)$ to the center $M(1, 4)$: $$MD^2 = (4-1)^2 + (10-4)^2 = 3^2 + 6^2 = 9 + 36 = 45$$",
            "Since the distance squared $$45 < R^2 = 100$$, the distance from the point to the center of the circle is less than the radius. Thus, the point $D$ lies inside the circle.",
            "Final Answer: $$\\text{Part (b)(i): } \\angle ABC = 90^\\circ \\implies AC \\text{ is a diameter},\\quad \\text{Part (b)(ii): Inside the circle}$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Part (b)(i): } \\angle ABC = 90^\\circ \\implies AC \\text{ is a diameter},\\quad \\text{Part (b)(ii): On the circle}$$",
                "feedback": "In Part (b)(ii), you probably calculated the distance from $D$ to the center incorrectly, or confused the value with the radius squared. Since $MD^2 = 45$, which is strictly less than $R^2 = 100$, the point must lie inside the circle, not on it."
            },
            {
                "ans": "$$\\text{Part (b)(i): Opposite angles are supplementary},\\quad \\text{Part (b)(ii): Inside the circle}$$",
                "feedback": "In Part (b)(i), supplementary opposite angles is a theorem for cyclic quadrilaterals, not for proving a diameter. The correct theorem to cite is that an angle in a semicircle is a right angle, which means the hypotenuse $AC$ is a diameter."
            },
            {
                "ans": "$$\\text{Part (b)(i): Alternate segment theorem},\\quad \\text{Part (b)(ii): Outside the circle}$$",
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
        "major_area": "Coordinate geometry",
        "topic": "Circles",
        "subtopic": [
            "Equations of Circles",
            "Angles in Circles"
        ],
        "img": false,
        "question": "A circle has center $O(0, 0)$ and radius $R = 10$. Three points lie on the circle: $A(8, 6)$, $B(0, -10)$, and $C(-8, 6)$.<br><br>(a) Show that the angle at the center, $\\angle AOC$, is exactly twice the size of the angle at the circumference, $\\angle ABC$.<br><br>(b) (i) Show that the chord $AC$ is bisected by the $y$-axis.<br>(ii) Determine whether the point $D(3, -9)$ lies inside the circle, on the circle, or outside the circle. Fully justify your answer.",
        "steps": [
            "For Part (a), calculate the side lengths of triangle $AOC$ to find $\\angle AOC$: $$OA = 10,\\ OC = 10,\\ AC = \\sqrt{(-8-8)^2 + (6-6)^2} = 16$$",
            "Apply the Cosine Rule to find $\\angle AOC$: $$16^2 = 10^2 + 10^2 - 2(10)(10)\\cos(\\angle AOC) \\implies 256 = 200 - 200\\cos(\\angle AOC) \\implies \\cos(\\angle AOC) = -0.28 \\implies \\angle AOC \\approx 106.26^\\circ$$",
            "Next, calculate the side lengths of triangle $ABC$ to find $\\angle ABC$: $$BA = \\sqrt{(8-0)^2 + (6 - (-10))^2} = \\sqrt{320}$$ and $$BC = \\sqrt{(-8-0)^2 + (6 - (-10))^2} = \\sqrt{320}$$, with $$AC = 16$$",
            "Apply the Cosine Rule on triangle $ABC$: $$16^2 = 320 + 320 - 2(\\sqrt{320})(\\sqrt{320})\\cos(\\angle ABC) \\implies 256 = 640 - 640\\cos(\\angle ABC) \\implies \\cos(\\angle ABC) = 0.6 \\implies \\angle ABC \\approx 53.13^\\circ$$",
            "Since $$2 \\times 53.13^\\circ = 106.26^\\circ$$, the angle at the center $\\angle AOC$ is exactly twice the angle at the circumference $\\angle ABC$.",
            "For Part (b)(i), find the midpoint of the chord $AC$: $$K = \\left(\\dfrac{8+(-8)}{2}, \\dfrac{6+6}{2}\right) = (0, 6)$$",
            "Since the midpoint of $AC$ lies on the line $x = 0$ (the $y$-axis), the chord $AC$ is bisected by the $y$-axis.",
            "For Part (b)(ii), calculate the distance squared from point $D(3, -9)$ to the center $O(0, 0)$: $$OD^2 = 3^2 + (-9)^2 = 9 + 81 = 90$$",
            "Since the distance squared $$90 < R^2 = 100$$, the distance from the point to the center of the circle is less than the radius. Thus, the point $D$ lies inside the circle.",
            "Final Answer: $$\\text{Part (b)(i): Midpoint is (0, 6) which lies on the } y\\text{-axis},\\quad \\text{Part (b)(ii): Inside the circle}$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Part (b)(i): Midpoint is (0, 6) which lies on the } y\\text{-axis},\\quad \\text{Part (b)(ii): On the circle}$$",
                "feedback": "In Part (b)(ii), you probably miscalculated the distance or confused the radius squared ($100$) with the coordinate values. Since $OD^2 = 90 < 100$, the point must lie inside the circle."
            },
            {
                "ans": "$$\\text{Part (b)(i): Midpoint is (0, 6) which lies on the } y\\text{-axis},\\quad \\text{Part (b)(ii): Outside the circle}$$",
                "feedback": "In Part (b)(ii), the distance squared to the origin is $3^2 + (-9)^2 = 90$. Because this is less than the radius squared ($100$), the point lies inside the circle, not outside."
            },
            {
                "ans": "$$\\text{Part (b)(i): Gradient is zero},\\quad \\text{Part (b)(ii): Inside the circle}$$",
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
        "major_area": "Coordinate geometry",
        "topic": "Circles",
        "subtopic": [
            "Equations of Circles",
            "Cyclic Quadrilaterals"
        ],
        "img": false,
        "question": "Four points lie on a circle centered at the origin: $A(-3, 4)$, $B(3, 4)$, $C(4, -3)$, and $D(-4, -3)$.<br><br>(a) Show that the opposite interior angles of the cyclic quadrilateral $ABCD$ sum to $180^\\circ$ (i.e. show that $\\angle ADC + \\angle ABC = 180^\\circ$).<br><br>(b) (i) Explain why the center of the circle on which $A, B, C, D$ lie must be the origin $(0, 0)$.<br>(ii) Determine whether the point $E(-4, 4)$ lies inside the circle, on the circle, or outside the circle. Fully justify your answer.",
        "steps": [
            "For Part (a), calculate the side lengths of triangle $ADC$ to find angle $\\angle ADC$: $$DA = \\sqrt{(-3-(-4))^2 + (4-(-3))^2} = \\sqrt{50},\\ DC = \\sqrt{(4-(-4))^2 + (-3-(-3))^2} = 8$$, and $$AC = \\sqrt{(4-(-3))^2 + (-3-4)^2} = \\sqrt{98}$$",
            "Apply the Cosine Rule to find $\\angle ADC$: $$98 = 50 + 64 - 2(\\sqrt{50})(8)\\cos(\\angle ADC) \\implies 98 = 114 - 16\\sqrt{50}\\cos(\\angle ADC) \\implies \\cos(\\angle ADC) = \\dfrac{1}{\\sqrt{50}} \\implies \\angle ADC \\approx 81.87^\\circ$$",
            "Next, calculate the side lengths of triangle $ABC$ to find angle $\\angle ABC$: $$BA = \\sqrt{(-3-3)^2 + (4-4)^2} = 6$$ and $$BC = \\sqrt{(4-3)^2 + (-3-4)^2} = \\sqrt{50}$$, with $$AC = \\sqrt{98}$$",
            "Apply the Cosine Rule to find $\\angle ABC$: $$98 = 36 + 50 - 2(6)(\\sqrt{50})\\cos(\\angle ABC) \\implies 98 = 86 - 12\\sqrt{50}\\cos(\\angle ABC) \\implies \\cos(\\angle ABC) = -\\dfrac{1}{\\sqrt{50}} \\implies \\angle ABC \\approx 98.13^\\circ$$",
            "Sum the opposite interior angles: $$\\angle ADC + \\angle ABC \\approx 81.87^\\circ + 98.13^\\circ = 180^\\circ$$, proving they are supplementary.",
            "For Part (b)(i), calculate the distance from each of the four points to the origin: $$OA^2 = OB^2 = OC^2 = OD^2 = 3^2 + 4^2 = 25 \\implies OA = OB = OC = OD = 5$$",
            "Since a circle is defined as the set of points equidistant from a fixed center, and all four points are at a distance of $5$ from $(0, 0)$, the origin must be the center of the circle.",
            "For Part (b)(ii), calculate the distance squared from point $E(-4, 4)$ to the center $(0, 0)$: $$OE^2 = (-4)^2 + 4^2 = 16 + 16 = 32$$",
            "Since the distance squared $$32 > R^2 = 25$$, the distance from the point to the center of the circle is greater than the radius. Thus, the point $E$ lies outside the circle.",
            "Final Answer: $$\\text{Part (b)(i): All points are distance } 5 \\text{ from (0, 0)},\\quad \\text{Part (b)(ii): Outside the circle}$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Part (b)(i): All points are distance } 5 \\text{ from (0, 0)},\\quad \\text{Part (b)(ii): Inside the circle}$$",
                "feedback": "In Part (b)(ii), you probably miscalculated the distance. The distance squared from $E$ to $(0,0)$ is $32$. Since $32 > R^2 = 25$, the point lies outside the circle, not inside."
            },
            {
                "ans": "$$\\text{Part (b)(i): All points are distance } 5 \\text{ from (0, 0)},\\quad \\text{Part (b)(ii): On the circle}$$",
                "feedback": "In Part (b)(ii), the distance squared from $E(-4,4)$ is $(-4)^2 + 4^2 = 32$. Since this is strictly greater than the radius squared ($25$), the point must lie outside the circle."
            },
            {
                "ans": "$$\\text{Part (b)(i): The midpoint of BD is (0, 0)},\\quad \\text{Part (b)(ii): Outside the circle}$$",
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
        "major_area": "Coordinate geometry",
        "topic": "Circles",
        "subtopic": [
            "Equations of Circles",
            "Perpendicular Bisectors"
        ],
        "img": false,
        "question": "A circle has center $M(1, 1)$ and radius $R = 5$. A chord $AB$ is drawn on the circle with endpoints $A(-2, 5)$ and $B(5, 4)$.<br><br>(a) Show that the perpendicular bisector of the chord $AB$ passes through the center of the circle $M(1, 1)$.<br><br>(b) (i) Calculate the length of the chord $AB$ and the perpendicular distance from the center $M$ to the chord $AB$, using these to verify the right-angled triangle relation: $R^2 = d^2 + \\left(\\dfrac{AB}{2}\\right)^2$.<br>(ii) Determine whether the point $D(4, -2)$ lies inside the circle, on the circle, or outside the circle. Fully justify your answer.",
        "steps": [
            "For Part (a), find the midpoint of the chord $AB$: $$K = \\left(\\dfrac{-2+5}{2}, \\dfrac{5+4}{2}\right) = (1.5, 4.5)$$",
            "Calculate the gradient of the chord $AB$: $$m_{AB} = \\dfrac{4-5}{5 - (-2)} = -\\dfrac{1}{7}$$",
            "The perpendicular bisector must have a gradient of $$m_{\\perp} = 7$$. Find its equation: $$y - 4.5 = 7(x - 1.5)$$",
            "Substitute the center $M(1, 1)$ into this line equation to verify: $$1 - 4.5 = 7(1 - 1.5) \\implies -3.5 = -3.5$$. Since the coordinates satisfy the line, the perpendicular bisector passes through $M$.",
            "For Part (b)(i), calculate the length of the chord $AB$: $$AB = \\sqrt{(5 - (-2))^2 + (4-5)^2} = \\sqrt{7^2 + (-1)^2} = \\sqrt{50} \\implies \\left(\\dfrac{AB}{2}\\right)^2 = \\dfrac{50}{4} = 12.5$$",
            "Next, find the perpendicular distance from $M(1, 1)$ to the line $x + 7y - 33 = 0$ (the line $AB$): $$d = \\dfrac{|1 + 7(1) - 33|}{\\sqrt{1^2 + 7^2}} = \\dfrac{25}{\\sqrt{50}} \\implies d^2 = \\dfrac{625}{50} = 12.5$$",
            "Sum the squares to verify the relation: $$d^2 + \\left(\\dfrac{AB}{2}\\right)^2 = 12.5 + 12.5 = 25 = R^2$$. The relation is verified.",
            "For Part (b)(ii), calculate the distance squared from point $D(4, -2)$ to the center $M(1, 1)$: $$MD^2 = (4-1)^2 + (-2-1)^2 = 3^2 + (-3)^2 = 18$$",
            "Since the distance squared $$18 < R^2 = 25$$, the distance from the point to the center of the circle is less than the radius. Thus, the point $D$ lies inside the circle.",
            "Final Answer: $$\\text{Part (b)(i): } d^2 + (AB/2)^2 = 12.5 + 12.5 = 25 = R^2 \\text{ is verified},\\quad \\text{Part (b)(ii): Inside the circle}$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Part (b)(i): } d^2 + (AB/2)^2 = 12.5 + 12.5 = 25 = R^2 \\text{ is verified},\\quad \\text{Part (b)(ii): On the circle}$$",
                "feedback": "In Part (b)(ii), you probably miscalculated the distance to the center. Since $MD^2 = 18 < R^2 = 25$, the distance from $D$ to the center is strictly less than the radius of $5$, meaning it lies inside the circle, not on it."
            },
            {
                "ans": "$$\\text{Part (b)(i): } d^2 + (AB/2)^2 = 12.5 + 12.5 = 25 = R^2 \\text{ is verified},\\quad \\text{Part (b)(ii): Outside the circle}$$",
                "feedback": "In Part (b)(ii), the distance squared to the center $M(1,1)$ is $(4-1)^2 + (-2-1)^2 = 18$. Since this is less than the radius squared ($25$), the point lies inside the circle, not outside."
            },
            {
                "ans": "$$\\text{Part (b)(i): Gradient of bisector is -7},\\quad \\text{Part (b)(ii): Inside the circle}$$",
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
        "major_area": "Coordinate geometry",
        "topic": "Circles",
        "subtopic": [
            "Equations of Circles",
            "Tangents and Chords"
        ],
        "img": false,
        "question": "A circle has center $O(0, 0)$ and radius $R = 6$. A tangent is drawn to the circle from an external point $P(10, 0)$, touching the circle at $T(3.6, 4.8)$.<br><br>(a) Show that the tangent line $PT$ is perpendicular to the radius $OT$.<br><br>(b) (i) Find the cosine of angle $POT$ using the side lengths of triangle $OPT$, and hence use the Cosine Rule on triangle $OPT$ to show that $PT = 8$.<br><br>(b) (ii) Determine whether the point $D(5, -4)$ lies inside the circle, on the circle, or outside the circle. Fully justify your answer.",
        "steps": [
            "For Part (a), calculate the gradients of the radius $OT$ and the tangent line $PT$: $$m_{OT} = \\dfrac{4.8-0}{3.6-0} = \\dfrac{4}{3}$$ and $$m_{PT} = \\dfrac{4.8-0}{3.6-10} = \\dfrac{4.8}{-6.4} = -\\dfrac{3}{4}$$",
            "Since the product of their gradients is $$m_{OT} \\times m_{PT} = \\dfrac{4}{3} \\times \\left(-\\dfrac{3}{4}\\right) = -1$$, the radius $OT$ and the tangent $PT$ are perpendicular.",
            "For Part (b)(i), calculate the side lengths of triangle $OPT$: $$OT = 6,\\ OP = 10$$, and $$PT = \\sqrt{(3.6 - 10)^2 + 4.8^2} = \\sqrt{(-6.4)^2 + 23.04} = \\sqrt{40.96 + 23.04} = 8$$",
            "Apply the Cosine Rule to find $\\cos(POT)$: $$PT^2 = OP^2 + OT^2 - 2(OP)(OT)\\cos(POT) \\implies 8^2 = 10^2 + 6^2 - 2(10)(6)\\cos(POT)$$",
            "Simplify to find the cosine value: $$64 = 100 + 36 - 120\\cos(POT) \\implies 64 = 136 - 120\\cos(POT) \\implies \\cos(POT) = 0.6$$",
            "Using the Cosine Rule with $\\cos(POT) = 0.6$ verifies the length of the tangent: $$PT = \\sqrt{10^2 + 6^2 - 2(10)(6)(0.6)} = \\sqrt{64} = 8$$, as required.",
            "For Part (b)(ii), calculate the distance squared from $D(5, -4)$ to the center $O(0, 0)$: $$OD^2 = 5^2 + (-4)^2 = 25 + 16 = 41$$",
            "Since the distance squared $$41 > R^2 = 36$$, the distance from the point to the center of the circle is greater than the radius. Thus, the point $D$ lies outside the circle.",
            "Final Answer: $$\\text{Part (b)(i): } PT = 8 \\text{ is verified using the Cosine Rule},\\quad \\text{Part (b)(ii): Outside the circle}$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Part (b)(i): } PT^2 = 100 + 36 - 72 = 64 \\implies PT = 8,\\quad \\text{Part (b)(ii): Inside the circle}$$",
                "feedback": "In Part (b)(ii), you probably calculated the distance from the center incorrectly. The distance squared from $D(5,-4)$ to the origin is $41$. Since $41 > R^2 = 36$, the point must lie outside the circle."
            },
            {
                "ans": "$$\\text{Part (b)(i): } PT^2 = 100 + 36 - 72 = 64 \\implies PT = 8,\\quad \\text{Part (b)(ii): On the circle}$$",
                "feedback": "In Part (b)(ii), the distance squared to the origin is $5^2 + (-4)^2 = 41$. Since this is strictly greater than the radius squared ($36$), the point lies outside the circle, not on it."
            },
            {
                "ans": "$$\\text{Part (b)(i): } \\cos(POT) = 0.8,\\quad \\text{Part (b)(ii): Outside the circle}$$",
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
        "major_area": "Calculus",
        "topic": "Numerical methods",
        "subtopic": [
            "Newton-Raphson Method",
            "Radian Measure"
        ],
        "img": "images/p1/004106.png",
        "question": "The diagram shows a sector of a circle $OAB$. $C$ is the midpoint of $OB$. Angle $AOB$ is $\\theta$ radians.<br><br>(a) Given that the area of the triangle $OAC$ is equal to one-third of the area of the sector $OAB$, show that $\\theta = 1.5\\sin\\theta$.<br><br>(b) Use the Newton-Raphson method with $\\theta_1 = \\pi$ to find $\\theta_3$ as an approximation for $\\theta$. Give your answer correct to five decimal places.<br><br>(c) Given that the actual value of $\\theta = 1.49579$ to five decimal places, find an estimate for the percentage error in the approximation found in part (b).",
        "steps": [
            "First, state the formulas for both areas in terms of $r$ and $\\theta$. The area of the sector $OAB$ is: $$\\text{Area of sector } OAB = \\dfrac{1}{2}r^2\\theta$$",
            "Since $C$ is the midpoint of $OB$, $OC = \\dfrac{1}{2}r$. The area of triangle $OAC$ is: $$\\text{Area of triangle } OAC = \\dfrac{1}{2}(r)\\left(\\dfrac{1}{2}r\\right)\\sin\\theta = \\dfrac{r^2}{4}\\sin\\theta$$",
            "Next, set the area of the triangle equal to one-third of the area of the sector: $$\\dfrac{r^2}{4}\\sin\\theta = \\dfrac{1}{3} \\left(\\dfrac{1}{2}r^2\\theta\\right) \\implies \\dfrac{r^2}{4}\\sin\\theta = \\dfrac{r^2}{6}\\theta$$",
            "Divide both sides by $r^2$ (since $r > 0$) to eliminate the radius variable: $$\\dfrac{1}{4}\\sin\\theta = \\dfrac{1}{6}\\theta$$",
            "Multiply both sides by $6$ to isolate $\\theta$, and simplify the resulting fraction to reach the target equation: $$\\theta = \\dfrac{6}{4}\\sin\\theta \\implies \\theta = 1.5\\sin\\theta$$",
            "For Part (b), define $f(\\theta) = \\theta - 1.5\\sin\\theta$ and its derivative $f'(\\theta) = 1 - 1.5\\cos\\theta$. Use the Newton-Raphson formula: $$\\theta_{n+1} = \\theta_n - \\dfrac{\\theta_n - 1.5\\sin\\theta_n}{1 - 1.5\\cos\\theta_n}$$",
            "With $\\theta_1 = \\pi$, calculate the iterations. In the first iteration: $$\\theta_2 = \\pi - \\dfrac{\\pi - 1.5\\sin\\pi}{1 - 1.5\\cos\\pi} = \\pi - \\dfrac{\\pi}{1 - 1.5(-1)} = \\pi - \\dfrac{\\pi}{2.5} = 0.6\\pi \\approx 1.88496$$",
            "In the second iteration: $$\\theta_3 = 1.88496 - \\dfrac{1.88496 - 1.5\\sin(1.88496)}{1 - 1.5\\cos(1.88496)} \\approx 1.57176$$",
            "For Part (c), calculate the percentage error by comparing the approximation $\\theta_3 \\approx 1.57176$ with the actual root $\\theta = 1.49579$: $$\\text{Percentage Error} = \\dfrac{|1.57176 - 1.49579|}{1.49579} \\times 100 \\approx 5.08\\%$$",
            "Final Answer: $$\\text{Part (b): } 1.57176,\\quad \\text{Part (c): } 5.08\\%$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Part (b): } 1.57176,\\quad \\text{Part (c): } 5.06\\%$$",
                "feedback": "This error probably results from a minor rounding slip during your multi-digit division steps. Ensure you carry at least six decimal places in your intermediate steps before rounding to five."
            },
            {
                "ans": "$$\\text{Part (b): } 1.57156,\\quad \\text{Part (c): } 5.06\\%$$",
                "feedback": "You probably rounded $\\theta_2$ prematurely, or made a subtraction error in your second iteration. Double-check your values for $f(\\theta_2)$ and $f'(\\theta_2)$ on your page."
            },
            {
                "ans": "$$\\text{Part (b): } 1.88496,\\quad \\text{Part (c): } 26.02\\%$$",
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
        "major_area": "Calculus",
        "topic": "Numerical methods",
        "subtopic": [
            "Newton-Raphson Method",
            "Radian Measure"
        ],
        "img": "images/p1/004107.png",
        "question": "The diagram shows a sector of a circle $OAB$ with radius $r$ and angle $\\theta$ radians. A chord $AB$ divides the sector into a segment and a triangle $OAB$.<br><br>(a) Given that the area of the segment is equal to one-third of the area of the triangle $OAB$, show that $4\\sin\\theta = 3\\theta$.<br><br>(b) Use the Newton-Raphson method with $\\theta_1 = 1.5$ to find $\\theta_3$ as an approximation for $\\theta$. Give your answer correct to five decimal places.<br><br>(c) Given that the actual value of $\\theta = 1.27570$ to five decimal places, find an estimate for the percentage error in the approximation found in part (b).",
        "steps": [
            "First, state the formulas for both areas in terms of $r$ and $\\theta$. The area of the triangle $OAB$ is: $$\\text{Area of triangle } OAB = \\dfrac{1}{2}r^2\\sin\\theta$$",
            "The area of the sector $OAB$ is: $$\\text{Area of sector } OAB = \\dfrac{1}{2}r^2\\theta$$",
            "Find the area of the segment by subtracting the area of the triangle from the area of the sector: $$\\text{Area of segment} = \\dfrac{1}{2}r^2\\theta - \\dfrac{1}{2}r^2\\sin\\theta = \\dfrac{1}{2}r^2(\\theta - \\sin\\theta)$$",
            "Set the segment area equal to one-third of the triangle area: $$\\dfrac{1}{2}r^2(\\theta - \\sin\\theta) = \\dfrac{1}{3}\\left(\\dfrac{1}{2}r^2\\sin\\theta\\right)$$",
            "Divide both sides by $\\dfrac{1}{2}r^2$ to simplify: $$\\theta - \\sin\\theta = \\dfrac{1}{3}\\sin\\theta$$",
            "Add $\\sin\\theta$ to both sides and multiply by $3$ to obtain the target equation: $$\\theta = \\dfrac{4}{3}\\sin\\theta \\implies 3\\theta = 4\\sin\\theta \\implies 4\\sin\\theta = 3\\theta$$",
            "For Part (b), define $f(\\theta) = 3\\theta - 4\\sin\\theta$ and its derivative $f'(\\theta) = 3 - 4\\cos\\theta$. Use the Newton-Raphson formula: $$\\theta_{n+1} = \\theta_n - \\dfrac{3\\theta_n - 4\\sin\\theta_n}{3 - 4\\cos\\theta_n}$$",
            "With $\\theta_1 = 1.5$, calculate the iterations. In the first iteration: $$\\theta_2 = 1.5 - \\dfrac{3(1.5) - 4\\sin(1.5)}{3 - 4\\cos(1.5)} \\approx 1.31229$$",
            "In the second iteration: $$\\theta_3 = 1.31229 - \\dfrac{3(1.31229) - 4\\sin(1.31229)}{3 - 4\\cos(1.31229)} \\approx 1.27741$$",
            "For Part (c), calculate the percentage error of $\\theta_3 \\approx 1.27741$ against the true root $\\theta = 1.27570$: $$\\text{Percentage Error} = \\dfrac{|1.27741 - 1.27570|}{1.27570} \\times 100 \\approx 0.13\\%$$",
            "Final Answer: $$\\text{Part (b): } 1.27741,\\quad \\text{Part (c): } 0.13\\%$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Part (b): } 1.27510,\\quad \\text{Part (c): } 0.05\\%$$",
                "feedback": "This incorrect option probably results from a minor rounding slip during your second iteration. Double-check your values for $f(1.31229)$ and $f'(1.31229)$ on your page."
            },
            {
                "ans": "$$\\text{Part (b): } 1.27741,\\quad \\text{Part (c): } 0.05\\%$$",
                "feedback": "Your value for $\\theta_3$ is correct, but your percentage error calculation has a minor rounding slip. It should round to $0.13\\%$, not $0.05\\%$."
            },
            {
                "ans": "$$\\text{Part (b): } 1.31229,\\quad \\text{Part (c): } 2.87\\%$$",
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
        "major_area": "Calculus",
        "topic": "Numerical methods",
        "subtopic": [
            "Newton-Raphson Method",
            "Radian Measure"
        ],
        "img": "images/p1/004108.png",
        "question": "The diagram shows a sector of a circle $OAB$ with radius $r$ and angle $\\theta$ radians. A line is drawn from $A$ perpendicular to $OB$, meeting $OB$ at $C$ to form a right-angled triangle $OAC$.<br><br>(a) Given that the area of the right-angled triangle $OAC$ is equal to three-tenths of the area of the sector $OAB$, show that $5\\sin(2\\theta) = 3\\theta$.<br><br>(b) Use the Newton-Raphson method with $\\theta_1 = 1.0$ to find $\\theta_3$ as an approximation for $\\theta$. Give your answer correct to five decimal places.<br><br>(c) Given that the actual value of $\\theta = 1.17243$ to five decimal places, find an estimate for the percentage error in the approximation found in part (b).",
        "steps": [
            "First, state the formulas for the areas in terms of $r$ and $\\theta$. In the right-angled triangle $OAC$, the sides are $OC = r\\cos\\theta$ and $AC = r\\sin\\theta$. The area of this triangle is: $$\\text{Area of triangle } OAC = \\dfrac{1}{2}r^2\\sin\\theta\\cos\\theta = \\dfrac{1}{4}r^2\\sin(2\\theta)$$",
            "The area of the sector $OAB$ is: $$\\text{Area of sector } OAB = \\dfrac{1}{2}r^2\\theta$$",
            "Set the triangle area equal to three-tenths of the sector area: $$\\dfrac{1}{4}r^2\\sin(2\\theta) = \\dfrac{3}{10} \\left(\\dfrac{1}{2}r^2\\theta\\right) \\implies \\dfrac{1}{4}r^2\\sin(2\\theta) = \\dfrac{3}{20}r^2\\theta$$",
            "Divide both sides by $r^2$ and multiply by $20$ to clear the fractions and obtain the target equation: $$\\dfrac{1}{4}\\sin(2\\theta) = \\dfrac{3}{20}\\theta \\implies 5\\sin(2\\theta) = 3\\theta$$",
            "For Part (b), define $f(\\theta) = 3\\theta - 5\\sin(2\\theta)$ and its derivative $f'(\\theta) = 3 - 10\\cos(2\\theta)$. Use the Newton-Raphson formula: $$\\theta_{n+1} = \\theta_n - \\dfrac{3\\theta_n - 5\\sin(2\\theta_n)}{3 - 10\\cos(2\\theta_n)}$$",
            "With $\\theta_1 = 1.0$, calculate the iterations. In the first iteration: $$\\theta_2 = 1.0 - \\dfrac{3(1.0) - 5\\sin(2)}{3 - 10\\cos(2)} \\approx 1.21594$$",
            "In the second iteration: $$\\theta_3 = 1.21594 - \\dfrac{3(1.21594) - 5\\sin(2.43188)}{3 - 10\\cos(2.43188)} \\approx 1.17911$$",
            "For Part (c), calculate the percentage error of $\\theta_3 \\approx 1.17911$ against the true root $\\theta = 1.17243$: $$\\text{Percentage Error} = \\dfrac{|1.17911 - 1.17243|}{1.17243} \\times 100 \\approx 0.57\\%$$",
            "Final Answer: $$\\text{Part (b): } 1.17911,\\quad \\text{Part (c): } 0.57\\%$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Part (b): } 1.17880,\\quad \\text{Part (c): } 0.54\\%$$",
                "feedback": "This incorrect option probably results from a minor rounding slip during your second iteration. Double-check your values for $f(1.21594)$ and $f'(1.21594)$ on your page."
            },
            {
                "ans": "$$\\text{Part (b): } 1.17911,\\quad \\text{Part (c): } 0.54\\%$$",
                "feedback": "Your value for $\\theta_3$ is correct, but your percentage error calculation has a minor rounding slip. It should round to $0.57\\%$, not $0.54\\%$."
            },
            {
                "ans": "$$\\text{Part (b): } 1.21594,\\quad \\text{Part (c): } 3.71\\%$$",
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
        "major_area": "Calculus",
        "topic": "Numerical methods",
        "subtopic": [
            "Newton-Raphson Method",
            "Radian Measure"
        ],
        "img": "images/p1/004109.png",
        "question": "The diagram shows two concentric sectors of circles $OAB$ and $OCD$ sharing the same angle $\\theta$ radians. The larger sector $OAB$ has radius $r$, and the smaller sector $OCD$ has radius $R = 0.6r$.<br><br>(a) Given that the area of the smaller sector $OCD$ is equal to $\\frac{9}{25}$ of the area of the triangle $OAB$ formed inside the larger sector, show that $2\\theta = 5\\sin\\theta$.<br><br>(b) Use the Newton-Raphson method with $\\theta_1 = 2.5$ to find $\\theta_3$ as an approximation for $\\theta$. Give your answer correct to five decimal places.<br><br>(c) Given that the actual value of $\\theta = 2.12463$ to five decimal places, find an estimate for the percentage error in the approximation found in part (b).",
        "steps": [
            "First, state the formulas for both areas in terms of $r$ and $\\theta$. The area of the triangle $OAB$ inside the larger sector is: $$\\text{Area of triangle } OAB = \\dfrac{1}{2}r^2\\sin\\theta$$",
            "Since the smaller sector has a radius of $R = 0.6r$, its area is: $$\\text{Area of sector } OCD = \\dfrac{1}{2}(0.6r)^2\\theta = \\dfrac{1}{2}(0.36r^2)\\theta = 0.18r^2\\theta$$",
            "Set the smaller sector area equal to nine-tenths of the area of the triangle $OAB$: $$0.18r^2\\theta = \\dfrac{9}{10}\\left(\\dfrac{1}{2}r^2\\sin\\theta\\right) \\implies 0.18r^2\\theta = 0.45r^2\\sin\\theta$$",
            "Divide both sides by $r^2$ and simplify the decimal ratio to obtain the target equation: $$0.18\\theta = 0.45\\sin\\theta \\implies \\theta = \\dfrac{0.45}{0.18}\\sin\\theta \\implies \\theta = 2.5\\sin\\theta \\implies 2\\theta = 5\\sin\\theta$$",
            "For Part (b), define $f(\\theta) = 2\\theta - 5\\sin\\theta$ and its derivative $f'(\\theta) = 2 - 5\\cos\\theta$. Use the Newton-Raphson formula: $$\\theta_{n+1} = \\theta_n - \\dfrac{2\\theta_n - 5\\sin\\theta_n}{2 - 5\\cos\\theta_n}$$",
            "With $\\theta_1 = 2.5$, calculate the iterations. In the first iteration: $$\\theta_2 = 2.5 - \\dfrac{2(2.5) - 5\\sin(2.5)}{2 - 5\\cos(2.5)} \\approx 2.16571$$",
            "In the second iteration: $$\\theta_3 = 2.16571 - \\dfrac{2(2.16571) - 5\\sin(2.16571)}{2 - 5\\cos(2.16571)} \\approx 2.12654$$",
            "For Part (c), calculate the percentage error of $\\theta_3 \\approx 2.12654$ against the true root $\\theta = 2.12463$: $$\\text{Percentage Error} = \\dfrac{|2.12654 - 2.12463|}{2.12463} \\times 100 \\approx 0.09\\%$$",
            "Final Answer: $$\\text{Part (b): } 2.12654,\\quad \\text{Part (c): } 0.09\\%$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Part (b): } 2.12680,\\quad \\text{Part (c): } 0.10\\%$$",
                "feedback": "This incorrect option probably results from a minor rounding slip during your second iteration. Double-check your values for $f(2.16571)$ and $f'(2.16571)$ on your page."
            },
            {
                "ans": "$$\\text{Part (b): } 2.12654,\\quad \\text{Part (c): } 0.10\\%$$",
                "feedback": "Your value for $\\theta_3$ is correct, but your percentage error calculation has a minor rounding slip. It should round to $0.09\\%$, not $0.10\\%$."
            },
            {
                "ans": "$$\\text{Part (b): } 2.16571,\\quad \\text{Part (c): } 1.93\\%$$",
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
        "major_area": "Calculus",
        "topic": "Numerical methods",
        "subtopic": [
            "Newton-Raphson Method",
            "Radian Measure"
        ],
        "img": "images/p1/004110.png",
        "question": "The diagram shows a sector of a circle $OAB$ with radius $r$ and angle $\\theta$ radians. A point $C$ lies on $OB$ such that $OC = \\frac{1}{3}r$.<br><br>(a) Given that the area of the triangle $OAC$ is equal to one-fifth of the area of the sector $OAB$, show that $3\\theta = 5\\sin\\theta$.<br><br>(b) Use the Newton-Raphson method with $\\theta_1 = 2.0$ to find $\\theta_3$ as an approximation for $\\theta$. Give your answer correct to five decimal places.<br><br>(c) Given that the actual value of $\\theta = 1.65215$ to five decimal places, find an estimate for the percentage error in the approximation found in part (b).",
        "steps": [
            "First, state the formulas for both areas in terms of $r$ and $\\theta$. The area of the sector $OAB$ is: $$\\text{Area of sector } OAB = \\dfrac{1}{2}r^2\\theta$$",
            "Since $OC = \\dfrac{1}{3}r$, the area of the triangle $OAC$ is: $$\\text{Area of triangle } OAC = \\dfrac{1}{2}(r)\\left(\\dfrac{1}{3}r\\right)\\sin\\theta = \\dfrac{r^2}{6}\\sin\\theta$$",
            "Set the triangle area equal to one-fifth of the sector area: $$\\dfrac{r^2}{6}\\sin\\theta = \\dfrac{1}{5}\\left(\\dfrac{1}{2}r^2\\theta\\right) \\implies \\dfrac{r^2}{6}\\sin\\theta = \\dfrac{r^2}{10}\\theta$$",
            "Divide both sides by $r^2$ and multiply by $30$ to clear the fractions and obtain the target equation: $$\\dfrac{1}{6}\\sin\\theta = \\dfrac{1}{10}\\theta \\implies 5\\sin\\theta = 3\\theta \\implies 3\\theta = 5\\sin\\theta$$",
            "For Part (b), define $f(\\theta) = 3\\theta - 5\\sin\\theta$ and its derivative $f'(\\theta) = 3 - 5\\cos\\theta$. Use the Newton-Raphson formula: $$\\theta_{n+1} = \\theta_n - \\dfrac{3\\theta_n - 5\\sin\\theta_n}{3 - 5\\cos\\theta_n}$$",
            "With $\\theta_1 = 2.0$, calculate the iterations. In the first iteration: $$\\theta_2 = 2.0 - \\dfrac{3(2.0) - 5\\sin(2.0)}{3 - 5\\cos(2.0)} \\approx 1.71392$$",
            "In the second iteration: $$\\theta_3 = 1.71392 - \\dfrac{3(1.71392) - 5\\sin(1.71392)}{3 - 5\\cos(1.71392)} \\approx 1.66164$$",
            "For Part (c), calculate the percentage error of $\\theta_3 \\approx 1.66164$ against the true root $\\theta = 1.65215$: $$\\text{Percentage Error} = \\dfrac{|1.66164 - 1.65215|}{1.65215} \\times 100 \\approx 0.57\\%$$",
            "Final Answer: $$\\text{Part (b): } 1.66164,\\quad \\text{Part (c): } 0.57\\%$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Part (b): } 1.66120,\\quad \\text{Part (c): } 0.55\\%$$",
                "feedback": "This incorrect option probably results from a minor rounding slip during your second iteration. Double-check your values for $f(1.71392)$ and $f'(1.71392)$ on your page."
            },
            {
                "ans": "$$\\text{Part (b): } 1.66164,\\quad \\text{Part (c): } 0.55\\%$$",
                "feedback": "Your value for $\\theta_3$ is correct, but your percentage error calculation has a minor rounding slip. It should round to $0.57\\%$, not $0.55\\%$."
            },
            {
                "ans": "$$\\text{Part (b): } 1.71392,\\quad \\text{Part (c): } 3.74\\%$$",
                "feedback": "You have calculated $\\theta_2$ instead of $\\theta_3$. The question requires two full applications of the Newton-Raphson formula to find $\\theta_3$ starting from $\\theta_1$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Intermediate Rounding Caution",
            "content": "When evaluating multi-step numerical methods like Newton-Raphson, rounding your intermediate values (like $\\theta_2$) too early is probably the easiest way to lose precision in your final answer. Always keep the full unrounded value stored in your calculator's memory."
        }
    }
];