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
    }

];