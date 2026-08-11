window.ALEVEL_QUESTIONS = [
        {
                "id": "004451",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Numerical Methods",
                "subtopic": [
                        "Numerical Methods"
                ],
                "img": false,
                "question": "The equation $3x^3 + x^2 - 2 = 0$ has exactly one real root.<br><br><strong>(a)</strong> Show that, for this equation, the Newton-Raphson formula can be written as:<br>$$x_{n+1} = \\dfrac{ 6x_n^3 + x_n^2 + 2 }{ 9x_n^2 + 2x_n }$$ [3]<br><br><strong>(b)</strong> Using the formula given in part (a) with $x_1 = 1$, find the values of $x_2$ and $x_3$, giving your answers to 3 decimal places. [2]<br><br><strong>(c)</strong> Explain why, for this equation, the Newton-Raphson method cannot be used with $x_1 = 0$. [1]",
                "steps": [
                        "<strong>Step 1: Define the function and find its derivative for part (a)</strong><br>Let $f(x) = 3x^3 + x^2 - 2$. To apply the Newton-Raphson method, first differentiate $f(x)$ with respect to $x$:<br>\\begin{aligned} f'(x) &= \\dfrac{ \\mathrm{d} }{ \\mathrm{d}x } ( 3x^3 + x^2 - 2 ) \\cr &= 9x^2 + 2x \\cr \\end{aligned}",
                        "<strong>Step 2: Set up the Newton-Raphson recurrence relation</strong><br>The general Newton-Raphson formula is $x_{n+1} = x_n - \\dfrac{ f(x_n) }{ f'(x_n) }$. Substitute our expressions for $f(x_n)$ and $f'(x_n)$:<br>\\begin{aligned} x_{n+1} &= x_n - \\dfrac{ 3x_n^3 + x_n^2 - 2 }{ 9x_n^2 + 2x_n } \\cr \\end{aligned}",
                        "<strong>Step 3: Combine into a single algebraic fraction to complete part (a)</strong><br>Express the right-hand side over a common denominator:<br>\\begin{aligned} x_{n+1} &= \\dfrac{ x_n( 9x_n^2 + 2x_n ) - ( 3x_n^3 + x_n^2 - 2 ) }{ 9x_n^2 + 2x_n } \\cr &= \\dfrac{ 9x_n^3 + 2x_n^2 - 3x_n^3 - x_n^2 + 2 }{ 9x_n^2 + 2x_n } \\cr &= \\dfrac{ 6x_n^3 + x_n^2 + 2 }{ 9x_n^2 + 2x_n } \\cr \\end{aligned}<br>This matches the required formula.",
                        "<strong>Step 4: Perform the iterations for part (b)</strong><br>Substitute $x_1 = 1$ into the formula to calculate $x_2$:<br>\\begin{aligned} x_2 &= \\dfrac{ 6( 1 )^3 + 1^2 + 2 }{ 9( 1 )^2 + 2( 1 ) } \\cr &= \\dfrac{ 9 }{ 11 } \\cr &\\approx 0.818 \\cr \\end{aligned}<br>Now, substitute $x_2 = \\dfrac{ 9 }{ 11 }$ back into the formula to find $x_3$:<br>\\begin{aligned} x_3 &= \\dfrac{ 6\\left( \\dfrac{ 9 }{ 11 } \\right)^3 + \\left( \\dfrac{ 9 }{ 11 } \\right)^2 + 2 }{ 9\\left( \\dfrac{ 9 }{ 11 } \\right)^2 + 2\\left( \\dfrac{ 9 }{ 11 } \\right) } \\cr &= \\dfrac{ 7927 }{ 10197 } \\cr &\\approx 0.777 \\cr \\end{aligned}",
                        "<strong>Step 5: Formulate the explanation for part (c)</strong><br>Evaluate the derivative $f'(x)$ at our starting value $x_1 = 0$:<br>\\begin{aligned} f'(0) &= 9( 0 )^2 + 2( 0 ) \\cr &= 0 \\cr \\end{aligned}<br>The Newton-Raphson formula involves dividing by the value of the derivative, $f'(x_n)$. Because $f'(0) = 0$, starting with $x_1 = 0$ results in division by zero, which is undefined. Geometrically, this means the tangent to the curve at $x = 0$ is completely horizontal and does not intersect the $x$-axis to provide a next approximation."
                ],
                "pi_options": [
                        {
                                "ans": "$$x_2 \\approx 0.818, \\quad x_3 \\approx 0.777, \\quad \\text{Method fails because the curve is not defined at } x = 0$$",
                                "feedback": "You may have correctly calculated the values, but your explanation in part (c) is incorrect. The original cubic polynomial $f(x) = 3x^3 + x^2 - 2$ is fully defined at $x = 0$ (yielding $f(0) = -2$). The method fails because the derivative $f'(0) = 0$, leading to an undefined division by zero."
                        },
                        {
                                "ans": "$$x_2 \\approx 0.818, \\quad x_3 \\approx 0.777, \\quad \\text{Method fails because } x_1 = 0 \\text{ is too far from the root}$$",
                                "feedback": "Your numerical approximations are correct, but your explanation in part (c) is physically incorrect. While Newton-Raphson can fail or diverge if a starting value is too far from the root, a starting value of $x_1 = 0$ fails immediately and strictly because the derivative $f'(0) = 0$, causing division by zero."
                        },
                        {
                                "ans": "$$x_2 \\approx 0.818, \\quad x_3 \\approx 0.818, \\quad \\text{Method fails because the derivative is zero}$$",
                                "feedback": "You may have made an error when calculating $x_3$, perhaps by using $x_2$ directly or making a rounding slip. Additionally, check that you worked with the exact fraction $9/11$ on your calculator to maintain numerical accuracy before rounding to 3 decimal places."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Identifying Singular Points",
                        "content": "Always remember that the Newton-Raphson method strictly breaks down at any point $x$ where $f'(x) = 0$. Geometrically, this corresponds to stationary points (local maximums, minimums, or stationary points of inflection) where the tangent is horizontal. Since a horizontal tangent has a gradient of 0, it runs parallel to the $x$-axis and can never cross it to find a new approximation."
                }
        },
        {
                "id": "004452",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Numerical Methods",
                "subtopic": [
                        "Numerical Methods",
                        "Trigonometry"
                ],
                "img": false,
                "question": "The equation $x - \\cos x = 0$ has exactly one real root in the interval $[0, \\pi]$.<br><br><strong>(a)</strong> Show that, for this equation, the Newton-Raphson formula can be written as:<br>$$x_{n+1} = \\dfrac{ x_n \\sin x_n + \\cos x_n }{ 1 + \\sin x_n }$$ [3]<br><br><strong>(b)</strong> Using the formula given in part (a) with a starting value of $x_1 = 0$, find the values of $x_2$ and $x_3$, giving your answers to 3 decimal places (working in radians). [2]<br><br><strong>(c)</strong> Explain why, for this equation, the Newton-Raphson method cannot be used with a starting value of $x_1 = -\\dfrac{ \\pi }{ 2 }$. [1]",
                "steps": [
                        "<strong>Step 1: Define the function and find its derivative for part (a)</strong><br>Let $f(x) = x - \\cos x$. Differentiate $f(x)$ with respect to $x$:<br>\\begin{aligned} f'(x) &= \\dfrac{ \\mathrm{d} }{ \\mathrm{d}x } ( x - \\cos x ) \\cr &= 1 - ( -\\sin x ) \\cr &= 1 + \\sin x \\cr \\end{aligned}",
                        "<strong>Step 2: Set up the Newton-Raphson recurrence relation</strong><br>The general Newton-Raphson formula is $x_{n+1} = x_n - \\dfrac{ f(x_n) }{ f'(x_n) }$. Substitute our expressions for $f(x_n)$ and $f'(x_n)$:<br>\\begin{aligned} x_{n+1} &= x_n - \\dfrac{ x_n - \\cos x_n }{ 1 + \\sin x_n } \\cr \\end{aligned}",
                        "<strong>Step 3: Combine into a single algebraic fraction to complete part (a)</strong><br>Express the terms over a common denominator:<br>\\begin{aligned} x_{n+1} &= \\dfrac{ x_n( 1 + \\sin x_n ) - ( x_n - \\cos x_n ) }{ 1 + \\sin x_n } \\cr &= \\dfrac{ x_n + x_n \\sin x_n - x_n + \\cos x_n }{ 1 + \\sin x_n } \\cr &= \\dfrac{ x_n \\sin x_n + \\cos x_n }{ 1 + \\sin x_n } \\cr \\end{aligned}<br>This matches the required formula.",
                        "<strong>Step 4: Perform the iterations for part (b)</strong><br>Ensure your calculator is strictly in <strong>radian</strong> mode. Substitute $x_1 = 0$ into the formula to calculate $x_2$:<br>\\begin{aligned} x_2 &= \\dfrac{ 0 \\sin 0 + \\cos 0 }{ 1 + \\sin 0 } \\cr &= \\dfrac{ 0 + 1 }{ 1 + 0 } \\cr &= 1 \\cr \\end{aligned}<br>Now, substitute $x_2 = 1$ back into the formula to find $x_3$:<br>\\begin{aligned} x_3 &= \\dfrac{ 1 \\sin 1 + \\cos 1 }{ 1 + \\sin 1 } \\cr &\\approx \\dfrac{ ( 1 )( 0.84147 ) + 0.54030 }{ 1 + 0.84147 } \\cr &\\approx \\dfrac{ 1.38177 }{ 1.84147 } \\cr &\\approx 0.750 \\cr \\end{aligned}",
                        "<strong>Step 5: Formulate the explanation for part (c)</strong><br>Evaluate the derivative $f'(x) = 1 + \\sin x$ at our starting value $x_1 = -\\dfrac{ \\pi }{ 2 }$:<br>\\begin{aligned} f'\\left( -\\dfrac{ \\pi }{ 2 } \\right) &= 1 + \\sin\\left( -\\dfrac{ \\pi }{ 2 } \\right) \\cr &= 1 + ( -1 ) \\cr &= 0 \\cr \\end{aligned}<br>Because the derivative is $0$ at this starting point, the Newton-Raphson formula would require division by zero, which is mathematically undefined. Therefore, the method cannot be used."
                ],
                "pi_options": [
                        {
                                "ans": "$$x_2 = 1.000, \\quad x_3 \\approx 0.750, \\quad \\text{Method fails because } \\cos\\left(-\\dfrac{\\pi}{2}\\right) = 0$$",
                                "feedback": "You may have correctly calculated the values, but your explanation in part (c) is incorrect. The value of $\\cos\\left(-\\dfrac{\\pi}{2}\\right) = 0$ is perfectly fine and is just part of the function's numerator. The method breaks because the derivative $f'\\left(-\\dfrac{\\pi}{2}\\right) = 1 + \\sin\\left(-\\dfrac{\\pi}{2}\\right) = 0$, leading to division by zero."
                        },
                        {
                                "ans": "$$x_2 = 1.000, \\quad x_3 \\approx 0.999, \\quad \\text{Method fails because the derivative is zero}$$",
                                "feedback": "You may have worked in <strong>degree</strong> mode instead of <strong>radian</strong> mode when calculating $x_3$. For calculus and numerical methods involving trigonometric functions, always make sure your calculator is set to radians."
                        },
                        {
                                "ans": "$$x_2 = 1.000, \\quad x_3 \\approx 0.750, \\quad \\text{Method fails because the angle is negative}$$",
                                "feedback": "Your numerical approximations are correct, but your explanation is incorrect. The Newton-Raphson method can easily handle negative numbers. The failure is strictly caused by the derivative equaling zero at $x_1 = -\\dfrac{\\pi}{2}$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Radian Mode is Mandatory",
                        "content": "Whenever you are working with calculus or numerical methods (like Newton-Raphson or trapezium rules) that involve trigonometric functions, <strong>your calculator must be in radian mode</strong>. Differentiation of trigonometric functions is mathematically defined only in radians; using degrees will lead to completely incorrect values."
                }
        },
        {
                "id": "004453",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Numerical Methods",
                "subtopic": [
                        "Exponential and Logarithmic Functions and Graphs",
                        "Numerical Methods"
                ],
                "img": false,
                "question": "The equation $x^2 - \\ln x - 3 = 0$, where $x > 0$, has a real root in the interval $[1, 2]$.<br><br><strong>(a)</strong> Show that, for this equation, the Newton-Raphson formula can be written as:<br>$$x_{n+1} = \\dfrac{ x_n^3 + x_n \\ln x_n + 2x_n }{ 2x_n^2 - 1 }$$ [3]<br><br><strong>(b)</strong> Using the formula given in part (a) with a starting value of $x_1 = 2$, find the values of $x_2$ and $x_3$, giving your answers to three significant figures. [2]<br><br><strong>(c)</strong> Explain why, for this equation, the Newton-Raphson method cannot be used with a starting value of $x_1 = \\dfrac{ 1 }{ \\sqrt{ 2 } }$. [1]",
                "steps": [
                        "<strong>Step 1: Define the function and find its derivative for part (a)</strong><br>Let $f(x) = x^2 - \\ln x - 3$. Differentiate $f(x)$ with respect to $x$ using the power and logarithmic rules:<br>\\begin{aligned} f'(x) &= \\dfrac{ \\mathrm{d} }{ \\mathrm{d}x } ( x^2 - \\ln x - 3 ) \\cr &= 2x - \\dfrac{ 1 }{ x } \\cr \\end{aligned}",
                        "<strong>Step 2: Set up the Newton-Raphson recurrence relation</strong><br>The general Newton-Raphson formula is $x_{n+1} = x_n - \\dfrac{ f(x_n) }{ f'(x_n) }$. Substitute our expressions:<br>\\begin{aligned} x_{n+1} &= x_n - \\dfrac{ x_n^2 - \\ln x_n - 3 }{ 2x_n - \\dfrac{ 1 }{ x_n } } \\cr \\end{aligned}",
                        "<strong>Step 3: Combine into a single algebraic fraction to complete part (a)</strong><br>Express the terms over a common denominator in the fraction:<br>\\begin{aligned} x_{n+1} &= x_n - \\dfrac{ x_n^2 - \\ln x_n - 3 }{ \\dfrac{ 2x_n^2 - 1 }{ x_n } } \\cr &= x_n - \\dfrac{ x_n( x_n^2 - \\ln x_n - 3 ) }{ 2x_n^2 - 1 } \\cr &= \\dfrac{ x_n( 2x_n^2 - 1 ) - ( x_n^3 - x_n \\ln x_n - 3x_n ) }{ 2x_n^2 - 1 } \\cr &= \\dfrac{ 2x_n^3 - x_n - x_n^3 + x_n \\ln x_n + 3x_n }{ 2x_n^2 - 1 } \\cr &= \\dfrac{ x_n^3 + x_n \\ln x_n + 2x_n }{ 2x_n^2 - 1 } \\cr \\end{aligned}<br>This matches the required formula.",
                        "<strong>Step 4: Perform the iterations for part (b)</strong><br>Substitute $x_1 = 2$ into the formula to calculate $x_2$:<br>\\begin{aligned} x_2 &= \\dfrac{ 2^3 + 2 \\ln 2 + 2( 2 ) }{ 2( 2 )^2 - 1 } \\cr &= \\dfrac{ 8 + 2 \\ln 2 + 4 }{ 7 } \\cr &= \\dfrac{ 12 + 2 \\ln 2 }{ 7 } \\cr &\\approx 1.912 \\cr &\\approx 1.91 \\text{ (to 3 s.f.)} \\cr \\end{aligned}<br>Now, substitute $x_2 \\approx 1.912$ back into the formula to find $x_3$:<br>\\begin{aligned} x_3 &= \\dfrac{ ( 1.912 )^3 + 1.912 \\ln( 1.912 ) + 2( 1.912 ) }{ 2( 1.912 )^2 - 1 } \\cr &\\approx \\dfrac{ 6.990 + 1.239 + 3.824 }{ 6.311 } \\cr &\\approx 1.91 \\text{ (to 3 s.f.)} \\cr \\end{aligned}",
                        "<strong>Step 5: Formulate the explanation for part (c)</strong><br>Evaluate the derivative $f'(x) = 2x - \\dfrac{ 1 }{ x }$ at our starting value $x_1 = \\dfrac{ 1 }{ \\sqrt{ 2 } }$:<br>\\begin{aligned} f'\\left( \\dfrac{ 1 }{ \\sqrt{ 2 } } \\right) &= 2\\left( \\dfrac{ 1 }{ \\sqrt{ 2 } } \\right) - \\dfrac{ 1 }{ \\left( \\dfrac{ 1 }{ \\sqrt{ 2 } } \\right) } \\cr &= \\sqrt{ 2 } - \\sqrt{ 2 } \\cr &= 0 \\cr \\end{aligned}<br>Because the derivative $f'(x_n)$ is $0$, the Newton-Raphson formula is undefined due to division by zero. Thus, the method cannot be used."
                ],
                "pi_options": [
                        {
                                "ans": "$$x_2 \\approx 1.91, \\quad x_3 \\approx 1.91, \\quad \\text{Method fails because } \\ln\\left(\\dfrac{1}{\\sqrt{2}}\\right) \\text{ is negative}$$",
                                "feedback": "You may have correctly calculated the values, but your explanation in part (c) is incorrect. While $\\ln\\left(\\dfrac{1}{\\sqrt{2}}\\right) \\approx -0.347$ is indeed negative, logarithms can be negative (they are only undefined for non-positive inputs). The method fails because the derivative $f'\\left(\\dfrac{1}{\\sqrt{2}}\\right) = 0$, causing division by zero."
                        },
                        {
                                "ans": "$$x_2 \\approx 1.91, \\quad x_3 \\approx 1.91, \\quad \\text{Method fails because the starting value is a fraction}$$",
                                "feedback": "Your numerical approximations are correct, but your explanation is incorrect. The Newton-Raphson method can easily handle fractional values. The failure is strictly caused by the derivative equaling zero at $x_1 = \\dfrac{1}{\\sqrt{2}}$."
                        },
                        {
                                "ans": "$$x_2 \\approx 1.71, \\quad x_3 \\approx 1.71, \\quad \\text{Method fails because the derivative is zero}$$",
                                "feedback": "You may have made an error when simplifying your numerator calculation in Step 4, perhaps by omitting the $2x_n$ term, leading to incorrect numerical approximations."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Combining Fractions in Recurrence Formulas",
                        "content": "When expanding and simplifying a Newton-Raphson formula that has fractions within fractions (like $\\frac{1}{x}$), always simplify the derivative denominator first. Combining $2x - \\frac{1}{x} = \\frac{2x^2-1}{x}$ allows you to flip the $x$ to the numerator, which simplifies the algebra and avoids nasty multi-tier fraction errors."
                }
        },
        {
                "id": "004454",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Numerical Methods",
                "subtopic": [
                        "Exponential and Logarithmic Functions and Graphs",
                        "Numerical Methods"
                ],
                "img": false,
                "question": "The equation $\\mathrm{e}^x + 3x - 4 = 0$ has exactly one real root.<br><br><strong>(a)</strong> Show that, for this equation, the Newton-Raphson formula can be written as:<br>$$x_{n+1} = \\dfrac{ ( x_n - 1 )\\mathrm{e}^{x_n} + 4 }{ \\mathrm{e}^{x_n} + 3 }$$ [3]<br><br><strong>(b)</strong> Using the formula given in part (a) with a starting value of $x_1 = 0$, find the values of $x_2$ and $x_3$, giving your answers to three significant figures. [2]<br><br><strong>(c)</strong> Explain whether or not the Newton-Raphson method can fail due to division by zero for any real starting value of $x_1$. [1]",
                "steps": [
                        "<strong>Step 1: Define the function and find its derivative for part (a)</strong><br>Let $f(x) = \\mathrm{e}^x + 3x - 4$. Differentiate $f(x)$ with respect to $x$:<br>\\begin{aligned} f'(x) &= \\dfrac{ \\mathrm{d} }{ \\mathrm{d}x } ( \\mathrm{e}^x + 3x - 4 ) \\cr &= \\mathrm{e}^x + 3 \\cr \\end{aligned}",
                        "<strong>Step 2: Set up the Newton-Raphson recurrence relation</strong><br>The general Newton-Raphson formula is $x_{n+1} = x_n - \\dfrac{ f(x_n) }{ f'(x_n) }$. Substitute our expressions:<br>\\begin{aligned} x_{n+1} &= x_n - \\dfrac{ \\mathrm{e}^{x_n} + 3x_n - 4 }{ \\mathrm{e}^{x_n} + 3 } \\cr \\end{aligned}",
                        "<strong>Step 3: Combine into a single algebraic fraction to complete part (a)</strong><br>Express the terms over a common denominator:<br>\\begin{aligned} x_{n+1} &= \\dfrac{ x_n( \\mathrm{e}^{x_n} + 3 ) - ( \\mathrm{e}^{x_n} + 3x_n - 4 ) }{ \\mathrm{e}^{x_n} + 3 } \\cr &= \\dfrac{ x_n \\mathrm{e}^{x_n} + 3x_n - \\mathrm{e}^{x_n} - 3x_n + 4 }{ \\mathrm{e}^{x_n} + 3 } \\cr &= \\dfrac{ x_n \\mathrm{e}^{x_n} - \\mathrm{e}^{x_n} + 4 }{ \\mathrm{e}^{x_n} + 3 } \\cr &= \\dfrac{ ( x_n - 1 )\\mathrm{e}^{x_n} + 4 }{ \\mathrm{e}^{x_n} + 3 } \\cr \\end{aligned}<br>This matches the required formula.",
                        "<strong>Step 4: Perform the iterations for part (b)</strong><br>Substitute $x_1 = 0$ into the formula to calculate $x_2$:<br>\\begin{aligned} x_2 &= \\dfrac{ ( 0 - 1 )\\mathrm{e}^0 + 4 }{ \\mathrm{e}^0 + 3 } \\cr &= \\dfrac{ ( -1 )( 1 ) + 4 }{ 1 + 3 } \\cr &= \\dfrac{ 3 }{ 4 } \\cr &= 0.750 \\quad \\text{(to 3 s.f.)} \\cr \\end{aligned}<br>Now, substitute $x_2 = 0.75$ back into the formula to find $x_3$:<br>\\begin{aligned} x_3 &= \\dfrac{ ( 0.75 - 1 )\\mathrm{e}^{0.75} + 4 }{ \\mathrm{e}^{0.75} + 3 } \\cr &\\approx \\dfrac{ ( -0.25 )( 2.1170 ) + 4 }{ 2.1170 + 3 } \\cr &\\approx \\dfrac{ -0.52925 + 4 }{ 5.1170 } \\cr &\\approx \\dfrac{ 3.47075 }{ 5.1170 } \\cr &\\approx 0.678 \\quad \\text{(to 3 s.f.)} \\cr \\end{aligned}",
                        "<strong>Step 5: Formulate the explanation for part (c)</strong><br>For the Newton-Raphson method to fail due to division by zero, the derivative $f'(x)$ must be equal to zero at some starting value $x_1$.<br>Our derivative is $f'(x) = \\mathrm{e}^x + 3$.<br>Since $\\mathrm{e}^x > 0$ for all real values of $x$, it follows that:<br>$$f'(x) \\ge 3 > 0 \\quad \\text{for all } x \\in \\mathbb{R}$$<br>Since the derivative is strictly positive and can never be zero, the Newton-Raphson method <strong>cannot</strong> fail due to division by zero for any real starting value."
                ],
                "pi_options": [
                        {
                                "ans": "$$x_2 = 0.750, \\quad x_3 \\approx 0.678, \\quad \\text{Method can fail because } \\mathrm{e}^x + 3 = 0 \\implies x = \\ln(-3)$$",
                                "feedback": "You may have correctly calculated the values, but your algebraic logic in part (c) is incorrect. The equation $\\mathrm{e}^x = -3$ has no real solutions because $\\mathrm{e}^x$ is strictly positive for all real $x$. Since $\\ln(-3)$ is undefined in the real number system, the derivative can never be zero."
                        },
                        {
                                "ans": "$$x_2 = 0.750, \\quad x_3 \\approx 0.678, \\quad \\text{Method can fail if you start with } x_1 = -4$$",
                                "feedback": "Your numerical approximations are correct, but your assertion is incorrect. Starting with $x_1 = -4$ is perfectly valid; the derivative $f'(-4) = \\mathrm{e}^{-4} + 3 \\approx 3.018 \\neq 0$, so no division by zero occurs."
                        },
                        {
                                "ans": "$$x_2 = 0.500, \\quad x_3 \\approx 0.450, \\quad \\text{Method cannot fail due to division by zero}$$",
                                "feedback": "Your explanation in part (c) is correct, but you made an arithmetic slip in Step 4. Check that you calculated $\\mathrm{e}^0 = 1$ when evaluating $x_2$, yielding $\\dfrac{3}{4} = 0.75$ instead of $0.5$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Strictly Positive Derivatives",
                        "content": "Exponential functions of the form $f(x) = \\mathrm{e}^x + c$ where $c > 0$ are strictly increasing and have no stationary points because their derivative $\\mathrm{e}^x$ is strictly positive. Consequently, the Newton-Raphson method is exceptionally stable on these functions because division by zero is mathematically impossible."
                }
        },
        {
                "id": "004455",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Numerical Methods",
                "subtopic": [
                        "Numerical Methods"
                ],
                "img": false,
                "question": "The equation $x^3 - 3x - 1 = 0$ has a real root in the interval $[1.5, 2]$.<br><br><strong>(a)</strong> Show that, for this equation, the Newton-Raphson formula can be written as:<br>$$x_{n+1} = \\dfrac{ 2x_n^3 + 1 }{ 3x_n^2 - 3 }$$ [3]<br><br><strong>(b)</strong> Using the formula given in part (a) with a starting value of $x_1 = 2$, find the values of $x_2$ and $x_3$, giving your answers to three significant figures. [2]<br><br><strong>(c)</strong> Explain why, for this equation, the Newton-Raphson method cannot be used with a starting value of $x_1 = 1$. [1]",
                "steps": [
                        "<strong>Step 1: Define the function and find its derivative for part (a)</strong><br>Let $f(x) = x^3 - 3x - 1$. Differentiate $f(x)$ with respect to $x$:<br>\\begin{aligned} f'(x) &= \\dfrac{ \\mathrm{d} }{ \\mathrm{d}x } ( x^3 - 3x - 1 ) \\cr &= 3x^2 - 3 \\cr \\end{aligned}",
                        "<strong>Step 2: Set up the Newton-Raphson recurrence relation</strong><br>The general Newton-Raphson formula is $x_{n+1} = x_n - \\dfrac{ f(x_n) }{ f'(x_n) }$. Substitute our expressions:<br>\\begin{aligned} x_{n+1} &= x_n - \\dfrac{ x_n^3 - 3x_n - 1 }{ 3x_n^2 - 3 } \\cr \\end{aligned}",
                        "<strong>Step 3: Combine into a single algebraic fraction to complete part (a)</strong><br>Express the terms over a common denominator:<br>\\begin{aligned} x_{n+1} &= \\dfrac{ x_n( 3x_n^2 - 3 ) - ( x_n^3 - 3x_n - 1 ) }{ 3x_n^2 - 3 } \\cr &= \\dfrac{ 3x_n^3 - 3x_n - x_n^3 + 3x_n + 1 }{ 3x_n^2 - 3 } \\cr &= \\dfrac{ 2x_n^3 + 1 }{ 3x_n^2 - 3 } \\cr \\end{aligned}<br>This matches the required formula.",
                        "<strong>Step 4: Perform the iterations for part (b)</strong><br>Substitute $x_1 = 2$ into the formula to calculate $x_2$:<br>\\begin{aligned} x_2 &= \\dfrac{ 2( 2 )^3 + 1 }{ 3( 2 )^2 - 3 } \\cr &= \\dfrac{ 16 + 1 }{ 12 - 3 } \\cr &= \\dfrac{ 17 }{ 9 } \\cr &\\approx 1.89 \\quad \\text{(to 3 s.f.)} \\cr \\end{aligned}<br>Now, substitute $x_2 = \\dfrac{ 17 }{ 9 }$ back into the formula to find $x_3$:<br>\\begin{aligned} x_3 &= \\dfrac{ 2\\left( \\dfrac{ 17 }{ 9 } \\right)^3 + 1 }{ 3\\left( \\dfrac{ 17 }{ 9 } \\right)^2 - 3 } \\cr &= \\dfrac{ 10555 }{ 5616 } \\cr &\\approx 1.88 \\quad \\text{(to 3 s.f.)} \\cr \\end{aligned}",
                        "<strong>Step 5: Formulate the explanation for part (c)</strong><br>Evaluate the derivative $f'(x) = 3x^2 - 3$ at our starting value $x_1 = 1$:<br>\\begin{aligned} f'(1) &= 3( 1 )^2 - 3 \\cr &= 0 \\cr \\end{aligned}<br>The Newton-Raphson formula involves dividing by the value of the derivative, $f'(x_n)$. Because $f'(1) = 0$, starting with $x_1 = 1$ results in division by zero, which is undefined. Geometrically, this means the tangent to the curve at $x = 1$ is horizontal and does not intersect the $x$-axis to provide a next approximation."
                ],
                "pi_options": [
                        {
                                "ans": "$$x_2 \\approx 1.89, \\quad x_3 \\approx 1.88, \\quad \\text{Method fails because } 1 \\text{ is too close to the root}$$",
                                "feedback": "You may have correctly calculated the values, but your explanation in part (c) is incorrect. The proximity of a starting value to the root does not cause the method to break down. The failure is strictly caused by the derivative equaling zero ($f'(1) = 0$), causing division by zero."
                        },
                        {
                                "ans": "$$x_2 \\approx 1.89, \\quad x_3 \\approx 1.88, \\quad \\text{Method fails because the curve has an asymptote at } x = 1$$",
                                "feedback": "Your numerical approximations are correct, but your explanation is incorrect. The polynomial $f(x) = x^3 - 3x - 1$ is continuous for all real $x$ and has no asymptotes. The method fails because $f'(1) = 0$, resulting in an undefined division by zero."
                        },
                        {
                                "ans": "$$x_2 \\approx 1.89, \\quad x_3 \\approx 1.89, \\quad \\text{Method fails because the derivative is zero}$$",
                                "feedback": "Your explanation in part (c) is correct, but you made an error when calculating $x_3$, perhaps by using $x_2$ directly or making a rounding slip. Check that you worked with the exact fraction $17/9$ on your calculator to maintain numerical accuracy before rounding to 3 significant figures."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Identifying Singular Points",
                        "content": "The Newton-Raphson method strictly breaks down at any point $x$ where $f'(x) = 0$. Geometrically, this corresponds to stationary points (local maximums, minimums, or stationary points of inflection) where the tangent is horizontal. Since a horizontal tangent has a gradient of 0, it runs parallel to the $x$-axis and can never cross it to find a new approximation."
                }
        },
        {
                "id": "004456",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods",
                        "Proof",
                        "Trigonometry"
                ],
                "img": false,
                "question": "$f(x) = -2x^3 + 8x^2 - 9x + 9, \\quad x \\in \\mathbb{R}$<br><br><strong>(a) (i)</strong> Calculate $f(3)$.<br><strong>(ii)</strong> Write $f(x)$ as a product of two algebraic factors.<br><br>Using the answer to <strong>(a)(ii)</strong>:<br><strong>(b)</strong> Prove that there are exactly two real solutions to the equation $-2y^6 + 8y^4 - 9y^2 + 9 = 0$.<br><br><strong>(c)</strong> Deduce the number of real solutions, for $5\\pi \\le \\theta < 9\\pi$, to the equation $2\\tan^3\\theta - 8\\tan^2\\theta + 9\\tan\\theta - 9 = 0$.<br><br>State the real solutions to the equation in <strong>(b)</strong> and the number of solutions in <strong>(c)</strong>.",
                "steps": [
                        "<strong>Part (a)(i):</strong><br>Substitute $x = 3$ into the expression for $f(x)$:<br>\\begin{aligned} f(3) &= -2(3)^3 + 8(3)^2 - 9(3) + 9 \\cr &= -2(27) + 8(9) - 27 + 9 \\cr &= -54 + 72 - 27 + 9 \\cr &= 0 \\cr \\end{aligned}<br>Since $f(3) = 0$, $x = 3$ is a root, which means $(x - 3)$ is a linear factor of $f(x)$.",
                        "<strong>Part (a)(ii):</strong><br>Divide $-2x^3 + 8x^2 - 9x + 9$ by $(x - 3)$ using polynomial division or equating coefficients:<br>\\begin{aligned} -2x^3 + 8x^2 - 9x + 9 &= (x - 3)(-2x^2 + px + q) \\cr &= -2x^3 + (p + 6)x^2 + (q - 3p)x - 3q \\cr \\end{aligned}<br>Equating coefficients:<br>\\begin{aligned} p + 6 &= 8 \\implies p = 2 \\cr -3q &= 9 \\implies q = -3 \\cr \\end{aligned}<br>Thus, the factored expression is:<br>\\begin{aligned}\nf(x) &= (x - 3)(-2x^2 + 2x - 3) \\cr\n&= (3 - x)(2x^2 - 2x + 3)\n\\end{aligned}<br>We check the discriminant of the quadratic factor $2x^2 - 2x + 3$:<br>\\begin{aligned} \\Delta &= (-2)^2 - 4(2)(3) \\cr &= 4 - 24 \\cr &= -20 < 0 \\cr \\end{aligned}<br>Because the discriminant is negative, the quadratic factor has no real roots. Therefore, $x = 3$ is the unique real root of $f(x) = 0$.",
                        "<strong>Part (b):</strong><br>We want to find the real solutions to:<br>$$-2y^6 + 8y^4 - 9y^2 + 9 = 0$$<br>Let $x = y^2$. This transforms the equation into:<br>$$-2x^3 + 8x^2 - 9x + 9 = 0$$<br>Which is exactly $f(x) = 0$. Since we showed in part <strong>(a)(ii)</strong> that the only real root is $x = 3$, we have:<br>\\begin{aligned}\ny^2 &= 3 \\cr\ny &= \\pm\\sqrt{ 3 }\n\\end{aligned}<br>The other factor yields $-2(y^2)^2 + 2(y^2) - 3 = 0$, which has no real solutions because its discriminant is negative. Thus, there are exactly two real solutions:<br>$$y = \\pm\\sqrt{ 3 }$$",
                        "<strong>Part (c):</strong><br>The equation is:<br>$$2\\tan^3\\theta - 8\\tan^2\\theta + 9\\tan\\theta - 9 = 0$$<br>Multiplying the entire equation by $-1$, we get:<br>$$-2\\tan^3\\theta + 8\\tan^2\\theta - 9\\tan\\theta + 9 = 0$$<br>Let $x = \\tan\\theta$. This equation becomes $f(x) = 0$, which has only one real root, $x = 3$. Therefore:<br>$$\\tan\\theta = 3$$<br>We need to find the number of solutions in the interval $5\\pi \\le \\theta < 9\\pi$.<br>The width of the interval is $9\\pi - 5\\pi = 4\\pi$. Since the tangent function $\\tan\\theta$ has a period of $\\pi$, it completes exactly $4$ full cycles over this interval.<br>In each period, the equation $\\tan\\theta = 3$ has exactly one unique solution. Thus, there are exactly $4$ real solutions."
                ],
                "pi_options": [
                        {
                                "ans": "$$y = \\pm 3\\text{ and }8\\text{ solutions}$$",
                                "feedback": "This error occurs if you mistakenly solve $y^2 = 9$ (perhaps by misidentifying the root of $f(x) = 0$ as $9$ instead of $3$) and double the number of trig solutions by assuming a period of $\\frac{\\pi}{2}$ instead of $\\pi$ for $\\tan\\theta$."
                        },
                        {
                                "ans": "$$y = \\sqrt{ 3 }\\text{ and }2\\text{ solutions}$$",
                                "feedback": "This mistake arises from forgetting that $y^2 = 3$ yields two real solutions ($y = \\pm\\sqrt{3}$) rather than only the positive square root, and incorrectly assuming the interval contains only two periods of the tangent function."
                        },
                        {
                                "ans": "$$y = \\pm\\sqrt{ 3 }\\text{ and }2\\text{ solutions}$$",
                                "feedback": "This occurs if you correctly identify the roots of $y^2 = 3$ but miscount the number of solutions to $\\tan\\theta = 3$ in the interval $5\\pi \\le \\theta < 9\\pi$. Since the width of this interval is $4\\pi$ and the period of $\\tan\\theta$ is $\\pi$, there must be exactly 4 real solutions."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "Substitution Boundaries",
                        "content": "When making algebraic substitutions like $x = y^2$ or $x = e^y$, always check the domain restrictions of the new variable. For example, $y^2 \\ge 0$ and $e^y > 0$ mean that any negative roots of the original cubic $f(x) = 0$ will not yield real values for $y$."
                }
        },
        {
                "id": "004457",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods",
                        "Proof",
                        "Trigonometry"
                ],
                "img": false,
                "question": "$f(x) = 2x^3 + x^2 + x - 4, \\quad x \\in \\mathbb{R}$<br><br><strong>(a) (i)</strong> Calculate $f(1)$.<br><strong>(ii)</strong> Write $f(x)$ as a product of two algebraic factors.<br><br>Using the answer to <strong>(a)(ii)</strong>:<br><strong>(b)</strong> Prove that there are exactly two real solutions to the equation $2y^{12} + y^8 + y^4 - 4 = 0$.<br><br><strong>(c)</strong> Deduce the number of real solutions, for $0 \\le \\theta < 4\\pi$, to the equation $2\\sin^3\\theta + \\sin^2\\theta + \\sin\\theta - 4 = 0$.<br><br>State the real solutions to the equation in <strong>(b)</strong> and the number of solutions in <strong>(c)</strong>.",
                "steps": [
                        "<strong>Part (a)(i):</strong><br>Substitute $x = 1$ into the expression for $f(x)$:<br>\\begin{aligned} f(1) &= 2(1)^3 + (1)^2 + 1 - 4 \\cr &= 2 + 1 + 1 - 4 \\cr &= 0 \\cr \\end{aligned}<br>Since $f(1) = 0$, $x = 1$ is a root, meaning $(x - 1)$ is a linear factor of $f(x)$. ",
                        "<strong>Part (a)(ii):</strong><br>Divide $2x^3 + x^2 + x - 4$ by $(x - 1)$:<br>\\begin{aligned} 2x^3 + x^2 + x - 4 &= (x - 1)(2x^2 + 3x + 4) \\cr \\end{aligned}<br>We check the discriminant of the quadratic factor $2x^2 + 3x + 4$:<br>\\begin{aligned} \\Delta &= (3)^2 - 4(2)(4) \\cr &= 9 - 32 \\cr &= -23 < 0 \\cr \\end{aligned}<br>Since the discriminant is negative, the quadratic factor has no real roots. Thus, $x = 1$ is the unique real root of $f(x) = 0$.",
                        "<strong>Part (b):</strong><br>We solve:<br>$$2y^{12} + y^8 + y^4 - 4 = 0$$<br>Let $x = y^4$. The equation becomes:<br>$$2x^3 + x^2 + x - 4 = 0$$<br>This is exactly $f(x) = 0$. Since $x = 1$ is the unique real root, we have:<br>\\begin{aligned}\ny^4 &= 1 \\cr\ny^2 &= 1 \\cr\ny &= \\pm 1\n\\end{aligned}<br>The other branch $y^4 < 0$ has no real roots. Thus, there are exactly two real solutions: $y = \\pm 1$.",
                        "<strong>Part (c):</strong><br>The equation is:<br>$$2\\sin^3\\theta + \\sin^2\\theta + \\sin\\theta - 4 = 0$$<br>Let $x = \\sin\\theta$. This yields $f(x) = 0 \\implies \\sin\\theta = 1$.<br>We look for solutions in the interval $0 \\le \\theta < 4\\pi$, which represents two complete periods of the sine function.<br>The sine function equals $1$ exactly once per period (at the maximum point of each cycle):<br>\\begin{aligned}\n\\theta &= \\dfrac{ \\pi }{ 2 }, \\quad \\theta \\cr\n&= \\dfrac{ 5\\pi }{ 2 }\n\\end{aligned}<br>Thus, there are exactly $2$ real solutions."
                ],
                "pi_options": [
                        {
                                "ans": "$$y = 1\\text{ and }4\\text{ solutions}$$",
                                "feedback": "This error occurs if you forget that $y^4 = 1$ has two real solutions ($y = \\pm 1$) and also miscalculate the number of solutions to $\\sin\\theta = 1$ in the interval $[0, 4\\pi)$, which has only 2 peaks."
                        },
                        {
                                "ans": "$$y = \\pm 1\\text{ and }4\\text{ solutions}$$",
                                "feedback": "This mistake arises from correctly identifying the roots of $y^4 = 1$ but miscounting the number of real solutions to $\\sin\\theta = 1$ in the interval $0 \\le \\theta < 4\\pi$. Over two full cycles of the sine wave, the value $1$ is only reached at the peak of each cycle, giving exactly 2 solutions, not 4."
                        },
                        {
                                "ans": "$$y = \\pm 1\\text{ and }0\\text{ solutions}$$",
                                "feedback": "This occurs if you believe that $\\sin\\theta = 1$ has no real solutions, possibly by confusing it with a value outside the range $[-1, 1]$. Since $1$ is within the range of the sine function, solutions exist."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "Sine Wave Maxima Counting",
                        "content": "Unlike general values of $k$ where $\\sin\\theta = k$ has two solutions per cycle, the boundary values $k = \\pm 1$ only occur at the single peak or trough of each cycle. Therefore, $\\sin\\theta = 1$ yields exactly one solution per $2\\pi$ period."
                }
        },
        {
                "id": "004458",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods",
                        "Proof",
                        "Trigonometry"
                ],
                "img": false,
                "question": "$f(x) = x^3 + x^2 + x + 6, \\quad x \\in \\mathbb{R}$<br><br><strong>(a) (i)</strong> Calculate $f(-2)$.<br><strong>(ii)</strong> Write $f(x)$ as a product of two algebraic factors.<br><br>Using the answer to <strong>(a)(ii)</strong>:<br><strong>(b)</strong> Prove that there is exactly one real solution to the equation $y^9 + y^6 + y^3 + 6 = 0$.<br><br><strong>(c)</strong> Deduce the number of real solutions, for $0 \\le \\theta < 2\\pi$, to the equation $\\cos^3\\theta + \\cos^2\\theta + \\cos\\theta + 6 = 0$.<br><br>State the real solutions to the equation in <strong>(b)</strong> and the number of solutions in <strong>(c)</strong>.",
                "steps": [
                        "<strong>Part (a)(i):</strong><br>Substitute $x = -2$ into $f(x)$:<br>\\begin{aligned} f(-2) &= (-2)^3 + (-2)^2 + (-2) + 6 \\cr &= -8 + 4 - 2 + 6 \\cr &= 0 \\cr \\end{aligned}<br>Since $f(-2) = 0$, $x = -2$ is a root, meaning $(x + 2)$ is a linear factor of $f(x)$.",
                        "<strong>Part (a)(ii):</strong><br>Divide $x^3 + x^2 + x + 6$ by $(x + 2)$:<br>\\begin{aligned} x^3 + x^2 + x + 6 &= (x + 2)(x^2 - x + 3) \\cr \\end{aligned}<br>We check the discriminant of the quadratic factor $x^2 - x + 3$:<br>\\begin{aligned} \\Delta &= (-1)^2 - 4(1)(3) \\cr &= 1 - 12 \\cr &= -11 < 0 \\cr \\end{aligned}<br>Since the discriminant is negative, there are no real roots from this quadratic factor. Thus, $x = -2$ is the unique real root of $f(x) = 0$.",
                        "<strong>Part (b):</strong><br>We solve:<br>$$y^9 + y^6 + y^3 + 6 = 0$$<br>Let $x = y^3$. The equation becomes:<br>$$x^3 + x^2 + x + 6 = 0$$<br>This is $f(x) = 0$. Since $x = -2$ is the only real root, we have:<br>\\begin{aligned}\ny^3 &= -2 \\cr\ny &= -\\sqrt[3]{ 2 }\n\\end{aligned}<br>Unlike even powers, a real number has exactly one real cube root. Hence, there is exactly one real solution: $y = -\\sqrt[3]{ 2 }$.",
                        "<strong>Part (c):</strong><br>The equation is:<br>$$\\cos^3\\theta + \\cos^2\\theta + \\cos\\theta + 6 = 0$$<br>Let $x = \\cos\\theta$. This equation becomes $f(x) = 0$, which requires:<br>$$\\cos\\theta = -2$$<br>However, the cosine function has a strict range of $[-1, 1]$. Since $-2$ is outside this range, there are no real values of $\\theta$ that satisfy this equation. Thus, there are $0$ real solutions."
                ],
                "pi_options": [
                        {
                                "ans": "$$y = \\pm\\sqrt[3]{ 2 }\\text{ and }2\\text{ solutions}$$",
                                "feedback": "This error occurs if you assume a cubic root equation $y^3 = -2$ has both positive and negative real solutions (which is only true for even powers) and if you mistakenly find solutions to $\\cos\\theta = -2$."
                        },
                        {
                                "ans": "$$y = -\\sqrt[3]{ 2 }\\text{ and }1\\text{ solution}$$",
                                "feedback": "This mistake arises from assuming that the equation $\\cos\\theta = -2$ must have a real solution, overlooking the fact that $-2$ lies entirely outside the range $[-1, 1]$ of the cosine function."
                        },
                        {
                                "ans": "$$y = -2\\text{ and }0\\text{ solutions}$$",
                                "feedback": "This occurs if you find the root $x = -2$ but fail to apply the substitution $y^3 = x$, leaving the final answer as $y = -2$ instead of taking the cube root."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "Range Constraints in Trigonometry",
                        "content": "Always check whether algebraic solutions are physically possible when substituting transcendental functions like $\\cos\\theta$ or $\\sin\\theta$. Any intermediate root outside of $[-1, 1]$ is rejected immediately."
                }
        },
        {
                "id": "004459",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods",
                        "Proof",
                        "Trigonometry"
                ],
                "img": false,
                "question": "$f(x) = 2x^3 + 3x^2 + 2x - 2, \\quad x \\in \\mathbb{R}$<br><br><strong>(a) (i)</strong> Calculate $f(0.5)$.<br><strong>(ii)</strong> Write $f(x)$ as a product of two algebraic factors.<br><br>Using the answer to <strong>(a)(ii)</strong>:<br><strong>(b)</strong> Prove that there are exactly two real solutions to the equation $2y^6 + 3y^4 + 2y^2 - 2 = 0$.<br><br><strong>(c)</strong> Deduce the number of real solutions, for $0 \\le \\theta < 4\\pi$, to the equation $2\\cos^3\\theta + 3\\cos^2\\theta + 2\\cos\\theta - 2 = 0$.<br><br>State the real solutions to the equation in <strong>(b)</strong> and the number of solutions in <strong>(c)</strong>.",
                "steps": [
                        "<strong>Part (a)(i):</strong><br>Substitute $x = 0.5$ (or $x = \\dfrac{ 1 }{ 2 }$) into $f(x)$:<br>\\begin{aligned} f\\left(\\dfrac{ 1 }{ 2 }\\right) &= 2\\left(\\dfrac{ 1 }{ 2 }\\right)^3 + 3\\left(\\dfrac{ 1 }{ 2 }\\right)^2 + 2\\left(\\dfrac{ 1 }{ 2 }\\right) - 2 \\cr &= 2\\left(\\dfrac{ 1 }{ 8 }\\right) + 3\\left(\\dfrac{ 1 }{ 4 }\\right) + 1 - 2 \\cr &= \\dfrac{ 1 }{ 4 } + \\dfrac{ 3 }{ 4 } + 1 - 2 \\cr &= 0 \\cr \\end{aligned}<br>Since $f(0.5) = 0$, $x = 0.5$ is a root, meaning $(2x - 1)$ is a linear factor of $f(x)$.",
                        "<strong>Part (a)(ii):</strong><br>Divide $2x^3 + 3x^2 + 2x - 2$ by $(2x - 1)$:<br>\\begin{aligned} 2x^3 + 3x^2 + 2x - 2 &= (2x - 1)(x^2 + 2x + 2) \\cr \\end{aligned}<br>We check the discriminant of the quadratic factor $x^2 + 2x + 2$:<br>\\begin{aligned} \\Delta &= (2)^2 - 4(1)(2) \\cr &= 4 - 8 \\cr &= -4 < 0 \\cr \\end{aligned}<br>Since the discriminant is negative, the quadratic factor has no real roots. Thus, $x = 0.5$ is the only real root of $f(x) = 0$.",
                        "<strong>Part (b):</strong><br>We solve:<br>$$2y^6 + 3y^4 + 2y^2 - 2 = 0$$<br>Let $x = y^2$. The equation transforms to $f(x) = 0$, which has the unique real solution $x = 0.5$. Therefore:<br>\\begin{aligned}\ny^2 &= 0.5 = \\dfrac{ 1 }{ 2 } \\cr\ny &= \\pm \\dfrac{ 1 }{ \\sqrt{ 2 } } = \\pm \\dfrac{ \\sqrt{ 2 } }{ 2 }\n\\end{aligned}<br>Since the other factor has a negative discriminant, no further real solutions exist. There are exactly two real solutions: $y = \\pm \\dfrac{ \\sqrt{ 2 } }{ 2 }$.",
                        "<strong>Part (c):</strong><br>The equation is:<br>$$2\\cos^3\\theta + 3\\cos^2\\theta + 2\\cos\\theta - 2 = 0$$<br>Let $x = \\cos\\theta$. This equation becomes $f(x) = 0$, which has only one real solution, $x = 0.5$. Thus:<br>\\begin{aligned}\n\\cos\\theta &= 0.5 \\cr\n&= \\dfrac{ 1 }{ 2 }\n\\end{aligned}<br>We seek solutions in the interval $0 \\le \\theta < 4\\pi$, representing two complete periods of the cosine function.<br>In each period $[0, 2\\pi)$, the equation $\\cos\\theta = 0.5$ has exactly 2 solutions (at $\\theta = \\dfrac{ \\pi }{ 3 }$ and $\\theta = \\dfrac{ 5\\pi }{ 3 }$).<br>Therefore, over two full periods, there are exactly $4$ real solutions."
                ],
                "pi_options": [
                        {
                                "ans": "$$y = \\pm\\dfrac{ 1 }{ 2 }\\text{ and }2\\text{ solutions}$$",
                                "feedback": "This error occurs if you resolve $y^2 = 0.5$ as $y = \\pm 0.5$ (mistaking the square root of $0.5$ for $0.25$) and incorrectly assume there is only 1 solution to $\\cos\\theta = 0.5$ per period."
                        },
                        {
                                "ans": "$$y = \\pm\\dfrac{ \\sqrt{ 2 } }{ 2 }\\text{ and }2\\text{ solutions}$$",
                                "feedback": "This mistake arises from correctly identifying $y = \\pm \\frac{\\sqrt{2}}{2}$ but miscounting the number of real solutions to $\\cos\\theta = 0.5$ in $0 \\le \\theta < 4\\pi$. Since the interval covers two complete periods and each period has exactly 2 solutions, there must be 4 real solutions."
                        },
                        {
                                "ans": "$$y = \\dfrac{ \\sqrt{ 2 } }{ 2 }\\text{ and }4\\text{ solutions}$$",
                                "feedback": "This occurs if you neglect the negative square root of $y^2 = 0.5$, which yields the valid real solution $-\\frac{\\sqrt{2}}{2}$ along with the positive one."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "Exact Value Rationalisation",
                        "content": "Always rationalise denominators for exact value answers (e.g. write $y = \\pm\\frac{\\sqrt{2}}{2}$ instead of $y = \\pm\\frac{1}{\\sqrt{2}}$). This helps when matching option choices on standard examinations."
                }
        },
        {
                "id": "004460",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods",
                        "Proof",
                        "Trigonometry"
                ],
                "img": false,
                "question": "$f(x) = 4x^3 - 2x^2 + x - 3, \\quad x \\in \\mathbb{R}$<br><br><strong>(a) (i)</strong> Calculate $f(1)$.<br><strong>(ii)</strong> Write $f(x)$ as a product of two algebraic factors.<br><br>Using the answer to <strong>(a)(ii)</strong>:<br><strong>(b)</strong> Prove that there is exactly one real solution to the equation $4e^{3y} - 2e^{2y} + e^y - 3 = 0$.<br><br><strong>(c)</strong> Deduce the number of real solutions, for $0 \\le \\theta < \\pi$, to the equation $4\\tan^3(2\\theta) - 2\\tan^2(2\\theta) + \\tan(2\\theta) - 3 = 0$.<br><br>State the real solutions to the equation in <strong>(b)</strong> and the number of solutions in <strong>(c)</strong>.",
                "steps": [
                        "<strong>Part (a)(i):</strong><br>Substitute $x = 1$ into $f(x)$:<br>\\begin{aligned} f(1) &= 4(1)^3 - 2(1)^2 + 1 - 3 \\cr &= 4 - 2 + 1 - 3 \\cr &= 0 \\cr \\end{aligned}<br>Since $f(1) = 0$, $x = 1$ is a root, meaning $(x - 1)$ is a linear factor of $f(x)$.",
                        "<strong>Part (a)(ii):</strong><br>Divide $4x^3 - 2x^2 + x - 3$ by $(x - 1)$:<br>\\begin{aligned} 4x^3 - 2x^2 + x - 3 &= (x - 1)(4x^2 + 2x + 3) \\cr \\end{aligned}<br>We check the discriminant of the quadratic factor $4x^2 + 2x + 3$:<br>\\begin{aligned} \\Delta &= (2)^2 - 4(4)(3) \\cr &= 4 - 48 \\cr &= -44 < 0 \\cr \\end{aligned}<br>Since the discriminant is negative, the quadratic factor has no real roots. Thus, $x = 1$ is the unique real root of $f(x) = 0$.",
                        "<strong>Part (b):</strong><br>We solve:<br>$$4e^{3y} - 2e^{2y} + e^y - 3 = 0$$<br>Let $x = e^y$ (where $x > 0$). The equation becomes $f(x) = 0$.<br>Since the unique real root is $x = 1$, we have:<br>\\begin{aligned}\ne^y &= 1 \\cr\ny &= \\ln(1) = 0\n\\end{aligned}<br>Since the quadratic factor yields no real roots, $y = 0$ is the single unique real solution.",
                        "<strong>Part (c):</strong><br>The equation is:<br>$$4\\tan^3(2\\theta) - 2\\tan^2(2\\theta) + \\tan(2\\theta) - 3 = 0$$<br>Let $u = \\tan(2\\theta)$. This equation becomes $f(u) = 0$, which has only one real solution, $u = 1$. Thus:<br>$$\\tan(2\\theta) = 1$$<br>We search for solutions in the interval $0 \\le \\theta < \\pi$. Since the argument of the tangent function is $2\\theta$, we must scale the domain:<br>$$0 \\le 2\\theta < 2\\pi$$<br>The tangent function $\\tan(2\\theta)$ has a period of $\\pi$. Therefore, in the interval $[0, 2\\pi)$, the equation $\\tan(2\\theta) = 1$ has exactly two solutions (at $2\\theta = \\dfrac{ \\pi }{ 4 }$ and $2\\theta = \\dfrac{ 5\\pi }{ 4 }$).<br>Thus, there are exactly $2$ real solutions for $\\theta$."
                ],
                "pi_options": [
                        {
                                "ans": "$$y = 1\\text{ and }4\\text{ solutions}$$",
                                "feedback": "This error occurs if you solve $e^y = 1$ to get $y = 1$ instead of $y = 0$, and if you fail to scale the domain for the double angle $2\theta$, resulting in an incorrect count of solutions."
                        },
                        {
                                "ans": "$$y = 0\\text{ and }1\\text{ solution}$$",
                                "feedback": "This mistake arises from forgetting that the argument of the tangent function is $2\\theta$ instead of $\\theta$. In the interval $[0, \\pi)$, the double-angle $2\\theta$ ranges from $0$ to $2\\pi$, which contains two full periods of the tangent function, giving 2 solutions rather than 1."
                        },
                        {
                                "ans": "$$\\text{No real solutions for }y\\text{ and }2\\text{ solutions}$$",
                                "feedback": "This occurs if you mistakenly believe that the exponential equation $e^y = 1$ has no real solutions. In fact, since 1 is a positive real number, it has the unique real solution $y = \\ln(1) = 0$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "Double-Angle Domain Scaling",
                        "content": "When solving trigonometric equations with scaled arguments like $\\tan(2\\theta)$, always multiply the domain boundaries by the coefficient (e.g., $0 \\le 2\\theta < 2\\pi$) before counting solutions. Failing to do this often results in missing half of the valid solutions."
                }
        },
        {
                "id": "004461",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "<strong>(a)</strong> Solve, for $0 \\le x < \\dfrac{ \\pi }{ 2 }$, the equation $4\\cos x = \\csc x$, giving your answers in terms of $\\pi$.<br><br><strong>(b)</strong> Solve, for $0 \\le \\theta < 360^\\circ$, the equation $3\\sin\\theta - 3\\cos\\theta = 2$, giving your answers to one decimal place.<br><br>Solutions based entirely on graphical or numerical methods are not acceptable.",
                "steps": [
                        "<strong>Part (a):</strong><br>We solve the equation $4\\cos x = \\csc x$ in the interval $0 \\le x < \\dfrac{ \\pi }{ 2 }$:<br>\\begin{aligned} 4\\cos x &= \\dfrac{ 1 }{ \\sin x } \\cr 4\\sin x\\cos x &= 1 \\cr 2(2\\sin x\\cos x) &= 1 \\cr 2\\sin(2x) &= 1 \\cr \\sin(2x) &= \\dfrac{ 1 }{ 2 } \\cr \\end{aligned}<br>Since $0 \\le x < \\dfrac{ \\pi }{ 2 }$, we have $0 \\le 2x < \\pi$. Thus:<br>\\begin{aligned} 2x &= \\dfrac{ \\pi }{ 6 }, \\quad \\dfrac{ 5\\pi }{ 6 } \\cr x &= \\dfrac{ \\pi }{ 12 }, \\quad \\dfrac{ 5\\pi }{ 12 } \\cr \\end{aligned}",
                        "<strong>Part (b):</strong><br>We solve $3\\sin\\theta - 3\\cos\\theta = 2$ using the harmonic form $R\\sin(\\theta - \\alpha)$:<br>\\begin{aligned} R\\cos\\alpha &= 3 \\cr R\\sin\\alpha &= 3 \\cr \\end{aligned}<br>This gives:<br>\\begin{aligned} R &= \\sqrt{ 3^2 + 3^2 } = 3\\sqrt{ 2 } \\cr \\tan\\alpha &= \\dfrac{ 3 }{ 3 } = 1 \\implies \\alpha = 45^\\circ \\cr \\end{aligned}<br>So the equation becomes:<br>\\begin{aligned} 3\\sqrt{ 2 }\\sin(\\theta - 45^\\circ) &= 2 \\cr \\sin(\\theta - 45^\\circ) &= \\dfrac{ 2 }{ 3\\sqrt{ 2 } } = \\dfrac{ \\sqrt{ 2 } }{ 3 } \\cr \\end{aligned}<br>We find the principal angle using a calculator:<br>\\begin{aligned} \\theta - 45^\\circ &= \\arcsin\\left(\\dfrac{ \\sqrt{ 2 } }{ 3 }\\right) \\approx 28.13^\\circ \\cr \\end{aligned}<br>For $0 \\le \\theta < 360^\\circ$, we have $-45^\\circ \\le \\theta - 45^\\circ < 315^\\circ$. The valid solutions for $\\theta - 45^\\circ$ are:<br>\\begin{aligned} \\theta - 45^\\circ &\\approx 28.13^\\circ \\implies \\theta \\approx 73.1^\\circ \\cr \\theta - 45^\\circ &\\approx 180^\\circ - 28.13^\\circ = 151.87^\\circ \\implies \\theta \\approx 196.9^\\circ \\cr \\end{aligned}<br>Thus, the solutions to 1 decimal place are $\\theta = 73.1^\\circ$ and $\\theta = 196.9^\\circ$."
                ],
                "pi_options": [
                        {
                                "ans": "$$x = \\dfrac{ \\pi }{ 6 }, \\dfrac{ 5\\pi }{ 6 }\\text{ and }\\theta = 73.1^\\circ, 196.9^\\circ$$",
                                "feedback": "This error occurs in part <strong>(a)</strong> if you find the correct angles for $2x$ in the equation $\\sin(2x) = \\dfrac{ 1 }{ 2 }$ (which are $\\dfrac{ \\pi }{ 6 }$ and $\\dfrac{ 5\\pi }{ 6 }$) but forget to divide by 2 to solve for $x$."
                        },
                        {
                                "ans": "$$x = \\dfrac{ \\pi }{ 12 }, \\dfrac{ 5\\pi }{ 12 }\\text{ and }\\theta = 28.1^\\circ, 151.9^\\circ$$",
                                "feedback": "This error occurs in part <strong>(b)</strong> if you find the correct values for the shifted angle $\\theta - 45^\\circ$ (which are approximately $28.1^\\circ$ and $151.9^\\circ$) but forget to add $45^\\circ$ to solve for $\\theta$."
                        },
                        {
                                "ans": "$$x = \\dfrac{ \\pi }{ 12 }, \\dfrac{ 5\\pi }{ 12 }\\text{ and }\\theta = 73.1^\\circ, 286.9^\\circ$$",
                                "feedback": "This error occurs in part <strong>(b)</strong> if you incorrectly find the second quadrant boundary value for the shifted angle, possibly by calculating $180^\\circ + 28.1^\\circ$ instead of $180^\\circ - 28.1^\\circ$ before adding $45^\\circ$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "Shifted Trigonometric Domains",
                        "content": "When substituting a compound angle like $\\theta - \\alpha$ inside a trigonometric function, always adjust your domain limits before finding solutions (e.g., transform $0 \\le \\theta < 360^\\circ$ into $-\\alpha \\le \\theta - \\alpha < 360^\\circ - \\alpha$). This prevents you from missing valid solutions or including ones outside the correct range."
                }
        },
        {
                "id": "004462",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "<strong>(a)</strong> Solve, for $0 \\le x < \\pi$, the equation $2\\cos^2 x + 3\\sin x = 3$, giving your answers in terms of $\\pi$.<br><br><strong>(b)</strong> Solve, for $0 \\le \\theta < 360^\\circ$, the equation $4\\sin\\theta + 3\\cos\\theta = 2$, giving your answers to one decimal place.<br><br>Solutions based entirely on graphical or numerical methods are not acceptable.",
                "steps": [
                        "<strong>Part (a):</strong><br>We use the fundamental identity $\\cos^2 x = 1 - \\sin^2 x$ to rewrite the equation in terms of $\\sin x$:<br>\\begin{aligned} 2(1 - \\sin^2 x) + 3\\sin x &= 3 \\cr 2 - 2\\sin^2 x + 3\\sin x &= 3 \\cr 2\\sin^2 x - 3\\sin x + 1 &= 0 \\cr \\end{aligned}<br>Let $y = \\sin x$. This yields a quadratic equation:<br>\\begin{aligned} 2y^2 - 3y + 1 &= 0 \\cr (2y - 1)(y - 1) &= 0 \\cr \\end{aligned}<br>So we solve:<br>\\begin{aligned} \\sin x = \\dfrac{ 1 }{ 2 } &\\implies x = \\dfrac{ \\pi }{ 6 }, \\quad \\dfrac{ 5\\pi }{ 6 } \\cr \\sin x = 1 &\\implies x = \\dfrac{ \\pi }{ 2 } \\cr \\end{aligned}<br>Thus, the three exact solutions in the interval $0 \\le x < \\pi$ are $x = \\dfrac{ \\pi }{ 6 }, \\quad \\dfrac{ \\pi }{ 2 }, \\quad \\dfrac{ 5\\pi }{ 6 }$.",
                        "<strong>Part (b):</strong><br>We write $4\\sin\\theta + 3\\cos\\theta = 2$ in the harmonic form $R\\sin(\\theta + \\alpha)$:<br>\\begin{aligned} R\\cos\\alpha &= 4 \\cr R\\sin\\alpha &= 3 \\cr \\end{aligned}<br>This gives:<br>\\begin{aligned} R &= \\sqrt{ 4^2 + 3^2 } = 5 \\cr \\tan\\alpha &= \\dfrac{ 3 }{ 4 } \\implies \\alpha \\approx 36.87^\\circ \\cr \\end{aligned}<br>So the equation becomes:<br>\\begin{aligned} 5\\sin(\\theta + 36.87^\\circ) &= 2 \\cr \\sin(\\theta + 36.87^\\circ) &= 0.4 \\cr \\end{aligned}<br>We find the principal angle using a calculator:<br>\\begin{aligned} \\theta + 36.87^\\circ &= \\arcsin(0.4) \\approx 23.58^\\circ \\cr \\end{aligned}<br>For $0 \\le \\theta < 360^\\circ$, we have $36.87^\\circ \\le \\theta + 36.87^\\circ < 396.87^\\circ$. The valid solutions for $\\theta + 36.87^\\circ$ are:<br>\\begin{aligned} \\theta + 36.87^\\circ &\\approx 180^\\circ - 23.58^\\circ = 156.42^\\circ \\implies \\theta \\approx 119.6^\\circ \\cr \\theta + 36.87^\\circ &\\approx 360^\\circ + 23.58^\\circ = 383.58^\\circ \\implies \\theta \\approx 346.7^\\circ \\cr \\end{aligned}<br>Note that $23.58^\\circ - 36.87^\\circ = -13.29^\\circ$, which falls outside the required range of $0 \\le \\theta < 360^\\circ$. Thus, the solutions to 1 decimal place are $\\theta = 119.6^\\circ$ and $\\theta = 346.7^\\circ$."
                ],
                "pi_options": [
                        {
                                "ans": "$$x = \\dfrac{ \\pi }{ 6 }, \\dfrac{ 5\\pi }{ 6 }\\text{ and }\\theta = 119.6^\\circ, 346.7^\\circ$$",
                                "feedback": "This error occurs in part <strong>(a)</strong> if you solve the factored quadratic equation to find the solutions to $\\sin x = \\dfrac{ 1 }{ 2 }$ but forget to include the critical solution resulting from $\\sin x = 1$."
                        },
                        {
                                "ans": "$$x = \\dfrac{ \\pi }{ 6 }, \\dfrac{ \\pi }{ 2 }, \\dfrac{ 5\\pi }{ 6 }\\text{ and }\\theta = 119.6^\\circ, 156.4^\\circ$$",
                                "feedback": "This error occurs in part <strong>(b)</strong> if you use the second quadrant shifted value $156.4^\\circ$ directly as a final solution for $\\theta$ instead of subtracting $\\\\alpha \\\\approx 36.9^\\circ$ to solve for $\\theta$."
                        },
                        {
                                "ans": "$$x = \\dfrac{ \\pi }{ 6 }, \\dfrac{ \\pi }{ 2 }, \\dfrac{ 5\\pi }{ 6 }\\text{ and }\\theta = -13.3^\\circ, 119.6^\\circ$$",
                                "feedback": "This error occurs in part <strong>(b)</strong> if you correctly find the negative coordinate value of $-13.3^\\circ$ but forget to add $360^\\circ$ to bring it within the correct positive interval of $0 \\\\le \\theta < 360^\\circ$."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "Quadratic Factor Domain Scans",
                        "content": "When solving quadratic equations in trigonometric functions like $a\\sin^2 x + b\\sin x + c = 0$, you must always scan both linear branches. Always confirm which branch boundaries contain valid values within the restricted interval, particularly at crucial endpoints like $\\sin x = 1$ which yields a single boundary solution."
                }
        },
        {
                "id": "004463",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "<strong>(a)</strong> Solve, for $0 \\le x < \\pi$, the equation $\\sin(2x) = \\sqrt{ 3 }\\cos(2x)$, giving your answers in terms of $\\pi$.<br><br><strong>(b)</strong> Solve, for $0 \\le \\theta < 360^\\circ$, the equation $12\\cos\\theta - 5\\sin\\theta = 4$, giving your answers to one decimal place.<br><br>Solutions based entirely on graphical or numerical methods are not acceptable.",
                "steps": [
                        "<strong>Part (a):</strong><br>We divide both sides of the equation by $\\cos(2x)$ (noting that $\\cos(2x) \\neq 0$) to express the equation in terms of $\\tan(2x)$:<br>\\begin{aligned} \\dfrac{ \\sin(2x) }{ \\cos(2x) } &= \\sqrt{ 3 } \\cr \\tan(2x) &= \\sqrt{ 3 } \\cr \\end{aligned}<br>Since $0 \\le x < \\pi$, we must scale the domain for $2x$:<br>\\begin{aligned} 0 \\le 2x < 2\\pi \\cr \\end{aligned}<br>The solutions for $2x$ are:<br>\\begin{aligned} 2x &= \\dfrac{ \\pi }{ 3 }, \\quad \\dfrac{ 4\\pi }{ 3 } \\cr x &= \\dfrac{ \\pi }{ 6 }, \\quad \\dfrac{ 2\\pi }{ 3 } \\cr \\end{aligned}",
                        "<strong>Part (b):</strong><br>We write $12\\cos\\theta - 5\\sin\\theta = 4$ in the harmonic form $R\\cos(\\theta + \\alpha)$:<br>\\begin{aligned} R\\cos\\alpha &= 12 \\cr R\\sin\\alpha &= 5 \\cr \\end{aligned}<br>This gives:<br>\\begin{aligned} R &= \\sqrt{ 12^2 + 5^2 } = 13 \\cr \\tan\\alpha &= \\dfrac{ 5 }{ 12 } \\implies \\alpha \\approx 22.62^\\circ \\cr \\end{aligned}<br>So the equation becomes:<br>\\begin{aligned} 13\\cos(\\theta + 22.62^\\circ) &= 4 \\cr \\cos(\\theta + 22.62^\\circ) &= \\dfrac{ 4 }{ 13 } \\cr \\end{aligned}<br>We find the principal angle using a calculator:<br>\\begin{aligned} \\theta + 22.62^\\circ &= \\arccos\\left(\\dfrac{ 4 }{ 13 }\\right) \\approx 72.08^\\circ \\cr \\end{aligned}<br>For $0 \\le \\theta < 360^\\circ$, we have $22.62^\\circ \\le \\theta + 22.62^\\circ < 382.62^\\circ$. The valid solutions for $\\theta + 22.62^\\circ$ are:<br>\\begin{aligned} \\theta + 22.62^\\circ &\\approx 72.08^\\circ \\implies \\theta \\approx 49.5^\\circ \\cr \\theta + 22.62^\\circ &\\approx 360^\\circ - 72.08^\\circ = 287.92^\\circ \\implies \\theta \\approx 265.3^\\circ \\cr \\end{aligned}<br>Thus, the solutions to 1 decimal place are $\\theta = 49.5^\\circ$ and $\\theta = 265.3^\\circ$."
                ],
                "pi_options": [
                        {
                                "ans": "$$x = \\dfrac{ \\pi }{ 6 }\\text{ and }\\theta = 49.5^\\circ, 265.3^\\circ$$",
                                "feedback": "This error occurs in part <strong>(a)</strong> if you only solve for the principal value $2x = \\dfrac{ \\pi }{ 3 }$ but forget to find the second valid solution $2x = \\dfrac{ 4\\pi }{ 3 }$ over the scaled domain $0 \\\\le 2x < 2\\pi$."
                        },
                        {
                                "ans": "$$x = \\dfrac{ \\pi }{ 6 }, \\dfrac{ 2\\pi }{ 3 }\\text{ and }\\theta = 49.5^\\circ, 114.7^\\circ$$",
                                "feedback": "This error occurs in part <strong>(b)</strong> if you incorrectly solve the cosine equation, possibly by writing $180^\\circ - 72.1^\\circ$ instead of $360^\\circ - 72.1^\\circ$ when calculating the second boundary value for $\\theta + 22.6^\\circ$."
                        },
                        {
                                "ans": "$$x = \\dfrac{ \\pi }{ 3 }, \\dfrac{ 4\\pi }{ 3 }\\text{ and }\\theta = 49.5^\\circ, 265.3^\\circ$$",
                                "feedback": "This error occurs in part <strong>(a)</strong> if you correctly identify the solutions for the double angle $2x$ as $\\dfrac{ \\pi }{ 3 }$ and $\\dfrac{ 4\\pi }{ 3 }$ but forget to divide by 2 to solve for $x$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "Double Angle Domain Expansion",
                        "content": "Whenever solving a trigonometric equation with a compound multiple angle like $\\sin(2x) = k$, always expand the domain first (e.g. convert $0 \\le x < \\pi$ to $0 \\le 2x < 2\\pi$). Solve for all possible values of $2x$ in this wider window, and only divide by 2 as the absolute final step."
                }
        },
        {
                "id": "004464",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "<strong>(a)</strong> Solve, for $0 \\le x < 2\\pi$, the equation $2\\sin x\\tan x = 3$, giving your answers in terms of $\\pi$.<br><br><strong>(b)</strong> Solve, for $0 \\le \\theta < 360^\\circ$, the equation $2\\sin\\theta + 5\\cos\\theta = 3$, giving your answers to one decimal place.<br><br>Solutions based entirely on graphical or numerical methods are not acceptable.",
                "steps": [
                        "<strong>Part (a):</strong><br>We use the identity $\\tan x = \\dfrac{ \\sin x }{ \\cos x }$ to rewrite the equation (noting that $\\cos x \\neq 0$):<br>\\begin{aligned} 2\\sin x\\left(\\dfrac{ \\sin x }{ \\cos x }\\right) &= 3 \\cr 2\\sin^2 x &= 3\\cos x \\cr \\end{aligned}<br>Now, substitute the identity $\\sin^2 x = 1 - \\cos^2 x$ to get a quadratic in terms of $\\cos x$:<br>\\begin{aligned} 2(1 - \\cos^2 x) &= 3\\cos x \\cr 2 - 2\\cos^2 x &= 3\\cos x \\cr 2\\cos^2 x + 3\\cos x - 2 &= 0 \\cr \\end{aligned}<br>Let $y = \\cos x$. Factor the quadratic equation:<br>\\begin{aligned} 2y^2 + 3y - 2 &= 0 \\cr (2y - 1)(y + 2) &= 0 \\cr \\end{aligned}<br>So we solve:<br>\\begin{aligned} \\cos x = \\dfrac{ 1 }{ 2 } &\\implies x = \\dfrac{ \\pi }{ 3 }, \\quad \\dfrac{ 5\\pi }{ 3 } \\cr \\cos x = -2 &\\implies \\text{No real solutions} \\cr \\end{aligned}<br>Thus, the solutions in the interval $0 \\le x < 2\\pi$ are $x = \\dfrac{ \\pi }{ 3 }$ and $x = \\dfrac{ 5\\pi }{ 3 }$.",
                        "<strong>Part (b):</strong><br>We write $2\\sin\\theta + 5\\cos\\theta = 3$ in the harmonic form $R\\sin(\\theta + \\alpha)$:<br>\\begin{aligned} R\\cos\\alpha &= 2 \\cr R\\sin\\alpha &= 5 \\cr \\end{aligned}<br>This gives:<br>\\begin{aligned} R &= \\sqrt{ 2^2 + 5^2 } = \\sqrt{ 29 } \\cr \\tan\\alpha &= \\dfrac{ 5 }{ 2 } \\implies \\alpha \\approx 68.20^\\circ \\cr \\end{aligned}<br>So the equation becomes:<br>\\begin{aligned} \\sqrt{ 29 }\\sin(\\theta + 68.20^\\circ) &= 3 \\cr \\sin(\\theta + 68.20^\\circ) &= \\dfrac{ 3 }{ \\sqrt{ 29 } } \\cr \\end{aligned}<br>We find the principal angle using a calculator:<br>\\begin{aligned} \\theta + 68.20^\\circ &= \\arcsin\\left(\\dfrac{ 3 }{ \\sqrt{ 29 } }\\right) \\approx 33.86^\\circ \\cr \\end{aligned}<br>For $0 \\le \\theta < 360^\\circ$, we have $68.20^\\circ \\le \\theta + 68.20^\\circ < 428.20^\\circ$. The valid solutions for $\\theta + 68.20^\\circ$ are:<br>\\begin{aligned} \\theta + 68.20^\\circ &\\approx 180^\\circ - 33.86^\\circ = 146.14^\\circ \\implies \\theta \\approx 77.9^\\circ \\cr \\theta + 68.20^\\circ &\\approx 360^\\circ + 33.86^\\circ = 393.86^\\circ \\implies \\theta \\approx 325.7^\\circ \\cr \\end{aligned}<br>Note that $33.86^\\circ - 68.20^\\circ = -34.34^\\circ$, which is outside the range $0 \\le \\theta < 360^\\circ$. Thus, the solutions to 1 decimal place are $\\theta = 77.9^\\circ$ and $\\theta = 325.7^\\circ$."
                ],
                "pi_options": [
                        {
                                "ans": "$$x = \\dfrac{ \\pi }{ 3 }, \\dfrac{ 2\\pi }{ 3 }\\text{ and }\\theta = 77.9^\\circ, 325.7^\\circ$$",
                                "feedback": "This error occurs in part <strong>(a)</strong> if you assume the second valid coordinate for $\\cos x = \\dfrac{ 1 }{ 2 }$ lies in the second quadrant ($\\dfrac{ 2\\pi }{ 3 }$) instead of the fourth quadrant ($\\dfrac{ 5\\pi }{ 3 }$)."
                        },
                        {
                                "ans": "$$x = \\dfrac{ \\pi }{ 3 }, \\dfrac{ 5\\pi }{ 3 }\\text{ and }\\theta = 33.9^\\circ, 146.1^\\circ$$",
                                "feedback": "This error occurs in part <strong>(b)</strong> if you find the correct values for the shifted angle $\\theta + 68.2^\\circ$ (which are approximately $33.9^\\circ$ and $146.1^\\circ$) but forget to subtract $68.2^\\circ$ to solve for $\\theta$."
                        },
                        {
                                "ans": "$$x = \\dfrac{ \\pi }{ 3 }, \\dfrac{ 5\\pi }{ 3 }\\text{ and }\\theta = -34.3^\\circ, 77.9^\\circ$$",
                                "feedback": "This error occurs in part <strong>(b)</strong> if you correctly find the negative coordinate value of $-34.3^\\circ$ but forget to add $360^\\circ$ to bring it within the correct positive interval of $0 \\\\le \\theta < 360^\\circ$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "Identifying Spurious Roots",
                        "content": "When solving algebraic equations in trigonometry that produce quadratic terms, you will often find multiple branches (e.g., $\\cos x = \\frac{1}{2}$ and $\\cos x = -2$). Always check the physical constraints of the trigonometric functions. Since $-1 \\le \\cos x \\le 1$ for all real $x$, any branch outside this range is a spurious root and must be immediately discarded."
                }
        },
        {
                "id": "004465",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Trigonometric Functions",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "<strong>(a)</strong> Solve, for $0 \\le x < \\pi$, the equation $2\\sin(2x)\\tan x = 3$, giving your answers in terms of $\\pi$.<br><br><strong>(b)</strong> Solve, for $0 \\le \\theta < 360^\\circ$, the equation $2\\sin\\theta - 3\\cos\\theta = 1$, giving your answers to one decimal place.<br><br>Solutions based entirely on graphical or numerical methods are not acceptable.",
                "steps": [
                        "<strong>Part (a):</strong><br>We apply the double angle identity $\\sin(2x) = 2\\sin x\\cos x$ and the identity $\\tan x = \\dfrac{ \\sin x }{ \\cos x }$ (noting that $\\cos x \\neq 0$):<br>\\begin{aligned} 2(2\\sin x\\cos x)\\left(\\dfrac{ \\sin x }{ \\cos x }\\right) &= 3 \\cr 4\\sin^2 x &= 3 \\cr \\sin^2 x &= \\dfrac{ 3 }{ 4 } \\cr \\sin x &= \\pm\\dfrac{ \\sqrt{ 3 } }{ 2 } \\cr \\end{aligned}<br>Since we are solving in the interval $0 \\le x < \\pi$, the sine function must be strictly non-negative. Thus, we discard the negative root:<br>\\begin{aligned} \\sin x &= \\dfrac{ \\sqrt{ 3 } }{ 2 } \\cr \\end{aligned}<br>Solving this in the interval yields:<br>\\begin{aligned} x &= \\dfrac{ \\pi }{ 3 }, \\quad \\dfrac{ 2\\pi }{ 3 } \\cr \\end{aligned}",
                        "<strong>Part (b):</strong><br>We write $2\\sin\\theta - 3\\cos\\theta = 1$ in the harmonic form $R\\sin(\\theta - \\alpha)$:<br>\\begin{aligned} R\\cos\\alpha &= 2 \\cr R\\sin\\alpha &= 3 \\cr \\end{aligned}<br>This gives:<br>\\begin{aligned} R &= \\sqrt{ 2^2 + (-3)^2 } = \\sqrt{ 13 } \\cr \\tan\\alpha &= \\dfrac{ 3 }{ 2 } \\implies \\alpha \\approx 56.31^\\circ \\cr \\end{aligned}<br>So the equation becomes:<br>\\begin{aligned} \\sqrt{ 13 }\\sin(\\theta - 56.31^\\circ) &= 1 \\cr \\sin(\\theta - 56.31^\\circ) &= \\dfrac{ 1 }{ \\sqrt{ 13 } } \\cr \\end{aligned}<br>We find the principal angle using a calculator:<br>\\begin{aligned} \\theta - 56.31^\\circ &= \\arcsin\\left(\\dfrac{ 1 }{ \\sqrt{ 13 } }\\right) \\approx 16.10^\\circ \\cr \\end{aligned}<br>For $0 \\le \\theta < 360^\\circ$, we have $-56.31^\\circ \\le \\theta - 56.31^\\circ < 303.69^\\circ$. The valid solutions for $\\theta - 56.31^\\circ$ are:<br>\\begin{aligned} \\theta - 56.31^\\circ &\\approx 16.10^\\circ \\implies \\theta \\approx 72.4^\\circ \\cr \\theta - 56.31^\\circ &\\approx 180^\\circ - 16.10^\\circ = 163.90^\\circ \\implies \\theta \\approx 220.2^\\circ \\cr \\end{aligned}<br>Thus, the solutions to 1 decimal place are $\\theta = 72.4^\\circ$ and $\\theta = 220.2^\\circ$."
                ],
                "pi_options": [
                        {
                                "ans": "$$x = \\dfrac{ \\pi }{ 3 }, \\dfrac{ 2\\pi }{ 3 }, \\dfrac{ 4\\pi }{ 3 }, \\dfrac{ 5\\pi }{ 3 }\\text{ and }\\theta = 72.4^\\circ, 220.2^\\circ$$",
                                "feedback": "This error occurs in part <strong>(a)</strong> if you solve the square equation to get $\\sin x = \\\\pm\\dfrac{ \\sqrt{ 3 } }{ 2 }$ and include the negative solutions from the third and fourth quadrants, forgetting that the domain is strictly restricted to $0 \\\\le x < \\pi$."
                        },
                        {
                                "ans": "$$x = \\dfrac{ \\pi }{ 3 }, \\dfrac{ 2\\pi }{ 3 }\\text{ and }\\theta = 16.1^\\circ, 163.9^\\circ$$",
                                "feedback": "This error occurs in part <strong>(b)</strong> if you find the correct shifted values for $\\theta - 56.3^\\circ$ (which are approximately $16.1^\\circ$ and $163.9^\\circ$) but forget to add $56.3^\\circ$ to solve for $\\theta$."
                        },
                        {
                                "ans": "$$x = \\dfrac{ \\pi }{ 3 }, \\dfrac{ 2\\pi }{ 3 }\\text{ and }\\theta = 72.4^\\circ, 127.6^\\circ$$",
                                "feedback": "This error occurs in part <strong>(b)</strong> if you correctly calculate the second quadrant value for the shifted angle as $180^\\circ - 16.1^\\circ$ but then subtract $56.3^\\circ$ instead of adding it."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "Double Angle Cancellation",
                        "content": "When expanding and simplifying expressions like $2\\sin(2x)\\tan x = 3$, remember that the division by $\\cos x$ relies on the assumption that $\\cos x \\neq 0$. If any of your final answers include values where $\\cos x = 0$ (such as $x = \\frac{\\pi}{2}$), they must be discarded immediately because the original expression would be undefined."
                }
        },
        {
                "id": "004466",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Modelling and Applications",
                        "Quadratics"
                ],
                "img": "images/Pure/004466.png",
                "question": "The diagram shows a graph representing the trajectory of a Gaelic football.<br><br>The height above the ground, $H$ metres, has been plotted against the horizontal distance, $x$ metres, measured from the point $O$ where the ball was kicked. The ball travels in a vertical plane. The ball reaches a maximum height of $16$ metres and hits the ground $48$ metres from where it was kicked.<br><br><strong>(a)</strong> Find a quadratic equation linking $H$ with $x$ that models this situation.<br><br>The ball passes over the horizontal crossbar of a set of goal posts that is perpendicular to the path of the ball. The crossbar is $3$ metres above the ground.<br><br><strong>(b)</strong> Use your equation to find the greatest horizontal distance of the crossbar from $O$.<br><br><strong>(c)</strong> Give one limitation of the model.",
                "steps": [
                        "<strong>(a) Finding the quadratic model:</strong><br>The trajectory starts at the origin $O(0,0)$ and lands at the point $(48,0)$, which means the roots of the quadratic function are $x = 0$ and $x = 48$. We can express the model in factored form:<br>$$H = kx( 48 - x )$$<br>where $k$ is a constant. The maximum height of $16$ metres occurs at the midpoint of the flight, which is $x = 24$. Therefore, the vertex of the parabola is at the point $(24, 16)$.",
                        "Substituting the vertex coordinates $x = 24$ and $H = 16$ into our factored model allows us to solve for $k$:<br>\\begin{aligned} 16 &= k( 24 )( 48 - 24 ) \\cr 16 &= 576k \\cr k &= \\dfrac{ 16 }{ 576 } = \\dfrac{ 1 }{ 36 } \\end{aligned}<br>Therefore, the quadratic equation modeling the trajectory is:<br>$$H = -\\dfrac{ 1 }{ 36 }x^2 + \\dfrac{ 4 }{ 3 }x$$",
                        "<strong>(b) Finding the greatest horizontal distance:</strong><br>The horizontal crossbar is $3$ metres above the ground, so we set $H = 3$ and solve for $x$:<br>$$-\\dfrac{ 1 }{ 36 }x^2 + \\dfrac{ 4 }{ 3 }x = 3$$<br>Multiplying the entire equation by $-36$ to clear the fractions and rearranging into standard quadratic form gives:<br>\\begin{aligned} x^2 - 48x &= -108 \\cr x^2 - 48x + 108 &= 0 \\end{aligned}",
                        "We can solve this quadratic equation using the quadratic formula $x = \\dfrac{ -b \\pm \\sqrt{ b^2 - 4ac } }{ 2a }$:<br>\\begin{aligned} x &= \\dfrac{ 48 \\pm \\sqrt{ ( -48 )^2 - 4( 1 )( 108 ) } }{ 2 } \\cr x &= \\dfrac{ 48 \\pm \\sqrt{ 2304 - 432 } }{ 2 } \\cr x &= \\dfrac{ 48 \\pm \\sqrt{ 1872 } }{ 2 } \\cr x &= \\dfrac{ 48 \\pm 12\\sqrt{ 13 } }{ 2 } \\cr x &= 24 \\pm 6\\sqrt{ 13 } \\end{aligned}",
                        "Calculating the two decimal values:<br>$$x \\approx 24 - 21.63 = 2.37\\text{ m}$$<br>$$x \\approx 24 + 21.63 = 45.63\\text{ m}$$<br>The question asks for the <strong>greatest</strong> horizontal distance where the ball is at crossbar height. This corresponds to the larger root where the ball is on its downward trajectory:<br>$$x = 24 + 6\\sqrt{ 13 }\\text{ m} \\approx 45.6\\text{ m}$$",
                        "<strong>(c) Identifying a limitation:</strong><br>In reality, the model ignores external forces such as air resistance, wind, and any spin on the ball. These physical factors would cause the actual trajectory to deviate from a perfect parabolic path."
                ],
                "pi_options": [
                        {
                                "ans": "$24 - 6\\sqrt{ 13 }\\text{ m} \\approx 2.37\\text{ m}$",
                                "feedback": "This represents the least horizontal distance from $O$ where the ball reaches a height of $3$ metres, which occurs on its upward path before reaching the peak."
                        },
                        {
                                "ans": "$48\\text{ m}$",
                                "feedback": "This is the total horizontal distance traveled by the ball when it hits the ground ($H = 0$), rather than the position where it passes over the $3$ metre crossbar."
                        },
                        {
                                "ans": "$50.2\\text{ m}$",
                                "feedback": "This error occurs if you make a sign error when setting up the quadratic equation, solving $x^2 - 48x - 108 = 0$ instead of $x^2 - 48x + 108 = 0$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Selecting the Correct Root",
                        "content": "Always read the wording of the question carefully. Setting the height $H = 3$ yields two valid mathematical solutions because the ball reaches this height twice: once on the way up ($x \\approx 2.37\\text{ m}$) and once on the way down ($x \\approx 45.6\\text{ m}$). Since the question asks for the greatest horizontal distance, you must select the larger value."
                }
        },
        {
                "id": "004467",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Modelling and Applications",
                        "Quadratics"
                ],
                "img": "images/Pure/004467.png",
                "question": "The diagram shows a graph representing the trajectory of a golf ball.<br><br>The height above the ground, $H$ metres, has been plotted against the horizontal distance, $x$ metres, measured from the point $O$ where the ball was hit. The ball travels in a vertical plane. The ball reaches a maximum height of $25$ metres and hits the fairway $200$ metres from where it was struck.<br><br><strong>(a)</strong> Find a quadratic equation linking $H$ with $x$ that models this situation.<br><br>The ball passes over the top of a tall tree that is perpendicular to the path of the ball. The tree is $16$ metres high.<br><br><strong>(b)</strong> Use your equation to find the greatest horizontal distance of the tree from $O$.<br><br><strong>(c)</strong> Give one limitation of the model.",
                "steps": [
                        "<strong>(a) Finding the quadratic model:</strong><br>The golf ball starts at the origin $O(0,0)$ and lands at the point $(200,0)$, which means the roots of the quadratic function are $x = 0$ and $x = 200$. We can express the model in factored form:<br>$$H = kx( 200 - x )$$<br>where $k$ is a constant. The maximum height of $25$ metres occurs at the midpoint of the flight, which is $x = 100$. Therefore, the vertex of the parabola is at $(100, 25)$.",
                        "Substituting $x = 100$ and $H = 25$ into our factored model allows us to solve for $k$:<br>\\begin{aligned} 25 &= k( 100 )( 200 - 100 ) \\cr 25 &= 10000k \\cr k &= \\dfrac{ 25 }{ 10000 } = \\dfrac{ 1 }{ 400 } \\end{aligned}<br>Therefore, the quadratic equation modeling the trajectory is:<br>$$H = -\\dfrac{ 1 }{ 400 }x^2 + \\dfrac{ 1 }{ 2 }x$$",
                        "<strong>(b) Finding the greatest horizontal distance:</strong><br>The tree is $16$ metres high, so we set $H = 16$ and solve for $x$:<br>$$-\\dfrac{ 1 }{ 400 }x^2 + \\dfrac{ 1 }{ 2 }x = 16$$<br>Multiplying the entire equation by $-400$ to clear the fractions and rearranging into standard quadratic form gives:<br>\\begin{aligned} x^2 - 200x &= -6400 \\cr x^2 - 200x + 6400 &= 0 \\end{aligned}",
                        "We can solve this quadratic equation by factoring. We look for two numbers that multiply to $6400$ and add to $-200$. These numbers are $-40$ and $-160$:<br>\\begin{aligned} ( x - 40 )( x - 160 ) &= 0 \\end{aligned}<br>This gives the roots:<br>\\begin{aligned}\nx &= 40\\text{ m} \\quad \\text{and} \\quad x \\cr\n&= 160\\text{ m}\n\\end{aligned}",
                        "The question asks for the <strong>greatest</strong> horizontal distance where the ball is at tree height ($16$ metres). This corresponds to the larger root where the ball is on its downward trajectory:<br>$$x = 160\\text{ m}$$",
                        "<strong>(c) Identifying a limitation:</strong><br>The model assumes a constant gravitational field and completely ignores air resistance. Over a large horizontal distance of $200$ metres, air resistance (drag) would significantly alter the shape of the flight path, making it asymmetrical."
                ],
                "pi_options": [
                        {
                                "ans": "$40\\text{ m}$",
                                "feedback": "This represents the least horizontal distance where the ball reaches a height of $16$ metres, which occurs on its upward path before reaching the peak."
                        },
                        {
                                "ans": "$200\\text{ m}$",
                                "feedback": "This is the total horizontal distance traveled by the ball when it lands ($H = 0$), rather than the position where it passes over the $16$ metre tall tree."
                        },
                        {
                                "ans": "$228\\text{ m}$",
                                "feedback": "This error occurs if you make a sign error when setting up the quadratic equation, solving $x^2 - 200x - 6400 = 0$ instead of $x^2 - 200x + 6400 = 0$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Factoring Large Quadratics",
                        "content": "When faced with large constant terms like $6400$ in a quadratic equation, do not panic. Try to scale down the numbers by dividing the coefficients of $x$ and the constant by a power of $10$. Here, $x^2 - 200x + 6400 = 0$ behaves like $u^2 - 20u + 64 = 0$ if we let $x = 10u$. Factoring the scaled version gives $( u - 4 )( u - 16 ) = 0$, which scales back directly to $( x - 40 )( x - 160 ) = 0$."
                }
        },
        {
                "id": "004468",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Modelling and Applications",
                        "Quadratics"
                ],
                "img": "images/Pure/004468.png",
                "question": "The diagram shows a graph representing the trajectory of an arrow shot from the ground.<br><br>The height above the ground, $H$ metres, has been plotted against the horizontal distance, $x$ metres, measured from the point $O$ where the arrow was released. The arrow travels in a vertical plane. The arrow reaches a maximum height of $18$ metres and hits the ground $120$ metres from where it was shot.<br><br><strong>(a)</strong> Find a quadratic equation linking $H$ with $x$ that models this situation.<br><br>The arrow passes over a high boundary wall that is perpendicular to the path of the arrow. The top of the wall is $10$ metres above the ground.<br><br><strong>(b)</strong> Use your equation to find the greatest horizontal distance of the wall from $O$.<br><br><strong>(c)</strong> Give one limitation of the model.",
                "steps": [
                        "<strong>(a) Finding the quadratic model:</strong><br>The arrow is shot from the origin $O(0,0)$ and lands at $(120,0)$, which means the roots of the quadratic function are $x = 0$ and $x = 120$. We can express the model in factored form:<br>$$H = kx( 120 - x )$$<br>where $k$ is a constant. The maximum height of $18$ metres occurs at the midpoint of the flight, which is $x = 60$. Therefore, the vertex of the parabola is at $(60, 18)$.",
                        "Substituting $x = 60$ and $H = 18$ into our factored model allows us to solve for $k$:<br>\\begin{aligned} 18 &= k( 60 )( 120 - 60 ) \\cr 18 &= 3600k \\cr k &= \\dfrac{ 18 }{ 3600 } = \\dfrac{ 1 }{ 200 } \\end{aligned}<br>Therefore, the quadratic equation modeling the trajectory is:<br>$$H = -\\dfrac{ 1 }{ 200 }x^2 + \\dfrac{ 3 }{ 5 }x$$",
                        "<strong>(b) Finding the greatest horizontal distance:</strong><br>The wall is $10$ metres tall, so we set $H = 10$ and solve for $x$:<br>$$-\\dfrac{ 1 }{ 200 }x^2 + \\dfrac{ 3 }{ 5 }x = 10$$<br>Multiplying the entire equation by $-200$ to clear the fractions and rearranging into standard quadratic form gives:<br>\\begin{aligned} x^2 - 120x &= -2000 \\cr x^2 - 120x + 2000 &= 0 \\end{aligned}",
                        "We can solve this quadratic equation by factoring. We look for two numbers that multiply to $2000$ and add to $-120$. These numbers are $-20$ and $-100$:<br>\\begin{aligned} ( x - 20 )( x - 100 ) &= 0 \\end{aligned}<br>This gives the roots:<br>\\begin{aligned}\nx &= 20\\text{ m} \\quad \\text{and} \\quad x \\cr\n&= 100\\text{ m}\n\\end{aligned}",
                        "The question asks for the <strong>greatest</strong> horizontal distance where the arrow is at wall height ($10$ metres). This corresponds to the larger root where the arrow is on its downward trajectory:<br>$$x = 100\\text{ m}$$",
                        "<strong>(c) Identifying a limitation:</strong><br>The model ignores physical factors such as air resistance, arrow spin, and wind currents. Over a distance of $120$ metres, wind drift and drag would reduce the range and skew the perfect parabolic path."
                ],
                "pi_options": [
                        {
                                "ans": "$20\\text{ m}$",
                                "feedback": "This represents the least horizontal distance from $O$ where the arrow reaches $10$ metres high, which occurs on its upward path before reaching its peak."
                        },
                        {
                                "ans": "$120\\text{ m}$",
                                "feedback": "This is the total horizontal distance traveled by the arrow when it lands ($H = 0$), rather than the position where it passes over the $10$ metre wall."
                        },
                        {
                                "ans": "$134\\text{ m}$",
                                "feedback": "This error occurs if you make a sign error when setting up the quadratic equation, solving $x^2 - 120x - 2000 = 0$ instead of $x^2 - 120x + 2000 = 0$."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Symmetry of Parabolas",
                        "content": "A key property of quadratic curves is their perfect line of symmetry. Since the axis of symmetry is at $x = 60$, any specific height $H$ (less than the maximum height of $18\\text{ m}$) must occur at two horizontal distances that are equidistant from $x = 60$. Notice that the roots $x = 20$ and $x = 100$ are both exactly $40$ units away from $x = 60$. Knowing this symmetry helps you quickly double-check your arithmetic!"
                }
        },
        {
                "id": "004469",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Modelling and Applications",
                        "Quadratics"
                ],
                "img": "images/Pure/004469.png",
                "question": "The diagram shows a graph representing the trajectory of a tennis ball lobbed from the court surface.<br><br>The height above the court, $H$ metres, has been plotted against the horizontal distance, $x$ metres, measured from the point $O$ where the ball was struck. The ball travels in a vertical plane. The ball reaches a maximum height of $9$ metres and hits the court $24$ metres from where it was struck.<br><br><strong>(a)</strong> Find a quadratic equation linking $H$ with $x$ that models this situation.<br><br>The ball passes over a practice net barrier that is perpendicular to the path of the ball. The barrier is $5$ metres high.<br><br><strong>(b)</strong> Use your equation to find the greatest horizontal distance of the barrier from $O$.<br><br><strong>(c)</strong> Give one limitation of the model.",
                "steps": [
                        "<strong>(a) Finding the quadratic model:</strong><br>The tennis ball starts at the origin $O(0,0)$ and lands at $(24,0)$, which means the roots of the quadratic function are $x = 0$ and $x = 24$. We can express the model in factored form:<br>$$H = kx( 24 - x )$$<br>where $k$ is a constant. The maximum height of $9$ metres occurs at the midpoint of the flight, which is $x = 12$. Therefore, the vertex of the parabola is at $(12, 9)$.",
                        "Substituting $x = 12$ and $H = 9$ into our factored model allows us to solve for $k$:<br>\\begin{aligned} 9 &= k( 12 )( 24 - 12 ) \\cr 9 &= 144k \\cr k &= \\dfrac{ 9 }{ 144 } = \\dfrac{ 1 }{ 16 } \\end{aligned}<br>Therefore, the quadratic equation modeling the trajectory is:<br>$$H = -\\dfrac{ 1 }{ 16 }x^2 + \\dfrac{ 3 }{ 2 }x$$",
                        "<strong>(b) Finding the greatest horizontal distance:</strong><br>The net barrier is $5$ metres high, so we set $H = 5$ and solve for $x$:<br>$$-\\dfrac{ 1 }{ 16 }x^2 + \\dfrac{ 3 }{ 2 }x = 5$$<br>Multiplying the entire equation by $-16$ to clear the fractions and rearranging into standard quadratic form gives:<br>\\begin{aligned} x^2 - 24x &= -80 \\cr x^2 - 24x + 80 &= 0 \\end{aligned}",
                        "We can solve this quadratic equation by factoring. We look for two numbers that multiply to $80$ and add to $-24$. These numbers are $-4$ and $-20$:<br>\\begin{aligned} ( x - 4 )( x - 20 ) &= 0 \\end{aligned}<br>This gives the roots:<br>\\begin{aligned}\nx &= 4\\text{ m} \\quad \\text{and} \\quad x \\cr\n&= 20\\text{ m}\n\\end{aligned}",
                        "The question asks for the <strong>greatest</strong> horizontal distance where the ball is at net height ($5$ metres). This corresponds to the larger root where the ball is on its downward trajectory:<br>$$x = 20\\text{ m}$$",
                        "<strong>(c) Identifying a limitation:</strong><br>The model assumes that the ball starts and lands exactly on the flat court surface level ($H = 0$). In a real match, the ball is hit from racket-height (typically around $1$ metre above court level) and might be caught or hit again before landing."
                ],
                "pi_options": [
                        {
                                "ans": "$4\\text{ m}$",
                                "feedback": "This represents the least horizontal distance from $O$ where the tennis ball reaches $5$ metres high, which occurs on its upward path before reaching its peak."
                        },
                        {
                                "ans": "$24\\text{ m}$",
                                "feedback": "This is the total horizontal distance traveled by the tennis ball when it lands ($H = 0$), rather than the position where it passes over the $5$ metre barrier."
                        },
                        {
                                "ans": "$27\\text{ m}$",
                                "feedback": "This error occurs if you make a sign error when setting up the quadratic equation, solving $x^2 - 24x - 80 = 0$ instead of $x^2 - 24x + 80 = 0$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Distinguishing Greatest and Least Distance",
                        "content": "A common exam slip is to write down the smaller root ($x = 4\\text{ m}$) because it is the first positive number found. Always re-read the question to check if you need the greatest distance, the least distance, or even the horizontal interval over which the ball remains above the barrier (which would be $4 < x < 20$)."
                }
        },
        {
                "id": "004470",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Modelling and Applications",
                        "Quadratics"
                ],
                "img": "images/Pure/004470.png",
                "question": "The diagram shows a graph representing the trajectory of a cricket ball hit from the ground.<br><br>The height above the ground, $H$ metres, has been plotted against the horizontal distance, $x$ metres, measured from the point $O$ where the ball was hit. The ball travels in a vertical plane. The ball reaches a maximum height of $16$ metres and lands $80$ metres from where it was hit.<br><br><strong>(a)</strong> Find a quadratic equation linking $H$ with $x$ that models this situation.<br><br>The ball passes over a sight screen that is perpendicular to the path of the ball. The top of the sight screen is $7$ metres above the ground.<br><br><strong>(b)</strong> Use your equation to find the greatest horizontal distance of the sight screen from $O$.<br><br><strong>(c)</strong> Give one limitation of the model.",
                "steps": [
                        "<strong>(a) Finding the quadratic model:</strong><br>The cricket ball starts at the origin $O(0,0)$ and lands at $(80,0)$, which means the roots of the quadratic function are $x = 0$ and $x = 80$. We can express the model in factored form:<br>$$H = kx( 80 - x )$$<br>where $k$ is a constant. The maximum height of $16$ metres occurs at the midpoint of the flight, which is $x = 40$. Therefore, the vertex of the parabola is at $(40, 16)$.",
                        "Substituting $x = 40$ and $H = 16$ into our factored model allows us to solve for $k$:<br>\\begin{aligned} 16 &= k( 40 )( 80 - 40 ) \\cr 16 &= 1600k \\cr k &= \\dfrac{ 16 }{ 1600 } = \\dfrac{ 1 }{ 100 } \\end{aligned}<br>Therefore, the quadratic equation modeling the trajectory is:<br>$$H = -\\dfrac{ 1 }{ 100 }x^2 + \\dfrac{ 4 }{ 5 }x$$",
                        "<strong>(b) Finding the greatest horizontal distance:</strong><br>The sight screen is $7$ metres tall, so we set $H = 7$ and solve for $x$:<br>$$-\\dfrac{ 1 }{ 100 }x^2 + \\dfrac{ 4 }{ 5 }x = 7$$<br>Multiplying the entire equation by $-100$ to clear the fractions and rearranging into standard quadratic form gives:<br>\\begin{aligned} x^2 - 80x &= -700 \\cr x^2 - 80x + 700 &= 0 \\end{aligned}",
                        "We can solve this quadratic equation by factoring. We look for two numbers that multiply to $700$ and add to $-80$. These numbers are $-10$ and $-70$:<br>\\begin{aligned} ( x - 10 )( x - 70 ) &= 0 \\end{aligned}<br>This gives the roots:<br>\\begin{aligned}\nx &= 10\\text{ m} \\quad \\text{and} \\quad x \\cr\n&= 70\\text{ m}\n\\end{aligned}",
                        "The question asks for the <strong>greatest</strong> horizontal distance where the cricket ball is at the height of the sight screen ($7$ metres). This corresponds to the larger root where the ball is on its downward trajectory:<br>$$x = 70\\text{ m}$$",
                        "<strong>(c) Identifying a limitation:</strong><br>In reality, the model ignores the effect of air resistance and the spin of the ball. A spinning cricket ball experiences aerodynamic forces (lift/drag) that make the flight asymmetric and slightly non-parabolic."
                ],
                "pi_options": [
                        {
                                "ans": "$10\\text{ m}$",
                                "feedback": "This represents the least horizontal distance from $O$ where the cricket ball reaches $7$ metres high, which occurs on its upward path before reaching its peak."
                        },
                        {
                                "ans": "$80\\text{ m}$",
                                "feedback": "This is the total horizontal distance traveled by the cricket ball when it lands ($H = 0$), rather than the position where it passes over the $7$ metre screen."
                        },
                        {
                                "ans": "$88\\text{ m}$",
                                "feedback": "This error occurs if you make a sign error when setting up the quadratic equation, solving $x^2 - 80x - 700 = 0$ instead of $x^2 - 80x + 700 = 0$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Standard Form Scaling",
                        "content": "Using exact fractions instead of decimals (such as $-\\dfrac{ 1 }{ 100 }$ rather than $-0.01$) keeps the coefficients clean and makes algebra much easier to solve. Decimal forms often hide simple factorizations that become immediately obvious once the fractions are cleared."
                }
        },
        {
                "id": "004471",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "Given that $\\theta$ is measured in radians, we prove from first principles that $\\dfrac{ \\mathrm{d} }{ \\mathrm{d}\\theta }(\\sin \\theta) = \\cos \\theta$ by considering the limit of the difference quotient:<br>$$\\dfrac{ \\sin(\\theta + h) - \\sin \\theta }{ h }$$<br>Which of the following shows the correct algebraic rearrangement of this expression before the limit is taken as $h \\to 0$?",
                "steps": [
                        "<strong>Step 1: Set up the limit of the difference quotient:</strong><br>By definition, the derivative of $\\sin \\theta$ with respect to $\\theta$ is given by the limit:<br>$$\\dfrac{ \\mathrm{d} }{ \\mathrm{d}\\theta }(\\sin \\theta) = \\lim_{ h \\to 0 } \\dfrac{ \\sin(\\theta + h) - \\sin \\theta }{ h }$$",
                        "<strong>Step 2: Expand the compound angle term:</strong><br>Using the compound angle identity $\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B$, we expand the numerator:<br>$$\\sin(\\theta + h) = \\sin \\theta \\cos h + \\cos \\theta \\sin h$$<br>Substituting this expansion back into our difference quotient gives:<br>$$\\dfrac{ \\sin \\theta \\cos h + \\cos \\theta \\sin h - \\sin \\theta }{ h }$$",
                        "<strong>Step 3: Group the sines and cosines:</strong><br>We can group the terms containing $\\sin \\theta$ in the numerator to factorise them:<br> $$\\dfrac{ \\sin \\theta \\cos h + \\cos \\theta \\sin h - \\sin \\theta }{ h }$$<br> \\begin{aligned}&=\\dfrac{ \\sin \\theta ( \\cos h - 1 ) + \\cos \\theta \\sin h }{ h } \\cr &= \\sin \\theta \\left( \\dfrac{ \\cos h - 1 }{ h } \\right) + \\cos \\theta \\left( \\dfrac{ \\sin h }{ h } \\right) \\end{aligned}<br>This is the required algebraic rearrangement before taking limits.",
                        "<strong>Step 4: Take the limit as $h \\to 0$:</strong><br>Using the standard limit results that as $h \\to 0$, $\\dfrac{ \\sin h }{ h } \\to 1$ and $\\dfrac{ \\cos h - 1 }{ h } \\to 0$, we evaluate:<br>\\begin{aligned} \\dfrac{ \\mathrm{d} }{ \\mathrm{d}\\theta }(\\sin \\theta) &= \\sin \\theta ( 0 ) + \\cos \\theta ( 1 ) \\cr &= \\cos \\theta \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\sin \\theta \\left( \\dfrac{ \\cos h + 1 }{ h } \\right) - \\cos \\theta \\left( \\dfrac{ \\sin h }{ h } \\right)$$",
                                "feedback": "This option contains a sign error in both the compound angle expansion and the grouping of the $\\sin \\theta$ term."
                        },
                        {
                                "ans": "$$\\cos \\theta \\left( \\dfrac{ \\cos h - 1 }{ h } \\right) + \\sin \\theta \\left( \\dfrac{ \\sin h }{ h } \\right)$$",
                                "feedback": "This error occurs if you incorrectly swap the sine and cosine functions in the compound angle identity expansion."
                        },
                        {
                                "ans": "$$\\sin \\theta ( \\cos h - 1 ) + \\cos \\theta \\left( \\dfrac{ \\sin h }{ h } \\right)$$",
                                "feedback": "This option fails to divide the first factored term by the denominator $h$, violating the rules of algebraic fractions."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Limit Identification",
                        "content": "When proving trig derivatives from first principles, do not skip the intermediate step of splitting the fraction. The limit results $\\lim_{ h \\to 0 } \\dfrac{ \\sin h }{ h } = 1$ and $\\lim_{ h \\to 0 } \\dfrac{ \\cos h - 1 }{ h } = 0$ must be applied separately to each of the distinct algebraic components."
                }
        },
        {
                "id": "004472",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "Given that $x$ is measured in radians, we prove from first principles that $\\dfrac{ \\mathrm{d} }{ \\mathrm{d}x }(\\cos(2x)) = -2\\sin(2x)$ by considering the limit of the difference quotient:<br>$$\\dfrac{ \\cos(2x + 2h) - \\cos(2x) }{ h }$$<br>Which of the following shows the correct algebraic rearrangement of this expression before the limit is taken as $h \\to 0$?",
                "steps": [
                        "<strong>Step 1: Set up the limit of the difference quotient:</strong><br>By definition, the derivative of $\\cos(2x)$ with respect to $x$ is given by the limit:<br>\\begin{aligned}\n\\dfrac{ \\mathrm{d} }{ \\mathrm{d}x }(\\cos(2x)) &= \\lim_{ h \\to 0 } \\dfrac{ \\cos(2(x + h)) - \\cos(2x) }{ h } \\cr\n&= \\lim_{ h \\to 0 } \\dfrac{ \\cos(2x + 2h) - \\cos(2x) }{ h }\n\\end{aligned}",
                        "<strong>Step 2: Expand the compound angle term:</strong><br>Using the compound angle identity $\\cos(A + B) = \\cos A \\cos B - \\sin A \\sin B$, we expand $\\cos(2x + 2h)$:<br>$$\\cos(2x + 2h) = \\cos(2x) \\cos(2h) - \\sin(2x) \\sin(2h)$$<br>Substituting this expansion back into our difference quotient gives:<br>$$\\dfrac{ \\cos(2x) \\cos(2h) - \\sin(2x) \\sin(2h) - \\cos(2x) }{ h }$$",
                        "<strong>Step 3: Group the terms:</strong><br>We can group the terms containing $\\cos(2x)$ in the numerator to factorise them:<br>$$ \\dfrac{ \\cos(2x) \\cos(2h) - \\sin(2x) \\sin(2h) - \\cos(2x) }{ h }$$<br> \\begin{aligned}&=\\dfrac{ \\cos(2x) ( \\cos(2h) - 1 ) - \\sin(2x) \\sin(2h) }{ h } \\cr &= \\cos(2x) \\left( \\dfrac{ \\cos(2h) - 1 }{ h } \\right) - \\sin(2x) \\left( \\dfrac{ \\sin(2h) }{ h } \\right) \\end{aligned}<br>This is the required algebraic rearrangement before taking limits.",
                        "<strong>Step 4: Take the limit as $h \\to 0$:</strong><br>To evaluate the limits, we scale the fractions to match our standard limit forms:<br>\\begin{aligned} \\dfrac{ \\cos(2h) - 1 }{ h } &= 2 \\left( \\dfrac{ \\cos(2h) - 1 }{ 2h } \\right) \\cr \\dfrac{ \\sin(2h) }{ h } &= 2 \\left( \\dfrac{ \\sin(2h) }{ 2h } \\right) \\end{aligned}<br>As $h \\to 0$, we have $2h \\to 0$. Therefore:<br>\\begin{aligned} \\lim_{ h \\to 0 } \\left( \\dfrac{ \\cos(2h) - 1 }{ h } \\right) &= 2( 0 ) = 0 \\cr \\lim_{ h \\to 0 } \\left( \\dfrac{ \\sin(2h) }{ h } \\right) &= 2( 1 ) = 2 \\end{aligned}<br>Applying these limits gives:<br>\\begin{aligned} \\dfrac{ \\mathrm{d} }{ \\mathrm{d}x }(\\cos(2x)) &= \\cos(2x)( 0 ) - \\sin(2x)( 2 ) \\cr &= -2\\sin(2x) \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\cos(2x) \\left( \\dfrac{ \\cos(2h) + 1 }{ h } \\right) + \\sin(2x) \\left( \\dfrac{ \\sin(2h) }{ h } \\right)$$",
                                "feedback": "This option contains a sign error in the compound angle expansion for cosine (using addition instead of subtraction) and incorrect sign grouping."
                        },
                        {
                                "ans": "$$\\sin(2x) \\left( \\dfrac{ \\cos(2h) - 1 }{ h } \\right) - \\cos(2x) \\left( \\dfrac{ \\sin(2h) }{ h } \\right)$$",
                                "feedback": "This error occurs if you incorrectly swap the sine and cosine functions in the compound angle identity expansion."
                        },
                        {
                                "ans": "$$\\cos(2x) ( \\cos(2h) - 1 ) - \\sin(2x) \\left( \\dfrac{ \\sin(2h) }{ h } \\right)$$",
                                "feedback": "This option fails to divide the first factored term by the denominator $h$, violating the rules of algebraic fractions."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Limit Scaling",
                        "content": "When dealing with multiple angles such as $\\cos(2x)$, the difference quotient contains terms like $\\sin(2h)$ and $\\cos(2h)$. Remember that to apply the standard limits, the denominator must match the angle parameter. Multiply and divide by $2$ to scale the denominator before taking the limits."
                }
        },
        {
                "id": "004473",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "Given that $x$ is measured in radians, we prove from first principles that $\\dfrac{ \\mathrm{d} }{ \\mathrm{d}x }(\\sin(2x)) = 2\\cos(2x)$ by considering the limit of the difference quotient:<br>$$\\dfrac{ \\sin(2x + 2h) - \\sin(2x) }{ h }$$<br>Which of the following shows the correct algebraic rearrangement of this expression before the limit is taken as $h \\to 0$?",
                "steps": [
                        "<strong>Step 1: Set up the limit of the difference quotient:</strong><br>By definition, the derivative of $\\sin(2x)$ with respect to $x$ is given by the limit:<br>\\begin{aligned}\n\\dfrac{ \\mathrm{d} }{ \\mathrm{d}x }(\\sin(2x)) &= \\lim_{ h \\to 0 } \\dfrac{ \\sin(2(x + h)) - \\sin(2x) }{ h } \\cr\n&= \\lim_{ h \\to 0 } \\dfrac{ \\sin(2x + 2h) - \\sin(2x) }{ h }\n\\end{aligned}",
                        "<strong>Step 2: Expand the compound angle term:</strong><br>Using the compound angle identity $\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B$, we expand $\\sin(2x + 2h)$:<br>$$\\sin(2x + 2h) = \\sin(2x) \\cos(2h) + \\cos(2x) \\sin(2h)$$<br>Substituting this expansion back into our difference quotient gives:<br>$$\\dfrac{ \\sin(2x) \\cos(2h) + \\cos(2x) \\sin(2h) - \\sin(2x) }{ h }$$",
                        "<strong>Step 3: Group the terms:</strong><br>We can group the terms containing $\\sin(2x)$ in the numerator to factorise them:<br>$$ \\dfrac{ \\sin(2x) \\cos(2h) + \\cos(2x) \\sin(2h) - \\sin(2x) }{ h }$$<br> \\begin{aligned}&=\\dfrac{ \\sin(2x) ( \\cos(2h) - 1 ) + \\cos(2x) \\sin(2h) }{ h } \\cr &= \\sin(2x) \\left( \\dfrac{ \\cos(2h) - 1 }{ h } \\right) + \\cos(2x) \\left( \\dfrac{ \\sin(2h) }{ h } \\right) \\end{aligned}<br>This is the required algebraic rearrangement before taking limits.",
                        "<strong>Step 4: Take the limit as $h \\to 0$:</strong><br>To evaluate the limits, we scale the fractions to match our standard limit forms:<br>\\begin{aligned} \\dfrac{ \\cos(2h) - 1 }{ h } &= 2 \\left( \\dfrac{ \\cos(2h) - 1 }{ 2h } \\right) \\cr \\dfrac{ \\sin(2h) }{ h } &= 2 \\left( \\dfrac{ \\sin(2h) }{ 2h } \\right) \\end{aligned}<br>As $h \\to 0$, we have $2h \\to 0$. Therefore:<br>\\begin{aligned} \\lim_{ h \\to 0 } \\left( \\dfrac{ \\cos(2h) - 1 }{ h } \\right) &= 2( 0 ) = 0 \\cr \\lim_{ h \\to 0 } \\left( \\dfrac{ \\sin(2h) }{ h } \\right) &= 2( 1 ) = 2 \\end{aligned}<br>Applying these limits gives:<br>\\begin{aligned} \\dfrac{ \\mathrm{d} }{ \\mathrm{d}x }(\\sin(2x)) &= \\sin(2x)( 0 ) + \\cos(2x)( 2 ) \\cr &= 2\\cos(2x) \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\sin(2x) \\left( \\dfrac{ \\cos(2h) + 1 }{ h } \\right) - \\cos(2x) \\left( \\dfrac{ \\sin(2h) }{ h } \\right)$$",
                                "feedback": "This option contains a sign error in both the compound angle expansion and the grouping of sines and cosines."
                        },
                        {
                                "ans": "$$\\cos(2x) \\left( \\dfrac{ \\cos(2h) - 1 }{ h } \\right) + \\sin(2x) \\left( \\dfrac{ \\sin(2h) }{ h } \\right)$$",
                                "feedback": "This error occurs if you incorrectly swap the sine and cosine functions in the compound angle identity expansion."
                        },
                        {
                                "ans": "$$\\sin(2x) ( \\cos(2h) - 1 ) + \\cos(2x) \\left( \\dfrac{ \\sin(2h) }{ h } \\right)$$",
                                "feedback": "This option fails to divide the first factored term by the denominator $h$, violating the rules of algebraic fractions."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Limit Definition of Derivative",
                        "content": "The limit definition of the derivative, $f'( x ) = \\lim_{ h \\to 0 } \\dfrac{ f( x+h ) - f( x ) }{ h }$, represents the gradient of the chord as the width $h \\to 0$. In A-level calculus, this is the foundational proof for trigonometric derivatives, bridging trigonometry and calculus."
                }
        },
        {
                "id": "004474",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "Given that $\\theta$ is measured in radians, we prove from first principles that $\\dfrac{ \\mathrm{d} }{ \\mathrm{d}\\theta }(\\cos(3\\theta)) = -3\\sin(3\\theta)$ by considering the limit of the difference quotient:<br>$$\\dfrac{ \\cos(3\\theta + 3h) - \\cos(3\\theta) }{ h }$$<br>Which of the following shows the correct algebraic rearrangement of this expression before the limit is taken as $h \\to 0$?",
                "steps": [
                        "<strong>Step 1: Set up the limit of the difference quotient:</strong><br>By definition, the derivative of $\\cos(3\\theta)$ with respect to $\\theta$ is given by the limit:<br>\\begin{aligned}\n\\dfrac{ \\mathrm{d} }{ \\mathrm{d}\\theta }(\\cos(3\\theta)) &= \\lim_{ h \\to 0 } \\dfrac{ \\cos(3( \\theta + h )) - \\cos(3\\theta) }{ h } \\cr\n&= \\lim_{ h \\to 0 } \\dfrac{ \\cos(3\\theta + 3h) - \\cos(3\\theta) }{ h }\n\\end{aligned}",
                        "<strong>Step 2: Expand the compound angle term:</strong><br>Using the compound angle identity $\\cos(A + B) = \\cos A \\cos B - \\sin A \\sin B$, we expand $\\cos(3\\theta + 3h)$:<br>$$\\cos(3\\theta + 3h) = \\cos(3\\theta) \\cos(3h) - \\sin(3\\theta) \\sin(3h)$$<br>Substituting this expansion back into our difference quotient gives:<br>$$\\dfrac{ \\cos(3\\theta) \\cos(3h) - \\sin(3\\theta) \\sin(3h) - \\cos(3\\theta) }{ h }$$",
                        "<strong>Step 3: Group the terms:</strong><br>We can group the terms containing $\\cos(3\\theta)$ in the numerator to factorise them:<br>$$ \\dfrac{ \\cos(3\\theta) \\cos(3h) - \\sin(3\\theta) \\sin(3h) - \\cos(3\\theta) }{ h }$$<br> \\begin{aligned}&=\\dfrac{ \\cos(3\\theta) ( \\cos(3h) - 1 ) - \\sin(3\\theta) \\sin(3h) }{ h } \\cr &= \\cos(3\\theta) \\left( \\dfrac{ \\cos(3h) - 1 }{ h } \\right) - \\sin(3\\theta) \\left( \\dfrac{ \\sin(3h) }{ h } \\right) \\end{aligned}<br>This is the required algebraic rearrangement before taking limits.",
                        "<strong>Step 4: Take the limit as $h \\to 0$:</strong><br>To evaluate the limits, we scale the fractions to match our standard limit forms:<br>\\begin{aligned} \\dfrac{ \\cos(3h) - 1 }{ h } &= 3 \\left( \\dfrac{ \\cos(3h) - 1 }{ 3h } \\right) \\cr \\dfrac{ \\sin(3h) }{ h } &= 3 \\left( \\dfrac{ \\sin(3h) }{ 3h } \\right) \\end{aligned}<br>As $h \\to 0$, we have $3h \\to 0$. Therefore:<br>\\begin{aligned} \\lim_{ h \\to 0 } \\left( \\dfrac{ \\cos(3h) - 1 }{ h } \\right) &= 3( 0 ) = 0 \\cr \\lim_{ h \\to 0 } \\left( \\dfrac{ \\sin(3h) }{ h } \\right) &= 3( 1 ) = 3 \\end{aligned}<br>Applying these limits gives:<br>\\begin{aligned} \\dfrac{ \\mathrm{d} }{ \\mathrm{d}\\theta }(\\cos(3\\theta)) &= \\cos(3\\theta)( 0 ) - \\sin(3\\theta)( 3 ) \\cr &= -3\\sin(3\\theta) \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\cos(3\\theta) \\left( \\dfrac{ \\cos(3h) + 1 }{ h } \\right) + \\sin(3\\theta) \\left( \\dfrac{ \\sin(3h) }{ h } \\right)$$",
                                "feedback": "This option contains a sign error in both the compound angle identity expansion for cosine and the subsequent grouping."
                        },
                        {
                                "ans": "$$\\sin(3\\theta) \\left( \\dfrac{ \\cos(3h) - 1 }{ h } \\right) - \\cos(3\\theta) \\left( \\dfrac{ \\sin(3h) }{ h } \\right)$$",
                                "feedback": "This error occurs if you incorrectly swap the sine and cosine functions in the compound angle identity expansion."
                        },
                        {
                                "ans": "$$\\cos(3\\theta) ( \\cos(3h) - 1 ) - \\sin(3\\theta) \\left( \\dfrac{ \\sin(3h) }{ h } \\right)$$",
                                "feedback": "This option fails to divide the first factored term by the denominator $h$, violating the rules of algebraic fractions."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Function Arguments",
                        "content": "Always ensure the arguments inside your sines and cosines remain consistent throughout the proof. For example, do not confuse $\\cos(3\\theta)$ with $3\\cos\\theta$; the parameter $3$ is bound within the angle, which is why we must use the compound angle identity with $3\\theta$ and $3h$."
                }
        },
        {
                "id": "004475",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "Given that $\\theta$ is measured in radians, we prove from first principles that $\\dfrac{ \\mathrm{d} }{ \\mathrm{d}\\theta }(\\sin(3\\theta)) = 3\\cos(3\\theta) $ by considering the limit of the difference quotient:<br>$$\\dfrac{ \\sin(3\\theta + 3h) - \\sin(3\\theta) }{ h }$$<br>Which of the following shows the correct algebraic rearrangement of this expression before the limit is taken as $h \\to 0$?",
                "steps": [
                        "<strong>Step 1: Set up the limit of the difference quotient:</strong><br>By definition, the derivative of $\\sin(3\\theta)$ with respect to $\\theta$ is given by the limit:<br>\\begin{aligned}\n\\dfrac{ \\mathrm{d} }{ \\mathrm{d}\\theta }(\\sin(3\\theta)) &= \\lim_{ h \\to 0 } \\dfrac{ \\sin(3( \\theta + h )) - \\sin(3\\theta) }{ h } \\cr\n&= \\lim_{ h \\to 0 } \\dfrac{ \\sin(3\\theta + 3h) - \\sin(3\\theta) }{ h }\n\\end{aligned}",
                        "<strong>Step 2: Expand the compound angle term:</strong><br>Using the compound angle identity $\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B$, we expand $\\sin(3\\theta + 3h)$:<br>$$\\sin(3\\theta + 3h) = \\sin(3\\theta) \\cos(3h) + \\cos(3\\theta) \\sin(3h)$$<br>Substituting this expansion back into our difference quotient gives:<br>$$\\dfrac{ \\sin(3\\theta) \\cos(3h) + \\cos(3\\theta) \\sin(3h) - \\sin(3\\theta) }{ h }$$",
                        "<strong>Step 3: Group the terms:</strong><br>We can group the terms containing $\\sin(3\\theta)$ in the numerator to factorise them:<br> $$\\dfrac{ \\sin(3\\theta) \\cos(3h) + \\cos(3\\theta) \\sin(3h) - \\sin(3\\theta) }{ h }$$<br> \\begin{aligned}&=\\dfrac{ \\sin(3\\theta) ( \\cos(3h) - 1 ) + \\cos(3\\theta) \\sin(3h) }{ h } \\cr &= \\sin(3\\theta) \\left( \\dfrac{ \\cos(3h) - 1 }{ h } \\right) + \\cos(3\\theta) \\left( \\dfrac{ \\sin(3h) }{ h } \\right) \\end{aligned}<br>This is the required algebraic rearrangement before taking limits.",
                        "<strong>Step 4: Take the limit as $h \\to 0$:</strong><br>To evaluate the limits, we scale the fractions to match our standard limit forms:<br>\\begin{aligned} \\dfrac{ \\cos(3h) - 1 }{ h } &= 3 \\left( \\dfrac{ \\cos(3h) - 1 }{ 3h } \\right) \\cr \\dfrac{ \\sin(3h) }{ h } &= 3 \\left( \\dfrac{ \\sin(3h) }{ 3h } \\right) \\end{aligned}<br>As $h \\to 0$, we have $3h \\to 0$. Therefore:<br>\\begin{aligned} \\lim_{ h \\to 0 } \\left( \\dfrac{ \\cos(3h) - 1 }{ h } \\right) &= 3( 0 ) = 0 \\cr \\lim_{ h \\to 0 } \\left( \\dfrac{ \\sin(3h) }{ h } \\right) &= 3( 1 ) = 3 \\end{aligned}<br>Applying these limits gives:<br>\\begin{aligned} \\dfrac{ \\mathrm{d} }{ \\mathrm{d}\\theta }(\\sin(3\\theta)) &= \\sin(3\\theta)( 0 ) + \\cos(3\\theta)( 3 ) \\cr &= 3\\cos(3\\theta) \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\sin(3\\theta) \\left( \\dfrac{ \\cos(3h) + 1 }{ h } \\right) - \\cos(3\\theta) \\left( \\dfrac{ \\sin(3h) }{ h } \\right)$$",
                                "feedback": "This option contains a sign error in both the compound angle expansion and the grouping of sines and cosines."
                        },
                        {
                                "ans": "$$\\cos(3\\theta) \\left( \\dfrac{ \\cos(3h) - 1 }{ h } \\right) + \\sin(3\\theta) \\left( \\dfrac{ \\sin(3h) }{ h } \\right)$$",
                                "feedback": "This error occurs if you incorrectly swap the sine and cosine functions in the compound angle identity expansion."
                        },
                        {
                                "ans": "$$\\sin(3\\theta) ( \\cos(3h) - 1 ) + \\cos(3\\theta) \\left( \\dfrac{ \\sin(3h) }{ h } \\right)$$",
                                "feedback": "This option fails to divide the first factored term by the denominator $h$, violating the rules of algebraic fractions."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Limit Parameters",
                        "content": "Remember that the limit results $\\lim_{ x \\to 0 } \\dfrac{ \\sin x }{ x } = 1$ and $\\lim_{ x \\to 0 } \\dfrac{ \\cos x - 1 }{ x } = 0$ hold true for any variable parameter $x$. By substituting $x = 3h$, we can see that as $h \\to 0$, $3h \\to 0$, allowing us to evaluate the limits of scaled functions easily."
                }
        },
        {
                "id": "004476",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "A spherical sugar candy of radius $6\\text{ mm}$ is placed in water and dissolves. Three minutes later, the radius of the candy is $3\\text{ mm}$.<br><br>In a simple model, the rate of decrease of the radius of the candy is inversely proportional to the square of the radius.<br><br>Using this model, find the total time taken for the candy to completely dissolve (to the nearest second).",
                "steps": [
                        "<strong>Step 1: Formulate the differential equation:</strong><br>Let $r$ represent the radius of the candy (in mm) at time $t$ (in minutes). Since the rate of decrease of the radius is inversely proportional to $r^2$, we write:<br>$$\\dfrac{ \\mathrm{d}r }{ \\mathrm{d}t } = -\\dfrac{ k }{ r^2 }$$<br>where $k$ is a positive constant of proportionality.",
                        "<strong>Step 2: Separate variables and integrate:</strong><br>We separate the variables and integrate both sides of the equation:<br>\\begin{aligned} r^2 \\mathrm{d}r &= -k \\mathrm{d}t \\cr \\int r^2 \\mathrm{d}r &= \\int -k \\mathrm{d}t \\cr \\dfrac{ 1 }{ 3 }r^3 &= -kt + C \\cr r^3 &= -3kt + 3C \\end{aligned}<br>Let $K = 3k$ and $c = 3C$ to simplify the equation:<br>$$r^3 = -Kt + c$$",
                        "<strong>Step 3: Apply the initial and boundary conditions:</strong><br>At $t = 0$, the initial radius is $r = 6$:<br>\\begin{aligned}\n6^3 &= -K( 0 ) + c \\cr\nc &= 216\n\\end{aligned}<br>This gives the equation:<br>$$r^3 = 216 - Kt$$<br>Three minutes later, at $t = 3$, the radius is $r = 3$:<br>\\begin{aligned} 3^3 &= 216 - K( 3 ) \\cr 27 &= 216 - 3K \\cr 3K &= 189 \\cr K &= 63 \\end{aligned}<br>Thus, the equation linking the radius and time is:<br>$$r^3 = 216 - 63t$$",
                        "<strong>Step 4: Find the total time taken to dissolve:</strong><br>The candy completely dissolves when $r = 0$:<br>\\begin{aligned} 0 &= 216 - 63t \\cr 63t &= 216 \\cr t &= \\dfrac{ 216 }{ 63 } = \\dfrac{ 24 }{ 7 }\\text{ minutes} \\approx 3.43\\text{ minutes} \\end{aligned}",
                        "<strong>Step 5: Convert the time into minutes and seconds:</strong><br>We convert $\\dfrac{ 24 }{ 7 }$ minutes into minutes and seconds:<br>\\begin{aligned} t &= 3\\text{ minutes} + \\dfrac{ 3 }{ 7 }\\text{ minutes} \\cr &= 3\\text{ minutes} + \\left( \\dfrac{ 3 }{ 7 } \\times 60 \\right)\\text{ seconds} \\cr &\\approx 3\\text{ minutes and } 26\\text{ seconds} \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$3\\text{ minutes and } 43\\text{ seconds}$",
                                "feedback": "This error occurs if you misinterpret the decimal output of $3.43$ minutes directly as $3$ minutes and $43$ seconds. Remember that $0.43$ minutes must be multiplied by $60$ to convert it into seconds."
                        },
                        {
                                "ans": "$4\\text{ minutes and } 12\\text{ seconds}$",
                                "feedback": "This error occurs if you use a linear model where the radius decreases by a constant $1\\text{ mm}$ per minute, which violates the inverse square law of the model."
                        },
                        {
                                "ans": "$3\\text{ minutes and } 15\\text{ seconds}$",
                                "feedback": "This is a rounding error or arithmetic slip in solving for the constant of integration $c$ or the constant $K$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Decimal Time Conversion",
                        "content": "Always be careful when converting decimal times. A common trap is to write a time of $3.43\\text{ minutes}$ as $3\\text{ minutes and } 43\\text{ seconds}$. Always isolate the decimal fraction of the minute and multiply it by $60$ to get the correct number of seconds ($0.43 \\times 60 \\approx 26\\text{ seconds}$)."
                }
        },
        {
                "id": "004477",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "The mass of a radioactive substance decays at a rate proportional to its mass at that time. The initial mass of the substance is $80\\text{ g}$. Ten hours later, the mass is found to be $40\\text{ g}$.<br><br>In a simple model, the rate of decrease of the mass of the substance is proportional to its mass.<br><br>Using this model, find the time taken for the mass of the substance to decay to $5\\text{ g}$ (to the nearest hour).",
                "steps": [
                        "<strong>Step 1: Formulate the differential equation:</strong><br>Let $M$ represent the mass of the radioactive substance (in g) at time $t$ (in hours). Since the rate of decrease of the mass is proportional to the mass itself, we write:<br>$$\\dfrac{ \\mathrm{d}M }{ \\mathrm{d}t } = -kM$$<br>where $k$ is a positive constant.",
                        "<strong>Step 2: Separate variables and integrate:</strong><br>Separating the variables and integrating both sides of the equation gives:<br>\\begin{aligned} \\dfrac{ 1 }{ M } \\mathrm{d}M &= -k \\mathrm{d}t \\cr \\int \\dfrac{ 1 }{ M } \\mathrm{d}M &= \\int -k \\mathrm{d}t \\cr \\ln M &= -kt + C \\cr M &= A\\mathrm{e}^{ -kt } \\end{aligned}<br>where $A = \\mathrm{e}^{ C }$ is a constant.",
                        "<strong>Step 3: Apply the initial and boundary conditions:</strong><br>At $t = 0$, the initial mass is $M = 80$:<br>\\begin{aligned}\n80 &= A\\mathrm{e}^{ -k( 0 ) } \\cr\nA &= 80\n\\end{aligned}<br>This gives the equation:<br>$$M = 80\\mathrm{e}^{ -kt }$$<br>Ten hours later, at $t = 10$, the mass is $M = 40$:<br>\\begin{aligned} 40 &= 80\\mathrm{e}^{ -10k } \\cr \\mathrm{e}^{ -10k } &= \\dfrac{ 1 }{ 2 } \\cr -10k &= \\ln\\left( \\dfrac{ 1 }{ 2 } \\right) = -\\ln 2 \\cr k &= \\dfrac{ \\ln 2 }{ 10 } \\end{aligned}<br>Thus, the equation linking the mass and time is:<br>$$M = 80\\mathrm{e}^{ -\\left( \\frac{ \\ln 2 }{ 10 } \\right)t }$$",
                        "<strong>Step 4: Find the time taken to decay to $5\\text{ g}$:</strong><br>Setting $M = 5$, we solve for $t$:<br>\\begin{aligned} 5 &= 80\\mathrm{e}^{ -\\left( \\frac{ \\ln 2 }{ 10 } \\right)t } \\cr \\mathrm{e}^{ -\\left( \\frac{ \\ln 2 }{ 10 } \\right)t } &= \\dfrac{ 5 }{ 80 } = \\dfrac{ 1 }{ 16 } \\cr -\\left( \\dfrac{ \\ln 2 }{ 10 } \\right)t &= \\ln\\left( \\dfrac{ 1 }{ 16 } \\right) = -\\ln 16 = -4\\ln 2 \\cr \\left( \\dfrac{ \\ln 2 }{ 10 } \\right)t &= 4\\ln 2 \\cr t &= 40\\text{ hours} \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$30\\text{ hours}$",
                                "feedback": "This error occurs if you incorrectly calculate the decay factor or make an arithmetic error when solving for the time constant."
                        },
                        {
                                "ans": "$20\\text{ hours}$",
                                "feedback": "This is a common mistake resulting from dividing the initial mass directly by the mass difference without applying the exponential decay formula."
                        },
                        {
                                "ans": "$50\\text{ hours}$",
                                "feedback": "This is a calculation slip in evaluating the power of $2$ when equating $\\frac{1}{16}$ to $\\mathrm{e}^{-kt}$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Half-Life Constant",
                        "content": "Notice that since the substance halves every $10\\text{ hours}$ (from $80\\text{ g}$ to $40\\text{ g}$), the half-life is exactly $10\\text{ hours}$. To decay from $80\\text{ g}$ to $5\\text{ g}$, the substance must halve exactly $4$ times ($80 \\to 40 \\to 20 \\to 10 \\to 5$). Therefore, the total time is simply $4 \\times 10 = 40\\text{ hours}$. Recognizing half-lives is a great shortcut to verify your algebraic results!"
                }
        },
        {
                "id": "004478",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "A circular puddle of water on a flat concrete surface is evaporating in the sun. The initial radius of the puddle is $10\\text{ cm}$. After $5$ hours of evaporation, the radius of the puddle has reduced to $8\\text{ cm}$.<br><br>In a simple model, the rate of decrease of the radius of the puddle is inversely proportional to the radius.<br><br>Using this model, find the total time taken for the puddle to dry up completely (to the nearest minute).",
                "steps": [
                        "<strong>Step 1: Formulate the differential equation:</strong><br>Let $r$ represent the radius of the puddle (in cm) at time $t$ (in hours). Since the rate of decrease of the radius is inversely proportional to the radius itself, we write:<br>$$\\dfrac{ \\mathrm{d}r }{ \\mathrm{d}t } = -\\dfrac{ k }{ r }$$<br>where $k$ is a positive constant.",
                        "<strong>Step 2: Separate variables and integrate:</strong><br>Separating the variables and integrating both sides of the equation gives:<br>\\begin{aligned} r \\mathrm{d}r &= -k \\mathrm{d}t \\cr \\int r \\mathrm{d}r &= \\int -k \\mathrm{d}t \\cr \\dfrac{ 1 }{ 2 }r^2 &= -kt + C \\cr r^2 &= -2kt + 2C \\end{aligned}<br>Let $K = 2k$ and $c = 2C$ to simplify the equation:<br>$$r^2 = -Kt + c$$",
                        "<strong>Step 3: Apply the initial and boundary conditions:</strong><br>At $t = 0$, the initial radius is $r = 10$:<br>\\begin{aligned}\n10^2 &= -K( 0 ) + c \\cr\nc &= 100\n\\end{aligned}<br>This gives the equation:<br>$$r^2 = 100 - Kt$$<br>After $5$ hours, at $t = 5$, the radius is $r = 8$:<br>\\begin{aligned} 8^2 &= 100 - K( 5 ) \\cr 64 &= 100 - 5K \\cr 5K &= 36 \\cr K &= 7.2 \\end{aligned}<br>Thus, the equation linking the radius and time is:<br>$$r^2 = 100 - 7.2t$$",
                        "<strong>Step 4: Find the total time taken to dry up:</strong><br>The puddle dries up completely when $r = 0$:<br>\\begin{aligned} 0 &= 100 - 7.2t \\cr 7.2t &= 100 \\cr t &= \\dfrac{ 100 }{ 7.2 } = \\dfrac{ 125 }{ 9 }\\text{ hours} \\approx 13.89\\text{ hours} \\end{aligned}",
                        "<strong>Step 5: Convert the time into hours and minutes:</strong><br>We convert $\\dfrac{ 125 }{ 9 }$ hours into hours and minutes:<br>\\begin{aligned} t &= 13\\text{ hours} + \\dfrac{ 8 }{ 9 }\\text{ hours} \\cr &= 13\\text{ hours} + \\left( \\dfrac{ 8 }{ 9 } \\times 60 \\right)\\text{ minutes} \\cr &\\approx 13\\text{ hours and } 53\\text{ minutes} \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$13\\text{ hours and } 89\\text{ minutes}$",
                                "feedback": "This error occurs if you misinterpret the decimal output of $13.89$ hours directly as $13$ hours and $89$ minutes. Remember that $0.89$ hours must be converted to minutes by multiplying by $60$."
                        },
                        {
                                "ans": "$13\\text{ hours and } 30\\text{ minutes}$",
                                "feedback": "This is a rounding error or incorrect approximation made early in the calculations."
                        },
                        {
                                "ans": "$14\\text{ hours and } 12\\text{ minutes}$",
                                "feedback": "This is a calculation slip resulting from an incorrect constant of integration or a sign error during integration."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Early Rounding",
                        "content": "Avoid rounding values too early in your calculations. If you round $K = 7.2$ or $t \\approx 13.89\\text{ hours}$ too aggressively, you may introduce a cumulative rounding error when converting to minutes. Always keep exact fractions (like $\\dfrac{ 125 }{ 9 }$) until the very final conversion step."
                }
        },
        {
                "id": "004479",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "Water is leaking from a hole at the bottom of a cylindrical water tank. The depth of the water in the tank is $h$ metres at time $t$ minutes. Initially, the depth of the water is $9\\text{ m}$. After $12$ minutes, the depth of the water has reduced to $4\\text{ m}$.<br><br>In a simple model, the rate of decrease of the depth of the water is proportional to the square root of the depth.<br><br>Using this model, find the total time taken for the water tank to empty completely (to the nearest minute).",
                "steps": [
                        "<strong>Step 1: Formulate the differential equation:</strong><br>Since the rate of decrease of the depth $h$ is proportional to the square root of $h$, we write:<br>$$\\dfrac{ \\mathrm{d}h }{ \\mathrm{d}t } = -k\\sqrt{ h }$$<br>where $k$ is a positive constant.",
                        "<strong>Step 2: Separate variables and integrate:</strong><br>Separating the variables and integrating both sides of the equation gives:<br>\\begin{aligned} \\dfrac{ 1 }{ \\sqrt{ h } } \\mathrm{d}h &= -k \\mathrm{d}t \\cr \\int h^{ -1/2 } \\mathrm{d}h &= \\int -k \\mathrm{d}t \\cr 2\\sqrt{ h } &= -kt + C \\cr \\sqrt{ h } &= -\\dfrac{ k }{ 2 }t + \\dfrac{ C }{ 2 } \\end{aligned}",
                        "<strong>Step 3: Apply the initial and boundary conditions:</strong><br>At $t = 0$, the initial depth is $h = 9$:<br>\\begin{aligned}\n2\\sqrt{ 9 } &= -k( 0 ) + C \\cr\nC &= 6\n\\end{aligned}<br>This gives the equation:<br>\\begin{aligned}\n2\\sqrt{ h } &= 6 - kt \\cr\n\\sqrt{ h } &= 3 - \\dfrac{ k }{ 2 }t\n\\end{aligned}<br>After $12$ minutes, at $t = 12$, the depth is $h = 4$:<br>\\begin{aligned} \\sqrt{ 4 } &= 3 - \\dfrac{ k }{ 2 }( 12 ) \\cr 2 &= 3 - 6k \\cr 6k &= 1 \\cr k &= \\dfrac{ 1 }{ 6 } \\end{aligned}<br>Thus, the equation linking the depth and time is:<br>\\begin{aligned}\n\\sqrt{ h } &= 3 - \\dfrac{ t }{ 12 } \\cr\nh &= \\left( 3 - \\dfrac{ t }{ 12 } \\right)^2\n\\end{aligned}",
                        "<strong>Step 4: Find the total time taken to empty:</strong><br>The water tank is completely empty when $h = 0$:<br>\\begin{aligned} 3 - \\dfrac{ t }{ 12 } &= 0 \\cr \\dfrac{ t }{ 12 } &= 3 \\cr t &= 36\\text{ minutes} \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$24\\text{ minutes}$",
                                "feedback": "This error occurs if you use a linear model where the depth decreases at a constant rate, rather than using a model with a rate of decrease proportional to $\\sqrt{h}$."
                        },
                        {
                                "ans": "$30\\text{ minutes}$",
                                "feedback": "This is a calculation slip in integration, such as forgetting the factor of $2$ when integrating $h^{-1/2}$."
                        },
                        {
                                "ans": "$40\\text{ minutes}$",
                                "feedback": "This is a sign error or arithmetic slip when solving for the constants $C$ and $k$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Fractional Powers Integration",
                        "content": "Remember the power rule for integration: $\\int h^{-1/2} \\mathrm{d}h = \\dfrac{ h^{1/2} }{ 1/2 } = 2\\sqrt{h}$. A common trap is to forget the division by $1/2$ and write it as just $\\sqrt{h}$, which changes the final constants and yields incorrect empty times."
                }
        },
        {
                "id": "004480",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "A spherical raindrop is falling through a cloud and evaporating. The initial radius of the raindrop is $4\\text{ mm}$. Ten minutes later, the radius has reduced to $2\\text{ mm}$.<br><br>In a simple model, the rate of decrease of the radius of the raindrop is proportional to the radius.<br><br>Using this model, find the time taken for the radius of the raindrop to decrease to $0.5\\text{ mm}$ (to the nearest minute).",
                "steps": [
                        "<strong>Step 1: Formulate the differential equation:</strong><br>Let $r$ represent the radius of the raindrop (in mm) at time $t$ (in minutes). Since the rate of decrease of the radius is proportional to the radius itself, we write:<br>$$\\dfrac{ \\mathrm{d}r }{ \\mathrm{d}t } = -kr$$<br>where $k$ is a positive constant.",
                        "<strong>Step 2: Separate variables and integrate:</strong><br>Separating the variables and integrating both sides of the equation gives:<br>\\begin{aligned} \\dfrac{ 1 }{ r } \\mathrm{d}r &= -k \\mathrm{d}t \\cr \\int \\dfrac{ 1 }{ r } \\mathrm{d}r &= \\int -k \\mathrm{d}t \\cr \\ln r &= -kt + C \\cr r &= A\\mathrm{e}^{ -kt } \\end{aligned}<br>where $A = \\mathrm{e}^{ C }$ is a constant.",
                        "<strong>Step 3: Apply the initial and boundary conditions:</strong><br>At $t = 0$, the initial radius is $r = 4$:<br>\\begin{aligned}\n4 &= A\\mathrm{e}^{ -k( 0 ) } \\cr\nA &= 4\n\\end{aligned}<br>This gives the equation:<br>$$r = 4\\mathrm{e}^{ -kt }$$<br>Ten minutes later, at $t = 10$, the radius is $r = 2$:<br>\\begin{aligned} 2 &= 4\\mathrm{e}^{ -10k } \\cr \\mathrm{e}^{ -10k } &= \\dfrac{ 1 }{ 2 } \\cr -10k &= \\ln\\left( \\dfrac{ 1 }{ 2 } \\right) = -\\ln 2 \\cr k &= \\dfrac{ \\ln 2 }{ 10 } \\end{aligned}<br>Thus, the equation linking the radius and time is:<br>$$r = 4\\mathrm{e}^{ -\\left( \\frac{ \\ln 2 }{ 10 } \\right)t }$$",
                        "<strong>Step 4: Find the time taken to decrease to $0.5\\text{ mm}$:</strong><br>Setting $r = 0.5$, we solve for $t$:<br>\\begin{aligned} 0.5 &= 4\\mathrm{e}^{ -\\left( \\frac{ \\ln 2 }{ 10 } \\right)t } \\cr \\mathrm{e}^{ -\\left( \\frac{ \\ln 2 }{ 10 } \\right)t } &= \\dfrac{ 0.5 }{ 4 } = \\dfrac{ 1 }{ 8 } \\cr -\\left( \\dfrac{ \\ln 2 }{ 10 } \\right)t &= \\ln\\left( \\dfrac{ 1 }{ 8 } \\right) = -\\ln 8 = -3\\ln 2 \\cr \\left( \\dfrac{ \\ln 2 }{ 10 } \\right)t &= 3\\ln 2 \\cr t &= 30\\text{ minutes} \\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$20\\text{ minutes}$",
                                "feedback": "This error occurs if you use a linear model where the radius decreases by a constant $2\\text{ mm}$ every $10$ minutes (so it would reach $0\\text{ mm}$ at $20$ minutes). Exponential decay does not proceed at a constant rate."
                        },
                        {
                                "ans": "$25\\text{ minutes}$",
                                "feedback": "This is a rounding error or calculation slip when resolving the logarithms in Step 4."
                        },
                        {
                                "ans": "$35\\text{ minutes}$",
                                "feedback": "This is a sign error or algebraic slip when solving for the constants of integration $A$ or the constant $k$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Half-Life Properties",
                        "content": "Since the radius halves every $10\\text{ minutes}$ (from $4\\text{ mm}$ to $2\\text{ mm}$), the half-life of the radius is exactly $10\\text{ minutes}$. To decrease from $4\\text{ mm}$ to $0.5\\text{ mm}$, the radius must halve exactly $3$ times ($4 \\to 2 \\to 1 \\to 0.5$). The total time is simply $3 \\times 10 = 30\\text{ minutes}$. Understanding half-life shortcuts can save you precious time under exam pressure!"
                }
        },
        {
                "id": "004481",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods"
                ],
                "img": false,
                "question": "Given that:<br>$$\\dfrac{ 6x^2 + 11x + 1 }{ (x + 2)(2x + 1) } \\equiv A + \\dfrac{ B }{ x + 2 } + \\dfrac{ C }{ 2x + 1 }$$<br>Find the values of the constants $A$, $B$, and $C$.",
                "steps": [
                        "<strong>Step 1: Set up the algebraic identity:</strong><br>To express the improper fraction as partial fractions, we first multiply both sides of the identity by the common denominator $(x + 2)(2x + 1)$ to clear the fractions:<br>$$6x^2 + 11x + 1 \\equiv A(x + 2)(2x + 1) + B(2x + 1) + C(x + 2)$$",
                        "<strong>Step 2: Find the constant $A$ by comparing coefficients of $x^2$:</strong><br>Expanding the quadratic product gives $(x + 2)(2x + 1) = 2x^2 + 5x + 2$. Substituting this back into the identity:<br>$$6x^2 + 11x + 1 \\equiv A(2x^2 + 5x + 2) + B(2x + 1) + C(x + 2)$$<br>By equating the coefficients of $x^2$ on both sides:<br>\\begin{aligned} 2A &= 6 \\cr A &= 3 \\end{aligned}",
                        "<strong>Step 3: Collect coefficients to solve for $B$ and $C$:</strong><br>Now we expand and group the terms on the right-hand side by powers of $x$:<br>\\begin{aligned} 6x^2 + 11x + 1 &\\equiv 3(2x^2 + 5x + 2) + B(2x + 1) + C(x + 2) \\cr 6x^2 + 11x + 1 &\\equiv 6x^2 + 15x + 6 + 2Bx + B + Cx + 2C \\cr 11x + 1 &\\equiv (15 + 2B + C)x + (6 + B + 2C) \\end{aligned}<br>Equating the coefficients of $x$ and the constant terms yields two simultaneous equations:<br>\\begin{aligned} 15 + 2B + C &= 11 \\implies 2B + C = -4 \\cr 6 + B + 2C &= 1 \\implies B + 2C = -5 \\end{aligned}",
                        "<strong>Step 4: Solve the simultaneous equations:</strong><br>From the first equation, we can express $C$ in terms of $B$:<br>$$C = -4 - 2B$$<br>Substituting this into the second equation:<br>\\begin{aligned} B + 2( -4 - 2B ) &= -5 \\cr B - 8 - 4B &= -5 \\cr -3B &= 3 \\cr B &= -1 \\end{aligned}<br>Substituting $B = -1$ back to find $C$:<br>\\begin{aligned}\nC &= -4 - 2( -1 ) \\cr\n&= -2\n\\end{aligned}<br>Therefore, the constants are $A = 3$, $B = -1$, and $C = -2$."
                ],
                "pi_options": [
                        {
                                "ans": "$A = 3, B = 1, C = -2$",
                                "feedback": "This error occurs if you make a sign error when expanding or grouping coefficients, yielding $+1$ for $B$ instead of $-1$."
                        },
                        {
                                "ans": "$A = 3, B = -1, C = 2$",
                                "feedback": "This error is the result of a sign slip when substituting $B = -1$ back into the simultaneous equations to find $C$."
                        },
                        {
                                "ans": "$A = 6, B = -1, C = -2$",
                                "feedback": "This occurs if you equate $A$ directly to the leading coefficient of the numerator ($6$), forgetting that the leading term of the denominator is $2x^2$ (meaning $2A = 6$, so $A = 3$)."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Leading Coefficients in Improper Fractions",
                        "content": "When dealing with improper fractions where the numerator and denominator have the same degree, the constant term $A$ is simply the ratio of the leading coefficients. Here, the leading term of the numerator is $6x^2$ and the expanded leading term of the denominator is $2x^2$. Thus, $A = \\dfrac{ 6 }{ 2 } = 3$. Checking this ratio first is an incredibly fast way to eliminate incorrect options under pressure!"
                }
        },
        {
                "id": "004482",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods"
                ],
                "img": false,
                "question": "Given that:<br>$$\\dfrac{ 2x^2 - x + 5 }{ (x - 1)(x + 2) } \\equiv A + \\dfrac{ B }{ x - 1 } + \\dfrac{ C }{ x + 2 }$$<br>Find the values of the constants $A$, $B$, and $C$.",
                "steps": [
                        "<strong>Step 1: Set up the algebraic identity:</strong><br>Multiply both sides of the identity by the common denominator $(x - 1)(x + 2)$ to clear the fractions:<br>$$2x^2 - x + 5 \\equiv A(x - 1)(x + 2) + B(x + 2) + C(x - 1)$$",
                        "<strong>Step 2: Find the constant $A$ by comparing coefficients of $x^2$:</strong><br>Expanding the quadratic product gives $(x - 1)(x + 2) = x^2 + x - 2$. Substituting this back into the identity:<br>$$2x^2 - x + 5 \\equiv A(x^2 + x - 2) + B(x + 2) + C(x - 1)$$<br>By equating the coefficients of $x^2$ on both sides:<br>$$A = 2$$",
                        "<strong>Step 3: Collect coefficients to solve for $B$ and $C$:</strong><br>Now expand and group the terms on the right-hand side by powers of $x$:<br>\\begin{aligned} 2x^2 - x + 5 &\\equiv 2(x^2 + x - 2) + B(x + 2) + C(x - 1) \\cr 2x^2 - x + 5 &\\equiv 2x^2 + 2x - 4 + Bx + 2B + Cx - C \\cr -x + 5 &\\equiv (2 + B + C)x + (-4 + 2B - C) \\end{aligned}<br>Equating the coefficients of $x$ and the constant terms yields two simultaneous equations:<br>\\begin{aligned} 2 + B + C &= -1 \\implies B + C = -3 \\cr -4 + 2B - C &= 5 \\implies 2B - C = 9 \\end{aligned}",
                        "<strong>Step 4: Solve the simultaneous equations:</strong><br>From the first equation, we can express $C$ in terms of $B$:<br>$$C = -3 - B$$<br>Substituting this into the second equation:<br>\\begin{aligned} 2B - ( -3 - B ) &= 9 \\cr 2B + 3 + B &= 9 \\cr 3B &= 6 \\cr B &= 2 \\end{aligned}<br>Substituting $B = 2$ back to find $C$:<br>\\begin{aligned}\nC &= -3 - 2 \\cr\n&= -5\n\\end{aligned}<br>Therefore, the constants are $A = 2$, $B = 2$, and $C = -5$."
                ],
                "pi_options": [
                        {
                                "ans": "$A = 2, B = -2, C = -5$",
                                "feedback": "This error occurs if you make a sign error when solving the simultaneous equations, yielding $B = -2$ instead of $B = 2$."
                        },
                        {
                                "ans": "$A = 2, B = 2, C = 5$",
                                "feedback": "This is a sign slip in finding $C$ after solving for $B = 2$ (e.g., writing $C = -3 + 2 = -1$ or dropping the minus sign on $-5$)."
                        },
                        {
                                "ans": "$A = 1, B = 2, C = -5$",
                                "feedback": "This occurs if you assume the quotient constant $A$ is $1$ because there are no explicit multipliers on $(x-1)(x+2)$, forgetting that the numerator's leading term is $2x^2$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: The Substitution Method",
                        "content": "While equating coefficients is robust, you can also solve for $B$ and $C$ extremely quickly by substituting the roots of the denominator. Once you find $A = 2$, let $x = 1$ to eliminate $C$: $2( 1 )^2 - 1 + 5 = B( 3 ) \\implies 6 = 3B \\implies B = 2$. Then let $x = -2$ to eliminate $B$: $2( -2 )^2 - ( -2 ) + 5 = C( -3 ) \\implies 15 = -3C \\implies C = -5$. This is a great way to save time and double-check your simultaneous equation work!"
                }
        },
        {
                "id": "004483",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods"
                ],
                "img": false,
                "question": "Given that:<br>$$\\dfrac{ 4x^2 + 6x - 1 }{ (2x - 1)(x + 1) } \\equiv A + \\dfrac{ B }{ 2x - 1 } + \\dfrac{ C }{ x + 1 }$$<br>Find the values of the constants $A$, $B$, and $C$.",
                "steps": [
                        "<strong>Step 1: Set up the algebraic identity:</strong><br>Multiply both sides of the identity by the common denominator $(2x - 1)(x + 1)$ to clear the fractions:<br>$$4x^2 + 6x - 1 \\equiv A(2x - 1)(x + 1) + B(x + 1) + C(2x - 1)$$.",
                        "<strong>Step 2: Find the constant $A$ by comparing coefficients of $x^2$:</strong><br>Expanding the quadratic product gives $(2x - 1)(x + 1) = 2x^2 + x - 1$. Substituting this back into the identity:<br>$$4x^2 + 6x - 1 \\equiv A(2x^2 + x - 1) + B(x + 1) + C(2x - 1)$$<br>By equating the coefficients of $x^2$ on both sides:<br>\\begin{aligned} 2A &= 4 \\cr A &= 2 \\end{aligned}",
                        "<strong>Step 3: Collect coefficients to solve for $B$ and $C$:</strong><br>Now expand and group the terms on the right-hand side by powers of $x$:<br>\\begin{aligned} 4x^2 + 6x - 1 &\\equiv 2(2x^2 + x - 1) + B(x + 1) + C(2x - 1) \\cr 4x^2 + 6x - 1 &\\equiv 4x^2 + 2x - 2 + Bx + B + 2Cx - C \\cr 6x - 1 &\\equiv (2 + B + 2C)x + (-2 + B - C) \\end{aligned}<br>Equating the coefficients of $x$ and the constant terms yields two simultaneous equations:<br>\\begin{aligned} 2 + B + 2C &= 6 \\implies B + 2C = 4 \\cr -2 + B - C &= -1 \\implies B - C = 1 \\end{aligned}",
                        "<strong>Step 4: Solve the simultaneous equations:</strong><br>From the second equation, we can express $B$ in terms of $C$:<br>$$B = 1 + C$$<br>Substituting this into the first equation:<br>\\begin{aligned} ( 1 + C ) + 2C &= 4 \\cr 1 + 3C &= 4 \\cr 3C &= 3 \\cr C &= 1 \\end{aligned}<br>Substituting $C = 1$ back to find $B$:<br>\\begin{aligned}\nB &= 1 + 1 \\cr\n&= 2\n\\end{aligned}<br>Therefore, the constants are $A = 2$, $B = 2$, and $C = 1$."
                ],
                "pi_options": [
                        {
                                "ans": "$A = 2, B = -2, C = 1$",
                                "feedback": "This is a sign slip in solving the simultaneous equations, which incorrectly yields a negative value for $B$."
                        },
                        {
                                "ans": "$A = 2, B = 2, C = -1$",
                                "feedback": "This error occurs if you make a sign error when rearranging $B - C = 1$, such as writing $B = C - 1$ instead of $B = 1 + C$."
                        },
                        {
                                "ans": "$A = 4, B = 2, C = 1$",
                                "feedback": "This occurs if you set $A$ directly to the numerator's leading term $4$, forgetting that the expanded denominator's leading term is $2x^2$ (meaning $2A = 4$)."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Spotting Simple Eliminations",
                        "content": "When solving the simultaneous equations $B + 2C = 4$ and $B - C = 1$, you can eliminate $B$ immediately by subtracting the second equation from the first. This yields $( B + 2C ) - ( B - C ) = 4 - 1 \\implies 3C = 3 \\implies C = 1$. This direct subtraction eliminates the need to substitute, reducing the risk of a sign error!"
                }
        },
        {
                "id": "004484",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods"
                ],
                "img": false,
                "question": "Given that:<br>$$\\dfrac{ 3x^2 - 6x + 2 }{ (x - 4)(3x + 1) } \\equiv A + \\dfrac{ B }{ x - 4 } + \\dfrac{ C }{ 3x + 1 }$$<br>Find the values of the constants $A$, $B$, and $C$.",
                "steps": [
                        "<strong>Step 1: Set up the algebraic identity:</strong><br>Multiply both sides of the identity by the common denominator $(x - 4)(3x + 1)$ to clear the fractions:<br>$$3x^2 - 6x + 2 \\equiv A(x - 4)(3x + 1) + B(3x + 1) + C(x - 4)$$",
                        "<strong>Step 2: Find the constant $A$ by comparing coefficients of $x^2$:</strong><br>Expanding the quadratic product gives $(x - 4)(3x + 1) = 3x^2 - 11x - 4$. Substituting this back into the identity:<br>$$3x^2 - 6x + 2 \\equiv A(3x^2 - 11x - 4) + B(3x + 1) + C(x - 4)$$<br>By equating the coefficients of $x^2$ on both sides:<br>\\begin{aligned} 3A &= 3 \\cr A &= 1 \\end{aligned}",
                        "<strong>Step 3: Collect coefficients to solve for $B$ and $C$:</strong><br>Now expand and group the terms on the right-hand side by powers of $x$:<br>\\begin{aligned} 3x^2 - 6x + 2 &\\equiv 1(3x^2 - 11x - 4) + B(3x + 1) + C(x - 4) \\cr 3x^2 - 6x + 2 &\\equiv 3x^2 - 11x - 4 + 3Bx + B + Cx - 4C \\cr -6x + 2 &\\equiv (-11 + 3B + C)x + (-4 + B - 4C) \\end{aligned}<br>Equating the coefficients of $x$ and the constant terms yields two simultaneous equations:<br>\\begin{aligned} -11 + 3B + C &= -6 \\implies 3B + C = 5 \\cr -4 + B - 4C &= 2 \\implies B - 4C = 6 \\end{aligned}",
                        "<strong>Step 4: Solve the simultaneous equations:</strong><br>From the first equation, we can express $C$ in terms of $B$:<br>$$C = 5 - 3B$$<br>Substituting this into the second equation:<br>\\begin{aligned} B - 4( 5 - 3B ) &= 6 \\cr B - 20 + 12B &= 6 \\cr 13B &= 26 \\cr B &= 2 \\end{aligned}<br>Substituting $B = 2$ back to find $C$:<br>\\begin{aligned}\nC &= 5 - 3( 2 ) \\cr\n&= -1\n\\end{aligned}<br>Therefore, the constants are $A = 1$, $B = 2$, and $C = -1$."
                ],
                "pi_options": [
                        {
                                "ans": "$A = 1, B = -2, C = -1$",
                                "feedback": "This is a sign error in solving the simultaneous equations, which incorrectly yields $B = -2$ instead of $B = 2$."
                        },
                        {
                                "ans": "$A = 1, B = 2, C = 1$",
                                "feedback": "This error occurs if you make a sign error when substituting $B = 2$ back to find $C$ (such as writing $C = 5 + 6 = 11$ or $C = 1$)."
                        },
                        {
                                "ans": "$A = 3, B = 2, C = -1$",
                                "feedback": "This occurs if you set $A$ directly to the numerator's leading term $3$, forgetting that the denominator's expanded leading term is $3x^2$ (leading to $3A = 3$, so $A = 1$)."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Fractional Roots Substitution",
                        "content": "While substituting $x = 4$ is very straightforward and yields $B = 2$ directly, substituting $x = -\\dfrac{ 1 }{ 3 }$ requires careful fraction arithmetic. To avoid fractional errors, once you have solved for $B = 2$ using $x = 4$, you can simply substitute $x = 0$ as a very easy test value to find $C$: $2 = -4( 1 ) + B( 1 ) + C( -4 ) \\implies 2 = -4 + 2 - 4C \\implies 4 = -4C \\implies C = -1$."
                }
        },
        {
                "id": "004485",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Algebraic Methods",
                "subtopic": [
                        "Algebraic Methods"
                ],
                "img": false,
                "question": "Given that:<br>$$\\dfrac{ 6x^2 - 16x + 12 }{ (x - 2)(3x - 2) } \\equiv A + \\dfrac{ B }{ x - 2 } + \\dfrac{ C }{ 3x - 2 }$$<br>Find the values of the constants $A$, $B$, and $C$.",
                "steps": [
                        "<strong>Step 1: Set up the algebraic identity:</strong><br>Multiply both sides of the identity by the common denominator $(x - 2)(3x - 2)$ to clear the fractions:<br>$$6x^2 - 16x + 12 \\equiv A(x - 2)(3x - 2) + B(3x - 2) + C(x - 2)$$",
                        "<strong>Step 2: Find the constant $A$ by comparing coefficients of $x^2$:</strong><br>Expanding the quadratic product gives $(x - 2)(3x - 2) = 3x^2 - 8x + 4$. Substituting this back into the identity:<br>$$6x^2 - 16x + 12 \\equiv A(3x^2 - 8x + 4) + B(3x - 2) + C(x - 2)$$<br>By equating the coefficients of $x^2$ on both sides:<br>\\begin{aligned} 3A &= 6 \\cr A &= 2 \\end{aligned}",
                        "<strong>Step 3: Collect coefficients to solve for $B$ and $C$:</strong><br>Now expand and group the terms on the right-hand side by powers of $x$:<br>\\begin{aligned} 6x^2 - 16x + 12 &\\equiv 2(3x^2 - 8x + 4) + B(3x - 2) + C(x - 2) \\cr 6x^2 - 16x + 12 &\\equiv 6x^2 - 16x + 8 + 3Bx - 2B + Cx - 2C \\cr -16x + 12 &\\equiv (-16 + 3B + C)x + (8 - 2B - 2C) \\end{aligned}<br>Equating the coefficients of $x$ and the constant terms yields two simultaneous equations:<br>\\begin{aligned} -16 + 3B + C &= -16 \\implies 3B + C = 0 \\cr 8 - 2B - 2C &= 12 \\implies -2B - 2C = 4 \\implies B + C = -2 \\end{aligned}",
                        "<strong>Step 4: Solve the simultaneous equations:</strong><br>From the first equation, we can express $C$ in terms of $B$:<br>$$C = -3B$$<br>Substituting this into the simplified second equation:<br>\\begin{aligned} B + ( -3B ) &= -2 \\cr -2B &= -2 \\cr B &= 1 \\end{aligned}<br>Substituting $B = 1$ back to find $C$:<br>\\begin{aligned}\nC &= -3( 1 ) \\cr\n&= -3\n\\end{aligned}<br>Therefore, the constants are $A = 2$, $B = 1$, and $C = -3$."
                ],
                "pi_options": [
                        {
                                "ans": "$A = 2, B = -1, C = -3$",
                                "feedback": "This is a sign slip in solving the simultaneous equations, which incorrectly yields $B = -1$ instead of $B = 1$."
                        },
                        {
                                "ans": "$A = 2, B = 1, C = 3$",
                                "feedback": "This error occurs if you drop the negative sign when substituting $B = 1$ back to find $C$, yielding $+3$ instead of $-3$."
                        },
                        {
                                "ans": "$A = 6, B = 1, C = -3$",
                                "feedback": "This occurs if you set $A$ directly to the numerator's leading term $6$, forgetting that the expanded denominator's leading term is $3x^2$ (meaning $3A = 6$, so $A = 2$)."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Simplifying Simultaneous Equations",
                        "content": "Notice how the equation $-2B - 2C = 4$ was simplified to $B + C = -2$ by dividing all terms by $-2$. Always look for common factors in your simultaneous equations before solving. Simplifying coefficients first prevents trivial arithmetic errors and makes substitution or elimination significantly easier."
                }
        },
        {
                "id": "004486",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Trigonometry",
                "topic": "Trigonometric Identities",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "<strong>(a)</strong> Prove that:<br>$$1 + \\cos 2\\theta \\equiv \\cot \\theta \\sin 2\\theta$$<br><strong>(b)</strong> Hence solve, for $-\\dfrac{ \\pi }{ 2 } < x < \\dfrac{ \\pi }{ 2 }$ where $x \\neq 0$, the equation:<br>$$(\\csc^2 x - 4)(1 + \\cos 2x) = 2\\cot^2 x \\sin 2x$$<br>Give your answers to 3 decimal places where appropriate.",
                "steps": [
                        "<strong>(a) Proving the identity:</strong><br>We start by expanding the right-hand side (RHS) of the identity using the definitions $\\cot \\theta = \\dfrac{ \\cos \\theta }{ \\sin \\theta }$ and $\\sin 2\\theta = 2\\sin \\theta \\cos \\theta$:<br>\\begin{aligned} \\cot \\theta \\sin 2\\theta &= \\dfrac{ \\cos \\theta }{ \\sin \\theta } ( 2\\sin \\theta \\cos \\theta ) \\cr &= 2\\cos^2 \\theta \\end{aligned}<br>Now we expand the left-hand side (LHS) of the identity using the double angle identity $\\cos 2\\theta = \\cos^2 \\theta - \\sin^2 \\theta$ and the Pythagorean identity $\\sin^2 \\theta = 1 - \\cos^2 \\theta$:<br>\\begin{aligned} 1 + \\cos 2\\theta &= 1 + ( \\cos^2 \\theta - \\sin^2 \\theta ) \\cr &= 1 + \\cos^2 \\theta - ( 1 - \\cos^2 \\theta ) \\cr &= 2\\cos^2 \\theta \\end{aligned}<br>Since LHS = RHS, the identity is proven: $1 + \\cos 2\\theta \\equiv \\cot \\theta \\sin 2\\theta$.",
                        "<strong>(b) Solving the equation:</strong><br>We substitute our proven identity $1 + \\cos 2x = \\cot x \\sin 2x$ into the given equation:<br>\\begin{aligned} (\\csc^2 x - 4)(1 + \\cos 2x) &= 2\\cot^2 x \\sin 2x \\cr (\\csc^2 x - 4)\\cot x \\sin 2x &= 2\\cot^2 x \\sin 2x \\end{aligned}<br>Since $x \\neq 0$ and $-\\dfrac{ \\pi }{ 2 } < x < \\dfrac{ \\pi }{ 2 }$, we know that $\\sin 2x \\neq 0$ and $\\cot x \\neq 0$. Therefore, we can safely divide both sides of the equation by $\\cot x \\sin 2x$:<br>$$\\csc^2 x - 4 = 2\\cot x$$",
                        "Using the trigonometric identity $\\csc^2 x = 1 + \\cot^2 x$, we rewrite the equation in terms of $\\cot x$:<br>\\begin{aligned} 1 + \\cot^2 x - 4 &= 2\\cot x \\cr \\cot^2 x - 2\\cot x - 3 &= 0 \\end{aligned}<br>Factorising this quadratic equation gives:<br>\\begin{aligned} ( \\cot x - 3 )( \\cot x + 1 ) &= 0 \\cr \\cot x = 3 \\quad &\\text{or} \\quad \\cot x = -1 \\end{aligned}",
                        "Solving for $x$ by rewriting in terms of $\\tan x$:<br>\\begin{aligned} \\cot x = 3 &\\implies \\tan x = \\dfrac{ 1 }{ 3 } \\implies x = \\arctan\\left( \\dfrac{ 1 }{ 3 } \\right) \\approx 0.322\\text{ radians} \\cr \\cot x = -1 &\\implies \\tan x = -1 \\implies x = \\arctan( -1 ) = -\\dfrac{ \\pi }{ 4 } \\approx -0.785\\text{ radians} \\end{aligned}<br>Therefore, the solutions are $x \\approx 0.322\\text{ radians}$ and $x \\approx -0.785\\text{ radians}$."
                ],
                "pi_options": [
                        {
                                "ans": "$x \\approx -0.322\\text{ radians}, x \\approx 0.785\\text{ radians}$",
                                "feedback": "This error occurs if you make a sign error when solving the factorised equations, solving $\\cot x = -3$ and $\\cot x = 1$ instead."
                        },
                        {
                                "ans": "$x \\approx 0.322\\text{ radians}, x \\approx -0.785\\text{ radians}, x = 0$",
                                "feedback": "This error is the result of failing to identify that $x = 0$ must be strictly excluded from the domain because the original function contains the term $\\csc^2 x$, which is undefined at $x = 0$."
                        },
                        {
                                "ans": "$x \\approx 1.249\\text{ radians}, x \\approx -0.785\\text{ radians}$",
                                "feedback": "This occurs if you forget to invert the cotangent when solving $\\cot x = 3$, solving $\\tan x = 3$ instead of $\\tan x = \\dfrac{ 1 }{ 3 }$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Excluded Domain Values",
                        "content": "Always pay close attention to any restriction statements like $x \\neq 0$ or open intervals. Since the original equation features the term $\\csc^2 x$, the function is undefined at $x = 0$ ($1 / \\sin^2( 0 )$ is undefined). Even if $x = 0$ appears as a potential algebraic solution during factoring, it must be strictly excluded from the final solution set."
                }
        },
        {
                "id": "004487",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Trigonometry",
                "topic": "Trigonometric Identities",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "<strong>(a)</strong> Prove that:<br>$$1 - \\cos 2\\theta \\equiv \\tan \\theta \\sin 2\\theta$$<br><strong>(b)</strong> Hence solve, for $-\\dfrac{ \\pi }{ 2 } < x < \\dfrac{ \\pi }{ 2 }$, the equation:<br>$$(\\sec^2 x - 3)(1 - \\cos 2x) = 3\\tan^2 x \\sin 2x$$<br>Give your answers to 3 decimal places where appropriate.",
                "steps": [
                        "<strong>(a) Proving the identity:</strong><br>We start by expanding the right-hand side (RHS) of the identity using the definitions $\\tan \\theta = \\dfrac{ \\sin \\theta }{ \\cos \\theta }$ and $\\sin 2\\theta = 2\\sin \\theta \\cos \\theta$:<br>\\begin{aligned} \\tan \\theta \\sin 2\\theta &= \\dfrac{ \\sin \\theta }{ \\cos \\theta } ( 2\\sin \\theta \\cos \\theta ) \\cr &= 2\\sin^2 \\theta \\end{aligned}<br>Now we expand the left-hand side (LHS) using the double angle identity $\\cos 2\\theta = \\cos^2 \\theta - \\sin^2 \\theta$ and the Pythagorean identity $\\cos^2 \\theta = 1 - \\sin^2 \\theta$:<br>\\begin{aligned} 1 - \\cos 2\\theta &= 1 - ( \\cos^2 \\theta - \\sin^2 \\theta ) \\cr &= 1 - \\cos^2 \\theta + \\sin^2 \\theta \\cr &= ( 1 - \\cos^2 \\theta ) + \\sin^2 \\theta \\cr &= \\sin^2 \\theta + \\sin^2 \\theta \\cr &= 2\\sin^2 \\theta \\end{aligned}<br>Since LHS = RHS, the identity is proven: $1 - \\cos 2\\theta \\equiv \\tan \\theta \\sin 2\\theta$.",
                        "<strong>(b) Solving the equation:</strong><br>We substitute our proven identity $1 - \\cos 2x = \\tan x \\sin 2x$ into the given equation:<br>\\begin{aligned} (\\sec^2 x - 3)(1 - \\cos 2x) &= 3\\tan^2 x \\sin 2x \\cr (\\sec^2 x - 3)\\tan x \\sin 2x &= 3\\tan^2 x \\sin 2x \\cr (\\sec^2 x - 3)\\tan x \\sin 2x - 3\\tan^2 x \\sin 2x &= 0 \\cr \\tan x \\sin 2x [ (\\sec^2 x - 3) - 3\\tan x ] &= 0 \\end{aligned}",
                        "This gives two possible cases to solve:<br><strong>Case 1:</strong> $\\tan x \\sin 2x = 0$<br>Since $\\sin 2x = 2\\sin x \\cos x$, this simplifies to $2\\sin^2 x = 0 \\implies \\sin x = 0$, which yields:<br>$$x = 0\\text{ radians}$$<br>This solution lies within our given interval $-\\dfrac{ \\pi }{ 2 } < x < \\dfrac{ \\pi }{ 2 }$.",
                        "<strong>Case 2:</strong> $(\\sec^2 x - 3) - 3\\tan x = 0$<br>Using the identity $\\sec^2 x = 1 + \\tan^2 x$, we rewrite this in terms of $\\tan x$:<br>\\begin{aligned} 1 + \\tan^2 x - 3 - 3\\tan x &= 0 \\cr \\tan^2 x - 3\\tan x - 2 &= 0 \\end{aligned}<br>Solving this quadratic in $\\tan x$ using the quadratic formula:<br>\\begin{aligned} \\tan x &= \\dfrac{ 3 \\pm \\sqrt{ ( -3 )^2 - 4( 1 )( -2 ) } }{ 2 } \\cr \\tan x &= \\dfrac{ 3 \\pm \\sqrt{ 17 } }{ 2 } \\end{aligned}",
                        "Calculating the numerical values for $x$ in the interval $-\\dfrac{ \\pi }{ 2 } < x < \\dfrac{ \\pi }{ 2 }$:<br>\\begin{aligned} \\tan x = \\dfrac{ 3 + \\sqrt{ 17 } }{ 2 } \\approx 3.562 &\\implies x = \\arctan( 3.562 ) \\approx 1.297\\text{ radians} \\cr \\tan x = \\dfrac{ 3 - \\sqrt{ 17 } }{ 2 } \\approx -0.562 &\\implies x = \\arctan( -0.562 ) \\approx -0.512\\text{ radians} \\end{aligned}<br>Therefore, the solutions are $x = 0\\text{ radians}$, $x \\approx 1.297\\text{ radians}$, and $x \\approx -0.512\\text{ radians}$."
                ],
                "pi_options": [
                        {
                                "ans": "$x = 0\\text{ radians}, x \\approx 1.300\\text{ radians}, x \\approx -0.510\\text{ radians}$",
                                "feedback": "This is a subtle intermediate rounding error where angles are calculated by rounding the decimal values of $\\tan x$ to fewer decimal places before applying the inverse tangent."
                        },
                        {
                                "ans": "$x \\approx 1.297\\text{ radians}, x \\approx -0.512\\text{ radians}$",
                                "feedback": "This error occurs if you divide both sides of the equation directly by the common factor $\\tan x \\sin 2x$, completely deleting the valid solution branch where $\\tan x \\sin 2x = 0 \\implies x = 0$."
                        },
                        {
                                "ans": "$x = 0\\text{ radians}, x \\approx -1.297\\text{ radians}, x \\approx 0.512\\text{ radians}$",
                                "feedback": "This is a sign error in solving the quadratic equation or applying the inverse tangent function."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Retaining Null Factor Solutions",
                        "content": "A very common trap when solving equations like $A \\cdot B = C \\cdot B$ is dividing both sides directly by $B$ without consideration. Dividing by $B$ completely deletes the solution branch where $B = 0$. Instead, always factorise the equation to the form $B( A - C ) = 0$ to ensure you retain the null solution branch (here, $\\tan x \\sin 2x = 0 \\implies x = 0$)."
                }
        },
        {
                "id": "004488",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Trigonometry",
                "topic": "Trigonometric Identities",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "<strong>(a)</strong> Prove that:<br>$$1 + \\cos 2\\theta \\equiv \\cot \\theta \\sin 2\\theta$$<br><strong>(b)</strong> Hence solve, for $-\\dfrac{ \\pi }{ 2 } < x < \\dfrac{ \\pi }{ 2 }$ where $x \\neq 0$, the equation:<br>$$(\\csc^2 x - 5)(1 + \\cos 2x) = 2\\cot^2 x \\sin 2x$$<br>Give your answers to 3 decimal places where appropriate.",
                "steps": [
                        "<strong>(a) Proving the identity:</strong><br>We expand the right-hand side (RHS) of the identity using the definitions $\\cot \\theta = \\dfrac{ \\cos \\theta }{ \\sin \\theta }$ and $\\sin 2\\theta = 2\\sin \\theta \\cos \\theta$:<br>\\begin{aligned} \\cot \\theta \\sin 2\\theta &= \\dfrac{ \\cos \\theta }{ \\sin \\theta } ( 2\\sin \\theta \\cos \\theta ) \\cr &= 2\\cos^2 \\theta \\end{aligned}<br>Now we expand the left-hand side (LHS) of the identity using the double angle identity $\\cos 2\\theta = \\cos^2 \\theta - \\sin^2 \\theta$ and the Pythagorean identity $\\sin^2 \\theta = 1 - \\cos^2 \\theta$:<br>\\begin{aligned} 1 + \\cos 2\\theta &= 1 + ( \\cos^2 \\theta - \\sin^2 \\theta ) \\cr &= 1 + \\cos^2 \\theta - ( 1 - \\cos^2 \\theta ) \\cr &= 2\\cos^2 \\theta \\end{aligned}<br>Since LHS = RHS, the identity is proven: $1 + \\cos 2\\theta \\equiv \\cot \\theta \\sin 2\\theta$.",
                        "<strong>(b) Solving the equation:</strong><br>We substitute our proven identity $1 + \\cos 2x = \\cot x \\sin 2x$ into the given equation:<br>\\begin{aligned} (\\csc^2 x - 5)(1 + \\cos 2x) &= 2\\cot^2 x \\sin 2x \\cr (\\csc^2 x - 5)\\cot x \\sin 2x &= 2\\cot^2 x \\sin 2x \\end{aligned}<br>Since $x \\neq 0$ and $-\\dfrac{ \\pi }{ 2 } < x < \\dfrac{ \\pi }{ 2 }$, we know that $\\sin 2x \\neq 0$ and $\\cot x \\neq 0$. Therefore, we can safely divide both sides of the equation by $\\cot x \\sin 2x$:<br>$$\\csc^2 x - 5 = 2\\cot x$$",
                        "Using the trigonometric identity $\\csc^2 x = 1 + \\cot^2 x$, we rewrite the equation in terms of $\\cot x$:<br>\\begin{aligned} 1 + \\cot^2 x - 5 &= 2\\cot x \\cr \\cot^2 x - 2\\cot x - 4 &= 0 \\end{aligned}<br>Solving this quadratic in $\\cot x$ using the quadratic formula:<br>\\begin{aligned} \\cot x &= \\dfrac{ 2 \\pm \\sqrt{ ( -2 )^2 - 4( 1 )( -4 ) } }{ 2 } \\cr \\cot x &= \\dfrac{ 2 \\pm \\sqrt{ 20 } }{ 2 } = 1 \\pm \\sqrt{ 5 } \\end{aligned}",
                        "Solving for $x$ by rewriting in terms of $\\tan x$:<br><strong>Case 1:</strong> $\\cot x = 1 + \\sqrt{ 5 } \\approx 3.236 \\implies \\tan x \\approx 0.309 \\implies x = \\arctan( 0.309 ) \\approx 0.300\\text{ radians}$<br><br><strong>Case 2:</strong> $\\cot x = 1 - \\sqrt{ 5 } \\approx -1.236 \\implies \\tan x \\approx -0.809 \\implies x = \\arctan( -0.809 ) \\approx -0.681\\text{ radians}$<br><br>Therefore, the solutions are $x \\approx 0.300\\text{ radians}$ and $x \\approx -0.681\\text{ radians}$."
                ],
                "pi_options": [
                        {
                                "ans": "$x \\approx 0.300\\text{ radians}, x \\approx -0.688\\text{ radians}$",
                                "feedback": "This is a rounding error that occurs if you convert the intermediate quadratic roots of $\\cot x$ into rounded degree values before applying the conversion to radians."
                        },
                        {
                                "ans": "$x \\approx -0.300\\text{ radians}, x \\approx 0.681\\text{ radians}$",
                                "feedback": "This error occurs if you make a sign error when solving the quadratic equation or factorising for the roots."
                        },
                        {
                                "ans": "$x \\approx 0.300\\text{ radians}, x \\approx -0.681\\text{ radians}, x = 0$",
                                "feedback": "This error is the result of failing to exclude $x = 0$ from the final solution set, which is outside the domain of definition of $\\csc^2 x$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Direct Reciprocal Solving",
                        "content": "When you have $\\cot x = K$, you can immediately find $x$ by evaluating $\\arctan\\left( \\dfrac{ 1 }{ K } \\right)$ on your calculator. This avoids rounding $\\cot x$ to a decimal first, which prevents intermediate rounding slips and ensures your final answer is perfectly accurate to 3 d.p."
                }
        },
        {
                "id": "004489",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Trigonometry",
                "topic": "Trigonometric Identities",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "<strong>(a)</strong> Prove that:<br>$$1 - \\cos 2\\theta \\equiv \\tan \\theta \\sin 2\\theta$$<br><strong>(b)</strong> Hence solve, for $-\\dfrac{ \\pi }{ 2 } < x < \\dfrac{ \\pi }{ 2 }$, the equation:<br>$$(\\sec^2 x - 6)(1 - \\cos 2x) = 2\\tan^2 x \\sin 2x$$<br>Give your answers to 3 decimal places where appropriate.",
                "steps": [
                        "<strong>(a) Proving the identity:</strong><br>We start by expanding the right-hand side (RHS) of the identity using the definitions $\\tan \\theta = \\dfrac{ \\sin \\theta }{ \\cos \\theta }$ and $\\sin 2\\theta = 2\\sin \\theta \\cos \\theta$:<br>\\begin{aligned} \\tan \\theta \\sin 2\\theta &= \\dfrac{ \\sin \\theta }{ \\cos \\theta } ( 2\\sin \\theta \\cos \\theta ) \\cr &= 2\\sin^2 \\theta \\end{aligned}<br>Now we expand the left-hand side (LHS) using the double angle identity $\\cos 2\\theta = \\cos^2 \\theta - \\sin^2 \\theta$ and the Pythagorean identity $\\cos^2 \\theta = 1 - \\sin^2 \\theta$:<br>\\begin{aligned} 1 - \\cos 2\\theta &= 1 - ( \\cos^2 \\theta - \\sin^2 \\theta ) \\cr &= 1 - \\cos^2 \\theta + \\sin^2 \\theta \\cr &= ( 1 - \\cos^2 \\theta ) + \\sin^2 \\theta \\cr &= \\sin^2 \\theta + \\sin^2 \\theta \\cr &= 2\\sin^2 \\theta \\end{aligned}<br>Since LHS = RHS, the identity is proven: $1 - \\cos 2\\theta \\equiv \\tan \\theta \\sin 2\\theta$.",
                        "<strong>(b) Solving the equation:</strong><br>We substitute our proven identity $1 - \\cos 2x = \\tan x \\sin 2x$ into the given equation:<br>\\begin{aligned} (\\sec^2 x - 6)(1 - \\cos 2x) &= 2\\tan^2 x \\sin 2x \\cr (\\sec^2 x - 6)\\tan x \\sin 2x &= 2\\tan^2 x \\sin 2x \\cr (\\sec^2 x - 6)\\tan x \\sin 2x - 2\\tan^2 x \\sin 2x &= 0 \\cr \\tan x \\sin 2x [ (\\sec^2 x - 6) - 2\\tan x ] &= 0 \\end{aligned}",
                        "This gives two possible cases to solve:<br><strong>Case 1:</strong> $\\tan x \\sin 2x = 0$<br>Since $\\sin 2x = 2\\sin x \\cos x$, this simplifies to $2\\sin^2 x = 0 \\implies \\sin x = 0$, which yields:<br>$$x = 0\\text{ radians}$$<br>This solution lies within our given interval $-\\dfrac{ \\pi }{ 2 } < x < \\dfrac{ \\pi }{ 2 }$.",
                        "<strong>Case 2:</strong> $(\\sec^2 x - 6) - 2\\tan x = 0$<br>Using the identity $\\sec^2 x = 1 + \\tan^2 x$, we rewrite this in terms of $\\tan x$:<br>\\begin{aligned} 1 + \\tan^2 x - 6 - 2\\tan x &= 0 \\cr \\tan^2 x - 2\\tan x - 5 &= 0 \\end{aligned}<br>Solving this quadratic in $\\tan x$ using the quadratic formula:<br>\\begin{aligned} \\tan x &= \\dfrac{ 2 \\pm \\sqrt{ ( -2 )^2 - 4( 1 )( -5 ) } }{ 2 } \\cr \\tan x &= \\dfrac{ 2 \\pm \\sqrt{ 24 } }{ 2 } = 1 \\pm \\sqrt{ 6 } \\end{aligned}",
                        "Calculating the numerical values for $x$ in the interval $-\\dfrac{ \\pi }{ 2 } < x < \\dfrac{ \\pi }{ 2 }$:<br>\\begin{aligned} \\tan x = 1 + \\sqrt{ 6 } \\approx 3.449 &\\implies x = \\arctan( 3.449 ) \\approx 1.289\\text{ radians} \\cr \\tan x = 1 - \\sqrt{ 6 } \\approx -1.449 &\\implies x = \\arctan( -1.449 ) \\approx -0.967\\text{ radians} \\end{aligned}<br>Therefore, the solutions are $x = 0\\text{ radians}$, $x \\approx 1.289\\text{ radians}$, and $x \\approx -0.967\\text{ radians}$."
                ],
                "pi_options": [
                        {
                                "ans": "$x = 0\\text{ radians}, x \\approx 1.290\\text{ radians}, x \\approx -0.970\\text{ radians}$",
                                "feedback": "This is an intermediate rounding error that occurs if you convert the quadratic roots of $\\tan x$ into rounded degree values before applying the conversion to radians."
                        },
                        {
                                "ans": "$x \\approx 1.289\\text{ radians}, x \\approx -0.967\\text{ radians}$",
                                "feedback": "This error occurs if you divide both sides of the equation directly by the common factor $\\tan x \\sin 2x$, completely deleting the valid solution branch where $\\tan x \\sin 2x = 0 \\implies x = 0$."
                        },
                        {
                                "ans": "$x = 0\\text{ radians}, x \\approx -1.289\\text{ radians}, x \\approx 0.967\\text{ radians}$",
                                "feedback": "This is a sign error in solving the quadratic equation or factorising for the roots."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Quadratic Equation Discriminant Check",
                        "content": "When using the quadratic formula to solve $\\tan^2 x - 2\\tan x - 5 = 0$, verify your discriminant $(\\Delta = b^2 - 4ac)$ very carefully. It evaluates to $( -2 )^2 - 4( 1 )( -5 ) = 4 + 20 = 24$. Since $\\Delta > 0$, we have two distinct real values for $\\tan x$, both of which correspond to valid angles in the interval."
                }
        },
        {
                "id": "004490",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Trigonometry",
                "topic": "Trigonometric Identities",
                "subtopic": [
                        "Trigonometry"
                ],
                "img": false,
                "question": "<strong>(a)</strong> Prove that:<br>$$1 + \\cos 2\\theta \\equiv \\cot \\theta \\sin 2\\theta$$<br><strong>(b)</strong> Hence solve, for $-\\dfrac{ \\pi }{ 2 } < x < \\dfrac{ \\pi }{ 2 }$ where $x \\neq 0$, the equation:<br>$$(\\csc^2 x - 3)(1 + \\cos 2x) = 3\\cot^2 x \\sin 2x$$<br>Give your answers to 3 decimal places where appropriate.",
                "steps": [
                        "<strong>(a) Proving the identity:</strong><br>We expand the right-hand side (RHS) of the identity using the definitions $\\cot \\theta = \\dfrac{ \\cos \\theta }{ \\sin \\theta }$ and $\\sin 2\\theta = 2\\sin \\theta \\cos \\theta$:<br>\\begin{aligned} \\cot \\theta \\sin 2\\theta &= \\dfrac{ \\cos \\theta }{ \\sin \\theta } ( 2\\sin \\theta \\cos \\theta ) \\cr &= 2\\cos^2 \\theta \\end{aligned}<br>Now we expand the left-hand side (LHS) of the identity using the double angle identity $\\cos 2\\theta = \\cos^2 \\theta - \\sin^2 \\theta$ and the Pythagorean identity $\\sin^2 \\theta = 1 - \\cos^2 \\theta$:<br>\\begin{aligned} 1 + \\cos 2\\theta &= 1 + ( \\cos^2 \\theta - \\sin^2 \\theta ) \\cr &= 1 + \\cos^2 \\theta - ( 1 - \\cos^2 \\theta ) \\cr &= 2\\cos^2 \\theta \\end{aligned}<br>Since LHS = RHS, the identity is proven: $1 + \\cos 2\\theta \\equiv \\cot \\theta \\sin 2\\theta$.",
                        "<strong>(b) Solving the equation:</strong><br>We substitute our proven identity $1 + \\cos 2x = \\cot x \\sin 2x$ into the given equation:<br>\\begin{aligned} (\\csc^2 x - 3)(1 + \\cos 2x) &= 3\\cot^2 x \\sin 2x \\cr (\\csc^2 x - 3)\\cot x \\sin 2x &= 3\\cot^2 x \\sin 2x \\end{aligned}<br>Since $x \\neq 0$ and $-\\dfrac{ \\pi }{ 2 } < x < \\dfrac{ \\pi }{ 2 }$, we know that $\\sin 2x \\neq 0$ and $\\cot x \\neq 0$. Therefore, we can safely divide both sides of the equation by $\\cot x \\sin 2x$:<br>$$\\csc^2 x - 3 = 3\\cot x$$",
                        "Using the trigonometric identity $\\csc^2 x = 1 + \\cot^2 x$, we rewrite the equation in terms of $\\cot x$:<br>\\begin{aligned} 1 + \\cot^2 x - 3 &= 3\\cot x \\cr \\cot^2 x - 3\\cot x - 2 &= 0 \\end{aligned}<br>Solving this quadratic in $\\cot x$ using the quadratic formula:<br>\\begin{aligned} \\cot x &= \\dfrac{ 3 \\pm \\sqrt{ ( -3 )^2 - 4( 1 )( -2 ) } }{ 2 } \\cr \\cot x &= \\dfrac{ 3 \\pm \\sqrt{ 17 } }{ 2 } \\end{aligned}",
                        "Solving for $x$ by rewriting in terms of $\\tan x$:<br><strong>Case 1:</strong> $\\cot x = \\dfrac{ 3 + \\sqrt{ 17 } }{ 2 } \\approx 3.562 \\implies \\tan x \\approx 0.281 \\implies x = \\arctan( 0.281 ) \\approx 0.274\\text{ radians}$<br><br><strong>Case 2:</strong> $\\cot x = \\dfrac{ 3 - \\sqrt{ 17 } }{ 2 } \\approx -0.562 \\implies \\tan x \\approx -1.781 \\implies x = \\arctan( -1.781 ) \\approx -1.059\\text{ radians}$<br><br>Therefore, the solutions are $x \\approx 0.274\\text{ radians}$ and $x \\approx -1.059\\text{ radians}$."
                ],
                "pi_options": [
                        {
                                "ans": "$x \\approx 0.274\\text{ radians}, x \\approx -1.060\\text{ radians}$",
                                "feedback": "This is a rounding error that occurs if you convert the intermediate quadratic roots of $\\cot x$ into rounded degree values before applying the conversion to radians."
                        },
                        {
                                "ans": "$x \\approx -0.274\\text{ radians}, x \\approx 1.059\\text{ radians}$",
                                "feedback": "This error occurs if you make a sign error when solving the quadratic equation or factorising for the roots."
                        },
                        {
                                "ans": "$x \\approx 0.274\\text{ radians}, x \\approx -1.059\\text{ radians}, x = 0$",
                                "feedback": "This error is the result of failing to exclude $x = 0$ from the final solution set, which is outside the domain of definition of $\\csc^2 x$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Managing Negative Reciprocals",
                        "content": "When solving $\\cot x = K$ for a negative value like $K \\approx -0.562$, inverting to $\\tan x \\approx -1.781$ is completely robust. Just be sure to verify that the resulting angle $x = \\arctan( -1.781 ) \\approx -1.059\\text{ radians}$ falls within the interval $-\\dfrac{ \\pi }{ 2 } < x < \\dfrac{ \\pi }{ 2 }$, which it does."
                }
        },
        {
                "id": "004491",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Integration",
                "topic": "Integration",
                "subtopic": [
                        "Integration"
                ],
                "img": "images/Pure/004491.png",
                "question": "The diagram shows a sketch of part of the curve $C$ with equation:<br>$$y = 2x \\ln x, \\quad x > 0$$<br>The line $l$ is the normal to $C$ at the point $P( \\mathrm{e}, 2\\mathrm{e} )$.<br><br>The region $R$, shown shaded in the diagram, is bounded by the curve $C$, the line $l$, and the $x$-axis.<br><br>Show that the exact area of $R$ is $A\\mathrm{e}^2 + B$, where $A$ and $B$ are rational constants to be found. Find the values of $A$ and $B$.",
                "steps": [
                        "<strong>Step 1: Find the equation of the normal line $l$:</strong><br>We first differentiate $y = 2x \\ln x$ using the product rule to find the gradient function of the curve $C$:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } &= 2\\ln x + 2x \\left( \\dfrac{ 1 }{ x } \\right) \\cr &= 2\\ln x + 2 \\end{aligned}<br>At the point $P( \\mathrm{e}, 2\\mathrm{e} )$, the gradient of the tangent is:<br>\\begin{aligned}\nm_T &= 2\\ln \\mathrm{e} + 2 \\cr\n&= 2( 1 ) + 2 \\cr\n&= 4\n\\end{aligned}<br>Since the normal is perpendicular to the tangent, the gradient of the normal line $l$ is:<br>$$m_N = -\\dfrac{ 1 }{ 4 }$$<br>Using the point-slope formula, the equation of the normal line $l$ is:<br>\\begin{aligned} y - 2\\mathrm{e} &= -\\dfrac{ 1 }{ 4 }( x - \\mathrm{e} ) \\cr y &= -\\dfrac{ 1 }{ 4 }x + \\dfrac{ 9 }{ 4 }\\mathrm{e} \\end{aligned}",
                        "<strong>Step 2: Find the boundary points on the $x$-axis:</strong><br>First, find where the curve $C$ cuts the $x$-axis by setting $y = 0$:<br>\\begin{aligned}\n2x \\ln x &= 0 \\cr\n\\ln x &= 0 \\cr\nx &= 1\n\\end{aligned}<br>Next, find where the normal line $l$ cuts the $x$-axis by setting $y = 0$:<br>\\begin{aligned}\n-\\dfrac{ 1 }{ 4 }x + \\dfrac{ 9 }{ 4 }\\mathrm{e} &= 0 \\cr\n\\dfrac{ 1 }{ 4 }x &= \\dfrac{ 9 }{ 4 }\\mathrm{e} \\cr\nx &= 9\\mathrm{e}\n\\end{aligned}",
                        "<strong>Step 3: Split the region $R$ into two areas:</strong><br>The shaded region $R$ is split at $x = \\mathrm{e}$ into two distinct parts:<br><strong>Area 1:</strong> The area under the curve $C$ from $x = 1$ to $x = \\mathrm{e}$:<br>$$\\text{Area}_1 = \\int_{ 1 }^{ \\mathrm{e} } 2x \\ln x \\, \\mathrm{d}x$$<br><strong>Area 2:</strong> The area under the normal line $l$ from $x = \\mathrm{e}$ to $x = 9\\mathrm{e}$. This is a right-angled triangle with base from $x = \\mathrm{e}$ to $x = 9\\mathrm{e}$ (length $8\\mathrm{e}$) and height $y_P = 2\\mathrm{e}$:<br>\\begin{aligned} \\text{Area}_2 &= \\dfrac{ 1 }{ 2 } \\times \\text{base} \\times \\text{height} \\cr &= \\dfrac{ 1 }{ 2 }( 8\\mathrm{e} )( 2\\mathrm{e} ) \\cr &= 8\\mathrm{e}^2 \\end{aligned}",
                        "<strong>Step 4: Integrate to find $\\text{Area}_1$:</strong><br>Using integration by parts on $\\int 2x \\ln x \\, \\mathrm{d}x$, let $u = \\ln x \\implies \\mathrm{d}u = \\dfrac{ 1 }{ x }\\mathrm{d}x$ and $\\mathrm{d}v = 2x \\, \\mathrm{d}x \\implies v = x^2$:<br>\\begin{aligned} \\int 2x \\ln x \\, \\mathrm{d}x &= x^2 \\ln x - \\int x^2 \\left( \\dfrac{ 1 }{ x } \\right) \\mathrm{d}x \\cr &= x^2 \\ln x - \\int x \\, \\mathrm{d}x \\cr &= x^2 \\ln x - \\dfrac{ 1 }{ 2 }x^2 \\end{aligned}<br>Evaluating this integral over the limits $1$ to $\\mathrm{e}$:<br>\\begin{aligned} \\text{Area}_1 &= \\left[ x^2 \\ln x - \\dfrac{ 1 }{ 2 }x^2 \\right]_{ 1 }^{ \\mathrm{e} } \\cr &= \\left( \\mathrm{e}^2 \\ln \\mathrm{e} - \\dfrac{ 1 }{ 2 }\\mathrm{e}^2 \\right) - \\left( 1^2 \\ln 1 - \\dfrac{ 1 }{ 2 }( 1 )^2 \\right) \\cr &= \\left( \\mathrm{e}^2 - \\dfrac{ 1 }{ 2 }\\mathrm{e}^2 \\right) - \\left( 0 - \\dfrac{ 1 }{ 2 } \\right) \\cr &= \\dfrac{ 1 }{ 2 }\\mathrm{e}^2 + \\dfrac{ 1 }{ 2 } \\end{aligned}",
                        "<strong>Step 5: Find the total exact area of $R$:</strong><br>Summing the two areas together:<br>\\begin{aligned} \\text{Area}(R) &= \\text{Area}_1 + \\text{Area}_2 \\cr &= \\left( \\dfrac{ 1 }{ 2 }\\mathrm{e}^2 + \\dfrac{ 1 }{ 2 } \\right) + 8\\mathrm{e}^2 \\cr &= \\dfrac{ 17 }{ 2 }\\mathrm{e}^2 + \\dfrac{ 1 }{ 2 } \\end{aligned}<br>Therefore, the constants are $A = \\dfrac{ 17 }{ 2 }$ and $B = \\dfrac{ 1 }{ 2 }$."
                ],
                "pi_options": [
                        {
                                "ans": "$A = \\dfrac{ 9 }{ 2 }, B = \\dfrac{ 1 }{ 2 }$",
                                "feedback": "This error occurs if you use the tangent line gradient ($m = 4$) instead of the perpendicular normal gradient ($m = -1/4$), which yields an incorrect equation for the normal line $l$ and a smaller triangle area."
                        },
                        {
                                "ans": "$A = \\dfrac{ 17 }{ 2 }, B = -\\dfrac{ 1 }{ 2 }$",
                                "feedback": "This is a sign error on the constant term $B$, which typically occurs if you forget to subtract the lower limit term $-1/2$ during integration by parts."
                        },
                        {
                                "ans": "$A = \\dfrac{ 1 }{ 2 }, B = \\dfrac{ 1 }{ 2 }$",
                                "feedback": "This error occurs if you completely forget to calculate or include the triangle area under the normal line $l$, only integrating under the curve $C$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Geometry over Calculus",
                        "content": "While you can find the area under the normal line mathematically by integrating its linear equation over $[ \\mathrm{e}, 9\\mathrm{e} ]$, it is much faster and less error-prone to treat it as a simple right-angled triangle. Its base length is the difference in $x$-coordinates ($9\\mathrm{e} - \\mathrm{e} = 8\\mathrm{e}$) and its vertical height is the $y$-coordinate of $P$ ($2\\mathrm{e}$). This basic geometric shortcut saves precious time and minimizes algebraic slips!"
                }
        },
        {
                "id": "004492",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Integration",
                "topic": "Integration",
                "subtopic": [
                        "Integration"
                ],
                "img": "images/Pure/004492.png",
                "question": "The diagram shows a sketch of part of the curve $C$ with equation:<br>$$y = x^2 \\ln x, \\quad x > 0$$<br>The line $l$ is the normal to $C$ at the point $P( \\mathrm{e}, \\mathrm{e}^2 )$.<br><br>The region $R$, shown shaded in the diagram, is bounded by the curve $C$, the line $l$, and the $x$-axis.<br><br>Show that the exact area of $R$ is $A\\mathrm{e}^5 + B\\mathrm{e}^3 + C$, where $A, B$, and $C$ are rational constants to be found. Find the values of $A$, $B$, and $C$.",
                "steps": [
                        "<strong>Step 1: Find the equation of the normal line $l$:</strong><br>We differentiate $y = x^2 \\ln x$ using the product rule to find the gradient function of the curve $C$:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } &= 2x \\ln x + x^2 \\left( \\dfrac{ 1 }{ x } \\right) \\cr &= 2x \\ln x + x \\end{aligned}<br>At the point $P( \\mathrm{e}, \\mathrm{e}^2 )$, the gradient of the tangent is:<br>\\begin{aligned}\nm_T &= 2\\mathrm{e} \\ln \\mathrm{e} + \\mathrm{e} \\cr\n&= 2\\mathrm{e}( 1 ) + \\mathrm{e} \\cr\n&= 3\\mathrm{e}\n\\end{aligned}<br>Since the normal is perpendicular to the tangent, the gradient of the normal line $l$ is:<br>$$m_N = -\\dfrac{ 1 }{ 3\\mathrm{e} }$$<br>The equation of the normal line $l$ is:<br>\\begin{aligned} y - \\mathrm{e}^2 &= -\\dfrac{ 1 }{ 3\\mathrm{e} }( x - \\mathrm{e} ) \\cr y &= -\\dfrac{ 1 }{ 3\\mathrm{e} }x + \\dfrac{ 1 }{ 3 } + \\mathrm{e}^2 \\end{aligned}",
                        "<strong>Step 2: Find the boundary points on the $x$-axis:</strong><br>First, find where the curve $C$ cuts the $x$-axis by setting $y = 0$:<br>\\begin{aligned}\nx^2 \\ln x &= 0 \\cr\n\\ln x &= 0 \\cr\nx &= 1\n\\end{aligned}<br>Next, find where the normal line $l$ cuts the $x$-axis by setting $y = 0$:<br>\\begin{aligned}\n-\\dfrac{ 1 }{ 3\\mathrm{e} }x + \\dfrac{ 1 }{ 3 } + \\mathrm{e}^2 &= 0 \\cr\n\\dfrac{ 1 }{ 3\\mathrm{e} }x &= \\mathrm{e}^2 + \\dfrac{ 1 }{ 3 } \\cr\nx &= 3\\mathrm{e}^3 + \\mathrm{e}\n\\end{aligned}",
                        "<strong>Step 3: Split the region $R$ into two areas:</strong><br>The shaded region $R$ is split at $x = \\mathrm{e}$ into two distinct parts:<br><strong>Area 1:</strong> The area under the curve $C$ from $x = 1$ to $x = \\mathrm{e}$:<br>$$\\text{Area}_1 = \\int_{ 1 }^{ \\mathrm{e} } x^2 \\ln x \\, \\mathrm{d}x$$<br><strong>Area 2:</strong> The area under the normal line $l$ from $x = \\mathrm{e}$ to $x = 3\\mathrm{e}^3 + \\mathrm{e}$. This is a right-angled triangle with base from $x = \\mathrm{e}$ to $x = 3\\mathrm{e}^3 + \\mathrm{e}$ (length $3\\mathrm{e}^3$) and height $y_P = \\mathrm{e}^2$:<br>\\begin{aligned} \\text{Area}_2 &= \\dfrac{ 1 }{ 2 } \\times \\text{base} \\times \\text{height} \\cr &= \\dfrac{ 1 }{ 2 }( 3\\mathrm{e}^3 )( \\mathrm{e}^2 ) \\cr &= \\dfrac{ 3 }{ 2 }\\mathrm{e}^5 \\end{aligned}",
                        "<strong>Step 4: Integrate to find $\\text{Area}_1$:</strong><br>Using integration by parts on $\\int x^2 \\ln x \\, \\mathrm{d}x$, let $u = \\ln x \\implies \\mathrm{d}u = \\dfrac{ 1 }{ x }\\mathrm{d}x$ and $\\mathrm{d}v = x^2 \\, \\mathrm{d}x \\implies v = \\dfrac{ 1 }{ 3 }x^3$:<br>\\begin{aligned} \\int x^2 \\ln x \\, \\mathrm{d}x &= \\dfrac{ 1 }{ 3 }x^3 \\ln x - \\int \\dfrac{ 1 }{ 3 }x^3 \\left( \\dfrac{ 1 }{ x } \\right) \\mathrm{d}x \\cr &= \\dfrac{ 1 }{ 3 }x^3 \\ln x - \\dfrac{ 1 }{ 3 }\\int x^2 \\, \\mathrm{d}x \\cr &= \\dfrac{ 1 }{ 3 }x^3 \\ln x - \\dfrac{ 1 }{ 9 }x^3 \\end{aligned}<br>Evaluating this integral over the limits $1$ to $\\mathrm{e}$:<br>\\begin{aligned} \\text{Area}_1 &= \\left[ \\dfrac{ 1 }{ 3 }x^3 \\ln x - \\dfrac{ 1 }{ 9 }x^3 \\right]_{ 1 }^{ \\mathrm{e} } \\cr &= \\left( \\dfrac{ 1 }{ 3 }\\mathrm{e}^3 \\ln \\mathrm{e} - \\dfrac{ 1 }{ 9 }\\mathrm{e}^3 \\right) - \\left( 0 - \\dfrac{ 1 }{ 9 } \\right) \\cr &= \\dfrac{ 2 }{ 9 }\\mathrm{e}^3 + \\dfrac{ 1 }{ 9 } \\end{aligned}",
                        "<strong>Step 5: Find the total exact area of $R$:</strong><br>Summing the two areas together:<br>\\begin{aligned} \\text{Area}(R) &= \\text{Area}_1 + \\text{Area}_2 \\cr &= \\left( \\dfrac{ 2 }{ 9 }\\mathrm{e}^3 + \\dfrac{ 1 }{ 9 } \\right) + \\dfrac{ 3 }{ 2 }\\mathrm{e}^5 \\cr &= \\dfrac{ 3 }{ 2 }\\mathrm{e}^5 + \\dfrac{ 2 }{ 9 }\\mathrm{e}^3 + \\dfrac{ 1 }{ 9 } \\end{aligned}<br>Therefore, the constants are $A = \\dfrac{ 3 }{ 2 }$, $B = \\dfrac{ 2 }{ 9 }$, and $C = \\dfrac{ 1 }{ 9 }$."
                ],
                "pi_options": [
                        {
                                "ans": "$A = \\dfrac{ 3 }{ 2 }, B = \\dfrac{ 2 }{ 9 }, C = -\\dfrac{ 1 }{ 9 }$",
                                "feedback": "This is a sign error on the constant term $C$, which typically occurs if you forget to subtract the lower limit term $-1/9$ during integration by parts."
                        },
                        {
                                "ans": "$A = \\dfrac{ 1 }{ 2 }, B = \\dfrac{ 2 }{ 9 }, C = \\dfrac{ 1 }{ 9 }$",
                                "feedback": "This error occurs if you make a calculation slip when computing the triangle area, such as omitting the factor of $3$ in the base length $3\\mathrm{e}^3$."
                        },
                        {
                                "ans": "$A = \\dfrac{ 3 }{ 2 }, B = \\dfrac{ 4 }{ 9 }, C = \\dfrac{ 1 }{ 9 }$",
                                "feedback": "This occurs if you make an integration error, such as writing the integrated term as $\\dfrac{ 1 }{ 3 }x^3 \\ln x - \\dfrac{ 2 }{ 9 }x^3$ instead of subtracting $\\dfrac{ 1 }{ 9 }x^3$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Product Rule Coefficient Check",
                        "content": "When integrating $x^n \\ln x$ by parts, the integrated term always takes the form $\\dfrac{ x^{ n+1 } }{ n+1 } \\ln x - \\dfrac{ x^{ n+1 } }{ ( n+1 )^2 }$. For $n = 2$, this yields a denominator of $9$ on the second term. Watch out for simple fraction arithmetic slips when evaluating the upper and lower limits!"
                }
        },
        {
                "id": "004493",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Integration",
                "topic": "Integration",
                "subtopic": [
                        "Integration"
                ],
                "img": "images/Pure/004493.png",
                "question": "The diagram shows a sketch of part of the curve $C$ with equation:<br>$$y = 3\\sqrt{x} \\ln x, \\quad x > 0$$<br>The line $l$ is the normal to $C$ at the point $P( \\mathrm{e}, 3\\sqrt{ \\mathrm{e} } )$.<br><br>The region $R$, shown shaded in the diagram, is bounded by the curve $C$, the line $l$, and the $x$-axis.<br><br>Show that the exact area of $R$ is $A\\mathrm{e}^{1/2} + B\\mathrm{e}^{3/2} + C$, where $A, B$, and $C$ are rational constants to be found. Find the values of $A$, $B$, and $C$.",
                "steps": [
                        "<strong>Step 1: Find the equation of the normal line $l$:</strong><br>We first differentiate $y = 3x^{ 1/2 } \\ln x$ using the product rule to find the gradient function of the curve $C$:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } &= \\dfrac{ 3 }{ 2 }x^{ -1/2 } \\ln x + 3x^{ 1/2 } \\left( \\dfrac{ 1 }{ x } \\right) \\cr &= \\dfrac{ 3\\ln x + 6 }{ 2\\sqrt{ x } } \\end{aligned}<br>At the point $P( \\mathrm{e}, 3\\sqrt{ \\mathrm{e} } )$, the gradient of the tangent is:<br>\\begin{aligned}\nm_T &= \\dfrac{ 3\\ln \\mathrm{e} + 6 }{ 2\\sqrt{ \\mathrm{e} } } \\cr\n&= \\dfrac{ 9 }{ 2\\sqrt{ \\mathrm{e} } }\n\\end{aligned}<br>Since the normal is perpendicular to the tangent, the gradient of the normal line $l$ is:<br>$$m_N = -\\dfrac{ 2\\sqrt{ \\mathrm{e} } }{ 9 }$$<br>The equation of the normal line $l$ is:<br>\\begin{aligned} y - 3\\sqrt{ \\mathrm{e} } &= -\\dfrac{ 2\\sqrt{ \\mathrm{e} } }{ 9 }( x - \\mathrm{e} ) \\cr y &= -\\dfrac{ 2\\sqrt{ \\mathrm{e} } }{ 9 }x + \\dfrac{ 2\\mathrm{e}\\sqrt{ \\mathrm{e} } }{ 9 } + 3\\sqrt{ \\mathrm{e} } \\end{aligned}",
                        "<strong>Step 2: Find the boundary points on the $x$-axis:</strong><br>First, find where the curve $C$ cuts the $x$-axis by setting $y = 0$:<br>\\begin{aligned}\n3\\sqrt{ x } \\ln x &= 0 \\cr\n\\ln x &= 0 \\cr\nx &= 1\n\\end{aligned}<br>Next, find where the normal line $l$ cuts the $x$-axis by setting $y = 0$:<br>\\begin{aligned}\n-\\dfrac{ 2\\sqrt{ \\mathrm{e} } }{ 9 }x + \\dfrac{ 2\\mathrm{e}\\sqrt{ \\mathrm{e} } }{ 9 } + 3\\sqrt{ \\mathrm{e} } &= 0 \\cr\n\\dfrac{ 2\\sqrt{ \\mathrm{e} } }{ 9 }x &= \\dfrac{ 2\\mathrm{e}\\sqrt{ \\mathrm{e} } + 27\\sqrt{ \\mathrm{e} } }{ 9 } \\cr\nx &= \\mathrm{e} + \\dfrac{ 27 }{ 2 }\n\\end{aligned}",
                        "<strong>Step 3: Split the region $R$ into two areas:</strong><br>The shaded region $R$ is split at $x = \\mathrm{e}$ into two distinct parts:<br><strong>Area 1:</strong> The area under the curve $C$ from $x = 1$ to $x = \\mathrm{e}$:<br>$$\\text{Area}_1 = \\int_{ 1 }^{ \\mathrm{e} } 3\\sqrt{ x } \\ln x \\, \\mathrm{d}x$$<br><strong>Area 2:</strong> The area under the normal line $l$ from $x = \\mathrm{e}$ to $x = \\mathrm{e} + \\dfrac{ 27 }{ 2 }$. This is a right-angled triangle with base from $x = \\mathrm{e}$ to $x = \\mathrm{e} + \\dfrac{ 27 }{ 2 }$ (length $\\dfrac{ 27 }{ 2 }$) and height $y_P = 3\\sqrt{ \\mathrm{e} }$:<br>\\begin{aligned} \\text{Area}_2 &= \\dfrac{ 1 }{ 2 } \\times \\text{base} \\times \\text{height} \\cr &= \\dfrac{ 1 }{ 2 }\\left( \\dfrac{ 27 }{ 2 } \\right)( 3\\sqrt{ \\mathrm{e} } ) \\cr &= \\dfrac{ 81 }{ 4 }\\mathrm{e}^{ 1/2 } \\end{aligned}",
                        "<strong>Step 4: Integrate to find $\\text{Area}_1$:</strong><br>Using integration by parts on $\\int 3x^{ 1/2 } \\ln x \\, \\mathrm{d}x$, let $u = \\ln x \\implies \\mathrm{d}u = \\dfrac{ 1 }{ x }\\mathrm{d}x$ and $\\mathrm{d}v = 3x^{ 1/2 } \\, \\mathrm{d}x \\implies v = 2x^{ 3/2 }$:<br>\\begin{aligned} \\int 3x^{ 1/2 } \\ln x \\, \\mathrm{d}x &= 2x^{ 3/2 } \\ln x - \\int 2x^{ 3/2 } \\left( \\dfrac{ 1 }{ x } \\right) \\mathrm{d}x \\cr &= 2x^{ 3/2 } \\ln x - \\int 2x^{ 1/2 } \\, \\mathrm{d}x \\cr &= 2x^{ 3/2 } \\ln x - \\dfrac{ 4 }{ 3 }x^{ 3/2 } \\end{aligned}<br>Evaluating this integral over the limits $1$ to $\\mathrm{e}$:<br>\\begin{aligned} \\text{Area}_1 &= \\left[ 2x^{ 3/2 } \\ln x - \\dfrac{ 4 }{ 3 }x^{ 3/2 } \\right]_{ 1 }^{ \\mathrm{e} } \\cr &= \\left( 2\\mathrm{e}^{ 3/2 } \\ln \\mathrm{e} - \\dfrac{ 4 }{ 3 }\\mathrm{e}^{ 3/2 } \\right) - \\left( 0 - \\dfrac{ 4 }{ 3 } \\right) \\cr &= \\dfrac{ 2 }{ 3 }\\mathrm{e}^{ 3/2 } + \\dfrac{ 4 }{ 3 } \\end{aligned}",
                        "<strong>Step 5: Find the total exact area of $R$:</strong><br>Summing the two areas together:<br>\\begin{aligned} \\text{Area}(R) &= \\text{Area}_1 + \\text{Area}_2 \\cr &= \\left( \\dfrac{ 2 }{ 3 }\\mathrm{e}^{ 3/2 } + \\dfrac{ 4 }{ 3 } \\right) + \\dfrac{ 81 }{ 4 }\\mathrm{e}^{ 1/2 } \\cr &= \\dfrac{ 81 }{ 4 }\\mathrm{e}^{ 1/2 } + \\dfrac{ 2 }{ 3 }\\mathrm{e}^{ 3/2 } + \\dfrac{ 4 }{ 3 } \\end{aligned}<br>Therefore, the constants are $A = \\dfrac{ 81 }{ 4 }$, $B = \\dfrac{ 2 }{ 3 }$, and $C = \\dfrac{ 4 }{ 3 }$."
                ],
                "pi_options": [
                        {
                                "ans": "$A = \\dfrac{ 81 }{ 4 }, B = \\dfrac{ 2 }{ 3 }, C = -\\dfrac{ 4 }{ 3 }$",
                                "feedback": "This is a sign error on the constant term $C$, which occurs if you forget to subtract the lower limit term $-4/3$ during the integration."
                        },
                        {
                                "ans": "$A = \\dfrac{ 27 }{ 4 }, B = \\dfrac{ 2 }{ 3 }, C = \\dfrac{ 4 }{ 3 }$",
                                "feedback": "This occurs if you forget the height of the triangle ($3\\sqrt{\\mathrm{e}}$) and use $1$ instead, leading to an incorrect coefficient for $A$."
                        },
                        {
                                "ans": "$A = \\dfrac{ 81 }{ 4 }, B = \\dfrac{ 4 }{ 3 }, C = \\dfrac{ 4 }{ 3 }$",
                                "feedback": "This is an integration error, likely from failing to multiply the integrated term by $2/3$ when integrating $2x^{1/2}$."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Fractional Exponents Integration",
                        "content": "When integrating terms with fractional powers like $3x^{ 1/2 } \\ln x$ by parts, do not get intimidated by the fractional index. Treat $\\mathrm{d}v = 3x^{ 1/2 } \\mathrm{d}x$ just like any power. The antiderivative is $3 \\times \\dfrac{ x^{ 3/2 } }{ 3/2 } = 2x^{ 3/2 }$. Carrying this clean coefficient through makes the subsequent integral of $v \\mathrm{d}u$ much easier to solve!"
                }
        },
        {
                "id": "004494",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Integration",
                "topic": "Integration",
                "subtopic": [
                        "Integration"
                ],
                "img": "images/Pure/004494.png",
                "question": "The diagram shows a sketch of part of the curve $C$ with equation:<br>$$y = \\dfrac{ \\ln x }{ \\sqrt{x} }, \\quad x > 0$$<br>The line $l$ is the normal to $C$ at the point $P( \\mathrm{e}, \\mathrm{e}^{-1/2} )$.<br><br>The region $R$, shown shaded in the diagram, is bounded by the curve $C$, the line $l$, and the $x$-axis.<br><br>Show that the exact area of $R$ is $A\\mathrm{e}^{-5/2} + B\\mathrm{e}^{1/2} + C$, where $A, B$, and $C$ are rational constants to be found. Find the values of $A$, $B$, and $C$.",
                "steps": [
                        "<strong>Step 1: Find the equation of the normal line $l$:</strong><br>We differentiate $y = x^{ -1/2 } \\ln x$ using the product rule to find the gradient function of the curve $C$:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } &= -\\dfrac{ 1 }{ 2 }x^{ -3/2 } \\ln x + x^{ -1/2 } \\left( \\dfrac{ 1 }{ x } \\right) \\cr &= \\dfrac{ 2 - \\ln x }{ 2x^{ 3/2 } } \\end{aligned}<br>At the point $P( \\mathrm{e}, \\mathrm{e}^{-1/2} )$, the gradient of the tangent is:<br>\\begin{aligned}\nm_T &= \\dfrac{ 2 - \\ln \\mathrm{e} }{ 2\\mathrm{e}^{ 3/2 } } \\cr\n&= \\dfrac{ 1 }{ 2\\mathrm{e}^{ 3/2 } }\n\\end{aligned}<br>Since the normal is perpendicular to the tangent, the gradient of the normal line $l$ is:<br>$$m_N = -2\\mathrm{e}^{ 3/2 }$$<br>The equation of the normal line $l$ is:<br>\\begin{aligned} y - \\mathrm{e}^{-1/2} &= -2\\mathrm{e}^{ 3/2 }( x - \\mathrm{e} ) \\cr y &= -2\\mathrm{e}^{ 3/2 }x + 2\\mathrm{e}^{ 5/2 } + \\mathrm{e}^{-1/2} \\end{aligned}",
                        "<strong>Step 2: Find the boundary points on the $x$-axis:</strong><br>First, find where the curve $C$ cuts the $x$-axis by setting $y = 0$:<br>\\begin{aligned}\n\\dfrac{ \\ln x }{ \\sqrt{x} } &= 0 \\cr\n\\ln x &= 0 \\cr\nx &= 1\n\\end{aligned}<br>Next, find where the normal line $l$ cuts the $x$-axis by setting $y = 0$:<br>\\begin{aligned}\n-2\\mathrm{e}^{ 3/2 }x + 2\\mathrm{e}^{ 5/2 } + \\mathrm{e}^{-1/2} &= 0 \\cr\n2\\mathrm{e}^{ 3/2 }x &= 2\\mathrm{e}^{ 5/2 } + \\mathrm{e}^{-1/2} \\cr\nx &= \\mathrm{e} + \\dfrac{ 1 }{ 2 }\\mathrm{e}^{-2}\n\\end{aligned}",
                        "<strong>Step 3: Split the region $R$ into two areas:</strong><br>The shaded region $R$ is split at $x = \\mathrm{e}$ into two distinct parts:<br><strong>Area 1:</strong> The area under the curve $C$ from $x = 1$ to $x = \\mathrm{e}$:<br>$$\\text{Area}_1 = \\int_{ 1 }^{ \\mathrm{e} } \\dfrac{ \\ln x }{ \\sqrt{x} } \\, \\mathrm{d}x$$<br><strong>Area 2:</strong> The area under the normal line $l$ from $x = \\mathrm{e}$ to $x = \\mathrm{e} + \\dfrac{ 1 }{ 2 }\\mathrm{e}^{-2}$. This is a right-angled triangle with base from $x = \\mathrm{e}$ to $x = \\mathrm{e} + \\dfrac{ 1 }{ 2 }\\mathrm{e}^{-2}$ (length $\\dfrac{ 1 }{ 2 }\\mathrm{e}^{-2}$) and height $y_P = \\mathrm{e}^{-1/2}$:<br>\\begin{aligned} \\text{Area}_2 &= \\dfrac{ 1 }{ 2 } \\times \\text{base} \\times \\text{height} \\cr &= \\dfrac{ 1 }{ 2 }\\left( \\dfrac{ 1 }{ 2 }\\mathrm{e}^{-2} \\right)( \\mathrm{e}^{-1/2} ) \\cr &= \\dfrac{ 1 }{ 4 }\\mathrm{e}^{-5/2} \\end{aligned}",
                        "<strong>Step 4: Integrate to find $\\text{Area}_1$:</strong><br>Using integration by parts on $\\int x^{ -1/2 } \\ln x \\, \\mathrm{d}x$, let $u = \\ln x \\implies \\mathrm{d}u = \\dfrac{ 1 }{ x }\\mathrm{d}x$ and $\\mathrm{d}v = x^{ -1/2 } \\, \\mathrm{d}x \\implies v = 2x^{ 1/2 }$:<br>\\begin{aligned} \\int x^{ -1/2 } \\ln x \\, \\mathrm{d}x &= 2x^{ 1/2 } \\ln x - \\int 2x^{ 1/2 } \\left( \\dfrac{ 1 }{ x } \\right) \\mathrm{d}x \\cr &= 2x^{ 1/2 } \\ln x - \\int 2x^{ -1/2 } \\, \\mathrm{d}x \\cr &= 2x^{ 1/2 } \\ln x - 4x^{ 1/2 } \\end{aligned}<br>Evaluating this integral over the limits $1$ to $\\mathrm{e}$:<br>\\begin{aligned} \\text{Area}_1 &= \\left[ 2x^{ 1/2 } \\ln x - 4x^{ 1/2 } \\right]_{ 1 }^{ \\mathrm{e} } \\cr &= \\left( 2\\mathrm{e}^{ 1/2 } \\ln \\mathrm{e} - 4\\mathrm{e}^{ 1/2 } \\right) - ( 0 - 4 ) \\cr &= -2\\mathrm{e}^{ 1/2 } + 4 \\end{aligned}",
                        "<strong>Step 5: Find the total exact area of $R$:</strong><br>Summing the two areas together:<br>\\begin{aligned} \\text{Area}(R) &= \\text{Area}_1 + \\text{Area}_2 \\cr &= \\left( -2\\mathrm{e}^{ 1/2 } + 4 \\right) + \\dfrac{ 1 }{ 4 }\\mathrm{e}^{-5/2} \\cr &= \\dfrac{ 1 }{ 4 }\\mathrm{e}^{-5/2} - 2\\mathrm{e}^{ 1/2 } + 4 \\end{aligned}<br>Therefore, the constants are $A = \\dfrac{ 1 }{ 4 }$, $B = -2$, and $C = 4$."
                ],
                "pi_options": [
                        {
                                "ans": "$A = \\dfrac{ 1 }{ 4 }, B = -2, C = -4$",
                                "feedback": "This is a sign error on the constant term $C$, which occurs if you forget that subtracting the lower limit term $-4$ during the evaluation yields $+4$."
                        },
                        {
                                "ans": "$A = \\dfrac{ 1 }{ 2 }, B = -2, C = 4$",
                                "feedback": "This occurs if you make a calculation slip when computing the triangle area, such as forgetting the factor of $1/2$ when multiplying the base by the height."
                        },
                        {
                                "ans": "$A = \\dfrac{ 1 }{ 4 }, B = 2, C = 4$",
                                "feedback": "This is a sign error on the term $B$, which occurs if you write the evaluated term as $+2\\mathrm{e}^{1/2}$ instead of subtracting $4\\mathrm{e}^{1/2}$ from $2\\mathrm{e}^{1/2}$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Tracking Negative Exponents",
                        "content": "When working with negative exponents like $y = x^{-1/2} \\ln x$, be extremely careful with both integration and differentiation. For differentiation, $-1/2 - 1 = -3/2$. For integration, $-1/2 + 1 = 1/2$. A simple arithmetic slip with these indices can easily cascade into incorrect normal equations and incorrect areas!"
                }
        },
        {
                "id": "004495",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Integration",
                "topic": "Integration",
                "subtopic": [
                        "Integration"
                ],
                "img": "images/Pure/004495.png",
                "question": "The diagram shows a sketch of part of the curve $C$ with equation:<br>$$y = x^3 \\ln x, \\quad x > 0$$<br>The line $l$ is the normal to $C$ at the point $P( \\mathrm{e}, \\mathrm{e}^3 )$.<br><br>The region $R$, shown shaded in the diagram, is bounded by the curve $C$, the line $l$, and the $x$-axis.<br><br>Show that the exact area of $R$ is $A\\mathrm{e}^8 + B\\mathrm{e}^4 + C$, where $A, B$, and $C$ are rational constants to be found. Find the values of $A$, $B$, and $C$.",
                "steps": [
                        "<strong>Step 1: Find the equation of the normal line $l$:</strong><br>We first differentiate $y = x^3 \\ln x$ using the product rule to find the gradient function of the curve $C$:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}y }{ \\mathrm{d}x } &= 3x^2 \\ln x + x^3 \\left( \\dfrac{ 1 }{ x } \\right) \\cr &= 3x^2 \\ln x + x^2 \\end{aligned}<br>At the point $P( \\mathrm{e}, \\mathrm{e}^3 )$, the gradient of the tangent is:<br>\\begin{aligned}\nm_T &= 3\\mathrm{e}^2 \\ln \\mathrm{e} + \\mathrm{e}^2 \\cr\n&= 3\\mathrm{e}^2( 1 ) + \\mathrm{e}^2 \\cr\n&= 4\\mathrm{e}^2\n\\end{aligned}<br>Since the normal is perpendicular to the tangent, the gradient of the normal line $l$ is:<br>$$m_N = -\\dfrac{ 1 }{ 4\\mathrm{e}^2 }$$<br>The equation of the normal line $l$ is:<br>\\begin{aligned} y - \\mathrm{e}^3 &= -\\dfrac{ 1 }{ 4\\mathrm{e}^2 }( x - \\mathrm{e} ) \\cr y &= -\\dfrac{ 1 }{ 4\\mathrm{e}^2 }x + \\dfrac{ 1 }{ 4\\mathrm{e} } + \\mathrm{e}^3 \\end{aligned}",
                        "<strong>Step 2: Find the boundary points on the $x$-axis:</strong><br>First, find where the curve $C$ cuts the $x$-axis by setting $y = 0$:<br>\\begin{aligned}\nx^3 \\ln x &= 0 \\cr\n\\ln x &= 0 \\cr\nx &= 1\n\\end{aligned}<br>Next, find where the normal line $l$ cuts the $x$-axis by setting $y = 0$:<br>\\begin{aligned}\n-\\dfrac{ 1 }{ 4\\mathrm{e}^2 }x + \\dfrac{ 1 }{ 4\\mathrm{e} } + \\mathrm{e}^3 &= 0 \\cr\n\\dfrac{ 1 }{ 4\\mathrm{e}^2 }x &= \\mathrm{e}^3 + \\dfrac{ 1 }{ 4\\mathrm{e} } \\cr\nx &= 4\\mathrm{e}^5 + \\mathrm{e}\n\\end{aligned}",
                        "<strong>Step 3: Split the region $R$ into two areas:</strong><br>The shaded region $R$ is split at $x = \\mathrm{e}$ into two distinct parts:<br><strong>Area 1:</strong> The area under the curve $C$ from $x = 1$ to $x = \\mathrm{e}$:<br>$$\\text{Area}_1 = \\int_{ 1 }^{ \\mathrm{e} } x^3 \\ln x \\, \\mathrm{d}x$$<br><strong>Area 2:</strong> The area under the normal line $l$ from $x = \\mathrm{e}$ to $x = 4\\mathrm{e}^5 + \\mathrm{e}$. This is a right-angled triangle with base from $x = \\mathrm{e}$ to $x = 4\\mathrm{e}^5 + \\mathrm{e}$ (length $4\\mathrm{e}^5$) and height $y_P = \\mathrm{e}^3$:<br>\\begin{aligned} \\text{Area}_2 &= \\dfrac{ 1 }{ 2 } \\times \\text{base} \\times \\text{height} \\cr &= \\dfrac{ 1 }{ 2 }( 4\\mathrm{e}^5 )( \\mathrm{e}^3 ) \\cr &= 2\\mathrm{e}^8 \\end{aligned}",
                        "<strong>Step 4: Integrate to find $\\text{Area}_1$:</strong><br>Using integration by parts on $\\int x^3 \\ln x \\, \\mathrm{d}x$, let $u = \\ln x \\implies \\mathrm{d}u = \\dfrac{ 1 }{ x }\\mathrm{d}x$ and $\\mathrm{d}v = x^3 \\, \\mathrm{d}x \\implies v = \\dfrac{ 1 }{ 4 }x^4$:<br>\\begin{aligned} \\int x^3 \\ln x \\, \\mathrm{d}x &= \\dfrac{ 1 }{ 4 }x^4 \\ln x - \\int \\dfrac{ 1 }{ 4 }x^4 \\left( \\dfrac{ 1 }{ x } \\right) \\mathrm{d}x \\cr &= \\dfrac{ 1 }{ 4 }x^4 \\ln x - \\dfrac{ 1 }{ 4 }\\int x^3 \\, \\mathrm{d}x \\cr &= \\dfrac{ 1 }{ 4 }x^4 \\ln x - \\dfrac{ 1 }{ 16 }x^4 \\end{aligned}<br>Evaluating this integral over the limits $1$ to $\\mathrm{e}$:<br>\\begin{aligned} \\text{Area}_1 &= \\left[ \\dfrac{ 1 }{ 4 }x^4 \\ln x - \\dfrac{ 1 }{ 16 }x^4 \\right]_{ 1 }^{ \\mathrm{e} } \\cr &= \\left( \\dfrac{ 1 }{ 4 }\\mathrm{e}^4 \\ln \\mathrm{e} - \\dfrac{ 1 }{ 16 }\\mathrm{e}^4 \\right) - \\left( 0 - \\dfrac{ 1 }{ 16 } \\right) \\cr &= \\dfrac{ 3 }{ 16 }\\mathrm{e}^4 + \\dfrac{ 1 }{ 16 } \\end{aligned}",
                        "<strong>Step 5: Find the total exact area of $R$:</strong><br>Summing the two areas together:<br>\\begin{aligned} \\text{Area}(R) &= \\text{Area}_1 + \\text{Area}_2 \\cr &= \\left( \\dfrac{ 3 }{ 16 }\\mathrm{e}^4 + \\dfrac{ 1 }{ 16 } \\right) + 2\\mathrm{e}^8 \\cr &= 2\\mathrm{e}^8 + \\dfrac{ 3 }{ 16 }\\mathrm{e}^4 + \\dfrac{ 1 }{ 16 } \\end{aligned}<br>Therefore, the constants are $A = 2$, $B = \\dfrac{ 3 }{ 16 }$, and $C = \\dfrac{ 1 }{ 16 }$."
                ],
                "pi_options": [
                        {
                                "ans": "$A = 2, B = \\dfrac{ 3 }{ 16 }, C = -\\dfrac{ 1 }{ 16 }$",
                                "feedback": "This is a sign error on the constant term $C$, which occurs if you forget that subtracting the lower limit term $-1/16$ during the evaluation yields $+1/16$."
                        },
                        {
                                "ans": "$A = 1, B = \\dfrac{ 3 }{ 16 }, C = \\dfrac{ 1 }{ 16 }$",
                                "feedback": "This occurs if you make a calculation slip when computing the triangle area, such as forgetting the factor of $1/2$ when multiplying the base by the height."
                        },
                        {
                                "ans": "$A = 2, B = \\dfrac{ 5 }{ 16 }, C = \\dfrac{ 1 }{ 16 }$",
                                "feedback": "This is an integration error, likely from failing to multiply by $1/4$ when integrating $\\dfrac{ 1 }{ 4 }x^3$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: High Power Integration Rules",
                        "content": "When integrating higher powers like $x^3 \\ln x$, the denominator on the second term becomes $( n+1 )^2 = 16$. Always run a quick mental differentiation check on your result: $\\dfrac{ \\mathrm{d} }{ \\mathrm{d}x }\\left( \\dfrac{ 1 }{ 4 }x^4 \\ln x - \\dfrac{ 1 }{ 16 }x^4 \\right) = x^3 \\ln x + \\dfrac{ 1 }{ 4 }x^3 - \\dfrac{ 1 }{ 4 }x^3 = x^3 \\ln x$. This quick 5-second sanity check ensures your integration by parts is correct!"
                }
        },
        {
                "id": "004496",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "A biologist is studying a population of rare birds on an island. The number of birds, $N$, in the population, $t$ years after the start of the study, is modeled by the equation:<br>$$N = \\dfrac{ 1200 }{ 4 + 6\\mathrm{e}^{ -0.2t } }, \\quad t \\ge 0, \\quad t \\in \\mathbb{R}$$<br><strong>(a)</strong> Find the number of birds in the population at the start of the study.<br><br><strong>(b)</strong> Show that the rate of growth of the bird population, $\\dfrac{ \\mathrm{d}N }{ \\mathrm{d}t }$, is given by:<br>$$\\dfrac{ \\mathrm{d}N }{ \\mathrm{d}t } = \\dfrac{ N( 300 - N ) }{ 1500 }$$<br><strong>(c)</strong> The rate of growth is a maximum after $T$ years. Find, according to the model, the value of $T$ to 2 decimal places.<br><br><strong>(d)</strong> According to the model, the maximum number of birds on the island is $P$. State the value of $P$.",
                "steps": [
                        "<strong>(a) Finding the initial population:</strong><br>At the start of the study, $t = 0$. Substituting $t = 0$ into the model equation:<br>\\begin{aligned} N &= \\dfrac{ 1200 }{ 4 + 6\\mathrm{e}^{ -0.2( 0 ) } } \\cr &= \\dfrac{ 1200 }{ 4 + 6( 1 ) } \\cr &= \\dfrac{ 1200 }{ 10 } = 120 \\end{aligned}<br>Therefore, there are $120$ birds in the population at the start of the study.",
                        "<strong>(b) Finding the rate of growth $\\dfrac{ \\mathrm{d}N }{ \\mathrm{d}t }$:</strong><br>We rewrite the model as $N = 1200( 4 + 6\\mathrm{e}^{ -0.2t } )^{ -1 }$ and differentiate with respect to $t$ using the chain rule:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}N }{ \\mathrm{d}t } &= -1200( 4 + 6\\mathrm{e}^{ -0.2t } )^{ -2 } \\times \\left( -0.2 \\times 6\\mathrm{e}^{ -0.2t } \\right) \\cr &= \\dfrac{ 1440\\mathrm{e}^{ -0.2t } }{ ( 4 + 6\\mathrm{e}^{ -0.2t } )^2 } \\end{aligned}<br>Now, we rearrange the original model equation to express $6\\mathrm{e}^{ -0.2t }$ in terms of $N$:<br>\\begin{aligned} 4 + 6\\mathrm{e}^{ -0.2t } &= \\dfrac{ 1200 }{ N } \\cr 6\\mathrm{e}^{ -0.2t } &= \\dfrac{ 1200 }{ N } - 4 = \\dfrac{ 4( 300 - N ) }{ N } \\end{aligned}",
                        "We substitute this expression back into our derivative to express $\\dfrac{ \\mathrm{d}N }{ \\mathrm{d}t }$ purely in terms of $N$:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}N }{ \\mathrm{d}t } &= 0.2 \\times \\left( \\dfrac{ 1200 }{ 4 + 6\\mathrm{e}^{ -0.2t } } \\right) \\times \\left( \\dfrac{ 6\\mathrm{e}^{ -0.2t } }{ 4 + 6\\mathrm{e}^{ -0.2t } } \\right) \\cr &= 0.2 \\times N \\times \\left( \\dfrac{ \\dfrac{ 4( 300 - N ) }{ N } }{ \\dfrac{ 1200 }{ N } } \\right) \\cr &= 0.2 \\times N \\times \\left( \\dfrac{ 4( 300 - N ) }{ 1200 } \\right) \\cr &= \\dfrac{ 0.8N( 300 - N ) }{ 1200 } = \\dfrac{ N( 300 - N ) }{ 1500 } \\end{aligned}",
                        "<strong>(c) Finding the time $T$ of maximum rate of growth:</strong><br>The rate of growth is modeled by the quadratic equation $R( N ) = \\dfrac{ 300N - N^2 }{ 1500 }$. The maximum of this quadratic occurs at its vertex, which is at:<br>\\begin{aligned}\nN &= \\dfrac{ 300 }{ 2 } \\cr\n&= 150\n\\end{aligned}<br>We find the value of $T$ when $N = 150$ using our model equation:<br>\\begin{aligned} 150 &= \\dfrac{ 1200 }{ 4 + 6\\mathrm{e}^{ -0.2T } } \\cr 4 + 6\\mathrm{e}^{ -0.2T } &= \\dfrac{ 1200 }{ 150 } = 8 \\cr 6\\mathrm{e}^{ -0.2T } &= 4 \\cr \\mathrm{e}^{ -0.2T } &= \\dfrac{ 2 }{ 3 } \\cr -0.2T &= \\ln\\left( \\dfrac{ 2 }{ 3 } \\right) = -\\ln( 1.5 ) \\cr T &= 5\\ln( 1.5 ) \\approx 2.03\\text{ years} \\end{aligned}",
                        "<strong>(d) Finding the carrying capacity $P$:</strong><br>The maximum population occurs as $t \\to \\infty$. In this limit, $\\mathrm{e}^{ -0.2t } \\to 0$. Therefore:<br>\\begin{aligned} P &= \\lim_{ t \\to \\infty } \\dfrac{ 1200 }{ 4 + 6\\mathrm{e}^{ -0.2t } } \\cr &= \\dfrac{ 1200 }{ 4 + 6( 0 ) } \\cr &= \\dfrac{ 1200 }{ 4 } = 300 \\end{aligned}<br>Therefore, the maximum number of birds according to the model is $P = 300$."
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $120$, <strong>(b)</strong> as shown, <strong>(c)</strong> $T \\approx 3.39\\text{ years}$, <strong>(d)</strong> $P = 300$",
                                "feedback": "This error occurs if you use the incorrect time constant from the original model ($0.25$ instead of $0.2$), yielding a larger value of $T \\approx 3.39\\text{ years}$ instead of $2.03\\text{ years}$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $120$, <strong>(b)</strong> as shown, <strong>(c)</strong> $T \\approx 2.03\\text{ years}$, <strong>(d)</strong> $P = 1200$",
                                "feedback": "This is a misinterpretation of the carrying capacity $P$. The value of $P$ is not the numerator of the logistic fraction ($1200$), but rather the limit as $t \\to \\infty$, which is $\\dfrac{ 1200 }{ 4 } = 300$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $300$, <strong>(b)</strong> as shown, <strong>(c)</strong> $T \\approx 2.03\\text{ years}$, <strong>(d)</strong> $P = 120$",
                                "feedback": "This is a basic calculation slip where the initial population and carrying capacity are swapped, setting $N(0) = 300$ and $P = 120$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Vertex of Logistic Growth",
                        "content": "For any standard logistic growth model of the form $\\dfrac{ \\mathrm{d}N }{ \\mathrm{d}t } = k N( P - N )$, the maximum rate of growth always occurs exactly at half of the carrying capacity: $N = \\dfrac{ P }{ 2 }$. Recognizing this shortcut allows you to immediately bypass the quadratic vertex derivation and jump directly to solving the time $T$ when $N = \\dfrac{ P }{ 2 }$."
                }
        },
        {
                "id": "004497",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "A microbiologist is monitoring the growth of a bacterial culture. The number of bacteria, $N$, in thousands, $t$ hours after the experiment begins, is modeled by the equation:<br>$$N = \\dfrac{ 2000 }{ 5 + 15\\mathrm{e}^{ -0.1t } }, \\quad t \\ge 0, \\quad t \\in \\mathbb{R}$$<br><strong>(a)</strong> Find the number of bacteria, in thousands, at the start of the experiment.<br><br><strong>(b)</strong> Show that the rate of growth of the bacterial population, $\\dfrac{ \\mathrm{d}N }{ \\mathrm{d}t }$, is given by:<br>$$\\dfrac{ \\mathrm{d}N }{ \\mathrm{d}t } = \\dfrac{ N( 400 - N ) }{ 4000 }$$<br><strong>(c)</strong> The rate of growth is a maximum after $T$ hours. Find, according to the model, the value of $T$ to 2 decimal places.<br><br><strong>(d)</strong> According to the model, the maximum number of bacteria in the culture is $P$ thousand. State the value of $P$.",
                "steps": [
                        "<strong>(a) Finding the initial population:</strong><br>At the start of the experiment, $t = 0$. Substituting $t = 0$ into the model equation:<br>\\begin{aligned} N &= \\dfrac{ 2000 }{ 5 + 15\\mathrm{e}^{ -0.1( 0 ) } } \\cr &= \\dfrac{ 2000 }{ 5 + 15( 1 ) } \\cr &= \\dfrac{ 2000 }{ 20 } = 100 \\end{aligned}<br>Therefore, there are $100$ thousand bacteria at the start of the experiment.",
                        "<strong>(b) Finding the rate of growth $\\dfrac{ \\mathrm{d}N }{ \\mathrm{d}t }$:</strong><br>We rewrite the model as $N = 2000( 5 + 15\\mathrm{e}^{ -0.1t } )^{ -1 }$ and differentiate with respect to $t$ using the chain rule:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}N }{ \\mathrm{d}t } &= -2000( 5 + 15\\mathrm{e}^{ -0.1t } )^{ -2 } \\times \\left( -0.1 \\times 15\\mathrm{e}^{ -0.1t } \\right) \\cr &= \\dfrac{ 3000\\mathrm{e}^{ -0.1t } }{ ( 5 + 15\\mathrm{e}^{ -0.1t } )^2 } \\end{aligned}<br>Now, we rearrange the original model equation to express $15\\mathrm{e}^{ -0.1t }$ in terms of $N$:<br>\\begin{aligned} 5 + 15\\mathrm{e}^{ -0.1t } &= \\dfrac{ 2000 }{ N } \\cr 15\\mathrm{e}^{ -0.1t } &= \\dfrac{ 2000 }{ N } - 5 = \\dfrac{ 5( 400 - N ) }{ N } \\end{aligned}",
                        "We substitute this expression back into our derivative to express $\\dfrac{ \\mathrm{d}N }{ \\mathrm{d}t }$ purely in terms of $N$:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}N }{ \\mathrm{d}t } &= 0.1 \\times \\left( \\dfrac{ 2000 }{ 5 + 15\\mathrm{e}^{ -0.1t } } \\right) \\times \\left( \\dfrac{ 15\\mathrm{e}^{ -0.1t } }{ 5 + 15\\mathrm{e}^{ -0.1t } } \\right) \\cr &= 0.1 \\times N \\times \\left( \\dfrac{ \\dfrac{ 5( 400 - N ) }{ N } }{ \\dfrac{ 2000 }{ N } } \\right) \\cr &= 0.1 \\times N \\times \\left( \\dfrac{ 5( 400 - N ) }{ 2000 } \\right) \\cr &= \\dfrac{ 0.5N( 400 - N ) }{ 2000 } = \\dfrac{ N( 400 - N ) }{ 4000 } \\end{aligned}",
                        "<strong>(c) Finding the time $T$ of maximum rate of growth:</strong><br>The rate of growth is modeled by the quadratic equation $R( N ) = \\dfrac{ 400N - N^2 }{ 4000 }$. The maximum of this quadratic occurs at its vertex, which is at:<br>\\begin{aligned}\nN &= \\dfrac{ 400 }{ 2 } \\cr\n&= 200\n\\end{aligned}<br>We find the value of $T$ when $N = 200$ using our model equation:<br>\\begin{aligned} 200 &= \\dfrac{ 2000 }{ 5 + 15\\mathrm{e}^{ -0.1T } } \\cr 5 + 15\\mathrm{e}^{ -0.1T } &= \\dfrac{ 2000 }{ 200 } = 10 \\cr 15\\mathrm{e}^{ -0.1T } &= 5 \\cr \\mathrm{e}^{ -0.1T } &= \\dfrac{ 1 }{ 3 } \\cr -0.1T &= \\ln\\left( \\dfrac{ 1 }{ 3 } \\right) = -\\ln( 3 ) \\cr T &= 10\\ln( 3 ) \\approx 10.99\\text{ hours} \\end{aligned}",
                        "<strong>(d) Finding the carrying capacity $P$:</strong><br>The maximum population occurs as $t \\to \\infty$. In this limit, $\\mathrm{e}^{ -0.1t } \\to 0$. Therefore:<br>\\begin{aligned} P &= \\lim_{ t \\to \\infty } \\dfrac{ 2000 }{ 5 + 15\\mathrm{e}^{ -0.1t } } \\cr &= \\dfrac{ 2000 }{ 5 + 15( 0 ) } \\cr &= \\dfrac{ 2000 }{ 5 } = 400 \\end{aligned}<br>Therefore, the maximum number of bacteria according to the model is $P = 400$ thousand."
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $100$ thousand, <strong>(b)</strong> as shown, <strong>(c)</strong> $T \\approx 10.99\\text{ hours}$, <strong>(d)</strong> $P = 2000$ thousand",
                                "feedback": "This is a misinterpretation of the carrying capacity $P$. The value of $P$ is not the numerator of the logistic fraction ($2000$), but rather the limit as $t \\to \\infty$, which is $\\dfrac{ 2000 }{ 5 } = 400$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $100$ thousand, <strong>(b)</strong> as shown, <strong>(c)</strong> $T \\approx 4.05\\text{ hours}$, <strong>(d)</strong> $P = 400$ thousand",
                                "feedback": "This error occurs if you use an incorrect time constant when solving for the maximum growth rate time $T$, yielding a smaller value of $T \\approx 4.05\\text{ hours}$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $400$ thousand, <strong>(b)</strong> as shown, <strong>(c)</strong> $T \\approx 10.99\\text{ hours}$, <strong>(d)</strong> $P = 100$ thousand",
                                "feedback": "This is a calculation slip where the initial population and carrying capacity are swapped, setting $N(0) = 400$ thousand and $P = 100$ thousand."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Units of Measurement Check",
                        "content": "Always verify the units of measurement used in the question. In this model, $N$ is explicitly defined as the number of bacteria 'in thousands'. When interpreting values like $N( 0 ) = 100$ or carrying capacity $P = 400$, remember that they represent $100,000$ and $400,000$ bacteria respectively. Forgetting to track this scaling is a common source of exam errors!"
                }
        },
        {
                "id": "004498",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "An epidemiologist is tracking the spread of a flu virus through a school. The number of infected students, $I$, at time $t$ days after the tracking begins, is modeled by the equation:<br>$$I = \\dfrac{ 800 }{ 2 + 8\\mathrm{e}^{ -0.4t } }, \\quad t \\ge 0, \\quad t \\in \\mathbb{R}$$<br><strong>(a)</strong> Find the number of infected students at the start of the tracking period.<br><br><strong>(b)</strong> Show that the rate of spread of the virus, $\\dfrac{ \\mathrm{d}I }{ \\mathrm{d}t }$, is given by:<br>$$\\dfrac{ \\mathrm{d}I }{ \\mathrm{d}t } = \\dfrac{ I( 400 - I ) }{ 1000 }$$<br><strong>(c)</strong> The rate of spread is a maximum after $T$ days. Find, according to the model, the value of $T$ to 2 decimal places.<br><br><strong>(d)</strong> According to the model, the maximum number of infected students in the school is $P$. State the value of $P$.",
                "steps": [
                        "<strong>(a) Finding the initial infected population:</strong><br>At the start of the tracking, $t = 0$. Substituting $t = 0$ into the model equation:<br>\\begin{aligned} I &= \\dfrac{ 800 }{ 2 + 8\\mathrm{e}^{ -0.4( 0 ) } } \\cr &= \\dfrac{ 800 }{ 2 + 8( 1 ) } \\cr &= \\dfrac{ 800 }{ 10 } = 80 \\end{aligned}<br>Therefore, there are $80$ infected students at the start of the tracking period.",
                        "<strong>(b) Finding the rate of spread $\\dfrac{ \\mathrm{d}I }{ \\mathrm{d}t }$:</strong><br>We rewrite the model as $I = 800( 2 + 8\\mathrm{e}^{ -0.4t } )^{ -1 }$ and differentiate with respect to $t$ using the chain rule:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}I }{ \\mathrm{d}t } &= -800( 2 + 8\\mathrm{e}^{ -0.4t } )^{ -2 } \\times \\left( -0.4 \\times 8\\mathrm{e}^{ -0.4t } \\right) \\cr &= \\dfrac{ 2560\\mathrm{e}^{ -0.4t } }{ ( 2 + 8\\mathrm{e}^{ -0.4t } )^2 } \\end{aligned}<br>Now, we rearrange the original model equation to express $8\\mathrm{e}^{ -0.4t }$ in terms of $I$:<br>\\begin{aligned} 2 + 8\\mathrm{e}^{ -0.4t } &= \\dfrac{ 800 }{ I } \\cr 8\\mathrm{e}^{ -0.4t } &= \\dfrac{ 800 }{ I } - 2 = \\dfrac{ 2( 400 - I ) }{ I } \\end{aligned}",
                        "We substitute this expression back into our derivative to express $\\dfrac{ \\mathrm{d}I }{ \\mathrm{d}t }$ purely in terms of $I$:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}I }{ \\mathrm{d}t } &= 0.4 \\times \\left( \\dfrac{ 800 }{ 2 + 8\\mathrm{e}^{ -0.4t } } \\right) \\times \\left( \\dfrac{ 8\\mathrm{e}^{ -0.4t } }{ 2 + 8\\mathrm{e}^{ -0.4t } } \\right) \\cr &= 0.4 \\times I \\times \\left( \\dfrac{ \\dfrac{ 2( 400 - I ) }{ I } }{ \\dfrac{ 800 }{ I } } \\right) \\cr &= 0.4 \\times I \\times \\left( \\dfrac{ 2( 400 - I ) }{ 800 } \\right) \\cr &= \\dfrac{ 0.8I( 400 - I ) }{ 800 } = \\dfrac{ I( 400 - I ) }{ 1000 } \\end{aligned}",
                        "<strong>(c) Finding the time $T$ of maximum rate of spread:</strong><br>The rate of spread is modeled by the quadratic equation $R( I ) = \\dfrac{ 400I - I^2 }{ 1000 }$. The maximum of this quadratic occurs at its vertex, which is at:<br>\\begin{aligned}\nI &= \\dfrac{ 400 }{ 2 } \\cr\n&= 200\n\\end{aligned}<br>We find the value of $T$ when $I = 200$ using our model equation:<br>\\begin{aligned} 200 &= \\dfrac{ 800 }{ 2 + 8\\mathrm{e}^{ -0.4T } } \\cr 2 + 8\\mathrm{e}^{ -0.4T } &= \\dfrac{ 800 }{ 200 } = 4 \\cr 8\\mathrm{e}^{ -0.4T } &= 2 \\cr \\mathrm{e}^{ -0.4T } &= \\dfrac{ 1 }{ 4 } \\cr -0.4T &= \\ln\\left( \\dfrac{ 1 }{ 4 } \\right) = -\\ln( 4 ) \\cr T &= 2.5\\ln( 4 ) \\approx 3.47\\text{ days} \\end{aligned}",
                        "<strong>(d) Finding the carrying capacity $P$:</strong><br>The maximum infected population occurs as $t \\to \\infty$. In this limit, $\\mathrm{e}^{ -0.4t } \\to 0$. Therefore:<br>\\begin{aligned} P &= \\lim_{ t \\to \\infty } \\dfrac{ 800 }{ 2 + 8\\mathrm{e}^{ -0.4t } } \\cr &= \\dfrac{ 800 }{ 2 + 8( 0 ) } \\cr &= \\dfrac{ 800 }{ 2 } = 400 \\end{aligned}<br>Therefore, the maximum number of infected students is $P = 400$."
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $80$, <strong>(b)</strong> as shown, <strong>(c)</strong> $T \\approx 3.47\\text{ days}$, <strong>(d)</strong> $P = 800$",
                                "feedback": "This is a misinterpretation of the carrying capacity $P$. The value of $P$ is not the numerator of the fraction ($800$), but rather the limit as $t \\to \\infty$, which is $\\dfrac{ 800 }{ 2 } = 400$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $80$, <strong>(b)</strong> as shown, <strong>(c)</strong> $T \\approx 1.73\\text{ days}$, <strong>(d)</strong> $P = 400$",
                                "feedback": "This error occurs if you make a calculation slip when taking logarithms in Step 4, such as dividing by $0.8$ instead of $0.4$, which yields a smaller value of $T \\approx 1.73\\text{ days}$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $400$, <strong>(b)</strong> as shown, <strong>(c)</strong> $T \\approx 3.47\\text{ days}$, <strong>(d)</strong> $P = 80$",
                                "feedback": "This is a calculation slip where the initial infected population and carrying capacity are swapped, setting $I(0) = 400$ and $P = 80$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Contextual Constraints",
                        "content": "Always remember that mathematical models have physical limitations. While the carrying capacity of the virus is $P = 400$, this model only holds true if the total school population is at least $400$. Always check if the algebraic carrying capacity is realistic relative to the real-world constraints given in the problem context!"
                }
        },
        {
                "id": "004499",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "A conservationist is managing a population of fish in a newly stocked lake. The number of fish, $F$, in the lake, $t$ months after stocking, is modeled by the equation:<br>$$F = \\dfrac{ 3000 }{ 3 + 9\\mathrm{e}^{ -0.15t } }, \\quad t \\ge 0, \\quad t \\in \\mathbb{R}$$<br><strong>(a)</strong> Find the number of fish in the lake at the start of the study.<br><br><strong>(b)</strong> Show that the rate of growth of the fish population, $\\dfrac{ \\mathrm{d}F }{ \\mathrm{d}t }$, is given by:<br>$$\\dfrac{ \\mathrm{d}F }{ \\mathrm{d}t } = \\dfrac{ 3F( 1000 - F ) }{ 20000 }$$<br><strong>(c)</strong> The rate of growth is a maximum after $T$ months. Find, according to the model, the value of $T$ to 2 decimal places.<br><br><strong>(d)</strong> According to the model, the maximum number of fish in the lake is $P$. State the value of $P$.",
                "steps": [
                        "<strong>(a) Finding the initial fish population:</strong><br>At the start of the study, $t = 0$. Substituting $t = 0$ into the model equation:<br>\\begin{aligned} F &= \\dfrac{ 3000 }{ 3 + 9\\mathrm{e}^{ -0.15( 0 ) } } \\cr &= \\dfrac{ 3000 }{ 3 + 9( 1 ) } \\cr &= \\dfrac{ 3000 }{ 12 } = 250 \\end{aligned}<br>Therefore, there are $250$ fish in the lake at the start of the study.",
                        "<strong>(b) Finding the rate of growth $\\dfrac{ \\mathrm{d}F }{ \\mathrm{d}t }$:</strong><br>We rewrite the model as $F = 3000( 3 + 9\\mathrm{e}^{ -0.15t } )^{ -1 }$ and differentiate with respect to $t$ using the chain rule:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}F }{ \\mathrm{d}t } &= -3000( 3 + 9\\mathrm{e}^{ -0.15t } )^{ -2 } \\times \\left( -0.15 \\times 9\\mathrm{e}^{ -0.15t } \\right) \\cr &= \\dfrac{ 4050\\mathrm{e}^{ -0.15t } }{ ( 3 + 9\\mathrm{e}^{ -0.15t } )^2 } \\end{aligned}<br>Now, we rearrange the original model equation to express $9\\mathrm{e}^{ -0.15t }$ in terms of $F$:<br>\\begin{aligned} 3 + 9\\mathrm{e}^{ -0.15t } &= \\dfrac{ 3000 }{ F } \\cr 9\\mathrm{e}^{ -0.15t } &= \\dfrac{ 3000 }{ F } - 3 = \\dfrac{ 3( 1000 - F ) }{ F } \\end{aligned}",
                        "We substitute this expression back into our derivative to express $\\dfrac{ \\mathrm{d}F }{ \\mathrm{d}t }$ purely in terms of $F$:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}F }{ \\mathrm{d}t } &= 0.15 \\times \\left( \\dfrac{ 3000 }{ 3 + 9\\mathrm{e}^{ -0.15t } } \\right) \\times \\left( \\dfrac{ 9\\mathrm{e}^{ -0.15t } }{ 3 + 9\\mathrm{e}^{ -0.15t } } \\right) \\cr &= 0.15 \\times F \\times \\left( \\dfrac{ \\dfrac{ 3( 1000 - F ) }{ F } }{ \\dfrac{ 3000 }{ F } } \\right) \\cr &= 0.15 \\times F \\times \\left( \\dfrac{ 3( 1000 - F ) }{ 3000 } \\right) \\cr &= \\dfrac{ 0.45F( 1000 - F ) }{ 3000 } = \\dfrac{ 3F( 1000 - F ) }{ 20000 } \\end{aligned}",
                        "<strong>(c) Finding the time $T$ of maximum rate of growth:</strong><br>The rate of growth is modeled by the quadratic equation $R( F ) = \\dfrac{ 3000F - 3F^2 }{ 20000 }$. The maximum of this quadratic occurs at its vertex, which is at:<br>\\begin{aligned}\nF &= \\dfrac{ 1000 }{ 2 } \\cr\n&= 500\n\\end{aligned}<br>We find the value of $T$ when $F = 500$ using our model equation:<br>\\begin{aligned} 500 &= \\dfrac{ 3000 }{ 3 + 9\\mathrm{e}^{ -0.15T } } \\cr 3 + 9\\mathrm{e}^{ -0.15T } &= \\dfrac{ 3000 }{ 500 } = 6 \\cr 9\\mathrm{e}^{ -0.15T } &= 3 \\cr \\mathrm{e}^{ -0.15T } &= \\dfrac{ 1 }{ 3 } \\cr -0.15T &= \\ln\\left( \\dfrac{ 1 }{ 3 } \\right) = -\\ln( 3 ) \\cr T &= \\dfrac{ \\ln 3 }{ 0.15 } \\approx 7.32\\text{ months} \\end{aligned}",
                        "<strong>(d) Finding the carrying capacity $P$:</strong><br>The maximum fish population occurs as $t \\to \\infty$. In this limit, $\\mathrm{e}^{ -0.15t } \\to 0$. Therefore:<br>\\begin{aligned} P &= \\lim_{ t \\to \\infty } \\dfrac{ 3000 }{ 3 + 9\\mathrm{e}^{ -0.15t } } \\cr &= \\dfrac{ 3000 }{ 3 + 9( 0 ) } \\cr &= \\dfrac{ 3000 }{ 3 } = 1000 \\end{aligned}<br>Therefore, the maximum number of fish according to the model is $P = 1000$."
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $250$, <strong>(b)</strong> as shown, <strong>(c)</strong> $T \\approx 7.32\\text{ months}$, <strong>(d)</strong> $P = 3000$",
                                "feedback": "This is a misinterpretation of the carrying capacity $P$. The value of $P$ is not the numerator of the fraction ($3000$), but rather the limit as $t \\to \\infty$, which is $\\dfrac{ 3000 }{ 3 } = 1000$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $250$, <strong>(b)</strong> as shown, <strong>(c)</strong> $T \\approx 3.66\\text{ months}$, <strong>(d)</strong> $P = 1000$",
                                "feedback": "This error occurs if you make a calculation slip when taking logarithms in Step 4, such as dividing by $0.3$ instead of $0.15$, which yields a smaller value of $T \\approx 3.66\\text{ months}$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $1000$, <strong>(b)</strong> as shown, <strong>(c)</strong> $T \\approx 7.32\\text{ months}$, <strong>(d)</strong> $P = 250$",
                                "feedback": "This is a calculation slip where the initial population and carrying capacity are swapped, setting $F(0) = 1000$ and $P = 250$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Simplifying Fraction Arithmetic",
                        "content": "When expanding and rearranging derivatives in logistic models, write your intermediate decimals as exact fractions where possible. Converting $0.15$ to $\\dfrac{ 3 }{ 20 }$ or $0.45$ to $\\dfrac{ 9 }{ 20 }$ early in Step 3 helps to easily clear complex rational expressions and keeps the final derivation robust and clean."
                }
        },
        {
                "id": "004500",
                "board": "Pearson Edexcel",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Modelling and Applications"
                ],
                "img": false,
                "question": "A park ranger is studying a population of red squirrels in a woodland sanctuary. The number of squirrels, $S$, in the woodland, $t$ years after the sanctuary opened, is modeled by the equation:<br>$$S = \\dfrac{ 500 }{ 2 + 3\\mathrm{e}^{ -0.5t } }, \\quad t \\ge 0, \\quad t \\in \\mathbb{R}$$<br><strong>(a)</strong> Find the number of squirrels in the woodland at the start of the study.<br><br><strong>(b)</strong> Show that the rate of growth of the squirrel population, $\\dfrac{ \\mathrm{d}S }{ \\mathrm{d}t }$, is given by:<br>$$\\dfrac{ \\mathrm{d}S }{ \\mathrm{d}t } = \\dfrac{ S( 250 - S ) }{ 500 }$$<br><strong>(c)</strong> The rate of growth is a maximum after $T$ years. Find, according to the model, the value of $T$ to 2 decimal places.<br><br><strong>(d)</strong> According to the model, the maximum number of squirrels in the sanctuary is $P$. State the value of $P$.",
                "steps": [
                        "<strong>(a) Finding the initial squirrel population:</strong><br>At the start of the study, $t = 0$. Substituting $t = 0$ into the model equation:<br>\\begin{aligned} S &= \\dfrac{ 500 }{ 2 + 3\\mathrm{e}^{ -0.5( 0 ) } } \\cr &= \\dfrac{ 500 }{ 2 + 3( 1 ) } \\cr &= \\dfrac{ 500 }{ 5 } = 100 \\end{aligned}<br>Therefore, there are $100$ squirrels in the woodland at the start of the study.",
                        "<strong>(b) Finding the rate of growth $\\dfrac{ \\mathrm{d}S }{ \\mathrm{d}t }$:</strong><br>We rewrite the model as $S = 500( 2 + 3\\mathrm{e}^{ -0.5t } )^{ -1 }$ and differentiate with respect to $t$ using the chain rule:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}S }{ \\mathrm{d}t } &= -500( 2 + 3\\mathrm{e}^{ -0.5t } )^{ -2 } \\times \\left( -0.5 \\times 3\\mathrm{e}^{ -0.5t } \\right) \\cr &= \\dfrac{ 750\\mathrm{e}^{ -0.5t } }{ ( 2 + 3\\mathrm{e}^{ -0.5t } )^2 } \\end{aligned}<br>Now, we rearrange the original model equation to express $3\\mathrm{e}^{ -0.5t }$ in terms of $S$:<br>\\begin{aligned} 2 + 3\\mathrm{e}^{ -0.5t } &= \\dfrac{ 500 }{ S } \\cr 3\\mathrm{e}^{ -0.5t } &= \\dfrac{ 500 }{ S } - 2 = \\dfrac{ 2( 250 - S ) }{ S } \\end{aligned}",
                        "We substitute this expression back into our derivative to express $\\dfrac{ \\mathrm{d}S }{ \\mathrm{d}t }$ purely in terms of $S$:<br>\\begin{aligned} \\dfrac{ \\mathrm{d}S }{ \\mathrm{d}t } &= 0.5 \\times \\left( \\dfrac{ 500 }{ 2 + 3\\mathrm{e}^{ -0.5t } } \\right) \\times \\left( \\dfrac{ 3\\mathrm{e}^{ -0.5t } }{ 2 + 3\\mathrm{e}^{ -0.5t } } \\right) \\cr &= 0.5 \\times S \\times \\left( \\dfrac{ \\dfrac{ 2( 250 - S ) }{ S } }{ \\dfrac{ 500 }{ S } } \\right) \\cr &= 0.5 \\times S \\times \\left( \\dfrac{ 2( 250 - S ) }{ 500 } \\right) \\cr &= \\dfrac{ S( 250 - S ) }{ 500 } \\end{aligned}",
                        "<strong>(c) Finding the time $T$ of maximum rate of growth:</strong><br>The rate of growth is modeled by the quadratic equation $R( S ) = \\dfrac{ 250S - S^2 }{ 500 }$. The maximum of this quadratic occurs at its vertex, which is at:<br>\\begin{aligned}\nS &= \\dfrac{ 250 }{ 2 } \\cr\n&= 125\n\\end{aligned}<br>We find the value of $T$ when $S = 125$ using our model equation:<br>\\begin{aligned} 125 &= \\dfrac{ 500 }{ 2 + 3\\mathrm{e}^{ -0.5T } } \\cr 2 + 3\\mathrm{e}^{ -0.5T } &= \\dfrac{ 500 }{ 125 } = 4 \\cr 3\\mathrm{e}^{ -0.5T } &= 2 \\cr \\mathrm{e}^{ -0.5T } &= \\dfrac{ 2 }{ 3 } \\cr -0.5T &= \\ln\\left( \\dfrac{ 2 }{ 3 } \\right) = -\\ln( 1.5 ) \\cr T &= 2\\ln( 1.5 ) \\approx 0.81\\text{ years} \\end{aligned}",
                        "<strong>(d) Finding the carrying capacity $P$:</strong><br>The maximum squirrel population occurs as $t \\to \\infty$. In this limit, $\\mathrm{e}^{ -0.5t } \\to 0$. Therefore:<br>\\begin{aligned} P &= \\lim_{ t \\to \\infty } \\dfrac{ 500 }{ 2 + 3\\mathrm{e}^{ -0.5t } } \\cr &= \\dfrac{ 500 }{ 2 + 3( 0 ) } \\cr &= \\dfrac{ 500 }{ 2 } = 250 \\end{aligned}<br>Therefore, the maximum number of squirrels in the woodland sanctuary is $P = 250$."
                ],
                "pi_options": [
                        {
                                "ans": "$S(0) = 100, T \\approx 0.81\\text{ years}, P = 500$",
                                "feedback": "This is a misinterpretation of the carrying capacity $P$. The value of $P$ is not the numerator of the fraction ($500$), but rather the limit as $t \\to \\infty$, which is $\\dfrac{ 500 }{ 2 } = 250$."
                        },
                        {
                                "ans": "$S(0) = 100, T \\approx 1.62\\text{ years}, P = 250$",
                                "feedback": "This error occurs if you make a calculation slip when taking logarithms in Step 4, such as dividing by $0.25$ instead of $0.5$, which yields a larger value of $T \\approx 1.62\\text{ years}$."
                        },
                        {
                                "ans": "$S(0) = 250, T \\approx 0.81\\text{ years}, P = 100$",
                                "feedback": "This is a calculation slip where the initial population and carrying capacity are swapped, setting $S(0) = 250$ and $P = 100$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Vertex of Logistic Growth",
                        "content": "For any standard logistic growth model of the form $\\dfrac{ \\mathrm{d}S }{ \\mathrm{d}t } = k S( P - S )$, the maximum rate of growth always occurs exactly at half of the carrying capacity: $S = \\dfrac{ P }{ 2 }$. Recognizing this shortcut allows you to immediately bypass the quadratic vertex derivation and jump directly to solving the time $T$ when $S = \\dfrac{ P }{ 2 }$."
                }
        }
];
