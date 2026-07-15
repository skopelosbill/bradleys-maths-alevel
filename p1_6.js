window.ALEVEL_QUESTIONS = [
    {
        "id": "004251",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Algebra",
        "topic": "Inequalities",
        "subtopic": [
            "Modulus Inequalities",
            "Linear Inequalities"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Solve the inequality:<br>$$|3x - 1| \\le 8$$",
        "steps": [
            "Rewrite the absolute value inequality as a continuous double inequality to remove the modulus:<br>\\begin{aligned} |3x - 1| \\le 8 \\implies -8 \\le 3x - 1 \\le 8 \\end{aligned}",
            "Solve the left-hand inequality to find the lower bound for $x$:<br>\\begin{aligned} -8 &\\le 3x - 1 \\ -7 &\\le 3x \\ x &\\ge -\\dfrac{7}{3} \\end{aligned}",
            "Solve the right-hand inequality to find the upper bound for $x$:<br>\\begin{aligned} 3x - 1 &\\le 8 \\ 3x &\\le 9 \\ x &\\le 3 \\end{aligned}",
            "Combine the lower and upper bounds to write the final interval for $x$:<br>$$-\\dfrac{7}{3} \\le x \\le 3$$<br><br>Final Answer: $$-\\dfrac{7}{3} \\le x \\le 3$$"
        ],
        "pi_options": [
            {
                "ans": "$$x \\le -\\dfrac{7}{3} \\quad \\text{or} \\quad x \\ge 3$$",
                "feedback": "An inequality of the form $|f(x)| \\le k$ describes a single, compact inner region between two boundaries. Your answer represents outer-bound regions, which correspond to $|3x - 1| \\ge 8$."
            },
            {
                "ans": "$$-\\dfrac{7}{3} \\le x \\le \\dfrac{7}{3}$$",
                "feedback": "Check your calculations for the upper bound. When solving $3x - 1 \\le 8$, adding $1$ to both sides gives $3x \\le 9 \\implies x \\le 3$, not $x \\le \\dfrac{7}{3}$."
            },
            {
                "ans": "$$-3 \\le x \\le 3$$",
                "feedback": "Check your lower bound calculation. When solving $-8 \\le 3x - 1$, adding $1$ to both sides gives $-7 \\le 3x \\implies x \\ge -\\dfrac{7}{3}$, not $x \\ge -3$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Modulus Inner Bounds",
            "content": "When solving modulus inequalities of the form $|f(x)| \\le k$ (where $k > 0$), always write the inequality as a single continuous double inequality $-k \\le f(x) \\le k$. This allows you to solve both boundaries simultaneously by performing the same operations to all three parts of the inequality."
        }
    },
    {
        "id": "004252",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Algebra",
        "topic": "Inequalities",
        "subtopic": [
            "Modulus Inequalities",
            "Linear Inequalities"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Solve the inequality:<br>$$|2x + 3| > 7$$",
        "steps": [
            "An inequality of the form $|A| > k$ (where $k > 0$) splits into two separate, disjoint linear cases:<br>\\begin{aligned} 2x + 3 &> 7 \\quad \\text{or} \\quad 2x + 3 < -7 \\end{aligned}",
            "Solve the first case, which represents the positive outer region:<br>\\begin{aligned} 2x + 3 &> 7 \\ 2x &> 4 \\ x &> 2 \\end{aligned}",
            "Solve the second case, which represents the negative outer region:<br>\\begin{aligned} 2x + 3 &< -7 \\ 2x &< -10 \\ x &< -5 \\end{aligned}",
            "Combine the two disjoint intervals with 'or' to write the final solution:<br>$$x < -5 \\quad \\text{or} \\quad x > 2$$<br><br>Final Answer: $$x < -5 \\quad \\text{or} \\quad x > 2$$"
        ],
        "pi_options": [
            {
                "ans": "$$-5 < x < 2$$",
                "feedback": "An inequality of the form $|f(x)| > k$ describes two separate, outer regions. Your answer represents a compact inner interval, which corresponds to $|2x + 3| < 7$."
            },
            {
                "ans": "$$x < -2 \\quad \\text{or} \\quad x > 2$$",
                "feedback": "Check your calculations for the negative case. When solving $2x + 3 < -7$, subtracting $3$ from both sides gives $2x < -10 \\implies x < -5$, not $x < -2$."
            },
            {
                "ans": "$$x < -5 \\quad \\text{or} \\quad x > 5$$",
                "feedback": "Check your calculations for the positive case. When solving $2x + 3 > 7$, subtracting $3$ from both sides gives $2x > 4 \\implies x > 2$, not $x > 5$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Modulus Outer Bounds",
            "content": "Unlike compact inner-bound inequalities, modulus inequalities of the form $|f(x)| > k$ (where $k > 0$) describe two separate, disjoint outer regions: $f(x) < -k$ or $f(x) > k$. Always solve these as two separate linear cases and join the final solutions with the word 'or'."
        }
    },
    {
        "id": "004253",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Algebra",
        "topic": "Inequalities",
        "subtopic": [
            "Modulus Inequalities",
            "Quadratic Inequalities"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Solve the inequality:<br>$$|x - 2| \\le |2x + 1|$$",
        "steps": [
            "Since both sides of the inequality are guaranteed to be non-negative, squaring both sides is a valid and robust method to remove the modulus signs:<br>$$\\left(x - 2\\right)^2 \\le \\left(2x + 1\\right)^2$$",
            "Expand both sides of the quadratic inequality:<br>\\begin{aligned} x^2 - 4x + 4 &\\le 4x^2 + 4x + 1 \\end{aligned}",
            "Rearrange the inequality to bring all terms to the right-hand side, keeping the coefficient of $x^2$ positive:<br>\\begin{aligned} 0 &\\le \\left(4x^2 + 4x + 1\\right) - \\left(x^2 - 4x + 4\\right) \\ 0 &\\le 3x^2 + 8x - 3 \\ 3x^2 + 8x - 3 &\\ge 0 \\end{aligned}",
            "Find the critical values of the quadratic equation by solving $3x^2 + 8x - 3 = 0$ using the quadratic formula:<br>\\begin{aligned} x &= \\dfrac{-8 \\pm \\sqrt{8^2 - 4(3)(-3)}}{2(3)} \\ &= \\dfrac{-8 \\pm \\sqrt{64 + 36}}{6} \\ &= \\dfrac{-8 \\pm 10}{6} \\end{aligned}<br>This gives the critical points:<br>$$x = \\dfrac{1}{3} \\quad \\text{and} \\quad x = -3$$",
            "Since the quadratic $3x^2 + 8x - 3$ has a positive leading coefficient, the inequality $3x^2 + 8x - 3 \\ge 0$ is satisfied in the outer regions of these critical points:<br>$$x \\le -3 \\quad \\text{or} \\quad x \\ge \\dfrac{1}{3}$$<br><br>Final Answer: $$x \\le -3 \\quad \\text{or} \\quad x \\ge \\dfrac{1}{3}$$"
        ],
        "pi_options": [
            {
                "ans": "$$-3 \\le x \\le \\dfrac{1}{3}$$",
                "feedback": "You identified the correct critical points, but chose the inner interval. Since we require the quadratic expression to be greater than or equal to zero ($3x^2 + 8x - 3 \\ge 0$), the solution lies in the outer regions: $x \\le -3 \\quad \\text{or} \\quad x \\ge \\dfrac{1}{3}$."
            },
            {
                "ans": "$$x \\le -\\dfrac{1}{3} \\quad \\text{or} \\quad x \\ge 3$$",
                "feedback": "Check your calculations when solving the quadratic equation. The critical values are $x = \\dfrac{1}{3}$ and $x = -3$, not $x = -\\dfrac{1}{3}$ and $x = 3$. Watch your signs during the quadratic formula evaluation."
            },
            {
                "ans": "$$x \\le -3 \\quad \\text{or} \\quad x \\ge 3$$",
                "feedback": "Check your evaluation of $x_1 = \\dfrac{-8 + 10}{6}$. This simplifies to $\\dfrac{2}{6} = \\dfrac{1}{3}$, not $3$. Make sure to divide by $2a = 6$ at the end."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Squaring Both Sides",
            "content": "When an inequality has absolute values on both sides, like $|f(x)| \\le |g(x)|$, squaring both sides is the most robust algebraic method. Because both sides are guaranteed to be non-negative, squaring preserves the inequality sign and converts the modulus equation into a standard quadratic inequality."
        }
    },
    {
        "id": "004254",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Algebra",
        "topic": "Inequalities",
        "subtopic": [
            "Rational Inequalities",
            "Interval Analysis"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Solve the inequality:<br>$$\\dfrac{6}{x - 2} \\le 3$$",
        "steps": [
            "First, identify that $x = 2$ is an asymptote where the expression is undefined, so $x \\ne 2$. Bring all terms to the left-hand side:<br>$$\\dfrac{6}{x - 2} - 3 \\le 0$$",
            "Combine the terms over a common denominator to form a single fraction:<br>\\begin{aligned} \\dfrac{6 - 3(x - 2)}{x - 2} &\\le 0 \\ \\dfrac{6 - 3x + 6}{x - 2} &\\le 0 \\ \\dfrac{12 - 3x}{x - 2} &\\le 0 \\end{aligned}",
            "Factorise out the negative multiplier in the numerator to simplify the signs:<br>$$\\dfrac{-3(x - 4)}{x - 2} \\le 0$$",
            "Divide both sides by the negative constant $-3$, remembering that multiplying or dividing by a negative number reverses the direction of the inequality:<br>$$\\dfrac{x - 4}{x - 2} \\ge 0$$",
            "Identify the critical values of this inequality:<br>• $x = 4$ (where the numerator is zero, which is included because of $\\ge$).<br>• $x = 2$ (where the denominator is zero, which is strictly excluded as it is undefined).",
            "Analyse the signs of the fraction over the three regions created by these critical values:<br>• For $x < 2$: both $(x-4)$ and $(x-2)$ are negative, so their quotient is positive (satisfies $\\ge 0$).<br>• For $2 < x < 4$: $(x-4)$ is negative and $(x-2)$ is positive, so their quotient is negative (does not satisfy).<br>• For $x \\ge 4$: both terms are non-negative, so their quotient is positive (satisfies).<br><br>This gives the final solution set:<br>$$x < 2 \\quad \\text{or} \\quad x \\ge 4$$<br><br>Final Answer: $$x < 2 \\quad \\text{or} \\quad x \\ge 4$$"
        ],
        "pi_options": [
            {
                "ans": "$$2 < x \\le 4$$",
                "feedback": "You may have forgotten to reverse the inequality sign when dividing by $-3$. Dividing by a negative number changes the direction from $\\le 0$ to $\\ge 0$. This shifts the solution to the outer regions ($x < 2 \\quad \\text{or} \\quad x \\ge 4$) rather than the inner interval."
            },
            {
                "ans": "$$x \\le 2 \\quad \\text{or} \\quad x \\ge 4$$",
                "feedback": "Be very careful with your interval boundaries. The value $x = 2$ makes the denominator of the original fraction zero, which is undefined. Therefore, the boundary at $x = 2$ must be strictly exclusive ($x < 2$)."
            },
            {
                "ans": "$$x \\le 4$$",
                "feedback": "Multiplying directly by $(x - 2)$ is an incorrect method because its sign is variable. If $x < 2$, the term is negative and the inequality sign must reverse. Using the quotient sign method or multiplying by $(x-2)^2$ avoids this trap."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Multiplying by the Squared Denominator",
            "content": "When solving rational inequalities like $\\dfrac{a}{x-b} \\le c$, never multiply directly by $(x-b)$, as its sign is variable. Instead, either bring all terms to one side over a common denominator or multiply both sides by the squared denominator $(x-b)^2$. This preserves the inequality sign because the square of any real, non-zero number is guaranteed to be positive."
        }
    },
    {
        "id": "004255",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Algebra",
        "topic": "Inequalities",
        "subtopic": [
            "Modulus Inequalities",
            "Quadratic Inequalities"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Solve the inequality:<br>$$\\left|x^2 - 5\\right| < 4$$",
        "steps": [
            "Rewrite the absolute value inequality as a continuous double inequality to remove the modulus:<br>\\begin{aligned} -4 < x^2 - 5 < 4 \\end{aligned}",
            "Solve the left-hand inequality to establish the first condition:<br>\\begin{aligned} -4 &< x^2 - 5 \\ 1 &< x^2 \\ x^2 &> 1 \\implies x < -1 \\quad \\text{or} \\quad x > 1 \\end{aligned}",
            "Solve the right-hand inequality to establish the second condition:<br>\\begin{aligned} x^2 - 5 &< 4 \\ x^2 &< 9 \\implies -3 < x < 3 \\end{aligned}",
            "Intersect the two sets of intervals to find the values of $x$ that satisfy both conditions simultaneously:<br>• For the negative branch ($x < -1$) intersected with $-3 < x < 3$:<br>$$-3 < x < -1$$<br>• For the positive branch ($x > 1$) intersected with $-3 < x < 3$:<br>$$1 < x < 3$$<br><br>Combine these two disjoint intervals to write the final solution:<br>$$-3 < x < -1 \\quad \\text{or} \\quad 1 < x < 3$$<br><br>Final Answer: $$-3 < x < -1 \\quad \\text{or} \\quad 1 < x < 3$$"
        ],
        "pi_options": [
            {
                "ans": "$$x < -3 \\quad \\text{or} \\quad x > 3$$",
                "feedback": "You may have solved for the outer bounds of the right-hand inequality instead of the inner bounds. Since $x^2 < 9$, the solution is the bounded interval $-3 < x < 3$, not the outer regions."
            },
            {
                "ans": "$$-1 < x < 1 \\quad \\text{or} \\quad -3 < x < 3$$",
                "feedback": "Check your solution of $x^2 > 1$. The values that satisfy this are $x < -1$ or $x > 1$ (outside of $-1$ and $1$). It seems you may have mistakenly written the inner interval."
            },
            {
                "ans": "$$1 < x < 3$$",
                "feedback": "This is only the positive branch of the final intersection. You must also include the symmetrical negative branch, $-3 < x < -1$, because squaring a negative number also yields positive results."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Modulus with Quadratic Terms",
            "content": "Solving quadratic modulus inequalities of the form $|x^2 - a| < b$ requires intersecting two distinct solution sets. Solve $x^2 > a - b$ and $x^2 < a + b$ independently, then intersect the resulting intervals on a number line to find the final valid regions."
        }
    },
    {
        "id": "004256",
        "board": "OCR MEI",
        "level": "AS",
        "major_area": "Algebra",
        "topic": "Functions",
        "subtopic": [
            "Exponential Graphs",
            "Logarithmic Graphs",
            "Inverse Functions"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>1. (a) Sketch the graph of $y = 5^x$.<br>&nbsp;&nbsp;&nbsp;&nbsp;(b) Give the coordinates of any intercepts with the coordinate axes.<br>2. The curve $y = f(x)$ is the reflection of the curve $y = 5^x$ in the line $y = x$. Find an expression for $f(x)$.",
        "steps": [
            "Sketch the exponential growth curve $y = 5^x$, noting that it rises rapidly in the first quadrant and approaches the negative $x$-axis as a horizontal asymptote. The reflection of this curve in the diagonal line $y = x$ represents the logarithmic inverse function $y = f(x)$:<br><br><img src='images/p1/004256_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
            "Determine the intercepts of the curve $y = 5^x$ with both coordinate axes:<br>• For the $y$-intercept, substitute $x = 0$ into the equation:<br>$$y = 5^0 = 1 \\implies (0, 1)$$<br>• For the $x$-intercept, solve $5^x = 0$. Since $5^x > 0$ for all real $x$, there is no real solution. Thus, the curve does not intersect the $x$-axis.",
            "Reflecting a function in the line $y = x$ swaps the roles of $x$ and $y$, which is equivalent to finding its inverse function. Swapping $x$ and $y$ and rearranging to isolate $y$ gives:<br>\\begin{aligned} x &= 5^y \\ y &= \\log_5 x \\end{aligned}<br>So, the equation of the reflected curve is $f(x) = \\log_5 x$.<br><br>Final Answer: $$(0,1), \\quad f(x) = \\log_5 x$$"
        ],
        "pi_options": [
            {
                "ans": "$$(1,0), \\quad f(x) = \\log_5 x$$",
                "feedback": "Be careful with which curve's intercepts you are reporting. The point $(1,0)$ is the $x$-intercept of the reflected logarithmic curve $y = f(x)$, but the question asks for the intercepts of the original exponential curve $y = 5^x$, which is $(0,1)$."
            },
            {
                "ans": "$$(0,1), \\quad f(x) = 5^x$$",
                "feedback": "The reflected curve in $y = x$ must represent the inverse function of $y = 5^x$. Simply repeating the original equation is incorrect; you must solve for $y$ after swapping the variables to get the logarithm."
            },
            {
                "ans": "$$(0,1), \\quad f(x) = \\log_x 5$$",
                "feedback": "Recall the definition of logarithms: $x = 5^y$ is equivalent to $y = \\log_5 x$. The base of the exponent ($5$) becomes the base of the logarithm, so the inverse function is $\\log_5 x$, not $\\log_x 5$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Reflections and Inverse Functions",
            "content": "Reflecting any curve $y = g(x)$ in the diagonal line of reflection $y = x$ geometrically swaps the domain and range of the function. This is equivalent to finding the inverse function $g^{-1}(x)$, which can be solved algebraically by swapping $x$ and $y$ and isolating $y$."
        }
    },
    {
        "id": "004257",
        "board": "OCR MEI",
        "level": "AS",
        "major_area": "Algebra",
        "topic": "Functions",
        "subtopic": [
            "Exponential Graphs",
            "Translations of Graphs",
            "Asymptotes"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A curve has the equation:<br>$$y = 2^x - 4$$<br>1. Sketch the graph of $y = 2^x - 4$.<br>2. State the coordinates of any intercepts with the coordinate axes, and write down the equation of its horizontal asymptote.",
        "steps": [
            "Sketch the exponential growth curve $y = 2^x - 4$. This is a vertical translation of $y = 2^x$ shifted downwards by $4$ units:<br><br><img src='images/p1/004257_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
            "Find the $y$-intercept of the curve by substituting $x = 0$:<br>$$y = 2^0 - 4 = 1 - 4 = -3 \\implies (0, -3)$$<br>Find the $x$-intercept of the curve by setting $y = 0$ and solving for $x$:<br>$$\\begin{aligned} 2^x - 4 &= 0 \\ 2^x &= 4 \\ 2^x &= 2^2 \\implies x = 2 \\end{aligned}$$<br>This gives the $x$-intercept coordinates of $(2, 0)$.",
            "Determine the horizontal asymptote of the translated exponential curve. As $x \\to -\\infty$, the exponential term $2^x \\to 0$, which means:<br>$$y \\to 0 - 4 \\implies y = -4$$<br>Therefore, the horizontal asymptote is the line $y = -4$.<br><br>Final Answer: $$(0,-3), \\quad (2,0), \\quad y = -4$$"
        ],
        "pi_options": [
            {
                "ans": "$$(0,-4), \\quad (2,0), \\quad y = -4$$",
                "feedback": "Be careful when calculating the $y$-intercept. Substituting $x = 0$ yields $y = 2^0 - 4$. Since $2^0 = 1$, the result is $1 - 4 = -3$, not $-4$."
            },
            {
                "ans": "$$(0,-3), \\quad (4,0), \\quad y = -4$$",
                "feedback": "Check your calculations for the $x$-intercept. Setting $2^x - 4 = 0$ gives $2^x = 4$, which simplifies to $x = 2$ (since $2^2 = 4$), not $x = 4$."
            },
            {
                "ans": "$$(0,-3), \\quad (2,0), \\quad y = 0$$",
                "feedback": "Remember that a vertical translation shifts the asymptote along with the curve. While the standard asymptote for $y = 2^x$ is $y = 0$, translating the curve down by $4$ units shifts the asymptote to $y = -4$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Tracking Asymptotes in Translations",
            "content": "A vertical translation of the form $y = a^x + c$ shifts the horizontal asymptote along with the curve. Since the asymptote of $y = 2^x$ is $y = 0$, translating the curve down by $4$ units shifts the asymptote directly to $y = -4$."
        }
    },
    {
        "id": "004258",
        "board": "OCR MEI",
        "level": "AS",
        "major_area": "Algebra",
        "topic": "Functions",
        "subtopic": [
            "Logarithmic Graphs",
            "Translations of Graphs",
            "Asymptotes"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A curve has the equation:<br>$$y = \\ln(x + 3), \\quad \\text{for } x > -3$$<br>1. Sketch the graph of $y = \\ln(x + 3)$.<br>2. Give the exact coordinates of any intercepts with the coordinate axes, and write down the equation of its vertical asymptote.",
        "steps": [
            "Sketch the logarithmic growth curve $y = \\ln(x + 3)$. This is a horizontal translation of $y = \\ln x$ shifted to the left by $3$ units:<br><br><img src='images/p1/004258_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
            "Find the $y$-intercept of the curve by substituting $x = 0$:<br>$$y = \\ln(0 + 3) = \\ln 3 \\implies (0, \\ln 3)$$<br>Find the $x$-intercept of the curve by setting $y = 0$ and solving for $x$:<br>$$\\begin{aligned} \\ln(x + 3) &= 0 \\ x + 3 &= e^{0} \\ x + 3 &= 1 \\implies x = -2 \\end{aligned}$$<br>This gives the exact $x$-intercept coordinates of $(-2, 0)$.",
            "Determine the vertical asymptote of the translated logarithmic curve. The argument of the logarithm must be strictly positive, meaning $x + 3 > 0$. The vertical asymptote occurs exactly at the boundary where the argument is zero:<br>$$x + 3 = 0 \\implies x = -3$$<br>Therefore, the vertical asymptote is the line $x = -3$.<br><br>Final Answer: $$(0,\\ln 3), \\quad (-2,0), \\quad x = -3$$"
        ],
        "pi_options": [
            {
                "ans": "$$(0,\\ln 3), \\quad (1,0), \\quad x = -3$$",
                "feedback": "Check your calculations for the $x$-intercept. Setting $\\ln(x + 3) = 0$ yields $x + 3 = 1 \\implies x = -2$. The point $(1,0)$ is the standard intercept for an untranslated curve $y = \\ln x$."
            },
            {
                "ans": "$$(0,\\ln 3), \\quad (-2,0), \\quad y = -3$$",
                "feedback": "Note that logarithmic curves have vertical asymptotes, not horizontal ones. The asymptote is the vertical line $x = -3$, not the horizontal line $y = -3$."
            },
            {
                "ans": "$$(0,3), \\quad (-2,0), \\quad x = -3$$",
                "feedback": "Keep your answer in exact form. The $y$-intercept occurs at $y = \\ln 3$. You cannot simplify this to $3$ or approximate it as a decimal unless explicitly asked."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Logarithmic Domain Boundaries",
            "content": "The argument of any logarithmic function must be strictly positive. For $y = \\ln(x + 3)$, the domain is $x > -3$. The vertical asymptote occurs exactly where the argument is zero, $x + 3 = 0 \\implies x = -3$, which bounds the graph on the left."
        }
    },
    {
        "id": "004259",
        "board": "OCR MEI",
        "level": "AS",
        "major_area": "Algebra",
        "topic": "Functions",
        "subtopic": [
            "Logarithmic Graphs",
            "Reflections of Graphs",
            "Asymptotes"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>1. (a) Sketch the graph of $y = \\ln x$ for $x > 0$.<br>&nbsp;&nbsp;&nbsp;&nbsp;(b) Give the coordinates of any intercepts with the coordinate axes.<br>2. The curve $y = g(x)$ is the reflection of the curve $y = \\ln x$ in the $x$-axis. Find an expression for $g(x)$.",
        "steps": [
            "Sketch the standard logarithmic curve $y = \\ln x$. Its reflection in the $x$-axis is represented by the curve $y = g(x)$:<br><br><img src='images/p1/004259_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
            "Determine the intercepts of the curve $y = \\ln x$ with both coordinate axes:<br>• For the $y$-intercept, we test $x = 0$. Since the domain is strictly $x > 0$, the function is undefined at $x = 0$. Thus, there is no $y$-intercept.<br>• For the $x$-intercept, set $y = 0$ and solve for $x$:<br>$$\\ln x = 0 \\implies x = e^{0} = 1 \\implies (1, 0)$$<br>So, the curve has a single intercept at $(1, 0)$.",
            "Reflecting a function in the $x$-axis negates all of its $y$-values ($y \\mapsto -y$). Applying this to $y = \\ln x$ gives:<br>\\begin{aligned} -y &= \\ln x \\ y &= -\\ln x \\end{aligned}<br>Therefore, the expression for the reflected curve is $g(x) = -\\ln x$.<br><br>Final Answer: $$(1,0), \\quad g(x) = -\\ln x$$"
        ],
        "pi_options": [
            {
                "ans": "$$(0,1), \\quad g(x) = -\\ln x$$",
                "feedback": "Be careful with coordinate order. The curve $y = \\ln x$ intersects the $x$-axis at $(1,0)$, not the $y$-axis at $(0,1)$."
            },
            {
                "ans": "$$(1,0), \\quad g(x) = \\ln(-x)$$",
                "feedback": "Reflecting a curve in the $x$-axis negates the $y$-values ($y \\mapsto -y$), which yields $g(x) = -\\ln x$. The function $g(x) = \\ln(-x)$ represents a reflection in the $y$-axis, not the $x$-axis."
            },
            {
                "ans": "$$(1,0), \\quad g(x) = \\ln x^{-1}$$",
                "feedback": "While $g(x) = \\ln\\left(\\dfrac{1}{x}\\right)$ is algebraically equivalent to $-\\ln x$ using logarithmic properties, the standard direct notation for a vertical reflection is $-f(x) = -\\ln x$. Make sure to express it directly."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Vertical and Horizontal Reflections",
            "content": "Be careful to distinguish between different coordinate reflections. A reflection in the $x$-axis negates the $y$-values ($y \\mapsto -y$), yielding $y = -\\ln x$. In contrast, a reflection in the $y$-axis negates the $x$-values ($x \\mapsto -x$), yielding $y = \\ln(-x)$."
        }
    },
    {
        "id": "004260",
        "board": "OCR MEI",
        "level": "AS",
        "major_area": "Algebra",
        "topic": "Functions",
        "subtopic": [
            "Exponential Graphs",
            "Translations of Graphs",
            "Asymptotes"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The curve $C$ has equation:<br>$$y = 2 - e^{-x}$$<br>1. Sketch the graph of the curve $C$.<br>2. Write down the coordinates of any intercepts with the axes, and find the equation of the horizontal asymptote to the curve.",
        "steps": [
            "Sketch the exponential decay and translation curve $y = 2 - e^{-x}$. The negative exponent $-x$ represents decay, and the negative sign in front of the exponential term reflects the graph vertically:<br><br><img src='images/p1/004260_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
            "Find the $y$-intercept of the curve by substituting $x = 0$:<br>$$y = 2 - e^{0} = 2 - 1 = 1 \\implies (0, 1)$$<br>Find the $x$-intercept of the curve by setting $y = 0$ and solving for $x$:<br>$$\\begin{aligned} 2 - e^{-x} &= 0 \\ e^{-x} &= 2 \\ -x &= \\ln 2 \\implies x = -\\ln 2 \\end{aligned}$$<br>This gives the exact $x$-intercept coordinates of $(-\\ln 2, 0)$.",
            "Determine the horizontal asymptote of the curve. As $x \\to \\infty$, the decay term $e^{-x} \\to 0$, which means:<br>$$y \\to 2 - 0 \\implies y = 2$$<br>Therefore, the horizontal asymptote is the line $y = 2$.<br><br>Final Answer: $$(0,1), \\quad (-\\ln 2,0), \\quad y = 2$$"
        ],
        "pi_options": [
            {
                "ans": "$$(0,1), \\quad (\\ln 2,0), \\quad y = 2$$",
                "feedback": "Check your signs when solving for the $x$-intercept. The equation $-x = \\ln 2$ yields $x = -\\ln 2$, which is negative, placing the intercept on the negative $x$-axis. It is not positive $\\ln 2$."
            },
            {
                "ans": "$$(0,2), \\quad (-\\ln 2,0), \\quad y = 2$$",
                "feedback": "Check your evaluation of $e^0$. Remember that $e^0 = 1$, not $0$. Therefore, the $y$-intercept is $y = 2 - 1 = 1$, not $2$."
            },
            {
                "ans": "$$(0,1), \\quad (-\\ln 2,0), \\quad y = -2$$",
                "feedback": "Check the behavior of the decay term as $x \\to \\infty$. Since $e^{-x} \\to 0$, the function approaches $2 - 0 = 2$, not $-2$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Negative Exponents and Decay",
            "content": "The exponential function $y = e^{-x}$ represents exponential decay, which tends to $0$ as $x \\to \\infty$. Therefore, as $x \\to \\infty$, the curve $y = 2 - e^{-x}$ approaches its horizontal asymptote of $y = 2$. When solving for the $x$-intercept, ensure you handle the negative sign in $-x = \\ln 2 \\implies x = -\\ln 2$ correctly."
        }
    },
    {
        "id": "004261",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Trigonometry",
        "topic": "Trigonometric Equations",
        "subtopic": [
            "Double Angle Formula",
            "Factoring Trigonometric Functions",
            "Degree Measures"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Solve the equation:<br>$$2\\sin 2x = \\cos x$$<br>for $0^\\circ \\le x \\le 180^\\circ$, giving your answers correct to $1$ decimal place where appropriate.",
        "steps": [
            "Use the double-angle sine identity $\\sin 2x = 2\\sin x \\cos x$ to expand the left-hand side of the equation:<br>$$2\\left(2\\sin x \\cos x\\right) = \\cos x \\implies 4\\sin x \\cos x = \\cos x$$",
            "Bring all terms to one side of the equation. Do not divide both sides by $\\cos x$, as doing so assumes $\\cos x \\ne 0$ and leads to the loss of valid roots:<br>$$4\\sin x \\cos x - \\cos x = 0$$",
            "Factorise out the common term $\\cos x$ to set up two solvable branches:<br>$$\\cos x\\left(4\\sin x - 1\\right) = 0 \\implies \\cos x = 0 \\quad \\text{or} \\quad \\sin x = \\dfrac{1}{4}$$",
            "Solve the first branch, $\\cos x = 0$, in the domain $0^\\circ \\le x \\le 180^\\circ$:<br>$$x = 90.0^\\circ$$",
            "Solve the second branch, $\\sin x = \\dfrac{1}{4} = 0.25$, in the domain $0^\\circ \\le x \\le 180^\\circ$:<br>\\begin{aligned} x &= \\sin^{-1}(0.25) \\ x &\\approx 14.5^\\circ \\end{aligned}<br>Find the second quadrant solution within the interval:<br>$$x = 180^\\circ - 14.5^\\circ = 165.5^\\circ$$<br>Combining all solutions yields the final set of answers.<br><br>Final Answer: $$x = 14.5^\\circ, \\, 90.0^\\circ, \\, 165.5^\\circ$$"
        ],
        "pi_options": [
            {
                "ans": "$$x = 14.5^\\circ, \\, 165.5^\\circ$$",
                "feedback": "You may have made the classic mistake of dividing both sides by $\\cos x$ in the first step. Dividing by a variable term that can equal zero loses the valid solutions where $\\cos x = 0 \\implies x = 90.0^\\circ$. Always bring terms to one side and factorise."
            },
            {
                "ans": "$$x = 14.5^\\circ, \\, 90.0^\\circ, \\, 194.5^\\circ$$",
                "feedback": "Check your second quadrant calculation for $\\sin x = 0.25$. Sine is positive in the first and second quadrants. The second quadrant solution is $180^\circ - 14.5^\circ = 165.5^\circ$, not $180^\circ + 14.5^\circ = 194.5^\circ$."
            },
            {
                "ans": "$$x = 90.0^\\circ$$",
                "feedback": "You found the solution for the $\\cos x = 0$ branch, but you must also solve for $4\\sin x - 1 = 0 \\implies \\sin x = 0.25$ to find the complete set of three solutions."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Factoring over Dividing",
            "content": "A very common student error is dividing both sides of $4\\sin x \\cos x = \\cos x$ by $\\cos x$. Dividing by a variable term that can equal zero results in losing the valid solutions where $\\cos x = 0 \\implies x = 90^\\circ$. Always bring all terms to one side of the equation and factorise."
        }
    },
    {
        "id": "004262",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Trigonometry",
        "topic": "Trigonometric Equations",
        "subtopic": [
            "Double Angle Formula",
            "Factoring Trigonometric Functions",
            "Degree Measures"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Solve the equation:<br>$$3\\sin 2x = 2\\sin x$$<br>for $0^\\circ \\le x \\le 180^\\circ$, giving your answers correct to $1$ decimal place where appropriate.",
        "steps": [
            "Use the double-angle sine identity $\\sin 2x = 2\\sin x \\cos x$ to expand the left-hand side:<br>$$3\\left(2\\sin x \\cos x\\right) = 2\\sin x \\implies 6\\sin x \\cos x = 2\\sin x$$",
            "Bring all terms to one side of the equation:<br>$$6\\sin x \\cos x - 2\\sin x = 0$$",
            "Factorise out the common term $2\\sin x$ to set up two solvable branches:<br>$$2\\sin x\\left(3\\cos x - 1\\right) = 0 \\implies \\sin x = 0 \\quad \\text{or} \\quad \\cos x = \\dfrac{1}{3}$$",
            "Solve the first branch, $\\sin x = 0$, in the domain $0^\\circ \\le x \\le 180^\\circ$:<br>$$x = 0.0^\\circ, \\, 180.0^\\circ$$<br>Because the inequality is inclusive of the boundaries, both solutions are valid.",
            "Solve the second branch, $\\cos x = \\dfrac{1}{3}$, in the domain $0^\\circ \\le x \\le 180^\\circ$:<br>\\begin{aligned} x &= \\cos^{-1}\\left(\\dfrac{1}{3}\\right) \\ x &\\approx 70.5^\\circ \\end{aligned}<br>Since cosine is negative in the second quadrant, there are no other solutions for $\\cos x = \\dfrac{1}{3}$ in the interval $[0^circ, 180^circ]$. Combining all branches yields the final set of answers.<br><br>Final Answer: $$x = 0.0^\\circ, \\, 70.5^\\circ, \\, 180.0^\\circ$$"
        ],
        "pi_options": [
            {
                "ans": "$$x = 70.5^\\circ$$",
                "feedback": "You may have made the mistake of dividing both sides by $\\sin x$ in the first step. Dividing by a variable term that can equal zero loses the valid solutions where $\\sin x = 0 \\implies x = 0.0^\circ, \\, 180.0^\circ$. Always bring terms to one side and factorise."
            },
            {
                "ans": "$$x = 0.0^\\circ, \\, 70.5^\\circ, \\, 109.5^\\circ, \\, 180.0^\\circ$$",
                "feedback": "Check your quadrant adjustments for $\\cos x = \\dfrac{1}{3}$. Cosine is positive in the first and fourth quadrants. The angle $109.5^\circ$ is in the second quadrant where cosine is negative, and is not a valid solution."
            },
            {
                "ans": "$$x = 70.5^\\circ, \\, 180.0^\\circ$$",
                "feedback": "Make sure you include all boundary solutions. Since $\\sin x = 0$ is solved over the inclusive interval $0^\circ \\le x \\le 180^\circ$, both $x = 0.0^\circ$ and $x = 180.0^\circ$ are valid roots."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Domain Boundary Roots",
            "content": "When solving trigonometric equations, always check whether your interval boundaries are inclusive (like $0^\\circ \\le x \\le 180^\\circ$ here). Since the inequality is inclusive, the boundary solutions $x = 0^\\circ$ and $x = 180^\\circ$ from $\\sin x = 0$ must be included in your final answer set."
        }
    },
    {
        "id": "004263",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Trigonometry",
        "topic": "Trigonometric Equations",
        "subtopic": [
            "Double Angle Formula",
            "Quadratic Equations in Trig",
            "Degree Measures"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>1. Show that the equation $2\\cos 2x = \\cos x$ can be written as a quadratic equation in $\cos x$:<br>$$4\\cos^2 x - \\cos x - 2 = 0$$<br>2. Solve the equation $2\\cos 2x = \\cos x$ for $0^\\circ \\le x \\le 360^\\circ$, giving your answers correct to $1$ decimal place where appropriate.",
        "steps": [
            "Use the double-angle cosine identity $\\cos 2x = 2\\cos^2 x - 1$ to rewrite the left-hand side of the equation:<br>$$2\\left(2\\cos^2 x - 1\\right) = \\cos x$$",
            "Expand the brackets and bring all terms to one side to form the required quadratic equation:<br>$$4\\cos^2 x - 2 = \\cos x \\implies 4\\cos^2 x - \\cos x - 2 = 0$$",
            "Apply the quadratic formula with $a = 4$, $b = -1$, and $c = -2$ to solve for $\\cos x$:<br>\\begin{aligned} \\cos x &= \\dfrac{-(-1) \\pm \\sqrt{(-1)^2 - 4(4)(-2)}}{2(4)} \\ &= \\dfrac{1 \\pm \\sqrt{1 + 32}}{8} \\ &= \\dfrac{1 \\pm \\sqrt{33}}{8} \\end{aligned}<br>This gives two possible values for $\\cos x$:<br>$$\\cos x \\approx 0.8431 \\quad \\text{or} \\quad \\cos x \\approx -0.5931$$",
            "Solve the first case, $\\cos x \\approx 0.8431$, in the domain $0^\\circ \\le x \\le 360^\\circ$:<br>\\begin{aligned} x &= \\cos^{-1}(0.8431) \\ x &\\approx 32.5^\\circ, \\, 360^\\circ - 32.5^\\circ = 327.5^\\circ \\end{aligned}",
            "Solve the second case, $\\cos x \\approx -0.5931$, in the domain $0^\\circ \\le x \\le 360^\\circ$:<br>\\begin{aligned} x &= \\cos^{-1}(-0.5931) \\ x &\\approx 126.4^\\circ, \\, 360^\\circ - 126.4^\\circ = 233.6^\\circ \\end{aligned}<br>Combining all branches yields the final set of answers.<br><br>Final Answer: $$x = 32.5^\\circ, \\, 126.4^\\circ, \\, 233.6^\\circ, \\, 327.5^\\circ$$"
        ],
        "pi_options": [
            {
                "ans": "$$x = 32.7^\\circ, \\, 126.4^\\circ, \\, 233.6^\\circ, \\, 327.3^\\circ$$",
                "feedback": "Check your evaluation of $c_1 = \\dfrac{1 + \\sqrt{33}}{8} \\approx 0.8431$. Taking the inverse cosine of this value gives $32.5^\\circ$, not $32.7^\circ$. Be careful with calculator inputs and rounding slips."
            },
            {
                "ans": "$$x = 32.5^\\circ, \\, 327.5^\\circ$$",
                "feedback": "Remember to solve for both branches of your quadratic formula result. The negative branch $\\cos x \\approx -0.5931$ yields two valid solutions ($126.4^\circ$ and $233.6^\circ$) within the domain."
            },
            {
                "ans": "$$x = 32.5^\\circ, \\, 126.4^\\circ$$",
                "feedback": "Each trigonometric branch has two solutions in the full $0^\circ \\le x \\le 360^\circ$ interval. You must find the companion quadrant angles (using $360^\circ - \\theta$) to complete the set."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Double-Angle Cosine Selection",
            "content": "The double-angle cosine has three forms: $\\cos 2x = \\cos^2 x - \\sin^2 x$, $\\cos 2x = 2\\cos^2 x - 1$, and $\\cos 2x = 1 - 2\\sin^2 x$. Since the other term in this equation is $\\cos x$, using the form $\\cos 2x = 2\\cos^2 x - 1$ is essential to produce a standard quadratic equation in cosine."
        }
    },
    {
        "id": "004264",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Trigonometry",
        "topic": "Trigonometric Equations",
        "subtopic": [
            "Double Angle Formula",
            "Factoring Trigonometric Functions",
            "Radian Measures"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>1. Show that the equation $\\sin 2x = 3\\tan x$ can be written in the form:<br>$$\\tan x(2\\cos^2 x - 3) = 0$$<br>2. Solve the equation $\\sin 2x = 3\\tan x$ for $0 \\le x \\le 2\\pi$, giving your answers in terms of $\\pi$.",
        "steps": [
            "Substitute $\\sin 2x = 2\\sin x \\cos x$ and $\\tan x = \\dfrac{\\sin x}{\\cos x}$ into the original equation:<br>$$2\\sin x \\cos x = 3\\dfrac{\\sin x}{\\cos x}$$",
            "Multiply both sides of the equation by $\\cos x$, noting that $\\cos x \\ne 0$ because $\\tan x$ is undefined where $\\cos x = 0$:<br>$$2\\sin x \\cos^2 x = 3\\sin x$$",
            "Bring all terms to one side and factorise out the common term $\\sin x$:<br>$$2\\sin x \\cos^2 x - 3\\sin x = 0 \\implies \\sin x\\left(2\\cos^2 x - 3\\right) = 0$$",
            "Substitute $\\sin x = \\tan x \\cos x$ (as $\\cos x \\ne 0$ in the domain of tangent) to obtain the required form:<br>$$\\tan x \\cos x\\left(2\\cos^2 x - 3\\right) = 0 \\implies \\tan x\\left(2\\cos^2 x - 3\\right) = 0$$",
            "Set up the two branches to solve:<br>$$\\tan x = 0 \\quad \\text{or} \\quad 2\\cos^2 x - 3 = 0$$",
            "Solve the first branch, $\\tan x = 0$, in the domain $0 \\le x \\le 2\\pi$:<br>$$x = 0, \\, \\pi, \\, 2\\pi$$",
            "Solve the second branch, $2\\cos^2 x - 3 = 0 \\implies \\cos^2 x = 1.5$. Since $\\cos^2 x \\le 1$ for all real $x$, there are no real solutions from this branch. Combining the results yields the final answer.<br><br>Final Answer: $$x = 0, \\, \\pi, \\, 2\\pi$$"
        ],
        "pi_options": [
            {
                "ans": "$$x = 0, \\, \\dfrac{\\pi}{2}, \\, \\pi, \\, \\dfrac{3\\pi}{2}, \\, 2\\pi$$",
                "feedback": "Be careful with your asymptote boundaries. Although $\\cos x = 0$ would mathematically satisfy $2\\sin x \\cos^2 x = 3\\sin x$, the values $x = \\dfrac{\\pi}{2}$ and $x = \\dfrac{3\\pi}{2}$ make $\\tan x$ in the original equation undefined, so they must be excluded."
            },
            {
                "ans": "$$x = 0, \\, \\pi$$",
                "feedback": "Check your domain boundaries. Since the interval is inclusive of the upper limit ($0 \\le x \\le 2\\pi$), the root $x = 2\\pi$ is a valid solution and must be included."
            },
            {
                "ans": "$$x = \\pi, \\, 2\\pi$$",
                "feedback": "Don't forget to include the starting boundary. Since $\\tan 0 = 0$, $x = 0$ is a valid root within the inclusive domain."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Checking Tangent Asymptotes",
            "content": "When working with tangent in equations, always verify that your solutions do not coincide with the vertical asymptotes of $\\tan x$. For example, while $\\cos x = 0$ would satisfy $2\\sin x \\cos^2 x = 3\\sin x$, the values $x = \\dfrac{\\pi}{2}$ and $x = \\dfrac{3\\pi}{2}$ make $\\tan x$ undefined, so they must be discarded."
        }
    },
    {
        "id": "004265",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Trigonometry",
        "topic": "Trigonometric Equations",
        "subtopic": [
            "The Harmonic Form",
            "Double Angle Formula",
            "Degree Measures"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>1. Express $3\\sin x + 4\\cos x$ in the form $R\\sin(x + \\alpha)$, where $R > 0$ and $0^\\circ < \\alpha < 90^\\circ$.<br>2. Hence, solve the equation $3\\sin x + 4\\cos x = 2.5$ for $0^\\circ \\le x \\le 360^\\circ$, giving your answers correct to $1$ decimal place where appropriate.",
        "steps": [
            "Use the compound angle expansion to equate the expressions:<br>$$3\\sin x + 4\\cos x = R\\sin x\\cos\\alpha + R\\cos x\\sin\\alpha$$<br>Compare the coefficients of $\\sin x$ and $\\cos x$:<br>$$R\\cos\\alpha = 3 \\quad \\text{and} \\quad R\\sin\\alpha = 4$$",
            "Find the amplitude $R$ and the phase shift angle $\\alpha$:<br>$$\\begin{aligned} R &= \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5 \\ \\tan\\alpha &= \\dfrac{4}{3} \\implies \\alpha = \\tan^{-1}\\left(\\dfrac{4}{3}\\right) \\approx 53.1^\\circ \\end{aligned}$$<br>This gives the harmonic form: $5\\sin(x + 53.1^\\circ)$.",
            "Substitute this harmonic form into the target equation and solve for the composite angle:<br>$$\\begin{aligned} 5\\sin(x + 53.1^\\circ) &= 2.5 \\ \\sin(x + 53.1^\\circ) &= 0.5 \\end{aligned}$$",
            "Let $u = x + 53.1^\\circ$. Since the domain is $0^\\circ \\le x \\le 360^\\circ$, the search interval for $u$ is shifted to $53.1^\\circ \\le u \\le 413.1^\\circ$. Solve $\\sin u = 0.5$ in this interval:<br>$$u = 150.0^\\circ, \\, 390.0^\\circ$$<br>(Note that $u = 30.0^\\circ$ is outside our shifted search interval.)",
            "Substitute $u = x + 53.1^\\circ$ back to solve for $x$:<br>\\begin{aligned} x + 53.1^\\circ = 150.0^\\circ &\\implies x = 96.9^\\circ \\ x + 53.1^\\circ = 390.0^\\circ &\\implies x = 336.9^\\circ \\end{aligned}<br><br>Final Answer: $$5\\sin(x + 53.1^\\circ), \\quad x = 96.9^\\circ, \\, 336.9^\\circ$$"
        ],
        "pi_options": [
            {
                "ans": "$5\\sin(x + 53.1^\\circ), \\quad x = -23.1^\\circ, \\, 96.9^\\circ$",
                "feedback": "Be careful with your domain boundaries. While $x = -23.1^\\circ$ is a mathematical solution, it lies outside the required interval $0^\circ \le x \le 360^\circ$. Adding $360^\circ$ to $-23.1^\circ$ yields the correct positive fourth-quadrant solution $336.9^\circ$."
            },
            {
                "ans": "$5\\sin(x + 53.1^\\circ), \\quad x = 96.9^\\circ, \\, 296.9^\\circ$",
                "feedback": "Check your second family solution. The root is found from $x + 53.1^\circ = 390.0^\circ \\implies x = 336.9^\circ$, not $x = 296.9^\circ$."
            },
            {
                "ans": "$5\\sin(x + 53.1^\\circ), \\quad x = 96.9^\\circ$",
                "feedback": "You found the first solution, but remember that the shifted domain $53.1^\circ \le u \le 413.1^\circ$ contains two valid angles where $\\sin u = 0.5$. You must also include the solution derived from $u = 390.0^\circ$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Composite Domain Shifts",
            "content": "When solving equations of the form $\\sin(x + \\alpha) = k$, remember to shift your search domain by $\\alpha$. Since $0^\\circ \\le x \\le 360^\\circ$, your search interval for $u = x + 53.1^\\circ$ is $53.1^\\circ \\le u \\le 413.1^\\circ$. This ensures you correctly identify $u = 390^\\circ$ (which yields $x = 336.9^\\circ$) while discarding $u = 30^\\circ$."
        }
    },
    {
        "id": "004266",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Differentiation",
        "subtopic": [
            "Implicit Differentiation",
            "Cubic Polynomials",
            "Product Rule"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The equation of a curve is:<br>$$y^4 - 7xy + x^3 = -5$$<br>Find the gradient of the curve at each of the points where $y = 1$, giving your answers in exact simplified form.",
        "steps": [
            "Substitute $y = 1$ into the original equation to find the $x$-coordinates of the points on the curve:<br>\\begin{aligned} 1^4 - 7x(1) + x^3 &= -5 \\ 1 - 7x + x^3 &= -5 \\ x^3 - 7x + 6 &= 0 \\end{aligned}",
            "Factorise the cubic equation by testing small integer factors. Since $x = 1$ gives $1 - 7 + 6 = 0$, $(x - 1)$ is a factor. Dividing the cubic yields:<br>$$x^3 - 7x + 6 = (x - 1)(x - 2)(x + 3) = 0$$<br>So the coordinates of the three points on the curve where $y = 1$ are:<br>$$(1, 1), \\quad (2, 1), \\quad (-3, 1)$$",
            "Differentiate the curve's equation implicitly with respect to $x$ to find $\\dfrac{\\text{d}y}{\\text{d}x}$. Remember to apply the product rule to the $-7xy$ term:<br>\\begin{aligned} \\dfrac{\\text{d}}{\\text{d}x}\\left(y^4\\right) - \\dfrac{\\text{d}}{\\text{d}x}\\left(7xy\\right) + \\dfrac{\\text{d}}{\\text{d}x}\\left(x^3\\right) &= \\dfrac{\\text{d}}{\\text{d}x}(-5) \\ 4y^3 \\dfrac{\\text{d}y}{\\text{d}x} - 7\\left(y + x\\dfrac{\\text{d}y}{\\text{d}x}\\right) + 3x^2 &= 0 \\ 4y^3 \\dfrac{\\text{d}y}{\\text{d}x} - 7y - 7x\\dfrac{\\text{d}y}{\\text{d}x} + 3x^2 &= 0 \\end{aligned}",
            "Isolate $\\dfrac{\\text{d}y}{\\text{d}x}$ as a single fraction:<br>\\begin{aligned} \\left(4y^3 - 7x\\right)\\dfrac{\\text{d}y}{\\text{d}x} &= 7y - 3x^2 \\ \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{7y - 3x^2}{4y^3 - 7x} \\end{aligned}",
            "Substitute $y = 1$ into the gradient expression to simplify it:<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{7 - 3x^2}{4 - 7x}$$",
            "Evaluate the gradient at each of the three points:<br>• At $(1, 1)$:<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{7 - 3(1)^2}{4 - 7(1)} = \\dfrac{4}{-3} = -\\dfrac{4}{3}$$<br>• At $(2, 1)$:<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{7 - 3(2)^2}{4 - 7(2)} = \\dfrac{7 - 12}{4 - 14} = \\dfrac{-5}{-10} = \\dfrac{1}{2}$$<br>• At $(-3, 1)$:<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{7 - 3(-3)^2}{4 - 7(-3)} = \\dfrac{7 - 27}{4 + 21} = \\dfrac{-20}{25} = -\\dfrac{4}{5}$$<br><br>Final Answer: $$-\\dfrac{4}{3}, \\quad \\dfrac{1}{2}, \\quad -\\dfrac{4}{5}$$"
        ],
        "pi_options": [
            {
                "ans": "$$-\\dfrac{4}{3}, \\quad -\\dfrac{1}{2}, \\quad -\\dfrac{4}{5}$$",
                "feedback": "Check your signs when evaluating the gradient at $(2, 1)$. Substituting $x = 2$ gives $\\dfrac{7 - 12}{4 - 14} = \\dfrac{-5}{-10}$. Since both terms are negative, their quotient must be positive $\\dfrac{1}{2}$."
            },
            {
                "ans": "$$-\\dfrac{4}{3}, \\quad \\dfrac{1}{2}$$",
                "feedback": "Remember that the cubic equation $x^3 - 7x + 6 = 0$ has three distinct real roots. You must evaluate the gradient at all three coordinates, including $x = -3$, to complete the solution."
            },
            {
                "ans": "$$-\\dfrac{4}{3}, \\quad \\dfrac{5}{18}, \\quad -\\dfrac{4}{5}$$",
                "feedback": "Check your evaluation of the denominator for the point $(2, 1)$. The term is $4 - 7x$. Since $x = 2$, this is $4 - 14 = -10$, not $4 - 14 = -18$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Factoring Cubics Systematically",
            "content": "When simplifying cubic expressions like $x^3 - 7x + 6 = 0$ in an implicit system, always search for simple integer roots ($x = \\pm 1, \\pm 2$) first using the Factor Theorem. This reduces the cubic to a quadratic, letting you find all three intersection points with clean integer coordinates."
        }
    },
    {
        "id": "004267",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Differentiation",
        "subtopic": [
            "Implicit Differentiation",
            "Product Rule",
            "Logarithmic Differentiation"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A curve is defined by the implicit equation:<br>$$y^2 + 2x \\ln y = x^2$$<br>1. Verify that the point $(1, 1)$ lies on the curve.<br>2. By differentiating implicitly, find the exact gradient of the curve at $(1, 1)$.",
        "steps": [
            "Verify that $(1, 1)$ lies on the curve by substituting $x = 1$ and $y = 1$ into the implicit equation:<br>\\begin{aligned} 1^2 + 2(1) \\ln(1) &= 1^2 \\ 1 + 2(0) &= 1 \\ 1 &= 1 \\end{aligned}<br>Since LHS = RHS, the point $(1, 1)$ lies on the curve.",
            "Differentiate the curve's equation implicitly with respect to $x$. Apply the product rule and chain rule to the $2x \\ln y$ term:<br>\\begin{aligned} \\dfrac{\\text{d}}{\\text{d}x}\\left(y^2\\right) + \\dfrac{\\text{d}}{\\text{d}x}\\left(2x \\ln y\\right) &= \\dfrac{\\text{d}}{\\text{d}x}\\left(x^2\\right) \\ 2y \\dfrac{\\text{d}y}{\\text{d}x} + 2\\ln y + 2x \\cdot \\left(\\dfrac{1}{y}\\dfrac{\\text{d}y}{\\text{d}x}\\right) &= 2x \\end{aligned}",
            "Group and factorise the terms containing $\\dfrac{\\text{d}y}{\\text{d}x}$:<br>\\begin{aligned} \\left(2y + \\dfrac{2x}{y}\\right)\\dfrac{\\text{d}y}{\\text{d}x} + 2\\ln y &= 2x \\ \\left(2y + \\dfrac{2x}{y}\\right)\\dfrac{\\text{d}y}{\\text{d}x} &= 2x - 2\\ln y \\end{aligned}",
            "Isolate $\\dfrac{\\text{d}y}{\\text{d}x}$ as a single fraction:<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{2x - 2\\ln y}{2y + \\dfrac{2x}{y}}$$",
            "Substitute $x = 1$ and $y = 1$ into the gradient expression and simplify to find the exact value:<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{2(1) - 2\\ln(1)}{2(1) + \\dfrac{2(1)}{1}} = \\dfrac{2 - 0}{2 + 2} = \\dfrac{2}{4} = \\dfrac{1}{2}$$<br><br>Final Answer: $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{1}{2}$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{2}{3}$$",
                "feedback": "Check your derivative of $2x\\ln y$ with respect to $x$. Applying the product rule gives $2\\ln y + \\dfrac{2x}{y}\\dfrac{\\text{d}y}{\\text{d}x}$. It seems you may have missed the coefficient $2$ in the second term, leading to an incorrect denominator of $3$ instead of $4$."
            },
            {
                "ans": "$$\\dfrac{\\text{d}y}{\\text{d}x} = 1$$",
                "feedback": "Be careful when differentiating $y^2$ implicitly. The derivative is $2y\\dfrac{\\text{d}y}{\\text{d}x}$, not $2y$. Forgetting the chain rule factor of $\\dfrac{\\text{d}y}{\\text{d}x}$ will distort your final fraction."
            },
            {
                "ans": "$$\\dfrac{\\text{d}y}{\\text{d}x} = 0$$",
                "feedback": "Recall that $\\ln(1) = 0$. Substituting the coordinates gives a numerator of $2(1) - 2(0) = 2$. It seems you may have mistakenly thought $\\ln(1) = 1$, which would incorrectly make the numerator zero."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Product Rule with Logarithmic Terms",
            "content": "When differentiating terms like $2x \\ln y$ implicitly, remember to apply both the product rule and the chain rule. The derivative is $2\\ln y + 2x \\left( \\dfrac{1}{y} \\dfrac{\\text{d}y}{\\text{d}x} \\right)$. This is a high-frequency source of lost marks in A-Level exams."
        }
    },
    {
        "id": "004268",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Differentiation",
        "subtopic": [
            "Implicit Differentiation",
            "Chain Rule",
            "Trigonometric Differentiation"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A curve is defined by the implicit equation:<br>$$\\sin(2y) = x - 1$$<br>At the point $P\\left(1.5, \\dfrac{1}{12}\\pi\\right)$ on the curve:<br>1. Show that $P$ lies on the curve.<br>2. Find the exact gradient of the curve at $P$.",
        "steps": [
            "Verify that $P\\left(1.5, \\dfrac{1}{12}\\pi\\right)$ lies on the curve by substituting $x = 1.5$ and $y = \\dfrac{1}{12}\\pi$ into the equation:<br>\\begin{aligned} \\sin\\left(2 \\cdot \\dfrac{1}{12}\\pi\\right) &= 1.5 - 1 \\ \\sin\\left(\\dfrac{1}{6}\\pi\\right) &= 0.5 \\ \\dfrac{1}{2} &= \\dfrac{1}{2} \\end{aligned}<br>Since LHS = RHS, the point $P$ lies on the curve.",
            "Differentiate both sides of the equation implicitly with respect to $x$. Use the chain rule on the $\\sin(2y)$ term:<br>\\begin{aligned} \\dfrac{\\text{d}}{\\text{d}x}\\left(\\sin(2y)\\right) &= \\dfrac{\\text{d}}{\\text{d}x}(x - 1) \\ 2\\cos(2y)\\dfrac{\\text{d}y}{\\text{d}x} &= 1 \\end{aligned}",
            "Isolate $\\dfrac{\\text{d}y}{\\text{d}x}$ as a single fraction:<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{1}{2\\cos(2y)}$$",
            "Substitute $y = \\dfrac{1}{12}\\pi$ into the gradient expression and evaluate. Ensure your calculator is set to radians:<br>$$\\begin{aligned} 2y &= 2\\left(\\dfrac{1}{12}\\pi\\right) = \\dfrac{1}{6}\\pi \\ \\cos\\left(\\dfrac{1}{6}\\pi\\right) &= \\dfrac{\\sqrt{3}}{2} \\ \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{1}{2 \\cdot \\dfrac{\\sqrt{3}}{2}} = \\dfrac{1}{\\sqrt{3}} = \\dfrac{\\sqrt{3}}{3} \\end{aligned}$$<br><br>Final Answer: $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{\\sqrt{3}}{3}$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{2\\sqrt{3}}{3}$$",
                "feedback": "Check your chain rule application. Differentiating $\\sin(2y)$ yields $2\\cos(2y)\\dfrac{\\text{d}y}{\\text{d}x}$. It seems you may have divided by $2$ incorrectly, leaving a factor of $2$ in the numerator."
            },
            {
                "ans": "$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{\\sqrt{3}}{6}$$",
                "feedback": "Check your multiplication in the denominator. Since $\\cos(2y) = \\dfrac{\\sqrt{3}}{2}$, the term $2\\cos(2y)$ becomes $2\\left(\\dfrac{\\sqrt{3}}{2}\\right) = \\sqrt{3}$. This gives a gradient of $\\dfrac{1}{\\sqrt{3}}$, not $\\dfrac{1}{2\\sqrt{3}}$."
            },
            {
                "ans": "$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{1}{2}$$",
                "feedback": "Make sure you evaluate the trigonometric term in radian mode, not degrees. If your calculator is in degree mode, $\\cos(2 \\cdot 1/12\\pi)$ will yield a completely incorrect value near $1$, leading to a wrong gradient."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Implicit Trigonometric Chain Rule",
            "content": "Differentiating trigonometric composite terms like $\\sin(2y)$ implicitly requires applying the chain rule to the inner function. This yields $2\\cos(2y) \\dfrac{\\text{d}y}{\\text{d}x}$. Always verify your calculator is in radian mode when evaluating trigonometric terms at points containing $\\pi$."
        }
    },
    {
        "id": "004269",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Differentiation",
        "subtopic": [
            "Implicit Differentiation",
            "Stationary Points",
            "Algebraic Rearrangement"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A curve is defined by the implicit equation:<br>$$x^2 + 2y^2 = 4x$$<br>1. Find an expression for $\\dfrac{\\text{d}y}{\\text{d}x}$ in terms of $x$ and $y$.<br>2. Hence, find the exact coordinates of the stationary points of the curve.",
        "steps": [
            "Differentiate both sides of the equation implicitly with respect to $x$:<br>\\begin{aligned} \\dfrac{\\text{d}}{\\text{d}x}\\left(x^2\\right) + \\dfrac{\\text{d}}{\\text{d}x}\\left(2y^2\\right) &= \\dfrac{\\text{d}}{\\text{d}x}(4x) \\ 2x + 4y\\dfrac{\\text{d}y}{\\text{d}x} &= 4 \\end{aligned}",
            "Isolate $\\dfrac{\\text{d}y}{\\text{d}x}$ and simplify the fraction by dividing numerator and denominator by $2$:<br>\\begin{aligned} 4y\\dfrac{\\text{d}y}{\\text{d}x} &= 4 - 2x \\ \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{4 - 2x}{4y} = \\dfrac{2 - x}{2y} \\end{aligned}",
            "To find the stationary points, set the gradient expression $\\dfrac{\\text{d}y}{\\text{d}x} = 0$:<br>$$\\dfrac{2 - x}{2y} = 0 \\implies 2 - x = 0 \\implies x = 2$$<br>(Note that $y \\ne 0$ because the gradient is undefined where $y = 0$.)",
            "Substitute $x = 2$ back into the original implicit equation of the curve to solve for $y$:<br>\\begin{aligned} x^2 + 2y^2 &= 4x \\ 2^2 + 2y^2 &= 4(2) \\ 4 + 2y^2 &= 8 \\ 2y^2 &= 4 \\ y^2 &= 2 \\implies y = \\pm\\sqrt{2} \\end{aligned}",
            "Write down the exact coordinates of the two stationary points:<br>$$(2, \\sqrt{2}) \\quad \\text{and} \\quad (2, -\\sqrt{2})$$<br><br>Final Answer: $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{2 - x}{2y}, \\quad (2, \\pm\\sqrt{2})$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{2 - x}{2y}, \\quad (2, 2)$$",
                "feedback": "Check your final calculation for $y$. Solving $y^2 = 2$ yields $y = \\pm\\sqrt{2}$, not $y = 2$. Remember to take the square root of both sides."
            },
            {
                "ans": "$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{4 - 2x}{y}, \\quad (2, \\pm\\sqrt{2})$$",
                "feedback": "Check your division steps when isolating $\\dfrac{\\text{d}y}{\\text{d}x}$. Since the term is $4y\\dfrac{\\text{d}y}{\\text{d}x} = 4 - 2x$, dividing by $4y$ gives $\\dfrac{4 - 2x}{4y} = \\dfrac{2 - x}{2y}$, not $\\dfrac{4 - 2x}{y}$."
            },
            {
                "ans": "$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{2 - x}{2y}, \\quad (2, 0)$$",
                "feedback": "A stationary point cannot occur where $y = 0$, as this would make the denominator of your gradient expression zero, causing the derivative to be undefined (a vertical tangent). You must substitute $x = 2$ back into the original curve equation to find $y$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Locating Stationary Points on Implicit Curves",
            "content": "To find the stationary points of an implicit curve, find the expression for $\\dfrac{\\text{d}y}{\\text{d}x}$ first and set the numerator equal to $0$ to find the corresponding $x$-coordinates. Then, substitute these $x$-values back into the original curve equation to solve for $y$."
        }
    },
    {
        "id": "004270",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Differentiation",
        "subtopic": [
            "Implicit Differentiation",
            "Product Rule",
            "Algebraic Fractions"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A curve is defined by the implicit equation:<br>$$x^2y^2 - 3x + 2y = 6$$<br>1. Find the coordinates of the point on the curve where $y = 1$ and $x > 0$.<br>2. Find the exact gradient of the curve at this point.",
        "steps": [
            "Substitute $y = 1$ into the original curve equation to find the $x$-coordinates:<br>\\begin{aligned} x^2(1)^2 - 3x + 2(1) &= 6 \\ x^2 - 3x + 2 &= 6 \\ x^2 - 3x - 4 &= 0 \\end{aligned}",
            "Factorise the quadratic equation to find the roots:<br>$$(x - 4)(x + 1) = 0 \\implies x = 4 \\quad \\text{or} \\quad x = -1$$<br>Since the question states $x > 0$, we discard $x = -1$. The coordinates of the point are $(4, 1)$.",
            "Differentiate the curve's equation implicitly with respect to $x$. Use the product rule on the $x^2y^2$ term:<br>\\begin{aligned} \\dfrac{\\text{d}}{\\text{d}x}\\left(x^2y^2\\right) - \\dfrac{\\text{d}}{\\text{d}x}(3x) + \\dfrac{\\text{d}}{\\text{d}x}(2y) &= 0 \\ 2xy^2 + 2x^2y\\dfrac{\\text{d}y}{\\text{d}x} - 3 + 2\\dfrac{\\text{d}y}{\\text{d}x} &= 0 \\end{aligned}",
            "Group and factorise the terms containing $\\dfrac{\\text{d}y}{\\text{d}x}$:<br>\\begin{aligned} \\left(2xy^2 - 3\\right) + \\left(2x^2y + 2\\right)\\dfrac{\\text{d}y}{\\text{d}x} &= 0 \\ \\left(2x^2y + 2\\right)\\dfrac{\\text{d}y}{\\text{d}x} &= 3 - 2xy^2 \\ \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{3 - 2xy^2}{2x^2y + 2} \\end{aligned}",
            "Substitute $x = 4$ and $y = 1$ into the gradient expression and simplify to find the exact value:<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{3 - 2(4)(1)^2}{2(16)(1) + 2} = \\dfrac{3 - 8}{32 + 2} = -\\dfrac{5}{34}$$<br><br>Final Answer: $$(4,1), \\quad \\dfrac{\\text{d}y}{\\text{d}x} = -\\dfrac{5}{34}$$"
        ],
        "pi_options": [
            {
                "ans": "$$(4,1), \\quad \\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{5}{34}$$",
                "feedback": "Check your signs in the numerator of your gradient formula. The numerator is $3 - 2xy^2$. Substituting $x=4, \\, y=1$ yields $3 - 8 = -5$. It must be negative $-\\dfrac{5}{34}$, not positive."
            },
            {
                "ans": "$$(-1,1), \\quad \\dfrac{\\text{d}y}{\\text{d}x} = -\\dfrac{5}{34}$$",
                "feedback": "Check your coordinate domain constraint. The quadratic equation yields $x = 4$ or $x = -1$. Because the question explicitly states $x > 0$, you must choose $x = 4$, making the point $(4,1)$, not $(-1,1)$."
            },
            {
                "ans": "$$(4,1), \\quad \\dfrac{\\text{d}y}{\\text{d}x} = -\\dfrac{5}{32}$$",
                "feedback": "Check your denominator evaluation. The denominator is $2x^2y + 2$. Since $x = 4, \\, y = 1$, this is $2(16)(1) + 2 = 34$. It seems you may have forgotten to add the constant $2$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Watch Your Signs in Fraction Derivatives",
            "content": "When differentiating $x^2 y^2$ implicitly, the product rule yields $2x y^2 + 2x^2 y \\dfrac{\\text{d}y}{\\text{d}x}$. When isolating $\\dfrac{\\text{d}y}{\\text{d}x}$ as a single fraction, ensure you carefully distribute the negative signs during transposition to avoid any fractional sign errors."
        }
    },
    {
        "id": "004271",
        "board": "OCR MEI",
        "level": "AS",
        "major_area": "Calculus",
        "topic": "Integration",
        "subtopic": [
            "Indefinite Integration",
            "Algebraic Indices",
            "Fractional and Negative Powers"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Find the indefinite integral:<br>$$\\int \\left( 6\\sqrt{x} - \\dfrac{4}{x^3} \\right) \\,\\text{d}x$$",
        "steps": [
            "Convert the surd and the reciprocal fraction into standard index form using $x^{1/2} = \\sqrt{x}$ and $x^{-n} = \\dfrac{1}{x^n}$:<br>$$6\\sqrt{x} = 6x^{1/2} \\quad \\text{and} \\quad \\dfrac{4}{x^3} = 4x^{-3}$$",
            "Substitute these index forms into the integral and integrate term-by-term using the power rule $\\int x^n \\,\\text{d}x = \\dfrac{x^{n+1}}{n+1}$:<br>\\begin{aligned} \\int \\left( 6x^{1/2} - 4x^{-3} \\right) \\,\\text{d}x &= 6\\int x^{1/2} \\,\\text{d}x - 4\\int x^{-3} \\,\\text{d}x \\ &= 6 \\cdot \\left( \\dfrac{2}{3}x^{3/2} \\right) - 4 \\cdot \\left( \\dfrac{x^{-2}}{-2} \\right) + C \\ &= 4x^{3/2} + 2x^{-2} + C \\end{aligned}<br>where $C$ is the constant of integration.",
            "Write the final result with simplified positive exponents if required:<br>$$4x^{3/2} + \\dfrac{2}{x^2} + C$$<br><br>Final Answer: $$4x^{3/2} + \\dfrac{2}{x^2} + C$$"
        ],
        "pi_options": [
            {
                "ans": "$$4x^{3/2} - 2x^{-2} + C$$",
                "feedback": "Check your sign on the second integrated term. Integrating $-4x^{-3}$ yields $-4 \\cdot \\left( \\dfrac{x^{-2}}{-2} \\right) = +2x^{-2}$, not $-2x^{-2}$. Watch your signs when dividing by negative exponents."
            },
            {
                "ans": "$$9x^{3/2} + 2x^{-2} + C$$",
                "feedback": "Check your integration of the first term. Applying the power rule to $6x^{1/2}$ gives $6 \\cdot \\left(\\dfrac{2}{3}x^{3/2}\\right) = 4x^{3/2}$, not $9x^{3/2}$."
            },
            {
                "ans": "$$4x^{3/2} + 2x^{-2}$$",
                "feedback": "Your integration is correct, but do not forget to include the arbitrary constant of integration, $+ C$, to complete any indefinite integration problem."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Power Rule with Fractional and Negative Indices",
            "content": "When integrating terms like $a\\sqrt{x}$ or $\\dfrac{b}{x^n}$, always rewrite them in standard index form $ax^{1/2}$ and $bx^{-n}$ before integrating. Carefully apply the power rule, adding $1$ to the exponent, and simplify the fractional coefficients early to avoid simple algebraic errors."
        }
    },
    {
        "id": "004272",
        "board": "OCR MEI",
        "level": "AS",
        "major_area": "Calculus",
        "topic": "Integration",
        "subtopic": [
            "Definite Integration",
            "Algebraic Indices",
            "Fractional and Negative Powers"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Evaluate the definite integral:<br>$$\\int_{1}^{4} \\left( \\dfrac{3}{\\sqrt{x}} + \\dfrac{2}{x^2} \\right) \\,\\text{d}x$$",
        "steps": [
            "Convert the fractional terms into standard index form using $x^{-1/2} = \\dfrac{1}{\\sqrt{x}}$ and $x^{-2} = \\dfrac{1}{x^2}$:<br>$$\\dfrac{3}{\\sqrt{x}} = 3x^{-1/2} \\quad \\text{and} \\quad \\dfrac{2}{x^2} = 2x^{-2}$$",
            "Integrate the terms step-by-step using the power rule:<br>\\begin{aligned} \\int_{1}^{4} \\left( 3x^{-1/2} + 2x^{-2} \\right) \\,\\text{d}x &= \\left[ 3 \\cdot \\left( 2x^{1/2} \\right) + 2 \\cdot \\left( \\dfrac{x^{-1}}{-1} \\right) \\right]_{1}^{4} \\ &= \\left[ 6x^{1/2} - 2x^{-1} \\right]_{1}^{4} \\ &= \\left[ 6\\sqrt{x} - \\dfrac{2}{x} \\right]_{1}^{4} \\end{aligned}",
            "Substitute the upper limit $x = 4$ into the integrated expression:<br>$$\\text{Upper Limit} = 6\\sqrt{4} - \\dfrac{2}{4} = 6(2) - \\dfrac{1}{2} = 12 - \\dfrac{1}{2} = \\dfrac{23}{2}$$",
            "Substitute the lower limit $x = 1$ into the integrated expression:<br>$$\\text{Lower Limit} = 6\\sqrt{1} - \\dfrac{2}{1} = 6(1) - 2 = 4$$",
            "Subtract the lower limit evaluation from the upper limit evaluation to find the final value:<br>$$\\text{Value} = \\dfrac{23}{2} - 4 = \\dfrac{23}{2} - \\dfrac{8}{2} = \\dfrac{15}{2}$$<br><br>Final Answer: $$\\dfrac{15}{2}$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\dfrac{11}{2}$$",
                "feedback": "Check your calculations for the lower limit. Substituting $x = 1$ gives $6\\sqrt{1} - \\dfrac{2}{1} = 6 - 2 = 4$. If you mistakenly calculated it as $6 + 2 = 8$, you would get an incorrect final answer of $\\dfrac{11}{2}$."
            },
            {
                "ans": "$$\\dfrac{19}{2}$$",
                "feedback": "Check your evaluation of the upper limit at $x = 4$. $6\\sqrt{4} - \\dfrac{2}{4}$ is $12 - 0.5 = 11.5$, not $6(2) + 0.5 = 12.5$. Watch your negative signs inside the brackets."
            },
            {
                "ans": "$$\\dfrac{15}{2} + C$$",
                "feedback": "A definite integral has defined numerical boundaries, so it evaluates to a single real number. Do not include the constant of integration $+ C$ in definite integration answers."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Definite Limits with Fractional Powers",
            "content": "When evaluating definite limits involving fractional powers, such as $x^{1/2}$ at $x = 4$, simplify the square root first. For example, $6(4)^{1/2} = 6(2) = 12$. Always subtract the entire evaluated lower limit from the upper limit, taking care with subtraction signs when dealing with negative fractions."
        }
    },
    {
        "id": "004273",
        "board": "OCR MEI",
        "level": "AS",
        "major_area": "Calculus",
        "topic": "Integration",
        "subtopic": [
            "Curve Equations",
            "Gradient Functions",
            "Finding Constants"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A curve has a gradient function given by:<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = 2\\sqrt{x} + \\dfrac{3}{x^2}$$<br>Given that the curve passes through the point $(1, 5)$, find the equation of the curve.",
        "steps": [
            "Express the gradient function in standard index form to prepare for integration:<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = 2x^{1/2} + 3x^{-2}$$",
            "Integrate the gradient function with respect to $x$ to find the general equation of the curve, adding the constant of integration $C$:<br>\\begin{aligned} y &= \\int \\left( 2x^{1/2} + 3x^{-2} \\right) \\,\\text{d}x \\ &= 2 \\cdot \\left( \\dfrac{2}{3}x^{3/2} \\right) + 3 \\cdot \\left( \\dfrac{x^{-1}}{-1} \\right) + C \\ &= \\dfrac{4}{3}x^{3/2} - \\dfrac{3}{x} + C \\end{aligned}",
            "Substitute the coordinates of the point $(1, 5)$ into the general equation to solve for the constant $C$:<br>\\begin{aligned} 5 &= \\dfrac{4}{3}(1)^{3/2} - \\dfrac{3}{1} + C \\ 5 &= \\dfrac{4}{3} - 3 + C \\ 5 &= -\\dfrac{5}{3} + C \\ C &= 5 + \\dfrac{5}{3} = \\dfrac{20}{3} \\end{aligned}",
            "Substitute $C = \\dfrac{20}{3}$ back into the equation to obtain the final equation of the curve:<br>$$y = \\dfrac{4}{3}x^{3/2} - \\dfrac{3}{x} + \\dfrac{20}{3}$$<br><br>Final Answer: $$y = \\dfrac{4}{3}x^{3/2} - \\dfrac{3}{x} + \\dfrac{20}{3}$$"
        ],
        "pi_options": [
            {
                "ans": "$y = \\dfrac{4}{3}x^{3/2} - \\dfrac{3}{x} + \\dfrac{10}{3}$",
                "feedback": "Check your arithmetic when calculating $C$. From $5 = \\dfrac{4}{3} - 3 + C$, we have $5 = -\\dfrac{5}{3} + C \\implies C = 5 + \\dfrac{5}{3} = \\dfrac{20}{3}$, not $\\dfrac{10}{3}$."
            },
            {
                "ans": "$y = \\dfrac{4}{3}x^{3/2} + \\dfrac{3}{x} + \\dfrac{20}{3}$",
                "feedback": "Check your signs during integration. Integrating $3x^{-2}$ yields $3 \\cdot \\left(\\dfrac{x^{-1}}{-1}\\right) = -\\dfrac{3}{x}$. The sign of this term must be negative, not positive."
            },
            {
                "ans": "$y = \\dfrac{4}{3}x^{3/2} - \\dfrac{3}{x}$",
                "feedback": "You forgot to calculate and include the constant of integration, $C$. You must use the given point $(1, 5)$ to find the exact boundary value of $C$ to complete the curve equation."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Finding Integration Constants",
            "content": "To find the equation of a curve from its gradient function, integrate the derivative to obtain $y = f(x) + C$. Substitute the coordinates of the given point $(x_1, y_1)$ immediately to solve for the arbitrary constant of integration $C$, and write your final equation with fully simplified coefficients."
        }
    },
    {
        "id": "004274",
        "board": "OCR MEI",
        "level": "AS",
        "major_area": "Calculus",
        "topic": "Integration",
        "subtopic": [
            "Indefinite Integration",
            "Simplifying Fractions",
            "Algebraic Indices"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Find the indefinite integral:<br>$$\\int \\dfrac{3x^3 - 2\\sqrt{x}}{x} \\,\\text{d}x$$",
        "steps": [
            "Simplify the integrand first by dividing each term in the numerator by the denominator $x$ independently:<br>\\begin{aligned} \\dfrac{3x^3 - 2\\sqrt{x}}{x} &= \\dfrac{3x^3}{x} - \\dfrac{2x^{1/2}}{x} \\ &= 3x^2 - 2x^{-1/2} \\end{aligned}",
            "Substitute this simplified expression into the integral:<br>$$\\int \\dfrac{3x^3 - 2\\sqrt{x}}{x} \\,\\text{d}x = \\int \\left( 3x^2 - 2x^{-1/2} \\right) \\,\\text{d}x$$",
            "Integrate term-by-term using the standard power rule, adding the constant of integration $C$ at the end:<br>\\begin{aligned} \\int \\left( 3x^2 - 2x^{-1/2} \\right) \\,\\text{d}x &= 3\\int x^2 \\,\\text{d}x - 2\\int x^{-1/2} \\,\\text{d}x \\ &= 3 \\cdot \\left( \\dfrac{x^3}{3} \\right) - 2 \\cdot \\left( 2x^{1/2} \\right) + C \\ &= x^3 - 4x^{1/2} + C \\end{aligned}",
            "Write the final expression using standard surd form if required:<br>$$x^3 - 4\\sqrt{x} + C$$<br><br>Final Answer: $$x^3 - 4\\sqrt{x} + C$$"
        ],
        "pi_options": [
            {
                "ans": "$$x^3 - 2\\sqrt{x} + C$$",
                "feedback": "Check your power rule on the second term. Integrating $-2x^{-1/2}$ yields $-2 \\cdot \\left( 2x^{1/2} \\right) = -4x^{1/2}$, not $-2x^{1/2}$."
            },
            {
                "ans": "$$x^3 - 4\\sqrt{x}$$",
                "feedback": "While your integration is correct, always remember to add the arbitrary constant of integration, $+ C$, to complete any indefinite integral."
            },
            {
                "ans": "$$3x^3 - 4\\sqrt{x} + C$$",
                "feedback": "Check the integration of the first term. Integrating $3x^2$ yields $3 \\cdot \\left(\\dfrac{x^3}{3}\\right) = x^3$, not $3x^3$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Simplifying Rational Integrands First",
            "content": "Do not attempt to integrate quotients like $\\dfrac{P(x)}{Q(x)}$ directly unless they fit standard logarithmic forms. If the denominator is a single term like $x$, divide each term in the numerator by the denominator individually to express the integrand as a sum of simple, standard index terms before integrating."
        }
    },
    {
        "id": "004275",
        "board": "OCR MEI",
        "level": "AS",
        "major_area": "Calculus",
        "topic": "Integration",
        "subtopic": [
            "Area Under a Curve",
            "Equations of Curves",
            "Definite Integration"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The curve has equation $y = 3\\sqrt{x} - x$.<br><br>1. Find the coordinates of the points where the curve intersects the $x$-axis.<br>2. Find the exact area of the finite region bounded by the curve and the $x$-axis.",
        "steps": [
            "To find the $x$-intercepts, set $y = 0$ and factorise the equation:<br>\\begin{aligned} 3x^{1/2} - x &= 0 \\ x^{1/2}\\left(3 - x^{1/2}\\right) &= 0 \\end{aligned}<br>This yields two possible solutions:<br>$$x^{1/2} = 0 \\implies x = 0 \\quad \\text{and} \\quad 3 - x^{1/2} = 0 \\implies x^{1/2} = 3 \\implies x = 9$$<br>So, the two $x$-intercept points are $(0, 0)$ and $(9, 0)$.",
            "Set up the definite integral for the area under the curve between these two boundaries:<br>$$A = \\int_{0}^{9} \\left( 3x^{1/2} - x \\right) \\,\\text{d}x$$",
            "Integrate the expression using the power rule:<br>\\begin{aligned} A &= \\left[ 3 \\cdot \\left( \\dfrac{2}{3}x^{3/2} \\right) - \\dfrac{x^2}{2} \\right]_{0}^{9} \\ &= \\left[ 2x^{3/2} - \\dfrac{1}{2}x^2 \\right]_{0}^{9} \\end{aligned}",
            "Substitute the upper limit $x = 9$ into the integrated expression:<br>$$\\text{Upper Limit} = 2(9)^{3/2} - \\dfrac{9^2}{2} = 2(27) - \\dfrac{81}{2} = 54 - \\dfrac{81}{2} = \\dfrac{108}{2} - \\dfrac{81}{2} = \\dfrac{27}{2}$$",
            "Substitute the lower limit $x = 0$ into the integrated expression:<br>$$\\text{Lower Limit} = 2(0)^{3/2} - \\dfrac{0^2}{2} = 0$$<br>Subtracting the lower limit from the upper limit gives the exact area of the region:<br>$$A = \\dfrac{27}{2} - 0 = \\dfrac{27}{2}$$<br><br>Final Answer: $$(0,0), \\quad (9,0), \\quad \\text{Area} = \\dfrac{27}{2}$$"
        ],
        "pi_options": [
            {
                "ans": "$$(0,0), \\quad (9,0), \\quad \\text{Area} = \\dfrac{81}{2}$$",
                "feedback": "Check your calculation of the upper limit term $2(9)^{3/2}$. Since $9^{3/2} = 27$, this term evaluates to $2(27) = 54$. It seems you may have mistakenly evaluated it as $9^2 = 81$."
            },
            {
                "ans": "$$(0,0), \\quad (3,0), \\quad \\text{Area} = \\dfrac{27}{2}$$",
                "feedback": "Check your factorisation for the $x$-intercepts. The equation $3 - x^{1/2} = 0$ yields $x^{1/2} = 3 \\implies x = 3^2 = 9$. The intercept is at $x = 9$, not $x = 3$."
            },
            {
                "ans": "$$(0,0), \\quad (9,0), \\quad \\text{Area} = 27$$",
                "feedback": "Check your fraction subtraction. $\\dfrac{108}{2} - \\dfrac{81}{2} = \\dfrac{27}{2}$. Make sure to divide by the common denominator $2$ instead of leaving the constant as a whole integer."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Bounded Area Integration Limits",
            "content": "To find the area of a region bounded by a curve and the $x$-axis, first locate the boundaries of integration by setting $y = 0$ to find the $x$-intercepts. Integrating the function over these bounds, taking care when calculating fractional powers like $9^{3/2} = 27$, yields the exact geometric area."
        }
    },
    {
        "id": "004276",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Differentiation",
        "subtopic": [
            "Implicit Differentiation",
            "Gradients of Curves"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The equation of a curve is given by:<br>$$x^2 - xy^2 + y^3 = 13$$<br>1. Find the coordinates of the points where the curve intersects the line $y = 2$.<br>2. Find the gradient of the curve at each of these points.",
        "steps": [
            "To find the points of intersection with the line $y = 2$, substitute $y = 2$ into the curve's equation:<br>\\begin{aligned} x^2 - x(2)^2 + (2)^3 &= 13 \\ x^2 - 4x + 8 &= 13 \\ x^2 - 4x - 5 &= 0 \\end{aligned}",
            "Factorise this quadratic equation to solve for $x$:<br>\\begin{aligned} (x - 5)(x + 1) &= 0 \\end{aligned}<br>This yields two solutions: $x = 5$ and $x = -1$.<br>Therefore, the coordinates of the two intersection points are $(5, 2)$ and $(-1, 2)$.",
            "Now, differentiate the equation of the curve implicitly with respect to $x$. Apply the product rule carefully to the term $-xy^2$:<br>\\begin{aligned} \\dfrac{\\text{d}}{\\text{d}x}(x^2) - \\dfrac{\\text{d}}{\\text{d}x}(xy^2) + \\dfrac{\\text{d}}{\\text{d}x}(y^3) &= \\dfrac{\\text{d}}{\\text{d}x}(13) \\ 2x - \\left( y^2 + 2xy\\dfrac{\\text{d}y}{\\text{d}x} \\right) + 3y^2\\dfrac{\\text{d}y}{\\text{d}x} &= 0 \\ 2x - y^2 - 2xy\\dfrac{\\text{d}y}{\\text{d}x} + 3y^2\\dfrac{\\text{d}y}{\\text{d}x} &= 0 \\end{aligned}",
            "Rearrange the differentiated terms to isolate and make $\\dfrac{\\text{d}y}{\\text{d}x}$ the subject:<br>\\begin{aligned} \\left(3y^2 - 2xy\\right)\\dfrac{\\text{d}y}{\\text{d}x} &= y^2 - 2x \\ \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{y^2 - 2x}{3y^2 - 2xy} \\end{aligned}",
            "To find the gradient of the curve at the first intersection point $(5, 2)$, substitute $x = 5$ and $y = 2$ into the derivative:<br>\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{(2)^2 - 2(5)}{3(2)^2 - 2(5)(2)} \\ &= \\dfrac{4 - 10}{12 - 20} \\ &= \\dfrac{-6}{-8} = \\dfrac{3}{4} \\end{aligned}",
            "To find the gradient of the curve at the second intersection point $(-1, 2)$, substitute $x = -1$ and $y = 2$ into the derivative:<br>\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{(2)^2 - 2(-1)}{3(2)^2 - 2(-1)(2)} \\ &= \\dfrac{4 + 2}{12 + 4} \\ &= \\dfrac{6}{16} = \\dfrac{3}{8} \\end{aligned}<br><br>Final Answer: $(5, 2)$ with gradient $\\dfrac{3}{4}$, and $(-1, 2)$ with gradient $\\dfrac{3}{8}$."
        ],
        "pi_options": [
            {
                "ans": "$$(5, 2) \\text{ with gradient } -\\dfrac{3}{16}, \\quad (-1, 2) \\text{ with gradient } \\dfrac{3}{4}$$",
                "feedback": "Check your application of the product rule when differentiating the term $-xy^2$. Remember to distribute the negative sign to both terms inside the bracket. Differentiating $-xy^2$ with respect to $x$ yields $-y^2 - 2xy \\dfrac{\\text{d}y}{\\text{d}x}$ rather than $-y^2 + 2xy \\dfrac{\\text{d}y}{\\text{d}x}$."
            },
            {
                "ans": "$$(5, 2) \\text{ with gradient } -3, \\quad (-1, 2) \\text{ with gradient } \\dfrac{3}{7}$$",
                "feedback": "Check your derivative of $y^2$ with respect to $x$ when applying the product rule. By the chain rule, $\\dfrac{\\text{d}}{\\text{d}x}(y^2) = 2y \\dfrac{\\text{d}y}{\\text{d}x}$. It appears you may have omitted the factor of 2 in your derivative of the middle term."
            },
            {
                "ans": "$$(5, 2) \\text{ with gradient } \\dfrac{3}{4}, \\quad (1, 2) \\text{ with gradient } \\dfrac{1}{4}$$",
                "feedback": "Check your factorisation of the quadratic equation $x^2 - 4x - 5 = 0$. Since $-5$ is negative and the middle term is $-4$, the expression factors to $(x - 5)(x + 1) = 0$, yielding solutions $x = 5$ and $x = -1$ rather than $x = 1$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Product Rule Sign Distribution",
            "content": "A very common error in implicit differentiation occurs when applying the product rule to terms with negative coefficients, such as $-xy^2$. Ensure you treat the entire product within a bracket to avoid sign distribution slips, as $\\dfrac{\\text{d}}{\\text{d}x}(-xy^2) = -\\left(y^2 + 2xy \\dfrac{\\text{d}y}{\\text{d}x}\\right) = -y^2 - 2xy \\dfrac{\\text{d}y}{\\text{d}x}$."
        }
    },
    {
        "id": "004277",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Differentiation",
        "subtopic": [
            "Implicit Differentiation",
            "Exponential Functions"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A curve has the equation:<br>$$y\\text{e}^{2x} + y^2\\text{e}^x = 6$$<br>1. Show that there is exactly one point on the curve where $y = 1$, and find its exact $x$-coordinate in terms of a natural logarithm.<br>2. Find the exact gradient of the curve at this point.",
        "steps": [
            "To find any coordinates where $y = 1$, substitute $y = 1$ into the curve's equation:<br>\\begin{aligned} (1)\\text{e}^{2x} + (1)^2\\text{e}^x &= 6 \\ \\text{e}^{2x} + \\text{e}^x - 6 &= 0 \\end{aligned}",
            "This is a quadratic equation in terms of $\\text{e}^x$. Let $u = \\text{e}^x$, where $u > 0$ because exponential outputs are strictly positive:<br>\\begin{aligned} u^2 + u - 6 &= 0 \\ (u + 3)(u - 2) &= 0 \\end{aligned}<br>This gives two mathematical solutions: $u = -3$ and $u = 2$.",
            "Since $u = \\text{e}^x > 0$, we must discard the negative root $u = -3$. Thus, the only valid solution is:<br>\\begin{aligned} \\text{e}^x &= 2 \\ x &= \\ln 2 \\end{aligned}<br>So, there is exactly one point on the curve where $y = 1$, which is $(\ln 2, 1)$.",
            "Next, differentiate the curve's equation implicitly with respect to $x$, applying the product rule to both $y\\text{e}^{2x}$ and $y^2\\text{e}^x$:<br>\\begin{aligned} \\left( \\text{e}^{2x}\\dfrac{\\text{d}y}{\\text{d}x} + 2y\\text{e}^{2x} \\right) + \\left( 2y\\text{e}^x\\dfrac{\\text{d}y}{\\text{d}x} + y^2\\text{e}^x \\right) &= 0 \\end{aligned}",
            "Isolate $\\dfrac{\\text{d}y}{\\text{d}x}$ by grouping the derivative terms together:<br>\\begin{aligned} \\left(\\text{e}^{2x} + 2y\\text{e}^x\\right)\\dfrac{\\text{d}y}{\\text{d}x} &= -2y\\text{e}^{2x} - y^2\\text{e}^x \\ \\dfrac{\\text{d}y}{\\text{d}x} &= -\\dfrac{2y\\text{e}^{2x} + y^2\\text{e}^x}{\\text{e}^{2x} + 2y\\text{e}^x} \\end{aligned}",
            "To find the exact gradient at $(\ln 2, 1)$, substitute $y = 1$, $\\text{e}^x = 2$, and $\\text{e}^{2x} = 4$ into the derivative expression:<br>\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= -\\dfrac{2(1)(4) + (1)^2(2)}{4 + 2(1)(2)} \\ &= -\\dfrac{8 + 2}{4 + 4} \\ &= -\\dfrac{10}{8} = -\\dfrac{5}{4} \\end{aligned}<br><br>Final Answer: $(\ln 2, 1)$ with gradient $-\\dfrac{5}{4}$."
        ],
        "pi_options": [
            {
                "ans": "$$x = \\ln 2 \\text{ and } x = \\ln 3, \\quad \\text{Gradient: } -\\dfrac{5}{4}$$",
                "feedback": "Check your solutions to the quadratic equation $u^2 + u - 6 = 0$. This factors to $(u + 3)(u - 2) = 0$, giving $u = -3$ or $u = 2$. Since $u = \\text{e}^x$ and exponential functions can only output positive real values, the equation $\\text{e}^x = -3$ has no real solutions. Thus, $x = \\ln 2$ is the only valid coordinate."
            },
            {
                "ans": "$$x = \\ln 2, \\quad \\text{Gradient: } -1$$",
                "feedback": "Check your application of the product rule when differentiating the term $y^2\\text{e}^x$. You must treat it as a product of $y^2$ and $\\text{e}^x$, which yields $2y\\text{e}^x \\dfrac{\\text{d}y}{\\text{d}x} + y^2\\text{e}^x$. It appears you missed the $y^2\\text{e}^x$ term during differentiation."
            },
            {
                "ans": "$$x = \\ln 2, \\quad \\text{Gradient: } -\\dfrac{3}{4}$$",
                "feedback": "Check your derivative of $\\text{e}^{2x}$ with respect to $x$. By the chain rule, $\\dfrac{\\text{d}}{\\text{d}x}(\\text{e}^{2x}) = 2\\text{e}^{2x}$. It appears you may have missed this factor of 2 in your derivative of the first term."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Discarding Non-Physical Roots",
            "content": "When substituting values into equations containing exponentials to find coordinates, you will often encounter quadratic equations in terms of $\\text{e}^x$. Always remember that $\\text{e}^x > 0$ for all real $x$. This lets you immediately discard any negative quadratic roots before taking natural logarithms."
        }
    },
    {
        "id": "004278",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Differentiation",
        "subtopic": [
            "Implicit Differentiation",
            "Stationary Points"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A curve is defined implicitly by the equation:<br>$$x^2 - 2xy + 3y^2 = 8$$<br>1. Find an expression for $\\dfrac{\\text{d}y}{\\text{d}x}$ in terms of $x$ and $y$.<br>2. Hence, find the exact coordinates of the points on the curve where the tangent to the curve is parallel to the $x$-axis.",
        "steps": [
            "Differentiate each term of the curve's equation implicitly with respect to $x$, using the product rule for $-2xy$:<br>\\begin{aligned} \\dfrac{\\text{d}}{\\text{d}x}(x^2) - \\dfrac{\\text{d}}{\\text{d}x}(2xy) + \\dfrac{\\text{d}}{\\text{d}x}(3y^2) &= \\dfrac{\\text{d}}{\\text{d}x}(8) \\ 2x - 2\\left( y + x\\dfrac{\\text{d}y}{\\text{d}x} \\right) + 6y\\dfrac{\\text{d}y}{\\text{d}x} &= 0 \\ 2x - 2y - 2x\\dfrac{\\text{d}y}{\\text{d}x} + 6y\\dfrac{\\text{d}y}{\\text{d}x} &= 0 \\end{aligned}",
            "Group the $\\dfrac{\\text{d}y}{\\text{d}x}$ terms together and make it the subject of the formula:<br>\\begin{aligned} \\left(6y - 2x\\right)\\dfrac{\\text{d}y}{\\text{d}x} &= 2y - 2x \\ \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{2y - 2x}{6y - 2x} \\end{aligned}<br>Factor out and divide by 2 to simplify:<br>\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{y - x}{3y - x} \\end{aligned}",
            "A tangent parallel to the $x$-axis is a horizontal tangent, which occurs where the gradient is zero:<br>\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= 0 \\ \\dfrac{y - x}{3y - x} &= 0 \\ y - x &= 0 \\implies y = x \\end{aligned}",
            "Substitute $y = x$ back into the original curve's equation to find the corresponding coordinates:<br>\\begin{aligned} x^2 - 2x(x) + 3(x)^2 &= 8 \\ x^2 - 2x^2 + 3x^2 &= 8 \\ 2x^2 &= 8 \\ x^2 &= 4 \\end{aligned}<br>This gives $x = 2$ or $x = -2$.",
            "Since $y = x$, the points corresponding to these $x$-values are:<br>\\begin{aligned} x = 2 &\\implies y = 2 \\ x = -2 &\\implies y = -2 \\end{aligned}<br>Thus, the coordinates of the points with horizontal tangents are $(2, 2)$ and $(-2, -2)$.<br><br>Final Answer: $(2, 2)$ and $(-2, -2)$"
        ],
        "pi_options": [
            {
                "ans": "$$\\left(2\\sqrt{3}, \\dfrac{2\\sqrt{3}}{3}\\right) \\text{ and } \\left(-2\\sqrt{3}, -\\dfrac{2\\sqrt{3}}{3}\\right)$$",
                "feedback": "For a tangent parallel to the $x$-axis (horizontal tangent), the gradient $\\dfrac{\\text{d}y}{\\text{d}x}$ must equal 0. This requires the numerator of the derivative fraction to be zero ($y - x = 0$), not the denominator ($3y - x = 0$), which would correspond to a vertical tangent."
            },
            {
                "ans": "$$\\left(\\dfrac{2\\sqrt{3}}{3}, -\\dfrac{2\\sqrt{3}}{3}\\right) \\text{ and } \\left(-\\dfrac{2\\sqrt{3}}{3}, \\dfrac{2\\sqrt{3}}{3}\\right)$$",
                "feedback": "Check your differentiation of $-2xy$. Using the product rule, $\\dfrac{\\text{d}}{\\text{d}x}(-2xy) = -2y - 2x\\dfrac{\\text{d}y}{\\text{d}x}$. It appears you made a sign error, which led to substituting $y = -x$ instead of $y = x$ into the curve equation."
            },
            {
                "ans": "$$(\\sqrt{2}, \\sqrt{2}) \\text{ and } (-\\sqrt{2}, -\\sqrt{2})$$",
                "feedback": "Check your simplification of $x^2 - 2x^2 + 3x^2 = 8$. This simplifies to $2x^2 = 8$, leading to $x^2 = 4 \\implies x = \\pm 2$. It appears you may have incorrectly simplified the left side to $4x^2$."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Horizontal Tangents on Implicit Curves",
            "content": "Setting the numerator of $\\dfrac{\\text{d}y}{\\text{d}x}$ to zero to find horizontal tangents establishes a geometric relationship (here, $y = x$). However, you must always verify that this relationship does not simultaneously make the denominator zero. If both numerator and denominator are zero at a point, the derivative is undefined, indicating a sharp corner or singular point rather than a smooth horizontal tangent."
        }
    },
    {
        "id": "004279",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Differentiation",
        "subtopic": [
            "Implicit Differentiation",
            "Tangents and Normals"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A curve has the equation:<br>$$x^2y^2 - 3x + y^3 = 9$$<br>1. Verify that the point $P(1, 2)$ lies on the curve.<br>2. Find the equation of the normal to the curve at $P$. Give your answer in the form $ax + by + c = 0$, where $a$, $b$, and $c$ are integers to be found.",
        "steps": [
            "To verify that $P(1, 2)$ lies on the curve, substitute $x = 1$ and $y = 2$ into the left-hand side of the curve's equation:<br>\\begin{aligned} \\text{LHS} &= (1)^2(2)^2 - 3(1) + (2)^3 \\ &= 4 - 3 + 8 \\ &= 9 \\end{aligned}<br>Since $\\text{LHS} = \\text{RHS} = 9$, the point $P(1, 2)$ lies on the curve.",
            "Next, differentiate the equation of the curve implicitly with respect to $x$. Use the product rule on the term $x^2y^2$:<br>\\begin{aligned} \\dfrac{\\text{d}}{\\text{d}x}(x^2y^2) - \\dfrac{\\text{d}}{\\text{d}x}(3x) + \\dfrac{\\text{d}}{\\text{d}x}(y^3) &= \\dfrac{\\text{d}}{\\text{d}x}(9) \\ \\left( 2xy^2 + x^2 \\cdot 2y\\dfrac{\\text{d}y}{\\text{d}x} \\right) - 3 + 3y^2\\dfrac{\\text{d}y}{\\text{d}x} &= 0 \\ 2xy^2 - 3 + \\left( 2x^2y + 3y^2 \\right)\\dfrac{\\text{d}y}{\\text{d}x} &= 0 \\end{aligned}",
            "Rearrange the terms to make the gradient expression $\\dfrac{\\text{d}y}{\\text{d}x}$ the subject:<br>\\begin{aligned} \\left( 2x^2y + 3y^2 \\right)\\dfrac{\\text{d}y}{\\text{d}x} &= 3 - 2xy^2 \\ \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{3 - 2xy^2}{2x^2y + 3y^2} \\end{aligned}",
            "To find the gradient of the tangent at $P(1, 2)$, substitute $x = 1$ and $y = 2$ into the derivative:<br>\\begin{aligned} m_{\\text{tangent}} &= \\dfrac{3 - 2(1)(2)^2}{2(1)^2(2) + 3(2)^2} \\ &= \\dfrac{3 - 8}{4 + 12} \\ &= -\\dfrac{5}{16} \\end{aligned}",
            "The normal line is perpendicular to the tangent line. Find the gradient of the normal by taking the negative reciprocal of the tangent's gradient:<br>\\begin{aligned} m_{\\text{normal}} &= -\\dfrac{1}{m_{\\text{tangent}}} \\ &= -\\dfrac{1}{-\\frac{5}{16}} = \\dfrac{16}{5} \\end{aligned}",
            "Set up the equation of the normal line using the point-gradient formula $y - y_1 = m(x - x_1)$ at $P(1, 2)$:<br>\\begin{aligned} y - 2 &= \\dfrac{16}{5}(x - 1) \\end{aligned}<br>Multiply the entire equation by 5 to remove fractions, then rearrange into the form $ax + by + c = 0$:<br>\\begin{aligned} 5y - 10 &= 16x - 16 \\ 16x - 5y - 6 &= 0 \\end{aligned}<br><br>Final Answer: $16x - 5y - 6 = 0$"
        ],
        "pi_options": [
            {
                "ans": "$$5x + 16y - 37 = 0$$",
                "feedback": "This is the equation of the tangent line. Remember that the normal line is perpendicular to the tangent, so its gradient is the negative reciprocal of the tangent's gradient: $m_{\\text{normal}} = -\\dfrac{1}{m_{\\text{tangent}}} = \\dfrac{16}{5}$."
            },
            {
                "ans": "$$16x - 5y - 14 = 0$$",
                "feedback": "Check your algebraic expansion when multiplying the equation $y - 2 = \\dfrac{16}{5}(x - 1)$ by 5. You must multiply every term on the left side, which yields $5(y - 2) = 5y - 10$, not $5y - 2$."
            },
            {
                "ans": "$$16x + 5y - 26 = 0$$",
                "feedback": "Check your normal gradient calculation. The normal is perpendicular to the tangent, so its gradient is the negative reciprocal. Since the tangent gradient is negative ($-\\dfrac{5}{16}$), the normal gradient must be positive: $\\dfrac{16}{5}$ rather than $-\\dfrac{16}{5}$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Normal vs. Tangent Slips",
            "content": "It is an incredibly common and costly mistake in exam questions to write down the equation of the tangent line instead of the normal line. Always double-read whether the question demands the 'tangent' or the 'normal' before substituting your derivative into the straight-line equation, and apply $m_{\\text{normal}} = -\\dfrac{1}{m_{\\text{tangent}}}$ accordingly."
        }
    },
    {
        "id": "004280",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Differentiation",
        "subtopic": [
            "Implicit Differentiation",
            "Vertical Tangents"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The equation of a curve is:<br>$$2x^3 + y^3 = 6y$$<br>1. Show that the derivative of the curve is given by:<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{2x^2}{2 - y^2}$$<br>2. Find the exact coordinates of the points on the curve where the tangent is parallel to the $y$-axis.",
        "steps": [
            "Differentiate each term of the curve's equation implicitly with respect to $x$:<br>\\begin{aligned} \\dfrac{\\text{d}}{\\text{d}x}(2x^3) + \\dfrac{\\text{d}}{\\text{d}x}(y^3) &= \\dfrac{\\text{d}}{\\text{d}x}(6y) \\ 6x^2 + 3y^2\\dfrac{\\text{d}y}{\\text{d}x} &= 6\\dfrac{\\text{d}y}{\\text{d}x} \\end{aligned}",
            "Group the $\\dfrac{\\text{d}y}{\\text{d}x}$ terms together on one side to solve for the derivative:<br>\\begin{aligned} 6\\dfrac{\\text{d}y}{\\text{d}x} - 3y^2\\dfrac{\\text{d}y}{\\text{d}x} &= 6x^2 \\ \\left(6 - 3y^2\\right)\\dfrac{\\text{d}y}{\\text{d}x} &= 6x^2 \\ \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{6x^2}{6 - 3y^2} \\end{aligned}<br>Divide the numerator and denominator by 3 to simplify:<br>\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{2x^2}{2 - y^2} \\end{aligned}",
            "A tangent line parallel to the $y$-axis is a vertical tangent. This occurs where the gradient $\\dfrac{\\text{d}y}{\\text{d}x}$ is undefined, which means setting the denominator to zero:<br>\\begin{aligned} 2 - y^2 &= 0 \\ y^2 &= 2 \\implies y = \\pm\\sqrt{2} \\end{aligned}",
            "To find the $x$-coordinates, substitute $y = \\sqrt{2}$ and $y = -\\sqrt{2}$ back into the original curve's equation. <br><br>Case 1: Substitute $y = \\sqrt{2}$:<br>\\begin{aligned} 2x^3 + (\\sqrt{2})^3 &= 6(\\sqrt{2}) \\ 2x^3 + 2\\sqrt{2} &= 6\\sqrt{2} \\ 2x^3 &= 4\\sqrt{2} \\ x^3 &= 2\\sqrt{2} \\end{aligned}",
            "Solve for $x$ by rewriting the term as an index power: $2\\sqrt{2} = 2^1 \\cdot 2^{1/2} = 2^{3/2} = (\\sqrt{2})^3$. Taking the cube root gives:<br>\\begin{aligned} x &= \\sqrt{2} \\end{aligned}<br>This gives our first point of vertical tangency: $(\\sqrt{2}, \\sqrt{2})$.",
            "Case 2: Substitute $y = -\\sqrt{2}$ into the curve's equation:<br>\\begin{aligned} 2x^3 + (-\\sqrt{2})^3 &= 6(-\\sqrt{2}) \\ 2x^3 - 2\\sqrt{2} &= -6\\sqrt{2} \\ 2x^3 &= -4\\sqrt{2} \\ x^3 &= -2\\sqrt{2} \\end{aligned}<br>Taking the cube root gives:<br>\\begin{aligned} x &= -\\sqrt{2} \\end{aligned}<br>This gives our second point of vertical tangency: $(-\\sqrt{2}, -\\sqrt{2})$.<br><br>Final Answer: $(\\sqrt{2}, \\sqrt{2})$ and $(-\\sqrt{2}, -\\sqrt{2})$"
        ],
        "pi_options": [
            {
                "ans": "$$(2, \\sqrt{2}) \\text{ and } (-2, -\\sqrt{2})$$",
                "feedback": "Check your simplification of $x^3 = 2\\sqrt{2}$. Since $2\\sqrt{2} = (\\sqrt{2})^3$, taking the cube root yields $x = \\sqrt{2}$, not $x = 2$. Keep track of your fractional indices."
            },
            {
                "ans": "$$(0, 0), \\quad (0, \\sqrt{6}), \\quad (0, -\\sqrt{6})$$",
                "feedback": "For a tangent parallel to the $y$-axis (vertical tangent), the gradient is undefined, meaning the denominator of the derivative must be zero ($2 - y^2 = 0$), not the numerator ($2x^2 = 0$)."
            },
            {
                "ans": "$$(\\sqrt{2}, -\\sqrt{2}) \\text{ and } (-\\sqrt{2}, \\sqrt{2})$$",
                "feedback": "Check your sign evaluation during the substitution step. Substituting $y = -\\sqrt{2}$ into $2x^3 + y^3 = 6y$ yields $2x^3 - 2\\sqrt{2} = -6\\sqrt{2} \\implies 2x^3 = -4\\sqrt{2} \\implies x = -\\sqrt{2}$. It seems you made a sign error, resulting in a mixed sign point."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Thinking in Terms of dx/dy",
            "content": "To find points where the tangent is parallel to the $y$-axis (vertical tangents), we set the denominator of $\\dfrac{\\text{d}y}{\\text{d}x}$ equal to zero. Alternatively, you can think of this as finding where the reciprocal derivative $\\dfrac{\\text{d}x}{\\text{d}y}$ is equal to zero! Keeping this duality in mind can make handling vertical tangents much more intuitive."
        }
    },
    {
        "id": "004281",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Algebraic and Exponential Modeling",
        "subtopic": [
            "Quadratic Modeling",
            "Exponential Modeling",
            "Limiting Values"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>An A-Level Chemistry student, Bethany, records her score $s$ (out of 100) on a weekly practice quiz against $t$ hours of active preparation.<br><br>Over the course of a term, she notices that her score can be modeled by the quadratic formula:<br>$$s = P - Q(t - R)^2, \\quad t \\ge 0$$<br>where $P$, $Q$, and $R$ are positive constants.<br><ul><li>Bethany finds that her maximum score of $80$ is achieved when she spends exactly $3$ hours preparing.</li><li>On a week where she spent no time preparing ($t = 0$), she scored $35$.</li></ul><br>1. Find the values of the constants $P$, $Q$, and $R$.<br>2. According to this model, if Bethany prepares for $1$ hour and $30$ minutes, what score will she achieve?<br>3. Find the maximum amount of time that Bethany could have spent preparing for this quadratic model to remain valid (i.e., for $s \\ge 0$).<br><br>To improve her scores further, Bethany adopts a new study strategy using spaced repetition over several days. She proposes a new exponential model for her quiz score, $s$, after $t$ hours of spaced repetition:<br>$$s = 35 + 55\\left(1 - \\text{e}^{-0.5t}\\right)$$<br>For the next three quizzes, she records her study times and quiz results in the table below:<br><br><table style='width:60%; margin: 10px auto; border-collapse: collapse; text-align: center; border: 1px solid #ccc;'><tr style='border-bottom: 1px solid #ccc; background-color: #f9f9f9;'><th style='padding: 8px;'>$t$ (hours)</th><td style='padding: 8px;'>$2$</td><td style='padding: 8px;'>$4$</td><td style='padding: 8px;'>$6$</td></tr><tr><th style='padding: 8px;'>$s$ (score)</th><td style='padding: 8px;'>$70$</td><td style='padding: 8px;'>$83$</td><td style='padding: 8px;'>$87$</td></tr></table><br>4. Verify that Bethany's recorded data is consistent with her new exponential model.<br>5. Bethany's teacher advises her to spend at least $15$ hours preparing in future. By considering the limiting value of her score as $t$ becomes very large, determine whether this is good advice.",
        "steps": [
            "For a quadratic model of the form $s = P - Q(t - R)^2$, the vertex represents the maximum value. The maximum occurs at $t = R$ with value $s = P$.<br>Comparing this to the given information:<br>\\begin{aligned} R &= 3 \\ P &= 80 \\end{aligned}",
            "Substitute these values and the boundary point $(t, s) = (0, 35)$ into the quadratic equation to solve for $Q$:<br>\\begin{aligned} 35 &= 80 - Q(0 - 3)^2 \\ 35 &= 80 - 9Q \\ 9Q &= 45 \\ Q &= 5 \\end{aligned}<br>Thus, the constants are $P = 80$, $Q = 5$, and $R = 3$, giving the model equation:<br>$$s = 80 - 5(t - 3)^2$$",
            "To find the predicted score for $1$ hour and $30$ minutes, convert the time to hours ($t = 1.5$) and substitute it into the quadratic model:<br>\\begin{aligned} s &= 80 - 5(1.5 - 3)^2 \\ &= 80 - 5(-1.5)^2 \\ &= 80 - 5(2.25) \\ &= 80 - 11.25 = 68.75 \\end{aligned}<br>Bethany's predicted score is $68.75$.",
            "To find the maximum preparation time for which the quadratic model is valid, find when the predicted score remains non-negative ($s \\ge 0$):<br>\\begin{aligned} 80 - 5(t - 3)^2 &\\ge 0 \\ 80 &\\ge 5(t - 3)^2 \\ 16 &\\ge (t - 3)^2 \\end{aligned}<br>Taking square roots yields:<br>\\begin{aligned} -4 \\le t - 3 &\\le 4 \\ -1 \\le t &\\le 7 \\end{aligned}<br>Since preparation time must be non-negative ($t \\ge 0$), the maximum preparation time for the model to remain valid is $7$ hours.",
            "Verify the three experimental data points with the new exponential model $s = 35 + 55\\left(1 - \\text{e}^{-0.5t}\\right)$:<br><ul><li>For $t = 2$: $s = 35 + 55\\left(1 - \\text{e}^{-1}\\right) \\approx 35 + 55(1 - 0.3679) \\approx 69.77 \\approx 70$.</li><li>For $t = 4$: $s = 35 + 55\\left(1 - \\text{e}^{-2}\\right) \\approx 35 + 55(1 - 0.1353) \\approx 82.56 \\approx 83$.</li><li>For $t = 6$: $s = 35 + 55\\left(1 - \\text{e}^{-3}\\right) \\approx 35 + 55(1 - 0.0498) \\approx 87.26 \\approx 87$.</li></ul><br>Since all three calculated scores match the table values when rounded to the nearest integer, the recorded data is consistent with the model.",
            "To evaluate the teacher's advice, find the limiting value of the score as $t \\to \\infty$:<br>\\begin{aligned} \\lim_{t \\to \\infty} s &= \\lim_{t \\to \\infty} \\left[ 35 + 55\\left(1 - \\text{e}^{-0.5t}\\right) \\right] \\ &= 35 + 55(1 - 0) \\ &= 90 \\end{aligned}<br>At $t = 15$ hours, the predicted score is $s = 35 + 55\\left(1 - \\text{e}^{-7.5}\\right) \\approx 89.97$. This is exceptionally close to the ceiling limit of $90$. Since an extra $9$ hours of revision beyond $6$ hours only increases the score by roughly $3\\%$, the advice to study for at least $15$ hours is excessive and not efficient.<br><br>Final Answer: $P = 80, Q = 5, R = 3$; $t = 1.5 \\implies s = 68.75$; max validity time is $7$ hours; advice is not good due to diminishing returns."
        ],
        "pi_options": [
            {
                "ans": "$$P = 80, Q = 5, R = 3; \\quad t = 1.5 \\implies s = 77.5; \\quad \\text{Max validity time: } 7 \\text{ hours}$$",
                "feedback": "Check your substitution of $t = 1.5$ into the quadratic model. The term is $(t - 3)^2 = (-1.5)^2 = 2.25$. Make sure you square the negative difference before multiplying by $Q = 5$ and subtracting from $P = 80$."
            },
            {
                "ans": "$$P = 80, Q = 5, R = 3; \\quad t = 1.5 \\implies s = 68.75; \\quad \\text{Max validity time: } 19 \\text{ hours}$$",
                "feedback": "Check your step when solving the quadratic inequality $16 \\ge (t - 3)^2$. When taking the square root, you must set $-4 \\le t - 3 \\le 4$, which leads to $t \\le 7$. It seems you may have mistakenly calculated $16 + 3 = 19$."
            },
            {
                "ans": "$$P = 35, Q = 5, R = 3; \\quad t = 1.5 \\implies s = 23.75; \\quad \\text{Max validity time: } 7 \\text{ hours}$$",
                "feedback": "Check your assignment of the parameters $P$ and $s(0)$. The maximum score is achieved at the vertex, so $P = 80$ (maximum score) and $s(0) = 35$ (score with zero preparation). It seems you swapped these values."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Asymptotes and Limits",
            "content": "For any model of the form $y = A + B(1 - \\text{e}^{-kt})$ where $k > 0$, as $t \\to \\infty$, the exponential term $\\text{e}^{-kt}$ decays rapidly to $0$. This means the horizontal asymptote or ceiling of the model is always $A + B$. Recognising this structure allows you to immediately identify the limiting value without performing complex calculations."
        }
    },
    {
        "id": "004282",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Algebraic and Exponential Modeling",
        "subtopic": [
            "Cubic Optimization",
            "Stationary Points",
            "Applied Calculus"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A manufacturing business models its daily operating cost, $C$ (in hundreds of pounds), based on producing $x$ thousand units of a specific component:<br>$$C = x^3 - 9x^2 + 24x + 10, \\quad 0 \\le x \\le 5$$<br>1. Write down the daily operating cost of the business when no components are produced.<br>2. Use differentiation to find the production levels, $x$, that correspond to the stationary points on the cost curve, and determine the nature of each stationary point.<br>3. Use your results to find the minimum daily operating cost for the business when it is actively producing components (i.e. $x > 0$).",
        "steps": [
            "To find the cost when no components are produced, substitute $x = 0$ into the cost function:<br>\\begin{aligned} C(0) &= (0)^3 - 9(0)^2 + 24(0) + 10 \\ &= 10 \\end{aligned}<br>Since $C$ is measured in hundreds of pounds, the daily operating cost is $10 \\times 100 = £1,000$.",
            "Differentiate the cost function with respect to $x$ to find the first derivative:<br>\\begin{aligned} \\dfrac{\\text{d}C}{\\text{d}x} &= 3x^2 - 18x + 24 \\end{aligned}",
            "To find the stationary points, set the derivative to $0$ and solve for $x$:<br>\\begin{aligned} 3x^2 - 18x + 24 &= 0 \\ x^2 - 6x + 8 &= 0 \\ (x - 2)(x - 4) &= 0 \\end{aligned}<br>This yields two stationary production levels: $x = 2$ and $x = 4$.",
            "Determine the nature of the stationary points using the second derivative:<br>\\begin{aligned} \\dfrac{\\text{d}^2C}{\\text{d}x^2} &= 6x - 18 \\end{aligned}<br>Evaluate this at each stationary point:<ul><li>At $x = 2$: $\\dfrac{\\text{d}^2C}{\\text{d}x^2} = 6(2) - 18 = -6 < 0$ (Local Maximum)</li><li>At $x = 4$: $\\dfrac{\\text{d}^2C}{\\text{d}x^2} = 6(4) - 18 = 6 > 0$ (Local Minimum)</li></ul>",
            "To find the minimum operating cost when actively producing components ($x > 0$), evaluate the cost function at the local minimum $x = 4$:<br>\\begin{aligned} C(4) &= (4)^3 - 9(4)^2 + 24(4) + 10 \\ &= 64 - 144 + 96 + 10 \\ &= 26 \\end{aligned}<br>Since $C = 26$ represents hundreds of pounds, the minimum daily operating cost during active production is $26 \\times 100 = £2,600$.<br><br>Final Answer: Cost is £1,000 when $x = 0$; stationary points at $x = 2$ (local max) and $x = 4$ (local min); minimum cost during active production is £2,600."
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Initial Cost: } £10; \\quad x = 2 \\text{ (max)}, x = 4 \\text{ (min)}; \\quad \\text{Minimum Cost: } £26$$",
                "feedback": "Check the units defined in the problem. The cost $C$ is measured in hundreds of pounds, so $C = 10$ and $C = 26$ correspond to £1,000 and £2,600 respectively, not £10 and £26."
            },
            {
                "ans": "$$\\text{Initial Cost: } £1,000; \\quad x = 2 \\text{ (min)}, x = 4 \\text{ (max)}; \\quad \\text{Minimum Cost: } £3,000$$",
                "feedback": "Check your second derivative evaluation. At $x = 4$, $\\dfrac{\\text{d}^2C}{\\text{d}x^2} = 6 > 0$, which signifies a local minimum. It seems you swapped the classifications of the maximum and minimum points."
            },
            {
                "ans": "$$\\text{Initial Cost: } £1,000; \\quad x = 3 \\text{ and } x = 8; \\quad \\text{Minimum Cost: } £2,600$$",
                "feedback": "Check your factoring steps for the quadratic equation $3x^2 - 18x + 24 = 0$. After dividing by 3 to get $x^2 - 6x + 8 = 0$, the roots are $x = 2$ and $x = 4$, since $(-2) \\times (-4) = 8$ and $(-2) + (-4) = -6$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Boundaries vs. Local Extrema",
            "content": "When asked to find the minimum of a real-world modeling function on a closed interval (such as $0 \\le x \\le 5$), mathematically you must check both the local minima and the boundary values. At $x = 0$, the cost is technically lower (£1,000), but this represents zero production. Always read carefully to see if the question restricts active production to $x > 0$."
        }
    },
    {
        "id": "004283",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Algebraic and Exponential Modeling",
        "subtopic": [
            "Exponential Decay",
            "Solving with Logarithms",
            "Newton's Law of Cooling"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The temperature, $\\theta$ (in $^\\circ\\text{C}$), of a cup of coffee left in a room $t$ minutes after being poured is modeled by the equation:<br>$$\\theta = T_R + (\\theta_0 - T_R)\\text{e}^{-kt}, \\quad t \\ge 0$$<br>where $T_R$ is the constant room temperature, $\\theta_0$ is the initial temperature of the coffee, and $k$ is a positive constant.<br><ul><li>The room temperature is constant at $20^\\circ\\text{C}$.</li><li>The coffee is initially poured at $85^\\circ\\text{C}$.</li><li>After $10$ minutes, the coffee has cooled to $55^\\circ\\text{C}$.</li></ul><br>1. Find the exact value of the constant $k$, giving your answer in the form $a \\ln b$ where $a$ and $b$ are rational numbers.<br>2. According to this model, what will the temperature of the coffee be after $20$ minutes?<br>3. Find the time taken, in minutes, for the coffee to cool to $35^\\circ\\text{C}$. Give your answer to $1$ decimal place.",
        "steps": [
            "Substitute the known constants $T_R = 20$ and $\\theta_0 = 85$ into the model equation:<br>\\begin{aligned} \\theta &= 20 + (85 - 20)\\text{e}^{-kt} \\ \\theta &= 20 + 65\\text{e}^{-kt} \\end{aligned}",
            "To find $k$, use the point $t = 10$ and $\\theta = 55$, then solve the exponential equation using logarithms:<br>\\begin{aligned} 55 &= 20 + 65\\text{e}^{-10k} \\ 35 &= 65\\text{e}^{-10k} \\ \\dfrac{7}{13} &= \\text{e}^{-10k} \\ \\ln\\left(\\dfrac{7}{13}\\right) &= -10k \\ k &= -\\dfrac{1}{10}\\ln\\left(\\dfrac{7}{13}\\right) = \\dfrac{1}{10}\\ln\\left(\\dfrac{13}{7}\\right) \\end{aligned}",
            "To find the temperature after $20$ minutes, substitute $t = 20$ into the model. Since $e^{-10k} = \\dfrac{7}{13}$, write the exponential term as a power of this known constant:<br>\\begin{aligned} \\theta(20) &= 20 + 65\\text{e}^{-20k} \\ &= 20 + 65\\left(\\text{e}^{-10k}\\right)^2 \\ &= 20 + 65\\left(\\dfrac{7}{13}\\right)^2 \\ &= 20 + 65\\left(\\dfrac{49}{169}\\right) \\end{aligned}",
            "Simplify this fraction to find the exact temperature after 20 minutes:<br>\\begin{aligned} \\theta(20) &= 20 + 5\\left(\\dfrac{49}{13}\\right) \\ &= 20 + \\dfrac{245}{13} \\ &= \\dfrac{260}{13} + \\dfrac{245}{13} = \\dfrac{505}{13} \\approx 38.8^\\circ\\text{C} \\end{aligned}",
            "To find when the coffee cools to $35^\\circ\\text{C}$, set $\\theta = 35$ and solve for $t$:<br>\\begin{aligned} 35 &= 20 + 65\\text{e}^{-kt} \\ 15 &= 65\\text{e}^{-kt} \\ \\dfrac{3}{13} &= \\text{e}^{-kt} \\ \\ln\\left(\\dfrac{3}{13}\\right) &= -kt \\ t &= -\\dfrac{1}{k}\\ln\\left(\\dfrac{3}{13}\\right) = \\dfrac{1}{k}\\ln\\left(\\dfrac{13}{3}\\right) \\end{aligned}",
            "Substitute the exact value $k = \\dfrac{1}{10}\\ln\\left(\\dfrac{13}{7}\\right)$ to compute $t$:<br>\\begin{aligned} t &= \\dfrac{10\\ln\\left(\\dfrac{13}{3}\\right)}{\\ln\\left(\\dfrac{13}{7}\\right)} \\ &\\approx \\dfrac{10 \\times 1.4663}{0.6190} \\ &\\approx 24.368 \\approx 24.4 \\text{ minutes} \\end{aligned}<br><br>Final Answer: $k = \\dfrac{1}{10}\\ln\\left(\\dfrac{13}{7}\\right)$; temperature is $\\dfrac{505}{13}^\\circ\\text{C} \\approx 38.8^\\circ\\text{C}$; time taken is $24.4$ minutes."
        ],
        "pi_options": [
            {
                "ans": "$$k = -\\dfrac{1}{10}\\ln\\left(\\dfrac{13}{7}\\right); \\quad \\theta(20) = 38.8^\\circ\\text{C}; \\quad t = 24.4 \\text{ minutes}$$",
                "feedback": "Check the sign of your constant $k$. Since the model has a negative exponent built in as $-kt$, the decay constant $k$ must be a positive number. Using the identity $-\\ln\\left(\\dfrac{7}{13}\\right) = \\ln\\left(\\dfrac{13}{7}\\right)$, we find $k = \\dfrac{1}{10}\\ln\\left(\\dfrac{13}{7}\\right)$."
            },
            {
                "ans": "$$k = \\dfrac{1}{10}\\ln\\left(\\dfrac{13}{7}\\right); \\quad \\theta(20) = 45.2^\\circ\\text{C}; \\quad t = 24.4 \\text{ minutes}$$",
                "feedback": "Check your calculation for $\\theta(20)$. Make sure you square the exponential base $\\text{e}^{-10k} = \\dfrac{7}{13}$ because $\\text{e}^{-20k} = (\\text{e}^{-10k})^2 = \\dfrac{49}{169}$. It appears you may have multiplied by $\\dfrac{7}{13}$ directly without squaring."
            },
            {
                "ans": "$$k = \\dfrac{1}{10}\\ln\\left(\\dfrac{13}{7}\\right); \\quad \\theta(20) = 38.8^\\circ\\text{C}; \\quad t = 14.7 \\text{ minutes}$$",
                "feedback": "Check your calculation when dividing by $k$. Remember that $t = \\dfrac{10 \\ln(13/3)}{\\ln(13/7)}$. Make sure your fraction structure is set up as a division of natural logarithms rather than subtracting them."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Avoiding Mid-Calculation Rounding",
            "content": "To prevent rounding errors propagating through your answers, avoid converting constants like $k$ to decimal approximations early in your working. Keeping values in their exact form—such as using the relationship $\\text{e}^{-20k} = \\left(\\text{e}^{-10k}\\right)^2 = \\left(\\dfrac{7}{13}\\right)^2$—allows you to compute secondary parts with integer arithmetic, keeping your calculations precise."
        }
    },
    {
        "id": "004284",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Algebraic and Exponential Modeling",
        "subtopic": [
            "Logistic Models",
            "Limiting Values",
            "Algebraic Exponentials"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The population, $P$, of a rare species of bird introduced to a nature reserve $t$ years after introduction is modeled by the formula:<br>$$P = \\dfrac{1200}{1 + 5\\text{e}^{-0.4t}}, \\quad t \\ge 0$$<br>1. Find the initial population of birds introduced to the reserve.<br>2. Show that after $5$ years, the bird population is approximately $715$ birds.<br>3. State the limiting value of the bird population as $t$ becomes very large, and explain briefly what this represents physically.<br>4. Calculate the time, $t$, at which the bird population reaches $1000$. Give your answer to $1$ decimal place.",
        "steps": [
            "To find the initial population, substitute $t = 0$ into the logistic formula:<br>\\begin{aligned} P(0) &= \\dfrac{1200}{1 + 5\\text{e}^{0}} \\ &= \\dfrac{1200}{1 + 5(1)} \\ &= \\dfrac{1200}{6} = 200 \\end{aligned}<br>The initial population introduced is $200$ birds.",
            "To find the population after $5$ years, substitute $t = 5$:<br>\\begin{aligned} P(5) &= \\dfrac{1200}{1 + 5\\text{e}^{-0.4(5)}} \\ &= \\dfrac{1200}{1 + 5\\text{e}^{-2}} \\end{aligned}",
            "Use the approximation $\\text{e}^{-2} \\approx 0.1353$ to evaluate the expression:<br>\\begin{aligned} P(5) &\\approx \\dfrac{1200}{1 + 5(0.1353)} \\ &\\approx \\dfrac{1200}{1 + 0.6765} \\ &\\approx \\dfrac{1200}{1.6765} \\approx 715.78 \\end{aligned}<br>Rounding to the nearest whole number gives $716$ birds, which is approximately $715$ birds.",
            "Find the limiting value of $P$ as $t \\to \\infty$. As $t$ becomes very large, the term $\\text{e}^{-0.4t}$ approaches $0$:<br>\\begin{aligned} \\lim_{t \\to \\infty} P &= \\dfrac{1200}{1 + 5(0)} \\ &= \\dfrac{1200}{1} = 1200 \\end{aligned}<br>In a physical context, this carrying capacity of $1,200$ represents the maximum sustainable population of this bird species that the reserve's resources can support.",
            "To find when the population reaches $1000$ birds, set $P = 1000$ and solve for $t$:<br>\\begin{aligned} 1000 &= \\dfrac{1200}{1 + 5\\text{e}^{-0.4t}} \\ 1 + 5\\text{e}^{-0.4t} &= \\dfrac{1200}{1000} = 1.2 \\ 5\\text{e}^{-0.4t} &= 0.2 \\ \\text{e}^{-0.4t} &= 0.04 \\end{aligned}",
            "Take natural logarithms of both sides to isolate $t$:<br>\\begin{aligned} -0.4t &= \\ln(0.04) \\ t &= -\\dfrac{\\ln(0.04)}{0.4} \\ &\\approx -\\dfrac{-3.2189}{0.4} \\ &\\approx 8.047 \\approx 8.0 \\text{ years} \\end{aligned}<br><br>Final Answer: Initial population is $200$; population after $5$ years is $\\approx 716$ (approximately $715$); carrying capacity is $1,200$ birds; population reaches $1,000$ after $8.0$ years."
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Initial: } 240; \\quad P(5) \\approx 715; \\quad \\text{Limit: } 1,200; \\quad t = 8.0 \\text{ years}$$",
                "feedback": "Check your evaluation of $P(0)$ when $t = 0$. Since $\\text{e}^0 = 1$, the denominator is $1 + 5(1) = 6$. It seems you may have neglected the $+ 1$ in the denominator and divided by 5, leading to $\\dfrac{1200}{5} = 240$."
            },
            {
                "ans": "$$\\text{Initial: } 200; \\quad P(5) \\approx 715; \\quad \\text{Limit: } 1,200; \\quad t = 3.5 \\text{ years}$$",
                "feedback": "Check your algebraic rearrangement when isolating $\\text{e}^{-0.4t}$. From $5\\text{e}^{-0.4t} = 0.2$, dividing by 5 yields $\\text{e}^{-0.4t} = 0.04$. It seems you may have subtracted 5 instead of dividing, which led to an incorrect time value."
            },
            {
                "ans": "$$\\text{Initial: } 200; \\quad P(5) \\approx 715; \\quad \\text{Limit: } 200; \\quad t = 8.0 \\text{ years}$$",
                "feedback": "Check your limiting value. As $t \\to \\infty$, the term $\\text{e}^{-0.4t}$ decays to $0$, meaning the denominator approaches $1 + 0 = 1$. The limit of the fraction is therefore $\\dfrac{1200}{1} = 1200$. It seems you may have mistakenly evaluated the limit as $t \\to 0$."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Logistic Growth and Carrying Capacity",
            "content": "This formula represents a logistic growth curve (or sigmoid function). Unlike simple exponential growth models which increase indefinitely, the denominator of a logistic model grows over time, creating a self-limiting S-shaped curve. The upper limit as $t \\to \\infty$ is known as the environmental carrying capacity, representing the maximum population size that the ecosystem can support."
        }
    },
    {
        "id": "004285",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Algebraic and Exponential Modeling",
        "subtopic": [
            "Quadratic Functions",
            "Vertex Form",
            "Solving Quadratics"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The height, $h$ (in metres), of a small rocket launched vertically from a platform $t$ seconds after launch is modeled by the quadratic function:<br>$$h = h_0 + ut - 5t^2, \\quad t \\ge 0$$<br>where $h_0$ is the launch height of the platform and $u$ is the initial vertical velocity.<br><ul><li>The launch platform has a height of $15$ metres.</li><li>The rocket reaches a maximum height of $35$ metres.</li></ul><br>1. State the value of $h_0$, and show that the initial vertical velocity of the rocket is $u = 20\\text{ m/s}$.<br>2. Write down the time, $t$, at which the rocket reaches its maximum height.<br>3. Find the total time of the rocket's flight before it impacts the ground ($h = 0$). Give your answer in exact surd form.",
        "steps": [
            "The launch height is the height at $t = 0$. Since the platform has a height of $15$ metres:<br>\\begin{aligned} h_0 &= 15 \\end{aligned}<br>This gives the height function: $h = 15 + ut - 5t^2$.",
            "The maximum height of a quadratic curve of the form $h(t) = at^2 + bt + c$ occurs at its vertex, where the time is given by $t = -\\dfrac{b}{2a}$:<br>\\begin{aligned} t_{\\text{max}} &= -\\dfrac{u}{2(-5)} = \\dfrac{u}{10} \\end{aligned}",
            "Substitute $t = \\dfrac{u}{10}$ and $h = 35$ into the height equation to solve for the initial velocity $u$:<br>\\begin{aligned} 35 &= 15 + u\\left(\\dfrac{u}{10}\\right) - 5\\left(\\dfrac{u}{10}\\right)^2 \\ 35 &= 15 + \\dfrac{u^2}{10} - 5\\left(\\dfrac{u^2}{100}\\right) \\ 20 &= \\dfrac{u^2}{10} - \\dfrac{u^2}{20} \\ 20 &= \\dfrac{u^2}{20} \\ u^2 &= 400 \\implies u = 20 \\end{aligned}<br>Thus, the initial velocity is $u = 20\\text{ m/s}$ (taking the positive root for an upward launch).",
            "Now substitute $u = 20$ back into our expression for the vertex time to find when the rocket reaches its maximum height:<br>\\begin{aligned} t_{\\text{max}} &= \\dfrac{u}{10} \\ &= \\dfrac{20}{10} = 2 \\text{ seconds} \\end{aligned}",
            "To find the total flight time, set the height to zero ($h = 0$) and solve the quadratic equation using the quadratic formula:<br>\\begin{aligned} -5t^2 + 20t + 15 &= 0 \\ 5t^2 - 20t - 15 &= 0 \\ t^2 - 4t - 3 &= 0 \\end{aligned}",
            "Apply the quadratic formula to solve for $t$:<br>\\begin{aligned} t &= \\dfrac{-(-4) \\pm \\sqrt{(-4)^2 - 4(1)(-3)}}{2(1)} \\ &= \\dfrac{4 \\pm \\sqrt{16 + 12}}{2} \\ &= \\dfrac{4 \\pm \\sqrt{28}}{2} \\ &= \\dfrac{4 \\pm 2\\sqrt{7}}{2} = 2 \\pm \\sqrt{7} \\end{aligned}<br>Since time must be positive ($t \\ge 0$), we reject $t = 2 - \\sqrt{7} \\approx -0.65$. The total flight time of the rocket is $2 + \\sqrt{7}$ seconds.<br><br>Final Answer: $h_0 = 15$ and $u = 20$; maximum height is reached at $t = 2$ seconds; total flight time is $2 + \\sqrt{7}$ seconds."
        ],
        "pi_options": [
            {
                "ans": "$$h_0 = 15, u = 20; \\quad t_{\\text{max}} = 2; \\quad t_{\\text{flight}} = 2 + \\sqrt{13} \\text{ seconds}$$",
                "feedback": "Check your quadratic formula calculation when solving $t^2 - 4t - 3 = 0$. The discriminant is $b^2 - 4ac = (-4)^2 - 4(1)(-3) = 16 + 12 = 28$. It appears you may have made a sign error and calculated $16 - 12 = 4$ or used a different value inside the square root."
            },
            {
                "ans": "$$h_0 = 15, u = 20; \\quad t_{\\text{max}} = 4; \\quad t_{\\text{flight}} = 2 + \\sqrt{7} \\text{ seconds}$$",
                "feedback": "Check your calculation for the vertex time. The time is given by $t = \\dfrac{u}{10} = \\dfrac{20}{10} = 2$ seconds. It seems you may have calculated $\\dfrac{u}{5} = \\dfrac{20}{5} = 4$ seconds."
            },
            {
                "ans": "$$h_0 = 15, u = 40; \\quad t_{\\text{max}} = 2; \\quad t_{\\text{flight}} = 2 + \\sqrt{7} \\text{ seconds}$$",
                "feedback": "Check your algebraic step when combining the $u^2$ terms. Note that $\\dfrac{u^2}{10} - \\dfrac{u^2}{20} = \\dfrac{u^2}{20}$. It appears you may have simplified this as $\\dfrac{u^2}{10}$ directly, which would result in $u^2 = 200 \\implies u \\approx 14$ or a different value."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Fast Quadratic Vertices",
            "content": "For any quadratic height model of the form $h(t) = h_0 + ut - kt^2$ (where $k > 0$ represents half the local gravitational acceleration), the maximum height always occurs at $t = \\dfrac{u}{2k}$. Remembering this simple ratio is an incredibly quick way to find the stationary point without needing to perform formal differentiation or complete the square."
        }
    },
    {
    "id": "004286",
    "board": "OCR MEI",
    "level": "A",
    "major_area": "Calculus",
    "topic": "Differential Equations",
    "subtopic": [
        "Partial Fractions",
        "Separation of Variables",
        "First-Order Differential Equations"
    ],
    "img": false,
    "question": "In this question you must show detailed reasoning.<br><br>It is given that:<br>$$f(x) = \\dfrac{x^2 + 4x + 4}{(x - 2)(x^2 + 4)}$$<br>1. Express $f(x)$ in partial fractions.<br>2. Solve the differential equation:<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = y f(x)$$<br>giving your answer in the form $y = g(x)$, subject to the boundary condition $y = 2$ when $x = 0$.",
    "steps": [
        "Set up the partial fraction decomposition for a linear factor and an irreducible quadratic factor:<br>\\begin{aligned} \\dfrac{x^2 + 4x + 4}{(x - 2)(x^2 + 4)} &= \\dfrac{A}{ x - 2 } + \\dfrac{Bx + C}{ x^2 + 4 } \\end{aligned}<br>Multiply both sides by the common denominator to obtain the identity:<br>\\begin{aligned} x^2 + 4x + 4 &= A( x^2 + 4 ) + (Bx + C)( x - 2 ) \\end{aligned}",
        "To solve for $A$, substitute $x = 2$ into the identity:<br>\\begin{aligned} (2)^2 + 4(2) + 4 &= A((2)^2 + 4) + (2B + C)(0) \\ 16 &= 8A \\ A &= 2 \\end{aligned}",
        "Substitute $A = 2$ back into the identity and expand the right-hand side to solve for $B$ and $C$ by equating coefficients:<br>\\begin{aligned} x^2 + 4x + 4 &= 2( x^2 + 4 ) + (Bx + C)( x - 2 ) \\ x^2 + 4x + 4 &= 2x^2 + 8 + Bx^2 - 2Bx + Cx - 2C \\ x^2 + 4x + 4 &= (2 + B)x^2 + (C - 2B)x + (8 - 2C) \\end{aligned}<br>Equating coefficients:<ul><li>For $x^2$: $2 + B = 1 \\implies B = -1$</li><li>For the constant: $8 - 2C = 4 \\implies 2C = 4 \\implies C = 2$</li></ul>Thus, the partial fraction expression is:<br>$$f(x) = \\dfrac{2}{ x - 2 } + \\dfrac{2 - x}{ x^2 + 4 }$$",
        "To solve the differential equation $\\dfrac{\\text{d}y}{\\text{d}x} = y f(x)$, separate the variables and integrate both sides:<br>\\begin{aligned} \\int \\dfrac{1}{y} \\,\\text{d}y &= \\int f(x) \\,\\text{d}x \\ \\int \\dfrac{1}{y} \\,\\text{d}y &= \\int \\left( \\dfrac{2}{ x - 2 } + \\dfrac{2}{ x^2 + 4 } - \\dfrac{x}{ x^2 + 4 } \\right) \\,\\text{d}x \\end{aligned}",
        "Perform the integration on each term on the right-hand side carefully, using the standard log integrals and the inverse tangent rule:<br>\\begin{aligned} \\ln|y| &= 2\\ln|x - 2| + \\arctan\\left(\\dfrac{x}{2}\\right) - \\dfrac{1}{2}\\ln( x^2 + 4 ) + c \\end{aligned}<br>Combine the logarithmic terms using standard log laws:<br>\\begin{aligned} \\ln|y| &= \\ln\\left( \\dfrac{(x - 2)^2}{\\sqrt{ x^2 + 4 }} \\right) + \\arctan\\left(\\dfrac{x}{2}\\right) + c \\end{aligned}",
        "Exponentiate both sides to write the general solution in terms of a constant $K = \\text{e}^c$:<br>\\begin{aligned} y &= K \\dfrac{(x - 2)^2}{\\sqrt{ x^2 + 4 }} \\text{e}^{\\arctan(x/2)} \\end{aligned}",
        "Apply the boundary condition $y = 2$ when $x = 0$ to solve for $K$:<br>\\begin{aligned} 2 &= K \\dfrac{(0 - 2)^2}{\\sqrt{ 0^2 + 4 }} \\text{e}^{\\arctan(0)} \\ 2 &= K \\left( \\dfrac{4}{2} \\right) (1) \\ 2 &= 2K \\implies K = 1 \\end{aligned}<br>Substituting $K = 1$ back into the general solution yields:<br>$$y = \\dfrac{(x - 2)^2}{\\sqrt{ x^2 + 4 }} \\text{e}^{\\arctan(x/2)}$$<br><br>Final Answer: $y = \\dfrac{(x - 2)^2}{\\sqrt{ x^2 + 4 }} \\text{e}^{\\arctan(x/2)}$"
    ],
    "pi_options": [
        {
            "ans": "$$y = \\dfrac{(x - 2)^2}{\\sqrt{ x^2 + 4 }} \\text{e}^{2\\arctan(x/2)}$$",
            "feedback": "Check your integration of the term $\\dfrac{2}{ x^2 + 4 }$. Recall the standard integration formula $\\int \\dfrac{1}{ x^2 + a^2 } \\text{d}x = \\dfrac{1}{a}\\arctan\\left(\\dfrac{x}{a}\\right)$. Since $a = 2$, this integral is $\\dfrac{2}{2}\\arctan\\left(\\dfrac{x}{2}\\right) = \\arctan\\left(\\dfrac{x}{2}\\right)$, not $2\\arctan\\left(\\dfrac{x}{2}\\right)$."
        },
        {
            "ans": "$$y = \\dfrac{x - 2}{\\sqrt{ x^2 + 4 }} \\text{e}^{\\arctan(x/2)}$$",
            "feedback": "Check your partial fractions decomposition. Ensure you set up the linear numerator for the quadratic denominator as $Bx + C$. Equating coefficients should yield $A = 2, B = -1, C = 2$, not $A = 1, B = 0, C = 4$."
        },
        {
            "ans": "$$y = 2 \\dfrac{(x - 2)^2}{\\sqrt{ x^2 + 4 }} \\text{e}^{\\arctan(x/2)}$$",
            "feedback": "Check your evaluation of the constant of integration $K$ using the boundary condition $y = 2$ when $x = 0$. Substituting $x = 0$ yields $2 = K \\dfrac{(-2)^2}{\\sqrt{4}} \\text{e}^0 \\implies 2 = 2K \\implies K = 1$. It appears you may have incorrectly evaluated $K = 2$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Splitting Complex Fractions",
        "content": "When integrating terms like $\\dfrac{2 - x}{ x^2 + 4 }$, you must split the fraction into two distinct parts: $\\dfrac{-x}{ x^2 + 4 }$ and $\\dfrac{2}{ x^2 + 4 }$. The first part integrates to a natural logarithm using the standard substitution rule $\\int \\dfrac{f'(x)}{f(x)}\\text{d}x$, while the second part integrates directly to an inverse tangent (arctan) function. Attempting to integrate them as a single entity is a common barrier to progress."
    }
},
    {
        "id": "004287",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Differential Equations",
        "subtopic": [
            "Partial Fractions",
            "Repeated Roots",
            "Separation of Variables"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Let $f(x) = \\dfrac{x^2 - x + 2}{x(x - 1)^2}$.<br><br>1. Express $f(x)$ in partial fractions of the form:<br>$$\\dfrac{A}{x} + \\dfrac{B}{x - 1} + \\dfrac{C}{(x - 1)^2}$$<br>where $A$, $B$, and $C$ are integers to be found.<br>2. Hence, solve the differential equation:<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\text{e}^{-y} f(x)$$<br>expressing $y$ in terms of $x$, given that $y = 0$ when $x = 2$.",
        "steps": [
            "Write the algebraic identity for the decomposition of repeated linear roots:<br>\\begin{aligned} \\dfrac{x^2 - x + 2}{x(x - 1)^2} &= \\dfrac{A}{x} + \\dfrac{B}{x - 1} + \\dfrac{C}{(x - 1)^2} \\end{aligned}<br>Multiply by the common denominator to obtain:<br>\\begin{aligned} x^2 - x + 2 &= A(x - 1)^2 + Bx(x - 1) + Cx \\end{aligned}",
            "Find the constants by choosing convenient values for $x$:<ul><li>Set $x = 1$: $(1)^2 - 1 + 2 = C(1) \\implies C = 2$</li><li>Set $x = 0$: $(0)^2 - 0 + 2 = A(-1)^2 \\implies A = 2$</li></ul>Substitute $A = 2$ and equate coefficients of $x^2$ to find $B$:<br>\\begin{aligned} A + B &= 1 \\ 2 + B &= 1 \\implies B = -1 \\end{aligned}<br>This gives the partial fractions:<br>$$f(x) = \\dfrac{2}{x} - \\dfrac{1}{x - 1} + \\dfrac{2}{(x - 1)^2}$$",
            "To solve the differential equation $\\dfrac{\\text{d}y}{\\text{d}x} = \\text{e}^{-y} f(x)$, separate the variables and integrate both sides:<br>\\begin{aligned} \\int \\text{e}^y \\,\\text{d}y &= \\int f(x) \\,\\text{d}x \\ \\int \\text{e}^y \\,\\text{d}y &= \\int \\left( \\dfrac{2}{x} - \\dfrac{1}{x - 1} + \\dfrac{2}{(x - 1)^2} \\right) \\,\\text{d}x \\end{aligned}",
            "Integrate both sides of the equation. Use the power rule for the repeated linear term: $\\int 2(x-1)^{-2} \\,\\text{d}x = -2(x-1)^{-1}$:<br>\\begin{aligned} \\text{e}^y &= 2\\ln|x| - \\ln|x - 1| - \\dfrac{2}{x - 1} + c \\end{aligned}",
            "Apply the boundary condition $y = 0$ when $x = 2$ to find the constant $c$:<br>\\begin{aligned} \\text{e}^0 &= 2\\ln(2) - \\ln(1) - \\dfrac{2}{2 - 1} + c \\ 1 &= 2\\ln 2 - 0 - 2 + c \\ c &= 3 - 2\\ln 2 \\end{aligned}",
            "Substitute $c$ back into the equation and solve for $y$ by taking the natural logarithm of both sides:<br>\\begin{aligned} \\text{e}^y &= 2\\ln|x| - \\ln|x - 1| - \\dfrac{2}{x - 1} + 3 - 2\\ln 2 \\ y &= \\ln\\left( 2\\ln|x| - \\ln|x - 1| - \\dfrac{2}{x - 1} + 3 - 2\\ln 2 \\right) \\end{aligned}<br><br>Final Answer: $y = \\ln\\left( 2\\ln|x| - \\ln|x - 1| - \\dfrac{2}{x - 1} + 3 - 2\\ln 2 \\right)$"
        ],
        "pi_options": [
            {
                "ans": "$$y = \\ln\\left( 2\\ln|x| - \\ln|x - 1| + \\dfrac{2}{x - 1} + 3 - 2\\ln 2 \\right)$$",
                "feedback": "Check your integration of the term $\\dfrac{2}{(x-1)^2}$. Since $\\int u^{-2} \\text{d}u = -u^{-1}$, the integral of $2(x-1)^{-2}$ is $-\\dfrac{2}{x-1}$, not $+\\dfrac{2}{x-1}$."
            },
            {
                "ans": "$$y = \\ln\\left( 2\\ln|x| - \\ln|x - 1| - \\dfrac{2}{x - 1} + 1 - 2\\ln 2 \\right)$$",
                "feedback": "Check your evaluation of the constant $c$ when applying the boundary condition $y(2) = 0 \\implies \\text{e}^0 = 1$. Substituting $x=2$ gives $1 = 2\\ln 2 - 2 + c \\implies c = 3 - 2\\ln 2$. It seems you may have missed adding the 2 to the left-hand side."
            },
            {
                "ans": "$$y = 2\\ln|x| - \\ln|x - 1| - \\dfrac{2}{x - 1} + 3 - 2\\ln 2$$",
                "feedback": "Remember that integrating $\\text{e}^y \\text{d}y$ yields $\\text{e}^y$, not $y$. To find $y$ in terms of $x$, you must take the natural logarithm of both sides of your integrated equation."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Repeated Factors and Log Traps",
            "content": "A common mistake when integrating rational fractions is assuming that every single fractional term integrates to a natural logarithm. While linear terms like $\\dfrac{1}{x-1}$ integrate to $\\ln|x-1|$, terms with higher powers like $\\dfrac{2}{(x-1)^2}$ must be rewritten using negative indices as $2(x-1)^{-2}$ and integrated using the standard polynomial power rule."
        }
    },
    {
        "id": "004288",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Differential Equations",
        "subtopic": [
            "Partial Fractions",
            "Three Linear Factors",
            "Separation of Variables"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The function $f(x)$ is given by:<br>$$f(x) = \\dfrac{x^2 - 5x}{(x - 1)(x - 2)(x - 3)}$$<br>1. Express $f(x)$ in partial fractions.<br>2. Solve the differential equation:<br>$$y\\dfrac{\\text{d}y}{\\text{d}x} = f(x)$$<br>expressing $y^2$ in terms of $x$, subject to the boundary condition $y = 4$ when $x = 4$.",
        "steps": [
            "Set up the partial fraction decomposition for three distinct linear factors:<br>\\begin{aligned} \\dfrac{x^2 - 5x}{(x - 1)(x - 2)(x - 3)} &= \\dfrac{A}{x - 1} + \\dfrac{B}{x - 2} + \\dfrac{C}{x - 3} \\end{aligned}<br>Multiply both sides by the common denominator:<br>\\begin{aligned} x^2 - 5x &= A(x - 2)(x - 3) + B(x - 1)(x - 3) + C(x - 1)(x - 2) \\end{aligned}",
            "Solve for the parameters $A$, $B$, and $C$ by substituting the roots:<ul><li>Set $x = 1$: $-4 = A(-1)(-2) \\implies 2A = -4 \\implies A = -2$</li><li>Set $x = 2$: $-6 = B(1)(-1) \\implies -B = -6 \\implies B = 6$</li><li>Set $x = 3$: $-6 = C(2)(1) \\implies 2C = -6 \\implies C = -3$</li></ul>Thus, the partial fractions are:<br>$$f(x) = -\\dfrac{2}{x - 1} + \\dfrac{6}{x - 2} - \\dfrac{3}{x - 3}$$",
            "To solve the differential equation $y\\dfrac{\\text{d}y}{\\text{d}x} = f(x)$, separate the variables and set up the integrals:<br>\\begin{aligned} \\int y \\,\\text{d}y &= \\int f(x) \\,\\text{d}x \\ \\int y \\,\\text{d}y &= \\int \\left( -\\dfrac{2}{x - 1} + \\dfrac{6}{x - 2} - \\dfrac{3}{x - 3} \\right) \\,\\text{d}x \\end{aligned}",
            "Integrate both sides of the equation:<br>\\begin{aligned} \\dfrac{1}{2}y^2 &= -2\\ln|x - 1| + 6\\ln|x - 2| - 3\\ln|x - 3| + C \\end{aligned}",
            "Multiply the entire equation by 2 to isolate $y^2$, defining a new constant of integration $C' = 2C$:<br>\\begin{aligned} y^2 &= -4\\ln|x - 1| + 12\\ln|x - 2| - 6\\ln|x - 3| + C' \\end{aligned}",
            "Apply the boundary condition $y = 4$ when $x = 4$ to solve for $C'$:<br>\\begin{aligned} (4)^2 &= -4\\ln(3) + 12\\ln(2) - 6\\ln(1) + C' \\ 16 &= -4\\ln 3 + 12\\ln 2 + C' \\ C' &= 16 + 4\\ln 3 - 12\\ln 2 \\end{aligned}",
            "Substitute $C'$ back into the equation for $y^2$:<br>\\begin{aligned} y^2 &= -4\\ln|x - 1| + 12\\ln|x - 2| - 6\\ln|x - 3| + 16 + 4\\ln 3 - 12\\ln 2 \\end{aligned}<br><br>Final Answer: $y^2 = -4\\ln|x - 1| + 12\\ln|x - 2| - 6\\ln|x - 3| + 16 + 4\\ln 3 - 12\\ln 2$"
        ],
        "pi_options": [
            {
                "ans": "$$y^2 = -4\\ln|x - 1| + 12\\ln|x - 2| - 6\\ln|x - 3| + 16$$",
                "feedback": "Check your application of the boundary condition. When substituting $x = 4$ into $-4\\ln|x-1| + 12\\ln|x-2| - 6\\ln|x-3|$, the terms evaluate to $-4\\ln 3 + 12\\ln 2 - 0$. These log terms do not cancel out, so they must be included in your exact value of the constant of integration $C'$."
            },
            {
                "ans": "$$y^2 = -2\\ln|x - 1| + 6\\ln|x - 2| - 3\\ln|x - 3| + 8 + 2\\ln 3 - 6\\ln 2$$",
                "feedback": "Check your algebraic steps when multiplying the equation by 2 to isolate $y^2$. You must multiply every term, including the constant of integration $C$, which scales the constant to $C' = 2C$."
            },
            {
                "ans": "$$y^2 = -4\\ln|x - 1| + 12\\ln|x - 2| - 6\\ln|x - 3| + 16 - 4\\ln 3 + 12\\ln 2$$",
                "feedback": "Check your signs when isolating $C'$. Since $16 = -4\\ln 3 + 12\\ln 2 + C'$, rearranging to solve for $C'$ gives $C' = 16 + 4\\ln 3 - 12\\ln 2$, not $16 - 4\\ln 3 + 12\\ln 2$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Combining Logarithmic Constants",
            "content": "When dealing with boundary conditions on functions with multiple natural logs, keep your constants in exact form (e.g. $16 + 4\\ln 3 - 12\\ln 2$) rather than converting to decimals. This preserves perfect mathematical accuracy, which is highly valued in GCE A-Level mark schemes."
        }
    },
    {
        "id": "004289",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Differential Equations",
        "subtopic": [
            "Substitution Method",
            "Separation of Variables",
            "First-Order Differential Equations"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A differential equation is given by:<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{x + y}{x}, \\quad x > 0$$<br>1. Use the substitution $y = vx$, where $v$ is a function of $x$, to show that the differential equation can be written as:<br>$$x\\dfrac{\\text{d}v}{\\text{d}x} = 1$$<br>2. Hence, solve the differential equation to find the exact equation of the curve, giving your answer in the form $y = g(x)$, subject to the boundary condition $y = 2$ when $x = 1$.",
        "steps": [
            "Differentiate the substitution equation $y = vx$ implicitly with respect to $x$ using the product rule:<br>\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= v + x\\dfrac{\\text{d}v}{\\text{d}x} \\end{aligned}",
            "Substitute $y = vx$ and $\\dfrac{\\text{d}y}{\\text{d}x} = v + x\\dfrac{\\text{d}v}{\\text{d}x}$ back into the original differential equation:<br>\\begin{aligned} v + x\\dfrac{\\text{d}v}{\\text{d}x} &= \\dfrac{x + vx}{x} \\ v + x\\dfrac{\\text{d}v}{\\text{d}x} &= 1 + v \\end{aligned}",
            "Subtract $v$ from both sides to obtain the simplified separable equation:<br>\\begin{aligned} x\\dfrac{\\text{d}v}{\\text{d}x} &= 1 \\end{aligned}",
            "Separate variables and integrate both sides with respect to $x$:<br>\\begin{aligned} \\int 1 \\,\\text{d}v &= \\int \\dfrac{1}{x} \\,\\text{d}x \\ v &= \\ln x + C \\end{aligned}",
            "Substitute $v = \\dfrac{y}{x}$ back into the solution:<br>\\begin{aligned} \\dfrac{y}{x} &= \\ln x + C \\ y &= x\\ln x + Cx \\end{aligned}",
            "Apply the boundary condition $y = 2$ when $x = 1$ to solve for $C$:<br>\\begin{aligned} 2 &= (1)\\ln(1) + C(1) \\ 2 &= 0 + C \\implies C = 2 \\end{aligned}<br>Substitute $C = 2$ back into the equation of the curve:<br>$$y = x\\ln x + 2x$$<br><br>Final Answer: $y = x\\ln x + 2x$"
        ],
        "pi_options": [
            {
                "ans": "$$y = x\\ln x + x$$",
                "feedback": "Check your evaluation of the constant $C$ using the boundary condition $y(1) = 2$. Substituting $x=1$ yields $2 = 1\\ln 1 + C(1) \\implies 2 = 0 + C \\implies C = 2$. It seems you may have incorrectly set $C = 1$."
            },
            {
                "ans": "$$y = \\ln x + 2$$",
                "feedback": "Remember that $v = \\dfrac{y}{x}$, so the solution is $y = vx = x(\\ln x + C)$. It seems you forgot to multiply the entire right-hand side by $x$ when transforming back to $y$."
            },
            {
                "ans": "$$y = x^2\\ln x + 2x$$",
                "feedback": "Check your integration of $\\dfrac{\\text{d}v}{\\text{d}x} = \\dfrac{1}{x}$. The integral is $v = \\ln x + C$. It appears you may have introduced an extra factor of $x$ in your integration."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Why Homogeneous Substitution Works",
            "content": "Using the substitution $y = vx$ is a powerful technique for solving first-order homogeneous differential equations. These equations cannot be separated directly because $x$ and $y$ are algebraically entangled. Substituting $y=vx$ and applying the product rule to the derivative transforms the equation into a separable form in terms of $v$ and $x$, which can then be solved using standard calculus."
        }
    },
    {
        "id": "004290",
        "board": "OCR MEI",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Differential Equations",
        "subtopic": [
            "Practical Modeling",
            "Separation of Variables",
            "First-Order Differential Equations"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The volume of water, $V$ (in litres), remaining in a leaking container $t$ minutes after the leak begins is modeled by the differential equation:<br>$$\\dfrac{\\text{d}V}{\\text{d}t} = -k\\sqrt{V}$$<br>where $k$ is a positive constant.<br><ul><li>Initially ($t = 0$), the container contains $100$ litres of water.</li><li>After $20$ minutes, the container contains $64$ litres of water.</li></ul><br>1. Solve the differential equation to express $V$ in terms of $t$ and $k$.<br>2. Show that $k = 0.2$.<br>3. Find the total time taken for the container to empty completely.",
        "steps": [
            "Separate the variables and set up the integrals to solve the differential equation:<br>\\begin{aligned} \\int V^{-1/2} \\,\\text{d}V &= \\int -k \\,\\text{d}t \\end{aligned}",
            "Integrate both sides of the equation using the polynomial power rule:<br>\\begin{aligned} 2\\sqrt{V} &= -kt + C \\end{aligned}",
            "Apply the initial condition $V = 100$ when $t = 0$ to solve for $C$:<br>\\begin{aligned} 2\\sqrt{100} &= -k(0) + C \\ 2(10) &= C \\implies C = 20 \\end{aligned}<br>Substitute $C = 20$ back into the integrated equation and isolate $V$:<br>\\begin{aligned} 2\\sqrt{V} &= 20 - kt \\ \\sqrt{V} &= 10 - \\dfrac{k}{2}t \\ V &= \\left(10 - \\dfrac{k}{2}t\\right)^2 \\end{aligned}",
            "Use the condition $V = 64$ when $t = 20$ to solve for the constant $k$:<br>\\begin{aligned} 64 &= \\left(10 - \\dfrac{k}{2}(20)\\right)^2 \\ 64 &= (10 - 10k)^2 \\end{aligned}",
            "Take the positive square root since the term $10 - 10k$ must be positive for the decreasing function:<br>\\begin{aligned} 8 &= 10 - 10k \\ 10k &= 2 \\ k &= 0.2 \\end{aligned}<br>This confirms $k = 0.2$. Substitute $k = 0.2$ back into our volume formula:<br>$$V = (10 - 0.1t)^2$$",
            "The container is completely empty when the volume of water is $0$ ($V = 0$):<br>\\begin{aligned} (10 - 0.1t)^2 &= 0 \\ 10 - 0.1t &= 0 \\ 0.1t &= 10 \\ t &= 100 \\text{ minutes} \\end{aligned}<br><br>Final Answer: $V = \\left(10 - \\dfrac{k}{2}t\\right)^2$; $k = 0.2$; total time to empty is $100$ minutes."
        ],
        "pi_options": [
            {
                "ans": "$$V = (10 - 0.9t)^2 \\text{ and } t = 11.1 \\text{ minutes}$$",
                "feedback": "Check your sign choice when taking the square root. Although $x^2 = 64 \\implies x = \\pm 8$, physically the volume $V$ is decreasing from $100$ to $64$, so the term $\\sqrt{V} = 10 - 10k$ must be positive, giving $8 = 10 - 10k \\implies k = 0.2$. Using the negative root $-8 = 10 - 10k$ yields $k = 1.8$, which would mean the tank emptied in just $11$ minutes."
            },
            {
                "ans": "$$V = (10 - 0.1t)^2 \\text{ and } t = 20 \\text{ minutes}$$",
                "feedback": "Check your evaluation of the time taken to empty. The tank is empty when $V = 0 \\implies 10 - 0.1t = 0 \\implies 0.1t = 10 \\implies t = 100$ minutes. Ensure you divide by 0.1 correctly."
            },
            {
                "ans": "$$V = (10 - 0.2t)^2 \\text{ and } t = 50 \\text{ minutes}$$",
                "feedback": "Check your integration of $V^{-1/2} \\text{d}V = -k \\text{d}t$. This yields $2\\sqrt{V} = -kt + C \\implies \\sqrt{V} = 10 - \\dfrac{k}{2}t$. It appears you may have forgotten to divide the $-kt$ term by 2 when isolating $\\sqrt{V}$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Choosing Physical Roots",
            "content": "When taking square roots in physical modeling equations (like $(10 - 10k)^2 = 64$), you mathematically get two solutions: $10 - 10k = 8$ or $10 - 10k = -8$. You must choose the root that physically matches the model. Since $V$ decreases over time from $100$, the expression $10 - \\dfrac{k}{2}t$ must remain positive for the domain of interest, forcing us to select the positive root."
        }
    },
    {
        "id": "004291",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Surds",
        "subtopic": [
            "Algebraic Surds",
            "Denominator Rationalisation",
            "Algebraic Simplification"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Showing all your working, simplify:<br>1. $\\dfrac{60\\sqrt{b}}{(\\sqrt{b} + 5)^2 - (\\sqrt{b} - 5)^2}$<br>2. $\\dfrac{5\\sqrt{6} + 2\\sqrt{2}}{\\sqrt{6} + \\sqrt{2}}$",
        "steps": [
            "To simplify the first expression, begin by expanding the two squared binomial terms in the denominator:<br>\\begin{aligned} (\\sqrt{b} + 5)^2 &= b + 10\\sqrt{b} + 25 \\ (\\sqrt{b} - 5)^2 &= b - 10\\sqrt{b} + 25 \\end{aligned}",
            "Subtract the second expansion from the first to simplify the denominator:<br>\\begin{aligned} (\\sqrt{b} + 5)^2 - (\\sqrt{b} - 5)^2 &= (b + 10\\sqrt{b} + 25) - (b - 10\\sqrt{b} + 25) \\ &= b - b + 10\\sqrt{b} - (-10\\sqrt{b}) + 25 - 25 \\ &= 20\\sqrt{b} \\end{aligned}",
            "Substitute this back into the original fraction and simplify:<br>\\begin{aligned} \\dfrac{60\\sqrt{b}}{ (\\sqrt{b} + 5)^2 - (\\sqrt{b} - 5)^2 } &= \\dfrac{60\\sqrt{b}}{ 20\\sqrt{b} } \\ &= 3 \\end{aligned}",
            "To simplify the second expression, multiply both the numerator and the denominator by the conjugate of the denominator, which is $\\sqrt{6} - \\sqrt{2}$:<br>\\begin{aligned} \\dfrac{5\\sqrt{6} + 2\\sqrt{2}}{ \\sqrt{6} + \\sqrt{2} } &= \\dfrac{(5\\sqrt{6} + 2\\sqrt{2})(\\sqrt{6} - \\sqrt{2})}{ (\\sqrt{6} + \\sqrt{2})(\\sqrt{6} - \\sqrt{2}) } \\end{aligned}",
            "Expand the numerator and denominator terms individually:<br>\\begin{aligned} \\text{Numerator} &= 5(6) - 5\\sqrt{12} + 2\\sqrt{12} - 2(2) \\ &= 30 - 3\\sqrt{12} - 4 \\ &= 26 - 3(2\\sqrt{3}) = 26 - 6\\sqrt{3} \\ \\text{Denominator} &= 6 - 2 = 4 \\end{aligned}",
            "Divide the expanded numerator by the expanded denominator and simplify the resulting fraction:<br>\\begin{aligned} \\dfrac{26 - 6\\sqrt{3}}{ 4 } &= \\dfrac{26}{ 4 } - \\dfrac{6\\sqrt{3}}{ 4 } \\ &= \\dfrac{13}{ 2 } - \\dfrac{3}{ 2 }\\sqrt{3} \\end{aligned}<br><br>Final Answer: $3$ and $\\dfrac{13}{ 2 } - \\dfrac{3}{ 2 }\\sqrt{3}$"
        ],
        "pi_options": [
            {
                "ans": "$$3 \\text{ and } \\dfrac{1}{ 2 } + \\dfrac{3}{ 2 }\\sqrt{3}$$",
                "feedback": "Check your algebraic expansions when multiplying the surds. It appears you may have made an error when expanding the numerator $(5\\sqrt{6} + 2\\sqrt{2})(\\sqrt{6} - \\sqrt{2})$, which should simplify to $26 - 6\\sqrt{3}$ rather than resolving to positive root coefficients."
            },
            {
                "ans": "$$\\dfrac{3}{ 2 } \\text{ and } \\dfrac{13}{ 2 } - \\dfrac{3}{ 2 }\\sqrt{3}$$",
                "feedback": "Check your subtraction of the denominator terms in part 1. $(\\sqrt{b} + 5)^2 - (\\sqrt{b} - 5)^2 = 20\\sqrt{b}$. It seems you may have calculated the denominator as $40\\sqrt{b}$ by adding the coefficients instead of subtracting them, leading to $\\dfrac{60}{40} = \\dfrac{3}{2}$."
            },
            {
                "ans": "$$3 \\text{ and } 26 - 6\\sqrt{3}$$",
                "feedback": "Check the final division step in part 2. When dividing the expanded numerator $26 - 6\\sqrt{3}$ by the denominator $4$, you must divide every term by $4$. It seems you forgot to divide by the denominator."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Expanding Squared Binomials",
            "content": "A very common error in algebraic surd expansion is writing $(\\sqrt{b} \\pm 5)^2$ as simply $b \\pm 25$, completely forgetting the middle term. Always expand binomial squares carefully as double brackets: $(\\sqrt{b} + 5)(\\sqrt{b} + 5) = b + 10\\sqrt{b} + 25$."
        }
    },
    {
        "id": "004292",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Surds",
        "subtopic": [
            "Surd Expansion",
            "Rationalisation"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Showing all your working, simplify the following expression to the form $A - B\\sqrt{5}$, where $A$ and $B$ are integers:<br>$$(3 - 2\\sqrt{5})^2 + \\dfrac{30}{ \\sqrt{5} }$$",
        "steps": [
            "First, expand the squared binomial term using double brackets:<br>\\begin{aligned} (3 - 2\\sqrt{5})^2 &= (3 - 2\\sqrt{5})(3 - 2\\sqrt{5}) \\ &= 9 - 6\\sqrt{5} - 6\\sqrt{5} + (4 \\times 5) \\ &= 9 - 12\\sqrt{5} + 20 \\ &= 29 - 12\\sqrt{5} \\end{aligned}",
            "Next, rationalise the denominator of the fractional term by multiplying the numerator and denominator by $\\sqrt{5}$:<br>\\begin{aligned} \\dfrac{30}{ \\sqrt{5} } &= \\dfrac{30 \\times \\sqrt{5}}{ \\sqrt{5} \\times \\sqrt{5} } \\ &= \\dfrac{30\\sqrt{5}}{ 5 } \\ &= 6\\sqrt{5} \\end{aligned}",
            "Substitute both simplified parts back into the original expression and combine the terms:<br>\\begin{aligned} (3 - 2\\sqrt{5})^2 + \\dfrac{30}{ \\sqrt{5} } &= (29 - 12\\sqrt{5}) + 6\\sqrt{5} \\ &= 29 - 6\\sqrt{5} \\end{aligned}<br><br>Final Answer: $29 - 6\\sqrt{5}$"
        ],
        "pi_options": [
            {
                "ans": "$$29 - 18\\sqrt{5}$$",
                "feedback": "Check your sign operation in the final combination step. You have $-12\\sqrt{5} + 6\\sqrt{5}$, which simplifies to $-6\\sqrt{5}$. It seems you may have mistakenly added $-12$ and $-6$ to get $-18$."
            },
            {
                "ans": "$$29 - 6\\sqrt{10}$$",
                "feedback": "Check your addition of surd terms. When combining $-12\\sqrt{5} + 6\\sqrt{5}$, only the coefficients are combined, giving $-6\\sqrt{5}$. You cannot add or combine the numbers inside the radical signs."
            },
            {
                "ans": "$$9 - 6\\sqrt{5}$$",
                "feedback": "Check your expansion of $(3 - 2\\sqrt{5})^2$. Recall that $(2\\sqrt{5})^2 = 4 \\times 5 = 20$. It seems you may have expanded it as $9 - 12\\sqrt{5} + 0$ or forgotten the constant term from squaring the second term."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Fast Integer Rationalisation",
            "content": "When rationalising a term with a single root in the denominator like $\\dfrac{30}{ \\sqrt{5} }$, you can speed up your working by rewriting $30$ as a multiple of the radical base: $30 = 6 \\times 5 = 6 \\times (\\sqrt{5})^2$. Dividing this directly by $\\sqrt{5}$ immediately yields $6\\sqrt{5}$ without needing to multiply the numerator and denominator formally."
        }
    },
    {
        "id": "004293",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Surds",
        "subtopic": [
            "Denominator Rationalisation",
            "Surd Expansion"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Showing all your working, simplify the following expression, giving your answer in the form $P - \\sqrt{Q}$, where $P$ and $Q$ are integers:<br>$$\\dfrac{3\\sqrt{2} - \\sqrt{3}}{2\\sqrt{2} + \\sqrt{3}}$$",
        "steps": [
            "To rationalise the denominator, multiply both the numerator and the denominator by the conjugate of the denominator, which is $2\\sqrt{2} - \\sqrt{3}$:<br>\\begin{aligned} \\dfrac{3\\sqrt{2} - \\sqrt{3}}{ 2\\sqrt{2} + \\sqrt{3} } &= \\dfrac{(3\\sqrt{2} - \\sqrt{3})(2\\sqrt{2} - \\sqrt{3})}{ (2\\sqrt{2} + \\sqrt{3})(2\\sqrt{2} - \\sqrt{3}) } \\end{aligned}",
            "Expand the denominator using the difference of two squares identity, $(a+b)(a-b) = a^2 - b^2$:<br>\\begin{aligned} (2\\sqrt{2} + \\sqrt{3})(2\\sqrt{2} - \\sqrt{3}) &= (2\\sqrt{2})^2 - (\\sqrt{3})^2 \\ &= (4 \\times 2) - 3 \\ &= 8 - 3 = 5 \\end{aligned}",
            "Expand the numerator using double brackets:<br>\\begin{aligned} (3\\sqrt{2} - \\sqrt{3})(2\\sqrt{2} - \\sqrt{3}) &= (3\\sqrt{2})(2\\sqrt{2}) - 3\\sqrt{6} - 2\\sqrt{6} + (\\sqrt{3})^2 \\ &= (6 \\times 2) - 5\\sqrt{6} + 3 \\ &= 12 - 5\\sqrt{6} + 3 \\ &= 15 - 5\\sqrt{6} \\end{aligned}",
            "Combine the expanded numerator and denominator back into the fraction, and simplify by dividing both terms by 5:<br>\\begin{aligned} \\dfrac{15 - 5\\sqrt{6}}{ 5 } &= \\dfrac{15}{ 5 } - \\dfrac{5\\sqrt{6}}{ 5 } \\ &= 3 - \\sqrt{6} \\end{aligned}<br><br>Final Answer: $3 - \\sqrt{6}$"
        ],
        "pi_options": [
            {
                "ans": "$$3 - 5\\sqrt{6}$$",
                "feedback": "Check the final division step. When simplifying $\\dfrac{15 - 5\\sqrt{6}}{ 5 }$, you must divide both terms in the numerator by the denominator $5$. It seems you only divided the constant term $15$ and forgot to divide the coefficient of the surd."
            },
            {
                "ans": "$$\\dfrac{15 - 5\\sqrt{6}}{ 7 }$$",
                "feedback": "Check your evaluation of the denominator $(2\\sqrt{2})^2 - (\\sqrt{3})^2$. Remember that $(2\\sqrt{2})^2 = 4 \\times 2 = 8$. It seems you may have squared $2\\sqrt{2}$ incorrectly as $4 + 2 = 6$ or $4 \\times 1 = 4$, leading to a denominator of $6 - 3 = 3$ or similar."
            },
            {
                "ans": "$$3 + \\sqrt{6}$$",
                "feedback": "Check your signs during the expansion of the numerator. Multiplying $-\\sqrt{3}$ by $-\\sqrt{3}$ yields $+3$. Combining the middle terms $-3\\sqrt{6} - 2\\sqrt{6}$ yields $-5\\sqrt{6}$. It seems you made a sign error, resulting in a positive surd term."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Squaring Coefficient Surds",
            "content": "A very frequent slip occurs when squaring terms with coefficients and radicals, such as $(2\\sqrt{2})^2$. Remember that the exponent applies to both parts of the product: $(2\\sqrt{2})^2 = 2^2 \\times (\\sqrt{2})^2 = 4 \\times 2 = 8$. Forgetting to square the coefficient is a common examiner trap."
        }
    },
    {
        "id": "004294",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Surds",
        "subtopic": [
            "Geometric Applications",
            "Denominator Rationalisation",
            "Surd Area"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A rectangle has an area of $(5 + 2\\sqrt{3})\\text{ cm}^2$ and a width of $(2 + \\sqrt{3})\\text{ cm}$.<br><br>1. Find the exact length of the rectangle, giving your answer in the form $a + b\\sqrt{3}$, where $a$ and $b$ are integers.<br>2. Hence, find the exact perimeter of the rectangle.",
        "steps": [
            "To find the length of the rectangle, divide the area by the width:<br>\\begin{aligned} \\text{Length} &= \\dfrac{5 + 2\\sqrt{3}}{ 2 + \\sqrt{3} } \\end{aligned}",
            "Rationalise the denominator by multiplying the numerator and denominator by the conjugate $2 - \\sqrt{3}$:<br>\\begin{aligned} \\text{Length} &= \\dfrac{(5 + 2\\sqrt{3})(2 - \\sqrt{3})}{ (2 + \\sqrt{3})(2 - \\sqrt{3}) } \\end{aligned}",
            "Expand the denominator using the difference of two squares:<br>\\begin{aligned} (2 + \\sqrt{3})(2 - \\sqrt{3}) &= (2)^2 - (\\sqrt{3})^2 \\ &= 4 - 3 = 1 \\end{aligned}",
            "Expand the numerator using double brackets:<br>\\begin{aligned} (5 + 2\\sqrt{3})(2 - \\sqrt{3}) &= 5(2) - 5\\sqrt{3} + 2(2)\\sqrt{3} - (2 \\times 3) \\ &= 10 - 5\\sqrt{3} + 4\\sqrt{3} - 6 \\ &= 4 - \\sqrt{3} \\end{aligned}<br>Since the denominator is 1, the length of the rectangle is $4 - \\sqrt{3}$ cm.",
            "To find the perimeter, use the formula $\\text{Perimeter} = 2(\\text{Length} + \\text{Width})$:<br>\\begin{aligned} \\text{Perimeter} &= 2\\left( (4 - \\sqrt{3}) + (2 + \\sqrt{3}) \\right) \\ &= 2(4 + 2 - \\sqrt{3} + \\sqrt{3}) \\ &= 2(6) \\ &= 12 \\text{ cm} \\end{aligned}<br><br>Final Answer: $\\text{Length} = 4 - \\sqrt{3}\\text{ cm}$ and $\\text{Perimeter} = 12\\text{ cm}$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Length} = 4 - \\sqrt{3}\\text{ cm}, \\quad \\text{Perimeter} = 12 - 2\\sqrt{3}\\text{ cm}$$",
                "feedback": "Check your perimeter calculation. When adding the length $4 - \\sqrt{3}$ and width $2 + \\sqrt{3}$, the irrational terms cancel out: $-\\sqrt{3} + \\sqrt{3} = 0$. It seems you may have mistakenly written $-2\\sqrt{3}$ instead of cancelling them."
            },
            {
                "ans": "$$\\text{Length} = 4 + \\sqrt{3}\\text{ cm}, \\quad \\text{Perimeter} = 12\\text{ cm}$$",
                "feedback": "Check your signs during the expansion of the numerator. Multiplying $5$ by $-\\sqrt{3}$ gives $-5\\sqrt{3}$, and multiplying $2\\sqrt{3}$ by $2$ gives $+4\\sqrt{3}$. Combining these gives $-5\\sqrt{3} + 4\\sqrt{3} = -\\sqrt{3}$ rather than $+\\sqrt{3}$."
            },
            {
                "ans": "$$\\text{Length} = 16 - 9\\sqrt{3}\\text{ cm}, \\quad \\text{Perimeter} = 36 - 18\\sqrt{3}\\text{ cm}$$",
                "feedback": "Check your initial equation for the length. The area of a rectangle is $\\text{length} \\times \\text{width}$, so to find the length you must divide the area by the width: $\\text{Length} = \\dfrac{\\text{Area}}{\\text{Width}}$. It seems you may have multiplied the area by the width instead."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Beautiful Cancellation in Geometry",
            "content": "When geometry questions involve surds, the dimensions are often carefully chosen conjugate-style pairs. Notice how adding the length $4 - \\sqrt{3}$ and width $2 + \\sqrt{3}$ causes the radical terms to cancel out completely. Recognizing this allows you to expect a clean integer perimeter, which serves as a great confidence check!"
        }
    },
    {
        "id": "004295",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Algebra and Functions",
        "topic": "Surds",
        "subtopic": [
            "Algebraic Surds",
            "Algebraic Fractions"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>Showing all your working, express the following as a single algebraic fraction in its simplest form:<br>$$\\dfrac{\\sqrt{x} + 2}{\\sqrt{x} - 2} - \\dfrac{\\sqrt{x} - 2}{\\sqrt{x} + 2}, \\quad x > 4$$",
        "steps": [
            "To subtract the algebraic fractions, find a common denominator, which is the product of the two denominators: $(\\sqrt{x} - 2)(\\sqrt{x} + 2)$:<br>\\begin{aligned} \\text{Denominator} &= (\\sqrt{x} - 2)(\\sqrt{x} + 2) \\ &= (\\sqrt{x})^2 - (2)^2 \\ &= x - 4 \\end{aligned}",
            "Adjust the numerators accordingly and set up the single fraction subtraction over the common denominator:<br>\\begin{aligned} \\text{New Expression} &= \\dfrac{(\\sqrt{x} + 2)(\\sqrt{x} + 2) - (\\sqrt{x} - 2)(\\sqrt{x} - 2)}{ x - 4 } \\ &= \\dfrac{(\\sqrt{x} + 2)^2 - (\\sqrt{x} - 2)^2}{ x - 4 } \\end{aligned}",
            "Expand the two squared binomial terms in the numerator:<br>\\begin{aligned} (\\sqrt{x} + 2)^2 &= x + 4\\sqrt{x} + 4 \\ (\\sqrt{x} - 2)^2 &= x - 4\\sqrt{x} + 4 \\end{aligned}",
            "Subtract the second numerator expansion from the first inside the fraction:<br>\\begin{aligned} \\text{Numerator} &= (x + 4\\sqrt{x} + 4) - (x - 4\\sqrt{x} + 4) \\ &= x - x + 4\\sqrt{x} - (-4\\sqrt{x}) + 4 - 4 \\ &= 8\\sqrt{x} \\end{aligned}",
            "Combine the simplified numerator and denominator to form the single simplified fraction:<br>\\begin{aligned} \\text{Simplified Fraction} &= \\dfrac{8\\sqrt{x}}{ x - 4 } \\end{aligned}<br><br>Final Answer: $\\dfrac{8\\sqrt{x}}{ x - 4 }$"
        ],
        "pi_options": [
            {
                "ans": "$$\\dfrac{2x + 8}{ x - 4 }$$",
                "feedback": "Check your sign operations when expanding and subtracting the numerators. Subtracting $(x - 4\\sqrt{x} + 4)$ from $(x + 4\\sqrt{x} + 4)$ yields $(x - x) + (4\\sqrt{x} - (-4\\sqrt{x})) + (4 - 4) = 8\\sqrt{x}$. It seems you may have added the terms instead of subtracting them, or made a sign distribution error."
            },
            {
                "ans": "$$\\dfrac{8\\sqrt{x}}{ x + 4 }$$",
                "feedback": "Check your expansion of the denominator $(\\sqrt{x} - 2)(\\sqrt{x} + 2)$. By the difference of two squares, this expands to $(\\sqrt{x})^2 - (2)^2 = x - 4$. It seems you made a sign error, resulting in a positive constant term."
            },
            {
                "ans": "$$8\\sqrt{x}$$",
                "feedback": "Check your handling of the common denominator. When subtracting fractions, the common denominator is preserved as the denominator of your final simplified fraction, so it cannot be omitted."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Algebraic Identities with Surds",
            "content": "Notice that the numerator is of the form $(u + v)^2 - (u - v)^2$. Expanding this difference of squared terms always simplifies algebraically to exactly $4uv$. Recognizing this elegant identity allows you to immediately evaluate the numerator of this expression as $4(\\sqrt{x})(2) = 8\\sqrt{x}$, saving you valuable time during the exam!"
        }
    },
    {
        "id": "004296",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Coordinate Geometry",
        "topic": "Straight Lines",
        "subtopic": [
            "Line Intersections",
            "Perpendicular Lines",
            "Segment Ratios",
            "Areas of Triangles"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The points $A$ and $B$ have coordinates $(1, 6)$ and $(4, 0)$ respectively. The straight line $L$ has the equation $x - 2y + 6 = 0$.<br><br>1. The line $L$ intersects the line $AB$ at the point $C$. Find the coordinates of $C$.<br>2. Determine the ratio in which the line $L$ divides the line $AB$.<br>3. The line $L$ crosses the $x$-axis at the point $D$. Find the coordinates of $D$.<br>4. Show that $L$ is perpendicular to $AB$, and calculate the exact area of the triangle $ACD$.",
        "steps": [
            "First, find the equation of the line passing through $A(1, 6)$ and $B(4, 0)$. Begin by calculating the gradient of $AB$:<br>\\begin{aligned} m_{AB} &= \\dfrac{0 - 6}{ 4 - 1 } \\ &= \\dfrac{-6}{ 3 } = -2 \\end{aligned}<br>Using the point-gradient formula with $B(4, 0)$, the equation of $AB$ is:<br>\\begin{aligned} y - 0 &= -2( x - 4 ) \\ y &= -2x + 8 \\end{aligned}",
            "To find the coordinates of the intersection point $C$, solve the equations of $L$ and $AB$ simultaneously by substituting $y = -2x + 8$ into the equation of $L$ ($x - 2y + 6 = 0$):<br>\\begin{aligned} x - 2(-2x + 8) + 6 &= 0 \\ x + 4x - 16 + 6 &= 0 \\ 5x - 10 &= 0 \\ 5x &= 10 \\implies x = 2 \\end{aligned}",
            "Substitute $x = 2$ back into the equation of $AB$ to find the $y$-coordinate of $C$:<br>\\begin{aligned} y &= -2(2) + 8 = 4 \\end{aligned}<br>Thus, the coordinates of the intersection point are $C(2, 4)$.",
            "To find the ratio in which $L$ divides $AB$, compare the horizontal or vertical displacements of the segments $AC$ and $CB$:<br>\\begin{aligned} \\text{Horizontal displacement of } AC &= x_C - x_A = 2 - 1 = 1 \\ \\text{Horizontal displacement of } CB &= x_B - x_C = 4 - 2 = 2 \\end{aligned}<br>Since the ratio of the horizontal displacements is $1:2$, the line $L$ divides the line segment $AB$ in the ratio $1:2$.",
            "The line $L$ crosses the $x$-axis at the point $D$. Since any point on the $x$-axis has a $y$-coordinate of $0$, substitute $y = 0$ into the equation of $L$ ($x - 2y + 6 = 0$):<br>\\begin{aligned} x - 2(0) + 6 &= 0 \\ x + 6 &= 0 \\implies x = -6 \\end{aligned}<br>Thus, the coordinates of point $D$ are $D(-6, 0)$.",
            "To show that $L$ and $AB$ are perpendicular, compare their gradients. Rearrange the equation of $L$ into standard form $y = mx + c$:<br>\\begin{aligned} x - 2y + 6 &= 0 \\ 2y &= x + 6 \\ y &= \\dfrac{1}{ 2 }x + 3 \\end{aligned}<br>Thus, the gradient of $L$ is $m_L = \\dfrac{1}{ 2 }$. Since $m_{AB} \\times m_L = -2 \\times \\dfrac{1}{ 2 } = -1$, the lines are perpendicular.",
            "Because $L$ is perpendicular to $AB$ at the intersection point $C$, the triangle $ACD$ is right-angled at $C$. Find the lengths of the base $CD$ and the height $AC$ using the distance formula:<br>\\begin{aligned} AC &= \\sqrt{ (2 - 1)^2 + (4 - 6)^2 } \\ &= \\sqrt{ 1^2 + (-2)^2 } = \\sqrt{ 5 } \\ CD &= \\sqrt{ (2 - (-6))^2 + (4 - 0)^2 } \\ &= \\sqrt{ 8^2 + 4^2 } = \\sqrt{ 64 + 16 } = \\sqrt{ 80 } = 4\\sqrt{ 5 } \\end{aligned}",
            "Calculate the area of the right-angled triangle $ACD$ using $\\text{Area} = \\dfrac{1}{ 2 } \\times \\text{base} \\times \\text{height}$:<br>\\begin{aligned} \\text{Area} &= \\dfrac{1}{ 2 } \\times AC \\times CD \\ &= \\dfrac{1}{ 2 } \\times \\sqrt{ 5 } \\times 4\\sqrt{ 5 } \\ &= \\dfrac{1}{ 2 } \\times 4 \\times 5 \\ &= 10 \\end{aligned}<br><br>Final Answer: $C(2, 4)$; ratio is $1:2$; $D(-6, 0)$; perpendicular product is $-1$ and area is $10$"
        ],
        "pi_options": [
            {
                "ans": "$$C(2, 4); \\quad \\text{Ratio: } 1:3; \\quad D(-6, 0); \\quad \\text{Area: } 10$$",
                "feedback": "Check your segment ratio calculation. The ratio is between $AC$ and $CB$. The horizontal displacement of $AC$ is $2 - 1 = 1$ and for $CB$ is $4 - 2 = 2$, yielding a ratio of $1:2$. It seems you may have mistakenly compared $AC$ to the total length $AB$, which is $1:3$."
            },
            {
                "ans": "$$C(2, 4); \\quad \\text{Ratio: } 1:2; \\quad D(6, 0); \\quad \\text{Area: } 10$$",
                "feedback": "Check your coordinates for point $D$. When substituting $y = 0$ into $x - 2y + 6 = 0$, we get $x + 6 = 0 \\implies x = -6$. It seems you made a sign error, resulting in $D(6, 0)$."
            },
            {
                "ans": "$$C(2, 4); \\quad \\text{Ratio: } 1:2; \\quad D(-6, 0); \\quad \\text{Area: } 20$$",
                "feedback": "Check your triangle area calculation. The area of a triangle is $\\dfrac{1}{ 2 } \\times \\text{base} \\times \\text{height}$. It seems you forgot to multiply by the factor of $\\dfrac{1}{ 2 }$ after multiplying the lengths of $AC$ and $CD$ together."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Right-Angled Triangle Shortcuts",
            "content": "When a coordinate geometry question guides you to show that two lines are perpendicular (here, $L \\perp AB$ at $C$), any triangle formed by their intersection and intercept points is guaranteed to be right-angled. You can quickly find its area by using the distance formula to find the two perpendicular legs, rather than setting up complex coordinate area formulas."
        }
    },
    {
        "id": "004297",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Coordinate Geometry",
        "topic": "Straight Lines",
        "subtopic": [
            "Parallel Lines",
            "Perpendicular Lines",
            "Line Gradients"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The line $L_1$ passes through the points $P(-2, k)$ and $Q(4, 5)$. The straight line $L_2$ is defined by the equation:<br>$$3x - 2y + 8 = 0$$<br>1. Given that the line $L_1$ is parallel to the line $L_2$, find the value of the constant $k$.<br>2. Given instead that the line $L_1$ is perpendicular to the line $L_2$, find the value of the constant $k$.",
        "steps": [
            "To find the gradient of the line $L_2$, rearrange its equation into the standard form $y = mx + c$:<br>\\begin{aligned} 3x - 2y + 8 &= 0 \\ 2y &= 3x + 8 \\ y &= \\dfrac{3}{ 2 }x + 4 \\end{aligned}<br>Thus, the gradient of the line $L_2$ is $m_2 = \\dfrac{3}{ 2 }$.",
            "Next, write down the algebraic expression for the gradient of $L_1$ passing through $P(-2, k)$ and $Q(4, 5)$:<br>\\begin{aligned} m_1 &= \\dfrac{5 - k}{ 4 - (-2) } \\ &= \\dfrac{5 - k}{ 6 } \\end{aligned}",
            "For part 1, parallel lines have equal gradients ($m_1 = m_2$). Set the gradients equal and solve for $k$:<br>\\begin{aligned} \\dfrac{5 - k}{ 6 } &= \\dfrac{3}{ 2 } \\ 2(5 - k) &= 18 \\ 10 - 2k &= 18 \\ -2k &= 8 \\implies k = -4 \\end{aligned}",
            "For part 2, perpendicular lines have gradients whose product is $-1$ ($m_1 \\times m_2 = -1$). Set up the product equation and solve for $k$:<br>\\begin{aligned} \\left( \\dfrac{5 - k}{ 6 } \\right) \\times \\left( \\dfrac{3}{ 2 } \\right) &= -1 \\ \\dfrac{3(5 - k)}{ 12 } &= -1 \\ \\dfrac{5 - k}{ 4 } &= -1 \\ 5 - k &= -4 \\implies k = 9 \\end{aligned}<br><br>Final Answer: Parallel $k = -4$; perpendicular $k = 9$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Parallel } k = -4, \\quad \\text{Perpendicular } k = -9$$",
                "feedback": "Check your algebraic signs when solving the perpendicular equation $5 - k = -4$. Subtracting 5 from both sides gives $-k = -9 \\implies k = 9$. It seems you made a sign error, resulting in $k = -9$."
            },
            {
                "ans": "$$\\text{Parallel } k = 14, \\quad \\text{Perpendicular } k = 9$$",
                "feedback": "Check your step when solving the parallel equation $\\dfrac{5 - k}{ 6 } = \\dfrac{3}{ 2 }$. Multiplying by 6 gives $5 - k = 9 \\implies -k = 4 \\implies k = -4$. It seems you may have mistakenly added 5 instead of subtracting, leading to $k = 14$."
            },
            {
                "ans": "$$\\text{Parallel } k = -4, \\quad \\text{Perpendicular } k = 1$$",
                "feedback": "Check your perpendicular gradient relationship. If $m_2 = \\dfrac{3}{ 2 }$, the perpendicular gradient must be the negative reciprocal, which is $-\\dfrac{2}{ 3 }$, not $-\\dfrac{3}{ 2 }$. Ensure you invert the fraction."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Rearranging for Gradients",
            "content": "When finding the gradient of any line given in general form $ax + by + c = 0$, always take the time to rearrange it into $y = mx + c$. Trying to guess the gradient directly (e.g., assuming $m = a/b$ or $-b/a$) is a very common source of sign errors during exam stress."
        }
    },
    {
        "id": "004298",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Coordinate Geometry",
        "topic": "Straight Lines",
        "subtopic": [
            "Perpendicular Bisectors",
            "Midpoint Formula",
            "Line Gradients"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>The points $A$ and $B$ have coordinates $(-3, 2)$ and $(5, 6)$ respectively.<br><br>1. Find the coordinates of the midpoint of $AB$.<br>2. Find the gradient of the line segment $AB$.<br>3. Hence, find the equation of the perpendicular bisector of $AB$, giving your answer in the form $ax + by + c = 0$, where $a$, $b$, and $c$ are integers to be found.",
        "steps": [
            "To find the coordinates of the midpoint $M$ of $AB$, apply the midpoint formula to the coordinates of $A(-3, 2)$ and $B(5, 6)$:<br>\\begin{aligned} M &= \\left( \\dfrac{-3 + 5}{ 2 }, \\dfrac{2 + 6}{ 2 } \\right) \\ &= \\left( \\dfrac{2}{ 2 }, \\dfrac{8}{ 2 } \\right) = (1, 4) \\end{aligned}",
            "To find the gradient $m_{AB}$ of the line segment $AB$, use the gradient formula:<br>\\begin{aligned} m_{AB} &= \\dfrac{6 - 2}{ 5 - (-3) } \\ &= \\dfrac{4}{ 8 } = \\dfrac{1}{ 2 } \\end{aligned}",
            "The perpendicular bisector must be perpendicular to $AB$. Find its gradient by taking the negative reciprocal of $m_{AB} = \\dfrac{1}{ 2 }$:<br>\\begin{aligned} m_{\\perp} &= -\\dfrac{1}{ m_{AB} } \\ &= -\\dfrac{1}{ 1/2 } = -2 \\end{aligned}",
            "The perpendicular bisector passes through the midpoint $M(1, 4)$. Set up the straight line equation using the point-gradient formula $y - y_1 = m( x - x_1 )$:<br>\\begin{aligned} y - 4 &= -2( x - 1 ) \\ y - 4 &= -2x + 2 \\end{aligned}",
            "Rearrange the terms into the general form $ax + by + c = 0$ where $a$, $b$, and $c$ are integers:<br>\\begin{aligned} 2x + y - 4 - 2 &= 0 \\ 2x + y - 6 &= 0 \\end{aligned}<br><br>Final Answer: Midpoint is $(1, 4)$; gradient is $\\dfrac{1}{ 2 }$; equation is $2x + y - 6 = 0$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Midpoint: } (1, 4); \\quad m = \\dfrac{1}{ 2 }; \\quad 2x + y - 2 = 0$$",
                "feedback": "Check your algebraic expansion in the final steps. When expanding $-2(x-1)$, you get $-2x + 2$. Rearranging $y - 4 = -2x + 2$ should yield $2x + y - 6 = 0$. It seems you made a sign error and wrote $+2$ on the left side instead of subtracting it."
            },
            {
                "ans": "$$\\text{Midpoint: } (1, 4); \\quad m = \\dfrac{1}{ 2 }; \\quad x + 2y - 9 = 0$$",
                "feedback": "Check your perpendicular gradient. The perpendicular bisector is perpendicular to $AB$, so its gradient is $-2$ (the negative reciprocal of $\\dfrac{1}{ 2 }$). It seems you used the original gradient of $\\dfrac{1}{ 2 }$ or its reciprocal $2$ instead of $-2$."
            },
            {
                "ans": "$$\\text{Midpoint: } (1, 4); \\quad m = -2; \\quad 2x + y - 6 = 0$$",
                "feedback": "Check your answer to part 2. The gradient of the segment $AB$ itself is $m_{AB} = \\dfrac{1}{ 2 }$. The perpendicular gradient is $-2$. Ensure you keep these two steps distinct."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Defining the Perpendicular Bisector",
            "content": "Geometrically, the perpendicular bisector of a line segment $AB$ is the locus of all points in a plane that are equidistant from the endpoints $A$ and $B$. This coordinates-based algebraic method of finding the midpoint and the negative reciprocal gradient is a direct application of this distance-equality property."
        }
    },
    {
        "id": "004299",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Coordinate Geometry",
        "topic": "Straight Lines",
        "subtopic": [
            "Line-Circle Intersections",
            "Simultaneous Equations",
            "Chord Length"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A straight line has the equation $y = x + 3$. A circle has the equation $x^2 + y^2 = 29$.<br><br>1. Find the coordinates of the points where the line intersects the circle.<br>2. Calculate the exact length of the chord joining these two points of intersection, giving your answer in its simplest surd form.",
        "steps": [
            "To find the intersection points, substitute the linear equation $y = x + 3$ into the quadratic equation of the circle:<br>\\begin{aligned} x^2 + ( x + 3 )^2 &= 29 \\ x^2 + (x^2 + 6x + 9) &= 29 \\ 2x^2 + 6x + 9 - 29 &= 0 \\ 2x^2 + 6x - 20 &= 0 \\end{aligned}",
            "Divide the entire quadratic equation by 2 to simplify, and factorise to solve for $x$:<br>\\begin{aligned} x^2 + 3x - 10 &= 0 \\ (x + 5)(x - 2) &= 0 \\end{aligned}<br>This yields two solutions: $x = -5$ and $x = 2$.",
            "Substitute these $x$-values back into the linear equation $y = x + 3$ to find the corresponding $y$-coordinates:<ul><li>For $x = -5$: $y = -5 + 3 = -2 \\implies (-5, -2)$</li><li>For $x = 2$: $y = 2 + 3 = 5 \\implies (2, 5)$</li></ul>Thus, the two points of intersection are $(-5, -2)$ and $(2, 5)$.",
            "To find the exact length of the chord joining these two points, apply the distance formula:<br>\\begin{aligned} \\text{Chord Length} &= \\sqrt{ (2 - (-5))^2 + (5 - (-2))^2 } \\ &= \\sqrt{ 7^2 + 7^2 } \\ &= \\sqrt{ 49 + 49 } \\ &= \\sqrt{ 98 } \\end{aligned}",
            "Simplify the surd to its simplest form by extracting the perfect square factor $49$:<br>\\begin{aligned} \\text{Chord Length} &= \\sqrt{ 49 \\times 2 } \\ &= 7\\sqrt{ 2 } \\end{aligned}<br><br>Final Answer: Intersections are $(-5, -2)$ and $(2, 5)$; exact chord length is $7\\sqrt{ 2 }$"
        ],
        "pi_options": [
            {
                "ans": "$$(-5, -2) \\text{ and } (2, 5); \\quad \\text{Chord Length: } 98$$",
                "feedback": "Check your distance formula calculation. The distance formula is $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$. It seems you forgot to take the square root of the sum, leaving the answer as $98$ instead of $\\sqrt{98} = 7\\sqrt{2}$."
            },
            {
                "ans": "$$(5, 8) \\text{ and } (2, 5); \\quad \\text{Chord Length: } 3\\sqrt{ 2 }$$",
                "feedback": "Check your factorisation of the quadratic equation $x^2 + 3x - 10 = 0$. Since $-10$ is negative and the middle term is $+3$, the factors must be $(x + 5)(x - 2) = 0$, yielding solutions $x = -5$ and $x = 2$ rather than $x = 5$."
            },
            {
                "ans": "$$(-5, -2) \\text{ and } (2, 5); \\quad \\text{Chord Length: } \\sqrt{ 58 }$$",
                "feedback": "Check your substitution of the coordinates into the distance formula. Ensure you calculate $(2 - (-5))^2 = 7^2 = 49$ and $(5 - (-2))^2 = 7^2 = 49$. It seems you may have made a sign error and calculated $(2 - 5)^2 + (-2 - 5)^2$ or similar."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Complete Intersections",
            "content": "When solving simultaneous linear-quadratic equations to find intersection points, always remember that an intersection is represented by a complete coordinate pair $(x, y)$. Once you solve the quadratic equation to find the $x$-values, make sure to substitute them back into the linear equation to find the corresponding $y$-values."
        }
    },
    {
        "id": "004300",
        "board": "WJEC",
        "level": "AS",
        "major_area": "Coordinate Geometry",
        "topic": "Straight Lines",
        "subtopic": [
            "Geometric Proofs",
            "Midpoint Formula",
            "Perpendicular Lines"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning.<br><br>A rhombus $PQRS$ has vertices at $P(1, 2)$, $Q(5, 5)$, and $R(2, 9)$.<br><br>1. Find the coordinates of the midpoint of the diagonal $PR$.<br>2. Since the diagonals of a rhombus bisect each other, find the coordinates of the fourth vertex, $S$.<br>3. Show that the diagonals $PR$ and $QS$ are perpendicular.",
        "steps": [
            "To find the coordinates of the midpoint $M$ of the diagonal $PR$, apply the midpoint formula to the coordinates of $P(1, 2)$ and $R(2, 9)$:<br>\\begin{aligned} M &= \\left( \\dfrac{1 + 2}{ 2 }, \\dfrac{2 + 9}{ 2 } \\right) \\ &= \\left( \\dfrac{3}{ 2 }, \\dfrac{11}{ 2 } \\right) \\end{aligned}",
            "Since the diagonals of a rhombus bisect each other, the midpoint of the diagonal $QS$ must be identical to the midpoint of $PR$, which is $\\left( \\dfrac{3}{ 2 }, \\dfrac{11}{ 2 } \\right)$. Let the coordinates of vertex $S$ be $(a, b)$:<br>\\begin{aligned} \\left( \\dfrac{5 + a}{ 2 }, \\dfrac{5 + b}{ 2 } \\right) &= \\left( \\dfrac{3}{ 2 }, \\dfrac{11}{ 2 } \\right) \\end{aligned}",
            "Equate the individual coordinate components of the midpoint to solve for $a$ and $b$:<br>\\begin{aligned} \\dfrac{5 + a}{ 2 } &= \\dfrac{3}{ 2 } \\ 5 + a &= 3 \\implies a = -2 \\ \\dfrac{5 + b}{ 2 } &= \\dfrac{11}{ 2 } \\ 5 + b &= 11 \\implies b = 6 \\end{aligned}<br>Thus, the coordinates of the fourth vertex are $S(-2, 6)$.",
            "To show that the diagonals $PR$ and $QS$ are perpendicular, find and compare their gradients. Calculate the gradient of $PR$ using $P(1, 2)$ and $R(2, 9)$:<br>\\begin{aligned} m_{PR} &= \\dfrac{9 - 2}{ 2 - 1 } \\ &= \\dfrac{7}{ 1 } = 7 \\end{aligned}",
            "Calculate the gradient of $QS$ using $Q(5, 5)$ and $S(-2, 6)$:<br>\\begin{aligned} m_{QS} &= \\dfrac{6 - 5}{ -2 - 5 } \\ &= \\dfrac{1}{ -7 } = -\\dfrac{1}{ 7 } \\end{aligned}",
            "Multiply the two gradients to check for perpendicularity:<br>\\begin{aligned} m_{PR} \\times m_{QS} &= 7 \\times \\left( -\\dfrac{1}{ 7 } \\right) \\ &= -1 \\end{aligned}<br>Since the product of the gradients is $-1$, the diagonals $PR$ and $QS$ are perpendicular.<br><br>Final Answer: Midpoint is $\\left( \\dfrac{3}{ 2 }, \\dfrac{11}{ 2 } \\right)$; $S(-2, 6)$; gradient product is $-1$"
        ],
        "pi_options": [
            {
                "ans": "$$\\text{Midpoint: } \\left( \\dfrac{3}{ 2 }, \\dfrac{11}{ 2 } \\right); \\quad S(2, 6); \\quad \\text{Product: } -1$$",
                "feedback": "Check your algebraic step when solving $5 + a = 3$ for the $x$-coordinate of $S$. Subtracting $5$ from both sides yields $a = 3 - 5 = -2$. It seems you made a sign error, resulting in $a = 2$."
            },
            {
                "ans": "$$\\text{Midpoint: } \\left( \\dfrac{3}{ 2 }, \\dfrac{11}{ 2 } \\right); \\quad S(-2, 6); \\quad \\text{Product: } -\\dfrac{1}{ 7 }$$",
                "feedback": "Check your perpendicular proof. To prove that two lines are perpendicular, you must show that the product of their gradients is $-1$. Simply stating one of the individual gradients is not a complete proof."
            },
            {
                "ans": "$$\\text{Midpoint: } (3, 11); \\quad S(1, 7); \\quad \\text{Product: } -1$$",
                "feedback": "Check your midpoint formula. Remember that the midpoint is the average of the coordinates, so you must divide the sum of the coordinates by 2: $\\left( \\dfrac{x_1+x_2}{2}, \\dfrac{y_1+y_2}{2} \\right)$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Diagonals of Quadrilaterals",
            "content": "In any parallelogram (including rectangles, rhombuses, and squares), the diagonals bisect each other. This means the midpoint of one diagonal is identical to the midpoint of the other, which is an incredibly fast geometric shortcut for finding the coordinates of a missing vertex without needing vectors."
        }
    }










];