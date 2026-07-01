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
    }

];