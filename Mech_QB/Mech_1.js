window.ALEVEL_QUESTIONS = [
{
    "id": "012001",
    "board": "AQA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Kinematics",
    "subtopic": [
        "Constant Acceleration",
        "1D Motion"
    ],
    "img": false,
    "question": "A toy train moves along a straight horizontal track. It starts from rest and reaches a speed of $4.5\\text{ cm s}^{-1}$ after $1.5\\text{ seconds}$ of constant acceleration.<br><br>Find the acceleration of the toy train in $\\text{m s}^{-2}$.",
    "steps": [
        "First, identify the initial parameters given in the question. The toy train starts from rest, which means its initial velocity is $u = 0\\text{ m s}^{ -1 }$. The time taken is $t = 1.5\\text{ s}$.",
        "The final velocity is given in centimetres per second ($4.5\\text{ cm s}^{ -1 }$). Before calculating the acceleration in $\\text{m s}^{ -2 }$, we must convert this velocity into metres per second ($\\text{m s}^{ -1 }$) by dividing by $100$:<br><br>$$v = \\dfrac{ 4.5 }{ 100 } = 0.045\\text{ m s}^{ -1 }$$",
        "Next, recall the constant acceleration formula that connects $u$, $v$, $a$, and $t$:<br><br>$$v = u + at$$",
        "Substitute the values $u = 0$, $v = 0.045$, and $t = 1.5$ into the formula and solve for $a$:<br><br>\\begin{aligned} 0.045 &= 0 + a(1.5) \\cr 0.045 &= 1.5a \\cr a &= \\dfrac{ 0.045 }{ 1.5 } \\cr a &= 0.03\\text{ m s}^{ -2 } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$3.0\\text{ m s}^{ -2 }$$",
            "feedback": "This error occurs if you do not convert the units of the final speed from $\\text{cm s}^{ -1 }$ to $\\text{m s}^{ -1 }$. Always convert your units to standard SI units before applying kinematic equations."
        },
        {
            "ans": "$$0.3\\text{ m s}^{ -2 }$$",
            "feedback": "This represents a unit conversion error where you divided the velocity by $10$ instead of $100$. Remember that there are $100\\text{ cm}$ in $1\\text{ metre}$."
        },
        {
            "ans": "$$0.003\\text{ m s}^{ -2 }$$",
            "feedback": "This error arises from dividing the velocity by $1000$ instead of $100$ during unit conversion. Ensure you check the conversion factor between centimetres and metres."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Unit Conversion Trap",
        "content": "A classic unit conversion trap. Always convert speed to SI units ($\\text{metres}$ and $\\text{seconds}$) before calculating acceleration, otherwise your final answer will be out by a factor of $100$."
    }
},
{
    "id": "012002",
    "board": "AQA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Kinematics",
    "subtopic": [
        "Constant Acceleration",
        "1D Motion"
    ],
    "img": false,
    "question": "An insect crawls along a straight line on a wall. It accelerates at a constant rate from an initial speed of $15\\text{ mm s}^{-1}$ to a final speed of $45\\text{ mm s}^{-1}$ in a time interval of $2.5\\text{ seconds}$.<br><br>Find the acceleration of the insect in $\\text{m s}^{-2}$.",
    "steps": [
        "Identify the given parameters from the problem: the initial velocity $u = 15\\text{ mm s}^{ -1 }$, the final velocity $v = 45\\text{ mm s}^{ -1 }$, and the time interval $t = 2.5\\text{ s}$.",
        "Convert the velocities from millimetres per second ($\\text{mm s}^{ -1 }$) to the SI unit of metres per second ($\\text{m s}^{ -1 }$) by dividing by $1000$:<br><br>\\begin{aligned} u &= \\dfrac{ 15 }{ 1000 } = 0.015\\text{ m s}^{ -1 } \\cr v &= \\dfrac{ 45 }{ 1000 } = 0.045\\text{ m s}^{ -1 } \\end{aligned}",
        "Recall the constant acceleration formula linking $u$, $v$, $t$, and $a$:<br><br>$$v = u + at$$",
        "Substitute the converted values into the formula and solve for $a$:<br><br>\\begin{aligned} 0.045 &= 0.015 + a(2.5) \\cr 0.045 - 0.015 &= 2.5a \\cr 0.030 &= 2.5a \\cr a &= \\dfrac{ 0.030 }{ 2.5 } \\cr a &= 0.012\\text{ m s}^{ -2 } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$12\\text{ m s}^{ -2 }$$",
            "feedback": "This error occurs if you completely omit the unit conversion from $\\text{mm s}^{ -1 }$ to $\\text{m s}^{ -1 }$. Always ensure all quantities are in SI units before calculation."
        },
        {
            "ans": "$$0.12\\text{ m s}^{ -2 }$$",
            "feedback": "This indicates a unit conversion error where you divided by $100$ instead of $1000$. Remember that there are $1000\\text{ mm}$ in $1\\text{ metre}$."
        },
        {
            "ans": "$$0.024\\text{ m s}^{ -2 }$$",
            "feedback": "This is a calculation slip, likely caused by using an incorrect formula or making an algebraic error when dividing."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Convert First, Calculate Later",
        "content": "To prevent fractional/decimal slips during algebraic manipulation, convert all quantities to standard SI units ($1\\text{ mm} = 0.001\\text{ m}$) at the very start of the problem."
    }
},
{
    "id": "012003",
    "board": "AQA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Kinematics",
    "subtopic": [
        "Constant Acceleration",
        "Multi-Stage Motion"
    ],
    "img": false,
    "question": "A model car travels in a straight line. It is initially moving at a constant speed of $24\\text{ cm s}^{-1}$ for $3\\text{ seconds}$. The brakes are then applied, and the car decelerates uniformly to rest over a distance of $0.36\\text{ metres}$.<br><br>Find the total time, in seconds, from the start of the motion until the car comes to rest.",
    "steps": [
        "Divide the motion into two distinct stages: the constant speed stage and the deceleration stage.",
        "For Stage 1 (constant speed), the car travels at a speed of $24\\text{ cm s}^{ -1 }$ for a duration of $t_1 = 3\\text{ s}$. Since this duration is given, we do not need to calculate the distance of this stage to find the time, but we note $t_1 = 3\\text{ s}$.",
        "For Stage 2 (deceleration stage), identify the parameters in SI units:<br>Initial velocity of this stage is the speed of the car when the brakes were applied, so $u = 24\\text{ cm s}^{ -1 } = 0.24\\text{ m s}^{ -1 }$.<br>The car comes to rest, so the final velocity $v = 0\\text{ m s}^{ -1 }$.<br>The deceleration distance is $s = 0.36\\text{ m}$.",
        "To find the deceleration time ($t_2$), we use the constant acceleration kinematic formula:<br><br>$$s = \\left( \\dfrac{ u + v }{ 2 } \\right) t_2$$",
        "Substitute the known values and solve for $t_2$:<br><br>\\begin{aligned} 0.36 &= \\left( \\dfrac{ 0.24 + 0 }{ 2 } \\right) t_2 \\cr 0.36 &= 0.12t_2 \\cr t_2 &= \\dfrac{ 0.36 }{ 0.12 } \\cr t_2 &= 3\\text{ s} \\end{aligned}",
        "Calculate the total time, $T$, by adding the times of both stages:<br><br>\\begin{aligned} T &= t_1 + t_2 \\cr T &= 3 + 3 \\cr T &= 6.0\\text{ s} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$4.5\\text{ seconds}$$",
            "feedback": "This occurs if you fail to convert $24\\text{ cm s}^{ -1 }$ to $0.24\\text{ m s}^{ -1 }$, which leads to an incorrect deceleration time of $1.5\\text{ s}$ instead of $3\\text{ s}$."
        },
        {
            "ans": "$$9.0\\text{ seconds}$$",
            "feedback": "This is a calculation slip where you might have doubled the deceleration time or added incorrect stage values."
        },
        {
            "ans": "$$3.15\\text{ seconds}$$",
            "feedback": "This error occurs if you do not convert the units and use the incorrect value of $24$ for $u$, giving $t_2 = 0.15\\text{ s}$, which when added to $3\\text{ s}$ yields $3.15\\text{ s}$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Don't Lose a Phase",
        "content": "Students frequently focus entirely on the deceleration stage and forget to add the initial constant velocity stage. Always read the question carefully and break multi-stage motion down into clearly labeled phases."
    }
},
{
    "id": "012004",
    "board": "AQA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Kinematics",
    "subtopic": [
        "Constant Acceleration",
        "1D Motion"
    ],
    "img": false,
    "question": "A small ball is projected vertically upwards from a point $H$ metres above horizontal ground with an initial speed of $14.7\\text{ m s}^{-1}$. It takes $4\\text{ seconds}$ to reach the ground.<br><br>Taking $g = 9.8\\text{ m s}^{-2}$ and modelling the ball as a particle, find the value of $H$.",
    "steps": [
        "Let upwards be the positive direction. Identify and write down the given kinematic parameters:<br>Initial velocity $u = 14.7\\text{ m s}^{ -1 }$ (positive as it is projected upwards).<br>Acceleration $a = -g = -9.8\\text{ m s}^{ -2 }$ (negative as gravity acts downwards).<br>Time taken to reach the ground $t = 4\\text{ s}$.",
        "We want to find the vertical displacement $s$ from the point of projection to the ground. Use the kinematic equation that relates $u$, $a$, $t$, and $s$:<br><br>$$s = ut + \\dfrac{ 1 }{ 2 } at^2$$",
        "Substitute the known values into the equation:<br><br>\\begin{aligned} s &= (14.7)(4) + \\dfrac{ 1 }{ 2 }(-9.8)(4^2) \\cr s &= 58.8 - 4.9(16) \\cr s &= 58.8 - 78.4 \\cr s &= -19.6\\text{ m} \\end{aligned}",
        "The vertical displacement is $-19.6\\text{ m}$, which means the ground is $19.6\\text{ m}$ below the point of projection. Since $H$ is a physical distance above the ground, it must be positive:<br><br>$$H = 19.6$$"
    ],
    "pi_options": [
        {
            "ans": "$$39.2$$",
            "feedback": "This error occurs if you use an incorrect value for acceleration or make a calculation mistake in the second term of the kinematic equation."
        },
        {
            "ans": "$$78.4$$",
            "feedback": "This represents a slip where you only calculated the displacement due to gravity ($4.9 \\times 16 = 78.4$) while completely ignoring the initial upward velocity term $ut$."
        },
        {
            "ans": "$$14.7$$",
            "feedback": "This is a distractor matching the initial projection velocity. Ensure you complete the displacement calculation rather than selecting one of the initial parameters."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Deciphering Negative Displacement",
        "content": "A negative displacement ($s = -19.6\\text{ m}$) is a completely correct mathematical outcome! It simply indicates that the final position (the ground) lies below the reference starting point. Since $H$ represents a distance, we take the magnitude of this displacement: $H = |s| = 19.6$."
    }
},
{
    "id": "012005",
    "board": "AQA",
    "level": "A",
    "major_area": "Mechanics",
    "topic": "Kinematics",
    "subtopic": [
        "Variable Acceleration",
        "Calculus"
    ],
    "img": false,
    "question": "A particle moves along a straight line such that its velocity, $v\\text{ m s}^{-1}$, at time $t\\text{ seconds}$ is given by $v = \\dfrac{3}{2}t^2 - 4t + 2$, for $t \\ge 0$.<br><br>Find the magnitude of the acceleration of the particle, in $\\text{m s}^{-2}$, at the instant when the particle is first instantaneously at rest.",
    "steps": [
        "To find when the particle is instantaneously at rest, set the velocity function to zero ($v = 0$):<br><br>$$\\dfrac{ 3 }{ 2 } t^2 - 4t + 2 = 0$$",
        "Multiply the entire equation by $2$ to clear the fraction, and solve the quadratic equation:<br><br>\\begin{aligned} 3t^2 - 8t + 4 &= 0 \\cr (3t - 2)(t - 2) &= 0 \\end{aligned}<br>This yields two solutions: $t = \\dfrac{ 2 }{ 3 }\\text{ s}$ and $t = 2\\text{ s}$.",
        "The question asks for the acceleration at the instant when the particle is <strong>first</strong> instantaneously at rest, so we select the smaller positive value of time:<br><br>$$t = \\dfrac{ 2 }{ 3 }\\text{ s}$$",
        "Next, find the acceleration function $a(t)$ by differentiating the velocity function $v(t)$ with respect to $t$:<br><br>\\begin{aligned} a &= \\dfrac{ \\mathrm{d}v }{ \\mathrm{d}t } \\cr a &= \\dfrac{ \\mathrm{d} }{ \\mathrm{d}t } \\left( \\dfrac{ 3 }{ 2 } t^2 - 4t + 2 \\right) \\cr a &= 3t - 4 \\end{aligned}",
        "Substitute $t = \\dfrac{ 2 }{ 3 }$ into the acceleration function:<br><br>\\begin{aligned} a &= 3\\left( \\dfrac{ 2 }{ 3 } \\right) - 4 \\cr a &= 2 - 4 \\cr a &= -2\\text{ m s}^{ -2 } \\end{aligned}",
        "The magnitude of a vector quantity is its absolute (positive) value. Therefore, the magnitude of the acceleration is:<br><br>$$|a| = 2\\text{ m s}^{ -2 }$$"
    ],
    "pi_options": [
        {
            "ans": "$$4\\text{ m s}^{ -2 }$$",
            "feedback": "This error occurs if you use the second rest time $t = 2\\text{ s}$ instead of the first ($t = \\dfrac{ 2 }{ 3 }\\text{ s}$)."
        },
        {
            "ans": "$$0\\text{ m s}^{ -2 }$$",
            "feedback": "This is a conceptual mistake confusing 'instantaneously at rest' ($v=0$) with 'minimum velocity' or 'zero acceleration'."
        },
        {
            "ans": "$$1\\text{ m s}^{ -2 }$$",
            "feedback": "This is a calculation slip, likely from an error in differentiating or substituting $t = \\dfrac{ 2 }{ 3 }$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Acceleration vs. Velocity",
        "content": "Do not confuse 'instantaneously at rest' with 'zero acceleration'. A particle can be stationary ($v = 0$) while still accelerating ($a \\neq 0$), which is exactly what happens when it changes direction."
    }
},
{
    "id": "012006",
    "board": "AQA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Moments",
    "subtopic": [
        "Static Equilibrium",
        "Levers"
    ],
    "img": "images/Mechanics_pngs/012006.png",
    "question": "A uniform rod, $AB$, has a length of $6\\text{ metres}$. The rod is resting in horizontal equilibrium on a support at its midpoint, $C$. A particle of mass $5\\text{ kg}$ is placed $0.8\\text{ metres}$ to the left of $C$. Another particle of mass $2\\text{ kg}$ is placed $y\\text{ metres}$ to the right of $C$, as shown in the diagram.<br><br>Find the value of $y$.",
    "steps": [
        "First, identify the pivot of the system. The rod is supported at its midpoint, $C$. We take moments about $C$ to eliminate the reaction force from our moments equation.",
        "Identify the anticlockwise moments about $C$. The only force acting on the left of $C$ is the weight of the $5\\text{ kg}$ mass, which acts at a distance of $0.8\\text{ m}$:<br><br>$$\\text{Anticlockwise Moment} = 5g \\times 0.8 = 4g\\text{ N m}$$",
        "Identify the clockwise moments about $C$. The only force acting on the right of $C$ is the weight of the $2\\text{ kg}$ mass, acting at a distance of $y\\text{ metres}$:<br><br>$$\\text{Clockwise Moment} = 2g \\times y = 2gy\\text{ N m}$$",
        "Since the rod is uniform and supported at its midpoint, its own weight acts directly through the pivot $C$, meaning it creates zero moment. For the system to remain in static equilibrium, equate the clockwise and anticlockwise moments:<br><br>\\begin{aligned} 4g &= 2gy \\cr 4 &= 2y \\cr y &= \\dfrac{ 4 }{ 2 } \\cr y &= 2 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$1.6$$",
            "feedback": "This error occurs if you mix up the mass or distance values from the balance formula, such as dividing by $2.5$ instead of $2$. Always ensure you pair each force with its correct distance from the pivot."
        },
        {
            "ans": "$$2.4$$",
            "feedback": "This represents an algebraic rearrangement slip. Make sure you divide the anticlockwise moment of $4g$ by the mass coefficient of $2g$, rather than multiplying them."
        },
        {
            "ans": "$$1.5$$",
            "feedback": "This is a calculation slip, likely from using an incorrect pivot distance or making an arithmetic mistake during division."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Pivot at the Midpoint",
        "content": "Because the rod is uniform, its centre of mass lies exactly at its midpoint $C$. When the pivot is placed at the midpoint, the rod's own weight ($W$) acts directly through the pivot. Since its distance from the pivot is $0$, its moment is $W \\times 0 = 0$, simplifying the calculation to a simple two-body balance!"
    }
},
{
    "id": "012007",
    "board": "AQA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Moments",
    "subtopic": [
        "Static Equilibrium",
        "Uniform Rods"
    ],
    "img": "images/Mechanics_pngs/012007.png",
    "question": "A uniform rod $AB$ of mass $4\\text{ kg}$ and length $6\\text{ metres}$ is resting horizontally on a support at a point $C$, where $AC = 2\\text{ metres}$. A particle of mass $6\\text{ kg}$ is attached to the rod at $A$, and another particle of mass $M\\text{ kg}$ is attached to the rod at $B$, as shown in the diagram. The rod is balanced in equilibrium.<br><br>Find the value of $M$.",
    "steps": [
        "Identify the pivot point at $C$ and calculate the distances of all forces from this pivot. Since $AC = 2\\text{ m}$ on a $6\\text{ m}$ rod, the distance from $C$ to $B$ is:<br><br>$$6 - 2 = 4\\text{ metres}$$",
        "The rod is uniform, so its weight of $4g\\text{ Newtons}$ acts at its midpoint (which is $3\\text{ m}$ from $A$). The distance from the pivot $C$ to this midpoint is:<br><br>$$3 - 2 = 1\\text{ metre (to the right of } C)$$",
        "Calculate the total anticlockwise moment about $C$, which is created solely by the $6\\text{ kg}$ mass at $A$ (at a distance of $2\\text{ m}$):<br><br>$$\\text{Anticlockwise Moment} = 6g \\times 2 = 12g\\text{ N m}$$",
        "Calculate the total clockwise moments about $C$. Both the weight of the rod ($4g$ acting $1\\text{ m}$ to the right) and the mass at $B$ ($Mg$ acting $4\\text{ m}$ to the right) create clockwise moments:<br><br>$$\\text{Clockwise Moment} = (4g \\times 1) + (Mg \\times 4) = 4g + 4Mg\\text{ N m}$$",
        "For the rod to remain in horizontal equilibrium, the sum of anticlockwise moments must equal the sum of clockwise moments about the pivot $C$. Equate and solve for $M$:<br><br>\\begin{aligned} 12g &= 4g + 4Mg \\cr 12 &= 4 + 4M \\cr 8 &= 4M \\cr M &= \\dfrac{ 8 }{ 4 } \\cr M &= 2 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$3.0$$",
            "feedback": "This error occurs if you completely omit the weight of the rod from your clockwise moments. Because the pivot $C$ is not at the midpoint of the rod, the rod's own weight creates an active clockwise moment that must be included."
        },
        {
            "ans": "$$2.5$$",
            "feedback": "This represents a coordinate mistake where you might have placed the rod's centre of mass at $3\\text{ m}$ from the pivot $C$ instead of $3\\text{ m}$ from end $A$. Always sketch the distances clearly from the pivot point."
        },
        {
            "ans": "$$1.5$$",
            "feedback": "This is a calculation slip, likely caused by making an arithmetic error when rearranging the moments balance equation before dividing."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Don't Forget the Rod's Weight",
        "content": "Always check if the pivot is at the midpoint of the rod. If it is not, the rod's own weight must be included as an active force in your moments equation, acting vertically downwards through its centre of mass (the midpoint for a uniform rod)."
    }
},
{
    "id": "012008",
    "board": "AQA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Moments",
    "subtopic": [
        "Static Equilibrium",
        "Levers"
    ],
    "img": "images/Mechanics_pngs/012008.png",
    "question": "A see-saw consists of a uniform plank $AB$ of length $4\\text{ metres}$ pivot-supported at its midpoint, $C$. A child of mass $32\\text{ kg}$ sits at end $A$, and a second child of mass $40\\text{ kg}$ sits at a distance of $d$ metres from $C$ on the other side of the pivot, as shown in the diagram. The see-saw is balanced horizontally in equilibrium.<br><br>Find the value of $d$.",
    "steps": [
        "Identify the pivot at the midpoint $C$. Since the plank is uniform and pivoted at the center, its weight acts through $C$ and contributes zero moment. Since the plank has a total length of $4\\text{ m}$, the distance from $C$ to end $A$ is $2\\text{ m}$.",
        "Calculate the anticlockwise moment about $C$ due to the $32\\text{ kg}$ child sitting at $A$:<br><br>$$\\text{Anticlockwise Moment} = 32g \\times 2 = 64g\\text{ N m}$$",
        "Calculate the clockwise moment about $C$ due to the $40\\text{ kg}$ child sitting at distance $d$:<br><br>$$\\text{Clockwise Moment} = 40g \\times d = 40gd\\text{ N m}$$",
        "Set the clockwise and anticlockwise moments equal to maintain static equilibrium and solve for $d$:<br><br>\\begin{aligned} 64g &= 40gd \\cr 64 &= 40d \\cr d &= \\dfrac{ 64 }{ 40 } \\cr d &= 1.6 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$1.28$$",
            "feedback": "This error arises from a transposition slip during division, such as dividing the mass of the second child ($40$) by the moment ($64$). Ensure you rearrange the equation carefully."
        },
        {
            "ans": "$$1.5$$",
            "feedback": "This is a general calculation slip. Double-check your division when simplifying the fraction $\\dfrac{ 64 }{ 40 }$."
        },
        {
            "ans": "$$1.8$$",
            "feedback": "This represents an arithmetic slip. Make sure you do not make division errors when converting the fraction into a decimal."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Measure From the Pivot",
        "content": "Always ensure that the distances ($d$) used in moments calculations are measured directly from the pivot point itself, rather than from the ends of the beam or see-saw, unless specifically guided otherwise."
    }
},
{
    "id": "012009",
    "board": "AQA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Moments",
    "subtopic": [
        "Static Equilibrium",
        "Non-Midpoint Supports"
    ],
    "img": "images/Mechanics_pngs/012009.png",
    "question": "A uniform plank $AB$ of length $6\\text{ metres}$ and mass $15\\text{ kg}$ is resting horizontally in equilibrium on two supports at $C$ and $D$, where $AC = 1\\text{ metre}$ and $BD = 1\\text{ metre}$. A person of mass $75\\text{ kg}$ stands on the plank at a distance of $y$ metres from $A$, as shown in the diagram.<br><br>Given that the reaction force at support $C$ is twice the magnitude of the reaction force at support $D$, find the value of $y$.",
    "steps": [
        "First, establish vertical equilibrium by equating the total upward reaction forces to the total downward weight forces:<br><br>$$R_C + R_D = (15 + 75)g = 90g\\text{ N}$$",
        "Use the given relationship $R_C = 2R_D$ to solve for the individual support reaction forces:<br><br>\\begin{aligned} 2R_D + R_D &= 90g \\cr 3R_D &= 90g \\cr R_D &= 30g\\text{ N} \\cr R_C &= 60g\\text{ N} \\end{aligned}",
        "Next, take moments about point $A$. The clockwise moments are produced by the weight of the uniform plank (acting at its midpoint, $3\\text{ m}$ from $A$) and the person's weight (acting at distance $y$ from $A$):<br><br>$$\\text{Clockwise Moment} = (15g \\times 3) + (75g \\times y) = 45g + 75gy\\text{ N m}$$",
        "The anticlockwise moments about $A$ are produced by the upward reactions at support $C$ ($1\\text{ m}$ from $A$) and support $D$ ($5\\text{ m}$ from $A$, since $BD = 1\\text{ m}$):<br><br>$$\\text{Anticlockwise Moment} = (R_C \\times 1) + (R_D \\times 5) = 60g(1) + 30g(5) = 210g\\text{ N m}$$",
        "Equate the clockwise and anticlockwise moments about $A$ to solve for $y$:<br><br>\\begin{aligned} 45g + 75gy &= 210g \\cr 45 + 75y &= 210 \\cr 75y &= 165 \\cr y &= \\dfrac{ 165 }{ 75 } \\cr y &= 2.2 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$2.4$$",
            "feedback": "This error occurs if you make an arithmetic slip when subtracting the plank's moment, or if you divide $180$ by $75$ instead of $165$. Always double-check your subtraction before dividing."
        },
        {
            "ans": "$$2.5$$",
            "feedback": "This represents a coordinate slip, likely caused by measuring the support distances incorrectly (such as treating $D$ as being $6\\text{ m}$ from $A$ instead of $5\\text{ m}$)."
        },
        {
            "ans": "$$1.8$$",
            "feedback": "This indicates a conceptual error, likely from applying the reaction force ratio backwards (setting $R_D = 2R_C$ instead of $R_C = 2R_D$)."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Upward Forces First",
        "content": "When a problem features two unknown support reactions but gives a ratio between them, resolve vertical translation equilibrium ($F_{\\text{up}} = F_{\\text{down}}$) first. Finding the individual reactions at the start makes your moments equation simple and clean to solve."
    }
},
{
    "id": "012010",
    "board": "AQA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Moments",
    "subtopic": [
        "Static Equilibrium",
        "Non-Uniform Rods"
    ],
    "img": "images/Mechanics_pngs/012010.png",
    "question": "A non-uniform rod $AB$ has a length of $4\\text{ metres}$ and mass $10\\text{ kg}$. The rod is resting horizontally in equilibrium on two supports at $C$ and $D$, where $AC = 1\\text{ metre}$ and $BD = 1\\text{ metre}$. The reaction force at support $C$ has magnitude $6g\\text{ Newtons}$ and the reaction force at support $D$ has magnitude $4g\\text{ Newtons}$, where $g$ is the acceleration due to gravity.<br><br>Find the distance, $\\bar{x}$, of the centre of mass of the rod, $G$, from $A$, as shown in the diagram.",
    "steps": [
        "First, verify vertical translational equilibrium to ensure our values are consistent. The total upward reaction force is $R_C + R_D = 6g + 4g = 10g\\text{ N}$, which matches the downward weight of the $10\\text{ kg}$ rod ($10g\\text{ N}$) exactly.",
        "Identify the positions of the supports from $A$:<br>Support $C$ is at distance $1\\text{ m}$ from $A$.<br>Support $D$ is at distance $3\\text{ m}$ from $A$ (calculated as total length $4\\text{ m}$ minus $BD = 1\\text{ m}$)." ,
        "Take moments about $A$. The clockwise moment is created by the weight of the rod ($10g\\text{ N}$) acting through its centre of mass $G$ at a distance of $\\bar{x}$:<br><br>$$\\text{Clockwise Moment} = 10g \\times \\bar{x}\\text{ N m}$$",
        "The anticlockwise moments about $A$ are created by the upward reaction forces at $C$ and $D$:<br><br>$$\\text{Anticlockwise Moment} = (R_C \\times 1) + (R_D \\times 3) = 6g(1) + 4g(3) = 18g\\text{ N m}$$",
        "Equate the clockwise and anticlockwise moments and solve for $\\bar{x}$:<br><br>\\begin{aligned} 10g\\bar{x} &= 18g \\cr 10\\bar{x} &= 18 \\cr \\bar{x} &= \\dfrac{ 18 }{ 10 } \\cr \\bar{x} &= 1.8 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$2.2$$",
            "feedback": "This is a calculation slip, likely from applying the reaction values backwards or making a transposition error when adding the moments, which incorrectly places the centre of mass past the midpoint."
        },
        {
            "ans": "$$2.0$$",
            "feedback": "This is a conceptual error where you assumed the rod was uniform. Because the rod is non-uniform, its centre of mass does not lie at the geometric midpoint ($2\\text{ m}$)."
        },
        {
            "ans": "$$1.6$$",
            "feedback": "This represents an arithmetic error when evaluating the anticlockwise moment sum of $6g(1) + 4g(3)$. Ensure you multiply each reaction force by its proper distance from $A$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Non-Uniform Centre of Mass",
        "content": "For a non-uniform rod, the centre of mass is not at the geometric midpoint. We model the entire weight of the rod as acting through a single point $G$ at distance $\\bar{x}$. Since the support reaction at $C$ ($6g$) is larger than at $D$ ($4g$), the centre of mass must lie closer to $C$ ($1\\text{ m}$) than to $D$ ($3\\text{ m}$), making $\\bar{x} = 1.8$ mathematically and physically consistent!"
    }
},
{
    "id": "012011",
    "board": "AQA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Kinematics",
    "subtopic": [
        "Velocity-Time Graphs",
        "1D Motion"
    ],
    "img": "images/Mechanics_pngs/012011.png",
    "question": "The graph shows the velocity of an object moving in a straight line over a $19\\text{-second}$ journey.<br><br><strong>(a)</strong> Find the maximum magnitude of the acceleration of the object.<br><br><strong>(b)</strong> The object is at its starting position at times $0$, $t_1$, and $t_2$ seconds. Find $t_1$ and $t_2$.",
    "steps": [
        "Recall that acceleration is represented by the gradient (slope) of each straight-line section of a velocity-time graph ($a = \\dfrac{ \\Delta v }{ \\Delta t }$). Calculate the acceleration of each of the six stages:<br><br>\\begin{aligned} \\text{Segment 1 } (0 \\le t \\le 3):& \\quad a = \\dfrac{ -2 - 0 }{ 3 - 0 } = -0.67\\text{ m s}^{ -2 } \\cr \\text{Segment 2 } (3 \\le t \\le 5):& \\quad a = \\dfrac{ 2 - (-2) }{ 5 - 3 } = 2\\text{ m s}^{ -2 } \\cr \\text{Segment 3 } (5 \\le t \\le 10):& \\quad a = 0\\text{ m s}^{ -2 } \\cr \\text{Segment 4 } (10 \\le t \\le 12):& \\quad a = \\dfrac{ -4 - 2 }{ 12 - 10 } = -3\\text{ m s}^{ -2 } \\cr \\text{Segment 5 } (12 \\le t \\le 15):& \\quad a = 0\\text{ m s}^{ -2 } \\cr \\text{Segment 6 } (15 \\le t \\le 19):& \\quad a = \\dfrac{ 0 - (-4) }{ 19 - 15 } = 1\\text{ m s}^{ -2 } \\end{aligned}",
        "Identify the steepest slope by taking the absolute value (magnitude) of each gradient. The steepest section is Segment 4 (between $t = 10$ and $t = 12$) with a slope of $-3$. Thus, the maximum magnitude of acceleration is:<br><br>$$a_{\\text{max}} = 3\\text{ m s}^{ -2 }$$",
        "For part <strong>(b)</strong>, being at the starting position means that the net displacement $s$ is zero. On a velocity-time graph, displacement is the signed area under the graph, treating areas above the time axis as positive and areas below as negative.",
        "Calculate the displacement up to the first crossing point in Segment 2. By looking at the graph, the line crosses the axis at $t = 4$. The negative area under the axis consists of a triangle from $0$ to $3$ and a triangle from $3$ to $4$:<br><br>$$\\text{Area}_{ \\text{below} } = \\dfrac{ 1 }{ 2 }(3)(-2) + \\dfrac{ 1 }{ 2 }(1)(-2) = -4\\text{ m}$$",
        "As the object moves from $t = 4$ to $t = 5$, it travels in the positive direction. The positive area is a triangle of base $1$ and height $2$:<br><br>$$\\text{Area}_{ \\text{above} } = \\dfrac{ 1 }{ 2 }(1)(2) = 1\\text{ m}$$<br>At $t = 5$, the displacement is $s(5) = -4 + 1 = -3\\text{ m}$.",
        "During Segment 3 ($5 \\le t \\le 10$), the velocity is constant at $2\\text{ m s}^{-1}$. The displacement $s(t)$ increases linearly. Set the displacement equation to zero to find the first return time, $t_1$:<br><br>\\begin{aligned} s(t_1) = -3 + 2(t_1 - 5) &= 0 \\cr 2(t_1 - 5) &= 3 \\cr t_1 - 5 &= 1.5 \\cr t_1 &= 6.5\\text{ s} \\end{aligned}",
        "At $t = 10$, the displacement is $s(10) = -3 + 2(10 - 5) = 7\\text{ m}$. In Segment 4 ($10 \\le t \\le 12$), the line crosses the axis at $t = 10.67$. The positive area from $10$ to $10.67$ is:<br><br>$$\\text{Area}_{ \\text{above} } = \\dfrac{ 1 }{ 2 }\\left( \\dfrac{ 2 }{ 3 } \\right)(2) = \\dfrac{ 2 }{ 3 }\\text{ m}$$<br>The negative area from $10.67$ to $12$ is:<br><br>$$\\text{Area}_{ \\text{below} } = \\dfrac{ 1 }{ 2 }\\left( \\dfrac{ 4 }{ 3 } \\right)(-4) = -\\dfrac{ 8 }{ 3 }\\text{ m}$$<br>Thus, the displacement at $t = 12$ is $s(12) = 7 + \\dfrac{ 2 }{ 3 } - \\dfrac{ 8 }{ 3 } = 5\\text{ m}$.",
        "During Segment 5 ($12 \\le t \\le 15$), the velocity is constant at $-4\\text{ m s}^{-1}$. Set the displacement equation to zero in this interval to find the second return time, $t_2$:<br><br>\\begin{aligned} s(t_2) = 5 - 4(t_2 - 12) &= 0 \\cr 4(t_2 - 12) &= 5 \\cr t_2 - 12 &= 1.25 \\cr t_2 &= 13.25\\text{ s} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$a_{\\text{max}} = 2\\text{ m s}^{ -2 }; \\quad t_1 = 6.5\\text{ s}, \\ t_2 = 13.25\\text{ s}$$",
            "feedback": "This error occurs if you selected Segment 2 as the steepest part of the graph. Segment 4 actually has a steeper gradient of magnitude $3$, even though it is in the negative direction."
        },
        {
            "ans": "$$a_{\\text{max}} = 3\\text{ m s}^{ -2 }; \\quad t_1 = 5.5\\text{ s}, \\ t_2 = 12.25\\text{ s}$$",
            "feedback": "This error represents a mistake in calculating the initial negative displacement under the time axis, which shifts both crossover times by an incorrect offset."
        },
        {
            "ans": "$$a_{\\text{max}} = 3\\text{ m s}^{ -2 }; \\quad t_1 = 6.5\\text{ s}, \\ t_2 = 14.5\\text{ s}$$",
            "feedback": "This represents a calculation slip when working out the displacement at $t = 12$, leading to an incorrect duration in the subsequent constant-velocity phase."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Absolute Area vs. Signed Area",
        "content": "To find when an object is back at its starting position, you are looking for zero displacement. This means the area above the time axis (representing forward motion) must exactly balance the area below the time axis (representing backward motion). Always treat the area under the axis as negative!"
    }
},
{
    "id": "012012",
    "board": "AQA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Kinematics",
    "subtopic": [
        "Velocity-Time Graphs",
        "1D Motion"
    ],
    "img": "images/Mechanics_pngs/012012.png",
    "question": "A particle starts from rest and accelerates uniformly for $8\\text{ seconds}$ to a maximum velocity of $V\\text{ m s}^{-1}$. It then travels at this constant velocity for a further $15\\text{ seconds}$ before decelerating uniformly to rest in another $12\\text{ seconds}$. The total distance travelled by the particle is $300\\text{ metres}$.<br><br><strong>(a)</strong> Find the value of $V$.<br><br><strong>(b)</strong> Find the magnitude of the deceleration, in $\\text{m s}^{-2}$, during the final stage of the motion.",
    "steps": [
        "Sketching the motion on a velocity-time graph reveals a trapezium. The area of the trapezium represents the total distance travelled ($300\\text{ m}$).",
        "Identify the dimensions of the trapezium:<br>The top parallel side (constant velocity phase) is $a = 15\\text{ s}$.<br>The bottom parallel side (total journey time) is $b = 8 + 15 + 12 = 35\\text{ s}$.<br>The height of the trapezium is $V$.",
        "Use the trapezium area formula to solve for $V$:<br><br>\\begin{aligned} \\text{Area} &= \\left( \\dfrac{ a + b }{ 2 } \\right) h \\cr 300 &= \\left( \\dfrac{ 15 + 35 }{ 2 } \\right) V \\cr 300 &= 25V \\cr V &= \\dfrac{ 300 }{ 25 } \\cr V &= 12 \\end{aligned}",
        "For part <strong>(b)</strong>, find the deceleration during the final stage. The particle decelerates from $u = 12\\text{ m s}^{-1}$ to $v = 0\\text{ m s}^{-1}$ over a time interval of $t = 12\\text{ seconds}$:<br><br>\\begin{aligned} a &= \\dfrac{ v - u }{ t } \\cr a &= \\dfrac{ 0 - 12 }{ 12 } \\cr a &= -1\\text{ m s}^{ -2 } \\end{aligned}",
        "The magnitude of the deceleration is the positive value of this acceleration, which is $1\\text{ m s}^{-2}$ (or $1$)."
    ],
    "pi_options": [
        {
            "ans": "$$V = 10; \\quad \\text{deceleration} = 0.833\\text{ m s}^{ -2 }$$",
            "feedback": "This error occurs if you made a transposition slip in setting up the parallel sides of the trapezium, such as treating the bottom base as $30\\text{ s}$ instead of $35\\text{ s}$."
        },
        {
            "ans": "$$V = 12; \\quad \\text{deceleration} = 1.2\\text{ m s}^{ -2 }$$",
            "feedback": "This represents a calculation slip where you divided the maximum velocity $V$ by $10$ instead of the deceleration stage duration of $12$ seconds."
        },
        {
            "ans": "$$V = 15; \\quad \\text{deceleration} = 1\\text{ m s}^{ -2 }$$",
            "feedback": "This is a calculation slip when rearranging the trapezium area equation to find $V$ in the first step."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: The Power of Trapeziums",
        "content": "Using the single trapezium area formula $\\text{Area} = \\dfrac{ a + b }{ 2 } h$ is far faster and less error-prone than breaking the motion down into three separate phases using SUVAT. Look for geometric short-cuts whenever possible!"
    }
},
{
    "id": "012013",
    "board": "AQA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Kinematics",
    "subtopic": [
        "Velocity-Time Graphs",
        "Direction Reversal"
    ],
    "img": "images/Mechanics_pngs/012013.png",
    "question": "The velocity-time graph shows the motion of a particle travelling along a straight line over a $25\\text{-second}$ journey.<br><br><strong>(a)</strong> Find the total distance travelled by the particle.<br><br><strong>(b)</strong> Find the average velocity of the particle over the entire $25\\text{-second}$ journey.",
    "steps": [
        "Recall that total distance is the sum of the absolute (positive) areas between the velocity-time curve and the time axis, whereas displacement is the signed (resultant) area.",
        "Calculate the area of the forward motion phase (above the time axis, $0 \\le t \\le 17.5$):<br>Triangle ($0$ to $5$): $\\dfrac{ 1 }{ 2 } \\times 5 \\times 10 = 25\\text{ m}$<br>Rectangle ($5$ to $15$): $10 \\times 10 = 100\\text{ m}$<br>Triangle ($15$ to $17.5$): $\\dfrac{ 1 }{ 2 } \\times 2.5 \\times 10 = 12.5\\text{ m}$<br><br>$$\\text{Area}_{ \\text{above} } = 25 + 100 + 12.5 = 137.5\\text{ m}$$",
        "Calculate the area of the backward motion phase (below the time axis, $17.5 \\le t \\le 25$):<br>Triangle ($17.5$ to $20$): $\\dfrac{ 1 }{ 2 } \\times 2.5 \\times 10 = 12.5\\text{ m}$<br>Triangle ($20$ to $25$): $\\dfrac{ 1 }{ 2 } \\times 5 \\times 10 = 25\\text{ m}$<br><br>$$\\text{Area}_{ \\text{below} } = 12.5 + 25 = 37.5\\text{ m}$$",
        "For part <strong>(a)</strong>, find the total distance by summing the magnitudes of both motion phases:<br><br>\\begin{aligned} \\text{Total Distance} &= \\text{Area}_{ \\text{above} } + \\text{Area}_{ \\text{below} } \\cr &= 137.5 + 37.5 \\cr &= 175\\text{ m} \\end{aligned}",
        "For part <strong>(b)</strong>, recall that average velocity is defined as total displacement divided by total time. Calculate the net displacement:<br><br>$$\\text{Displacement} = 137.5 - 37.5 = 100\\text{ m}$$",
        "Divide the net displacement by the total journey time of $25\\text{ seconds}$:<br><br>\\begin{aligned} \\text{Average Velocity} &= \\dfrac{ 100 }{ 25 } \\cr &= 4\\text{ m s}^{ -1 } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$\\text{Distance} = 100\\text{ m}; \\quad \\text{Average Velocity} = 4\\text{ m s}^{ -1 }$$",
            "feedback": "This error occurs if you confused total distance with displacement in part (a). Distance must sum all areas as positive values."
        },
        {
            "ans": "$$\\text{Distance} = 175\\text{ m}; \\quad \\text{Average Velocity} = 7\\text{ m s}^{ -1 }$$",
            "feedback": "This represents a conceptual mistake where you divided total distance by time to calculate average velocity (which actually yields average speed, not average velocity)."
        },
        {
            "ans": "$$\\text{Distance} = 137.5\\text{ m}; \\quad \\text{Average Velocity} = 5.5\\text{ m s}^{ -1 }$$",
            "feedback": "This error occurs if you completely ignored the backward motion phase of the journey below the time axis."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Average Velocity vs. Average Speed",
        "content": "An important exam distinction! Average Speed is calculated using Total Distance, whereas Average Velocity uses Net Displacement. Ensure you distinguish between these scalar and vector definitions in questions with direction changes."
    }
},
{
    "id": "012014",
    "board": "AQA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Kinematics",
    "subtopic": [
        "Velocity-Time Graphs",
        "Multi-Stage Motion"
    ],
    "img": "images/Mechanics_pngs/012014.png",
    "question": "The velocity-time graph shows the motion of two particles, $A$ and $B$, moving along the same straight horizontal road.<br><br>Particle $A$ starts from rest at $t = 0$ and accelerates uniformly to a speed of $15\\text{ m s}^{-1}$ in $6\\text{ seconds}$, before continuing at this constant speed.<br><br>Particle $B$ starts from rest from the same initial point at $t = 2$ and accelerates uniformly to a speed of $24\\text{ m s}^{-1}$ in $8\\text{ seconds}$ (reaching this speed at $t = 10$), before continuing at this constant speed.<br><br><strong>(a)</strong> Find the time $t$, in seconds, at which particle $B$ overtakes particle $A$.<br><br><strong>(b)</strong> Find the distance from the starting point when this overtaking occurs.",
    "steps": [
        "Note that overtaking occurs when both particles have covered the same displacement ($s_A = s_B$). Assume this occurs at some time $t > 10$, when both particles have reached their maximum constant velocities.",
        "Set up the displacement equation for Particle $A$ at $t > 10$. The total distance is the area of the initial acceleration triangle plus the constant-velocity rectangle:<br><br>\\begin{aligned} s_A &= \\dfrac{ 1 }{ 2 }(6)(15) + 15(t - 6) \\cr s_A &= 45 + 15t - 90 \\cr s_A &= 15t - 45 \\end{aligned}",
        "Set up the displacement equation for Particle $B$ at $t > 10$. Particle $B$ starts at $t = 2$ and reaches max speed at $t = 10$. The total distance is the initial acceleration triangle plus the constant-velocity rectangle:<br><br>\\begin{aligned} s_B &= \\dfrac{ 1 }{ 2 }(8)(24) + 24(t - 10) \\cr s_B &= 96 + 24t - 240 \\cr s_B &= 24t - 144 \\end{aligned}",
        "Equate the two displacements to find the time of overtaking:<br><br>\\begin{aligned} 15t - 45 &= 24t - 144 \\cr 24t - 15t &= 144 - 45 \\cr 9t &= 99 \\cr t &= 11\\text{ s} \\end{aligned}",
        "Calculate the distance from the start by substituting $t = 11$ back into the displacement equation for Particle $A$:<br><br>\\begin{aligned} s &= 15(11) - 45 \\cr s &= 165 - 45 \\cr s &= 120\\text{ m} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$t = 12.57\\text{ s}; \\quad \\text{distance} = 153.6\\text{ m}$$",
            "feedback": "This represents a calculation error when evaluating the initial triangular area under the acceleration phase for one of the particles, leading to incorrect offset constants."
        },
        {
            "ans": "$$t = 11\\text{ s}; \\quad \\text{distance} = 165\\text{ m}$$",
            "feedback": "This error occurs if you forgot to subtract the offset of $45$ from Particle $A$'s distance equation when substituting the time $t = 11$."
        },
        {
            "ans": "$$t = 9.5\\text{ s}; \\quad \\text{distance} = 105\\text{ m}$$",
            "feedback": "This indicates a setup slip in handling the time delay for Particle $B$, which started $2\\text{ seconds}$ after Particle $A$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Validating the Time Interval",
        "content": "When solving multi-stage overtaking problems, always verify that your calculated crossover time ($t = 11\\text{ s}$) lies within the time domain of the constant-velocity equations you used (which require $t > 10\\text{ s}$). If it had been less than $10$, you would have had to solve quadratic equations for the acceleration phases instead!"
    }
},
{
    "id": "012015",
    "board": "AQA",
    "level": "A",
    "major_area": "Mechanics",
    "topic": "Kinematics",
    "subtopic": [
        "Variable Acceleration",
        "Calculus"
    ],
    "img": "images/Mechanics_pngs/012015.png",
    "question": "The velocity, $v\\text{ m s}^{-1}$, of a car during a $6\\text{-second}$ test drive is modelled by the equation $v = -\\dfrac{1}{2}t^3 + 3t^2 + 8t$, where $t$ is the time in seconds.<br><br><strong>(a)</strong> Find the maximum acceleration of the car.<br><br><strong>(b)</strong> Find the total distance travelled by the car in the first $6\\text{ seconds}$ of the motion.",
    "steps": [
        "For part <strong>(a)</strong>, recall that acceleration is the derivative of velocity with respect to time ($a = \\dfrac{ \\mathrm{d}v }{ \\mathrm{d}t }$):<br><br>\\begin{aligned} a &= \\dfrac{ \\mathrm{d} }{ \\mathrm{d}t }\\left( -\\dfrac{ 1 }{ 2 } t^3 + 3t^2 + 8t \\right) \\cr a &= -\\dfrac{ 3 }{ 2 } t^2 + 6t + 8 \\end{aligned}",
        "To find the maximum acceleration, find when its rate of change is zero ($\\dfrac{ \\mathrm{d}a }{ \\mathrm{d}t } = 0$):<br><br>\\begin{aligned} \\dfrac{ \\mathrm{d}a }{ \\mathrm{d}t } = -3t + 6 &= 0 \\cr -3t &= -6 \\cr t &= 2\\text{ s} \\end{aligned}",
        "Substitute $t = 2$ back into the acceleration equation $a(t)$ to find the maximum acceleration:<br><br>\\begin{aligned} a_{\\text{max}} &= -\\dfrac{ 3 }{ 2 }(2^2) + 6(2) + 8 \\cr a_{\\text{max}} &= -6 + 12 + 8 \\cr a_{\\text{max}} &= 14\\text{ m s}^{ -2 } \\end{aligned}",
        "For part <strong>(b)</strong>, check if the velocity curve crosses the time axis in the interval $0 \\le t \\le 6$. At $t = 6$, $v = -\\dfrac{1}{2}(6^3) + 3(6^2) + 8(6) = 48\\text{ m s}^{-1}$. Since $v(t) \\ge 0$ throughout the interval, the total distance is the definite integral of velocity from $t = 0$ to $t = 6$:<br><br>$$\\text{Distance} = \\int_{0}^{6} \\left( -\\dfrac{ 1 }{ 2 } t^3 + 3t^2 + 8t \\right) \\mathrm{d}t$$",
        "Integrate each term individually:<br><br>\\begin{aligned} \\text{Distance} &= \\left[ -\\dfrac{ 1 }{ 8 } t^4 + t^3 + 4t^2 \\right]_{0}^{6} \\cr &= \\left( -\\dfrac{ 1296 }{ 8 } + 6^3 + 4(6^2) \\right) - 0 \\cr &= -162 + 216 + 144 \\cr &= 198\\text{ m} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$a_{\\text{max}} = 14\\text{ m s}^{ -2 }; \\quad \\text{distance} = 132\\text{ m}$$",
            "feedback": "This represents an integration slip, likely caused by making an error when finding the antiderivative coefficients or when evaluating the limits of integration."
        },
        {
            "ans": "$$a_{\\text{max}} = 8\\text{ m s}^{ -2 }; \\quad \\text{distance} = 198\\text{ m}$$",
            "feedback": "This error occurs if you took the initial acceleration at $t = 0$ ($8\\text{ m s}^{-2}$) instead of finding the maximum value of the quadratic acceleration function."
        },
        {
            "ans": "$$a_{\\text{max}} = 20\\text{ m s}^{ -2 }; \\quad \\text{distance} = 162\\text{ m}$$",
            "feedback": "This indicates a differentiation slip when finding the acceleration function, leading to an incorrect peak time and integrated distance value."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Graph Limits and Calculus",
        "content": "Before integrating velocity directly to find distance, always check if the curve crosses the time axis (becomes negative) in your interval. If it did, you would have to find the root and integrate the positive and negative regions separately. Because our velocity remains strictly positive, integrating $v(t)$ directly yields the distance!"
    }
},
{
    "id": "012016",
    "board": "AQA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Forces and Friction",
    "subtopic": [
        "Friction Limits",
        "Static Equilibrium"
    ],
    "img": false,
    "question": "A boy attempts to move a wooden crate of mass $15\\text{ kg}$ along horizontal ground. The coefficient of friction between the crate and the ground is $0.75$.<br><br><strong>(a)</strong> The boy applies a horizontal force of $100\\text{ N}$. Show that the crate remains stationary.<br><br><strong>(b)</strong> Instead, the boy uses a handle to pull the crate forward. He exerts a force of $100\\text{ N}$ at an angle of $20^\\circ$ above the horizontal.<br><br><img src='images/Mechanics_pngs/012016.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br>Determine whether the crate remains stationary.",
    "steps": [
        "<strong>(a) Horizontal Case:</strong><br>First, resolve the forces acting on the crate vertically to find the normal reaction force, $R$:<br><br>$$R = 15g = 15 \\times 9.8 = 147\\text{ N}$$",
        "Next, calculate the maximum possible frictional force, $F_{\\text{max}}$, using the coefficient of friction $\\mu = 0.75$:<br><br>$$F_{\\text{max}} = \\mu R = 0.75 \\times 147 = 110.25\\text{ N}$$",
        "Since the applied horizontal force of $100\\text{ N}$ is less than the maximum friction force ($110.25\\text{ N}$), the frictional force will scale to match the applied force exactly ($100\\text{ N}$). Thus, the forces are in equilibrium, and the crate remains stationary.",
        "<strong>(b) Pulling Case:</strong><br>He exerts a force of $100\\text{ N}$ at an angle of $20^\\circ$ above the horizontal:",
        "Resolve the forces vertically, taking upwards as positive. The vertical component of the pulling force reduces the normal reaction force, $R$:<br><br>\\begin{aligned} R + 100\\sin{ 20^\\circ } &= 15g \\cr R &= 147 - 100\\sin{ 20^\\circ } \\cr R &= 147 - 34.20 \\cr R &= 112.80\\text{ N} \\end{aligned}",
        "Calculate the new maximum frictional force with this reduced reaction force:<br><br>$$F_{\\text{max}} = \\mu R = 0.75 \\times 112.80 = 84.60\\text{ N}$$",
        "Find the horizontal component of the pulling force, $P_x$, which acts to move the crate forward:<br><br>$$P_x = 100\\cos{ 20^\\circ } \\approx 93.97\\text{ N}$$",
        "Since the forward pulling force ($93.97\\text{ N}$) is greater than the maximum frictional resistance ($84.60\\text{ N}$), the frictional limit is exceeded. Therefore, the crate does not remain stationary and begins to move."
    ],
    "pi_options": [
        {
            "ans": "The crate does not remain stationary in either (a) or (b).",
            "feedback": "This error occurs if you miscalculated the maximum friction in part (a). The horizontal applied force of $100\\text{ N}$ is less than $110.25\\text{ N}$, meaning the crate stays stationary in (a)."
        },
        {
            "ans": "The crate remains stationary in both (a) and (b).",
            "feedback": "This represents a common mistake where the vertical component of the pulling force is ignored in part (b), leading to an incorrect assumption that the maximum friction remains $110.25\\text{ N}$."
        },
        {
            "ans": "The crate does not remain stationary in (a), but remains stationary in (b).",
            "feedback": "This represents a complete reversal of the physical conditions. Pulling upwards reduces the normal reaction and the maximum friction, making it easier to slide the crate in (b) than in (a)."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Pulling Reduces Friction",
        "content": "Pulling upwards reduces the normal reaction $R$, which in turn reduces the maximum friction $F_{\\text{max}}$. This makes it easier to move the object even though the horizontal force component is slightly smaller."
    }
},
{
    "id": "012017",
    "board": "AQA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Forces and Friction",
    "subtopic": [
        "Friction Limits",
        "Static Equilibrium"
    ],
    "img": false,
    "question": "A boy attempts to move a wooden crate of mass $30\\text{ kg}$ along horizontal ground. The coefficient of friction between the crate and the ground is $0.4$.<br><br><strong>(a)</strong> The boy applies a horizontal pushing force of $110\\text{ N}$. Show that the crate remains stationary.<br><br><strong>(b)</strong> Instead, the boy pushes downwards on a handle attached to the crate. He exerts a force of $130\\text{ N}$ at an angle of $30^\\circ$ below the horizontal.<br><br><img src='images/Mechanics_pngs/012017.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br>Determine whether the crate remains stationary.",
    "steps": [
        "<strong>(a) Horizontal Case:</strong><br>Resolve the forces acting on the crate vertically to find the normal reaction force, $R$:<br><br>$$R = 30g = 30 \\times 9.8 = 294\\text{ N}$$",
        "Calculate the maximum possible frictional force, $F_{\\text{max}}$, using the coefficient of friction $\\mu = 0.4$:<br><br>$$F_{\\text{max}} = \\mu R = 0.4 \\times 294 = 117.6\\text{ N}$$",
        "Since the applied horizontal force of $110\\text{ N}$ is less than the maximum possible friction force ($117.6\\text{ N}$), the frictional force will balance the applied force exactly. Thus, the crate remains stationary.",
        "<strong>(b) Pushing Case:</strong><br>He exerts a force of $130\\text{ N}$ at an angle of $30^\\circ$ below the horizontal:",
        "Resolve the forces vertically, taking downwards as positive. The downward component of the pushing force increases the normal reaction force, $R$:<br><br>\\begin{aligned} R &= 30g + 130\\sin{ 30^\\circ } \\cr R &= 294 + 65 \\cr R &= 359\\text{ N} \\end{aligned}",
        "Calculate the new maximum frictional force with this increased reaction force:<br><br>$$F_{\\text{max}} = \\mu R = 0.4 \\times 359 = 143.6\\text{ N}$$",
        "Find the horizontal component of the pushing force, $P_x$, which acts to move the crate forward:<br><br>$$P_x = 130\\cos{ 30^\\circ } \\approx 112.58\\text{ N}$$",
        "Since the forward pushing force ($112.58\\text{ N}$) is less than the maximum frictional resistance ($143.6\\text{ N}$), the friction is not overcome. Therefore, the crate remains stationary."
    ],
    "pi_options": [
        {
            "ans": "The crate remains stationary in (a), but does not remain stationary in (b).",
            "feedback": "This error occurs if you subtracted the vertical component of the pushing force from the weight. Because the boy is pushing downwards, the vertical force adds to the weight, increasing $R$ and $F_{\\text{max}}$."
        },
        {
            "ans": "The crate does not remain stationary in either (a) or (b).",
            "feedback": "This occurs if you miscalculated the horizontal friction limits. The applied forces of $110\\text{ N}$ in (a) and $112.58\\text{ N}$ in (b) are both strictly below their respective maximum friction boundaries."
        },
        {
            "ans": "The crate does not remain stationary in (a), but remains stationary in (b).",
            "feedback": "This indicates a miscalculation of the maximum friction in part (a). The horizontal push of $110\\text{ N}$ is less than the maximum static friction limit of $117.6\\text{ N}$, so it stays still."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Pushing Increases Friction",
        "content": "Pushing downwards increases the friction by increasing $R$. Notice how the extra downward force makes the crate 'heavier' in terms of friction, making it harder to move than in the purely horizontal case."
    }
},
{
    "id": "012018",
    "board": "AQA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Forces and Friction",
    "subtopic": [
        "Inclined Planes",
        "Static Equilibrium"
    ],
    "img": false,
    "question": "A block of mass $10\\text{ kg}$ is placed on a rough plane inclined at $15^\\circ$ to the horizontal. The coefficient of friction between the block and the plane is $0.3$.<br><br><strong>(a)</strong> Show that if the block is released from rest with no applied forces, it will remain stationary on the plane.<br><br><strong>(b)</strong> A horizontal force $P = 50\\text{ N}$ is now applied to push the block up the incline.<br><br><img src='images/Mechanics_pngs/012018.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br>Determine whether the block begins to move up the plane.",
    "steps": [
        "<strong>(a) No Applied Force Case:</strong><br>Resolve the forces acting on the block perpendicular to the inclined plane to find the normal reaction force, $R$:<br><br>$$R = 10g\\cos{ 15^\\circ } = 98\\cos{ 15^\\circ } \\approx 94.66\\text{ N}$$",
        "Calculate the maximum possible frictional force, $F_{\\text{max}}$, using the coefficient of friction $\\mu = 0.3$:<br><br>$$F_{\\text{max}} = \\mu R = 0.3 \\times 94.66 = 28.40\\text{ N}$$",
        "Calculate the component of the block's weight acting down the plane, which acts to make the block slide:<br><br>$$W_x = 10g\\sin{ 15^\\circ } = 98\\sin{ 15^\\circ } \\approx 25.36\\text{ N}$$",
        "Since the component of the weight pulling the block down the plane ($25.36\\text{ N}$) is less than the maximum possible friction force ($28.40\\text{ N}$), friction is not overcome. Thus, the block remains stationary.",
        "<strong>(b) Horizontal Force Case:</strong><br>A horizontal force $P = 50\\text{ N}$ is applied to the block:",
        "Resolve forces perpendicular to the inclined plane. Note that the horizontal force $P$ pushes the block into the plane, increasing the normal reaction force, $R$:<br><br>\\begin{aligned} R &= 10g\\cos{ 15^\\circ } + P\\sin{ 15^\\circ } \\cr R &= 94.66 + 50\\sin{ 15^\\circ } \\cr R &= 94.66 + 12.94 \\cr R &= 107.60\\text{ N} \\end{aligned}",
        "Calculate the new maximum frictional force with this increased reaction force:<br><br>$$F_{\\text{max}} = \\mu R = 0.3 \\times 107.60 = 32.28\\text{ N}$$",
        "The forces parallel to the plane are:<br>1. Component of the force $P$ pushing the block up the plane:<br>$$P_x = 50\\cos{ 15^\\circ } \\approx 48.30\\text{ N}$$<br>2. Component of weight pulling the block down the plane:<br>$$W_x = 25.36\\text{ N}$$",
        "For the block to move up the plane, the forward force must exceed the sum of the opposing weight component and the maximum frictional force:<br><br>\\begin{aligned} \\text{Total opposing force} &= W_x + F_{\\text{max}} \\cr &= 25.36 + 32.28 \\cr &= 57.64\\text{ N} \\end{aligned}",
        "Since the force pushing the block up the plane ($48.30\\text{ N}$) is less than the total opposing force ($57.64\\text{ N}$), the block remains stationary."
    ],
    "pi_options": [
        {
            "ans": "The block remains stationary in (a), but does not remain stationary in (b).",
            "feedback": "This error occurs if you did not include the vertical component of the horizontal force $P$ in your normal reaction force. Omitting $P\\sin{ 15^\\circ }$ makes the normal reaction too low, leading to an incorrect result."
        },
        {
            "ans": "The block does not remain stationary in either (a) or (b).",
            "feedback": "This occurs if you miscalculated the gravitational weight component parallel to the slope in part (a). Since $25.36\\text{ N} < 28.40\\text{ N}$, gravity alone is not enough to make the block slide down."
        },
        {
            "ans": "The block does not remain stationary in (a), but remains stationary in (b).",
            "feedback": "This is a dual-calculation slip. Check both the gravitational sliding component in (a) and the combined gravity and friction threshold in (b)."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Horizontal Forces on Inclines",
        "content": "When a force $P$ is applied horizontally, it does not act parallel to the slope. It pushes the block *into* the plane as well as *up* the plane. Always ensure you include the component perpendicular to the slope ($P\\sin{ \\theta }$) when calculating the normal reaction $R$."
    }
},
{
    "id": "012019",
    "board": "AQA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Forces and Friction",
    "subtopic": [
        "Friction Limits",
        "Static Equilibrium"
    ],
    "img": false,
    "question": "A block of mass $8\\text{ kg}$ rests on rough horizontal ground. The coefficient of friction between the block and the ground is $0.5$.<br><br><strong>(a)</strong> If the block is pulled by a purely horizontal rope, show that a force of $35\\text{ N}$ is insufficient to make the block slide.<br><br><strong>(b)</strong> Instead, the block is pulled by a rope inclined at $40^\\circ$ above the horizontal.<br><br><img src='images/Mechanics_pngs/012019.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br>Find the minimum tension, $T$, required to make the block begin to slide.",
    "steps": [
        "<strong>(a) Horizontal Case:</strong><br>Resolve forces vertically to find the normal reaction force, $R$:<br><br>$$R = 8g = 8 \\times 9.8 = 78.4\\text{ N}$$",
        "Calculate the maximum possible frictional force, $F_{\\text{max}}$, using the coefficient of friction $\\mu = 0.5$:<br><br>$$F_{\\text{max}} = \\mu R = 0.5 \\times 78.4 = 39.2\\text{ N}$$",
        "Since the applied horizontal force of $35\\text{ N}$ is less than the maximum friction force ($39.2\\text{ N}$), the block remains stationary.",
        "<strong>(b) Pulling Case at an Angle:</strong><br>A tension force $T$ is applied at an angle of $40^\\circ$ above the horizontal:",
        "Resolve forces vertically, taking upwards as positive. Express the normal reaction, $R$, in terms of $T$:<br><br>\\begin{aligned} R + T\\sin{ 40^\\circ } &= 8g \\cr R &= 78.4 - T\\sin{ 40^\\circ } \\end{aligned}",
        "At the limit of equilibrium (when the block is just about to slide), the horizontal component of the tension force must equal the maximum possible frictional force ($T\\cos{ 40^\\circ } = \\mu R$):<br><br>$$T\\cos{ 40^\\circ } = 0.5(78.4 - T\\sin{ 40^\\circ })$$$",
        "Expand the brackets and solve the simultaneous equation for $T$:<br><br>\\begin{aligned} T\\cos{ 40^\\circ } &= 39.2 - 0.5T\\sin{ 40^\\circ } \\cr T\\cos{ 40^\\circ } + 0.5T\\sin{ 40^\\circ } &= 39.2 \\cr T(\\cos{ 40^\\circ } + 0.5\\sin{ 40^\\circ }) &= 39.2 \\cr T(0.76604 + 0.32139) &= 39.2 \\cr 1.08743T &= 39.2 \\cr T &= \\dfrac{ 39.2 }{ 1.08743 } \\cr T &\\approx 36.1\\text{ N} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$T = 39.2\\text{ N}$$",
            "feedback": "This error occurs if you forgot that pulling upwards reduces $R$. Setting the required tension equal to the flat ground maximum friction limit ($39.2\\text{ N}$) ignores the vertical component of $T$."
        },
        {
            "ans": "$$T = 51.2\\text{ N}$$",
            "feedback": "This represents a vertical sign error. You likely set $R = 78.4 + T\\sin{ 40^\\circ }$, which incorrectly increases the normal reaction (as if pushing down) rather than reducing it."
        },
        {
            "ans": "$$T = 31.3\\text{ N}$$",
            "feedback": "This is a general calculation slip. Ensure you resolve the algebraic expansion of the simultaneous equation correctly and divide by $(\\cos{ 40^\\circ } + 0.5\\sin{ 40^\\circ }).$"
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Simultaneous Forces",
        "content": "This is a classic simultaneous equation problem. Because the normal reaction $R$ depends on the unknown tension $T$, you must express $R$ in terms of $T$ first before substituting it into the friction equation $T\\cos{ \\theta } = \\mu R$."
    }
},
{
    "id": "012020",
    "board": "AQA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Forces and Friction",
    "subtopic": [
        "Connected Particles",
        "Static Equilibrium"
    ],
    "img": false,
    "question": "A block $A$ of mass $6\\text{ kg}$ rests on a rough horizontal table. The coefficient of friction between block $A$ and the table is $0.45$. Block $A$ is connected by a light, inextensible horizontal string passing over a smooth pulley at the edge of the table to a hanging block $B$ of mass $M\\text{ kg}$.<br><br><img src='images/Mechanics_pngs/012020.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><br><strong>(a)</strong> Given that $M = 2$, show that the system remains stationary in equilibrium.<br><br><strong>(b)</strong> Find the maximum mass of block $B$ for which the system can remain stationary in equilibrium.",
    "steps": [
        "<strong>(a) Case where M = 2 kg:</strong><br>Resolve the forces acting on hanging block $B$ vertically. Since the system is stationary, the tension in the string, $T$, is exactly balanced by the weight of block $B$:<br><br>$$T = Mg = 2g = 2 \\times 9.8 = 19.6\\text{ N}$$",
        "Next, resolve the forces acting on block $A$ vertically to find its normal reaction force, $R_A$:<br><br>$$R_A = 6g = 6 \\times 9.8 = 58.8\\text{ N}$$",
        "Calculate the maximum possible frictional force, $F_{\\text{max}}$, acting on block $A$ using $\\mu = 0.45$:<br><br>$$F_{\\text{max}} = \\mu R_A = 0.45 \\times 58.8 = 26.46\\text{ N}$$",
        "Since the string tension pulling block $A$ horizontally ($19.6\\text{ N}$) is less than the maximum possible friction force ($26.46\\text{ N}$), the friction is not overcome. Thus, block $A$ remains stationary, meaning the entire system remains stationary in equilibrium.",
        "<strong>(b) Finding Maximum Mass M:</strong><br>The system is connected as shown in the diagram:",
        "For the system to remain stationary, the horizontal tension $T = Mg$ must be less than or equal to the maximum frictional force of block $A$ ($F_{\\text{max}}$):<br><br>$$Mg \\le \\mu R_A$$",
        "Substitute the expressions for tension and normal reaction into the inequality and solve for $M$:<br><br>\\begin{aligned} Mg &\\le 0.45(6g) \\cr M &\\le 0.45 \\times 6 \\cr M &\\le 2.7\\text{ kg} \\end{aligned}",
        "The maximum mass of block $B$ for which the system remains at rest is $2.7\\text{ kg}$."
    ],
    "pi_options": [
        {
            "ans": "$$M = 3.6\\text{ kg}$$",
            "feedback": "This error occurs if you used an incorrect normal reaction force or friction coefficient during your calculation. Ensure you resolve block A's forces vertically."
        },
        {
            "ans": "$$M = 2.0\\text{ kg}$$",
            "feedback": "This is the mass of block B given in part (a), which has been proven to keep the system stationary but is not the maximum possible limit before motion begins."
        },
        {
            "ans": "$$M = 1.8\\text{ kg}$$",
            "feedback": "This is a potential calculation or multiplication slip. Check your multiplication of the coefficient of friction ($0.45$) by the mass of block A ($6\\text{ kg}$)."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Pulleys and Transmitted Tension",
        "content": "In a simple pulley system, the tension $T$ is the same throughout the string. In equilibrium, the weight of block B ($Mg$) is exactly balanced by the frictional force acting on block A. Notice how gravity ($g$) cancels out beautifully, allowing us to solve for $M$ directly!"
    }
},
{
    "id": "012021",
    "board": "AQA",
    "level": "A",
    "major_area": "Mechanics",
    "topic": "Kinematics",
    "subtopic": [
        "Variable Acceleration",
        "Modelling Assumptions"
    ],
    "img": false,
    "question": "A logistics company is road-testing two delivery vans, $X$ and $Y$, along a straight, horizontal track. Both vans start from rest. The acceleration in $\\text{m s}^{-2}$ of each van is modelled as a function of time, $t$ seconds, after the test begins:<br><br>$$\\text{Acceleration of } X = 0.108t^2$$$$\\text{Acceleration of } Y = 0.015t^3$$<br><strong>(a)</strong> Find the time taken for van $X$ to travel $150\\text{ metres}$ from its starting position. Give your answer to four significant figures.<br><br><strong>(b)</strong> The company decides to select the van which travels $150\\text{ metres}$ in the shortest time. Determine which van should be selected.<br><br><strong>(c)</strong> The models assume that both vans start moving immediately when $t = 0$. In light of this, explain why the company may, in reality, make the wrong decision.",
    "steps": [
        "To find the displacement equation for van $X$, we must integrate its acceleration function $a_X = 0.108t^2$ twice with respect to time $t$.",
        "First, integrate to find the velocity function $v_X(t)$. Since van $X$ starts from rest, the constant of integration is $0$:<br><br>$$v_X = \\int 0.108t^2 \\; \\mathrm{d}t = 0.036t^3$$",
        "Next, integrate the velocity function to find the displacement function $s_X(t)$. Since it starts from the origin, the constant of integration is $0$:<br><br>$$s_X = \\int 0.036t^3 \\; \\mathrm{d}t = 0.009t^4$$",
        "For part <strong>(a)</strong>, find the time taken to travel $150\\text{ metres}$ by setting $s_X = 150$ and solving for $t$:<br><br>\\begin{aligned} 0.009t^4 &= 150 \\cr t^4 &= \\dfrac{ 150 }{ 0.009 } \\cr t^4 &= 16666.67 \\cr t &= (16666.67)^{ \\frac{ 1 }{ 4 } } \\cr t &\\approx 11.36\\text{ s} \\end{aligned}",
        "For part <strong>(b)</strong>, repeat this double-integration process for van $Y$, starting with its acceleration function $a_Y = 0.015t^3$:<br><br>\\begin{aligned} v_Y &= \\int 0.015t^3 \\; \\mathrm{d}t = 0.00375t^4 \\cr s_Y &= \\int 0.00375t^4 \\; \\mathrm{d}t = 0.00075t^5 \\end{aligned}",
        "Find the time taken for van $Y$ to travel $150\\text{ metres}$ by setting $s_Y = 150$:<br><br>\\begin{aligned} 0.00075t^5 &= 150 \\cr t^5 &= \\dfrac{ 150 }{ 0.00075 } \\cr t^5 &= 200000 \\cr t &= (200000)^{ \\frac{ 1 }{ 5 } } \\cr t &\\approx 13.51\\text{ s} \\end{aligned}",
        "Compare the two times: van $X$ takes $11.36\\text{ s}$ and van $Y$ takes $13.51\\text{ s}$. Since $11.36 < 13.51$, van $X$ completes the distance in the shortest time and should be selected.",
        "<strong>(c) Real-world Modelling Limitations:</strong><br>In reality, there will be human reaction times, engine lag, or tyre wheel spin before the vans start moving. Because the theoretical time difference between the two vans is relatively small, any minor start delay by the driver of van $X$ could mean that van $Y$ actually completes the $150\\text{ m}$ journey faster in practice, leading to the wrong purchasing decision."
    ],
    "pi_options": [
        {
            "ans": "$$t_X = 11.36\\text{ s}; \\quad t_Y = 13.51\\text{ s};$$<br>$$\\text{Select Y. Reality: Driver reaction times or wheel spin at the start could reverse the results.}$$",
            "feedback": "This error occurs if you calculated the times correctly but selected the slower van ($Y$) instead of the faster van ($X$). Slower vehicles are not selected based on performance criteria."
        },
        {
            "ans": "$$t_X = 12.45\\text{ s}; \\quad t_Y = 14.12\\text{ s};$$ <br>$$\\text{Select X. <br>Reality: The mathematical models are completely infallible in practice.}$$",
            "feedback": "This represents an integration coefficient slip in the first steps. Additionally, stating that mathematical models are infallible ignores real-world physical factors like reaction times or tyre wheel spin."
        },
        {
            "ans": "$$t_X = 9.85\\text{ s}; \\quad t_Y = 11.20\\text{ s};$$ <br>$$\\text{Select X. <br>Reality: Human reaction times have no impact on overall travel times.}$$",
            "feedback": "This indicates an algebraic error when evaluating the roots in part (a). Human reaction times or start delays at $t = 0$ can have a highly significant impact on short-distance races."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Real-world Limitations",
        "content": "A-level examiners love testing modelling limitations! Real-world factors (like human reaction times, clutch delay, or wheel spin at the start) are not accounted for in simple mathematical models, which can easily reverse close theoretical decisions."
    }
},
{
    "id": "012022",
    "board": "AQA",
    "level": "A",
    "major_area": "Mechanics",
    "topic": "Kinematics",
    "subtopic": [
        "Variable Acceleration",
        "Modelling Assumptions"
    ],
    "img": false,
    "question": "A model rocket is projected vertically upwards from rest on horizontal ground. For the first $20\\text{ seconds}$ of its flight, before its engines shut down, its acceleration, $a\\text{ m s}^{-2}$, at time $t$ seconds is modelled by:<br><br>$$a = 0.6t - 0.03t^2 \\quad (0 \\le t \\le 20)$$<br><strong>(a)</strong> Find the maximum velocity reached by the rocket during the first $20\\text{ seconds}$ of its flight.<br><br><strong>(b)</strong> Find the height of the rocket above the ground at the instant its engines shut down (at $t = 20$).<br><br><strong>(c)</strong> State one physical factor that has been ignored in this model of the rocket's flight.",
    "steps": [
        "For part <strong>(a)</strong>, find the velocity function $v(t)$ by integrating the acceleration function $a = 0.6t - 0.03t^2$ with respect to $t$. Since the rocket starts from rest, the constant of integration is $0$:<br><br>$$v = \\int (0.6t - 0.03t^2) \\; \\mathrm{d}t = 0.3t^2 - 0.01t^3$$",
        "Maximum velocity occurs at a stationary point of $v(t)$, which is when its derivative (acceleration) is equal to zero ($a = 0$):<br><br>\\begin{aligned} 0.6t - 0.03t^2 &= 0 \\cr 0.03t(20 - t) &= 0 \\end{aligned}<br>Since $t > 0$ during the flight, this occurs at $t = 20\\text{ seconds}$ (the instant of engine shutdown).",
        "Substitute $t = 20$ into the velocity function to find the maximum velocity reached:<br><br>\\begin{aligned} v_{\\text{max}} &= 0.3(20^2) - 0.01(20^3) \\cr &= 0.3(400) - 0.01(8000) \\cr &= 120 - 80 \\cr &= 40\\text{ m s}^{ -1 } \\end{aligned}",
        "For part <strong>(b)</strong>, integrate the velocity function to find the displacement (height) function $s(t)$. Since the rocket starts from the ground, the constant of integration is $0$:<br><br>$$s = \\int (0.3t^2 - 0.01t^3) \\; \\mathrm{d}t = 0.1t^3 - 0.0025t^4$$",
        "Substitute $t = 20$ into the displacement function to find the height when the engines shut down:<br><br>\\begin{aligned} s(20) &= 0.1(20^3) - 0.0025(20^4) \\cr &= 0.1(8000) - 0.0025(160000) \\cr &= 800 - 400 \\cr &= 400\\text{ m} \\end{aligned}",
        "<strong>(c) Modelling Assumptions:</strong><br>The mathematical model for the rocket's acceleration ignores physical factors such as air resistance (drag) or the changing mass of the rocket as it burns fuel. In reality, air resistance would oppose the motion, reducing the maximum velocity and the maximum height reached."
    ],
    "pi_options": [
        {
            "ans": "$$v_{\\text{max}} = 30\\text{ m s}^{ -1 }; \\quad \\text{height} = 400\\text{ m};$$ <br>$$\\text{Ignored factor: Air resistance (drag)}$$",
            "feedback": "This error occurs if you made an arithmetic slip when evaluating the maximum velocity in part (a), even though your height integration in (b) is correct."
        },
        {
            "ans": "$$v_{\\text{max}} = 40\\text{ m s}^{ -1 }; \\quad \\text{height} = 320\\text{ m};$$ <br>$$\\text{Ignored factor: Rocket fuel mass loss}$$",
            "feedback": "This indicates an integration slip in part (b). Ensure you divide the cubic term coefficient $-0.01$ by $4$ to get the correct coefficient of $-0.0025$ for the $t^4$ term."
        },
        {
            "ans": "$$v_{\\text{max}} = 20\\text{ m s}^{ -1 }; \\quad \\text{height} = 200\\text{ m};$$ <br>$$\\text{Ignored factor: Horizontal wind forces}$$",
            "feedback": "This represents a dual-calculation error. Re-verify your integration steps for both velocity and displacement, and check your substitution values at $t = 20$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Modelling Assumptions",
        "content": "AQA examiners heavily test modelling assumptions! Real-world factors (like air resistance, wind, or the changing mass of the rocket as it burns fuel) are neglected in basic kinematics, making the model's calculated velocity and height higher than they would be in reality."
    }
},
{
    "id": "012023",
    "board": "AQA",
    "level": "A",
    "major_area": "Mechanics",
    "topic": "Kinematics",
    "subtopic": [
        "Variable Acceleration",
        "Calculus"
    ],
    "img": false,
    "question": "A particle moves in a straight line. At time $t$ seconds, its displacement, $s$ metres, from a fixed origin $O$ is given by:<br><br>$$s = 2t^3 - 15t^2 + 24t + 10 \\quad (t \\ge 0)$$<br><strong>(a)</strong> Find the velocity of the particle at the instant when its acceleration is zero.<br><br><strong>(b)</strong> Find the range of values of $t$ for which the velocity of the particle is negative (moving back towards $O$).",
    "steps": [
        "For part <strong>(a)</strong>, find the velocity function $v(t)$ by differentiating the displacement function $s(t) = 2t^3 - 15t^2 + 24t + 10$ with respect to $t$:<br><br>$$v = \\dfrac{  \\mathrm{d}s }{  \\mathrm{d}t } = 6t^2 - 30t + 24$$",
        "Next, find the acceleration function $a(t)$ by differentiating the velocity function with respect to $t$:<br><br>$$a = \\dfrac{  \\mathrm{d}v }{  \\mathrm{d}t } = 12t - 30$$",
        "Find when the acceleration is zero by setting $a(t) = 0$:<br><br>\\begin{aligned} 12t - 30 &= 0 \\cr t &= 2.5\\text{ s} \\end{aligned}",
        "Substitute $t = 2.5$ into the velocity function to find the velocity at this instant:<br><br>\\begin{aligned} v(2.5) &= 6(2.5^2) - 30(2.5) + 24 \\cr &= 6(6.25) - 75 + 24 \\cr &= 37.5 - 75 + 24 \\cr &= -13.5\\text{ m s}^{ -1 } \\end{aligned}",
        "For part <strong>(b)</strong>, the particle's velocity is negative when $v(t) < 0$. Set up the quadratic inequality:<br><br>$$6t^2 - 30t + 24 < 0$$",
        "Divide the inequality by $6$ and factorise the quadratic expression to find the critical values:<br><br>\\begin{aligned} t^2 - 5t + 4 &< 0 \\cr (t - 1)(t - 4) &< 0 \\end{aligned}<br>The critical values are $t = 1$ and $t = 4$.",
        "Since the inequality is less than zero, the velocity is negative between the critical values, yielding the range:<br><br>$$1 < t < 4$$"
    ],
    "pi_options": [
        {
            "ans": "$$v = -13.5\\text{ m s}^{ -1 }; \\quad t < 1 \\text{ or } t > 4$$",
            "feedback": "This error occurs if you inverted the inequality range. For a quadratic expression to be less than zero ($< 0$), the values must lie strictly inside the critical roots ($1 < t < 4$)."
        },
        {
            "ans": "$$v = 15.0\\text{ m s}^{ -1 }; \\quad 1 < t < 4$$",
            "feedback": "This represents a calculation slip when substituting $t = 2.5$ into the velocity function in part (a)."
        },
        {
            "ans": "$$v = -13.5\\text{ m s}^{ -1 }; \\quad 1 \\le t \\le 4$$",
            "feedback": "This is a notation error. Velocity is zero at $t = 1$ and $t = 4$. For it to be strictly negative (moving backwards), you must use strict inequality signs ($<$ rather than $\\le$)."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Interpreting Negative Velocity",
        "content": "Negative velocity simply indicates that the particle is moving in the direction of decreasing displacement (backwards towards the origin). In exams, always show the complete factorisation of the quadratic when finding inequality intervals."
    }
},
{
    "id": "012024",
    "board": "AQA",
    "level": "A",
    "major_area": "Mechanics",
    "topic": "Kinematics",
    "subtopic": [
        "Variable Acceleration",
        "Vectors"
    ],
    "img": false,
    "question": "A particle $P$ of mass $0.5\\text{ kg}$ moves in a horizontal plane. At time $t$ seconds, its position vector, $\\mathbf{r}$ metres, relative to a fixed origin $O$ is given by:<br><br>$$\\mathbf{r} = (t^3 - 4t^2)\\mathbf{i} + (2t^2 - 6t)\\mathbf{j}$$<br>where $\\mathbf{i}$ and $\\mathbf{j}$ are perpendicular horizontal unit vectors.<br><br><strong>(a)</strong> Find the speed of the particle when $t = 3\\text{ seconds}$.<br><br><strong>(b)</strong> Find the magnitude of the resultant force acting on the particle when $t = 3\\text{ seconds}$.",
    "steps": [
        "For part <strong>(a)</strong>, find the velocity vector $\\mathbf{v}$ by differentiating the position vector $\\mathbf{r} = (t^3 - 4t^2)\\mathbf{i} + (2t^2 - 6t)\\mathbf{j}$ with respect to $t$:<br><br>$$\\mathbf{v} = \\dfrac{  \\mathrm{d}\\mathbf{r} }{  \\mathrm{d}t } = (3t^2 - 8t)\\mathbf{i} + (4t - 6)\\mathbf{j}$$",
        "Substitute $t = 3$ into the velocity vector to find the velocity at that instant:<br><br>\\begin{aligned} \\mathbf{v}(3) &= (3(3^2) - 8(3))\\mathbf{i} + (4(3) - 6)\\mathbf{j} \\cr &= (27 - 24)\\mathbf{i} + (12 - 6)\\mathbf{j} \\cr &= 3\\mathbf{i} + 6\\mathbf{j} \\end{aligned}",
        "Recall that speed is the magnitude of the velocity vector. Use Pythagoras' theorem to find the magnitude of $\\mathbf{v}(3)$:<br><br>\\begin{aligned} \\text{Speed} &= |\\mathbf{v}(3)| \\cr &= \\sqrt{ 3^2 + 6^2 } \\cr &= \\sqrt{ 45 } \\cr &\\approx 6.71\\text{ m s}^{ -1 } \\end{aligned}",
        "For part <strong>(b)</strong>, find the acceleration vector $\\mathbf{a}$ by differentiating the velocity vector with respect to $t$:<br><br>$$\\mathbf{a} = \\dfrac{  \\mathrm{d}\\mathbf{v} }{  \\mathrm{d}t } = (6t - 8)\\mathbf{i} + 4\\mathbf{j}$$",
        "Substitute $t = 3$ into the acceleration vector:<br><br>\\begin{aligned} \\mathbf{a}(3) &= (6(3) - 8)\\mathbf{i} + 4\\mathbf{j} \\cr &= 10\\mathbf{i} + 4\\mathbf{j} \\end{aligned}",
        "Use Newton's Second Law ($\\mathbf{F} = m\\mathbf{a}$) with mass $m = 0.5\\text{ kg}$ to find the resultant force vector $\\mathbf{F}$:<br><br>\\begin{aligned} \\mathbf{F} &= 0.5(10\\mathbf{i} + 4\\mathbf{j}) \\cr &= 5\\mathbf{i} + 2\\mathbf{j} \\end{aligned}",
        "Find the magnitude of this resultant force vector:<br><br>\\begin{aligned} |\\mathbf{F}| &= \\sqrt{ 5^2 + 2^2 } \\cr &= \\sqrt{ 29 } \\cr &\\approx 5.39\\text{ N} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$\\text{Speed} = 7.81\\text{ m s}^{ -1 }; \\quad \\text{Force} = 5.22\\text{ N}$$",
            "feedback": "This represents a calculation error when evaluating the vectors or a possible transposition slip during the Pythagoras magnitude calculations."
        },
        {
            "ans": "$$\\text{Speed} = 6.71\\text{ m s}^{ -1 }; \\quad \\text{Force} = 10.77\\text{ N}$$",
            "feedback": "This error occurs if you forgot to multiply the acceleration vector by the mass $m = 0.5\\text{ kg}$ before calculating the magnitude of the force. Remember that $\\mathbf{F} = m\\mathbf{a}$."
        },
        {
            "ans": "$$\\text{Speed} = 9.00\\text{ m s}^{ -1 }; \\quad \\text{Force} = 5.39\\text{ N}$$",
            "feedback": "This represents a vector magnitude addition slip. You cannot simply add the vector components ($3 + 6 = 9$) to find the speed; you must use Pythagoras' theorem."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Vectors in Mechanics",
        "content": "Speed is defined as the magnitude of the velocity vector. Force is mass times the acceleration vector. Don't forget that mass acts as a scalar multiplier: always apply the $0.5\\text{ kg}$ scale factor to your acceleration vector before calculating the final force magnitude!"
    }
},
{
    "id": "012025",
    "board": "AQA",
    "level": "A",
    "major_area": "Mechanics",
    "topic": "Kinematics",
    "subtopic": [
        "Variable Acceleration",
        "Calculus"
    ],
    "img": false,
    "question": "A particle $P$ moves along a straight line. At time $t$ seconds, its acceleration, $a\\text{ m s}^{-2}$, is given by:<br><br>$$a = 12t - 8$$<br>At time $t = 1$, the velocity of $P$ is $1\\text{ m s}^{-1}$.<br>At time $t = 2$, the displacement of $P$ from a fixed origin $O$ is $10\\text{ metres}$.<br><br><strong>(a)</strong> Find an expression for the velocity of the particle at time $t$.<br><br><strong>(b)</strong> Find an expression for the displacement of the particle from $O$ at time $t$.",
    "steps": [
        "For part <strong>(a)</strong>, find the velocity function $v(t)$ by integrating the acceleration function $a = 12t - 8$ with respect to $t$, incorporating a constant of integration $C$:<br><br>$$v = \\int (12t - 8) \\; \\mathrm{d}t = 6t^2 - 8t + C$$",
        "Use the boundary condition $v(1) = 1$ to solve for $C$:<br><br>\\begin{aligned} 6(1^2) - 8(1) + C &= 1 \\cr -2 + C &= 1 \\cr C &= 3 \\end{aligned}<br>Thus, the velocity expression is:<br><br>$$v = 6t^2 - 8t + 3$$",
        "For part <strong>(b)</strong>, find the displacement function $s(t)$ by integrating the velocity function with respect to $t$, incorporating a second constant of integration $K$:<br><br>$$s = \\int (6t^2 - 8t + 3) \\; \\mathrm{d}t = 2t^3 - 4t^2 + 3t + K$$",
        "Use the boundary condition $s(2) = 10$ to solve for $K$:<br><br>\\begin{aligned} 2(2^3) - 4(2^2) + 3(2) + K &= 10 \\cr 2(8) - 4(4) + 6 + K &= 10 \\cr 16 - 16 + 6 + K &= 10 \\cr 6 + K &= 10 \\cr K &= 4 \\end{aligned}<br>Thus, the displacement expression is:<br><br>$$s = 2t^3 - 4t^2 + 3t + 4$$"
    ],
    "pi_options": [
        {
            "ans": "$$v = 6t^2 - 8t; \\quad s = 2t^3 - 4t^2 + 4$$",
            "feedback": "This is a major student error. It assumes that both constants of integration ($C$ and $K$) are zero. Always solve for your integration constants using the given boundary conditions."
        },
        {
            "ans": "$$v = 6t^2 - 8t + 3; \\quad s = 2t^3 - 4t^2 + 3t$$",
            "feedback": "This error occurs if you solved for the first constant of integration $C = 3$ correctly, but assumed that the second constant of integration $K$ was zero in the second step."
        },
        {
            "ans": "$$v = 6t^2 - 8t + 1; \\quad s = 2t^3 - 4t^2 + t + 10$$",
            "feedback": "This indicates algebraic transposition slips when evaluating the boundary conditions, leading to incorrect numerical constants."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Boundary Constants",
        "content": "One of the most common student errors is assuming that constants of integration ($C$ and $K$) are always zero. Always solve for $C$ immediately before moving on to the next integration step."
    }
},
{
    "id": "012026",
    "board": "AQA",
    "level": "A",
    "major_area": "Mechanics",
    "topic": "Vectors",
    "subtopic": [
        "3D Coordinate Geometry",
        "Vector Proofs"
    ],
    "img": false,
    "question": "The vertices of a quadrilateral $ABCD$ have position vectors relative to a fixed origin $O$ given by:<br><br>$$\\mathbf{r}_A = \\begin{pmatrix} 4 \\cr 1 \\cr 2 \\end{pmatrix}, \\quad \\mathbf{r}_B = \\begin{pmatrix} 5 \\cr 4 \\cr -1 \\end{pmatrix}, \\quad \\mathbf{r}_C = \\begin{pmatrix} 2 \\cr 6 \\cr 1 \\end{pmatrix}, \\quad \\mathbf{r}_D = \\begin{pmatrix} 1 \\cr 3 \\cr 4 \\end{pmatrix}$$<br><strong>(a)</strong> Write down the vector $\\vec{AB}$ as a column vector.<br><br><strong>(b)</strong> Prove that the quadrilateral $ABCD$ is a parallelogram but not a rhombus.",
    "steps": [
        "For part <strong>(a)</strong>, calculate the vector $\\vec{AB}$ by subtracting the position vector of $A$ from the position vector of $B$:<br><br>\\begin{aligned} \\vec{AB} &= \\mathbf{r}_B - \\mathbf{r}_A \\cr &= \\begin{pmatrix} 5 - 4 \\cr 4 - 1 \\cr -1 - 2 \\end{pmatrix} \\cr &= \\begin{pmatrix} 1 \\cr 3 \\cr -3 \\end{pmatrix} \\end{aligned}",
        "For part <strong>(b)</strong>, to prove that $ABCD$ is a parallelogram, we can show that the opposite sides are parallel and equal in length by calculating the vector $\\vec{DC}$:<br><br>\\begin{aligned} \\vec{DC} &= \\mathbf{r}_C - \\mathbf{r}_D \\cr &= \\begin{pmatrix} 2 - 1 \\cr 6 - 3 \\cr 1 - 4 \\end{pmatrix} \\cr &= \\begin{pmatrix} 1 \\cr 3 \\cr -3 \\end{pmatrix} \\end{aligned}",
        "Since $\\vec{AB} = \\vec{DC}$, the opposite sides $AB$ and $DC$ are parallel and equal in length. This is sufficient to prove that the quadrilateral $ABCD$ is a parallelogram.",
        "To determine whether the parallelogram is a rhombus, calculate the magnitudes of two adjacent sides, such as $AB$ and $BC$:",
        "The magnitude of $\\vec{AB}$ is:<br><br>\\begin{aligned} |\\vec{AB}| &= \\sqrt{ 1^2 + 3^2 + (-3)^2 } \\cr &= \\sqrt{ 1 + 9 + 9 } \\cr &= \\sqrt{ 19 } \\end{aligned}",
        "Find the vector $\\vec{BC}$ and calculate its magnitude:<br><br>\\begin{aligned} \\vec{BC} &= \\mathbf{r}_C - \\mathbf{r}_B \\cr &= \\begin{pmatrix} 2 - 5 \\cr 6 - 4 \\cr 1 - (-1) \\end{pmatrix} = \\begin{pmatrix} -3 \\cr 2 \\cr 2 \\end{pmatrix} \\cr |\\vec{BC}| &= \\sqrt{ (-3)^2 + 2^2 + 2^2 } \\cr &= \\sqrt{ 9 + 4 + 4 } \\cr &= \\sqrt{ 17 } \\end{aligned}",
        "Since the adjacent sides have different lengths ($|\\vec{AB}| = \\sqrt{ 19 } \\neq \\sqrt{ 17 } = |\\vec{BC}|$), the four sides of the parallelogram are not all equal in length. Therefore, $ABCD$ is not a rhombus."
    ],
    "pi_options": [
        {
            "ans": "$$\\vec{AB} = \\begin{pmatrix} 1 \\cr 3 \\cr -3 \\end{pmatrix};$$<br>$$\\text{ABCD is a parallelogram because opposite sides are equal and parallel. It is not a rhombus because adjacent sides are unequal.}$$",
            "feedback": "This is a notation error. A rhombus requires adjacent sides to be equal in length. Since $|\\vec{AB}| = \\sqrt{19}$ and $|\\vec{BC}| = \\sqrt{17}$, they are unequal."
        },
        {
            "ans": "$$\\vec{AB} = \\begin{pmatrix} 1 \\cr 3 \\cr -3 \\end{pmatrix};$$<br>$$\\text{ABCD is a rhombus because all four sides are equal, but adjacent sides are perpendicular.}$$",
            "feedback": "This is incorrect. A rhombus does not require perpendicular adjacent sides (that would make it a square), and the adjacent side lengths are actually unequal."
        },
        {
            "ans": "$$\\vec{AB} = \\begin{pmatrix} -1 \\cr -3 \\cr 3 \\end{pmatrix};$$<br>$$\\text{ABCD is a parallelogram because the opposite sides are not parallel.}$$",
            "feedback": "This represents a vector subtraction sign error when calculating $\\vec{AB} = \\mathbf{r}_B - \\mathbf{r}_A$. Additionally, a parallelogram must have parallel opposite sides."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Proving a Parallelogram",
        "content": "To prove a quadrilateral is a parallelogram in vector geometry, you only need to show that one pair of opposite directed vectors is equal (e.g., $\\vec{AB} = \\vec{DC}$). This single vector equality simultaneously proves they are parallel and equal in length!"
    }
},
{
    "id": "012027",
    "board": "AQA",
    "level": "A",
    "major_area": "Mechanics",
    "topic": "Vectors",
    "subtopic": [
        "3D Coordinate Geometry",
        "Vector Proofs"
    ],
    "img": false,
    "question": "The vertices of a quadrilateral $ABCD$ have position vectors relative to a fixed origin $O$ given by:<br><br>$$\\mathbf{r}_A = \\begin{pmatrix} 1 \\cr 2 \\cr 3 \\end{pmatrix}, \\quad \\mathbf{r}_B = \\begin{pmatrix} 3 \\cr 4 \\cr 4 \\end{pmatrix}, \\quad \\mathbf{r}_C = \\begin{pmatrix} 5 \\cr 3 \\cr 6 \\end{pmatrix}, \\quad \\mathbf{r}_D = \\begin{pmatrix} 3 \\cr 1 \\cr 5 \\end{pmatrix}$$<br><strong>(a)</strong> Write down the vector $\\vec{BC}$ as a column vector.<br><br><strong>(b)</strong> Prove that the quadrilateral $ABCD$ is a rhombus but not a square.",
    "steps": [
        "For part <strong>(a)</strong>, find the vector $\\vec{BC}$ by subtracting the position vector of $B$ from the position vector of $C$:<br><br>\\begin{aligned} \\vec{BC} &= \\mathbf{r}_C - \\mathbf{r}_B \\cr &= \\begin{pmatrix} 5 - 3 \\cr 3 - 4 \\cr 6 - 4 \\end{pmatrix} \\cr &= \\begin{pmatrix} 2 \\cr -1 \\cr 2 \\end{pmatrix} \\end{aligned}",
        "For part <strong>(b)</strong>, to prove that $ABCD$ is a rhombus, first show that it is a parallelogram. Calculate the opposite directed vector $\\vec{AD}$:<br><br>\\begin{aligned} \\vec{AD} &= \\mathbf{r}_D - \\mathbf{r}_A \\cr &= \\begin{pmatrix} 3 - 1 \\cr 1 - 2 \\cr 5 - 3 \\end{pmatrix} \\cr &= \\begin{pmatrix} 2 \\cr -1 \\cr 2 \\end{pmatrix} \\end{aligned}",
        "Since $\\vec{BC} = \\vec{AD}$, the opposite sides are parallel and equal in length, which proves that the quadrilateral $ABCD$ is a parallelogram.",
        "Next, calculate the magnitudes of the adjacent sides $AB$ and $BC$ to determine if the side lengths are equal:",
        "The magnitude of $\\vec{BC}$ is:<br><br>\\begin{aligned} |\\vec{BC}| &= \\sqrt{ 2^2 + (-1)^2 + 2^2 } \\cr &= \\sqrt{ 4 + 1 + 4 } \\cr &= \\sqrt{ 9 } \\cr &= 3 \\end{aligned}",
        "Find the vector $\\vec{AB}$ and calculate its magnitude:<br><br>\\begin{aligned} \\vec{AB} &= \\mathbf{r}_B - \\mathbf{r}_A \\cr &= \\begin{pmatrix} 3 - 1 \\cr 4 - 2 \\cr 4 - 3 \\end{pmatrix} = \\begin{pmatrix} 2 \\cr 2 \\cr 1 \\end{pmatrix} \\cr |\\vec{AB}| &= \\sqrt{ 2^2 + 2^2 + 1^2 } \\cr &= \\sqrt{ 4 + 4 + 1 } \\cr &= \\sqrt{ 9 } \\cr &= 3 \\end{aligned}",
        "Since adjacent sides have equal lengths ($|\\vec{AB}| = |\\vec{BC}| = 3$), all four sides of the parallelogram are equal in length. This proves that $ABCD$ is a rhombus.",
        "To determine whether the rhombus is a square, calculate the dot product of the adjacent vectors $\\vec{AB}$ and $\\vec{BC}$. If they are perpendicular, the dot product will be zero:<br><br>\\begin{aligned} \\vec{AB} \\cdot \\vec{BC} &= \\begin{pmatrix} 2 \\cr 2 \\cr 1 \\end{pmatrix} \\cdot \\begin{pmatrix} 2 \\cr -1 \\cr 2 \\end{pmatrix} \\cr &= 2(2) + 2(-1) + 1(2) \\cr &= 4 - 2 + 2 \\cr &= 4 \\end{aligned}",
        "Since the dot product is not zero ($\\vec{AB} \\cdot \\vec{BC} = 4 \\neq 0$), the adjacent sides are not perpendicular. Therefore, the rhombus is not a square."
    ],
    "pi_options": [
        {
            "ans": "$$\\vec{BC} = \\begin{pmatrix} 2 \\cr -1 \\cr 2 \\end{pmatrix};$$<br>$$\\text{ABCD is a square because adjacent sides are perpendicular and equal in length.}$$",
            "feedback": "This is incorrect. The dot product of $\\vec{AB}$ and $\\vec{BC}$ is $4$, which is not zero, meaning the adjacent sides are not perpendicular and the quadrilateral is not a square."
        },
        {
            "ans": "$$\\vec{BC} = \\begin{pmatrix} -2 \\cr 1 \\cr -2 \\end{pmatrix};$$<br>$$\\text{ABCD is a parallelogram but not a rhombus because adjacent sides are unequal.}$$",
            "feedback": "This represents a vector subtraction direction error. Additionally, both adjacent sides have equal magnitudes of $3$, making it a rhombus."
        },
        {
            "ans": "$$\\vec{BC} = \\begin{pmatrix} 2 \\cr -1 \\cr 2 \\end{pmatrix};$$<br>$$\\text{ABCD is a rectangle because opposite sides are equal and perpendicular.}$$",
            "feedback": "This is conceptually incorrect. Rectangles do not require all four sides to be equal in length, and our adjacent sides are not perpendicular."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Rhombus vs. Square",
        "content": "A rhombus is a parallelogram with four equal sides. A square is a special type of rhombus that contains a right angle. Always calculate the dot product of adjacent vectors to distinguish between them!"
    }
},
{
    "id": "012028",
    "board": "AQA",
    "level": "A",
    "major_area": "Mechanics",
    "topic": "Vectors",
    "subtopic": [
        "3D Coordinate Geometry",
        "Vector Proofs"
    ],
    "img": false,
    "question": "The vertices of a quadrilateral $ABCD$ have position vectors relative to a fixed origin $O$ given by:<br><br>$$\\mathbf{r}_A = \\begin{pmatrix} 2 \\cr -1 \\cr 3 \\end{pmatrix}, \\quad \\mathbf{r}_B = \\begin{pmatrix} 4 \\cr 0 \\cr 1 \\end{pmatrix}, \\quad \\mathbf{r}_C = \\begin{pmatrix} 6 \\cr 4 \\cr 5 \\end{pmatrix}, \\quad \\mathbf{r}_D = \\begin{pmatrix} 4 \\cr 3 \\cr 7 \\end{pmatrix}$$<br><strong>(a)</strong> Write down the vector $\\vec{DC}$ as a column vector.<br><br><strong>(b)</strong> Prove that the quadrilateral $ABCD$ is a rectangle but not a square.",
    "steps": [
        "For part <strong>(a)</strong>, find the vector $\\vec{DC}$ by subtracting the position vector of $D$ from the position vector of $C$:<br><br>\\begin{aligned} \\vec{DC} &= \\mathbf{r}_C - \\mathbf{r}_D \\cr &= \\begin{pmatrix} 6 - 4 \\cr 4 - 3 \\cr 5 - 7 \\end{pmatrix} \\cr &= \\begin{pmatrix} 2 \\cr 1 \\cr -2 \\end{pmatrix} \\end{aligned}",
        "For part <strong>(b)</strong>, to prove $ABCD$ is a rectangle, first show it is a parallelogram. Calculate the vector $\\vec{AB}$:<br><br>\\begin{aligned} \\vec{AB} &= \\mathbf{r}_B - \\mathbf{r}_A \\cr &= \\begin{pmatrix} 4 - 2 \\cr 0 - (-1) \\cr 1 - 3 \\end{pmatrix} \\cr &= \\begin{pmatrix} 2 \\cr 1 \\cr -2 \\end{pmatrix} \\end{aligned}",
        "Since $\\vec{AB} = \\vec{DC}$, the opposite sides are parallel and equal in length, confirming that $ABCD$ is a parallelogram.",
        "Next, calculate the vector of the adjacent side $\\vec{BC}$:<br><br>\\begin{aligned} \\vec{BC} &= \\mathbf{r}_C - \\mathbf{r}_B \\cr &= \\begin{pmatrix} 6 - 4 \\cr 4 - 0 \\cr 5 - 1 \\end{pmatrix} \\cr &= \\begin{pmatrix} 2 \\cr 4 \\cr 4 \\end{pmatrix} \\end{aligned}",
        "Calculate the dot product of the adjacent vectors $\\vec{AB}$ and $\\vec{BC}$ to check for perpendicularity:<br><br>\\begin{aligned} \\vec{AB} \\cdot \\vec{BC} &= \\begin{pmatrix} 2 \\cr 1 \\cr -2 \\end{pmatrix} \\cdot \\begin{pmatrix} 2 \\cr 4 \\cr 4 \\end{pmatrix} \\cr &= 2(2) + 1(4) + (-2)(4) \\cr &= 4 + 4 - 8 \\cr &= 0 \\end{aligned}",
        "Since the dot product is exactly zero ($\\vec{AB} \\cdot \\vec{BC} = 0$), the adjacent sides are perpendicular. A parallelogram with a right angle is a rectangle.",
        "To determine if the rectangle is a square, calculate the magnitudes of the adjacent sides $AB$ and $BC$:<br><br>\\begin{aligned} |\\vec{AB}| &= \\sqrt{ 2^2 + 1^2 + (-2)^2 } = \\sqrt{ 9 } = 3 \\cr |\\vec{BC}| &= \\sqrt{ 2^2 + 4^2 + 4^2 } = \\sqrt{ 4 + 16 + 16 } = \\sqrt{ 36 } = 6 \\end{aligned}",
        "Since adjacent sides are unequal ($|\\vec{AB}| = 3 \\neq 6 = |\\vec{BC}|$), the rectangle does not have equal sides. Therefore, $ABCD$ is not a square."
    ],
    "pi_options": [
        {
            "ans": "$$\\vec{DC} = \\begin{pmatrix} 2 \\cr 1 \\cr -2 \\end{pmatrix};$$<br>$$\\text{ABCD is a square because the adjacent sides are perpendicular and equal in length.}$$",
            "feedback": "This is incorrect. The adjacent sides actually have lengths of $3$ and $6$, which are unequal. A square must have equal adjacent side lengths."
        },
        {
            "ans": "$$\\vec{DC} = \\begin{pmatrix} -2 \\cr -1 \\cr 2 \\end{pmatrix};$$<br>$$\\text{ABCD is a rectangle because opposite sides are perpendicular.}$$",
            "feedback": "This represents a vector subtraction direction error. Additionally, opposite sides in a rectangle are parallel and equal, not perpendicular."
        },
        {
            "ans": "$$\\vec{DC} = \\begin{pmatrix} 2 \\cr 1 \\cr -2 \\end{pmatrix};$$<br>$$\\text{ABCD is a rhombus because adjacent sides are equal and perpendicular.}$$",
            "feedback": "This is conceptually incorrect. Rhombuses do not require adjacent sides to be perpendicular, and our adjacent side lengths are unequal."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Rectangle Conditions",
        "content": "A rectangle requires the dot product of adjacent vectors to be zero (confirming a right angle). If the adjacent magnitudes were also equal, the shape would upgrade to a square."
    }
},
{
    "id": "012029",
    "board": "AQA",
    "level": "A",
    "major_area": "Mechanics",
    "topic": "Vectors",
    "subtopic": [
        "3D Coordinate Geometry",
        "Collinearity"
    ],
    "img": false,
    "question": "The points $P$, $Q$, and $R$ have position vectors relative to a fixed origin $O$ given by:<br><br>$$\\mathbf{r}_P = \\begin{pmatrix} 2 \\cr -1 \\cr 5 \\end{pmatrix}, \\quad \\mathbf{r}_Q = \\begin{pmatrix} 5 \\cr 5 \\cr -1 \\end{pmatrix}, \\quad \\mathbf{r}_R = \\begin{pmatrix} 7 \\cr 9 \\cr -5 \\end{pmatrix}$$<br><strong>(a)</strong> Show that the points $P$, $Q$, and $R$ are collinear (i.e., they lie on the same straight line).<br><br><strong>(b)</strong> Find the ratio $PQ : QR$ in which $Q$ divides the line segment $PR$.",
    "steps": [
        "For part <strong>(a)</strong>, find the vectors $\\vec{PQ}$ and $\\vec{QR}$ to test if they are parallel:<br><br>\\begin{aligned} \\vec{PQ} &= \\mathbf{r}_Q - \\mathbf{r}_P = \\begin{pmatrix} 5 - 2 \\cr 5 - (-1) \\cr -1 - 5 \\end{pmatrix} = \\begin{pmatrix} 3 \\cr 6 \\cr -6 \\end{pmatrix} \\cr \\vec{QR} &= \\mathbf{r}_R - \\mathbf{r}_Q = \\begin{pmatrix} 7 - 5 \\cr 9 - 5 \\cr -5 - (-1) \\end{pmatrix} = \\begin{pmatrix} 2 \\cr 4 \\cr -4 \\end{pmatrix} \\end{aligned}",
        "Compare the two vectors to find if one is a scalar multiple of the other:<br><br>\\begin{aligned} \\vec{PQ} &= 3\\begin{pmatrix} 1 \\cr 2 \\cr -2 \\end{pmatrix} \\cr \\vec{QR} &= 2\\begin{pmatrix} 1 \\cr 2 \\cr -2 \\end{pmatrix} \\end{aligned}",
        "This shows that the vectors are scalar multiples of each other, meaning they are parallel:<br><br>$$\\vec{PQ} = 1.5\\vec{QR} \\quad \\left( \\text{or } \\vec{QR} = \\dfrac{ 2 }{ 3 }\\vec{PQ} \\right)$$$",
        "Since the vectors $\\vec{PQ}$ and $\\vec{QR}$ are parallel and share a common point $Q$, the three points $P$, $Q$, and $R$ must be collinear.",
        "For part <strong>(b)</strong>, find the magnitudes of $\\vec{PQ}$ and $\\vec{QR}$ to find the division ratio:<br><br>\\begin{aligned} |\\vec{PQ}| &= \\sqrt{ 3^2 + 6^2 + (-6)^2 } = \\sqrt{ 9 + 36 + 36 } = \\sqrt{ 81 } = 9 \\cr |\\vec{QR}| &= \\sqrt{ 2^2 + 4^2 + (-4)^2 } = \\sqrt{ 4 + 16 + 16 } = \\sqrt{ 36 } = 6 \\end{aligned}",
        "Express the ratio of the side lengths in its simplest integer form:<br><br>\\begin{aligned} PQ : QR &= 9 : 6 \\cr &= 3 : 2 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$\\vec{QR} = \\dfrac{ 3 }{ 2 }\\vec{PQ};$$<br>$$2 : 3$$",
            "feedback": "This error occurs if you calculated the ratio backwards. The question asks for the ratio of $PQ:QR$ which simplifies to $9:6 = 3:2$, not $2:3$."
        },
        {
            "ans": "$$\\vec{QR} = \\vec{PQ};$$<br>$$1 : 1$$",
            "feedback": "This is incorrect. The point $Q$ does not divide the segment as a midpoint, as the two sub-vectors have clearly unequal magnitudes ($9$ and $6$)."
        },
        {
            "ans": "$$\\vec{QR} = \\dfrac{ 1 }{ 3 }\\vec{PQ};$$<br>$$3 : 1$$",
            "feedback": "This represents a calculation slip when comparing the scalar coefficients of the two parallel vectors."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Proving Collinearity",
        "content": "To prove collinearity, show that one vector is a scalar multiple of the other (proving they are parallel) and state that they share a common point. The ratio of those scalar multipliers immediately gives you the division ratio!"
    }
},
{
    "id": "012030",
    "board": "AQA",
    "level": "A",
    "major_area": "Mechanics",
    "topic": "Vectors",
    "subtopic": [
        "3D Coordinate Geometry",
        "Direction Cosines"
    ],
    "img": false,
    "question": "A force vector $\\mathbf{F}$ acting on a particle is given by:<br><br>$$\\mathbf{F} = 4\\mathbf{i} - 12\\mathbf{j} + 3\\mathbf{k}$$$<br><strong>(a)</strong> Find the unit vector, $\\hat{\\mathbf{F}}$, in the direction of the force.<br><br><strong>(b)</strong> Find the angle, in degrees to one decimal place, that the force vector $\\mathbf{F}$ makes with the positive $y$-axis.",
    "steps": [
        "For part <strong>(a)</strong>, first calculate the magnitude of the force vector $\\mathbf{F}$ using Pythagoras' theorem in 3D:<br><br>\\begin{aligned} |\\mathbf{F}| &= \\sqrt{ 4^2 + (-12)^2 + 3^2 } \\cr &= \\sqrt{ 16 + 144 + 9 } \\cr &= \\sqrt{ 169 } \\cr &= 13 \\end{aligned}",
        "To find the unit vector $\\hat{\\mathbf{F}}$ in the direction of $\\mathbf{F}$, divide the original vector by its magnitude:<br><br>\\begin{aligned} \\hat{\\mathbf{F}} &= \\dfrac{ \\mathbf{F} }{ |\\mathbf{F}| } \\cr &= \\dfrac{ 1 }{ 13 }(4\\mathbf{i} - 12\\mathbf{j} + 3\\mathbf{k}) \\cr &= \\dfrac{ 4 }{ 13 }\\mathbf{i} - \\dfrac{ 12 }{ 13 }\\mathbf{j} + \\dfrac{ 3 }{ 13 }\\mathbf{k} \\end{aligned}",
        "For part <strong>(b)</strong>, recall that the angle $\\theta_y$ a vector makes with the positive $y$-axis is given by the direction cosine formula:<br><br>$$\\cos{ \\theta_y } = \\dfrac{ F_y }{ |\\mathbf{F}| }$$",
        "Substitute the $y$-component of the vector ($F_y = -12$) and the magnitude ($|\\mathbf{F}| = 13$):<br><br>$$\\cos{ \\theta_y } = \\dfrac{ -12 }{ 13 }$$",
        "Take the inverse cosine to find the angle $\\theta_y$. Note that the negative sign indicates the angle is obtuse:<br><br>\\begin{aligned} \\theta_y &= \\arccos\\left( -\\dfrac{ 12 }{ 13 } \\right) \\cr &\\approx 157.38^\\circ \\cr &\\approx 157.4^\\circ \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$\\hat{\\mathbf{F}} = \\dfrac{ 4 }{ 13 }\\mathbf{i} - \\dfrac{ 12 }{ 13 }\\mathbf{j} + \\dfrac{ 3 }{ 13 }\\mathbf{k};$$<br>$$153.6^\\circ$$",
            "feedback": "This represents a calculation or rounding error when finding the inverse cosine. Re-verify your evaluation of $\\arccos(-12/13)$."
        },
        {
            "ans": "$$\\hat{\\mathbf{F}} = \\dfrac{ 4 }{ 11 }\\mathbf{i} - \\dfrac{ 12 }{ 11 }\\mathbf{j} + \\dfrac{ 3 }{ 11 }\\mathbf{k};$$<br>$$22.6^\\circ$$",
            "feedback": "This indicates a dual error. The magnitude is $13$, not $11$. Additionally, $22.6^\\circ$ is the acute angle; because the $y$-component is negative, the angle with the positive $y$-axis is obtuse."
        },
        {
            "ans": "$$\\hat{\\mathbf{F}} = \\dfrac{ 4 }{ 13 }\\mathbf{i} + \\dfrac{ 12 }{ 13 }\\mathbf{j} + \\dfrac{ 3 }{ 13 }\\mathbf{k};$$<br>$$22.6^\\circ$$",
            "feedback": "This represents a sign error. By ignoring the negative sign on the $y$-component, you incorrectly calculated an acute angle of $22.6^\\circ$ instead of the correct obtuse angle of $157.4^\\circ$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Direction Cosines",
        "content": "When calculating the angle a 3D vector makes with an axis, always pay close attention to the sign of the component. A negative component (like $-12$ on the $y$-axis) means the angle is obtuse, so ensure your inverse trigonometric calculations reflect this!"
    }
},
{
    "id": "012031",
    "board": "AQA",
    "level": "A",
    "major_area": "Mechanics",
    "topic": "Kinematics",
    "subtopic": [
        "Projectiles",
        "2D Motion"
    ],
    "img": false,
    "question": "In this question, use $g = 9.8\\text{ m s}^{-2}$.<br><br>A particle is projected from a point on horizontal ground with an initial speed $u\\text{ m s}^{-1}$ at an angle of $30^\\circ$ above the horizontal. It lands at a point $12\\text{ metres}$ vertically below its starting position. The particle takes $1.8\\text{ seconds}$ to reach the highest point of its trajectory.<br><br><strong>(a)</strong> Find the value of $u$.<br><br><strong>(b)</strong> Find the total time, in seconds to three significant figures, that the particle is in flight.",
    "steps": [
        "For part <strong>(a)</strong>, analyze the vertical motion. At the highest point of the trajectory, the vertical component of the velocity is zero ($v_y = 0$).",
        "The initial vertical component of the velocity, $u_y$, is:<br><br>$$u_y = u\\sin{ 30^\\circ } = 0.5u$$",
        "Use the constant acceleration formula $v_y = u_y + at$ with vertical acceleration $a = -g = -9.8\\text{ m s}^{-2}$ and time $t = 1.8\\text{ seconds}$ to solve for $u$:<br><br>\\begin{aligned} 0 &= 0.5u - 9.8(1.8) \\cr 0.5u &= 17.64 \\cr u &= \\dfrac{ 17.64 }{ 0.5 } \\cr u &= 35.28 \\cr u &\\approx 35.3\\text{ m s}^{ -1 } \\end{aligned}",
        "For part <strong>(b)</strong>, find the total time of flight. The particle lands at a point $12\\text{ metres}$ vertically below its starting position, so the total vertical displacement is $s_y = -12\\text{ m}$.",
        "Use the constant acceleration displacement formula $s_y = u_y t + \\dfrac{ 1 }{ 2 } at^2$ to set up a quadratic equation in $t$, using $u_y = 17.64$ and $a = -9.8$:<br><br>\\begin{aligned} -12 &= 17.64t - 4.9t^2 \\cr 4.9t^2 - 17.64t - 12 &= 0 \\end{aligned}",
        "Solve the quadratic equation using the quadratic formula:<br><br>\\begin{aligned} t &= \\dfrac{ 17.64 \\pm \\sqrt{ (-17.64)^2 - 4(4.9)(-12) } }{ 2(4.9) } \\cr t &= \\dfrac{ 17.64 \\pm \\sqrt{ 311.17 + 235.20 } }{ 9.8 } \\cr t &= \\dfrac{ 17.64 \\pm \\sqrt{ 546.37 } }{ 9.8 } \\cr t &\\approx \\dfrac{ 17.64 \\pm 23.375 }{ 9.8 } \\end{aligned}",
        "Since time must be positive ($t > 0$), take the positive root:<br><br>\\begin{aligned} t &\\approx \\dfrac{ 17.64 + 23.375 }{ 9.8 } \\cr t &\\approx 4.19\\text{ s} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$u = 35.3\\text{ m s}^{ -1 };$$<br>$$t = 3.57\\text{ s}$$",
            "feedback": "This error occurs if you used an incorrect displacement of $s_y = -10$ (from the seed question) instead of the updated value $s_y = -12$ in part (b)."
        },
        {
            "ans": "$$u = 25.7\\text{ m s}^{ -1 };$$<br>$$t = 4.19\\text{ s}$$",
            "feedback": "This indicates a parameter slip in part (a). Ensure you use the updated highest point time $t = 1.8\\text{ s}$ and angle of projection $30^\\circ$ instead of yesterday's seed parameters."
        },
        {
            "ans": "$$u = 35.3\\text{ m s}^{ -1 };$$<br>$$t = 3.12\\text{ s}$$",
            "feedback": "This represents an algebraic sign error in part (b). You likely used a positive displacement $s_y = +12\\text{ m}$ instead of a negative displacement, assuming the landing point was above the projection point."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Displacement Signs in Projectiles",
        "content": "Always pay close attention to the landing position of a projectile. If it lands below its starting point, its vertical displacement is negative ($s_y = -12\\text{ m}$). Using a positive value represents landing on a raised platform, which will lead to an incorrect flight time!"
    }
},
{
    "id": "012032",
    "board": "AQA",
    "level": "A",
    "major_area": "Mechanics",
    "topic": "Kinematics",
    "subtopic": [
        "Projectiles",
        "Horizontal Range"
    ],
    "img": false,
    "question": "In this question, use $g = 9.8\\text{ m s}^{-2}$.<br><br>A stone is projected from a point on horizontal ground with an initial velocity of $20\\text{ m s}^{-1}$ at an angle of $40^\\circ$ above the horizontal.<br><br><strong>(a)</strong> Find the total time, in seconds to three significant figures, that the stone is in the air.<br><br><strong>(b)</strong> Find the horizontal distance (the range), in metres to three significant figures, travelled by the stone before it hits the ground.",
    "steps": [
        "For part <strong>(a)</strong>, find the vertical component of the initial velocity, $u_y$:<br><br>$$u_y = 20\\sin{ 40^\\circ } \\approx 12.856\\text{ m s}^{ -1 }$$",
        "Because the stone lands on horizontal ground at the same vertical level from which it was projected, the net vertical displacement is zero ($s_y = 0$).",
        "Use the vertical displacement formula $s_y = u_y t + \\dfrac{ 1 }{ 2 } at^2$ with $a = -g = -9.8\\text{ m s}^{-2}$ to solve for the time of flight, $t$:<br><br>\\begin{aligned} 0 &= 12.856t - 4.9t^2 \\cr 0 &= t(12.856 - 4.9t) \\end{aligned}",
        "Since $t > 0$ during the flight, solve the linear part of the factored equation:<br><br>\\begin{aligned} 12.856 - 4.9t &= 0 \\cr 4.9t &= 12.856 \\cr t &= \\dfrac{ 12.856 }{ 4.9 } \\cr t &\\approx 2.62\\text{ s} \\end{aligned}",
        "For part <strong>(b)</strong>, find the horizontal component of the initial velocity, $u_x$:<br><br>$$u_x = 20\\cos{ 40^\\circ } \\approx 15.321\\text{ m s}^{ -1 }$$",
        "Because air resistance is neglected, horizontal velocity remains constant throughout the flight. Calculate the horizontal range, $s_x$, by multiplying the horizontal velocity by the total time of flight, $t = 2.624\\text{ s}$:<br><br>\\begin{aligned} s_x &= u_x \\times t \\cr s_x &= 15.321 \\times 2.624 \\cr s_x &\\approx 40.2\\text{ m} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$t = 2.62\\text{ s};$$<br>$$s_x = 30.6\\text{ m}$$",
            "feedback": "This error occurs if you used the vertical velocity component $u_y$ instead of the horizontal component $u_x$ when calculating the horizontal range in part (b)."
        },
        {
            "ans": "$$t = 1.31\\text{ s};$$<br>$$s_x = 40.2\\text{ m}$$",
            "feedback": "This indicates a time slip where you used the time to reach maximum height ($t = 1.31\\text{ s}$) instead of the total flight time in air ($t = 2.62\\text{ s}$) to represent the total journey duration."
        },
        {
            "ans": "$$t = 2.62\\text{ s};$$<br>$$s_x = 52.5\\text{ m}$$",
            "feedback": "This represents a calculation error, likely from an incorrect trigonometric evaluation of the velocity components."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Horizontal Velocity is Constant",
        "content": "Unless air resistance is explicitly mentioned, the horizontal component of a projectile's velocity ($u_x = u\\cos{ \\theta }$) remains completely constant. This means the horizontal range is always a simple calculation of $\\text{Distance} = \\text{Speed} \\times \\text{Time}$."
    }
},
{
    "id": "012033",
    "board": "AQA",
    "level": "A",
    "major_area": "Mechanics",
    "topic": "Kinematics",
    "subtopic": [
        "Projectiles",
        "Horizontal Launches"
    ],
    "img": false,
    "question": "In this question, use $g = 9.8\\text{ m s}^{-2}$.<br><br>A ball is projected horizontally with speed $U\\text{ m s}^{-1}$ from the top of a vertical cliff of height $44.1\\text{ metres}$. The ball lands on the horizontal ground at a distance of $36\\text{ metres}$ from the foot of the cliff.<br><br><strong>(a)</strong> Find the time of flight of the ball, in seconds.<br><br><strong>(b)</strong> Find the value of $U$.",
    "steps": [
        "For part <strong>(a)</strong>, analyze the vertical motion of the ball. Because the ball is projected horizontally, its initial vertical velocity is zero ($u_y = 0$).",
        "Set the vertical displacement to $s_y = -44.1\\text{ m}$ (since the ball falls downwards from the top of the cliff) and the vertical acceleration to $a = -g = -9.8\\text{ m s}^{-2}$.",
        "Use the vertical displacement formula $s_y = u_y t + \\dfrac{ 1 }{ 2 } at^2$ to solve for the time of flight, $t$:<br><br>\\begin{aligned} -44.1 &= 0 - 4.9t^2 \\cr 4.9t^2 &= 44.1 \\cr t^2 &= \\dfrac{ 44.1 }{ 4.9 } \\cr t^2 &= 9 \\cr t &= 3.0\\text{ s} \\end{aligned}",
        "For part <strong>(b)</strong>, analyze the horizontal motion. The horizontal component of the velocity is constant at $U\\text{ m s}^{-1}$, and the horizontal distance covered is $s_x = 36\\text{ m}$.",
        "Use the horizontal motion formula $s_x = U \\times t$ with $t = 3.0\\text{ s}$ to solve for $U$:<br><br>\\begin{aligned} 36 &= U \\times 3.0 \\cr U &= \\dfrac{ 36 }{ 3.0 } \\cr U &= 12 \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$t = 4.5\\text{ s};$$<br>$$U = 8.0$$",
            "feedback": "This error occurs if you used an incorrect value for acceleration due to gravity, or made an arithmetic error when evaluating $t^2 = \\dfrac{ 44.1 }{ 4.9 } = 9$."
        },
        {
            "ans": "$$t = 3.0\\text{ s};$$<br>$$U = 10.8$$",
            "feedback": "This represents a calculation slip when dividing the horizontal range of $36\\text{ m}$ by the flight duration of $3\\text{ s}$ in the final step."
        },
        {
            "ans": "$$t = 3.0\\text{ s};$$<br>$$U = 15.0$$",
            "feedback": "This is a calculation error, likely arising from misinterpreting the initial vertical components of the horizontal projection."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Horizontal Launch Simplicity",
        "content": "Horizontal projection means the initial vertical velocity component is zero ($u_y = 0$). This decouples the vertical calculation and makes finding the time of flight a simple, direct square root calculation!"
    }
},
{
    "id": "012034",
    "board": "AQA",
    "level": "A",
    "major_area": "Mechanics",
    "topic": "Kinematics",
    "subtopic": [
        "Projectiles",
        "Trajectory Limits"
    ],
    "img": false,
    "question": "In this question, use $g = 9.8\\text{ m s}^{-2}$.<br><br>A particle is projected from a point $O$ on horizontal ground with speed $28\\text{ m s}^{-1}$. At the instant when the particle is at its maximum height, it has travelled a horizontal distance of $24\\text{ metres}$ from $O$.<br><br>For the larger of the two possible angles of projection:<br><br><strong>(a)</strong> Find the angle of projection, $\\theta$, in degrees to one decimal place.<br><br><strong>(b)</strong> Find the time taken, in seconds to three significant figures, for the particle to reach its maximum height.",
    "steps": [
        "Analyze the geometric symmetry of projectiles. On horizontal ground, maximum height occurs exactly at half of the total horizontal range. Therefore, the total horizontal range, $R$, is:<br><br>$$R = 2 \\times 24 = 48\\text{ m}$$",
        "Recall the formula for the horizontal range of a projectile: $R = \\dfrac{ u^2\\sin{ 2\\theta } }{ g }$. Substitute $R = 48$, $u = 28$, and $g = 9.8$ into the formula:<br><br>\\begin{aligned} 48 &= \\dfrac{ 28^2\\sin{ 2\\theta } }{ 9.8 } \\cr 48 &= \\dfrac{ 784\\sin{ 2\\theta } }{ 9.8 } \\cr 48 &= 80\\sin{ 2\\theta } \\end{aligned}",
        "Solve for $\\sin{ 2\\theta }$:<br><br>\\begin{aligned} \\sin{ 2\\theta } &= \\dfrac{ 48 }{ 80 } \\cr \\sin{ 2\\theta } &= 0.6 \\end{aligned}",
        "Find the two possible values for $2\\theta$ within the range $0^\\circ < 2\\theta < 180^\\circ$:<br><br>\\begin{aligned} 2\\theta &= \\arcsin{ 0.6 } \\approx 36.87^\\circ \\cr 2\\theta &= 180^\\circ - 36.87^\\circ = 143.13^\\circ \\end{aligned}",
        "Divide by $2$ to find the two possible projection angles, $\\theta$:<br><br>$$\\theta \\approx 18.4^\\circ \\quad \\text{or} \\quad \\theta \\approx 71.6^\\circ$$",
        "For part <strong>(a)</strong>, the question asks for the larger of the two angles of projection, so select:<br><br>$$\\theta \\approx 71.6^\\circ$$",
        "For part <strong>(b)</strong>, find the time to reach maximum height, $t$. At maximum height, the vertical velocity is zero ($v_y = 0$):<br><br>\\begin{aligned} 0 &= u_y - gt \\cr 0 &= 28\\sin{ 71.565^\\circ } - 9.8t \\cr 9.8t &= 26.56 \\cr t &= \\dfrac{ 26.56 }{ 9.8 } \\cr t &\\approx 2.71\\text{ s} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$\\theta = 68.6^\\circ;$$<br>$$t = 2.66\\text{ s}$$",
            "feedback": "This represents a calculation error, likely caused by making an arithmetic slip when dividing the range equation constants."
        },
        {
            "ans": "$$\\theta = 71.6^\\circ;$$<br>$$t = 0.90\\text{ s}$$",
            "feedback": "This indicates a setup slip where you calculated the time of flight for the smaller angle of projection ($18.4^\\circ$) instead of the larger angle ($71.6^\\circ$) requested by the question."
        },
        {
            "ans": "$$\\theta = 18.4^\\circ;$$<br>$$t = 2.71\\text{ s}$$",
            "feedback": "This error occurs if you selected the smaller of the two possible angles of projection in part (a) but paired it with the time of flight from the larger angle."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Complementary Launch Angles",
        "content": "For any ground-to-ground projectile, there are always two complementary launch angles (adding to $90^\\circ$) that yield the exact same horizontal range. The larger angle ($71.6^\\circ$) results in a high, lofted trajectory with a longer flight time, while the smaller angle ($18.4^\\circ$) gives a low, flat trajectory with a short flight time!"
    }
},
{
    "id": "012035",
    "board": "AQA",
    "level": "A",
    "major_area": "Mechanics",
    "topic": "Kinematics",
    "subtopic": [
        "Projectiles",
        "Trajectory Equation"
    ],
    "img": false,
    "question": "In this question, use $g = 9.8\\text{ m s}^{-2}$.<br><br>A particle is projected from the origin $O$ with speed $14\\text{ m s}^{-1}$ at an angle $\\theta$ above the horizontal.<br><br><strong>(a)</strong> Show that the Cartesian equation of the trajectory of the particle is given by:<br><br>$$y = x \\tan \\theta - \\dfrac{ 1 }{ 40 } x^2 (1 + \\tan^2 \\theta)$$<br><strong>(b)</strong> Given that the particle passes through a point $P(10, 2.5)$, find the two possible values of $\\tan \\theta$.",
    "steps": [
        "For part <strong>(a)</strong>, write down the equations for horizontal and vertical displacements in terms of time $t$:<br><br>\\begin{aligned} x &= (u\\cos{ \\theta })t \\cr y &= (u\\sin{ \\theta })t - \\dfrac{ 1 }{ 2 }gt^2 \\end{aligned}",
        "Rearrange the horizontal displacement equation to express $t$ in terms of $x$:<br><br>$$t = \\dfrac{ x }{ u\\cos{ \\theta } }$$",
        "Substitute this expression for $t$ into the vertical displacement equation to eliminate time as a variable:<br><br>\\begin{aligned} y &= u\\sin{ \\theta }\\left( \\dfrac{ x }{ u\\cos{ \\theta } } \\right) - \\dfrac{ g }{ 2 }\\left( \\dfrac{ x }{ u\\cos{ \\theta } } \\right)^2 \\cr y &= x\\tan{ \\theta } - \\dfrac{ gx^2 }{ 2u^2\\cos^2{ \\theta } } \\end{aligned}",
        "Recall the trigonometric identity $\\dfrac{ 1 }{ \\cos^2{ \\theta } } = \\sec^2{ \\theta } = 1 + \\tan^2{ \\theta }$. Substitute $u = 14$ and $g = 9.8$ into the equation:<br><br>\\begin{aligned} y &= x\\tan{ \\theta } - \\dfrac{ 9.8x^2 }{ 2(14^2) }(1 + \\tan^2{ \\theta }) \\cr y &= x\\tan{ \\theta } - \\dfrac{ 9.8x^2 }{ 392 }(1 + \\tan^2{ \\theta }) \\cr y &= x\\tan{ \\theta } - \\dfrac{ 1 }{ 40 }x^2(1 + \\tan^2{ \\theta }) \\end{aligned}",
        "For part <strong>(b)</strong>, substitute the coordinate point $P(10, 2.5)$ into the trajectory equation to solve for $\\tan{ \\theta }$:<br><br>\\begin{aligned} 2.5 &= 10\\tan{ \\theta } - \\dfrac{ 10^2 }{ 40 }(1 + \\tan^2{ \\theta }) \\cr 2.5 &= 10\\tan{ \\theta } - 2.5(1 + \\tan^2{ \\theta }) \\end{aligned}",
        "Divide the entire equation by $2.5$ to simplify the coefficients and rearrange into a standard quadratic form:<br><br>\\begin{aligned} 1 &= 4\\tan{ \\theta } - (1 + \\tan^2{ \\theta }) \\cr 1 &= 4\\tan{ \\theta } - 1 - \\tan^2{ \\theta } \\cr \\tan^2{ \\theta } - 4\\tan{ \\theta } + 2 &= 0 \\end{aligned}",
        "Solve the quadratic equation in $\\tan{ \\theta }$ using the quadratic formula:<br><br>\\begin{aligned} \\tan{ \\theta } &= \\dfrac{ -(-4) \\pm \\sqrt{ (-4)^2 - 4(1)(2) } }{ 2(1) } \\cr \\tan{ \\theta } &= \\dfrac{ 4 \\pm \\sqrt{ 16 - 8 } }{ 2 } \\cr \\tan{ \\theta } &= \\dfrac{ 4 \\pm \\sqrt{ 8 } }{ 2 } \\cr \\tan{ \\theta } &= 2 \\pm \\sqrt{ 2 } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$\\tan \\theta = 1 \\quad \\text{and} \\quad 3;$$",
            "feedback": "This error occurs if you assumed the vertical coordinate of point $P$ was $2.0$ instead of $2.5$. If $y = 2.0$, the quadratic simplifies to have nice integer roots, but for $y = 2.5$ it yields the exact surd values $2 \\pm \\sqrt{2}$."
        },
        {
            "ans": "$$\\tan \\theta = 2 \\quad \\text{and} \\quad 4;$$",
            "feedback": "This represents a calculation slip when factorising or dividing the quadratic terms. Re-evaluate your standard quadratic coefficients carefully."
        },
        {
            "ans": "$$\\tan \\theta = 2 + \\sqrt{3} \\quad \\text{and} \\quad 2 - \\sqrt{3};$$",
            "feedback": "This indicates an error when calculating the discriminant $\\sqrt{b^2 - 4ac}$ under the quadratic formula, leading to an incorrect root value."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: The Trajectory Equation",
        "content": "The Cartesian trajectory equation is a highly powerful tool because it completely removes time as a variable, leaving a quadratic in $\\tan{ \\theta }$. This proves mathematically that there are almost always two possible launch angles that will hit a specific coordinate point in space!"
    }
},
{
    "id": "012036",
    "board": "AQA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Connected Particles",
    "subtopic": [
        "Horizontal Towing",
        "Newton's Laws"
    ],
    "img": false,
    "question": "A tractor is pulling a heavy trailer in a straight line along a horizontal road by means of a light, inextensible connecting rope.<br><ul><li>The combined mass of the tractor and driver is $1200\\text{ kg}$.</li><li>A constant horizontal driving force of $900\\text{ N}$ and a total resistance force of $400\\text{ N}$ act on the tractor.</li><li>The mass of the trailer is $600\\text{ kg}$.</li><li>A total resistance force of $R$ Newtons acts on the trailer.</li><li>The tractor and the trailer have a constant acceleration of $0.15\\text{ m s}^{-2}$.</li></ul><br><br><img src='images/Mechanics_pngs/012036.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><strong>(a) (i)</strong> Find the value of $R$.<br><br><strong>(a) (ii)</strong> Find the tension in the rope.<br><br><strong>(b)</strong> State one modelling assumption that has been made about the rope.<br><br><strong>(c) (i)</strong> The trailer releases the rope at a point $A$, when it reaches a speed of $8\\text{ m s}^{-1}$. It continues to move forward, experiencing the same resistance force, until it comes to rest at a point $B$.<br>Find the distance $AB$, in metres to three significant figures.<br><br><strong>(c) (ii)</strong> State one change that the driver will notice in the motion of the tractor immediately after the trailer releases the rope.",
    "steps": [
        "<strong>(a) (i) Find R:</strong><br>We can treat the tractor and trailer as a single combined system. The total mass is $1200 + 600 = 1800\\text{ kg}$. Apply Newton's Second Law ($F = ma$) in the direction of motion, noting that the tension $T$ is internal to the combined system and cancels out:<br><br>\\begin{aligned} F_{\\text{resultant}} &= m_{\\text{total}} a \\cr 900 - 400 - R &= 1800(0.15) \\cr 500 - R &= 270 \\cr R &= 500 - 270 \\cr R &= 230\\text{ N} \\end{aligned}",
        "<strong>(a) (ii) Find the tension T:</strong><br>Now consider only the trailer as a separate body. The only horizontal forces acting on it are the tension $T$ pulling it forward and the resistance $R = 230\\text{ N}$ opposing it. Apply $F = ma$:<br><br>\\begin{aligned} T - R &= m_{\\text{trailer}} a \\cr T - 230 &= 600(0.15) \\cr T - 230 &= 90 \\cr T &= 320\\text{ N} \\end{aligned}",
        "<strong>(b) Modelling Assumption:</strong><br>We assume that the connecting rope is: <br>1. <strong>Light</strong> (massless), which means the tension is uniform throughout its length.<br>2. <strong>Inextensible</strong> (does not stretch), which means both the tractor and trailer have the same acceleration.",
        "<strong>(c) (i) Find the distance AB:</strong><br>When the trailer releases the rope, the tension drops to zero ($T = 0$). The only horizontal force acting on the $600\\text{ kg}$ trailer is the resistance force $R = 230\\text{ N}$. Find the new deceleration $a$:<br><br>\\begin{aligned} -R &= m_{\\text{trailer}} a \\cr -230 &= 600a \\cr a &= -\\dfrac{ 230 }{ 600 } \\approx -0.3833\\text{ m s}^{ -2 } \\end{aligned}",
        "Use the constant acceleration formula $v^2 = u^2 + 2as$ with $u = 8\\text{ m s}^{-1}$, $v = 0$ (comes to rest), and $a = -0.3833\\text{ m s}^{-2}$ to solve for the distance $s = AB$:<br><br>\\begin{aligned} v^2 &= u^2 + 2as \\cr 0 &= 8^2 + 2(-0.3833)s \\cr 0.7667s &= 64 \\cr s &= \\dfrac{ 64 }{ 0.7667 } \\cr s &\\approx 83.5\\text{ m} \\end{aligned}",
        "<strong>(c) (ii) Immediate Change in Tractor's Motion:</strong><br>The tractor will immediately accelerate more rapidly. This is because the backward-acting tension force ($T = 320\\text{ N}$) on the tractor is suddenly removed, which increases the horizontal resultant force acting on the tractor from $180\\text{ N}$ to $500\\text{ N}$."
    ],
    "pi_options": [
        {
            "ans": "$$R = 270\\text{ N}; \\quad T = 360\\text{ N}; \\quad AB = 75.2\\text{ m};$$<br>$$\\text{Assumption: Smooth road. Tractor will maintain a constant velocity.}$$",
            "feedback": "This represents a calculation slip when applying Newton's Second Law to the combined system, which affects both the resistance $R$ and the tension $T$."
        },
        {
            "ans": "$$R = 230\\text{ N}; \\quad T = 320\\text{ N}; \\quad AB = 95.5\\text{ m};$$<br>$$\\text{Assumption: Negligible air resistance. Tractor will decelerate immediately.}$$",
            "feedback": "This indicates a vertical kinematic error when calculating the deceleration distance $AB$. Additionally, removing a resistive tension force causes the tractor to accelerate more rapidly, not decelerate."
        },
        {
            "ans": "$$R = 230\\text{ N}; \\quad T = 320\\text{ N}; \\quad AB = 83.5\\text{ m};$$<br>$$\\text{Assumption: Elastic rope. Tractor will stop completely.}$$",
            "feedback": "This is conceptually incorrect. In standard A-level mechanics models, ropes are modelled as inextensible, not elastic. If the rope were elastic, the bodies would not share a uniform acceleration."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Internal vs. External Forces",
        "content": "When resolving the tractor and trailer as a single combined system, the tension $T$ becomes an internal force and cancels out. This is a highly powerful trick to find the unknown resistance $R$ directly, without solving simultaneous equations first!"
    }
},
{
    "id": "012037",
    "board": "AQA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Connected Particles",
    "subtopic": [
        "Inclined Towing",
        "Newton's Laws"
    ],
    "img": false,
    "question": "A car is towing a caravan up a rough road inclined at $8^\\circ$ to the horizontal by means of a light, inextensible tow-bar.<br><ul><li>The mass of the car is $1200\\text{ kg}$ and the mass of the caravan is $800\\text{ kg}$.</li><li>The car exerts a constant driving force of $D$ Newtons parallel to the slope.</li><li>The resistance to motion is $150\\text{ N}$ on the caravan and $250\\text{ N}$ on the car.</li><li>The car and caravan accelerate uniformly up the plane at $0.4\\text{ m s}^{-2}$.</li></ul><br><img src='images/Mechanics_pngs/012037.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><strong>(a)</strong> Find the value of $D$, giving your answer to three significant figures.<br><br><strong>(b)</strong> Find the tension, in Newtons to three significant figures, in the tow-bar as they accelerate up the plane.",
    "steps": [
        "<strong>(a) Find the driving force D:</strong><br>Treat the car and caravan as a single combined system. The total mass is $1200 + 800 = 2000\\text{ kg}$. The total resistance force is $150 + 250 = 400\\text{ N}$.",
        "Calculate the component of the total weight acting down the slope:<br><br>$$W_x = m_{\\text{total}} g \\sin{ 8^\\circ } = 2000(9.8)\\sin{ 8^\\circ } \\approx 2727.8\\text{ N}$$",
        "Apply Newton's Second Law parallel to the inclined plane (taking up the slope as positive):<br><br>\\begin{aligned} D - R_{\\text{total}} - W_x &= m_{\\text{total}} a \\cr D - 400 - 2727.8 &= 2000(0.4) \\cr D - 3127.8 &= 800 \\cr D &= 3927.8 \\cr D &\\approx 3930\\text{ N} \\end{aligned}",
        "<strong>(b) Find the tension T:</strong><br>Consider only the caravan as a separate body. The forces acting on it parallel to the slope are: <br>1. Tension $T$ pulling it up the slope.<br>2. Caravan resistance force of $150\\text{ N}$ pulling it down.<br>3. Component of the caravan's weight acting down the slope:<br>$$W_{\\text{caravan}} = 800(9.8)\\sin{ 8^\\circ } \\approx 1091.1\\text{ N}$$",
        "Apply $F = ma$ to the caravan up the slope:<br><br>\\begin{aligned} T - R_{\\text{caravan}} - W_{\\text{caravan}} &= m_{\\text{caravan}} a \\cr T - 150 - 1091.1 &= 800(0.4) \\cr T - 1241.1 &= 320 \\cr T &= 1561.1 \\cr T &\\approx 1560\\text{ N} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$D = 1200\\text{ N}; \\quad T = 320\\text{ N}$$",
            "feedback": "This error occurs if you completely ignored gravity in both steps, forgetting that the vehicles are travelling up an inclined plane. You must resolve the weight component parallel to the slope."
        },
        {
            "ans": "$$D = 3530\\text{ N}; \\quad T = 1410\\text{ N}$$",
            "feedback": "This represents a calculation slip where you used an incorrect trig function (such as $\\cos{ 8^\\circ }$ instead of $\\sin{ 8^\\circ }$) when resolving the weight components parallel to the slope."
        },
        {
            "ans": "$$D = 3930\\text{ N}; \\quad T = 470\\text{ N}$$",
            "feedback": "This indicates an error in part (b). You likely omitted the caravan's weight component when resolving the caravan's forces. Both resistance and gravity oppose the upward tension force."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Inclined Connected Particles",
        "content": "When bodies are moving on an incline, never forget to resolve their weights parallel to the slope ($mg\\sin{ \\theta }$). This weight component acts as a backward resistive force that must be added to the physical resistance forces in your $F = ma$ equations!"
    }
},
{
    "id": "012038",
    "board": "AQA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Connected Particles",
    "subtopic": [
        "Vertical Motion",
        "Newton's Laws"
    ],
    "img": false,
    "question": "A lift of mass $500\\text{ kg}$ contains a passenger of mass $80\\text{ kg}$. The lift is pulled vertically upwards by a light, inextensible cable. The lift accelerates uniformly upwards at a rate of $1.2\\text{ m s}^{-2}$.<br><br><img src='images/Mechanics_pngs/012038.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><strong>(a)</strong> Find the tension in the cable.<br><br><strong>(b)</strong> Find the normal reaction force exerted by the floor of the lift on the passenger.",
    "steps": [
        "<strong>(a) Find the tension in the cable:</strong><br>Treat the lift and passenger as a single combined system of total mass $500 + 80 = 580\\text{ kg}$. Apply Newton's Second Law vertically upwards:<br><br>\\begin{aligned} T - m_{\\text{total}} g &= m_{\\text{total}} a \\cr T - 580(9.8) &= 580(1.2) \\cr T - 5684 &= 696 \\cr T &= 6380\\text{ N} \\end{aligned}",
        "<strong>(b) Find the normal reaction R:</strong><br>Consider only the passenger of mass $80\\text{ kg}$ inside the lift. The vertical forces acting on the passenger are: <br>1. Normal reaction $R$ pointing upwards from the floor.<br>2. Weight of the passenger ($80g$) pointing downwards.",
        "Apply Newton's Second Law to the passenger vertically upwards:<br><br>\\begin{aligned} R - m_{\\text{pass}} g &= m_{\\text{pass}} a \\cr R - 80(9.8) &= 80(1.2) \\cr R - 784 &= 96 \\cr R &= 880\\text{ N} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$T = 5684\\text{ N}; \\quad R = 784\\text{ N}$$",
            "feedback": "This represents a static error. You likely assumed the lift was stationary (or moving at constant speed), setting tension and reaction equal to the weights. Since it is accelerating, the forces must exceed the weights."
        },
        {
            "ans": "$$T = 696\\text{ N}; \\quad R = 96\\text{ N}$$",
            "feedback": "This indicates an algebraic error where you set the upward forces equal to $ma$ alone, completely omitting the gravitational weights ($mg$) from the equations."
        },
        {
            "ans": "$$T = 6380\\text{ N}; \\quad R = 688\\text{ N}$$",
            "feedback": "This is a sign error in part (b). You likely resolved the passenger's equation as $R = m(g - a)$ instead of $R = m(g + a)$. Accelerating upwards increases the normal reaction force."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Apparent Weight",
        "content": "When accelerating vertically upwards, the normal reaction force $R = m(g+a)$ is greater than the passenger's static weight $mg$. This is why you feel heavier when a lift first starts moving upwards—your 'apparent weight' has increased!"
    }
},
{
    "id": "012039",
    "board": "AQA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Connected Particles",
    "subtopic": [
        "Pulleys",
        "Newton's Laws"
    ],
    "img": false,
    "question": "Two blocks, of mass $5\\text{ kg}$ and $3\\text{ kg}$, are connected by a light, inextensible string passing over a smooth, fixed pulley suspended from a ceiling. The blocks are released from rest.<br><br><img src='images/Mechanics_pngs/012039.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><strong>(a)</strong> Find the acceleration, in $\\text{m s}^{-2}$, of the blocks.<br><br><strong>(b)</strong> Find the tension in the string.<br><br><strong>(c)</strong> Find the force exerted by the string on the pulley.",
    "steps": [
        "<strong>(a) Find the acceleration:</strong><br>Let $a$ be the acceleration of the system. The heavier $5\\text{ kg}$ mass moves downwards, and the lighter $3\\text{ kg}$ mass moves upwards with the same acceleration. Write down the equation of motion for each block:",
        "1. For the $5\\text{ kg}$ block (moving downwards):<br>$$5g - T = 5a$$<br>2. For the $3\\text{ kg}$ block (moving upwards):<br>$$T - 3g = 3a$$",
        "Add these two equations together to eliminate $T$ and solve for $a$:<br><br>\\begin{aligned} 5g - 3g &= 8a \\cr 2g &= 8a \\cr a &= \\dfrac{ 2(9.8) }{ 8 } \\cr a &= 2.45\\text{ m s}^{ -2 } \\end{aligned}",
        "<strong>(b) Find the tension T:</strong><br>Substitute $a = 2.45$ into the equation of motion for the $3\\text{ kg}$ block:<br><br>\\begin{aligned} T - 3g &= 3a \\cr T - 3(9.8) &= 3(2.45) \\cr T - 29.4 &= 7.35 \\cr T &= 36.75\\text{ N} \\end{aligned}",
        "<strong>(c) Find the force exerted on the pulley:</strong><br>The string hangs down on both sides of the pulley, so there are two upward tension forces ($T$) pulling downwards on the pulley wheel. The resultant force $F$ exerted by the string on the pulley is:<br><br>\\begin{aligned} F &= 2T \\cr &= 2(36.75) \\cr &= 73.5\\text{ N} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$a = 2.45\\text{ m s}^{ -2 }; \\quad T = 36.75\\text{ N}; \\quad F = 36.75\\text{ N}$$",
            "feedback": "This is a common error in part (c). The string pulls downwards on the pulley from both sides, so the total force exerted on the pulley is $2T$, not $T$."
        },
        {
            "ans": "$$a = 9.80\\text{ m s}^{ -2 }; \\quad T = 29.40\\text{ N}; \\quad F = 58.80\\text{ N}$$",
            "feedback": "This represents a major error where the tension $T$ was neglected during acceleration calculations, assuming the heavier mass falls under pure gravity."
        },
        {
            "ans": "$$a = 2.45\\text{ m s}^{ -2 }; \\quad T = 29.40\\text{ N}; \\quad F = 58.80\\text{ N}$$",
            "feedback": "This represents a calculation slip in part (b) where you equated the tension $T$ to the static weight of the $3\\text{ kg}$ block, ignoring its upward acceleration."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Forces on Pulleys",
        "content": "Students frequently make the mistake of setting the force on the pulley equal to $T$. Because the string wraps over the top and hangs down both sides, it pulls downwards with a tension $T$ on both the left and right, resulting in a total downward force of $2T$ on the pulley wheel!"
    }
},
{
    "id": "012040",
    "board": "AQA",
    "level": "AS",
    "major_area": "Mechanics",
    "topic": "Connected Particles",
    "subtopic": [
        "Pulleys on Inclined Planes",
        "Static Equilibrium"
    ],
    "img": false,
    "question": "A block $A$ of mass $8\\text{ kg}$ is held on a rough plane inclined at $30^\\circ$ to the horizontal. The coefficient of friction between block $A$ and the plane is $0.25$.<br><br>Block $A$ is connected by a light, inextensible string passing parallel to the line of greatest slope over a smooth pulley at the top of the incline to a hanging block $B$ of mass $M\\text{ kg}$.<br><br>Given that the system is in limiting equilibrium and block $A$ is on the point of sliding <strong>up</strong> the plane:<br><br><img src='images/Mechanics_pngs/012040.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br><strong>(a)</strong> Find the normal reaction force, in Newtons to three significant figures, acting on block $A$.<br><br><strong>(b)</strong> Find the value of $M$, giving your answer to three significant figures.",
    "steps": [
        "<strong>(a) Find the normal reaction force acting on A:</strong><br>Resolve the forces acting on block $A$ perpendicular to the inclined plane:<br><br>\\begin{aligned} R_A &= 8g\\cos{ 30^\\circ } \\cr &= 78.4 \\times 0.86603 \\cr &\\approx 67.9\\text{ N} \\end{aligned}",
        "<strong>(b) Find the value of M:</strong><br>First, calculate the maximum possible frictional force, $F_{\\text{max}}$, acting on block $A$:<br><br>$$F_{\\text{max}} = \\mu R_A = 0.25 \\times 67.896 = 16.974\\text{ N}$$",
        "Because block $A$ is on the point of sliding <strong>up</strong> the plane, the frictional force opposes this motion and acts <strong>down</strong> the plane. Therefore, both friction ($F_{\\text{max}}$) and the component of weight along the slope ($8g\\sin{ 30^\\circ }$) pull block $A$ down the incline.",
        "Apply the equilibrium condition to block $A$ parallel to the slope (tension $T$ pulling up must balance all opposing forces pulling down):<br><br>\\begin{aligned} T &= F_{\\text{max}} + 8g\\sin{ 30^\\circ } \\cr T &= 16.974 + 8(9.8)\\sin{ 30^\\circ } \\cr T &= 16.974 + 39.200 \\cr T &= 56.174\\text{ N} \\end{aligned}",
        "Next, analyze block $B$. Since block $B$ is hanging in equilibrium, the tension $T$ in the string must be exactly balanced by its weight ($Mg$):<br><br>$$T = Mg \\implies 56.174 = M(9.8)$$",
        "Solve for $M$:<br><br>\\begin{aligned} M &= \\dfrac{ 56.174 }{ 9.8 } \\cr M &\\approx 5.73\\text{ kg} \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$$R_A = 67.9\\text{ N}; \\quad M = 2.27$$",
            "feedback": "This error occurs if you assumed block A was on the point of sliding down the plane. If it were sliding down, the friction would act up the plane ($T = 39.200 - 16.974 = 22.226\\text{ N}$), but because it is sliding up, friction acts down the plane."
        },
        {
            "ans": "$$R_A = 78.4\\text{ N}; \\quad M = 4.00$$",
            "feedback": "This is a non-inclined error. It occurs if you forgot to resolve forces parallel and perpendicular to the inclined plane, treating the table surface as if it were completely flat."
        },
        {
            "ans": "$$R_A = 67.9\\text{ N}; \\quad M = 4.00$$",
            "feedback": "This represents a calculation slip where the frictional force component was completely omitted from the tension equation in part (b)."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Direction of Impending Motion",
        "content": "In limiting equilibrium problems, always verify the direction of impending motion! Because block A is on the point of sliding up the plane, the friction force acts down the slope, opposing the tension. If it were on the point of sliding down, friction would point up the slope."
    }
},
{
   "id": "012041",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Motion under gravity",
    "subtopic": [
        "Constant acceleration",
        "Vertical motion under gravity"
    ],
    "img": false,
    "question": "A girl throws a small stone vertically upwards from a bridge. At the instant the stone leaves her hand, it is $9\\text{ m }$ above the water below and is moving with a speed of $12\\text{ m s}^{ -1 }$. The motion of the stone is modelled as that of a particle moving freely under gravity, and the acceleration due to gravity is modelled as being of constant magnitude $10\\text{ m s}^{ -2 }$. The stone hits the water $T$ seconds after leaving the girl's hand.<br><br>Using the model, find the value of $T$.",
    "steps": [
        "Set up the parameters for the motion, taking the vertically upwards direction as positive:<br>• Initial velocity, $u = 12\\text{ m s}^{ -1 }$<br>• Displacement, $s = -9\\text{ m }$ (since the water is below the starting point)<br>• Acceleration, $a = -10\\text{ m s}^{ -2 }$",
        "Substitute these values into the constant acceleration equation $s = ut + \\dfrac{ 1 }{ 2 }at^2$:<br><br>\\begin{aligned} -9 &= 12T + \\dfrac{ 1 }{ 2 }(-10)T^2 \\cr -9 &= 12T - 5T^2 \\end{aligned}",
        "Rearrange the equation to form a standard quadratic equation equal to zero:<br><br>\\begin{aligned} 5T^2 - 12T - 9 = 0 \\end{aligned}",
        "Factorise the quadratic expression to solve for $T$:<br><br>\\begin{aligned} (5T + 3)(T - 3) = 0 \\end{aligned}",
        "This gives two possible mathematical solutions:<br><br>\\begin{aligned} T = 3 \\quad \\text{ or } \\quad T = -0.6 \\end{aligned}<br><br>Since time $T$ must be greater than zero, we choose the positive solution. Therefore, $T = 3\\text{ seconds }$."
    ],
    "pi_options": [
        {
            "ans": "$T = 0.6$",
            "feedback": "This occurs if you model the initial velocity as vertically downwards ($u = -12\\text{ m s}^{ -1 }$) instead of vertically upwards. Check the direction of projection specified in the question."
        },
        {
            "ans": "$T = 1.2$",
            "feedback": "This is the time taken for the stone to reach its maximum height where $v = 0$. The question asks for the total time $T$ until the stone hits the water, not just the ascent time."
        },
        {
            "ans": "$T = 1$",
            "feedback": "This value arises from a sign or factorisation error in the quadratic equation, such as factorising $5T^2 - 12T - 9 = 0$ incorrectly. Always expand your brackets to verify they reconstruct the original quadratic."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Watch the Given Constants",
        "content": "Pay close attention to the value of $g$ specified in the question. While $9.8$ is the standard physical constant, this question explicitly specifies $10\\text{ m s}^{ -2 }$. Using the wrong constant will lead to messy decimals and a loss of accuracy marks."
    }
},
{
    "id": "012042",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Motion under gravity",
    "subtopic": [
        "Constant acceleration",
        "Vertical motion under gravity"
    ],
    "img": false,
    "question": "A boy throws a ball vertically upwards from a balcony that is $14.7\\text{ m }$ above the horizontal ground. The ball is thrown with an initial speed of $9.8\\text{ m s}^{ -1 }$. The motion of the ball is modelled as that of a particle moving freely under gravity, and the acceleration due to gravity is modelled as being of constant magnitude $9.8\\text{ m s}^{ -2 }$.<br><br>Using the model, find the time, $T$ seconds, from when the ball is thrown to when it hits the ground.",
    "steps": [
        "Set up the motion parameters with the vertically upwards direction defined as positive:<br>• Initial velocity, $u = 9.8\\text{ m s}^{ -1 }$<br>• Displacement, $s = -14.7\\text{ m }$ (since the ground is below the balcony)<br>• Acceleration, $a = -9.8\\text{ m s}^{ -2 }$",
        "Substitute these parameters into the constant acceleration formula $s = ut + \\dfrac{ 1 }{ 2 }at^2$:<br><br>\\begin{aligned} -14.7 &= 9.8T + \\dfrac{ 1 }{ 2 }(-9.8)T^2 \\cr -14.7 &= 9.8T - 4.9T^2 \\end{aligned}",
        "Simplify the quadratic equation by dividing every term by $4.9$:<br><br>\\begin{aligned} 4.9T^2 - 9.8T - 14.7 &= 0 \\cr T^2 - 2T - 3 &= 0 \\end{aligned}",
        "Factorise the simplified quadratic equation:<br><br>\\begin{aligned} (T - 3)(T + 1) = 0 \\end{aligned}",
        "Solve for $T$:<br><br>\\begin{aligned} T = 3 \\quad \\text{ or } \\quad T = -1 \\end{aligned}<br><br>Since time $T$ must be positive, we reject the negative solution. Thus, $T = 3\\text{ seconds }$."
    ],
    "pi_options": [
        {
            "ans": "$T = 1$",
            "feedback": "This result occurs if you assume the initial velocity is downwards ($u = -9.8\\text{ m s}^{ -1 }$), which alters the quadratic to $T^2 + 2T - 3 = 0$. Remember that the ball is projected upwards."
        },
        {
            "ans": "$T = 2$",
            "feedback": "This is a common error resulting from forgetting to multiply the acceleration term by $\\dfrac{ 1 }{ 2 }$ in the equation $s = ut + \\dfrac{ 1 }{ 2 }at^2$, leading to an incorrect quadratic."
        },
        {
            "ans": "$T = 1.5$",
            "feedback": "This represents calculating only the ascent time (the time taken to reach maximum height where $v = 0$), plus an incorrect scaling factor. Make sure to solve the full displacement quadratic to find the total time of flight."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Spotting Common Factors",
        "content": "When $u$ and $g$ are multiples of each other (such as $9.8$ and $4.9$), look to simplify the quadratic by dividing through before using your calculator. Here, dividing by $4.9$ turns a messy expression into a simple, factorable GCSE quadratic: $T^2 - 2T - 3 = 0$."
    }
},
{
    "id": "012043",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Motion under gravity",
    "subtopic": [
        "Constant acceleration",
        "Vertical motion under gravity",
        "Displacement and distance"
    ],
    "img": false,
    "question": "A particle is projected vertically upwards with speed $20\\text{ m s}^{ -1 }$ from a point $25\\text{ m }$ above horizontal ground. The particle moves freely under gravity, with the acceleration due to gravity modelled as being of constant magnitude $10\\text{ m s}^{ -2 }$.<br><br>Find the total distance travelled by the particle from the instant of projection to the instant it hits the ground.",
    "steps": [
        "Identify that total distance is different from displacement. To find total distance, we must compute the upward climb to maximum height and the subsequent downward fall to the ground separately.",
        "Calculate the distance travelled upwards to the peak where velocity $v = 0$. Using the formula $v^2 = u^2 + 2as$ with upwards as positive:<br><br>\\begin{aligned} 0^2 &= 20^2 + 2(-10)s_1 \\cr 0 &= 400 - 20s_1 \\cr 20s_1 &= 400 \\cr s_1 &= 20\\text{ m } \\end{aligned}<br><br>Thus, the particle climbs $20\\text{ m }$ upwards from the projection point.",
        "Determine the total height of the peak above the horizontal ground:<br><br>\\begin{aligned} \\text{ Peak Height } &= 25\\text{ m } + 20\\text{ m } \\cr &= 45\\text{ m } \\end{aligned}",
        "Calculate the total distance travelled by adding the upward journey and the downward journey:<br>• Distance up = $20\\text{ m }$<br>• Distance down = $45\\text{ m }$ (from peak to ground)<br><br>\\begin{aligned} \\text{ Total Distance } &= 20\\text{ m } + 45\\text{ m } \\cr &= 65\\text{ m } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "$25\\text{ m}$",
            "feedback": "This is the magnitude of the final displacement, which only measures the straight-line distance between the start point and the end point. Total distance must account for the entire path travelled."
        },
        {
            "ans": "$45\\text{ m}$",
            "feedback": "This is the maximum height reached above the ground. To find the total distance, you must add the initial $20\\text{ m}$ ascent to this downward descent of $45\\text{ m}$."
        },
        {
            "ans": "$40\\text{ m}$",
            "feedback": "This is the total distance for the round trip back to the point of projection ($20\\text{ m}$ up and $20\\text{ m}$ down), which neglects the final $25\\text{ m}$ fall from the projection level to the ground."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Distance vs. Displacement",
        "content": "Total distance is a scalar representing the actual path length, whereas displacement is a vector representing the change in position. Do not confuse the two! Always sketch or track the physical path: $20\\text{ m}$ up, then $45\\text{ m}$ down, giving a total of $65\\text{ m}$."
    }
},
{
    "id": "012044",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Motion under gravity",
    "subtopic": [
        "Constant acceleration",
        "Vertical motion under gravity"
    ],
    "img": false,
    "question": "A small ball is thrown vertically upwards from a platform that is $15\\text{ m }$ above horizontal ground. The ball is modelled as a particle moving freely under gravity, and the acceleration due to gravity is modelled as being of constant magnitude $10\\text{ m s}^{ -2 }$.<br><br>Given that the ball hits the ground $3$ seconds after it is released, find the speed with which it was initially thrown.",
    "steps": [
        "Define the SUVAT parameters with vertically upwards as the positive direction:<br>• Displacement, $s = -15\\text{ m }$ (since the ball lands below the platform)<br>• Time, $t = 3\\text{ s }$<br>• Acceleration, $a = -10\\text{ m s}^{ -2 }$<br>• Initial velocity, $u$ (to be found)",
        "Substitute these values into the constant acceleration equation $s = ut + \\dfrac{ 1 }{ 2 }at^2$:<br><br>\\begin{aligned} -15 &= u(3) + \\dfrac{ 1 }{ 2 }(-10)(3)^2 \\cr -15 &= 3u - 5(9) \\cr -15 &= 3u - 45 \\end{aligned}",
        "Rearrange the equation to isolate $u$:<br><br>\\begin{aligned} 3u &= 45 - 15 \\cr 3u &= 30 \\cr u &= 10\\text{ m s}^{ -1 } \\end{aligned}<br><br>The initial speed of the ball was $10\\text{ m s}^{ -1 }$."
    ],
    "pi_options": [
        {
            "ans": "$20\\text{ m s}^{-1}$",
            "feedback": "This is the result of using a positive displacement ($s = +15\\text{ m }$). Because the ball lands on the ground below its release point, the displacement must be negative when choosing upwards as the positive direction."
        },
        {
            "ans": "$25\\text{ m s}^{-1}$",
            "feedback": "This error occurs if you forget to multiply the acceleration term by $\\dfrac{ 1 }{ 2 }$ in the formula $s = ut + \\dfrac{ 1 }{ 2 }at^2$, leading to the equation $-15 = 3u - 10(3)^2$."
        },
        {
            "ans": "$15\\text{ m s}^{-1}$",
            "feedback": "This value often results from dividing the distance directly by time ($15 \\div 3 = 5$) and incorrectly adding or adjusting for gravity without using the proper constant acceleration kinematic equations."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Sign Conventions are Key",
        "content": "Since the ball is thrown upwards and lands below its release height, its displacement must be negative ($s = -15\\text{ m }$). A very common mistake is using $+15\\text{ m }$, which will lead to an incorrect initial velocity of $20\\text{ m s}^{ -1 }$. Consistency in sign conventions is vital."
    }
},
{
    "id": "012045",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Motion under gravity",
    "subtopic": [
        "Constant acceleration",
        "Vertical motion under gravity",
        "Relative motion"
    ],
    "img": false,
    "question": "A hot-air balloon is rising vertically with a constant speed of $5\\text{ m s}^{ -1 }$. At the instant the balloon is $30\\text{ m }$ above horizontal ground, a passenger drops a camera. The camera is modelled as a particle moving freely under gravity, and the acceleration due to gravity is modelled as being of constant magnitude $10\\text{ m s}^{ -2 }$.<br><br>Calculate the time, $T$ seconds, from the moment the camera is dropped to the moment it hits the ground.",
    "steps": [
        "Determine the initial velocity of the camera. Because the camera is released from a balloon rising at $5\\text{ m s}^{ -1 }$, it inherits this upward velocity at the instant of release:<br>• Initial velocity, $u = 5\\text{ m s}^{ -1 }$ (vertically upwards)",
        "Set up the remaining SUVAT parameters with vertically upwards defined as the positive direction:<br>• Displacement, $s = -30\\text{ m }$ (since it lands on the ground below)<br>• Acceleration, $a = -10\\text{ m s}^{ -2 }$",
        "Substitute these parameters into the constant acceleration formula $s = ut + \\dfrac{ 1 }{ 2 }at^2$:<br><br>\\begin{aligned} -30 &= 5T + \\dfrac{ 1 }{ 2 }(-10)T^2 \\cr -30 &= 5T - 5T^2 \\end{aligned}",
        "Rearrange this into standard quadratic form and simplify by dividing every term by $5$:<br><br>\\begin{aligned} 5T^2 - 5T - 30 &= 0 \\cr T^2 - T - 6 &= 0 \\end{aligned}",
        "Factorise the quadratic equation:<br><br>\\begin{aligned} (T - 3)(T + 2) = 0 \\end{aligned}",
        "Solve for $T$:<br><br>\\begin{aligned} T = 3 \\quad \\text{ or } \\quad T = -2 \\end{aligned}<br><br>Since time $T$ must be positive, we reject the negative solution. Thus, $T = 3\\text{ seconds }$."
    ],
    "pi_options": [
        {
            "ans": "$T = 2.4$",
            "feedback": "This occurs if you assume the initial velocity is $0\\text{ m s}^{ -1 }$ relative to the ground. Objects dropped from a moving platform inherit the velocity of that platform at the instant of release."
        },
        {
            "ans": "$T = 2$",
            "feedback": "This result occurs if you assume the initial velocity of the camera is directed downwards ($u = -5\\text{ m s}^{ -1 }$). Since the balloon is rising, the camera initially continues upwards."
        },
        {
            "ans": "$T = 1.5$",
            "feedback": "This represents a calculation error, typically from using positive displacement ($s = +30\\text{ m }$) or a mistake in applying the quadratic formula to the coefficients."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Dropped Objects and Inertia",
        "content": "This is a classic 'relative motion' trap. Any object released from a moving vehicle inherits the vehicle's instantaneous velocity. Even though the passenger 'drops' the camera, relative to the ground it actually travels vertically upwards briefly before gravity slows it down and it begins to fall."
    }
},
{
    "id": "012046",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Motion graphs",
    "subtopic": [
        "Velocity-time graphs",
        "Constant acceleration"
    ],
    "img": false,
    "question": "A train travels along a straight horizontal track between two stations, $P$ and $Q$. In a model of the motion, the train starts from rest at $P$ and moves with constant acceleration $0.4\\\\text{ m s}^{ -2 }$ for $50\\\\text{ s }$. The train then moves at a constant velocity before it moves with a constant deceleration of $0.8\\\\text{ m s}^{ -2 }$, coming to rest at $Q$.<br><br><strong>(a)</strong> For this model of the motion of the train between $P$ and $Q$:<br><strong>(i)</strong> state the value of the constant velocity of the train,<br><strong>(ii)</strong> state the time for which the train is decelerating,<br><strong>(iii)</strong> sketch a velocity-time graph for the motion of the train.<br><br>The total distance between the two stations is $3250\\\\text{ m }$.<br><br><strong>(b)</strong> Using the model, find the total time taken by the train to travel from $P$ to $Q$.<br><br><strong>(c)</strong> Suggest one improvement that could be made to the model to make it more realistic.",
    "steps": [
        "<strong>(a)(i) Constant Velocity ($V$):</strong><br>The train starts from rest ($u = 0$) and accelerates at $a = 0.4\\\\text{ m s}^{ -2 }$ for $t = 50\\\\text{ s }$. Using $v = u + at$:<br><br>\\begin{aligned} V &= 0 + 0.4 \\\\times 50 \\\\cr V &= 20\\\\text{ m s}^{ -1 } \\end{aligned}",
        "<strong>(a)(ii) Deceleration time ($t_d$):</strong><br>The train decelerates from its constant velocity of $20\\\\text{ m s}^{ -1 }$ to rest ($v = 0$) at a rate of $0.8\\\\text{ m s}^{ -2 }$. Using $v = u + at$:<br><br>\\begin{aligned} 0 &= 20 - 0.8t_d \\\\cr 0.8t_d &= 20 \\\\cr t_d &= 25\\\\text{ s } \\end{aligned}",
        "<strong>(a)(iii) Velocity-time graph sketch:</strong><br>The graph consists of three phases:<br>1. Acceleration from $(0,0)$ to $(50, 20)$<br>2. Constant velocity of $20\\\\text{ m s}^{ -1 }$ until deceleration begins<br>3. Deceleration from $20\\\\text{ m s}^{ -1 }$ to rest at the final time $T$, lasting $25\\\\text{ s }$:<br><br><img src='images/Pure/012046_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "<strong>(b) Find the total time $T$:</strong><br>We can find the total distance by calculating the area under the velocity-time graph for each phase:<br><br>• <strong>Phase 1 (Acceleration):</strong> Area of triangle = $\\\\dfrac{ 1 }{ 2 } \\\\times 50 \\\\times 20 = 500\\\\text{ m }$<br>• <strong>Phase 3 (Deceleration):</strong> Area of triangle = $\\\\dfrac{ 1 }{ 2 } \\\\times 25 \\\\times 20 = 250\\\\text{ m }$<br>• <strong>Phase 2 (Constant Velocity):</strong> The remaining distance is:<br><br>\\begin{aligned} 3250 - (500 + 250) = 2500\\\\text{ m } \\end{aligned}<br><br>The time spent at constant speed ($t_c$) is:<br><br>\\begin{aligned} t_c &= \\\\dfrac{ 2500 }{ 20 } \\\\cr t_c &= 125\\\\text{ s } \\end{aligned}",
        "The total time $T$ is the sum of the durations of all three phases:<br><br>\\begin{aligned} T &= 50 + 125 + 25 \\\\cr T &= 200\\\\text{ seconds } \\end{aligned}",
        "<strong>(c) Suggested Improvement:</strong><br>The model could be made more realistic by smoothing the transitions between phases rather than assuming instantaneous changes in acceleration (i.e. avoiding sharp corners on the velocity-time graph), or by incorporating air resistance and friction."
    ],
    "pi_options": [
        {
            "ans": "(a)(i) $20\\text{ m s}^{-1}$, (a)(ii) $25\\text{ s}$, (b) $187.5\\text{ s}$",
            "feedback": "This result is based on an arithmetic slip when summing the times of the three phases: $50 + 125 + 25$ is equal to $200\\text{ s}$, not $187.5\\text{ s}$."
        },
        {
            "ans": "(a)(i) $20\\text{ m s}^{-1}$, (a)(ii) $16\\text{ s}$, (b) $212.5\\text{ s}$",
            "feedback": "This occurs if you miscalculate the deceleration time as $16\\text{ s}$ instead of $25\\text{ s}$ by multiplying by $0.8$ instead of dividing. Deceleration time is found by dividing the constant velocity by the rate of deceleration."
        },
        {
            "ans": "(a)(i) $20\\text{ m s}^{-1}$, (a)(ii) $25\\text{ s}$, (b) $162.5\\text{ s}$",
            "feedback": "This error occurs if you miss one of the journey segments (such as the deceleration phase) when calculating the total travel time."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: End Phases First",
        "content": "For multi-stage journeys represented as a trapezium on a velocity-time graph, always calculate the durations and distances of the two 'end' phases (acceleration and deceleration) first. The middle phase distance is then easily found by subtracting these from the total distance."
    }
},
{
    "id": "012047",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Motion graphs",
    "subtopic": [
        "Velocity-time graphs",
        "Constant acceleration"
    ],
    "img": false,
    "question": "A cyclist travels along a straight horizontal road. She starts from rest at point $X$ and accelerates uniformly at $1.2\\\\text{ m s}^{ -2 }$ until she reaches a speed of $18\\\\text{ m s}^{ -1 }$. She maintains this speed for $T$ seconds before decelerating uniformly at $0.6\\\\text{ m s}^{ -2 }$, coming to rest at point $Y$. The entire journey from $X$ to $Y$ takes $120\\\\text{ s }$.<br><br><strong>(a)</strong> Sketch a velocity-time graph for the cyclist's journey.<br><br><strong>(b)</strong> Find the value of $T$.<br><br><strong>(c)</strong> Find the total distance between $X$ and $Y$.<br><br><strong>(d)</strong> State one physical factor that has been ignored in this model of the cyclist's motion.",
    "steps": [
        "<strong>(a) Velocity-time graph sketch:</strong><br>The journey contains three distinct sections:<br>1. Uniform acceleration from rest to $18\\\\text{ m s}^{ -1 }$ over $15\\\\text{ s }$<br>2. Constant speed of $18\\\\text{ m s}^{ -1 }$ for $T$ seconds (from $15\\\\text{ s }$ to $15 + T$)<br>3. Uniform deceleration from $18\\\\text{ m s}^{ -1 }$ to rest over $30\\\\text{ s }$ to the final time $120\\\\text{ s }$:<br><br><img src='images/Pure/012047_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "<strong>(b) Find the value of $T$:</strong><br>First, calculate the duration of the acceleration phase ($t_a$):<br><br>\\begin{aligned} t_a &= \\\\dfrac{ v }{ a_1 } \\\\cr t_a &= \\\\dfrac{ 18 }{ 1.2 } \\\\cr t_a &= 15\\\\text{ s } \\end{aligned}",
        "Next, calculate the duration of the deceleration phase ($t_d$):<br><br>\\begin{aligned} t_d &= \\\\dfrac{ v }{ a_2 } \\\\cr t_d &= \\\\dfrac{ 18 }{ 0.6 } \\\\cr t_d &= 30\\\\text{ s } \\end{aligned}",
        "Since the total time for the entire journey is $120\\\\text{ s }$, the constant velocity duration $T$ is:<br><br>\\begin{aligned} T &= 120 - t_a - t_d \\\\cr T &= 120 - 15 - 30 \\\\cr T &= 75\\\\text{ seconds } \\end{aligned}",
        "<strong>(c) Find the total distance:</strong><br>The total distance is the area of the trapezium under the velocity-time graph. The formula for the area of a trapezium is $\\\\dfrac{ 1 }{ 2 }(a + b)h$:<br>• Bottom parallel side, $a = 120$<br>• Top parallel side, $b = T = 75$<br>• Height, $h = 18$<br><br>\\begin{aligned} \\\\text{ Total Distance } &= \\\\dfrac{ 1 }{ 2 } \\\\times (120 + 75) \\\\times 18 \\\\cr &= 97.5 \\\\times 18 \\\\cr &= 1755\\\\text{ m } \\end{aligned}",
        "<strong>(d) Ignored Factor:</strong><br>The model treats the bicycle and cyclist as a particle, thereby ignoring air resistance, friction between the tyres and road, and the physical dimensions of the cyclist."
    ],
    "pi_options": [
        {
            "ans": "(b) $T = 75\\text{ s}$, (c) $1620\\text{ m}$",
            "feedback": "This distance of $1620\\text{ m}$ is obtained if you make an arithmetic error during the trapezium area calculation, such as using incorrect parallel side values."
        },
        {
            "ans": "(b) $T = 90\\text{ s}$, (c) $1890\\text{ m}$",
            "feedback": "This occurs if you fail to subtract the deceleration phase time of $30\\text{ s}$ from the total time when calculating $T$, leading to $T = 90\\text{ s}$ and a corresponding overestimate of the distance."
        },
        {
            "ans": "(b) $T = 75\\text{ s}$, (c) $1350\\text{ m}$",
            "feedback": "This distance of $1350\\text{ m}$ represents only the distance covered during the constant velocity phase ($75 \\\\times 18$). Ensure you include the triangular areas for both the acceleration and deceleration phases."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Trailing Journey Constraints",
        "content": "The entire journey time is given as $120\\\\text{ s }$, so $T$ is simply the total time minus the durations spent changing speed. Always verify that your individual phase durations add up perfectly to the given total before calculating the distance."
    }
},
{
    "id": "012048",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Motion graphs",
    "subtopic": [
        "Velocity-time graphs",
        "Relative motion",
        "Constant acceleration"
    ],
    "img": false,
    "question": "Two cars, $A$ and $B$, start from rest at the same point at time $t = 0$ and travel in the same direction along a straight horizontal road.<br>• Car $A$ accelerates uniformly at $1.5\\\\text{ m s}^{ -2 }$ for $10\\\\text{ s }$ to a speed of $15\\\\text{ m s}^{ -1 }$, and then continues at this constant speed.<br>• Car $B$ accelerates uniformly at $1.0\\\\text{ m s}^{ -2 }$ for $20\\\\text{ s }$ to a speed of $20\\\\text{ m s}^{ -1 }$, and then continues at this constant speed.<br><br><strong>(a)</strong> Sketch, on the same axes, the velocity-time graphs for the motion of both cars for $0 \\\\le t \\\\le 30$.<br><br><strong>(b)</strong> Find the value of $t$ when the two cars are travelling at the same speed.<br><br><strong>(c)</strong> Find the distance between the two cars at $t = 30\\\\text{ s }$."    ,
    "steps": [
        "<strong>(a) Sketch on the same axes:</strong><br>• Car $A$ accelerates to $15\\\\text{ m s}^{ -1 }$ at $t = 10\\\\text{ s }$ and remains constant.<br>• Car $B$ accelerates to $20\\\\text{ m s}^{ -1 }$ at $t = 20\\\\text{ s }$ and remains constant.<br>• The two graphs intersect at $t = 15\\\\text{ s }$, where both cars are travelling at $15\\\\text{ m s}^{ -1 }$:<br><br><img src='images/Pure/012048_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "<strong>(b) Find $t$ when speeds are equal:</strong><br>Car $A$ reaches its constant speed of $15\\\\text{ m s}^{ -1 }$ at $t = 10\\\\text{ s }$.<br>Car $B$ is still accelerating at $t = 10\\\\text{ s }$. We want to find the time $t$ when Car $B$ reaches $15\\\\text{ m s}^{ -1 }$ during its acceleration phase:<br><br>\\begin{aligned} v &= u + at \\\\cr 15 &= 0 + 1.0 \\\\times t \\\\cr t &= 15\\\\text{ seconds } \\end{aligned}<br><br>Since $15\\\\text{ s }$ is within Car $B$'s acceleration phase ($0 \\\\le t \\\\le 20$), this is the correct time.",
        "<strong>(c) Find the distance between the cars at $t = 30\\\\text{ s }$:</strong><br>We calculate the distance travelled by each car by finding the area under their respective velocity-time graphs from $t = 0$ to $t = 30$.<br><br>• <strong>Distance for Car $A$:</strong><br>The shape is a trapezium with parallel sides of length $30$ and $20$, and a height of $15$:<br><br>\\begin{aligned} \\\\text{ Distance }_A &= \\\\dfrac{ 1 }{ 2 } \\\\times (30 + 20) \\\\times 15 \\\\cr &= 25 \\\\times 15 \\\\cr &= 375\\\\text{ m } \\end{aligned}",
        "• <strong>Distance for Car $B$:</strong><br>The shape is a trapezium with parallel sides of length $30$ and $10$, and a height of $20$:<br><br>\\begin{aligned} \\\\text{ Distance }_B &= \\\\dfrac{ 1 }{ 2 } \\\\times (30 + 10) \\\\times 20 \\\\cr &= 20 \\\\times 20 \\\\cr &= 400\\\\text{ m } \\end{aligned}",
        "• <strong>Distance between the two cars:</strong><br>Subtract Car $A$'s distance from Car $B$'s distance:<br><br>\\begin{aligned} \\\\text{ Separation } &= 400 - 375 \\\\cr &= 25\\\\text{ m } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "(b) $t = 15\\text{ s}$, (c) $75\\text{ m}$",
            "feedback": "This separation of $75\\text{ m}$ occurs if you make an error in calculating the trapezoidal areas for the distance of Car $A$ or Car $B$."
        },
        {
            "ans": "(b) $t = 12.5\\text{ s}$, (c) $25\\text{ m}$",
            "feedback": "The time of equal speed is $15\\text{ s}$, because Car $B$ reaches the constant speed of Car $A$ ($15\\text{ m s}^{-1}$) at exactly $t = 15\\text{ s}$. Avoid equating average speeds to find this point."
        },
        {
            "ans": "(b) $t = 15\\text{ s}$, (c) $150\\text{ m}$",
            "feedback": "Make sure you calculate the entire distance covered by both cars up to $t = 30\\text{ s}$, including both the acceleration and constant speed phases, rather than just comparing their acceleration phases."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Visualising Area Separation",
        "content": "On a combined velocity-time graph, the distance between the two vehicles is visually represented by the difference between the areas under their respective lines. Finding equal speeds tells you where the vertical separation is zero, but the physical separation is found by computing the area difference."
    }
},
{
    "id": "012049",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Motion graphs",
    "subtopic": [
        "Velocity-time graphs",
        "Variable acceleration",
        "Integration in kinematics"
    ],
    "img": false,
    "question": "A particle $P$ moves along a straight horizontal line. At time $t$ seconds ($t \\\\ge 0$), the velocity of $P$, $v\\\\text{ m s}^{ -1 }$, is modelled by the formula:<br>$$v = 6t - t^2 \\\\quad \\\\text{for } 0 \\\\le t \\\\le 6$$<br>and $v = 0$ for $t > 6$.<br><br><strong>(a)</strong> Sketch a velocity-time graph for the motion of $P$ for $0 \\\\le t \\\\le 8$.<br><br><strong>(b)</strong> Find the maximum speed of $P$ during the interval $0 \\\\le t \\\\le 6$, stating the value of $t$ at which it occurs.<br><br><strong>(c)</strong> Find the total distance travelled by $P$ during the interval $0 \\\\le t \\\\le 6$.",
    "steps": [
        "<strong>(a) Sketch of the velocity-time graph:</strong><br>The graph is a parabola passing through the origin $(0,0)$ and meeting the t-axis again at $t = 6\\\\text{ s }$. For $t > 6$, the velocity is zero (horizontal line on the axis):<br><br><img src='images/Pure/012049_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "<strong>(b) Find the maximum speed:</strong><br>The velocity function is $v = 6t - t^2$. To find the maximum speed, we differentiate $v$ with respect to $t$ and set the derivative to zero:<br><br>\\begin{aligned} \\\\dfrac{ \\\\mathrm{d}v }{ \\\\mathrm{d}t } &= 6 - 2t \\\\cr 6 - 2t &= 0 \\\\cr t &= 3\\\\text{ seconds } \\end{aligned}",
        "Substitute $t = 3$ back into the velocity formula to find the maximum speed:<br><br>\\begin{aligned} v_{ \\\\text{ max } } &= 6(3) - (3)^2 \\\\cr &= 18 - 9 \\\\cr &= 9\\\\text{ m s}^{ -1 } \\end{aligned}<br><br>The maximum speed is $9\\\\text{ m s}^{ -1 }$, occurring at $t = 3\\\\text{ s }$.",
        "<strong>(c) Find the total distance travelled:</strong><br>Since $v \\\\ge 0$ during the interval $0 \\\\le t \\\\le 6$, the total distance is found by integrating the velocity function between these limits:<br><br>\\begin{aligned} \\\\text{ Distance } &= \\\\int_{ 0 }^{ 6 } (6t - t^2) \\\\, \\\\mathrm{d}t \\\\cr &= \\\\left[ 3t^2 - \\\\dfrac{ 1 }{ 3 }t^3 \\\\right]_{ 0 }^{ 6 } \\\\cr &= \\\\left( 3(6)^2 - \\\\dfrac{ 1 }{ 3 }(6)^3 \\\\right) - 0 \\\\cr &= (108 - 72) \\\\cr &= 36\\\\text{ m } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "(b) $9\\text{ m s}^{-1}$ at $t = 3\\text{ s}$, (c) $18\\text{ m}$",
            "feedback": "This distance of $18\\text{ m}$ is obtained if you integrate $t^2$ incorrectly as $\\\\dfrac{ 1 }{ 2 }t^3$ or make a division slip during integration. Remember that $\\\\int t^n \\\\, \\\\mathrm{d}t = \\\\dfrac{ t^{n+1} }{ n+1 }$."
        },
        {
            "ans": "(b) $6\\text{ m s}^{-1}$ at $t = 3\\text{ s}$, (c) $36\\text{ m}$",
            "feedback": "To find the maximum speed, substitute $t = 3$ into the original function $v = 6t - t^2$, which yields $18 - 9 = 9\\text{ m s}^{-1}$. Ensure you use the correct function."
        },
        {
            "ans": "(b) $9\\text{ m s}^{-1}$ at $t = 3\\text{ s}$, (c) $54\\text{ m}$",
            "feedback": "Make sure you use definite integration limits from $0$ to $6$ to find the exact area under the curved parabola rather than trying to approximate it with a bounding rectangle."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Variable Kinematics Rules",
        "content": "When velocity is a non-linear function of $t$, you must use calculus rather than SUVAT. As a nice pure-maths verification, the area of the 'hump' of this parabola is exactly $\\\\dfrac{ 2 }{ 3 }$ of the bounding box ($6 \\\\times 9$), which is $36\\\\text{ m }$."
    }
},
{
    "id": "012050",
    "branch": "Mechanics",
    "board": "Edexcel",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Motion graphs",
    "subtopic": [
        "Velocity-time graphs",
        "Constant acceleration",
        "Vertical motion under gravity"
    ],
    "img": false,
    "question": "A parachutist jumps from a stationary balloon and falls vertically. She falls freely under gravity from rest for $4\\\\text{ s }$. At the instant $t = 4\\\\text{ s }$, her parachute opens, causing her to decelerate uniformly at $12\\\\text{ m s}^{ -2 }$ for $2.5\\\\text{ s }$. She then continues to fall vertically at a constant speed of $V\\\\text{ m s}^{ -1 }$ until she reaches the ground. The acceleration due to gravity is modelled as $9.8\\\\text{ m s}^{ -2 }$.<br><br><strong>(a)</strong> Show that the speed of the parachutist at $t = 4\\\\text{ s }$ is $39.2\\\\text{ m s}^{ -1 }$.<br><br><strong>(b)</strong> Find the value of $V$.<br><br><strong>(c)</strong> Sketch a velocity-time graph for the motion of the parachutist from the instant she jumps to the instant she reaches the ground.<br><br>Given that the total vertical distance fallen is $230.9\\\\text{ m}$:<br><br><strong>(d)</strong> Find the total time taken from the instant she jumps to the instant she reaches the ground.",
    "steps": [
        "<strong>(a) Show that the speed at $t = 4\\\\text{ s }$ is $39.2\\\\text{ m s}^{ -1 }$:</strong><br>The parachutist falls freely from rest under gravity ($u = 0$, $a = 9.8\\\\text{ m s}^{ -2 }$) for $4\\\\text{ s }$. Using $v = u + at$:<br><br>\\begin{aligned} v &= 0 + 9.8 \\\\times 4 \\\\cr v &= 39.2\\\\text{ m s}^{ -1 } \\end{aligned}",
        "<strong>(b) Find the value of $V$:</strong><br>At $t = 4\\\\text{ s }$, the parachute opens, decelerating her at $12\\\\text{ m s}^{ -2 }$ for $2.5\\\\text{ s }$. Using $v = u + at$ with initial speed $u = 39.2\\\\text{ m s}^{ -1 }$:<br><br>\\begin{aligned} V &= 39.2 - 12 \\\\times 2.5 \\\\cr V &= 39.2 - 30 \\\\cr V &= 9.2\\\\text{ m s}^{ -1 } \\end{aligned}",
        "<strong>(c) Sketch the velocity-time graph:</strong><br>The graph comprises three segments:<br>1. Linear acceleration from $(0,0)$ to $(4, 39.2)$<br>2. Linear deceleration from $(4, 39.2)$ to $(6.5, 9.2)$<br>3. Horizontal line representing a constant terminal speed of $9.2\\\\text{ m s}^{ -1 }$ until she lands at $T$:<br><br><img src='images/Pure/012050_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "<strong>(d) Find the total time of flight $T$:</strong><br>We split the total distance of $230.9\\\\text{ m }$ into the three phases of the journey:<br><br>• <strong>Phase 1 (Free Fall):</strong> Area of triangle:<br><br>\\begin{aligned} s_1 &= \\\\dfrac{ 1 }{ 2 } \\\\times 4 \\\\times 39.2 \\\\cr &= 78.4\\\\text{ m } \\end{aligned}",
        "• <strong>Phase 2 (Deceleration):</strong> Area of trapezium under the graph between $t = 4$ and $t = 6.5$ (duration of $2.5\\\\text{ s }$):<br><br>\\begin{aligned} s_2 &= \\\\dfrac{ 39.2 + 9.2 }{ 2 } \\\\times 2.5 \\\\cr &= 24.2 \\\\times 2.5 \\\\cr &= 60.5\\\\text{ m } \\end{aligned}",
        "• <strong>Phase 3 (Constant Speed):</strong> Find the remaining distance to the ground:<br><br>\\begin{aligned} s_3 &= 230.9 - (78.4 + 60.5) \\\\cr s_3 &= 230.9 - 138.9 \\\\cr s_3 &= 92\\\\text{ m } \\end{aligned}<br><br>Calculate the time spent in Phase 3 ($t_3$) at constant speed $V = 9.2\\\\text{ m s}^{ -1 }$:<br><br>\\begin{aligned} t_3 &= \\\\dfrac{ s_3 }{ V } \\\\cr &= \\\\dfrac{ 92 }{ 9.2 } \\\\cr &= 10\\\\text{ s } \\end{aligned}",
        "• <strong>Total Time:</strong> Sum the times of all three phases:<br><br>\\begin{aligned} T_{\\\\text{ total }} &= 4 + 2.5 + 10 \\\\cr &= 16.5\\\\text{ seconds } \\end{aligned}"
    ],
    "pi_options": [
        {
            "ans": "(b) $V = 9.2\\text{ m s}^{-1}$, (d) $15.5\\text{ s}$",
            "feedback": "This total time of $15.5\\text{ s}$ is a common arithmetic slip when summing the phases ($4 + 2.5 + 10$), where $4 + 2.5$ is added incorrectly or one of the values is misread."
        },
        {
            "ans": "(b) $V = 9.2\\text{ m s}^{-1}$, (d) $21.5\\text{ s}$",
            "feedback": "Make sure you use the trapezium area formula $\\\\dfrac{ u + v }{ 2 } \\\\times t$ to calculate the distance travelled during the deceleration phase rather than a simple triangle."
        },
        {
            "ans": "(b) $V = 15.2\\text{ m s}^{-1}$, (d) $12.5\\text{ s}$",
            "feedback": "Since the parachute causes a deceleration, the acceleration is negative relative to the direction of motion, so $V = 39.2 - 12(2.5)$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Mid-Journey Trapeziums",
        "content": "The deceleration phase of this motion is a trapezium on the velocity-time graph. Make sure you use the average velocity $(\\\\dfrac{ u + v }{ 2 })$ to find that middle distance correctly, rather than mistakenly treating it as a simple triangle."
    }
}

];