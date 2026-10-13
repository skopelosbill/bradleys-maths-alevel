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
    "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 1: Taxicab Distance vs Euclidean Distance</strong><br>For any two points $P(x_1, y_1)$ and $Q(x_2, y_2)$ in the Cartesian plane, the Euclidean distance is $$d_E(P, Q)$$ $$= \\sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}$$ The Taxicab distance, $d_T$, measures distance along a grid parallel to the coordinate axes:$$d_T(P, Q)$$ $$= |x_1 - x_2| + |y_1 - y_2|$$For all points in the plane, $d_T(P, Q) \\ge d_E(P, Q)$.</div>Two points in the Cartesian plane are given by $P(1, 2)$ and $Q(7, 10)$.<br><br><strong>(a)</strong> Calculate the exact Euclidean distance $d_E(P, Q)$.<br><br><strong>(b)</strong> Calculate the Taxicab distance $d_T(P, Q)$.<br><br><strong>(c)</strong> State the geometric condition on the coordinates of two distinct points $P$ and $Q$ under which $d_T(P, Q) = d_E(P, Q)$.",
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
    "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 2: The Harmonic Mean</strong><br>The relationship between the Harmonic Mean $H$ and two rates $x$ and $y$ can be expressed as:$$H = \\dfrac{2xy}{x + y}$$Equivalently, the reciprocal of the Harmonic Mean is the arithmetic mean of the reciprocals:$$\\dfrac{1}{H} = \\dfrac{1}{2}\\left(\\dfrac{1}{x} + \\dfrac{1}{y}\\right)$$</div>A delivery van travels at a constant speed of $x\\text{ mph}$ for the outward journey and $y\\text{ mph}$ for the return journey. The true average speed for the total trip is $H = 40\\text{ mph}$.<br><br><strong>(a)</strong> Show that $y = \\dfrac{20x}{x - 20}$.<br><br><strong>(b)</strong> State the horizontal asymptote of the graph of $y$ against $x$, and explain what this represents in the context of the speeds.<br><br><strong>(c)</strong> If $x = 30$, find $y$. If $x = 20$, explain why no real value of $y$ can satisfy the model.",
    "steps": [
        "<strong>(a) Algebraic Rearrangement for $y$:</strong><br><br>Substitute $H = 40$ into the harmonic mean formula:\\begin{aligned} &40 = \\dfrac{2xy}{x + y} \\cr &40(x + y) = 2xy \\cr &20(x + y) = xy \\cr &20x + 20y = xy \\cr &xy - 20y = 20x \\cr &y(x - 20) = 20x \\cr &y = \\dfrac{20x}{x - 20} \\end{aligned}",
        "<strong>(b) Horizontal Asymptote & Physical Context:</strong><br><br>Divide the numerator and denominator by $x$ to examine the behaviour as $x \\to \\infty$:\\begin{aligned} y &= \\dfrac{20}{1 - \\dfrac{20}{x}} \\end{aligned}As $x \\to \\infty$, $\\dfrac{20}{x} \\to 0$, giving:\\begin{aligned} y \\to 20 \\end{aligned}Thus, the horizontal asymptote is $y = 20$.<br><br><strong>Physical meaning:</strong> Even if the outward speed is infinitely fast ($x \\to \\infty$, taking negligible time), the return journey at speed $y$ still takes time $\\dfrac{d}{y}$. To achieve an overall round-trip average of $40\\text{ mph}$, the return speed $y$ must strictly exceed $20\\text{ mph}$. Any return speed $y \\le 20\\text{ mph}$ alone would take as long as or longer than the total time allowed for both legs combined.",
        "<strong>(c) Evaluating Speeds and Domain Failure:</strong><br><br>• For $x = 30$:\\begin{aligned} y &= \\dfrac{20(30)}{30 - 20} \\cr &= \\dfrac{600}{10} \\cr &= 60\\text{ mph} \\end{aligned}<br>• For $x = 20$:\\begin{aligned} y &= \\dfrac{20(20)}{20 - 20} \\cr &= \\dfrac{400}{0} \\end{aligned}This leads to division by zero, so $y$ is undefined.<br><br><strong>Explanation:</strong> Travelling the outward distance $d$ at $20\\text{ mph}$ takes time $t_1 = \\dfrac{d}{20}$. For a total distance of $2d$, an overall average speed of $40\\text{ mph}$ permits a total time of $t_{\\text{total}} = \\dfrac{2d}{40} = \\dfrac{d}{20}$. Because the outward journey alone consumes the entire time budget, the return journey would require zero time, implying an infinite speed ($y \\to \\infty$). No finite speed $y$ can achieve the required average.",
        "Final Answer: <strong>(b)</strong> Asymptote $y = 20$, <strong>(c)</strong> $y = 60\\text{ mph}$ (no solution for $x = 20$ as outward trip uses all allowed time)"
    ],
    "pi_options": [
        {
            "ans": "<strong>(b)</strong> Asymptote $y = 40$, <strong>(c)</strong> $y = 60\\text{ mph}$ (no solution for $x = 20$ as outward trip uses all allowed time)",
            "feedback": "This error occurs in part (b) if you assume the asymptote equals the target average speed H = 40. In fact, as x increases without bound, y approaches 20, which is half of H."
        },
        {
            "ans": "<strong>(b)</strong> Asymptote $y = 20$, <strong>(c)</strong> $y = 50\\text{ mph}$ (no solution for $x = 20$ as outward trip uses all allowed time)",
            "feedback": "This error occurs in part (c) if you evaluate y using the arithmetic mean rather than the formula y = 20x / (x - 20), incorrectly solving 40 = (30 + y) / 2 to give y = 50."
        },
        {
            "ans": "<strong>(b)</strong> Asymptote $y = 20$, <strong>(c)</strong> $y = 60\\text{ mph}$ ($y = 0\\text{ mph}$ when $x = 20$)",
            "feedback": "When x = 20, the denominator is 20 - 20 = 0. Division by zero does not equal 0; it indicates that y approaches infinity, meaning the return journey cannot be completed in the allowable time."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: The Asymptote Barrier in Average Speeds",
        "content": "The horizontal asymptote $y = \\dfrac{H}{2}$ represents an absolute physical threshold. If your outward speed is less than or equal to half your target average speed ($x \\le H/2$), it is mathematically impossible to reach that average speed overall, no matter how fast you travel on the return trip!"
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
    "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 2: The Golden Ratio</strong><br>The Golden Ratio, $\\phi$, describes a proportion where the ratio of the whole segment $(a + b)$ to the larger part $(a)$ is equal to the ratio of the larger part to the smaller part $(b)$:$$\\dfrac{a + b}{a} = \\dfrac{a}{b} = \\phi$$</div><strong>(a)</strong> By letting $b = 1$ and $a = \\phi$, show that the definition above leads to the quadratic equation:$$\\phi^2 - \\phi - 1 = 0$$<strong>(b)</strong> Use the quadratic formula to find the exact value of $\\phi$ in surd form.<br><br><strong>(c)</strong> Show algebraically that $\\phi^2 = \\phi + 1$, and use this result to express $\\phi^3$ in the form $p\\phi + q$, where $p$ and $q$ are integers.",
    "steps": [
        "<strong>(a) Deriving the Quadratic Equation:</strong><br><br>Substitute $a = \\phi$ and $b = 1$ into the ratio relationship:\\begin{aligned} &\\dfrac{\\phi + 1}{\\phi} = \\dfrac{\\phi}{1} \\cr &\\dfrac{\\phi + 1}{\\phi} = \\phi \\end{aligned}Multiply both sides by $\\phi$:\\begin{aligned} &\\phi + 1 = \\phi^2 \\cr &\\phi^2 - \\phi - 1 = 0 \\end{aligned}",
        "<strong>(b) Exact Value of $\\phi$:</strong><br><br>Solve $\\phi^2 - \\phi - 1 = 0$ using the quadratic formula with coefficients $A = 1, B = -1, C = -1$:\\begin{aligned} \\phi &= \\dfrac{-(-1) \\pm \\sqrt{(-1)^2 - 4(1)(-1)}}{2(1)} \\cr &= \\dfrac{1 \\pm \\sqrt{1 + 4}}{2} \\cr &= \\dfrac{1 \\pm \\sqrt{5}}{2} \\end{aligned}Since $\\phi$ represents a geometric ratio of positive lengths ($a, b > 0$), we must have $\\phi > 0$.<br><br>Rejecting the negative root gives:\\begin{aligned} \\phi &= \\dfrac{1 + \\sqrt{5}}{2} \\end{aligned}",
        "<strong>(c) Expressing $\\phi^3$ Linearly:</strong><br><br>From the quadratic equation $\\phi^2 - \\phi - 1 = 0$, adding $\\phi + 1$ to both sides gives:\\begin{aligned} \\phi^2 &= \\phi + 1 \\end{aligned}Multiply both sides by $\\phi$:\\begin{aligned} \\phi^3 &= \\phi(\\phi^2) \\cr &= \\phi(\\phi + 1) \\cr &= \\phi^2 + \\phi \\end{aligned}Substitute $\\phi^2 = \\phi + 1$ into this expression:\\begin{aligned} \\phi^3 &= (\\phi + 1) + \\phi \\cr &= 2\\phi + 1 \\end{aligned}Thus, $p = 2$ and $q = 1$.",
        "Final Answer: <strong>(b)</strong> $\\phi = \\dfrac{1 + \\sqrt{5}}{2}$, <strong>(c)</strong> $\\phi^3 = 2\\phi + 1$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(b)</strong> $\\phi = \\dfrac{1 \\pm \\sqrt{5}}{2}$, <strong>(c)</strong> $\\phi^3 = 2\\phi + 1$",
            "feedback": "This error occurs in part (b) if you fail to reject the negative root. Because phi represents a ratio of geometric lengths, it must be strictly positive (1 - sqrt(5) / 2 is negative)."
        },
        {
            "ans": "<strong>(b)</strong> $\\phi = \\dfrac{1 + \\sqrt{5}}{2}$, <strong>(c)</strong> $\\phi^3 = 3\\phi + 2$",
            "feedback": "This error occurs in part (c) if you evaluate phi^4 instead of phi^3. Using the reduction repeatedly gives phi^3 = 2phi + 1, whereas phi^4 = 3phi + 2."
        },
        {
            "ans": "<strong>(b)</strong> $\\phi = \\dfrac{-1 + \\sqrt{5}}{2}$, <strong>(c)</strong> $\\phi^3 = 2\\phi + 1$",
            "feedback": "This error occurs in part (b) from a sign error in the quadratic formula, taking -B = -1 instead of -(-1) = 1."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Degree Reduction and Fibonacci Coefficients",
        "content": "The relation $\\phi^2 = \\phi + 1$ is an algebraic superpower: it allows any polynomial power of $\\phi$ to be reduced to a linear expression $p\\phi + q$. Notice the coefficients: $\\phi^1 = 1\\phi + 0$, $\\phi^2 = 1\\phi + 1$, $\\phi^3 = 2\\phi + 1$, $\\phi^4 = 3\\phi + 2$, $\\phi^5 = 5\\phi + 3$. The coefficients are the Fibonacci numbers: $\\phi^n = F_n\\phi + F_{n-1}$!"
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
    "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 2: Benford's Law</strong><br>Benford's Law states that the probability $P(d)$ that the first significant digit of a number is $d$, where $d \\in \\{1, 2, \\dots, 9\\}$, is given by:$$P(d) = \\log_{10}\\left(1 + \\dfrac{1}{d}\\right)$$This can be rewritten using the laws of logarithms as $$P(d)$$ $$= \\log_{10}(d + 1) - \\log_{10}(d)$$</div><strong>(a)</strong> Show that the probability of the first digit being $1$ is approximately $30.1\\%$.<br><br><strong>(b)</strong> Find the exact probability that the first digit is either $1$ or $2$, expressing your answer in the form $\\log_{10} A$, where $A$ is an integer.<br><br><strong>(c)</strong> Show that $$P(d) + P(d+1)$$ $$= \\log_{10}\\left(\\dfrac{d+2}{d}\\right)$$",
    "steps": [
        "<strong>(a) Probability of First Digit Being 1:</strong><br><br>Substitute $d = 1$ into Benford's Law:\\begin{aligned} P(1) &= \\log_{10}\\left(1 + \\dfrac{1}{1}\\right) \\cr &= \\log_{10}(2) \\cr &\\approx 0.30103 \\end{aligned}Converting this to a percentage:\\begin{aligned} P(1) &= 0.30103 \\times 100\\% \\cr &\\approx 30.1\\% \\end{aligned}",
        "<strong>(b) Combined Probability $P(1) + P(2)$:</strong><br><br>Evaluate $P(2)$ using the formula:\\begin{aligned} P(2) &= \\log_{10}\\left(1 + \\dfrac{1}{2}\\right) \\cr &= \\log_{10}\\left(\\dfrac{3}{2}\\right) \\end{aligned}Since the events of having first digit $1$ and first digit $2$ are mutually exclusive, add their probabilities:\\begin{aligned} P(1 \\text{ or } 2) &= P(1) + P(2) \\cr &= \\log_{10}(2) + \\log_{10}\\left(\\dfrac{3}{2}\\right) \\end{aligned}Apply the logarithm addition rule $\\log_{10}(u) + \\log_{10}(v) = \\log_{10}(uv)$:\\begin{aligned} P(1 \\text{ or } 2) &= \\log_{10}\\left(2 \\times \\dfrac{3}{2}\\right) \\cr &= \\log_{10}(3) \\end{aligned}Thus, $A = 3$ (which gives $\\approx 47.7\\%$ of all leading digits).",
        "<strong>(c) Proving the Telescoping Identity:</strong><br><br>Express each probability using the difference form from the extract:\\begin{aligned} &P(d)\\cr &= \\log_{10}(d + 1) - \\log_{10}(d) \\cr &P(d+1) \\cr &= \\log_{10}(d + 2) - \\log_{10}(d + 1) \\end{aligned}Add the two expressions together:\\begin{aligned} &P(d) + P(d+1) \\cr &\\quad = [\\log_{10}(d + 1) - \\log_{10}(d)] \\cr &\\qquad + [\\log_{10}(d + 2) - \\log_{10}(d + 1)] \\cr &\\quad = \\log_{10}(d + 2) - \\log_{10}(d) \\cr &\\quad = \\log_{10}\\left(\\dfrac{d+2}{d}\\right) \\end{aligned}",
        "Final Answer: <strong>(b)</strong> $\\log_{10}(3)$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(b)</strong> $\\log_{10}(5)$",
            "feedback": "This error occurs if you mistakenly add the arguments of the logarithms rather than multiplying them, incorrectly writing log_10(2) + log_10(3) = log_10(5)."
        },
        {
            "ans": "<strong>(b)</strong> $\\log_{10}(2.5)$",
            "feedback": "This error occurs if you add 2 and 0.5 inside a single logarithm rather than applying the law log_10(u) + log_10(v) = log_10(uv)."
        },
        {
            "ans": "<strong>(b)</strong> $\\log_{10}(6)$",
            "feedback": "This error occurs if you calculate P(2) as log_10(3) rather than log_10(3/2), evaluating log_10(2) + log_10(3) = log_10(6)."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Telescoping Logs and Benford's Law",
        "content": "The expression $P(d) = \\log_{10}(d+1) - \\log_{10}(d)$ is a classic telescoping series. When you sum all probabilities from $d = 1$ to $9$, every intermediate term cancels out: \\begin{aligned}&(\\log 2 - \\log 1) + (\\log 3 - \\log 2)\\cr & \\quad + \\dots + (\\log 10 - \\log 9)\\cr & \\quad = \\log 10 - \\log 1 \\cr & \\quad = 1 - 0 = 1\\end{aligned} This proves that the total probability over all digits is exactly $1$!"
    }
},
{
    "id": "009009",
    "group_id": "009006",
    "board": "OCR MEI",
    "branch": "Comprehension",
    "level": "A",
    "major_area": "Coordinate Geometry",
    "topic": "Taxicab Geometry",
    "subtopic": [
        "Locus of Points",
        "Modulus Equations"
    ],
    "img": false,
    "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 2: The Taxicab Metric</strong><br>In Taxicab geometry, the distance between two points $P(x_1, y_1)$ and $Q(x_2, y_2)$ is defined as:$$d_T(P, Q)$$ $$= |x_1 - x_2| + |y_1 - y_2|$$A 'Taxicab Circle' is the locus of all points $(x, y)$ such that $d_T((x, y), (h, k)) = r$.</div>Consider a Taxicab circle centred at the origin $(0, 0)$ with radius $r = 4$.<br><br><strong>(a)</strong> Write down the equation of this locus using modulus notation.<br><br><strong>(b)</strong> Find the coordinates of the four points where this locus intersects the $x$ and $y$ axes.<br><br><strong>(c)</strong> By considering the case where $x$ and $y$ are both positive, show that the locus in the first quadrant is a straight line segment, and state its equation in the form $y = mx + c$.",
    "steps": [
        "<strong>(a) Locus Equation:</strong><br><br>Substitute the centre $(h, k) = (0, 0)$ and radius $r = 4$ into the Taxicab distance formula:\\begin{aligned} &d_T((x, y), (0, 0)) = 4 \\cr &|x - 0| + |y - 0| = 4 \\cr &|x| + |y| = 4 \\end{aligned}",
        "<strong>(b) Axis Intersections:</strong><br><br>• $x$-axis intersections ($y = 0$):\\begin{aligned} &|x| + |0| = 4 \\cr &|x| = 4 \\cr &x = \\pm 4 \\implies (4, 0)\\text{ and }(-4, 0) \\end{aligned}<br>• $y$-axis intersections ($x = 0$):\\begin{aligned} &|0| + |y| = 4 \\cr &|y| = 4 \\cr &y = \\pm 4 \\implies (0, 4)\\text{ and }(0, -4) \\end{aligned}Thus, the four intersection points are $(4, 0), (-4, 0), (0, 4), (0, -4)$.",
        "<strong>(c) First Quadrant Segment:</strong><br><br>In the first quadrant, $x > 0$ and $y > 0$, so by definition of modulus:\\begin{aligned} |x| &= x \\cr |y| &= y \\end{aligned}The equation $|x| + |y| = 4$ becomes:\\begin{aligned} &x + y = 4 \\cr &y = -x + 4 \\end{aligned}Since $x \\ge 0$ and $y \\ge 0$, this is a straight line segment bounded by $0 \\le x \\le 4$, with gradient $m = -1$ and $y$-intercept $c = 4$.",
        "Final Answer: <strong>(a)</strong> $|x| + |y| = 4$, <strong>(b)</strong> $(\\pm 4, 0)\\text{ and }(0, \\pm 4)$, <strong>(c)</strong> $y = -x + 4$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $x^2 + y^2 = 16$, <strong>(b)</strong> $(\\pm 4, 0)\\text{ and }(0, \\pm 4)$, <strong>(c)</strong> $y = -x + 4$",
            "feedback": "This error occurs in part (a) if you revert to the standard Euclidean circle equation x^2 + y^2 = r^2. In Taxicab geometry, distance is defined by moduli, yielding |x| + |y| = 4."
        },
        {
            "ans": "<strong>(a)</strong> $|x| + |y| = 4$, <strong>(b)</strong> $(\\pm 2, 0)\\text{ and }(0, \\pm 2)$, <strong>(c)</strong> $y = -x + 4$",
            "feedback": "This error occurs in part (b) if you take square roots of the radius (treating 4 as r^2), giving intercepts at (+-2, 0) instead of (+-4, 0)."
        },
        {
            "ans": "<strong>(a)</strong> $|x| + |y| = 4$, <strong>(b)</strong> $(\\pm 4, 0)\\text{ and }(0, \\pm 4)$, <strong>(c)</strong> $y = x - 4$",
            "feedback": "This error occurs in part (c) from an algebraic sign slip when rearranging x + y = 4, writing y = x - 4 instead of y = -x + 4."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: The Square Nature of Taxicab Circles",
        "content": "A 'Taxicab Circle' does not look like a smooth Euclidean circle—it is a diamond (a square tilted at $45^\\circ$)! Repeating the quadrant analysis for all four signs of $x$ and $y$ gives four straight line segments: $y = -x + 4$, $y = x + 4$, $y = -x - 4$, and $y = x - 4$. Its total perimeter is $4 \\times \\sqrt{4^2 + 4^2} = 16\\sqrt{2}$ in Euclidean distance, but in Taxicab distance each edge has length $4 + 4 = 8$, giving perimeter $8r = 32$!"
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
    "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 2: Pick's Theorem</strong><br>Pick's Theorem relates the Area ($A$) of a simple lattice polygon to the number of interior points ($I$) and boundary points ($B$):$$A = I + \\dfrac{B}{2} - 1$$</div><strong>(a)</strong> Rearrange the formula to express $B$ in terms of $A$ and $I$.<br><br><strong>(b)</strong> A lattice polygon has an area of $6.5\\text{ square units}$. Explain, by referring to the formula, why the number of boundary points $B$ must be an odd number.<br><br><strong>(c)</strong> If a lattice polygon has no interior points ($I = 0$), show that the minimum number of boundary points required to form a valid polygon is $B = 3$, and state the area of such a polygon.",
    "steps": [
        "<strong>(a) Rearranging for $B$:</strong><br><br>Isolate the term containing $B$:\\begin{aligned} &A = I + \\dfrac{B}{2} - 1 \\cr &A - I + 1 = \\dfrac{B}{2} \\cr &B = 2(A - I + 1) \\cr &B = 2A - 2I + 2 \\end{aligned}",
        "<strong>(b) Proving $B$ is Odd when $A = 6.5$:</strong><br><br>Substitute $A = 6.5$ into the rearranged expression for $B$:\\begin{aligned} B &= 2(6.5) - 2I + 2 \\cr &= 13 - 2I + 2 \\cr &= 15 - 2I \\end{aligned}Since $I$ is the count of interior points, $I$ is an integer ($I \\in \\mathbb{Z}$), which means $2I$ is always an even integer.<br><br>Subtracting an even integer ($2I$) from an odd integer ($15$) always produces an odd integer:\\begin{aligned} \\text{odd} - \\text{even} &= \\text{odd} \\end{aligned}Therefore, $B$ must be an odd number.",
        "<strong>(c) Minimum Boundary Points and Elementary Area:</strong><br><br>A polygon in two dimensions must have at least $3$ non-collinear vertices to enclose a non-zero area (forming a triangle).<br><br>Since every vertex of a lattice polygon must be a lattice point on its boundary, a valid polygon must have at least $3$ boundary points:\\begin{aligned} B \\ge 3 \\end{aligned}Thus, the minimum number of boundary points is $B = 3$.<br><br>When $I = 0$ and $B = 3$, calculate the area using Pick's Theorem:\\begin{aligned} A &= 0 + \\dfrac{3}{2} - 1 \\cr &= 1.5 - 1 \\cr &= 0.5\\text{ square units} \\end{aligned}This is known as an 'elementary triangle' and represents the minimum non-zero area achievable by any lattice polygon.",
        "Final Answer: <strong>(a)</strong> $B = 2A - 2I + 2$, <strong>(b)</strong> $B = 15 - 2I$ (odd), <strong>(c)</strong> Min $B = 3$, $\\text{Area} = 0.5$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $B = 2A - 2I - 2$, <strong>(b)</strong> $B = 11 - 2I$ (odd), <strong>(c)</strong> Min $B = 3$, $\\text{Area} = 0.5$",
            "feedback": "This error occurs in part (a) from a sign slip when moving the -1 term across the equation, writing B = 2(A - I - 1) instead of 2(A - I + 1)."
        },
        {
            "ans": "<strong>(a)</strong> $B = 2A - 2I + 2$, <strong>(b)</strong> $B = 15 - 2I$ (odd), <strong>(c)</strong> Min $B = 4$, $\\text{Area} = 1.0$",
            "feedback": "This error occurs in part (c) by assuming the simplest polygon is a unit square rather than a triangle. The minimal 2D polygon has 3 vertices, giving B = 3 and Area = 0.5."
        },
        {
            "ans": "<strong>(a)</strong> $B = 2A - I + 1$, <strong>(b)</strong> $B = 14 - I$ (even), <strong>(c)</strong> Min $B = 3$, $\\text{Area} = 0.5$",
            "feedback": "This error occurs in part (a) by failing to distribute the factor of 2 to all terms when clearing the fraction B/2."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Half-Integers and Elementary Polygons",
        "content": "Pick's Theorem reveals that the area of any lattice polygon must be a multiple of $0.5$! Notice that $A = I + \\dfrac{B}{2} - 1$ means $2A = 2I + B - 2$, which is always an integer. An area of $0.5$ (achieved when $I = 0, B = 3$) is the fundamental 'quantum' of lattice area—no lattice polygon can ever have an area smaller than $0.5$."
    }
},
{
    "id": "009011",
    "group_id": "009011",
    "board": "OCR MEI",
    "branch": "Comprehension",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "The Harmonic Mean",
    "subtopic": [
        "Deductive Proof",
        "Mean Inequalities"
    ],
    "img": false,
    "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 3: The Arithmetic-Harmonic Mean Inequality</strong><br>For any two positive real numbers $x$ and $y$, the Arithmetic Mean is $A = \\dfrac{x + y}{2}$ and the Harmonic Mean is $H = \\dfrac{2xy}{x + y}$.<br><br>Because the square of any real number is non-negative, $(x - y)^2 \\ge 0$ for all $x, y \\in \\mathbb{R}$, with equality holding if and only if $x = y$.</div><strong>(a)</strong> Starting from the expansion of $(x - y)^2 \\ge 0$, prove algebraically that:$$(x + y)^2 \\ge 4xy$$for all real numbers $x$ and $y$.<br><br><strong>(b)</strong> For positive numbers $x > 0$ and $y > 0$, divide both sides of this inequality by $2(x + y)$ to deduce that:$$A \\ge H$$<strong>(c)</strong> State the necessary and sufficient condition on $x$ and $y$ for $A = H$.",
    "steps": [
        "<strong>(a) Algebraic Proof of $(x + y)^2 \\ge 4xy$:</strong><br><br>Start with the fundamental inequality:\\begin{aligned} &(x - y)^2 \\ge 0 \\cr &x^2 - 2xy + y^2 \\ge 0 \\cr &x^2 + y^2 \\ge 2xy \\end{aligned}Add $2xy$ to both sides:\\begin{aligned} &x^2 + 2xy + y^2 \\ge 4xy \\cr &(x + y)^2 \\ge 4xy \\end{aligned}",
        "<strong>(b) Deducing $A \\ge H$:</strong><br><br>Since $x > 0$ and $y > 0$, the sum $x + y > 0$, so $2(x + y) > 0$.<br><br>Divide both sides by $2(x + y)$:\\begin{aligned} &\\dfrac{(x + y)^2}{2(x + y)} \\cr &\\quad \\ge \\dfrac{4xy}{2(x + y)} \\cr &\\dfrac{x + y}{2} \\ge \\dfrac{2xy}{x + y} \\cr &A \\ge H \\end{aligned}",
        "<strong>(c) Equality Condition:</strong><br><br>Tracing back through the derivation, equality holds if and only if the initial squared term vanishes:\\begin{aligned} &(x - y)^2 = 0 \\cr &x - y = 0 \\cr &x = y \\end{aligned}Thus, the Arithmetic Mean equals the Harmonic Mean if and only if $x = y$.",
        "Final Answer: <strong>(a)</strong> $(x + y)^2 \\ge 4xy$, <strong>(b)</strong> $A \\ge H$, <strong>(c)</strong> $x = y$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $(x + y)^2 \\ge 4xy$, <strong>(b)</strong> $A \\ge H$, <strong>(c)</strong> $xy = 1$",
            "feedback": "This error occurs in part (c) if you assume equality requires the geometric mean or product to equal 1. Tracing back to the initial line (x - y)^2 >= 0 reveals that equality occurs strictly when (x - y)^2 = 0, which requires x = y."
        },
        {
            "ans": "<strong>(a)</strong> $(x + y)^2 \\ge 4xy$, <strong>(b)</strong> $H \\ge A$, <strong>(c)</strong> $x = y$",
            "feedback": "This error inverts the inequality in part (b). Because dividing by positive 2(x + y) preserves inequality direction, (x + y)/2 >= 2xy/(x + y), which proves that A >= H (the Arithmetic Mean is always greater than or equal to the Harmonic Mean)."
        },
        {
            "ans": "<strong>(a)</strong> $(x + y)^2 \\le 4xy$, <strong>(b)</strong> $A \\ge H$, <strong>(c)</strong> $x = y$",
            "feedback": "This error occurs in part (a) from an incorrect rearrangement. Expanding (x - y)^2 >= 0 gives x^2 + y^2 >= 2xy. Adding 2xy to both sides yields (x + y)^2 >= 4xy, not <= 4xy."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Divisor Positivity in Proofs",
        "content": "In part (b), students frequently divide by $2(x + y)$ without stating that $x + y > 0$. In A-Level proof questions, you must explicitly justify why the inequality direction is preserved: dividing an inequality by an expression whose sign is unknown is an instant mark-loss trap."
    }
},
{
    "id": "009012",
    "group_id": "009011",
    "board": "OCR MEI",
    "branch": "Comprehension",
    "level": "A",
    "major_area": "Sequences and Series",
    "topic": "The Golden Ratio",
    "subtopic": [
        "Fibonacci Recurrence",
        "Deductive Limits"
    ],
    "img": false,
    "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 3: Limit of Consecutive Fibonacci Ratios</strong><br>The Fibonacci sequence satisfies the recurrence relation $F_{n+1} = F_n + F_{n-1}$ for $n \\ge 2$, with initial terms $F_1 = 1$ and $F_2 = 1$.<br><br>The ratio of consecutive terms is defined as $R_n = \\dfrac{F_{n+1}}{F_n}$. If a sequence defined by a recurrence relation converges to a finite positive limit $L$, then $$\\lim_{n \\to \\infty} R_n$$ $$= \\lim_{n \\to \\infty} R_{n-1} = L$$</div><strong>(a)</strong> By dividing both sides of the recurrence relation $F_{n+1} = F_n + F_{n-1}$ by $F_n$, show that:$$R_n = 1 + \\dfrac{1}{R_{n-1}}$$<strong>(b)</strong> Assuming that the sequence of ratios converges to a finite positive limit $L$, take limits as $n \\to \\infty$ on both sides of this equation to form a quadratic equation in $L$.<br><br><strong>(c)</strong> Deduce that $L = \\phi$, where $\\phi = \\dfrac{1 + \\sqrt{5}}{2}$, explaining clearly why the negative root must be rejected.",
    "steps": [
        "<strong>(a) Recurrence for Ratios $R_n$:</strong><br><br>Divide the Fibonacci recurrence by $F_n$:\\begin{aligned} &\\dfrac{F_{n+1}}{F_n} = \\dfrac{F_n + F_{n-1}}{F_n} \\cr &\\dfrac{F_{n+1}}{F_n} = 1 + \\dfrac{F_{n-1}}{F_n} \\end{aligned}Recognise that $\\dfrac{F_n}{F_{n-1}} = R_{n-1}$, so its reciprocal is:\\begin{aligned} &\\dfrac{F_{n-1}}{F_n} = \\dfrac{1}{R_{n-1}} \\end{aligned}Substitute this into the equation:\\begin{aligned} &R_n = 1 + \\dfrac{1}{R_{n-1}} \\end{aligned}",
        "<strong>(b) Quadratic Equation in $L$:</strong><br><br>Take the limit as $n \\to \\infty$ on both sides:\\begin{aligned} &\\lim_{n \\to \\infty} R_n \\cr &\\quad = 1 + \\dfrac{1}{\\lim_{n \\to \\infty} R_{n-1}} \\cr &L = 1 + \\dfrac{1}{L} \\end{aligned}Multiply through by $L$ (since $L \\ne 0$):\\begin{aligned} &L^2 = L + 1 \\cr &L^2 - L - 1 = 0 \\end{aligned}",
        "<strong>(c) Deducing $L = \\phi$:</strong><br><br>Solve $L^2 - L - 1 = 0$ using the quadratic formula:\\begin{aligned} L &= \\dfrac{-(-1) \\pm \\sqrt{(-1)^2 - 4(1)(-1)}}{2(1)} \\cr &= \\dfrac{1 \\pm \\sqrt{5}}{2} \\end{aligned}Because all Fibonacci numbers are positive ($F_n > 0$ for all $n$), the ratio $R_n = \\dfrac{F_{n+1}}{F_n} > 0$.<br><br>Therefore, the limit must satisfy $L \\ge 0$.<br><br>Since $\\sqrt{5} > 1$, the root $\\dfrac{1 - \\sqrt{5}}{2} < 0$. We must reject this negative root.<br><br>Hence:$$L = \\dfrac{1 + \\sqrt{5}}{2} = \\phi$$",
        "Final Answer: <strong>(a)</strong> $R_n = 1 + \\dfrac{1}{R_{n-1}}$, <strong>(b)</strong> $L^2 - L - 1 = 0$, <strong>(c)</strong> $L = \\dfrac{1 + \\sqrt{5}}{2}$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $R_n = 1 + \\dfrac{1}{R_{n-1}}$, <strong>(b)</strong> $L^2 + L - 1 = 0$, <strong>(c)</strong> $L = \\dfrac{-1 + \\sqrt{5}}{2}$",
            "feedback": "This error occurs in part (b) from an algebraic sign error when rearranging L = 1 + 1/L, incorrectly writing L^2 + L - 1 = 0 instead of L^2 - L - 1 = 0."
        },
        {
            "ans": "<strong>(a)</strong> $R_n = 1 + \\dfrac{1}{R_{n-1}}$, <strong>(b)</strong> $L^2 - L - 1 = 0$, <strong>(c)</strong> $L = \\dfrac{1 \\pm \\sqrt{5}}{2}$",
            "feedback": "This error occurs in part (c) if you fail to reject the negative root. Because all Fibonacci numbers are positive, the sequence of ratios consists strictly of positive numbers, forcing the limit L to be positive."
        },
        {
            "ans": "<strong>(a)</strong> $R_n = 1 + R_{n-1}$, <strong>(b)</strong> $L^2 - L - 1 = 0$, <strong>(c)</strong> $L = \\dfrac{1 + \\sqrt{5}}{2}$",
            "feedback": "This error occurs in part (a) by failing to invert the ratio, incorrectly writing F_(n-1) / F_n as R_(n-1) instead of 1 / R_(n-1)."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Limit Equality in Recurrence Relations",
        "content": "The step $$\\lim_{n \\to \\infty} R_n$$ $$= \\lim_{n \\to \\infty} R_{n-1} = L$$ is standard in A-Level and university analysis. If a sequence settles down to a steady-state limit $L$, shifting the index backwards by one step does not change the destination."
    }
},
{
    "id": "009013",
    "group_id": "009011",
    "board": "OCR MEI",
    "branch": "Comprehension",
    "level": "A",
    "major_area": "Exponentials and Logarithms",
    "topic": "Benford's Law",
    "subtopic": [
        "Deductive Proof",
        "Telescoping Sums"
    ],
    "img": false,
    "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 3: The Total Probability of Benford's Distribution</strong><br>Benford's Law states that the probability of the first significant digit being $d \\in \\{1, 2, \\dots, 9\\}$ is given by:\\begin{aligned}P(d) &= \\log_{10}\\left(1 + \\dfrac{1}{d}\\right)\\cr & = \\log_{10}\\left(\\dfrac{d + 1}{d}\\right)\\end{aligned}A fundamental axiom of probability requires that the sum of the probabilities of all mutually exclusive and exhaustive outcomes must equal $1$.</div><strong>(a)</strong> Using the quotient law of logarithms, express the total probability $\\sum_{d=1}^{9} P(d)$ as a sum of logarithmic differences:$$\\sum_{d=1}^{9} \\big[ \\log_{10}(d + 1) - \\log_{10}(d) \\big]$$<strong>(b)</strong> Write out the first two terms and the final two terms of this expansion, and prove algebraically that the sum telescopes to $\\log_{10}(10)$.<br><br><strong>(c)</strong> Hence, deduce that $\\sum_{d=1}^{9} P(d) = 1$, verifying that Benford's Law forms a mathematically valid probability distribution.",
    "steps": [
        "<strong>(a) Expressing as Logarithmic Differences:</strong><br><br>Apply the quotient law $\\log_{10}\\left(\\dfrac{u}{v}\\right) = \\log_{10}(u) - \\log_{10}(v)$:\\begin{aligned} P(d) &= \\log_{10}\\left(\\dfrac{d + 1}{d}\\right) \\cr &= \\log_{10}(d + 1) - \\log_{10}(d) \\end{aligned}Summing from $d = 1$ to $9$:\\begin{aligned} &\\sum_{d=1}^{9} P(d) \\cr &\\quad = \\sum_{d=1}^{9} [\\log_{10}(d + 1) - \\log_{10}(d)] \\end{aligned}",
        "<strong>(b) Telescoping Sum Expansion:</strong><br><br>Write out the terms explicitly:\\begin{aligned} &d = 1: \\; \\log_{10}(2) - \\log_{10}(1) \\cr &d = 2: \\; \\log_{10}(3) - \\log_{10}(2) \\cr &\\quad \\vdots \\cr &d = 8: \\; \\log_{10}(9) - \\log_{10}(8) \\cr &d = 9: \\; \\log_{10}(10) - \\log_{10}(9) \\end{aligned}Adding these terms together, all intermediate terms cancel pairwise:\\begin{aligned} &\\sum_{d=1}^{9} P(d) \\cr &\\quad = [\\log_{10}(2) - \\log_{10}(1)] \\cr &\\qquad + [\\log_{10}(3) - \\log_{10}(2)] \\cr &\\qquad + \\dots \\cr &\\qquad + [\\log_{10}(10) - \\log_{10}(9)] \\cr &\\quad = \\log_{10}(10) - \\log_{10}(1) \\end{aligned}Since $\\log_{10}(1) = 0$, the sum telescopes to:\\begin{aligned} \\sum_{d=1}^{9} P(d) &= \\log_{10}(10) \\end{aligned}",
        "<strong>(c) Verifying Valid Probability Distribution:</strong><br><br>Evaluate the base-10 logarithm:\\begin{aligned} \\log_{10}(10) &= 1 \\end{aligned}Therefore:\\begin{aligned} \\sum_{d=1}^{9} P(d) &= 1 \\end{aligned}Since every probability is non-negative ($P(d) > 0$ for all $d \\in \\{1, \\dots, 9\\}$) and the total probability equals $1$, Benford's Law satisfies Kolmogorov's axioms and forms a valid discrete probability distribution.",
        "Final Answer: <strong>(b)</strong> Telescopes to $\\log_{10}(10) - \\log_{10}(1) = \\log_{10}(10)$, <strong>(c)</strong> $\\sum_{d=1}^{9} P(d) = 1$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(b)</strong> Telescopes to $\\log_{10}(9) - \\log_{10}(1) = \\log_{10}(9)$, <strong>(c)</strong> $\\sum_{d=1}^{9} P(d) = 0.954$",
            "feedback": "This error occurs in part (b) by failing to evaluate the upper limit at d = 9 properly, using log_10(d) instead of log_10(d + 1) for the positive leading term, which gives log_10(9) instead of log_10(10)."
        },
        {
            "ans": "<strong>(b)</strong> Telescopes to $\\log_{10}(10) - \\log_{10}(1) = \\log_{10}(10)$, <strong>(c)</strong> $\\sum_{d=1}^{9} P(d) = 10$",
            "feedback": "This error occurs in part (c) if you evaluate log_10(10) as 10 rather than 1. Base-10 log of 10 is 1, which represents 100% total probability."
        },
        {
            "ans": "<strong>(b)</strong> Telescopes to $\\log_{10}(10) + \\log_{10}(1) = \\log_{10}(10)$, <strong>(c)</strong> $\\sum_{d=1}^{9} P(d) = 1$",
            "feedback": "This error occurs in part (b) by writing an addition sign instead of subtraction between the boundary terms. In telescoping differences, the lower boundary term carries a negative sign: -log_10(1)."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: The Beauty of Telescoping Sums",
        "content": "A telescoping sum collapses just like an antique folding telescope: each positive term is cancelled by the negative term of the subsequent step. Only the very first tail term and very last head term survive:\\begin{aligned}&\\sum_{d=1}^n [f(d+1) - f(d)]\\cr & \\qquad = f(n+1) - f(1)\\end{aligned}"
    }
},
{
    "id": "009014",
    "group_id": "009011",
    "board": "OCR MEI",
    "branch": "Comprehension",
    "level": "A",
    "major_area": "Coordinate Geometry",
    "topic": "Taxicab Geometry",
    "subtopic": [
        "Deductive Proof",
        "Metric Axioms"
    ],
    "img": false,
    "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 3: The Triangle Inequality in Metric Spaces</strong><br>In any valid metric geometry, the distance between two points cannot be shortened by travelling via an intermediate point.<br><br>For any three points $P(x_1, y_1)$, $Q(x_2, y_2)$, and $R(x_3, y_3)$, the Triangle Inequality states:$$d(P, R)$$ $$\\le d(P, Q) + d(Q, R)$$The scalar modulus satisfies the triangle inequality $|u + v| \\le |u| + |v|$ for all real numbers $u, v \\in \\mathbb{R}$.</div><strong>(a)</strong> By writing $$x_1 - x_3$$ $$= (x_1 - x_2) + (x_2 - x_3)$$ prove using the scalar modulus inequality that:$$|x_1 - x_3|$$ $$\\le |x_1 - x_2| + |x_2 - x_3|$$<strong>(b)</strong> Using the definition of the Taxicab metric $$d_T(A, B)$$ $$= |x_A - x_B| + |y_A - y_B|$$ prove that:$$d_T(P, R)$$ $$\\le d_T(P, Q) + d_T(Q, R)$$<strong>(c)</strong> State the geometric condition under which the equality $$d_T(P, R)$$ $$= d_T(P, Q) + d_T(Q, R)$$ holds.",
    "steps": [
        "<strong>(a) Scalar Modulus Inequality:</strong><br><br>Let $u = x_1 - x_2$ and $v = x_2 - x_3$.<br><br>Add $u$ and $v$:\\begin{aligned} u + v &= (x_1 - x_2) + (x_2 - x_3) \\cr &= x_1 - x_3 \\end{aligned}Apply the scalar modulus inequality $|u + v| \\le |u| + |v|$:\\begin{aligned} &|(x_1 - x_2) + (x_2 - x_3)| \\cr &\\quad \\le |x_1 - x_2| + |x_2 - x_3| \\cr &|x_1 - x_3| \\le |x_1 - x_2| + |x_2 - x_3| \\end{aligned}",
        "<strong>(b) Taxicab Triangle Inequality:</strong><br><br>By definition of the Taxicab distance:\\begin{aligned} &d_T(P, R) = |x_1 - x_3| + |y_1 - y_3| \\end{aligned}Applying the result from part (a) to both coordinates:\\begin{aligned} &|x_1 - x_3| \\le |x_1 - x_2| + |x_2 - x_3| \\cr &|y_1 - y_3| \\le |y_1 - y_2| + |y_2 - y_3| \\end{aligned}Add these two inequalities together:\\begin{aligned} &d_T(P, R) \\cr &\\quad \\le [|x_1 - x_2| + |x_2 - x_3|] \\cr &\\qquad + [|y_1 - y_2| + |y_2 - y_3|] \\cr &\\quad = [|x_1 - x_2| + |y_1 - y_2|] \\cr &\\qquad + [|x_2 - x_3| + |y_2 - y_3|] \\cr &\\quad = d_T(P, Q) + d_T(Q, R) \\end{aligned}",
        "<strong>(c) Geometric Condition for Equality:</strong><br><br>In the scalar modulus inequality $|u + v| = |u| + |v|$, equality holds if and only if $u$ and $v$ have the same sign ($uv \\ge 0$).<br><br>For Taxicab distance, this requires:\\begin{aligned} &(x_1 - x_2)(x_2 - x_3) \\ge 0 \\cr &(y_1 - y_2)(y_2 - y_3) \\ge 0 \\end{aligned}Geometrically, this means $x_2$ lies between $x_1$ and $x_3$, and $y_2$ lies between $y_1$ and $y_3$.<br><br>Therefore, equality holds if and only if $Q$ lies inside or on the boundary of the bounding box (rectangle with sides parallel to axes) formed by $P$ and $R$.",
        "Final Answer: <strong>(b)</strong> $d_T(P, R) \\le d_T(P, Q) + d_T(Q, R)$, <strong>(c)</strong> $Q$ lies within the bounding box formed by $P$ and $R$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(b)</strong> $d_T(P, R) \\le d_T(P, Q) + d_T(Q, R)$, <strong>(c)</strong> $Q$ lies strictly on the straight line segment connecting $P$ and $R$",
            "feedback": "This is a classic Euclidean misconception. In Euclidean geometry, equality requires Q to lie on the straight line segment PR. In Taxicab geometry, because motion is along a grid, ANY point Q within the entire bounding box formed by P and R yields the exact same minimal grid distance."
        },
        {
            "ans": "<strong>(b)</strong> $d_T(P, R) \\ge d_T(P, Q) + d_T(Q, R)$, <strong>(c)</strong> $Q$ lies within the bounding box formed by $P$ and $R$",
            "feedback": "This error inverts the triangle inequality in part (b). A fundamental property of all metric spaces is that direct distance is less than or equal to detour distance, so d_T(P, R) <= d_T(P, Q) + d_T(Q, R)."
        },
        {
            "ans": "<strong>(b)</strong> $d_T(P, R) \\le d_T(P, Q) + d_T(Q, R)$, <strong>(c)</strong> $Q$ is equidistant from $P$ and $R$",
            "feedback": "This error confuses the triangle inequality equality condition with the definition of a midpoint or perpendicular bisector. Equality holds whenever Q does not require moving backwards along either coordinate axis."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Euclidean vs Taxicab Geodesics",
        "content": "In Euclidean geometry, the shortest path between two points is unique (the straight line segment). In Taxicab geometry, there are infinitely many shortest paths between $P$ and $R$! Any monotonic staircase path that stays within the bounding box rectangle has the exact same minimum distance $d_T(P, R)$."
    }
},
{
    "id": "009015",
    "group_id": "009011",
    "board": "OCR MEI",
    "branch": "Comprehension",
    "level": "A",
    "major_area": "Geometry and Proof",
    "topic": "Pick's Theorem",
    "subtopic": [
        "Deductive Proof",
        "Additive Invariance"
    ],
    "img": false,
    "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 3: Additivity and Invariance of Pick's Area</strong><br>Pick's Theorem states that the area of a simple lattice polygon is $A = I + \\dfrac{B}{2} - 1$.<br><br>When two simple lattice polygons $P_1$ and $P_2$ share a common boundary edge containing $k$ lattice points (including the two shared end vertices), they combine to form a new simple polygon $P_{1+2}$ whose area is $A_{1+2} = A_1 + A_2$.</div><strong>(a)</strong> For an axis-aligned rectangle with integer side lengths $m$ and $n$, express the number of strictly interior lattice points $I$ and boundary lattice points $B$ in terms of $m$ and $n$.<br><br><strong>(b)</strong> Substitute your expressions for $I$ and $B$ from part (a) into Pick's formula, and expand algebraically to prove that $A = mn$.<br><br><strong>(c)</strong> If two simple lattice polygons $P_1$ and $P_2$ have boundary point counts $B_1$ and $B_2$ respectively and share a common boundary of $k$ lattice points, show that the boundary count of the combined polygon $P_{1+2}$ is:$$B_{1+2} = B_1 + B_2 - 2k + 2$$",
    "steps": [
        "<strong>(a) Lattice Points of an $m \\times n$ Rectangle:</strong><br><br>Consider an axis-aligned rectangle spanning $m$ units horizontally and $n$ units vertically:<br><br>• Interior points $I$: The strictly interior grid points form a grid of $(m - 1) \\times (n - 1)$ points:\\begin{aligned} I &= (m - 1)(n - 1) \\end{aligned}<br>• Boundary points $B$: The perimeter consists of two horizontal sides of length $m$ and two vertical sides of length $n$:\\begin{aligned} B &= 2m + 2n \\end{aligned}",
        "<strong>(b) Algebraic Proof of Pick's Formula for Rectangles:</strong><br><br>Substitute $I = (m - 1)(n - 1)$ and $B = 2m + 2n$ into Pick's formula:\\begin{aligned} A &= I + \\dfrac{B}{2} - 1 \\cr &= (m - 1)(n - 1) \\cr & \\qquad + \\dfrac{2m + 2n}{2} - 1 \\cr &= (mn - m - n + 1) \\cr & \\qquad + (m + n) - 1 \\cr &= mn - m - n + 1 + m + n - 1 \\cr &= mn \\end{aligned}This matches the geometric area of the rectangle, proving Pick's Theorem for rectangles.",
        "<strong>(c) Combined Boundary Formula:</strong><br><br>When $P_1$ and $P_2$ are glued along a shared path of $k$ lattice points:<br><br>• The $k - 2$ strictly intermediate shared points are enclosed inside the interior of $P_{1+2}$ and are no longer on the boundary.<br><br>• The $2$ shared endpoint vertices remain on the boundary of $P_{1+2}$, but are counted in both $B_1$ and $B_2$.<br><br>Calculate the boundary points of $P_{1+2}$:\\begin{aligned} B_{1+2} &= (B_1 - k) + (B_2 - k) + 2 \\cr &= B_1 + B_2 - 2k + 2 \\end{aligned}",
        "Final Answer: <strong>(a)</strong> $I = (m - 1)(n - 1),\\; B = 2m + 2n$, <strong>(b)</strong> $A = mn$, <strong>(c)</strong> $B_{1+2} = B_1 + B_2 - 2k + 2$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $I = mn,\\; B = 2m + 2n$, <strong>(b)</strong> $A = mn$, <strong>(c)</strong> $B_{1+2} = B_1 + B_2 - 2k + 2$",
            "feedback": "This error occurs in part (a) by setting I = mn. The total number of points strictly interior to the rectangle excludes the perimeter lines, giving (m - 1)(n - 1) points, not mn."
        },
        {
            "ans": "<strong>(a)</strong> $I = (m - 1)(n - 1),\\; B = 2m + 2n$, <strong>(b)</strong> $A = mn$, <strong>(c)</strong> $B_{1+2} = B_1 + B_2 - k$",
            "feedback": "This error occurs in part (c) by simply subtracting k. The k shared points appear in both B_1 and B_2, and the 2 end vertices remain on the perimeter of the combined shape, giving B_1 + B_2 - 2k + 2."
        },
        {
            "ans": "<strong>(a)</strong> $I = (m - 1)(n - 1),\\; B = m + n$, <strong>(b)</strong> $A = mn$, <strong>(c)</strong> $B_{1+2} = B_1 + B_2 - 2k + 2$",
            "feedback": "This error occurs in part (a) by halving the boundary points, writing B = m + n instead of 2m + 2n (which represents all four edges of the rectangle)."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Why Pick's Theorem Works",
        "content": "Part (c) is the heart of the general proof of Pick's Theorem! When two polygons merge, the $k - 2$ shared boundary points become interior points ($I_{1+2} = I_1 + I_2 + k - 2$). When you substitute $I_{1+2}$ and $B_{1+2}$ into Pick's formula, the $k$ terms cancel out, proving that Pick's area is additive ($A_{1+2} = A_1 + A_2$)."
    }
},
{
    "id": "009016",
    "group_id": "009016",
    "board": "OCR MEI",
    "branch": "Comprehension",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "The Harmonic Mean",
    "subtopic": [
        "Modelling",
        "Parallel Systems"
    ],
    "img": false,
    "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 4: Parallel Systems</strong><br>For two components working in parallel with completion times $T_1$ and $T_2$, the combined time $T_{\\text{total}}$ is half of their Harmonic Mean, $H$:$$\\begin{aligned} H &= \\dfrac{2 T_1 T_2}{T_1 + T_2} \\cr T_{\\text{total}} &= \\dfrac{H}{2} \\end{aligned}$$For three parallel components:\\begin{aligned} \\dfrac{1}{T_{\\text{total}}} &= \\dfrac{1}{T_1} + \\dfrac{1}{T_2} + \\dfrac{1}{T_3} \\end{aligned}</div>Two pumps, Pump A and Pump B, drain a basement. Pump A takes $6\\text{ hours}$ alone and Pump B takes $3\\text{ hours}$ alone.<br><br><strong>(a)</strong> Calculate the Harmonic Mean, $H$, of the two times.<br><br><strong>(b)</strong> Show that working together, they drain the basement in $2\\text{ hours}$.<br><br><strong>(c)</strong> Pump C is added. Working together, all three pumps drain the basement in $1.2\\text{ hours}$. Find the time taken for Pump C to drain the basement alone.",
    "steps": [
        "<strong>(a) Harmonic Mean $H$:</strong><br><br>Calculate $H$ for $T_1 = 6$ and $T_2 = 3$:\\begin{aligned} H &= \\dfrac{2(6)(3)}{6 + 3} \\cr &= \\dfrac{36}{9} \\cr &= 4\\text{ hours} \\end{aligned}",
        "<strong>(b) Combined Time:</strong><br><br>Using the relationship from the extract:\\begin{aligned} T_{\\text{total}} &= \\dfrac{H}{2} \\cr &= \\dfrac{4}{2} \\cr &= 2\\text{ hours} \\end{aligned}",
        "<strong>(c) Drainage Time for Pump C:</strong><br><br>Substitute $T_{\\text{total}} = 1.2$, $T_1 = 6$, and $T_2 = 3$ into the rate formula:<br><br>Note that $1.2 = \\dfrac{6}{5}$, so $\\dfrac{1}{1.2} = \\dfrac{5}{6}$.\\begin{aligned} &\\dfrac{1}{T_{\\text{total}}} = \\dfrac{1}{T_1} + \\dfrac{1}{T_2} + \\dfrac{1}{T_3} \\cr &\\dfrac{5}{6} = \\dfrac{1}{6} + \\dfrac{1}{3} + \\dfrac{1}{T_3} \\cr &\\dfrac{5}{6} = \\dfrac{3}{6} + \\dfrac{1}{T_3} \\cr &\\dfrac{1}{T_3} = \\dfrac{5}{6} - \\dfrac{3}{6} \\cr &\\dfrac{1}{T_3} = \\dfrac{2}{6} \\cr &\\dfrac{1}{T_3} = \\dfrac{1}{3} \\cr &T_3 = 3\\text{ hours} \\end{aligned}Thus, Pump C takes $3\\text{ hours}$ alone.",
        "Final Answer: <strong>(a)</strong> $H = 4\\text{ hours}$, <strong>(b)</strong> $2\\text{ hours}$, <strong>(c)</strong> $3\\text{ hours}$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $H = 4.5\\text{ hours}$, <strong>(b)</strong> $2.25\\text{ hours}$, <strong>(c)</strong> $3\\text{ hours}$",
            "feedback": "This error uses the arithmetic mean (6 + 3) / 2 = 4.5 rather than the harmonic mean. Rates combined over equal work must use the harmonic mean."
        },
        {
            "ans": "<strong>(a)</strong> $H = 4\\text{ hours}$, <strong>(b)</strong> $2\\text{ hours}$, <strong>(c)</strong> $2.4\\text{ hours}$",
            "feedback": "This error occurs in part (c) if you evaluate the reciprocals incorrectly, such as taking 1 / 1.2 as 0.83 and subtracting (1/6 + 1/3) with rounding errors."
        },
        {
            "ans": "<strong>(a)</strong> $H = 4\\text{ hours}$, <strong>(b)</strong> $2\\text{ hours}$, <strong>(c)</strong> $4.5\\text{ hours}$",
            "feedback": "This error occurs in part (c) by adding the individual times directly (6 + 3 = 9) rather than summing their rates."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Parallel Rates and the Factor of Half",
        "content": "Students often wonder why the combined time is half the harmonic mean: $T = H/2$. This happens because the harmonic mean $H$ represents the average time per single agent. Since two agents work simultaneously, the total elapsed time is halved: $H/2$."
    }
},
{
    "id": "009017",
    "group_id": "009016",
    "board": "OCR MEI",
    "branch": "Comprehension",
    "level": "A",
    "major_area": "Sequences and Series",
    "topic": "The Golden Ratio",
    "subtopic": [
        "Modelling",
        "Trigonometric Identities"
    ],
    "img": false,
    "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 4: The Golden Triangle</strong><br>A Golden Triangle is an isosceles triangle with side $s$, base $b$, and ratio $\\dfrac{s}{b} = \\phi$. The vertex angle is $36^\\circ$.<br><br>Applying the Cosine Rule gives:\\begin{aligned} b^2 &= 2s^2 - 2s^2 \\cos(36^\\circ) \\cr \\dfrac{1}{\\phi^2} &= 2 - 2\\cos(36^\\circ) \\end{aligned}</div><strong>(a)</strong> Using $\\phi^2 = \\phi + 1$, show that:\\begin{aligned} \\dfrac{1}{\\phi^2} = 2 - \\phi \\end{aligned}<strong>(b)</strong> By substituting this result into the equation from the extract, prove that:\\begin{aligned} \\cos(36^\\circ) = \\dfrac{\\phi}{2} \\end{aligned}<strong>(c)</strong> Hence, find the exact value of $\\cos(36^\\circ)$ in the form $\\dfrac{a + \\sqrt{b}}{c}$, where $a, b, c \\in \\mathbb{Z}$.",
    "steps": [
        "<strong>(a) Expressing $\\dfrac{1}{\\phi^2}$ Linearly:</strong><br><br>From $\\phi^2 = \\phi + 1$, divide both sides by $\\phi$:\\begin{aligned} &\\phi = 1 + \\dfrac{1}{\\phi} \\cr &\\dfrac{1}{\\phi} = \\phi - 1 \\end{aligned}Divide both sides by $\\phi$ again:\\begin{aligned} &\\dfrac{1}{\\phi^2} = 1 - \\dfrac{1}{\\phi} \\cr &\\dfrac{1}{\\phi^2} = 1 - (\\phi - 1) \\cr &\\dfrac{1}{\\phi^2} = 2 - \\phi \\end{aligned}",
        "<strong>(b) Proving $\\cos(36^\\circ) = \\dfrac{\\phi}{2}$:</strong><br><br>Substitute $\\dfrac{1}{\\phi^2} = 2 - \\phi$ into the Cosine Rule formula:\\begin{aligned} &2 - \\phi = 2 - 2\\cos(36^\\circ) \\cr &-\\phi = -2\\cos(36^\\circ) \\cr &2\\cos(36^\\circ) = \\phi \\cr &\\cos(36^\\circ) = \\dfrac{\\phi}{2} \\end{aligned}",
        "<strong>(c) Exact Surd Form of $\\cos(36^\\circ)$:</strong><br><br>Substitute $\\phi = \\dfrac{1 + \\sqrt{5}}{2}$:\\begin{aligned} \\cos(36^\\circ) &= \\dfrac{\\dfrac{1 + \\sqrt{5}}{2}}{2} \\cr &= \\dfrac{1 + \\sqrt{5}}{4} \\end{aligned}Thus, $a = 1$, $b = 5$, and $c = 4$.",
        "Final Answer: <strong>(c)</strong> $\\cos(36^\\circ) = \\dfrac{1 + \\sqrt{5}}{4}$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(c)</strong> $\\cos(36^\\circ) = \\dfrac{1 + \\sqrt{5}}{2}$",
            "feedback": "This error forgets to divide by 2 when evaluating cos(36) = phi / 2, returning phi itself instead of half of phi."
        },
        {
            "ans": "<strong>(c)</strong> $\\cos(36^\\circ) = \\dfrac{-1 + \\sqrt{5}}{4}$",
            "feedback": "This error occurs in part (c) from a sign slip in the definition of the golden ratio, using (-1 + sqrt(5)) / 2 instead of (1 + sqrt(5)) / 2."
        },
        {
            "ans": "<strong>(c)</strong> $\\cos(36^\\circ) = \\dfrac{1 + \\sqrt{3}}{4}$",
            "feedback": "This error occurs from an incorrect surd evaluation, mistakenly writing sqrt(3) instead of sqrt(5) inside the golden ratio."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Exact Values of $36^\\circ$ and $72^\\circ$",
        "content": "While standard A-Level trigonometric tables include $30^\\circ, 45^\\circ,$ and $60^\\circ$, angles of $36^\\circ$ and $72^\\circ$ are foundational in geometry. Because a regular pentagon has internal angles of $108^\\circ$, its diagonals construct Golden Triangles, yielding $\\cos(36^\\circ) = \\dfrac{1 + \\sqrt{5}}{4}$."
    }
},
{
    "id": "009018",
    "group_id": "009016",
    "board": "OCR MEI",
    "branch": "Comprehension",
    "level": "A",
    "major_area": "Exponentials and Logarithms",
    "topic": "Benford's Law",
    "subtopic": [
        "Modelling",
        "Fraud Detection"
    ],
    "img": false,
    "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 4: Fraud Detection</strong><br>A data set spanning multiple orders of magnitude follows Benford's Law:$$P(d) = \\log_{10}\\left(1 + \\dfrac{1}{d}\\right)$$For a sample of $N$ items, the expected count of digit $d$ is $E(d) = N \\times P(d)$. Significant departures indicate artificial data manipulation.</div>An auditor reviews $500$ expense claims.<br><br><strong>(a)</strong> Calculate the expected count of claims starting with digit $9$, to the nearest integer.<br><br><strong>(b)</strong> If $45$ claims start with digit $9$, calculate the percentage error from the expected count to $1\\text{ d.p.}$ (using the unrounded expected value).<br><br><strong>(c)</strong> The auditor counts $150$ claims starting with digit $5$. Given $P(5) \\approx 0.0792$, calculate the expected count for digit $5$ to the nearest integer, and conclude if manipulation is likely.",
    "steps": [
        "<strong>(a) Expected Count for Digit 9:</strong><br><br>Calculate the probability $P(9)$:\\begin{aligned} P(9) &= \\log_{10}\\left(1 + \\dfrac{1}{9}\\right) \\cr &= \\log_{10}\\left(\\dfrac{10}{9}\\right) \\cr &= 1 - \\log_{10}(9) \\cr &\\approx 0.04576 \\end{aligned}Multiply by $N = 500$:\\begin{aligned} E(9) &= 500 \\times 0.04576 \\cr &= 22.88 \\cr &\\approx 23\\text{ claims} \\end{aligned}",
        "<strong>(b) Percentage Error:</strong><br><br>Calculate the relative error between the observed ($45$) and expected ($22.88$):\\begin{aligned} \\text{Error} &= \\dfrac{|45 - 22.88|}{22.88} \\times 100\\% \\cr &= \\dfrac{22.12}{22.88} \\times 100\\% \\cr &\\approx 96.7\\% \\end{aligned}",
        "<strong>(c) Digit 5 Analysis:</strong><br><br>Calculate the expected count for digit $5$:\\begin{aligned} E(5) &= 500 \\times 0.0792 \\cr &= 39.6 \\cr &\\approx 40\\text{ claims} \\end{aligned}Compare observed and expected counts:\\begin{aligned} \\dfrac{\\text{Observed}}{\\text{Expected}} &= \\dfrac{150}{39.6} \\cr &\\approx 3.8 \\end{aligned}The observed count is nearly $4$ times the expected value. Such an extreme anomaly strongly suggests human manipulation (e.g. fabricated claims clustered just below approval limits).",
        "Final Answer: <strong>(a)</strong> $23$, <strong>(b)</strong> $96.7\\%$, <strong>(c)</strong> $E(5) = 40$ (manipulation likely)"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $23$, <strong>(b)</strong> $95.7\\%$, <strong>(c)</strong> $E(5) = 40$ (natural variation)",
            "feedback": "This error concludes that 150 claims is natural variation. In Benford analysis, a fourfold increase over expected count is an overwhelming statistical signal of artificial fabrication."
        },
        {
            "ans": "<strong>(a)</strong> $56$, <strong>(b)</strong> $19.6\\%$, <strong>(c)</strong> $E(5) = 56$ (manipulation likely)",
            "feedback": "This error assumes a uniform distribution of digits (500 / 9 approx 56). Benford's Law is logarithmic, so lower digits appear far more frequently than higher digits."
        },
        {
            "ans": "<strong>(a)</strong> $23$, <strong>(b)</strong> $49.2\\%$, <strong>(c)</strong> $E(5) = 40$ (manipulation likely)",
            "feedback": "This error divides the difference |45 - 22.88| by the observed count 45 rather than the expected baseline 22.88."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Uniform Fallacy in Fraud Detection",
        "content": "Untrained fraudsters typically invent numbers using uniform distributions, expecting each digit $1$ to $9$ to appear $\\approx 11.1\\%$ of the time ($500/9 \\approx 56$). Because Benford's Law expects digit $9$ only $4.6\\%$ of the time, fabricated accounts inevitably show huge positive percentage errors for high digits."
    }
},
{
    "id": "009019",
    "group_id": "009016",
    "board": "OCR MEI",
    "branch": "Comprehension",
    "level": "A",
    "major_area": "Coordinate Geometry",
    "topic": "Taxicab Geometry",
    "subtopic": [
        "Modelling",
        "Taxicab Ellipse"
    ],
    "img": false,
    "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 4: The Taxicab Ellipse</strong><br>In Taxicab geometry, an ellipse with foci $F_1(-2, 0)$ and $F_2(2, 0)$ and constant sum $k = 6$ satisfies:\\begin{aligned} &d_T(P, F_1) + d_T(P, F_2) = 6 \\cr& |x + 2| + |y| + |x - 2|\\cr & \\qquad \\qquad + |y| &= 6 \\end{aligned}</div><strong>(a)</strong> Simplify this equation to the form:\\begin{aligned} |x + 2| + |x - 2| + 2|y| = 6 \\end{aligned}<strong>(b)</strong> Find the $y$-intercepts of this locus by setting $x = 0$.<br><br><strong>(c)</strong> For $-2 \\le x \\le 2$, the term $|x + 2| + |x - 2|$ equals $4$. Find the equation of the locus in this interval, and describe its geometric shape.",
    "steps": [
        "<strong>(a) Simplifying the Equation:</strong><br><br>Combine the identical $|y|$ terms:\\begin{aligned} &|x + 2| + |y| + |x - 2| + |y| = 6 \\cr &|x + 2| + |x - 2| + 2|y| = 6 \\end{aligned}",
        "<strong>(b) $y$-Intercepts ($x = 0$):</strong><br><br>Substitute $x = 0$ into the equation:\\begin{aligned} &|0 + 2| + |0 - 2| + 2|y| = 6 \\cr &2 + 2 + 2|y| = 6 \\cr &4 + 2|y| = 6 \\cr &2|y| = 2 \\cr &|y| = 1 \\cr &y = \\pm 1 \\end{aligned}Thus, the $y$-intercepts are $(0, 1)$ and $(0, -1)$.",
        "<strong>(c) Locus for $-2 \\le x \\le 2$:</strong><br><br>Substitute $|x + 2| + |x - 2| = 4$ into the equation:\\begin{aligned} &4 + 2|y| = 6 \\cr &2|y| = 2 \\cr &|y| = 1 \\cr &y = 1 \\quad \\text{or} \\quad y = -1 \\end{aligned}Geometric description: In the interval $-2 \\le x \\le 2$, the locus consists of two horizontal parallel line segments of length $4$, situated at $y = 1$ and $y = -1$.",
        "Final Answer: <strong>(b)</strong> $(0, \\pm 1)$, <strong>(c)</strong> $y = \\pm 1$ (two horizontal parallel segments for $-2 \\le x \\le 2$)"
    ],
    "pi_options": [
        {
            "ans": "<strong>(b)</strong> $(0, \\pm 2)$, <strong>(c)</strong> $y = \\pm 2$ (two horizontal parallel segments for $-2 \\le x \\le 2$)",
            "feedback": "This error occurs in part (b) by writing 2|y| = 4 instead of 2|y| = 2 when subtracting 4 from 6."
        },
        {
            "ans": "<strong>(b)</strong> $(0, \\pm 1)$, <strong>(c)</strong> $y = -x \\pm 1$ (slanted diamond segments)",
            "feedback": "This error incorrectly assumes the locus remains diagonal throughout. Between the foci, |x + 2| + |x - 2| is constant, producing flat horizontal segments."
        },
        {
            "ans": "<strong>(b)</strong> $(0, \\pm 3)$, <strong>(c)</strong> $x^2 + y^2 = 9$ (smooth ellipse)",
            "feedback": "This error treats the equation as a standard Euclidean ellipse rather than evaluating the Taxicab modulus components."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Flattened Loci in Taxicab Geometry",
        "content": "A Taxicab ellipse is not curved! Between the two foci (where $-2 \\le x \\le 2$), horizontal movement swaps distance from $F_1$ to $F_2$ at an exact $1:1$ rate, so the $x$-component is constant ($4$). This leaves $2|y| = 2$, producing flat horizontal edges and turning the ellipse into a hexagon."
    }
},
{
    "id": "009020",
    "group_id": "009016",
    "board": "OCR MEI",
    "branch": "Comprehension",
    "level": "A",
    "major_area": "Geometry and Proof",
    "topic": "Pick's Theorem",
    "subtopic": [
        "Modelling",
        "Area Approximation"
    ],
    "img": false,
    "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 4: Approximating Irregular Areas</strong><br>Pick's Theorem calculates the area of a simple lattice polygon:$$A = I + \\dfrac{B}{2} - 1$$where $I$ is the number of interior points and $B$ is the number of boundary points. For map scaling, $1\\text{ cm}^2$ on grid corresponds to $(\\text{scale factor})^2$ in reality.</div>An irregular lake is modelled on a $1\\text{ cm}$ grid with $I = 42$ and $B = 18$.<br><br><strong>(a)</strong> Calculate the estimated map area, $A$, using Pick's Theorem.<br><br><strong>(b)</strong> The map scale is $1:10000$ ($1\\text{ cm} = 100\\text{ m}$). Find the actual surface area of the lake in $\\text{m}^2$.<br><br><strong>(c)</strong> Moving one misplaced vertex increases $B$ by $2$ and decreases $I$ by $1$. Show that the estimated area $A$ remains unchanged.",
    "steps": [
        "<strong>(a) Map Area via Pick's Theorem:</strong><br><br>Substitute $I = 42$ and $B = 18$ into the formula:\\begin{aligned} A &= I + \\dfrac{B}{2} - 1 \\cr &= 42 + \\dfrac{18}{2} - 1 \\cr &= 42 + 9 - 1 \\cr &= 50\\text{ cm}^2 \\end{aligned}",
        "<strong>(b) Actual Area in $\\text{m}^2$:</strong><br><br>Convert linear scale to area scale:\\begin{aligned} 1\\text{ cm} &= 100\\text{ m} \\cr 1\\text{ cm}^2 &= (100\\text{ m})^2 \\cr &= 10000\\text{ m}^2 \\end{aligned}Calculate the actual area:\\begin{aligned} \\text{Area} &= 50 \\times 10000 \\cr &= 500000\\text{ m}^2 \\end{aligned}",
        "<strong>(c) Area Invariance under Vertex Shift:</strong><br><br>Let the changes in lattice points be $\\Delta B = +2$ and $\\Delta I = -1$.<br><br>Calculate the change in area $\\Delta A$:\\begin{aligned} \\Delta A &= \\Delta I + \\dfrac{\\Delta B}{2} \\cr &= -1 + \\dfrac{2}{2} \\cr &= -1 + 1 \\cr &= 0 \\end{aligned}Since $\\Delta A = 0$, the new area is:\\begin{aligned} A_{\\text{new}} &= A + \\Delta A \\cr &= 50 + 0 \\cr &= 50\\text{ cm}^2 \\end{aligned}Thus, the estimated area remains completely unchanged.",
        "Final Answer: <strong>(a)</strong> $50\\text{ cm}^2$, <strong>(b)</strong> $500000\\text{ m}^2$, <strong>(c)</strong> $\\Delta A = 0\\text{ cm}^2$ (unchanged)"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $50\\text{ cm}^2$, <strong>(b)</strong> $5000\\text{ m}^2$, <strong>(c)</strong> $\\Delta A = 0\\text{ cm}^2$ (unchanged)",
            "feedback": "This error occurs in part (b) by multiplying by 100 rather than 100^2 = 10000 when converting from cm^2 to m^2."
        },
        {
            "ans": "<strong>(a)</strong> $51\\text{ cm}^2$, <strong>(b)</strong> $510000\\text{ m}^2$, <strong>(c)</strong> $\\Delta A = 0\\text{ cm}^2$ (unchanged)",
            "feedback": "This error occurs in part (a) by omitting the -1 term from Pick's Theorem, evaluating 42 + 9 = 51."
        },
        {
            "ans": "<strong>(a)</strong> $50\\text{ cm}^2$, <strong>(b)</strong> $500000\\text{ m}^2$, <strong>(c)</strong> $\\Delta A = +1\\text{ cm}^2$ (increased)",
            "feedback": "This error evaluates the change in area as Delta I + Delta B = -1 + 2 = +1, forgetting that boundary points carry a weighting factor of 1/2."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Invariance and Half-Integers in Pick's Grid",
        "content": "Notice the exact rate of trade-off: each interior point is worth an area of $1$, while each boundary point is worth an area of $1/2$. Therefore, losing $1$ interior point is precisely balanced by gaining $2$ boundary points, leaving the total area invariant."
    }
},
{
    "id": "009021",
    "group_id": "009021",
    "board": "OCR MEI",
    "branch": "Comprehension",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "The Harmonic Mean",
    "subtopic": [
        "Critical Analysis",
        "Domain Failures"
    ],
    "img": false,
    "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 5: Domain Limitations</strong><br>For two real numbers $x$ and $y$, the Arithmetic Mean is $A = \\dfrac{x + y}{2}$ and the Harmonic Mean is $H = \\dfrac{2xy}{x + y}$.<br><br>While $A$ is defined for all real numbers, $H$ is undefined when $x + y = 0$. The inequality $A \\ge H$ assumes $x, y > 0$, and can fail if negative numbers are admitted.</div>Consider the two real numbers $x = 2$ and $y = -6$.<br><br><strong>(a)</strong> Calculate the Arithmetic Mean, $A$, and the Harmonic Mean, $H$, of these two numbers.<br><br><strong>(b)</strong> Show that for these values, $A < H$, and explain algebraically why the inequality $A \\ge H$ reversed.<br><br><strong>(c)</strong> Consider the pair $x = k$ and $y = -k$, where $k \\ne 0$. State the value of $A$, and explain why no finite value of $H$ can exist.",
    "steps": [
        "<strong>(a) Calculating $A$ and $H$:</strong><br><br>Calculate the Arithmetic Mean:\\begin{aligned} A &= \\dfrac{2 + (-6)}{2} \\cr &= \\dfrac{-4}{2} \\cr &= -2 \\end{aligned}Calculate the Harmonic Mean:\\begin{aligned} H &= \\dfrac{2(2)(-6)}{2 + (-6)} \\cr &= \\dfrac{-24}{-4} \\cr &= 6 \\end{aligned}",
        "<strong>(b) Inequality Reversal:</strong><br><br>Comparing the two values:\\begin{aligned} A = -2 &< 6 = H \\end{aligned}Thus, $A < H$.<br><br>To see why algebraically, consider the difference $A - H$:\\begin{aligned} A - H &= \\dfrac{x + y}{2} - \\dfrac{2xy}{x + y} \\cr &= \\dfrac{(x + y)^2 - 4xy}{2(x + y)} \\cr &= \\dfrac{(x - y)^2}{2(x + y)} \\end{aligned}Because $(x - y)^2 \\ge 0$ for all real numbers, the sign of $A - H$ is determined entirely by the denominator $x + y$.<br><br>Since $x + y = -4 < 0$, the denominator is negative, which forces $A - H < 0$, reversing the inequality to $A < H$.",
        "<strong>(c) Asymptotic Failure ($y = -k$):</strong><br><br>For $x = k$ and $y = -k$:\\begin{aligned} A &= \\dfrac{k + (-k)}{2} \\cr &= 0 \\end{aligned}For the Harmonic Mean:\\begin{aligned} H &= \\dfrac{2(k)(-k)}{k + (-k)} \\cr &= \\dfrac{-2k^2}{0} \\end{aligned}Division by zero is undefined. Hence, no finite value of $H$ exists.",
        "Final Answer: <strong>(a)</strong> $A = -2,\\; H = 6$, <strong>(b)</strong> $A < H$ because $x + y < 0$, <strong>(c)</strong> $A = 0,\\; H$ undefined"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $A = -2,\\; H = -6$, <strong>(b)</strong> $A > H$ because $x + y < 0$, <strong>(c)</strong> $A = 0,\\; H$ undefined",
            "feedback": "This error occurs in part (a) from a sign slip when evaluating -24 / -4, writing -6 instead of +6, which masks the reversal of the inequality."
        },
        {
            "ans": "<strong>(a)</strong> $A = -2,\\; H = 6$, <strong>(b)</strong> $A < H$ because $x + y < 0$, <strong>(c)</strong> $A = 0,\\; H = 0$",
            "feedback": "This error occurs in part (c) by assuming that -2k^2 / 0 equals 0. Division by zero is undefined, meaning no finite harmonic mean exists."
        },
        {
            "ans": "<strong>(a)</strong> $A = 2,\\; H = -6$, <strong>(b)</strong> $A > H$ because $x + y > 0$, <strong>(c)</strong> $A = 0,\\; H$ undefined",
            "feedback": "This error occurs in part (a) by calculating the arithmetic mean as (6 - 2) / 2 = 2 rather than (2 + (-6)) / 2 = -2."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: The Hidden Positivity Condition",
        "content": "Classical inequalities such as $A \\ge H$ or $A \\ge G$ carry a strict condition: all variables must be positive ($x, y > 0$). If $x + y < 0$, the divisor in the identity $(x-y)^2 / [2(x+y)]$ turns negative, flipping the inequality to $A < H$."
    }
},
{
    "id": "009022",
    "group_id": "009021",
    "board": "OCR MEI",
    "branch": "Comprehension",
    "level": "A",
    "major_area": "Sequences and Series",
    "topic": "The Golden Ratio",
    "subtopic": [
        "Proof by Contradiction",
        "Irrationality"
    ],
    "img": false,
    "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 5: Proof of Irrationality</strong><br>A number is rational if it can be written as $\\dfrac{p}{q}$, where $p, q \\in \\mathbb{Z}^+$ are coprime ($\\gcd(p, q) = 1$).<br><br>A proof by contradiction assumes the proposition is false and deduces a logical impossibility.<br><br>The Golden Ratio satisfies $\\phi^2 - \\phi - 1 = 0$, giving $\\phi = \\dfrac{1 + \\sqrt{5}}{2}$.</div><strong>(a)</strong> Assume for contradiction that $\\phi = \\dfrac{p}{q}$ with $\\gcd(p, q) = 1$. Substitute into $\\phi^2 - \\phi - 1 = 0$ to show that:\\begin{aligned} p^2 - pq - q^2 = 0 \\end{aligned}<strong>(b)</strong> Rearrange this equation to:\\begin{aligned} p(p - q) = q^2 \\end{aligned}Explain why any prime factor of $q$ must also be a prime factor of $p$.<br><br><strong>(c)</strong> Explain why this contradicts $\\gcd(p, q) = 1$, and conclude what this proves about $\\phi$.",
    "steps": [
        "<strong>(a) Substituting $\\phi = \\dfrac{p}{q}$:</strong><br><br>Substitute $\\phi = \\dfrac{p}{q}$ into the quadratic equation:\\begin{aligned} &\\left(\\dfrac{p}{q}\\right)^2 - \\dfrac{p}{q} - 1 = 0 \\cr &\\dfrac{p^2}{q^2} - \\dfrac{p}{q} - 1 = 0 \\end{aligned}Multiply through by $q^2$:\\begin{aligned} &p^2 - pq - q^2 = 0 \\end{aligned}",
        "<strong>(b) Prime Divisibility Deduction:</strong><br><br>Rearrange the equation:\\begin{aligned} &p^2 - pq = q^2 \\cr &p(p - q) = q^2 \\end{aligned}Let $k$ be any prime factor of $q$. Then $k$ divides $q^2$.<br><br>Since $p(p - q) = q^2$, $k$ must divide the product $p(p - q)$.<br><br>By Euclid's lemma, $k$ must divide $p$ or $k$ must divide $(p - q)$:<br><br>• If $k$ divides $p$, then $k$ is a factor of $p$.<br><br>• If $k$ divides $(p - q)$, then since $k$ divides $q$, $k$ must also divide $(p - q) + q = p$.<br><br>In both cases, any prime factor of $q$ must also divide $p$.",
        "<strong>(c) The Contradiction:</strong><br><br>Since $q > 1$ (as $\\phi$ is not an integer), $q$ has at least one prime factor $k$.<br><br>From part (b), this prime factor $k$ also divides $p$.<br><br>Therefore:\\begin{aligned} \\gcd(p, q) \\ge k > 1 \\end{aligned}This directly contradicts the initial assumption that $\\gcd(p, q) = 1$ (that the fraction was in simplest form).<br><br>Therefore, the initial assumption must be false, proving that $\\phi$ is irrational.",
        "Final Answer: <strong>(a)</strong> $p^2 - pq - q^2 = 0$, <strong>(b)</strong> Prime $k \\mid q \\implies k \\mid p$, <strong>(c)</strong> $\\gcd(p, q) > 1$ (contradiction, $\\phi$ is irrational)"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $p^2 - pq - q^2 = 0$, <strong>(b)</strong> Prime $k \\mid q \\implies k \\mid p$, <strong>(c)</strong> $\\gcd(p, q) = 1$ (consistent, $\\phi$ is rational)",
            "feedback": "This error claims the result is consistent with rationality. Because a prime factor divides both p and q, gcd(p, q) >= k > 1, which contradicts coprime fraction form."
        },
        {
            "ans": "<strong>(a)</strong> $p^2 + pq - q^2 = 0$, <strong>(b)</strong> Prime $k \\mid q \\implies k \\mid p$, <strong>(c)</strong> $\\gcd(p, q) > 1$ (contradiction, $\\phi$ is irrational)",
            "feedback": "This error occurs in part (a) from a sign slip, writing +pq instead of -pq when substituting into phi^2 - phi - 1 = 0."
        },
        {
            "ans": "<strong>(a)</strong> $p^2 - pq - q^2 = 0$, <strong>(b)</strong> Prime $k \\mid p \\implies k \\mid (p + q)$, <strong>(c)</strong> $\\gcd(p, q) > 1$ (contradiction, $\\phi$ is irrational)",
            "feedback": "This error in part (b) inverts the divisibility argument by starting with factors of p rather than using p(p - q) = q^2 to show that factors of q must divide p."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Structuring Proofs by Contradiction",
        "content": "Every contradiction proof requires three clear milestones: 1) State the negation clearly ($\"\\text{Assume } \\phi = p/q \\text{ with } \\gcd(p, q) = 1\"$), 2) Derive a strict algebraic consequence ($k \\mid p \\text{ and } k \\mid q$), and 3) Explicitly identify the clash with the premise."
    }
},
{
    "id": "009023",
    "group_id": "009021",
    "board": "OCR MEI",
    "branch": "Comprehension",
    "level": "A",
    "major_area": "Exponentials and Logarithms",
    "topic": "Benford's Law",
    "subtopic": [
        "Critical Analysis",
        "Scale Invariance"
    ],
    "img": false,
    "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 5: Scale Invariance</strong><br>A key property of Benford's Law is scale invariance: multiplying a dataset by a constant $c > 0$ preserves the distribution:$$P(d) = \\log_{10}\\left(1 + \\dfrac{1}{d}\\right)$$A discrete uniform distribution on digits $\\{1, \\dots, 9\\}$ assigns equal probability $P(d) = \\dfrac{1}{9}$.</div>A researcher claims financial assets follow a uniform first-digit distribution with $P(d) = \\dfrac{1}{9}$.<br><br><strong>(a)</strong> Calculate the probability that the first digit is $1, 2,$ or $3$ under this uniform model.<br><br><strong>(b)</strong> Under Benford's Law, calculate the exact probability that the first digit is $1, 2,$ or $3$, in the form $\\log_{10} k$, where $k \\in \\mathbb{Z}$.<br><br><strong>(c)</strong> If all values are doubled ($x \\mapsto 2x$), explain why a uniform distribution cannot be scale invariant.",
    "steps": [
        "<strong>(a) Uniform Model Probability:</strong><br><br>Under the uniform model:\\begin{aligned} P(1, 2, 3) &= P(1) + P(2) + P(3) \\cr &= \\dfrac{1}{9} + \\dfrac{1}{9} + \\dfrac{1}{9} \\cr &= \\dfrac{3}{9} \\cr &= \\dfrac{1}{3} \\cr &\\approx 33.3\\% \\end{aligned}",
        "<strong>(b) Benford's Model Probability:</strong><br><br>Sum the probabilities under Benford's Law:\\begin{aligned} &P(1, 2, 3) \\cr &\\quad = P(1) + P(2) + P(3) \\cr &\\quad = \\log_{10}(2) + \\log_{10}\\left(\\dfrac{3}{2}\\right) \\cr &\\qquad + \\log_{10}\\left(\\dfrac{4}{3}\\right) \\end{aligned}Apply the logarithm product law:\\begin{aligned} P(1, 2, 3) &= \\log_{10}\\left(2 \\times \\dfrac{3}{2} \\times \\dfrac{4}{3}\\right) \\cr &= \\log_{10}(4) \\cr &\\approx 0.602 \\cr &\\approx 60.2\\% \\end{aligned}Thus, $k = 4$.",
        "<strong>(c) Failure of Scale Invariance:</strong><br><br>Consider what happens when all values are doubled ($x \\mapsto 2x$):<br><br>• Numbers starting with $5, 6, 7, 8, 9$ have values in $[5, 10) \\times 10^m$. Doubling them gives values in $[10, 20) \\times 10^m$, meaning they now all start with digit $1$.<br><br>• In the uniform model, digits $5, 6, 7, 8, 9$ originally held a combined probability of:\\begin{aligned} \\dfrac{5}{9} &\\approx 55.6\\% \\end{aligned}After doubling, all these values now start with digit $1$, so digit $1$ now holds well over $50\\%$ of the probability, destroying the uniform $1/9$ balance.<br><br>Thus, a uniform distribution cannot be scale invariant, whereas Benford's logarithmic distribution naturally absorbs scalar factors.",
        "Final Answer: <strong>(a)</strong> $\\dfrac{1}{3}$, <strong>(b)</strong> $\\log_{10}(4)$, <strong>(c)</strong> Doubling shifts digits 5–9 to digit 1 (breaks $1/9$ balance)"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $\\dfrac{1}{3}$, <strong>(b)</strong> $\\log_{10}(3)$, <strong>(c)</strong> Doubling shifts digits 5–9 to digit 1 (breaks $1/9$ balance)",
            "feedback": "This error occurs in part (b) by summing only P(1) and P(2), which gives log_10(3). Including P(3) telescopes to log_10(4)."
        },
        {
            "ans": "<strong>(a)</strong> $\\dfrac{3}{10}$, <strong>(b)</strong> $\\log_{10}(4)$, <strong>(c)</strong> Doubling shifts digits 5–9 to digit 1 (breaks $1/9$ balance)",
            "feedback": "This error assumes there are 10 possible leading digits (0 to 9), evaluating 3/10. Leading significant digits cannot be zero, so there are only 9 digits (1 to 9)."
        },
        {
            "ans": "<strong>(a)</strong> $\\dfrac{1}{3}$, <strong>(b)</strong> $\\log_{10}(4)$, <strong>(c)</strong> Doubling preserves equal frequencies (scale invariant)",
            "feedback": "This error claims the uniform distribution remains invariant under doubling. Doubling compresses the entire upper half of digits (5 to 9) into leading digit 1, causing a massive surge in digit 1."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Why Logarithms Ensure Scale Invariance",
        "content": "Why is Benford's Law scale invariant? Because $\\log_{10}(c \\cdot x) = \\log_{10}(c) + \\log_{10}(x)$. Multiplying by a constant simply shifts the logarithmic mantissas by a fixed translation $\\log_{10}(c)$ modulo 1, preserving the relative interval widths across all digits."
    }
},
{
    "id": "009024",
    "group_id": "009021",
    "board": "OCR MEI",
    "branch": "Comprehension",
    "level": "A",
    "major_area": "Coordinate Geometry",
    "topic": "Taxicab Geometry",
    "subtopic": [
        "Critical Analysis",
        "Equilateral Triangles"
    ],
    "img": false,
    "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 5: Taxicab Triangles</strong><br>In Taxicab geometry, the distance between points is $d_T(P, Q) = |x_1 - x_2| + |y_1 - y_2|$.<br><br>A triangle $ABC$ is Taxicab-equilateral if all three Taxicab side lengths are equal:$$d_T(A, B) = d_T(B, C) = d_T(C, A) = s$$</div>Consider vertices $A(0, 0)$ and $B(s, 0)$ with $s > 0$.<br><br><strong>(a)</strong> Verify that vertex $C\\left(\\dfrac{s}{2}, \\dfrac{s}{2}\\right)$ produces a Taxicab-equilateral triangle with side length $s$.<br><br><strong>(b)</strong> Find the Euclidean angles of triangle $ABC$, and state how they differ from a standard Euclidean equilateral triangle.<br><br><strong>(c)</strong> Now suppose a triangle has two sides parallel to the coordinate axes: $A(0, 0)$, $B(s, 0)$, and $D(0, s)$. Prove by contradiction that no triangle with two perpendicular sides parallel to the axes can be Taxicab-equilateral.",
    "steps": [
        "<strong>(a) Verifying Taxicab-Equilateral Triangle:</strong><br><br>Calculate the three Taxicab side lengths:\\begin{aligned} d_T(A, B) &= |s - 0| + |0 - 0| \\cr &= s \\end{aligned}For side $AC$ with $C(s/2, s/2)$:\\begin{aligned} d_T(A, C) &= \\left|\\dfrac{s}{2} - 0\\right| + \\left|\\dfrac{s}{2} - 0\\right| \\cr &= \\dfrac{s}{2} + \\dfrac{s}{2} \\cr &= s \\end{aligned}For side $BC$:\\begin{aligned} d_T(B, C) &= \\left|\\dfrac{s}{2} - s\\right| + \\left|\\dfrac{s}{2} - 0\\right| \\cr &= \\left|-\\dfrac{s}{2}\\right| + \\dfrac{s}{2} \\cr &= \\dfrac{s}{2} + \\dfrac{s}{2} \\cr &= s \\end{aligned}Since all three sides equal $s$, triangle $ABC$ is Taxicab-equilateral.",
        "<strong>(b) Euclidean Angles of Triangle $ABC$:</strong><br><br>Find the gradients of the sides:\\begin{aligned} m_{AB} &= 0 \\cr m_{AC} &= \\dfrac{s/2}{s/2} = 1 \\cr m_{BC} &= \\dfrac{s/2 - 0}{s/2 - s} = -1 \\end{aligned}Since $m_{AC} \\times m_{BC} = (1)(-1) = -1$, the angle at vertex $C$ is $90^\\circ$.<br><br>The angles at $A$ and $B$ are each $45^\\circ$.<br><br>Thus, the Euclidean angles are $45^\\circ, 45^\\circ, 90^\\circ$, completely differing from the $60^\\circ, 60^\\circ, 60^\\circ$ of a Euclidean equilateral triangle.",
        "<strong>(c) Impossibility with Axial Sides:</strong><br><br>Assume for contradiction that a triangle with two sides parallel to the coordinate axes could be Taxicab-equilateral.<br><br>Let the perpendicular sides have length $s$:\\begin{aligned} d_T(A, B) &= s \\quad (\\text{horizontal}) \\cr d_T(A, D) &= s \\quad (\\text{vertical}) \\end{aligned}Calculate the third Taxicab side length $d_T(B, D)$ between $B(s, 0)$ and $D(0, s)$:\\begin{aligned} d_T(B, D) &= |0 - s| + |s - 0| \\cr &= |-s| + |s| \\cr &= s + s \\cr &= 2s \\end{aligned}For the triangle to be Taxicab-equilateral, we require $d_T(B, D) = s$. This requires:\\begin{aligned} 2s &= s \\cr s &= 0 \\end{aligned}Since $s > 0$, this is a contradiction. Thus, no such triangle can be Taxicab-equilateral.",
        "Final Answer: <strong>(a)</strong> Sides all equal $s$, <strong>(b)</strong> $45^\\circ, 45^\\circ, 90^\\circ$ (right-angled), <strong>(c)</strong> Third side $d_T(B, D) = 2s \\ne s$ (contradiction)"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> Sides all equal $s$, <strong>(b)</strong> $60^\\circ, 60^\\circ, 60^\\circ$ (equiangular), <strong>(c)</strong> Third side $d_T(B, D) = 2s \\ne s$ (contradiction)",
            "feedback": "This error assumes equal Taxicab side lengths imply 60-degree Euclidean angles. The gradients of AC and BC are 1 and -1, meaning the Euclidean angle at C is 90 degrees."
        },
        {
            "ans": "<strong>(a)</strong> Side $BC = s\\sqrt{2} \\ne s$, <strong>(b)</strong> $45^\\circ, 45^\\circ, 90^\\circ$ (right-angled), <strong>(c)</strong> Third side $d_T(B, D) = 2s \\ne s$ (contradiction)",
            "feedback": "This error calculates side BC using the Euclidean distance formula rather than the Taxicab metric |x_1 - x_2| + |y_1 - y_2|, which yields s/2 + s/2 = s."
        },
        {
            "ans": "<strong>(a)</strong> Sides all equal $s$, <strong>(b)</strong> $45^\\circ, 45^\\circ, 90^\\circ$ (right-angled), <strong>(c)</strong> Third side $d_T(B, D) = s\\sqrt{2} \\ne s$ (contradiction)",
            "feedback": "This error occurs in part (c) by calculating the third side using Pythagoras (Euclidean distance s*sqrt(2)) rather than the Taxicab metric, which evaluates to |s| + |s| = 2s."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: The Taxicab Angle Paradox",
        "content": "In Taxicab geometry, an 'equilateral' triangle does not have $60^\\circ$ interior angles! The triangle with vertices $(0, 0), (s, 0),$ and $(s/2, s/2)$ has three equal Taxicab sides of length $s$, yet its Euclidean angles are $45^\\circ, 45^\\circ,$ and $90^\\circ$. Metric geometry separates side length from angular measure."
    }
},
{
    "id": "009025",
    "group_id": "009021",
    "board": "OCR MEI",
    "branch": "Comprehension",
    "level": "A",
    "major_area": "Geometry and Proof",
    "topic": "Pick's Theorem",
    "subtopic": [
        "Proof by Contradiction",
        "Lattice Impossibility"
    ],
    "img": false,
    "question": "<div style='background:#f4f6f8; border-left:4px solid #005a9c; padding:10px; margin-bottom:12px;'><strong>Extract 5: Irrational Area and Lattice Impossibility</strong><br>Pick's Theorem states that the area of a simple lattice polygon with vertices in $\\mathbb{Z}^2$ is:$$A = I + \\dfrac{B}{2} - 1$$where $I \\in \\mathbb{Z}_{\\ge 0}$ and $B \\in \\mathbb{Z}^+$. Therefore, $2A = 2I + B - 2$ is an integer, proving that the area $A$ must be a rational number (an integer or half-integer).</div>An equilateral triangle has side length $s$.<br><br><strong>(a)</strong> Show that the area of an equilateral triangle with side length $s$ is:\\begin{aligned} A = \\dfrac{\\sqrt{3}}{4}s^2 \\end{aligned}<strong>(b)</strong> Suppose for contradiction that an equilateral triangle has all three vertices on integer lattice points. Explain why the squared side length $s^2$ must be an integer.<br><br><strong>(c)</strong> Using Pick's Theorem and part (a), deduce a contradiction regarding $\\sqrt{3}$, and conclude whether an equilateral triangle can exist on an integer lattice.",
    "steps": [
        "<strong>(a) Area of an Equilateral Triangle:</strong><br><br>Using the standard area formula $\\text{Area} = \\dfrac{1}{2}ab\\sin(\\theta)$ with $a = b = s$ and $\\theta = 60^\\circ$:\\begin{aligned} A &= \\dfrac{1}{2}s^2 \\sin(60^\\circ) \\cr &= \\dfrac{1}{2}s^2 \\left(\\dfrac{\\sqrt{3}}{2}\\right) \\cr &= \\dfrac{\\sqrt{3}}{4}s^2 \\end{aligned}",
        "<strong>(b) Integer Squared Side Length:</strong><br><br>Let the vertices of the triangle be $(x_1, y_1)$ and $(x_2, y_2)$, where $x_1, y_1, x_2, y_2 \\in \\mathbb{Z}$.<br><br>By Pythagoras' theorem, the squared distance between these two vertices is:\\begin{aligned} s^2 &= (x_2 - x_1)^2 + (y_2 - y_1)^2 \\end{aligned}Since the coordinates are integers, the differences $(x_2 - x_1)$ and $(y_2 - y_1)$ are integers.<br><br>The square of an integer is an integer, and the sum of two integers is an integer.<br><br>Therefore, $s^2$ must be an integer.",
        "<strong>(c) The Contradiction:</strong><br><br>By Pick's Theorem, the area of any lattice polygon satisfies:\\begin{aligned} 2A &= 2I + B - 2 \\end{aligned}Since $I$ and $B$ are integers, $2A \\in \\mathbb{Z}$, which means $A$ is a rational number ($A \\in \\mathbb{Q}$).<br><br>From part (a), $A = \\dfrac{\\sqrt{3}}{4}s^2$. Rearranging for $\\sqrt{3}$ gives:\\begin{aligned} \\sqrt{3} &= \\dfrac{4A}{s^2} \\end{aligned}Since $A$ is rational and $s^2$ is a non-zero integer, $\\dfrac{4A}{s^2}$ must be a rational number.<br><br>This implies that $\\sqrt{3}$ is rational, which is a known contradiction (as $\\sqrt{3}$ is irrational).<br><br>Therefore, an equilateral triangle can never be constructed on an integer lattice.",
        "Final Answer: <strong>(a)</strong> $A = \\dfrac{\\sqrt{3}}{4}s^2$, <strong>(b)</strong> $s^2 = (\\Delta x)^2 + (\\Delta y)^2 \\in \\mathbb{Z}$, <strong>(c)</strong> Forces $\\sqrt{3} = \\dfrac{4A}{s^2} \\in \\mathbb{Q}$ (contradiction, impossible)"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $A = \\dfrac{\\sqrt{3}}{4}s^2$, <strong>(b)</strong> $s^2 = (\\Delta x)^2 + (\\Delta y)^2 \\in \\mathbb{Z}$, <strong>(c)</strong> Forces $\\sqrt{3} \\in \\mathbb{Q}$ (consistent, possible)",
            "feedback": "This error claims that the result allows equilateral triangles on a lattice. Because sqrt(3) is proven irrational, forcing sqrt(3) to be rational is an absolute contradiction."
        },
        {
            "ans": "<strong>(a)</strong> $A = \\dfrac{\\sqrt{3}}{2}s^2$, <strong>(b)</strong> $s^2 = (\\Delta x)^2 + (\\Delta y)^2 \\in \\mathbb{Z}$, <strong>(c)</strong> Forces $\\sqrt{3} = \\dfrac{4A}{s^2} \\in \\mathbb{Q}$ (contradiction, impossible)",
            "feedback": "This error occurs in part (a) by forgetting the 1/2 factor in the area formula, writing (sqrt(3)/2)s^2 instead of (sqrt(3)/4)s^2."
        },
        {
            "ans": "<strong>(a)</strong> $A = \\dfrac{\\sqrt{3}}{4}s^2$, <strong>(b)</strong> $s \\in \\mathbb{Z}$ (side must be integer), <strong>(c)</strong> Forces $\\sqrt{3} = \\dfrac{4A}{s^2} \\in \\mathbb{Q}$ (contradiction, impossible)",
            "feedback": "This error occurs in part (b) by claiming that the side length s must be an integer. Pythagoras guarantees that s^2 is an integer, but s itself can be a surd (such as sqrt(5))."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Geometry Meets Number Theory",
        "content": "This proof is one of the crowning jewels of pure mathematics. It bridges continuous Euclidean geometry with discrete number theory: Pick's Theorem forces all lattice areas to be half-integers, while trigonometry requires $\\sqrt{3}$, proving that regular equilateral triangles are completely incompatible with square integer grids!"
    }
}
];