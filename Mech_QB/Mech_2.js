window.ALEVEL_QUESTIONS = [
{
    "id": "012051",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Variable acceleration",
    "subtopic": [
        "Differentiation in kinematics",
        "Displacement and distance"
    ],
    "img": false,
    "question": "A particle $P$ moves along the $x$-axis. At time $t$ seconds ($t \\ge 0$), the displacement, $x$ metres, of $P$ from the origin $O$ is given by:<br>$$x = t^2(t^2 - 4t + 4)$$<br><br><strong>(a)</strong> Find the times when $P$ is instantaneously at rest.<br><br><strong>(b)</strong> Find the total distance travelled by $P$ in the time interval $0 \\le t \\le 3$.<br><br><strong>(c)</strong> Show that $P$ will never move along the negative $x$-axis.",
    "steps": [
        "<strong>(a) Find when $P$ is instantaneously at rest:</strong><br>First, expand the expression for displacement $x$ to make differentiation straightforward:<br><br>\\begin{aligned} x &= t^2(t^2 - 4t + 4) \\cr &= t^4 - 4t^3 + 4t^2 \\end{aligned}",
        "The velocity $v$ is the derivative of displacement with respect to time ($v = \\dfrac{ \\mathrm{d}x }{ \\mathrm{d}t }$):<br><br>\\begin{aligned} v &= 4t^3 - 12t^2 + 8t \\end{aligned}<br><br>Set $v = 0$ to find when the particle is instantaneously at rest:<br><br>\\begin{aligned} 4t(t^2 - 3t + 2) &= 0 \\cr 4t(t - 1)(t - 2) &= 0 \\end{aligned}<br><br>The particle is at rest at $t = 0\\text{ s }$, $t = 1\\text{ s }$, and $t = 2\\text{ s }$.",
        "<strong>(b) Find the total distance travelled in the interval $0 \\le t \\le 3$:</strong><br>Evaluate the displacement $x$ at the start, the end, and at all turning points (where $v = 0$) within this interval:<br>• At $t = 0$: $x(0) = 0^2(0 - 2)^2 = 0\\text{ m }$<br>• At $t = 1$: $x(1) = 1^2(1 - 2)^2 = 1\\text{ m }$<br>• At $t = 2$: $x(2) = 2^2(2 - 2)^2 = 0\\text{ m }$<br>• At $t = 3$: $x(3) = 3^2(3 - 2)^2 = 9\\text{ m }$",
        "Calculate the distance covered during each individual segment where the direction is constant:<br>• From $t = 0$ to $t = 1$: $|1 - 0| = 1\\text{ m }$<br>• From $t = 1$ to $t = 2$: $|0 - 1| = 1\\text{ m }$<br>• From $t = 2$ to $t = 3$: $|9 - 0| = 9\\text{ m }$<br><br>\\begin{aligned} \\text{ Total Distance } &= 1 + 1 + 9 \\cr &= 11\\text{ m } \\end{aligned}",
        "<strong>(c) Show that $P$ never moves along the negative $x$-axis:</strong><br>Express the displacement as a single squared term:<br><br>\\begin{aligned} x &= t^2(t - 2)^2 \\cr &= (t(t - 2))^2 \\end{aligned}<br><br>Since the square of any real number is always non-negative, $x \\ge 0$ for all real values of $t$. Therefore, $P$ can never have a negative displacement along the $x$-axis."
    ],
    "pi_options": [
        {
            "ans": "(a) $t = 0, 1, 2$, (b) $9\\text{ m}$",
            "feedback": "This distance represents only the final displacement at $t = 3$. Because the particle changed direction at $t = 1$ and $t = 2$, the total distance travelled is greater than the displacement."
        },
        {
            "ans": "(a) $t = 1, 2$, (b) $11\\text{ m}$",
            "feedback": "Do not forget $t = 0\\text{ s}$ when listing times at rest. Setting $4t(t-1)(t-2) = 0$ yields three solutions, including the initial instant of release."
        },
        {
            "ans": "(a) $t = 0, 1, 2$, (b) $10\\text{ m}$",
            "feedback": "This is a common arithmetic error when calculating the segments. Ensure you calculate the absolute movement for each interval: $0 \\to 1$ ($1\\text{ m}$), $1 \\to 2$ ($1\\text{ m}$), and $2 \\to 3$ ($9\\text{ m}$)."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Turning Point Traps",
        "content": "Students often confuse distance with displacement and simply calculate $x(3) - x(0) = 9$. When asked for total distance, you must identify every turning point (where $v = 0$) within the time window and calculate the sum of the absolute displacements for each leg."
    }
},
{
    "id": "012052",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Variable acceleration",
    "subtopic": [
        "Integration in kinematics",
        "Displacement and distance"
    ],
    "img": false,
    "question": "A particle $Q$ moves along a straight horizontal line. At time $t$ seconds ($t \\ge 0$), the velocity, $v\\text{ m s}^{ -1 }$, of $Q$ is given by:<br>$$v = 3t^2 - 12t + 9$$<br>At $t = 0$, $Q$ is at the origin $O$.<br><br><strong>(a)</strong> Find the times when $Q$ is instantaneously at rest.<br><br><strong>(b)</strong> Find an expression for the displacement, $s$ metres, of $Q$ from $O$ in terms of $t$.<br><br><strong>(c)</strong> Find the total distance travelled by $Q$ in the time interval $0 \\le t \\le 4$.<br><br><strong>(d)</strong> Show that $Q$ never has a negative displacement for $t \\ge 0$.",
    "steps": [
        "<strong>(a) Find when $Q$ is instantaneously at rest:</strong><br>Set the velocity $v = 0$ and factorise the quadratic equation:<br><br>\\begin{aligned} 3t^2 - 12t + 9 &= 0 \\cr 3(t^2 - 4t + 3) &= 0 \\cr 3(t - 1)(t - 3) &= 0 \\end{aligned}<br><br>The particle is instantaneously at rest at $t = 1\\text{ s }$ and $t = 3\\text{ s }$.",
        "<strong>(b) Find an expression for the displacement $s$:</strong><br>Displacement is found by integrating the velocity function with respect to time ($s = \\int v \\, \\mathrm{d}t$):<br><br>\\begin{aligned} s &= \\int (3t^2 - 12t + 9) \\, \\mathrm{d}t \\cr &= t^3 - 6t^2 + 9t + c \\end{aligned}<br><br>Since the particle starts at the origin, $s = 0$ at $t = 0$, which gives $c = 0$. Therefore, the displacement is:<br><br>\\begin{aligned} s &= t^3 - 6t^2 + 9t \\end{aligned}",
        "<strong>(c) Find the total distance travelled in the interval $0 \\le t \\le 4$:</strong><br>Evaluate the displacement at the start, the end, and the turning points ($t = 1\\text{ s }$ and $t = 3\\text{ s }$) within this interval:<br>• At $t = 0$: $s(0) = 0\\text{ m }$<br>• At $t = 1$: $s(1) = 1^3 - 6(1)^2 + 9(1) = 4\\text{ m }$<br>• At $t = 3$: $s(3) = 3^3 - 6(3)^2 + 9(3) = 27 - 54 + 27 = 0\\text{ m }$<br>• At $t = 4$: $s(4) = 4^3 - 6(4)^2 + 9(4) = 64 - 96 + 36 = 4\\text{ m }$",
        "Sum the absolute values of the movements for each section:<br>• From $t = 0$ to $t = 1$: $|4 - 0| = 4\\text{ m }$<br>• From $t = 1$ to $t = 3$: $|0 - 4| = 4\\text{ m }$<br>• From $t = 3$ to $t = 4$: $|4 - 0| = 4\\text{ m }$<br><br>\\begin{aligned} \\text{ Total Distance } &= 4 + 4 + 4 \\cr &= 12\\text{ m } \\end{aligned}",
        "<strong>(d) Show that $Q$ never has a negative displacement for $t \\ge 0$:</strong><br>Factorise the displacement expression:<br><br>\\begin{aligned} s &= t(t^2 - 6t + 9) \\cr &= t(t - 3)^2 \\end{aligned}<br><br>Since $t \\ge 0$ and any squared term $(t - 3)^2 \\ge 0$, their product must be non-negative. Therefore, $s \\ge 0$ for all $t \\ge 0$."
    ],
    "pi_options": [
        {
            "ans": "(b) $s = t^3 - 6t^2 + 9t$, (c) $4\\text{ m}$",
            "feedback": "This is the net displacement at $t = 4$. Remember that the particle travels $4\\text{ m}$ away from $O$, reverses back to $O$ at $t = 3$, and then travels $4\\text{ m}$ away again. Total distance is the sum of these absolute path lengths."
        },
        {
            "ans": "(b) $s = t^3 - 6t^2 + 9t$, (c) $8\\text{ m}$",
            "feedback": "This is a common error where the final segment (from $t = 3$ to $t = 4$) is omitted. Make sure to check every single segment between your turning points."
        },
        {
            "ans": "(b) $s = 3t^3 - 12t^2 + 9t$, (c) $12\\text{ m}$",
            "feedback": "This formula for $s$ results from integrating incorrectly without dividing by the new powers. Always apply the integration rule $\\int t^n \\, \\mathrm{d}t = \\dfrac{ t^{n+1} }{ n+1 }$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Absolute Movements",
        "content": "Integrating $v$ directly over an interval gives displacement, not distance. For distance, always identify the turning points, evaluate the position at each, and manually add up the absolute movements of each leg: $4\\text{ m}$ out, $4\\text{ m}$ back, and $4\\text{ m}$ out again."
    }
},
{
    "id": "012053",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Variable acceleration",
    "subtopic": [
        "Differentiation in kinematics",
        "Displacement and distance"
    ],
    "img": false,
    "question": "A particle $R$ moves along a straight horizontal line. At time $t$ seconds ($t \\ge 0$), the displacement, $s$ metres, of $R$ from a fixed point $O$ on the line is given by:<br>$$s = \\dfrac{ 1 }{ 3 }t^3 - 3t^2 + 8t$$<br><br><strong>(a)</strong> Find the values of $t$ when the particle is instantaneously at rest.<br><br><strong>(b)</strong> Find the acceleration of the particle at the instant it first comes to rest.<br><br><strong>(c)</strong> Find the total distance travelled by the particle in the time interval $0 \\le t \\le 6$.<br><br><strong>(d)</strong> State the range of times for which the velocity of the particle is decreasing.",
    "steps": [
        "<strong>(a) Find when $R$ is instantaneously at rest:</strong><br>Differentiate the displacement function with respect to time to find velocity $v$:<br><br>\\begin{aligned} v &= \\dfrac{ \\mathrm{d}s }{ \\mathrm{d}t } \\cr &= t^2 - 6t + 8 \\end{aligned}<br><br>Set $v = 0$ to find the times at rest:<br><br>\\begin{aligned} t^2 - 6t + 8 &= 0 \\cr (t - 2)(t - 4) &= 0 \\end{aligned}<br><br>The particle is instantaneously at rest at $t = 2\\text{ s }$ and $t = 4\\text{ s }$.",
        "<strong>(b) Find the acceleration at first rest ($t = 2$):</strong><br>Differentiate the velocity function with respect to time to find the acceleration $a$:<br><br>\\begin{aligned} a &= \\dfrac{ \\mathrm{d}v }{ \\mathrm{d}t } \\cr &= 2t - 6 \\end{aligned}<br><br>At the first resting instant ($t = 2\\text{ s }$):<br><br>\\begin{aligned} a(2) &= 2(2) - 6 \\cr &= -2\\text{ m s}^{ -2 } \\end{aligned}",
        "<strong>(c) Find the total distance travelled in the interval $0 \\le t \\le 6$:</strong><br>Evaluate displacement at $t = 0$, $t = 2$, $t = 4$, and $t = 6$:<br>• At $t = 0$: $s(0) = 0\\text{ m }$<br>• At $t = 2$: $s(2) = \\dfrac{ 1 }{ 3 }(2)^3 - 3(2)^2 + 8(2) = \\dfrac{ 8 }{ 3 } - 12 + 16 = 6\\dfrac{ 2 }{ 3 }\\text{ m }$<br>• At $t = 4$: $s(4) = \\dfrac{ 1 }{ 3 }(4)^3 - 3(4)^2 + 8(4) = \\dfrac{ 64 }{ 3 } - 48 + 32 = 5\\dfrac{ 1 }{ 3 }\\text{ m }$<br>• At $t = 6$: $s(6) = \\dfrac{ 1 }{ 3 }(6)^3 - 3(6)^2 + 8(6) = 72 - 108 + 48 = 12\\text{ m }$",
        "Sum the absolute values of the movements for each segment:<br>• From $t = 0$ to $t = 2$: $|6\\dfrac{ 2 }{ 3 } - 0| = 6\\dfrac{ 2 }{ 3 }\\text{ m }$<br>• From $t = 2$ to $t = 4$: $|5\\dfrac{ 1 }{ 3 } - 6\\dfrac{ 2 }{ 3 }| = 1\\dfrac{ 1 }{ 3 }\\text{ m }$<br>• From $t = 4$ to $t = 6$: $|12 - 5\\dfrac{ 1 }{ 3 }| = 6\\dfrac{ 2 }{ 3 }\\text{ m }$<br><br>\\begin{aligned} \\text{ Total Distance } &= 6\\dfrac{ 2 }{ 3 } + 1\\dfrac{ 1 }{ 3 } + 6\\dfrac{ 2 }{ 3 } \\cr &= 14\\dfrac{ 2 }{ 3 }\\text{ m } \\end{aligned}",
        "<strong>(d) State the range of times when velocity is decreasing:</strong><br>Velocity is decreasing when the acceleration is negative ($a < 0$):<br><br>\\begin{aligned} 2t - 6 &< 0 \\cr t &< 3 \\end{aligned}<br><br>Since $t \\ge 0$, the range of times is $0 \\le t < 3$."
    ],
    "pi_options": [
        {
            "ans": "(b) $-2\\text{ m s}^{-2}$, (c) $12\\text{ m}$",
            "feedback": "This is the displacement of the particle at $t = 6$, not the total distance. Because the particle turned around at $t = 2$ and $t = 4$, you must calculate the path lengths of each leg separately."
        },
        {
            "ans": "(b) $2\\text{ m s}^{-2}$, (c) $14\\dfrac{ 2 }{ 3 }\\text{ m}$",
            "feedback": "In part (b), the acceleration at $t = 2$ is $2(2) - 6 = -2\\text{ m s}^{-2}$. A positive acceleration of $+2$ represents an incorrect sign error."
        },
        {
            "ans": "(b) $-2\\text{ m s}^{-2}$, (c) $13\\dfrac{ 1 }{ 3 }\\text{ m}$",
            "feedback": "This is a common fraction arithmetic error when summing the segments. Verify each calculation carefully: $6\\dfrac{ 2 }{ 3 } + 1\\dfrac{ 1 }{ 3 } + 6\\dfrac{ 2 }{ 3 } = 14\\dfrac{ 2 }{ 3 }\\text{ m}$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Pure Calculus Connections",
        "content": "In part (d), 'velocity is decreasing' means the gradient of the velocity function is negative ($a < 0$). This is a direct application of Pure calculus (finding the intervals where a function is decreasing) mapped onto a physical kinematics context."
    }
},
{
    "id": "012054",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Variable acceleration",
    "subtopic": [
        "Differentiation in kinematics",
        "Relative motion"
    ],
    "img": false,
    "question": "Two particles, $A$ and $B$, move along the same straight horizontal line. At time $t$ seconds ($t \\ge 0$), the displacements, $s_A$ metres and $s_B$ metres, of the particles from a fixed origin $O$ are modelled by:<br>$$s_A = t^3 - 3t^2 + 5t$$<br>$$s_B = 2t^2 + 2t$$<br><br><strong>(a)</strong> Find the values of $t$ when the two particles are travelling at the same velocity.<br><br><strong>(b)</strong> Find the distance between the two particles at the instant $t = 2$.<br><br><strong>(c)</strong> Find the acceleration of particle $A$ at the instant its velocity is at its minimum value.",
    "steps": [
        "<strong>(a) Find the values of $t$ when velocities are equal:</strong><br>Differentiate both displacement expressions with respect to time to find the velocity functions, $v_A$ and $v_B$:<br><br>\\begin{aligned} v_A &= \\dfrac{ \\mathrm{d}s_A }{ \\mathrm{d}t } \\cr &= 3t^2 - 6t + 5 \\cr\\cr v_B &= \\dfrac{ \\mathrm{d}s_B }{ \\mathrm{d}t } \\cr &= 4t + 2 \\end{aligned}",
        "Equate $v_A$ and $v_B$ and solve the resulting quadratic equation:<br><br>\\begin{aligned} 3t^2 - 6t + 5 &= 4t + 2 \\cr 3t^2 - 10t + 3 &= 0 \\cr (3t - 1)(t - 3) &= 0 \\end{aligned}<br><br>The velocities are equal at $t = \\dfrac{ 1 }{ 3 }\\text{ s }$ and $t = 3\\text{ s }$.",
        "<strong>(b) Find the distance between the particles at $t = 2$:</strong><br>Evaluate the displacement of each particle at $t = 2$:<br><br>\\begin{aligned} s_A(2) &= (2)^3 - 3(2)^2 + 5(2) \\cr &= 8 - 12 + 10 \\cr &= 6\\text{ m } \\cr\\cr s_B(2) &= 2(2)^2 + 2(2) \\cr &= 8 + 4 \\cr &= 12\\text{ m } \\end{aligned}",
        "The distance between the two particles is the absolute difference in their displacements:<br><br>\\begin{aligned} \\text{ Distance } &= |s_B(2) - s_A(2)| \\cr &= |12 - 6| \\cr &= 6\\text{ m } \\end{aligned}",
        "<strong>(c) Find the acceleration of $A$ when its velocity is minimum:</strong><br>Differentiate $v_A$ with respect to time to find the acceleration $a_A$:<br><br>\\begin{aligned} a_A &= \\dfrac{ \\mathrm{d}v_A }{ \\mathrm{d}t } \\cr &= 6t - 6 \\end{aligned}<br><br>Velocity $v_A$ is at its minimum when its rate of change (acceleration) is zero:<br><br>\\begin{aligned} 6t - 6 &= 0 \\cr t &= 1\\text{ s } \\end{aligned}<br><br>At $t = 1\\text{ s }$, the acceleration of $A$ is:<br><br>\\begin{aligned} a_A(1) &= 6(1) - 6 \\cr &= 0\\text{ m s}^{ -2 } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "(a) $t = 3$, (b) $18\\text{ m}$, (c) $0\\text{ m s}^{-2}$",
            "feedback": "This is a distance error resulting from adding the displacements ($12 + 6 = 18\\text{ m}$) instead of finding the difference between them. Since both are on the positive side of $O$, the separation is $12 - 6 = 6\\text{ m}$."
        },
        {
            "ans": "(a) $t = 3$, (b) $6\\text{ m}$, (c) $-6\\text{ m s}^{-2}$",
            "feedback": "This is an acceleration sign error in part (c). The question asks for the acceleration at the instant velocity is minimum, which occurs where acceleration is $0\\text{ m s}^{-2}$ (the stationary point of the velocity curve)."
        },
        {
            "ans": "(a) $t = \\dfrac{ 1 }{ 3 }, 3$, (b) $8\\text{ m}$, (c) $0\\text{ m s}^{-2}$",
            "feedback": "This represents an arithmetic slip when evaluating the displacement of particle $A$ or $B$ at $t = 2$. Re-evaluate carefully: $s_A(2) = 6$ and $s_B(2) = 12$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: The Stationary Point Shortcut",
        "content": "Part (c) contains a classic mathematical trap. The acceleration of a particle at the instant its velocity is at a minimum is always $0\\text{ m s}^{ -2 }$. This is because the minimum of the velocity curve represents a stationary point where the first derivative (acceleration) must be zero."
    }
},
{
    "id": "012055",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Variable acceleration",
    "subtopic": [
        "Integration in kinematics",
        "Differentiation in kinematics"
    ],
    "img": false,
    "question": "A car is travelling along a straight horizontal road. At the instant the brakes are applied, the car is at the point $O$. The velocity, $v\\text{ m s}^{ -1 }$, of the car at time $t$ seconds after the brakes are applied is modelled by the formula:<br>$$v = 24 - 1.5t^2 \\quad \\text{for } 0 \\le t \\le T$$<br>where $T$ is the time when the car comes to rest.<br><br><strong>(a)</strong> Find the value of $T$.<br><br><strong>(b)</strong> Find the distance travelled by the car from the instant the brakes are applied to the instant it comes to rest.<br><br><strong>(c)</strong> Find the deceleration of the car at the instant it comes to rest.",
    "steps": [
        "<strong>(a) Find the value of $T$:</strong><br>The car comes to rest when its velocity $v = 0$. Set $v = 0$ and solve for $T$:<br><br>\\begin{aligned} 24 - 1.5T^2 &= 0 \\cr 1.5T^2 &= 24 \\cr T^2 &= 16 \\end{aligned}<br><br>Since $T \\ge 0$, we have $T = 4\\text{ seconds }$.",
        "<strong>(b) Find the distance travelled to rest:</strong><br>The distance travelled is the integral of the velocity function from the start of braking ($t = 0$) to coming to rest ($t = 4$):<br><br>\\begin{aligned} s &= \\int_{ 0 }^{ 4 } (24 - 1.5t^2) \\, \\mathrm{d}t \\cr &= \\left[ 24t - 0.5t^3 \\right]_{ 0 }^{ 4 } \\end{aligned}",
        "Evaluate the definite integral limits:<br><br>\\begin{aligned} s &= \\left( 24(4) - 0.5(4)^3 \\right) - 0 \\cr &= (96 - 32) \\cr &= 64\\text{ m } \\end{aligned}",
        "<strong>(c) Find the deceleration at rest ($t = 4$):</strong><br>First, find the acceleration $a$ by differentiating $v$ with respect to $t$:<br><br>\\begin{aligned} a &= \\dfrac{ \\mathrm{d}v }{ \\mathrm{d}t } \\cr &= -3t \\end{aligned}",
        "At the instant the car stops ($t = 4\\text{ s }$):<br><br>\\begin{aligned} a(4) &= -3(4) \\cr &= -12\\text{ m s}^{ -2 } \\end{aligned}<br><br>Acceleration is $-12\\text{ m s}^{ -2 }$, which means the rate of deceleration is $12\\text{ m s}^{ -2 }$."
    ],
    "pi_options": [
        {
            "ans": "(a) $4\\text{ s}$, (b) $64\\text{ m}$, (c) $-12\\text{ m s}^{-2}$",
            "feedback": "Deceleration is a positive scalar quantity indicating the rate of slowing down. Stating deceleration as a negative value is a double-negative error; the negative sign is already implied by the word 'deceleration'."
        },
        {
            "ans": "(a) $4\\text{ s}$, (b) $96\\text{ m}$, (c) $12\\text{ m s}^{-2}$",
            "feedback": "This is an integration error in part (b), usually caused by neglecting to subtract the integrated $0.5t^3$ term from $24t$. Always integrate and evaluate both parts of the expression."
        },
        {
            "ans": "(a) $16\\text{ s}$, (b) $64\\text{ m}$, (c) $12\\text{ m s}^{-2}$",
            "feedback": "In part (a), $T^2 = 16$. Remember to take the square root of $16$ to find the time $T = 4\\text{ s}$, rather than leaving it as $16$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Deceleration vs. Acceleration",
        "content": "Always express deceleration as a positive value. Since acceleration $a = -12\\text{ m s}^{ -2 }$ is already negative (indicating a decrease in speed), 'deceleration' is defined as the magnitude of this rate of slowing down, which is $12\\text{ m s}^{ -2 }$."
    }
},
{
    "id": "012056",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "AS",
    "major_area": "Forces and Newton's laws",
    "topic": "Connected particles",
    "subtopic": [
        "Fixed pulley systems",
        "Newton's second law"
    ],
    "img": "images/Mechanics_pngs/012056.png",
    "question": "Two small blocks, $A$ and $B$, have masses $3m$ and $km$ respectively, where $k < 3$. The blocks are attached to the ends of a light inextensible string that passes over a small smooth fixed pulley. The system is held at rest with the string taut and the hanging parts vertical, as shown in the diagram. The system is released from rest and, in the subsequent motion, $A$ moves downwards with an acceleration of magnitude $\\dfrac{ 1 }{ 2 }g$. The blocks are modelled as particles.<br><br>Using the model,<br><strong>(a)</strong> find, in terms of $m$ and $g$, the tension in the string,<br><strong>(b)</strong> explain why the acceleration of $B$ also has magnitude $\\dfrac{ 1 }{ 2 }g$,<br><strong>(c)</strong> find the value of $k$,<br><strong>(d)</strong> state one physical factor of the string that has been ignored in this model.",
    "steps": [
        "<strong>(a) Find the tension in the string:</strong><br>Consider the downward vertical motion of block $A$ (mass $3m$). Applying Newton's second law ($F = ma$) in the direction of motion:<br><br>\\begin{aligned} 3mg - T &= 3ma \\cr 3mg - T &= 3m\\left( \\dfrac{ 1 }{ 2 }g \\right) \\cr 3mg - T &= 1.5mg \\end{aligned}",
        "Rearrange to solve for the tension $T$:<br><br>\\begin{aligned} T &= 3mg - 1.5mg \\cr T &= 1.5mg \\quad \\left( \\text{or } \\dfrac{ 3 }{ 2 }mg \\right) \\end{aligned}",
        "<strong>(b) Explain why the acceleration of $B$ also has magnitude $\\dfrac{ 1 }{ 2 }g$:</strong><br>Because the string is modelled as being <strong>inextensible</strong>, the displacement, velocity, and magnitude of acceleration of both particles must be identical at any given instant while the string remains taut.",
        "<strong>(c) Find the value of $k$:</strong><br>Consider the upward vertical motion of block $B$ (mass $km$). Applying Newton's second law in the direction of motion:<br><br>\\begin{aligned} T - kmg &= kma \\cr 1.5mg - kmg &= km\\left( \\dfrac{ 1 }{ 2 }g \\right) \\cr 1.5mg - kmg &= 0.5kmg \\end{aligned}",
        "Add $kmg$ to both sides and solve for $k$:<br><br>\\begin{aligned} 1.5mg &= 1.5kmg \\cr 1.5 &= 1.5k \\cr k &= 1 \\end{aligned}",
        "<strong>(d) Identify one ignored limitation:</strong><br>The model assumes the string is light, thereby ignoring the mass/weight of the string."
    ],
    "pi_options": [
        {
            "ans": "(a) $T = mg$, (c) $k = 2$",
            "feedback": "This occurs if you use a mass of $2m$ instead of $3m$ for block $A$. Double check the masses given in the question description."
        },
        {
            "ans": "(a) $T = 1.5mg$, (c) $k = 0.5$",
            "feedback": "This is a sign error when applying Newton's second law to the upward motion of $B$. The equation must be $T - kmg = kma$, not $kmg - T = kma$. Since $B$ moves upwards, the tension must exceed its weight."
        },
        {
            "ans": "(a) $T = 3mg$, (c) $k = 1$",
            "feedback": "This tension of $3mg$ is obtained if you assume the system is in static equilibrium ($a = 0$). Since the system is released and accelerates, the tension must be less than the weight of $A$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Inextensible vs. Light",
        "content": "Do not confuse the modeling assumptions. The term 'light' implies we ignore the mass of the string (tension is uniform throughout). The term 'inextensible' is what guarantees that both particles share the exact same magnitude of acceleration."
    }
},
{
    "id": "012057",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "AS",
    "major_area": "Forces and Newton's laws",
    "topic": "Connected particles",
    "subtopic": [
        "Pulley on a horizontal table",
        "Newton's second law",
        "Resultant force on a pulley"
    ],
    "img": "images/Mechanics_pngs/012057.png",
    "question": "A block $A$ of mass $3\\text{ kg}$ lies on a smooth horizontal table. $A$ is connected by a light inextensible string, passing over a small smooth pulley fixed at the edge of the table, to a hanging ball $B$ of mass $2\\text{ kg}$ which hangs freely, as shown in the diagram. The system is released from rest with the string taut.<br><br>Using the model,<br><strong>(a)</strong> find the acceleration of the system,<br><strong>(b)</strong> find the tension in the string,<br><strong>(c)</strong> find the magnitude of the force exerted by the string on the pulley.",
    "steps": [
        "<strong>(a) Find the acceleration of the system ($a$):</strong><br>Write the equations of motion for each particle using Newton's second law ($F = ma$):<br>• For block $A$ (moving horizontally to the right):<br><br>\\begin{aligned} T &= 3a \\end{aligned}<br><br>• For hanging ball $B$ (moving vertically downwards):<br><br>\\begin{aligned} 2g - T &= 2a \\end{aligned}",
        "Add the two equations to eliminate the tension $T$:<br><br>\\begin{aligned} 2g &= 5a \\cr a &= \\dfrac{ 2g }{ 5 } \\cr a &= 0.4 \\times 9.8 \\cr a &= 3.92\\text{ m s}^{ -2 } \\end{aligned}",
        "<strong>(b) Find the tension in the string ($T$):</strong><br>Substitute the acceleration $a = 3.92\\text{ m s}^{ -2 }$ back into the equation for block $A$:<br><br>\\begin{aligned} T &= 3 \\times 3.92 \\cr T &= 11.76\\text{ N } \\end{aligned}",
        "<strong>(c) Find the magnitude of the force exerted by the string on the pulley:</strong><br>The string exerts two perpendicular forces of magnitude $T$ on the pulley: one acting horizontally to the left, and one acting vertically downwards. The magnitude of the resultant force $F$ is found using Pythagoras' theorem:<br><br>\\begin{aligned} F &= \\sqrt{ T^2 + T^2 } \\cr F &= T\\sqrt{ 2 } \\end{aligned}",
        "Substitute $T = 11.76\\text{ N }$ into the formula:<br><br>\\begin{aligned} F &= 11.76 \\times \\sqrt{ 2 } \\cr &\\approx 11.76 \\times 1.414 \\cr &\\approx 16.63\\text{ N } \\end{aligned}<br><br>To 3 significant figures, the force exerted on the pulley is $16.6\\text{ N }$."
    ],
    "pi_options": [
        {
            "ans": "(a) $3.92\\text{ m s}^{-2}$, (b) $11.8\\text{ N}$, (c) $23.5\\text{ N}$",
            "feedback": "This is a common error where the force on the pulley is calculated as $T + T = 2T$. Because the horizontal and vertical tensions act at right angles, you must use vector addition (Pythagoras) rather than simple addition."
        },
        {
            "ans": "(a) $1.96\\text{ m s}^{-2}$, (b) $5.88\\text{ N}$, (c) $8.32\\text{ N}$",
            "feedback": "This occurs if you treat the total mass of the system as $10\\text{ kg}$ or make a division error when finding $a$. The total accelerating mass is $3 + 2 = 5\\text{ kg}$."
        },
        {
            "ans": "(a) $3.92\\text{ m s}^{-2}$, (b) $19.6\\text{ N}$, (c) $27.7\\text{ N}$",
            "feedback": "This tension of $19.6\\text{ N}$ is the static weight of ball $B$ ($2g$). Since the system is accelerating, the tension in the string must be less than the weight of the hanging mass."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Resultant Pulley Forces",
        "content": "When finding the resultant force on a pulley, look at the geometry. If the string goes from horizontal to vertical, the angle between the two tension forces is $90^\\circ$, so the resultant is always $T\\sqrt{ 2 }$. If the string goes over a vertical pulley with parallel sides, the force is simply $2T$."
    }
},
{
    "id": "012058",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "AS",
    "major_area": "Forces and Newton's laws",
    "topic": "Connected particles",
    "subtopic": [
        "Pulley on a rough table",
        "Friction",
        "Newton's second law"
    ],
    "img": "images/Mechanics_pngs/012058.png",
    "question": "A block $P$ of mass $4\\text{ kg}$ lies on a rough horizontal table. $P$ is connected by a light inextensible string, passing over a small smooth pulley fixed at the edge of the table, to a sphere $Q$ of mass $3\\text{ kg}$ which hangs freely, as shown in the diagram. The coefficient of friction between $P$ and the table is $\\mu$.<br><br>The system is released from rest with the string taut and $Q$ at a height of $1.5\\text{ m }$ above the floor. In the subsequent motion, $Q$ descends with an acceleration of $2.8\\text{ m s}^{ -2 }$.<br><br>Using the model,<br><strong>(a)</strong> find the tension in the string,<br><strong>(b)</strong> find the value of $\\mu$,<br><strong>(c)</strong> find the speed with which $Q$ hits the floor.",
    "steps": [
        "<strong>(a) Find the tension in the string ($T$):</strong><br>Consider the vertical downward motion of sphere $Q$ (mass $3\\text{ kg}$). Using Newton's second law in the direction of motion:<br><br>\\begin{aligned} 3g - T &= 3a \\cr 3(9.8) - T &= 3(2.8) \\cr 29.4 - T &= 8.4 \\end{aligned}",
        "Solve for the tension $T$:<br><br>\\begin{aligned} T &= 29.4 - 8.4 \\cr T &= 21\\text{ N } \\end{aligned}",
        "<strong>(b) Find the value of $\\mu$:</strong><br>Consider the horizontal motion of block $P$ (mass $4\\text{ kg}$) to the right. The forces acting on $P$ are the tension $T$ to the right, and the friction force $F$ to the left:<br><br>\\begin{aligned} T - F &= 4a \\cr 21 - F &= 4(2.8) \\cr 21 - F &= 11.2 \\cr F &= 9.8\\text{ N } \\end{aligned}",
        "Since $P$ is in motion, friction is at its maximum limiting value ($F = \\mu R$). The normal reaction force $R$ balances the weight of $P$ vertically:<br><br>\\begin{aligned} R &= 4g \\cr &= 4(9.8) \\cr &= 39.2\\text{ N } \\end{aligned}<br><br>Substitute $F = 9.8\\text{ N }$ and $R = 39.2\\text{ N }$ into the friction formula:<br><br>\\begin{aligned} 9.8 &= \\mu(39.2) \\cr \\mu &= \\dfrac{ 9.8 }{ 39.2 } \\cr \\mu &= 0.25 \\end{aligned}",
        "<strong>(c) Find the speed with which $Q$ hits the floor ($v$):</strong><br>Using constant acceleration (SUVAT) with the downward parameters:<br>• Initial speed, $u = 0\\text{ m s}^{ -1 }$<br>• Acceleration, $a = 2.8\\text{ m s}^{ -2 }$<br>• Distance, $s = 1.5\\text{ m }$<br><br>\\begin{aligned} v^2 &= u^2 + 2as \\cr v^2 &= 0 + 2(2.8)(1.5) \\cr v^2 &= 8.4 \\cr v &= \\sqrt{ 8.4 } \\cr &\\approx 2.898\\text{ m s}^{ -1 } \\end{aligned}<br><br>To 2 significant figures, the speed with which $Q$ hits the floor is $2.9\\text{ m s}^{ -1 }$."
    ],
    "pi_options": [
        {
            "ans": "(b) $\\mu = 0.53$, (c) $2.9\\text{ m s}^{-1}$",
            "feedback": "This occurs if you fail to subtract the force of friction correctly, or write $T + F = 4a$ instead of $T - F = 4a$. Remember that friction always opposes the direction of motion."
        },
        {
            "ans": "(b) $\\mu = 0.25$, (c) $4.2\\text{ m s}^{-1}$",
            "feedback": "This speed of $4.2\\text{ m s}^{-1}$ represents forgetting to take the square root of $v^2 = 8.4$, or a minor SUVAT arithmetic slip. Make sure to apply $v = \\sqrt{ 2as }$."
        },
        {
            "ans": "(b) $\\mu = 0.29$, (c) $2.9\\text{ m s}^{-1}$",
            "feedback": "This is a common reaction force error where the normal reaction is calculated using mass instead of weight (i.e., using $R = 4$ instead of $R = 4g = 39.2$). Friction is related to the normal contact force in Newtons."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Normal Reaction in Newtons",
        "content": "When computing the coefficient of friction $\\mu = \\dfrac{ F }{ R }$, make sure that both friction $F$ and normal reaction $R$ are expressed in Newtons ($R = mg$). A very common mistake is using the mass directly as the normal reaction, which leads to an incorrect value of $\\mu > 1$."
    }
},
{
    "id": "012059",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "AS",
    "major_area": "Forces and Newton's laws",
    "topic": "Connected particles",
    "subtopic": [
        "Pulley on an inclined plane",
        "Resolving forces",
        "Newton's second law"
    ],
    "img": "images/Mechanics_pngs/012059.png",
    "question": "A particle $A$ of mass $2\\text{ kg}$ is held at rest on a smooth plane inclined at an angle of $30^\\circ$ to the horizontal. $A$ is attached to one end of a light inextensible string. The string passes over a small smooth pulley fixed at the top of the plane. The other end of the string is attached to a particle $B$ of mass $3\\text{ kg}$ which hangs vertically below the pulley, as shown in the diagram. The system is released from rest with the string taut.<br><br>Using the model,<br><strong>(a)</strong> write down an equation of motion for particle $A$ and an equation of motion for particle $B$,<br><strong>(b)</strong> find the acceleration of the system,<br><strong>(c)</strong> find the tension in the string.",
    "steps": [
        "<strong>(a) Write the equations of motion for particles $A$ and $B$:</strong><br>Since the weight of $B$ ($3g = 29.4\\text{ N }$) is greater than the component of the weight of $A$ down the plane ($2g \\sin(30^\\circ) = 9.8\\text{ N }$), particle $B$ will accelerate downwards and particle $A$ will accelerate up the plane.<br><br>Applying Newton's second law ($F = ma$) in the direction of motion for each particle:<br>• For particle $A$ (moving up the inclined plane):<br><br>\\begin{aligned} T - 2g \\sin(30^\\circ) &= 2a \\cr T - 9.8 &= 2a \\end{aligned}<br><br>• For particle $B$ (moving vertically downwards):<br><br>\\begin{aligned} 3g - T &= 3a \\cr 29.4 - T &= 3a \\end{aligned}",
        "<strong>(b) Find the acceleration of the system ($a$):</strong><br>Add the two equations of motion to eliminate the tension $T$:<br><br>\\begin{aligned} (T - 9.8) + (29.4 - T) &= 2a + 3a \\cr 19.6 &= 5a \\cr a &= 3.92\\text{ m s}^{ -2 } \\end{aligned}",
        "<strong>(c) Find the tension in the string ($T$):</strong><br>Substitute the acceleration $a = 3.92\\text{ m s}^{ -2 }$ into the equation of motion for particle $A$:<br><br>\\begin{aligned} T - 9.8 &= 2(3.92) \\cr T - 9.8 &= 7.84 \\cr T &= 17.64\\text{ N } \\end{aligned}<br><br>To 3 significant figures, the tension in the string is $17.6\\text{ N }$."
    ],
    "pi_options": [
        {
            "ans": "(b) $1.96\\text{ m s}^{-2}$, (c) $13.7\\text{ N}$",
            "feedback": "This is a common error resulting from resolving the weight of particle $A$ down the plane using cosine instead of sine (i.e., using $2g \\cos(30^\\circ)$). Remember that the force component pulling down the incline is parallel to the plane, which involves the sine of the inclination angle."
        },
        {
            "ans": "(b) $3.92\\text{ m s}^{-2}$, (c) $29.4\\text{ N}$",
            "feedback": "This tension of $29.4\\text{ N}$ is the static weight of particle $B$ ($3g$). Because the system is in motion and accelerating downwards, the tension must be strictly less than the weight of the hanging mass."
        },
        {
            "ans": "(b) $1.96\\text{ m s}^{-2}$, (c) $17.6\\text{ N}$",
            "feedback": "This represents an error where the total accelerating mass is treated as $10\\text{ kg}$ or a division slip is made when calculating $a$. The total mass of both particles is $2 + 3 = 5\\text{ kg}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Slopes and Weight Components",
        "content": "For any particle of mass $m$ on an incline of angle $\\theta$, the component of weight acting parallel to the slope is always $mg\\sin\\theta$, and the component acting perpendicular is $mg\\cos\\theta$. Memorising this standard decomposition will save you valuable time during exam resolution."
    }
},
{
    "id": "012060",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Connected particles",
    "subtopic": [
        "Fixed pulley systems",
        "Multi-stage motion",
        "Newton's second law"
    ],
    "img": "images/Mechanics_pngs/012060.png",
    "question": "Two particles, $X$ and $Y$, have masses $3\\text{ kg}$ and $1\\text{ kg}$ respectively. The particles are attached to the ends of a light inextensible string that passes over a small smooth fixed pulley. The system is held at rest with the string taut and both particles hanging vertically, as shown in the diagram.<br><br>At the instant of release, particle $X$ is at a height of $5\\text{ m }$ above horizontal ground. The system is released from rest and, in the subsequent motion, $X$ hits the ground and does not rebound.<br><br>Using the model,<br><strong>(a)</strong> find the acceleration of the system and the tension in the string before $X$ hits the ground,<br><strong>(b)</strong> find the speed of $X$ at the instant it hits the ground,<br><strong>(c)</strong> find the total maximum height reached by $Y$ above its initial starting position.",
    "steps": [
        "<strong>(a) Find the acceleration and tension before $X$ hits the ground:</strong><br>Since $X$ is heavier, it accelerates downwards while $Y$ accelerates upwards with the same magnitude $a$. Applying Newton's second law ($F = ma$) to both particles:<br>• For $X$ (moving downwards):<br><br>\\begin{aligned} 3g - T &= 3a \\end{aligned}<br><br>• For $Y$ (moving upwards):<br><br>\\begin{aligned} T - 1g &= 1a \\end{aligned}",
        "Add the two equations to eliminate $T$ and solve for $a$:<br><br>\\begin{aligned} 2g &= 4a \\cr a &= 0.5g \\cr a &= 0.5 \\times 9.8 \\cr a &= 4.9\\text{ m s}^{ -2 } \\end{aligned}",
        "Substitute $a = 4.9\\text{ m s}^{ -2 }$ into the equation of motion for particle $Y$:<br><br>\\begin{aligned} T - 9.8 &= 1(4.9) \\cr T &= 14.7\\text{ N } \\end{aligned}",
        "<strong>(b) Find the speed of $X$ at the instant it hits the ground:</strong><br>Using constant acceleration equations for the downward motion of $X$ through a displacement $s = 5\\text{ m }$:<br>• Initial speed, $u = 0\\text{ m s}^{ -1 }$<br>• Acceleration, $a = 4.9\\text{ m s}^{ -2 }$<br>• Distance, $s = 5\\text{ m }$<br><br>\\begin{aligned} v^2 &= u^2 + 2as \\cr v^2 &= 0 + 2(4.9)(5) \\cr v^2 &= 49 \\cr v &= 7\\text{ m s}^{ -1 } \\end{aligned}",
        "<strong>(c) Find the total maximum height reached by $Y$ above its starting position:</strong><br>This is a <strong>two-stage</strong> motion problem:<br><br>• <strong>Stage 1 (String Taut):</strong> While $X$ falls $5\\text{ m }$, particle $Y$ is pulled upwards by a distance of $5\\text{ m }$. At the end of this stage, $Y$ has an upward speed of $v = 7\\text{ m s}^{ -1 }$.",
        "• <strong>Stage 2 (String Slack):</strong> The moment $X$ hits the ground, the string goes slack and the tension drops to zero. Particle $Y$ now moves freely under gravity alone as a projectile with initial upward speed $u_2 = 7\\text{ m s}^{ -1 }$ and acceleration $g = -9.8\\text{ m s}^{ -2 }$ until it reaches its highest point where $v_2 = 0$:<br><br>\\begin{aligned} v_2^2 &= u_2^2 + 2gs_2 \\cr 0^2 &= (7)^2 + 2(-9.8)s_2 \\cr 0 &= 49 - 19.6s_2 \\cr 19.6s_2 &= 49 \\cr s_2 &= 2.5\\text{ m } \\end{aligned}",
        "Calculate the total vertical height reached by $Y$ above its starting position by summing the heights from both stages:<br><br>\\begin{aligned} \\text{ Total Height } &= s_1 + s_2 \\cr &= 5\\text{ m } + 2.5\\text{ m } \\cr &= 7.5\\text{ m } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "(a) $a = 4.9\\text{ m s}^{-2}, T = 14.7\\text{ N}$, (b) $7\\text{ m s}^{-1}$, (c) $2.5\\text{ m}$",
            "feedback": "This $2.5\\text{ m}$ represents only the extra distance travelled by $Y$ after the string goes slack (Stage 2). To find the total height above its starting position, you must add the initial $5\\text{ m}$ of ascent from Stage 1."
        },
        {
            "ans": "(a) $a = 4.9\\text{ m s}^{-2}, T = 14.7\\text{ N}$, (b) $7\\text{ m s}^{-1}$, (c) $5.0\\text{ m}$",
            "feedback": "This $5.0\\text{ m}$ is the height reached at the moment $X$ hits the ground. It fails to account for the fact that $Y$ possesses upward momentum and will continue to rise freely under gravity for another $2.5\\text{ m}$."
        },
        {
            "ans": "(a) $a = 4.9\\text{ m s}^{-2}, T = 14.7\\text{ N}$, (b) $4.9\\text{ m s}^{-1}$, (c) $6.2\\text{ m}$",
            "feedback": "This occurs due to a SUVAT calculation error in part (b), setting the final speed to $4.9\\text{ m s}^{-1}$ instead of $7\\text{ m s}^{-1}$. Ensure you use the formula $v = \\sqrt{ 2as }$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: String Slack Dynamics",
        "content": "Multi-body pulley questions involving impact are classics in Mechanics. When the heavier particle hits the floor, the string immediately becomes slack, meaning $T$ instantly drops to zero. The lighter particle behaves as a free-falling projectile under gravity alone ($a = -g$) until its upward velocity hits zero."
    }
},
{
    "id": "012061",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Variable acceleration",
    "subtopic": [
        "Integration in kinematics",
        "2D motion with vectors"
    ],
    "img": false,
    "question": "At time $t$ seconds, where $t \\ge 0$, a particle $P$ moves in the $x$-$y$ plane in such a way that its velocity, $\\mathbf{v}\\text{ m s}^{ -1 }$, is given by:<br>$$\\mathbf{v} = t^{ -1/2 }\\mathbf{i} - 2t\\mathbf{j}$$<br>When $t = 1$, $P$ is at the point $A$ and when $t = 4$, $P$ is at the point $B$.<br><br>Find the exact distance $AB$.",
    "steps": [
        "Find the displacement vector by integrating the velocity vector with respect to time ($t$):<br><br>\\begin{aligned} \\mathbf{r} &= \\int \\left( t^{ -1/2 }\\mathbf{i} - 2t\\mathbf{j} \\right) \\, \\mathrm{d}t \\cr &= 2t^{ 1/2 }\\mathbf{i} - t^2\\mathbf{j} + \\mathbf{C} \\end{aligned}",
        "Calculate the position vector of the particle at the two given times, $t = 1$ and $t = 4$. Note that the constant of integration $\\mathbf{C}$ will cancel out when we find the difference between the two positions:<br>• At $t = 1$ (point $A$):<br><br>\\begin{aligned} \\mathbf{r}(1) &= 2(1)^{ 1/2 }\\mathbf{i} - (1)^2\\mathbf{j} + \\mathbf{C} \\cr &= 2\\mathbf{i} - \\mathbf{j} + \\mathbf{C} \\end{aligned}<br><br>• At $t = 4$ (point $B$):<br><br>\\begin{aligned} \\mathbf{r}(4) &= 2(4)^{ 1/2 }\\mathbf{i} - (4)^2\\mathbf{j} + \\mathbf{C} \\cr &= 4\\mathbf{i} - 16\\mathbf{j} + \\mathbf{C} \\end{aligned}",
        "Find the displacement vector $\\vec{ AB }$ from point $A$ to point $B$ by subtracting the position vector at $t = 1$ from the position vector at $t = 4$:<br><br>\\begin{aligned} \\vec{ AB } &= \\mathbf{r}(4) - \\mathbf{r}(1) \\cr &= (4\\mathbf{i} - 16\\mathbf{j} + \\mathbf{C}) - (2\\mathbf{i} - \\mathbf{j} + \\mathbf{C}) \\cr &= (4 - 2)\\mathbf{i} + (-16 - (-1))\\mathbf{j} \\cr &= 2\\mathbf{i} - 15\\mathbf{j} \\end{aligned}",
        "Calculate the magnitude of the displacement vector $\\vec{ AB }$ to find the exact distance:<br><br>\\begin{aligned} |\\vec{ AB }| &= \\sqrt{ (2)^2 + (-15)^2 } \\cr &= \\sqrt{ 4 + 225 } \\cr &= \\sqrt{ 229 }\\text{ m } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$\\sqrt{ 221 }\\text{ m }$",
            "feedback": "This error occurs if you make a sign slip when calculating the $\\mathbf{j}$ component of the displacement, such as computing $-16 - 1 = -17$ instead of $-16 - (-1) = -15$. Always write out the subtraction of negative components carefully."
        },
        {
            "ans": "$13\\text{ m }$",
            "feedback": "This is obtained if you integrate $t^{-1/2}$ incorrectly as $-0.5 t^{-3/2}$, leading to an incorrect position vector and distance. Ensure you use the integration rule: add one to the power and divide by the new power."
        },
        {
            "ans": "$\\sqrt{ 257 }\\text{ m }$",
            "feedback": "This result comes from forgetting to double the coefficient when integrating $t^{-1/2}$, integrating it as $t^{1/2}$ instead of $2t^{1/2}$. Remember that dividing by $1/2$ is equivalent to multiplying by $2$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Cancelling the Integration Constant",
        "content": "In vector kinematics, when finding the displacement vector $\\vec{ AB }$ between two points $A$ and $B$ at specified times, the constant of integration $\\mathbf{C}$ will always cancel out. You do not need to solve for $\\mathbf{C}$ unless the absolute coordinates of the origin are required."
    }
},
{
    "id": "012062",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Variable acceleration",
    "subtopic": [
        "Integration in kinematics",
        "2D motion with vectors"
    ],
    "img": false,
    "question": "At time $t$ seconds, where $t \\ge 0$, a particle $P$ moves in the $x$-$y$ plane with acceleration, $\\mathbf{a}\\text{ m s}^{ -2 }$, given by:<br>$$\\mathbf{a} = 6t\\mathbf{i} + 2\\mathbf{j}$$<br>At the instant $t = 0$, the velocity of $P$ is $(\\mathbf{i} - 4\\mathbf{j})\\text{ m s}^{ -1 }$.<br><br>When $t = 1$, $P$ is at the point $A$ and when $t = 3$, $P$ is at the point $B$.<br><br>Find the exact distance $AB$.",
    "steps": [
        "First, find the velocity vector $\\mathbf{v}$ by integrating the acceleration vector $\\mathbf{a}$ with respect to time ($t$):<br><br>\\begin{aligned} \\mathbf{v} &= \\int (6t\\mathbf{i} + 2\\mathbf{j}) \\, \\mathrm{d}t \\cr &= 3t^2\\mathbf{i} + 2t\\mathbf{j} + \\mathbf{C}_1 \\end{aligned}",
        "Use the initial condition at $t = 0$, where the velocity is $\\mathbf{i} - 4\\mathbf{j}$, to solve for the constant vector $\\mathbf{C}_1$:<br><br>\\begin{aligned} 3(0)^2\\mathbf{i} + 2(0)\\mathbf{j} + \\mathbf{C}_1 &= \\mathbf{i} - 4\\mathbf{j} \\cr \\mathbf{C}_1 &= \\mathbf{i} - 4\\mathbf{j} \\end{aligned}<br><br>Therefore, the velocity vector is:<br><br>\\begin{aligned} \\mathbf{v} &= (3t^2 + 1)\\mathbf{i} + (2t - 4)\\mathbf{j} \\end{aligned}",
        "Find the position vector $\\mathbf{r}$ by integrating the velocity vector $\\mathbf{v}$ with respect to time ($t$):<br><br>\\begin{aligned} \\mathbf{r} &= \\int \\left[ (3t^2 + 1)\\mathbf{i} + (2t - 4)\\mathbf{j} \\right] \\, \\mathrm{d}t \\cr &= (t^3 + t)\\mathbf{i} + (t^2 - 4t)\\mathbf{j} + \\mathbf{C}_2 \\end{aligned}",
        "Evaluate the position vector of the particle at the two times, $t = 1$ and $t = 3$. The constant vector $\\mathbf{C}_2$ will cancel out during subtraction:<br>• At $t = 1$ (point $A$):<br><br>\\begin{aligned} \\mathbf{r}(1) &= (1^3 + 1)\\mathbf{i} + (1^2 - 4(1))\\mathbf{j} + \\mathbf{C}_2 \\cr &= 2\\mathbf{i} - 3\\mathbf{j} + \\mathbf{C}_2 \\end{aligned}<br><br>• At $t = 3$ (point $B$):<br><br>\\begin{aligned} \\mathbf{r}(3) &= (3^3 + 3)\\mathbf{i} + (3^2 - 4(3))\\mathbf{j} + \\mathbf{C}_2 \\cr &= 30\\mathbf{i} - 3\\mathbf{j} + \\mathbf{C}_2 \\end{aligned}",
        "Find the displacement vector $\\vec{ AB }$ from point $A$ to point $B$:<br><br>\\begin{aligned} \\vec{ AB } &= \\mathbf{r}(3) - \\mathbf{r}(1) \\cr &= (30\\mathbf{i} - 3\\mathbf{j} + \\mathbf{C}_2) - (2\\mathbf{i} - 3\\mathbf{j} + \\mathbf{C}_2) \\cr &= (30 - 2)\\mathbf{i} + (-3 - (-3))\\mathbf{j} \\cr &= 28\\mathbf{i} + 0\\mathbf{j} \\end{aligned}",
        "Find the exact distance, which is the magnitude of the displacement vector $\\vec{ AB }$:<br><br>\\begin{aligned} |\\vec{ AB }| &= \\sqrt{ (28)^2 + (0)^2 } \\cr &= 28\\text{ m } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$28\\sqrt{ 2 }\\text{ m }$",
            "feedback": "This error occurs if you make a sign error when subtracting the $\\mathbf{j}$ components, resulting in $-3 - (-3) = -6$ instead of $0$. Ensure you track signs carefully: $-3 - (-3) = -3 + 3 = 0$."
        },
        {
            "ans": "$26\\text{ m }$",
            "feedback": "This is obtained if you forget to add the initial velocity components to the velocity integration, integrating $\\mathbf{a} = 6t\\mathbf{i} + 2\\mathbf{j}$ directly to position without applying the initial velocity condition at $t = 0$."
        },
        {
            "ans": "$\\sqrt{ 754 }\\text{ m }$",
            "feedback": "This result comes from integrating $3t^2$ to $t^3$ but making a coefficient error on the linear terms during integration. Double check your calculus steps."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Step-by-Step Integration",
        "content": "Do not attempt to integrate directly from acceleration to position. You must always integrate once to find velocity, apply the boundary conditions to find the first constant vector, and then integrate a second time. Skipping this intermediate step will lead to missing linear terms in the position function."
    }
},
{
    "id": "012063",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Variable acceleration",
    "subtopic": [
        "Integration in kinematics",
        "2D motion with vectors"
    ],
    "img": false,
    "question": "At time $t$ seconds, where $t \\ge 0$, a particle $P$ moves in the $x$-$y$ plane. The velocity of $P$, $\\mathbf{v}\\text{ m s}^{ -1 }$, is modelled by the formula:<br>$$\\mathbf{v} = (3t^2 - 12)\\mathbf{i} + (4t - 8)\\mathbf{j}$$<br>At $t = 0$, $P$ is at the origin $O$.<br><br><strong>(a)</strong> Find the value of $t$ when $P$ is moving parallel to the vector $\\mathbf{j}$.<br><br><strong>(b)</strong> Find the position vector of $P$ at this instant.<br><br><strong>(c)</strong> Find the exact distance of $P$ from the origin $O$ at this instant.",
    "steps": [
        "<strong>(a) Find when $P$ is moving parallel to $\\mathbf{j}$:</strong><br>Moving parallel to the vector $\\mathbf{j}$ means the motion is purely vertical, which implies that the horizontal ($\\mathbf{i}$) component of velocity is zero:<br><br>\\begin{aligned} 3t^2 - 12 &= 0 \\cr t^2 &= 4 \\end{aligned}<br><br>Since $t \\ge 0$, we have $t = 2\\text{ seconds }$.",
        "<strong>(b) Find the position vector of $P$ at $t = 2$:</strong><br>Integrate the velocity vector $\\mathbf{v}$ with respect to time ($t$) to find the position vector $\\mathbf{r}$:<br><br>\\begin{aligned} \\mathbf{r} &= \\int \\left[ (3t^2 - 12)\\mathbf{i} + (4t - 8)\\mathbf{j} \\right] \\, \\mathrm{d}t \\cr &= (t^3 - 12t)\\mathbf{i} + (2t^2 - 8t)\\mathbf{j} + \\mathbf{C} \\end{aligned}",
        "Since $P$ is at the origin ($O$) at $t = 0$, we have $\\mathbf{r} = \\mathbf{0}$ at $t = 0$, which yields $\\mathbf{C} = \\mathbf{0}$. Therefore, the position vector is:<br><br>\\begin{aligned} \\mathbf{r} &= (t^3 - 12t)\\mathbf{i} + (2t^2 - 8t)\\mathbf{j} \\end{aligned}",
        "Substitute $t = 2$ into the position vector equation:<br><br>\\begin{aligned} \\mathbf{r}(2) &= (2^3 - 12(2))\\mathbf{i} + (2(2)^2 - 8(2))\\mathbf{j} \\cr &= (8 - 24)\\mathbf{i} + (8 - 16)\\mathbf{j} \\cr &= -16\\mathbf{i} - 8\\mathbf{j} \\end{aligned}",
        "<strong>(c) Find the exact distance of $P$ from the origin at $t = 2$:</strong><br>The distance is the magnitude of the position vector $\\mathbf{r}(2)$:<br><br>\\begin{aligned} |\\mathbf{r}(2)| &= \\sqrt{ (-16)^2 + (-8)^2 } \\cr &= \\sqrt{ 256 + 64 } \\cr &= \\sqrt{ 320 } \\cr &= 8\\sqrt{ 5 }\\text{ m } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "(a) $t = 2\\text{ s}$, (b) $-16\\mathbf{i} - 8\\mathbf{j}$, (c) $16\\sqrt{ 2 }\\text{ m }$",
            "feedback": "This distance is incorrect due to a minor calculation slip under the square root, such as computing $256 + 256 = 512$ instead of $256 + 64 = 320$. Ensure you substitute the correct coordinates: $x = -16$ and $y = -8$."
        },
        {
            "ans": "(a) $t = 2\\text{ s}$, (b) $-8\\mathbf{i} - 8\\mathbf{j}$, (c) $8\\sqrt{ 2 }\\text{ m }$",
            "feedback": "This position vector is obtained if you integrated the horizontal component incorrectly or forgot to multiply by $t$ during the integration. Double check that $\\int 12 \\, \\mathrm{d}t = 12t$."
        },
        {
            "ans": "(a) $t = 2\\text{ s}$, (b) $-16\\mathbf{i} - 8\\mathbf{j}$, (c) $24\\text{ m }$",
            "feedback": "This distance is the simple sum of the component magnitudes ($16 + 8 = 24$). To find the straight-line distance, you must use Pythagoras' theorem ($d = \\sqrt{ x^2 + y^2 }$)."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Parallel to the Axes",
        "content": "When a particle is 'moving parallel to $\\mathbf{j}$', its instantaneous motion is purely vertical, which mathematically means $v_x = 0$. Conversely, if it were 'moving parallel to $\\mathbf{i}$', its instantaneous motion is purely horizontal, meaning $v_y = 0$."
    }
},
{
    "id": "012064",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Variable acceleration",
    "subtopic": [
        "Differentiation in kinematics",
        "2D motion with vectors",
        "Simple harmonic motion"
    ],
    "img": false,
    "question": "At time $t$ seconds, a particle $P$ moves in the $x$-$y$ plane in such a way that its position vector, $\\mathbf{r}$ metres relative to a fixed origin $O$, is given by:<br>$$\\mathbf{r} = (3\\cos 2t)\\mathbf{i} + (4\\sin 2t)\\mathbf{j}$$<br><strong>(a)</strong> Find the velocity vector of the particle at the instant $t = \\dfrac{ \\pi }{ 4 }$.<br><br><strong>(b)</strong> Find the exact speed of the particle at the instant $t = \\dfrac{ \\pi }{ 6 }$.<br><br><strong>(c)</strong> Show that the acceleration of the particle is always directed towards the origin $O$.",
    "steps": [
        "<strong>(a) Find the velocity vector of the particle at $t = \\dfrac{ \\pi }{ 4 }$:</strong><br>Differentiate the position vector $\\mathbf{r}$ with respect to time ($t$) to find the velocity vector $\\mathbf{v}$ using the chain rule:<br><br>\\begin{aligned} \\mathbf{v} &= \\dfrac{ \\mathrm{d}\\mathbf{r} }{ \\mathrm{d}t } \\cr &= (-6\\sin 2t)\\mathbf{i} + (8\\cos 2t)\\mathbf{j} \\end{aligned}",
        "Substitute $t = \\dfrac{ \\pi }{ 4 }$ into the velocity vector equation:<br><br>\\begin{aligned} \\mathbf{v}\\left( \\dfrac{ \\pi }{ 4 } \\right) &= \\left[ -6\\sin\\left( \\dfrac{ \\pi }{ 2 } \\right) \\right]\\mathbf{i} + \\left[ 8\\cos\\left( \\dfrac{ \\pi }{ 2 } \\right) \\right]\\mathbf{j} \\cr &= -6(1)\\mathbf{i} + 8(0)\\mathbf{j} \\cr &= -6\\mathbf{i}\\text{ m s}^{ -1 } \\end{aligned}",
        "<strong>(b) Find the exact speed of the particle at $t = \\dfrac{ \\pi }{ 6 }$:</strong><br>First, evaluate the velocity vector at $t = \\dfrac{ \\pi }{ 6 }$:<br><br>\\begin{aligned} \\mathbf{v}\\left( \\dfrac{ \\pi }{ 6 } \\right) &= \\left[ -6\\sin\\left( \\dfrac{ \\pi }{ 3 } \\right) \\right]\\mathbf{i} + \\left[ 8\\cos\\left( \\dfrac{ \\pi }{ 3 } \\right) \\right]\\mathbf{j} \\cr &= -6\\left( \\dfrac{ \\sqrt{ 3 } }{ 2 } \\right)\\mathbf{i} + 8\\left( \\dfrac{ 1 }{ 2 } \\right)\\mathbf{j} \\cr &= -3\\sqrt{ 3 }\\mathbf{i} + 4\\mathbf{j} \\end{aligned}",
        "The speed is the magnitude of this velocity vector:<br><br>\\begin{aligned} \\text{ Speed } &= \\sqrt{ (-3\\sqrt{ 3 })^2 + (4)^2 } \\cr &= \\sqrt{ (9 \\times 3) + 16 } \\cr &= \\sqrt{ 27 + 16 } \\cr &= \\sqrt{ 43 }\\text{ m s}^{ -1 } \\end{aligned}",
        "<strong>(c) Show that the acceleration of the particle is always directed towards the origin $O$:</strong><br>Differentiate the velocity vector $\\mathbf{v}$ with respect to time ($t$) to find the acceleration vector $\\mathbf{a}$:<br><br>\\begin{aligned} \\mathbf{a} &= \\dfrac{ \\mathrm{d}\\mathbf{v} }{ \\mathrm{d}t } \\cr &= (-12\\cos 2t)\\mathbf{i} + (-16\\sin 2t)\\mathbf{j} \\end{aligned}",
        "Factorise out the common scalar $-4$ from the components:<br><br>\\begin{aligned} \\mathbf{a} &= -4\\left[ (3\\cos 2t)\\mathbf{i} + (4\\sin 2t)\\mathbf{j} \\right] \\cr &= -4\\mathbf{r} \\end{aligned}<br><br>Since $\\mathbf{a} = -4\\mathbf{r}$, the acceleration vector is a negative scalar multiple of the position vector $\\mathbf{r}$ at any given instant. This means the acceleration is always directed along the line of position, pointing straight back towards the origin $O$."
    ],
    "pi_options": [
        {
            "ans": "(a) $-6\\mathbf{i}$, (b) $\\sqrt{ 43 }\\text{ m s}^{-1}$, (c) $\\mathbf{a} = 4\\mathbf{r}$",
            "feedback": "This is a sign error in part (c). Having $\\mathbf{a} = 4\\mathbf{r}$ would mean the acceleration acts in the same direction as the position vector, pointing *away* from the origin (repulsive force) rather than *towards* it (attractive force)."
        },
        {
            "ans": "(a) $-6\\mathbf{i} + 8\\mathbf{j}$, (b) $5\\text{ m s}^{-1}$, (c) $\\mathbf{a} = -4\\mathbf{r}$",
            "feedback": "This velocity vector at $t = \\pi/4$ occurs if you forget to use the chain rule when differentiating the trigonometric functions, leaving the coefficients as $-3$ and $4$ instead of $-6$ and $8$."
        },
        {
            "ans": "(a) $-6\\mathbf{i}$, (b) $7\\text{ m s}^{-1}$, (c) $\\mathbf{a} = -4\\mathbf{r}$",
            "feedback": "This speed of $7$ is an arithmetic slip when squaring $-3\\sqrt{3}$. Note that $(-3\\sqrt{3})^2 = 9 \\times 3 = 27$, so the speed is $\\sqrt{27 + 16} = \\sqrt{43}\\text{ m s}^{-1}$, which is not equal to $\\sqrt{49} = 7$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Proving Acceleration Towards the Origin",
        "content": "This is a classic vector SHM (Simple Harmonic Motion) setup. To prove that acceleration is always directed towards the origin, you must show that $\\mathbf{a} = -k\\mathbf{r}$, where $k$ is a positive constant. The negative sign guarantees the vector points in the opposite direction of the displacement (i.e., towards the centre)."
    }
},
{
    "id": "012065",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Variable acceleration",
    "subtopic": [
        "Collisions in 2D",
        "2D motion with vectors",
        "Relative velocity"
    ],
    "img": false,
    "question": "Two particles, $A$ and $B$, move in the $x$-$y$ plane. At time $t$ seconds ($t \\ge 0$), the position vectors, $\\mathbf{r}_A$ metres and $\\mathbf{r}_B$ metres relative to a fixed origin $O$, are modelled by:<br>$$\\mathbf{r}_A = (t^2 + t)\\mathbf{i} + (3t^2 - 2)\\mathbf{j}$$<br>$$\\mathbf{r}_B = (4t - 2)\\mathbf{i} + (t^2 + 3t)\\mathbf{j}$$<br><strong>(a)</strong> Show that the two particles collide, and find the time of this collision.<br><br><strong>(b)</strong> Find the velocity vector of each particle at the instant of collision.<br><br><strong>(c)</strong> Find the exact magnitude of the relative velocity of $A$ with respect to $B$ at the instant of collision.",
    "steps": [
        "<strong>(a) Show that the particles collide and find the collision time:</strong><br>A collision occurs if and only if both particles are at the exact same location at the exact same time. This requires $\\mathbf{r}_A = \\mathbf{r}_B$ for some positive value of $t$.<br><br>First, equate the horizontal ($\\mathbf{i}$) components:<br><br>\\begin{aligned} t^2 + t &= 4t - 2 \\cr t^2 - 3t + 2 &= 0 \\cr (t - 1)(t - 2) &= 0 \\end{aligned}<br><br>This gives horizontal equivalence times of $t = 1\\text{ s }$ and $t = 2\\text{ s }$." ,
        "Next, equate the vertical ($\\mathbf{j}$) components:<br><br>\\begin{aligned} 3t^2 - 2 &= t^2 + 3t \\cr 2t^2 - 3t - 2 &= 0 \\cr (2t + 1)(t - 2) &= 0 \\end{aligned}<br><br>Since $t \\ge 0$, the only positive solution is $t = 2\\text{ s }$." ,
        "Since $t = 2\\text{ s }$ is a common root satisfying both the horizontal and vertical position equations, a collision occurs at this exact time. The collision time is $t = 2\\text{ seconds }$." ,
        "<strong>(b) Find the velocity vector of each particle at $t = 2$:</strong><br>Differentiate both position vectors with respect to time ($t$) to find the velocity vector functions, $\\mathbf{v}_A$ and $\\mathbf{v}_B$:<br><br>\\begin{aligned} \\mathbf{v}_A &= \\dfrac{ \\mathrm{d}\\mathbf{r}_A }{ \\mathrm{d}t } \\cr &= (2t + 1)\\mathbf{i} + 6t\\mathbf{j} \\cr\\cr \\mathbf{v}_B &= \\dfrac{ \\mathrm{d}\\mathbf{r}_B }{ \\mathrm{d}t } \\cr &= 4\\mathbf{i} + (2t + 3)\\mathbf{j} \\end{aligned}" ,
        "Substitute $t = 2$ into both velocity vector functions:<br><br>\\begin{aligned} \\mathbf{v}_A(2) &= (2(2) + 1)\\mathbf{i} + 6(2)\\mathbf{j} \\cr &= 5\\mathbf{i} + 12\\mathbf{j}\\text{ m s}^{ -1 } \\cr\\cr \\mathbf{v}_B(2) &= 4\\mathbf{i} + (2(2) + 3)\\mathbf{j} \\cr &= 4\\mathbf{i} + 7\\mathbf{j}\\text{ m s}^{ -1 } \\end{aligned}" ,
        "<strong>(c) Find the magnitude of the relative velocity of $A$ with respect to $B$ at $t = 2$:</strong><br>The relative velocity vector $\\mathbf{v}_{A|B}$ is defined as $\\mathbf{v}_A - \\mathbf{v}_B$:<br><br>\\begin{aligned} \\mathbf{v}_{A|B} &= \\mathbf{v}_A(2) - \\mathbf{v}_B(2) \\cr &= (5\\mathbf{i} + 12\\mathbf{j}) - (4\\mathbf{i} + 7\\mathbf{j}) \\cr &= (5 - 4)\\mathbf{i} + (12 - 7)\\mathbf{j} \\cr &= \\mathbf{i} + 5\\mathbf{j}\\text{ m s}^{ -1 } \\end{aligned}" ,
        "Calculate the magnitude of the relative velocity vector:<br><br>\\begin{aligned} |\\mathbf{v}_{A|B}| &= \\sqrt{ (1)^2 + (5)^2 } \\cr &= \\sqrt{ 1 + 25 } \\cr &= \\sqrt{ 26 }\\text{ m s}^{ -1 } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "(a) $t = 1\\text{ s}$, (b) $\\mathbf{v}_A = 3\\mathbf{i} + 6\\mathbf{j}, \\mathbf{v}_B = 4\\mathbf{i} + 5\\mathbf{j}$, (c) $\\sqrt{ 2 }\\text{ m s}^{-1}$",
            "feedback": "This is a critical collision concept error. While $t = 1\\text{ s}$ satisfies the horizontal position equation ($x_A = x_B = 2$), the vertical coordinates at this time are different ($y_A = 1$ and $y_B = 4$). A collision requires both coordinates to be identical simultaneously, which only occurs at $t = 2\\text{ s}$."
        },
        {
            "ans": "(a) $t = 2\\text{ s}$, (b) $\\mathbf{v}_A = 5\\mathbf{i} + 12\\mathbf{j}, \\mathbf{v}_B = 4\\mathbf{i} + 7\\mathbf{j}$, (c) $6\\text{ m s}^{-1}$",
            "feedback": "This is a vector arithmetic error in part (c) where relative velocity magnitude is calculated by adding the component differences ($1 + 5 = 6$) rather than applying Pythagoras' theorem to the relative velocity vector $\\mathbf{i} + 5\\mathbf{j}$."
        },
        {
            "ans": "(a) $t = 2\\text{ s}$, (b) $\\mathbf{v}_A = 4\\mathbf{i} + 12\\mathbf{j}, \\mathbf{v}_B = 4\\mathbf{i} + 4\\mathbf{j}$, (c) $8\\text{ m s}^{-1}$",
            "feedback": "This occurs if you differentiate the position vectors incorrectly, such as forgetting the linear terms during differentiation (e.g., getting $2t$ instead of $2t+1$ for the $\\mathbf{i}$ component of $A$)."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Dual Coordinate Equivalence",
        "content": "For a collision to occur in 2D space, both coordinates must be equal at the exact same time ($t$). Finding a time where only one component matches (such as $t = 1$ where the $x$-coordinates are equal but the $y$-coordinates are not) simply means the particles pass across the same vertical line, not that they collide."
    }
},
{
    "id": "012066",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Forces and Newton's laws",
    "topic": "Friction",
    "subtopic": [
        "Newton's second law",
        "Resolving forces",
        "Pulling vs pushing friction"
    ],
    "img": false,
    "question": "A crate of mass $10\\text{ kg}$ is pulled in a straight line along a rough horizontal floor using a handle attached to the crate. The handle is inclined at an angle $\\alpha$ to the floor, as shown in Figure 1, where $\\tan \\alpha = \\dfrac{ 3 }{ 4 }$.<br><br><img src='images/Mechanics_pngs/012066_1.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br>The tension in the handle is $30\\text{ N }$. The coefficient of friction between the crate and the floor is $0.2$. The crate is modelled as a particle and the handle is modelled as a light rod.<br><br>Using the model,<br><strong>(a)</strong> find the acceleration of the crate.<br><br>The crate is now pushed along the same floor using the handle. The handle is inclined at the same angle $\\alpha$ to the floor, as shown in Figure 2. The force applied to the handle is a thrust of $30\\text{ N }$.<br><br><img src='images/Mechanics_pngs/012066_2.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br><strong>(b)</strong> Explain briefly why the acceleration of the crate would now be less than the acceleration of the crate found in part (a).",
    "steps": [
        "<strong>(a) Find the acceleration of the crate:</strong><br>First, resolve the pulling force (tension $T = 30\\text{ N }$) horizontally and vertically. Given $\\tan \\alpha = \\dfrac{ 3 }{ 4 }$, we can find the exact trigonometric values using a $3$-$4$-$5$ right-angled triangle:<br><br>\\begin{aligned} \\sin \\alpha &= 0.6 \\cr \\cos \\alpha &= 0.8 \\end{aligned}",
        "Calculate the components of tension:<br>• Horizontal component: $T_x = T \\cos \\alpha = 30 \\times 0.8 = 24\\text{ N }$<br>• Vertical component: $T_y = T \\sin \\alpha = 30 \\times 0.6 = 18\\text{ N }$",
        "Set up the equation of vertical equilibrium for the crate to find the normal reaction force $R$. Since the crate remains on the floor, the sum of the vertical forces must equal zero (taking upwards as positive):<br><br>\\begin{aligned} R + T \\sin \\alpha - mg &= 0 \\cr R + 18 - 10(9.8) &= 0 \\cr R + 18 - 98 &= 0 \\cr R &= 80\\text{ N } \\end{aligned}",
        "Calculate the maximum friction force $F$ acting horizontally to oppose the motion:<br><br>\\begin{aligned} F &= \\mu R \\cr &= 0.2 \\times 80 \\cr &= 16\\text{ N } \\end{aligned}",
        "Apply Newton's second law ($F = ma$) in the horizontal direction of motion (to the right):<br><br>\\begin{aligned} T_x - F &= ma \\cr 24 - 16 &= 10a \\cr 8 &= 10a \\cr a &= 0.8\\text{ m s}^{ -2 } \\end{aligned}",
        "<strong>(b) Explain why the acceleration is less when pushed:</strong><br>When the crate is pushed by a thrust force of $30\\text{ N }$, the vertical component of this thrust ($18\\text{ N }$) acts <strong>downwards</strong> instead of upwards.<br><br>This changes the vertical equilibrium equation to:<br><br>\\begin{aligned} R - 18 - 98 = 0 \\implies R = 116\\text{ N } \\end{aligned}<br><br>Since the normal reaction $R$ increases from $80\\text{ N }$ to $116\\text{ N }$, the maximum friction force $F = \\mu R$ increases to $0.2 \\times 116 = 23.2\\text{ N }$. This larger friction force reduces the net horizontal force ($24 - 23.2 = 0.8\\text{ N }$), resulting in a much smaller acceleration ($a = 0.08\\text{ m s}^{ -2 }$)."
    ],
    "pi_options": [
        {
            "ans": "(a) $a = 0.396\\text{ m s}^{-2}$",
            "feedback": "This is the acceleration of the original seed question (which had a mass of $20\\text{ kg}$ and a friction coefficient of $0.14$). Ensure you use the parameters specified for this Twin question."
        },
        {
            "ans": "(a) $a = 2.4\\text{ m s}^{-2}$",
            "feedback": "This error occurs if you forget to subtract the friction force when applying Newton's second law horizontally, writing $T_x = ma$ ($24 = 10a \\implies a = 2.4$). Always include friction in your horizontal equation of motion."
        },
        {
            "ans": "(a) $a = 0.62\\text{ m s}^{-2}$",
            "feedback": "This occurs if you treat the normal reaction $R$ as simply equal to the weight $mg = 98\\text{ N }$, neglecting the vertical lifting component of the pulling tension. Resolving vertical forces is crucial to finding the correct $R$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Pulling vs. Pushing Friction",
        "content": "This is a classic conceptual and mathematical trap in Dynamics. Pulling 'lifts' the object (reducing the normal reaction and decreasing friction); pushing 'pins' the object (increasing the normal reaction and increasing friction). This explains why it is physically easier to pull a heavy object than to push it at an angle."
    }
},
{
    "id": "012067",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Forces and Newton's laws",
    "topic": "Friction",
    "subtopic": [
        "Newton's second law",
        "Resolving forces",
        "Limiting equilibrium"
    ],
    "img": "images/Mechanics_pngs/012067.png",
    "question": "A heavy box of mass $22\\text{ kg}$ lies on a rough horizontal floor. The box is pulled by a handle inclined at an angle $\\theta$ to the floor, as shown in the diagram, where $\\tan \\theta = \\dfrac{ 3 }{ 4 }$.<br><br>The tension in the handle is $T\\text{ N }$. The coefficient of friction between the box and the floor is $0.5$. The box is modelled as a particle and is on the point of slipping.<br><br>Using the model, find the value of $T$.",
    "steps": [
        "First, identify the exact trigonometric values of the inclination angle $\\theta$ from $\\tan \\theta = \\dfrac{ 3 }{ 4 }$ using a standard $3$-$4$-$5$ right-angled triangle:<br><br>\\begin{aligned} \\sin \\theta &= 0.6 \\cr \\cos \\theta &= 0.8 \\end{aligned}",
        "Set up the equation of vertical equilibrium for the box to express the normal reaction $R$ in terms of $T$ (taking upwards as positive):<br><br>\\begin{aligned} R + T \\sin \\theta - Mg &= 0 \\cr R + 0.6T - 22(9.8) &= 0 \\cr R &= 215.6 - 0.6T \\end{aligned}",
        "Since the box is on the point of slipping (limiting equilibrium), the friction force $F$ is at its maximum value ($F = \\mu R$):<br><br>\\begin{aligned} F &= 0.5R \\cr &= 0.5(215.6 - 0.6T) \\cr &= 107.8 - 0.3T \\end{aligned}",
        "Set up the equation of horizontal equilibrium. The horizontal pulling component of the tension must balance the maximum friction force:<br><br>\\begin{aligned} T \\cos \\theta - F &= 0 \\cr 0.8T &= 107.8 - 0.3T \\end{aligned}",
        "Solve the linear equation for $T$:<br><br>\\begin{aligned} 0.8T + 0.3T &= 107.8 \\cr 1.1T &= 107.8 \\cr T &= 98\\text{ N } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$135\\text{ N }$",
            "feedback": "This is obtained if you assume the normal reaction $R$ is simply equal to the weight $Mg = 215.6\\text{ N }$, neglecting the vertical lifting effect of the tension component $T \\sin \\theta$."
        },
        {
            "ans": "$216\\text{ N }$",
            "feedback": "This is the approximate weight of the box ($Mg$). Remember that $T$ is the pulling force required to overcome friction horizontally, which is much smaller than the physical weight of the box."
        },
        {
            "ans": "$196\\text{ N }$",
            "feedback": "This represents a calculation error, such as a decimal slip or a sign error in the equation $1.1T = 107.8$. Verify your division of $107.8$ by $1.1$ carefully."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Point of Slipping",
        "content": "The phrase 'on the point of slipping' is a key indicator of limiting equilibrium. This allows you to write the maximum friction equation $F = \\mu R$. Always solve the vertical forces first to write $R$ in terms of $T$ before setting up your horizontal balance."
    }
},
{
    "id": "012068",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Forces and Newton's laws",
    "topic": "Friction",
    "subtopic": [
        "Newton's second law",
        "Resolving forces",
        "Pulley on an inclined plane"
    ],
    "img": "images/Mechanics_pngs/012068.png",
    "question": "A block of mass $5\\text{ kg}$ lies on a rough plane inclined at an angle $\\theta$ to the horizontal, as shown in the diagram, where $\\tan \\theta = \\dfrac{ 3 }{ 4 }$. The coefficient of friction between the block and the plane is $0.25$.<br><br>A force of magnitude $P\\text{ N }$ acts parallel to the plane, pulling the block up the plane at a constant acceleration of $2\\text{ m s}^{ -2 }$.<br><br>Using the model, find the value of $P$.",
    "steps": [
        "Using $\\tan \\theta = \\dfrac{ 3 }{ 4 }$, find the exact trigonometric values using a right-angled triangle:<br><br>\\begin{aligned} \\sin \\theta &= 0.6 \\cr \\cos \\theta &= 0.8 \\end{aligned}",
        "Resolve forces perpendicular to the inclined plane to find the normal reaction force $R$. Since there is no acceleration perpendicular to the plane:<br><br>\\begin{aligned} R - mg \\cos \\theta &= 0 \\cr R &= 5(9.8)(0.8) \\cr R &= 39.2\\text{ N } \\end{aligned}",
        "Calculate the maximum friction force $F$ opposing the upward motion (acting down the plane):<br><br>\\begin{aligned} F &= \\mu R \\cr &= 0.25 \\times 39.2 \\cr &= 9.8\\text{ N } \\end{aligned}",
        "Resolve forces parallel to the inclined plane (taking up-plane as positive). The forces opposing the motion are friction $F$ and the parallel component of the block's weight ($mg \\sin \\theta$):<br><br>\\begin{aligned} mg \\sin \\theta &= 5(9.8)(0.6) \\cr &= 29.4\\text{ N } \\end{aligned}",
        "Apply Newton's second law ($F = ma$) parallel to the incline:<br><br>\\begin{aligned} P - F - mg \\sin \\theta &= ma \\cr P - 9.8 - 29.4 &= 5(2) \\cr P - 39.2 &= 10 \\cr P &= 49.2\\text{ N } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$39.4\\text{ N }$",
            "feedback": "This occurs if you neglect to include the $ma = 10\\text{ N }$ acceleration term, writing $P - F - mg \\sin \\theta = 0$. Since the block is accelerating, the pulling force must exceed the static forces."
        },
        {
            "ans": "$19.8\\text{ N }$",
            "feedback": "This is a sign error where the gravity component $mg \\sin \\theta$ is added instead of subtracted in the equation, as if gravity were pulling the block up. Gravity always opposes upward motion along a slope."
        },
        {
            "ans": "$45.2\\text{ N }$",
            "feedback": "This occurs if you resolve the weight component parallel to the plane using cosine instead of sine (using $mg \\cos \\theta$ parallel to the slope). Double check your slope components: parallel is always $mg \\sin \\theta$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Incline Gravity Component",
        "content": "Do not forget the parallel component of weight ($mg \\sin \\theta$) acting down the slope. Even though you are pulling up the plane, gravity is still fighting you along with friction. This means $P$ must overcome both forces in addition to providing the mass with acceleration."
    }
},
{
    "id": "012069",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Forces and Newton's laws",
    "topic": "Friction",
    "subtopic": [
        "Pulley on an inclined plane",
        "Resolving forces",
        "Limiting equilibrium"
    ],
    "img": "images/Mechanics_pngs/012069.png",
    "question": "A block of mass $10\\text{ kg}$ is on a rough plane inclined at an angle $\\alpha$ to the horizontal, as shown in the diagram, where $\\tan \\alpha = \\dfrac{ 3 }{ 4 }$. The coefficient of friction between the block and the plane is $0.3$.<br><br>The block is held in limiting equilibrium, on the point of slipping down the plane, by a horizontal force of magnitude $H\\text{ N }$.<br><br>Using the model, find the value of $H$.",
    "steps": [
        "Find the exact trigonometric values from $\\tan \\alpha = \\dfrac{ 3 }{ 4 }$:<br><br>\\begin{aligned} \\sin \\alpha &= 0.6 \\cr \\cos \\alpha &= 0.8 \\end{aligned}",
        "Resolve the forces perpendicular and parallel to the inclined plane. Note that the horizontal force $H$ has components acting both parallel and perpendicular to the slope:<br>• Component parallel to slope (acting up the slope): $H \\cos \\alpha = 0.8H$<br>• Component perpendicular to slope (acting into the slope): $H \\sin \\alpha = 0.6H$",
        "Resolve forces perpendicular to the inclined plane to find the normal reaction force $R$ in terms of $H$:<br><br>\\begin{aligned} R - mg \\cos \\alpha - H \\sin \\alpha &= 0 \\cr R &= 10(9.8)(0.8) + 0.6H \\cr R &= 78.4 + 0.6H \\end{aligned}",
        "Since the block is on the point of slipping down the plane, the maximum limiting friction force $F$ acts up the plane:<br><br>\\begin{aligned} F &= \\mu R \\cr &= 0.3(78.4 + 0.6H) \\cr &= 23.52 + 0.18H \\end{aligned}",
        "Resolve forces parallel to the inclined plane. The force components acting up the plane (the horizontal force component $H \\cos \\alpha$ and friction $F$) must balance the gravitational weight component pulling the block down the plane ($mg \\sin \\alpha$):<br><br>\\begin{aligned} H \\cos \\alpha + F &= mg \\sin \\alpha \\cr 0.8H + (23.52 + 0.18H) &= 10(9.8)(0.6) \\cr 0.98H + 23.52 &= 58.8 \\end{aligned}",
        "Solve for $H$:<br><br>\\begin{aligned} 0.98H &= 58.8 - 23.52 \\cr 0.98H &= 35.28 \\cr H &= 36\\text{ N } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$43.6\\text{ N }$",
            "feedback": "This is a common calculation error where the normal reaction $R$ is resolved incorrectly, or a decimal rounding slip is made. Ensure you perform the algebraic substitutions with exact decimals."
        },
        {
            "ans": "$73.5\\text{ N }$",
            "feedback": "This occurs if you treat the normal reaction $R$ as simply equal to $mg \\cos \\alpha = 78.4\\text{ N }$, neglecting the fact that the horizontal force $H$ pushes the block into the slope and increases $R$."
        },
        {
            "ans": "$58.8\\text{ N }$",
            "feedback": "This is the magnitude of the parallel gravitational force component ($mg \\sin \\alpha$). Remember that $H$ and friction both assist in holding the block from sliding down, so $H$ is smaller than $58.8\\text{ N }$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Horizontal Forces on Inclines",
        "content": "This is a notoriously tricky question. A horizontal force $H$ does not act parallel to the slope. It must be resolved into two components: $H \\cos \\alpha$ parallel to the plane (assisting in holding it up), and $H \\sin \\alpha$ perpendicular to the plane, which pushes the block into the incline and actually increases the normal reaction $R$."
    }
},
{
    "id": "012070",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Forces and Newton's laws",
    "topic": "Friction",
    "subtopic": [
        "Resolving forces",
        "Limiting equilibrium",
        "Range of values for equilibrium"
    ],
    "img": "images/Mechanics_pngs/012070.png",
    "question": "A block of mass $10\\text{ kg}$ is on a rough plane inclined at an angle $\\alpha$ to the horizontal, as shown in the diagram, where $\\tan \\alpha = \\dfrac{ 3 }{ 4 }$. The coefficient of friction between the block and the plane is $0.5$.<br><br>A force of magnitude $P\\text{ N }$ acts parallel to the plane, directed up the plane.<br><br>Using the model, find the range of values of $P$ for which the block remains in equilibrium.",
    "steps": [
        "Identify the exact trigonometric values from $\\tan \\alpha = \\dfrac{ 3 }{ 4 }$:<br><br>\\begin{aligned} \\sin \\alpha &= 0.6 \\cr \\cos \\alpha &= 0.8 \\end{aligned}",
        "Calculate the component of the weight acting parallel and perpendicular to the inclined plane:<br>• Perpendicular weight component: $mg \\cos \\alpha = 10(9.8)(0.8) = 78.4\\text{ N }$<br>• Parallel weight component: $mg \\sin \\alpha = 10(9.8)(0.6) = 58.8\\text{ N }$",
        "Calculate the normal reaction force $R$ perpendicular to the slope, and the corresponding maximum limiting friction force $F_{\\text{ max }}$:<br><br>\\begin{aligned} R &= 78.4\\text{ N } \\cr F_{\\text{ max }} &= \\mu R \\cr &= 0.5 \\times 78.4 \\cr &= 39.2\\text{ N } \\end{aligned}",
        "<strong>Case 1: Point of slipping down (Minimum $P$):</strong><br>When $P$ is at its minimum value, the block is on the verge of sliding down the plane, so friction $F_{\\text{ max }}$ acts up the plane to oppose this motion:<br><br>\\begin{aligned} P_{\\text{ min }} + F_{\\text{ max }} &= mg \\sin \\alpha \\cr P_{\\text{ min }} + 39.2 &= 58.8 \\cr P_{\\text{ min }} &= 19.6\\text{ N } \\end{aligned}",
        "<strong>Case 2: Point of slipping up (Maximum $P$):</strong><br>When $P$ is at its maximum value, the block is on the verge of sliding up the plane, so friction $F_{\\text{ max }}$ acts down the plane to oppose this motion:<br><br>\\begin{aligned} P_{\\text{ max }} - F_{\\text{ max }} &= mg \\sin \\alpha \\cr P_{\\text{ max }} - 39.2 &= 58.8 \\cr P_{\\text{ max }} &= 98\\text{ N } \\end{aligned}",
        "Combine the two extremes to state the complete range of values for which the block remains in static equilibrium:<br><br>\\begin{aligned} 19.6 \\le P \\le 98 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$0 \\le P \\le 98$",
            "feedback": "This occurs if you neglect to find the lower limit $P_{\\text{ min }}$. If $P = 0$, the maximum friction force ($39.2\\text{ N }$) is smaller than the gravitational pull down the slope ($58.8\\text{ N }$), meaning the block will slide down without at least $19.6\\text{ N }$ of support force."
        },
        {
            "ans": "$19.6 \\le P \\le 58.8$",
            "feedback": "This represents a misunderstanding of the upper limit, setting $P_{\\text{ max }} = 58.8\\text{ N }$ (equal to the parallel weight component). This would only be true if there was no friction; with friction, you can pull with up to $98\\text{ N }$ before the block moves up."
        },
        {
            "ans": "$39.2 \\le P \\le 78.4$",
            "feedback": "This range is obtained if you confuse the friction force magnitude ($39.2\\text{ N }$) and reaction force magnitude ($78.4\\text{ N }$) with the equilibrium thresholds of the pulling force."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Friction as a Variable Friend",
        "content": "In a 'range of values for equilibrium' problem, friction is variable and adaptive. It can act up the plane (to prevent sliding down under low tension) or down the plane (to prevent being pulled up under high tension). Find the two limiting friction extremes to bound the range."
    }
},
{
    "id": "012071",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Constant acceleration",
    "subtopic": [
        "2D motion with vectors",
        "Kinematics equations (SUVAT)"
    ],
    "img": false,
    "question": "In this question, $\\mathbf{i}$ and $\\mathbf{j}$ are horizontal unit vectors due east and due north respectively, and position vectors are given relative to a fixed origin $O$.<br><br>A particle $P$ moves with constant acceleration. At time $t = 0$, the particle is at $O$ and is moving with velocity $(\\mathbf{i} - 2\\mathbf{j})\\text{ m s}^{ -1 }$. At time $t = 2\\text{ s }$, $P$ is at the point $A$ with position vector $(8\\mathbf{i} - 12\\mathbf{j})\\text{ m }$.<br><br><strong>(a)</strong> Show that the magnitude of the acceleration of $P$ is $5\\text{ m s}^{ -2 }$.<br><br>At the instant when $P$ leaves the point $A$, the acceleration of $P$ changes so that $P$ now moves with constant acceleration $(2\\mathbf{i} + 5.4\\mathbf{j})\\text{ m s}^{ -2 }$. At the instant $t = T$ seconds, $P$ is moving in a direction due north-east.<br><br><strong>(b)</strong> Find the value of $T$.",
    "steps": [
        "<strong>(a) Show that the magnitude of the acceleration is $5\\text{ m s}^{ -2 }$:</strong><br>Using the constant acceleration vector equation for displacement $\\mathbf{s} = \\mathbf{u}t + \\dfrac{ 1 }{ 2 }\\mathbf{a}t^2$ where $\\mathbf{u} = \\mathbf{i} - 2\\mathbf{j}$, $t = 2\\text{ s }$, and $\\mathbf{s} = 8\\mathbf{i} - 12\\mathbf{j}$:<br><br>\\begin{aligned} 8\\mathbf{i} - 12\\mathbf{j} &= (\\mathbf{i} - 2\\mathbf{j})(2) + \\dfrac{ 1 }{ 2 }\\mathbf{a}_1(2)^2 \\cr 8\\mathbf{i} - 12\\mathbf{j} &= 2\\mathbf{i} - 4\\mathbf{j} + 2\\mathbf{a}_1 \\end{aligned}",
        "Isolate and solve for the initial acceleration vector $\\mathbf{a}_1$:<br><br>\\begin{aligned} 2\\mathbf{a}_1 &= (8 - 2)\\mathbf{i} + (-12 - (-4))\\mathbf{j} \\cr 2\\mathbf{a}_1 &= 6\\mathbf{i} - 8\\mathbf{j} \\cr \\mathbf{a}_1 &= 3\\mathbf{i} - 4\\mathbf{j} \\end{aligned}",
        "Calculate the magnitude of the acceleration vector $\\mathbf{a}_1$:<br><br>\\begin{aligned} |\\mathbf{a}_1| &= \\sqrt{ (3)^2 + (-4)^2 } \\cr &= \\sqrt{ 9 + 16 } \\cr &= 5\\text{ m s}^{ -2 } \\end{aligned}",
        "<strong>(b) Find the value of $T$:</strong><br>First, find the velocity vector of the particle as it leaves point $A$ (at $t = 2\\text{ s }$) using the equation $\\mathbf{v} = \\mathbf{u} + \\mathbf{a}t$:<br><br>\\begin{aligned} \\mathbf{v}_A &= (\\mathbf{i} - 2\\mathbf{j}) + (3\\mathbf{i} - 4\\mathbf{j})(2) \\cr &= 7\\mathbf{i} - 10\\mathbf{j} \\end{aligned}",
        "Let the new constant acceleration be $\\mathbf{a}_2 = 2\\mathbf{i} + 5.4\\mathbf{j}$. The velocity vector at any total time $T > 2$ is given by:<br><br>\\begin{aligned} \\mathbf{v}(T) &= \\mathbf{v}_A + \\mathbf{a}_2(T - 2) \\cr &= (7\\mathbf{i} - 10\\mathbf{j}) + (T - 2)(2\\mathbf{i} + 5.4\\mathbf{j}) \\cr &= \\left[ 7 + 2(T - 2) \\right]\\mathbf{i} + \\left[ -10 + 5.4(T - 2) \\right]\\mathbf{j} \\cr &= (2T + 3)\\mathbf{i} + (5.4T - 20.8)\\mathbf{j} \\end{aligned}",
        "Since the particle is moving in a direction due north-east at $t = T$, its velocity vector must have equal, positive horizontal and vertical components ($v_x = v_y > 0$):<br><br>\\begin{aligned} 2T + 3 &= 5.4T - 20.8 \\cr 3.4T &= 23.8 \\cr T &= 7\\text{ seconds } \\end{aligned}<br><br>Check that both components are positive at $T = 7$: $v_x = 2(7) + 3 = 17 > 0$. Thus, $T = 7\\text{ s }$ is correct."
    ],
    "pi_options": [
        {
            "ans": "(a) $|\\mathbf{a}_1| = 5\\text{ m s}^{-2}$, (b) $T = 5\\text{ s}$",
            "feedback": "This value of $T$ is the elapsed duration of the second motion phase ($T - 2 = 5$). Remember that the question asks for the total time $T$ from the start of the entire motion ($t = 0$), which requires adding the initial $2\\text{ s}$ phase."
        },
        {
            "ans": "(a) $|\\mathbf{a}_1| = 5\\text{ m s}^{-2}$, (b) $T = 8.5\\text{ s}$",
            "feedback": "This occurs if you make a sign error when expanding the vertical component of velocity, such as writing $-10 + 5.4T + 10.8$ instead of $-10 + 5.4T - 10.8$, leading to an incorrect algebraic equation."
        },
        {
            "ans": "(a) $|\\mathbf{a}_1| = 5\\text{ m s}^{-2}$, (b) $T = 6.2\\text{ s}$",
            "feedback": "This represents a calculation error when solving the linear equation $3.4T = 23.8$. Double-check your decimal division carefully: $23.8 \\div 3.4 = 7$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Elapsed vs. Total Time",
        "content": "For multi-stage constant acceleration questions, make sure to distinguish between the elapsed time during the second phase (often written as $\\tau = T - 2$) and the total time $T$ from the origin. Forgetting to add back the initial time is a very common source of lost marks."
    }
},
{
    "id": "012072",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Constant acceleration",
    "subtopic": [
        "2D motion with vectors",
        "Kinematics equations (SUVAT)"
    ],
    "img": false,
    "question": "In this question, $\\mathbf{i}$ and $\\mathbf{j}$ are horizontal unit vectors due east and due north respectively, and position vectors are given relative to a fixed origin $O$.<br><br>A particle $P$ moves with constant acceleration. At time $t = 0$, the particle is at $O$ and is moving with velocity $(\\mathbf{i} - 3\\mathbf{j})\\text{ m s}^{ -1 }$. At time $t = 3\\text{ s }$, $P$ is at the point $A$ with position vector $(12\\mathbf{i} - 27\\mathbf{j})\\text{ m }$.<br><br><strong>(a)</strong> Show that the magnitude of the acceleration of $P$ is $2\\sqrt{ 5 }\\text{ m s}^{ -2 }$.<br><br>At the instant when $P$ leaves the point $A$, the acceleration of $P$ changes so that $P$ now moves with constant acceleration $(3\\mathbf{i} + 5\\mathbf{j})\\text{ m s}^{ -2 }$. At the instant $t = T$ seconds, $P$ is moving in a direction due south-east.<br><br><strong>(b)</strong> Find the value of $T$.",
    "steps": [
        "<strong>(a) Show that the magnitude of the acceleration is $2\\sqrt{ 5 }\\text{ m s}^{ -2 }$:</strong><br>Using the constant acceleration vector equation for displacement $\\mathbf{s} = \\mathbf{u}t + \\dfrac{ 1 }{ 2 }\\mathbf{a}t^2$ with $\\mathbf{u} = \\mathbf{i} - 3\\mathbf{j}$, $t = 3\\text{ s }$, and $\\mathbf{s} = 12\\mathbf{i} - 27\\mathbf{j}$:<br><br>\\begin{aligned} 12\\mathbf{i} - 27\\mathbf{j} &= (\\mathbf{i} - 3\\mathbf{j})(3) + \\dfrac{ 1 }{ 2 }\\mathbf{a}_1(3)^2 \\cr 12\\mathbf{i} - 27\\mathbf{j} &= 3\\mathbf{i} - 9\\mathbf{j} + 4.5\\mathbf{a}_1 \\end{aligned}",
        "Isolate and solve for the initial acceleration vector $\\mathbf{a}_1$:<br><br>\\begin{aligned} 4.5\\mathbf{a}_1 &= (12 - 3)\\mathbf{i} + (-27 - (-9))\\mathbf{j} \\cr 4.5\\mathbf{a}_1 &= 9\\mathbf{i} - 18\\mathbf{j} \\cr \\mathbf{a}_1 &= 2\\mathbf{i} - 4\\mathbf{j} \\end{aligned}",
        "Calculate the magnitude of the acceleration vector $\\mathbf{a}_1$:<br><br>\\begin{aligned} |\\mathbf{a}_1| &= \\sqrt{ (2)^2 + (-4)^2 } \\cr &= \\sqrt{ 4 + 16 } \\cr &= \\sqrt{ 20 } \\cr &= 2\\sqrt{ 5 }\\text{ m s}^{ -2 } \\end{aligned}",
        "<strong>(b) Find the value of $T$:</strong><br>First, find the velocity vector of the particle as it leaves point $A$ (at $t = 3\\text{ s }$) using the equation $\\mathbf{v} = \\mathbf{u} + \\mathbf{a}t$:<br><br>\\begin{aligned} \\mathbf{v}_A &= (\\mathbf{i} - 3\\mathbf{j}) + (2\\mathbf{i} - 4\\mathbf{j})(3) \\cr &= 7\\mathbf{i} - 15\\mathbf{j} \\end{aligned}",
        "Let the new constant acceleration be $\\mathbf{a}_2 = 3\\mathbf{i} + 5\\mathbf{j}$. The velocity vector at any total time $T > 3$ is given by:<br><br>\\begin{aligned} \\mathbf{v}(T) &= \\mathbf{v}_A + \\mathbf{a}_2(T - 3) \\cr &= (7\\mathbf{i} - 15\\mathbf{j}) + (T - 3)(3\\mathbf{i} + 5\\mathbf{j}) \\cr &= \\left[ 7 + 3(T - 3) \\right]\\mathbf{i} + \\left[ -15 + 5(T - 3) \\right]\\mathbf{j} \\cr &= (3T - 2)\\mathbf{i} + (5T - 30)\\mathbf{j} \\end{aligned}",
        "Since the particle is moving in a direction due south-east at $t = T$, its velocity vector must have equal magnitude but opposite signs for its horizontal and vertical components, with horizontal being positive ($v_x = -v_y > 0$):<br><br>\\begin{aligned} 3T - 2 &= -(5T - 30) \\cr 3T - 2 &= -5T + 30 \\cr 8T &= 32 \\cr T &= 4\\text{ seconds } \\end{aligned}<br><br>Check that the conditions are met at $T = 4$: $v_x = 3(4) - 2 = 10 > 0$, and $v_y = 5(4) - 30 = -10 < 0$. Thus, $T = 4\\text{ s }$ is correct."
    ],
    "pi_options": [
        {
            "ans": "(a) $|\\mathbf{a}_1| = 2\\sqrt{ 5 }\\text{ m s}^{-2}$, (b) $T = 7\\text{ s}$",
            "feedback": "This is an error where the total time is mistakenly calculated by adding the initial $3\\text{ s}$ phase to the total time $T = 4\\text{ s}$ solved from the equation. Since the variable $T$ in the equation $(3T - 2)$ already represents the total time from the origin, $T = 4\\text{ s}$ is the final total time."
        },
        {
            "ans": "(a) $|\\mathbf{a}_1| = 2\\sqrt{ 5 }\\text{ m s}^{-2}$, (b) $T = 5.2\\text{ s}$",
            "feedback": "This occurs if you use a direction of north-east ($v_x = v_y$) instead of south-east ($v_x = -v_y$) to set up your components equation. Always identify the correct quadrant for the target bearing."
        },
        {
            "ans": "(a) $|\\mathbf{a}_1| = 2\\sqrt{ 5 }\\text{ m s}^{-2}$, (b) $T = 3.5\\text{ s}$",
            "feedback": "This represents a calculation error, such as a decimal or subtraction slip when setting up or solving $8T = 32$. Ensure you expand and group terms carefully."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: South-East Vector Constraints",
        "content": "Due south-east represents a direction of $135^\\circ$ from North. In vector terms, this means the velocity vector points to the right and downwards, requiring the $\\mathbf{i}$ component to be positive and the $\\mathbf{j}$ component to be negative, with equal magnitudes ($v_x = -v_y > 0$)."
    }
},
{
    "id": "012073",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Constant acceleration",
    "subtopic": [
        "2D motion with vectors",
        "Kinematics equations (SUVAT)"
    ],
    "img": false,
    "question": "In this question, $\\mathbf{i}$ and $\\mathbf{j}$ are horizontal unit vectors due east and due north respectively, and position vectors are given relative to a fixed origin $O$.<br><br>A particle $P$ moves with constant acceleration $(2\\mathbf{i} + 3\\mathbf{j})\\text{ m s}^{ -2 }$. At time $t = 0$, $P$ is moving with velocity $(-10\\mathbf{i} - 8\\mathbf{j})\\text{ m s}^{ -1 }$.<br><br><strong>(a)</strong> Find the position vector of $P$ at the instant $t = 4\\text{ s }$.<br><br><strong>(b)</strong> Find the time, $T$ seconds, when $P$ is moving due north.",
    "steps": [
        "<strong>(a) Find the position vector of $P$ at $t = 4\\text{ s }$:</strong><br>Using the constant acceleration vector displacement equation $\\mathbf{s} = \\mathbf{u}t + \\dfrac{ 1 }{ 2 }\\mathbf{a}t^2$ where $\\mathbf{u} = -10\\mathbf{i} - 8\\mathbf{j}$, $\\mathbf{a} = 2\\mathbf{i} + 3\\mathbf{j}$, and $t = 4\\text{ s }$:<br><br>\\begin{aligned} \\mathbf{s} &= (-10\\mathbf{i} - 8\\mathbf{j})(4) + \\dfrac{ 1 }{ 2 }(2\\mathbf{i} + 3\\mathbf{j})(4)^2 \\cr &= (-40\\mathbf{i} - 32\\mathbf{j}) + 8(2\\mathbf{i} + 3\\mathbf{j}) \\cr &= -40\\mathbf{i} - 32\\mathbf{j} + 16\\mathbf{i} + 24\\mathbf{j} \\cr &= -24\\mathbf{i} - 8\\mathbf{j} \\end{aligned}<br><br>The position vector at $t = 4\\text{ s }$ is $(-24\\mathbf{i} - 8\\mathbf{j})\\text{ m }$.",
        "<strong>(b) Find the time $T$ when $P$ is moving due north:</strong><br>Write an expression for the velocity vector of the particle at any time $t$ using the equation $\\mathbf{v} = \\mathbf{u} + \\mathbf{a}t$:<br><br>\\begin{aligned} \\mathbf{v} &= (-10\\mathbf{i} - 8\\mathbf{j}) + t(2\\mathbf{i} + 3\\mathbf{j}) \\cr &= (-10 + 2t)\\mathbf{i} + (-8 + 3t)\\mathbf{j} \\end{aligned}",
        "Moving due north means the velocity is purely vertical in the positive direction, which mathematically requires the horizontal ($\\mathbf{i}$) component of velocity to be zero, and the vertical ($\\mathbf{j}$) component to be positive ($v_x = 0$ and $v_y > 0$):<br><br>\\begin{aligned} -10 + 2T &= 0 \\cr 2T &= 10 \\cr T &= 5\\text{ seconds } \\end{aligned}",
        "Verify that the vertical velocity component is positive at $T = 5$:<br><br>\\begin{aligned} v_y &= -8 + 3(5) \\cr &= 7\\text{ m s}^{ -1 } \\end{aligned}<br><br>Since $7 > 0$, the particle is indeed moving due north at $T = 5\\text{ s }$."
    ],
    "pi_options": [
        {
            "ans": "(a) $-24\\mathbf{i} - 8\\mathbf{j}$, (b) $T = 2.67\\text{ s}$",
            "feedback": "This time $T \\approx 2.67\\text{ s}$ is obtained if you set the vertical component of velocity to zero ($v_y = 0 \\implies -8 + 3T = 0 \\implies T \\approx 2.67$). Setting $v_y = 0$ corresponds to moving due east or due west, not due north."
        },
        {
            "ans": "(a) $-40\\mathbf{i} - 32\\mathbf{j}$, (b) $T = 5\\text{ s}$",
            "feedback": "This position vector is only the linear component of motion $\\mathbf{u}t$ (omitting the acceleration term $\\dfrac{ 1 }{ 2 }\\mathbf{a}t^2$). Remember to integrate acceleration to find the full displacement."
        },
        {
            "ans": "(a) $-24\\mathbf{i} - 8\\mathbf{j}$, (b) $T = 10\\text{ s}$",
            "feedback": "This occurs if you make a calculation slip when solving $-10 + 2T = 0$, such as multiplying by $2$ instead of dividing. Ensure your algebra is robust: $2T = 10 \\implies T = 5$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Directional Kinematics",
        "content": "For directional motion, look at the bearings: 'due North' means $v_x = 0$ and $v_y > 0$; 'due East' means $v_y = 0$ and $v_x > 0$. Always check that the non-zero component is positive to avoid accidentally solving for due South or due West."
    }
},
{
    "id": "012074",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Constant acceleration",
    "subtopic": [
        "2D motion with vectors",
        "Bearings in kinematics"
    ],
    "img": false,
    "question": "In this question, $\\mathbf{i}$ and $\\mathbf{j}$ are horizontal unit vectors due east and due north respectively, and position vectors are given relative to a fixed origin $O$.<br><br>A particle $P$ moves with constant acceleration $(\\mathbf{i} - 2\\mathbf{j})\\text{ m s}^{ -2 }$. At time $t = 0$, $P$ is at the point with position vector $(4\\mathbf{i} + 10\\mathbf{j})\\text{ m }$ and is moving with velocity $(2\\mathbf{i} + \\mathbf{j})\\text{ m s}^{ -1 }$.<br><br><strong>(a)</strong> Find the position vector of $P$ at the instant $t = 3\\text{ s }$.<br><br><strong>(b)</strong> Find the bearing on which the particle is moving at the instant $t = 4\\text{ s }$, giving your answer to the nearest degree.",
    "steps": [
        "<strong>(a) Find the position vector of $P$ at $t = 3\\text{ s }$:</strong><br>Using the constant acceleration position vector equation $\\mathbf{r} = \\mathbf{r}_0 + \\mathbf{u}t + \\dfrac{ 1 }{ 2 }\\mathbf{a}t^2$ where $\\mathbf{r}_0 = 4\\mathbf{i} + 10\\mathbf{j}$, $\\mathbf{u} = 2\\mathbf{i} + \\mathbf{j}$, $\\mathbf{a} = \\mathbf{i} - 2\\mathbf{j}$, and $t = 3\\text{ s }$:<br><br>\\begin{aligned} \\mathbf{r} &= (4\\mathbf{i} + 10\\mathbf{j}) + (2\\mathbf{i} + \\mathbf{j})(3) + \\dfrac{ 1 }{ 2 }(\\mathbf{i} - 2\\mathbf{j})(3)^2 \\cr &= 4\\mathbf{i} + 10\\mathbf{j} + 6\\mathbf{i} + 3\\mathbf{j} + 4.5(\\mathbf{i} - 2\\mathbf{j}) \\cr &= 10\\mathbf{i} + 13\\mathbf{j} + 4.5\\mathbf{i} - 9\\mathbf{j} \\cr &= 14.5\\mathbf{i} + 4\\mathbf{j} \\end{aligned}<br><br>The position vector is $(14.5\\mathbf{i} + 4\\mathbf{j})\\text{ m }$." ,
        "<strong>(b) Find the bearing at $t = 4\\text{ s }$:</strong><br>First, find the velocity vector of the particle at $t = 4\\text{ s }$ using the equation $\\mathbf{v} = \\mathbf{u} + \\mathbf{a}t$:<br><br>\\begin{aligned} \\mathbf{v} &= (2\\mathbf{i} + \\mathbf{j}) + 4(\\mathbf{i} - 2\\mathbf{j}) \\cr &= 6\\mathbf{i} - 7\\mathbf{j} \\end{aligned}" ,
        "The velocity vector $6\\mathbf{i} - 7\\mathbf{j}$ has a positive horizontal component (East) and a negative vertical component (South). This means the particle is moving in the south-east quadrant. Sketch the vector to visualise the angle with the South axis:<br><br>\\begin{aligned} \\tan \\phi &= \\dfrac{ \\text{ East component } }{ \\text{ South component } } \\cr \\tan \\phi &= \\dfrac{ 6 }{ 7 } \\cr \\phi &\\approx 40.6^{\\circ} \\end{aligned}" ,
        "A bearing is measured clockwise from North ($0^{\\circ}$). Since the particle is moving at an angle of $40.6^{\\circ}$ East of South, calculate the bearing by subtracting this angle from the South line ($180^{\\circ}$):<br><br>\\begin{aligned} \\text{ Bearing } &= 180^{\\circ} - 40.6^{\\circ} \\cr &= 139.4^{\\circ} \\end{aligned}<br><br>To the nearest degree, the bearing on which the particle is moving is $139^{\\circ}$."
    ],
    "pi_options": [
        {
            "ans": "(a) $14.5\\mathbf{i} + 4\\mathbf{j}$, (b) $141^{\\circ}$",
            "feedback": "This bearing is incorrect due to a rounding error or slip. The angle East of South is exactly $\\arctan(6/7) \\approx 40.6^{\\circ}$, so the bearing is $180 - 40.6 = 139.4^{\\circ}$, which rounds down to $139^{\\circ}$."
        },
        {
            "ans": "(a) $10\\mathbf{i} + 13\\mathbf{j}$, (b) $139^{\\circ}$",
            "feedback": "This position vector is obtained if you neglect the acceleration term $\\dfrac{ 1 }{ 2 }\\mathbf{a}t^2$ in the position formula. Make sure to include all components of the SUVAT position vector."
        },
        {
            "ans": "(a) $14.5\\mathbf{i} + 4\\mathbf{j}$, (b) $311^{\\circ}$",
            "feedback": "This bearing is in the north-west quadrant. It occurs if you misidentify the components of the velocity vector $6\\mathbf{i} - 7\\mathbf{j}$ as being West and North instead of East and South. Sketch your vector to confirm the quadrant."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Sketching Bearings First",
        "content": "Always sketch the velocity vector first before calculating any angle. A velocity of $6\\mathbf{i} - 7\\mathbf{j}$ has an East component of $6$ and a South component of $7$ (putting it in the 4th quadrant). This immediately tells you the bearing must lie between $90^{\\circ}$ and $180^{\\circ}$."
    }
},
{
    "id": "012075",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Constant acceleration",
    "subtopic": [
        "Collisions in 2D",
        "2D motion with vectors",
        "Distance between particles"
    ],
    "img": false,
    "question": "In this question, $\\mathbf{i}$ and $\\mathbf{j}$ are horizontal unit vectors due east and due north respectively, and position vectors are given relative to a fixed origin $O$.<br><br>Two particles, $P$ and $Q$, move with constant acceleration:<br>• At $t = 0$, $P$ is at the point with position vector $(2\\mathbf{i} + 5\\mathbf{j})\\text{ m }$, moving with velocity $(4\\mathbf{i} - \\mathbf{j})\\text{ m s}^{ -1 }$, under a constant acceleration of $(\\mathbf{i} + 2\\mathbf{j})\\text{ m s}^{ -2 }$.<br>• At $t = 0$, $Q$ starts from the origin $O$, moving with velocity $(6\\mathbf{i} + 3\\mathbf{j})\\text{ m s}^{ -1 }$, under a constant acceleration of $(2\\mathbf{i} + \\mathbf{j})\\text{ m s}^{ -2 }$.<br><br><strong>(a)</strong> Find the position vector of $P$ and the position vector of $Q$ at time $t$ seconds.<br><br><strong>(b)</strong> Find the exact distance between $P$ and $Q$ at the instant $t = 2\\text{ s }$.",
    "steps": [
        "<strong>(a) Find the position vector of each particle:</strong><br>Using the constant acceleration position vector equation $\\mathbf{r} = \\mathbf{r}_0 + \\mathbf{u}t + \\dfrac{ 1 }{ 2 }\\mathbf{a}t^2$ for both particles:<br>• For particle $P$:<br><br>\\begin{aligned} \\mathbf{r}_P &= (2\\mathbf{i} + 5\\mathbf{j}) + t(4\\mathbf{i} - \\mathbf{j}) + \\dfrac{ 1 }{ 2 }t^2(\\mathbf{i} + 2\\mathbf{j}) \\cr &= (2 + 4t + 0.5t^2)\\mathbf{i} + (5 - t + t^2)\\mathbf{j} \\end{aligned}" ,
        "• For particle $Q$:<br><br>\\begin{aligned} \\mathbf{r}_Q &= \\mathbf{0} + t(6\\mathbf{i} + 3\\mathbf{j}) + \\dfrac{ 1 }{ 2 }t^2(2\\mathbf{i} + \\mathbf{j}) \\cr &= (6t + t^2)\\mathbf{i} + (3t + 0.5t^2)\\mathbf{j} \\end{aligned}" ,
        "<strong>(b) Find the distance between them at $t = 2\\text{ s }$:</strong><br>Evaluate the position of each particle at $t = 2$:<br>• Position of $P$ at $t = 2$:<br><br>\\begin{aligned} \\mathbf{r}_P(2) &= (2 + 4(2) + 0.5(2)^2)\\mathbf{i} + (5 - (2) + (2)^2)\\mathbf{j} \\cr &= (2 + 8 + 2)\\mathbf{i} + (5 - 2 + 4)\\mathbf{j} \\cr &= 12\\mathbf{i} + 7\\mathbf{j} \\end{aligned}" ,
        "• Position of $Q$ at $t = 2$:<br><br>\\begin{aligned} \\mathbf{r}_Q(2) &= (6(2) + (2)^2)\\mathbf{i} + (3(2) + 0.5(2)^2)\\mathbf{j} \\cr &= (12 + 4)\\mathbf{i} + (6 + 2)\\mathbf{j} \\cr &= 16\\mathbf{i} + 8\\mathbf{j} \\end{aligned}" ,
        "Find the separation displacement vector $\\vec{ PQ }$ from $P$ to $Q$ at $t = 2\\text{ s }$ by subtracting $\\mathbf{r}_P$ from $\\mathbf{r}_Q$:<br><br>\\begin{aligned} \\vec{ PQ } &= \\mathbf{r}_Q(2) - \\mathbf{r}_P(2) \\cr &= (16\\mathbf{i} + 8\\mathbf{j}) - (12\\mathbf{i} + 7\\mathbf{j}) \\cr &= 4\\mathbf{i} + \\mathbf{j} \\end{aligned}" ,
        "Calculate the exact distance, which is the magnitude of the separation vector $\\vec{ PQ }$:<br><br>\\begin{aligned} |\\vec{ PQ }| &= \\sqrt{ (4)^2 + (1)^2 } \\cr &= \\sqrt{ 16 + 1 } \\cr &= \\sqrt{ 17 }\\text{ m } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "(a) $\\mathbf{r}_P$, $\\mathbf{r}_Q$, (b) $\\sqrt{ 26 }\\text{ m }$",
            "feedback": "This distance $\\sqrt{26}\\text{ m}$ is obtained if you make a component subtraction error when calculating the separation vector, such as evaluating the difference as $5\\mathbf{i} + \\mathbf{j}$ or similar."
        },
        {
            "ans": "(a) $\\mathbf{r}_P$, $\\mathbf{r}_Q$, (b) $5\\text{ m }$",
            "feedback": "This represents a calculation error where the component differences are simply added ($4 + 1 = 5$) instead of applying Pythagoras' theorem to find the true magnitude."
        },
        {
            "ans": "(a) $\\mathbf{r}_P$, $\\mathbf{r}_Q$, (b) $\\sqrt{ 15 }\\text{ m }$",
            "feedback": "This is a subtraction error under the square root, such as computing $16 - 1 = 15$ instead of $16 + 1 = 17$. Always write out the sum of the squared components carefully."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Absolute Separation",
        "content": "To find the distance between any two particles in 2D space, first find their individual position vectors at the specified time, subtract one from the other to get the relative displacement vector, and then apply Pythagoras' theorem to find the absolute separation distance."
    }
},
{
    "id": "012076",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Moments",
    "topic": "Non-coaxial forces and Moments",
    "subtopic": [
        "Equilibrium of rigid bodies",
        "Moments about a hinge"
    ],
    "img": false,
    "question": "<img src='images/Mechanics_pngs/012076.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br>A uniform horizontal beam $AB$, of mass $M$ and length $3a$, rests with its end $A$ against a rough vertical wall. The beam is held in a horizontal position by a rope. One end of the rope is attached to the beam at $B$ and the other end is attached to the wall at the point $C$, which is vertically above $A$. A small block of mass $2M$ is placed on the beam at the point $P$, where $AP = x$. The beam is in equilibrium in a vertical plane which is perpendicular to the wall. The angle between the rope and the beam is $\\alpha$, where $\\tan\\alpha = \\dfrac{ 5 }{ 12 }$.<br><br>The beam is modelled as a uniform rod, the block as a particle, and the rope as a light inextensible string.<br><br><strong>(a)</strong> Show that the tension, $T$, in the rope is given by:<br>$$T = \\dfrac{ 13Mg(4x + 3a) }{ 30a }$$<br>The magnitude of the horizontal component of the force exerted on the beam at $A$ by the wall is $2.4Mg$.<br><br><strong>(b)</strong> Find $x$ in terms of $a$.<br><br>The force exerted on the beam at $A$ by the wall acts in a direction which makes an angle $\\beta$ with the horizontal.<br><br><strong>(c)</strong> Find the value of $\\tan\\beta$.<br><br>The rope will break if the tension in it exceeds $4Mg$.<br><br><strong>(d)</strong> Find the range of possible positions of $P$ such that the rope does not break, justifying your answer carefully.",
    "steps": [
        "To show the formula for the tension $T$, we take moments about the hinge at $A$.<br><br>The weight of the beam is $Mg$, acting vertically downwards at its centre of mass (the midpoint of $AB$), which is at a distance of $1.5a$ from $A$.<br>The weight of the block is $2Mg$, acting vertically downwards at $P$, which is at a distance of $x$ from $A$.<br>The tension $T$ acts at $B$ (at distance $3a$ from $A$) at an angle $\\alpha$ above the beam. The perpendicular component of the tension is $T\\sin\\alpha$.<br><br>Equating the clockwise and counterclockwise moments about $A$:<br>\\begin{aligned} (Mg \\times 1.5a) + (2Mg \\times x) &= T\\sin\\alpha \\times 3a \\cr 1.5Mga + 2Mgx &= 3aT\\sin\\alpha \\end{aligned}<br><br>Since $\\tan\\alpha = \\dfrac{ 5 }{ 12 }$, we can use a 5-12-13 right-angled triangle to find:<br>$$\\sin\\alpha = \\dfrac{ 5 }{ 13 } \\quad \\text{and} \\quad \\cos\\alpha = \\dfrac{ 12 }{ 13 }$$<br><br>Substituting $\\sin\\alpha$ into the moments equation:<br>\\begin{aligned} \\dfrac{ Mg(3a + 4x) }{ 2 } &= 3aT\\left( \\dfrac{ 5 }{ 13 } \\right) \\cr \\dfrac{ Mg(3a + 4x) }{ 2 } &= \\dfrac{ 15a }{ 13 }T \\cr T &= \\dfrac{ 13 }{ 15a } \\times \\dfrac{ Mg(3a + 4x) }{ 2 } \\cr T &= \\dfrac{ 13Mg(4x + 3a) }{ 30a } \\end{aligned}",
        "To find the value of $x$ in terms of $a$, we resolve forces horizontally.<br><br>Let $H_A$ be the horizontal component of the reaction force exerted on the beam by the wall at $A$.<br>The only horizontal forces acting on the beam are $H_A$ and the horizontal component of the tension, $T\\cos\\alpha$.<br><br>For horizontal equilibrium:<br>\\begin{aligned} H_A &= T\\cos\\alpha \\end{aligned}<br><br>Substituting the given horizontal component $H_A = 2.4Mg$, the tension $T$ from part (a), and $\\cos\\alpha = \\dfrac{ 12 }{ 13 }$:<br>\\begin{aligned} 2.4Mg &= \\dfrac{ 13Mg(4x + 3a) }{ 30a } \\times \\dfrac{ 12 }{ 13 } \\cr 2.4Mg &= \\dfrac{ 12Mg(4x + 3a) }{ 30a } \\cr 2.4 &= \\dfrac{ 2(4x + 3a) }{ 5a } \\cr 12a &= 8x + 6a \\cr 8x &= 6a \\cr x &= \\dfrac{ 3 }{ 4 }a \\end{aligned}",
        "To find $\\tan\\beta$, we resolve forces vertically.<br><br>Let $V_A$ be the vertical component of the reaction force exerted on the beam by the wall at $A$.<br>The vertical forces acting on the beam are $V_A$ (upwards), the vertical component of the tension $T\\sin\\alpha$ (upwards), and the weights $Mg$ and $2Mg$ (downwards).<br><br>For vertical equilibrium:<br>\\begin{aligned} V_A + T\\sin\\alpha &= Mg + 2Mg \\cr V_A + T\\sin\\alpha &= 3Mg \\end{aligned}<br><br>First, we calculate the tension $T$ when $x = \\dfrac{ 3 }{ 4 }a$:<br>\\begin{aligned} T &= \\dfrac{ 13Mg\\left( 4\\left( \\frac{ 3 }{ 4 }a \\right) + 3a \\right) }{ 30a } \\cr T &= \\dfrac{ 13Mg(6a) }{ 30a } \\cr T &= 2.6Mg \\end{aligned}<br><br>Now, substitute $T$ into the vertical equilibrium equation:<br>\\begin{aligned} V_A + 2.6Mg\\left( \\dfrac{ 5 }{ 13 } \\right) &= 3Mg \\cr V_A + 1.0Mg &= 3Mg \\cr V_A &= 2Mg \\end{aligned}<br><br>The resultant force at $A$ makes an angle $\\beta$ with the horizontal, so:<br>\\begin{aligned} \\tan\\beta &= \\dfrac{ V_A }{ H_A } \\cr \\tan\\beta &= \\dfrac{ 2Mg }{ 2.4Mg } \\cr \\tan\\beta &= \\dfrac{ 5 }{ 6 } \\end{aligned}",
        "To find the range of possible positions of $P$, we set up an inequality for the breaking tension limit.<br><br>The rope will break if $T > 4Mg$. For the rope to remain intact, we must have $T \\le 4Mg$.<br><br>Using the tension expression from part (a):<br>\\begin{aligned} \\dfrac{ 13Mg(4x + 3a) }{ 30a } &\\le 4Mg \\cr 13(4x + 3a) &\\le 120a \\cr 52x + 39a &\\le 120a \\cr 52x &\\le 81a \\cr x &\\le \\dfrac{ 81 }{ 52 }a \\end{aligned}<br><br>Since the block $P$ must be placed on the beam $AB$ of length $3a$, the distance $x$ must be non-negative.<br>Therefore, the range of possible positions of $P$ is:<br>$$0 \\le x \\le \\dfrac{ 81 }{ 52 }a$$"
    ],
    "pi_options": [
        {
            "ans": "$$\\tan\\beta = \\dfrac{ 12 }{ 13 }, \\quad 0 \\le x \\le \\dfrac{ 33 }{ 20 }a$$",
            "feedback": "This error occurs if you use an incorrect horizontal force $H_A = T$ instead of $T\\cos\\alpha$, or if you make an algebraic mistake in the inequality for the maximum tension limit."
        },
        {
            "ans": "$$\\tan\\beta = \\dfrac{ 3 }{ 4 }, \\quad 0 \\le x \\le \\dfrac{ 15 }{ 13 }a$$",
            "feedback": "This slip arises from using $\\tan\\alpha$ instead of $\\sin\\alpha$ in the moments equation, which corrupts the expression for tension and all subsequent values of the reaction components."
        },
        {
            "ans": "$$\\tan\\beta = \\dfrac{ 6 }{ 5 }, \\quad 0 \\le x \\le \\dfrac{ 27 }{ 13 }a$$",
            "feedback": "This error is caused by inverting the expression for $\\tan\\beta$ as $\\dfrac{H_A}{V_A}$ instead of $\\dfrac{V_A}{H_A}$, and making a sign error while expanding the bracket in the inequality."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Don't Confuse Horizontal & Vertical Reactions",
        "content": "When resolving forces at a rough vertical wall hinge $A$, never assume the vertical reaction $V_A$ is equal to the total weight of the system. The tension in the rope has a significant vertical component ($T \\sin\\alpha$) that helps support the weight, meaning $V_A$ is always less than $(Mg + 2Mg)$. Always write a separate vertical equilibrium equation ($V_A + T \\sin\\alpha = 3Mg$) to avoid dropping these marks."
    }
},
{
    "id": "012077",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Moments",
    "topic": "Non-coaxial forces and Moments",
    "subtopic": [
        "Equilibrium of rigid bodies",
        "Moments about a hinge"
    ],
    "img": false,
    "question": "<img src='images/Mechanics_pngs/012077.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br>A uniform beam $AB$, of mass $M$ and length $2a$, is smoothly hinged at $A$ to a vertical wall. The beam is held inclined at an angle $\\theta$ above the horizontal by a horizontal light rope. One end of the rope is attached to the beam at $B$ and the other end is attached to the wall at a point $C$ vertically above $A$. A block of mass $kM$ is placed on the beam at a point $P$, where $AP = x$. The beam is in equilibrium in a vertical plane.<br><br>The beam is modelled as a uniform rod, the block as a particle, and the rope as a light inextensible string.<br><br><strong>(a)</strong> Show that the tension, $T$, in the rope is given by:<br>$$T = \\dfrac{ Mg\\cot\\theta(a + kx) }{ 2 a }$$<br>For the remaining parts of this question, let $k = 3$ and $\\theta = 45^{\\circ}$.<br><br><strong>(b)</strong> Given that the rope can withstand a maximum tension of $3Mg$, find the maximum possible value of $x$ in terms of $a$.<br><br><strong>(c)</strong> For $x = a$, find the horizontal and vertical components of the reaction force exerted on the beam by the hinge at $A$, in terms of $M$ and $g$.<br><br><strong>(d)</strong> Hence, find the angle the resultant reaction force at $A$ makes with the horizontal, giving your answer to the nearest $0.1^{\\circ}$.",
    "steps": [
        "To derive the formula for the tension $T$, we take moments about the hinge at $A$.<br><br>The weight of the beam is $Mg$, acting vertically downwards at its midpoint, which is at a distance of $a$ along the beam. The perpendicular distance from this force to the pivot $A$ is $a\\cos\\theta$.<br>The weight of the block is $kMg$, acting vertically downwards at $P$ at a distance of $x$ along the beam. The perpendicular distance from this force to $A$ is $x\\cos\\theta$.<br>The rope is horizontal and attached at $B$. The vertical height of $B$ above $A$ is $2a\\sin\\theta$, which is the perpendicular distance from the line of action of the tension to $A$.<br><br>Equating the clockwise and counterclockwise moments about $A$:<br>\\begin{aligned} T \\times 2a\\sin\\theta &= (Mg \\times a\\cos\\theta) + (kMg \\times x\\cos\\theta) \\cr 2aT\\sin\\theta &= Mg\\cos\\theta(a + kx) \\cr T &= \\dfrac{ Mg\\cos\\theta(a + kx) }{ 2a\\sin\\theta } \\cr T &= \\dfrac{ Mg\\cot\\theta(a + kx) }{ 2a } \\end{aligned}",
        "We are given $k = 3$ and $\\theta = 45^{\\circ}$. Since $\\cot 45^{\\circ} = 1$, the tension formula simplifies to:<br>\\begin{aligned} T &= \\dfrac{ Mg(a + 3x) }{ 2a } \\end{aligned}<br><br>Given that the rope can withstand a maximum tension of $3Mg$, we set up the inequality:<br>\\begin{aligned} \\dfrac{ Mg(a + 3x) }{ 2a } &\\le 3Mg \\cr a + 3x &\\le 6a \\cr 3x &\\le 5a \\cr x &\\le \\dfrac{ 5 }{ 3 }a \\end{aligned}<br><br>Thus, the maximum possible value of $x$ is $\\dfrac{ 5 }{ 3 }a$.",
        "We are asked to find the components of the reaction force at $A$ when $x = a$.<br><br>First, calculate the tension $T$ when $x = a$:<br>\\begin{aligned} T &= \\dfrac{ Mg(a + 3(a)) }{ 2a } = \\dfrac{ 4aMg }{ 2a } = 2Mg \\end{aligned}<br><br>Let $H_A$ and $V_A$ be the horizontal and vertical components of the hinge reaction force at $A$.<br>Since the rope is horizontal, the only horizontal forces are $H_A$ and the tension $T$. Therefore:<br>\\begin{aligned} H_A &= T = 2Mg \\end{aligned}<br><br>The only vertical forces are $V_A$ and the weights $Mg$ and $3Mg$. Therefore:<br>\\begin{aligned} V_A &= Mg + 3Mg = 4Mg \\end{aligned}",
        "To find the angle $\\phi$ that the resultant reaction force makes with the horizontal, we use the components calculated in part (c):<br>\\begin{aligned} \\tan\\phi &= \\dfrac{ V_A }{ H_A } \\cr \\tan\\phi &= \\dfrac{ 4Mg }{ 2Mg } = 2 \\cr \\phi &= \\arctan(2) \\\\approx 63.43^{\\circ} \\end{aligned}<br><br>To the nearest $0.1^{\\circ}$, the angle the resultant reaction force makes with the horizontal is $63.4^{\\circ}$."
    ],
    "pi_options": [
        {
            "ans": "$$\\phi = 26.6^{\\circ}, \\quad x_{\\text{max}} = \\dfrac{ 4 }{ 3 }a$$",
            "feedback": "This error occurs if you invert the definition of the reaction angle, calculating $\\tan\\phi = \\dfrac{H_A}{V_A}$ instead of $\\dfrac{V_A}{H_A}$, and make an arithmetic slip in the tension inequality."
        },
        {
            "ans": "$$\\phi = 45.0^{\\circ}, \\quad x_{\\text{max}} = \\dfrac{ 3 }{ 2 }a$$",
            "feedback": "This error is made if you assume the horizontal and vertical components of the reaction force at the hinge must be equal, or if you neglect the weight of the block in the forces resolution."
        },
        {
            "ans": "$$\\phi = 71.6^{\\circ}, \\quad x_{\\text{max}} = 2a$$",
            "feedback": "This mistake arises if you assume the maximum distance is equal to the length of the beam ($2a$) without checking the tension limit, or if you calculate the tension incorrectly."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Look Out for Trig Simplifications",
        "content": "When dealing with inclined rods, always check the orientation of your tension force. In this question, because the rope is horizontal, its perpendicular distance to the hinge $A$ is simply $2a\\sin\\theta$. Do not accidentally use the distance along the rod ($2a$) as the perpendicular distance. Spotting this right away prevents messy calculations!"
    }
},
{
    "id": "012078",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Moments",
    "topic": "Non-coaxial forces and Moments",
    "subtopic": [
        "Equilibrium of rigid bodies",
        "Moments about a hinge"
    ],
    "img": false,
    "question": "<img src='images/Mechanics_pngs/012078.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br>A uniform horizontal beam $AB$, of mass $10\\text{ kg}$ and length $4\\text{ m}$, is smoothly hinged to a vertical wall at $A$. The beam is supported in a horizontal position by a light cable. One end of the cable is attached to the beam at a point $C$, where $AC = 3\\text{ m}$, and the other end is attached to the wall at a point $D$ vertically above $A$, where $AD = 4\\text{ m}$. A sign of mass $M\\text{ kg}$ is suspended from the end $B$ of the beam. The beam is in equilibrium in a vertical plane perpendicular to the wall.<br><br>The beam is modelled as a uniform rod, the cable as a light inextensible string, and the sign as a particle.<br><br><strong>(a)</strong> Show that the tension, $T$, in the cable is given by:<br>$$T = \\dfrac{ 5 }{ 3 }(M + 5)g$$<br><strong>(b)</strong> Find, in terms of $M$ and $g$, the horizontal and vertical components of the reaction force exerted on the beam by the hinge at $A$.<br><br><strong>(c)</strong> Given that the vertical component of the hinge reaction is zero, find the value of $M$.<br><br><strong>(d)</strong> The hinge at $A$ can withstand a maximum horizontal force of $250\\text{ N}$. Taking $g = 9.8\\text{ m s}^{-2}$, find the maximum allowable mass of the sign to the nearest $0.1\\text{ kg}$.",
    "steps": [
        "To find the tension $T$, we must first determine the geometric angle of the cable.<br><br>The lengths $AC = 3\\text{ m}$ (horizontal) and $AD = 4\\text{ m}$ (vertical) form a right-angled triangle. The hypotenuse $CD$ is:<br>$$CD = \\sqrt{ 3^2 + 4^2 } = 5\\text{ m}$$<br>Let $\\alpha$ be the angle that the cable $CD$ makes with the horizontal beam $AB$. From the triangle, we have:<br>$$\\sin\\alpha = \\dfrac{ 4 }{ 5 } \\quad \\text{and} \\quad \\cos\\alpha = \\dfrac{ 3 }{ 5 }$$<br>The weight of the beam is $10g$ acting at its midpoint ($2\\text{ m}$ from $A$). The weight of the sign is $Mg$ acting at $B$ ($4\\text{ m}$ from $A$).<br><br>Taking moments about $A$:<br>\\begin{aligned} (10g \\times 2) + (Mg \\times 4) &= T\\sin\\alpha \\times 3 \\cr 20g + 4Mg &= 3T\\left( \\dfrac{ 4 }{ 5 } \\right) \\cr 4g(5 + M) &= \\dfrac{ 12 }{ 5 }T \\cr T &= \\dfrac{ 5 }{ 12 } \\times 4g(5 + M) \\cr T &= \\dfrac{ 5 }{ 3 }(M + 5)g \\end{aligned}",
        "To find the reaction forces at $A$, let $H_A$ and $V_A$ be the horizontal and vertical components of the hinge force respectively.<br><br>For horizontal equilibrium, the horizontal hinge force balances the horizontal component of the tension:<br>\\begin{aligned} H_A &= T\\cos\\alpha \\cr H_A &= \\dfrac{ 5 }{ 3 }(M + 5)g \\times \\dfrac{ 3 }{ 5 } \\cr H_A &= (M + 5)g \\end{aligned}<br><br>For vertical equilibrium, the sum of the vertical forces must equal zero:<br>\\begin{aligned} V_A + T\\sin\\alpha &= 10g + Mg \\cr V_A + \\dfrac{ 5 }{ 3 }(M + 5)g\\left( \\dfrac{ 4 }{ 5 } \\right) &= (M + 10)g \\cr V_A + \\dfrac{ 4 }{ 3 }(M + 5)g &= (M + 10)g \\cr V_A &= (M + 10)g - \\left( \\dfrac{ 4 }{ 3 }M + \\dfrac{ 20 }{ 3 } \\right)g \\cr V_A &= \\left( \\dfrac{ 10 }{ 3 } - \\dfrac{ 1 }{ 3 }M \\right)g \\end{aligned}",
        "We are given that the vertical component of the hinge reaction $V_A$ is zero.<br><br>Setting $V_A = 0$:<br>\\begin{aligned} \\left( \\dfrac{ 10 }{ 3 } - \\dfrac{ 1 }{ 3 }M \\right)g &= 0 \\cr \\dfrac{ 10 }{ 3 } &= \\dfrac{ 1 }{ 3 }M \\cr M &= 10 \\end{aligned}<br><br>Thus, the mass of the sign is $10\\text{ kg}$.",
        "We are given that the hinge can withstand a maximum horizontal force $H_A \\le 250\\text{ N}$.<br><br>Using $g = 9.8\\text{ m s}^{-2}$:<br>\\begin{aligned} H_A &\\le 250 \\cr (M + 5)g &\\le 250 \\cr (M + 5)(9.8) &\\le 250 \\cr M + 5 &\\le 25.510... \\cr M &\\le 20.510... \\end{aligned}<br><br>To the nearest $0.1\\text{ kg}$, the maximum allowable mass of the sign is $20.5\\text{ kg}$."
    ],
    "pi_options": [
        {
            "ans": "$$M = 15\\text{ kg}, \\quad M_{\\text{max}} = 10.3\\text{ kg}$$",
            "feedback": "This mistake occurs if you miscalculate the vertical component of the tension as $T\\sin\\alpha = \\frac{3}{5}T$ (using $\\cos$ instead of $\\sin$), and make an error in the horizontal force equilibrium."
        },
        {
            "ans": "$$M = 5\\text{ kg}, \\quad M_{\\text{max}} = 25.5\\text{ kg}$$",
            "feedback": "This error is made if you forget to subtract $5\\text{ kg}$ from the final inequality $M+5 \\le 25.5$ for part (d), and miscount the coefficients in the vertical forces resolution."
        },
        {
            "ans": "$$M = 20\\text{ kg}, \\quad M_{\\text{max}} = 15.4\\text{ kg}$$",
            "feedback": "This arises from a sign error when expanding and solving the vertical equilibrium equation, leading to an incorrect zero vertical reaction point and subsequent limit."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Visualising Hinge Reactions",
        "content": "It is fascinating to see that for a light sign of mass $M < 10\\text{ kg}$, the hinge force at $A$ must push vertically upwards ($V_A > 0$) to support the beam. However, as the mass $M$ of the sign increases beyond $10\\text{ kg}$, the downward pull of the cable increases so much that the hinge must actually pull downwards ($V_A < 0$) to maintain equilibrium. This physical transition is why $V_A$ can be exactly zero at $M=10\\text{ kg}$."
    }
},
{
    "id": "012079",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Moments",
    "topic": "Non-coaxial forces and Moments",
    "subtopic": [
        "Equilibrium of rigid bodies",
        "Moments about a hinge"
    ],
    "img": false,
    "question": "<img src='images/Mechanics_pngs/012079.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br>A non-uniform rod $AB$, of mass $12\\text{ kg}$ and length $4\\text{ m}$, rests horizontally in equilibrium on two smooth pivots at $C$ and $D$, where $AC = 0.5\\text{ m}$ and $BD = 1.0\\text{ m}$. The centre of mass of the rod is at a distance $d$ from $A$.<br><br>The rod is modelled as a non-uniform rod and the pivots are modelled as simple supports.<br><br><strong>(a)</strong> Show that when no additional masses are placed on the rod, the reaction forces at $C$ and $D$, denoted by $R_C$ and $R_D$ respectively, are given by:<br>$$R_C = 4.8(3-d)g \\quad \\text{and} \\quad R_D = 4.8(d-0.5)g$$<br><strong>(b)</strong> When a particle of mass $8\\text{ kg}$ is placed at $A$, the rod is on the point of tilting about $C$. Find the value of $d$.<br><br><strong>(c)</strong> Using this value of $d$, find the reaction forces at $C$ and $D$ when a mass of $5\\text{ kg}$ is placed at $B$ instead of $A$, taking $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(d)</strong> Determine the range of masses that can be placed at $B$ without the rod tilting, justifying your answer carefully.",
    "steps": [
        "To find the reaction forces $R_C$ and $R_D$, we use the moments about each pivot.<br><br>The total length of the rod is $AB = 4\\text{ m}$. Since $AC = 0.5\\text{ m}$ and $BD = 1.0\\text{ m}$, the distance of $D$ from $A$ is $3.0\\text{ m}$, and the distance between the two pivots is $CD = 3.0 - 0.5 = 2.5\\text{ m}$.<br>The weight of the rod is $12g$, acting downwards at its centre of mass which is at a distance of $d$ from $A$ (thus a distance of $d - 0.5$ from $C$).<br><br>Taking moments about $C$:<br>\\begin{aligned} R_D \\times 2.5 &= 12g \\times (d - 0.5) \\cr R_D &= \\dfrac{ 12 }{ 2.5 }(d - 0.5)g \\cr R_D &= 4.8(d - 0.5)g \\end{aligned}<br><br>Since the rod is in vertical equilibrium, $R_C + R_D = 12g$:<br>\\begin{aligned} R_C &= 12g - 4.8(d - 0.5)g \\cr R_C &= 12g - 4.8dg + 2.4g \\cr R_C &= 14.4g - 4.8dg \\cr R_C &= 4.8(3 - d)g \\end{aligned}",
        "When the particle of mass $8\\text{ kg}$ is placed at $A$ and the rod is on the point of tilting about $C$, the reaction force at $D$ becomes zero ($R_D = 0$).<br><br>The $8\\text{ kg}$ mass is placed at $A$, which is $0.5\\text{ m}$ to the left of the pivot $C$. Taking moments about $C$:<br>\\begin{aligned} 8g \\times 0.5 &= 12g \\times (d - 0.5) \\cr 4g &= 12g(d - 0.5) \\cr 4 &= 12d - 6 \\cr 12d &= 10 \\cr d &= \\dfrac{ 5 }{ 6 } \\approx 0.833\\text{ m} \\end{aligned}",
        "We are asked to find the reaction forces $R_C$ and $R_D$ when a mass of $5\\text{ kg}$ is placed at $B$ (with $d = \\dfrac{ 5 }{ 6 }\\text{ m}$).<br><br>The mass at $B$ is at a distance of $4.0 - 0.5 = 3.5\\text{ m}$ to the right of $C$. Taking moments about $C$:<br>\\begin{aligned} R_D \\times 2.5 &= 12g(d - 0.5) + 5g \\times 3.5 \\cr R_D \\times 2.5 &= 12g\\left( \\dfrac{ 5 }{ 6 } - 0.5 \\right) + 17.5g \\cr R_D \\times 2.5 &= 12g\\left( \\dfrac{ 1 }{ 3 } \\right) + 17.5g \\cr R_D \\times 2.5 &= 4g + 17.5g \\cr R_D \\times 2.5 &= 21.5g \\cr R_D &= 8.6g \\end{aligned}<br><br>Using $g = 9.8\\text{ m s}^{-2}$:<br>\\begin{aligned} R_D &= 8.6 \\times 9.8 = 84.28\\text{ N} \\approx 84.3\\text{ N} \\end{aligned}<br><br>Using vertical equilibrium with the total downward force $12g + 5g = 17g$:<br>\\begin{aligned} R_C + R_D &= 17g \\cr R_C &= 17g - 8.6g = 8.4g \\cr R_C &= 8.4 \\times 9.8 = 82.32\\text{ N} \\approx 82.3\\text{ N} \\end{aligned}",
        "To find the range of masses that can be placed at $B$ without tilting, let $m$ be the mass placed at $B$.<br><br>The rod is on the point of tilting about $D$ when the reaction force at $C$ is zero ($R_C = 0$).<br>The point $B$ is at a distance of $1.0\\text{ m}$ to the right of $D$. Taking moments about $D$:<br>\\begin{aligned} 12g \\times (3.0 - d) &= mg \\times 1.0 \\cr 12\\left( 3.0 - \\dfrac{ 5 }{ 6 } \\right) &= m \\cr 12\\left( \\dfrac{ 13 }{ 6 } \\right) &= m \\cr m &= 26\\text{ kg} \\end{aligned}<br><br>Placing any mass at $B$ only increases the reaction at $D$ and decreases the reaction at $C$, so the rod cannot tilt the other way. Therefore, the range of masses is:<br>$$0 \\le m \\le 26\\text{ kg}$$"
    ],
    "pi_options": [
        {
            "ans": "$$d = 1.188\\text{ m}, \\quad 0 \\le m \\le 2.25\\text{ kg}$$",
            "feedback": "This error is identical to resolving the moment equation for tilting about $C$ incorrectly by writing $8g(0.5) = 12g(d + 0.5)$, which leads to a center of mass outside the support pivots, and miscalculating the pivot range."
        },
        {
            "ans": "$$d = 0.500\\text{ m}, \\quad 0 \\le m \\le 12\\text{ kg}$$",
            "feedback": "This mistake occurs if you assume the centre of mass is at the pivot $C$ ($d=0.5\\text{ m}$) and calculate the mass range by setting the pivot distance incorrectly."
        },
        {
            "ans": "$$d = 0.750\\text{ m}, \\quad m \\le 18\\text{ kg}$$",
            "feedback": "This error is caused by neglecting the pivot distances from the ends of the rod, using $AC = 1\\text{ m}$ and $BD = 1\\text{ m}$ in your moments instead of the actual dimensions."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Tilting Means Zero Reaction",
        "content": "Whenever a question mentions that a body is 'on the point of tilting' about a pivot, translate this immediately into a mathematical statement: the normal reaction force at any other pivot must equal zero ($R = 0$). This simple trick allows you to instantly simplify your moments equations by eliminating the other unknown reaction forces."
    }
},
{
    "id": "012080",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Moments",
    "topic": "Non-coaxial forces and Moments",
    "subtopic": [
        "Equilibrium of rigid bodies",
        "Moments about a hinge"
    ],
    "img": false,
    "question": "<img src='images/Mechanics_pngs/012080.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br>A uniform ladder $AB$, of mass $M$ and length $2L$, rests in equilibrium with its end $A$ on a rough horizontal ground and its end $B$ against a smooth vertical wall. The ladder makes an angle $\\theta$ with the horizontal ground, where $\\tan\\theta = 2$. A man of mass $3M$ climbs up the ladder.<br><br>The ladder is modelled as a uniform rod and the man is modelled as a particle.<br><br><strong>(a)</strong> Show that when the man has climbed a distance $y$ from $A$, the magnitude of the frictional force, $F$, between the ladder and the ground is given by:<br>$$F = \\dfrac{ Mg(L + 3y) }{ 4 L }$$<br>The coefficient of friction between the ladder and the ground is $\\mu = 0.4$.<br><br><strong>(b)</strong> Find the maximum distance the man can climb before the ladder slips, expressing your answer in terms of $L$.<br><br><strong>(c)</strong> Now suppose the ground is smooth and slipping is prevented by a light horizontal rope attached to the ladder at $A$ and to the base of the wall. Find the tension in this rope when the man is at the top of the ladder (i.e., $y = 2L$), in terms of $M$ and $g$.<br><br><strong>(d)</strong> Explain how the safety of the ladder would be affected if the ladder was placed at a steeper angle (i.e., $\\tan\\theta > 2$).",
    "steps": [
        "Let $R_A$ be the vertical normal reaction from the ground at $A$, and $F$ be the horizontal frictional force.<br>Let $R_B$ be the horizontal reaction from the smooth wall at $B$.<br><br>Resolving forces vertically:<br>\\begin{aligned} R_A &= Mg + 3Mg = 4Mg \\end{aligned}<br><br>Resolving forces horizontally:<br>\\begin{aligned} F &= R_B \\end{aligned}<br><br>Taking moments about $A$:<br>\\begin{aligned} (Mg \\times L\\cos\\theta) + (3Mg \\times y\\cos\\theta) &= R_B \\times 2L\\sin\\theta \\cr Mg\\cos\\theta(L + 3y) &= 2LR_B\\sin\\theta \\cr R_B &= \\dfrac{ Mg\\cos\\theta(L + 3y) }{ 2L\\sin\\theta } \\cr R_B &= \\dfrac{ Mg(L + 3y) }{ 2L\\tan\\theta } \\end{aligned}<br><br>Since $F = R_B$ and $\\tan\\theta = 2$:<br>\\begin{aligned} F &= \\dfrac{ Mg(L + 3y) }{ 4L} \\end{aligned}",
        "The ladder is on the point of slipping when $F = \\mu R_A$.<br><br>Using $R_A = 4Mg$ and $\\mu = 0.4$, we set up the friction limit inequality:<br>\\begin{aligned} F &\\le \\mu R_A \\cr \\dfrac{ Mg(L + 3y) }{ 4L } &\\le 0.4(4Mg) \\cr \\dfrac{ Mg(L + 3y) }{ 4L } &\\le 1.6Mg \\cr L + 3y &\\le 6.4L \\cr 3y &\\le 5.4L \\cr y &\\le 1.8L \\end{aligned}<br><br>Thus, the maximum distance the man can climb is $1.8L$.",
        "On smooth ground, the rope's tension $T$ replaces the frictional force $F$ to prevent slipping.<br><br>Using the tension/friction formula derived in part (a) with the man at the top of the ladder ($y = 2L$):<br>\\begin{aligned} T &= \\dfrac{ Mg(L + 3(2L)) }{ 4L } \\cr T &= \\dfrac{ 7MgL }{ 4L } \\cr T &= 1.75Mg \\end{aligned}<br><br>Thus, the tension in the rope is $1.75Mg$.",
        "From part (a), the general formula for the frictional force required to prevent slipping is:<br>\\begin{aligned} F &= \\dfrac{ Mg(L + 3y) }{ 2L\\tan\\theta } \\end{aligned}<br><br>If the ladder is placed at a steeper angle, $\\theta$ increases, which means $\\tan\\theta$ increases.<br>Since $\\tan\\theta$ is in the denominator of the expression for $F$, an increase in $\\tan\\theta$ decreases the required frictional force $F$ for any given position $y$ of the climber.<br><br>With a lower required frictional force to maintain equilibrium, the threshold $F \\le \\mu R_A$ is less likely to be exceeded, making the ladder safer and more stable."
    ],
    "pi_options": [
        {
            "ans": "$$y_{\\text{max}} = 0.2L, \\quad T = 1.75Mg$$",
            "feedback": "This error occurs if you use $\\mu = 0.05$ instead of $0.4$, or if you incorrectly resolve the vertical equilibrium reaction $R_A$ as $Mg$ instead of $4Mg$."
        },
        {
            "ans": "$$y_{\\text{max}} = 1.2L, \\quad T = 1.50Mg$$",
            "feedback": "This mistake is caused by omitting the factor of 3 in the man's weight ($3M$), treating him as having mass $M$, which leads to an incorrect moment equation and slipping distance."
        },
        {
            "ans": "$$y_{\\text{max}} = 2.0L, \\quad T = 2.00Mg$$",
            "feedback": "This assumes the man can climb to the very top of the ladder ($2.0L$) without it slipping, which violates the friction limit under the given coefficient of friction."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Why Smooth Walls Make Things Simple",
        "content": "In mechanics, leaning against a 'smooth' vertical wall means there is absolutely no vertical friction force acting at the top of the ladder. This is a massive blessing for your equations because it ensures the normal reaction from the wall ($R_B$) is purely horizontal. Always check the wording carefully: if the wall were 'rough', you would have to introduce a vertical friction force at $B$, which drastically increases the algebra!"
    }
},
{
    "id": "012081",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Projectiles",
    "subtopic": [
        "Equations of motion for projectiles",
        "Trajectory analysis"
    ],
    "img": false,
    "question": "A ball is thrown from a point $A$, which is $2\\text{ m}$ above horizontal ground. The ball is projected with speed $U\\text{ m s}^{-1}$ at an angle $\\alpha$ above the horizontal. The highest point of the trajectory of the ball is $4\\text{ m}$ above the ground.<br><br>The ball is modelled as a particle moving freely under gravity.<br><br><img src='images/Mechanics_pngs/012081.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br><strong>(a)</strong> Show that:<br>$$U^2 = \\dfrac{ 4g }{ \\sin^2\\alpha }$$<br>The ball hits a target $T$ which is at a horizontal distance of $16\\text{ m}$ from $A$ and is at a height of $0.875\\text{ m}$ above the ground, as shown in the diagram.<br><br><strong>(b)</strong> Show that $\\tan\\alpha = \\dfrac{ 9 }{ 16 }$.<br><br><strong>(c)</strong> Find the value of $U$.<br><br><strong>(d)</strong> Find the time it takes for the ball to travel from $A$ to $T$.",
    "steps": [
        "To show the formula for $U^2$, we look at the vertical motion of the ball from projection to its highest point.<br><br>The initial vertical component of velocity is $u_y = U\\sin\\alpha$.<br>The vertical displacement from $A$ to the highest point is $s_y = 4 - 2 = 2\\text{ m}$.<br>At the highest point, the vertical component of velocity is $v_y = 0$.<br><br>Using the equation of motion $v_y^2 = u_y^2 - 2gs_y$:<br>\\begin{aligned} 0 &= (U\\sin\\alpha)^2 - 2g(2) \\cr 0 &= U^2\\sin^2\\alpha - 4g \\cr U^2\\sin^2\\alpha &= 4g \\cr U^2 &= \\dfrac{ 4g }{ \\sin^2\\alpha } \\end{aligned}",
        "To show the value of $\\tan\\alpha$, we set up the equations for horizontal and vertical displacements to the target $T$.<br><br>The horizontal displacement to $T$ is $x = 16\\text{ m}$, and the vertical displacement from $A$ is $y = 0.875 - 2 = -1.125\\text{ m}$.<br><br>Using the horizontal motion equation $x = U\\cos\\alpha \\times t$:<br>\\begin{aligned} t &= \\dfrac{ 16 }{ U\\cos\\alpha } \\end{aligned}<br><br>Using the vertical motion equation $y = U\\sin\\alpha \\times t - \\dfrac{ 1 }{ 2 }gt^2$:<br>\\begin{aligned} -1.125 &= U\\sin\\alpha \\left( \\dfrac{ 16 }{ U\\cos\\alpha } \\right) - \\dfrac{ 1 }{ 2 }g\\left( \\dfrac{ 16 }{ U\\cos\\alpha } \\right)^2 \\cr -1.125 &= 16\\tan\\alpha - \\dfrac{ 128g }{ U^2\\cos^2\\alpha } \\end{aligned}<br><br>Now substitute $U^2 = \\dfrac{ 4g }{ \\sin^2\\alpha }$ into this equation:<br>\\begin{aligned} -1.125 &= 16\\tan\\alpha - \\dfrac{ 128g }{ \\left(\\dfrac{ 4g }{ \\sin^2\\alpha }\\right)\\cos^2\\alpha } \\cr -1.125 &= 16\\tan\\alpha - 32\\left( \\dfrac{ \\sin^2\\alpha }{ \\cos^2\\alpha } \\right) \\cr -1.125 &= 16\\tan\\alpha - 32\\tan^2\\alpha \\cr 32\\tan^2\\alpha - 16\\tan\\alpha - 1.125 &= 0 \\end{aligned}<br><br>Multiplying the quadratic equation by $8$ to clear decimals:<br>\\begin{aligned} 256\\tan^2\\alpha - 128\\tan\\alpha - 9 &= 0 \\end{aligned}<br><br>Using the quadratic formula for $\\tan\\alpha$:<br>\\begin{aligned} \\tan\\alpha &= \\dfrac{ 128 \\pm \\sqrt{(-128)^2 - 4(256)(-9)} }{ 2(256) } \\cr \\tan\\alpha &= \\dfrac{ 128 \\pm \\sqrt{16384 + 9216} }{ 512 } \\cr \\tan\\alpha &= \\dfrac{ 128 \\pm \\sqrt{25600} }{ 512 } \\cr \\tan\\alpha &= \\dfrac{ 128 \\pm 160 }{ 512 } \\end{aligned}<br><br>Since $\\alpha$ is projected upwards, $\\tan\\alpha > 0$:<br>\\begin{aligned} \\tan\\alpha &= \\dfrac{ 288 }{ 512 } = \\dfrac{ 9 }{ 16 } \\end{aligned}",
        "To find the value of $U$, we use the formula derived in part (a).<br><br>Since $\\tan\\alpha = \\dfrac{ 9 }{ 16 }$, we can find $\\sin\\alpha$ using a right-angled triangle:<br>\\begin{aligned} \\sin\\alpha &= \\dfrac{ 9 }{ \\sqrt{9^2 + 16^2} } = \\dfrac{ 9 }{ \\sqrt{337} } \\approx 0.49029 \\end{aligned}<br><br>Now substitute $\\sin\\alpha$ and $g = 9.8\\text{ m s}^{-2}$ into the formula for $U^2$:<br>\\begin{aligned} U^2 &= \\dfrac{ 4 \\times 9.8 }{ \\left(\\dfrac{ 9 }{ \\sqrt{337} }\\right)^2 } \\cr U^2 &= \\dfrac{ 39.2 }{ \\dfrac{ 81 }{ 337 } } \\cr U^2 &= \\dfrac{ 39.2 \\times 337 }{ 81 } \\approx 163.09 \\cr U &= \\sqrt{163.09} \\approx 12.8\\text{ m s}^{-1} \\end{aligned}",
        "To find the time taken to travel from $A$ to $T$, we use the horizontal component of the motion.<br><br>The horizontal equation of motion is $x = U\\cos\\alpha \\times t$.<br>Since $\\tan\\alpha = \\dfrac{ 9 }{ 16 }$, the cosine is:<br>\\begin{aligned} \\cos\\alpha &= \\dfrac{ 16 }{ \\sqrt{337} } \\approx 0.87158 \\end{aligned}<br><br>Rearranging the equation for $t$:<br>\\begin{aligned} t &= \\dfrac{ 16 }{ U\\cos\\alpha } \\cr t &= \\dfrac{ 16 }{ 12.771 \\times 0.87158 } \\cr t &= \\dfrac{ 16 }{ 11.131 } \\approx 1.44\\text{ s} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$U \\approx 15.8\\text{ m s}^{-1}, \\quad t \\approx 1.16\\text{ s}$$",
            "feedback": "This error is identical to failing to evaluate the square root of $163.26$ correctly (mistaking $\\sqrt{163}$ for $15.8$), which subsequent corrupts the horizontal velocity component and time of flight."
        },
        {
            "ans": "$$U \\approx 10.4\\text{ m s}^{-1}, \\quad t \\approx 1.85\\text{ s}$$",
            "feedback": "This mistake arises if you use a maximum height of $4\\text{ m}$ relative to the launch point instead of the ground, leading to a wrong vertical displacement of $s_y = 4$ in the initial moments equation."
        },
        {
            "ans": "$$U \\approx 14.1\\text{ m s}^{-1}, \\quad t \\approx 1.30\\text{ s}$$",
            "feedback": "This slip occurs if you make a sign error when resolving the vertical quadratic equation, setting $y = +1.125$ instead of $-1.125$, which shifts the launch angle and initial velocity."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Track Your Reference Levels",
        "content": "Always be extremely careful with vertical heights in projectile motion. The maximum height of $4\\text{ m}$ is given relative to the horizontal ground, not the launch point $A$. Since $A$ is $2\\text{ m}$ above the ground, the vertical displacement used in your kinematics equations to the peak must be $s_y = 4 - 2 = 2\\text{ m}$. Missing this subtraction is one of the most common ways students lose easy marks on trajectory questions."
    }
},
{
    "id": "012082",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Projectiles",
    "subtopic": [
        "Equations of motion for projectiles",
        "Trajectory analysis"
    ],
    "img": false,
    "question": "A tennis ball is projected from ground level with speed $V\\text{ m s}^{-1}$ at an angle of $45^{\\circ}$ to the horizontal. The ball just clears a vertical net of height $1\\text{ m}$ which is at a horizontal distance of $12\\text{ m}$ from the point of projection.<br><br>The ball is modelled as a particle moving freely under gravity, taking $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Show that:<br>$$V^2 = \\dfrac{ 144g }{ 11 }$$<br><strong>(b)</strong> Calculate the value of $V$.<br><br><strong>(c)</strong> Find the speed of the ball as it clears the net.<br><br><strong>(d)</strong> State one limitation of the model of the ball's motion.",
    "steps": [
        "To show the formula for $V^2$, we set up the horizontal and vertical equations of motion to the position of the net.<br><br>The initial horizontal velocity is $V\\cos 45^{\\circ}$ and the initial vertical velocity is $V\\sin 45^{\\circ}$.<br>At the net, the horizontal displacement is $x = 12\\text{ m}$ and the vertical displacement is $y = 1\\text{ m}$.<br><br>Using the horizontal motion equation $x = V\\cos 45^{\\circ} \\times t$:<br>\\begin{aligned} 12 &= V\\left( \\dfrac{ \\sqrt{2} }{ 2 } \\right)t \\cr t &= \\dfrac{ 24 }{ V\\sqrt{2} } = \\dfrac{ 12\\sqrt{2} }{ V } \\end{aligned}<br><br>Using the vertical motion equation $y = V\\sin 45^{\\circ} \\times t - \\dfrac{ 1 }{ 2 }gt^2$:<br>\\begin{aligned} 1 &= V\\left( \\dfrac{ \\sqrt{2} }{ 2 } \\right)\\left( \\dfrac{ 12\\sqrt{2} }{ V } \\right) - \\dfrac{ 1 }{ 2 }g\\left( \\dfrac{ 12\\sqrt{2} }{ V } \\right)^2 \\cr 1 &= 12 - \\dfrac{ 1 }{ 2 }g\\left( \\dfrac{ 288 }{ V^2 } \\right) \\cr 1 &= 12 - \\dfrac{ 144g }{ V^2 } \\cr \\dfrac{ 144g }{ V^2 } &= 11 \\cr V^2 &= \\dfrac{ 144g }{ 11 } \\end{aligned}",
        "To find the value of $V$, we substitute $g = 9.8\\text{ m s}^{-2}$ into the formula derived in part (a):<br>\\begin{aligned} V^2 &= \\dfrac{ 144 \\times 9.8 }{ 11 } \\cr V^2 &= \\dfrac{ 1411.2 }{ 11 } \\approx 128.29 \\cr V &= \\sqrt{128.29} \\approx 11.3\\text{ m s}^{-1} \\end{aligned}",
        "To find the speed of the ball as it clears the net, we must calculate its horizontal and vertical velocity components at that instant.<br><br>The horizontal component of the velocity remains constant throughout the flight:<br>\\begin{aligned} v_x &= V\\cos 45^{\\circ} = 11.326 \\times \\dfrac{ \\sqrt{2} }{ 2 } \\approx 8.009\\text{ m s}^{-1} \\end{aligned}<br><br>To find the vertical component of the velocity $v_y$, we use $v_y^2 = u_y^2 - 2gy$ with $u_y = V\\sin 45^{\\circ}$ and $y = 1\\text{ m}$:<br>\\begin{aligned} v_y^2 &= (V\\sin 45^{\\circ})^2 - 2g(1) \\cr v_y^2 &= \\left( 11.326 \\times \\dfrac{ \\sqrt{2} }{ 2 } \\right)^2 - 2(9.8) \\cr v_y^2 &= (8.009)^2 - 19.6 \\cr v_y^2 &= 64.144 - 19.6 = 44.544 \\end{aligned}<br><br>Now, we find the resultant speed using Pythagoras' theorem:<br>\\begin{aligned} \\text{Speed} &= \\sqrt{ v_x^2 + v_y^2 } \\cr \\text{Speed} &= \\sqrt{ 64.144 + 44.544 } \\cr \\text{Speed} &= \\sqrt{ 108.69 } \\approx 10.4\\text{ m s}^{-1} \\end{aligned}",
        "Any of the following are valid limitations of the projectile model:<br><br>1. It ignores air resistance, which would act to slow the ball down horizontally and vertically.<br>2. It models the ball as a point mass (particle) and ignores its actual physical size and shape.<br>3. It ignores the effect of spin on the ball (such as topspin or backspin) which introduces aerodynamic lift forces."
    ],
    "pi_options": [
        {
            "ans": "$$V \\approx 11.3\\text{ m s}^{-1}, \\quad \\text{Speed} = 8.61\\text{ m s}^{-1}$$",
            "feedback": "This error occurs if you correctly calculate the initial velocity $V$ but mistake the horizontal velocity component $v_x$ as the final speed clearing the net, neglecting the vertical motion component."
        },
        {
            "ans": "$$V \\approx 12.0\\text{ m s}^{-1}, \\quad \\text{Speed} = 11.2\\text{ m s}^{-1}$$",
            "feedback": "This mistake arises if you use $10$ for the gravity constant $g$ instead of $9.8\\text{ m s}^{-2}$, leading to slightly inflated values for both $V$ and the impact speed."
        },
        {
            "ans": "$$V \\approx 9.8\\text{ m s}^{-1}, \\quad \\text{Speed} = 7.55\\text{ m s}^{-1}$$",
            "feedback": "This error is caused by setting up the vertical displacement equation with a height of $0\\text{ m}$ instead of $1\\text{ m}$ (assuming the ball lands on the ground at $12\\text{ m}$ instead of clearing the net)."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Energy Conservation as a Kinematic Hack",
        "content": "Finding the final speed of a projectile usually requires resolving $v_x$ and $v_y$ separately and combining them. However, if you only need the speed (not the direction), you can use Conservation of Mechanical Energy! The equation $\\frac{1}{2}mV^2 = \\frac{1}{2}mv^2 + mgy$ simplifies directly to $v^2 = V^2 - 2gy$. This will save you precious minutes on a timed exam paper."
    }
},
{
    "id": "012083",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Projectiles",
    "subtopic": [
        "Equations of motion for projectiles",
        "Trajectory analysis"
    ],
    "img": false,
    "question": "A stone is projected with speed $U\\text{ m s}^{-1}$ from a point $O$ at the top of a vertical cliff of height $25\\text{ m}$. The stone is projected at an angle $\\theta$ above the horizontal, where $\\tan\\theta = \\dfrac{ 3 }{ 4 }$. The stone lands in the sea at a point $S$ which is at a horizontal distance of $60\\text{ m}$ from the base of the cliff, as shown in the diagram.<br><br>The stone is modelled as a particle moving freely under gravity, taking $g = 9.8\\text{ m s}^{-2}$.<br><br><img src='images/Mechanics_pngs/012083.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br><strong>(a)</strong> Show that:<br>$$U^2 = \\dfrac{ 1125g }{ 28 }$$<br><strong>(b)</strong> Calculate the value of $U$.<br><br><strong>(c)</strong> Find the speed of the stone at the instant it hits the sea.<br><br><strong>(d)</strong> Find the angle the velocity vector of the stone makes with the horizontal sea surface at the instant of impact.",
    "steps": [
        "To show the formula for $U^2$, we resolve the horizontal and vertical motions to the landing point $S$.<br><br>Since $\\tan\\theta = \\dfrac{ 3 }{ 4 }$, we can find the exact trigonometric ratios:<br>$$\\sin\\theta = \\dfrac{ 3 }{ 5 } \\quad \\text{and} \\quad \\cos\\theta = \\dfrac{ 4 }{ 5 }$$<br>The horizontal displacement is $x = 60\\text{ m}$ and the vertical displacement (since it lands $25\\text{ m}$ below the cliff top) is $y = -25\\text{ m}$.<br><br>Using the horizontal motion equation $x = U\\cos\\theta \\times t$:<br>\\begin{aligned} 60 &= U\\left( \\dfrac{ 4 }{ 5 } \\right)t \\cr t &= \\dfrac{ 300 }{ 4U } = \\dfrac{ 75 }{ U } \\end{aligned}<br><br>Using the vertical motion equation $y = U\\sin\\theta \\times t - \\dfrac{ 1 }{ 2 }gt^2$:<br>\\begin{aligned} -25 &= U\\left( \\dfrac{ 3 }{ 5 } \\right)\\left( \\dfrac{ 75 }{ U } \\right) - \\dfrac{ 1 }{ 2 }g\\left( \\dfrac{ 75 }{ U } \\right)^2 \\cr -25 &= 45 - \\dfrac{ 5625g }{ 2U^2 } \\cr -70 &= -\\dfrac{ 2812.5g }{ U^2 } \\cr 70 &= \\dfrac{ 2812.5g }{ U^2 } \\cr U^2 &= \\dfrac{ 2812.5g }{ 70 } \\cr U^2 &= \\dfrac{ 1125g }{ 28 } \\end{aligned}",
        "To find the value of $U$, substitute $g = 9.8\\text{ m s}^{-2}$ into the formula from part (a):<br>\\begin{aligned} U^2 &= \\dfrac{ 1125 \\times 9.8 }{ 28 } \\cr U^2 &= 393.75 \\cr U &= \\sqrt{393.75} \\approx 19.8\\text{ m s}^{-1} \\end{aligned}",
        "To find the speed of the stone as it hits the sea, we can use Conservation of Mechanical Energy.<br><br>The sum of kinetic and potential energy at the top of the cliff equals the kinetic energy at sea level:<br>\\begin{aligned} \\dfrac{ 1 }{ 2 }mU^2 + mgh &= \\dfrac{ 1 }{ 2 }mv^2 \\cr v^2 &= U^2 + 2gh \\end{aligned}<br><br>Substituting the values $U^2 = 393.75$, $g = 9.8\\text{ m s}^{-2}$ and $h = 25\\text{ m}$:<br>\\begin{aligned} v^2 &= 393.75 + 2(9.8)(25) \\cr v^2 &= 393.75 + 490 \\cr v^2 &= 883.75 \\cr v &= \\sqrt{883.75} \\approx 29.7\\text{ m s}^{-1} \\end{aligned}",
        "To find the angle $\\phi$ the velocity vector makes with the horizontal at impact, we calculate the horizontal velocity component $v_x$ and compare it to the total speed $v$.<br><br>The horizontal component of velocity is constant:<br>\\begin{aligned} v_x &= U\\cos\\theta \\cr v_x &= 19.843 \\times \\dfrac{ 4 }{ 5 } \\approx 15.874\\text{ m s}^{-1} \\end{aligned}<br><br>The angle of impact $\\phi$ satisfies:<br>\\begin{aligned} \\cos\\phi &= \\dfrac{ v_x }{ v } \\cr \\cos\\phi &= \\dfrac{ 15.874 }{ 29.728 } \\approx 0.5340 \\cr \\phi &= \\arccos(0.5340) \\approx 57.7^{\\circ} \\end{aligned}<br><br>So, the velocity vector of the stone makes an angle of $57.7^{\\circ}$ below the horizontal at the instant of impact."
    ],
    "pi_options": [
        {
            "ans": "$$U \\approx 19.8\\text{ m s}^{-1}, \\quad \\text{Speed} = 28.1\\text{ m s}^{-1}, \\quad \\phi = 56.0^{\\circ}$$",
            "feedback": "This error occurs if you resolve the vertical displacement as $y = -20\\text{ m}$ instead of $-25\\text{ m}$, leading to a slightly lower velocity and impact angle."
        },
        {
            "ans": "$$U \\approx 14.3\\text{ m s}^{-1}, \\quad \\text{Speed} = 24.5\\text{ m s}^{-1}, \\quad \\phi = 45.0^{\\circ}$$",
            "feedback": "This mistake is caused by setting the vertical displacement to $y = +25\\text{ m}$ (treating the cliff as a wall the stone has to clear upwards) which corrupts the sign structure of the quadratic."
        },
        {
            "ans": "$$U \\approx 22.4\\text{ m s}^{-1}, \\quad \\text{Speed} = 31.2\\text{ m s}^{-1}, \\quad \\phi = 62.4^{\\circ}$$",
            "feedback": "This error arises from using $\\sin\\theta$ in the horizontal motion equation instead of $\\cos\\theta$ when setting up the initial time-of-flight equation."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: The Symmetry of Projectiles",
        "content": "For any projectile launched and landing at a lower level (like off a cliff), the horizontal speed stays constant, while the vertical speed increases. If you want to check your calculations, notice that the angle of impact $\\phi$ ($57.7^{\\circ}$) is significantly steeper than the launch angle $\\theta$ ($36.9^{\\circ}$), which makes perfect physical sense as gravity has had more time to accelerate the object downwards."
    }
},
{
    "id": "012084",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Projectiles",
    "subtopic": [
        "Equations of motion for projectiles",
        "Trajectory analysis"
    ],
    "img": false,
    "question": "A basketball is shot from a point $A$ which is at a height of $2.1\\text{ m}$ above the court. The ball is thrown with speed $U\\text{ m s}^{-1}$ at an angle $\\theta$ to the horizontal. The ball enters the hoop $T$, which is at a horizontal distance of $6.0\\text{ m}$ and a height of $3.05\\text{ m}$ above the court, as shown in the diagram.<br><br><img src='images/Mechanics_pngs/012084.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br>The basketball is modelled as a particle moving freely under gravity, taking $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Show that:<br>$$U^2 = \\dfrac{ 360g }{ 120\\sin\\theta\\cos\\theta - 19\\cos^2\\theta }$$<br><strong>(b)</strong> Given that the ball is thrown at an angle of $\\theta = 50^{\\circ}$ to the horizontal, calculate the value of $U$.<br><br><strong>(c)</strong> Find the maximum height above the court reached by the basketball during its flight.<br><br><strong>(d)</strong> State the effect of modelling the basketball as a particle rather than a sphere with a finite radius on the likelihood of it scoring.",
    "steps": [
        "To show the formula for $U^2$, we resolve the motion to the hoop $T$.<br><br>The horizontal displacement is $x = 6.0\\text{ m}$ and the vertical displacement is $y = 3.05 - 2.1 = 0.95\\text{ m}$.<br><br>Using the horizontal motion equation $x = U\\cos\\theta \\times t$:<br>\\begin{aligned} 6 &= U\\cos\\theta \\times t \\cr t &= \\dfrac{ 6 }{ U\\cos\\theta } \\end{aligned}<br><br>Using the vertical motion equation $y = U\\sin\\theta \\times t - \\dfrac{ 1 }{ 2 }gt^2$:<br>\\begin{aligned} 0.95 &= U\\sin\\theta \\left( \\dfrac{ 6 }{ U\\cos\\theta } \\right) - \\dfrac{ 1 }{ 2 }g\\left( \\dfrac{ 6 }{ U\\cos\\theta } \\right)^2 \\cr 0.95 &= 6\\tan\\theta - \\dfrac{ 18g }{ U^2\\cos^2\\theta } \\end{aligned}<br><br>To clear decimals and fractions, we multiply the entire equation by $100$:<br>\\begin{aligned} 95 &= 600\\tan\\theta - \\dfrac{ 1800g }{ U^2\\cos^2\\theta } \\cr \\dfrac{ 1800g }{ U^2\\cos^2\\theta } &= 600\\tan\\theta - 95 \\end{aligned}<br><br>Divide the equation by $5$:<br>\\begin{aligned} \\dfrac{ 360g }{ U^2\\cos^2\\theta } &= 120\\tan\\theta - 19 \\cr \\dfrac{ 360g }{ U^2 } &= \\cos^2\\theta (120\\tan\\theta - 19) \\cr \\dfrac{ 360g }{ U^2 } &= 120\\sin\\theta\\cos\\theta - 19\\cos^2\\theta \\cr U^2 &= \\dfrac{ 360g }{ 120\\sin\\theta\\cos\\theta - 19\\cos^2\\theta } \\end{aligned}",
        "To find the value of $U$ when $\\theta = 50^{\\circ}$, we substitute the parameters and $g = 9.8\\text{ m s}^{-2}$ into our formula:<br>\\begin{aligned} 120\\sin 50^{\\circ}\\cos 50^{\\circ} - 19\\cos^2 50^{\\circ} &= 120(0.76604)(0.64279) - 19(0.41318) \\cr &= 59.094 - 7.850 = 51.244 \\cr\\cr U^2 &= \\dfrac{ 360 \\times 9.8 }{ 51.244 } \\cr U^2 &= \\dfrac{ 3528 }{ 51.244 } \\approx 68.847 \\cr U &= \\sqrt{68.847} \\approx 8.30\\text{ m s}^{-1} \\end{aligned}",
        "To find the maximum height reached by the ball, we find its peak height relative to the launch height and add $2.1\\text{ m}$.<br><br>The initial vertical velocity is $u_y = U\\sin 50^{\\circ}$. At the maximum height, $v_y = 0$.<br>Using $v_y^2 = u_y^2 - 2gH_{\\text{rel}}$:<br>\\begin{aligned} 0 &= (U\\sin 50^{\\circ})^2 - 2gH_{\\text{rel}} \\cr H_{\\text{rel}} &= \\dfrac{ U^2\\sin^2 50^{\\circ} }{ 2g } \\cr H_{\\text{rel}} &= \\dfrac{ 68.847 \\times (0.76604)^2 }{ 19.6 } \\cr H_{\\text{rel}} &= \\dfrac{ 68.847 \\times 0.58682 }{ 19.6 } \\cr H_{\\text{rel}} &= \\dfrac{ 40.401 }{ 19.6 } \\approx 2.06\\text{ m} \\end{aligned}<br><br>Adding the initial projection height:<br>\\begin{aligned} H_{\\text{max}} &= 2.1 + 2.06 = 4.16\\text{ m} \\end{aligned}",
        "Modelling the basketball as a particle makes scoring **more likely** in the model than in reality.<br><br>In reality, a basketball has a finite radius (approx $12\\text{ cm}$), meaning that if the centre of the ball passes close to the rim, the ball may hit the rim and bounce out. A particle has zero size, meaning it will pass through the hoop as long as its coordinates exactly match the coordinates of the hoop's opening, with no risk of physical collision with the rim."
    ],
    "pi_options": [
        {
            "ans": "$$U \\approx 8.60\\text{ m s}^{-1}, \\quad H_{\\text{max}} = 4.32\\text{ m}$$",
            "feedback": "This error occurs if you make an algebraic error in part (a) by flipping a trigonometric term to the numerator when resolving the reciprocal, resulting in an incorrect formula of $U^2 = \\frac{360g}{120\\tan\\theta - 19}$."
        },
        {
            "ans": "$$U \\approx 5.33\\text{ m s}^{-1}, \\quad H_{\\text{max}} = 2.95\\text{ m}$$",
            "feedback": "This mistake is caused by using the incorrect formula $U^2 = \\frac{360g}{120\\tan\\theta - 19}$ but correctly evaluating the square root, which reveals a physical impossibility (the max height is below the hoop height)."
        },
        {
            "ans": "$$U \\approx 7.15\\text{ m s}^{-1}, \\quad H_{\\text{max}} = 3.40\\text{ m}$$",
            "feedback": "This error is caused by neglecting the initial vertical height offset of $2.1\\text{ m}$ and setting the displacement equal to the full hoop height $y = 3.05\\text{ m}$ in the moments calculations."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Spotting Physical Inconsistencies",
        "content": "Always sanity-check your intermediate mechanics answers! In part (c), if you calculated a maximum height that was less than the target height of $3.05\\text{ m}$, your projectile would never have been able to pass downwards through the hoop. Spotting such physical contradictions immediately alerts you to a formula rearrangement or arithmetic error."
    }
},
{
    "id": "012085",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Projectiles",
    "subtopic": [
        "Equations of motion for projectiles",
        "Trajectory analysis"
    ],
    "img": false,
    "question": "A particle is projected from a point $O$ on horizontal ground with speed $14\\text{ m s}^{-1}$ at an angle of projection $\\theta$ to the horizontal. The particle strikes a target on the ground at a horizontal distance of $10\\text{ m}$ from $O$.<br><br>The particle is modelled as moving freely under gravity, taking $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Show that there are two possible angles of projection, and find these two values of $\\theta$.<br><br><strong>(b)</strong> Find the time of flight of the particle for each of these two angles.<br><br><strong>(c)</strong> Calculate the difference between these two times of flight, giving your answer to $2$ decimal places.<br><br><strong>(d)</strong> Describe how the trajectory would change if air resistance were included in the model.",
    "steps": [
        "To find the angles of projection, we use the horizontal range formula for a projectile landing at the same horizontal level:<br>\\begin{aligned} R &= \\dfrac{ U^2\\sin 2\\theta }{ g } \\end{aligned}<br><br>Substituting $R = 10\\text{ m}$, $U = 14\\text{ m s}^{-1}$ and $g = 9.8\\text{ m s}^{-2}$:<br>\\begin{aligned} 10 &= \\dfrac{ 14^2 \\sin 2\\theta }{ 9.8 } \\cr 10 &= \\dfrac{ 196 \\sin 2\\theta }{ 9.8 } \\cr 10 &= 20\\sin 2\\theta \\cr \\sin 2\\theta &= 0.5 \\end{aligned}<br><br>For a projectile launched above the horizontal, we have $0^{\\circ} < 2\\theta < 180^{\\circ}$:<br>\\begin{aligned} 2\\theta &= 30^{\\circ} \\quad \\text{or} \\quad 2\\theta = 150^{\\circ} \\cr \\theta &= 15^{\\circ} \\quad \\text{or} \\quad \\theta = 75^{\\circ} \\end{aligned}",
        "To find the times of flight, we use the formula for total time of flight $T$ derived from the vertical displacement equation setting $y = 0$:<br>\\begin{aligned} T &= \\dfrac{ 2U\\sin\\theta }{ g } \\end{aligned}<br><br>For $\\theta = 15^{\\circ}$:<br>\\begin{aligned} T_1 &= \\dfrac{ 2(14)\\sin 15^{\\circ} }{ 9.8 } \\cr T_1 &= \\dfrac{ 28 \\times 0.25882 }{ 9.8 } \\approx 0.74\\text{ s} \\end{aligned}<br><br>For $\\theta = 75^{\\circ}$:<br>\\begin{aligned} T_2 &= \\dfrac{ 2(14)\\sin 75^{\\circ} }{ 9.8 } \\cr T_2 &= \\dfrac{ 28 \\times 0.96593 }{ 9.8 } \\approx 2.76\\text{ s} \\end{aligned}",
        "To find the difference between the two times of flight, we subtract the smaller time from the larger time, carrying more decimal places for accuracy:<br>\\begin{aligned} T_2 - T_1 &= \\dfrac{ 28\\sin 75^{\\circ} }{ 9.8 } - \\dfrac{ 28\\sin 15^{\\circ} }{ 9.8 } \\cr T_2 - T_1 &= 2.7598 - 0.7395 \\cr T_2 - T_1 &= 2.0203 \\approx 2.02\\text{ s} \\end{aligned}",
        "If air resistance were included in our model:<br><br>1. The horizontal speed would no longer be constant but would decrease continuously over time, shortening the horizontal range.<br>2. The maximum height reached would be lower, and the trajectory would no longer be a symmetric parabola (the descent phase would be steeper than the ascent phase)."
    ],
    "pi_options": [
        {
            "ans": "$$\\Delta T = 1.41\\text{ s}$$",
            "feedback": "This error occurs if you use $\\sin\\theta$ instead of $\\sin 2\\theta$ in the initial range formula, leading to an incorrect projection angle and corrupted times of flight."
        },
        {
            "ans": "$$\\Delta T = 2.55\\text{ s}$$",
            "feedback": "This mistake is caused by using $g = 10\\text{ m s}^{-2}$ but failing to calculate the angle change, resulting in a mismatched set of projection times."
        },
        {
            "ans": "$$\\Delta T = 1.02\\text{ s}$$",
            "feedback": "This slip occurs if you divide the correct times of flight by $2$ (effectively calculating the difference in the times taken to reach the maximum heights instead of the landing target)."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Complementary Launch Angles",
        "content": "For any target distance on flat ground, there are always two complementary launch angles that sum to $90^{\\circ}$ (in this case, $15^{\\circ} + 75^{\\circ} = 90^{\\circ}$). The high-trajectory launch ($75^{\\circ}$) spends much more time in the air ($2.76\\text{ s}$) because its initial vertical velocity is much greater, whereas the low-trajectory launch ($15^{\\circ}$) relies on horizontal speed to cover the same distance in just $0.74\\text{ s}$."
    }
},
{
    "id": "012086",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Vectors",
    "subtopic": [
        "Force and acceleration vectors",
        "Vector magnitudes"
    ],
    "img": false,
    "question": "In this question, the horizontal unit vectors $\\mathbf{i}$ and $\\mathbf{j}$ are in the directions East and North respectively.<br><br>A model ship of mass $2\\text{ kg}$ is moving in a horizontal plane so that its acceleration vector $\\mathbf{a}\\text{ m s}^{-2}$ at time $t$ seconds is given by:<br>$$\\mathbf{a} = 2(3t - 7)\\mathbf{i} + 8\\mathbf{j}$$<br>When $t = T$, the magnitude of the resultant horizontal force acting on the ship is $20\\text{ N}$.<br><br>Find the possible values of $T$.",
    "steps": [
        "To find the possible values of $T$, we first express the resultant horizontal force vector $\\mathbf{F}$ using Newton's Second Law: $\\mathbf{F} = m\\mathbf{a}$.<br><br>Given that the mass of the ship is $m = 2\\text{ kg}$:<br>\\begin{aligned} \\mathbf{F} &= m\\mathbf{a} \\cr \\mathbf{F} &= 2\\left[ 2(3t - 7)\\mathbf{i} + 8\\mathbf{j} \\right] \\cr \\mathbf{F} &= 4(3t - 7)\\mathbf{i} + 16\\mathbf{j} \\end{aligned}",
        "At the instant $t = T$, the magnitude of this force is given as $20\\text{ N}$.<br><br>Using the vector magnitude formula $|\\mathbf{F}| = \\sqrt{ F_x^2 + F_y^2 }$:<br>\\begin{aligned} |\\mathbf{F}| &= 20 \\cr \\sqrt{ \\left( 4(3T - 7) \\right)^2 + 16^2 } &= 20 \\cr \\left( 4(3T - 7) \\right)^2 + 256 &= 400 \\cr 16(3T - 7)^2 &= 144 \\cr (3T - 7)^2 &= 9 \\end{aligned}",
        "We now solve the quadratic equation by taking the square root of both sides:<br>\\begin{aligned} 3T - 7 &= 3 \\implies 3T = 10 \\implies T = \\dfrac{ 10 }{ 3 } \\cr \\text{or} \\cr 3T - 7 &= -3 \\implies 3T = 4 \\implies T = \\dfrac{ 4 }{ 3 } \\end{aligned}<br><br>So, the possible values of $T$ are $\\dfrac{ 4 }{ 3 }$ and $\\dfrac{ 10 }{ 3 }$."
    ],
    "pi_options": [
        {
            "ans": "$$T = \\dfrac{ 2 }{ 3 }, \\quad T = \\dfrac{ 8 }{ 3 }$$",
            "feedback": "This error occurs if you neglect to multiply the acceleration vector by the mass $m = 2$ in Newton's Second Law, equating the magnitude of the acceleration vector directly to $20$ instead of $10$."
        },
        {
            "ans": "$$T = 1, \\quad T = \\dfrac{ 11 }{ 3 }$$",
            "feedback": "This mistake is caused by a sign error when taking the square root, resolving $3T - 7 = -4$ instead of $-3$, or making an arithmetic slip when simplifying the squared term."
        },
        {
            "ans": "$$T = 2, \\quad T = 5$$",
            "feedback": "This slip arises if you accidentally calculate the magnitude of the force using only the horizontal component, neglecting the vertical component $16\\mathbf{j}$ in Pythagoras' theorem."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Don't Forget the Mass",
        "content": "A very common student error in vector mechanics is confusing the acceleration vector with the force vector. When a question provides a force magnitude, always ensure you multiply the acceleration vector by the mass ($2\\text{ kg}$ in this case) before taking the magnitude. Forgetting this step will lead to incorrect quadratic solutions."
    }
},
{
    "id": "012087",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Vectors",
    "subtopic": [
        "Force and acceleration vectors",
        "Vector equations of motion"
    ],
    "img": false,
    "question": "A toy boat of mass $0.5\\text{ kg}$ is moving in a horizontal pool under the action of a constant horizontal force $\\mathbf{F} = (4\\mathbf{i} - 3\\mathbf{j})\\text{ N}$.<br><br>At time $t = 0\\text{ s}$, the boat has velocity $\\mathbf{u} = (-2\\mathbf{i} + 6\\mathbf{j})\\text{ m s}^{-1}$.<br><br><strong>(a)</strong> Show that the acceleration of the boat is given by $(8\\mathbf{i} - 6\\mathbf{j})\\text{ m s}^{-2}$.<br><br><strong>(b)</strong> Find an expression for the velocity vector $\\mathbf{v}$ of the boat at time $t$ seconds.<br><br><strong>(c)</strong> Find the value of $t$ at which the boat is moving due East.<br><br><strong>(d)</strong> Find the speed of the boat at this instant.",
    "steps": [
        "To show the acceleration vector, we apply Newton's Second Law: $\\mathbf{F} = m\\mathbf{a}$.<br><br>Rearranging for the acceleration $\\mathbf{a}$:<br>\\begin{aligned} \\mathbf{a} &= \\dfrac{ \\mathbf{F} }{ m } \\cr \\mathbf{a} &= \\dfrac{ 4\\mathbf{i} - 3\\mathbf{j} }{ 0.5 } \\cr \\mathbf{a} &= (8\\mathbf{i} - 6\\mathbf{j})\\text{ m s}^{-2} \\end{aligned}",
        "Since the force is constant, the acceleration is also constant. We can use the vector kinematics formula $\\mathbf{v} = \\mathbf{u} + \\mathbf{a}t$.<br><br>Substituting the initial velocity $\\mathbf{u} = -2\\mathbf{i} + 6\\mathbf{j}$ and the constant acceleration $\\mathbf{a} = 8\\mathbf{i} - 6\\mathbf{j}$:<br>\\begin{aligned} \\mathbf{v} &= \\mathbf{u} + \\mathbf{a}t \\cr \\mathbf{v} &= (-2\\mathbf{i} + 6\\mathbf{j}) + t(8\\mathbf{i} - 6\\mathbf{j}) \\cr \\mathbf{v} &= (8t - 2)\\mathbf{i} + (6 - 6t)\\mathbf{j} \\end{aligned}",
        "For the boat to be moving due East, its velocity vector must have a positive horizontal component (in the $\\mathbf{i}$ direction) and a vertical component (in the $\\mathbf{j}$ direction) of exactly zero.<br><br>Setting the vertical component to zero:<br>\\begin{aligned} 6 - 6t &= 0 \\cr 6t &= 6 \\cr t &= 1\\text{ s} \\end{aligned}<br><br>At $t = 1$, the horizontal component is $8(1) - 2 = 6 > 0$, so the boat is indeed moving due East.",
        "To find the speed of the boat at $t = 1\\text{ s}$, we substitute $t = 1$ back into our expression for the velocity vector $\\mathbf{v}$:<br>\\begin{aligned} \\mathbf{v} &= (8(1) - 2)\\mathbf{i} + (6 - 6(1))\\mathbf{j} \\cr \\mathbf{v} &= 6\\mathbf{i} + 0\\mathbf{j} \\cr \\text{Speed} &= |6\\mathbf{i}| = 6\\text{ m s}^{-1} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$t = 1\\text{ s}, \\quad \\text{Speed} = 10\\text{ m s}^{-1}$$",
            "feedback": "This error occurs if you correctly calculate the time but miscalculate the horizontal velocity component at $t = 1$ as $10\\mathbf{i}$ instead of $6\\mathbf{i}$, perhaps by adding the components incorrectly."
        },
        {
            "ans": "$$t = 0.5\\text{ s}, \\quad \\text{Speed} = 2\\text{ m s}^{-1}$$",
            "feedback": "This mistake is caused by setting the horizontal component of the velocity to zero ($8t - 2 = 0$) instead of the vertical component, representing the time when the boat is moving due North or South."
        },
        {
            "ans": "$$t = 1.5\\text{ s}, \\quad \\text{Speed} = 10\\text{ m s}^{-1}$$",
            "feedback": "This slip arises from a sign error when solving the vertical velocity component equation, leading to $6 + 4t = 0$ or similar incorrect equations."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Interpreting Directions with Vectors",
        "content": "When a mechanics question specifies a direction of motion like 'due East' or 'due North', it is giving you a mathematical constraint. 'Due East' means the vertical component ($\\mathbf{j}$) of the velocity must be exactly zero, and the horizontal component ($\\mathbf{i}$) must be positive. Translate these directional words into algebraic boundary conditions immediately to simplify your equations."
    }
},
{
    "id": "012088",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Vectors",
    "subtopic": [
        "Position and displacement vectors",
        "Closest approach"
    ],
    "img": false,
    "question": "At time $t = 0$ hours, a yacht $A$ has position vector $(2\\mathbf{i} + 5\\mathbf{j})\\text{ km}$ and is moving with a constant velocity $(4\\mathbf{i} - 2\\mathbf{j})\\text{ km h}^{-1}$.<br><br>At the same instant, a yacht $B$ has position vector $(10\\mathbf{i} - \\mathbf{j})\\text{ km}$ and is moving with a constant velocity $(2\\mathbf{i} + \\mathbf{j})\\text{ km h}^{-1}$.<br><br>The horizontal unit vectors $\\mathbf{i}$ and $\\mathbf{j}$ represent $1\\text{ km}$ East and $1\\text{ km}$ North respectively.<br><br><strong>(a)</strong> Find the position vector of yacht $A$ and yacht $B$ at time $t$ hours.<br><br><strong>(b)</strong> Show that the displacement vector from $A$ to $B$, denoted by $\\mathbf{r}_{AB}$, at time $t$ hours is given by:<br>$$\\mathbf{r}_{AB} = (8 - 2t)\\mathbf{i} + (3t - 6)\\mathbf{j}$$<br><strong>(c)</strong> Find the distance between the two yachts at $t = 2$ hours.<br><br><strong>(d)</strong> Find the time $t$ at which the two yachts are closest to each other.",
    "steps": [
        "Since both yachts are moving with constant velocity, we use the vector equation of position: $\\mathbf{r} = \\mathbf{r}_0 + \\mathbf{v}t$.<br><br>For yacht $A$:<br>\\begin{aligned} \\mathbf{r}_A &= (2\\mathbf{i} + 5\\mathbf{j}) + t(4\\mathbf{i} - 2\\mathbf{j}) \\cr \\mathbf{r}_A &= (2 + 4t)\\mathbf{i} + (5 - 2t)\\mathbf{j} \\end{aligned}<br><br>For yacht $B$:<br>\\begin{aligned} \\mathbf{r}_B &= (10\\mathbf{i} - \\mathbf{j}) + t(2\\mathbf{i} + \\mathbf{j}) \\cr \\mathbf{r}_B &= (10 + 2t)\\mathbf{i} + (t - 1)\\mathbf{j} \\end{aligned}",
        "The displacement vector from $A$ to $B$ is given by subtracting the position vector of $A$ from the position vector of $B$: $\\mathbf{r}_{AB} = \\mathbf{r}_B - \\mathbf{r}_A$.<br><br>Performing the vector subtraction:<br>\\begin{aligned} \\mathbf{r}_{AB} &= \\left[ (10 + 2t)\\mathbf{i} + (t - 1)\\mathbf{j} \\right] - \\left[ (2 + 4t)\\mathbf{i} + (5 - 2t)\\mathbf{j} \\right] \\cr \\mathbf{r}_{AB} &= (10 + 2t - 2 - 4t)\\mathbf{i} + (t - 1 - 5 + 2t)\\mathbf{j} \\cr \\mathbf{r}_{AB} &= (8 - 2t)\\mathbf{i} + (3t - 6)\\mathbf{j} \\end{aligned}",
        "To find the distance between the yachts at $t = 2\\text{ hours}$, we first evaluate the displacement vector $\\mathbf{r}_{AB}$ at this time:<br>\\begin{aligned} \\mathbf{r}_{AB} &= (8 - 2(2))\\mathbf{i} + (3(2) - 6)\\mathbf{j} \\cr \\mathbf{r}_{AB} &= (8 - 4)\\mathbf{i} + (6 - 6)\\mathbf{j} \\cr \\mathbf{r}_{AB} &= 4\\mathbf{i} + 0\\mathbf{j} \\end{aligned}<br><br>The distance is the magnitude of this displacement vector:<br>\\begin{aligned} \\text{Distance} &= |4\\mathbf{i}| = 4\\text{ km} \\end{aligned}",
        "The yachts are closest to each other when the square of the distance between them, $d^2 = |\\mathbf{r}_{AB}|^2$, is minimized.<br><br>We write the expression for $d^2$ as a function of time $t$:<br>\\begin{aligned} d^2 &= (8 - 2t)^2 + (3t - 6)^2 \\cr d^2 &= (64 - 32t + 4t^2) + (9t^2 - 36t + 36) \\cr d^2 &= 13t^2 - 68t + 100 \\end{aligned}<br><br>Let $f(t) = 13t^2 - 68t + 100$. To find the minimum, we differentiate with respect to $t$ and set the derivative to zero:<br>\\begin{aligned} f'(t) &= 26t - 68 = 0 \\cr 26t &= 68 \\cr t &= \\dfrac{ 68 }{ 26 } = \\dfrac{ 34 }{ 13 } \\approx 2.62\\text{ hours} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$\\text{Distance} = 4\\text{ km}, \\quad t = 2\\text{ hours}$$",
            "feedback": "This error occurs if you assume that the yachts are closest at the specific evaluation time $t = 2$ instead of differentiating the distance squared expression to find the global minimum vertex."
        },
        {
            "ans": "$$\\text{Distance} = 5.2\\text{ km}, \\quad t = 1.85\\text{ hours}$$",
            "feedback": "This mistake arises from a sign error when expanding $(3t - 6)^2$, leading to an incorrect quadratic function for distance squared and subsequent differentiation errors."
        },
        {
            "ans": "$$\\text{Distance} = 2.8\\text{ km}, \\quad t = 3.00\\text{ hours}$$",
            "feedback": "This slip is caused by subtracting the position vectors in the wrong order ($A - B$) and then making an arithmetic error in the quadratic coefficients."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: The Closest Approach Trick",
        "content": "To find the time of closest approach, you can always write down the expression for distance squared ($d^2$) and find its minimum. Minimizing $d^2$ is mathematically identical to minimizing the distance $d$, but it has the massive advantage of avoiding messy square roots in your derivatives. Always look to differentiate $d^2$ first!"
    }
},
{
    "id": "012089",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Dynamics",
    "topic": "Vectors",
    "subtopic": [
        "Static equilibrium",
        "Newton's Second Law with vectors"
    ],
    "img": false,
    "question": "A small metal ring of mass $0.5\\text{ kg}$ is resting on a smooth horizontal table and is in static equilibrium under the action of three coplanar horizontal forces:<br>$$\\mathbf{F}_1 = (3a\\mathbf{i} + 4\\mathbf{j})\\text{ N}$$<br>$$\\mathbf{F}_2 = (-6\\mathbf{i} + 2b\\mathbf{j})\\text{ N}$$<br>$$\\mathbf{F}_3 = (15\\mathbf{i} - 12\\mathbf{j})\\text{ N}$$<br>where $a$ and $b$ are constants.<br><br><strong>(a)</strong> Find the value of $a$ and the value of $b$.<br><br>The force $\\mathbf{F}_1$ is suddenly removed.<br><br><strong>(b)</strong> Write down the resultant force acting on the ring.<br><br><strong>(c)</strong> Find the acceleration vector $\\mathbf{a}\\text{ m s}^{-2}$ of the ring after $\\mathbf{F}_1$ has been removed.<br><br><strong>(d)</strong> Calculate the magnitude of this acceleration, giving your answer to $3$ significant figures.",
    "steps": [
        "Since the metal ring is in static equilibrium, the sum of all coplanar forces acting on it must be zero: $\\Sigma \\mathbf{F} = \\mathbf{0}$.<br><br>Adding the vectors component-wise:<br>\\begin{aligned} \\mathbf{F}_1 + \\mathbf{F}_2 + \\mathbf{F}_3 &= \\mathbf{0} \\cr (3a\\mathbf{i} + 4\\mathbf{j}) + (-6\\mathbf{i} + 2b\\mathbf{j}) + (15\\mathbf{i} - 12\\mathbf{j}) &= 0\\mathbf{i} + 0\\mathbf{j} \\cr (3a - 6 + 15)\\mathbf{i} + (4 + 2b - 12)\\mathbf{j} &= 0\\mathbf{i} + 0\\mathbf{j} \\cr (3a + 9)\\mathbf{i} + (2b - 8)\\mathbf{j} &= 0\\mathbf{i} + 0\\mathbf{j} \\end{aligned}<br><br>Equating components to solve for $a$ and $b$:<br>\\begin{aligned} 3a + 9 &= 0 \\implies a = -3 \\cr 2b - 8 &= 0 \\implies b = 4 \\end{aligned}",
        "When the force $\\mathbf{F}_1$ is removed, the new resultant force $\\mathbf{R}$ is the sum of the remaining forces $\\mathbf{F}_2$ and $\\mathbf{F}_3$.<br><br>Since $\\mathbf{F}_1 + \\mathbf{F}_2 + \\mathbf{F}_3 = \\mathbf{0}$, the sum of $\\mathbf{F}_2$ and $\\mathbf{F}_3$ must equal $-\\mathbf{F}_1$.<br>With $a = -3$, the force is $\\mathbf{F}_1 = -9\\mathbf{i} + 4\\mathbf{j}$. Therefore:<br>\\begin{aligned} \\mathbf{R} &= -\\mathbf{F}_1 \\cr \\mathbf{R} &= -(-9\\mathbf{i} + 4\\mathbf{j}) \\cr \\mathbf{R} &= (9\\mathbf{i} - 4\\mathbf{j})\\text{ N} \\end{aligned}",
        "To find the acceleration vector $\\mathbf{a}$ after the force is removed, we use Newton's Second Law: $\\mathbf{R} = m\\mathbf{a}$.<br><br>Substituting the resultant force $\\mathbf{R} = 9\\mathbf{i} - 4\\mathbf{j}$ and the mass $m = 0.5\\text{ kg}$:<br>\\begin{aligned} \\mathbf{a} &= \\dfrac{ \\mathbf{R} }{ m } \\cr \\mathbf{a} &= \\dfrac{ 9\\mathbf{i} - 4\\mathbf{j} }{ 0.5 } \\cr \\mathbf{a} &= (18\\mathbf{i} - 8\\mathbf{j})\\text{ m s}^{-2} \\end{aligned}",
        "To calculate the magnitude of the acceleration vector $\\mathbf{a}$, we use Pythagoras' theorem:<br>\\begin{aligned} |\\mathbf{a}| &= \\sqrt{ 18^2 + (-8)^2 } \\cr |\\mathbf{a}| &= \\sqrt{ 324 + 64 } \\cr |\\mathbf{a}| &= \\sqrt{ 388 } \\approx 19.7\\text{ m s}^{-2} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$a = 3, \\quad b = -4, \\quad |\\mathbf{a}| = 19.7\\text{ m s}^{-2}$$",
            "feedback": "This error occurs if you make a sign slip when setting up the static equilibrium equations, resolving $3a - 9 = 0$ and $2b + 8 = 0$, leading to wrong sign values for $a$ and $b$."
        },
        {
            "ans": "$$a = -3, \\quad b = 4, \\quad |\\mathbf{a}| = 9.85\\text{ m s}^{-2}$$",
            "feedback": "This mistake is caused by neglecting to divide the resultant force vector by the mass $m = 0.5\\text{ kg}$ when calculating the acceleration, effectively setting $\\mathbf{a} = \\mathbf{R}$."
        },
        {
            "ans": "$$a = -3, \\quad b = 4, \\quad |\\mathbf{a}| = 4.92\\text{ m s}^{-2}$$",
            "feedback": "This slip arises from multiplying the resultant force vector by the mass $m = 0.5\\text{ kg}$ instead of dividing by it, leading to an incorrect acceleration vector."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: The Equilibrium Removal Shortcut",
        "content": "When a system is in equilibrium under several forces, the sum of those forces is zero. If you remove one force, say $\\mathbf{F}_1$, you do not need to recalculate the sum of the remaining forces from scratch. The remaining forces must sum exactly to $-\\mathbf{F}_1$. Recognizing this shortcut will keep your steps clean and prevent algebraic transcription errors."
    }
},
{
    "id": "012090",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Vectors",
    "subtopic": [
        "Variable acceleration with vectors",
        "Kinetic energy and force magnitudes"
    ],
    "img": false,
    "question": "A particle $P$ of mass $0.2\\text{ kg}$ moves in a horizontal plane. At time $t$ seconds ($t \\ge 0$), its position vector $\\mathbf{r}$ metres relative to a fixed origin $O$ is given by:<br>$$\\mathbf{r} = (t^3 - 3t^2)\\mathbf{i} + (2t^2 - 4t)\\mathbf{j}$$<br><strong>(a)</strong> Find an expression for the velocity vector $\\mathbf{v}\\text{ m s}^{-1}$ of $P$ at time $t$.<br><br><strong>(b)</strong> Find the value of $t$ for which the particle is momentarily moving parallel to the vector $\\mathbf{j}$.<br><br><strong>(c)</strong> Find the kinetic energy of the particle at $t = 3\\text{ s}$.<br><br><strong>(d)</strong> Find the magnitude of the resultant force acting on the particle at $t = 1\\text{ s}$.",
    "steps": [
        "To find the velocity vector $\\mathbf{v}$ from the position vector $\\mathbf{r}$, we differentiate with respect to time $t$: $\\mathbf{v} = \\dfrac{ \\mathrm{d}\\mathbf{r} }{ \\mathrm{d}t }$.<br><br>Differentiating each component component-wise:<br>\\begin{aligned} \\mathbf{v} &= \\dfrac{ \\mathrm{d} }{ \\mathrm{d}t } \\left[ (t^3 - 3t^2)\\mathbf{i} + (2t^2 - 4t)\\mathbf{j} \\right] \\cr \\mathbf{v} &= (3t^2 - 6t)\\mathbf{i} + (4t - 4)\\mathbf{j} \\end{aligned}",
        "For the particle to be moving parallel to the vector $\\mathbf{j}$, its horizontal velocity component (the $\\mathbf{i}$ component) must be exactly zero, while its vertical velocity component is non-zero.<br><br>Setting the horizontal component of velocity to zero:<br>\\begin{aligned} 3t^2 - 6t &= 0 \\cr 3t(t - 2) &= 0 \\end{aligned}<br><br>Since $t \\ge 0$, the possible solutions are $t = 0\\text{ s}$ or $t = 2\\text{ s}$. For active motion (and ensuring the vertical component $4t - 4$ is non-zero), we take:<br>\\begin{aligned} t &= 2\\text{ s} \\end{aligned}",
        "To find the kinetic energy at $t = 3\\text{ s}$, we first calculate the velocity vector at this instant:<br>\\begin{aligned} \\mathbf{v} &= (3(3)^2 - 6(3))\\mathbf{i} + (4(3) - 4)\\mathbf{j} \\cr \\mathbf{v} &= (27 - 18)\\mathbf{i} + (12 - 4)\\mathbf{j} \\cr \\mathbf{v} &= 9\\mathbf{i} + 8\\mathbf{j} \\end{aligned}<br><br>The square of the speed, $v^2$, is the square of the magnitude of this velocity vector:<br>\\begin{aligned} v^2 &= 9^2 + 8^2 \\cr v^2 &= 81 + 64 = 145 \\end{aligned}<br><br>Now, calculate the kinetic energy using $\\text{KE} = \\dfrac{ 1 }{ 2 }mv^2$ with $m = 0.2\\text{ kg}$:<br>\\begin{aligned} \\text{KE} &= \\dfrac{ 1 }{ 2 }mv^2 \\cr \\text{KE} &= \\dfrac{ 1 }{ 2 }(0.2)(145) \\cr \\text{KE} &= 14.5\\text{ J} \\end{aligned}",
        "To find the resultant force at $t = 1\\text{ s}$, we first differentiate the velocity vector $\\mathbf{v}$ with respect to time to obtain the acceleration vector $\\mathbf{a} = \\dfrac{ \\mathrm{d}\\mathbf{v} }{ \\mathrm{d}t }$.<br><br>Differentiating the velocity vector:<br>\\begin{aligned} \\mathbf{a} &= (6t - 6)\\mathbf{i} + 4\\mathbf{j} \\end{aligned}<br><br>At $t = 1\\text{ s}$, the acceleration vector is:<br>\\begin{aligned} \\mathbf{a} &= (6(1) - 6)\\mathbf{i} + 4\\mathbf{j} \\cr \\mathbf{a} &= 4\\mathbf{j}\\text{ m s}^{-2} \\end{aligned}<br><br>Using Newton's Second Law, $\\mathbf{F} = m\\mathbf{a}$ with $m = 0.2\\text{ kg}$:<br>\\begin{aligned} \\mathbf{F} &= 0.2(4\\mathbf{j}) = 0.8\\mathbf{j}\\text{ N} \\cr |\\mathbf{F}| &= 0.8\\text{ N} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$t = 2\\text{ s}, \\quad \\text{KE} = 29.0\\text{ J}, \\quad |\\mathbf{F}| = 1.6\\text{ N}$$",
            "feedback": "This error occurs if you double the kinetic energy and force value, which typically happens when you use $m = 0.4\\text{ kg}$ instead of the correct mass $0.2\\text{ kg}$ in your dynamic equations."
        },
        {
            "ans": "$$t = 1\\text{ s}, \\quad \\text{KE} = 14.5\\text{ J}, \\quad |\\mathbf{F}| = 0\\text{ N}$$",
            "feedback": "This mistake is caused by setting the vertical component of the velocity to zero ($4t - 4 = 0$) in part (b), representing the time when the particle is momentarily moving parallel to $\\mathbf{i}$ instead of $\\mathbf{j}$."
        },
        {
            "ans": "$$t = 2\\text{ s}, \\quad \\text{KE} = 17.0\\text{ J}, \\quad |\\mathbf{F}| = 1.2\\text{ N}$$",
            "feedback": "This slip arises from an integration error or differentiating the position vector components incorrectly, yielding a slightly skewed set of values for velocity and force."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Vector Calculus Directions",
        "content": "Be extremely precise when translating calculus-based kinematics with vectors. Displacement $\\mathbf{r}$ to velocity $\\mathbf{v}$ to acceleration $\\mathbf{a}$ is always done by differentiating with respect to $t$. If you need to go the opposite way, integrate. Remember, component directions $\\mathbf{i}$ and $\\mathbf{j}$ are independent, so treat them as separate variables during calculus operations."
    }
},
{
    "id": "012091",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Dynamics",
    "topic": "Connected Particles",
    "subtopic": [
        "Newton's Laws of Motion",
        "Slack Strings"
    ],
    "img": false,
    "question": "<img src='images/Mechanics_pngs/012091.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br>Particles $P$ and $Q$, of masses $3\\text{ kg}$ and $7\\text{ kg}$ respectively, are attached to the ends of a light inextensible string. The string passes over a smooth fixed pulley. The system is held at rest with the string taut and the hanging parts vertical. Both $P$ and $Q$ are above a horizontal plane. The system is released from rest.<br><br><strong>(i)</strong> Find the tension in the string immediately after the particles are released.<br><br>After descending $2\\text{ m}$, $Q$ strikes the horizontal plane and is immediately brought to rest. It is given that $P$ does not reach the pulley in the subsequent motion.<br><br><strong>(ii)</strong> Find the total distance travelled by $P$ between the instant when $Q$ strikes the plane and the instant when the string becomes taut again.",
    "steps": [
        "To find the tension immediately after release, we first define the system's acceleration, $a$, and tension, $T$. Since $Q$ ($7\\text{ kg}$) is heavier than $P$ ($3\\text{ kg}$), $Q$ will accelerate downwards and $P$ will accelerate upwards with the same magnitude $a$.<br><br>Applying Newton's second law ($F = ma$) to each particle:<br>For $P$ moving upwards:<br>$T - 3g = 3a$<br><br>For $Q$ moving downwards:<br>$7g - T = 7a$<br><br>Adding these two equations together eliminates $T$:<br>\\begin{aligned} (T - 3g) + (7g - T) &= 3a + 7a \\cr 4g &= 10a \\cr a &= 0.4g \\end{aligned}<br><br>Using $g = 9.8\\text{ m\\,s}^{-2}$:<br>\\begin{aligned} a &= 0.4 \\times 9.8 \\cr a &= 3.92\\text{ m\\,s}^{-2} \\end{aligned}<br><br>Substitute $a = 3.92\\text{ m\\,s}^{-2}$ back into the equation for $P$ to find the tension $T$:<br>\\begin{aligned} T - 3(9.8) &= 3(3.92) \\cr T - 29.4 &= 11.76 \\cr T &= 41.16\\text{ N} \\end{aligned}",
        "When $Q$ descends $2\\text{ m}$ to strike the plane, $P$ ascends $2\\text{ m}$ with the constant acceleration $a = 3.92\\text{ m\\,s}^{-2}$.<br><br>Using the constant acceleration equation $v^2 = u^2 + 2as$ with initial speed $u = 0\\text{ m\\,s}^{-1}$:<br>\\begin{aligned} v^2 &= 0^2 + 2 \\times 3.92 \\times 2 \\cr v^2 &= 15.68 \\cr v &= \\sqrt{ 15.68 } \\approx 3.96\\text{ m\\,s}^{-1} \\end{aligned}",
        "When $Q$ strikes the horizontal plane, it is immediately brought to rest. The string becomes slack (tension $T = 0$), and $P$ continues to move vertically upwards under gravity alone as a free projectile.<br><br>For $P$'s upward motion under gravity, the acceleration is $a = -g = -9.8\\text{ m\\,s}^{-2}$. Let $s_{up}$ be the additional vertical distance $P$ travels upwards before coming to instantaneous rest ($v = 0$):<br>\\begin{aligned} 0^2 &= v^2 + 2(-g)s_{up} \\cr 0 &= 15.68 - 2(9.8)s_{up} \\cr 19.6 s_{up} &= 15.68 \\cr s_{up} &= \\dfrac{ 15.68 }{ 19.6 } \\cr s_{up} &= 0.8\\text{ m} \\end{aligned}",
        "After reaching its highest point (an additional $0.8\\text{ m}$ upwards), $P$ begins to fall back down under gravity. Since $Q$ remains at rest on the plane, the string remains slack until $P$ falls back to the exact height it was at when $Q$ first struck the plane.<br><br>Therefore, the string becomes taut again when $P$ has fallen back down by the same distance $s_{up} = 0.8\\text{ m}$.<br><br>The total distance travelled by $P$ while the string is slack is:<br>\\begin{aligned} \\text{Total Distance} &= s_{up} \\text{ (upwards)} + s_{up} \\text{ (downwards)} \\cr &= 0.8 + 0.8 \\cr &= 1.6\\text{ m} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$T = 41.16\\text{ N}, \\text{distance} = 0.8\\text{ m}$",
            "feedback": "The tension of $41.16\\text{ N}$ is correct, but $0.8\\text{ m}$ is only the upward distance $P$ travels after the string goes slack. Since the string only becomes taut when $P$ returns to its height at the moment of impact, you must also add the downward descent of $0.8\\text{ m}$."
        },
        {
            "ans": "$T = 29.40\\text{ N}, \\text{distance} = 1.6\\text{ m}$",
            "feedback": "This error occurs if you assume the tension is equal to the weight of the lighter mass ($3g = 29.4\\text{ N}$), neglecting the acceleration of the system. Additionally, $1.6\\text{ m}$ is the correct total distance travelled during the slack phase."
        },
        {
            "ans": "$T = 41.16\\text{ N}, \\text{distance} = 2.8\\text{ m}$",
            "feedback": "This tension is correct, but the distance of $2.8\\text{ m}$ is found by adding the initial $2\\text{ m}$ ascent of $P$ to the $0.8\\text{ m}$ slack upward motion. The question only asks for the distance travelled <strong>between</strong> the instant $Q$ strikes the plane and when the string becomes taut again."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Don't Forget the Return Journey",
        "content": "A very common mistake in slack-string questions is to calculate only the additional upward distance $s_{up}$ that the rising particle travels before stopping. Remember, the string remains slack as the particle falls back down, only becoming taut again when it returns to the level it was at when the other mass struck the floor. Thus, you must double the upward distance: $\\text{Total Distance} = 2 s_{up}$."
    }
},
{
    "id": "012092",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Dynamics",
    "topic": "Connected Particles",
    "subtopic": [
        "Newton's Laws of Motion",
        "Slack Strings",
        "Time Calculations"
    ],
    "img": false,
    "question": "<img src='images/Mechanics_pngs/012092.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br>Particles $P$ and $Q$, of masses $2\\text{ kg}$ and $3\\text{ kg}$ respectively, are attached to the ends of a light inextensible string. The string passes over a smooth fixed pulley. The system is held at rest with the string taut and the hanging parts vertical. Both particles are above a horizontal plane. The system is released from rest.<br><br><strong>(i)</strong> Find the tension in the string immediately after the particles are released.<br><br>After descending $6.125\\text{ m}$, $Q$ strikes the plane and is immediately brought to rest. It is given that $P$ does not reach the pulley in the subsequent motion.<br><br><strong>(ii)</strong> Find the total time that elapses between the instant when $Q$ strikes the plane and the instant when the string becomes taut again.",
    "steps": [
        "Let the acceleration of the system be $a$ and the tension be $T$. $Q$ ($3\\text{ kg}$) accelerates downwards and $P$ ($2\\text{ kg}$) accelerates upwards.<br><br>Applying Newton's second law ($F = ma$) to each particle:<br>For $P$ moving upwards:<br>$T - 2g = 2a$<br><br>For $Q$ moving downwards:<br>$3g - T = 3a$<br><br>Adding these equations:<br>\\begin{aligned} (T - 2g) + (3g - T) &= 2a + 3a \\cr g &= 5a \\cr a &= 0.2g \\end{aligned}<br><br>Using $g = 9.8\\text{ m\\,s}^{-2}$:<br>\\begin{aligned} a &= 0.2 \\times 9.8 \\cr a &= 1.96\\text{ m\\,s}^{-2} \\end{aligned}<br><br>Substitute $a = 1.96\\text{ m\\,s}^{-2}$ into the equation for $P$ to find the tension $T$:<br>\\begin{aligned} T - 2(9.8) &= 2(1.96) \\cr T - 19.6 &= 3.92 \\cr T &= 23.52\\text{ N} \\end{aligned}",
        "When $Q$ descends $6.125\\text{ m}$, both particles are moving with speed $v$.<br><br>Using the constant acceleration equation $v^2 = u^2 + 2as$ with $u = 0\\text{ m\\,s}^{-1}$:<br>\\begin{aligned} v^2 &= 0^2 + 2 \\times 1.96 \\times 6.125 \\cr v^2 &= 24.01 \\cr v &= \\sqrt{ 24.01 } \\cr v &= 4.9\\text{ m\\,s}^{-1} \\end{aligned}",
        "When $Q$ strikes the plane, it is brought to rest and the string goes slack. $P$ continues to move vertically upwards as a projectile under gravity with acceleration $a = -g = -9.8\\text{ m\\,s}^{-2}$ and initial velocity $u = 4.9\\text{ m\\,s}^{-1}$.<br><br>Let $t_{up}$ be the time taken for $P$ to reach its highest point, where its velocity is $0\\text{ m\\,s}^{-1}$:<br>\\begin{aligned} v &= u - gt_{up} \\cr 0 &= 4.9 - 9.8 t_{up} \\cr 9.8 t_{up} &= 4.9 \\cr t_{up} &= \\dfrac{ 4.9 }{ 9.8 } \\cr t_{up} &= 0.5\\text{ s} \\end{aligned}",
        "The string remains slack as $P$ rises to its highest point (taking $0.5\\text{ s}$) and then falls back down. Under gravity, the time taken for $P$ to fall back to its original height (where the string becomes taut again) is equal to the time taken to rise.<br><br>\\begin{aligned} \\text{Total Time} &= t_{up} \\text{ (rising)} + t_{down} \\text{ (falling)} \\cr &= 0.5 + 0.5 \\cr &= 1\\text{ s} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$T = 23.52\\text{ N}, \\text{time} = 0.50\\text{ s}$",
            "feedback": "The tension is correct, but $0.50\\text{ s}$ is only the time taken for $P$ to reach its maximum height. You must also include the time taken for $P$ to fall back down to the level where the string becomes taut again, which doubles the time."
        },
        {
            "ans": "$T = 19.60\\text{ N}, \\text{time} = 1.00\\text{ s}$",
            "feedback": "This tension is incorrect because it assumes $T = 2g = 19.6\\text{ N}$ (as if the system were in static equilibrium). Since the system is accelerating upwards, the tension must exceed the stationary weight ($T = 2(g + a) = 23.52\\text{ N}$)."
        },
        {
            "ans": "$T = 23.52\\text{ N}, \\text{time} = 1.25\\text{ s}$",
            "feedback": "This tension is correct, but the time of $1.25\\text{ s}$ is incorrect. This error may occur if you use an incorrect deceleration value instead of gravity ($g = 9.8\\text{ m\\,s}^{-2}$) for the projectile stage of the motion."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Symmetry of Projectile Motion",
        "content": "When a string goes slack, the rising particle acts as a simple vertical projectile. Due to the symmetry of free-fall motion under gravity, the time taken for the particle to rise to its peak is exactly equal to the time it takes to return to its launch height: $t_{\\text{total}} = 2 t_{\\text{up}}$. This symmetry makes finding the total time very direct."
    }
},
{
    "id": "012093",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Dynamics",
    "topic": "Connected Particles",
    "subtopic": [
        "Newton's Laws of Motion",
        "Inclined Planes",
        "Slack Strings"
    ],
    "img": false,
    "question": "<img src='images/Mechanics_pngs/012093.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br>A block $P$ of mass $2\\text{ kg}$ is held at rest on a smooth plane inclined at an angle of $30^\\circ$ to the horizontal. Block $P$ is connected by a light inextensible string passing over a smooth fixed pulley at the top of the incline to a hanging block $Q$ of mass $6\\text{ kg}$, which hangs vertically. The system is released from rest with the string taut.<br><br><strong>(i)</strong> Find the tension in the string immediately after the blocks are released.<br><br>After descending $1.6\\text{ m}$, $Q$ strikes a horizontal floor and is immediately brought to rest. It is given that $P$ does not reach the pulley.<br><br><strong>(ii)</strong> Find the total distance travelled by $P$ from the instant $Q$ strikes the floor to the instant the string becomes taut again.",
    "steps": [
        "Let the acceleration of the system be $a$ and the tension in the string be $T$. $Q$ ($6\\text{ kg}$) accelerates downwards and $P$ ($2\\text{ kg}$) accelerates up the plane.<br><br>Applying Newton's second law ($F = ma$) to each block:<br>For $Q$ moving downwards:<br>$6g - T = 6a$<br><br>For $P$ moving up the inclined plane, the component of gravity acting down the plane is $2g \\sin 30^\\circ$:<br>$T - 2g \\sin 30^\\circ = 2a$<br><br>Since $\\sin 30^\\circ = 0.5$:<br>$T - g = 2a$<br><br>Adding these two equations eliminates $T$:<br>\\begin{aligned} (6g - T) + (T - g) &= 6a + 2a \\cr 5g &= 8a \\cr a &= 0.625g \\end{aligned}<br><br>Using $g = 9.8\\text{ m\\,s}^{-2}$:<br>\\begin{aligned} a &= 0.625 \\times 9.8 \\cr a &= 6.125\\text{ m\\,s}^{-2} \\end{aligned}<br><br>Substitute $a = 6.125\\text{ m\\,s}^{-2}$ back into the equation for $P$:<br>\\begin{aligned} T - 9.8 &= 2(6.125) \\cr T - 9.8 &= 12.25 \\cr T &= 22.05\\text{ N} \\end{aligned}",
        "When $Q$ descends $1.6\\text{ m}$, $P$ moves $1.6\\text{ m}$ up the plane with acceleration $a = 6.125\\text{ m\\,s}^{-2}$.<br><br>Using $v^2 = u^2 + 2as$ with $u = 0\\text{ m\\,s}^{-1}$:<br>\\begin{aligned} v^2 &= 0^2 + 2 \\times 6.125 \\times 1.6 \\cr v^2 &= 19.6 \\cr v &= \\sqrt{ 19.6 }\\text{ m\\,s}^{-1} \\end{aligned}",
        "When $Q$ hits the floor and is brought to rest, the string becomes slack. The only force acting on $P$ parallel to the plane is its weight component pulling it down the plane ($2g \\sin 30^\\circ$).<br><br>Applying $F = ma$ to $P$ along the plane:<br>\\begin{aligned} -2g \\sin 30^\\circ &= 2 a_{\\text{slack}} \\cr a_{\\text{slack}} &= -g \\sin 30^\\circ \\cr &= -9.8 \\times 0.5 \\cr &= -4.9\\text{ m\\,s}^{-2} \\end{aligned}<br><br>Let $s_{up}$ be the distance $P$ travels further up the plane before coming to instantaneous rest ($v = 0$):<br>\\begin{aligned} 0^2 &= v^2 + 2 a_{\\text{slack}} s_{up} \\cr 0 &= 19.6 + 2(-4.9)s_{up} \\cr 9.8 s_{up} &= 19.6 \\cr s_{up} &= 2\\text{ m} \\end{aligned}",
        "Since the incline is smooth, $P$ will slide back down the plane with acceleration $g \\sin 30^\\circ = 4.9\\text{ m\\,s}^{-2}$. The string remains slack until $P$ returns to the position it was at when $Q$ struck the floor, which requires descending $2\\text{ m}$ back down.<br><br>The total distance travelled by $P$ while the string is slack is:<br>\\begin{aligned} \\text{Total Distance} &= s_{up} \\text{ (upwards)} + s_{down} \\text{ (downwards)} \\cr &= 2 + 2 \\cr &= 4\\text{ m} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$T = 22.05\\text{ N}, \\text{distance} = 2.00\\text{ m}$",
            "feedback": "The tension is correct, but $2.00\\text{ m}$ is only the distance $P$ travels up the incline after the string becomes slack. Since the string is slack during both the ascent and the return descent, you must double this value to find the total distance of $4.00\\text{ m}$."
        },
        {
            "ans": "$T = 39.20\\text{ N}, \\text{distance} = 4.00\\text{ m}$",
            "feedback": "A tension of $39.20\\text{ N}$ is incorrect; this error arises if you fail to resolve the gravity component of block $P$ on the inclined plane (using $2g = 19.6\\text{ N}$ instead of $2g\\sin 30^\\circ = 9.8\\text{ N}$)."
        },
        {
            "ans": "$T = 22.05\\text{ N}, \\text{distance} = 3.60\\text{ m}$",
            "feedback": "The tension is correct, but the distance of $3.60\\text{ m}$ is incorrect. This error can happen if you add the initial $1.6\\text{ m}$ of motion to the $2.0\\text{ m}$ of slack upward motion. The question asks for the distance travelled only <strong>after</strong> the instant $Q$ strikes the floor."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Deceleration on an Incline",
        "content": "Notice that once the string goes slack, the rising block $P$ is no longer connected to $Q$, so its acceleration is determined solely by the forces acting on $P$. On a smooth inclined plane of angle $\\theta$, this acceleration is always $-g \\sin \\theta$ regardless of $P$'s mass, because mass cancels out on both sides of $F = ma$ ($m a_{\\text{slack}} = -m g \\sin\\theta$)."
    }
},
{
    "id": "012094",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Dynamics",
    "topic": "Connected Particles",
    "subtopic": [
        "Newton's Laws of Motion",
        "Rough Inclined Planes",
        "Friction",
        "Slack Strings"
    ],
    "img": false,
    "question": "<img src='images/Mechanics_pngs/012094.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br>A block $P$ of mass $5\\text{ kg}$ lies on a rough plane inclined at an angle $\\theta$ to the horizontal, where $\\sin\\theta = 0.6$ and $\\cos\\theta = 0.8$. The coefficient of friction between $P$ and the plane is $0.25$. Block $P$ is connected by a light inextensible string passing over a smooth fixed pulley at the top of the incline to a hanging block $Q$ of mass $5\\text{ kg}$. The system is released from rest with the string taut and $Q$ hanging vertically.<br><br><strong>(i)</strong> Find the tension in the string immediately after the blocks are released.<br><br>After descending $10\\text{ m}$, $Q$ strikes a horizontal platform and is immediately brought to rest. It is given that $P$ does not reach the pulley.<br><br><strong>(ii)</strong> Find the total distance travelled by $P$ between the instant $Q$ strikes the platform and the instant the string becomes taut again.",
    "steps": [
        "First, find the normal reaction force $R$ acting on $P$. Since there is no acceleration perpendicular to the incline:<br>\\begin{aligned} R &= m_P g \\cos\\theta \\cr R &= 5 \\times 9.8 \\times 0.8 \\cr R &= 39.2\\text{ N} \\end{aligned}<br><br>The maximum frictional force $F$ opposing $P$'s upward motion is:<br>\\begin{aligned} F &= \\mu R \\cr F &= 0.25 \\times 39.2 \\cr F &= 9.8\\text{ N} \\end{aligned}",
        "Let the acceleration of the system be $a$ and the tension be $T$. $Q$ accelerates downwards and $P$ accelerates up the plane, so friction $F$ acts down the plane.<br><br>Applying Newton's second law ($F = ma$):<br>For $Q$ moving downwards:<br>$5g - T = 5a$<br><br>For $P$ moving up the inclined plane:<br>$T - 5g \\sin\\theta - F = 5a$<br><br>Since $\\sin\\theta = 0.6$ and $F = 9.8\\text{ N}$:<br>\\begin{aligned} T - 5(9.8)(0.6) - 9.8 &= 5a \\cr T - 29.4 - 9.8 &= 5a \\cr T - 39.2 &= 5a \\end{aligned}<br><br>Adding the two equations eliminates $T$:<br>\\begin{aligned} (5g - T) + (T - 39.2) &= 5a + 5a \\cr 49 - 39.2 &= 10a \\cr 9.8 &= 10a \\cr a &= 0.98\\text{ m\\,s}^{-2} \\end{aligned}<br><br>Substitute $a = 0.98\\text{ m\\,s}^{-2}$ into the equation for $Q$ to find the tension $T$:<br>\\begin{aligned} 5(9.8) - T &= 5(0.98) \\cr 49 - T &= 4.9 \\cr T &= 44.1\\text{ N} \\end{aligned}",
        "Using $v^2 = u^2 + 2as$ with $u = 0\\text{ m\\,s}^{-1}$ and $s = 10\\text{ m}$:<br>\\begin{aligned} v^2 &= 0^2 + 2 \\times 0.98 \\times 10 \\cr v^2 &= 19.6 \\cr v &= \\sqrt{ 19.6 }\\text{ m\\,s}^{-1} \\end{aligned}",
        "When $Q$ strikes the platform and stops, the string goes slack. $P$ continues moving up the plane. Both the component of gravity down the plane ($5g \\sin\\theta$) and the friction force ($F$) now act as retarding forces.<br><br>Applying Newton's second law to $P$ along the plane:<br>\\begin{aligned} -5g \\sin\\theta - F &= 5 a_{\\text{slack}} \\cr -29.4 - 9.8 &= 5 a_{\\text{slack}} \\cr -39.2 &= 5 a_{\\text{slack}} \\cr a_{\\text{slack}} &= -7.84\\text{ m\\,s}^{-2} \\end{aligned}<br><br>Let $s_{up}$ be the distance $P$ travels up the incline before coming to rest ($v = 0$):<br>\\begin{aligned} 0^2 &= v^2 + 2 a_{\\text{slack}} s_{up} \\cr 0 &= 19.6 + 2(-7.84)s_{up} \\cr 15.68 s_{up} &= 19.6 \\cr s_{up} &= \\dfrac{ 19.6 }{ 15.68 } \\cr s_{up} &= 1.25\\text{ m} \\end{aligned}",
        "To confirm $P$ slides back down once it comes to rest, compare the component of gravity pulling it down the plane ($5g\\sin\\theta = 29.4\\text{ N}$) to the maximum static friction force ($F = 9.8\\text{ N}$). Since $29.4\\text{ N} > 9.8\\text{ N}$, $P$ will slide back down.<br><br>The string remains slack until $P$ returns to the position where $Q$ first struck the platform, which requires sliding $1.25\\text{ m}$ back down.<br><br>The total distance travelled by $P$ is:<br>\\begin{aligned} \\text{Total Distance} &= s_{up} \\text{ (upwards)} + s_{down} \\text{ (downwards)} \\cr &= 1.25 + 1.25 \\cr &= 2.5\\text{ m} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$T = 44.10\\text{ N}, \\text{distance} = 1.25\\text{ m}$",
            "feedback": "The tension is correct, but $1.25\\text{ m}$ is only the upward distance $P$ slides after the string becomes slack. Since the block must slide back down to the same reference height before the string becomes taut again, you must double this value to find the total distance of $2.5\\text{ m}$."
        },
        {
            "ans": "$T = 49.00\\text{ N}, \\text{distance} = 2.50\\text{ m}$",
            "feedback": "A tension of $49.00\\text{ N}$ is incorrect; this is equal to the weight of $Q$ ($5g$), which would only be true if the system were static. Because the system is accelerating, you must calculate the tension using $T = 5(g - a) = 44.10\\text{ N}$."
        },
        {
            "ans": "$T = 44.10\\text{ N}, \\text{distance} = 1.00\\text{ m}$",
            "feedback": "The tension is correct, but a total distance of $1.00\\text{ m}$ is incorrect. This error may arise if you incorrectly calculate the deceleration during the slack phase, perhaps by forgetting to include either the friction force or the component of gravity down the plane."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Friction Reversal",
        "content": "Always verify that the particle actually slides back down! On a rough slope, friction always opposes the direction of motion. While moving up, friction acts down the slope. When the block stops and tries to slide back down, friction acts up the slope. The block will only slide back down if the gravitational component down the slope is strictly greater than the maximum static friction: $m g \\sin\\theta > \\mu m g \\cos\\theta$ (which simplifies to $\\tan\\theta > \\mu$)."
    }
},
{
    "id": "012095",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Dynamics",
    "topic": "Connected Particles",
    "subtopic": [
        "Newton's Laws of Motion",
        "Scale Pan Problems",
        "Slack Strings"
    ],
    "img": false,
    "question": "<img src='images/Mechanics_pngs/012095.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br>A scale pan $P$ of mass $1\\text{ kg}$ contains a block $B$ of mass $3\\text{ kg}$. The scale pan is connected by a light inextensible string passing over a smooth fixed pulley to a hanging mass $Q$ of mass $6\\text{ kg}$. The system is held at rest with the string taut and the hanging parts vertical. The system is released from rest.<br><br><strong>(i)</strong> Find the magnitude of the force exerted by the block $B$ on the scale pan $P$ immediately after release.<br><br>After descending $2.5\\text{ m}$, $Q$ strikes a horizontal floor and is immediately brought to rest. It is given that $P$ does not reach the pulley in the subsequent motion.<br><br><strong>(ii)</strong> Find the total distance travelled by the scale pan $P$ between the instant $Q$ strikes the floor and the instant the string becomes taut again.",
    "steps": [
        "The total mass on the left side of the pulley is $m_{\\text{left}} = m_P + m_B = 1 + 3 = 4\\text{ kg}$. The mass on the right side is $m_Q = 6\\text{ kg}$. Since $6\\text{ kg} > 4\\text{ kg}$, $Q$ accelerates downwards and the scale pan (with block $B$) accelerates upwards with acceleration $a$.<br><br>Applying Newton's second law ($F = ma$) to the combined left mass and right mass:<br>For the combined scale pan and block ($4\\text{ kg}$) moving upwards:<br>$T - 4g = 4a$<br><br>For $Q$ ($6\\text{ kg}$) moving downwards:<br>$6g - T = 6a$<br><br>Adding these equations:<br>\\begin{aligned} (T - 4g) + (6g - T) &= 4a + 6a \\cr 2g &= 10a \\cr a &= 0.2g \\end{aligned}<br><br>Using $g = 9.8\\text{ m\\,s}^{-2}$:<br>\\begin{aligned} a &= 0.2 \\times 9.8 \\cr a &= 1.96\\text{ m\\,s}^{-2} \\end{aligned}",
        "To find the force exerted by block $B$ on the scale pan, we consider the forces acting only on block $B$ ($3\\text{ kg}$). Block $B$ is accelerating upwards at $a = 1.96\\text{ m\\,s}^{-2}$.<br><br>The forces on $B$ are its weight $3g$ downwards and the normal reaction force $R$ upwards from the scale pan:<br>\\begin{aligned} R - m_B g &= m_B a \\cr R - 3(9.8) &= 3(1.96) \\cr R - 29.4 &= 5.88 \\cr R &= 35.28\\text{ N} \\end{aligned}<br><br>By Newton's third law, the force exerted by block $B$ on the scale pan has the same magnitude, $35.28\\text{ N}$.",
        "When $Q$ descends $2.5\\text{ m}$, the scale pan has ascended $2.5\\text{ m}$ with acceleration $a = 1.96\\text{ m\\,s}^{-2}$.<br><br>Using $v^2 = u^2 + 2as$ with $u = 0\\text{ m\\,s}^{-1}$:<br>\\begin{aligned} v^2 &= 0^2 + 2 \\times 1.96 \\times 2.5 \\cr v^2 &= 9.8\\text{ m}^2\\text{\\,s}^{-2} \\end{aligned}",
        "When $Q$ strikes the floor, the string goes slack. The scale pan $P$ (with block $B$ resting inside) continues to move vertically upwards as a projectile under gravity with acceleration $a = -g = -9.8\\text{ m\\,s}^{-2}$. (Since both scale pan $P$ and block $B$ decelerate at $-g$, they remain in light contact but the reaction force $R$ drops to zero).<br><br>Let $s_{up}$ be the additional upward distance the scale pan travels before coming to rest ($v = 0$):<br>\\begin{aligned} 0^2 &= v^2 - 2g s_{up} \\cr 0 &= 9.8 - 2(9.8)s_{up} \\cr 19.6 s_{up} &= 9.8 \\cr s_{up} &= \\dfrac{ 9.8 }{ 19.6 } \\cr s_{up} &= 0.5\\text{ m} \\end{aligned}",
        "The string remains slack as the scale pan rises $0.5\\text{ m}$ to its peak and then falls $0.5\\text{ m}$ back to its height at the moment of impact. Once it returns to this height, the string becomes taut again.<br><br>The total distance travelled by the scale pan is:<br>\\begin{aligned} \\text{Total Distance} &= s_{up} \\text{ (upwards)} + s_{down} \\text{ (downwards)} \\cr &= 0.5 + 0.5 \\cr &= 1\\text{ m} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$R = 35.28\\text{ N}, \\text{distance} = 0.50\\text{ m}$",
            "feedback": "The contact force of $35.28\\text{ N}$ is correct, but $0.50\\text{ m}$ is only the upward distance the scale pan travels after the string goes slack. Since the string remains slack until the scale pan returns to the level of impact, you must also include the downward return journey of $0.50\\text{ m}$ to find the total distance of $1.00\\text{ m}$."
        },
        {
            "ans": "$R = 29.40\\text{ N}, \\text{distance} = 1.00\\text{ m}$",
            "feedback": "A contact force of $29.40\\text{ N}$ is incorrect because it is simply the stationary weight of the block ($3g = 29.4\\text{ N}$). Since the block is accelerating upwards, the normal reaction force must exceed its stationary weight ($R = m_B(g+a) = 35.28\\text{ N}$)."
        },
        {
            "ans": "$R = 35.28\\text{ N}, \\text{distance} = 3.00\\text{ m}$",
            "feedback": "The reaction force is correct, but the distance of $3.00\\text{ m}$ is incorrect. This error may occur if you add the initial $2.5\\text{ m}$ ascent of the scale pan to the $0.5\\text{ m}$ slack upward motion. The question asks only for the distance travelled <strong>after</strong> $Q$ strikes the floor."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Internal vs. External Forces",
        "content": "When analyzing connected systems with composite masses (such as a scale pan containing a block), remember: to find the acceleration of the entire system, treat the scale pan and block as a single external mass ($1 + 3 = 4\\text{ kg}$). Only treat them as separate bodies (using a free-body diagram for just the block) when you need to calculate the internal reaction/contact force $R$ between them."
    }
}
    

];