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
        "To isolate $n$, we take natural logarithms on both sides of the inequality: <br> \\begin{aligned} \\ln(1.2^n) &&> \\ln(41) \\cr n\\ln(1.2) &> \\ln(41) \\cr n &> \\dfrac{ \\ln(41) }{ \\ln(1.2) } \\end{aligned} <br> Since $r = 1.2 > 1$, we have $\\ln(1.2) > 0$. Therefore, dividing by $\\ln(1.2)$ does not reverse the direction of our inequality sign.",
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
}
];