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
},
  {
    "id": "004456",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Polynomials",
    "subtopic": [
      "Factor Theorem",
      "Trigonometric Equations",
      "Proof"
    ],
    "img": false,
    "question": "$f(x) = -2x^3 + 8x^2 - 9x + 9, \\quad x \\in \\mathbb{R}$<br><br><strong>(a) (i)</strong> Calculate $f(3)$.<br><strong>(ii)</strong> Write $f(x)$ as a product of two algebraic factors.<br><br>Using the answer to <strong>(a)(ii)</strong>:<br><strong>(b)</strong> Prove that there are exactly two real solutions to the equation $-2y^6 + 8y^4 - 9y^2 + 9 = 0$.<br><br><strong>(c)</strong> Deduce the number of real solutions, for $5\\pi \\le \\theta < 9\\pi$, to the equation $2\\tan^3\\theta - 8\\tan^2\\theta + 9\\tan\\theta - 9 = 0$.<br><br>State the real solutions to the equation in <strong>(b)</strong> and the number of solutions in <strong>(c)</strong>.",
    "steps": [
      "<strong>Part (a)(i):</strong><br>Substitute $x = 3$ into the expression for $f(x)$:<br>\\begin{aligned} f(3) &= -2(3)^3 + 8(3)^2 - 9(3) + 9 \\cr &= -2(27) + 8(9) - 27 + 9 \\cr &= -54 + 72 - 27 + 9 \\cr &= 0 \\cr \\end{aligned}<br>Since $f(3) = 0$, $x = 3$ is a root, which means $(x - 3)$ is a linear factor of $f(x)$.",
      "<strong>Part (a)(ii):</strong><br>Divide $-2x^3 + 8x^2 - 9x + 9$ by $(x - 3)$ using polynomial division or equating coefficients:<br>\\begin{aligned} -2x^3 + 8x^2 - 9x + 9 &= (x - 3)(-2x^2 + px + q) \\cr &= -2x^3 + (p + 6)x^2 + (q - 3p)x - 3q \\cr \\end{aligned}<br>Equating coefficients:<br>\\begin{aligned} p + 6 &= 8 \\implies p = 2 \\cr -3q &= 9 \\implies q = -3 \\cr \\end{aligned}<br>Thus, the factored expression is:<br>$$f(x) = (x - 3)(-2x^2 + 2x - 3) = (3 - x)(2x^2 - 2x + 3)$$<br>We check the discriminant of the quadratic factor $2x^2 - 2x + 3$:<br>\\begin{aligned} \\Delta &= (-2)^2 - 4(2)(3) \\cr &= 4 - 24 \\cr &= -20 < 0 \\cr \\end{aligned}<br>Because the discriminant is negative, the quadratic factor has no real roots. Therefore, $x = 3$ is the unique real root of $f(x) = 0$.",
      "<strong>Part (b):</strong><br>We want to find the real solutions to:<br>$$-2y^6 + 8y^4 - 9y^2 + 9 = 0$$<br>Let $x = y^2$. This transforms the equation into:<br>$$-2x^3 + 8x^2 - 9x + 9 = 0$$<br>Which is exactly $f(x) = 0$. Since we showed in part <strong>(a)(ii)</strong> that the only real root is $x = 3$, we have:<br>$$y^2 = 3 \\implies y = \\pm\\sqrt{ 3 }$$<br>The other factor yields $-2(y^2)^2 + 2(y^2) - 3 = 0$, which has no real solutions because its discriminant is negative. Thus, there are exactly two real solutions:<br>$$y = \\pm\\sqrt{ 3 }$$",
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
    "board": "Edexcel",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Polynomials",
    "subtopic": [
      "Factor Theorem",
      "Trigonometric Equations",
      "Proof"
    ],
    "img": false,
    "question": "$f(x) = 2x^3 + x^2 + x - 4, \\quad x \\in \\mathbb{R}$<br><br><strong>(a) (i)</strong> Calculate $f(1)$.<br><strong>(ii)</strong> Write $f(x)$ as a product of two algebraic factors.<br><br>Using the answer to <strong>(a)(ii)</strong>:<br><strong>(b)</strong> Prove that there are exactly two real solutions to the equation $2y^{12} + y^8 + y^4 - 4 = 0$.<br><br><strong>(c)</strong> Deduce the number of real solutions, for $0 \\le \\theta < 4\\pi$, to the equation $2\\sin^3\\theta + \\sin^2\\theta + \\sin\\theta - 4 = 0$.<br><br>State the real solutions to the equation in <strong>(b)</strong> and the number of solutions in <strong>(c)</strong>.",
    "steps": [
      "<strong>Part (a)(i):</strong><br>Substitute $x = 1$ into the expression for $f(x)$:<br>\\begin{aligned} f(1) &= 2(1)^3 + (1)^2 + 1 - 4 \\cr &= 2 + 1 + 1 - 4 \\cr &= 0 \\cr \\end{aligned}<br>Since $f(1) = 0$, $x = 1$ is a root, meaning $(x - 1)$ is a linear factor of $f(x)$. ",
      "<strong>Part (a)(ii):</strong><br>Divide $2x^3 + x^2 + x - 4$ by $(x - 1)$:<br>\\begin{aligned} 2x^3 + x^2 + x - 4 &= (x - 1)(2x^2 + 3x + 4) \\cr \\end{aligned}<br>We check the discriminant of the quadratic factor $2x^2 + 3x + 4$:<br>\\begin{aligned} \\Delta &= (3)^2 - 4(2)(4) \\cr &= 9 - 32 \\cr &= -23 < 0 \\cr \\end{aligned}<br>Since the discriminant is negative, the quadratic factor has no real roots. Thus, $x = 1$ is the unique real root of $f(x) = 0$.",
      "<strong>Part (b):</strong><br>We solve:<br>$$2y^{12} + y^8 + y^4 - 4 = 0$$<br>Let $x = y^4$. The equation becomes:<br>$$2x^3 + x^2 + x - 4 = 0$$<br>This is exactly $f(x) = 0$. Since $x = 1$ is the unique real root, we have:<br>$$y^4 = 1 \\implies y^2 = 1 \\implies y = \\pm 1$$<br>The other branch $y^4 < 0$ has no real roots. Thus, there are exactly two real solutions: $y = \\pm 1$.",
      "<strong>Part (c):</strong><br>The equation is:<br>$$2\\sin^3\\theta + \\sin^2\\theta + \\sin\\theta - 4 = 0$$<br>Let $x = \\sin\\theta$. This yields $f(x) = 0 \\implies \\sin\\theta = 1$.<br>We look for solutions in the interval $0 \\le \\theta < 4\\pi$, which represents two complete periods of the sine function.<br>The sine function equals $1$ exactly once per period (at the maximum point of each cycle):<br>$$\\theta = \\dfrac{ \\pi }{ 2 }, \\quad \\theta = \\dfrac{ 5\\pi }{ 2 }$$<br>Thus, there are exactly $2$ real solutions."
    ],
    "pi_options": [
      {
        "ans": "$$y = 1\\text{ and }4\\text{ solutions}$$",
        "feedback": "This error occurs if you forget that $y^4 = 1$ has two real solutions ($y = \pm 1$) and also miscalculate the number of solutions to $\sin\theta = 1$ in the interval $[0, 4\pi)$, which has only 2 peaks."
      },
      {
        "ans": "$$y = \\pm 1\\text{ and }4\\text{ solutions}$$",
        "feedback": "This mistake arises from correctly identifying the roots of $y^4 = 1$ but miscounting the number of real solutions to $\sin\theta = 1$ in the interval $0 \le \theta < 4\pi$. Over two full cycles of the sine wave, the value $1$ is only reached at the peak of each cycle, giving exactly 2 solutions, not 4."
      },
      {
        "ans": "$$y = \\pm 1\\text{ and }0\\text{ solutions}$$",
        "feedback": "This occurs if you believe that $\sin\theta = 1$ has no real solutions, possibly by confusing it with a value outside the range $[-1, 1]$. Since $1$ is within the range of the sine function, solutions exist."
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
    "board": "Edexcel",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Polynomials",
    "subtopic": [
      "Factor Theorem",
      "Trigonometric Equations",
      "Proof"
    ],
    "img": false,
    "question": "$f(x) = x^3 + x^2 + x + 6, \\quad x \\in \\mathbb{R}$<br><br><strong>(a) (i)</strong> Calculate $f(-2)$.<br><strong>(ii)</strong> Write $f(x)$ as a product of two algebraic factors.<br><br>Using the answer to <strong>(a)(ii)</strong>:<br><strong>(b)</strong> Prove that there is exactly one real solution to the equation $y^9 + y^6 + y^3 + 6 = 0$.<br><br><strong>(c)</strong> Deduce the number of real solutions, for $0 \\le \\theta < 2\\pi$, to the equation $\\cos^3\\theta + \\cos^2\\theta + \\cos\\theta + 6 = 0$.<br><br>State the real solutions to the equation in <strong>(b)</strong> and the number of solutions in <strong>(c)</strong>.",
    "steps": [
      "<strong>Part (a)(i):</strong><br>Substitute $x = -2$ into $f(x)$:<br>\\begin{aligned} f(-2) &= (-2)^3 + (-2)^2 + (-2) + 6 \\cr &= -8 + 4 - 2 + 6 \\cr &= 0 \\cr \\end{aligned}<br>Since $f(-2) = 0$, $x = -2$ is a root, meaning $(x + 2)$ is a linear factor of $f(x)$.",
      "<strong>Part (a)(ii):</strong><br>Divide $x^3 + x^2 + x + 6$ by $(x + 2)$:<br>\\begin{aligned} x^3 + x^2 + x + 6 &= (x + 2)(x^2 - x + 3) \\cr \\end{aligned}<br>We check the discriminant of the quadratic factor $x^2 - x + 3$:<br>\\begin{aligned} \\Delta &= (-1)^2 - 4(1)(3) \\cr &= 1 - 12 \\cr &= -11 < 0 \\cr \\end{aligned}<br>Since the discriminant is negative, there are no real roots from this quadratic factor. Thus, $x = -2$ is the unique real root of $f(x) = 0$.",
      "<strong>Part (b):</strong><br>We solve:<br>$$y^9 + y^6 + y^3 + 6 = 0$$<br>Let $x = y^3$. The equation becomes:<br>$$x^3 + x^2 + x + 6 = 0$$<br>This is $f(x) = 0$. Since $x = -2$ is the only real root, we have:<br>$$y^3 = -2 \\implies y = -\\sqrt[3]{ 2 }$$<br>Unlike even powers, a real number has exactly one real cube root. Hence, there is exactly one real solution: $y = -\\sqrt[3]{ 2 }$.",
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
    "board": "Edexcel",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Polynomials",
    "subtopic": [
      "Factor Theorem",
      "Trigonometric Equations",
      "Proof"
    ],
    "img": false,
    "question": "$f(x) = 2x^3 + 3x^2 + 2x - 2, \\quad x \\in \\mathbb{R}$<br><br><strong>(a) (i)</strong> Calculate $f(0.5)$.<br><strong>(ii)</strong> Write $f(x)$ as a product of two algebraic factors.<br><br>Using the answer to <strong>(a)(ii)</strong>:<br><strong>(b)</strong> Prove that there are exactly two real solutions to the equation $2y^6 + 3y^4 + 2y^2 - 2 = 0$.<br><br><strong>(c)</strong> Deduce the number of real solutions, for $0 \\le \\theta < 4\\pi$, to the equation $2\\cos^3\\theta + 3\\cos^2\\theta + 2\\cos\\theta - 2 = 0$.<br><br>State the real solutions to the equation in <strong>(b)</strong> and the number of solutions in <strong>(c)</strong>.",
    "steps": [
      "<strong>Part (a)(i):</strong><br>Substitute $x = 0.5$ (or $x = \\dfrac{ 1 }{ 2 }$) into $f(x)$:<br>\\begin{aligned} f\\left(\\dfrac{ 1 }{ 2 }\\right) &= 2\\left(\\dfrac{ 1 }{ 2 }\\right)^3 + 3\\left(\\dfrac{ 1 }{ 2 }\\right)^2 + 2\\left(\\dfrac{ 1 }{ 2 }\\right) - 2 \\cr &= 2\\left(\\dfrac{ 1 }{ 8 }\\right) + 3\\left(\\dfrac{ 1 }{ 4 }\\right) + 1 - 2 \\cr &= \\dfrac{ 1 }{ 4 } + \\dfrac{ 3 }{ 4 } + 1 - 2 \\cr &= 0 \\cr \\end{aligned}<br>Since $f(0.5) = 0$, $x = 0.5$ is a root, meaning $(2x - 1)$ is a linear factor of $f(x)$.",
      "<strong>Part (a)(ii):</strong><br>Divide $2x^3 + 3x^2 + 2x - 2$ by $(2x - 1)$:<br>\\begin{aligned} 2x^3 + 3x^2 + 2x - 2 &= (2x - 1)(x^2 + 2x + 2) \\cr \\end{aligned}<br>We check the discriminant of the quadratic factor $x^2 + 2x + 2$:<br>\\begin{aligned} \\Delta &= (2)^2 - 4(1)(2) \\cr &= 4 - 8 \\cr &= -4 < 0 \\cr \\end{aligned}<br>Since the discriminant is negative, the quadratic factor has no real roots. Thus, $x = 0.5$ is the only real root of $f(x) = 0$.",
      "<strong>Part (b):</strong><br>We solve:<br>$$2y^6 + 3y^4 + 2y^2 - 2 = 0$$<br>Let $x = y^2$. The equation transforms to $f(x) = 0$, which has the unique real solution $x = 0.5$. Therefore:<br>$$y^2 = 0.5 = \\dfrac{ 1 }{ 2 } \\implies y = \\pm \\dfrac{ 1 }{ \\sqrt{ 2 } } = \\pm \\dfrac{ \\sqrt{ 2 } }{ 2 }$$<br>Since the other factor has a negative discriminant, no further real solutions exist. There are exactly two real solutions: $y = \\pm \\dfrac{ \\sqrt{ 2 } }{ 2 }$.",
      "<strong>Part (c):</strong><br>The equation is:<br>$$2\\cos^3\\theta + 3\\cos^2\\theta + 2\\cos\\theta - 2 = 0$$<br>Let $x = \\cos\\theta$. This equation becomes $f(x) = 0$, which has only one real solution, $x = 0.5$. Thus:<br>$$\\cos\\theta = 0.5 = \\dfrac{ 1 }{ 2 }$$<br>We seek solutions in the interval $0 \\le \\theta < 4\\pi$, representing two complete periods of the cosine function.<br>In each period $[0, 2\\pi)$, the equation $\\cos\\theta = 0.5$ has exactly 2 solutions (at $\\theta = \\dfrac{ \\pi }{ 3 }$ and $\\theta = \\dfrac{ 5\\pi }{ 3 }$).<br>Therefore, over two full periods, there are exactly $4$ real solutions."
    ],
    "pi_options": [
      {
        "ans": "$$y = \\pm\\dfrac{ 1 }{ 2 }\\text{ and }2\\text{ solutions}$$",
        "feedback": "This error occurs if you resolve $y^2 = 0.5$ as $y = \pm 0.5$ (mistaking the square root of $0.5$ for $0.25$) and incorrectly assume there is only 1 solution to $\cos\theta = 0.5$ per period."
      },
      {
        "ans": "$$y = \\pm\\dfrac{ \\sqrt{ 2 } }{ 2 }\\text{ and }2\\text{ solutions}$$",
        "feedback": "This mistake arises from correctly identifying $y = \pm \frac{\sqrt{2}}{2}$ but miscounting the number of real solutions to $\cos\theta = 0.5$ in $0 \le \theta < 4\pi$. Since the interval covers two complete periods and each period has exactly 2 solutions, there must be 4 real solutions."
      },
      {
        "ans": "$$y = \\dfrac{ \\sqrt{ 2 } }{ 2 }\\text{ and }4\\text{ solutions}$$",
        "feedback": "This occurs if you neglect the negative square root of $y^2 = 0.5$, which yields the valid real solution $-\frac{\sqrt{2}}{2}$ along with the positive one."
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
    "board": "Edexcel",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Polynomials",
    "subtopic": [
      "Factor Theorem",
      "Trigonometric Equations",
      "Proof"
    ],
    "img": false,
    "question": "$f(x) = 4x^3 - 2x^2 + x - 3, \\quad x \\in \\mathbb{R}$<br><br><strong>(a) (i)</strong> Calculate $f(1)$.<br><strong>(ii)</strong> Write $f(x)$ as a product of two algebraic factors.<br><br>Using the answer to <strong>(a)(ii)</strong>:<br><strong>(b)</strong> Prove that there is exactly one real solution to the equation $4e^{3y} - 2e^{2y} + e^y - 3 = 0$.<br><br><strong>(c)</strong> Deduce the number of real solutions, for $0 \\le \\theta < \\pi$, to the equation $4\\tan^3(2\\theta) - 2\\tan^2(2\\theta) + \\tan(2\\theta) - 3 = 0$.<br><br>State the real solutions to the equation in <strong>(b)</strong> and the number of solutions in <strong>(c)</strong>.",
    "steps": [
      "<strong>Part (a)(i):</strong><br>Substitute $x = 1$ into $f(x)$:<br>\\begin{aligned} f(1) &= 4(1)^3 - 2(1)^2 + 1 - 3 \\cr &= 4 - 2 + 1 - 3 \\cr &= 0 \\cr \\end{aligned}<br>Since $f(1) = 0$, $x = 1$ is a root, meaning $(x - 1)$ is a linear factor of $f(x)$.",
      "<strong>Part (a)(ii):</strong><br>Divide $4x^3 - 2x^2 + x - 3$ by $(x - 1)$:<br>\\begin{aligned} 4x^3 - 2x^2 + x - 3 &= (x - 1)(4x^2 + 2x + 3) \\cr \\end{aligned}<br>We check the discriminant of the quadratic factor $4x^2 + 2x + 3$:<br>\\begin{aligned} \\Delta &= (2)^2 - 4(4)(3) \\cr &= 4 - 48 \\cr &= -44 < 0 \\cr \\end{aligned}<br>Since the discriminant is negative, the quadratic factor has no real roots. Thus, $x = 1$ is the unique real root of $f(x) = 0$.",
      "<strong>Part (b):</strong><br>We solve:<br>$$4e^{3y} - 2e^{2y} + e^y - 3 = 0$$<br>Let $x = e^y$ (where $x > 0$). The equation becomes $f(x) = 0$.<br>Since the unique real root is $x = 1$, we have:<br>$$e^y = 1 \\implies y = \\ln(1) = 0$$<br>Since the quadratic factor yields no real roots, $y = 0$ is the single unique real solution.",
      "<strong>Part (c):</strong><br>The equation is:<br>$$4\\tan^3(2\\theta) - 2\\tan^2(2\\theta) + \\tan(2\\theta) - 3 = 0$$<br>Let $u = \\tan(2\\theta)$. This equation becomes $f(u) = 0$, which has only one real solution, $u = 1$. Thus:<br>$$\\tan(2\\theta) = 1$$<br>We search for solutions in the interval $0 \\le \\theta < \\pi$. Since the argument of the tangent function is $2\\theta$, we must scale the domain:<br>$$0 \\le 2\\theta < 2\\pi$$<br>The tangent function $\\tan(2\\theta)$ has a period of $\\pi$. Therefore, in the interval $[0, 2\\pi)$, the equation $\\tan(2\\theta) = 1$ has exactly two solutions (at $2\\theta = \\dfrac{ \\pi }{ 4 }$ and $2\\theta = \\dfrac{ 5\\pi }{ 4 }$).<br>Thus, there are exactly $2$ real solutions for $\\theta$."
    ],
    "pi_options": [
      {
        "ans": "$$y = 1\\text{ and }4\\text{ solutions}$$",
        "feedback": "This error occurs if you solve $e^y = 1$ to get $y = 1$ instead of $y = 0$, and if you fail to scale the domain for the double angle $2\theta$, resulting in an incorrect count of solutions."
      },
      {
        "ans": "$$y = 0\\text{ and }1\\text{ solution}$$",
        "feedback": "This mistake arises from forgetting that the argument of the tangent function is $2\theta$ instead of $\theta$. In the interval $[0, \pi)$, the double-angle $2\theta$ ranges from $0$ to $2\pi$, which contains two full periods of the tangent function, giving 2 solutions rather than 1."
      },
      {
        "ans": "$$\\text{No real solutions for }y\\text{ and }2\\text{ solutions}$$",
        "feedback": "This occurs if you mistakenly believe that the exponential equation $e^y = 1$ has no real solutions. In fact, since 1 is a positive real number, it has the unique real solution $y = \ln(1) = 0$."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "Double-Angle Domain Scaling",
      "content": "When solving trigonometric equations with scaled arguments like $\\tan(2\\theta)$, always multiply the domain boundaries by the coefficient (e.g., $0 \\le 2\\theta < 2\\pi$) before counting solutions. Failing to do this often results in missing half of the valid solutions."
    }
  }

];