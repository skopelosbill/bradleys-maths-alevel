window.ALEVEL_QUESTIONS = [
        {
                "id": "004551",
                "board": "OCR",
                "level": "A",
                "major_area": "Vectors",
                "topic": "Vectors",
                "subtopic": [
                        "Circle Geometry",
                        "Vector Properties"
                ],
                "img": false,
                "question": "<strong>(i)</strong> Find the exact length of the vector $\\vec{AB}$ where the points $A$ and $B$ have position vectors $\\vec{OA} = \\begin{pmatrix} 2 \\cr -3 \\cr 6 \\end{pmatrix}$ and $\\vec{OB} = \\begin{pmatrix} -2 \\cr -1 \\cr 3 \\end{pmatrix}$ respectively.<br><br><strong>(ii)</strong> Find the position vector of the midpoint of the line segment $AB$.<br><br><strong>(iii)</strong> Given two other points $P$ and $Q$ with position vectors $\\vec{OP} = \\begin{pmatrix} 2 \\cr 3 \\cr 1 \\end{pmatrix}$ and $\\vec{OQ} = \\begin{pmatrix} 6 \\cr 1 \\cr 4 \\end{pmatrix}$ respectively, show that $ABPQ$ is a parallelogram.",
                "steps": [
                        "To find the vector $\\vec{AB}$, we subtract the position vector of the starting point $A$ from the position vector of the ending point $B$:<br><br>\\begin{aligned} \\vec{AB} & = \\vec{OB} - \\vec{OA} \\cr & = \\begin{pmatrix} -2 \\cr -1 \\cr 3 \\end{pmatrix} - \\begin{pmatrix} 2 \\cr -3 \\cr 6 \\end{pmatrix} \\cr & = \\begin{pmatrix} -4 \\cr 2 \\cr -3 \\end{pmatrix} \\end{aligned}<br><br>Next, we calculate the exact length (magnitude) of the vector $\\vec{AB}$ using the 3D distance formula:<br><br>\\begin{aligned} |\\vec{AB}| & = \\sqrt{ (-4)^2 + 2^2 + (-3)^2 } \\cr & = \\sqrt{ 16 + 4 + 9 } \\cr & = \\sqrt{ 29 } \\end{aligned}",
                        "The position vector of the midpoint $M$ of $AB$ is the average of the position vectors of $A$ and $B$:<br><br>\\begin{aligned} \\vec{OM} & = \\dfrac{ 1 }{ 2 }\\left( \\vec{OA} + \\vec{OB} \\right) \\cr & = \\dfrac{ 1 }{ 2 }\\left[ \\begin{pmatrix} 2 \\cr -3 \\cr 6 \\end{pmatrix} + \\begin{pmatrix} -2 \\cr -1 \\cr 3 \\end{pmatrix} \\right] \\cr & = \\dfrac{ 1 }{ 2 }\\begin{pmatrix} 0 \\cr -4 \\cr 9 \\end{pmatrix} \\cr & = \\begin{pmatrix} 0 \\cr -2 \\cr \\dfrac{ 9 }{ 2 } \\end{pmatrix} \\end{aligned}",
                        "To prove that $ABPQ$ is a parallelogram, we must show that opposite sides are represented by equal vectors, which guarantees they are parallel and equal in length.<br><br>Let us first find the side vectors $\\vec{AB}$ and $\\vec{QP}$:<br><br>\\begin{aligned} \\vec{AB} & = \\begin{pmatrix} -4 \\cr 2 \\cr -3 \\end{pmatrix} \\cr \\vec{QP} & = \\vec{OP} - \\vec{OQ} \\cr & = \\begin{pmatrix} 2 \\cr 3 \\cr 1 \\end{pmatrix} - \\begin{pmatrix} 6 \\cr 1 \\cr 4 \\end{pmatrix} \\cr & = \\begin{pmatrix} -4 \\cr 2 \\cr -3 \\end{pmatrix} \\end{aligned}<br><br>Since $\\vec{AB} = \\vec{QP}$, this pair of opposite sides is equal and parallel.<br><br>Next, let us verify the other pair of opposite sides, represented by $\\vec{BP}$ and $\\vec{AQ}$:<br><br>\\begin{aligned} \\vec{BP} & = \\vec{OP} - \\vec{OB} \\cr & = \\begin{pmatrix} 2 \\cr 3 \\cr 1 \\end{pmatrix} - \\begin{pmatrix} -2 \\cr -1 \\cr 3 \\end{pmatrix} \\cr & = \\begin{pmatrix} 4 \\cr 4 \\cr -2 \\end{pmatrix} \\cr \\vec{AQ} & = \\vec{OQ} - \\vec{OA} \\cr & = \\begin{pmatrix} 6 \\cr 1 \\cr 4 \\end{pmatrix} - \\begin{pmatrix} 2 \\cr -3 \\cr 6 \\end{pmatrix} \\cr & = \\begin{pmatrix} 4 \\cr 4 \\cr -2 \\end{pmatrix} \\end{aligned}<br><br>Since $\\vec{BP} = \\vec{AQ}$, the second pair of opposite sides is also equal and parallel. Therefore, the quadrilateral $ABPQ$ is a parallelogram."
                ],
                "pi_options": [
                        {
                                "ans": "$$\\sqrt{ 11 }$$",
                                "feedback": "This error occurs if you subtract the squares instead of adding them in the magnitude formula (e.g., calculating $16 - 4 - 9 = 3$ or a similar arithmetic sign slip)."
                        },
                        {
                                "ans": "$$29$$",
                                "feedback": "This error occurs if you forget to apply the square root at the end of the vector magnitude formula."
                        },
                        {
                                "ans": "$$5.39$$",
                                "feedback": "While numerically close (since $\\sqrt{ 29 } \\approx 5.39$), the question specifically asks for the exact length, which must be left in surd form as $\\sqrt{ 29 }$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Parallelogram Letter Order",
                        "content": "When proving a quadrilateral like $ABPQ$ is a parallelogram, pay close attention to the order of the letters. The vertices are arranged sequentially around the shape, meaning the side opposite to $AB$ is $QP$ (going in the reverse direction), not $PQ$. Therefore, you must show that $\\vec{AB} = \\vec{QP}$, or alternatively that $\\vec{AB} = -\\vec{PQ}$."
                }
        },
        {
                "id": "004552",
                "board": "OCR",
                "level": "A",
                "major_area": "Vectors",
                "topic": "Vectors",
                "subtopic": [
                        "Vector Properties"
                ],
                "img": false,
                "question": "<strong>(i)</strong> The points $A$, $B$, and $C$ have coordinates $A(1, 3, -2)$, $B(4, -1, 3)$, and $C(2, 5, 1)$. Find the coordinates of point $D$ such that $ABCD$ is a parallelogram.<br><br><strong>(ii)</strong> Find the exact length of the diagonal $AC$.<br><br><strong>(iii)</strong> Show that the diagonals of the parallelogram $ABCD$ do not intersect at right angles.",
                "steps": [
                        "For a quadrilateral $ABCD$ to be a parallelogram, the vector representing the side $\\vec{AB}$ must be exactly equal to the vector representing the opposite side $\\vec{DC}$:<br><br>\\begin{aligned} \\vec{AB} & = \\vec{DC} \\cr \\vec{OB} - \\vec{OA} & = \\vec{OC} - \\vec{OD} \\end{aligned}<br><br>Rearranging this equation to solve for the position vector of $D$, we find:<br><br>\\begin{aligned} \\vec{OD} & = \\vec{OA} + \\vec{OC} - \\vec{OB} \\cr & = \\begin{pmatrix} 1 \\cr 3 \\cr -2 \\end{pmatrix} + \\begin{pmatrix} 2 \\cr 5 \\cr 1 \\end{pmatrix} - \\begin{pmatrix} 4 \\cr -1 \\cr 3 \\end{pmatrix} \\cr & = \\begin{pmatrix} 1 + 2 - 4 \\cr 3 + 5 - (-1) \\cr -2 + 1 - 3 \\end{pmatrix} \\cr & = \\begin{pmatrix} -1 \\cr 9 \\cr -4 \\end{pmatrix} \\end{aligned}<br><br>Thus, the coordinates of point $D$ are $(-1, 9, -4)$.",
                        "First, we find the displacement vector $\\vec{AC}$ by subtracting the coordinates of the starting point $A$ from the coordinates of the ending point $C$:<br><br>\\begin{aligned} \\vec{AC} & = \\begin{pmatrix} 2 - 1 \\cr 5 - 3 \\cr 1 - (-2) \\end{pmatrix} \\cr & = \\begin{pmatrix} 1 \\cr 2 \\cr 3 \\end{pmatrix} \\end{aligned}<br><br>Next, we find the exact length using the 3D magnitude formula:<br><br>\\begin{aligned} |\\vec{AC}| & = \\sqrt{ 1^2 + 2^2 + 3^2 } \\cr & = \\sqrt{ 1 + 4 + 9 } \\cr & = \\sqrt{ 14 } \\end{aligned}",
                        "Two vectors are perpendicular if and only if their scalar (dot) product is exactly equal to zero. The diagonals of our parallelogram are the vectors $\\vec{AC}$ and $\\vec{BD}$.<br><br>First, let us find the vector representation of the second diagonal $\\vec{BD}$:<br><br>\\begin{aligned} \\vec{BD} & = \\vec{OD} - \\vec{OB} \\cr & = \\begin{pmatrix} -1 \\cr 9 \\cr -4 \\end{pmatrix} - \\begin{pmatrix} 4 \\cr -1 \\cr 3 \\end{pmatrix} \\cr & = \\begin{pmatrix} -5 \\cr 10 \\cr -7 \\end{pmatrix} \\end{aligned}<br><br>Now, we compute the dot product of the two diagonals $\\vec{AC} \\cdot \\vec{BD}$:<br><br>\\begin{aligned} \\vec{AC} \\cdot \\vec{BD} & = \\begin{pmatrix} 1 \\cr 2 \\cr 3 \\end{pmatrix} \\cdot \\begin{pmatrix} -5 \\cr 10 \\cr -7 \\end{pmatrix} \\cr & = (1)(-5) + (2)(10) + (3)(-7) \\cr & = -5 + 20 - 21 \\cr & = -6 \\end{aligned}<br><br>Since the scalar product is $-6 \\ne 0$, the diagonals $\\vec{AC}$ and $\\vec{BD}$ are not perpendicular. Consequently, the diagonals of parallelogram $ABCD$ do not intersect at right angles."
                ],
                "pi_options": [
                        {
                                "ans": "$$D(1, 1, 6)$$",
                                "feedback": "This error occurs if you use the incorrect vector relation $\\vec{OD} = \\vec{OB} + \\vec{OA} - \\vec{OC}$, which misidentifies which sides of the parallelogram are opposite to each other."
                        },
                        {
                                "ans": "$$D(-1, 7, -4)$$",
                                "feedback": "This error comes from an arithmetic sign slip in the $y$-coordinate calculation, incorrectly computing $3 + 5 - 1 = 7$ instead of subtracting the negative value $-1$."
                        },
                        {
                                "ans": "$$D(7, 7, 2)$$",
                                "feedback": "This is caused by simply adding all the coordinates of points $A$, $B$, and $C$ together, which has no valid vector geometric basis."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Parallelogram Vector Equality",
                        "content": "For any parallelogram labeled sequentially as $ABCD$, the opposite side vectors must point in the same direction to be equal. That means $\\vec{AB} = \\vec{DC}$ (not $\\vec{CD}$) and $\\vec{AD} = \\vec{BC}$ (not $\\vec{CB}$). Setting up this initial vector equality correctly is the key to avoiding sign slips."
                }
        },
        {
                "id": "004553",
                "board": "OCR",
                "level": "A",
                "major_area": "Vectors",
                "topic": "Vectors",
                "subtopic": [
                        "Coordinate Geometry",
                        "Vector Properties"
                ],
                "img": false,
                "question": "<strong>(i)</strong> The points $A$, $B$, and $C$ have position vectors $\\vec{OA} = \\begin{pmatrix} 1 \\cr 4 \\cr -2 \\end{pmatrix}$, $\\vec{OB} = \\begin{pmatrix} 3 \\cr 2 \\cr 1 \\end{pmatrix}$, and $\\vec{OC} = \\begin{pmatrix} 7 \\cr -2 \\cr 7 \\end{pmatrix}$ respectively. Find the vectors $\\vec{AB}$ and $\\vec{BC}$ in component form.<br><br><strong>(ii)</strong> Show that the points $A$, $B$, and $C$ are collinear.<br><br><strong>(iii)</strong> A fourth point $D$ lies on the line segment $AC$ such that $\\vec{AD} = 2\\vec{DC}$. Find the coordinates of $D$.",
                "steps": [
                        "We calculate the vectors $\\vec{AB}$ and $\\vec{BC}$ by subtracting coordinates:<br><br>\\begin{aligned} \\vec{AB} & = \\vec{OB} - \\vec{OA} \\cr & = \\begin{pmatrix} 3 \\cr 2 \\cr 1 \\end{pmatrix} - \\begin{pmatrix} 1 \\cr 4 \\cr -2 \\end{pmatrix} \\cr & = \\begin{pmatrix} 2 \\cr -2 \\cr 3 \\end{pmatrix} \\cr \\vec{BC} & = \\vec{OC} - \\vec{OB} \\cr & = \\begin{pmatrix} 7 \\cr -2 \\cr 7 \\end{pmatrix} - \\begin{pmatrix} 3 \\cr 2 \\cr 1 \\end{pmatrix} \\cr & = \\begin{pmatrix} 4 \\cr -4 \\cr 6 \\end{pmatrix} \\end{aligned}",
                        "Comparing the vectors $\\vec{AB}$ and $\\vec{BC}$, we can see that one is a scalar multiple of the other:<br><br>\\begin{aligned} \\vec{BC} & = \\begin{pmatrix} 4 \\cr -4 \\cr 6 \\end{pmatrix} \\cr & = 2\\begin{pmatrix} 2 \\cr -2 \\cr 3 \\end{pmatrix} \\cr & = 2\\vec{AB} \\end{aligned}<br><br>Since $\\vec{BC} = 2\\vec{AB}$, the vectors $\\vec{BC}$ and $\\vec{AB}$ are parallel. Because they share the common point $B$, the points $A$, $B$, and $C$ must lie on the same straight line. Thus, they are collinear.",
                        "The point $D$ lies on the line segment $AC$ such that $\\vec{AD} = 2\\vec{DC}$. Let the position vector of $D$ be $\\vec{OD}$:<br><br>\\begin{aligned} \\vec{OD} - \\vec{OA} & = 2\\left( \\vec{OC} - \\vec{OD} \\right) \\cr \\vec{OD} - \\vec{OA} & = 2\\vec{OC} - 2\\vec{OD} \\cr 3\\vec{OD} & = \\vec{OA} + 2\\vec{OC} \\cr \\vec{OD} & = \\dfrac{ 1 }{ 3 }\\left( \\vec{OA} + 2\\vec{OC} \\right) \\end{aligned}<br><br>Now we substitute the position vectors of $A$ and $C$ into this relation:<br><br>\\begin{aligned} \\vec{OD} & = \\dfrac{ 1 }{ 3 }\\left[ \\begin{pmatrix} 1 \\cr 4 \\cr -2 \\end{pmatrix} + 2\\begin{pmatrix} 7 \\cr -2 \\cr 7 \\end{pmatrix} \\right] \\cr & = \\dfrac{ 1 }{ 3 }\\left[ \\begin{pmatrix} 1 \\cr 4 \\cr -2 \\end{pmatrix} + \\begin{pmatrix} 14 \\cr -4 \\cr 14 \\end{pmatrix} \\right] \\cr & = \\dfrac{ 1 }{ 3 }\\begin{pmatrix} 15 \\cr 0 \\cr 12 \\end{pmatrix} \\cr & = \\begin{pmatrix} 5 \\cr 0 \\cr 4 \\end{pmatrix} \\end{aligned}<br><br>Thus, the coordinates of $D$ are $(5, 0, 4)$."
                ],
                "pi_options": [
                        {
                                "ans": "$$D(4, 1, 3)$$",
                                "feedback": "This error arises if you incorrectly apply the midpoint formula $\\vec{OD} = \\dfrac{ \\vec{OA} + \\vec{OC} }{ 2 }$, which completely ignores the $2:1$ division ratio of the segment."
                        },
                        {
                                "ans": "$$D(3, 2, 5)$$",
                                "feedback": "This results from dividing the coordinates by $2$ instead of $3$ after adding $\\vec{OA} + 2\\vec{OC}$, which is a common ratio theorem formula error."
                        },
                        {
                                "ans": "$$D(9, -2, 11)$$",
                                "feedback": "This error occurs if you translate from point $C$ in the direction of $2\\vec{AC}$ instead of dividing the segment $AC$, leading to a point lying far outside the line segment."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Collinearity Proofs",
                        "content": "To prove that three points $A$, $B$, and $C$ are collinear, a simple parallel vector check is not enough. You must explicitly state two conditions: first, that the vectors (such as $\\vec{AB}$ and $\\vec{BC}$) are scalar multiples and thus parallel; second, that they share a common point (in this case, $B$). Skipping either part will cost you marks in a written exam!"
                }
        },
        {
                "id": "004554",
                "board": "OCR",
                "level": "A",
                "major_area": "Vectors",
                "topic": "Vectors",
                "subtopic": [
                        "Trigonometry",
                        "Vector Properties"
                ],
                "img": false,
                "question": "<strong>(i)</strong> The points $P$, $Q$, and $R$ have position vectors $\\vec{OP} = \\begin{pmatrix} 1 \\cr -2 \\cr 3 \\end{pmatrix}$, $\\vec{OQ} = \\begin{pmatrix} 4 \\cr y \\cr 1 \\end{pmatrix}$, and $\\vec{OR} = \\begin{pmatrix} 3 \\cr -3 \\cr 7 \\end{pmatrix}$ respectively. Write down the vectors $\\vec{PQ}$ and $\\vec{PR}$ in terms of the constant $y$.<br><br><strong>(ii)</strong> Given that the line $PQ$ is perpendicular to the line $PR$, find the value of the constant $y$.<br><br><strong>(iii)</strong> Using your value of $y$ from part (ii), find the exact value of the cosine of the angle between $\\vec{PQ}$ and the positive $z$-axis.",
                "steps": [
                        "We find the displacement vectors $\\vec{PQ}$ and $\\vec{PR}$ by subtracting the position vector of the starting point $P$ from the ending points $Q$ and $R$:<br><br>\\begin{aligned} \\vec{PQ} & = \\vec{OQ} - \\vec{OP} \\cr & = \\begin{pmatrix} 4 \\cr y \\cr 1 \\end{pmatrix} - \\begin{pmatrix} 1 \\cr -2 \\cr 3 \\end{pmatrix} \\cr & = \\begin{pmatrix} 3 \\cr y + 2 \\cr -2 \\end{pmatrix} \\cr \\vec{PR} & = \\vec{OR} - \\vec{OP} \\cr & = \\begin{pmatrix} 3 \\cr -3 \\cr 7 \\end{pmatrix} - \\begin{pmatrix} 1 \\cr -2 \\cr 3 \\end{pmatrix} \\cr & = \\begin{pmatrix} 2 \\cr -1 \\cr 4 \\end{pmatrix} \\end{aligned}",
                        "Since the lines $PQ$ and $PR$ are perpendicular, their corresponding direction vectors must be perpendicular. This means their dot product must equal zero:<br><br>\\begin{aligned} \\vec{PQ} \\cdot \\vec{PR} & = 0 \\cr \\begin{pmatrix} 3 \\cr y + 2 \\cr -2 \\end{pmatrix} \\cdot \\begin{pmatrix} 2 \\cr -1 \\cr 4 \\end{pmatrix} & = 0 \\cr (3)(2) + (y + 2)(-1) + (-2)(4) & = 0 \\cr 6 - y - 2 - 8 & = 0 \\cr -y - 4 & = 0 \\cr y & = -4 \\end{aligned}",
                        "With $y = -4$, the vector $\\vec{PQ}$ is:<br><br>\\begin{aligned} \\vec{PQ} & = \\begin{pmatrix} 3 \\cr -2 \\cr -2 \\end{pmatrix} \\end{aligned}<br><br>The positive $z$-axis is represented by the unit vector $\\vec{k} = \\begin{pmatrix} 0 \\cr 0 \\cr 1 \\end{pmatrix}$. The cosine of the angle $\\theta$ between $\\vec{PQ}$ and $\\vec{k}$ is:<br><br>\\begin{aligned} \\cos\\theta & = \\dfrac{ \\vec{PQ} \\cdot \\vec{k} }{ |\\vec{PQ}| |\\vec{k}| } \\end{aligned}<br><br>First, let us find the length of $\\vec{PQ}$:<br><br>\\begin{aligned} |\\vec{PQ}| & = \\sqrt{ 3^2 + (-2)^2 + (-2)^2 } \\cr & = \\sqrt{ 9 + 4 + 4 } \\cr & = \\sqrt{ 17 } \\end{aligned}<br><br>Now, we compute the dot product and the cosine value:<br><br>\\begin{aligned} \\vec{PQ} \\cdot \\vec{k} & = (3)(0) + (-2)(0) + (-2)(1) \\cr & = -2 \\cr \\cos\\theta & = \\dfrac{ -2 }{ \\sqrt{ 17 } \\times 1 } \\cr & = -\\dfrac{ 2 }{ \\sqrt{ 17 } } \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\dfrac{ 3 }{ \\sqrt{ 17 } }$$",
                                "feedback": "This error occurs if you find the cosine of the angle with the positive $x$-axis instead of the positive $z$-axis."
                        },
                        {
                                "ans": "$$-\\dfrac{ 2 }{ 17 }$$",
                                "feedback": "This is caused by forgetting to take the square root of the sum of squares when calculating the magnitude of $\\vec{PQ}$ in the denominator."
                        },
                        {
                                "ans": "$$\\dfrac{ 2 }{ \\sqrt{ 17 } }$$",
                                "feedback": "This is a sign slip in the dot product calculation, incorrectly treating the $z$-component of $\\vec{PQ}$ as $+2$ instead of $-2$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Direction Angles",
                        "content": "Finding the angle a 3D vector makes with a coordinate axis (such as the $z$-axis) is a simple but frequently tested concept. Remember that the coordinate axes are represented by the standard unit vectors $\\vec{i} = (1, 0, 0)$, $\\vec{j} = (0, 1, 0)$, and $\\vec{k} = (0, 0, 1)$. Taking the dot product of a vector with $\\vec{k}$ simply extracts its $z$-component!"
                }
        },
        {
                "id": "004555",
                "board": "OCR",
                "level": "A",
                "major_area": "Vectors",
                "topic": "Vectors",
                "subtopic": [
                        "Vector Properties"
                ],
                "img": false,
                "question": "<strong>(i)</strong> The vertices of a triangle are $A(2, 1, -1)$, $B(3, -1, 2)$, and $C(5, 2, 1)$. Show that the triangle $ABC$ is equilateral.<br><br><strong>(ii)</strong> Find the exact value of the scalar product $\\vec{AB} \\cdot \\vec{AC}$.<br><br><strong>(iii)</strong> Use your answer to part (ii) to calculate the size of angle $BAC$ in degrees.",
                "steps": [
                        "To show that triangle $ABC$ is equilateral, we must find the lengths of all three sides: $AB$, $AC$, and $BC$.<br><br>First, we find the displacement vectors:<br><br>\\begin{aligned} \\vec{AB} & = \\vec{OB} - \\vec{OA} \\cr & = \\begin{pmatrix} 3 - 2 \\cr -1 - 1 \\cr 2 - (-1) \\end{pmatrix} \\cr & = \\begin{pmatrix} 1 \\cr -2 \\cr 3 \\end{pmatrix} \\cr \\vec{AC} & = \\vec{OC} - \\vec{OA} \\cr & = \\begin{pmatrix} 5 - 2 \\cr 2 - 1 \\cr 1 - (-1) \\end{pmatrix} \\cr & = \\begin{pmatrix} 3 \\cr 1 \\cr 2 \\end{pmatrix} \\cr \\vec{BC} & = \\vec{OC} - \\vec{OB} \\cr & = \\begin{pmatrix} 5 - 3 \\cr 2 - (-1) \\cr 1 - 2 \\end{pmatrix} \\cr & = \\begin{pmatrix} 2 \\cr 3 \\cr -1 \\end{pmatrix} \\end{aligned}<br><br>Next, we calculate the length of each vector:<br><br>\\begin{aligned} |\\vec{AB}| & = \\sqrt{ 1^2 + (-2)^2 + 3^2 } = \\sqrt{ 1 + 4 + 9 } = \\sqrt{ 14 } \\cr |\\vec{AC}| & = \\sqrt{ 3^2 + 1^2 + 2^2 } = \\sqrt{ 9 + 1 + 4 } = \\sqrt{ 14 } \\cr |\\vec{BC}| & = \\sqrt{ 2^2 + 3^2 + (-1)^2 } = \\sqrt{ 4 + 9 + 1 } = \\sqrt{ 14 } \\end{aligned}<br><br>Since the lengths of all three sides are equal ($|\\vec{AB}| = |\\vec{AC}| = |\\vec{BC}| = \\sqrt{ 14 }$), the triangle $ABC$ is equilateral.",
                        "We find the scalar product $\\vec{AB} \\cdot \\vec{AC}$ using their components:<br><br>\\begin{aligned} \\vec{AB} \\cdot \\vec{AC} & = \\begin{pmatrix} 1 \\cr -2 \\cr 3 \\end{pmatrix} \\cdot \\begin{pmatrix} 3 \\cr 1 \\cr 2 \\end{pmatrix} \\cr & = (1)(3) + (-2)(1) + (3)(2) \\cr & = 3 - 2 + 6 \\cr & = 7 \\end{aligned}",
                        "Using the geometric definition of the scalar product, we can find the angle $\\angle BAC$:<br><br>\\begin{aligned} \\vec{AB} \\cdot \\vec{AC} & = |\\vec{AB}| |\\vec{AC}| \\cos(\\angle BAC) \\cr \\cos(\\angle BAC) & = \\dfrac{ \\vec{AB} \\cdot \\vec{AC} }{ |\\vec{AB}| |\\vec{AC}| } \\cr & = \\dfrac{ 7 }{ \\sqrt{ 14 } \\times \\sqrt{ 14 } } \\cr & = \\dfrac{ 7 }{ 14 } \\cr & = \\dfrac{ 1 }{ 2 } \\end{aligned}<br><br>Since $\\cos(\\angle BAC) = \\dfrac{ 1 }{ 2 }$, the angle is:<br><br>\\begin{aligned} \\angle BAC & = 60^\\circ \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$30^\\circ$$",
                                "feedback": "This error arises if you confuse the standard trigonometric ratios for special angles, incorrectly solving $\\cos(\\angle BAC) = \\dfrac{ \\sqrt{ 3 } }{ 2 }$ instead of $\\dfrac{ 1 }{ 2 }$."
                        },
                        {
                                "ans": "$$90^\\circ$$",
                                "feedback": "This is caused by assuming the triangle is right-angled or by making a sign slip that results in a scalar product of zero."
                        },
                        {
                                "ans": "$$45^\\circ$$",
                                "feedback": "This comes from a sign slip in the scalar product calculation, which leads to an incorrect cosine value of $\\dfrac{ \\sqrt{ 2 } }{ 2 }$."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Beautiful Consistency Checks",
                        "content": "When solving coordinate geometry questions, use your geometric deductions as an automatic sanity check. Since you proved in part (i) that the triangle is equilateral, you already know before starting part (iii) that the internal angle <i>must</i> be exactly $60^\\circ$. If your scalar product calculation yields any other angle, you instantly know you made a prior coordinate sign error!"
                }
        },
        {
                "id": "004556",
                "board": "OCR",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Functions and Graphs",
                "subtopic": [
                        "Curved Graphs",
                        "Modelling and Applications"
                ],
                "img": "images/Pure/004556.png",
                "question": "Four athletes—Alex, Beth, Charlie, and Diana—are discussing the relationship between the time, $t$ hours, they spend training per week, and the percentage, $p\\%$, of their peak athletic performance they expect to achieve. Each draws a graph to model this relationship (shown in the diagram):<br><br><strong>(i)</strong> Assuming Alex's model is correct, how many hours would you recommend he spends training per week?<br><br><strong>(ii)</strong> State one feature of Diana's model that is likely to be unrealistic in a real-world physical context.<br><br><strong>(iii)</strong> Suggest a reason in terms of physical biology (such as fatigue or overtraining) for the shape of Beth's graph as compared with Alex's graph.<br><br><strong>(iv)</strong> What does Charlie's model suggest about either his natural athletic ability or his attitude toward training?",
                "steps": [
                        "According to Alex's model, his performance increases linearly from $40\\%$ at $t = 0$ until it reaches a maximum of $100\\%$ at $t = 10$. For any training time greater than $10$ hours (i.e., $t > 10$), his expected performance remains flat at $100\\%$.<br><br>Therefore, any weekly training time of at least $10$ hours will yield peak performance. The natural recommendation is to spend exactly $10$ hours training per week, as any extra time spent training does not increase his expected performance further.",
                        "Diana's model has expected performance $p$ increasing linearly without bound, meaning it passes $100\\%$ at $t = 8$ and reaches $120\\%$ at $t = 12$.<br><br>In a real-world physical context, this feature is highly unrealistic. Athletic performance cannot increase indefinitely, and it is physically impossible to perform at more than $100\\%$ of one's absolute peak capacity.",
                        "Alex's model is purely linear, assuming that each extra hour of training always adds the same constant increase to performance. In contrast, Beth's model curves downwards (it is concave).<br><br>Beth's graph represents the law of diminishing returns. In physical biology, early training hours produce large performance gains, but as training hours accumulate, biological limits, muscle fatigue, and the risk of overtraining set in. Consequently, each additional hour of training yields smaller and smaller performance improvements as the curve approaches the absolute ceiling of $100\\%$.",
                        "Charlie's model shows a constant performance of $100\\%$ at all times, even when $t = 0$.<br><br>This model suggests that Charlie either believes he possesses such immense natural athletic ability that he is always at absolute peak performance without needing any training, or he holds an overconfident or dismissive attitude towards training, believing that physical preparation has no effect on his performance."
                ],
                "pi_options": [
                        {
                                "ans": "$$12 \\text{ hours per week}$$",
                                "feedback": "This is based on Beth's model's limit or Diana's data point, rather than Alex's model which reaches its peak and levels off at exactly $10$ hours."
                        },
                        {
                                "ans": "$$8 \\text{ hours per week}$$",
                                "feedback": "This is the time at which Diana's model reaches $100\\%$, but Alex's linear model is still increasing at this point and does not reach its maximum until $10$ hours."
                        },
                        {
                                "ans": "$$0 \\text{ hours per week}$$",
                                "feedback": "This corresponds to Charlie's model, where training is completely redundant, but Alex's model requires active training to improve from $40\\%$ up to the $100\\%$ peak."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Qualitative Modeling Interpretations",
                        "content": "Qualitative modeling questions do not require complex calculations, but they demand precise terminology. When explaining why a model is unrealistic, always refer to physical limitations (such as the impossibility of exceeding $100\\%$ performance). When describing curved profiles, use terms like <em>diminishing returns</em> or <em>diminishing rate of increase</em>."
                }
        },
        {
                "id": "004557",
                "board": "OCR",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Coordinate Geometry",
                "subtopic": [
                        "Linear Equations",
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "<strong>(i)</strong> A manufacturer models the total daily cost, $C$ (£), of producing $x$ units of a product using the linear equation $C = mx + c$, where $m$ and $c$ are constants.<br><br><strong>(ii)</strong> The manufacturer finds that producing $100$ units costs £$1500$, and producing $250$ units costs £$2700$. Use this information to calculate the values of $m$ and $c$.<br><br><strong>(iii)</strong> State what the gradient $m$ represents, and explain why this linear model is likely to become unrealistic if $x$ becomes extremely large.",
                "steps": [
                        "In the linear cost model $C = mx + c$, when no units are produced ($x = 0$), the total cost is:<br><br>\\begin{aligned} C & = m(0) + c \\cr & = c \\end{aligned}<br><br>Therefore, the constant $c$ represents the fixed daily overhead costs of the business (such as rent, machinery leasing, core salaries, and utilities) that must be paid regardless of the production output level.",
                        "We are given two cost-quantity data points: $C = 1500$ when $x = 100$, and $C = 2700$ when $x = 250$. Substituting these into our linear equation gives a pair of simultaneous equations:<br><br>\\begin{aligned} 100m + c & = 1500 \\quad \\text{--- (Equation 1)} \\cr 250m + c & = 2700 \\quad \\text{--- (Equation 2)} \\end{aligned}<br><br>To eliminate the constant $c$, we subtract Equation 1 from Equation 2:<br><br>\\begin{aligned} (250m + c) - (100m + c) & = 2700 - 1500 \\cr 150m & = 1200 \\cr m & = 8 \\end{aligned}<br><br>Now, we substitute $m = 8$ back into Equation 1 to find $c$:<br><br>\\begin{aligned} 100(8) + c & = 1500 \\cr 800 + c & = 1500 \\cr c & = 700 \\end{aligned}<br><br>Thus, $m = 8$ and $c = 700$.",
                        "The gradient $m = 8$ represents the variable cost per unit, which is the additional cost incurred to manufacture each additional unit of the product.<br><br>For extremely large values of $x$, this linear model becomes unrealistic because it assumes the unit production cost remains constant forever. In a real-world factory, large-scale production introduces non-linear factors such as bulk purchasing discounts on raw materials (which decreases the marginal cost), or factory capacity limits and overtime labor rates (which increases the marginal cost)."
                ],
                "pi_options": [
                        {
                                "ans": "$$m = 10,\\ c = 500$$",
                                "feedback": "This error occurs if you make a subtraction slip when finding the difference in production units, calculating $250 - 100 = 120$ instead of $150$, leading to $1200 / 120 = 10$."
                        },
                        {
                                "ans": "$$m = 8,\\ c = 1500$$",
                                "feedback": "This is a common conceptual slip where the fixed cost $c$ is incorrectly assumed to be the total cost of producing the first batch of $100$ units, rather than subtracting the variable costs."
                        },
                        {
                                "ans": "$$m = -8,\\ c = 2300$$",
                                "feedback": "This arises from a sign transposition error when setting up the simultaneous equations, yielding a negative variable cost which is commercially impossible."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Interpreting Linear Parameters",
                        "content": "In any coordinate geometry modeling problem, always associate the algebraic components with real-world terms. The $y$-intercept (the constant $c$) always represents the initial, boundary, or fixed state when the independent variable is zero. The gradient ($m$) always represents the rate of change—in this case, the marginal cost of producing one extra unit."
                }
        },
        {
                "id": "004558",
                "board": "OCR",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Modelling and Applications",
                        "Quadratics"
                ],
                "img": false,
                "question": "<strong>(i)</strong> The height, $h$ metres, of a projectile fired vertically upwards from a raised platform is modeled by the equation $h = 15 + 20t - 5t^2$, where $t$ is the time in seconds after launch.<br><br><strong>(ii)</strong> By completing the square, find the maximum height reached by the projectile and the time at which this maximum height is achieved.<br><br><strong>(iii)</strong> Find the time, $t$, at which the projectile hits the ground, and state the domain of $t$ for which this model is mathematically and physically valid.",
                "steps": [
                        "The instant the projectile is launched corresponds to $t = 0$. Substituting $t = 0$ into our height equation:<br><br>\\begin{aligned} h(0) & = 15 + 20(0) - 5(0)^2 \\cr & = 15 \\end{aligned}<br><br>Thus, the height of the platform is $15$ metres.",
                        "To complete the square for $-5t^2 + 20t + 15$, we first factor out the coefficient of $t^2$ (which is $-5$) from the variable terms:<br><br>\\begin{aligned} h & = -5(t^2 - 4t) + 15 \\end{aligned}<br><br>Next, we complete the square for the expression inside the brackets by halving the coefficient of $t$ (which is $-4$), squaring it, and subtracting it:<br><br>\\begin{aligned} h & = -5\\left[ (t - 2)^2 - 2^2 \\right] + 15 \\cr & = -5\\left[ (t - 2)^2 - 4 \\right] + 15 \\cr & = -5(t - 2)^2 + 20 + 15 \\cr & = 35 - 5(t - 2)^2 \\end{aligned}<br><br>Since the term $-5(t - 2)^2 \\le 0$ for all real $t$, the maximum value of $h$ is $35$, which occurs when $(t - 2)^2 = 0 \\implies t = 2$.<br><br>Therefore, the maximum height reached is $35$ metres, which occurs $2$ seconds after launch.",
                        "The projectile hits the ground when its height is exactly zero ($h = 0$):<br><br>\\begin{aligned} 15 + 20t - 5t^2 & = 0 \\cr -5t^2 + 20t + 15 & = 0 \\end{aligned}<br><br>Dividing the entire equation by $-5$ to simplify:<br><br>\\begin{aligned} t^2 - 4t - 3 & = 0 \\end{aligned}<br><br>We solve this using the quadratic formula:<br><br>\\begin{aligned} t & = \\dfrac{ -(-4) \\pm \\sqrt{ (-4)^2 - 4(1)(-3) } }{ 2(1) } \\cr & = \\dfrac{ 4 \\pm \\sqrt{ 16 + 12 } }{ 2 } \\cr & = \\dfrac{ 4 \\pm \\sqrt{ 28 } }{ 2 } \\cr & = \\dfrac{ 4 \\pm 2\\sqrt{ 7 } }{ 2 } \\cr & = 2 \\pm \\sqrt{ 7 } \\end{aligned}<br><br>Since time cannot be negative in this context, the physical time of impact is:<br><br>\\begin{aligned} t & = 2 + \\sqrt{ 7 } \\approx 4.65 \\text{ seconds} \\end{aligned}<br><br>The model is only physically and mathematically valid from the moment of launch ($t = 0$) until the moment of impact with the ground ($t = 2 + \\sqrt{ 7 }$). Therefore, the valid domain of $t$ is:<br><br>\\begin{aligned} 0 \\le t \\le 2 + \\sqrt{ 7 } \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\text{Maximum height } 35\\text{ m at } t = 4\\text{ s}$$",
                                "feedback": "This mistake occurs if you complete the square but forget to halve the coefficient of $t$, using $(t-4)^2$ inside the brackets, leading to an incorrect time of peak height."
                        },
                        {
                                "ans": "$$\\text{Maximum height } 15\\text{ m at } t = 2\\text{ s}$$",
                                "feedback": "This error arises if you incorrectly expand the factored form as $-5(t-2)^2 - 20 + 15$, failing to distribute the negative sign to the subtracted square, which leaves the height at $15$."
                        },
                        {
                                "ans": "$$\\text{Maximum height } 35\\text{ m at } t = 5\\text{ s}$$",
                                "feedback": "This is based on a calculation slip when identifying the vertex $t$-coordinate from the completed square form."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Valid Domains of Quadratic Models",
                        "content": "A projectile model $h = 15 + 20t - 5t^2$ is a mathematical abstraction. Physically, the projectile does not exist before launch ($t < 0$) and cannot pass below ground level ($h < 0$). Always define the valid domain by solving $h = 0$ to find the positive root. The model is only valid in the interval $[0, t_{\\text{impact}}]$."
                }
        },
        {
                "id": "004559",
                "board": "OCR",
                "level": "AS",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Exponential and Logarithmic Functions and Graphs",
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "<strong>(i)</strong> The temperature, $T$ ($^\\circ\\text{C}$), of a cup of hot coffee left in a room is modeled by the equation $T = 20 + 65e^{-0.05t}$, where $t$ is the time in minutes after the coffee is poured.<br><br><strong>(ii)</strong> Describe what happens to the temperature of the coffee as $t$ becomes very large ($t \\to \\infty$), and explain what this value represents in the context of the physical environment.<br><br><strong>(iii)</strong> Find the time, to the nearest minute, when the coffee's temperature reaches $45^\\circ\\text{C}$.",
                "steps": [
                        "The instant the coffee is poured corresponds to $t = 0$. Substituting $t = 0$ into our temperature model:<br><br>\\begin{aligned} T(0) & = 20 + 65e^{-0.05(0)} \\cr & = 20 + 65e^{ 0 } \\cr & = 20 + 65(1) \\cr & = 85 \\end{aligned}<br><br>Thus, the initial temperature of the coffee is $85^\\circ\\text{C}$.",
                        "To find what happens as $t \\to \\infty$, we examine the behavior of the exponential term $e^{-0.05t}$:<br><br>\\begin{aligned} \\lim_{ t \\to \\infty } e^{-0.05t} & = 0 \\end{aligned}<br><br>Substituting this limiting behavior back into our temperature equation:<br><br>\\begin{aligned} T & \\to 20 + 65(0) \\cr T & \\to 20 \\end{aligned}<br><br>As $t$ becomes very large, the temperature of the coffee decreases and approaches a steady limit of $20^\\circ\\text{C}$. In this physical context, this value represents the ambient temperature of the room in which the coffee is cooling.",
                        "We set the temperature $T$ to $45^\\circ\\text{C}$ and solve for the time $t$:<br><br>\\begin{aligned} 45 & = 20 + 65e^{-0.05t} \\cr 25 & = 65e^{-0.05t} \\cr e^{-0.05t} & = \\dfrac{ 25 }{ 65 } \\cr e^{-0.05t} & = \\dfrac{ 5 }{ 13 } \\end{aligned}<br><br>To solve for $t$, we take the natural logarithm of both sides of the equation:<br><br>\\begin{aligned} -0.05t & = \\ln\\left( \\dfrac{ 5 }{ 13 } \\right) \\cr t & = -\\dfrac{ 1 }{ 0.05 }\\ln\\left( \\dfrac{ 5 }{ 13 } \\right) \\cr t & = -20\\ln\\left( \\dfrac{ 5 }{ 13 } \\right) \\end{aligned}<br><br>Since $\\ln\\left( \\dfrac{ 5 }{ 13 } \\right) \\approx -0.9555$, we calculate:<br><br>\\begin{aligned} t & \\approx -20(-0.9555) \\cr & \\approx 19.11 \\text{ minutes} \\end{aligned}<br><br>To the nearest minute, the coffee reaches $45^\\circ\\text{C}$ after $19$ minutes."
                ],
                "pi_options": [
                        {
                                "ans": "$$26 \\text{ minutes}$$",
                                "feedback": "This error occurs if you subtract the $20$ incorrectly or divide by the wrong coefficient when solving the exponential equation, e.g., using $e^{-0.05t} = \\dfrac{ 25 }{ 95 }$."
                        },
                        {
                                "ans": "$$13 \\text{ minutes}$$",
                                "feedback": "This comes from a calculation slip where the coefficient $-20$ in front of the natural log is miscalculated, or the logarithm fraction is inverted incorrectly."
                        },
                        {
                                "ans": "$$5 \\text{ minutes}$$",
                                "feedback": "This is a rapid guessing error based on the exponential coefficient $0.05$ without performing the logarithmic inversion steps."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Newton's Law of Cooling Limits",
                        "content": "In any exponential model of the form $T = T_{\\text{ambient}} + k e^{-ct}$, the term $e^{-ct}$ acts as a transient state that decays to zero as time goes on. The constant term ($T_{\\text{ambient}}$) represents the steady-state asymptote. Recognizing this immediately tells you the ambient room temperature is $20^\\circ\\text{C}$ without doing any calculus."
                }
        },
        {
                "id": "004560",
                "board": "OCR",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Coordinate Geometry",
                "subtopic": [
                        "Functions and Mappings",
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "A car rental company models the total charge, $C$ (£), for renting a car for $d$ days using the piecewise function:<br>$$C = \\begin{cases} 45d & \\text{for } 0 \\le d \\le 5 \\cr 225 + 30(d - 5) & \\text{for } d > 5 \\end{cases}$$<br><strong>(i)</strong> Calculate the total cost of renting a car for $4$ days, and the cost of renting a car for $10$ days.<br><br><strong>(ii)</strong> Describe how the daily rate of hire changes after the first $5$ days, and suggest a commercial reason why the company might structure their pricing in this way.<br><br><strong>(iii)</strong> Show that the function is continuous at $d = 5$.",
                "steps": [
                        "To calculate the total cost for renting a car for $4$ days, we use the first branch of the piecewise function because $d = 4$ lies in the interval $0 \\le d \\le 5$:<br><br>\\begin{aligned} C(4) & = 45(4) \\cr & = 180 \\end{aligned}<br><br>To calculate the cost for renting a car for $10$ days, we use the second branch because $d = 10$ lies in the interval $d > 5$:<br><br>\\begin{aligned} C(10) & = 225 + 30(10 - 5) \\cr & = 225 + 30(5) \\cr & = 225 + 150 \\cr & = 375 \\end{aligned}<br><br>Thus, the cost for $4$ days is £$180$ and the cost for $10$ days is £$375$.",
                        "During the first $5$ days, the daily rate of hire is the gradient of the first linear branch, which is £$45$ per day. After $5$ days, any additional days are charged according to the gradient of the second linear branch, which is £$30$ per day.<br><br>Therefore, the daily rate of hire drops from £$45$ to £$30$ after day $5$. Commercially, this offers a bulk discount for extended hires, incentivizing customers to rent the car for longer periods by lowering the marginal daily rate.",
                        "For the piecewise function to be continuous at the transition boundary $d = 5$, the limit of the cost function as $d$ approaches $5$ from the left must equal the limit as $d$ approaches $5$ from the right, which must also equal the actual function value at $d = 5$.<br><br>First, we evaluate the left-hand limit using the first branch:<br><br>\\begin{aligned} \\lim_{ d \\to 5^{-} } C(d) & = 45(5) \\cr & = 225 \\end{aligned}<br><br>Next, we evaluate the right-hand limit using the second branch:<br><br>\\begin{aligned} \\lim_{ d \\to 5^{+} } C(d) & = 225 + 30(5 - 5) \\cr & = 225 + 30(0) \\cr & = 225 \\end{aligned}<br><br>Since both the left-hand and right-hand limits are equal to $225$, the two branches meet at the exact same point. Therefore, the function is continuous at $d = 5$."
                ],
                "pi_options": [
                        {
                                "ans": "$$C(4) = 180,\\ C(10) = 450$$",
                                "feedback": "This mistake occurs if you use the first branch of the function ($45d$) for both calculations, forgetting that $d = 10$ requires the discounted second branch."
                        },
                        {
                                "ans": "$$C(4) = 195,\\ C(10) = 375$$",
                                "feedback": "This arises from using the second branch of the function for the $4$-day calculation, which is incorrect as the discount branch is only valid for hires exceeding $5$ days."
                        },
                        {
                                "ans": "$$C(4) = 180,\\ C(10) = 300$$",
                                "feedback": "This occurs if you calculate the $10$-day cost simply as $10 \\times 30$, failing to account for the full £$225$ fixed base rate accumulated over the first $5$ days of hire."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Checking Piecewise Continuity",
                        "content": "To prove continuity at a boundary point like $d = 5$ in a piecewise function, never just assume the graphs connect. You must mathematically demonstrate that the left-hand limit and the right-hand limit are equal by evaluating both branches at the boundary. If the values differ, the graph has a jump discontinuity."
                }
        },
        {
                "id": "004561",
                "board": "OCR",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Proof",
                        "Trigonometry"
                ],
                "img": false,
                "question": "<strong>(i)</strong> Prove that $2\\sin(\\theta + 45^\\circ)\\cos(\\theta + 45^\\circ) = \\cos 2\\theta$.",
                "steps": [
                        "We start by recalling the standard double-angle identity for sine:<br><br>\\begin{aligned} 2\\sin A\\cos A & = \\sin 2A \\end{aligned}<br><br>Let $A = \\theta + 45^\\circ$. Substituting this into the identity, we can write the left-hand side (LHS) of our equation as:<br><br>\\begin{aligned} 2\\sin(\\theta + 45^\\circ)\\cos(\\theta + 45^\\circ) & = \\sin\\left[ 2(\\theta + 45^\\circ) \\right] \\cr & = \\sin(2\\theta + 90^\\circ) \\end{aligned}",
                        "Next, we use the compound angle expansion formula for sine, which is:<br><br>\\begin{aligned} \\sin(X + Y) & = \\sin X\\cos Y + \\cos X\\sin Y \\end{aligned}<br><br>Letting $X = 2\\theta$ and $Y = 90^\\circ$, we expand $\\sin(2\\theta + 90^\\circ)$:<br><br>\\begin{aligned} \\sin(2\\theta + 90^\\circ) & = \\sin 2\\theta\\cos 90^\\circ + \\cos 2\\theta\\sin 90^\\circ \\end{aligned}<br><br>Since $\\cos 90^\\circ = 0$ and $\\sin 90^\\circ = 1$, we substitute these values in:<br><br>\\begin{aligned} \\sin(2\\theta + 90^\\circ) & = \\sin 2\\theta(0) + \\cos 2\\theta(1) \\cr & = \\cos 2\\theta \\end{aligned}<br><br>Thus, we have proven that the left-hand side simplifies exactly to the right-hand side:<br><br>\\begin{aligned} 2\\sin(\\theta + 45^\\circ)\\cos(\\theta + 45^\\circ) & = \\cos 2\\theta \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\sin 2\\theta$$",
                                "feedback": "This error occurs if you make a sign error in the compound angle expansion or confuse the shift identity, using $\\sin(2\\theta + 90^\\circ) = \\sin 2\\theta$ instead of $\\cos 2\\theta$."
                        },
                        {
                                "ans": "$$-\\cos 2\\theta$$",
                                "feedback": "This comes from a sign slip in the compound angle formula, incorrectly writing $\\sin(2\\theta + 90^\\circ) = -\\cos 2\\theta$."
                        },
                        {
                                "ans": "$$2\\sin 2\\theta$$",
                                "feedback": "This arises if you forget to apply the double-angle coefficient division when rewriting the product of sine and cosine."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Shifting Sine to Cosine",
                        "content": "Any trigonometric shift of the form $\\sin(x + 90^\\circ)$ can be quickly simplified by visualizing the graphs. The sine graph shifted left by $90^\\circ$ is exactly identical to the standard cosine graph, meaning $\\sin(x + 90^\\circ) \\equiv \\cos x$ without needing the full compound angle expansion!"
                }
        },
        {
                "id": "004562",
                "board": "OCR",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Proof",
                        "Trigonometry"
                ],
                "img": false,
                "question": "<strong>(i)</strong> Prove the identity: $\\dfrac{ 1 - \\cos 2\\theta }{ \\sin 2\\theta } \\equiv \\tan \\theta$.",
                "steps": [
                        "We recall the standard double-angle identities for sine and cosine:<br><br>\\begin{aligned} \\cos 2\\theta & = 1 - 2\\sin^2\\theta \\cr \\sin 2\\theta & = 2\\sin\\theta\\cos\\theta \\end{aligned}<br><br>Rearranging the cosine double-angle identity, we can express the numerator as:<br><br>\\begin{aligned} 1 - \\cos 2\\theta & = 2\\sin^2\\theta \\end{aligned}",
                        "Now, we substitute these expressions back into the left-hand side of our identity:<br><br>\\begin{aligned} \\dfrac{ 1 - \\cos 2\\theta }{ \\sin 2\\theta } & = \\dfrac{ 2\\sin^2\\theta }{ 2\\sin\\theta\\cos\\theta } \\end{aligned}<br><br>We can cancel the factor of $2$ and one factor of $\\sin\\theta$ from the numerator and denominator:<br><br>\\begin{aligned} \\dfrac{ 2\\sin^2\\theta }{ 2\\sin\\theta\\cos\\theta } & = \\dfrac{ \\sin^2\\theta }{ \\sin\\theta\\cos\\theta } \\cr & = \\dfrac{ \\sin\\theta }{ \\cos\\theta } \\cr & = \\tan\\theta \\end{aligned}<br><br>Thus, we have proven the identity:<br><br>\\begin{aligned} \\dfrac{ 1 - \\cos 2\\theta }{ \\sin 2\\theta } & \\equiv \\tan\\theta \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\cot \\theta$$",
                                "feedback": "This is the reciprocal of the correct result, which occurs if you invert the fraction or make a reciprocal identity error during algebraic cancellation."
                        },
                        {
                                "ans": "$$\\tan 2\\theta$$",
                                "feedback": "This arises if you make an algebra slip, incorrectly canceling the variables to leave $\\tan 2\\theta$."
                        },
                        {
                                "ans": "$$\\dfrac{ 1 }{ \\cos \\theta }$$",
                                "feedback": "This is caused by a major algebraic simplification error, such as incorrectly canceling terms that are not common factors."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Choosing the Right Double-Angle Form",
                        "content": "Recall that $\\cos 2\\theta$ has three equivalent double-angle forms. When trying to simplify an expression containing $1 - \\cos 2\\theta$ or $1 + \\cos 2\\theta$, always choose the form of $\\cos 2\\theta$ that cancels out the constant $1$. Here, using $1 - 2\\sin^2\\theta$ removes the $1$ from the numerator perfectly."
                }
        },
        {
                "id": "004563",
                "board": "OCR",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Proof",
                        "Trigonometry"
                ],
                "img": false,
                "question": "<strong>(i)</strong> Prove the triple-angle identity: $\\cos 3\\theta \\equiv 4\\cos^3\\theta - 3\\cos\\theta$.",
                "steps": [
                        "We start by splitting the triple angle $3\\theta$ into a sum of a double angle and a single angle, and then applying the cosine compound angle formula:<br><br>\\begin{aligned} \\cos 3\\theta & = \\cos(2\\theta + \\theta) \\cr & = \\cos 2\\theta\\cos\\theta - \\sin 2\\theta\\sin\\theta \\end{aligned}",
                        "Next, we use the double-angle identities for sine and cosine. Since we want our final answer to be written entirely in terms of $\\cos\\theta$, we choose the pure-cosine form for $\\cos 2\\theta$:<br><br>\\begin{aligned} \\cos 2\\theta & = 2\\cos^2\\theta - 1 \\cr \\sin 2\\theta & = 2\\sin\\theta\\cos\\theta \\end{aligned}<br><br>Substituting these into our expanded equation:<br><br>\\begin{aligned} \\cos 3\\theta & = (2\\cos^2\\theta - 1)\\cos\\theta - (2\\sin\\theta\\cos\\theta)\\sin\\theta \\cr & = 2\\cos^3\\theta - \\cos\\theta - 2\\sin^2\\theta\\cos\\theta \\end{aligned}",
                        "To express the entire equation in terms of $\\cos\\theta$, we use the identity $\\sin^2\\theta = 1 - \\cos^2\\theta$ to replace the sine term:<br><br>\\begin{aligned} \\cos 3\\theta & = 2\\cos^3\\theta - \\cos\\theta - 2(1 - \\cos^2\\theta)\\cos\\theta \\cr & = 2\\cos^3\\theta - \\cos\\theta - (2\\cos\\theta - 2\\cos^3\\theta) \\cr & = 2\\cos^3\\theta - \\cos\\theta - 2\\cos\\theta + 2\\cos^3\\theta \\cr & = 4\\cos^3\\theta - 3\\cos\\theta \\end{aligned}<br><br>Thus, the identity is proven:<br><br>\\begin{aligned} \\cos 3\\theta & \\equiv 4\\cos^3\\theta - 3\\cos\\theta \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$3\\cos\\theta - 4\\cos^3\\theta$$",
                                "feedback": "This is the negative of the correct identity, which occurs if you make a sign error when expanding the brackets in the final step."
                        },
                        {
                                "ans": "$$4\\cos^3\\theta + 3\\cos\\theta$$",
                                "feedback": "This results from a sign slip, incorrectly adding $2\\cos\\theta$ instead of subtracting it when combining like terms."
                        },
                        {
                                "ans": "$$3\\cos^3\\theta - 4\\cos\\theta$$",
                                "feedback": "This is caused by transposing the numerical coefficients of the cubed and linear terms."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Structuring Multi-Step Proofs",
                        "content": "For higher-order angle proofs like $\\cos 3\\theta$, always have the target form in mind. Because the right-hand side is written entirely in terms of $\\cos\\theta$, you must proactively eliminate all sine terms using $\\sin^2\\theta = 1 - \\cos^2\\theta$ as early as possible."
                }
        },
        {
                "id": "004564",
                "board": "OCR",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Proof",
                        "Trigonometry"
                ],
                "img": false,
                "question": "<strong>(i)</strong> Prove the identity: $\\cot \\theta - \\tan \\theta \\equiv 2\\cot 2\\theta$.",
                "steps": [
                        "We rewrite the left-hand side of our identity using the basic definitions of tangent and cotangent in terms of sine and cosine:<br><br>\\begin{aligned} \\cot\\theta - \\tan\\theta & = \\dfrac{ \\cos\\theta }{ \\sin\\theta } - \\dfrac{ \\sin\\theta }{ \\cos\\theta } \\end{aligned}",
                        "Next, we find a common denominator (which is $\\sin\\theta\\cos\\theta$) to combine these two fractions:<br><br>\\begin{aligned} \\dfrac{ \\cos\\theta }{ \\sin\\theta } - \\dfrac{ \\sin\\theta }{ \\cos\\theta } & = \\dfrac{ \\cos^2\\theta - \\sin^2\\theta }{ \\sin\\theta\\cos\\theta } \\end{aligned}<br><br>We now apply the cosine double-angle identity, $\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta$, to simplify the numerator:<br><br>\\begin{aligned} \\dfrac{ \\cos^2\\theta - \\sin^2\\theta }{ \\sin\\theta\\cos\\theta } & = \\dfrac{ \\cos 2\\theta }{ \\sin\\theta\\cos\\theta } \\end{aligned}",
                        "Now, let us rewrite the right-hand side, $2\\cot 2\\theta$, using the double-angle identity for sine, $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$:<br><br>\\begin{aligned} 2\\cot 2\\theta & = 2\\left( \\dfrac{ \\cos 2\\theta }{ \\sin 2\\theta } \\right) \\cr & = 2\\left( \\dfrac{ \\cos 2\\theta }{ 2\\sin\\theta\\cos\\theta } \\right) \\cr & = \\dfrac{ \\cos 2\\theta }{ \\sin\\theta\\cos\\theta } \\end{aligned}<br><br>Since both the left-hand side and the right-hand side simplify to the exact same expression, the identity is proven:<br><br>\\begin{aligned} \\cot \\theta - \\tan \\theta & \\equiv 2\\cot 2\\theta \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\cot 2\\theta$$",
                                "feedback": "This error occurs if you forget the factor of $2$ when rewriting the denominator using the double-angle sine identity."
                        },
                        {
                                "ans": "$$2\\tan 2\\theta$$",
                                "feedback": "This is a reciprocal identity error, incorrectly identifying the cosine-over-sine fraction as tangent instead of cotangent."
                        },
                        {
                                "ans": "$$2\\cot \\theta$$",
                                "feedback": "This results from a major algebraic slip where the double angle is incorrectly simplified to a single angle."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Working from Both Sides",
                        "content": "When proving identities, you do not have to work exclusively from left to right. Often, the easiest path is to simplify the left-hand side and the right-hand side independently until they meet at a common algebraic expression. This is a perfectly valid and robust method for exam proofs!"
                }
        },
        {
                "id": "004565",
                "board": "OCR",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "<strong>(i)</strong> Show that the equation $3\\cos 2\\theta + 8\\sin\\theta + 5 = 0$ can be written in the form $6\\sin^2\\theta - 8\\sin\\theta - 8 = 0$.<br><br><strong>(ii)</strong> Hence, solve the equation $3\\cos 2\\theta + 8\\sin\\theta + 5 = 0$ for $0^\\circ \\le \\theta \\le 360^\\circ$.",
                "steps": [
                        "We start with the given equation:<br><br>\\begin{aligned} 3\\cos 2\\theta + 8\\sin\\theta + 5 & = 0 \\end{aligned}<br><br>To express the entire equation in terms of $\\sin\\theta$, we substitute the double-angle identity $\\cos 2\\theta = 1 - 2\\sin^2\\theta$:<br><br>\\begin{aligned} 3(1 - 2\\sin^2\\theta) + 8\\sin\\theta + 5 & = 0 \\cr 3 - 6\\sin^2\\theta + 8\\sin\\theta + 5 & = 0 \\cr -6\\sin^2\\theta + 8\\sin\\theta + 8 & = 0 \\end{aligned}<br><br>Multiplying the entire equation by $-1$ to obtain the desired form:<br><br>\\begin{aligned} 6\\sin^2\\theta - 8\\sin\\theta - 8 & = 0 \\end{aligned}",
                        "To solve this quadratic equation, let $x = \\sin\\theta$. The equation becomes:<br><br>\\begin{aligned} 6x^2 - 8x - 8 & = 0 \\end{aligned}<br><br>Dividing the entire equation by $2$ to simplify:<br><br>\\begin{aligned} 3x^2 - 4x - 4 & = 0 \\end{aligned}<br><br>We can solve this quadratic equation by factoring:<br><br>\\begin{aligned} (3x + 2)(x - 2) & = 0 \\end{aligned}<br><br>This gives two possible solutions for $x$:<br><br>\\begin{aligned} x = 2 \\quad \\text{or} \\quad x = -\\dfrac{ 2 }{ 3 } \\end{aligned}",
                        "Now, we substitute $x = \\sin\\theta$ back into our solutions:<br><br>1. $\\sin\\theta = 2$: Since the range of the sine function is strictly bounded, $-1 \\le \\sin\\theta \\le 1$, this equation has no real solutions.<br><br>2. $\\sin\\theta = -\\dfrac{ 2 }{ 3 }$: We first find the basic acute reference angle $\\alpha$:<br><br>\\begin{aligned} \\alpha & = \\sin^{-1}\\left( \\dfrac{ 2 }{ 3 } \\right) \\cr & \\approx 41.8^\\circ \\end{aligned}<br><br>Since $\\sin\\theta$ is negative, $\\theta$ must lie in Quadrants III and IV within the interval $0^\\circ \\le \\theta \\le 360^\\circ$:<br><br>\\begin{aligned} \\text{Quadrant III:} \\quad \\theta & = 180^\\circ + 41.8^\\circ \\cr & \\approx 221.8^\\circ \\cr \\text{Quadrant IV:} \\quad \\theta & = 360^\\circ - 41.8^\\circ \\cr & \\approx 318.2^\\circ \\end{aligned}<br><br>Thus, the solutions are $\\theta \\approx 221.8^\\circ$ and $\\theta \\approx 318.2^\\circ$."
                ],
                "pi_options": [
                        {
                                "ans": "$$\\theta \\approx 41.8^\\circ,\\ 138.2^\\circ$$",
                                "feedback": "This error occurs if you ignore the negative sign of $\\sin\\theta$, solving for the angles in Quadrants I and II instead of III and IV."
                        },
                        {
                                "ans": "$$\\theta \\approx 221.8^\\circ,\\ 318.2^\\circ,\\ 90^\\circ$$",
                                "feedback": "This arises if you make an algebra error solving the quadratic equation, incorrectly keeping a third branch or solving $\\sin\\theta = 1$."
                        },
                        {
                                "ans": "$$\\theta \\approx 138.2^\\circ,\\ 221.8^\\circ$$",
                                "feedback": "This is caused by a quadrant error, incorrectly mixing Quadrant II and Quadrant III solutions."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Discarding Out-of-Range Roots",
                        "content": "When solving quadratic trigonometric equations, you will often find two branches of solutions (such as $\\sin\\theta = 2$ and $\\sin\\theta = -\\frac{2}{3}$). Always remember that sine and cosine are strictly bounded by $[-1, 1]$. Any branch outside this interval yields no real roots and must be explicitly discarded. Leaving it in will cost you a final communication mark!"
                }
        },
        {
                "id": "004566",
                "board": "OCR",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Proof",
                "subtopic": [
                        "Proof"
                ],
                "img": false,
                "question": "<strong>(i)</strong> Give an example to show that the statement: <em>\"The sum of a square number and three times a prime number cannot be a square number\"</em> is not true.<br><br><strong>(ii)</strong> Ben attempts to prove this statement using contradiction, as shown below:<br><br><em>Assume that the statement is not true.<br>$\\implies$ There exist integers $n$ and $m$ and a prime $p$ such that $n^2 + 3p = m^2$.<br>$\\implies 3p = m^2 - n^2$<br>$\\implies 3p = (m - n)(m + n)$<br>Since $3$ is prime, then $(m - n)$ must be equal to $3$ and $(m + n)$ must be equal to $p$, which means $m$ and $n$ cannot both be integers if $p$ is even. This is a contradiction, so the statement is true.</em><br><br>Explain the mathematical error that Ben has made in his proof.<br><br><strong>(iii)</strong> Given that $997$ is a prime number, find the square number $S$ such that $S + 3 \\times 997$ is also a square number.",
                "steps": [
                        "To disprove the statement, we need to find a single counterexample consisting of a square number $n^2$, a prime number $p$, and another square number $m^2$ such that $n^2 + 3p = m^2$.<br><br>Let us choose the prime number $p = 5$ and the square number $n^2 = 49$ (which is $7^2$):<br><br>\\begin{aligned} n^2 + 3p & = 49 + 3(5) \\cr & = 49 + 15 \\cr & = 64 \\end{aligned}<br><br>Since $64$ is also a square number ($8^2$), we have found a valid counterexample. Thus, the statement is false.",
                        "Ben made a fundamental logical error in his factorization step. When he wrote $3p = (m - n)(m + n)$, he assumed that the only possible integer factors of $3p$ are $3$ and $p$.<br><br>In reality, since both $3$ and $p$ are prime, the composite number $3p$ has four distinct positive factors: $1, 3, p,$ and $3p$. Therefore, the factor brackets $(m - n)$ and $(m + n)$ could also be equal to $1$ and $3p$ respectively, which Ben completely failed to consider.<br><br>Additionally, Ben's final statement regarding $p$ being even is mathematically flawed because $2$ is the only even prime, and for all other primes, $p$ is odd.",
                        "We want to find a square number $S = n^2$ such that $n^2 + 3(997) = m^2$ for some integer $m$. This can be rearranged as:<br><br>\\begin{aligned} m^2 - n^2 & = 3(997) \\cr (m - n)(m + n) & = 2991 \\end{aligned}<br><br>Since $997$ is prime, the positive integer factor pairs of $2991$ are $(1, 2991)$ and $(3, 997)$. Let us test both cases:<br><br><strong>Case 1: Using the factor pair $(3, 997)$</strong><br>\\begin{aligned} m - n & = 3 \\cr m + n & = 997 \\end{aligned}<br><br>Subtracting the first equation from the second gives:<br><br>\\begin{aligned} 2n & = 994 \\cr n & = 497 \\end{aligned}<br><br>This yields the square number $S = n^2 = 497^2 = 247009$. (Check: $247009 + 2991 = 250000 = 500^2$, which is a square).<br><br><strong>Case 2: Using the factor pair $(1, 2991)$</strong><br>\\begin{aligned} m - n & = 1 \\cr m + n & = 2991 \\end{aligned}<br><br>Subtracting the first equation from the second gives:<br><br>\\begin{aligned} 2n & = 2990 \\cr n & = 1495 \\end{aligned}<br><br>This yields the square number $S = n^2 = 1495^2 = 2235025$. (Check: $2235025 + 2991 = 2238016 = 1496^2$).<br><br>Both $247009$ and $2235025$ are perfectly valid square numbers."
                ],
                "pi_options": [
                        {
                                "ans": "$S = 997^2$",
                                "feedback": "This error occurs if you assume that the square number $S$ must be the square of the prime number itself, rather than setting up and solving the difference of two squares equations."
                        },
                        {
                                "ans": "$S = 249001$",
                                "feedback": "This is a calculation slip where $n$ is incorrectly identified as $499$ (perhaps by halving $997$ incorrectly) before squaring."
                        },
                        {
                                "ans": "$S = 247012$",
                                "feedback": "This arises from an arithmetic addition error in the final step, adding the prime value directly to a squared term without factoring."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Factors of Prime Products",
                        "content": "When solving equations of the form $(m - n)(m + n) = q$ where $q$ is the product of two primes $q = ab$, remember that $q$ has four positive factors: $1, a, b,$ and $ab$. A common student error is to only solve for the factor pair $(a, b)$ and completely forget the boundary factor pair $(1, ab)$, which always yields a second valid set of integer solutions!"
                }
        },
        {
                "id": "004567",
                "board": "OCR",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Proof",
                "subtopic": [
                        "Proof"
                ],
                "img": false,
                "question": "<strong>(i)</strong> A student claims that <em>\"For all positive integers $n$, the expression $n^2 + n + 41$ always produces a prime number.\"</em> Find a counterexample to show that this claim is false.<br><br><strong>(ii)</strong> Another student claims that <em>\"If $a$ and $b$ are irrational numbers, then the sum $a + b$ must also be irrational.\"</em> Find a counterexample to show that this claim is false.<br><br><strong>(iii)</strong> Prove by contradiction that if $n^2$ is an even integer, then $n$ must be an even integer.",
                "steps": [
                        "To show that the expression $n^2 + n + 41$ does not always produce a prime number, we only need to find a single positive integer $n$ for which the result is composite.<br><br>Let us substitute $n = 41$ into the expression:<br><br>\\begin{aligned} n^2 + n + 41 & = 41^2 + 41 + 41 \\cr & = 41(41 + 1 + 1) \\cr & = 41(43) \\cr & = 1763 \\end{aligned}<br><br>Since $1763$ is the product of $41$ and $43$, it is a composite number. (Substituting $n = 40$ also works, yielding $40^2 + 40 + 41 = 41^2 = 1681$, which is composite). Thus, the claim is disproven by counterexample.",
                        "To disprove the claim that the sum of two irrational numbers must be irrational, we must find two irrational numbers $a$ and $b$ whose sum is rational.<br><br>Let $a = 3 + \\sqrt{ 2 }$ and $b = 3 - \\sqrt{ 2 }$. Both $a$ and $b$ are irrational because they are the sum/difference of a rational and an irrational number.<br><br>Now, let us find their sum:<br><br>\\begin{aligned} a + b & = (3 + \\sqrt{ 2 }) + (3 - \\sqrt{ 2 }) \\cr & = 6 \\end{aligned}<br><br>Since $6$ is a rational number, we have found a valid counterexample. Thus, the claim is false.",
                        "We prove the statement by contradiction. First, we assume the negation of the statement is true:<br><br><em>Assume that $n^2$ is an even integer AND $n$ is an odd integer.</em><br><br>Since $n$ is an odd integer, it can be written in the form $n = 2k + 1$ for some integer $k$. Squaring both sides:<br><br>\\begin{aligned} n^2 & = (2k + 1)^2 \\cr & = 4k^2 + 4k + 1 \\cr & = 2(2k^2 + 2k) + 1 \\cr & = 2M + 1 \\end{aligned}<br><br>where $M = 2k^2 + 2k$ is an integer. This shows that $n^2$ must be an odd integer.<br><br>However, this directly contradicts our initial assumption that $n^2$ is an even integer. Therefore, our assumption that $n$ is odd must be false, meaning $n$ must be an even integer."
                ],
                "pi_options": [
                        {
                                "ans": "$n = 41 \\implies 1763$ which is prime",
                                "feedback": "This is a prime-testing error. The number $1763$ is not prime because it is equal to $41 \\times 43$."
                        },
                        {
                                "ans": "$a = \\sqrt{ 2 },\\ b = \\sqrt{ 3 } \\implies$ sum is rational",
                                "feedback": "This is a misconception regarding surds. The sum $\\sqrt{ 2 } + \\sqrt{ 3 }$ is irrational, so it cannot serve as a counterexample to the claim."
                        },
                        {
                                "ans": "$n = 2k \\implies n^2 = 4k^2$ which is odd",
                                "feedback": "This is a parity error. If $n = 2k$, then $n^2 = 4k^2 = 2(2k^2)$, which is even, not odd."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Disproving Universal Statements",
                        "content": "In A Level Mathematics, remember that a universal statement (one claiming a property holds <em>for all</em> values) can be completely shattered by a single counterexample. You do not need a general proof to show a statement is false—finding just one value that fails (like $n = 41$ for Euler's polynomial) is mathematically complete and sufficient."
                }
        },
        {
                "id": "004568",
                "board": "OCR",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Proof",
                "subtopic": [
                        "Proof"
                ],
                "img": false,
                "question": "<strong>(i)</strong> Prove by exhaustion that the expression $n^3 - n$ is a multiple of $3$ for all integers $n$ in the interval $1 \\le n \\le 5$.<br><br><strong>(ii)</strong> Show algebraically that the expression $n^3 - n$ is a multiple of $6$ for all positive integers $n$.<br><br><strong>(iii)</strong> Prove that there is no positive integer $n$ for which the expression $n^2 + 3n + 1$ is a perfect square.",
                "steps": [
                        "To prove the statement by exhaustion, we must test every single integer $n$ in the defined finite set $n \\in \\{ 1, 2, 3, 4, 5 \\}$ and show the result is always a multiple of $3$:<br><br>1. For $n = 1$: $1^3 - 1 = 0$, which is $3(0)$ (a multiple of $3$).<br>2. For $n = 2$: $2^3 - 2 = 6$, which is $3(2)$ (a multiple of $3$).<br>3. For $n = 3$: $3^3 - 3 = 24$, which is $3(8)$ (a multiple of $3$).<br>4. For $n = 4$: $4^3 - 4 = 60$, which is $3(20)$ (a multiple of $3$).<br>5. For $n = 5$: $5^3 - 5 = 120$, which is $3(40)$ (a multiple of $3$).<br><br>Since the statement holds true for every possible case in the domain, the proof by exhaustion is complete.",
                        "We begin by factoring the expression $n^3 - n$ completely:<br><br>\\begin{aligned} n^3 - n & = n(n^2 - 1) \\cr & = n(n - 1)(n + 1) \\cr & = (n - 1)n(n + 1) \\end{aligned}<br><br>This expression represents the product of three consecutive integers: $(n - 1)$, $n$, and $(n + 1)$. In any set of three consecutive integers:<br><br>1. At least one of the integers must be even (a multiple of $2$).<br>2. Exactly one of the integers must be a multiple of $3$.<br><br>Since $2$ and $3$ are coprime (they share no common factors other than $1$), any integer that is a multiple of both $2$ and $3$ must be a multiple of $2 \\times 3 = 6$. Thus, $n^3 - n$ is always a multiple of $6$.",
                        "We can prove this by bounding our expression between two consecutive perfect squares. Let us expand the consecutive squares $(n + 1)^2$ and $(n + 2)^2$ for $n \\ge 1$:<br><br>\\begin{aligned} (n + 1)^2 & = n^2 + 2n + 1 \\cr (n + 2)^2 & = n^2 + 4n + 4 \\end{aligned}<br><br>Now, let us compare our expression, $n^2 + 3n + 1$, to these consecutive squares. Since $n$ is a positive integer ($n \\ge 1$):<br><br>1. Clearly, $n^2 + 2n + 1 < n^2 + 3n + 1$ (because $2n < 3n$).<br>2. Clearly, $n^2 + 3n + 1 < n^2 + 4n + 4$ (because $3n < 4n$ and $1 < 4$).<br><br>Putting this together, we can write the strict inequality:<br><br>\\begin{aligned} (n + 1)^2 & < n^2 + 3n + 1 < (n + 2)^2 \\end{aligned}<br><br>Since $n^2 + 3n + 1$ lies strictly between two consecutive perfect squares, it can never equal a perfect square itself for any positive integer $n$."
                ],
                "pi_options": [
                        {
                                "ans": "$n^3 - n = n^2(n - 1)$",
                                "feedback": "This is a basic factorization error. The term $n^3 - n$ factors to $n(n^2 - 1)$, not $n^2(n - 1)$."
                        },
                        {
                                "ans": "$(n + 1)^2 < n^2 + 3n + 1 \\le (n + 2)^2$",
                                "feedback": "This is an inequality error. The right-hand boundary is strictly greater than our expression, so the non-strict inequality is incorrect."
                        },
                        {
                                "ans": "$n^3 - n$ is odd for all even $n$",
                                "feedback": "This is a parity misconception. If $n$ is even, $n^3$ is even, and an even number minus an even number is always even, never odd."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Consecutive Square Bounding",
                        "content": "To prove that an algebraic quadratic expression is never a perfect square, a highly elegant method is to bound it between two consecutive perfect squares: $(A)^2 < f(n) < (A+1)^2$. Since consecutive integers have no squares between them, the expression is immediately proven to never be a square. Keep this technique in your back pocket!"
                }
        },
        {
                "id": "004569",
                "board": "OCR",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Proof",
                "subtopic": [
                        "Proof",
                        "Quadratics"
                ],
                "img": false,
                "question": "<strong>(i)</strong> Prove that any prime number $p > 2$ can be written as the difference of two consecutive square numbers.<br><br><strong>(ii)</strong> Hence, write the prime number $101$ as the difference of two consecutive square numbers.<br><br><strong>(iii)</strong> Show that no prime number $p > 2$ can be written as the difference of two <em>even</em> square numbers.",
                "steps": [
                        "Let the two consecutive square numbers be $n^2$ and $m^2$, where $m = n + 1$. We set their difference equal to $p$:<br><br>\\begin{aligned} m^2 - n^2 & = p \\cr (m - n)(m + n) & = p \\end{aligned}<br><br>Since $p$ is a prime number, its only positive integer factors are $1$ and $p$. Because $m$ and $n$ are positive, we must have:<br><br>\\begin{aligned} m - n & = 1 \\cr m + n & = p \\end{aligned}<br><br>Adding these two equations gives $2m = p + 1 \\implies m = \\dfrac{ p + 1 }{ 2 }$. Subtracting them gives $2n = p - 1 \\implies n = \\dfrac{ p - 1 }{ 2 }$.<br><br>Since $p > 2$ is a prime, $p$ must be an odd number. This guarantees that $p + 1$ and $p - 1$ are even, making both $m$ and $n$ integers. Thus, we can write:<br><br>\\begin{aligned} p & = \\left( \\dfrac{ p + 1 }{ 2 } \\right)^2 - \\left( \\dfrac{ p - 1 }{ 2 } \\right)^2 \\end{aligned}",
                        "Using our formula from part (i) with the prime number $p = 101$:<br><br>\\begin{aligned} m & = \\dfrac{ 101 + 1 }{ 2 } = 51 \\cr n & = \\dfrac{ 101 - 1 }{ 2 } = 50 \\end{aligned}<br><br>Therefore, $101$ can be written as the difference of consecutive squares:<br><br>\\begin{aligned} 101 & = 51^2 - 50^2 \\end{aligned}<br><br>(Check: $51^2 - 50^2 = 2601 - 2500 = 101$, which is correct).",
                        "Let the two even square numbers be $m^2$ and $n^2$, where $m = 2a$ and $n = 2b$ for some integers $a$ and $b$. We write their difference:<br><br>\\begin{aligned} m^2 - n^2 & = (2a)^2 - (2b)^2 \\cr & = 4a^2 - 4b^2 \\cr & = 4(a^2 - b^2) \\end{aligned}<br><br>This shows that the difference of two even square numbers must always be a multiple of $4$.<br><br>However, any prime number $p > 2$ is an odd number, and no odd number can be a multiple of $4$. Therefore, no prime $p > 2$ can be written as the difference of two even square numbers."
                ],
                "pi_options": [
                        {
                                "ans": "$101 = 52^2 - 49^2$",
                                "feedback": "These are not consecutive square numbers (the base integers are $52$ and $49$, which have a difference of $3$, not $1$)."
                        },
                        {
                                "ans": "$m = p + 1,\\ n = p - 1$",
                                "feedback": "This is a formula error. This would lead to a difference of $(p+1)^2 - (p-1)^2 = 4p$, not $p$."
                        },
                        {
                                "ans": "$101 = 50.5^2 - 49.5^2$",
                                "feedback": "These are not integers, so they do not satisfy the definition of square numbers in number theory."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Parity of Prime Differences",
                        "content": "Since $2$ is the only even prime, any prime $p > 2$ is odd. The difference of two squares $m^2 - n^2 = (m-n)(m+n)$ can only equal an odd number if the two factors $(m-n)$ and $(m+n)$ are both odd. This requires $m$ and $n$ to have different parities (one even, one odd). Thus, a prime can never be written as the difference of two even squares, nor two odd squares!"
                }
        },
        {
                "id": "004570",
                "board": "OCR",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Proof",
                "subtopic": [
                        "Proof"
                ],
                "img": false,
                "question": "<strong>(i)</strong> State the definition of a rational number.<br><br><strong>(ii)</strong> Prove by contradiction that $\\sqrt{2}$ is irrational.<br><br><strong>(iii)</strong> Use your result from part (ii) to prove that $3 + 2\\sqrt{2}$ is also irrational.",
                "steps": [
                        "A rational number is any number that can be expressed in the form $\\dfrac{ a }{ b }$, where $a$ and $b$ are integers and $b \\ne 0$.",
                        "We prove this by contradiction. First, we assume the negation of the statement is true:<br><br><em>Assume that $\\sqrt{2}$ is a rational number.</em><br><br>This means we can write $\\sqrt{2} = \\dfrac{ a }{ b }$ where $a$ and $b$ are integers, $b \\ne 0$, and the fraction is in its simplest form (meaning $a$ and $b$ are coprime and share no common factors other than $1$). Squaring both sides:<br><br>\\begin{aligned} 2 & = \\dfrac{ a^2 }{ b^2 } \\cr a^2 & = 2b^2 \\end{aligned}<br><br>This implies $a^2$ is an even integer, which means $a$ must be an even integer. Let $a = 2k$ for some integer $k$. Substituting this back:<br><br>\\begin{aligned} (2k)^2 & = 2b^2 \\cr 4k^2 & = 2b^2 \\cr b^2 & = 2k^2 \\end{aligned}<br><br>This implies $b^2$ is an even integer, which means $b$ must be an even integer. If both $a$ and $b$ are even, they share a common factor of $2$. This contradicts our assumption that the fraction was in its simplest form. Thus, $\\sqrt{2}$ is irrational.",
                        "We prove this by contradiction. First, we assume the negation is true:<br><br><em>Assume that $3 + 2\\sqrt{2}$ is a rational number.</em><br><br>This means we can write $3 + 2\\sqrt{2} = q$ for some rational number $q$. Let us rearrange this equation to isolate the surd $\\sqrt{2}$:<br><br>\\begin{aligned} 2\\sqrt{2} & = q - 3 \\cr \\sqrt{2} & = \\dfrac{ q - 3 }{ 2 } \\end{aligned}<br><br>Since $q$ is a rational number, and the set of rational numbers is closed under subtraction and division, the expression $\\dfrac{ q - 3 }{ 2 }$ must also be a rational number.<br><br>However, this equation states that the irrational number $\\sqrt{2}$ is equal to a rational number, which is a direct contradiction of our result from part (ii). Therefore, our initial assumption must be false, proving that $3 + 2\\sqrt{2}$ is indeed irrational."
                ],
                "pi_options": [
                        {
                                "ans": "$$\\sqrt{ 2 } = \\dfrac{ a }{ b } \\implies a^2 = b^2$",
                                "feedback": "This is a squaring error. Squaring both sides of $\\sqrt{ 2 } = \\dfrac{ a }{ b }$ yields $2 = \\dfrac{ a^2 }{ b^2 } \\implies a^2 = 2b^2$, not $a^2 = b^2$."
                        },
                        {
                                "ans": "$a^2 = 2b^2 \\implies a$ is odd",
                                "feedback": "This is a parity error. If $a^2 = 2b^2$, then $a^2$ is a multiple of $2$ (even), which mathematically guarantees that $a$ is even, not odd."
                        },
                        {
                                "ans": "$3 + 2\\sqrt{ 2 } = 5\\sqrt{ 2 }$",
                                "feedback": "This is an arithmetic error. You cannot add the rational integer $3$ directly to the coefficient of the surd; $3$ and $2\\sqrt{ 2 }$ are not like terms."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Simplest Form Assumption",
                        "content": "The most critical step in proving the irrationality of surds (like $\\sqrt{2}$ or $\\sqrt{3}$) is the initial setup. You must explicitly state that the fraction $\\frac{a}{b}$ is in its simplest form (or that $a$ and $b$ are coprime). Without this boundary assumption, finding that both $a$ and $b$ are even does not lead to a contradiction, and you will lose the majority of the marks!"
                }
        },
        {
                "id": "004571",
                "board": "OCR",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Differentiation"
                ],
                "img": false,
                "question": "<strong>(i)</strong> Find the $x$-coordinate of the point where the curve $y = \\dfrac{ \\ln x }{ x^2 }$ crosses the $x$-axis.<br><br><strong>(ii)</strong> The points $A$ and $B$ lie on the curve and have $x$-coordinates $\\sqrt{2}$ and $2$. Show that the line $AB$ is parallel to the $x$-axis.<br><br><strong>(iii)</strong> Find the exact coordinates of the turning point on the curve.<br><br><strong>(iv)</strong> Determine whether this turning point is a maximum or a minimum.",
                "steps": [
                        "The curve crosses the $x$-axis when $y = 0$. We set our equation to zero and solve for $x$:<br><br>\\begin{aligned} \\dfrac{ \\ln x }{ x^2 } & = 0 \\cr \\ln x & = 0 \\cr x & = e^0 \\cr x & = 1 \\end{aligned}<br><br>Thus, the $x$-coordinate of the crossing point is $1$.",
                        "To show that the straight line connecting $A$ and $B$ is parallel to the $x$-axis, we must demonstrate that their $y$-coordinates are identical, which means the line connecting them is horizontal (having a gradient of zero).<br><br>First, let us calculate the $y$-coordinate of point $A$ where $x = \\sqrt{2}$:<br><br>\\begin{aligned} y_A & = \\dfrac{ \\ln(\\sqrt{2}) }{ (\\sqrt{2})^2 } \\cr & = \\dfrac{ \\ln\\left( 2^{ 1/2 } \\right) }{ 2 } \\cr & = \\dfrac{ \\dfrac{ 1 }{ 2 }\\ln 2 }{ 2 } \\cr & = \\dfrac{ \\ln 2 }{ 4 } \\end{aligned}<br><br>Next, let us calculate the $y$-coordinate of point $B$ where $x = 2$:<br><br>\\begin{aligned} y_B & = \\dfrac{ \\ln 2 }{ 2^2 } \\cr & = \\dfrac{ \\ln 2 }{ 4 } \\end{aligned}<br><br>Since $y_A = y_B = \\dfrac{ \\ln 2 }{ 4 }$, both points lie at the exact same vertical height. Therefore, the straight line $AB$ is horizontal, making it parallel to the $x$-axis.",
                        "To find the turning point of the curve $y = \\dfrac{ \\ln x }{ x^2 }$, we first find the derivative $\\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x }$ using the quotient rule, where $u = \\ln x$ and $v = x^2$:<br><br>\\begin{aligned} \\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } & = \\dfrac{ u'v - uv' }{ v^2 } \\cr & = \\dfrac{ \\left( \\dfrac{ 1 }{ x } \\right)(x^2) - (\\ln x)(2x) }{ (x^2)^2 } \\cr & = \\dfrac{ x - 2x\\ln x }{ x^4 } \\cr & = \\dfrac{ x(1 - 2\\ln x) }{ x^4 } \\cr & = \\dfrac{ 1 - 2\\ln x }{ x^3 } \\end{aligned}<br><br>At a turning point, the gradient must be zero:<br><br>\\begin{aligned} \\dfrac{ 1 - 2\\ln x }{ x^3 } & = 0 \\cr 1 - 2\\ln x & = 0 \\cr \\ln x & = \\dfrac{ 1 }{ 2 } \\cr x & = e^{ 1/2 } = \\sqrt{e} \\end{aligned}<br><br>Now we substitute $x = \\sqrt{e}$ back into our original equation to find the corresponding $y$-coordinate:<br><br>\\begin{aligned} y & = \\dfrac{ \\ln(\\sqrt{e}) }{ (\\sqrt{e})^2 } \\cr & = \\dfrac{ \\dfrac{ 1 }{ 2 } }{ e } \\cr & = \\dfrac{ 1 }{ 2e } \\end{aligned}<br><br>Thus, the exact coordinates of the turning point are $\\left( \\sqrt{e}, \\dfrac{ 1 }{ 2e } \\right)$.",
                        "To determine the nature of the turning point, we find the second derivative $\\dfrac{ \\mathrm{d}^2y }{ \\mathrm{d}x^2 }$ using the quotient rule on $\\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } = \\dfrac{ 1 - 2\\ln x }{ x^3 }$:<br><br>\\begin{aligned} \\dfrac{ \\mathrm{d}^2y }{ \\mathrm{d}x^2 } & = \\dfrac{ \\left( -\\dfrac{ 2 }{ x } \\right)(x^3) - (1 - 2\\ln x)(3x^2) }{ (x^3)^2 } \\cr & = \\dfrac{ -2x^2 - 3x^2(1 - 2\\ln x) }{ x^6 } \\cr & = \\dfrac{ x^2\\left[ -2 - 3 + 6\\ln x \\right] }{ x^6 } \\cr & = \\dfrac{ -5 + 6\\ln x }{ x^4 } \\end{aligned}<br><br>Now, we substitute the $x$-coordinate of our turning point ($x = \\sqrt{e}$, meaning $\\ln x = \\dfrac{ 1 }{ 2 }$) into this expression:<br><br>\\begin{aligned} \\dfrac{ \\mathrm{d}^2y }{ \\mathrm{d}x^2 } & = \\dfrac{ -5 + 6\\left( \\dfrac{ 1 }{ 2 } \\right) }{ (\\sqrt{e})^4 } \\cr & = \\dfrac{ -5 + 3 }{ e^2 } \\cr & = -\\dfrac{ 2 }{ e^2 } \\end{aligned}<br><br>Since the second derivative $-\\dfrac{ 2 }{ e^2 } < 0$, it is strictly negative. Therefore, the turning point is a local maximum."
                ],
                "pi_options": [
                        {
                                "ans": "$$\\left( e, \\dfrac{ 1 }{ e^2 } \\right)$ is a local minimum",
                                "feedback": "This arises if you make an algebra error solving $1-2\\ln x = 0$, incorrectly obtaining $\\ln x = 1 \\implies x = e$, and misidentify the nature of the turning point."
                        },
                        {
                                "ans": "$$\\left( \\sqrt{e}, \\dfrac{ 1 }{ 2e } \\right)$ is a local minimum",
                                "feedback": "This is a classification error, incorrectly interpreting a negative second derivative as indicating a minimum instead of a maximum."
                        },
                        {
                                "ans": "$$\\left( 1, 0 \\right)$ is a local maximum",
                                "feedback": "This is a conceptual error, confusing the $x$-axis crossing point with the turning point of the curve."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Turning Point of Log Fractions",
                        "content": "When differentiating logarithmic fractions like $\\dfrac{\\ln x}{x^2}$, always use the quotient rule carefully. A common mistake is to lose the factors of $x$ when simplifying the numerator. Always factorize the $x$ term in the numerator before canceling it with the denominator power to keep your derivative expression perfectly clean."
                }
        },
        {
                "id": "004572",
                "board": "OCR",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Curved Graphs",
                        "Differentiation"
                ],
                "img": false,
                "question": "<strong>(i)</strong> Write down the coordinates of the point where the curve $y = 2x^3 - 9x^2 + 12x - 3$ crosses the $y$-axis.<br><br><strong>(ii)</strong> Find the coordinates of the two turning points of the curve.<br><br><strong>(iii)</strong> Determine the nature of each turning point using the second derivative.<br><br><strong>(iv)</strong> Show that the line connecting the two turning points has a gradient of exactly $-1$.",
                "steps": [
                        "The curve crosses the $y$-axis when $x = 0$. Substituting $x = 0$ into our cubic equation:<br><br>\\begin{aligned} y(0) & = 2(0)^3 - 9(0)^2 + 12(0) - 3 \\cr & = -3 \\end{aligned}<br><br>Thus, the coordinates of the $y$-axis crossing point are $(0, -3)$.",
                        "To find the turning points of the curve, we calculate the first derivative and set it to zero:<br><br>\\begin{aligned} \\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } & = 6x^2 - 18x + 12 \\end{aligned}<br><br>Setting the gradient to zero:<br><br>\\begin{aligned} 6x^2 - 18x + 12 & = 0 \\cr 6(x^2 - 3x + 2) & = 0 \\cr 6(x - 1)(x - 2) & = 0 \\end{aligned}<br><br>This gives two stationary values: $x = 1$ or $x = 2$. Next, we substitute these back into our original equation to find their corresponding $y$-coordinates:<br><br>1. For $x = 1$:<br>\\begin{aligned} y & = 2(1)^3 - 9(1)^2 + 12(1) - 3 \\cr & = 2 - 9 + 12 - 3 \\cr & = 2 \\end{aligned}<br><br>2. For $x = 2$:<br>\\begin{aligned} y & = 2(2)^3 - 9(2)^2 + 12(2) - 3 \\cr & = 16 - 36 + 24 - 3 \\cr & = 1 \\end{aligned}<br><br>Thus, the coordinates of the two turning points are $(1, 2)$ and $(2, 1)$.",
                        "To find the nature of each turning point, we calculate the second derivative of our curve:<br><br>\\begin{aligned} \\dfrac{ \\mathrm{d}^2y }{ \\mathrm{d}x^2 } & = 12x - 18 \\end{aligned}<br><br>Now, we evaluate this second derivative at both turning points:<br><br>1. At $x = 1$:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}^2y }{ \\mathrm{d}x^2 } & = 12(1) - 18 \\cr & = -6 \\end{aligned}<br><br>Since $-6 < 0$, the turning point $(1, 2)$ is a local maximum.<br><br>2. At $x = 2$:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}^2y }{ \\mathrm{d}x^2 } & = 12(2) - 18 \\cr & = 6 \\end{aligned}<br><br>Since $6 > 0$, the turning point $(2, 1)$ is a local minimum.",
                        "To find the gradient of the straight line connecting the turning points $T_1(1, 2)$ and $T_2(2, 1)$, we use the standard gradient formula $m = \\dfrac{ y_2 - y_1 }{ x_2 - x_1 }$:<br><br>\\begin{aligned} m & = \\dfrac{ 1 - 2 }{ 2 - 1 } \\cr & = \\dfrac{ -1 }{ 1 } \\cr & = -1 \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$(1, 2)$ and $(2, -3)$",
                                "feedback": "This is caused by an arithmetic sign error when calculating the $y$-coordinate of the second stationary point."
                        },
                        {
                                "ans": "$(1, 3)$ and $(2, 1)$",
                                "feedback": "This arises from a simple addition error when substituting $x = 1$ back into the original cubic equation."
                        },
                        {
                                "ans": "$(1, -1)$ and $(2, -5)$",
                                "feedback": "This is caused by a major sign error where you subtract the linear term instead of adding it when evaluating the $y$-coordinates."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Double Turning Points",
                        "content": "For cubic curves, the second derivative $\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 12x - 18$ is a linear expression. Since it has only one root, the second derivative must have opposite signs at the two stationary points. This means a standard cubic curve with two stationary points will always have exactly one local maximum and one local minimum."
                }
        },
        {
                "id": "004573",
                "board": "OCR",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Differentiation",
                        "Limits"
                ],
                "img": false,
                "question": "<strong>(i)</strong> Find the coordinates of the point where the curve $y = x^2 e^{-x}$ crosses the coordinate axes.<br><br><strong>(ii)</strong> Find the coordinates of the two stationary points on the curve, giving your answers in exact form.<br><br><strong>(iii)</strong> Use the second derivative to determine the nature of each stationary point.<br><br><strong>(iv)</strong> State what happens to the value of $y$ as $x \\to \\infty$.",
                "steps": [
                        "The curve crosses the $y$-axis when $x = 0$. Substituting $x = 0$ into our equation:<br><br>\\begin{aligned} y(0) & = (0)^2 e^{-0} \\cr & = 0 \\end{aligned}<br><br>To find where the curve crosses the $x$-axis, we set $y = 0$:<br><br>\\begin{aligned} x^2 e^{-x} & = 0 \\end{aligned}<br><br>Since $e^{-x} \\ne 0$ for all real values of $x$, this equation is satisfied if and only if $x^2 = 0 \\implies x = 0$.<br><br>Therefore, the curve crosses both coordinate axes exactly at the origin, $(0, 0)$.",
                        "To find the stationary points on the curve $y = x^2 e^{-x}$, we use the product rule to find the first derivative, where $u = x^2$ and $v = e^{-x}$:<br><br>\\begin{aligned} \\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } & = u'v + uv' \\cr & = (2x)(e^{-x}) + (x^2)(-e^{-x}) \\cr & = (2x - x^2)e^{-x} \\cr & = x(2 - x)e^{-x} \\end{aligned}<br><br>Setting this gradient to zero to locate our stationary values:<br><br>\\begin{aligned} x(2 - x)e^{-x} & = 0 \\end{aligned}<br><br>Since $e^{-x} \\ne 0$, this yields $x = 0$ or $x = 2$. Next, we find the exact $y$-coordinates of these points:<br><br>1. For $x = 0$: $y = 0 \\implies (0, 0)$.<br>2. For $x = 2$: $y = 2^2 e^{-2} = 4e^{-2} = \\dfrac{ 4 }{ e^2 } \\implies \\left( 2, \\dfrac{ 4 }{ e^2 } \\right)$.<br><br>Thus, the exact coordinates of the stationary points are $(0, 0)$ and $\\left( 2, \\dfrac{ 4 }{ e^2 } \\right)$.",
                        "To find the nature of each stationary point, we find the second derivative using the product rule on $\\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } = (2x - x^2)e^{-x}$, with $u = 2x - x^2$ and $v = e^{-x}$:<br><br>\\begin{aligned} \\dfrac{ \\mathrm{d}^2y }{ \\mathrm{d}x^2 } & = (2 - 2x)(e^{-x}) + (2x - x^2)(-e^{-x}) \\cr & = (2 - 2x - 2x + x^2)e^{-x} \\cr & = (x^2 - 4x + 2)e^{-x} \\end{aligned}<br><br>Now, we evaluate this second derivative at both of our stationary values:<br><br>1. At $x = 0$:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}^2y }{ \\mathrm{d}x^2 } & = (0^2 - 4(0) + 2)e^0 \\cr & = 2 \\end{aligned}<br><br>Since $2 > 0$, the stationary point $(0, 0)$ is a local minimum.<br><br>2. At $x = 2$:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}^2y }{ \\mathrm{d}x^2 } & = (2^2 - 4(2) + 2)e^{-2} \\cr & = (4 - 8 + 2)e^{-2} \\cr & = -2e^{-2} = -\\dfrac{ 2 }{ e^2 } \\end{aligned}<br><br>Since $-\\dfrac{ 2 }{ e^2 } < 0$, the stationary point $\\left( 2, \\dfrac{ 4 }{ e^2 } \\right)$ is a local maximum.",
                        "We analyze the limiting behavior of the curve as $x \\to \\infty$:<br><br>\\begin{aligned} \\lim_{ x \\to \\infty } y & = \\lim_{ x \\to \\infty } \\dfrac{ x^2 }{ e^x } \\end{aligned}<br><br>As $x$ becomes extremely large, the exponential term $e^x$ grows at an infinitely faster rate than the polynomial term $x^2$. Therefore, the value of the fraction approaches zero:<br><br>\\begin{aligned} y & \\to 0 \\quad \\text{as} \\quad x \\to \\infty \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$y \\to \\infty$ as $x \\to \\infty$",
                                "feedback": "This error occurs if you assume the polynomial term $x^2$ dominates the growth of the expression, ignoring the decaying nature of the exponential divisor $e^x$."
                        },
                        {
                                "ans": "$y \\to 1$ as $x \\to \\infty$",
                                "feedback": "This is a conceptual error, assuming the curve reaches a stable non-zero horizontal asymptote instead of decaying to zero."
                        },
                        {
                                "ans": "$y \\to -\\infty$ as $x \\to \\infty$",
                                "feedback": "This arises from a sign error when evaluating the behavior of the negative exponent as $x$ increases."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Product Rule with e^-x",
                        "content": "When differentiating functions multiplied by $e^{-x}$ (or $e^{kx}$), the exponential term will always appear in every term of the derivative. To keep your work error-free, always factor out the $e^{-x}$ term immediately. This leaves a clean, simple polynomial that is easy to factorize and solve for stationary values."
                }
        },
        {
                "id": "004574",
                "board": "OCR",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Differentiation"
                ],
                "img": false,
                "question": "<strong>(i)</strong> Find the set of values of $x$ for which the curve $y = x + \\dfrac{ 4 }{ x }$ for $x \\ne 0$ is increasing.<br><br><strong>(ii)</strong> Find the coordinates of the stationary points on the curve.<br><br><strong>(iii)</strong> Use the second derivative to determine the nature of each stationary point.<br><br><strong>(iv)</strong> Show that the straight line connecting the two stationary points passes through the origin.",
                "steps": [
                        "To find where the curve is increasing, we first calculate the derivative $\\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x }$:<br><br>\\begin{aligned} y & = x + 4x^{-1} \\cr \\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } & = 1 - 4x^{-2} \\cr & = 1 - \\dfrac{ 4 }{ x^2 } \\end{aligned}<br><br>For the curve to be increasing, the gradient must be strictly positive:<br><br>\\begin{aligned} 1 - \\dfrac{ 4 }{ x^2 } & > 0 \\cr 1 & > \\dfrac{ 4 }{ x^2 } \\cr x^2 & > 4 \\end{aligned}<br><br>Taking the square root on both sides (and accounting for both positive and negative branches of the inequality):<br><br>\\begin{aligned} x > 2 \\quad \\text{or} \\quad x < -2 \\end{aligned}<br><br>Thus, the set of values for which the curve is increasing is $\\{ x : x < -2 \\} \\cup \\{ x : x > 2 \\}$.",
                        "At a stationary point, the gradient must equal zero:<br><br>\\begin{aligned} 1 - \\dfrac{ 4 }{ x^2 } & = 0 \\cr x^2 & = 4 \\cr x & = \\pm 2 \\end{aligned}<br><br>Next, we substitute $x = 2$ and $x = -2$ back into our original equation to find their corresponding $y$-coordinates:<br><br>1. For $x = 2$: $y = 2 + \\dfrac{ 4 }{ 2 } = 4 \\implies (2, 4)$.<br>2. For $x = -2$: $y = -2 + \\dfrac{ 4 }{ -2 } = -4 \\implies (-2, -4)$.<br><br>Thus, the coordinates of the stationary points are $(2, 4)$ and $(-2, -4)$.",
                        "To determine the nature of each stationary point, we find the second derivative of our function:<br><br>\\begin{aligned} \\dfrac{ \\mathrm{d}^2y }{ \\mathrm{d}x^2 } & = \\dfrac{ \\mathrm{d} }{ \\mathrm{d}x }\\left( 1 - 4x^{-2} \\right) \\cr & = 8x^{-3} \\cr & = \\dfrac{ 8 }{ x^3 } \\end{aligned}<br><br>Now, we evaluate this second derivative at both stationary points:<br><br>1. At $x = 2$:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}^2y }{ \\mathrm{d}x^2 } & = \\dfrac{ 8 }{ 2^3 } \\cr & = 1 \\end{aligned}<br><br>Since $1 > 0$, the stationary point $(2, 4)$ is a local minimum.<br><br>2. At $x = -2$:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}^2y }{ \\mathrm{d}x^2 } & = \\dfrac{ 8 }{ (-2)^3 } \\cr & = -1 \\end{aligned}<br><br>Since $-1 < 0$, the stationary point $(-2, -4)$ is a local maximum.",
                        "The two stationary points are $P(2, 4)$ and $Q(-2, -4)$. The gradient of the line connecting them is:<br><br>\\begin{aligned} m & = \\dfrac{ -4 - 4 }{ -2 - 2 } \\cr & = \\dfrac{ -8 }{ -4 } \\cr & = 2 \\end{aligned}<br><br>Using the point-slope formula $y - y_1 = m(x - x_1)$ to write the equation of the line passing through $P(2, 4)$:<br><br>\\begin{aligned} y - 4 & = 2(x - 2) \\cr y - 4 & = 2x - 4 \\cr y & = 2x \\end{aligned}<br><br>To show that this line passes through the origin, we substitute $x = 0$:<br><br>\\begin{aligned} y & = 2(0) \\cr & = 0 \\end{aligned}<br><br>Since $(0, 0)$ satisfies the equation of the line, the line connecting the two stationary points passes directly through the origin."
                ],
                "pi_options": [
                        {
                                "ans": "$-2 < x < 2$",
                                "feedback": "This is an inequality interval reversal, which incorrectly defines the range where the curve is decreasing ($\\frac{\\mathrm{d}y}{\\mathrm{d}x} < 0$)."
                        },
                        {
                                "ans": "$x > 2$ only",
                                "feedback": "This is incomplete because it completely ignores the negative branch of the square root inequality $x^2 > 4$."
                        },
                        {
                                "ans": "$x < -4$ or $x > 4$",
                                "feedback": "This error occurs if you fail to take the square root of $4$ when solving the inequality $x^2 > 4$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Solving Quadratic Inequalities",
                        "content": "When solving basic quadratic inequalities like $x^2 > 4$, be extremely vigilant. A very common student slip is to write $x > \\pm 2$, which is mathematically meaningless. Always split the inequality into its two correct branches: $x > 2$ or $x < -2$."
                }
        },
        {
                "id": "004575",
                "board": "OCR",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Differentiation"
                ],
                "img": false,
                "question": "<strong>(i)</strong> Find the $x$-coordinates of the points where the curve $y = e^x \\sin x$ crosses the $x$-axis on the interval $0 \\le x \\le \\pi$.<br><br><strong>(ii)</strong> Find the exact coordinates of the stationary point on the curve within this interval.<br><br><strong>(iii)</strong> Show that this stationary point is a local maximum.",
                "steps": [
                        "The curve crosses the $x$-axis when $y = 0$. We set our equation to zero on the interval $0 \\le x \\le \\pi$:<br><br>\\begin{aligned} e^x \\sin x & = 0 \\end{aligned}<br><br>Since $e^x > 0$ for all real values of $x$, this equation is satisfied if and only if $\\sin x = 0$. On the interval $0 \\le x \\le \\pi$, the solutions are:<br><br>\\begin{aligned} x = 0 \\quad \\text{or} \\quad x = \\pi \\end{aligned}<br><br>Thus, the $x$-coordinates of the crossings are $0$ and $\\pi$.",
                        "To find the stationary point, we use the product rule to find the derivative $\\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x }$, where $u = e^x$ and $v = \\sin x$:<br><br>\\begin{aligned} \\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } & = u'v + uv' \\cr & = (e^x)(\\sin x) + (e^x)(\\cos x) \\cr & = e^x(\\sin x + \\cos x) \\end{aligned}<br><br>We set this gradient to zero to find our stationary value:<br><br>\\begin{aligned} e^x(\\sin x + \\cos x) & = 0 \\end{aligned}<br><br>Since $e^x \\ne 0$, we solve $\\sin x + \\cos x = 0$. Dividing by $\\cos x$ (which is non-zero when the sum is zero):<br><br>\\begin{aligned} \\tan x + 1 & = 0 \\cr \\tan x & = -1 \\end{aligned}<br><br>On the interval $0 \\le x \\le \\pi$, the only solution to $\\tan x = -1$ is in Quadrant II:<br><br>\\begin{aligned} x & = \\pi - \\dfrac{ \\pi }{ 4 } \\cr & = \\dfrac{ 3\\pi }{ 4 } \\end{aligned}<br><br>Now, we substitute $x = \\dfrac{ 3\\pi }{ 4 }$ back into the original equation to find the exact $y$-coordinate:<br><br>\\begin{aligned} y & = e^{ 3\\pi / 4 } \\sin\\left( \\dfrac{ 3\\pi }{ 4 } \\right) \\cr & = e^{ 3\\pi / 4 } \\left( \\dfrac{ \\sqrt{2} }{ 2 } \\right) \\cr & = \\dfrac{ \\sqrt{2} }{ 2 } e^{ 3\\pi / 4 } \\end{aligned}<br><br>Thus, the exact coordinates of the stationary point are $\\left( \\dfrac{ 3\\pi }{ 4 }, \\dfrac{ \\sqrt{2} }{ 2 } e^{ 3\\pi / 4 } \\right)$.",
                        "To prove that this stationary point is a local maximum, we find the second derivative using the product rule on $\\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } = e^x(\\sin x + \\cos x)$, with $u = e^x$ and $v = \\sin x + \\cos x$:<br><br>\\begin{aligned} \\dfrac{ \\mathrm{d}^2y }{ \\mathrm{d}x^2 } & = (e^x)(\\sin x + \\cos x) + (e^x)(\\cos x - \\sin x) \\cr & = e^x(\\sin x + \\cos x + \\cos x - \\sin x) \\cr & = 2e^x \\cos x \\end{aligned}<br><br>Now, we evaluate this second derivative at our stationary point $x = \\dfrac{ 3\\pi }{ 4 }$:<br><br>\\begin{aligned} \\dfrac{ \\mathrm{d}^2y }{ \\mathrm{d}x^2 } & = 2e^{ 3\\pi / 4 } \\cos\\left( \\dfrac{ 3\\pi }{ 4 } \\right) \\cr & = 2e^{ 3\\pi / 4 } \\left( -\\dfrac{ \\sqrt{2} }{ 2 } \\right) \\cr & = -\\sqrt{2}e^{ 3\\pi / 4 } \\end{aligned}<br><br>Since $e^{ 3\\pi / 4 } > 0$ and $-\\sqrt{2} < 0$, the second derivative $-\\sqrt{2}e^{ 3\\pi / 4 } < 0$ is strictly negative. Therefore, the stationary point is indeed a local maximum."
                ],
                "pi_options": [
                        {
                                "ans": "$$\\left( \\dfrac{ \\pi }{ 4 }, \\dfrac{ \\sqrt{2} }{ 2 } e^{ \\pi / 4 } \\right)$ is a local maximum",
                                "feedback": "This is a quadrant error, incorrectly solving $\\tan x = 1$ instead of $\\tan x = -1$, yielding a Quadrant I stationary point."
                        },
                        {
                                "ans": "$$\\left( \\dfrac{ 3\\pi }{ 4 }, \\dfrac{ \\sqrt{2} }{ 2 } e^{ 3\\pi / 4 } \\right)$ is a local minimum",
                                "feedback": "This is a classification error, incorrectly assuming that a negative second derivative indicates a minimum instead of a maximum."
                        },
                        {
                                "ans": "$$\\left( \\dfrac{ \\pi }{ 2 }, e^{ \\pi / 2 } \\right)$ is a local maximum",
                                "feedback": "This occurs if you incorrectly differentiate the function or assume the stationary point occurs at the peak of the sine wave."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Restricted Domain Stationary Points",
                        "content": "When solving trigonometric stationary points like $\\tan x = -1$, always pay extreme attention to the interval constraints (here $0 \\le x \\le \\pi$). While tangent has infinitely many solutions, only $x = \\dfrac{3\\pi}{4}$ lies in Quadrant II of this restricted domain. Always check your boundaries first!"
                }
        },
        {
                "id": "004576",
                "board": "OCR",
                "level": "AS",
                "major_area": "Coordinate Geometry",
                "topic": "Circles",
                "subtopic": [
                        "Circle Geometry",
                        "Quadratics"
                ],
                "img": false,
                "question": "A circle with centre $C$ has equation $x^2 + y^2 + 6x - 10y - 2 = 0$.<br><br>Find:<br><strong>(i)</strong> the coordinates of $C$,<br><strong>(ii)</strong> the radius of the circle.",
                "steps": [
                        "To find the centre and radius of the circle, we complete the square for both the $x$ and $y$ terms in the given equation:<br>$x^2 + y^2 + 6x - 10y - 2 = 0$",
                        "Group the $x$ terms and $y$ terms together:<br>$(x^2 + 6x) + (y^2 - 10y) - 2 = 0$",
                        "Complete the square for each grouped variable:<br><br>For $x^2 + 6x$:<br>$(x + 3)^2 - 3^2 = (x + 3)^2 - 9$<br><br>For $y^2 - 10y$:<br>$(y - 5)^2 - 5^2 = (y - 5)^2 - 25$",
                        "Substitute these expressions back into the circle's equation and simplify:<br>\\begin{aligned} (x + 3)^2 - 9 + (y - 5)^2 - 25 - 2 &= 0 \\cr (x + 3)^2 + (y - 5)^2 - 36 &= 0 \\cr (x + 3)^2 + (y - 5)^2 &= 36 \\end{aligned}",
                        "<strong>(i)</strong> Compare this to the standard equation of a circle, $(x - a)^2 + (y - b)^2 = r^2$, where $(a, b)$ is the centre and $r$ is the radius:<br>Here, $a = -3$ and $b = 5$. Thus, the coordinates of the centre $C$ are $(-3, 5)$.",
                        "<strong>(ii)</strong> From the completed square equation, we see that $r^2 = 36$. Since the radius must be a positive length:<br>\\begin{aligned} r &= \\sqrt{ 36 } \\cr r &= 6 \\end{aligned}<br>So the radius of the circle is $6$."
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(i)</strong> $(3, -5)$<br><strong>(ii)</strong> $6$",
                                "feedback": "Ensure you use the correct signs when stating the centre from the completed square form. For $(x - a)^2 + (y - b)^2 = r^2$, the centre is $(a, b)$. Since we have $(x + 3)^2$ and $(y - 5)^2$, the centre must be $(-3, 5)$."
                        },
                        {
                                "ans": "<strong>(i)</strong> $(-3, 5)$<br><strong>(ii)</strong> $36$",
                                "feedback": "You have correctly identified the coordinates of the centre, but the right-hand side of the standard equation represents $r^2$, not $r$. Remember to take the square root of $36$ to find the radius."
                        },
                        {
                                "ans": "<strong>(i)</strong> $(-3, 5)$<br><strong>(ii)</strong> $\\sqrt{ 2 }$",
                                "feedback": "Check your arithmetic when completing the square. Ensure you subtract $3^2$ and $5^2$ during the process, then correctly transpose all constants to the right-hand side of the equation."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Don't Slip on Sign Conventions",
                        "content": "Always double-check your signs when stating the centre of a circle. A common mistake is to write the centre as $(a, b)$ directly from $(x + a)^2 + (y + b)^2 = r^2$. Remember that the standard form is $(x - a)^2 + (y - b)^2 = r^2$, so $(x + 3)^2$ corresponds to $a = -3$ and $(y - 5)^2$ corresponds to $b = 5$."
                }
        },
        {
                "id": "004577",
                "board": "OCR",
                "level": "AS",
                "major_area": "Coordinate Geometry",
                "topic": "Circles",
                "subtopic": [
                        "Circle Geometry",
                        "Quadratics"
                ],
                "img": false,
                "question": "A circle has equation $x^2 + y^2 - 4x + 12y + k = 0$, where $k$ is a constant. Given that the radius of the circle is $7$,<br><br>find:<br><strong>(i)</strong> the value of $k$,<br><strong>(ii)</strong> the coordinates of the centre of this circle.",
                "steps": [
                        "First, complete the square for the $x$ and $y$ terms in the given equation to convert it to standard form:<br>$(x^2 - 4x) + (y^2 + 12y) + k = 0$",
                        "Complete the square for each variable:<br><br>For $x^2 - 4x$:<br>$(x - 2)^2 - 4$<br><br>For $y^2 + 12y$:<br>$(y + 6)^2 - 36$",
                        "Substitute these back into the original equation and group the constant terms:<br>\\begin{aligned} (x - 2)^2 - 4 + (y + 6)^2 - 36 + k &= 0 \\cr (x - 2)^2 + (y + 6)^2 - 40 + k &= 0 \\cr (x - 2)^2 + (y + 6)^2 &= 40 - k \\end{aligned}",
                        "<strong>(i)</strong> We are given that the radius of the circle is $r = 7$, which means $r^2 = 49$. Comparing this with the standard equation $(x - a)^2 + (y - b)^2 = r^2$, we set the constant on the right-hand side equal to $49$:<br>\\begin{aligned} 40 - k &= 49 \\cr -k &= 9 \\cr k &= -9 \\end{aligned}",
                        "<strong>(ii)</strong> From the completed square form $(x - 2)^2 + (y + 6)^2 = 49$, compare this with the standard equation $(x - a)^2 + (y - b)^2 = r^2$ to find the centre $(a, b)$:<br>Here, $a = 2$ and $b = -6$. Therefore, the coordinates of the centre of the circle are $(2, -6)$."
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(i)</strong> $k = 33$<br><strong>(ii)</strong> $(-2, 6)$",
                                "feedback": "Ensure you use the square of the radius, $r^2 = 49$, on the right-hand side instead of the radius itself, $r = 7$. Also, check your signs for the centre coordinates."
                        },
                        {
                                "ans": "<strong>(i)</strong> $k = -9$<br><strong>(ii)</strong> $(-2, 6)$",
                                "feedback": "You found the correct value of $k = -9$, but remember that the centre coordinates $(a, b)$ are derived from $(x - a)^2 + (y - b)^2 = r^2$. Since we have $(x - 2)^2$ and $(y + 6)^2$, the centre must be $(2, -6)$."
                        },
                        {
                                "ans": "<strong>(i)</strong> $k = 33$<br><strong>(ii)</strong> $(2, -6)$",
                                "feedback": "The coordinates of the centre are correct, but when setting up the equation to solve for $k$, you must equate the constant term to $r^2 = 49$ rather than the radius $r = 7$."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Radius and Constant Relationships",
                        "content": "For any circle represented in general form $x^2 + y^2 + 2gx + 2fy + c = 0$, the radius is given by $r = \\sqrt{ g^2 + f^2 - c }$. This implies $r^2 = g^2 + f^2 - c$. In this question, $g = -2$, $f = 6$, and $c = k$. Substituting these values in gives $7^2 = (-2)^2 + 6^2 - k \\implies 49 = 4 + 36 - k \\implies k = -9$. This formula is a very useful shortcut to remember!"
                }
        },
        {
                "id": "004578",
                "board": "OCR",
                "level": "AS",
                "major_area": "Differentiation",
                "topic": "Circles",
                "subtopic": [
                        "Circle Geometry",
                        "Tangents and Normals"
                ],
                "img": false,
                "question": "A circle has equation $x^2 + y^2 - 10x - 4y + 11 = 0$.<br><br><strong>(i)</strong> Show that the point $P(8, 5)$ lies on the circle.<br><strong>(ii)</strong> Find the equation of the tangent to the circle at $P$, giving your answer in the form $ax + by + c = 0$, where $a$, $b$, and $c$ are integers.",
                "steps": [
                        "<strong>(i)</strong> To show that $P(8, 5)$ lies on the circle, substitute $x = 8$ and $y = 5$ into the left-hand side (LHS) of the circle's equation:<br>\\begin{aligned} \\text{LHS} &= (8)^2 + (5)^2 - 10(8) - 4(5) + 11 \\cr &= 64 + 25 - 80 - 20 + 11 \\cr &= 100 - 100 \\cr &= 0 \\end{aligned}<br>Since $\\text{LHS} = \\text{RHS} = 0$, the point $P(8, 5)$ lies on the circle.",
                        "<strong>(ii)</strong> To find the equation of the tangent at $P$, first determine the coordinates of the centre of the circle by completing the square:<br>\\begin{aligned} (x^2 - 10x) + (y^2 - 4y) + 11 &= 0 \\cr (x - 5)^2 - 25 + (y - 2)^2 - 4 + 11 &= 0 \\cr (x - 5)^2 + (y - 2)^2 &= 18 \\end{aligned}<br>Thus, the centre of the circle is $C(5, 2)$.",
                        "Next, calculate the gradient of the radius line $CP$ connecting the centre $C(5, 2)$ to the contact point $P(8, 5)$:<br>\\begin{aligned} m_{\\text{radius}} &= \\dfrac{ 5 - 2 }{ 8 - 5 } \\cr &= \\dfrac{ 3 }{ 3 } \\cr &= 1 \\end{aligned}",
                        "Since the tangent at any point on a circle is perpendicular to the radius at that point, the gradient of the tangent, $m_{\\text{tangent}}$, is the negative reciprocal of $m_{\\text{radius}}$:<br>\\begin{aligned} m_{\\text{tangent}} &= -\\dfrac{ 1 }{ m_{\\text{radius}} } \\cr &= -1 \\end{aligned}",
                        "Using the straight line equation $y - y_1 = m(x - x_1)$ with point $P(8, 5)$ and gradient $m = -1$, write the equation of the tangent:<br>\\begin{aligned} y - 5 &= -1(x - 8) \\cr y - 5 &= -x + 8 \\cr x + y - 13 &= 0 \\end{aligned}<br>This is in the required form $ax + by + c = 0$ where $a = 1$, $b = 1$, and $c = -13$."
                ],
                "pi_options": [
                        {
                                "ans": "$x - y - 3 = 0$",
                                "feedback": "You used a gradient of $1$ for your tangent. Remember that the tangent is perpendicular to the radius line $CP$. Since $m_{\\text{radius}} = 1$, the tangent gradient must be $-1$."
                        },
                        {
                                "ans": "$x + y + 13 = 0$",
                                "feedback": "Check your final algebraic transposition. Rearranging $y - 5 = -x + 8$ by adding $x$ and subtracting $8$ from both sides should lead to $x + y - 13 = 0$."
                        },
                        {
                                "ans": "$x + y - 3 = 0$",
                                "feedback": "The tangent line touches the circle specifically at the point $P(8, 5)$, not at the centre $C(5, 2)$. Ensure you use the coordinates of $P$ when setting up the straight line equation $y - y_1 = m(x - x_1)$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Perpendicularity is Key",
                        "content": "A tangent and a radius are always perpendicular at the point of contact. This geometrical property is the core link that allows us to find the tangent's gradient. Always compute the radius gradient first, then find its negative reciprocal: $m_{\\text{tangent}} \\cdot m_{\\text{radius}} = -1$."
                }
        },
        {
                "id": "004579",
                "board": "OCR",
                "level": "AS",
                "major_area": "Coordinate Geometry",
                "topic": "Circles",
                "subtopic": [
                        "Circle Geometry",
                        "Intersections"
                ],
                "img": false,
                "question": "The line $L$ has equation $y = x + 1$ and the circle $C$ has equation $x^2 + y^2 - 6x - 2y + 5 = 0$.<br><br><strong>(i)</strong> Find the coordinates of the points of intersection, $A$ and $B$, of the line $L$ and the circle $C$.<br><strong>(ii)</strong> Find the exact length of the chord $AB$, writing your answer as a simplified surd.",
                "steps": [
                        "<strong>(i)</strong> To find the points of intersection, substitute the expression for $y$ from the line equation, $y = x + 1$, into the circle equation:<br>$x^2 + (x + 1)^2 - 6x - 2(x + 1) + 5 = 0$",
                        "Expand the brackets and simplify the quadratic equation:<br>\\begin{aligned} x^2 + (x^2 + 2x + 1) - 6x - 2x - 2 + 5 &= 0 \\cr 2x^2 - 6x + 4 &= 0 \\end{aligned}",
                        "Divide the entire equation by $2$ to simplify, and then factorise:<br>\\begin{aligned} x^2 - 3x + 2 &= 0 \\cr (x - 1)(x - 2) &= 0 \\end{aligned}<br>This yields the $x$-coordinates: $x = 1$ and $x = 2$.",
                        "Substitute these $x$-values back into the linear equation $y = x + 1$ to find the corresponding $y$-coordinates:<br>For $x = 1$:<br>$y = 1 + 1 = 2 \\implies A(1, 2)$<br><br>For $x = 2$:<br>$y = 2 + 1 = 3 \\implies B(2, 3)$<br><br>So the coordinates of the points of intersection are $A(1, 2)$ and $B(2, 3)$.",
                        "<strong>(ii)</strong> To find the exact length of the chord $AB$, apply the distance formula between the points $A(1, 2)$ and $B(2, 3)$:<br>\\begin{aligned} AB &= \\sqrt{ (x_2 - x_1)^2 + (y_2 - y_1)^2 } \\cr &= \\sqrt{ (2 - 1)^2 + (3 - 2)^2 } \\cr &= \\sqrt{ 1^2 + 1^2 } \\cr &= \\sqrt{ 2 } \\end{aligned}<br>The exact length of the chord $AB$ is $\\sqrt{ 2 }$."
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(i)</strong> $A(1, 2)$ and $B(2, 3)$<br><strong>(ii)</strong> $2$",
                                "feedback": "The points of intersection are correct, but verify your distance formula. The distance between $(x_1, y_1)$ and $(x_2, y_2)$ is $\\sqrt{ (x_2 - x_1)^2 + (y_2 - y_1)^2 }$, not the sum of the differences."
                        },
                        {
                                "ans": "<strong>(i)</strong> $A(-1, 0)$ and $B(-2, -1)$<br><strong>(ii)</strong> $\\sqrt{ 2 }$",
                                "feedback": "Check your factorisation of $x^2 - 3x + 2 = 0$. Since the middle coefficient is negative and the constant is positive, both factors must have negative signs: $(x - 1)(x - 2) = 0$."
                        },
                        {
                                "ans": "<strong>(i)</strong> $A(1, 2)$ and $B(2, 3)$<br><strong>(ii)</strong> $\\sqrt{ 10 }$",
                                "feedback": "The coordinates of $A$ and $B$ are correct, but verify your substitution into the distance formula. Make sure you calculate $(2 - 1)^2 + (3 - 2)^2$ under the square root."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Choose the Simpler Equation",
                        "content": "Once you have found the $x$-coordinates of the intersection points, always substitute them back into the linear equation ($y = x + 1$) rather than the quadratic circle equation to find the $y$-coordinates. This is faster and reduces the risk of algebraic errors."
                }
        },
        {
                "id": "004580",
                "board": "OCR",
                "level": "AS",
                "major_area": "Coordinate Geometry",
                "topic": "Circles",
                "subtopic": [
                        "Circle Geometry"
                ],
                "img": false,
                "question": "The points $A(-2, 7)$ and $B(6, 1)$ are the endpoints of a diameter of a circle $C$.<br><br>Find:<br><strong>(i)</strong> the coordinates of the centre of the circle $C$,<br><strong>(ii)</strong> Show that the equation of the circle $C$ can be written in the form $x^2 + y^2 - 4x - 8y - 5 = 0$.",
                "steps": [
                        "<strong>(i)</strong> Since $A$ and $B$ are the endpoints of the diameter, the centre of the circle is the midpoint of the line segment $AB$. Apply the midpoint formula:<br>\\begin{aligned} \\text{Centre} &= \\left( \\dfrac{ x_1 + x_2 }{ 2 }, \\dfrac{ y_1 + y_2 }{ 2 } \\right) \\cr &= \\left( \\dfrac{ -2 + 6 }{ 2 }, \\dfrac{ 7 + 1 }{ 2 } \\right) \\cr &= \\left( \\dfrac{ 4 }{ 2 }, \\dfrac{ 8 }{ 2 } \\right) \\cr &= (2, 4) \\end{aligned}<br>So the coordinates of the centre of the circle are $(2, 4)$.",
                        "<strong>(ii)</strong> To construct the equation, first find the radius squared, $r^2$, by calculating the squared distance from the centre $(2, 4)$ to one of the endpoints, such as $B(6, 1)$:<br>\\begin{aligned} r^2 &= (6 - 2)^2 + (1 - 4)^2 \\cr &= 4^2 + (-3)^2 \\cr &= 16 + 9 \\cr &= 25 \\end{aligned}<br>Thus, $r^2 = 25$ (which means the radius is $r = 5$).",
                        "Write the equation of the circle using the standard form $(x - a)^2 + (y - b)^2 = r^2$ with centre $(2, 4)$ and $r^2 = 25$:<br>$(x - 2)^2 + (y - 4)^2 = 25$",
                        "Expand the squared brackets and simplify:<br>\\begin{aligned} (x^2 - 4x + 4) + (y^2 - 8y + 16) &= 25 \\cr x^2 + y^2 - 4x - 8y + 20 &= 25 \\cr x^2 + y^2 - 4x - 8y - 5 &= 0 \\end{aligned}<br>This matches the required form."
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(i)</strong> $(2, 4)$<br><strong>(ii)</strong> $x^2 + y^2 - 4x - 8y + 20 = 0$",
                                "feedback": "You have the correct centre and radius, but remember to subtract $25$ from the left-hand side when transposing to get $0$ on the RHS: $+20 - 25 = -5$."
                        },
                        {
                                "ans": "<strong>(i)</strong> $(4, 8)$<br><strong>(ii)</strong> $x^2 + y^2 - 8x - 16y + 55 = 0$",
                                "feedback": "The midpoint formula is $\\left( \\dfrac{ x_1 + x_2 }{ 2 }, \\dfrac{ y_1 + y_2 }{ 2 } \\right)$. Make sure you divide the sum of the coordinates by $2$ to find the correct coordinates of the centre."
                        },
                        {
                                "ans": "<strong>(i)</strong> $(2, 4)$<br><strong>(ii)</strong> $x^2 + y^2 - 4x - 8y - 95 = 0$",
                                "feedback": "The diameter is $10$, which means the radius is $5$, so $r^2 = 5^2 = 25$. Make sure you use the radius squared, not the diameter squared, in the standard circle equation."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Diameter vs. Radius",
                        "content": "Be extremely vigilant when dealing with diameter endpoints. A common slip is to use the full distance $AB$ as the radius instead of halving it, or to use $r^2 = (AB)^2$ directly. Always write down the midpoint as the centre, compute the radius $r = \\dfrac{ 1 }{ 2 } AB$, and then square it to obtain $r^2$."
                }
        },
        {
                "id": "004581",
                "board": "OCR",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Functions",
                "subtopic": [
                        "Functions and Mappings"
                ],
                "img": false,
                "question": "Solve the equation $|3x - 2| = |x + 4|$.",
                "steps": [
                        "To solve an equation of the form $|f(x)| = |g(x)|$, we split the equation into two cases. Since their absolute values are equal, the terms inside must either be equal or have opposite signs:<br><strong>Case 1:</strong> $3x - 2 = x + 4$<br><strong>Case 2:</strong> $3x - 2 = -(x + 4)$",
                        "Solve <strong>Case 1</strong> by grouping the $x$ terms on one side:<br>\\begin{aligned} 3x - 2 &= x + 4 \\cr 2x &= 6 \\cr x &= 3 \\end{aligned}",
                        "Solve <strong>Case 2</strong> by expanding the negative bracket and solving:<br>\\begin{aligned} 3x - 2 &= -(x + 4) \\cr 3x - 2 &= -x - 4 \\cr 4x &= -2 \\cr x &= -\\dfrac{ 1 }{ 2 } \\end{aligned}",
                        "Since both values satisfy the original equation, the complete solution is:<br>$x = 3$ or $x = -\\dfrac{ 1 }{ 2 }$"
                ],
                "pi_options": [
                        {
                                "ans": "$x = 3$ or $x = \\dfrac{ 1 }{ 2 }$",
                                "feedback": "Check your signs in the negative case. Setting $3x - 2 = -(x + 4)$ gives $3x - 2 = -x - 4$. Rearranging this correctly should give $4x = -2$, which yields $x = -\\dfrac{ 1 }{ 2 }$, not $\\dfrac{ 1 }{ 2 }$."
                        },
                        {
                                "ans": "$x = 1$ or $x = -1$",
                                "feedback": "Verify your algebraic rearrangement for both cases. For $3x - 2 = x + 4$, subtracting $x$ and adding $2$ to both sides gives $2x = 6 \\implies x = 3$."
                        },
                        {
                                "ans": "$x = 3$ only",
                                "feedback": "When solving $|f(x)| = |g(x)|$, remember that there are two valid cases to consider: $f(x) = g(x)$ and $f(x) = -g(x)$. Both cases yield valid solutions for this equation."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Squaring vs. Signs",
                        "content": "While you can solve $|f(x)| = |g(x)|$ by squaring both sides, this often leads to larger quadratic expressions that are more prone to algebraic errors. Simply splitting the equation into $f(x) = \\pm g(x)$ is much faster, cleaner, and avoids squaring numbers like $3^2$ or $4^2$."
                }
        },
        {
                "id": "004582",
                "board": "OCR",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Functions",
                "subtopic": [
                        "Functions and Mappings"
                ],
                "img": false,
                "question": "Solve the equation $|2x - 5| = 3x - 1$.",
                "steps": [
                        "To solve $|2x - 5| = 3x - 1$, we must find the values of $x$ that satisfy the positive and negative branches of the modulus, and then check each solution to ensure it is valid:<br><strong>Case 1 (Positive branch):</strong> $2x - 5 = 3x - 1$<br><strong>Case 2 (Negative branch):</strong> $2x - 5 = -(3x - 1)$",
                        "Solve <strong>Case 1</strong>:<br>\\begin{aligned} 2x - 5 &= 3x - 1 \\cr -x &= 4 \\cr x &= -4 \\end{aligned}",
                        "Solve <strong>Case 2</strong>:<br>\\begin{aligned} 2x - 5 &= -(3x - 1) \\cr 2x - 5 &= -3x + 1 \\cr 5x &= 6 \\cr x &= \\dfrac{ 6 }{ 5 } \\end{aligned}",
                        "Now we must check both solutions. Because the right-hand side is not inside a modulus, it must be non-negative (since an absolute value can never be negative):<br>For $x = -4$, the right-hand side is $3(-4) - 1 = -13 < 0$. Thus, $x = -4$ is an <strong>extraneous solution</strong> and must be rejected.<br><br>For $x = \\dfrac{ 6 }{ 5 }$, the right-hand side is $3\\left( \\dfrac{ 6 }{ 5 } \\right) - 1 = \\dfrac{ 13 }{ 5 } \\ge 0$. Thus, $x = \\dfrac{ 6 }{ 5 }$ is valid.",
                        "Therefore, the only valid solution to the equation is:<br>$x = \\dfrac{ 6 }{ 5 }$ (or $1.2$)"
                ],
                "pi_options": [
                        {
                                "ans": "$x = -4$ or $x = \\dfrac{ 6 }{ 5 }$",
                                "feedback": "An absolute value can never be equal to a negative quantity. If you substitute $x = -4$ into the right-hand side, $3x - 1$ becomes $-13$. Since $|2x - 5|$ cannot equal $-13$, $x = -4$ is an extraneous solution and must be rejected."
                        },
                        {
                                "ans": "$x = -4$ only",
                                "feedback": "Be careful! Substituting $x = -4$ into the original equation yields $|-13| = -13$, which is false. You must always solve the negative branch $2x - 5 = -(3x - 1)$ and reject any solutions that make the RHS negative."
                        },
                        {
                                "ans": "$x = \\dfrac{ 4 }{ 5 }$",
                                "feedback": "Verify your expansion of the negative branch. Setting $2x - 5 = -(3x - 1)$ gives $2x - 5 = -3x + 1$. Adding $3x$ and adding $5$ to both sides yields $5x = 6$, so $x = \\dfrac{ 6 }{ 5 }$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Beware of Extraneous Solutions",
                        "content": "When solving an equation of the form $|f(x)| = g(x)$, where $g(x)$ is not inside a modulus, you MUST check your final answers by substituting them back into the original equation (or verifying that $g(x) \\ge 0$). Failing to filter out extraneous solutions is a major source of lost marks in Year 2 A Level exams."
                }
        },
        {
                "id": "004583",
                "board": "OCR",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Functions",
                "subtopic": [
                        "Inequalities"
                ],
                "img": false,
                "question": "Solve the inequality $|2x - 3| < |x + 2|$.",
                "steps": [
                        "Since both sides of the inequality are non-negative, we can solve it by squaring both sides to eliminate the absolute value brackets:<br>$(2x - 3)^2 < (x + 2)^2$",
                        "Expand both sides of the inequality:<br>\\begin{aligned} 4x^2 - 12x + 9 &< x^2 + 4x + 4 \\cr 4x^2 - 12x + 9 - x^2 - 4x - 4 &< 0 \\cr 3x^2 - 16x + 5 &< 0 \\end{aligned}",
                        "To solve this quadratic inequality, find the critical values by solving the quadratic equation $3x^2 - 16x + 5 = 0$. We can factorise this equation:<br>\\begin{aligned} 3x^2 - 15x - x + 5 &= 0 \\cr 3x(x - 5) - 1(x - 5) &= 0 \\cr (3x - 1)(x - 5) &= 0 \\end{aligned}<br>This gives the critical values $x = \\dfrac{ 1 }{ 3 }$ and $x = 5$.",
                        "Consider the graph of $y = 3x^2 - 16x + 5$, which is a U-shaped parabola. The inequality is satisfied where the curve lies below the $x$-axis (i.e., $< 0$):<br>This occurs between the two roots, so the solution is:<br>$\\dfrac{ 1 }{ 3 } < x < 5$"
                ],
                "pi_options": [
                        {
                                "ans": "$x < \\dfrac{ 1 }{ 3 }$ or $x > 5$",
                                "feedback": "The quadratic inequality is $3x^2 - 16x + 5 < 0$. For a positive $x^2$ coefficient, the quadratic expression is negative (less than zero) <strong>between</strong> the roots, not outside them."
                        },
                        {
                                "ans": "$-\\dfrac{ 1 }{ 3 } < x < 5$",
                                "feedback": "Check your factorisation. The factored form is $(3x - 1)(x - 5) = 0$. Setting $3x - 1 = 0$ gives $x = \\dfrac{ 1 }{ 3 }$, not $-\\dfrac{ 1 }{ 3 }$."
                        },
                        {
                                "ans": "$$\\dfrac{ 1 }{ 3 } \\le x \\le 5$",
                                "feedback": "Pay close attention to the inequality sign in the question. The original inequality uses strict inequality ($<$), so your final answer must also use strict inequalities ($<$) rather than weak inequalities ($\\le$)."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Why Squaring Works",
                        "content": "Squaring is highly effective for inequalities of the form $|f(x)| < |g(x)|$ because both sides are guaranteed to be non-negative. It completely avoids having to consider multiple boundary cases for each modulus. Always remember to collect all terms onto one side, find the critical values, and sketch the quadratic curve to identify the correct interval."
                }
        },
        {
                "id": "004584",
                "board": "OCR",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Functions",
                "subtopic": [
                        "Functions and Mappings"
                ],
                "img": false,
                "question": "Solve the equation $x^2 - 3|x| - 10 = 0$.",
                "steps": [
                        "To solve this equation, use the identity $x^2 = |x|^2$ to rewrite the equation entirely in terms of $|x|$:<br>$|x|^2 - 3|x| - 10 = 0$",
                        "This is a quadratic equation in terms of $|x|$. Let $y = |x|$, where $y \\ge 0$ since absolute values are always non-negative. This gives:<br>$y^2 - 3y - 10 = 0$",
                        "Factorise the quadratic equation:<br>\\begin{aligned} (y - 5)(y + 2) &= 0 \\end{aligned}<br>So, $y = 5$ or $y = -2$.",
                        "Since $y = |x| \\ge 0$, the solution $y = -2$ is impossible and must be rejected. This leaves:<br>$|x| = 5$",
                        "Solve for $x$:<br>\\begin{aligned} x = 5 \\quad \\text{or} \\quad x = -5 \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$x = 5$ or $x = -5$ or $x = 2$ or $x = -2$",
                                "feedback": "Remember that $|x|$ represents the absolute value of $x$, which can never be negative. Therefore, $|x| = -2$ has no real solutions, and you must reject this branch."
                        },
                        {
                                "ans": "$x = 5$ only",
                                "feedback": "While you correctly rejected the negative root for $|x|$, remember that $|x| = 5$ has two solutions: $x = 5$ and $x = -5$, as both have an absolute value of $5$."
                        },
                        {
                                "ans": "$x = 2$ or $x = -2$",
                                "feedback": "Check your factorisation of $y^2 - 3y - 10 = 0$. Since the middle term is $-3$, the factors must be $(y - 5)(y + 2) = 0$, giving $y = 5$ as the valid positive root."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: $x^2$ and $|x|^2$",
                        "content": "The substitution $x^2 = |x|^2$ is an extremely powerful technique for solving equations that mix standard algebraic terms with modulus terms. This allows you to treat the equation as a standard quadratic in terms of $|x|$. Always remember to apply the condition $|x| \\ge 0$ to eliminate any invalid negative roots before solving for $x$."
                }
        },
        {
                "id": "004585",
                "board": "OCR",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Functions",
                "subtopic": [
                        "Inequalities"
                ],
                "img": false,
                "question": "Solve the inequality $|2x - 1| \\ge 5 - x$.",
                "steps": [
                        "To solve the inequality $|2x - 1| \\ge 5 - x$, we first find the critical intersection points by solving the corresponding equation:<br>$|2x - 1| = 5 - x$",
                        "Split the equation into its positive and negative cases:<br><strong>Case 1:</strong> $2x - 1 = 5 - x$<br><strong>Case 2:</strong> $2x - 1 = -(5 - x)$",
                        "Solve <strong>Case 1</strong>:<br>\\begin{aligned} 2x - 1 &= 5 - x \\cr 3x &= 6 \\cr x &= 2 \\end{aligned}",
                        "Solve <strong>Case 2</strong>:<br>\\begin{aligned} 2x - 1 &= -5 + x \\cr x &= -4 \\end{aligned}<br>This gives us two critical values: $x = -4$ and $x = 2$.",
                        "To find the intervals that satisfy $|2x - 1| \\ge 5 - x$, test a value from each of the three regions defined by our critical values $x = -4$ and $x = 2$:<br><br><strong>Region 1 ($x \\le -4$):</strong> Test $x = -5$.<br>$|2(-5) - 1| = |-11| = 11$, and $5 - (-5) = 10$. Since $11 \\ge 10$, this region is part of the solution.<br><br><strong>Region 2 ($-4 < x < 2$):</strong> Test $x = 0$.<br>$|2(0) - 1| = |-1| = 1$, and $5 - 0 = 5$. Since $1 \\ge 5$ is false, this region is not part of the solution.<br><br><strong>Region 3 ($x \\ge 2$):</strong> Test $x = 3$.<br>$|2(3) - 1| = |5| = 5$, and $5 - 3 = 2$. Since $5 \\ge 2$, this region is part of the solution.<br><br>Combining these results, the final solution set is:<br>$x \\le -4$ or $x \\ge 2$"
                ],
                "pi_options": [
                        {
                                "ans": "$-4 \\le x \\le 2$",
                                "feedback": "The inequality $|2x - 1| \\ge 5 - x$ is satisfied in the outer regions. If you test a value in the inner region, like $x = 0$, you get $1 \\ge 5$, which is clearly false."
                        },
                        {
                                "ans": "$x \\le -4$ only",
                                "feedback": "You have only identified one of the boundaries. When solving a modulus equation or inequality, you must consider both positive and negative branches to find all critical points."
                        },
                        {
                                "ans": "$x \\le -2$ or $x \\ge 4$",
                                "feedback": "Check your algebra when finding the critical values. For $2x - 1 = 5 - x$, adding $x$ to both sides gives $3x = 6 \\implies x = 2$."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Visualising Modulus Inequalities",
                        "content": "Visualising this graphically is incredibly helpful. The graph of $y = |2x - 1|$ is a V-shape with its vertex at $x = 0.5$. The graph of $y = 5 - x$ is a straight line sloping downwards. The two graphs intersect at $x = -4$ and $x = 2$. Looking at the graphs, the V-shape lies on or above the line for $x \\le -4$ and for $x \\ge 2$. This perfectly matches our algebraic test results!"
                }
        },
        {
                "id": "004586",
                "board": "OCR",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Equations and Inequalities",
                "subtopic": [
                        "Inequalities",
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "A rectangular courtyard is being planned. The requirements for the design are:<br><br><strong>•</strong> the length of the courtyard is to be $4\\text{ m}$ longer than its width,<br><strong>•</strong> the length of the courtyard must be at least $10\\text{ m}$,<br><strong>•</strong> the area of the courtyard must be less than $96\\text{ m}^2$.<br><br>Find the set of possible values for the width, $w$, of the courtyard.",
                "steps": [
                        "Let $w$ be the width of the courtyard in metres. Since the length is $4\\text{ m}$ longer than the width, we can write the length $L$ as:<br>$L = w + 4$",
                        "We are given that the length must be at least $10\\text{ m}$. This gives our first linear inequality:<br>\\begin{aligned} w + 4 &\\ge 10 \\cr w &\\ge 6 \\end{aligned}",
                        "Next, the area of the courtyard must be less than $96\\text{ m}^2$. Since $\\text{Area} = \\text{width} \\times \\text{length}$, we set up a quadratic inequality:<br>\\begin{aligned} w(w + 4) &< 96 \\cr w^2 + 4w - 96 &< 0 \\end{aligned}",
                        "To solve $w^2 + 4w - 96 < 0$, find the critical values by factorising the corresponding quadratic equation $w^2 + 4w - 96 = 0$:<br>\\begin{aligned} (w + 12)(w - 8) &= 0 \\end{aligned}<br>This gives critical values of $w = -12$ and $w = 8$.",
                        "The inequality $w^2 + 4w - 96 < 0$ is satisfied where the quadratic expression is negative. Since the $w^2$ coefficient is positive, the curve is a U-shaped parabola, which lies below the $x$-axis between its roots:<br>$-12 < w < 8$",
                        "Finally, combine our constraints. We have $w \\ge 6$ and $-12 < w < 8$ (and physical width $w$ must be positive, which is already satisfied by $w \\ge 6$):<br>The overlapping region gives the final set of possible values for the width:<br>$6 \\le w < 8$"
                ],
                "pi_options": [
                        {
                                "ans": "$0 < w < 8$",
                                "feedback": "You have only solved the area inequality. You must also consider the requirement that the length of the courtyard must be at least $10\\text{ m}$, which yields $w \\ge 6$."
                        },
                        {
                                "ans": "$6 \\le w \\le 8$",
                                "feedback": "Check your inequality signs carefully. The area must be strictly <strong>less than</strong> $96\\text{ m}^2$, which means $w^2 + 4w - 96 < 0$. Therefore, the upper boundary must be a strict inequality: $w < 8$, not $w \\le 8$."
                        },
                        {
                                "ans": "$6 < w < 8$",
                                "feedback": "Check the inequality for the length requirement. The length must be <strong>at least</strong> $10\\text{ m}$, which is a weak inequality ($\\ge$). Therefore, the lower boundary must be $w \\ge 6$, not $w > 6$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Combining Inequality Boundaries",
                        "content": "Always list out your boundaries carefully before combining them. A common slip is to write $w < 8$ and forget that the physical width must be positive, or to ignore the other linear constraint. Draw a quick number line to find where all inequalities overlap: here, $w \\ge 6$ and $w < 8$ overlap to give $6 \\le w < 8$."
                }
        },
        {
                "id": "004587",
                "board": "OCR",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Equations and Inequalities",
                "subtopic": [
                        "Inequalities",
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "A right-angled triangle has a base of $x\\text{ cm}$ and a height that is $5\\text{ cm}$ shorter than the base. The requirements are:<br><br><strong>•</strong> the height must be at least $4\\text{ cm}$,<br><strong>•</strong> the area of the triangle must be less than $42\\text{ cm}^2$.<br><br>Find the set of possible values for $x$.",
                "steps": [
                        "Let the base of the triangle be $x\\text{ cm}$. The height $h$ is $5\\text{ cm}$ shorter than the base, so:<br>$h = x - 5$",
                        "We are given that the height must be at least $4\\text{ cm}$. This gives our first inequality:<br>\\begin{aligned} x - 5 &\\ge 4 \\cr x &\\ge 9 \\end{aligned}",
                        "The area of the triangle must be less than $42\\text{ cm}^2$. Using the formula $\\text{Area} = \\dfrac{ 1 }{ 2 } \\times \\text{base} \\times \\text{height}$:<br>\\begin{aligned} \\dfrac{ 1 }{ 2 } x (x - 5) &< 42 \\cr x(x - 5) &< 84 \\cr x^2 - 5x - 84 &< 0 \\end{aligned}",
                        "Solve $x^2 - 5x - 84 < 0$ by finding the critical values. Factorise the quadratic equation:<br>\\begin{aligned} (x - 12)(x + 7) &= 0 \\end{aligned}<br>This gives critical values of $x = 12$ and $x = -7$.",
                        "The quadratic expression is negative between its roots, which gives the interval:<br>$-7 < x < 12$",
                        "Now, combine the conditions $x \\ge 9$ and $-7 < x < 12$. The overlap of these regions gives the final set of possible values for $x$:<br>$9 \\le x < 12$"
                ],
                "pi_options": [
                        {
                                "ans": "$5 < x < 12$",
                                "feedback": "The height must be <strong>at least</strong> $4\\text{ cm}$, which gives $x - 5 \\ge 4 \\implies x \\ge 9$. This is a stronger condition than simply requiring the height to be positive ($x > 5$)."
                        },
                        {
                                "ans": "$9 < x < 12$",
                                "feedback": "The requirement is that the height must be <strong>at least</strong> $4\\text{ cm}$, which includes the possibility of it being exactly $4\\text{ cm}$. Therefore, the lower bound must be a weak inequality ($x \\ge 9$)."
                        },
                        {
                                "ans": "$9 \\le x \\le 12$",
                                "feedback": "The area must be strictly <strong>less than</strong> $42\\text{ cm}^2$, which means the upper boundary must be a strict inequality ($x < 12$)."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Don't Forget the Half",
                        "content": "A very common slip in triangle questions is forgetting the $\\frac{ 1 }{ 2 }$ in the area formula, which would lead to $x(x - 5) < 42$ and messy non-integer roots. Always write out the full geometric formula $\\text{Area} = \\frac{ 1 }{ 2 } b h$ first before substituting algebraic expressions."
                }
        },
        {
                "id": "004588",
                "board": "OCR",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Equations and Inequalities",
                "subtopic": [
                        "Inequalities",
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "A cardboard box is designed with a square base of side length $y\\text{ cm}$ and a height of $8\\text{ cm}$. The requirements are:<br><br><strong>•</strong> the volume of the box must be greater than $128\\text{ cm}^3$,<br><strong>•</strong> the total surface area of the box must be at most $450\\text{ cm}^2$.<br><br>Find the set of possible values for $y$.",
                "steps": [
                        "The base of the box is a square with side length $y\\text{ cm}$, and the height is $8\\text{ cm}$. The volume $V$ of the box is:<br>\\begin{aligned} V &= y^2 \\times 8 \\cr V &= 8y^2 \\end{aligned}",
                        "Since the volume must be greater than $128\\text{ cm}^3$, we write:<br>\\begin{aligned} 8y^2 &> 128 \\cr y^2 &> 16 \\end{aligned}<br>Since $y$ must be positive, this gives:<br>$y > 4$",
                        "The total surface area $SA$ of a closed box with a square base of side $y$ and height $8$ consists of the top and bottom squares ($2y^2$) plus the four vertical side faces ($4 \\times 8y$):<br>\\begin{aligned} SA &= 2y^2 + 32y \\end{aligned}",
                        "Since the total surface area must be at most $450\\text{ cm}^2$, we set up the quadratic inequality:<br>\\begin{aligned} 2y^2 + 32y &\\le 450 \\cr 2y^2 + 32y - 450 &\\le 0 \\cr y^2 + 16y - 225 &\\le 0 \\end{aligned}",
                        "Solve $y^2 + 16y - 225 \\le 0$ by finding the critical values. Factorise the quadratic equation:<br>\\begin{aligned} (y + 25)(y - 9) &= 0 \\end{aligned}<br>This gives critical values of $y = -25$ and $y = 9$.",
                        "The quadratic expression is non-positive between its roots, which gives:<br>$-25 \\le y \\le 9$",
                        "Now, combine our constraints: $y > 4$ and $-25 \\le y \\le 9$. The overlapping region gives our final set of possible values:<br>$4 < y \\le 9$"
                ],
                "pi_options": [
                        {
                                "ans": "$4 \\le y \\le 9$",
                                "feedback": "The volume must be strictly <strong>greater than</strong> $128\\text{ cm}^3$, which yields $y^2 > 16 \\implies y > 4$. This requires a strict inequality ($>$) for the lower boundary."
                        },
                        {
                                "ans": "$0 < y \\le 9$",
                                "feedback": "Make sure to incorporate all constraints. While the side length must be positive, the volume requirement that $V > 128\\text{ cm}^3$ restricts $y$ to be strictly greater than $4$."
                        },
                        {
                                "ans": "$4 < y < 9$",
                                "feedback": "The total surface area must be <strong>at most</strong> $450\\text{ cm}^2$, which allows the surface area to be exactly $450\\text{ cm}^2$. Therefore, the upper boundary must be a weak inequality ($y \\le 9$)."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Identifying Total Surface Area",
                        "content": "A closed cuboid has six faces. For a box with a square base of side $y$ and height $h$, the top and bottom faces are squares of area $y^2$, and the four sides are rectangles of area $y h$. Always read carefully to see if a box is 'closed' or 'open'—if it were open-topped, the surface area would only include one square base: $y^2 + 4yh$."
                }
        },
        {
                "id": "004589",
                "board": "OCR",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Equations and Inequalities",
                "subtopic": [
                        "Inequalities",
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "A rectangular paddock is to be enclosed by a fence. The width of the paddock is $x\\text{ m}$ and the length is $2x - 5\\text{ m}$. The requirements are:<br><br><strong>•</strong> the total length of fencing used (the perimeter) must be at least $50\\text{ m}$,<br><strong>•</strong> the area of the paddock must be at most $300\\text{ m}^2$.<br><br>Find the set of possible values for $x$.",
                "steps": [
                        "The width of the paddock is $x$ and the length is $2x - 5$. The perimeter $P$ is the total sum of all four sides:<br>\\begin{aligned} P &= 2(x + 2x - 5) \\cr P &= 2(3x - 5) \\cr P &= 6x - 10 \\end{aligned}",
                        "We are given that the perimeter must be at least $50\\text{ m}$. This gives our first linear inequality:<br>\\begin{aligned} 6x - 10 &\\ge 50 \\cr 6x &\\ge 60 \\cr x &\\ge 10 \\end{aligned}",
                        "The area of the paddock must be at most $300\\text{ m}^2$. Using the formula $\\text{Area} = \\text{width} \\times \\text{length}$:<br>\\begin{aligned} x(2x - 5) &\\le 300 \\cr 2x^2 - 5x - 300 &\\le 0 \\end{aligned}",
                        "Solve $2x^2 - 5x - 300 \\le 0$ by finding the critical values. We can factorise this quadratic expression by splitting the middle term:<br>\\begin{aligned} 2x^2 - 25x + 24x - 300 &= 0 \\cr x(2x - 25) + 12(2x - 25) &= 0 \\cr (x + 12)(2x - 25) &= 0 \\end{aligned}<br>This gives critical values of $x = -12$ and $x = 12.5$ (or $\\dfrac{ 25 }{ 2 }$).",
                        "Since the quadratic expression is non-positive between its roots, the interval is:<br>$-12 \\le x \\le 12.5$",
                        "Finally, combine the two constraints $x \\ge 10$ and $-12 \\le x \\le 12.5$. The overlapping region gives the final set of possible values for $x$:<br>$10 \\le x \\le 12.5$"
                ],
                "pi_options": [
                        {
                                "ans": "$10 \\le x < 12.5$",
                                "feedback": "The area must be <strong>at most</strong> $300\\text{ m}^2$, which means it can be exactly $300\\text{ m}^2$. Thus, the upper boundary must be a weak inequality ($x \\le 12.5$)."
                        },
                        {
                                "ans": "$10 < x \\le 12.5$",
                                "feedback": "The perimeter must be <strong>at least</strong> $50\\text{ m}$, which means it can be exactly $50\\text{ m}$. Thus, the lower boundary must be a weak inequality ($x \\ge 10$)."
                        },
                        {
                                "ans": "$0 < x \\le 12.5$",
                                "feedback": "Remember to apply the perimeter constraint. While the width must be positive, requiring the perimeter to be at least $50\\text{ m}$ restricts $x$ to be at least $10$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Splitting the Middle Term",
                        "content": "To factorise $2x^2 - 5x - 300$, look for two numbers that multiply to $2 \\times (-300) = -600$ and add to $-5$. Since $24 \\times (-25) = -600$ and $24 + (-25) = -5$, we split the middle term as $-25x + 24x$. Grouping terms then makes factorising straightforward."
                }
        },
        {
                "id": "004590",
                "board": "OCR",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Equations and Inequalities",
                "subtopic": [
                        "Inequalities",
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "A small company's weekly profit, $P$ (in hundreds of pounds), from producing $x$ units of a product is modelled by $P = 14x - x^2 - 24$. The company wants to ensure that:<br><br><strong>•</strong> the weekly profit is at least $16$ hundred pounds,<br><strong>•</strong> the number of units produced is strictly greater than $5$.<br><br>Find the set of possible values for $x$.",
                "steps": [
                        "The profit equation is $P = 14x - x^2 - 24$. We require the profit to be at least $16$ (since $P$ is already defined in hundreds of pounds):<br>$14x - x^2 - 24 \\ge 16$",
                        "Rearrange this into standard quadratic inequality form with a positive $x^2$ coefficient:<br>\\begin{aligned} -x^2 + 14x - 40 &\\ge 0 \\cr x^2 - 14x + 40 &\\le 0 \\end{aligned}",
                        "Solve $x^2 - 14x + 40 \\le 0$ by finding the critical values. Factorise the quadratic expression:<br>\\begin{aligned} (x - 4)(x - 10) &= 0 \\end{aligned}<br>This gives critical values of $x = 4$ and $x = 10$.",
                        "The quadratic expression is non-positive between its roots, which gives:<br>$4 \\le x \\le 10$",
                        "Now, combine this with the constraint that the number of units produced is strictly greater than $5$ ($x > 5$):<br>The overlapping region between $4 \\le x \\le 10$ and $x > 5$ is:<br>$5 < x \\le 10$"
                ],
                "pi_options": [
                        {
                                "ans": "$4 \\le x \\le 10$",
                                "feedback": "You have correctly solved the profit inequality, but you must also incorporate the requirement that the number of units produced must be strictly greater than $5$ ($x > 5$)."
                        },
                        {
                                "ans": "$5 \\le x \\le 10$",
                                "feedback": "The question specifies that the number of units produced must be <strong>strictly greater than</strong> $5$, which excludes $5$ itself. Therefore, the lower boundary must be a strict inequality ($x > 5$)."
                        },
                        {
                                "ans": "$5 < x < 10$",
                                "feedback": "The profit must be <strong>at least</strong> $16$ hundred pounds, which allows it to be exactly $16$. Therefore, the upper boundary must be a weak inequality ($x \\le 10$)."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Reversing the Inequality Sign",
                        "content": "When rearranging $-x^2 + 14x - 40 \\ge 0$ by multiplying the entire inequality by $-1$, you MUST reverse the inequality sign. Multiplying or dividing an inequality by a negative number flips the direction of the sign: $\\ge$ becomes $\\le$."
                }
        },
        {
                "id": "004591",
                "board": "OCR",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Functions",
                "subtopic": [
                        "Functions and Mappings"
                ],
                "img": false,
                "question": "The functions $f$ and $g$ are defined for all real values of $x$ by $f(x) = x^3$ and $g(x) = x^2 + 3$.<br><br><strong>(i)</strong> Write down expressions for:<br><strong>(a)</strong> $fg(x)$,<br><strong>(b)</strong> $gf(x)$.<br><br><strong>(ii)</strong> Hence find the real values of $x$ for which $fg(x) - gf(x) = 60$.",
                "steps": [
                        "<strong>(i)(a)</strong> To find the composite function $fg(x)$, substitute the entire expression for $g(x)$ into $f(x)$:<br>\\begin{aligned} fg(x) &= f(g(x)) \\cr &= f(x^2 + 3) \\cr &= (x^2 + 3)^3 \\end{aligned}",
                        "<strong>(i)(b)</strong> To find the composite function $gf(x)$, substitute the entire expression for $f(x)$ into $g(x)$:<br>\\begin{aligned} gf(x) &= g(f(x)) \\cr &= g(x^3) \\cr &= (x^3)^2 + 3 \\cr &= x^6 + 3 \\end{aligned}",
                        "<strong>(ii)</strong> Set up the equation $fg(x) - gf(x) = 60$ using your answers from part <strong>(i)</strong>:<br>$(x^2 + 3)^3 - (x^6 + 3) = 60$",
                        "Expand $(x^2 + 3)^3$ using binomial expansion:<br>\\begin{aligned} (x^2 + 3)^3 &= (x^2)^3 + 3(x^2)^2(3) + 3(x^2)(3)^2 + 3^3 \\cr &= x^6 + 9x^4 + 27x^2 + 27 \\end{aligned}",
                        "Substitute this expanded expression back into the equation and simplify:<br>\\begin{aligned} (x^6 + 9x^4 + 27x^2 + 27) - (x^6 + 3) &= 60 \\cr 9x^4 + 27x^2 + 24 &= 60 \\cr 9x^4 + 27x^2 - 36 &= 0 \\end{aligned}",
                        "Divide the entire equation by $9$ to simplify the coefficients:<br>$x^4 + 3x^2 - 4 = 0$",
                        "This equation is quadratic in terms of $x^2$. Let $u = x^2$, where $u \\ge 0$:<br>\\begin{aligned} u^2 + 3u - 4 &= 0 \\cr (u + 4)(u - 1) &= 0 \\end{aligned}<br>This yields $u = -4$ or $u = 1$.",
                        "Since $u = x^2 \\ge 0$, we reject the negative root $u = -4$ because $x^2$ cannot be negative for real values of $x$. This leaves:<br>\\begin{aligned} x^2 &= 1 \\cr x &= \\pm 1 \\end{aligned}<br>Thus, the real values of $x$ are $x = 1$ or $x = -1$."
                ],
                "pi_options": [
                        {
                                "ans": "$x = 1$, $x = -1$, $x = 2$, $x = -2$",
                                "feedback": "Remember that $x^2$ cannot be negative for real values of $x$. When solving $u = x^2 = -4$, there are no real solutions, so you must reject this root."
                        },
                        {
                                "ans": "$x = 1$ only",
                                "feedback": "While you correctly identified $x = 1$, remember that $x^2 = 1$ has two real solutions: $x = 1$ and $x = -1$."
                        },
                        {
                                "ans": "$x = 2$ or $x = -2$",
                                "feedback": "Verify your division by $9$ and your subsequent factorisation. The simplified equation should be $x^4 + 3x^2 - 4 = 0$, leading to $u = 1 \\implies x = \\pm 1$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Spotting Hidden Quadratics",
                        "content": "Equations of the form $ax^4 + bx^2 + c = 0$ are 'equations in quadratic form'. By using the substitution $u = x^2$, you can solve them using standard quadratic methods. Always remember to filter your final $u$ values, as $u = x^2$ means any negative values of $u$ will yield no real solutions for $x$."
                }
        },
        {
                "id": "004592",
                "board": "OCR",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Functions",
                "subtopic": [
                        "Functions and Mappings"
                ],
                "img": false,
                "question": "The functions $f$ and $g$ are defined for all real values of $x$ by $f(x) = x^2 + 1$ and $g(x) = 3x - 2$.<br><br><strong>(i)</strong> Write down expressions for:<br><strong>(a)</strong> $fg(x)$,<br><strong>(b)</strong> $gf(x)$.<br><br><strong>(ii)</strong> Hence find the values of $x$ for which $fg(x) - gf(x) = 52$.",
                "steps": [
                        "<strong>(i)(a)</strong> To find the composite function $fg(x)$, substitute $g(x) = 3x - 2$ into $f(x)$:<br>\\begin{aligned} fg(x) &= f(3x - 2) \\cr &= (3x - 2)^2 + 1 \\cr &= (9x^2 - 12x + 4) + 1 \\cr &= 9x^2 - 12x + 5 \\end{aligned}",
                        "<strong>(i)(b)</strong> To find the composite function $gf(x)$, substitute $f(x) = x^2 + 1$ into $g(x)$:<br>\\begin{aligned} gf(x) &= g(x^2 + 1) \\cr &= 3(x^2 + 1) - 2 \\cr &= 3x^2 + 3 - 2 \\cr &= 3x^2 + 1 \\end{aligned}",
                        "<strong>(ii)</strong> Set up the equation $fg(x) - gf(x) = 52$ using your answers from part <strong>(i)</strong>:<br>$(9x^2 - 12x + 5) - (3x^2 + 1) = 52$",
                        "Simplify the quadratic equation:<br>\\begin{aligned} 6x^2 - 12x + 4 &= 52 \\cr 6x^2 - 12x - 48 &= 0 \\end{aligned}",
                        "Divide the entire equation by $6$ to make factorisation easier:<br>\\begin{aligned} x^2 - 2x - 8 &= 0 \\cr (x - 4)(x + 2) &= 0 \\end{aligned}<br>This yields the solutions: $x = 4$ or $x = -2$."
                ],
                "pi_options": [
                        {
                                "ans": "$x = 4$ only",
                                "feedback": "A quadratic equation $x^2 - 2x - 8 = 0$ factorises into $(x-4)(x+2) = 0$, which yields two solutions. Make sure you don't lose the negative solution: $x = -2$."
                        },
                        {
                                "ans": "$x = -4$ or $x = 2$",
                                "feedback": "Check your factorisation of $x^2 - 2x - 8 = 0$. Since the middle term is $-2x$, the factors must be $(x - 4)(x + 2) = 0$, which yields solutions of $x = 4$ and $x = -2$, not the other way around."
                        },
                        {
                                "ans": "$x = 6$ or $x = -4$",
                                "feedback": "Make sure you divide all terms of the equation $6x^2 - 12x - 48 = 0$ by $6$ correctly. This should simplify to $x^2 - 2x - 8 = 0$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Order of Composition Matters",
                        "content": "Always remember that composite functions are generally non-commutative, meaning $fg(x) \\neq gf(x)$. In this question, $fg(x) = 9x^2 - 12x + 5$ and $gf(x) = 3x^2 + 1$ are completely different functions. Always apply the inner function first, then substitute that entire result into the outer function."
                }
        },
        {
                "id": "004593",
                "board": "OCR",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Functions",
                "subtopic": [
                        "Functions and Mappings"
                ],
                "img": false,
                "question": "The function $f$ is defined for $x \\ge 1$ by $f(x) = \\sqrt{ x - 1 } + 3$.<br><br><strong>(i)</strong> Find an expression for $f^{ -1 }(x)$, stating its domain.<br><strong>(ii)</strong> Solve the equation $f(x) = f^{ -1 }(x)$.",
                "steps": [
                        "<strong>(i)</strong> To find the inverse function, set $y = f(x)$ and rearrange the equation to make $x$ the subject:<br>\\begin{aligned} y &= \\sqrt{ x - 1 } + 3 \\cr y - 3 &= \\sqrt{ x - 1 } \\end{aligned}",
                        "Square both sides of the equation and solve for $x$:<br>\\begin{aligned} (y - 3)^2 &= x - 1 \\cr x &= (y - 3)^2 + 1 \\end{aligned}",
                        "Swap the variables to write the final expression for the inverse function:<br>$f^{ -1 }(x) = (x - 3)^2 + 1$",
                        "The domain of the inverse function $f^{ -1 }(x)$ is equal to the range of the original function $f(x)$. Since the square root term $\\sqrt{ x - 1 } \\ge 0$ for all valid $x$, we find:<br>\\begin{aligned} f(x) &\\ge 3 \\end{aligned}<br>Thus, the domain of the inverse function is $x \\ge 3$.",
                        "<strong>(ii)</strong> To solve the equation $f(x) = f^{ -1 }(x)$, we use the mathematical property that any strictly increasing function $f(x)$ intersects its inverse $f^{ -1 }(x)$ only on the line $y = x$. This allows us to simply solve $f(x) = x$:<br>\\begin{aligned} \\sqrt{ x - 1 } + 3 &= x \\cr \\sqrt{ x - 1 } &= x - 3 \\end{aligned}",
                        "Square both sides of the equation (noting that we must have $x - 3 \\ge 0 \\implies x \\ge 3$ for the right-hand side to be non-negative) and solve the resulting quadratic:<br>\\begin{aligned} x - 1 &= (x - 3)^2 \\cr x - 1 &= x^2 - 6x + 9 \\cr x^2 - 7x + 10 &= 0 \\cr (x - 2)(x - 5) &= 0 \\end{aligned}<br>This gives critical values of $x = 2$ and $x = 5$.",
                        "Since the domain of $f^{ -1 }(x)$ is restricted to $x \\ge 3$ (and because substituting $x = 2$ back into $\\sqrt{ x - 1 } = x - 3$ would yield $\\sqrt{ 1 } = -1$, which is invalid), we reject $x = 2$.<br><br>Thus, the only valid real solution is:<br>$x = 5$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(i)</strong> $f^{ -1 }(x) = (x - 3)^2 + 1$ with domain $x \\ge 1$<br><strong>(ii)</strong> $x = 5$",
                                "feedback": "The domain of the inverse function $f^{ -1 }(x)$ is equal to the range of the original function $f(x)$, not its domain. Since $f(x) = \\sqrt{ x - 1 } + 3 \\ge 3$, the domain of $f^{ -1 }(x)$ must be $x \\ge 3$."
                        },
                        {
                                "ans": "<strong>(i)</strong> $f^{ -1 }(x) = (x - 3)^2 + 1$ with domain $x \\ge 3$<br><strong>(ii)</strong> $x = 2$ or $x = 5$",
                                "feedback": "You must check your solutions against the domain restriction. Since the domain of $f^{ -1 }(x)$ is $x \\ge 3$, the value $x = 2$ lies outside the domain and must be rejected as an extraneous solution."
                        },
                        {
                                "ans": "<strong>(i)</strong> $f^{ -1 }(x) = (x + 3)^2 - 1$ with domain $x \\ge 3$<br><strong>(ii)</strong> $x = 5$",
                                "feedback": "Check your algebra when finding the inverse function. Rearranging $y = \\sqrt{ x - 1 } + 3$ starts by subtracting $3$ from both sides, yielding $y - 3 = \\sqrt{ x - 1 }$, not adding $3$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: The y = x Intersection Trick",
                        "content": "For any strictly increasing function $f(x)$, the curves $y = f(x)$ and $y = f^{ -1 }(x)$ only intersect along the line of symmetry $y = x$. This is an incredibly powerful shortcut: instead of equating $f(x) = f^{ -1 }(x)$ (which often leads to a complex quartic equation), simply solve $f(x) = x$."
                }
        },
        {
                "id": "004594",
                "board": "OCR",
                "level": "A",
                "major_area": "Exponentials and Logarithms",
                "topic": "Functions",
                "subtopic": [
                        "Exponential and Logarithmic Functions and Graphs",
                        "Functions and Mappings"
                ],
                "img": false,
                "question": "The function $f$ is defined for $x > 2$ by $f(x) = \\ln( x - 2 )$, and the function $g$ is defined for all real values of $x$ by $g(x) = \\mathrm{e}^{ 3x } + 2$.<br><br><strong>(i)</strong> Write down expressions for:<br><strong>(a)</strong> $fg(x)$,<br><strong>(b)</strong> $gf(x)$,<br>simplifying your answers as far as possible.<br><br><strong>(ii)</strong> Solve the equation $gf(x) - fg(x) = 10 - 3x$.",
                "steps": [
                        "<strong>(i)(a)</strong> To find $fg(x)$, substitute $g(x) = \\mathrm{e}^{ 3x } + 2$ into $f(x)$:<br>\\begin{aligned} fg(x) &= f(\\mathrm{e}^{ 3x } + 2) \\cr &= \\ln((\\mathrm{e}^{ 3x } + 2) - 2) \\cr &= \\ln(\\mathrm{e}^{ 3x }) \\cr &= 3x \\end{aligned}",
                        "<strong>(i)(b)</strong> To find $gf(x)$, substitute $f(x) = \\ln( x - 2 )$ into $g(x)$:<br>\\begin{aligned} gf(x) &= g(\\ln( x - 2 )) \\cr &= \\mathrm{e}^{ 3\\ln( x - 2 ) } + 2 \\cr &= \\mathrm{e}^{ \\ln(( x - 2 )^3) } + 2 \\cr &= ( x - 2 )^3 + 2 \\end{aligned}",
                        "<strong>(ii)</strong> Set up the equation $gf(x) - fg(x) = 10 - 3x$ using the simplified expressions from part <strong>(i)</strong>:<br>$(( x - 2 )^3 + 2) - 3x = 10 - 3x$",
                        "Simplify the equation by adding $3x$ to both sides and isolating the cubed term:<br>\\begin{aligned} ( x - 2 )^3 + 2 &= 10 \\cr ( x - 2 )^3 &= 8 \\end{aligned}",
                        "Take the cube root of both sides of the equation and solve for $x$:<br>\\begin{aligned} x - 2 &= 2 \\cr x &= 4 \\end{aligned}<br>Since $x = 4$ satisfies the domain restriction $x > 2$, it is the valid real solution."
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(i)</strong> $fg(x) = 3x$, $gf(x) = 3x - 4$<br><strong>(ii)</strong> $x = 2.5$",
                                "feedback": "Remember the log power law: $3\\ln( x - 2 ) = \\ln(( x - 2 )^3)$. Thus, $\\mathrm{e}^{ 3\\ln( x - 2 ) } = ( x - 2 )^3$, not $3( x - 2 )$."
                        },
                        {
                                "ans": "<strong>(i)</strong> $fg(x) = 3x$, $gf(x) = ( x - 2 )^3 + 2$<br><strong>(ii)</strong> $x = 2$",
                                "feedback": "The domain of $f(x)$ is $x > 2$, which means $x = 2$ is outside the domain and would make $\\ln( x - 2 )$ undefined. Your algebraic solution of $( x - 2 )^3 = 8$ leads to $x - 2 = 2 \\implies x = 4$."
                        },
                        {
                                "ans": "<strong>(i)</strong> $fg(x) = 3x$, $gf(x) = ( x - 2 )^3 + 2$<br><strong>(ii)</strong> $x = 2 + \\sqrt{ 8 }$",
                                "feedback": "To solve $( x - 2 )^3 = 8$, you need to take the cube root of both sides of the equation, which gives $x - 2 = 2$, not a square root."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Simplifying Log exponentials",
                        "content": "A crucial algebraic identity to master is $\\mathrm{e}^{\\ln( A )} = A$. When simplifying expressions like $\\mathrm{e}^{k\\ln( A )}$, you must first use the power law of logarithms to write it as $\\mathrm{e}^{\\ln( A^k )}$, which simplifies directly to $A^k$. Never write $\\mathrm{e}^{k\\ln( A )} = k A$."
                }
        },
        {
                "id": "004595",
                "board": "OCR",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Functions",
                "subtopic": [
                        "Functions and Mappings"
                ],
                "img": false,
                "question": "The functions $f$ and $g$ are defined for all real values of $x$ by $f(x) = 2x - 3$ and $g(x) = x^2 - 4x$.<br><br><strong>(i)</strong> Find the range of $g(x)$.<br><strong>(ii)</strong> Show that the composite function $gf(x)$ can be written in the form $gf(x) = 4( x - a )( x - b )$, where $a$ and $b$ are constants to be found.<br><strong>(iii)</strong> Find the range of the composite function $fg(x)$.",
                "steps": [
                        "<strong>(i)</strong> To find the range of the quadratic function $g(x) = x^2 - 4x$, complete the square:<br>\\begin{aligned} g(x) &= ( x - 2 )^2 - 2^2 \\cr &= ( x - 2 )^2 - 4 \\end{aligned}",
                        "Since the squared term $( x - 2 )^2 \\ge 0$ for all real $x$, the minimum value of $g(x)$ is $-4$. Thus, the range of $g(x)$ is:<br>$g(x) \\ge -4$",
                        "<strong>(ii)</strong> To find the composite function $gf(x)$, substitute $f(x) = 2x - 3$ into $g(x)$:<br>\\begin{aligned} gf(x) &= g(2x - 3) \\cr &= (2x - 3)^2 - 4(2x - 3) \\end{aligned}",
                        "Expand the brackets and simplify the quadratic expression:<br>\\begin{aligned} gf(x) &= (4x^2 - 12x + 9) - (8x - 12) \\cr &= 4x^2 - 20x + 21 \\end{aligned}",
                        "Factorise the quadratic expression:<br>\\begin{aligned} 4x^2 - 20x + 21 &= (2x - 3)(2x - 7) \\end{aligned}",
                        "Express this in the required form $4( x - a )( x - b )$ by factorising out $2$ from both brackets:<br>\\begin{aligned} (2x - 3)(2x - 7) &= 2\\left( x - 1.5 \\right) \\times 2\\left( x - 3.5 \\right) \\cr &= 4\\left( x - 1.5 \\right)\\left( x - 3.5 \\right) \\end{aligned}<br>Thus, the constants are $a = 1.5$ (or $\\dfrac{ 3 }{ 2 }$) and $b = 3.5$ (or $\\dfrac{ 7 }{ 2 }$).",
                        "<strong>(iii)</strong> To find the range of the composite function $fg(x)$, write out its expression:<br>\\begin{aligned} fg(x) &= f(g(x)) \\cr &= 2(g(x)) - 3 \\end{aligned}",
                        "Since the range of the input function is $g(x) \\ge -4$, substitute this minimum value to find the minimum value of $fg(x)$:<br>\\begin{aligned} fg(x) &\\ge 2(-4) - 3 \\cr fg(x) &\\ge -11 \\end{aligned}<br>So the range of the composite function is $fg(x) \\ge -11$."
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(i)</strong> $g(x) \\ge -4$<br><strong>(ii)</strong> $a = 3$, $b = 1.75$<br><strong>(iii)</strong> $fg(x) \\ge -11$",
                                "feedback": "Check your factorisation of $4x^2 - 20x + 21$. Expanding $4(x - 3)(x - 1.75)$ gives $4x^2 - 19x + 21$, which is incorrect. Factorising $(2x-3)(2x-7)$ gives $4(x - 1.5)(x - 3.5)$, so $a = 1.5$ and $b = 3.5$."
                        },
                        {
                                "ans": "<strong>(i)</strong> $g(x) \\ge -4$<br><strong>(ii)</strong> $a = 1.5$, $b = 3.5$<br><strong>(iii)</strong> $fg(x) \\ge -3$",
                                "feedback": "When finding the range of $fg(x) = 2(g(x)) - 3$, you must use the range of $g(x)$, which is $g(x) \\ge -4$. Substituting the minimum value of $-4$ gives $2(-4) - 3 = -11$, not $-3$."
                        },
                        {
                                "ans": "<strong>(i)</strong> $g(x) \\ge 0$<br><strong>(ii)</strong> $a = 1.5$, $b = 3.5$<br><strong>(iii)</strong> $fg(x) \\ge -11$",
                                "feedback": "Check the range of $g(x) = x^2 - 4x$. Completing the square gives $(x-2)^2 - 4$. Since $(x-2)^2 \\ge 0$, the minimum value is $-4$, so the range of $g(x)$ is $g(x) \\ge -4$, not $g(x) \\ge 0$."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Finding the Range of Composites",
                        "content": "To find the range of a composite function $fg(x) = f(g(x))$, you must trace the output of the inner function $g(x)$ and use it as the domain for the outer function $f(x)$. Since the inner range is $g(x) \\ge -4$ and the outer function $f(x) = 2x - 3$ is strictly increasing, applying $f$ to the minimum boundary yields $2(-4) - 3 = -11$, which determines the final range boundary."
                }
        },
        {
                "id": "004596",
                "board": "OCR",
                "level": "A",
                "major_area": "Integration",
                "topic": "Integration",
                "subtopic": [
                        "Integration",
                        "Numerical Methods"
                ],
                "img": false,
                "question": "Consider the definite integral $I = \\int_{ 0 }^{ 4 } \\dfrac{ 1 }{ 1 + \\sqrt{ x } } \\mathrm{d}x$.<br><br><strong>(i)</strong> Use the trapezium rule, with two strips of equal width, to show that:<br><br>$I \\approx 2\\sqrt{ 2 } - \\dfrac{ 2 }{ 3 }$<br><br><strong>(ii)</strong> Use the substitution $x = u^2$ to find the exact value of $I$.<br><br><strong>(iii)</strong> Using your answers to parts <strong>(i)</strong> and <strong>(ii)</strong>, show that $\\ln(3) \\approx k - \\sqrt{ 2 }$, where $k$ is a rational number to be determined.",
                "steps": [
                        "<strong>(i)</strong> The interval is $[0, 4]$. With $2$ strips of equal width, the width of each strip $h$ is:<br>\\begin{aligned} h &= \\dfrac{ 4 - 0 }{ 2 } \\cr h &= 2 \\end{aligned}",
                        "The $x$-coordinates are $x_0 = 0$, $x_1 = 2$, and $x_2 = 4$. Evaluate the function $f(x) = \\dfrac{ 1 }{ 1 + \\sqrt{ x } }$ at each coordinate:<br><br><strong>•</strong> $f(0) = \\dfrac{ 1 }{ 1 + \\sqrt{ 0 } } = 1$<br><strong>•</strong> $f(2) = \\dfrac{ 1 }{ 1 + \\sqrt{ 2 } }$<br><strong>•</strong> $f(4) = \\dfrac{ 1 }{ 1 + \\sqrt{ 4 } } = \\dfrac{ 1 }{ 3 }$",
                        "Apply the trapezium rule formula:<br>\\begin{aligned} I &\\approx \\dfrac{ h }{ 2 } [ f(0) + f(4) + 2f(2) ] \\cr &\\approx \\dfrac{ 2 }{ 2 } \\left[ 1 + \\dfrac{ 1 }{ 3 } + 2\\left( \\dfrac{ 1 }{ 1 + \\sqrt{ 2 } } \\right) \\right] \\cr &\\approx \\dfrac{ 4 }{ 3 } + \\dfrac{ 2 }{ 1 + \\sqrt{ 2 } } \\end{aligned}",
                        "Rationalise the denominator of the fractional term:<br>\\begin{aligned} \\dfrac{ 2 }{ 1 + \\sqrt{ 2 } } &= \\dfrac{ 2(1 - \\sqrt{ 2 }) }{ (1 + \\sqrt{ 2 })(1 - \\sqrt{ 2 }) } \\cr &= \\dfrac{ 2 - 2\\sqrt{ 2 } }{ 1 - 2 } \\cr &= \\dfrac{ 2 - 2\\sqrt{ 2 } }{ -1 } \\cr &= 2\\sqrt{ 2 } - 2 \\end{aligned}",
                        "Substitute this back into the approximation to complete the proof for part <strong>(i)</strong>:<br>\\begin{aligned} I &\\approx \\dfrac{ 4 }{ 3 } + 2\\sqrt{ 2 } - 2 \\cr &\\approx 2\\sqrt{ 2 } - \\dfrac{ 2 }{ 3 } \\end{aligned}",
                        "<strong>(ii)</strong> Use the substitution $x = u^2$, which gives $\\mathrm{d}x = 2u \\mathrm{d}u$ and $\\sqrt{ x } = u$.<br><br>Find the new integration limits:<br><strong>•</strong> When $x = 0$, $u = 0$<br><strong>•</strong> When $x = 4$, $u = 2$",
                        "Substitute these into the integral:<br>\\begin{aligned} I &= \\int_{ 0 }^{ 2 } \\dfrac{ 1 }{ 1 + u } (2u) \\mathrm{d}u \\cr &= \\int_{ 0 }^{ 2 } \\dfrac{ 2u }{ 1 + u } \\mathrm{d}u \\end{aligned}",
                        "Rewrite the integrand by performing algebraic long division (or writing $2u = 2u + 2 - 2$):<br>\\begin{aligned} I &= \\int_{ 0 }^{ 2 } \\left( 2 - \\dfrac{ 2 }{ 1 + u } \\right) \\mathrm{d}u \\cr &= [ 2u - 2\\ln(1 + u) ]_{ 0 }^{ 2 } \\cr &= (4 - 2\\ln(3)) - (0 - 2\\ln(1)) \\cr &= 4 - 2\\ln(3) \\end{aligned}",
                        "<strong>(iii)</strong> Equate the exact value of $I$ and the trapezium rule approximation:<br>\\begin{aligned} 4 - 2\\ln(3) &\\approx 2\\sqrt{ 2 } - \\dfrac{ 2 }{ 3 } \\cr -2\\ln(3) &\\approx 2\\sqrt{ 2 } - \\dfrac{ 14 }{ 3 } \\cr 2\\ln(3) &\\approx \\dfrac{ 14 }{ 3 } - 2\\sqrt{ 2 } \\cr \\ln(3) &\\approx \\dfrac{ 7 }{ 3 } - \\sqrt{ 2 } \\end{aligned}<br>Thus, the rational number is $k = \\dfrac{ 7 }{ 3 }$."
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(i)</strong> $I \\approx 2\\sqrt{ 2 } - \\dfrac{ 2 }{ 3 }$<br><strong>(ii)</strong> $I = 4 - 2\\ln(3)$<br><strong>(iii)</strong> $k = \\dfrac{ 5 }{ 3 }$",
                                "feedback": "Check your algebra when transposing the equation to isolate $\\ln(3)$. Adding $\\dfrac{ 2 }{ 3 }$ to $4$ should yield $\\dfrac{ 14 }{ 3 }$, and dividing this by $2$ gives $k = \\dfrac{ 7 }{ 3 }$, not $\\dfrac{ 5 }{ 3 }$."
                        },
                        {
                                "ans": "<strong>(i)</strong> $I \\approx 2\\sqrt{ 2 } - \\dfrac{ 2 }{ 3 }$<br><strong>(ii)</strong> $I = 2 - 2\\ln(3)$<br><strong>(iii)</strong> $k = \\dfrac{ 4 }{ 3 }$",
                                "feedback": "Check your integration steps in part <strong>(ii)</strong>. Evaluating $[2u]_0^2$ yields $2(2) - 0 = 4$, not $2$."
                        },
                        {
                                "ans": "<strong>(i)</strong> $I \\approx 2\\sqrt{ 2 } + \\dfrac{ 4 }{ 3 }$<br><strong>(ii)</strong> $I = 4 - 2\\ln(3)$<br><strong>(iii)</strong> $k = \\dfrac{ 7 }{ 3 }$",
                                "feedback": "Check your rationalisation in part <strong>(i)</strong>. The term $\\dfrac{ 2 }{ 1 + \\sqrt{ 2 } }$ rationalises to $2\\sqrt{ 2 } - 2$. Adding this to $\\dfrac{ 4 }{ 3 }$ yields $2\\sqrt{ 2 } - \\dfrac{ 2 }{ 3 }$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Splitting Integrands",
                        "content": "When integrating an algebraic fraction where the numerator and denominator have the same degree (like $\\dfrac{ 2u }{ u + 1 }$), always use algebraic long division or a clever manipulation like $2u = 2(u + 1) - 2$ first. This allows you to split the fraction into $2 - \\dfrac{ 2 }{ u + 1 }$, which is instantly integrable."
                }
        },
        {
                "id": "004597",
                "board": "OCR",
                "level": "A",
                "major_area": "Integration",
                "topic": "Integration",
                "subtopic": [
                        "Numerical Methods",
                        "Trigonometry"
                ],
                "img": false,
                "question": "Consider the definite integral $I = \\int_{ 0 }^{ 1 } \\dfrac{ 1 }{ 1 + x^2 } \\mathrm{d}x$.<br><br><strong>(i)</strong> Use the trapezium rule, with two strips of equal width, to show that:<br><br>$I \\approx \\dfrac{ 31 }{ 40 }$<br><br><strong>(ii)</strong> Find the exact value of $I$ in terms of $\\pi$.<br><br><strong>(iii)</strong> Using your answers to parts <strong>(i)</strong> and <strong>(ii)</strong>, show that $\\pi \\approx k$, where $k$ is a rational number to be determined.",
                "steps": [
                        "<strong>(i)</strong> The interval is $[0, 1]$. With $2$ strips of equal width, the width of each strip $h$ is:<br>\\begin{aligned} h &= \\dfrac{ 1 - 0 }{ 2 } \\cr h &= 0.5 \\end{aligned}",
                        "The $x$-coordinates are $x_0 = 0$, $x_1 = 0.5$, and $x_2 = 1$. Evaluate the function $f(x) = \\dfrac{ 1 }{ 1 + x^2 }$ at each coordinate:<br><br><strong>•</strong> $f(0) = \\dfrac{ 1 }{ 1 + 0^2 } = 1$<br><strong>•</strong> $f(0.5) = \\dfrac{ 1 }{ 1 + 0.25 } = \\dfrac{ 1 }{ 1.25 } = \\dfrac{ 4 }{ 5 }$<br><strong>•</strong> $f(1) = \\dfrac{ 1 }{ 1 + 1^2 } = \\dfrac{ 1 }{ 2 }$",
                        "Apply the trapezium rule formula:<br>\\begin{aligned} I &\\approx \\dfrac{ h }{ 2 } [ f(0) + f(1) + 2f(0.5) ] \\cr &\\approx \\dfrac{ 0.5 }{ 2 } \\left[ 1 + \\dfrac{ 1 }{ 2 } + 2\\left( \\dfrac{ 4 }{ 5 } \\right) \\right] \\cr &\\approx \\dfrac{ 1 }{ 4 } \\left[ \\dfrac{ 3 }{ 2 } + \\dfrac{ 8 }{ 5 } \\right] \\cr &\\approx \\dfrac{ 1 }{ 4 } \\left[ \\dfrac{ 15 + 16 }{ 10 } \\right] \\cr &\\approx \\dfrac{ 31 }{ 40 } \\end{aligned}",
                        "<strong>(ii)</strong> Integrate $\\dfrac{ 1 }{ 1 + x^2 }$ analytically. The standard integral of this expression is the inverse tangent function:<br>\\begin{aligned} I &= \\int_{ 0 }^{ 1 } \\dfrac{ 1 }{ 1 + x^2 } \\mathrm{d}x \\cr &= [ \\arctan(x) ]_{ 0 }^{ 1 } \\cr &= \\arctan(1) - \\arctan(0) \\cr &= \\dfrac{ \\pi }{ 4 } \\end{aligned}",
                        "<strong>(iii)</strong> Equate the analytical value of $I$ and the numerical approximation:<br>\\begin{aligned} \\dfrac{ \\pi }{ 4 } &\\approx \\dfrac{ 31 }{ 40 } \\cr \\pi &\\approx \\dfrac{ 124 }{ 40 } \\cr \\pi &\\approx \\dfrac{ 31 }{ 10 } \\end{aligned}<br>Thus, the rational number is $k = \\dfrac{ 31 }{ 10 }$ (or $3.1$)."
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(i)</strong> $I \\approx \\dfrac{ 31 }{ 40 }$<br><strong>(ii)</strong> $I = \\dfrac{ \\pi }{ 2 }$<br><strong>(iii)</strong> $k = \\dfrac{ 31 }{ 20 }$",
                                "feedback": "Check your analytical integration. The integral of $\\dfrac{ 1 }{ 1 + x^2 }$ is $\\arctan(x)$. Since $\\arctan(1) = \\dfrac{ \\pi }{ 4 }$, the exact value is $\\dfrac{ \\pi }{ 4 }$, not $\\dfrac{ \\pi }{ 2 }$."
                        },
                        {
                                "ans": "<strong>(i)</strong> $I \\approx \\dfrac{ 3 }{ 4 }$<br><strong>(ii)</strong> $I = \\dfrac{ \\pi }{ 4 }$<br><strong>(iii)</strong> $k = 3$",
                                "feedback": "Verify your trapezium rule calculations. The value of the function at the midpoint $x = 0.5$ is $\\dfrac{ 4 }{ 5 } = 0.8$. Ensure you substitute this correct value into the formula."
                        },
                        {
                                "ans": "<strong>(i)</strong> $I \\approx \\dfrac{ 31 }{ 40 }$<br><strong>(ii)</strong> $I = \\dfrac{ \\pi }{ 4 }$<br><strong>(iii)</strong> $k = \\dfrac{ 31 }{ 40 }$",
                                "feedback": "When solving for $\\pi$ in part <strong>(iii)</strong>, remember to multiply both sides of the approximation $\\dfrac{ \\pi }{ 4 } \\approx \\dfrac{ 31 }{ 40 }$ by $4$ to isolate $\\pi$."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Historical Approximations of Pi",
                        "content": "This question demonstrates the classical method of using calculus to approximate historical constants. By applying a very simple 2-strip trapezium approximation to $\\int_{ 0 }^{ 1 } \\dfrac{ 1 }{ 1 + x^2 } \\mathrm{d}x$, we successfully approximate the value of $\\pi$ as $3.1$, which is incredibly close for such a low number of strips!"
                }
        },
        {
                "id": "004598",
                "board": "OCR",
                "level": "A",
                "major_area": "Integration",
                "topic": "Integration",
                "subtopic": [
                        "Exponential and Logarithmic Functions and Graphs",
                        "Numerical Methods"
                ],
                "img": false,
                "question": "Consider the definite integral $I = \\int_{ 1 }^{ 3 } \\dfrac{ 1 }{ x } \\mathrm{d}x$.<br><br><strong>(i)</strong> Use the trapezium rule, with two strips of equal width, to show that:<br><br>$I \\approx \\dfrac{ 7 }{ 6 }$<br><br><strong>(ii)</strong> Find the exact value of $I$ in terms of natural logarithms.<br><br><strong>(iii)</strong> Using your answers to parts <strong>(i)</strong> and <strong>(ii)</strong>, state an approximate rational value for $\\ln(3)$.",
                "steps": [
                        "<strong>(i)</strong> The interval is $[1, 3]$. With $2$ strips of equal width, the width of each strip $h$ is:<br>\\begin{aligned} h &= \\dfrac{ 3 - 1 }{ 2 } \\cr h &= 1 \\end{aligned}",
                        "The $x$-coordinates are $x_0 = 1$, $x_1 = 2$, and $x_2 = 3$. Evaluate the function $f(x) = \\dfrac{ 1 }{ x }$ at each coordinate:<br><br><strong>•</strong> $f(1) = \\dfrac{ 1 }{ 1 } = 1$<br><strong>•</strong> $f(2) = \\dfrac{ 1 }{ 2 }$<br><strong>•</strong> $f(3) = \\dfrac{ 1 }{ 3 }$",
                        "Apply the trapezium rule formula:<br>\\begin{aligned} I &\\approx \\dfrac{ h }{ 2 } [ f(1) + f(3) + 2f(2) ] \\cr &\\approx \\dfrac{ 1 }{ 2 } \\left[ 1 + \\dfrac{ 1 }{ 3 } + 2\\left( \\dfrac{ 1 }{ 2 } \\right) \\right] \\cr &\\approx \\dfrac{ 1 }{ 2 } \\left[ 2 + \\dfrac{ 1 }{ 3 } \\right] \\cr &\\approx \\dfrac{ 1 }{ 2 } \\left[ \\dfrac{ 7 }{ 3 } \\right] \\cr &\\approx \\dfrac{ 7 }{ 6 } \\end{aligned}",
                        "<strong>(ii)</strong> Integrate $\\dfrac{ 1 }{ x }$ analytically. The standard integral of $\\dfrac{ 1 }{ x }$ is the natural logarithm function:<br>\\begin{aligned} I &= \\int_{ 1 }^{ 3 } \\dfrac{ 1 }{ x } \\mathrm{d}x \\cr &= [ \\ln(x) ]_{ 1 }^{ 3 } \\cr &= \\ln(3) - \\ln(1) \\cr &= \\ln(3) \\end{aligned}",
                        "<strong>(iii)</strong> Directly equate the analytical value and the numerical approximation to find the rational approximation:<br>\\begin{aligned} \\ln(3) &\\approx \\dfrac{ 7 }{ 6 } \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(i)</strong> $I \\approx \\dfrac{ 7 }{ 6 }$<br><strong>(ii)</strong> $I = \\ln(2)$<br><strong>(iii)</strong> $\\ln(3) \\approx \\dfrac{ 7 }{ 6 }$",
                                "feedback": "Check your limits when integrating in part <strong>(ii)</strong>. Evaluating $[\\ln(x)]_1^3$ gives $\\ln(3) - \\ln(1) = \\ln(3)$, not $\\ln(2)$."
                        },
                        {
                                "ans": "<strong>(i)</strong> $I \\approx 1.5$<br><strong>(ii)</strong> $I = \\ln(3)$<br><strong>(iii)</strong> $\\ln(3) \\approx 1.5$",
                                "feedback": "Verify your trapezium rule sum. Ensure you only double the middle ordinate $f(2) = 0.5$ and do not double the endpoint ordinates."
                        },
                        {
                                "ans": "<strong>(i)</strong> $I \\approx \\dfrac{ 5 }{ 6 }$<br><strong>(ii)</strong> $I = \\ln(3)$<br><strong>(iii)</strong> $\\ln(3) \\approx \\dfrac{ 5 }{ 6 }$",
                                "feedback": "Check your arithmetic in part <strong>(i)</strong>. The bracket sum is $1 + \\dfrac{ 1 }{ 3 } + 1 = \\dfrac{ 7 }{ 3 }$. Multiplying by $\\dfrac{ 1 }{ 2 }$ yields $\\dfrac{ 7 }{ 6 }$, not $\\dfrac{ 5 }{ 6 }$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Overestimates vs. Underestimates",
                        "content": "Since the graph of $y = \\dfrac{ 1 }{ x }$ is concave up (the curve bends upwards) over the interval $[1, 3]$, the straight chord segments of the trapeziums lie entirely above the curve. Therefore, the trapezium rule will always produce an overestimate. This explains why $\\dfrac{ 7 }{ 6 } \\approx 1.167$ is slightly larger than the actual value of $\\ln(3) \\approx 1.099$."
                }
        },
        {
                "id": "004599",
                "board": "OCR",
                "level": "A",
                "major_area": "Integration",
                "topic": "Integration",
                "subtopic": [
                        "Integration",
                        "Numerical Methods"
                ],
                "img": false,
                "question": "Consider the definite integral $I = \\int_{ 0 }^{ 2 } x \\mathrm{e}^{ -x } \\mathrm{d}x$.<br><br><strong>(i)</strong> Use the trapezium rule, with two strips of equal width, to find an approximation for $I$ in terms of the constant $\\mathrm{e}$.<br><br><strong>(ii)</strong> Use integration by parts to find the exact value of $I$ in terms of the constant $\\mathrm{e}$.<br><br><strong>(iii)</strong> Using your answers to parts <strong>(i)</strong> and <strong>(ii)</strong>, show that $\\mathrm{e}^2 - \\mathrm{e} \\approx k$, where $k$ is an integer to be found.",
                "steps": [
                        "<strong>(i)</strong> The interval is $[0, 2]$. With $2$ strips of equal width, the width of each strip $h$ is:<br>\\begin{aligned} h &= \\dfrac{ 2 - 0 }{ 2 } \\cr h &= 1 \\end{aligned}",
                        "The $x$-coordinates are $x_0 = 0$, $x_1 = 1$, and $x_2 = 2$. Evaluate the function $f(x) = x \\mathrm{e}^{ -x }$ at each coordinate:<br><br><strong>•</strong> $f(0) = 0 \\times \\mathrm{e}^{ 0 } = 0$<br><strong>•</strong> $f(1) = 1 \\times \\mathrm{e}^{ -1 } = \\mathrm{e}^{ -1 }$<br><strong>•</strong> $f(2) = 2 \\times \\mathrm{e}^{ -2 } = 2\\mathrm{e}^{ -2 }$",
                        "Apply the trapezium rule formula:<br>\\begin{aligned} I &\\approx \\dfrac{ h }{ 2 } [ f(0) + f(2) + 2f(1) ] \\cr &\\approx \\dfrac{ 1 }{ 2 } [ 0 + 2\\mathrm{e}^{ -2 } + 2\\mathrm{e}^{ -1 } ] \\cr &\\approx \\mathrm{e}^{ -1 } + \\mathrm{e}^{ -2 } \\end{aligned}",
                        "<strong>(ii)</strong> To find the exact value, integrate $x \\mathrm{e}^{ -x }$ analytically using integration by parts, $\\int u \\mathrm{d}v = u v - \\int v \\mathrm{d}u$.<br>Let $u = x \\implies \\mathrm{d}u = \\mathrm{d}x$, and let $\\mathrm{d}v = \\mathrm{e}^{ -x } \\mathrm{d}x \\implies v = -\\mathrm{e}^{ -x }$:",
                        "Substitute these into the integration by parts formula:<br>\\begin{aligned} I &= [ -x\\mathrm{e}^{ -x } ]_{ 0 }^{ 2 } - \\int_{ 0 }^{ 2 } -\\mathrm{e}^{ -x } \\mathrm{d}x \\cr &= -2\\mathrm{e}^{ -2 } + \\int_{ 0 }^{ 2 } \\mathrm{e}^{ -x } \\mathrm{d}x \\cr &= -2\\mathrm{e}^{ -2 } + [ -\\mathrm{e}^{ -x } ]_{ 0 }^{ 2 } \\cr &= -2\\mathrm{e}^{ -2 } + (-\\mathrm{e}^{ -2 } - (-\\mathrm{e}^{ 0 })) \\cr &= -3\\mathrm{e}^{ -2 } + 1 \\cr &= 1 - 3\\mathrm{e}^{ -2 } \\end{aligned}",
                        "<strong>(iii)</strong> Equate the numerical approximation and the analytical exact value:<br>\\begin{aligned} \\mathrm{e}^{ -1 } + \\mathrm{e}^{ -2 } &\\approx 1 - 3\\mathrm{e}^{ -2 } \\cr \\mathrm{e}^{ -1 } &\\approx 1 - 4\\mathrm{e}^{ -2 } \\end{aligned}",
                        "Multiply the entire equation by $\\mathrm{e}^2$ to eliminate the negative powers:<br>\\begin{aligned} \\mathrm{e} &\\approx \\mathrm{e}^2 - 4 \\cr \\mathrm{e}^2 - \\mathrm{e} &\\approx 4 \\end{aligned}<br>Thus, the integer is $k = 4$."
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(i)</strong> $I \\approx \\mathrm{e}^{ -1 } + \\mathrm{e}^{ -2 }$<br><strong>(ii)</strong> $I = 1 - 3\\mathrm{e}^{ -2 }$<br><strong>(iii)</strong> $k = 3$",
                                "feedback": "Check your algebra in part <strong>(iii)</strong>. Transposing $\\mathrm{e}^{ -1 } + \\mathrm{e}^{ -2 } \\approx 1 - 3\\mathrm{e}^{ -2 }$ gives $\\mathrm{e}^{ -1 } \\approx 1 - 4\\mathrm{e}^{ -2 }$. Multiplying by $\\mathrm{e}^2$ yields $\\mathrm{e} \\approx \\mathrm{e}^2 - 4$, which leads to $k = 4$, not $3$."
                        },
                        {
                                "ans": "<strong>(i)</strong> $I \\approx 2\\mathrm{e}^{ -1 } + \\mathrm{e}^{ -2 }$<br><strong>(ii)</strong> $I = 1 - 3\\mathrm{e}^{ -2 }$<br><strong>(iii)</strong> $k = 4$",
                                "feedback": "Check your trapezium ordinate values. The formula is $\\dfrac{ h }{ 2 } [ y_0 + y_n + 2y_1 ]$. Since $y_1 = \\mathrm{e}^{ -1 }$, we double this to get $2\\mathrm{e}^{ -1 }$. Multiplying the whole bracket by $\\dfrac{ 1 }{ 2 }$ yields $\\mathrm{e}^{ -1 } + \\mathrm{e}^{ -2 }$."
                        },
                        {
                                "ans": "<strong>(i)</strong> $I \\approx \\mathrm{e}^{ -1 } + \\mathrm{e}^{ -2 }$<br><strong>(ii)</strong> $I = 1 - \\mathrm{e}^{ -2 }$<br><strong>(iii)</strong> $k = 2$",
                                "feedback": "Verify your integration by parts. The term $v \\mathrm{d}u = -\\mathrm{e}^{ -x } \\mathrm{d}x$. Integrating this over the limits yields another negative term, resulting in the correct analytical expression $1 - 3\\mathrm{e}^{ -2 }$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Choosing u in Parts",
                        "content": "When using integration by parts for $\\int x \\mathrm{e}^{ -x } \\mathrm{d}x$, always use the LATE rule to choose $u$. Since $x$ is algebraic (A) and $\\mathrm{e}^{ -x }$ is exponential (E), we choose $u = x$. This ensures that differentiating $u$ reduces its degree to $1$, making the remaining integral straightforward to compute."
                }
        },
        {
                "id": "004600",
                "board": "OCR",
                "level": "A",
                "major_area": "Integration",
                "topic": "Integration",
                "subtopic": [
                        "Numerical Methods",
                        "Trigonometry"
                ],
                "img": false,
                "question": "Consider the definite integral $I = \\int_{ 0 }^{ \\pi } \\sin^2(x) \\mathrm{d}x$.<br><br><strong>(i)</strong> Use the trapezium rule, with two strips of equal width, to show that:<br><br>$I \\approx \\dfrac{ \\pi }{ 2 }$<br><br><strong>(ii)</strong> Use a suitable double-angle trigonometric identity to find the exact value of $I$.<br><br><strong>(iii)</strong> Explain why the trapezium rule approximation is unusually accurate in this specific case.",
                "steps": [
                        "<strong>(i)</strong> The interval is $[0, \\pi ]$. With $2$ strips of equal width, the width of each strip $h$ is:<br>\\begin{aligned} h &= \\dfrac{ \\pi - 0 }{ 2 } \\cr h &= \\dfrac{ \\pi }{ 2 } \\end{aligned}",
                        "The $x$-coordinates are $x_0 = 0$, $x_1 = \\dfrac{ \\pi }{ 2 }$, and $x_2 = \\pi $. Evaluate the function $f(x) = \\sin^2(x)$ at each coordinate:<br><br><strong>•</strong> $f(0) = \\sin^2(0) = 0$<br><strong>•</strong> $f\\left( \\dfrac{ \\pi }{ 2 } \\right) = \\sin^2\\left( \\dfrac{ \\pi }{ 2 } \\right) = 1$<br><strong>•</strong> $f(\\pi ) = \\sin^2(\\pi ) = 0$",
                        "Apply the trapezium rule formula:<br>\\begin{aligned} I &\\approx \\dfrac{ h }{ 2 } \\left[ f(0) + f(\\pi ) + 2f\\left( \\dfrac{ \\pi }{ 2 } \\right) \\right] \\cr &\\approx \\dfrac{ \\pi / 2 }{ 2 } [ 0 + 0 + 2(1) ] \\cr &\\approx \\dfrac{ \\pi }{ 4 } [ 2 ] \\cr &\\approx \\dfrac{ \\pi }{ 2 } \\end{aligned}",
                        "<strong>(ii)</strong> To find the exact value, integrate $\\sin^2(x)$ analytically by using the double-angle identity $\\sin^2(x) = \\dfrac{ 1 - \\cos(2x) }{ 2 }$:<br>\\begin{aligned} I &= \\int_{ 0 }^{ \\pi } \\dfrac{ 1 - \\cos(2x) }{ 2 } \\mathrm{d}x \\cr &= \\dfrac{ 1 }{ 2 } \\left[ x - \\dfrac{ \\sin(2x) }{ 2 } \\right]_{ 0 }^{ \\pi } \\cr &= \\dfrac{ 1 }{ 2 } \\left[ \\left( \\pi - \\dfrac{ \\sin(2\\pi ) }{ 2 } \\right) - (0 - 0) \\right] \\cr &= \\dfrac{ \\pi }{ 2 } \\end{aligned}",
                        "<strong>(iii)</strong> The trapezium rule approximation is 100% exact in this case due to the perfect symmetry of the sine-squared curve:<br><br>The curve $y = \\sin^2(x)$ is symmetric about the vertical line $x = \\dfrac{ \\pi }{ 2 }$. On the first half of the interval, $\\left[ 0, \\dfrac{ \\pi }{ 2 } \\right]$, the curve is concave down, which causes the trapezium to underestimate the area under the curve.<br><br>On the second half of the interval, $\\left[ \\dfrac{ \\pi }{ 2 }, \\pi \\right]$, the curve is concave up, which causes the trapezium to overestimate the area under the curve.<br><br>Because the shape of the curve is perfectly symmetric, the underestimate and the overestimate cancel each other out exactly, making the final numerical approximation completely accurate."
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(i)</strong> $I \\approx \\dfrac{ \\pi }{ 2 }$<br><strong>(ii)</strong> $I = \\pi $<br><strong>(iii)</strong> The trapezium rule is exact because $\\sin^2(x)$ is a linear function.",
                                "feedback": "Check your analytical integration in part <strong>(ii)</strong>. Integrating $\\dfrac{ 1 - \\cos(2x) }{ 2 }$ over $[0, \\pi ]$ yields $\\dfrac{ \\pi }{ 2 }$, not $\\pi $. Also, $\\sin^2(x)$ is a quadratic trigonometric curve, not a linear function."
                        },
                        {
                                "ans": "<strong>(i)</strong> $I \\approx \\dfrac{ \\pi }{ 4 }$<br><strong>(ii)</strong> $I = \\dfrac{ \\pi }{ 2 }$<br><strong>(iii)</strong> The trapezium rule is exact because the endpoints are zero.",
                                "feedback": "Check your trapezium rule sum. The midpoint ordinate $f\\left( \\dfrac{ \\pi }{ 2 } \\right) = 1$ is multiplied by $2$ in the formula, which yields $2$. Multiplying by $\\dfrac{ \\pi }{ 4 }$ gives $\\dfrac{ \\pi }{ 2 }$, not $\\dfrac{ \\pi }{ 4 }$."
                        },
                        {
                                "ans": "<strong>(i)</strong> $I \\approx \\pi $<br><strong>(ii)</strong> $I = \\dfrac{ \\pi }{ 2 }$<br><strong>(iii)</strong> The trapezium rule is exact because $\\sin^2(x)$ has no curvature.",
                                "feedback": "Check your ordinate substitutions. The sum of the ordinates is $0 + 0 + 2(1) = 2$. Multiplying by $\\dfrac{ h }{ 2 } = \\dfrac{ \\pi }{ 4 }$ gives $\\dfrac{ \\pi }{ 2 }$. Furthermore, the curve definitely has curvature; the exact match is due to symmetric error cancellation."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Symmetric Error Cancellation",
                        "content": "Normally, the trapezium rule is only an approximation. However, for functions that exhibit symmetric transition from concave-down to concave-up over the intervals (such as a full sine wave arch), the underestimate of one trapezium cancels out the overestimate of the other. This symmetric error cancellation is a highly elegant mathematical property!"
                }
        }
];
