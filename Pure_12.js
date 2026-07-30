window.ALEVEL_QUESTIONS = [
{
    "id": "004551",
    "board": "OCR",
    "level": "A",
    "major_area": "Vectors",
    "topic": "3D Vectors",
    "subtopic": [
        "Vector Magnitude",
        "Midpoint of a Vector",
        "Vector Geometry"
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
    "topic": "3D Vectors",
    "subtopic": [
        "Vector Geometry",
        "Vector Magnitude",
        "Scalar Product"
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
    "topic": "3D Vectors",
    "subtopic": [
        "Collinear Vectors",
        "Ratio Theorem"
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
    "topic": "3D Vectors",
    "subtopic": [
        "Scalar Product",
        "Direction Cosines"
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
    "topic": "3D Vectors",
    "subtopic": [
        "Vector Magnitude",
        "Scalar Product",
        "Angle Between Vectors"
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
    "topic": "Graphs and Modeling",
    "subtopic": [
        "Qualitative Modeling",
        "Interpreting Graphs"
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
        "Linear Modeling",
        "Simultaneous Equations"
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
    "topic": "Polynomials",
    "subtopic": [
        "Completing the Square",
        "Quadratic Modeling"
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
    "major_area": "Algebra and Functions",
    "topic": "Exponentials and Logarithms",
    "subtopic": [
        "Exponential Modeling",
        "Logarithmic Inversion"
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
        "Piecewise Functions",
        "Mathematical Modeling"
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
    "topic": "Trigonometry",
    "subtopic": [
        "Trigonometric Proof",
        "Compound Angle Formulas",
        "Double-Angle Identities"
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
    "topic": "Trigonometry",
    "subtopic": [
        "Trigonometric Proof",
        "Double-Angle Identities"
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
    "topic": "Trigonometry",
    "subtopic": [
        "Trigonometric Proof",
        "Triple-Angle Identities"
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
    "topic": "Trigonometry",
    "subtopic": [
        "Trigonometric Proof",
        "Reciprocal Trigonometry"
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
    "topic": "Trigonometry",
    "subtopic": [
        "Quadratic Trigonometric Equations",
        "Double-Angle Identities"
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
        "Proof by Contradiction",
        "Number Theory"
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
        "Proof by Counterexample",
        "Proof by Contradiction"
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
        "Proof by Exhaustion",
        "Algebraic Proof"
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
    "major_area": "Algebra and Functions",
    "topic": "Proof",
    "subtopic": [
        "Difference of Two Squares",
        "Number Theory"
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
        "Proof by Contradiction",
        "Irrationality of Surds"
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
            "ans": "$\\sqrt{ 2 } = \\dfrac{ a }{ b } \\implies a^2 = b^2$",
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
    "major_area": "Algebra and Functions",
    "topic": "Calculus",
    "subtopic": [
        "Differentiation",
        "Turning Points",
        "Quotient Rule"
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
            "ans": "$\\left( e, \\dfrac{ 1 }{ e^2 } \\right)$ is a local minimum",
            "feedback": "This arises if you make an algebra error solving $1-2\\ln x = 0$, incorrectly obtaining $\\ln x = 1 \\implies x = e$, and misidentify the nature of the turning point."
        },
        {
            "ans": "$\\left( \\sqrt{e}, \\dfrac{ 1 }{ 2e } \\right)$ is a local minimum",
            "feedback": "This is a classification error, incorrectly interpreting a negative second derivative as indicating a minimum instead of a maximum."
        },
        {
            "ans": "$\\left( 1, 0 \\right)$ is a local maximum",
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
    "major_area": "Algebra and Functions",
    "topic": "Calculus",
    "subtopic": [
        "Differentiation",
        "Turning Points",
        "Cubic Curves"
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
    "major_area": "Algebra and Functions",
    "topic": "Calculus",
    "subtopic": [
        "Differentiation",
        "Product Rule",
        "Limits at Infinity"
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
    "major_area": "Algebra and Functions",
    "topic": "Calculus",
    "subtopic": [
        "Differentiation",
        "Stationary Points",
        "Rational Functions"
    ],
    "img": false,
    "question": "<strong>(i)</strong> Find the set of values of $x$ for which the curve $y = x + \\dfrac{ 4 }{ x }$ for $x \\ne 0$ is increasing.<br><br><strong>(ii)</strong> Find the coordinates of the stationary points on the curve.<br><br><strong>(iii)</strong> Use the second derivative to determine the nature of each stationary point.<br><br><strong>(iv)</strong> Show that the straight line connecting the two stationary points passes through the origin.",
    "steps": [
        "To find where the curve is increasing, we first calculate the derivative $\\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x }$:<br><br>\\begin{aligned} y & = x + 4x^{-1} \\cr \\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } & = 1 - 4x^{-2} \\cr & = 1 - \\dfrac{ 4 }{ x^2 } \\end{aligned}<br><br>For the curve to be increasing, the gradient must be strictly positive:<br><br>\\begin{aligned} 1 - \\dfrac{ 4 }{ x^2 } & > 0 \\cr 1 & > \\dfrac{ 4 }{ x^2 } \\cr x^2 & > 4 \\end{aligned}<br><br>Taking the square root on both sides (and accounting for both positive and negative branches of the inequality):<br><br>\\begin{aligned} x > 2 \\quad \\text{or} \\quad x < -2 \\end{aligned}<br><br>Thus, the set of values for which the curve is increasing is $\{ x : x < -2 \} \\cup \{ x : x > 2 \}$.",
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
    "major_area": "Algebra and Functions",
    "topic": "Calculus",
    "subtopic": [
        "Differentiation",
        "Product Rule",
        "Trigonometric Stationary Points"
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
            "ans": "$\\left( \\dfrac{ \\pi }{ 4 }, \\dfrac{ \\sqrt{2} }{ 2 } e^{ \\pi / 4 } \\right)$ is a local maximum",
            "feedback": "This is a quadrant error, incorrectly solving $\\tan x = 1$ instead of $\\tan x = -1$, yielding a Quadrant I stationary point."
        },
        {
            "ans": "$$\\left( \\dfrac{ 3\\pi }{ 4 }, \\dfrac{ \\sqrt{2} }{ 2 } e^{ 3\\pi / 4 } \\right)$ is a local minimum",
            "feedback": "This is a classification error, incorrectly assuming that a negative second derivative indicates a minimum instead of a maximum."
        },
        {
            "ans": "$\\left( \\dfrac{ \\pi }{ 2 }, e^{ \\pi / 2 } \\right)$ is a local maximum",
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
        "Circle Equation",
        "Completing the Square"
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
        "Circle Equation",
        "Completing the Square"
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
    "major_area": "Coordinate Geometry",
    "topic": "Circles",
    "subtopic": [
        "Circle Equation",
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
        "Intersections",
        "Chords"
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
        "Circle Equation",
        "Diameter and Midpoint"
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
}
];