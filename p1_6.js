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
            "Solve the left-hand inequality to find the lower bound for $x$:<br>\\begin{aligned} -8 &\\le 3x - 1 \\\\ -7 &\\le 3x \\\\ x &\\ge -\\dfrac{7}{3} \\end{aligned}",
            "Solve the right-hand inequality to find the upper bound for $x$:<br>\\begin{aligned} 3x - 1 &\\le 8 \\\\ 3x &\\le 9 \\\\ x &\\le 3 \\end{aligned}",
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
            "Solve the first case, which represents the positive outer region:<br>\\begin{aligned} 2x + 3 &> 7 \\\\ 2x &> 4 \\\\ x &> 2 \\end{aligned}",
            "Solve the second case, which represents the negative outer region:<br>\\begin{aligned} 2x + 3 &< -7 \\\\ 2x &< -10 \\\\ x &< -5 \\end{aligned}",
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
            "Rearrange the inequality to bring all terms to the right-hand side, keeping the coefficient of $x^2$ positive:<br>\\begin{aligned} 0 &\\le \\left(4x^2 + 4x + 1\\right) - \\left(x^2 - 4x + 4\\right) \\\\ 0 &\\le 3x^2 + 8x - 3 \\\\ 3x^2 + 8x - 3 &\\ge 0 \\end{aligned}",
            "Find the critical values of the quadratic equation by solving $3x^2 + 8x - 3 = 0$ using the quadratic formula:<br>\\begin{aligned} x &= \\dfrac{-8 \\pm \\sqrt{8^2 - 4(3)(-3)}}{2(3)} \\\\ &= \\dfrac{-8 \\pm \\sqrt{64 + 36}}{6} \\\\ &= \\dfrac{-8 \\pm 10}{6} \\end{aligned}<br>This gives the critical points:<br>$$x = \\dfrac{1}{3} \\quad \\text{and} \\quad x = -3$$",
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
            "Combine the terms over a common denominator to form a single fraction:<br>\\begin{aligned} \\dfrac{6 - 3(x - 2)}{x - 2} &\\le 0 \\\\ \\dfrac{6 - 3x + 6}{x - 2} &\\le 0 \\\\ \\dfrac{12 - 3x}{x - 2} &\\le 0 \\end{aligned}",
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
            "Solve the left-hand inequality to establish the first condition:<br>\\begin{aligned} -4 &< x^2 - 5 \\\\ 1 &< x^2 \\\\ x^2 &> 1 \\implies x < -1 \\quad \\text{or} \\quad x > 1 \\end{aligned}",
            "Solve the right-hand inequality to establish the second condition:<br>\\begin{aligned} x^2 - 5 &< 4 \\\\ x^2 &< 9 \\implies -3 < x < 3 \\end{aligned}",
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
            "Reflecting a function in the line $y = x$ swaps the roles of $x$ and $y$, which is equivalent to finding its inverse function. Swapping $x$ and $y$ and rearranging to isolate $y$ gives:<br>\\begin{aligned} x &= 5^y \\\\ y &= \\log_5 x \\end{aligned}<br>So, the equation of the reflected curve is $f(x) = \\log_5 x$.<br><br>Final Answer: $$(0,1), \\quad f(x) = \\log_5 x$$"
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
            "Find the $y$-intercept of the curve by substituting $x = 0$:<br>$$y = 2^0 - 4 = 1 - 4 = -3 \\implies (0, -3)$$<br>Find the $x$-intercept of the curve by setting $y = 0$ and solving for $x$:<br>$$\\begin{aligned} 2^x - 4 &= 0 \\\\ 2^x &= 4 \\\\ 2^x &= 2^2 \\implies x = 2 \\end{aligned}$$<br>This gives the $x$-intercept coordinates of $(2, 0)$.",
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
            "Find the $y$-intercept of the curve by substituting $x = 0$:<br>$$y = \\ln(0 + 3) = \\ln 3 \\implies (0, \\ln 3)$$<br>Find the $x$-intercept of the curve by setting $y = 0$ and solving for $x$:<br>$$\\begin{aligned} \\ln(x + 3) &= 0 \\\\ x + 3 &= e^{0} \\\\ x + 3 &= 1 \\implies x = -2 \\end{aligned}$$<br>This gives the exact $x$-intercept coordinates of $(-2, 0)$.",
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
            "Reflecting a function in the $x$-axis negates all of its $y$-values ($y \\mapsto -y$). Applying this to $y = \\ln x$ gives:<br>\\begin{aligned} -y &= \\ln x \\\\ y &= -\\ln x \\end{aligned}<br>Therefore, the expression for the reflected curve is $g(x) = -\\ln x$.<br><br>Final Answer: $$(1,0), \\quad g(x) = -\\ln x$$"
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
            "Find the $y$-intercept of the curve by substituting $x = 0$:<br>$$y = 2 - e^{0} = 2 - 1 = 1 \\implies (0, 1)$$<br>Find the $x$-intercept of the curve by setting $y = 0$ and solving for $x$:<br>$$\\begin{aligned} 2 - e^{-x} &= 0 \\\\ e^{-x} &= 2 \\\\ -x &= \\ln 2 \\implies x = -\\ln 2 \\end{aligned}$$<br>This gives the exact $x$-intercept coordinates of $(-\\ln 2, 0)$.",
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
    }


];