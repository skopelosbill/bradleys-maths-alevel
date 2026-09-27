window.ALEVEL_QUESTIONS = [
{
    "id": "012201",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Constant Acceleration",
    "subtopic": [
        "Multi-stage rectilinear motion",
        "Reversing direction",
        "Unit conversions"
    ],
    "img": false,
    "question": "A car travels along a straight horizontal road. Points $A$ and $B$ lie on the road.<br><br>As the car passes point $A$, it is travelling with a constant speed of $18\\text{ m s}^{-1}$. It continues at this constant speed for $2.5\\text{ minutes}$ before a uniform deceleration is applied for $15\\text{ seconds}$, bringing the car to rest at point $B$.<br><br><strong>(a)</strong> Find the distance $AB$.<br><br>The car then reverses from rest with a constant acceleration of $2.5\\text{ m s}^{-2}$ for $6\\text{ seconds}$, followed immediately by a constant deceleration of $1.5\\text{ m s}^{-2}$, coming to rest at point $C$, which lies between $A$ and $B$.<br><br><strong>(b)</strong> Calculate the total time taken for the car to reverse from $B$ to $C$.<br><br><strong>(c)</strong> Find the distance $AC$.",
    "steps": [
        "<strong>(a) Distance $AB$:</strong><br><br>Convert cruising time to seconds: $2.5\\text{ min} = 150\\text{ s}$.<br><br>Distance while cruising:\\begin{aligned} s_1 &= 18 \\times 150 \\cr &= 2700\\text{ m} \\end{aligned}<br>Distance while decelerating ($u = 18$, $v = 0$, $t = 15$):\\begin{aligned} s_2 &= \\dfrac{18 + 0}{2} \\times 15 \\cr &= 9 \\times 15 \\cr &= 135\\text{ m} \\end{aligned}<br>Total distance:\\begin{aligned} AB &= s_1 + s_2 \\cr &= 2700 + 135 \\cr &= 2835\\text{ m} \\end{aligned}",
        "<strong>(b) Time to reverse from $B$ to $C$:</strong><br><br>Stage 1 of reverse ($u = 0$, $a = 2.5\\text{ m s}^{-2}$, $t_1 = 6\\text{ s}$):\\begin{aligned} v_1 &= 0 + 2.5(6) \\cr &= 15\\text{ m s}^{-1} \\end{aligned}<br>Stage 2 of reverse ($u = 15\\text{ m s}^{-1}$, $v = 0$, $a = -1.5\\text{ m s}^{-2}$):\\begin{aligned} 0 &= 15 - 1.5t_2 \\cr 1.5t_2 &= 15 \\cr t_2 &= 10\\text{ s} \\end{aligned}<br>Total reverse time:\\begin{aligned} t_{\\text{total}} &= 6 + 10 \\cr &= 16\\text{ s} \\end{aligned}",
        "<strong>(c) Distance $AC$:</strong><br><br>Reverse distance in Stage 1:\\begin{aligned} s_3 &= \\dfrac{1}{2}(2.5)(6^2) \\cr &= 45\\text{ m} \\end{aligned}<br>Reverse distance in Stage 2:\\begin{aligned} s_4 &= \\dfrac{15 + 0}{2} \\times 10 \\cr &= 75\\text{ m} \\end{aligned}<br>Total reverse distance $BC$:\\begin{aligned} BC &= 45 + 75 \\cr &= 120\\text{ m} \\end{aligned}<br>Distance $AC$:\\begin{aligned} AC &= AB - BC \\cr &= 2835 - 120 \\cr &= 2715\\text{ m} \\end{aligned}",
        "Final Answer: (a) $AB = 2835\\text{ m}$, (b) $16\\text{ s}$, (c) $AC = 2715\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $AB = 2835\\text{ m}$, (b) $16\\text{ s}$, (c) $AC = 2955\\text{ m}$",
            "feedback": "Because point $C$ lies between $A$ and $B$, the car has reversed back towards $A$. You must subtract the reverse distance: $AC = AB - BC = 2835 - 120 = 2715\\text{ m}$."
        },
        {
            "ans": "(a) $AB = 180\\text{ m}$, (b) $16\\text{ s}$, (c) $AC = 2715\\text{ m}$",
            "feedback": "Remember to convert $2.5\\text{ minutes}$ into seconds ($150\\text{ s}$). Multiplying $18$ by $2.5$ gives only $45\\text{ m}$ for the cruising distance."
        },
        {
            "ans": "(a) $AB = 2835\\text{ m}$, (b) $10\\text{ s}$, (c) $AC = 2715\\text{ m}$",
            "feedback": "The reverse journey consists of two stages: $6\\text{ s}$ of acceleration plus $10\\text{ s}$ of deceleration, giving a total reverse time of $16\\text{ s}$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Convert Minutes to Seconds Immediately",
        "content": "Always convert time units into standard SI seconds before beginning calculations ($2.5\\text{ min} = 150\\text{ s}$). Mixing minutes with speeds given in $\\text{m s}^{-1}$ is one of the most common early calculation errors in Kinematics."
    }
},
{
    "id": "012202",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Constant Acceleration",
    "subtopic": [
        "Overtaking problems",
        "Simultaneous motion",
        "Velocity caps"
    ],
    "img": false,
    "question": "A lorry $P$ travels along a straight horizontal road at a constant speed of $20\\text{ m s}^{-1}$. At the instant lorry $P$ passes a stationary police car $Q$ at point $A$, the police car immediately sets off in pursuit.<br><br>Police car $Q$ accelerates uniformly from rest at $2.5\\text{ m s}^{-2}$ until it reaches its maximum speed of $30\\text{ m s}^{-1}$, which it then maintains.<br><br><strong>(a)</strong> Find the time taken for police car $Q$ to reach its maximum speed, and calculate the distance it travels during this acceleration phase.<br><br><strong>(b)</strong> Calculate the total time taken from the instant $P$ passes $A$ for police car $Q$ to draw level with lorry $P$.<br><br><strong>(c)</strong> Find the distance from $A$ at which the police car draws level with the lorry.",
    "steps": [
        "<strong>(a) Acceleration phase of police car $Q$:</strong><br><br>Using $v = u + at$ with $u = 0$, $v = 30\\text{ m s}^{-1}$, $a = 2.5\\text{ m s}^{-2}$:\\begin{aligned} 30 &= 0 + 2.5t_1 \\cr t_1 &= \\dfrac{30}{2.5} \\cr t_1 &= 12\\text{ s} \\end{aligned}<br>Distance travelled during acceleration:\\begin{aligned} s_1 &= \\dfrac{1}{2}(2.5)(12^2) \\cr &= 180\\text{ m} \\end{aligned}",
        "<strong>(b) Total pursuit time:</strong><br><br>Let $t$ be the total time elapsed from the start ($t > 12\\text{ s}$).<br><br>Distance travelled by lorry $P$:\\begin{aligned} s_P = 20t \\end{aligned}<br>Distance travelled by police car $Q$:\\begin{aligned} s_Q &= 180 + 30(t - 12) \\cr &= 180 + 30t - 360 \\cr &= 30t - 180 \\end{aligned}<br>When $Q$ catches $P$, $s_Q = s_P$:\\begin{aligned} &30t - 180 = 20t \\cr &10t = 180 \\cr &t = 18\\text{ s} \\end{aligned}",
        "<strong>(c) Distance from $A$:</strong><br><br>Using the distance equation for lorry $P$:\\begin{aligned} s &= 20(18) \\cr &= 360\\text{ m} \\end{aligned}",
        "Final Answer: (a) $t = 12\\text{ s}$, $s = 180\\text{ m}$, (b) $18\\text{ s}$, (c) $360\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $t = 12\\text{ s}$, $s = 180\\text{ m}$, (b) $16\\text{ s}$, (c) $320\\text{ m}$",
            "feedback": "Check the pursuit equation. The police car only travels at top speed for $(t - 12)$ seconds. Equating $20t = 30t - 180$ gives $t = 18\\text{ s}$, not $16\\text{ s}$."
        },
        {
            "ans": "(a) $t = 12\\text{ s}$, $s = 360\\text{ m}$, (b) $18\\text{ s}$, (c) $360\\text{ m}$",
            "feedback": "Remember the factor of $\\frac{1}{2}$ in $s = \\frac{1}{2}at^2$. During the acceleration phase, distance is $\\frac{1}{2}(2.5)(144) = 180\\text{ m}$, not $360\\text{ m}$."
        },
        {
            "ans": "(a) $t = 12\\text{ s}$, $s = 180\\text{ m}$, (b) $6\\text{ s}$, (c) $360\\text{ m}$",
            "feedback": "The value $6\\text{ s}$ is only the time spent cruising at top speed after accelerating. You must add the initial $12\\text{ s}$ of acceleration to find the total time ($18\\text{ s}$)."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Relative Motion During the Cruise Phase",
        "content": "At $t = 12\\text{ s}$, the lorry is at $240\\text{ m}$ and the police car is at $180\\text{ m}$—a gap of $60\\text{ m}$. With the police car moving at $30\\text{ m s}^{-1}$ and the lorry at $20\\text{ m s}^{-1}$, the relative closing speed is $10\\text{ m s}^{-1}$. Closing the $60\\text{ m}$ gap takes $60 / 10 = 6\\text{ s}$, giving total time $12 + 6 = 18\\text{ s}$."
    }
},
{
    "id": "012203",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Constant Acceleration",
    "subtopic": [
        "Three-stage journey",
        "Speed restriction",
        "Trapezoidal travel"
    ],
    "img": false,
    "question": "A passenger train travels between two stations, $X$ and $Y$, which are situated $4.2\\text{ km}$ apart on a straight horizontal track.<br><br>The train accelerates uniformly from rest at $0.8\\text{ m s}^{-2}$ until it reaches its cruising speed of $24\\text{ m s}^{-1}$. It maintains this cruising speed for $T$ seconds before decelerating uniformly to rest at $1.2\\text{ m s}^{-2}$ as it arrives at station $Y$.<br><br><strong>(a)</strong> Find the time taken for the acceleration phase and the time taken for the deceleration phase.<br><br><strong>(b)</strong> Calculate the distance travelled by the train while accelerating and the distance travelled while decelerating.<br><br><strong>(c)</strong> Find the cruising time $T$, and hence find the total time taken for the journey from $X$ to $Y$.",
    "steps": [
        "<strong>(a) Acceleration and deceleration times:</strong><br><br>Acceleration phase ($u = 0$, $v = 24$, $a = 0.8$):\\begin{aligned} t_a &= \\dfrac{24}{0.8} \\cr &= 30\\text{ s} \\end{aligned}<br>Deceleration phase ($u = 24$, $v = 0$, $a = -1.2$):\\begin{aligned} t_d &= \\dfrac{24}{1.2} \\cr &= 20\\text{ s} \\end{aligned}",
        "<strong>(b) Distances while accelerating and decelerating:</strong><br><br>Distance while accelerating:\\begin{aligned} s_a &= \\dfrac{1}{2}(24)(30) \\cr &= 360\\text{ m} \\end{aligned}<br>Distance while decelerating:\\begin{aligned} s_d &= \\dfrac{1}{2}(24)(20) \\cr &= 240\\text{ m} \\end{aligned}",
        "<strong>(c) Cruising time $T$ and total time:</strong><br><br>Convert total distance: $4.2\\text{ km} = 4200\\text{ m}$.<br><br>Distance travelled while cruising:\\begin{aligned} s_c &= 4200 - (360 + 240) \\cr &= 4200 - 600 \\cr &= 3600\\text{ m} \\end{aligned}<br>Cruising time $T$ at constant speed $24\\text{ m s}^{-1}$:\\begin{aligned} T &= \\dfrac{3600}{24} \\cr &= 150\\text{ s} \\end{aligned}<br>Total journey time:\\begin{aligned} t_{\\text{total}} &= 30 + 150 + 20 \\cr &= 200\\text{ s} \\end{aligned}",
        "Final Answer: (a) $t_a = 30\\text{ s}$, $t_d = 20\\text{ s}$, (b) $s_a = 360\\text{ m}$, $s_d = 240\\text{ m}$, (c) $T = 150\\text{ s}$, $t_{\\text{total}} = 200\\text{ s}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $t_a = 30\\text{ s}$, $t_d = 20\\text{ s}$, (b) $s_a = 360\\text{ m}$, $s_d = 240\\text{ m}$, (c) $T = 175\\text{ s}$, $t_{\\text{total}} = 225\\text{ s}$",
            "feedback": "Remember to subtract the acceleration and deceleration distances from the total distance before finding $T$. Dividing $4200\\text{ m}$ directly by $24$ yields an incorrect cruising time."
        },
        {
            "ans": "(a) $t_a = 19.2\\text{ s}$, $t_d = 28.8\\text{ s}$, (b) $s_a = 360\\text{ m}$, $s_d = 240\\text{ m}$, (c) $T = 150\\text{ s}$, $t_{\\text{total}} = 200\\text{ s}$",
            "feedback": "To find time from acceleration, divide speed by acceleration: $t = v / a = 24 / 0.8 = 30\\text{ s}$. Multiplying speed by acceleration gives incorrect times."
        },
        {
            "ans": "(a) $t_a = 30\\text{ s}$, $t_d = 20\\text{ s}$, (b) $s_a = 720\\text{ m}$, $s_d = 480\\text{ m}$, (c) $T = 150\\text{ s}$, $t_{\\text{total}} = 200\\text{ s}$",
            "feedback": "Average speed during uniform acceleration from rest is $\\frac{v}{2} = 12\\text{ m s}^{-1}$. Using the full peak speed of $24\\text{ m s}^{-1}$ doubles the distance."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Trapezium Geometry for Three-Stage Journeys",
        "content": "For journeys consisting of uniform acceleration, constant cruise, and uniform braking, sketching a velocity-time trapezium gives an immediate overview. The area of the two end triangles is simply $\\frac{1}{2}v(t_a + t_d)$, leaving the rectangular core for the cruise phase."
    }
},
{
    "id": "012204",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Constant Acceleration",
    "subtopic": [
        "Successive intervals",
        "Simultaneous equations",
        "Initial rest position"
    ],
    "img": false,
    "question": "A particle moves along a straight line with constant acceleration $a\\text{ m s}^{-2}$. The particle passes three consecutive points, $P$, $Q$, and $R$, on the line, where $PQ = 24\\text{ m}$ and $QR = 40\\text{ m}$.<br><br>The time taken for the particle to travel from $P$ to $Q$ is $2\\text{ seconds}$, and the time taken to travel from $Q$ to $R$ is also $2\\text{ seconds}$.<br><br><strong>(a)</strong> Show that the acceleration $a$ of the particle is $4\\text{ m s}^{-2}$.<br><br><strong>(b)</strong> Find the speed of the particle as it passes point $P$.<br><br><strong>(c)</strong> Given that the particle started from rest at a point $O$ on the line upstream of $P$, find the distance $OP$.",
    "steps": [
        "<strong>(a) Show that $a = 4\\text{ m s}^{-2}$:</strong><br><br>Let $u$ be the velocity at point $P$.<br><br>For interval $P \\to Q$ ($s = 24\\text{ m}$, $t = 2\\text{ s}$):\\begin{aligned} &s = ut + \\dfrac{1}{2}at^2 \\cr &24 = 2u + \\dfrac{1}{2}a(2^2) \\cr &24 = 2u + 2a \\cr &12 = u + a \\quad \\text{--- (1)} \\end{aligned}<br>For total interval $P \\to R$ ($s = 24 + 40 = 64\\text{ m}$, $t = 2 + 2 = 4\\text{ s}$):\\begin{aligned} &64 = 4u + \\dfrac{1}{2}a(4^2) \\cr &64 = 4u + 8a \\cr &16 = u + 2a \\quad \\text{--- (2)} \\end{aligned}<br>Subtracting (1) from (2):\\begin{aligned} a = 4\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Velocity at $P$:</strong><br><br>Substitute $a = 4\\text{ m s}^{-2}$ into equation (1):\\begin{aligned} u &= 12 - 4 \\cr &= 8\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(c) Distance $OP$:</strong><br><br>For motion from rest at $O$ ($u_0 = 0$) to point $P$ ($v = 8\\text{ m s}^{-1}$):\\begin{aligned} &v^2 = u_0^2 + 2as \\cr &8^2 = 0 + 2(4)(OP) \\cr &64 = 8(OP) \\cr &OP = \\dfrac{64}{8} \\cr &OP = 8\\text{ m} \\end{aligned}",
        "Final Answer: (a) $a = 4\\text{ m s}^{-2}$, (b) $8\\text{ m s}^{-1}$, (c) $OP = 8\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $a = 4\\text{ m s}^{-2}$, (b) $8\\text{ m s}^{-1}$, (c) $OP = 16\\text{ m}$",
            "feedback": "Using $v^2 = u^2 + 2as$, $8^2 = 2(4)(OP) \\implies 64 = 8(OP)$, which gives $OP = 8\\text{ m}$, not $16\\text{ m}$."
        },
        {
            "ans": "(a) $a = 4\\text{ m s}^{-2}$, (b) $12\\text{ m s}^{-1}$, (c) $OP = 8\\text{ m}$",
            "feedback": "Equation (1) gives $u + a = 12$. With $a = 4\\text{ m s}^{-2}$, $u = 12 - 4 = 8\\text{ m s}^{-1}$, not $12\\text{ m s}^{-1}$."
        },
        {
            "ans": "(a) $a = 4\\text{ m s}^{-2}$, (b) $8\\text{ m s}^{-1}$, (c) $OP = 4\\text{ m}$",
            "feedback": "Check the denominator when solving for distance: divide $64$ by $2a = 8$, giving $OP = 8\\text{ m}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Measure from a Common Start Point",
        "content": "When dealing with consecutive intervals, setting up equations for $P \\to Q$ and then $P \\to R$ is much cleaner than doing $Q \\to R$. Measuring from the common origin $P$ ensures both equations share the exact same initial velocity $u$."
    }
},
{
    "id": "012205",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Constant Acceleration",
    "subtopic": [
        "Vertical motion under gravity",
        "Engine burnout",
        "Multi-stage vertical flight"
    ],
    "img": false,
    "question": "A model rocket is launched vertically upwards from rest from the ground. Its engine produces a constant upward acceleration of $6.0\\text{ m s}^{-2}$ for $5.0\\text{ seconds}$, at which point the engine cuts out.<br><br>The rocket continues to move vertically upwards under gravity alone until it reaches its highest point, after which it falls freely back to the ground.<br><em>[Take $g = 9.8\\text{ m s}^{-2}$. Air resistance may be neglected.]</em><br><br><strong>(a)</strong> Find the speed of the rocket and its height above the ground at the instant the engine cuts out.<br><br><strong>(b)</strong> Calculate the maximum height reached by the rocket above the ground, giving your answer to $3$ significant figures.<br><br><strong>(c)</strong> Calculate the total time elapsed from launch until the rocket returns to the ground, giving your answer to $3$ significant figures.",
    "steps": [
        "<strong>(a) Engine burn phase ($0 \\le t \\le 5\\text{ s}$):</strong><br><br>Speed at engine cut out:\\begin{aligned} v_1 &= 0 + 6.0(5.0) \\cr &= 30\\text{ m s}^{-1} \\end{aligned}<br>Height at cut out:\\begin{aligned} h_1 &= \\dfrac{1}{2}(6.0)(5.0^2) \\cr &= 75\\text{ m} \\end{aligned}",
        "<strong>(b) Maximum height:</strong><br><br>During free flight to highest point ($u = 30$, $v = 0$, $a = -9.8$):\\begin{aligned} &v^2 = u^2 + 2as_2 \\cr &0 = 30^2 - 2(9.8)s_2 \\cr &19.6s_2 = 900 \\cr &s_2 = \\dfrac{900}{19.6} \\cr &s_2 \\approx 45.918\\text{ m} \\end{aligned}<br>Maximum height above ground:\\begin{aligned} H_{\\max} &= 75 + 45.918 \\cr &= 120.918 \\cr &\\approx 121\\text{ m} \\end{aligned}",
        "<strong>(c) Total flight time:</strong><br><br>Time from cut out to highest point:\\begin{aligned} t_2 &= \\dfrac{30}{9.8} \\cr &\\approx 3.061\\text{ s} \\end{aligned}<br>Time to fall from highest point ($120.918\\text{ m}$) to ground:\\begin{aligned} &H_{\\max} = \\dfrac{1}{2}gt_3^2 \\cr &120.918 = 4.9t_3^2 \\cr &t_3^2 = \\dfrac{120.918}{4.9} \\cr &t_3 = \\sqrt{24.677} \\cr &t_3 \\approx 4.968\\text{ s} \\end{aligned}<br>Total time:\\begin{aligned} t_{\\text{total}} &= 5.0 + 3.061 + 4.968 \\cr &= 13.029 \\cr &\\approx 13.0\\text{ s} \\end{aligned}",
        "Final Answer: (a) $30\\text{ m s}^{-1}$, $75\\text{ m}$, (b) $121\\text{ m}$, (c) $13.0\\text{ s}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $30\\text{ m s}^{-1}$, $75\\text{ m}$, (b) $45.9\\text{ m}$, (c) $13.0\\text{ s}$",
            "feedback": "The value $45.9\\text{ m}$ is only the height gained after the engine cuts out. You must add the initial $75\\text{ m}$ gained during powered flight to get the maximum height ($121\\text{ m}$)."
        },
        {
            "ans": "(a) $30\\text{ m s}^{-1}$, (b) $75\\text{ m}$, (b) $121\\text{ m}$, (c) $8.06\\text{ s}$",
            "feedback": "The value $8.06\\text{ s}$ is only the time to reach maximum height ($5.0 + 3.06\\text{ s}$). You must also add the time taken to fall back to the ground ($4.97\\text{ s}$)."
        },
        {
            "ans": "(a) $30\\text{ m s}^{-1}$, $150\\text{ m}$, (b) $121\\text{ m}$, (c) $13.0\\text{ s}$",
            "feedback": "Remember the factor of $\\frac{1}{2}$ in $s = \\frac{1}{2}at^2$. During powered flight, distance is $\\frac{1}{2}(6)(25) = 75\\text{ m}$, not $150\\text{ m}$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Acceleration Changes Abruptly at Burnout",
        "content": "Engine burnout divides the problem into two completely distinct physical regimes. During the first $5\\text{ s}$, the rocket accelerates upwards under its motor ($+6.0\\text{ m s}^{-2}$). The moment fuel runs out, acceleration instantly becomes $-9.8\\text{ m s}^{-2}$ downwards, even though the rocket continues climbing upwards due to its inertia."
    }
}
];