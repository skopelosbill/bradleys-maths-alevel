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
}
    

];