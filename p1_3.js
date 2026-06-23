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
            "Apply the Cosine Rule to find $\\angle AOC$: $$16^2 = 10^2 + 10^2 - 2(10)(10)\\cos(\\angle AOC) \\implies 256 = 200 - 200\\cos(\\angle AOC)$$<br>$$\\implies \\cos(\\angle AOC) = -0.28 \\implies \\angle AOC \\approx 106.26^\\circ$$",
            "Next, calculate the side lengths of triangle $ABC$ to find $\\angle ABC$: $$BA = \\sqrt{(8-0)^2 + (6 - (-10))^2} = \\sqrt{320}$$ and $$BC = \\sqrt{(-8-0)^2 + (6 - (-10))^2} = \\sqrt{320}$$, with $$AC = 16$$",
            "Apply the Cosine Rule on triangle $ABC$: $$16^2 = 320 + 320 - 2(\\sqrt{320})(\\sqrt{320})\\cos(\\angle ABC) \\implies 256 = 640 - 640\\cos(\\angle ABC))$$<br>$$ \\implies \\cos(\\angle ABC) = 0.6 \\implies \\angle ABC \\approx 53.13^\\circ$$",
            "Since $$2 \\times 53.13^\\circ = 106.26^\\circ$$, the angle at the center $\\angle AOC$ is exactly twice the angle at the circumference $\\angle ABC$.",
            "For Part (b)(i), find the midpoint of the chord $AC$: $$K = \\left(\\dfrac{8+(-8)}{2}, \\dfrac{6+6}{2}\\right) = (0, 6)$$",
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
            "Apply the Cosine Rule to find $\\angle ADC$: $$98 = 50 + 64 - 2(\\sqrt{50})(8)\\cos(\\angle ADC) \\implies 98 = 114 - 16\\sqrt{50}\\cos(\\angle ADC)$$<br>$$ \\implies \\cos(\\angle ADC) = \\dfrac{1}{\\sqrt{50}} \\implies \\angle ADC \\approx 81.87^\\circ$$",
            "Next, calculate the side lengths of triangle $ABC$ to find angle $\\angle ABC$: $$BA = \\sqrt{(-3-3)^2 + (4-4)^2} = 6$$ and $$BC = \\sqrt{(4-3)^2 + (-3-4)^2} = \\sqrt{50}$$, with $$AC = \\sqrt{98}$$",
            "Apply the Cosine Rule to find $\\angle ABC$: $$98 = 36 + 50 - 2(6)(\\sqrt{50})\\cos(\\angle ABC) \\implies 98 = 86 - 12\\sqrt{50}\\cos(\\angle ABC)$$<br>$$ \\implies \\cos(\\angle ABC) = -\\dfrac{1}{\\sqrt{50}} \\implies \\angle ABC \\approx 98.13^\\circ$$",
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
            "For Part (a), find the midpoint of the chord $AB$: $$K = \\left(\\dfrac{-2+5}{2}, \\dfrac{5+4}{2}\\right) = (1.5, 4.5)$$",
            "Calculate the gradient of the chord $AB$: $$m_{AB} = \\dfrac{4-5}{5 - (-2)} = -\\dfrac{1}{7}$$",
            "The perpendicular bisector must have a gradient of $$m_{\\perp} = 7$$. Find its equation: $$y - 4.5 = 7(x - 1.5)$$",
            "Substitute the center $M(1, 1)$ into this line equation to verify: $$1 - 4.5 = 7(1 - 1.5) \\implies -3.5 = -3.5$$. Since the coordinates satisfy the line, the perpendicular bisector passes through $M$.",
            "For Part (b)(i), calculate the length of the chord $AB$: $$AB = \\sqrt{(5 - (-2))^2 + (4-5)^2} = \\sqrt{7^2 + (-1)^2} = \\sqrt{50}$$<br>$$ \\implies \\left(\\dfrac{AB}{2}\\right)^2 = \\dfrac{50}{4} = 12.5$$",
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
    },
    {
        "id": "004111",
        "board": "AQA",
        "major_area": "Sequences and series",
        "topic": "Arithmetic progressions",
        "subtopic": [
            "Arithmetic Progressions",
            "Quadratic Equations in Sequences"
        ],
        "img": false,
        "question": "An arithmetic sequence has first term $a$ and common difference $d$.<br><br>The sum of the first 16 terms of the sequence is equal to the square of the sum of the first 4 terms.<br><br>(a) Show that $4a + 30d = 4a^2 + 12ad + 9d^2$.<br><br>(b) Given that the fourth term of the sequence is 10, find the smallest possible value of $a$.",
        "steps": [
            "First, state the formulas for both sums. The sum of the first 16 terms is: $$S_{16} = \\dfrac{16}{2}\\left(2a + 15d\\right) = 8(2a + 15d) = 16a + 120d$$",
            "The sum of the first 4 terms is: $$S_4 = \\dfrac{4}{2}\\left(2a + 3d\\right) = 2(2a + 3d) = 4a + 6d$$",
            "Next, set the sum of the first 16 terms equal to the square of the sum of the first 4 terms: $$16a + 120d = (4a + 6d)^2$$",
            "Expand the perfect square on the right-hand side: $$16a + 120d = 16a^2 + 48ad + 36d^2$$",
            "Divide both sides of the equation by $4$ to reach the target relation: $$4a + 30d = 4a^2 + 12ad + 9d^2$$",
            "For Part (b), state the formula for the fourth term and rearrange for $d$: $$u_4 = a + 3d = 10 \\implies 3d = 10 - a \\implies d = \\dfrac{10-a}{3}$$",
            "Notice that the right-hand side of the Part (a) relation can be factored as a perfect square: $$4a + 30d = (2a + 3d)^2$$",
            "Substitute $3d = 10 - a$ into both sides of the factored equation: $$4a + 10(3d) = (2a + 10 - a)^2 \\implies 4a + 10(10-a) = (a + 10)^2$$",
            "Expand and simplify the resulting quadratic equation: $$4a + 100 - 10a = a^2 + 20a + 100 \\implies 100 - 6a = a^2 + 20a + 100 \\implies a^2 + 26a = 0$$",
            "Factor the quadratic to find the two possible values of $a$: $$a(a + 26) = 0 \\implies a = 0 \\quad \\text{or} \\quad a = -26$$",
            "Comparing the two roots, the smallest possible value of $a$ is $-26$.",
            "Final Answer: $$\\text{Part (b): } a = -26$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Part (b): } a = 0$$",
                "feedback": "You have found the larger of the two possible values of $a$. The question asks for the smallest possible value, which requires you to compare the two roots ($0$ and $-26$) and select $-26$."
            },
            {
                "ans": "$$\\text{Part (b): } a = -10$$",
                "feedback": "This incorrect answer probably arises from forgetting the middle term $48ad$ when expanding $(4a + 6d)^2$. Always write out the expansion of a perfect square step-by-step to prevent this common slip."
            },
            {
                "ans": "$$\\text{Part (b): } a = 26$$",
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
        "major_area": "Sequences and series",
        "topic": "Arithmetic progressions",
        "subtopic": [
            "Arithmetic Progressions",
            "Quadratic Equations in Sequences"
        ],
        "img": false,
        "question": "An arithmetic sequence has first term $a$ and common difference $d$.<br><br>The sum of the first 4 terms of the sequence is equal to the square of the sum of the first 2 terms.<br><br>(a) Show that $4a + 6d = 4a^2 + 4ad + d^2$.<br><br>(b) Given that the second term of the sequence is 3, find the smallest possible value of $a$.",
        "steps": [
            "First, state the formulas for both sums. The sum of the first 4 terms is: $$S_4 = \\dfrac{4}{2}\\left(2a + 3d\\right) = 2(2a + 3d) = 4a + 6d$$",
            "The sum of the first 2 terms is: $$S_2 = \\dfrac{2}{2}\\left(2a + d\\right) = 2a + d$$",
            "Next, set the sum of the first 4 terms equal to the square of the sum of the first 2 terms to reach the target relation: $$4a + 6d = (2a + d)^2 \\implies 4a + 6d = 4a^2 + 4ad + d^2$$",
            "For Part (b), state the formula for the second term and rearrange for $d$: $$u_2 = a + d = 3 \\implies d = 3 - a$$",
            "Notice that the right-hand side of the Part (a) relation can be factored as a perfect square: $$4a + 6d = (2a + d)^2$$",
            "Substitute $d = 3 - a$ into both sides of the factored equation: $$4a + 6(3-a) = (2a + 3 - a)^2 \\implies 4a + 18 - 6a = (a + 3)^2$$",
            "Expand and simplify the resulting quadratic equation: $$18 - 2a = a^2 + 6a + 9 \\implies a^2 + 8a - 9 = 0$$",
            "Factor the quadratic to find the two possible values of $a$: $$(a - 1)(a + 9) = 0 \\implies a = 1 \\quad \\text{or} \\quad a = -9$$",
            "Comparing the two roots, the smallest possible value of $a$ is $-9$.",
            "Final Answer: $$\\text{Part (b): } a = -9$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Part (b): } a = 1$$",
                "feedback": "You have found the larger of the two possible values of $a$. The question asks for the smallest possible value, which requires you to compare the two roots ($1$ and $-9$) and select $-9$."
            },
            {
                "ans": "$$\\text{Part (b): } a = -3$$",
                "feedback": "This error probably arises from forgetting the middle term $4ad$ when expanding $(2a + d)^2$. Double-check your algebraic expansions carefully."
            },
            {
                "ans": "$$\\text{Part (b): } a = 9$$",
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
        "major_area": "Sequences and series",
        "topic": "Arithmetic progressions",
        "subtopic": [
            "Arithmetic Progressions",
            "Quadratic Equations in Sequences"
        ],
        "img": false,
        "question": "An arithmetic sequence has first term $a$ and common difference $d$.<br><br>The sum of the first 8 terms of the sequence is equal to the square of the sum of the first 2 terms.<br><br>(a) Show that $8a + 28d = 4a^2 + 4ad + d^2$.<br><br>(b) Given that the second term of the sequence is 2, find the smallest possible value of $a$.",
        "steps": [
            "First, state the formulas for both sums. The sum of the first 8 terms is: $$S_8 = \\dfrac{8}{2}\\left(2a + 7d\\right) = 4(2a + 7d) = 8a + 28d$$",
            "The sum of the first 2 terms is: $$S_2 = \\dfrac{2}{2}\\left(2a + d\\right) = 2a + d$$",
            "Next, set the sum of the first 8 terms equal to the square of the sum of the first 2 terms to reach the target relation: $$8a + 28d = (2a + d)^2 \\implies 8a + 28d = 4a^2 + 4ad + d^2$$",
            "For Part (b), state the formula for the second term and rearrange for $d$: $$u_2 = a + d = 2 \\implies d = 2 - a$$",
            "Notice that the right-hand side of the Part (a) relation can be factored as a perfect square: $$8a + 28d = (2a + d)^2$$",
            "Substitute $d = 2 - a$ into both sides of the factored equation: $$8a + 28(2-a) = (2a + 2 - a)^2 \\implies 8a + 56 - 28a = (a + 2)^2$$",
            "Expand and simplify the resulting quadratic equation: $$56 - 20a = a^2 + 4a + 4 \\implies a^2 + 24a - 52 = 0$$",
            "Factor the quadratic to find the two possible values of $a$: $$(a - 2)(a + 26) = 0 \\implies a = 2 \\quad \\text{or} \\quad a = -26$$",
            "Comparing the two roots, the smallest possible value of $a$ is $-26$.",
            "Final Answer: $$\\text{Part (b): } a = -26$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Part (b): } a = 2$$",
                "feedback": "You have found the larger of the two possible values of $a$. The question asks for the smallest possible value, which requires you to compare the two roots ($2$ and $-26$) and select $-26$."
            },
            {
                "ans": "$$\\text{Part (b): } a = -12$$",
                "feedback": "This incorrect answer probably arises from forgetting the middle term $4ad$ when expanding $(2a + d)^2$ in Part (a), which leads to an incorrect quadratic in Part (b)."
            },
            {
                "ans": "$$\\text{Part (b): } a = 26$$",
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
        "major_area": "Sequences and series",
        "topic": "Arithmetic progressions",
        "subtopic": [
            "Arithmetic Progressions",
            "Quadratic Equations in Sequences"
        ],
        "img": false,
        "question": "An arithmetic sequence has first term $a$ and common difference $d$.<br><br>The sum of the first 9 terms of the sequence is equal to the square of the sum of the first 3 terms.<br><br>(a) Show that $a + 4d = a^2 + 2ad + d^2$.<br><br>(b) Given that the third term of the sequence is 8, find the smallest possible value of $a$.",
        "steps": [
            "First, state the formulas for both sums. The sum of the first 9 terms is: $$S_9 = \\dfrac{9}{2}\\left(2a + 8d\\right) = 9a + 36d$$",
            "The sum of the first 3 terms is: $$S_3 = \\dfrac{3}{2}\\left(2a + 2d\\right) = 3a + 3d$$",
            "Next, set the sum of the first 9 terms equal to the square of the sum of the first 3 terms: $$9a + 36d = (3a + 3d)^2 \\implies 9a + 36d = 9(a + d)^2$$",
            "Divide both sides of the equation by $9$ to reach the target relation: $$a + 4d = (a + d)^2 \\implies a + 4d = a^2 + 2ad + d^2$$",
            "For Part (b), state the formula for the third term and rearrange for $d$: $$u_3 = a + 2d = 8 \\implies 2d = 8 - a \\implies d = \\dfrac{8-a}{2}$$",
            "Substitute $d = \\dfrac{8-a}{2}$ into both sides of the simplified relation: $$a + 4\\left(\\dfrac{8-a}{2}\\right) = \\left(a + \\dfrac{8-a}{2}\\right)^2$$",
            "Simplify both sides of the equation: $$a + 2(8-a) = \\left(\\dfrac{2a + 8 - a}{2}\\right)^2 \\implies 16 - a = \\dfrac{(a+8)^2}{4}$$",
            "Clear the fraction by multiplying both sides by $4$: $$64 - 4a = a^2 + 16a + 64 \\implies a^2 + 20a = 0$$",
            "Factor the quadratic to find the two possible values of $a$: $$a(a + 20) = 0 \\implies a = 0 \\quad \\text{or} \\quad a = -20$$",
            "Comparing the two roots, the smallest possible value of $a$ is $-20$.",
            "Final Answer: $$\\text{Part (b): } a = -20$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Part (b): } a = 0$$",
                "feedback": "You have found the larger of the two possible values of $a$. The question asks for the smallest possible value, which requires you to compare the two roots ($0$ and $-20$) and select $-20$."
            },
            {
                "ans": "$$\\text{Part (b): } a = -5$$",
                "feedback": "This incorrect answer probably arises from forgetting to square the denominator when substituting $d = \\frac{8-a}{2}$ into $d^2$ in Part (b)."
            },
            {
                "ans": "$$\\text{Part (b): } a = 20$$",
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
        "major_area": "Sequences and series",
        "topic": "Arithmetic progressions",
        "subtopic": [
            "Arithmetic Progressions",
            "Quadratic Equations in Sequences"
        ],
        "img": false,
        "question": "An arithmetic sequence has first term $a$ and common difference $d$.<br><br>The sum of the first 16 terms of the sequence is equal to the square of the sum of the first 2 terms.<br><br>(a) Show that $16a + 120d = 4a^2 + 4ad + d^2$.<br><br>(b) Given that the second term of the sequence is 4, find the smallest possible value of $a$.",
        "steps": [
            "First, state the formulas for both sums. The sum of the first 16 terms is: $$S_{16} = \\dfrac{16}{2}\\left(2a + 15d\\right) = 8(2a + 15d) = 16a + 120d$$",
            "The sum of the first 2 terms is: $$S_2 = \\dfrac{2}{2}\\left(2a + d\\right) = 2a + d$$",
            "Next, set the sum of the first 16 terms equal to the square of the sum of the first 2 terms to reach the target relation: $$16a + 120d = (2a + d)^2 \\implies 16a + 120d = 4a^2 + 4ad + d^2$$",
            "For Part (b), state the formula for the second term and rearrange for $d$: $$u_2 = a + d = 4 \\implies d = 4 - a$$",
            "Notice that the right-hand side of the Part (a) relation can be factored as a perfect square: $$16a + 120d = (2a + d)^2$$",
            "Substitute $d = 4 - a$ into both sides of the factored equation: $$16a + 120(4-a) = (2a + 4 - a)^2 \\implies 16a + 480 - 120a = (a + 4)^2$$",
            "Expand and simplify the resulting quadratic equation: $$480 - 104a = a^2 + 8a + 16 \\implies a^2 + 112a - 464 = 0$$",
            "Factor the quadratic to find the two possible values of $a$: $$(a - 4)(a + 116) = 0 \\implies a = 4 \\quad \\text{or} \\quad a = -116$$",
            "Comparing the two roots, the smallest possible value of $a$ is $-116$.",
            "Final Answer: $$\\text{Part (b): } a = -116$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Part (b): } a = 4$$",
                "feedback": "You have found the larger of the two possible values of $a$. The question asks for the smallest possible value, which requires you to compare the two roots ($4$ and $-116$) and select $-116$."
            },
            {
                "ans": "$$\\text{Part (b): } a = -16$$",
                "feedback": "This incorrect answer probably arises from forgetting the middle term $4ad$ when expanding $(2a+d)^2$ in Part (a), which leads to an incorrect quadratic in Part (b)."
            },
            {
                "ans": "$$\\text{Part (b): } a = 116$$",
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
        "major_area": "Exponentials and logarithms",
        "topic": "Exponential modelling",
        "subtopic": [
            "Exponential Growth and Decay",
            "Logarithmic Rearrangement"
        ],
        "img": false,
        "question": "A patient takes a dose of a prescribed drug. A doctor models the mass of the drug in the patient's body using<br>$$m = m_0 \\text{e}^{-kt}$$<br>where $m_0$ milligrams is the initial mass of the drug in the body and $m$ milligrams is the mass of the drug in the body after $t$ hours.<br><br>On average, it takes 4.5 hours for the mass of the drug in the body to halve. One standard dose contains 150 mg of the drug.<br><br>(a) The patient takes two standard doses at 9 am. Use the model to estimate the mass of the drug remaining in the patient's body at 2 pm.<br><br>(b) To prevent toxicity, the patient must ensure the mass of the drug in her body remains below 350 mg. Use the model to find the earliest time after 9 am that she can take another single standard dose of 150 mg. Give your answer to the nearest minute.<br><br>(c) State a biological reason why the mass of the drug remaining in the patient's body predicted by the model may not be completely accurate.",
        "steps": [
            "First, calculate the decay constant $k$ by setting $m = \\dfrac{1}{2}m_0$ when $t = 4.5$: $$\\dfrac{1}{2}m_0 = m_0\\text{e}^{-4.5k} \\implies \\text{e}^{-4.5k} = 0.5 \\implies -4.5k = \\ln(0.5) \\implies k = \\dfrac{\\ln(2)}{4.5} \\approx 0.15403$$",
            "For Part (a), calculate the initial mass $m_0$ for two standard doses of 150 mg: $$m_0 = 2 \\times 150 = 300\\text{ mg}$$",
            "Calculate the time elapsed between 9 am and 2 pm, which is $t = 5$ hours. Substitute $m_0 = 300$ and $t = 5$ into the model: $$m = 300\\text{e}^{-0.15403 \\times 5} = 300\\text{e}^{-0.77015} \\approx 138.93\\text{ mg} \\approx 139\\text{ mg}$$",
            "For Part (b), to stay below 350 mg immediately after taking a new 150 mg dose, the mass remaining in the body just before the dose must satisfy: $$\\text{Mass remaining} + 150 \\le 350 \\implies \\text{Mass remaining} \\le 200\\text{ mg}$$",
            "Set $m = 200$ and solve for $t$: $$200 = 300\\text{e}^{-kt} \\implies \\text{e}^{-kt} = \\dfrac{200}{300} = \\dfrac{2}{3}$$",
            "Take the natural logarithm of both sides to isolate the exponent: $$-kt = \\ln\\left(\\dfrac{2}{3}\\right) \\implies kt = \\ln(1.5) \\approx 0.40547$$",
            "Divide by the decay constant $k = 0.15403$ to find the time $t$ in hours: $$t = \\dfrac{0.40547}{0.15403} \\approx 2.63233\\text{ hours}$$",
            "Convert the decimal hours to minutes: $$2\\text{ hours and } (0.63233 \\times 60)\\text{ minutes} \\approx 2\\text{ hours and } 38\\text{ minutes}$$",
            "Add this time elapsed to 9 am: $$9\\text{ am} + 2\\text{ hours } 38\\text{ minutes} = 11\\text{:}38\\text{ am}$$",
            "For Part (c), identify a biological limitation: the elimination rate of a drug is not perfectly constant. It varies based on individual liver and kidney function, metabolic speed, hydration levels, and other physiological factors.",
            "Final Answer: $$\\text{Part (a): } 139\\text{ mg},\\quad \\text{Part (b): } 11\\text{:}38\\text{ am}$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Part (a): } 75\\text{ mg},\\quad \\text{Part (b): } 11\\text{:}38\\text{ am}$$",
                "feedback": "In Part (a), you probably assumed the drug halves twice because 5 hours is close to two half-lives of 4.5 hours (which would divide 300 mg by 4 to get 75 mg). However, you must use the continuous exponential decay model with the decay constant $k$ to get the precise remaining mass of $139\\text{ mg}$."
            },
            {
                "ans": "$$\\text{Part (a): } 139\\text{ mg},\\quad \\text{Part (b): } 11\\text{:}25\\text{ am}$$",
                "feedback": "In Part (b), you probably made an error when setting up the limit. Remember that she can only take a 150 mg dose once the remaining mass drops to $350 - 150 = 200\\text{ mg}$, not $150\\text{ mg}$."
            },
            {
                "ans": "$$\\text{Part (a): } 139\\text{ mg},\\quad \\text{Part (b): } 12\\text{:}08\\text{ pm}$$",
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
        "major_area": "Exponentials and logarithms",
        "topic": "Exponential modelling",
        "subtopic": [
            "Exponential Growth and Decay",
            "Logarithmic Rearrangement"
        ],
        "img": false,
        "question": "A hot cup of tea is left to cool in a room held at a constant temperature of $20^\\circ\\text{C}$. The temperature of the tea, $\\theta$ (in $^\\circ\\text{C}$), after $t$ minutes is modelled by<br>$$\\theta = 20 + 70\\text{e}^{-kt}$$<br>On average, the temperature difference between the tea and the room halves every 12 minutes.<br><br>(a) The tea is poured at 1 pm. Use the model to estimate the temperature of the tea at 1:30 pm.<br><br>(b) The tea is considered comfortable to drink once its temperature drops below $55^\\circ\\text{C}$. Find the earliest time after 1 pm that the tea is comfortable to drink. Give your answer to the nearest minute.<br><br>(c) State a physical reason why the temperature of the tea predicted by the model may not be completely accurate.",
        "steps": [
            "First, identify the term representing the temperature difference: $$\\theta - 20 = 70\\text{e}^{-kt}$$",
            "Calculate the decay constant $k$ using the fact that this difference halves every 12 minutes: $$\\dfrac{1}{2} \\times 70 = 70\\text{e}^{-12k} \\implies \\text{e}^{-12k} = 0.5 \\implies -12k = \\ln(0.5) \\implies k = \\dfrac{\\ln(2)}{12} \\approx 0.05776$$",
            "For Part (a), calculate the time elapsed between 1 pm and 1:30 pm, which is $t = 30$ minutes. Substitute $t = 30$ into the model: $$\\theta = 20 + 70\\text{e}^{-0.05776 \\times 30} = 20 + 70\\text{e}^{-1.7328} \\approx 20 + 12.37 \\approx 32.4^\\circ\\text{C}$$",
            "For Part (b), set $\\theta = 55$ and solve for $t$: $$55 = 20 + 70\\text{e}^{-kt} \\implies 70\\text{e}^{-kt} = 35 \\implies \\text{e}^{-kt} = 0.5$$",
            "Take the natural logarithm of both sides to isolate the exponent: $$-kt = \\ln(0.5) \\implies kt = \\ln(2) \\implies t = \\dfrac{\\ln(2)}{k}$$",
            "Substitute $k = \\dfrac{\\ln(2)}{12}$ into the equation: $$t = \\dfrac{\\ln(2)}{\\ln(2)/12} = 12\\text{ minutes}$$",
            "Add this elapsed time to 1 pm: $$1\\text{ pm} + 12\\text{ minutes} = 1\\text{:}12\\text{ pm}$$",
            "For Part (c), identify a physical limitation: the ambient room temperature may not remain perfectly constant. Stirring the tea, draft currents, or the thermal properties of the mug can also accelerate or slow down the cooling rate.",
            "Final Answer: $$\\text{Part (a): } 32.4^\\circ\\text{C},\\quad \\text{Part (b): } 1\\text{:}12\\text{ pm}$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Part (a): } 32.4^\\circ\\text{C},\\quad \\text{Part (b): } 1\\text{:}24\\text{ pm}$$",
                "feedback": "In Part (b), you probably made a calculation error. Since the initial temperature difference of $70^\\circ\\text{C}$ needs to drop to $35^\\circ\\text{C}$ (which is exactly half), it must take exactly one half-life cycle of $12$ minutes, not $24$."
            },
            {
                "ans": "$$\\text{Part (a): } 35.0^\\circ\\text{C},\\quad \\text{Part (b): } 1\\text{:}12\\text{ pm}$$",
                "feedback": "In Part (a), you probably forgot to add the ambient room temperature of $20^\\circ\\text{C}$ back to your cooling difference value, or forgot that the exponent was a negative term."
            },
            {
                "ans": "$$\\text{Part (a): } 32.4^\\circ\\text{C},\\quad \\text{Part (b): } 1\\text{:}08\\text{ pm}$$",
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
        "major_area": "Exponentials and logarithms",
        "topic": "Exponential modelling",
        "subtopic": [
            "Exponential Growth and Decay",
            "Logarithmic Rearrangement"
        ],
        "img": false,
        "question": "A biologist is researching the growth of a bacterial culture. She models the population of the bacteria, $P$, using<br>$$P = P_0\\text{e}^{kt}$$<br>where $P_0$ is the initial population of the culture and $t$ is the time in hours. On average, the population of the bacteria doubles every 4.2 hours.<br><br>(a) The biologist starts a culture with an initial population of 5000 bacteria at 10 am. Use the model to estimate the population of the culture at 4 pm. Give your answer to 3 significant figures.<br><br>(b) The culture must be transferred to a larger container once the population exceeds 30,000 bacteria. Find the earliest time after 10 am that the transfer must take place. Give your answer to the nearest minute.<br><br>(c) State a biological reason why this exponential growth model is unlikely to remain accurate over a long period of time.",
        "steps": [
            "First, calculate the growth constant $k$ using the doubling time of 4.2 hours: $$2P_0 = P_0\\text{e}^{4.2k} \\implies \\text{e}^{4.2k} = 2 \\implies 4.2k = \\ln(2) \\implies k = \\dfrac{\\ln(2)}{4.2} \\approx 0.16504$$",
            "For Part (a), calculate the time elapsed between 10 am and 4 pm, which is $t = 6$ hours. Substitute $P_0 = 5000$ and $t = 6$ into the model: $$P = 5000\\text{e}^{0.16504 \\times 6} = 5000\\text{e}^{0.99024} \\approx 13459 \\approx 13500\\text{ bacteria}$$",
            "For Part (b), set $P = 30000$ and solve for $t$: $$30000 = 5000\\text{e}^{kt} \\implies \\text{e}^{kt} = \\dfrac{30000}{5000} = 6$$",
            "Take the natural logarithm of both sides to isolate the exponent: $$kt = \\ln(6) \\approx 1.79176$$",
            "Divide by the growth constant $k = 0.16504$ to find the time $t$ in hours: $$t = \\dfrac{1.79176}{0.16504} \\approx 10.8568\\text{ hours}$$",
            "Convert the decimal hours to minutes: $$10\\text{ hours and } (0.8568 \\times 60)\\text{ minutes} \\approx 10\\text{ hours and } 51\\text{ minutes}$$",
            "Add this elapsed time to 10 am: $$10\\text{ am} + 10\\text{ hours } 51\\text{ minutes} = 8\\text{:}51\\text{ pm}$$",
            "For Part (c), identify a biological limitation: in the real world, nutrient resources become depleted, space becomes limited, and toxic metabolic waste products accumulate, which will eventually slow down the reproduction rate.",
            "Final Answer: $$\\text{Part (a): } 13500\\text{ bacteria},\\quad \\text{Part (b): } 8\\text{:}51\\text{ pm}$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Part (a): } 13500\\text{ bacteria},\\quad \\text{Part (b): } 8\\text{:}52\\text{ pm}$$",
                "feedback": "In Part (b), you probably used a prematurely rounded value of the growth constant $k \\approx 0.165$. Carrying the full calculator accuracy of $k \\approx 0.16504$ yields $10$ hours and $51$ minutes, leading to $8:51\\text{ pm}$."
            },
            {
                "ans": "$$\\text{Part (a): } 10000\\text{ bacteria},\\quad \\text{Part (b): } 8\\text{:}51\\text{ pm}$$",
                "feedback": "In Part (a), you probably assumed that the population only doubles once. Over $6$ hours, which is longer than the $4.2$ hour doubling time, the population must grow by a factor of $2^{6/4.2} \\approx 2.69$."
            },
            {
                "ans": "$$\\text{Part (a): } 13500\\text{ bacteria},\\quad \\text{Part (b): } 9\\text{:}12\\text{ pm}$$",
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
        "major_area": "Exponentials and logarithms",
        "topic": "Exponential modelling",
        "subtopic": [
            "Exponential Growth and Decay",
            "Logarithmic Rearrangement"
        ],
        "img": false,
        "question": "A physics laboratory is storing a sample of a radioactive isotope. The activity of the sample, $A$ (in Becquerels, Bq), is modelled by<br>$$A = A_0\\text{e}^{-\\lambda t}$$<br>where $A_0$ is the initial activity of the sample and $t$ is the time in days. The half-life of this radioactive isotope is 8.1 days.<br><br>(a) A sample of the isotope has an initial activity of 800 Bq on Monday at 12 pm. Use the model to estimate the remaining activity exactly 12 days later. Give your answer to 3 significant figures.<br><br>(b) The sample is considered safe to handle without special shielding once its activity drops below 100 Bq. Find the minimum storage time required before the sample is safe, giving your answer in days and hours (to the nearest hour).<br><br>(c) State a physical reason why the measured activity of the sample at any given moment might differ slightly from the model's prediction.",
        "steps": [
            "First, calculate the decay constant $\\lambda$ using the half-life of 8.1 days: $$\\dfrac{1}{2}A_0 = A_0\\text{e}^{-8.1\\lambda} \\implies \\text{e}^{-8.1\\lambda} = 0.5 \\implies -8.1\\lambda = \\ln(0.5) \\implies \\lambda = \\dfrac{\\ln(2)}{8.1} \\approx 0.08557$$",
            "For Part (a), substitute $A_0 = 800$, $\\lambda = 0.08557$, and $t = 12$ days into the model: $$A = 800\\text{e}^{-0.08557 \\times 12} = 800\\text{e}^{-1.02684} \\approx 286.49 \\approx 286\\text{ Bq}$$",
            "For Part (b), set $A = 100$ and solve for $t$: $$100 = 800\\text{e}^{-\\lambda t} \\implies \\text{e}^{-\\lambda t} = \\dfrac{100}{800} = \\dfrac{1}{8} = 2^{-3}$$",
            "Take the natural logarithm of both sides to isolate the exponent: $$-\\lambda t = \\ln(2^{-3}) \\implies -\\lambda t = -3\\ln(2) \\implies t = \\dfrac{3\\ln(2)}{\\lambda}$$",
            "Substitute $\\lambda = \\dfrac{\\ln(2)}{8.1}$ into the equation: $$t = 3 \\times 8.1 = 24.3\\text{ days}$$",
            "Convert the decimal days to hours: $$24\\text{ days and } (0.3 \\times 24)\\text{ hours} = 24\\text{ days and } 7.2\\text{ hours} \\approx 24\\text{ days and } 7\\text{ hours}$$",
            "For Part (c), identify a physical limitation: radioactive decay is a random, stochastic quantum process. The model predicts the average expected decay, but the actual measurements will fluctuate statistically around this smooth curve.",
            "Final Answer: $$\\text{Part (a): } 286\\text{ Bq},\\quad \\text{Part (b): } 24\\text{ days and } 7\\text{ hours}$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Part (a): } 225\\text{ Bq},\\quad \\text{Part (b): } 24\\text{ days and } 7\\text{ hours}$$",
                "feedback": "In Part (a), you probably made a calculation slip in your fractional indices or exponent multiplications. Double-check your calculator entry for $800 \\times \\text{e}^{-12\\lambda}$."
            },
            {
                "ans": "$$\\text{Part (a): } 286\\text{ Bq},\\quad \\text{Part (b): } 24\\text{ days and } 12\\text{ hours}$$",
                "feedback": "In Part (b), when converting $0.3$ days to hours, remember that a day has 24 hours. Therefore, $0.3 \\times 24 = 7.2\\text{ hours}$, which rounds to $7\\text{ hours}$ (not $12$)."
            },
            {
                "ans": "$$\\text{Part (a): } 286\\text{ Bq},\\quad \\text{Part (b): } 8\\text{ days and } 3\\text{ hours}$$",
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
        "major_area": "Exponentials and logarithms",
        "topic": "Exponential modelling",
        "subtopic": [
            "Exponential Growth and Decay",
            "Logarithmic Rearrangement"
        ],
        "img": false,
        "question": "A meteorologist models the atmospheric pressure, $P$ (in kilopascals, kPa), at an altitude of $h$ kilometres above sea level using<br>$$P = P_0\\text{e}^{-kh}$$<br>where $P_0$ kPa is the pressure at sea level. On average, the atmospheric pressure halves for every 5.5 km increase in altitude.<br><br>(a) Given that the atmospheric pressure at sea level is 101.3 kPa, use the model to estimate the pressure at the summit of Mount Kilimanjaro, which is at an altitude of 5895 metres. Give your answer to 3 significant figures.<br><br>(b) A weather balloon is designed to transmit data until the surrounding pressure drops below 15 kPa. Use the model to find the maximum altitude the balloon can reach before it stops transmitting. Give your answer to the nearest 10 metres.<br><br>(c) State a meteorological reason why this pressure model may not be perfectly accurate.",
        "steps": [
            "First, convert the altitude of Mount Kilimanjaro from metres to kilometres to match the variable unit of $h$: $$5895\\text{ metres} = 5.895\\text{ km}$$",
            "Calculate the decay constant $k$ by setting $P = \\dfrac{1}{2}P_0$ when $h = 5.5$: $$\\dfrac{1}{2}P_0 = P_0\\text{e}^{-5.5k} \\implies \\text{e}^{-5.5k} = 0.5 \\implies -5.5k = \\ln(0.5) \\implies k = \\dfrac{\\ln(2)}{5.5} \\approx 0.12603$$",
            "For Part (a), substitute $P_0 = 101.3$, $k = 0.12603$, and $h = 5.895$ into the model: $$P = 101.3\\text{e}^{-0.12603 \\times 5.895} = 101.3\\text{e}^{-0.74295} \\approx 48.19 \\approx 48.2\\text{ kPa}$$",
            "For Part (b), set $P = 15$ to find the altitude limit: $$15 = 101.3\\text{e}^{-kh} \\implies \\text{e}^{-kh} = \\dfrac{15}{101.3} \\approx 0.14808$$",
            "Take the natural logarithm of both sides to isolate the exponent: $$-kh = \\ln(0.14808) \\approx -1.91006 \\implies kh \\approx 1.91006$$",
            "Divide by the decay constant $k = 0.12603$ to solve for $h$: $$h = \\dfrac{1.91006}{0.12603} \\approx 15.1555\\text{ km}$$",
            "Convert this altitude back to metres: $$15.1555\\text{ km} = 15,155.5\\text{ metres}$$",
            "Round to the nearest 10 metres: $$15,155.5\\text{ metres} \\approx 15,160\\text{ metres}$$",
            "For Part (c), identify a meteorological limitation: the model assumes a uniform, static atmosphere. Real-world atmospheric pressure is dynamically affected by local temperature profiles, humidity, and weather fronts independently of altitude.",
            "Final Answer: $$\\text{Part (a): } 48.2\\text{ kPa},\\quad \\text{Part (b): } 15,160\\text{ metres}$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Part (a): } 47.9\\text{ kPa},\\quad \\text{Part (b): } 15,050\\text{ metres}$$",
                "feedback": "This incorrect option probably results from a minor rounding slip when calculating $k$. Carrying the rounded value $k \\approx 0.1269$ instead of $0.12603$ shifts your results. Use full calculator accuracy for $k$."
            },
            {
                "ans": "$$\\text{Part (a): } 48.2\\text{ kPa},\\quad \\text{Part (b): } 15,160\\text{ km}$$",
                "feedback": "In Part (b), you probably forgot to convert your final answer back from kilometres to metres. An altitude of $15,160\\text{ km}$ would extend into outer space; the target unit is metres."
            },
            {
                "ans": "$$\\text{Part (a): } 48.2\\text{ kPa},\\quad \\text{Part (b): } 15,120\\text{ metres}$$",
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
        "major_area": "Exponentials and logarithms",
        "topic": "Exponential modelling",
        "subtopic": [
            "Exponential Growth and Decay",
            "Numerical Iteration"
        ],
        "img": false,
        "question": "The daily world production of natural gas can be modelled using:<br>$$V = 20 + 200\\left(\\dfrac{t}{40}\right)^3 - 100\\left(\\dfrac{t}{40}\right)^4$$<br>where $V$ is the volume of gas in billions of cubic metres, and $t$ is the time in years since 1 January 1990.<br><br>(a) (i) The model is used to predict the time, $T$, when gas production will fall to zero. Show that $T$ satisfies the equation:<br>$$T = \\sqrt[3]{80T^2 + \\dfrac{512\\,000}{T}}$$ <br>(a) (ii) Use the iterative formula $T_{n+1} = \\sqrt[3]{80T_n^2 + \\dfrac{512\\,000}{T_n}}$, with $T_0 = 50$, to find the values of $T_1$, $T_2$, and $T_3$, giving your answers to three decimal places.<br><br>(a) (iii) Explain the relevance of using $T_0 = 50$.<br><br>(b) From 1 January 1990, the daily use of natural gas by one technologically developing country can be modelled as:<br>$$V = 8.5 \\times 1.058^t$$<br>Use the models to show that the country's use of gas and the world production of gas will be equal during the year 2044.",
        "steps": [
            "For Part (a)(i), set the volume $V$ equal to $0$ and expand the exponents: $$0 = 20 + 200\\left(\\dfrac{T}{40}\\right)^3 - 100\\left(\\dfrac{T}{40}\right)^4 \\implies 0 = 20 + 200\\left(\\dfrac{T^3}{64\\,000}\\right) - 100\\left(\\dfrac{T^4}{2\\,560\\,000}\\right)$$, which simplifies to: $$0 = 20 + \\dfrac{T^3}{320} - \\dfrac{T^4}{25\\,600}$$",
            "Multiply the entire equation by $25\\,600$ to clear the fractions: $$0 = 512\\,000 + 80T^3 - T^4$$",
            "Rearrange the terms and divide both sides by $T$ (since $T > 0$): $$T^4 = 80T^3 + 512\\,000 \\implies T^3 = 80T^2 + \\dfrac{512\\,000}{T}$$",
            "Take the cube root of both sides to obtain the target iterative relation: $$T = \\sqrt[3]{80T^2 + \\dfrac{512\\,000}{T}}$$ as required.",
            "For Part (a)(ii), substitute $T_0 = 50$ into the formula to find the successive iterations: $$T_1 = \\sqrt[3]{80(50)^2 + \\dfrac{512\\,000}{50}} = \\sqrt[3]{200\\,000 + 10\\,240} = \\sqrt[3]{210\\,240} \\approx 59.464$$",
            "Find the subsequent terms carrying full decimal precision: $$T_2 = \\sqrt[3]{80(59.4643)^2 + \\dfrac{512\\,000}{59.4643}} \\approx \\sqrt[3]{291\\,491.0} \\approx 66.305$$ and $$T_3 = \\sqrt[3]{80(66.3051)^2 + \\dfrac{512\\,000}{66.3051}} \\approx \\sqrt[3]{359\\,430.4} \\approx 71.099$$",
            "For Part (a)(iii), explain the relevance: $T = 50$ corresponds to the year 2040 (since $1990 + 50 = 2040$). This provides a realistic starting estimate that is close to the expected root, which improves the speed of convergence.",
            "For Part (b), find the intersection interval by evaluating the difference between production and consumption. Let $f(t) = V_{\\text{prod}} - V_{\\text{use}}$. The year 2044 corresponds to $t = 54$ (since $1990 + 54 = 2044$).",
            "Evaluate both models at $t = 54$: $$V_{\\text{prod}} = 20 + 200\\left(\\dfrac{54}{40}\\right)^3 - 100\\left(\\dfrac{54}{40}\\right)^4 \\approx 180.12\\text{ Bcm}$$ and $$V_{\\text{use}} = 8.5 \\times 1.058^{54} \\approx 178.53\\text{ Bcm}$$. Since $180.12 > 178.53$, production exceeds consumption.",
            "Evaluate both models at $t = 55$: $$V_{\\text{prod}} = 20 + 200\\left(\\dfrac{55}{40}\\right)^3 - 100\\left(\\dfrac{55}{40}\\right)^4 \\approx 182.44\\text{ Bcm}$$ and $$V_{\\text{use}} = 8.5 \\times 1.058^{55} \\approx 188.88\\text{ Bcm}$$. Since $182.44 < 188.88$, consumption now exceeds production.",
            "Since the difference $V_{\\text{prod}} - V_{\\text{use}}$ changes sign from positive to negative between $t = 54$ and $t = 55$, the curves must intersect during this interval (which corresponds exactly to the calendar year 2044).",
            "Final Answer: $$\\text{Part (a)(ii): } T_1 = 59.464,\\ T_2 = 66.305,\\ T_3 = 71.099,\\quad \\text{Part (b): } 54 < t < 55 \\implies 2044$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Part (a)(ii): } T_1 = 59.452,\\ T_2 = 66.292,\\ T_3 = 70.987,\\quad \\text{Part (b): } 54 < t < 55 \\implies 2044$$",
                "feedback": "In Part (a)(ii), you probably made a minor rounding slip when calculating the cube root of $210,240$. Carrying the rounded value $T_1 \\approx 59.452$ instead of $59.464$ caused your subsequent iterations to drift. Use full calculator accuracy."
            },
            {
                "ans": "$$\\text{Part (a)(ii): } T_1 = 59.464,\\ T_2 = 66.305,\\ T_3 = 71.099,\\quad \\text{Part (b): } 50 < t < 51 \\implies 2040$$",
                "feedback": "In Part (b), check your interval analysis. While $t = 50$ is your starting iteration value, evaluating the production and consumption curves shows that they do not cross until $t$ is between $54$ and $55$, which corresponds to the year 2044."
            },
            {
                "ans": "$$\\text{Part (a)(ii): } T_1 = 59.464,\\ T_2 = 66.305,\\ T_3 = 71.099,\\quad \\text{Part (b): } 53 < t < 54 \\implies 2043$$",
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
        "id": "004102",
        "board": "AQA",
        "major_area": "Exponentials and logarithms",
        "topic": "Exponential modelling",
        "subtopic": [
            "Exponential Growth and Decay",
            "Numerical Iteration"
        ],
        "img": false,
        "question": "A technology company models its annual revenue, $R$ (in millions of pounds), using:<br>$$R = 5 + 30\\left(\\dfrac{t}{10}\\right)^2 - 10\\left(\\dfrac{t}{10}\\right)^3$$<br>where $t$ is the number of years since 1 January 2010.<br><br>(a) (i) The model is used to predict the time, $T$, when annual revenue will drop to zero. Show that $T$ satisfies the equation:<br>$$T = \\sqrt{30T + \\dfrac{500}{T}}$$ <br>(a) (ii) Use the iterative formula $T_{n+1} = \\sqrt{30T_n + \\dfrac{500}{T_n}}$, with $T_0 = 31$, to find the values of $T_1$, $T_2$, and $T_3$, giving your answers to three decimal places.<br><br>(a) (iii) Explain the relevance of using $T_0 = 31$.<br><br>(b) The company's annual operating cost, $C$ (in millions of pounds), is modelled by:<br>$$C = 1.2 \\times 1.09^t$$<br>Use the models to show that the company's annual costs and annual revenue will be equal during the year 2038.",
        "steps": [
            "For Part (a)(i), set the revenue $R$ equal to $0$ and expand the exponents: $$0 = 5 + 30\\left(\\dfrac{T}{10}\\right)^2 - 10\\left(\\dfrac{T}{10}\\right)^3 \\implies 0 = 5 + 30\\left(\\dfrac{T^2}{100}\\right) - 10\\left(\\dfrac{T^3}{1\\,000}\\right)$$, which simplifies to: $$0 = 5 + \\dfrac{3T^2}{10} - \\dfrac{T^3}{100}$$",
            "Multiply the entire equation by $100$ to clear the fractions: $$0 = 500 + 30T^2 - T^3$$",
            "Rearrange the terms and divide both sides by $T$ (since $T > 0$): $$T^3 = 30T^2 + 500 \\implies T^2 = 30T + \\dfrac{500}{T}$$",
            "Take the square root of both sides to obtain the target iterative relation: $$T = \\sqrt{30T + \\dfrac{500}{T}}$$ as required.",
            "For Part (a)(ii), substitute $T_0 = 31$ into the formula to find the successive iterations: $$T_1 = \\sqrt{30(31) + \\dfrac{500}{31}} = \\sqrt{930 + 16.129} = \\sqrt{946.129} \\approx 30.759$$",
            "Find the subsequent terms carrying full decimal precision: $$T_2 = \\sqrt{30(30.7592) + \\dfrac{500}{30.7592}} \\approx \\sqrt{939.031} \\approx 30.644$$ and $$T_3 = \\sqrt{30(30.6436) + \\dfrac{500}{30.6436}} \\approx \\sqrt{935.625} \\approx 30.588$$",
            "For Part (a)(iii), explain the relevance: $T = 31$ corresponds to the year 2041 (since $2010 + 31 = 2041$). This provides a realistic starting estimate that is close to the expected root, which improves the speed of convergence.",
            "For Part (b), find the intersection interval by evaluating the difference between revenue and costs. Let $f(t) = R - C$. The year 2038 corresponds to $t = 28$ (since $2010 + 28 = 2038$).",
            "Evaluate both models at $t = 28$: $$R = 5 + 30\\left(\\dfrac{28}{10}\\right)^2 - 10\\left(\\dfrac{28}{10}\\right)^3 \\approx 20.68\\text{ million}$$ and $$C = 1.2 \\times 1.09^{28} \\approx 13.40\\text{ million}$$. Since $20.68 > 13.40$, revenue exceeds operating costs.",
            "Evaluate both models at $t = 29$: $$R = 5 + 30\\left(\\dfrac{29}{10}\\right)^2 - 10\\left(\\dfrac{29}{10}\\right)^3 \\approx 13.41\\text{ million}$$ and $$C = 1.2 \\times 1.09^{29} \\approx 14.61\\text{ million}$$. Since $13.41 < 14.61$, costs now exceed revenue.",
            "Since the difference $R - C$ changes sign from positive to negative between $t = 28$ and $t = 29$, the curves must intersect during this interval (which corresponds exactly to the calendar year 2038).",
            "Final Answer: $$\\text{Part (a)(ii): } T_1 = 30.759,\\ T_2 = 30.644,\\ T_3 = 30.588,\\quad \\text{Part (b): } 28 < t < 29 \\implies 2038$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Part (a)(ii): } T_1 = 30.763,\\ T_2 = 30.642,\\ T_3 = 30.593,\\quad \\text{Part (b): } 28 < t < 29 \\implies 2038$$",
                "feedback": "In Part (a)(ii), you probably made a minor rounding slip when calculating the square root of $946.129$. Carrying the rounded value $T_1 \\approx 30.763$ instead of $30.759$ caused your subsequent iterations to drift. Use full calculator accuracy."
            },
            {
                "ans": "$$\\text{Part (a)(ii): } T_1 = 30.759,\\ T_2 = 30.644,\\ T_3 = 30.588,\\quad \\text{Part (b): } 27 < t < 28 \\implies 2037$$",
                "feedback": "In Part (b), check your interval analysis. While $t = 28$ is your target value, evaluating both models shows that they do not cross until $t$ is between $28$ and $29$, which corresponds to the year 2038."
            },
            {
                "ans": "$$\\text{Part (a)(ii): } T_1 = 30.759,\\ T_2 = 30.644,\\ T_3 = 30.588,\\quad \\text{Part (b): } 29 < t < 30 \\implies 2039$$",
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
        "major_area": "Exponentials and logarithms",
        "topic": "Exponential modelling",
        "subtopic": [
            "Exponential Growth and Decay",
            "Numerical Iteration"
        ],
        "img": false,
        "question": "The volume of water, $V$ (in thousands of cubic metres), in a reservoir $t$ months after a prolonged dry spell begins is modelled by:<br>$$V = 8 + 48\\left(\\dfrac{t}{12}\right)^2 - 8\\left(\\dfrac{t}{12}\right)^3$$<br>(a) (i) The model is used to predict the time, $T$, when the reservoir will be completely empty. Show that $T$ satisfies the equation:<br>$$T = \\sqrt[3]{72T^2 + 1728}$$ <br>(a) (ii) Use the iterative formula $T_{n+1} = \\sqrt[3]{72T_n^2 + 1728}$, with $T_0 = 73$, to find the values of $T_1$, $T_2$, and $T_3$, giving your answers to three decimal places.<br><br>(a) (iii) Explain the relevance of using $T_0 = 73$.<br><br>(b) The constant inflow of water from a small feeding stream, $V_{\\text{in}}$ (in thousands of cubic metres per month), is modelled by:<br>$$V_{\\text{in}} = 0.5 \\times 1.07^t$$<br>Use the models to show that the inflow of water and the volume of water in the reservoir will be equal during the 70th month.",
        "steps": [
            "For Part (a)(i), set the volume $V$ equal to $0$ and expand the exponents: $$0 = 8 + 48\\left(\\dfrac{T}{12}\right)^2 - 8\\left(\\dfrac{T}{12}\right)^3 \\implies 0 = 8 + 48\\left(\\dfrac{T^2}{144}\\right) - 8\\left(\\dfrac{T^3}{1728}\\right)$$, which simplifies to: $$0 = 8 + \\dfrac{T^2}{3} - \\dfrac{T^3}{216}$$",
            "Multiply the entire equation by $216$ to clear the fractions: $$0 = 1728 + 72T^2 - T^3$$",
            "Rearrange the terms and isolate $T^3$: $$T^3 = 72T^2 + 1728$$",
            "Take the cube root of both sides to obtain the target iterative relation: $$T = \\sqrt[3]{72T^2 + 1728}$$ as required.",
            "For Part (a)(ii), substitute $T_0 = 73$ into the formula to find the successive iterations: $$T_1 = \\sqrt[3]{72(73)^2 + 1728} = \\sqrt[3]{383\\,688 + 1728} = \\sqrt[3]{385\\,416} \\approx 72.775$$",
            "Find the subsequent terms carrying full decimal precision: $$T_2 = \\sqrt[3]{72(72.7749)^2 + 1728} \\approx \\sqrt[3]{383\\,052.9} \\approx 72.626$$ and $$T_3 = \\sqrt[3]{72(72.6256)^2 + 1728} \\approx \\sqrt[3]{381\\,489.3} \\approx 72.527$$",
            "For Part (a)(iii), explain the relevance: $T = 73$ months corresponds to just over 6 years ($6 \\times 12 = 72$ months). This provides a realistic starting estimate that is close to the expected root, which improves the speed of convergence.",
            "For Part (b), find the intersection interval by evaluating the difference between reservoir volume and inflow. Let $f(t) = V - V_{\\text{in}}$.",
            "Evaluate both models at $t = 69$: $$V = 8 + 48\\left(\\dfrac{69}{12}\right)^2 - 8\\left(\\dfrac{69}{12}\right)^3 \\approx 74.13\\text{ thousand}$$ and $$V_{\\text{in}} = 0.5 \\times 1.07^{69} \\approx 53.20\\text{ thousand}$$. Since $74.13 > 53.20$, reservoir volume exceeds inflow.",
            "Evaluate both models at $t = 70$: $$V = 8 + 48\\left(\\dfrac{70}{12}\right)^2 - 8\\left(\\dfrac{70}{12}\right)^3 \\approx 53.37\\text{ thousand}$$ and $$V_{\\text{in}} = 0.5 \\times 1.07^{70} \\approx 56.92\\text{ thousand}$$. Since $53.37 < 56.92$, inflow now exceeds reservoir volume.",
            "Since the difference $V - V_{\\text{in}}$ changes sign from positive to negative between $t = 69$ and $t = 70$, the curves must intersect during this interval (which corresponds exactly to the 70th month).",
            "Final Answer: $$\\text{Part (a)(ii): } T_1 = 72.775,\\ T_2 = 72.626,\\ T_3 = 72.527,\\quad \\text{Part (b): } 69 < t < 70 \\implies \\text{70th month}$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Part (a)(ii): } T_1 = 72.700,\\ T_2 = 72.400,\\ T_3 = 72.200,\\quad \\text{Part (b): } 69 < t < 70 \\implies \\text{70th month}$$",
                "feedback": "In Part (a)(ii), you probably made a minor rounding slip when calculating the cube root of $385,416$. Carrying the rounded value $T_1 \\approx 72.700$ instead of $72.775$ caused your subsequent iterations to drift. Use full calculator accuracy."
            },
            {
                "ans": "$$\\text{Part (a)(ii): } T_1 = 72.775,\\ T_2 = 72.626,\\ T_3 = 72.527,\\quad \\text{Part (b): } 68 < t < 69 \\implies \\text{69th month}$$",
                "feedback": "In Part (b), check your interval analysis. While $t = 69$ is your target value, evaluating both models shows that they do not cross until $t$ is between $69$ and $70$, which corresponds to the 70th month."
            },
            {
                "ans": "$$\\text{Part (a)(ii): } T_1 = 72.775,\\ T_2 = 72.626,\\ T_3 = 72.527,\\quad \\text{Part (b): } 70 < t < 71 \\implies \\text{71st month}$$",
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
        "id": "004104",
        "board": "AQA",
        "major_area": "Calculus",
        "topic": "Numerical methods",
        "subtopic": [
            "Newton-Raphson Method",
            "Radian Measure"
        ],
        "img": false,
        "question": "The rate of a primary chemical reaction, $R$ (in moles per second), is modelled by<br>$$R = 5 + 50\\left(\dfrac{t}{10}\right)^3 - 25\\left(\dfrac{t}{10}\right)^4$$<br>where $t$ is the time in minutes.<br><br>(a) (i) The model is used to predict the time, $T$, when the primary reaction stops. Show that $T$ satisfies the equation:<br>$$T = \sqrt[3]{20T^2 + \\dfrac{2000}{T}}$$<br>(a) (ii) Use the iterative formula $T_{n+1} = \\sqrt[3]{20T_n^2 + \\dfrac{2000}{T_n}}$, with $T_0 = 21$, to find the values of $T_1$, $T_2$, and $T_3$, giving your answers to three decimal places.<br><br>(a) (iii) Explain the relevance of using $T_0 = 21$.<br><br>(b) A secondary chemical inhibitor is introduced, and its reaction rate, $R_{\\text{inh}}$ (in moles per second), is modelled by:<br>$$R_{\\text{inh}} = 0.8 \\times 1.15^t$$<br>Use the models to show that the inhibitor's reaction rate and the primary reaction rate will be equal during the 20th minute.",
        "steps": [
            "For Part (a)(i), set the rate $R$ equal to $0$ and expand the exponents: $$0 = 5 + 50\\left(\dfrac{T}{10}\right)^3 - 25\\left(\dfrac{T}{10}\right)^4 \\implies 0 = 5 + 50\\left(\dfrac{T^3}{1\\,000}\\right) - 25\\left(\dfrac{T^4}{10\\,000}\\right)$$, which simplifies to: $$0 = 5 + \\dfrac{T^3}{20} - \\dfrac{T^4}{400}$$",
            "Multiply the entire equation by $400$ to clear the fractions: $$0 = 2\\,000 + 20T^3 - T^4$$",
            "Rearrange the terms and divide both sides by $T$ (since $T > 0$): $$T^4 = 20T^3 + 2\\,000 \\implies T^3 = 20T^2 + \\dfrac{2\\,000}{T}$$",
            "Take the cube root of both sides to obtain the target iterative relation: $$T = \\sqrt[3]{20T^2 + \\dfrac{2\\,000}{T}}$$ as required.",
            "For Part (a)(ii), substitute $T_0 = 21$ into the formula to find the successive iterations: $$T_1 = \\sqrt[3]{20(21)^2 + \\dfrac{2\\,000}{21}} = \\sqrt[3]{8\\,820 + 95.238} = \\sqrt[3]{8\\,915.238} \\approx 20.735$$",
            "Find the subsequent terms carrying full decimal precision: $$T_2 = \\sqrt[3]{20(20.7352)^2 + \\dfrac{2\\,000}{20.7352}} \\approx \\sqrt[3]{8\\,695.45} \\approx 20.563$$ and $$T_3 = \\sqrt[3]{20(20.5631)^2 + \\dfrac{2\\,000}{20.5631}} \\approx \\sqrt[3]{8\\,554.16} \\approx 20.451$$",
            "For Part (a)(iii), explain the relevance: $T = 21$ minutes is a realistic starting estimate that is close to the expected root (since the reaction stops just over 20 minutes), which improves the speed of convergence.",
            "For Part (b), find the intersection interval by evaluating the difference between reaction rates. Let $f(t) = R - R_{\\text{inh}}$.",
            "Evaluate both models at $t = 19$: $$R = 5 + 50\\left(\dfrac{19}{10}\right)^3 - 25\\left(\dfrac{19}{10}\right)^4 \\approx 22.15\\text{ moles/s}$$ and $$R_{\\text{inh}} = 0.8 \\times 1.15^{19} \\approx 11.39\\text{ moles/s}$$. Since $22.15 > 11.39$, primary reaction rate exceeds the inhibitor rate.",
            "Evaluate both models at $t = 20$: $$R = 5 + 50\\left(\dfrac{20}{10}\right)^3 - 25\\left(\dfrac{20}{10}\right)^4 = 5\\text{ moles/s}$$ and $$R_{\\text{inh}} = 0.8 \\times 1.15^{20} \\approx 13.09\\text{ moles/s}$$. Since $5 < 13.09$, the inhibitor rate now exceeds the primary reaction rate.",
            "Since the difference $R - R_{\\text{inh}}$ changes sign from positive to negative between $t = 19$ and $t = 20$, the curves must intersect during this interval (which corresponds exactly to the 20th minute).",
            "Final Answer: $$\\text{Part (a)(ii): } T_1 = 20.735,\\ T_2 = 20.563,\\ T_3 = 20.451,\\quad \\text{Part (b): } 19 < t < 20 \\implies \\text{20th minute}$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Part (a)(ii): } T_1 = 20.730,\\ T_2 = 20.610,\\ T_3 = 20.540,\\quad \\text{Part (b): } 19 < t < 20 \\implies \\text{20th minute}$$",
                "feedback": "In Part (a)(ii), you probably made a minor rounding slip when calculating the cube root of $8,915.24$. Carrying the rounded value $T_1 \\approx 20.730$ instead of $20.735$ caused your subsequent iterations to drift. Use full calculator accuracy."
            },
            {
                "ans": "$$\\text{Part (a)(ii): } T_1 = 20.735,\\ T_2 = 20.563,\\ T_3 = 20.451,\\quad \\text{Part (b): } 18 < t < 19 \\implies \\text{19th minute}$$",
                "feedback": "In Part (b), check your interval analysis. While $t = 19$ is your target value, evaluating both models shows that they do not cross until $t$ is between $19$ and $20$, which corresponds to the 20th minute."
            },
            {
                "ans": "$$\\text{Part (a)(ii): } T_1 = 20.735,\\ T_2 = 20.563,\\ T_3 = 20.451,\\quad \\text{Part (b): } 20 < t < 21 \\implies \\text{21st minute}$$",
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
        "major_area": "Exponentials and logarithms",
        "topic": "Exponential modelling",
        "subtopic": [
            "Exponential Growth and Decay",
            "Numerical Iteration"
        ],
        "img": false,
        "question": "The total value of a corporate delivery fleet, $V$ (in millions of pounds), $t$ years after purchase is modelled by:<br>$$V = 4 + 40\\left(\\dfrac{t}{20}\\right)^3 - 20\\left(\\dfrac{t}{20}\\right)^4$$<br>(a) (i) The model is used to predict the time, $T$, when the total value of the fleet will depreciate to zero. Show that $T$ satisfies the equation:<br>$$T = \\sqrt[3]{40T^2 + \\dfrac{32\\,000}{T}}$$ <br>(a) (ii) Use the iterative formula $T_{n+1} = \\sqrt[3]{40T_n^2 + \\dfrac{32\\,000}{T_n}}$, with $T_0 = 41$, to find the values of $T_1$, $T_2$, and $T_3$, giving your answers to three decimal places.<br><br>(a) (iii) Explain the relevance of using $T_0 = 41$.<br><br>(b) The company's annual fleet maintenance cost, $C$ (in millions of pounds), is modelled by:<br>$$C = 0.2 \\times 1.085^t$$<br>Use the models to show that the annual maintenance cost and the total fleet value will be equal during the 40th year.",
        "steps": [
            "For Part (a)(i), set the value $V$ equal to $0$ and expand the exponents: $$0 = 4 + 40\\left(\\dfrac{T}{20}\\right)^3 - 20\\left(\\dfrac{T}{20}\\right)^4 \\implies 0 = 4 + 40\\left(\\dfrac{T^3}{8\\,000}\\right) - 20\\left(\\dfrac{T^4}{160\\,000}\\right)$$, which simplifies to: $$0 = 4 + \\dfrac{T^3}{200} - \\dfrac{T^4}{8\\,000}$$",
            "Multiply the entire equation by $8\\,000$ to clear the fractions: $$0 = 32\\,000 + 40T^3 - T^4$$",
            "Rearrange the terms and divide both sides by $T$ (since $T > 0$): $$T^4 = 40T^3 + 32\\,000 \\implies T^3 = 40T^2 + \\dfrac{32\\,000}{T}$$",
            "Take the cube root of both sides to obtain the target iterative relation: $$T = \\sqrt[3]{40T^2 + \\dfrac{32\\,000}{T}}$$ as required.",
            "For Part (a)(ii), substitute $T_0 = 41$ into the formula to find the successive iterations: $$T_1 = \\sqrt[3]{40(41)^2 + \\dfrac{32\\,000}{41}} = \\sqrt[3]{67\\,240 + 780.487} = \\sqrt[3]{68\\,020.487} \\approx 40.821$$",
            "Find the subsequent terms carrying full decimal precision: $$T_2 = \\sqrt[3]{40(40.8205)^2 + \\dfrac{32\\,000}{40.8205}} \\approx \\sqrt[3]{67\\,436.4} \\approx 40.704$$ and $$T_3 = \\sqrt[3]{40(40.7037)^2 + \\dfrac{32\\,000}{40.7037}} \\approx \\sqrt[3]{67\\,057.5} \\approx 40.627$$",
            "For Part (a)(iii), explain the relevance: $T = 41$ years corresponds to a realistic starting estimate that is close to the expected root (since the fleet value depreciates to zero just over 40 years), which improves the speed of convergence.",
            "For Part (b), find the intersection interval by evaluating the difference between fleet value and maintenance costs. Let $f(t) = V - C$.",
            "Evaluate both models at $t = 39$: $$V = 4 + 40\\left(\\dfrac{39}{20}\\right)^3 - 20\\left(\\dfrac{39}{20}\\right)^4 \\approx 11.42\\text{ million}$$ and $$C = 0.2 \times 1.085^{39} \\approx 4.82\\text{ million}$$. Since $11.42 > 4.82$, fleet value exceeds maintenance costs.",
            "Evaluate both models at $t = 40$: $$V = 4 + 40\\left(\\dfrac{40}{20}\\right)^3 - 20\\left(\\dfrac{40}{20}\\right)^4 = 4\\text{ million}$$ and $$C = 0.2 \times 1.085^{40} \\approx 5.23\\text{ million}$$. Since $4 < 5.23$, maintenance costs now exceed the fleet value.",
            "Since the difference $V - C$ changes sign from positive to negative between $t = 39$ and $t = 40$, the curves must intersect during this interval (which corresponds exactly to the 40th year).",
            "Final Answer: $$\\text{Part (a)(ii): } T_1 = 40.821,\\ T_2 = 40.704,\\ T_3 = 40.627,\\quad \\text{Part (b): } 39 < t < 40 \\implies \\text{40th year}$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Part (a)(ii): } T_1 = 40.820,\\ T_2 = 40.730,\\ T_3 = 40.670,\\quad \\text{Part (b): } 39 < t < 40 \\implies \\text{40th year}$$",
                "feedback": "In Part (a)(ii), you probably made a minor rounding slip when calculating the cube root of $68,020.5$. Carrying the rounded value $T_1 \\approx 40.820$ instead of $40.821$ caused your subsequent iterations to drift. Use full calculator accuracy."
            },
            {
                "ans": "$$\\text{Part (a)(ii): } T_1 = 40.821,\\ T_2 = 40.704,\\ T_3 = 40.627,\\quad \\text{Part (b): } 38 < t < 39 \\implies \\text{39th year}$$",
                "feedback": "In Part (b), check your interval analysis. While $t = 39$ is your target value, evaluating both models shows that they do not cross until $t$ is between $39$ and $40$, which corresponds to the 40th year."
            },
            {
                "ans": "$$\\text{Part (a)(ii): } T_1 = 40.821,\\ T_2 = 40.704,\\ T_3 = 40.627,\\quad \\text{Part (b): } 40 < t < 41 \\implies \\text{41st year}$$",
                "feedback": "In Part (b), check your arithmetic when evaluating both models at $t = 39$. Since $V \\approx 11.42$ and $C \\approx 4.82$, fleet value is still greater than maintenance costs, meaning they have not crossed yet."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Sanity Checking Your Boundaries",
            "content": "When performing interval analysis, always write out the decimal values of both models at the boundary endpoints. Showing a clear sign change in your difference function is probably the most reliable way to secure full reasoning marks."
        }
    }




];