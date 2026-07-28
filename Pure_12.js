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
        "content": "When solving coordinate geometry questions, use your geometric deductions as an automatic sanity check. Since you proved in part (i) that the triangle is equilateral, you already know before starting part (iii) that the internal angle *must* be exactly $60^\\circ$. If your scalar product calculation yields any other angle, you instantly know you made a prior coordinate sign error!"
    }
}
];