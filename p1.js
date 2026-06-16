window.ALEVEL_QUESTIONS = [
    {
        "id": "004001",
        "major_area": "Algebra & Functions",
        "topic": "Polynomials",
        "subtopic": [
            "Factor Theorem"
        ],
        "img": false,
        "question": "Let $\\text{f}(x) = 2x^3 - kx^2 + 5x + 3k$.<br>Given that $(x - 2)$ is a factor of $\\text{f}(x)$, find the value of the constant $k$.",
        "steps": [
            "According to the <strong>Factor Theorem</strong>, if $(x - 2)$ is a factor of $\\text{f}(x)$, then evaluating the polynomial at $x = 2$ must equal zero: $\\text{f}(2) = 0$.",
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
        "subtopic": [
            "Factor Theorem"
        ],
        "img": false,
        "question": "Let $\\text{f}(x) = 4x^3 + ax^2 - 7x + 2a$.<br>Given that $(x + 2)$ is a factor of $\\text{f}(x)$, find the value of the constant $a$.",
        "steps": [
            "According to the <strong>Factor Theorem</strong>, if $(x + 2)$ is a factor of $\\text{f}(x)$, then evaluating the polynomial at $x = -2$ must equal zero: $\\text{f}(-2) = 0$.",
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
        "subtopic": [
            "Factor Theorem"
        ],
        "img": false,
        "question": "Let $\\text{f}(x) = 3x^3 - 2kx^2 + 5x + 4k$.<br>Given that $(x - 1)$ is a factor of $\\text{f}(x)$, find the value of the constant $k$.",
        "steps": [
            "According to the <strong>Factor Theorem</strong>, if $(x - 1)$ is a factor of $\\text{f}(x)$, then evaluating the polynomial at $x = 1$ must equal zero: $\\text{f}(1) = 0$.",
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
        "subtopic": [
            "Factor Theorem"
        ],
        "img": false,
        "question": "Let $\\text{f}(x) = 2x^3 - ax^2 - 8x + 3a$.<br>Given that $(x - 3)$ is a factor of $\\text{f}(x)$, find the value of the constant $a$.",
        "steps": [
            "According to the <strong>Factor Theorem</strong>, if $(x - 3)$ is a factor of $\\text{f}(x)$, then evaluating the polynomial at $x = 3$ must equal zero: $\\text{f}(3) = 0$.",
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
        "subtopic": [
            "Factor Theorem"
        ],
        "img": false,
        "question": "Let $\\text{f}(x) = 2x^3 + 3px^2 - 2x - 3p$.<br>Given that $(x + 3)$ is a factor of $\\text{f}(x)$, find the value of the constant $p$.",
        "steps": [
            "According to the <strong>Factor Theorem</strong>, if $(x + 3)$ is a factor of $\\text{f}(x)$, then evaluating the polynomial at $x = -3$ must equal zero: $\\text{f}(-3) = 0$.",
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
    },
    {
  "id": "004006",
  "major_area": "Algebra & Functions",
  "topic": "Small Angle Approximations",
  "subtopics": ["Small Angle Approximation"],
  "img": "images/p1/004006.png",
  "question": "The diagram shows a sketch of the curve $y = \\sin x$, where $x$ is measured in radians.<br>(a) Use the diagram to explain why the equation $$\\sin x - 2x + \\tfrac14 = 0$$ has exactly one real root.<br>(b) Let the root be $\\beta$. Given that $\\beta$ is small, use the small-angle approximation for $\\sin x$ to estimate the value of $\\beta$ to 3 decimal places.",
  "steps": [
    "From the diagram, the curve $y = \\sin x$ starts at the origin with gradient 1, while the line $y = 2x - \\tfrac14$ starts below the curve and has a steeper gradient.",
    "Because the line is steeper, it crosses the curve once for a small positive value of $x$, and afterwards the line increases without bound while $\\sin x$ remains between $-1$ and $1$.",
    "Therefore the equation has exactly one real root.",
    "Using the small-angle approximation $\\sin x \\approx x$, substitute into the equation: $$x - 2x + \\tfrac14 = 0.$$",
    "Simplifying gives $$-x + \\tfrac14 = 0 \\implies x = \\tfrac14.$$",
    "Final Answer: $$\\beta \\approx 0.250.$$ <img src='images/p1/004006_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>"
  ],
  "pi_options": [
    {
      "ans": "$$\\beta = 0.125$$",
      "feedback": "You halved the constant term incorrectly. The equation becomes $-x + \\tfrac14 = 0$, not $-2x + \\tfrac14 = 0$."
    },
    {
      "ans": "$$\\beta = 0.500$$",
      "feedback": "You added the $x$ terms instead of subtracting them. The expression is $x - 2x$, which equals $-x$."
    },
    {
      "ans": "$$\\beta = -0.250$$",
      "feedback": "A negative root would require the line to start above the curve, which the diagram shows is not the case."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Keep the Linear Terms Alive",
    "content": "When using small-angle approximations, ensure the linear terms do not cancel. If they do, the approximation becomes useless and you must include higher-order terms."
  }
},
{
  "id": "004007",
  "major_area": "Algebra & Functions",
  "topic": "Small Angle Approximations",
  "subtopics": ["Small Angle Approximation"],
  "img": "images/p1/004007.png",
  "question": "The diagram shows a sketch of the curve $y = \\tan x$ for values of $x$ close to zero.<br>(a) Use the diagram to explain why the equation $$\\tan x - 3x + 0.2 = 0$$ has exactly one real root in the interval $-0.5 < x < 0.5$.<br>(b) Let the root be $\\gamma$. Given that $\\gamma$ is small, use the small-angle approximation for $\\tan x$ to estimate the value of $\\gamma$ to 3 decimal places.",
  "steps": [
    "From the diagram, $y = \\tan x$ is increasing and passes through the origin with gradient 1.",
    "The line $y = 3x - 0.2$ is steeper and starts below the curve at $x = 0$.",
    "The two graphs cross exactly once in the interval shown, so the equation has exactly one real root.",
    "Using the small-angle approximation $\\tan x \\approx x$, substitute into the equation: $$x - 3x + 0.2 = 0.$$",
    "Simplifying gives $$-2x + 0.2 = 0 \\implies x = 0.1.$$",
    "Final Answer: $$\\gamma \\approx 0.100.$$ <img src='images/p1/004007_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>"
  ],
  "pi_options": [
    {
      "ans": "$$\\gamma = 0.200$$",
      "feedback": "You solved $-x + 0.2 = 0$ instead of $-2x + 0.2 = 0$."
    },
    {
      "ans": "$$\\gamma = -0.100$$",
      "feedback": "A negative root contradicts the diagram, where the line crosses the curve for a positive $x$."
    },
    {
      "ans": "$$\\gamma = 0.050$$",
      "feedback": "You divided by 4 instead of 2 when rearranging the equation."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Trust the Gradient",
    "content": "When comparing a curve and a straight line, the relative steepness near the origin often tells you how many intersections to expect."
  }
},
{
  "id": "004008",
  "major_area": "Algebra & Functions",
  "topic": "Small Angle Approximations",
  "subtopics": ["Small Angle Approximation"],
  "img": "images/p1/004008.png",
  "question": "The diagram shows a sketch of the curve $y = \\cos(2x)$, where $x$ is measured in radians.<br>.(a) Use the diagram to explain why the equation $$\\cos(2x) - x - \\tfrac13 = 0$$ has exactly one real root.<br>(b) Let the root be $\\delta$. Given that $\\delta$ is small, use the small-angle approximation for $\\cos(2x)$ to estimate the value of $\\delta$ to 3 decimal places.",
  "steps": [
    "From the diagram, $y = \\cos(2x)$ starts at 1 when $x = 0$, while the line $y = x + \\tfrac13$ starts at $\\tfrac13$ and increases.",
    "The curve decreases while the line increases, so they cross once near the origin.",
    "After this, the line grows without bound while the cosine curve remains between -1 and 1, so there are no further intersections.",
    "Using the small-angle approximation $\\cos(2x) \\approx 1 - 2x^2$, substitute into the equation: $$1 - 2x^2 - x - \\tfrac13 = 0.$$",
    "Simplifying gives $$2x^2 + x - \\tfrac23 = 0.$$",
    "Solving the quadratic gives $$x = \\frac{-1 + \\sqrt{19/3}}{4} \\approx 0.379.$$",
    "Final Answer: $$\\delta \\approx 0.379.$$ <img src='images/p1/004008_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>"
  ],
  "pi_options": [
    {
      "ans": "$$\\delta = 0.189$$",
      "feedback": "You halved the quadratic coefficient incorrectly when applying the quadratic formula."
    },
    {
      "ans": "$$\\delta = -0.379$$",
      "feedback": "The negative root is not valid because the diagram shows the intersection occurring for positive $x$."
    },
    {
      "ans": "$$\\delta = 0.500$$",
      "feedback": "You used $\\cos(2x) \\approx 1$ and ignored the $x$ and $x^2$ terms, which is not appropriate here."
    }
  ],
  "bradley_insight": {
    "type": "deeper",
    "title": "The Head Teacher's Eye: Quadratics from Approximations",
    "content": "When approximating cosine near zero, the resulting equation often becomes quadratic. Solving it carefully is essential for an accurate estimate."
  }
},
{
  "id": "004009",
  "major_area": "Algebra & Functions",
  "topic": "Small Angle Approximations",
  "subtopics": ["Small Angle Approximation"],
  "img": "images/p1/004009.png",
  "question": "The diagram shows a sketch of the curve $y = e^{-x}$, where $x$ is measured in radians.<br>(a) Use the diagram to explain why the equation $$e^{-x} - 1.5x - 0.8 = 0$$ has exactly one real root.<br>(b) Let the root be $\\varepsilon$. Given that $\\varepsilon$ is small, use the small-angle approximation for $e^{-x}$ to estimate the value of $\\varepsilon$ to 3 decimal places.",
  "steps": [
    "From the diagram, $y = e^{-x}$ decreases from 1 as $x$ increases, while the line $y = 1.5x + 0.8$ increases.",
    "The two graphs cross once near the origin and do not meet again because the exponential decays while the line grows without bound.",
    "Using the small-angle approximation $e^{-x} \\approx 1 - x$, substitute into the equation: $$1 - x - 1.5x - 0.8 = 0.$$",
    "Simplifying gives $$0.2 - 2.5x = 0 \\implies x = 0.08.$$",
    "Final Answer: $$\\varepsilon \\approx 0.080.$$ <img src='images/p1/004009_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>"
  ],
  "pi_options": [
    {
      "ans": "$$\\varepsilon = 0.040$$",
      "feedback": "You divided by 5 instead of 2.5 when rearranging the equation."
    },
    {
      "ans": "$$\\varepsilon = -0.080$$",
      "feedback": "A negative root contradicts the diagram, where the line crosses the curve for positive $x$."
    },
    {
      "ans": "$$\\varepsilon = 0.200$$",
      "feedback": "You forgot to combine the $x$ terms correctly: $-x - 1.5x = -2.5x$."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Exponentials Behave Nicely",
    "content": "Near zero, $e^{-x}$ is almost perfectly linear. This makes small-angle approximations extremely effective for estimating roots."
  }
},
{
  "id": "004010",
  "major_area": "Algebra & Functions",
  "topic": "Small Angle Approximations",
  "subtopics": ["Small Angle Approximation"],
  "img": "images/p1/004010.png",
  "question": "The diagram shows a sketch of the curve $y = \\sin(3x) + 0.5$, where $x$ is measured in radians.<br>(a) Use the diagram to explain why the equation $$\\sin(3x) + 0.5 - 2x = 0$$ has exactly one real root.<br>(b) Let the root be $\\zeta$. Given that $\\zeta$ is small, use the small-angle approximation for $\\sin(3x)$ to estimate the value of $\\zeta$ to 3 decimal places.",
  "steps": [
    "From the diagram, $y = \\sin(3x) + 0.5$ starts at 0.5 with initial gradient about 3, while the line $y = 2x$ starts at the origin with gradient 2.",
    "The curve begins above the line and crosses it once for a small negative value of $x$.",
    "After this, the line continues to increase while the curve oscillates, so there are no further intersections.",
    "Using the small-angle approximation $\\sin(3x) \\approx 3x$, substitute into the equation: $$3x + 0.5 - 2x = 0.$$",
    "Simplifying gives $$x + 0.5 = 0 \\implies x = -0.5.$$",
    "Final Answer: $$\\zeta \\approx -0.500.$$ <img src='images/p1/004010_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>"
  ],
  "pi_options": [
    {
      "ans": "$$\\zeta = 0.500$$",
      "feedback": "The diagram shows the intersection occurring for a negative value of $x$, not a positive one."
    },
    {
      "ans": "$$\\zeta = -0.250$$",
      "feedback": "You halved the constant term incorrectly. The equation is $x + 0.5 = 0$, not $2x + 0.5 = 0$."
    },
    {
      "ans": "$$\\zeta = -1.000$$",
      "feedback": "You doubled the constant term incorrectly when rearranging the equation."
    }
  ],
  "bradley_insight": {
    "type": "deeper",
    "title": "The Head Teacher's Eye: Oscillation vs Linearity",
    "content": "When a sinusoidal curve is shifted vertically, its first intersection with a straight line often occurs very close to the origin. Small-angle approximations capture this behaviour neatly."
  }
},
    {
        "id": "004011",
        "major_area": "Differentiation",
        "topic": "Differentiation",
        "subtopic": [
            "Quotient Rule"
        ],
        "img": false,
        "question": "A curve has the equation:<br>$$y = \\dfrac{3x^2 + 12x}{(x+2)^2}, \\quad x \\ne -2$$<br><strong>(a)</strong> Show that $\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{A}{(x+2)^n}$, where $A$ and $n$ are constants to be found.<br><strong>(b)</strong> Hence, deduce the range of values for $x$ for which $\\dfrac{\\text{d}y}{\\text{d}x} < 0$.",
        "steps": [
            "<strong>Part (a):</strong> We begin by identifying the numerator as $u = 3x^2 + 12x$ and the denominator as $v = (x+2)^2$.",
            "Differentiating both terms with respect to $x$ gives:<br>$$u' = 6x + 12 = 6(x+2)$$<br>$$v' = 2(x+2)$$",
            "Using the **Quotient Rule**, $\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{u'v - uv'}{v^2}$:<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{(6x+12)(x+2)^2 - (3x^2+12x) \\cdot 2(x+2)}{(x+2)^4}$$",
            "We can factorise out a common term of $(x+2)$ from the numerator to simplify:<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{(x+2) \\left[ (6x+12)(x+2) - 2(3x^2+12x) \\right]}{(x+2)^4}$$<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{(6x+12)(x+2) - 2(3x^2+12x)}{(x+2)^3}$$",
            "Expanding and simplifying the remaining terms in the numerator:<br>$$(6x+12)(x+2) = 6x^2 + 24x + 24$$<br>$$2(3x^2+12x) = 6x^2 + 24x$$<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{(6x^2 + 24x + 24) - (6x^2 + 24x)}{(x+2)^3}$$<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{24}{(x+2)^3}$$<br>Therefore, the constants are $A = 24$ and $n = 3$.",
            "<strong>Part (b):</strong> For $\\dfrac{\\text{d}y}{\\text{d}x} < 0$:<br>$$\\dfrac{24}{(x+2)^3} < 0$$",
            "Since the numerator is a positive constant ($24 > 0$), the sign of the fraction is determined entirely by the denominator. Therefore, we require the denominator to be negative:<br>$$(x+2)^3 < 0 \\implies x + 2 < 0 \\implies x < -2$$",
            "Final Answer: <strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{24}{(x+2)^3}$$ <strong>(b)</strong> $$x < -2$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{24}{(x+2)^3}$$ <strong>(b)</strong> $$x > -2$$",
                "feedback": "You probably made an inequality error in Part (b). For the fraction to be negative, the denominator $(x+2)^3$ must be negative. Since an odd power preserves the negative sign, this requires $x + 2 < 0$, which simplifies to $x < -2$."
            },
            {
                "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{12x^2 + 48x + 24}{(x+2)^3}$$ <strong>(b)</strong> $$x < -2$$",
                "feedback": "You probably used the Product Rule formula (adding the two terms in your numerator) instead of the Quotient Rule formula (subtracting them). Check your formula sheet: the numerator must be $u'v - uv'$."
            },
            {
                "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{24}{(x+2)^4}$$ <strong>(b)</strong> $$x < -2$$",
                "feedback": "You forgot to decrease the power of the denominator when cancelling out the common factor of $(x + 2)$ from your numerator. The denominator should be $(x+2)^3$, not $(x+2)^4$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Quotient Rule Cancelling",
            "content": "When applying the Quotient Rule to functions with a squared denominator like $(x+a)^2$, both terms in your numerator will always contain a common factor of $(x+a)$. Always factorise and cancel this term out first before expanding the rest of the numerator. It saves significant time and prevents algebraic errors."
        }
    },
    {
        "id": "004012",
        "major_area": "Differentiation",
        "topic": "Differentiation",
        "subtopic": [
            "Quotient Rule"
        ],
        "img": false,
        "question": "A curve has the equation:<br>$$y = \\dfrac{-4x^2 - 8x}{(x+1)^2}, \\quad x \\ne -1$$<br><strong>(a)</strong> Show that $\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{A}{(x+1)^n}$, where $A$ and $n$ are constants to be found.<br><strong>(b)</strong> Hence, deduce the range of values for $x$ for which $\\dfrac{\\text{d}y}{\\text{d}x} < 0$.",
        "steps": [
            "<strong>Part (a):</strong> Let $u = -4x^2 - 8x$ and $v = (x+1)^2$.",
            "Differentiating both terms with respect to $x$ gives:<br>$$u' = -8x - 8 = -8(x+1)$$<br>$$v' = 2(x+1)$$",
            "Using the **Quotient Rule**, $\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{u'v - uv'}{v^2}$:<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{(-8x-8)(x+1)^2 - (-4x^2-8x) \\cdot 2(x+1)}{(x+1)^4}$$",
            "Factorising out $(x+1)$ from the numerator to simplify:<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{(x+1) \\left[ (-8x-8)(x+1) - 2(-4x^2-8x) \\right]}{(x+1)^4}$$<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{(-8x-8)(x+1) - 2(-4x^2-8x)}{(x+1)^3}$$",
            "Expanding and simplifying the remaining terms in the numerator:<br>$$(-8x-8)(x+1) = -8x^2 - 16x - 8$$<br>$$2(-4x^2-8x) = -8x^2 - 16x$$<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{(-8x^2 - 16x - 8) - (-8x^2 - 16x)}{(x+1)^3}$$<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{-8}{(x+1)^3}$$<br>Therefore, the constants are $A = -8$ and $n = 3$.",
            "<strong>Part (b):</strong> For $\\dfrac{\\text{d}y}{\\text{d}x} < 0$:<br>$$\\dfrac{-8}{(x+1)^3} < 0$$",
            "Since the numerator is a negative constant ($-8 < 0$), the fraction will only be negative when the denominator is positive. Therefore, we require:<br>$$(x+1)^3 > 0 \\implies x + 1 > 0 \\implies x > -1$$",
            "Final Answer: <strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{-8}{(x+1)^3}$$ <strong>(b)</strong> $$x > -1$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{-8}{(x+1)^3}$$ <strong>(b)</strong> $$x < -1$$",
                "feedback": "You probably forgot to account for the negative sign in your numerator when setting up your inequality in Part (b). Because $-8$ is negative, the fraction is only negative when the denominator is positive: $(x+1)^3 > 0$, which yields $x > -1$."
            },
            {
                "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{-8(2x+1)}{(x+1)^3}$$ <strong>(b)</strong> $$x > -1$$",
                "feedback": "Check your expanding and signs. When expanding $- (-8x^2 - 16x)$ in the numerator, the double negative turns both terms positive, which cancels out your quadratic and linear terms perfectly."
            },
            {
                "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{8}{(x+1)^3}$$ <strong>(b)</strong> $$x < -1$$",
                "feedback": "Check your differentiation of $u = -4x^2 - 8x$. The derivative must be $u' = -8x - 8$, not $+8x + 8$. This sign error changed the sign of your constant $A$ from negative to positive."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Negative Inequality Flip",
            "content": "In Part (b), be exceptionally careful when the numerator is negative. A fraction $\\frac{\\text{numerator}}{\\text{denominator}} < 0$ means the numerator and denominator must have opposite signs. Since the numerator is $-8$ (negative), the denominator must be positive to ensure the overall value is negative."
        }
    },
    {
        "id": "004013",
        "major_area": "Differentiation",
        "topic": "Differentiation",
        "subtopic": [
            "Quotient Rule"
        ],
        "img": false,
        "question": "A curve has the equation:<br>$$y = \\dfrac{2x^2 + 12x}{(x+3)^2}, \\quad x \\ne -3$$<br><strong>(a)</strong> Show that $\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{A}{(x+3)^n}$, where $A$ and $n$ are constants to be found.<br><strong>(b)</strong> Hence, deduce the range of values for $x$ for which $\\dfrac{\\text{d}y}{\\text{d}x} > 0$.",
        "steps": [
            "<strong>Part (a):</strong> Let $u = 2x^2 + 12x$ and $v = (x+3)^2$.",
            "Differentiating both terms with respect to $x$ gives:<br>$$u' = 4x + 12 = 4(x+3)$$<br>$$v' = 2(x+3)$$",
            "Using the **Quotient Rule**, $\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{u'v - uv'}{v^2}$:<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{(4x+12)(x+3)^2 - (2x^2+12x) \\cdot 2(x+3)}{(x+3)^4}$$",
            "Factorising out $(x+3)$ from the numerator to simplify:<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{(x+3) \\left[ (4x+12)(x+3) - 2(2x^2+12x) \\right]}{(x+3)^4}$$<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{(4x+12)(x+3) - 2(2x^2+12x)}{(x+3)^3}$$",
            "Expanding and simplifying the remaining terms in the numerator:<br>$$(4x+12)(x+3) = 4x^2 + 24x + 36$$<br>$$2(2x^2+12x) = 4x^2 + 24x$$<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{(4x^2 + 24x + 36) - (4x^2 + 24x)}{(x+3)^3}$$<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{36}{(x+3)^3}$$<br>Therefore, the constants are $A = 36$ and $n = 3$.",
            "<strong>Part (b):</strong> For $\\dfrac{\\text{d}y}{\\text{d}x} > 0$:<br>$$\\dfrac{36}{(x+3)^3} > 0$$",
            "Since the numerator is a positive constant ($36 > 0$), the fraction will only be positive when the denominator is positive. Therefore, we require:<br>$$(x+3)^3 > 0 \\implies x + 3 > 0 \\implies x > -3$$",
            "Final Answer: <strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{36}{(x+3)^3}$$ <strong>(b)</strong> $$x > -3$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{36}{(x+3)^3}$$ <strong>(b)</strong> $$x < -3$$",
                "feedback": "You probably set up your inequality incorrectly in Part (b). For the fraction to be positive ($> 0$), both the numerator and the denominator must have the same sign. Since $36 > 0$, the denominator must be positive: $x + 3 > 0$, which yields $x > -3$."
            },
            {
                "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{18}{(x+3)^3}$$ <strong>(b)</strong> $$x > -3$$",
                "feedback": "Check your expansion of $(4x+12)(x+3)$. The constant term is $12 \\times 3 = 36$, not $18$. Remember to multiply the constants together during your expansion."
            },
            {
                "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{36}{(x+3)^2}$$ <strong>(b)</strong> $$x > -3$$",
                "feedback": "You forgot to decrease the power of the denominator when cancelling out the common factor of $(x + 3)$ from your numerator. The denominator should be $(x+3)^3$, not $(x+3)^2$."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Odd vs Even Powers in Inequalities",
            "content": "Unlike squared denominators like $(x+3)^2$ which are always positive, cubed denominators like $(x+3)^3$ preserve the sign of their base. This means $(x+3)^3$ will be positive when $x > -3$, and negative when $x < -3$. Always look at the exponent first!"
        }
    },
    {
        "id": "004014",
        "major_area": "Differentiation",
        "topic": "Differentiation",
        "subtopic": [
            "Quotient Rule"
        ],
        "img": false,
        "question": "A curve has the equation:<br>$$y = \\dfrac{-3x^2 - 12x}{(x+2)^2}, \\quad x \\ne -2$$<br><strong>(a)</strong> Show that $\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{A}{(x+2)^n}$, where $A$ and $n$ are constants to be found.<br><strong>(b)</strong> Hence, deduce the range of values for $x$ for which $\\dfrac{\\text{d}y}{\\text{d}x} > 0$.",
        "steps": [
            "<strong>Part (a):</strong> Let $u = -3x^2 - 12x$ and $v = (x+2)^2$.",
            "Differentiating both terms with respect to $x$ gives:<br>$$u' = -6x - 12 = -6(x+2)$$<br>$$v' = 2(x+2)$$",
            "Using the **Quotient Rule**, $\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{u'v - uv'}{v^2}$:<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{(-6x-12)(x+2)^2 - (-3x^2-12x) \\cdot 2(x+2)}{(x+2)^4}$$",
            "Factorising out $(x+2)$ from the numerator to simplify:<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{(x+2) \\left[ (-6x-12)(x+2) - 2(-3x^2-12x) \\right]}{(x+2)^4}$$<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{(-6x-12)(x+2) - 2(-3x^2-12x)}{(x+2)^3}$$",
            "Expanding and simplifying the remaining terms in the numerator:<br>$$(-6x-12)(x+2) = -6x^2 - 24x - 24$$<br>$$2(-3x^2-12x) = -6x^2 - 24x$$<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{(-6x^2 - 24x - 24) - (-6x^2 - 24x)}{(x+2)^3}$$<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{-24}{(x+2)^3}$$<br>Therefore, the constants are $A = -24$ and $n = 3$.",
            "<strong>Part (b):</strong> For $\\dfrac{\\text{d}y}{\\text{d}x} > 0$:<br>$$\\dfrac{-24}{(x+2)^3} > 0$$",
            "Since the numerator is a negative constant ($-24 < 0$), the fraction will only be positive when the denominator is negative to produce a positive quotient. Therefore, we require:<br>$$(x+2)^3 < 0 \\implies x + 2 < 0 \\implies x < -2$$",
            "Final Answer: <strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{-24}{(x+2)^3}$$ <strong>(b)</strong> $$x < -2$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{-24}{(x+2)^3}$$ <strong>(b)</strong> $$x > -2$$",
                "feedback": "You probably made a sign error in Part (b). Because your numerator $-24$ is negative, the fraction is only positive when the denominator is negative (since a negative divided by a negative yields a positive quotient). Therefore, $(x+2)^3 < 0$, which yields $x < -2$."
            },
            {
                "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{24}{(x+2)^3}$$ <strong>(b)</strong> $$x > -2$$",
                "feedback": "Check your differentiation of $u = -3x^2 - 12x$. The derivative is $u' = -6x - 12$, not $+6x + 12$. This sign error changed the sign of your constant $A$ from negative to positive."
            },
            {
                "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{-12}{(x+2)^3}$$ <strong>(b)</strong> $$x < -2$$",
                "feedback": "Check your expansion of $(-6x-12)(x+2)$. The constant term is $-12 \\times 2 = -24$. Make sure you multiply all components of your binomial brackets correctly."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Positive Fraction Logic",
            "content": "For a fraction to be strictly positive ($> 0$), both the numerator and the denominator must have the same sign. If you find your numerator is negative (like $-24$), your denominator must also be negative. Remembering this basic algebraic sign rule prevents simple mistakes in part (b)."
        }
    },
    {
        "id": "004015",
        "major_area": "Differentiation",
        "topic": "Differentiation",
        "subtopic": [
            "Quotient Rule"
        ],
        "img": false,
        "question": "A curve has the equation:<br>$$y = \\dfrac{4x^2 + 8x}{(x+1)^2}, \\quad x \\ne -1$$<br><strong>(a)</strong> Show that $\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{A}{(x+1)^n}$, where $A$ and $n$ are constants to be found.<br><strong>(b)</strong> Hence, deduce the range of values for $x$ for which $\\dfrac{\\text{d}y}{\\text{d}x} < 0$.",
        "steps": [
            "<strong>Part (a):</strong> Let $u = 4x^2 + 8x$ and $v = (x+1)^2$.",
            "Differentiating both terms with respect to $x$ gives:<br>$$u' = 8x + 8 = 8(x+1)$$<br>$$v' = 2(x+1)$$",
            "Using the **Quotient Rule**, $\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{u'v - uv'}{v^2}$:<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{(8x+8)(x+1)^2 - (4x^2+8x) \\cdot 2(x+1)}{(x+1)^4}$$",
            "Factorising out $(x+1)$ from the numerator to simplify:<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{(x+1) \\left[ (8x+8)(x+1) - 2(4x^2+8x) \\right]}{(x+1)^4}$$<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{(8x+8)(x+1) - 2(4x^2+8x)}{(x+1)^3}$$",
            "Expanding and simplifying the remaining terms in the numerator:<br>$$(8x+8)(x+1) = 8x^2 + 16x + 8$$<br>$$2(4x^2+8x) = 8x^2 + 16x$$<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{(8x^2 + 16x + 8) - (8x^2 + 16x)}{(x+1)^3}$$<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{8}{(x+1)^3}$$<br>Therefore, the constants are $A = 8$ and $n = 3$.",
            "<strong>Part (b):</strong> For $\\dfrac{\\text{d}y}{\\text{d}x} < 0$:<br>$$\\dfrac{8}{(x+1)^3} < 0$$",
            "Since the numerator is a positive constant ($8 > 0$), the fraction will only be negative when the denominator is negative. Therefore, we require:<br>$$(x+1)^3 < 0 \\implies x + 1 < 0 \\implies x < -1$$",
            "Final Answer: <strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{8}{(x+1)^3}$$ <strong>(b)</strong> $$x < -1$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{8}{(x+1)^3}$$ <strong>(b)</strong> $$x > -1$$",
                "feedback": "You probably made an inequality boundary error in Part (b). For the fraction to be negative ($< 0$), the denominator $(x+1)^3$ must be negative. Since an odd power preserves the negative sign, this requires $x + 1 < 0$, which yields $x < -1$."
            },
            {
                "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{8(2x+1)}{(x+1)^3}$$ <strong>(b)</strong> $$x < -1$$",
                "feedback": "Check your expanding and term cancellations. When subtracting $2(4x^2 + 8x)$ from your left term expansion ($8x^2 + 16x + 8$), both the $8x^2$ and $16x$ cancel out completely, leaving only the constant $8$."
            },
            {
                "ans": "<strong>(a)</strong> $$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{8}{(x+1)^4}$$ <strong>(b)</strong> $$x < -1$$",
                "feedback": "You forgot to decrease the power of the denominator when cancelling out the common factor of $(x + 1)$ from your numerator. The denominator should be $(x+1)^3$, not $(x+1)^4$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Spotting algebraic cancellations",
            "content": "In problems like this, the quadratic and linear terms in your numerator will always cancel out perfectly during expansion, leaving only the constant integer $A$. If you find yourself left with an $x$ or $x^2$ term in the numerator, go back and check your expansion signs immediately!"
        }
    },
  {
    "id": "004016",
    "major_area": "Binomial Expansion",
    "topic": "Binomial Expansion",
    "subtopic": [
      "Negative fractional indices",
      "Interval of validity",
      "Approximations"
    ],
    "img": false,
    "question": "A function is defined by:<br>$$f(x) = \\dfrac{1}{\\sqrt{9 - 2x}}.$$<br><strong>(a)</strong> Find the first three terms, in ascending powers of $x$, of the binomial expansion of $f(x)$, giving each coefficient in its simplest form.<br>The expansion can be used to approximate $\\sqrt{3}$. Possible values of $x$ that could be substituted into this expansion are:<br>\\[x = -6, \\quad x = 3, \\quad x = -\\tfrac{1}{2}.\\]<br><strong>(b)(i)</strong> Without evaluating your expansion, state, giving a reason, which of these values of $x$ should not be used.<br><strong>(b)(ii)</strong> State, giving a reason, which of these values of $x$ would lead to an approximation of $\\sqrt{3}$.",
    "steps": [
      "<strong>Part (a):</strong> Rewrite $f(x)$ in binomial form by factorising the constant inside the square root:<br>$$f(x) = (9 - 2x)^{-1/2} = \\left[9\\left(1 - \\tfrac{2}{9}x\\right)\\right]^{-1/2} = 9^{-1/2}\\left(1 - \\tfrac{2}{9}x\\right)^{-1/2} = \\tfrac{1}{3}\\left(1 - \\tfrac{2}{9}x\\right)^{-1/2}.$$",
      "Use the binomial expansion $(1 + y)^{-1/2} = 1 - \\tfrac{1}{2}y + \\tfrac{3}{8}y^2 + \\dots$ with $y = -\\tfrac{2}{9}x$:<br>$$\\left(1 - \\tfrac{2}{9}x\\right)^{-1/2} = 1 - \\tfrac{1}{2}\\left(-\\tfrac{2}{9}x\\right) + \\tfrac{3}{8}\\left(-\\tfrac{2}{9}x\\right)^2 + \\dots$$<br>$$= 1 + \\tfrac{1}{9}x + \\tfrac{1}{54}x^2 + \\dots$$",
      "Multiply by the factor $\\tfrac{1}{3}$:<br>$$f(x) \\approx \\tfrac{1}{3}\\left(1 + \\tfrac{1}{9}x + \\tfrac{1}{54}x^2\\right) = \\tfrac{1}{3} + \\tfrac{1}{27}x + \\tfrac{1}{162}x^2.$$<br>So the first three terms are $$\\dfrac{1}{3} + \\dfrac{1}{27}x + \\dfrac{1}{162}x^2.$$",
      "<strong>Part (b)(i):</strong> The binomial expansion for $(1 - \\tfrac{2}{9}x)^{-1/2}$ is valid when $$\\left|\\tfrac{2}{9}x\\right| < 1 \\implies |x| < 4.5.$$",
      "Among the given values, $x = -6$ has $|-6| = 6 > 4.5$, so it lies outside the interval of validity. Therefore, $x = -6$ should not be used.",
      "<strong>Part (b)(ii):</strong> To approximate $\\sqrt{3}$, we need $$f(x) = \\dfrac{1}{\\sqrt{9 - 2x}} = \\dfrac{1}{\\sqrt{3}}.$$ This occurs when $9 - 2x = 3$, so $2x = 6$ and $x = 3$. Thus $x = 3$ is the value that leads to an approximation of $\\sqrt{3}$.",
      "Final Answer: <strong>(a)</strong> $$f(x) \\approx \\dfrac{1}{3} + \\dfrac{1}{27}x + \\dfrac{1}{162}x^2.$$ <strong>(b)(i)</strong> $x = -6$ should not be used. <strong>(b)(ii)</strong> $x = 3$ gives an approximation of $\\sqrt{3}$."
    ],
    "pi_options": [
      {
        "ans": "<strong>(a)</strong> $$f(x) \\approx \\dfrac{1}{3} + \\dfrac{1}{27}x + \\dfrac{1}{162}x^2.$$ <strong>(b)(i)</strong> $x = 3$ <strong>(b)(ii)</strong> $x = -\\tfrac{1}{2}$",
        "feedback": "In part (b)(i), the restriction $|x| < 4.5$ rules out $x = -6$, not $x = 3$. In part (b)(ii), $x = 3$ is the value that makes $9 - 2x = 3$, so it is the one that approximates $\\sqrt{3}$."
      },
      {
        "ans": "<strong>(a)</strong> $$f(x) \\approx \\dfrac{1}{3} + \\dfrac{2}{27}x + \\dfrac{1}{162}x^2.$$ <strong>(b)(i)</strong> $x = -6$ <strong>(b)(ii)</strong> $x = 3$",
        "feedback": "Your linear coefficient is incorrect. When expanding $(1 - \\tfrac{2}{9}x)^{-1/2}$, the first-order term is $+\\tfrac{1}{9}x$, which becomes $+\\tfrac{1}{27}x$ after multiplying by $\\tfrac{1}{3}$."
      },
      {
        "ans": "<strong>(a)</strong> $$f(x) \\approx \\dfrac{1}{3} + \\dfrac{1}{27}x + \\dfrac{1}{81}x^2.$$ <strong>(b)(i)</strong> $x = -6$ <strong>(b)(ii)</strong> $x = 3$",
        "feedback": "The quadratic coefficient is too large. Carefully square $-\\tfrac{2}{9}x$ and multiply by $\\tfrac{3}{8}$, then apply the factor $\\tfrac{1}{3}$ to obtain $\\tfrac{1}{162}x^2$."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Interval of validity versus target value",
      "content": "Two separate ideas are at work here: the interval of validity, which controls whether the binomial series converges, and the choice of $x$ that actually produces the number you want to approximate. First check $|x|$ against the convergence condition, then solve the algebraic equation that links your function value to the target number."
    }
  },
  {
    "id": "004017",
    "major_area": "Binomial Expansion",
    "topic": "Binomial Expansion",
    "subtopic": [
      "Negative fractional indices",
      "Interval of validity",
      "Approximations"
    ],
    "img": false,
    "question": "Consider the function:<br>$$g(x) = (5 - x)^{-1/2}.$$<br><strong>(a)</strong> Rewrite $g(x)$ in the form $k(1 + mx)^n$ and hence find the first three terms of its binomial expansion in ascending powers of $x$.<br>This expansion can be used to approximate $\\dfrac{1}{\\sqrt{5.2}}$. Possible values of $x$ that could be substituted are:<br>\\[x = -0.2, \\quad x = 1, \\quad x = -6.\\]<br><strong>(b)(i)</strong> Without evaluating your expansion, state, giving a reason, which of these values of $x$ is outside the interval of validity.<br><strong>(b)(ii)</strong> State, giving a reason, which of these values of $x$ would lead to the most accurate approximation to $\\dfrac{1}{\\sqrt{5.2}}$.",
    "steps": [
      "<strong>Part (a):</strong> Factorise the constant from the bracket:<br>$$g(x) = (5 - x)^{-1/2} = \\left[5\\left(1 - \\tfrac{1}{5}x\\right)\\right]^{-1/2} = 5^{-1/2}\\left(1 - \\tfrac{1}{5}x\\right)^{-1/2} = \\dfrac{1}{\\sqrt{5}}\\left(1 - \\tfrac{1}{5}x\\right)^{-1/2}.$$",
      "Use the binomial expansion $(1 + y)^{-1/2} = 1 - \\tfrac{1}{2}y + \\tfrac{3}{8}y^2 + \\dots$ with $y = -\\tfrac{1}{5}x$:<br>$$\\left(1 - \\tfrac{1}{5}x\\right)^{-1/2} = 1 - \\tfrac{1}{2}\\left(-\\tfrac{1}{5}x\\right) + \\tfrac{3}{8}\\left(-\\tfrac{1}{5}x\\right)^2 + \\dots$$<br>$$= 1 + \\tfrac{1}{10}x + \\tfrac{3}{200}x^2 + \\dots$$",
      "Multiply by $\\dfrac{1}{\\sqrt{5}} = \\dfrac{\\sqrt{5}}{5}$:<br>$$g(x) \\approx \\dfrac{\\sqrt{5}}{5}\\left(1 + \\tfrac{1}{10}x + \\tfrac{3}{200}x^2\\right) = \\dfrac{\\sqrt{5}}{5} + \\dfrac{\\sqrt{5}}{50}x + \\dfrac{3\\sqrt{5}}{1000}x^2.$$",
      "<strong>Part (b)(i):</strong> The binomial expansion for $(1 - \\tfrac{1}{5}x)^{-1/2}$ is valid when $$\\left|\\tfrac{1}{5}x\\right| < 1 \\implies |x| < 5.$$",
      "Among the given values, $x = -6$ has $|-6| = 6 > 5$, so it lies outside the interval of validity. Therefore, $x = -6$ is not valid for the expansion.",
      "<strong>Part (b)(ii):</strong> To approximate $\\dfrac{1}{\\sqrt{5.2}}$, we need $$g(x) = \\dfrac{1}{\\sqrt{5 - x}} = \\dfrac{1}{\\sqrt{5.2}}.$$ This occurs when $5 - x = 5.2$, so $x = -0.2$. Also, $|-0.2|$ is small, so the series converges rapidly. Thus $x = -0.2$ gives the most accurate approximation.",
      "Final Answer: <strong>(a)</strong> $$g(x) \\approx \\dfrac{\\sqrt{5}}{5} + \\dfrac{\\sqrt{5}}{50}x + \\dfrac{3\\sqrt{5}}{1000}x^2.$$ <strong>(b)(i)</strong> $x = -6$ is outside the interval of validity. <strong>(b)(ii)</strong> $x = -0.2$ gives the most accurate approximation to $\\dfrac{1}{\\sqrt{5.2}}$."
    ],
    "pi_options": [
      {
        "ans": "<strong>(a)</strong> $$g(x) \\approx \\dfrac{\\sqrt{5}}{5} + \\dfrac{\\sqrt{5}}{50}x + \\dfrac{3\\sqrt{5}}{1000}x^2.$$ <strong>(b)(i)</strong> $x = 1$ <strong>(b)(ii)</strong> $x = 1$",
        "feedback": "For the interval of validity, the condition is $|x| < 5$, so $x = 1$ is valid but $x = -6$ is not. For the approximation, $x = -0.2$ is the value that actually produces $\\dfrac{1}{\\sqrt{5.2}}$ and is closest to zero."
      },
      {
        "ans": "<strong>(a)</strong> $$g(x) \\approx \\dfrac{\\sqrt{5}}{5} + \\dfrac{\\sqrt{5}}{25}x + \\dfrac{3\\sqrt{5}}{1000}x^2.$$ <strong>(b)(i)</strong> $x = -6$ <strong>(b)(ii)</strong> $x = -0.2$",
        "feedback": "Your linear coefficient is too large. The first-order term from $(1 - \\tfrac{1}{5}x)^{-1/2}$ is $+\\tfrac{1}{10}x$, which becomes $\\dfrac{\\sqrt{5}}{50}x$ after multiplying by $\\dfrac{\\sqrt{5}}{5}$."
      },
      {
        "ans": "<strong>(a)</strong> $$g(x) \\approx \\dfrac{\\sqrt{5}}{5} + \\dfrac{\\sqrt{5}}{50}x + \\dfrac{3\\sqrt{5}}{500}x^2.$$ <strong>(b)(i)</strong> $x = -6$ <strong>(b)(ii)</strong> $x = -0.2$",
        "feedback": "The quadratic coefficient is incorrect. Carefully square $-\\tfrac{1}{5}x$, multiply by $\\tfrac{3}{8}$, and then apply the factor $\\dfrac{\\sqrt{5}}{5}$ to obtain $\\dfrac{3\\sqrt{5}}{1000}x^2$."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Matching the function to the target number",
      "content": "When a question links a binomial expansion to a numerical approximation, always solve the simple equation that makes the inside of the bracket equal to the target value. Only then worry about which of the candidate $x$ values lies closest to zero for the best accuracy."
    }
  },
  {
    "id": "004018",
    "major_area": "Binomial Expansion",
    "topic": "Binomial Expansion",
    "subtopic": [
      "Negative fractional indices",
      "Interval of validity",
      "Approximations"
    ],
    "img": false,
    "question": "A function is defined by:<br>$$h(x) = \\dfrac{1}{(3 + x)^{1/2}}.$$<br><strong>(a)</strong> Express $h(x)$ in the form $A(1 + Bx)^n$ and find the first three terms of its binomial expansion in ascending powers of $x$.<br>This expansion can be used to approximate $\\dfrac{1}{\\sqrt{2.7}}$. Possible values of $x$ are:<br>\\[x = -0.3, \\quad x = 3, \\quad x = -6.\\]<br><strong>(b)(i)</strong> Without evaluating your expansion, state, giving a reason, which of these values of $x$ should not be used.<br><strong>(b)(ii)</strong> State, giving a reason, which of these values of $x$ would lead to the most accurate approximation to $\\dfrac{1}{\\sqrt{2.7}}$.",
    "steps": [
      "<strong>Part (a):</strong> Rewrite $h(x)$ in binomial form by factorising the constant:<br>$$h(x) = (3 + x)^{-1/2} = \\left[3\\left(1 + \\tfrac{1}{3}x\\right)\\right]^{-1/2} = 3^{-1/2}\\left(1 + \\tfrac{1}{3}x\\right)^{-1/2} = \\dfrac{1}{\\sqrt{3}}\\left(1 + \\tfrac{1}{3}x\\right)^{-1/2}.$$",
      "Use the binomial expansion $(1 + y)^{-1/2} = 1 - \\tfrac{1}{2}y + \\tfrac{3}{8}y^2 + \\dots$ with $y = \\tfrac{1}{3}x$:<br>$$\\left(1 + \\tfrac{1}{3}x\\right)^{-1/2} = 1 - \\tfrac{1}{2}\\left(\\tfrac{1}{3}x\\right) + \\tfrac{3}{8}\\left(\\tfrac{1}{3}x\\right)^2 + \\dots$$<br>$$= 1 - \\tfrac{1}{6}x + \\tfrac{1}{24}x^2 + \\dots$$",
      "Multiply by $\\dfrac{1}{\\sqrt{3}} = \\dfrac{\\sqrt{3}}{3}$:<br>$$h(x) \\approx \\dfrac{\\sqrt{3}}{3}\\left(1 - \\tfrac{1}{6}x + \\tfrac{1}{24}x^2\\right) = \\dfrac{\\sqrt{3}}{3} - \\dfrac{\\sqrt{3}}{18}x + \\dfrac{\\sqrt{3}}{72}x^2.$$",
      "<strong>Part (b)(i):</strong> The binomial expansion for $(1 + \\tfrac{1}{3}x)^{-1/2}$ is valid when $$\\left|\\tfrac{1}{3}x\\right| < 1 \\implies |x| < 3.$$",
      "Among the given values, $x = -6$ has $|-6| = 6 > 3$, so it lies outside the interval of validity. The boundary value $x = 3$ also does not satisfy $|x| < 3$. Thus $x = -6$ (and $x = 3$) should not be used.",
      "<strong>Part (b)(ii):</strong> To approximate $\\dfrac{1}{\\sqrt{2.7}}$, we need $$h(x) = \\dfrac{1}{\\sqrt{3 + x}} = \\dfrac{1}{\\sqrt{2.7}}.$$ This occurs when $3 + x = 2.7$, so $x = -0.3$. Also, $|-0.3|$ is small, so the series converges quickly. Therefore, $x = -0.3$ gives the most accurate approximation.",
      "Final Answer: <strong>(a)</strong> $$h(x) \\approx \\dfrac{\\sqrt{3}}{3} - \\dfrac{\\sqrt{3}}{18}x + \\dfrac{\\sqrt{3}}{72}x^2.$$ <strong>(b)(i)</strong> $x = -6$ is outside the interval of validity. <strong>(b)(ii)</strong> $x = -0.3$ gives the most accurate approximation to $\\dfrac{1}{\\sqrt{2.7}}$."
    ],
    "pi_options": [
      {
        "ans": "<strong>(a)</strong> $$h(x) \\approx \\dfrac{\\sqrt{3}}{3} - \\dfrac{\\sqrt{3}}{18}x + \\dfrac{\\sqrt{3}}{72}x^2.$$ <strong>(b)(i)</strong> $x = 3$ <strong>(b)(ii)</strong> $x = 3$",
        "feedback": "For the interval of validity, the strict inequality $|x| < 3$ rules out $x = -6$ and also excludes the boundary $x = 3$. For the approximation, $x = -0.3$ is the value that actually produces $\\dfrac{1}{\\sqrt{2.7}}$ and is closest to zero."
      },
      {
        "ans": "<strong>(a)</strong> $$h(x) \\approx \\dfrac{\\sqrt{3}}{3} - \\dfrac{\\sqrt{3}}{9}x + \\dfrac{\\sqrt{3}}{72}x^2.$$ <strong>(b)(i)</strong> $x = -6$ <strong>(b)(ii)</strong> $x = -0.3$",
        "feedback": "Your linear coefficient is too large in magnitude. The first-order term from $(1 + \\tfrac{1}{3}x)^{-1/2}$ is $-\\tfrac{1}{6}x$, which becomes $-\\dfrac{\\sqrt{3}}{18}x$ after multiplying by $\\dfrac{\\sqrt{3}}{3}$."
      },
      {
        "ans": "<strong>(a)</strong> $$h(x) \\approx \\dfrac{\\sqrt{3}}{3} - \\dfrac{\\sqrt{3}}{18}x + \\dfrac{\\sqrt{3}}{36}x^2.$$ <strong>(b)(i)</strong> $x = -6$ <strong>(b)(ii)</strong> $x = -0.3$",
        "feedback": "The quadratic coefficient is incorrect. Carefully square $\\tfrac{1}{3}x$, multiply by $\\tfrac{3}{8}$, and then apply the factor $\\dfrac{\\sqrt{3}}{3}$ to obtain $\\dfrac{\\sqrt{3}}{72}x^2$."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Boundary points and strict inequalities",
      "content": "When you see a condition like $|x| < a$, remember that the endpoints $x = \\pm a$ are excluded. It is common for exam questions to include a boundary value as a tempting but invalid option, so always check whether the inequality is strict or not."
    }
  },
  {
    "id": "004019",
    "major_area": "Binomial Expansion",
    "topic": "Binomial Expansion",
    "subtopic": [
      "Negative fractional indices",
      "Interval of validity",
      "Approximations"
    ],
    "img": false,
    "question": "A function is defined by:<br>$$y = (4 + 3x)^{-1/2}.$$<br><strong>(a)</strong> Rewrite $y$ in the form $C(1 + Dx)^n$ and hence find the first three terms of the binomial expansion in ascending powers of $x$.<br>This expansion can be used to approximate $\\dfrac{1}{\\sqrt{3.1}}$. Possible values of $x$ are:<br>\\[x = -0.3, \\quad x = 1, \\quad x = -2.\\]<br><strong>(b)(i)</strong> Without evaluating your expansion, state, giving a reason, which of these values of $x$ is invalid for the expansion.<br><strong>(b)(ii)</strong> State, giving a reason, which of these values of $x$ would lead to the most accurate approximation to $\\dfrac{1}{\\sqrt{3.1}}$.",
    "steps": [
      "<strong>Part (a):</strong> Factorise the constant from the bracket:<br>$$y = (4 + 3x)^{-1/2} = \\left[4\\left(1 + \\tfrac{3}{4}x\\right)\\right]^{-1/2} = 4^{-1/2}\\left(1 + \\tfrac{3}{4}x\\right)^{-1/2} = \\dfrac{1}{2}\\left(1 + \\tfrac{3}{4}x\\right)^{-1/2}.$$",
      "Use the binomial expansion $(1 + y)^{-1/2} = 1 - \\tfrac{1}{2}y + \\tfrac{3}{8}y^2 + \\dots$ with $y = \\tfrac{3}{4}x$:<br>$$\\left(1 + \\tfrac{3}{4}x\\right)^{-1/2} = 1 - \\tfrac{1}{2}\\left(\\tfrac{3}{4}x\\right) + \\tfrac{3}{8}\\left(\\tfrac{3}{4}x\\right)^2 + \\dots$$<br>$$= 1 - \\tfrac{3}{8}x + \\tfrac{27}{128}x^2 + \\dots$$",
      "Multiply by $\\dfrac{1}{2}$:<br>$$y \\approx \\dfrac{1}{2}\\left(1 - \\tfrac{3}{8}x + \\tfrac{27}{128}x^2\\right) = \\dfrac{1}{2} - \\dfrac{3}{16}x + \\dfrac{27}{256}x^2.$$",
      "<strong>Part (b)(i):</strong> The binomial expansion for $(1 + \\tfrac{3}{4}x)^{-1/2}$ is valid when $$\\left|\\tfrac{3}{4}x\\right| < 1 \\implies |x| < \\dfrac{4}{3}.$$",
      "Among the given values, $x = -2$ has $|-2| = 2 > \\dfrac{4}{3}$, so it lies outside the interval of validity. Therefore, $x = -2$ is invalid for the expansion.",
      "<strong>Part (b)(ii):</strong> To approximate $\\dfrac{1}{\\sqrt{3.1}}$, we need $$y = \\dfrac{1}{\\sqrt{4 + 3x}} = \\dfrac{1}{\\sqrt{3.1}}.$$ This occurs when $4 + 3x = 3.1$, so $3x = -0.9$ and $x = -0.3$. Also, $|-0.3|$ is smaller than $|1|$, so the series converges more rapidly. Thus $x = -0.3$ gives the most accurate approximation.",
      "Final Answer: <strong>(a)</strong> $$y \\approx \\dfrac{1}{2} - \\dfrac{3}{16}x + \\dfrac{27}{256}x^2.$$ <strong>(b)(i)</strong> $x = -2$ is invalid. <strong>(b)(ii)</strong> $x = -0.3$ gives the most accurate approximation to $\\dfrac{1}{\\sqrt{3.1}}$."
    ],
    "pi_options": [
      {
        "ans": "<strong>(a)</strong> $$y \\approx \\dfrac{1}{2} - \\dfrac{3}{16}x + \\dfrac{27}{256}x^2.$$ <strong>(b)(i)</strong> $x = 1$ <strong>(b)(ii)</strong> $x = 1$",
        "feedback": "For the interval of validity, the condition $|x| < \\dfrac{4}{3}$ excludes $x = -2$, not $x = 1$. For the approximation, $x = -0.3$ is the value that actually produces $\\dfrac{1}{\\sqrt{3.1}}$ and is closer to zero than $x = 1$."
      },
      {
        "ans": "<strong>(a)</strong> $$y \\approx \\dfrac{1}{2} - \\dfrac{3}{8}x + \\dfrac{27}{256}x^2.$$ <strong>(b)(i)</strong> $x = -2$ <strong>(b)(ii)</strong> $x = -0.3$",
        "feedback": "Your linear coefficient is too large in magnitude. The first-order term from $(1 + \\tfrac{3}{4}x)^{-1/2}$ is $-\\tfrac{3}{8}x$, which becomes $-\\dfrac{3}{16}x$ after multiplying by $\\dfrac{1}{2}$."
      },
      {
        "ans": "<strong>(a)</strong> $$y \\approx \\dfrac{1}{2} - \\dfrac{3}{16}x + \\dfrac{27}{128}x^2.$$ <strong>(b)(i)</strong> $x = -2$ <strong>(b)(ii)</strong> $x = -0.3$",
        "feedback": "The quadratic coefficient is incorrect. Carefully square $\\tfrac{3}{4}x$, multiply by $\\tfrac{3}{8}$, and then apply the factor $\\dfrac{1}{2}$ to obtain $\\dfrac{27}{256}x^2$."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Scaling before expanding",
      "content": "Always factor out the constant from the bracket before applying the binomial expansion. This keeps the expression in the clean form $(1 + kx)^n$ and makes it much easier to see both the interval of validity and the structure of the coefficients."
    }
  },
  {
    "id": "004020",
    "major_area": "Binomial Expansion",
    "topic": "Binomial Expansion",
    "subtopic": [
      "Negative fractional indices",
      "Interval of validity",
      "Approximations"
    ],
    "img": false,
    "question": "A function is defined by:<br>$$F(x) = \\dfrac{1}{\\sqrt{16 - x}}.$$<br><strong>(a)</strong> Find the first three terms of the binomial expansion of $F(x)$ in ascending powers of $x$.<br>This expansion can be used to approximate $\\dfrac{1}{\\sqrt{15.5}}$. Possible values of $x$ are:<br>\\[x = 0.5, \\quad x = -18, \\quad x = 3.\\]<br><strong>(b)(i)</strong> Without evaluating your expansion, state, giving a reason, which of these values of $x$ should not be used.<br><strong>(b)(ii)</strong> State, giving a reason, which of these values of $x$ would lead to the most accurate approximation to $\\dfrac{1}{\\sqrt{15.5}}$.",
    "steps": [
      "<strong>Part (a):</strong> Rewrite $F(x)$ in binomial form by factorising the constant inside the square root:<br>$$F(x) = (16 - x)^{-1/2} = \\left[16\\left(1 - \\tfrac{1}{16}x\\right)\\right]^{-1/2} = 16^{-1/2}\\left(1 - \\tfrac{1}{16}x\\right)^{-1/2} = \\dfrac{1}{4}\\left(1 - \\tfrac{1}{16}x\\right)^{-1/2}.$$",
      "Use the binomial expansion $(1 + y)^{-1/2} = 1 - \\tfrac{1}{2}y + \\tfrac{3}{8}y^2 + \\dots$ with $y = -\\tfrac{1}{16}x$:<br>$$\\left(1 - \\tfrac{1}{16}x\\right)^{-1/2} = 1 - \\tfrac{1}{2}\\left(-\\tfrac{1}{16}x\\right) + \\tfrac{3}{8}\\left(-\\tfrac{1}{16}x\\right)^2 + \\dots$$<br>$$= 1 + \\tfrac{1}{32}x + \\tfrac{3}{2048}x^2 + \\dots$$",
      "Multiply by $\\dfrac{1}{4}$:<br>$$F(x) \\approx \\dfrac{1}{4}\\left(1 + \\tfrac{1}{32}x + \\tfrac{3}{2048}x^2\\right) = \\dfrac{1}{4} + \\dfrac{1}{128}x + \\dfrac{3}{8192}x^2.$$",
      "<strong>Part (b)(i):</strong> The binomial expansion for $(1 - \\tfrac{1}{16}x)^{-1/2}$ is valid when $$\\left|\\tfrac{1}{16}x\\right| < 1 \\implies |x| < 16.$$",
      "Among the given values, $x = -18$ has $|-18| = 18 > 16$, so it lies outside the interval of validity. Therefore, $x = -18$ should not be used.",
      "<strong>Part (b)(ii):</strong> To approximate $\\dfrac{1}{\\sqrt{15.5}}$, we need $$F(x) = \\dfrac{1}{\\sqrt{16 - x}} = \\dfrac{1}{\\sqrt{15.5}}.$$ This occurs when $16 - x = 15.5$, so $x = 0.5$. Also, $|0.5|$ is smaller than $|3|$, so the series converges more rapidly. Thus $x = 0.5$ gives the most accurate approximation.",
      "Final Answer: <strong>(a)</strong> $$F(x) \\approx \\dfrac{1}{4} + \\dfrac{1}{128}x + \\dfrac{3}{8192}x^2.$$ <strong>(b)(i)</strong> $x = -18$ should not be used. <strong>(b)(ii)</strong> $x = 0.5$ gives the most accurate approximation to $\\dfrac{1}{\\sqrt{15.5}}$."
    ],
    "pi_options": [
      {
        "ans": "<strong>(a)</strong> $$F(x) \\approx \\dfrac{1}{4} + \\dfrac{1}{128}x + \\dfrac{3}{8192}x^2.$$ <strong>(b)(i)</strong> $x = 3$ <strong>(b)(ii)</strong> $x = 3$",
        "feedback": "For the interval of validity, the condition $|x| < 16$ excludes $x = -18$, not $x = 3$. For the approximation, $x = 0.5$ is the value that actually produces $\\dfrac{1}{\\sqrt{15.5}}$ and is closer to zero than $x = 3$."
      },
      {
        "ans": "<strong>(a)</strong> $$F(x) \\approx \\dfrac{1}{4} + \\dfrac{1}{64}x + \\dfrac{3}{8192}x^2.$$ <strong>(b)(i)</strong> $x = -18$ <strong>(b)(ii)</strong> $x = 0.5$",
        "feedback": "Your linear coefficient is too large. The first-order term from $(1 - \\tfrac{1}{16}x)^{-1/2}$ is $+\\tfrac{1}{32}x$, which becomes $\\dfrac{1}{128}x$ after multiplying by $\\dfrac{1}{4}$."
      },
      {
        "ans": "<strong>(a)</strong> $$F(x) \\approx \\dfrac{1}{4} + \\dfrac{1}{128}x + \\dfrac{3}{4096}x^2.$$ <strong>(b)(i)</strong> $x = -18$ <strong>(b)(ii)</strong> $x = 0.5$",
        "feedback": "The quadratic coefficient is incorrect. Carefully square $-\\tfrac{1}{16}x$, multiply by $\\tfrac{3}{8}$, and then apply the factor $\\dfrac{1}{4}$ to obtain $\\dfrac{3}{8192}x^2$."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Tiny $x$ means tiny error",
      "content": "Once you have the binomial form $(1 + kx)^n$, the size of $kx$ controls how quickly the series converges. For a fixed number of terms, the smaller $|kx|$ is, the smaller the neglected terms will be, and the more accurate your approximation becomes."
    }
  },
    {
        "id": "004021",
        "major_area": "Algebra & Functions",
        "topic": "Coordinate Geometry",
        "subtopic": [
            "Quadratics",
            "Transformations"
        ],
        "img": false,
        "question": "$$\\text{f}(x) = 3x^2 + 6x + 8 \\quad x \\in \\mathbb{R}$$<br><strong>(a)</strong> Write $\\text{f}(x)$ in the form $a(x + b)^2 + c$, where $a$, $b$, and $c$ are integers to be found.<br><strong>(b)</strong> Sketch the curve with equation $y = \\text{f}(x)$, showing any points of intersection with the coordinate axes and the coordinates of the turning point.<br><strong>(c)(i)</strong> Describe fully the transformation that maps the curve with equation $y = \\text{f}(x)$ onto the curve with equation $y = \\text{g}(x)$ where:<br>$$\\text{g}(x) = 3(x-2)^2 + 6x - 7 \\quad x \\in \\mathbb{R}$$<br><strong>(c)(ii)</strong> Find the range of the function:<br>$$\\text{h}(x) = \\dfrac{15}{3x^2 + 6x + 8} \\quad x \\in \\mathbb{R}$$",
        "steps": [
            "<strong>Part (a):</strong> We complete the square by first factorising out the $3$ from the quadratic and linear terms:<br>$$\\text{f}(x) = 3(x^2 + 2x) + 8$$<br>$$\\text{f}(x) = 3\\left[(x+1)^2 - 1^2\\right] + 8$$<br>$$\\text{f}(x) = 3(x+1)^2 - 3 + 8$$<br>$$\\text{f}(x) = 3(x+1)^2 + 5$$<br>Therefore, the constants are $a = 3$, $b = 1$, and $c = 5$.",
            "<strong>Part (b):</strong> We sketch the quadratic using our key features:<br>1. <strong>Turning Point:</strong> From the completed square form, the minimum turning point is at $(-1, 5)$.<br>2. <strong>$y$-intercept:</strong> Setting $x = 0$ gives $\\text{f}(0) = 8$, so the curve crosses the $y$-axis at $(0, 8)$.<br>3. <strong>$x$-intercepts:</strong> Setting $3x^2+6x+8 = 0$, the discriminant is $\\Delta = 6^2 - 4(3)(8) = -60 < 0$. There are no real roots, so the curve does not cross the $x$-axis.<br><br>Here is the completed sketch showing these features:<br><img src='images/p1/004021_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
            "<strong>Part (c)(i):</strong> First, we expand and complete the square for $\\text{g}(x)$ to find its vertex:<br>$$\\text{g}(x) = 3(x^2 - 4x + 4) + 6x - 7$$<br>$$\\text{g}(x) = 3x^2 - 12x + 12 + 6x - 7 = 3x^2 - 6x + 5$$<br>$$\\text{g}(x) = 3(x^2 - 2x) + 5 = 3\\left[(x-1)^2 - 1\\right] + 5$$<br>$$\\text{g}(x) = 3(x-1)^2 + 2$$",
            "The vertex of $\\text{f}(x)$ is at $(-1, 5)$ and the vertex of $\\text{g}(x)$ is at $(1, 2)$.<br>To map $(-1, 5)$ onto $(1, 2)$, we shift $+2$ units horizontally and $-3$ units vertically.<br>Therefore, the transformation is a <strong>translation by the vector $\\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$</strong>.",
            "<strong>Part (c)(ii):</strong> We rewrite $\\text{h}(x)$ using our completed square form of the denominator:<br>$$\\text{h}(x) = \\dfrac{15}{3(x+1)^2 + 5}$$<br>Since the minimum value of the denominator is $5$ (when $x = -1$), the maximum value of the fraction is $\\frac{15}{5} = 3$. As $x \\to \\pm\\infty$, the denominator grows infinitely large, so the fraction approaches $0$ from above.<br>Therefore, the range is <strong>$0 < \\text{h}(x) \\le 3$</strong>.",
            "Final Answer: <strong>(a)</strong> $$3(x+1)^2 + 5$$ <strong>(b)</strong> $$Turning\\ Point: (-1,5),\\ y-intercept: (0,8)$$ <strong>(c)(i)</strong> $$Translation\\ by\\ \\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < \\text{h}(x) \\le 3$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$3(x+1)^2 + 5$$ <strong>(b)</strong> $$Turning\\ Point: (-1,5),\\ y-intercept: (0,8)$$ <strong>(c)(i)</strong> $$Translation\\ by\\ \\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < \\text{h}(x) \\le 3$$",
                "feedback": "You probably made a sign error when calculating your translation vector in Part (c)(i). Moving from the vertex of $\\text{f}(x)$ at $x = -1$ to the vertex of $\\text{g}(x)$ at $x = 1$ is a horizontal shift of $+2$. Moving from $y = 5$ to $y = 2$ is a vertical shift of $-3$. This gives the vector $\\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$."
            },
            {
                "ans": "<strong>(a)</strong> $$3(x+1)^2 + 5$$ <strong>(b)</strong> $$Turning\\ Point: (-1,5),\\ y-intercept: (0,8)$$ <strong>(c)(i)</strong> $$Translation\\ by\\ \\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 \\le \\text{h}(x) \\le 3$$",
                "feedback": "Check your inequality symbols in Part (c)(ii). The denominator $3x^2+6x+8$ has a minimum value of $5$ and is always strictly positive. Because a fraction with a positive numerator and a strictly positive denominator can never equal zero, the lower bound must be a strict inequality: $0 < \\text{h}(x) \\le 3$, not $0 \\le \\text{h}(x) \\le 3$."
            },
            {
                "ans": "<strong>(a)</strong> $$3(x+1)^2 + 11$$ <strong>(b)</strong> $$Turning\\ Point: (-1,11),\\ y-intercept: (0,8)$$ <strong>(c)(i)</strong> $$Translation\\ by\\ \\begin{pmatrix} 2 \\\\ -9 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < \\text{h}(x) \\le \\dfrac{15}{11}$$",
                "feedback": "You probably made a sign error when expanding your completed square in Part (a), adding the $3$ instead of subtracting it: $3[(x+1)^2 - 1] + 8 = 3(x+1)^2 - 3 + 8 = 3(x+1)^2 + 5$, not $+11$. This error affected all your subsequent coordinates and calculations."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Range of Reciprocals",
            "content": "To find the range of a reciprocal function like $\\text{h}(x) = \\frac{K}{\\text{f}(x)}$, remember that the maximum value of the function occurs when its denominator is at its absolute minimum. Use your completed square form from part (a) to read off the minimum value of $\\text{f}(x)$ instantly."
        }
    },
    {
        "id": "004022",
        "major_area": "Algebra & Functions",
        "topic": "Coordinate Geometry",
        "subtopic": [
            "Quadratics",
            "Transformations"
        ],
        "img": false,
        "question": "$$\\text{f}(x) = 2x^2 + 8x + 12 \\quad x \\in \\mathbb{R}$$<br><strong>(a)</strong> Write $\\text{f}(x)$ in the form $a(x + b)^2 + c$, where $a$, $b$, and $c$ are integers to be found.<br><strong>(b)</strong> Sketch the curve with equation $y = \\text{f}(x)$, showing any points of intersection with the coordinate axes and the coordinates of the turning point.<br><strong>(c)(i)</strong> Describe fully the transformation that maps the curve with equation $y = \\text{f}(x)$ onto the curve with equation $y = \\text{g}(x)$ where:<br>$$\\text{g}(x) = 2(x-3)^2 + 8x - 15 \\quad x \\in \\mathbb{R}$$<br><strong>(c)(ii)</strong> Find the range of the function:<br>$$\\text{h}(x) = \\dfrac{12}{2x^2 + 8x + 12} \\quad x \\in \\mathbb{R}$$",
        "steps": [
            "<strong>Part (a):</strong> We complete the square by first factorising out the $2$ from the quadratic and linear terms:<br>$$\\text{f}(x) = 2(x^2 + 4x) + 12$$<br>$$\\text{f}(x) = 2\\left[(x+2)^2 - 2^2\\right] + 12$$<br>$$\\text{f}(x) = 2(x+2)^2 - 8 + 12$$<br>$$\\text{f}(x) = 2(x+2)^2 + 4$$<br>Therefore, the constants are $a = 2$, $b = 2$, and $c = 4$.",
            "<strong>Part (b):</strong> We sketch the quadratic using our key features:<br>1. <strong>Turning Point:</strong> From the completed square form, the minimum turning point is at $(-2, 4)$.<br>2. <strong>$y$-intercept:</strong> Setting $x = 0$ gives $\\text{f}(0) = 12$, so the curve crosses the $y$-axis at $(0, 12)$.<br>3. <strong>$x$-intercepts:</strong> Setting $2x^2+8x+12 = 0$, the discriminant is $\\Delta = 8^2 - 4(2)(12) = -32 < 0$. There are no real roots, so the curve does not cross the $x$-axis.<br><br>Here is the completed sketch showing these features:<br><img src='images/p1/004022_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
            "<strong>Part (c)(i):</strong> First, we expand and complete the square for $\\text{g}(x)$ to find its vertex:<br>$$\\text{g}(x) = 2(x^2 - 6x + 9) + 8x - 15$$<br>$$\\text{g}(x) = 2x^2 - 12x + 18 + 8x - 15 = 2x^2 - 4x + 3$$<br>$$\\text{g}(x) = 2(x^2 - 2x) + 3 = 2\\left[(x-1)^2 - 1\\right] + 3$$<br>$$\\text{g}(x) = 2(x-1)^2 + 1$$",
            "The vertex of $\\text{f}(x)$ is at $(-2, 4)$ and the vertex of $\\text{g}(x)$ is at $(1, 1)$.<br>To map $(-2, 4)$ onto $(1, 1)$, we shift $+3$ units horizontally and $-3$ units vertically.<br>Therefore, the transformation is a <strong>translation by the vector $\\begin{pmatrix} 3 \\\\ -3 \\end{pmatrix}$</strong>.",
            "<strong>Part (c)(ii):</strong> We rewrite $\\text{h}(x)$ using our completed square form of the denominator:<br>$$\\text{h}(x) = \\dfrac{12}{2(x+2)^2 + 4}$$<br>Since the minimum value of the denominator is $4$ (when $x = -2$), the maximum value of the fraction is $\\frac{12}{4} = 3$. As $x \\to \\pm\\infty$, the denominator grows infinitely large, so the fraction approaches $0$ from above.<br>Therefore, the range is <strong>$0 < \\text{h}(x) \\le 3$</strong>.",
            "Final Answer: <strong>(a)</strong> $$2(x+2)^2 + 4$$ <strong>(b)</strong> $$Turning\\ Point: (-2,4),\\ y-intercept: (0,12)$$ <strong>(c)(i)</strong> $$Translation\\ by\\ \\begin{pmatrix} 3 \\\\ -3 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < \\text{h}(x) \\le 3$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$2(x+2)^2 + 4$$ <strong>(b)</strong> $$Turning\\ Point: (-2,4),\\ y-intercept: (0,12)$$ <strong>(c)(i)</strong> $$Translation\\ by\\ \\begin{pmatrix} -3 \\\\ 3 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < \\text{h}(x) \\le 3$$",
                "feedback": "You probably made a sign error when calculating your translation vector in Part (c)(i). Moving from the vertex of $\\text{f}(x)$ at $x = -2$ to the vertex of $\\text{g}(x)$ at $x = 1$ is a horizontal shift of $+3$. Moving from $y = 4$ to $y = 1$ is a vertical shift of $-3$. This gives the vector $\\begin{pmatrix} 3 \\\\ -3 \\end{pmatrix}$."
            },
            {
                "ans": "<strong>(a)</strong> $$2(x+2)^2 + 4$$ <strong>(b)</strong> $$Turning\\ Point: (-2,4),\\ y-intercept: (0,12)$$ <strong>(c)(i)</strong> $$Translation\\ by\\ \\begin{pmatrix} 3 \\\\ -3 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 \\le \\text{h}(x) \\le 3$$",
                "feedback": "Check your inequality symbols in Part (c)(ii). The denominator $2x^2+8x+12$ has a minimum value of $4$ and is always strictly positive. Because a fraction with a positive numerator and a strictly positive denominator can never equal zero, the lower bound must be a strict inequality: $0 < \\text{h}(x) \\le 3$, not $0 \\le \\text{h}(x) \\le 3$."
            },
            {
                "ans": "<strong>(a)</strong> $$2(x+2)^2 + 20$$ <strong>(b)</strong> $$Turning\\ Point: (-2,20),\\ y-intercept: (0,12)$$ <strong>(c)(i)</strong> $$Translation\\ by\\ \\begin{pmatrix} 3 \\\\ -19 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < \\text{h}(x) \\le \\dfrac{3}{5}$$",
                "feedback": "You probably made an error when completing the square in Part (a), adding the $8$ instead of subtracting it: $2[(x+2)^2 - 4] + 12 = 2(x+2)^2 - 8 + 12 = 2(x+2)^2 + 4$, not $+20$. This error affected all your subsequent coordinates and calculations."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Vertex Form Translations",
            "content": "When describing quadratic translations, always locate the turning point (vertex) of both curves first. Moving from vertex $(x_1, y_1)$ to vertex $(x_2, y_2)$ gives you the exact translation components $(x_2 - x_1)$ and $(y_2 - y_1)$ instantly without confusing algebraic signs inside brackets."
        }
    },
    {
        "id": "004023",
        "major_area": "Algebra & Functions",
        "topic": "Coordinate Geometry",
        "subtopic": [
            "Quadratics",
            "Transformations"
        ],
        "img": false,
        "question": "$$\\text{f}(x) = 4x^2 + 8x + 7 \\quad x \\in \\mathbb{R}$$<br><strong>(a)</strong> Write $\\text{f}(x)$ in the form $a(x + b)^2 + c$, where $a$, $b$, and $c$ are integers to be found.<br><strong>(b)</strong> Sketch the curve with equation $y = \\text{f}(x)$, showing any points of intersection with the coordinate axes and the coordinates of the turning point.<br><strong>(c)(i)</strong> Describe fully the transformation that maps the curve with equation $y = \\text{f}(x)$ onto the curve with equation $y = \\text{g}(x)$ where:<br>$$\\text{g}(x) = 4(x-3)^2 + 8x - 19 \\quad x \\in \\mathbb{R}$$<br><strong>(c)(ii)</strong> Find the range of the function:<br>$$\\text{h}(x) = \\dfrac{15}{4x^2 + 8x + 7} \\quad x \\in \\mathbb{R}$$",
        "steps": [
            "<strong>Part (a):</strong> We complete the square by first factorising out the $4$ from the quadratic and linear terms:<br>$$\\text{f}(x) = 4(x^2 + 2x) + 7$$<br>$$\\text{f}(x) = 4\\left[(x+1)^2 - 1^2\\right] + 7$$<br>$$\\text{f}(x) = 4(x+1)^2 - 4 + 7$$<br>$$\\text{f}(x) = 4(x+1)^2 + 3$$<br>Therefore, the constants are $a = 4$, $b = 1$, and $c = 3$.",
            "<strong>Part (b):</strong> We sketch the quadratic using our key features:<br>1. <strong>Turning Point:</strong> From the completed square form, the minimum turning point is at $(-1, 3)$.<br>2. <strong>$y$-intercept:</strong> Setting $x = 0$ gives $\\text{f}(0) = 7$, so the curve crosses the $y$-axis at $(0, 7)$.<br>3. <strong>$x$-intercepts:</strong> Setting $4x^2+8x+7 = 0$, the discriminant is $\\Delta = 8^2 - 4(4)(7) = -48 < 0$. There are no real roots, so the curve does not cross the $x$-axis.<br><br>Here is the completed sketch showing these features:<br><img src='images/p1/004023_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
            "<strong>Part (c)(i):</strong> First, we expand and complete the square for $\\text{g}(x)$ to find its vertex:<br>$$\\text{g}(x) = 4(x^2 - 6x + 9) + 8x - 19$$<br>$$\\text{g}(x) = 4x^2 - 24x + 36 + 8x - 19 = 4x^2 - 16x + 17$$<br>$$\\text{g}(x) = 4(x^2 - 4x) + 17 = 4\\left[(x-2)^2 - 4\\right] + 17$$<br>$$\\text{g}(x) = 4(x-2)^2 - 16 + 17$$<br>$$\\text{g}(x) = 4(x-2)^2 + 1$$",
            "The vertex of $\\text{f}(x)$ is at $(-1, 3)$ and the vertex of $\\text{g}(x)$ is at $(2, 1)$.<br>To map $(-1, 3)$ onto $(2, 1)$, we shift $+3$ units horizontally and $-2$ units vertically.<br>Therefore, the transformation is a <strong>translation by the vector $\\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$</strong>.",
            "<strong>Part (c)(ii):</strong> We rewrite $\\text{h}(x)$ using our completed square form of the denominator:<br>$$\\text{h}(x) = \\dfrac{15}{4(x+1)^2 + 3}$$<br>Since the minimum value of the denominator is $3$ (when $x = -1$), the maximum value of the fraction is $\\frac{15}{3} = 5$. As $x \\to \\pm\\infty$, the denominator grows infinitely large, so the fraction approaches $0$ from above.<br>Therefore, the range is <strong>$0 < \\text{h}(x) \\le 5$</strong>.",
            "Final Answer: <strong>(a)</strong> $$4(x+1)^2 + 3$$ <strong>(b)</strong> $$Turning\\ Point: (-1,3),\\ y-intercept: (0,7)$$ <strong>(c)(i)</strong> $$Translation\\ by\\ \\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < \\text{h}(x) \\le 5$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$4(x+1)^2 + 3$$ <strong>(b)</strong> $$Turning\\ Point: (-1,3),\\ y-intercept: (0,7)$$ <strong>(c)(i)</strong> $$Translation\\ by\\ \\begin{pmatrix} -3 \\\\ 2 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < \\text{h}(x) \\le 5$$",
                "feedback": "You probably made a sign error when calculating your translation vector in Part (c)(i). Moving from the vertex of $\\text{f}(x)$ at $x = -1$ to the vertex of $\\text{g}(x)$ at $x = 2$ is a horizontal shift of $+3$. Moving from $y = 3$ to $y = 1$ is a vertical shift of $-2$. This gives the vector $\\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$."
            },
            {
                "ans": "<strong>(a)</strong> $$4(x+1)^2 + 3$$ <strong>(b)</strong> $$Turning\\ Point: (-1,3),\\ y-intercept: (0,7)$$ <strong>(c)(i)</strong> $$Translation\\ by\\ \\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 \\le \\text{h}(x) \\le 5$$",
                "feedback": "Check your inequality symbols in Part (c)(ii). The denominator $4x^2+8x+7$ has a minimum value of $3$ and is always strictly positive. Because a fraction with a positive numerator and a strictly positive denominator can never equal zero, the lower bound must be a strict inequality: $0 < \\text{h}(x) \\le 5$, not $0 \\le \\text{h}(x) \\le 5$."
            },
            {
                "ans": "<strong>(a)</strong> $$4(x+1)^2 + 11$$ <strong>(b)</strong> $$Turning\\ Point: (-1,11),\\ y-intercept: (0,7)$$ <strong>(c)(i)</strong> $$Translation\\ by\\ \\begin{pmatrix} 3 \\\\ -10 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < \\text{h}(x) \\le \\dfrac{15}{11}$$",
                "feedback": "You probably made a sign error when completing the square in Part (a), adding the $4$ instead of subtracting it: $4[(x+1)^2 - 1] + 7 = 4(x+1)^2 - 4 + 7 = 4(x+1)^2 + 3$, not $+11$. This error affected all your subsequent coordinates and calculations."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Expanding First",
            "content": "When dealing with transformations between quadratic curves that are partially expanded like $\\text{g}(x)$, it is almost always safer to expand the entire function first into standard form $ax^2 + bx + c$, and then complete the square from scratch. This prevents nested sign slips during the vector identification."
        }
    },
    {
        "id": "004024",
        "major_area": "Algebra & Functions",
        "topic": "Coordinate Geometry",
        "subtopic": [
            "Quadratics",
            "Transformations"
        ],
        "img": false,
        "question": "$$\\text{f}(x) = 3x^2 + 12x + 18 \\quad x \\in \\mathbb{R}$$<br><strong>(a)</strong> Write $\\text{f}(x)$ in the form $a(x + b)^2 + c$, where $a$, $b$, and $c$ are integers to be found.<br><strong>(b)</strong> Sketch the curve with equation $y = \\text{f}(x)$, showing any points of intersection with the coordinate axes and the coordinates of the turning point.<br><strong>(c)(i)</strong> Describe fully the transformation that maps the curve with equation $y = \\text{f}(x)$ onto the curve with equation $y = \\text{g}(x)$ where:<br>$$\\text{g}(x) = 3(x-3)^2 + 12x - 22 \\quad x \\in \\mathbb{R}$$<br><strong>(c)(ii)</strong> Find the range of the function:<br>$$\\text{h}(x) = \\dfrac{24}{3x^2 + 12x + 18} \\quad x \\in \\mathbb{R}$$",
        "steps": [
            "<strong>Part (a):</strong> We complete the square by first factorising out the $3$ from the quadratic and linear terms:<br>$$\\text{f}(x) = 3(x^2 + 4x) + 18$$<br>$$\\text{f}(x) = 3\\left[(x+2)^2 - 2^2\\right] + 18$$<br>$$\\text{f}(x) = 3(x+2)^2 - 12 + 18$$<br>$$\\text{f}(x) = 3(x+2)^2 + 6$$<br>Therefore, the constants are $a = 3$, $b = 2$, and $c = 6$.",
            "<strong>Part (b):</strong> We sketch the quadratic using our key features:<br>1. <strong>Turning Point:</strong> From the completed square form, the minimum turning point is at $(-2, 6)$.<br>2. <strong>$y$-intercept:</strong> Setting $x = 0$ gives $\\text{f}(0) = 18$, so the curve crosses the $y$-axis at $(0, 18)$.<br>3. <strong>$x$-intercepts:</strong> Setting $3x^2+12x+18 = 0$, the discriminant is $\\Delta = 12^2 - 4(3)(18) = -72 < 0$. There are no real roots, so the curve does not cross the $x$-axis.<br><br>Here is the completed sketch showing these features:<br><img src='images/p1/004024_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
            "<strong>Part (c)(i):</strong> First, we expand and complete the square for $\\text{g}(x)$ to find its vertex:<br>$$\\text{g}(x) = 3(x^2 - 6x + 9) + 12x - 22$$<br>$$\\text{g}(x) = 3x^2 - 18x + 27 + 12x - 22 = 3x^2 - 6x + 5$$<br>$$\\text{g}(x) = 3(x^2 - 2x) + 5 = 3\\left[(x-1)^2 - 1\\right] + 5$$<br>$$\\text{g}(x) = 3(x-1)^2 - 3 + 5$$<br>$$\\text{g}(x) = 3(x-1)^2 + 2$$",
            "The vertex of $\\text{f}(x)$ is at $(-2, 6)$ and the vertex of $\\text{g}(x)$ is at $(1, 2)$.<br>To map $(-2, 6)$ onto $(1, 2)$, we shift $+3$ units horizontally and $-4$ units vertically.<br>Therefore, the transformation is a <strong>translation by the vector $\\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$</strong>.",
            "<strong>Part (c)(ii):</strong> We rewrite $\\text{h}(x)$ using our completed square form of the denominator:<br>$$\\text{h}(x) = \\dfrac{24}{3(x+2)^2 + 6}$$<br>Since the minimum value of the denominator is $6$ (when $x = -2$), the maximum value of the fraction is $\\frac{24}{6} = 4$. As $x \\to \\pm\\infty$, the denominator grows infinitely large, so the fraction approaches $0$ from above.<br>Therefore, the range is <strong>$0 < \\text{h}(x) \\le 4$</strong>.",
            "Final Answer: <strong>(a)</strong> $$3(x+2)^2 + 6$$ <strong>(b)</strong> $$Turning\\ Point: (-2,6),\\ y-intercept: (0,18)$$ <strong>(c)(i)</strong> $$Translation\\ by\\ \\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < \\text{h}(x) \\le 4$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$3(x+2)^2 + 6$$ <strong>(b)</strong> $$Turning\\ Point: (-2,6),\\ y-intercept: (0,18)$$ <strong>(c)(i)</strong> $$Translation\\ by\\ \\begin{pmatrix} -3 \\\\ 4 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < \\text{h}(x) \\le 4$$",
                "feedback": "You probably made a sign error when calculating your translation vector in Part (c)(i). Moving from the vertex of $\\text{f}(x)$ at $x = -2$ to the vertex of $\\text{g}(x)$ at $x = 1$ is a horizontal shift of $+3$. Moving from $y = 6$ to $y = 2$ is a vertical shift of $-4$. This gives the vector $\\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$."
            },
            {
                "ans": "<strong>(a)</strong> $$3(x+2)^2 + 6$$ <strong>(b)</strong> $$Turning\\ Point: (-2,6),\\ y-intercept: (0,18)$$ <strong>(c)(i)</strong> $$Translation\\ by\\ \\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 \\le \\text{h}(x) \\le 4$$",
                "feedback": "Check your inequality symbols in Part (c)(ii). The denominator $3x^2+12x+18$ has a minimum value of $6$ and is always strictly positive. Because a fraction with a positive numerator and a strictly positive denominator can never equal zero, the lower bound must be a strict inequality: $0 < \\text{h}(x) \\le 4$, not $0 \\le \\text{h}(x) \\le 4$."
            },
            {
                "ans": "<strong>(a)</strong> $$3(x+2)^2 + 30$$ <strong>(b)</strong> $$Turning\\ Point: (-2,30),\\ y-intercept: (0,18)$$ <strong>(c)(i)</strong> $$Translation\\ by\\ \\begin{pmatrix} 3 \\\\ -28 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < \\text{h}(x) \\le \\dfrac{4}{5}$$",
                "feedback": "You probably made a sign error when completing the square in Part (a), adding the $12$ instead of subtracting it: $3[(x+2)^2 - 4] + 18 = 3(x+2)^2 - 12 + 18 = 3(x+2)^2 + 6$, not $+30$. This error affected all your subsequent coordinates and calculations."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Vertex Alignment",
            "content": "A horizontal translation of $+3$ means you replace $x$ with $(x - 3)$ inside your function. A vertical translation of $-4$ means you subtract $4$ from the entire expression. Writing your functions in vertex form makes verifying these graphical maps incredibly easy."
        }
    },
    {
        "id": "004025",
        "major_area": "Algebra & Functions",
        "topic": "Coordinate Geometry",
        "subtopic": [
            "Quadratics",
            "Transformations"
        ],
        "img": false,
        "question": "$$\\text{f}(x) = 2x^2 + 4x + 7 \\quad x \\in \\mathbb{R}$$<br><strong>(a)</strong> Write $\\text{f}(x)$ in the form $a(x + b)^2 + c$, where $a$, $b$, and $c$ are integers to be found.<br><strong>(b)</strong> Sketch the curve with equation $y = \\text{f}(x)$, showing any points of intersection with the coordinate axes and the coordinates of the turning point.<br><strong>(c)(i)</strong> Describe fully the transformation that maps the curve with equation $y = \\text{f}(x)$ onto the curve with equation $y = \\text{g}(x)$ where:<br>$$\\text{g}(x) = 2(x-3)^2 + 4x - 9 \\quad x \\in \\mathbb{R}$$<br><strong>(c)(ii)</strong> Find the range of the function:<br>$$\\text{h}(x) = \\dfrac{10}{2x^2 + 4x + 7} \\quad x \\in \\mathbb{R}$$",
        "steps": [
            "<strong>Part (a):</strong> We complete the square by first factorising out the $2$ from the quadratic and linear terms:<br>$$\\text{f}(x) = 2(x^2 + 2x) + 7$$<br>$$\\text{f}(x) = 2\\left[(x+1)^2 - 1^2\\right] + 7$$<br>$$\\text{f}(x) = 2(x+1)^2 - 2 + 7$$<br>$$\\text{f}(x) = 2(x+1)^2 + 5$$<br>Therefore, the constants are $a = 2$, $b = 1$, and $c = 5$.",
            "<strong>Part (b):</strong> We sketch the quadratic using our key features:<br>1. <strong>Turning Point:</strong> From the completed square form, the minimum turning point is at $(-1, 5)$.<br>2. <strong>$y$-intercept:</strong> Setting $x = 0$ gives $\\text{f}(0) = 7$, so the curve crosses the $y$-axis at $(0, 7)$.<br>3. <strong>$x$-intercepts:</strong> Setting $2x^2+4x+7 = 0$, the discriminant is $\\Delta = 4^2 - 4(2)(7) = -40 < 0$. There are no real roots, so the curve does not cross the $x$-axis.<br><br>Here is the completed sketch showing these features:<br><img src='images/p1/004025_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
            "<strong>Part (c)(i):</strong> First, we expand and complete the square for $\\text{g}(x)$ to find its vertex:<br>$$\\text{g}(x) = 2(x^2 - 6x + 9) + 4x - 9$$<br>$$\\text{g}(x) = 2x^2 - 12x + 18 + 4x - 9 = 2x^2 - 8x + 9$$<br>$$\\text{g}(x) = 2(x^2 - 4x) + 9 = 2\\left[(x-2)^2 - 4\\right] + 9$$<br>$$\\text{g}(x) = 2(x-2)^2 - 8 + 9$$<br>$$\\text{g}(x) = 2(x-2)^2 + 1$$",
            "The vertex of $\\text{f}(x)$ is at $(-1, 5)$ and the vertex of $\\text{g}(x)$ is at $(2, 1)$.<br>To map $(-1, 5)$ onto $(2, 1)$, we shift $+3$ units horizontally and $-4$ units vertically.<br>Therefore, the transformation is a <strong>translation by the vector $\\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$</strong>.",
            "<strong>Part (c)(ii):</strong> We rewrite $\\text{h}(x)$ using our completed square form of the denominator:<br>$$\\text{h}(x) = \\dfrac{10}{2(x+1)^2 + 5}$$<br>Since the minimum value of the denominator is $5$ (when $x = -1$), the maximum value of the fraction is $\\frac{10}{5} = 2$. As $x \\to \\pm\\infty$, the denominator grows infinitely large, so the fraction approaches $0$ from above.<br>Therefore, the range is <strong>$0 < \\text{h}(x) \\le 2$</strong>.",
            "Final Answer: <strong>(a)</strong> $$2(x+1)^2 + 5$$ <strong>(b)</strong> $$Turning\\ Point: (-1,5),\\ y-intercept: (0,7)$$ <strong>(c)(i)</strong> $$Translation\\ by\\ \\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < \\text{h}(x) \\le 2$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$2(x+1)^2 + 5$$ <strong>(b)</strong> $$Turning\\ Point: (-1,5),\\ y-intercept: (0,7)$$ <strong>(c)(i)</strong> $$Translation\\ by\\ \\begin{pmatrix} -3 \\\\ 4 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < \\text{h}(x) \\le 2$$",
                "feedback": "You probably made a sign error when calculating your translation vector in Part (c)(i). Moving from the vertex of $\\text{f}(x)$ at $x = -1$ to the vertex of $\\text{g}(x)$ at $x = 2$ is a horizontal shift of $+3$. Moving from $y = 5$ to $y = 1$ is a vertical shift of $-4$. This gives the vector $\\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$."
            },
            {
                "ans": "<strong>(a)</strong> $$2(x+1)^2 + 5$$ <strong>(b)</strong> $$Turning\\ Point: (-1,5),\\ y-intercept: (0,7)$$ <strong>(c)(i)</strong> $$Translation\\ by\\ \\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 \\le \\text{h}(x) \\le 2$$",
                "feedback": "Check your inequality symbols in Part (c)(ii). The denominator $2x^2+4x+7$ has a minimum value of $5$ and is always strictly positive. Because a fraction with a positive numerator and a strictly positive denominator can never equal zero, the lower bound must be a strict inequality: $0 < \\text{h}(x) \\le 2$, not $0 \\le \\text{h}(x) \\le 2$."
            },
            {
                "ans": "<strong>(a)</strong> $$2(x+1)^2 + 9$$ <strong>(b)</strong> $$Turning\\ Point: (-1,9),\\ y-intercept: (0,7)$$ <strong>(c)(i)</strong> $$Translation\\ by\\ \\begin{pmatrix} 3 \\\\ -8 \\end{pmatrix}$$ <strong>(c)(ii)</strong> $$0 < \\text{h}(x) \\le \\dfrac{10}{9}$$",
                "feedback": "You probably made a sign error when completing the square in Part (a), adding the $2$ instead of subtracting it: $2[(x+1)^2 - 1] + 7 = 2(x+1)^2 - 2 + 7 = 2(x+1)^2 + 5$, not $+9$. This error affected all your subsequent coordinates and calculations."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Leading Coefficient Factorising",
            "content": "When completing the square with a leading coefficient like $2x^2$, only factorise the coefficient out of the quadratic and linear terms ($2[x^2+2x]$). Leaving the constant $+7$ outside the bracket prevents you from accidentally multiplying it, which is the most common source of calculation errors."
        }
    }



];
