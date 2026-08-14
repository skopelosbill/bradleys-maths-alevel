window.ALEVEL_QUESTIONS = [
{
    "id": "004701",
    "board": "WJEC",
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
}
];