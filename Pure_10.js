window.ALEVEL_QUESTIONS = [
{
    "id": "004451",
    "board": "Pearson Edexcel",
    "level": "A",
    "major_area": "Numerical Methods",
    "topic": "Numerical Methods",
    "subtopic": [
        "Newton-Raphson Method",
        "Algebraic Derivations",
        "Iterative Approximations"
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
    "major_area": "Numerical Methods",
    "topic": "Numerical Methods",
    "subtopic": [
        "Newton-Raphson Method",
        "Trigonometric Derivatives",
        "Iterative Approximations"
    ],
    "img": false,
    "question": "The equation $x - \\cos x = 0$ has exactly one real root in the interval $[0, \\pi]$.<br><br><strong>(a)</strong> Show that, for this equation, the Newton-Raphson formula can be written as:<br>$$x_{n+1} = \\dfrac{ x_n \\sin x_n + \\cos x_n }{ 1 + \\sin x_n }$$ [3]<br><br><strong>(b)</strong> Using the formula given in part (a) with a starting value of $x_1 = 0$, find the values of $x_2$ and $x_3$, giving your answers to 3 decimal places (working in radians). [2]<br><br><strong>(c)</strong> Explain why, for this equation, the Newton-Raphson method cannot be used with a starting value of $x_1 = -\\dfrac{ \\pi }{ 2 }$. [1]",
    "steps": [
        "<strong>Step 1: Define the function and find its derivative for part (a)</strong><br>Let $f(x) = x - \\cos x$. Differentiate $f(x)$ with respect to $x$:<br>\\begin{aligned} f'(x) &= \\dfrac{ \\mathrm{d} }{ \\mathrm{d}x } ( x - \\cos x ) \\cr &= 1 - ( -\\sin x ) \\cr &= 1 + \\sin x \\cr \\end{aligned}",
        "<strong>Step 2: Set up the Newton-Raphson recurrence relation</strong><br>The general Newton-Raphson formula is $x_{n+1} = x_n - \\dfrac{ f(x_n) }{ f'(x_n) }$. Substitute our expressions for $f(x_n)$ and $f'(x_n)$:<br>\\begin{aligned} x_{n+1} &= x_n - \\dfrac{ x_n - \\cos x_n }{ 1 + \\sin x_n } \\cr \\end{aligned}",
        "<strong>Step 3: Combine into a single algebraic fraction to complete part (a)</strong><br>Express the terms over a common denominator:<br>\\begin{aligned} x_{n+1} &= \\dfrac{ x_n( 1 + \\sin x_n ) - ( x_n - \\cos x_n ) }{ 1 + \\sin x_n } \\cr &= \\dfrac{ x_n + x_n \\sin x_n - x_n + \\cos x_n }{ 1 + \\sin x_n } \\cr &= \\dfrac{ x_n \\sin x_n + \\cos x_n }{ 1 + \\sin x_n } \\cr \\end{aligned}<br>This matches the required formula.",
        "<strong>Step 4: Perform the iterations for part (b)</strong><br>Ensure your calculator is strictly in **radian** mode. Substitute $x_1 = 0$ into the formula to calculate $x_2$:<br>\\begin{aligned} x_2 &= \\dfrac{ 0 \\sin 0 + \\cos 0 }{ 1 + \\sin 0 } \\cr &= \\dfrac{ 0 + 1 }{ 1 + 0 } \\cr &= 1 \\cr \\end{aligned}<br>Now, substitute $x_2 = 1$ back into the formula to find $x_3$:<br>\\begin{aligned} x_3 &= \\dfrac{ 1 \\sin 1 + \\cos 1 }{ 1 + \\sin 1 } \\cr &\\approx \\dfrac{ ( 1 )( 0.84147 ) + 0.54030 }{ 1 + 0.84147 } \\cr &\\approx \\dfrac{ 1.38177 }{ 1.84147 } \\cr &\\approx 0.750 \\cr \\end{aligned}",
        "<strong>Step 5: Formulate the explanation for part (c)</strong><br>Evaluate the derivative $f'(x) = 1 + \\sin x$ at our starting value $x_1 = -\\dfrac{ \\pi }{ 2 }$:<br>\\begin{aligned} f'\\left( -\\dfrac{ \\pi }{ 2 } \\right) &= 1 + \\sin\\left( -\\dfrac{ \\pi }{ 2 } \\right) \\cr &= 1 + ( -1 ) \\cr &= 0 \\cr \\end{aligned}<br>Because the derivative is $0$ at this starting point, the Newton-Raphson formula would require division by zero, which is mathematically undefined. Therefore, the method cannot be used."
    ],
    "pi_options": [
        {
            "ans": "$$x_2 = 1.000, \\quad x_3 \\approx 0.750, \\quad \\text{Method fails because } \\cos\\left(-\\dfrac{\\pi}{2}\\right) = 0$$",
            "feedback": "You may have correctly calculated the values, but your explanation in part (c) is incorrect. The value of $\\cos\\left(-\\dfrac{\\pi}{2}\right) = 0$ is perfectly fine and is just part of the function's numerator. The method breaks because the derivative $f'\\left(-\\dfrac{\\pi}{2}\right) = 1 + \\sin\\left(-\\dfrac{\\pi}{2}\right) = 0$, leading to division by zero."
        },
        {
            "ans": "$$x_2 = 1.000, \\quad x_3 \\approx 0.999, \\quad \\text{Method fails because the derivative is zero}$$",
            "feedback": "You may have worked in **degree** mode instead of **radian** mode when calculating $x_3$. For calculus and numerical methods involving trigonometric functions, always make sure your calculator is set to radians."
        },
        {
            "ans": "$$x_2 = 1.000, \\quad x_3 \\approx 0.750, \\quad \\text{Method fails because the angle is negative}$$",
            "feedback": "Your numerical approximations are correct, but your explanation is incorrect. The Newton-Raphson method can easily handle negative numbers. The failure is strictly caused by the derivative equaling zero at $x_1 = -\\dfrac{\\pi}{2}$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Radian Mode is Mandatory",
        "content": "Whenever you are working with calculus or numerical methods (like Newton-Raphson or trapezium rules) that involve trigonometric functions, **your calculator must be in radian mode**. Differentiation of trigonometric functions is mathematically defined only in radians; using degrees will lead to completely incorrect values."
    }
},
{
    "id": "004453",
    "board": "Pearson Edexcel",
    "level": "A",
    "major_area": "Numerical Methods",
    "topic": "Numerical Methods",
    "subtopic": [
        "Newton-Raphson Method",
        "Logarithmic Derivatives",
        "Iterative Approximations"
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
    "major_area": "Numerical Methods",
    "topic": "Numerical Methods",
    "subtopic": [
        "Newton-Raphson Method",
        "Exponential Derivatives",
        "Iterative Approximations"
    ],
    "img": false,
    "question": "The equation $\\mathrm{e}^x + 3x - 4 = 0$ has exactly one real root.<br><br><strong>(a)</strong> Show that, for this equation, the Newton-Raphson formula can be written as:<br>$$x_{n+1} = \\dfrac{ ( x_n - 1 )\\mathrm{e}^{x_n} + 4 }{ \\mathrm{e}^{x_n} + 3 }$$ [3]<br><br><strong>(b)</strong> Using the formula given in part (a) with a starting value of $x_1 = 0$, find the values of $x_2$ and $x_3$, giving your answers to three significant figures. [2]<br><br><strong>(c)</strong> Explain whether or not the Newton-Raphson method can fail due to division by zero for any real starting value of $x_1$. [1]",
    "steps": [
        "<strong>Step 1: Define the function and find its derivative for part (a)</strong><br>Let $f(x) = \\mathrm{e}^x + 3x - 4$. Differentiate $f(x)$ with respect to $x$:<br>\\begin{aligned} f'(x) &= \\dfrac{ \\mathrm{d} }{ \\mathrm{d}x } ( \\mathrm{e}^x + 3x - 4 ) \\cr &= \\mathrm{e}^x + 3 \\cr \\end{aligned}",
        "<strong>Step 2: Set up the Newton-Raphson recurrence relation</strong><br>The general Newton-Raphson formula is $x_{n+1} = x_n - \\dfrac{ f(x_n) }{ f'(x_n) }$. Substitute our expressions:<br>\\begin{aligned} x_{n+1} &= x_n - \\dfrac{ \\mathrm{e}^{x_n} + 3x_n - 4 }{ \\mathrm{e}^{x_n} + 3 } \\cr \\end{aligned}",
        "<strong>Step 3: Combine into a single algebraic fraction to complete part (a)</strong><br>Express the terms over a common denominator:<br>\\begin{aligned} x_{n+1} &= \\dfrac{ x_n( \\mathrm{e}^{x_n} + 3 ) - ( \\mathrm{e}^{x_n} + 3x_n - 4 ) }{ \\mathrm{e}^{x_n} + 3 } \\cr &= \\dfrac{ x_n \\mathrm{e}^{x_n} + 3x_n - \\mathrm{e}^{x_n} - 3x_n + 4 }{ \\mathrm{e}^{x_n} + 3 } \\cr &= \\dfrac{ x_n \\mathrm{e}^{x_n} - \\mathrm{e}^{x_n} + 4 }{ \\mathrm{e}^{x_n} + 3 } \\cr &= \\dfrac{ ( x_n - 1 )\\mathrm{e}^{x_n} + 4 }{ \\mathrm{e}^{x_n} + 3 } \\cr \\end{aligned}<br>This matches the required formula.",
        "<strong>Step 4: Perform the iterations for part (b)</strong><br>Substitute $x_1 = 0$ into the formula to calculate $x_2$:<br>\\begin{aligned} x_2 &= \\dfrac{ ( 0 - 1 )\\mathrm{e}^0 + 4 }{ \\mathrm{e}^0 + 3 } \\cr &= \\dfrac{ ( -1 )( 1 ) + 4 }{ 1 + 3 } \\cr &= \\dfrac{ 3 }{ 4 } \\cr &= 0.750 \\quad \\text{(to 3 s.f.)} \\cr \\end{aligned}<br>Now, substitute $x_2 = 0.75$ back into the formula to find $x_3$:<br>\\begin{aligned} x_3 &= \\dfrac{ ( 0.75 - 1 )\\mathrm{e}^{0.75} + 4 }{ \\mathrm{e}^{0.75} + 3 } \\cr &\\approx \\dfrac{ ( -0.25 )( 2.1170 ) + 4 }{ 2.1170 + 3 } \\cr &\\approx \\dfrac{ -0.52925 + 4 }{ 5.1170 } \\cr &\\approx \\dfrac{ 3.47075 }{ 5.1170 } \\cr &\\approx 0.678 \\quad \\text{(to 3 s.f.)} \\cr \\end{aligned}",
        "<strong>Step 5: Formulate the explanation for part (c)</strong><br>For the Newton-Raphson method to fail due to division by zero, the derivative $f'(x)$ must be equal to zero at some starting value $x_1$.<br>Our derivative is $f'(x) = \\mathrm{e}^x + 3$.<br>Since $\\mathrm{e}^x > 0$ for all real values of $x$, it follows that:<br>$$f'(x) \\ge 3 > 0 \\quad \\text{for all } x \\in \\mathbb{R}$$<br>Since the derivative is strictly positive and can never be zero, the Newton-Raphson method **cannot** fail due to division by zero for any real starting value."
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
    "major_area": "Numerical Methods",
    "topic": "Numerical Methods",
    "subtopic": [
        "Newton-Raphson Method",
        "Algebraic Derivations",
        "Iterative Approximations"
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
}
];