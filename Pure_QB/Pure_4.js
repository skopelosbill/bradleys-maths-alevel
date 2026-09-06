window.ALEVEL_QUESTIONS = [
        {
                "id": "004151",
                "board": "OCR",
                "branch": "Pure",
                "level": "A",
                "major_area": "Exponentials and Logarithms",
                "topic": "Numerical Methods",
                "subtopic": [
                        "Exponential and Logarithmic Functions and Graphs",
                        "Trapezium Rule"
                ],
                "img": false,
                "question": "1. Use the trapezium rule, with four strips each of width 0.5, to estimate the value of:<br>$$\\int_0^2 e^{\\frac{1}{2}x^2} \\text{d}x$$<br>giving your answer correct to 3 significant figures.<br><br>2. Explain how the trapezium rule could be used to obtain a more accurate estimate of this integral.",
                "steps": [
                        "For four strips of width $h = 0.5$ on the interval $[0, 2]$, the coordinate points are $x_0 = 0$, $x_1 = 0.5$, $x_2 = 1.0$, $x_3 = 1.5$, and $x_4 = 2.0$.",
                        "Evaluate the function $f(x) = e^{\\frac{1}{2}x^2}$ at each of these coordinate points:<br>\\begin{aligned}y_0 &= f(0) \\cr&= e^0 \\cr&= 1\\end{aligned}<br>\\begin{aligned}y_1 &= f(0.5) \\cr&= e^{0.125} \\approx 1.1331\\end{aligned}<br>\\begin{aligned}y_2 &= f(1.0) \\cr&= e^{0.5} \\approx 1.6487\\end{aligned}<br>\\begin{aligned}y_3 &= f(1.5) \\cr&= e^{1.125} \\approx 3.0802\\end{aligned}<br>\\begin{aligned}y_4 &= f(2.0) \\cr&= e^2 \\approx 7.3891\\end{aligned}",
                        "Apply the trapezium rule formula:\\begin{aligned} & \\text{Estimate} \\cr & \\quad = \\dfrac{h}{2} [ y_0 + y_4 + 2(y_1 + y_2 + y_3) ] \\cr & \\quad = \\dfrac{0.5}{2} \\times \\cr & \\quad [ 1 + 7.3891 \\cr & \\quad \\quad + 2(1.1331 + 1.6487 \\cr & \\quad \\quad \\quad + 3.0802) ] \\cr & \\quad = 0.25 [ 8.3891 + 2(5.8620) ] \\cr & \\quad = 0.25 [ 8.3891 + 11.7240 ] \\cr & \\quad = 0.25 [ 20.1131 ] \\cr & \\quad  \\approx 5.028\\end{aligned}<br><br>Rounding to 3 significant figures gives $5.03$.",
                        "To obtain a more accurate estimate of this integral, we could use more strips (increasing $n$). This reduces the width of each strip ($h$), meaning the straight-line tops of the trapezia will fit the actual curve of $y = e^{\\frac{1}{2}x^2}$ much more closely, reducing the error.",
                        "Final Answer: $$5.03$$"
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
                "branch": "Pure",
                "level": "A",
                "major_area": "Numerical Methods",
                "topic": "Numerical Methods",
                "subtopic": [
                        "Trigonometric Functions and Graphs",
                        "Trapezium Rule"
                ],
                "img": false,
                "question": "1. Use the trapezium rule, with four strips each of width $\\dfrac{\\pi}{8}$ radians, to estimate the value of:<br>$$\\int_0^{\\frac{\\pi}{2}} \\sin x \\text{d}x$$<br>giving your answer correct to 3 significant figures.<br><br>2. By considering the geometric shape of the curve $y = \\sin x$ on the interval $\\left[0, \\, \\dfrac{\\pi}{2}\\right]$, explain whether your estimate is an underestimate or an overestimate.",
                "steps": [
                        "For four strips of width $h = \\dfrac{\\pi}{8}$ on the interval $\\left[0, \\, \\dfrac{\\pi}{2}\\right]$, the coordinate points are $x_0 = 0$, $x_1 = \\dfrac{\\pi}{8}$, $x_2 = \\dfrac{\\pi}{4}$, $x_3 = \\dfrac{3\\pi}{8}$, and $x_4 = \\dfrac{\\pi}{2}$.",
                        "Evaluate the function $f(x) = \\sin x$ at each of these coordinate points, keeping high precision:<br>\\begin{aligned}y_0 &= \\sin(0) \\cr&= 0\\end{aligned}<br>$$y_1 = \\sin\\left(\\dfrac{\\pi}{8}\\right) \\approx 0.3827$$<br>$$y_2 = \\sin\\left(\\dfrac{\\pi}{4}\\right) \\approx 0.7071$$<br>$$y_3 = \\sin\\left(\\dfrac{3\\pi}{8}\\right) \\approx 0.9239$$<br>\\begin{aligned}y_4 &= \\sin\\left(\\dfrac{\\pi}{2}\\right) \\cr&= 1\\end{aligned}",
                        "Apply the trapezium rule formula to estimate the value of the integral:\\begin{aligned} & \\text{Estimate} \\cr & \\quad = \\dfrac{h}{2} [ y_0 + y_4 + 2(y_1 + y_2 + y_3) ] \\cr & \\quad = \\dfrac{\\pi}{16} \\times \\cr & \\quad [ 0 + 1 \\cr & \\quad \\quad + 2(0.3827 + 0.7071 \\cr & \\quad \\quad \\quad + 0.9239) ] \\cr & \\quad = \\dfrac{\\pi}{16} [ 1 + 2(2.0137) ] \\cr & \\quad = \\dfrac{\\pi}{16} [ 1 + 4.0274 ] \\cr & \\quad = \\dfrac{\\pi}{16} [ 5.0274 ] \\cr & \\quad \\approx 0.9871\\end{aligned}<br><br>Rounding to 3 significant figures gives $0.987$.",
                        "To determine if this is an underestimate or an overestimate, we examine the curvature of $y = \\sin x$. On the interval $\\left[0, \\, \\dfrac{\\pi}{2}\\right]$, the curve is concave down (convex). Because the curve bends downward, the straight-line tops of the four trapezia lie entirely beneath the curve. Thus, the sum of the areas of the trapezia is slightly less than the actual area under the curve, making the estimate an underestimate.",
                        "Final Answer: $$0.987$$"
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
                "branch": "Pure",
                "level": "A",
                "major_area": "Integration",
                "topic": "Numerical Methods",
                "subtopic": [
                        "Integration",
                        "Trapezium Rule"
                ],
                "img": false,
                "question": "1. Use the trapezium rule, with four strips each of width 1, to estimate the value of:<br>$$\\int_1^5 \\dfrac{1}{x} \\text{d}x$$<br>giving your answer correct to 3 significant figures.<br><br>2. Calculate the exact value of the integral using integration.<br><br>3. Hence, find the percentage error of your trapezium rule estimate, giving your answer correct to 3 significant figures.",
                "steps": [
                        "For four strips of width $h = 1$ on the interval $[1, 5]$, the coordinate points are $x_0 = 1$, $x_1 = 2$, $x_2 = 3$, $x_3 = 4$, and $x_4 = 5$.",
                        "Evaluate $f(x) = \\dfrac{1}{x}$ at each point:<br>\\begin{aligned}y_0 &= f(1) \\cr&= 1\\end{aligned}<br>\\begin{aligned}y_1 &= f(2) \\cr&= 0.5\\end{aligned}<br>$$y_2 = f(3) \\approx 0.3333$$<br>\\begin{aligned}y_3 &= f(4) \\cr&= 0.25\\end{aligned}<br>\\begin{aligned}y_4 &= f(5) \\cr&= 0.2\\end{aligned}",
                        "Apply the trapezium rule formula to estimate the value of the integral:\\begin{aligned} & \\text{Estimate} \\cr & \\quad = \\dfrac{h}{2} [ y_0 + y_4 + 2(y_1 + y_2 + y_3) ] \\cr & \\quad = \\dfrac{1}{2} \\times \\cr & \\quad [ 1 + 0.2 \\cr & \\quad \\quad + 2(0.5 + 0.3333 \\cr & \\quad \\quad \\quad + 0.25) ] \\cr & \\quad = 0.5 [ 1.2 + 2(1.0833) ] \\cr & \\quad = 0.5 [ 1.2 + 2.1667 ] \\cr & \\quad = 0.5 [ 3.3667 ] \\cr & \\quad \\approx 1.6834\\end{aligned}<br><br>Rounding to 3 significant figures gives $1.68$.",
                        "Integrate analytically to find the exact value:\\begin{aligned}\\int_1^5 \\dfrac{1}{x} \\text{d}x &= [ \\ln x ]_1^5 \\cr &= \\ln 5 - \\ln 1 \\cr &= \\ln 5 \\approx 1.6094\\end{aligned}",
                        "Calculate the percentage error:<br>\\begin{aligned}&\\text{Percentage Error} \\cr & \\quad = \\dfrac{|1.6834 - 1.6094|}{1.6094} \\times 100\\% \\cr & \\quad = \\dfrac{0.0740}{1.6094} \\times 100\\% \\cr & \\quad \\approx 4.598\\%\\end{aligned}<br><br>Rounding to 3 significant figures gives $4.60\\%$.",
                        "Final Answer:<br>$$1.68, \\quad \\ln 5, \\quad 4.60\\%$$"
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
                "branch": "Pure",
                "level": "A",
                "major_area": "Exponentials and Logarithms",
                "topic": "Numerical Methods",
                "subtopic": [
                        "Exponential and Logarithmic Functions and Graphs",
                        "Trapezium Rule"
                ],
                "img": false,
                "question": "1. Use the trapezium rule, with four strips each of width 0.5, to estimate the value of:<br>$$\\int_1^3 \\ln(2x - 1) \\text{d}x$$<br>giving your answer correct to 3 significant figures.<br><br>2. Explain whether using more strips would increase or decrease the width of each strip, and how this change affects the accuracy of the approximation.",
                "steps": [
                        "For four strips of width $h = 0.5$ on the interval $[1, 3]$, the coordinate points are $x_0 = 1$, $x_1 = 1.5$, $x_2 = 2.0$, $x_3 = 2.5$, and $x_4 = 3.0$.",
                        "Evaluate $f(x) = \\ln(2x - 1)$ at each of these points:<br>\\begin{aligned}y_0 &= \\ln(2(1) - 1) \\cr&= \\ln(1) \\cr&= 0\\end{aligned}<br>\\begin{aligned}y_1 &= \\ln(2(1.5) - 1) \\cr&= \\ln(2) \\approx 0.6931\\end{aligned}<br>\\begin{aligned}y_2 &= \\ln(2(2.0) - 1) \\cr&= \\ln(3) \\approx 1.0986\\end{aligned}<br>\\begin{aligned}y_3 &= \\ln(2(2.5) - 1) \\cr&= \\ln(4) \\approx 1.3863\\end{aligned}<br>\\begin{aligned}y_4 &= \\ln(2(3.0) - 1) \\cr&= \\ln(5) \\approx 1.6094\\end{aligned}",
                        "Apply the trapezium rule formula to estimate the value of the integral:\\begin{aligned} & \\text{Estimate} \\cr & \\quad = \\dfrac{h}{2} [ y_0 + y_4 + 2(y_1 + y_2 + y_3) ] \\cr & \\quad = \\dfrac{0.5}{2} \\times \\cr & \\quad [ 0 + 1.6094 \\cr & \\quad \\quad + 2(0.6931 + 1.0986 \\cr & \\quad \\quad \\quad + 1.3863) ] \\cr & \\quad = 0.25 [ 1.6094 + 2(3.1780) ] \\cr & \\quad = 0.25 [ 1.6094 + 6.3560 ] \\cr & \\quad = 0.25 [ 7.9654 ] \\cr & \\quad \\approx 1.9913\\end{aligned}<br><br>Rounding to 3 significant figures gives $1.99$.",
                        "Using more strips (increasing $n$) would decrease the width of each strip ($h$), because $h = \\dfrac{b-a}{n}$. As the width of the strips decreases, the straight-line tops of the trapezia follow the curve of $y = \\ln(2x-1)$ more closely, thereby increasing the accuracy of the approximation.",
                        "Final Answer: $$1.99$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$1.99$$",
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
                "branch": "Pure",
                "level": "AS",
                "major_area": "Numerical Methods",
                "topic": "Numerical Methods",
                "subtopic": [
                        "Modelling and Applications",
                        "Trapezium Rule"
                ],
                "img": false,
                "question": "A surveyor measures the depth of a river, $d$ metres, at horizontal distances $x$ metres from one of its banks. The results are recorded in the table below:<br><br>* $x = 0$ metres: $d = 0$ metres<br>* $x = 1.5$ metres: $d = 0.8$ metres<br>* $x = 3.0$ metres: $d = 1.4$ metres<br>* $x = 4.5$ metres: $d = 1.1$ metres<br>* $x = 6.0$ metres: $d = 0$ metres<br><br>1. Use the trapezium rule with 4 strips to estimate the cross-sectional area of the river.<br>2. State one limitation of using this mathematical model to estimate the cross-sectional area of a real river.",
                "steps": [
                        "The horizontal intervals are spaced at equal steps of $1.5$ metres, which means the strip width is $h = 1.5$ metres.",
                        "The corresponding depth coordinates (our $y$-values) are $d_0 = 0$, $d_1 = 0.8$, $d_2 = 1.4$, $d_3 = 1.1$, and $d_4 = 0$.",
                        "Apply the trapezium rule to estimate the area:\\begin{aligned} & \\text{Area} \\cr & \\quad \\approx \\dfrac{h}{2} [ d_0 + d_4 + 2(d_1 + d_2 + d_3) ] \\cr & \\quad = \\dfrac{1.5}{2} \\times \\cr & \\quad [ 0 + 0 \\cr & \\quad \\quad + 2(0.8 + 1.4 \\cr & \\quad \\quad \\quad + 1.1) ] \\cr & \\quad = 0.75 [ 2(3.3) ] \\cr & \\quad = 0.75 [ 6.6 ] \\cr & \\quad = 4.95\\end{aligned}<br><br>So the estimated cross-sectional area is $4.95\\text{ m}^2$.",
                        "One limitation of this model is that the trapezium rule assumes the riverbed consists of straight, flat slopes between the measured depths (represented by the straight top edges of the trapezia). In reality, riverbeds are smooth, irregular curves, so this straight-line approximation introduces a modeling error.",
                        "Final Answer: $$4.95\\text{ m}^2$$"
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
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Curved Graphs",
                        "Proof",
                        "Quadratics"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning. Find the two real roots of the equation:<br>$$x^4 - 12 = 4x^2$$<br>Give the roots in an exact form.",
                "steps": [
                        "Rearrange the equation to bring all terms to one side of the equals sign:<br>$$x^4 - 4x^2 - 12 = 0$$",
                        "This is a quartic equation in a quadratic form. We can introduce a substitution parameter, letting $y = x^2$. This transforms our equation into a quadratic in terms of $y$:<br>$$y^2 - 4y - 12 = 0$$",
                        "Factorise the quadratic expression by finding two numbers that multiply to $-12$ and add to $-4$. These numbers are $-6$ and $2$:<br>$$(y - 6)(y + 2) = 0$$",
                        "Solve for $y$:<br>\\begin{aligned}y &= 6 \\quad \\text{or} \\quad y \\cr&= -2\\end{aligned}",
                        "Substitute $x^2$ back in place of $y$ to solve for our original variable $x$:<br>\\begin{aligned}x^2 &= 6 \\quad \\text{or} \\quad x^2 \\cr&= -2\\end{aligned}",
                        "Since $x$ must be a real root, $x^2$ must be greater than or equal to $0$. The equation $x^2 = -2$ has no real solutions. Therefore, we only solve:<br>\\begin{aligned}x^2 &= 6 \\cr x &= \\pm\\sqrt{6}\\end{aligned}",
                "Final Answer: $$x = \\pm\\sqrt{6}$$"
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
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Proof",
                        "Quadratics"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning. Find the real roots of the equation:<br>$$x - 5\\sqrt{x} + 6 = 0$$<br>Give the roots in an exact form.",
                "steps": [
                        "This equation is a disguised quadratic. Let $t = \\sqrt{x}$, which implies $x = t^2$ (for $x \\ge 0$). Substitute these into the equation:<br>$$t^2 - 5t + 6 = 0$$",
                        "Factorise the quadratic equation by finding two numbers that multiply to $6$ and add to $-5$. These numbers are $-2$ and $-3$:<br>$$(t - 2)(t - 3) = 0$$",
                        "Solve for $t$:<br>\\begin{aligned}t &= 2 \\quad \\text{or} \\quad t \\cr&= 3\\end{aligned}",
                        "Substitute $\\sqrt{x}$ back in place of $t$ to find our original variable $x$:<br>\\begin{aligned}\\sqrt{x} &= 2 \\cr x &= 2^2 = 4\\end{aligned}<br>\\begin{aligned}\\sqrt{x} &= 3 \\cr x &= 3^2 = 9\\end{aligned}",
                        "Verify that both solutions are valid by substituting them back into the original equation:<br>For $x = 4$: $4 - 5\\sqrt{4} + 6 = 4 - 10 + 6 = 0$ (Valid).<br>For $x = 9$: $9 - 5\\sqrt{9} + 6 = 9 - 15 + 6 = 0$ (Valid).",
                "Final Answer: $$x = 4, \\quad 9$$"
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
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Proof",
                        "Quadratics"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning. Find the four real roots of the equation:<br>$$x^2 + \\dfrac{4}{x^2} = 5$$<br>Give the roots in an exact form.",
                "steps": [
                        "Multiply every term in the equation by $x^2$ (where $x \\ne 0$) to eliminate the fraction:<br>$$x^2\\left(x^2\\right) + x^2\\left(\\dfrac{4}{x^2}\\right) = 5\\left(x^2\\right)$$<br>$$x^4 + 4 = 5x^2$$",
                        "Rearrange the terms into a standard polynomial form:<br>$$x^4 - 5x^2 + 4 = 0$$",
                        "This is a quartic equation in a quadratic form. Let $y = x^2$, which gives us:<br>$$y^2 - 5y + 4 = 0$$",
                        "Factorise the quadratic equation:<br>$$(y - 1)(y - 4) = 0$$",
                        "Solve for $y$:<br>\\begin{aligned}y &= 1 \\quad \\text{or} \\quad y \\cr&= 4\\end{aligned}",
                        "Substitute $x^2$ back into our equations to solve for $x$:<br>\\begin{aligned}x^2 &= 1 \\cr x &= \\pm 1\\end{aligned}<br>\\begin{aligned}x^2 &= 4 \\cr x &= \\pm 2\\end{aligned}",
                "Final Answer: $$x = -2, \\quad -1, \\quad 1, \\quad 2$$"
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
                "branch": "Pure",
                "level": "A",
                "major_area": "Exponentials and Logarithms",
                "topic": "Exponentials and Logarithms",
                "subtopic": [
                        "Exponential and Logarithmic Functions and Graphs",
                        "Proof",
                        "Quadratics"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning. Find the unique real root of the equation:<br>$$e^{2x} - 2e^x - 3 = 0$$<br>Give the root in an exact form, using natural logarithms.",
                "steps": [
                        "This equation is a disguised quadratic because $e^{2x} = \\left(e^x\\right)^2$. Let $u = e^x$ (where $u > 0$). Substituting this into the equation yields:<br>$$u^2 - 2u - 3 = 0$$",
                        "Factorise the quadratic equation:<br>$$(u - 3)(u + 1) = 0$$",
                        "Solve for $u$:<br>\\begin{aligned}u &= 3 \\quad \\text{or} \\quad u \\cr&= -1\\end{aligned}",
                        "Now substitute $e^x$ back in place of $u$:<br>\\begin{aligned}e^x &= 3 \\quad \\text{or} \\quad e^x \\cr&= -1\\end{aligned}",
                        "Since the exponential function $e^x$ is strictly positive for all real values of $x$ ($e^x > 0$), the equation $e^x = -1$ has no real solutions and is discarded.",
                        "Solve the remaining equation by taking the natural logarithm of both sides:<br>\\begin{aligned}e^x &= 3 \\cr x &= \\ln 3\\end{aligned}",
                "Final Answer: $$x = \\ln 3$$"
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
                "branch": "Pure",
                "level": "A",
                "major_area": "Trigonometry",
                "topic": "Trigonometric Identities",
                "subtopic": [
                        "Proof",
                        "Quadratics",
                        "Trigonometry"
                ],
                "img": false,
                "question": "In this question you must show detailed reasoning. Find all real solutions to the equation:<br>$$2\\sin^2\\theta + 3\\cos\\theta - 3 = 0$$<br>for $0^\\circ \\le \\theta \\le 360^\\circ$.",
                "steps": [
                        "To solve this equation, we must express all trigonometric terms in terms of a single function. Use the Pythagorean identity $\\sin^2\\theta = 1 - \\cos^2\\theta$:<br>$$2\\left(1 - \\cos^2\\theta\\right) + 3\\cos\\theta - 3 = 0$$",
                        "Expand and simplify the expression:<br>$$2 - 2\\cos^2\\theta + 3\\cos\\theta - 3 = 0$$<br>$$-2\\cos^2\\theta + 3\\cos\\theta - 1 = 0$$",
                        "Multiply the entire equation by $-1$ to make the leading coefficient positive:<br>$$2\\cos^2\\theta - 3\\cos\\theta + 1 = 0$$",
                        "This is a disguised quadratic. Let $u = \\cos\\theta$, which gives us:<br>$$2u^2 - 3u + 1 = 0$$",
                        "Factorise the quadratic expression:<br>$$(2u - 1)(u - 1) = 0$$",
                        "Solve for $u$:<br>\\begin{aligned}u &= \\dfrac{1}{2} \\quad \\text{or} \\quad u \\cr&= 1\\end{aligned}",
                        "Substitute $\\cos\\theta$ back into our solutions:<br>\\begin{aligned}\\cos\\theta &= \\dfrac{1}{2} \\quad \\text{or} \\quad \\cos\\theta \\cr&= 1\\end{aligned}",
                        "Find all solutions for $\\theta$ within the specified domain $0^\\circ \\le \\theta \\le 360^\\circ$:<br>For $\\cos\\theta = 1$: $\\theta = 0^\\circ$ and $\\theta = 360^\\circ$ (both endpoints are inclusive).<br>For $\\cos\\theta = \\dfrac{1}{2}$: $\\theta = 60^\\circ$ and $\\theta = 360^\\circ - 60^\\circ = 300^\\circ$.",
                        "Combine all solutions in ascending order:<br>$$\\theta = 0^\\circ, \\quad 60^\\circ, \\quad 300^\\circ, \\quad 360^\\circ$$",
                "Final Answer: $$\\theta = 0^\\circ, \\quad 60^\\circ, \\quad 300^\\circ, \\quad 360^\\circ$$"
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
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Proof",
                "subtopic": [
                        "Proof"
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
                        "Since the expression is odd in both the even and odd cases, $n^3 + 5n - 1$ is odd for all positive integers $n$.",
                "Final Answer: $$2(4k^3 + 5k) - 1 \\text{ and } 2(4k^3 + 6k^2 + 8k + 2) + 1 \\text{ are odd}$$"
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
                "branch": "Pure",
                "level": "AS",
                "major_area": "Integration",
                "topic": "Proof",
                "subtopic": [
                        "Proof"
                ],
                "img": false,
                "question": "Prove algebraically that $n^2 + 3n + 2$ is even for all positive integers $n$.",
                "steps": [
                        "We can prove this claim elegantly by factorising the quadratic expression. Find two numbers that multiply to $2$ and add to $3$, which are $1$ and $2$:<br>$$n^2 + 3n + 2 = (n + 1)(n + 2)$$",
                        "Observe the two factors: $(n + 1)$ and $(n + 2)$ are consecutive positive integers.",
                        "For any two consecutive positive integers, one of the numbers must be even and the other must be odd.",
                        "Since one of the factors is even, it can be written in the form $2k$, where $k$ is an integer. The product of the two factors can therefore be written as:<br>$$\\text{Product} = 2k \\times (\\text{the other factor})$$<br>$$= 2 \\left[ k \\times (\\text{the other factor}) \\right]$$",
                        "Since the product has a factor of $2$, the expression $(n + 1)(n + 2)$ must be even for all positive integers $n$.",
                "Final Answer: $$(n+1)(n+2) \\text{ contains an even factor}$$"
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
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Proof",
                "subtopic": [
                        "Proof"
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
                        "Since $n^2 + 2$ is not divisible by $4$ in either case, the expression is not divisible by $4$ for any positive integer $n$.",
                "Final Answer: $$4k^2 + 2 \\text{ and } 4(k^2 + k) + 3 \\text{ leave remainders}$$"
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
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Proof",
                "subtopic": [
                        "Algebraic Methods",
                        "Proof"
                ],
                "img": false,
                "question": "Prove by exhaustion that $n^2 + n + 11$ is a prime number for all integers $n$ such that $1 \\le n \\le 5$.",
                "steps": [
                        "A proof by exhaustion requires us to test every individual value of $n$ within the given domain, which is $n \\in \\\\{1, 2, 3, 4, 5\\\\}$.",
                        "Test $n = 1$:<br>\\begin{aligned}1^2 + 1 + 11 &= 1 + 1 + 11 \\cr&= 13\\end{aligned}<br>Since $13$ is only divisible by $1$ and itself, it is a prime number.",
                        "Test $n = 2$:<br>\\begin{aligned}2^2 + 2 + 11 &= 4 + 2 + 11 \\cr&= 17\\end{aligned}<br>Since $17$ is only divisible by $1$ and itself, it is a prime number.",
                        "Test $n = 3$:<br>\\begin{aligned}3^2 + 3 + 11 &= 9 + 3 + 11 \\cr&= 23\\end{aligned}<br>Since $23$ is only divisible by $1$ and itself, it is a prime number.",
                        "Test $n = 4$:<br>\\begin{aligned}4^2 + 4 + 11 &= 16 + 4 + 11 \\cr&= 31\\end{aligned}<br>Since $31$ is only divisible by $1$ and itself, it is a prime number.",
                        "Test $n = 5$:<br>\\begin{aligned}5^2 + 5 + 11 &= 25 + 5 + 11 \\cr&= 41\\end{aligned}<br>Since $41$ is only divisible by $1$ and itself, it is a prime number.",
                        "Since we have tested every single integer in the domain $1 \\le n \\le 5$ and obtained a prime number in each case, the claim is proven by exhaustion.",
                "Final Answer: $$13, \\, 17, \\, 23, \\, 31, \\, 41 \\text{ are prime}$$"
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
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Proof",
                "subtopic": [
                        "Proof"
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
                        "Since our assumption that the sum is rational leads to a contradiction, the assumption must be false. Therefore, the sum of a rational number and an irrational number must be irrational.",
                "Final Answer: \\begin{aligned}x &= q - r \\cr\\text{contradiction}\\end{aligned}"
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
        },
        {
                "id": "004166",
                "board": "OCR",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Differentiation",
                "topic": "Circles",
                "subtopic": [
                        "Circle Geometry",
                        "Tangents and Normals"
                ],
                "img": false,
                "question": "The equation of a circle is $x^2 + y^2 + 4x - 6y + 3 = 0$.<br><br>1. Find the centre and radius of the circle.<br>2. Find the coordinates of any points where the line $y = -3x + 7$ meets the circle $x^2 + y^2 + 4x - 6y + 3 = 0$.<br>3. State what can be deduced from your answer to part (2) about the line $y = -3x + 7$ and the circle.",
                "steps": [
                        "To find the centre and radius of the circle, we rearrange the terms and complete the square for both $x$ and $y$:<br>$$x^2 + 4x + y^2 - 6y + 3 = 0$$",
                        "Complete the square for the $x$ terms and the $y$ terms separately:<br>$$x^2 + 4x = \\left(x + 2\\right)^2 - 4$$<br>$$y^2 - 6y = \\left(y - 3\\right)^2 - 9$$",
                        "Substitute these completed squares back into the original equation and simplify:<br>$$\\left(x + 2\\right)^2 - 4 + \\left(y - 3\\right)^2 - 9 + 3 = 0$$<br>$$\\left(x + 2\\right)^2 + \\left(y - 3\\right)^2 - 10 = 0$$<br>$$\\left(x + 2\\right)^2 + \\left(y - 3\\right)^2 = 10$$<br>So, the centre of the circle is $(-2, 3)$ and the radius is $\\sqrt{10}$.",
                        "To find the points of intersection, substitute the line equation $y = -3x + 7$ into the original equation of the circle:<br>$$x^2 + \\left(-3x + 7\\right)^2 + 4x - 6\\left(-3x + 7\\right) + 3 = 0$$",
                        "Expand and simplify the algebraic terms:<br>$$x^2 + \\left(9x^2 - 42x + 49\\right) + 4x + 18x - 42 + 3 = 0$$<br>$$10x^2 - 20x + 10 = 0$$",
                        "Divide the quadratic equation by $10$ to simplify factorisation:<br>\\begin{aligned}x^2 - 2x + 1 &= 0 \\cr\\left(x - 1\\right)^2 &= 0\\end{aligned}<br>This quadratic equation has a single repeated real root:<br>$$x = 1$$",
                        "Substitute $x = 1$ back into the line equation to find the corresponding $y$-coordinate:<br>\\begin{aligned}y &= -3\\left(1\\right) + 7 \\cr&= 4\\end{aligned}<br>So, the line meets the circle at the single coordinate point $(1, 4)$.",
                        "Since there is exactly one point of intersection, we can deduce that the line $y = -3x + 7$ is a tangent to the circle at the point $(1, 4)$.",
                "Final Answer: $$(-2, 3), \\quad \\sqrt{10}, \\quad (1, 4), \\quad \\text{tangent}$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$(2, -3), \\quad \\sqrt{10}, \\quad (1, 4), \\quad \\text{tangent}$$",
                                "feedback": "Be careful with the signs of your coordinates when extracting the centre from standard form. The equation $\\left(x+2\\right)^2 + \\left(y-3\\right)^2 = 10$ means the centre is $(-2, 3)$, not $(2, -3)$."
                        },
                        {
                                "ans": "$$(-2, 3), \\quad 10, \\quad (1, 4), \\quad \\text{secant}$$",
                                "feedback": "Remember that the right-hand side of the circle equation represents $r^2$, so the radius is $\\sqrt{10}$, not $10$. Additionally, a line with exactly one intersection point is a tangent, not a secant."
                        },
                        {
                                "ans": "$$(-2, 3), \\quad \\sqrt{10}, \\quad (1, 4) \\text{ and } (-1, 10), \\quad \\text{secant}$$",
                                "feedback": "Check your quadratic expansion steps. It looks like you may have had a sign error which led to a positive discriminant and two intersection points. Verify that $10x^2 - 20x + 10 = 0$ simplifies to $\\left(x-1\\right)^2 = 0$, yielding only one repeated root."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Repeated Roots meaning Tangency",
                        "content": "Finding intersections between a line and a curve is algebraically identical to solving a quadratic equation. If the resulting quadratic has a discriminant $\\Delta = 0$ (a repeated root), the line touches the curve at exactly one point, confirming it is a tangent."
                }
        },
        {
                "id": "004167",
                "board": "OCR",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Coordinate Geometry",
                "topic": "Circles",
                "subtopic": [
                        "Circle Geometry",
                        "Trigonometry"
                ],
                "img": false,
                "question": "The equation of a circle is $x^2 + y^2 - 6x - 4y - 12 = 0$.<br><br>1. Show that the circle has centre $(3, 2)$ and find its radius.<br>2. Find the coordinates of the points of intersection of the line $y = x + 4$ and the circle.<br>3. State what can be deduced from your answer to part (2) about the relationship between the line and the circle.",
                "steps": [
                        "Rearrange the terms and complete the square for both variables to find the centre and radius of the circle:<br>$$x^2 - 6x + y^2 - 4y - 12 = 0$$",
                        "Complete the square for $x$ and $y$ separately:<br>$$x^2 - 6x = \\left(x - 3\\right)^2 - 9$$<br>$$y^2 - 4y = \\left(y - 2\\right)^2 - 4$$",
                        "Substitute these back into the original equation and simplify:<br>$$\\left(x - 3\\right)^2 - 9 + \\left(y - 2\\right)^2 - 4 - 12 = 0$$<br>$$\\left(x - 3\\right)^2 + \\left(y - 2\\right)^2 - 25 = 0$$<br>$$\\left(x - 3\\right)^2 + \\left(y - 2\\right)^2 = 25$$<br>This confirms the centre is $(3, 2)$, and the radius is $\\sqrt{25} = 5$.",
                        "To find the points of intersection, substitute the line equation $y = x + 4$ into the original circle equation:<br>$$x^2 + \\left(x + 4\\right)^2 - 6x - 4\\left(x + 4\\right) - 12 = 0$$",
                        "Expand the brackets and simplify the quadratic expression:<br>$$x^2 + \\left(x^2 + 8x + 16\\right) - 6x - 4x - 16 - 12 = 0$$<br>$$2x^2 - 2x - 12 = 0$$",
                        "Divide the entire equation by $2$ to simplify factorisation:<br>\\begin{aligned}x^2 - x - 6 &= 0 \\cr\\left(x - 3\\right)\\left(x + 2\\right) &= 0\\end{aligned}<br>This yields two distinct real solutions for the $x$-coordinates:<br>\\begin{aligned}x &= 3 \\quad \\text{or} \\quad x \\cr&= -2\\end{aligned}",
                        "Substitute these $x$ values back into the line equation $y = x + 4$ to find the corresponding $y$-coordinates:<br>For $x = 3$: $y = 3 + 4 = 7 \\implies (3, 7)$<br>For $x = -2$: $y = -2 + 4 = 2 \\implies (-2, 2)$",
                        "Since there are two distinct points of intersection, we can deduce that the line $y = x + 4$ is a secant line that cuts through the circle at $(3, 7)$ and $(-2, 2)$.",
                "Final Answer: $$5, \\quad (3, 7) \\text{ and } (-2, 2), \\quad \\text{secant}$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$5, \\quad (3, 7) \\text{ and } (-2, 2), \\quad \\text{tangent}$$",
                                "feedback": "Your coordinates are correct, but a line that intersects a circle at two distinct points cannot be a tangent. It is a secant."
                        },
                        {
                                "ans": "$$\\sqrt{12}, \\quad (3, 7) \\text{ and } (-2, 2), \\quad \\text{secant}$$",
                                "feedback": "Check your radius calculation. In the simplified form, you have $-9 - 4 - 12 = -25$. Moving this to the right-hand side yields $+25$, so the radius is $\\sqrt{25} = 5$, not $\\sqrt{12}$."
                        },
                        {
                                "ans": "$$5, \\quad (3, 7) \\text{ and } (2, 6), \\quad \\text{secant}$$",
                                "feedback": "It looks like you made a sign error when solving the quadratic equation. Double-check that $x^2-x-6=0$ factorises to $\\left(x-3\\right)\\left(x+2\\right)=0$, which yields $x=3$ and $x=-2$ as your $x$-coordinates."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Naming Relationships",
                        "content": "A straight line can only have three possible geometric relationships with a circle: it can be a tangent (exactly 1 intersection), a secant (exactly 2 intersections), or it can have no intersections at all."
                }
        },
        {
                "id": "004168",
                "board": "OCR",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Coordinate Geometry",
                "topic": "Circles",
                "subtopic": [
                        "Circle Geometry"
                ],
                "img": false,
                "question": "The equation of a circle is $x^2 + y^2 - 2x - 8y + 12 = 0$.<br><br>1. Find the centre and radius of the circle.<br>2. Show algebraically that the line $y = x + 8$ does not meet the circle.<br>3. State what can be deduced from your answer to part (2) about the relationship between the line and the circle.",
                "steps": [
                        "Complete the square for both $x$ and $y$ to write the circle in standard form:<br>$$x^2 - 2x + y^2 - 8y + 12 = 0$$<br>$$\\left(x - 1\\right)^2 - 1 + \\left(y - 4\\right)^2 - 16 + 12 = 0$$<br>$$\\left(x - 1\\right)^2 + \\left(y - 4\\right)^2 = 5$$<br>So, the centre of the circle is $(1, 4)$ and the radius is $\\sqrt{5}$.",
                        "To show that the line $y = x + 8$ does not meet the circle, substitute $y = x + 8$ into the original circle equation:<br>$$x^2 + \\left(x + 8\\right)^2 - 2x - 8\\left(x + 8\\right) + 12 = 0$$",
                        "Expand and collect like terms to form a quadratic equation in terms of $x$:<br>$$x^2 + \\left(x^2 + 16 x + 64\\right) - 2x - 8x - 64 + 12 = 0$$<br>$$2x^2 + 6x + 12 = 0$$",
                        "Divide the quadratic equation by $2$ to simplify:<br>$$x^2 + 3x + 6 = 0$$",
                        "To prove there are no real roots (no intersection points), calculate the discriminant $\\Delta = b^2 - 4ac$ of this quadratic equation, where $a = 1, b = 3, c = 6$:<br>\\begin{aligned}\\Delta &= 3^2 - 4\\left(1\\right)\\left(6\\right) \\cr&= 9 - 24 \\cr&= -15\\end{aligned}",
                        "Since the discriminant is negative ($\\Delta < 0$), the quadratic equation has no real solutions. This proves algebraically that the line does not meet the circle.",
                        "From this, we can deduce that the line $y = x + 8$ has no points in common with the circle and lies entirely outside the circle.",
                "Final Answer: $$(1, 4), \\quad \\sqrt{5}, \\quad \\Delta = -15 < 0$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$(1, 4), \\quad 5, \\quad \\Delta = -15 < 0$$",
                                "feedback": "Remember that the right-hand side of your simplified circle equation represents $r^2$. The radius of the circle is $\\sqrt{5}$, not $5$."
                        },
                        {
                                "ans": "$$(-1, -4), \\quad \\sqrt{5}, \\quad \\Delta = -15 < 0$$",
                                "feedback": "Check your signs. The completed square form is $\\left(x-1\\right)^2 + \\left(y-4\\right)^2 = 5$, which means the coordinates of the centre are $(1, 4)$, not $(-1, -4)$."
                        },
                        {
                                "ans": "$$(1, 4), \\quad \\sqrt{5}, \\quad \\Delta = 57 > 0$$",
                                "feedback": "You may have made an expansion error when substituting the line. Be careful with signs: $-8\\left(x+8\\right) = -8x - 64$. Ensure all terms are correctly expanded before finding the discriminant."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Proving Non-Intersection",
                        "content": "To show that a line does not intersect a curve, the most robust algebraic method is to set up the quadratic intersection equation and show that its discriminant is strictly negative ($b^2 - 4ac < 0$)."
                }
        },
        {
                "id": "004169",
                "board": "OCR",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Differentiation",
                "topic": "Circles",
                "subtopic": [
                        "Circle Geometry",
                        "Coordinate Geometry",
                        "Tangents and Normals"
                ],
                "img": false,
                "question": "The circle $C$ has equation $x^2 + y^2 = 5$.<br><br>1. Write down the coordinates of the centre of the circle and state its radius.<br>2. The line $L$ has equation $y = 2x + k$, where $k$ is a constant. Show that if $L$ is a tangent to the circle, then $k = \\pm 5$.",
                "steps": [
                        "The equation $x^2 + y^2 = 5$ is already in the standard form of a circle centred at the origin $(0, 0)$. The radius is given by $\\sqrt{5}$.",
                        "For the line $y = 2x + k$ to be a tangent to the circle, the perpendicular distance from the centre of the circle $(0, 0)$ to the line must be exactly equal to the radius of the circle, which is $\\sqrt{5}$.",
                        "Rearrange the line equation into the general straight-line form $Ax + By + C = 0$:<br>$$2x - y + k = 0$$",
                        "Recall the formula for the perpendicular distance $d$ from a point $(x_1, y_1)$ to a line $Ax + By + C = 0$:<br>$$d = \\dfrac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}}$$",
                        "Substitute the coordinates of the centre $(0, 0)$ and the coefficients of our line ($A = 2, B = -1, C = k$) into the formula:<br>\\begin{aligned}d &= \\dfrac{|2\\left(0\\right) - 0 + k|}{\\sqrt{2^2 + \\left(-1\\right)^2}} \\cr&= \\dfrac{|k|}{\\sqrt{5}}\\end{aligned}",
                        "Set this distance equal to the radius $\\sqrt{5}$ and solve for $k$:<br>\\begin{aligned}\\dfrac{|k|}{\\sqrt{5}} &= \\sqrt{5} \\cr|k| &= 5 \\crk &= \\pm 5\\end{aligned}",
                "Final Answer: $$k = \\pm 5$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$k = \\pm \\sqrt{5}$$",
                                "feedback": "It looks like you forgot to multiply by the denominator when solving. Multiplying $\\dfrac{|k|}{\\sqrt{5}} = \\sqrt{5}$ by $\\sqrt{5}$ yields $|k| = 5$, not $|k| = \\sqrt{5}$."
                        },
                        {
                                "ans": "$$k = \\pm 1$$",
                                "feedback": "You may have made an error when finding the length of the normal vector in the denominator. The denominator is $\\sqrt{2^2 + \\left(-1\\right)^2} = \\sqrt{5}$. Ensure you do not use $\\sqrt{2^2 + 1} = \\sqrt{3}$ or similar by mistake."
                        },
                        {
                                "ans": "$$k = 5$$",
                                "feedback": "Remember that solving $|k| = 5$ yields two possible values: a positive and a negative constant ($k = \\pm 5$), both of which represent valid parallel tangent lines on opposite sides of the circle."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Parallel Tangents",
                        "content": "For any given gradient, there are always exactly two parallel lines that are tangent to a circle. This is why our absolute value equation yields two symmetric solutions ($k = \\pm 5$)."
                }
        },
        {
                "id": "004170",
                "board": "OCR",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Differentiation",
                "topic": "Circles",
                "subtopic": [
                        "Circle Geometry",
                        "Linear Equations",
                        "Tangents and Normals"
                ],
                "img": false,
                "question": "The circle $C$ has equation $x^2 + y^2 - 6x - 8y + 15 = 0$.<br><br>1. Find the centre and radius of the circle.<br>2. Show that the point $P(2, 1)$ lies on the circle.<br>3. Find the equation of the tangent to the circle at the point $P$. Give your answer in the form $ax + by = c$, where $a$, $b$, and $c$ are integers.",
                "steps": [
                        "Complete the square for the circle equation to find its centre and radius:<br>$$x^2 - 6x + y^2 - 8y + 15 = 0$$<br>$$\\left(x - 3\\right)^2 - 9 + \\left(y - 4\\right)^2 - 16 + 15 = 0$$<br>$$\\left(x - 3\\right)^2 + \\left(y - 4\\right)^2 = 10$$<br>So, the centre of the circle is $C(3, 4)$ and the radius is $\\sqrt{10}$.",
                        "To show that point $P(2, 1)$ lies on the circle, substitute $x = 2$ and $y = 1$ into the original equation:<br>\\begin{aligned}2^2 + 1^2 - 6\\left(2\\right) - 8\\left(1\\right) + 15 &= 4 + 1 - 12 - 8 + 15 \\cr&= 0\\end{aligned}<br>Since the point satisfies the equation, $P(2, 1)$ lies on the circle.",
                        "Find the gradient of the radius line connecting the centre $C(3, 4)$ and the point $P(2, 1)$ using $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$:<br>\\begin{aligned}m_{\\text{radius}} &= \\dfrac{1 - 4}{2 - 3} \\cr&= \\dfrac{-3}{-1} \\cr&= 3\\end{aligned}",
                        "The tangent line is perpendicular to the radius at the point of contact. Find the gradient of the tangent using the negative reciprocal relationship:<br>\\begin{aligned}m_{\\text{tangent}} &= -\\dfrac{1}{m_{\\text{radius}}} \\cr&= -\\dfrac{1}{3}\\end{aligned}",
                        "Write the equation of the tangent line passing through $P(2, 1)$ using the point-slope formula:<br>$$y - 1 = -\\dfrac{1}{3}\\left(x - 2\\right)$$",
                        "Multiply by $3$ to clear the fraction and rearrange into the form $ax + by = c$ where $a, b, c \\in \\mathbb{Z}$:<br>$$3(y - 1) = -(x - 2)$$<br>\\begin{aligned}3y - 3 &= -x + 2 \\cr x + 3y &= 5\\end{aligned}",
                "Final Answer: $$x + 3y = 5$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$3x - y = 5$$",
                                "feedback": "You may have used the gradient of the radius ($3$) directly instead of finding the perpendicular gradient of the tangent. Tangents are perpendicular to radii, so the gradient must be $-\\dfrac{1}{3}$."
                        },
                        {
                                "ans": "$$x + 3y = 7$$",
                                "feedback": "Check your expansion of the right-hand side. Multiplying $-\\dfrac{1}{3}$ by $-2$ yields $+\\dfrac{2}{3}$, which becomes $+2$ when multiplied through by $3$. Your constant term should be $5$, not $7$."
                        },
                        {
                                "ans": "$$3x + y = 7$$",
                                "feedback": "This is the equation of the normal line (the radius extended). Remember that the normal line has the same gradient as the radius ($3$), while the tangent has the negative reciprocal gradient ($-\\dfrac{1}{3}$)."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Tangents and Normals",
                        "content": "In circle geometry, the normal to a circle at any point always passes through the centre of the circle. This fact is key for finding the gradient of the tangent line, which is always perpendicular to the normal."
                }
        },
        {
                "id": "004171",
                "board": "OCR",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods",
                        "Graph Transformations",
                        "Inequalities"
                ],
                "img": false,
                "question": "The cubic polynomial $f(x)$ is defined by $f(x) = 2x^3 - 5x^2 - 4x + 3$.<br><br>1. Given that $(x - 3)$ is a factor of $f(x)$, express $f(x)$ in a fully factorised form.<br>2. Sketch the graph of $y = f(x)$, indicating the coordinates of any points of intersection with the axes.<br>3. Solve the inequality $f(x) < 0$, giving your answer in set notation.<br>4. The graph of $y = f(x)$ is transformed by a stretch parallel to the $x$-axis, scale factor $\\dfrac{1}{3}$. Find the equation of the transformed graph.",
                "steps": [
                        "Since $(x - 3)$ is a factor of $f(x)$, we divide $2x^3 - 5x^2 - 4x + 3$ by $(x - 3)$ using algebraic long division or synthetic division to find the quadratic factor:<br>$$2x^3 - 5x^2 - 4x + 3 = \\left(x - 3\\right)\\left(2x^2 + x - 1\\right)$$Base factors can be checked by expansion.",
                        "Factorise the quadratic factor $2x^2 + x - 1$ into linear brackets:<br>$$2x^2 + x - 1 = \\left(2x - 1\\right)\\left(x + 1\\right)$$<br>Combining these yields the fully factorised form of $f(x)$:<br>$$f(x) = \\left(x - 3\\right)\\left(2x - 1\\right)\\left(x + 1\\right)$$",
                        "To sketch the graph of $y = f(x)$, find the axes intercepts:<br>The $x$-intercepts occur where $f(x) = 0 \\implies x = 3, \\, x = 0.5, \\, x = -1$. These are the points $(3, 0)$, $(0.5, 0)$, and $(-1, 0)$.<br>The $y$-intercept occurs where $x = 0 \\implies f(0) = 3$. This is the point $(0, 3)$.<br><br>Since the leading coefficient $2$ is positive, the cubic curve starts in the bottom-left and heads up to the top-right:<br><br><img src='images/Pure_SVGs/004171_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
                        "To solve the inequality $f(x) < 0$, determine the intervals where the cubic curve lies below the $x$-axis. The roots partition the $x$-axis into intervals: $x < -1$, $-1 < x < 0.5$, $0.5 < x < 3$, and $x > 3$.<br><br>By testing values or observing our sketch, we see that $f(x) < 0$ on:<br>$$x < -1 \\quad \\text{and} \\quad 0.5 < x < 3$$",
                        "Express this solution in formal set notation:<br>${x : x < -1$ } \\cup ${x : 0.5 < x < 3$ }",
                        "A stretch parallel to the $x$-axis with a scale factor of $\\dfrac{1}{3}$ replaces $x$ with $3x$ in the equation:<br>$$y = 2\\left(3x\\right)^3 - 5\\left(3x\\right)^2 - 4\\left(3x\\right) + 3$$<br>$$y = 2\\left(27x^3\\right) - 5\\left(9x^2\\right) - 12x + 3$$<br>$$y = 54x^3 - 45x^2 - 12x + 3$$",
                "Final Answer: $$\\left(x - 3\\right)\\left(2x - 1\\right)\\left(x + 1\\right), \\quad \\\\{x : x < -1\\\\} \\cup \\\\{x : 0.5 < x < 3\\\\}, \\quad y = 54x^3 - 45x^2 - 12x + 3$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$5.03$$",
                                "feedback": "This is a numerical value. Make sure you answer the specific parts of the question, providing set notation for the inequality and the full transformed equation."
                        },
                        {
                                "ans": "$$\\left(x - 3\\right)\\left(2x - 1\\right)\\left(x + 1\\right), \\quad \\\\{x : -1 < x < 0.5\\\\} \\cup \\\\{x : x > 3\\\\}, \\quad y = 54x^3 - 45x^2 - 12x + 3$$",
                                "feedback": "Check your inequality signs. The intervals you provided are where $f(x) > 0$. The question asks for $f(x) < 0$, which is where the curve lies below the $x$-axis."
                        },
                        {
                                "ans": "$$\\left(x - 3\\right)\\left(2x - 1\\right)\\left(x + 1\\right), \\quad \\\\{x : x < -1\\\\} \\cup \\\\{x : 0.5 < x < 3\\\\}, \\quad y = 6x^3 - 15x^2 - 12x + 3$$",
                                "feedback": "When stretching parallel to the $x$-axis with scale factor $\\dfrac{1}{3}$, you must replace $x$ with $3x$ before applying exponents. Remember that $\\left(3x\\right)^3 = 27x^3$ and $\\left(3x\\right)^2 = 9x^2$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Horizontal Scaling",
                        "content": "Horizontal transformations are always counterintuitive. A stretch parallel to the $x$-axis with a scale factor of $c$ translates algebraically to replacing $x$ with $\\dfrac{x}{c}$. Thus, a scale factor of $\\dfrac{1}{3}$ requires replacing $x$ with $3x$."
                }
        },
        {
                "id": "004172",
                "board": "OCR",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods",
                        "Graph Transformations",
                        "Inequalities"
                ],
                "img": false,
                "question": "The cubic polynomial $g(x)$ is defined by $g(x) = x^3 - 6x^2 + 11x - 6$.<br><br>1. Show that $x = 1$ is a root of the equation $g(x) = 0$, and hence express $g(x)$ in a fully factorised form.<br>2. Sketch the graph of $y = g(x)$, indicating the coordinates of any points of intersection with the axes.<br>3. Solve the inequality $g(x) \\ge 0$, giving your answer in set notation.<br>4. The graph of $y = g(x)$ is transformed by a translation of vector $\\begin{pmatrix} 2 \\\\\\ -1 \\end{pmatrix}$. Find the equation of the transformed graph.",
                "steps": [
                        "To prove $x = 1$ is a root, substitute $1$ into the polynomial $g(x)$:<br>\\begin{aligned}g(1) &= 1^3 - 6(1)^2 + 11(1) - 6 \\cr&= 1 - 6 + 11 - 6 \\cr&= 0\\end{aligned}<br>Since $g(1) = 0$, the factor theorem states that $(x - 1)$ is a factor of $g(x)$.",
                        "Divide $x^3 - 6x^2 + 11x - 6$ by $(x - 1)$ to find the quadratic factor:<br>$$g(x) = \\left(x - 1\\right)\\left(x^2 - 5x + 6\\right)$$",
                        "Factorise the quadratic factor $x^2 - 5x + 6$ into linear terms:<br>$$x^2 - 5x + 6 = \\left(x - 2\\right)\\left(x - 3\\right)$$<br>This gives the fully factorised form:<br>$$g(x) = \\left(x - 1\\right)\\left(x - 2\\right)\\left(x - 3\\right)$$",
                        "To sketch the graph of $y = g(x)$, determine the intercepts:<br>The $x$-intercepts occur where $g(x) = 0 \\implies x = 1, \\, x = 2, \\, x = 3$. This gives the points $(1, 0)$, $(2, 0)$, and $(3, 0)$.<br>The $y$-intercept occurs where $x = 0 \\implies g(0) = -6$. This is the point $(0, -6)$.<br><br>Sketch the positive cubic passing through these points:<br><br><img src='images/Pure_SVGs/004172_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
                        "To solve the inequality $g(x) \\ge 0$, find where the curve lies on or above the $x$-axis. From our sketch, this occurs on:<br>$$1 \\le x \\le 2 \\quad \\text{and} \\quad x \\ge 3$$",
                        "Express this solution in set notation:<br>{x : 1 \\le x \\le 2 } \\cup {x : x \\ge 3 }",
                        "A translation of vector $\\begin{pmatrix} 2 \\\\\\ -1 \\end{pmatrix}$ shifts the graph $2$ units to the right and $1$ unit down. This replaces $x$ with $(x - 2)$ and $y$ with $(y + 1)$:<br>\\begin{aligned}y + 1 &= g\\left(x - 2\\right) \\cry &= g\\left(x - 2\\right) - 1\\end{aligned}<br>Substituting our factorised expression yields:<br>$$y = \\left(x - 3\\right)\\left(x - 4\\right)\\left(x - 5\\right) - 1$$",
                "Final Answer: $$\\left(x - 1\\right)\\left(x - 2\\right)\\left(x - 3\\right), \\quad \\\\{x : 1 \\le x \\le 2\\\\} \\cup \\\\{x : x \\ge 3\\\\}, \\quad y = \\left(x - 3\\right)\\left(x - 4\\right)\\left(x - 5\\right) - 1$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\left(x - 1\\right)\\left(x - 2\\right)\\left(x - 3\\right), \\quad \\\\{x : x \\le 1\\\\} \\cup \\\\{x : 2 \\le x \\le 3\\\\}, \\quad y = \\left(x - 3\\right)\\left(x - 4\\right)\\left(x - 5\\right) - 1$$",
                                "feedback": "Check your inequality intervals. The regions you selected are where the cubic curve lies below the $x$-axis ($g(x) \\le 0$). The question asks for $g(x) \\ge 0$."
                        },
                        {
                                "ans": "$$\\left(x - 1\\right)\\left(x - 2\\right)\\left(x - 3\\right), \\quad \\\\{x : 1 \\le x \\le 2\\\\} \\cup \\\\{x : x \\ge 3\\\\}, \\quad y = \\left(x - 1\\right)\\left(x - 2\\right)\\left(x - 3\\right) - 1$$",
                                "feedback": "It looks like you forgot to apply the horizontal translation. A translation of vector $\\begin{pmatrix} 2 \\\\\\ -1 \\end{pmatrix}$ requires replacing $x$ with $(x - 2)$ throughout the function."
                        },
                        {
                                "ans": "$$\\left(x - 1\\right)\\left(x - 2\\right)\\left(x - 3\\right), \\quad \\\\{x : 1 \\le x \\le 2\\\\} \\cup \\\\{x : x \\ge 3\\\\}, \\quad y = \\left(x - 3\\right)\\left(x - 4\\right)\\left(x - 5\\right) + 1$$",
                                "feedback": "Be careful with the vertical component of the translation vector. A vertical shift of $-1$ requires subtracting $1$ from the function, not adding $1$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Translational Mapping",
                        "content": "A translation of vector $\\begin{pmatrix} a \\\\ b \\end{pmatrix}$ transforms the function $y = f(x)$ into $y = f(x - a) + b$. Keep this general form in mind to easily apply translations without expanding the entire polynomial."
                }
        },
        {
                "id": "004173",
                "board": "OCR",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods",
                        "Graph Transformations",
                        "Inequalities"
                ],
                "img": false,
                "question": "The cubic polynomial $h(x)$ is defined by $h(x) = x^3 - 3x^2 + 4$.<br><br>1. Show that $(x + 1)$ is a factor of $h(x)$, and express $h(x)$ as a product of linear factors (one of which is repeated).<br>2. Sketch the graph of $y = h(x)$, indicating the coordinates of any points of intersection with the axes.<br>3. Solve the inequality $h(x) > 0$, giving your answer in set notation.<br>4. The graph of $y = h(x)$ is transformed by a stretch parallel to the $y$-axis with scale factor $3$. Find the equation of the transformed graph.",
                "steps": [
                        "To prove $(x + 1)$ is a factor, evaluate $h(-1)$ using the factor theorem:<br>\\begin{aligned}h(-1) &= (-1)^3 - 3(-1)^2 + 4 \\cr&= -1 - 3 + 4 \\cr&= 0\\end{aligned}<br>Since $h(-1) = 0$, $(x + 1)$ is indeed a factor of $h(x)$.",
                        "Divide $x^3 - 3x^2 + 4$ by $(x + 1)$ to find the quadratic factor:<br>$$h(x) = \\left(x + 1\\right)\\left(x^2 - 4x + 4\\right)$$",
                        "Factorise the quadratic factor $x^2 - 4x + 4$:<br>$$x^2 - 4x + 4 = \\left(x - 2\\right)^2$$<br>Thus, the fully factorised form with a repeated factor is:<br>$$h(x) = \\left(x + 1\\right)\\left(x - 2\\right)^2$$",
                        "To sketch the graph of $y = h(x)$, determine the intercepts:<br>The $x$-intercepts occur where $h(x) = 0 \\implies x = -1$ and $x = 2$ (repeated root). The points are $(-1, 0)$ and $(2, 0)$.<br>The $y$-intercept occurs where $x = 0 \\implies h(0) = 4$. This is the point $(0, 4)$.<br><br>Sketch the curve. Note that because $x = 2$ is a repeated root of even multiplicity, the curve touches the $x$-axis and turns around at $(2, 0)$ instead of crossing it:<br><br><img src='images/Pure_SVGs/004173_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
                        "To solve the inequality $h(x) > 0$, find where the curve lies strictly above the $x$-axis. From our sketch, the curve is strictly positive for $x > -1$, except at the repeated root $x = 2$ where $h(2) = 0$.<br><br>Write this solution in set notation:<br>${x : -1 < x < 2$ } \\cup ${x : x > 2$ }",
                        "A stretch parallel to the $y$-axis with a scale factor of $3$ multiplies the entire function by $3$:<br>\\begin{aligned}y &= 3h(x) \\cr&= 3\\left(x^3 - 3x^2 + 4\\right)\\end{aligned}<br>$$y = 3x^3 - 9x^2 + 12$$",
                "Final Answer: $$\\left(x + 1\\right)\\left(x - 2\\right)^2, \\quad \\\\{x : -1 < x < 2\\\\} \\cup \\\\{x : x > 2\\\\}, \\quad y = 3x^3 - 9x^2 + 12$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\left(x + 1\\right)\\left(x - 2\\right)^2, \\quad \\\\{x : x > -1\\\\}, \\quad y = 3x^3 - 9x^2 + 12$$",
                                "feedback": "This is a common trap. While the curve is above the $x$-axis for almost all values of $x > -1$, it touches the $x$-axis at $x = 2$, which means $h(2) = 0$. Since the inequality is strictly $h(x) > 0$, $x = 2$ must be excluded from the solution set."
                        },
                        {
                                "ans": "$$\\left(x + 1\\right)\\left(x - 2\\right)^2, \\quad \\\\{x : -1 < x < 2\\\\} \\cup \\\\{x : x > 2\\\\}, \\quad y = 27x^3 - 27x^2 + 4$$",
                                "feedback": "You may have applied the scale factor to the horizontal variable instead of the vertical one. A stretch parallel to the $y$-axis with scale factor $3$ requires multiplying the entire function by $3$, not replacing $x$ with $3x$."
                        },
                        {
                                "ans": "$$\\left(x + 1\\right)\\left(x - 2\\right)^2, \\quad \\\\{x : x > -1\\\\} \\cup \\\\{2\\\\}, \\quad y = 3x^3 - 9x^2 + 12$$",
                                "feedback": "This is the solution set for the inequality $h(x) \\ge 0$. Since the inequality is strictly $h(x) > 0$, you must exclude $x = 2$ instead of including it."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Repeated Roots and Inequalities",
                        "content": "Pay extremely close attention to the inequality sign when dealing with repeated roots that touch the axis. If the inequality is strict ($> 0$), you must exclude the touching point from your solution set. If it is non-strict ($\\ge 0$), the touching point is included."
                }
        },
        {
                "id": "004174",
                "board": "OCR",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods",
                        "Graph Transformations",
                        "Inequalities"
                ],
                "img": false,
                "question": "The cubic polynomial $f(x)$ is defined by $f(x) = 3x^2 - x^3 - 4$.<br><br>1. Show that $x = -1$ is a root of $f(x) = 0$, and express $f(x)$ in a fully factorised form.<br>2. Sketch the graph of $y = f(x)$, indicating the coordinates of any points of intersection with the axes.<br>3. Solve the inequality $f(x) \\ge 0$, giving your answer in set notation.<br>4. The graph of $y = f(x)$ is transformed by a reflection in the $x$-axis. Find the equation of the transformed graph.",
                "steps": [
                        "To prove $x = -1$ is a root, substitute $-1$ into the polynomial $f(x)$:<br>\\begin{aligned}f(-1) &= 3(-1)^2 - (-1)^3 - 4 \\cr&= 3(1) - (-1) - 4 \\cr&= 3 + 1 - 4 \\cr&= 0\\end{aligned}<br>Since $f(-1) = 0$, $x = -1$ is indeed a root, and $(x + 1)$ is a factor of $f(x)$.",
                        "Divide $3x^2 - x^3 - 4$ (rearranged as $-x^3 + 3x^2 - 4$) by $(x + 1)$ to find the quadratic factor:<br>$$f(x) = \\left(x + 1\\right)\\left(-x^2 + 4x - 4\\right)$$",
                        "Factorise out the negative sign to simplify:<br>\\begin{aligned}f(x) &= -\\left(x + 1\\right)\\left(x^2 - 4x + 4\\right) \\cr&= -\\left(x + 1\\right)\\left(x - 2\\right)^2\\end{aligned}<br>This is the fully factorised form.",
                        "To sketch the graph of $y = f(x)$, determine the axes intercepts:<br>The $x$-intercepts occur where $f(x) = 0 \\implies x = -1$ and $x = 2$ (repeated root). This gives the points $(-1, 0)$ and $(2, 0)$.<br>The $y$-intercept occurs where $x = 0 \\implies f(0) = -4$. This is the point $(0, -4)$.<br><br>Since the leading coefficient is negative ($-1$), the curve starts in the top-left and heads down to the bottom-right. It touches the axis and turns around at $(2, 0)$:<br><br><img src='images/Pure_SVGs/004174_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
                        "To solve the inequality $f(x) \\ge 0$, find where the curve lies on or above the $x$-axis. From our sketch, this occurs for $x \\le -1$. The curve also touches the axis at $x = 2$, which satisfies $f(2) = 0 \\ge 0$.<br><br>Write this combined solution in set notation:<br>${x : x \\le -1$ } \\cup {2 }",
                        "A reflection in the $x$-axis replaces $y$ with $-y$:<br>\\begin{aligned}-y &= f(x) \\cry &= -f(x)\\end{aligned}<br>\\begin{aligned}y &= -\\left(3x^2 - x^3 - 4\\right) \\cr&= x^3 - 3x^2 + 4\\end{aligned}",
                "Final Answer: $$-\\left(x + 1\\right)\\left(x - 2\\right)^2, \\quad \\\\{x : x \\le -1\\\\} \\cup \\\\{2\\\\}, \\quad y = x^3 - 3x^2 + 4$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$-\\left(x + 1\\right)\\left(x - 2\\right)^2, \\quad \\\\{x : x \\le -1\\\\}, \\quad y = x^3 - 3x^2 + 4$$",
                                "feedback": "Do not forget the repeated root. Because the inequality is non-strict ($f(x) \\ge 0$), the touching point $x = 2$ satisfies $f(2) = 0$ and must be included in your solution set as the single-element set $\\\\{2\\\\}$."
                        },
                        {
                                "ans": "$$-\\left(x + 1\\right)\\left(x - 2\\right)^2, \\quad \\\\{x : x \\le -1\\\\} \\cup \\\\{2\\\\}, \\quad y = -x^3 + 3x^2 - 4$$",
                                "feedback": "It looks like you forgot to apply the reflection. A reflection in the $x$-axis requires negating the entire function, which should flip all the signs of your terms."
                        },
                        {
                                "ans": "$$\\left(x + 1\\right)\\left(x - 2\\right)^2, \\quad \\\\{x : x \\ge -1\\\\}, \\quad y = x^3 - 3x^2 + 4$$",
                                "feedback": "Check your factorisation and expansion. The leading coefficient of the original cubic is negative, so there must be a negative sign in front of your factorised expression: $-\\left(x+1\\right)\\left(x-2\\right)^2$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Disjoint Single Points",
                        "content": "When solving non-strict inequalities involving negative cubics with repeated roots, keep an eye out for disjoint single-point solutions. The point where the curve touches and turns around from the axis is a single isolated solution that must be represented in set notation using curly brackets: $\\\\{a\\\\}$."
                }
        },
        {
                "id": "004175",
                "board": "OCR",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods",
                        "Graph Transformations",
                        "Inequalities"
                ],
                "img": false,
                "question": "The quartic polynomial $g(x)$ is defined by $g(x) = (x - 2)^2 (x^2 - 9)$.<br><br>1. Express $g(x)$ in a fully factorised form as the product of linear factors.<br>2. Sketch the graph of $y = g(x)$, indicating the coordinates of any points of intersection with the axes.<br>3. Solve the inequality $g(x) \\le 0$, giving your answer in set notation.<br>4. Describe a sequence of two transformations that maps the graph of $y = x^4$ onto the graph of $y = (2x - 6)^4$.",
                "steps": [
                        "To express $g(x)$ in fully factorised form, expand the quadratic term $\\left(x^2 - 9\\right)$ using the difference of two squares identity, $a^2 - b^2 = (a-b)(a+b)$:<br>$$x^2 - 9 = \\left(x - 3\\right)\\left(x + 3\\right)$$<br>Substituting this back yields:<br>$$g(x) = \\left(x - 2\\right)^2 \\left(x - 3\\right)\\left(x + 3\\right)$$",
                        "To sketch the graph of the quartic $y = g(x)$, determine the axes intercepts:<br>The $x$-intercepts occur where $g(x) = 0 \\implies x = 2$ (repeated root), $x = 3$, and $x = -3$. These are the points $(2, 0)$, $(3, 0)$, and $(-3, 0)$.<br>The $y$-intercept occurs where $x = 0 \\implies g(0) = (-2)^2(0^2 - 9) = 4(-9) = -36$. This is the point $(0, -36)$.<br><br>Since the leading coefficient of $x^4$ is positive ($+1$), the curve is positive on both ends (heads up to the far-left and far-right). It touches the axis and turns around at $(2, 0)$:<br><br><img src='images/Pure_SVGs/004171_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
                        "To solve the inequality $g(x) \\le 0$, find where the curve lies on or below the $x$-axis. From our sketch, the curve lies below the axis between $x = -3$ and $x = 3$. The isolated touching point at $x = 2$ also satisfies $g(2) = 0 \\le 0$ and is naturally included in this continuous interval.<br><br>Write this solution in set notation:<br>${x : -3 \\le x \\le 3$ }",
                        "To map $y = x^4$ onto $y = (2x - 6)^4$, we can rewrite the target equation as $y = \\left[2\\left(x - 3\\right)\\right]^4 = 16\\left(x - 3\\right)^4$.<br><br>This can be achieved by the following sequence of two transformations:<br>1. A horizontal translation $3$ units to the right (vector $\\begin{pmatrix} 3 \\\\\\ 0 \\end{pmatrix}$), which transforms $y = x^4$ into $y = (x - 3)^4$.<br>2. A vertical stretch with scale factor $16$ parallel to the $y$-axis, which transforms $y = (x - 3)^4$ into $y = 16(x - 3)^4 = (2x - 6)^4$.<br><br><em>Alternative Sequence:</em> First apply a horizontal stretch parallel to the $x$-axis with scale factor $\\dfrac{1}{2}$ (transforming $x \\to 2x$), followed by a horizontal translation $3$ units to the right (transforming $2x \\to 2(x - 3) = 2x - 6$).",
                        "Final Answer: $$\\left(x - 2\\right)^2 \\left(x - 3\\right)\\left(x + 3\\right), \\quad \\\\{x : -3 \\le x \\le 3\\\\},$$<br>$$\\text{Horizontal translation right by } 3 \\text{ then vertical stretch sf } 16$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\left(x - 2\\right)^2 \\left(x - 3\\right)\\left(x + 3\\right), \\quad \\\\{x : -3 \\le x \\le 2\\\\} \\cup \\\\{x : 2 \\le x \\le 3\\\\},$$<br>$$\\text{Horizontal translation right by } 3 \\text{ then vertical stretch sf } 16$$",
                                "feedback": "Your inequality intervals are correct, but they can be simplified. Since the point $x = 2$ is included in both parts and satisfies the inequality, the two intervals merge into a single continuous interval: $-3 \\le x \\le 3$."
                        },
                        {
                                "ans": "$$\\left(x - 2\\right)^2 \\left(x - 3\\right)\\left(x + 3\\right), \\quad \\\\{x : -3 \\le x \\le 3\\\\},$$<br>$$ \\text{Horizontal stretch sf } 2 \\text{ then horizontal translation right by } 6$$",
                                "feedback": "Be careful with your scale factors and vector order. A stretch parallel to the $x$-axis with a multiplier of $2$ corresponds to a scale factor of $\\dfrac{1}{2}$, not $2$. Additionally, stretching first and then translating right by $6$ would yield $\\left(2\\left(x-6\\right)\\right)^4 = \\left(2x - 12\\right)^4$, which is incorrect."
                        },
                        {
                                "ans": "$$\\left(x - 2\\right)^2 \\left(x^2 - 9\\right), \\quad \\\\{x : -3 \\le x \\le 3\\\\},$$<br>$$\\text{Horizontal translation right by } 3 \\text{ then vertical stretch sf } 16$$",
                                "feedback": "The question asks for the polynomial in a 'fully factorised form as the product of linear factors'. You must expand the quadratic term $\\left(x^2 - 9\\right)$ into its linear components $\\left(x-3\\right)\\left(x+3\\right)$ to score full marks."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Order of Transformations",
                        "content": "When describing horizontal transformations, the order matters immensely. If you translate first by $a$ and then stretch by $s$, the function becomes $f(sx - a)$. If you stretch first by $s$ and then translate by $a$, the function becomes $f(s(x-a)) = f(sx - sa)$."
                }
        },
        {
                "id": "004176",
                "board": "OCR",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and Series",
                "topic": "Sequences and Series",
                "subtopic": [
                        "Modelling and Applications",
                        "Sequences and Series"
                ],
                "img": false,
                "question": "Sarah runs half marathons and is following a training programme to improve her times. Her time for her first half marathon is 160 minutes, and her time for her second half marathon is 156.8 minutes. Sarah believes that her times can be modelled by a geometric progression.<br><br>1. Sarah sets herself a target of completing a half marathon in less than 130 minutes. Show that this model predicts she will achieve her target on her twelfth half marathon.<br>2. After several months, Sarah has spent a total of 2091 minutes, to the nearest minute, running half marathons. Use this model to find how many half marathons she has run.<br>3. Give two reasons why this model may not be appropriate when predicting the time for a half marathon.",
                "steps": [
                        "To model Sarah's times using a geometric progression, we find the first term $a$ and the common ratio $r$.<br>The first term is the time for her first run: $a = 160$ minutes.<br>The second term is $ar = 156.8$ minutes, so:<br>\\begin{aligned}r &= \\dfrac{156.8}{160} \\cr&= 0.98\\end{aligned}",
                        "Write the formula for the time of her $n$-th half marathon, $T_n = a r^{n-1}$:<br>$$T_n = 160\\left(0.98\\right)^{n-1}$$",
                        "To find when her time falls below $130$ minutes, set up the inequality $T_n < 130$:<br>\\begin{aligned}160\\left(0.98\\right)^{n-1} < 130 \\cr\\left(0.98\\right)^{n-1} < \\dfrac{130}{160} &= 0.8125\\end{aligned}",
                        "Take natural logarithms of both sides to solve for $n$. Note that because $\\ln\\left(0.98\\right) < 0$, dividing by it reverses the inequality sign:<br>$$(n - 1)\\ln\\left(0.98\\right) < \\ln\\left(0.8125\\right) \\implies n - 1 > \\dfrac{\\ln\\left(0.8125\\right)}{\\ln\\left(0.98\\right)}$$<br>$$n - 1 > \\dfrac{-0.20764}{-0.02020} \\approx 10.28 \\implies n > 11.28$$<br>Since $n$ must be an integer, the smallest valid value is $n = 12$. This proves she achieves her target on her twelfth half marathon.",
                        "To find the number of runs $n$ completed for a total time of $2091$ minutes, apply the geometric series sum formula $S_n = \\dfrac{a\\left(1 - r^n\\right)}{1 - r}$:<br>\\begin{aligned}S_n &= \\dfrac{160\\left(1 - 0.98^n\\right)}{1 - 0.98} \\cr&= \\dfrac{160\\left(1 - 0.98^n\\right)}{0.02} \\cr&= 8000\\left(1 - 0.98^n\\right)\\end{aligned},",
                        "Set $S_n = 2091$ and solve for $n$:<br>\\begin{aligned}8000\\left(1 - 0.98^n\\right) &= 2091 \\cr1 - 0.98^n &= \\dfrac{2091}{8000} \\approx 0.261375\\end{aligned}<br>\\begin{aligned}0.98^n &= 1 - 0.261375 \\cr&= 0.738625\\end{aligned}",
                        "Take logarithms to solve for $n$:<br>\\begin{aligned}n\\ln\\left(0.98\\right) &= \\ln\\left(0.738625\\right) \\crn &= \\dfrac{\\ln\\left(0.738625\\right)}{\\ln\\left(0.98\\right)}\\end{aligned}<br>$$n = \\dfrac{-0.30296}{-0.02020} \\approx 14.996$$<br>Rounding to the nearest integer, Sarah has run $15$ half marathons.",
                        "There are two main reasons why this model may not be appropriate in the long term:<br>1. Human athletic performance eventually plateaus. A geometric model predicts that her times will decrease infinitely toward $0$ minutes, which is physically impossible.<br>2. It does not account for real-world variables such as injury, aging, illness, changing weather conditions, or variations in motivation.",
                "Final Answer: $$12, \\quad 15, \\quad \\text{athletic plateau and weather/injury}$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$11, \\quad 15, \\quad \\text{athletic plateau}$$",
                                "feedback": "Check your inequality step. Solving $n-1 > 10.28$ yields $n > 11.28$. Since $n$ must be an integer, the first term to fall below $130$ minutes is the $12$-th, not the $11$-th."
                        },
                        {
                                "ans": "$$12, \\quad 13, \\quad \\text{athletic plateau}$$",
                                "feedback": "It looks like you made an error when dividing to solve for $n$ in the sum step. Ensure you set up the equation as $8000\\left(1-0.98^n\\right) = 2091$ and solve for $0.98^n = 0.738625$."
                        },
                        {
                                "ans": "$$12, \\quad 15, \\quad \\text{Sarah runs faster in rain}$$",
                                "feedback": "Your numerical answers are correct, but your limitation is not a valid modelling criticism. A proper limitation must describe a systemic failure of the geometric mathematical structure, such as predicting impossible times as $n \\to \\infty$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Division by Negative Logs",
                        "content": "When solving inequalities involving terms like $r^{n-1}$ where $0 < r < 1$, taking the logarithm of both sides will yield a negative number (since $\\ln\\left(r\\right) < 0$). Always remember to flip the inequality sign when dividing both sides by a negative logarithm."
                }
        },
        {
                "id": "004177",
                "board": "OCR",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Sequences and Series",
                "topic": "Sequences and Series",
                "subtopic": [
                        "Modelling and Applications",
                        "Sequences and Series"
                ],
                "img": false,
                "question": "James is training for a marathon. In his first week of training, he runs a total distance of $25\\text{ km}$. He decides to increase his weekly distance by a constant amount, $d\\text{ km}$, each week. In his tenth week of training, his weekly distance is $52\\text{ km}$.<br><br>1. Show that $d = 3$.<br>2. Find the total distance James runs during his first $20$ weeks of training.<br>3. State one practical reason why James cannot continue this training pattern indefinitely.",
                "steps": [
                        "We model James's weekly distances using an arithmetic progression with first term $a = 25$ and common difference $d$. The formula for the $n$-th term is $u_n = a + (n-1)d$.",
                        "For the tenth week, we are given $u_{10} = 52$:<br>\\begin{aligned}25 + \\left(10 - 1\\right)d &= 52 \\cr25 + 9d &= 52\\end{aligned}",
                        "Solve for $d$:<br>\\begin{aligned}9d &= 52 - 25 = 27 \\crd &= 3\\end{aligned}<br>This confirms that the weekly increase is $3\\text{ km}$.",
                        "To find the total distance run over $20$ weeks, apply the arithmetic series sum formula $S_n = \\dfrac{n}{2}\\left[2a + \\left(n-1\\right)d\\right]$ with $n=20, a=25, d=3$:<br>$$S_{20} = \\dfrac{20}{2} \\left[ 2\\left(25\\right) + \\left(20 - 1\\right)3 \\right]$$",
                        "Simplify inside the brackets and calculate:<br>$$S_{20} = 10 \\left[ 50 + 19\\left(3\\right) \\right]$$<br>\\begin{aligned}S_{20} &= 10 \\left[ 50 + 57 \\right] \\cr&= 10 \\left[ 107 \\right] \\cr&= 1070\\end{aligned}<br>So, James runs a total of $1070\\text{ km}$ over the first $20$ weeks.",
                        "James cannot continue this pattern indefinitely because it is physically impossible to continuously increase mileage. Within a couple of years, his weekly distances would exceed human physical limits and inevitably lead to severe injury, extreme fatigue, or overtraining syndrome.",
                "Final Answer: $$d = 3, \\quad 1070\\text{ km}, \\quad \\text{physical limits and risk of injury}$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$d = 3, \\quad 1070\\text{ km}, \\quad \\text{running is boring}$$",
                                "feedback": "Your numerical answers are correct, but your limitation is subjective. A valid modelling limitation must address the biological or physical constraints that prevent the mathematical progression from continuing indefinitely."
                        },
                        {
                                "ans": "$$d = 3, \\quad 1540\\text{ km}, \\quad \\text{physical limits}$$",
                                "feedback": "Check your sum formula. It looks like you may have used $20$ instead of $19$ inside the brackets, calculating $2a + nd$ instead of $2a + \\left(n-1\\right)d$."
                        },
                        {
                                "ans": "$$d = 2.7, \\quad 1070\\text{ km}, \\quad \\text{physical limits}$$",
                                "feedback": "Be careful with your term index. The tenth week is $u_{10} = a + 9d$, not $a + 10d$. This leads to $9d = 27$, yielding the integer difference $d = 3$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Term Indices",
                        "content": "A very common slip in arithmetic progressions is using $a + nd$ for the $n$-th term. Always write out $a + (n-1)d$ explicitly to remind yourself that the first term does not contain the common difference."
                }
        },
        {
                "id": "004178",
                "board": "OCR",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and Series",
                "topic": "Sequences and Series",
                "subtopic": [
                        "Modelling and Applications",
                        "Sequences and Series"
                ],
                "img": false,
                "question": "An investor deposits £2000 into a savings account on the first day of each year. The account pays a compound interest rate of $4\\%$ per annum, paid on the last day of each year.<br><br>1. Show that the total value of the investment, in pounds, on the last day of the third year (after interest has been added) is $2000(1.04) + 2000(1.04)^2 + 2000(1.04)^3$.<br>2. Use this model to find the total value of the investment immediately after interest is added at the end of the $10\\text{th}$ year, giving your answer to the nearest pound.<br>3. State one assumption made by this model that might not be realistic in the long term.",
                "steps": [
                        "Trace each deposit to the end of the third year:<br>The first £2000 deposit has been in the account for $3$ full years and has earned compound interest $3$ times, so its value is $2000\\left(1.04\\right)^3$.<br>The second £2000 deposit has been in the account for $2$ full years, so its value is $2000\\left(1.04\\right)^2$.<br>The third £2000 deposit has been in the account for $1$ full year, so its value is $2000\\left(1.04\\right)^1$.",
                        "Summing these three components gives the total value of the investment on the last day of the third year:<br>$$\\text{Total} = 2000\\left(1.04\\right) + 2000\\left(1.04\\right)^2 + 2000\\left(1.04\\right)^3$$",
                        "This series is a geometric progression where:<br>The first term $a = 2000\\left(1.04\\right) = 2080$<br>The common ratio $r = 1.04$<br>The number of terms $n = 10$",
                        "To find the value of the investment at the end of $10$ years, apply the geometric series sum formula $S_n = \\dfrac{a\\left(r^n - 1\\right)}{r - 1}$:<br>\\begin{aligned}S_{10} &= \\dfrac{2080\\left(1.04^{10} - 1\\right)}{1.04 - 1} \\cr&= \\dfrac{2080\\left(1.04^{10} - 1\\right)}{0.04}\\end{aligned}",
                        "Calculate using high-precision intermediate steps to avoid rounding errors:<br>$$1.04^{10} \\approx 1.480244$$<br>\\begin{aligned}S_{10} &= \\dfrac{2080\\left(0.480244\\right)}{0.04} \\cr&= 52000 \\times 0.480244 \\cr&= 24972.70\\end{aligned}<br>Rounding to the nearest pound, the total value is £24,973.",
                        "One key assumption made by this model is that the interest rate remains constant at $4\\%$ for the entire $10$ years. In reality, savings rates are variable and subject to economic fluctuations. Alternatively, the model assumes the investor never misses a payment and consistently deposits exactly £2000 every single year.",
                "Final Answer: $$£24,973, \\quad \\text{constant interest rate and fixed annual deposits}$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$£24,962, \\quad \\text{constant interest rate}$$",
                                "feedback": "You may have rounded $(1.04)^{10}$ prematurely to $1.480$ during your intermediate steps. Always keep your full calculator display figures active until the final rounding to avoid drifting off by several pounds."
                        },
                        {
                                "ans": "$$£24,012, \\quad \\text{constant interest rate}$$",
                                "feedback": "It looks like you defined your first term $a = 2000$ instead of $2080$. Remember that the deposits are made on the first day of the year, so every single deposit (including the last one) has been in the account for at least one full year and has earned interest before the year-end calculation."
                        },
                        {
                                "ans": "$$£26,080, \\quad \\text{constant interest rate}$$",
                                "feedback": "Check your sum formula. Ensure you did not use the arithmetic series sum formula by mistake. Compound interest accumulates geometrically."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: First Term in Savings",
                        "content": "In financial geometric series, always look at the timing of the deposits. Since the deposits are made at the start of each year and evaluated at the end of the year, the first term of your geometric series is $2000\\left(1.04\\right) = 2080$, not $2000$."
                }
        },
        {
                "id": "004179",
                "board": "OCR",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and Series",
                "topic": "Sequences and Series",
                "subtopic": [
                        "Modelling and Applications",
                        "Sequences and Series"
                ],
                "img": false,
                "question": "The mass of a radioactive sample is monitored daily. On the first day of monitoring, the mass is $80\\text{ grams}$. On the second day, the mass is $76\\text{ grams}$. The mass is modelled as a geometric progression.<br><br>1. Show that the mass of the sample is predicted to fall below $40\\text{ grams}$ for the first day on the fifteenth day of monitoring.<br>2. Find the total mass loss over the first 30 days, giving your answer to the nearest gram.<br>3. Why might a discrete geometric progression model be highly appropriate for radioactive decay over short periods, but why might a continuous exponential model be preferred in physics?",
                "steps": [
                        "First, determine the first term $a$ and common ratio $r$ of the geometric progression:<br>The mass on the first day is $a = 80$ grams.<br>The mass on the second day is $ar = 76$ grams, so:<br>\\begin{aligned}r &= \\dfrac{76}{80} \\cr&= 0.95\\end{aligned}",
                        "Write the formula for the mass on the $n$-th day, $M_n = a r^{n-1}$:<br>$$M_n = 80\\left(0.95\\right)^{n-1}$$",
                        "Set up the inequality $M_n < 40$ to find when the mass falls below $40$ grams:<br>\\begin{aligned}80\\left(0.95\\right)^{n-1} < 40 \\cr\\left(0.95\\right)^{n-1} < \\dfrac{40}{80} &= 0.5\\end{aligned}",
                        "Take natural logarithms of both sides to solve for $n$. Note that because $\\ln\\left(0.95\\right) < 0$, dividing by it reverses the inequality sign:<br>$0.95^{n-1} < 0.5 \\implies \\left(n - 1\\right)\\ln\\left(0.95\\right) < \\ln\\left(0.5\\right)$<br>$$n - 1 > \\dfrac{\\ln\\left(0.5\\right)}{\\ln\\left(0.95\\right)}$$<br>$$n - 1 > \\dfrac{-0.69315}{-0.05129} \\approx 13.52 \\implies n > 14.52$$<br>Since $n$ must be an integer, the smallest valid value is $n = 15$. This proves the mass falls below $40$ grams on the fifteenth day.",
                        "To find the total mass loss over the first $30$ days, calculate the mass remaining on the $30$-th day, $M_{30}$:<br>\\begin{aligned}M_{30} &= 80\\left(0.95\\right)^{29} \\approx 80\\left(0.225927\\right) \\cr&= 18.07\\text{ grams}\\end{aligned}",
                        "Subtract the remaining mass on the $30$-th day from the initial mass of $80$ grams to find the total loss:<br>\\begin{aligned}\\text{Total Loss} &= 80 - 18.07 \\cr&= 61.93\\text{ grams}\\end{aligned}<br>Rounding to the nearest gram, the total mass loss is $62\\text{ grams}$.",
                        "A discrete geometric model is appropriate for short periods because measurements are taken at set daily intervals, and the daily decay factor is easily calculated. However, radioactive decay is fundamentally a continuous physical process. A continuous exponential model $M(t) = M_0 e^{-\\lambda t}$ is preferred in physics because it allows calculations at any fraction of a second and integrates naturally with other physical rate models.",
                "Final Answer: $$15, \\quad 62\\text{ grams}, \\quad \\text{discrete daily sampling vs continuous physical rates}$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$14, \\quad 62\\text{ grams}, \\quad \\text{discrete vs continuous}$$",
                                "feedback": "Check your inequality step. Solving $n-1 > 13.52$ yields $n > 14.52$. The first day the mass falls below $40$ grams is the $15$-th day, not the $14$-th."
                        },
                        {
                                "ans": "$$15, \\quad 18\\text{ grams}, \\quad \\text{discrete vs continuous}$$",
                                "feedback": "You have calculated the mass remaining on the $30$-th day, which is $18$ grams. The question asks for the total mass lost, which is the initial mass minus the remaining mass ($80 - 18 = 62$ grams)."
                        },
                        {
                                "ans": "$$15, \\quad 62\\text{ grams}, \\quad \\text{geometric models are always better}$$",
                                "feedback": "Your numerical answers are correct, but your physics explanation is conceptually flawed. Exponential decay models are mathematically superior in physics because they model physical rates continuously without relying on arbitrary daily time divisions."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Loss vs Remaining",
                        "content": "Always read the final command of a question with extreme care. If the question asks for 'total loss', 'depreciation', or 'decay', you must calculate the difference between your initial value and your final value ($a - u_n$)."
                }
        },
        {
                "id": "004180",
                "board": "OCR",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and Series",
                "topic": "Sequences and Series",
                "subtopic": [
                        "Modelling and Applications",
                        "Sequences and Series"
                ],
                "img": false,
                "question": "A company buys a piece of machinery for £50,000. At the end of each year, the value of the machinery depreciates by $15\\%$ of its value at the start of that year.<br><br>1. Show that the value of the machinery at the end of the fourth year is £26,100 to the nearest pound.<br>2. Find the total depreciation of the machinery over the first 8 years, giving your answer to the nearest pound.",
                "steps": [
                        "The initial value of the machinery is $V_0 = 50000$. Since it depreciates by $15\\%$ each year, its value is multiplied by a factor of $(1 - 0.15) = 0.85$ at the end of each year.",
                        "Write the formula for the value of the machinery at the end of year $n$, $V_n = V_0 \\left(0.85\\right)^n$:<br>$$V_n = 50000\\left(0.85\\right)^n$$",
                        "To find the value at the end of the fourth year, calculate $V_4$:<br>$$V_4 = 50000\\left(0.85\\right)^4$$<br>\\begin{aligned}V_4 &= 50000\\left(0.522006\\right) \\cr&= 26100.31\\end{aligned}<br>Rounding to the nearest pound, the value is £26,100.",
                        "To find the total depreciation over the first $8$ years, calculate the remaining value of the machinery at the end of the eighth year, $V_8$:<br>$$V_8 = 50000\\left(0.85\\right)^8$$<br>\\begin{aligned}V_8 &= 50000\\left(0.272490\\right) \\cr&= 13624.52\\end{aligned}",
                        "Subtract this remaining value from the initial purchase price of £50,000 to find the total depreciation:<br>\\begin{aligned}\\text{Total Depreciation} &= 50000 - 13624.52 \\cr&= 36375.48\\end{aligned}<br>Rounding to the nearest pound, the total depreciation is £36,375.",
                "Final Answer: $$£26,100, \\quad £36,375$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$£26,100, \\quad £13,625$$",
                                "feedback": "You have calculated the remaining value of the machinery at the end of $8$ years (£13,625). To find the total depreciation, you must subtract this remaining value from the initial value (£50,000)."
                        },
                        {
                                "ans": "$$£26,100, \\quad £36,375$$",
                                "feedback": "Your numerical answers are correct. Ensure you show all intermediate calculation steps on your sheet to score full marks for 'detailed reasoning'."
                        },
                        {
                                "ans": "$$£30,700, \\quad £36,375$$",
                                "feedback": "It looks like you calculated $V_3$ instead of $V_4$ for the value at the end of the fourth year. Remember that the machinery depreciates at the end of each year, so it has depreciated $4$ times by the end of year $4$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Depreciation Indexing",
                        "content": "Unlike standard geometric term indexing where $u_n = a r^{n-1}$, depreciation starts after the first year. The initial value is $V_0$, meaning the value after $n$ years of depreciation is $V_n = V_0 r^n$."
                }
        },
        {
                "id": "004181",
                "board": "OCR",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and Series",
                "topic": "Binomial Expansion",
                "subtopic": [
                        "Linear Equations"
                ],
                "img": false,
                "question": "1. Find the first three terms in the expansion of $(9 - x)^{-1/2}$ in ascending powers of $x$.<br><br>2. Given that the expansion of $\\dfrac{a+bx}{\\sqrt{9-x}}$ is $12 - x \\dots$, find the values of the constants $a$ and $b$.",
                "steps": [
                        "To expand $(9 - x)^{-1/2}$, we first factorise out the $9$ so the first term inside the bracket is $1$:<br>\\begin{aligned}(9 - x)^{-1/2} &= \\left[9\\left(1 - \\dfrac{x}{9}\\right)\\right]^{-1/2} \\cr&= 9^{-1/2} \\left(1 - \\dfrac{x}{9}\\right)^{-1/2}\\end{aligned}<br>$$= \\dfrac{1}{3} \\left(1 - \\dfrac{x}{9}\\right)^{-1/2}$$",
                        "Apply the binomial expansion formula $(1 + y)^n = 1 + ny + \\dfrac{n(n-1)}{2!}y^2 + \\dots$ with $n = -\\dfrac{1}{2}$ and $y = -\\dfrac{x}{9}$:<br>$$\\left(1 - \\dfrac{x}{9}\\right)^{-1/2} = 1 + \\left(-\\dfrac{1}{2}\\right)\\left(-\\dfrac{x}{9}\\right) + \\dfrac{\\left(-\\dfrac{1}{2}\\right)\\left(-\\dfrac{3}{2}\\right)}{2} \\left(-\\dfrac{x}{9}\\right)^2 + \\dots$$<br>\\begin{aligned} &= 1 + \\dfrac{x}{18} + \\dfrac{3}{8}\\left(\\dfrac{x^2}{81}\\right) \\cr&= 1 + \\dfrac{x}{18} + \\dfrac{x^2}{216} + \\dots\\end{aligned}",
                        "Multiply the entire expansion by the constant factor of $\\dfrac{1}{3}$:<br>$$\\dfrac{1}{3}\\left(1 + \\dfrac{x}{18} + \\dfrac{x^2}{216} + \\dots\\right) = \\dfrac{1}{3} + \\dfrac{x}{54} + \\dfrac{x^2}{648} + \\dots$$",
                        "To find the constants $a$ and $b$, write the rational expression as a product of $(a+bx)$ and the binomial expansion:<br>$$\\dfrac{a + bx}{\\sqrt{9 - x}} = \\left(a + bx\\right)\\left(9 - x\\right)^{-1/2}$$<br>$$\\approx \\left(a + bx\\right)\\left(\\dfrac{1}{3} + \\dfrac{x}{54} + \\dots\\right)$$<br>Expand the terms up to the $x$ term:<br>$$\\text{Expansion} = \\dfrac{a}{3} + \\left(\\dfrac{a}{54} + \\dfrac{b}{3}\\right)x + \\dots$$",
                        "Equate this expansion to the given expression $12 - x \\dots$:<br>By comparing the constant terms:<br>\\begin{aligned}\\dfrac{a}{3} &= 12 \\cra &= 36\\end{aligned}",
                        "By comparing the coefficients of the $x$ terms and substituting $a = 36$:<br>\\begin{aligned}\\dfrac{a}{54} + \\dfrac{b}{3} &= -1 \\cr\\dfrac{36}{54} + \\dfrac{b}{3} &= -1\\end{aligned}<br>\\begin{aligned}\\dfrac{2}{3} + \\dfrac{b}{3} &= -1 \\cr2 + b &= -3 \\crb &= -5\\end{aligned}",
                "Final Answer: \\begin{aligned}\\dfrac{1}{3} + \\dfrac{x}{54} + \\dfrac{x^2}{648}, \\quad a &= 36, \\, b \\cr&= -5\\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\dfrac{1}{3} - \\dfrac{x}{54} + \\dfrac{x^2}{648}, \\quad a = 36, \\, b = -5$$",
                                "feedback": "Be careful with signs. Since both $n = -\\dfrac{1}{2}$ and the horizontal variable $-\\dfrac{x}{9}$ are negative, their product in the second term is positive: $\\left(-\\dfrac{1}{2}\\right)\\left(-\\dfrac{x}{9}\\right) = +\\dfrac{x}{18}$. Your second term must be positive."
                        },
                        {
                                "ans": "$$\\dfrac{1}{3} + \\dfrac{x}{54} + \\dfrac{x^2}{648}, \\quad a = 12, \\, b = -5$$",
                                "feedback": "It looks like you forgot to apply the factor of $\\dfrac{1}{3}$ when equating the constant term. The constant term of your expansion is $\\dfrac{a}{3}$, so $\\dfrac{a}{3} = 12 \\implies a = 36$, not $12$."
                        },
                        {
                                "ans": "$$\\dfrac{1}{3} + \\dfrac{x}{54} + \\dfrac{x^2}{648}, \\quad a = 36, \\, b = -11$$",
                                "feedback": "You may have made an error when solving the simultaneous equation for $b$. Verify that $\\dfrac{2}{3} + \\dfrac{b}{3} = -1 \\implies 2 + b = -3$, which yields $b = -5$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Extracting Constants",
                        "content": "When expanding $\\left(k \\pm x\\right)^n$ where $n$ is fractional or negative, never apply the formula directly with $k$. You must strictly factorise out $k^n$ first so that the leading term inside the bracket is exactly $1$, which is a mandatory prerequisite for binomial expansions."
                }
        },
        {
                "id": "004182",
                "board": "OCR",
                "branch": "Pure",
                "level": "A",
                "major_area": "Integration",
                "topic": "Binomial Expansion",
                "subtopic": [
                        "Functions and Mappings",
                        "Linear Equations"
                ],
                "img": false,
                "question": "1. Find the first three terms in the expansion of $(1 + 2x)^{-1}$ in ascending powers of $x$, stating the set of values of $x$ for which the expansion is valid.<br><br>2. Given that the expansion of $(1 + ax)(1 + 2x)^{-1}$ is $1 + 5x + bx^2 \\dots$, find the values of the constants $a$ and $b$.",
                "steps": [
                        "Apply the binomial expansion formula for negative integer powers, $(1 + y)^{-1} = 1 - y + y^2 - y^3 + \\dots$, with $y = 2x$:<br>$$\\left(1 + 2x\\right)^{-1} = 1 - \\left(2x\\right) + \\left(2x\\right)^2 - \\dots$$<br>$$\\left(1 + 2x\\right)^{-1} = 1 - 2x + 4x^2 - \\dots$$",
                        "For the binomial expansion to converge and be valid, the absolute value of the horizontal variable $2x$ must be strictly less than $1$:<br>$$|2x| < 1 \\implies |x| < \\dfrac{1}{2}$$",
                        "To find $a$ and $b$, multiply the linear factor by our binomial expansion series up to the quadratic term:<br>$$\\left(1 + ax\\right)\\left(1 + 2x\\right)^{-1} \\approx \\left(1 + ax\\right)\\left(1 - 2x + 4x^2\\right)$$",
                        "Expand the brackets and group terms by powers of $x$:<br>$$= 1\\left(1 - 2x + 4x^2\\right) + ax\\left(1 - 2x\\right)$$<br>$$= 1 - 2x + 4x^2 + ax - 2ax^2$$<br>$$= 1 + \\left(a - 2\\right)x + \\left(4 - 2a\\right)x^2$$",
                        "Compare this result with the given expansion $1 + 5x + bx^2 \\dots$:<br>By comparing the coefficients of the $x$ terms:<br>\\begin{aligned}a - 2 &= 5 \\cra &= 7\\end{aligned}",
                        "By comparing the coefficients of the $x^2$ terms and substituting $a = 7$:<br>\\begin{aligned}b &= 4 - 2a \\crb &= 4 - 2\\left(7\\right) = 4 - 14 = -10\\end{aligned}",
                "Final Answer: \\begin{aligned}1 - 2x + 4x^2, \\quad |x| < \\dfrac{1}{2}, \\quad a &= 7, \\, b \\cr&= -10\\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$1 - 2x + 4x^2, \\quad |x| < 2, \\quad a = 7, \\, b = -10$$",
                                "feedback": "Check your interval of validity. The condition is $|2x| < 1$, which requires dividing $1$ by $2$, yielding $|x| < \\dfrac{1}{2}$, not $|x| < 2$."
                        },
                        {
                                "ans": "$$1 - 2x + 4x^2, \\quad |x| < \\dfrac{1}{2}, \\quad a = 7, \\, b = 18$$",
                                "feedback": "Be careful with the signs in your algebraic expansion. The coefficient of the $x^2$ term is $4 - 2a$. Substituting $a = 7$ yields $4 - 14 = -10$, not $18$."
                        },
                        {
                                "ans": "$$1 + 2x + 4x^2, \\quad |x| < \\dfrac{1}{2}, \\quad a = 3, \\, b = -2$$",
                                "feedback": "Ensure you apply the correct alternating signs for the negative index expansion. The expansion of $(1+y)^{-1}$ is $1 - y + y^2 - \\dots$, which yields $1 - 2x + 4x^2$, not $1 + 2x + 4x^2$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Validity Ranges",
                        "content": "A common point-loser in Year 13 binomial questions is forgetting to state the range of validity. For any non-positive integer power, the expansion is only valid for $|y| < 1$, where $y$ is the variable term inside the bracket."
                }
        },
        {
                "id": "004183",
                "board": "OCR",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and Series",
                "topic": "Binomial Expansion",
                "subtopic": [
                        "Numerical Methods"
                ],
                "img": false,
                "question": "1. Find the first three terms in the expansion of $(1 + 4x)^{1/2}$ in ascending powers of $x$.<br><br>2. Use your expansion with $x = 0.01$ to find an approximate value for $\\sqrt{1.04}$, giving your answer to 5 decimal places.",
                "steps": [
                        "Apply the binomial expansion formula $(1 + y)^n = 1 + ny + \\dfrac{n(n-1)}{2!}y^2 + \\dots$ with $n = \\dfrac{1}{2}$ and $y = 4x$:<br>$$\\left(1 + 4x\\right)^{1/2} = 1 + \\left(\\dfrac{1}{2}\\right)\\left(4x\\right) + \\dfrac{\\left(\\dfrac{1}{2}\\right)\\left(-\\dfrac{1}{2}\\right)}{2}\\left(4x\\right)^2 + \\dots$$",
                        "Simplify the terms of the expansion:<br>$$\\left(1 + 4x\\right)^{1/2} = 1 + 2x + \\left(-\\dfrac{1}{8}\\right)\\left(16x^2\\right) + \\dots$$<br>$$\\left(1 + 4x\\right)^{1/2} = 1 + 2x - 2x^2 + \\dots$$",
                        "To approximate $\\sqrt{1.04}$, we substitute $x = 0.01$ into both the left-hand and right-hand sides of our expansion:<br>\\begin{aligned}\\text{LHS} &= \\left(1 + 4\\left(0.01\\right)\\right)^{1/2} \\cr&= \\sqrt{1.04}\\end{aligned}",
                        "Substitute $x = 0.01$ into our simplified binomial expansion:<br>$$\\text{RHS} = 1 + 2\\left(0.01\\right) - 2\\left(0.01\\right)^2$$<br>$$= 1 + 0.02 - 2\\left(0.0001\\right)$$<br>$$= 1 + 0.02 - 0.0002$$",
                        "Evaluate the arithmetic expression:<br>\\begin{aligned}\\text{RHS} &= 1.02 - 0.0002 \\cr&= 1.0198\\end{aligned}",
                        "Write the final answer correct to $5$ decimal places:<br>$$\\sqrt{1.04} \\approx 1.01980$$",
                "Final Answer: $$1 + 2x - 2x^2, \\quad 1.01980$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$1 + 2x + 2x^2, \\quad 1.02020$$",
                                "feedback": "Be careful with the signs in your coefficients. The second binomial term contains $n(n-1) = \\dfrac{1}{2}\\left(-\\dfrac{1}{2}\\right) = -\\dfrac{1}{4}$, which makes the third term negative: $-2x^2$, not $+2x^2$."
                        },
                        {
                                "ans": "$$1 + 2x - 2x^2, \\quad 1.0198$$",
                                "feedback": "The question specifically asks for your approximate answer correct to $5$ decimal places. You must pad the final decimal with a trailing zero to write $1.01980$."
                        },
                        {
                                "ans": "$$1 + 2x - 8x^2, \\quad 1.01920$$",
                                "feedback": "It looks like you forgot to divide the third term coefficient by $2! = 2$ during your expansion steps. Ensure you apply the denominator factor from the formula."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Trailing Zeros",
                        "content": "When an exam question specifies a set number of decimal places (such as 5), writing $1.0198$ instead of $1.01980$ will cost you the final accuracy mark. Always pad your decimals with trailing zeros if the requested precision demands it."
                }
        },
        {
                "id": "004184",
                "board": "OCR",
                "branch": "Pure",
                "level": "A",
                "major_area": "Integration",
                "topic": "Binomial Expansion",
                "subtopic": [
                        "Linear Equations"
                ],
                "img": false,
                "question": "1. Find the first three terms in the expansion of $(1 - 3x)^{-2}$ in ascending powers of $x$.<br><br>2. Show that the coefficient of $x^2$ in the expansion of $\\dfrac{2+x}{(1-3x)^2}$ is 60.",
                "steps": [
                        "Apply the binomial expansion formula for negative integer powers, $(1 + y)^{-2} = 1 - 2y + 3y^2 - 4y^3 + \\dots$, with $y = -3x$:<br>$$\\left(1 - 3x\\right)^{-2} = 1 - 2\\left(-3x\\right) + 3\\left(-3x\\right)^2 - \\dots$$<br>$$\\left(1 - 3x\\right)^{-2} = 1 + 6x + 27x^2 - \\dots$$",
                        "To find the coefficient of the rational expression, rewrite it as a product:<br>$$\\dfrac{2 + x}{\\left(1 - 3x\\right)^2} = \\left(2 + x\\right)\\left(1 - 3x\\right)^{-2}$$",
                        "Substitute our binomial expansion into the product:<br>$$\\approx \\left(2 + x\\right)\\left(1 + 6x + 27x^2\\right)$$",
                        "To find the coefficient of $x^2$, identify only the terms in the expansion that will result in an $x^2$ term after multiplying out the brackets:<br>$$\\text{Term } 1: 2 \\times 27x^2 = 54x^2$$<br>$$\\text{Term } 2: x \\times 6x = 6x^2$$",
                        "Sum these two components to find the total $x^2$ term:<br>\\begin{aligned}\\text{Total } x^2 \\text{ term} &= 54x^2 + 6x^2 \\cr&= 60x^2\\end{aligned}<br>The coefficient of $x^2$ is indeed $60$.",
                "Final Answer: $$1 + 6x + 27x^2, \\quad 60$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$1 - 6x + 27x^2, \\quad 48$$",
                                "feedback": "Be careful with signs when substituting $y = -3x$ into the formula. The second term is $-2\\left(-3x\\right) = +6x$. Using $-6x$ instead leads to an incorrect final coefficient of $48$."
                        },
                        {
                                "ans": "$$1 + 6x + 27x^2, \\quad 54$$",
                                "feedback": "You may have only calculated the product $2 \\times 27x^2 = 54x^2$ and forgotten the contribution from $x \\times 6x = 6x^2$. Both components must be summed to find the total coefficient."
                        },
                        {
                                "ans": "$$1 + 6x + 9x^2, \\quad 24$$",
                                "feedback": "It looks like you forgot to multiply the third term by the coefficient of $3$ in the expansion formula $\\left(1+y\\right)^{-2} = 1 + 2y + 3y^2$. Ensure you include all factors."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Selective Expansion",
                        "content": "When finding the coefficient of a specific power (like $x^2$) in a product of brackets, never waste time expanding the entire expression. Only identify and calculate the specific cross-multiplications that yield the desired power."
                }
        },
        {
                "id": "004185",
                "board": "OCR",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and Series",
                "topic": "Binomial Expansion",
                "subtopic": [
                        "Algebraic Methods"
                ],
                "img": false,
                "question": "1. Find the first three terms in the expansion of $(1 - 8x)^{-1/2}$ in ascending powers of $x$.<br><br>2. Find the coefficient of $x^2$ in the expansion of $(1 + 4x)^3(1 - 8x)^{-1/2}$.",
                "steps": [
                        "Apply the binomial expansion formula for negative fractional powers with $n = -\\dfrac{1}{2}$ and $y = -8x$:<br>$$\\left(1 - 8x\\right)^{-1/2} = 1 + \\left(-\\dfrac{1}{2}\\right)\\left(-8x\\right) + \\dfrac{\\left(-\\dfrac{1}{2}\\right)\\left(-\\dfrac{3}{2}\\right)}{2}\\left(-8x\\right)^2 + \\dots$$<br>$$\\left(1 - 8x\\right)^{-1/2} = 1 + 4x + \\dfrac{3}{8}\\left(64x^2\\right) + \\dots$$<br>$$\\left(1 - 8x\\right)^{-1/2} = 1 + 4x + 24x^2 + \\dots$$",
                        "To find the composite expansion, we first expand $(1 + 4x)^3$ fully using the standard binomial theorem:<br>$$\\left(1 + 4x\\right)^3 = 1^3 + 3\\left(1\\right)^2\\left(4x\\right) + 3\\left(1\\right)\\left(4x\\right)^2 + \\left(4x\\right)^3$$<br>$$\\left(1 + 4x\\right)^3 = 1 + 12x + 48x^2 + 64x^3$$",
                        "Write the composite product as a multiplication of these two expansion series up to the $x^2$ terms:<br>$$\\text{Product} \\approx \\left(1 + 12x + 48x^2\\right)\\left(1 + 4x + 24x^2\\right)$$",
                        "Identify the cross-multiplications that yield an $x^2$ term:<br>$$\\text{Term } 1: 1 \\times 24x^2 = 24x^2$$<br>$$\\text{Term } 2: 12x \\times 4x = 48x^2$$<br>$$\\text{Term } 3: 48x^2 \\times 1 = 48x^2$$",
                        "Sum these three components to obtain the final coefficient of $x^2$:<br>\\begin{aligned}\\text{Total } x^2 \\text{ term} &= 24x^2 + 48x^2 + 48x^2 \\cr&= 120x^2\\end{aligned}<br>So the coefficient of $x^2$ is $120$.",
                "Final Answer: $$1 + 4x + 24x^2, \\quad 120$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$1 + 4x + 24x^2, \\quad 72$$",
                                "feedback": "You may have missed the middle cross-multiplication term $12x \\times 4x = 48x^2$ when summing. Ensure you count all three possible ways to obtain an $x^2$ term from the product."
                        },
                        {
                                "ans": "$$1 + 4x + 16x^2, \\quad 104$$",
                                "feedback": "Check your third-term coefficient calculation in the first expansion. The coefficient of $x^2$ in $\\left(1-8x\\right)^{-1/2}$ is $24$, not $16$. Verify that $\\dfrac{3}{8} \\times 64 = 24$."
                        },
                        {
                                "ans": "$$1 + 4x + 24x^2, \\quad 144$$",
                                "feedback": "This occurs if you used $24x^2$ in your second expansion instead of $48x^2$. Note that the third term of $\\left(1+4x\\right)^3$ is $3\\left(4x\\right)^2 = 3\\left(16x^2\\right) = 48x^2$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Combining Expansions",
                        "content": "For composite expansion questions involving two different brackets, expand both brackets separately first up to the required power. This isolating method keeps your algebra clean and dramatically reduces sign slips."
                }
        },
        {
                "id": "004186",
                "board": "OCR",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Functions",
                "subtopic": [
                        "Functions and Mappings",
                        "Quadratics"
                ],
                "img": false,
                "question": "The function $f$ is defined for all real values of $x$ as $f(x) = c + 6x - x^2$, where $c$ is a constant.<br><br>1. Given that the range of $f$ is $f(x) \\le 14$, find the value of $c$.<br>2. Given instead that $ff(3) = 3$, find the possible values of $c$.",
                "steps": [
                        "The function $f(x) = c + 6x - x^2$ can be rearranged into a standard quadratic form: $-x^2 + 6x + c$. Since the leading coefficient $-1$ is negative, this is a downward-facing parabola with a maximum value at its vertex.",
                        "Complete the square to find the coordinates of the vertex:<br>\\begin{aligned}f(x) &= -\\left(x^2 - 6x\\right) + c \\cr&= -\\left[\\left(x - 3\\right)^2 - 9\\right] + c\\end{aligned}<br>$$f(x) = -\\left(x - 3\\right)^2 + 9 + c$$<br>The maximum value occurs at the vertex where $x = 3$, giving a maximum value of $9 + c$.",
                        "Since the range of the function is $f(x) \\le 14$, the maximum value must equal $14$:<br>\\begin{aligned}9 + c &= 14 \\crc &= 5\\end{aligned}",
                        "For the second part of the question, we are given instead that $ff(3) = 3$. First, find an expression for $f(3)$ in terms of $c$:<br>\\begin{aligned}f(3) &= c + 6\\left(3\\right) - 3^2 \\cr&= c + 18 - 9 \\cr&= c + 9\\end{aligned}",
                        "Now substitute this result back into $f(x)$ to evaluate the composite function $f(f(3))$:<br>\\begin{aligned}f(f(3)) &= f\\left(c + 9\\right) \\cr&= c + 6\\left(c + 9\\right) - \\left(c + 9\\right)^2\\end{aligned}<br>$$f(f(3)) = c + 6c + 54 - \\left(c^2 + 18c + 81\\right)$$<br>$$f(f(3)) = -c^2 - 11c - 27$$",
                        "Set this expression equal to $3$ and rearrange to form a standard quadratic equation in terms of $c$:<br>\\begin{aligned}-c^2 - 11c - 27 &= 3 \\crc^2 + 11c + 30 &= 0\\end{aligned}",
                        "Factorise and solve the quadratic equation for $c$:<br>\\begin{aligned}\\left(c + 5\\right)\\left(c + 6\\right) &= 0 \\crc &= -5 \\quad \\text{or} \\quad c = -6\\end{aligned}",
                "Final Answer: \\begin{aligned}c &= 5, \\quad c \\cr&= -5 \\text{ or } c \\cr&= -6\\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$c = 8, \\quad c = -5 \\text{ or } c = -6$$",
                                "feedback": "Check your completing the square steps. It looks like you may have subtracted $6$ instead of $9$ when completing the square for $x^2-6x$. Remember that the constant term is $\\left(\\dfrac{b}{2}\\right)^2 = \\left(-3\\right)^2 = 9$."
                        },
                        {
                                "ans": "$$c = 5, \\quad c = 5 \\text{ or } c = 6$$",
                                "feedback": "Be careful with your signs when factorising the quadratic $c^2 + 11c + 30 = 0$. Since all coefficients are positive, the factorisation is $\\left(c+5\\right)\\left(c+6\\right) = 0$, which yields negative roots $c = -5$ and $c = -6$."
                        },
                        {
                                "ans": "$$c = 5, \\quad c = -5$$",
                                "feedback": "You have only found one of the two possible values of $c$ for the second part. Ensure you solve for both linear factors of the quadratic equation."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Parabola Vertices",
                        "content": "For a quadratic function $f(x) = ax^2 + bx + c$, the $x$-coordinate of the vertex always lies at $x = -\\dfrac{b}{2a}$. This is a highly reliable shortcut for finding the maximum or minimum of a quadratic function without completing the square."
                }
        },
        {
                "id": "004187",
                "board": "OCR",
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Functions",
                "subtopic": [
                        "Functions and Mappings"
                ],
                "img": false,
                "question": "The functions $g$ and $h$ are defined for all real values of $x$ (with $x \\ne 1$ for $g(x)$) by:<br>$$g(x) = \\dfrac{2x + 3}{x - 1}, \\quad h(x) = x^2 - 2$$<br>1. Find the range of $g(x)$.<br>2. Find the expression for the composite function $gh(x)$, and state the values of $x$ for which $gh(x)$ is not defined.",
                "steps": [
                        "To find the range of the rational function $g(x)$, let $y = g(x)$ and rearrange the equation to express $x$ in terms of $y$:<br>$$y = \\dfrac{2x + 3}{x - 1}$$<br>\\begin{aligned}y\\left(x - 1\\right) &= 2x + 3 \\cryx - y &= 2x + 3\\end{aligned}",
                        "Group the $x$ terms on one side of the equation:<br>\\begin{aligned}yx - 2x &= y + 3 \\cr x\\left(y - 2\\right) &= y + 3\\end{aligned}<br>$$x = \\dfrac{y + 3}{y - 2}$$",
                        "For $x$ to be defined as a real number, the denominator of this fraction cannot be zero:<br>$$y - 2 \\ne 0 \\implies y \\ne 2$$<br>So, the range of $g(x)$ is all real numbers except $2$. In set notation, this is $\\\\{y \\in \\mathbb{R} : y \\ne 2\\\\}$.",
                        "To find the composite function $gh(x)$, substitute $h(x) = x^2 - 2$ in place of $x$ inside the function $g(x)$:<br>\\begin{aligned}gh(x) &= g\\left(h\\left(x\\right)\\right) \\cr&= g\\left(x^2 - 2\\right) \\cr&= \\dfrac{2\\left(x^2 - 2\\right) + 3}{\\left(x^2 - 2\\right) - 1}\\end{aligned}",
                        "Expand and simplify the numerator and denominator:<br>\\begin{aligned}gh(x) &= \\dfrac{2x^2 - 4 + 3}{x^2 - 3} \\cr&= \\dfrac{2x^2 - 1}{x^2 - 3}\\end{aligned}",
                        "The composite function $gh(x)$ is not defined when the denominator is zero:<br>\\begin{aligned}x^2 - 3 &= 0 \\cr x^2 &= 3 \\cr x &= \\pm\\sqrt{3}\\end{aligned}<br>Additionally, the domain of $gh(x)$ requires that the output of $h(x)$ is within the domain of $g(x)$. Since $g(x)$ is undefined at $x = 1$, we must also exclude $h(x) = 1 \\implies x^2 - 2 = 1 \\implies x = \\pm\\sqrt{3}$, which yields the exact same restriction.",
                "Final Answer: $$y \\ne 2, \\quad gh(x) = \\dfrac{2x^2 - 1}{x^2 - 3} \\text{ for } x \\ne \\pm\\sqrt{3}$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$y \\ne 1, \\quad gh(x) = \\dfrac{2x^2 - 1}{x^2 - 3} \\text{ for } x \\ne \\pm\\sqrt{3}$$",
                                "feedback": "You may have confused the vertical asymptote with the horizontal asymptote. The horizontal asymptote of $g(x) = \\dfrac{2x+3}{x-1}$ is determined by the ratio of the leading coefficients, which is $\\dfrac{2}{1} = 2$. Thus, $y \\ne 2$, not $y \\ne 1$."
                        },
                        {
                                "ans": "$$y \\ne 2, \\quad gh(x) = \\dfrac{2x^2 - 1}{x^2 - 3} \\text{ for } x \\ne 3$$",
                                "feedback": "Check your denominator solving. Setting $x^2-3 = 0$ yields $x^2 = 3$, so $x = \\pm\\sqrt{3}$, not $x = 3$. You must exclude both the positive and negative roots."
                        },
                        {
                                "ans": "$$y \\ne 2, \\quad gh(x) = \\dfrac{2x^2 + 1}{x^2 - 1} \\text{ for } x \\ne \\pm 1$$",
                                "feedback": "It looks like you made a sign error when substituting $h(x)$ into the numerator. Be careful: $2\\left(x^2-2\\right) + 3 = 2x^2 - 4 + 3 = 2x^2 - 1$, not $2x^2 + 1$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Horizontal Asymptote Shortcut",
                        "content": "For a rational function of the form $f(x) = \\dfrac{ax + b}{cx + d}$, the range will always exclude the value $\\dfrac{a}{c}$. This corresponds to the horizontal asymptote of the hyperbola as $x \\to \\pm\\infty$."
                }
        },
        {
                "id": "004188",
                "board": "OCR",
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Functions",
                "subtopic": [
                        "Functions and Mappings"
                ],
                "img": false,
                "question": "The function $f$ is defined for all real values of $x$ by:<br>$$f(x) = |2x - 5| - 3$$<br>1. Write down the range of $f$.<br>2. Solve the equation $ff(x) = 2$.",
                "steps": [
                        "Since the absolute value expression is always non-negative, we have:<br>$$|2x - 5| \\ge 0$$<br>Subtracting $3$ from both sides gives:<br>$$|2x - 5| - 3 \\ge -3 \\implies f(x) \\ge -3$$<br>So, the range of $f(x)$ is $y \\ge -3$.",
                        "To solve the composite equation $ff(x) = 2$, let $y = f(x)$. This transforms the equation into:<br>\\begin{aligned}f(y) &= 2 \\cr|2y - 5| - 3 &= 2\\end{aligned}",
                        "Solve this basic modulus equation for $y$:<br>$$|2y - 5| = 5$$<br>This splits into two linear cases:<br>\\begin{aligned}2y - 5 &= 5 \\cr2y &= 10 \\cry &= 5\\end{aligned}<br>\\begin{aligned}2y - 5 &= -5 \\cr2y &= 0 \\cry &= 0\\end{aligned}",
                        "Substitute $f(x)$ back in place of $y$, which gives us two separate modulus equations to solve for $x$:<br>\\begin{aligned}\\text{Case 1: } f(x) &= 0 \\quad \\text{and} \\quad \\text{Case 2: } f(x) \\cr&= 5\\end{aligned}",
                        "Solve **Case 1**: $f(x) = 0$:<br>\\begin{aligned}|2x - 5| - 3 &= 0 \\cr|2x - 5| &= 3\\end{aligned}<br>\\begin{aligned}2x - 5 &= 3 \\cr2x &= 8 \\cr x &= 4\\end{aligned}<br>\\begin{aligned}2x - 5 &= -3 \\cr2x &= 2 \\cr x &= 1\\end{aligned}",
                        "Solve **Case 2**: $f(x) = 5$:<br>\\begin{aligned}|2x - 5| - 3 &= 5 \\cr|2x - 5| &= 8\\end{aligned}<br>\\begin{aligned}2x - 5 &= 8 \\cr2x &= 13 \\cr x &= \\dfrac{13}{2} = 6.5\\end{aligned}<br>\\begin{aligned}2x - 5 &= -8 \\cr2x &= -3 \\cr x &= -\\dfrac{3}{2} = -1.5\\end{aligned}",
                        "Combine all solutions to obtain our final set of roots:<br>$$x = -1.5, \\quad 1, \\quad 4, \\quad 6.5$$",
                "Final Answer: $$y \\ge -3, \\quad x = -1.5, \\, 1, \\, 4, \\, 6.5$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$y \\ge 3, \\quad x = 1, \\, 4, \\, 6.5, \\, -1.5$$",
                                "feedback": "Check the range of your modulus function. The vertical shift is $-3$, which means the minimum value of $f(x)$ is $-3$, not $+3$. Thus, the range must be $y \\ge -3$."
                        },
                        {
                                "ans": "$$y \\ge -3, \\quad x = 4, \\, 6.5$$",
                                "feedback": "You have only solved the positive cases for your modulus equations. Remember that a modulus equation of the form $|Ax+B| = C$ must be solved for both $Ax+B = C$ and $Ax+B = -C$ to capture all valid real roots."
                        },
                        {
                                "ans": "$$y \\ge -3, \\quad x = 1, \\, 4$$",
                                "feedback": "It looks like you only solved the first case $f(x) = 0$. You must also solve the second case $f(x) = 5$ to get the complete set of four real roots."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Multi-layered Modulus Equations",
                        "content": "When solving composite modulus equations like $f(f(x)) = k$, introducing a substitution variable like $y = f(x)$ keeps the algebra clean and prevents you from making sign errors during the nested expansions."
                }
        },
        {
                "id": "004189",
                "board": "OCR",
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Functions",
                "subtopic": [
                        "Functions and Mappings",
                        "Linear Equations"
                ],
                "img": false,
                "question": "The function $f$ is defined for $x \\ge 2$ by:<br>$$f(x) = x^2 - 4x + 4$$<br>1. Show that $f$ has an inverse function $f^{-1}$, stating its domain and range.<br>2. Find an expression for $f^{-1}(x)$.<br>3. Solve the equation $f(x) = f^{-1}(x)$.",
                "steps": [
                        "First, rewrite $f(x)$ by completing the square:<br>\\begin{aligned}f(x) &= x^2 - 4x + 4 \\cr&= \\left(x - 2\\right)^2\\end{aligned}<br>For $x \\ge 2$, the gradient $f'(x) = 2(x - 2) \\ge 0$, which means the function is strictly increasing. Because it is a one-to-one function on this restricted domain, it has a valid inverse function.",
                        "For $x \\ge 2$, the value of $\\left(x-2\\right)^2$ is always greater than or equal to $0$, so the range of $f$ is $y \\ge 0$.<br>The domain of $f^{-1}$ is the range of $f$: $x \\ge 0$.<br>The range of $f^{-1}$ is the domain of $f$: $y \\ge 2$.",
                        "To find $f^{-1}(x)$, let $y = \\left(x - 2\\right)^2$ and solve for $x$ in terms of $y$:<br>\\begin{aligned}\\sqrt{y} &= x - 2 \\cr x &= 2 + \\sqrt{y}\\end{aligned}<br>Since our domain is $x \\ge 2$, we choose the positive square root. Replace variables to write the inverse function:<br>$$f^{-1}(x) = 2 + \\sqrt{x} \\quad \\text{for} \\quad x \\ge 0$$",
                        "To solve the equation $f(x) = f^{-1}(x)$, we use the mathematical identity that any intersection between a function and its inverse must lie along the line of symmetry $y = x$. Therefore, we solve:<br>\\begin{aligned}f(x) &= x \\cr x^2 - 4x + 4 &= x\\end{aligned}",
                        "Rearrange to form a standard quadratic equation:<br>$$x^2 - 5x + 4 = 0$$<br>Factorise the quadratic:<br>\\begin{aligned}\\left(x - 1\\right)\\left(x - 4\\right) &= 0 \\cr x &= 1 \\quad \\text{or} \\quad x = 4\\end{aligned}",
                        "Verify our solutions against the original domain constraints. Since the domain of $f(x)$ is strictly $x \\ge 2$, we must discard $x = 1$. This leaves the unique real solution:<br>$$x = 4$$",
                "Final Answer: \\begin{aligned}f^{-1}(x) &= 2 + \\sqrt{x}, \\quad \\text{domain } x \\ge 0, \\, \\text{range } y \\ge 2, \\quad x \\cr&= 4\\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$f^{-1}(x) = 2 + \\sqrt{x}, \\quad \\text{domain } x \\ge 0, \\, \\text{range } y \\ge 2, \\quad x = 1 \\text{ or } x = 4$$",
                                "feedback": "You have forgotten to check your solutions against the domain of the original function. Since $f(x)$ is only defined for $x \\ge 2$, the solution $x = 1$ is invalid and must be discarded."
                        },
                        {
                                "ans": "$$f^{-1}(x) = 2 \\pm \\sqrt{x}, \\quad \\text{domain } x \\ge 0, \\, \\text{range } y \\ge 2, \\quad x = 4$$",
                                "feedback": "An inverse function must be strictly single-valued to be a valid function. Since the range of $f^{-1}$ is $y \\ge 2$, you must only select the positive root, $2 + \\sqrt{x}$."
                        },
                        {
                                "ans": "$$f^{-1}(x) = \\sqrt{x} - 2, \\quad \\text{domain } x \\ge 0, \\, \\text{range } y \\ge 2, \\quad x = 4$$",
                                "feedback": "It looks like you made a sign error when isolating $x$. Since $x - 2 = \\sqrt{y}$, adding $2$ to both sides yields $x = 2 + \\sqrt{y}$, not $\\sqrt{y} - 2$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Intersections with Inverses",
                        "content": "Solving $f(x) = f^{-1}(x)$ directly can often lead to difficult non-linear equations (in this case, $\\left(x-2\\right)^2 = 2+\\sqrt{x}$). Always simplify your work by solving the equivalent, much simpler equation $f(x) = x$ instead."
                }
        },
        {
                "id": "004190",
                "board": "OCR",
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Functions",
                "subtopic": [
                        "Functions and Mappings"
                ],
                "img": false,
                "question": "The function $f$ is defined for all real values of $x$ except $x = a$ by:<br>$$f(x) = \\dfrac{3x + 1}{x - 3}$$<br>1. Write down the value of the constant $a$.<br>2. Show that $f(x)$ is a self-inverse function, meaning $f(x) = f^{-1}(x)$ for all $x \\ne 3$.<br>3. Evaluate $f^{2026}(5)$, showing your working clearly.",
                "steps": [
                        "The function $f(x) = \\dfrac{3x + 1}{x - 3}$ is undefined when its denominator is equal to zero:<br>\\begin{aligned}x - 3 &= 0 \\cr x &= 3\\end{aligned}<br>Therefore, the constant restriction value is $a = 3$.",
                        "To prove $f(x)$ is a self-inverse function, let $y = f(x)$ and solve for $x$ in terms of $y$:<br>\\begin{aligned}y &= \\dfrac{3x + 1}{x - 3} \\cry\\left(x - 3\\right) &= 3x + 1\\end{aligned}",
                        "Expand and isolate the $x$ terms:<br>\\begin{aligned}yx - 3y &= 3x + 1 \\cryx - 3x &= 3y + 1\\end{aligned}<br>\\begin{aligned}x\\left(y - 3\\right) &= 3y + 1 \\cr x &= \\dfrac{3y + 1}{y - 3}\\end{aligned}",
                        "Replace the variables to write the expression for $f^{-1}(x)$:<br>$$f^{-1}(x) = \\dfrac{3x + 1}{x - 3}$$<br>Since $f^{-1}(x)$ is identical to our original function $f(x)$, the function is proven to be self-inverse.",
                        "Because $f(x)$ is self-inverse, applying the function twice returns the original input variable:<br>\\begin{aligned}f^2(x) &= f\\left(f\\left(x\\right)\\right) \\cr&= x\\end{aligned}",
                        "From this, we can deduce that any even number of compositions will simplify to the identity function, while any odd number of compositions simplifies to $f(x)$:<br>\\begin{aligned}f^{2n}(x) &= x \\quad \\text{and} \\quad f^{2n+1}(x) \\cr&= f(x)\\end{aligned}",
                        "Since $2026$ is an even integer, the composite function $f^{2026}(x)$ is equivalent to the identity function:<br>$$f^{2026}(5) = 5$$",
                "Final Answer: \\begin{aligned}a &= 3, \\quad f(f(x)) = x \\crf^{-1}(x) &= f(x), \\quad 5\\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$a = -3, \\quad f^{-1}(x) = f(x), \\quad 5$",
                                "feedback": "Check your denominator restriction. The denominator is $x-3$, which is equal to zero at $x = 3$, not $x = -3$. Therefore, $a = 3$."
                        },
                        {
                                "ans": "$a = 3, \\quad f^{-1}(x) = f(x), \\quad \\dfrac{8}{1}$",
                                "feedback": "You may have evaluated $f(5)$ instead of $f^{2026}(5)$. Since $2026$ is an even number, the composite function simplifies to the identity, meaning $f^{2026}(x) = x$, so the output is exactly $5$."
                        },
                        {
                                "ans": "$a = 3, \\quad f^{-1}(x) = \\dfrac{3x - 1}{x + 3}, \\quad 5$",
                                "feedback": "It looks like you made a sign error when finding the inverse function. Double-check your algebraic isolation to ensure you get $x = \\dfrac{3y+1}{y-3}$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: High-order Compositions",
                        "content": "When asked to evaluate high-order compositions like $f^{2026}(x)$, never calculate them term by term. Instead, evaluate the first few terms—$f^2(x)$, $f^3(x)$, etc.—to identify the periodic or self-inverse pattern."
                }
        },
        {
                "id": "004191",
                "board": "OCR",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Differentiation",
                        "Linear Equations"
                ],
                "img": false,
                "question": "A curve has parametric equations $x = t + \\dfrac{4}{t}$ and $y = t - \\dfrac{4}{t}$, for $t \\ne 0$.<br><br>1. Find $\\dfrac{\\text{d}y}{\\text{d}x}$ in terms of $t$, giving your answer in its simplest form.<br>2. Explain why the curve has no stationary points.<br>3. By considering $x + y$, or otherwise, find a cartesian equation of the curve, giving your answer in a form not involving fractions or brackets.",
                "steps": [
                        "To find the derivative $\\dfrac{\\text{d}y}{\\text{d}x}$, we first differentiate $x$ and $y$ with respect to the parameter $t$:<br>\\begin{aligned}\\dfrac{\\text{d}x}{\\text{d}t} &= 1 - \\dfrac{4}{t^2} \\cr&= \\dfrac{t^2 - 4}{t^2}\\end{aligned}<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}t} &= 1 + \\dfrac{4}{t^2} \\cr&= \\dfrac{t^2 + 4}{t^2}\\end{aligned}",
                        "Apply the parametric chain rule $\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{\\dfrac{\\text{d}y}{\\text{d}t}}{\\dfrac{\\text{d}x}{\\text{d}t}}$ and simplify the compound fraction:<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{\\dfrac{t^2 + 4}{t^2}}{\\dfrac{t^2 - 4}{t^2}} \\cr&= \\dfrac{t^2 + 4}{t^2 - 4}\\end{aligned}",
                        "Stationary points require the derivative $\\dfrac{\\text{d}y}{\\text{d}x} = 0$, which occurs when the numerator of the derivative is equal to zero:<br>\\begin{aligned}t^2 + 4 &= 0 \\crt^2 &= -4\\end{aligned}<br>Since the square of any real number must be non-negative ($t^2 \\ge 0$), the equation $t^2 = -4$ has no real solutions. Since $\\dfrac{\\text{d}y}{\\text{d}t}$ is never zero, the curve has no stationary points.",
                        "To eliminate the parameter $t$ and find the Cartesian equation, calculate $x + y$ and $x - y$:<br>\\begin{aligned}x + y &= \\left(t + \\dfrac{4}{t}\\right) + \\left(t - \\dfrac{4}{t}\\right) = 2t \\crt &= \\dfrac{x + y}{2}\\end{aligned}<br>\\begin{aligned}x - y &= \\left(t + \\dfrac{4}{t}\\right) - \\left(t - \\dfrac{4}{t}\\right) = \\dfrac{8}{t} \\crt &= \\dfrac{8}{x - y}\\end{aligned}",
                        "Equate the two expressions for $t$ to eliminate the parameter:<br>\\begin{aligned}\\dfrac{x + y}{2} &= \\dfrac{8}{x - y} \\cr\\left(x + y\\right)\\left(x - y\\right) &= 16\\end{aligned}<br>Expand the difference of two squares to obtain the Cartesian equation:<br>$$x^2 - y^2 = 16$$",
                "Final Answer: \\begin{aligned}\\dfrac{t^2 + 4}{t^2 - 4}, \\quad t^2 + 4 \\ne 0 \\cr\\text{no stationary points}, \\quad x^2 - y^2 &= 16\\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\dfrac{t^2 - 4}{t^2 + 4}, \\quad t = \\pm 2 \\implies \\text{two stationary points}, \\quad x^2 - y^2 = 16$$",
                                "feedback": "You may have inverted the chain rule division when calculating $\\dfrac{\\text{d}y}{\\text{d}x}$. Remember that $\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{\\text{d}y}{\\text{d}t} \\div \\dfrac{\\text{d}x}{\\text{d}t}$, which puts the positive expression $t^2+4$ in the numerator."
                        },
                        {
                                "ans": "$$\\dfrac{t^2 + 4}{t^2 - 4}, \\quad t^2 + 4 \\ne 0 \\implies \\text{no stationary points}, \\quad x^2 - y^2 = 8$$",
                                "feedback": "Check your algebraic step when equating the expressions for $t$. You have $\\dfrac{x+y}{2} = \\dfrac{8}{x-y}$. Multiplying across yields $\\left(x+y\\right)\\left(x-y\\right) = 16$, not $8$."
                        },
                        {
                                "ans": "$$\\dfrac{t^2 + 4}{t^2 - 4}, \\quad t^2 + 4 \\ne 0 \\implies \\text{no stationary points}, \\quad x^2 + y^2 = 16$$",
                                "feedback": "Be careful with your algebraic expansion. Multiplying $\\left(x+y\\right)\\left(x-y\\right)$ results in the difference of two squares $x^2 - y^2$, not the sum $x^2 + y^2$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Spotting Hyperbolas",
                        "content": "Parametric curves of the form $x = a\\left(t + \\dfrac{k}{t}\\right)$ and $y = a\\left(t - \\dfrac{k}{t}\\right)$ are the standard parametric representations of hyperbolas. Using the algebraic conjugates $(x+y)$ and $(x-y)$ to eliminate the parameter is far faster than trying to make $t$ the subject of a single equation."
                }
        },
        {
                "id": "004192",
                "board": "OCR",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Differentiation",
                        "Linear Equations",
                        "Tangents and Normals"
                ],
                "img": false,
                "question": "A curve has parametric equations $x = 3\\cos\\theta$ and $y = 4\\sin\\theta$, for $0 \\le \\theta < 2\\pi$.<br><br>1. Find $\\dfrac{\\text{d}y}{\\text{d}x}$ in terms of $\\theta$.<br>2. Find the equation of the tangent to the curve at the point where $\\theta = \\dfrac{\\pi}{4}$. Give your answer in the form $ax + by = c$, where $a$, $b$, and $c$ are exact constants.<br>3. Eliminate $\\theta$ to find a cartesian equation of the curve.",
                "steps": [
                        "Differentiate the parametric equations $x = 3\\cos\\theta$ and $y = 4\\sin\\theta$ with respect to the parameter $\\theta$:<br>\\begin{aligned}\\dfrac{\\text{d}x}{\\text{d}\\theta} &= -3\\sin\\theta \\quad \\text{and} \\quad \\dfrac{\\text{d}y}{\\text{d}\\theta} \\cr&= 4\\cos\\theta\\end{aligned}",
                        "Apply the parametric differentiation formula:<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{\\dfrac{\\text{d}y}{\\text{d}\\theta}}{\\dfrac{\\text{d}x}{\\text{d}\\theta}} \\cr&= \\dfrac{4\\cos\\theta}{-3\\sin\\theta} \\cr&= -\\dfrac{4}{3}\\cot\\theta\\end{aligned}",
                        "To find the tangent at $\\theta = \\dfrac{\\pi}{4}$, first evaluate the coordinates of the point of contact:<br>\\begin{aligned}x_1 &= 3\\cos\\left(\\dfrac{\\pi}{4}\\right) \\cr&= \\dfrac{3\\sqrt{2}}{2}\\end{aligned}<br>\\begin{aligned}y_1 &= 4\\sin\\left(\\dfrac{\\pi}{4}\\right) \\cr&= 4\\left(\\dfrac{\\sqrt{2}}{2}\\right) \\cr&= 2\\sqrt{2}\\end{aligned}",
                        "Evaluate the gradient of the tangent at $\\theta = \\dfrac{\\pi}{4}$:<br>\\begin{aligned}m &= -\\dfrac{4}{3}\\cot\\left(\\dfrac{\\pi}{4}\\right) \\cr&= -\\dfrac{4}{3}\\left(1\\right) \\cr&= -\\dfrac{4}{3}\\end{aligned}",
                        "Write the equation of the tangent line passing through $\\left(\\dfrac{3\\sqrt{2}}{2}, \\, 2\\sqrt{2}\\right)$ using the point-slope formula:<br>$$y - 2\\sqrt{2} = -\\dfrac{4}{3}\\left(x - \\dfrac{3\\sqrt{2}}{2}\\right)$$",
                        "Multiply by $3$ and collect terms to rearrange into the form $ax + by = c$:<br>$$3\\left(y - 2\\sqrt{2}\\right) = -4\\left(x - \\dfrac{3\\sqrt{2}}{2}\\right)$$<br>\\begin{aligned}3y - 6\\sqrt{2} &= -4x + 6\\sqrt{2} \\cr4x + 3y &= 12\\sqrt{2}\\end{aligned}",
                        "To find the Cartesian equation, rearrange the parametric equations to isolate the trigonometric functions:<br>\\begin{aligned}\\cos\\theta &= \\dfrac{x}{3} \\quad \\text{and} \\quad \\sin\\theta \\cr&= \\dfrac{y}{4}\\end{aligned}<br>Substitute these into the fundamental Pythagorean identity $\\sin^2\\theta + \\cos^2\\theta = 1$:<br>\\begin{aligned}\\left(\\dfrac{x}{3}\\right)^2 + \\left(\\dfrac{y}{4}\\right)^2 &= 1 \\cr\\dfrac{x^2}{9} + \\dfrac{y^2}{16} &= 1\\end{aligned}",
                "Final Answer: \\begin{aligned}-\\dfrac{4}{3}\\cot\\theta, \\quad 4x + 3y &= 12\\sqrt{2}, \\quad \\dfrac{x^2}{9} + \\dfrac{y^2}{16} \\cr&= 1\\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$-\\dfrac{4}{3}\\cot\\theta, \\quad 4x + 3y = 12\\sqrt{2}, \\quad \\dfrac{x^2}{3} + \\dfrac{y^2}{4} = 1$$",
                                "feedback": "Check your squaring step for the Cartesian equation. Squaring $\\dfrac{x}{3}$ yields $\\dfrac{x^2}{9}$, not $\\dfrac{x^2}{3}$. Ensure you square both the numerator and denominator."
                        },
                        {
                                "ans": "$$-\\dfrac{3}{4}\\tan\\theta, \\quad 3x + 4y = 12\\sqrt{2}, \\quad \\dfrac{x^2}{9} + \\dfrac{y^2}{16} = 1$$",
                                "feedback": "You may have inverted the division when calculating the derivative. The numerator is $\\dfrac{\\text{d}y}{\\text{d}\\theta} = 4\\cos\\theta$, which results in a gradient of $-\\dfrac{4}{3}\\cot\\theta$, not $-\\dfrac{3}{4}\\tan\\theta$."
                        },
                        {
                                "ans": "$$-\\dfrac{4}{3}\\cot\\theta, \\quad 4x - 3y = 0, \\quad \\dfrac{x^2}{9} + \\dfrac{y^2}{16} = 1$$",
                                "feedback": "It looks like you made a sign error when expanding the right-hand side of your tangent equation. Be careful: $-4\\left(x - \\dfrac{3\\sqrt{2}}{2}\\right) = -4x + 6\\sqrt{2}$. Adding $4x$ and adding $6\\sqrt{2}$ across gives $4x + 3y = 12\\sqrt{2}$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Ellipse Parameters",
                        "content": "The parametric equations $x = a\\cos\\theta$ and $y = b\\sin\\theta$ represent an ellipse centred at the origin with horizontal semi-axis $a$ and vertical semi-axis $b$. The standard Cartesian form $\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} = 1$ is derived directly from the Pythagorean identity."
                }
        },
        {
                "id": "004193",
                "board": "OCR",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Differentiation",
                        "Linear Equations"
                ],
                "img": false,
                "question": "A curve has parametric equations $x = e^t + 2$ and $y = e^{2t} - 3$ for all real $t$.<br><br>1. Find $\\dfrac{\\text{d}y}{\\text{d}x}$ in terms of $t$.<br>2. Show that the curve has no stationary points.<br>3. By eliminating $t$, find the cartesian equation of the curve in the form $y = f(x)$, stating its domain.",
                "steps": [
                        "Differentiate the parametric equations $x = e^t + 2$ and $y = e^{2t} - 3$ with respect to the parameter $t$:<br>\\begin{aligned}\\dfrac{\\text{d}x}{\\text{d}t} &= e^t \\quad \\text{and} \\quad \\dfrac{\\text{d}y}{\\text{d}t} \\cr&= 2e^{2t}\\end{aligned}",
                        "Apply the parametric chain rule formula:<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{\\dfrac{\\text{d}y}{\\text{d}t}}{\\dfrac{\\text{d}x}{\\text{d}t}} \\cr&= \\dfrac{2e^{2t}}{e^t} \\cr&= 2e^t\\end{aligned}",
                        "For a stationary point, we require $\\dfrac{\\text{d}y}{\\text{d}x} = 0$, which implies:<br>$$2e^t = 0$$<br>The exponential function $e^t$ is strictly positive for all real values of $t$ ($e^t > 0$). Therefore, the derivative $2e^t$ can never equal zero, meaning the curve has no stationary points.",
                        "To find the Cartesian equation, isolate $e^t$ in the equation for $x$:<br>\\begin{aligned}x &= e^t + 2 \\cre^t &= x - 2\\end{aligned}",
                        "Substitute $e^t = x - 2$ into the parametric equation for $y$ using the identity $e^{2t} = \\left(e^t\\right)^2$:<br>\\begin{aligned}y &= \\left(e^t\\right)^2 - 3 \\cry &= \\left(x - 2\\right)^2 - 3\\end{aligned}",
                        "To state the domain of our Cartesian equation, consider the range of $x$ in terms of the parameter $t$. Since $e^t > 0$ for all real $t$, we have:<br>\\begin{aligned}x &= e^t + 2 > 2 \\cr x > 2\\end{aligned}",
                "Final Answer: \\begin{aligned}2e^t, \\quad 2e^t \\ne 0 \\cr\\text{no stationary points}, \\quad y &= \\left(x - 2\\right)^2 - 3 \\text{ for } x > 2\\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$2e^t, \\quad 2e^t \\ne 0 \\implies \\text{no stationary points}, \\quad y = \\left(x - 2\\right)^2 - 3 \\text{ for all } x$$",
                                "feedback": "When converting from parametric to Cartesian form, the domain of the Cartesian function must strictly match the range of the $x$-parameter. Since $x = e^t + 2$ and $e^t > 0$, the domain must be restricted to $x > 2$."
                        },
                        {
                                "ans": "$$2e^{2t}, \\quad 2e^{2t} \\ne 0 \\implies \\text{no stationary points}, \\quad y = \\left(x - 2\\right)^2 - 3 \\text{ for } x > 2$$",
                                "feedback": "Check your derivative simplification step. Differentiating $y = e^{2t} - 3$ yields $2e^{2t}$. Dividing this by $e^t$ gives $\\dfrac{2e^{2t}}{e^t} = 2e^t$, not $2e^{2t}$."
                        },
                        {
                                "ans": "$$2e^t, \\quad 2e^t \\ne 0 \\implies \\text{no stationary points}, \\quad y = x^2 - 7 \\text{ for } x > 2$$",
                                "feedback": "It looks like you made an expansion error when substituting $e^t = x - 2$. Be careful: the substitution yields $y = \\left(x-2\\right)^2 - 3$. Expanding this gives $y = x^2 - 4x + 4 - 3 = x^2 - 4x + 1$, which is equivalent to keeping it in the completed square form."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Parametric Domains",
                        "content": "Always remember that the domain of a Cartesian equation derived from parametric equations is not automatically all real numbers. It is strictly bounded by the range of the horizontal parametric variable $x(t)$."
                }
        },
        {
                "id": "004194",
                "board": "OCR",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Differentiation",
                        "Linear Equations"
                ],
                "img": false,
                "question": "A curve has parametric equations $x = t^2$ and $y = t^3 - 3t$ for all real $t$.<br><br>1. Find the coordinates of the points where the curve meets the coordinate axes.<br>2. Find $\\dfrac{\\text{d}y}{\\text{d}x}$ in terms of $t$.<br>3. Show that there are exactly two stationary points on the curve, and find their coordinates.",
                "steps": [
                        "To find where the curve meets the axes, we analyze the conditions $x=0$ and $y=0$ separately:<br>For $x = 0 \\implies t^2 = 0 \\implies t = 0$. Substituting $t=0$ into $y$ gives $y = 0^3 - 3(0) = 0$, giving the origin $(0, 0)$.",
                        "For $y = 0 \\implies t^3 - 3t = 0 \\implies t\\left(t^2 - 3\\right) = 0$, which yields three solutions for $t$:<br>\\begin{aligned}t &= 0 \\cr(0, 0)\\end{aligned}<br>\\begin{aligned}t &= \\sqrt{3} \\cr x &= \\left(\\sqrt{3}\\right)^2 = 3 \\cr(3, 0)\\end{aligned}\\begin{aligned}t &= -\\sqrt{3} \\cr x &= \\left(-\\sqrt{3}\\right)^2 = 3 \\cr(3, 0)\\end{aligned}<br>So the curve meets the axes at the distinct points $(0, 0)$ and $(3, 0)$.",
                        "Differentiate the parametric equations with respect to the parameter $t$:<br>\\begin{aligned}\\dfrac{\\text{d}x}{\\text{d}t} &= 2t \\quad \\text{and} \\quad \\dfrac{\\text{d}y}{\\text{d}t} \\cr&= 3t^2 - 3\\end{aligned}",
                        "Apply the parametric chain rule to find $\\dfrac{\\text{d}y}{\\text{d}x}$:<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{\\dfrac{\\text{d}y}{\\text{d}t}}{\\dfrac{\\text{d}x}{\\text{d}t}} \\cr&= \\dfrac{3t^2 - 3}{2t}\\end{aligned}",
                        "Stationary points occur when the derivative $\\dfrac{\\text{d}y}{\\text{d}x} = 0$, which requires the numerator to be zero (where the denominator is non-zero):<br>\\begin{aligned}3t^2 - 3 &= 0 \\crt^2 &= 1 \\crt &= \\pm 1\\end{aligned}",
                        "Find the Cartesian coordinates corresponding to these two parameter values:<br>For $t = 1$: $x = 1^2 = 1$ and $y = 1^3 - 3(1) = -2 \\implies (1, -2)$<br>For $t = -1$: $x = (-1)^2 = 1$ and $y = (-1)^3 - 3(-1) = 2 \\implies (1, 2)$<br>This confirms there are exactly two stationary points on the curve: $(1, -2)$ and $(1, 2)$.",
                "Final Answer: $$(0,0) \\text{ and } (3,0), \\quad \\dfrac{3t^2 - 3}{2t}, \\quad (1, -2) \\text{ and } (1, 2)$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$(0,0) \\text{ and } (3,0), \\quad \\dfrac{3t^2 - 3}{2t}, \\quad (1, -2)$$",
                                "feedback": "You have only found one of the two stationary points. Remember that $t^2 = 1$ yields both $t = 1$ and $t = -1$, both of which correspond to valid stationary points on the curve."
                        },
                        {
                                "ans": "$$(0,0) \\text{ and } (\\sqrt{3},0), \\quad \\dfrac{3t^2 - 3}{2t}, \\quad (1, -2) \\text{ and } (1, 2)$$",
                                "feedback": "Check your horizontal axis coordinate calculation. The parameter values at $y=0$ are $t = \\pm\\sqrt{3}$. Substituting these into $x = t^2$ yields $x = 3$, not $x = \\sqrt{3}$."
                        },
                        {
                                "ans": "$$(0,0) \\text{ and } (3,0), \\quad \\dfrac{3t^2 - 3}{2}, \\quad (1, -2) \\text{ and } (1, 2)$$",
                                "feedback": "You may have forgotten to include the derivative of $x(t)$ in the denominator of the chain rule. The derivative is $\\dfrac{\\text{d}x}{\\text{d}t} = 2t$, not $2$, which means the denominator must contain a factor of $t$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Double Points",
                        "content": "The curve in this question is a classic loop curve. Since two different parameter values ($t = \\sqrt{3}$ and $t = -\\sqrt{3}$) yield the same Cartesian coordinate $(3,0)$, this point is called a double point or self-intersection point on the graph."
                }
        },
        {
                "id": "004195",
                "board": "OCR",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Differentiation",
                        "Linear Equations"
                ],
                "img": false,
                "question": "A curve has parametric equations $x = 2t + \\dfrac{1}{t}$ and $y = 2t - \\dfrac{1}{t}$ for $t \\ne 0$.<br><br>1. Find $\\dfrac{\\text{d}y}{\\text{d}x}$ in terms of $t$, simplifying your answer as far as possible.<br>2. Show that the curve has no stationary points.<br>3. By eliminating $t$, find the cartesian equation of the curve in a form not involving fractions or brackets.",
                "steps": [
                        "Differentiate $x$ and $y$ with respect to the parameter $t$:<br>\\begin{aligned}\\dfrac{\\text{d}x}{\\text{d}t} &= 2 - \\dfrac{1}{t^2} \\cr&= \\dfrac{2t^2 - 1}{t^2}\\end{aligned}<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}t} &= 2 + \\dfrac{1}{t^2} \\cr&= \\dfrac{2t^2 + 1}{t^2}\\end{aligned}",
                        "Apply the parametric differentiation rule $\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{\\dfrac{\\text{d}y}{\\text{d}t}}{\\dfrac{\\text{d}x}{\\text{d}t}}$ and simplify:<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{\\dfrac{2t^2 + 1}{t^2}}{\\dfrac{2t^2 - 1}{t^2}} \\cr&= \\dfrac{2t^2 + 1}{2t^2 - 1}\\end{aligned}",
                        "Stationary points require $\\dfrac{\\text{d}y}{\\text{d}x} = 0$, which occurs when the numerator is zero:<br>\\begin{aligned}2t^2 + 1 &= 0 \\crt^2 &= -0.5\\end{aligned}<br>Since $t^2 \\ge 0$ for all real values of $t$, the equation $t^2 = -0.5$ has no real solutions. Thus, the derivative can never be zero, and there are no stationary points.",
                        "To find the Cartesian equation, eliminate the parameter $t$ by evaluating the linear combinations $x + y$ and $x - y$:<br>\\begin{aligned}x + y &= \\left(2t + \\dfrac{1}{t}\\right) + \\left(2t - \\dfrac{1}{t}\\right) = 4t \\crt &= \\dfrac{x + y}{4}\\end{aligned}<br>\\begin{aligned}x - y &= \\left(2t + \\dfrac{1}{t}\\right) - \\left(2t - \\dfrac{1}{t}\\right) = \\dfrac{2}{t} \\crt &= \\dfrac{2}{x - y}\\end{aligned}",
                        "Equate these two expressions for $t$ to eliminate the parameter:<br>$$\\dfrac{x + y}{4} = \\dfrac{2}{x - y}$$<br>Multiply across to remove fractions:<br>\\begin{aligned}\\left(x + y\\right)\\left(x - y\\right) &= 8 \\cr x^2 - y^2 &= 8\\end{aligned}",
                "Final Answer: \\begin{aligned}\\dfrac{2t^2 + 1}{2t^2 - 1}, \\quad 2t^2 + 1 \\ne 0 \\cr\\text{no stationary points}, \\quad x^2 - y^2 &= 8\\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\dfrac{2t^2 + 1}{2t^2 - 1}, \\quad 2t^2 + 1 \\ne 0 \\implies \\text{no stationary points}, \\quad x^2 - y^2 = 4$$",
                                "feedback": "Check your cross-multiplication. You have $\\dfrac{x+y}{4} = \\dfrac{2}{x-y}$. Multiplying both sides by $4$ and by $(x-y)$ yields $\\left(x+y\\right)\\left(x-y\\right) = 8$, not $4$."
                        },
                        {
                                "ans": "$$\\dfrac{2t^2 - 1}{2t^2 + 1}, \\quad t = \\pm \\dfrac{1}{\\sqrt{2}} \\implies \\text{two stationary points}, \\quad x^2 - y^2 = 8$$",
                                "feedback": "You may have inverted the division when simplifying the chain rule. $\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{\\text{d}y}{\\text{d}t} \\div \\dfrac{\\text{d}x}{\\text{d}t}$, which puts the positive expression $2t^2+1$ in the numerator."
                        },
                        {
                                "ans": "$$\\dfrac{2t^2 + 1}{2t^2 - 1}, \\quad 2t^2 + 1 \\ne 0 \\implies \\text{no stationary points}, \\quad x^2 + y^2 = 8$$",
                                "feedback": "Ensure you expand $\\left(x+y\\right)\\left(x-y\\right)$ correctly. It expands as the difference of two squares $x^2 - y^2$, not the sum $x^2 + y^2$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Conjugate Elimination",
                        "content": "For parametric curves featuring reciprocal terms (like $t$ and $\\dfrac{k}{t}$), using algebraic conjugates $(x+y)$ and $(x-y)$ is the most robust and elegant way to eliminate the parameter, leading directly to a hyperbola."
                }
        },
        {
                "id": "004196",
                "board": "OCR",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Differentiation",
                        "Exponential and Logarithmic Functions and Graphs",
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "In a science experiment, a substance is decaying exponentially. Its mass, $M$ grams, at time $t$ minutes is given by $M = 200e^{-0.04t}$.<br><br>1. Find the time taken for the mass to decrease to half of its original value, giving your answer to 3 significant figures.<br><br>A second substance is also decaying exponentially. Initially its mass was 500 grams and, after 10 minutes, its mass was 400 grams.<br><br>2. Find the time at which both substances are decaying at the same rate, giving your answer correct to 3 significant figures.",
                "steps": [
                        "To find when the mass of the first substance decreases to half of its original value, first identify the initial mass: at $t = 0$, $M = 200e^0 = 200$ grams. Half of this original mass is $100$ grams.",
                        "Set $M = 100$ and solve for $t$ using natural logarithms:<br>\\begin{aligned}200e^{-0.04t} &= 100 \\cre^{-0.04t} &= 0.5\\end{aligned}<br>\\begin{aligned}-0.04t &= \\ln\\left(0.5\\right) = -\\ln\\left(2\\right) \\crt &= \\dfrac{\\ln\\left(2\\right)}{0.04} = 25\\ln\\left(2\\right) \\approx 17.3 \\text{ minutes}\\end{aligned}",
                        "For the second substance, its mass $N$ at time $t$ can be modelled by $N = 500e^{-kt}$, where $k$ is the positive decay constant. Since $N = 400$ at $t = 10$:<br>\\begin{aligned}400 &= 500e^{-10k} \\cre^{-10k} &= 0.8\\end{aligned}<br>\\begin{aligned}-10k &= \\ln\\left(0.8\\right) \\crk &= -0.1\\ln\\left(0.8\\right) = 0.1\\ln\\left(1.25\\right) \\approx 0.022314\\end{aligned}",
                        "To find when both substances are decaying at the same rate, find the derivatives $\\dfrac{\\text{d}M}{\\text{d}t}$ and $\\dfrac{\\text{d}N}{\\text{d}t}$:<br>\\begin{aligned}\\dfrac{\\text{d}M}{\\text{d}t} &= 200\\left(-0.04\\right)e^{-0.04t} \\cr&= -8e^{-0.04t}\\end{aligned}<br>\\begin{aligned}\\dfrac{\\text{d}N}{\\text{d}t} &= 500\\left(-k\\right)e^{-kt} \\cr&= -500ke^{-kt}\\end{aligned}",
                        "Equate the rates of decay (the positive magnitudes of the derivatives) and substitute $k \\approx 0.022314$:<br>$$8e^{-0.04t} = 500\\left(0.022314\\right)e^{-0.022314t}$$<br>$$8e^{-0.04t} = 11.157e^{-0.022314t}$$",
                        "Rearrange to solve for $t$:<br>\\begin{aligned}\\dfrac{e^{-0.022314t}}{e^{-0.04t}} &= \\dfrac{8}{11.157} \\cre^{0.017686t} &= 0.71704\\end{aligned}<br>\\begin{aligned}0.017686t &= \\ln\\left(0.71704\\right) \\cr&= -0.33266\\end{aligned}<br>$$t = \\dfrac{-0.33266}{-0.017686} \\approx 18.8 \\text{ minutes}$$",
                "Final Answer: $$17.3 \\text{ minutes}, \\quad 18.8 \\text{ minutes}$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$17.3 \\text{ minutes}, \\quad 21.4 \\text{ minutes}$$",
                                "feedback": "You may have made an error when calculating the decay constant $k$ of the second substance. Ensure you use $k = -0.1\\ln\\left(0.8\\right) = 0.1\\ln\\left(1.25\\right) \\approx 0.022314$."
                        },
                        {
                                "ans": "$$17.3 \\text{ minutes}, \\quad 18.8 \\text{ minutes}$$",
                                "feedback": "Your numerical answers are correct. Double-check that your work clearly shows the differentiation of both exponential functions to earn full method marks."
                        },
                        {
                                "ans": "$$8.66 \\text{ minutes}, \\quad 18.8 \\text{ minutes}$$",
                                "feedback": "It looks like you defined half of the original mass as $50$ grams instead of $100$ grams in your first step. Since the initial mass is $200$ grams, the half-life is reached when the mass is $100$ grams."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Rates of Decay",
                        "content": "A 'rate of decay' is physically a positive quantity representing loss, which corresponds to the magnitude of the negative derivative (i.e., $-\\dfrac{\\text{d}M}{\\text{d}t}$). When equating rates of change, always ensure you are equating positive values to avoid sign conflicts."
                }
        },
        {
                "id": "004197",
                "board": "OCR",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Differentiation",
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "A cup of coffee is cooling in a room with a constant temperature of $20^\\circ\\text{C}$. The temperature, $\\theta^\\circ\\text{C}$, of the coffee at time $t$ minutes is modelled by the equation:<br>$$\\theta = 20 + 65e^{-0.08t}$$<br>1. Write down the initial temperature of the coffee.<br>2. Find the time taken for the temperature of the coffee to fall to $50^\\circ\\text{C}$, giving your answer correct to 3 significant figures.<br>3. Differentiate the equation to find the rate of change of temperature, $\\dfrac{\\text{d}\\theta}{\\text{d}t}$, at the instant when $t = 15$ minutes, giving your answer to 3 significant figures.",
                "steps": [
                        "To find the initial temperature, substitute $t = 0$ into the temperature equation:<br>\\begin{aligned}\\theta &= 20 + 65e^{-0.08\\left(0\\right)} \\cr&= 20 + 65e^0 \\cr&= 20 + 65\\left(1\\right) \\cr&= 85^\\circ\\text{C}\\end{aligned}",
                        "To find the time taken to cool to $50^\\circ\\text{C}$, set $\\theta = 50$ and solve for $t$:<br>\\begin{aligned}50 &= 20 + 65e^{-0.08t} \\cr30 &= 65e^{-0.08t}\\end{aligned}",
                        "Isolate the exponential term and take natural logarithms:<br>$$e^{-0.08t} = \\dfrac{30}{65} \\approx 0.461538$$<br>\\begin{aligned}-0.08t &= \\ln\\left(0.461538\\right) \\cr&= -0.773190\\end{aligned}",
                        "Solve for $t$:<br>$$t = \\dfrac{-0.773190}{-0.08} \\approx 9.6648$$<br>Rounding to 3 significant figures gives $9.66$ minutes.",
                        "To find the rate of change of temperature, differentiate $\\theta$ with respect to $t$ using the chain rule:<br>\\begin{aligned}\\dfrac{\\text{d}\\theta}{\\text{d}t} &= 65\\left(-0.08\\right)e^{-0.08t} \\cr&= -5.2e^{-0.08t}\\end{aligned}",
                        "Substitute $t = 15$ into the derivative expression to find the rate at that instant:<br>\\begin{aligned}\\dfrac{\\text{d}\\theta}{\\text{d}t} &= -5.2e^{-0.08\\left(15\\right)} \\cr&= -5.2e^{-1.2}\\end{aligned}<br>$$\\dfrac{\\text{d}\\theta}{\\text{d}t} \\approx -5.2\\left(0.301194\\right) \\approx -1.57^\\circ\\text{C per minute}$$",
                "Final Answer: $$85^\\circ\\text{C}, \\quad 9.66 \\text{ minutes}, \\quad -1.57^\\circ\\text{C per minute}$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$65^\\circ\\text{C}, \\quad 9.66 \\text{ minutes}, \\quad -1.57^\\circ\\text{C per minute}$$",
                                "feedback": "You may have forgotten to add the ambient room temperature of $20^\\circ\\text{C}$ to your initial calculation. At $t=0$, $\\theta = 20 + 65 = 85^\\circ\\text{C}$."
                        },
                        {
                                "ans": "$$85^\\circ\\text{C}, \\quad 14.1 \\text{ minutes}, \\quad -1.57^\\circ\\text{C per minute}$$",
                                "feedback": "Check your algebraic step when isolating the exponential term. It looks like you solved $50 = 65e^{-0.08t}$ and forgot to subtract the constant $20$ from $50$ first."
                        },
                        {
                                "ans": "$$85^\\circ\\text{C}, \\quad 9.66 \\text{ minutes}, \\quad -5.2^\\circ\\text{C per minute}$$",
                                "feedback": "It looks like you forgot to substitute $t = 15$ into your derivative. The expression $-5.2e^{-0.08t}$ must be evaluated at the specific instant $t = 15$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Newton's Law Constant",
                        "content": "In cooling models of the form $\\theta = T_{\\text{ambient}} + Ae^{-kt}$, the constant term represents the temperature of the surrounding medium. As $t \\to \\infty$, the exponential term decays to $0$, meaning the temperature of the object asymptotically approaches the room temperature."
                }
        },
        {
                "id": "004198",
                "board": "OCR",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Differentiation",
                        "Exponential and Logarithmic Functions and Graphs",
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "The population of a species of bacteria, $P$, in a laboratory culture at time $t$ hours is modelled by the equation:<br>$$P = 800e^{0.15t}$$<br>1. State the initial population of the bacteria.<br>2. Find the time taken for the population of the bacteria to double, giving your answer correct to 3 significant figures.<br>3. Find the rate of change of the population at the instant when $t = 4$ hours, giving your answer to the nearest integer.",
                "steps": [
                        "To find the initial population, substitute $t = 0$ into the population model:<br>\\begin{aligned}P &= 800e^{0.15\\left(0\\right)} \\cr&= 800e^0 \\cr&= 800\\end{aligned}",
                        "To find the doubling time, we set the population $P$ equal to double the initial value ($2 \\times 800 = 1600$) and solve for $t$:<br>\\begin{aligned}1600 &= 800e^{0.15t} \\cre^{0.15t} &= 2\\end{aligned}",
                        "Take the natural logarithm of both sides to isolate $t$:<br>$$0.15t = \\ln\\left(2\\right) \\approx 0.693147$$<br>$$t = \\dfrac{\\ln\\left(2\\right)}{0.15} \\approx 4.6209 \\text{ hours}$$<br>Rounding to 3 significant figures gives $4.62$ hours.",
                        "To find the rate of change of the population, differentiate $P$ with respect to $t$ using the chain rule:<br>\\begin{aligned}\\dfrac{\\text{d}P}{\\text{d}t} &= 800\\left(0.15\\right)e^{0.15t} \\cr&= 120e^{0.15t}\\end{aligned}",
                        "Substitute $t = 4$ into the derivative expression to find the rate at that instant:<br>\\begin{aligned}\\dfrac{\\text{d}P}{\\text{d}t} &= 120e^{0.15\\left(4\\right)} \\cr&= 120e^{0.6}\\end{aligned}<br>$$\\dfrac{\\text{d}P}{\\text{d}t} \\approx 120\\left(1.822118\\right) \\approx 218.65$$<br>Rounding to the nearest integer gives $219$ bacteria per hour.",
                "Final Answer: $$800, \\quad 4.62 \\text{ hours}, \\quad 219 \\text{ bacteria per hour}$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$800, \\quad 4.62 \\text{ hours}, \\quad 120 \\text{ bacteria per hour}$$",
                                "feedback": "It looks like you forgot to substitute $t = 4$ into your rate of change expression. The value $120$ is only the rate of change at the start ($t=0$)."
                        },
                        {
                                "ans": "$$800, \\quad 9.24 \\text{ hours}, \\quad 219 \\text{ bacteria per hour}$$",
                                "feedback": "Check your doubling equation. Setting $e^{0.15t} = 2$ means $0.15t = \\ln\\left(2\\right)$, not $0.15t = 2\\ln\\left(2\\right)$."
                        },
                        {
                                "ans": "$$800, \\quad 4.62 \\text{ hours}, \\quad 1458 \\text{ bacteria per hour}$$",
                                "feedback": "You may have made an error when differentiating. The derivative of $800e^{0.15t}$ is $800\\left(0.15\\right)e^{0.15t} = 120e^{0.15t}$, not $800e^{0.15t}$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Doubling Time Rule",
                        "content": "For any exponential growth model of the form $P = P_0 e^{kt}$, the doubling time is completely independent of the starting population $P_0$. It is always given by the simple exact formula $t = \\dfrac{\\ln\\left(2\\right)}{k}$."
                }
        },
        {
                "id": "004199",
                "board": "OCR",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Differentiation",
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "The concentration of a drug in a patient's bloodstream, $C\\text{ mg/L}$, at time $t$ hours after injection is modelled by the equation $C = 50e^{-0.25t}$ for $t \\ge 0$.<br><br>1. Find the time at which the concentration has decreased to $10\\%$ of its initial value, giving your answer correct to 3 significant figures.<br>2. Differentiate the equation to find the rate of change of concentration, $\\dfrac{\\text{d}C}{\\text{d}t}$, and calculate the magnitude of this rate when $t = 4$ hours, giving your answer correct to 3 significant figures.",
                "steps": [
                        "First, determine the initial concentration: at $t = 0$, $C = 50e^0 = 50\\text{ mg/L}$. A concentration that is $10\\%$ of this value is $5\\text{ mg/L}$.",
                        "Set $C = 5$ and solve for $t$ using natural logarithms:<br>\\begin{aligned}5 &= 50e^{-0.25t} \\cre^{-0.25t} &= 0.1\\end{aligned}<br>\\begin{aligned}-0.25t &= \\ln\\left(0.1\\right) \\cr&= -\\ln\\left(10\\right)\\end{aligned}\\begin{aligned}t &= \\dfrac{\\ln\\left(10\\right)}{0.25} \\cr&= 4\\ln\\left(10\\right) \\approx 9.2103 \\text{ hours}\\end{aligned}<br>Rounding to 3 significant figures gives $9.21$ hours.",
                        "To find the rate of change of concentration, differentiate $C$ with respect to $t$ using the chain rule:<br>\\begin{aligned}\\dfrac{\\text{d}C}{\\text{d}t} &= 50\\left(-0.25\\right)e^{-0.25t} \\cr&= -12.5e^{-0.25t}\\end{aligned}",
                        "Evaluate this derivative at the instant when $t = 4$ hours:<br>\\begin{aligned}\\dfrac{\\text{d}C}{\\text{d}t} &= -12.5e^{-0.25\\left(4\\right)} \\cr&= -12.5e^{-1}\\end{aligned}<br>$$\\dfrac{\\text{d}C}{\\text{d}t} \\approx -12.5\\left(0.367879\\right) \\approx -4.5985\\text{ mg/L per hour}$$",
                        "The magnitude represents the absolute value (the positive rate of decrease):<br>$$\\text{Magnitude} = |-4.5985| \\approx 4.60\\text{ mg/L per hour}$$",
                "Final Answer: $$9.21 \\text{ hours}, \\quad 4.60\\text{ mg/L per hour}$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$9.21 \\text{ hours}, \\quad -4.60\\text{ mg/L per hour}$$",
                                "feedback": "The question specifically asks for the magnitude of the rate of change. Magnitude is always a positive scalar quantity, so you must write your final answer as $4.60$, not $-4.60$."
                        },
                        {
                                "ans": "$$4.00 \\text{ hours}, \\quad 4.60\\text{ mg/L per hour}$$",
                                "feedback": "Check your percentage calculation. It looks like you solved for when the concentration falls by $10\\%$ (leaving $90\\%$ remaining), instead of when it has decreased to $10\\%$ of its initial value."
                        },
                        {
                                "ans": "$$9.21 \\text{ hours}, \\quad 1.15\\text{ mg/L per hour}$$",
                                "feedback": "You may have made an error when differentiating. The derivative of $50e^{-0.25t}$ is $-12.5e^{-0.25t}$, not $-12.5e^{-0.5t}$ or similar."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Magnitude of Change",
                        "content": "In calculus modelling, be careful to distinguish between the rate of change (which can be negative to indicate a decrease) and its magnitude (which represents the absolute speed of that change and is always positive)."
                }
        },
        {
                "id": "004200",
                "board": "OCR",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Differentiation",
                        "Exponential and Logarithmic Functions and Graphs",
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "The populations of two different insects, $X$ and $Y$, in a controlled greenhouse are modelled by the equations:<br>$$X(t) = 300e^{0.06t} \\quad \\text{and} \\quad Y(t) = 100e^{0.10t}$$<br>where $t$ is the number of days after monitoring begins.<br><br>1. Differentiate both equations to find expressions for the rates of increase, $\\dfrac{\\text{d}X}{\\text{d}t}$ and $\\dfrac{\\text{d}Y}{\\text{d}t}$.<br>2. Find the exact time $t$ at which both populations are increasing at the same rate. Give your answer in the form $t = a\\ln b$, where $a$ is an integer and $b$ is a rational number.",
                "steps": [
                        "Differentiate $X(t)$ and $Y(t)$ with respect to $t$ using the chain rule:<br>\\begin{aligned}\\dfrac{\\text{d}X}{\\text{d}t} &= 300\\left(0.06\\right)e^{0.06t} \\cr&= 18e^{0.06t}\\end{aligned}<br>\\begin{aligned}\\dfrac{\\text{d}Y}{\\text{d}t} &= 100\\left(0.10\\right)e^{0.10t} \\cr&= 10e^{0.10t}\\end{aligned}",
                        "Set these two rates of increase equal to each other to find when they are equal:<br>$$18e^{0.06t} = 10e^{0.10t}$$",
                        "Isolate the exponential terms on one side of the equation:<br>\\begin{aligned}\\dfrac{18}{10} &= \\dfrac{e^{0.10t}}{e^{0.06t}} \\cr\\dfrac{9}{5} &= e^{0.10t - 0.06t}\\end{aligned}<br>$$e^{0.04t} = \\dfrac{9}{5}$$",
                        "Take the natural logarithm of both sides to solve for $t$:<br>$$0.04t = \\ln\\left(\\dfrac{9}{5}\\right)$$",
                        "Express the decimal coefficient $0.04$ as a fraction, $0.04 = \\dfrac{1}{25}$:<br>\\begin{aligned}\\dfrac{1}{25}t &= \\ln\\left(\\dfrac{9}{5}\\right) \\crt &= 25\\ln\\left(\\dfrac{9}{5}\\right)\\end{aligned}<br>This is exactly in the required form $a\\ln b$, where $a = 25$ is an integer and $b = \\dfrac{9}{5}$ is a rational number.",
                "Final Answer: \\begin{aligned}\\dfrac{\\text{d}X}{\\text{d}t} &= 18e^{0.06t}, \\, \\dfrac{\\text{d}Y}{\\text{d}t} \\cr&= 10e^{0.10t}, \\quad t \\cr&= 25\\ln\\left(\\dfrac{9}{5}\\right)\\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\dfrac{\\text{d}X}{\\text{d}t} = 18e^{0.06t}, \\, \\dfrac{\\text{d}Y}{\\text{d}t} = 10e^{0.10t}, \\quad t = 10\\ln\\left(\\dfrac{9}{5}\\right)$$",
                                "feedback": "Check your final coefficient. The equation is $0.04t = \\ln\\left(\\dfrac{9}{5}\\right)$. Since $0.04 = \\dfrac{1}{25}$, multiplying both sides by $25$ gives $t = 25\\ln\\left(\\dfrac{9}{5}\\right)$, not $10\\ln\\left(\\dfrac{9}{5}\\right)$."
                        },
                        {
                                "ans": "$$\\dfrac{\\text{d}X}{\\text{d}t} = 18e^{0.06t}, \\, \\dfrac{\\text{d}Y}{\\text{d}t} = 10e^{0.10t}, \\quad t = 25\\ln\\left(1.8\\right)$$",
                                "feedback": "Your numerical answer is mathematically correct, but the question specifically asks for $b$ to be a 'rational number' (which is defined as a ratio of integers). You must write $1.8$ as the fraction $\\dfrac{9}{5}$ to satisfy the required exact form."
                        },
                        {
                                "ans": "$$\\dfrac{\\text{d}X}{\\text{d}t} = 300e^{0.06t}, \\, \\dfrac{\\text{d}Y}{\\text{d}t} = 100e^{0.10t}, \\quad t = 25\\ln\\left(3\\right)$$",
                                "feedback": "You may have forgotten to differentiate before setting the equations equal. The question asks when the populations are 'increasing at the same rate', which refers to their derivatives, not their raw populations."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Rational Notation",
                        "content": "In GCE exams, if a final exact form requires a 'rational number', always represent decimals as fully simplified fractions (such as $\\dfrac{9}{5}$ instead of $1.8$) to satisfy the strict definition of rational numbers."
                }
        }
];
