window.ALEVEL_QUESTIONS = [
{
    "id": "004701",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Sequences and Series",
    "subtopic": [
        "Geometric Progressions",
        "Sum to Infinity"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Explain why the sum to infinity of a geometric series with first term $a \\neq 0$ and common ratio $r$ only exists when $|r| < 1$.<br><br><strong>(b)</strong> A geometric progression $V$ has first term $3$ and common ratio $r$. Another progression $W$ is formed by squaring each term in $V$.<br><br><strong>(i)</strong> Show that $W$ is also a geometric progression, stating its first term and common ratio in terms of $r$.<br><br><strong>(ii)</strong> Given that the sum to infinity of $W$ is twice the sum to infinity of $V$, find the value of $r$.",
    "steps": [
        "For part (a), the sum of the first $n$ terms is given by: \\begin{aligned} &S_n = \\dfrac{a(1 - r^n)}{1 - r} \\end{aligned}",
        "The sum to infinity is the limit as $n \\to \\infty$: \\begin{aligned} &S_{\\infty} \\cr &\\quad = \\lim_{n \\to \\infty} S_n \\cr &\\quad = \\lim_{n \\to \\infty} \\dfrac{a(1 - r^n)}{1 - r} \\end{aligned} This limit exists only if $r^n \\to 0$ as $n \\to \\infty$, which requires $|r| < 1$. If $|r| \\ge 1$, $r^n$ does not converge to $0$, so the series diverges.",
        "For part (b)(i), the terms of $V$ are: \\begin{aligned} &V_1 = 3 \\cr &V_2 = 3r \\cr &V_3 = 3r^2 \\end{aligned}",
        "Progression $W$ is formed by squaring each term of $V$: \\begin{aligned} &W_1 = 3^2 \\cr &\\quad = 9 \\cr &W_2 = (3r)^2 \\cr &\\quad = 9r^2 \\cr &W_3 = (3r^2)^2 \\cr &\\quad = 9r^4 \\end{aligned}",
        "We calculate the ratio between consecutive terms of $W$: \\begin{aligned} &\\dfrac{W_2}{W_1} = \\dfrac{9r^2}{9} \\cr &\\quad = r^2 \\cr &\\dfrac{W_{k+1}}{W_k} = \\dfrac{9r^{2k}}{9r^{2k-2}} \\cr &\\quad = r^2 \\end{aligned} Since the ratio is constant, $W$ is a geometric progression with first term $9$ and common ratio $r^2$.",
        "For part (b)(ii), the sums to infinity are: \\begin{aligned} &S_{\\infty}(V) = \\dfrac{3}{1 - r} \\cr &S_{\\infty}(W) = \\dfrac{9}{1 - r^2} \\end{aligned}",
        "We set up $S_{\\infty}(W) = 2S_{\\infty}(V)$ and solve for $r$: \\begin{aligned} &\\dfrac{9}{1 - r^2} = 2\\Big(\\dfrac{3}{1 - r}\\Big) \\cr &\\quad \\implies \\dfrac{9}{(1 - r)(1 + r)} = \\dfrac{6}{1 - r} \\cr &\\quad \\implies \\dfrac{9}{1 + r} = 6 \\cr &\\quad \\implies 9 = 6(1 + r) \\cr &\\quad \\implies 9 = 6 + 6r \\cr &\\quad \\implies 6r = 3 \\cr &\\quad \\implies r = 0.5 \\end{aligned} Since $|0.5| < 1$, the common ratio is valid.",
        "Final Answer: <strong>(b)(i)</strong> First term: $9$, Ratio: $r^2$, <strong>(b)(ii)</strong> $r = 0.5$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(b)(i)</strong> First term: $9$, Ratio: $r$, <strong>(b)(ii)</strong> $r = 0.25$",
            "feedback": "This error occurs in part (b)(i) if you assume the common ratio of the squared progression $W$ remains $r$ instead of squaring it to $r^2$, which corrupts the subsequent calculations."
        },
        {
            "ans": "<strong>(b)(i)</strong> First term: $9$, Ratio: $r^2$, <strong>(b)(ii)</strong> $r = -0.5$",
            "feedback": "This mistake arises from a sign slip when solving the linear equation $9 = 6(1+r)$, calculating $r = -0.5$ instead of $r = 0.5$."
        },
        {
            "ans": "<strong>(b)(i)</strong> First term: $6$, Ratio: $r^2$, <strong>(b)(ii)</strong> $r = 0.5$",
            "feedback": "This error occurs in part (b)(i) if you double the first term of $V$ ($2 \\times 3 = 6$) instead of squaring it ($3^2 = 9$) when defining the first term of $W$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Squaring Series Terms",
        "content": "When squaring every individual term of a geometric series, you create a new geometric series whose first term is the square of the original first term ($A = a^2$) and whose common ratio is the square of the original common ratio ($R = r^2$)."
    }
},
{
    "id": "004702",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Sequences and Series",
    "subtopic": [
        "Geometric Progressions",
        "Common Ratio Equations"
    ],
    "img": false,
    "question": "The first three terms of a geometric progression are $x + 2$, $x$, and $x - 1$ respectively, where $x$ is a real constant.<br><br><strong>(a)</strong> Show that $x = 2$.<br><br><strong>(b)</strong> Find the common ratio of this progression.<br><br><strong>(c)</strong> Determine the sum to infinity of this progression.",
    "steps": [
        "For any geometric progression, the ratio between consecutive terms is constant: \\begin{aligned} &\\dfrac{u_2}{u_1} = \\dfrac{u_3}{u_2} \\end{aligned}",
        "We substitute the terms into this relationship to solve for $x$: \\begin{aligned} &\\dfrac{x}{x + 2} = \\dfrac{x - 1}{x} \\cr &\\quad \\implies x^2 = (x - 1)(x + 2) \\cr &\\quad \\implies x^2 = x^2 + x - 2 \\cr &\\quad \\implies 0 = x - 2 \\cr &\\quad \\implies x = 2 \\end{aligned} as required.",
        "For part (b), we substitute $x = 2$ back into the terms: \\begin{aligned} &u_1 = 2 + 2 \\cr &\\quad = 4 \\cr &u_2 = 2 \\cr &u_3 = 2 - 1 \\cr &\\quad = 1 \\end{aligned}",
        "We calculate the common ratio $r$: \\begin{aligned} &r = \\dfrac{u_2}{u_1} \\cr &\\quad = \\dfrac{2}{4} \\cr &\\quad = 0.5 \\end{aligned}",
        "For part (c), we use the sum to infinity formula $S_{\\infty} = \\dfrac{a}{1 - r}$: \\begin{aligned} &S_{\\infty} \\cr &\\quad = \\dfrac{4}{1 - 0.5} \\cr &\\quad = \\dfrac{4}{0.5} \\cr &\\quad = 8 \\end{aligned}",
        "Final Answer: <strong>(b)</strong> $r = 0.5$, <strong>(c)</strong> $S_{\\infty} = 8$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(b)</strong> $r = 2$, <strong>(c)</strong> $S_{\\infty} = -4$",
            "feedback": "This error occurs if you invert the common ratio definition, calculating $r = \\dfrac{u_1}{u_2} = 2$ instead of $0.5$."
        },
        {
            "ans": "<strong>(b)</strong> $r = 0.5$, <strong>(c)</strong> $S_{\\infty} = 4$",
            "feedback": "This mistake is caused by using the first term of the progression as $a = 2$ instead of $a = 4$ when calculating the sum to infinity."
        },
        {
            "ans": "<strong>(b)</strong> $r = 0.5$, <strong>(c)</strong> The sum to infinity does not exist",
            "feedback": "This arises if you mistakenly think that the progression diverges because terms decrease, failing to recognise that since $|r| < 1$ (as $r = 0.5$), the sum to infinity converges."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Defining Common Ratios Algebraically",
        "content": "Whenever you are given three terms of a geometric progression in terms of an unknown variable, always set up the ratio equation $\\dfrac{u_2}{u_1} = \\dfrac{u_3}{u_2}$. Cross-multiplying this equation will construct a solvable polynomial equation that isolates the unknown constant directly."
    }
},
{
    "id": "004703",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Sequences and Series",
    "subtopic": [
        "Geometric Progressions",
        "Simultaneous Equations"
    ],
    "img": false,
    "question": "A geometric progression has a sum to infinity equal to $16$. The sum of the first three terms of this progression is equal to $14$.<br><br><strong>(a)</strong> Find the common ratio $r$ of this progression, giving your answer in exact fractional form.<br><br><strong>(b)</strong> Find the first term $a$ of the progression.",
    "steps": [
        "For part (a), using the sum to infinity formula: \\begin{aligned} &\\dfrac{a}{1 - r} = 16 \\cr &\\quad \\implies a = 16(1 - r) \\end{aligned}",
        "Using the formula for the sum of the first three terms: \\begin{aligned} &\\dfrac{a(1 - r^3)}{1 - r} = 14 \\end{aligned}",
        "We substitute $a = 16(1 - r)$ into the sum equation: \\begin{aligned} &\\dfrac{16(1 - r)(1 - r^3)}{1 - r} = 14 \\cr &\\quad \\implies 16(1 - r^3) = 14 \\cr &\\quad \\implies 1 - r^3 = \\dfrac{7}{8} \\cr &\\quad \\implies r^3 = \\dfrac{1}{8} \\cr &\\quad \\implies r = \\dfrac{1}{2} \\end{aligned}",
        "For part (b), we substitute $r = \\dfrac{1}{2}$ back to find $a$: \\begin{aligned} &a = 16\\Big(1 - \\dfrac{1}{2}\\Big) \\cr &\\quad = 16\\Big(\\dfrac{1}{2}\\Big) \\cr &\\quad = 8 \\end{aligned}",
        "Final Answer: <strong>(a)</strong> $r = \\dfrac{ 1 }{ 2 }$, <strong>(b)</strong> $a = 8$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $r = \\dfrac{ 1 }{ 4 }$, <strong>(b)</strong> $a = 12$",
            "feedback": "This error occurs if you make an arithmetic slip when simplifying the fractional subtraction, calculating $r = \\dfrac{1}{4}$ from $r^3 = \\dfrac{1}{64}$."
        },
        {
            "ans": "<strong>(a)</strong> $r = \\dfrac{ 1 }{ 2 }$, <strong>(b)</strong> $a = 16$",
            "feedback": "This mistake occurs in part (b) if you assume the first term $a$ is equal to the sum to infinity ($16$) instead of evaluating $a = 16(1-r)$."
        },
        {
            "ans": "<strong>(a)</strong> $r = -\\dfrac{ 1 }{ 2 }$, <strong>(b)</strong> $a = 24$",
            "feedback": "This arises from a sign error when solving the cubic equation, calculating $r = -\\dfrac{1}{2}$ from $r^3 = -\\dfrac{1}{8}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Simplification of GP Ratios",
        "content": "When solving simultaneous equations involving both $S_n$ and $S_{\\infty}$, always write $a = S_{\\infty}(1 - r)$ first. Substituting this term into the $S_n$ formula cancels out the $(1-r)$ denominators cleanly, reducing the problem to $S_{\\infty}(1 - r^n) = S_n$."
    }
},
{
    "id": "004704",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Sequences and Series",
    "subtopic": [
        "Geometric Progressions",
        "Inequalities with Logarithms"
    ],
    "img": false,
    "question": "A geometric progression has first term $5$ and common ratio $1.2$.<br><br>Find the minimum number of terms required for the sum of the progression to exceed $1000$. Show all of your algebraic working, including the use of logarithms.",
    "steps": [
        "With $a = 5$ and $r = 1.2$, we set up the inequality for $S_n > 1000$: \\begin{aligned} &\\dfrac{a(r^n - 1)}{r - 1} > 1000 \\end{aligned}",
        "We substitute our parameters and simplify algebraically: \\begin{aligned} &\\dfrac{5(1.2^n - 1)}{1.2 - 1} > 1000 \\cr &\\quad \\implies \\dfrac{5(1.2^n - 1)}{0.2} > 1000 \\cr &\\quad \\implies 25(1.2^n - 1) > 1000 \\cr &\\quad \\implies 1.2^n - 1 > 40 \\cr &\\quad \\implies 1.2^n > 41 \\end{aligned}",
        "To isolate $n$, we take natural logarithms on both sides: \\begin{aligned} &\\ln(1.2^n) > \\ln(41) \\cr &\\quad \\implies n\\ln(1.2) > \\ln(41) \\cr &\\quad \\implies n > \\dfrac{\\ln(41)}{\\ln(1.2)} \\end{aligned} Since $r = 1.2 > 1$, we have $\\ln(1.2) > 0$. Dividing by $\\ln(1.2)$ does not reverse the inequality sign.",
        "We evaluate numerically: \\begin{aligned} &n > \\dfrac{3.71357}{0.18232} \\cr &\\quad \\implies n > 20.368 \\end{aligned} Since $n$ must be an integer, the minimum number of terms required is $21$.",
        "Final Answer: $21$"
    ],
    "pi_options": [
        {
            "ans": "$20$",
            "feedback": "This is the truncated integer part of $20.368$. Since $n$ must strictly exceed $20.368$ for the sum to exceed $1000$, $20$ terms are insufficient ($S_{20} \\approx 933.44$)."
        },
        {
            "ans": "$22$",
            "feedback": "This arises from a double rounding error or division slip, calculating $n > 21.368$ and rounding up to $22$."
        },
        {
            "ans": "$18$",
            "feedback": "This mistake occurs if you write the denominator division incorrectly as $5 \\times 0.2 = 1$ instead of $5 / 0.2 = 25$, resulting in $1.2^n > 201$ and $n \\approx 29.1$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Inequality Direction with Logarithms",
        "content": "When solving exponential inequalities like $a^n > b$ using logarithms, always check whether your log base is greater than $1$. If the common ratio $r$ is less than $1$ (e.g. $0.8$), then $\\ln(r)$ is negative, and dividing by $\\ln(r)$ *must* reverse the direction of the inequality sign. Since $r = 1.2 > 1$ here, the inequality direction remains unchanged."
    }
},
{
    "id": "004705",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Sequences and Series",
    "subtopic": [
        "Geometric Progressions",
        "Telescoping Series"
    ],
    "img": false,
    "question": "A geometric progression has first term $a$ and common ratio $r$. A new series is formed by taking the difference between consecutive terms of this progression: $d_n = u_n - u_{n+1}$ for $n \\ge 1$.<br><br><strong>(a)</strong> Show that the new series $d_n$ is also a geometric progression, and write down its first term and common ratio in terms of $a$ and $r$.<br><br><strong>(b)</strong> Given that the original progression has a sum to infinity of $12$, and the new progression has a sum to infinity of $4$, find the exact values of $a$ and $r$.",
    "steps": [
        "For part (a), using $u_n = ar^{n-1}$ and $u_{n+1} = ar^n$: \\begin{aligned} &d_n \\cr &\\quad = u_n - u_{n+1} \\cr &\\quad = ar^{n-1} - ar^n \\cr &\\quad = ar^{n-1}(1 - r) \\end{aligned}",
        "We check the ratio between consecutive terms of $d_n$: \\begin{aligned} &\\dfrac{d_{n+1}}{d_n} \\cr &\\quad = \\dfrac{ar^n(1 - r)}{ar^{n-1}(1 - r)} \\cr &\\quad = r \\end{aligned} Since this ratio is constant, $d_n$ is a geometric progression with first term $d_1 = a(1 - r)$ and common ratio $r$.",
        "For part (b), the sum to infinity of the original progression gives: \\begin{aligned} &\\dfrac{a}{1 - r} = 12 \\cr &\\quad \\implies a = 12(1 - r) \\end{aligned}",
        "For the new progression $d_n$ with first term $a(1 - r)$ and ratio $r$: \\begin{aligned} &\\dfrac{a(1 - r)}{1 - r} = 4 \\cr &\\quad \\implies a = 4 \\end{aligned}",
        "We substitute $a = 4$ into $a = 12(1 - r)$: \\begin{aligned} &4 = 12(1 - r) \\cr &\\quad \\implies 1 - r = \\dfrac{1}{3} \\cr &\\quad \\implies r = \\dfrac{2}{3} \\end{aligned} Since $|r| < 1$, these values are valid.",
        "Final Answer: <strong>(a)</strong> First term: $a(1-r)$, Ratio: $r$, <strong>(b)</strong> $a = 4$, $r = \\dfrac{ 2 }{ 3 }$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> First term: $a(r-1)$, Ratio: $r$, <strong>(b)</strong> $a = -4$, $r = \\dfrac{ 4 }{ 3 }$",
            "feedback": "This error occurs in part (a) if you define the difference in the wrong direction ($d_n = u_{n+1} - u_n$), which yields a negative first term $a(r-1)$. This results in an invalid common ratio $r = \\dfrac{ 4 }{ 3 } > 1$ that diverges."
        },
        {
            "ans": "<strong>(a)</strong> First term: $a(1-r)$, Ratio: $r$, <strong>(b)</strong> $a = 4$, $r = \\dfrac{ 1 }{ 3 }$",
            "feedback": "This mistake occurs in part (b) if you make a sign error when solving the final linear equation, calculating $r = \\dfrac{ 1 }{ 3 }$ instead of $r = \\dfrac{ 2 }{ 3 }$."
        },
        {
            "ans": "<strong>(a)</strong> First term: $a(1-r)$, Ratio: $r^2$, <strong>(b)</strong> $a = 4$, $r = \\dfrac{ 2 }{ 3 }$",
            "feedback": "This error occurs in part (a) if you assume the common ratio of the difference series is $r^2$ instead of $r$, which is algebraically incorrect."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Telescoping Differences of GPs",
        "content": "A series of differences of the form $d_n = u_n - u_{n+1}$ is a telescoping series: \\begin{aligned} &\\sum_{n=1}^{\\infty} (u_n - u_{n+1}) \\cr &\\quad = (u_1 - u_2) + (u_2 - u_3) + \\dots \\cr &\\quad = u_1 \\cr &\\quad = a \\end{aligned} Intermediate terms cancel out completely, meaning the sum to infinity equals $a$, entirely independent of $r$."
    }
},
{
    "id": "004706",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Coordinate Geometry",
    "topic": "Parametric Curves",
    "subtopic": [
        "Cartesian Equations",
        "Parametric Tangents"
    ],
    "img": false,
    "question": "The equation of a curve $C$ is given by: \\begin{aligned} &x = \\cos 2\\theta \\cr &y = \\sin\\theta \\cr &\\text{for } 0 \\le \\theta \\le \\dfrac{\\pi}{2} \\end{aligned} <strong>(a)</strong> Find the Cartesian equation of $C$.<br><br><strong>(b)</strong> Show that the line $x + 2y - 1 = 0$ meets $C$ at the point $P$, where $\\theta = 0$, and at the point $Q$, where $\\theta = \\dfrac{\\pi}{2}$. Write down the coordinates of $P$ and $Q$.<br><br><strong>(c)</strong> Determine the equations of the tangents to $C$ at $P$ and $Q$. Write down the coordinates of the point of intersection of the two tangents.",
    "steps": [
        "For part (a), we use the identity $\\cos 2\\theta = 1 - 2\\sin^2\\theta$: \\begin{aligned} &x = 1 - 2\\sin^2\\theta \\end{aligned} Since $y = \\sin\\theta$, the Cartesian equation is: \\begin{aligned} &x = 1 - 2y^2 \\end{aligned}",
        "For part (b), we substitute $x = \\cos 2\\theta$ and $y = \\sin\\theta$ into $x + 2y - 1 = 0$: \\begin{aligned} &\\cos 2\\theta + 2\\sin\\theta - 1 = 0 \\cr &\\quad \\implies 1 - 2\\sin^2\\theta \\cr &\\qquad + 2\\sin\\theta - 1 = 0 \\cr &\\quad \\implies 2\\sin\\theta - 2\\sin^2\\theta = 0 \\cr &\\quad \\implies 2\\sin\\theta(1 - \\sin\\theta) = 0 \\end{aligned}",
        "We solve for $\\theta$ in the interval $0 \\le \\theta \\le \\dfrac{\\pi}{2}$:<br><br>• For $P$, $\\sin\\theta = 0 \\implies \\theta = 0$<br>• For $Q$, $\\sin\\theta = 1 \\implies \\theta = \\dfrac{\\pi}{2}$<br><br>Now determine the coordinates $(x, y)$:<br><br>• At $\\theta = 0$: $x = 1, y = 0 \\implies P(1, 0)$<br>• At $\\theta = \\dfrac{\\pi}{2}$: $x = -1, y = 1 \\implies Q(-1, 1)$",
        "For part (c), we find the derivatives with respect to $\\theta$: \\begin{aligned} &\\dfrac{\\text{d}x}{\\text{d}\\theta} = -2\\sin 2\\theta \\cr &\\dfrac{\\text{d}y}{\\text{d}\\theta} = \\cos\\theta \\end{aligned}",
        "We divide the derivatives and simplify using $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$: \\begin{aligned} &\\dfrac{\\text{d}y}{\\text{d}x} \\cr &\\quad = \\dfrac{\\cos\\theta}{-2\\sin 2\\theta} \\cr &\\quad = \\dfrac{\\cos\\theta}{-4\\sin\\theta\\cos\\theta} \\cr &\\quad = -\\dfrac{1}{4\\sin\\theta} \\end{aligned}",
        "At $P$ ($\\theta = 0$), $\\sin 0 = 0$, making the gradient undefined (a vertical line). Since $x = 1$ at $P$, the tangent equation is: \\begin{aligned} &x = 1 \\end{aligned}",
        "At $Q$ ($\\theta = \\dfrac{\\pi}{2}$), the gradient is $m = -0.25$. Using $Q(-1, 1)$: \\begin{aligned} &y - 1 = -0.25(x + 1) \\cr &\\quad \\implies 4y - 4 = -x - 1 \\cr &\\quad \\implies x + 4y - 3 = 0 \\end{aligned}",
        "To find the intersection, substitute $x = 1$ into $x + 4y - 3 = 0$: \\begin{aligned} &1 + 4y - 3 = 0 \\cr &\\quad \\implies 4y = 2 \\cr &\\quad \\implies y = 0.5 \\end{aligned} Thus, the coordinates of the intersection are $(1, 0.5)$.",
        "Final Answer: <strong>(c)</strong> Tangent at $Q$: $x + 4y - 3 = 0$, Intersection: $(1, 0.5)$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(c)</strong> Tangent at $P$: $y = 0$, Intersection: $(1, 0)$",
            "feedback": "This error occurs if you assume that the tangent is horizontal ($y = 0$) at $P$ instead of vertical ($x = 1$) because of an incorrect evaluation of the division by zero in the gradient function."
        },
        {
            "ans": "<strong>(c)</strong> Tangent at $Q$: $x - 4y + 5 = 0$, Intersection: $(1, 1.5)$",
            "feedback": "This mistake is caused by a sign error in the gradient of the tangent at $Q$, calculating $m = 0.25$ instead of $m = -0.25$."
        },
        {
            "ans": "<strong>(c)</strong> Tangent at $Q$: $x + 4y - 3 = 0$, Intersection: $(1, -0.5)$",
            "feedback": "This arises from an arithmetic sign slip when solving the final system of simultaneous linear equations to find the intersection point."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Vertical Tangent Edge Cases",
        "content": "A very common exam trap is encountering an undefined gradient of the form $\\dfrac{k}{0}$ when differentiating parametrically. Remember that an undefined gradient represents a straight vertical line of the form $x = c$. It is not 'no solution'—the equation is defined by the $x$-coordinate of that point."
    }
},
{
    "id": "004707",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Coordinate Geometry",
    "topic": "Parametric Curves",
    "subtopic": [
        "Parametric Differentiation",
        "Parametric Curve Tangents"
    ],
    "img": false,
    "question": "A curve $C$ is defined by the parametric equations: \\begin{aligned} &x = t^2 + 2t \\cr &y = t^3 - 3t \\end{aligned} <strong>(a)</strong> Find $\\dfrac{\\text{d}y}{\\text{d}x}$ in terms of $t$, simplifying your expression as far as possible.<br><br><strong>(b)</strong> Find the equation of the tangent to $C$ at the point where $t = 2$. Give your answer in the form $ax + by + c = 0$, where $a$, $b$, and $c$ are integers.",
    "steps": [
        "For part (a), we differentiate with respect to $t$: \\begin{aligned} &\\dfrac{\\text{d}x}{\\text{d}t} = 2t + 2 \\cr &\\dfrac{\\text{d}y}{\\text{d}t} = 3t^2 - 3 \\end{aligned}",
        "We divide and simplify to find $\\dfrac{\\text{d}y}{\\text{d}x}$: \\begin{aligned} &\\dfrac{\\text{d}y}{\\text{d}x} \\cr &\\quad = \\dfrac{3t^2 - 3}{2t + 2} \\cr &\\quad = \\dfrac{3(t - 1)(t + 1)}{2(t + 1)} \\cr &\\quad = \\dfrac{3(t - 1)}{2} \\end{aligned}",
        "For part (b), we find the coordinates $(x, y)$ when $t = 2$: \\begin{aligned} &x = 2^2 + 2(2) \\cr &\\quad = 8 \\cr &y = 2^3 - 3(2) \\cr &\\quad = 2 \\end{aligned} Thus, the point on $C$ is $(8, 2)$.",
        "We calculate the gradient $m$ of the tangent at $t = 2$: \\begin{aligned} &m = \\dfrac{3(2 - 1)}{2} \\cr &\\quad = 1.5 \\end{aligned}",
        "Using $(8, 2)$ and $m = 1.5$, we write the equation of the tangent: \\begin{aligned} &y - 2 = 1.5(x - 8) \\cr &\\quad \\implies 2y - 4 = 3x - 24 \\cr &\\quad \\implies 3x - 2y - 20 = 0 \\end{aligned}",
        "Final Answer: <strong>(a)</strong> $\\dfrac{ 3(t - 1) }{ 2 }$, <strong>(b)</strong> $3x - 2y - 20 = 0$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $\\dfrac{ 3(t - 1) }{ 2 }$, <strong>(b)</strong> $3x - 2y - 28 = 0$",
            "feedback": "This error occurs if you make an arithmetic error during linear expansion, calculating $1.5 \\times (-8)$ incorrectly on the right-hand side."
        },
        {
            "ans": "<strong>(a)</strong> $\\dfrac{ 3(t - 1) }{ 2 }$, <strong>(b)</strong> $3x - y - 22 = 0$",
            "feedback": "This mistake is caused by failing to multiply the left-hand side term $y - 2$ by the denominator $2$ when clearing the fractional gradient, leaving $y - 2 = 3x - 24$, giving $3x - y - 22 = 0$."
        },
        {
            "ans": "<strong>(a)</strong> $\\dfrac{ 3t - 3 }{ 2 }$, <strong>(b)</strong> $3x - 2y - 12 = 0$",
            "feedback": "This arises from a coordinates calculation error, such as incorrectly evaluating the $x$-coordinate as $4$ or the $y$-coordinate as $4$ when substituting $t = 2$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Simplification First",
        "content": "In parametric differentiation, always check if your derivative expression $\\dfrac{\\text{d}y/\\text{d}t}{\\text{d}x/\\text{d}t}$ can be factorised and simplified before substituting $t$. Cancelling common binomial factors (like $t+1$ here) prevents algebraic complexity and reduces arithmetic slips."
    }
},
{
    "id": "004708",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Coordinate Geometry",
    "topic": "Parametric Curves",
    "subtopic": [
        "Hyperbolic Cartesian Equations",
        "Parametric Normals"
    ],
    "img": false,
    "question": "The curve $C$ has the parametric equations: \\begin{aligned} &x = 3\\sec\\theta \\cr &y = 2\\tan\\theta \\cr &\\text{for } 0 \\le \\theta < \\dfrac{\\pi}{2} \\end{aligned} <strong>(a)</strong> Find the Cartesian equation of $C$.<br><br><strong>(b)</strong> Find the equation of the normal to $C$ at the point where $\\theta = \\dfrac{\\pi}{6}$. Give your answer in the form $ax + by + c\\sqrt{3} = 0$, where $a$, $b$, and $c$ are integers.",
    "steps": [
        "For part (a), we isolate the trigonometric terms: \\begin{aligned} &\\sec\\theta = \\dfrac{x}{3} \\cr &\\tan\\theta = \\dfrac{y}{2} \\end{aligned}",
        "We substitute into the trigonometric identity $\\sec^2\\theta - \\tan^2\\theta = 1$: \\begin{aligned} &\\dfrac{x^2}{9} - \\dfrac{y^2}{4} = 1 \\end{aligned}",
        "For part (b), we differentiate with respect to $\\theta$: \\begin{aligned} &\\dfrac{\\text{d}x}{\\text{d}\\theta} = 3\\sec\\theta\\tan\\theta \\cr &\\dfrac{\\text{d}y}{\\text{d}\\theta} = 2\\sec^2\\theta \\end{aligned}",
        "We divide and simplify to find $\\dfrac{\\text{d}y}{\\text{d}x}$: \\begin{aligned} &\\dfrac{\\text{d}y}{\\text{d}x} \\cr &\\quad = \\dfrac{2\\sec^2\\theta}{3\\sec\\theta\\tan\\theta} \\cr &\\quad = \\dfrac{2\\sec\\theta}{3\\tan\\theta} \\cr &\\quad = \\dfrac{2}{3\\sin\\theta} \\end{aligned}",
        "We evaluate the gradient of the tangent at $\\theta = \\dfrac{\\pi}{6}$: \\begin{aligned} &m_{\\text{tan}} \\cr &\\quad = \\dfrac{2}{3\\sin(\\frac{\\pi}{6})} \\cr &\\quad = \\dfrac{2}{1.5} \\cr &\\quad = \\dfrac{4}{3} \\end{aligned} The normal gradient is the negative reciprocal: \\begin{aligned} &m_{\\text{norm}} = -\\dfrac{3}{4} \\end{aligned}",
        "We evaluate the coordinates at $\\theta = \\dfrac{\\pi}{6}$: \\begin{aligned} &x = 3\\sec\\Big(\\dfrac{\\pi}{6}\\Big) \\cr &\\quad = 3\\Big(\\dfrac{2}{\\sqrt{3}}\\Big) \\cr &\\quad = 2\\sqrt{3} \\cr &y = 2\\tan\\Big(\\dfrac{\\pi}{6}\\Big) \\cr &\\quad = 2\\Big(\\dfrac{1}{\\sqrt{3}}\\Big) \\cr &\\quad = \\dfrac{2\\sqrt{3}}{3} \\end{aligned}",
        "Using the point and the normal gradient $m_{\\text{norm}} = -\\dfrac{3}{4}$: \\begin{aligned} &y - \\dfrac{2\\sqrt{3}}{3} = -\\dfrac{3}{4}(x - 2\\sqrt{3}) \\cr &\\quad \\implies 4y - \\dfrac{8\\sqrt{3}}{3} = -3(x - 2\\sqrt{3}) \\cr &\\quad \\implies 12y - 8\\sqrt{3} = -9(x - 2\\sqrt{3}) \\cr &\\quad \\implies 12y - 8\\sqrt{3} = -9x + 18\\sqrt{3} \\cr &\\quad \\implies 9x + 12y - 26\\sqrt{3} = 0 \\end{aligned}",
        "Final Answer: <strong>(b)</strong> $9x + 12y - 26\\sqrt{ 3 } = 0$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(b)</strong> $9x + 12y - 10\\sqrt{ 3 } = 0$",
            "feedback": "This error occurs if you make an algebraic sign slip when distributing the $-9$ on the right-hand side of the normal equation, calculating $-9x - 18\\sqrt{3}$ instead of $-9x + 18\\sqrt{3}$."
        },
        {
            "ans": "<strong>(b)</strong> $3x - 4y - 10\\sqrt{ 3 } = 0$",
            "feedback": "This mistake is caused by using the tangent gradient $m_{\\text{tan}} = \\dfrac{4}{3}$ instead of the normal gradient $m_{\\text{norm}} = -\\dfrac{3}{4}$ to write the equation of the line."
        },
        {
            "ans": "<strong>(b)</strong> $9x + 12y - 22\\sqrt{ 3 } = 0$",
            "feedback": "This arises from an arithmetic error when clearing the fractional coordinate denominators, such as incorrectly evaluating $4 \\times \\dfrac{2\\sqrt{3}}{3}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Normal Gradient Check",
        "content": "When asked for the equation of a normal, always write down your calculated tangent gradient first, check it, and then explicitly write out its negative reciprocal: $m_{\\text{norm}} = -\\dfrac{1}{m_{\\text{tan}}}$. Forgetting to invert or swap the sign of the gradient is one of the most common exam mistakes."
    }
},
{
    "id": "004709",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Coordinate Geometry",
    "topic": "Parametric Curves",
    "subtopic": [
        "Stationary Points",
        "Tangents Parallel to Axes"
    ],
    "img": false,
    "question": "A curve $C$ is defined parametrically by: \\begin{aligned} &x = t^3 - 3t \\cr &y = t^2 + 4t \\end{aligned} <strong>(a)</strong> Find the coordinates of any points on $C$ where the tangent is parallel to the $y$-axis (vertical tangents).<br><br><strong>(b)</strong> Find the coordinates of any points on $C$ where the tangent is parallel to the $x$-axis (horizontal tangents).",
    "steps": [
        "We find the derivatives of $x$ and $y$ with respect to $t$: \\begin{aligned} &\\dfrac{\\text{d}x}{\\text{d}t} = 3t^2 - 3 \\cr &\\dfrac{\\text{d}y}{\\text{d}t} = 2t + 4 \\end{aligned}",
        "For part (a), vertical tangents occur when $\\dfrac{\\text{d}x}{\\text{d}t} = 0$: \\begin{aligned} &3t^2 - 3 = 0 \\cr &\\quad \\implies 3(t - 1)(t + 1) = 0 \\cr &\\quad \\implies t = \\pm 1 \\end{aligned}",
        "We evaluate the coordinates at $t = \\pm 1$:<br><br>• For $t = 1$: $x = -2, y = 5 \\implies (-2, 5)$<br>• For $t = -1$: $x = 2, y = -3 \\implies (2, -3)$<br><br>Thus, the points with vertical tangents are $(-2, 5)$ and $(2, -3)$.",
        "For part (b), horizontal tangents occur when $\\dfrac{\\text{d}y}{\\text{d}t} = 0$: \\begin{aligned} &2t + 4 = 0 \\cr &\\quad \\implies t = -2 \\end{aligned}",
        "We evaluate the coordinates at $t = -2$: \\begin{aligned} &x = (-2)^3 - 3(-2) \\cr &\\quad = -8 + 6 \\cr &\\quad = -2 \\cr &y = (-2)^2 + 4(-2) \\cr &\\quad = 4 - 8 \\cr &\\quad = -4 \\end{aligned} Thus, the point with a horizontal tangent is $(-2, -4)$.",
        "Final Answer: <strong>(a)</strong> $(-2, 5)$ and $(2, -3)$, <strong>(b)</strong> $(-2, -4)$"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $(-2, 5)$ and $(2, -3)$, <strong>(b)</strong> $(2, -4)$",
            "feedback": "This error occurs in part (b) if you make an arithmetic sign slip when evaluating the $x$-coordinate at $t = -2$, calculating $x = 2$ instead of $-2$."
        },
        {
            "ans": "<strong>(a)</strong> $(2, 5)$ and $(-2, -3)$, <strong>(b)</strong> $(-2, -4)$",
            "feedback": "This mistake is caused by swapping the $x$-coordinate values of the vertical tangent points, evaluating $x$ at $t = 1$ as $2$ instead of $-2$."
        },
        {
            "ans": "<strong>(a)</strong> $(-2, 5)$ only, <strong>(b)</strong> $(-2, -4)$",
            "feedback": "This error occurs if you only solve the positive root of the quadratic equation $t^2 = 1$, completely omitting the second vertical tangent point defined by $t = -1$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Horizontal vs. Vertical Tangents",
        "content": "For any parametrically defined curve, remember the definitions:<br><br>1. A tangent is horizontal when $\\dfrac{\\text{d}y}{\\text{d}t} = 0$.<br><br>2. A tangent is vertical when $\\dfrac{\\text{d}x}{\\text{d}t} = 0$.<br><br>Always verify that both conditions do not occur simultaneously at the same value of $t$, as that would represent a singular cusp point."
    }
},
{
    "id": "004710",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "Parametric Curves",
    "subtopic": [
        "Parametric Integration",
        "Area Under Curves"
    ],
    "img": false,
    "question": "A curve $C$ is defined parametrically by: \\begin{aligned} &x = t^2 \\cr &y = 3t - t^2 \\cr &\\text{for } 0 \\le t \\le 3 \\end{aligned} Find the exact area of the finite region bounded by the curve $C$ and the $x$-axis.",
    "steps": [
        "The curve meets the $x$-axis when $y = 0$: \\begin{aligned} &3t - t^2 = 0 \\cr &\\quad \\implies t(3 - t) = 0 \\cr &\\quad \\implies t = 0 \\text{ or } t = 3 \\end{aligned}",
        "The area bounded by the curve and the $x$-axis is given by: \\begin{aligned} &\\text{Area} \\cr &\\quad = \\int_0^3 y\\dfrac{\\text{d}x}{\\text{d}t}\\text{d}t \\end{aligned}",
        "We find the derivative $\\dfrac{\\text{d}x}{\\text{d}t}$ from $x = t^2$: \\begin{aligned} &\\dfrac{\\text{d}x}{\\text{d}t} = 2t \\end{aligned}",
        "We substitute our expressions into the parametric integral: \\begin{aligned} &\\text{Area} \\cr &\\quad = \\int_0^3 (3t - t^2)(2t)\\text{d}t \\cr &\\quad = \\int_0^3 (6t^2 - 2t^3)\\text{d}t \\end{aligned}",
        "We evaluate the definite integral: \\begin{aligned} &\\text{Area} \\cr &\\quad = \\Big[2t^3 - \\dfrac{1}{2}t^4\\Big]_0^3 \\cr &\\quad = \\Big(2(27) - \\dfrac{81}{2}\\Big) - 0 \\cr &\\quad = 54 - 40.5 \\cr &\\quad = 13.5 \\end{aligned} Thus, the exact area of the region is $13.5$.",
        "Final Answer: $13.5$"
    ],
    "pi_options": [
        {
            "ans": "$27$",
            "feedback": "This error occurs if you forget to divide by $2$ when evaluating the integral of the second term, integrating $-2t^3$ as $-t^4$ instead of $-\\dfrac{1}{2}t^4$."
        },
        {
            "ans": "$54$",
            "feedback": "This mistake is caused by completely omitting the term $\\dfrac{\\text{d}x}{\\text{d}t} = 2t$ from the parametric area integral, integrating only $y = 3t - t^2$ over the limits."
        },
        {
            "ans": "$18.5$",
            "feedback": "This arises from an arithmetic error when evaluating $2(27) = 54$, or a decimal subtraction slip."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Parametric Integration Steps",
        "content": "When calculating the area under a parametric curve, never integrate $y$ directly with respect to $t$. You must always multiply the $y$ function by $\\dfrac{\\text{d}x}{\\text{d}t}$ and rewrite the differential as $\\text{d}x = \\dfrac{\\text{d}x}{\\text{d}t}\\text{d}t$ before performing any integration."
    }
},
{
    "id": "004711",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Proof",
    "topic": "Proof by Contradiction",
    "subtopic": [
        "Trigonometry",
        "Inequalities"
    ],
    "img": false,
    "question": "Prove by contradiction that, for every real number $x$ such that $0 < x < \\dfrac{\\pi}{2}$: \\begin{aligned} &\\tan x + \\cot x \\ge 2 \\end{aligned}",
    "steps": [
        "We begin by assuming the negation of the statement.<br><br>Assume there exists a real number $x$ with $0 < x < \\dfrac{\\pi}{2}$ such that: \\begin{aligned} &\\tan x + \\cot x < 2 \\end{aligned}",
        "For $0 < x < \\dfrac{\\pi}{2}$, both $\\tan x$ and $\\cot x$ are strictly positive. We substitute $\\cot x = \\dfrac{1}{\\tan x}$: \\begin{aligned} &\\tan x + \\dfrac{1}{\\tan x} < 2 \\end{aligned}",
        "Since $\\tan x > 0$, multiplying by $\\tan x$ preserves the inequality sign: \\begin{aligned} &\\tan^2 x + 1 < 2\\tan x \\cr &\\quad \\implies \\tan^2 x - 2\\tan x + 1 < 0 \\end{aligned}",
        "We factorise the quadratic expression: \\begin{aligned} &(\\tan x - 1)^2 < 0 \\end{aligned}",
        "This is a contradiction. The square of any real number must be non-negative, so $(\\tan x - 1)^2 \\ge 0$ for all real $x$. Therefore, the initial assumption is false, and for all $0 < x < \\dfrac{\\pi}{2}$: \\begin{aligned} &\\tan x + \\cot x \\ge 2 \\end{aligned}",
        "Final Answer: $$(\\tan x - 1)^2 < 0$$"
    ],
    "pi_options": [
        {
            "ans": "$$\\tan x + \\cot x > 2$$",
            "feedback": "This is incorrect. When starting a proof by contradiction, we must assume the negation of the statement. The negation of $\\ge 2$ is strictly $< 2$, not $> 2$."
        },
        {
            "ans": "$$(\\tan x - 1)^2 > 0$$",
            "feedback": "This is incorrect. A squared real quantity is non-negative and does not provide the required contradiction."
        },
        {
            "ans": "$$(\\tan x + 1)^2 < 0$$",
            "feedback": "This is incorrect. Expanding this yields a $+2\\tan x$ middle term, whereas our inequality factorises to $(\\tan x - 1)^2 < 0$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Perfecting the Assumption",
        "content": "Always begin a proof by contradiction by writing down a clear, explicit assumption. For a statement of the form $P \\implies Q$, we assume $P$ and the negation of $Q$. In this case, the negation of $\\ge 2$ is strictly $< 2$. Do not forget to state why multiplying by $\\tan x$ is valid; we must state that $\\tan x > 0$ for $0 < x < \\dfrac{\\pi}{2}$ to ensure the inequality sign is not reversed."
    }
},
{
    "id": "004712",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Proof",
    "topic": "Proof by Contradiction",
    "subtopic": [
        "Logarithms",
        "Irrational Numbers"
    ],
    "img": false,
    "question": "Prove by contradiction that $\\log_2 5$ is an irrational number.",
    "steps": [
        "We assume the negation of the statement.<br><br>Assume $\\log_2 5$ is rational, so it can be written as: \\begin{aligned} &\\log_2 5 = \\dfrac{p}{q} \\end{aligned} where $p$ and $q$ are positive integers with no common factors, and $q \\ne 0$.",
        "Using the definition of logarithms, we rewrite this in exponential form: \\begin{aligned} &2^{\\frac{p}{q}} = 5 \\end{aligned}",
        "We raise both sides to the power of $q$: \\begin{aligned} &\\big(2^{\\frac{p}{q}}\\big)^q = 5^q \\cr &\\quad \\implies 2^p = 5^q \\end{aligned}",
        "We analyze the parity of both sides.<br><br>Since $\\log_2 5 > 0$, $p$ and $q$ are positive integers ($p \\ge 1, q \\ge 1$).<br><br>The left-hand side $2^p$ is a power of $2$, so it is an even integer.<br><br>The right-hand side $5^q$ is a power of $5$, so it is an odd integer.",
        "This is a contradiction, as an even integer can never equal an odd integer ($2^p \\ne 5^q$). Therefore, our assumption is false, and $\\log_2 5$ is an irrational number.",
        "Final Answer: $$2^p = 5^q$$"
    ],
    "pi_options": [
        {
            "ans": "$$2^q = 5^p$$",
            "feedback": "This is incorrect. Raising $2^{\\frac{p}{q}} = 5$ to the power of $q$ gives $2^p = 5^q$. Swapping the powers $p$ and $q$ is an algebraic error."
        },
        {
            "ans": "$$5^p = 2^q$$",
            "feedback": "This is incorrect. Converting $\\log_2 5 = \\dfrac{p}{q}$ to index form yields $2^{\\frac{p}{q}} = 5$, giving $2^p = 5^q$, not $5^p = 2^q$."
        },
        {
            "ans": "$$2^p = 5^q \\implies p = q = 0$$",
            "feedback": "This is incorrect. Since $\\log_2 5 > 0$, $p$ and $q$ must be positive integers, so they cannot be zero."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Fundamental Parity Arguments",
        "content": "When proving that a logarithm is irrational, the proof almost always reduces to an equation of the form $a^p = b^q$. By showing that one side is strictly even and the other is strictly odd (or by using prime factorisation uniqueness), you can construct an elegant and mathematically bulletproof contradiction."
    }
},
{
    "id": "004713",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Proof",
    "topic": "Proof by Contradiction",
    "subtopic": [
        "Algebraic Inequalities",
        "Algebraic Fractions"
    ],
    "img": false,
    "question": "Prove by contradiction that, for all positive real numbers $a$ and $b$: \\begin{aligned} &\\dfrac{a}{b} + \\dfrac{b}{a} \\ge 2 \\end{aligned}",
    "steps": [
        "We assume the negation of the statement.<br><br>Assume there exist positive real numbers $a$ and $b$ such that: \\begin{aligned} &\\dfrac{a}{b} + \\dfrac{b}{a} < 2 \\end{aligned}",
        "Since $a, b > 0$, the product $ab$ is strictly positive. Multiplying by $ab$ preserves the inequality sign: \\begin{aligned} &ab\\Big(\\dfrac{a}{b} + \\dfrac{b}{a}\\Big) < 2ab \\cr &\\quad \\implies a^2 + b^2 < 2ab \\end{aligned}",
        "Rearranging terms to the left-hand side gives: \\begin{aligned} &a^2 - 2ab + b^2 < 0 \\end{aligned}",
        "We factorise the left-hand side: \\begin{aligned} &(a - b)^2 < 0 \\end{aligned}",
        "This is a contradiction. For all real numbers $a$ and $b$, $(a - b)^2 \\ge 0$. Therefore, our assumption is false, and for all positive real numbers $a$ and $b$: \\begin{aligned} &\\dfrac{a}{b} + \\dfrac{b}{a} \\ge 2 \\end{aligned}",
        "Final Answer: $$(a - b)^2 < 0$$"
    ],
    "pi_options": [
        {
            "ans": "$$(a + b)^2 < 0$$",
            "feedback": "This is incorrect. Expanding $(a + b)^2 < 0$ yields a $+2ab$ middle term, whereas our rearranged inequality is $a^2 - 2ab + b^2 < 0$."
        },
        {
            "ans": "$$a^2 + b^2 > 2ab$$",
            "feedback": "This is incorrect. This statement is mathematically true for distinct positive reals and does not yield a contradiction."
        },
        {
            "ans": "$$\\dfrac{a}{b} + \\dfrac{b}{a} > 2$$",
            "feedback": "This is incorrect. The negation of $\\ge 2$ is strictly $< 2$, not $> 2$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Connection to AM-GM",
        "content": "This inequality is a special case of the AM-GM inequality: \\begin{aligned} &\\dfrac{x + y}{2} \\ge \\sqrt{xy} \\end{aligned} Setting $x = \\dfrac{a}{b}$ and $y = \\dfrac{b}{a}$ gives $\\sqrt{xy} = 1$, leading directly to $\\dfrac{a}{b} + \\dfrac{b}{a} \\ge 2$."
    }
},
{
    "id": "004714",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Proof",
    "topic": "Proof by Contradiction",
    "subtopic": [
        "Number Theory",
        "Even and Odd Integers"
    ],
    "img": false,
    "question": "Prove by contradiction that, for all integers $n$, if $n^2 - 4n + 7$ is even, then $n$ must be odd.",
    "steps": [
        "We assume the negation of the conditional statement.<br><br>The negation of '$P \\implies Q$' is '$P$ and not $Q$'. We assume that $n^2 - 4n + 7$ is even and $n$ is even.",
        "Since $n$ is even, we can write: \\begin{aligned} &n = 2k \\end{aligned} where $k$ is an integer.",
        "We substitute $n = 2k$ into the quadratic expression: \\begin{aligned} &n^2 - 4n + 7 \\cr &\\quad = (2k)^2 - 4(2k) + 7 \\cr &\\quad = 4k^2 - 8k + 7 \\end{aligned}",
        "We rewrite this expression to examine its parity: \\begin{aligned} &4k^2 - 8k + 7 \\cr &\\quad = 4k^2 - 8k + 6 + 1 \\cr &\\quad = 2(2k^2 - 4k + 3) + 1 \\end{aligned}",
        "Since $k$ is an integer, $m = 2k^2 - 4k + 3$ is an integer. Thus: \\begin{aligned} &n^2 - 4n + 7 = 2m + 1 \\end{aligned} By definition, $2m + 1$ is an odd integer.",
        "This is a contradiction. We assumed $n^2 - 4n + 7$ is even, but we proved it is odd. Therefore, our assumption is false, and if $n^2 - 4n + 7$ is even, $n$ must be odd.",
        "Final Answer: $$n^2 - 4n + 7 = 2(2k^2 - 4k + 3) + 1$$"
    ],
    "pi_options": [
        {
            "ans": "$$n^2 - 4n + 7 = 2(2k^2 - 4k) + 7$$",
            "feedback": "This is not fully simplified into standard form. To show an expression is odd, it must be written strictly as $2m + 1$ for an integer $m$."
        },
        {
            "ans": "$$n = 2k + 1$$",
            "feedback": "This assumes $n$ is odd. In proof by contradiction, we assume the conclusion is false, meaning $n$ is even ($n = 2k$)."
        },
        {
            "ans": "$$n^2 - 4n + 7 = 4k^2 - 8k + 7$$",
            "feedback": "This expression is not yet grouped to demonstrate parity. We must factorise out a factor of $2$ to write it as $2m + 1$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Negating Conditional Statements",
        "content": "A common student slip is misinterpreting how to negate an implication 'if $P$ then $Q$'. Many write 'assume if $P$ is even then $n$ is even' or 'assume if $P$ is odd then $n$ is even'. The correct contradiction setup is to assume that the premise $P$ is true AND the conclusion $Q$ is false (i.e., $P \\text{ AND NOT } Q$)."
    }
},
{
    "id": "004715",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Proof",
    "topic": "Proof by Contradiction",
    "subtopic": [
        "Number Theory",
        "Diophantine Equations",
        "Difference of Two Squares"
    ],
    "img": false,
    "question": "Prove by contradiction that there are no positive integers $m$ and $n$ such that: \\begin{aligned} &m^2 - n^2 = 14 \\end{aligned}",
    "steps": [
        "We assume the negation of the statement.<br><br>Assume there exist positive integers $m$ and $n$ such that: \\begin{aligned} &m^2 - n^2 = 14 \\end{aligned}",
        "We factorise using the difference of two squares: \\begin{aligned} &(m - n)(m + n) = 14 \\end{aligned}",
        "Since $m$ and $n$ are positive integers, $m + n > m - n > 0$. Both factors must be positive integers.<br><br>The only positive factor pairs of $14$ are $(1, 14)$ and $(2, 7)$.",
        "We test each factor pair:<br><br>• <strong>Case 1:</strong> $m - n = 1$ and $m + n = 14$. Adding gives: \\begin{aligned} &2m = 15 \\cr &\\quad \\implies m = 7.5 \\end{aligned} This contradicts $m \\in \\mathbb{Z}^+$.<br><br>• <strong>Case 2:</strong> $m - n = 2$ and $m + n = 7$. Adding gives: \\begin{aligned} &2m = 9 \\cr &\\quad \\implies m = 4.5 \\end{aligned} This also contradicts $m \\in \\mathbb{Z}^+$.",
        "Since all possible factor pairs yield a contradiction, no such integers $m$ and $n$ exist. Therefore, our original assumption is false.",
        "Final Answer: $$\\text{No integer solutions}$$"
    ],
    "pi_options": [
        {
            "ans": "$$m = 8, n = 5$$",
            "feedback": "This is incorrect. Substituting these values gives $8^2 - 5^2 = 39 \\ne 14$."
        },
        {
            "ans": "$$m = 5, n = 3$$",
            "feedback": "This is incorrect. For $m = 5$ and $n = 3$, $m^2 - n^2 = 25 - 9 = 16 \\ne 14$."
        },
        {
            "ans": "$$(m - n)(m + n) = 14$$ $$\\implies m^2 + n^2 = 14$$",
            "feedback": "This is incorrect. The difference of two squares factorises as $(m-n)(m+n) = m^2 - n^2$, not $m^2 + n^2$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: The Parity of Difference of Squares",
        "content": "A beautiful shortcut relies on parity: $(m - n) + (m + n) = 2m$, which is always even. Thus $(m - n)$ and $(m + n)$ must have the same parity. If both are odd, their product is odd (which $14$ is not). If both are even, their product is a multiple of $4$. Since $14$ is not divisible by $4$, no integer solutions can exist."
    }
},
{
    "id": "004716",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "Inverse Functions",
        "Composite Functions",
        "Graph Sketching"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Given that $f$ is a function:<br><strong>(i)</strong> State the condition for $f^{-1}$ to exist.<br><strong>(ii)</strong> Find $f^{-1}f(x)$.<br><br><strong>(b)</strong> The functions $g$ and $h$ are given by: \\begin{aligned} &g(x) = x^2 - 4 \\cr &h(x) = \\mathrm{e}^{2x} + 2 \\end{aligned} <strong>(i)</strong> Suggest a domain for $g$ such that $g^{-1}$ exists.<br><strong>(ii)</strong> Given that the domain of $h$ is $(-\\infty, \\infty)$, find an expression for $h^{-1}(x)$. Sketch, using the same axes, the graphs of $h(x)$ and $h^{-1}(x)$, indicating clearly any asymptotes and axis intercepts.<br><strong>(iii)</strong> Determine an expression for $gh(x)$ in its simplest form.",
    "steps": [
        "<strong>(a)(i)</strong> For the inverse $f^{-1}$ to exist, $f$ must be a <strong>one-to-one</strong> function.<br><br><strong>(a)(ii)</strong> Applying a function and its inverse returns the input: \\begin{aligned} &f^{-1}f(x) = x \\end{aligned}",
        "<strong>(b)(i)</strong> The quadratic $g(x) = x^2 - 4$ is many-to-one over $\\mathbb{R}$. Restricting to one side of its vertex at $x = 0$ gives a valid domain: \\begin{aligned} &x \\ge 0 \\end{aligned}",
        "<strong>(b)(ii)</strong> To find $h^{-1}(x)$, let $y = h(x)$ and make $x$ the subject: \\begin{aligned} &y = \\mathrm{e}^{2x} + 2 \\cr &\\quad \\implies y - 2 = \\mathrm{e}^{2x} \\cr &\\quad \\implies 2x = \\ln(y - 2) \\cr &\\quad \\implies x = 0.5\\ln(y - 2) \\end{aligned} Swapping variables gives: \\begin{aligned} &h^{-1}(x) = 0.5\\ln(x - 2) \\end{aligned} for $x > 2$.",
        "Key features for the sketch:<br><br>• $h(x) = \\mathrm{e}^{2x} + 2$ has a horizontal asymptote at $y = 2$ and crosses the $y$-axis at $(0, 3)$.<br><br>• $h^{-1}(x) = 0.5\\ln(x - 2)$ has a vertical asymptote at $x = 2$ and crosses the $x$-axis at $(3, 0)$.<br><br>• The curves reflect across $y = x$.<br><br><img src='images/Pure_SVGs/004716_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "<strong>(b)(iii)</strong> To find $gh(x)$, substitute $h(x)$ into $g(x)$: \\begin{aligned} &gh(x) \\cr &\\quad = (\\mathrm{e}^{2x} + 2)^2 - 4 \\cr &\\quad = \\mathrm{e}^{4x} + 4\\mathrm{e}^{2x} + 4 - 4 \\cr &\\quad = \\mathrm{e}^{4x} + 4\\mathrm{e}^{2x} \\end{aligned}",
        "Final Answer: $$h^{-1}(x) = 0.5\\ln(x - 2)$$ and $$gh(x) = \\mathrm{e}^{ 4x } + 4\\mathrm{e}^{ 2x }$$"
    ],
    "pi_options": [
        {
            "ans": "$$h^{-1}(x) = \\ln(x - 2)^2$$ and $$gh(x) = \\mathrm{e}^{ 4x }$$",
            "feedback": "This is incorrect. Dividing $\\ln(y - 2)$ by $2$ gives $0.5\\ln(y - 2)$, not $\\ln(y - 2)^2$. Also, squaring $(\\mathrm{e}^{2x} + 2)$ produces a middle term $4\\mathrm{e}^{2x}$."
        },
        {
            "ans": "$$h^{-1}(x) = 0.5\\ln(x + 2)$$ and $$gh(x) = \\mathrm{e}^{ 4x } + 4\\mathrm{e}^{ 2x } + 8$$",
            "feedback": "This is incorrect. Rearranging $y = \\mathrm{e}^{2x} + 2$ yields $y - 2 = \\mathrm{e}^{2x}$, which gives a minus sign inside the logarithm. Also, the $+4$ and $-4$ cancel in $gh(x)$."
        },
        {
            "ans": "$$h^{-1}(x) = 2\\ln(x - 2)$$ and $$gh(x) = \\mathrm{e}^{ 4x } + 4$$",
            "feedback": "This is incorrect. When isolating $x$ from $2x = \\ln(y - 2)$, divide by $2$ to obtain a coefficient of $0.5$, not $2$. Expanding the composite function also yields a non-zero exponential middle term."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Expanding Exponential Quadratics",
        "content": "A frequent slip is expanding $(\\mathrm{e}^{2x} + 2)^2$ as $\\mathrm{e}^{4x} + 4$. Using $(a+b)^2 = a^2 + 2ab + b^2$, the middle cross-term is $2(\\mathrm{e}^{2x})(2) = 4\\mathrm{e}^{2x}$."
    }
},
{
    "id": "004717",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "Inverse Functions",
        "Composite Functions",
        "Graph Sketching"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Explain why the function $f(x) = x^2 - 6x + 9$ with domain $(-\\infty, \\infty)$ does not have an inverse.<br><br><strong>(b)</strong> The functions $g$ and $h$ are defined by: \\begin{aligned} &g(x) = \\dfrac{x + 3}{x - 3} \\quad \\text{for } x \\ne 3 \\cr &h(x) = x^2 - 6x + 14 \\end{aligned} <strong>(i)</strong> Suggest a domain of the form $x \\ge k$ for $h$ such that $h^{-1}$ exists.<br><strong>(ii)</strong> Find an expression for $g^{-1}(x)$. Sketch, using the same axes, the graphs of $y = g(x)$ and $y = g^{-1}(x)$, showing clearly their vertical and horizontal asymptotes and axis intercepts.<br><strong>(iii)</strong> Find an expression for the composite function $hg(x)$ for $x \\ne 3$.",
    "steps": [
        "<strong>(a)</strong> Factorising gives $f(x) = (x - 3)^2$, which is a parabola with its vertex at $x = 3$. Over $(-\\infty, \\infty)$, $f$ is <strong>many-to-one</strong> (e.g. $f(2) = f(4) = 1$). Since only one-to-one functions have inverses, $f^{-1}$ does not exist.",
        "<strong>(b)(i)</strong> Completing the square for $h(x)$: \\begin{aligned} &h(x) \\cr &\\quad = (x - 3)^2 - 9 + 14 \\cr &\\quad = (x - 3)^2 + 5 \\end{aligned} The vertex is at $(3, 5)$. To restrict the quadratic domain to make it one-to-one, we choose: \\begin{aligned} &k = 3 \\end{aligned}",
        "<strong>(b)(ii)</strong> To find $g^{-1}(x)$, let $y = g(x)$ and isolate $x$: \\begin{aligned} &y = \\dfrac{x + 3}{x - 3} \\cr &\\quad \\implies y(x - 3) = x + 3 \\cr &\\quad \\implies xy - 3y = x + 3 \\cr &\\quad \\implies xy - x = 3y + 3 \\cr &\\quad \\implies x(y - 1) = 3(y + 1) \\cr &\\quad \\implies x = \\dfrac{3(y + 1)}{y - 1} \\end{aligned} Swapping variables gives: \\begin{aligned} &g^{-1}(x) = \\dfrac{3x + 3}{x - 1} \\end{aligned} for $x \\ne 1$.",
        "Key features for the sketch:<br><br>• $g(x) = \\dfrac{x + 3}{x - 3}$ has asymptotes $x = 3$ and $y = 1$, with intercepts $(-3, 0)$ and $(0, -1)$.<br><br>• $g^{-1}(x) = \\dfrac{3x + 3}{x - 1}$ has asymptotes $x = 1$ and $y = 3$, with intercepts $(-1, 0)$ and $(0, -3)$.<br><br>• The curves reflect across $y = x$.<br><br><img src='images/Pure_SVGs/004717_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "<strong>(b)(iii)</strong> To find $hg(x)$, substitute $g(x)$ into $h(x)$: \\begin{aligned} &hg(x) \\cr & = \\Big(\\dfrac{x + 3}{x - 3}\\Big)^2 - 6\\Big(\\dfrac{x + 3}{x - 3}\\Big) + 14 \\cr & = \\dfrac{(x + 3)^2 - 6(x^2 - 9) + 14(x - 3)^2}{(x - 3)^2} \\cr & = \\dfrac{x^2 + 6x + 9 - 6x^2 + 54}{(x - 3)^2} \\cr &\\qquad + \\dfrac{14x^2 - 84x + 126}{(x - 3)^2} \\cr & = \\dfrac{9x^2 - 78x + 189}{(x - 3)^2} \\cr & = \\dfrac{3(3x^2 - 26x + 63)}{(x - 3)^2} \\end{aligned}",
        "Final Answer: $$g^{-1}(x) = \\frac{ 3x + 3 }{ x - 1 }$$ and $$hg(x) = \\frac{ 3(3x^2 - 26x + 63) }{ (x - 3)^2 }$$"
    ],
    "pi_options": [
        {
            "ans": "$$g^{-1}(x) = \\frac{ 3x - 3 }{ x + 1 }$$ and $$hg(x) = \\frac{ 9x^2 - 18x + 189 }{ (x - 3)^2 }$$",
            "feedback": "This is incorrect. Factorising $xy - x = 3y + 3$ yields $x(y - 1) = 3(y + 1)$, giving $x - 1$ in the denominator. In $hg(x)$, expand $-6(x+3)(x-3)$ as $-6(x^2 - 9) = -6x^2 + 54$."
        },
        {
            "ans": "$$g^{-1}(x) = \\frac{ x + 3 }{ 3x - 1 }$$ and $$hg(x) = \\frac{ 9x^2 - 78x + 144 }{ (x - 3)^2 }$$",
            "feedback": "This is incorrect. Reorganising the fraction requires collecting $x$ terms on one side and $y$ terms on the other. For $hg(x)$, expand $14(x - 3)^2$ as $14x^2 - 84x + 126$."
        },
        {
            "ans": "$$g^{-1}(x) = \\frac{ 3x + 3 }{ x - 1 }$$ and $$hg(x) = \\frac{ 9x^2 - 6x + 189 }{ (x - 3)^2 }$$",
            "feedback": "This is incorrect. While $g^{-1}(x)$ is correct, combining $+6x$ and $-84x$ gives a linear term of $-78x$, not $-6x$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Symmetry of Inverse Asymptotes",
        "content": "Because $f^{-1}(x)$ reflects $f(x)$ across $y = x$, coordinates and asymptotes swap. If a curve has asymptotes $x = a$ and $y = b$, its inverse must have asymptotes $x = b$ and $y = a$."
    }
},
{
    "id": "004718",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Proof",
    "topic": "Functions",
    "subtopic": [
        "Domain and Range",
        "Inverse Functions",
        "Composite Equations"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Given that $f(x) = \\ln(x - 2)$ for $x > 2$:<br><strong>(i)</strong> Write down the range of $f$.<br><strong>(ii)</strong> Find an expression for $f^{-1}(x)$, stating its domain.<br><br><strong>(b)</strong> The functions $g$ and $h$ are defined by: \\begin{aligned} &g(x) = 3x - 2 \\quad \\text{for } x \\in \\mathbb{R} \\cr &h(x) = \\ln(x + 1) \\quad \\text{for } x > -1 \\end{aligned} <strong>(i)</strong> Sketch, using the same axes, the graphs of $y = h(x)$ and $y = h^{-1}(x)$, indicating clearly any asymptotes and axis intercepts.<br><strong>(ii)</strong> Find an expression for the composite function $gh(x)$, stating its domain and range.<br><strong>(iii)</strong> Solve the equation $gh(x) = 4$.",
    "steps": [
        "<strong>(a)(i)</strong> The logarithmic function $\\ln(X)$ takes all real values, so the range of $f(x) = \\ln(x - 2)$ is: \\begin{aligned} &f(x) \\in \\mathbb{R} \\end{aligned}",
        "<strong>(a)(ii)</strong> To find $f^{-1}(x)$, let $y = \\ln(x - 2)$ and make $x$ the subject: \\begin{aligned} &y = \\ln(x - 2) \\cr &\\quad \\implies \\mathrm{e}^y = x - 2 \\cr &\\quad \\implies x = \\mathrm{e}^y + 2 \\end{aligned} Swapping variables gives $f^{-1}(x) = \\mathrm{e}^x + 2$ with domain: \\begin{aligned} &x \\in \\mathbb{R} \\end{aligned}",
        "<strong>(b)(i)</strong> Key features for the sketch:<br><br>• $h(x) = \\ln(x + 1)$ has a vertical asymptote at $x = -1$ and passes through $(0, 0)$.<br><br>• $h^{-1}(x) = \\mathrm{e}^x - 1$ has a horizontal asymptote at $y = -1$ and passes through $(0, 0)$.<br><br>• The curves reflect across $y = x$.<br><br><img src='images/Pure_SVGs/004718_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "<strong>(b)(ii)</strong> Substituting $h(x)$ into $g(x)$ gives: \\begin{aligned} &gh(x) = 3\\ln(x + 1) - 2 \\end{aligned} The domain is $x > -1$, and the range is $gh(x) \\in \\mathbb{R}$.",
        "<strong>(b)(iii)</strong> We solve $gh(x) = 4$: \\begin{aligned} &3\\ln(x + 1) - 2 = 4 \\cr &\\quad \\implies 3\\ln(x + 1) = 6 \\cr &\\quad \\implies \\ln(x + 1) = 2 \\cr &\\quad \\implies x + 1 = \\mathrm{e}^2 \\cr &\\quad \\implies x = \\mathrm{e}^2 - 1 \\end{aligned}",
        "Final Answer: $$f^{-1}(x) = \\mathrm{e}^{ x } + 2$$ and $$x = \\mathrm{e}^{ 2 } - 1$$"
    ],
    "pi_options": [
        {
            "ans": "$$f^{-1}(x) = \\mathrm{e}^{ x - 2 }$$ and $$x = \\mathrm{e}^{ 2 }$$",
            "feedback": "This is incorrect. Exponentiating $y = \\ln(x - 2)$ gives $\\mathrm{e}^y = x - 2$, so $x = \\mathrm{e}^y + 2$. When solving $x + 1 = \\mathrm{e}^2$, subtract $1$ from both sides to obtain $\\mathrm{e}^2 - 1$."
        },
        {
            "ans": "$$f^{-1}(x) = \\mathrm{e}^{ x } - 2$$ and $$x = \\mathrm{e}^{ 6 } - 1$$",
            "feedback": "This is incorrect. Isolating $x$ gives $\\mathrm{e}^x + 2$. When solving $3\\ln(x + 1) = 6$, divide by $3$ first to get $\\ln(x + 1) = 2$ before exponentiating."
        },
        {
            "ans": "$$f^{-1}(x) = \\ln(x + 2)$$ and $$x = \\mathrm{e}^{ 2 } + 1$$",
            "feedback": "This is incorrect. The inverse of a natural logarithm is an exponential function. In part (b)(iii), solving $x + 1 = \\mathrm{e}^2$ yields $x = \\mathrm{e}^2 - 1$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Composite Domain and Range Rules",
        "content": "For a composite function $gh(x)$:<br><br>1. The <strong>domain</strong> of $gh$ is a subset of the domain of the inner function $h(x)$.<br><br>2. The <strong>range</strong> of $gh$ is found by evaluating the outer function $g$ across the active range of $h$."
    }
},
{
    "id": "004719",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "Trigonometric Inverses",
        "Composite Functions",
        "Range"
    ],
    "img": false,
    "question": "<strong>(a)</strong> State why a domain restriction is necessary for $f(x) = \\sin x$ to have an inverse, and write down the standard restricted domain used to define $f^{-1}(x) = \\arcsin x$.<br><br><strong>(b)</strong> The functions $g$ and $h$ are defined by: \\begin{aligned} &g(x) = 2x^2 + 1 \\quad \\text{for } x \\in \\mathbb{R} \\cr &h(x) = \\cos x \\quad \\text{for } 0 \\le x \\le \\pi \\end{aligned} <strong>(i)</strong> Find an expression for $h^{-1}(x)$, stating its domain and range. Sketch, using the same axes, the graphs of $y = h(x)$ and $y = h^{-1}(x)$.<br><strong>(ii)</strong> Determine an expression for the composite function $gh(x)$ in terms of $\\cos 2x$.<br><strong>(iii)</strong> Find the range of $gh$.",
    "steps": [
        "<strong>(a)</strong> The function $f(x) = \\sin x$ is periodic and many-to-one. Inverses only exist for one-to-one functions. The standard restricted domain is: \\begin{aligned} &-\\dfrac{\\pi}{2} \\le x \\le \\dfrac{\\pi}{2} \\end{aligned}",
        "<strong>(b)(i)</strong> The inverse of $h(x) = \\cos x$ is: \\begin{aligned} &h^{-1}(x) = \\arccos x \\end{aligned} The domain is $-1 \\le x \\le 1$, and the range is $0 \\le y \\le \\pi$.<br><br><img src='images/Pure_SVGs/004719_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "<strong>(b)(ii)</strong> Substituting $h(x)$ into $g(x)$: \\begin{aligned} &gh(x) = 2\\cos^2 x + 1 \\end{aligned} Using the double-angle identity $2\\cos^2 x = \\cos 2x + 1$: \\begin{aligned} &gh(x) \\cr &\\quad = (\\cos 2x + 1) + 1 \\cr &\\quad = \\cos 2x + 2 \\end{aligned}",
        "<strong>(b)(iii)</strong> For $0 \\le x \\le \\pi$, the argument $2x$ covers $0 \\le 2x \\le 2\\pi$. Since $-1 \\le \\cos 2x \\le 1$, adding $2$ gives: \\begin{aligned} &1 \\le \\cos 2x + 2 \\le 3 \\end{aligned} Thus, the range of $gh$ is $[1, 3]$.",
        "Final Answer: $$gh(x) = \\cos 2x + 2$$ and Range: $$[1, 3]$$"
    ],
    "pi_options": [
        {
            "ans": "$$gh(x) = \\cos 2x + 1$$ and Range: $$[0, 2]$$",
            "feedback": "This is incorrect. Using $2\\cos^2 x = \\cos 2x + 1$, $gh(x) = (\\cos 2x + 1) + 1 = \\cos 2x + 2$. The additional $+1$ in the function was omitted."
        },
        {
            "ans": "$$gh(x) = \\cos 2x + 3$$ and Range: $$[2, 4]$$",
            "feedback": "This is incorrect. Substituting $2\\cos^2 x = \\cos 2x + 1$ yields a constant term of $+2$, not $+3$."
        },
        {
            "ans": "$$gh(x) = \\cos 2x$$ and Range: $$[-1, 1]$$",
            "feedback": "This is incorrect. The constant terms were omitted when applying the identity $2\\cos^2 x = \\cos 2x + 1$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Range of Periodic Composites",
        "content": "Because $0 \\le x \\le \\pi$, the argument $2x$ spans $[0, 2\\pi]$. This represents a complete cosine period, achieving both its minimum of $-1$ and maximum of $1$."
    }
},
{
    "id": "004720",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "Square Root Functions",
        "Domain Restriction",
        "Solving Composite Equations"
    ],
    "img": false,
    "question": "<strong>(a)</strong> A function $f$ is defined by $f(x) = \\sqrt{x - 3} + 2$ for $x \\ge 3$.<br><strong>(i)</strong> State the range of $f$.<br><strong>(ii)</strong> Find an expression for $f^{-1}(x)$, stating its domain.<br><br><strong>(b)</strong> The functions $g$ and $h$ are defined by: \\begin{aligned} &g(x) = 2x - 5 \\quad \\text{for } x \\in \\mathbb{R} \\cr &h(x) = \\sqrt{2x + 1}  \\text{ for } x \\ge -0.5 \\end{aligned} <strong>(i)</strong> Sketch, using the same axes, the graphs of $y = h(x)$ and $y = h^{-1}(x)$, showing coordinates of axis intercepts and end-points.<br><strong>(ii)</strong> Determine an expression for $hg(x)$ and find its domain.<br><strong>(iii)</strong> Solve the equation $hg(x) = g(x)$.",
    "steps": [
        "<strong>(a)(i)</strong> Since $\\sqrt{x - 3} \\ge 0$ for $x \\ge 3$, the range of $f(x) = \\sqrt{x - 3} + 2$ is: \\begin{aligned} &f(x) \\ge 2 \\end{aligned}",
        "<strong>(a)(ii)</strong> To find $f^{-1}(x)$, let $y = \\sqrt{x - 3} + 2$ and isolate $x$: \\begin{aligned} &y - 2 = \\sqrt{x - 3} \\cr &\\quad \\implies (y - 2)^2 = x - 3 \\cr &\\quad \\implies x = (y - 2)^2 + 3 \\end{aligned} Swapping variables gives $f^{-1}(x) = (x - 2)^2 + 3$ with domain: \\begin{aligned} &x \\ge 2 \\end{aligned}",
        "<strong>(b)(i)</strong> Key features for the sketch:<br><br>• $h(x) = \\sqrt{2x + 1}$ has end-point $(-0.5, 0)$ and $y$-intercept $(0, 1)$.<br><br>• $h^{-1}(x) = 0.5(x^2 - 1)$ for $x \\ge 0$ has end-point $(0, -0.5)$ and $x$-intercept $(1, 0)$.<br><br>• The curves intersect along $y = x$.<br><br><img src='images/Pure_SVGs/004720_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "<strong>(b)(ii)</strong> Substituting $g(x)$ into $h(x)$: \\begin{aligned} &hg(x) \\cr &\\quad = \\sqrt{2(2x - 5) + 1} \\cr &\\quad = \\sqrt{4x - 9} \\end{aligned} For the square root to be real: \\begin{aligned} &4x - 9 \\ge 0 \\cr &\\quad \\implies x \\ge 2.25 \\end{aligned}",
        "<strong>(b)(iii)</strong> To solve $hg(x) = g(x)$: \\begin{aligned} &\\sqrt{4x - 9} = 2x - 5 \\cr &\\quad \\implies 4x - 9 = (2x - 5)^2 \\cr &\\quad \\implies 4x - 9 = 4x^2 - 20x + 25 \\cr &\\quad \\implies 4x^2 - 24x + 34 = 0 \\cr &\\quad \\implies 2x^2 - 12x + 17 = 0 \\end{aligned} Solving via the quadratic formula: \\begin{aligned} &x = \\dfrac{12 \\pm \\sqrt{8}}{4} \\cr &\\quad = 3 \\pm \\dfrac{\\sqrt{2}}{2} \\end{aligned} Since $\\sqrt{4x - 9} \\ge 0$, we require $2x - 5 \\ge 0 \\implies x \\ge 2.5$. Thus, reject $3 - 0.5\\sqrt{2} \\approx 2.29$, leaving: \\begin{aligned} &x = 3 + \\dfrac{\\sqrt{2}}{2} \\end{aligned}",
        "Final Answer: $$x = 3 + \\frac{ \\sqrt{ 2 } }{ 2 }$$"
    ],
    "pi_options": [
        {
            "ans": "$$x = 3 - \\frac{ \\sqrt{ 2 } }{ 2 }$$ and $$x = 3 + \\frac{ \\sqrt{ 2 } }{ 2 }$$",
            "feedback": "This is incorrect. A principal square root cannot be negative, so $2x - 5 \\ge 0 \\implies x \\ge 2.5$. The root $3 - 0.5\\sqrt{2} \\approx 2.29$ is extraneous."
        },
        {
            "ans": "$$x = \\frac{ 12 \\pm \\sqrt{ 10 } }{ 4 }$$",
            "feedback": "This is incorrect. The discriminant is $(-12)^2 - 4(2)(17) = 144 - 136 = 8$, not $10$."
        },
        {
            "ans": "$$x = 3 - \\frac{ \\sqrt{ 2 } }{ 2 }$$",
            "feedback": "This is incorrect. This is the extraneous root that yields a negative right-hand side and must be rejected."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Extraneous Roots in Radical Equations",
        "content": "Squaring both sides of an equation can introduce extraneous roots. Always check algebraic solutions in the original un-squared equation."
    }
},
{
    "id": "004721",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Trigonometry",
    "topic": "Trigonometric Identities",
    "subtopic": [
        "Harmonic Form (R-formula)",
        "Trigonometric Equations",
        "Extreme Values"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Express $5\\sin\\theta - 12\\cos\\theta$ in the form $R\\sin(\\theta - \\alpha)$, where $R > 0$ and $0^\\circ < \\alpha < 90^\\circ$.<br><br><strong>(b)</strong> Find all values of $\\theta$ in $0^\\circ < \\theta < 360^\\circ$ satisfying: \\begin{aligned} &5\\sin\\theta - 12\\cos\\theta - 4 = 0 \\end{aligned} <strong>(c)</strong> Determine the greatest value and least value of: \\begin{aligned} &\\dfrac{1}{5\\sin\\theta - 12\\cos\\theta + 18} \\end{aligned}",
    "steps": [
        "For part (a), expand the harmonic identity: \\begin{aligned} &R\\sin(\\theta - \\alpha) \\cr &\\quad = R\\sin\\theta\\cos\\alpha \\cr &\\qquad - R\\cos\\theta\\sin\\alpha \\end{aligned} Equating coefficients with $5\\sin\\theta - 12\\cos\\theta$: \\begin{aligned} &R\\cos\\alpha = 5 \\cr &R\\sin\\alpha = 12 \\end{aligned}",
        "To find $R$, square and add the equations: \\begin{aligned} &R^2(\\cos^2\\alpha + \\sin^2\\alpha) \\cr &\\quad = 5^2 + 12^2 \\cr &\\quad = 169 \\cr &\\implies R = 13 \\end{aligned} To find $\\alpha$, divide the equations: \\begin{aligned} &\\tan\\alpha = \\dfrac{12}{5} \\cr &\\quad = 2.4 \\cr &\\implies \\alpha \\approx 67.38^\\circ \\end{aligned} Thus, the expression is: \\begin{aligned} &13\\sin(\\theta - 67.38^\\circ) \\end{aligned}",
        "For part (b), substitute the harmonic form: \\begin{aligned} &13\\sin(\\theta - 67.38^\\circ) - 4 = 0 \\cr &\\quad \\implies \\sin(\\theta - 67.38^\\circ) = \\dfrac{4}{13} \\end{aligned}",
        "Finding angles for $\\arcsin\\big(\\frac{4}{13}\\big)$: \\begin{aligned} &\\theta - 67.38^\\circ \\approx 17.92^\\circ \\cr &\\text{or } \\theta - 67.38^\\circ \\cr &\\quad \\approx 180^\\circ - 17.92^\\circ \\cr &\\quad = 162.08^\\circ \\end{aligned} Adding $67.38^\\circ$ gives: \\begin{aligned} &\\theta_1 \\approx 85.3^\\circ \\cr &\\theta_2 \\approx 229.5^\\circ \\end{aligned}",
        "For part (c), substitute into the fraction: \\begin{aligned} &\\dfrac{1}{13\\sin(\\theta - 67.38^\\circ) + 18} \\end{aligned} Since the sine function is bounded: \\begin{aligned} &-1 \\le \\sin(\\theta - 67.38^\\circ) \\le 1 \\end{aligned} • <strong>Greatest value</strong> occurs when the denominator is minimised, at: \\begin{aligned} &\\sin(\\theta - 67.38^\\circ) = -1 \\end{aligned} Evaluating the fraction: \\begin{aligned} &\\dfrac{1}{13(-1) + 18} \\cr &\\quad = \\dfrac{1}{5} \\cr &\\quad = 0.2 \\end{aligned} • <strong>Least value</strong> occurs when the denominator is maximised, at: \\begin{aligned} &\\sin(\\theta - 67.38^\\circ) = 1 \\end{aligned} Evaluating the fraction: \\begin{aligned} &\\dfrac{1}{13(1) + 18} \\cr &\\quad = \\dfrac{1}{31} \\cr &\\quad \\approx 0.0323 \\end{aligned}",
        "Final Answer: $$13\\sin(\\theta - 67.38^\\circ)$$ and Greatest: $$0.2$$, Least: $$0.0323$$"
    ],
    "pi_options": [
        {
            "ans": "$$13\\sin(\\theta - 22.62^\\circ)$$ and Greatest: $$1.0$$, Least: $$0.1$$",
            "feedback": "This is incorrect. Dividing the sine equation by the cosine equation gives $\\tan\\alpha = \\frac{12}{5}$ ($2.4$), yielding $\\alpha \\approx 67.38^\\circ$. The fraction was inverted to $\\tan\\alpha = \\frac{5}{12}$, giving $\\alpha \\approx 22.62^\\circ$."
        },
        {
            "ans": "$$13\\sin(\\theta - 67.38^\\circ)$$ and Greatest: $$0.0323$$, Least: $$0.2$$",
            "feedback": "This is incorrect. The extreme values are reversed. A fraction is maximised when its denominator is minimised, and minimised when its denominator is maximised. Therefore, $0.2$ is the greatest value and $0.0323$ is the least value."
        },
        {
            "ans": "$$13\\sin(\\theta + 67.38^\\circ)$$ and Greatest: $$0.2$$, Least: $$-0.2$$",
            "feedback": "This is incorrect. The expression $5\\sin\\theta - 12\\cos\\theta$ matches the subtraction identity $R\\sin(\\theta - \\alpha)$. In part (c), because the denominator has a constant $+18$, it is strictly positive, so the least value cannot be negative."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Maximising Fractions",
        "content": "To find the <strong>greatest</strong> value of a fraction with a positive constant numerator, you must <strong>minimise</strong> the denominator. Conversely, to find the <strong>least</strong> value, you must <strong>maximise</strong> the denominator."
    }
},
{
    "id": "004722",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Trigonometry",
    "topic": "Trigonometric Identities",
    "subtopic": [
        "Harmonic Form (R-formula)",
        "Trigonometric Equations",
        "Extreme Values"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Express $24\\cos\\theta + 7\\sin\\theta$ in the form $R\\cos(\\theta - \\alpha)$, where $R > 0$ and $0^\\circ < \\alpha < 90^\\circ$.<br><br><strong>(b)</strong> Find all values of $\\theta$ in $0^\\circ < \\theta < 360^\\circ$ satisfying: \\begin{aligned} &24\\cos\\theta + 7\\sin\\theta = 15 \\end{aligned} <strong>(c)</strong> Determine the greatest value and least value of: \\begin{aligned} &\\dfrac{6}{24\\cos\\theta + 7\\sin\\theta + 31} \\end{aligned}",
    "steps": [
        "For part (a), expand the harmonic identity: \\begin{aligned} &R\\cos(\\theta - \\alpha) \\cr &\\quad = R\\cos\\theta\\cos\\alpha \\cr &\\qquad + R\\sin\\theta\\sin\\alpha \\end{aligned} Equating coefficients with $24\\cos\\theta + 7\\sin\\theta$: \\begin{aligned} &R\\cos\\alpha = 24 \\cr &R\\sin\\alpha = 7 \\end{aligned}",
        "To find $R$, square and add the equations: \\begin{aligned} &R^2(\\cos^2\\alpha + \\sin^2\\alpha) \\cr &\\quad = 24^2 + 7^2 \\cr &\\quad = 625 \\cr &\\implies R = 25 \\end{aligned} To find $\\alpha$, divide the equations: \\begin{aligned} &\\tan\\alpha = \\dfrac{7}{24} \\cr &\\quad \\implies \\alpha \\approx 16.26^\\circ \\end{aligned} Thus, the expression is: \\begin{aligned} &25\\cos(\\theta - 16.26^\\circ) \\end{aligned}",
        "For part (b), substitute the harmonic form: \\begin{aligned} &25\\cos(\\theta - 16.26^\\circ) = 15 \\cr &\\quad \\implies \\cos(\\theta - 16.26^\\circ) = 0.6 \\end{aligned}",
        "Finding angles for $\\arccos(0.6)$: \\begin{aligned} &\\theta - 16.26^\\circ \\approx \\pm 53.13^\\circ \\end{aligned} Adding $16.26^\\circ$ gives: \\begin{aligned} &\\theta_1 \\approx 53.13^\\circ + 16.26^\\circ \\cr &\\quad = 69.4^\\circ \\cr &\\theta_2 \\approx -53.13^\\circ + 16.26^\\circ \\cr &\\quad = -36.87^\\circ \\end{aligned} Adding $360^\\circ$ to find the angle in $[0^\\circ, 360^\\circ]$: \\begin{aligned} &\\theta_2 \\approx -36.87^\\circ + 360^\\circ \\cr &\\quad = 323.1^\\circ \\end{aligned}",
        "For part (c), substitute into the expression: \\begin{aligned} &\\dfrac{6}{25\\cos(\\theta - 16.26^\\circ) + 31} \\end{aligned} Since the cosine function is bounded: \\begin{aligned} &-1 \\le \\cos(\\theta - 16.26^\\circ) \\le 1 \\end{aligned} • <strong>Greatest value</strong> occurs when the denominator is minimised, at: \\begin{aligned} &\\cos(\\theta - 16.26^\\circ) = -1 \\end{aligned} Evaluating the fraction: \\begin{aligned} &\\dfrac{6}{25(-1) + 31} \\cr &\\quad = \\dfrac{6}{6} \\cr &\\quad = 1 \\end{aligned} • <strong>Least value</strong> occurs when the denominator is maximised, at: \\begin{aligned} &\\cos(\\theta - 16.26^\\circ) = 1 \\end{aligned} Evaluating the fraction: \\begin{aligned} &\\dfrac{6}{25(1) + 31} \\cr &\\quad = \\dfrac{6}{56} \\cr &\\quad = \\dfrac{3}{28} \\cr &\\quad \\approx 0.107 \\end{aligned}",
        "Final Answer: $$25\\cos(\\theta - 16.26^\\circ)$$ and Greatest: $$1$$, Least: $$0.107$$"
    ],
    "pi_options": [
        {
            "ans": "$$25\\cos(\\theta + 16.26^\\circ)$$ and Greatest: $$1$$, Least: $$0.107$$",
            "feedback": "This is incorrect. The expansion of $R\\cos(\\theta - \\alpha)$ has a positive sign between terms, matching $24\\cos\\theta + 7\\sin\\theta$. Therefore, the harmonic form is $R\\cos(\\theta - \\alpha)$, not $R\\cos(\\theta + \\alpha)$."
        },
        {
            "ans": "$$25\\cos(\\theta - 16.26^\\circ)$$ and Greatest: $$6$$, Least: $$0.194$$",
            "feedback": "This is incorrect. For the greatest value, the denominator is $31 - 25 = 6$, giving a fraction of $\\frac{6}{6} = 1$, not $6$."
        },
        {
            "ans": "$$25\\cos(\\theta - 16.26^\\circ)$$ and $$\\theta = 69.4^\\circ, 122.3^\\circ$$",
            "feedback": "This is incorrect. For a cosine equation, secondary angles are found using $360^\\circ - \\text{angle}$, not $180^\\circ - \\text{angle}$. Adding $16.26^\\circ$ to $-53.13^\\circ$ gives $-36.87^\\circ$, which gives $323.1^\\circ$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Cosine Secondary Angles",
        "content": "When solving cosine equations of the form $\\cos(X) = k$, the secondary angle is found using $360^\\circ - \\text{primary angle}$ or $\\pm \\text{primary angle}$. Avoid using $180^\\circ - \\text{primary angle}$, which applies to sine equations."
    }
},
{
    "id": "004723",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Trigonometry",
    "topic": "Trigonometric Identities",
    "subtopic": [
        "Harmonic Form (R-formula) in Radians",
        "Trigonometric Equations",
        "Extreme Values"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Express $\\sqrt{3}\\sin\\theta + \\cos\\theta$ in the form $R\\sin(\\theta + \\alpha)$, where $R > 0$ and $0 < \\alpha < \\dfrac{\\pi}{2}$.<br><br><strong>(b)</strong> Find all values of $\\theta$ in $0 < \\theta < 2\\pi$ satisfying: \\begin{aligned} &\\sqrt{3}\\sin\\theta + \\cos\\theta = \\sqrt{2} \\end{aligned} <strong>(c)</strong> State the maximum and minimum values of $\\sqrt{3}\\sin\\theta + \\cos\\theta$, and find the smallest positive value of $\\theta$ where the maximum occurs.",
    "steps": [
        "For part (a), expand the harmonic identity: \\begin{aligned} &R\\sin(\\theta + \\alpha) \\cr &\\quad = R\\sin\\theta\\cos\\alpha \\cr &\\qquad + R\\cos\\theta\\sin\\alpha \\end{aligned} Equating coefficients with $\\sqrt{3}\\sin\\theta + \\cos\\theta$: \\begin{aligned} &R\\cos\\alpha = \\sqrt{3} \\cr &R\\sin\\alpha = 1 \\end{aligned}",
        "To find $R$, square and add the equations: \\begin{aligned} &R^2 = (\\sqrt{3})^2 + 1^2 \\cr &\\quad = 4 \\cr &\\implies R = 2 \\end{aligned} To find $\\alpha$, divide the equations: \\begin{aligned} &\\tan\\alpha = \\dfrac{1}{\\sqrt{3}} \\cr &\\quad \\implies \\alpha = \\dfrac{\\pi}{6} \\end{aligned} Thus, the expression is: \\begin{aligned} &2\\sin\\Big(\\theta + \\dfrac{\\pi}{6}\\Big) \\end{aligned}",
        "For part (b), substitute the harmonic form: \\begin{aligned} &2\\sin\\Big(\\theta + \\dfrac{\\pi}{6}\\Big) = \\sqrt{2} \\cr &\\quad \\implies \\sin\\Big(\\theta + \\dfrac{\\pi}{6}\\Big) = \\dfrac{\\sqrt{2}}{2} \\end{aligned}",
        "Finding angles for $\\arcsin\\big(\\frac{\\sqrt{2}}{2}\\big)$: \\begin{aligned} &\\theta + \\dfrac{\\pi}{6} = \\dfrac{\\pi}{4} \\cr &\\text{or } \\theta + \\dfrac{\\pi}{6} = \\dfrac{3\\pi}{4} \\end{aligned} Subtracting $\\dfrac{\\pi}{6}$ gives: \\begin{aligned} &\\theta_1 = \\dfrac{\\pi}{4} - \\dfrac{\\pi}{6} \\cr &\\quad = \\dfrac{\\pi}{12} \\cr &\\theta_2 = \\dfrac{3\\pi}{4} - \\dfrac{\\pi}{6} \\cr &\\quad = \\dfrac{7\\pi}{12} \\end{aligned}",
        "For part (c), using $2\\sin\\Big(\\theta + \\dfrac{\\pi}{6}\\Big)$:<br><br>• Maximum value is $2(1) = 2$<br>• Minimum value is $2(-1) = -2$<br><br>The maximum occurs when $\\sin\\Big(\\theta + \\dfrac{\\pi}{6}\\Big) = 1$: \\begin{aligned} &\\theta + \\dfrac{\\pi}{6} = \\dfrac{\\pi}{2} \\cr &\\quad \\implies \\theta = \\dfrac{\\pi}{2} - \\dfrac{\\pi}{6} \\cr &\\quad \\implies \\theta = \\dfrac{\\pi}{3} \\end{aligned}",
        "Final Answer: $$2\\sin\\left(\\theta + \\frac{ \\pi }{ 6 }\\right)$$ and Maximum occurs at $$\\theta = \\frac{ \\pi }{ 3 }$$"
    ],
    "pi_options": [
        {
            "ans": "$$2\\sin\\left(\\theta + \\frac{ \\pi }{ 3 }\\right)$$ and Maximum occurs at $$\\theta = \\frac{ \\pi }{ 6 }$$",
            "feedback": "This is incorrect. Equating coefficients gives $\\tan\\alpha = \\frac{1}{\\sqrt{3}}$, giving $\\alpha = \\frac{\\pi}{6}$, not $\\frac{\\pi}{3}$."
        },
        {
            "ans": "$$2\\sin\\left(\\theta + \\frac{ \\pi }{ 6 }\\right)$$ and $$\\theta = \\frac{ \\pi }{ 6 }, \\frac{ 5\\pi }{ 6 }$$",
            "feedback": "This is incorrect. These are the values before subtracting the phase angle $\\frac{\\pi}{6}$. Ensure you complete the subtraction to isolate $\\theta$."
        },
        {
            "ans": "$$2\\sin\\left(\\theta + \\frac{ \\pi }{ 6 }\\right)$$ and Maximum occurs at $$\\theta = \\frac{ \\pi }{ 2 }$$",
            "feedback": "This is incorrect. The maximum occurs when the sine bracket equals $\\frac{\\pi}{2}$, meaning $\\theta + \\frac{\\pi}{6} = \\frac{\\pi}{2}$. Subtracting $\\frac{\\pi}{6}$ gives $\\theta = \\frac{\\pi}{3}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Exact Radian Calculations",
        "content": "When a question specifies radian intervals and involves exact ratios (such as $\\sqrt{3}$ or $\\frac{\\sqrt{2}}{2}$), keep all working in exact multiples of $\\pi$. Decimal approximations risk losing accuracy."
    }
},
{
    "id": "004724",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Trigonometry",
    "topic": "Trigonometric Identities",
    "subtopic": [
        "Harmonic Form (R-formula)",
        "Stationary Points"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Express $3\\sin\\theta + 5\\cos\\theta$ in the form $R\\sin(\\theta + \\alpha)$, where $R > 0$ and $0^\\circ < \\alpha < 90^\\circ$, giving $R$ and $\\alpha$ to two decimal places.<br><br><strong>(b)</strong> Solve $3\\sin\\theta + 5\\cos\\theta = 2$ for $0^\\circ < \\theta < 360^\\circ$.<br><br><strong>(c)</strong> For $y = 3\\sin x + 5\\cos x$, find the coordinates of the maximum and minimum points in $0^\\circ \\le x \\le 360^\\circ$ to one decimal place.",
    "steps": [
        "For part (a), expand the harmonic form: \\begin{aligned} &R\\sin(\\theta + \\alpha) \\cr &\\quad = R\\sin\\theta\\cos\\alpha \\cr &\\qquad + R\\cos\\theta\\sin\\alpha \\end{aligned} Equating coefficients with $3\\sin\\theta + 5\\cos\\theta$: \\begin{aligned} &R\\cos\\alpha = 3 \\cr &R\\sin\\alpha = 5 \\end{aligned}",
        "To find $R$ and $\\alpha$: \\begin{aligned} &R = \\sqrt{3^2 + 5^2} \\cr &\\quad = \\sqrt{34} \\cr &\\quad \\approx 5.83 \\cr &\\tan\\alpha = \\dfrac{5}{3} \\cr &\\quad \\implies \\alpha \\approx 59.04^\\circ \\end{aligned} Thus, the expression is: \\begin{aligned} &5.83\\sin(\\theta + 59.04^\\circ) \\end{aligned}",
        "For part (b), substitute the harmonic form: \\begin{aligned} &\\sqrt{34}\\sin(\\theta + 59.04^\\circ) = 2 \\cr &\\quad \\implies \\sin(\\theta + 59.04^\\circ) \\approx 0.3430 \\end{aligned}",
        "Finding angles for $\\arcsin(0.3430)$: \\begin{aligned} &\\theta + 59.04^\\circ \\approx 20.08^\\circ \\cr &\\theta + 59.04^\\circ \\approx 159.92^\\circ \\cr &\\theta + 59.04^\\circ \\approx 380.08^\\circ \\end{aligned} Subtracting $59.04^\\circ$ from each: \\begin{aligned} &\\theta_1 \\approx -38.96^\\circ \\text{ (outside range)} \\cr &\\theta_2 \\approx 159.92^\\circ - 59.04^\\circ \\cr &\\quad = 100.9^\\circ \\cr &\\theta_3 \\approx 380.08^\\circ - 59.04^\\circ \\cr &\\quad = 321.0^\\circ \\end{aligned} Valid solutions: $100.9^\\circ$ and $321.0^\\circ$.",
        "For part (c), using $y = \\sqrt{34}\\sin(x + 59.04^\\circ)$:<br><br>• <strong>Maximum:</strong> $\\sin(x + 59.04^\\circ) = 1$: \\begin{aligned} &x + 59.04^\\circ = 90^\\circ \\cr &\\quad \\implies x = 31.0^\\circ \\cr &y = \\sqrt{34} \\approx 5.8 \\end{aligned} Maximum at $(31.0, 5.8)$.<br><br>• <strong>Minimum:</strong> $\\sin(x + 59.04^\\circ) = -1$: \\begin{aligned} &x + 59.04^\\circ = 270^\\circ \\cr &\\quad \\implies x = 211.0^\\circ \\cr &y = -\\sqrt{34} \\approx -5.8 \\end{aligned} Minimum at $(211.0, -5.8)$.",
        "Final Answer: $$R = 5.83, \\alpha = 59.04^\\circ$$ and Maximum: $$(31.0^\\circ, 5.8)$$, Minimum: $$(211.0^\\circ, -5.8)$$"
    ],
    "pi_options": [
        {
            "ans": "$$R = 5.83, \\alpha = 59.04^\\circ$$ and Maximum: $$(90.0^\\circ, 5.8)$$, Minimum: $$(270.0^\\circ, -5.8)$$",
            "feedback": "This is incorrect. The stationary points of $y = R\\sin(x + \\alpha)$ are shifted by $\\alpha$. To find the maximum $x$-coordinate, solve $x + \\alpha = 90^\\circ$, giving $x = 31.0^\\circ$."
        },
        {
            "ans": "$$R = 5.83, \\alpha = 30.96^\\circ$$ and Solutions: $$\\theta = 129.0^\\circ, 349.0^\\circ$$",
            "feedback": "This is incorrect. Dividing coefficients gives $\\tan\\alpha = \\frac{5}{3}$, giving $\\alpha \\approx 59.04^\\circ$. Evaluating $\\tan\\alpha = \\frac{3}{5}$ led to the incorrect angle $30.96^\\circ$."
        },
        {
            "ans": "$$R = 5.83, \\alpha = 59.04^\\circ$$ and Solutions: $$\\theta = 100.9^\\circ, 221.0^\\circ$$",
            "feedback": "This is incorrect. While the first solution is correct, the other valid angle in $[0^\\circ, 360^\\circ]$ is $380.08^\\circ - 59.04^\\circ = 321.0^\\circ$, not $221.0^\\circ$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Finding Stationary Points using R-formula",
        "content": "Using the harmonic form $y = R\\sin(x + \\alpha)$ avoids calculus when finding extrema. Since the sine function peaks at $1$ when its argument is $90^\\circ$, find the maximum coordinate directly from $x + \\alpha = 90^\\circ$."
    }
},
{
    "id": "004725",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Trigonometry",
    "topic": "Trigonometric Identities",
    "subtopic": [
        "Double Angle Harmonic Form",
        "Extreme Values of Squared Fractions"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Express $12\\sin 2\\theta - 5\\cos 2\\theta$ in the form $R\\sin(2\\theta - \\alpha)$, where $R > 0$ and $0^\\circ < \\alpha < 90^\\circ$.<br><br><strong>(b)</strong> Find all values of $\\theta$ in $0^\\circ < \\theta < 180^\\circ$ satisfying: \\begin{aligned} &12\\sin 2\\theta - 5\\cos 2\\theta = 6.5 \\end{aligned} <strong>(c)</strong> Determine the greatest value of: \\begin{aligned} &\\dfrac{20}{(12\\sin 2\\theta - 5\\cos 2\\theta)^2 + 3} \\end{aligned}",
    "steps": [
        "For part (a), expand the harmonic identity: \\begin{aligned} &R\\sin(2\\theta - \\alpha) \\cr &\\quad = R\\sin 2\\theta\\cos\\alpha \\cr &\\qquad - R\\cos 2\\theta\\sin\\alpha \\end{aligned} Equating coefficients with $12\\sin 2\\theta - 5\\cos 2\\theta$: \\begin{aligned} &R\\cos\\alpha = 12 \\cr &R\\sin\\alpha = 5 \\end{aligned}",
        "To find $R$ and $\\alpha$: \\begin{aligned} &R = \\sqrt{12^2 + (-5)^2} \\cr &\\quad = 13 \\cr &\\tan\\alpha = \\dfrac{5}{12} \\cr &\\quad \\implies \\alpha \\approx 22.62^\\circ \\end{aligned} Thus, the expression is: \\begin{aligned} &13\\sin(2\\theta - 22.62^\\circ) \\end{aligned}",
        "For part (b), substitute the harmonic form: \\begin{aligned} &13\\sin(2\\theta - 22.62^\\circ) = 6.5 \\cr &\\quad \\implies \\sin(2\\theta - 22.62^\\circ) = 0.5 \\end{aligned}",
        "For $0^\\circ < \\theta < 180^\\circ$, we have $0^\\circ < 2\\theta < 360^\\circ$: \\begin{aligned} &2\\theta - 22.62^\\circ = 30^\\circ \\cr &\\text{or } 2\\theta - 22.62^\\circ = 150^\\circ \\end{aligned} Solving for $\\theta$: \\begin{aligned} &2\\theta_1 = 52.62^\\circ \\cr &\\quad \\implies \\theta_1 \\approx 26.3^\\circ \\cr &2\\theta_2 = 172.62^\\circ \\cr &\\quad \\implies \\theta_2 \\approx 86.3^\\circ \\end{aligned}",
        "For part (c), substitute into the fraction: \\begin{aligned} &\\dfrac{20}{[13\\sin(2\\theta - 22.62^\\circ)]^2 + 3} \\end{aligned} To maximise the fraction, minimise the denominator. Since any real square is non-negative, the minimum of the squared term is $0$.<br><br>Thus, the minimum denominator is $0 + 3 = 3$, giving the greatest value: \\begin{aligned} &\\dfrac{20}{3} \\approx 6.67 \\end{aligned}",
        "Final Answer: $$13\\sin(2\\theta - 22.62^\\circ)$$ and Greatest: $$\\frac{ 20 }{ 3 }$$"
    ],
    "pi_options": [
        {
            "ans": "$$13\\sin(2\\theta - 22.62^\\circ)$$ and Greatest: $$\\frac{ 20 }{ 172 }$$",
            "feedback": "This is incorrect. To maximise the fraction, minimise the denominator. Substituting the maximum value $13^2 = 169$ gives the least value $\\frac{20}{169 + 3} = \\frac{20}{172}$, not the greatest."
        },
        {
            "ans": "$$13\\sin(2\\theta - 22.62^\\circ)$$ and $$\\theta = 52.6^\\circ, 172.6^\\circ$$",
            "feedback": "This is incorrect. The intermediate values are $2\\theta_1 = 52.62^\\circ$ and $2\\theta_2 = 172.62^\\circ$. You must divide by $2$ to solve for $\\theta$, giving $26.3^\\circ$ and $86.3^\\circ$."
        },
        {
            "ans": "$$13\\sin(2\\theta - 67.38^\\circ)$$ and Greatest: $$\\frac{ 20 }{ 3 }$$",
            "feedback": "This is incorrect. Calculating $\\tan\\alpha = \\frac{12}{5}$ incorrectly gives $\\alpha \\approx 67.38^\\circ$. The correct ratio is $\\tan\\alpha = \\frac{5}{12}$, giving $\\alpha \\approx 22.62^\\circ$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Minimising Squared Denominators",
        "content": "When maximising $\\frac{A}{[f(x)]^2 + B}$, do not substitute $-1$ for the sine term. The square of any real expression is non-negative, so the minimum of $[13\\sin(2\\theta - \\alpha)]^2$ is $0$."
    }
},
{
    "id": "004726",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "Definite Integration",
    "subtopic": [
        "Integration by Parts",
        "Integration by Substitution"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Evaluate the exact value of: \\begin{aligned} &\\int_1^2 x^2 \\ln x \\text{d}x \\end{aligned} using integration by parts.<br><br><strong>(b)</strong> Use the substitution $x = 3\\sin\\theta$ to find the exact value of: \\begin{aligned} &\\int_0^{1.5} \\dfrac{3 + x}{\\sqrt{9 - x^2}} \\text{d}x \\end{aligned}",
    "steps": [
        "<strong>(a)</strong> Using integration by parts: \\begin{aligned} &\\int u v' \\text{d}x = u v - \\int u' v \\text{d}x \\end{aligned} We choose: \\begin{aligned} &u = \\ln x \\implies u' = \\dfrac{1}{x} \\cr &v' = x^2 \\implies v = \\dfrac{x^3}{3} \\end{aligned}",
        "Applying the integration by parts formula: \\begin{aligned} &\\int_1^2 x^2 \\ln x \\text{d}x \\cr &\\quad = \\Big[\\dfrac{x^3}{3}\\ln x\\Big]_1^2 - \\int_1^2 \\dfrac{x^2}{3} \\text{d}x \\cr &\\quad = \\Big(\\dfrac{8}{3}\\ln 2 - 0\\Big) - \\Big[\\dfrac{x^3}{9}\\Big]_1^2 \\cr &\\quad = \\dfrac{8}{3}\\ln 2 - \\Big(\\dfrac{8}{9} - \\dfrac{1}{9}\\Big) \\cr &\\quad = \\dfrac{8}{3}\\ln 2 - \\dfrac{7}{9} \\end{aligned}",
        "<strong>(b)</strong> Differentiating $x = 3\\sin\\theta$: \\begin{aligned} &\\text{d}x = 3\\cos\\theta \\text{d}\\theta \\end{aligned} Finding the new limits in terms of $\\theta$:<br><br>• For $x = 0$: $3\\sin\\theta = 0 \\implies \\theta = 0$<br>• For $x = 1.5$: $\\sin\\theta = 0.5 \\implies \\theta = \\dfrac{\\pi}{6}$<br><br>Transforming the radical denominator: \\begin{aligned} &\\sqrt{9 - x^2} \\cr &\\quad = \\sqrt{9(1 - \\sin^2\\theta)} \\cr &\\quad = 3\\cos\\theta \\end{aligned}",
        "Substituting into the integral: \\begin{aligned} &\\int_0^{\\frac{\\pi}{6}} \\dfrac{3 + 3\\sin\\theta}{3\\cos\\theta} \\cdot 3\\cos\\theta \\text{d}\\theta \\cr &\\quad = \\int_0^{\\frac{\\pi}{6}} (3 + 3\\sin\\theta) \\text{d}\\theta \\cr &\\quad = \\big[3\\theta - 3\\cos\\theta\\big]_0^{\\frac{\\pi}{6}} \\end{aligned}",
        "Evaluating at the limits: \\begin{aligned} &\\Big(3\\Big(\\dfrac{\\pi}{6}\\Big) - 3\\cos\\dfrac{\\pi}{6}\\Big) - \\big(0 - 3\\cos 0\\big) \\cr &\\quad = \\Big(\\dfrac{\\pi}{2} - \\dfrac{3\\sqrt{3}}{2}\\Big) - (-3) \\cr &\\quad = \\dfrac{\\pi}{2} - \\dfrac{3\\sqrt{3}}{2} + 3 \\end{aligned}",
        "Final Answer: $$\\frac{ 8 }{ 3 }\\ln 2 - \\frac{ 7 }{ 9 }$$ and $$\\frac{ \\pi }{ 2 } - \\frac{ 3\\sqrt{ 3 } }{ 2 } + 3$$"
    ],
    "pi_options": [
        {
            "ans": "$$\\frac{ 8 }{ 3 }\\ln 2 - \\frac{ 7 }{ 9 }$$ and $$\\frac{ \\pi }{ 2 } + 3$$",
            "feedback": "This is incorrect. While the integration by parts result is correct, you omitted subtracting $3\\cos\\frac{\\pi}{6} = \\frac{3\\sqrt{3}}{2}$ when evaluating the limits."
        },
        {
            "ans": "$$\\frac{ 2 }{ 3 }\\ln 2 - \\frac{ 7 }{ 9 }$$ and $$\\frac{ \\pi }{ 2 } - \\frac{ 3\\sqrt{ 3 } }{ 2 } - 3$$",
            "feedback": "This is incorrect. Evaluating $\\frac{x^3}{3}\\ln x$ at $x = 2$ gives $\\frac{8}{3}\\ln 2$. In part (b), subtracting $-3\\cos 0 = -3$ adds $+3$ to the expression."
        },
        {
            "ans": "$$\\frac{ 8 }{ 3 }\\ln 2 - \\frac{ 1 }{ 9 }$$ and $$\\frac{ \\pi }{ 2 } - \\frac{ 3\\sqrt{ 3 } }{ 2 }$$",
            "feedback": "This is incorrect. In part (a), $\\frac{8}{9} - \\frac{1}{9} = \\frac{7}{9}$. In part (b), the lower limit contribution $-3\\cos 0$ adds $+3$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Evaluating the Lower Limit",
        "content": "Never assume that a lower limit of $0$ contributes nothing. While true for polynomials, $\\cos 0 = 1$ and $\\mathrm{e}^0 = 1$ produce non-zero constants that must be accounted for."
    }
},
{
    "id": "004727",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "Definite Integration",
    "subtopic": [
        "Integration by Parts",
        "Integration by Substitution"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Evaluate the exact value of: \\begin{aligned} &\\int_0^1 x \\mathrm{e}^{2x} \\text{d}x \\end{aligned} using integration by parts.<br><br><strong>(b)</strong> Use the substitution $u = 2x + 1$ to find the exact value of: \\begin{aligned} &\\int_0^4 \\dfrac{x}{\\sqrt{2x + 1}} \\text{d}x \\end{aligned}",
    "steps": [
        "<strong>(a)</strong> Using integration by parts: \\begin{aligned} &\\int u v' \\text{d}x = u v - \\int u' v \\text{d}x \\end{aligned} We choose: \\begin{aligned} &u = x \\implies u' = 1 \\cr &v' = \\mathrm{e}^{2x} \\implies v = \\dfrac{1}{2}\\mathrm{e}^{2x} \\end{aligned}",
        "Applying the integration by parts formula: \\begin{aligned} &\\int_0^1 x \\mathrm{e}^{2x} \\text{d}x \\cr &\\quad = \\Big[\\dfrac{1}{2}x\\mathrm{e}^{2x}\\Big]_0^1 - \\int_0^1 \\dfrac{1}{2}\\mathrm{e}^{2x} \\text{d}x \\cr &\\quad = \\dfrac{1}{2}\\mathrm{e}^2 - \\Big[\\dfrac{1}{4}\\mathrm{e}^{2x}\\Big]_0^1 \\cr &\\quad = \\dfrac{1}{2}\\mathrm{e}^2 - \\Big(\\dfrac{1}{4}\\mathrm{e}^2 - \\dfrac{1}{4}\\Big) \\cr &\\quad = \\dfrac{1}{4}(\\mathrm{e}^2 + 1) \\end{aligned}",
        "<strong>(b)</strong> Rearranging $u = 2x + 1$ and finding differentials: \\begin{aligned} &x = \\dfrac{u - 1}{2} \\cr &\\text{d}x = \\dfrac{1}{2}\\text{d}u \\end{aligned} New limits in terms of $u$:<br><br>• For $x = 0$: $u = 2(0) + 1 = 1$<br>• For $x = 4$: $u = 2(4) + 1 = 9$",
        "Substituting into the integral: \\begin{aligned} &\\int_1^9 \\dfrac{u - 1}{2\\sqrt{u}} \\cdot \\dfrac{1}{2} \\text{d}u \\cr &\\quad = \\dfrac{1}{4}\\int_1^9 (u^{\\frac{1}{2}} - u^{-\\frac{1}{2}}) \\text{d}u \\cr &\\quad = \\dfrac{1}{4}\\Big[\\dfrac{2}{3}u^{\\frac{3}{2}} - 2u^{\\frac{1}{2}}\\Big]_1^9 \\end{aligned}",
        "Evaluating at the limits: \\begin{aligned} &\\dfrac{1}{4}\\Big[\\Big(\\dfrac{2}{3}(27) - 2(3)\\Big) - \\Big(\\dfrac{2}{3}(1) - 2(1)\\Big)\\Big] \\cr &\\quad = \\dfrac{1}{4}\\Big[12 - \\Big(-\\dfrac{4}{3}\\Big)\\Big] \\cr &\\quad = \\dfrac{1}{4}\\Big(\\dfrac{40}{3}\\Big) \\cr &\\quad = \\dfrac{10}{3} \\end{aligned}",
        "Final Answer: $$\\frac{ 1 }{ 4 }(\\mathrm{e}^{ 2 } + 1)$$ and $$\\frac{ 10 }{ 3 }$$"
    ],
    "pi_options": [
        {
            "ans": "$$\\frac{ 1 }{ 4 }(\\mathrm{e}^{ 2 } - 1)$$ and $$\\frac{ 10 }{ 3 }$$",
            "feedback": "This is incorrect. The lower limit evaluation yields $-\\frac{1}{4}\\mathrm{e}^0 = -\\frac{1}{4}$. Subtracting this gives $-\\frac{1}{4}\\mathrm{e}^2 - (-\\frac{1}{4}) = -\\frac{1}{4}\\mathrm{e}^2 + \\frac{1}{4}$."
        },
        {
            "ans": "$$\\frac{ 1 }{ 4 }(\\mathrm{e}^{ 2 } + 1)$$ and $$\\frac{ 20 }{ 3 }$$",
            "feedback": "This is incorrect. In part (b), you omitted the overall factor of $\\frac{1}{4}$ arising from combining $\\frac{1}{2}$ from $x$ and $\\frac{1}{2}$ from $\\text{d}x$."
        },
        {
            "ans": "$$\\frac{ 1 }{ 2 }(\\mathrm{e}^{ 2 } + 1)$$ and $$\\frac{ 8 }{ 3 }$$",
            "feedback": "This is incorrect. In part (a), subtracting $\\frac{1}{4}\\mathrm{e}^2$ from $\\frac{1}{2}\\mathrm{e}^2$ leaves $\\frac{1}{4}\\mathrm{e}^2$. In part (b), the bracket evaluates to $12 + \\frac{4}{3} = \\frac{40}{3}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Combining Fractional Constants",
        "content": "When performing integration by substitution, pull constant multipliers outside the integral immediately. Combining $\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$ upfront avoids carrying clutter through every line of algebra."
    }
},
{
    "id": "004728",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "Definite Integration",
    "subtopic": [
        "Trigonometric Integration by Parts",
        "Trigonometric Substitution"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Find the exact value of: \\begin{aligned} &\\int_0^{\\frac{\\pi}{4}} x \\sec^2 x \\text{d}x \\end{aligned} using integration by parts.<br><br><strong>(b)</strong> Use the substitution $x = 2\\tan\\theta$ to find the exact value of: \\begin{aligned} &\\int_0^2 \\dfrac{1}{x^2 + 4} \\text{d}x \\end{aligned}",
    "steps": [
        "<strong>(a)</strong> Using integration by parts: \\begin{aligned} &u = x \\implies u' = 1 \\cr &v' = \\sec^2 x \\implies v = \\tan x \\end{aligned}",
        "Applying the integration by parts formula: \\begin{aligned} &\\int_0^{\\frac{\\pi}{4}} x \\sec^2 x \\text{d}x \\cr &\\quad = \\big[x \\tan x\\big]_0^{\\frac{\\pi}{4}} - \\int_0^{\\frac{\\pi}{4}} \\tan x \\text{d}x \\cr &\\quad = \\Big(\\dfrac{\\pi}{4}\\tan\\dfrac{\\pi}{4} - 0\\Big) - \\big[\\ln|\\sec x|\\big]_0^{\\frac{\\pi}{4}} \\cr &\\quad = \\dfrac{\\pi}{4} - \\Big(\\ln|\\sec\\dfrac{\\pi}{4}| - \\ln|\\sec 0|\\Big) \\end{aligned}",
        "Evaluating logarithmic terms using $\\sec\\frac{\\pi}{4} = \\sqrt{2}$ and $\\sec 0 = 1$: \\begin{aligned} &\\dfrac{\\pi}{4} - \\ln\\sqrt{2} \\cr &\\quad = \\dfrac{\\pi}{4} - \\ln(2^{\\frac{1}{2}}) \\cr &\\quad = \\dfrac{\\pi}{4} - \\dfrac{1}{2}\\ln 2 \\end{aligned}",
        "<strong>(b)</strong> Differentiating $x = 2\\tan\\theta$: \\begin{aligned} &\\text{d}x = 2\\sec^2\\theta \\text{d}\\theta \\end{aligned} New limits in terms of $\\theta$:<br><br>• For $x = 0$: $2\\tan\\theta = 0 \\implies \\theta = 0$<br>• For $x = 2$: $2\\tan\\theta = 2 \\implies \\theta = \\dfrac{\\pi}{4}$",
        "Substituting into the integral using $x^2 + 4 = 4\\sec^2\\theta$: \\begin{aligned} &\\int_0^{\\frac{\\pi}{4}} \\dfrac{2\\sec^2\\theta}{4\\sec^2\\theta} \\text{d}\\theta \\cr &\\quad = \\int_0^{\\frac{\\pi}{4}} \\dfrac{1}{2} \\text{d}\\theta \\cr &\\quad = \\Big[\\dfrac{1}{2}\\theta\\Big]_0^{\\frac{\\pi}{4}} \\cr &\\quad = \\dfrac{\\pi}{8} \\end{aligned}",
        "Final Answer: $$\\frac{ \\pi }{ 4 } - \\frac{ 1 }{ 2 }\\ln 2$$ and $$\\frac{ \\pi }{ 8 }$$"
    ],
    "pi_options": [
        {
            "ans": "$$\\frac{ \\pi }{ 4 } - \\ln 2$$ and $$\\frac{ \\pi }{ 4 }$$",
            "feedback": "This is incorrect. In part (a), $\\ln\\sqrt{2} = \\frac{1}{2}\\ln 2$. In part (b), $\\int_0^{\\pi/4} \\frac{1}{2}\\text{d}\\theta = \\frac{\\pi}{8}$, not $\\frac{\\pi}{4}$."
        },
        {
            "ans": "$$\\frac{ \\pi }{ 4 } + \\frac{ 1 }{ 2 }\\ln 2$$ and $$\\frac{ \\pi }{ 8 }$$",
            "feedback": "This is incorrect. The integration by parts formula requires $uv - \\int u'v \\text{d}x$. Since $\\int \\tan x \\text{d}x = \\ln|\\sec x|$, the negative sign is retained."
        },
        {
            "ans": "$$\\frac{ \\pi }{ 4 } - \\frac{ 1 }{ 2 }\\ln 2$$ and $$\\frac{ \\pi }{ 2 }$$",
            "feedback": "This is incorrect. In part (b), $x^2 + 4 = 4\\tan^2\\theta + 4 = 4\\sec^2\\theta$. Omitting the denominator factor of $4$ causes an arithmetic error."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Logarithm of Radicals",
        "content": "Always simplify radical logarithms using power laws: $\\ln\\sqrt{2} = \\ln(2^{1/2}) = \\frac{1}{2}\\ln 2$. Leaving an unsimplified square root inside a logarithm will forfeit full marks."
    }
},
{
    "id": "004729",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "Definite Integration",
    "subtopic": [
        "Definite Integration by Parts",
        "Definite Algebraic Substitution"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Evaluate the exact value of: \\begin{aligned} &\\int_1^{\\mathrm{e}} \\dfrac{\\ln x}{x^2} \\text{d}x \\end{aligned} using integration by parts.<br><br><strong>(b)</strong> Use the substitution $u = x^2 + 3$ to find the exact value of: \\begin{aligned} &\\int_1^3 \\dfrac{2x}{(x^2 + 3)^2} \\text{d}x \\end{aligned}",
    "steps": [
        "<strong>(a)</strong> Rewriting as $(\\ln x) \\cdot x^{-2}$, we choose parts: \\begin{aligned} &u = \\ln x \\implies u' = \\dfrac{1}{x} \\cr &v' = x^{-2} \\implies v = -\\dfrac{1}{x} \\end{aligned}",
        "Applying integration by parts: \\begin{aligned} &\\int_1^{\\mathrm{e}} \\dfrac{\\ln x}{x^2} \\text{d}x \\cr &\\quad = \\Big[-\\dfrac{\\ln x}{x}\\Big]_1^{\\mathrm{e}}\\cr &\\qquad - \\int_1^{\\mathrm{e}} \\Big(-\\dfrac{1}{x}\\Big)\\Big(\\dfrac{1}{x}\\Big) \\text{d}x \\cr &\\quad = \\Big(-\\dfrac{\\ln\\mathrm{e}}{\\mathrm{e}} - 0\\Big) + \\int_1^{\\mathrm{e}} x^{-2} \\text{d}x \\cr &\\quad = -\\dfrac{1}{\\mathrm{e}} + \\Big[-\\dfrac{1}{x}\\Big]_1^{\\mathrm{e}} \\end{aligned}",
        "Evaluating the limits: \\begin{aligned} &-\\dfrac{1}{\\mathrm{e}} + \\Big(-\\dfrac{1}{\\mathrm{e}} - (-1)\\Big) \\cr &\\quad = -\\dfrac{2}{\\mathrm{e}} + 1 \\cr &\\quad = 1 - \\dfrac{2}{\\mathrm{e}} \\end{aligned}",
        "<strong>(b)</strong> Differentiating $u = x^2 + 3$: \\begin{aligned} &\\text{d}u = 2x \\text{d}x \\end{aligned} New limits in terms of $u$:<br><br>• For $x = 1$: $u = 1^2 + 3 = 4$<br>• For $x = 3$: $u = 3^2 + 3 = 12$",
        "Substituting into the integral: \\begin{aligned} &\\int_4^{12} \\dfrac{1}{u^2} \\text{d}u \\cr &\\quad = \\Big[-\\dfrac{1}{u}\\Big]_4^{12} \\cr &\\quad = -\\dfrac{1}{12} - \\Big(-\\dfrac{1}{4}\\Big) \\cr &\\quad = \\dfrac{1}{4} - \\dfrac{1}{12} \\cr &\\quad = \\dfrac{1}{6} \\end{aligned}",
        "Final Answer: $$1 - \\frac{ 2 }{ \\mathrm{e} }$$ and $$\\frac{ 1 }{ 6 }$$"
    ],
    "pi_options": [
        {
            "ans": "$$1 + \\frac{ 2 }{ \\mathrm{e} }$$ and $$\\frac{ 1 }{ 6 }$$",
            "feedback": "This is incorrect. Evaluating the boundary terms gives $-\\frac{1}{\\mathrm{e}}$, and the integrated term gives $-\\frac{1}{\\mathrm{e}} - (-1) = 1 - \\frac{1}{\\mathrm{e}}$, which combine to $1 - \\frac{2}{\\mathrm{e}}$."
        },
        {
            "ans": "$$1 - \\frac{ 2 }{ \\mathrm{e} }$$ and $$\\frac{ 1 }{ 3 }$$",
            "feedback": "This is incorrect. In part (b), evaluating $-\\frac{1}{12} - (-\\frac{1}{4}) = \\frac{1}{4} - \\frac{1}{12} = \\frac{2}{12} = \\frac{1}{6}$, not $\\frac{1}{3}$."
        },
        {
            "ans": "$$-\\frac{ 2 }{ \\mathrm{e} }$$ and $$\\ln 3$$",
            "feedback": "This is incorrect. The integrand $\\frac{1}{u^2} = u^{-2}$ integrates via the power rule to $-\\frac{1}{u}$, not to a natural logarithm."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Avoiding Logarithmic Reflexes",
        "content": "Do not reflexively integrate fractions to logarithms. Only linear denominators $\\frac{1}{u}$ integrate to $\\ln|u|$. Powers like $\\frac{1}{u^2}$ must be integrated using the power rule."
    }
},
{
    "id": "004730",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "Definite Integration",
    "subtopic": [
        "Integration by Parts(Looping/Recurring)",
        "Trigonometric Substitution"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Evaluate the exact value of: \\begin{aligned} &\\int_0^{\\frac{\\pi}{2}} \\mathrm{e}^x \\cos x \\text{d}x \\end{aligned} using integration by parts.<br><br><strong>(b)</strong> Use the substitution $u = \\sin x$ to find the exact value of: \\begin{aligned} &\\int_0^{\\frac{\\pi}{2}} \\sin^2 x \\cos^3 x \\text{d}x \\end{aligned}",
    "steps": [
        "<strong>(a)</strong> Let $I = \\int_0^{\\frac{\\pi}{2}} \\mathrm{e}^x \\cos x \\text{d}x$. We choose parts: \\begin{aligned} &u = \\cos x \\implies u' = -\\sin x \\cr &v' = \\mathrm{e}^x \\implies v = \\mathrm{e}^x \\end{aligned}",
        "Applying integration by parts: \\begin{aligned} &I \\cr & = \\big[\\mathrm{e}^x \\cos x\\big]_0^{\\frac{\\pi}{2}} - \\int_0^{\\frac{\\pi}{2}} \\mathrm{e}^x(-\\sin x) \\text{d}x \\cr &= (0 - 1) + \\int_0^{\\frac{\\pi}{2}} \\mathrm{e}^x \\sin x \\text{d}x \\cr &= -1 + \\int_0^{\\frac{\\pi}{2}} \\mathrm{e}^x \\sin x \\text{d}x \\end{aligned}",
        "Applying parts a second time with $u = \\sin x$ and $v' = \\mathrm{e}^x$: \\begin{aligned} &I \\cr &\\quad = -1 + \\big[\\mathrm{e}^x \\sin x\\big]_0^{\\frac{\\pi}{2}}\\cr & \\qquad - \\int_0^{\\frac{\\pi}{2}} \\mathrm{e}^x \\cos x \\text{d}x \\cr &\\quad = -1 + (\\mathrm{e}^{\\frac{\\pi}{2}} - 0) - I \\cr &\\quad = \\mathrm{e}^{\\frac{\\pi}{2}} - 1 - I \\end{aligned}",
        "Rearranging to isolate $I$: \\begin{aligned} &2I = \\mathrm{e}^{\\frac{\\pi}{2}} - 1 \\cr &\\quad \\implies I = \\dfrac{1}{2}(\\mathrm{e}^{\\frac{\\pi}{2}} - 1) \\end{aligned}",
        "<strong>(b)</strong> Differentiating $u = \\sin x$: \\begin{aligned} &\\text{d}u = \\cos x \\text{d}x \\end{aligned} New limits in terms of $u$:<br><br>• For $x = 0$: $u = \\sin 0 = 0$<br>• For $x = \\dfrac{\\pi}{2}$: $u = \\sin\\dfrac{\\pi}{2} = 1$",
        "Rewriting $\\cos^3 x = (1 - \\sin^2 x)\\cos x$ and integrating: \\begin{aligned} &\\int_0^1 u^2(1 - u^2) \\text{d}u \\cr &\\quad = \\int_0^1 (u^2 - u^4) \\text{d}u \\cr &\\quad = \\Big[\\dfrac{u^3}{3} - \\dfrac{u^5}{5}\\Big]_0^1 \\cr &\\quad = \\dfrac{1}{3} - \\dfrac{1}{5} \\cr &\\quad = \\dfrac{2}{15} \\end{aligned}",
        "Final Answer: $$\\frac{ 1 }{ 2 }(\\mathrm{e}^{ \\frac{ \\pi }{ 2 } } - 1)$$ and $$\\frac{ 2 }{ 15 }$$"
    ],
    "pi_options": [
        {
            "ans": "$$\\frac{ 1 }{ 2 }(\\mathrm{e}^{ \\frac{ \\pi }{ 2 } } + 1)$$ and $$\\frac{ 2 }{ 15 }$$",
            "feedback": "This is incorrect. The lower limit evaluation of the first parts step subtracts $\\mathrm{e}^0\\cos 0 = 1$, giving $-1$. Rearranging gives $2I = \\mathrm{e}^{\\pi/2} - 1$."
        },
        {
            "ans": "$$\\frac{ 1 }{ 2 }(\\mathrm{e}^{ \\frac{ \\pi }{ 2 } } - 1)$$ and $$\\frac{ 8 }{ 15 }$$",
            "feedback": "This is incorrect. For the substitution integral, $\\frac{1}{3} - \\frac{1}{5} = \\frac{5}{15} - \\frac{3}{15} = \\frac{2}{15}$, not $\\frac{8}{15}$."
        },
        {
            "ans": "$$\\mathrm{e}^{ \\frac{ \\pi }{ 2 } } - 1$$ and $$\\frac{ 1 }{ 15 }$$",
            "feedback": "This is incorrect. Do not forget to divide by $2$ after collecting the recurring integral terms $2I = \\mathrm{e}^{\\pi/2} - 1$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Looping Integration by Parts",
        "content": "Integrals of products of exponentials and trigonometric functions loop indefinitely. Apply integration by parts twice to reproduce the original integral $I$, collect like terms to form $2I$, and divide by $2$ to finish."
    }
},
{
    "id": "004731",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "Differential Equations",
    "subtopic": [
        "Separation of Variables",
        "Linear Equations"
    ],
    "img": false,
    "question": "The variable $y$ satisfies the differential equation: \\begin{aligned} &3\\dfrac{\\text{d}y}{\\text{d}x} = 4 - 3y \\end{aligned} Given that $y = 1$ when $x = 0$, find an expression for $y$ in terms of $x$.",
    "steps": [
        "Separating the variables gives: \\begin{aligned} &\\dfrac{3}{4 - 3y}\\text{d}y = \\text{d}x \\end{aligned}",
        "We integrate both sides: \\begin{aligned} &\\int \\dfrac{3}{4 - 3y}\\text{d}y = \\int 1\\text{d}x \\cr &\\quad \\implies -\\ln|4 - 3y| = x + C \\end{aligned}",
        "Using $y = 1$ when $x = 0$: \\begin{aligned} &-\\ln|4 - 3(1)| = 0 + C \\cr &\\quad \\implies -\\ln(1) = C \\cr &\\quad \\implies C = 0 \\end{aligned}",
        "Substituting $C = 0$ and solving for $y$: \\begin{aligned} &-\\ln|4 - 3y| = x \\cr &\\quad \\implies \\ln|4 - 3y| = -x \\cr &\\quad \\implies 4 - 3y = \\mathrm{e}^{-x} \\cr &\\quad \\implies 3y = 4 - \\mathrm{e}^{-x} \\cr &\\quad \\implies y = \\dfrac{1}{3}(4 - \\mathrm{e}^{-x}) \\end{aligned}",
        "Final Answer: $$y = \\dfrac{1}{3}\\left( 4 - e^{ -x } \\right)$$"
    ],
    "pi_options": [
        {
            "ans": "$$y = \\dfrac{1}{3}\\left( 4 - e^{ -3x } \\right)$$",
            "feedback": "This error arises from failing to divide by the coefficient of $y$ when integrating, incorrectly retaining a factor of $3$ in the exponent."
        },
        {
            "ans": "$$y = \\dfrac{1}{3}\\left( 4 + e^{ -x } \\right)$$",
            "feedback": "This occurs due to a sign error when removing the logarithm. Isolating $3y$ gives $4 - \\mathrm{e}^{-x}$, not $4 + \\mathrm{e}^{-x}$."
        },
        {
            "ans": "$$y = 4 - 3e^{ -x }$$",
            "feedback": "This mistake occurs if the factor of $3$ on the left-hand side is ignored during integration and algebraic rearrangement."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: The Natural Log Derivative Trap",
        "content": "When integrating $\\int \\dfrac{a}{b + cy}\\text{d}y$, always divide by the coefficient $c$. Here, $\\int \\dfrac{3}{4 - 3y}\\text{d}y = -\\ln|4 - 3y| + C$. A frequent slip is omitting the negative sign from the $-3y$ term."
    }
},
{
    "id": "004732",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "Differential Equations",
    "subtopic": [
        "Separation of Variables",
        "Exponential Integration"
    ],
    "img": false,
    "question": "The variable $y$ satisfies the differential equation: \\begin{aligned} &\\dfrac{\\text{d}y}{\\text{d}x} = y^2 \\mathrm{e}^{2x} \\end{aligned} Given that $y = 1$ when $x = 0$, find an expression for $y$ in terms of $x$.",
    "steps": [
        "Separating the variables gives: \\begin{aligned} &y^{-2}\\text{d}y = \\mathrm{e}^{2x}\\text{d}x \\end{aligned}",
        "We integrate both sides: \\begin{aligned} &\\int y^{-2}\\text{d}y = \\int \\mathrm{e}^{2x}\\text{d}x \\cr &\\quad \\implies -\\dfrac{1}{y} = \\dfrac{1}{2}\\mathrm{e}^{2x} + C \\end{aligned}",
        "Using $y = 1$ when $x = 0$: \\begin{aligned} &-\\dfrac{1}{1} = \\dfrac{1}{2}\\mathrm{e}^0 + C \\cr &\\quad \\implies -1 = \\dfrac{1}{2} + C \\cr &\\quad \\implies C = -\\dfrac{3}{2} \\end{aligned}",
        "Substituting $C = -\\dfrac{3}{2}$ and solving for $y$: \\begin{aligned} &-\\dfrac{1}{y} = \\dfrac{1}{2}\\mathrm{e}^{2x} - \\dfrac{3}{2} \\cr &\\quad \\implies -\\dfrac{1}{y} = \\dfrac{\\mathrm{e}^{2x} - 3}{2} \\cr &\\quad \\implies \\dfrac{1}{y} = \\dfrac{3 - \\mathrm{e}^{2x}}{2} \\cr &\\quad \\implies y = \\dfrac{2}{3 - \\mathrm{e}^{2x}} \\end{aligned}",
        "Final Answer: $$y = \\dfrac{2}{3 - e^{2x}}$$"
    ],
    "pi_options": [
        {
            "ans": "$$y = \\dfrac{2}{1 - 3e^{2x}}$$",
            "feedback": "This error is caused by an algebraic error when combining terms into a single fraction before reciprocating."
        },
        {
            "ans": "$$y = \\dfrac{2}{e^{2x} + 1}$$",
            "feedback": "This mistake occurs if the constant $C$ is calculated incorrectly as $-\\frac{1}{2}$ instead of $-\\frac{3}{2}$ when evaluating the initial condition."
        },
        {
            "ans": "$$y = -\\dfrac{2}{e^{2x} + 3}$$",
            "feedback": "This error arises from failing to distribute the negative sign across both terms on the right-hand side before reciprocating."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Fractions and Reciprocals",
        "content": "When solving $-\\dfrac{1}{y} = \\dfrac{\\mathrm{e}^{2x} - 3}{2}$, combine the right-hand side into a single fraction before taking the reciprocal to avoid algebraic slips."
    }
},
{
    "id": "004733",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "Differential Equations",
    "subtopic": [
        "Separation of Variables",
        "Logarithmic Integration"
    ],
    "img": false,
    "question": "The variable $y$ satisfies the differential equation: \\begin{aligned} &x \\dfrac{\\text{d}y}{\\text{d}x} = 2y - 4, \\quad x > 0 \\end{aligned} Given that $y = 3$ when $x = 1$, find an expression for $y$ in terms of $x$.",
    "steps": [
        "Separating the variables gives: \\begin{aligned} &\\dfrac{1}{2y - 4}\\text{d}y = \\dfrac{1}{x}\\text{d}x \\end{aligned}",
        "We integrate both sides: \\begin{aligned} &\\int \\dfrac{1}{2y - 4}\\text{d}y = \\int \\dfrac{1}{x}\\text{d}x \\cr &\\quad \\implies \\dfrac{1}{2}\\ln|2y - 4| = \\ln x + C \\end{aligned}",
        "Using $y = 3$ when $x = 1$: \\begin{aligned} &\\dfrac{1}{2}\\ln|2(3) - 4| = \\ln(1) + C \\cr &\\quad \\implies \\dfrac{1}{2}\\ln(2) = 0 + C \\cr &\\quad \\implies C = \\dfrac{1}{2}\\ln 2 \\end{aligned}",
        "Substituting $C$ and multiplying through by $2$: \\begin{aligned} &\\ln(2y - 4) = 2\\ln x + \\ln 2 \\cr &\\quad \\implies \\ln(2y - 4) = \\ln(x^2) + \\ln 2 \\cr &\\quad \\implies \\ln(2y - 4) = \\ln(2x^2) \\cr &\\quad \\implies 2y - 4 = 2x^2 \\cr &\\quad \\implies y = x^2 + 2 \\end{aligned}",
        "Final Answer: $$y = x^2 + 2$$"
    ],
    "pi_options": [
        {
            "ans": "$$y = 2x^2 + 1$$",
            "feedback": "This error occurs if you forget to divide the final constant by $2$ when dividing $2y = 2x^2 + 4$ through by $2$."
        },
        {
            "ans": "$$y = x + 2$$",
            "feedback": "This error is caused by incorrectly simplifying $2\\ln x$ to $\\ln(2x)$ instead of $\\ln(x^2)$ before removing logarithms."
        },
        {
            "ans": "$$y = x^2 + 1$$",
            "feedback": "This arises from an error when calculating $C$, incorrectly setting $C = 0$ instead of $\\frac{1}{2}\\ln 2$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Master Logarithm Rules First",
        "content": "When given $\\ln(2y - 4) = 2\\ln x + \\ln 2$, never exponentiate term-by-term. Combine into a single logarithm first: $2\\ln x + \\ln 2 = \\ln(2x^2)$."
    }
},
{
    "id": "004734",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "Differential Equations",
    "subtopic": [
        "Separation of Variables",
        "Temperature Modelling"
    ],
    "img": false,
    "question": "An object cools in a room of constant temperature. The temperature $\\theta^\\circ\\text{C}$ after $t$ minutes satisfies: \\begin{aligned} &\\dfrac{\\text{d}\\theta}{\\text{d}t} = -0.1(\\theta - 20) \\end{aligned} Given that $\\theta = 80$ at $t = 0$, find $\\theta$ in terms of $t$.",
    "steps": [
        "Separating the variables gives: \\begin{aligned} &\\dfrac{1}{\\theta - 20}\\text{d}\\theta = -0.1\\text{d}t \\end{aligned}",
        "We integrate both sides: \\begin{aligned} &\\int \\dfrac{1}{\\theta - 20}\\text{d}\\theta = \\int -0.1\\text{d}t \\cr &\\quad \\implies \\ln|\\theta - 20| = -0.1t + C \\end{aligned}",
        "Using $\\theta = 80$ when $t = 0$: \\begin{aligned} &\\ln|80 - 20| = -0.1(0) + C \\cr &\\quad \\implies C = \\ln 60 \\end{aligned}",
        "Substituting $C = \\ln 60$ and rearranging: \\begin{aligned} &\\ln(\\theta - 20) - \\ln 60 = -0.1t \\cr &\\quad \\implies \\ln\\Big(\\dfrac{\\theta - 20}{60}\\Big) = -0.1t \\cr &\\quad \\implies \\dfrac{\\theta - 20}{60} = \\mathrm{e}^{-0.1t} \\cr &\\quad \\implies \\theta = 20 + 60\\mathrm{e}^{-0.1t} \\end{aligned}",
        "Final Answer: $$\\theta = 20 + 60e^{ -0.1t }$$"
    ],
    "pi_options": [
        {
            "ans": "$$\\theta = 20 + 80e^{ -0.1t }$$",
            "feedback": "This error occurs if the initial temperature of $80^\\circ\\text{C}$ is used directly as the pre-exponential coefficient without subtracting the room temperature offset of $20^\\circ\\text{C}$."
        },
        {
            "ans": "$$\\theta = 20 - 60e^{ -0.1t }$$",
            "feedback": "This results from a sign error when removing the logarithm, producing a negative temperature difference."
        },
        {
            "ans": "$$\\theta = 60e^{ -0.1t }$$",
            "feedback": "This mistake happens if you omit adding the room temperature offset of $20^\\circ\\text{C}$ back when isolating $\\theta$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Newton's Law of Cooling Limits",
        "content": "Verify your model using physical limits: at $t = 0$, $\\theta = 20 + 60(1) = 80^\\circ\\text{C}$. As $t \\to \\infty$, $60\\mathrm{e}^{-0.1t} \\to 0$, leaving $\\theta \\to 20^\\circ\\text{C}$, the ambient room temperature."
    }
},
{
    "id": "004735",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Integration",
    "topic": "Differential Equations",
    "subtopic": [
        "Separation of Variables",
        "Trigonometric Integration"
    ],
    "img": false,
    "question": "The variable $y$ satisfies the differential equation: \\begin{aligned} &\\dfrac{\\text{d}y}{\\text{d}x} = 3y \\cos(2x) \\end{aligned} Given that $y = \\mathrm{e}$ when $x = 0$, find an expression for $y$ in terms of $x$.",
    "steps": [
        "Separating the variables gives: \\begin{aligned} &\\dfrac{1}{y}\\text{d}y = 3\\cos(2x)\\text{d}x \\end{aligned}",
        "We integrate both sides: \\begin{aligned} &\\int \\dfrac{1}{y}\\text{d}y = \\int 3\\cos(2x)\\text{d}x \\cr &\\quad \\implies \\ln|y| = \\dfrac{3}{2}\\sin(2x) + C \\end{aligned}",
        "Using $y = \\mathrm{e}$ when $x = 0$: \\begin{aligned} &\\ln\\mathrm{e} = \\dfrac{3}{2}\\sin(0) + C \\cr &\\quad \\implies 1 = 0 + C \\cr &\\quad \\implies C = 1 \\end{aligned}",
        "Substituting $C = 1$ and exponentiating: \\begin{aligned} &\\ln y = \\dfrac{3}{2}\\sin(2x) + 1 \\cr &\\quad \\implies y = \\mathrm{e}^{\\frac{3}{2}\\sin(2x) + 1} \\end{aligned}",
        "Final Answer: $$y = e^{ \\frac{3}{2}\\sin(2x) + 1 }$$"
    ],
    "pi_options": [
        {
            "ans": "$$y = e^{ 6\\sin(2x) + 1 }$$",
            "feedback": "This error is caused by multiplying by $2$ instead of dividing by $2$ when integrating $\\cos(2x)$, giving a coefficient of $6$ instead of $1.5$."
        },
        {
            "ans": "$$y = e^{ 1.5\\sin(2x) }$$",
            "feedback": "This mistake occurs if the constant of integration $C$ is assumed to be $0$ rather than evaluating $\\ln\\mathrm{e} = 1$."
        },
        {
            "ans": "$$y = e^{ -1.5\\sin(2x) + 1 }$$",
            "feedback": "This error arises from a sign slip when integrating $\\cos(2x)$, incorrectly yielding a negative sine function."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Trigonometric Integration Chain Rule",
        "content": "When integrating $\\cos(kx)$, always divide by the derivative of the angle ($k$): $\\int \\cos(2x)\\text{d}x = \\dfrac{1}{2}\\sin(2x) + C$."
    }
},
{
    "id": "004736",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Calculus",
    "topic": "Differentiation",
    "subtopic": [
        "Implicit Differentiation",
        "Equation of the Normal"
    ],
    "img": false,
    "question": "A curve is defined implicitly by: \\begin{aligned} &2x^2y + y^2 - 3x = 27 \\end{aligned} Find the equation of the normal to the curve at the point $(2, 3)$, giving your answer in the form $ax + by + c = 0$, where $a, b, c$ are integers.",
    "steps": [
        "Differentiating with respect to $x$ using the product rule on $2x^2y$: \\begin{aligned} &\\dfrac{\\text{d}}{\\text{d}x}(2x^2y + y^2 - 3x) = 0 \\cr &\\quad \\implies 4xy + 2x^2\\dfrac{\\text{d}y}{\\text{d}x} \\cr &\\qquad + 2y\\dfrac{\\text{d}y}{\\text{d}x} - 3 = 0 \\end{aligned}",
        "Substitute $(2, 3)$ to find the tangent gradient $\\dfrac{\\text{d}y}{\\text{d}x}$: \\begin{aligned} &4(2)(3) + 2(2^2)\\dfrac{\\text{d}y}{\\text{d}x} \\cr &\\qquad + 2(3)\\dfrac{\\text{d}y}{\\text{d}x} - 3 = 0 \\cr &\\quad \\implies 24 + 8\\dfrac{\\text{d}y}{\\text{d}x} + 6\\dfrac{\\text{d}y}{\\text{d}x} - 3 = 0 \\cr &\\quad \\implies 14\\dfrac{\\text{d}y}{\\text{d}x} + 21 = 0 \\cr &\\quad \\implies \\dfrac{\\text{d}y}{\\text{d}x} = -\\dfrac{3}{2} \\end{aligned}",
        "The normal gradient $m_n$ is the negative reciprocal of the tangent gradient: \\begin{aligned} &m_n = -\\dfrac{1}{-\\frac{3}{2}} \\cr &\\quad = \\dfrac{2}{3} \\end{aligned}",
        "Using $(2, 3)$ with gradient $m_n = \\dfrac{2}{3}$: \\begin{aligned} &y - 3 = \\dfrac{2}{3}(x - 2) \\cr &\\quad \\implies 3(y - 3) = 2(x - 2) \\cr &\\quad \\implies 3y - 9 = 2x - 4 \\cr &\\quad \\implies 2x - 3y + 5 = 0 \\end{aligned}",
        "Final Answer: $$2x - 3y + 5 = 0$$"
    ],
    "pi_options": [
        {
            "ans": "$$2x - 3y - 5 = 0$$",
            "feedback": "This error is caused by a sign mistake when expanding the brackets on the right-hand side, incorrectly rearranging $2x - 4$."
        },
        {
            "ans": "$$3x + 2y - 12 = 0$$",
            "feedback": "This error arises if you use the tangent gradient $m_t = -\\frac{3}{2}$ instead of the normal gradient $m_n = \\frac{2}{3}$ when constructing the line."
        },
        {
            "ans": "$$2x + 3y - 13 = 0$$",
            "feedback": "This mistake occurs if the normal gradient is calculated as $-\\frac{2}{3}$ instead of $\\frac{2}{3}$ due to a sign error in the negative reciprocal."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Product Rule in Implicit Differentiation",
        "content": "A very common pitfall in implicit differentiation is failing to apply the product rule to terms like $2x^2y$. Both $x$ and $y$ are variables, so $\\dfrac{\\text{d}}{\\text{d}x}(2x^2y) = 4xy + 2x^2\\dfrac{\\text{d}y}{\\text{d}x}$."
    }
},
{
    "id": "004737",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Calculus",
    "topic": "Differentiation",
    "subtopic": [
        "Implicit Differentiation",
        "Equation of the Normal",
        "Product Rule"
    ],
    "img": false,
    "question": "A curve is defined implicitly by: \\begin{aligned} &x^2y^2 - 2x + 3y = 3 \\end{aligned} Find the equation of the normal to the curve at the point $(2, 1)$, giving your answer in the form $ax + by + c = 0$, where $a, b, c$ are integers.",
    "steps": [
        "Differentiating with respect to $x$ using the product rule on $x^2y^2$: \\begin{aligned} &\\dfrac{\\text{d}}{\\text{d}x}(x^2y^2 - 2x + 3y) = 0 \\cr &\\quad \\implies 2xy^2 + 2x^2y\\dfrac{\\text{d}y}{\\text{d}x} \\cr &\\qquad - 2 + 3\\dfrac{\\text{d}y}{\\text{d}x} = 0 \\end{aligned}",
        "Substitute $(2, 1)$ to find the tangent gradient $\\dfrac{\\text{d}y}{\\text{d}x}$: \\begin{aligned} &2(2)(1^2) + 2(2^2)(1)\\dfrac{\\text{d}y}{\\text{d}x} \\cr &\\qquad - 2 + 3\\dfrac{\\text{d}y}{\\text{d}x} = 0 \\cr &\\quad \\implies 4 + 8\\dfrac{\\text{d}y}{\\text{d}x} - 2 + 3\\dfrac{\\text{d}y}{\\text{d}x} = 0 \\cr &\\quad \\implies 11\\dfrac{\\text{d}y}{\\text{d}x} + 2 = 0 \\cr &\\quad \\implies \\dfrac{\\text{d}y}{\\text{d}x} = -\\dfrac{2}{11} \\end{aligned}",
        "The normal gradient $m_n$ is the negative reciprocal of the tangent gradient: \\begin{aligned} &m_n = -\\dfrac{1}{-\\frac{2}{11}} \\cr &\\quad = \\dfrac{11}{2} \\end{aligned}",
        "Using $(2, 1)$ with gradient $m_n = \\dfrac{11}{2}$: \\begin{aligned} &y - 1 = \\dfrac{11}{2}(x - 2) \\cr &\\quad \\implies 2(y - 1) = 11(x - 2) \\cr &\\quad \\implies 2y - 2 = 11x - 22 \\cr &\\quad \\implies 11x - 2y - 20 = 0 \\end{aligned}",
        "Final Answer: $$11x - 2y - 20 = 0$$"
    ],
    "pi_options": [
        {
            "ans": "$$11x - 2y - 24 = 0$$",
            "feedback": "This error is caused by an expansion slip on the right-hand side, writing $-24$ instead of $-22$ before rearranging terms."
        },
        {
            "ans": "$$2x + 11y - 15 = 0$$",
            "feedback": "This error arises if you use the tangent gradient $m_t = -\\frac{2}{11}$ instead of the normal gradient $m_n = \\frac{11}{2}$ when constructing the equation."
        },
        {
            "ans": "$$11x + 2y - 24 = 0$$",
            "feedback": "This mistake occurs if the normal gradient is calculated as $-\\frac{11}{2}$ due to a sign error when taking the negative reciprocal."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Substituting Before Isolating dy/dx",
        "content": "When finding gradients at a specific point, substitute the coordinates $(x, y)$ immediately after differentiating rather than rearranging algebraically to make $\\dfrac{\\text{d}y}{\\text{d}x}$ the subject."
    }
},
{
    "id": "004738",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Calculus",
    "topic": "Differentiation",
    "subtopic": [
        "Implicit Differentiation",
        "Equation of the Normal",
        "Exponential Functions"
    ],
    "img": false,
    "question": "A curve is defined implicitly by: \\begin{aligned} &y^2 \\mathrm{e}^{x - 1} + 3x - 2y = 3 \\end{aligned} Find the equation of the normal to the curve at the point $(1, 2)$, giving your answer in the form $ax + by + c = 0$, where $a, b, c$ are integers.",
    "steps": [
        "Differentiating with respect to $x$ using the product and chain rules on $y^2\\mathrm{e}^{x - 1}$: \\begin{aligned} &\\dfrac{\\text{d}}{\\text{d}x}(y^2\\mathrm{e}^{x - 1} + 3x - 2y) = 0 \\cr &\\quad \\implies y^2\\mathrm{e}^{x - 1} + 2y\\mathrm{e}^{x - 1}\\dfrac{\\text{d}y}{\\text{d}x} \\cr &\\qquad + 3 - 2\\dfrac{\\text{d}y}{\\text{d}x} = 0 \\end{aligned}",
        "Substitute $(1, 2)$ to find the tangent gradient $\\dfrac{\\text{d}y}{\\text{d}x}$: \\begin{aligned} &(2^2)\\mathrm{e}^0 + 2(2)\\mathrm{e}^0\\dfrac{\\text{d}y}{\\text{d}x} \\cr &\\qquad + 3 - 2\\dfrac{\\text{d}y}{\\text{d}x} = 0 \\cr &\\quad \\implies 4 + 4\\dfrac{\\text{d}y}{\\text{d}x} + 3 - 2\\dfrac{\\text{d}y}{\\text{d}x} = 0 \\cr &\\quad \\implies 7 + 2\\dfrac{\\text{d}y}{\\text{d}x} = 0 \\cr &\\quad \\implies \\dfrac{\\text{d}y}{\\text{d}x} = -\\dfrac{7}{2} \\end{aligned}",
        "The normal gradient $m_n$ is the negative reciprocal of the tangent gradient: \\begin{aligned} &m_n = -\\dfrac{1}{-\\frac{7}{2}} \\cr &\\quad = \\dfrac{2}{7} \\end{aligned}",
        "Using $(1, 2)$ with gradient $m_n = \\dfrac{2}{7}$: \\begin{aligned} &y - 2 = \\dfrac{2}{7}(x - 1) \\cr &\\quad \\implies 7(y - 2) = 2(x - 1) \\cr &\\quad \\implies 7y - 14 = 2x - 2 \\cr &\\quad \\implies 2x - 7y + 12 = 0 \\end{aligned}",
        "Final Answer: $$2x - 7y + 12 = 0$$"
    ],
    "pi_options": [
        {
            "ans": "$$2x - 7y + 16 = 0$$",
            "feedback": "This error is caused by expanding the brackets incorrectly as $2x - 1$ instead of $2x - 2$ on the right-hand side."
        },
        {
            "ans": "$$7x + 2y - 11 = 0$$",
            "feedback": "This error arises if you use the tangent gradient $m_t = -\\frac{7}{2}$ instead of the normal gradient $m_n = \\frac{2}{7}$ when constructing the straight line."
        },
        {
            "ans": "$$2x + 7y - 16 = 0$$",
            "feedback": "This mistake occurs if the normal gradient is calculated as $-\\frac{2}{7}$ instead of $\\frac{2}{7}$ due to a sign error."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Exponential Chain Rule with Implicit Terms",
        "content": "When differentiating $y^2\\mathrm{e}^{x - 1}$, remember $y$ depends on $x$. Differentiating $y^2$ gives $2y\\dfrac{\\text{d}y}{\\text{d}x}$, while $\\mathrm{e}^{x-1}$ differentiates to $\\mathrm{e}^{x-1}$."
    }
},
{
    "id": "004739",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Calculus",
    "topic": "Differentiation",
    "subtopic": [
        "Implicit Differentiation",
        "Equation of the Normal",
        "Logarithmic Functions"
    ],
    "img": false,
    "question": "A curve is defined implicitly by: \\begin{aligned} &x^2 \\ln y + 4xy + y^2 = 5 \\end{aligned} Find the equation of the normal to the curve at the point $(1, 1)$, giving your answer in the form $ax + by + c = 0$, where $a, b, c$ are integers.",
    "steps": [
        "Differentiating with respect to $x$ using the product rule: \\begin{aligned} &\\dfrac{\\text{d}}{\\text{d}x}(x^2\\ln y + 4xy + y^2) = 0 \\cr &\\quad \\implies 2x\\ln y + x^2\\Big(\\dfrac{1}{y}\\Big)\\dfrac{\\text{d}y}{\\text{d}x} \\cr &\\qquad + 4y + 4x\\dfrac{\\text{d}y}{\\text{d}x} + 2y\\dfrac{\\text{d}y}{\\text{d}x} = 0 \\end{aligned}",
        "Substitute $(1, 1)$ to find the tangent gradient $\\dfrac{\\text{d}y}{\\text{d}x}$: \\begin{aligned} &2(1)\\ln(1) + 1^2\\Big(\\dfrac{1}{1}\\Big)\\dfrac{\\text{d}y}{\\text{d}x} \\cr &\\qquad + 4(1) + 4(1)\\dfrac{\\text{d}y}{\\text{d}x} \\cr &\\qquad \\qquad+ 2(1)\\dfrac{\\text{d}y}{\\text{d}x} = 0 \\cr &\\quad \\implies 0 + \\dfrac{\\text{d}y}{\\text{d}x} + 4 + 4\\dfrac{\\text{d}y}{\\text{d}x}\\cr &\\qquad \\qquad + 2\\dfrac{\\text{d}y}{\\text{d}x} = 0 \\cr &\\quad \\implies 4 + 7\\dfrac{\\text{d}y}{\\text{d}x} = 0 \\cr &\\quad \\implies \\dfrac{\\text{d}y}{\\text{d}x} = -\\dfrac{4}{7} \\end{aligned}",
        "The normal gradient $m_n$ is the negative reciprocal of the tangent gradient: \\begin{aligned} &m_n = -\\dfrac{1}{-\\frac{4}{7}} \\cr &\\quad = \\dfrac{7}{4} \\end{aligned}",
        "Using $(1, 1)$ with gradient $m_n = \\dfrac{7}{4}$: \\begin{aligned} &y - 1 = \\dfrac{7}{4}(x - 1) \\cr &\\quad \\implies 4(y - 1) = 7(x - 1) \\cr &\\quad \\implies 4y - 4 = 7x - 7 \\cr &\\quad \\implies 7x - 4y - 3 = 0 \\end{aligned}",
        "Final Answer: $$7x - 4y - 3 = 0$$"
    ],
    "pi_options": [
        {
            "ans": "$$7x - 4y + 3 = 0$$",
            "feedback": "This error is caused by a sign slip when expanding the brackets on the right-hand side, leading to an incorrect constant term."
        },
        {
            "ans": "$$4x + 7y - 11 = 0$$",
            "feedback": "This error arises if you use the tangent gradient $m_t = -\\frac{4}{7}$ instead of the normal gradient $m_n = \\frac{7}{4}$ when constructing the equation."
        },
        {
            "ans": "$$7x + 4y - 11 = 0$$",
            "feedback": "This mistake occurs if the normal gradient is calculated as $-\\frac{7}{4}$ instead of $\\frac{7}{4}$ due to a sign error."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Logarithmic Derivative Checklist",
        "content": "When differentiating an implicit logarithmic term like $\\ln y$, the chain rule gives $\\dfrac{\\text{d}}{\\text{d}x}(\\ln y) = \\dfrac{1}{y}\\dfrac{\\text{d}y}{\\text{d}x}$."
    }
},
{
    "id": "004740",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Calculus",
    "topic": "Differentiation",
    "subtopic": [
        "Implicit Differentiation",
        "Equation of the Normal",
        "Rational Expressions"
    ],
    "img": false,
    "question": "A curve is defined implicitly by: \\begin{aligned} &\\dfrac{x}{y} + y^2 - 3x = -1 \\end{aligned} Find the equation of the normal to the curve at the point $(2, 2)$, giving your answer in the form $ax + by + c = 0$, where $a, b, c$ are integers.",
    "steps": [
        "Differentiating with respect to $x$ using the quotient rule on $\\dfrac{x}{y}$: \\begin{aligned} &\\dfrac{\\text{d}}{\\text{d}x}\\Big(\\dfrac{x}{y} + y^2 - 3x\\Big) = 0 \\cr &\\quad \\implies \\dfrac{y - x\\frac{\\text{d}y}{\\text{d}x}}{y^2} \\cr &\\qquad + 2y\\dfrac{\\text{d}y}{\\text{d}x} - 3 = 0 \\end{aligned}",
        "Substitute $(2, 2)$ to find the tangent gradient $\\dfrac{\\text{d}y}{\\text{d}x}$: \\begin{aligned} &\\dfrac{2 - 2\\frac{\\text{d}y}{\\text{d}x}}{2^2} + 2(2)\\dfrac{\\text{d}y}{\\text{d}x} - 3 = 0 \\cr &\\quad \\implies \\dfrac{2 - 2\\frac{\\text{d}y}{\\text{d}x}}{4} + 4\\dfrac{\\text{d}y}{\\text{d}x} - 3 = 0 \\cr &\\quad \\implies \\dfrac{1}{2} - \\dfrac{1}{2}\\dfrac{\\text{d}y}{\\text{d}x} + 4\\dfrac{\\text{d}y}{\\text{d}x} - 3 = 0 \\cr &\\quad \\implies \\dfrac{7}{2}\\dfrac{\\text{d}y}{\\text{d}x} - \\dfrac{5}{2} = 0 \\cr &\\quad \\implies \\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{5}{7} \\end{aligned}",
        "The normal gradient $m_n$ is the negative reciprocal of the tangent gradient: \\begin{aligned} &m_n = -\\dfrac{1}{\\frac{5}{7}} \\cr &\\quad = -\\dfrac{7}{5} \\end{aligned}",
        "Using $(2, 2)$ with gradient $m_n = -\\dfrac{7}{5}$: \\begin{aligned} &y - 2 = -\\dfrac{7}{5}(x - 2) \\cr &\\quad \\implies 5(y - 2) = -7(x - 2) \\cr &\\quad \\implies 5y - 10 = -7x + 14 \\cr &\\quad \\implies 7x + 5y - 24 = 0 \\end{aligned}",
        "Final Answer: $$7x + 5y - 24 = 0$$"
    ],
    "pi_options": [
        {
            "ans": "$$7x + 5y + 4 = 0$$",
            "feedback": "This error is caused by a sign mistake when expanding $-7(x - 2)$ to $-7x - 14$ instead of $-7x + 14$ on the right-hand side."
        },
        {
            "ans": "$$5x - 7y + 4 = 0$$",
            "feedback": "This error arises if you use the tangent gradient $m_t = \\frac{5}{7}$ instead of the normal gradient $m_n = -\\frac{7}{5}$ when constructing the equation."
        },
        {
            "ans": "$$7x - 5y - 4 = 0$$",
            "feedback": "This mistake occurs if the normal gradient is calculated as $\\frac{7}{5}$ instead of $-\\frac{7}{5}$ due to a sign error when taking the negative reciprocal."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Quotient Rule vs. Product Rule in Calculus",
        "content": "Differentiating $\\dfrac{x}{y}$ via the product rule on $x y^{-1}$ gives $y^{-1} - x y^{-2}\\dfrac{\\text{d}y}{\\text{d}x}$, which can be faster and less prone to quotient denominator errors."
    }
},
{
    "id": "004741",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Numerical Methods",
    "subtopic": [
        "Graphical Roots",
        "Newton-Raphson Method"
    ],
    "img": false,
    "question": "<strong>(a)</strong> By drawing suitable graphs, show that the equation: \\begin{aligned} &x - 2 = \\sin x \\end{aligned} has only one root.<br><br><strong>(b)</strong> Starting with $x_0 = 2.5$, use the Newton-Raphson method to find the value of this root correct to two decimal places.",
    "steps": [
        "We rewrite the equation as $x - 2 = \\sin x$ and sketch $y = x - 2$ and $y = \\sin x$:<br><br><img src='images/Pure_SVGs/004741_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>The line $y = x - 2$ has gradient $1$ and intercept $(0, -2)$. The curve $y = \\sin x$ oscillates between $-1$ and $1$. The graphs intersect at exactly one point, confirming there is only one root, $\\alpha$.",
        "Let $f(x) = x - 2 - \\sin x$. Differentiating gives: \\begin{aligned} &f'(x) = 1 - \\cos x \\end{aligned} The Newton-Raphson formula is: \\begin{aligned} &x_{n+1} \\cr &\\quad = x_n - \\dfrac{f(x_n)}{f'(x_n)} \\cr &\\quad = x_n - \\dfrac{x_n - 2 - \\sin x_n}{1 - \\cos x_n} \\end{aligned}",
        "Evaluating in radians with $x_0 = 2.5$: \\begin{aligned} &x_1 \\cr &\\quad = 2.5 - \\dfrac{2.5 - 2 - \\sin(2.5)}{1 - \\cos(2.5)} \\cr &\\quad \\approx 2.5 - \\dfrac{-0.09847}{1.80114} \\cr &\\quad \\approx 2.55467 \\cr &x_2 \\cr &\\quad \\approx 2.55467 - \\dfrac{-0.00085}{1.83151} \\cr &\\quad \\approx 2.55420 \\end{aligned}",
        "Both $x_1$ and $x_2$ round to $2.55$ to two decimal places, so the root is $\\alpha \\approx 2.55$.",
        "Final Answer: $$2.55$$"
    ],
    "pi_options": [
        {
            "ans": "$$2.50$$",
            "feedback": "This error occurs if the iterative process is not completed, or if $x_0$ is incorrectly assumed to be the final rounded root."
        },
        {
            "ans": "$$2.61$$",
            "feedback": "This mistake typically happens if you use degrees instead of radians when calculating the values of $\\sin x_n$ and $\\cos x_n$."
        },
        {
            "ans": "$$2.53$$",
            "feedback": "This is caused by an arithmetic slip in the first iteration, such as a sign error on the numerator or denominator."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Radian Mode Alert",
        "content": "Always ensure your calculator is in Radian mode when working with trigonometric functions in calculus and numerical methods like Newton-Raphson. Using degree mode is a very common exam mistake that will lead to completely incorrect iteration values."
    }
},
{
    "id": "004742",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Numerical Methods",
    "subtopic": [
        "Graphical Roots",
        "Newton-Raphson Method",
        "Exponential Functions"
    ],
    "img": false,
    "question": "<strong>(a)</strong> By drawing suitable graphs, show that the equation: \\begin{aligned} &\\mathrm{e}^x + x = 3 \\end{aligned} has only one root.<br><br><strong>(b)</strong> Starting with $x_0 = 1$, use the Newton-Raphson method to find the value of this root correct to two decimal places.",
    "steps": [
        "We rewrite the equation as $\\mathrm{e}^x = 3 - x$ and sketch $y = \\mathrm{e}^x$ and $y = 3 - x$:<br><br><img src='images/Pure_SVGs/004742_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>The curve $y = \\mathrm{e}^x$ is strictly increasing, while $y = 3 - x$ is strictly decreasing with gradient $-1$. They intersect at exactly one point, confirming there is only one root, $\\alpha$.",
        "Let $f(x) = \\mathrm{e}^x + x - 3$. Differentiating gives: \\begin{aligned} &f'(x) = \\mathrm{e}^x + 1 \\end{aligned} The Newton-Raphson formula is: \\begin{aligned} &x_{n+1} \\cr &\\quad = x_n - \\dfrac{f(x_n)}{f'(x_n)} \\cr &\\quad = x_n - \\dfrac{\\mathrm{e}^{x_n} + x_n - 3}{\\mathrm{e}^{x_n} + 1} \\end{aligned}",
        "Performing the iterations with $x_0 = 1$: \\begin{aligned} &x_1 \\cr &\\quad = 1 - \\dfrac{\\mathrm{e}^1 + 1 - 3}{\\mathrm{e}^1 + 1} \\cr &\\quad = 1 - \\dfrac{\\mathrm{e} - 2}{\\mathrm{e} + 1} \\cr &\\quad \\approx 0.80682 \\cr &x_2 \\cr &\\quad \\approx 0.80682 - \\dfrac{0.04753}{3.24072} \\cr &\\quad \\approx 0.79212 \\cr &x_3 \\cr &\\quad \\approx 0.79212 - \\dfrac{0.00018}{3.20805} \\cr &\\quad \\approx 0.79206 \\end{aligned}",
        "Successive iterations converge to $0.79$ to two decimal places, so the root is $\\alpha \\approx 0.79$.",
        "Final Answer: $$0.79$$"
    ],
    "pi_options": [
        {
            "ans": "$$0.81$$",
            "feedback": "This error occurs if you stop after only one iteration ($x_1$) instead of iterating further to ensure convergence to two decimal places."
        },
        {
            "ans": "$$0.75$$",
            "feedback": "This is caused by an arithmetic slip in the numerator of the Newton-Raphson fraction, such as calculating $\\mathrm{e}^1 + 1 - 3$ incorrectly."
        },
        {
            "ans": "$$0.85$$",
            "feedback": "This mistake occurs if the derivative is incorrectly calculated as $f'(x) = \\mathrm{e}^x$, omitting the derivative of $x$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: How Many Iterations Are Enough?",
        "content": "To guarantee that a root is correct to $2$ decimal places, always iterate until two successive values agree when rounded to that precision. Stopping after $x_1$ risks losing accuracy marks."
    }
},
{
    "id": "004743",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Numerical Methods",
    "subtopic": [
        "Graphical Roots",
        "Newton-Raphson Method",
        "Logarithmic Functions"
    ],
    "img": false,
    "question": "<strong>(a)</strong> By drawing suitable graphs, show that the equation: \\begin{aligned} &\\ln x = 2 - x \\end{aligned} has only one root.<br><br><strong>(b)</strong> Starting with $x_0 = 1.5$, use the Newton-Raphson method to find the value of this root correct to two decimal places.",
    "steps": [
        "We sketch $y = \\ln x$ and $y = 2 - x$ for $x > 0$:<br><br><img src='images/Pure_SVGs/004743_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>The curve $y = \\ln x$ is strictly increasing, while $y = 2 - x$ is strictly decreasing. They intersect at exactly one point, confirming there is only one root, $\\alpha$.",
        "Let $f(x) = \\ln x + x - 2$. Differentiating gives: \\begin{aligned} &f'(x) = \\dfrac{1}{x} + 1 \\end{aligned} The Newton-Raphson formula is: \\begin{aligned} &x_{n+1} \\cr &\\quad = x_n - \\dfrac{f(x_n)}{f'(x_n)} \\cr &\\quad = x_n - \\dfrac{\\ln x_n + x_n - 2}{\\frac{1}{x_n} + 1} \\end{aligned}",
        "Performing the iterations with $x_0 = 1.5$: \\begin{aligned} &x_1 \\cr &\\quad = 1.5 - \\dfrac{\\ln(1.5) + 1.5 - 2}{\\frac{1}{1.5} + 1} \\cr &\\quad \\approx 1.5 - \\dfrac{-0.09453}{1.66667} \\cr &\\quad \\approx 1.55672 \\cr &x_2 \\cr &\\quad \\approx 1.55672 - \\dfrac{-0.00069}{1.64238} \\cr &\\quad \\approx 1.55714 \\end{aligned}",
        "Successive iterations round to $1.56$ to two decimal places, so the root is $\\alpha \\approx 1.56$.",
        "Final Answer: $$1.56$$"
    ],
    "pi_options": [
        {
            "ans": "$$1.50$$",
            "feedback": "This error occurs if you stop at the initial guess $x_0$ without carrying out any Newton-Raphson iterations."
        },
        {
            "ans": "$$1.61$$",
            "feedback": "This mistake happens if you differentiate $\\ln x$ incorrectly (for example, as $\\frac{1}{x^2}$), leading to an incorrect denominator."
        },
        {
            "ans": "$$1.48$$",
            "feedback": "This is caused by a sign error on the numerator, adding the correction fraction instead of subtracting it."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Simplifying Complex Fractions",
        "content": "When $f'(x) = \\dfrac{1}{x} + 1$, multiplying the fraction's numerator and denominator by $x$ gives: \\begin{aligned} &x - \\dfrac{x(\\ln x + x - 2)}{1 + x} \\end{aligned} This makes calculator input simpler and reduces keying slips."
    }
},
{
    "id": "004744",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Numerical Methods",
    "subtopic": [
        "Graphical Roots",
        "Newton-Raphson Method",
        "Reciprocal Functions"
    ],
    "img": false,
    "question": "<strong>(a)</strong> By drawing suitable graphs, show that the equation: \\begin{aligned} &\\dfrac{1}{x} = x^2 - 1 \\end{aligned} has only one positive root.<br><br><strong>(b)</strong> Starting with $x_0 = 1.3$, apply the Newton-Raphson method to $f(x) = x^2 - 1 - \\dfrac{1}{x}$ to find the value of this root correct to two decimal places.",
    "steps": [
        "We sketch $y = \\dfrac{1}{x}$ and $y = x^2 - 1$ for $x > 0$:<br><br><img src='images/Pure_SVGs/004744_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>For $x > 0$, $y = \\dfrac{1}{x}$ is strictly decreasing, while $y = x^2 - 1$ is strictly increasing. They intersect at exactly one positive point, confirming there is only one positive root, $\\alpha$.",
        "With $f(x) = x^2 - 1 - x^{-1}$, we differentiate with respect to $x$: \\begin{aligned} &f'(x) = 2x + x^{-2} \\cr &\\quad = 2x + \\dfrac{1}{x^2} \\end{aligned} The Newton-Raphson formula is: \\begin{aligned} &x_{n+1} \\cr &\\quad = x_n - \\dfrac{f(x_n)}{f'(x_n)} \\cr &\\quad = x_n - \\dfrac{x_n^2 - 1 - \\frac{1}{x_n}}{2x_n + \\frac{1}{x_n^2}} \\end{aligned}",
        "Performing the iterations with $x_0 = 1.3$: \\begin{aligned} &x_1 \\cr &\\quad = 1.3 - \\dfrac{1.3^2 - 1 - \\frac{1}{1.3}}{2(1.3) + \\frac{1}{1.3^2}} \\cr &\\quad \\approx 1.3 - \\dfrac{-0.07923}{3.19172} \\cr &\\quad \\approx 1.32482 \\cr &x_2 \\cr &\\quad \\approx 1.32482 - \\dfrac{0.00030}{3.21935} \\cr &\\quad \\approx 1.32472 \\end{aligned}",
        "Successive iterations round to $1.32$ to two decimal places, so the root is $\\alpha \\approx 1.32$.",
        "Final Answer: $$1.32$$"
    ],
    "pi_options": [
        {
            "ans": "$$1.30$$",
            "feedback": "This error occurs if you assume the initial guess $x_0$ is already the final root without performing any iterations."
        },
        {
            "ans": "$$1.35$$",
            "feedback": "This mistake happens if you differentiate $-x^{-1}$ incorrectly as $-x^{-2}$, leading to $f'(x) = 2x - \\frac{1}{x^2}$."
        },
        {
            "ans": "$$1.28$$",
            "feedback": "This is caused by a sign error in the Newton-Raphson step, adding the correction fraction instead of subtracting it from $x_n$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Differentiating Negative Powers",
        "content": "Take care when differentiating negative powers: $\\dfrac{\\text{d}}{\\text{d}x}(-x^{-1}) = -(-1)x^{-2} = +\\dfrac{1}{x^2}$. A sign slip here will distort the iteration denominator."
    }
},
{
    "id": "004745",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Numerical Methods",
    "subtopic": [
        "Graphical Roots",
        "Newton-Raphson Method",
        "Trigonometric Equations"
    ],
    "img": false,
    "question": "<strong>(a)</strong> By drawing suitable graphs, show that the equation: \\begin{aligned} &x^2 = \\cos x \\end{aligned} has only one positive root.<br><br><strong>(b)</strong> Starting with $x_0 = 0.8$, use the Newton-Raphson method to find the value of this positive root correct to two decimal places.",
    "steps": [
        "We sketch $y = x^2$ and $y = \\cos x$:<br><br><img src='images/Pure_SVGs/004745_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>For $x > 0$, $y = x^2$ is strictly increasing from the origin, while $y = \\cos x$ decreases from $(0, 1)$ to $0$ at $x = \\dfrac{\\pi}{2}$. The curves intersect at exactly one positive point, confirming there is only one positive root, $\\alpha$.",
        "Let $f(x) = x^2 - \\cos x$. Differentiating gives: \\begin{aligned} &f'(x) = 2x - (-\\sin x) \\cr &\\quad = 2x + \\sin x \\end{aligned} The Newton-Raphson formula is: \\begin{aligned} &x_{n+1} \\cr &\\quad = x_n - \\dfrac{f(x_n)}{f'(x_n)} \\cr &\\quad = x_n - \\dfrac{x_n^2 - \\cos x_n}{2x_n + \\sin x_n} \\end{aligned}",
        "Performing the iterations in radians with $x_0 = 0.8$: \\begin{aligned} &x_1 \\cr &\\quad = 0.8 - \\dfrac{0.8^2 - \\cos(0.8)}{2(0.8) + \\sin(0.8)} \\cr &\\quad \\approx 0.8 - \\dfrac{-0.05670}{2.31735} \\cr &\\quad \\approx 0.82447 \\cr &x_2 \\cr &\\quad \\approx 0.82447 - \\dfrac{0.00080}{2.38317} \\cr &\\quad \\approx 0.82413 \\end{aligned}",
        "Successive iterations round to $0.82$ to two decimal places, so the positive root is $\\alpha \\approx 0.82$.",
        "Final Answer: $$0.82$$"
    ],
    "pi_options": [
        {
            "ans": "$$0.80$$",
            "feedback": "This error occurs if you stop at the initial guess $x_0$ without carrying out any Newton-Raphson iterations."
        },
        {
            "ans": "$$0.77$$",
            "feedback": "This is caused by a sign error when differentiating $-\\cos x$. Writing $f'(x) = 2x - \\sin x$ produces an incorrect denominator."
        },
        {
            "ans": "$$0.91$$",
            "feedback": "This mistake happens if your calculator is set to degree mode instead of radian mode when evaluating $\\sin x_n$ and $\\cos x_n$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Differentiating Negative Trigonometric Terms",
        "content": "Differentiating $-\\cos x$ involves two negative signs: $\\dfrac{\\text{d}}{\\text{d}x}(-\\cos x) = -(-\\sin x) = +\\sin x$. Watch out for this double negative in Newton-Raphson setups."
    }
},
{
    "id": "004746",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Calculus",
    "topic": "Differentiation",
    "subtopic": [
        "Implicit Differentiation"
    ],
    "img": false,
    "question": "A curve is given by the equation:$$2x^4 + 5y^3 = 10$$<br>By using implicit differentiation, find $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ in terms of $x$ and $y$.",
    "steps": [
        "Differentiate both sides of the equation with respect to $x$. When differentiating terms in $y$, apply the chain rule by multiplying by $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$:\\begin{aligned} \\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left( 2x^4 \\right) + \\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left( 5y^3 \\right) &= \\dfrac{\\mathrm{d}}{\\mathrm{d}x}(10) \\cr 8x^3 + 15y^2 \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= 0 \\end{aligned}",
        "Rearrange the equation to isolate the derivative term $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$:\\begin{aligned} 15y^2 \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= -8x^3 \\cr \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= -\\dfrac{ 8x^3 }{ 15y^2 } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = -\\dfrac{ 15y^2 }{ 8x^3 }$$",
            "feedback": "This error occurs if the fraction is inverted when dividing to isolate the derivative term."
        },
        {
            "ans": "$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{ 8x^3 }{ 15y^2 }$$",
            "feedback": "This mistake is caused by a sign error, forgetting to make the term negative when moving $8x^3$ to the right-hand side of the equation."
        },
        {
            "ans": "$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = -\\dfrac{ 8x^3 }{ 15y }$$",
            "feedback": "This arises from a differentiation slip where $5y^3$ is incorrectly differentiated as $15y$ instead of $15y^2$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: The Chain Rule Multiplier",
        "content": "The most fundamental rule of implicit differentiation is that whenever you differentiate a term containing $y$ with respect to $x$, you must multiply by $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ because $y$ is an implicit function of $x$. For instance, $\\dfrac{\\mathrm{d}}{\\mathrm{d}x}(y^3) = 3y^2 \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$."
    }
},
{
    "id": "004747",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Calculus",
    "topic": "Differentiation",
    "subtopic": [
        "Implicit Differentiation",
        "Product Rule"
    ],
    "img": false,
    "question": "A curve is given by the equation:$$y^2 + 2xy - x^3 = 7$$<br>By using implicit differentiation, find $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ in terms of $x$ and $y$.",
    "steps": [
        "Differentiate both sides of the equation with respect to $x$. Apply the product rule to the term $2xy$:\\begin{aligned} \\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left( y^2 \\right) + \\dfrac{\\mathrm{d}}{\\mathrm{d}x}(2xy) - \\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left( x^3 \\right) &= \\dfrac{\\mathrm{d}}{\\mathrm{d}x}(7) \\cr 2y \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} + \\left( 2y + 2x \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\right) - 3x^2 &= 0 \\end{aligned}",
        "Group the terms containing $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ on one side and move the other terms to the opposite side:\\begin{aligned} 2y \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} + 2x \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= 3x^2 - 2y \\cr \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}(2x + 2y) &= 3x^2 - 2y \\end{aligned}",
        "Isolate $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ by dividing by the factor $(2x + 2y)$:\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= \\dfrac{ 3x^2 - 2y }{ 2x + 2y } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{ 3x^2 - 2y }{ 2y }$$",
            "feedback": "This error occurs if the product rule is not applied to $2xy$, completely omitting the $+ 2x \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ term during differentiation."
        },
        {
            "ans": "$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{ 3x^2 }{ 2x + 2y }$$",
            "feedback": "This mistake happens if the $2y$ term from the product rule is forgotten or incorrectly omitted during differentiation."
        },
        {
            "ans": "$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{ 3x^2 + 2y }{ 2x + 2y }$$",
            "feedback": "This is caused by a sign error when moving the $+2y$ term from the left-hand side to the right-hand side of the equation."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Product Rule Sign and Variable Splitting",
        "content": "When differentiating a mixed term like $2xy$, always treat it as a product of $2x$ and $y$. Let $u = 2x$ and $v = y$. Since $\\dfrac{\\mathrm{d}u}{\\mathrm{d}x} = 2$ and $\\dfrac{\\mathrm{d}v}{\\mathrm{d}x} = \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$, the product rule yields $2y + 2x \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$. Be careful with signs if the term has a leading negative coefficient."
    }
},
{
    "id": "004748",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Calculus",
    "topic": "Differentiation",
    "subtopic": [
        "Implicit Differentiation",
        "Product Rule",
        "Trigonometric and Exponential Functions"
    ],
    "img": false,
    "question": "A curve is given by the equation:$$y \\sin x + e^y = 5$$<br>By using implicit differentiation, find $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ in terms of $x$ and $y$.",
    "steps": [
        "Differentiate both sides with respect to $x$, applying the product rule to $y \\sin x$ and the chain rule to $e^y$:\\begin{aligned} \\dfrac{\\mathrm{d}}{\\mathrm{d}x}(y \\sin x) + \\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left( e^y \\right) &= \\dfrac{\\mathrm{d}}{\\mathrm{d}x}(5) \\cr \\left( \\sin x \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} + y \\cos x \\right) + e^y \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= 0 \\end{aligned}",
        "Factor out $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ from the relevant terms and rearrange to solve for the derivative:\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\left( \\sin x + e^y \\right) + y \\cos x &= 0 \\cr \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\left( \\sin x + e^y \\right) &= -y \\cos x \\cr \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= -\\dfrac{ y \\cos x }{ \\sin x + e^y } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = -\\dfrac{ y \\cos x }{ \\sin x + 1 }$$",
            "feedback": "This error occurs if the derivative of $e^y$ with respect to $x$ is incorrectly written as $1 \\cdot \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ or if $e^y$ is misidentified as $e^x$."
        },
        {
            "ans": "$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{ y \\cos x }{ \\sin x + e^y }$$",
            "feedback": "This mistake is caused by a sign error when moving the $+y \\cos x$ term to the right-hand side of the equation."
        },
        {
            "ans": "$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = -\\dfrac{ y \\sin x }{ \\cos x + e^y }$$",
            "feedback": "This arises from a differentiation slip where the derivative of $\sin x$ is incorrectly taken as $-\\sin x$ or swapped with $\\cos x$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Differentiating Transcendental Implicit Functions",
        "content": "Transcendental functions such as exponential and trigonometric terms follow standard rules but must incorporate the implicit chain rule. Differentiating $e^y$ with respect to $x$ gives $e^y \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$, not just $e^y$. Similarly, differentiating $\\sin y$ would yield $\\cos y \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$."
    }
},
{
    "id": "004749",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Calculus",
    "topic": "Differentiation",
    "subtopic": [
        "Implicit Differentiation",
        "Logarithmic Functions"
    ],
    "img": false,
    "question": "A curve is given by the equation:$$x^2 \\ln y + y = 3x$$<br>By using implicit differentiation, find $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ in terms of $x$ and $y$.",
    "steps": [
        "Differentiate both sides with respect to $x$, applying the product rule to $x^2 \\ln y$:\\begin{aligned} \\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left( x^2 \\ln y \\right) + \\dfrac{\\mathrm{d}}{\\mathrm{d}x}(y) &= \\dfrac{\\mathrm{d}}{\\mathrm{d}x}(3x) \\cr \\left( 2x \\ln y + x^2 \\cdot \\dfrac{1}{y} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\right) + \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= 3 \\end{aligned}",
        "Factor out $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ on the left-hand side and move the other terms to the right-hand side:\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\left( \\dfrac{x^2}{y} + 1 \\right) &= 3 - 2x \\ln y \\end{aligned}",
        "Multiply the entire equation by $y$ to clear the fraction and solve for $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$:\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\left( x^2 + y \\right) &= y(3 - 2x \\ln y) \\cr \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= \\dfrac{ 3y - 2xy \\ln y }{ x^2 + y } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{ 3 - 2x \\ln y }{ x^2 + 1 }$$",
            "feedback": "This error occurs if the $y$-denominator of the differentiated log term is forgotten or omitted, treating $\\ln y$ as if its derivative with respect to $y$ was $1$ instead of $\\dfrac{1}{y}$."
        },
        {
            "ans": "$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{ 3y - 2xy \\ln y }{ x^2 }$$",
            "feedback": "This mistake is caused by failing to include the $+ y$ term in the denominator, which arises from forgetting to differentiate the standalone $+y$ term to $+\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$."
        },
        {
            "ans": "$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{ 3y + 2xy \\ln y }{ x^2 + y }$$",
            "feedback": "This arises from a sign error when moving the $+2x \\ln y$ term over to the right-hand side of the equation."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Clearing Fractional Algebra",
        "content": "When separating variables in implicit equations containing algebraic fractions, like $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\left( \\dfrac{x^2}{y} + 1 \\right) = 3 - 2x \\ln y$, multiplying both sides by the denominator $y$ first is a highly efficient way to simplify the expression and avoid complex fractions within fractions."
    }
},
{
    "id": "004750",
    "board": "CCEA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Calculus",
    "topic": "Differentiation",
    "subtopic": [
        "Implicit Differentiation",
        "Coordinate Gradients"
    ],
    "img": false,
    "question": "A curve is defined implicitly by the equation:$$3x^2 - y^3 + 2xy = 12$$<br>Find the gradient of the curve at the point $(2, 2)$..",
    "steps": [
        "Differentiate the implicit equation with respect to $x$, using the chain rule for $y^3$ and the product rule for $2xy$:\\begin{aligned} \\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left( 3x^2 - y^3 + 2xy \\right) &= \\dfrac{\\mathrm{d}}{\\mathrm{d}x}(12) \\cr 6x - 3y^2 \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} + \\left( 2y + 2x \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\right) &= 0 \\end{aligned}",
        "Group the terms containing $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ and express $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ in terms of $x$ and $y$:\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\left( 2x - 3y^2 \\right) + 6x + 2y &= 0 \\cr \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\left( 2x - 3y^2 \\right) &= -6x - 2y \\cr \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= \\dfrac{ 6x + 2y }{ 3y^2 - 2x } \\end{aligned}",
        "Substitute the coordinates $(2, 2)$ into the derivative formula to calculate the numerical gradient:\\begin{aligned} \\text{Gradient} &= \\dfrac{ 6(2) + 2(2) }{ 3\\left(2^2\\right) - 2(2) } \\cr \\text{Gradient} &= \\dfrac{ 12 + 4 }{ 12 - 4 } \\cr \\text{Gradient} &= \\dfrac{ 16 }{ 8 } \\cr \\text{Gradient} &= 2 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$-2$$",
            "feedback": "This error is caused by a sign error when dividing or factoring, leading to a negative gradient."
        },
        {
            "ans": "$$1$$",
            "feedback": "This mistake occurs if the product rule is omitted on the term $2xy$, leading to a derivative of $\\dfrac{ 6x }{ 3y^2 }$, which evaluates to $1$ at $(2, 2)$."
        },
        {
            "ans": "$$\\dfrac{4}{3}$$",
            "feedback": "This arises from a differentiation slip on $-y^3$, differentiating it as $-3y$ instead of $-3y^2$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Early Evaluation vs. Algebraic Rearrangement",
        "content": "For gradient evaluation questions at a specific point, you can substitute the numerical values of $x$ and $y$ directly into the differentiated equation *before* rearranging it algebraically to isolate $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$. This often reduces the risk of making transposition errors."
    }
}
];