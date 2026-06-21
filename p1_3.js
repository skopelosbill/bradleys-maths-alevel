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
        "id": "004092",
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
        "major_area": "Calculus",
        "topic": "Differentiation",
        "subtopic": [
            "Parametric Differentiation",
            "Parametric Equations"
        ],
        "img": false,
        "question": "A circle has center $O(0, 0)$ and radius $R = 6$. A tangent is drawn to the circle from an external point $P(10, 0)$, touching the circle at $T(3.6, 4.8)$.<br><br>(a) Show that the tangent line $PT$ is perpendicular to the radius $OT$.<br><br>(b) (i) Find the cosine of angle $POT$ using the vectors $OP$ and $OT$, and hence use the Cosine Rule on triangle $OPT$ to show that $PT = 8$.<br><br>(b) (ii) Determine whether the point $D(5, -4)$ lies inside the circle, on the circle, or outside the circle. Fully justify your answer.",
        "steps": [
            "For Part (a), find the vectors $OT$ and $PT$: $$OT = \\left(\\begin{matrix} 3.6 \\\\ 4.8 \\end{matrix}\\right)$$ and $$PT = \\left(\\begin{array}{c} 3.6-10 \\\\ 4.8 \\end{array}\\right) = \\left(\\dfrac{-32}{5}, \\dfrac{24}{5}\\right)$$",
            "Calculate their dot product: $$OT \\cdot PT = 3.6 \\times (-6.4) + 4.8 \\times 4.8 = -23.04 + 23.04 = 0$$. Since the dot product is $0$, the radius and tangent are perpendicular.",
            "For Part (b)(i), find $\\cos(POT)$: $$\\cos(POT) = \\dfrac{OT \\cdot OP}{|OT||OP|} = \\dfrac{3.6 \\times 10}{60} = 0.6$$. Now apply the Cosine Rule on triangle $OPT$: $$PT^2 = OP^2 + OT^2 - 2(OP)(OT)\\cos(POT) = 100 + 36 - 2(10)(6)(0.6) = 136 - 72 = 64 \\implies PT = 8$$",
            "For Part (b)(ii), calculate the distance squared from $D(5, -4)$ to the center $O(0, 0)$: $$OD^2 = 5^2 + (-4)^2 = 25 + 16 = 41$$",
            "Since the distance squared $$41 > R^2 = 36$$, the distance from the point to the center of the circle is greater than the radius. Thus, the point $D$ lies outside the circle.",
            "Final Answer: $$\\text{Part (b)(i): } PT^2 = 100 + 36 - 72 = 64 \\implies PT = 8,\\quad \\text{Part (b)(ii): Outside the circle}$$"
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
                "feedback": "In Part (b)(i), the cosine of angle $POT$ is $0.6$, which probably arises from $36 \\div 60 = 0.6$. A value of $0.8$ is incorrect and will affect the subsequent Cosine Rule calculation."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Integrating Coordinate and Trig Methods",
            "content": "Integrating coordinate geometry with trigonometry (like using the Cosine Rule to verify tangent lengths) is probably the most common way AQA stretches students. Keep your coordinate calculations clear on paper before substituting them into geometric formulas."
        }
    }

];