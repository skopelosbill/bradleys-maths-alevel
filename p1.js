const problemBank = [
    {
        "id": "004001",
        "major_area": "Algebra & Functions",
        "topic": "Polynomials",
        "subtopics": [
            "Factor Theorem"
        ],
        "img": false,
        "q": "Let $\\text{f}(x) = 2x^3 - kx^2 + 5x + 3k$.<br>Given that $(x - 2)$ is a factor of $\\text{f}(x)$, find the value of the constant $k$.",
        "steps": [
            "According to the **Factor Theorem**, if $(x - 2)$ is a factor of $\\text{f}(x)$, then evaluating the polynomial at $x = 2$ must equal zero: $\\text{f}(2) = 0$.",
            "We substitute $x = 2$ into the expression for $\\text{f}(x)$:<br>$$\\text{f}(2) = 2(2)^3 - k(2)^2 + 5(2) + 3k$$",
            "Evaluating the powers and simplifying each term gives:<br>$$\\text{f}(2) = 2(8) - 4k + 10 + 3k$$<br>$$\\text{f}(2) = 16 - 4k + 10 + 3k$$",
            "Combining the numerical terms and the $k$ terms yields:<br>$$(16 + 10) + (-4k + 3k) = 0$$<br>$$26 - k = 0$$",
            "Solving this linear equation gives our final value for $k$:<br>$$k = 26$$",
            "Final Answer: $$k = 26$$"
        ],
        "pi_options": [
            {
                "ans": "$$k = -26$$",
                "feedback": "You evaluated $\\text{f}(-2) = 0$ instead of $\\text{f}(2) = 0$. Since the linear factor is $(x - 2)$, the corresponding root to substitute is $x = 2$, not $x = -2$."
            },
            {
                "ans": "$$k = -13$$",
                "feedback": "You forgot to square the $x$-value when multiplying by $k$, evaluating the $-kx^2$ term as simply $-k$. Remember that at $x=2$, $-kx^2$ becomes $-k(2)^2 = -4k$."
            },
            {
                "ans": "$$k = 24$$",
                "feedback": "It appears you set $\\text{f}(2) = 2$ instead of $\\text{f}(2) = 0$. Since $(x - 2)$ is a *factor*, the remainder must be exactly zero according to the Factor Theorem."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Root Sign Rule",
            "content": "Always double-check your root's sign before substituting. If $(x - c)$ is the factor, you substitute $x = c$. If it is $(x + c)$, you substitute $x = -c$. A tiny sign error here will instantly derail all of your subsequent algebra."
        }
    },
    {
        "id": "004002",
        "major_area": "Algebra & Functions",
        "topic": "Polynomials",
        "subtopics": [
            "Factor Theorem"
        ],
        "img": false,
        "q": "Let $\\text{f}(x) = 4x^3 + ax^2 - 7x + 2a$.<br>Given that $(x + 2)$ is a factor of $\\text{f}(x)$, find the value of the constant $a$.",
        "steps": [
            "According to the **Factor Theorem**, if $(x + 2)$ is a factor of $\\text{f}(x)$, then evaluating the polynomial at $x = -2$ must equal zero: $\\text{f}(-2) = 0$.",
            "We substitute $x = -2$ into the expression for $\\text{f}(x)$:<br>$$\\text{f}(-2) = 4(-2)^3 + a(-2)^2 - 7(-2) + 2a$$",
            "Evaluating the powers and simplifying each term (keeping close track of negative signs) gives:<br>$$\\text{f}(-2) = 4(-8) + a(4) + 14 + 2a$$<br>$$\\text{f}(-2) = -32 + 4a + 14 + 2a$$",
            "Combining the numerical terms and the $a$ terms yields:<br>$$(-32 + 14) + (4a + 2a) = 0$$<br>$$-18 + 6a = 0$$",
            "Solving this linear equation gives our final value for $a$:<br>$$6a = 18 \\implies a = 3$$",
            "Final Answer: $$a = 3$$"
        ],
        "pi_options": [
            {
                "ans": "$$a = -3$$",
                "feedback": "You evaluated $\\text{f}(2) = 0$ instead of $\\text{f}(-2) = 0$. Since the linear factor is $(x + 2)$, the corresponding root to substitute is $x = -2$, not $x = 2$."
            },
            {
                "ans": "$$a = \\dfrac{23}{3}$$",
                "feedback": "Check your signs during substitution. You likely evaluated the term $-7(-2)$ as $-14$ instead of $+14$. Multiplying two negative numbers yields a positive product."
            },
            {
                "ans": "$$a = -9$$",
                "feedback": "Be careful when squaring negative numbers. $(-2)^2 = +4$, not $-4$. Any real number squared is always positive."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Negative Bases",
            "content": "When cubing and squaring negative numbers like $-2$, always write them inside brackets on your calculator: $(-2)^3 = -8$ and $(-2)^2 = 4$. Leaving brackets out can cause your calculator to evaluate $-2^2$ as $-4$, introducing a fatal sign error."
        }
    },
    {
        "id": "004003",
        "major_area": "Algebra & Functions",
        "topic": "Polynomials",
        "subtopics": [
            "Factor Theorem",
        ],
        "img": false,
        "q": "Let $\\text{f}(x) = 3x^3 - 2kx^2 + 5x + 4k$.<br>Given that $(x - 1)$ is a factor of $\\text{f}(x)$, find the value of the constant $k$.",
        "steps": [
            "According to the **Factor Theorem**, if $(x - 1)$ is a factor of $\\text{f}(x)$, then evaluating the polynomial at $x = 1$ must equal zero: $\\text{f}(1) = 0$.",
            "We substitute $x = 1$ into the expression for $\\text{f}(x)$:<br>$$\\text{f}(1) = 3(1)^3 - 2k(1)^2 + 5(1) + 4k$$",
            "Simplifying the powers and combining terms gives:<br>$$\\text{f}(1) = 3 - 2k + 5 + 4k$$",
            "Combining the constant terms and the $k$ terms yields:<br>$$(3 + 5) + (-2k + 4k) = 0$$<br>$$8 + 2k = 0$$",
            "Solving this linear equation gives our final value for $k$:<br>$$2k = -8 \\implies k = -4$$",
            "Final Answer: $$k = -4$$"
        ],
        "pi_options": [
            {
                "ans": "$$k = 4$$",
                "feedback": "You evaluated $\\text{f}(-1) = 0$ instead of $\\text{f}(1) = 0$. Since the linear factor is $(x - 1)$, the root is $x = 1$."
            },
            {
                "ans": "$$k = -\\dfrac{4}{3}$$",
                "feedback": "Be careful with order of operations. The term $-2kx^2$ evaluated at $x=1$ becomes $-2k(1)^2 = -2k$. The negative sign belongs to the coefficient and is not squared."
            },
            {
                "ans": "$$k = -1$$",
                "feedback": "Double-check your basic arithmetic. Combining the constant terms $3$ and $5$ yields $8$, not $2$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Simplification First",
            "content": "When $x = 1$, calculations become incredibly fast because $1^3 = 1$ and $1^2 = 1$. The expression simply collapses to the sum of its coefficients: $3 - 2k + 5 + 4k = 0$. Use this shortcut to save precious exam time!"
        }
    },
    {
        "id": "004004",
        "major_area": "Algebra & Functions",
        "topic": "Polynomials",
        "subtopics": [
            "Factor Theorem"
        ],
        "img": false,
        "q": "Let $\\text{f}(x) = 2x^3 - ax^2 - 8x + 3a$.<br>Given that $(x - 3)$ is a factor of $\\text{f}(x)$, find the value of the constant $a$.",
        "steps": [
            "According to the **Factor Theorem**, if $(x - 3)$ is a factor of $\\text{f}(x)$, then evaluating the polynomial at $x = 3$ must equal zero: $\\text{f}(3) = 0$.",
            "We substitute $x = 3$ into the expression for $\\text{f}(x)$:<br>$$\\text{f}(3) = 2(3)^3 - a(3)^2 - 8(3) + 3a$$",
            "Evaluating the powers and simplifying each term gives:<br>$$\\text{f}(3) = 2(27) - 9a - 24 + 3a$$<br>$$\\text{f}(3) = 54 - 9a - 24 + 3a$$",
            "Combining the constant terms and the $a$ terms yields:<br>$$(54 - 24) + (-9a + 3a) = 0$$<br>$$30 - 6a = 0$$",
            "Solving this linear equation gives our final value for $a$:<br>$$6a = 30 \\implies a = 5$$",
            "Final Answer: $$a = 5$$"
        ],
        "pi_options": [
            {
                "ans": "$$a = -5$$",
                "feedback": "You evaluated $\\text{f}(-3) = 0$ instead of $\\text{f}(3) = 0$. Since the linear factor is $(x - 3)$, the root is $x = 3$."
            },
            {
                "ans": "$$a = 32$$",
                "feedback": "Be mindful of BIDMAS/indices. The term $2x^3$ means $2 \\times (x^3)$, not $(2x)^3$. You must cube $3$ first to get $27$, then multiply by $2$ to get $54$."
            },
            {
                "ans": "$$a = 2.5$$",
                "feedback": "Check your algebraic collection of $a$ terms. We have $-9a + 3a$, which simplifies to $-6a$, not $-12a$."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Order of Operations",
            "content": "Remember that index powers always have priority over multiplication. In the term $2x^3$, the exponent only applies to the $x$. You must evaluate $x^3$ first before doubling the result."
        }
    },
    {
        "id": "004005",
        "major_area": "Algebra & Functions",
        "topic": "Polynomials",
        "subtopics": [
            "Factor Theorem"
        ],
        "img": false,
        "q": "Let $\\text{f}(x) = 2x^3 + 3px^2 - 2x - 3p$.<br>Given that $(x + 3)$ is a factor of $\\text{f}(x)$, find the value of the constant $p$.",
        "steps": [
            "According to the **Factor Theorem**, if $(x + 3)$ is a factor of $\\text{f}(x)$, then evaluating the polynomial at $x = -3$ must equal zero: $\\text{f}(-3) = 0$.",
            "We substitute $x = -3$ into the expression for $\\text{f}(x)$:<br>$$\\text{f}(-3) = 2(-3)^3 + 3p(-3)^2 - 2(-3) - 3p$$",
            "Evaluating the powers and simplifying each term (taking close care with negative signs) gives:<br>$$\\text{f}(-3) = 2(-27) + 3p(9) + 6 - 3p$$<br>$$\\text{f}(-3) = -54 + 27p + 6 - 3p$$",
            "Combining the numerical terms and the $p$ terms yields:<br>$$(-54 + 6) + (27p - 3p) = 0$$<br>$$-48 + 24p = 0$$",
            "Solving this linear equation gives our final value for $p$:<br>$$24p = 48 \\implies p = 2$$",
            "Final Answer: $$p = 2$$"
        ],
        "pi_options": [
            {
                "ans": "$$p = -2$$",
                "feedback": "You evaluated $\\text{f}(3) = 0$ instead of $\\text{f}(-3) = 0$. Since the linear factor is $(x + 3)$, you must substitute $x = -3$."
            },
            {
                "ans": "$$p = 2.5$$",
                "feedback": "Watch your signs carefully. Substituting $x = -3$ into the term $-2x$ yields $-2 \\times (-3) = +6$. A sign slip here will change your final linear equation."
            },
            {
                "ans": "$$p = -1.6$$",
                "feedback": "Be careful when squaring negative numbers: $(-3)^2 = +9$. It appears you evaluated it as $-9$, which changed your $p$ coefficient from $+27p$ to $-27p$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Two-Step Simplification",
            "content": "With multiple terms containing your target constant (both $3px^2$ and $-3p$), group all constant terms together and all variable terms together before attempting to solve. Keeping your workspaces separate prevents simple algebraic slips."
        }
    }

];