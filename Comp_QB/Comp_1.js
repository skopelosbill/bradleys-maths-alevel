window.ALEVEL_QUESTIONS = [
{
    "id": "009001",
    "group_id": "009001",
    "board": "OCR MEI",
    "branch": "Comprehension",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "The Harmonic Mean",
    "subtopic": [
        "Average Rates",
        "Foundational Verification"
    ],
    "img": false,
    "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 1: The Harmonic Mean</strong><br>For two positive quantities $x$ and $y$, their Arithmetic Mean is $A = \\dfrac{x + y}{2}$. When quantities represent rates defined over equal distances (such as $\\text{speed} = \\text{distance} / \\text{time}$), the correct average rate is given by the Harmonic Mean, $H$:$$H = \\dfrac{2xy}{x + y}$$</div>A motorist drives from Town A to Town B, a distance of $120\\text{ miles}$, at an average speed of $60\\text{ mph}$. On the return journey along the exact same route, heavy traffic reduces their average speed to $40\\text{ mph}$.<br><br><strong>(a)</strong> Show that the total time taken for the round trip is $5\\text{ hours}$.<br><br><strong>(b)</strong> Hence, calculate the true average speed for the entire round trip.<br><br><strong>(c)</strong> Calculate the Arithmetic Mean of the two speeds, and state whether the Arithmetic Mean overestimates or underestimates the true average speed.",
    "steps": [
        "<strong>(a) Total Time for Round Trip:</strong><br><br>Calculate the time taken for each leg of the journey using $\\text{time} = \\dfrac{\\text{distance}}{\\text{speed}}$:<br><br>• Outward leg ($A \\to B$):\\begin{aligned} t_1 &= \\dfrac{120}{60} \\cr &= 2\\text{ hours} \\end{aligned}<br>• Return leg ($B \\to A$):\\begin{aligned} t_2 &= \\dfrac{120}{40} \\cr &= 3\\text{ hours} \\end{aligned}<br>Total time taken:\\begin{aligned} t_{\\text{total}} &= t_1 + t_2 \\cr &= 2 + 3 \\cr &= 5\\text{ hours} \\end{aligned}",
        "<strong>(b) True Average Speed:</strong><br><br>The total distance for the round trip is:\\begin{aligned} d_{\\text{total}} &= 120 + 120 \\cr &= 240\\text{ miles} \\end{aligned}Calculate the average speed:\\begin{aligned} \\text{Average Speed} &= \\dfrac{d_{\\text{total}}}{t_{\\text{total}}} \\cr &= \\dfrac{240}{5} \\cr &= 48\\text{ mph} \\end{aligned}<br>Using the Harmonic Mean formula from the extract directly confirms this result:\\begin{aligned} H &= \\dfrac{2(60)(40)}{60 + 40} \\cr &= \\dfrac{4800}{100} \\cr &= 48\\text{ mph} \\end{aligned}",
        "<strong>(c) Comparison with Arithmetic Mean:</strong><br><br>Calculate the Arithmetic Mean of the two speeds:\\begin{aligned} A &= \\dfrac{60 + 40}{2} \\cr &= \\dfrac{100}{2} \\cr &= 50\\text{ mph} \\end{aligned}Since $50\\text{ mph} > 48\\text{ mph}$, the Arithmetic Mean overestimates the true average speed.<br><br>This occurs because the motorist spends more time travelling at the slower speed ($3\\text{ hours at } 40\\text{ mph}$) than at the faster speed ($2\\text{ hours at } 60\\text{ mph}$), pulling the true time-weighted average closer to $40\\text{ mph}$.",
        "Final Answer: <strong>(b)</strong> $48\\text{ mph}$, <strong>(c)</strong> $A = 50\\text{ mph}$ (overestimates)"
    ],
    "pi_options": [
        {
            "ans": "<strong>(b)</strong> $48\\text{ mph}$, <strong>(c)</strong> $A = 50\\text{ mph}$ (underestimates)",
            "feedback": "Your calculation of the average speed is correct, but your comparison is inverted. The arithmetic mean is 50 mph, which is strictly greater than the true speed of 48 mph. Therefore, the arithmetic mean overestimates the true value."
        },
        {
            "ans": "<strong>(b)</strong> $50\\text{ mph}$, <strong>(c)</strong> $A = 50\\text{ mph}$ (exact match)",
            "feedback": "This is the classic misconception of averaging speeds directly by taking the arithmetic mean. Speed is defined as distance divided by time. Because the journey spends more time at the slower speed (3 hours vs 2 hours), the true average must be weighted by time, yielding 48 mph, not 50 mph."
        },
        {
            "ans": "<strong>(b)</strong> $45\\text{ mph}$, <strong>(c)</strong> $A = 50\\text{ mph}$ (overestimates)",
            "feedback": "This error occurs if you incorrectly calculate the harmonic mean, such as dividing the product by the difference or using an incorrect denominator in the total time calculation."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: The Flaw of the Naive Average",
        "content": "Whenever quantities represent rates with a fixed numerator (such as speed where distance is fixed, or price per unit where total spend is fixed), you must NEVER take the simple arithmetic average of the rates. The harmonic mean accounts for the fact that lower speeds take more time, naturally weighting the true average downwards."
    }
},
{
    "id": "009002",
    "group_id": "009001",
    "board": "OCR MEI",
    "branch": "Comprehension",
    "level": "A",
    "major_area": "Sequences and Series",
    "topic": "The Golden Ratio",
    "subtopic": [
        "Fibonacci Sequences",
        "Consecutive Ratios"
    ],
    "img": false,
    "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 1: The Golden Ratio and Fibonacci Sequence</strong><br>The Fibonacci sequence is defined recursively by $F_1 = 1$, $F_2 = 1$, and $F_{n+1} = F_n + F_{n-1}$ for $n \\ge 2$. The Golden Ratio, $\\phi$, is the unique positive root of the equation $\\phi^2 - \\phi - 1 = 0$, giving:$$\\phi = \\dfrac{1 + \\sqrt{5}}{2} \\approx 1.618034$$The ratios of consecutive terms $R_n = \\dfrac{F_{n+1}}{F_n}$ generate successive rational approximations that oscillate around and converge to $\\phi$.</div><strong>(a)</strong> Write down the first $7$ terms of the Fibonacci sequence: $F_1, F_2, F_3, F_4, F_5, F_6, F_7$.<br><br><strong>(b)</strong> Calculate the values of the consecutive ratios:$$R_4 = \\dfrac{F_5}{F_4}$$ $$ R_5 = \\dfrac{F_6}{F_5}$$ $$R_6= \\dfrac{F_7}{F_6}$$expressing each as an exact fraction and as a decimal rounded to $4$ decimal places.<br><br><strong>(c)</strong> Comparing each of these three values to $\\phi \\approx 1.6180$, state which ratios overestimate $\\phi$ and which underestimate $\\phi$.",
    "steps": [
        "<strong>(a) First 7 Terms:</strong><br><br>Using the recurrence relation $F_{n+1} = F_n + F_{n-1}$:\\begin{aligned} F_1 &= 1 \\cr F_2 &= 1 \\cr F_3 &= 1 + 1 = 2 \\cr F_4 &= 1 + 2 = 3 \\cr F_5 &= 2 + 3 = 5 \\cr F_6 &= 3 + 5 = 8 \\cr F_7 &= 5 + 8 = 13 \\end{aligned}Thus, the first $7$ terms are $1, 1, 2, 3, 5, 8, 13$.",
        "<strong>(b) Consecutive Ratios:</strong><br><br>Evaluate each ratio using the terms found in part (a):<br><br>• For $R_4$:\\begin{aligned} R_4 &= \\dfrac{F_5}{F_4} \\cr &= \\dfrac{5}{3} \\cr &\\approx 1.6667 \\end{aligned}<br>• For $R_5$:\\begin{aligned} R_5 &= \\dfrac{F_6}{F_5} \\cr &= \\dfrac{8}{5} \\cr &= 1.6000 \\end{aligned}<br>• For $R_6$:\\begin{aligned} R_6 &= \\dfrac{F_7}{F_6} \\cr &= \\dfrac{13}{8} \\cr &= 1.6250 \\end{aligned}",
        "<strong>(c) Comparison to $\\phi$:</strong><br><br>Compare each decimal value with $\\phi \\approx 1.6180$:<br><br>• $R_4 = 1.6667 > 1.6180$ (overestimate)<br><br>• $R_5 = 1.6000 < 1.6180$ (underestimate)<br><br>• $R_6 = 1.6250 > 1.6180$ (overestimate)<br><br>Thus, $R_4$ and $R_6$ overestimate $\\phi$, while $R_5$ underestimates $\\phi$. This illustrates that successive convergents alternate strictly above and below the true irrational value.",
        "Final Answer: <strong>(b)</strong> $R_4 = \\dfrac{5}{3} \\approx 1.6667$, $R_5 = \\dfrac{8}{5} = 1.6000$, $R_6 = \\dfrac{13}{8} = 1.6250$<br><strong>(c)</strong> $R_4, R_6$ overestimate; $R_5$ underestimates"
    ],
    "pi_options": [
        {
            "ans": "<strong>(b)</strong> $R_4 = \\dfrac{5}{3} \\approx 1.6667$, $R_5 = \\dfrac{8}{5} = 1.6000$, $R_6 = \\dfrac{13}{8} = 1.6250$<br><strong>(c)</strong> $R_5$ overestimates; $R_4, R_6$ underestimate",
            "feedback": "Your calculation of the fractional and decimal ratios is correct, but your inequality comparison is reversed. Since 1.6667 and 1.6250 are greater than 1.6180, R_4 and R_6 overestimate the golden ratio, whereas 1.6000 is less than 1.6180 and underestimates it."
        },
        {
            "ans": "<strong>(b)</strong> $R_4 = \\dfrac{3}{2} = 1.5000$, $R_5 = \\dfrac{5}{3} \\approx 1.6667$, $R_6 = \\dfrac{8}{5} = 1.6000$<br><strong>(c)</strong> $R_5$ overestimates; $R_4, R_6$ underestimate",
            "feedback": "This error occurs if you shift the term indices by one, calculating R_3, R_4, and R_5 instead of R_4 = F_5 / F_4, R_5 = F_6 / F_5, and R_6 = F_7 / F_6."
        },
        {
            "ans": "<strong>(b)</strong> $R_4 = \\dfrac{5}{3} \\approx 1.6667$, $R_5 = \\dfrac{8}{5} = 1.6000$, $R_6 = \\dfrac{13}{8} = 1.6250$<br><strong>(c)</strong> All ratios underestimate $\\phi$",
            "feedback": "This error reflects a misconception that the sequence of ratios increases monotonically towards phi. In fact, continued fraction convergents strictly oscillate, alternating between values above and below phi."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Alternating Convergence of Continued Fractions",
        "content": "The ratios $\\dfrac{F_{n+1}}{F_n}$ are the convergents of the infinite continued fraction $[1; 1, 1, 1, \\dots]$. A universal property of simple continued fractions is that even convergents underestimate the true limit while odd convergents overestimate it, creating a tightly contracting bracket around the irrational limit $\\phi$."
    }
},
{
    "id": "009003",
    "group_id": "009001",
    "board": "OCR MEI",
    "branch": "Comprehension",
    "level": "A",
    "major_area": "Exponentials and Logarithms",
    "topic": "Logarithmic Scaling",
    "subtopic": [
        "Power Laws",
        "Log-Log Linearisation"
    ],
    "img": false,
    "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 1: Power Laws and Logarithmic Linearisation</strong><br>A power law relates two positive variables by the equation $Y = a X^b$, where $a$ and $b$ are constants. Taking base-10 logarithms transforms this relation into a linear form:\\begin{aligned}\\log_{10} Y & = \\log_{10} a \\cr & \\qquad + b \\log_{10} X$$When $\\log_{10} Y$ is plotted against $\\log_{10} X$, the resulting graph is a straight line with gradient $b$ and vertical intercept $\\log_{10} a$.</div>In a biological study, two variables $X$ and $Y$ are modelled by the power law $Y = a X^b$. A log-log plot of $\\log_{10} Y$ against $\\log_{10} X$ yields a straight line that passes through the coordinates $(1.0, 2.5)$ and $(3.0, 4.0)$.<br><br><strong>(a)</strong> Find the gradient of this line, and hence state the value of the scaling exponent $b$.<br><br><strong>(b)</strong> Determine the vertical intercept of the line, and hence find the value of the constant $a$, giving your answer to $3$ significant figures.<br><br><strong>(c)</strong> Using the model, estimate the value of $Y$ when $X = 50$, giving your answer to the nearest integer.",
    "steps": [
        "<strong>(a) Gradient and Exponent $b$:</strong><br><br>Calculate the gradient of the straight line passing through $(1.0, 2.5)$ and $(3.0, 4.0)$:\\begin{aligned} m &= \\dfrac{y_2 - y_1}{x_2 - x_1} \\cr &= \\dfrac{4.0 - 2.5}{3.0 - 1.0} \\cr &= \\dfrac{1.5}{2.0} \\cr &= 0.75 \\end{aligned}From the extract, the gradient of the log-log line equals the exponent $b$. Thus:$$b = 0.75$$",
        "<strong>(b) Intercept and Constant $a$:</strong><br><br>Substitute the gradient $b = 0.75$ and the point $(1.0, 2.5)$ into the straight-line equation:\\begin{aligned} &\\log_{10} Y = \\log_{10} a + b \\log_{10} X \\cr &2.5 = \\log_{10} a + 0.75(1.0) \\cr &\\log_{10} a = 2.5 - 0.75 \\cr &\\log_{10} a = 1.75 \\end{aligned}Convert from base-10 logarithm to find $a$:\\begin{aligned} a &= 10^{1.75} \\cr &\\approx 56.234 \\cr &\\approx 56.2\\text{ (to 3 s.f.)} \\end{aligned}",
        "<strong>(c) Estimate $Y$ when $X = 50$:</strong><br><br>Substitute $a = 10^{1.75}$ and $b = 0.75$ into the power law $Y = a X^b$:\\begin{aligned} Y &= 10^{1.75} \\times 50^{0.75} \\cr &= 56.2341 \\times 18.8030 \\cr &\\approx 1057.37 \\end{aligned}To the nearest integer:$$Y = 1057$$",
        "Final Answer: <strong>(a)</strong> $b = 0.75$, <strong>(b)</strong> $a = 56.2$, <strong>(c)</strong> $Y = 1057$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $b = 0.75$, <strong>(b)</strong> $a = 1.75$, <strong>(c)</strong> $Y = 33$",
            "feedback": "This error occurs in part (b) if you forget to undo the logarithm, incorrectly stating that $a = \\log_{10} a = 1.75$ instead of $a = 10^{1.75} \\approx 56.2$."
        },
        {
            "ans": "<strong>(a)</strong> $b = 1.33$, <strong>(b)</strong> $a = 14.7$, <strong>(c)</strong> $Y = 2650$",
            "feedback": "This error occurs in part (a) if you invert the gradient calculation by computing $\\Delta x / \\Delta y = 2.0 / 1.5 = 1.33$, distorting all subsequent parameters."
        },
        {
            "ans": "<strong>(a)</strong> $b = 0.75$, <strong>(b)</strong> $a = 56.2$, <strong>(c)</strong> $Y = 1050$",
            "feedback": "This error occurs in part (c) from premature rounding of $a = 56.2$ instead of maintaining precision during computation, which yields $56.2 \\times 18.803 = 1056.7$ or rounding to 1050."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Inverting Logarithmic Intercepts",
        "content": "The most frequent error in log-linearisation is forgetting that the vertical intercept is $\\log_{10} a$, not $a$ itself. Students often write $a = 1.75$, forgetting that to recover the physical constant they must raise the base to that power: $a = 10^{1.75}$."
    }
},
{
    "id": "009004",
    "group_id": "009001",
    "board": "OCR MEI",
    "branch": "Comprehension",
    "level": "A",
    "major_area": "Coordinate Geometry",
    "topic": "Taxicab Geometry",
    "subtopic": [
        "Non-Euclidean Metrics",
        "Distance Axioms"
    ],
    "img": false,
    "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 1: Taxicab Distance vs Euclidean Distance</strong><br>For any two points $P(x_1, y_1)$ and $Q(x_2, y_2)$ in the Cartesian plane, the Euclidean distance is $$d_E(P, Q) $$= \\sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}$$ The Taxicab distance, $d_T$, measures distance along a grid parallel to the coordinate axes:$$d_T(P, Q)$$ $$= |x_1 - x_2| + |y_1 - y_2|$$For all points in the plane, $d_T(P, Q) \\ge d_E(P, Q)$.</div>Two points in the Cartesian plane are given by $P(1, 2)$ and $Q(7, 10)$.<br><br><strong>(a)</strong> Calculate the exact Euclidean distance $d_E(P, Q)$.<br><br><strong>(b)</strong> Calculate the Taxicab distance $d_T(P, Q)$.<br><br><strong>(c)</strong> State the geometric condition on the coordinates of two distinct points $P$ and $Q$ under which $d_T(P, Q) = d_E(P, Q)$.",
    "steps": [
        "<strong>(a) Euclidean Distance $d_E$:</strong><br><br>Substitute the coordinates into the Euclidean distance formula:\\begin{aligned} d_E(P, Q) &= \\sqrt{(7 - 1)^2 + (10 - 2)^2} \\cr &= \\sqrt{6^2 + 8^2} \\cr &= \\sqrt{36 + 64} \\cr &= \\sqrt{100} \\cr &= 10 \\end{aligned}",
        "<strong>(b) Taxicab Distance $d_T$:</strong><br><br>Substitute the coordinates into the Taxicab distance formula:\\begin{aligned} d_T(P, Q) &= |7 - 1| + |10 - 2| \\cr &= |6| + |8| \\cr &= 6 + 8 \\cr &= 14 \\end{aligned}",
        "<strong>(c) Equality Condition:</strong><br><br>Let $\\Delta x = |x_1 - x_2|$ and $\\Delta y = |y_1 - y_2|$.<br><br>Squaring both distances gives:\\begin{aligned} &[d_T(P, Q)]^2\\cr &\\quad = (\\Delta x + \\Delta y)^2 \\cr &\\quad = (\\Delta x)^2 + 2\\Delta x \\Delta y + (\\Delta y)^2 \\cr &[d_E(P, Q)]^2 = (\\Delta x)^2 + (\\Delta y)^2 \\end{aligned}Equality $[d_T]^2 = [d_E]^2$ requires:\\begin{aligned} 2\\Delta x \\Delta y &= 0 \\cr \\implies \\Delta x = 0 \\quad &\\text{or} \\quad \\Delta y = 0 \\end{aligned}Geometrically, this means that $P$ and $Q$ must lie on the same horizontal line ($y_1 = y_2$) or on the same vertical line ($x_1 = x_2$).",
        "Final Answer: <strong>(a)</strong> $d_E = 10$, <strong>(b)</strong> $d_T = 14$, <strong>(c)</strong> $x_1 = x_2\\text{ or }y_1 = y_2$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $d_E = 10$, <strong>(b)</strong> $d_T = 14$, <strong>(c)</strong> $x_1 = x_2\\text{ and }y_1 = y_2$",
            "feedback": "Condition (c) states that both coordinates must match simultaneously. However, if $x_1 = x_2$ and $y_1 = y_2$, the two points are identical ($P = Q$), giving distance 0. For two distinct points, they only need to share a single coordinate line (either horizontal or vertical)."
        },
        {
            "ans": "<strong>(a)</strong> $d_E = 14$, <strong>(b)</strong> $d_T = 10$, <strong>(c)</strong> $x_1 = x_2\\text{ or }y_1 = y_2$",
            "feedback": "This error swaps the values of Euclidean and Taxicab distance. Taxicab distance represents journey along a grid and is always greater than or equal to the straight-line Euclidean distance ($d_T \\ge d_E$)."
        },
        {
            "ans": "<strong>(a)</strong> $d_E = 10$, <strong>(b)</strong> $d_T = 14$, <strong>(c)</strong> $y_2 - y_1 = x_2 - x_1$",
            "feedback": "Setting $y_2 - y_1 = x_2 - x_1$ means the line segment has gradient 1 ($45^\\circ$ diagonal). In fact, on a $45^\\circ$ diagonal the discrepancy between Taxicab and Euclidean distance is maximised: $d_T = \\sqrt{2} d_E$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: The Geometry of Manhattan Distance",
        "content": "In Taxicab geometry, you are moving strictly along the grid of streets and avenues. Any diagonal motion requires stepping horizontally and vertically. Therefore, the Taxicab distance only ever equals Euclidean distance when there is no turning required—that is, when the path lies entirely along a single grid line ($x_1 = x_2$ or $y_1 = y_2$)."
    }
},
{
    "id": "009005",
    "group_id": "009001",
    "board": "OCR MEI",
    "branch": "Comprehension",
    "level": "A",
    "major_area": "Geometry and Proof",
    "topic": "Pick's Theorem",
    "subtopic": [
        "Lattice Polygons",
        "Point Counting"
    ],
    "img": false,
    "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 1: Pick's Theorem for Lattice Polygons</strong><br>A lattice point is a point whose Cartesian coordinates $(x, y)$ are integers ($x, y \\in \\mathbb{Z}$). Pick's Theorem states that the area $A$ of any simple lattice polygon is given by:$$A = I + \\dfrac{B}{2} - 1$$where $I$ is the number of strictly interior lattice points, and $B$ is the number of lattice points lying on the boundary of the polygon.</div>A triangle in the Cartesian plane has vertices at the lattice coordinates $O(0, 0)$, $A(6, 0)$, and $B(2, 4)$.<br><br><strong>(a)</strong> Using standard coordinate geometry, calculate the exact area of triangle $OAB$.<br><br><strong>(b)</strong> By finding the number of integer coordinate points lying on each of the three line segments $OA$, $AB$, and $BO$, show that the total number of boundary lattice points is $B = 12$.<br><br><strong>(c)</strong> Hence, use Pick's Theorem to find the number of interior lattice points, $I$, strictly inside triangle $OAB$.",
    "steps": [
        "<strong>(a) Area by Coordinate Geometry:</strong><br><br>The base $OA$ lies along the $x$-axis from $x = 0$ to $x = 6$, so $\\text{base} = 6$.<br><br>The height is the perpendicular distance from vertex $B(2, 4)$ to the base line $y = 0$, so $\\text{height} = 4$.<br><br>Calculate the area:\\begin{aligned} A &= \\dfrac{1}{2} \\times \\text{base} \\times \\text{height} \\cr &= \\dfrac{1}{2} \\times 6 \\times 4 \\cr &= 12 \\end{aligned}",
        "<strong>(b) Counting Boundary Points $B$:</strong><br><br>Count the lattice points on each segment:<br><br>• Segment $OA$ (from $(0,0)$ to $(6,0)$):\\begin{aligned} &(0,0), (1,0), (2,0), (3,0), \\cr &(4,0), (5,0), (6,0) \\implies 7\\text{ points} \\end{aligned}<br>• Segment $AB$ (from $(6,0)$ to $(2,4)$, vector $(-4, 4)$, line $y = 6 - x$):\\begin{aligned} &(6,0), (5,1), (4,2), (3,3), (2,4) \\cr &\\implies 5\\text{ points} \\end{aligned}<br>• Segment $BO$ (from $(2,4)$ to $(0,0)$, vector $(-2, -4)$, line $y = 2x$):\\begin{aligned} &(2,4), (1,2), (0,0) \\implies 3\\text{ points} \\end{aligned}<br>Summing the points and subtracting the $3$ vertices that were counted twice:\\begin{aligned} B &= (7 + 5 + 3) - 3 \\cr &= 12 \\end{aligned}Thus, the total number of boundary lattice points is $B = 12$.",
        "<strong>(c) Interior Points $I$ via Pick's Theorem:</strong><br><br>Substitute $A = 12$ and $B = 12$ into Pick's Theorem:\\begin{aligned} &A = I + \\dfrac{B}{2} - 1 \\cr &12 = I + \\dfrac{12}{2} - 1 \\cr &12 = I + 6 - 1 \\cr &12 = I + 5 \\cr &I = 7 \\end{aligned}Thus, there are $7$ interior lattice points strictly inside triangle $OAB$.",
        "Final Answer: <strong>(a)</strong> $A = 12$, <strong>(c)</strong> $I = 7$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $A = 12$, <strong>(c)</strong> $I = 6$",
            "feedback": "This error occurs in part (c) if you omit the $-1$ term in Pick's formula, evaluating $12 = I + 6 \\implies I = 6$ instead of $I = 12 - 5 = 7$."
        },
        {
            "ans": "<strong>(a)</strong> $A = 12$, <strong>(c)</strong> $I = 4$",
            "feedback": "This error occurs in part (b) if you forget to count the non-vertex boundary points (such as $(1,2)$ or $(5,1)$), incorrectly assuming only the 3 vertices lie on the boundary ($B = 3$) or miscounting $B$."
        },
        {
            "ans": "<strong>(a)</strong> $A = 24$, <strong>(c)</strong> $I = 19$",
            "feedback": "This error occurs in part (a) if you forget the factor of $\\dfrac{1}{2}$ in the triangle area formula, taking $A = 6 \\times 4 = 24$, which consequently distorts the calculation of $I$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Vertex Double-Counting in Pick's Theorem",
        "content": "When calculating the boundary points $B$ of a polygon, students often count the points on each edge and simply add them up, inadvertently counting each corner vertex twice! To avoid this, count the number of unit vectors or segments along each edge: the sum of segments on the perimeter always equals the exact number of boundary points $B$."
    }
},
    {
        "id": "009006",
        "group_id": "009006",
        "board": "OCR MEI",
        "branch": "Comprehension",
        "level": "A",
        "major_area": "Algebra and Functions",
        "topic": "The Harmonic Mean",
        "subtopic": [
            "Algebraic Rearrangement",
            "Variable Relationships"
        ],
        "img": false,
        "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 2: The Harmonic Mean</strong><br>The relationship between the Harmonic Mean $H$ and two rates $x$ and $y$ can be expressed as:$$H = \\dfrac{2xy}{x + y}$$Equivalently, the reciprocal of the Harmonic Mean is the arithmetic mean of the reciprocals:$$\\dfrac{1}{H} = \\dfrac{1}{2} \\left( \\dfrac{1}{x} + \\dfrac{1}{y} \\right)$$</div>A delivery van travels at a constant speed of $x\\text{ mph}$ for the outward journey and $y\\text{ mph}$ for the return journey. The true average speed for the total trip is $H = 40\\text{ mph}$.<br><br><strong>(a)</strong> Show that $y = \\dfrac{20x}{x - 20}$.<br><br><strong>(b)</strong> State the horizontal asymptote of the graph of $y$ against $x$.<br><br><strong>(c)</strong> If $x = 30$, find $y$. If $x = 20$, explain why no real value of $y$ can satisfy the model.",
        "steps": [
            "<strong>(a) Rearranging for $y$:</strong><br><br>Substitute $H = 40$ into the formula:\\begin{aligned} 40 &= \\dfrac{2xy}{x + y} \\cr 40(x + y) &= 2xy \\cr 20(x + y) &= xy \\cr 20x + 20y &= xy \\cr 20x &= xy - 20y \\cr 20x &= y(x - 20) \\cr y &= \\dfrac{20x}{x - 20} \\end{aligned}",
            "<strong>(b) Horizontal Asymptote:</strong><br><br>As $x \\to \\infty$, we can divide numerator and denominator by $x$:\\begin{aligned} y &= \\dfrac{20}{1 - \\frac{20}{x}} \\cr y &\\to 20 \\end{aligned}The horizontal asymptote is <strong>$y = 20$</strong>. Physically, this means if the outward speed was infinitely fast, the return speed must still be at least $20\\text{ mph}$ to maintain an average of $40\\text{ mph}$.",
            "<strong>(c) Numerical Evaluation:</strong><br><br>• For $x = 30$:\\begin{aligned} y &= \\dfrac{20(30)}{30 - 20} \\cr &= \\dfrac{600}{10} \\cr &= 60\\text{ mph} \\end{aligned}<br>• For $x = 20$:\\begin{aligned} y &= \\dfrac{400}{0} \\end{aligned}This is undefined. If the outward leg is $20\\text{ mph}$, the driver uses all the time allowed for the total journey (since the average must be $40\\text{ mph}$), leaving no time for the return leg.",
            "Final Answer: <strong>(a)</strong> Proof shown, <strong>(b)</strong> $y = 20$, <strong>(c)</strong> $60\\text{ mph}$ and Undefined."
        ],
        "pi_options": [
            {
                "ans": "<strong>(b)</strong> $y = 40$, <strong>(c)</strong> $60\\text{ mph}$",
                "feedback": "Check the horizontal asymptote again. As $x$ becomes very large, the term $-20$ becomes negligible, so $y \\approx 20x/x = 20$."
            },
            {
                "ans": "<strong>(b)</strong> $y = 20$, <strong>(c)</strong> $40\\text{ mph}$",
                "feedback": "For $x=30$, the calculation $600/10$ results in $60$, not $40$."
            }
        ],
        "bradley_insight": {
            "type": "theory",
            "title": "The Speed Barrier",
            "content": "Notice the asymptote $y=20$. Because the distance is equal, you can never average $40\\text{ mph}$ if one leg is performed at half that speed ($20\\text{ mph}$) or less, because you would spend an infinite amount of time on that leg."
        }
    },
    {
        "id": "009007",
        "group_id": "009006",
        "board": "OCR MEI",
        "branch": "Comprehension",
        "level": "A",
        "major_area": "Sequences and Series",
        "topic": "The Golden Ratio",
        "subtopic": [
            "Quadratic Derivation",
            "Exact Surd Form"
        ],
        "img": false,
        "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 2: The Golden Ratio</strong><br>The Golden Ratio, $\\phi$, describes a proportion where:$$\\dfrac{a + b}{a} = \\dfrac{a}{b} = \\phi$$</div><strong>(a)</strong> By letting $b = 1$ and $a = \\phi$, show that the definition leads to: $\\phi^2 - \\phi - 1 = 0$.<br><br><strong>(b)</strong> Use the quadratic formula to find the exact value of $\\phi$.<br><br><strong>(c)</strong> Express $\\phi^3$ in the form $p\\phi + q$, where $p$ and $q$ are integers.",
        "steps": [
            "<strong>(a) Deriving the Quadratic:</strong><br><br>Substitute $b=1$ and $a=\\phi$ into the first part of the equality:\\begin{aligned} \\dfrac{\\phi + 1}{\\phi} &= \\phi \\cr \\phi + 1 &= \\phi^2 \\cr \\phi^2 - \\phi - 1 &= 0 \\end{aligned}",
            "<strong>(b) Exact Value:</strong><br><br>Using the quadratic formula $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$:\\begin{aligned} \\phi &= \\dfrac{-(-1) \\pm \\sqrt{(-1)^2 - 4(1)(-1)}}{2} \\cr &= \\dfrac{1 \\pm \\sqrt{5}}{2} \\end{aligned}Since the ratio must be positive, $\\phi = \\dfrac{1 + \\sqrt{5}}{2}$.",
            "<strong>(c) Expressing $\\phi^3$:</strong><br><br>From $\\phi^2 = \\phi + 1$:\\begin{aligned} \\phi^3 &= \\phi(\\phi^2) \\cr &= \\phi(\\phi + 1) \\cr &= \\phi^2 + \\phi \\cr &= (\\phi + 1) + \\phi \\cr &= 2\\phi + 1 \\end{aligned}So $p = 2$ and $q = 1$.",
            "Final Answer: <strong>(b)</strong> $\\frac{1+\\sqrt{5}}{2}$, <strong>(c)</strong> $2\\phi + 1$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(b)</strong> $\\frac{1-\\sqrt{5}}{2}$, <strong>(c)</strong> $2\\phi + 1$",
                "feedback": "The Golden Ratio must be a positive number. The value $(1-\\sqrt{5})/2$ is negative."
            }
        ],
        "bradley_insight": {
            "type": "lightbulb",
            "title": "Recursive Powers",
            "content": "One of the most beautiful properties of $\\phi$ is that its powers can always be broken back down into linear combinations of itself ($p\\phi + q$). This is why it appears so often in recursive patterns in nature."
        }
    },
    {
        "id": "009008",
        "group_id": "009006",
        "board": "OCR MEI",
        "branch": "Comprehension",
        "level": "A",
        "major_area": "Exponentials and Logarithms",
        "topic": "Benford's Law",
        "subtopic": [
            "Probability Calculations",
            "Logarithmic Identities"
        ],
        "img": false,
        "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 2: Benford's Law</strong><br>The probability $P(d)$ that the first significant digit of a number is $d$ is given by:$$P(d) = \\log_{10} \\left( 1 + \\dfrac{1}{d} \\right)$$This can be rewritten as $P(d) = \\log_{10}(d + 1) - \\log_{10}(d)$.</div><strong>(a)</strong> Show that the probability of the first digit being $1$ is approx $30.1\\%$.<br><br><strong>(b)</strong> Calculate the exact total probability that the first digit is either $1$ or $2$, in the form $\\log_{10} A$ where $A$ is an integer.<br><br><strong>(c)</strong> Show that $P(d) + P(d+1) = \\log_{10} \\left( \\dfrac{d+2}{d} \\right)$.",
        "steps": [
            "<strong>(a) Probability of $d=1$:</strong><br><br>\\begin{aligned} P(1) &= \\log_{10}(1 + 1) \\cr &= \\log_{10}(2) \\cr &\\approx 0.30103 \\dots \\cr &\\approx 30.1\\% \\end{aligned}",
            "<strong>(b) Combined Probability $P(1) + P(2)$:</strong><br><br>Using the identity $\\log A + \\log B = \\log(AB)$:\\begin{aligned} P(1) + P(2) &= \\log_{10}(2) + \\log_{10}(1.5) \\cr &= \\log_{10}(2 \\times 1.5) \\cr &= \\log_{10}(3) \\end{aligned}So $A = 3$.",
            "<strong>(c) Algebraic Proof:</strong><br><br>\\begin{aligned} P(d) + P(d+1) &= [\\log_{10}(d+1) - \\log_{10}(d)] + [\\log_{10}(d+2) - \\log_{10}(d+1)] \\cr &= \\log_{10}(d+2) - \\log_{10}(d) \\cr &= \\log_{10} \\left( \\dfrac{d+2}{d} \\right) \\end{aligned}This is a 'telescoping' sum where the middle terms cancel out.",
            "Final Answer: <strong>(a)</strong> $30.1\\%$, <strong>(b)</strong> $\\log_{10} 3$, <strong>(c)</strong> Proof shown."
        ],
        "pi_options": [
            {
                "ans": "<strong>(b)</strong> $\\log_{10} 2.5$",
                "feedback": "Careful! Logarithms add by multiplying their arguments: $2 \\times 1.5 = 3$, not $2.5$."
            }
        ],
        "bradley_insight": {
            "type": "theory",
            "title": "The Telescoping Property",
            "content": "Because $P(d)$ is defined as a difference of logs, adding consecutive probabilities results in 'telescoping' cancellation. This explains why the total probability across all digits $1$ to $9$ sums perfectly to $\\log_{10}(10) = 1$."
        }
    },
    {
        "id": "009009",
        "group_id": "009006",
        "board": "OCR MEI",
        "branch": "Comprehension",
        "level": "A",
        "major_area": "Geometry and Proof",
        "topic": "Taxicab Geometry",
        "subtopic": [
            "Locus of Points",
            "Modulus Equations"
        ],
        "img": false,
        "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 2: The Taxicab Metric</strong><br>In Taxicab geometry, the distance between $P(x_1, y_1)$ and $Q(x_2, y_2)$ is:$$d_T(P, Q) = |x_1 - x_2| + |y_1 - y_2|$$</div>Consider a Taxicab circle centered at $(0, 0)$ with radius $r = 4$.<br><br><strong>(a)</strong> Write down the equation of this locus using modulus notation.<br><br><strong>(b)</strong> Find the four points where this locus intersects the axes.<br><br><strong>(c)</strong> Show that the locus in the first quadrant is a straight line $y = mx + c$.",
        "steps": [
            "<strong>(a) The Equation:</strong><br><br>The distance from $(x, y)$ to $(0, 0)$ must be $4$:\\begin{aligned} |x - 0| + |y - 0| &= 4 \\cr |x| + |y| &= 4 \\end{aligned}",
            "<strong>(b) Axis Intersects:</strong><br><br>• $x$-axis ($y=0$): $|x| = 4 \\implies x = \\pm 4$. Points are <strong>$(4, 0)$ and $(-4, 0)$</strong>.<br>• $y$-axis ($x=0$): $|y| = 4 \\implies y = \\pm 4$. Points are <strong>$(0, 4)$ and $(0, -4)$</strong>.",
            "<strong>(c) First Quadrant Locus:</strong><br><br>In the first quadrant, $x \\ge 0$ and $y \\ge 0$, so $|x| = x$ and $|y| = y$.<br>The equation becomes:\\begin{aligned} x + y &= 4 \\cr y &= -x + 4 \\end{aligned}This is a straight line with $m = -1$ and $c = 4$.",
            "Final Answer: <strong>(a)</strong> $|x| + |y| = 4$, <strong>(b)</strong> $(\\pm 4, 0), (0, \\pm 4)$, <strong>(c)</strong> $y = -x + 4$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $x^2 + y^2 = 16$",
                "feedback": "That is the equation for a Euclidean circle. In Taxicab geometry, we sum the absolute differences of the coordinates, not their squares."
            }
        ],
        "bradley_insight": {
            "type": "theory",
            "title": "Square Circles",
            "content": "In Taxicab geometry, a 'circle' is actually a square tilted at $45$ degrees. This is because the distance is measured in 'blocks'—like walking around a city grid."
        }
    },
    {
        "id": "009010",
        "group_id": "009006",
        "board": "OCR MEI",
        "branch": "Comprehension",
        "level": "A",
        "major_area": "Geometry and Proof",
        "topic": "Pick's Theorem",
        "subtopic": [
            "Formula Inversion",
            "Variable Constraints"
        ],
        "img": false,
        "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 2: Pick's Theorem</strong><br>Pick's Theorem relates Area ($A$), interior points ($I$) and boundary points ($B$):$$A = I + \\dfrac{B}{2} - 1$$</div><strong>(a)</strong> Express $B$ in terms of $A$ and $I$.<br><br><strong>(b)</strong> A lattice polygon has an area of $6.5$. Explain why the number of boundary points $B$ must be an odd number.<br><br><strong>(c)</strong> If $I = 0$, show that the minimum $B$ required is $3$, and state the area.",
        "steps": [
            "<strong>(a) Rearranging for $B$:</strong><br><br>\\begin{aligned} A + 1 - I &= \\dfrac{B}{2} \\cr B &= 2(A - I + 1) \\end{aligned}",
            "<strong>(b) Parity Argument:</strong><br><br>Substitute $A = 6.5$ into the formula for $B$:\\begin{aligned} B &= 2(6.5 - I + 1) \\cr B &= 13 - 2I + 2 \\cr B &= 15 - 2I \\end{aligned}Since $I$ is an integer, $2I$ is always even. Subtracting an even number from an odd number ($15$) always results in an <strong>odd</strong> number.",
            "<strong>(c) Minimum $B$ and Area:</strong><br><br>A polygon must have at least $3$ vertices (boundary points) to enclose any area. Thus, min $B = 3$.<br>For $I = 0$ and $B = 3$:\\begin{aligned} A &= 0 + \\dfrac{3}{2} - 1 \\cr &= 0.5 \\end{aligned}",
            "Final Answer: <strong>(a)</strong> $B = 2(A - I + 1)$, <strong>(b)</strong> Proof shown, <strong>(c)</strong> $B = 3, A = 0.5$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(b)</strong> $B$ is always even.",
                "feedback": "Look closely at the formula. If $A$ has a '.5' fractional part, $2A$ will be an odd integer, forcing $B$ to be odd."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "Lattice Constraints",
            "content": "Because $I$ and $B$ are integers, Pick's Theorem implies that the area of any lattice polygon must be a multiple of $0.5$. You will never find a lattice polygon with an area of $6.7$, for example!"
        }
    }

];