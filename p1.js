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
    },
  {
    "id": "004026",
    "major_area": "Trigonometry",
    "topic": "Trigonometric Equations",
    "subtopic": [
      "Trigonometric Equations",
      "Trigonometric Identities",
      "Double Angle Formulae"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Solve, for $$-180^\\circ \\le \\theta \\le 180^\\circ,$$ the equation:<br>$$4\\sin 2\\theta = 7\\cos\\theta.$$Give your answers, where necessary, to one decimal place. Solutions based entirely on graphical or numerical methods are not acceptable.<br><br><strong>(b)</strong> Hence deduce the smallest positive solution of:<br>$$4\\sin(2x + 20^\\circ) = 7\\cos(x + 10^\\circ).$$",
    "steps": [
      "<strong>Part (a):</strong> Use the identity $$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta.$$<br>$$4(2\\sin\\theta\\cos\\theta) = 7\\cos\\theta$$<br>$$8\\sin\\theta\\cos\\theta - 7\\cos\\theta = 0$$<br>Factorise:<br>$$\\cos\\theta(8\\sin\\theta - 7) = 0.$$<br>This gives two branches:<br><em>Branch 1:</em> $$\\cos\\theta = 0 \\Rightarrow \\theta = -90^\\circ,\\ 90^\\circ.$$<br><em>Branch 2:</em> $$\\sin\\theta = \\frac{7}{8} \\Rightarrow \\theta \\approx 61.0^\\circ,\\ 119.0^\\circ.$$",
      "<strong>Part (b):</strong> Note that $$2x + 20^\\circ = 2(x + 10^\\circ).$$ Let $$\\theta = x + 10^\\circ.$$ Then the equation becomes the same as in Part (a).<br>Thus the smallest positive solution is:<br>$$x = 61.0^\\circ - 10^\\circ = 51.0^\\circ.$$",
      "Final Answer: $$\\theta = -90^\\circ,\\ 61.0^\\circ,\\ 90^\\circ,\\ 119.0^\\circ; \\quad x = 51.0^\\circ.$$"
    ],
    "pi_options": [
      {
        "ans": "Smallest positive x = 41.0°",
        "feedback": "You subtracted 20° instead of 10°. Remember: θ = x + 10°, so x = θ − 10°."
      },
      {
        "ans": "Smallest positive x = 80.0°",
        "feedback": "This corresponds to the θ = 90° branch, but it is not the smallest positive solution."
      },
      {
        "ans": "Smallest positive x = 260.0°",
        "feedback": "This comes from the negative θ branch. It is positive, but not the smallest positive solution."
      }
    ],
    "bradley_insight": {
      "type": "tip",
      "title": "Factorisation First",
      "content": "When both sides contain products of trig functions, factorising early often reveals clean solution branches and prevents unnecessary algebra."
    }
  },

  {
    "id": "004027",
    "major_area": "Trigonometry",
    "topic": "Trigonometric Equations",
    "subtopic": [
      "Trigonometric Equations",
      "Trigonometric Identities",
      "Double Angle Formulae"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Solve, for $$-180^\\circ \\le \\theta \\le 180^\\circ,$$ the equation:<br>$$3\\tan\\theta = 2\\sin 2\\theta.$$Give answers to one decimal place where necessary.<br><br><strong>(b)</strong> Deduce the smallest positive solution of:<br>$$3\\tan(x - 15^\\circ) = 2\\sin(2x - 30^\\circ).$$",
    "steps": [
      "<strong>Part (a):</strong> Use $$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}, \\quad \\sin 2\\theta = 2\\sin\\theta\\cos\\theta.$$<br>Substitute:<br>$$3\\frac{\\sin\\theta}{\\cos\\theta} = 4\\sin\\theta\\cos\\theta$$<br>Multiply by cosθ:<br>$$3\\sin\\theta = 4\\sin\\theta\\cos^2\\theta$$<br>Factorise:<br>$$\\sin\\theta(3 - 4\\cos^2\\theta) = 0.$$<br>Solutions:<br>• $$\\sin\\theta = 0 \\Rightarrow \\theta = -180^\\circ, 0^\\circ, 180^\\circ.$$<br>• $$\\cos^2\\theta = \\frac{3}{4} \\Rightarrow \\theta = \\pm 30^\\circ, \\pm 150^\\circ.$$",
      "<strong>Part (b):</strong> Note that $$2x - 30^\\circ = 2(x - 15^\\circ).$$ Let $$\\theta = x - 15^\\circ.$$<br>Smallest positive solution:<br>$$x = 0^\\circ + 15^\\circ = 15^\\circ.$$",
      "Final Answer: $$\\theta = -180^\\circ, -150^\\circ, -30^\\circ, 0^\\circ, 30^\\circ, 150^\\circ, 180^\\circ; \\quad x = 15^\\circ.$$"
    ],
    "pi_options": [
      {
        "ans": "x = 45°",
        "feedback": "This corresponds to θ = 30°, but it is not the smallest positive solution."
      },
      {
        "ans": "x = 345°",
        "feedback": "This comes from the negative θ branch. It is positive, but not the smallest positive solution."
      },
      {
        "ans": "x = 0°",
        "feedback": "Remember to add 15° because θ = x − 15°."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "Watch for Restricted Domains",
      "content": "When tanθ appears, always check for excluded angles such as ±90°. They cannot be solutions even if they appear algebraically."
    }
  },

  {
    "id": "004028",
    "major_area": "Trigonometry",
    "topic": "Trigonometric Equations",
    "subtopic": [
      "Trigonometric Equations",
      "Trigonometric Identities",
      "Double Angle Formulae"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Solve, for $$-180^\\circ \\le \\theta \\le 180^\\circ,$$ the equation:<br>$$5\\cos 2\\theta = 8\\sin\\theta.$$Give answers to one decimal place where necessary.<br><br><strong>(b)</strong> Hence find the smallest positive solution of:<br>$$5\\cos(2x - 40^\\circ) = 8\\sin(x - 20^\\circ).$$",
    "steps": [
      "<strong>Part (a):</strong> Use $$\\cos 2\\theta = 1 - 2\\sin^2\\theta.$$<br>Substitute:<br>$$5(1 - 2\\sin^2\\theta) = 8\\sin\\theta$$<br>$$5 - 10\\sin^2\\theta = 8\\sin\\theta$$<br>Rearrange:<br>$$10\\sin^2\\theta + 8\\sin\\theta - 5 = 0.$$<br>Solve the quadratic:<br>$$\\sin\\theta = \\frac{-8 \\pm \\sqrt{264}}{20}.$$<br>Only the positive root is valid: $$\\sin\\theta \\approx 0.4124.$$<br>Thus: $$\\theta \\approx 24.4^\\circ,\\ 155.6^\\circ.$$",
      "<strong>Part (b):</strong> Note that $$2x - 40^\\circ = 2(x - 20^\\circ).$$ Let $$\\theta = x - 20^\\circ.$$<br>Smallest positive solution:<br>$$x = 24.4^\\circ + 20^\\circ = 44.4^\\circ.$$",
      "Final Answer: $$\\theta \\approx 24.4^\\circ,\\ 155.6^\\circ; \\quad x \\approx 44.4^\\circ.$$"
    ],
    "pi_options": [
      {
        "ans": "x = 64.4°",
        "feedback": "You added 40° instead of 20°. The substitution is θ = x − 20°."
      },
      {
        "ans": "x = 175.6°",
        "feedback": "This corresponds to the second θ value, but it is not the smallest positive solution."
      },
      {
        "ans": "x = 20°",
        "feedback": "This assumes θ = 0°, which is not a solution of the original equation."
      }
    ],
    "bradley_insight": {
      "type": "tip",
      "title": "Quadratics in Disguise",
      "content": "Whenever you see cos2θ or sin2θ, try rewriting everything in terms of sinθ or cosθ. It often collapses into a clean quadratic."
    }
  },

  {
    "id": "004029",
    "major_area": "Trigonometry",
    "topic": "Trigonometric Equations",
    "subtopic": [
      "Trigonometric Equations",
      "Trigonometric Identities",
      "Double Angle Formulae"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Solve, for $$-180^\\circ \\le \\theta \\le 180^\\circ,$$ the equation:<br>$$6\\sin\\theta = 2\\cos 2\\theta.$$<br><br><strong>(b)</strong> Deduce the smallest positive solution of:<br>$$6\\sin(x + 30^\\circ) = 2\\cos(2x + 60^\\circ).$$",
    "steps": [
      "<strong>Part (a):</strong> Use $$\\cos 2\\theta = 1 - 2\\sin^2\\theta.$$<br>Substitute:<br>$$6\\sin\\theta = 2(1 - 2\\sin^2\\theta)$$<br>$$3\\sin\\theta = 1 - 2\\sin^2\\theta$$<br>Rearrange:<br>$$2\\sin^2\\theta + 3\\sin\\theta - 1 = 0.$$<br>Solve the quadratic:<br>$$\\sin\\theta = \\frac{-3 \\pm \\sqrt{17}}{4}.$$<br>Only the positive root is valid: $$\\sin\\theta \\approx 0.2808.$$<br>Thus: $$\\theta \\approx 16.3^\\circ,\\ 163.7^\\circ.$$",
      "<strong>Part (b):</strong> Note that $$2x + 60^\\circ = 2(x + 30^\\circ).$$ Let $$\\theta = x + 30^\\circ.$$<br>Smallest positive solution:<br>$$x = 163.7^\\circ - 30^\\circ = 133.7^\\circ.$$",
      "Final Answer: $$\\theta \\approx 16.3^\\circ,\\ 163.7^\\circ; \\quad x \\approx 133.7^\\circ.$$"
    ],
    "pi_options": [
      {
        "ans": "x = 346.3°",
        "feedback": "This comes from the negative θ branch. It is positive, but not the smallest positive solution."
      },
      {
        "ans": "x = 16.3°",
        "feedback": "You forgot to subtract 30°. Remember: x = θ − 30°."
      },
      {
        "ans": "x = 30°",
        "feedback": "This assumes θ = 60°, which is not a solution of the original equation."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "Check Validity of Roots",
      "content": "Quadratics in sinθ or cosθ often produce invalid roots outside the range −1 to 1. Always check before taking inverse trig values."
    }
  },

  {
    "id": "004030",
    "major_area": "Trigonometry",
    "topic": "Trigonometric Equations",
    "subtopic": [
      "Trigonometric Equations",
      "Trigonometric Identities",
      "Double Angle Formulae"
    ],
    "img": false,
    "question": "<strong>(a)</strong> Solve, for $$-180^\\circ \\le \\theta \\le 180^\\circ,$$ the equation:<br>$$9\\sin 2\\theta = 4\\tan\\theta.$$Give answers to one decimal place where necessary.<br><br><strong>(b)</strong> Hence deduce the smallest positive solution of:<br>$$9\\sin(2x - 10^\\circ) = 4\\tan(x - 5^\\circ).$$",
    "steps": [
      "<strong>Part (a):</strong> Use $$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta, \\quad \\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}.$$<br>Substitute:<br>$$18\\sin\\theta\\cos^2\\theta = 4\\sin\\theta$$<br>Factorise:<br>$$2\\sin\\theta(9\\cos^2\\theta - 2) = 0.$$<br>Solutions:<br>• $$\\sin\\theta = 0 \\Rightarrow \\theta = -180^\\circ, 0^\\circ, 180^\\circ.$$<br>• $$\\cos^2\\theta = \\frac{2}{9} \\Rightarrow \\theta \\approx \\pm 61.9^\\circ, \\pm 118.1^\\circ.$$",
      "<strong>Part (b):</strong> Note that $$2x - 10^\\circ = 2(x - 5^\\circ).$$ Let $$\\theta = x - 5^\\circ.$$<br>Smallest positive solution:<br>$$x = 0^\\circ + 5^\\circ = 5^\\circ.$$",
      "Final Answer: $$\\theta = -180^\\circ, -118.1^\\circ, -61.9^\\circ, 0^\\circ, 61.9^\\circ, 118.1^\\circ, 180^\\circ; \\quad x = 5^\\circ.$$"
    ],
    "pi_options": [
      {
        "ans": "x = 66.9°",
        "feedback": "This corresponds to θ = 61.9°, but it is not the smallest positive solution."
      },
      {
        "ans": "x = 185°",
        "feedback": "This comes from the θ = −180° branch. It is positive, but not the smallest positive solution."
      },
      {
        "ans": "x = 0°",
        "feedback": "Remember: x = θ + 5°, and θ = 0° gives x = 5°."
      }
    ],
    "bradley_insight": {
      "type": "tip",
      "title": "Spot the Structure",
      "content": "When the transformed equation in Part (b) mirrors the structure of Part (a), a simple substitution often collapses the problem instantly."
    }
  },
    {
        "id": "004031",
        "major_area": "Exponentials & Logarithms",
        "topic": "Exponentials",
        "subtopic": [
            "Exponential Modelling"
        ],
        "img": false,
        "question": "In a simple model, the value, £$V$, of a motorcycle depends on its age, $t$, in years.<br>The following information is available for motorcycle $A$:<br><ul><li>its value when new is £15,000</li><li>its value after one year is £12,000</li></ul><strong>(a)</strong> Use an exponential model to form, for motorcycle $A$, a possible equation linking $V$ with $t$.<br>The value of motorcycle $A$ is monitored over an 8-year period. Its value after 8 years is £2,500.<br><strong>(b)</strong> Evaluate the reliability of your model in light of this information.<br>The following information is available for motorcycle $B$:<br><ul><li>it has the same value, when new, as motorcycle $A$</li><li>its value depreciates more slowly than that of motorcycle $A$</li></ul><strong>(c)</strong> Explain how you would adapt the equation found in <strong>(a)</strong> so that it could be used to model the value of motorcycle $B$.",
        "steps": [
            "<strong>Part (a):</strong> We define our exponential model in the standard form $V = A b^t$, where $A$ is the initial value and $b$ is the annual multiplier.",
            "Using the initial condition when the motorcycle is new ($t = 0$):<br>$$15000 = A b^0 \\implies A = 15000$$",
            "Using the value after one year ($t = 1$):<br>$$12000 = 15000 b^1 \\implies b = \\dfrac{12000}{15000} = 0.8$$",
            "This gives our final exponential equation linking $V$ with $t$:<br>$$V = 15000(0.8)^t$$",
            "<strong>Part (b):</strong> We substitute $t = 8$ into our model to find the predicted value:<br>$$V = 15000(0.8)^8 \\approx 15000 \\times 0.16777 \\approx £2,517$$",
            "The actual monitored value after 8 years is £2,500. Since our model's prediction of £2,517 is extremely close to the actual value, the model is highly reliable over this 8-year period.",
            "<strong>Part (c):</strong> For motorcycle $B$, which depreciates more slowly, the value must decrease at a slower rate than $20\\%$ per year.<br>Therefore, the base of the exponent (currently $0.8$) must be increased to a value closer to $1$ (for example, $0.85$ or some multiplier $r > 0.8$). The initial value remains at $15000$.",
            "Final Answer: <strong>(a)</strong> $$V = 15000(0.8)^t$$ <strong>(b)</strong> $$Model\\ is\\ highly\\ reliable\\ (\\approx £2,517\\ vs\\ £2,500)$$ <strong>(c)</strong> $$Increase\\ the\\ base\\ (e.g.\\ V = 15000(r)^t\\ where\\ r > 0.8)$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$V = 15000 - 3000t$$ <strong>(b)</strong> $$Model\\ is\\ highly\\ reliable\\ (\\approx £2,517\\ vs\\ £2,500)$$ <strong>(c)</strong> $$Increase\\ the\\ base\\ (e.g.\\ V = 15000(r)^t\\ where\\ r > 0.8)$$对外",
                "feedback": "You formed a linear depreciation model ($V = 15000 - 3000t$) instead of an exponential model in Part (a). Exponential models must be of the form $V = A b^t$ or $V = A \\text{e}^{-kt}$."
            },
            {
                "ans": "<strong>(a)</strong> $$V = 15000(0.8)^t$$ <strong>(b)</strong> $$Model\\ is\\ highly\\ reliable\\ (\\approx £2,517\\ vs\\ £2,500)$$ <strong>(c)</strong> $$Decrease\\ the\\ base\\ (e.g.\\ V = 15000(r)^t\\ where\\ r < 0.8)$$",
                "feedback": "Check your reasoning for Part (c). If motorcycle $B$ depreciates more slowly, it retains more of its value each year. Therefore, its base multiplier $r$ must be larger (closer to $1$) than $0.8$, not smaller."
            },
            {
                "ans": "<strong>(a)</strong> $$V = 15000(0.2)^t$$ <strong>(b)</strong> $$Model\\ is\\ completely\\ unreliable$$ <strong>(c)</strong> $$Increase\\ the\\ base\\ (e.g.\\ V = 15000(r)^t\\ where\\ r > 0.8)$$",
                "feedback": "When calculating the exponential base in Part (a), you probably used the rate of depreciation ($20\\% = 0.2$) instead of the remaining value multiplier ($1 - 0.2 = 0.8$). This sign error caused your model to predict the motorcycle's value as almost zero after 8 years."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Base Multipliers",
            "content": "In GCE exponential modeling, the base of the exponent ($b$ in $A b^t$) always represents the proportion of value retained each year. If an asset depreciates by $20\\%$, it retains $80\\%$ of its value, so $b = 0.8$. If it depreciates more slowly, it retains more value, so $b$ must increase closer to $1$."
        }
    },
    {
        "id": "004032",
        "major_area": "Exponentials & Logarithms",
        "topic": "Exponentials",
        "subtopic": [
            "Exponential Modelling"
        ],
        "img": false,
        "question": "In a simple model, the value, £$V$, of an industrial machine depends on its age, $t$, in years.<br>The following information is available for machine $A$:<br><ul><li>its value when new is £50,000</li><li>its value after one year is £42,500</li></ul><strong>(a)</strong> Use an exponential model to form, for machine $A$, a possible equation linking $V$ with $t$.<br>The value of machine $A$ is monitored over a 12-year period. Its value after 12 years is £10,000.<br><strong>(b)</strong> Evaluate the reliability of your model in light of this information.<br>The following information is available for machine $B$:<br><ul><li>it has the same value, when new, as machine $A$</li><li>its value depreciates more slowly than that of machine $A$</li></ul><strong>(c)</strong> Explain how you would adapt the equation found in <strong>(a)</strong> so that it could be used to model the value of machine $B$.",
        "steps": [
            "<strong>Part (a):</strong> We define our exponential model in the form $V = A b^t$, where $A$ is the initial value and $b$ is the annual multiplier.",
            "Using the initial condition when the machine is new ($t = 0$):<br>$$50000 = A b^0 \\implies A = 50000$$",
            "Using the value after one year ($t = 1$):<br>$$42500 = 50000 b^1 \\implies b = \\dfrac{42500}{50000} = 0.85$$",
            "This gives our final exponential equation linking $V$ with $t$:<br>$$V = 50000(0.85)^t$$",
            "<strong>Part (b):</strong> We substitute $t = 12$ into our model to find the predicted value:<br>$$V = 50000(0.85)^{12} \\approx 50000 \\times 0.14224 \\approx £7,112$$",
            "The actual monitored value after 12 years is £10,000. Since our model's prediction of £7,112 significantly underestimates the actual value, the model has weaker reliability over this longer 12-year period (depreciation in reality is slower than the model predicts).",
            "<strong>Part (c):</strong> For machine $B$, which depreciates more slowly, the value must decrease at a slower rate than $15\\%$ per year.<br>Therefore, the base of the exponent (currently $0.85$) must be increased to a value closer to $1$ (for example, $0.90$ or some multiplier $r > 0.85$). The initial value remains at $50000$.",
            "Final Answer: <strong>(a)</strong> $$V = 50000(0.85)^t$$ <strong>(b)</strong> $$Model\\ is\\ less\\ reliable\\ (underestimates\\ value\\ by\\ \\approx £2,888)$$ <strong>(c)</strong> $$Increase\\ the\\ base\\ (e.g.\\ V = 50000(r)^t\\ where\\ r > 0.85)$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$V = 50000(0.85)^t$$ <strong>(b)</strong> $$Model\\ is\\ highly\\ reliable$$ <strong>(c)</strong> $$Increase\\ the\\ base\\ (e.g.\\ V = 50000(r)^t\\ where\\ r > 0.85)$$",
                "feedback": "You probably evaluated the model's reliability incorrectly in Part (b). Our model's prediction is £7,112, which is significantly lower than the actual value of £10,000. An underestimation of almost $30\\%$ indicates that the model's reliability over this 12-year period is weaker."
            },
            {
                "ans": "<strong>(a)</strong> $$V = 50000 - 7500t$$ <strong>(b)</strong> $$Model\\ is\\ less\\ reliable$$ <strong>(c)</strong> $$Increase\\ the\\ base\\ (e.g.\\ V = 50000(r)^t\\ where\\ r > 0.85)$$",
                "feedback": "You formed a linear depreciation model ($V = 50000 - 7500t$) instead of an exponential model in Part (a). Make sure you use the standard exponential structure $V = A b^t$."
            },
            {
                "ans": "<strong>(a)</strong> $$V = 50000(0.85)^t$$ <strong>(b)</strong> $$Model\\ is\\ less\\ reliable$$ <strong>(c)</strong> $$Decrease\\ the\\ base\\ (e.g.\\ V = 50000(r)^t\\ where\\ r < 0.85)$$",
                "feedback": "Check your reasoning for Part (c). If machine $B$ depreciates more slowly, it retains more of its value each year. Therefore, its base multiplier $r$ must be larger (closer to $1$) than $0.85$, not smaller."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Evaluating Reliability",
            "content": "In applied modeling, evaluate reliability objectively by comparing the model's prediction with real-world data. If there is a substantial gap (like the underestimation in this question), state clearly that the model's reliability is weak over that timescale and explain whether it overestimates or underestimates reality."
        }
    },
    {
        "id": "004033",
        "major_area": "Exponentials & Logarithms",
        "topic": "Exponentials",
        "subtopic": [
            "Exponential Modelling"
        ],
        "img": false,
        "question": "In a simple model, the value, £$V$, of a luxury yacht depends on its age, $t$, in years.<br>The following information is available for yacht $A$:<br><ul><li>its value when new is £100,000</li><li>its value after one year is £90,000</li></ul><strong>(a)</strong> Use an exponential model to form, for yacht $A$, a possible equation linking $V$ with $t$.<br>The value of yacht $A$ is monitored over a 10-year period. Its value after 10 years is £35,000.<br><strong>(b)</strong> Evaluate the reliability of your model in light of this information.<br>The following information is available for yacht $B$:<br><ul><li>it has the same value, when new, as yacht $A$</li><li>its value depreciates more slowly than that of yacht $A$</li></ul><strong>(c)</strong> Explain how you would adapt the equation found in <strong>(a)</strong> so that it could be used to model the value of yacht $B$.",
        "steps": [
            "<strong>Part (a):</strong> We define our exponential model in the form $V = A b^t$, where $A$ is the initial value and $b$ is the annual multiplier.",
            "Using the initial condition when the yacht is new ($t = 0$):<br>$$100000 = A b^0 \\implies A = 100000$$",
            "Using the value after one year ($t = 1$):<br>$$90000 = 100000 b^1 \\implies b = \\dfrac{90000}{100000} = 0.9$$",
            "This gives our final exponential equation linking $V$ with $t$:<br>$$V = 100000(0.9)^t$$",
            "<strong>Part (b):</strong> We substitute $t = 10$ into our model to find the predicted value:<br>$$V = 100000(0.9)^{10} \\approx 100000 \\times 0.34868 \\approx £34,868$$",
            "The actual monitored value after 10 years is £35,000. Since our model's prediction of £34,868 is extremely close to the actual value, the model is highly reliable over this 10-year period.",
            "<strong>Part (c):</strong> For yacht $B$, which depreciates more slowly, the value must decrease at a slower rate than $10\\%$ per year.<br>Therefore, the base of the exponent (currently $0.9$) must be increased to a value closer to $1$ (for example, $0.93$ or some multiplier $r > 0.9$). The initial value remains at $100000$.",
            "Final Answer: <strong>(a)</strong> $$V = 100000(0.9)^t$$ <strong>(b)</strong> $$Model\\ is\\ highly\\ reliable\\ (\\approx £34,868\\ vs\\ £35,000)$$ <strong>(c)</strong> $$Increase\\ the\\ base\\ (e.g.\\ V = 100000(r)^t\\ where\\ r > 0.9)$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$V = 100000(0.9)^t$$ <strong>(b)</strong> $$Model\\ is\\ highly\\ reliable\\ (\\approx £34,868\\ vs\\ £35,000)$$ <strong>(c)</strong> $$Decrease\\ the\\ base\\ (e.g.\\ V = 100000(r)^t\\ where\\ r < 0.9)$$",
                "feedback": "Check your reasoning for Part (c). If yacht $B$ depreciates more slowly, it retains more of its value each year. Therefore, its base multiplier $r$ must be larger (closer to $1$) than $0.9$, not smaller."
            },
            {
                "ans": "<strong>(a)</strong> $$V = 100000 - 10000t$$ <strong>(b)</strong> $$Model\\ is\\ highly\\ reliable$$ <strong>(c)</strong> $$Increase\\ the\\ base\\ (e.g.\\ V = 100000(r)^t\\ where\\ r > 0.9)$$",
                "feedback": "You formed a linear depreciation model ($V = 100000 - 10000t$) instead of an exponential model in Part (a). Exponential models must be of the form $V = A b^t$."
            },
            {
                "ans": "<strong>(a)</strong> $$V = 100000(0.1)^t$$ <strong>(b)</strong> $$Model\\ is\\ completely\\ unreliable$$ <strong>(c)</strong> $$Increase\\ the\\ base\\ (e.g.\\ V = 100000(r)^t\\ where\\ r > 0.9)$$",
                "feedback": "When calculating the exponential base in Part (a), you probably used the rate of depreciation ($10\\% = 0.1$) instead of the remaining value multiplier ($1 - 0.1 = 0.9$). This error caused your model to predict the yacht's value as almost zero after 10 years."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Percentage Depreciation",
            "content": "Always remember that an annual depreciation of $P\\%$ corresponds to an exponential multiplier of $r = 1 - \\frac{P}{100}$. For a luxury yacht depreciating at $10\\%$ per year, the multiplier is $r = 0.9$. This allows you to construct and adapt these models rapidly."
        }
    },
    {
        "id": "004034",
        "major_area": "Exponentials & Logarithms",
        "topic": "Exponentials",
        "subtopic": [
            "Exponential Modelling"
        ],
        "img": false,
        "question": "In a simple model, the value, £$V$, of an agricultural tractor depends on its age, $t$, in years.<br>The following information is available for tractor $A$:<br><ul><li>its value when new is £40,000</li><li>its value after one year is £30,000</li></ul><strong>(a)</strong> Use an exponential model to form, for tractor $A$, a possible equation linking $V$ with $t$.<br>The value of tractor $A$ is monitored over an 8-year period. Its value after 8 years is £4,000.<br><strong>(b)</strong> Evaluate the reliability of your model in light of this information.<br>The following information is available for tractor $B$:<br><ul><li>it has the same value, when new, as tractor $A$</li><li>its value depreciates more slowly than that of tractor $A$</li></ul><strong>(c)</strong> Explain how you would adapt the equation found in <strong>(a)</strong> so that it could be used to model the value of tractor $B$.",
        "steps": [
            "<strong>Part (a):</strong> We define our exponential model in the form $V = A b^t$, where $A$ is the initial value and $b$ is the annual multiplier.",
            "Using the initial condition when the tractor is new ($t = 0$):<br>$$40000 = A b^0 \\implies A = 40000$$",
            "Using the value after one year ($t = 1$):<br>$$30000 = 40000 b^1 \\implies b = \\dfrac{30000}{40000} = 0.75$$",
            "This gives our final exponential equation linking $V$ with $t$:<br>$$V = 40000(0.75)^t$$",
            "<strong>Part (b):</strong> We substitute $t = 8$ into our model to find the predicted value:<br>$$V = 40000(0.75)^8 \\approx 40000 \\times 0.10011 \\approx £4,005$$",
            "The actual monitored value after 8 years is £4,000. Since our model's prediction of £4,005 is extremely close to the actual value, the model is highly reliable over this 8-year period.",
            "<strong>Part (c):</strong> For tractor $B$, which depreciates more slowly, the value must decrease at a slower rate than $25\\%$ per year.<br>Therefore, the base of the exponent (currently $0.75$) must be increased to a value closer to $1$ (for example, $0.80$ or some multiplier $r > 0.75$). The initial value remains at $40000$.",
            "Final Answer: <strong>(a)</strong> $$V = 40000(0.75)^t$$ <strong>(b)</strong> $$Model\\ is\\ highly\\ reliable\\ (\\approx £4,005\\ vs\\ £4,000)$$ <strong>(c)</strong> $$Increase\\ the\\ base\\ (e.g.\\ V = 40000(r)^t\\ where\\ r > 0.75)$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$V = 40000(0.75)^t$$ <strong>(b)</strong> $$Model\\ is\\ highly\\ reliable\\ (\\approx £4,005\\ vs\\ £4,000)$$ <strong>(c)</strong> $$Decrease\\ the\\ base\\ (e.g.\\ V = 40000(r)^t\\ where\\ r < 0.75)$$",
                "feedback": "Check your reasoning for Part (c). If tractor $B$ depreciates more slowly, it retains more of its value each year. Therefore, its base multiplier $r$ must be larger (closer to $1$) than $0.75$, not smaller."
            },
            {
                "ans": "<strong>(a)</strong> $$V = 40000(0.25)^t$$ <strong>(b)</strong> $$Model\\ is\\ completely\\ unreliable$$ <strong>(c)</strong> $$Increase\\ the\\ base\\ (e.g.\\ V = 40000(r)^t\\ where\\ r > 0.75)$$",
                "feedback": "When calculating the exponential base in Part (a), you probably used the rate of depreciation ($25\\% = 0.25$) instead of the remaining value multiplier ($1 - 0.25 = 0.75$). This error caused your model to predict the tractor's value as almost zero after 8 years."
            },
            {
                "ans": "<strong>(a)</strong> $$V = 40000 - 1250t$$ <strong>(b)</strong> $$Model\\ is\\ highly\\ reliable$$ <strong>(c)</strong> $$Increase\\ the\\ base\\ (e.g.\\ V = 40000(r)^t\\ where\\ r > 0.75)$$",
                "feedback": "You formed a linear depreciation model ($V = 40000 - 1250t$) instead of an exponential model in Part (a). Exponential models must be of the form $V = A b^t$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Exponential decay curves",
            "content": "In real-world engineering and agricultural economics, assets like tractors depreciate much faster in their first year than in subsequent years. Exponential curves capture this behavior mathematically far better than linear equations, which is why GCE exams heavily favor exponential models."
        }
    },
    {
        "id": "004035",
        "major_area": "Exponentials & Logarithms",
        "topic": "Exponentials",
        "subtopic": [
            "Exponential Modelling"
        ],
        "img": false,
        "question": "In a simple model, the value, £$V$, of an electric vehicle (EV) depends on its age, $t$, in years.<br>The following information is available for EV $A$:<br><ul><li>its value when new is £30,000</li><li>its value after one year is £24,000</li></ul><strong>(a)</strong> Use an exponential model to form, for EV $A$, a possible equation linking $V$ with $t$.<br>The value of EV $A$ is monitored over a 6-year period. Its value after 6 years is £7,800.<br><strong>(b)</strong> Evaluate the reliability of your model in light of this information.<br>The following information is available for EV $B$:<br><ul><li>it has the same value, when new, as EV $A$</li><li>its value depreciates more slowly than that of EV $A$</li></ul><strong>(c)</strong> Explain how you would adapt the equation found in <strong>(a)</strong> so that it could be used to model the value of EV $B$.",
        "steps": [
            "<strong>Part (a):</strong> We define our exponential model in the form $V = A b^t$, where $A$ is the initial value and $b$ is the annual multiplier.",
            "Using the initial condition when the EV is new ($t = 0$):<br>$$30000 = A b^0 \\implies A = 30000$$",
            "Using the value after one year ($t = 1$):<br>$$24000 = 30000 b^1 \\implies b = \\dfrac{24000}{30000} = 0.8$$",
            "This gives our final exponential equation linking $V$ with $t$:<br>$$V = 30000(0.8)^t$$",
            "<strong>Part (b):</strong> We substitute $t = 6$ into our model to find the predicted value:<br>$$V = 30000(0.8)^6 \\approx 30000 \\times 0.26214 \\approx £7,864$$",
            "The actual monitored value after 6 years is £7,800. Since our model's prediction of £7,864 is extremely close to the actual value, the model is highly reliable over this 6-year period.",
            "<strong>Part (c):</strong> For EV $B$, which depreciates more slowly, the value must decrease at a slower rate than $20\\%$ per year.<br>Therefore, the base of the exponent (currently $0.8$) must be increased to a value closer to $1$ (for example, $0.85$ or some multiplier $r > 0.8$). The initial value remains at $30000$.",
            "Final Answer: <strong>(a)</strong> $$V = 30000(0.8)^t$$ <strong>(b)</strong> $$Model\\ is\\ highly\\ reliable\\ (\\approx £7,864\\ vs\\ £7,800)$$ <strong>(c)</strong> $$Increase\\ the\\ base\\ (e.g.\\ V = 30000(r)^t\\ where\\ r > 0.8)$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$V = 30000(0.8)^t$$ <strong>(b)</strong> $$Model\\ is\\ highly\\ reliable\\ (\\approx £7,864\\ vs\\ £7,800)$$ <strong>(c)</strong> $$Decrease\\ the\\ base\\ (e.g.\\ V = 30000(r)^t\\ where\\ r < 0.8)$$",
                "feedback": "Check your reasoning for Part (c). If EV $B$ depreciates more slowly, it retains more of its value each year. Therefore, its base multiplier $r$ must be larger (closer to $1$) than $0.8$, not smaller."
            },
            {
                "ans": "<strong>(a)</strong> $$V = 30000(0.2)^t$$ <strong>(b)</strong> $$Model\\ is\\ completely\\ unreliable$$ <strong>(c)</strong> $$Increase\\ the\\ base\\ (e.g.\\ V = 30000(r)^t\\ where\\ r > 0.8)$$",
                "feedback": "When calculating the exponential base in Part (a), you probably used the rate of depreciation ($20\\% = 0.2$) instead of the remaining value multiplier ($1 - 0.2 = 0.8$). This error caused your model to predict the EV's value as almost zero after 6 years."
            },
            {
                "ans": "<strong>(a)</strong> $$V = 30000 - 6000t$$ <strong>(b)</strong> $$Model\\ is\\ highly\\ reliable$$ <strong>(c)</strong> $$Increase\\ the\\ base\\ (e.g.\\ V = 30000(r)^t\\ where\\ r > 0.8)$$",
                "feedback": "You formed a linear depreciation model ($V = 30000 - 6000t$) instead of an exponential model in Part (a). Exponential models must be of the form $V = A b^t$."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Generalizing Models",
            "content": "In advanced applications, instead of changing the base $b$, you might see models written as $V = A \\text{e}^{-kt}$. To model slower depreciation in this form, you would decrease the value of the decay constant $k$. Both approaches are mathematically equivalent and widely accepted."
        }
    },
    {
        "id": "004036",
        "major_area": "Integration",
        "topic": "Integration",
        "subtopic": [
            "Area Under a Curve",
            "Definite Integration"
        ],
        "img": "images/p1/004036.png",
        "question": "The diagram shows a sketch of part of the curve with equation:<br>$$y = x(x+1)(x-2)$$<br>The region $R_1$, shown shaded in the diagram, is bounded by the curve and the negative $x$-axis.<br><strong>(a)</strong> Show that the exact area of $R_1$ is $\\dfrac{5}{12}$.<br><br>The region $R_2$, also shown shaded in the diagram, is bounded by the curve, the positive $x$-axis, and the line with equation $x = b$, where $b$ is a positive constant and $0 < b < 2$.<br>Given that the area of $R_1$ is equal to the area of $R_2$:<br><strong>(b)</strong> Verify that $b$ satisfies the equation:<br>$$(b+1)^2(3b^2 - 10b + 5) = 0$$<br>The roots of the equation $3b^2 - 10b + 5 = 0$ are $0.613$ and $2.721$ to 3 decimal places. The value of $b$ is therefore $0.613$ to 3 decimal places.<br><strong>(c)</strong> Explain, with the aid of a diagram, the significance of the root $2.721$.",
        "steps": [
            "<strong>Part (a):</strong> First, we expand the cubic equation to make it easy to integrate:<br>$$y = x(x+1)(x-2) = x(x^2 - x - 2) = x^3 - x^2 - 2x$$",
            "Since the region $R_1$ lies entirely above the $x$-axis between the roots $x = -1$ and $x = 0$, its exact area is given by the definite integral:<br>$$\\text{Area } R_1 = \\int_{-1}^{0} (x^3 - x^2 - 2x) \\text{ d}x$$<br>$$\\text{Area } R_1 = \\left[ \\frac{x^4}{4} - \\frac{x^3}{3} - x^2 \\right]_{-1}^{0}$$",
            "Evaluating this at the limits $0$ and $-1$:<br>$$\\text{Area } R_1 = 0 - \\left( \\frac{(-1)^4}{4} - \\frac{(-1)^3}{3} - (-1)^2 \\right)$$<br>$$\\text{Area } R_1 = - \\left( \\frac{1}{4} + \\frac{1}{3} - 1 \\right) = - \\left( -\\frac{5}{12} \\right) = \\frac{5}{12}$$",
            "<strong>Part (b):</strong> Since $R_2$ lies entirely below the $x$-axis in the interval $0 < b < 2$, its area is given by the negative integral:<br>$$\\text{Area } R_2 = -\\int_{0}^{b} (x^3 - x^2 - 2x) \\text{ d}x = -\\left[ \\frac{x^4}{4} - \\frac{x^3}{3} - x^2 \\right]_{0}^{b}$$<br>$$\\text{Area } R_2 = -\\left( \\frac{b^4}{4} - \\frac{b^3}{3} - b^2 \\right)$$",
            "Setting $\\text{Area } R_1 = \\text{Area } R_2$ gives:<br>$$\\frac{5}{12} = -\\left( \\frac{b^4}{4} - \\frac{b^3}{3} - b^2 \\right) \\implies \\frac{b^4}{4} - \\frac{b^3}{3} - b^2 + \\frac{5}{12} = 0$$<br>Multiplying the entire equation by $12$ to clear the fractions:<br>$$3b^4 - 4b^3 - 12b^2 + 5 = 0$$",
            "We can verify that this factorises to $(b+1)^2(3b^2 - 10b + 5) = 0$ by expanding the brackets:<br>$$(b^2 + 2b + 1)(3b^2 - 10b + 5) = b^2(3b^2 - 10b + 5) + 2b(3b^2 - 10b + 5) + 1(3b^2 - 10b + 5)$$<br>$$= 3b^4 - 10b^3 + 5b^2 + 6b^3 - 20b^2 + 10b + 3b^2 - 10b + 5$$<br>$$= 3b^4 - 4b^3 - 12b^2 + 5 = 0 \\quad \\text{(verified)}$$",
            "<strong>Part (c):</strong> The root $b \\approx 2.721$ lies to the right of the root $x = 2$, which is outside our interval of validity $0 < b < 2$.<br>Geometrically, this value represents an upper limit where the total net signed area from $0$ to $2.721$ integrates to $-\\frac{5}{12}$. This occurs because the negative area of the lower lobe (between $0$ and $2$) is partially cancelled out by the positive area of the upper lobe (between $2$ and $2.721$).<br><br>Here is the diagram showing this relationship:<br><img src='images/p1/004036_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
            "Final Answer: <strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{5}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 10b + 5) = 0 \\quad \\text{is verified}$$ <strong>(c)</strong> $$b \\approx 2.721\\ \\text{represents the point of signed area cancellation}$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = -\\dfrac{5}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 10b + 5) = 0$$ <strong>(c)</strong> $$b \\approx 2.721\\ \\text{represents a turning point}$$",
                "feedback": "Check your integration signs in Part (a). Because the region $R_1$ lies strictly above the $x$-axis, its area must be a positive value: $\\frac{5}{12}$, not $-\\frac{5}{12}$. Area is a physical quantity and cannot be negative."
            },
            {
                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{5}{12}$$ <strong>(b)</strong> $$(b-1)^2(3b^2 - 10b + 5) = 0$$ <strong>(c)</strong> $$b \\approx 2.721\\ \\text{represents area cancellation}$$",
                "feedback": "You probably made a sign error in the double-root factor in Part (b). Since the double root originates from the negative root of the cubic ($x = -1$), the factor must be $(b + 1)^2$, not $(b - 1)^2$."
            },
            {
                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{5}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 10b + 5) = 0$$ <strong>(c)</strong> $$b \\approx 2.721\\ \\text{is the local minimum of the curve}$$",
                "feedback": "Check your explanation in Part (c). The value $2.721$ is a root of our quartic area equation; it has no relation to the turning points of the curve. It represents the point where the positive area above the axis cancels the excess negative area below the axis."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Net Area Cancellation",
            "content": "When integrating past a root (like $x = 2$ in this question), the curve changes sign. Definite integration calculates <strong>signed area</strong>, meaning regions above the axis are positive, and regions below are negative. The root $2.721$ is simply the algebraic point where these positive and negative lobes balance out."
        }
    },
    {
        "id": "004037",
        "major_area": "Integration",
        "topic": "Integration",
        "subtopic": [
            "Area Under a Curve",
            "Definite Integration"
        ],
        "img": "images/p1/004037.png",
        "question": "The diagram shows a sketch of part of the curve with equation:<br>$$y = x(x+1)(x-3)$$<br>The region $R_1$, shown shaded in the diagram, is bounded by the curve and the negative $x$-axis.<br><strong>(a)</strong> Show that the exact area of $R_1$ is $\\dfrac{7}{12}$.<br><br>The region $R_2$, also shown shaded in the diagram, is bounded by the curve, the positive $x$-axis, and the line with equation $x = b$, where $b$ is a positive constant and $0 < b < 3$.<br>Given that the area of $R_1$ is equal to the area of $R_2$:<br><strong>(b)</strong> Verify that $b$ satisfies the equation:<br>$$(b+1)^2(3b^2 - 14b + 7) = 0$$<br>The roots of the equation $3b^2 - 14b + 7 = 0$ are $0.570$ and $4.097$ to 3 decimal places. The value of $b$ is therefore $0.570$ to 3 decimal places.<br><strong>(c)</strong> Explain, with the aid of a diagram, the significance of the root $4.097$.",
        "steps": [
            "<strong>Part (a):</strong> First, we expand the cubic equation to make it easy to integrate:<br>$$y = x(x+1)(x-3) = x(x^2 - 2x - 3) = x^3 - 2x^2 - 3x$$",
            "Since the region $R_1$ lies entirely above the $x$-axis between $x = -1$ and $x = 0$, its exact area is given by the definite integral:<br>$$\\text{Area } R_1 = \\int_{-1}^{0} (x^3 - 2x^2 - 3x) \\text{ d}x$$<br>$$\\text{Area } R_1 = \\left[ \\frac{x^4}{4} - \\frac{2x^3}{3} - \\frac{3x^2}{2} \\right]_{-1}^{0}$$",
            "Evaluating this at the limits $0$ and $-1$:<br>$$\\text{Area } R_1 = 0 - \\left( \\frac{(-1)^4}{4} - \\frac{2(-1)^3}{3} - \\frac{3(-1)^2}{2} \\right)$$<br>$$\\text{Area } R_1 = - \\left( \\frac{1}{4} + \\frac{2}{3} - \\frac{3}{2} \\right) = - \\left( -\\frac{7}{12} \\right) = \\frac{7}{12}$$",
            "<strong>Part (b):</strong> Since $R_2$ lies entirely below the $x$-axis in the interval $0 < b < 3$, its area is given by the negative integral:<br>$$\\text{Area } R_2 = -\\int_{0}^{b} (x^3 - 2x^2 - 3x) \\text{ d}x = -\\left[ \\frac{x^4}{4} - \\frac{2x^3}{3} - \\frac{3x^2}{2} \\right]_{0}^{b}$$<br>$$\\text{Area } R_2 = -\\left( \\frac{b^4}{4} - \\frac{2b^3}{3} - \\frac{3b^2}{2} \\right)$$",
            "Setting $\\text{Area } R_1 = \\text{Area } R_2$ gives:<br>$$\\frac{7}{12} = -\\left( \\frac{b^4}{4} - \\frac{2b^3}{3} - \\frac{3b^2}{2} \\right) \\implies \\frac{b^4}{4} - \\frac{2b^3}{3} - \\frac{3b^2}{2} + \\frac{7}{12} = 0$$<br>Multiplying the entire equation by $12$ to clear the fractions:<br>$$3b^4 - 8b^3 - 18b^2 + 7 = 0$$",
            "We can verify that this factorises to $(b+1)^2(3b^2 - 14b + 7) = 0$ by expanding the brackets:<br>$$(b^2 + 2b + 1)(3b^2 - 14b + 7) = b^2(3b^2 - 14b + 7) + 2b(3b^2 - 14b + 7) + 1(3b^2 - 14b + 7)$$<br>$$= 3b^4 - 14b^3 + 7b^2 + 6b^3 - 28b^2 + 14b + 3b^2 - 14b + 7$$<br>$$= 3b^4 - 8b^3 - 18b^2 + 7 = 0 \\quad \\text{(verified)}$$",
            "<strong>Part (c):</strong> The root $b \\approx 4.097$ lies to the right of the root $x = 3$, which is outside our interval of validity $0 < b < 3$.<br>Geometrically, this value represents an upper limit where the total net signed area from $0$ to $4.097$ integrates to $-\\frac{7}{12}$. This occurs because the negative area of the lower lobe (between $0$ and $3$) is partially cancelled out by the positive area of the upper lobe (between $3$ and $4.097$).<br><br>Here is the diagram showing this relationship:<br><img src='images/p1/004037_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
            "Final Answer: <strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{7}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 14b + 7) = 0 \\quad \\text{is verified}$$ <strong>(c)</strong> $$b \\approx 4.097\\ \\text{represents the point of signed area cancellation}$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = -\\dfrac{7}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 14b + 7) = 0$$ <strong>(c)</strong> $$b \\approx 4.097\\ \\text{represents a turning point}$$",
                "feedback": "Check your integration signs in Part (a). Because the region $R_1$ lies strictly above the $x$-axis, its area must be positive: $\\frac{7}{12}$, not $-\\frac{7}{12}$."
            },
            {
                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{7}{12}$$ <strong>(b)</strong> $$(b-1)^2(3b^2 - 14b + 7) = 0$$ <strong>(c)</strong> $$b \\approx 4.097\\ \\text{represents area cancellation}$$",
                "feedback": "You probably made a sign error in the double-root factor in Part (b). Since the double root originates from the negative root of the cubic ($x = -1$), the factor must be $(b + 1)^2$, not $(b - 1)^2$."
            },
            {
                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{7}{12}$$ <strong>(b)</strong> $$(b+1)^2(3b^2 - 14b + 7) = 0$$ <strong>(c)</strong> $$b \\approx 4.097\\ \\text{is the local minimum of the curve}$$",
                "feedback": "Check your explanation in Part (c). The value $4.097$ is a root of our quartic area equation; it has no relation to the turning points of the curve."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Verifying Factors",
            "content": "In Part (b), if you are asked to 'verify' a factorization rather than find it, you do not need to perform long algebraic division on the quartic. It is much faster and less error-prone to simply expand the bracketed expression $(b+a)^2(quadratic)$ and show it equals your quartic equation."
        }
    },
    {
        "id": "004038",
        "major_area": "Integration",
        "topic": "Integration",
        "subtopic": [
            "Area Under a Curve",
            "Definite Integration"
        ],
        "img": "images/p1/004038.png",
        "question": "The diagram shows a sketch of part of the curve with equation:<br>$$y = x(x+2)(x-3)$$<br>The region $R_1$, shown shaded in the diagram, is bounded by the curve and the negative $x$-axis.<br><strong>(a)</strong> Show that the exact area of $R_1$ is $\\dfrac{16}{3}$.<br><br>The region $R_2$, also shown shaded in the diagram, is bounded by the curve, the positive $x$-axis, and the line with equation $x = b$, where $b$ is a positive constant and $0 < b < 3$.<br>Given that the area of $R_1$ is equal to the area of $R_2$:<br><strong>(b)</strong> Verify that $b$ satisfies the equation:<br>$$(b+2)^2(3b^2 - 16b + 16) = 0$$<br>The roots of the equation $3b^2 - 16b + 16 = 0$ are $\\dfrac{4}{3}$ and $4$. The value of $b$ is therefore $\\dfrac{4}{3}$.<br><strong>(c)</strong> Explain, with the aid of a diagram, the significance of the root $4$.",
        "steps": [
            "<strong>Part (a):</strong> First, we expand the cubic equation to make it easy to integrate:<br>$$y = x(x+2)(x-3) = x(x^2 - x - 6) = x^3 - x^2 - 6x$$",
            "Since the region $R_1$ lies entirely above the $x$-axis between $x = -2$ and $x = 0$, its exact area is given by the definite integral:<br>$$\\text{Area } R_1 = \\int_{-2}^{0} (x^3 - x^2 - 6x) \\text{ d}x$$<br>$$\\text{Area } R_1 = \\left[ \\frac{x^4}{4} - \\frac{x^3}{3} - 3x^2 \\right]_{-2}^{0}$$",
            "Evaluating this at the limits $0$ and $-2$:<br>$$\\text{Area } R_1 = 0 - \\left( \\frac{(-2)^4}{4} - \\frac{(-2)^3}{3} - 3(-2)^2 \\right)$$<br>$$\\text{Area } R_1 = - \\left( 4 + \\frac{8}{3} - 12 \\right) = - \\left( -\\frac{16}{3} \\right) = \\frac{16}{3}$$",
            "<strong>Part (b):</strong> Since $R_2$ lies entirely below the $x$-axis in the interval $0 < b < 3$, its area is given by the negative integral:<br>$$\\text{Area } R_2 = -\\int_{0}^{b} (x^3 - x^2 - 6x) \\text{ d}x = -\\left[ \\frac{x^4}{4} - \\frac{x^3}{3} - 3x^2 \\right]_{0}^{b}$$<br>$$\\text{Area } R_2 = -\\left( \\frac{b^4}{4} - \\frac{b^3}{3} - 3b^2 \\right)$$",
            "Setting $\\text{Area } R_1 = \\text{Area } R_2$ gives:<br>$$\\frac{16}{3} = -\\left( \\frac{b^4}{4} - \\frac{b^3}{3} - 3b^2 \\right) \\implies \\frac{b^4}{4} - \\frac{b^3}{3} - 3b^2 + \\frac{16}{3} = 0$$<br>Multiplying the entire equation by $12$ to clear the fractions:<br>$$3b^4 - 4b^3 - 36b^2 + 64 = 0$$",
            "We can verify that this factorises to $(b+2)^2(3b^2 - 16b + 16) = 0$ by expanding the brackets:<br>$$(b^2 + 4b + 4)(3b^2 - 16b + 16) = b^2(3b^2 - 16b + 16) + 4b(3b^2 - 16b + 16) + 4(3b^2 - 16b + 16)$$<br>$$= 3b^4 - 16b^3 + 16b^2 + 12b^3 - 64b^2 + 64b + 12b^2 - 64b + 64$$<br>$$= 3b^4 - 4b^3 - 36b^2 + 64 = 0 \\quad \\text{(verified)}$$",
            "<strong>Part (c):</strong> The root $b = 4$ lies to the right of the root $x = 3$, which is outside our interval of validity $0 < b < 3$.<br>Geometrically, this value represents an upper limit where the total net signed area from $0$ to $4$ integrates to $-\\frac{16}{3}$. This occurs because the negative area of the lower lobe (between $0$ and $3$) is partially cancelled out by the positive area of the upper lobe (between $3$ and $4$).<br><br>Here is the diagram showing this relationship:<br><img src='images/p1/004038_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
            "Final Answer: <strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{16}{3}$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 16b + 16) = 0 \\quad \\text{is verified}$$ <strong>(c)</strong> $$b = 4\\ \\text{represents the point of signed area cancellation}$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = -\\dfrac{16}{3}$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 16b + 16) = 0$$ <strong>(c)</strong> $$b = 4\\ \\text{represents a turning point}$$",
                "feedback": "Check your integration signs in Part (a). Because the region $R_1$ lies strictly above the $x$-axis, its area must be positive: $\\frac{16}{3}$, not $-\\frac{16}{3}$."
            },
            {
                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{16}{3}$$ <strong>(b)</strong> $$(b-2)^2(3b^2 - 16b + 16) = 0$$ <strong>(c)</strong> $$b = 4\\ \\text{represents area cancellation}$$",
                "feedback": "You probably made a sign error in the double-root factor in Part (b). Since the double root originates from the negative root of the cubic ($x = -2$), the factor must be $(b + 2)^2$, not $(b - 2)^2$."
            },
            {
                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{16}{3}$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 16b + 16) = 0$$ <strong>(c)</strong> $$b = 4\\ \\text{is the local minimum of the curve}$$",
                "feedback": "Check your explanation in Part (c). The value $4$ is a root of our quartic area equation; it has no relation to the turning points of the curve."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Beautiful Exact Roots",
            "content": "Notice how this question resolves to perfectly exact rational and integer roots ($\\frac{4}{3}$ and $4$). In exam conditions, when your calculations collapse into clean integers rather than long decimals, you can have high confidence that your algebraic working is correct."
        }
    },
    {
        "id": "004039",
        "major_area": "Integration",
        "topic": "Integration",
        "subtopic": [
            "Area Under a Curve",
            "Definite Integration"
        ],
        "img": "images/p1/004039.png",
        "question": "The diagram shows a sketch of part of the curve with equation:<br>$$y = x(x+3)(x-3)$$<br>The region $R_1$, shown shaded in the diagram, is bounded by the curve and the negative $x$-axis.<br><strong>(a)</strong> Show that the exact area of $R_1$ is $\\dfrac{81}{4}$.<br><br>The region $R_2$, also shown shaded in the diagram, is bounded by the curve, the positive $x$-axis, and the line with equation $x = b$, where $b$ is a positive constant and $0 < b < 3$.<br>Given that the area of $R_1$ is equal to the area of $R_2$:<br><strong>(b)</strong> Verify that $b$ satisfies the equation:<br>$$(b+3)^2(b-3)^2 = 0$$<br>The root of the equation $(b-3)^2 = 0$ is $3$. The value of $b$ is therefore $3$.<br><strong>(c)</strong> Explain, with the aid of a diagram, the significance of this root.",
        "steps": [
            "<strong>Part (a):</strong> First, we expand the cubic equation to make it easy to integrate:<br>$$y = x(x+3)(x-3) = x(x^2 - 9) = x^3 - 9x$$",
            "Since the region $R_1$ lies entirely above the $x$-axis between $x = -3$ and $x = 0$, its exact area is given by the definite integral:<br>$$\\text{Area } R_1 = \\int_{-3}^{0} (x^3 - 9x) \\text{ d}x$$<br>$$\\text{Area } R_1 = \\left[ \\frac{x^4}{4} - \\frac{9x^2}{2} \\right]_{-3}^{0}$$",
            "Evaluating this at the limits $0$ and $-3$:<br>$$\\text{Area } R_1 = 0 - \\left( \\frac{(-3)^4}{4} - \\frac{9(-3)^2}{2} \\right)$$<br>$$\\text{Area } R_1 = - \\left( \\frac{81}{4} - \\frac{81}{2} \\right) = - \\left( -\\frac{81}{4} \\right) = \\frac{81}{4}$$",
            "<strong>Part (b):</strong> Since $R_2$ lies entirely below the $x$-axis in the interval $0 < b < 3$, its area is given by the negative integral:<br>$$\\text{Area } R_2 = -\\int_{0}^{b} (x^3 - 9x) \\text{ d}x = -\\left[ \\frac{x^4}{4} - \\frac{9x^2}{2} \\right]_{0}^{b}$$<br>$$\\text{Area } R_2 = -\\left( \\frac{b^4}{4} - \\frac{9b^2}{2} \\right)$$",
            "Setting $\\text{Area } R_1 = \\text{Area } R_2$ gives:<br>$$\\frac{81}{4} = -\\left( \\frac{b^4}{4} - \\frac{9b^2}{2} \\right) \\implies \\frac{b^4}{4} - \\frac{9b^2}{2} + \\frac{81}{4} = 0$$<br>Multiplying the entire equation by $4$ to clear the fractions:<br>$$b^4 - 18b^2 + 81 = 0$$",
            "We can verify that this factorises to $(b+3)^2(b-3)^2 = 0$ (which is $(b^2 - 9)^2 = 0$) by expanding the brackets:<br>$$(b^2 - 9)^2 = (b^2)^2 - 2(9)(b^2) + 81 = b^4 - 18b^2 + 81 = 0 \\quad \\text{(verified)}$$",
            "<strong>Part (c):</strong> The root $b = 3$ is exactly the second positive root of the cubic equation.<br>Geometrically, choosing $b = 3$ means that $R_2$ is the entire negative lobe of the curve between $0$ and $3$. Because $y = x^3 - 9x$ is an odd function, it is perfectly symmetric about the origin, meaning the area of the positive lobe $R_1$ is identical to the area of the negative lobe $R_2$.<br><br>Here is the diagram showing this symmetry:<br><img src='images/p1/004039_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
            "Final Answer: <strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{81}{4}$$ <strong>(b)</strong> $$(b+3)^2(b-3)^2 = 0 \\quad \\text{is verified}$$ <strong>(c)</strong> $$b = 3\\ \\text{represents the symmetric opposite lobe boundary}$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = -\\dfrac{81}{4}$$ <strong>(b)</strong> $$(b+3)^2(b-3)^2 = 0$$ <strong>(c)</strong> $$b = 3\\ \\text{represents a turning point}$$",
                "feedback": "Check your integration signs in Part (a). Because the region $R_1$ lies strictly above the $x$-axis, its area must be positive: $\\frac{81}{4}$, not $-\\frac{81}{4}$."
            },
            {
                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{81}{4}$$ <strong>(b)</strong> $$(b-3)^4 = 0$$ <strong>(c)</strong> $$b = 3\\ \\text{is the local minimum of the curve}$$",
                "feedback": "You probably made an expansion error in Part (b). $b^4 - 18b^2 + 81$ is a quadratic in $b^2$, which factorises to $(b^2 - 9)^2 = (b+3)^2(b-3)^2 = 0$, not $(b-3)^4$."
            },
            {
                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = \\dfrac{81}{4}$$ <strong>(b)</strong> $$(b+3)^2(b-3)^2 = 0$$ <strong>(c)</strong> $$b = 3\\ \\text{is the turning point of the curve}$$",
                "feedback": "Check your explanation in Part (c). The value $3$ is the $x$-intercept of the cubic, not its turning point. It represents the boundary where the two identical lobes are symmetric."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Exploiting Symmetry",
            "content": "When a curve is symmetric about the origin (an odd function), the integral over symmetric intervals has equal magnitudes. Here, the positive lobe from $-3$ to $0$ is identical in shape and area to the negative lobe from $0$ to $3$. Keeping an eye out for odd and even functions is a great way to double-check your areas."
        }
    },
    {
        "id": "004040",
        "major_area": "Integration",
        "topic": "Integration",
        "subtopic": [
            "Area Under a Curve",
            "Definite Integration"
        ],
        "img": "images/p1/004040.png",
        "question": "The diagram shows a sketch of part of the curve with equation:<br>$$y = x(x+2)(x-5)$$<br>The region $R_1$, shown shaded in the diagram, is bounded by the curve and the negative $x$-axis.<br><strong>(a)</strong> Show that the exact area of $R_1$ is $8$.<br><br>The region $R_2$, also shown shaded in the diagram, is bounded by the curve, the positive $x$-axis, and the line with equation $x = b$, where $b$ is a positive constant and $0 < b < 5$.<br>Given that the area of $R_1$ is equal to the area of $R_2$:<br><strong>(b)</strong> Verify that $b$ satisfies the equation:<br>$$(b+2)^2(3b^2 - 24b + 24) = 0$$<br>The roots of the equation $3b^2 - 24b + 24 = 0$ are $1.172$ and $6.828$ to 3 decimal places. The value of $b$ is therefore $1.172$ to 3 decimal places.<br><strong>(c)</strong> Explain, with the aid of a diagram, the significance of the root $6.828$.",
        "steps": [
            "<strong>Part (a):</strong> First, we expand the cubic equation to make it easy to integrate:<br>$$y = x(x+2)(x-5) = x(x^2 - 3x - 10) = x^3 - 3x^2 - 10x$$",
            "Since the region $R_1$ lies entirely above the $x$-axis between $x = -2$ and $x = 0$, its exact area is given by the definite integral:<br>$$\\text{Area } R_1 = \\int_{-2}^{0} (x^3 - 3x^2 - 10x) \\text{ d}x$$<br>$$\\text{Area } R_1 = \\left[ \\frac{x^4}{4} - x^3 - 5x^2 \\right]_{-2}^{0}$$",
            "Evaluating this at the limits $0$ and $-2$:<br>$$\\text{Area } R_1 = 0 - \\left( \\frac{(-2)^4}{4} - (-2)^3 - 5(-2)^2 \\right)$$<br>$$\\text{Area } R_1 = - \\left( 4 + 8 - 20 \\right) = - \\left( -8 \\right) = 8$$",
            "<strong>Part (b):</strong> Since $R_2$ lies entirely below the $x$-axis in the interval $0 < b < 5$, its area is given by the negative integral:<br>$$\\text{Area } R_2 = -\\int_{0}^{b} (x^3 - 3x^2 - 10x) \\text{ d}x = -\\left[ \\frac{x^4}{4} - x^3 - 5x^2 \\right]_{0}^{b}$$<br>$$\\text{Area } R_2 = -\\left( \\frac{b^4}{4} - b^3 - 5b^2 \\right)$$",
            "Setting $\\text{Area } R_1 = \\text{Area } R_2$ gives:<br>$$8 = -\\left( \\frac{b^4}{4} - b^3 - 5b^2 \\right) \\implies \\frac{b^4}{4} - b^3 - 5b^2 + 8 = 0$$<br>Multiplying the entire equation by $4$ to clear the fractions:<br>$$b^4 - 4b^3 - 20b^2 + 32 = 0$$",
            "We can verify that this factorises to $(b+2)^2(b^2 - 8b + 8) = 0$ (which is equivalent to $(b+2)^2(3b^2 - 24b + 24) = 0$ upon multiplying the quadratic by $3$) by expanding the brackets:<br>$$(b^2 + 4b + 4)(3b^2 - 24b + 24) = b^2(3b^2 - 24b + 24) + 4b(3b^2 - 24b + 24) + 4(3b^2 - 24b + 24)$$<br>$$= 3b^4 - 24b^3 + 24b^2 + 12b^3 - 96b^2 + 96b + 12b^2 - 96b + 94$$<br>Wait! Let's check the constants:<br>$$4 \\times 24 = 96$$. So the expansion yields:<br>$$3b^4 - 12b^3 - 60b^2 + 96 = 0 \\implies 3(b^4 - 4b^3 - 20b^2 + 32) = 0 \\quad \\text{(verified)}$$",
            "<strong>Part (c):</strong> The root $b \\approx 6.828$ lies to the right of the root $x = 5$, which is outside our interval of validity $0 < b < 5$.<br>Geometrically, this value represents an upper limit where the total net signed area from $0$ to $6.828$ integrates to $-8$. This occurs because the negative area of the lower lobe (between $0$ and $5$) is partially cancelled out by the positive area of the upper lobe (between $5$ and $6.828$).<br><br>Here is the diagram showing this relationship:<br><img src='images/p1/004040_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
            "Final Answer: <strong>(a)</strong> $$\\text{Area } R_1 = 8$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 24b + 24) = 0 \\quad \\text{is verified}$$ <strong>(c)</strong> $$b \\approx 6.828\\ \\text{represents the point of signed area cancellation}$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = -8$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 24b + 24) = 0$$ <strong>(c)</strong> $$b \\approx 6.828\\ \\text{represents a turning point}$$",
                "feedback": "Check your integration signs in Part (a). Because the region $R_1$ lies strictly above the $x$-axis, its area must be positive: $8$, not $-8$."
            },
            {
                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = 8$$ <strong>(b)</strong> $$(b-2)^2(3b^2 - 24b + 24) = 0$$ <strong>(c)</strong> $$b \\approx 6.828\\ \\text{represents area cancellation}$$",
                "feedback": "You probably made a sign error in the double-root factor in Part (b). Since the double root originates from the negative root of the cubic ($x = -2$), the factor must be $(b + 2)^2$, not $(b - 2)^2$."
            },
            {
                "ans": "<strong>(a)</strong> $$\\text{Area } R_1 = 8$$ <strong>(b)</strong> $$(b+2)^2(3b^2 - 24b + 24) = 0$$ <strong>(c)</strong> $$b \\approx 6.828\\ \\text{is the local minimum of the curve}$$",
                "feedback": "Check your explanation in Part (c). The value $6.828$ is a root of our quartic area equation; it has no relation to the turning points of the curve."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Definite Integral Bounds",
            "content": "Always remember that the definite integral of a function between $a$ and $b$ calculates the <strong>net</strong> area. If your curve lies both below and above the axis over your interval, the positive and negative regions will actively cancel each other out in the final result."
        }
    },
    {
        "id": "004041",
        "major_area": "Exponentials & Logarithms",
        "topic": "Logarithms",
        "subtopic": [
            "Logarithm Laws",
            "Algebraic Proof"
        ],
        "img": false,
        "question": "Given that $a > 0$ and $b > 0$, and that $a$ and $b$ satisfy the equation:<br>$$\\log a + \\log b = \\log(a + b)$$<br><strong>(a)</strong> Show that:<br>$$a = \\dfrac{b}{b - 1}$$<br><strong>(b)</strong> Write down the full restriction on the value of $b$, explaining the reason for this restriction.",
        "steps": [
            "<strong>Part (a):</strong> We begin by applying the logarithm addition law, $\\log(x) + \\log(y) = \\log(xy)$, to the left-hand side of our equation:<br>$$\\log(ab) = \\log(a + b)$$,",
            "Since the logarithmic function is one-to-one, we can remove the logarithms from both sides of the equation:<br>$$ab = a + b$$",
            "Next, we rearrange the equation to group all terms containing the variable $a$ together on one side:<br>$$ab - a = b$$",
            "Factorising out $a$ from the left-hand side:<br>$$a(b - 1) = b$$",
            "Dividing both sides of the equation by $(b - 1)$ gives our target proof:<br>$$a = \\dfrac{b}{b - 1}$$",
            "<strong>Part (b):</strong> For the logarithmic terms to be defined in the original equation, we are given that $a > 0$ and $b > 0$.",
            "Looking at our equation $a = \\dfrac{b}{b - 1}$, since $a$ must be strictly positive ($a > 0$) and the numerator is positive ($b > 0$), the denominator must also be positive to ensure a positive quotient:<br>$$b - 1 > 0 \\implies b > 1$$",
            "Final Answer: <strong>(a)</strong> $$a = \\dfrac{b}{b - 1}\\ \\text{is verified}$$ <strong>(b)</strong> $$b > 1$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$a = \\dfrac{b}{b - 1}$$ <strong>(b)</strong> $$b > 0$$",
                "feedback": "You probably forgot to account for the positiveness of $a$ when setting your restriction in Part (b). If $b > 0$ but $b < 1$, then the denominator $(b-1)$ would be negative, making $a$ negative. This violates the original condition that $a > 0$ for $\\log a$ to be defined."
            },
            {
                "ans": "<strong>(a)</strong> $$a = \\dfrac{b}{1 - b}$$ <strong>(b)</strong> $$b > 1$$",
                "feedback": "Check your algebraic signs when grouping your $a$ terms in Part (a). Moving $a$ to the left-hand side yields $ab - a = b \\implies a(b - 1) = b$. Be careful not to swap the subtraction order."
            },
            {
                "ans": "<strong>(a)</strong> $$a = \\dfrac{b}{b - 1}$$ <strong>(b)</strong> $$b \\ge 1$$",
                "feedback": "Check your inequality boundary in Part (b). If $b = 1$ exactly, the denominator $(b-1)$ becomes $0$, making the fraction undefined. Therefore, the restriction must be a strict inequality: $b > 1$, not $b \\ge 1$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Base Restrictions",
            "content": "In this question, always look back at the original parameters. Logarithmic inputs must be strictly positive. When finding restrictions on a variable in algebraic proofs, your final value must satisfy both the general domain of the function and the specific inequalities of the question."
        }
    },
    {
        "id": "004042",
        "major_area": "Exponentials & Logarithms",
        "topic": "Logarithms",
        "subtopic": [
            "Logarithm Laws",
            "Algebraic Proof"
        ],
        "img": false,
        "question": "Given that $a > b > 0$, and that $a$ and $b$ satisfy the equation:<br>$$\\log a - 2\\log b = \\log(a - b)$$<br><strong>(a)</strong> Show that:<br>$$a = \\dfrac{b^3}{b^2 - 1}$$<br><strong>(b)</strong> Write down the full restriction on the value of $b$, explaining the reason for this restriction.",
        "steps": [
            "<strong>Part (a):</strong> We begin by applying the logarithm power law, $c\\log(x) = \\log(x^c)$, to the second term on the left-hand side:<br>$$\\log a - \\log(b^2) = \\log(a - b)$$",
            "Applying the logarithm subtraction law, $\\log(x) - \\log(y) = \\log\\left(\\frac{x}{y}\\right)$:<br>$$\\log\\left(\\dfrac{a}{b^2}\\right) = \\log(a - b)$$",
            "Removing the logarithms from both sides of the equation:<br>$$\\dfrac{a}{b^2} = a - b$$",
            "Multiplying both sides by $b^2$ to eliminate the fraction:<br>$$a = b^2(a - b) \\implies a = ab^2 - b^3$$",
            "Rearranging to group all terms containing the variable $a$ together on the right-hand side:<br>$$b^3 = ab^2 - a$$",
            "Factorising out $a$ from the right-hand side:<br>$$b^3 = a(b^2 - 1)$$",
            "Dividing both sides of the equation by $(b^2 - 1)$ gives our target proof:<br>$$a = \\dfrac{b^3}{b^2 - 1}$$",
            "<strong>Part (b):</strong> For the logarithmic terms to be defined, we require $a > b > 0$ and $a - b > 0$.",
            "Looking at our equation $a = \\dfrac{b^3}{b^2 - 1}$, since $a$ must be strictly positive ($a > 0$) and the numerator is positive ($b^3 > 0$, as $b > 0$), the denominator must also be positive to ensure a positive quotient:<br>$$b^2 - 1 > 0 \\implies b^2 > 1$$<br>Since $b > 0$, this yields the strict restriction:<br>$$b > 1$$",
            "Final Answer: <strong>(a)</strong> $$a = \\dfrac{b^3}{b^2 - 1}\\ \\text{is verified}$$ <strong>(b)</strong> $$b > 1$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$a = \\dfrac{b^3}{b^2 - 1}$$ <strong>(b)</strong> $$b > 0$$",
                "feedback": "You probably forgot to account for the positiveness of $a$ when setting your restriction in Part (b). If $b > 0$ but $b < 1$, then $b^2 - 1$ would be negative, making $a$ negative. This violates the original condition that $a > 0$ for $\\log a$ to be defined."
            },
            {
                "ans": "<strong>(a)</strong> $$a = \\dfrac{b^3}{1 - b^2}$$ <strong>(b)</strong> $$b > 1$$",
                "feedback": "Check your algebraic signs when grouping your $a$ terms in Part (a). Rearranging $a = ab^2 - b^3$ yields $b^3 = ab^2 - a \\implies b^3 = a(b^2 - 1)$. Be careful not to swap the subtraction order of your factor."
            },
            {
                "ans": "<strong>(a)</strong> $$a = \\dfrac{b^3}{b^2 - 1}$$ <strong>(b)</strong> $$b > -1$$",
                "feedback": "Check your inequality restrictions in Part (b). Although solving $b^2 - 1 > 0$ mathematically yields $b > 1$ or $b < -1$, we are given the initial constraint $b > 0$ for $\\log b$ to be defined. Therefore, the negative region is completely invalid, leaving only $b > 1$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Dual Constraints",
            "content": "In this question, when solving quadratic inequalities like $b^2 - 1 > 0$, remember that math rules yield two regions: $b > 1$ or $b < -1$. However, because the original equation contains $\\log b$, $b$ must be strictly positive. This instantly discards the negative region, leaving only $b > 1$."
        }
    },
    {
        "id": "004043",
        "major_area": "Exponentials & Logarithms",
        "topic": "Logarithms",
        "subtopic": [
            "Logarithm Laws",
            "Algebraic Proof"
        ],
        "img": false,
        "question": "Given that $a > b > 0$, and that $a$ and $b$ satisfy the equation:<br>$$\\log a - \\log b = \\log(2a - b)$$<br><strong>(a)</strong> Show that:<br>$$a = \\dfrac{b^2}{2b - 1}$$<br><strong>(b)</strong> Write down the full restriction on the value of $b$, explaining the reason for this restriction.",
        "steps": [
            "<strong>Part (a):</strong> We begin by applying the logarithm subtraction law, $\\log(x) - \\log(y) = \\log\\left(\\frac{x}{y}\\right)$, to the left-hand side of our equation:<br>$$\\log\\left(\\dfrac{a}{b}\\right) = \\log(2a - b)$$",
            "Removing the logarithms from both sides of the equation:<br>$$\\dfrac{a}{b} = 2a - b$$",
            "Multiplying both sides by $b$ to eliminate the fraction:<br>$$a = b(2a - b) \\implies a = 2ab - b^2$$",
            "Rearranging to group all terms containing the variable $a$ together on the right-hand side:<br>$$b^2 = 2ab - a$$",
            "Factorising out $a$ from the right-hand side:<br>$$b^2 = a(2b - 1)$$",
            "Dividing both sides of the equation by $(2b - 1)$ gives our target proof:<br>$$a = \\dfrac{b^2}{2b - 1}$$",
            "<strong>Part (b):</strong> For the logarithmic terms to be defined, we are given that $a > b > 0$.",
            "First, since $a > 0$ and the numerator is positive ($b^2 > 0$), our denominator must be strictly positive to ensure a positive quotient:<br>$$2b - 1 > 0 \\implies b > 0.5$$",
            "Second, we must satisfy the initial condition that $a > b$:<br>$$\\dfrac{b^2}{2b - 1} > b$$<br>Since $2b-1 > 0$, we can multiply both sides by $(2b-1)$ safely without swapping the inequality sign:<br>$$b^2 > b(2b - 1) \\implies b^2 > 2b^2 - b$$<br>$$b > b^2$$<br>Since $b > 0$, we can divide by $b$:<br>$$1 > b \\implies b < 1$$",
            "Combining both inequalities yields our full, strict restriction on $b$:<br>$$\\frac{1}{2} < b < 1$$",
            "Final Answer: <strong>(a)</strong> $$a = \\dfrac{b^2}{2b - 1}\\ \\text{is verified}$$ <strong>(b)</strong> $$\\dfrac{1}{2} < b < 1$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$a = \\dfrac{b^2}{2b - 1}$$ <strong>(b)</strong> $$b > 0.5$$",
                "feedback": "You probably forgot to account for the second half of the restriction in Part (b). While $b > 0.5$ guarantees that $a$ is positive, we are also given that $a > b$. Solving $\\frac{b^2}{2b-1} > b$ yields $b < 1$, which tightens the restriction to $\\frac{1}{2} < b < 1$."
            },
            {
                "ans": "<strong>(a)</strong> $$a = \\dfrac{b^2}{1 - 2b}$$ <strong>(b)</strong> $$\\dfrac{1}{2} < b < 1$$",
                "feedback": "Check your algebraic signs when grouping your $a$ terms in Part (a). Rearranging $a = 2ab - b^2$ yields $b^2 = 2ab - a \\implies b^2 = a(2b - 1)$. Be careful not to swap the subtraction order of your factor."
            },
            {
                "ans": "<strong>(a)</strong> $$a = \\dfrac{b^2}{2b - 1}$$ <strong>(b)</strong> $$b < 1$$",
                "feedback": "Check your lower-bound constraint in Part (b). If $b < 0.5$, then the denominator $(2b-1)$ would be negative, making $a$ negative. This violates the original condition $a > 0$ required for $\\log a$ to be defined."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Hidden Inequalities",
            "content": "This question contains a classic algebraic trap. Many students only check that the denominator is positive ($b > 0.5$), forgetting that the condition $a > b$ is also a functional inequality. Always test both constraints to see if they restrict your variable from both above and below."
        }
    },
    {
        "id": "004044",
        "major_area": "Exponentials & Logarithms",
        "topic": "Logarithms",
        "subtopic": [
            "Logarithm Laws",
            "Algebraic Proof"
        ],
        "img": false,
        "question": "Given that $a > 2b > 0$, and that $a$ and $b$ satisfy the equation:<br>$$\\log a - \\log b = \\log(a - 2b)$$<br><strong>(a)</strong> Show that:<br>$$a = \\dfrac{2b^2}{b - 1}$$<br><strong>(b)</strong> Write down the full restriction on the value of $b$, explaining the reason for this restriction.",
        "steps": [
            "<strong>Part (a):</strong> We begin by applying the logarithm subtraction law, $\\log(x) - \\log(y) = \\log\\left(\\frac{x}{y}\\right)$, to the left-hand side of our equation:<br>$$\\log\\left(\\dfrac{a}{b}\\right) = \\log(a - 2b)$$",
            "Removing the logarithms from both sides of the equation:<br>$$\\dfrac{a}{b} = a - 2b$$",
            "Multiplying both sides by $b$ to eliminate the fraction:<br>$$a = b(a - 2b) \\implies a = ab - 2b^2$$",
            "Rearranging to group all terms containing the variable $a$ together on the right-hand side:<br>$$2b^2 = ab - a$$",
            "Factorising out $a$ from the right-hand side:<br>$$2b^2 = a(b - 1)$$",
            "Dividing both sides of the equation by $(b - 1)$ gives our target proof:<br>$$a = \\dfrac{2b^2}{b - 1}$$",
            "<strong>Part (b):</strong> For the logarithmic terms to be defined, we are given that $a > 2b > 0$.",
            "Looking at our equation $a = \\dfrac{2b^2}{b - 1}$, since $a$ must be strictly positive ($a > 0$) and the numerator is positive ($2b^2 > 0$), the denominator must also be positive to ensure a positive quotient:<br>$$b - 1 > 0 \\implies b > 1$$",
            "Final Answer: <strong>(a)</strong> $$a = \\dfrac{2b^2}{b - 1}\\ \\text{is verified}$$ <strong>(b)</strong> $$b > 1$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$a = \\dfrac{2b^2}{b - 1}$$ <strong>(b)</strong> $$b > 0$$",
                "feedback": "You probably forgot to account for the positiveness of $a$ when setting your restriction in Part (b). If $b > 0$ but $b < 1$, then $b - 1$ would be negative, making $a$ negative. This violates the original condition that $a > 0$ for $\\log a$ to be defined."
            },
            {
                "ans": "<strong>(a)</strong> $$a = \\dfrac{2b^2}{1 - b}$$ <strong>(b)</strong> $$b > 1$$",
                "feedback": "Check your algebraic signs when grouping your $a$ terms in Part (a). Rearranging $a = ab - 2b^2$ yields $2b^2 = ab - a \\implies 2b^2 = a(b - 1)$. Be careful not to swap the subtraction order of your factor."
            },
            {
                "ans": "<strong>(a)</strong> $$a = \\dfrac{2b^2}{b - 1}$$ <strong>(b)</strong> $$b \\ge 1$$",
                "feedback": "Check your inequality boundary in Part (b). If $b = 1$ exactly, the denominator $(b-1)$ becomes $0$, making the fraction undefined. Therefore, the restriction must be a strict inequality: $b > 1$, not $b \\ge 1$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Subtraction Order",
            "content": "In algebraic proofs of this type, when factorising terms, pay close attention to the order of subtraction. If you have $2b^2 = ab - a$, dividing by the factor $(b-1)$ is mathematically correct, whereas writing $(1-b)$ would introduce an incorrect sign change."
        }
    },
    {
        "id": "004045",
        "major_area": "Exponentials & Logarithms",
        "topic": "Logarithms",
        "subtopic": [
            "Logarithm Laws",
            "Algebraic Proof"
        ],
        "img": false,
        "question": "Given that $a > b^2 > 0$ and $b > 0$, and that $a$ and $b$ satisfy the equation:<br>$$\\log a - 3\\log b = \\log(a - b^2)$$<br><strong>(a)</strong> Show that:<br>$$a = \\dfrac{b^5}{b^3 - 1}$$<br><strong>(b)</strong> Write down the full restriction on the value of $b$, explaining the reason for this restriction.",
        "steps": [
            "<strong>Part (a):</strong> We begin by applying the logarithm power law, $c\\log(x) = \\log(x^c)$, to the second term on the left-hand side:<br>$$\\log a - \\log(b^3) = \\log(a - b^2)$$",
            "Applying the logarithm subtraction law, $\\log(x) - \\log(y) = \\log\\left(\\frac{x}{y}\\right)$:<br>$$\\log\\left(\\dfrac{a}{b^3}\\right) = \\log(a - b^2)$$",
            "Removing the logarithms from both sides of the equation:<br>$$\\dfrac{a}{b^3} = a - b^2$$",
            "Multiplying both sides by $b^3$ to eliminate the fraction:<br>$$a = b^3(a - b^2) \\implies a = ab^3 - b^5$$",
            "Rearranging to group all terms containing the variable $a$ together on the right-hand side:<br>$$b^5 = ab^3 - a$$",
            "Factorising out $a$ from the right-hand side:<br>$$b^5 = a(b^3 - 1)$$",
            "Dividing both sides of the equation by $(b^3 - 1)$ gives our target proof:<br>$$a = \\dfrac{b^5}{b^3 - 1}$$",
            "<strong>Part (b):</strong> For the logarithmic terms to be defined, we are given $a > b^2 > 0$ and $b > 0$.",
            "Looking at our equation $a = \\dfrac{b^5}{b^3 - 1}$, since $a$ must be strictly positive ($a > 0$) and the numerator is positive ($b^5 > 0$, as $b > 0$), the denominator must also be positive to ensure a positive quotient:<br>$$b^3 - 1 > 0 \\implies b^3 > 1 \\implies b > 1$$",
            "Final Answer: <strong>(a)</strong> $$a = \\dfrac{b^5}{b^3 - 1}\\ \\text{is verified}$$ <strong>(b)</strong> $$b > 1$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$a = \\dfrac{b^5}{b^3 - 1}$$ <strong>(b)</strong> $$b > 0$$",
                "feedback": "You probably forgot to account for the positiveness of $a$ when setting your restriction in Part (b). If $b > 0$ but $b < 1$, then $b^3 - 1$ would be negative, making $a$ negative. This violates the original condition that $a > 0$ for $\\log a$ to be defined."
            },
            {
                "ans": "<strong>(a)</strong> $$a = \\dfrac{b^5}{1 - b^3}$$ <strong>(b)</strong> $$b > 1$$",
                "feedback": "Check your algebraic signs when grouping your $a$ terms in Part (a). Rearranging $a = ab^3 - b^5$ yields $b^5 = ab^3 - a \\implies b^5 = a(b^3 - 1)$. Be careful not to swap the subtraction order of your factor."
            },
            {
                "ans": "<strong>(a)</strong> $$a = \\dfrac{b^5}{b^3 - 1}$$ <strong>(b)</strong> $$b \\ge 1$$",
                "feedback": "Check your inequality boundary in Part (b). If $b = 1$ exactly, the denominator $(b^3-1)$ becomes $0$, making the fraction undefined. Therefore, the restriction must be a strict inequality: $b > 1$, not $b \\ge 1$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: High Power Limits",
            "content": "Do not let high powers like $b^5$ or $b^3$ intimidate you. The algebraic rules for logarithm subtraction, factoring, and inequality boundaries remain completely identical to simple linear cases. Trust your core algebraic rules."
        }
    },
    {
        "id": "004046",
        "major_area": "Proof",
        "topic": "Proof",
        "subtopic": [
            "Proof by Exhaustion",
            "Inequalities"
        ],
        "img": false,
        "question": "<strong>(i)</strong> Prove that for all $n \\in \\mathbb{N}$, $n^2 + 1$ is not divisible by $3$.<br><br><strong>(ii)</strong> \"Given $x \\in \\mathbb{R}$, the value of $|2x - 12|$ is greater than or equal to the value of $(x - 5)$.\"<br>State, giving a reason, if the above statement is always true, sometimes true, or never true.",
        "steps": [
            "<strong>Part (i):</strong> We use <strong>proof by exhaustion</strong> by splitting the natural numbers into three cases based on their divisibility by $3$. Any natural number $n$ can be written as $3k$, $3k+1$, or $3k+2$ for some non-negative integer $k$.",
            "<strong>Case 1: $n = 3k$ (multiples of 3)</strong><br>$$n^2 + 1 = (3k)^2 + 1 = 9k^2 + 1 = 3(3k^2) + 1$$<br>Since $3(3k^2)$ is divisible by $3$, $n^2+1$ leaves a remainder of $1$ when divided by $3$, so it is not divisible.",
            "<strong>Case 2: $n = 3k + 1$</strong><br>$$n^2 + 1 = (3k+1)^2 + 1 = 9k^2 + 6k + 1 + 1 = 3(3k^2 + 2k) + 2$$<br>This leaves a remainder of $2$ when divided by $3$, so it is not divisible.",
            "<strong>Case 3: $n = 3k + 2$</strong><br>$$n^2 + 1 = (3k+2)^2 + 1 = 9k^2 + 12k + 4 + 1 = 9k^2 + 12k + 5 = 3(3k^2 + 4k + 1) + 2$$<br>This also leaves a remainder of $2$ when divided by $3$, so it is not divisible.<br>Therefore, since all possible cases have been exhausted, $n^2 + 1$ is never divisible by $3$ for any $n \\in \\mathbb{N}$.",
            "<strong>Part (ii):</strong> To determine the validity of the statement $|2x - 12| \\ge x - 5$, we analyze the critical values by splitting the absolute value into two intervals at the boundary $x = 6$:",
            "<strong>Case A: For $x \\ge 6$</strong>, the term inside the absolute value is positive, so $|2x - 12| = 2x - 12$. Our inequality becomes:<br>$$2x - 12 \\ge x - 5 \\implies x \\ge 7$$<br>This means that in the interval $6 \\le x < 7$, the inequality is <strong>false</strong> (for example, at $x = 6$, we get $0 \\ge 1$, which is false).",
            "<strong>Case B: For $x < 6$</strong>, the term inside the absolute value is negative, so $|2x - 12| = -(2x - 12) = 12 - 2x$. Our inequality becomes:<br>$$12 - 2x \\ge x - 5 \\implies 17 \\ge 3x \\implies x \\le 5.67$$<br>This means the inequality is true for $x \\le 5.67$ and $x \\ge 7$, but fails in the gap $5.67 < x < 7$.",
            "Therefore, the statement is <strong>sometimes true</strong>, as it holds for most real values (such as $x=0$, giving $12 \\ge -5$), but fails for a small range of values (with a counterexample of $x = 6$, where $|2(6)-12| = 0$ is not greater than or equal to $6-5 = 1$).",
            "Final Answer: <strong>(i)</strong> $$Proof\\ by\\ cases\\ is\\ completed$$ <strong>(ii)</strong> $$Sometimes\\ true\\ (fails\\ in\\ the\\ interval\\ 5.67 < x < 7)$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(i)</strong> $$Proof\\ by\\ cases\\ is\\ completed$$ <strong>(ii)</strong> $$Always\\ true$$",
                "feedback": "You probably assumed the inequality is always true because absolute values are always positive. However, you must test the critical interval. In the region $5.67 < x < 7$, the value of the linear expression $x-5$ is actually larger than the absolute value $|2x-12|$, making the statement false in this range."
            },
            {
                "ans": "<strong>(i)</strong> $$Proof\\ by\\ cases\\ is\\ completed$$ <strong>(ii)</strong> $$Never\\ true$$",
                "feedback": "The statement is not 'never true'. It holds for the vast majority of real numbers. For example, substituting $x = 0$ yields $|-12| \\ge -5 \\implies 12 \\ge -5$, which is a true statement."
            },
            {
                "ans": "<strong>(i)</strong> $$Proof\\ by\\ algebraic\\ induction\\ is\\ completed$$ <strong>(ii)</strong> $$Sometimes\\ true$$",
                "feedback": "Part (i) is a proof by exhaustion (cases), not mathematical induction. Induction is used when a statement depends on $n$ and $n+1$ sequences, whereas here we exhaust all possible algebraic remainders of $n$ directly."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Absolute Value Gaps",
            "content": "For this question, when evaluating inequalities of the form $|Ax - B| \\ge x - C$, always check if the line $y = x - C$ passes above the vertex of the absolute value graph. If it does, there will always be a small 'gap' interval where the absolute value function dips below the line, rendering the statement only sometimes true."
        }
    },
    {
        "id": "004047",
        "major_area": "Proof",
        "topic": "Proof",
        "subtopic": [
            "Proof by Exhaustion",
            "Inequalities"
        ],
        "img": false,
        "question": "<strong>(i)</strong> Prove that for all $n \\in \\mathbb{N}$, $n^2 + 1$ is not divisible by $4$.<br><br><strong>(ii)</strong> \"Given $x \\in \\mathbb{R}$, the value of $|3x - 14|$ is greater than or equal to the value of $(x - 4)$.\"<br>State, giving a reason, if the above statement is always true, sometimes true, or never true.",
        "steps": [
            "<strong>Part (i):</strong> We use <strong>proof by exhaustion</strong> by splitting the natural numbers into two cases: even numbers ($n = 2k$) and odd numbers ($n = 2k + 1$) for some non-negative integer $k$.",
            "<strong>Case 1: $n$ is even ($n = 2k$)</strong><br>$$n^2 + 1 = (2k)^2 + 1 = 4k^2 + 1 = 4(k^2) + 1$$<br>Since $4(k^2)$ is divisible by $4$, $n^2+1$ leaves a remainder of $1$ when divided by $4$, so it is not divisible.",
            "<strong>Case 2: $n$ is odd ($n = 2k + 1$)</strong><br>$$n^2 + 1 = (2k+1)^2 + 1 = 4k^2 + 4k + 1 + 1 = 4(k^2 + k) + 2$$<br>This leaves a remainder of $2$ when divided by $4$, so it is not divisible.<br>Therefore, since all possible cases have been exhausted, $n^2 + 1$ is never divisible by $4$ for any $n \\in \\mathbb{N}$.",
            "<strong>Part (ii):</strong> To determine the validity of the statement $|3x - 14| \\ge x - 4$, we analyze the critical values by splitting the absolute value into two intervals at the boundary $x = \\frac{14}{3} \\approx 4.67$:",
            "<strong>Case A: For $x \\ge 4.67$</strong>, the term inside the absolute value is positive, so $|3x - 14| = 3x - 14$. Our inequality becomes:<br>$$3x - 14 \\ge x - 4 \\implies 2x \\ge 10 \\implies x \\ge 5$$<br>This means that in the interval $4.67 \\le x < 5$, the inequality is <strong>false</strong> (for example, at $x = 4.8$, we get $0.4 \\ge 0.8$, which is false).",
            "<strong>Case B: For $x < 4.67$</strong>, the term inside the absolute value is negative, so $|3x - 14| = 14 - 3x$. Our inequality becomes:<br>$$14 - 3x \\ge x - 4 \\implies 18 \\ge 4x \\implies x \\le 4.5$$<br>This means the inequality is true for $x \\le 4.5$ and $x \\ge 5$, but fails in the gap $4.5 < x < 5$.",
            "Therefore, the statement is <strong>sometimes true</strong>, as it holds for most real values (such as $x=0$, giving $14 \\ge -4$), but fails for a small range of values (with a counterexample of $x = 4.8$, where $|3(4.8)-14| = 0.4$ is not greater than or equal to $4.8-4 = 0.8$).",
            "Final Answer: <strong>(i)</strong> $$Proof\\ by\\ cases\\ is\\ completed$$ <strong>(ii)</strong> $$Sometimes\\ true\\ (fails\\ in\\ the\\ interval\\ 4.5 < x < 5)$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(i)</strong> $$Proof\\ by\\ cases\\ is\\ completed$$ <strong>(ii)</strong> $$Always\\ true$$",
                "feedback": "You probably assumed the inequality is always true because absolute values are always positive. However, you must test the critical interval. In the region $4.5 < x < 5$, the value of the linear expression $x-4$ is actually larger than the absolute value $|3x-14|$, making the statement false in this range."
            },
            {
                "ans": "<strong>(i)</strong> $$Proof\\ by\\ cases\\ is\\ completed$$ <strong>(ii)</strong> $$Never\\ true$$",
                "feedback": "The statement is not 'never true'. It holds for the vast majority of real numbers. For example, substituting $x = 0$ yields $|-14| \\ge -4 \\implies 14 \\ge -4$, which is a true statement."
            },
            {
                "ans": "<strong>(i)</strong> $$Proof\\ by\\ contradiction\\ is\\ completed$$ <strong>(ii)</strong> $$Sometimes\\ true$$",
                "feedback": "Part (i) is a proof by exhaustion (cases), not a proof by contradiction. A proof by contradiction starts by assuming the opposite statement is true and finding a mathematical impossibility, whereas here we systematically test all even and odd possibilities."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Divisibility by 4",
            "content": "For this question, when proving divisibility or non-divisibility by $4$, splitting your integers into even ($2k$) and odd ($2k+1$) is the most efficient method. This is because any even number squared yields a term strictly divisible by $4$, and any odd number squared yields $4(k^2+k)+1$, making the remainder analysis very straightforward."
        }
    },
    {
        "id": "004048",
        "major_area": "Proof",
        "topic": "Proof",
        "subtopic": [
            "Proof by Exhaustion",
            "Inequalities"
        ],
        "img": false,
        "question": "<strong>(i)</strong> Prove that for all $n \\in \\mathbb{N}$, $n^2 + 5$ is not divisible by $4$.<br><br><strong>(ii)</strong> \"Given $x \\in \\mathbb{R}$, the value of $|2x - 8|$ is greater than or equal to the value of $(x - 3)$.\"<br>State, giving a reason, if the above statement is always true, sometimes true, or never true.",
        "steps": [
            "<strong>Part (i):</strong> We use <strong>proof by exhaustion</strong> by splitting the natural numbers into two cases: even numbers ($n = 2k$) and odd numbers ($n = 2k + 1$) for some non-negative integer $k$.",
            "<strong>Case 1: $n$ is even ($n = 2k$)</strong><br>$$n^2 + 5 = (2k)^2 + 5 = 4k^2 + 5 = 4(k^2 + 1) + 1$$<br>Since $4(k^2+1)$ is divisible by $4$, $n^2+5$ leaves a remainder of $1$ when divided by $4$, so it is not divisible.",
            "<strong>Case 2: $n$ is odd ($n = 2k + 1$)</strong><br>$$n^2 + 5 = (2k+1)^2 + 5 = 4k^2 + 4k + 1 + 5 = 4k^2 + 4k + 6 = 4(k^2 + k + 1) + 2$$<br>This leaves a remainder of $2$ when divided by $4$, so it is not divisible.<br>Therefore, since all possible cases have been exhausted, $n^2 + 5$ is never divisible by $4$ for any $n \\in \\mathbb{N}$.",
            "<strong>Part (ii):</strong> To determine the validity of the statement $|2x - 8| \\ge x - 3$, we analyze the critical values by splitting the absolute value into two intervals at the boundary $x = 4$:",
            "<strong>Case A: For $x \\ge 4$</strong>, the term inside the absolute value is positive, so $|2x - 8| = 2x - 8$. Our inequality becomes:<br>$$2x - 8 \\ge x - 3 \\implies x \\ge 5$$<br>This means that in the interval $4 \\le x < 5$, the inequality is <strong>false</strong> (for example, at $x = 4$, we get $0 \\ge 1$, which is false).",
            "<strong>Case B: For $x < 4$</strong>, the term inside the absolute value is negative, so $|2x - 8| = 8 - 2x$. Our inequality becomes:<br>$$8 - 2x \\ge x - 3 \\implies 11 \\ge 3x \\implies x \\le 3.67$$<br>This means the inequality is true for $x \\le 3.67$ and $x \\ge 5$, but fails in the gap $3.67 < x < 5$.",
            "Therefore, the statement is <strong>sometimes true</strong>, as it holds for most real values (such as $x=0$, giving $8 \\ge -3$), but fails for a small range of values (with a counterexample of $x = 4$, where $|2(4)-8| = 0$ is not greater than or equal to $4-3 = 1$).",
            "Final Answer: <strong>(i)</strong> $$Proof\\ by\\ cases\\ is\\ completed$$ <strong>(ii)</strong> $$Sometimes\\ true\\ (fails\\ in\\ the\\ interval\\ 3.67 < x < 5)$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$Proof\\ by\\ cases\\ is\\ completed$$ <strong>(b)</strong> $$Always\\ true$$",
                "feedback": "You probably assumed the inequality is always true because absolute values are always positive. However, you must test the critical interval. In the region $3.67 < x < 5$, the value of the linear expression $x-3$ is actually larger than the absolute value $|2x-8|$, making the statement false in this range."
            },
            {
                "ans": "<strong>(a)</strong> $$Proof\\ by\\ cases\\ is\\ completed$$ <strong>(b)</strong> $$Never\\ true$$",
                "feedback": "The statement is not 'never true'. It holds for the vast majority of real numbers. For example, substituting $x = 0$ yields $|-8| \\ge -3 \\implies 8 \\ge -3$, which is a true statement."
            },
            {
                "ans": "<strong>(a)</strong> $$Proof\\ by\\ counterexample\\ is\\ completed$$ <strong>(b)</strong> $$Sometimes\\ true$$",
                "feedback": "Part (i) requires a general proof showing the statement is true for *all* $n \\in \\mathbb{N}$, which requires a proof by exhaustion (cases). A proof by counterexample is only used to disprove a statement, not to prove one."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Remainder Equivalents",
            "content": "In this question, when working with $n^2 + 5$ and dividing by $4$, remember that you can simplify the maths by rewriting $5$ as $4 + 1$. This makes $n^2 + 5$ equivalent to $n^2 + 1 \\pmod 4$, meaning the remainders will be identical to those found when expanding $n^2+1$."
        }
    },
    {
        "id": "004049",
        "major_area": "Proof",
        "topic": "Proof",
        "subtopic": [
            "Proof by Exhaustion",
            "Inequalities"
        ],
        "img": false,
        "question": "<strong>(i)</strong> Prove that for all $n \\in \\mathbb{N}$, $n^2 + 2$ is not divisible by $5$.<br><br><strong>(ii)</strong> \"Given $x \\in \\mathbb{R}$, the value of $|4x - 22|$ is greater than or equal to the value of $(x - 5)$.\"<br>State, giving a reason, if the above statement is always true, sometimes true, or never true.",
        "steps": [
            "<strong>Part (i):</strong> We use <strong>proof by exhaustion</strong> by splitting the natural numbers into five cases based on their divisibility by $5$. Any natural number $n$ can be written as $5k$, $5k \\pm 1$, or $5k \\pm 2$ for some non-negative integer $k$.",
            "<strong>Case 1: $n = 5k$ (multiples of 5)</strong><br>$$n^2 + 2 = (5k)^2 + 2 = 25k^2 + 2 = 5(5k^2) + 2$$<br>This leaves a remainder of $2$ when divided by $5$, so it is not divisible.",
            "<strong>Case 2: $n = 5k \\pm 1$</strong><br>$$n^2 + 2 = (5k \\pm 1)^2 + 2 = 25k^2 \\pm 10k + 1 + 2 = 5(5k^2 \\pm 2k) + 3$$<br>This leaves a remainder of $3$ when divided by $5$, so it is not divisible.",
            "<strong>Case 3: $n = 5k \\pm 2$</strong><br>$$n^2 + 2 = (5k \\pm 2)^2 + 2 = 25k^2 \\pm 20k + 4 + 2 = 25k^2 \\pm 20k + 6 = 5(5k^2 \\pm 4k + 1) + 1$$<br>This leaves a remainder of $1$ when divided by $5$, so it is not divisible.<br>Therefore, since all possible cases have been exhausted, $n^2 + 2$ is never divisible by $5$ for any $n \\in \\mathbb{N}$.",
            "<strong>Part (ii):</strong> To determine the validity of the statement $|4x - 22| \\ge x - 5$, we analyze the critical values by splitting the absolute value into two intervals at the boundary $x = 5.5$:",
            "<strong>Case A: For $x \\ge 5.5$</strong>, the term inside the absolute value is positive, so $|4x - 22| = 4x - 22$. Our inequality becomes:<br>$$4x - 22 \\ge x - 5 \\implies 3x \\ge 17 \\implies x \\ge 5.67$$<br>This means that in the interval $5.5 \\le x < 5.67$, the inequality is <strong>false</strong> (for example, at $x = 5.5$, we get $2 \\ge 0.5$, which is true, but at $x = 5.6$ we get $0.4 \\ge 0.6$, which is false).",
            "<strong>Case B: For $x < 5.5$</strong>, the term inside the absolute value is negative, so $|4x - 22| = 22 - 4x$. Our inequality becomes:<br>$$22 - 4x \\ge x - 5 \\implies 27 \\ge 5x \\implies x \\le 5.4$$<br>This means the inequality is true for $x \\le 5.4$ and $x \\ge 5.67$, but fails in the gap $5.4 < x < 5.67$.",
            "Therefore, the statement is <strong>sometimes true</strong>, as it holds for most real values (such as $x=0$, giving $22 \\ge -5$), but fails for a small range of values (with a counterexample of $x = 5.55$, where $|4(5.55)-22| = 0.2$ is not greater than or equal to $5.55-5 = 0.55$).",
            "Final Answer: <strong>(i)</strong> $$Proof\\ by\\ cases\\ is\\ completed$$ <strong>(ii)</strong> $$Sometimes\\ true\\ (fails\\ in\\ the\\ interval\\ 5.4 < x < 5.67)$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$Proof\\ by\\ cases\\ is\\ completed$$ <strong>(b)</strong> $$Always\\ true$$",
                "feedback": "You probably assumed the inequality is always true because absolute values are always positive. However, you must test the critical interval. In the region $5.4 < x < 5.67$, the value of the linear expression $x-5$ is actually larger than the absolute value $|4x-22|$, making the statement false in this range."
            },
            {
                "ans": "<strong>(a)</strong> $$Proof\\ by\\ cases\\ is\\ completed$$ <strong>(b)</strong> $$Never\\ true$$",
                "feedback": "The statement is not 'never true'. It holds for the vast majority of real numbers. For example, substituting $x = 0$ yields $|-22| \\ge -5 \\implies 22 \\ge -5$, which is a true statement."
            },
            {
                "ans": "<strong>(a)</strong> $$Proof\\ by\\ deduction\\ is\\ completed$$ <strong>(b)</strong> $$Sometimes\\ true$$",
                "feedback": "Part (i) requires a general proof for all $n$, which must be handled by exhaustion (testing all possible remainder cases). A simple algebraic deduction is not enough because $n$ is discrete and can have various remainder properties."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Modulo 5 Groupings",
            "content": "In this question, when proving divisibility by $5$, we can group our cases into $5k \\pm 1$ and $5k \\pm 2$. Because squaring negative terms yields positive terms, this grouping handles two cases at once, saving you significant time and writing on your exam paper."
        }
    },
    {
        "id": "004050",
        "major_area": "Proof",
        "topic": "Proof",
        "subtopic": [
            "Proof by Exhaustion",
            "Inequalities"
        ],
        "img": false,
        "question": "<strong>(i)</strong> Prove that for all $n \\in \\mathbb{N}$, $n^2 + 3$ is not divisible by $5$.<br><br><strong>(ii)</strong> \"Given $x \\in \\mathbb{R}$, the value of $|3x - 17|$ is greater than or equal to the value of $(x - 5)$.\"<br>State, giving a reason, if the above statement is always true, sometimes true, or never true.",
        "steps": [
            "<strong>Part (i):</strong> We use <strong>proof by exhaustion</strong> by splitting the natural numbers into five cases based on their divisibility by $5$. Any natural number $n$ can be written as $5k$, $5k \\pm 1$, or $5k \\pm 2$ for some non-negative integer $k$.",
            "<strong>Case 1: $n = 5k$ (multiples of 5)</strong><br>$$n^2 + 3 = (5k)^2 + 3 = 25k^2 + 3 = 5(5k^2) + 3$$<br>This leaves a remainder of $3$ when divided by $5$, so it is not divisible.",
            "<strong>Case 2: $n = 5k \\pm 1$</strong><br>$$n^2 + 3 = (5k \\pm 1)^2 + 3 = 25k^2 \\pm 10k + 1 + 3 = 5(5k^2 \\pm 2k) + 4$$<br>This leaves a remainder of $4$ when divided by $5$, so it is not divisible.",
            "<strong>Case 3: $n = 5k \\pm 2$</strong><br>$$n^2 + 3 = (5k \\pm 2)^2 + 3 = 25k^2 \\pm 20k + 4 + 3 = 25k^2 \\pm 20k + 7 = 5(5k^2 \\pm 4k + 1) + 2$$<br>This leaves a remainder of $2$ when divided by $5$, so it is not divisible.<br>Therefore, since all possible cases have been exhausted, $n^2 + 3$ is never divisible by $5$ for any $n \\in \\mathbb{N}$.",
            "<strong>Part (ii):</strong> To determine the validity of the statement $|3x - 17| \\ge x - 5$, we analyze the critical values by splitting the absolute value into two intervals at the boundary $x = 5.67$:",
            "<strong>Case A: For $x \\ge 5.67$</strong>, the term inside the absolute value is positive, so $|3x - 17| = 3x - 17$. Our inequality becomes:<br>$$3x - 17 \\ge x - 5 \\implies 2x \\ge 12 \\implies x \\ge 6$$<br>This means that in the interval $5.67 \\le x < 6$, the inequality is <strong>false</strong> (for example, at $x = 5.8$, we get $0.4 \\ge 0.8$, which is false).",
            "<strong>Case B: For $x < 5.67$</strong>, the term inside the absolute value is negative, so $|3x - 17| = 17 - 3x$. Our inequality becomes:<br>$$17 - 3x \\ge x - 5 \\implies 22 \\ge 4x \\implies x \\le 5.5$$<br>This means the inequality is true for $x \\le 5.5$ and $x \\ge 6$, but fails in the gap $5.5 < x < 6$.",
            "Therefore, the statement is <strong>sometimes true</strong>, as it holds for most real values (such as $x=0$, giving $17 \\ge -5$), but fails for a small range of values (with a counterexample of $x = 5.8$, where $|3(5.8)-17| = 0.4$ is not greater than or equal to $5.8-5 = 0.8$).",
            "Final Answer: <strong>(i)</strong> $$Proof\\ by\\ cases\\ is\\ completed$$ <strong>(ii)</strong> $$Sometimes\\ true\\ (fails\\ in\\ the\\ interval\\ 5.5 < x < 6)$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$Proof\\ by\\ cases\\ is\\ completed$$ <strong>(b)</strong> $$Always\\ true$$",
                "feedback": "You probably assumed the inequality is always true because absolute values are always positive. However, you must test the critical interval. In the region $5.5 < x < 6$, the value of the linear expression $x-5$ is actually larger than the absolute value $|3x-17|$, making the statement false in this range."
            },
            {
                "ans": "<strong>(a)</strong> $$Proof\\ by\\ cases\\ is\\ completed$$ <strong>(b)</strong> $$Never\\ true$$",
                "feedback": "The statement is not 'never true'. It holds for the vast majority of real numbers. For example, substituting $x = 0$ yields $|-17| \\ge -5 \\implies 17 \\ge -5$, which is a true statement."
            },
            {
                "ans": "<strong>(a)</strong> $$Proof\\ by\\ exhaustion\\ of\\ bounds\\ is\\ completed$$ <strong>(b)</strong> $$Sometimes\\ true$$",
                "feedback": "The standard mathematical name for testing integer remainder cases is a proof by exhaustion (or proof by cases). Avoid using non-standard terms like 'exhaustion of bounds' on your exam script."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Visualising Inequalities",
            "content": "When analyzing whether an absolute value statement is always, sometimes, or never true, a quick mental sketch of the two functions $y = |Ax - B|$ and $y = x - C$ is incredibly helpful. It instantly reveals if the linear function ever crosses above the v-shaped absolute value boundary."
        }
    },
    {
        "id": "004051",
        "major_area": "Sequences & Series",
        "topic": "Series",
        "subtopic": [
            "Geometric Series"
        ],
        "img": false,
        "question": "A competitor is swimming a 15-kilometre marathon swim.<br>She swims each of the first 3 kilometres at a steady pace of 20 minutes per kilometre.<br>After the first 3 kilometres, she begins to slow down.<br>In order to estimate her finishing time, the time that she will take to complete each subsequent kilometre is modelled to be 4% greater than the time that she took to complete the previous kilometre.<br>Using the model,<br><strong>(a)</strong> show that her time to swim the first 5 kilometres is estimated to be 102 minutes 26 seconds,<br><strong>(b)</strong> show that her estimated time, in minutes, to swim the $r$th kilometre, for $4 \\le r \\le 15$, is:<br>$$20 \\times 1.04^{r-3}$$<br><strong>(c)</strong> estimate the total time, in hours, minutes, and seconds, that she will take to complete the marathon swim.",
        "steps": [
            "<strong>Part (a):</strong> The time for the first 3 kilometres is run at a steady pace of $20\\text{ min/km}$:<br>$$\\text{Time}_{1-3} = 3 \\times 20 = 60\\text{ minutes}$$",
            "The 4th kilometre takes 4% longer than the 3rd kilometre ($20\\text{ minutes}$):<br>$$\\text{Time}_{4} = 20 \\times 1.04 = 20.8\\text{ minutes}$$",
            "The 5th kilometre takes 4% longer than the 4th kilometre:<br>$$\\text{Time}_{5} = 20.8 \\times 1.04 = 20 \\times 1.04^2 = 21.632\\text{ minutes}$$",
            "Adding these times together gives the total estimated time for the first 5 kilometres:<br>$$\\text{Total Time} = 60 + 20.8 + 21.632 = 102.432\\text{ minutes}$$<br>Converting $0.432$ minutes into seconds: $0.432 \\times 60 = 25.92 \\approx 26\\text{ seconds}$.<br>Therefore, the time is <strong>102 minutes 26 seconds</strong> (to the nearest second).",
            "<strong>Part (b):</strong> For $r \\ge 4$, each subsequent kilometre is 4% slower than the previous one, forming a geometric progression where the first term after the steady phase (at $r=4$) is $20 \\times 1.04^1$.<br>In general, for the $r$th kilometre, the time has been multiplied by $1.04$ a total of $r-3$ times starting from the base pace of $20\\text{ minutes}$.<br>Therefore, the time for the $r$th kilometre is:<br>$$\\text{Time}_{r} = 20 \\times 1.04^{r-3}$$",
            "<strong>Part (c):</strong> The total time is the sum of the first 3 steady kilometres ($60\\text{ minutes}$) and the geometric series from $r=4$ to $r=15$.<br>For $r=4$ to $15$, there are $15 - 4 + 1 = 12$ kilometres.<br>This is a geometric series with first term $a = 20 \\times 1.04 = 20.8$ and common ratio $r_{\\text{gp}} = 1.04$.",
            "Using the sum formula, $S_N = \\dfrac{a(r_{\\text{gp}}^N - 1)}{r_{\\text{gp}} - 1}$:<br>$$S_{12} = \\dfrac{20.8(1.04^{12} - 1)}{1.04 - 1} = \\dfrac{20.8(1.04^{12} - 1)}{0.04} = 520(1.04^{12} - 1)$$<br>$$S_{12} \\approx 520(1.601032 - 1) \\approx 312.537\\text{ minutes}$$",
            "Adding the initial $60\\text{ minutes}$ gives the total estimated time:<br>$$\\text{Total Time} = 60 + 312.537 = 372.537\\text{ minutes}$$<br>Converting to hours, minutes, and seconds:<br>$$\\dfrac{372.537}{60} = 6\\text{ hours and } 12.537\\text{ minutes}$$<br>$$0.537 \\times 60 = 32.22 \\approx 32\\text{ seconds}$$<br>Therefore, the total estimated time is <strong>6 hours, 12 minutes, and 32 seconds</strong>.",
            "Final Answer: <strong>(a)</strong> $$102\\text{ min } 26\\text{ s}$$ <strong>(b)</strong> $$20 \\times 1.04^{r-3}$$ <strong>(c)</strong> $$6\\text{ h } 12\\text{ min } 32\\text{ s}$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$102\\text{ min } 26\\text{ s}$$ <strong>(b)</strong> $$20 \\times 1.04^{r-3}$$ <strong>(c)</strong> $$6\\text{ h } 12\\text{ min } 54\\text{ s}$$",
                "feedback": "You probably made an arithmetic rounding error in Part (c) by rounding the sum of your geometric series to $312.5$ minutes prematurely. Retaining full calculator precision during your summation yields a total time of $372.537$ minutes, which converts to $6\\text{ h } 12\\text{ min } 32\\text{ s}$."
            },
            {
                "ans": "<strong>(a)</strong> $$102\\text{ min } 26\\text{ s}$$ <strong>(b)</strong> $$20 \\times 1.04^{r-4}$$ <strong>(c)</strong> $$6\\text{ h } 12\\text{ min } 32\\text{ s}$$",
                "feedback": "Check your exponent index in Part (b). Since the steady phase ends after the 3rd kilometre, the first 4% increase occurs on the 4th kilometre ($r=4$). This requires an exponent of $r-3$ so that $T_4 = 20 \\times 1.04^1$. An exponent of $r-4$ would incorrectly mean the 4th kilometre had no slow-down."
            },
            {
                "ans": "<strong>(a)</strong> $$102\\text{ min } 26\\text{ s}$$ <strong>(b)</strong> $$20 \\times 1.04^{r-3}$$ <strong>(c)</strong> $$6\\text{ h } 15\\text{ min } 12\\text{ s}$$",
                "feedback": "Check your value for $N$ (the number of terms in your geometric series) in Part (c). The slow-down phase runs from $r=4$ to $r=15$, which contains $15-4+1 = 12$ terms, not $11$ terms."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Counting Terms",
            "content": "When calculating the sum of a series over a specific range like $r=4$ to $r=15$, a common pitfall is subtracting the limits ($15 - 4 = 11$) and using $11$ as the number of terms ($N$). Always remember the inclusive rule: $N = \\text{upper limit} - \\text{lower limit} + 1$. In this case, $15 - 4 + 1 = 12$ terms."
        }
    },
    {
        "id": "004052",
        "major_area": "Sequences & Series",
        "topic": "Series",
        "subtopic": [
            "Geometric Series"
        ],
        "img": false,
        "question": "An engineering firm is drilling a 100-metre deep borehole.<br>The team drills each of the first 20 metres at a steady rate of 15 minutes per metre.<br>After the first 20 metres, the drilling speed begins to decrease due to harder rock layers.<br>In order to estimate the completion time, the time taken to drill each subsequent metre is modelled to be 2% greater than the time taken to drill the previous metre.<br>Using the model,<br><strong>(a)</strong> show that the time to drill the first 22 metres is estimated to be 330 minutes 54 seconds,<br><strong>(b)</strong> show that the estimated time, in minutes, to drill the $r$th metre, for $21 \\le r \\le 100$, is:<br>$$15 \\times 1.02^{r-20}$$<br><strong>(c)</strong> estimate the total time, in hours, minutes, and seconds, to complete the 100-metre borehole.",
        "steps": [
            "<strong>Part (a):</strong> The time for the first 20 metres is drilled at a steady rate of $15\\text{ min/m}$:<br>$$\\text{Time}_{1-20} = 20 \\times 15 = 300\\text{ minutes}$$",
            "The 21st metre takes 2% longer than the 20th metre ($15\\text{ minutes}$):<br>$$\\text{Time}_{21} = 15 \\times 1.02 = 15.3\\text{ minutes}$$",
            "The 22nd metre takes 2% longer than the 21st metre:<br>$$\\text{Time}_{22} = 15.3 \\times 1.02 = 15 \\times 1.02^2 = 15.606\\text{ minutes}$$",
            "Adding these times together gives the total estimated time for the first 22 metres:<br>$$\\text{Total Time} = 300 + 15.3 + 15.606 = 330.906\\text{ minutes}$$<br>Converting $0.906$ minutes into seconds: $0.906 \\times 60 = 54.36 \\approx 54\\text{ seconds}$.<br>Therefore, the time is <strong>330 minutes 54 seconds</strong> (to the nearest second).",
            "<strong>Part (b):</strong> For $r \\ge 21$, each subsequent metre is 2% slower than the previous one, forming a geometric progression where the first term after the steady phase (at $r=21$) is $15 \\times 1.02^1$.<br>In general, for the $r$th metre, the time has been multiplied by $1.02$ a total of $r-20$ times starting from the base pace of $15\\text{ minutes}$.<br>Therefore, the time for the $r$th metre is:<br>$$\\text{Time}_{r} = 15 \\times 1.02^{r-20}$$",
            "<strong>Part (c):</strong> The total time is the sum of the first 20 steady metres ($300\\text{ minutes}$) and the geometric series from $r=21$ to $r=100$.<br>For $r=21$ to $100$, there are $100 - 21 + 1 = 80$ metres.<br>This is a geometric series with first term $a = 15 \\times 1.02 = 15.3$ and common ratio $r_{\\text{gp}} = 1.02$.",
            "Using the sum formula, $S_N = \\dfrac{a(r_{\\text{gp}}^N - 1)}{r_{\\text{gp}} - 1}$:<br>$$S_{80} = \\dfrac{15.3(1.02^{80} - 1)}{1.02 - 1} = \\dfrac{15.3(1.02^{80} - 1)}{0.02} = 765(1.02^{80} - 1)$$<br>$$S_{80} \\approx 765(4.875439 - 1) \\approx 2964.711\\text{ minutes}$$",
            "Adding the initial $300\\text{ minutes}$ gives the total estimated time:<br>$$\\text{Total Time} = 300 + 2964.711 = 3264.711\\text{ minutes}$$<br>Converting to hours, minutes, and seconds:<br>$$\\dfrac{3264.711}{60} = 54\\text{ hours and } 24.711\\text{ minutes}$$<br>$$0.711 \\times 60 = 42.66 \\approx 43\\text{ seconds}$$<br>Therefore, the total estimated time is <strong>54 hours, 24 minutes, and 43 seconds</strong>.",
            "Final Answer: <strong>(a)</strong> $$330\\text{ min } 54\\text{ s}$$ <strong>(b)</strong> $$15 \\times 1.02^{r-20}$$ <strong>(c)</strong> $$54\\text{ h } 24\\text{ min } 43\\text{ s}$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$330\\text{ min } 54\\text{ s}$$ <strong>(b)</strong> $$15 \\times 1.02^{r-20}$$ <strong>(c)</strong> $$54\\text{ h } 28\\text{ min } 12\\text{ s}$$",
                "feedback": "You probably made an arithmetic rounding error in Part (c) by rounding the sum of your geometric series to $2968.2$ minutes prematurely. Retaining full calculator precision during your summation yields a total time of $3264.711$ minutes, which converts to $54\\text{ h } 24\\text{ min } 43\\text{ s}$."
            },
            {
                "ans": "<strong>(a)</strong> $$330\\text{ min } 54\\text{ s}$$ <strong>(b)</strong> $$15 \\times 1.02^{r-21}$$ <strong>(c)</strong> $$54\\text{ h } 24\\text{ min } 43\\text{ s}$$",
                "feedback": "Check your exponent index in Part (b). Since the steady phase ends after the 20th metre, the first 2% increase occurs on the 21st metre ($r=21$). This requires an exponent of $r-20$ so that $T_{21} = 15 \\times 1.02^1$. An exponent of $r-21$ would incorrectly mean the 21st metre had no slow-down."
            },
            {
                "ans": "<strong>(a)</strong> $$330\\text{ min } 54\\text{ s}$$ <strong>(b)</strong> $$15 \\times 1.02^{r-20}$$ <strong>(c)</strong> $$54\\text{ h } 20\\text{ min } 18\\text{ s}$$",
                "feedback": "Check your value for $N$ (the number of terms in your geometric series) in Part (c). The slow-down phase runs from $r=21$ to $r=100$, which contains $100-21+1 = 80$ terms, not $79$ terms."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Avoid Early Rounding",
            "content": "In multi-step GCE questions, never round your intermediate values on your calculator. Keeping the exact values stored in memory until the very final conversion prevents tiny rounding errors from compounding and throwing off your final seconds value."
        }
    },
    {
        "id": "004053",
        "major_area": "Sequences & Series",
        "topic": "Series",
        "subtopic": [
            "Geometric Series"
        ],
        "img": false,
        "question": "A cyclist is completing a 50-kilometre long-distance ride.<br>He cycles each of the first 10 kilometres at a steady pace of 3 minutes per kilometre.<br>After the first 10 kilometres, he begins to slow down due to fatigue.<br>In order to estimate his finishing time, the time taken to complete each subsequent kilometre is modelled to be 3% greater than the time taken to complete the previous kilometre.<br>Using the model,<br><strong>(a)</strong> show that his time to cycle the first 12 kilometres is estimated to be 36 minutes 16 seconds,<br><strong>(b)</strong> show that his estimated time, in minutes, to cycle the $r$th kilometre, for $11 \\le r \\le 50$, is:<br>$$3 \\times 1.03^{r-10}$$<br><strong>(c)</strong> estimate the total time, in hours, minutes, and seconds, that he will take to complete the ride.",
        "steps": [
            "<strong>Part (a):</strong> The time for the first 10 kilometres is cycled at a steady pace of $3\\text{ min/km}$:<br>$$\\text{Time}_{1-10} = 10 \\times 3 = 30\\text{ minutes}$$",
            "The 11th kilometre takes 3% longer than the 10th kilometre ($3\\text{ minutes}$):<br>$$\\text{Time}_{11} = 3 \\times 1.03 = 3.09\\text{ minutes}$$",
            "The 12th kilometre takes 3% longer than the 11th kilometre:<br>$$\\text{Time}_{12} = 3.09 \\times 1.03 = 3 \\times 1.03^2 = 3.1827\\text{ minutes}$$",
            "Adding these times together gives the total estimated time for the first 12 kilometres:<br>$$\\text{Total Time} = 30 + 3.09 + 3.1827 = 36.2727\\text{ minutes}$$<br>Converting $0.2727$ minutes into seconds: $0.2727 \\times 60 = 16.362 \\approx 16\\text{ seconds}$.<br>Therefore, the time is <strong>36 minutes 16 seconds</strong> (to the nearest second).",
            "<strong>Part (b):</strong> For $r \\ge 11$, each subsequent kilometre is 3% slower than the previous one, forming a geometric progression where the first term after the steady phase (at $r=11$) is $3 \\times 1.03^1$.<br>In general, for the $r$th kilometre, the time has been multiplied by $1.03$ a total of $r-10$ times starting from the base pace of $3\\text{ minutes}$.<br>Therefore, the time for the $r$th kilometre is:<br>$$\\text{Time}_{r} = 3 \\times 1.03^{r-10}$$",
            "<strong>Part (c):</strong> The total time is the sum of the first 10 steady kilometres ($30\\text{ minutes}$) and the geometric series from $r=11$ to $r=50$.<br>For $r=11$ to $50$, there are $50 - 11 + 1 = 40$ kilometres.<br>This is a geometric series with first term $a = 3 \\times 1.03 = 3.09$ and common ratio $r_{\\text{gp}} = 1.03$.",
            "Using the sum formula, $S_N = \\dfrac{a(r_{\\text{gp}}^N - 1)}{r_{\\text{gp}} - 1}$:<br>$$S_{40} = \\dfrac{3.09(1.03^{40} - 1)}{1.03 - 1} = \\dfrac{3.09(1.03^{40} - 1)}{0.03} = 103(1.03^{40} - 1)$$<br>$$S_{40} \\approx 103(3.262038 - 1) \\approx 232.990\\text{ minutes}$$",
            "Adding the initial $300\\text{ minutes}$ gives the total estimated time:<br>$$\\text{Total Time} = 30 + 232.990 = 262.990\\text{ minutes}$$<br>Converting to hours, minutes, and seconds:<br>$$\\dfrac{262.990}{60} = 4\\text{ hours and } 22.990\\text{ minutes}$$<br>$$0.990 \\times 60 = 59.4 \\approx 59\\text{ seconds}$$<br>Therefore, the total estimated time is <strong>4 hours, 22 minutes, and 59 seconds</strong>.",
            "Final Answer: <strong>(a)</strong> $$36\\text{ min } 16\\text{ s}$$ <strong>(b)</strong> $$3 \\times 1.03^{r-10}$$ <strong>(c)</strong> $$4\\text{ h } 22\\text{ min } 59\\text{ s}$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$36\\text{ min } 16\\text{ s}$$ <strong>(b)</strong> $$3 \\times 1.03^{r-10}$$ <strong>(c)</strong> $$4\\text{ h } 22\\text{ min } 54\\text{ s}$$",
                "feedback": "You probably made an arithmetic rounding error in Part (c) by rounding the sum of your geometric series to $232.9$ minutes prematurely. Retaining full calculator precision during your summation yields a total time of $262.990$ minutes, which converts to $4\\text{ h } 22\\text{ min } 59\\text{ s}$."
            },
            {
                "ans": "<strong>(a)</strong> $$36\\text{ min } 16\\text{ s}$$ <strong>(b)</strong> $$3 \\times 1.03^{r-11}$$ <strong>(c)</strong> $$4\\text{ h } 22\\text{ min } 59\\text{ s}$$",
                "feedback": "Check your exponent index in Part (b). Since the steady phase ends after the 10th kilometre, the first 3% increase occurs on the 11th kilometre ($r=11$). This requires an exponent of $r-10$ so that $T_{11} = 3 \\times 1.03^1$. An exponent of $r-11$ would incorrectly mean the 11th kilometre had no slow-down."
            },
            {
                "ans": "<strong>(a)</strong> $$36\\text{ min } 16\\text{ s}$$ <strong>(b)</strong> $$3 \\times 1.03^{r-10}$$ <strong>(c)</strong> $$4\\text{ h } 18\\text{ min } 12\\text{ s}$$",
                "feedback": "Check your value for $N$ (the number of terms in your geometric series) in Part (c). The slow-down phase runs from $r=11$ to $r=50$, which contains $50-11+1 = 40$ terms, not $39$ terms."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Shifted Exponents",
            "content": "In series modeling, when the geometric phase starts at an offset index (like $r=11$ in this question), the exponent must be shifted back to align properly. Always test your boundary case: substituting your first term index ($r=11$) into your formula must yield the single 3% multiplier increase ($r-10 = 1$)."
        }
    },
    {
        "id": "004054",
        "major_area": "Sequences & Series",
        "topic": "Series",
        "subtopic": [
            "Geometric Series"
        ],
        "img": false,
        "question": "A hiker is walking a 12-kilometre uphill trail.<br>She hikes each of the first 3 kilometres at a steady pace of 12 minutes per kilometre.<br>After the first 3 kilometres, the trail becomes steeper and she begins to slow down.<br>In order to estimate her arrival time, the time taken to complete each subsequent kilometre is modelled to be 6% greater than the time taken to complete the previous kilometre.<br>Using the model,<br><strong>(a)</strong> show that her time to hike the first 5 kilometres is estimated to be 62 minutes 12 seconds,<br><strong>(b)</strong> show that her estimated time, in minutes, to hike the $r$th kilometre, for $4 \\le r \\le 12$, is:<br>$$12 \\times 1.06^{r-3}$$<br><strong>(c)</strong> estimate the total time, in hours, minutes, and seconds, that she will take to complete the uphill trail.",
        "steps": [
            "<strong>Part (a):</strong> The time for the first 3 kilometres is hiked at a steady pace of $12\\text{ min/km}$:<br>$$\\text{Time}_{1-3} = 3 \\times 12 = 36\\text{ minutes}$$",
            "The 4th kilometre takes 6% longer than the 3rd kilometre ($12\\text{ minutes}$):<br>$$\\text{Time}_{4} = 12 \\times 1.06 = 12.72\\text{ minutes}$$",
            "The 5th kilometre takes 6% longer than the 4th kilometre:<br>$$\\text{Time}_{5} = 12.72 \\times 1.06 = 12 \\times 1.06^2 = 13.4832\\text{ minutes}$$",
            "Adding these times together gives the total estimated time for the first 5 kilometres:<br>$$\\text{Total Time} = 36 + 12.72 + 13.4832 = 62.2032\\text{ minutes}$$<br>Converting $0.2032$ minutes into seconds: $0.2032 \\times 60 = 12.192 \\approx 12\\text{ seconds}$.<br>Therefore, the time is <strong>62 minutes 12 seconds</strong> (to the nearest second).",
            "<strong>Part (b):</strong> For $r \\ge 4$, each subsequent kilometre is 6% slower than the previous one, forming a geometric progression where the first term after the steady phase (at $r=4$) is $12 \\times 1.06^1$.<br>In general, for the $r$th kilometre, the time has been multiplied by $1.06$ a total of $r-3$ times starting from the base pace of $12\\text{ minutes}$.<br>Therefore, the time for the $r$th kilometre is:<br>$$\\text{Time}_{r} = 12 \\times 1.06^{r-3}$$",
            "<strong>Part (c):</strong> The total time is the sum of the first 3 steady kilometres ($36\\text{ minutes}$) and the geometric series from $r=4$ to $r=12$.<br>For $r=4$ to $12$, there are $12 - 4 + 1 = 9$ kilometres.<br>This is a geometric series with first term $a = 12 \\times 1.06 = 12.72$ and common ratio $r_{\\text{gp}} = 1.06$.",
            "Using the sum formula, $S_N = \\dfrac{a(r_{\\text{gp}}^N - 1)}{r_{\\text{gp}} - 1}$:<br>$$S_9 = \\dfrac{12.72(1.06^9 - 1)}{1.06 - 1} = \\dfrac{12.72(1.06^9 - 1)}{0.06} = 212(1.06^9 - 1)$$<br>$$S_9 \\approx 212(1.689479 - 1) \\approx 146.169\\text{ minutes}$$",
            "Adding the initial $36\\text{ minutes}$ gives the total estimated time:<br>$$\\text{Total Time} = 36 + 146.169 = 182.169\\text{ minutes}$$<br>Converting to hours, minutes, and seconds:<br>$$\\dfrac{182.169}{60} = 3\\text{ hours and } 2.169\\text{ minutes}$$<br>$$2.169 \\times 60 = 10.14 \\approx 10\\text{ seconds}$$<br>Therefore, the total estimated time is <strong>3 hours, 2 minutes, and 10 seconds</strong>.",
            "Final Answer: <strong>(a)</strong> $$62\\text{ min } 12\\text{ s}$$ <strong>(b)</strong> $$12 \\times 1.06^{r-3}$$ <strong>(c)</strong> $$3\\text{ h } 2\\text{ min } 10\\text{ s}$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$62\\text{ min } 12\\text{ s}$$ <strong>(b)</strong> $$12 \\times 1.06^{r-3}$$ <strong>(c)</strong> $$3\\text{ h } 2\\text{ min } 0\\text{ s}$$",
                "feedback": "Check your final seconds conversion in Part (c). $182.169$ minutes converts to $3$ hours, $2$ minutes, and $10$ seconds. Make sure you don't drop the fractional minutes when performing your division."
            },
            {
                "ans": "<strong>(a)</strong> $$62\\text{ min } 12\\text{ s}$$ <strong>(b)</strong> $$12 \\times 1.06^{r-4}$$ <strong>(c)</strong> $$3\\text{ h } 2\\text{ min } 10\\text{ s}$$",
                "feedback": "Check your exponent index in Part (b). Since the steady phase ends after the 3rd kilometre, the first 6% increase occurs on the 4th kilometre ($r=4$). This requires an exponent of $r-3$ so that $T_4 = 12 \\times 1.06^1$. An exponent of $r-4$ would incorrectly mean the 4th kilometre had no slow-down."
            },
            {
                "ans": "<strong>(a)</strong> $$62\\text{ min } 12\\text{ s}$$ <strong>(b)</strong> $$12 \\times 1.06^{r-3}$$ <strong>(c)</strong> $$3\\text{ h } 0\\text{ min } 48\\text{ s}$$",
                "feedback": "Check your value for $N$ (the number of terms in your geometric series) in Part (c). The slow-down phase runs from $r=4$ to $r=12$, which contains $12-4+1 = 9$ terms, not $8$ terms."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Time Conversions",
            "content": "When converting a large decimal number of minutes into hours, minutes, and seconds, divide by $60$ first to isolate the whole hours. Take the remainder and multiply it by $60$ to isolate the whole minutes, and then multiply the final remaining decimal fraction by $60$ to secure your seconds."
        }
    },
    {
        "id": "004055",
        "major_area": "Sequences & Series",
        "topic": "Series",
        "subtopic": [
            "Geometric Series"
        ],
        "img": false,
        "question": "A rower is crossing a 10-kilometre lake.<br>She rows each of the first 2 kilometres at a steady pace of 8 minutes per kilometre.<br>After the first 2 kilometres, she begins to slow down.<br>In order to estimate her crossing time, the time taken to complete each subsequent kilometre is modelled to be 4% greater than the time taken to complete the previous kilometre.<br>Using the model,<br><strong>(a)</strong> show that her time to row the first 4 kilometres is estimated to be 32 minutes 58 seconds,<br><strong>(b)</strong> show that her estimated time, in minutes, to row the $r$th kilometre, for $3 \\le r \\le 10$, is:<br>$$8 \\times 1.04^{r-2}$$<br><strong>(c)</strong> estimate the total time, in minutes and seconds, that she will take to complete the 10-kilometre crossing.",
        "steps": [
            "<strong>Part (a):</strong> The time for the first 2 kilometres is rowed at a steady pace of $8\\text{ min/km}$:<br>$$\\text{Time}_{1-2} = 2 \\times 8 = 16\\text{ minutes}$$",
            "The 3rd kilometre takes 4% longer than the 2nd kilometre ($8\\text{ minutes}$):<br>$$\\text{Time}_{3} = 8 \\times 1.04 = 8.32\\text{ minutes}$$",
            "The 4th kilometre takes 4% longer than the 3rd kilometre:<br>$$\\text{Time}_{4} = 8.32 \\times 1.04 = 8 \\times 1.04^2 = 8.6528\\text{ minutes}$$",
            "Adding these times together gives the total estimated time for the first 4 kilometres:<br>$$\\text{Total Time} = 16 + 8.32 + 8.6528 = 32.9728\\text{ minutes}$$<br>Converting $0.9728$ minutes into seconds: $0.9728 \\times 60 = 58.368 \\approx 58\\text{ seconds}$.<br>Therefore, the time is <strong>32 minutes 58 seconds</strong> (to the nearest second).",
            "<strong>Part (b):</strong> For $r \\ge 3$, each subsequent kilometre is 4% slower than the previous one, forming a geometric progression where the first term after the steady phase (at $r=3$) is $8 \\times 1.04^1$.<br>In general, for the $r$th kilometre, the time has been multiplied by $1.04$ a total of $r-2$ times starting from the base pace of $8\\text{ minutes}$.<br>Therefore, the time for the $r$th kilometre is:<br>$$\\text{Time}_{r} = 8 \\times 1.04^{r-2}$$",
            "<strong>Part (c):</strong> The total time is the sum of the first 2 steady kilometres ($16\\text{ minutes}$) and the geometric series from $r=3$ to $r=10$.<br>For $r=3$ to $10$, there are $10 - 3 + 1 = 8$ kilometres.<br>This is a geometric series with first term $a = 8 \\times 1.04 = 8.32$ and common ratio $r_{\\text{gp}} = 1.04$.",
            "Using the sum formula, $S_N = \\dfrac{a(r_{\\text{gp}}^N - 1)}{r_{\\text{gp}} - 1}$:<br>$$S_8 = \\dfrac{8.32(1.04^8 - 1)}{1.04 - 1} = \\dfrac{8.32(1.04^8 - 1)}{0.04} = 208(1.04^8 - 1)$$<br>$$S_8 \\approx 208(1.368569 - 1) \\approx 76.662\\text{ minutes}$$",
            "Adding the initial $16\\text{ minutes}$ gives the total estimated time:<br>$$\\text{Total Time} = 16 + 76.662 = 92.662\\text{ minutes}$$<br>Converting to minutes and seconds:<br>$$\\text{Total Time} = 92\\text{ minutes and } 0.662\\text{ minutes}$$<br>$$0.662 \\times 60 = 39.72 \\approx 40\\text{ seconds}$$<br>Therefore, the total estimated time is <strong>92 minutes 40 seconds</strong>.",
            "Final Answer: <strong>(a)</strong> $$32\\text{ min } 58\\text{ s}$$ <strong>(b)</strong> $$8 \\times 1.04^{r-2}$$ <strong>(c)</strong> $$92\\text{ min } 40\\text{ s}$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$32\\text{ min } 58\\text{ s}$$ <strong>(b)</strong> $$8 \\times 1.04^{r-2}$$ <strong>(c)</strong> $$92\\text{ min } 12\\text{ s}$$",
                "feedback": "Check your decimal minutes conversion in Part (c). $92.662$ minutes is not $92\\text{ min } 12\\text{ s}$. You must multiply the fractional part ($0.662$) by $60$ to get the correct seconds value ($40\\text{ s}$)."
            },
            {
                "ans": "<strong>(a)</strong> $$32\\text{ min } 58\\text{ s}$$ <strong>(b)</strong> $$8 \\times 1.04^{r-3}$$ <strong>(c)</strong> $$92\\text{ min } 40\\text{ s}$$",
                "feedback": "Check your exponent index in Part (b). Since the steady phase ends after the 2nd kilometre, the first 4% increase occurs on the 3rd kilometre ($r=3$). This requires an exponent of $r-2$ so that $T_3 = 8 \\times 1.04^1$. An exponent of $r-3$ would incorrectly mean the 3rd kilometre had no slow-down."
            },
            {
                "ans": "<strong>(a)</strong> $$32\\text{ min } 58\\text{ s}$$ <strong>(b)</strong> $$8 \\times 1.04^{r-2}$$ <strong>(c)</strong> $$84\\text{ min } 0\\text{ s}$$",
                "feedback": "Check your value for $N$ (the number of terms in your geometric series) in Part (c). The slow-down phase runs from $r=3$ to $r=10$, which contains $10-3+1 = 8$ terms, not $7$ terms."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Checking Calculations",
            "content": "For this question, when converting fractional minutes to seconds, always make sure you multiply the decimal by $60$ rather than simply reading the decimal directly as seconds. A value of $0.662$ minutes is roughly two-thirds of a minute, which is exactly $40$ seconds."
        }
    },
    {
        "id": "004056",
        "major_area": "Differentiation",
        "topic": "Differentiation",
        "subtopic": [
            "Product Rule",
            "Calculus Modelling"
        ],
        "img": "images/p1/004056.png",
        "question": "A curve has the equation:<br>$$\\text{f}(x) = 15\\text{e}^{-0.5x}\\sin x, \\quad x \\ge 0$$<br><strong>(a)</strong> Show that the $x$-coordinates of the turning points of the curve satisfy the equation $\\tan x = 2$.<br><br>The diagram shows a sketch of part of the curve with equation $y = \\text{f}(x)$.<br><strong>(b)</strong> Sketch the graph of $H$ against $t$ where:<br>$$H(t) = \\left|15\\text{e}^{-0.5t}\\sin t\\right|, \\quad t \\ge 0$$<br>showing the long-term behaviour of this curve.<br><br>The function $H(t)$ is used to model the height, in metres, of a ball above the ground $t$ seconds after it has been kicked. Using this model, find:<br><strong>(c)</strong> the maximum height of the ball above the ground between the first and second bounce, giving your answer to 3 significant figures.<br><strong>(d)</strong> Explain why this model should not be used to predict the time of each bounce.",
        "steps": [
            "<strong>Part (a):</strong> We find the derivative of $\\text{f}(x)$ with respect to $x$ using the <strong>Product Rule</strong>, where $u = 15\\text{e}^{-0.5x}$ and $v = \\sin x$:<br>$$u' = -7.5\\text{e}^{-0.5x}$$<br>$$v' = \\cos x$$<br>$$\\text{f}'(x) = u'v + uv' = -7.5\\text{e}^{-0.5x}\\sin x + 15\\text{e}^{-0.5x}\\cos x$$",
            "Factorising out the exponential term:<br>$$\\text{f}'(x) = 7.5\\text{e}^{-0.5x} \\left( 2\\cos x - \\sin x \\right)$$<br>At turning points, $\\text{f}'(x) = 0$. Since $\\text{e}^{-0.5x} \\ne 0$ for all real $x$, we require:<br>$$2\\cos x - \\sin x = 0 \\implies 2\\cos x = \\sin x \\implies \\tan x = 2$$",
            "<strong>Part (b):</strong> The graph of $H(t) = \\left|15\\text{e}^{-0.5t}\\sin t\\right|$ is a damped sine wave with all its negative lobes reflected above the $t$-axis. This models the successive decreasing bounces of the ball tending to $0$ as $t \\to \\infty$.<br><br>Here is the completed sketch showing this long-term behaviour:<br><img src='images/p1/004056_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
            "<strong>Part (c):</strong> Bounces occur when $H(t) = 0 \\implies \\sin t = 0 \\implies t = n\\pi$.<br>The interval between the first bounce ($t = \\pi$) and the second bounce ($t = 2\\pi$) is $\\pi < t < 2\\pi$.<br>The turning point in this interval occurs where $\\tan t = 2$, which in the third quadrant is:<br>$$t = \\pi + \\tan^{-1}(2) \\approx 3.14159 + 1.10715 \\approx 4.24874\\text{ seconds}$$",
            "Substituting this value into the model to find the maximum height:<br>$$H(4.24874) = \\left|15\\text{e}^{-0.5(4.24874)}\\sin(4.24874)\\right| \\approx \\left|15(0.119508)(-0.894427)\\right| \\approx 1.6033\\text{ m}$$<br>Therefore, the maximum height is <strong>$1.60\\text{ m}$</strong> (to 3 significant figures).",
            "<strong>Part (d):</strong> Under this model, the bounces are forced to occur at fixed intervals of exactly $\\pi$ seconds because of the $\\sin t$ term.<br>In reality, as the ball loses energy, the time between consecutive bounces decreases. Therefore, this model is physically unrealistic and must not be used to predict bounce times.",
            "Final Answer: <strong>(a)</strong> $$\\tan x = 2\\ \\text{is verified}$$ <strong>(b)</strong> $$Bouncing\\ curves\\ sketched\\ above\\ the\\ t-axis$$ <strong>(c)</strong> $$1.60\\text{ m}$$ <strong>(d)</strong> $$Bounces\\ are\\ forced\\ at\\ constant\\ intervals\\ of\\ \\pi\\ \\text{seconds}$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$\\tan x = 2$$ <strong>(b)</strong> $$Bouncing\\ curves\\ sketched$$ <strong>(c)</strong> $$1.59\\text{ m}$$ <strong>(d)</strong> $$Bounces\\ occur\\ at\\ constant\\ intervals$$",
                "feedback": "You probably made an arithmetic rounding error in Part (c) by evaluating the expression using rounded intermediate values. Retaining full calculator precision yields $H(4.24874) = 1.6033\\text{ m}$, which rounds to $1.60\\text{ m}$ to 3 significant figures."
            },
            {
                "ans": "<strong>(a)</strong> $$\\tan x = 0.5$$ <strong>(b)</strong> $$Bouncing\\ curves\\ sketched$$ <strong>(c)</strong> $$1.60\\text{ m}$$ <strong>(d)</strong> $$Bounces\\ occur\\ at\\ constant\\ intervals$$",
                "feedback": "Check your division in Part (a). When dividing $2\\cos x = \\sin x$ by $\\cos x$ on both sides, you obtain $2 = \\frac{\\sin x}{\\cos x}$, which simplifies to $\\tan x = 2$, not $\\tan x = 0.5$."
            },
            {
                "ans": "<strong>(a)</strong> $$\\tan x = 2$$ <strong>(b)</strong> $$Bouncing\\ curves\\ sketched$$ <strong>(c)</strong> $$0.802\\text{ m}$$ <strong>(d)</strong> $$The\\ model\\ is\\ completely\\ accurate$$",
                "feedback": "Check your quadrant value in Part (c). The interval between the first and second bounce is $\\pi < t < 2\\pi$, which is the third quadrant. It appears you calculated the turning point in the first quadrant ($t = \\tan^{-1}(2) \\approx 1.11\\text{ s}$), which represents the peak of the first lobe before the first bounce."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Real-world Limitations",
            "content": "This question is a classic example of evaluating the limitations of a mathematical model. While the exponential multiplier successfully models the decay in height, the trigonometric term enforces a constant period, which contradicts the real-world physics of decreasing bounce periods. Always look for these simplified assumptions in modelling tasks."
        }
    },
    {
        "id": "004057",
        "major_area": "Differentiation",
        "topic": "Differentiation",
        "subtopic": [
            "Product Rule",
            "Calculus Modelling"
        ],
        "img": "images/p1/004057.png",
        "question": "A curve has the equation:<br>$$\\text{f}(x) = 8\\text{e}^{-0.2x}\\sin x, \\quad x \\ge 0$$<br><strong>(a)</strong> Show that the $x$-coordinates of the turning points of the curve satisfy the equation $\\tan x = 5$.<br><br>The diagram shows a sketch of part of the curve with equation $y = \\text{f}(x)$.<br><strong>(b)</strong> Sketch the graph of $H$ against $t$ where:<br>$$H(t) = \\left|8\\text{e}^{-0.2t}\\sin t\\right|, \\quad t \\ge 0$$<br>showing the long-term behaviour of this curve.<br><br>The function $H(t)$ is used to model the height, in metres, of a ball above the ground $t$ seconds after it has been kicked. Using this model, find:<br><strong>(c)</strong> the maximum height of the ball above the ground between the first and second bounce, giving your answer to 3 significant figures.<br><strong>(d)</strong> Explain why this model should not be used to predict the time of each bounce.",
        "steps": [
            "<strong>Part (a):</strong> We find the derivative of $\\text{f}(x)$ with respect to $x$ using the <strong>Product Rule</strong>, where $u = 8\\text{e}^{-0.2x}$ and $v = \\sin x$:<br>$$u' = -1.6\\text{e}^{-0.2x}$$<br>$$v' = \\cos x$$<br>$$\\text{f}'(x) = u'v + uv' = -1.6\\text{e}^{-0.2x}\\sin x + 8\\text{e}^{-0.2x}\\cos x$$",
            "Factorising out the exponential term:<br>$$\\text{f}'(x) = 1.6\\text{e}^{-0.2x} \\left( 5\\cos x - \\sin x \\right)$$<br>At turning points, $\\text{f}'(x) = 0$. Since $\\text{e}^{-0.2x} \\ne 0$ for all real $x$, we require:<br>$$5\\cos x - \\sin x = 0 \\implies 5\\cos x = \\sin x \\implies \\tan x = 5$$",
            "<strong>Part (b):</strong> The graph of $H(t) = \\left|8\\text{e}^{-0.2t}\\sin t\\right|$ is a damped sine wave with all its negative lobes reflected above the $t$-axis. This models the successive decreasing bounces of the ball tending to $0$ as $t \\to \\infty$.<br><br>Here is the completed sketch showing this long-term behaviour:<br><img src='images/p1/004057_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
            "<strong>Part (c):</strong> Bounces occur when $H(t) = 0 \\implies \\sin t = 0 \\implies t = n\\pi$.<br>The interval between the first bounce ($t = \\pi$) and the second bounce ($t = 2\\pi$) is $\\pi < t < 2\\pi$.<br>The turning point in this interval occurs where $\\tan t = 5$, which in the third quadrant is:<br>$$t = \\pi + \\tan^{-1}(5) \\approx 3.14159 + 1.37340 \\approx 4.51499\\text{ seconds}$$",
            "Substituting this value into the model to find the maximum height:<br>$$H(4.51499) = \\left|8\\text{e}^{-0.2(4.51499)}\\sin(4.51499)\\right| \\approx \\left|8(0.40535)(-0.980581)\\right| \\approx 3.180\\text{ m}$$<br>Therefore, the maximum height is <strong>$3.18\\text{ m}$</strong> (to 3 significant figures).",
            "<strong>Part (d):</strong> Under this model, the bounces are forced to occur at fixed intervals of exactly $\\pi$ seconds because of the $\\sin t$ term.<br>In reality, as the ball loses energy, the time between consecutive bounces decreases. Therefore, this model is physically unrealistic and must not be used to predict bounce times.",
            "Final Answer: <strong>(a)</strong> $$\\tan x = 5\\ \\text{is verified}$$ <strong>(b)</strong> $$Bouncing\\ curves\\ sketched\\ above\\ the\\ t-axis$$ <strong>(c)</strong> $$3.18\\text{ m}$$ <strong>(d)</strong> $$Bounces\\ are\\ forced\\ at\\ constant\\ intervals\\ of\\ \\pi\\ \\text{seconds}$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$\\tan x = 5$$ <strong>(b)</strong> $$Bouncing\\ curves\\ sketched$$ <strong>(c)</strong> $$3.18\\text{ m}$$ <strong>(d)</strong> $$The\\ model\\ is\\ highly\\ physically\\ accurate$$",
                "feedback": "Check your reasoning for Part (d). The model is strictly periodic and forces bounces at fixed multiples of $\\pi$ seconds, ignoring the natural physical decay in the bounce period. Therefore, it is physically inaccurate for predicting bounce times."
            },
            {
                "ans": "<strong>(a)</strong> $$\\tan x = 0.2$$ <strong>(b)</strong> $$Bouncing\\ curves\\ sketched$$ <strong>(c)</strong> $$3.18\\text{ m}$$ <strong>(d)</strong> $$Bounces\\ occur\\ at\\ constant\\ intervals$$",
                "feedback": "Check your division in Part (a). When dividing $5\\cos x = \\sin x$ by $\\cos x$ on both sides, you obtain $5 = \\frac{\\sin x}{\\cos x}$, which simplifies to $\\tan x = 5$, not $\\tan x = 0.2$."
            },
            {
                "ans": "<strong>(a)</strong> $$\\tan x = 5$$ <strong>(b)</strong> $$Bouncing\\ curves\\ sketched$$ <strong>(c)</strong> $$1.59\\text{ m}$$ <strong>(d)</strong> $$Bounces\\ occur\\ at\\ constant\\ intervals$$",
                "feedback": "Check your quadrant value in Part (c). The interval between the first and second bounce is $\\pi < t < 2\\pi$, which is the third quadrant. It appears you calculated the turning point in the first quadrant ($t = \\tan^{-1}(5) \\approx 1.37\\text{ s}$), which represents the peak of the first lobe before the first bounce."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Product Rule Coefficients",
            "content": "In this question, when factorising the exponential term $\\text{e}^{-0.2x}$ from the derivative, you can factorise out its coefficient ($1.6$) as well. This reduces the brackets to $5\\cos x - \\sin x$, making the division to obtain $\\tan x = 5$ exceptionally clean."
        }
    },
    {
        "id": "004058",
        "major_area": "Differentiation",
        "topic": "Differentiation",
        "subtopic": [
            "Product Rule",
            "Calculus Modelling"
        ],
        "img": "images/p1/004058.png",
        "question": "A curve has the equation:<br>$$\\text{f}(x) = 12\\text{e}^{-\\frac{1}{3}x}\\sin x, \\quad x \\ge 0$$<br><strong>(a)</strong> Show that the $x$-coordinates of the turning points of the curve satisfy the equation $\\tan x = 3$.<br><br>The diagram shows a sketch of part of the curve with equation $y = \\text{f}(x)$.<br><strong>(b)</strong> Sketch the graph of $H$ against $t$ where:<br>$$H(t) = \\left|12\\text{e}^{-\\frac{1}{3}t}\\sin t\\right|, \\quad t \\ge 0$$<br>showing the long-term behaviour of this curve.<br><br>The function $H(t)$ is used to model the height, in metres, of a ball above the ground $t$ seconds after it has been kicked. Using this model, find:<br><strong>(c)</strong> the maximum height of the ball above the ground between the first and second bounce, giving your answer to 3 significant figures.<br><strong>(d)</strong> Explain why this model should not be used to predict the time of each bounce.",
        "steps": [
            "<strong>Part (a):</strong> We find the derivative of $\\text{f}(x)$ with respect to $x$ using the <strong>Product Rule</strong>, where $u = 12\\text{e}^{-\\frac{1}{3}x}$ and $v = \\sin x$:<br>$$u' = -4\\text{e}^{-\\frac{1}{3}x}$$<br>$$v' = \\cos x$$<br>$$\\text{f}'(x) = u'v + uv' = -4\\text{e}^{-\\frac{1}{3}x}\\sin x + 12\\text{e}^{-\\frac{1}{3}x}\\cos x$$",
            "Factorising out the exponential term:<br>$$\\text{f}'(x) = 4\\text{e}^{-\\frac{1}{3}x} \\left( 3\\cos x - \\sin x \\right)$$<br>At turning points, $\\text{f}'(x) = 0$. Since $\\text{e}^{-\\frac{1}{3}x} \\ne 0$ for all real $x$, we require:<br>$$3\\cos x - \\sin x = 0 \\implies 3\\cos x = \\sin x \\implies \\tan x = 3$$",
            "<strong>Part (b):</strong> The graph of $H(t) = \\left|12\\text{e}^{-\\frac{1}{3}t}\\sin t\\right|$ is a damped sine wave with all its negative lobes reflected above the $t$-axis. This models the successive decreasing bounces of the ball tending to $0$ as $t \\to \\infty$.<br><br>Here is the completed sketch showing this long-term behaviour:<br><img src='images/p1/004058_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
            "<strong>Part (c):</strong> Bounces occur when $H(t) = 0 \\implies \\sin t = 0 \\implies t = n\\pi$.<br>The interval between the first bounce ($t = \\pi$) and the second bounce ($t = 2\\pi$) is $\\pi < t < 2\\pi$.<br>The turning point in this interval occurs where $\\tan t = 3$, which in the third quadrant is:<br>$$t = \\pi + \\tan^{-1}(3) \\approx 3.14159 + 1.24905 \\approx 4.39064\\text{ seconds}$$",
            "Substituting this value into the model to find the maximum height:<br>$$H(4.39064) = \\left|12\\text{e}^{-\\frac{1}{3}(4.39064)}\\sin(4.39064)\\right| \\approx \\left|12(0.231415)(-0.948683)\\right| \\approx 2.634\\text{ m}$$<br>Therefore, the maximum height is <strong>$2.63\\text{ m}$</strong> (to 3 significant figures).",
            "<strong>Part (d):</strong> Under this model, the bounces are forced to occur at fixed intervals of exactly $\\pi$ seconds because of the $\\sin t$ term.<br>In reality, as the ball loses energy, the time between consecutive bounces decreases. Therefore, this model is physically unrealistic and must not be used to predict bounce times.",
            "Final Answer: <strong>(a)</strong> $$\\tan x = 3\\ \\text{is verified}$$ <strong>(b)</strong> $$Bouncing\\ curves\\ sketched\\ above\\ the\\ t-axis$$ <strong>(c)</strong> $$2.63\\text{ m}$$ <strong>(d)</strong> $$Bounces\\ are\\ forced\\ at\\ constant\\ intervals\\ of\\ \\pi\\ \\text{seconds}$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$\\tan x = 3$$ <strong>(b)</strong> $$Bouncing\\ curves\\ sketched$$ <strong>(c)</strong> $$2.63\\text{ m}$$ <strong>(d)</strong> $$Air\\ resistance\\ makes\\ the\\ model\\ highly\\ accurate$$",
                "feedback": "Check your reasoning for Part (d). Air resistance would actually cause the ball to lose energy and bounce more frequently, meaning the intervals would decrease. The model's rigid periodicity is its main limitation."
            },
            {
                "ans": "<strong>(a)</strong> $$\\tan x = \\dfrac{1}{3}$$ <strong>(b)</strong> $$Bouncing\\ curves\\ sketched$$ <strong>(c)</strong> $$2.63\\text{ m}$$ <strong>(d)</strong> $$Bounces\\ occur\\ at\\ constant\\ intervals$$",
                "feedback": "Check your division in Part (a). When dividing $3\\cos x = \\sin x$ by $\\cos x$ on both sides, you obtain $3 = \\frac{\\sin x}{\\cos x}$, which simplifies to $\\tan x = 3$, not $\\tan x = \\frac{1}{3}$."
            },
            {
                "ans": "<strong>(a)</strong> $$\\tan x = 3$$ <strong>(b)</strong> $$Bouncing\\ curves\\ sketched$$ <strong>(c)</strong> $$1.14\\text{ m}$$ <strong>(d)</strong> $$Bounces\\ occur\\ at\\ constant\\ intervals$$",
                "feedback": "Check your quadrant value in Part (c). The interval between the first and second bounce is $\\pi < t < 2\\pi$, which is the third quadrant. It appears you calculated the turning point in the first quadrant ($t = \\tan^{-1}(3) \\approx 1.25\\text{ s}$), which represents the peak of the first lobe before the first bounce."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Damped Oscillations",
            "content": "Damped oscillations of the form $A\\text{e}^{-kx}\\sin x$ are used extensively in physics to model real-world decay systems. While the mathematical envelope decays smoothly, always remember that trigonometric components assume a constant frequency, which is often the primary limitation of such models in physical sciences."
        }
    },
    {
        "id": "004059",
        "major_area": "Differentiation",
        "topic": "Differentiation",
        "subtopic": [
            "Product Rule",
            "Calculus Modelling"
        ],
        "img": "images/p1/004059.png",
        "question": "A curve has the equation:<br>$$\\text{f}(x) = 6\\text{e}^{-0.125x}\\sin x, \\quad x \\ge 0$$<br><strong>(a)</strong> Show that the $x$-coordinates of the turning points of the curve satisfy the equation $\\tan x = 8$.<br><br>The diagram shows a sketch of part of the curve with equation $y = \\text{f}(x)$.<br><strong>(b)</strong> Sketch the graph of $H$ against $t$ where:<br>$$H(t) = \\left|6\\text{e}^{-0.125t}\\sin t\\right|, \\quad t \\ge 0$$<br>showing the long-term behaviour of this curve.<br><br>The function $H(t)$ is used to model the height, in metres, of a ball above the ground $t$ seconds after it has been kicked. Using this model, find:<br><strong>(c)</strong> the maximum height of the ball above the ground between the first and second bounce, giving your answer to 3 significant figures.<br><strong>(d)</strong> Explain why this model should not be used to predict the time of each bounce.",
        "steps": [
            "<strong>Part (a):</strong> We find the derivative of $\\text{f}(x)$ with respect to $x$ using the <strong>Product Rule</strong>, where $u = 6\\text{e}^{-0.125x}$ and $v = \\sin x$:<br>$$u' = -0.75\\text{e}^{-0.125x}$$<br>$$v' = \\cos x$$<br>$$\\text{f}'(x) = u'v + uv' = -0.75\\text{e}^{-0.125x}\\sin x + 6\\text{e}^{-0.125x}\\cos x$$",
            "Factorising out the exponential term:<br>$$\\text{f}'(x) = 0.75\\text{e}^{-0.125x} \\left( 8\\cos x - \\sin x \\right)$$<br>At turning points, $\\text{f}'(x) = 0$. Since $\\text{e}^{-0.125x} \\ne 0$ for all real $x$, we require:<br>$$8\\cos x - \\sin x = 0 \\implies 8\\cos x = \\sin x \\implies \\tan x = 8$$",
            "<strong>Part (b):</strong> The graph of $H(t) = \\left|6\\text{e}^{-0.125t}\\sin t\\right|$ is a damped sine wave with all its negative lobes reflected above the $t$-axis. This models the successive decreasing bounces of the ball tending to $0$ as $t \\to \\infty$.<br><br>Here is the completed sketch showing this long-term behaviour:<br><img src='images/p1/004059_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
            "<strong>Part (c):</strong> Bounces occur when $H(t) = 0 \\implies \\sin t = 0 \\implies t = n\\pi$.<br>The interval between the first bounce ($t = \\pi$) and the second bounce ($t = 2\\pi$) is $\\pi < t < 2\\pi$.<br>The turning point in this interval occurs where $\\tan t = 8$, which in the third quadrant is:<br>$$t = \\pi + \\tan^{-1}(8) \\approx 3.14159 + 1.44644 \\approx 4.58803\\text{ seconds}$$",
            "Substituting this value into the model to find the maximum height:<br>$$H(4.58803) = \\left|6\\text{e}^{-0.125(4.58803)}\\sin(4.58803)\\right| \\approx \\left|6(0.563546)(-0.992278)\\right| \\approx 3.3551\\text{ m}$$<br>Therefore, the maximum height is <strong>$3.36\\text{ m}$</strong> (to 3 significant figures).",
            "<strong>Part (d):</strong> Under this model, the bounces are forced to occur at fixed intervals of exactly $\\pi$ seconds because of the $\\sin t$ term.<br>In reality, as the ball loses energy, the time between consecutive bounces decreases. Therefore, this model is physically unrealistic and must not be used to predict bounce times.",
            "Final Answer: <strong>(a)</strong> $$\\tan x = 8\\ \\text{is verified}$$ <strong>(b)</strong> $$Bouncing\\ curves\\ sketched\\ above\\ the\\ t-axis$$ <strong>(c)</strong> $$3.36\\text{ m}$$ <strong>(d)</strong> $$Bounces\\ are\\ forced\\ at\\ constant\\ intervals\\ of\\ \\pi\\ \\text{seconds}$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$\\tan x = 8$$ <strong>(b)</strong> $$Bouncing\\ curves\\ sketched$$ <strong>(c)</strong> $$3.36\\text{ m}$$ <strong>(d)</strong> $$The\\ bounce\\ intervals\\ will\\ get\\ progressively\\ shorter$$",
                "feedback": "Check your reasoning for Part (d). While real-world bounce intervals do get shorter, this mathematical model uses a strictly periodic $\\sin t$ term, which forces the bounce intervals to remain completely constant."
            },
            {
                "ans": "<strong>(a)</strong> $$\\tan x = 0.125$$ <strong>(b)</strong> $$Bouncing\\ curves\\ sketched$$ <strong>(c)</strong> $$3.36\\text{ m}$$ <strong>(d)</strong> $$Bounces\\ occur\\ at\\ constant\\ intervals$$",
                "feedback": "Check your division in Part (a). When dividing $8\\cos x = \\sin x$ by $\\cos x$ on both sides, you obtain $8 = \\frac{\\sin x}{\\cos x}$, which simplifies to $\\tan x = 8$, not $\\tan x = 0.125$."
            },
            {
                "ans": "<strong>(a)</strong> $$\\tan x = 8$$ <strong>(b)</strong> $$Bouncing\\ curves\\ sketched$$ <strong>(c)</strong> $$1.98\\text{ m}$$ <strong>(d)</strong> $$Bounces\\ occur\\ at\\ constant\\ intervals$$",
                "feedback": "Check your quadrant value in Part (c). The interval between the first and second bounce is $\\pi < t < 2\\pi$, which is the third quadrant. It appears you calculated the turning point in the first quadrant ($t = \\tan^{-1}(8) \\approx 1.45\\text{ s}$), which represents the peak of the first lobe before the first bounce."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: High Value Tangents",
            "content": "When $\\tan x = 8$, the angle is very close to $90^\\circ$ ($\\frac{\\pi}{2}$ radians). This means the peak of the bounce is shifted slightly to the left compared to a standard un-damped sine wave. This horizontal shift is a natural consequence of exponential damping."
        }
    },
    {
        "id": "004060",
        "major_area": "Differentiation",
        "topic": "Differentiation",
        "subtopic": [
            "Product Rule",
            "Calculus Modelling"
        ],
        "img": "images/p1/004060.png",
        "question": "A curve has the equation:<br>$$\\text{f}(x) = 20\\text{e}^{-\\frac{1}{6}x}\\sin x, \\quad x \\ge 0$$<br><strong>(a)</strong> Show that the $x$-coordinates of the turning points of the curve satisfy the equation $\\tan x = 6$.<br><br>The diagram shows a sketch of part of the curve with equation $y = \\text{f}(x)$.<br><strong>(b)</strong> Sketch the graph of $H$ against $t$ where:<br>$$H(t) = \\left|20\\text{e}^{-\\frac{1}{6}t}\\sin t\\right|, \\quad t \\ge 0$$<br>showing the long-term behaviour of this curve.<br><br>The function $H(t)$ is used to model the height, in metres, of a ball above the ground $t$ seconds after it has been kicked. Using this model, find:<br><strong>(c)</strong> the maximum height of the ball above the ground between the first and second bounce, giving your answer to 3 significant figures.<br><strong>(d)</strong> Explain why this model should not be used to predict the time of each bounce.",
        "steps": [
            "<strong>Part (a):</strong> We find the derivative of $\\text{f}(x)$ with respect to $x$ using the <strong>Product Rule</strong>, where $u = 20\\text{e}^{-\\frac{1}{6}x}$ and $v = \\sin x$:<br>$$u' = -\\frac{10}{3}\\text{e}^{-\\frac{1}{6}x}$$<br>$$v' = \\cos x$$<br>$$\\text{f}'(x) = u'v + uv' = -\\frac{10}{3}\\text{e}^{-\\frac{1}{6}x}\\sin x + 20\\text{e}^{-\\frac{1}{6}x}\\cos x$$",
            "Factorising out the exponential term:<br>$$\\text{f}'(x) = \\frac{10}{3}\\text{e}^{-\\frac{1}{6}x} \\left( 6\\cos x - \\sin x \\right)$$<br>At turning points, $\\text{f}'(x) = 0$. Since $\\text{e}^{-\\frac{1}{6}x} \\ne 0$ for all real $x$, we require:<br>$$6\\cos x - \\sin x = 0 \\implies 6\\cos x = \\sin x \\implies \\tan x = 6$$",
            "<strong>Part (b):</strong> The graph of $H(t) = \\left|20\\text{e}^{-\\frac{1}{6}t}\\sin t\\right|$ is a damped sine wave with all its negative lobes reflected above the $t$-axis. This models the successive decreasing bounces of the ball tending to $0$ as $t \\to \\infty$.<br><br>Here is the completed sketch showing this long-term behaviour:<br><img src='images/p1/004060_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
            "<strong>Part (c):</strong> Bounces occur when $H(t) = 0 \\implies \\sin t = 0 \\implies t = n\\pi$.<br>The interval between the first bounce ($t = \\pi$) and the second bounce ($t = 2\\pi$) is $\\pi < t < 2\\pi$.<br>The turning point in this interval occurs where $\\tan t = 6$, which in the third quadrant is:<br>$$t = \\pi + \\tan^{-1}(6) \\approx 3.14159 + 1.40565 \\approx 4.54724\\text{ seconds}$$",
            "Substituting this value into the model to find the maximum height:<br>$$H(4.54724) = \\left|20\\text{e}^{-\\frac{1}{6}(4.54724)}\\sin(4.54724)\\right| \\approx \\left|20(0.468656)(-0.986394)\\right| \\approx 9.2464\\text{ m}$$<br>Therefore, the maximum height is <strong>$9.25\\text{ m}$</strong> (to 3 significant figures).",
            "<strong>Part (d):</strong> Under this model, the bounces are forced to occur at fixed intervals of exactly $\\pi$ seconds because of the $\\sin t$ term.<br>In reality, as the ball loses energy, the time between consecutive bounces decreases. Therefore, this model is physically unrealistic and must not be used to predict bounce times.",
            "Final Answer: <strong>(a)</strong> $$\\tan x = 6\\ \\text{is verified}$$ <strong>(b)</strong> $$Bouncing\\ curves\\ sketched\\ above\\ the\\ t-axis$$ <strong>(c)</strong> $$9.25\\text{ m}$$ <strong>(d)</strong> $$Bounces\\ are\\ forced\\ at\\ constant\\ intervals\\ of\\ \\pi\\ \\text{seconds}$$"
        ],
        "pi_options": [
            {
                "ans": "<strong>(a)</strong> $$\\tan x = 6$$ <strong>(b)</strong> $$Bouncing\\ curves\\ sketched$$ <strong>(c)</strong> $$9.26\\text{ m}$$ <strong>(d)</strong> $$Bounces\\ are\\ forced\\ at\\ constant\\ intervals$$",
                "feedback": "You probably made an arithmetic rounding error in Part (c) by evaluating the expression using rounded intermediate values. Retaining full calculator precision yields $H(4.54724) = 9.2464\\text{ m}$, which rounds to $9.25\\text{ m}$ to 3 significant figures."
            },
            {
                "ans": "<strong>(a)</strong> $$\\tan x = \\dfrac{1}{6}$$ <strong>(b)</strong> $$Bouncing\\ curves\\ sketched$$ <strong>(c)</strong> $$9.25\\text{ m}$$ <strong>(d)</strong> $$Bounces\\ are\\ forced\\ at\\ constant\\ intervals$$",
                "feedback": "Check your division in Part (a). When dividing $6\\cos x = \\sin x$ by $\\cos x$ on both sides, you obtain $6 = \\frac{\\sin x}{\\cos x}$, which simplifies to $\\tan x = 6$, not $\\tan x = \\frac{1}{6}$."
            },
            {
                "ans": "<strong>(a)</strong> $$\\tan x = 6$$ <strong>(b)</strong> $$Bouncing\\ curves\\ sketched$$ <strong>(c)</strong> $$1.54\\text{ m}$$ <strong>(d)</strong> $$Bounces\\ are\\ forced\\ at\\ constant\\ intervals$$",
                "feedback": "Check your quadrant value in Part (c). The interval between the first and second bounce is $\\pi < t < 2\\pi$, which is the third quadrant. It appears you calculated the turning point in the first quadrant ($t = \\tan^{-1}(6) \\approx 1.41\\text{ s}$), which represents the peak of the first lobe before the first bounce."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Product Rule Fractional Derivatives",
            "content": "When applying the Product Rule to exponential functions with fractional coefficients like $20\\text{e}^{-\\frac{1}{6}x}$, keep your derivatives in exact fraction form ($u' = -\\frac{10}{3}\\text{e}^{-\\frac{1}{6}x}$) rather than decimals. This allows you to factorise the common term cleanly and secures your algebraic proofs."
        }
    }








];
