window.ALEVEL_QUESTIONS = [
    {
        "id": "004151",
        "board": "OCR",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Numerical methods",
        "subtopic": [
            "Trapezium Rule",
            "Exponential Functions"
        ],
        "img": false,
        "question": "1. Use the trapezium rule, with four strips each of width 0.5, to estimate the value of:<br>$$\\int_0^2 e^{\\frac{1}{2}x^2} \\text{d}x$$<br>giving your answer correct to 3 significant figures.<br><br>2. Explain how the trapezium rule could be used to obtain a more accurate estimate of this integral.",
        "steps": [
            "For four strips of width $h = 0.5$ on the interval $[0, 2]$, the coordinate points are $x_0 = 0$, $x_1 = 0.5$, $x_2 = 1.0$, $x_3 = 1.5$, and $x_4 = 2.0$.",
            "Evaluate the function $f(x) = e^{\\frac{1}{2}x^2}$ at each of these coordinate points:<br>$$y_0 = f(0) = e^0 = 1$$<br>$$y_1 = f(0.5) = e^{0.125} \\approx 1.1331$$<br>$$y_2 = f(1.0) = e^{0.5} \\approx 1.6487$$<br>$$y_3 = f(1.5) = e^{1.125} \\approx 3.0802$$<br>$$y_4 = f(2.0) = e^2 \\approx 7.3891$$",
            "Apply the trapezium rule formula:<br>$$\\text{Estimate} = \\dfrac{h}{2} \\left[ y_0 + y_4 + 2(y_1 + y_2 + y_3) \\right]$$<br>$$\\text{Estimate} = \\dfrac{0.5}{2} \\left[ 1 + 7.3891 + 2(1.1331 + 1.6487 + 3.0802) \\right]$$",
            "Perform the internal arithmetic steps:<br>$$\\text{Estimate} = 0.25 \\left[ 8.3891 + 2(5.8620) \\right]$$<br>$$\\text{Estimate} = 0.25 \\left[ 8.3891 + 11.7240 \\right] = 0.25 \\left[ 20.1131 \\right] \\approx 5.028$$<br>Rounding to 3 significant figures gives $5.03$.",
            "To obtain a more accurate estimate of this integral, we could use more strips (increasing $n$). This reduces the width of each strip ($h$), meaning the straight-line tops of the trapezia will fit the actual curve of $y = e^{\\frac{1}{2}x^2}$ much more closely, reducing the error.<br><br>Final Answer: $$5.03$$"
        ],
        "pi_options": [
            {
                "ans": "$$10.1$$",
                "feedback": "You may have forgotten to divide the strip width by $2$ at the start of the formula. Remember that the multiplying factor is $\\dfrac{h}{2} = 0.25$, not $h = 0.5$."
            },
            {
                "ans": "$$3.56$$",
                "feedback": "It looks like you did not double the middle terms ($y_1 + y_2 + y_3$) inside the brackets. The trapezium rule formula is $\\dfrac{h}{2} \\left[ y_0 + y_n + 2(y_1 + y_2 + \\dots) \\right]$."
            },
            {
                "ans": "$$5.02$$",
                "feedback": "This is probably due to a premature rounding error in your intermediate steps. Always keep at least 4 decimal places in your calculations before applying the final 3 significant figures rounding."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Tracking the Boundaries",
            "content": "To avoid simple arithmetic mistakes under exam pressure, always write down your $x$ values and $y$ values in a small table first. Clearly label your 'end terms' ($y_0, y_n$) and your 'middle terms' ($y_1, \\dots, y_{n-1}$) before feeding them into the formula."
        }
    },
    {
        "id": "004152",
        "board": "OCR",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Numerical methods",
        "subtopic": [
            "Trapezium Rule",
            "Trigonometric Functions"
        ],
        "img": false,
        "question": "1. Use the trapezium rule, with four strips each of width $\\dfrac{\\pi}{8}$ radians, to estimate the value of:<br>$$\\int_0^{\\frac{\\pi}{2}} \\sin x \\text{d}x$$<br>giving your answer correct to 3 significant figures.<br><br>2. By considering the geometric shape of the curve $y = \\sin x$ on the interval $\\left[0, \\, \\dfrac{\\pi}{2}\\right]$, explain whether your estimate is an underestimate or an overestimate.",
        "steps": [
            "For four strips of width $h = \\dfrac{\\pi}{8}$ on the interval $\\left[0, \\, \\dfrac{\\pi}{2}\\right]$, the coordinate points are $x_0 = 0$, $x_1 = \\dfrac{\\pi}{8}$, $x_2 = \\dfrac{\\pi}{4}$, $x_3 = \\dfrac{3\\pi}{8}$, and $x_4 = \\dfrac{\\pi}{2}$.",
            "Evaluate the function $f(x) = \\sin x$ at each of these coordinate points, keeping high precision:<br>$$y_0 = \\sin(0) = 0$$<br>$$y_1 = \\sin\\left(\\dfrac{\\pi}{8}\\right) \\approx 0.3827$$<br>$$y_2 = \\sin\\left(\\dfrac{\\pi}{4}\\right) \\approx 0.7071$$<br>$$y_3 = \\sin\\left(\\dfrac{\\pi}{3}\\right) \\approx 0.9239$$<br>$$y_4 = \\sin\\left(\\dfrac{\\pi}{2}\\right) = 1$$",
            "Apply the trapezium rule formula:<br>$$\\text{Estimate} = \\dfrac{h}{2} \\left[ y_0 + y_4 + 2(y_1 + y_2 + y_3) \\right]$$<br>$$\\text{Estimate} = \\dfrac{\\pi}{16} \\left[ 0 + 1 + 2(0.3827 + 0.7071 + 0.9239) \\right]$$",
            "Perform the arithmetic steps:<br>$$\\text{Estimate} = \\dfrac{\\pi}{16} \\left[ 1 + 2(2.0137) \\right]$$<br>$$\\text{Estimate} = \\dfrac{\\pi}{16} \\left[ 1 + 4.0274 \\right] = \\dfrac{\\pi}{16} \\left[ 5.0274 \\right] \\approx 0.9871$$<br>Rounding to 3 significant figures gives $0.987$.",
            "To determine if this is an underestimate or an overestimate, we examine the curvature of $y = \\sin x$. On the interval $\\left[0, \\, \\dfrac{\\pi}{2}\\right]$, the curve is concave down (convex). Because the curve bends downward, the straight-line tops of the four trapezia lie entirely beneath the curve. Thus, the sum of the areas of the trapezia is slightly less than the actual area under the curve, making the estimate an underestimate.<br><br>Final Answer: $$0.987$$"
        ],
        "pi_options": [
            {
                "ans": "$$1.97$$",
                "feedback": "You may have divided the strip width by $8$ instead of $16$. Remember that the coefficient in front of the brackets is $\\dfrac{h}{2} = \\dfrac{\\pi}{16}$, not $h = \\dfrac{\\pi}{8}$."
            },
            {
                "ans": "$$0.987, \\quad \\text{overestimate}$$",
                "feedback": "Your numerical estimate is correct, but your geometric reasoning is flipped. Since $y = \\sin x$ is concave down on this interval, the trapezia cut across the inside of the curve, lying entirely below it, which leads to an underestimate."
            },
            {
                "ans": "$$0.590$$",
                "feedback": "This is probably because you did not double the middle terms inside the brackets. Make sure to apply the factor of $2$ to $y_1, y_2,$ and $y_3$."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Curvature Rules",
            "content": "A simple rule to remember for exam questions: if a curve is concave down (like a sad face), the trapezium rule underestimates the actual area. If the curve is concave up (like a happy face, such as $y = e^x$), the trapezium rule overestimates the area."
        }
    },
    {
        "id": "004153",
        "board": "OCR",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Numerical methods",
        "subtopic": [
            "Trapezium Rule",
            "Rational Functions",
            "Integration"
        ],
        "img": false,
        "question": "1. Use the trapezium rule, with four strips each of width 1, to estimate the value of:<br>$$\\int_1^5 \\dfrac{1}{x} \\text{d}x$$<br>giving your answer correct to 3 significant figures.<br><br>2. Calculate the exact value of the integral using integration.<br><br>3. Hence, find the percentage error of your trapezium rule estimate, giving your answer correct to 3 significant figures.",
        "steps": [
            "For four strips of width $h = 1$ on the interval $[1, 5]$, the coordinate points are $x_0 = 1$, $x_1 = 2$, $x_2 = 3$, $x_3 = 4$, and $x_4 = 5$.",
            "Evaluate $f(x) = \\dfrac{1}{x}$ at each point:<br>$$y_0 = f(1) = 1$$<br>$$y_1 = f(2) = 0.5$$<br>$$y_2 = f(3) \\approx 0.3333$$<br>$$y_3 = f(4) = 0.25$$<br>$$y_4 = f(5) = 0.2$$",
            "Apply the trapezium rule formula:<br>$$\\text{Estimate} = \\dfrac{1}{2} \\left[ 1 + 0.2 + 2(0.5 + 0.3333 + 0.25) \\right]$$<br>$$\\text{Estimate} = 0.5 \\left[ 1.2 + 2(1.0833) \\right] = 0.5 \\left[ 1.2 + 2.1667 \\right] = 0.5 \\left[ 3.3667 \\right] \\approx 1.6834$$<br>Rounding to 3 significant figures gives $1.68$.",
            "Integrate analytically to find the exact value:<br>$$\\int_1^5 \\dfrac{1}{x} \\text{d}x = \\left[ \\ln x \\right]_1^5 = \\ln 5 - \\ln 1 = \\ln 5 \\approx 1.6094$$",
            "Calculate the percentage error using the formula $\\text{Percentage Error} = \\dfrac{|\\text{Estimate} - \\text{Exact}|}{\\text{Exact}} \\times 100\\%$:<br>$$\\text{Percentage Error} = \\dfrac{|1.6834 - 1.6094|}{1.6094} \\times 100\\%$$<br>$$\\text{Percentage Error} = \\dfrac{0.0740}{1.6094} \\times 100\\% \\approx 4.598\\%$$<br>Rounding to 3 significant figures gives $4.60\\%$.<br><br>Final Answer: $$1.68, \\quad \\ln 5, \\quad 4.60\\%$$"
        ],
        "pi_options": [
            {
                "ans": "$$1.68, \\quad 1.61, \\quad 4.17\\%$$",
                "feedback": "Check your percentage error calculation. You must use the unrounded values for the intermediate steps of the error formula, otherwise you introduce rounding discrepancies in your final percentage."
            },
            {
                "ans": "$$1.68, \\quad \\ln 5, \\quad 4.35\\%$$",
                "feedback": "It looks like you divided by the estimated value in the denominator of your percentage error formula. Remember that the base of the percentage error is always the exact (true) value, which is $\\ln 5$."
            },
            {
                "ans": "$$0.842, \\quad \\ln 5, \\quad 47.7\\%$$",
                "feedback": "You may have forgotten the factor of $2$ on the middle terms when calculating your trapezium estimate, leading to a much lower approximation and a huge percentage error."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Percentage Error Pitfalls",
            "content": "When calculating percentage errors, the denominator must always be the exact, true value. Additionally, never use rounded numbers (like $1.68$ or $1.61$) inside the error calculation—keep your high-precision numbers on your calculator display until the final round-off to avoid rounding drifts."
        }
    },
    {
        "id": "004154",
        "board": "OCR",
        "level": "A",
        "major_area": "Calculus",
        "topic": "Numerical methods",
        "subtopic": [
            "Trapezium Rule",
            "Logarithmic Functions"
        ],
        "img": false,
        "question": "1. Use the trapezium rule, with four strips each of width 0.5, to estimate the value of:<br>$$\\int_1^3 \\ln(2x - 1) \\text{d}x$$<br>giving your answer correct to 3 significant figures.<br><br>2. Explain whether using more strips would increase or decrease the width of each strip, and how this change affects the accuracy of the approximation.",
        "steps": [
            "For four strips of width $h = 0.5$ on the interval $[1, 3]$, the coordinate points are $x_0 = 1$, $x_1 = 1.5$, $x_2 = 2.0$, $x_3 = 2.5$, and $x_4 = 3.0$.",
            "Evaluate $f(x) = \\ln(2x - 1)$ at each of these points:<br>$$y_0 = \\ln(2(1) - 1) = \\ln(1) = 0$$<br>$$y_1 = \\ln(2(1.5) - 1) = \\ln(2) \\approx 0.6931$$<br>$$y_2 = \\ln(2(2.0) - 1) = \\ln(3) \\approx 1.0986$$<br>$$y_3 = \\ln(2(2.5) - 1) = \\ln(4) \\approx 1.3863$$<br>$$y_4 = \\ln(2(3.0) - 1) = \\ln(5) \\approx 1.6094$$",
            "Apply the trapezium rule formula:<br>$$\\text{Estimate} = \\dfrac{0.5}{2} \\left[ 0 + 1.6094 + 2(0.6931 + 1.0986 + 1.3863) \\right]$$",
            "Perform the arithmetic steps:<br>$$\\text{Estimate} = 0.25 \\left[ 1.6094 + 2(3.1780) \\right]$$<br>$$\\text{Estimate} = 0.25 \\left[ 1.6094 + 6.3560 \\right] = 0.25 \\left[ 7.9654 \\right] \\approx 1.9913$$<br>Rounding to 3 significant figures gives $1.99$.",
            "Using more strips (increasing $n$) would decrease the width of each strip ($h$), because $h = \\dfrac{b-a}{n}$. As the width of the strips decreases, the straight-line tops of the trapezia follow the curve of $y = \\ln(2x-1)$ more closely, thereby increasing the accuracy of the approximation.<br><br>Final Answer: $$1.99$$"
        ],
        "pi_options": [
            {
                "ans": "$$3.98$$",
                "feedback": "You may have forgotten to divide the strip width by $2$ at the start of the formula. Remember that the multiplying factor is $\\dfrac{h}{2} = 0.25$, not $h = 0.5$."
            },
            {
                "ans": "$$1.19$$",
                "feedback": "This is probably because you did not double the middle terms inside the brackets. Make sure to apply the factor of $2$ to $y_1, y_2,$ and $y_3$ before adding $y_4$."
            },
            {
                "ans": "$$1.99, \\quad \\text{increase width}$$",
                "feedback": "Your numerical estimate is correct, but your conceptual reasoning about the strip width is inverted. Increasing the number of strips over a fixed interval must decrease the width of each individual strip."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Logarithmic Inputs",
            "content": "When evaluating logarithmic terms in the trapezium rule, make sure to evaluate the inner algebraic expression first. It is very easy to make a bracket slip and calculate $2\\ln(x)-1$ instead of the correct function $\\ln(2x-1)$."
        }
    },
    {
        "id": "004155",
        "board": "OCR",
        "level": "AS",
        "major_area": "Calculus",
        "topic": "Numerical methods",
        "subtopic": [
            "Trapezium Rule",
            "Modelling"
        ],
        "img": false,
        "question": "A surveyor measures the depth of a river, $d$ metres, at horizontal distances $x$ metres from one of its banks. The results are recorded in the table below:<br><br>* $x = 0$ metres: $d = 0$ metres<br>* $x = 1.5$ metres: $d = 0.8$ metres<br>* $x = 3.0$ metres: $d = 1.4$ metres<br>* $x = 4.5$ metres: $d = 1.1$ metres<br>* $x = 6.0$ metres: $d = 0$ metres<br><br>1. Use the trapezium rule with 4 strips to estimate the cross-sectional area of the river.<br>2. State one limitation of using this mathematical model to estimate the cross-sectional area of a real river.",
        "steps": [
            "The horizontal intervals are spaced at equal steps of $1.5$ metres, which means the strip width is $h = 1.5$ metres.",
            "The corresponding depth coordinates (our $y$-values) are $d_0 = 0$, $d_1 = 0.8$, $d_2 = 1.4$, $d_3 = 1.1$, and $d_4 = 0$.",
            "Apply the trapezium rule to estimate the area:<br>$$\\text{Area} \\approx \\dfrac{h}{2} \\left[ d_0 + d_4 + 2(d_1 + d_2 + d_3) \\right]$$<br>$$\\text{Area} \\approx \\dfrac{1.5}{2} \\left[ 0 + 0 + 2(0.8 + 1.4 + 1.1) \\right]$$",
            "Simplify the terms within the bracket:<br>$$\\text{Area} \\approx 0.75 \\left[ 2(3.3) \\right] = 0.75 \\left[ 6.6 \\right] = 4.95$$<br>So the estimated cross-sectional area is $4.95\\text{ m}^2$.",
            "One limitation of this model is that the trapezium rule assumes the riverbed consists of straight, flat slopes between the measured depths (represented by the straight top edges of the trapezia). In reality, riverbeds are smooth, irregular curves, so this straight-line approximation introduces a modeling error.<br><br>Final Answer: $$4.95\\text{ m}^2$$"
        ],
        "pi_options": [
            {
                "ans": "$$9.90\\text{ m}^2$$",
                "feedback": "You may have multiplied the bracketed sum by the strip width $1.5$ directly. Remember that the multiplying factor at the front of the formula is $\\dfrac{h}{2} = 0.75$."
            },
            {
                "ans": "$$2.48\\text{ m}^2$$",
                "feedback": "It looks like you forgot to apply the factor of $2$ to the middle depth measurements. Make sure to double the middle terms before adding the boundary terms."
            },
            {
                "ans": "$$3.30\\text{ m}^2$$",
                "feedback": "This occurs if you simply added the depth measurements together. You must apply the full trapezium rule formula to estimate the cross-sectional area."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Modelling Limitations",
            "content": "In applied modeling questions, always link your 'limitation' statement directly to the geometric assumptions of the model. Here, the core limitation is that the model replaces a smooth, curved physical bed with flat, linear segments."
        }
    },
    {
        "id": "004156",
        "board": "OCR",
        "level": "AS",
        "major_area": "Algebra and functions",
        "topic": "Polynomials",
        "subtopic": [
            "Disguised Quadratics",
            "Quartic Equations",
            "Detailed Reasoning"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning. Find the two real roots of the equation:<br>$$x^4 - 12 = 4x^2$$<br>Give the roots in an exact form.",
        "steps": [
            "Rearrange the equation to bring all terms to one side of the equals sign:<br>$$x^4 - 4x^2 - 12 = 0$$",
            "This is a quartic equation in a quadratic form. We can introduce a substitution parameter, letting $y = x^2$. This transforms our equation into a quadratic in terms of $y$:<br>$$y^2 - 4y - 12 = 0$$",
            "Factorise the quadratic expression by finding two numbers that multiply to $-12$ and add to $-4$. These numbers are $-6$ and $2$:<br>$$(y - 6)(y + 2) = 0$$",
            "Solve for $y$:<br>$$y = 6 \\quad \\text{or} \\quad y = -2$$",
            "Substitute $x^2$ back in place of $y$ to solve for our original variable $x$:<br>$$x^2 = 6 \\quad \\text{or} \\quad x^2 = -2$$",
            "Since $x$ must be a real root, $x^2$ must be greater than or equal to $0$. The equation $x^2 = -2$ has no real solutions. Therefore, we only solve:<br>$$x^2 = 6 \\implies x = \\pm\\sqrt{6}$$<br><br>Final Answer: $$x = \\pm\\sqrt{6}$$"
        ],
        "pi_options": [
            {
                "ans": "$$x = \\pm\\sqrt{6}, \\quad x = \\pm\\sqrt{2}i$$",
                "feedback": "The question specifically asks for the real roots of the equation. Complex roots containing imaginary numbers must be discarded."
            },
            {
                "ans": "$$x = \\pm 6$$",
                "feedback": "You may have forgotten to take the square root after substituting $x^2$ back into your solutions. Remember that $x^2 = 6 \\implies x = \\pm\\sqrt{6}$, not $x = \\pm 6$."
            },
            {
                "ans": "$$x = \\pm\\sqrt{12}$$",
                "feedback": "Check your factorisation steps. It looks like you may have set up the quadratic incorrectly or solved $x^2 = 12$. Verify that $(y-6)(y+2) = 0$ is the correct factorization of $y^2 - 4y - 12 = 0$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Explaining Your Steps",
            "content": "When an exam paper states 'you must show detailed reasoning', examiners will award zero marks for answers written down without working. You must explicitly show the substitution step and state why any roots (like $x^2 = -2$) are discarded."
        }
    },
    {
        "id": "004157",
        "board": "OCR",
        "level": "AS",
        "major_area": "Algebra and functions",
        "topic": "Polynomials",
        "subtopic": [
            "Disguised Quadratics",
            "Surd Equations",
            "Detailed Reasoning"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning. Find the real roots of the equation:<br>$$x - 5\\sqrt{x} + 6 = 0$$<br>Give the roots in an exact form.",
        "steps": [
            "This equation is a disguised quadratic. Let $t = \\sqrt{x}$, which implies $x = t^2$ (for $x \\ge 0$). Substitute these into the equation:<br>$$t^2 - 5t + 6 = 0$$",
            "Factorise the quadratic equation by finding two numbers that multiply to $6$ and add to $-5$. These numbers are $-2$ and $-3$:<br>$$(t - 2)(t - 3) = 0$$",
            "Solve for $t$:<br>$$t = 2 \\quad \\text{or} \\quad t = 3$$",
            "Substitute $\\sqrt{x}$ back in place of $t$ to find our original variable $x$:<br>$$\\sqrt{x} = 2 \\implies x = 2^2 = 4$$<br>$$\\sqrt{x} = 3 \\implies x = 3^2 = 9$$",
            "Verify that both solutions are valid by substituting them back into the original equation:<br>For $x = 4$: $4 - 5\\sqrt{4} + 6 = 4 - 10 + 6 = 0$ (Valid).<br>For $x = 9$: $9 - 5\\sqrt{9} + 6 = 9 - 15 + 6 = 0$ (Valid).<br><br>Final Answer: $$x = 4, \\quad 9$$"
        ],
        "pi_options": [
            {
                "ans": "$$x = 2, \\quad 3$$",
                "feedback": "You have found the values for the substitution variable $t = \\sqrt{x}$. Remember to square these values to find the actual roots for $x$."
            },
            {
                "ans": "$$x = 1.41, \\quad 1.73$$",
                "feedback": "It looks like you took the square root of $t$ instead of squaring it. If $\\sqrt{x} = 2$, then $x = 2^2 = 4$, not $\\sqrt{2}$."
            },
            {
                "ans": "$$x = 4$$",
                "feedback": "You have only found one of the two real roots. Make sure to complete the calculations for both factors $(t-2)$ and $(t-3)$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Extraneous Solutions",
            "content": "When solving equations involving surds, always substitute your final answers back into the original equation. Some algebraic steps can introduce 'extraneous' (invalid) roots, though in this particular question, both roots are entirely valid."
        }
    },
    {
        "id": "004158",
        "board": "OCR",
        "level": "AS",
        "major_area": "Algebra and functions",
        "topic": "Polynomials",
        "subtopic": [
            "Disguised Quadratics",
            "Rational Equations",
            "Detailed Reasoning"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning. Find the four real roots of the equation:<br>$$x^2 + \\dfrac{4}{x^2} = 5$$<br>Give the roots in an exact form.",
        "steps": [
            "Multiply every term in the equation by $x^2$ (where $x \\ne 0$) to eliminate the fraction:<br>$$x^2\\left(x^2\\right) + x^2\\left(\\dfrac{4}{x^2}\\right) = 5\\left(x^2\\right)$$<br>$$x^4 + 4 = 5x^2$$",
            "Rearrange the terms into a standard polynomial form:<br>$$x^4 - 5x^2 + 4 = 0$$",
            "This is a quartic equation in a quadratic form. Let $y = x^2$, which gives us:<br>$$y^2 - 5y + 4 = 0$$",
            "Factorise the quadratic equation:<br>$$(y - 1)(y - 4) = 0$$",
            "Solve for $y$:<br>$$y = 1 \\quad \\text{or} \\quad y = 4$$",
            "Substitute $x^2$ back into our equations to solve for $x$:<br>$$x^2 = 1 \\implies x = \\pm 1$$<br>$$x^2 = 4 \\implies x = \\pm 2$$<br><br>Final Answer: $$x = -2, \\quad -1, \\quad 1, \\quad 2$$"
        ],
        "pi_options": [
            {
                "ans": "$$x = 1, \\quad 2$$",
                "feedback": "Remember that taking the square root of a positive number yields both a positive and a negative root (e.g., $x^2 = 4 \\implies x = \\pm 2$). Do not lose the negative solutions."
            },
            {
                "ans": "$$x = 1, \\quad 4$$",
                "feedback": "These are the values for your substitution parameter $y = x^2$. You must take the square root of these values to find the roots of $x$."
            },
            {
                "ans": "$$x = \\pm 1$$",
                "feedback": "You have only solved one half of the factorised quadratic equation. Ensure you solve for both $y = 1$ and $y = 4$ to obtain all four real roots."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Symmetry in Quartics",
            "content": "Quartics that contain only even powers of $x$ (such as $x^4$ and $x^2$) are completely symmetric about the $y$-axis. This means that if $x = k$ is a root, then $x = -k$ must also be a root, which is a great way to verify your answers."
        }
    },
    {
        "id": "004159",
        "board": "OCR",
        "level": "A",
        "major_area": "Algebra and functions",
        "topic": "Exponentials and logarithms",
        "subtopic": [
            "Disguised Quadratics",
            "Exponential Equations",
            "Detailed Reasoning"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning. Find the unique real root of the equation:<br>$$e^{2x} - 2e^x - 3 = 0$$<br>Give the root in an exact form, using natural logarithms.",
        "steps": [
            "This equation is a disguised quadratic because $e^{2x} = \\left(e^x\\right)^2$. Let $u = e^x$ (where $u > 0$). Substituting this into the equation yields:<br>$$u^2 - 2u - 3 = 0$$",
            "Factorise the quadratic equation:<br>$$(u - 3)(u + 1) = 0$$",
            "Solve for $u$:<br>$$u = 3 \\quad \\text{or} \\quad u = -1$$",
            "Now substitute $e^x$ back in place of $u$:<br>$$e^x = 3 \\quad \\text{or} \\quad e^x = -1$$",
            "Since the exponential function $e^x$ is strictly positive for all real values of $x$ ($e^x > 0$), the equation $e^x = -1$ has no real solutions and is discarded.",
            "Solve the remaining equation by taking the natural logarithm of both sides:<br>$$e^x = 3 \\implies x = \\ln 3$$<br><br>Final Answer: $$x = \\ln 3$$"
        ],
        "pi_options": [
            {
                "ans": "$$x = \\ln 3, \\quad x = \\ln(-1)$$",
                "feedback": "You cannot take the logarithm of a negative number in the real domain. The solution $e^x = -1$ must be explicitly discarded."
            },
            {
                "ans": "$$x = 3, \\quad x = -1$$",
                "feedback": "These are the solutions for your substitution variable $u = e^x$. You must apply natural logarithms to solve for $x$."
            },
            {
                "ans": "$$x = 1.10$$",
                "feedback": "The question asks for the root in an 'exact form'. Keep your answer as the natural logarithm $\\ln 3$ instead of converting it to a decimal."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Logarithm Domains",
            "content": "Always remember that the domain of $y = \\ln x$ is strictly $x > 0$. Any algebraic step that requires you to evaluate the log of a negative number or zero must be rejected when working within the real number system."
        }
    },
    {
        "id": "004160",
        "board": "OCR",
        "level": "A",
        "major_area": "Trigonometry",
        "topic": "Trigonometric identities",
        "subtopic": [
            "Disguised Quadratics",
            "Trigonometric Equations",
            "Detailed Reasoning"
        ],
        "img": false,
        "question": "In this question you must show detailed reasoning. Find all real solutions to the equation:<br>$$2\\sin^2\\theta + 3\\cos\\theta - 3 = 0$$<br>for $0^\\circ \\le \\theta \\le 360^\\circ$.",
        "steps": [
            "To solve this equation, we must express all trigonometric terms in terms of a single function. Use the Pythagorean identity $\\sin^2\\theta = 1 - \\cos^2\\theta$:<br>$$2\\left(1 - \\cos^2\\theta\\right) + 3\\cos\\theta - 3 = 0$$",
            "Expand and simplify the expression:<br>$$2 - 2\\cos^2\\theta + 3\\cos\\theta - 3 = 0$$<br>$$-2\\cos^2\\theta + 3\\cos\\theta - 1 = 0$$",
            "Multiply the entire equation by $-1$ to make the leading coefficient positive:<br>$$2\\cos^2\\theta - 3\\cos\\theta + 1 = 0$$",
            "This is a disguised quadratic. Let $u = \\cos\\theta$, which gives us:<br>$$2u^2 - 3u + 1 = 0$$",
            "Factorise the quadratic expression:<br>$$(2u - 1)(u - 1) = 0$$",
            "Solve for $u$:<br>$$u = \\dfrac{1}{2} \\quad \\text{or} \\quad u = 1$$",
            "Substitute $\\cos\\theta$ back into our solutions:<br>$$\\cos\\theta = \\dfrac{1}{2} \\quad \\text{or} \\quad \\cos\\theta = 1$$",
            "Find all solutions for $\\theta$ within the specified domain $0^\\circ \\le \\theta \\le 360^\\circ$:<br>For $\\cos\\theta = 1$: $\\theta = 0^\\circ$ and $\\theta = 360^\\circ$ (both endpoints are inclusive).<br>For $\\cos\\theta = \\dfrac{1}{2}$: $\\theta = 60^\\circ$ and $\\theta = 360^\\circ - 60^\\circ = 300^\\circ$.",
            "Combine all solutions in ascending order:<br>$$\\theta = 0^\\circ, \\quad 60^\\circ, \\quad 300^\\circ, \\quad 360^\\circ$$<br><br>Final Answer: $$\\theta = 0^\\circ, \\quad 60^\\circ, \\quad 300^\\circ, \\quad 360^\\circ$$"
        ],
        "pi_options": [
            {
                "ans": "$$\\theta = 0^\\circ, \\quad 60^\\circ, \\quad 300^\\circ$$",
                "feedback": "Check your domain boundaries. The interval is $0^\\circ \\le \\theta \\le 360^\\circ$, which means the upper limit $360^\\circ$ is inclusive. Since $\\cos(360^\\circ) = 1$, this boundary value must be included in your final solutions."
            },
            {
                "ans": "$$\\theta = 60^\\circ, \\quad 120^\\circ$$",
                "feedback": "Be careful with the signs of your trigonometric quadrants. Cosine is positive in the first and fourth quadrants. Since $\\cos\\theta = \\dfrac{1}{2}$ is positive, the solutions are $60^\\circ$ and $300^\\circ$, not $120^\\circ$ (where cosine is negative)."
            },
            {
                "ans": "$$\\theta = 0^\\circ, \\quad 60^\\circ$$",
                "feedback": "You have only found the principal values from your calculator. Remember that trigonometric equations usually have multiple solutions within a full circle domain of $360^\\circ$ due to periodic symmetry."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Inclusive Boundaries",
            "content": "Always read the inequality signs in the domain interval carefully. If the sign is $\\le 360^\\circ$ (inclusive), you must include $360^\\circ$ if it is a valid solution. If the sign is $< 360^\\circ$ (exclusive), you must omit it. This single distinction is a highly common point-loser."
        }
    },
    {
        "id": "004161",
        "board": "OCR",
        "level": "AS",
        "major_area": "Algebra and functions",
        "topic": "Mathematical proof",
        "subtopic": [
            "Proof by Cases",
            "Algebraic Proof"
        ],
        "img": false,
        "question": "Prove algebraically that $n^3 + 5n - 1$ is odd for all positive integers $n$.",
        "steps": [
            "Any positive integer $n$ must be either even or odd. We can prove the claim is true for all integers by testing both cases separately.",
            "<strong>Case 1:</strong> $n$ is even.<br>Let $n = 2k$, where $k$ is an integer. Substitute this into our expression:<br>$$n^3 + 5n - 1 = (2k)^3 + 5(2k) - 1$$<br>$$= 8k^3 + 10k - 1$$",
            "Factorise out a $2$ from the first two terms of the expression:<br>$$= 2(4k^3 + 5k) - 1$$<br>Since $k$ is an integer, $(4k^3 + 5k)$ is also an integer. Any integer in the form $2m - 1$ is odd, so the expression is odd when $n$ is even.",
            "<strong>Case 2:</strong> $n$ is odd.<br>Let $n = 2k + 1$, where $k$ is an integer. Substitute this into our expression:<br>$$n^3 + 5n - 1 = (2k + 1)^3 + 5(2k + 1) - 1$$",
            "Expand the cubic and linear terms:<br>$$= (8k^3 + 12k^2 + 6k + 1) + 10k + 5 - 1$$<br>$$= 8k^3 + 12k^2 + 16k + 5$$",
            "Rewrite the constant term $5$ as $4 + 1$ to allow factorisation:<br>$$= 8k^3 + 12k^2 + 16k + 4 + 1$$<br>$$= 2(4k^3 + 6k^2 + 8k + 2) + 1$$<br>Since $k$ is an integer, the bracketed term is an integer. Any integer in the form $2p + 1$ is odd, so the expression is odd when $n$ is odd.",
            "Since the expression is odd in both the even and odd cases, $n^3 + 5n - 1$ is odd for all positive integers $n$.<br><br>Final Answer: $$2(4k^3 + 5k) - 1 \\text{ and } 2(4k^3 + 6k^2 + 8k + 2) + 1 \\text{ are odd}$$"
        ],
        "pi_options": [
            {
                "ans": "$$n^3 + 5n - 1 = 2(4k^3 + 5k) - 1$$",
                "feedback": "This is incomplete. Proving the expression is odd only for the case where $n$ is even ($n=2k$) does not prove the claim for all positive integers. You must also prove the case where $n$ is odd."
            },
            {
                "ans": "$$8k^3 + 12k^2 + 16k + 5 \\implies \\text{even}$$",
                "feedback": "Be careful with your parity reasoning. While $8k^3$, $12k^2$, and $16k$ are even terms, adding $5$ (which is odd) to an even sum results in an odd number, not an even number."
            },
            {
                "ans": "$$2(4k^3 + 6k^2 + 8k) + 5$$",
                "feedback": "While mathematically equivalent, this is not a fully completed proof. To rigorously show an expression is odd, you should manipulate the constant term so that the expression can be written cleanly in the standard form $2m + 1$ or $2m - 1$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Standard Parity Forms",
            "content": "To score full marks on parity proofs, always write your final expressions in the standard forms of $2m$ for even numbers and $2m + 1$ (or $2m - 1$) for odd numbers, explicitly stating that $m$ is an integer."
        }
    },
    {
        "id": "004162",
        "board": "OCR",
        "level": "AS",
        "major_area": "Algebra and functions",
        "topic": "Mathematical proof",
        "subtopic": [
            "Consecutive Integers",
            "Algebraic Proof"
        ],
        "img": false,
        "question": "Prove algebraically that $n^2 + 3n + 2$ is even for all positive integers $n$.",
        "steps": [
            "We can prove this claim elegantly by factorising the quadratic expression. Find two numbers that multiply to $2$ and add to $3$, which are $1$ and $2$:<br>$$n^2 + 3n + 2 = (n + 1)(n + 2)$$",
            "Observe the two factors: $(n + 1)$ and $(n + 2)$ are consecutive positive integers.",
            "For any two consecutive positive integers, one of the numbers must be even and the other must be odd.",
            "Since one of the factors is even, it can be written in the form $2k$, where $k$ is an integer. The product of the two factors can therefore be written as:<br>$$\\text{Product} = 2k \\times (\\text{the other factor})$$<br>$$= 2 \\left[ k \\times (\\text{the other factor}) \\right]$$",
            "Since the product has a factor of $2$, the expression $(n + 1)(n + 2)$ must be even for all positive integers $n$.<br><br>Final Answer: $$(n+1)(n+2) \\text{ contains an even factor}$$"
        ],
        "pi_options": [
            {
                "ans": "$$(n + 1)(n + 2) = \\text{odd}$$",
                "feedback": "Consecutive integers can never both be odd. Since one of the factors must be even, their product must be even."
            },
            {
                "ans": "$$n^2 + 3n + 2 = n(n + 3) + 2$$",
                "feedback": "While this factorisation is mathematically correct, it does not easily show that the expression is even. Factorising the quadratic into $(n+1)(n+2)$ is a much more direct way to prove that an even factor exists."
            },
            {
                "ans": "$$(2k)^2 + 3(2k) + 2$$",
                "feedback": "This is only the first step of a proof by cases where $n$ is even. To complete a proof by cases, you must also prove the case where $n$ is odd ($n = 2k + 1$). Factorising the expression is a much faster, single-step alternative."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Consecutive Integers Shortcut",
            "content": "Using properties of consecutive integers is a highly elegant alternative to a proof by cases. Proving that an expression factorises into a product of consecutive integers is a standard and widely accepted proof method."
        }
    },
    {
        "id": "004163",
        "board": "OCR",
        "level": "AS",
        "major_area": "Algebra and functions",
        "topic": "Mathematical proof",
        "subtopic": [
            "Proof by Cases",
            "Divisibility Proofs"
        ],
        "img": false,
        "question": "Prove algebraically that $n^2 + 2$ is not divisible by 4 for any positive integer $n$.",
        "steps": [
            "We can prove this claim by examining the two possible cases for any positive integer $n$: either $n$ is even or $n$ is odd.",
            "<strong>Case 1:</strong> $n$ is even.<br>Let $n = 2k$, where $k$ is an integer. Substitute this into our expression:<br>$$n^2 + 2 = (2k)^2 + 2$$<br>$$= 4k^2 + 2$$",
            "Since $k^2$ is an integer, $4k^2$ is a multiple of $4$. Adding $2$ to a multiple of $4$ leaves a remainder of $2$ when divided by $4$. Therefore, $n^2 + 2$ is not divisible by $4$ when $n$ is even.",
            "<strong>Case 2:</strong> $n$ is odd.<br>Let $n = 2k + 1$, where $k$ is an integer. Substitute this into our expression:<br>$$n^2 + 2 = (2k + 1)^2 + 2$$",
            "Expand and simplify the expression:<br>$$= (4k^2 + 4k + 1) + 2$$<br>$$= 4k^2 + 4k + 3$$",
            "Factorise out a $4$ from the first two terms:<br>$$= 4(k^2 + k) + 3$$<br>Since $k$ is an integer, $(k^2 + k)$ is an integer. This expression is in the form $4m + 3$, which leaves a remainder of $3$ when divided by $4$. Therefore, $n^2 + 2$ is not divisible by $4$ when $n$ is odd.",
            "Since $n^2 + 2$ is not divisible by $4$ in either case, the expression is not divisible by $4$ for any positive integer $n$.<br><br>Final Answer: $$4k^2 + 2 \\text{ and } 4(k^2 + k) + 3 \\text{ leave remainders}$$"
        ],
        "pi_options": [
            {
                "ans": "$$4k^2 + 2 \\implies \\text{divisible by 2}$$",
                "feedback": "While the expression is divisible by $2$, the question asks you to prove that it is not divisible by $4$. A remainder of $2$ when divided by $4$ confirms it is not a multiple of $4$."
            },
            {
                "ans": "$$4(k^2 + k + 1) - 1$$",
                "feedback": "This is equivalent, but writing the expression in the form $4m + 3$ makes the positive remainder of $3$ much more explicit and easier for the examiner to follow."
            },
            {
                "ans": "$$n^2 + 2 = 4m$$",
                "feedback": "This is the setup for a proof by contradiction. If you choose this route, you must show that $n^2 = 4m - 2 = 2(2m - 1)$, which means $n^2$ has an odd number of prime factors of $2$, which is impossible for a perfect square."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Divisibility and Remainders",
            "content": "To prove that an expression is not divisible by an integer $d$, show that the expression can be written in the form $dm + r$, where the remainder $r$ satisfies $0 < r < d$. For division by $4$, your valid remainders are $1$, $2$, or $3$."
        }
    },
    {
        "id": "004164",
        "board": "OCR",
        "level": "AS",
        "major_area": "Algebra and functions",
        "topic": "Mathematical proof",
        "subtopic": [
            "Proof by Exhaustion",
            "Prime Numbers"
        ],
        "img": false,
        "question": "Prove by exhaustion that $n^2 + n + 11$ is a prime number for all integers $n$ such that $1 \\le n \\le 5$.",
        "steps": [
            "A proof by exhaustion requires us to test every individual value of $n$ within the given domain, which is $n \\in \\{1, 2, 3, 4, 5\\}$.",
            "Test $n = 1$:<br>$$1^2 + 1 + 11 = 1 + 1 + 11 = 13$$<br>Since $13$ is only divisible by $1$ and itself, it is a prime number.",
            "Test $n = 2$:<br>$$2^2 + 2 + 11 = 4 + 2 + 11 = 17$$<br>Since $17$ is only divisible by $1$ and itself, it is a prime number.",
            "Test $n = 3$:<br>$$3^2 + 3 + 11 = 9 + 3 + 11 = 23$$<br>Since $23$ is only divisible by $1$ and itself, it is a prime number.",
            "Test $n = 4$:<br>$$4^2 + 4 + 11 = 16 + 4 + 11 = 31$$<br>Since $31$ is only divisible by $1$ and itself, it is a prime number.",
            "Test $n = 5$:<br>$$5^2 + 5 + 11 = 25 + 5 + 11 = 41$$<br>Since $41$ is only divisible by $1$ and itself, it is a prime number.",
            "Since we have tested every single integer in the domain $1 \\le n \\le 5$ and obtained a prime number in each case, the claim is proven by exhaustion.<br><br>Final Answer: $$13, \\, 17, \\, 23, \\, 31, \\, 41 \\text{ are prime}$$"
        ],
        "pi_options": [
            {
                "ans": "$$n^2 + n + 11 = n(n + 1) + 11$$",
                "feedback": "While this factorisation is mathematically correct, it does not constitute a proof by exhaustion. A proof by exhaustion strictly requires you to calculate and verify the numerical result for every single value of $n$ in the domain."
            },
            {
                "ans": "$$n = 11 \\implies 11^2 + 11 + 11 = 143 \\implies \\text{not prime}$$",
                "feedback": "This is a valid counterexample showing that the formula does not work for all integers $n$. However, the question only asks you to prove the claim for the specific domain $1 \\le n \\le 5$. Counterexamples outside this domain are irrelevant to the proof."
            },
            {
                "ans": "$$13, \\, 17, \\, 23, \\, 31$$",
                "feedback": "Your working is incomplete. You have missed the final case $n = 5$. To complete a proof by exhaustion, you must show the calculation for every single value in the specified domain."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Limits of Exhaustion",
            "content": "Proof by exhaustion is only practical when the domain contains a small, finite number of cases. For larger or infinite domains, you must use algebraic proofs. Be aware that algebraic patterns that seem to hold for small numbers (like this formula) often fail for larger values."
        }
    },
    {
        "id": "004165",
        "board": "OCR",
        "level": "A",
        "major_area": "Algebra and functions",
        "topic": "Mathematical proof",
        "subtopic": [
            "Proof by Contradiction",
            "Rational and Irrational Numbers"
        ],
        "img": false,
        "question": "Prove by contradiction that the sum of a rational number and an irrational number is irrational.",
        "steps": [
            "To prove this claim by contradiction, we begin by assuming the opposite of our claim is true:<br>Assume that the sum of a rational number $r$ and an irrational number $x$ is a rational number, which we will call $q$.",
            "Write this assumption as an equation:<br>$$r + x = q$$",
            "Since $r$ and $q$ are rational numbers, they can be written as ratios of integers. Let $r = \\dfrac{a}{b}$ (where $a, b \\in \\mathbb{Z}, \\, b \\ne 0$) and $q = \\dfrac{c}{d}$ (where $c, d \\in \\mathbb{Z}, \\, d \\ne 0$):<br>$$\\dfrac{a}{b} + x = \\dfrac{c}{d}$$",
            "Rearrange the equation to isolate the irrational number $x$:<br>$$x = q - r$$<br>$$x = \\dfrac{c}{d} - \\dfrac{a}{b}$$",
            "Combine the rational fractions over a common denominator:<br>$$x = \\dfrac{bc - ad}{bd}$$",
            "Since $a, b, c,$ and $d$ are integers, both $(bc - ad)$ and $bd$ must be integers. Additionally, since $b \\ne 0$ and $d \\ne 0$, their product $bd \\ne 0$.",
            "This implies that $x$ can be written as a ratio of two integers, which means $x$ must be a rational number. This directly contradicts our initial definition that $x$ is an irrational number.",
            "Since our assumption that the sum is rational leads to a contradiction, the assumption must be false. Therefore, the sum of a rational number and an irrational number must be irrational.<br><br>Final Answer: $$x = q - r \\implies \\text{contradiction}$$"
        ],
        "pi_options": [
            {
                "ans": "$$r + x = x$$",
                "feedback": "This is not the setup for a proof by contradiction. To prove a claim by contradiction, you must assume that the sum is equal to a rational number, which can be expressed as a ratio of integers."
            },
            {
                "ans": "$$\\dfrac{a}{b} + \\sqrt{2} = \\text{irrational}$$",
                "feedback": "This is only an example using a specific irrational number ($\\sqrt{2}$). A formal proof must be general and apply to any irrational number $x$."
            },
            {
                "ans": "$$x = q - r \\implies x = \\text{rational}$$",
                "feedback": "This is a correct step, but you must complete the proof by explicitly stating that this result contradicts the fact that $x$ is irrational, thereby making your original assumption false."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Contradiction Setup",
            "content": "When starting a proof by contradiction, always write down your initial assumption clearly. The standard structure is: 'Assume for contradiction that [the opposite of the claim] is true.' Every step that follows must be logically sound until you hit a clear mathematical contradiction."
        }
    }



];