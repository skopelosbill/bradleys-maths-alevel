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
  "img": "/image/p1/004006.png"
  "q": "Figure A shows a sketch of the curve $y = \\sin x$, where $x$ is measured in radians.<br>A copy of the sketch is provided in Diagram A.<br><br>(a) Use Diagram A to explain why the equation $$\\sin x - 2x + \\tfrac14 = 0$$ has exactly one real root.<br>(b) Let the root be $\\beta$. Given that $\\beta$ is small, use the small-angle approximation for $\\sin x$ to estimate the value of $\\beta$ to 3 decimal places.",
  "steps": [
    "From the diagram, the curve $y = \\sin x$ starts at the origin with gradient 1, while the line $y = 2x - \\tfrac14$ starts below the curve and has a steeper gradient.",
    "Because the line is steeper, it crosses the curve once for a small positive value of $x$, and afterwards the line increases without bound while $\\sin x$ remains between $-1$ and $1$.",
    "Therefore the equation has exactly one real root.",
    "Using the small-angle approximation $\\sin x \\approx x$, substitute into the equation: $$x - 2x + \\tfrac14 = 0.$$",
    "Simplifying gives $$-x + \\tfrac14 = 0 \\implies x = \\tfrac14.$$",
    "Final Answer: $$\\beta \\approx 0.250.$$"
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
  "img":   "img": "/image/p1/004007.png"
  "q": "Figure B shows a sketch of the curve $y = \\tan x$ for values of $x$ close to zero.<br>A copy of the sketch is provided in Diagram B.<br><br>(a) Use Diagram B to explain why the equation $$\\tan x - 3x + 0.2 = 0$$ has exactly one real root in the interval $-0.5 < x < 0.5$.<br>(b) Let the root be $\\gamma$. Given that $\\gamma$ is small, use the small-angle approximation for $\\tan x$ to estimate the value of $\\gamma$ to 3 decimal places.",
  "steps": [
    "From the diagram, $y = \\tan x$ is increasing and passes through the origin with gradient 1.",
    "The line $y = 3x - 0.2$ is steeper and starts below the curve at $x = 0$.",
    "The two graphs cross exactly once in the interval shown, so the equation has exactly one real root.",
    "Using the small-angle approximation $\\tan x \\approx x$, substitute into the equation: $$x - 3x + 0.2 = 0.$$",
    "Simplifying gives $$-2x + 0.2 = 0 \\implies x = 0.1.$$",
    "Final Answer: $$\\gamma \\approx 0.100.$$"
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
  "img":   "img": "/image/p1/004008.png",
  "q": "Figure C shows a sketch of the curve $y = \\cos(2x)$, where $x$ is measured in radians.<br>A copy of the sketch is provided in Diagram C.<br><br>(a) Use Diagram C to explain why the equation $$\\cos(2x) - x - \\tfrac13 = 0$$ has exactly one real root.<br>(b) Let the root be $\\delta$. Given that $\\delta$ is small, use the small-angle approximation for $\\cos(2x)$ to estimate the value of $\\delta$ to 3 decimal places.",
  "steps": [
    "From the diagram, $y = \\cos(2x)$ starts at 1 when $x = 0$, while the line $y = x + \\tfrac13$ starts at $\\tfrac13$ and increases.",
    "The curve decreases while the line increases, so they cross once near the origin.",
    "After this, the line grows without bound while the cosine curve remains between -1 and 1, so there are no further intersections.",
    "Using the small-angle approximation $\\cos(2x) \\approx 1 - 2x^2$, substitute into the equation: $$1 - 2x^2 - x - \\tfrac13 = 0.$$",
    "Simplifying gives $$2x^2 + x - \\tfrac23 = 0.$$",
    "Solving the quadratic gives $$x = \\frac{-1 + \\sqrt{19/3}}{4} \\approx 0.379.$$",
    "Final Answer: $$\\delta \\approx 0.379.$$"
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
  "img":   "img": "/image/p1/004009.png",
  "q": "Figure D shows a sketch of the curve $y = e^{-x}$, where $x$ is measured in radians.<br>A copy of the sketch is provided in Diagram D.<br><br>(a) Use Diagram D to explain why the equation $$e^{-x} - 1.5x - 0.8 = 0$$ has exactly one real root.<br>(b) Let the root be $\\varepsilon$. Given that $\\varepsilon$ is small, use the small-angle approximation for $e^{-x}$ to estimate the value of $\\varepsilon$ to 3 decimal places.",
  "steps": [
    "From the diagram, $y = e^{-x}$ decreases from 1 as $x$ increases, while the line $y = 1.5x + 0.8$ increases.",
    "The two graphs cross once near the origin and do not meet again because the exponential decays while the line grows without bound.",
    "Using the small-angle approximation $e^{-x} \\approx 1 - x$, substitute into the equation: $$1 - x - 1.5x - 0.8 = 0.$$",
    "Simplifying gives $$0.2 - 2.5x = 0 \\implies x = 0.08.$$",
    "Final Answer: $$\\varepsilon \\approx 0.080.$$"
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
  "img":   "img": "/image/p1/004010,png",
  "q": "Figure E shows a sketch of the curve $y = \\sin(3x) + 0.5$, where $x$ is measured in radians.<br>A copy of the sketch is provided in Diagram E.<br><br>(a) Use Diagram E to explain why the equation $$\\sin(3x) + 0.5 - 2x = 0$$ has exactly one real root.<br>(b) Let the root be $\\zeta$. Given that $\\zeta$ is small, use the small-angle approximation for $\\sin(3x)$ to estimate the value of $\\zeta$ to 3 decimal places.",
  "steps": [
    "From the diagram, $y = \\sin(3x) + 0.5$ starts at 0.5 with initial gradient about 3, while the line $y = 2x$ starts at the origin with gradient 2.",
    "The curve begins above the line and crosses it once for a small negative value of $x$.",
    "After this, the line continues to increase while the curve oscillates, so there are no further intersections.",
    "Using the small-angle approximation $\\sin(3x) \\approx 3x$, substitute into the equation: $$3x + 0.5 - 2x = 0.$$",
    "Simplifying gives $$x + 0.5 = 0 \\implies x = -0.5.$$",
    "Final Answer: $$\\zeta \\approx -0.500.$$"
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
}

];
