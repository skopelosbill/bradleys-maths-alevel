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
    "question": "<strong>(a)</strong> Explain why the sum to infinity of a geometric series with first term $a \\neq 0$ and common ratio $r$ only exists when $|r| < 1$. <br><br><strong>(b)</strong> A geometric progression $V$ has first term $3$ and common ratio $r$. Another progression $W$ is formed by squaring each term in $V$. <br><br><strong>(i)</strong> Show that $W$ is also a geometric progression, stating its first term and common ratio in terms of $r$. <br><br><strong>(ii)</strong> Given that the sum to infinity of $W$ is twice the sum to infinity of $V$, find the value of $r$.",
    "steps": [
        "To solve part (a), we write down the formula for the sum of the first $n$ terms of a geometric series: <br> \\begin{aligned} S_n &= \\dfrac{ a(1 - r^n) }{ 1 - r } \\end{aligned}",
        "The sum to infinity is defined as the limit of $S_n$ as $n \\to \\infty$: <br> \\begin{aligned} S_{\\infty} &= \\lim_{ n \\to \\infty } S_n \\cr &= \\lim_{ n \\to \\infty } \\dfrac{ a(1 - r^n) }{ 1 - r } \\end{aligned} <br> This limit only exists (converges) if the term $r^n$ converges to a finite value. For $r^n$ to converge to $0$ as $n \\to \\infty$, the magnitude of the common ratio must be strictly less than $1$ ($|r| < 1$). If $|r| \\ge 1$, $r^n$ does not converge to $0$, causing the series to diverge.",
        "To solve part (b)(i), we write out the first few terms of the geometric progression $V$: <br> \\begin{aligned} V_1 &= 3 \\cr V_2 &= 3r \\cr V_3 &= 3r^2 \\end{aligned}",
        "Another progression $W$ is formed by squaring each individual term in $V$: <br> \\begin{aligned} W_1 &= 3^2 \\cr &= 9 \\cr W_2 &= (3r)^2 \\cr &= 9r^2 \\cr W_3 &= (3r^2)^2 \\cr &= 9r^4 \\end{aligned}",
        "We show that $W$ is a geometric progression by calculating the ratio between consecutive terms: <br> \\begin{aligned} \\dfrac{ W_2 }{ W_1 } &= \\dfrac{ 9r^2 }{ 9 } = r^2 \\cr \\dfrac{ W_3 }{ W_2 } &= \\dfrac{ 9r^4 }{ 9r^2 } = r^2 \\cr \\dfrac{ W_{ k + 1 } }{ W_k } &= \\dfrac{ 9r^{ 2k } }{ 9r^{ 2k - 2 } } \\cr &= r^2 \\end{aligned} <br> Since this ratio is constant (independent of $k$), $W$ is a geometric progression with first term $A = 9$ and common ratio $R = r^2$.",
        "To solve part (b)(ii), we write the sum to infinity of both progressions $V$ and $W$: <br> \\begin{aligned} S_{\\infty}(V) &= \\dfrac{ 3 }{ 1 - r } \\cr S_{\\infty}(W) &= \\dfrac{ 9 }{ 1 - r^2 } \\end{aligned}",
        "We set up the equation $S_{\\infty}(W) = 2S_{\\infty}(V)$ and solve for $r$: <br> \\begin{aligned} \\dfrac{ 9 }{ 1 - r^2 } &= 2 \\left( \\dfrac{ 3 }{ 1 - r } \\right) \\cr \\dfrac{ 9 }{ (1 - r)(1 + r) } &= \\dfrac{ 6 }{ 1 - r } \\cr \\dfrac{ 9 }{ 1 + r } &= 6 \\cr 9 &= 6(1 + r) \\cr 9 &= 6 + 6r \\cr 6r &= 3 \\cr r &= 0.5 \\end{aligned} <br> Since $|0.5| < 1$, this is a valid common ratio. Thus, the value of $r$ is $0.5$."
    ],
    "pi_options": [
        {
            "ans": "<strong>(b)(i)</strong> First term: $9$, Ratio: $r$, <strong>(b)(ii)</strong> $r = 0.25$",
            "feedback": "This error occurs in part (b)(i) if you assume the common ratio of the squared progression $W$ remains $r$ instead of squaring it to $r^2$, which corrupts the subsequent calculations."
        },
        {
            "ans": "<strong>(b)(i)</strong> First term: $9$, Ratio: $r^2$, <strong>(b)(ii)</strong> $r = -0.5$",
            "feedback": "This mistake arises from a sign slip when solving the linear equation $9 = 6(1+r)$, calculating $6r = -3 \\implies r = -0.5$ instead of $6r = 3 \\implies r = 0.5$."
        },
        {
            "ans": "<strong>(b)(i)</strong> First term: $6$, Ratio: $r^2$, <strong>(b)(ii)</strong> $r = 0.5$",
            "feedback": "This error occurs in part (b)(i) if you double the first term of $V$ ($2 \\times 3 = 6$) instead of squaring it ($3^2 = 9$) when defining the first term of $W$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Squaring Series Terms",
        "content": "When squaring every individual term of a geometric series $a, ar, ar^2, \\dots$, you create a new geometric series $a^2, a^2r^2, a^2r^4, \\dots$ whose first term is the square of the original first term ($A = a^2$) and whose common ratio is the square of the original common ratio ($R = r^2$)."
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
    "question": "The first three terms of a geometric progression are $x + 2$, $x$, and $x - 1$ respectively, where $x$ is a real constant. <br><br><strong>(a)</strong> Show that $x = 2$. <br><br><strong>(b)</strong> Find the common ratio of this progression. <br><br><strong>(c)</strong> Determine the sum to infinity of this progression.",
    "steps": [
        "For any geometric progression, the ratio between consecutive terms is a constant common ratio $r$. Therefore: <br> \\begin{aligned} \\dfrac{ \\text{Term 2} }{ \\text{Term 1} } &= \\dfrac{ \\text{Term 3} }{ \\text{Term 2} } \\end{aligned}",
        "We substitute our algebraic terms into this relationship and solve for $x$: <br> \\begin{aligned} \\dfrac{ x }{ x + 2 } &= \\dfrac{ x - 1 }{ x } \\cr x^2 &= (x - 1)(x + 2) \\cr x^2 &= x^2 + x - 2 \\cr 0 &= x - 2 \\cr x &= 2 \\end{aligned} <br> as required.",
        "To solve part (b), we substitute $x = 2$ back into our terms to find the values of our progression: <br> \\begin{aligned} \\text{Term 1: } &2 + 2 = 4 \\cr \\text{Term 2: } &2 \\cr \\text{Term 3: } &2 - 1 = 1 \\end{aligned}",
        "We calculate the common ratio $r$ of the progression: <br> \\begin{aligned} r &= \\dfrac{ \\text{Term 2} }{ \\text{Term 1} } \\cr &= \\dfrac{ 2 }{ 4 } \\cr &= 0.5 \\end{aligned}",
        "To solve part (c), we use the sum to infinity formula $S_{\\infty} = \\dfrac{ a }{ 1 - r }$ with $a = 4$ and $r = 0.5$: <br> \\begin{aligned} S_{\\infty} &= \\dfrac{ a }{ 1 - r } \\cr S_{\\infty} &= \\dfrac{ 4 }{ 1 - 0.5 } \\cr &= \\dfrac{ 4 }{ 0.5 } \\cr &= 8 \\end{aligned} <br> Thus, the sum to infinity of this progression is $8$."
    ],
    "pi_options": [
        {
            "ans": "<strong>(b)</strong> $r = 2$, <strong>(c)</strong> $S_{\\infty} = -4$",
            "feedback": "This error occurs if you invert the common ratio definition, calculating $r = \\dfrac{ u_1 }{ u_2 } = \\dfrac{ 4 }{ 2 } = 2$ instead of $r = \\dfrac{ u_2 }{ u_1 } = 0.5$."
        },
        {
            "ans": "<strong>(b)</strong> $r = 0.5$, <strong>(c)</strong> $S_{\\infty} = 4$",
            "feedback": "This mistake is caused by using the first term of the progression as $a = 2$ instead of $a = 4$ when calculating the sum to infinity."
        },
        {
            "ans": "<strong>(b)</strong> $r = 0.5$, <strong>(c)</strong> The sum to infinity does not exist",
            "feedback": "This arises if you mistakenly think that the progression diverges because the term values are decreasing, failing to recognise that since $|r| = 0.5 < 1$, the sum to infinity is fully convergent."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Defining Common Ratios Algebraically",
        "content": "Whenever you are given three terms of a geometric progression in terms of an unknown variable, always set up the ratio equation $\\dfrac{ u_2 }{ u_1 } = \\dfrac{ u_3 }{ u_2 }$. Cross-multiplying this equation will construct a solvable polynomial equation that isolates the unknown constant directly."
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
    "question": "A geometric progression has a sum to infinity equal to $16$. The sum of the first three terms of this progression is equal to $14$. <br><br><strong>(a)</strong> Find the common ratio $r$ of this progression, giving your answer in exact fractional form. <br><br><strong>(b)</strong> Find the first term $a$ of the progression.",
    "steps": [
        "To solve part (a), we write down the equations representing our given sums. <br> Using the sum to infinity formula: <br> \\begin{aligned} S_{\\infty} &= 16 \\cr \\dfrac{ a }{ 1 - r } &= 16 \\cr a &= 16(1 - r) \\end{aligned}",
        "Using the sum of the first $n$ terms formula for $S_3 = 14$: <br> \\begin{aligned} S_3 &= 14 \\cr \\dfrac{ a(1 - r^3) }{ 1 - r } &= 14 \\end{aligned}",
        "We substitute our expression for $a = 16(1 - r)$ into our sum equation: <br> \\begin{aligned} \\dfrac{ 16(1 - r)(1 - r^3) }{ 1 - r } &= 14 \\cr 16(1 - r^3) &= 14 \\cr 1 - r^3 &= \\dfrac{ 14 }{ 16 } \\cr 1 - r^3 &= \\dfrac{ 7 }{ 8 } \\cr r^3 &= 1 - \\dfrac{ 7 }{ 8 } \\cr r^3 &= \\dfrac{ 1 }{ 8 } \\cr r &= 0.5 \\end{aligned} <br> Thus, the exact fractional value of the common ratio is $r = \\dfrac{ 1 }{ 2 }$.",
        "To solve part (b), we substitute our common ratio $r = 0.5$ back into our first term expression: <br> \\begin{aligned} a &= 16(1 - 0.5) \\cr &= 16(0.5) \\cr &= 8 \\end{aligned} <br> Thus, the first term of the progression is $a = 8$."
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $r = \\dfrac{ 1 }{ 4 }$, <strong>(b)</strong> $a = 12$",
            "feedback": "This error occurs if you make an arithmetic slip when simplifying the fractional subtraction, calculating $r^3 = \\dfrac{ 1 }{ 64 } \\implies r = \\dfrac{ 1 }{ 4 }$."
        },
        {
            "ans": "<strong>(a)</strong> $r = \\dfrac{ 1 }{ 2 }$, <strong>(b)</strong> $a = 16$",
            "feedback": "This mistake occurs in part (b) if you assume the first term $a$ is equal to the sum to infinity ($16$) instead of evaluating $a = 16(1-r)$."
        },
        {
            "ans": "<strong>(a)</strong> $r = -\\dfrac{ 1 }{ 2 }$, <strong>(b)</strong> $a = 24$",
            "feedback": "This arises from a sign error when solving the cubic equation, calculating $r^3 = -\\dfrac{ 1 }{ 8 } \\implies r = -\\dfrac{ 1 }{ 2 }$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Simplification of GP Ratios",
        "content": "When solving simultaneous equations involving both $S_n$ and $S_{\\infty}$, always write $a = S_{\\infty}(1 - r)$ first. Substituting this term into the $S_n$ formula $\\dfrac{ a(1 - r^n) }{ 1 - r }$ elegantly cancels out the $(1-r)$ denominators, reducing your problem to a simple single-variable polynomial $S_{\\infty}(1 - r^n) = S_n$."
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
    "question": "A geometric progression has first term $5$ and common ratio $1.2$. <br><br>Find the minimum number of terms required for the sum of the progression to exceed $1000$. Show all of your algebraic working, including the use of logarithms.",
    "steps": [
        "We are given the parameters $a = 5$ and $r = 1.2$. We set up our inequality for the sum $S_n$ to exceed $1000$ using the sum formula: <br> \\begin{aligned} S_n &> 1000 \\cr \\dfrac{ a(r^n - 1) }{ r - 1 } &> 1000 \\end{aligned}",
        "We substitute our values into this inequality and simplify it algebraically: <br> \\begin{aligned} \\dfrac{ 5(1.2^n - 1) }{ 1.2 - 1 } &> 1000 \\cr \\dfrac{ 5(1.2^n - 1) }{ 0.2 } &> 1000 \\cr 25(1.2^n - 1) &> 1000 \\cr 1.2^n - 1 &> 40 \\cr 1.2^n &> 41 \\end{aligned}",
        "To isolate $n$, we take natural logarithms on both sides of the inequality: <br> \\begin{aligned} \\ln(1.2^n) &> \\ln(41) \\cr n\\ln(1.2) &> \\ln(41) \\cr n &> \\dfrac{ \\ln(41) }{ \\ln(1.2) } \\end{aligned} <br> Since $r = 1.2 > 1$, we have $\\ln(1.2) > 0$. Therefore, dividing by $\\ln(1.2)$ does not reverse the direction of our inequality sign.",
        "We evaluate the logarithmic values numerically: <br> \\begin{aligned} \\dfrac{ \\ln(41) }{ \\ln(1.2) } &\\approx \\dfrac{ 3.71357 }{ 0.18232 } \\cr &\\approx 20.368 \\end{aligned} <br> Since $n$ must be an integer, the minimum number of terms required is $21$."
    ],
    "pi_options": [
        {
            "ans": "$20$",
            "feedback": "This is the truncated integer part of $20.368$. Since $n$ must strictly exceed $20.368$ for the sum to exceed $1000$, $20$ terms are insufficient ($S_{20} \\approx 933.44$)."
        },
        {
            "ans": "$22$",
            "feedback": "This arises from a double rounding error or a scale factor division slip, calculating $n > 21.368 \\implies n = 22$."
        },
        {
            "ans": "$18$",
            "feedback": "This mistake occurs if you write the denominator division incorrectly as $5 \\times 0.2 = 1$ instead of $5 / 0.2 = 25$, resulting in $1.2^n > 201 \\implies n \\approx 29.1$, or another division error."
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
    "question": "A geometric progression has first term $a$ and common ratio $r$. A new series is formed by taking the difference between consecutive terms of this progression: $d_n = u_n - u_{n+1}$ for $n \\ge 1$. <br><br><strong>(a)</strong> Show that the new series $d_n$ is also a geometric progression, and write down its first term and common ratio in terms of $a$ and $r$. <br><br><strong>(b)</strong> Given that the original progression has a sum to infinity of $12$, and the new progression has a sum to infinity of $4$, find the exact values of $a$ and $r$.",
    "steps": [
        "To solve part (a), we write out the general terms of the original progression: $u_n = ar^{n-1}$ and $u_{n+1} = ar^n$. We substitute these into our definition of $d_n$: <br> \\begin{aligned} d_n &= u_n - u_{n+1} \\cr &= ar^{n-1} - ar^n \\cr &= ar^{n-1}(1 - r) \\end{aligned}",
        "We show that $d_n$ is a geometric progression by calculating the ratio between consecutive terms: <br> \\begin{aligned} \\dfrac{ d_{ n + 1 } }{ d_n } &= \\dfrac{ ar^n(1 - r) }{ ar^{ n - 1 }(1 - r) } \\cr &= r \\end{aligned} <br> Since this ratio is constant (independent of $n$), the series $d_n$ is a geometric progression with first term $d_1 = a(1 - r)$ and common ratio $R = r$.",
        "To solve part (b), we use the sum to infinity formula for both progressions: <br> For the original progression $u_n$: <br> \\begin{aligned} S_{\\infty}(\\text{orig}) &= 12 \\cr \\dfrac{ a }{ 1 - r } &= 12 \\cr a &= 12(1 - r) \\end{aligned}",
        "For the new progression $d_n$, we use the sum to infinity with $d_1 = a(1 - r)$ and ratio $r$: <br> \\begin{aligned} S_{\\infty}(d_n) &= 4 \\cr \\dfrac{ d_1 }{ 1 - r } &= 4 \\cr \\dfrac{ a(1 - r) }{ 1 - r } &= 4 \\cr a &= 4 \\end{aligned}",
        "We substitute our value of $a = 4$ back into our first equation to solve for $r$: <br> \\begin{aligned} 4 &= 12(1 - r) \\cr \\dfrac{ 4 }{ 12 } &= 1 - r \\cr \\dfrac{ 1 }{ 3 } &= 1 - r \\cr r &= 1 - \\dfrac{ 1 }{ 3 } \\cr r &= \\dfrac{ 2 }{ 3 } \\end{aligned} <br> Since $|2/3| < 1$, this is a valid common ratio. Thus, the exact values are $a = 4$ and $r = \\dfrac{ 2 }{ 3 }$."
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
        "content": "A series of differences of the form $d_n = u_n - u_{n+1}$ is a 'telescoping series'. Its sum to infinity represents a spectacular algebraic collapse: $\\sum_{n=1}^{\\infty} (u_n - u_{n+1}) = u_1 - u_2 + u_2 - u_3 + u_3 - u_4 \\dots$ which reduces simply to the first term $u_1 = a$. This is why the sum to infinity of $d_n$ is exactly $a$, completely independent of $r$."
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
    "question": "The equation of a curve $C$ is given by the parametric equations: <br> $x = \\cos 2\\theta, \\quad y = \\sin\\theta \\quad \\text{for} \\quad 0 \\le \\theta \\le \\dfrac{ \\pi }{ 2 }$ <br><br><strong>(a)</strong> Find the Cartesian equation of $C$. <br><br><strong>(b)</strong> Show that the line $x + 2y - 1 = 0$ meets $C$ at the point $P$, where $\\theta = 0$, and at the point $Q$, where $\\theta = \\dfrac{ \\pi }{ 2 }$. Write down the coordinates of $P$ and $Q$. <br><br><strong>(c)</strong> Determine the equations of the tangents to $C$ at $P$ and $Q$. Write down the coordinates of the point of intersection of the two tangents.",
    "steps": [
        "To find the Cartesian equation for part (a), we use the trigonometric double-angle identity $\\cos 2\\theta = 1 - 2\\sin^2\\theta$: <br> \\begin{aligned} x &= \\cos 2\\theta \\cr x &= 1 - 2\\sin^2\\theta \\end{aligned} <br> Since $y = \\sin\\theta$, we substitute $y$ into the expression to obtain our Cartesian equation: <br> \\begin{aligned} x &= 1 - 2y^2 \\end{aligned}",
        "To solve part (b), we find the intersection points by substituting $x = \\cos 2\\theta$ and $y = \\sin\\theta$ into the equation of the line: <br> \\begin{aligned} x + 2y - 1 &= 0 \\cr \\cos 2\\theta + 2\\sin\\theta - 1 &= 0 \\cr (1 - 2\\sin^2\\theta) + 2\\sin\\theta - 1 &= 0 \\cr 2\\sin\\theta - 2\\sin^2\\theta &= 0 \\cr 2\\sin\\theta(1 - \\sin\\theta) &= 0 \\end{aligned}",
        "We solve this factorised equation for $\\theta$ in the interval $0 \\le \\theta \\le \\dfrac{ \\pi }{ 2 }$: <br> 1. $\\sin\\theta = 0 \\implies \\theta = 0$, which defines point $P$. <br> 2. $1 - \\sin\\theta = 0 \\implies \\sin\\theta = 1 \\implies \\theta = \\dfrac{ \\pi }{ 2 }$, which defines point $Q$. <br> To find their coordinates $(x, y)$, we substitute the $\\theta$ values into the parametric equations: <br> For $P$ ($\\theta = 0$): <br> $x = \\cos 0 = 1$ and $y = \\sin 0 = 0 \\implies P(1, 0)$ <br> For $Q$ ($\\theta = \\dfrac{ \\pi }{ 2 }$): <br> $x = \\cos \\pi = -1$ and $y = \\sin\\left( \\dfrac{ \\pi }{ 2 } \\right) = 1 \\implies Q(-1, 1)$",
        "To solve part (c), we first find the gradient function $\\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x }$ using parametric differentiation: <br> \\begin{aligned} \\dfrac{ \\mathrm{d}x }{ \\mathrm{d}\\theta } &= -2\\sin 2\\theta \\cr \\dfrac{ \\mathrm{d}y }{ \\mathrm{d}\\theta } &= \\cos\\theta \\end{aligned}",
        "We divide our derivatives to find the gradient in terms of $\\theta$, simplifying using the double-angle identity $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$: <br> \\begin{aligned} \\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } &= \\dfrac{ \\cos\\theta }{ -2\\sin 2\\theta } \\cr &= \\dfrac{ \\cos\\theta }{ -4\\sin\\theta\\cos\\theta } \\cr &= -\\dfrac{ 1 }{ 4\\sin\\theta } \\end{aligned}",
        "We find the equation of the tangent at $P$ ($\\theta = 0$): <br> Substituting $\\theta = 0$ into our gradient function gives an undefined gradient (division by zero), which represents a vertical line. Since the $x$-coordinate of $P$ is $1$, the equation of the tangent at $P$ is: <br> \\begin{aligned} x &= 1 \\end{aligned}",
        "We find the equation of the tangent at $Q$ ($\\theta = \\dfrac{ \\pi }{ 2 }$): <br> Substituting $\\theta = \\dfrac{ \\pi }{ 2 }$ into our gradient function gives the gradient $m = -\\dfrac{ 1 }{ 4(1) } = -0.25$. Using the point $Q(-1, 1)$, the equation of the tangent is: <br> \\begin{aligned} y - 1 &= -0.25(x - (-1)) \\cr y - 1 &= -0.25(x + 1) \\cr 4y - 4 &= -x - 1 \\cr x + 4y - 3 &= 0 \\end{aligned}",
        "To find the point of intersection of the two tangents, we substitute our vertical tangent $x = 1$ into our linear tangent equation $x + 4y - 3 = 0$: <br> \\begin{aligned} 1 + 4y - 3 &= 0 \\cr 4y &= 2 \\cr y &= 0.5 \\end{aligned} <br> Thus, the coordinates of the point of intersection of the two tangents are $(1, 0.5)$."
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
        "content": "A very common exam trap is encountering an undefined gradient of the form $\\dfrac{ k }{ 0 }$ when differentiating parametrically. Remember that an undefined gradient represents a perfectly straight vertical line of the form $x = c$. It is not 'no solution'—the equation is simply defined by the $x$-coordinate of that point."
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
    "question": "A curve $C$ is defined by the parametric equations: <br> $x = t^2 + 2t, \\quad y = t^3 - 3t$ <br><br><strong>(a)</strong> Find $\\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x }$ in terms of $t$, simplifying your expression as far as possible. <br><br><strong>(b)</strong> Find the equation of the tangent to $C$ at the point where $t = 2$. Give your answer in the form $ax + by + c = 0$, where $a$, $b$, and $c$ are integers.",
    "steps": [
        "To find the gradient function for part (a), we first find the derivatives of $x$ and $y$ with respect to the parameter $t$: <br> \\begin{aligned} \\dfrac{ \\mathrm{d}x }{ \\mathrm{d}t } &= 2t + 2 \\cr \\dfrac{ \\mathrm{d}y }{ \\mathrm{d}t } &= 3t^2 - 3 \\end{aligned}",
        "We divide our derivatives and factorise to simplify the expression for $\\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x }$: <br> \\begin{aligned} \\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } &= \\dfrac{ 3t^2 - 3 }{ 2t + 2 } \\cr &= \\dfrac{ 3(t - 1)(t + 1) }{ 2(t + 1) } \\cr &= \\dfrac{ 3(t - 1) }{ 2 } \\end{aligned}",
        "To solve part (b), we find the coordinates $(x, y)$ of the point on the curve where $t = 2$: <br> \\begin{aligned} x &= 2^2 + 2(2) = 8 \\cr y &= 2^3 - 3(2) = 2 \\end{aligned}",
        "We calculate the gradient $m$ of the tangent at $t = 2$ by substituting $t = 2$ into our simplified derivative expression: <br> \\begin{aligned} m &= \\dfrac{ 3(2 - 1) }{ 2 } \\cr &= 1.5 \\end{aligned}",
        "Using our point $(8, 2)$ and gradient $m = 1.5$, we write the equation of the tangent: <br> \\begin{aligned} y - 2 &= 1.5(x - 8) \\cr 2y - 4 &= 3x - 24 \\cr 3x - 2y - 20 &= 0 \\end{aligned} <br> Thus, the integer-coefficient equation of the tangent is $3x - 2y - 20 = 0$."
    ],
    "pi_options": [
        {
            "ans": "<strong>(b)</strong> $3x - 2y - 28 = 0$",
            "feedback": "This error occurs if you make an arithmetic error during linear expansion, calculating $1.5 \\times (-8) = -12$ instead of $-12$ on the right-hand side, or other expansion slips."
        },
        {
            "ans": "<strong>(a)</strong> $\\dfrac{ 3(t - 1) }{ 2 }$, <strong>(b)</strong> $3x - y - 22 = 0$",
            "feedback": "This mistake is caused by failing to multiply the left-hand side term $y - 2$ by the denominator $2$ when clearing the fractional gradient, leaving $y - 2 = 3x - 24 \\implies 3x - y - 22 = 0$."
        },
        {
            "ans": "<strong>(a)</strong> $\\dfrac{ 3t - 3 }{ 2 }$, <strong>(b)</strong> $3x - 2y - 12 = 0$",
            "feedback": "This arises from a coordinates calculation error, such as incorrectly evaluating the $x$-coordinate as $4$ or the $y$-coordinate as $4$ when substituting $t = 2$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Simplification First",
        "content": "In parametric differentiation, always check if your derivative expression $\\dfrac{ \\mathrm{d}y / \\mathrm{d}t }{ \\mathrm{d}x / \\mathrm{d}t }$ can be factorised and simplified before substituting the parameter $t$. Cancelling out common binomial terms (like $t+1$ here) prevents algebraic complexity and dramatically reduces the chance of arithmetic slips."
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
    "question": "The curve $C$ has the parametric equations: <br> $x = 3\\sec\\theta, \\quad y = 2\\tan\\theta \\quad \\text{for} \\quad 0 \\le \\theta < \\dfrac{ \\pi }{ 2 }$ <br><br><strong>(a)</strong> Find the Cartesian equation of $C$. <br><br><strong>(b)</strong> Find the equation of the normal to $C$ at the point where $\\theta = \\dfrac{ \\pi }{ 6 }$. Give your answer in the form $ax + by + c\\sqrt{ 3 } = 0$, where $a$, $b$, and $c$ are integers.",
    "steps": [
        "To find the Cartesian equation for part (a), we isolate the trigonometric terms: <br> \\begin{aligned} \\sec\\theta &= \\dfrac{ x }{ 3 } \\cr \\tan\\theta &= \\dfrac{ y }{ 2 } \\end{aligned}",
        "We substitute these expressions into the fundamental trigonometric identity $\\sec^2\\theta - \\tan^2\\theta = 1$: <br> \\begin{aligned} \\dfrac{ x^2 }{ 9 } - \\dfrac{ y^2 }{ 4 } &= 1 \\end{aligned}",
        "To solve part (b), we find the gradient function $\\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x }$ using parametric differentiation: <br> \\begin{aligned} \\dfrac{ \\mathrm{d}x }{ \\mathrm{d}\\theta } &= 3\\sec\\theta\\tan\\theta \\cr \\dfrac{ \\mathrm{d}y }{ \\mathrm{d}\\theta } &= 2\\sec^2\\theta \\end{aligned}",
        "We divide our derivatives and simplify: <br> \\begin{aligned} \\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } &= \\dfrac{ 2\\sec^2\\theta }{ 3\\sec\\theta\\tan\\theta } \\cr &= \\dfrac{ 2\\sec\\theta }{ 3\\tan\\theta } \\cr &= \\dfrac{ 2 }{ 3\\sin\\theta } \\end{aligned}",
        "We evaluate the gradient of the tangent $m_{\\text{tan}}$ at $\\theta = \\dfrac{ \\pi }{ 6 }$: <br> \\begin{aligned} m_{\\text{tan}} &= \\dfrac{ 2 }{ 3\\sin\\left( \\dfrac{ \\pi }{ 6 } \\right) } \\cr &= \\dfrac{ 2 }{ 3(0.5) } = \\dfrac{ 4 }{ 3 } \\end{aligned} <br> The gradient of the normal is the negative reciprocal of the tangent gradient: <br> \\begin{aligned} m_{\\text{norm}} &= -0.75 \\end{aligned}",
        "We find the coordinates $(x, y)$ of our point on the curve at $\\theta = \\dfrac{ \\pi }{ 6 }$: <br> \\begin{aligned} x &= 3\\sec\\left( \\dfrac{ \\pi }{ 6 } \\right) = 3\\left( \\dfrac{ 2 }{ \\sqrt{ 3 } } \\right) = 2\\sqrt{ 3 } \\cr y &= 2\\tan\\left( \\dfrac{ \\pi }{ 6 } \\right) = 2\\left( \\dfrac{ 1 }{ \\sqrt{ 3 } } \\right) = \\dfrac{ 2\\sqrt{ 3 } }{ 3 } \\end{aligned}",
        "Using our point $\\left( 2\\sqrt{ 3 }, \\dfrac{ 2\\sqrt{ 3 } }{ 3 } \\right)$ and normal gradient $m_{\\text{norm}} = -0.75$, we find the equation of the normal: <br> \\begin{aligned} y - \\dfrac{ 2\\sqrt{ 3 } }{ 3 } &= -0.75(x - 2\\sqrt{ 3 }) \\cr 4y - \\dfrac{ 8\\sqrt{ 3 } }{ 3 } &= -3(x - 2\\sqrt{ 3 }) \\cr 12y - 8\\sqrt{ 3 } &= -9(x - 2\\sqrt{ 3 }) \\cr 12y - 8\\sqrt{ 3 } &= -9x + 18\\sqrt{ 3 } \\cr 9x + 12y - 26\\sqrt{ 3 } &= 0 \\end{aligned} <br> Thus, the equation of the normal is $9x + 12y - 26\\sqrt{ 3 } = 0$."
    ],
    "pi_options": [
        {
            "ans": "<strong>(b)</strong> $9x + 12y - 10\\sqrt{ 3 } = 0$",
            "feedback": "This error occurs if you make an algebraic sign slip when distributing the $-9$ on the right-hand side of the normal equation, calculating $-9x - 18\\sqrt{ 3 }$ instead of $-9x + 18\\sqrt{ 3 }$."
        },
        {
            "ans": "<strong>(b)</strong> $3x - 4y - 10\\sqrt{ 3 } = 0$",
            "feedback": "This mistake is caused by using the tangent gradient $m_{\\text{tan}} = \\dfrac{ 4 }{ 3 }$ instead of the normal gradient $m_{\\text{norm}} = -\\dfrac{ 3 }{ 4 }$ to write the equation of the line."
        },
        {
            "ans": "<strong>(b)</strong> $9x + 12y - 22\\sqrt{ 3 } = 0$",
            "feedback": "This arises from an arithmetic error when clearing the fractional coordinate denominators, such as incorrectly evaluating $4 \\times \\dfrac{ 2\\sqrt{ 3 } }{ 3 }$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Normal Gradient Check",
        "content": "When asked for the equation of a normal, always write down your calculated tangent gradient first, check it, and then explicitly write out its negative reciprocal: $m_{\\text{norm}} = -\\dfrac{ 1 }{ m_{\\text{tan}} }$. Forgetting to invert or swap the sign of the gradient is one of the most common exam mistakes."
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
    "question": "A curve $C$ is defined parametrically by: <br> $x = t^3 - 3t, \\quad y = t^2 + 4t$ <br><br><strong>(a)</strong> Find the coordinates of any points on $C$ where the tangent is parallel to the $y$-axis (vertical tangents). <br><br><strong>(b)</strong> Find the coordinates of any points on $C$ where the tangent is parallel to the $x$-axis (horizontal tangents).",
    "steps": [
        "To analyze the behavior of the tangents, we find the derivatives of $x$ and $y$ with respect to the parameter $t$: <br> \\begin{aligned} \\dfrac{ \\mathrm{d}x }{ \\mathrm{d}t } &= 3t^2 - 3 \\cr \\dfrac{ \\mathrm{d}y }{ \\mathrm{d}t } &= 2t + 4 \\end{aligned}",
        "To solve part (a), a tangent is parallel to the $y$-axis (vertical) when the horizontal rate of change is zero, meaning $\\dfrac{ \\mathrm{d}x }{ \\mathrm{d}t } = 0$ (and $\\dfrac{ \\mathrm{d}y }{ \\mathrm{d}t } \\neq 0$): <br> \\begin{aligned} 3t^2 - 3 &= 0 \\cr 3(t - 1)(t + 1) &= 0 \\cr t &= \\pm 1 \\end{aligned}",
        "We substitute these values of $t$ back into our parametric equations to find the coordinates of our points: <br> For $t = 1$: <br> $x = 1^3 - 3(1) = -2$ and $y = 1^2 + 4(1) = 5 \\implies (-2, 5)$ <br> For $t = -1$: <br> $x = (-1)^3 - 3(-1) = 2$ and $y = (-1)^2 + 4(-1) = -3 \\implies (2, -3)$ <br> Thus, the coordinates of the points with vertical tangents are $(-2, 5)$ and $(2, -3)$.",
        "To solve part (b), a tangent is parallel to the $x$-axis (horizontal) when the vertical rate of change is zero, meaning $\\dfrac{ \\mathrm{d}y }{ \\mathrm{d}t } = 0$ (and $\\dfrac{ \\mathrm{d}x }{ \\mathrm{d}t } \\neq 0$): <br> \\begin{aligned} 2t + 4 &= 0 \\cr 2(t + 2) &= 0 \\cr t &= -2 \\end{aligned}",
        "We substitute $t = -2$ back into our parametric equations to find the coordinates of our point: <br> \\begin{aligned} x &= (-2)^3 - 3(-2) = -8 + 6 = -2 \\cr y &= (-2)^2 + 4(-2) = 4 - 8 = -4 \\end{aligned} <br> Thus, the coordinates of the point with a horizontal tangent are $(-2, -4)$."
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $(-2, 5)$ and $(2, -3)$, <strong>(b)</strong> $(2, -4)$",
            "feedback": "This error occurs in part (b) if you make an arithmetic sign slip when evaluating the $x$-coordinate at $t = -2$, calculating $(-2)^3 - 3(-2) = -8 - 6 = -14$ or $+2$."
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
        "content": "For any parametrically defined curve, remember the definitions: <br> 1. A tangent is horizontal when $\\dfrac{ \\mathrm{d}y }{ \\mathrm{d}t } = 0$ (numerator of derivative is zero). <br> 2. A tangent is vertical when $\\dfrac{ \\mathrm{d}x }{ \\mathrm{d}t } = 0$ (denominator of derivative is zero). <br> Always verify that both conditions do not occur simultaneously at the same value of $t$, as that would represent a singular cusp point."
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
    "question": "A curve $C$ is defined parametrically by: <br> $x = t^2, \\quad y = 3t - t^2 \\quad \\text{for} \\quad 0 \\le t \\le 3$ <br><br>Find the exact area of the finite region bounded by the curve $C$ and the $x$-axis.",
    "steps": [
        "We first find the values of our parameter $t$ where the curve meets the $x$-axis (since the boundary is $y = 0$): <br> \\begin{aligned} y &= 0 \\cr 3t - t^2 &= 0 \\cr t(3 - t) &= 0 \\cr t = 0 \\quad &\\text{or} \\quad t = 3 \\end{aligned}",
        "The formula for the area of a region bounded by a parametric curve and the $x$-axis is given by: <br> \\begin{aligned} \\text{Area} &= \\int_{ x(0) }^{ x(3) } y \\mathrm{d}x \\cr &= \\int_{ 0 }^{ 3 } y \\dfrac{ \\mathrm{d}x }{ \\mathrm{d}t } \\mathrm{d}t \\end{aligned}",
        "We find the derivative $\\dfrac{ \\mathrm{d}x }{ \\mathrm{d}t }$ from our parametric equation $x = t^2$: <br> \\begin{aligned} \\dfrac{ \\mathrm{d}x }{ \\mathrm{d}t } &= 2t \\end{aligned}",
        "We substitute our expressions into the parametric integral and expand before integrating: <br> \\begin{aligned} \\text{Area} &= \\int_{ 0 }^{ 3 } (3t - t^2)(2t) \\mathrm{d}t \\cr &= \\int_{ 0 }^{ 3 } (6t^2 - 2t^3) \\mathrm{d}t \\end{aligned}",
        "We integrate each term and evaluate over our interval bounds $[0, 3]$: <br> \\begin{aligned} \\text{Area} &= \\left[ 2t^3 - \\dfrac{ 1 }{ 2 } t^4 \\right]_{ 0 }^{ 3 } \\cr &= \\left( 2(27) - \\dfrac{ 1 }{ 2 } (81) \\right) - 0 \\cr &= 54 - 40.5 \\cr &= 13.5 \\end{aligned} <br> Thus, the exact area of the region is $13.5$ (or $\\dfrac{ 27 }{ 2 }$)."
    ],
    "pi_options": [
        {
            "ans": "$27$",
            "feedback": "This error occurs if you forget to divide by $2$ when evaluating the integral of the second term, integrating $-2t^3$ as $-t^4$ instead of $-\\dfrac{ 1 }{ 2 }t^4$."
        },
        {
            "ans": "$54$",
            "feedback": "This mistake is caused by completely omitting the term $\\dfrac{ \\mathrm{d}x }{ \\mathrm{d}t } = 2t$ from the parametric area integral, integrating only $y = 3t - t^2$ over the limits."
        },
        {
            "ans": "$18.5$",
            "feedback": "This arises from an arithmetic error when evaluating $2(27) = 54$, or a decimal subtraction slip."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Parametric Integration Steps",
        "content": "When calculating the area under a parametric curve, never integrate $y$ directly with respect to $t$. You must always multiply the $y$ function by $\\dfrac{ \\mathrm{d}x }{ \\mathrm{d}t }$ and rewrite the differential as $\\mathrm{d}x = \\dfrac{ \\mathrm{d}x }{ \\mathrm{d}t } \\mathrm{d}t$ before performing any integration."
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
    "question": "Prove by contradiction that, for every real number $x$ such that $0 < x < \\frac{ \\pi }{ 2 }$,\n$$\\tan x + \\cot x \\ge 2$$",
    "steps": [
        "We begin by assuming the negation of the statement we wish to prove.<br><br>Assume that there exists a real number $x$ in the interval $0 < x < \\frac{ \\pi }{ 2 }$ such that:<br>$$\\tan x + \\cot x < 2$$",
        "Since $0 < x < \\frac{ \\pi }{ 2 }$, both $\\tan x$ and $\\cot x$ are strictly positive. We can substitute $\\cot x = \\frac{ 1 }{ \\tan x }$ into our inequality:<br>$$\\tan x + \\frac{ 1 }{ \\tan x } < 2$$",
        "Since $\\tan x > 0$ for all $x$ in the given interval, we can multiply both sides of the inequality by $\\tan x$ without changing the direction of the inequality sign:<br>\\begin{aligned} \\tan^2 x + 1 &< 2\\tan x \\cr \\tan^2 x - 2\\tan x + 1 &< 0 \\end{aligned}",
        "Now, we can factorise the quadratic expression on the left-hand side:<br>$$(\\tan x - 1)^2 < 0$$",
        "This is a contradiction. The square of any real number must be greater than or equal to zero, meaning $(\\tan x - 1)^2 \\ge 0$ for all real $x$. Therefore, our original assumption must be false, and it follows that:<br>$$\\tan x + \\cot x \\ge 2$$<br>for all real $x$ such that $0 < x < \\frac{ \\pi }{ 2 }$."
    ],
    "pi_options": [
        {
            "ans": "$$\\tan x + \\cot x > 2$$",
            "feedback": "This is incorrect. When starting a proof by contradiction, we must assume the negation of the statement. The negation of $\\ge 2$ is strictly $< 2$, not $> 2$."
        },
        {
            "ans": "$$(\\tan x - 1)^2 > 0$$",
            "feedback": "This is incorrect. A squared term being greater than zero is mathematically true for most real numbers and does not provide the required negative square contradiction."
        },
        {
            "ans": "$$(\\tan x + 1)^2 < 0$$",
            "feedback": "This is incorrect. Expanding this expression yields $\\tan^2 x + 2\\tan x + 1 < 0$. Our inequality rearranged to $\\tan^2 x - 2\\tan x + 1 < 0$, which factorises to $(\\tan x - 1)^2 < 0$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Perfecting the Assumption",
        "content": "Always begin a proof by contradiction by writing down a clear, explicit assumption. For a statement of the form $P \\implies Q$, we assume $P$ and the negation of $Q$. In this case, the negation of $\\ge 2$ is strictly $< 2$. Do not forget to state why multiplying by $\\tan x$ is valid; we must state that $\\tan x > 0$ for $0 < x < \\frac{ \\pi }{ 2 }$ to ensure the inequality sign is not reversed."
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
    "question": "Prove by contradiction that $\\log_{ 2 } 5$ is an irrational number.",
    "steps": [
        "We begin by assuming the negation of the statement we wish to prove.<br><br>Assume that $\\log_{ 2 } 5$ is a rational number. By definition, a rational number can be written in the form:<br>$$\\log_{ 2 } 5 = \\frac{ p }{ q }$$<br>where $p$ and $q$ are positive integers with no common factors, and $q \\ne 0$.",
        "Using the definition of logarithms, we can rewrite the logarithmic equation in exponential form:<br>$$2^{ \\frac{ p }{ q } } = 5$$",
        "To eliminate the fraction in the exponent, we raise both sides of the equation to the power of $q$:<br>\\begin{aligned} \\left(2^{ \\frac{ p }{ q } }\\right)^{ q } &= 5^{ q } \\cr 2^{ p } &= 5^{ q } \\end{aligned}",
        "Let us analyze the parity of both sides of this equation:<br>Since $\\log_{ 2 } 5 > 0$, both $p$ and $q$ must be positive integers ($p \\ge 1$ and $q \\ge 1$).<br>Therefore, the left-hand side ($2^{ p }$) is a power of $2$ and must be an even integer.<br>The right-hand side ($5^{ q }$) is a power of $5$ and must be an odd integer.",
        "This is a contradiction. An even integer can never equal an odd integer ($2^{ p } \\ne 5^{ q }$ for any positive integers $p$ and $q$). Therefore, our original assumption that $\\log_{ 2 } 5$ is rational must be false. It follows that $\\log_{ 2 } 5$ is an irrational number."
    ],
    "pi_options": [
        {
            "ans": "$$2^{ q } = 5^{ p }$$",
            "feedback": "This is incorrect. When raising $2^{ \\frac{ p }{ q } } = 5$ to the power of $q$, we obtain $2^{ p } = 5^{ q }$. Reversing the powers of $p$ and $q$ is an algebraic error."
        },
        {
            "ans": "$$\\log_{ 2 } 5 = \\frac{ p }{ q } \\implies 5^{ p } = 2^{ q }$$",
            "feedback": "This is incorrect. The definition of logarithms states that $y = \\log_{ a } x \\implies a^{ y } = x$. Therefore, $\\log_{ 2 } 5 = \\frac{ p }{ q } \\implies 2^{ \\frac{ p }{ q } } = 5$, which leads to $2^{ p } = 5^{ q }$, not $5^{ p } = 2^{ q }$."
        },
        {
            "ans": "$$2^{ p } = 5^{ q } \\implies p = q = 0$$",
            "feedback": "This is incorrect. While $2^{ 0 } = 5^{ 0 } = 1$ is mathematically true, we established that $p$ and $q$ must be positive integers because $\\log_{ 2 } 5 > 0$. Therefore, $p$ and $q$ cannot be zero."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Fundamental Parity Arguments",
        "content": "When proving that a logarithm is irrational, the proof almost always reduces to an equation of the form $a^{ p } = b^{ q }$. By showing that one side is strictly even and the other is strictly odd (or by using prime factorisation uniqueness), you can construct an elegant and mathematically bulletproof contradiction."
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
    "question": "Prove by contradiction that, for all positive real numbers $a$ and $b$,\n$$\\frac{ a }{ b } + \\frac{ b }{ a } \\ge 2$$",
    "steps": [
        "We begin by assuming the negation of the statement we wish to prove.<br><br>Assume that there exist positive real numbers $a$ and $b$ such that:<br>$$\\frac{ a }{ b } + \\frac{ b }{ a } < 2$$",
        "Since $a$ and $b$ are positive, their product $ab$ is also strictly positive ($ab > 0$). We can multiply both sides of the inequality by $ab$ without reversing the inequality sign:<br>\\begin{aligned} ab \\left( \\frac{ a }{ b } + \\frac{ b }{ a } \\right) &< 2ab \\cr a^2 + b^2 &< 2ab \\end{aligned}",
        "Rearranging all terms to the left-hand side of the inequality gives:<br>$$a^2 - 2ab + b^2 < 0$$",
        "Now, we can factorise this expression as a perfect square:<br>$$(a - b)^2 < 0$$",
        "This is a contradiction. For any real numbers $a$ and $b$, the term $(a - b)^2$ must be greater than or equal to zero. It is impossible for a real square to be strictly negative. Therefore, our original assumption is false, and it follows that:<br>$$\\frac{ a }{ b } + \\frac{ b }{ a } \\ge 2$$<br>for all positive real numbers $a$ and $b$."
    ],
    "pi_options": [
        {
            "ans": "$$(a + b)^2 < 0$$",
            "feedback": "This is incorrect. Expanding this expression yields $a^2 + 2ab + b^2 < 0$. However, our inequality rearranged to $a^2 - 2ab + b^2 < 0$, which factorises to $(a - b)^2 < 0$."
        },
        {
            "ans": "$$a^2 + b^2 > 2ab$$",
            "feedback": "This is incorrect. This inequality is mathematically true for any distinct real numbers $a$ and $b$ (since $a^2 - 2ab + b^2 = (a-b)^2 > 0$), and therefore does not lead to a contradiction."
        },
        {
            "ans": "$$\\frac{ a }{ b } + \\frac{ b }{ a } > 2$$",
            "feedback": "This is incorrect. The negation of $\\ge 2$ is strictly $< 2$, not $> 2$. Assuming this would mean starting with an incorrect mathematical premise for a proof by contradiction."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Connection to AM-GM",
        "content": "This classic inequality is a special case of the Arithmetic Mean-Geometric Mean (AM-GM) inequality, which states that for any non-negative real numbers, $\\frac{ x + y }{ 2 } \\ge \\sqrt{ xy }$. By letting $x = \\frac{ a }{ b }$ and $y = \\frac{ b }{ a }$, we find $\\sqrt{ xy } = \\sqrt{ 1 } = 1$, which immediately yields $\\frac{ a }{ b } + \\frac{ b }{ a } \\ge 2$. Proof by contradiction is a standard way to verify this fundamental property."
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
        "We begin by assuming the negation of the conditional statement.<br><br>The negation of 'if $P$, then $Q$' is '$P$ and not $Q$'. Therefore, we assume that:<br>$n^2 - 4n + 7$ is even AND $n$ is even.",
        "Since $n$ is assumed to be an even integer, we can write it in the form:<br>$$n = 2k$$<br>where $k$ is an integer.",
        "We now substitute $n = 2k$ into our expression $n^2 - 4n + 7$:<br>\\begin{aligned} n^2 - 4n + 7 &= (2k)^2 - 4(2k) + 7 \\cr &= 4k^2 - 8k + 7 \\end{aligned}",
        "Let us rewrite this quadratic expression to investigate its parity:<br>\\begin{aligned} 4k^2 - 8k + 7 &= 4k^2 - 8k + 6 + 1 \\cr &= 2(2k^2 - 4k + 3) + 1 \\end{aligned}",
        "Since $k$ is an integer, the expression $2k^2 - 4k + 3$ is also an integer. Let this integer be $m$. Thus, we can write:<br>$$n^2 - 4n + 7 = 2m + 1$$<br>By definition, $2m + 1$ is an odd integer.",
        "This is a contradiction. We assumed that $n^2 - 4n + 7$ is even, but we have proven that it must be odd. Therefore, our original assumption is false, and it follows that if $n^2 - 4n + 7$ is even, $n$ must be odd."
    ],
    "pi_options": [
        {
            "ans": "$$n^2 - 4n + 7 = 2(2k^2 - 4k) + 7$$",
            "feedback": "This is not fully rigorous. To prove a number is odd, we must express it strictly in the standard algebraic form $2m + 1$, where $m$ is an integer. Simply having a $+ 7$ at the end does not immediately fit the standard definition until factorised as $2(2k^2 - 4k + 3) + 1$."
        },
        {
            "ans": "$$n = 2k + 1$$",
            "feedback": "This is incorrect. This represents the assumption that $n$ is odd. In a proof by contradiction for this statement, we must assume that $n^2 - 4n + 7$ is even and $n$ is NOT odd (meaning $n$ is even, which is $n = 2k$)."
        },
        {
            "ans": "$$n^2 - 4n + 7 = 4k^2 - 8k + 7$$ is even",
            "feedback": "This is incorrect. While $4k^2$ and $8k$ are multiples of $2$, the constant term $7$ is odd, making the sum of these terms odd. An even number plus an odd number is always odd."
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
    "question": "Prove by contradiction that there are no positive integers $m$ and $n$ such that\n$$m^2 - n^2 = 14$$",
    "steps": [
        "We begin by assuming the negation of the statement we wish to prove.<br><br>Assume that there exist positive integers $m$ and $n$ such that:<br>$$m^2 - n^2 = 14$$",
        "We can factorise the left-hand side of the equation using the difference of two squares:<br>$$(m - n)(m + n) = 14$$",
        "Since $m$ and $n$ are positive integers, both $(m - n)$ and $(m + n)$ must be integers. Furthermore, since $m > 0$ and $n > 0$, we know that $(m + n) > (m - n)$ and $(m + n) \\ge 2$. Thus, both factors must be positive integers.<br><br>The only positive factor pairs of $14$ are $(1, 14)$ and $(2, 7)$.",
        "Let us analyze each possible case to find integer values for $m$ and $n$:<br><br><strong>Case 1:</strong> $m - n = 1$ and $m + n = 14$<br>Adding these two equations gives:<br>\\begin{aligned} (m - n) + (m + n) &= 1 + 14 \\cr 2m &= 15 \\cr m &= 7.5 \\end{aligned}<br>This is a contradiction because $m$ must be an integer.<br><br><strong>Case 2:</strong> $m - n = 2$ and $m + n = 7$<br>Adding these two equations gives:<br>\\begin{aligned} (m - n) + (m + n) &= 2 + 7 \\cr 2m &= 9 \\cr m &= 4.5 \\end{aligned}<br>This is also a contradiction because $m$ must be an integer.",
        "Since all possible cases yield a contradiction, no such positive integers $m$ and $n$ can exist. Therefore, our original assumption is false, and there are no positive integers $m$ and $n$ such that $m^2 - n^2 = 14$."
    ],
    "pi_options": [
        {
            "ans": "$$m = 8, n = 5$$",
            "feedback": "This is incorrect. Substituting these values into the expression gives $8^2 - 5^2 = 64 - 25 = 39 \\ne 14$. No positive integer pairs can satisfy the equation."
        },
        {
            "ans": "$$m - n = 2$$ and $$m + n = 7 \\implies m = 5, n = 3$$",
            "feedback": "This is incorrect. If $m = 5$ and $n = 3$, then $m - n = 2$ but $m + n = 8 \\ne 7$. Solving the system $m - n = 2$ and $m + n = 7$ yields non-integer values $m = 4.5, n = 2.5$."
        },
        {
            "ans": "$$(m - n)(m + n) = 14 \\implies m^2 + n^2 = 14$$",
            "feedback": "This is incorrect. This expands the factored form incorrectly. The difference of two squares factorises as $(m-n)(m+n) = m^2 - n^2$. Expanding $(m-n)(m+n)$ does not yield $m^2 + n^2$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: The Parity of Difference of Squares",
        "content": "A beautiful shortcut to this problem relies on parity. Note that $(m - n) + (m + n) = 2m$, which is always even. This means the two factors $(m - n)$ and $(m + n)$ must have the same parity (either both even or both odd). If they are both odd, their product is odd (which $14$ is not). If they are both even, their product must be a multiple of $4$. Since $14$ is even but not a multiple of $4$, no integer solution can exist!"
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
    "question": "<strong>(a)</strong> Given that $f$ is a function:\n<strong>(i)</strong> State the condition for $f^{-1}$ to exist.\n<strong>(ii)</strong> Find $f^{-1}f(x)$.<br><strong>(b)</strong> The functions $g$ and $h$ are given by:\n$$\\begin{aligned} g(x) &= x^2 - 4 \\cr h(x) &= \\mathrm{e}^{ 2x } + 2 \\end{aligned}$$\n<strong>(i)</strong> Suggest a domain for $g$ such that $g^{-1}$ exists.\n<strong>(ii)</strong> Given that the domain of $h$ is $(-\\infty, \\infty)$, find an expression for $h^{-1}(x)$. Sketch, using the same axes, the graphs of $h(x)$ and $h^{-1}(x)$, indicating clearly any asymptotes and the points where the graphs cross the coordinate axes.\n<strong>(iii)</strong> Determine an expression for $gh(x)$ in its simplest form.",
    "steps": [
        "<strong>(a)(i)</strong> For the inverse function $f^{-1}$ to exist, the function $f$ must be <strong>one-to-one</strong> (or injective). This means that each output value in the range corresponds to exactly one input value in the domain.<br><br><strong>(a)(ii)</strong> By definition, applying a function and then its inverse (or vice versa) returns the original input: $$f^{-1}f(x) = x$$",
        "<strong>(b)(i)</strong> The quadratic function $g(x) = x^2 - 4$ is many-to-one over its natural domain. To make it one-to-one so that an inverse exists, we must restrict the domain to one side of its vertex $(0, -4)$. A standard restriction is:<br>$$x \\ge 0$$<br>(Note: $x \\le 0$ is also a valid alternative).",
        "<strong>(b)(ii)</strong> To find an expression for the inverse function $h^{-1}(x)$, we set $y = h(x)$ and rearrange to make $x$ the subject:<br>\\begin{aligned} y &= \\mathrm{e}^{ 2x } + 2 \\cr y - 2 &= \\mathrm{e}^{ 2x } \\cr 2x &= \\ln(y - 2) \\cr x &= 0.5\\ln(y - 2) \\end{aligned}<br>Swapping $x$ and $y$ gives:<br>$$h^{-1}(x) = 0.5\\ln(x - 2)$$<br>with a domain of $x > 2$.",
        "To sketch the graphs of $h(x)$ and $h^{-1}(x)$ on the same axes, we locate their key features:<br>• The exponential curve $h(x) = \\mathrm{e}^{ 2x } + 2$ has a horizontal asymptote at $y = 2$ and crosses the $y$-axis at $(0, 3)$.<br>• The logarithmic curve $h^{-1}(x) = 0.5\\ln(x - 2)$ has a vertical asymptote at $x = 2$ and crosses the $x$-axis at $(3, 0)$.<br>The curves are reflections of each other across the line of symmetry $y = x$.<br><br><img src='images/Pure/004716_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "<strong>(b)(iii)</strong> To find the composite function $gh(x)$, we substitute $h(x)$ into $g(x)$:<br>\\begin{aligned} gh(x) &= g(h(x)) \\cr &= (\\mathrm{e}^{ 2x } + 2)^2 - 4 \\cr &= \\mathrm{e}^{ 4x } + 4\\mathrm{e}^{ 2x } + 4 - 4 \\cr &= \\mathrm{e}^{ 4x } + 4\\mathrm{e}^{ 2x } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$h^{-1}(x) = \\ln(x - 2)^2$$ and $$gh(x) = \\mathrm{e}^{ 4x }$$",
            "feedback": "This is incorrect. When rearranging $2x = \\ln(y - 2)$, dividing by $2$ yields $0.5\\ln(y - 2)$, which is equivalent to $\\ln\\sqrt{ y - 2 }$, not $\\ln(y - 2)^2$. Additionally, when expanding $(\\mathrm{e}^{ 2x } + 2)^2$, you must include the middle term $4\\mathrm{e}^{ 2x }$ rather than just squaring the individual terms."
        },
        {
            "ans": "$$h^{-1}(x) = 0.5\\ln(x + 2)$$ and $$gh(x) = \\mathrm{e}^{ 4x } + 4\\mathrm{e}^{ 2x } + 8$$",
            "feedback": "This is incorrect. Rearranging $y = \\mathrm{e}^{ 2x } + 2$ gives $y - 2 = \\mathrm{e}^{ 2x }$, which leads to a minus sign inside the logarithm: $0.5\\ln(x - 2)$. Also, when evaluating $gh(x)$, the $+4$ from the expanded quadratic cancels with the $-4$ from the function $g(x)$, leaving no constant term."
        },
        {
            "ans": "$$h^{-1}(x) = 2\\ln(x - 2)$$ and $$gh(x) = \\mathrm{e}^{ 4x } + 4$$",
            "feedback": "This is incorrect. When isolating $x$ from $2x = \\ln(y - 2)$, you must divide by $2$ (which is a coefficient of $0.5$), not multiply by $2$. For the composite function, expanding the brackets yields intermediate terms that must be fully simplified."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Expanding Exponential Quadratics",
        "content": "A very common student slip is expanding $(\\mathrm{e}^{ 2x } + 2)^2$ as $\\mathrm{e}^{ 4x } + 4$. Remember that $(\\mathrm{e}^{ 2x } + 2)^2$ is a perfect square expansion of the form $(a+b)^2 = a^2 + 2ab + b^2$. Always write out the double brackets if you are prone to forgetting the middle term, which in this case is $2(\\mathrm{e}^{ 2x })(2) = 4\\mathrm{e}^{ 2x }$."
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
    "question": "<strong>(a)</strong> Explain why the function $f(x) = x^2 - 6x + 9$ with domain $(-\\infty, \\infty)$ does not have an inverse.<br><strong>(b)</strong> The functions $g$ and $h$ are defined by:\n$$\\begin{aligned} g(x) &= \\frac{ x + 3 }{ x - 3 } \\quad \\text{for } x \\ne 3 \\cr h(x) &= x^2 - 6x + 14 \\end{aligned}$$\n<strong>(i)</strong> Suggest a domain of the form $x \\ge k$ for $h$ such that $h^{-1}$ exists.\n<strong>(ii)</strong> Find an expression for $g^{-1}(x)$. Sketch, using the same axes, the graphs of $y = g(x)$ and $y = g^{-1}(x)$, showing clearly their vertical and horizontal asymptotes and any points where the graphs cross the coordinate axes.\n<strong>(iii)</strong> Find an expression for the composite function $hg(x)$ for $x \\ne 3$.",
    "steps": [
        "<strong>(a)</strong> By factorising the expression, we can rewrite the function as:<br>$$f(x) = (x - 3)^2$$<br>This represents a parabola with its vertex at $x = 3$. Over the unrestricted domain $(-\\infty, \\infty)$, the function is <strong>many-to-one</strong> (for example, $f(2) = f(4) = 1$). Because an inverse function only exists for one-to-one functions, $f$ does not have an inverse.",
        "<strong>(b)(i)</strong> We can complete the square for $h(x)$ to find its vertex form:<br>\\begin{aligned} h(x) &= x^2 - 6x + 14 \\cr &= (x - 3)^2 - 9 + 14 \\cr &= (x - 3)^2 + 5 \\end{aligned}<br>The vertex is at $(3, 5)$. To restrict the domain of the quadratic function so it becomes one-to-one, we must start at the vertex. Thus, for a domain of the form $x \\ge k$, we choose:<br>$$k = 3$$",
        "<strong>(b)(ii)</strong> To find $g^{-1}(x)$, we set $y = g(x)$ and rearrange to make $x$ the subject:<br>\\begin{aligned} y &= \\frac{ x + 3 }{ x - 3 } \\cr y(x - 3) &= x + 3 \\cr xy - 3y &= x + 3 \\cr xy - x &= 3y + 3 \\cr x(y - 1) &= 3(y + 1) \\cr x &= \\frac{ 3(y + 1) }{ y - 1 } \\end{aligned}<br>Swapping $x$ and $y$ gives:<br>$$g^{-1}(x) = \\frac{ 3(x + 1) }{ x - 1 }$$<br>(or $\\frac{ 3x + 3 }{ x - 1 }$) for $x \\ne 1$.",
        "To sketch both curves, we identify their key features:<br>• $g(x) = \\frac{ x + 3 }{ x - 3 }$ has a vertical asymptote at $x = 3$ and a horizontal asymptote at $y = 1$. Its intercepts are $(-3, 0)$ and $(0, -1)$.<br>• $g^{-1}(x) = \\frac{ 3x + 3 }{ x - 1 }$ has a vertical asymptote at $x = 1$ and a horizontal asymptote at $y = 3$. Its intercepts are $(-1, 0)$ and $(0, -3)$.<br>Both curves are perfectly symmetric across the line $y = x$.<br><br><img src='images/Pure/004717_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "<strong>(b)(iii)</strong> To find $hg(x)$, we substitute $g(x)$ into $h(x)$:<br>\\begin{aligned} hg(x) &= h(g(x)) \\cr &= \\left(\\frac{ x + 3 }{ x - 3 }\\right)^2 - 6\\left(\\frac{ x + 3 }{ x - 3 }\\right) + 14 \\cr &= \\frac{ (x + 3)^2 - 6(x + 3)(x - 3) + 14(x - 3)^2 }{ (x - 3)^2 } \\cr &= \\frac{ (x^2 + 6x + 9) - 6(x^2 - 9) + 14(x^2 - 6x + 9) }{ (x - 3)^2 } \\cr &= \\frac{ x^2 + 6x + 9 - 6x^2 + 54 + 14x^2 - 84x + 126 }{ (x - 3)^2 } \\cr &= \\frac{ 9x^2 - 78x + 189 }{ (x - 3)^2 } \\cr &= \\frac{ 3(3x^2 - 26x + 63) }{ (x - 3)^2 } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$g^{-1}(x) = \\frac{ 3x - 3 }{ x + 1 }$$ and $$hg(x) = \\frac{ 9x^2 - 18x + 189 }{ (x - 3)^2 }$$",
            "feedback": "This is incorrect. When factorising $xy - x = 3y + 3$, you get $x(y-1) = 3(y+1)$, which leads to a minus sign in the denominator of the inverse: $x-1$, not $x+1$. For the composite function expansion, ensure you expand $-6(x+3)(x-3)$ as $-6(x^2 - 9) = -6x^2 + 54$ and distribute all negative signs carefully."
        },
        {
            "ans": "$$g^{-1}(x) = \\frac{ x + 3 }{ 3x - 1 }$$ and $$hg(x) = \\frac{ 9x^2 - 78x + 144 }{ (x - 3)^2 }$$",
            "feedback": "This is incorrect. Reorganising the algebraic fraction requires grouping the $x$ terms on one side and $y$ terms on the other. It appears there was a division error in finding the inverse. For $hg(x)$, ensure that $14(x-3)^2$ is correctly expanded as $14x^2 - 84x + 126$ and added to the numerator."
        },
        {
            "ans": "$$g^{-1}(x) = \\frac{ 3x + 3 }{ x - 1 }$$ and $$hg(x) = \\frac{ 9x^2 - 6x + 189 }{ (x - 3)^2 }$$",
            "feedback": "This is incorrect. While the expression for $g^{-1}(x)$ is correct, the algebraic simplification of $hg(x)$ contains an error in collecting the $x$ terms. The $x$ terms are $+6x$ (from $(x+3)^2$) and $-84x$ (from $14(x-3)^2$), which combine to $-78x$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Symmetry of Inverse Asymptotes",
        "content": "Since an inverse function $f^{-1}(x)$ is a reflection of $f(x)$ across the line $y = x$, all coordinates and features swap places. This means if a rational function has a vertical asymptote at $x = a$ and a horizontal asymptote at $y = b$, its inverse is guaranteed to have a vertical asymptote at $x = b$ and a horizontal asymptote at $y = a$. Spotting this symmetry is an excellent way to self-audit your sketch!"
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
    "question": "<strong>(a)</strong> Given that $f(x) = \\ln(x - 2)$ for $x > 2$:\n<strong>(i)</strong> Write down the range of $f$.\n<strong>(ii)</strong> Find an expression for $f^{-1}(x)$, stating its domain.<br><strong>(b)</strong> The functions $g$ and $h$ are defined by:\n$$\\begin{aligned} g(x) &= 3x - 2 \\quad \\text{for } x \\in \\mathbb{R} \\cr h(x) &= \\ln(x + 1) \\quad \\text{for } x > -1 \\end{aligned}$$\n<strong>(i)</strong> Sketch, using the same axes, the graphs of $y = h(x)$ and $y = h^{-1}(x)$. Indicate clearly any asymptotes and axis intercepts.\n<strong>(ii)</strong> Find an expression for the composite function $gh(x)$, stating its domain and range.\n<strong>(iii)</strong> Solve the equation $gh(x) = 4$.",
    "steps": [
        "<strong>(a)(i)</strong> The natural logarithmic function $\\ln(X)$ takes all real values as its argument increases. Thus, the range of $f(x) = \\ln(x - 2)$ is:<br>$$f(x) \\in \\mathbb{R}$$",
        "<strong>(a)(ii)</strong> To find $f^{-1}(x)$, we set $y = \\ln(x - 2)$ and make $x$ the subject:<br>\\begin{aligned} y &= \\ln(x - 2) \\cr \\mathrm{e}^{ y } &= x - 2 \\cr x &= \\mathrm{e}^{ y } + 2 \\end{aligned}<br>Swapping variables gives:<br>$$f^{-1}(x) = \\mathrm{e}^{ x } + 2$$<br>The domain of $f^{-1}$ is the range of $f$, which is:<br>$$x \\in \\mathbb{R}$$",
        "<strong>(b)(i)</strong> Key features for the sketches:<br>• $h(x) = \\ln(x + 1)$ has a vertical asymptote at $x = -1$ and crosses the coordinate axes at the origin $(0, 0)$.<br>• $h^{-1}(x) = \\mathrm{e}^{ x } - 1$ has a horizontal asymptote at $y = -1$ and also crosses at the origin $(0, 0)$.<br>These curves are symmetrical reflections across the diagonal $y = x$.<br><br><img src='images/Pure/004718_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "<strong>(b)(ii)</strong> To find the composite function $gh(x)$, we substitute $h(x)$ into $g(x)$:<br>$$gh(x) = 3\\ln(x + 1) - 2$$<br>• The domain of $gh$ is the same as the domain of $h$, which is:<br>$$x > -1$$<br>• Since the range of $h$ is $\\mathbb{R}$ and $g$ is a linear function defined on all reals, the range of $gh$ is:<br>$$gh(x) \\in \\mathbb{R}$$",
        "<strong>(b)(iii)</strong> To solve $gh(x) = 4$, we set our composite expression equal to $4$:<br>\\begin{aligned} 3\\ln(x + 1) - 2 &= 4 \\cr 3\\ln(x + 1) &= 6 \\cr \\ln(x + 1) &= 2 \\cr x + 1 &= \\mathrm{e}^{ 2 } \\cr x &= \\mathrm{e}^{ 2 } - 1 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$f^{-1}(x) = \\mathrm{e}^{ x - 2 }$$ and $$x = \\mathrm{e}^{ 2 }$$",
            "feedback": "This is incorrect. When raising $y = \\ln(x-2)$ to the base of $\\mathrm{e}$, you get $\\mathrm{e}^{ y } = x - 2$, which means $x = \\mathrm{e}^{ y } + 2$, not $\\mathrm{e}^{ y-2 }$. In part (b)(iii), when solving $x+1 = \\mathrm{e}^{ 2 }$, you must subtract $1$ from both sides, yielding $\\mathrm{e}^{ 2 } - 1$."
        },
        {
            "ans": "$$f^{-1}(x) = \\mathrm{e}^{ x } - 2$$ and $$x = \\mathrm{e}^{ 6 } - 1$$",
            "feedback": "This is incorrect. Isolating $x$ from $\\mathrm{e}^{ y } = x - 2$ requires adding $2$ to both sides, which yields $\\mathrm{e}^{ x } + 2$. Additionally, when solving $3\\ln(x+1) = 6$, you must divide by $3$ first to get $\\ln(x+1) = 2$ before taking exponentials, rather than exponentiating immediately."
        },
        {
            "ans": "$$f^{-1}(x) = \\ln(x + 2)$$ and $$x = \\mathrm{e}^{ 2 } + 1$$",
            "feedback": "This is incorrect. The inverse of a natural log function is an exponential function, not another log. For part (b)(iii), the final step of $x+1 = \\mathrm{e}^{ 2 }$ requires subtracting $1$ from both sides, not adding."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Composite Domain and Range Rules",
        "content": "Always remember the golden rules for composite functions $gh(x)$:\n1. The <strong>domain</strong> of $gh$ is strictly a subset of the domain of the inner function, $h(x)$.\n2. The <strong>range</strong> of $gh$ is found by evaluating the outer function, $g(x)$, over the active range of the inner function, $h(x)$."
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
    "question": "<strong>(a)</strong> State why a domain restriction is necessary for the function $f(x) = \\sin x$ to have an inverse, and write down the standard restricted domain used to define $f^{-1}(x) = \\arcsin x$.<br><strong>(b)</strong> The functions $g$ and $h$ are defined by:\n$$\\begin{aligned} g(x) &= 2x^2 + 1 \\quad \\text{for } x \\in \\mathbb{R} \\cr h(x) &= \\cos x \\quad \\text{for } 0 \\le x \\le \\pi \\end{aligned}$$\n<strong>(i)</strong> Find an expression for $h^{-1}(x)$, stating its domain and range. Sketch, using the same axes, the graphs of $y = h(x)$ and $y = h^{-1}(x)$.\n<strong>(ii)</strong> Determine an expression for the composite function $gh(x)$, expressing your answer in terms of $\\cos 2x$.\n<strong>(iii)</strong> Find the range of the composite function $gh$.",
    "steps": [
        "<strong>(a)</strong> The function $f(x) = \\sin x$ is periodic and therefore <strong>many-to-one</strong> (for example, $\\sin(0) = \\sin(\\pi) = 0$). An inverse function only exists if a function is one-to-one. To define $\\arcsin x$, the standard restricted domain used is:<br>$$-\\frac{ \\pi }{ 2 } \\le x \\le \\frac{ \\pi }{ 2 }$$",
        "<strong>(b)(i)</strong> The inverse of the restricted cosine function $h(x) = \\cos x$ is:<br>$$h^{-1}(x) = \\arccos x$$<br>• The domain of $h^{-1}$ is the range of $h$, which is:<br>$$-1 \\le x \\le 1$$<br>• The range of $h^{-1}$ is the domain of $h$, which is:<br>$$0 \\le y \\le \\pi$$<br>The curves of $h(x)$ and $h^{-1}(x)$ are shown below:<br><br><img src='images/Pure/004719_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "<strong>(b)(ii)</strong> To find $gh(x)$, we substitute $h(x)$ into $g(x)$:<br>$$gh(x) = 2\\cos^2 x + 1$$<br>We can rewrite this in terms of the double-angle identity for cosine, $\\cos 2x = 2\\cos^2 x - 1$, which gives $2\\cos^2 x = \\cos 2x + 1$. Substituting this in:<br>\\begin{aligned} gh(x) &= (\\cos 2x + 1) + 1 \\cr &= \\cos 2x + 2 \\end{aligned}",
        "<strong>(b)(iii)</strong> Since the domain of $h$ is $0 \\le x \\le \\pi$, the argument of our double-angle expression, $2x$, spans $0 \\le 2x \\le 2\\pi$. Over a full period, the range of the cosine function is:<br>$$-1 \\le \\cos 2x \\le 1$$<br>Adding $2$ to all parts of the inequality gives:<br>$$1 \\le \\cos 2x + 2 \\le 3$$<br>Thus, the range of the composite function $gh$ is:<br>$$1 \\le gh(x) \\le 3$$"
    ],
    "pi_options": [
        {
            "ans": "$$gh(x) = \\cos 2x + 1$$ and Range: $$[0, 2]$$",
            "feedback": "This is incorrect. The double-angle identity is $2\\cos^2 x = \\cos 2x + 1$. Since $gh(x) = 2\\cos^2 x + 1$, substituting the identity gives $(\\cos 2x + 1) + 1 = \\cos 2x + 2$. It looks like the extra $+1$ in the function definition was omitted."
        },
        {
            "ans": "$$gh(x) = \\cos 2x + 3$$ and Range: $$[2, 4]$$",
            "feedback": "This is incorrect. Applying the identity $2\\cos^2 x = \\cos 2x + 1$ directly leads to $gh(x) = \\cos 2x + 2$. An error in double-angle substitution led to an incorrect constant term, shifting the range upwards."
        },
        {
            "ans": "$$gh(x) = \\cos 2x$$ and Range: $$[-1, 1]$$",
            "feedback": "This is incorrect. The expression has not been substituted using the correct double-angle identity. Substituting $2\\cos^2 x = \\cos 2x + 1$ is required to simplify $gh(x)$ down to a single trigonometric term."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Range of Periodic Composites",
        "content": "When finding the range of a composite function like $gh(x) = \\cos 2x + 2$, always check the active domain of the input. Because $0 \\le x \\le \\pi$, the argument $2x$ covers the interval $[0, 2\\pi]$. This is a full period, meaning $\\cos 2x$ will achieve its absolute maximum of $1$ and absolute minimum of $-1$. Hence, the range is fully $[1, 3]$."
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
    "question": "<strong>(a)</strong> A function $f$ is defined by $f(x) = \\sqrt{ x - 3 } + 2$ for $x \\ge 3$.\n<strong>(i)</strong> State the range of $f$.\n<strong>(ii)</strong> Find an expression for $f^{-1}(x)$, stating its domain.<br><strong>(b)</strong> The functions $g$ and $h$ are defined by:\n$$\\begin{aligned} g(x) &= 2x - 5 \\quad \\text{for } x \\in \\mathbb{R} \\cr h(x) &= \\sqrt{ 2x + 1 } \\quad \\text{for } x \\ge -0.5 \\end{aligned}$$\n<strong>(i)</strong> Sketch, using the same axes, the graphs of $y = h(x)$ and $y = h^{-1}(x)$. Indicate clearly the coordinates of any points of intersection with the axes and any end-points.\n<strong>(ii)</strong> Determine an expression for the composite function $hg(x)$, and find the domain of $hg$.\n<strong>(iii)</strong> Solve the equation $hg(x) = g(x)$.",
    "steps": [
        "<strong>(a)(i)</strong> For the domain $x \\ge 3$, the square root term $\\sqrt{ x - 3 }$ is always greater than or equal to $0$. Therefore, $f(x) = \\sqrt{ x - 3 } + 2 \\ge 2$. The range is:<br>$$f(x) \\ge 2$$",
        "<strong>(a)(ii)</strong> To find $f^{-1}(x)$, we set $y = \\sqrt{ x - 3 } + 2$ and make $x$ the subject:<br>\\begin{aligned} y &= \\sqrt{ x - 3 } + 2 \\cr y - 2 &= \\sqrt{ x - 3 } \\cr (y - 2)^2 &= x - 3 \\cr x &= (y - 2)^2 + 3 \\end{aligned}<br>Swapping variables gives:<br>$$f^{-1}(x) = (x - 2)^2 + 3$$<br>The domain of $f^{-1}$ is the range of $f$, which is:<br>$$x \\ge 2$$",
        "<strong>(b)(i)</strong> Key features for the sketches:<br>• $h(x) = \\sqrt{ 2x + 1 }$ starts at its end-point $(-0.5, 0)$ and crosses the $y$-axis at $(0, 1)$.<br>• $h^{-1}(x) = 0.5(x^2 - 1)$ for $x \\ge 0$ starts at its end-point $(0, -0.5)$ and crosses the $x$-axis at $(1, 0)$.<br>Both curves intersect each other precisely on the line $y = x$ at the point $(1+\\sqrt{ 2 }, 1+\\sqrt{ 2 })$.<br><br><img src='images/Pure/004720_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "<strong>(b)(ii)</strong> To find the composite function $hg(x)$, we substitute $g(x)$ into $h(x)$:<br>\\begin{aligned} hg(x) &= \\sqrt{ 2(2x - 5) + 1 } \\cr &= \\sqrt{ 4x - 9 } \\end{aligned}<br>For the square root to be defined, the term inside must be non-negative:<br>$$4x - 9 \\ge 0 \\implies x \\ge 2.25$$<br>Thus, the domain of $hg$ is:<br>$$x \\ge 2.25$$",
        "<strong>(b)(iii)</strong> To solve $hg(x) = g(x)$, we set the two expressions equal:<br>$$\\sqrt{ 4x - 9 } = 2x - 5$$<br>Squaring both sides gives:<br>\\begin{aligned} 4x - 9 &= (2x - 5)^2 \\cr 4x - 9 &= 4x^2 - 20x + 25 \\cr 4x^2 - 24x + 34 &= 0 \\cr 2x^2 - 12x + 17 &= 0 \\end{aligned}<br>Applying the quadratic formula:<br>$$x = \\frac{ 12 \\pm \\sqrt{ (-12)^2 - 4(2)(17) } }{ 2(2) } = \\frac{ 12 \\pm \\sqrt{ 8 } }{ 4 } = 3 \\pm \\frac{ \\sqrt{ 2 } }{ 2 }$$<br>Since $g(x) = 2x - 5$ must be non-negative for the square root equality to hold (as $\\sqrt{ 4x - 9 } \\ge 0$), we require $2x - 5 \\ge 0 \\implies x \\ge 2.5$.<br>• For $3 + \\frac{ \\sqrt{ 2 } }{ 2 } \\approx 3.71 \\ge 2.5$ (Valid)<br>• For $3 - \\frac{ \\sqrt{ 2 } }{ 2 } \\approx 2.29 < 2.5$ (Invalid, yields a negative value for the RHS).<br>Thus, the only valid solution is:<br>$$x = 3 + \\frac{ \\sqrt{ 2 } }{ 2 }$$"
    ],
    "pi_options": [
        {
            "ans": "$$x = 3 - \\frac{ \\sqrt{ 2 } }{ 2 }$$ and $$x = 3 + \\frac{ \\sqrt{ 2 } }{ 2 }$$",
            "feedback": "This is incorrect. While both are algebraic roots of the quadratic equation $2x^2 - 12x + 17 = 0$, you must verify them in the original non-linear equation. Since a principal square root is non-negative, the right-hand side $2x-5$ must be $\\ge 0 \\implies x \\ge 2.5$. The root $3 - 0.5\\sqrt{ 2 } \\approx 2.29$ fails this restriction and is extraneous."
        },
        {
            "ans": "$$x = \\frac{ 12 \\pm \\sqrt{ 10 } }{ 4 }$$",
            "feedback": "This is incorrect. When evaluating the discriminant $\\Delta = b^2 - 4ac$ for the quadratic $2x^2 - 12x + 17 = 0$, we have $(-12)^2 - 4(2)(17) = 144 - 136 = 8$. Simplifying $\\sqrt{ 8 }$ yields $2\\sqrt{ 2 }$, which leads to $3 \\pm 0.5\\sqrt{ 2 }$. It seems an arithmetic slip occurred in the discriminant calculation."
        },
        {
            "ans": "$$x = 3 - \\frac{ \\sqrt{ 2 } }{ 2 }$$",
            "feedback": "This is incorrect. This is the extraneous root which must be rejected because substituting it back into the original equation results in a negative value on the right-hand side, which is impossible for a real principal square root."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Extraneous Roots in Radical Equations",
        "content": "Whenever you solve an equation by squaring both sides (such as $\\sqrt{ f(x) } = g(x)$), you are introducing the possibility of **extraneous roots**. Squaring eliminates the sign of the expression, meaning that solutions to $-\\sqrt{ f(x) } = g(x)$ will also appear. Always substitute your algebraic answers back into the original un-squared equation to verify their validity."
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
    "question": "<strong>(a)</strong> Express $5\\sin\\theta - 12\\cos\\theta$ in the form $R\\sin(\\theta - \\alpha)$, where $R$ and $\\alpha$ are constants with $R > 0$ and $0^\\circ < \\alpha < 90^\\circ$.<br><strong>(b)</strong> Find all values of $\\theta$ in the range $0^\\circ < \\theta < 360^\\circ$ satisfying:\n$$5\\sin\\theta - 12\\cos\\theta - 4 = 0$$<br><strong>(c)</strong> Determine the greatest value and the least value of the expression:\n$$\\frac{ 1 }{ 5\\sin\\theta - 12\\cos\\theta + 18 }$$",
    "steps": [
        "<strong>(a)</strong> We expand the harmonic form $R\\sin(\\theta - \\alpha)$ using the subtraction identity for sine:<br>$$R\\sin(\\theta - \\alpha) = R\\sin\\theta\\cos\\alpha - R\\cos\\theta\\sin\\alpha$$<br>Comparing this to our expression $5\\sin\\theta - 12\\cos\\theta$, we equate the coefficients of $\\sin\\theta$ and $\\cos\\theta$:<br>\\begin{aligned} R\\cos\\alpha &= 5 \\cr R\\sin\\alpha &= 12 \\end{aligned}",
        "To find $R$, we square and add these equations:<br>\\begin{aligned} R^2\\cos^2\\alpha + R^2\\sin^2\\alpha &= 5^2 + 12^2 \\cr R^2(\\cos^2\\alpha + \\sin^2\\alpha) &= 25 + 144 \\cr R^2 &= 169 \\cr R &= 13 \\end{aligned}<br>To find $\\alpha$, we divide the sine equation by the cosine equation:<br>\\begin{aligned} \\frac{ R\\sin\\alpha }{ R\\cos\\alpha } &= \\frac{ 12 }{ 5 } \\cr \\tan\\alpha &= 2.4 \\cr \\alpha &= \\tan^{-1}(2.4) \\approx 67.38^\\circ \\end{aligned}<br>Thus, the expression can be written as:<br>$$13\\sin(\\theta - 67.38^\\circ)$$",
        "<strong>(b)</strong> To solve $5\\sin\\theta - 12\\cos\\theta - 4 = 0$, we substitute our harmonic form into the equation:<br>\\begin{aligned} 13\\sin(\\theta - 67.38^\\circ) - 4 &= 0 \\cr 13\\sin(\\theta - 67.38^\\circ) &= 4 \\cr \\sin(\\theta - 67.38^\\circ) &= \\frac{ 4 }{ 13 } \\end{aligned}",
        "Finding the primary and secondary angles for $\\arcsin\\left(\\frac{ 4 }{ 13 }\\right)$ in the standard range:<br>\\begin{aligned} \\theta - 67.38^\\circ &\\approx 17.92^\\circ \\cr \\theta - 67.38^\\circ &\\approx 180^\\circ - 17.92^\\circ = 162.08^\\circ \\end{aligned}<br>Solving for $\\theta$ by adding $67.38^\\circ$ to both solutions:<br>\\begin{aligned} \\theta_1 &= 17.92^\\circ + 67.38^\\circ = 85.3^\\circ \\cr \\theta_2 &= 162.08^\\circ + 67.38^\\circ = 229.5^\\circ \\end{aligned}",
        "<strong>(c)</strong> To determine the extreme values of the expression, we substitute our $R$-formula expression into the denominator:<br>$$\\frac{ 1 }{ 13\\sin(\\theta - 67.38^\\circ) + 18 }$$<br>Since $-1 \\le \\sin(\\theta - 67.38^\\circ) \\le 1$:<br>• The <strong>greatest value</strong> occurs when the denominator is minimised (i.e., when $\\sin(\\theta - 67.38^\\circ) = -1$):<br>$$\\frac{ 1 }{ 13(-1) + 18 } = \\frac{ 1 }{ 5 } = 0.2$$<br>• The <strong>least value</strong> occurs when the denominator is maximised (i.e., when $\\sin(\\theta - 67.38^\\circ) = 1$):<br>$$\\frac{ 1 }{ 13(1) + 18 } = \\frac{ 1 }{ 31 } \\approx 0.0323$$"
    ],
    "pi_options": [
        {
            "ans": "$$13\\sin(\\theta - 22.62^\\circ)$$ and Greatest: $$1.0$$, Least: $$0.1$$",
            "feedback": "This is incorrect. When dividing the sine equation by the cosine equation, we get $\\tan\\alpha = 12/5 = 2.4$, which yields $\\alpha \\approx 67.38^\\circ$. It appears that the fraction was inverted, leading to $\\tan\\alpha = 5/12 \\approx 22.62^\\circ$. Additionally, the extreme values are calculated by substituting the limits of the sine function ($-1$ and $1$) into the denominator."
        },
        {
            "ans": "$$13\\sin(\\theta - 67.38^\\circ)$$ and Greatest: $$0.0323$$, Least: $$0.2$$",
            "feedback": "This is incorrect. While the expression and the numerical values are correct, the classifications have been reversed. A fraction is maximised (greatest value) when its denominator is minimised, and minimised (least value) when its denominator is maximised. Therefore, $0.2$ is the greatest value and $0.0323$ is the least value."
        },
        {
            "ans": "$$13\\sin(\\theta + 67.38^\\circ)$$ and Greatest: $$0.2$$, Least: $$-0.2$$",
            "feedback": "This is incorrect. The given expression is of the form $5\\sin\\theta - 12\\cos\\theta$, which must be expressed as $R\\sin(\\theta - \\alpha)$, not $R\\sin(\\theta + \\alpha)$. For part (c), because the denominator has a constant $+18$, the denominator can never be negative or zero, so the least value is positive, not negative."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Maximising Fractions",
        "content": "A common mistake when finding extreme values of algebraic fractions is to assume that the greatest value of the fraction occurs when the variable term is at its maximum. In fact, to find the <strong>greatest</strong> value of a fraction with a positive constant numerator, you must <strong>minimise</strong> the denominator. Conversely, to find the <strong>least</strong> value, you must <strong>maximise</strong> the denominator."
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
    "question": "<strong>(a)</strong> Express $24\\cos\\theta + 7\\sin\\theta$ in the form $R\\cos(\\theta - \\alpha)$, where $R$ and $\\alpha$ are constants with $R > 0$ and $0^\\circ < \\alpha < 90^\\circ$.<br><strong>(b)</strong> Find all values of $\\theta$ in the range $0^\\circ < \\theta < 360^\\circ$ satisfying:\n$$24\\cos\\theta + 7\\sin\\theta = 15$$<br><strong>(c)</strong> Determine the greatest value and the least value of the expression:\n$$\\frac{ 6 }{ 24\\cos\\theta + 7\\sin\\theta + 31 }$$",
    "steps": [
        "<strong>(a)</strong> We expand the harmonic form $R\\cos(\\theta - \\alpha)$ using the subtraction identity for cosine:<br>$$R\\cos(\\theta - \\alpha) = R\\cos\\theta\\cos\\alpha + R\\sin\\theta\\sin\\alpha$$<br>Comparing this to our expression $24\\cos\\theta + 7\\sin\\theta$, we equate the coefficients of $\\cos\\theta$ and $\\sin\\theta$:<br>\\begin{aligned} R\\cos\\alpha &= 24 \\cr R\\sin\\alpha &= 7 \\end{aligned}",
        "To find $R$, we square and add these equations:<br>\\begin{aligned} R^2\\cos^2\\alpha + R^2\\sin^2\\alpha &= 24^2 + 7^2 \\cr R^2(\\cos^2\\alpha + \\sin^2\\alpha) &= 576 + 49 \\cr R^2 &= 625 \\cr R &= 25 \\end{aligned}<br>To find $\\alpha$, we divide the sine equation by the cosine equation:<br>\\begin{aligned} \\frac{ R\\sin\\alpha }{ R\\cos\\alpha } &= \\frac{ 7 }{ 24 } \\cr \\tan\\alpha &= \\frac{ 7 }{ 24 } \\cr \\alpha &= \\tan^{-1}\\left(\\frac{ 7 }{ 24 }\\right) \\approx 16.26^\\circ \\end{aligned}<br>Thus, the expression can be written as:<br>$$25\\cos(\\theta - 16.26^\\circ)$$",
        "<strong>(b)</strong> To solve $24\\cos\\theta + 7\\sin\\theta = 15$, we substitute our harmonic form into the equation:<br>\\begin{aligned} 25\\cos(\\theta - 16.26^\\circ) &= 15 \\cr \\cos(\\theta - 16.26^\\circ) &= 0.6 \\end{aligned}",
        "Finding the positive and negative angles for $\\arccos(0.6)$ in the standard range:<br>\\begin{aligned} \\theta - 16.26^\\circ &\\approx 53.13^\\circ \\cr \\theta - 16.26^\\circ &\\approx -53.13^\\circ \\end{aligned}<br>Solving for $\\theta$ by adding $16.26^\\circ$ to both solutions:<br>\\begin{aligned} \\theta_1 &= 53.13^\\circ + 16.26^\\circ = 69.4^\\circ \\cr \\theta_2 &= -53.13^\\circ + 16.26^\\circ = -36.87^\\circ \\end{aligned}<br>Since $\\theta_2$ is negative, we add $360^\\circ$ to find the coterminal angle in the interval $0^\\circ < \\theta < 360^\\circ$:<br>$$\\theta_2 = -36.87^\\circ + 360^\\circ = 323.1^\\circ$$",
        "<strong>(c)</strong> To determine the extreme values of the expression, we substitute our $R$-formula expression into the denominator:<br>$$\\frac{ 6 }{ 25\\cos(\\theta - 16.26^\\circ) + 31 }$$<br>Since $-1 \\le \\cos(\\theta - 16.26^\\circ) \\le 1$:<br>• The <strong>greatest value</strong> occurs when the denominator is minimised (i.e., when $\\cos(\\theta - 16.26^\\circ) = -1$):<br>$$\\frac{ 6 }{ 25(-1) + 31 } = \\frac{ 6 }{ 6 } = 1$$<br>• The <strong>least value</strong> occurs when the denominator is maximised (i.e., when $\\cos(\\theta - 16.26^\\circ) = 1$):<br>$$\\frac{ 6 }{ 25(1) + 31 } = \\frac{ 6 }{ 56 } = \\frac{ 3 }{ 28 } \\approx 0.107$$"
    ],
    "pi_options": [
        {
            "ans": "$$25\\cos(\\theta + 16.26^\\circ)$$ and Greatest: $$1$$, Least: $$0.107$$",
            "feedback": "This is incorrect. When we expand $R\\cos(\\theta - \\alpha)$, the identity is $R\\cos\\theta\\cos\\alpha + R\\sin\\theta\\sin\\alpha$. Because our original expression is $24\\cos\\theta + 7\\sin\\theta$ (which has a positive sign), it matches the subtraction form $R\\cos(\\theta - \\alpha)$, not the addition form $R\\cos(\\theta + \\alpha)$."
        },
        {
            "ans": "$$25\\cos(\\theta - 16.26^\\circ)$$ and Greatest: $$6$$, Least: $$0.194$$",
            "feedback": "This is incorrect. The extreme values are calculated by evaluating the fraction at the limits of the cosine function. It appears that the denominator calculation for the greatest value used $31 - 25 = 6$, but the numerator of $6$ was divided incorrectly or the subtraction in the denominator was missed."
        },
        {
            "ans": "$$25\\cos(\\theta - 16.26^\\circ)$$ and $$\\theta = 69.4^\\circ, 122.3^\\circ$$",
            "feedback": "This is incorrect. While the expression and the first solution for $\\theta$ are correct, the secondary solution for a cosine equation is found using $360^\\circ - \\text{angle}$, not $180^\\circ - \\text{angle}$ (which is used for sine equations). Adding $16.26^\\circ$ to $-53.13^\\circ$ gives $-36.87^\\circ$, which translates to $323.1^\\circ$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Cosine Secondary Angles",
        "content": "When solving cosine equations of the form $\\cos(X) = k$, the secondary angle is found using $360^\\circ - \\text{primary angle}$ or simply using $\\pm \\text{primary angle}$. A very common student slip is to use the sine rule ($180^\\circ - \\text{primary angle}$) by mistake, which will lead to incorrect solutions."
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
    "question": "<strong>(a)</strong> Express $\\sqrt{ 3 }\\sin\\theta + \\cos\\theta$ in the form $R\\sin(\\theta + \\alpha)$, where $R$ and $\\alpha$ are constants with $R > 0$ and $0 < \\alpha < \\frac{ \\pi }{ 2 }$ (in radians).<br><strong>(b)</strong> Find all values of $\\theta$ in the range $0 < \\theta < 2\\pi$ satisfying:\n$$\\sqrt{ 3 }\\sin\\theta + \\cos\\theta = \\sqrt{ 2 }$$<br><strong>(c)</strong> State the maximum and minimum values of the expression $\\sqrt{ 3 }\\sin\\theta + \\cos\\theta$, and find the smallest positive value of $\\theta$ for which the maximum occurs.",
    "steps": [
        "<strong>(a)</strong> We expand the harmonic form $R\\sin(\\theta + \\alpha)$ using the addition identity for sine:<br>$$R\\sin(\\theta + \\alpha) = R\\sin\\theta\\cos\\alpha + R\\cos\\theta\\sin\\alpha$$<br>Comparing this to our expression $\\sqrt{ 3 }\\sin\\theta + \\cos\\theta$, we equate the coefficients of $\\sin\\theta$ and $\\cos\\theta$:<br>\\begin{aligned} R\\cos\\alpha &= \\sqrt{ 3 } \\cr R\\sin\\alpha &= 1 \\end{aligned}",
        "To find $R$, we square and add these equations:<br>\\begin{aligned} R^2\\cos^2\\alpha + R^2\\sin^2\\alpha &= (\\sqrt{ 3 })^2 + 1^2 \\cr R^2 &= 3 + 1 = 4 \\cr R &= 2 \\end{aligned}<br>To find $\\alpha$, we divide the sine equation by the cosine equation:<br>\\begin{aligned} \\frac{ R\\sin\\alpha }{ R\\cos\\alpha } &= \\frac{ 1 }{ \\sqrt{ 3 } } \\cr \\tan\\alpha &= \\frac{ 1 }{ \\sqrt{ 3 } } \\cr \\alpha &= \\frac{ \\pi }{ 6 } \\end{aligned}<br>Thus, the expression can be written as:<br>$$2\\sin\\left(\\theta + \\frac{ \\pi }{ 6 }\\right)$$",
        "<strong>(b)</strong> To solve $\\sqrt{ 3 }\\sin\\theta + \\cos\\theta = \\sqrt{ 2 }$, we substitute our harmonic form into the equation:<br>\\begin{aligned} 2\\sin\\left(\\theta + \\frac{ \\pi }{ 6 }\\right) &= \\sqrt{ 2 } \\cr \\sin\\left(\\theta + \\frac{ \\pi }{ 6 }\\right) &= \\frac{ \\sqrt{ 2 } }{ 2 } \\end{aligned}",
        "The exact primary solutions for $\\arcsin\\left(\\frac{ \\sqrt{ 2 } }{ 2 }\\right)$ in the interval $[0, 2\\pi]$ are:<br>\\begin{aligned} \\theta + \\frac{ \\pi }{ 6 } &= \\frac{ \\pi }{ 4 } \\cr \\theta + \\frac{ \\pi }{ 6 } &= \\frac{ 3\\pi }{ 4 } \\end{aligned}<br>Solving for $\\theta$ by subtracting $\\frac{ \\pi }{ 6 }$ from both solutions:<br>\\begin{aligned} \\theta_1 &= \\frac{ \\pi }{ 4 } - \\frac{ \\pi }{ 6 } = \\frac{ 3\\pi - 2\\pi }{ 12 } = \\frac{ \\pi }{ 12 } \\cr \\theta_2 &= \\frac{ 3\\pi }{ 4 } - \\frac{ \\pi }{ 6 } = \\frac{ 9\\pi - 2\\pi }{ 12 } = \\frac{ 7\\pi }{ 12 } \\end{aligned}",
        "<strong>(c)</strong> Since the expression simplifies to $2\\sin\\left(\\theta + \\frac{ \\pi }{ 6 }\\right)$:<br>• The <strong>maximum value</strong> of the expression is $2(1) = 2$.<br>• The <strong>minimum value</strong> of the expression is $2(-1) = -2$.<br><br>The maximum occurs when the sine function equals $1$:<br>\\begin{aligned} \\sin\\left(\\theta + \\frac{ \\pi }{ 6 }\\right) &= 1 \\cr \\theta + \\frac{ \\pi }{ 6 } &= \\frac{ \\pi }{ 2 } \\cr \\theta &= \\frac{ \\pi }{ 2 } - \\frac{ \\pi }{ 6 } = \\frac{ \\pi }{ 3 } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$2\\sin\\left(\\theta + \\frac{ \\pi }{ 3 }\\right)$$ and Maximum occurs at $$\\theta = \\frac{ \\pi }{ 6 }$$",
            "feedback": "This is incorrect. When equating coefficients, we find $R\\cos\\alpha = \\sqrt{ 3 }$ and $R\\sin\\alpha = 1$, which gives $\\tan\\alpha = 1/\\sqrt{ 3 } \\implies \\alpha = \\frac{ \\pi }{ 6 }$, not $\\frac{ \\pi }{ 3 }$. This swap of the trigonometric components leads to incorrect angle solutions throughout."
        },
        {
            "ans": "$$2\\sin\\left(\\theta + \\frac{ \\pi }{ 6 }\\right)$$ and $$\\theta = \\frac{ \\pi }{ 6 }, \\frac{ 5\\pi }{ 6 }$$",
            "feedback": "This is incorrect. While the expression is correct, these are the solved values for $\\theta + \\frac{ \\pi }{ 6 } = \\frac{ \\pi }{ 4 }, \\frac{ 3\\pi }{ 4 }$ before subtracting the phase shift $\\frac{ \\pi }{ 6 }$. Ensure you perform the subtraction of the angle $\\alpha$ as the final step to isolate $\\theta$."
        },
        {
            "ans": "$$2\\sin\\left(\\theta + \\frac{ \\pi }{ 6 }\\right)$$ and Maximum occurs at $$\\theta = \\frac{ \\pi }{ 2 }$$",
            "feedback": "This is incorrect. The maximum of the expression occurs when the sine term equals $1$, which means the entire bracket must equal $\\frac{ \\pi }{ 2 }$: $\\theta + \\frac{ \\pi }{ 6 } = \\frac{ \\pi }{ 2 }$. Solving this requires subtracting $\\frac{ \\pi }{ 6 }$ from both sides, yielding $\\theta = \\frac{ \\pi }{ 3 }$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Exact Radian Calculations",
        "content": "When a question specifies exact intervals (like $0 < \\theta < 2\\pi$) and involves exact trigonometric ratios (such as $\\sqrt{ 3 }$ or $\\frac{ \\sqrt{ 2 } }{ 2 }$), always perform your calculations in radians using exact fractions of $\\pi$. Decimal approximations (like $0.52$ for $\\frac{ \\pi }{ 6 }$) will lose accuracy and will not receive full marks."
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
    "question": "<strong>(a)</strong> Express $3\\sin\\theta + 5\\cos\\theta$ in the form $R\\sin(\\theta + \\alpha)$, where $R > 0$ and $0^\\circ < \\alpha < 90^\\circ$. Give the values of $R$ and $\\alpha$ correct to two decimal places.<br><strong>(b)</strong> Solve the equation $3\\sin\\theta + 5\\cos\\theta = 2$ for values of $\\theta$ in the range $0^\\circ < \\theta < 360^\\circ$.<br><strong>(c)</strong> A curve has the equation $y = 3\\sin x + 5\\cos x$. Using your results from part (a), write down the coordinates of the maximum and minimum points of this curve in the interval $0^\\circ \\le x \\le 360^\\circ$. Give your coordinates correct to one decimal place.",
    "steps": [
        "<strong>(a)</strong> We expand the harmonic form $R\\sin(\\theta + \\alpha)$ using the addition identity for sine:<br>$$R\\sin(\\theta + \\alpha) = R\\sin\\theta\\cos\\alpha + R\\cos\\theta\\sin\\alpha$$<br>Comparing this to our expression $3\\sin\\theta + 5\\cos\\theta$, we equate the coefficients of $\\sin\\theta$ and $\\cos\\theta$:<br>\\begin{aligned} R\\cos\\alpha &= 3 \\cr R\\sin\\alpha &= 5 \\end{aligned}",
        "To find $R$ and $\\alpha$:<br>\\begin{aligned} R &= \\sqrt{ 3^2 + 5^2 } = \\sqrt{ 34 } \\approx 5.83 \\cr \\tan\\alpha &= \\frac{ 5 }{ 3 } \\implies \\alpha = \\tan^{-1}\\left(\\frac{ 5 }{ 3 }\\right) \\approx 59.04^\\circ \\end{aligned}<br>Thus, the expression can be written as:<br>$$5.83\\sin(\\theta + 59.04^\\circ)$$",
        "<strong>(b)</strong> To solve $3\\sin\\theta + 5\\cos\\theta = 2$, we substitute our harmonic form into the equation:<br>\\begin{aligned} \\sqrt{ 34 }\\sin(\\theta + 59.04^\\circ) &= 2 \\cr \\sin(\\theta + 59.04^\\circ) &= \\frac{ 2 }{ \\sqrt{ 34 } } \\approx 0.3430 \\end{aligned}",
        "Finding the primary and secondary angles for $\\arcsin(0.3430)$ in the standard range:<br>\\begin{aligned} \\theta + 59.04^\\circ &\\approx 20.08^\\circ \\cr \\theta + 59.04^\\circ &\\approx 180^\\circ - 20.08^\\circ = 159.92^\\circ \\cr \\theta + 59.04^\\circ &\\approx 360^\\circ + 20.08^\\circ = 380.08^\\circ \\end{aligned}<br>Solving for $\\theta$ by subtracting $59.04^\\circ$ from each angle:<br>\\begin{aligned} \\theta_1 &= 20.08^\\circ - 59.04^\\circ = -38.96^\\circ \\quad (\\text{outside the range}) \\cr \\theta_2 &= 159.92^\\circ - 59.04^\\circ = 100.9^\\circ \\cr \\theta_3 &= 380.08^\\circ - 59.04^\\circ = 321.0^\\circ \\end{aligned}<br>Thus, the valid solutions are $100.9^\\circ$ and $321.0^\\circ$.",
        "<strong>(c)</strong> Since the curve is given by $y = \\sqrt{ 34 }\\sin(x + 59.04^\\circ)$:<br>• The <strong>maximum point</strong> occurs when $\\sin(x + 59.04^\\circ) = 1$:<br>\\begin{aligned} x + 59.04^\\circ &= 90^\\circ \\implies x = 31.0^\\circ \\end{aligned}<br>The maximum $y$-value is $\\sqrt{ 34 } \\approx 5.8$. Thus, the maximum coordinate is $(31.0, 5.8)$.<br><br>• The <strong>minimum point</strong> occurs when $\\sin(x + 59.04^\\circ) = -1$:<br>\\begin{aligned} x + 59.04^\\circ &= 270^\\circ \\implies x = 211.0^\\circ \\end{aligned}<br>The minimum $y$-value is $-\\sqrt{ 34 } \\approx -5.8$. Thus, the minimum coordinate is $(211.0, -5.8)$."
    ],
    "pi_options": [
        {
            "ans": "$$R = 5.83, \\alpha = 59.04^\\circ$$ and Maximum: $$(90.0^\\circ, 5.8)$$, Minimum: $$(270.0^\\circ, -5.8)$$$",
            "feedback": "This is incorrect. While $R$ and $\\alpha$ are correct, the stationary points of the curve $y = R\\sin(x + \\alpha)$ are shifted by the phase angle $\\alpha$. To find the $x$-coordinate of the maximum, you must set $x + \\alpha = 90^\\circ \\implies x = 90^\\circ - 59.04^\\circ = 31.0^\\circ$, rather than just using the standard unshifted $90^\\circ$ and $270^\\circ$ points."
        },
        {
            "ans": "$$R = 5.83, \\alpha = 30.96^\\circ$$ and Solutions: $$\\theta = 129.0^\\circ, 349.0^\\circ$$",
            "feedback": "This is incorrect. When dividing coefficients, we have $\\tan\\alpha = 5/3 \\approx 1.6667$, which gives $\\alpha \\approx 59.04^\\circ$. It appears that $\\tan\\alpha = 3/5$ was evaluated by mistake, which led to an incorrect angle of $30.96^\\circ$ and consequently incorrect equation solutions."
        },
        {
            "ans": "$$R = 5.83, \\alpha = 59.04^\\circ$$ and Solutions: $$\\theta = 100.9^\\circ, 221.0^\\circ$$",
            "feedback": "This is incorrect. While the expression and the first solution are correct, the secondary solution for a sine equation is found by subtracting the primary angle from $180^\\circ$ first (giving $159.92^\\circ$) and then subtracting $\\alpha$. Alternatively, the third quadrant angle $380.08^\\circ - 59.04^\\circ = 321.0^\\circ$ must be used, not $221.0^\\circ$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Finding Stationary Points using R-formula",
        "content": "While you can find stationary points by differentiating using calculus (setting $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0$), using the $R$-formula form $y = R\\sin(x + \\alpha)$ is far quicker and more elegant. Since the maximum value of a sine function is always $1$ and occurs at an angle of $90^\\circ$, you can immediately find the $x$-coordinate of the maximum by solving the simple linear equation $x + \\alpha = 90^\\circ$."
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
    "question": "<strong>(a)</strong> Express $12\\sin 2\\theta - 5\\cos 2\\theta$ in the form $R\\sin(2\\theta - \\alpha)$, where $R$ and $\\alpha$ are constants with $R > 0$ and $0^\\circ < \\alpha < 90^\\circ$.<br><strong>(b)</strong> Find all values of $\\theta$ in the range $0^\\circ < \\theta < 180^\\circ$ satisfying:\n$$12\\sin 2\\theta - 5\\cos 2\\theta = 6.5$$<br><strong>(c)</strong> Determine the greatest value of the expression:\n$$\\frac{ 20 }{ (12\\sin 2\\theta - 5\\cos 2\\theta)^2 + 3 }$$",
    "steps": [
        "<strong>(a)</strong> We expand the harmonic form $R\\sin(2\\theta - \\alpha)$ using the subtraction identity for sine:<br>$$R\\sin(2\\theta - \\alpha) = R\\sin 2\\theta\\cos\\alpha - R\\cos 2\\theta\\sin\\alpha$$<br>Comparing this to our expression $12\\sin 2\\theta - 5\\cos 2\\theta$, we equate the coefficients of $\\sin 2\\theta$ and $\\cos 2\\theta$:<br>\\begin{aligned} R\\cos\\alpha &= 12 \\cr R\\sin\\alpha &= 5 \\end{aligned}",
        "To find $R$ and $\\alpha$:<br>\\begin{aligned} R &= \\sqrt{ 12^2 + (-5)^2 } = \\sqrt{ 169 } = 13 \\cr \\tan\\alpha &= \\frac{ 5 }{ 12 } \\implies \\alpha = \\tan^{-1}\\left(\\frac{ 5 }{ 12 }\\right) \\approx 22.62^\\circ \\end{aligned}<br>Thus, the expression can be written as:<br>$$13\\sin(2\\theta - 22.62^\\circ)$$",
        "<strong>(b)</strong> To solve $12\\sin 2\\theta - 5\\cos 2\\theta = 6.5$, we substitute our harmonic form into the equation:<br>\\begin{aligned} 13\\sin(2\\theta - 22.62^\\circ) &= 6.5 \\cr \\sin(2\\theta - 22.62^\\circ) &= 0.5 \\end{aligned}",
        "Finding the primary and secondary angles for $\\arcsin(0.5)$ in the range $0^\\circ < 2\\theta - 22.62^\\circ < 360^\\circ$ (since $0^\\circ < \\theta < 180^\\circ$):<br>\\begin{aligned} 2\\theta - 22.62^\\circ &= 30^\\circ \\cr 2\\theta - 22.62^\\circ &= 150^\\circ \\end{aligned}<br>Solving for $2\\theta$ and then dividing by $2$:<br>\\begin{aligned} 2\\theta_1 &= 30^\\circ + 22.62^\\circ = 52.62^\\circ \\implies \\theta_1 = 26.3^\\circ \\cr 2\\theta_2 &= 150^\\circ + 22.62^\\circ = 172.62^\\circ \\implies \\theta_2 = 86.3^\\circ \\end{aligned}",
        "<strong>(c)</strong> To determine the greatest value of the expression, we substitute our $R$-formula expression into the denominator:<br>$$\\frac{ 20 }{ (13\\sin(2\\theta - 22.62^\\circ))^2 + 3 }$$<br>To make this fraction as large as possible, we must minimise the denominator. The denominator consists of a squared term plus $3$. Since any squared real number is non-negative, the minimum value of $(13\\sin(2\\theta - 22.62^\\circ))^2$ is $0$ (which is fully achievable since $0$ is within the range $[-13, 13]$).<br>Thus, the minimum value of the denominator is $0 + 3 = 3$.<br>The greatest value of the overall expression is:<br>$$\\frac{ 20 }{ 3 } \\approx 6.67$$"
    ],
    "pi_options": [
        {
            "ans": "$$13\\sin(2\\theta - 22.62^\\circ)$$ and Greatest: $$\\frac{ 20 }{ 172 }$$",
            "feedback": "This is incorrect. To make the fraction as large as possible, you must minimise the denominator, not maximise it. Substituting the maximum value of the squared term ($13^2 = 169$) yields the minimum value of the fraction, $\\frac{20}{169+3} = \\frac{20}{172}$, which is the least value, not the greatest."
        },
        {
            "ans": "$$13\\sin(2\\theta - 22.62^\\circ)$$ and $$\\theta = 52.6^\\circ, 172.6^\\circ$$",
            "feedback": "This is incorrect. While $2\\theta_1 = 52.62^\\circ$ and $2\\theta_2 = 172.62^\\circ$ are correct intermediate values, you must remember to divide by $2$ to solve for $\\theta$, since the angle in the equation is $2\\theta$. This yields the correct solutions of $26.3^\\circ$ and $86.3^\\circ$."
        },
        {
            "ans": "$$13\\sin(2\\theta - 67.38^\\circ)$$ and Greatest: $$\\frac{ 20 }{ 3 }$$",
            "feedback": "This is incorrect. While the greatest value is correct, the phase angle calculation used $\\tan\\alpha = 12/5 = 2.4 \\implies \\alpha \\approx 67.38^\\circ$. This represents an inversion of the coefficients in the tangent division, where the correct equation is $\\tan\\alpha = 5/12 \\implies \\alpha \\approx 22.62^\\circ$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Minimising Squared Denominators",
        "content": "When asked to maximise a fraction of the form $\\frac{ A }{ [f(x)]^2 + B }$, many students reflexively substitute the minimum value of the sine function ($-1$) into the expression. However, since the term is squared, any negative values become positive. The absolute minimum of any squared real expression is <strong>0</strong>. Since $0$ lies within the range of $13\\sin(2\\theta - \\alpha)$, the minimum value of the squared term is indeed $0$."
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
    "question": "<strong>(a)</strong> Evaluate the exact value of:<br>$$\\int_1^2 x^2 \\ln x \\ \\mathrm{d}x$$<br>using integration by parts.<br><br><strong>(b)</strong> Use the substitution $x = 3\\sin\\theta$ to find the exact value of:<br>$$\\int_0^{1.5} \\frac{ 3 + x }{ \\sqrt{ 9 - x^2 } } \\ \\mathrm{d}x$$",
    "steps": [
        "<strong>(a)</strong> To evaluate $\\int_1^2 x^2 \\ln x \\ \\mathrm{d}x$ using integration by parts, we use the formula:<br>$$\\int u v' \\ \\mathrm{d}x = u v - \\int u' v \\ \\mathrm{d}x$$<br>We choose our parts as:<br>\\begin{aligned} u &= \\ln x \\quad \\implies \\quad u' = \\frac{ 1 }{ x } \\cr v' &= x^2 \\quad \\implies \\quad v = \\frac{ x^3 }{ 3 } \\end{aligned}",
        "Applying the integration by parts formula:<br>\\begin{aligned} \\int_1^2 x^2 \\ln x \\ \\mathrm{d}x &= \\left[ \\frac{ x^3 }{ 3 } \\ln x \\right]_1^2 - \\int_1^2 \\frac{ x^3 }{ 3 } \\cdot \\frac{ 1 }{ x } \\ \\mathrm{d}x \\cr &= \\left( \\frac{ 8 }{ 3 } \\ln 2 - \\frac{ 1 }{ 3 } \\ln 1 \\right) - \\int_1^2 \\frac{ x^2 }{ 3 } \\ \\mathrm{d}x \\cr &= \\frac{ 8 }{ 3 } \\ln 2 - \\left[ \\frac{ x^3 }{ 9 } \\right]_1^2 \\cr &= \\frac{ 8 }{ 3 } \\ln 2 - \\left( \\frac{ 8 }{ 9 } - \\frac{ 1 }{ 9 } \\right) \\cr &= \\frac{ 8 }{ 3 } \\ln 2 - \\frac{ 7 }{ 9 } \\end{aligned}",
        "<strong>(b)</strong> To evaluate the definite integral using the substitution $x = 3\\sin\\theta$, we find the differential:<br>$$\\mathrm{d}x = 3\\cos\\theta \\ \\mathrm{d}\\theta$$<br>Next, we find the new limits of integration in terms of $\\theta$:<br>• When $x = 0 \\implies 3\\sin\\theta = 0 \\implies \\theta = 0$.<br>• When $x = 1.5 \\implies 3\\sin\\theta = 1.5 \\implies \\sin\\theta = 0.5 \\implies \\theta = \\frac{ \\pi }{ 6 }$.<br><br>We also substitute into the square root expression:<br>$$\\sqrt{ 9 - x^2 } = \\sqrt{ 9 - 9\\sin^2\\theta } = \\sqrt{ 9(1 - \\sin^2\\theta) } = \\sqrt{ 9\\cos^2\\theta } = 3\\cos\\theta$$",
        "Substituting these expressions into the integral gives:<br>\\begin{aligned} \\int_0^{\\frac{ \\pi }{ 6 }} \\frac{ 3 + 3\\sin\\theta }{ 3\\cos\\theta } \\cdot 3\\cos\\theta \\ \\mathrm{d}\\theta &= \\int_0^{\\frac{ \\pi }{ 6 }} (3 + 3\\sin\\theta) \\ \\mathrm{d}\\theta \\cr &= \\left[ 3\\theta - 3\\cos\\theta \\right]_0^{\\frac{ \\pi }{ 6 }} \\end{aligned}",
        "Evaluating at the limits of integration:<br>\\begin{aligned} \\left[ 3\\theta - 3\\cos\\theta \\right]_0^{\\frac{ \\pi }{ 6 }} &= \\left( 3\\left(\\frac{ \\pi }{ 6 }\\right) - 3\\cos\\frac{ \\pi }{ 6 } \\right) - (3(0) - 3\\cos 0) \\cr &= \\left( \\frac{ \\pi }{ 2 } - \\frac{ 3\\sqrt{ 3 } }{ 2 } \\right) - (0 - 3) \\cr &= \\frac{ \\pi }{ 2 } - \\frac{ 3\\sqrt{ 3 } }{ 2 } + 3 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$\\frac{ 8 }{ 3 }\\ln 2 - \\frac{ 7 }{ 9 }$$ and $$\\frac{ \\pi }{ 2 } + 3$$",
            "feedback": "This is incorrect. While the integration by parts result is correct, you appear to have missed the subtraction of the term $3\\cos\\frac{\\pi}{6}$ when evaluating the limits for part (b). Remember that $\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$, so this term must be evaluated and included in the final exact answer."
        },
        {
            "ans": "$$\\frac{ 2 }{ 3 }\\ln 2 - \\frac{ 7 }{ 9 }$$ and $$\\frac{ \\pi }{ 2 } - \\frac{ 3\\sqrt{ 3 } }{ 2 } - 3$$",
            "feedback": "This is incorrect. When evaluating the term $\\frac{x^3}{3}\\ln x$ at the upper limit $2$, we get $\\frac{8}{3}\\ln 2$, not $\\frac{2}{3}\\ln 2$. For part (b), subtracting $-3\\cos 0$ from the lower limit results in adding $3$ to the expression, not subtracting $3$ (since double negatives combine to a positive)."
        },
        {
            "ans": "$$\\frac{ 8 }{ 3 }\\ln 2 - \\frac{ 1 }{ 9 }$$ and $$\\frac{ \\pi }{ 2 } - \\frac{ 3\\sqrt{ 3 } }{ 2 }$$",
            "feedback": "This is incorrect. For part (a), when integrating $\\frac{x^2}{3}$, the term evaluates to $\\left[\\frac{x^3}{9}\\right]$ with limits $1$ to $2$. Subtracting these limits gives $\\frac{8}{9} - \\frac{1}{9} = \\frac{7}{9}$, not $\\frac{1}{9}$. For part (b), you must ensure you do not neglect the lower limit evaluation of $-3\\cos 0$, which yields a constant contribution of $+3$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Evaluating the Lower Limit",
        "content": "A common student slip is to automatically assume that substituting $0$ as a lower limit into a definite integral results in $0$. While this is true for polynomial terms, it is <strong>not</strong> true for trigonometric terms (since $\\cos 0 = 1$) or exponential terms (since $\\mathrm{e}^0 = 1$). Always write out the full substitution for the lower limit to avoid missing constant contributions."
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
    "question": "<strong>(a)</strong> Evaluate the exact value of:<br>$$\\int_0^1 x \\mathrm{e}^{ 2x } \\ \\mathrm{d}x$$<br>using integration by parts.<br><br><strong>(b)</strong> Use the substitution $u = 2x + 1$ to find the exact value of:<br>$$\\int_0^4 \\frac{ x }{ \\sqrt{ 2x + 1 } } \\ \\mathrm{d}x$$",
    "steps": [
        "<strong>(a)</strong> To evaluate $\\int_0^1 x \\mathrm{e}^{ 2x } \\ \\mathrm{d}x$ using integration by parts, we use the formula:<br>$$\\int u v' \\ \\mathrm{d}x = u v - \\int u' v \\ \\mathrm{d}x$$<br>We choose our parts as:<br>\\begin{aligned} u &= x \\quad \\implies \\quad u' = 1 \\cr v' &= \\mathrm{e}^{ 2x } \\quad \\implies \\quad v = \\frac{ 1 }{ 2 }\\mathrm{e}^{ 2x } \\end{aligned}",
        "Applying the integration by parts formula:<br>\\begin{aligned} \\int_0^1 x \\mathrm{e}^{ 2x } \\ \\mathrm{d}x &= \\left[ \\frac{ 1 }{ 2 }x\\mathrm{e}^{ 2x } \\right]_0^1 - \\int_0^1 \\frac{ 1 }{ 2 }\\mathrm{e}^{ 2x } \\ \\mathrm{d}x \\cr &= \\left( \\frac{ 1 }{ 2 }\\mathrm{e}^{ 2 } - 0 \\right) - \\left[ \\frac{ 1 }{ 4 }\\mathrm{e}^{ 2x } \\right]_0^1 \\cr &= \\frac{ 1 }{ 2 }\\mathrm{e}^{ 2 } - \\left( \\frac{ 1 }{ 4 }\\mathrm{e}^{ 2 } - \\frac{ 1 }{ 4 } \\right) \\cr &= \\frac{ 1 }{ 4 }\\mathrm{e}^{ 2 } + \\frac{ 1 }{ 4 } \\cr &= \\frac{ 1 }{ 4 }(\\mathrm{e}^{ 2 } + 1) \\end{aligned}",
        "<strong>(b)</strong> To evaluate using the substitution $u = 2x + 1$, we rearrange for $x$ and find the differential:<br>\\begin{aligned} x &= \\frac{ u - 1 }{ 2 } \\cr \\mathrm{d}x &= \\frac{ 1 }{ 2 }\\mathrm{d}u \\end{aligned}<br>Next, we find the new limits of integration in terms of $u$:<br>• When $x = 0 \\implies u = 2(0) + 1 = 1$.<br>• When $x = 4 \\implies u = 2(4) + 1 = 9$.",
        "Substituting these expressions into the integral gives:<br>\\begin{aligned} \\int_1^9 \\frac{ u - 1 }{ 2\\sqrt{ u } } \\cdot \\frac{ 1 }{ 2 } \\ \\mathrm{d}u &= \\frac{ 1 }{ 4 } \\int_1^9 (u - 1)u^{ -\\frac{ 1 }{ 2 } } \\ \\mathrm{d}u \\cr &= \\frac{ 1 }{ 4 } \\int_1^9 (u^{ \\frac{ 1 }{ 2 } } - u^{ -\\frac{ 1 }{ 2 } }) \\ \\mathrm{d}u \\cr &= \\frac{ 1 }{ 4 } \\left[ \\frac{ 2 }{ 3 }u^{ \\frac{ 3 }{ 2 } } - 2u^{ \\frac{ 1 }{ 2 } } \\right]_1^9 \\end{aligned}",
        "Evaluating at the limits of integration:<br>\\begin{aligned} \\frac{ 1 }{ 4 } \\left[ \\frac{ 2 }{ 3 }u^{ \\frac{ 3 }{ 2 } } - 2u^{ \\frac{ 1 }{ 2 } } \\right]_1^9 &= \\frac{ 1 }{ 4 } \\left[ \\left( \\frac{ 2 }{ 3 }(27) - 2(3) \\right) - \\left( \\frac{ 2 }{ 3 }(1) - 2(1) \\right) \\right] \\cr &= \\frac{ 1 }{ 4 } \\left[ (18 - 6) - \\left( -\\frac{ 4 }{ 3 } \\right) \\right] \\cr &= \\frac{ 1 }{ 4 } \\left[ 12 + \\frac{ 4 }{ 3 } \\right] \\cr &= \\frac{ 1 }{ 4 } \\left( \\frac{ 40 }{ 3 } \\right) \\cr &= \\frac{ 10 }{ 3 } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$\\frac{ 1 }{ 4 }(\\mathrm{e}^{ 2 } - 1)$$ and $$\\frac{ 10 }{ 3 }$$",
            "feedback": "This is incorrect. When evaluating the integrated exponential term $\\left[\\frac{1}{4}\\mathrm{e}^{2x}\\right]$ from $0$ to $1$, the lower limit substitution yields $\\frac{1}{4}\\mathrm{e}^0 = \\frac{1}{4}$. Since this term is subtracted, the minus signs combine: $-\\frac{1}{4}\\mathrm{e}^2 - (-\\frac{1}{4}) = -\\frac{1}{4}\\mathrm{e}^2 + \\frac{1}{4}$, leading to $+1$ inside the factored brackets."
        },
        {
            "ans": "$$\\frac{ 1 }{ 4 }(\\mathrm{e}^{ 2 } + 1)$$ and $$\\frac{ 20 }{ 3 }$$",
            "feedback": "This is incorrect. While the integration by parts result is correct, you appear to have omitted the factor of $\\frac{1}{4}$ (obtained from combining the $\\frac{1}{2}$ from the rearranged $x$ term and $\\frac{1}{2}$ from the differential $\\mathrm{d}x$) when integrating the substitution terms, resulting in an answer that is twice the correct value."
        },
        {
            "ans": "$$\\frac{ 1 }{ 2 }(\\mathrm{e}^{ 2 } + 1)$$ and $$\\frac{ 8 }{ 3 }$$",
            "feedback": "This is incorrect. For part (a), the first term of the integration by parts evaluates to $\\frac{1}{2}\\mathrm{e}^2$, from which you must subtract $\\frac{1}{4}\\mathrm{e}^2$, yielding a coefficient of $\\frac{1}{4}$. For part (b), check the subtraction of the lower limit in your evaluation, as $18 - 6 - (\\frac{2}{3} - 2) = 12 + \\frac{4}{3} = \\frac{40}{3}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Combining Fractional Constants",
        "content": "When doing integration by substitution, fractional constants can quickly accumulate outside the integral sign. In this case, rearranging $x$ gives a factor of $\\frac{1}{2}$, and the differential $\\mathrm{d}x$ contributes another factor of $\\frac{1}{2}$. Factorise these out of the integral as a single constant factor of $\\frac{1}{4}$ immediately to keep your integration workspace clean and prevent coefficient errors."
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
    "question": "<strong>(a)</strong> Find the exact value of:<br>$$\\int_0^{\\frac{ \\pi }{ 4 }} x \\sec^2 x \\ \\mathrm{d}x$$<br>using integration by parts.<br><br><strong>(b)</strong> Use the substitution $x = 2\\tan\\theta$ to find the exact value of:<br>$$\\int_0^2 \\frac{ 1 }{ x^2 + 4 } \\ \\mathrm{d}x$$",
    "steps": [
        "<strong>(a)</strong> To evaluate $\\int_0^{\\frac{ \\pi }{ 4 }} x \\sec^2 x \\ \\mathrm{d}x$ using integration by parts, we choose our parts as:<br>\\begin{aligned} u &= x \\quad \\implies \\quad u' = 1 \\cr v' &= \\sec^2 x \\quad \\implies \\quad v = \\tan x \\end{aligned}",
        "Applying the integration by parts formula:<br>\\begin{aligned} \\int_0^{\\frac{ \\pi }{ 4 }} x \\sec^2 x \\ \\mathrm{d}x &= \\left[ x \\tan x \\right]_0^{\\frac{ \\pi }{ 4 }} - \\int_0^{\\frac{ \\pi }{ 4 }} \\tan x \\ \\mathrm{d}x \\cr &= \\left( \\frac{ \\pi }{ 4 }\\tan\\frac{ \\pi }{ 4 } - 0 \\right) - \\left[ \\ln| \\sec x | \\right]_0^{\\frac{ \\pi }{ 4 }} \\cr &= \\frac{ \\pi }{ 4 }(1) - (\\ln| \\sec\\frac{ \\pi }{ 4 } | - \\ln| \\sec 0 |) \\end{aligned}",
        "Evaluating the logarithmic terms:<br>• $\\sec\\frac{ \\pi }{ 4 } = \\frac{ 1 }{ \\cos(\\pi/4) } = \\sqrt{ 2 }$.<br>• $\\sec 0 = 1 \\implies \\ln(1) = 0$.<br>Substituting these in gives:<br>\\begin{aligned} \\frac{ \\pi }{ 4 } - \\ln\\sqrt{ 2 } &= \\frac{ \\pi }{ 4 } - \\ln(2^{ \\frac{ 1 }{ 2 } }) \\cr &= \\frac{ \\pi }{ 4 } - \\frac{ 1 }{ 2 }\\ln 2 \\end{aligned}",
        "<strong>(b)</strong> To evaluate the definite integral using the substitution $x = 2\\tan\\theta$, we find the differential:<br>$$\\mathrm{d}x = 2\\sec^2\\theta \\ \\mathrm{d}\\theta$$<br>Next, we find the new limits of integration in terms of $\\theta$:<br>• When $x = 0 \\implies 2\\tan\\theta = 0 \\implies \\theta = 0$.<br>• When $x = 2 \\implies 2\\tan\\theta = 2 \\implies \\tan\\theta = 1 \\implies \\theta = \\frac{ \\pi }{ 4 }$."
    ],
    "pi_options": [
        {
            "ans": "$$\\frac{ \\pi }{ 4 } - \\ln 2$$ and $$\\frac{ \\pi }{ 4 }$$",
            "feedback": "This is incorrect. For part (a), the logarithm term is $\\ln\\sqrt{2}$. Using power laws of logarithms, $\\ln(2^{1/2}) = \\frac{1}{2}\\ln 2$. For part (b), substituting into the integral yields $\\int \\frac{2\\sec^2\\theta}{4\\sec^2\\theta}\\mathrm{d}\\theta = \\int \\frac{1}{2}\\mathrm{d}\\theta$. Integrating $\\frac{1}{2}$ over $0$ to $\\frac{\pi}{4}$ gives $\\frac{\pi}{8}$, not $\\frac{\pi}{4}$."
        },
        {
            "ans": "$$\\frac{ \\pi }{ 4 } + \\frac{ 1 }{ 2 }\\ln 2$$ and $$\\frac{ \\pi }{ 8 }$$",
            "feedback": "This is incorrect. While the substitution result is correct, the sign in part (a) is incorrect. The integration by parts formula has a subtraction sign: $uv - \\int u'v \\mathrm{d}x$, and since the integral of $\\tan x$ is $+\\ln|\\sec x|$, the subtraction sign must be maintained in the final exact answer."
        },
        {
            "ans": "$$\\frac{ \\pi }{ 4 } - \\frac{ 1 }{ 2 }\\ln 2$$ and $$\\frac{ \\pi }{ 2 }$$",
            "feedback": "This is incorrect. While the integration by parts result is correct, you appear to have neglected the factor of $4$ in the denominator ($x^2+4 = 4\\sec^2\\theta$) when simplifying the integrand, which led to an incorrect final value of the definite integral."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Logarithm of Radicals",
        "content": "When integrating trigonometric functions, you often obtain expressions like $\\ln\\sqrt{ 2 }$. At A Level, you are expected to fully simplify your logarithmic terms using logarithm laws. Always rewrite roots as fractional powers (such as $\\sqrt{ 2 } = 2^{ \\frac{ 1 }{ 2 } }$) and bring the exponent to the front: $\\ln(2^{ \\frac{ 1 }{ 2 } }) = \\frac{ 1 }{ 2 }\\ln 2$."
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
    "question": "<strong>(a)</strong> Evaluate the exact value of:<br>$$\\int_1^{\\mathrm{e}} \\frac{ \\ln x }{ x^2 } \\ \\mathrm{d}x$$<br>using integration by parts.<br><br><strong>(b)</strong> Use the substitution $u = x^2 + 3$ to find the exact value of:<br>$$\\int_1^3 \\frac{ 2x }{ (x^2 + 3)^2 } \\ \\mathrm{d}x$$",
    "steps": [
        "<strong>(a)</strong> To evaluate $\\int_1^{\\mathrm{e}} \\frac{ \\ln x }{ x^2 } \\ \\mathrm{d}x$ using integration by parts, we rewrite the integrand as $(\\ln x) \\cdot x^{ -2 }$ and choose our parts as:<br>\\begin{aligned} u &= \\ln x \\quad \\implies \\quad u' = \\frac{ 1 }{ x } \\cr v' &= x^{ -2 } \\quad \\implies \\quad v = -\\frac{ 1 }{ x } \\end{aligned}",
        "Applying the integration by parts formula:<br>\\begin{aligned} \\int_1^{\\mathrm{e}} \\frac{ \\ln x }{ x^2 } \\ \\mathrm{d}x &= \\left[ -\\frac{ \\ln x }{ x } \\right]_1^{\\mathrm{e}} - \\int_1^{\\mathrm{e}} \\left(-\\frac{ 1 }{ x }\\right) \\cdot \\frac{ 1 }{ x } \\ \\mathrm{d}x \\cr &= \\left( -\\frac{ \\ln\\mathrm{e} }{ \\mathrm{e} } - 0 \\right) + \\int_1^{\\mathrm{e}} x^{ -2 } \\ \\mathrm{d}x \\cr &= -\\frac{ 1 }{ \\mathrm{e} } + \\left[ -\\frac{ 1 }{ x } \\right]_1^{\\mathrm{e}} \\end{aligned}",
        "Evaluating at the limits of integration:<br>\\begin{aligned} -\\frac{ 1 }{ \\mathrm{e} } + \\left( -\\frac{ 1 }{ \\mathrm{e} } - (-1) \\right) &= -\\frac{ 1 }{ \\mathrm{e} } - \\frac{ 1 }{ \\mathrm{e} } + 1 \\cr &= 1 - \\frac{ 2 }{ \\mathrm{e} } \\end{aligned}",
        "<strong>(b)</strong> To evaluate the definite integral using the substitution $u = x^2 + 3$, we find the differential:<br>$$\\mathrm{d}u = 2x \\ \\mathrm{d}x$$<br>Next, we find the new limits of integration in terms of $u$:<br>• When $x = 1 \\implies u = 1^2 + 3 = 4$.<br>• When $x = 3 \\implies u = 3^2 + 3 = 12$.",
        "Substituting these expressions into the integral gives:<br>\\begin{aligned} \\int_4^{12} \\frac{ 1 }{ u^2 } \\ \\mathrm{d}u &= \\int_4^{12} u^{ -2 } \\ \\mathrm{d}u \\cr &= \\left[ -\\frac{ 1 }{ u } \\right]_4^{12} \\cr &= -\\frac{ 1 }{ 12 } - \\left( -\\frac{ 1 }{ 4 } \\right) \\cr &= \\frac{ 3 }{ 12 } - \\frac{ 1 }{ 12 } = \\frac{ 1 }{ 6 } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$1 + \\frac{ 2 }{ \\mathrm{e} }$$ and $$\\frac{ 1 }{ 6 }$$",
            "feedback": "This is incorrect. While the substitution result is correct, the sign in part (a) is incorrect. Evaluating the boundary terms yields $-\\frac{1}{\\mathrm{e}}$, and evaluating the integrated term yields $-\\frac{1}{\\mathrm{e}} - (-1) = 1 - \\frac{1}{\\mathrm{e}}$. Combining these gives $1 - \\frac{2}{\\mathrm{e}}$, not $1 + \\frac{2}{\\mathrm{e}}$."
        },
        {
            "ans": "$$1 - \\frac{ 2 }{ \\mathrm{e} }$$ and $$\\frac{ 1 }{ 3 }$$",
            "feedback": "This is incorrect. When evaluating the definite integral in part (b), the limits of integration are $4$ and $12$. The evaluation is $-\\frac{1}{12} - (-\\frac{1}{4}) = \\frac{1}{4} - \\frac{1}{12} = \\frac{2}{12}$, which simplifies to $\\frac{1}{6}$, not $\\frac{1}{3}$."
        },
        {
            "ans": "$$-\\frac{ 2 }{ \\mathrm{e} }$$ and $$\\ln 3$$",
            "feedback": "This is incorrect. For part (a), you appear to have neglected the contribution of $+1$ from the lower limit of the second integration term. For part (b), the integrand is $\\frac{1}{u^2}$, which integrates to $-\\frac{1}{u}$, not $\\ln|u|$ (which would only occur if the denominator was linear)."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Avoiding Logarithmic Reflexes",
        "content": "A very common student slip when integrating algebraic fractions is to reflexively write the integral of any fraction as a natural logarithm. Remember that $\\int \\frac{ 1 }{ u^2 } \\ \\mathrm{d}u$ must be integrated using the power rule by rewriting it as $\\int u^{ -2 } \\ \\mathrm{d}u = -u^{ -1 } = -\\frac{ 1 }{ u }$. Only linear denominators of the form $\\frac{ 1 }{ u }$ integrate to logarithms."
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
    "question": "<strong>(a)</strong> Evaluate the exact value of:<br>$$\\int_0^{\\frac{ \\pi }{ 2 }} \\mathrm{e}^x \\cos x \\ \\mathrm{d}x$$<br>using integration by parts.<br><br><strong>(b)</strong> Use the substitution $u = \\sin x$ to find the exact value of:<br>$$\\int_0^{\\frac{ \\pi }{ 2 }} \\sin^2 x \\cos^3 x \\ \\mathrm{d}x$$",
    "steps": [
        "<strong>(a)</strong> To evaluate $I = \\int_0^{\\frac{ \\pi }{ 2 }} \\mathrm{e}^x \\cos x \\ \\mathrm{d}x$ using integration by parts, we choose:<br>\\begin{aligned} u &= \\cos x \\quad \\implies \\quad u' = -\\sin x \\cr v' &= \\mathrm{e}^x \\quad \\implies \\quad v = \\mathrm{e}^x \\end{aligned}",
        "Applying the integration by parts formula:<br>\\begin{aligned} I &= \\left[ \\mathrm{e}^x \\cos x \\right]_0^{\\frac{ \\pi }{ 2 }} - \\int_0^{\\frac{ \\pi }{ 2 }} \\mathrm{e}^x (-\\sin x) \\ \\mathrm{d}x \\cr &= \\left( \\mathrm{e}^{ \\frac{ \\pi }{ 2 } }\\cos\\frac{ \\pi }{ 2 } - \\mathrm{e}^0\\cos 0 \\right) + \\int_0^{\\frac{ \\pi }{ 2 }} \\mathrm{e}^x \\sin x \\ \\mathrm{d}x \\cr &= (0 - 1) + \\int_0^{\\frac{ \\pi }{ 2 }} \\mathrm{e}^x \\sin x \\ \\mathrm{d}x \\cr &= -1 + \\int_0^{\\frac{ \\pi }{ 2 }} \\mathrm{e}^x \\sin x \\ \\mathrm{d}x \\end{aligned}",
        "We apply integration by parts a second time to the remaining integral, choosing:<br>\\begin{aligned} u &= \\sin x \\quad \\implies \\quad u' = \\cos x \\cr v' &= \\mathrm{e}^x \\quad \\implies \\quad v = \\mathrm{e}^x \\end{aligned}<br>Substituting this in:<br>\\begin{aligned} I &= -1 + \\left[ \\mathrm{e}^x \\sin x \\right]_0^{\\frac{ \\pi }{ 2 }} - \\int_0^{\\frac{ \\pi }{ 2 }} \\mathrm{e}^x \\cos x \\ \\mathrm{d}x \\cr I &= -1 + \\left( \\mathrm{e}^{ \\frac{ \\pi }{ 2 } }\\sin\\frac{ \\pi }{ 2 } - 0 \\right) - I \\cr I &= -1 + \\mathrm{e}^{ \\frac{ \\pi }{ 2 } } - I \\end{aligned}",
        "Rearranging to solve for the integral $I$:<br>\\begin{aligned} 2I &= \\mathrm{e}^{ \\frac{ \\pi }{ 2 } } - 1 \\cr I &= \\frac{ 1 }{ 2 }(\\mathrm{e}^{ \\frac{ \\pi }{ 2 } } - 1) \\end{aligned}",
        "<strong>(b)</strong> To evaluate the definite integral using the substitution $u = \\sin x$, we find the differential:<br>$$\\mathrm{d}u = \\cos x \\ \\mathrm{d}x$$<br>Next, we find the new limits of integration in terms of $u$:<br>• When $x = 0 \\implies u = \\sin 0 = 0$.<br>• When $x = \\frac{ \\pi }{ 2 } \\implies u = \\sin\\frac{ \\pi }{ 2 } = 1$.<br><br>We also rewrite the integrand, noting that $\\cos^3 x = \\cos^2 x \\cdot \\cos x = (1 - \\sin^2 x)\\cos x$:<br>\\begin{aligned} \\int_0^{\\frac{ \\pi }{ 2 }} \\sin^2 x \\cos^3 x \\ \\mathrm{d}x &= \\int_0^{\\frac{ \\pi }{ 2 }} \\sin^2 x (1 - \\sin^2 x) \\cos x \\ \\mathrm{d}x \\cr &= \\int_0^1 u^2 (1 - u^2) \\ \\mathrm{d}u \\cr &= \\int_0^1 (u^2 - u^4) \\ \\mathrm{d}u \\cr &= \\left[ \\frac{ u^3 }{ 3 } - \\frac{ u^5 }{ 5 } \\right]_0^1 \\cr &= \\frac{ 1 }{ 3 } - \\frac{ 1 }{ 5 } = \\frac{ 2 }{ 15 } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$\\frac{ 1 }{ 2 }(\\mathrm{e}^{ \\frac{ \\pi }{ 2 } } + 1)$$ and $$\\frac{ 2 }{ 15 }$$",
            "feedback": "This is incorrect. For part (a), evaluating the boundary term of the first parts integration gives $\\mathrm{e}^0\\cos 0 = 1(1) = 1$. Since this lower limit is subtracted, we get $-1$. Bringing this to the final equation yields $2I = \\mathrm{e}^{ \\frac{ \\pi }{ 2 } } - 1$, which has a subtraction sign, not an addition sign."
        },
        {
            "ans": "$$\\frac{ 1 }{ 2 }(\\mathrm{e}^{ \\frac{ \\pi }{ 2 } } - 1)$$ and $$\\frac{ 8 }{ 15 }$$",
            "feedback": "This is incorrect. While the first parts result is correct, you appear to have made an arithmetic slip in evaluating $\\frac{1}{3} - \\frac{1}{5}$ for the substitution integral. The common denominator is $15$, yielding $\\frac{5}{15} - \\frac{3}{15} = \\frac{2}{15}$, not $\\frac{8}{15}$."
        },
        {
            "ans": "$$\\mathrm{e}^{ \\frac{ \\pi }{ 2 } } - 1$$ and $$\\frac{ 1 }{ 15 }$$",
            "feedback": "This is incorrect. Do not forget that when looping integration by parts, you obtain $2I = \\mathrm{e}^{ \\frac{ \\pi }{ 2 } } - 1$. You must divide the entire expression by $2$ to isolate the integral $I$, yielding $\\frac{1}{2}(\\mathrm{e}^{ \\frac{ \\pi }{ 2 } } - 1)$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Looping Integration by Parts",
        "content": "When integrating products of exponential and trigonometric functions (like $\\mathrm{e}^x \\cos x$), the process is 'looping'or 'recurring' — meaning you will never reach a zero term by differentiating. Instead, you must apply integration by parts twice to reproduce the original integral $I$, group the $I$ terms together on one side of the equation (yielding $2I$), and then divide by $2$ as your final step."
    }
},
{
    "id": "004731",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Calculus",
    "topic": "Differential Equations",
    "subtopic": [
        "Separation of Variables",
        "Linear Equations"
    ],
    "img": false,
    "question": "The variable $y$ satisfies the differential equation:\n$$3\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 4 - 3y$$<br>Given that $y = 1$ when $x = 0$, find an expression for $y$ in terms of $x$.",
    "steps": [
        "Separate the variables to group the terms in $y$ on the left-hand side and the terms in $x$ on the right-hand side:\n\\begin{aligned} \\dfrac{3}{4 - 3y} \\,\\mathrm{d}y = 1 \\,\\mathrm{d}x \\end{aligned}",
        "Integrate both sides of the differential equation. Remember to include a constant of integration, $C$:\n\\begin{aligned} \\int \\dfrac{3}{4 - 3y} \\,\\mathrm{d}y &= \\int 1 \\,\\mathrm{d}x \\cr -\\ln|4 - 3y| &= x + C \\end{aligned}",
        "Apply the initial condition that $y = 1$ when $x = 0$ to find the value of the constant $C$:\n\\begin{aligned} -\\ln|4 - 3(1)| &= 0 + C \\cr -\\ln|1| &= C \\cr C &= 0 \\end{aligned}",
        "Substitute $C = 0$ back into the equation and rearrange to express $y$ explicitly in terms of $x$:\n\\begin{aligned} -\\ln|4 - 3y| &= x \\cr \\ln|4 - 3y| &= -x \\cr 4 - 3y &= e^{ -x } \\cr 3y &= 4 - e^{ -x } \\cr y &= \\dfrac{1}{3}\\left( 4 - e^{ -x } \\right) \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$y = \\dfrac{1}{3}\\left( 4 - e^{ -3x } \\right)$$",
            "feedback": "This error arises from failing to divide the coefficient of $y$ correctly when integrating the left-hand side, leading to a factor of $3$ remaining in the exponent of the exponential term."
        },
        {
            "ans": "$$y = \\dfrac{1}{3}\\left( 4 + e^{ -x } \\right)$$",
            "feedback": "This occurs due to a sign error when removing the logarithm. Removing the logarithm with a negative sign on the left-hand side incorrectly produces $+e^{ -x }$ instead of $-e^{ -x }$ on the right-hand side when isolating $y$."
        },
        {
            "ans": "$$y = 4 - 3e^{ -x }$$",
            "feedback": "This mistake occurs if the constant multiplier $3$ on the left-hand side of the differential equation is completely ignored during integration and algebraic rearrangement."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: The Natural Log Derivative Trap",
        "content": "When integrating an expression of the form $\\int \\dfrac{a}{b + cy} \\,\\mathrm{d}y$, always remember to divide by the coefficient $c$ of the variable $y$. In this case, $\\int \\dfrac{3}{4 - 3y} \\,\\mathrm{d}y = -\\ln|4 - 3y| + C$. A common slip is forgetting the negative sign arising from the $-3y$ term."
    }
},
{
    "id": "004732",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Calculus",
    "topic": "Differential Equations",
    "subtopic": [
        "Separation of Variables",
        "Exponential Integration"
    ],
    "img": false,
    "question": "The variable $y$ satisfies the differential equation:\n$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = y^2 e^{2x}$$<br>Given that $y = 1$ when $x = 0$, find an expression for $y$ in terms of $x$.",
    "steps": [
        "Separate the variables to group the terms in $y$ on the left-hand side and the terms in $x$ on the right-hand side:\n\\begin{aligned} y^{-2} \\,\\mathrm{d}y = e^{2x} \\,\\mathrm{d}x \\end{aligned}",
        "Integrate both sides of the differential equation. Remember to include a constant of integration, $C$:\n\\begin{aligned} \\int y^{-2} \\,\\mathrm{d}y &= \\int e^{2x} \\,\\mathrm{d}x \\cr -\\dfrac{1}{y} &= \\dfrac{1}{2}e^{2x} + C \\end{aligned}",
        "Apply the initial condition that $y = 1$ when $x = 0$ to find the value of the constant $C$:\n\\begin{aligned} -\\dfrac{1}{1} &= \\dfrac{1}{2}e^{0} + C \\cr -1 &= \\dfrac{1}{2} + C \\cr C &= -\\dfrac{3}{2} \\end{aligned}",
        "Substitute $C = -\\dfrac{3}{2}$ back into the equation and rearrange to express $y$ explicitly in terms of $x$:\n\\begin{aligned} -\\dfrac{1}{y} &= \\dfrac{1}{2}e^{2x} - \\dfrac{3}{2} \\cr -\\dfrac{1}{y} &= \\dfrac{e^{2x} - 3}{2} \\cr \\dfrac{1}{y} &= \\dfrac{3 - e^{2x}}{2} \\cr y &= \\dfrac{2}{3 - e^{2x}} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$y = \\dfrac{2}{1 - 3e^{2x}}$$",
            "feedback": "This error is caused by a mistake in the algebraic rearrangement after substituting the initial conditions, incorrectly pairing the constant of integration with the exponential's coefficient."
        },
        {
            "ans": "$$y = \\dfrac{2}{e^{2x} + 1}$$",
            "feedback": "This mistake occurs if the constant of integration $C$ is incorrectly calculated as $-\\dfrac{1}{2}$ instead of $-\\dfrac{3}{2}$ when evaluating the initial boundary conditions."
        },
        {
            "ans": "$$y = -\\dfrac{2}{e^{2x} + 3}$$",
            "feedback": "This error arises from failing to distribute the negative sign on the left-hand side across both terms on the right-hand side when reciprocating to solve for $y$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Fractions and Reciprocals",
        "content": "When you have an equation like $-\\dfrac{1}{y} = \\dfrac{e^{2x} - 3}{2}$, combine the right-hand side into a single fraction before reciprocating. This prevents algebraic slips and makes finding $y$ straightforward: $\\dfrac{1}{y} = \\dfrac{3 - e^{2x}}{2} \\implies y = \\dfrac{2}{3 - e^{2x}}$."
    }
},
{
    "id": "004733",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Calculus",
    "topic": "Differential Equations",
    "subtopic": [
        "Separation of Variables",
        "Logarithmic Integration"
    ],
    "img": false,
    "question": "The variable $y$ satisfies the differential equation:\n$$x \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 2y - 4, \\quad x > 0$$<br>Given that $y = 3$ when $x = 1$, find an expression for $y$ in terms of $x$.",
    "steps": [
        "Separate the variables to group the terms in $y$ on the left-hand side and the terms in $x$ on the right-hand side:\n\\begin{aligned} \\dfrac{1}{2y - 4} \\,\\mathrm{d}y = \\dfrac{1}{x} \\,\\mathrm{d}x \\end{aligned}",
        "Integrate both sides of the differential equation. Remember to include a constant of integration, $C$:\n\\begin{aligned} \\int \\dfrac{1}{2y - 4} \\,\\mathrm{d}y &= \\int \\dfrac{1}{x} \\,\\mathrm{d}x \\cr \\dfrac{1}{2}\\ln|2y - 4| &= \\ln x + C \\end{aligned}",
        "Apply the initial condition that $y = 3$ when $x = 1$ to find the value of the constant $C$:\n\\begin{aligned} \\dfrac{1}{2}\\ln|2(3) - 4| &= \\ln(1) + C \\cr \\dfrac{1}{2}\\ln(2) &= 0 + C \\cr C &= \\dfrac{1}{2}\\ln 2 \\end{aligned}",
        "Substitute $C = \\dfrac{1}{2}\\ln 2$ back into the equation, multiply by $2$, and use logarithm laws to solve for $y$ in terms of $x$:\n\\begin{aligned} \\dfrac{1}{2}\\ln(2y - 4) &= \\ln x + \\dfrac{1}{2}\\ln 2 \\cr \\ln(2y - 4) &= 2\\ln x + \\ln 2 \\cr \\ln(2y - 4) &= \\ln\\left( x^2 \\right) + \\ln 2 \\cr \\ln(2y - 4) &= \\ln\\left( 2x^2 \\right) \\cr 2y - 4 &= 2x^2 \\cr 2y &= 2x^2 + 4 \\cr y &= x^2 + 2 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$y = 2x^2 + 1$$",
            "feedback": "This error occurs if you forget to divide the final constant by $2$ when dividing the entire equation $2y = 2x^2 + 4$ by $2$, or if you made a slip while evaluating the constant of integration."
        },
        {
            "ans": "$$y = x + 2$$",
            "feedback": "This error is caused by a mistake in applying logarithm laws, where $2\\ln x$ is incorrectly simplified to $\\ln(2x)$ instead of $\\ln(x^2)$ before exponentiating."
        },
        {
            "ans": "$$y = x^2 + 1$$",
            "feedback": "This arises from a calculation error when applying the initial conditions, leading to $C = 0$ or an incorrect constant of integration that fails to produce the $+2$ constant term."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Master Logarithm Rules First",
        "content": "When you have $\\ln(2y - 4) = 2\\ln x + \\ln 2$, do not exponentiate term-by-term! You must first combine the right-hand side into a single logarithm using the power and product rules: $2\\ln x + \\ln 2 = \\ln(x^2) + \\ln 2 = \\ln(2x^2)$. Then, you can safely equate the arguments: $2y - 4 = 2x^2$."
    }
},
{
    "id": "004734",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Calculus",
    "topic": "Differential Equations",
    "subtopic": [
        "Separation of Variables",
        "Temperature Modelling"
    ],
    "img": false,
    "question": "An object is cooling in a room of constant temperature. The temperature of the object, $\\theta^\\circ\\text{C}$, $t$ minutes after cooling begins, is modelled by the differential equation:\n$$\\dfrac{\\mathrm{d}\\theta}{\\mathrm{d}t} = -0.1(\\theta - 20)$$<br>Given that the initial temperature of the object is $80^\\circ\\text{C}$ (so $\\theta = 80$ at $t = 0$), solve the differential equation to find $\\theta$ in terms of $t$.",
    "steps": [
        "Separate the variables to group the terms in $\\theta$ on the left-hand side and the terms in $t$ on the right-hand side:\n\\begin{aligned} \\dfrac{1}{\\theta - 20} \\,\\mathrm{d}\\theta = -0.1 \\,\\mathrm{d}t \\end{aligned}",
        "Integrate both sides of the differential equation. Remember to include a constant of integration, $C$:\n\\begin{aligned} \\int \\dfrac{1}{\\theta - 20} \\,\\mathrm{d}\\theta &= \\int -0.1 \\,\\mathrm{d}t \\cr \\ln|\\theta - 20| &= -0.1t + C \\end{aligned}",
        "Apply the initial condition that $\\theta = 80$ when $t = 0$ to find the value of the constant $C$:\n\\begin{aligned} \\ln|80 - 20| &= -0.1(0) + C \\cr C &= \\ln 60 \\end{aligned}",
        "Substitute $C = \\ln 60$ back into the equation, exponentiate, and solve for $\\theta$ in terms of $t$:\n\\begin{aligned} \\ln(\\theta - 20) &= -0.1t + \\ln 60 \\cr \\ln\\left( \\dfrac{\\theta - 20}{60} \\right) &= -0.1t \\cr \\dfrac{\\theta - 20}{60} &= e^{ -0.1t } \\cr \\theta - 20 &= 60e^{ -0.1t } \\cr \\theta &= 20 + 60e^{ -0.1t } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$\\theta = 20 + 80e^{ -0.1t }$$",
            "feedback": "This error occurs if the initial temperature of $80^\\circ\\text{C}$ is directly used as the pre-exponential coefficient without accounting for the constant room temperature offset of $20^\\circ\\text{C}$."
        },
        {
            "ans": "$$\\theta = 20 - 60e^{ -0.1t }$$",
            "feedback": "This results from a sign error when removing the absolute value bars or solving the linear equation, leading to a negative temperature difference."
        },
        {
            "ans": "$$\\theta = 60e^{ -0.1t }$$",
            "feedback": "This mistake happens if you completely forget to add the room temperature offset of $20^\\circ\\text{C}$ back when isolating $\\theta$ at the end of the calculation."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Newton's Law of Cooling Limits",
        "content": "A great way to verify your final equation $\\theta = 20 + 60e^{ -0.1t }$ is to check its physical limits. At $t = 0$, we get $\\theta = 20 + 60(1) = 80^\\circ\\text{C}$, which matches the initial condition. As $t \\to \\infty$, the term $60e^{ -0.1t } \\to 0$, leaving $\\theta \\to 20^\\circ\\text{C}$, which correctly shows the object cools down to room temperature."
    }
},
{
    "id": "004735",
    "board": "WJEC",
    "branch": "Pure",
    "level": "A",
    "major_area": "Calculus",
    "topic": "Differential Equations",
    "subtopic": [
        "Separation of Variables",
        "Trigonometric Integration"
    ],
    "img": false,
    "question": "The variable $y$ satisfies the differential equation:\n$$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3y \\cos(2x)$$<br>Given that $y = e$ when $x = 0$, find an expression for $y$ in terms of $x$.",
    "steps": [
        "Separate the variables to group the terms in $y$ on the left-hand side and the terms in $x$ on the right-hand side:\n\\begin{aligned} \\dfrac{1}{y} \\,\\mathrm{d}y = 3 \\cos(2x) \\,\\mathrm{d}x \\end{aligned}",
        "Integrate both sides of the differential equation. Remember to include a constant of integration, $C$:\n\\begin{aligned} \\int \\dfrac{1}{y} \\,\\mathrm{d}y &= \\int 3 \\cos(2x) \\,\\mathrm{d}x \\cr \\ln|y| &= \\dfrac{3}{2}\\sin(2x) + C \\end{aligned}",
        "Apply the initial condition that $y = e$ when $x = 0$ to find the value of the constant $C$:\n\\begin{aligned} \\ln e &= \\dfrac{3}{2}\\sin(0) + C \\cr 1 &= 0 + C \\cr C &= 1 \\end{aligned}",
        "Substitute $C = 1$ back into the equation and exponentiate to solve for $y$ explicitly in terms of $x$:\n\\begin{aligned} \\ln y &= \\dfrac{3}{2}\\sin(2x) + 1 \\cr y &= e^{ \\frac{3}{2}\\sin(2x) + 1 } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$y = e^{ 6\\sin(2x) + 1 }$$",
            "feedback": "This error is caused by multiplying by $2$ instead of dividing by $2$ when integrating $\\cos(2x)$ on the right-hand side, leading to an incorrect coefficient of $6$ in front of the sine term."
        },
        {
            "ans": "$$y = e^{ 1.5\\sin(2x) }$$",
            "feedback": "This mistake occurs if the constant of integration $C$ is incorrectly assumed to be $0$ instead of $1$ because $\\sin(0) = 0$ was misapplied to the entire boundary equation."
        },
        {
            "ans": "$$y = e^{ -1.5\\sin(2x) + 1 }$$",
            "feedback": "This error arises from a sign mistake during the integration of $\\cos(2x)$, incorrectly integrating it to a negative sine function."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Trigonometric Integration Chain Rule",
        "content": "When integrating trig functions of the form $\\cos(kx)$ or $\\sin(kx)$, always remember to divide by the derivative of the angle, which is $k$. That is, $\\int \\cos(2x) \\,\\mathrm{d}x = \\dfrac{1}{2}\\sin(2x) + C$. Forgetting this is one of the most common calculus slips at A level."
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
    "question": "A curve is defined implicitly by:\n$$2x^2y + y^2 - 3x = 27$$<br>Find the equation of the normal to the curve at the point $(2, 3)$, giving your answer in the form $ax + by + c = 0$, where $a, b, c$ are integers.",
    "steps": [
        "Differentiate the implicit equation with respect to $x$, applying the product rule to the term $2x^2y$:\n\\begin{aligned} \\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left( 2x^2y + y^2 - 3x \\right) &= \\dfrac{\\mathrm{d}}{\\mathrm{d}x}(27) \\cr \\left( 4xy + 2x^2\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\right) + 2y\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} - 3 &= 0 \\end{aligned}",
        "Substitute the coordinates of the point $(2, 3)$ into the differentiated equation to solve for the gradient of the tangent, $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$:\n\\begin{aligned} 4(2)(3) + 2\\left( 2^2 \\right)\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} + 2(3)\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} - 3 &= 0 \\cr 24 + 8\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} + 6\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} - 3 &= 0 \\cr 14\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} + 21 &= 0 \\cr \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= -\\dfrac{3}{2} \\end{aligned}",
        "Find the gradient of the normal, $m_n$, using the perpendicular gradient relationship $m_n = -\\dfrac{1}{m_t}$, where $m_t$ is the tangent gradient:\n\\begin{aligned} m_n &= -\\dfrac{1}{-\\frac{3}{2}} \\cr m_n &= \\dfrac{2}{3} \\end{aligned}",
        "Use the straight-line equation $y - y_1 = m_n(x - x_1)$ with the point $(2, 3)$ and gradient $m_n = \\dfrac{2}{3}$ to find the equation of the normal:\n\\begin{aligned} y - 3 &= \\dfrac{2}{3}(x - 2) \\cr 3(y - 3) &= 2(x - 2) \\cr 3y - 9 &= 2x - 4 \\cr 2x - 3y + 5 &= 0 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$2x - 3y - 5 = 0$$",
            "feedback": "This error is caused by a sign mistake when expanding the brackets on the right-hand side, leading to $2x - 4$ being incorrectly rearranged with a sign error."
        },
        {
            "ans": "$$3x + 2y - 12 = 0$$",
            "feedback": "This error arises if you use the tangent gradient $m_t = -\\dfrac{3}{2}$ instead of the normal gradient $m_n = \\dfrac{2}{3}$ when formulating the straight-line equation."
        },
        {
            "ans": "$$2x + 3y - 13 = 0$$",
            "feedback": "This mistake occurs if the normal gradient is incorrectly calculated as $-\\dfrac{2}{3}$ instead of $\\dfrac{2}{3}$ due to a sign error when finding the negative reciprocal of the tangent gradient."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Product Rule in Implicit Differentiation",
        "content": "A very common pitfall in implicit differentiation is failing to apply the product rule to terms like $2x^2y$. Remember that both $x$ and $y$ are variables, so $\\dfrac{\\mathrm{d}}{\\mathrm{d}x}(2x^2y) = 4xy + 2x^2\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$. Write down the terms clearly before differentiating."
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
    "question": "A curve is defined implicitly by:\n$$x^2y^2 - 2x + 3y = 3$$<br>Find the equation of the normal to the curve at the point $(2, 1)$, giving your answer in the form $ax + by + c = 0$, where $a, b, c$ are integers.",
    "steps": [
        "Differentiate the implicit equation with respect to $x$, applying the product rule to the term $x^2y^2$:\n\\begin{aligned} \\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left( x^2y^2 - 2x + 3y \\right) &= \\dfrac{\\mathrm{d}}{\\mathrm{d}x}(3) \\cr \\left( 2xy^2 + 2x^2y\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\right) - 2 + 3\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= 0 \\end{aligned}",
        "Substitute the coordinates of the point $(2, 1)$ into the differentiated equation to solve for the gradient of the tangent, $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$:\n\\begin{aligned} 2(2)\\left( 1^2 \\right) + 2\\left( 2^2 \\right)(1)\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} - 2 + 3\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= 0 \\cr 4 + 8\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} - 2 + 3\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= 0 \\cr 11\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} + 2 &= 0 \\cr \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= -\\dfrac{2}{11} \\end{aligned}",
        "Find the gradient of the normal, $m_n$, using the perpendicular gradient relationship $m_n = -\\dfrac{1}{m_t}$, where $m_t$ is the tangent gradient:\n\\begin{aligned} m_n &= -\\dfrac{1}{-\\frac{2}{11}} \\cr m_n &= \\dfrac{11}{2} \\end{aligned}",
        "Use the straight-line equation $y - y_1 = m_n(x - x_1)$ with the point $(2, 1)$ and gradient $m_n = \\dfrac{11}{2}$ to find the equation of the normal:\n\\begin{aligned} y - 1 &= \\dfrac{11}{2}(x - 2) \\cr 2(y - 1) &= 11(x - 2) \\cr 2y - 2 &= 11x - 22 \\cr 11x - 2y - 20 &= 0 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$11x - 2y - 24 = 0$$",
            "feedback": "This error is caused by a sign slip when expanding the brackets on the right-hand side, writing $-24$ instead of $-22$ before moving all terms to one side."
        },
        {
            "ans": "$$2x + 11y - 15 = 0$$",
            "feedback": "This error arises if you use the tangent gradient $m_t = -\\dfrac{2}{11}$ instead of the normal gradient $m_n = \\dfrac{11}{2}$ when constructing the linear equation."
        },
        {
            "ans": "$$11x + 2y - 24 = 0$$",
            "feedback": "This mistake occurs if the normal gradient is incorrectly calculated as $-\\dfrac{11}{2}$ due to a sign error when computing the negative reciprocal."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Substituting Before Isolating dy/dx",
        "content": "When performing implicit differentiation to find gradients at a specific point, it is almost always easier to substitute the coordinates $(x, y)$ immediately after differentiating, rather than algebraically rearranging the equation to make $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ the subject. This saves time and avoids algebraic mistakes."
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
    "question": "A curve is defined implicitly by:\n$$y^2 e^{x - 1} + 3x - 2y = 3$$<br>Find the equation of the normal to the curve at the point $(1, 2)$, giving your answer in the form $ax + by + c = 0$, where $a, b, c$ are integers.",
    "steps": [
        "Differentiate the implicit equation with respect to $x$, applying the product rule and chain rule to the term $y^2 e^{x - 1}$:\n\\begin{aligned} \\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left( y^2 e^{x - 1} + 3x - 2y \\right) &= \\dfrac{\\mathrm{d}}{\\mathrm{d}x}(3) \\cr \\left( y^2 e^{x - 1} + 2y e^{x - 1}\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\right) + 3 - 2\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= 0 \\end{aligned}",
        "Substitute the coordinates of the point $(1, 2)$ into the differentiated equation to solve for the gradient of the tangent, $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$:\n\\begin{aligned} \\left( 2^2 \\right) e^{ 1 - 1 } + 2(2) e^{ 1 - 1 }\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} + 3 - 2\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= 0 \\cr 4(1) + 4(1)\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} + 3 - 2\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= 0 \\cr 7 + 2\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= 0 \\cr \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= -\\dfrac{7}{2} \\end{aligned}",
        "Find the gradient of the normal, $m_n$, using the perpendicular gradient relationship $m_n = -\\dfrac{1}{m_t}$, where $m_t$ is the tangent gradient:\n\\begin{aligned} m_n &= -\\dfrac{1}{-\\frac{7}{2}} \\cr m_n &= \\dfrac{2}{7} \\end{aligned}",
        "Use the straight-line equation $y - y_1 = m_n(x - x_1)$ with the point $(1, 2)$ and gradient $m_n = \\dfrac{2}{7}$ to find the equation of the normal:\n\\begin{aligned} y - 2 &= \\dfrac{2}{7}(x - 1) \\cr 7(y - 2) &= 2(x - 1) \\cr 7y - 14 &= 2x - 2 \\cr 2x - 7y + 12 &= 0 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$2x - 7y + 16 = 0$$",
            "feedback": "This error is caused by expanding the brackets incorrectly as $2x - 1$ instead of $2x - 2$ on the right-hand side, or a similar transposition slip."
        },
        {
            "ans": "$$7x + 2y - 11 = 0$$",
            "feedback": "This error arises if you use the tangent gradient $m_t = -\\dfrac{7}{2}$ instead of the normal gradient $m_n = \\dfrac{2}{7}$ when constructing the straight line."
        },
        {
            "ans": "$$2x + 7y - 16 = 0$$",
            "feedback": "This mistake occurs if the normal gradient is incorrectly calculated as $-\\dfrac{2}{7}$ instead of $\\dfrac{2}{7}$ due to a sign error."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Exponential Chain Rule with Implicit Terms",
        "content": "When differentiating a term like $y^2 e^{x - 1}$, do not forget that $y$ is a function of $x$. Differentiating $y^2$ with respect to $x$ yields $2y \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$, while $e^{x-1}$ differentiates to $e^{x-1}$. Keep these separate as factors $u$ and $v$ to successfully execute the product rule."
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
    "question": "A curve is defined implicitly by:\n$$x^2 \\ln y + 4xy + y^2 = 5$$<br>Find the equation of the normal to the curve at the point $(1, 1)$, giving your answer in the form $ax + by + c = 0$, where $a, b, c$ are integers.",
    "steps": [
        "Differentiate the implicit equation with respect to $x$, applying the product rule to the terms $x^2 \\ln y$ and $4xy$:\n\\begin{aligned} \\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left( x^2 \\ln y + 4xy + y^2 \\right) &= \\dfrac{\\mathrm{d}}{\\mathrm{d}x}(5) \\cr \\left( 2x\\ln y + x^2\\dfrac{1}{y}\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\right) + \\left( 4y + 4x\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\right) + 2y\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= 0 \\end{aligned}",
        "Substitute the coordinates of the point $(1, 1)$ into the differentiated equation to solve for the gradient of the tangent, $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$:\n\\begin{aligned} 2(1)\\ln(1) + 1^2\\left( \\dfrac{1}{1} \\right)\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} + 4(1) + 4(1)\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} + 2(1)\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= 0 \\cr 0 + \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} + 4 + 4\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} + 2\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= 0 \\cr 4 + 7\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= 0 \\cr \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= -\\dfrac{4}{7} \\end{aligned}",
        "Find the gradient of the normal, $m_n$, using the perpendicular gradient relationship $m_n = -\\dfrac{1}{m_t}$, where $m_t$ is the tangent gradient:\n\\begin{aligned} m_n &= -\\dfrac{1}{-\\frac{4}{7}} \\cr m_n &= \\dfrac{7}{4} \\end{aligned}",
        "Use the straight-line equation $y - y_1 = m_n(x - x_1)$ with the point $(1, 1)$ and gradient $m_n = \\dfrac{7}{4}$ to find the equation of the normal:\n\\begin{aligned} y - 1 &= \\dfrac{7}{4}(x - 1) \\cr 4(y - 1) &= 7(x - 1) \\cr 4y - 4 &= 7x - 7 \\cr 7x - 4y - 3 &= 0 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$7x - 4y + 3 = 0$$",
            "feedback": "This error is caused by a sign slip when expanding the brackets on the right-hand side, leading to an incorrect constant in the final linear equation."
        },
        {
            "ans": "$$4x + 7y - 11 = 0$$",
            "feedback": "This error arises if you use the tangent gradient $m_t = -\\dfrac{4}{7}$ instead of the normal gradient $m_n = \\dfrac{7}{4}$ when constructing the linear equation."
        },
        {
            "ans": "$$7x + 4y - 11 = 0$$",
            "feedback": "This mistake occurs if the normal gradient is incorrectly calculated as $-\\dfrac{7}{4}$ instead of $\\dfrac{7}{4}$ due to a sign error."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Logarithmic Derivative Checklist",
        "content": "When differentiating a logarithmic term with an implicit variable, such as $\\ln y$, the chain rule applies: $\\dfrac{\\mathrm{d}}{\\mathrm{d}x}(\\ln y) = \\dfrac{1}{y} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$. If there is a product like $x^2 \\ln y$, do not skip terms in the expansion: $(2x)\\ln y + x^2\\left(\\dfrac{1}{y} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right)$."
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
    "question": "A curve is defined implicitly by:\n$$\\dfrac{x}{y} + y^2 - 3x = -1$$<br>Find the equation of the normal to the curve at the point $(2, 2)$, giving your answer in the form $ax + by + c = 0$, where $a, b, c$ are integers.",
    "steps": [
        "Differentiate the implicit equation with respect to $x$, applying the quotient rule (or product rule with negative exponents) to the term $\\dfrac{x}{y}$:\n\\begin{aligned} \\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left( \\dfrac{x}{y} + y^2 - 3x \\right) &= \\dfrac{\\mathrm{d}}{\\mathrm{d}x}(-1) \\cr \\dfrac{y - x\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}}{y^2} + 2y\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} - 3 &= 0 \\end{aligned}",
        "Substitute the coordinates of the point $(2, 2)$ into the differentiated equation to solve for the gradient of the tangent, $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$:\n\\begin{aligned} \\dfrac{2 - 2\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}}{2^2} + 2(2)\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} - 3 &= 0 \\cr \\dfrac{2 - 2\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}}{4} + 4\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} - 3 &= 0 \\cr \\dfrac{1}{2} - \\dfrac{1}{2}\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} + 4\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} - 3 &= 0 \\cr \\dfrac{7}{2}\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} - \\dfrac{5}{2} &= 0 \\cr \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= \\dfrac{5}{7} \\end{aligned}",
        "Find the gradient of the normal, $m_n$, using the perpendicular gradient relationship $m_n = -\\dfrac{1}{m_t}$, where $m_t$ is the tangent gradient:\n\\begin{aligned} m_n &= -\\dfrac{1}{\\frac{5}{7}} \\cr m_n &= -\\dfrac{7}{5} \\end{aligned}",
        "Use the straight-line equation $y - y_1 = m_n(x - x_1)$ with the point $(2, 2)$ and gradient $m_n = -\\dfrac{7}{5}$ to find the equation of the normal:\n\\begin{aligned} y - 2 &= -\\dfrac{7}{5}(x - 2) \\cr 5(y - 2) &= -7(x - 2) \\cr 5y - 10 &= -7x + 14 \\cr 7x + 5y - 24 &= 0 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$7x + 5y + 4 = 0$$",
            "feedback": "This error is caused by a sign mistake when expanding $-7(x - 2)$ to $-7x - 14$ instead of $-7x + 14$ on the right-hand side."
        },
        {
            "ans": "$$5x - 7y + 4 = 0$$",
            "feedback": "This error arises if you use the tangent gradient $m_t = \\dfrac{5}{7}$ instead of the normal gradient $m_n = -\\dfrac{7}{5}$ when constructing the linear equation."
        },
        {
            "ans": "$$7x - 5y - 4 = 0$$",
            "feedback": "This mistake occurs if the normal gradient is incorrectly calculated as $\\dfrac{7}{5}$ instead of $-\\dfrac{7}{5}$ due to a sign error when finding the negative reciprocal."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Quotient Rule vs. Product Rule in Calculus",
        "content": "When differentiating a term like $\\dfrac{x}{y}$, using the product rule on $x y^{-1}$ can sometimes be less error-prone than the quotient rule. For $x y^{-1}$, the derivative is $y^{-1} - x y^{-2} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$. Both methods yield the exact same result, so choose the one you feel more confident with!"
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
    "question": "<strong>(a)</strong> By drawing suitable graphs, show that the equation:\n$$x - 2 = \\sin x$$\nhas only one root.<br><strong>(b)</strong> Starting with $x_0 = 2.5$, use the Newton-Raphson method to find the value of this root correct to two decimal places.",
    "steps": [
        "To show that the equation has only one root, rewrite it as $x - 2 = \\sin x$ and sketch the curves $y = x - 2$ and $y = \\sin x$:\n<br><br><img src='images/Pure/004741_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>\nThe line $y = x - 2$ has a gradient of $1$ and crosses the $y$-axis at $(0, -2)$. The wave $y = \\sin x$ has a maximum gradient of $1$ (at $x = 0$) and oscillates between $-1$ and $1$. As shown in the sketch, the graphs intersect at exactly one point, so there is only one root, $\\alpha$.",
        "Define $f(x) = x - 2 - \\sin x$. To apply the Newton-Raphson method, we first find the derivative, $f'(x)$:\n\\begin{aligned} f'(x) &= 1 - \\cos x \\end{aligned}\nNow set up the Newton-Raphson iteration formula:\n\\begin{aligned} x_{ n+1 } &= x_{ n } - \\dfrac{ f(x_{ n }) }{ f'(x_{ n }) } \\cr x_{ n+1 } &= x_{ n } - \\dfrac{ x_{ n } - 2 - \\sin x_{ n } }{ 1 - \\cos x_{ n } } \\end{aligned}",
        "Perform the iterations using radians, starting with $x_0 = 2.5$:\n\\begin{aligned} x_1 &= 2.5 - \\dfrac{ 2.5 - 2 - \\sin(2.5) }{ 1 - \\cos(2.5) } \\cr x_1 &\\approx 2.5 - \\dfrac{ -0.09847 }{ 1.80114 } \\cr x_1 &\\approx 2.55467 \\cr\\cr x_2 &= 2.55467 - \\dfrac{ 2.55467 - 2 - \\sin(2.55467) }{ 1 - \\cos(2.55467) } \\cr x_2 &\\approx 2.55420 \\end{aligned}",
        "Since the values of $x_1$ and $x_2$ both round to $2.55$ to two decimal places, the root is $\\alpha \\approx 2.55$."
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
    "question": "<strong>(a)</strong> By drawing suitable graphs, show that the equation:\n$$e^x + x = 3$$\nhas only one root.<br><strong>(b)</strong> Starting with $x_0 = 1$, use the Newton-Raphson method to find the value of this root correct to two decimal places.",
    "steps": [
        "To show that the equation has only one root, rewrite it as $e^x = 3 - x$ and sketch the curves $y = e^x$ and $y = 3 - x$:\n<br><br><img src='images/Pure/004742_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>\nThe curve $y = e^x$ is strictly increasing, while the straight line $y = 3 - x$ has a gradient of $-1$ and is strictly decreasing. As shown in the sketch, they intersect at exactly one point, proving that there is only one root, $\\alpha$.",
        "Define $f(x) = e^x + x - 3$. To apply the Newton-Raphson method, we first find the derivative, $f'(x)$:\n\\begin{aligned} f'(x) &= e^x + 1 \\end{aligned}\nNow set up the Newton-Raphson iteration formula:\n\\begin{aligned} x_{ n+1 } &= x_{ n } - \\dfrac{ f(x_{ n }) }{ f'(x_{ n }) } \\cr x_{ n+1 } &= x_{ n } - \\dfrac{ e^{ x_{ n } } + x_{ n } - 3 }{ e^{ x_{ n } } + 1 } \\end{aligned}",
        "Perform the iterations starting with $x_0 = 1$:\n\\begin{aligned} x_1 &= 1 - \\dfrac{ e^1 + 1 - 3 }{ e^1 + 1 } \\cr x_1 &= 1 - \\dfrac{ e - 2 }{ e + 1 } \\cr x_1 &\\approx 0.80682 \\cr\\cr x_2 &= 0.80682 - \\dfrac{ e^{ 0.80682 } + 0.80682 - 3 }{ e^{ 0.80682 } + 1 } \\cr x_2 &\\approx 0.79212 \\cr\\cr x_3 &= 0.79212 - \\dfrac{ e^{ 0.79212 } + 0.79212 - 3 }{ e^{ 0.79212 } + 1 } \\cr x_3 &\\approx 0.79206 \\end{aligned}",
        "Since successive iterations converge to $0.79$ to two decimal places, the root is $\\alpha \\approx 0.79$."
    ],
    "pi_options": [
        {
            "ans": "$$0.81$$",
            "feedback": "This error occurs if you stop after only one iteration ($x_1$) instead of iterating further to ensure convergence to two decimal places."
        },
        {
            "ans": "$$0.75$$",
            "feedback": "This is caused by an arithmetic slip in the numerator of the Newton-Raphson fraction, such as calculating $e^1 + 1 - 3$ incorrectly."
        },
        {
            "ans": "$$0.85$$",
            "feedback": "This mistake occurs if the derivative is incorrectly calculated as $f'(x) = e^x$ (forgetting to differentiate the $x$ term)."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: How Many Iterations Are Enough?",
        "content": "To guarantee that a root is correct to $2$ decimal places, always iterate until two successive values agree when rounded to that precision. Stopping too early (for instance, after $x_1$) is a very common way to lose marks."
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
    "question": "<strong>(a)</strong> By drawing suitable graphs, show that the equation:\n$$\\ln x = 2 - x$$\nhas only one root.<br><strong>(b)</strong> Starting with $x_0 = 1.5$, use the Newton-Raphson method to find the value of this root correct to two decimal places.",
    "steps": [
        "To show that the equation has only one root, sketch the curves $y = \\ln x$ and $y = 2 - x$ for $x > 0$:\n<br><br><img src='images/Pure/004743_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>\nThe logarithmic curve $y = \\ln x$ is strictly increasing, while the straight line $y = 2 - x$ is strictly decreasing. They intersect at exactly one point, proving that there is only one root, $\\alpha$.",
        "Define $f(x) = \\ln x + x - 2$. To apply the Newton-Raphson method, we first find the derivative, $f'(x)$:\n\\begin{aligned} f'(x) &= \\dfrac{1}{x} + 1 \\end{aligned}\nNow set up the Newton-Raphson iteration formula:\n\\begin{aligned} x_{ n+1 } &= x_{ n } - \\dfrac{ f(x_{ n }) }{ f'(x_{ n }) } \\cr x_{ n+1 } &= x_{ n } - \\dfrac{ \\ln x_{ n } + x_{ n } - 2 }{ \\dfrac{1}{x_{ n }} + 1 } \\end{aligned}",
        "Perform the iterations starting with $x_0 = 1.5$:\n\\begin{aligned} x_1 &= 1.5 - \\dfrac{ \\ln(1.5) + 1.5 - 2 }{ \\dfrac{1}{1.5} + 1 } \\cr x_1 &\\approx 1.5 - \\dfrac{ -0.09453 }{ 1.66667 } \\cr x_1 &\\approx 1.55672 \\cr\\cr x_2 &= 1.55672 - \\dfrac{ \\ln(1.55672) + 1.55672 - 2 }{ \\dfrac{1}{1.55672} + 1 } \\cr x_2 &\\approx 1.55714 \\end{aligned}",
        "Since successive iterations converge to $1.56$ to two decimal places, the root is $\\alpha \\approx 1.56$."
    ],
    "pi_options": [
        {
            "ans": "$$1.50$$",
            "feedback": "This error occurs if you stop at the initial guess $x_0$ without carrying out any Newton-Raphson iterations."
        },
        {
            "ans": "$$1.61$$",
            "feedback": "This mistake happens if you differentiate $\\ln x$ incorrectly (for example, as $\\dfrac{1}{x^2}$), leading to an incorrect derivative in the denominator."
        },
        {
            "ans": "$$1.48$$",
            "feedback": "This is caused by a sign error on the numerator, subtracting the correction term incorrectly or adding it instead of subtracting."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Simplifying Complex Fractions",
        "content": "When dealing with derivatives containing reciprocal terms like $f'(x) = \\dfrac{1}{x} + 1$, you can multiply the numerator and denominator of the Newton-Raphson fraction by $x$ to simplify it algebraically: $x - \\dfrac{x(\\ln x + x - 2)}{1 + x}$. This makes calculator entries much cleaner and less prone to typing errors."
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
    "question": "<strong>(a)</strong> By drawing suitable graphs, show that the equation:\n$$\\dfrac{1}{x} = x^2 - 1$$\nhas only one positive root.<br><strong>(b)</strong> Starting with $x_0 = 1.3$, apply the Newton-Raphson method to $f(x) = x^2 - 1 - \\dfrac{1}{x}$ to find the value of this root correct to two decimal places.",
    "steps": [
        "To show that the equation has only one positive root, sketch the curves $y = \\dfrac{1}{x}$ and $y = x^2 - 1$ for $x > 0$:\n<br><br><img src='images/Pure/004744_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>\nFor $x > 0$, the reciprocal curve $y = \\dfrac{1}{x}$ is strictly decreasing, while the parabola $y = x^2 - 1$ is strictly increasing. As shown in the sketch, they intersect at exactly one positive point, proving that there is only one positive root, $\\alpha$.",
        "We are given $f(x) = x^2 - 1 - \\dfrac{1}{x} = x^2 - 1 - x^{-1}$. Differentiate with respect to $x$ to find $f'(x)$:\n\\begin{aligned} f'(x) &= 2x + x^{-2} \\cr f'(x) &= 2x + \\dfrac{1}{x^2} \\end{aligned}\nNow set up the Newton-Raphson iteration formula:\n\\begin{aligned} x_{ n+1 } &= x_{ n } - \\dfrac{ f(x_{ n }) }{ f'(x_{ n }) } \\cr x_{ n+1 } &= x_{ n } - \\dfrac{ x_{ n }^2 - 1 - \\dfrac{1}{x_{ n }} }{ 2x_{ n } + \\dfrac{1}{x_{ n }^2} } \\end{aligned}",
        "Perform the iterations starting with $x_0 = 1.3$:\n\\begin{aligned} x_1 &= 1.3 - \\dfrac{ 1.3^2 - 1 - \\dfrac{1}{1.3} }{ 2(1.3) + \\dfrac{1}{1.3^2} } \\cr x_1 &\\approx 1.3 - \\dfrac{ -0.07923 }{ 3.191715 } \\cr x_1 &\\approx 1.32482 \\cr\\cr x_2 &= 1.32482 - \\dfrac{ 1.32482^2 - 1 - \\dfrac{1}{1.32482} }{ 2(1.32482) + \\dfrac{1}{1.32482^2} } \\cr x_2 &\\approx 1.32472 \\end{aligned}",
        "Since successive iterations round to $1.32$ to two decimal places, the root is $\\alpha \\approx 1.32$."
    ],
    "pi_options": [
        {
            "ans": "$$1.30$$",
            "feedback": "This error occurs if you assume the initial guess $x_0$ is already the final root without performing any iterations."
        },
        {
            "ans": "$$1.35$$",
            "feedback": "This mistake happens if you differentiate $-x^{-1}$ incorrectly as $-x^{-2}$, which leads to a minus sign in the derivative: $f'(x) = 2x - \\dfrac{1}{x^2}$."
        },
        {
            "ans": "$$1.28$$",
            "feedback": "This is caused by a sign error in the Newton-Raphson step, adding the correction fraction instead of subtracting it from $x_n$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Differentiating Negative Powers",
        "content": "Take extra care when differentiating terms with negative exponents, such as $-x^{-1}$. According to the power rule, $\\dfrac{\\mathrm{d}}{\\mathrm{d}x}(-x^{-1}) = -(-1)x^{-2} = +x^{-2} = +\\dfrac{1}{x^2}$. A sign slip here is highly penalised in exams."
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
    "question": "<strong>(a)</strong> By drawing suitable graphs, show that the equation:\n$$x^2 = \\cos x$$\nhas only one positive root.<br><strong>(b)</strong> Starting with $x_0 = 0.8$, use the Newton-Raphson method to find the value of this positive root correct to two decimal places.",
    "steps": [
        "To show that the equation has only one positive root, sketch the curves $y = x^2$ and $y = \\cos x$:\n<br><br><img src='images/Pure/004745_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>\nThe parabola $y = x^2$ is symmetric about the $y$-axis and strictly increasing for $x > 0$. The curve $y = \\cos x$ starts at $(0, 1)$ and decreases to $0$ at $x = \\dfrac{\\pi}{2}$. As shown in the sketch, they intersect at exactly one positive point, proving there is only one positive root, $\\alpha$.",
        "Define $f(x) = x^2 - \\cos x$. Differentiate with respect to $x$ to find $f'(x)$:\n\\begin{aligned} f'(x) &= 2x - (-\\sin x) \\cr f'(x) &= 2x + \\sin x \\end{aligned}\nNow set up the Newton-Raphson iteration formula:\n\\begin{aligned} x_{ n+1 } &= x_{ n } - \\dfrac{ f(x_{ n }) }{ f'(x_{ n }) } \\cr x_{ n+1 } &= x_{ n } - \\dfrac{ x_{ n }^2 - \\cos x_{ n } }{ 2x_{ n } + \\sin x_{ n } } \\end{aligned}",
        "Perform the iterations using radians, starting with $x_0 = 0.8$:\n\\begin{aligned} x_1 &= 0.8 - \\dfrac{ 0.8^2 - \\cos(0.8) }{ 2(0.8) + \\sin(0.8) } \\cr x_1 &\\approx 0.8 - \\dfrac{ -0.05670 }{ 2.31735 } \\cr x_1 &\\approx 0.82447 \\cr\\cr x_2 &= 0.82447 - \\dfrac{ 0.82447^2 - \\cos(0.82447) }{ 2(0.82447) + \\sin(0.82447) } \\cr x_2 &\\approx 0.82413 \\end{aligned}",
        "Since successive iterations round to $0.82$ to two decimal places, the root is $\\alpha \\approx 0.82$."
    ],
    "pi_options": [
        {
            "ans": "$$0.80$$",
            "feedback": "This error occurs if you stop at the initial guess $x_0$ without carrying out any Newton-Raphson iterations."
        },
        {
            "ans": "$$0.77$$",
            "feedback": "This is caused by a sign error when differentiating $-\\cos x$. If you incorrectly write $f'(x) = 2x - \\sin x$, your denominator will be incorrect."
        },
        {
            "ans": "$$0.91$$",
            "feedback": "This mistake happens if your calculator is set to degree mode instead of radian mode when evaluating $\\sin x_n$ and $\\cos x_n$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Differentiating Negative Trigonometric Terms",
        "content": "Differentiating $-\\cos x$ involves two negative signs: $\\dfrac{\\mathrm{d}}{\\mathrm{d}x}(-\\cos x) = -(-\\sin x) = +\\sin x$. Forgetting that the derivative of cosine is negative is one of the most common sign mistakes made by students."
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
    "question": "A curve is given by the equation:\n$$2x^4 + 5y^3 = 10$$<br>By using implicit differentiation, find $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ in terms of $x$ and $y$.",
    "steps": [
        "Differentiate both sides of the equation with respect to $x$. When differentiating terms in $y$, apply the chain rule by multiplying by $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$:\n\\begin{aligned} \\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left( 2x^4 \\right) + \\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left( 5y^3 \\right) &= \\dfrac{\\mathrm{d}}{\\mathrm{d}x}(10) \\cr 8x^3 + 15y^2 \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= 0 \\end{aligned}",
        "Rearrange the equation to isolate the derivative term $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$:\n\\begin{aligned} 15y^2 \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= -8x^3 \\cr \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= -\\dfrac{ 8x^3 }{ 15y^2 } \\end{aligned}"
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
    "question": "A curve is given by the equation:\n$$y^2 + 2xy - x^3 = 7$$<br>By using implicit differentiation, find $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ in terms of $x$ and $y$.",
    "steps": [
        "Differentiate both sides of the equation with respect to $x$. Apply the product rule to the term $2xy$:\n\\begin{aligned} \\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left( y^2 \\right) + \\dfrac{\\mathrm{d}}{\\mathrm{d}x}(2xy) - \\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left( x^3 \\right) &= \\dfrac{\\mathrm{d}}{\\mathrm{d}x}(7) \\cr 2y \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} + \\left( 2y + 2x \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\right) - 3x^2 &= 0 \\end{aligned}",
        "Group the terms containing $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ on one side and move the other terms to the opposite side:\n\\begin{aligned} 2y \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} + 2x \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= 3x^2 - 2y \\cr \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}(2x + 2y) &= 3x^2 - 2y \\end{aligned}",
        "Isolate $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ by dividing by the factor $(2x + 2y)$:\n\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= \\dfrac{ 3x^2 - 2y }{ 2x + 2y } \\end{aligned}"
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
    "question": "A curve is given by the equation:\n$$y \\sin x + e^y = 5$$<br>By using implicit differentiation, find $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ in terms of $x$ and $y$.",
    "steps": [
        "Differentiate both sides with respect to $x$, applying the product rule to $y \\sin x$ and the chain rule to $e^y$:\n\\begin{aligned} \\dfrac{\\mathrm{d}}{\\mathrm{d}x}(y \\sin x) + \\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left( e^y \\right) &= \\dfrac{\\mathrm{d}}{\\mathrm{d}x}(5) \\cr \\left( \\sin x \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} + y \\cos x \\right) + e^y \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= 0 \\end{aligned}",
        "Factor out $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ from the relevant terms and rearrange to solve for the derivative:\n\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\left( \\sin x + e^y \\right) + y \\cos x &= 0 \\cr \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\left( \\sin x + e^y \\right) &= -y \\cos x \\cr \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= -\\dfrac{ y \\cos x }{ \\sin x + e^y } \\end{aligned}"
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
    "question": "A curve is given by the equation:\n$$x^2 \\ln y + y = 3x$$<br>By using implicit differentiation, find $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ in terms of $x$ and $y$.",
    "steps": [
        "Differentiate both sides with respect to $x$, applying the product rule to $x^2 \\ln y$:\n\\begin{aligned} \\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left( x^2 \\ln y \\right) + \\dfrac{\\mathrm{d}}{\\mathrm{d}x}(y) &= \\dfrac{\\mathrm{d}}{\\mathrm{d}x}(3x) \\cr \\left( 2x \\ln y + x^2 \\cdot \\dfrac{1}{y} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\right) + \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= 3 \\end{aligned}",
        "Factor out $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ on the left-hand side and move the other terms to the right-hand side:\n\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\left( \\dfrac{x^2}{y} + 1 \\right) &= 3 - 2x \\ln y \\end{aligned}",
        "Multiply the entire equation by $y$ to clear the fraction and solve for $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$:\n\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\left( x^2 + y \\right) &= y(3 - 2x \\ln y) \\cr \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= \\dfrac{ 3y - 2xy \\ln y }{ x^2 + y } \\end{aligned}"
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
    "question": "A curve is defined implicitly by the equation:\n$$3x^2 - y^3 + 2xy = 12$$<br>Find the gradient of the curve at the point $(2, 2)$..",
    "steps": [
        "Differentiate the implicit equation with respect to $x$, using the chain rule for $y^3$ and the product rule for $2xy$:\n\\begin{aligned} \\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left( 3x^2 - y^3 + 2xy \\right) &= \\dfrac{\\mathrm{d}}{\\mathrm{d}x}(12) \\cr 6x - 3y^2 \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} + \\left( 2y + 2x \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\right) &= 0 \\end{aligned}",
        "Group the terms containing $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ and express $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ in terms of $x$ and $y$:\n\\begin{aligned} \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\left( 2x - 3y^2 \\right) + 6x + 2y &= 0 \\cr \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\left( 2x - 3y^2 \\right) &= -6x - 2y \\cr \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} &= \\dfrac{ 6x + 2y }{ 3y^2 - 2x } \\end{aligned}",
        "Substitute the coordinates $(2, 2)$ into the derivative formula to calculate the numerical gradient:\n\\begin{aligned} \\text{Gradient} &= \\dfrac{ 6(2) + 2(2) }{ 3\\left(2^2\\right) - 2(2) } \\cr \\text{Gradient} &= \\dfrac{ 12 + 4 }{ 12 - 4 } \\cr \\text{Gradient} &= \\dfrac{ 16 }{ 8 } \\cr \\text{Gradient} &= 2 \\end{aligned}"
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