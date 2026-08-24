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
}
    

];