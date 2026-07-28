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
}
];