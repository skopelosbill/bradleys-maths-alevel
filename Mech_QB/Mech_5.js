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
            "feedback": "Check your moment equation: $17 + 4(2.5 - d) = 18 \\implies 4(2.5 - d) = 1$, giving $2.5 - d = 0.25 \\implies d = 2.25\\text{ m}$."
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
}
];