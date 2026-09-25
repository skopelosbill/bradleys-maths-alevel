window.ALEVEL_QUESTIONS = [
{
    "id": "012151",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "A",
    "major_area": "Forces and Newton's Laws",
    "topic": "Dynamics and Friction",
    "subtopic": [
        "Horizontal Motion",
        "Constant Acceleration",
        "Coefficient of Friction"
    ],
    "img": false,
    "question": "A box of mass $2.5\\text{ kg}$ is pushed across a rough horizontal floor against a constant resistance of $14.7\\text{ N}$. A person applies a constant horizontal pushing force of magnitude $P\\text{ N}$.<br><br>The box accelerates from rest to a speed of $1.6\\text{ m s}^{-1}$ as it travels a distance of $3.2\\text{ m}$.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Calculate the acceleration of the box.<br><br><strong>(b)</strong> Calculate the time taken for the box to travel the first $3.2\\text{ m}$.<br><br><strong>(c)</strong> Find the magnitude of the horizontal pushing force $P$.<br><br><strong>(d)</strong> Given that the resistance force is entirely due to friction between the box and the floor, calculate the coefficient of friction $\\mu$ between the box and the floor.",
    "steps": [
        "<strong>(a) Acceleration of the box:</strong><br><br>Using $v^2 = u^2 + 2as$ with $u = 0$, $v = 1.6\\text{ m s}^{-1}$, and $s = 3.2\\text{ m}$:\\begin{aligned} &1.6^2 = 0^2 + 2a(3.2) \\cr &2.56 = 6.4a \\cr &a = \\dfrac{2.56}{6.4} \\cr &a = 0.4\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Time taken:</strong><br><br>Using $v = u + at$:\\begin{aligned} &1.6 = 0 + 0.4t \\cr &0.4t = 1.6 \\cr &t = 4\\text{ s} \\end{aligned}",
        "<strong>(c) Pushing force $P$:</strong><br><br>Using Newton's second law ($F = ma$) with $m = 2.5\\text{ kg}$ and resistance $R = 14.7\\text{ N}$:\\begin{aligned} &P - 14.7 = 2.5(0.4) \\cr &P - 14.7 = 1.0 \\cr &P = 15.7\\text{ N} \\end{aligned}",
        "<strong>(d) Coefficient of friction $\\mu$:</strong><br><br>On a horizontal floor, the normal reaction is:\\begin{aligned} R &= mg \\cr &= 2.5(9.8) \\cr &= 24.5\\text{ N} \\end{aligned}<br><br>Using $F = \\mu R$:\\begin{aligned} &14.7 = \\mu(24.5) \\cr &\\mu = \\dfrac{14.7}{24.5} \\cr &\\mu = 0.6 \\end{aligned}",
        "Final Answer: (a) $0.4\\text{ m s}^{-2}$, (b) $4\\text{ s}$, (c) $15.7\\text{ N}$, (d) $\\mu = 0.6$"
    ],
    "pi_options": [
        {
            "ans": "(a) $0.4\\text{ m s}^{-2}$, (b) $4\\text{ s}$, (c) $1.0\\text{ N}$, (d) $\\mu = 0.6$",
            "feedback": "You forgot to add the resistance force to the net force. From Newton's second law, $P - 14.7 = ma = 1.0$, so\\begin{aligned} P &= 14.7 + 1.0 \\cr &= 15.7\\text{ N} \\end{aligned}not just $1.0\\text{ N}$."
        },
        {
            "ans": "(a) $0.4\\text{ m s}^{-2}$, (b) $4\\text{ s}$, (c) $15.7\\text{ N}$, (d) $\\mu = 0.061$",
            "feedback": "You forgot the factor of $g$ when finding the normal reaction. On a horizontal floor, $R = mg = 2.5(9.8) = 24.5\\text{ N}$, which gives\\begin{aligned} \\mu &= \\dfrac{14.7}{24.5} \\cr &= 0.6 \\end{aligned}not $14.7 / 2.5$."
        },
        {
            "ans": "(a) $0.2\\text{ m s}^{-2}$, (b) $8\\text{ s}$, (c) $15.2\\text{ N}$, (d) $\\mu = 0.6$",
            "feedback": "You forgot the factor of $2$ in the denominator of $v^2 = u^2 + 2as$. The acceleration is\\begin{aligned} a &= \\dfrac{1.6^2}{2(3.2)} \\cr &= 0.4\\text{ m s}^{-2} \\end{aligned}"
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Net Force vs Applied Force",
        "content": "Always remember that $F = ma$ relates mass and acceleration to the <em>resultant</em> force ($P - F_{\\text{resist}}$), never to the applied force $P$ alone. A quick sanity check: because the box accelerates forward, $P$ must be strictly greater than the resistance ($15.7\\text{ N} > 14.7\\text{ N}$)."
    }
},
{
    "id": "012152",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "A",
    "major_area": "Forces and Newton's Laws",
    "topic": "Dynamics and Resolving Forces",
    "subtopic": [
        "Inclined Pushing Force",
        "Normal Reaction Modification",
        "Friction"
    ],
    "img": false,
    "question": "A crate of mass $12\\text{ kg}$ is pushed along a rough horizontal floor by a constant force of magnitude $P\\text{ N}$ directed downwards at an angle of $30^\\circ$ to the horizontal.<br><br>The coefficient of friction between the crate and the floor is $\\mu = 0.25$. The crate accelerates from rest to a speed of $2.4\\text{ m s}^{-1}$ over a distance of $3.6\\text{ m}$.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Calculate the acceleration of the crate.<br><br><strong>(b)</strong> Show that the normal reaction $R\\text{ N}$ between the crate and the floor is given by $R = 117.6 + 0.5P$.<br><br><strong>(c)</strong> Calculate the magnitude of the pushing force $P$, giving your answer correct to 3 significant figures.<br><br><strong>(d)</strong> If the crate were instead pulled by a force of the same magnitude $P$ directed upwards at $30^\\circ$ to the horizontal, explain with mathematical reasoning whether its acceleration would be greater than, equal to, or less than the value found in part <strong>(a)</strong>.",
    "steps": [
        "<strong>(a) Acceleration of the crate:</strong><br><br>Using $v^2 = u^2 + 2as$ with $u = 0$, $v = 2.4\\text{ m s}^{-1}$, and $s = 3.6\\text{ m}$:\\begin{aligned} &2.4^2 = 0^2 + 2a(3.6) \\cr &5.76 = 7.2a \\cr &a = 0.8\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Normal reaction $R$:</strong><br><br>Resolving vertically for equilibrium ($\\uparrow$):\\begin{aligned} &R - mg - P\\sin 30^\\circ = 0 \\cr &R = 12(9.8) + P(0.5) \\cr &R = 117.6 + 0.5P \\end{aligned}",
        "<strong>(c) Calculating pushing force $P$:</strong><br><br>Resolving horizontally ($\\rightarrow$):\\begin{aligned} P\\cos 30^\\circ - F_r = ma \\end{aligned}<br><br>Substitute $F_r = \\mu R = 0.25(117.6 + 0.5P)$:\\begin{aligned} &P\\cos 30^\\circ - 0.25(117.6 + 0.5P) = 12(0.8) \\cr &P\\cos 30^\\circ - 29.4 - 0.125P = 9.6 \\cr &P(\\cos 30^\\circ - 0.125) = 39.0 \\end{aligned}<br><br>Evaluating $P$:\\begin{aligned} &P(0.8660 - 0.125) = 39.0 \\cr &0.7410P = 39.0 \\cr &P = \\dfrac{39.0}{0.7410} \\cr &P \\approx 52.6\\text{ N} \\end{aligned}",
        "<strong>(d) Comparison if pulled upwards:</strong><br><br>When pulled at $30^\\circ$ above the horizontal, the vertical equation becomes:\\begin{aligned} R = mg - P\\sin 30^\\circ \\end{aligned}<br><br>This reduces the normal reaction $R$, which in turn decreases the frictional resistance ($F_r = \\mu R$).<br><br>Since the forward horizontal driving component $P\\cos 30^\\circ$ remains unchanged, the net horizontal force is larger, so the acceleration is <strong>Greater</strong>.",
        "Final Answer: (a) $0.8\\text{ m s}^{-2}$, (c) $52.6\\text{ N}$, (d) Greater"
    ],
    "pi_options": [
        {
            "ans": "(a) $0.8\\text{ m s}^{-2}$, (c) $52.6\\text{ N}$, (d) Less",
            "feedback": "You concluded that pulling upwards produces less acceleration. Pulling upwards reduces the normal reaction ($R = mg - P\\sin 30^\\circ$), which reduces friction while keeping the forward driving component $P\\cos 30^\\circ$ unchanged, so acceleration is greater."
        },
        {
            "ans": "(a) $0.8\\text{ m s}^{-2}$, (c) $45.1\\text{ N}$, (d) Greater",
            "feedback": "You used $R = mg = 117.6\\text{ N}$, forgetting that the downward component of the push increases the normal reaction to $R = 117.6 + 0.5P$."
        },
        {
            "ans": "(a) $1.6\\text{ m s}^{-2}$, (c) $62.0\\text{ N}$, (d) Greater",
            "feedback": "You omitted the factor of $2$ in $v^2 = 2as$, calculating acceleration as $2.4^2 / 3.6 = 1.6\\text{ m s}^{-2}$ instead of $2.4^2 / 7.2 = 0.8\\text{ m s}^{-2}$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Pushing vs Pulling Normal Reaction",
        "content": "Always draw clear vertical resolution arrows when a force is applied at an angle. Pushing downwards adds a vertical component $P\\sin\\theta$ that presses the object harder into the ground, increasing $R$ and therefore increasing friction. Pulling upwards subtracts $P\\sin\\theta$, reducing friction. This is why pulling a heavy lawn roller is physically easier than pushing it."
    }
},
{
    "id": "012153",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "A",
    "major_area": "Forces and Newton's Laws",
    "topic": "Newton's Second Law and Multi-Stage Motion",
    "subtopic": [
        "Acceleration under Driving Force",
        "Deceleration under Friction",
        "Total Distance"
    ],
    "img": false,
    "question": "A worker pushes a storage box of mass $8\\text{ kg}$ across a rough horizontal warehouse floor by applying a constant horizontal force of magnitude $38\\text{ N}$. The coefficient of friction between the box and the floor is $\\mu = 0.35$.<br><br>The box starts from rest and is pushed for $5\\text{ seconds}$. The worker then lets go, and the box slides to rest under friction alone.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Calculate the acceleration of the box while it is being pushed.<br><br><strong>(b)</strong> Find the speed of the box and the distance travelled during the first $5\\text{ seconds}$.<br><br><strong>(c)</strong> Calculate the magnitude of the deceleration of the box after the worker stops pushing.<br><br><strong>(d)</strong> Calculate the total distance travelled by the box from the instant it starts moving until it comes to rest again, giving your answer correct to 3 significant figures.<br><br><strong>(e)</strong> Find the total time elapsed for the entire journey.",
    "steps": [
        "<strong>(a) Acceleration while being pushed:</strong><br><br>Frictional force on the box:\\begin{aligned} F_r &= \\mu mg \\cr &= 0.35(8)(9.8) \\cr &= 27.44\\text{ N} \\end{aligned}<br><br>Net forward force:\\begin{aligned} F_{\\text{net}} &= 38 - 27.44 \\cr &= 10.56\\text{ N} \\end{aligned}<br><br>Acceleration:\\begin{aligned} a_1 &= \\dfrac{10.56}{8} \\cr &= 1.32\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Speed and distance at $t = 5\\text{ s}$:</strong><br><br>Speed achieved:\\begin{aligned} v_1 &= 0 + 1.32(5) \\cr &= 6.6\\text{ m s}^{-1} \\end{aligned}<br><br>Distance travelled in Phase 1:\\begin{aligned} s_1 &= \\dfrac{1}{2}(1.32)(5^2) \\cr &= \\dfrac{1}{2}(1.32)(25) \\cr &= 16.5\\text{ m} \\end{aligned}",
        "<strong>(c) Deceleration during coasting:</strong><br><br>When the push is removed, friction alone opposes motion:\\begin{aligned} -27.44 &= 8a_2 \\cr a_2 &= -3.43\\text{ m s}^{-2} \\end{aligned}<br><br>The deceleration is $3.43\\text{ m s}^{-2}$.",
        "<strong>(d) Total distance travelled:</strong><br><br>For Phase 2, using $v^2 = u^2 + 2as$ with $u = 6.6\\text{ m s}^{-1}$ and $v = 0$:\\begin{aligned} &0 = 6.6^2 + 2(-3.43)s_2 \\cr &0 = 43.56 - 6.86s_2 \\cr &6.86s_2 = 43.56 \\cr &s_2 \\approx 6.3499\\text{ m} \\end{aligned}<br><br>Total distance:\\begin{aligned} s_{\\text{tot}} &= 16.5 + 6.3499 \\cr &\\approx 22.8\\text{ m (3 s.f.)} \\end{aligned}",
        "<strong>(e) Total journey time:</strong><br><br>Duration of Phase 2 using $v = u + at$:\\begin{aligned} &0 = 6.6 - 3.43t_2 \\cr &3.43t_2 = 6.6 \\cr &t_2 \\approx 1.924\\text{ s} \\end{aligned}<br><br>Total time:\\begin{aligned} T &= 5 + 1.924 \\cr &\\approx 6.92\\text{ s} \\end{aligned}",
        "Final Answer: (a) $1.32\\text{ m s}^{-2}$, (b) $6.6\\text{ m s}^{-1}, 16.5\\text{ m}$, (c) $3.43\\text{ m s}^{-2}$, (d) $22.8\\text{ m}$, (e) $6.92\\text{ s}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $1.32\\text{ m s}^{-2}$, (b) $6.6\\text{ m s}^{-1}, 16.5\\text{ m}$, (c) $3.43\\text{ m s}^{-2}$, (d) $6.35\\text{ m}$, (e) $1.92\\text{ s}$",
            "feedback": "You gave the distance and time for the coasting phase only. You must add the first phase ($16.5\\text{ m}$ and $5\\text{ s}$) to find total distance ($22.8\\text{ m}$) and total time ($6.92\\text{ s}$)."
        },
        {
            "ans": "(a) $4.75\\text{ m s}^{-2}$, (b) $23.8\\text{ m s}^{-1}, 59.4\\text{ m}$, (c) $3.43\\text{ m s}^{-2}$, (d) $142\\text{ m}$, (e) $11.9\\text{ s}$",
            "feedback": "You forgot to subtract friction during the pushing phase. The net force while pushing is $38 - 27.44 = 10.56\\text{ N}$, giving $a = 1.32\\text{ m s}^{-2}$, not $38 / 8 = 4.75\\text{ m s}^{-2}$."
        },
        {
            "ans": "(a) $1.32\\text{ m s}^{-2}$, (b) $6.6\\text{ m s}^{-1}, 16.5\\text{ m}$, (c) $3.43\\text{ m s}^{-2}$, (d) $22.8\\text{ m}$, (e) $5.00\\text{ s}$",
            "feedback": "You omitted the coasting time from the total time. The box takes an additional $1.92\\text{ seconds}$ to slide to rest, giving a total time of $5 + 1.92 = 6.92\\text{ s}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Work-Energy Check for Multi-Stage Motion",
        "content": "For multi-stage horizontal sliding, the work done by the pushing force equals the total work done against friction over the entire journey: $P s_1 = F_r s_{\\text{tot}}$. Checking this yields:\\begin{aligned} s_{\\text{tot}} &= \\dfrac{38(16.5)}{27.44} \\cr &\\approx 22.8\\text{ m} \\end{aligned}This confirms your two-stage kinematic calculations in a single line."
    }
},
{
    "id": "012154",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "A",
    "major_area": "Forces and Newton's Laws",
    "topic": "Connected Bodies and Newton's Third Law",
    "subtopic": [
        "Contact Forces",
        "Friction on Multiple Bodies",
        "Newton's Third Law"
    ],
    "img": false,
    "question": "A constant horizontal force of magnitude $P\\text{ N}$ is applied to push two boxes, $A$ and $B$, across a rough horizontal floor. Box $A$ has mass $5\\text{ kg}$ and Box $B$ has mass $3\\text{ kg}$. Box $A$ is in direct contact with Box $B$, and the force $P$ is applied directly to Box $A$, pushing it towards Box $B$.<br><br>The coefficient of friction between each box and the floor is $\\mu = 0.2$. The boxes accelerate together from rest to a speed of $1.8\\text{ m s}^{-1}$ in a time of $3\\text{ seconds}$.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Find the acceleration of the boxes.<br><br><strong>(b)</strong> Calculate the total frictional force opposing the motion.<br><br><strong>(c)</strong> Find the magnitude of the pushing force $P$.<br><br><strong>(d)</strong> Calculate the magnitude of the contact force exerted by Box $A$ on Box $B$.<br><br><strong>(e)</strong> State which of Newton's laws of motion implies that the force exerted by Box $B$ on Box $A$ has the same magnitude as the force calculated in part <strong>(d)</strong>.",
    "steps": [
        "<strong>(a) Acceleration of the boxes:</strong><br><br>Using $v = u + at$ with $u = 0$, $v = 1.8\\text{ m s}^{-1}$, and $t = 3\\text{ s}$:\\begin{aligned} &1.8 = 0 + 3a \\cr &a = 0.6\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Total frictional force:</strong><br><br>Total mass is $M = 5 + 3 = 8\\text{ kg}$.<br><br>Total normal reaction:\\begin{aligned} R_{\\text{tot}} &= 8(9.8) \\cr &= 78.4\\text{ N} \\end{aligned}<br><br>Total friction:\\begin{aligned} F_{\\text{tot}} &= 0.2(78.4) \\cr &= 15.68\\text{ N} \\cr &\\approx 15.7\\text{ N (3 s.f.)} \\end{aligned}",
        "<strong>(c) Pushing force $P$:</strong><br><br>Applying Newton's second law to the combined system:\\begin{aligned} &P - F_{\\text{tot}} = M a \\cr &P - 15.68 = 8(0.6) \\cr &P - 15.68 = 4.8 \\cr &P = 20.48\\text{ N} \\cr &P \\approx 20.5\\text{ N (3 s.f.)} \\end{aligned}",
        "<strong>(d) Contact force between boxes:</strong><br><br>Let $C$ be the normal contact force exerted by $A$ on $B$.<br><br>Considering Box $B$ alone ($m_B = 3\\text{ kg}$):<br>Friction on $B$ is $F_B = 0.2(3)(9.8) = 5.88\\text{ N}$.<br><br>Equation of motion for Box $B$:\\begin{aligned} &C - F_B = m_B a \\cr &C - 5.88 = 3(0.6) \\cr &C - 5.88 = 1.8 \\cr &C = 7.68\\text{ N} \\end{aligned}",
        "<strong>(e) Newton's law:</strong><br><br><strong>Newton's Third Law</strong> of motion states that when body $A$ exerts a force on body $B$, body $B$ exerts an equal and opposite force on body $A$.",
        "Final Answer: (a) $0.6\\text{ m s}^{-2}$, (b) $15.7\\text{ N}$, (c) $20.5\\text{ N}$, (d) $7.68\\text{ N}$, (e) Newton's Third Law"
    ],
    "pi_options": [
        {
            "ans": "(a) $0.6\\text{ m s}^{-2}$, (b) $15.7\\text{ N}$, (c) $20.5\\text{ N}$, (d) $1.80\\text{ N}$, (e) Newton's Third Law",
            "feedback": "You forgot to account for friction on Box $B$ when finding the contact force. For Box $B$, $C - F_B = m_B a$, so\\begin{aligned} C &= 3(0.6) + 5.88 \\cr &= 7.68\\text{ N} \\end{aligned}not just $3(0.6) = 1.80\\text{ N}$."
        },
        {
            "ans": "(a) $0.6\\text{ m s}^{-2}$, (b) $15.7\\text{ N}$, (c) $20.5\\text{ N}$, (d) $7.68\\text{ N}$, (e) Newton's First Law",
            "feedback": "You cited Newton's First Law instead of Newton's Third Law. Newton's Third Law is the principle of action and reaction that guarantees forces between interacting bodies are equal in magnitude and opposite in direction."
        },
        {
            "ans": "(a) $0.6\\text{ m s}^{-2}$, (b) $9.80\\text{ N}$, (c) $12.8\\text{ N}$, (d) $7.68\\text{ N}$, (e) Newton's Third Law",
            "feedback": "You only calculated friction on Box $A$. Friction acts on both boxes across the floor, giving a total friction of $0.2(5 + 3)(9.8) = 15.68\\text{ N}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Internal Contact Force Consistency",
        "content": "You can verify the contact force $C = 7.68\\text{ N}$ by considering Box $A$ alone ($m_A = 5\\text{ kg}$). By Newton's Third Law, Box $B$ pushes back on $A$ with force $C$. The equation for Box $A$ is $P - C - F_A = m_A a$. Substituting gives $20.48 - 7.68 - 9.8 = 3.0 = 5(0.6)$, confirming consistency."
    }
},
{
    "id": "012155",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "A",
    "major_area": "Forces and Newton's Laws",
    "topic": "Dynamics on Inclined Planes",
    "subtopic": [
        "Horizontal Force on Slope",
        "Normal Reaction",
        "Limiting Friction"
    ],
    "img": false,
    "question": "A box of mass $4\\text{ kg}$ is pushed up a rough plane inclined at an angle $\\alpha$ to the horizontal, where $\\tan\\alpha = \\dfrac{5}{12}$. The pushing force acts horizontally and has a constant magnitude of $P\\text{ N}$.<br><br>The coefficient of friction between the box and the plane is $\\mu = 0.3$. The box starts from rest and accelerates up the plane, travelling a distance of $2.5\\text{ m}$ along the line of greatest slope in $2\\text{ seconds}$.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Calculate the acceleration of the box up the plane.<br><br><strong>(b)</strong> Write down the exact values of $\\sin\\alpha$ and $\\cos\\alpha$.<br><br><strong>(c)</strong> Show that the normal reaction $R\\text{ N}$ between the box and the plane is given by $R = \\dfrac{470.4 + 5P}{13}$.<br><br><strong>(d)</strong> By resolving forces parallel to the plane, calculate the magnitude of the horizontal pushing force $P$, giving your answer correct to 3 significant figures.",
    "steps": [
        "<strong>(a) Acceleration up the plane:</strong><br><br>Using $s = ut + \\dfrac{1}{2}at^2$ with $u = 0$, $s = 2.5\\text{ m}$, and $t = 2\\text{ s}$:\\begin{aligned} &2.5 = 0 + \\dfrac{1}{2}a(2^2) \\cr &2.5 = 2a \\cr &a = 1.25\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Exact trigonometric values:</strong><br><br>Using a right-angled triangle with opposite $5$ and adjacent $12$:\\begin{aligned} \\text{Hypotenuse} &= \\sqrt{5^2 + 12^2} \\cr &= 13 \\end{aligned}<br><br>Therefore:\\begin{aligned} \\sin\\alpha = \\dfrac{5}{13}, \\quad \\cos\\alpha = \\dfrac{12}{13} \\end{aligned}",
        "<strong>(c) Normal reaction $R$:</strong><br><br>Resolving perpendicular to the plane ($\\nwarrow$):\\begin{aligned} R &= mg\\cos\\alpha + P\\sin\\alpha \\cr &= 4(9.8)\\left(\\dfrac{12}{13}\\right) + P\\left(\\dfrac{5}{13}\\right) \\cr &= 39.2\\left(\\dfrac{12}{13}\\right) + \\dfrac{5P}{13} \\cr &= \\dfrac{470.4 + 5P}{13} \\end{aligned}",
        "<strong>(d) Pushing force $P$:</strong><br><br>Resolving parallel to the plane ($\\nearrow$):\\begin{aligned} P\\cos\\alpha - mg\\sin\\alpha - F_r = ma \\end{aligned}<br><br>Friction is $F_r = \\mu R = 0.3\\left(\\dfrac{470.4 + 5P}{13}\\right)$:\\begin{aligned} &P\\left(\\dfrac{12}{13}\\right) - 39.2\\left(\\dfrac{5}{13}\\right) - 0.3\\left(\\dfrac{470.4 + 5P}{13}\\right) = 4(1.25) \\end{aligned}<br><br>Multiplying through by $13$:\\begin{aligned} &12P - 196 - 0.3(470.4 + 5P) = 65 \\cr &12P - 196 - 141.12 - 1.5P = 65 \\cr &10.5P - 337.12 = 65 \\cr &10.5P = 402.12 \\cr &P = \\dfrac{402.12}{10.5} \\cr &P \\approx 38.3\\text{ N} \\end{aligned}",
        "Final Answer: (a) $1.25\\text{ m s}^{-2}$, (b) $\\sin\\alpha = \\dfrac{5}{13}, \\cos\\alpha = \\dfrac{12}{13}$, (d) $38.3\\text{ N}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $1.25\\text{ m s}^{-2}$, (b) $\\sin\\alpha = \\dfrac{5}{13}, \\cos\\alpha = \\dfrac{12}{13}$, (d) $30.8\\text{ N}$",
            "feedback": "You omitted the component of the pushing force in the normal reaction, writing $R = mg\\cos\\alpha$. Because $P$ is horizontal, it pushes into the plane, increasing $R$ to $\\frac{470.4 + 5P}{13}$, which increases friction and raises $P$ to $38.3\\text{ N}$."
        },
        {
            "ans": "(a) $1.25\\text{ m s}^{-2}$, (b) $\\sin\\alpha = \\dfrac{12}{13}, \\cos\\alpha = \\dfrac{5}{13}$, (d) $38.3\\text{ N}$",
            "feedback": "You swapped sine and cosine. With $\\tan\\alpha = \\frac{5}{12}$, the opposite side is $5$ and adjacent is $12$, so $\\sin\\alpha = \\frac{5}{13}$ and $\\cos\\alpha = \\frac{12}{13}$."
        },
        {
            "ans": "(a) $0.625\\text{ m s}^{-2}$, (b) $\\sin\\alpha = \\dfrac{5}{13}, \\cos\\alpha = \\dfrac{12}{13}$, (d) $35.7\\text{ N}$",
            "feedback": "You forgot to square $t$ in $s = \\frac{1}{2}at^2$, writing $2.5 = 2a$ without squaring $2$, leading to an incorrect acceleration."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Horizontal Force on an Incline",
        "content": "When a force acting on an inclined plane is horizontal, both perpendicular and parallel force equations involve $P$. The component pressing into the slope is $P\\sin\\alpha$, which increases $R$ and therefore increases friction. The driving component along the slope is $P\\cos\\alpha$. Never confuse a horizontal push with a push directed parallel to the incline."
    }
}
];