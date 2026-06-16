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
    }

];
