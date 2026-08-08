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
                                "ans": "$\\mathbf{a} = \\begin{pmatrix} 1.5$ 1.5 0 \\end{pmatrix}",
                                "feedback": "This option results from a sign error when finding the coordinate $b$. Since $a - b + 1 = 0 \\implies b = a + 1$, substituting $a = 1.5$ must yield $b = 1.5 + 1 = 2.5$, rather than $b = 1.5$."
                        },
                        {
                                "ans": "$\\mathbf{a} = \\begin{pmatrix} 2.5$ 3.5 0 \\end{pmatrix}",
                                "feedback": "This option arises if the midpoint of the base $BC$ is incorrectly calculated as $D(3, 3, 1)$ instead of $D(2, 2, 1)$. Setting up the height vector with this incorrect midpoint yields the squared height $2a^2 - 10a + 14$, which is minimised at $a = 2.5$ and $b = 3.5$."
                        },
                        {
                                "ans": "$\\mathbf{a} = \\begin{pmatrix} 3$ 4 0 \\end{pmatrix}",
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
                                "ans": "$\\mathbf{a} = \\begin{pmatrix} 1$ 1 0 \\end{pmatrix}",
                                "feedback": "This option is incorrect. Although the coordinates satisfy the relation $a=b$, they do not minimise the height of the triangle. Evaluating the squared height at $a=1$ gives $2(2)^2 + 1 = 9$, which is larger than the minimum squared height of $1$ achieved at $a=3$."
                        },
                        {
                                "ans": "$\\mathbf{a} = \\begin{pmatrix} 3$ $-3$ 0 \\end{pmatrix}",
                                "feedback": "This option contains a sign error on the $b$-coordinate, violating the condition $a - b = 0 \\implies b = a$. The two coordinates must be identical."
                        },
                        {
                                "ans": "$\\mathbf{a} = \\begin{pmatrix} 5$ 5 0 \\end{pmatrix}",
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
                                "ans": "$\\mathbf{r} = \\begin{pmatrix} 1$ 2 $3 \\end{pmatrix} + \\lambda \\begin{pmatrix} 1$ 2 $-2 \\end{pmatrix}, \\quad \\text{Closest point } (2, 4, 1)$",
                                "feedback": "This option is incorrect because $(2, 4, 1)$ is simply point $C$. While $C$ is on the line (at $\\lambda = 1$), the closest point to $A$ occurs at $\\lambda = 2$, which gives the coordinates $(3, 6, -1)$."
                        },
                        {
                                "ans": "$\\mathbf{r} = \\begin{pmatrix} 1$ 2 $3 \\end{pmatrix} + \\lambda \\begin{pmatrix} 1$ 2 $-2 \\end{pmatrix}, \\quad \\text{Closest point } (3, 6, 1)$",
                                "feedback": "This option has a sign error in the $z$-coordinate. Substituting $\\lambda = 2$ into the $z$-component $3 - 2\\lambda$ yields $3 - 4 = -1$, not $+1$."
                        },
                        {
                                "ans": "$\\mathbf{r} = \\begin{pmatrix} 1$ 2 $3 \\end{pmatrix} + \\lambda \\begin{pmatrix} 3$ 6 $-2 \\end{pmatrix}, \\quad \\text{Closest point } (3, 6, -1)$",
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
        }
];
