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
},
{
    "id": "012206",
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
        "<strong>(c) Calculate $T_{\\min}$:</strong><br><br>When $\\beta = 31.0^\\circ$, the denominator evaluates to $\\sqrt{1 + \\mu^2} = \\sqrt{1 + 0.6^2} = \\sqrt{1.36} \\approx 1.1662$:\\begin{aligned} T_{\\min} &= \\dfrac{20(9.8)(\\sin 25^\\circ + 0.6\\cos 25^\\circ)}{\\sqrt{1.36}} \\cr &= \\dfrac{196(0.42262 + 0.54378)}{1.1662} \\cr &= \\dfrac{196(0.9664)}{1.1662} \\cr &\\approx 162\\text{ N} \\end{aligned}",
        "Final Answer: (a) $T = \\dfrac{mg(\\sin 25^\\circ + \\mu\\cos 25^\\circ)}{\\cos\\beta + \\mu\\sin\\beta}$, (b) $\\beta = 31.0^\\circ$, (c) $T_{\\min} = 162\\text{ N}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $T = \\dfrac{mg(\\sin 25^\\circ + \\mu\\cos 25^\\circ)}{\\cos\\beta + \\mu\\sin\\beta}$, (b) $\\beta = 0.0^\\circ$, (c) $T_{\\min} = 189\\text{ N}$",
            "feedback": "Pulling parallel to the plane ($\\\\beta = 0^\\\\circ$) does not minimise $T$. Pulling slightly upward lifts the object and reduces friction, achieving a lower minimum force of $162\\text{ N}$."
        },
        {
            "ans": "(a) $T = \\dfrac{mg(\\sin 25^\\circ + \\mu\\cos 25^\\circ)}{\\cos\\beta + \\mu\\sin\\beta}$, (b) $\\beta = 25.0^\\circ$, (c) $T_{\\min} = 162\\text{ N}$",
            "feedback": "The optimal pulling angle equals the angle of friction $\\\\lambda = \\\\arctan(\\\\mu) \\\\approx 31.0^\\\\circ$, which is independent of the slope angle of $25^\\\\circ$."
        },
        {
            "ans": "(a) $T = \\dfrac{mg(\\sin 25^\\circ + \\mu\\cos 25^\\circ)}{\\cos\\beta + \\mu\\sin\\beta}$, (b) $\\beta = 31.0^\\circ$, (c) $T_{\\min} = 189\\text{ N}$",
            "feedback": "Remember that at the minimum force, the maximum value of the denominator is $\\\\sqrt{1 + \\\\mu^2} \\\\approx 1.166$, rather than $1$."
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
        "<strong>(c) Condition for downward motion:</strong><br><br>For downward motion to occur, the component of force pulling down the slope must exceed maximum friction:\\begin{aligned} &F\\cos 30^\\circ + mg\\sin 20^\\circ > \\mu R \\cr &F\\cos 30^\\circ + 25g\\sin 20^\\circ \\cr &\\quad > 0.45(25g\\cos 20^\\circ + F\\sin 30^\\circ) \\cr &0.8660F + 83.794 > 103.60 + 0.2250F \\cr &0.6410F > 19.806 \\cr &F > \\dfrac{19.806}{0.6410} \\cr &F > 30.9\\text{ N} \\end{aligned}<br>Because the net driving coefficient ($0.6410$) is positive, increasing $F$ increases the driving force faster than friction. Thus, motion is possible and the minimum force is $30.9\\text{ N}$.",
        "Final Answer: (a) $R = 25g\\cos 20^\\circ + F\\sin 30^\\circ$, (b) Increases $R$ hence increases $\\mu R$, (c) Yes, $F_{\\min} = 30.9\\text{ N}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $R = 25g\\cos 20^\\circ + F\\sin 30^\\circ$, (b) Increases $R$ hence increases $\\mu R$, (c) No, friction always exceeds driving force",
            "feedback": "Because $\\\\cos 30^\\\\circ > \\\\mu\\\\sin 30^\\\\circ$ ($0.866 > 0.225$), the driving component grows faster than friction as $F$ increases. Motion is initiated once $F > 30.9\\text{ N}$."
        },
        {
            "ans": "(a) $R = 25g\\cos 20^\\circ + F\\sin 30^\\circ$, (b) Increases $R$ hence increases $\\mu R$, (c) Yes, $F_{\\min} = 22.9\\text{ N}$",
            "feedback": "Remember to include the $+F\\\\sin 30^\\\\circ$ term when calculating normal reaction. Omitting it underestimates the required pushing force."
        },
        {
            "ans": "(a) $R = 25g\\cos 20^\\circ + F\\sin 30^\\circ$, (b) Increases $R$ hence increases $\\mu R$, (c) Yes, $F_{\\min} = 45.2\\text{ N}$",
            "feedback": "Check the friction equation: $0.6410F > 19.806 \\implies F > 19.806 / 0.6410 \\approx 30.9\\text{ N}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Self-Locking Conditions",
        "content": "A pushing force can only cause motion if its component along the slope exceeds the friction it creates: $F\\cos\\theta > \\mu F\\sin\\theta \\implies \\tan\\theta < \\frac{1}{\\mu}$. Here, $\\tan 30^\\circ \\approx 0.577$ and $\\frac{1}{0.45} \\approx 2.22$, so pushing harder does indeed initiate motion."
    }
}
];