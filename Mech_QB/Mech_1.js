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
}

];