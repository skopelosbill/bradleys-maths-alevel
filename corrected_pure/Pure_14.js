window.ALEVEL_QUESTIONS = [
        {
                "id": "004651",
                "board": "OCR MEI",
                "level": "A",
                "major_area": "Exponentials and Logarithms",
                "topic": "Functions",
                "subtopic": [
                        "Functions and Mappings"
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
                "major_area": "Exponentials and Logarithms",
                "topic": "Functions",
                "subtopic": [
                        "Functions and Mappings"
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
                        "Algebraic Methods"
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
                        "Quadratics"
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
                        "Functions and Mappings"
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
        },
        {
                "id": "004656",
                "board": "OCR MEI",
                "level": "A",
                "major_area": "Vectors",
                "topic": "Vectors",
                "subtopic": [
                        "Area Minimisation",
                        "Coordinate Geometry"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning.<br><br>Point $A$ has position vector $\\begin{pmatrix} a \\\\ b \\\\ 0 \\end{pmatrix}$, where $a$ and $b$ can vary. Point $B$ has position vector $\\begin{pmatrix} 3 \\\\ 1 \\\\ 0 \\end{pmatrix}$ and point $C$ has position vector $\\begin{pmatrix} 1 \\\\ 3 \\\\ 2 \\end{pmatrix}$.<br><br>The triangle $ABC$ is isosceles with $AC = AB$.<br><br><strong>(i)</strong> Show that $a - b + 1 = 0$.<br><strong>(ii)</strong> Determine the position vector of $A$ such that triangle $ABC$ has minimum area.",
                "steps": [
                        "<strong>(i) Showing that $a - b + 1 = 0$:</strong><br>We first find the vectors $\\vec{ AB }$ and $\\vec{ AC }$ by subtracting the position vectors:<br>\\begin{aligned} \\vec{ AB } &= \\begin{pmatrix} 3 \\\\ 1 \\\\ 0 \\end{pmatrix} - \\begin{pmatrix} a \\\\ b \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 3 - a \\\\ 1 - b \\\\ 0 \\end{pmatrix} \\cr \\vec{ AC } &= \\begin{pmatrix} 1 \\\\ 3 \\\\ 2 \\end{pmatrix} - \\begin{pmatrix} a \\\\ b \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 1 - a \\\\ 3 - b \\\\ 2 \\end{pmatrix} \\end{aligned}<br><br>Since triangle $ABC$ is isosceles with $AC = AB$, their squared magnitudes are also equal ($|\\vec{ AB }|^2 = |\\vec{ AC }|^2$):<br>\\begin{aligned} (3 - a)^2 + (1 - b)^2 + 0^2 &= (1 - a)^2 + (3 - b)^2 + 2^2 \\cr (9 - 6a + a^2) + (1 - 2b + b^2) &= (1 - 2a + a^2) + (9 - 6b + b^2) + 4 \\cr a^2 + b^2 - 6a - 2b + 10 &= a^2 + b^2 - 2a - 6b + 14 \\end{aligned}<br><br>Simplifying by cancelling the quadratic terms $a^2$ and $b^2$ from both sides:<br>\\begin{aligned} -6a - 2b + 10 &= -2a - 6b + 14 \\cr -4a + 4b - 4 &= 0 \\cr a - b + 1 &= 0 \\end{aligned}",
                        "<strong>(ii) Finding the position vector of $A$ for minimum area:</strong><br>From part <strong>(i)</strong>, we have $a - b + 1 = 0 \\implies b = a + 1$. Thus, we can express the coordinates of $A$ in terms of a single variable, $a$:<br>\\begin{aligned} A &= \\begin{pmatrix} a \\\\ a + 1 \\\\ 0 \\end{pmatrix} \\end{aligned}<br><br>The base of our isosceles triangle is the line segment $BC$. The midpoint $D$ of $BC$ has coordinates:<br>\\begin{aligned} D &= \\begin{pmatrix} \\dfrac{ 3 + 1 }{ 2 } \\\\[6pt] \\dfrac{ 1 + 3 }{ 2 } \\\\[6pt] \\dfrac{ 0 + 2 }{ 2 } \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 2 \\\\ 1 \\end{pmatrix} \\end{aligned}<br><br>Since the length of the base $BC$ is a fixed constant, the area of triangle $ABC$ is minimised when its height $AD$ is minimised. The vector $\\vec{ AD }$ is:<br>\\begin{aligned} \\vec{ AD } &= \\begin{pmatrix} 2 \\\\ 2 \\\\ 1 \\end{pmatrix} - \\begin{pmatrix} a \\\\ a + 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 2 - a \\\\ 1 - a \\\\ 1 \\end{pmatrix} \\end{aligned}<br><br>We find the squared height $|\\vec{ AD }|^2$:<br>\\begin{aligned} |\\vec{ AD }|^2 &= (2 - a)^2 + (1 - a)^2 + 1^2 \\cr &= (4 - 4a + a^2) + (1 - 2a + a^2) + 1 \\cr &= 2a^2 - 6a + 6 \\end{aligned}<br><br>To find the value of $a$ that minimises this quadratic expression, we differentiate with respect to $a$ and set the derivative to zero:<br>\\begin{aligned} \\dfrac{\\mathrm{d}}{\\mathrm{d}a}\\left(2a^2 - 6a + 6\\right) &= 0 \\cr 4a - 6 &= 0 \\cr a &= \\dfrac{ 3 }{ 2 } \\end{aligned}<br><br>Substituting $a = \\dfrac{ 3 }{ 2 }$ back into our expression for $b$:<br>\\begin{aligned} b &= \\dfrac{ 3 }{ 2 } + 1 \\cr &= \\dfrac{ 5 }{ 2 } \\end{aligned}<br><br>Thus, the position vector of $A$ that minimises the area of the triangle is $\\begin{pmatrix} \\dfrac{ 3 }{ 2 } \\\\[6pt] \\dfrac{ 5 }{ 2 } \\\\[6pt] 0 \\end{pmatrix}$."
                ],
                "pi_options": [
                        {
                                "ans": "$$\\mathbf{a} = \\begin{pmatrix} 1.5 \\\\ 1.5 \\\\ 0 \\end{pmatrix}$$",
                                "feedback": "This option results from a sign error when finding the coordinate $b$. Since $a - b + 1 = 0 \\implies b = a + 1$, substituting $a = 1.5$ must yield $b = 1.5 + 1 = 2.5$, rather than $b = 1.5$."
                        },
                        {
                                "ans": "$$\\mathbf{a} = \\begin{pmatrix} 2.5 \\\\ 3.5 \\\\ 0 \\end{pmatrix}$$",
                                "feedback": "This option arises if the midpoint of the base $BC$ is incorrectly calculated as $D(3, 3, 1)$ instead of $D(2, 2, 1)$. Setting up the height vector with this incorrect midpoint yields the squared height $2a^2 - 10a + 14$, which is minimised at $a = 2.5$ and $b = 3.5$."
                        },
                        {
                                "ans": "$$\\mathbf{a} = \\begin{pmatrix} 3 \\\\ 4 \\\\ 0 \\end{pmatrix}$$",
                                "feedback": "This option occurs if you make an error in setting up the quadratic height equation, such as failing to sum the $a^2$ terms or incorrectly expanding the squared brackets, leading to an incorrect minimum value."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "Spec-Compliant Area Methods",
                        "content": "Many Further Maths students immediately default to using the 3D vector cross product to find the area of triangle $ABC$. While mathematically sound, the cross product is not on the standard A Level Maths syllabus. A much cleaner, spec-compliant method is to find the midpoint $D$ of the base $BC$ and minimise the height vector $\\vec{ AD }$, which is simple, elegant, and fully accepted in all mark schemes!"
                }
        },
        {
                "id": "004657",
                "board": "OCR MEI",
                "level": "A",
                "major_area": "Vectors",
                "topic": "Vectors",
                "subtopic": [
                        "Area Minimisation",
                        "Coordinate Geometry"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning.<br><br>Point $A$ has position vector $\\begin{pmatrix} a \\\\ b \\\\ 0 \\end{pmatrix}$, where $a$ and $b$ can vary. Point $B$ has position vector $\\begin{pmatrix} 1 \\\\ 5 \\\\ 1 \\end{pmatrix}$ and point $C$ has position vector $\\begin{pmatrix} 5 \\\\ 1 \\\\ 1 \\end{pmatrix}$.<br><br>The triangle $ABC$ is isosceles with $AC = AB$.<br><br><strong>(i)</strong> Show that $a - b = 0$.<br><strong>(ii)</strong> Determine the position vector of $A$ such that triangle $ABC$ has minimum area.",
                "steps": [
                        "<strong>(i) Showing that $a - b = 0$:</strong><br>We find the vectors $\\vec{ AB }$ and $\\vec{ AC }$:<br>\\begin{aligned} \\vec{ AB } &= \\begin{pmatrix} 1 - a \\\\ 5 - b \\\\ 1 \\end{pmatrix} \\cr \\vec{ AC } &= \\begin{pmatrix} 5 - a \\\\ 1 - b \\\\ 1 \\end{pmatrix} \\end{aligned}<br><br>Since the triangle is isosceles with $AC = AB$, we equate their squared magnitudes ($|\\vec{ AB }|^2 = |\\vec{ AC }|^2$):<br>\\begin{aligned} (1 - a)^2 + (5 - b)^2 + 1^2 &= (5 - a)^2 + (1 - b)^2 + 1^2 \\cr (1 - 2a + a^2) + (25 - 10b + b^2) + 1 &= (25 - 10a + a^2) + (1 - 2b + b^2) + 1 \\cr a^2 + b^2 - 2a - 10b + 27 &= a^2 + b^2 - 10a - 2b + 27 \\end{aligned}<br><br>Subtracting $a^2 + b^2 + 27$ from both sides:<br>\\begin{aligned} -2a - 10b &= -10a - 2b \\cr 8a - 8b &= 0 \\cr a - b &= 0 \\end{aligned}",
                        "<strong>(ii) Finding the position vector of $A$ for minimum area:</strong><br>From part <strong>(i)</strong>, we have $a - b = 0 \\implies b = a$. Thus, the coordinates of $A$ can be written in terms of $a$ as $A\\begin{pmatrix} a \\\\ a \\\\ 0 \\end{pmatrix}$.<br><br>The midpoint $D$ of the base $BC$ has coordinates:<br>\\begin{aligned} D &= \\begin{pmatrix} \\dfrac{ 1 + 5 }{ 2 } \\\\[6pt] \\dfrac{ 5 + 1 }{ 2 } \\\\[6pt] \\dfrac{ 1 + 1 }{ 2 } \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 3 \\\\ 1 \\end{pmatrix} \\end{aligned}<br><br>Because the length of $BC$ is a fixed constant, the area of triangle $ABC$ is minimised when the height $AD$ is minimised. The vector $\\vec{ AD }$ is:<br>\\begin{aligned} \\vec{ AD } &= \\begin{pmatrix} 3 \\\\ 3 \\\\ 1 \\end{pmatrix} - \\begin{pmatrix} a \\\\ a \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 3 - a \\\\ 3 - a \\\\ 1 \\end{pmatrix} \\end{aligned}<br><br>The squared height $|\\vec{ AD }|^2$ is:<br>\\begin{aligned} |\\vec{ AD }|^2 &= (3 - a)^2 + (3 - a)^2 + 1^2 \\cr &= 2(3 - a)^2 + 1 \\end{aligned}<br><br>Since $2(3 - a)^2$ is a perfect square multiplied by a positive constant, its minimum possible value is $0$, which occurs when:<br>\\begin{aligned} (3 - a)^2 &= 0 \\cr a &= 3 \\end{aligned}<br><br>Since $b = a$, we have $b = 3$. Therefore, the position vector of $A$ that minimises the area is $\\begin{pmatrix} 3 \\\\ 3 \\\\ 0 \\end{pmatrix}$."
                ],
                "pi_options": [
                        {
                                "ans": "$$\\mathbf{a} = \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}$$",
                                "feedback": "This option is incorrect. Although the coordinates satisfy the relation $a=b$, they do not minimise the height of the triangle. Evaluating the squared height at $a=1$ gives $2(2)^2 + 1 = 9$, which is larger than the minimum squared height of $1$ achieved at $a=3$."
                        },
                        {
                                "ans": "$$\\mathbf{a} = \\begin{pmatrix} 3 \\\\ -3 \\\\ 0 \\end{pmatrix}$$",
                                "feedback": "This option contains a sign error on the $b$-coordinate, violating the condition $a - b = 0 \\implies b = a$. The two coordinates must be identical."
                        },
                        {
                                "ans": "$$\\mathbf{a} = \\begin{pmatrix} 5 \\\\ 5 \\\\ 0 \\end{pmatrix}$$",
                                "feedback": "This option is a non-minimal point on the line $a=b$. The height vector is minimised at the midpoint of the base's projection, which is $a = 3$."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "Simplification is Key",
                        "content": "When setting up the isosceles condition $|\\vec{ AB }|^2 = |\\vec{ AC }|^2$, expanding the squared binomials fully before trying to simplify can look daunting. However, notice that the quadratic terms $a^2$ and $b^2$ appear on both sides and cancel out completely, reducing the equation to a simple linear form $a - b = 0$. Don't get intimidated by the quadratics!"
                }
        },
        {
                "id": "004658",
                "board": "OCR MEI",
                "level": "A",
                "major_area": "Vectors",
                "topic": "Vectors",
                "subtopic": [
                        "Coordinate Geometry",
                        "Vector Properties"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning.<br><br>The points $P$, $Q$, and $R$ have position vectors $\\mathbf{p} = \\begin{pmatrix} 1 \\\\ -2 \\\\ 3 \\end{pmatrix}$, $\\mathbf{q} = \\begin{pmatrix} 3 \\\\ 1 \\\\ 2 \\end{pmatrix}$, and $\\mathbf{r} = \\begin{pmatrix} k \\\\ 2 \\\\ -1 \\end{pmatrix}$ respectively, where $k$ is a constant.<br><br><strong>(i)</strong> Given that the vector $\\vec{ PQ }$ is perpendicular to the vector $\\vec{ PR }$, determine the value of the constant $k$.<br><strong>(ii)</strong> Using the value of $k$ found in part <strong>(i)</strong>, calculate the size of the angle $PQR$, giving your answer to the nearest $0.1^\\circ$.",
                "steps": [
                        "<strong>(i) Finding the value of the constant $k$:</strong><br>We first find the vectors $\\vec{ PQ }$ and $\\vec{ PR }$ by subtracting position vectors:<br>\\begin{aligned} \\vec{ PQ } &= \\begin{pmatrix} 3 \\\\ 1 \\\\ 2 \\end{pmatrix} - \\begin{pmatrix} 1 \\\\ -2 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 3 \\\\ -1 \\end{pmatrix} \\cr \\vec{ PR } &= \\begin{pmatrix} k \\\\ 2 \\\\ -1 \\end{pmatrix} - \\begin{pmatrix} 1 \\\\ -2 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} k - 1 \\\\ 4 \\\\ -4 \\end{pmatrix} \\end{aligned}<br><br>Since the vectors are perpendicular, their scalar product (dot product) must equal zero:<br>\\begin{aligned} \\vec{ PQ } \\cdot \\vec{ PR } &= 0 \\cr \\begin{pmatrix} 2 \\\\ 3 \\\\ -1 \\end{pmatrix} \\cdot \\begin{pmatrix} k - 1 \\\\ 4 \\\\ -4 \\end{pmatrix} &= 0 \\cr 2(k - 1) + 3(4) + (-1)(-4) &= 0 \\cr 2k - 2 + 12 + 4 &= 0 \\cr 2k + 14 &= 0 \\cr k &= -7 \\end{aligned}",
                        "<strong>(ii) Calculating the angle $PQR$ with $k = -7$:</strong><br>With $k = -7$, the position vector of $R$ is $\\mathbf{r} = \\begin{pmatrix} -7 \\\\ 2 \\\\ -1 \\end{pmatrix}$. To find the angle $PQR$, we need the vectors that start at the vertex $Q$, which are $\\vec{ QP }$ and $\\vec{ QR }$:<br>\\begin{aligned} \\vec{ QP } &= -\\vec{ PQ } = \\begin{pmatrix} -2 \\\\ -3 \\\\ 1 \\end{pmatrix} \\cr \\vec{ QR } &= \\begin{pmatrix} -7 \\\\ 2 \\\\ -1 \\end{pmatrix} - \\begin{pmatrix} 3 \\\\ 1 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} -10 \\\\ 1 \\\\ -3 \\end{pmatrix} \\end{aligned}<br><br>We compute the scalar product $\\vec{ QP } \\cdot \\vec{ QR }$:<br>\\begin{aligned} \\vec{ QP } \\cdot \\vec{ QR } &= (-2)(-10) + (-3)(1) + (1)(-3) \\cr &= 20 - 3 - 3 \\cr &= 14 \\end{aligned}<br><br>Next, we calculate the magnitudes of both vectors:<br>\\begin{aligned} |\\vec{ QP }| &= \\sqrt{ (-2)^2 + (-3)^2 + 1^2 } = \\sqrt{ 14 } \\cr |\\vec{ QR }| &= \\sqrt{ (-10)^2 + 1^2 + (-3)^2 } = \\sqrt{ 110 } \\end{aligned}<br><br>Using the angle formula:<br>\\begin{aligned} \\cos(PQR) &= \\dfrac{ \\vec{ QP } \\cdot \\vec{ QR } }{ |\\vec{ QP }| |\\vec{ QR }| } \\cr &= \\dfrac{ 14 }{ \\sqrt{ 14 } \\sqrt{ 110 } } \\cr &= \\dfrac{ 14 }{ \\sqrt{ 1540 } } \\cr &\\approx 0.35675 \\end{aligned}<br><br>Taking the inverse cosine:<br>\\begin{aligned} PQR &= \\arccos(0.35675) \\cr &\\approx 69.1^\\circ \\end{aligned}<br><br>Thus, to the nearest $0.1^\\circ$, the angle $PQR$ is $69.1^\\circ$."
                ],
                "pi_options": [
                        {
                                "ans": "$$k = 7, \\quad \\text{Angle } \\approx 110.9^\\circ$$",
                                "feedback": "This option is caused by a sign error when solving the scalar product, obtaining $2k = 14 \\implies k = 7$. A positive $k$ completely changes the coordinates of $R$ and results in an incorrect angle."
                        },
                        {
                                "ans": "$$k = -7, \\quad \\text{Angle } \\approx 110.9^\\circ$$",
                                "feedback": "This option has the correct value of $k$ but incorrectly calculates the angle because you used vectors starting at different vertices (such as $\\vec{PQ}$ and $\\vec{QR}$), which yields the obtuse supplement angle $180^\\circ - 69.1^\\circ = 110.9^\\circ$. Ensure both vectors start at $Q$."
                        },
                        {
                                "ans": "$$k = -7, \\quad \\text{Angle } \\approx 75.4^\\circ$$",
                                "feedback": "This option arises from an arithmetic slip in evaluating the fraction $\\dfrac{14}{\\sqrt{1540}}$, such as evaluating the square root incorrectly or introducing an intermediate rounding error before taking the inverse cosine."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "Choosing the Correct Vertex",
                        "content": "When calculating the angle $PQR$, the angle is subtended at the vertex $Q$. This means both vectors must start at the vertex $Q$, which are $\\vec{ QP }$ and $\\vec{ QR }$. A very common student error is using the vectors $\\vec{ PQ }$ and $\\vec{ QR }$ or $\\vec{ QP }$ and $\\vec{ RQ }$, which will calculate the exterior angle ($180^\\circ - \\theta$) instead. Always check your vector directions!"
                }
        },
        {
                "id": "004659",
                "board": "OCR MEI",
                "level": "A",
                "major_area": "Vectors",
                "topic": "Vectors",
                "subtopic": [
                        "Coordinate Geometry",
                        "Linear Equations"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning.<br><br>A straight line $L$ passes through the points $B(1, 2, 3)$ and $C(2, 4, 1)$.<br><br><strong>(i)</strong> Find a vector equation for the line $L$ in the form $\\mathbf{r} = \\mathbf{u} + \\lambda \\mathbf{v}$.<br><strong>(ii)</strong> A point $A$ has position vector $\\mathbf{a} = \\begin{pmatrix} 1 \\\\ 4 \\\\ -4 \\end{pmatrix}$. Determine the coordinates of the point on the line $L$ that is closest to $A$.",
                "steps": [
                        "<strong>(i) Finding a vector equation for the line $L$:</strong><br>We find the direction vector $\\vec{ BC }$ by subtracting the coordinates of $B$ from $C$:<br>\\begin{aligned} \\vec{ BC } &= \\begin{pmatrix} 2 \\\\ 4 \\\\ 1 \\end{pmatrix} - \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 2 \\\\ -2 \\end{pmatrix} \\end{aligned}<br><br>Using $B$ as our support position vector and $\\vec{ BC }$ as our direction vector, the equation of the line is:<br>\\begin{aligned} \\mathbf{ r } &= \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix} + \\lambda \\begin{pmatrix} 1 \\\\ 2 \\\\ -2 \\end{pmatrix} \\end{aligned}",
                        "<strong>(ii) Finding the point on the line $L$ closest to $A$:</strong><br>Let $R$ represent a general point on the line $L$ in terms of $\\lambda$:<br>\\begin{aligned} R &= \\begin{pmatrix} 1 + \\lambda \\\\ 2 + 2\\lambda \\\\ 3 - 2\\lambda \\end{pmatrix} \\end{aligned}<br><br>The vector $\\vec{ AR }$ connecting point $A$ to this general point is:<br>\\begin{aligned} \\vec{ AR } &= \\begin{pmatrix} 1 + \\lambda \\\\ 2 + 2\\lambda \\\\ 3 - 2\\lambda \\end{pmatrix} - \\begin{pmatrix} 1 \\\\ 4 \\\\ -4 \\end{pmatrix} = \\begin{pmatrix} \\lambda \\\\ 2\\lambda - 2 \\\\ 7 - 2\\lambda \\end{pmatrix} \\end{aligned}<br><br>For $R$ to be the point on the line closest to $A$, the vector $\\vec{ AR }$ must be perpendicular to the direction vector of the line, $\\vec{ BC }$. Thus, their scalar product must be zero:<br>\\begin{aligned} \\vec{ AR } \\cdot \\vec{ BC } &= 0 \\cr \\begin{pmatrix} \\lambda \\\\ 2\\lambda - 2 \\\\ 7 - 2\\lambda \\end{pmatrix} \\cdot \\begin{pmatrix} 1 \\\\ 2 \\\\ -2 \\end{pmatrix} &= 0 \\cr \\lambda(1) + (2\\lambda - 2)(2) + (7 - 2\\lambda)(-2) &= 0 \\cr \\lambda + 4\\lambda - 4 - 14 + 4\\lambda &= 0 \\cr 9\\lambda - 18 &= 0 \\cr \\lambda &= 2 \\end{aligned}<br><br>Substitute $\\lambda = 2$ back into our expression for the coordinates of $R$:<br>\\begin{aligned} R &= \\begin{pmatrix} 1 + 2 \\\\ 2 + 4(2) - 4 \\\\ 3 - 2(2) \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 6 \\\\ -1 \\end{pmatrix} \\end{aligned}<br><br>Thus, the coordinates of the closest point on the line are $(3, 6, -1)$."
                ],
                "pi_options": [
                        {
                                "ans": "$$\\mathbf{r} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix} + \\lambda \\begin{pmatrix} 1 \\\\ 2 \\\\ -2 \\end{pmatrix}, \\quad \\text{Closest point } (2, 4, 1)$$",
                                "feedback": "This option is incorrect because $(2, 4, 1)$ is simply point $C$. While $C$ is on the line (at $\\lambda = 1$), the closest point to $A$ occurs at $\\lambda = 2$, which gives the coordinates $(3, 6, -1)$."
                        },
                        {
                                "ans": "$$\\mathbf{r} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix} + \\lambda \\begin{pmatrix} 1 \\\\ 2 \\\\ -2 \\end{pmatrix}, \\quad \\text{Closest point } (3, 6, 1)$$",
                                "feedback": "This option has a sign error in the $z$-coordinate. Substituting $\\lambda = 2$ into the $z$-component $3 - 2\\lambda$ yields $3 - 4 = -1$, not $+1$."
                        },
                        {
                                "ans": "$$\\mathbf{r} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix} + \\lambda \\begin{pmatrix} 3 \\\\ 6 \\\\ -2 \\end{pmatrix}, \\quad \\text{Closest point } (3, 6, -1)$$",
                                "feedback": "This option lists an incorrect direction vector for the line $L$. The direction vector must be $C - B = \\begin{pmatrix} 1 \\\\ 2 \\\\ -2 \\end{pmatrix}$."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Perpendicular Closest Point",
                        "content": "The shortest distance from a point to a line occurs when the line connecting them is perpendicular to the line itself. Therefore, the scalar product of the vector $\\vec{ AR }$ and the line's direction vector must equal $0$. This elegant geometric fact completely bypasses the need for complex calculus and differentiation to find minimum distances."
                }
        },
        {
                "id": "004660",
                "board": "OCR MEI",
                "level": "A",
                "major_area": "Vectors",
                "topic": "Vectors",
                "subtopic": [
                        "Vector Properties"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning.<br><br>The points $A$, $B$, and $C$ have coordinates $A(2, -1, 5)$, $B(5, 1, 1)$, and $C(11, 5, -7)$ respectively.<br><br><strong>(i)</strong> Show that the points $A$, $B$, and $C$ are collinear.<br><strong>(ii)</strong> State the ratio of lengths $AB : BC$.<br><strong>(iii)</strong> Find the coordinates of the point $D$ on the line segment $AC$ produced such that $AC : CD = 3 : 1$.",
                "steps": [
                        "<strong>(i) Showing that the points are collinear:</strong><br>We find the displacement vectors $\\vec{ AB }$ and $\\vec{ AC }$:<br>\\begin{aligned} \\vec{ AB } &= \\begin{pmatrix} 5 \\\\ 1 \\\\ 1 \\end{pmatrix} - \\begin{pmatrix} 2 \\\\ -1 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 2 \\\\ -4 \\end{pmatrix} \\cr \\vec{ AC } &= \\begin{pmatrix} 11 \\\\ 5 \\\\ -7 \\end{pmatrix} - \\begin{pmatrix} 2 \\\\ -1 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} 9 \\\\ 6 \\\\ -12 \\end{pmatrix} \\end{aligned}<br><br>Notice that the vector $\\vec{ AC }$ is a direct scalar multiple of the vector $\\vec{ AB }$:<br>\\begin{aligned} \\vec{ AC } &= 3\\vec{ AB } \\end{aligned}<br><br>Since $\\vec{ AC }$ and $\\vec{ AB }$ are parallel and share a common point $A$, the points $A$, $B$, and $C$ are collinear.",
                        "<strong>(ii) Finding the ratio of lengths $AB : BC$:</strong><br>First, let's find the displacement vector $\\vec{ BC }$:<br>\\begin{aligned} \\vec{ BC } &= \\begin{pmatrix} 11 \\\\ 5 \\\\ -7 \\end{pmatrix} - \\begin{pmatrix} 5 \\\\ 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ 4 \\\\ -8 \\end{pmatrix} \\end{aligned}<br><br>Since $\\vec{ BC } = 2\\vec{ AB }$, the length of the segment $BC$ is exactly twice the length of the segment $AB$. Thus:<br>\\begin{aligned} AB : BC &= 1 : 2 \\end{aligned}",
                        "<strong>(iii) Finding the coordinates of $D$:</strong><br>Since $AC : CD = 3 : 1$ and the point $D$ lies on the line segment $AC$ produced (meaning it lies beyond $C$), the vector $\\vec{ CD }$ must point in the same direction as $\\vec{ AC }$ and be exactly $\\dfrac{ 1 }{ 3 }$ of its length:<br>\\begin{aligned} \\vec{ CD } &= \\dfrac{ 1 }{ 3 }\\vec{ AC } \\cr &= \\dfrac{ 1 }{ 3 }\\begin{pmatrix} 9 \\\\ 6 \\\\ -12 \\end{pmatrix} \\cr &= \\begin{pmatrix} 3 \\\\ 2 \\\\ -4 \\end{pmatrix} \\end{aligned}<br><br>Now we add this vector to the position vector of $C$ to find the coordinates of $D$:<br>\\begin{aligned} D &= \\begin{pmatrix} 11 \\\\ 5 \\\\ -7 \\end{pmatrix} + \\begin{pmatrix} 3 \\\\ 2 \\\\ -4 \\end{pmatrix} \\cr &= \\begin{pmatrix} 14 \\\\ 7 \\\\ -11 \\end{pmatrix} \\end{aligned}<br><br>So the coordinates of the point $D$ are $(14, 7, -11)$."
                ],
                "pi_options": [
                        {
                                "ans": "$$AB : BC = 1 : 2, \\quad D(14, 7, -3)$$",
                                "feedback": "This option contains a sign error in the $z$-coordinate of point $D$. When adding $-7$ and $-4$, you must obtain $-11$, not $-3$."
                        },
                        {
                                "ans": "$$AB : BC = 1 : 3, \\quad D(14, 7, -11)$$",
                                "feedback": "This option lists an incorrect ratio. Because $\\vec{BC} = 2\\vec{AB}$, the ratio of the lengths $AB : BC$ is $1 : 2$, not $1 : 3$."
                        },
                        {
                                "ans": "$$AB : BC = 1 : 2, \\quad D(8, 3, -3)$$",
                                "feedback": "This option results from subtracting the vector $\\vec{CD}$ from $C$ instead of adding it, which would find a point that lies between $A$ and $C$ rather than on $AC$ produced."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "Proving Collinearity",
                        "content": "To prove that three points $A$, $B$, and $C$ are collinear, showing that $\\vec{ AB }$ and $\\vec{ AC }$ are parallel (scalar multiples) is only half the battle. You must explicitly state that they also share a common point (such as $A$ or $B$) to guarantee they lie on the exact same line, rather than on two parallel lines. Don't omit this crucial final sentence!"
                }
        },
        {
    "id": "004661",
    "board": "WJEC",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Algebraic Equations",
    "subtopic": [
        "Absolute Value Equations"
    ],
    "img": false,
    "question": "Solve the equation: $5|3x - 1| = 10|x + 4|$",
    "steps": [
        "To solve the absolute value equation, we can first simplify it by dividing both sides of the equation by $5$ to obtain: <br> $|3x - 1| = 2|x + 4|$",
        "Since both $|3x - 1|$ and $2|x + 4|$ are non-negative for all real values of $x$, we can square both sides to eliminate the absolute value signs: <br> \\begin{aligned} (3x - 1)^2 &= (2(x + 4))^2 \\cr (3x - 1)^2 &= 4(x + 4)^2 \\end{aligned}",
        "Next, we expand both sides and simplify the resulting quadratic equation: <br> \\begin{aligned} 9x^2 - 6x + 1 &= 4(x^2 + 8x + 16) \\cr 9x^2 - 6x + 1 &= 4x^2 + 32x + 64 \\cr 5x^2 - 38x - 63 &= 0 \\end{aligned}",
        "Now, we can solve this quadratic equation by factoring: <br> \\begin{aligned} (5x + 7)(x - 9) &= 0 \\end{aligned} <br> This yields the two exact real solutions: <br> \\begin{aligned} x = 9 \\quad \\text{or} \\quad x = -\\dfrac{ 7 }{ 5 } \\end{aligned} <br> Both solutions satisfy the original equation, which can be verified by direct substitution."
    ],
    "pi_options": [
        {
            "ans": "$x = 9$ and $x = -\\dfrac{ 5 }{ 7 }$",
            "feedback": "This error occurs if you invert the fraction when solving the linear component $5x + 7 = 0$, leading to $x = -\\dfrac{ 5 }{ 7 }$ instead of the correct value of $-\\dfrac{ 7 }{ 5 }$."
        },
        {
            "ans": "$x = -9$ and $x = \\dfrac{ 7 }{ 5 }$",
            "feedback": "This mistake arises from a sign error when factoring the simplified quadratic equation, which results in the factored form $(5x - 7)(x + 9) = 0$ instead of $(5x + 7)(x - 9) = 0$."
        },
        {
            "ans": "$x = 9$ only",
            "feedback": "This happens if you only solve the positive linear case $3x - 1 = 2(x + 4)$ and completely omit the negative case $3x - 1 = -2(x + 4)$, which is a critical step in absolute value equations."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Expanding Coefficients",
        "content": "When squaring both sides of an equation like $|3x - 1| = 2|x + 4|$, a very common student mistake is to forget to square the constant multiplier on the right-hand side. Remember that $(2|x + 4|)^2$ becomes $4(x + 4)^2$. Forgetting to square this coefficient will lead to an incorrect quadratic equation."
    }
},
{
    "id": "004662",
    "board": "WJEC",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Algebraic Inequalities",
    "subtopic": [
        "Absolute Value Inequalities"
    ],
    "img": false,
    "question": "Solve the inequality: $|2x - 3| \\ge |x + 3|$",
    "steps": [
        "Since both sides of the inequality represent absolute values, they are guaranteed to be non-negative. This allows us to square both sides of the inequality without changing the direction of the inequality sign: <br> \\begin{aligned} (2x - 3)^2 &\\ge (x + 3)^2 \\end{aligned}",
        "We now expand both quadratic terms and collect like terms on one side: <br> \\begin{aligned} 4x^2 - 12x + 9 &\\ge x^2 + 6x + 9 \\cr 3x^2 - 18x &\\ge 0 \\end{aligned}",
        "Factorising the quadratic inequality gives: <br> \\begin{aligned} 3x(x - 6) &\\ge 0 \\end{aligned}",
        "The critical values are $x = 0$ and $x = 6$. For the product of $3x$ and $(x - 6)$ to be greater than or equal to zero, the variable $x$ must lie outside or on the boundaries of these critical values. <br> Therefore, the solution set is: <br> \\begin{aligned} x \\le 0 \\quad \\text{or} \\quad x \\ge 6 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$0 \\le x \\le 6$",
            "feedback": "This error occurs if you correctly determine the critical values of $x = 0$ and $x = 6$ but choose the region between them rather than the regions outside of them."
        },
        {
            "ans": "$x \\le -3$ or $x \\ge 3$",
            "feedback": "This is a common error resulting from a miscalculation of the boundary points, sometimes caused by incorrectly handling the absolute value bounds under interval testing."
        },
        {
            "ans": "$x \\ge 6$ only",
            "feedback": "This happens if you only solve the linear inequality $2x - 3 \\ge x + 3$ without considering the other case where the signs of the absolute values differ."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Squaring Inequalities",
        "content": "Squaring both sides of an inequality is only safe when both sides are guaranteed to be non-negative, which is always true for absolute value expressions like $|A| \\ge |B|$. It is a highly efficient way to find the boundary points without having to solve multiple separate linear inequalities."
    }
},
{
    "id": "004663",
    "board": "WJEC",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Algebraic Equations",
    "subtopic": [
        "Absolute Value Equations",
        "Quadratic Equations"
    ],
    "img": false,
    "question": "Solve the equation: $|x^2 - 3| = 2x$",
    "steps": [
        "First, we establish the domain constraint. Since the left-hand side is an absolute value (which is always non-negative), the right-hand side must also be non-negative: <br> \\begin{aligned} 2x &\\ge 0 \\cr x &\\ge 0 \\end{aligned}",
        "Next, we split the absolute value equation into two cases. <br> <strong>Case 1:</strong> $x^2 - 3 \\ge 0$ <br> \\begin{aligned} x^2 - 3 &= 2x \\cr x^2 - 2x - 3 &= 0 \\cr (x - 3)(x + 1) &= 0 \\end{aligned} <br> This gives $x = 3$ or $x = -1$. Because our domain requires $x \\ge 0$, we must reject $x = -1$. Thus, $x = 3$ is our first valid solution.",
        "<strong>Case 2:</strong> $x^2 - 3 < 0$ <br> \\begin{aligned} -(x^2 - 3) &= 2x \\cr 3 - x^2 &= 2x \\cr x^2 + 2x - 3 &= 0 \\cr (x + 3)(x - 1) &= 0 \\end{aligned} <br> This gives $x = 1$ or $x = -3$. Because our domain requires $x \\ge 0$, we must reject $x = -3$. Thus, $x = 1$ is our second valid solution.",
        "Combining the valid solutions from both cases, we find the final solution set: <br> \\begin{aligned} x = 1 \\quad \\text{or} \\quad x = 3 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$x = -1$, $x = 1$, and $x = 3$",
            "feedback": "This error occurs if you fail to check the domain condition $x \\ge 0$ and incorrectly include the negative root $x = -1$ while rejecting only $x = -3$."
        },
        {
            "ans": "$x = -3$, $x = -1$, $x = 1$, and $x = 3$",
            "feedback": "This happens if you do not check for extraneous solutions at all. In absolute value equations where the variable is outside the modulus, negative values can create invalid mathematical statements."
        },
        {
            "ans": "$x = 3$ only",
            "feedback": "This occurs if you only consider the positive case $x^2 - 3 = 2x$ and completely omit the negative case $-(x^2 - 3) = 2x$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Extraneous Solution Trap",
        "content": "Always check your solutions against the original equation. Since the right-hand side is $2x$, any negative solution is automatically extraneous because $|x^2 - 3|$ cannot equal a negative number."
    }
},
{
    "id": "004664",
    "board": "WJEC",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Algebraic Equations",
    "subtopic": [
        "Absolute Value Equations",
        "Exponentials"
    ],
    "img": false,
    "question": "Find the exact real solutions to the equation: $|e^x - 3| = 2e^{-x}$",
    "steps": [
        "To simplify the equation, we define a substitution variable $t = e^x$. Since $e^x > 0$ for all real values of $x$, we must have $t > 0$. Rewriting the equation in terms of $t$ gives: <br> \\begin{aligned} |t - 3| &= \\dfrac{ 2 }{ t } \\end{aligned}",
        "We split this into two cases based on the argument of the absolute value. <br> <strong>Case 1:</strong> $t \\ge 3$ <br> \\begin{aligned} t - 3 &= \\dfrac{ 2 }{ t } \\cr t^2 - 3t - 2 &= 0 \\end{aligned} <br> Using the quadratic formula, we find: <br> \\begin{aligned} t &= \\dfrac{ 3 \\pm \\sqrt{ (-3)^2 - 4(1)(-2) } }{ 2 } \\cr t &= \\dfrac{ 3 \\pm \\sqrt{ 17 } }{ 2 } \\end{aligned} <br> Since we require $t \\ge 3$, and $\\dfrac{ 3 + \\sqrt{ 17 } }{ 2 } \\approx 3.56 \\ge 3$, this positive root is valid: <br> \\begin{aligned} e^x &= \\dfrac{ 3 + \\sqrt{ 17 } }{ 2 } \\cr x &= \\ln \\left( \\dfrac{ 3 + \\sqrt{ 17 } }{ 2 } \\right) \\end{aligned}",
        "<strong>Case 2:</strong> $0 < t < 3$ <br> \\begin{aligned} -(t - 3) &= \\dfrac{ 2 }{ t } \\cr 3 - t &= \\dfrac{ 2 }{ t } \\cr 3t - t^2 &= 2 \\cr t^2 - 3t + 2 &= 0 \\cr (t - 1)(t - 2) &= 0 \\end{aligned} <br> This yields $t = 1$ and $t = 2$. Both values satisfy the constraint $0 < t < 3$.",
        "Converting these values of $t$ back to $x$: <br> \\begin{aligned} e^x = 1 &\\implies x = 0 \\cr e^x = 2 &\\implies x = \\ln 2 \\end{aligned} <br> Thus, the complete set of exact real solutions is: <br> \\begin{aligned} x = 0, \\quad x = \\ln 2, \\quad x = \\ln \\left( \\dfrac{ 3 + \\sqrt{ 17 } }{ 2 } \\right) \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$x = 0$ and $x = \\ln 2$",
            "feedback": "This error is common if you solve Case 2 correctly but fail to identify the valid solution from the Case 1 quadratic equation."
        },
        {
            "ans": "$x = 0$, $x = \\ln 2$, and $x = \\ln 3$",
            "feedback": "This error occurs from mistakenly substituting the boundary value $t = 3$ as a solution instead of using the actual root $t = \\dfrac{ 3 + \\sqrt{ 17 } }{ 2 }$ from the quadratic formula."
        },
        {
            "ans": "$x = 0$ and $x = \\ln 3$",
            "feedback": "This results from a combination of algebraic slips, incorrectly solving the quadratic for $t$, and confusing the boundaries of the absolute value function."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Exponential Substitutions",
        "content": "Substituting $t = e^x$ is a powerful tool to reduce transcendental equations to algebraic ones. Always remember that because $e^x > 0$, any negative values of $t$ must be discarded immediately before converting back to $x$."
    }
},
{
    "id": "004665",
    "board": "WJEC",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Algebraic Equations",
    "subtopic": [
        "Absolute Value Equations"
    ],
    "img": false,
    "question": "Solve the equation: $|2x - 1| = |x + 5| - 3$",
    "steps": [
        "To solve an equation containing multiple absolute value terms, we identify the critical points where the arguments equal zero: $x = -5$ and $x = 0.5$. These points divide the real number line into three intervals: <br> <strong>Interval 1:</strong> $x < -5$ <br> <strong>Interval 2:</strong> $-5 \\le x < 0.5$ <br> <strong>Interval 3:</strong> $x \\ge 0.5$",
        "We solve the equation in <strong>Interval 1</strong> ($x < -5$). In this region, $|2x - 1| = 1 - 2x$ and $|x + 5| = -x - 5$: <br> \\begin{aligned} 1 - 2x &= -x - 5 - 3 \\cr 1 - 2x &= -x - 8 \\cr x &= 9 \\end{aligned} <br> Since $x = 9$ does not lie in the interval $x < -5$, this solution is extraneous and is rejected.",
        "We solve the equation in <strong>Interval 2</strong> ($-5 \\le x < 0.5$). In this region, $|2x - 1| = 1 - 2x$ and $|x + 5| = x + 5$: <br> \\begin{aligned} 1 - 2x &= x + 5 - 3 \\cr 1 - 2x &= x + 2 \\cr -3x &= 1 \\cr x &= -\\dfrac{ 1 }{ 3 } \\end{aligned} <br> Since $-\\dfrac{ 1 }{ 3 }$ lies in the interval $[-5, 0.5)$, this is a valid solution.",
        "We solve the equation in <strong>Interval 3</strong> ($x \\ge 0.5$). In this region, $|2x - 1| = 2x - 1$ and $|x + 5| = x + 5$: <br> \\begin{aligned} 2x - 1 &= x + 5 - 3 \\cr 2x - 1 &= x + 2 \\cr x &= 3 \\end{aligned} <br> Since $3 \\ge 0.5$, this is a valid solution. <br> Combining the valid solutions, the final solution set is: <br> \\begin{aligned} x = -\\dfrac{ 1 }{ 3 } \\quad \\text{or} \\quad x = 3 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$x = -2$ and $x = 4$",
            "feedback": "This represents an error caused by incorrect interval boundary setup and sign slips during linear algebraic consolidation."
        },
        {
            "ans": "$x = -\\dfrac{ 1 }{ 3 }$, $x = 3$, and $x = 9$",
            "feedback": "This happens if you solve the algebraic casework but forget to verify whether each solution actually lies within its corresponding interval domain."
        },
        {
            "ans": "$x = 3$ only",
            "feedback": "This occurs if you only consider the case where both absolute value expressions are positive, neglecting the interval where one is positive and the other is negative."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Interval Casework Verification",
        "content": "When solving equations with multiple moduli, the interval (or critical point) method is the safest route. However, you must always verify that your final algebraic solutions fall inside the specific interval they were derived from."
    }
},
{
    "id": "004666",
    "board": "WJEC",
    "level": "A",
    "major_area": "Geometry",
    "topic": "Circular Measure",
    "subtopic": [
        "Arc Length and Sector Area"
    ],
    "img": false,
    "question": "A circle has centre $O$ and radius $6\\text{ cm}$. Points $P$ and $Q$ lie on the circumference of the circle such that the arc length $PQ$ is $9\\text{ cm}$. <br><br><strong>(a)</strong> Calculate the angle, in radians, subtended at $O$ by the arc $PQ$. <br><br><strong>(b)</strong> Determine the area of the sector $OPQ$.",
    "steps": [
        "To find the angle $\\theta$ (in radians) subtended at the centre of a circle by an arc of length $s$, we use the formula: <br> \\begin{aligned} s &= r\\theta \\end{aligned} <br> where $r$ is the radius of the circle.",
        "We substitute $s = 9$ and $r = 6$ into the formula and solve for $\\theta$: <br> \\begin{aligned} 9 &= 6\\theta \\cr \\theta &= \\dfrac{ 9 }{ 6 } = 1.5 \\quad \\text{radians} \\end{aligned}",
        "To find the area $A$ of the sector $OPQ$, we use the sector area formula: <br> \\begin{aligned} A &= \\dfrac{ 1 }{ 2 } r^2 \\theta \\end{aligned}",
        "We substitute our radius $r = 6$ and our calculated angle $\\theta = 1.5$ into the area formula: <br> \\begin{aligned} A &= \\dfrac{ 1 }{ 2 } (6)^2 (1.5) \\cr A &= \\dfrac{ 1 }{ 2 } (36) (1.5) \\cr A &= 27 \\quad \\text{cm}^2 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $\\theta = 1.5$ rad, <strong>(b)</strong> $A = 54\\text{ cm}^2$",
            "feedback": "This error occurs if you forget the factor of $\\dfrac{ 1 }{ 2 }$ in the sector area formula $A = \\dfrac{ 1 }{ 2 }r^2\\theta$, calculating $r^2\\theta$ instead."
        },
        {
            "ans": "<strong>(a)</strong> $\\theta = 0.67$ rad, <strong>(b)</strong> $A = 12\\text{ cm}^2$",
            "feedback": "This mistake arises from incorrectly dividing the radius by the arc length to find the angle, writing $\\theta = \\dfrac{ r }{ s } = \\dfrac{ 6 }{ 9 } = \\dfrac{ 2 }{ 3 }$ instead of $\\theta = \\dfrac{ s }{ r }$."
        },
        {
            "ans": "<strong>(a)</strong> $\\theta = 1.5$ rad, <strong>(b)</strong> $A = 18\\text{ cm}^2$",
            "feedback": "This mistake is caused by incorrectly applying the formula $A = \\dfrac{ 1 }{ 2 }r^2\\theta$, such as failing to square the radius and using a linear calculation instead."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Radians Simplicity",
        "content": "Using radians makes circular measure calculations incredibly clean. The simple formula $s = r\\theta$ only holds true when $\\theta$ is measured in radians. If the angle were in degrees, you would have to carry around the factor $\\dfrac{ \\pi }{ 180 }$."
    }
},
{
    "id": "004667",
    "board": "WJEC",
    "level": "A",
    "major_area": "Geometry",
    "topic": "Circular Measure",
    "subtopic": [
        "Sector Perimeter and Area"
    ],
    "img": false,
    "question": "A sector of a circle of radius $r\\text{ cm}$ has an angle of $\\theta$ radians at its centre. <br><br>Given that the perimeter of the sector is $20\\text{ cm}$ and its area is $24\\text{ cm}^2$, find the possible values of $r$ and the corresponding values of $\\theta$.",
    "steps": [
        "The perimeter $P$ of a sector consists of two straight radial boundaries and one curved arc length: <br> \\begin{aligned} P &= 2r + r\\theta = 20 \\end{aligned} <br> The area $A$ of the sector is given by: <br> \\begin{aligned} A &= \\dfrac{ 1 }{ 2 } r^2 \\theta = 24 \\end{aligned}",
        "We can express the angle $\\theta$ in terms of the radius $r$ using the area equation: <br> \\begin{aligned} \\dfrac{ 1 }{ 2 } r^2 \\theta &= 24 \\cr r^2 \\theta &= 48 \\cr \\theta &= \\dfrac{ 48 }{ r^2 } \\end{aligned}",
        "We substitute our expression for $\\theta$ into the perimeter equation: <br> \\begin{aligned} 2r + r\\left( \\dfrac{ 48 }{ r^2 } \\right) &= 20 \\cr 2r + \\dfrac{ 48 }{ r } &= 20 \\end{aligned}",
        "To clear the fraction, we multiply the entire equation by $r$ and rearrange it into a standard quadratic form: <br> \\begin{aligned} 2r^2 + 48 &= 20r \\cr 2r^2 - 20r + 48 &= 0 \\cr r^2 - 10r + 24 &= 0 \\end{aligned}",
        "We solve this quadratic equation by factorisation: <br> \\begin{aligned} (r - 6)(r - 4) &= 0 \\end{aligned} <br> This yields two possible values for the radius: <br> \\begin{aligned} r = 4 \\quad \\text{or} \\quad r = 6 \\end{aligned}",
        "Finally, we find the corresponding values of $\\theta$ for each radius: <br> For $r = 4$: <br> \\begin{aligned} \\theta &= \\dfrac{ 48 }{ 4^2 } = 3 \\quad \\text{radians} \\end{aligned} <br> For $r = 6$: <br> \\begin{aligned} \\theta &= \\dfrac{ 48 }{ 6^2 } = \\dfrac{ 4 }{ 3 } \\quad \\text{radians} \\end{aligned} <br> Thus, the possible pairs are $(r = 4\\text{ cm}, \\theta = 3\\text{ rad})$ or $(r = 6\\text{ cm}, \\theta = \\dfrac{ 4 }{ 3 }\\text{ rad})$."
    ],
    "pi_options": [
        {
            "ans": "$r = 4\\text{ cm}, \\theta = 1.5\\text{ rad}$ or $r = 6\\text{ cm}, \\theta = 1.33\\text{ rad}$",
            "feedback": "This mistake occurs if you forget to double the area in the first step when expressing $\\theta$, writing $\\theta = \\dfrac{ 24 }{ r^2 }$ instead of $\\theta = \\dfrac{ 48 }{ r^2 }$."
        },
        {
            "ans": "$r = 4\\text{ cm}, \\theta = 4\\text{ rad}$ or $r = 6\\text{ cm}, \\theta = \\dfrac{ 8 }{ 3 }\\text{ rad}$",
            "feedback": "This error occurs if you express the perimeter as $r + r\\theta = 20$ (forgetting that a sector has two radial boundaries, not one), which alters the quadratic coefficient when solving."
        },
        {
            "ans": "$r = 8\\text{ cm}, \\theta = 0.75\\text{ rad}$ or $r = 3\\text{ cm}, \\theta = 5.33\\text{ rad}$",
            "feedback": "This arises from a factorisation error of the quadratic equation, such as misidentifying the factors of $24$ that sum to $-10$ (e.g. using $-8$ and $-3$ incorrectly instead of $-6$ and $-4$)."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Boundaries of a Sector",
        "content": "A very frequent student error is writing the perimeter of a sector as $P = r + r\\theta$ or $P = r\\theta$. Remember that a sector is a closed slice of a circle bounded by two straight radii and one curved arc, so its perimeter must always be $P = 2r + r\\theta$."
    }
},
{
    "id": "004668",
    "board": "WJEC",
    "level": "A",
    "major_area": "Geometry",
    "topic": "Circular Measure",
    "subtopic": [
        "Chord Length and Segment Area"
    ],
    "img": false,
    "question": "A sector of a circle with centre $O$ and radius $8\\text{ cm}$ has a central angle of $\\theta = \\dfrac{ 2\\pi }{ 3 }$ radians. Let $A$ and $B$ be the points on the circumference bounding the sector. <br><br><strong>(a)</strong> Find the exact length of the chord $AB$. <br><br><strong>(b)</strong> Determine the exact area of the segment bounded by the chord $AB$ and the arc $AB$.",
    "steps": [
        "We can find the exact length of the chord $AB$ by splitting the isosceles triangle $OAB$ into two congruent right-angled triangles with an angle of $\\dfrac{ \\theta }{ 2 } = \\dfrac{ \\pi }{ 3 }$ radians: <br> \\begin{aligned} AB &= 2r \\sin \\left( \\dfrac{ \\theta }{ 2 } \\right) \\end{aligned}",
        "Substituting $r = 8$ and the angle into our chord formula yields: <br> \\begin{aligned} AB &= 2(8) \\sin \\left( \\dfrac{ \\pi }{ 3 } \\right) \\cr AB &= 16 \\left( \\dfrac{ \\sqrt{ 3 } }{ 2 } \\right) \\cr AB &= 8\\sqrt{ 3 } \\quad \\text{cm} \\end{aligned}",
        "The area of the segment is calculated by subtracting the area of the triangle $OAB$ from the area of the sector $OAB$: <br> \\begin{aligned} A_{\\text{segment}} &= A_{\\text{sector}} - A_{\\text{triangle}} \\end{aligned}",
        "First, we calculate the area of the sector: <br> \\begin{aligned} A_{\\text{sector}} &= \\dfrac{ 1 }{ 2 } r^2 \\theta \\cr A_{\\text{sector}} &= \\dfrac{ 1 }{ 2 } (8)^2 \\left( \\dfrac{ 2\\pi }{ 3 } \\right) \\cr A_{\\text{sector}} &= \\dfrac{ 64\\pi }{ 3 } \\quad \\text{cm}^2 \\end{aligned}",
        "Next, we calculate the area of the triangle using the sine area formula: <br> \\begin{aligned} A_{\\text{triangle}} &= \\dfrac{ 1 }{ 2 } r^2 \\sin \\theta \\cr A_{\\text{triangle}} &= \\dfrac{ 1 }{ 2 } (8)^2 \\sin \\left( \\dfrac{ 2\\pi }{ 3 } \\right) \\cr A_{\\text{triangle}} &= 32 \\left( \\dfrac{ \\sqrt{ 3 } }{ 2 } \\right) = 16\\sqrt{ 3 } \\quad \\text{cm}^2 \\end{aligned}",
        "Finally, we subtract the triangle area from the sector area to obtain the exact area of the segment: <br> \\begin{aligned} A_{\\text{segment}} &= \\dfrac{ 64\\pi }{ 3 } - 16\\sqrt{ 3 } \\quad \\text{cm}^2 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $8\\text{ cm}$, <strong>(b)</strong> $\\dfrac{ 64\\pi }{ 3 } - 16\\sqrt{ 3 }\\text{ cm}^2$",
            "feedback": "This error occurs in part (a) if you assume the triangle $OAB$ is equilateral because of the presence of $\\pi/3$ components, leading to a chord length equal to the radius ($8\\text{ cm}$)."
        },
        {
            "ans": "<strong>(a)</strong> $8\\sqrt{ 3 }\\text{ cm}$, <strong>(b)</strong> $\\dfrac{ 64\\pi }{ 3 } - 32\\sqrt{ 3 }\\text{ cm}^2$",
            "feedback": "This error arises in part (b) if you forget the factor of $\\dfrac{ 1 }{ 2 }$ in the triangle area formula $\\dfrac{ 1 }{ 2 }r^2\\sin\\theta$, subtracting $32\\sqrt{ 3 }$ instead of $16\\sqrt{ 3 }$."
        },
        {
            "ans": "<strong>(a)</strong> $4\\sqrt{ 3 }\\text{ cm}$, <strong>(b)</strong> $\\dfrac{ 32\\pi }{ 3 } - 16\\sqrt{ 3 }\\text{ cm}^2$",
            "feedback": "This mistake occurs if you use a radius of $4\\text{ cm}$ instead of $8\\text{ cm}$ in your calculations, perhaps from confusing the radius with half of its value."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Chord Length Shortcut",
        "content": "For any isosceles triangle formed by a sector, the chord length formula $2r \\sin \\left( \\dfrac{ \\theta }{ 2 } \\right)$ is a massive timesaver. It bypasses the need to write out the full Cosine Rule $a^2 = b^2 + c^2 - 2bc \\cos A$, although both methods yield the exact same simplified result."
    }
},
{
    "id": "004669",
    "board": "WJEC",
    "level": "A",
    "major_area": "Geometry",
    "topic": "Circular Measure",
    "subtopic": [
        "Cone Geometry",
        "Sector to Cone Mapping"
    ],
    "img": false,
    "question": "A sector of a circle of radius $12\\text{ cm}$ with sector angle $\\theta = \\dfrac{ 4\\pi }{ 3 }$ radians is bent to form the curved surface of a right circular cone. <br><br><strong>(a)</strong> Find the radius of the base of the cone. <br><br><strong>(b)</strong> Determine the height of the cone, giving your answer in exact surd form.",
    "steps": [
        "When a sector of a circle of radius $R$ is bent to form a cone, the arc length $s$ of the sector becomes the circumference of the circular base of the cone (which has radius $r$): <br> \\begin{aligned} s &= 2\\pi r \\end{aligned}",
        "We calculate the arc length $s$ using the radius of the sector $R = 12\\text{ cm}$ and angle $\\theta = \\dfrac{ 4\\pi }{ 3 }$: <br> \\begin{aligned} s &= R\\theta \\cr s &= 12 \\left( \\dfrac{ 4\\pi }{ 3 } \\right) = 16\\pi \\quad \\text{cm} \\end{aligned}",
        "We set the base circumference of the cone equal to this arc length and solve for $r$: <br> \\begin{aligned} 2\\pi r &= 16\\pi \\cr r &= 8 \\quad \\text{cm} \\end{aligned}",
        "The radius of the original sector ($R = 12\\text{ cm}$) becomes the slant height of the formed cone. The base radius of the cone is $r = 8\\text{ cm}$. By Pythagoras' theorem, the vertical height $h$ is: <br> \\begin{aligned} h^2 + r^2 &= R^2 \\cr h &= \\sqrt{ R^2 - r^2 } \\end{aligned}",
        "We substitute our values into the theorem to find the exact vertical height: <br> \\begin{aligned} h &= \\sqrt{ 12^2 - 8^2 } \\cr h &= \\sqrt{ 144 - 64 } \\cr h &= \\sqrt{ 80 } = 4\\sqrt{ 5 } \\quad \\text{cm} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $8\\text{ cm}$, <strong>(b)</strong> $10\\text{ cm}$",
            "feedback": "This error occurs in part (b) if you mistakenly assume a $3-4-5$ Pythagorean triple structure, resulting in a height of $10\\text{ cm}$ from a base radius of $8\\text{ cm}$ and a slant height of $12\\text{ cm}$ (which is mathematically invalid since $8^2 + 10^2 \\neq 12^2$)."
        },
        {
            "ans": "<strong>(a)</strong> $4\\text{ cm}$, <strong>(b)</strong> $8\\sqrt{ 2 }\\text{ cm}$",
            "feedback": "This mistake occurs in part (a) if you forget the factor of $2\\pi$ in the circumference formula, writing $r = \\dfrac{ s }{ \\pi } = 16$ or making an arithmetic division slip."
        },
        {
            "ans": "<strong>(a)</strong> $8\\text{ cm}$, <strong>(b)</strong> $4\\sqrt{ 13 }\\text{ cm}$",
            "feedback": "This error occurs in part (b) if you add the squares of the base radius and slant height instead of subtracting them, calculating $h = \\sqrt{ 12^2 + 8^2 } = \\sqrt{ 208 } = 4\\sqrt{ 13 }$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Sector-to-Cone Mapping",
        "content": "Visualizing 3D transformations is a key skill. Always remember the two fundamental rules of sector-to-cone mapping: <br> 1. The arc length of the sector becomes the base circumference of the cone ($s = 2\\pi r$). <br> 2. The radius of the sector becomes the slant height of the cone ($l = R$)."
    }
},
{
    "id": "004670",
    "board": "WJEC",
    "level": "A",
    "major_area": "Geometry",
    "topic": "Circular Measure",
    "subtopic": [
        "Intersecting Circles",
        "Area of Common Region"
    ],
    "img": false,
    "question": "Two identical circles, each of radius $6\\text{ cm}$, have their centres at $O_1$ and $O_2$. The distance between the centres is also $6\\text{ cm}$, so that the circumference of each circle passes through the centre of the other. <br><br>Find the exact area of the region common to both circles.",
    "steps": [
        "Let $A$ and $B$ be the two points where the circumferences of the two circles intersect. Since the distance between centres is equal to the radius ($6\\text{ cm}$), we observe that: <br> \\begin{aligned} O_1 O_2 &= 6 \\cr O_1 A &= O_2 A = 6 \\end{aligned} <br> Therefore, the triangle $O_1 A O_2$ is equilateral, and the angle $\\angle A O_1 O_2 = \\dfrac{ \\pi }{ 3 }$ radians.",
        "By symmetry, the total angle of the sector $A O_1 B$ is double the angle of triangle $O_1 A O_2$: <br> \\begin{aligned} \\theta &= 2 \\times \\angle A O_1 O_2 \\cr \\theta &= 2 \\times \\dfrac{ \\pi }{ 3 } = \\dfrac{ 2\\pi }{ 3 } \\quad \\text{radians} \\end{aligned}",
        "The common region consists of two identical circular segments separated by the common chord $AB$. The area of one such segment in circle $O_1$ is: <br> \\begin{aligned} A_{\\text{segment}} &= A_{\\text{sector}} - A_{\\text{triangle}} \\cr A_{\\text{segment}} &= \\dfrac{ 1 }{ 2 } r^2 \\theta - \\dfrac{ 1 }{ 2 } r^2 \\sin \\theta \\end{aligned}",
        "Substituting $r = 6$ and $\\theta = \\dfrac{ 2\\pi }{ 3 }$ into the segment formula: <br> \\begin{aligned} A_{\\text{segment}} &= \\dfrac{ 1 }{ 2 } (6)^2 \\left( \\dfrac{ 2\\pi }{ 3 } \\right) - \\dfrac{ 1 }{ 2 } (6)^2 \\sin \\left( \\dfrac{ 2\\pi }{ 3 } \\right) \\cr A_{\\text{segment}} &= 12\\pi - 18 \\left( \\dfrac{ \\sqrt{ 3 } }{ 2 } \\right) = 12\\pi - 9\\sqrt{ 3 } \\end{aligned}",
        "We double the area of this single segment to find the total area of the common region: <br> \\begin{aligned} A_{\\text{total}} &= 2 \\times A_{\\text{segment}} \\cr A_{\\text{total}} &= 2(12\\pi - 9\\sqrt{ 3 }) \\cr A_{\\text{total}} &= 24\\pi - 18\\sqrt{ 3 } \\quad \\text{cm}^2 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$12\\pi - 9\\sqrt{ 3 }\\text{ cm}^2$",
            "feedback": "This represents the area of only one segment. You must double this result because the overlapping region consists of two identical segments joined along the common chord."
        },
        {
            "ans": "$24\\pi - 9\\sqrt{ 3 }\\text{ cm}^2$",
            "feedback": "This error occurs if you only subtract the area of one triangle instead of two when combining the sector areas, or make a scaling slip when doubling."
        },
        {
            "ans": "$18\\pi - 12\\sqrt{ 3 }\\text{ cm}^2$",
            "feedback": "This represents an algebraic simplification error where the coefficients are miscalculated during the expansion of the segment subtraction."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Overlapping Circles Symmetry",
        "content": "When two identical circles of radius $r$ intersect such that each passes through the other's centre, they form a symmetric lens shape. This shape is exactly double the area of a segment of a circle with a sector angle of $\\dfrac{ 2\\pi }{ 3 }$ radians."
    }
},
{
    "id": "004671",
    "board": "WJEC",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Graph Transformations",
    "subtopic": [
        "Coordinate Transformations"
    ],
    "img": false,
    "question": "The curve $y = f(x)$ passes through the points $(-2, 0)$, $(0, 8)$, and $(4, 0)$, and has a local maximum at $(1, 9)$. <br><br><strong>(a)</strong> Find the coordinates of the local maximum and the $x$-intercepts of the transformed curve $y = 2f(x + 3)$. <br><br><strong>(b)</strong> Find the coordinates of the local minimum and the $y$-intercept of the transformed curve $y = 5 - f(x)$.",
    "steps": [
        "To find the transformed coordinates under $y = 2f(x + 3)$, we must identify how the transformations affect any general point $(x, y)$ on the curve: <br> 1. The horizontal transformation inside the bracket, $x + 3$, shifts the graph horizontally to the left by $3$ units, so $x \\to x - 3$. <br> 2. The vertical transformation outside the bracket, $2f(\\dots)$, is a vertical stretch by a scale factor of $2$, so $y \\to 2y$. <br> Thus, any point $(x, y)$ transforms to: <br> \\begin{aligned} (x - 3, 2y) \\end{aligned}",
        "We apply these transformations to the original local maximum and the $x$-intercepts: <br> For the local maximum $(1, 9)$: <br> \\begin{aligned} (1 - 3, 2 \\times 9) &= (-2, 18) \\end{aligned} <br> For the $x$-intercepts $(-2, 0)$ and $(4, 0)$: <br> \\begin{aligned} (-2 - 3, 2 \\times 0) &= (-5, 0) \\cr (4 - 3, 2 \\times 0) &= (1, 0) \\end{aligned} <br> Thus, on the transformed curve, the new local maximum is at $(-2, 18)$ and the $x$-intercepts are at $(-5, 0)$ and $(1, 0)$.",
        "To find the transformed coordinates under $y = 5 - f(x)$, we analyze the transformations affecting $(x, y)$: <br> 1. There is no horizontal transformation, so $x$ remains unchanged. <br> 2. The vertical transformation, $-f(x) + 5$, reflects the graph in the $x$-axis (multiplying $y$ by $-1$) and then translates it vertically upwards by $5$ units. <br> Thus, any point $(x, y)$ transforms to: <br> \\begin{aligned} (x, -y + 5) \\end{aligned}",
        "We apply these transformations to the original local maximum and the $y$-intercept. Because the graph has been reflected vertically, the original local maximum becomes a local minimum: <br> \\begin{aligned} (1, -9 + 5) &= (1, -4) \\end{aligned} <br> For the $y$-intercept $(0, 8)$: <br> \\begin{aligned} (0, -8 + 5) &= (0, -3) \\end{aligned} <br> Thus, on the transformed curve, the local minimum is at $(1, -4)$ and the new $y$-intercept is at $(0, -3)$."
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> Max: $(4, 18)$, $x$-intercepts: $(1, 0)$, $(7, 0)$; <strong>(b)</strong> Min: $(1, -4)$, $y$-intercept: $(0, -3)$",
            "feedback": "This error occurs if you shift the graph to the right by $3$ units ($x \\to x + 3$) instead of to the left by $3$ units ($x \\to x - 3$) when evaluating $y = 2f(x + 3)$."
        },
        {
            "ans": "<strong>(a)</strong> Max: $(-2, 18)$, $x$-intercepts: $(-5, 0)$, $(1, 0)$; <strong>(b)</strong> Min: $(1, 14)$, $y$-intercept: $(0, 13)$",
            "feedback": "This mistake occurs in part (b) if you forget to reflect the $y$-coordinates before translating them upwards, calculating $y \\to y + 5$ instead of $y \\to -y + 5$."
        },
        {
            "ans": "<strong>(a)</strong> Max: $(-2, 9)$, $x$-intercepts: $(-5, 0)$, $(1, 0)$; <strong>(b)</strong> Min: $(1, -4)$, $y$-intercept: $(0, -3)$",
            "feedback": "This error occurs if you correctly identify the horizontal translation in part (a) but fail to apply the vertical scale factor of $2$ to the maximum point's $y$-coordinate."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Horizontal Shift Sign Rules",
        "content": "A classic mistake is translating the graph in the wrong direction. The transformation $f(x + a)$ shifts the graph horizontally by $-a$ units. Always think of it as solving the equation inside the bracket for $x$: $x + 3 = 0 \\implies x = -3$, which means moving $3$ units left."
    }
},
{
    "id": "004672",
    "board": "WJEC",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Graph Transformations",
    "subtopic": [
        "Modulus Function Transformations"
    ],
    "img": false,
    "question": "The curve $y = g(x)$ has a local minimum at $(3, -6)$ and crosses the axes at $(-1, 0)$, $(5, 0)$, and $(0, -5)$. <br><br><strong>(a)</strong> State the coordinates of the local maximum and the $y$-intercept of the curve $y = |g(x)|$. <br><br><strong>(b)</strong> State the coordinates of the two local minima of the curve $y = g(|x|)$.",
    "steps": [
        "The transformation $y = |g(x)|$ acts as a vertical reflection for any parts of the graph where $y < 0$: <br> 1. Any point $(x, y)$ where $y \\ge 0$ remains completely unchanged. <br> 2. Any point $(x, y)$ where $y < 0$ is reflected in the $x$-axis, transforming to $(x, -y)$.",
        "We apply the modulus to the local minimum and the $y$-intercept: <br> The original local minimum is at $(3, -6)$. Since $y = -6 < 0$, it is reflected across the $x$-axis, becoming a local maximum: <br> \\begin{aligned} (3, -(-6)) &= (3, 6) \\end{aligned} <br> The original $y$-intercept is at $(0, -5)$. Since $y = -5 < 0$, it is reflected across the $x$-axis: <br> \\begin{aligned} (0, -(-5)) &= (0, 5) \\end{aligned} <br> Thus, on $y = |g(x)|$, the local maximum is at $(3, 6)$ and the $y$-intercept is at $(0, 5)$.",
        "The transformation $y = g(|x|)$ discards the entire left-hand side of the graph (where $x < 0$) and replaces it with a reflection of the right-hand side (where $x \\ge 0$) across the $y$-axis: <br> 1. Any point $(x, y)$ with $x \\ge 0$ is preserved. <br> 2. This preserved right-hand side is then mirrored onto the left-hand side, so any preserved point $(x, y)$ with $x > 0$ generates a twin point at $(-x, y)$.",
        "The original local minimum at $(3, -6)$ lies in the region $x \\ge 0$, so it is preserved. Mirroring this point across the $y$-axis produces a second identical local minimum: <br> \\begin{aligned} (-3, -6) \\end{aligned} <br> Thus, the two local minima of the curve $y = g(|x|)$ are at $(3, -6)$ and $(-3, -6)$."
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> Max: $(3, 6)$, $y$-intercept: $(0, -5)$; <strong>(b)</strong> Minima: $(3, -6)$ and $(-3, -6)$",
            "feedback": "This mistake occurs if you correctly reflect the local minimum for $y = |g(x)|$ but forget to apply the modulus to the $y$-intercept $(0, -5)$, leaving it negative."
        },
        {
            "ans": "<strong>(a)</strong> Max: $(-3, -6)$, $y$-intercept: $(0, 5)$; <strong>(b)</strong> Minima: $(3, 6)$ and $(-3, 6)$",
            "feedback": "This error arises from confusing the vertical modulus transformation $y = |g(x)|$ with the horizontal modulus transformation $y = g(|x|)$, swapping their behaviors."
        },
        {
            "ans": "<strong>(a)</strong> Max: $(3, 6)$, $y$-intercept: $(0, 5)$; <strong>(b)</strong> Minima: $(3, -6)$ and $(-3, 6)$",
            "feedback": "This error occurs in part (b) if you mistakenly reflect the $y$-coordinate of the mirrored minimum, writing $(-3, 6)$ instead of $(-3, -6)$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Modulus Differences",
        "content": "It is crucial to distinguish between $|f(x)|$ and $f(|x|)$. The transformation $y = |f(x)|$ folds all negative outputs vertically upwards ($y \\to -y$ for $y < 0$). The transformation $y = f(|x|)$ mirrors the right-hand side of the graph onto the left-hand side, creating perfect symmetry about the $y$-axis."
    }
},
{
    "id": "004673",
    "board": "WJEC",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Graph Transformations",
    "subtopic": [
        "Combined Graph Transformations"
    ],
    "img": false,
    "question": "The curve $y = f(x)$ has a local maximum at the point $(6, 4)$. <br><br>Determine the coordinates of the corresponding stationary point on the transformed curve $y = 3f(2x - 8) + 5$ and state whether this new point is a local maximum or a local minimum.",
    "steps": [
        "To find the transformed $x$-coordinate, we look at the argument of the function, $2x - 8$. We set this expression equal to the original $x$-coordinate of the maximum: <br> \\begin{aligned} 2x - 8 &= 6 \\cr 2x &= 14 \\cr x &= 7 \\end{aligned}",
        "To find the transformed $y$-coordinate, we apply the vertical transformations $3y + 5$ to the original $y$-coordinate of the maximum point ($y = 4$): <br> \\begin{aligned} y &= 3f(6) + 5 \\cr y &= 3(4) + 5 \\cr y &= 17 \\end{aligned} <br> This gives the coordinates of the new stationary point as $(7, 17)$.",
        "The vertical scale factor is $3$. Because this multiplier is positive, there is no vertical reflection across the $x$-axis. Therefore, the concavity of the curve at the stationary point remains unchanged, and the point remains a local maximum."
    ],
    "pi_options": [
        {
            "ans": "$(7, 17)$, which is a local minimum",
            "feedback": "This error occurs if you mistakenly think that scaling or translating a graph vertically reverses its concavity, causing a maximum to become a minimum."
        },
        {
            "ans": "$(4, 17)$, which is a local maximum",
            "feedback": "This common error occurs if you incorrectly apply the horizontal operations in the order they are written (such as dividing by $2$ to get $3$, then subtracting $8$). The correct sequence is to set $2x - 8 = 6$ and solve for $x$."
        },
        {
            "ans": "$(20, 17)$, which is a local maximum",
            "feedback": "This mistake occurs if you solve the horizontal transformation in the wrong direction, calculating $2(6) + 8 = 20$ instead of setting $2x - 8 = 6$ and isolating $x$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Horizontal Mapping Trick",
        "content": "When combining horizontal transformations, the safest mathematical trick to avoid order-of-operation slips is to set the new argument equal to the old coordinate (e.g. $2x - 8 = x_{\\text{old}}$) and solve for $x$. This automatically handles the reverse order of operations correctly!"
    }
},
{
    "id": "004674",
    "board": "WJEC",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Graph Transformations",
    "subtopic": [
        "Trigonometric Transformations"
    ],
    "img": false,
    "question": "The curve $y = \\cos x$ (for $0 \\le x \\le 2\\pi$) has a minimum point at $(\\pi, -1)$. <br><br>Determine the coordinates of the corresponding minimum point on the transformed curve $y = 4\\cos\\left(2x - \\dfrac{ \\pi }{ 3 }\\right) - 2$ that lies within the interval $0 \\le x \\le \\pi$.",
    "steps": [
        "We identify the horizontal transformation inside the cosine argument, which is $2x - \\dfrac{ \\pi }{ 3 }$. To find the new $x$-coordinate, we set this argument equal to the original $x$-coordinate of the minimum point: <br> \\begin{aligned} 2x - \\dfrac{ \\pi }{ 3 } &= \\pi \\end{aligned}",
        "We solve for $x$ algebraically: <br> \\begin{aligned} 2x &= \\pi + \\dfrac{ \\pi }{ 3 } \\cr 2x &= \\dfrac{ 4\\pi }{ 3 } \\cr x &= \\dfrac{ 2\\pi }{ 3 } \\end{aligned} <br> We verify that $x = \\dfrac{ 2\\pi }{ 3 }$ lies within our specified interval $0 \\le x \\le \\pi$ (since $0 \\le 2.09 \\le 3.14$).",
        "We apply the vertical transformations $4y - 2$ to the original $y$-coordinate of the minimum point ($y = -1$): <br> \\begin{aligned} y &= 4(-1) - 2 \\cr y &= -4 - 2 \\cr y &= -6 \\end{aligned} <br> Thus, the coordinates of the corresponding minimum point are: <br> \\begin{aligned} \\left( \\dfrac{ 2\\pi }{ 3 }, -6 \\right) \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$\\left( \\dfrac{ 2\\pi }{ 3 }, -2 \\right)$",
            "feedback": "This error occurs if you calculate the vertical transformation incorrectly, such as ignoring the scale factor of $4$ and only applying the vertical translation: $-1 - 2 = -3$, or making other vertical arithmetic slips."
        },
        {
            "ans": "$\\left( \\dfrac{ \\pi }{ 3 }, -6 \\right)$",
            "feedback": "This mistake arises from subtracting $\\dfrac{ \\pi }{ 3 }$ instead of adding it when solving for $x$, calculating $2x = \\pi - \\dfrac{ \\pi }{ 3 } = \\dfrac{ 2\\pi }{ 3 } \\implies x = \\dfrac{ \\pi }{ 3 }$."
        },
        {
            "ans": "$\\left( \\dfrac{ 4\\pi }{ 3 }, -6 \\right)$",
            "feedback": "This mistake occurs if you forget to divide by $2$ when isolating $x$, leaving $x = \\dfrac{ 4\\pi }{ 3 }$, which also lies outside the specified interval $0 \\le x \\le \\pi$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Trig Period Stretches",
        "content": "A horizontal stretch of scale factor $\\dfrac{ 1 }{ 2 }$ (caused by the $2x$ term) compresses the trigonometric wave, meaning key points occur twice as frequently. Always verify that your transformed $x$-coordinate lies within the interval specified in the question."
    }
},
{
    "id": "004675",
    "board": "WJEC",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Graph Transformations",
    "subtopic": [
        "Exponential and Asymptote Transformations"
    ],
    "img": false,
    "question": "The curve $y = e^x - 4$ has a $y$-intercept at $(0, -3)$ and a horizontal asymptote with equation $y = -4$. <br><br>The curve is transformed to $y = -3(e^{x-2} - 4) + 1$. Determine: <br><br><strong>(a)</strong> the exact coordinates of the new $y$-intercept, <br><br><strong>(b)</strong> the equation of the new horizontal asymptote.",
    "steps": [
        "To find the coordinates of the new $y$-intercept, we set $x = 0$ in the equation of the transformed curve: <br> \\begin{aligned} y &= -3(e^{0-2} - 4) + 1 \\end{aligned}",
        "We simplify the expression to find the exact vertical coordinate: <br> \\begin{aligned} y &= -3(e^{ -2 } - 4) + 1 \\cr y &= -3e^{ -2 } + 12 + 1 \\cr y &= 13 - 3e^{ -2 } \\end{aligned} <br> Thus, the exact coordinates of the new $y$-intercept are: <br> \\begin{aligned} \\left( 0, 13 - 3e^{ -2 } \\right) \\end{aligned}",
        "A horizontal asymptote represents the limiting behavior of the function as $x \\to -\\infty$. For the exponential function $y = e^x - 4$, as $x \\to -\\infty$, $e^x \\to 0$, giving the horizontal asymptote $y = -4$.",
        "We analyze the limit of the transformed curve as $x \\to -\\infty$, noting that the exponential term $e^{x-2} \\to 0$: <br> \\begin{aligned} y &\\to -3(0 - 4) + 1 \\cr y &\\to 12 + 1 \\cr y &\\to 13 \\end{aligned} <br> Alternatively, we can find this by applying only the vertical transformations $-3y + 1$ directly to the original asymptote equation $y = -4$: <br> \\begin{aligned} y &= -3(-4) + 1 = 13 \\end{aligned} <br> Thus, the equation of the new horizontal asymptote is: <br> \\begin{aligned} y &= 13 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $\\left( 0, 13 - 3e^{ -2 } \\right)$, <strong>(b)</strong> $y = -11$",
            "feedback": "This error occurs in part (b) if you fail to reflect the original asymptote, calculating $-3(4) + 1 = -11$ instead of $-3(-4) + 1 = 13$ due to a sign error."
        },
        {
            "ans": "<strong>(a)</strong> $\\left( 0, -8 \\right)$, <strong>(b)</strong> $y = 13$",
            "feedback": "This mistake occurs in part (a) if you incorrectly evaluate $e^{-2}$ as $0$ when calculating the $y$-intercept, which is only its limiting behavior as $x \\to -\\infty$, not its actual value at $x = 0$."
        },
        {
            "ans": "<strong>(a)</strong> $\\left( 0, 13 - e^{ -2 } \\right)$, <strong>(b)</strong> $y = -3$",
            "feedback": "This arises if you do not distribute the factor of $-3$ across the entire parenthetical expression, or assume that horizontal asymptote equations are unaffected by vertical stretches."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Asymptote Transformation Rules",
        "content": "Horizontal asymptotes are horizontal lines of the form $y = c$. Because they are completely independent of horizontal coordinates, they are completely unaffected by horizontal transformations like shifts ($x \\to x-2$) or stretches. They only scale and translate under vertical transformations."
    }
},
{
    "id": "004676",
    "board": "WJEC",
    "level": "A",
    "major_area": "Trigonometry",
    "topic": "Trigonometric Equations",
    "subtopic": [
        "Pythagorean Identities"
    ],
    "img": false,
    "question": "Solve the equation: <br> $2\\tan^2\\theta - \\tan\\theta - \\sec^2\\theta = 1$ <br><br>for values of $\\theta$ in the interval $0^\\circ \\le \\theta \\le 360^\\circ$. Give your answers to two decimal places where appropriate.",
    "steps": [
        "We use the Pythagorean identity $\\sec^2\\theta = 1 + \\tan^2\\theta$ to express the entire equation in terms of $\\tan\\theta$: <br> \\begin{aligned} 2\\tan^2\\theta - \\tan\\theta - (1 + \\tan^2\\theta) &= 1 \\end{aligned}",
        "We expand and simplify the expression to obtain a quadratic equation in terms of $\\tan\\theta$: <br> \\begin{aligned} 2\\tan^2\\theta - \\tan\\theta - 1 - \\tan^2\\theta &= 1 \\cr \\tan^2\\theta - \\tan\\theta - 2 &= 0 \\end{aligned}",
        "We factorise the quadratic equation to find the values of $\\tan\\theta$: <br> \\begin{aligned} (\\tan\\theta - 2)(\\tan\\theta + 1) &= 0 \\end{aligned} <br> This gives two linear trigonometric branches to solve: <br> \\begin{aligned} \\tan\\theta = 2 \\quad \\text{or} \\quad \\tan\\theta = -1 \\end{aligned}",
        "We solve each branch separately to find all values of $\\theta$ in the interval $0^\\circ \\le \\theta \\le 360^\\circ$: <br> <strong>Branch 1:</strong> $\\tan\\theta = 2$ <br> \\begin{aligned} \\theta &= \\tan^{ -1 }(2) \\approx 63.43^\\circ \\cr \\theta &= 63.43^\\circ + 180^\\circ = 243.43^\\circ \\end{aligned} <br> <strong>Branch 2:</strong> $\\tan\\theta = -1$ <br> \\begin{aligned} \\theta &= \\tan^{ -1 }(-1) = -45^\\circ \\cr \\theta &= -45^\\circ + 180^\\circ = 135^\\circ \\cr \\theta &= -45^\\circ + 360^\\circ = 315^\\circ \\end{aligned} <br> Thus, the complete set of solutions in the interval is: <br> \\begin{aligned} \\theta \\approx 63.43^\\circ, \\quad 135^\\circ, \\quad 243.43^\\circ, \\quad 315^\\circ \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$\\theta \\approx 63.43^\\circ$, $45^\\circ$, $243.43^\\circ$, $225^\\circ$",
            "feedback": "This error occurs if you make a sign error when solving the quadratic branch $\\tan\\theta = -1$, solving $\\tan\\theta = 1$ instead and finding the quadrant solutions $45^\\circ$ and $225^\\circ$."
        },
        {
            "ans": "$\\theta \\approx 63.43^\\circ$, $135^\\circ$",
            "feedback": "This mistake occurs if you forget that the tangent function is periodic with a period of $180^\\circ$, completely omitting the second-quadrant and fourth-quadrant solutions that lie between $180^\\circ$ and $360^\\circ$."
        },
        {
            "ans": "$\\theta \\approx 26.57^\\circ$, $135^\\circ$, $206.57^\\circ$, $315^\\circ$",
            "feedback": "This error is caused by a calculator division slip or inverting the tangent value when evaluating the principal value, writing $\\tan\\theta = 0.5$ (which yields $26.57^\\circ$) instead of $\\tan\\theta = 2$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Pythagorean Identity Sign Traps",
        "content": "When substituting $\\sec^2\\theta = 1 + \\tan^2\\theta$ into a term preceded by a negative sign, always place the identity inside parentheses first: $-(\\sec^2\\theta) = -(1 + \\tan^2\\theta) = -1 - \\tan^2\\theta$. Forgetting to distribute the negative sign is a very common source of algebraic errors."
    }
},
{
    "id": "004677",
    "board": "WJEC",
    "level": "A",
    "major_area": "Trigonometry",
    "topic": "Trigonometric Equations",
    "subtopic": [
        "Pythagorean Identities"
    ],
    "img": false,
    "question": "Solve the equation: <br> $2\\cot^2\\theta - \\cot\\theta - \\csc^2\\theta = 5$ <br><br>for values of $\\theta$ in the interval $0^\\circ \\le \\theta \\le 360^\\circ$. Give your answers to two decimal places where appropriate.",
    "steps": [
        "We use the Pythagorean identity $\\csc^2\\theta = 1 + \\cot^2\\theta$ to rewrite the entire equation in terms of $\\cot\\theta$: <br> \\begin{aligned} 2\\cot^2\\theta - \\cot\\theta - (1 + \\cot^2\\theta) &= 5 \\end{aligned}",
        "We expand and simplify the terms to form a standard quadratic equation: <br> \\begin{aligned} 2\\cot^2\\theta - \\cot\\theta - 1 - \\cot^2\\theta &= 5 \\cr \\cot^2\\theta - \\cot\\theta - 6 &= 0 \\end{aligned}",
        "We factorise the quadratic equation: <br> \\begin{aligned} (\\cot\\theta - 3)(\\cot\\theta + 2) &= 0 \\end{aligned} <br> This yields two branches for $\\cot\\theta$, which we then convert to their primary reciprocal counterparts: <br> \\begin{aligned} \\cot\\theta = 3 \\quad &\\implies \\quad \\tan\\theta = \\dfrac{ 1 }{ 3 } \\cr \\cot\\theta = -2 \\quad &\\implies \\quad \\tan\\theta = -\\dfrac{ 1 }{ 2 } \\end{aligned}",
        "We solve for $\\theta$ in the interval $0^\\circ \\le \\theta \\le 360^\\circ$: <br> <strong>Branch 1:</strong> $\\tan\\theta = \\dfrac{ 1 }{ 3 }$ <br> \\begin{aligned} \\theta &= \\tan^{ -1 }\\left( \\dfrac{ 1 }{ 3 } \\right) \\approx 18.43^\\circ \\cr \\theta &= 18.43^\\circ + 180^\\circ = 198.43^\\circ \\end{aligned} <br> <strong>Branch 2:</strong> $\\tan\\theta = -\\dfrac{ 1 }{ 2 }$ <br> \\begin{aligned} \\theta &= \\tan^{ -1 }\\left( -\\dfrac{ 1 }{ 2 } \\right) = -26.57^\\circ \\cr \\theta &= -26.57^\\circ + 180^\\circ = 153.43^\\circ \\cr \\theta &= -26.57^\\circ + 360^\\circ = 333.43^\\circ \\end{aligned} <br> Combining these results, the complete solution set is: <br> \\begin{aligned} \\theta \\approx 18.43^\\circ, \\quad 153.43^\\circ, \\quad 198.43^\\circ, \\quad 333.43^\\circ \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$\\theta \\approx 71.57^\\circ$, $116.57^\\circ$, $251.57^\\circ$, $296.57^\\circ$",
            "feedback": "This error occurs if you mistakenly think $\\cot\\theta = \\dfrac{ 1 }{ \\tan\\theta }$ implies you should invert the angle rather than the ratio, calculating $\\theta = \\tan^{ -1 }(3)$ and $\\theta = \\tan^{ -1 }(-2)$."
        },
        {
            "ans": "$\\theta \\approx 18.43^\\circ$, $198.43^\\circ$",
            "feedback": "This mistake occurs if you solve the first quadratic branch correctly but discard the second branch, perhaps thinking that a negative cotangent ratio has no valid solutions."
        },
        {
            "ans": "$\\theta \\approx 18.43^\\circ$, $153.43^\\circ$, $161.57^\\circ$, $333.43^\\circ$",
            "feedback": "This arises from a quadrant mapping error in Branch 1, using $180^\\circ - 18.43^\\circ = 161.57^\\circ$ instead of the correct third-quadrant angle $180^\\circ + 18.43^\\circ = 198.43^\\circ$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Reciprocal Trigonometric Conversions",
        "content": "When solving equations with reciprocal trigonometric functions like $\\cot\\theta$, $\\sec\\theta$, or $\\csc\\theta$, the safest first step is always to isolate the function and then convert it to its primary counterpart (e.g., $\\cot\\theta = k \\implies \\tan\\theta = \\dfrac{ 1 }{ k }$). This allows you to safely use your calculator's standard inverse trigonometric functions."
    }
},
{
    "id": "004678",
    "board": "WJEC",
    "level": "A",
    "major_area": "Trigonometry",
    "topic": "Trigonometric Equations",
    "subtopic": [
        "Double-Angle Identities"
    ],
    "img": false,
    "question": "Solve the equation: <br> $3\\cos 2\\theta + 8\\sin\\theta = 5$ <br><br>for values of $\\theta$ in the interval $0^\\circ \\le \\theta \\le 360^\\circ$. Give your answers to two decimal places where appropriate.",
    "steps": [
        "We use the double-angle identity $\\cos 2\\theta = 1 - 2\\sin^2\\theta$ to express the entire equation in terms of a single trigonometric function: <br> \\begin{aligned} 3(1 - 2\\sin^2\\theta) + 8\\sin\\theta &= 5 \\end{aligned}",
        "We expand the terms and collect them on one side to form a standard quadratic equation: <br> \\begin{aligned} 3 - 6\\sin^2\\theta + 8\\sin\\theta &= 5 \\cr 6\\sin^2\\theta - 8\\sin\\theta + 2 &= 0 \\end{aligned} <br> Dividing all terms by $2$ simplifies the equation to: <br> \\begin{aligned} 3\\sin^2\\theta - 4\\sin\\theta + 1 &= 0 \\end{aligned}",
        "We factorise the simplified quadratic equation: <br> \\begin{aligned} (3\\sin\\theta - 1)(\\sin\\theta - 1) &= 0 \\end{aligned} <br> This yields two linear branches to solve: <br> \\begin{aligned} \\sin\\theta = 1 \\quad \\text{or} \\quad \\sin\\theta = \\dfrac{ 1 }{ 3 } \\end{aligned}",
        "We solve for $\\theta$ in the interval $0^\\circ \\le \\theta \\le 360^\\circ$ for each branch: <br> <strong>Branch 1:</strong> $\\sin\\theta = 1$ <br> \\begin{aligned} \\theta &= 90^\\circ \\end{aligned} <br> <strong>Branch 2:</strong> $\\sin\\theta = \\dfrac{ 1 }{ 3 }$ <br> \\begin{aligned} \\theta &= \\sin^{ -1 }\\left( \\dfrac{ 1 }{ 3 } \\right) \\approx 19.47^\\circ \\cr \\theta &= 180^\\circ - 19.47^\\circ = 160.53^\\circ \\end{aligned} <br> Thus, the complete solution set in the interval is: <br> \\begin{aligned} \\theta = 90^\\circ, \\quad \\theta \\approx 19.47^\\circ, \\quad 160.53^\\circ \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$\\theta = 90^\\circ$, $\\theta \\approx 19.47^\\circ$, $340.53^\\circ$",
            "feedback": "This error occurs if you make a quadrant error when solving the $\\sin\\theta = \\dfrac{ 1 }{ 3 }$ branch, mapping the second solution to the fourth quadrant ($360^\\circ - 19.47^\\circ = 340.53^\\circ$) instead of the second quadrant ($180^\\circ - \\theta$)."
        },
        {
            "ans": "$\\theta = 90^\\circ$, $\\theta \\approx 19.47^\\circ$, $160.53^\\circ$, $199.47^\\circ$, $340.53^\\circ$",
            "feedback": "This happens if you mistakenly solve for both positive and negative values of $\\sin\\theta = \\pm \\dfrac{ 1 }{ 3 }$, generating extraneous third-quadrant and fourth-quadrant solutions."
        },
        {
            "ans": "$\\theta \\approx 19.47^\\circ$, $160.53^\\circ$",
            "feedback": "This error occurs if you fail to solve the branch $\\sin\\theta = 1$, or discard its solution $\\theta = 90^\\circ$ because it is a boundary/axis angle."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Choosing the Right Double-Angle Identity",
        "content": "The double-angle identity for cosine has three equivalent forms: $\\cos^2\\theta - \\sin^2\\theta$, $2\\cos^2\\theta - 1$, and $1 - 2\\sin^2\\theta$. Always look at the other terms in the equation to decide which form to use. Since the other term is $8\\sin\\theta$, choosing $1 - 2\\sin^2\\theta$ is the only path that results in a solvable single-variable quadratic."
    }
},
{
    "id": "004679",
    "board": "WJEC",
    "level": "A",
    "major_area": "Trigonometry",
    "topic": "Trigonometric Equations",
    "subtopic": [
        "Harmonic Form"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Express $3\\sin\\theta + 4\\cos\\theta$ in the form $R\\sin(\\theta + \\alpha)$, where $R > 0$ and $0^\\circ < \\alpha < 90^\\circ$. Give the value of $\\alpha$ to two decimal places. <br><br><strong>(b)</strong> Hence, solve the equation $3\\sin\\theta + 4\\cos\\theta = 2.5$ for values of $\\theta$ in the interval $0^\\circ \\le \\theta \\le 360^\\circ$. Give your answers to two decimal places.",
    "steps": [
        "We expand $R\\sin(\\theta + \\alpha)$ using the compound angle identity: <br> \\begin{aligned} R\\sin(\\theta + \\alpha) &= R(\\sin\\theta\\cos\\alpha + \\cos\\theta\\sin\\alpha) \\end{aligned} <br> Matching this with the expression $3\\sin\\theta + 4\\cos\\theta$, we equate the coefficients of $\\sin\\theta$ and $\\cos\\theta$: <br> \\begin{aligned} R\\cos\\alpha &= 3 \\cr R\\sin\\alpha &= 4 \\end{aligned}",
        "To find $R$, we square and add the coefficients: <br> \\begin{aligned} R^2\\cos^2\\alpha + R^2\\sin^2\\alpha &= 3^2 + 4^2 \\cr R^2 &= 25 \\cr R &= 5 \\end{aligned} <br> To find $\\alpha$, we divide the coefficients: <br> \\begin{aligned} \\tan\\alpha &= \\dfrac{ R\\sin\\alpha }{ R\\cos\\alpha } = \\dfrac{ 4 }{ 3 } \\cr \\alpha &= \\tan^{ -1 }\\left( \\dfrac{ 4 }{ 3 } \\right) \\approx 53.13^\\circ \\end{aligned} <br> Thus, the expression can be written in harmonic form as: <br> \\begin{aligned} 3\\sin\\theta + 4\\cos\\theta &= 5\\sin(\\theta + 53.13^\\circ) \\end{aligned}",
        "We substitute our harmonic form into the equation to solve it: <br> \\begin{aligned} 5\\sin(\\theta + 53.13^\\circ) &= 2.5 \\cr \\sin(\\theta + 53.13^\\circ) &= 0.5 \\end{aligned}",
        "We solve for the compound angle $(\\theta + 53.13^\\circ)$, identifying all possible angles within the shifted interval boundaries: <br> \\begin{aligned} \\theta + 53.13^\\circ &= 30^\\circ, \\quad 150^\\circ, \\quad 390^\\circ \\end{aligned} <br> Solving for $\\theta$ in each case: <br> \\begin{aligned} \\theta &= 30^\\circ - 53.13^\\circ = -23.13^\\circ \\cr \\theta &= 150^\\circ - 53.13^\\circ = 96.87^\\circ \\cr \\theta &= 390^\\circ - 53.13^\\circ = 336.87^\\circ \\end{aligned} <br> Since we require $0^\\circ \\le \\theta \\le 360^\\circ$, we discard $-23.13^\\circ$. The complete set of valid solutions is: <br> \\begin{aligned} \\theta \\approx 96.87^\\circ, \\quad 336.87^\\circ \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $5\\sin(\\theta + 53.13^\\circ)$, <strong>(b)</strong> $\\theta \\approx 96.87^\\circ$, $203.13^\\circ$",
            "feedback": "This error occurs in part (b) if you subtract $53.13^\\circ$ from the incorrect quadrant angle $256.26^\\circ$ or make an arithmetic slip when mapping standard principal values."
        },
        {
            "ans": "<strong>(a)</strong> $5\\sin(\\theta + 36.87^\\circ)$, <strong>(b)</strong> $\\theta \\approx 113.13^\\circ$, $353.13^\\circ$",
            "feedback": "This mistake occurs if you swap the definitions of the coefficients, writing $\\tan\\alpha = \\dfrac{ 3 }{ 4 }$ to get $\\alpha \\approx 36.87^\\circ$."
        },
        {
            "ans": "<strong>(a)</strong> $5\\sin(\\theta + 53.13^\\circ)$, <strong>(b)</strong> $\\theta \\approx -23.13^\\circ$, $96.87^\\circ$",
            "feedback": "This error occurs if you forget to adjust the boundary range of the intermediate angle $\\theta + 53.13^\\circ$, resulting in keeping the negative angle $-23.13^\\circ$ instead of adding $360^\\circ$ to find its co-terminal solution in the interval."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Shifting the Interval Boundaries",
        "content": "When solving compound equations like $\\sin(\\theta + \\alpha) = k$, always write down the shifted interval boundary first: if $0^\\circ \\le \\theta \\le 360^\\circ$, then $\\alpha \\le \\theta + \\alpha \\le 360^\\circ + \\alpha$. This ensures that you don't miss solutions that overflow past $360^\\circ$ (like $390^\\circ - \\alpha$) or keep invalid negative solutions."
    }
},
{
    "id": "004680",
    "board": "WJEC",
    "level": "A",
    "major_area": "Trigonometry",
    "topic": "Trigonometric Equations",
    "subtopic": [
        "Small-Angle Approximations"
    ],
    "img": false,
    "question": "Given that $\\theta$ is small and measured in radians: <br><br><strong>(a)</strong> Show that the equation: <br> $\\cos\\theta - \\sin\\theta + 2\\theta^2 = 1.25$ <br><br>can be approximated by the quadratic equation: <br> $3\\theta^2 - 2\\theta - 0.5 = 0$ <br><br><strong>(b)</strong> Solve this quadratic equation to find the possible values of $\\theta$, giving your answers to three decimal places.",
    "steps": [
        "For small values of $\\theta$ measured in radians, we apply the standard small-angle approximations: <br> \\begin{aligned} \\cos\\theta &\\approx 1 - \\dfrac{ \\theta^2 }{ 2 } \\cr \\sin\\theta &\\approx \\theta \\end{aligned}",
        "We substitute these approximations into the original equation: <br> \\begin{aligned} \\left(1 - \\dfrac{ \\theta^2 }{ 2 }\\right) - \\theta + 2\\theta^2 &\\approx 1.25 \\end{aligned}",
        "We collect like terms and simplify the equation: <br> \\begin{aligned} 1 - \\theta + 1.5\\theta^2 &= 1.25 \\cr 1.5\\theta^2 - \\theta - 0.25 &= 0 \\end{aligned} <br> Multiplying the entire equation by $2$ clears the decimal coefficients and yields the required quadratic equation: <br> \\begin{aligned} 3\\theta^2 - 2\\theta - 0.5 &= 0 \\end{aligned}",
        "To solve part (b), we apply the quadratic formula to our derived equation: <br> \\begin{aligned} \\theta &= \\dfrac{ -(-2) \\pm \\sqrt{ (-2)^2 - 4(3)(-0.5) } }{ 2(3) } \\cr \\theta &= \\dfrac{ 2 \\pm \\sqrt{ 4 + 6 } }{ 6 } \\cr \\theta &= \\dfrac{ 2 \\pm \\sqrt{ 10 } }{ 6 } \\end{aligned}",
        "We evaluate the roots numerically using $\\sqrt{ 10 } \\approx 3.16228$: <br> \\begin{aligned} \\theta_1 &\\approx \\dfrac{ 2 + 3.16228 }{ 6 } \\approx 0.860 \\cr \\theta_2 &\\approx \\dfrac{ 2 - 3.16228 }{ 6 } \\approx -0.194 \\end{aligned} <br> Thus, to three decimal places, the possible values of $\\theta$ are $\\theta \\approx 0.860$ and $\\theta \\approx -0.194$ radians."
    ],
    "pi_options": [
        {
            "ans": "<strong>(b)</strong> $\\theta \\approx 0.430$, $-0.097$ radians",
            "feedback": "This error occurs if you forget to multiply by the factor of $2$ in the denominator when evaluating the quadratic formula, dividing by $12$ instead of $6$."
        },
        {
            "ans": "<strong>(b)</strong> $\\theta \\approx 0.768$, $-0.101$ radians",
            "feedback": "This mistake arises from a sign error under the discriminant, calculating $4 - 6 = -2$ (or another incorrect decimal sign combination) instead of $4 + 6 = 10$."
        },
        {
            "ans": "<strong>(b)</strong> $\\theta \\approx 0.860$ radians only",
            "feedback": "This mistake occurs if you discard the negative root $\\theta \\approx -0.194$ because you assume that small angles must be strictly positive, whereas negative values in radians are fully valid."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Small-Angle Limits",
        "content": "Small-angle approximations are extremely powerful but only hold true when $\\theta$ is small (generally, $-0.5 < \\theta < 0.5$ radians is highly accurate). While our positive solution $\\theta \\approx 0.860$ mathematically satisfies the quadratic approximation, it is slightly outside this highly accurate physical bound, whereas $\\theta \\approx -0.194$ represents a highly accurate, physically realistic small angle."
    }
},
{
    "id": "004681",
    "board": "WJEC",
    "level": "A",
    "major_area": "Integration",
    "topic": "Partial Fractions",
    "subtopic": [
        "Definite Integration",
        "Repeated Linear Factors"
    ],
    "img": false,
    "question": "A function $f$ is defined for $x > 3$ by: <br> $f(x) = \\dfrac{ x + 3 }{ (x - 1)(x - 3)^2 }$ <br><br><strong>(a)</strong> Express $f(x)$ in terms of partial fractions. <br><br><strong>(b)</strong> Evaluate the definite integral: <br> $\\int_{ 4 }^{ 5 } f(x) \\mathrm{d}x$ <br><br>giving your answer to three decimal places.",
    "steps": [
        "To express $f(x)$ in terms of partial fractions, we set up the decomposition template for a repeated linear factor in the denominator: <br> \\begin{aligned} \\dfrac{ x + 3 }{ (x - 1)(x - 3)^2 } &= \\dfrac{ A }{ x - 1 } + \\dfrac{ B }{ x - 3 } + \\dfrac{ C }{ (x - 3)^2 } \\end{aligned}",
        "We clear the fractions by multiplying both sides of the identity by $(x - 1)(x - 3)^2$: <br> \\begin{aligned} x + 3 &= A(x - 3)^2 + B(x - 1)(x - 3) + C(x - 1) \\end{aligned}",
        "We solve for the constants $A$, $B$, and $C$ by substituting convenient values of $x$: <br> Set $x = 3$: <br> \\begin{aligned} 3 + 3 &= C(3 - 1) \\cr 6 &= 2C \\implies C = 3 \\end{aligned} <br> Set $x = 1$: <br> \\begin{aligned} 1 + 3 &= A(1 - 3)^2 \\cr 4 &= 4A \\implies A = 1 \\end{aligned} <br> Comparing the coefficients of $x^2$ on both sides: <br> \\begin{aligned} 0 &= A + B \\cr 0 &= 1 + B \\implies B = -1 \\end{aligned} <br> Thus, the partial fractions decomposition is: <br> \\begin{aligned} f(x) &= \\dfrac{ 1 }{ x - 1 } - \\dfrac{ 1 }{ x - 3 } + \\dfrac{ 3 }{ (x - 3)^2 } \\end{aligned}",
        "To solve part (b), we evaluate the definite integral by integrating each term separately: <br> \\begin{aligned} \\int_{ 4 }^{ 5 } f(x) \\mathrm{d}x &= \\int_{ 4 }^{ 5 } \\left( \\dfrac{ 1 }{ x - 1 } - \\dfrac{ 1 }{ x - 3 } + \\dfrac{ 3 }{ (x - 3)^2 } \\right) \\mathrm{d}x \\cr &= \\left[ \\ln|x - 1| - \\ln|x - 3| - \\dfrac{ 3 }{ x - 3 } \\right]_{ 4 }^{ 5 } \\end{aligned}",
        "We substitute the upper limit $x = 5$ and the lower limit $x = 4$: <br> At $x = 5$: <br> \\begin{aligned} \\ln|4| - \\ln|2| - \\dfrac{ 3 }{ 2 } &= \\ln\\left( \\dfrac{ 4 }{ 2 } \\right) - 1.5 = \\ln 2 - 1.5 \\end{aligned} <br> At $x = 4$: <br> \\begin{aligned} \\ln|3| - \\ln|1| - \\dfrac{ 3 }{ 1 } &= \\ln 3 - 0 - 3 = \\ln 3 - 3 \\end{aligned}",
        "We subtract the lower limit evaluation from the upper limit evaluation: <br> \\begin{aligned} \\int_{ 4 }^{ 5 } f(x) \\mathrm{d}x &= (\\ln 2 - 1.5) - (\\ln 3 - 3) \\cr &= \\ln\\left( \\dfrac{ 2 }{ 3 } \\right) + 1.5 \\cr &\\approx -0.405465 + 1.5 \\cr &\\approx 1.095 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$1.500$",
            "feedback": "This mistake occurs if you evaluate $\\ln\\left( \\dfrac{ 2 }{ 3 } \\right)$ incorrectly as $0$, or omit the logarithmic terms completely during integration."
        },
        {
            "ans": "$1.905$",
            "feedback": "This error is caused by a sign slip during limit subtraction, calculating $1.5 + \\ln 2 + \\ln 3$ instead of $1.5 + \\ln 2 - \\ln 3$."
        },
        {
            "ans": "$2.695$",
            "feedback": "This arises if you make an integration error with the repeated linear factor, evaluating $\\int \\dfrac{ 3 }{ (x - 3)^2 } \\mathrm{d}x = 3\\ln(x - 3)^2$ instead of $-\\dfrac{ 3 }{ x - 3 }$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Repeated Linear Integrals",
        "content": "A very common student trap is integrating a repeated linear factor like $\\dfrac{ C }{ (x-a)^2 }$ as if it were a simple reciprocal function, writing $C\\ln(x-a)^2$. Always remember that reciprocal terms with exponents greater than $1$ must be integrated using the power rule: $\\int (x-a)^{-2} \\mathrm{d}x = -(x-a)^{-1}$."
    }
},
{
    "id": "004682",
    "board": "WJEC",
    "level": "A",
    "major_area": "Integration",
    "topic": "Partial Fractions",
    "subtopic": [
        "Definite Integration",
        "Linear Factors"
    ],
    "img": false,
    "question": "A function $f$ is defined for $x > 0$ by: <br> $f(x) = \\dfrac{ 2x + 3 }{ (x + 1)(2x + 1) }$ <br><br><strong>(a)</strong> Express $f(x)$ in terms of partial fractions. <br><br><strong>(b)</strong> Evaluate the definite integral: <br> $\\int_{ 0 }^{ 1 } f(x) \\mathrm{d}x$ <br><br>giving your answer as a single logarithm in exact form.",
    "steps": [
        "To express $f(x)$ in terms of partial fractions, we decompose the algebraic fraction into two linear terms: <br> \\begin{aligned} \\dfrac{ 2x + 3 }{ (x + 1)(2x + 1) } &= \\dfrac{ A }{ x + 1 } + \\dfrac{ B }{ 2x + 1 } \\end{aligned}",
        "We clear the fractions by multiplying both sides of the identity by $(x + 1)(2x + 1)$: <br> \\begin{aligned} 2x + 3 &= A(2x + 1) + B(x + 1) \\end{aligned}",
        "We solve for the constants $A$ and $B$ by substituting convenient values of $x$: <br> Set $x = -1$: <br> \\begin{aligned} 2(-1) + 3 &= A(2(-1) + 1) \\cr 1 &= -A \\implies A = -1 \\end{aligned} <br> Set $x = -0.5$: <br> \\begin{aligned} 2(-0.5) + 3 &= B(-0.5 + 1) \\cr 2 &= 0.5B \\implies B = 4 \\end{aligned} <br> Thus, the partial fractions decomposition is: <br> \\begin{aligned} f(x) &= -\\dfrac{ 1 }{ x + 1 } + \\dfrac{ 4 }{ 2x + 1 } \\end{aligned}",
        "To solve part (b), we integrate the partial fractions decomposition term by term over the interval $[0, 1]$: <br> \\begin{aligned} \\int_{ 0 }^{ 1 } f(x) \\mathrm{d}x &= \\int_{ 0 }^{ 1 } \\left( -\\dfrac{ 1 }{ x + 1 } + \\dfrac{ 4 }{ 2x + 1 } \\right) \\mathrm{d}x \\cr &= \\left[ -\\ln|x + 1| + 2\\ln|2x + 1| \\right]_{ 0 }^{ 1 } \\end{aligned}",
        "We substitute the limits $x = 1$ and $x = 0$: <br> At $x = 1$: <br> \\begin{aligned} -\\ln|2| + 2\\ln|3| &= \\ln 9 - \\ln 2 = \\ln\\left( \\dfrac{ 9 }{ 2 } \\right) \\end{aligned} <br> At $x = 0$: <br> \\begin{aligned} -\\ln|1| + 2\\ln|1| &= 0 \\end{aligned} <br> Thus, the exact value of the definite integral is: <br> \\begin{aligned} \\ln\\left( \\dfrac{ 9 }{ 2 } \\right) \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$\\ln\\left( \\dfrac{ 81 }{ 2 } \\right)$",
            "feedback": "This error occurs if you fail to divide by $2$ when integrating $\\dfrac{ 4 }{ 2x + 1 }$, leading to an incorrect coefficient of $4\\ln|2x + 1|$ instead of $2\\ln|2x + 1|$."
        },
        {
            "ans": "$\\ln\\left( \\dfrac{ 3 }{ 2 } \\right)$",
            "feedback": "This mistake arises from a sign error when solving the partial fractions for $A$, finding $A = 1$ instead of $A = -1$."
        },
        {
            "ans": "$\\ln 9$",
            "feedback": "This happens if you evaluate the lower limit $x = 0$ incorrectly, forgetting that subtracting $-\\ln(1) + 2\\ln(1)$ equals $0$ and instead subtracting another value."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Reciprocal Integration Coefficients",
        "content": "When integrating terms of the form $\\dfrac{ B }{ ax + b }$, a very common student mistake is forgetting to divide by the coefficient $a$ of the $x$ term. Always verify that $\\int \\dfrac{ 4 }{ 2x + 1 } \\mathrm{d}x = \\dfrac{ 4 }{ 2 }\\ln|2x + 1| = 2\\ln|2x + 1|$."
    }
},
{
    "id": "004683",
    "board": "WJEC",
    "level": "A",
    "major_area": "Integration",
    "topic": "Partial Fractions",
    "subtopic": [
        "Definite Integration",
        "Improper Fractions"
    ],
    "img": false,
    "question": "A function $f$ is defined for $x > -1$ by the improper fraction: <br> $f(x) = \\dfrac{ x^2 + 5x + 7 }{ (x + 1)(x + 2) }$ <br><br><strong>(a)</strong> Express $f(x)$ in the form $P + \\dfrac{ Q }{ x + 1 } + \\dfrac{ R }{ x + 2 }$, where $P$, $Q$, and $R$ are real constants. <br><br><strong>(b)</strong> Find the exact value of the definite integral: <br> $\\int_{ 0 }^{ 1 } f(x) \\mathrm{d}x$ <br><br>giving your answer in the form $a + \\ln b$.",
    "steps": [
        "Because the degree of the numerator polynomial is equal to the degree of the denominator polynomial, this is an improper fraction. We first expand the denominator: <br> \\begin{aligned} (x + 1)(x + 2) &= x^2 + 3x + 2 \\end{aligned}",
        "We perform algebraic division (or rewrite the numerator) to separate the constant term: <br> \\begin{aligned} \\dfrac{ x^2 + 5x + 7 }{ x^2 + 3x + 2 } &= \\dfrac{ (x^2 + 3x + 2) + 2x + 5 }{ x^2 + 3x + 2 } \\cr &= 1 + \\dfrac{ 2x + 5 }{ (x + 1)(x + 2) } \\end{aligned} <br> This gives $P = 1$.",
        "We now decompose the remaining proper fraction into partial fractions: <br> \\begin{aligned} \\dfrac{ 2x + 5 }{ (x + 1)(x + 2) } &= \\dfrac{ Q }{ x + 1 } + \\dfrac{ R }{ x + 2 } \\end{aligned}",
        "Multiplying by the common denominator yields: <br> \\begin{aligned} 2x + 5 &= Q(x + 2) + R(x + 1) \\end{aligned} <br> We substitute $x$ values to solve for the constants: <br> Set $x = -1$: <br> \\begin{aligned} 2(-1) + 5 &= Q(-1 + 2) \\cr 3 &= Q \\end{aligned} <br> Set $x = -2$: <br> \\begin{aligned} 2(-2) + 5 &= R(-2 + 1) \\cr 1 &= -R \\implies R = -1 \\end{aligned} <br> Thus, the complete decomposition is: <br> \\begin{aligned} f(x) &= 1 + \\dfrac{ 3 }{ x + 1 } - \\dfrac{ 1 }{ x + 2 } \\end{aligned}",
        "To solve part (b), we integrate $f(x)$ over the interval $[0, 1]$: <br> \\begin{aligned} \\int_{ 0 }^{ 1 } f(x) \\mathrm{d}x &= \\int_{ 0 }^{ 1 } \\left( 1 + \\dfrac{ 3 }{ x + 1 } - \\dfrac{ 1 }{ x + 2 } \\right) \\mathrm{d}x \\cr &= \\left[ x + 3\\ln|x + 1| - \\ln|x + 2| \\right]_{ 0 }^{ 1 } \\end{aligned}",
        "We evaluate the limits: <br> At the upper limit $x = 1$: <br> \\begin{aligned} 1 + 3\\ln(2) - \\ln(3) \\end{aligned} <br> At the lower limit $x = 0$: <br> \\begin{aligned} 0 + 3\\ln(1) - \\ln(2) &= -\\ln 2 \\end{aligned} <br> Subtracting the lower limit evaluation from the upper limit evaluation: <br> \\begin{aligned} \\int_{ 0 }^{ 1 } f(x) \\mathrm{d}x &= (1 + 3\\ln 2 - \\ln 3) - (-\\ln 2) \\cr &= 1 + 4\\ln 2 - \\ln 3 \\cr &= 1 + \\ln 16 - \\ln 3 \\cr &= 1 + \\ln\\left( \\dfrac{ 16 }{ 3 } \\right) \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$1 + \\ln\\left( \\dfrac{ 8 }{ 3 } \\right)$",
            "feedback": "This error occurs if you evaluate the lower limit of the integration as $0$ instead of $-\\ln 2$, failing to subtract the lower limit correctly."
        },
        {
            "ans": "$\\ln\\left( \\dfrac{ 16 }{ 3 } \\right)$",
            "feedback": "This mistake happens if you completely forget to integrate the constant term $P = 1$ over the interval $[0, 1]$, which should yield $1$."
        },
        {
            "ans": "$1 + \\ln\\left( \\dfrac{ 16 }{ 9 } \\right)$",
            "feedback": "This results from a sign error when determining the partial fraction constants $Q$ or $R$, leading to incorrect logarithmic combinations."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Improper Algebraic Fractions",
        "content": "Before attempting partial fractions, always compare the highest degree of the numerator and the denominator. If the degree of the numerator is greater than or equal to the denominator, the fraction is improper, and you must perform algebraic division first to extract the polynomial/constant terms."
    }
},
{
    "id": "004684",
    "board": "WJEC",
    "level": "A",
    "major_area": "Integration",
    "topic": "Partial Fractions",
    "subtopic": [
        "Integration by Substitution",
        "Definite Integration"
    ],
    "img": false,
    "question": "Consider the definite integral: <br> $I = \\int_{ 0 }^{ \\ln 2 } \\dfrac{ e^x }{ e^{2x} + 3e^x + 2 } \\mathrm{d}x$ <br><br><strong>(a)</strong> Use the substitution $u = e^x$ to show that $I$ can be written as: <br> $\\int_{ 1 }^{ 2 } \\dfrac{ 1 }{ (u + 1)(u + 2) } \\mathrm{d}u$ <br><br><strong>(b)</strong> Express the integrand $\\dfrac{ 1 }{ (u + 1)(u + 2) }$ in terms of partial fractions. <br><br><strong>(c)</strong> Hence, evaluate the exact value of $I$, giving your answer in the form $\\ln\\left(\\dfrac{ a }{ b }\\right)$ where $a$ and $b$ are integers.",
    "steps": [
        "To solve part (a), we apply the substitution $u = e^x$: <br> \\begin{aligned} \\dfrac{ \\mathrm{d}u }{ \\mathrm{d}x } = e^x &\\implies \\mathrm{d}u = e^x \\mathrm{d}x \\cr &\\implies \\mathrm{d}x = \\dfrac{ \\mathrm{d}u }{ e^x } = \\dfrac{ \\mathrm{d}u }{ u } \\end{aligned} <br> We transform the limits of integration: <br> When $x = 0$: $u = e^0 = 1$ <br> When $x = \\ln 2$: $u = e^{\\ln 2} = 2$",
        "Substituting $u$, $\\mathrm{d}x$, and the new limits into the integral: <br> \\begin{aligned} I &= \\int_{ 1 }^{ 2 } \\dfrac{ u }{ u^2 + 3u + 2 } \\left( \\dfrac{ \\mathrm{d}u }{ u } \\right) \\cr &= \\int_{ 1 }^{ 2 } \\dfrac{ 1 }{ u^2 + 3u + 2 } \\mathrm{d}u \\cr &= \\int_{ 1 }^{ 2 } \\dfrac{ 1 }{ (u + 1)(u + 2) } \\mathrm{d}u \\end{aligned} <br> as required.",
        "To solve part (b), we decompose the integrand into partial fractions: <br> \\begin{aligned} \\dfrac{ 1 }{ (u + 1)(u + 2) } &= \\dfrac{ A }{ u + 1 } + \\dfrac{ B }{ u + 2 } \\end{aligned} <br> Multiplying by the common denominator: <br> \\begin{aligned} 1 &= A(u + 2) + B(u + 1) \\end{aligned} <br> Substituting $u = -1$ gives $A = 1$. Substituting $u = -2$ gives $B = -1$. <br> Thus: <br> \\begin{aligned} \\dfrac{ 1 }{ (u + 1)(u + 2) } &= \\dfrac{ 1 }{ u + 1 } - \\dfrac{ 1 }{ u + 2 } \\end{aligned}",
        "To solve part (c), we evaluate the integral of the decomposed fractions: <br> \\begin{aligned} I &= \\int_{ 1 }^{ 2 } \\left( \\dfrac{ 1 }{ u + 1 } - \\dfrac{ 1 }{ u + 2 } \\right) \\mathrm{d}u \\cr &= \\left[ \\ln|u + 1| - \\ln|u + 2| \\right]_{ 1 }^{ 2 } \\end{aligned}",
        "We substitute the limits $u = 2$ and $u = 1$: <br> At $u = 2$: <br> \\begin{aligned} \\ln 3 - \\ln 4 = \\ln\\left( \\dfrac{ 3 }{ 4 } \\right) \\end{aligned} <br> At $u = 1$: <br> \\begin{aligned} \\ln 2 - \\ln 3 = \\ln\\left( \\dfrac{ 2 }{ 3 } \\right) \\end{aligned} <br> Subtracting the limit evaluations: <br> \\begin{aligned} I &= \\ln\\left( \\dfrac{ 3 }{ 4 } \\right) - \\ln\\left( \\dfrac{ 2 }{ 3 } \\right) \\cr &= \\ln\\left( \\dfrac{ 3/4 }{ 2/3 } \\right) \\cr &= \\ln\\left( \\dfrac{ 9 }{ 8 } \\right) \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$\\ln\\left( \\dfrac{ 3 }{ 4 } \\right)$",
            "feedback": "This occurs if you only evaluate the upper limit at $u = 2$ and forget to subtract the lower limit evaluated at $u = 1$."
        },
        {
            "ans": "$\\ln\\left( \\dfrac{ 9 }{ 4 } \\right)$",
            "feedback": "This error is caused by a sign error when evaluating the limits, adding the lower limit evaluation instead of subtracting it."
        },
        {
            "ans": "$\\ln\\left( \\dfrac{ 3 }{ 2 } \\right)$",
            "feedback": "This happens if you forget to apply the substitution to the integration limits, incorrectly integrating over the original limits $[0, \\ln 2]$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Substitution and Limit Transformations",
        "content": "A crucial step in definite integration by substitution is transforming the limits. Changing the limits to match the substitution variable ($u = e^x$) means you do not need to convert back to the original variable ($x$) after integrating, allowing you to evaluate the integral directly."
    }
},
{
    "id": "004685",
    "board": "WJEC",
    "level": "A",
    "major_area": "Integration",
    "topic": "Partial Fractions",
    "subtopic": [
        "Areas Under Curves",
        "Definite Integration"
    ],
    "img": false,
    "question": "The curve $C$ has the equation: <br> $y = \\dfrac{ 3x + 1 }{ (x + 1)(3x + 2)^2 }$ <br><br><strong>(a)</strong> Express $y$ in terms of partial fractions. <br><br><strong>(b)</strong> Find the exact area of the finite region bounded by the curve $C$, the $x$-axis, and the vertical lines $x = 0$ and $x = 1$.",
    "steps": [
        "To decompose $y$ into partial fractions, we set up the template for a repeated linear factor: <br> \\begin{aligned} \\dfrac{ 3x + 1 }{ (x + 1)(3x + 2)^2 } &= \\dfrac{ A }{ x + 1 } + \\dfrac{ B }{ 3x + 2 } + \\dfrac{ C }{ (3x + 2)^2 } \\end{aligned}",
        "We multiply both sides of the identity by the denominator $(x + 1)(3x + 2)^2$: <br> \\begin{aligned} 3x + 1 &= A(3x + 2)^2 + B(x + 1)(3x + 2) + C(x + 1) \\end{aligned}",
        "We solve for the constants by substituting convenient values of $x$: <br> Set $x = -1$: <br> \\begin{aligned} 3(-1) + 1 &= A(3(-1) + 2)^2 \\cr -2 &= A(-1)^2 \\implies A = -2 \\end{aligned} <br> Set $x = -\\dfrac{ 2 }{ 3 }$: <br> \\begin{aligned} 3\\left( -\\dfrac{ 2 }{ 3 } \\right) + 1 &= C\\left( -\\dfrac{ 2 }{ 3 } + 1 \\right) \\cr -1 &= \\dfrac{ 1 }{ 3 } C \\implies C = -3 \\end{aligned} <br> Compare the coefficients of $x^2$ on both sides: <br> \\begin{aligned} 0 &= 9A + 3B \\cr 0 &= 9(-2) + 3B \\cr 18 &= 3B \\implies B = 6 \\end{aligned} <br> Thus, the partial fractions decomposition is: <br> \\begin{aligned} y &= -\\dfrac{ 2 }{ x + 1 } + \\dfrac{ 6 }{ 3x + 2 } - \\dfrac{ 3 }{ (3x + 2)^2 } \\end{aligned}",
        "To find the area of the finite region, we integrate $y$ from $x = 0$ to $x = 1$: <br> \\begin{aligned} \\text{Area} &= \\int_{ 0 }^{ 1 } \\left( -\\dfrac{ 2 }{ x + 1 } + \\dfrac{ 6 }{ 3x + 2 } - \\dfrac{ 3 }{ (3x + 2)^2 } \\right) \\mathrm{d}x \\cr &= \\left[ -2\\ln|x + 1| + 2\\ln|3x + 2| + \\dfrac{ 1 }{ 3x + 2 } \\right]_{ 0 }^{ 1 } \\end{aligned}",
        "We evaluate this antiderivative at the limits $x = 1$ and $x = 0$: <br> At the upper limit $x = 1$: <br> \\begin{aligned} -2\\ln 2 + 2\\ln 5 + \\dfrac{ 1 }{ 5 } \\end{aligned} <br> At the lower limit $x = 0$: <br> \\begin{aligned} -2\\ln 1 + 2\\ln 2 + \\dfrac{ 1 }{ 2 } &= 2\\ln 2 + \\dfrac{ 1 }{ 2 } \\end{aligned} <br> Subtracting the lower limit evaluation from the upper limit evaluation: <br> \\begin{aligned} \\text{Area} &= \\left( -2\\ln 2 + 2\\ln 5 + \\dfrac{ 1 }{ 5 } \\right) - \\left( 2\\ln 2 + \\dfrac{ 1 }{ 2 } \\right) \\cr &= 2\\ln 5 - 4\\ln 2 - \\dfrac{ 3 }{ 10 } \\cr &= \\ln 25 - \\ln 16 - \\dfrac{ 3 }{ 10 } \\cr &= \\ln\\left( \\dfrac{ 25 }{ 16 } \\right) - \\dfrac{ 3 }{ 10 } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$\\ln\\left( \\dfrac{ 25 }{ 16 } \\right) + \\dfrac{ 7 }{ 10 }$",
            "feedback": "This error occurs due to an arithmetic sign slip when evaluating the limits of the repeated linear term, calculating $\\dfrac{ 1 }{ 5 } + \\dfrac{ 1 }{ 2 } = \\dfrac{ 7 }{ 10 }$ instead of $\\dfrac{ 1 }{ 5 } - \\dfrac{ 1 }{ 2 } = -\\dfrac{ 3 }{ 10 }$."
        },
        {
            "ans": "$\\ln\\left( \\dfrac{ 5 }{ 4 } \\right) - \\dfrac{ 3 }{ 10 }$",
            "feedback": "This mistake happens if you lose the factor of $2$ on the logarithmic terms during integration, evaluating $-2\\ln|x+1| + 2\\ln|3x+2|$ as $-\\ln|x+1| + \\ln|3x+2|$ instead."
        },
        {
            "ans": "$\\ln\\left( \\dfrac{ 25 }{ 16 } \\right)$",
            "feedback": "This occurs if you omit the integration of the repeated quadratic factor term, completely leaving out the fractional constants."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Combining Logarithms for Exact Areas",
        "content": "When evaluating definite integrals that yield multiple logarithmic terms, always simplify your answer into a single logarithm using the laws of logarithms: $a\\ln x - b\\ln y = \\ln\\left( \\dfrac{ x^a }{ y^b } \\right)$. This is not only standard practice in A-Level examinations, but it is also essential to prove that a calculated area is positive."
    }
},
{
    "id": "004686",
    "board": "WJEC",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Binomial Expansion",
    "subtopic": [
        "Negative Fractional Indices",
        "Approximations"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Find the first three terms in the binomial expansion of $(1 - 8x)^{ -\\dfrac{ 1 }{ 2 } }$ in ascending powers of $x$. <br><br><strong>(b)</strong> State the range of values of $x$ for which the expansion is valid. <br><br><strong>(c)</strong> By substituting $x = \\dfrac{ 1 }{ 100 }$ into your expansion, find an approximate value for $\\sqrt{ 23 }$ in the form $\\dfrac{ a }{ b }$, where $a$ and $b$ are integers.",
    "steps": [
        "To find the binomial expansion of $(1 - 8x)^{ -\\dfrac{ 1 }{ 2 } }$, we apply the general binomial theorem $(1 + u)^n = 1 + nu + \\dfrac{ n(n - 1) }{ 2! } u^2 + \\dots$ where $u = -8x$ and $n = -\\dfrac{ 1 }{ 2 }$: <br> \\begin{aligned} (1 - 8x)^{ -\\dfrac{ 1 }{ 2 } } &\\approx 1 + \\left( -\\dfrac{ 1 }{ 2 } \\right)(-8x) + \\dfrac{ \\left( -\\dfrac{ 1 }{ 2 } \\right)\\left( -\\dfrac{ 3 }{ 2 } \\right) }{ 2 } (-8x)^2 \\end{aligned}",
        "We simplify each term of the expansion: <br> \\begin{aligned} \\text{Term 1: } &1 \\cr \\text{Term 2: } &4x \\cr \\text{Term 3: } &\\dfrac{ 3/4 }{ 2 } (64x^2) = \\dfrac{ 3 }{ 8 } (64x^2) = 24x^2 \\end{aligned} <br> Thus, the first three terms of the expansion are: <br> \\begin{aligned} 1 + 4x + 24x^2 \\end{aligned}",
        "To find the range of validity for part (b), the absolute value of the variable term in the expansion must be strictly less than $1$: <br> \\begin{aligned} |-8x| < 1 &\\implies 8|x| < 1 \\cr &\\implies |x| < \\dfrac{ 1 }{ 8 } \\end{aligned}",
        "To solve part (c), we substitute $x = \\dfrac{ 1 }{ 100 } = 0.01$ into the left-hand side of our binomial expression: <br> \\begin{aligned} \\left( 1 - 8\\left( \\dfrac{ 1 }{ 100 } \\right) \\right)^{ -\\dfrac{ 1 }{ 2 } } &= \\left( 1 - \\dfrac{ 8 }{ 100 } \\right)^{ -\\dfrac{ 1 }{ 2 } } \\cr &= \\left( \\dfrac{ 92 }{ 100 } \\right)^{ -\\dfrac{ 1 }{ 2 } } \\cr &= \\sqrt{ \\dfrac{ 100 }{ 92 } } = \\sqrt{ \\dfrac{ 25 }{ 23 } } = \\dfrac{ 5 }{ \\sqrt{ 23 } } \\end{aligned}",
        "Next, we substitute $x = 0.01$ into our three-term binomial expansion from part (a): <br> \\begin{aligned} 1 + 4(0.01) + 24(0.01)^2 &= 1 + 0.04 + 0.0024 \\cr &= 1.0424 \\end{aligned} <br> Expressing $1.0424$ as an exact simplified fraction: <br> \\begin{aligned} 1.0424 = \\dfrac{ 10424 }{ 10000 } = \\dfrac{ 1303 }{ 1250 } \\end{aligned}",
        "We equate our two results to approximate $\\sqrt{ 23 }$: <br> \\begin{aligned} \\dfrac{ 5 }{ \\sqrt{ 23 } } &\\approx \\dfrac{ 1303 }{ 1250 } \\cr \\sqrt{ 23 } &\\approx \\dfrac{ 5 \\times 1250 }{ 1303 } \\cr \\sqrt{ 23 } &\\approx \\dfrac{ 6250 }{ 1303 } \\end{aligned} <br> Thus, the approximate value of $\\sqrt{ 23 }$ is $\\dfrac{ 6250 }{ 1303 }$."
    ],
    "pi_options": [
        {
            "ans": "<strong>(c)</strong> $\\dfrac{ 2606 }{ 2500 }$",
            "feedback": "This is a severe error caused by failing to recognise that substituting $x = 0.01$ into $(1-8x)^{-1/2}$ yields $\\dfrac{ 5 }{ \\sqrt{ 23 } }$ rather than $\\sqrt{ 23 }$, resulting in an approximation that is incorrect by a factor of nearly five."
        },
        {
            "ans": "<strong>(c)</strong> $\\dfrac{ 1250 }{ 1303 }$",
            "feedback": "This mistake occurs if you solve the algebraic relationship between the expansion and $\\sqrt{ 23 }$ correctly but omit the numerator factor of $5$ during final isolation, calculating $\\sqrt{ 23 } \\approx \\dfrac{ 1250 }{ 1303 }$."
        },
        {
            "ans": "<strong>(c)</strong> $\\dfrac{ 1303 }{ 6250 }$",
            "feedback": "This error occurs if you invert the final fractional relationship, evaluating $\\sqrt{ 23 }$ as $\\dfrac{ 1303 }{ 6250 }$ instead of $\\dfrac{ 6250 }{ 1303 }$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: The Approximation Conversion Trap",
        "content": "When using binomial expansions to approximate roots, students almost always make the mistake of assuming that substituting a small value of $x$ yields the root directly (e.g. assuming $(1-8x)^{-1/2} = \\sqrt{23}$). Always write out the left-hand side calculation in full, find its exact relation to the required root, and then rearrange the final fraction carefully."
    }
},
{
    "id": "004687",
    "board": "WJEC",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Binomial Expansion",
    "subtopic": [
        "Fractional Indices",
        "Leading Constants"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Find the first three terms in the binomial expansion of $(8 - 3x)^{ \\dfrac{ 1 }{ 3 } }$ in ascending powers of $x$, giving each coefficient as a simplified fraction. <br><br><strong>(b)</strong> State the range of values of $x$ for which the expansion is valid.",
    "steps": [
        "To expand a binomial expression of the form $(a + bx)^n$ where the leading term is not $1$, we must first factorise the leading constant out of the brackets: <br> \\begin{aligned} (8 - 3x)^{ \\dfrac{ 1 }{ 3 } } &= \\left[ 8 \\left( 1 - \\dfrac{ 3 }{ 8 } x \\right) \\right]^{ \\dfrac{ 1 }{ 3 } } \\cr &= 8^{ \\dfrac{ 1 }{ 3 } } \\left( 1 - \\dfrac{ 3 }{ 8 } x \\right)^{ \\dfrac{ 1 }{ 3 } } \\cr &= 2 \\left( 1 - \\dfrac{ 3 }{ 8 } x \\right)^{ \\dfrac{ 1 }{ 3 } } \\end{aligned}",
        "We apply the general binomial theorem to the term inside the parentheses with $u = -\\dfrac{ 3 }{ 8 } x$ and $n = \\dfrac{ 1 }{ 3 }$: <br> \\begin{aligned} \\left( 1 - \\dfrac{ 3 }{ 8 } x \\right)^{ \\dfrac{ 1 }{ 3 } } &\\approx 1 + \\left( \\dfrac{ 1 }{ 3 } \\right)\\left( -\\dfrac{ 3 }{ 8 } x \\right) + \\dfrac{ \\left( \\dfrac{ 1 }{ 3 } \\right)\\left( -\\dfrac{ 2 }{ 3 } \\right) }{ 2 } \\left( -\\dfrac{ 3 }{ 8 } x \\right)^2 \\end{aligned}",
        "We expand and simplify each term inside the bracket: <br> \\begin{aligned} \\text{Term 1: } &1 \\cr \\text{Term 2: } &-\\dfrac{ 1 }{ 8 } x \\cr \\text{Term 3: } &\\left( -\\dfrac{ 1 }{ 9 } \\right) \\left( \\dfrac{ 9 }{ 64 } x^2 \\right) = -\\dfrac{ 1 }{ 64 } x^2 \\end{aligned} <br> Substituting these back into our expression: <br> \\begin{aligned} 2 \\left( 1 - \\dfrac{ 1 }{ 8 } x - \\dfrac{ 1 }{ 64 } x^2 \\right) \\end{aligned}",
        "We distribute the factor of $2$ across the terms to get our final expansion: <br> \\begin{aligned} 2 - \\dfrac{ 1 }{ 4 } x - \\dfrac{ 1 }{ 32 } x^2 \\end{aligned}",
        "To solve part (b), the range of validity requires the absolute value of the variable term in the parenthetical expression to be strictly less than $1$: <br> \\begin{aligned} \\left| -\\dfrac{ 3 }{ 8 } x \\right| < 1 &\\implies \\dfrac{ 3 }{ 8 } |x| < 1 \\cr &\\implies |x| < \\dfrac{ 8 }{ 3 } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $1 - \\dfrac{ 1 }{ 8 } x - \\dfrac{ 1 }{ 64 } x^2$, <strong>(b)</strong> $|x| < \\dfrac{ 8 }{ 3 }$",
            "feedback": "This error occurs if you forget to multiply the final terms of the binomial expansion by the factor of $2$ that was extracted from the leading constant $8^{1/3}$."
        },
        {
            "ans": "<strong>(a)</strong> $2 - \\dfrac{ 1 }{ 4 } x - \\dfrac{ 1 }{ 32 } x^2$, <strong>(b)</strong> $|x| < 1$",
            "feedback": "This error occurs in part (b) if you assume the range of validity is always $|x| < 1$ regardless of the horizontal coefficients, neglecting the scale factor of the variable."
        },
        {
            "ans": "<strong>(a)</strong> $2 - \\dfrac{ 1 }{ 4 } x + \\dfrac{ 1 }{ 32 } x^2$, <strong>(b)</strong> $|x| < \\dfrac{ 8 }{ 3 }$",
            "feedback": "This mistake is caused by a sign error in evaluating Term 3, failing to recognise that the product of the terms $\\dfrac{ 1 }{ 3 } \\left( -\\dfrac{ 2 }{ 3 } \\right)$ is negative, resulting in a positive quadratic term."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Leading Term Factorisation",
        "content": "For any binomial expansion where the index $n$ is not a positive integer, the first term inside the bracket *must* be exactly $1$ to apply the standard binomial formula. Always extract the leading constant first, making sure to apply the index $n$ to the extracted constant (e.g. $8^{1/3} = 2$)."
    }
},
{
    "id": "004688",
    "board": "WJEC",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Binomial Expansion",
    "subtopic": [
        "Negative Indices",
        "Combined Expressions"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Find the binomial expansion of: <br> $f(x) = \\dfrac{ 3 + x }{ (1 - 2x)^2 }$ <br><br>in ascending powers of $x$, up to and including the term in $x^2$. <br><br><strong>(b)</strong> State the range of values of $x$ for which this expansion is valid.",
    "steps": [
        "We rewrite the rational function as a product involving a negative integer index: <br> \\begin{aligned} f(x) &= (3 + x)(1 - 2x)^{ -2 } \\end{aligned}",
        "We expand the term $(1 - 2x)^{ -2 }$ using the binomial theorem with $u = -2x$ and $n = -2$: <br> \\begin{aligned} (1 - 2x)^{ -2 } &\\approx 1 + (-2)(-2x) + \\dfrac{ (-2)(-3) }{ 2 } (-2x)^2 \\end{aligned}",
        "We simplify each term of this expansion: <br> \\begin{aligned} \\text{Term 1: } &1 \\cr \\text{Term 2: } &4x \\cr \\text{Term 3: } &3(4x^2) = 12x^2 \\end{aligned} <br> Thus, the expansion of the denominator term is: <br> \\begin{aligned} (1 - 2x)^{ -2 } &\\approx 1 + 4x + 12x^2 \\end{aligned}",
        "We multiply this expansion by the numerator $(3 + x)$, ignoring terms of degree $3$ or higher: <br> \\begin{aligned} f(x) &\\approx (3 + x)(1 + 4x + 12x^2) \\cr &= 3(1 + 4x + 12x^2) + x(1 + 4x) \\cr &= 3 + 12x + 36x^2 + x + 4x^2 \\cr &= 3 + 13x + 40x^2 \\end{aligned}",
        "To solve part (b), the range of validity depends on the variable term inside the binomial bracket: <br> \\begin{aligned} |-2x| < 1 &\\implies 2|x| < 1 \\cr &\\implies |x| < \\dfrac{ 1 }{ 2 } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $3 + 13x + 36x^2$, <strong>(b)</strong> $|x| < \\dfrac{ 1 }{ 2 }$",
            "feedback": "This error occurs if you forget to include the term $x \\times 4x = 4x^2$ when distributing the multiplication of $(3 + x)$ across the quadratic term."
        },
        {
            "ans": "<strong>(a)</strong> $3 + 13x + 16x^2$, <strong>(b)</strong> $|x| < 1$",
            "feedback": "This mistake is caused by using an incorrect expansion for $(1 - 2x)^{-2}$, such as evaluating the quadratic term coefficient as $4x^2$ instead of $12x^2$ due to an index division slip."
        },
        {
            "ans": "<strong>(a)</strong> $3 + 11x + 40x^2$, <strong>(b)</strong> $|x| < \\dfrac{ 1 }{ 2 }$",
            "feedback": "This arises from a sign slip when evaluating Term 2 of the binomial expansion, calculating $-4x$ instead of $+4x$, which leads to $3 - 12x + 36x^2 + x - 4x^2 = 3 - 11x + 32x^2$ or other sign errors."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Limit Polynomial Multiplication",
        "content": "When multiplying a linear polynomial like $(3 + x)$ by an infinite series expansion, there is no need to calculate every term. Only compute the product terms that contribute up to the required power (in this case, $x^2$). Any higher-order products (like $x \\times 12x^2 = 12x^3$) can be immediately ignored."
    }
},
{
    "id": "004689",
    "board": "WJEC",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Binomial Expansion",
    "subtopic": [
        "Partial Fractions",
        "Negative Indices"
    ],
    "img": false,
    "question": "A function $f$ is defined by: <br> $f(x) = \\dfrac{ 3x - 5 }{ (1 - x)(1 - 2x) }$ <br><br><strong>(a)</strong> Express $f(x)$ in terms of partial fractions. <br><br><strong>(b)</strong> Find the binomial expansion of $f(x)$ in ascending powers of $x$ up to and including the term in $x^2$. <br><br><strong>(c)</strong> State the set of values of $x$ for which this combined expansion is valid.",
    "steps": [
        "To express $f(x)$ in partial fractions, we write the decomposition template for non-repeated linear factors: <br> \\begin{aligned} \\dfrac{ 3x - 5 }{ (1 - x)(1 - 2x) } &= \\dfrac{ A }{ 1 - x } + \\dfrac{ B }{ 1 - 2x } \\end{aligned}",
        "We clear the fractions by multiplying by the common denominator: <br> \\begin{aligned} 3x - 5 &= A(1 - 2x) + B(1 - x) \\end{aligned} <br> We solve for $A$ and $B$ by substituting $x$ values: <br> Set $x = 1$: <br> \\begin{aligned} 3(1) - 5 &= A(1 - 2) \\cr -2 &= -A \\implies A = 2 \\end{aligned} <br> Set $x = 0.5$: <br> \\begin{aligned} 3(0.5) - 5 &= B(1 - 0.5) \\cr -3.5 &= 0.5B \\implies B = -7 \\end{aligned} <br> Thus, the partial fractions decomposition is: <br> \\begin{aligned} f(x) &= \\dfrac{ 2 }{ 1 - x } - \\dfrac{ 7 }{ 1 - 2x } \\end{aligned}",
        "To solve part (b), we express the partial fractions using negative integer indices: <br> \\begin{aligned} f(x) &= 2(1 - x)^{ -1 } - 7(1 - 2x)^{ -1 } \\end{aligned}",
        "We expand each term up to the $x^2$ term using the binomial theorem: <br> \\begin{aligned} 2(1 - x)^{ -1 } &\\approx 2(1 + x + x^2)\\cr &= 2 + 2x + 2x^2 \\cr -7(1 - 2x)^{ -1 } &\\approx -7(1 + 2x + (2x)^2)\\cr &= -7(1 + 2x + 4x^2)\\cr &= -7 - 14x - 28x^2 \\end{aligned}",
        "We combine these expansions together: <br> \\begin{aligned} f(x) &\\approx (2 - 7) + (2 - 14)x + (2 - 28)x^2 \\cr &= -5 - 12x - 26x^2 \\end{aligned}",
        "To solve part (c), we find the range of validity for each individual expansion: <br> For $(1 - x)^{ -1 }$: <br> \\begin{aligned} |x| < 1 \\end{aligned} <br> For $(1 - 2x)^{ -1 }$: <br> \\begin{aligned} |2x| < 1 &\\implies |x| < \\dfrac{ 1 }{ 2 } \\end{aligned} <br> For the combined expansion to be valid, both series must converge. We choose the stricter of the two intervals, which is the intersection: <br> \\begin{aligned} |x| < \\dfrac{ 1 }{ 2 } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "<strong>(b)</strong> $-1 - 3x - 7x^2$, <strong>(c)</strong> $|x| < \\dfrac{ 1 }{ 2 }$",
            "feedback": "This error occurs if you use incorrect partial fractions constants ($A = 1, B = -2$), leading to a completely corrupted binomial expansion."
        },
        {
            "ans": "<strong>(b)</strong> $-5 - 12x - 26x^2$, <strong>(c)</strong> $|x| < 1$",
            "feedback": "This mistake occurs in part (c) if you choose the larger interval of convergence $|x| < 1$ instead of the stricter, overlapping interval $|x| < \\dfrac{ 1 }{ 2 }$."
        },
        {
            "ans": "<strong>(b)</strong> $-5 - 12x - 30x^2$, <strong>(c)</strong> $|x| < \\dfrac{ 1 }{ 2 }$",
            "feedback": "This mistake is caused by a failure to square the variable term correctly in the second expansion, evaluating $-7(1 - 2x)^{-1}$ as $-7(1 + 2x + 2x^2) = -7 - 14x - 14x^2$ instead."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Overlapping Validity Sets",
        "content": "When expanding multiple binomial brackets in a single expression, each bracket has its own independent range of validity. For the combined final expansion to be valid, both expansions must converge simultaneously. Therefore, the overall range of validity is always the *strictest* (smallest) of the individual intervals."
    }
},
{
    "id": "004690",
    "board": "WJEC",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Binomial Expansion",
    "subtopic": [
        "Negative Indices",
        "Equating Coefficients"
    ],
    "img": false,
    "question": "In the binomial expansion of $(1 + ax)^n$, where $n$ is a negative integer and $a$ is a real constant, the first three non-zero terms in ascending powers of $x$ are: <br> $1 - 12x + 78x^2$ <br><br><strong>(a)</strong> Find the values of the constants $a$ and $n$. <br><br><strong>(b)</strong> State the range of values of $x$ for which the expansion is valid.",
    "steps": [
        "We write the general binomial expansion of $(1 + ax)^n$: <br> \\begin{aligned} (1 + ax)^n &\\approx 1 + n(ax) + \\dfrac{ n(n - 1) }{ 2! } (ax)^2 \\cr &= 1 + anx + \\dfrac{ n(n - 1)a^2 }{ 2 } x^2 \\end{aligned}",
        "We equate the coefficients of our general expansion to the coefficients of the given series $1 - 12x + 78x^2$: <br> For the $x$ term: <br> \\begin{aligned} an &= -12 \\end{aligned} <br> For the $x^2$ term: <br> \\begin{aligned} \\dfrac{ n(n - 1)a^2 }{ 2 } &= 78 \\end{aligned}",
        "We express $a$ in terms of $n$ from the first equation: <br> \\begin{aligned} a &= -\\dfrac{ 12 }{ n } \\end{aligned}",
        "We substitute our expression for $a$ into the second equation: <br> \\begin{aligned} \\dfrac{ n(n - 1) }{ 2 } \\left( -\\dfrac{ 12 }{ n } \\right)^2 &= 78 \\cr \\dfrac{ n(n - 1) }{ 2 } \\left( \\dfrac{ 144 }{ n^2 } \\right) &= 78 \\cr \\dfrac{ 72(n - 1) }{ n } &= 78 \\end{aligned}",
        "We solve this equation for $n$: <br> \\begin{aligned} 72(n - 1) &= 78n \\cr 72n - 72 &= 78n \\cr -72 &= 6n \\implies n = -12 \\end{aligned}",
        "Now, we substitute $n = -12$ back to find the value of $a$: <br> \\begin{aligned} a &= -\\dfrac{ 12 }{ -12 } = 1 \\end{aligned} <br> Thus, the constants are $a = 1$ and $n = -12$.",
        "To solve part (b), we find the range of validity for $(1 + x)^{-12}$: <br> \\begin{aligned} |ax| < 1 &\\implies |(1)x| < 1 \\cr &\\implies |x| < 1 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $a = -1$, $n = 12$, <strong>(b)</strong> $|x| < 1$",
            "feedback": "This error occurs if you make a sign error when solving for $n$, concluding that $n$ is positive ($12$) instead of a negative integer ($-12$), which violates the premise of the question."
        },
        {
            "ans": "<strong>(a)</strong> $a = 2$, $n = -6$, <strong>(b)</strong> $|x| < \\dfrac{ 1 }{ 2 }$",
            "feedback": "This mistake is caused by an arithmetic division error when simplifying the quadratic substitution equation, leading to incorrect values of $a$ and $n$."
        },
        {
            "ans": "<strong>(a)</strong> $a = 1$, $n = -12$, <strong>(b)</strong> $|x| < \\dfrac{ 1 }{ 12 }$",
            "feedback": "This error occurs in part (b) if you mistakenly use the coefficient of the linear term ($12$) instead of the value of $a$ ($1$) to determine the range of validity."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Systems of Binomial Equations",
        "content": "Reverse-engineering a binomial expansion by equating coefficients always results in a system of non-linear equations. Isolating the linear scale factor $a = -\\dfrac{ k }{ n }$ and substituting it into the quadratic term is the most reliable way to eliminate $a$ and solve for $n$ directly."
    }
},
{
    "id": "004691",
    "board": "WJEC",
    "level": "A",
    "major_area": "Trigonometry",
    "topic": "Small-Angle Approximations",
    "subtopic": [
        "Trigonometric Equations",
        "Quadratic Form"
    ],
    "img": false,
    "question": "Use small-angle approximations to find the small positive root of the equation: <br> $\\sin x + \\cos x = 1.2$ <br><br>giving your answer to three decimal places.",
    "steps": [
        "For small values of $x$ measured in radians, we apply the standard small-angle approximations: <br> \\begin{aligned} \\sin x &\\approx x \\cr \\cos x &\\approx 1 - \\dfrac{ x^2 }{ 2 } \\end{aligned}",
        "We substitute these approximations into our equation: <br> \\begin{aligned} x + \\left( 1 - \\dfrac{ x^2 }{ 2 } \\right) &= 1.2 \\end{aligned}",
        "We collect the terms and rearrange the equation into a standard quadratic form: <br> \\begin{aligned} 1 - \\dfrac{ x^2 }{ 2 } + x - 1.2 &= 0 \\cr -\\dfrac{ 1 }{ 2 } x^2 + x - 0.2 &= 0 \\cr x^2 - 2x + 0.4 &= 0 \\end{aligned}",
        "We apply the quadratic formula to solve for $x$: <br> \\begin{aligned} x &= \\dfrac{ -(-2) \\pm \\sqrt{ (-2)^2 - 4(1)(0.4) } }{ 2(1) } \\cr &= \\dfrac{ 2 \\pm \\sqrt{ 4 - 1.6 } }{ 2 } \\cr &= \\dfrac{ 2 \\pm \\sqrt{ 2.4 } }{ 2 } \\cr &= 1 \\pm \\dfrac{ \\sqrt{ 2.4 } }{ 2 } \\end{aligned}",
        "We evaluate the roots numerically using $\\sqrt{ 2.4 } \\approx 1.54919$: <br> \\begin{aligned} x_1 &\\approx 1 + 0.7746 = 1.775 \\cr x_2 &\\approx 1 - 0.7746 = 0.225 \\end{aligned} <br> For the small-angle approximation to remain valid, $x$ must be close to zero. Thus, we reject the root $x \\approx 1.775$ as it is too large, leaving our small positive root: <br> \\begin{aligned} x \\approx 0.225 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$1.775$",
            "feedback": "This is the incorrect algebraic root of the quadratic equation. While mathematically valid for the quadratic model, it is too large to satisfy the fundamental assumption of small-angle approximations ($x \\approx 0$)."
        },
        {
            "ans": "$0.450$",
            "feedback": "This error occurs if you forget to divide the discriminant by $2$ when evaluating the quadratic formula, leading to a calculated value of $2 - \\sqrt{ 2.4 } \\approx 0.451$."
        },
        {
            "ans": "$-0.225$",
            "feedback": "This arises from a sign error when solving the quadratic equation or interpreting the required interval, resulting in a negative root instead of the positive root."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Root Validation in Approximations",
        "content": "Solving algebraic approximations of trigonometric equations often yields multiple quadratic roots. You must always check your solutions against the physical bounds of the approximation: a 'small' angle in radians should generally lie within the interval $[-0.5, 0.5]$ to maintain accuracy. Any roots outside this range must be rejected as extraneous."
    }
},
{
    "id": "004692",
    "board": "WJEC",
    "level": "A",
    "major_area": "Trigonometry",
    "topic": "Small-Angle Approximations",
    "subtopic": [
        "Algebraic Simplification"
    ],
    "img": false,
    "question": "Show that, for small values of $x$ measured in radians: <br> $\\dfrac{ 2\\cos x - 2 + 5x\\sin x }{ 3x\\tan 2x } \\approx k$ <br><br>where $k$ is a rational constant to be determined.",
    "steps": [
        "For small values of $x$ measured in radians, we apply the standard small-angle approximations: <br> \\begin{aligned} \\cos x &\\approx 1 - \\dfrac{ x^2 }{ 2 } \\cr \\sin x &\\approx x \\cr \\tan 2x &\\approx 2x \\end{aligned}",
        "We substitute these approximations into the numerator of the expression: <br> \\begin{aligned} 2\\cos x - 2 + 5x\\sin x &\\approx 2\\left( 1 - \\dfrac{ x^2 }{ 2 } \\right) - 2 + 5x(x) \\cr &= 2 - x^2 - 2 + 5x^2 \\cr &= 4x^2 \\end{aligned}",
        "Next, we substitute the approximations into the denominator of the expression: <br> \\begin{aligned} 3x\\tan 2x &\\approx 3x(2x) \\cr &= 6x^2 \\end{aligned}",
        "We divide the approximated numerator by the approximated denominator to determine $k$: <br> \\begin{aligned} \\dfrac{ 4x^2 }{ 6x^2 } &= \\dfrac{ 4 }{ 6 } \\cr &= \\dfrac{ 2 }{ 3 } \\end{aligned} <br> Thus, the expression is approximately equal to the rational constant $k = \\dfrac{ 2 }{ 3 }$."
    ],
    "pi_options": [
        {
            "ans": "$k = \\dfrac{ 1 }{ 3 }$",
            "feedback": "This error occurs if you make a sign error or expansion error in the numerator, calculating $2\\cos x - 2 \\approx 2 - 2x^2 - 2 = -2x^2$ which simplifies the numerator to $3x^2$ instead of $4x^2$."
        },
        {
            "ans": "$k = \\dfrac{ 4 }{ 3 }$",
            "feedback": "This mistake occurs if you forget to substitute $\\tan 2x \\approx 2x$ in the denominator, using $\\tan 2x \\approx x$ instead, which results in a denominator of $3x^2$ instead of $6x^2$."
        },
        {
            "ans": "$k = 1$",
            "feedback": "This arises if you make a combined simplification error, such as assuming that the $x^2$ terms cancel out with a coefficient of $1$ without evaluating the multiplier coefficients."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Limit Approximations of Trig Quotients",
        "content": "When evaluating rational quotients of trigonometric functions for small $x$, the powers of the variable $x$ in the numerator and denominator must balance out (in this case, both are of degree $2$). This allows the $x$ terms to cancel, leaving a constant limit that approximates the behavior of the function near $x = 0$."
    }
},
{
    "id": "004693",
    "board": "WJEC",
    "level": "A",
    "major_area": "Trigonometry",
    "topic": "Small-Angle Approximations",
    "subtopic": [
        "Trigonometric Equations",
        "Root Selection"
    ],
    "img": false,
    "question": "Using small-angle approximations, solve the equation: <br> $\\cos\\theta + 4\\sin\\theta = 0.8$ <br><br>Explain clearly why only one of the algebraic roots is valid as a small-angle approximation, and state this valid root to three decimal places.",
    "steps": [
        "For small values of $\\theta$ measured in radians, we apply the standard approximations: <br> \\begin{aligned} \\cos\\theta &\\approx 1 - \\dfrac{ \\theta^2 }{ 2 } \\cr \\sin\\theta &\\approx \\theta \\end{aligned}",
        "We substitute these approximations into the equation: <br> \\begin{aligned} \\left( 1 - \\dfrac{ \\theta^2 }{ 2 } \\right) + 4\\theta &= 0.8 \\cr -\\dfrac{ 1 }{ 2 } \\theta^2 + 4\\theta + 0.2 &= 0 \\cr \\theta^2 - 8\\theta - 0.4 &= 0 \\end{aligned}",
        "We solve this quadratic equation using the quadratic formula: <br> \\begin{aligned} \\theta &= \\dfrac{ -(-8) \\pm \\sqrt{ (-8)^2 - 4(1)(-0.4) } }{ 2(1) } \\cr &= \\dfrac{ 8 \\pm \\sqrt{ 64 + 1.6 } }{ 2 } \\cr &= \\dfrac{ 8 \\pm \\sqrt{ 65.6 } }{ 2 } \\cr &= 4 \\pm \\sqrt{ 16.4 } \\end{aligned}",
        "We evaluate the roots numerically using $\\sqrt{ 16.4 } \\approx 4.04969$: <br> \\begin{aligned} \\theta_1 &\\approx 4 + 4.050 = 8.050 \\cr \\theta_2 &\\approx 4 - 4.050 = -0.050 \\end{aligned}",
        "Small-angle approximations are derived assuming the angle is very close to zero ($\\theta \\approx 0$ radians). Because $\\theta = 8.050$ radians is significantly larger than $1$, it violates this fundamental mathematical assumption and must be rejected. The only valid root is: <br> \\begin{aligned} \\theta \\approx -0.050 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$8.050$",
            "feedback": "This is the positive root of the quadratic equation. While algebraically correct, a value of $8.050$ radians (approximately $461^\\circ$) is far too large to be valid as a small-angle approximation."
        },
        {
            "ans": "$-0.100$",
            "feedback": "This mistake occurs if you forget to divide by $2$ when evaluating the quadratic formula, calculating $8 - \\sqrt{ 65.6 } \\approx -0.100$."
        },
        {
            "ans": "$-0.050$ and $8.050$",
            "feedback": "This answer is incorrect because it fails to perform the required validation step. In small-angle approximation problems, you must always evaluate and reject any extraneous non-small roots."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Physical Meaning of Roots",
        "content": "In applied mathematics and physics, solving quadratic models almost always yields a secondary mathematical root. Always relate the mathematics back to the physical model: since the Taylor series expansions are centered at $x = 0$, only the root closest to $0$ represents a physically meaningful solution."
    }
},
{
    "id": "004694",
    "board": "WJEC",
    "level": "A",
    "major_area": "Trigonometry",
    "topic": "Small-Angle Approximations",
    "subtopic": [
        "Percentage Error",
        "Taylor Series"
    ],
    "img": false,
    "question": "A student uses the small-angle approximation $\\cos x \\approx 1 - \\dfrac{ x^2 }{ 2 }$ to estimate the value of $\\cos(0.3)$. <br><br><strong>(a)</strong> Calculate the percentage error in this approximation, giving your answer to four decimal places. <br><br><strong>(b)</strong> State whether this approximation is an overestimate or an underestimate, justifying your answer.",
    "steps": [
        "We first calculate the approximated value of $\\cos(0.3)$ using the small-angle formula: <br> \\begin{aligned} \\cos(0.3) &\\approx 1 - \\dfrac{ 0.3^2 }{ 2 } \\cr &= 1 - 0.045 \\cr &= 0.955 \\end{aligned}",
        "Next, we determine the exact value of $\\cos(0.3)$ using a calculator set in radian mode: <br> \\begin{aligned} \\cos(0.3) &\\approx 0.955336489 \\end{aligned}",
        "We find the percentage error using the standard formula: <br> \\begin{aligned} \\text{Percentage Error} &= \\left| \\dfrac{ \\text{Approximate} - \\text{Exact} }{ \\text{Exact} } \\right| \\times 100 \\cr &= \\left| \\dfrac{ 0.955 - 0.955336489 }{ 0.955336489 } \\right| \\times 100 \\cr &\\approx \\left( \\dfrac{ 0.000336489 }{ 0.955336489 } \\right) \\times 100 \\cr &\\approx 0.0352\\% \\end{aligned}",
        "To solve part (b), we compare the two values. Since our approximated value ($0.955$) is strictly less than the exact value ($0.955336489$), the approximation is an <strong>underestimate</strong>.",
        "We can also justify this theoretically using the Taylor series expansion for cosine: <br> \\begin{aligned} \\cos x &= 1 - \\dfrac{ x^2 }{ 2 } + \\dfrac{ x^4 }{ 24 } - \\dfrac{ x^6 }{ 720 } + \\dots \\end{aligned} <br> Because the next term in the series ($+\\dfrac{ x^4 }{ 24 }$) is positive, truncating the series at $1 - \\dfrac{ x^2 }{ 2 }$ omits a positive quantity, making the approximation smaller than the true value."
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $0.0352\\%$, <strong>(b)</strong> Overestimate",
            "feedback": "This is incorrect. The approximated value ($0.955$) is smaller than the true value ($0.955336...$), which means it is an underestimate, not an overestimate."
        },
        {
            "ans": "<strong>(a)</strong> $0.0351\\%$, <strong>(b)</strong> Underestimate",
            "feedback": "This arises from a rounding error or truncation slip when dividing the difference by the approximate value instead of the exact value in the denominator of the percentage error formula."
        },
        {
            "ans": "<strong>(a)</strong> $0.3523\\%$, <strong>(b)</strong> Underestimate",
            "feedback": "This is a decimal placement error caused by multiplying or dividing by $10$ incorrectly when converting the fractional error to a percentage."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Alternating Series and Bounds",
        "content": "The Taylor series expansion for $\\cos x$ is an alternating series (the signs of the terms alternate between positive and negative). This means that truncating the series at $1$ is an overestimate, truncating at $1 - \\dfrac{ x^2 }{ 2 }$ is an underestimate, and truncating at $1 - \\dfrac{ x^2 }{ 2 } + \\dfrac{ x^4 }{ 24 }$ is an overestimate, continually bounding the true value."
    }
},
{
    "id": "004695",
    "board": "WJEC",
    "level": "A",
    "major_area": "Trigonometry",
    "topic": "Small-Angle Approximations",
    "subtopic": [
        "Geometric Proofs",
        "Taylor Series"
    ],
    "img": false,
    "question": "An isosceles triangle has two equal sides of length $L$ and an included angle of $\\theta$ radians, where $\\theta$ is small. <br><br>By using the small-angle approximations $\\sin\\theta \\approx \\theta - \\dfrac{ \\theta^3 }{ 6 }$, show that the difference between the area of the sector of radius $L$ with angle $\\theta$ and the area of this triangle is approximately: <br> $\\dfrac{ 1 }{ 12 } L^2 \\theta^3$",
    "steps": [
        "We first write down the formula for the area of a circular sector of radius $L$ with a central angle of $\\theta$ radians: <br> \\begin{aligned} A_{\\text{sector}} &= \\dfrac{ 1 }{ 2 } L^2 \\theta \\end{aligned}",
        "Next, we write down the formula for the area of an isosceles triangle with two sides of length $L$ and an included angle of $\\theta$: <br> \\begin{aligned} A_{\\text{triangle}} &= \\dfrac{ 1 }{ 2 } L^2 \\sin \\theta \\end{aligned}",
        "We express the difference $D$ between the two areas: <br> \\begin{aligned} D &= A_{\\text{sector}} - A_{\\text{triangle}} \\cr &= \\dfrac{ 1 }{ 2 } L^2 \\theta - \\dfrac{ 1 }{ 2 } L^2 \\sin \\theta \\cr &= \\dfrac{ 1 }{ 2 } L^2 (\\theta - \\sin \\theta) \\end{aligned}",
        "We substitute the given higher-order small-angle approximation $\\sin\\theta \\approx \\theta - \\dfrac{ \\theta^3 }{ 6 }$ into our expression: <br> \\begin{aligned} D &\\approx \\dfrac{ 1 }{ 2 } L^2 \\left[ \\theta - \\left( \\theta - \\dfrac{ \\theta^3 }{ 6 } \\right) \\right] \\cr &= \\dfrac{ 1 }{ 2 } L^2 \\left( \\dfrac{ \\theta^3 }{ 6 } \\right) \\cr &= \\dfrac{ 1 }{ 12 } L^2 \\theta^3 \\end{aligned} <br> as required."
    ],
    "pi_options": [
        {
            "ans": "$\\dfrac{ 1 }{ 6 } L^2 \\theta^3$",
            "feedback": "This error occurs if you forget to multiply by the factor of $\\dfrac{ 1 }{ 2 }$ from the area formulas when expanding the final expression."
        },
        {
            "ans": "$\\dfrac{ 1 }{ 12 } L \\theta^3$",
            "feedback": "This is a dimensional error. Area must have dimensions of length squared ($L^2$). This mistake arises from incorrectly using the arc length formula or writing $L$ instead of $L^2$."
        },
        {
            "ans": "$\\dfrac{ 1 }{ 24 } L^2 \\theta^3$",
            "feedback": "This arises from an arithmetic division error, such as multiplying the denominators $2$ and $6$ incorrectly to get $24$ instead of $12$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Higher-Order Approximations",
        "content": "While the first-order approximation $\\sin\\theta \\approx \\theta$ is standard, it is sometimes insufficient. If we had used $\\sin\\theta \\approx \\theta$ here, the difference between the sector and triangle area would simplify to $0$. We must use the higher-order cubic term $-\\dfrac{ \\theta^3 }{ 6 }$ to capture the tiny non-zero gap between the curved arc and the straight chord."
    }
},
{
    "id": "004696",
    "board": "WJEC",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Sequences and Series",
    "subtopic": [
        "Arithmetic Progressions"
    ],
    "img": false,
    "question": "Find five numbers which are in arithmetic progression such that the last term is $43$ and the sum of all of the numbers is $135$.",
    "steps": [
        "Let the arithmetic progression have a first term $a$, a common difference $d$, and a number of terms $n = 5$. We are given the last term $L = a + 4d = 43$ and the sum of the terms $S_5 = 135$.",
        "We use the arithmetic series sum formula $S_n = \\dfrac{ n }{ 2 } (a + L)$ to find the first term $a$: <br> \\begin{aligned} 135 &= \\dfrac{ 5 }{ 2 } (a + 43) \\cr 270 &= 5(a + 43) \\cr 54 &= a + 43 \\cr a &= 11 \\end{aligned}",
        "We substitute our first term $a = 11$ into our expression for the last term to find the common difference $d$: <br> \\begin{aligned} 11 + 4d &= 43 \\cr 4d &= 32 \\cr d &= 8 \\end{aligned}",
        "We generate the five numbers of our progression starting with $a = 11$ and repeatedly adding our common difference $d = 8$: <br> \\begin{aligned} \\text{Term 1: } &11 \\cr \\text{Term 2: } &11 + 8 = 19 \\cr \\text{Term 3: } &19 + 8 = 27 \\cr \\text{Term 4: } &27 + 8 = 35 \\cr \\text{Term 5: } &35 + 8 = 43 \\end{aligned} <br> Thus, the five numbers in arithmetic progression are $11$, $19$, $27$, $35$, $43$."
    ],
    "pi_options": [
        {
            "ans": "$11, 20, 29, 38, 47$",
            "feedback": "This error occurs if you make an algebraic slip when determining the common difference $d$, calculating $d = 9$ instead of $d = 8$."
        },
        {
            "ans": "$3, 11, 19, 27, 35$",
            "feedback": "This mistake arises if you set up the last term incorrectly as $a + 5d = 43$ instead of $a + 4d = 43$, which alters the calculations for both $a$ and $d$."
        },
        {
            "ans": "$13, 21, 29, 37, 45$",
            "feedback": "This error is caused by a sign slip when calculating the first term, concluding that $a = 13$ instead of $a = 11$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Choosing the Right Sum Formula",
        "content": "There are two standard sum formulas for an arithmetic series: $S_n = \\dfrac{ n }{ 2 } [ 2a + (n - 1)d ]$ and $S_n = \\dfrac{ n }{ 2 } (a + L)$. When you are given the last term $L$ directly, always use the second formula first. This allows you to solve for the first term $a$ immediately in one clean algebraic step, bypassing a system of simultaneous equations."
    }
},
{
    "id": "004697",
    "board": "WJEC",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Sequences and Series",
    "subtopic": [
        "Arithmetic Progressions",
        "Common Differences"
    ],
    "img": false,
    "question": "The first three terms of an arithmetic progression are given by $2k + 1$, $4k - 3$, and $5k - 2$ respectively, where $k$ is a constant. <br><br><strong>(a)</strong> Find the value of $k$. <br><br><strong>(b)</strong> Hence, find the sum of the first $20$ terms of this progression.",
    "steps": [
        "For any arithmetic progression, the difference between consecutive terms is a constant common difference $d$. Therefore: <br> \\begin{aligned} \\text{Term 2} - \\text{Term 1} &= \\text{Term 3} - \\text{Term 2} \\end{aligned}",
        "We substitute our algebraic terms into this relationship to solve for $k$: <br> \\begin{aligned} (4k - 3) - (2k + 1) &= (5k - 2) - (4k - 3) \\cr 2k - 4 &= k + 1 \\cr k &= 5 \\end{aligned}",
        "To solve part (b), we substitute $k = 5$ back into our terms to find the parameters of our progression. <br> First term $a$: <br> \\begin{aligned} a &= 2(5) + 1 \\cr &= 11 \\end{aligned} <br> Second term: <br> \\begin{aligned} 4(5) - 3 &= 17 \\end{aligned} <br> Common difference $d$: <br> \\begin{aligned} d &= 17 - 11 \\cr &= 6 \\end{aligned}",
        "We use the arithmetic series sum formula $S_n = \\dfrac{ n }{ 2 } [ 2a + (n - 1)d ]$ to find the sum of the first $20$ terms: <br> \\begin{aligned} S_{ 20 } &= \\dfrac{ 20 }{ 2 } [ 2(11) + (20 - 1)(6) ] \\cr S_{ 20 } &= 10 [ 22 + 19(6) ] \\cr &= 10 [ 22 + 114 ] \\cr &= 10 [ 136 ] \\cr &= 1360 \\end{aligned} <br> Thus, the sum of the first $20$ terms of the progression is $1360$."
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $k = 4$, <strong>(b)</strong> Sum = $1080$",
            "feedback": "This error occurs if you make an algebraic sign slip when solving the linear equation for $k$, calculating $k = 4$ instead of $k = 5$, which corrupts the subsequent sum calculation."
        },
        {
            "ans": "<strong>(a)</strong> $k = 5$, <strong>(b)</strong> Sum = $1250$",
            "feedback": "This mistake is caused by using an incorrect common difference $d = 5$ instead of $d = 6$ when calculating the sum of the first $20$ terms."
        },
        {
            "ans": "<strong>(a)</strong> $k = 5$, <strong>(b)</strong> Sum = $2720$",
            "feedback": "This arises if you forget to divide by $2$ in the outer coefficient of the sum formula, evaluating the multiplier as $20$ instead of $10$, which doubles your final answer."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Defining Common Differences Algebraically",
        "content": "Whenever you are given three terms of an arithmetic progression in terms of an unknown variable, always set up the difference equation $u_2 - u_1 = u_3 - u_2$. This is a highly reliable way to construct a single linear equation and solve for the unknown constant immediately."
    }
},
{
    "id": "004698",
    "board": "WJEC",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Sequences and Series",
    "subtopic": [
        "Arithmetic Progressions",
        "Simultaneous Equations"
    ],
    "img": false,
    "question": "An arithmetic progression has its 5th term equal to $18$ and the sum of its first $10$ terms equal to $210$. <br><br><strong>(a)</strong> Find the first term $a$ and the common difference $d$ of this progression. <br><br><strong>(b)</strong> Determine the value of $n$ for which the sum of the first $n$ terms of this progression is equal to $540$.",
    "steps": [
        "To solve part (a), we write down the equations representing our given terms. <br> Using the $n$th term formula $u_n = a + (n - 1)d$: <br> \\begin{aligned} a + 4d &= 18 \\end{aligned}",
        "Using the sum formula $S_n = \\dfrac{ n }{ 2 } [ 2a + (n - 1)d ]$: <br> \\begin{aligned} S_{ 10 } &= 210 \\cr \\dfrac{ 10 }{ 2 } [ 2a + 9d ] &= 210 \\cr 5(2a + 9d) &= 210 \\cr 2a + 9d &= 42 \\end{aligned}",
        "We solve this system of simultaneous equations. From the first equation, we isolate $a$: <br> \\begin{aligned} a &= 18 - 4d \\end{aligned} <br> Substituting this expression into our second equation: <br> \\begin{aligned} 2(18 - 4d) + 9d &= 42 \\cr 36 - 8d + 9d &= 42 \\cr d &= 6 \\end{aligned}",
        "We substitute our common difference $d = 6$ back to find the first term $a$: <br> \\begin{aligned} a + 4(6) &= 18 \\cr a + 24 &= 18 \\cr a &= -6 \\end{aligned} <br> Thus, the first term is $a = -6$ and the common difference is $d = 6$.",
        "To solve part (b), we set up our sum equation for $S_n = 540$: <br> \\begin{aligned} 540 &= \\dfrac{ n }{ 2 } [ 2(-6) + (n - 1)6 ] \\cr 1080 &= n [ -12 + 6n - 6 ] \\cr 1080 &= n [ 6n - 18 ] \\cr 180 &= n^2 - 3n \\cr n^2 - 3n - 180 &= 0 \\cr (n - 15)(n + 12) &= 0 \\end{aligned} <br> Since the number of terms $n$ must be a positive integer ($n > 0$), we reject $n = -12$. Thus, the required value of $n$ is $n = 15$."
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> $a = -6$, $d = 6$, <strong>(b)</strong> $n = 12$",
            "feedback": "This error occurs in part (b) if you incorrectly keep the negative algebraic root of the quadratic factorisation, neglecting the boundary condition that the number of terms $n$ must be strictly positive."
        },
        {
            "ans": "<strong>(a)</strong> $a = 6$, $d = 3$, <strong>(b)</strong> $n = 15$",
            "feedback": "This mistake arises from an algebraic error when solving the simultaneous equations in part (a), resulting in incorrect values of $a$ and $d$."
        },
        {
            "ans": "<strong>(a)</strong> $a = -6$, $d = 6$, <strong>(b)</strong> $n = 18$",
            "feedback": "This is caused by a quadratic coefficient division slip or a factorisation mistake when solving the quadratic equation $n^2 - 3n - 180 = 0$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Validating Quadratic Term Values",
        "content": "When solving for the number of terms $n$ in an arithmetic series, you will often obtain a quadratic equation with both a positive and a negative root. Always remember that because the term index $n$ represents a physical count of elements, it *must* be a positive integer ($n \\in \\mathbb{Z}^+$). You must explicitly reject any negative roots as mathematically extraneous."
    }
},
{
    "id": "004699",
    "board": "WJEC",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Sequences and Series",
    "subtopic": [
        "Arithmetic Progressions",
        "Modelling"
    ],
    "img": false,
    "question": "A woman starts a new job with an initial annual salary of £$24,000$. Under her contract, her annual salary increases by a fixed amount of £$1,200$ at the start of each subsequent year. <br><br><strong>(a)</strong> Find her annual salary in her 10th year of employment. <br><br><strong>(b)</strong> Calculate the total amount of money she earns from this job during her first 15 years of employment.",
    "steps": [
        "We model her salary increases as an arithmetic progression where the first term is the starting salary $a = 24000$, and the common difference is the fixed annual increase $d = 1200$.",
        "To solve part (a), we find her annual salary in her 10th year of employment ($T_{ 10 }$) using the general term formula $u_n = a + (n - 1)d$: <br> \\begin{aligned} T_{ 10 } &= a + 9d \\cr T_{ 10 } &= 24000 + 9(1200) \\cr &= 24000 + 10800 \\cr &= 34800 \\end{aligned} <br> Thus, her annual salary in her 10th year is £$34,800$.",
        "To solve part (b), we calculate her total cumulative earnings during her first 15 years ($S_{ 15 }$) using the sum formula $S_n = \\dfrac{ n }{ 2 } [ 2a + (n - 1)d ]$: <br> \\begin{aligned} S_{ 15 } &= \\dfrac{ 15 }{ 2 } [ 2(24000) + 14(1200) ] \\cr S_{ 15 } &= 7.5 [ 48000 + 16800 ] \\cr &= 7.5 [ 64800 ] \\cr &= 486000 \\end{aligned} <br> Thus, her total earnings during her first 15 years of employment is £$486,000$."
    ],
    "pi_options": [
        {
            "ans": "<strong>(a)</strong> £$36,000$, <strong>(b)</strong> £$486,000$",
            "feedback": "This error occurs in part (a) if you use $u_{10} = a + 10d$ instead of $a + 9d$. Remember that in the first year her salary is $a$ (with zero increases applied), so in the $n$th year there are only $n-1$ increases applied."
        },
        {
            "ans": "<strong>(a)</strong> £$34,800$, <strong>(b)</strong> £$450,000$",
            "feedback": "This mistake is caused by using an incorrect number of terms $n = 14$ instead of $n = 15$ when calculating her total earnings over the 15-year period."
        },
        {
            "ans": "<strong>(a)</strong> £$34,800$, <strong>(b)</strong> £$502,800$",
            "feedback": "This error arises in part (b) if you apply the formula $S_{15} = \\dfrac{15}{2}(a + T_{10})$ incorrectly, combining the first year's salary with the 10th year's salary instead of the 15th year's salary."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Starting Value Modeling",
        "content": "When modeling real-world progression problems (such as salaries, rents, or savings), always remember that the initial state is represented by the first term $a$ ($n = 1$). No increase is applied in the first interval. Therefore, the salary in the 10th year must be calculated using $u_{10} = a + 9d$, not $a + 10d$."
    }
},
{
    "id": "004700",
    "board": "WJEC",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Sequences and Series",
    "subtopic": [
        "Arithmetic Progressions",
        "Sigma Notation"
    ],
    "img": false,
    "question": "Evaluate the arithmetic series: <br> $\\sum_{ r = 5 }^{ 35 } (4r + 7)$ <br><br>showing all of your working.",
    "steps": [
        "A series represented in sigma notation $\\sum_{ r = p }^{ q } f(r)$ is arithmetic if the general term $f(r)$ is a linear expression. To evaluate the series, we first determine the parameters of our progression.",
        "We find the first term $a$ by substituting the lower boundary value $r = 5$ into the expression: <br> \\begin{aligned} a &= 4(5) + 7 \\cr &= 27 \\end{aligned}",
        "We find the last term $L$ by substituting the upper boundary value $r = 35$ into the expression: <br> \\begin{aligned} L &= 4(35) + 7 \\cr &= 147 \\end{aligned}",
        "We determine the total number of terms $n$ in our series: <br> \\begin{aligned} n &= (35 - 5) + 1 \\cr &= 31 \\end{aligned}",
        "We apply the arithmetic series sum formula $S_n = \\dfrac{ n }{ 2 } (a + L)$ to find the total sum: <br> \\begin{aligned} S_{ 31 } &= \\dfrac{ 31 }{ 2 } (27 + 147) \\cr S_{ 31 } &= \\dfrac{ 31 }{ 2 } (174) \\cr &= 31 \\times 87 \\cr &= 2697 \\end{aligned} <br> Thus, the value of the arithmetic series is $2697$."
    ],
    "pi_options": [
        {
            "ans": "$2610$",
            "feedback": "This error occurs if you calculate the number of terms incorrectly as $n = 35 - 5 = 30$, failing to add the inclusive constant $+1$ when evaluating the boundaries of the sigma notation."
        },
        {
            "ans": "$2784$",
            "feedback": "This mistake is caused by using $n = 32$ terms, perhaps from a boundary counting error or arithmetic slip."
        },
        {
            "ans": "$5394$",
            "feedback": "This error arises if you forget to divide by $2$ when evaluating the arithmetic series sum formula, resulting in a sum that is exactly double the correct value."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Inclusive Sigma Boundaries",
        "content": "When evaluating series defined in sigma notation $\\sum_{r = a}^{b} f(r)$, always remember that the number of terms $n$ is calculated using the inclusive formula $n = (b - a) + 1$. Simply subtracting the boundaries ($b - a$) is a very common student mistake that will omit the first term of the series, leading to an incorrect sum."
    }
}

];
