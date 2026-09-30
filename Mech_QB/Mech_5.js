window.ALEVEL_QUESTIONS = [
{
    "id": "012201",
    "group_id": "012201",
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
            "feedback": "Because point $C$ lies between $A$ and $B$, the car has reversed back towards $A$. You must subtract the reverse distance: \\begin{aligned}AC & = AB - BC \\cr &= 2835 - 120 \\cr &= 2715\\text{ m}\\end{aligned}"
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
    "group_id": "012201",
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
    "group_id": "012201",
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
    "group_id": "012201",
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
    "group_id": "012201",
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
},
{
    "id": "012206",
    "group_id": "012206",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Statics & Equilibrium",
    "topic": "Moments",
    "subtopic": [
        "Central pivot",
        "Uniform plank",
        "Principle of moments"
    ],
    "img": "images/Mechanics_pngs/012206.png",
    "question": "The diagram shows a uniform plank $AB$ of length $5\\text{ m}$ supported in horizontal equilibrium by means of a central pivot.<br><br>On the plank there are three objects of masses $10\\text{ kg}$, $4\\text{ kg}$, and $18\\text{ kg}$ placed in positions $C$, $D$, and $E$ respectively. The distance $AC$ is $0.8\\text{ m}$ and the distance $AE$ is $3.5\\text{ m}$.<br><br>Find the distance $AD$.",
    "steps": [
        "<strong>Locate distances from the central pivot:</strong><br><br>The plank is uniform and has length $5\\text{ m}$, so the central pivot $P$ is at the midpoint, $2.5\\text{ m}$ from $A$.<br><br>The weight of the plank acts directly through this pivot and exerts zero moment.<br><br>Distances from the pivot $P$ ($2.5\\text{ m}$ from $A$):<br>• Distance $CP = 2.5 - 0.8 = 1.7\\text{ m}$ (left)<br>• Distance $EP = 3.5 - 2.5 = 1.0\\text{ m}$ (right)",
        "<strong>Take moments about the pivot:</strong><br><br>Let $d$ be the distance of mass $D$ from end $A$, so its distance from the pivot is $(2.5 - d)$ to the left.<br><br>Equating anticlockwise and clockwise moments about $P$:\\begin{aligned} &10g(1.7) + 4g(2.5 - d) = 18g(1.0) \\cr &17g + 10g - 4gd = 18g \\cr &27 - 4d = 18 \\cr &4d = 9 \\cr &d = 2.25\\text{ m} \\end{aligned}<br>Therefore, the distance $AD = 2.25\\text{ m}$.",
        "Final Answer: $AD = 2.25\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "$AD = 2.75\\text{ m}$",
            "feedback": "Mass $D$ must lie to the left of the pivot ($2.25\\text{ m}$ from $A$) to assist mass $C$. Placing it $0.25\\text{ m}$ to the right gives $2.75\\text{ m}$, unbalancing the clockwise side."
        },
        {
            "ans": "$AD = 0.25\\text{ m}$",
            "feedback": "The value $0.25\\text{ m}$ is the distance from the central pivot to $D$. The question asks for the distance from end $A$, which is $2.5 - 0.25 = 2.25\\text{ m}$."
        },
        {
            "ans": "$AD = 2.00\\text{ m}$",
            "feedback": "Check your moment equation: \\begin{aligned}17 + 4(2.5 - d) &= 18\\cr \\implies 4(2.5 - d)& = 1\\end{aligned} giving $2.5 - d = 0.25 \\implies d = 2.25\\text{ m}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Pivot at Centre of Mass",
        "content": "Placing the pivot at the midpoint of a uniform plank is an examiner's gift: the weight of the plank acts directly through the pivot line, producing zero turning effect. You only need to balance the moments of the external loads."
    }
},
{
    "id": "012207",
    "group_id": "012206",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Statics & Equilibrium",
    "topic": "Moments",
    "subtopic": [
        "Off-centre pivot",
        "Weight of a uniform beam",
        "Equilibrium"
    ],
    "img": "images/Mechanics_pngs/012207.png",
    "question": "The diagram shows a uniform beam $AB$ of length $6\\text{ m}$ and mass $20\\text{ kg}$ resting horizontally in equilibrium on a smooth pivot at $P$, where $AP = 2\\text{ m}$.<br><br>An object of mass $M\\text{ kg}$ is attached to end $A$ and an object of mass $15\\text{ kg}$ is attached to end $B$.<br><em>[Take $g = 9.8\\text{ m s}^{-2}$.]</em><br><br><strong>(a)</strong> State the distance from end $A$ to the centre of mass $G$ of the beam.<br><br><strong>(b)</strong> Calculate the mass $M$ required for the beam to rest in horizontal equilibrium.",
    "steps": [
        "<strong>(a) Centre of mass:</strong><br><br>Because the beam is uniform, its centre of mass $G$ lies at its geometric midpoint:\\begin{aligned} AG &= \\dfrac{6}{2} \\cr &= 3\\text{ m} \\end{aligned}",
        "<strong>(b) Calculate mass $M$:</strong><br><br>Distances from the pivot $P$ (located $2\\text{ m}$ from $A$):<br>• Distance to $A$: $2\\text{ m}$ (left)<br>• Distance to $G$: $3 - 2 = 1\\text{ m}$ (right)<br>• Distance to $B$: $6 - 2 = 4\\text{ m}$ (right)<br><br>Taking moments about the pivot $P$:\\begin{aligned} &Mg(2) = 20g(1) + 15g(4) \\cr &2Mg = 20g + 60g \\cr &2M = 80 \\cr &M = 40\\text{ kg} \\end{aligned}",
        "Final Answer: (a) $3\\text{ m}$, (b) $M = 40\\text{ kg}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $3\\text{ m}$, (b) $M = 30\\text{ kg}$",
            "feedback": "Remember to include the beam's own weight ($20g\\text{ N}$) acting at its midpoint. Omitting the beam weight gives $2M = 60 \\implies M = 30\\text{ kg}$."
        },
        {
            "ans": "(a) $3\\text{ m}$, (b) $M = 50\\text{ kg}$",
            "feedback": "The centre of mass is at $3\\text{ m}$ from $A$, which is to the right of the pivot ($2\\text{ m}$ from $A$). Its moment acts clockwise with the $15\\text{ kg}$ mass, not anticlockwise."
        },
        {
            "ans": "(a) $2\\text{ m}$, (b) $M = 40\\text{ kg}$",
            "feedback": "The centre of mass of a uniform $6\\text{ m}$ beam is at its midpoint ($3\\text{ m}$ from $A$), not at the pivot point $P$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Non-Central Pivots Include Beam Weight",
        "content": "Whenever the pivot is not at the midpoint of a beam, the weight of the beam produces a non-zero turning moment. Always mark the centre of mass $G$ clearly and measure its distance from your chosen pivot point."
    }
},
{
    "id": "012208",
    "group_id": "012206",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Statics & Equilibrium",
    "topic": "Moments",
    "subtopic": [
        "Beam on two supports",
        "Normal reaction forces",
        "Multiple point loads"
    ],
    "img": "images/Mechanics_pngs/012208.png",
    "question": "The diagram shows a uniform plank $AB$ of length $6\\text{ m}$ and mass $30\\text{ kg}$ resting horizontally on two smooth supports at $C$ and $D$, where $AC = 1.0\\text{ m}$ and $AD = 5.0\\text{ m}$.<br><br>Two loads of masses $18\\text{ kg}$ and $10\\text{ kg}$ are placed on the plank at points $P$ and $Q$ respectively, where $AP = 2.0\\text{ m}$ and $AQ = 5.2\\text{ m}$.<br><em>[Take $g = 9.8\\text{ m s}^{-2}$.]</em><br><br><strong>(a)</strong> Calculate the magnitude of the normal reaction force exerted on the plank by the support at $D$.<br><br><strong>(b)</strong> Calculate the magnitude of the normal reaction force exerted on the plank by the support at $C$.",
    "steps": [
        "<strong>(a) Normal reaction at support $D$:</strong><br><br>The plank is uniform, so its weight $30g\\text{ N}$ acts at its midpoint, $3.0\\text{ m}$ from $A$.<br><br>Measure distances from support $C$ ($1.0\\text{ m}$ from $A$):<br>• Distance to load $P$: $2.0 - 1.0 = 1.0\\text{ m}$<br>• Distance to midpoint: $3.0 - 1.0 = 2.0\\text{ m}$<br>• Distance to support $D$: $5.0 - 1.0 = 4.0\\text{ m}$<br>• Distance to load $Q$: $5.2 - 1.0 = 4.2\\text{ m}$<br><br>Taking moments about $C$:\\begin{aligned} &4.0 R_D = 18g(1.0) + 30g(2.0) \\cr &\\qquad + 10g(4.2) \\cr &4.0 R_D = 18g + 60g + 42g \\cr &4.0 R_D = 120g \\cr &R_D = 30g \\cr &R_D = 30(9.8) \\cr &R_D = 294\\text{ N} \\end{aligned}",
        "<strong>(b) Normal reaction at support $C$:</strong><br><br>Resolving forces vertically for equilibrium:\\begin{aligned} &R_C + R_D = (18 + 30 + 10)g \\cr &R_C + 294 = 58(9.8) \\cr &R_C + 294 = 568.4 \\cr &R_C = 568.4 - 294 \\cr &R_C = 274.4\\text{ N} \\end{aligned}",
        "Final Answer: (a) $R_D = 294\\text{ N}$, (b) $R_C = 274.4\\text{ N}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $R_D = 274.4\\text{ N}$, (b) $R_C = 294\\text{ N}$",
            "feedback": "The reactions have been reversed. Support $D$ carries the larger load ($294\\text{ N}$) because the $30\\text{ kg}$ plank weight and $10\\text{ kg}$ mass lie closer to it."
        },
        {
            "ans": "(a) $R_D = 147\\text{ N}$, (b) $R_C = 421.4\\text{ N}$",
            "feedback": "Remember to include the plank's weight ($30g\\text{ N}$) at the midpoint. Omitting the plank weight underestimates the reaction at $D$."
        },
        {
            "ans": "(a) $R_D = 294\\text{ N}$, (b) $R_C = 250\\text{ N}$",
            "feedback": "Check the vertical resolution: total weight is $(18 + 30 + 10)(9.8) = 568.4\\text{ N}$. Subtracting $294\\text{ N}$ gives $R_C = 274.4\\text{ N}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Vertical Resolution for the Second Reaction",
        "content": "Once you find one support reaction by taking moments about the other, never set up a second moment equation. Resolving vertically ($R_C + R_D = \\sum W$) gives the remaining reaction in one simple subtraction."
    }
},
{
    "id": "012209",
    "group_id": "012206",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Statics & Equilibrium",
    "topic": "Moments",
    "subtopic": [
        "Tilting beam",
        "Limiting equilibrium",
        "Overhang"
    ],
    "img": "images/Mechanics_pngs/012209.png",
    "question": "The diagram shows a uniform beam $AB$ of mass $40\\text{ kg}$ and length $6\\text{ m}$ resting horizontally on two smooth supports at $C$ and $D$, where $AC = 1.5\\text{ m}$ and $DB = 1.5\\text{ m}$.<br><br>A person of mass $60\\text{ kg}$ walks along the overhang $DB$ towards end $B$. When the person reaches point $X$, at a distance of $x\\text{ m}$ from support $D$, the beam is on the point of tilting about $D$.<br><em>[Take $g = 9.8\\text{ m s}^{-2}$.]</em><br><br><strong>(a)</strong> State the magnitude of the normal reaction force exerted by the support at $C$ when the beam is on the point of tilting about $D$.<br><br><strong>(b)</strong> Calculate the distance $x$.<br><br><strong>(c)</strong> State, with a reason, whether the person can safely reach end $B$ without the beam tipping.",
    "steps": [
        "<strong>(a) Reaction at support $C$:</strong><br><br>When the beam is on the point of tilting about support $D$, it breaks contact with support $C$.<br><br>Therefore, the normal reaction at $C$ is:\\begin{aligned} R_C = 0\\text{ N} \\end{aligned}",
        "<strong>(b) Calculate distance $x$:</strong><br><br>The beam is uniform, so its centre of mass lies at its midpoint, $3.0\\text{ m}$ from $A$.<br><br>Distance from support $D$ ($4.5\\text{ m}$ from $A$) to the centre of mass:\\begin{aligned} 4.5 - 3.0 = 1.5\\text{ m} \\end{aligned}<br>Taking moments about $D$ with $R_C = 0$:\\begin{aligned} &40g(1.5) = 60g(x) \\cr &60g = 60gx \\cr &x = 1.0\\text{ m} \\end{aligned}",
        "<strong>(c) Safety check for end $B$:</strong><br><br>The overhang distance $DB$ is $1.5\\text{ m}$.<br><br>Because tilting occurs when the person is $1.0\\text{ m}$ from $D$, walking past $1.0\\text{ m}$ tips the beam. Therefore, the person cannot safely reach end $B$.",
        "Final Answer: (a) $R_C = 0\\text{ N}$, (b) $x = 1.0\\text{ m}$, (c) No, tilts at $1.0\\text{ m}$ before reaching $1.5\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $R_C = 0\\text{ N}$, (b) $x = 1.5\\text{ m}$, (c) Yes, reaches end $B$ exactly as it tilts",
            "feedback": "The beam tilts before the person reaches end $B$. Equating moments about $D$ gives $60x = 40(1.5) = 60 \\implies x = 1.0\\text{ m}$, which is short of the $1.5\\text{ m}$ overhang."
        },
        {
            "ans": "(a) $R_C = 392\\text{ N}$, (b) $x = 1.0\\text{ m}$, (c) No, tilts at $1.0\\text{ m}$ before reaching $1.5\\text{ m}$",
            "feedback": "At the point of tilting about $D$, contact with support $C$ is broken, so $R_C = 0\\text{ N}$, not $392\\text{ N}$."
        },
        {
            "ans": "(a) $R_C = 0\\text{ N}$, (b) $x = 0.67\\text{ m}$, (c) No, tilts at $0.67\\text{ m}$ before reaching $1.5\\text{ m}$",
            "feedback": "Check your moment equation: $60x = 40 \\times 1.5 = 60$, which yields $x = 1.0\\text{ m}$, not $40 / 60 = 0.67\\text{ m}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: The Definition of Tilting",
        "content": "The condition 'on the point of tilting about a support' means the beam is just about to pivot off the other support. Immediately set the normal reaction at the non-tilting support to zero ($R_C = 0$)."
    }
},
{
    "id": "012210",
    "group_id": "012206",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Statics & Equilibrium",
    "topic": "Moments",
    "subtopic": [
        "Non-uniform beam",
        "Centre of mass",
        "Suspended rod"
    ],
    "img": "images/Mechanics_pngs/012210.png",
    "question": "The diagram shows a non-uniform rod $AB$ of length $4\\text{ m}$ and weight $120\\text{ N}$ suspended horizontally in equilibrium by two light vertical strings attached to its ends $A$ and $B$.<br><br>Two point loads of weights $40\\text{ N}$ and $60\\text{ N}$ are attached to the rod at points $C$ and $D$ respectively, where $AC = 1.0\\text{ m}$ and $AD = 3.0\\text{ m}$. The tension in the vertical string attached at end $B$ is measured to be $105\\text{ N}$.<br><br><strong>(a)</strong> Find the tension in the vertical string attached at end $A$.<br><br><strong>(b)</strong> Calculate the distance of the centre of mass of the rod from end $A$.",
    "steps": [
        "<strong>(a) Tension in string at $A$:</strong><br><br>For vertical equilibrium, total upward tensions balance total downward weights:\\begin{aligned} &T_A + T_B = 120 + 40 + 60 \\cr &T_A + 105 = 220 \\cr &T_A = 220 - 105 \\cr &T_A = 115\\text{ N} \\end{aligned}",
        "<strong>(b) Centre of mass distance from $A$:</strong><br><br>Let $\\bar{x}$ be the distance of the centre of mass from end $A$.<br><br>Taking moments about end $A$:\\begin{aligned} &40(1.0) + 120\\bar{x} + 60(3.0) \\cr &\\quad = 105(4.0) \\cr &40 + 120\\bar{x} + 180 = 420 \\cr &120\\bar{x} + 220 = 420 \\cr &120\\bar{x} = 200 \\cr &\\bar{x} = \\dfrac{200}{120} \\cr &\\bar{x} = \\dfrac{5}{3} \\approx 1.67\\text{ m} \\end{aligned}",
        "Final Answer: (a) $T_A = 115\\text{ N}$, (b) $\\bar{x} = 1.67\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $T_A = 115\\text{ N}$, (b) $\\bar{x} = 2.33\\text{ m}$",
            "feedback": "This distance is measured from end $B$ ($4 - 1.67 = 2.33\\text{ m}$). The question asks for the distance of the centre of mass from end $A$."
        },
        {
            "ans": "(a) $T_A = 105\\text{ N}$, (b) $\\bar{x} = 2.00\\text{ m}$",
            "feedback": "The rod is non-uniform, so its centre of mass is not at the geometric midpoint ($2.00\\text{ m}$), and the tensions at $A$ and $B$ are not equal."
        },
        {
            "ans": "(a) $T_A = 115\\text{ N}$, (b) $\\bar{x} = 3.50\\text{ m}$",
            "feedback": "Remember to include the moment of the $40\\text{ N}$ load at $C$. Omitting it gives $120\\bar{x} + 180 = 420 \\implies \\bar{x} = 2.0\\text{ m}$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Non-Uniform Rod Verification",
        "content": "For a uniform rod of length $4\\text{ m}$, the centre of mass would be at $2.0\\text{ m}$. Our result $\\bar{x} = 1.67\\text{ m}$ shows that the rod's mass is concentrated more towards end $A$, which explains why the string at $A$ carries more tension ($115\\text{ N}$) than the string at $B$ ($105\\text{ N}$)."
    }
},
{
    "id": "012211",
    "group_id": "012211",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Dynamics & Calculus",
    "topic": "Differential Equations",
    "subtopic": [
        "Upward vertical motion",
        "Linear air resistance",
        "Separation of variables"
    ],
    "img": false,
    "question": "An object of mass $0.4\\text{ kg}$ is projected vertically upwards with an initial speed of $20\\text{ m s}^{-1}$. The velocity of the object at time $t$ seconds is $v\\text{ m s}^{-1}$. During the upward motion, the object experiences a resistance to motion of magnitude $R\\text{ N}$, where $R$ is directly proportional to $v$.<br><br>When the velocity of the object is $0.5\\text{ m s}^{-1}$, the resistance to motion is $0.1\\text{ N}$.<br><em>[Take $g = 9.8\\text{ m s}^{-2}$.]</em><br><br><strong>(a)</strong> Show that the upward motion of the object satisfies the differential equation:<br>$$\\dfrac{\\text{d}v}{\\text{d}t} = -9.8 - 0.5v$$<br><strong>(b)</strong> Solve this differential equation to find an expression for $v$ in terms of $t$.<br><br><strong>(c)</strong> Determine the value of $t$ when the object reaches its highest point, giving your answer to $3$ significant figures.",
    "steps": [
        "<strong>(a) Form the differential equation:</strong><br><br>Resistance is proportional to velocity: $R = kv$.<br><br>Using $R = 0.1$ when $v = 0.5$:\\begin{aligned} 0.1 &= 0.5k \\cr k &= \\dfrac{0.1}{0.5} \\cr &= 0.2 \\end{aligned}<br>Taking upwards as positive, both gravity and resistance act downwards:\\begin{aligned} &m\\dfrac{\\text{d}v}{\\text{d}t} = -mg - R \\cr &0.4\\dfrac{\\text{d}v}{\\text{d}t} = -0.4(9.8) - 0.2v \\cr &0.4\\dfrac{\\text{d}v}{\\text{d}t} = -3.92 - 0.2v \\end{aligned}<br>Dividing through by $0.4$:\\begin{aligned} \\dfrac{\\text{d}v}{\\text{d}t} &= -9.8 - 0.5v \\end{aligned}",
        "<strong>(b) Solve the differential equation:</strong><br><br>Separating variables:\\begin{aligned} &\\int \\dfrac{1}{9.8 + 0.5v}\\,\\text{d}v = \\int -1\\,\\text{d}t \\cr &\\dfrac{1}{0.5}\\ln(9.8 + 0.5v) = -t + C \\cr &2\\ln(9.8 + 0.5v) = -t + C \\end{aligned}<br>Substitute initial condition $t = 0$, $v = 20$:\\begin{aligned} C &= 2\\ln(9.8 + 10) \\cr &= 2\\ln(19.8) \\end{aligned}<br>Rearranging for $v$:\\begin{aligned} &2\\ln(9.8 + 0.5v) - 2\\ln(19.8) = -t \\cr &\\ln\\left(\\dfrac{9.8 + 0.5v}{19.8}\\right) = -0.5t \\cr &\\dfrac{9.8 + 0.5v}{19.8} = \\text{e}^{-0.5t} \\cr &9.8 + 0.5v = 19.8\\text{e}^{-0.5t} \\cr &0.5v = 19.8\\text{e}^{-0.5t} - 9.8 \\cr &v = 39.6\\text{e}^{-0.5t} - 19.6 \\end{aligned}",
        "<strong>(c) Time at highest point ($v = 0$):</strong><br><br>At the maximum height, $v = 0$:\\begin{aligned} &39.6\\text{e}^{-0.5t} - 19.6 = 0 \\cr &39.6\\text{e}^{-0.5t} = 19.6 \\cr &\\text{e}^{-0.5t} = \\dfrac{19.6}{39.6} \\cr &\\text{e}^{-0.5t} = \\dfrac{49}{99} \\cr &-0.5t = \\ln\\left(\\dfrac{49}{99}\\right) \\cr &t = 2\\ln\\left(\\dfrac{99}{49}\\right) \\cr &t \\approx 1.41\\text{ s} \\end{aligned}",
        "Final Answer: (a) $\\dfrac{\\text{d}v}{\\text{d}t} = -9.8 - 0.5v$, (b) $v = 39.6\\text{e}^{-0.5t} - 19.6$, (c) $1.41\\text{ s}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $\\dfrac{\\text{d}v}{\\text{d}t} = -9.8 - 0.5v$, (b) $v = 39.6\\text{e}^{-0.5t} - 19.6$, (c) $2.04\\text{ s}$",
            "feedback": "A time of $2.04\\text{ s}$ ignores air resistance ($t = 20 / 9.8$). Resistance acts downwards with gravity, shortening the ascent time to $1.41\\text{ s}$."
        },
        {
            "ans": "(a) $\\dfrac{\\text{d}v}{\\text{d}t} = -9.8 - 0.5v$, (b) $v = 20\\text{e}^{-0.5t}$, (c) $1.41\\text{ s}$",
            "feedback": "Remember the constant term $-9.8$ in the differential equation. Integrating does not give a single exponential decay term."
        },
        {
            "ans": "(a) $\\dfrac{\\text{d}v}{\\text{d}t} = -9.8 - 0.5v$, (b) $v = 39.6\\text{e}^{-0.5t} - 19.6$, (c) $0.703\\text{ s}$",
            "feedback": "Check the factor of $2$: $-0.5t = \\ln(49/99)$ gives $t = 2\\ln(99/49) \\approx 1.41\\text{ s}$, rather than dividing by $2$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Air Resistance Shortens Ascent Time",
        "content": "Under gravity alone, time to peak is $t = u/g = 20/9.8 \\approx 2.04\\text{ s}$. When air resistance opposes the upward motion, the total retarding force increases, so the object decelerates faster. Your calculated time must always be less than $u/g$."
    }
},
{
    "id": "012212",
    "group_id": "012211",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Dynamics & Calculus",
    "topic": "Differential Equations",
    "subtopic": [
        "Downward motion from rest",
        "Terminal velocity",
        "Exponential growth"
    ],
    "img": false,
    "question": "A skydiver of mass $80\\text{ kg}$ falls vertically from rest from an aircraft. At time $t$ seconds after release, the downward velocity of the skydiver is $v\\text{ m s}^{-1}$. The air resistance opposing the motion is modelled as $16v\\text{ N}$.<br><em>[Take $g = 9.8\\text{ m s}^{-2}$.]</em><br><br><strong>(a)</strong> Show that the motion satisfies the differential equation:<br>$$\\dfrac{\\text{d}v}{\\text{d}t} = 0.2(49 - v)$$<br>and state the terminal velocity of the skydiver.<br><br><strong>(b)</strong> Find an expression for $v$ in terms of $t$.<br><br><strong>(c)</strong> Calculate the time taken for the skydiver to reach $50\\%$ of their terminal velocity, giving your answer to $3$ significant figures.",
    "steps": [
        "<strong>(a) Differential equation and terminal velocity:</strong><br><br>Taking downwards as positive:\\begin{aligned} &m\\dfrac{\\text{d}v}{\\text{d}t} = mg - R \\cr &80\\dfrac{\\text{d}v}{\\text{d}t} = 80(9.8) - 16v \\cr &80\\dfrac{\\text{d}v}{\\text{d}t} = 784 - 16v \\cr &\\dfrac{\\text{d}v}{\\text{d}t} = 9.8 - 0.2v \\cr &\\dfrac{\\text{d}v}{\\text{d}t} = 0.2(49 - v) \\end{aligned}<br>Terminal velocity occurs when acceleration is zero ($\\frac{\\text{d}v}{\\text{d}t} = 0$):\\begin{aligned} 49 - v &= 0 \\cr v &= 49\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(b) Find velocity expression:</strong><br><br>Separating variables:\\begin{aligned} &\\int \\dfrac{1}{49 - v}\\,\\text{d}v = \\int 0.2\\,\\text{d}t \\cr &-\\ln(49 - v) = 0.2t + C \\end{aligned}<br>Substitute $t = 0$, $v = 0$:\\begin{aligned} C &= -\\ln(49) \\end{aligned}<br>Rearranging for $v$:\\begin{aligned} &\\ln(49) - \\ln(49 - v) = 0.2t \\cr &\\ln\\left(\\dfrac{49}{49 - v}\\right) = 0.2t \\cr &\\dfrac{49 - v}{49} = \\text{e}^{-0.2t} \\cr &49 - v = 49\\text{e}^{-0.2t} \\cr &v = 49(1 - \\text{e}^{-0.2t}) \\end{aligned}",
        "<strong>(c) Time to reach $50\\%$ of terminal velocity:</strong><br><br>Set $v = 0.5 \\times 49 = 24.5\\text{ m s}^{-1}$:\\begin{aligned} &24.5 = 49(1 - \\text{e}^{-0.2t}) \\cr &1 - \\text{e}^{-0.2t} = 0.5 \\cr &\\text{e}^{-0.2t} = 0.5 \\cr &-0.2t = -\\ln(2) \\cr &t = \\dfrac{\\ln(2)}{0.2} \\cr &t = 5\\ln(2) \\cr &t \\approx 3.47\\text{ s} \\end{aligned}",
        "Final Answer: (a) $49\\text{ m s}^{-1}$, (b) $v = 49(1 - \\text{e}^{-0.2t})$, (c) $3.47\\text{ s}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $49\\text{ m s}^{-1}$, (b) $v = 49(1 - \\text{e}^{-0.2t})$, (c) $2.50\\text{ s}$",
            "feedback": "Using linear constant acceleration gives $t = 24.5 / 9.8 = 2.5\\text{ s}$. As speed builds, drag reduces acceleration, so reaching $24.5\\text{ m s}^{-1}$ takes longer ($3.47\\text{ s}$)."
        },
        {
            "ans": "(a) $49\\text{ m s}^{-1}$, (b) $v = 49\\text{e}^{-0.2t}$, (c) $3.47\\text{ s}$",
            "feedback": "The term $49\\text{e}^{-0.2t}$ predicts speed decreasing from $49$ to $0$. Acceleration from rest requires $v = 49(1 - \\text{e}^{-0.2t})$."
        },
        {
            "ans": "(a) $9.8\\text{ m s}^{-1}$, (b) $v = 49(1 - \\text{e}^{-0.2t})$, (c) $3.47\\text{ s}$",
            "feedback": "Terminal velocity is found by setting $\\frac{\\text{d}v}{\\text{d}t} = 0$, giving $49 - v = 0 \\implies v = 49\\text{ m s}^{-1}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Finding Terminal Velocity in One Step",
        "content": "You never need to solve the full differential equation to find terminal velocity. By definition, terminal velocity occurs when acceleration drops to zero: set $\\frac{\\text{d}v}{\\text{d}t} = 0$ in the original equation of motion and solve for $v$ algebraically."
    }
},
{
    "id": "012213",
    "group_id": "012211",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Dynamics & Calculus",
    "topic": "Differential Equations",
    "subtopic": [
        "Quadratic resistance",
        "Non-linear differential equations",
        "Distance by integration"
    ],
    "img": false,
    "question": "A motorboat of mass $500\\text{ kg}$ travels in a straight line on calm water. At time $t = 0$, when the boat is travelling at a speed of $12\\text{ m s}^{-1}$, its engine is switched off.<br><br>The boat then decelerates under the action of water resistance alone, which is modelled as a force of magnitude $20v^2\\text{ N}$, where $v\\text{ m s}^{-1}$ is the speed of the boat at time $t$ seconds.<br><br><strong>(a)</strong> Form and solve a differential equation for $v$ to show that:<br>$$v = \\dfrac{12}{1 + 0.48t}$$<br><strong>(b)</strong> Find the time taken for the speed of the boat to reduce from $12\\text{ m s}^{-1}$ to $3\\text{ m s}^{-1}$.<br><br><strong>(c)</strong> Calculate the distance travelled by the boat while its speed decreases from $12\\text{ m s}^{-1}$ to $3\\text{ m s}^{-1}$, giving your answer to $3$ significant figures.",
    "steps": [
        "<strong>(a) Form and solve the differential equation:</strong><br><br>Applying Newton's second law with resistance opposing motion:\\begin{aligned} &500\\dfrac{\\text{d}v}{\\text{d}t} = -20v^2 \\cr &\\dfrac{\\text{d}v}{\\text{d}t} = -0.04v^2 \\end{aligned}<br>Separating variables:\\begin{aligned} &\\int v^{-2}\\,\\text{d}v = \\int -0.04\\,\\text{d}t \\cr &-v^{-1} = -0.04t + C \\cr &\\dfrac{1}{v} = 0.04t - C \\end{aligned}<br>Substitute initial condition $t = 0$, $v = 12$:\\begin{aligned} \\dfrac{1}{12} &= -C \\implies -C = \\dfrac{1}{12} \\end{aligned}<br>Rearranging for $v$:\\begin{aligned} \\dfrac{1}{v} &= 0.04t + \\dfrac{1}{12} \\cr \\dfrac{1}{v} &= \\dfrac{0.48t + 1}{12} \\cr v &= \\dfrac{12}{1 + 0.48t} \\end{aligned}",
        "<strong>(b) Time to decelerate to $3\\text{ m s}^{-1}$:</strong><br><br>Substitute $v = 3$:\\begin{aligned} &3 = \\dfrac{12}{1 + 0.48t} \\cr &1 + 0.48t = 4 \\cr &0.48t = 3 \\cr &t = \\dfrac{3}{0.48} \\cr &t = 6.25\\text{ s} \\end{aligned}",
        "<strong>(c) Distance travelled:</strong><br><br>Distance is the integral of speed over time from $t = 0$ to $t = 6.25\\text{ s}$:\\begin{aligned} s &= \\int_0^{6.25} \\dfrac{12}{1 + 0.48t}\\,\\text{d}t \\cr &= \\left[\\dfrac{12}{0.48}\\ln(1 + 0.48t)\\right]_0^{6.25} \\cr &= 25\\Big[\\ln(1 + 0.48(6.25)) - \\ln(1)\\Big] \\cr &= 25\\ln(4) \\cr &= 50\\ln(2) \\cr &\\approx 34.7\\text{ m} \\end{aligned}",
        "Final Answer: (a) $v = \\dfrac{12}{1 + 0.48t}$, (b) $6.25\\text{ s}$, (c) $34.7\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $v = \\dfrac{12}{1 + 0.48t}$, (b) $6.25\\text{ s}$, (c) $16.6\\text{ m}$",
            "feedback": "Remember to divide by the coefficient of $t$ ($0.48$) when integrating: \\begin{aligned}\\int \\frac{12}{1 + 0.48t}\\,\\text{d}t &= \\frac{12}{0.48}\\ln(1 + 0.48t)\\cr & = 25\\ln(1 + 0.48t)\\end{aligned}"
        },
        {
            "ans": "(a) $v = \\dfrac{12}{1 + 0.48t}$, (b) $6.25\\text{ s}$, (c) $46.9\\text{ m}$",
            "feedback": "Using linear average speed gives $s = \\frac{12 + 3}{2} \\times 6.25 = 46.9\\text{ m}$. Because the drag is quadratic, deceleration is much higher initially, reducing total distance."
        },
        {
            "ans": "(a) $v = \\dfrac{12}{1 + 0.48t}$, (b) $8.33\\text{ s}$, (c) $34.7\\text{ m}$",
            "feedback": "Check your rearrangement when solving $3(1 + 0.48t) = 12$: $1 + 0.48t = 4 \\implies 0.48t = 3$, giving $t = 6.25\\text{ s}$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Quadratic vs Linear Resistance",
        "content": "Notice that integrating $v^{-2}\\,\\text{d}v$ produces a rational function $\\frac{1}{v}$, whereas linear resistance produces a natural logarithm $\\ln(v)$. For quadratic drag, speed never reaches absolute zero in finite time, but distance converges logarithmically."
    }
},
{
    "id": "012214",
    "group_id": "012211",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Dynamics & Calculus",
    "topic": "Differential Equations",
    "subtopic": [
        "Acceleration as v dv/dx",
        "Velocity-displacement relation",
        "Logarithmic decay"
    ],
    "img": false,
    "question": "A particle of mass $0.5\\text{ kg}$ moves along a horizontal straight line. At distance $x$ metres from a fixed origin $O$, the speed of the particle is $v\\text{ m s}^{-1}$. The particle experiences a resistive force of magnitude $2v^2\\text{ N}$ directed opposite to its motion.<br><br>Initially, when $x = 0$, the speed of the particle is $10\\text{ m s}^{-1}$.<br><br><strong>(a)</strong> By expressing acceleration in the form $v\\dfrac{\\text{d}v}{\\text{d}x}$, show that:<br>$$\\dfrac{\\text{d}v}{\\text{d}x} = -4v$$<br><strong>(b)</strong> Find an expression for $v$ in terms of $x$.<br><br><strong>(c)</strong> Calculate the distance the particle travels before its speed is halved, giving your answer to $3$ significant figures.",
    "steps": [
        "<strong>(a) Form the differential equation:</strong><br><br>Using $F = ma$ with acceleration $a = v\\dfrac{\\text{d}v}{\\text{d}x}$:\\begin{aligned} &0.5\\left(v\\dfrac{\\text{d}v}{\\text{d}x}\\right) = -2v^2 \\end{aligned}<br>Dividing through by $0.5v$ (since $v > 0$):\\begin{aligned} \\dfrac{\\text{d}v}{\\text{d}x} = -4v \\end{aligned}",
        "<strong>(b) Find velocity as a function of $x$:</strong><br><br>Separating variables:\\begin{aligned} &\\int \\dfrac{1}{v}\\,\\text{d}v = \\int -4\\,\\text{d}x \\cr &\\ln(v) = -4x + C \\end{aligned}<br>Substitute initial condition $x = 0$, $v = 10$:\\begin{aligned} C &= \\ln(10) \\end{aligned}<br>Rearranging for $v$:\\begin{aligned} &\\ln(v) - \\ln(10) = -4x \\cr &\\ln\\left(\\dfrac{v}{10}\\right) = -4x \\cr &\\dfrac{v}{10} = \\text{e}^{-4x} \\cr &v = 10\\text{e}^{-4x} \\end{aligned}",
        "<strong>(c) Distance when speed is halved:</strong><br><br>Set $v = 5\\text{ m s}^{-1}$:\\begin{aligned} &5 = 10\\text{e}^{-4x} \\cr &\\text{e}^{-4x} = 0.5 \\cr &-4x = -\\ln(2) \\cr &x = \\dfrac{\\ln(2)}{4} \\cr &x \\approx 0.173\\text{ m} \\end{aligned}",
        "Final Answer: (a) $\\dfrac{\\text{d}v}{\\text{d}x} = -4v$, (b) $v = 10\\text{e}^{-4x}$, (c) $0.173\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $\\dfrac{\\text{d}v}{\\text{d}x} = -4v$, (b) $v = 10\\text{e}^{-4x}$, (c) $0.693\\text{ m}$",
            "feedback": "Remember to divide by the coefficient $4$: $x = \\frac{\\ln(2)}{4} \\approx 0.173\\text{ m}$, rather than quoting $\\ln(2) \\approx 0.693\\text{ m}$ directly."
        },
        {
            "ans": "(a) $\\dfrac{\\text{d}v}{\\text{d}x} = -4v$, (b) $v = 10 - 4x$, (c) $0.173\\text{ m}$",
            "feedback": "Integrating $\\frac{1}{v}\\,\\text{d}v$ yields $\\ln(v)$, leading to exponential decay $v = 10\\text{e}^{-4x}$, not linear decay."
        },
        {
            "ans": "(a) $\\dfrac{\\text{d}v}{\\text{d}x} = -4v$, (b) $v = 10\\text{e}^{-4x}$, (c) $0.075\\text{ m}$",
            "feedback": "Check the logarithm: \\begin{aligned}\\text{e}^{-4x} &= 0.5 \\cr \\implies -4x &= \\ln(0.5) \\cr &= -\\ln(2)\\end{aligned} giving $x = \\frac{\\ln(2)}{4} \\approx 0.173\\text{ m}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: When to Use v dv/dx",
        "content": "Whenever a mechanics problem asks for a direct relationship between velocity $v$ and displacement $x$ without mentioning time $t$, replace acceleration $a$ with $v\\frac{\\text{d}v}{\\text{d}x}$. This eliminates $t$ entirely and saves a two-step integration."
    }
},
{
    "id": "012215",
    "group_id": "012211",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Dynamics & Calculus",
    "topic": "Differential Equations",
    "subtopic": [
        "Driving force with air resistance",
        "Terminal speed",
        "Acceleration from rest"
    ],
    "img": false,
    "question": "A sports car of mass $1000\\text{ kg}$ accelerates from rest along a horizontal straight track. The engine provides a constant forward tractive force of $2400\\text{ N}$.<br><br>At time $t$ seconds, when the speed of the car is $v\\text{ m s}^{-1}$, the car experiences a resistive force of magnitude $40v\\text{ N}$.<br><br><strong>(a)</strong> Write down an equation of motion for the car and show that the terminal velocity is $60\\text{ m s}^{-1}$.<br><br><strong>(b)</strong> Solve the differential equation to find an expression for $v$ in terms of $t$.<br><br><strong>(c)</strong> Find the time taken for the car to accelerate from rest to a speed of $30\\text{ m s}^{-1}$, giving your answer to $3$ significant figures.",
    "steps": [
        "<strong>(a) Equation of motion and terminal velocity:</strong><br><br>Applying Newton's second law:\\begin{aligned} &1000\\dfrac{\\text{d}v}{\\text{d}t} = 2400 - 40v \\cr &\\dfrac{\\text{d}v}{\\text{d}t} = 2.4 - 0.04v \\cr &\\dfrac{\\text{d}v}{\\text{d}t} = 0.04(60 - v) \\end{aligned}<br>Terminal velocity occurs when acceleration is zero:\\begin{aligned} 60 - v &= 0 \\cr v &= 60\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(b) Find velocity expression:</strong><br><br>Separating variables:\\begin{aligned} &\\int \\dfrac{1}{60 - v}\\,\\text{d}v = \\int 0.04\\,\\text{d}t \\cr &-\\ln(60 - v) = 0.04t + C \\end{aligned}<br>Substitute initial condition $t = 0$, $v = 0$:\\begin{aligned} C &= -\\ln(60) \\end{aligned}<br>Rearranging for $v$:\\begin{aligned} &\\ln(60) - \\ln(60 - v) = 0.04t \\cr &\\ln\\left(\\dfrac{60}{60 - v}\\right) = 0.04t \\cr &\\dfrac{60 - v}{60} = \\text{e}^{-0.04t} \\cr &60 - v = 60\\text{e}^{-0.04t} \\cr &v = 60(1 - \\text{e}^{-0.04t}) \\end{aligned}",
        "<strong>(c) Time to reach $30\\text{ m s}^{-1}$:</strong><br><br>Substitute $v = 30$:\\begin{aligned} &30 = 60(1 - \\text{e}^{-0.04t}) \\cr &1 - \\text{e}^{-0.04t} = 0.5 \\cr &\\text{e}^{-0.04t} = 0.5 \\cr &-0.04t = -\\ln(2) \\cr &t = \\dfrac{\\ln(2)}{0.04} \\cr &t = 25\\ln(2) \\cr &t \\approx 17.3\\text{ s} \\end{aligned}",
        "Final Answer: (a) $60\\text{ m s}^{-1}$, (b) $v = 60(1 - \\text{e}^{-0.04t})$, (c) $17.3\\text{ s}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $60\\text{ m s}^{-1}$, (b) $v = 60(1 - \\text{e}^{-0.04t})$, (c) $12.5\\text{ s}$",
            "feedback": "Using initial acceleration $a = 2.4\\text{ m s}^{-2}$ linearly gives $t = 30 / 2.4 = 12.5\\text{ s}$. Because air resistance increases with speed, the car takes $17.3\\text{ s}$."
        },
        {
            "ans": "(a) $60\\text{ m s}^{-1}$, (b) $v = 60\\text{e}^{-0.04t}$, (c) $17.3\\text{ s}$",
            "feedback": "The term $60\\text{e}^{-0.04t}$ describes decay from $60$ to $0$. Acceleration from rest requires $v = 60(1 - \\text{e}^{-0.04t})$."
        },
        {
            "ans": "(a) $40\\text{ m s}^{-1}$, (b) $v = 60(1 - \\text{e}^{-0.04t})$, (c) $17.3\\text{ s}$",
            "feedback": "Terminal velocity is found by setting tractive force equal to resistance: $2400 = 40v \\implies v = 60\\text{ m s}^{-1}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Asymptotic Approach to Terminal Velocity",
        "content": "The expression $v = V_{\\max}(1 - \\text{e}^{-kt})$ is the universal signature of constant driving force opposed by linear drag. Notice that reaching $50\\%$ of terminal velocity always takes $t = \\frac{\\ln 2}{k}$ seconds, independent of the mass."
    }
},
{
    "id": "012216",
    "group_id": "012216",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Statics & Equilibrium",
    "topic": "Inclined Planes & Friction",
    "subtopic": [
        "Angled force on an incline",
        "Limiting equilibrium",
        "Direction of motion"
    ],
    "img": false,
    "question": "An object of mass $15\\text{ kg}$ is placed on a rough plane inclined at an angle $\\alpha$ to the horizontal, where $\\sin\\alpha = \\dfrac{3}{5}$. The coefficient of friction between the object and the plane is $0.5$.<br><br>A pulling force of magnitude $T\\text{ N}$, acting at an angle $\\beta$ above the line of greatest slope of the plane, is applied to the object. The angle $\\beta$ is such that $\\sin\\beta = \\dfrac{5}{13}$. The line of action of the force and the line of greatest slope lie in the same vertical plane.<br><em>[Take $g = 9.8\\text{ m s}^{-2}$.]</em><br><br><strong>(a)</strong> Given that the object is on the point of slipping down the plane, find the value of $T$, giving your answer to $3$ significant figures.<br><br><strong>(b)</strong> Given instead that $T = 156\\text{ N}$, determine whether the object moves up the plane, moves down the plane, or remains in equilibrium, justifying your answer fully.",
    "steps": [
        "<strong>Resolve forces perpendicular to the plane:</strong><br><br>Weight components for $m = 15\\text{ kg}$:\\begin{aligned} W_\\parallel &= 15(9.8)\\sin\\alpha \\cr &= 147(0.6) \\cr &= 88.2\\text{ N} \\cr W_\\perp &= 15(9.8)\\cos\\alpha \\cr &= 147(0.8) \\cr &= 117.6\\text{ N} \\end{aligned}<br>Resolving perpendicular to the plane:\\begin{aligned} &R + T\\sin\\beta = W_\\perp \\cr &R + \\dfrac{5}{13}T = 117.6 \\cr &R = 117.6 - \\dfrac{5}{13}T \\end{aligned}",
        "<strong>(a) Value of $T$ for slip down:</strong><br><br>When slipping down is impending, friction $F_{\\text{max}} = \\mu R$ acts up the plane:\\begin{aligned} F_{\\text{max}} &= 0.5\\left(117.6 - \\dfrac{5}{13}T\\right) \\cr &= 58.8 - \\dfrac{2.5}{13}T \\end{aligned}<br>Resolving parallel to the plane:\\begin{aligned} &T\\cos\\beta + F_{\\text{max}} = W_\\parallel \\cr &\\dfrac{12}{13}T + 58.8 - \\dfrac{2.5}{13}T = 88.2 \\cr &\\dfrac{9.5}{13}T = 29.4 \\cr &T = \\dfrac{29.4 \\times 13}{9.5} \\cr &T \\approx 40.2\\text{ N} \\end{aligned}",
        "<strong>(b) Motion when $T = 156\\text{ N}$:</strong><br><br>Normal reaction:\\begin{aligned} R &= 117.6 - \\dfrac{5}{13}(156) \\cr &= 117.6 - 60 \\cr &= 57.6\\text{ N} \\end{aligned}<br>Maximum available friction:\\begin{aligned} F_{\\text{max}} &= 0.5(57.6) \\cr &= 28.8\\text{ N} \\end{aligned}<br>Net force along plane without friction:\\begin{aligned} &T\\cos\\beta - W_\\parallel \\cr &\\quad = 156\\left(\\dfrac{12}{13}\\right) - 88.2 \\cr &\\quad = 144 - 88.2 \\cr &\\quad = 55.8\\text{ N (upwards)} \\end{aligned}<br>Since $55.8\\text{ N} > 28.8\\text{ N}$, the upward pull exceeds maximum friction. The object moves up the plane.",
        "Final Answer: (a) $T = 40.2\\text{ N}$, (b) Moves up the plane"
    ],
    "pi_options": [
        {
            "ans": "(a) $T = 40.2\\text{ N}$, (b) Remains in equilibrium",
            "feedback": "Compare the net upward pull ($55.8\\text{ N}$) to maximum friction ($28.8\\text{ N}$). Because the driving force exceeds limiting friction, equilibrium cannot be maintained."
        },
        {
            "ans": "(a) $T = 95.6\\text{ N}$, (b) Moves up the plane",
            "feedback": "For impending motion down the plane, friction acts up the plane. Setting friction to act downwards yields an incorrect value of $T = 95.6\\text{ N}$."
        },
        {
            "ans": "(a) $T = 40.2\\text{ N}$, (b) Moves down the plane",
            "feedback": "The component of tension up the plane ($144\\text{ N}$) is larger than the component of weight down the plane ($88.2\\text{ N}$), so motion cannot be downwards."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Angled Pull Reduces Normal Reaction",
        "content": "Pulling at an angle $\\beta$ above the incline has a dual effect: the component $T\\cos\\beta$ pulls the object up the plane, while the component $T\\sin\\beta$ lifts the object slightly, reducing the normal reaction ($R = mg\\cos\\alpha - T\\sin\\beta$) and decreasing the maximum available friction."
    }
},
{
    "id": "012217",
    "group_id": "012216",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Statics & Equilibrium",
    "topic": "Inclined Planes & Friction",
    "subtopic": [
        "Horizontal applied force",
        "Normal reaction dependent on force",
        "Range of equilibrium"
    ],
    "img": false,
    "question": "A block of mass $10\\text{ kg}$ rests on a rough plane inclined at $30^\\circ$ to the horizontal. The coefficient of friction between the block and the plane is $\\mu = 0.3$.<br><br>A horizontal force of magnitude $P\\text{ N}$, acting in a vertical plane containing a line of greatest slope, is applied to the block such that it pushes the block towards the incline.<br><em>[Take $g = 9.8\\text{ m s}^{-2}$.]</em><br><br><strong>(a)</strong> Find the value of $P$ for which the block is on the point of sliding down the plane, giving your answer to $3$ significant figures.<br><br><strong>(b)</strong> Find the value of $P$ for which the block is on the point of sliding up the plane, giving your answer to $3$ significant figures.",
    "steps": [
        "<strong>Resolve forces perpendicular to the plane:</strong><br><br>The horizontal force $P$ pushes into the plane with component $P\\sin 30^\\circ$:\\begin{aligned} R &= mg\\cos 30^\\circ + P\\sin 30^\\circ \\cr &= 10(9.8)\\cos 30^\\circ + 0.5P \\cr &\\approx 84.87 + 0.5P \\end{aligned}",
        "<strong>(a) Value of $P$ for slip down:</strong><br><br>Friction $F_{\\text{max}} = 0.3R$ acts up the plane:<br>• Upward forces: $P\\cos 30^\\circ + 0.3R$<br>• Downward weight component: $mg\\sin 30^\\circ = 49\\text{ N}$<br><br>Setting up equilibrium:\\begin{aligned} &P\\cos 30^\\circ + 0.3(84.87 + 0.5P) = 49 \\cr &0.866P + 25.46 + 0.15P = 49 \\cr &1.016P = 23.54 \\cr &P = \\dfrac{23.54}{1.016} \\cr &P \\approx 23.2\\text{ N} \\end{aligned}",
        "<strong>(b) Value of $P$ for slip up:</strong><br><br>Friction $F_{\\text{max}} = 0.3R$ acts down the plane:\\begin{aligned} &P\\cos 30^\\circ = mg\\sin 30^\\circ + 0.3R \\cr &0.866P = 49 + 25.46 + 0.15P \\cr &0.716P = 74.46 \\cr &P = \\dfrac{74.46}{0.716} \\cr &P \\approx 104\\text{ N} \\end{aligned}",
        "Final Answer: (a) $P = 23.2\\text{ N}$, (b) $P = 104\\text{ N}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $P = 27.2\\text{ N}$, (b) $P = 85.5\\text{ N}$",
            "feedback": "Remember that horizontal force $P$ pushes into the slope, so $R = mg\\cos 30^\\circ + P\\sin 30^\\circ$. Using $R = mg\\cos 30^\\circ$ ignores the component of $P$."
        },
        {
            "ans": "(a) $P = 23.2\\text{ N}$, (b) $P = 86.0\\text{ N}$",
            "feedback": "Check the signs when rearranging the slip-up equation: $0.866P - 0.15P = 0.716P$, giving $P = 74.46 / 0.716 \\approx 104\\text{ N}$."
        },
        {
            "ans": "(a) $P = 104\\text{ N}$, (b) $P = 23.2\\text{ N}$",
            "feedback": "The two values are reversed. A smaller force ($23.2\\text{ N}$) prevents slipping down, while a larger force ($104\\text{ N}$) causes the block to slip upwards."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Horizontal Forces Increase Normal Reaction",
        "content": "Unlike a rope pulling upwards at an angle, a horizontal force pushing against an inclined plane pushes the object into the surface. Its perpendicular component $P\\sin\\theta$ adds to the weight component, increasing $R$ and significantly boosting the available friction."
    }
},
{
    "id": "012218",
    "group_id": "012216",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Dynamics",
    "topic": "Inclined Planes & Friction",
    "subtopic": [
        "Newton's second law on an incline",
        "Angled pulling force",
        "Kinematics"
    ],
    "img": false,
    "question": "A crate of mass $8\\text{ kg}$ is pulled up a rough plane inclined at an angle $\\theta$ to the horizontal, where $\\tan\\theta = \\dfrac{3}{4}$. The coefficient of friction between the crate and the plane is $\\mu = 0.25$.<br><br>The crate is pulled by a rope with a constant tension of $91\\text{ N}$ acting at an angle $\\phi$ above the plane, where $\\cos\\phi = \\dfrac{12}{13}$ and $\\sin\\phi = \\dfrac{5}{13}$. The crate starts from rest and moves along a line of greatest slope.<br><em>[Take $g = 9.8\\text{ m s}^{-2}$.]</em><br><br><strong>(a)</strong> Calculate the magnitude of the normal reaction force exerted by the plane on the crate.<br><br><strong>(b)</strong> Calculate the acceleration of the crate up the plane, giving your answer to $3$ significant figures.<br><br><strong>(c)</strong> Find the speed of the crate after it has travelled a distance of $4.0\\text{ m}$ up the plane from rest, giving your answer to $3$ significant figures.",
    "steps": [
        "<strong>(a) Normal reaction force $R$:</strong><br><br>From $\\tan\\theta = \\dfrac{3}{4}$, $\\sin\\theta = 0.6$ and $\\cos\\theta = 0.8$.<br><br>Resolving perpendicular to the plane ($m = 8\\text{ kg}$, $T = 91\\text{ N}$):\\begin{aligned} R &= mg\\cos\\theta - T\\sin\\phi \\cr &= 8(9.8)(0.8) - 91\\left(\\dfrac{5}{13}\\right) \\cr &= 62.72 - 35 \\cr &= 27.72\\text{ N} \\cr &\\approx 27.7\\text{ N} \\end{aligned}",
        "<strong>(b) Acceleration up the plane:</strong><br><br>Friction force opposing motion:\\begin{aligned} F &= \\mu R \\cr &= 0.25(27.72) \\cr &= 6.93\\text{ N} \\end{aligned}<br>Applying Newton's second law up the plane:\\begin{aligned} &T\\cos\\phi - mg\\sin\\theta - F = ma \\cr &91\\left(\\dfrac{12}{13}\\right) - 8(9.8)(0.6) - 6.93 = 8a \\cr &84 - 47.04 - 6.93 = 8a \\cr &30.03 = 8a \\cr &a = \\dfrac{30.03}{8} \\cr &a \\approx 3.75\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(c) Speed after $4.0\\text{ m}$:</strong><br><br>Using $v^2 = u^2 + 2as$ with $u = 0$ and $s = 4.0\\text{ m}$:\\begin{aligned} v^2 &= 0 + 2(3.75375)(4.0) \\cr &= 30.03 \\cr v &= \\sqrt{30.03} \\cr &\\approx 5.48\\text{ m s}^{-1} \\end{aligned}",
        "Final Answer: (a) $R = 27.7\\text{ N}$, (b) $a = 3.75\\text{ m s}^{-2}$, (c) $v = 5.48\\text{ m s}^{-1}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $R = 62.7\\text{ N}$, (b) $a = 3.75\\text{ m s}^{-2}$, (c) $v = 5.48\\text{ m s}^{-1}$",
            "feedback": "Remember that tension pulls at an angle above the plane. You must subtract $T\\sin\\phi = 35\\text{ N}$ from $mg\\cos\\theta$, giving $R = 27.72\\text{ N}$."
        },
        {
            "ans": "(a) $R = 27.7\\text{ N}$, (b) $a = 4.62\\text{ m s}^{-2}$, (c) $v = 6.08\\text{ m s}^{-1}$",
            "feedback": "Friction opposes motion up the slope. Omitting $F = 6.93\\text{ N}$ overestimates the net accelerating force as $36.96\\text{ N}$."
        },
        {
            "ans": "(a) $R = 27.7\\text{ N}$, (b) $a = 3.75\\text{ m s}^{-2}$, (c) $v = 30.0\\text{ m s}^{-1}$",
            "feedback": "Remember to take the square root in $v^2 = 2as$. The value $30.03$ is $v^2$, so $v = \\sqrt{30.03} \\approx 5.48\\text{ m s}^{-1}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Keep Unrounded Values in Memory",
        "content": "Notice that $8a = 30.03$, so $2as = 2(30.03/8)(4) = 30.03$ exactly. Carrying the unrounded fraction through to $v = \\sqrt{30.03} \\approx 5.48\\text{ m s}^{-1}$ prevents rounding discrepancies in multi-part exam questions."
    }
},
{
    "id": "012219",
    "group_id": "012216",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Statics & Equilibrium",
    "topic": "Inclined Planes & Friction",
    "subtopic": [
        "Optimisation of pulling angle",
        "Angle of friction",
        "Minimum force"
    ],
    "img": false,
    "question": "A block of mass $20\\text{ kg}$ rests on a rough horizontal surface that is inclined at an angle of $25^\\circ$ to the horizontal. The coefficient of friction between the block and the plane is $\\mu = 0.6$.<br><br>A force of magnitude $T\\text{ N}$ is applied to the block at an angle $\\beta$ above the inclined plane to pull it up the plane. The angle of friction $\\lambda$ is defined by $\\tan\\lambda = \\mu$.<br><em>[Take $g = 9.8\\text{ m s}^{-2}$.]</em><br><br><strong>(a)</strong> Show that the magnitude of the force $T$ required to move the block up the plane is given by:<br>$$T = \\dfrac{mg(\\sin 25^\\circ + \\mu\\cos 25^\\circ)}{\\cos\\beta + \\mu\\sin\\beta}$$<br><strong>(b)</strong> By expressing the denominator in the form $R\\cos(\\beta - \\lambda)$, find the angle $\\beta$ that minimises the required pulling force $T$.<br><br><strong>(c)</strong> Calculate the minimum force $T_{\\min}$ required to pull the block up the plane, giving your answer to $3$ significant figures.",
    "steps": [
        "<strong>(a) Derive the expression for $T$:</strong><br><br>Resolving perpendicular to the plane:\\begin{aligned} R &= mg\\cos 25^\\circ - T\\sin\\beta \\end{aligned}<br>To move up the plane, $F = \\mu R$ acts down the plane:\\begin{aligned} &T\\cos\\beta = mg\\sin 25^\\circ + \\mu R \\cr &T\\cos\\beta = mg\\sin 25^\\circ \\cr &\\qquad + \\mu(mg\\cos 25^\\circ - T\\sin\\beta) \\cr &T(\\cos\\beta + \\mu\\sin\\beta) \\cr &\\qquad = mg(\\sin 25^\\circ + \\mu\\cos 25^\\circ) \\cr &T = \\dfrac{mg(\\sin 25^\\circ + \\mu\\cos 25^\\circ)}{\\cos\\beta + \\mu\\sin\\beta} \\end{aligned}",
        "<strong>(b) Optimal angle $\\beta$:</strong><br><br>Substitute $\\mu = \\tan\\lambda = \\dfrac{\\sin\\lambda}{\\cos\\lambda}$ into the denominator:\\begin{aligned} &\\cos\\beta + \\tan\\lambda\\sin\\beta \\cr &\\quad = \\dfrac{\\cos\\beta\\cos\\lambda + \\sin\\beta\\sin\\lambda}{\\cos\\lambda} \\cr &\\quad = \\dfrac{\\cos(\\beta - \\lambda)}{\\cos\\lambda} \\end{aligned}<br>To minimise $T$, the denominator must be maximised, which occurs when $\\cos(\\beta - \\lambda) = 1$, giving $\\beta = \\lambda$:\\begin{aligned} \\beta &= \\arctan(\\mu) \\cr &= \\arctan(0.6) \\cr &\\approx 31.0^\\circ \\end{aligned}",
        "<strong>(c) Calculate $T_{\\min}$:</strong><br><br>When $\\beta = 31.0^\\circ$, the denominator evaluates to \\begin{aligned}\\sqrt{1 + \\mu^2} &= \\sqrt{1 + 0.6^2}\\cr & = \\sqrt{1.36} \\cr &\\approx 1.1662\\end{aligned}\\begin{aligned} &T_{\\min} \\cr & \\quad= \\dfrac{20(9.8)(\\sin 25^\\circ + 0.6\\cos 25^\\circ)}{\\sqrt{1.36}} \\cr & \\quad= \\dfrac{196(0.42262 + 0.54378)}{1.1662} \\cr & \\quad= \\dfrac{196(0.9664)}{1.1662} \\cr & \\quad\\approx 162\\text{ N} \\end{aligned}",
        "Final Answer: (a) $T = \\dfrac{mg(\\sin 25^\\circ + \\mu\\cos 25^\\circ)}{\\cos\\beta + \\mu\\sin\\beta}$, (b) $\\beta = 31.0^\\circ$, (c) $T_{\\min} = 162\\text{ N}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $T = \\dfrac{mg(\\sin 25^\\circ + \\mu\\cos 25^\\circ)}{\\cos\\beta + \\mu\\sin\\beta}$, (b) $\\beta = 0.0^\\circ$, (c) $T_{\\min} = 189\\text{ N}$",
            "feedback": "Pulling parallel to the plane ($\\beta = 0^\\circ$) does not minimise $T$. Pulling slightly upward lifts the object and reduces friction, achieving a lower minimum force of $162\\text{ N}$."
        },
        {
            "ans": "(a) $T = \\dfrac{mg(\\sin 25^\\circ + \\mu\\cos 25^\\circ)}{\\cos\\beta + \\mu\\sin\\beta}$, (b) $\\beta = 25.0^\\circ$, (c) $T_{\\min} = 162\\text{ N}$",
            "feedback": "The optimal pulling angle equals the angle of friction $\\lambda = \\arctan(\\mu) \\approx 31.0^\\circ$, which is independent of the slope angle of $25^\\circ$."
        },
        {
            "ans": "(a) $T = \\dfrac{mg(\\sin 25^\\circ + \\mu\\cos 25^\\circ)}{\\cos\\beta + \\mu\\sin\\beta}$, (b) $\\beta = 31.0^\\circ$, (c) $T_{\\min} = 189\\text{ N}$",
            "feedback": "Remember that at the minimum force, the maximum value of the denominator is $\\sqrt{1 + \\mu^2} \\approx 1.166$, rather than $1$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Pulling at the Angle of Friction",
        "content": "A famous classical mechanics result: to pull an object along any rough plane with minimum effort, you should always pull at an angle equal to the angle of friction $\\lambda = \\arctan\\mu$ above the plane. Pulling slightly upwards lifts the object, reducing friction faster than it reduces forward pulling force."
    }
},
{
    "id": "012220",
    "group_id": "012216",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Statics & Equilibrium",
    "topic": "Inclined Planes & Friction",
    "subtopic": [
        "Pushing into the plane",
        "Limiting equilibrium condition",
        "Friction limits"
    ],
    "img": false,
    "question": "A packing case of mass $25\\text{ kg}$ rests on a rough plane inclined at an angle of $20^\\circ$ to the horizontal. The coefficient of friction between the case and the plane is $\\mu = 0.45$.<br><br>A force of magnitude $F\\text{ N}$ is applied to the case, acting downwards at an angle of $30^\\circ$ below the line of greatest slope (pushing the case into the plane).<br><em>[Take $g = 9.8\\text{ m s}^{-2}$.]</em><br><br><strong>(a)</strong> Show that the normal reaction force $R$ exerted by the plane on the case is given by $R = 25g\\cos 20^\\circ + F\\sin 30^\\circ$.<br><br><strong>(b)</strong> Explain why increasing the magnitude of the pushing force $F$ increases the maximum available frictional force.<br><br><strong>(c)</strong> Determine whether the case can be made to slide down the plane by increasing $F$ indefinitely, and calculate the minimum value of $F$ required to initiate downward motion if it is possible.",
    "steps": [
        "<strong>(a) Normal reaction:</strong><br><br>The pushing force $F$ acts at $30^\\circ$ below the slope, so its component pushing into the surface is $F\\sin 30^\\circ$.<br><br>Resolving perpendicular to the plane:\\begin{aligned} R &= 25g\\cos 20^\\circ + F\\sin 30^\\circ \\end{aligned}",
        "<strong>(b) Effect on maximum friction:</strong><br><br>Because $R$ contains the term $+F\\sin 30^\\circ$, increasing $F$ increases the normal reaction. Since maximum static friction is directly proportional to normal reaction ($F_{\\text{max}} = \\mu R$), the maximum available friction increases as $F$ increases.",
        "<strong>(c) Condition for downward motion:</strong><br><br>For downward motion to occur, the component of force pulling down the slope must exceed maximum friction:\\begin{aligned} &F\\cos 30^\\circ + mg\\sin 20^\\circ > \\mu R \\cr &F\\cos 30^\\circ + 25g\\sin 20^\\circ \\cr &\\quad > 0.45(25g\\cos 20^\\circ + F\\sin 30^\\circ) \\cr &0.8660F + 83.794 \\cr & \\qquad \\quad> 103.60 + 0.2250F \\cr &0.6410F > 19.806 \\cr &F > \\dfrac{19.806}{0.6410} \\cr &F > 30.9\\text{ N} \\end{aligned}<br>Because the net driving coefficient ($0.6410$) is positive, increasing $F$ increases the driving force faster than friction. Thus, motion is possible and the minimum force is $30.9\\text{ N}$.",
        "Final Answer: (a) $R = 25g\\cos 20^\\circ + F\\sin 30^\\circ$, (b) Increases $R$ hence increases $\\mu R$, (c) Yes, $F_{\\min} = 30.9\\text{ N}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $R = 25g\\cos 20^\\circ + F\\sin 30^\\circ$, (b) Increases $R$ hence increases $\\mu R$, (c) No, friction always exceeds driving force",
            "feedback": "Because $\\cos 30^\\circ > \\mu\\sin 30^\\circ$ ($0.866 > 0.225$), the driving component grows faster than friction as $F$ increases. Motion is initiated once $F > 30.9\\text{ N}$."
        },
        {
            "ans": "(a) $R = 25g\\cos 20^\\circ + F\\sin 30^\\circ$, (b) Increases $R$ hence increases $\\mu R$, (c) Yes, $F_{\\min} = 22.9\\text{ N}$",
            "feedback": "Remember to include the $+F\\sin 30^\\circ$ term when calculating normal reaction. Omitting it underestimates the required pushing force."
        },
        {
            "ans": "(a) $R = 25g\\cos 20^\\circ + F\\sin 30^\\circ$, (b) Increases $R$ hence increases $\\mu R$, (c) Yes, $F_{\\min} = 45.2\\text{ N}$",
            "feedback": "Check the friction equation: \\begin{aligned}0.6410F &> 19.806 \\cr\\implies F &> \\frac{19.806}{0.6410} \\cr & \\approx 30.9\\text{ N}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Self-Locking Conditions",
        "content": "A pushing force can only cause motion if its component along the slope exceeds the friction it creates: \\begin{aligned}F\\cos\\theta &> \\mu F\\sin\\theta\\cr \\implies \\tan\\theta &< \\frac{1}{\\mu}\\end{aligned} Here, $\\tan 30^\\circ \\approx 0.577$ and $\\frac{1}{0.45} \\approx 2.22$, so pushing harder does indeed initiate motion."
    }
},
{
    "id": "012221",
    "group_id": "012221",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Projectiles",
    "subtopic": [
        "Horizontal Range",
        "Two-Particle Collision"
    ],
    "img": false,
    "question": "Points $A$ and $B$ lie on horizontal ground. At time $t = 0\\text{ s}$, an object $P$ is projected from $A$ towards $B$ such that the range of $P$ is equal to the distance $AB$. The initial speed of projection of $P$ is $29.4\\text{ m s}^{-1}$ at an angle of $30^\\circ$ above the horizontal.<br><br><strong>(a)</strong> Calculate the range $AB$ of object $P$, giving your answer in exact form and to 3 significant figures.<br><br><strong>(b)</strong> At time $t = 1\\text{ s}$, another object $Q$ is projected from $B$ towards $A$ with the same speed of projection of $29.4\\text{ m s}^{-1}$ and at the same angle of $30^\\circ$ above the horizontal.<br><br>Determine the height above the ground at which $P$ and $Q$ collide.",
    "steps": [
        "<strong>(a) Resolve initial velocity and find range:</strong><br><br>Resolving the initial velocity of $P$ into horizontal and vertical components:\\begin{aligned} u_x &= 29.4\\cos 30^\\circ \\cr &= 14.7\\sqrt{3}\\text{ m s}^{-1} \\end{aligned}\\begin{aligned} u_y &= 29.4\\sin 30^\\circ \\cr &= 14.7\\text{ m s}^{-1} \\end{aligned}To find the time of flight $T$, set vertical displacement $y = 0$:\\begin{aligned} &u_y T - \\dfrac{1}{2}gT^2 = 0 \\cr &14.7T - 4.9T^2 = 0 \\cr &4.9T(3 - T) = 0 \\cr &T = 3\\text{ s} \\end{aligned}The horizontal range $AB$ is:\\begin{aligned} AB &= u_x T \\cr &= 14.7\\sqrt{3} \\times 3 \\cr &= 44.1\\sqrt{3}\\text{ m} \\cr & \\approx 76.4\\text{ m} \\end{aligned}",
        "<strong>(b) Form horizontal equations to find collision time:</strong><br><br>Let $t$ be the time elapsed in seconds since $P$ was launched.<br><br>Horizontal displacement of $P$ from $A$:\\begin{aligned} x_P &= 14.7\\sqrt{3}t \\end{aligned}Particle $Q$ is launched from $B$ at $t = 1\\text{ s}$ moving towards $A$, so its time of flight is $(t - 1)\\text{ s}$. Its position from $A$ is:\\begin{aligned} x_Q &= AB - 14.7\\sqrt{3}(t - 1) \\end{aligned}Setting $x_P = x_Q$ for collision:\\begin{aligned} &14.7\\sqrt{3}t = 44.1\\sqrt{3} \\cr & \\qquad - 14.7\\sqrt{3}(t - 1) \\cr &t = 3 - (t - 1) \\cr &2t = 4 \\cr &t = 2\\text{ s} \\end{aligned}",
        "<strong>Calculate the height of collision:</strong><br><br>Substitute $t = 2\\text{ s}$ into the vertical displacement equation for $P$:\\begin{aligned} y &= u_y t - \\dfrac{1}{2}gt^2 \\cr &= 14.7(2) - 4.9(2^2) \\cr &= 29.4 - 19.6 \\cr &= 9.8\\text{ m} \\end{aligned}",
        "Final Answer: (a) $44.1\\sqrt{3}\\text{ m} \\approx 76.4\\text{ m}$, (b) $9.8\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $88.2\\sqrt{3}\\text{ m} \\approx 153\\text{ m}$, (b) $9.8\\text{ m}$",
            "feedback": "In part (a), you used $2u^2\\sin(2\\alpha)/g$ instead of $u^2\\sin(2\\alpha)/g$, erroneously doubling the total horizontal range."
        },
        {
            "ans": "(a) $44.1\\sqrt{3}\\text{ m} \\approx 76.4\\text{ m}$, (b) $14.7\\text{ m}$",
            "feedback": "In part (b), you assumed the particles meet at $t = 1.5\\text{ s}$ (the midpoint of the total flight time), forgetting that particle $Q$ was launched with a $1\\text{ s}$ delay."
        },
        {
            "ans": "(a) $44.1\\sqrt{3}\\text{ m} \\approx 76.4\\text{ m}$, (b) $4.9\\text{ m}$",
            "feedback": "In the vertical position equation, you subtracted $gt^2$ rather than $\\frac{1}{2}gt^2$, calculating $29.4 - 9.8(4)/2$ incorrectly."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Symmetry in Opposing Projectiles",
        "content": "When two particles are projected towards one another with identical launch speeds and elevation angles across a gap equal to their common range $R$, their horizontal closure speed is always $2u_x$. Because $Q$ is launched $t_0 = 1\\text{ s}$ later, the collision time is neatly given by $t = \\frac{T + t_0}{2} = \\frac{3 + 1}{2} = 2\\text{ s}$. Furthermore, because their vertical motion profiles are identical parabolas shifted in time, both particles are guaranteed to be at precisely the same height at this exact moment: $y_P(2) = y_Q(1) = 9.8\\text{ m}$."
    }
},
{
    "id": "012222",
    "group_id": "012221",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Projectiles",
    "subtopic": [
        "Target Interception",
        "Simultaneous Projection"
    ],
    "img": false,
    "question": "A particle $P$ is projected from a point $O$ on horizontal ground with speed $20\\text{ m s}^{-1}$ at an angle of elevation $\\alpha$, where $\\tan\\alpha = \\dfrac{3}{4}$.<br><br>A vertical cliff of height $15\\text{ m}$ stands with its base on the ground at a horizontal distance of $32\\text{ m}$ from $O$.<br><br><strong>(a)</strong> Calculate the vertical height of $P$ when it has travelled a horizontal distance of $32\\text{ m}$ from $O$, and explain why $P$ would strike the vertical face of the cliff if its motion were uninterrupted.<br><br><strong>(b)</strong> At the same instant that $P$ is projected from $O$, a second particle $Q$ is projected horizontally with speed $U\\text{ m s}^{-1}$ from the top edge of the cliff directly towards $O$. The particles move in the same vertical plane and collide in mid-air before reaching the ground or the cliff face.<br><br>(i) Find the time $t$ elapsed between projection and collision.<br>(ii) Calculate the required launch speed $U$ of particle $Q$.<br>(iii) Determine the height above the ground at which the collision occurs.",
    "steps": [
        "<strong>(a) Find initial components and height at distance 32 m:</strong><br><br>From $\\tan\\alpha = \\frac{3}{4}$, we have $\\cos\\alpha = \\frac{4}{5} = 0.8$ and $\\sin\\alpha = \\frac{3}{5} = 0.6$.\\begin{aligned} u_{Px} &= 20(0.8) = 16\\text{ m s}^{-1} \\cr u_{Py} &= 20(0.6) = 12\\text{ m s}^{-1} \\end{aligned} Time to travel $32\\text{ m}$ horizontally:\\begin{aligned} t &= \\dfrac{32}{16} \\cr &= 2\\text{ s} \\end{aligned}Height of $P$ at $t = 2\\text{ s}$:\\begin{aligned} y_P &= 12(2) - 4.9(2^2) \\cr &= 24 - 19.6 \\cr &= 4.4\\text{ m} \\end{aligned}Because $0 < 4.4\\text{ m} < 15\\text{ m}$, the particle has neither cleared the top edge nor hit the ground, meaning it would strike the cliff face.",
        "<strong>(b)(i) Equate vertical positions to find collision time:</strong><br><br>Taking the ground as $y = 0$, both particles experience downward acceleration $g = 9.8\\text{ m s}^{-2}$.<br><br>Vertical position of $P$:\\begin{aligned} y_P &= 12t - 4.9t^2 \\end{aligned}Particle $Q$ is projected horizontally from height $15\\text{ m}$, so $u_{Qy} = 0$:\\begin{aligned} y_Q &= 15 - 4.9t^2 \\end{aligned}For collision, $y_P = y_Q$:\\begin{aligned} &12t - 4.9t^2 = 15 - 4.9t^2 \\cr &12t = 15 \\cr &t = 1.25\\text{ s} \\end{aligned}",
        "<strong>(b)(ii) Determine horizontal speed U:</strong><br><br>In $1.25\\text{ s}$, particle $P$ travels horizontally:\\begin{aligned} x_P &= 16 \\times 1.25 \\cr &= 20\\text{ m} \\end{aligned}Since the total distance between $O$ and the cliff is $32\\text{ m}$, particle $Q$ must travel:\\begin{aligned} x_Q &= 32 - 20 \\cr &= 12\\text{ m} \\end{aligned}Therefore:\\begin{aligned} U &= \\dfrac{12}{1.25} \\cr &= 9.6\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(b)(iii) Calculate collision height:</strong><br><br>Substitute $t = 1.25\\text{ s}$ into $y_Q$:\\begin{aligned} y &= 15 - 4.9(1.25^2) \\cr &= 15 - 4.9(1.5625) \\cr &= 15 - 7.65625 \\cr &= 7.34375\\text{ m} \\cr & \\approx 7.34\\text{ m} \\end{aligned}",
        "Final Answer: (a) $4.4\\text{ m} < 15\\text{ m}$, (b)(i) $1.25\\text{ s}$, (ii) $9.6\\text{ m s}^{-1}$, (iii) $7.34\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $4.4\\text{ m} < 15\\text{ m}$, (b)(i) $1.25\\text{ s}$, (ii) $16.0\\text{ m s}^{-1}$, (iii) $7.34\\text{ m}$",
            "feedback": "In part (b)(ii), you computed $U$ by dividing the total distance $20\\text{ m}$ covered by $P$ by $1.25\\text{ s}$, rather than using the remaining distance of $12\\text{ m}$ traversed by $Q$."
        },
        {
            "ans": "(a) $4.4\\text{ m} < 15\\text{ m}$, (b)(i) $1.50\\text{ s}$, (ii) $8.0\\text{ m s}^{-1}$, (iii) $6.98\\text{ m}$",
            "feedback": "In part (b)(i), you made an arithmetic slip setting $12t = 18$ instead of $12t = 15$, leading to an incorrect time of flight of $1.50\\text{ s}$."
        },
        {
            "ans": "(a) $4.4\\text{ m} < 15\\text{ m}$, (b)(i) $1.25\\text{ s}$, (ii) $9.6\\text{ m s}^{-1}$, (iii) $8.88\\text{ m}$",
            "feedback": "In part (b)(iii), you evaluated the vertical position using $y = 12t - \\frac{1}{2}gt$ instead of squaring $t$ in the acceleration term."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Quadratic Gravity Cancellation",
        "content": "Notice how the quadratic terms $-4.9t^2$ cancel out completely when equating $y_P(t) = y_Q(t)$. Because both projectiles experience the identical downward acceleration of gravity, the relative vertical acceleration between them is zero. Particle $P$ effectively approaches particle $Q$ vertically at a constant relative velocity of $12\\text{ m s}^{-1}$. Thus, the collision time is simply the initial vertical separation divided by the initial relative vertical velocity: $t = \\frac{15}{12} = 1.25\\text{ s}$."
    }
},
{
    "id": "012223",
    "group_id": "012221",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Projectiles",
    "subtopic": [
        "Trajectory Equation",
        "Clearance Inequality"
    ],
    "img": false,
    "question": "A particle is projected from a point $O$ on horizontal ground with initial speed $u\\text{ m s}^{-1}$ at an angle of elevation $\\theta$ above the horizontal.<br><br><strong>(a)</strong> Show that the Cartesian equation of the trajectory of the particle, referred to horizontal and vertical axes through $O$, is given by:$$y = x\\tan\\theta - \\dfrac{gx^2}{2u^2}(1 + \\tan^2\\theta)$$<strong>(b)</strong> Given that $u = 14\\text{ m s}^{-1}$ and taking $g = 9.8\\text{ m s}^{-2}$, the particle is required to clear a thin vertical barrier of height $5\\text{ m}$ situated at a horizontal distance of $10\\text{ m}$ from $O$.<br><br>Find the range of possible values for the angle of projection $\\theta$, giving the boundary angles in degrees to 1 decimal place.<br><br><strong>(c)</strong> For the smaller of the two boundary angles found in part <strong>(b)</strong>, determine the speed and direction of motion of the particle as it passes directly above the top of the barrier.",
    "steps": [
        "<strong>(a) Derive the trajectory equation:</strong><br><br>The parametric equations of motion are:\\begin{aligned} x &= (u\\cos\\theta)t \\cr y &= (u\\sin\\theta)t - \\dfrac{1}{2}gt^2 \\end{aligned}Rearranging for $t$:\\begin{aligned} t &= \\dfrac{x}{u\\cos\\theta} \\end{aligned}Substitute $t$ into the vertical equation:\\begin{aligned} y &= u\\sin\\theta\\left(\\dfrac{x}{u\\cos\\theta}\\right) \\cr & \\qquad - \\dfrac{g}{2}\\left(\\dfrac{x}{u\\cos\\theta}\\right)^2 \\cr &= x\\tan\\theta - \\dfrac{gx^2}{2u^2\\cos^2\\theta} \\end{aligned}Using the identity $\\sec^2\\theta = 1 + \\tan^2\\theta$:\\begin{aligned} y &= x\\tan\\theta - \\dfrac{gx^2}{2u^2}(1 + \\tan^2\\theta) \\end{aligned}",
        "<strong>(b) Set up and solve the quadratic inequality:</strong><br><br>Substitute $x = 10$, $u = 14$, and $g = 9.8$:\\begin{aligned} \\dfrac{gx^2}{2u^2} &= \\dfrac{9.8 \\times 100}{2 \\times 196} \\cr &= \\dfrac{980}{392} \\cr &= 2.5 \\end{aligned}The trajectory equation becomes:\\begin{aligned} y &= 10\\tan\\theta - 2.5(1 + \\tan^2\\theta) \\end{aligned}To clear the barrier, require $y > 5$:\\begin{aligned} &10\\tan\\theta - 2.5 - 2.5\\tan^2\\theta > 5 \\cr &2.5\\tan^2\\theta - 10\\tan\\theta + 7.5 < 0 \\cr &\\tan^2\\theta - 4\\tan\\theta + 3 < 0 \\cr &(\\tan\\theta - 1)(\\tan\\theta - 3) < 0 \\cr &1 < \\tan\\theta < 3 \\end{aligned}Boundary angles:\\begin{aligned} \\theta_1 &= \\arctan(1) = 45.0^\\circ \\cr \\theta_2 &= \\arctan(3) \\approx 71.6^\\circ \\end{aligned}Thus: $45.0^\\circ < \\theta < 71.6^\\circ$.",
        "<strong>(c) Find velocity components at barrier for smaller angle:</strong><br><br>For $\\theta = 45^\\circ$:\\begin{aligned} u_x &= 14\\cos 45^\\circ = 7\\sqrt{2}\\text{ m s}^{-1} \\cr u_y &= 14\\sin 45^\\circ = 7\\sqrt{2}\\text{ m s}^{-1} \\end{aligned}Time to reach $x = 10\\text{ m}$:\\begin{aligned} t &= \\dfrac{10}{7\\sqrt{2}} = \\dfrac{5\\sqrt{2}}{7}\\text{ s} \\end{aligned}Vertical velocity $v_y$ at $x = 10\\text{ m}$:\\begin{aligned} v_y &= 7\\sqrt{2} - 9.8\\left(\\dfrac{5\\sqrt{2}}{7}\\right) \\cr &= 7\\sqrt{2} - 1.4(5\\sqrt{2}) \\cr &= 7\\sqrt{2} - 7\\sqrt{2} \\cr &= 0\\text{ m s}^{-1} \\end{aligned}Since $v_y = 0$, the particle is at its maximum height. Its speed is purely horizontal:\\begin{aligned} v &= v_x \\cr &= 7\\sqrt{2} \\cr & \\approx 9.90\\text{ m s}^{-1}\\text{ horizontally} \\end{aligned}",
        "Final Answer: (a) Proof complete, (b) $45.0^\\circ < \\theta < 71.6^\\circ$, (c) $9.90\\text{ m s}^{-1}$ horizontally"
    ],
    "pi_options": [
        {
            "ans": "(a) Proof complete, (b) $35.0^\\circ < \\theta < 65.4^\\circ$, (c) $9.90\\text{ m s}^{-1}$ horizontally",
            "feedback": "In part (b), an arithmetic error was made when simplifying $980/392$, leading to incorrect quadratic coefficients and angles."
        },
        {
            "ans": "(a) Proof complete, (b) $45.0^\\circ < \\theta < 71.6^\\circ$, (c) $14.0\\text{ m s}^{-1}$ at $45.0^\\circ$",
            "feedback": "In part (c), you stated the initial velocity at launch instead of evaluating the velocity vector when passing over the barrier."
        },
        {
            "ans": "(a) Proof complete, (b) $45.0^\\circ < \\theta < 71.6^\\circ$, (c) $9.90\\text{ m s}^{-1}$ at $18.4^\\circ$ downwards",
            "feedback": "In part (c), you miscalculated the vertical velocity by neglecting the initial upward velocity $u_y$, treating $v_y$ as $-gt$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: The Apex Clearance Property",
        "content": "For a fixed speed $u$, there are generally two distinct trajectories that pass through any given point $(X, Y)$ within range: a direct, low-angle flat trajectory and a high-arching lob trajectory. Here, the lower boundary angle $\\theta = 45^\\circ$ yields $v_y = 0$ exactly at $x = 10\\text{ m}$. This indicates that the apex of this low trajectory occurs precisely at the barrier top $(10, 5)$, touching it tangentially."
    }
},
{
    "id": "012224",
    "group_id": "012221",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Projectiles",
    "subtopic": [
        "Vectors in Kinematics",
        "Apex Interception"
    ],
    "img": false,
    "question": "At time $t = 0\\text{ s}$, a distress flare $P$ is fired from the origin $O$ on horizontal ground with initial velocity vector $\\mathbf{u}_P = (18\\mathbf{i} + 24.5\\mathbf{j})\\text{ m s}^{-1}$, where $\\mathbf{i}$ and $\\mathbf{j}$ are horizontal and vertically upward unit vectors respectively. The flare moves freely under gravity, with acceleration $-9.8\\mathbf{j}\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Find the position vector $\\mathbf{r}_P$ of the flare at time $t\\text{ s}$.<br><br><strong>(b)</strong> Find the time taken for $P$ to reach its highest point above the ground, and state its position vector at this instant.<br><br><strong>(c)</strong> At time $t = 1.5\\text{ s}$, an interceptor projectile $Q$ is launched from a point on the ground with position vector $55\\mathbf{i}\\text{ m}$ with initial velocity $\\mathbf{u}_Q = (v_x \\mathbf{i} + v_y \\mathbf{j})\\text{ m s}^{-1}$.<br><br>Given that $Q$ successfully intercepts $P$ at the highest point of $P$'s trajectory:<br><br>(i) Find the velocity vector $\\mathbf{u}_Q$ of the interceptor.<br>(ii) Calculate the speed of projection and angle of elevation at which $Q$ was launched, giving your answers to 3 significant figures.",
    "steps": [
        "<strong>(a) Express the position vector of P:</strong><br><br>Integrating acceleration $\\mathbf{a} = -9.8\\mathbf{j}\\text{ m s}^{-2}$ twice with initial velocity $\\mathbf{u}_P = 18\\mathbf{i} + 24.5\\mathbf{j}$ and $\\mathbf{r}(0) = \\mathbf{0}$:\\begin{aligned} \\mathbf{r}_P(t) &= \\mathbf{u}_P t + \\dfrac{1}{2}\\mathbf{a}t^2 \\cr &= (18t)\\mathbf{i} \\cr & \\qquad + (24.5t - 4.9t^2)\\mathbf{j}\\text{ m} \\end{aligned}",
        "<strong>(b) Find the apex time and position vector:</strong><br><br>At the maximum height of $P$, the vertical velocity component vanishes:\\begin{aligned} v_{Py} &= 24.5 - 9.8t = 0 \\cr t &= \\dfrac{24.5}{9.8} \\cr &= 2.5\\text{ s} \\end{aligned}Substitute $t = 2.5\\text{ s}$ into $\\mathbf{r}_P$:\\begin{aligned} x_P(2.5) &= 18(2.5) = 45\\text{ m} \\cr y_P(2.5) &= 24.5(2.5) - 4.9(2.5^2) \\cr &= 61.25 - 30.625 \\cr &= 30.625\\text{ m} \\end{aligned}Thus:\\begin{aligned} \\mathbf{r}_P(2.5) &= (45\\mathbf{i} + 30.6\\mathbf{j})\\text{ m} \\end{aligned}",
        "<strong>(c)(i) Calculate initial velocity vector of interceptor:</strong><br><br>Interceptor $Q$ is launched at $t = 1.5\\text{ s}$ and reaches $P$ at $t = 2.5\\text{ s}$. The time of flight of $Q$ is:\\begin{aligned} \\Delta t &= 2.5 - 1.5 = 1\\text{ s} \\end{aligned}Displacement required from $(55, 0)$ to $(45, 30.625)$:\\begin{aligned} s_x &= 45 - 55 = -10\\text{ m} \\cr s_y &= 30.625\\text{ m} \\end{aligned}Horizontal velocity:\\begin{aligned} v_x(1) &= -10 \\implies v_x = -10\\text{ m s}^{-1} \\end{aligned}Vertical motion over $\\Delta t = 1\\text{ s}$:\\begin{aligned} &s_y = v_y(\\Delta t) - \\dfrac{1}{2}g(\\Delta t)^2 \\cr &30.625 = v_y(1) - 4.9(1^2) \\cr &v_y = 30.625 + 4.9 \\cr &v_y = 35.525\\text{ m s}^{-1} \\end{aligned}Thus, the initial velocity vector is:\\begin{aligned} \\mathbf{u}_Q &= (-10\\mathbf{i} + 35.5\\mathbf{j})\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(c)(ii) Calculate launch speed and elevation angle:</strong><br><br>The speed of projection is the magnitude of $\\mathbf{u}_Q$:\\begin{aligned} |\\mathbf{u}_Q| &= \\sqrt{(-10)^2 + 35.525^2} \\cr &= \\sqrt{100 + 1262.0256} \\cr &= \\sqrt{1362.0256} \\cr & \\approx 36.9\\text{ m s}^{-1} \\end{aligned}The angle of elevation $\\theta$ above the horizontal towards $O$ is:\\begin{aligned} \\theta &= \\arctan\\left(\\dfrac{35.525}{|-10|}\\right) \\cr &= \\arctan(3.5525) \\cr & \\approx 74.3^\\circ \\end{aligned}",
        "Final Answer: (a) $\\mathbf{r}_P = 18t\\mathbf{i} + (24.5t - 4.9t^2)\\mathbf{j}\\text{ m}$, (b) $2.5\\text{ s}$, $(45\\mathbf{i} + 30.6\\mathbf{j})\\text{ m}$, (c)(i) $(-10\\mathbf{i} + 35.5\\mathbf{j})\\text{ m s}^{-1}$, (ii) $36.9\\text{ m s}^{-1}$ at $74.3^\\circ$"
    ],
    "pi_options": [
        {
            "ans": "(a) $\\mathbf{r}_P = 18t\\mathbf{i} + (24.5t - 4.9t^2)\\mathbf{j}\\text{ m}$, (b) $2.5\\text{ s}$, $(45\\mathbf{i} + 30.6\\mathbf{j})\\text{ m}$, (c)(i) $(10\\mathbf{i} + 35.5\\mathbf{j})\\text{ m s}^{-1}$, (ii) $36.9\\text{ m s}^{-1}$ at $74.3^\\circ$",
            "feedback": "In part (c)(i), you gave a positive $\\mathbf{i}$ component. Because $Q$ starts at $x = 55$ and moves towards the target at $x = 45$, its horizontal velocity must be directed in the negative $\\mathbf{i}$ direction (towards $O$)."
        },
        {
            "ans": "(a) $\\mathbf{r}_P = 18t\\mathbf{i} + (24.5t - 4.9t^2)\\mathbf{j}\\text{ m}$, (b) $2.5\\text{ s}$, $(45\\mathbf{i} + 30.6\\mathbf{j})\\text{ m}$, (c)(i) $(-10\\mathbf{i} + 25.7\\mathbf{j})\\text{ m s}^{-1}$, (ii) $27.6\\text{ m s}^{-1}$ at $68.7^\\circ$",
            "feedback": "In part (c)(i), you subtracted $4.9$ from $30.625$ instead of adding it when solving $30.625 = v_y - 4.9$, mismanaging the sign of the gravity term."
        },
        {
            "ans": "(a) $\\mathbf{r}_P = 18t\\mathbf{i} + (24.5t - 4.9t^2)\\mathbf{j}\\text{ m}$, (b) $2.5\\text{ s}$, $(45\\mathbf{i} + 30.6\\mathbf{j})\\text{ m}$, (c)(i) $(-4\\mathbf{i} + 24.5\\mathbf{j})\\text{ m s}^{-1}$, (ii) $24.8\\text{ m s}^{-1}$ at $80.7^\\circ$",
            "feedback": "In part (c), you used the full flare flight time $t = 2.5\\text{ s}$ instead of the flight duration of the interceptor $\\Delta t = 2.5 - 1.5 = 1\\text{ s}$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Shifted Time Frames in Multi-Body Problems",
        "content": "A very common error in multi-projectile problems is using the absolute time $t = 2.5\\text{ s}$ in the equations of motion for both particles. Particle $Q$ is in the air for only $\\Delta t = 2.5 - 1.5 = 1.0\\text{ s}$. Always define the flight interval $\\Delta t = t - t_{\\text{launch}}$ explicitly before writing down the SUVAT displacements."
    }
},
{
    "id": "012225",
    "group_id": "012221",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Projectiles",
    "subtopic": [
        "Elevated Projection",
        "Time Window Above Altitude"
    ],
    "img": false,
    "question": "A stone is projected from a point $A$ at the edge of a vertical cliff of height $49\\text{ m}$ above sea level. The initial speed of projection is $24.5\\text{ m s}^{-1}$ at an angle of elevation $\\theta$ above the horizontal, where $\\tan\\theta = \\dfrac{3}{4}$. The stone travels in a vertical plane perpendicular to the cliff edge and lands in the sea.<br><br><strong>(a)</strong> Show that the time of flight of the stone from $A$ to the surface of the sea is $5\\text{ s}$.<br><br><strong>(b)</strong> Calculate the horizontal distance from the base of the cliff to the point where the stone enters the sea.<br><br><strong>(c)</strong> Determine the total length of time during which the stone is at least $58.8\\text{ m}$ above sea level.<br><br><strong>(d)</strong> Calculate the speed with which the stone enters the sea.",
    "steps": [
        "<strong>(a) Show time of flight is 5 s:</strong><br><br>Given $\\tan\\theta = \\frac{3}{4}$, $\\cos\\theta = 0.8$ and $\\sin\\theta = 0.6$.\\begin{aligned} u_x &= 24.5(0.8) = 19.6\\text{ m s}^{-1} \\cr u_y &= 24.5(0.6) = 14.7\\text{ m s}^{-1} \\end{aligned}Taking upwards as positive with origin at $A$, the sea is at $s_y = -49\\text{ m}$:\\begin{aligned} &-49 = 14.7t - 4.9t^2 \\cr &4.9t^2 - 14.7t - 49 = 0 \\end{aligned}Dividing the entire equation by $4.9$:\\begin{aligned} &t^2 - 3t - 10 = 0 \\cr &(t - 5)(t + 2) = 0 \\end{aligned}Since $t > 0$, the time of flight is $t = 5\\text{ s}$.",
        "<strong>(b) Calculate the horizontal range:</strong><br><br>The horizontal speed is constant throughout flight:\\begin{aligned} x &= u_x t \\cr &= 19.6 \\times 5 \\cr &= 98\\text{ m} \\end{aligned}",
        "<strong>(c) Determine duration above 58.8 m:</strong><br><br>An altitude of $58.8\\text{ m}$ above sea level corresponds to a displacement of $58.8 - 49 = 9.8\\text{ m}$ above the launch point $A$.\\begin{aligned} &14.7t - 4.9t^2 \\ge 9.8 \\cr &4.9t^2 - 14.7t + 9.8 \\le 0 \\cr &t^2 - 3t + 2 \\le 0 \\cr &(t - 1)(t - 2) \\le 0 \\cr &1 \\le t \\le 2 \\end{aligned}The stone is at or above this altitude from $t = 1\\text{ s}$ to $t = 2\\text{ s}$. The total duration is:\\begin{aligned} \\Delta t &= 2 - 1 \\cr &= 1\\text{ s} \\end{aligned}",
        "<strong>(d) Calculate impact speed:</strong><br><br>Horizontal component at impact remains:\\begin{aligned} v_x &= 19.6\\text{ m s}^{-1} \\end{aligned}Vertical component at $t = 5\\text{ s}$:\\begin{aligned} v_y &= u_y - gt \\cr &= 14.7 - 9.8(5) \\cr &= 14.7 - 49 \\cr &= -34.3\\text{ m s}^{-1} \\end{aligned}The speed of impact is:\\begin{aligned} v &= \\sqrt{v_x^2 + v_y^2} \\cr &= \\sqrt{19.6^2 + (-34.3)^2} \\cr &= \\sqrt{384.16 + 1176.49} \\cr &= \\sqrt{1560.65} \\cr & \\approx 39.5\\text{ m s}^{-1} \\end{aligned}",
        "Final Answer: (a) $5\\text{ s}$, (b) $98\\text{ m}$, (c) $1\\text{ s}$, (d) $39.5\\text{ m s}^{-1}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $5\\text{ s}$, (b) $98\\text{ m}$, (c) $2\\text{ s}$, (d) $39.5\\text{ m s}^{-1}$",
            "feedback": "In part (c), you identified the upper time limit $t = 2\\text{ s}$ as the total elapsed duration, instead of subtracting the entry time $t = 1\\text{ s}$ to obtain the window length $\\Delta t = 2 - 1 = 1\\text{ s}$."
        },
        {
            "ans": "(a) $5\\text{ s}$, (b) $98\\text{ m}$, (c) $1\\text{ s}$, (d) $34.3\\text{ m s}^{-1}$",
            "feedback": "In part (d), you stated only the magnitude of the vertical velocity component $|v_y|$ rather than combining both horizontal and vertical components to find the resultant speed."
        },
        {
            "ans": "(a) $5\\text{ s}$, (b) $73.5\\text{ m}$, (c) $1\\text{ s}$, (d) $39.5\\text{ m s}^{-1}$",
            "feedback": "In part (b), you used the vertical speed $u_y = 14.7\\text{ m s}^{-1}$ instead of the horizontal speed $u_x = 19.6\\text{ m s}^{-1}$ to find the horizontal range."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Energy Check for Impact Speed",
        "content": "To verify the impact speed in part (d) without having to calculate individual velocity components, apply Conservation of Mechanical Energy: \\begin{aligned}\\frac{1}{2}mv^2 &= \\frac{1}{2}mu^2 + mgh \\cr \\implies v & = \\sqrt{u^2 + 2gh}\\end{aligned} Substituting $u = 24.5\\text{ m s}^{-1},$ $g = 9.8\\text{ m s}^{-2}$, and $h = 49\\text{ m}$ gives \\begin{aligned}v & = \\sqrt{24.5^2 + 2(9.8)(49)}\\cr & = \\sqrt{600.25 + 960.4}\\cr & = \\sqrt{1560.65}\\cr & \\approx 39.5\\text{ m s}^{-1}\\end{aligned} Notice that the final speed depends solely on the initial speed and vertical drop, regardless of the angle of projection!"
    }
},
{
    "id": "012226",
    "group_id": "012226",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Vectors & Newton's Second Law",
    "subtopic": [
        "Newton's Second Law in 3D",
        "Constant Acceleration Kinematics"
    ],
    "img": false,
    "question": "A particle $P$ of mass $2\\text{ kg}$ is acted upon by a constant force $\\mathbf{F} = (6\\mathbf{i} - 12\\mathbf{j} + 4\\mathbf{k})\\text{ N}$, where $\\mathbf{i}$, $\\mathbf{j}$, and $\\mathbf{k}$ are mutually perpendicular unit vectors.<br><br><strong>(a)</strong> Calculate the magnitude of the acceleration of $P$.<br><br><strong>(b)</strong> At time $t = 0\\text{ s}$, the velocity of $P$ is $\\mathbf{u} = (-4\\mathbf{i} + 5\\mathbf{j} - 3\\mathbf{k})\\text{ m s}^{-1}$ and its position vector relative to a fixed origin $O$ is $\\mathbf{r}_0 = (7\\mathbf{i} - 3\\mathbf{j} + 8\\mathbf{k})\\text{ m}$.<br><br>Find:<br>(i) the velocity vector of $P$ when $t = 2\\text{ s}$,<br>(ii) the position vector of $P$ when $t = 2\\text{ s}$,<br>(iii) the distance of $P$ from the origin $O$ when $t = 2\\text{ s}$, giving your answer to 3 significant figures.",
    "steps": [
        "<strong>(a) Find acceleration vector and magnitude:</strong><br><br>Using Newton's Second Law $\\mathbf{F} = m\\mathbf{a}$:\\begin{aligned} \\mathbf{a} &= \\dfrac{1}{2}(6\\mathbf{i} - 12\\mathbf{j} + 4\\mathbf{k}) \\cr &= (3\\mathbf{i} - 6\\mathbf{j} + 2\\mathbf{k})\\text{ m s}^{-2} \\end{aligned}The magnitude of the acceleration is:\\begin{aligned} |\\mathbf{a}| &= \\sqrt{3^2 + (-6)^2 + 2^2} \\cr &= \\sqrt{9 + 36 + 4} \\cr &= \\sqrt{49} \\cr &= 7\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b)(i) Velocity vector at t = 2 s:</strong><br><br>Using $\\mathbf{v} = \\mathbf{u} + \\mathbf{a}t$:\\begin{aligned} \\mathbf{v} &= (-4\\mathbf{i} + 5\\mathbf{j} - 3\\mathbf{k}) \\cr &\\qquad + 2(3\\mathbf{i} - 6\\mathbf{j} + 2\\mathbf{k}) \\cr &= (-4 + 6)\\mathbf{i} \\cr &\\qquad + (5 - 12)\\mathbf{j} \\cr &\\qquad + (-3 + 4)\\mathbf{k} \\cr &= (2\\mathbf{i} - 7\\mathbf{j} + \\mathbf{k})\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(b)(ii) Position vector at t = 2 s:</strong><br><br>Using $\\mathbf{r} = \\mathbf{r}_0 + \\mathbf{u}t + \\dfrac{1}{2}\\mathbf{a}t^2$:\\begin{aligned} \\mathbf{r} &= (7\\mathbf{i} - 3\\mathbf{j} + 8\\mathbf{k}) \\cr &\\qquad + 2(-4\\mathbf{i} + 5\\mathbf{j} - 3\\mathbf{k}) \\cr &\\qquad + \\dfrac{1}{2}(2^2)(3\\mathbf{i} - 6\\mathbf{j} + 2\\mathbf{k}) \\cr &= (7\\mathbf{i} - 3\\mathbf{j} + 8\\mathbf{k}) \\cr &\\qquad + (-8\\mathbf{i} + 10\\mathbf{j} - 6\\mathbf{k}) \\cr &\\qquad + (6\\mathbf{i} - 12\\mathbf{j} + 4\\mathbf{k}) \\cr &= (5\\mathbf{i} - 5\\mathbf{j} + 6\\mathbf{k})\\text{ m} \\end{aligned}",
        "<strong>(b)(iii) Distance from origin:</strong><br><br>The distance from $O$ is the magnitude of the position vector:\\begin{aligned} |\\mathbf{r}| &= \\sqrt{5^2 + (-5)^2 + 6^2} \\cr &= \\sqrt{25 + 25 + 36} \\cr &= \\sqrt{86} \\cr &\\approx 9.27\\text{ m} \\end{aligned}",
        "Final Answer: (a) $7\\text{ m s}^{-2}$, (b)(i) $(2\\mathbf{i} - 7\\mathbf{j} + \\mathbf{k})\\text{ m s}^{-1}$, (ii) $(5\\mathbf{i} - 5\\mathbf{j} + 6\\mathbf{k})\\text{ m}$, (iii) $9.27\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $14\\text{ m s}^{-2}$, (b)(i) $(2\\mathbf{i} - 7\\mathbf{j} + \\mathbf{k})\\text{ m s}^{-1}$, (ii) $(5\\mathbf{i} - 5\\mathbf{j} + 6\\mathbf{k})\\text{ m}$, (iii) $9.27\\text{ m}$",
            "feedback": "In part (a), you calculated the magnitude of the force $|\\mathbf{F}| = 14\\text{ N}$ instead of dividing by the mass $m = 2\\text{ kg}$ to obtain the acceleration magnitude."
        },
        {
            "ans": "(a) $7\\text{ m s}^{-2}$, (b)(i) $(2\\mathbf{i} - 7\\mathbf{j} + \\mathbf{k})\\text{ m s}^{-1}$, (ii) $(11\\mathbf{i} - 11\\mathbf{j} + 10\\mathbf{k})\\text{ m}$, (iii) $18.5\\text{ m}$",
            "feedback": "In part (b)(ii), you omitted the factor of $\\frac{1}{2}$ in the $\\frac{1}{2}\\mathbf{a}t^2$ term, using $\\mathbf{a}t^2$ instead."
        },
        {
            "ans": "(a) $7\\text{ m s}^{-2}$, (b)(i) $(2\\mathbf{i} - 7\\mathbf{j} + \\mathbf{k})\\text{ m s}^{-1}$, (ii) $(-2\\mathbf{i} - 2\\mathbf{j} - 2\\mathbf{k})\\text{ m}$, (iii) $3.46\\text{ m}$",
            "feedback": "In part (b)(ii), you forgot to add the initial position vector $\\mathbf{r}_0$, calculating the net displacement from $t = 0$ rather than the absolute position vector relative to the origin."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Displacements vs Position Vectors",
        "content": "Always be mindful of the difference between displacement and position. The standard formula $\\mathbf{s} = \\mathbf{u}t + \\frac{1}{2}\\mathbf{a}t^2$ gives the displacement vector from the particle's starting position. To obtain the position vector $\\mathbf{r}$ relative to the fixed origin $O$, you must always add the initial position vector: $\\mathbf{r} = \\mathbf{r}_0 + \\mathbf{s}$. Missing out $\\mathbf{r}_0$ is one of the most frequent marks dropped in 3D mechanics questions."
    }
},
{
    "id": "012227",
    "group_id": "012226",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Vectors & Newton's Second Law",
    "subtopic": [
        "Resultant Force",
        "Unknown Components"
    ],
    "img": false,
    "question": "A particle of mass $0.5\\text{ kg}$ is acted upon by two constant forces:$$\\mathbf{F}_1 = (3\\mathbf{i} - 5\\mathbf{j} + 2\\mathbf{k})\\text{ N}$$$$\\mathbf{F}_2 = (p\\mathbf{i} + 6\\mathbf{j} + q\\mathbf{k})\\text{ N}$$where $p$ and $q$ are constants.<br><br>The resultant force produces an acceleration in the direction of the vector $(2\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k})$ with magnitude $6\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Find the values of the constants $p$ and $q$.<br><br><strong>(b)</strong> The particle starts from rest at the point with position vector $(4\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k})\\text{ m}$ relative to a fixed origin $O$.<br><br>Find:<br>(i) the time taken for the particle to reach a speed of $18\\text{ m s}^{-1}$,<br>(ii) the position vector of the particle at this instant.",
    "steps": [
        "<strong>(a) Determine acceleration vector and unknown force components:</strong><br><br>Let the direction vector be $\\mathbf{d} = 2\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k}$.<br><br>Its magnitude is:\\begin{aligned} |\\mathbf{d}| &= \\sqrt{2^2 + 1^2 + (-2)^2} \\cr &= \\sqrt{9} \\cr &= 3 \\end{aligned}The unit vector in this direction is $\\frac{1}{3}(2\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k})$.<br><br>Since the acceleration has magnitude $6\\text{ m s}^{-2}$:\\begin{aligned} \\mathbf{a} &= 6 \\times \\dfrac{1}{3}(2\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k}) \\cr &= (4\\mathbf{i} + 2\\mathbf{j} - 4\\mathbf{k})\\text{ m s}^{-2} \\end{aligned}The resultant force is $\\mathbf{R} = m\\mathbf{a}$:\\begin{aligned} \\mathbf{R} &= 0.5(4\\mathbf{i} + 2\\mathbf{j} - 4\\mathbf{k}) \\cr &= (2\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k})\\text{ N} \\end{aligned}Summing the forces $\\mathbf{F}_1 + \\mathbf{F}_2$:\\begin{aligned} \\mathbf{R} &= (3 + p)\\mathbf{i} + (-5 + 6)\\mathbf{j} \\cr &\\qquad + (2 + q)\\mathbf{k} \\cr &= (3 + p)\\mathbf{i} + \\mathbf{j} + (2 + q)\\mathbf{k} \\end{aligned}Equating components:\\begin{aligned} 3 + p &= 2 \\implies p = -1 \\cr 2 + q &= -2 \\implies q = -4 \\end{aligned}",
        "<strong>(b)(i) Time to reach speed of 18 m s⁻¹:</strong><br><br>Since acceleration is constant and the particle starts from rest ($u = 0$):\\begin{aligned} v &= u + at \\cr 18 &= 0 + 6t \\cr t &= 3\\text{ s} \\end{aligned}",
        "<strong>(b)(ii) Position vector at t = 3 s:</strong><br><br>Using $\\mathbf{r} = \\mathbf{r}_0 + \\dfrac{1}{2}\\mathbf{a}t^2$:\\begin{aligned} \\mathbf{r} &= (4\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k}) \\cr &\\qquad + \\dfrac{1}{2}(3^2)(4\\mathbf{i} + 2\\mathbf{j} - 4\\mathbf{k}) \\cr &= (4\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k}) \\cr &\\qquad + 4.5(4\\mathbf{i} + 2\\mathbf{j} - 4\\mathbf{k}) \\cr &= (4\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k}) \\cr &\\qquad + (18\\mathbf{i} + 9\\mathbf{j} - 18\\mathbf{k}) \\cr &= (22\\mathbf{i} + 8\\mathbf{j} - 15\\mathbf{k})\\text{ m} \\end{aligned}",
        "Final Answer: (a) $p = -1$, $q = -4$, (b)(i) $3\\text{ s}$, (ii) $(22\\mathbf{i} + 8\\mathbf{j} - 15\\mathbf{k})\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $p = 1$, $q = 4$, (b)(i) $3\\text{ s}$, (ii) $(22\\mathbf{i} + 8\\mathbf{j} - 15\\mathbf{k})\\text{ m}$",
            "feedback": "In part (a), you made sign errors when equating components, solving $3 + p = 4$ and $2 + q = 6$ without dividing the acceleration by $m$."
        },
        {
            "ans": "(a) $p = -1$, $q = -4$, (b)(i) $3\\text{ s}$, (ii) $(18\\mathbf{i} + 9\\mathbf{j} - 18\\mathbf{k})\\text{ m}$",
            "feedback": "In part (b)(ii), you computed the displacement from rest $\\frac{1}{2}\\mathbf{a}t^2$ but forgot to add the initial position vector $\\mathbf{r}_0$."
        },
        {
            "ans": "(a) $p = -1$, $q = -4$, (b)(i) $4.5\\text{ s}$, (ii) $(44.5\\mathbf{i} + 19.3\\mathbf{j} - 37.5\\mathbf{k})\\text{ m}$",
            "feedback": "In part (b)(i), you used $a = 4\\text{ m s}^{-2}$ (the $\\mathbf{i}$-component of acceleration) instead of the total magnitude $a = 6\\text{ m s}^{-2}$ to determine the elapsed time."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Normalising Direction Vectors",
        "content": "When a force or acceleration is given in the direction of a specified vector $\\mathbf{d}$, never multiply the scalar magnitude directly by $\\mathbf{d}$! You must first convert $\\mathbf{d}$ into a unit vector $\\hat{\\mathbf{d}} = \\frac{\\mathbf{d}}{|\\mathbf{d}|}$. Here, $|\\mathbf{d}| = \\sqrt{2^2 + 1^2 + (-2)^2} = 3$, so the unit vector is $\\frac{1}{3}(2\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k})$. Multiplying $6$ directly by $\\mathbf{d}$ would yield an acceleration three times too large!"
    }
},
{
    "id": "012228",
    "group_id": "012226",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Vectors & Newton's Second Law",
    "subtopic": [
        "Variable Force",
        "Vector Calculus"
    ],
    "img": false,
    "question": "A particle of mass $3\\text{ kg}$ moves in three-dimensional space under the action of a single variable resultant force:$$\\mathbf{F}(t) = (18t\\mathbf{i} - 36t^2\\mathbf{j} + 12\\mathbf{k})\\text{ N}$$where $t \\ge 0$ is the time in seconds.<br><br>At time $t = 0\\text{ s}$, the particle has velocity $\\mathbf{u} = (\\mathbf{i} + 2\\mathbf{j} - 3\\mathbf{k})\\text{ m s}^{-1}$ and position vector $\\mathbf{r}_0 = (4\\mathbf{i} - 5\\mathbf{j} + 6\\mathbf{k})\\text{ m}$ relative to a fixed origin $O$.<br><br><strong>(a)</strong> Find the acceleration vector $\\mathbf{a}(t)$ of the particle at time $t$.<br><br><strong>(b)</strong> Determine an expression for the velocity vector $\\mathbf{v}(t)$ of the particle at time $t$, and calculate the speed of the particle when $t = 2\\text{ s}$, giving your answer to 3 significant figures.<br><br><strong>(c)</strong> Find the position vector $\\mathbf{r}(t)$ of the particle at time $t$, and determine its coordinates when $t = 2\\text{ s}$.",
    "steps": [
        "<strong>(a) Find acceleration vector using Newton's Second Law:</strong><br><br>Using $\\mathbf{a}(t) = \\dfrac{\\mathbf{F}(t)}{m}$ with $m = 3\\text{ kg}$:\\begin{aligned} \\mathbf{a}(t) &= \\dfrac{1}{3}(18t\\mathbf{i} - 36t^2\\mathbf{j} + 12\\mathbf{k}) \\cr &= (6t\\mathbf{i} - 12t^2\\mathbf{j} + 4\\mathbf{k})\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Integrate acceleration to find velocity and speed:</strong><br><br>Integrating $\\mathbf{a}(t)$ with respect to $t$:\\begin{aligned} \\mathbf{v}(t) &= \\int (6t\\mathbf{i} - 12t^2\\mathbf{j} + 4\\mathbf{k})\\text{ d}t \\cr &= (3t^2 + c_1)\\mathbf{i} \\cr &\\qquad + (-4t^3 + c_2)\\mathbf{j} \\cr &\\qquad + (4t + c_3)\\mathbf{k} \\end{aligned}Using $\\mathbf{v}(0) = \\mathbf{i} + 2\\mathbf{j} - 3\\mathbf{k}$, we find $c_1 = 1$, $c_2 = 2$, and $c_3 = -3$:\\begin{aligned} \\mathbf{v}(t) &= (3t^2 + 1)\\mathbf{i} \\cr &\\qquad + (2 - 4t^3)\\mathbf{j} \\cr &\\qquad + (4t - 3)\\mathbf{k}\\text{ m s}^{-1} \\end{aligned}At $t = 2\\text{ s}$:\\begin{aligned} \\mathbf{v}(2) &= [3(4) + 1]\\mathbf{i} \\cr &\\qquad + [2 - 4(8)]\\mathbf{j} \\cr &\\qquad + [4(2) - 3]\\mathbf{k} \\cr &= (13\\mathbf{i} - 30\\mathbf{j} + 5\\mathbf{k})\\text{ m s}^{-1} \\end{aligned}The speed is the magnitude of $\\mathbf{v}(2)$:\\begin{aligned} |\\mathbf{v}(2)| &= \\sqrt{13^2 + (-30)^2 + 5^2} \\cr &= \\sqrt{169 + 900 + 25} \\cr &= \\sqrt{1094} \\cr &\\approx 33.1\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(c) Integrate velocity to find position vector and coordinates:</strong><br><br>Integrating $\\mathbf{v}(t)$ with respect to $t$:\\begin{aligned} \\mathbf{r}(t) &= (t^3 + t + d_1)\\mathbf{i} \\cr &\\qquad + (-t^4 + 2t + d_2)\\mathbf{j} \\cr &\\qquad + (2t^2 - 3t + d_3)\\mathbf{k} \\end{aligned}Using $\\mathbf{r}(0) = 4\\mathbf{i} - 5\\mathbf{j} + 6\\mathbf{k}$, we find $d_1 = 4$, $d_2 = -5$, and $d_3 = 6$:\\begin{aligned} \\mathbf{r}(t) &= (t^3 + t + 4)\\mathbf{i} \\cr &\\qquad + (-t^4 + 2t - 5)\\mathbf{j} \\cr &\\qquad + (2t^2 - 3t + 6)\\mathbf{k}\\text{ m} \\end{aligned}Evaluating at $t = 2\\text{ s}$:\\begin{aligned} x &= 2^3 + 2 + 4 = 14 \\cr y &= -2^4 + 2(2) - 5 = -17 \\cr z &= 2(2^2) - 3(2) + 6 = 8 \\end{aligned}Coordinates: $(14, -17, 8)$.",
        "Final Answer: (a) $(6t\\mathbf{i} - 12t^2\\mathbf{j} + 4\\mathbf{k})\\text{ m s}^{-2}$, (b) $33.1\\text{ m s}^{-1}$, (c) $(14, -17, 8)$"
    ],
    "pi_options": [
        {
            "ans": "(a) $(18t\\mathbf{i} - 36t^2\\mathbf{j} + 12\\mathbf{k})\\text{ m s}^{-2}$, (b) $99.3\\text{ m s}^{-1}$, (c) $(14, -17, 8)$",
            "feedback": "In part (a), you equated acceleration directly to force without dividing by the particle's mass $m = 3\\text{ kg}$."
        },
        {
            "ans": "(a) $(6t\\mathbf{i} - 12t^2\\mathbf{j} + 4\\mathbf{k})\\text{ m s}^{-2}$, (b) $33.1\\text{ m s}^{-1}$, (c) $(10, -12, 2)$",
            "feedback": "In part (c), you integrated the velocity components without adding the constants of integration represented by the initial position $\\mathbf{r}_0$."
        },
        {
            "ans": "(a) $(6t\\mathbf{i} - 12t^2\\mathbf{j} + 4\\mathbf{k})\\text{ m s}^{-2}$, (b) $32.6\\text{ m s}^{-1}$, (c) $(14, -17, 8)$",
            "feedback": "In part (b), you forgot to add the initial velocity constants $c_1, c_2, c_3$ when integrating $\\mathbf{a}(t)$, computing the speed of $\\int_0^2 \\mathbf{a}\\text{d}t$ alone."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Variable Acceleration vs SUVAT",
        "content": "Because the force depends explicitly on time $t$, acceleration is not constant. SUVAT formulas such as $\\mathbf{v} = \\mathbf{u} + \\mathbf{a}t$ and $\\mathbf{s} = \\mathbf{u}t + \\frac{1}{2}\\mathbf{a}t^2$ are completely invalid here and will score zero marks. You must use calculus: integrate $\\mathbf{a}(t)$ to find velocity, and integrate $\\mathbf{v}(t)$ to find position, always determining the vector constants of integration from initial conditions."
    }
},
{
    "id": "012229",
    "group_id": "012226",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Vectors & Newton's Second Law",
    "subtopic": [
        "Relative Motion",
        "Closest Approach"
    ],
    "img": false,
    "question": "Two drones, $A$ and $B$, move with constant velocities in the airspace above a survey station $O$.<br><br>At time $t = 0\\text{ s}$, drone $A$ has position vector $\\mathbf{r}_{A0} = (4\\mathbf{i} - 2\\mathbf{j} + 8\\mathbf{k})\\text{ m}$ and velocity $\\mathbf{v}_A = (5\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k})\\text{ m s}^{-1}$.<br>At the same instant, drone $B$ has position vector $\\mathbf{r}_{B0} = (10\\mathbf{i} - 5\\mathbf{j} + 8\\mathbf{k})\\text{ m}$ and velocity $\\mathbf{v}_B = (3\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k})\\text{ m s}^{-1}$.<br><br><strong>(a)</strong> Find an expression in terms of $t$ for the position vector of drone $A$ relative to drone $B$, denoted by ${}_B\\mathbf{r}_A$.<br><br><strong>(b)</strong> Show that the square of the distance, $D^2$, between the two drones at time $t$ is given by:$$D^2 = 9t^2 - 36t + 45$$<strong>(c)</strong> Hence:<br>(i) explain why the two drones do not collide,<br>(ii) find the time $t$ at which the drones are closest together,<br>(iii) determine the minimum distance between the two drones.",
    "steps": [
        "<strong>(a) Determine the relative position vector:</strong><br><br>The position vectors of the two drones at time $t$ are:\\begin{aligned} \\mathbf{r}_A &= (4 + 5t)\\mathbf{i} \\cr &\\qquad + (-2 + 2t)\\mathbf{j} \\cr &\\qquad + (8 + 3t)\\mathbf{k} \\cr \\mathbf{r}_B &= (10 + 3t)\\mathbf{i} \\cr &\\qquad + (-5 + 4t)\\mathbf{j} \\cr &\\qquad + (8 + 2t)\\mathbf{k} \\end{aligned}The position of $A$ relative to $B$ is ${}_B\\mathbf{r}_A = \\mathbf{r}_A - \\mathbf{r}_B$:\\begin{aligned} {}_B\\mathbf{r}_A &= (4 + 5t - 10 - 3t)\\mathbf{i} \\cr &\\qquad + (-2 + 2t + 5 - 4t)\\mathbf{j} \\cr &\\qquad + (8 + 3t - 8 - 2t)\\mathbf{k} \\cr &= (2t - 6)\\mathbf{i} \\cr &\\qquad + (3 - 2t)\\mathbf{j} + t\\mathbf{k} \\end{aligned}",
        "<strong>(b) Show expression for D²:</strong><br><br>The square of the distance is the dot product of the relative position vector with itself:\\begin{aligned} D^2 &= (2t - 6)^2 + (3 - 2t)^2 + t^2 \\cr &= (4t^2 - 24t + 36) \\cr &\\qquad + (9 - 12t + 4t^2) + t^2 \\cr &= (4 + 4 + 1)t^2 \\cr &\\qquad + (-24 - 12)t + (36 + 9) \\cr &= 9t^2 - 36t + 45 \\end{aligned}",
        "<strong>(c) Find minimum distance and verify no collision:</strong><br><br>Completing the square on $D^2$:\\begin{aligned} D^2 &= 9(t^2 - 4t + 5) \\cr &= 9[(t - 2)^2 - 4 + 5] \\cr &= 9(t - 2)^2 + 9 \\end{aligned}(i) For any real time $t$, $(t - 2)^2 \\ge 0$, so $D^2 \\ge 9 > 0$. Because the separation distance is always at least $3\\text{ m}$ ($D > 0$), the drones never collide.<br><br>(ii) The minimum value of $D^2$ occurs when $(t - 2)^2 = 0$, giving $t = 2\\text{ s}$.<br><br>(iii) The minimum separation distance is:\\begin{aligned} D_{\\text{min}} &= \\sqrt{9} \\cr &= 3\\text{ m} \\end{aligned}",
        "Final Answer: (a) $(2t - 6)\\mathbf{i} + (3 - 2t)\\mathbf{j} + t\\mathbf{k}$, (b) Proof complete, (c)(i) $D^2 \\ge 9 > 0$, (ii) $2\\text{ s}$, (iii) $3\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $(6 - 2t)\\mathbf{i} + (2t - 3)\\mathbf{j} - t\\mathbf{k}$, (b) Proof complete, (c)(i) $D^2 \\ge 9 > 0$, (ii) $2\\text{ s}$, (iii) $3\\text{ m}$",
            "feedback": "In part (a), you calculated the position of $B$ relative to $A$ (${}_A\\mathbf{r}_B = \\mathbf{r}_B - \\mathbf{r}_A$) rather than $A$ relative to $B$ (${}_B\\mathbf{r}_A = \\mathbf{r}_A - \\mathbf{r}_B$), reversing all component signs."
        },
        {
            "ans": "(a) $(2t - 6)\\mathbf{i} + (3 - 2t)\\mathbf{j} + t\\mathbf{k}$, (b) Proof complete, (c)(i) $D^2 \\ge 9 > 0$, (ii) $4\\text{ s}$, (iii) $9\\text{ m}$",
            "feedback": "In part (c)(ii), you located the minimum of $at^2 + bt + c$ using $t = -b/a$ instead of the correct vertex formula $t = -b/(2a) = 36/18 = 2\\text{ s}$."
        },
        {
            "ans": "(a) $(2t - 6)\\mathbf{i} + (3 - 2t)\\mathbf{j} + t\\mathbf{k}$, (b) Proof complete, (c)(i) $D^2 \\ge 9 > 0$, (ii) $2\\text{ s}$, (iii) $9\\text{ m}$",
            "feedback": "In part (c)(iii), you forgot to take the square root of $D^2_{\\text{min}} = 9$, providing the squared distance rather than the actual distance."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Completing the Square for Distance Extrema",
        "content": "While you can find the minimum by differentiating $\\frac{\\text{d}(D^2)}{\\text{d}t} = 18t - 36 = 0$, completing the square is both faster and mathematically superior here. Writing $D^2 = 9(t - 2)^2 + 9$ immediately proves that $D^2 \\ge 9$ for all $t \\in \\mathbb{R}$, simultaneously answering part (c)(i) (collision impossibility), part (c)(ii) ($t = 2\\text{ s}$), and part (c)(iii) ($D_{\\text{min}} = \\sqrt{9} = 3\\text{ m}$) without requiring a second derivative test."
    }
},
{
    "id": "012230",
    "group_id": "012226",
    "branch": "Mechanics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Vectors & Newton's Second Law",
    "subtopic": [
        "Work-Energy Principle",
        "Direction Cosines"
    ],
    "img": false,
    "question": "A particle of mass $5\\text{ kg}$ is initially at rest at the origin $O$. It is acted upon simultaneously by three constant forces:$$\\mathbf{F}_1 = (8\\mathbf{i} - 14\\mathbf{j} + 6\\mathbf{k})\\text{ N}$$$$\\mathbf{F}_2 = (-2\\mathbf{i} + 6\\mathbf{j} + 4\\mathbf{k})\\text{ N}$$$$\\mathbf{F}_3 = (9\\mathbf{i} + 3\\mathbf{j} - 5\\mathbf{k})\\text{ N}$$<strong>(a)</strong> Find the resultant force $\\mathbf{R}$ acting on the particle, and show that its magnitude is $5\\sqrt{11}\\text{ N}$.<br><br><strong>(b)</strong> State the acceleration vector of the particle.<br><br><strong>(c)</strong> During the first $4\\text{ seconds}$ of motion, the particle travels from the origin to a point $P$.<br>(i) Find the velocity vector and the kinetic energy of the particle when $t = 4\\text{ s}$.<br>(ii) Find the displacement vector $\\mathbf{s} = \\vec{OP}$, and verify the Work-Energy Principle by calculating the work done by $\\mathbf{R}$.<br>(iii) Calculate the acute angle between the direction of motion of the particle and the positive $x$-axis (the vector $\\mathbf{i}$), giving your answer to the nearest $0.1^\\circ$.",
    "steps": [
        "<strong>(a) Sum the applied forces and compute magnitude:</strong><br><br>The resultant force is $\\mathbf{R} = \\mathbf{F}_1 + \\mathbf{F}_2 + \\mathbf{F}_3$:\\begin{aligned} \\mathbf{R} &= (8 - 2 + 9)\\mathbf{i} \\cr &\\qquad + (-14 + 6 + 3)\\mathbf{j} \\cr &\\qquad + (6 + 4 - 5)\\mathbf{k} \\cr &= (15\\mathbf{i} - 5\\mathbf{j} + 5\\mathbf{k})\\text{ N} \\end{aligned}Its magnitude is:\\begin{aligned} |\\mathbf{R}| &= \\sqrt{15^2 + (-5)^2 + 5^2} \\cr &= \\sqrt{225 + 25 + 25} \\cr &= \\sqrt{275} \\cr &= \\sqrt{25 \\times 11} \\cr &= 5\\sqrt{11}\\text{ N} \\end{aligned}",
        "<strong>(b) State the acceleration vector:</strong><br><br>Using Newton's Second Law with $m = 5\\text{ kg}$:\\begin{aligned} \\mathbf{a} &= \\dfrac{\\mathbf{R}}{5} \\cr &= \\dfrac{1}{5}(15\\mathbf{i} - 5\\mathbf{j} + 5\\mathbf{k}) \\cr &= (3\\mathbf{i} - \\mathbf{j} + \\mathbf{k})\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(c)(i) Velocity vector and kinetic energy at t = 4 s:</strong><br><br>Starting from rest ($\\mathbf{u} = \\mathbf{0}$):\\begin{aligned} \\mathbf{v} &= \\mathbf{a}t \\cr &= 4(3\\mathbf{i} - \\mathbf{j} + \\mathbf{k}) \\cr &= (12\\mathbf{i} - 4\\mathbf{j} + 4\\mathbf{k})\\text{ m s}^{-1} \\end{aligned}The squared speed is:\\begin{aligned} v^2 &= 12^2 + (-4)^2 + 4^2 \\cr &= 144 + 16 + 16 \\cr &= 176\\text{ m}^2\\text{ s}^{-2} \\end{aligned}The kinetic energy is:\\begin{aligned} E_k &= \\dfrac{1}{2}mv^2 \\cr &= \\dfrac{1}{2}(5)(176) \\cr &= 440\\text{ J} \\end{aligned}",
        "<strong>(c)(ii) Displacement and work done verification:</strong><br><br>The displacement over $4\\text{ s}$ from rest is:\\begin{aligned} \\mathbf{s} &= \\dfrac{1}{2}\\mathbf{a}t^2 \\cr &= \\dfrac{1}{2}(16)(3\\mathbf{i} - \\mathbf{j} + \\mathbf{k}) \\cr &= 8(3\\mathbf{i} - \\mathbf{j} + \\mathbf{k}) \\cr &= (24\\mathbf{i} - 8\\mathbf{j} + 8\\mathbf{k})\\text{ m} \\end{aligned}The work done by $\\mathbf{R}$ is the scalar product $W = \\mathbf{R} \\cdot \\mathbf{s}$:\\begin{aligned} W &= 15(24) + (-5)(-8) + 5(8) \\cr &= 360 + 40 + 40 \\cr &= 440\\text{ J} \\end{aligned}Since $W = \\Delta E_k = 440 - 0 = 440\\text{ J}$, the Work-Energy Principle is verified.",
        "<strong>(c)(iii) Calculate angle with positive x-axis:</strong><br><br>The direction of motion is along the velocity vector $\\mathbf{v}$. Let $\\theta$ be the angle between $\\mathbf{v}$ and $\\mathbf{i}$:\\begin{aligned} \\cos\\theta &= \\dfrac{\\mathbf{v} \\cdot \\mathbf{i}}{|\\mathbf{v}||\\mathbf{i}|} \\cr &= \\dfrac{12}{\\sqrt{176} \\times 1} \\cr &= \\dfrac{12}{4\\sqrt{11}} \\cr &= \\dfrac{3}{\\sqrt{11}} \\cr &\\approx 0.904534 \\end{aligned}Calculating $\\theta$:\\begin{aligned} \\theta &= \\arccos(0.904534) \\cr &\\approx 25.2^\\circ \\end{aligned}",
        "Final Answer: (a) $5\\sqrt{11}\\text{ N}$, (b) $(3\\mathbf{i} - \\mathbf{j} + \\mathbf{k})\\text{ m s}^{-2}$, (c)(i) $(12\\mathbf{i} - 4\\mathbf{j} + 4\\mathbf{k})\\text{ m s}^{-1}$, $440\\text{ J}$, (ii) $(24\\mathbf{i} - 8\\mathbf{j} + 8\\mathbf{k})\\text{ m}$, $440\\text{ J}$, (iii) $25.2^\\circ$"
    ],
    "pi_options": [
        {
            "ans": "(a) $5\\sqrt{11}\\text{ N}$, (b) $(15\\mathbf{i} - 5\\mathbf{j} + 5\\mathbf{k})\\text{ m s}^{-2}$, (c)(i) $(60\\mathbf{i} - 20\\mathbf{j} + 20\\mathbf{k})\\text{ m s}^{-1}$, $11000\\text{ J}$, (ii) $(120\\mathbf{i} - 40\\mathbf{j} + 40\\mathbf{k})\\text{ m}$, $11000\\text{ J}$, (iii) $25.2^\\circ$",
            "feedback": "In part (b), you equated acceleration directly to the resultant force without dividing by the mass $m = 5\\text{ kg}$."
        },
        {
            "ans": "(a) $5\\sqrt{11}\\text{ N}$, (b) $(3\\mathbf{i} - \\mathbf{j} + \\mathbf{k})\\text{ m s}^{-2}$, (c)(i) $(12\\mathbf{i} - 4\\mathbf{j} + 4\\mathbf{k})\\text{ m s}^{-1}$, $880\\text{ J}$, (ii) $(24\\mathbf{i} - 8\\mathbf{j} + 8\\mathbf{k})\\text{ m}$, $880\\text{ J}$, (iii) $25.2^\\circ$",
            "feedback": "In part (c)(i), you forgot the factor of $\\frac{1}{2}$ when evaluating kinetic energy, computing $m v^2$ instead of $\\frac{1}{2}m v^2$."
        },
        {
            "ans": "(a) $5\\sqrt{11}\\text{ N}$, (b) $(3\\mathbf{i} - \\mathbf{j} + \\mathbf{k})\\text{ m s}^{-2}$, (c)(i) $(12\\mathbf{i} - 4\\mathbf{j} + 4\\mathbf{k})\\text{ m s}^{-1}$, $440\\text{ J}$, (ii) $(24\\mathbf{i} - 8\\mathbf{j} + 8\\mathbf{k})\\text{ m}$, $440\\text{ J}$, (iii) $64.8^\\circ$",
            "feedback": "In part (c)(iii), you calculated the complementary angle to the $y$-axis rather than the angle $\\arccos(v_x/|\\mathbf{v}|)$ made with the positive $x$-axis."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Direction Cosines in 3D Kinematics",
        "content": "To find the angle $\\theta$ between any 3D vector $\\mathbf{v} = v_x\\mathbf{i} + v_y\\mathbf{j} + v_z\\mathbf{k}$ and the positive coordinate axes, use the direction cosine property: $\\cos\\alpha = \\frac{v_x}{|\\mathbf{v}|}$, $\\cos\\beta = \\frac{v_y}{|\\mathbf{v}|}$, and $\\cos\\gamma = \\frac{v_z}{|\\mathbf{v}|}$. Because the dot product with a unit axis vector simplifies to $\\mathbf{v} \\cdot \\mathbf{i} = v_x$, there is no need to set up full matrix or determinant cross products."
    }
},
{
    "id": "012231",
    "group_id": "012231",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Concurrent Forces",
    "subtopic": [
        "Resolving Forces",
        "Resultant Vectors"
    ],
    "img": "images/Mechanics_pngs/012231.png",
    "question": "The diagram shows three coplanar forces acting on a particle at a point $O$:<br>• A force of $8\\text{ N}$ acting vertically upwards.<br>• A force of $12\\text{ N}$ acting at an angle of $20^\\circ$ above the horizontal to the left.<br>• A force of $15\\text{ N}$ acting at an angle of $50^\\circ$ below the horizontal to the right.<br><br><strong>(a)</strong> Calculate the horizontal and vertical components of the resultant force.<br><br><strong>(b)</strong> Calculate the magnitude of the resultant force, giving your answer to 3 significant figures.<br><br><strong>(c)</strong> Find the acute angle that the resultant force makes with the horizontal, stating clearly whether it acts above or below the horizontal, and to the left or to the right.",
    "steps": [
        "<strong>(a) Resolve horizontally and vertically:</strong><br><br>Taking rightwards as positive horizontal ($R_x$):\\begin{aligned} R_x &= 15\\cos 50^\\circ - 12\\cos 20^\\circ \\cr &= 9.6418 - 11.2763 \\cr &= -1.6345\\text{ N} \\end{aligned}Thus, the horizontal component is $1.63\\text{ N}$ to the left.<br><br>Taking upwards as positive vertical ($R_y$):\\begin{aligned} R_y &= 8 + 12\\sin 20^\\circ - 15\\sin 50^\\circ \\cr &= 8 + 4.1042 - 11.4907 \\cr &= 0.6135\\text{ N} \\end{aligned}Thus, the vertical component is $0.614\\text{ N}$ upwards.",
        "<strong>(b) Calculate the magnitude of the resultant:</strong><br><br>Using Pythagoras' theorem on the orthogonal components:\\begin{aligned} R &= \\sqrt{R_x^2 + R_y^2} \\cr &= \\sqrt{(-1.6345)^2 + 0.6135^2} \\cr &= \\sqrt{2.6716 + 0.3764} \\cr &= \\sqrt{3.0480} \\cr &\\approx 1.75\\text{ N} \\end{aligned}",
        "<strong>(c) Determine the direction of the resultant:</strong><br><br>Let $\\theta$ be the acute angle made with the horizontal:\\begin{aligned} \\tan\\theta &= \\dfrac{|R_y|}{|R_x|} \\cr &= \\dfrac{0.6135}{1.6345} \\cr &\\approx 0.3753 \\cr \\theta &= \\arctan(0.3753) \\cr &\\approx 20.6^\\circ \\end{aligned}Since $R_x < 0$ and $R_y > 0$, the resultant acts at $20.6^\\circ$ above the horizontal to the left.",
        "Final Answer: (a) $1.63\\text{ N}$ left, $0.614\\text{ N}$ up, (b) $1.75\\text{ N}$, (c) $20.6^\\circ$ above horizontal to left"
    ],
    "pi_options": [
        {
            "ans": "(a) $1.63\\text{ N}$ right, $0.614\\text{ N}$ down, (b) $1.75\\text{ N}$, (c) $20.6^\\circ$ below horizontal to right",
            "feedback": "You reversed the signs of the components, treating the leftward force as positive and the downward component of the $15\\text{ N}$ force as positive."
        },
        {
            "ans": "(a) $1.63\\text{ N}$ left, $0.614\\text{ N}$ up, (b) $2.25\\text{ N}$, (c) $20.6^\\circ$ above horizontal to left",
            "feedback": "In part (b), you added the components directly ($1.6345 + 0.6135$) instead of applying Pythagoras' theorem $\\sqrt{R_x^2 + R_y^2}$ to find the resultant vector magnitude."
        },
        {
            "ans": "(a) $1.63\\text{ N}$ left, $0.614\\text{ N}$ up, (b) $1.75\\text{ N}$, (c) $69.4^\\circ$ above horizontal to left",
            "feedback": "In part (c), you calculated the angle with the vertical $\\arctan(|R_x|/|R_y|)$ rather than the angle with the horizontal $\\arctan(|R_y|/|R_x|)$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Sketching the Quadrant Box",
        "content": "When finding the direction of a resultant vector, never rely purely on your calculator's raw $\\arctan$ output. Always sketch a small vector triangle with your signed components: here, $R_x = -1.63\\text{ N}$ (left) and $R_y = +0.614\\text{ N}$ (up). This instantly places the resultant in the second quadrant, ensuring you describe the angle correctly as acting $20.6^\\circ$ above the horizontal to the left."
    }
},
{
    "id": "012232",
    "group_id": "012231",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Concurrent Forces",
    "subtopic": [
        "Equilibrium of a Particle",
        "Resolving Forces"
    ],
    "img": "images/Mechanics_pngs/012232.png",
    "question": "The diagram shows three coplanar forces acting on a particle $P$, which is held in equilibrium:<br>• A force of magnitude $T\\text{ N}$ acting at an angle of $30^\\circ$ above the horizontal to the left.<br>• A force of magnitude $F\\text{ N}$ acting at an angle of $60^\\circ$ above the horizontal to the right.<br>• A force of magnitude $40\\text{ N}$ acting vertically downwards.<br><br><strong>(a)</strong> By resolving forces horizontally, show that:$$F = T\\sqrt{3}$$<strong>(b)</strong> By resolving forces vertically, determine:<br>(i) the exact value of $T$,<br>(ii) the value of $F$, giving your answer in exact surd form and to 3 significant figures.",
    "steps": [
        "<strong>(a) Resolve horizontally for equilibrium:</strong><br><br>For horizontal equilibrium, the sum of horizontal forces must equal zero:\\begin{aligned} &F\\cos 60^\\circ - T\\cos 30^\\circ = 0 \\cr &F\\left(\\dfrac{1}{2}\\right) = T\\left(\\dfrac{\\sqrt{3}}{2}\\right) \\cr &F = T\\sqrt{3} \\end{aligned}",
        "<strong>(b)(i) Resolve vertically to find T:</strong><br><br>For vertical equilibrium:\\begin{aligned} &F\\sin 60^\\circ + T\\sin 30^\\circ - 40 = 0 \\cr &F\\left(\\dfrac{\\sqrt{3}}{2}\\right) + T\\left(\\dfrac{1}{2}\\right) = 40 \\end{aligned}Substitute $F = T\\sqrt{3}$ into the equation:\\begin{aligned} &(T\\sqrt{3})\\left(\\dfrac{\\sqrt{3}}{2}\\right) + \\dfrac{1}{2}T = 40 \\cr &\\dfrac{3}{2}T + \\dfrac{1}{2}T = 40 \\cr &2T = 40 \\cr &T = 20\\text{ N} \\end{aligned}",
        "<strong>(b)(ii) Calculate F:</strong><br><br>Using $F = T\\sqrt{3}$ with $T = 20\\text{ N}$:\\begin{aligned} F &= 20\\sqrt{3}\\text{ N} \\cr &\\approx 34.6\\text{ N} \\end{aligned}",
        "Final Answer: (a) Proof complete, (b)(i) $20\\text{ N}$, (ii) $20\\sqrt{3}\\text{ N} \\approx 34.6\\text{ N}$"
    ],
    "pi_options": [
        {
            "ans": "(a) Proof complete, (b)(i) $40\\text{ N}$, (ii) $40\\sqrt{3}\\text{ N} \\approx 69.3\\text{ N}$",
            "feedback": "In part (b)(i), you forgot to divide by $2$ when solving $2T = 40$, arriving at $T = 40\\text{ N}$."
        },
        {
            "ans": "(a) Proof complete, (b)(i) $20\\text{ N}$, (ii) $\\dfrac{20\\sqrt{3}}{3}\\text{ N} \\approx 11.5\\text{ N}$",
            "feedback": "In part (b)(ii), you divided by $\\sqrt{3}$ instead of multiplying by $\\sqrt{3}$, using $F = T/\\sqrt{3}$."
        },
        {
            "ans": "(a) Proof complete, (b)(i) $34.6\\text{ N}$, (ii) $20\\text{ N}$",
            "feedback": "You swapped the values of $T$ and $F$, misassigning the tensions to their respective angles."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Geometry of Perpendicular Forces",
        "content": "Notice that the angle between the two upward forces is $(180^\\circ - 60^\\circ - 30^\\circ) = 90^\\circ$. Because the forces $F$ and $T$ are perpendicular, you can also resolve directly along the line of action of each force! Resolving along $T$ gives \\begin{aligned}T &= 40\\cos(90^\\circ - 30^\\circ)\\cr & = 40\\cos 60^\\circ \\cr &= 20\\text{ N}\\end{aligned} and resolving along $F$ gives \\begin{aligned}F &= 40\\cos(90^\\circ - 60^\\circ)\\cr & = 40\\cos 30^\\circ\\cr &= 20\\sqrt{3}\\text{ N}\\end{aligned} in a single step."
    }
},
{
    "id": "012233",
    "group_id": "012231",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Concurrent Forces",
    "subtopic": [
        "Suspended Particles",
        "Tension in Strings"
    ],
    "img": "images/Mechanics_pngs/012233.png",
    "question": "The diagram shows a small body of mass $6\\text{ kg}$ suspended in equilibrium by two light, inextensible strings $AB$ and $AC$.<br><br>The ends $B$ and $C$ are attached to two fixed points on a horizontal ceiling. The string $AB$ is inclined at $30^\\circ$ to the ceiling and has tension $T_1\\text{ N}$. The string $AC$ is inclined at $45^\\circ$ to the ceiling and has tension $T_2\\text{ N}$.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Show that the tensions satisfy the relation:$$T_2 = T_1\\sqrt{\\dfrac{3}{2}}$$<strong>(b)</strong> Calculate the values of $T_1$ and $T_2$, giving your answers in newtons to 3 significant figures.",
    "steps": [
        "<strong>(a) Resolve horizontally at point A:</strong><br><br>By alternate angles, string $AB$ pulls at $30^\\circ$ above the horizontal and string $AC$ pulls at $45^\\circ$ above the horizontal.<br><br>For horizontal equilibrium:\\begin{aligned} &T_2\\cos 45^\\circ - T_1\\cos 30^\\circ = 0 \\cr &T_2\\left(\\dfrac{\\sqrt{2}}{2}\\right) = T_1\\left(\\dfrac{\\sqrt{3}}{2}\\right) \\cr &T_2 = T_1\\left(\\dfrac{\\sqrt{3}}{\\sqrt{2}}\\right) \\cr &T_2 = T_1\\sqrt{\\dfrac{3}{2}} \\end{aligned}",
        "<strong>(b) Resolve vertically to find T₁ and T₂:</strong><br><br>The downward force is the weight $W = mg = 6(9.8) = 58.8\\text{ N}$.<br><br>For vertical equilibrium:\\begin{aligned} &T_1\\sin 30^\\circ + T_2\\sin 45^\\circ = 58.8 \\cr &T_1(0.5) + \\left(T_1\\sqrt{\\dfrac{3}{2}}\\right)\\left(\\dfrac{\\sqrt{2}}{2}\\right) = 58.8 \\cr &0.5T_1 + \\dfrac{\\sqrt{3}}{2}T_1 = 58.8 \\cr &\\left(\\dfrac{1 + \\sqrt{3}}{2}\\right)T_1 = 58.8 \\cr &T_1 = \\dfrac{117.6}{1 + \\sqrt{3}} \\cr &T_1 \\approx 43.0\\text{ N} \\end{aligned}Substitute $T_1$ to find $T_2$:\\begin{aligned} T_2 &= 43.045 \\times \\sqrt{1.5} \\cr &\\approx 52.7\\text{ N} \\end{aligned}",
        "Final Answer: (a) Proof complete, (b) $T_1 = 43.0\\text{ N}$, $T_2 = 52.7\\text{ N}$"
    ],
    "pi_options": [
        {
            "ans": "(a) Proof complete, (b) $T_1 = 52.7\\text{ N}$, $T_2 = 43.0\\text{ N}$",
            "feedback": "You inverted the tensions: the steeper string ($45^\\circ$) supports more of the vertical load than the shallower string ($30^\\circ$), so $T_2$ must be greater than $T_1$."
        },
        {
            "ans": "(a) Proof complete, (b) $T_1 = 4.39\\text{ N}$, $T_2 = 5.38\\text{ N}$",
            "feedback": "You used the mass $m = 6\\text{ kg}$ as the downward force instead of calculating weight $W = mg = 6(9.8) = 58.8\\text{ N}$."
        },
        {
            "ans": "(a) Proof complete, (b) $T_1 = 43.0\\text{ N}$, $T_2 = 35.1\\text{ N}$",
            "feedback": "In part (b), you evaluated $T_2 = T_1 / \\sqrt{1.5}$ instead of multiplying by $\\sqrt{1.5}$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Angles to Ceiling vs Angles to Vertical",
        "content": "Pay careful attention to whether the angles are measured to the horizontal ceiling or the vertical suspension line. Here, the angles given ($30^\\circ$ and $45^\\circ$) are with the horizontal ceiling. By alternate angles, these are the identical angles made with the horizontal at the knot $A$, meaning horizontal components use cosines and vertical components use sines."
    }
},
{
    "id": "012234",
    "group_id": "012231",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Concurrent Forces",
    "subtopic": [
        "Inclined Planes",
        "Resolving Forces"
    ],
    "img": "images/Mechanics_pngs/012234.png",
    "question": "The diagram shows a block of mass $4\\text{ kg}$ resting on a smooth plane inclined at an angle of $30^\\circ$ to the horizontal.<br><br>The block is held in equilibrium by a force of magnitude $P\\text{ N}$ acting at an angle of $20^\\circ$ above the surface of the inclined plane, in the vertical plane containing a line of greatest slope.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> By resolving forces parallel to the inclined plane, calculate the value of $P$, giving your answer to 3 significant figures.<br><br><strong>(b)</strong> Calculate the magnitude of the normal reaction $R$ exerted by the plane on the block, giving your answer to 3 significant figures.",
    "steps": [
        "<strong>(a) Resolve parallel to the inclined plane:</strong><br><br>The component of the weight acting down the slope is:\\begin{aligned} W_{\\parallel} &= mg\\sin 30^\\circ \\cr &= 4(9.8)(0.5) \\cr &= 19.6\\text{ N} \\end{aligned}The component of force $P$ acting up the slope is $P\\cos 20^\\circ$.<br><br>For equilibrium parallel to the slope:\\begin{aligned} &P\\cos 20^\\circ - 19.6 = 0 \\cr &P\\cos 20^\\circ = 19.6 \\cr &P = \\dfrac{19.6}{\\cos 20^\\circ} \\cr &P \\approx 20.9\\text{ N} \\end{aligned}",
        "<strong>(b) Resolve perpendicular to the inclined plane:</strong><br><br>The component of the weight perpendicular to the slope is:\\begin{aligned} W_{\\perp} &= mg\\cos 30^\\circ \\cr &= 4(9.8)\\cos 30^\\circ \\cr &= 39.2\\left(\\dfrac{\\sqrt{3}}{2}\\right) \\cr &\\approx 33.948\\text{ N} \\end{aligned}Force $P$ pulls slightly away from the plane with perpendicular component $P\\sin 20^\\circ$.<br><br>For equilibrium perpendicular to the slope:\\begin{aligned} &R + P\\sin 20^\\circ - mg\\cos 30^\\circ = 0 \\cr &R = 33.948 - (20.858)\\sin 20^\\circ \\cr &R = 33.948 - 7.134 \\cr &R \\approx 26.8\\text{ N} \\end{aligned}",
        "Final Answer: (a) $20.9\\text{ N}$, (b) $26.8\\text{ N}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $20.9\\text{ N}$, (b) $41.1\\text{ N}$",
            "feedback": "In part (b), you added the component $P\\sin 20^\\circ$ instead of subtracting it, treating $P$ as pushing into the plane rather than pulling away from it."
        },
        {
            "ans": "(a) $22.6\\text{ N}$, (b) $26.8\\text{ N}$",
            "feedback": "In part (a), you used $P\\sin 20^\\circ = 19.6$ instead of $P\\cos 20^\\circ = 19.6$, confusing the parallel and perpendicular components of $P$."
        },
        {
            "ans": "(a) $20.9\\text{ N}$, (b) $33.9\\text{ N}$",
            "feedback": "In part (b), you set the normal reaction equal to $mg\\cos 30^\\circ$, completely neglecting the vertical lift provided by the upward component of $P$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Tilted Force Components on Slopes",
        "content": "When an applied force acts at an angle to an inclined plane, it contributes to BOTH equilibrium equations. The component parallel to the plane is $P\\cos 20^\\circ$, but because it is angled above the slope, it also exerts an upward component $P\\sin 20^\\circ$ perpendicular to the surface. This partially relieves the plane, reducing the normal reaction to $R = mg\\cos 30^\\circ - P\\sin 20^\\circ$."
    }
},
{
    "id": "012235",
    "group_id": "012231",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Concurrent Forces",
    "subtopic": [
        "Bearings",
        "Resultant Vectors"
    ],
    "img": "images/Mechanics_pngs/012235.png",
    "question": "The diagram shows three horizontal forces acting on a buoy moored at a point $O$:<br>• A force of $18\\text{ kN}$ on a bearing of $000^\\circ$ (due North).<br>• A force of $24\\text{ kN}$ on a bearing of $060^\\circ$.<br>• A force of $15\\text{ kN}$ on a bearing of $135^\\circ$.<br><br><strong>(a)</strong> Calculate the total easterly component and total northerly component of the resultant force, giving your answers in $\\text{kN}$ to 3 significant figures.<br><br><strong>(b)</strong> Calculate the magnitude of the resultant force, giving your answer in $\\text{kN}$ to 3 significant figures.<br><br><strong>(c)</strong> Determine the bearing of the resultant force, giving your answer to the nearest whole degree.",
    "steps": [
        "<strong>(a) Resolve in East and North directions:</strong><br><br>For any force of magnitude $F$ on a three-figure bearing $\\beta$, the components are $F_E = F\\sin\\beta$ and $F_N = F\\cos\\beta$.<br><br>Total Easterly component ($E$):\\begin{aligned} E &= 18\\sin 000^\\circ + 24\\sin 060^\\circ \\cr &\qquad + 15\\sin 135^\\circ \\cr &= 0 + 24\\left(\\dfrac{\\sqrt{3}}{2}\\right) + 15\\left(\\dfrac{\\sqrt{2}}{2}\\right) \\cr &= 20.7846 + 10.6066 \\cr &= 31.3912\\text{ kN} \\cr &\\approx 31.4\\text{ kN} \\end{aligned}Total Northerly component ($N$):\\begin{aligned} N &= 18\\cos 000^\\circ + 24\\cos 060^\\circ \\cr &\qquad + 15\\cos 135^\\circ \\cr &= 18(1) + 24(0.5) - 15\\left(\\dfrac{\\sqrt{2}}{2}\\right) \\cr &= 18 + 12 - 10.6066 \\cr &= 19.3934\\text{ kN} \\cr &\\approx 19.4\\text{ kN} \\end{aligned}",
        "<strong>(b) Calculate resultant magnitude:</strong><br><br>Using Pythagoras' theorem:\\begin{aligned} R &= \\sqrt{E^2 + N^2} \\cr &= \\sqrt{31.3912^2 + 19.3934^2} \\cr &= \\sqrt{985.408 + 376.104} \\cr &= \\sqrt{1361.512} \\cr &\\approx 36.9\\text{ kN} \\end{aligned}",
        "<strong>(c) Determine bearing of resultant:</strong><br><br>Because both $E > 0$ and $N > 0$, the resultant lies in the north-east quadrant. The bearing $\\beta$ clockwise from North is:\\begin{aligned} \\tan\\beta &= \\dfrac{E}{N} \\cr &= \\dfrac{31.3912}{19.3934} \\cr &\\approx 1.6187 \\cr \\beta &= \\arctan(1.6187) \\cr &\\approx 58.3^\\circ \\cr &\\approx 058^\\circ \\end{aligned}",
        "Final Answer: (a) $31.4\\text{ kN}$ East, $19.4\\text{ kN}$ North, (b) $36.9\\text{ kN}$, (c) $058^\\circ$"
    ],
    "pi_options": [
        {
            "ans": "(a) $19.4\\text{ kN}$ East, $31.4\\text{ kN}$ North, (b) $36.9\\text{ kN}$, (c) $032^\\circ$",
            "feedback": "You swapped the trigonometric functions for bearings, using $\\cos\\beta$ for East and $\\sin\\beta$ for North, which inverted the components."
        },
        {
            "ans": "(a) $31.4\\text{ kN}$ East, $19.4\\text{ kN}$ North, (b) $50.8\\text{ kN}$, (c) $058^\\circ$",
            "feedback": "In part (b), you summed the scalar magnitudes of the components ($31.4 + 19.4$) instead of taking the square root of the sum of squares."
        },
        {
            "ans": "(a) $31.4\\text{ kN}$ East, $19.4\\text{ kN}$ North, (b) $36.9\\text{ kN}$, (c) $032^\\circ$",
            "feedback": "In part (c), you computed $\\arctan(N/E)$ (angle from East) instead of $\\arctan(E/N)$ (bearing clockwise from North)."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Bearings Shortcut with Sine and Cosine",
        "content": "For standard cartesian angles measured anticlockwise from the positive $x$-axis, $x = F\\cos\\theta$ and $y = F\\sin\\theta$. But for a navigation bearing $\\beta$ measured clockwise from North, the roles naturally swap: $\\text{East} = F\\sin\\beta$ and $\\text{North} = F\\cos\\beta$. Using this rule directly avoids converting bearings into cartesian angles and saves precious time in exam conditions."
    }
},
{
    "id": "012236",
    "group_id": "012236",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Kinematics with Constant Acceleration",
    "subtopic": [
        "2D Vectors",
        "SUVAT Equations"
    ],
    "img": false,
    "question": "A helicopter is flying in a horizontal plane during a low-altitude search manoeuvre with constant acceleration.<br><br>At time $t = 0\\text{ s}$, the velocity of the helicopter is $(3\\mathbf{i} - 8\\mathbf{j})\\text{ m s}^{-1}$.<br>At time $t = 3\\text{ s}$, the velocity of the helicopter is $(15\\mathbf{i} + 4\\mathbf{j})\\text{ m s}^{-1}$.<br><br><strong>(a)</strong> Calculate the acceleration vector of the helicopter.<br><br><strong>(b)</strong> Find the displacement of the helicopter from its initial position when $t = 3\\text{ s}$, and hence calculate the straight-line distance it has travelled during these $3\\text{ seconds}$, giving your answer to 3 significant figures.",
    "steps": [
        "<strong>(a) Calculate the acceleration vector:</strong><br><br>Using $\\mathbf{a} = \\dfrac{\\mathbf{v} - \\mathbf{u}}{t}$ with $t = 3\\text{ s}$:\\begin{aligned} \\mathbf{a} &= \\dfrac{(15\\mathbf{i} + 4\\mathbf{j}) - (3\\mathbf{i} - 8\\mathbf{j})}{3} \\cr &= \\dfrac{(15 - 3)\\mathbf{i} + (4 - (-8))\\mathbf{j}}{3} \\cr &= \\dfrac{12\\mathbf{i} + 12\\mathbf{j}}{3} \\cr &= (4\\mathbf{i} + 4\\mathbf{j})\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Find the displacement vector and straight-line distance:</strong><br><br>Using $\\mathbf{s} = \\mathbf{u}t + \\dfrac{1}{2}\\mathbf{a}t^2$:\\begin{aligned} \\mathbf{s} &= 3(3\\mathbf{i} - 8\\mathbf{j}) \\cr &\\qquad + \\dfrac{1}{2}(3^2)(4\\mathbf{i} + 4\\mathbf{j}) \\cr &= (9\\mathbf{i} - 24\\mathbf{j}) \\cr &\\qquad + 4.5(4\\mathbf{i} + 4\\mathbf{j}) \\cr &= (9\\mathbf{i} - 24\\mathbf{j}) \\cr &\\qquad + (18\\mathbf{i} + 18\\mathbf{j}) \\cr &= (27\\mathbf{i} - 6\\mathbf{j})\\text{ m} \\end{aligned}The straight-line distance is the magnitude of the displacement:\\begin{aligned} |\\mathbf{s}| &= \\sqrt{27^2 + (-6)^2} \\cr &= \\sqrt{729 + 36} \\cr &= \\sqrt{765} \\cr &\\approx 27.7\\text{ m} \\end{aligned}",
        "Final Answer: (a) $(4\\mathbf{i} + 4\\mathbf{j})\\text{ m s}^{-2}$, (b) $(27\\mathbf{i} - 6\\mathbf{j})\\text{ m}$, $27.7\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $(4\\mathbf{i} - \\dfrac{4}{3}\\mathbf{j})\\text{ m s}^{-2}$, (b) $(27\\mathbf{i} - 6\\mathbf{j})\\text{ m}$, $27.7\\text{ m}$",
            "feedback": "In part (a), you subtracted incorrectly when finding the $\\mathbf{j}$ component of velocity change, evaluating $4 - 8 = -4$ instead of $4 - (-8) = 12$."
        },
        {
            "ans": "(a) $(4\\mathbf{i} + 4\\mathbf{j})\\text{ m s}^{-2}$, (b) $(45\\mathbf{i} + 12\\mathbf{j})\\text{ m}$, $46.6\\text{ m}$",
            "feedback": "In part (b), you evaluated $\\mathbf{s} = \\mathbf{v}t$ as if velocity were constant at its final value, omitting the initial velocity and acceleration."
        },
        {
            "ans": "(a) $(4\\mathbf{i} + 4\\mathbf{j})\\text{ m s}^{-2}$, (b) $(27\\mathbf{i} - 6\\mathbf{j})\\text{ m}$, $33.0\\text{ m}$",
            "feedback": "In part (b), you added the components scalar-wise ($27 + 6 = 33$) rather than using Pythagoras' theorem to find the vector magnitude."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Average Velocity Shortcut",
        "content": "For motion with constant acceleration, the displacement can also be calculated via the average velocity formula $\\mathbf{s} = \\frac{1}{2}(\\mathbf{u} + \\mathbf{v})t$. Here, \\begin{aligned}\\frac{1}{2}[(3\\mathbf{i} - 8\\mathbf{j}) &+ (15\\mathbf{i} + 4\\mathbf{j})](3)\\cr & = \\frac{1}{2}(18\\mathbf{i} - 4\\mathbf{j})(3)\\cr & = (9\\mathbf{i} - 2\\mathbf{j})(3) \\cr &= (27\\mathbf{i} - 6\\mathbf{j})\\text{ m}\\end{aligned} This provides an instantaneous check that avoids squaring time."
    }
},
{
    "id": "012237",
    "group_id": "012236",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Kinematics with Constant Acceleration",
    "subtopic": [
        "Velocity & Speed",
        "Bearings in Kinematics"
    ],
    "img": false,
    "question": "A microlight aircraft operates in a horizontal flight corridor along a coastline. At time $t = 0\\text{ s}$, the aircraft leaves an airfield with velocity $\\mathbf{u} = (5\\mathbf{i} + 2\\mathbf{j})\\text{ m s}^{-1}$ and moves with constant acceleration $\\mathbf{a} = (1.5\\mathbf{i} - 2\\mathbf{j})\\text{ m s}^{-2}$, where $\\mathbf{i}$ and $\\mathbf{j}$ are unit vectors directed due East and due North respectively.<br><br><strong>(a)</strong> Find the velocity vector of the microlight when $t = 6\\text{ s}$.<br><br><strong>(b)</strong> Calculate the speed of the microlight when $t = 6\\text{ s}$, giving your answer to 3 significant figures.<br><br><strong>(c)</strong> Determine the direction in which the microlight is travelling when $t = 6\\text{ s}$, expressed as a three-figure bearing to the nearest whole degree.<br><br><strong>(d)</strong> Given that the microlight started from the point with position vector $(10\\mathbf{i} + 25\\mathbf{j})\\text{ m}$ relative to a coastal tracking station at $O$, find its position vector when $t = 6\\text{ s}$.",
    "steps": [
        "<strong>(a) Find velocity vector at t = 6 s:</strong><br><br>Using $\\mathbf{v} = \\mathbf{u} + \\mathbf{a}t$:\\begin{aligned} \\mathbf{v} &= (5\\mathbf{i} + 2\\mathbf{j}) + 6(1.5\\mathbf{i} - 2\\mathbf{j}) \\cr &= (5\\mathbf{i} + 2\\mathbf{j}) + (9\\mathbf{i} - 12\\mathbf{j}) \\cr &= (14\\mathbf{i} - 10\\mathbf{j})\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(b) Calculate speed:</strong><br><br>Speed is the magnitude of the velocity vector:\\begin{aligned} |\\mathbf{v}| &= \\sqrt{14^2 + (-10)^2} \\cr &= \\sqrt{196 + 100} \\cr &= \\sqrt{296} \\cr &\\approx 17.2\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(c) Determine bearing:</strong><br><br>The velocity vector $(14\\mathbf{i} - 10\\mathbf{j})$ points East ($+14$) and South ($-10$).<br><br>Let $\\alpha$ be the angle South of East:\\begin{aligned} \\tan\\alpha &= \\dfrac{10}{14} \\cr &\\approx 0.7143 \\cr \\alpha &= \\arctan(0.7143) \\cr &\\approx 35.5^\\circ \\end{aligned}Since East is on a bearing of $090^\\circ$, the bearing clockwise from North is:\\begin{aligned} \\text{Bearing} &= 90^\\circ + 35.5^\\circ \\cr &= 125.5^\\circ \\cr &\\approx 126^\\circ \\end{aligned}",
        "<strong>(d) Calculate position vector:</strong><br><br>Using $\\mathbf{r} = \\mathbf{r}_0 + \\mathbf{u}t + \\dfrac{1}{2}\\mathbf{a}t^2$:\\begin{aligned} \\mathbf{r} &= (10\\mathbf{i} + 25\\mathbf{j}) \\cr &\\qquad + 6(5\\mathbf{i} + 2\\mathbf{j}) \\cr &\\qquad + \\dfrac{1}{2}(6^2)(1.5\\mathbf{i} - 2\\mathbf{j}) \\cr &= (10\\mathbf{i} + 25\\mathbf{j}) \\cr &\\qquad + (30\\mathbf{i} + 12\\mathbf{j}) \\cr &\\qquad + 18(1.5\\mathbf{i} - 2\\mathbf{j}) \\cr &= (10\\mathbf{i} + 25\\mathbf{j}) \\cr &\\qquad + (30\\mathbf{i} + 12\\mathbf{j}) \\cr &\\qquad + (27\\mathbf{i} - 36\\mathbf{j}) \\cr &= (67\\mathbf{i} + \\mathbf{j})\\text{ m} \\end{aligned}",
        "Final Answer: (a) $(14\\mathbf{i} - 10\\mathbf{j})\\text{ m s}^{-1}$, (b) $17.2\\text{ m s}^{-1}$, (c) $126^\\circ$, (d) $(67\\mathbf{i} + \\mathbf{j})\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $(14\\mathbf{i} - 10\\mathbf{j})\\text{ m s}^{-1}$, (b) $17.2\\text{ m s}^{-1}$, (c) $036^\\circ$, (d) $(67\\mathbf{i} + \\mathbf{j})\\text{ m}$",
            "feedback": "In part (c), you calculated $\\arctan(10/14) \\approx 36^\\circ$ but wrote it down directly as the bearing without referencing clockwise rotation from North."
        },
        {
            "ans": "(a) $(14\\mathbf{i} - 10\\mathbf{j})\\text{ m s}^{-1}$, (b) $17.2\\text{ m s}^{-1}$, (c) $126^\\circ$, (d) $(57\\mathbf{i} - 24\\mathbf{j})\\text{ m}$",
            "feedback": "In part (d), you calculated the displacement from the airfield $\\mathbf{s} = \\mathbf{u}t + \\frac{1}{2}\\mathbf{a}t^2$ but forgot to add the initial position vector $\\mathbf{r}_0$ relative to $O$."
        },
        {
            "ans": "(a) $(14\\mathbf{i} - 10\\mathbf{j})\\text{ m s}^{-1}$, (b) $24.0\\text{ m s}^{-1}$, (c) $126^\\circ$, (d) $(67\\mathbf{i} + \\mathbf{j})\\text{ m}$",
            "feedback": "In part (b), you summed the magnitudes of the components ($14 + 10 = 24$) rather than applying Pythagoras' theorem $\\sqrt{14^2 + (-10)^2}$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Navigational Bearings vs Cartesian Angles",
        "content": "Direction questions frequently ask for a bearing. A velocity of $14\\mathbf{i} - 10\\mathbf{j}$ means moving $14\\text{ m s}^{-1}$ East and $10\\text{ m s}^{-1}$ South. The angle with East is $\\arctan(10/14) \\approx 35.5^\\circ$. Because East is $090^\\circ$, turning South adds to the bearing: $090^\\circ + 35.5^\\circ = 125.5^\\circ \\approx 126^\\circ$. Always sketch a compass rose to avoid confusing bearings with trigonometric angles."
    }
},
{
    "id": "012238",
    "group_id": "012236",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Kinematics with Constant Acceleration",
    "subtopic": [
        "Direction of Motion",
        "Vector SUVAT"
    ],
    "img": false,
    "question": "A light aircraft is undertaking an aerial photographic survey in a horizontal plane. At time $t = 0\\text{ s}$, the aircraft passes directly over a ground marker at $O$ with initial velocity $\\mathbf{u} = (-9\\mathbf{i} + 15\\mathbf{j})\\text{ m s}^{-1}$. It maintains a constant acceleration $\\mathbf{a} = (4\\mathbf{i} - 2\\mathbf{j})\\text{ m s}^{-2}$, where $\\mathbf{i}$ and $\\mathbf{j}$ are perpendicular unit vectors directed East and North respectively.<br><br><strong>(a)</strong> Find the time at which the aircraft is travelling due North, and state its speed at this instant.<br><br><strong>(b)</strong> Find the time at which the aircraft is travelling parallel to the vector $(\\mathbf{i} + \\mathbf{j})$ (i.e. heading North-East).<br><br><strong>(c)</strong> Calculate the straight-line distance of the aircraft from the marker at $O$ at the instant when it is travelling parallel to $(\\mathbf{i} + \\mathbf{j})$, giving your answer to 3 significant figures.",
    "steps": [
        "<strong>(a) Travelling due North:</strong><br><br>The general velocity vector at time $t$ is:\\begin{aligned} \\mathbf{v}(t) &= \\mathbf{u} + \\mathbf{a}t \\cr &= (-9 + 4t)\\mathbf{i} + (15 - 2t)\\mathbf{j}\\text{ m s}^{-1} \\end{aligned}When travelling due North, the horizontal ($\\mathbf{i}$) component must equal zero:\\begin{aligned} &-9 + 4t = 0 \\cr &4t = 9 \\cr &t = 2.25\\text{ s} \\end{aligned}The vertical component at $t = 2.25\\text{ s}$ is:\\begin{aligned} v_y &= 15 - 2(2.25) \\cr &= 15 - 4.5 \\cr &= 10.5\\text{ m s}^{-1} \\end{aligned}Because $v_y > 0$, the aircraft is indeed heading North with speed $10.5\\text{ m s}^{-1}$.",
        "<strong>(b) Travelling parallel to (i + j):</strong><br><br>If velocity is parallel to $\\mathbf{i} + \\mathbf{j}$, its $\\mathbf{i}$ and $\\mathbf{j}$ components must be equal and positive:\\begin{aligned} &-9 + 4t = 15 - 2t \\cr &6t = 24 \\cr &t = 4\\text{ s} \\end{aligned}At $t = 4\\text{ s}$, $\\mathbf{v} = (7\\mathbf{i} + 7\\mathbf{j})\\text{ m s}^{-1} = 7(\\mathbf{i} + \\mathbf{j})\\text{ m s}^{-1}$, confirming it is directed North-East.",
        "<strong>(c) Calculate distance from origin at t = 4 s:</strong><br><br>Using $\\mathbf{s} = \\mathbf{u}t + \\dfrac{1}{2}\\mathbf{a}t^2$:\\begin{aligned} \\mathbf{s} &= 4(-9\\mathbf{i} + 15\\mathbf{j}) \\cr &\\qquad + \\dfrac{1}{2}(4^2)(4\\mathbf{i} - 2\\mathbf{j}) \\cr &= (-36\\mathbf{i} + 60\\mathbf{j}) \\cr &\\qquad + 8(4\\mathbf{i} - 2\\mathbf{j}) \\cr &= (-36\\mathbf{i} + 60\\mathbf{j}) \\cr &\\qquad + (32\\mathbf{i} - 16\\mathbf{j}) \\cr &= (-4\\mathbf{i} + 44\\mathbf{j})\\text{ m} \\end{aligned}The straight-line distance is:\\begin{aligned} |\\mathbf{s}| &= \\sqrt{(-4)^2 + 44^2} \\cr &= \\sqrt{16 + 1936} \\cr &= \\sqrt{1952} \\cr &\\approx 44.2\\text{ m} \\end{aligned}",
        "Final Answer: (a) $2.25\\text{ s}$, $10.5\\text{ m s}^{-1}$, (b) $4\\text{ s}$, (c) $44.2\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $2.25\\text{ s}$, $10.5\\text{ m s}^{-1}$, (b) $4\\text{ s}$, (c) $40.0\\text{ m}$",
            "feedback": "In part (c), you combined the components as $44 - 4 = 40$ rather than evaluating the magnitude $\\sqrt{(-4)^2 + 44^2}$."
        },
        {
            "ans": "(a) $7.50\\text{ s}$, $21.0\\text{ m s}^{-1}$, (b) $4\\text{ s}$, (c) $44.2\\text{ m}$",
            "feedback": "In part (a), you set the vertical velocity $v_y = 0$ ($15 - 2t = 0$) instead of setting the horizontal velocity $v_x = 0$, finding when it moves due East rather than due North."
        },
        {
            "ans": "(a) $2.25\\text{ s}$, $10.5\\text{ m s}^{-1}$, (b) $12\\text{ s}$, (c) $44.2\\text{ m}$",
            "feedback": "In part (b), an algebraic slip occurred: $4t - 2t = 15 - 9 \\implies 2t = 6$, subtracting terms across the equals sign incorrectly."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Parallel Vectors vs Collinear Position",
        "content": "Be careful to distinguish between where an aircraft is <strong>located</strong> and the direction in which it is <strong>moving</strong>. The direction of motion depends entirely on the instantaneous velocity vector $\\mathbf{v}(t)$, not the position vector $\\mathbf{r}(t)$. Travelling parallel to $\\mathbf{i} + \\mathbf{j}$ requires $v_x = v_y > 0$, regardless of whether the aircraft's coordinates happen to lie on the line $y = x$."
    }
},
{
    "id": "012239",
    "group_id": "012236",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Kinematics with Constant Acceleration",
    "subtopic": [
        "Two-Body Interception",
        "Vector Kinematics"
    ],
    "img": false,
    "question": "Two radio-controlled toy drones, $A$ and $B$, are flown in a large indoor sports hall in the same horizontal plane.<br><br>At time $t = 0\\text{ s}$, toy drone $A$ passes through the origin $O$ with constant velocity $\\mathbf{v}_A = (8\\mathbf{i} + 7\\mathbf{j})\\text{ m s}^{-1}$.<br><br>At the same instant $t = 0\\text{ s}$, toy drone $B$ starts from rest at the point with position vector $(15\\mathbf{i} + 10\\mathbf{j})\\text{ m}$ and accelerates with constant acceleration $\\mathbf{a}_B = (k\\mathbf{i} + 2\\mathbf{j})\\text{ m s}^{-2}$, where $k$ is a constant.<br><br>Given that toy drone $B$ intercepts toy drone $A$ at time $t = T\\text{ s}$:<br><br><strong>(a)</strong> Show that $T = 5\\text{ s}$.<br><br><strong>(b)</strong> Find the value of the constant $k$.<br><br><strong>(c)</strong> Calculate the velocity vector and the speed of toy drone $B$ at the instant of interception.",
    "steps": [
        "<strong>(a) Show that T = 5 s:</strong><br><br>Position vector of toy drone $A$ at time $t$:\\begin{aligned} \\mathbf{r}_A &= (8t\\mathbf{i} + 7t\\mathbf{j})\\text{ m} \\end{aligned}Position vector of toy drone $B$ starting from rest:\\begin{aligned} \\mathbf{r}_B &= (15\\mathbf{i} + 10\\mathbf{j}) + \\dfrac{1}{2}(k\\mathbf{i} + 2\\mathbf{j})t^2 \\cr &= \\left(15 + \\dfrac{1}{2}kt^2\\right)\\mathbf{i} \\cr &\\qquad + (10 + t^2)\\mathbf{j}\\text{ m} \\end{aligned}Equating vertical ($\\mathbf{j}$) components for interception:\\begin{aligned} &7t = 10 + t^2 \\cr &t^2 - 7t + 10 = 0 \\cr &(t - 2)(t - 5) = 0 \\end{aligned}For the physical interception under the flight parameters, $T = 5\\text{ s}$.",
        "<strong>(b) Find the value of k:</strong><br><br>Equating horizontal ($\\mathbf{i}$) components at $T = 5\\text{ s}$:\\begin{aligned} &8(5) = 15 + \\dfrac{1}{2}k(5^2) \\cr &40 = 15 + 12.5k \\cr &12.5k = 25 \\cr &k = 2 \\end{aligned}",
        "<strong>(c) Calculate velocity vector and speed of B:</strong><br><br>Since toy drone $B$ started from rest with acceleration $\\mathbf{a}_B = (2\\mathbf{i} + 2\\mathbf{j})\\text{ m s}^{-2}$:\\begin{aligned} \\mathbf{v}_B(5) &= \\mathbf{a}_B T \\cr &= 5(2\\mathbf{i} + 2\\mathbf{j}) \\cr &= (10\\mathbf{i} + 10\\mathbf{j})\\text{ m s}^{-1} \\end{aligned}The speed of $B$ at interception is:\\begin{aligned} |\\mathbf{v}_B| &= \\sqrt{10^2 + 10^2} \\cr &= \\sqrt{200} \\cr &= 10\\sqrt{2} \\cr &\\approx 14.1\\text{ m s}^{-1} \\end{aligned}",
        "Final Answer: (a) Proof complete ($T = 5\\text{ s}$), (b) $k = 2$, (c) $(10\\mathbf{i} + 10\\mathbf{j})\\text{ m s}^{-1}$, $14.1\\text{ m s}^{-1}$"
    ],
    "pi_options": [
        {
            "ans": "(a) Proof complete ($T = 5\\text{ s}$), (b) $k = 1$, (c) $(5\\mathbf{i} + 10\\mathbf{j})\\text{ m s}^{-1}$, $11.2\\text{ m s}^{-1}$",
            "feedback": "In part (b), you forgot the factor of $\\frac{1}{2}$ in the displacement equation, writing $40 = 15 + 25k$ which led to $k = 1$."
        },
        {
            "ans": "(a) Proof complete ($T = 5\\text{ s}$), (b) $k = 2$, (c) $(8\\mathbf{i} + 7\\mathbf{j})\\text{ m s}^{-1}$, $10.6\\text{ m s}^{-1}$",
            "feedback": "In part (c), you stated the velocity of drone $A$ rather than calculating the velocity of drone $B$ at the moment of impact."
        },
        {
            "ans": "(a) Proof complete ($T = 5\\text{ s}$), (b) $k = 2$, (c) $(10\\mathbf{i} + 10\\mathbf{j})\\text{ m s}^{-1}$, $20.0\\text{ m s}^{-1}$",
            "feedback": "In part (c), you summed the vector components scalar-wise ($10 + 10 = 20$) rather than taking the Pythagorean magnitude $\\sqrt{10^2 + 10^2}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Component Independence in Interceptions",
        "content": "In multi-body 2D kinematics, always look for the coordinate component that contains only one unknown. Here, the vertical $\\mathbf{j}$ motion depended solely on $t$ because the vertical acceleration was known ($2\\text{ m s}^{-2}$). Solving the vertical quadratic first locked down the time of flight $T = 5\\text{ s}$, turning the horizontal $\\mathbf{i}$ equation into a trivial linear solve for $k$."
    }
},
{
    "id": "012240",
    "group_id": "012236",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Kinematics with Constant Acceleration",
    "subtopic": [
        "Newton's Second Law",
        "2D Vector Kinematics"
    ],
    "img": false,
    "question": "A commercial parcel-delivery drone of mass $2.5\\text{ kg}$ flies horizontally between two local distribution hubs.<br><br>At time $t = 0\\text{ s}$, the drone passes through a waypoint with position vector $(6\\mathbf{i} - 10\\mathbf{j})\\text{ m}$ and initial velocity $(4\\mathbf{i} + 3\\mathbf{j})\\text{ m s}^{-1}$.<br><br>The drone is driven by a constant horizontal rotor thrust $\\mathbf{F}_1 = (8\\mathbf{i} + 5\\mathbf{j})\\text{ N}$ and simultaneously encounters a constant horizontal crosswind force $\\mathbf{F}_2 = (-3\\mathbf{i} - 10\\mathbf{j})\\text{ N}$.<br><br><strong>(a)</strong> Find the resultant horizontal force acting on the drone, and show that its acceleration vector is $(2\\mathbf{i} - 2\\mathbf{j})\\text{ m s}^{-2}$.<br><br><strong>(b)</strong> Find the velocity vector and speed of the drone when $t = 5\\text{ s}$, giving the speed to 3 significant figures.<br><br><strong>(c)</strong> Find the position vector of the drone when $t = 5\\text{ s}$, and calculate its straight-line distance from the origin at this instant to 3 significant figures.",
    "steps": [
        "<strong>(a) Find resultant force and acceleration:</strong><br><br>The resultant force is the vector sum $\\mathbf{R} = \\mathbf{F}_1 + \\mathbf{F}_2$:\\begin{aligned} \\mathbf{R} &= (8\\mathbf{i} + 5\\mathbf{j}) + (-3\\mathbf{i} - 10\\mathbf{j}) \\cr &= (8 - 3)\\mathbf{i} + (5 - 10)\\mathbf{j} \\cr &= (5\\mathbf{i} - 5\\mathbf{j})\\text{ N} \\end{aligned}Applying Newton's Second Law with $m = 2.5\\text{ kg}$:\\begin{aligned} \\mathbf{a} &= \\dfrac{\\mathbf{R}}{m} \\cr &= \\dfrac{5\\mathbf{i} - 5\\mathbf{j}}{2.5} \\cr &= (2\\mathbf{i} - 2\\mathbf{j})\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Velocity vector and speed at t = 5 s:</strong><br><br>Using $\\mathbf{v} = \\mathbf{u} + \\mathbf{a}t$:\\begin{aligned} \\mathbf{v} &= (4\\mathbf{i} + 3\\mathbf{j}) + 5(2\\mathbf{i} - 2\\mathbf{j}) \\cr &= (4\\mathbf{i} + 3\\mathbf{j}) + (10\\mathbf{i} - 10\\mathbf{j}) \\cr &= (14\\mathbf{i} - 7\\mathbf{j})\\text{ m s}^{-1} \\end{aligned}The speed is the magnitude of $\\mathbf{v}$:\\begin{aligned} |\\mathbf{v}| &= \\sqrt{14^2 + (-7)^2} \\cr &= \\sqrt{196 + 49} \\cr &= \\sqrt{245} \\cr &\\approx 15.7\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(c) Position vector and distance from origin:</strong><br><br>Using $\\mathbf{r} = \\mathbf{r}_0 + \\mathbf{u}t + \\dfrac{1}{2}\\mathbf{a}t^2$:\\begin{aligned} \\mathbf{r} &= (6\\mathbf{i} - 10\\mathbf{j}) \\cr &\\qquad + 5(4\\mathbf{i} + 3\\mathbf{j}) \\cr &\\qquad + \\dfrac{1}{2}(5^2)(2\\mathbf{i} - 2\\mathbf{j}) \\cr &= (6\\mathbf{i} - 10\\mathbf{j}) \\cr &\\qquad + (20\\mathbf{i} + 15\\mathbf{j}) \\cr &\\qquad + 12.5(2\\mathbf{i} - 2\\mathbf{j}) \\cr &= (6\\mathbf{i} - 10\\mathbf{j}) \\cr &\\qquad + (20\\mathbf{i} + 15\\mathbf{j}) \\cr &\\qquad + (25\\mathbf{i} - 25\\mathbf{j}) \\cr &= (51\\mathbf{i} - 20\\mathbf{j})\\text{ m} \\end{aligned}The distance from the origin is:\\begin{aligned} |\\mathbf{r}| &= \\sqrt{51^2 + (-20)^2} \\cr &= \\sqrt{2601 + 400} \\cr &= \\sqrt{3001} \\cr &\\approx 54.8\\text{ m} \\end{aligned}",
        "Final Answer: (a) $(5\\mathbf{i} - 5\\mathbf{j})\\text{ N}$, $(2\\mathbf{i} - 2\\mathbf{j})\\text{ m s}^{-2}$, (b) $(14\\mathbf{i} - 7\\mathbf{j})\\text{ m s}^{-1}$, $15.7\\text{ m s}^{-1}$, (c) $(51\\mathbf{i} - 20\\mathbf{j})\\text{ m}$, $54.8\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $(5\\mathbf{i} - 5\\mathbf{j})\\text{ N}$, $(2\\mathbf{i} - 2\\mathbf{j})\\text{ m s}^{-2}$, (b) $(14\\mathbf{i} - 7\\mathbf{j})\\text{ m s}^{-1}$, $15.7\\text{ m s}^{-1}$, (c) $(45\\mathbf{i} - 10\\mathbf{j})\\text{ m}$, $46.1\\text{ m}$",
            "feedback": "In part (c), you calculated the displacement from the waypoint $\\mathbf{s} = \\mathbf{u}t + \\frac{1}{2}\\mathbf{a}t^2$ but forgot to add the initial waypoint position $\\mathbf{r}_0$."
        },
        {
            "ans": "(a) $(5\\mathbf{i} - 5\\mathbf{j})\\text{ N}$, $(12.5\\mathbf{i} - 12.5\\mathbf{j})\\text{ m s}^{-2}$, (b) $(66.5\\mathbf{i} - 59.5\\mathbf{j})\\text{ m s}^{-1}$, $89.2\\text{ m s}^{-1}$, (c) $(51\\mathbf{i} - 20\\mathbf{j})\\text{ m}$, $54.8\\text{ m}$",
            "feedback": "In part (a), you multiplied the resultant force by the mass ($m\\mathbf{R}$) instead of dividing by the mass ($\\mathbf{R}/m$) to obtain acceleration."
        },
        {
            "ans": "(a) $(5\\mathbf{i} - 5\\mathbf{j})\\text{ N}$, $(2\\mathbf{i} - 2\\mathbf{j})\\text{ m s}^{-2}$, (b) $(14\\mathbf{i} - 7\\mathbf{j})\\text{ m s}^{-1}$, $21.0\\text{ m s}^{-1}$, (c) $(51\\mathbf{i} - 20\\mathbf{j})\\text{ m}$, $54.8\\text{ m}$",
            "feedback": "In part (b), you added the scalar components $14 + 7 = 21$ instead of taking the square root of the sum of squares $\\sqrt{14^2 + (-7)^2}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Bridging Dynamics and Kinematics",
        "content": "This question links Newton's Second Law (Dynamics) with SUVAT (Kinematics). The crucial bridge is the acceleration vector $\\mathbf{a} = \\frac{\\Sigma\\mathbf{F}}{m}$. Once $\\mathbf{a}$ is found, verify that it is constant (independent of $t$, $v$, or $x$) before selecting constant acceleration kinematic formulas."
    }
},
{
    "id": "012241",
    "group_id": "012241",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Kinematics",
    "subtopic": [
        "Velocity-Time Graphs",
        "Multi-Stage Motion"
    ],
    "img": "images/Mechanics_pngs/012241.png",
    "question": "The diagram shows the velocity-time graph for a particle moving in a straight line over a period of $14\\text{ seconds}$.<br><br>The motion consists of three distinct stages:<br>• Accelerating uniformly from rest to a speed of $12\\text{ m s}^{-1}$ in the first $4\\text{ seconds}$.<br>• Travelling at a constant speed of $12\\text{ m s}^{-1}$ from $t = 4\\text{ s}$ to $t = T\\text{ s}$.<br>• Decelerating uniformly from $12\\text{ m s}^{-1}$ to $6\\text{ m s}^{-1}$ in the time interval from $t = T\\text{ s}$ to $t = 14\\text{ s}$.<br><br>The total distance travelled by the particle during the $14\\text{ seconds}$ is $135\\text{ m}$.<br><br><strong>(a)</strong> Calculate the acceleration of the particle during the first $4\\text{ seconds}$.<br><br><strong>(b)</strong> Calculate the value of $T$.<br><br><strong>(c)</strong> Determine the deceleration of the particle during the final stage of the motion.",
    "steps": [
        "<strong>(a) Calculate acceleration in stage 1:</strong><br><br>The acceleration is the gradient of the velocity-time graph during the first $4\\text{ seconds}$:\\begin{aligned} a &= \\dfrac{v - u}{t} \\cr &= \\dfrac{12 - 0}{4} \\cr &= 3\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Form an area equation to find T:</strong><br><br>Total distance equals the area under the velocity-time graph.<br><br>Stage 1 area (triangle):\\begin{aligned} s_1 &= \\dfrac{1}{2}(4)(12) \\cr &= 24\\text{ m} \\end{aligned}Stage 2 area (rectangle):\\begin{aligned} s_2 &= 12(T - 4) \\cr &= (12T - 48)\\text{ m} \\end{aligned}Stage 3 area (trapezium):\\begin{aligned} s_3 &= \\dfrac{1}{2}(12 + 6)(14 - T) \\cr &= 9(14 - T) \\cr &= (126 - 9T)\\text{ m} \\end{aligned}Summing the three areas to $135\\text{ m}$:\\begin{aligned} &24 + (12T - 48) \\cr &\\qquad + (126 - 9T) = 135 \\cr &3T + 102 = 135 \\cr &3T = 33 \\cr &T = 11\\text{ s} \\end{aligned}",
        "<strong>(c) Calculate deceleration in stage 3:</strong><br><br>Deceleration is the magnitude of the negative gradient from $t = 11\\text{ s}$ to $t = 14\\text{ s}$:\\begin{aligned} \\text{Deceleration} &= \\dfrac{12 - 6}{14 - 11} \\cr &= \\dfrac{6}{3} \\cr &= 2\\text{ m s}^{-2} \\end{aligned}",
        "Final Answer: (a) $3\\text{ m s}^{-2}$, (b) $11\\text{ s}$, (c) $2\\text{ m s}^{-2}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $3\\text{ m s}^{-2}$, (b) $9\\text{ s}$, (c) $1.2\\text{ m s}^{-2}$",
            "feedback": "In part (b), you treated stage 3 as a triangle of height $6$ with area $\\frac{1}{2}(6)(14 - T)$, forgetting that it is a trapezium sitting on top of the ground axis."
        },
        {
            "ans": "(a) $3\\text{ m s}^{-2}$, (b) $11\\text{ s}$, (c) $-2\\text{ m s}^{-2}$",
            "feedback": "In part (c), deceleration is specifically requested. Deceleration is a scalar rate of slowing down and should be given as positive ($2\\text{ m s}^{-2}$) rather than negative."
        },
        {
            "ans": "(a) $4.8\\text{ m s}^{-2}$, (b) $11\\text{ s}$, (c) $2\\text{ m s}^{-2}$",
            "feedback": "In part (a), you multiplied velocity by time ($12 \\times 4$) rather than dividing velocity change by time."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Trapezium vs Triangle in Incomplete Decelerations",
        "content": "A very common error in multi-stage graphs is assuming every final stage drops to zero. Here, the particle decelerates from $12\\text{ m s}^{-1}$ to $6\\text{ m s}^{-1}$. This makes the third region a trapezium of parallel sides $12$ and $6$, with width $(14 - T)$. Using the triangle formula $\\frac{1}{2}bh$ here loses all subsequent marks."
    }
},
{
    "id": "012242",
    "group_id": "012241",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Kinematics",
    "subtopic": [
        "Velocity-Time Graphs",
        "Trapezoidal Profiles"
    ],
    "img": "images/Mechanics_pngs/012242.png",
    "question": "The diagram shows the velocity-time graph for a passenger train travelling along a straight horizontal track between two stations, $A$ and $B$.<br><br>The train starts from rest at station $A$ and accelerates uniformly for $20\\text{ seconds}$ until it reaches a speed of $V\\text{ m s}^{-1}$. It then maintains this constant cruising speed $V\\text{ m s}^{-1}$ for $50\\text{ seconds}$ before decelerating uniformly for $30\\text{ seconds}$, coming to rest at station $B$.<br><br>The total distance between station $A$ and station $B$ is $1800\\text{ m}$.<br><br><strong>(a)</strong> Calculate the value of $V$.<br><br><strong>(b)</strong> Calculate the acceleration of the train during the first $20\\text{ seconds}$.<br><br><strong>(c)</strong> Calculate the deceleration of the train during the final $30\\text{ seconds}$.",
    "steps": [
        "<strong>(a) Find cruising speed V from total area:</strong><br><br>The graph forms a trapezium with parallel horizontal sides of length $50\\text{ s}$ and $(20 + 50 + 30) = 100\\text{ s}$.<br><br>Using the area of a trapezium:\\begin{aligned} &\\text{Area} = \\dfrac{1}{2}(a + b)h \\cr &1800 = \\dfrac{1}{2}(50 + 100)V \\cr &1800 = 75V \\cr &V = \\dfrac{1800}{75} \\cr &V = 24\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(b) Calculate initial acceleration:</strong><br><br>Acceleration is the gradient of the graph during the first $20\\text{ seconds}$:\\begin{aligned} a &= \\dfrac{V - 0}{20} \\cr &= \\dfrac{24}{20} \\cr &= 1.2\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(c) Calculate final deceleration:</strong><br><br>Deceleration is the magnitude of the negative gradient during the final $30\\text{ seconds}$:\\begin{aligned} \\text{Deceleration} &= \\dfrac{V - 0}{30} \\cr &= \\dfrac{24}{30} \\cr &= 0.8\\text{ m s}^{-2} \\end{aligned}",
        "Final Answer: (a) $24\\text{ m s}^{-1}$, (b) $1.2\\text{ m s}^{-2}$, (c) $0.8\\text{ m s}^{-2}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $18\\text{ m s}^{-1}$, (b) $0.9\\text{ m s}^{-2}$, (c) $0.6\\text{ m s}^{-2}$",
            "feedback": "In part (a), you divided distance by total time ($1800/100 = 18$), calculating average speed rather than the maximum cruising speed $V$."
        },
        {
            "ans": "(a) $24\\text{ m s}^{-1}$, (b) $1.2\\text{ m s}^{-2}$, (c) $-0.8\\text{ m s}^{-2}$",
            "feedback": "In part (c), deceleration is asked for directly. Giving a negative value implies an acceleration of $-0.8\\text{ m s}^{-2}$, whereas deceleration is $0.8\\text{ m s}^{-2}$."
        },
        {
            "ans": "(a) $36\\text{ m s}^{-1}$, (b) $1.8\\text{ m s}^{-2}$, (c) $1.2\\text{ m s}^{-2}$",
            "feedback": "In part (a), you used only the cruising time of $50\\text{ s}$ as the base of the area, calculating $1800 = 50V$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: The Single Trapezium Method",
        "content": "Rather than splitting a standard journey into two triangles and a central rectangle, always treat it as a single trapezium: $\\text{Area} = \\frac{1}{2}(t_{\\text{cruise}} + t_{\\text{total}})V$. Here, $t_{\\text{cruise}} = 50$ and $t_{\\text{total}} = 100$, so $1800 = \\frac{1}{2}(150)V = 75V$, yielding $V = 24\\text{ m s}^{-1}$ in a single algebraic line."
    }
},
{
    "id": "012243",
    "group_id": "012241",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Kinematics",
    "subtopic": [
        "Velocity-Time Graphs",
        "Reversal of Motion"
    ],
    "img": "images/Mechanics_pngs/012243.png",
    "question": "The diagram shows the velocity-time graph for a particle moving along a straight horizontal line over a period of $14\\text{ seconds}$.<br><br>At time $t = 0\\text{ s}$, the particle has an initial velocity of $+12\\text{ m s}^{-1}$. It moves with constant acceleration, coming instantaneously to rest at $t = 6\\text{ s}$, and continues with the same constant acceleration until $t = 10\\text{ s}$, when its velocity is $-8\\text{ m s}^{-1}$.<br><br>From $t = 10\\text{ s}$ to $t = 14\\text{ s}$, the particle decelerates uniformly, coming to rest at $t = 14\\text{ s}$.<br><br><strong>(a)</strong> Find the acceleration of the particle during the first $10\\text{ seconds}$.<br><br><strong>(b)</strong> Calculate the displacement of the particle from its starting position at time $t = 14\\text{ s}$.<br><br><strong>(c)</strong> Calculate the total distance travelled by the particle during the entire $14\\text{ seconds}$.<br><br><strong>(d)</strong> State the greatest distance of the particle from its starting point during the motion.",
    "steps": [
        "<strong>(a) Find acceleration in first 10 s:</strong><br><br>The line is straight from $t = 0\\text{ s}$ to $t = 10\\text{ s}$. Using the gradient from $(0, 12)$ to $(6, 0)$:\\begin{aligned} a &= \\dfrac{0 - 12}{6 - 0} \\cr &= -2\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Calculate displacement at t = 14 s:</strong><br><br>Displacement is the net signed area between the curve and the time axis.<br><br>Area above axis ($0 \\le t \\le 6$):\\begin{aligned} A_1 &= \\dfrac{1}{2}(6)(12) \\cr &= 36\\text{ m} \\end{aligned}Area below axis ($6 \\le t \\le 10$):\\begin{aligned} A_2 &= \\dfrac{1}{2}(10 - 6)(-8) \\cr &= \\dfrac{1}{2}(4)(-8) \\cr &= -16\\text{ m} \\end{aligned}Area below axis ($10 \\le t \\le 14$):\\begin{aligned} A_3 &= \\dfrac{1}{2}(14 - 10)(-8) \\cr &= \\dfrac{1}{2}(4)(-8) \\cr &= -16\\text{ m} \\end{aligned}Net displacement:\\begin{aligned} s &= A_1 + A_2 + A_3 \\cr &= 36 - 16 - 16 \\cr &= 4\\text{ m} \\end{aligned}",
        "<strong>(c) Calculate total distance travelled:</strong><br><br>Distance is the sum of the absolute geometric areas:\\begin{aligned} d &= |A_1| + |A_2| + |A_3| \\cr &= 36 + 16 + 16 \\cr &= 68\\text{ m} \\end{aligned}",
        "<strong>(d) Determine greatest distance from start:</strong><br><br>The particle moves forward until $t = 6\\text{ s}$, reaching $s = 36\\text{ m}$. After $t = 6\\text{ s}$, velocity becomes negative, meaning the particle reverses and moves back towards the start.<br><br>Thus, the greatest distance from the start is $36\\text{ m}$.",
        "Final Answer: (a) $-2\\text{ m s}^{-2}$, (b) $4\\text{ m}$, (c) $68\\text{ m}$, (d) $36\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $-2\\text{ m s}^{-2}$, (b) $68\\text{ m}$, (c) $4\\text{ m}$, (d) $36\\text{ m}$",
            "feedback": "You swapped displacement and total distance: displacement accounts for direction (signed area), whereas distance is the total ground covered (absolute area)."
        },
        {
            "ans": "(a) $2\\text{ m s}^{-2}$, (b) $4\\text{ m}$, (c) $68\\text{ m}$, (d) $68\\text{ m}$",
            "feedback": "In part (a), the velocity is decreasing, so the acceleration is $-2\\text{ m s}^{-2}$. In part (d), the particle reverses at $36\\text{ m}$, so it never reaches a distance of $68\\text{ m}$ from its start."
        },
        {
            "ans": "(a) $-2\\text{ m s}^{-2}$, (b) $4\\text{ m}$, (c) $68\\text{ m}$, (d) $4\\text{ m}$",
            "feedback": "In part (d), you stated the final position at $t = 14\\text{ s}$ rather than the maximum displacement achieved during the journey (which occurred at $t = 6\\text{ s}$)."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Displacement vs Distance on Graphs",
        "content": "When a velocity-time graph crosses the time axis, direction of motion reverses. <em>Displacement</em> is the vector integral $\\int v\\text{ d}t$, which subtracts areas below the axis. <em>Distance</em> is the scalar path length $\\int |v|\\text{ d}t$, which sums all geometric areas as positive values."
    }
},
{
    "id": "012244",
    "group_id": "012241",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Kinematics",
    "subtopic": [
        "Velocity-Time Graphs",
        "Relative Pursuit"
    ],
    "img": "images/Mechanics_pngs/012244.png",
    "question": "The diagram shows the velocity-time graphs for a car and a police motorcycle travelling along a straight stretch of motorway.<br><br>At time $t = 0\\text{ s}$, the car passes a stationary police motorcycle at a constant speed of $24\\text{ m s}^{-1}$. The motorcycle remains stationary until $t = 2\\text{ s}$, at which point it accelerates uniformly at $3\\text{ m s}^{-2}$ until $t = 12\\text{ s}$, reaching a speed of $30\\text{ m s}^{-1}$.<br><br>The motorcycle then continues at this constant speed of $30\\text{ m s}^{-1}$ until it draws level with the car at time $t = T\\text{ s}$.<br><br><strong>(a)</strong> Find the distance travelled by the car during the time interval $0 \\le t \\le 12\\text{ s}$.<br><br><strong>(b)</strong> Find the distance travelled by the motorcycle during the time interval $0 \\le t \\le 12\\text{ s}$.<br><br><strong>(c)</strong> Form an equation in $T$, and hence determine the time $T$ at which the motorcycle draws level with the car.<br><br><strong>(d)</strong> Calculate the total distance travelled by the motorcycle from its starting position up to the moment it draws level with the car.",
    "steps": [
        "<strong>(a) Distance travelled by car in 12 s:</strong><br><br>The car moves at a constant speed of $24\\text{ m s}^{-1}$:\\begin{aligned} s_{\\text{car}} &= 24 \\times 12 \\cr &= 288\\text{ m} \\end{aligned}",
        "<strong>(b) Distance travelled by motorcycle in 12 s:</strong><br><br>The motorcycle is stationary from $t = 0$ to $t = 2\\text{ s}$, then accelerates from $t = 2$ to $t = 12\\text{ s}$ ($10\\text{ seconds}$ duration):\\begin{aligned} s_{\\text{moto}} &= \\dfrac{1}{2}(12 - 2)(30) \\cr &= \\dfrac{1}{2}(10)(30) \\cr &= 150\\text{ m} \\end{aligned}",
        "<strong>(c) Form equation in T and solve:</strong><br><br>At time $T$, the car has travelled:\\begin{aligned} s_{\\text{car}}(T) &= 24T \\end{aligned}The motorcycle travels $150\\text{ m}$ during acceleration, plus the distance cruised at $30\\text{ m s}^{-1}$ from $t = 12$ to $t = T$:\\begin{aligned} s_{\\text{moto}}(T) &= 150 + 30(T - 12) \\cr &= 150 + 30T - 360 \\cr &= (30T - 210)\\text{ m} \\end{aligned}Setting distances equal for overtaking:\\begin{aligned} &24T = 30T - 210 \\cr &6T = 210 \\cr &T = 35\\text{ s} \\end{aligned}",
        "<strong>(d) Calculate total distance at overtake:</strong><br><br>Using the car's distance at $T = 35\\text{ s}$:\\begin{aligned} s &= 24 \\times 35 \\cr &= 840\\text{ m} \\end{aligned}",
        "Final Answer: (a) $288\\text{ m}$, (b) $150\\text{ m}$, (c) $35\\text{ s}$, (d) $840\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $288\\text{ m}$, (b) $180\\text{ m}$, (c) $35\\text{ s}$, (d) $840\\text{ m}$",
            "feedback": "In part (b), you used a base of $12\\text{ s}$ instead of $(12 - 2) = 10\\text{ s}$ for the motorcycle's triangle, forgetting it was stationary for the first $2\\text{ seconds}$."
        },
        {
            "ans": "(a) $288\\text{ m}$, (b) $150\\text{ m}$, (c) $25\\text{ s}$, (d) $600\\text{ m}$",
            "feedback": "In part (c), you wrote the motorcycle's cruise time as $(T - 2)$ instead of $(T - 12)$, ignoring the $10\\text{ s}$ acceleration interval."
        },
        {
            "ans": "(a) $288\\text{ m}$, (b) $150\\text{ m}$, (c) $35\\text{ s}$, (d) $1050\\text{ m}$",
            "feedback": "In part (d), you evaluated $30 \\times 35$, forgetting that the motorcycle was not travelling at $30\\text{ m s}^{-1}$ for the first $12\\text{ seconds}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Shifted Bases in Multi-Body Graphs",
        "content": "When two vehicles appear on the same graph, track their time intervals carefully. The motorcycle's triangle has base $(12 - 2) = 10\\text{ s}$, and its subsequent rectangle has base $(T - 12)\\text{ s}$. Summing these segments avoids using shifted SUVAT time equations."
    }
},
{
    "id": "012245",
    "group_id": "012241",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Kinematics",
    "subtopic": [
        "Velocity-Time Graphs",
        "Vertical Motion"
    ],
    "img": "images/Mechanics_pngs/012245.png",
    "question": "The diagram shows the velocity-time graph for a lift ascending vertically from the ground floor to the observation deck of a tall building.<br><br>The lift starts from rest and accelerates uniformly at $1.5\\text{ m s}^{-2}$ for $4\\text{ seconds}$ to reach a cruising speed of $6\\text{ m s}^{-1}$. It then travels at this constant speed of $6\\text{ m s}^{-1}$ from $t = 4\\text{ s}$ to $t = t_1\\text{ s}$. Finally, it decelerates uniformly to rest at $2\\text{ m s}^{-2}$ between $t = t_1\\text{ s}$ and $t = t_2\\text{ s}$.<br><br>The total vertical distance ascended by the lift is $93\\text{ m}$.<br><br><strong>(a)</strong> Calculate the distance ascended by the lift during the first $4\\text{ seconds}$.<br><br><strong>(b)</strong> Find the time taken by the lift to decelerate to rest, and hence express $t_2$ in terms of $t_1$.<br><br><strong>(c)</strong> Find the value of $t_1$, and state the total time $t_2$ taken for the complete journey.<br><br><strong>(d)</strong> Calculate the average speed of the lift for the entire journey, giving your answer to 3 significant figures.",
    "steps": [
        "<strong>(a) Distance during acceleration stage:</strong><br><br>Using the triangular area under the graph for the first $4\\text{ seconds}$:\\begin{aligned} s_1 &= \\dfrac{1}{2}(4)(6) \\cr &= 12\\text{ m} \\end{aligned}",
        "<strong>(b) Deceleration time and expression for t₂:</strong><br><br>The lift decelerates from $6\\text{ m s}^{-1}$ to $0\\text{ m s}^{-1}$ at $2\\text{ m s}^{-2}$:\\begin{aligned} \\Delta t_{\\text{dec}} &= \\dfrac{v - 0}{a_{\\text{dec}}} \\cr &= \\dfrac{6}{2} \\cr &= 3\\text{ s} \\end{aligned}Because deceleration begins at $t_1$, the arrival time is:\\begin{aligned} t_2 &= t_1 + 3 \\end{aligned}",
        "<strong>(c) Calculate t₁ and t₂:</strong><br><br>Distance during the deceleration stage:\\begin{aligned} s_3 &= \\dfrac{1}{2}(3)(6) \\cr &= 9\\text{ m} \\end{aligned}Cruising distance during stage 2:\\begin{aligned} s_2 &= 93 - (s_1 + s_3) \\cr &= 93 - (12 + 9) \\cr &= 72\\text{ m} \\end{aligned}Duration of cruising at $6\\text{ m s}^{-1}$:\\begin{aligned} \\Delta t_{\\text{cruise}} &= \\dfrac{72}{6} \\cr &= 12\\text{ s} \\end{aligned}Thus:\\begin{aligned} t_1 &= 4 + 12 = 16\\text{ s} \\cr t_2 &= 16 + 3 = 19\\text{ s} \\end{aligned}",
        "<strong>(d) Calculate average speed:</strong><br><br>Using $\\text{Average speed} = \\dfrac{\\text{Total distance}}{\\text{Total time}}$:\\begin{aligned} \\text{Average speed} &= \\dfrac{93}{19} \\cr &\\approx 4.89\\text{ m s}^{-1} \\end{aligned}",
        "Final Answer: (a) $12\\text{ m}$, (b) $3\\text{ s}$, $t_2 = t_1 + 3$, (c) $t_1 = 16\\text{ s}$, $t_2 = 19\\text{ s}$, (d) $4.89\\text{ m s}^{-1}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $12\\text{ m}$, (b) $3\\text{ s}$, $t_2 = t_1 + 3$, (c) $t_1 = 12\\text{ s}$, $t_2 = 15\\text{ s}$, (d) $6.20\\text{ m s}^{-1}$",
            "feedback": "In part (c), you equated $t_1$ directly to the cruise duration ($12\\text{ s}$) without adding the initial $4\\text{ s}$ acceleration phase."
        },
        {
            "ans": "(a) $24\\text{ m}$, (b) $3\\text{ s}$, $t_2 = t_1 + 3$, (c) $t_1 = 16\\text{ s}$, $t_2 = 19\\text{ s}$, (d) $4.89\\text{ m s}^{-1}$",
            "feedback": "In part (a), you computed $4 \\times 6 = 24$ as a rectangle, forgetting the factor of $\\frac{1}{2}$ for the triangular acceleration stage."
        },
        {
            "ans": "(a) $12\\text{ m}$, (b) $3\\text{ s}$, $t_2 = t_1 + 3$, (c) $t_1 = 16\\text{ s}$, $t_2 = 19\\text{ s}$, (d) $5.81\\text{ m s}^{-1}$",
            "feedback": "In part (d), you divided total distance by $t_1 = 16\\text{ s}$ rather than the total journey duration $t_2 = 19\\text{ s}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Duration vs Time Coordinates",
        "content": "Always distinguish between a time <em>interval</em> (duration $\\Delta t$) and a time <em>coordinate</em> ($t$). The lift cruises for $\\Delta t = 12\\text{ s}$, so its coordinate is $t_1 = 4 + 12 = 16\\text{ s}$. It decelerates for $\\Delta t = 3\\text{ s}$, so its final arrival coordinate is $t_2 = 16 + 3 = 19\\text{ s}$."
    }
},
{
    "id": "012246",
    "group_id": "012246",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Dynamics",
    "topic": "Connected Particles",
    "subtopic": [
        "Pulleys",
        "Two-Stage Motion",
        "Modelling Assumptions"
    ],
    "img": "images/Mechanics_pngs/012246.png",
    "question": "The diagram shows a block $A$ of mass $3\\text{ kg}$ held at rest on a rough horizontal table at a distance of $2.0\\text{ m}$ from a small, smooth, light fixed pulley at the edge of the table.<br><br>Block $A$ is connected to a block $B$ of mass $2\\text{ kg}$ by a light, inextensible rope passing over the pulley. Block $B$ hangs vertically at a height of $1.5\\text{ m}$ above a horizontal floor.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br>Box $A$ is released from rest.<br><br><strong>(a)</strong> On a sketch of the diagram, show all the external forces acting on block $A$ and block $B$.<br><br><strong>(b)</strong> Given that block $B$ hits the floor with a speed of $2.1\\text{ m s}^{-1}$, find the value of the coefficient of friction $\\mu$ between block $A$ and the table, giving your answer as an exact fraction and to 3 significant figures.<br><br><strong>(c)</strong> When block $B$ hits the floor, it does not rebound and the rope becomes slack. Determine whether block $A$ will collide with the pulley.<br><br><strong>(d)</strong> State one modelling assumption you have made about the rope, and explain how this assumption has been used in your mathematical model.",
    "steps": [
        "<strong>(a) Complete the force diagram:</strong><br><br>The external forces acting on the two blocks are shown in the completed diagram below:<br><img src='images/Mechanics_pngs/012246_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br>For block $A$ on the table:<br>• Normal reaction $R$ vertically upwards<br>• Weight $3g$ vertically downwards<br>• Tension $T$ horizontally to the right<br>• Friction $F_r$ horizontally to the left<br><br>For hanging block $B$:<br>• Weight $2g$ vertically downwards<br>• Tension $T$ vertically upwards",
        "<strong>(b) Deduce acceleration and coefficient of friction μ:</strong><br><br>Using $v^2 = u^2 + 2as_1$ for block $B$ descending $1.5\\text{ m}$ from rest:\\begin{aligned} &2.1^2 = 0 + 2a(1.5) \\cr &4.41 = 3a \\cr &a = 1.47\\text{ m s}^{-2} \\end{aligned}For block $A$, vertical equilibrium gives $R = 3g = 29.4\\text{ N}$.<br><br>Since block $A$ accelerates, friction is limiting: $F_r = \\mu R = 29.4\\mu$.<br><br>Applying Newton's Second Law to the system:\\begin{aligned} &m_B g - F_r = (m_A + m_B)a \\cr &2(9.8) - 29.4\\mu = (3 + 2)(1.47) \\cr &19.6 - 29.4\\mu = 7.35 \\cr &29.4\\mu = 12.25 \\cr &\\mu = \\dfrac{12.25}{29.4} = \\dfrac{5}{12} \\cr &\\mu \\approx 0.417 \\end{aligned}",
        "<strong>(c) Determine whether block A collides with the pulley:</strong><br><br>When block $B$ hits the floor, block $A$ has moved $1.5\\text{ m}$. Its remaining distance to the pulley is:\\begin{aligned} d_{\\text{rem}} &= 2.0 - 1.5 \\cr &= 0.5\\text{ m} \\end{aligned}The rope becomes slack ($T = 0$). Only friction decelerates block $A$:\\begin{aligned} &-F_r = m_A a_2 \\cr &-29.4\\left(\\dfrac{5}{12}\\right) = 3a_2 \\cr &-12.25 = 3a_2 \\cr &a_2 = -4.0833\\text{ m s}^{-2} \\end{aligned}Using $v^2 = u_2^2 + 2a_2 s_2$ with $u_2 = 2.1\\text{ m s}^{-1}$ and $v = 0$:\\begin{aligned} &0 = 2.1^2 + 2(-4.0833)s_2 \\cr &0 = 4.41 - 8.1667s_2 \\cr &s_2 = \\dfrac{4.41}{8.1667} \\cr &s_2 = 0.54\\text{ m} \\end{aligned}Since the sliding distance $0.54\\text{ m} > 0.5\\text{ m}$ (total distance $2.04\\text{ m} > 2.0\\text{ m}$), block $A$ collides with the pulley.",
        "<strong>(d) Modelling assumption:</strong><br><br>Assuming the rope is <em>inextensible</em> means both blocks have the exact same magnitude of acceleration at any instant while the rope is taut.<br><br>(Alternatively: assuming the rope is <em>light</em> means its mass is negligible, so the tension $T$ is uniform throughout its length).",
        "Final Answer: (a) Diagram complete, (b) $\\mu = \\dfrac{5}{12} \\approx 0.417$, (c) Yes (slides $0.54\\text{ m} > 0.5\\text{ m}$), (d) Inextensible: common acceleration"
    ],
    "pi_options": [
        {
            "ans": "(a) Diagram complete, (b) $\\mu = 0.417$, (c) No (slides $0.54\\text{ m} < 2.0\\text{ m}$), (d) Inextensible: common acceleration",
            "feedback": "In part (c), you compared the secondary sliding distance $0.54\\text{ m}$ directly to the original $2.0\\text{ m}$ clearance, forgetting that block $A$ had already moved $1.5\\text{ m}$ before the rope went slack, leaving only $0.5\\text{ m}$ of clearance."
        },
        {
            "ans": "(a) Diagram complete, (b) $\\mu = 0.250$, (c) Yes (slides $0.54\\text{ m} > 0.5\\text{ m}$), (d) Inextensible: common acceleration",
            "feedback": "In part (b), you used the acceleration formula $a = v/t$ without knowing the time of flight, which distorted the calculated acceleration and value of $\\mu$."
        },
        {
            "ans": "(a) Diagram complete, (b) $\\mu = 0.417$, (c) Yes (slides $0.54\\text{ m} > 0.5\\text{ m}$), (d) Light: common acceleration",
            "feedback": "In part (d), you conflated the modelling terms: a *light* rope ensures uniform tension throughout its length; it is the *inextensible* property that enforces equal acceleration between the connected particles."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Tracking Remaining Clearance in Pulley Collisions",
        "content": "When answering boundary collision questions, never compare the secondary slide distance directly to the initial table distance! If block $B$ drops by $h = 1.5\\text{ m}$, block $A$ must also translate forward by $1.5\\text{ m}$ during the connected phase. The remaining safety buffer is therefore only $d_{\\text{rem}} = 2.0 - 1.5 = 0.5\\text{ m}$. Because $A$ requires $0.54\\text{ m}$ to come to rest under friction, collision is inevitable."
    }
},
{
    "id": "012247",
    "group_id": "012246",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Dynamics",
    "topic": "Connected Particles",
    "subtopic": [
        "Pulleys",
        "Two-Stage Motion",
        "Modelling Assumptions"
    ],
    "img": "images/Mechanics_pngs/012247.png",
    "question": "The diagram shows a block $A$ of mass $2\\text{ kg}$ held at rest on a rough horizontal table at a distance of $2.2\\text{ m}$ from a small, smooth pulley fixed at the edge of the table. Block $A$ is connected to a block $B$ of mass $3\\text{ kg}$ by a light, inextensible string passing over the pulley.<br><br>Block $B$ hangs vertically at a height of $1.0\\text{ m}$ above the floor. The coefficient of friction between block $A$ and the table is $\\mu = 0.25$.<br><br>The system is released from rest with the string taut. Block $B$ descends and strikes the floor without rebounding, causing the string to become slack.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Calculate the acceleration of the system while block $B$ is descending.<br><br><strong>(b)</strong> Find the speed of block $B$ at the instant it strikes the floor.<br><br><strong>(c)</strong> Determine whether block $A$ will reach the pulley before coming to rest.<br><br><strong>(d)</strong> State what effect taking into account the mass of the string would have on the acceleration of the system as block $B$ descends.",
    "steps": [
        "<strong>(a) Calculate acceleration of the system:</strong><br><br>Vertical equilibrium on block $A$ gives $R = 2g = 19.6\\text{ N}$.<br><br>Friction force on block $A$:\\begin{aligned} F_r &= \\mu R \\cr &= 0.25(19.6) \\cr &= 4.9\\text{ N} \\end{aligned}Applying Newton's Second Law to the system:\\begin{aligned} &m_B g - F_r = (m_A + m_B)a \\cr &3(9.8) - 4.9 = (2 + 3)a \\cr &29.4 - 4.9 = 5a \\cr &24.5 = 5a \\cr &a = 4.9\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Speed of B upon floor impact:</strong><br><br>Using $v^2 = u^2 + 2as_1$ with $u = 0$, $a = 4.9\\text{ m s}^{-2}$, and $s_1 = 1.0\\text{ m}$:\\begin{aligned} v^2 &= 0 + 2(4.9)(1.0) \\cr v^2 &= 9.8 \\cr v &= \\sqrt{9.8} \\cr &\\approx 3.13\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(c) Determine whether block A reaches the pulley:</strong><br><br>When block $B$ hits the floor, block $A$ has moved $1.0\\text{ m}$. Its remaining distance to the pulley is:\\begin{aligned} d_{\\text{rem}} &= 2.2 - 1.0 \\cr &= 1.2\\text{ m} \\end{aligned}The string is now slack ($T = 0$). Friction alone acts on block $A$:\\begin{aligned} &-F_r = m_A a_2 \\cr &-4.9 = 2a_2 \\cr &a_2 = -2.45\\text{ m s}^{-2} \\end{aligned}Distance $s_2$ for block $A$ to come to rest from $u_2^2 = 9.8$:\\begin{aligned} &v^2 = u_2^2 + 2a_2 s_2 \\cr &0 = 9.8 + 2(-2.45)s_2 \\cr &4.9s_2 = 9.8 \\cr &s_2 = 2.0\\text{ m} \\end{aligned}Since the sliding distance $2.0\\text{ m} > 1.2\\text{ m}$ (total distance $3.0\\text{ m} > 2.2\\text{ m}$), block $A$ will reach the pulley.",
        "<strong>(d) Effect of string mass:</strong><br><br>Accounting for the mass of the string would increase the total mass being accelerated by the system. Therefore, the overall acceleration of the system would decrease.",
        "Final Answer: (a) $4.9\\text{ m s}^{-2}$, (b) $3.13\\text{ m s}^{-1}$, (c) Yes (slides $2.0\\text{ m} > 1.2\\text{ m}$), (d) Acceleration would decrease"
    ],
    "pi_options": [
        {
            "ans": "(a) $4.9\\text{ m s}^{-2}$, (b) $3.13\\text{ m s}^{-1}$, (c) No (slides $2.0\\text{ m} < 2.2\\text{ m}$), (d) Acceleration would decrease",
            "feedback": "In part (c), you compared the secondary slide distance $2.0\\text{ m}$ to the initial distance $2.2\\text{ m}$, forgetting that block $A$ was already $1.0\\text{ m}$ closer to the pulley before the string went slack."
        },
        {
            "ans": "(a) $5.88\\text{ m s}^{-2}$, (b) $3.43\\text{ m s}^{-1}$, (c) Yes (slides $2.0\\text{ m} > 1.2\\text{ m}$), (d) Acceleration would decrease",
            "feedback": "In part (a), you neglected the friction force acting on block $A$, using $3g = 5a$."
        },
        {
            "ans": "(a) $4.9\\text{ m s}^{-2}$, (b) $3.13\\text{ m s}^{-1}$, (c) Yes (slides $2.0\\text{ m} > 1.2\\text{ m}$), (d) Acceleration would increase",
            "feedback": "In part (d), a heavier string increases the denominator (total mass) in $a = \\Sigma F / m_{\\text{total}}$, which reduces the system acceleration."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Modelling Changes in Light Strings",
        "content": "Questions asking for the qualitative effect of refining a model (AO3) are quick mark winners. A <em>light</em> string contributes zero mass. If string mass is considered, the driving gravitational force on block $B$ must accelerate extra mass ($m_A + m_B + m_{\\text{string}}$), which reduces acceleration. Always write out $a = \\frac{F_{\\text{net}}}{m_{\\text{total}}}$ to justify your conclusion."
    }
},
{
    "id": "012248",
    "group_id": "012246",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Dynamics",
    "topic": "Connected Particles",
    "subtopic": [
        "Pulleys",
        "Inclined Planes",
        "Modelling Assumptions"
    ],
    "img": "images/Mechanics_pngs/012248.png",
    "question": "The diagram shows a block $P$ of mass $6\\text{ kg}$ resting on a smooth plane inclined at an angle of $30^\\circ$ to the horizontal. Block $P$ is held at rest on the incline at a distance of $1.8\\text{ m}$ below a small, smooth pulley fixed at the apex of the plane.<br><br>Block $P$ is attached to one end of a light, inextensible string that lies parallel to a line of greatest slope of the plane. The other end of the string passes over the pulley and is attached to a vertically hanging block $Q$ of mass $4\\text{ kg}$.<br><br>The system is released from rest. Block $Q$ descends vertically through a distance of $0.9\\text{ m}$ before striking a horizontal buffer, which brings block $Q$ to rest instantaneously and leaves the string slack.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Calculate the acceleration of the blocks before block $Q$ hits the buffer.<br><br><strong>(b)</strong> Calculate the speed of block $Q$ at the instant it hits the buffer.<br><br><strong>(c)</strong> Determine whether block $P$ reaches the apex pulley before coming instantaneously to rest.<br><br><strong>(d)</strong> State one modelling assumption you have made about the pulley, and explain its physical consequence for the tension in the string.",
    "steps": [
        "<strong>(a) Calculate acceleration before impact:</strong><br><br>Component of weight of $P$ down the plane:\\begin{aligned} W_{P\\parallel} &= 6(9.8)\\sin 30^\\circ \\cr &= 29.4\\text{ N} \\end{aligned}Weight of block $Q$ downwards:\\begin{aligned} W_Q &= 4(9.8) \\cr &= 39.2\\text{ N} \\end{aligned}Since $39.2\\text{ N} > 29.4\\text{ N}$, block $Q$ accelerates downwards and block $P$ accelerates up the slope.\\begin{aligned} &W_Q - W_{P\\parallel} = (m_P + m_Q)a \\cr &39.2 - 29.4 = (6 + 4)a \\cr &9.8 = 10a \\cr &a = 0.98\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Speed of Q upon buffer impact:</strong><br><br>Using $v^2 = u^2 + 2as_1$ with $u = 0$, $a = 0.98\\text{ m s}^{-2}$, and $s_1 = 0.9\\text{ m}$:\\begin{aligned} v^2 &= 0 + 2(0.98)(0.9) \\cr v^2 &= 1.764 \\cr v &= \\sqrt{1.764} \\cr &\\approx 1.33\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(c) Determine whether block P reaches the apex pulley:</strong><br><br>When $Q$ hits the buffer, block $P$ has moved $0.9\\text{ m}$ up the slope. Its remaining distance to the pulley is:\\begin{aligned} d_{\\text{rem}} &= 1.8 - 0.9 \\cr &= 0.9\\text{ m} \\end{aligned}The string is now slack ($T = 0$). Only the component of gravity acts on $P$ down the slope:\\begin{aligned} &-m_P g\\sin 30^\\circ = m_P a_2 \\cr &a_2 = -g\\sin 30^\\circ \\cr &a_2 = -4.9\\text{ m s}^{-2} \\end{aligned}Distance $s_2$ for block $P$ to come to rest from $u_2^2 = 1.764$:\\begin{aligned} &v^2 = u_2^2 + 2a_2 s_2 \\cr &0 = 1.764 + 2(-4.9)s_2 \\cr &9.8s_2 = 1.764 \\cr &s_2 = 0.18\\text{ m} \\end{aligned}Since $0.18\\text{ m} < 0.9\\text{ m}$ (total distance $1.08\\text{ m} < 1.8\\text{ m}$), block $P$ does not reach the apex pulley.",
        "<strong>(d) Modelling assumption for pulley:</strong><br><br>Assuming the pulley is <em>smooth</em> means there is no frictional resistance between the pulley and the string. As a result, the tension $T$ in the string is identical on both sides of the pulley.",
        "Final Answer: (a) $0.98\\text{ m s}^{-2}$, (b) $1.33\\text{ m s}^{-1}$, (c) No (slides $0.18\\text{ m} < 0.9\\text{ m}$), (d) Smooth: equal tension on both sides"
    ],
    "pi_options": [
        {
            "ans": "(a) $0.98\\text{ m s}^{-2}$, (b) $1.33\\text{ m s}^{-1}$, (c) Yes (slides $1.08\\text{ m} > 0.9\\text{ m}$), (d) Smooth: equal tension on both sides",
            "feedback": "In part (c), you compared the total distance travelled by block $P$ ($1.08\\text{ m}$) to the remaining distance ($0.9\\text{ m}$) rather than comparing the secondary sliding distance $0.18\\text{ m}$ to the $0.9\\text{ m}$ clearance."
        },
        {
            "ans": "(a) $1.96\\text{ m s}^{-2}$, (b) $1.88\\text{ m s}^{-1}$, (c) No (slides $0.18\\text{ m} < 0.9\\text{ m}$), (d) Smooth: equal tension on both sides",
            "feedback": "In part (a), you used $6g\\cos 30^\\circ$ instead of $6g\\sin 30^\\circ$ when resolving the weight of block $P$ along the line of greatest slope."
        },
        {
            "ans": "(a) $0.98\\text{ m s}^{-2}$, (b) $1.33\\text{ m s}^{-1}$, (c) No (slides $0.18\\text{ m} < 0.9\\text{ m}$), (d) Light: equal tension on both sides",
            "feedback": "In part (d), equal tension across a pulley is guaranteed by the pulley being *smooth* (frictionless), whereas a *light* string guarantees uniform tension along a single straight section."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Smooth Pulleys vs Light Strings",
        "content": "Examiners are rigorous regarding modelling terms. A <em>smooth</em> pulley ensures the tension is transmitted without loss, meaning $T$ is the same on both sides. A <em>light</em> string ensures the mass of the string does not cause tension to vary along its length. Mixing these definitions up costs easy AO3 marks."
    }
},
{
    "id": "012249",
    "group_id": "012246",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Dynamics",
    "topic": "Connected Particles",
    "subtopic": [
        "Atwood Machine",
        "Projectile Motion",
        "Modelling Assumptions"
    ],
    "img": "images/Mechanics_pngs/012249.png",
    "question": "The diagram shows two particles, $A$ and $B$, of masses $3\\text{ kg}$ and $5\\text{ kg}$ respectively, connected by a light, inextensible string of length $4\\text{ m}$ that passes over a small, smooth, fixed pulley.<br><br>Initially, the particles hang vertically at the same horizontal level, with particle $B$ held at a height of $1.6\\text{ m}$ above a horizontal floor. The system is released from rest. Particle $B$ strikes the floor and does not rebound, leaving the string slack.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Calculate the acceleration of the particles while both are in motion.<br><br><strong>(b)</strong> Find the speed with which particle $B$ strikes the floor.<br><br><strong>(c)</strong> Calculate the greatest height reached by particle $A$ above its initial starting position.<br><br><strong>(d)</strong> State how you have used the assumption that the string is inextensible in your calculations for part <strong>(a)</strong>.",
    "steps": [
        "<strong>(a) Calculate acceleration of the particles:</strong><br><br>Since $m_B > m_A$, particle $B$ accelerates downwards and particle $A$ accelerates upwards.<br><br>Applying Newton's Second Law to the system:\\begin{aligned} &m_B g - m_A g = (m_A + m_B)a \\cr &5(9.8) - 3(9.8) = (3 + 5)a \\cr &49 - 29.4 = 8a \\cr &19.6 = 8a \\cr &a = 2.45\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Speed of B at floor impact:</strong><br><br>Using $v^2 = u^2 + 2as_1$ with $u = 0$, $a = 2.45\\text{ m s}^{-2}$, and $s_1 = 1.6\\text{ m}$:\\begin{aligned} v^2 &= 0 + 2(2.45)(1.6) \\cr v^2 &= 7.84 \\cr v &= \\sqrt{7.84} \\cr &= 2.8\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(c) Greatest height reached by particle A:</strong><br><br>During the connected phase, particle $A$ ascends $1.6\\text{ m}$ and reaches an upward speed of $2.8\\text{ m s}^{-1}$.<br><br>When $B$ hits the floor, the string goes slack. Particle $A$ moves freely under gravity ($a_2 = -9.8\\text{ m s}^{-2}$) until coming instantaneously to rest ($v = 0$):\\begin{aligned} &v^2 = u_2^2 + 2a_2 s_{\\text{proj}} \\cr &0 = 2.8^2 + 2(-9.8)s_{\\text{proj}} \\cr &0 = 7.84 - 19.6s_{\\text{proj}} \\cr &19.6s_{\\text{proj}} = 7.84 \\cr &s_{\\text{proj}} = 0.4\\text{ m} \\end{aligned}The greatest height reached by particle $A$ above its initial level is:\\begin{aligned} h_{\\text{total}} &= s_1 + s_{\\text{proj}} \\cr &= 1.6 + 0.4 \\cr &= 2.0\\text{ m} \\end{aligned}",
        "<strong>(d) Use of inextensibility assumption:</strong><br><br>Assuming the string is inextensible ensures that both particles have the same magnitude of acceleration ($a = 2.45\\text{ m s}^{-2}$) and move through identical vertical distances at every instant while the string is taut.",
        "Final Answer: (a) $2.45\\text{ m s}^{-2}$, (b) $2.8\\text{ m s}^{-1}$, (c) $2.0\\text{ m}$, (d) Inextensible: identical acceleration magnitudes"
    ],
    "pi_options": [
        {
            "ans": "(a) $2.45\\text{ m s}^{-2}$, (b) $2.8\\text{ m s}^{-1}$, (c) $0.4\\text{ m}$, (d) Inextensible: identical acceleration magnitudes",
            "feedback": "In part (c), you calculated only the free-projectile rise $s_{\\text{proj}} = 0.4\\text{ m}$, forgetting to add the initial ascent of $1.6\\text{ m}$ completed while the string was taut."
        },
        {
            "ans": "(a) $4.90\\text{ m s}^{-2}$, (b) $3.96\\text{ m s}^{-1}$, (c) $2.4\\text{ m}$, (d) Inextensible: identical acceleration magnitudes",
            "feedback": "In part (a), you divided the driving force ($19.6\\text{ N}$) by the mass difference ($2\\text{ kg}$) rather than the total system mass ($8\\text{ kg}$)."
        },
        {
            "ans": "(a) $2.45\\text{ m s}^{-2}$, (b) $2.8\\text{ m s}^{-1}$, (c) $2.0\\text{ m}$, (d) Light: identical acceleration magnitudes",
            "feedback": "In part (d), identical acceleration is the direct physical consequence of the string being *inextensible*, not because it is light."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: The Two-Stage Atwood Ascent",
        "content": "In Atwood machine questions with ground impact, always divide particle $A$'s motion into two stages: (1) an accelerated ascent of $1.6\\text{ m}$ under net string tension, followed by (2) an upward free-flight projectile phase under gravity alone ($a = -g$). The total height above the start is always \\begin{aligned}h &= s_1 + \\frac{v^2}{2g}\\cr & = 1.6 + 0.4 \\cr &= 2.0\\text{ m}\\end{aligned}"
    }
},
{
    "id": "012250",
    "group_id": "012246",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Dynamics",
    "topic": "Connected Particles",
    "subtopic": [
        "Pulleys",
        "Resultant Force on Peg",
        "Two-Stage Motion"
    ],
    "img": "images/Mechanics_pngs/012250.png",
    "question": "The diagram shows a block $A$ of mass $4\\text{ kg}$ held at rest on a rough horizontal table at a distance of $3.2\\text{ m}$ from a small, smooth pulley fixed at the edge of the table. Block $A$ is connected to a hanging block $B$ of mass $6\\text{ kg}$ by a light, inextensible string passing over the pulley.<br><br>Block $B$ is released from rest at a height of $1.5\\text{ m}$ above the floor. It is observed that block $B$ hits the floor with a speed of $3.6\\text{ m s}^{-1}$.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Calculate the acceleration of the system while block $B$ is descending.<br><br><strong>(b)</strong> Find the coefficient of friction $\\mu$ between block $A$ and the table, giving your answer to 3 significant figures.<br><br><strong>(c)</strong> Calculate the magnitude and direction of the resultant force exerted by the string on the pulley while the blocks are moving.<br><br><strong>(d)</strong> When block $B$ hits the floor, the string becomes slack. Determine whether block $A$ will collide with the pulley.",
    "steps": [
        "<strong>(a) Calculate acceleration of the system:</strong><br><br>Using $v^2 = u^2 + 2as_1$ for block $B$ descending $1.5\\text{ m}$ from rest:\\begin{aligned} &3.6^2 = 0 + 2a(1.5) \\cr &12.96 = 3a \\cr &a = 4.32\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Find coefficient of friction μ:</strong><br><br>Vertical equilibrium on block $A$ gives $R = 4g = 39.2\\text{ N}$. Friction is $F_r = \\mu R = 39.2\\mu$.<br><br>Applying Newton's Second Law to the system:\\begin{aligned} &m_B g - F_r = (m_A + m_B)a \\cr &6(9.8) - 39.2\\mu = (4 + 6)(4.32) \\cr &58.8 - 39.2\\mu = 43.2 \\cr &39.2\\mu = 15.6 \\cr &\\mu = \\dfrac{15.6}{39.2} \\cr &\\mu \\approx 0.398 \\end{aligned}",
        "<strong>(c) Force exerted by string on the pulley:</strong><br><br>Calculate tension $T$ using block $B$:\\begin{aligned} &m_B g - T = m_B a \\cr &58.8 - T = 6(4.32) \\cr &58.8 - T = 25.92 \\cr &T = 32.88\\text{ N} \\end{aligned}The string exerts two perpendicular forces of magnitude $T$ on the pulley (one horizontally to the left, one vertically downwards):\\begin{aligned} R_{\\text{pulley}} &= \\sqrt{T^2 + T^2} \\cr &= T\\sqrt{2} \\cr &= 32.88\\sqrt{2} \\cr &\\approx 46.5\\text{ N} \\end{aligned}Direction: acts along the angle bisector, $45^\\circ$ below the horizontal table.",
        "<strong>(d) Determine whether block A collides with the pulley:</strong><br><br>When $B$ hits the floor, block $A$ has moved $1.5\\text{ m}$. Remaining distance to the pulley:\\begin{aligned} d_{\\text{rem}} &= 3.2 - 1.5 \\cr &= 1.7\\text{ m} \\end{aligned}The string is now slack ($T = 0$). Deceleration of block $A$ under friction:\\begin{aligned} &-F_r = m_A a_2 \\cr &-15.6 = 4a_2 \\cr &a_2 = -3.9\\text{ m s}^{-2} \\end{aligned}Stopping distance $s_2$ from $u_2 = 3.6\\text{ m s}^{-1}$:\\begin{aligned} &v^2 = u_2^2 + 2a_2 s_2 \\cr &0 = 3.6^2 + 2(-3.9)s_2 \\cr &0 = 12.96 - 7.8s_2 \\cr &7.8s_2 = 12.96 \\cr &s_2 = \\dfrac{12.96}{7.8} \\cr &s_2 \\approx 1.66\\text{ m} \\end{aligned}Since $1.66\\text{ m} < 1.7\\text{ m}$ (total distance $3.16\\text{ m} < 3.2\\text{ m}$), block $A$ stops $0.04\\text{ m}$ before the pulley and does not collide.",
        "Final Answer: (a) $4.32\\text{ m s}^{-2}$, (b) $\\mu \\approx 0.398$, (c) $46.5\\text{ N}$ at $45^\\circ$ below horizontal, (d) No (slides $1.66\\text{ m} < 1.7\\text{ m}$)"
    ],
    "pi_options": [
        {
            "ans": "(a) $4.32\\text{ m s}^{-2}$, (b) $\\mu \\approx 0.398$, (c) $65.8\\text{ N}$ at $45^\\circ$ below horizontal, (d) No (slides $1.66\\text{ m} < 1.7\\text{ m}$)",
            "feedback": "In part (c), you added the perpendicular tension forces scalar-wise ($2T = 65.8\\text{ N}$) rather than combining them as orthogonal vectors ($T\\sqrt{2}$)."
        },
        {
            "ans": "(a) $4.32\\text{ m s}^{-2}$, (b) $\\mu \\approx 0.398$, (c) $46.5\\text{ N}$ at $45^\\circ$ below horizontal, (d) Yes (slides $3.16\\text{ m} > 1.7\\text{ m}$)",
            "feedback": "In part (d), you compared the total distance travelled ($3.16\\text{ m}$) directly to the remaining clearance ($1.7\\text{ m}$) rather than comparing the secondary sliding distance ($1.66\\text{ m}$)."
        },
        {
            "ans": "(a) $4.32\\text{ m s}^{-2}$, (b) $\\mu \\approx 0.255$, (c) $46.5\\text{ N}$ at $45^\\circ$ below horizontal, (d) No (slides $1.66\\text{ m} < 1.7\\text{ m}$)",
            "feedback": "In part (b), an algebraic error occurred when isolating $\\mu$: you subtracted $43.2$ from $58.8$ incorrectly or used the wrong normal reaction."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Close-Margin Collision Checks",
        "content": "Notice how narrow the margin is in part (d): block $A$ stops after sliding $1.66\\text{ m}$, just $4\\text{ cm}$ short of the $1.7\\text{ m}$ clearance! In such close-margin exam questions, avoiding premature rounding in your intermediate values of acceleration and friction is vital to reaching the correct conclusion."
    }
}
];