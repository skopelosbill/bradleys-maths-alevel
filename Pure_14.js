window.ALEVEL_QUESTIONS = [
{
    "id": "004651",
    "board": "OCR MEI",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "Inverse of Exponential Function"
    ],
    "img": false,
    "question": "In this question you must show detailed reasoning.<br><br>The function $f(x) = \\dfrac{ \\mathrm{e}^x }{ 2 - \\mathrm{e}^x }$ is defined on the domain $x \\in \\mathbb{ R }$, $x \\neq \\ln 2$.<br><br><strong>(i)</strong> Find $f^{-1}(x)$.<br><strong>(ii)</strong> Write down the range of $f^{-1}(x)$.",
    "steps": [
        "<strong>(i) Finding the inverse function $f^{-1}(x)$:</strong><br>To find the inverse function, we set $y = f(x)$ and rearrange the equation to solve for $x$ in terms of $y$:<br>\\begin{aligned} y &= \\dfrac{ \\mathrm{e}^x }{ 2 - \\mathrm{e}^x } \\cr y(2 - \\mathrm{e}^x) &= \\mathrm{e}^x \\cr 2y - y\\mathrm{e}^x &= \\mathrm{e}^x \\cr 2y &= \\mathrm{e}^x + y\\mathrm{e}^x \\cr 2y &= \\mathrm{e}^x(1 + y) \\end{aligned}<br><br>Now we divide both sides by $(1 + y)$ to isolate $\\mathrm{e}^x$:<br>\\begin{aligned} \\mathrm{e}^x &= \\dfrac{ 2y }{ 1 + y } \\end{aligned}<br><br>Taking the natural logarithm of both sides:<br>\\begin{aligned} x &= \\ln\\left(\\dfrac{ 2y }{ 1 + y }\\right) \\end{aligned}<br><br>Interchanging variables gives the inverse function:<br>\\begin{aligned} f^{-1}(x) &= \\ln\\left(\\dfrac{ 2x }{ 1 + x }\\right) \\end{aligned}",
        "<strong>(ii) Writing down the range of $f^{-1}(x)$:</strong><br>Recall that the range of the inverse function $f^{-1}(x)$ is exactly equal to the domain of the original function $f(x)$.<br><br>Since the domain of $f(x)$ is given as $x \\in \\mathbb{ R }, x \\neq \\ln 2$, the range of $f^{-1}(x)$ is:<br>\\begin{aligned} \\text{Range of } f^{-1}(x) &: \\{ y \\in \\mathbb{ R } : y \\neq \\ln 2 \\} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$f^{-1}(x) = \\ln\\left(\\dfrac{ x }{ 2(1 + x) }\\right), \\quad \\text{Range: } \\{ y \\in \\mathbb{ R } : y \\neq \\ln 2 \\}$$",
            "feedback": "This option contains an algebraic error. When solving $2y = \\mathrm{e}^x(1 + y)$, you must divide $2y$ by $(1+y)$ to get $\\mathrm{e}^x = \\dfrac{2y}{1+y}$. This option represents dividing by $2$ instead."
        },
        {
            "ans": "$$f^{-1}(x) = \\ln\\left(\\dfrac{ 2x }{ 1 + x }\\right), \\quad \\text{Range: } y \\in \\mathbb{ R }$$",
            "feedback": "The inverse formula is correct, but the range of $f^{-1}(x)$ is incomplete. Since $f(x)$ is not defined at $x = \\ln 2$, its inverse function $f^{-1}(x)$ can never output the value $\\ln 2$. You must state that $y \\neq \\ln 2$."
        },
        {
            "ans": "$$f^{-1}(x) = \\ln\\left(\\dfrac{ 2x }{ 1 - x }\\right), \\quad \\text{Range: } \\{ y \\in \\mathbb{ R } : y \\neq \\ln 2 \\}$$",
            "feedback": "This option has a sign error in the denominator of the log term, changing $1+x$ to $1-x$. When factorising $\\mathrm{e}^x + y\\mathrm{e}^x$, the correct term is $\\mathrm{e}^x(1+y)$, which gives a denominator of $1+x$ in the inverse."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Domain-Range Mirror",
        "content": "Always remember the golden rule of inverse functions: the domain of $f(x)$ is exactly equal to the range of $f^{-1}(x)$, and the range of $f(x)$ is exactly equal to the domain of $f^{-1}(x)$. Instead of trying to calculate the range of $f^{-1}(x)$ from its formula, simply read the domain of the original function $f(x)$ directly from the question!"
    }
},
{
    "id": "004652",
    "board": "OCR MEI",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "Inverse of Logarithmic Function"
    ],
    "img": false,
    "question": "In this question you must show detailed reasoning.<br><br>The function $f(x) = \\ln\\left(\\dfrac{ x }{ 1 - x }\\right)$ is defined on the domain $0 < x < 1$.<br><br><strong>(i)</strong> Find $f^{-1}(x)$.<br><strong>(ii)</strong> Write down the range of $f^{-1}(x)$.",
    "steps": [
        "<strong>(i) Finding the inverse function $f^{-1}(x)$:</strong><br>We set $y = f(x)$ and rearrange to express $x$ in terms of $y$:<br>\\begin{aligned} y &= \\ln\\left(\\dfrac{ x }{ 1 - x }\\right) \\end{aligned}<br><br>Take the exponential (base $\\mathrm{e}$) of both sides to eliminate the natural logarithm:<br>\\begin{aligned} \\mathrm{e}^y &= \\dfrac{ x }{ 1 - x } \\end{aligned}<br><br>Multiply both sides by $(1 - x)$ to clear the fraction:<br>\\begin{aligned} \\mathrm{e}^y(1 - x) &= x \\cr \\mathrm{e}^y - x\\mathrm{e}^y &= x \\cr \\mathrm{e}^y &= x + x\\mathrm{e}^y \\end{aligned}<br><br>Factorise the right-hand side to group the $x$ terms:<br>\\begin{aligned} \\mathrm{e}^y &= x(1 + \\mathrm{e}^y) \\cr x &= \\dfrac{ \\mathrm{e}^y }{ 1 + \\mathrm{e}^y } \\end{aligned}<br><br>Interchanging variables gives the inverse function:<br>\\begin{aligned} f^{-1}(x) &= \\dfrac{ \\mathrm{e}^x }{ 1 + \\mathrm{e}^x } \\end{aligned}",
        "<strong>(ii) Writing down the range of $f^{-1}(x)$:</strong><br>The range of the inverse function is identical to the domain of the original function $f(x)$.<br><br>Since the domain of $f(x)$ is given as $0 < x < 1$, the range of $f^{-1}(x)$ is:<br>\\begin{aligned} \\text{Range of } f^{-1}(x) &: 0 < f^{-1}(x) < 1 \\end{aligned}<br><br>In interval notation, this is $(0, 1)$."
    ],
    "pi_options": [
        {
            "ans": "$$f^{-1}(x) = \\dfrac{ 1 + \\mathrm{e}^x }{ \\mathrm{e}^x }, \\quad \\text{Range: } 0 < y < 1$$",
            "feedback": "This option is the reciprocal of the correct inverse function. When isolating $x$ from $\\mathrm{e}^y = x(1 + \\mathrm{e}^y)$, dividing both sides by $(1 + \\mathrm{e}^y)$ yields $x = \\dfrac{\\mathrm{e}^y}{1 + \\mathrm{e}^y}$."
        },
        {
            "ans": "$$f^{-1}(x) = \\dfrac{ \\mathrm{e}^x }{ 1 + \\mathrm{e}^x }, \\quad \\text{Range: } y \\in \\mathbb{ R }$$",
            "feedback": "The formula for the inverse function is correct, but the range is incorrect. The range of the inverse function must match the domain of the original function, which is restricted to the open interval $(0, 1)$."
        },
        {
            "ans": "$$f^{-1}(x) = \\dfrac{ \\mathrm{e}^x }{ 1 - \\mathrm{e}^x }, \\quad \\text{Range: } 0 < y < 1$$",
            "feedback": "This option contains a sign error in the denominator. When rearranging $\\mathrm{e}^y - x\\mathrm{e}^y = x$, adding $x\\mathrm{e}^y$ to both sides yields $x + x\\mathrm{e}^y = x(1 + \\mathrm{e}^y)$, which results in a positive sign in the denominator."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "Exponentiating Fractions",
        "content": "When solving $y = \\ln\\left(\\dfrac{ x }{ 1 - x }\\right)$, once you exponentiate to get $\\mathrm{e}^y = \\dfrac{ x }{ 1 - x }$, clear the fraction immediately by multiplying both sides by $(1 - x)$. Grouping the $x$ terms and factoring is a highly reliable algebraic algorithm for isolating the variable."
    }
},
{
    "id": "004653",
    "board": "OCR MEI",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "Inverse of Linear Fractional Function"
    ],
    "img": false,
    "question": "In this question you must show detailed reasoning.<br><br>The function $f(x) = \\dfrac{ 2x + 1 }{ x - 3 }$ is defined on the domain $x \\in \\mathbb{ R }$, $x \\neq 3$.<br><br><strong>(i)</strong> Find $f^{-1}(x)$.<br><strong>(ii)</strong> Write down the range of $f^{-1}(x)$.",
    "steps": [
        "<strong>(i) Finding the inverse function $f^{-1}(x)$:</strong><br>We set $y = f(x)$ and rearrange to make $x$ the subject:<br>\\begin{aligned} y &= \\dfrac{ 2x + 1 }{ x - 3 } \\cr y(x - 3) &= 2x + 1 \\cr xy - 3y &= 2x + 1 \\end{aligned}<br><br>Collect all terms containing $x$ on one side and the rest on the other:<br>\\begin{aligned} xy - 2x &= 3y + 1 \\cr x(y - 2) &= 3y + 1 \\cr x &= \\dfrac{ 3y + 1 }{ y - 2 } \\end{aligned}<br><br>Interchanging variables gives the inverse function:<br>\\begin{aligned} f^{-1}(x) &= \\dfrac{ 3x + 1 }{ x - 2 } \\end{aligned}",
        "<strong>(ii) Writing down the range of $f^{-1}(x)$:</strong><br>The range of the inverse function $f^{-1}(x)$ is exactly equal to the domain of the original function $f(x)$.<br><br>Since the domain of $f(x)$ is $x \\in \\mathbb{ R }, x \\neq 3$, the range of $f^{-1}(x)$ is:<br>\\begin{aligned} \\text{Range of } f^{-1}(x) &: \\{ y \\in \\mathbb{ R } : y \\neq 3 \\} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$f^{-1}(x) = \\dfrac{ 3x + 1 }{ x - 2 }, \\quad \\text{Range: } \\{ y \\in \\mathbb{ R } : y \\neq 2 \\}$$",
            "feedback": "This option confuses the domain of the inverse function ($x \\neq 2$) with its range. The range of the inverse function is equal to the domain of the original function $f(x)$, which is restricted by $x \\neq 3$."
        },
        {
            "ans": "$$f^{-1}(x) = \\dfrac{ 3x - 1 }{ x - 2 }, \\quad \\text{Range: } \\{ y \\in \\mathbb{ R } : y \\neq 3 \\}$$",
            "feedback": "This option contains a sign error in the numerator, writing $3x - 1$ instead of $3x + 1$. Moving $-3y$ to the right side of the equation $xy - 3y = 2x + 1$ yields a positive $+3y$ term."
        },
        {
            "ans": "$$f^{-1}(x) = \\dfrac{ 3x + 1 }{ x + 2 }, \\quad \\text{Range: } \\{ y \\in \\mathbb{ R } : y \\neq 3 \\}$$",
            "feedback": "This option contains a sign error in the denominator, writing $x + 2$ instead of $x - 2$. Moving $+2x$ to the left side of the equation $xy - 3y = 2x + 1$ yields a negative term: $xy - 2x = x(y - 2)$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Linear Fractional Transformation Pattern",
        "content": "A linear fractional transformation $f(x) = \\dfrac{ ax + b }{ cx + d }$ has a highly symmetric inverse $f^{-1}(x) = \\dfrac{ -dx + b }{ cx - a }$. Spotting this pattern can act as an instant verification check: for $f(x) = \\dfrac{ 2x + 1 }{ x - 3 }$, swapping the coefficients $2$ and $-3$ with sign changes gives $f^{-1}(x) = \\dfrac{ 3x + 1 }{ x - 2 }$."
    }
},
{
    "id": "004654",
    "board": "OCR MEI",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "Completing the Square and Restricted Quadratics"
    ],
    "img": false,
    "question": "In this question you must show detailed reasoning.<br><br>The function $f(x) = x^2 - 4x + 7$ is defined on the restricted domain $x \\ge 2$.<br><br><strong>(i)</strong> Find $f^{-1}(x)$.<br><strong>(ii)</strong> Write down the range of $f^{-1}(x)$.",
    "steps": [
        "<strong>(i) Finding the inverse function $f^{-1}(x)$:</strong><br>For quadratic equations, we first complete the square to write the function with a single $x$ term:<br>\\begin{aligned} f(x) &= (x - 2)^2 - 4 + 7 \\cr &= (x - 2)^2 + 3 \\end{aligned}<br><br>Now, set $y = f(x)$ and solve for $x$ in terms of $y$:<br>\\begin{aligned} y &= (x - 2)^2 + 3 \\cr y - 3 &= (x - 2)^2 \\end{aligned}<br><br>Take the square root of both sides. Since our restricted domain is $x \\ge 2$, the term $(x - 2)$ must be non-negative ($x - 2 \\ge 0$). Thus, we select the positive square root:<br>\\begin{aligned} x - 2 &= \\sqrt{ y - 3 } \\cr x &= 2 + \\sqrt{ y - 3 } \\end{aligned}<br><br>Interchanging variables gives the inverse function:<br>\\begin{aligned} f^{-1}(x) &= 2 + \\sqrt{ x - 3 } \\end{aligned}",
        "<strong>(ii) Writing down the range of $f^{-1}(x)$:</strong><br>The range of the inverse function $f^{-1}(x)$ is exactly equal to the domain of the original function $f(x)$.<br><br>Since the domain is specified as $x \\ge 2$, the range of $f^{-1}(x)$ is:<br>\\begin{aligned} \\text{Range of } f^{-1}(x) &: y \\ge 2 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$f^{-1}(x) = 2 - \\sqrt{ x - 3 }, \\quad \\text{Range: } y \\ge 2$$",
            "feedback": "This option arises if you select the negative square root when rearranging. Since the domain of the original function is $x \\ge 2$, the term $x - 2$ is non-negative, meaning you must choose the positive root: $+ \\sqrt{y - 3}$."
        },
        {
            "ans": "$$f^{-1}(x) = 2 + \\sqrt{ x - 3 }, \\quad \\text{Range: } y \\ge 3$$",
            "feedback": "The inverse function is correct, but this option confuses the domain of the inverse function ($x \\ge 3$) with its range. The range is the domain of the original function, which is $y \\ge 2$."
        },
        {
            "ans": "$$f^{-1}(x) = 2 + \\sqrt{ x - 7 }, \\quad \\text{Range: } y \\ge 2$$",
            "feedback": "This option is caused by a mistake in completing the square, such as adding $7$ to the square root term directly without subtracting the squared half-coefficient ($-4$)."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "Choosing Square Root Signs",
        "content": "When taking the square root to solve $y - 3 = (x - 2)^2$, you mathematically have two roots: $x - 2 = \\pm \\sqrt{ y - 3 }$. You must look at the restricted domain $x \\ge 2$ to make a choice. Since $x \\ge 2 \\implies x - 2 \\ge 0$, you must select the positive root. Omitting this check can lose you serious marks!"
    }
},
{
    "id": "004655",
    "board": "OCR MEI",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
        "Inverse and Bounds of Radical Function"
    ],
    "img": false,
    "question": "In this question you must show detailed reasoning.<br><br>The function $f(x) = 3 - \\sqrt{ x - 1 }$ is defined on the domain $x \\ge 1$.<br><br><strong>(i)</strong> Find $f^{-1}(x)$.<br><strong>(ii)</strong> Write down the range of $f^{-1}(x)$.<br><strong>(iii)</strong> State the domain of $f^{-1}(x)$.",
    "steps": [
        "<strong>(i) Finding the inverse function $f^{-1}(x)$:</strong><br>We set $y = f(x)$ and rearrange the equation to isolate the radical term:<br>\\begin{aligned} y &= 3 - \\sqrt{ x - 1 } \\cr \\sqrt{ x - 1 } &= 3 - y \\end{aligned}<br><br>Square both sides of the equation:<br>\\begin{aligned} x - 1 &= (3 - y)^2 \\cr x &= 1 + (3 - y)^2 \\end{aligned}<br><br>Interchanging variables gives the inverse function:<br>\\begin{aligned} f^{-1}(x) &= 1 + (3 - x)^2 \\end{aligned}",
        "<strong>(ii) Finding the range of $f^{-1}(x)$:</strong><br>The range of the inverse function $f^{-1}(x)$ is exactly equal to the domain of the original function $f(x)$.<br><br>Since the domain of $f(x)$ is $x \\ge 1$, we have:<br>\\begin{aligned} \\text{Range of } f^{-1}(x) &: y \\ge 1 \\end{aligned}",
        "<strong>(iii) Stating the domain of $f^{-1}(x)$:</strong><br>The domain of the inverse function $f^{-1}(x)$ is exactly equal to the range of the original function $f(x)$.<br><br>Let us analyze the values that $f(x) = 3 - \\sqrt{ x - 1 }$ can take on the domain $x \\ge 1$:<br>\\begin{aligned} x &\\ge 1 \\cr x - 1 &\\ge 0 \\cr \\sqrt{ x - 1 } &\\ge 0 \\cr -\\sqrt{ x - 1 } &\\le 0 \\cr 3 - \\sqrt{ x - 1 } &\\le 3 \\end{aligned}<br><br>Therefore, the range of $f(x)$ is $f(x) \\le 3$, which means the domain of the inverse function is:<br>\\begin{aligned} \\text{Domain of } f^{-1}(x) &: x \\le 3 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$f^{-1}(x) = 1 + (3 - x)^2, \\quad \\text{Range: } y \\ge 1, \\quad \\text{Domain: } x \\ge 3$$",
            "feedback": "The inverse function and range are correct, but the domain limit is reversed. Since $f(x) = 3 - \\sqrt{x-1}$, the output of $f(x)$ is at most $3$ because we are subtracting a non-negative root from $3$. Hence, the domain of $f^{-1}(x)$ must be $x \\le 3$."
        },
        {
            "ans": "$$f^{-1}(x) = (3 - x)^2 - 1, \\quad \\text{Range: } y \\ge 1, \\quad \\text{Domain: } x \\le 3$$",
            "feedback": "This option contains a sign error when solving for $x$. Adding $1$ to both sides of $x - 1 = (3-y)^2$ yields $x = 1 + (3-y)^2$, not a subtraction of $1$."
        },
        {
            "ans": "$$f^{-1}(x) = 1 + (3 - x)^2, \\quad \\text{Range: } y \\ge 1, \\quad \\text{Domain: } x \\in \\mathbb{ R }$$",
            "feedback": "While the inverse function formula resembles an unrestricted quadratic, its domain is strictly constrained to the range of the original square-root function. You must restrict the domain of $f^{-1}(x)$ to $x \\le 3$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "Domain Constraints on the Inverse",
        "content": "For functions involving square roots like $f(x) = 3 - \\sqrt{ x - 1 }$, the inverse function formula $f^{-1}(x) = 1 + (3 - x)^2$ looks like an unrestricted quadratic. However, it is only defined where $f(x)$ exists and produces outputs. You must explicitly state the domain restriction $x \\le 3$ for the inverse function to be mathematically complete."
    }
}


];