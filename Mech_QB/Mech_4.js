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
        "<strong>(c) Calculating pushing force $P$:</strong><br><br>Resolving horizontally ($\\rightarrow$):\\begin{aligned} P\\cos 30^\\circ - F_r = ma \\end{aligned}<br><br>Substitute $F_r = \\mu R = 0.25(117.6 + 0.5P)$:\\begin{aligned} &P\\cos 30^\\circ - 0.25(117.6 + 0.5P) \\cr& \\qquad \\qquad= 12(0.8) \\cr &P\\cos 30^\\circ - 29.4 - 0.125P = 9.6 \\cr &P(\\cos 30^\\circ - 0.125) = 39.0 \\end{aligned}<br><br>Evaluating $P$:\\begin{aligned} &P(0.8660 - 0.125) = 39.0 \\cr &0.7410P = 39.0 \\cr &P = \\dfrac{39.0}{0.7410} \\cr &P \\approx 52.6\\text{ N} \\end{aligned}",
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
        "<strong>(d) Pushing force $P$:</strong><br><br>Resolving parallel to the plane ($\\nearrow$):\\begin{aligned} P\\cos\\alpha - mg\\sin\\alpha - F_r = ma \\end{aligned}<br><br>Friction is $F_r = \\mu R = 0.3\\left(\\dfrac{470.4 + 5P}{13}\\right)$:\\begin{aligned} &P\\left(\\dfrac{12}{13}\\right) - 39.2\\left(\\dfrac{5}{13}\\right)\\cr & \\qquad - 0.3\\left(\\dfrac{470.4 + 5P}{13}\\right) = 4(1.25) \\end{aligned}<br><br>Multiplying through by $13$:\\begin{aligned} &12P - 196 - 0.3(470.4 + 5P) = 65 \\cr &12P - 196 - 141.12 - 1.5P = 65 \\cr &10.5P - 337.12 = 65 \\cr &10.5P = 402.12 \\cr &P = \\dfrac{402.12}{10.5} \\cr &P \\approx 38.3\\text{ N} \\end{aligned}",
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
},
{
    "id": "012156",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Vectors in Kinematics",
    "subtopic": [
        "2D Calculus Kinematics",
        "Stationary Conditions",
        "Constant Acceleration"
    ],
    "img": false,
    "question": "The position vector $\\mathbf{r}\\text{ metres}$ of a particle at time $t\\text{ seconds}$ ($t \\ge 0$) is given by:\\begin{aligned} \\mathbf{r} &= (5 + 16t - 2t^2)\\mathbf{i} \\cr &\\qquad + (3t^2 - 24t)\\mathbf{j} \\end{aligned}where $\\mathbf{i}$ and $\\mathbf{j}$ are perpendicular horizontal unit vectors.<br><br><strong>(a)</strong> Find an expression in terms of $t$ for the velocity vector $\\mathbf{v}$ of the particle.<br><br><strong>(b)</strong> Determine whether the particle is ever instantaneously at rest, fully justifying your answer.<br><br><strong>(c)</strong> Find the position vector of the particle at the instant when it is at rest, and calculate its distance from the origin at this time.<br><br><strong>(d)</strong> Find the acceleration vector of the particle, and calculate the magnitude of the resultant force acting on the particle given that its mass is $0.5\\text{ kg}$.",
    "steps": [
        "<strong>(a) Velocity vector:</strong><br><br>Differentiating $\\mathbf{r}$ with respect to $t$:\\begin{aligned} \\mathbf{v} &= \\dfrac{\\text{d}\\mathbf{r}}{\\text{d}t} \\cr &= (16 - 4t)\\mathbf{i} \\cr &\\qquad + (6t - 24)\\mathbf{j} \\end{aligned}",
        "<strong>(b) Determining if at rest:</strong><br><br>For the particle to be at rest, both components of velocity must be zero simultaneously:\\begin{aligned} &16 - 4t = 0 \\implies t = 4 \\cr &6t - 24 = 0 \\implies t = 4 \\end{aligned}<br><br>Since both components vanish at the same instant, the particle is instantaneously at rest at $t = 4\\text{ s}$.",
        "<strong>(c) Position vector and distance:</strong><br><br>Evaluating components at $t = 4\\text{ s}$:\\begin{aligned} r_x &= 5 + 16(4) - 2(4^2) \\cr &= 5 + 64 - 32 \\cr &= 37\\text{ m} \\cr r_y &= 3(4^2) - 24(4) \\cr &= 48 - 96 \\cr &= -48\\text{ m} \\end{aligned}<br><br>Position vector:\\begin{aligned} \\mathbf{r}(4) = (37\\mathbf{i} - 48\\mathbf{j})\\text{ m} \\end{aligned}<br><br>Distance from origin:\\begin{aligned} d &= \\sqrt{37^2 + (-48)^2} \\cr &= \\sqrt{1369 + 2304} \\cr &= \\sqrt{3673} \\cr &\\approx 60.6\\text{ m} \\end{aligned}",
        "<strong>(d) Acceleration and force:</strong><br><br>Differentiating $\\mathbf{v}$ with respect to $t$:\\begin{aligned} \\mathbf{a} &= \\dfrac{\\text{d}\\mathbf{v}}{\\text{d}t} \\cr &= (-4\\mathbf{i} + 6\\mathbf{j})\\text{ m s}^{-2} \\end{aligned}<br><br>Magnitude of acceleration:\\begin{aligned} |\\mathbf{a}| &= \\sqrt{(-4)^2 + 6^2} \\cr &= \\sqrt{16 + 36} \\cr &= \\sqrt{52}\\text{ m s}^{-2} \\end{aligned}<br><br>Using $\\mathbf{F} = m\\mathbf{a}$ with $m = 0.5\\text{ kg}$:\\begin{aligned} |\\mathbf{F}| &= 0.5\\sqrt{52} \\cr &= \\sqrt{13} \\cr &\\approx 3.61\\text{ N} \\end{aligned}",
        "Final Answer: (b) At rest at $t = 4\\text{ s}$, (c) $(37\\mathbf{i} - 48\\mathbf{j})\\text{ m}, 60.6\\text{ m}$, (d) $3.61\\text{ N}$"
    ],
    "pi_options": [
        {
            "ans": "(b) Never at rest, (c) $(37\\mathbf{i} - 48\\mathbf{j})\\text{ m}, 60.6\\text{ m}$, (d) $3.61\\text{ N}$",
            "feedback": "You concluded that the particle is never at rest. Setting both components of velocity to zero gives\\begin{aligned} 16 - 4t &= 0 \\cr 6t - 24 &= 0 \\end{aligned}Both equations yield $t = 4\\text{ s}$ simultaneously, so the particle is at rest at $t = 4\\text{ s}$."
        },
        {
            "ans": "(b) At rest at $t = 4\\text{ s}$, (c) $(37\\mathbf{i} - 48\\mathbf{j})\\text{ m}, 85.0\\text{ m}$, (d) $3.61\\text{ N}$",
            "feedback": "You added the component magnitudes directly ($37 + 48 = 85$) instead of using Pythagoras' theorem to find distance from the origin:\\begin{aligned} d &= \\sqrt{37^2 + (-48)^2} \\cr &= \\sqrt{1369 + 2304} \\cr &\\approx 60.6\\text{ m} \\end{aligned}"
        },
        {
            "ans": "(b) At rest at $t = 4\\text{ s}$, (c) $(37\\mathbf{i} - 48\\mathbf{j})\\text{ m}, 60.6\\text{ m}$, (d) $7.21\\text{ N}$",
            "feedback": "You forgot to multiply acceleration by the mass ($m = 0.5\\text{ kg}$), giving the magnitude of acceleration ($\\sqrt{52} \\approx 7.21\\text{ m s}^{-2}$) instead of force ($0.5 \\times 7.21 \\approx 3.61\\text{ N}$)."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Stationary in 2D",
        "content": "For a particle to be stationary in two dimensions, both velocity components must be zero at the exact same instant ($v_x = 0$ and $v_y = 0$). If $v_x = 0$ at $t = 2$ and $v_y = 0$ at $t = 3$, the particle is never at rest; it simply moves parallel to the axes at those respective times."
    }
},
{
    "id": "012157",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Vectors in Kinematics",
    "subtopic": [
        "Component Zeros",
        "Directional Motion",
        "Minimum Speed"
    ],
    "img": false,
    "question": "A particle moves in a horizontal plane such that its position vector $\\mathbf{r}\\text{ metres}$ at time $t\\text{ seconds}$ ($t \\ge 0$) is given by:\\begin{aligned} \\mathbf{r} &= (5 + 4t - t^2)\\mathbf{i} \\cr &\\qquad + (t^2 - 8t + 3)\\mathbf{j} \\end{aligned}where $\\mathbf{i}$ and $\\mathbf{j}$ are fixed perpendicular unit vectors.<br><br><strong>(a)</strong> Find an expression for the velocity vector $\\mathbf{v}$ of the particle at time $t$.<br><br><strong>(b)</strong> Explain why the particle is never stationary.<br><br><strong>(c)</strong> Find the speed of the particle at the instant when it is moving parallel to the unit vector $\\mathbf{j}$.<br><br><strong>(d)</strong> Find the speed of the particle at the instant when it is moving parallel to the unit vector $\\mathbf{i}$.<br><br><strong>(e)</strong> Find the value of $t$ for which the speed of the particle is a minimum, and calculate this minimum speed in exact surd form.",
    "steps": [
        "<strong>(a) Velocity vector:</strong><br><br>Differentiating $\\mathbf{r}$ with respect to $t$:\\begin{aligned} \\mathbf{v} &= \\dfrac{\\text{d}\\mathbf{r}}{\\text{d}t} \\cr &= (4 - 2t)\\mathbf{i} \\cr &\\qquad + (2t - 8)\\mathbf{j} \\end{aligned}",
        "<strong>(b) Explaining why never stationary:</strong><br><br>Equating each component to zero:\\begin{aligned} &4 - 2t = 0 \\implies t = 2 \\cr &2t - 8 = 0 \\implies t = 4 \\end{aligned}<br><br>Because the two components vanish at different times ($2 \\ne 4$), there is no value of $t$ where $\\mathbf{v} = \\mathbf{0}$. Therefore, the particle is never stationary.",
        "<strong>(c) Speed when parallel to $\\mathbf{j}$:</strong><br><br>Moving parallel to $\\mathbf{j}$ requires the $\\mathbf{i}$ component to be zero:\\begin{aligned} &4 - 2t = 0 \\cr &t = 2\\text{ s} \\end{aligned}<br><br>At $t = 2\\text{ s}$:\\begin{aligned} v_y &= 2(2) - 8 \\cr &= -4\\text{ m s}^{-1} \\end{aligned}<br><br>Speed is $|v_y| = 4\\text{ m s}^{-1}$.",
        "<strong>(d) Speed when parallel to $\\mathbf{i}$:</strong><br><br>Moving parallel to $\\mathbf{i}$ requires the $\\mathbf{j}$ component to be zero:\\begin{aligned} &2t - 8 = 0 \\cr &t = 4\\text{ s} \\end{aligned}<br><br>At $t = 4\\text{ s}$:\\begin{aligned} v_x &= 4 - 2(4) \\cr &= -4\\text{ m s}^{-1} \\end{aligned}<br><br>Speed is $|v_x| = 4\\text{ m s}^{-1}$.",
        "<strong>(e) Minimum speed:</strong><br><br>Expanding speed squared:\\begin{aligned} v^2 &= (4 - 2t)^2 + (2t - 8)^2 \\cr &= (16 - 16t + 4t^2) \\cr &\\quad + (4t^2 - 32t + 64) \\cr &= 8t^2 - 48t + 80 \\end{aligned}<br><br>Completing the square:\\begin{aligned} v^2 &= 8(t^2 - 6t) + 80 \\cr &= 8\\big((t - 3)^2 - 9\\big) + 80 \\cr &= 8(t - 3)^2 + 8 \\end{aligned}<br><br>The minimum occurs when $t = 3\\text{ s}$. The minimum speed is:\\begin{aligned} v_{\\text{min}} &= \\sqrt{8} \\cr &= 2\\sqrt{2}\\text{ m s}^{-1} \\end{aligned}",
        "Final Answer: (b) Never stationary, (c) $4\\text{ m s}^{-1}$, (d) $4\\text{ m s}^{-1}$, (e) $t = 3\\text{ s}, 2\\sqrt{2}\\text{ m s}^{-1}$"
    ],
    "pi_options": [
        {
            "ans": "(b) Stationary at $t = 2\\text{ s}$ and $t = 4\\text{ s}$, (c) $4\\text{ m s}^{-1}$, (d) $4\\text{ m s}^{-1}$, (e) $t = 3\\text{ s}, 2\\sqrt{2}\\text{ m s}^{-1}$",
            "feedback": "You assumed the particle is stationary whenever one component is zero. For the particle to be stationary, both components must be zero at the same time. Since $v_x = 0$ at $t = 2$ and $v_y = 0$ at $t = 4$, the particle is never stationary."
        },
        {
            "ans": "(b) Never stationary, (c) $4\\text{ m s}^{-1}$, (d) $4\\text{ m s}^{-1}$, (e) $t = 3\\text{ s}, 8\\text{ m s}^{-1}$",
            "feedback": "You forgot to take the square root when finding minimum speed. At $t = 3$, $v^2 = 8$, so the minimum speed is\\begin{aligned} v &= \\sqrt{8} \\cr &= 2\\sqrt{2}\\text{ m s}^{-1} \\end{aligned}"
        },
        {
            "ans": "(b) Never stationary, (c) $0\\text{ m s}^{-1}$, (d) $0\\text{ m s}^{-1}$, (e) $t = 3\\text{ s}, 2\\sqrt{2}\\text{ m s}^{-1}$",
            "feedback": "You confused moving parallel to an axis with being at rest in that direction. When moving parallel to $\\mathbf{j}$, $v_x = 0$, but the speed in the $\\mathbf{j}$ direction is $|2(2) - 8| = 4\\text{ m s}^{-1}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Minimising Speed Squared",
        "content": "To find the minimum speed, always minimise $v^2$ rather than dealing with square root derivatives. Completing the square on $8t^2 - 48t + 80 = 8(t - 3)^2 + 8$ instantly identifies $t = 3$ and $v_{\\text{min}} = \\sqrt{8} = 2\\sqrt{2}\\text{ m s}^{-1}$ without needing calculus."
    }
},
{
    "id": "012158",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Vectors in Kinematics",
    "subtopic": [
        "Variable Acceleration",
        "Newton's Second Law",
        "Direction of Motion"
    ],
    "img": false,
    "question": "A particle $P$ of mass $0.5\\text{ kg}$ moves in a horizontal plane. At time $t\\text{ seconds}$ ($t \\ge 0$), its position vector $\\mathbf{r}\\text{ metres}$ relative to a fixed origin is given by:\\begin{aligned} \\mathbf{r} &= (t^3 - 6t^2 + 9t)\\mathbf{i} \\cr &\\qquad + (2t^2 - 8t)\\mathbf{j} \\end{aligned}<strong>(a)</strong> Find expressions in terms of $t$ for:<br><strong>(i)</strong> the velocity vector $\\mathbf{v}$ of the particle,<br><strong>(ii)</strong> the acceleration vector $\\mathbf{a}$ of the particle.<br><br><strong>(b)</strong> Calculate the magnitude of the net force acting on the particle at time $t = 4\\text{ seconds}$.<br><br><strong>(c)</strong> Find the two non-negative values of $t$ at which the particle is moving parallel to the unit vector $\\mathbf{j}$.<br><br><strong>(d)</strong> For each time found in part <strong>(c)</strong>, state whether the particle is moving in the positive or negative $\\mathbf{j}$ direction.",
    "steps": [
        "<strong>(a)(i) Velocity vector:</strong><br><br>Differentiating $\\mathbf{r}$ with respect to $t$:\\begin{aligned} \\mathbf{v} &= \\dfrac{\\text{d}\\mathbf{r}}{\\text{d}t} \\cr &= (3t^2 - 12t + 9)\\mathbf{i} \\cr &\\qquad + (4t - 8)\\mathbf{j} \\end{aligned}",
        "<strong>(a)(ii) Acceleration vector:</strong><br><br>Differentiating $\\mathbf{v}$ with respect to $t$:\\begin{aligned} \\mathbf{a} &= \\dfrac{\\text{d}\\mathbf{v}}{\\text{d}t} \\cr &= (6t - 12)\\mathbf{i} + 4\\mathbf{j} \\end{aligned}",
        "<strong>(b) Force magnitude at $t = 4\\text{ s}$:</strong><br><br>Acceleration at $t = 4\\text{ s}$:\\begin{aligned} \\mathbf{a}(4) &= \\big(6(4) - 12\\big)\\mathbf{i} + 4\\mathbf{j} \\cr &= 12\\mathbf{i} + 4\\mathbf{j}\\text{ m s}^{-2} \\end{aligned}<br><br>Using $\\mathbf{F} = m\\mathbf{a}$ with $m = 0.5\\text{ kg}$:\\begin{aligned} \\mathbf{F} &= 0.5(12\\mathbf{i} + 4\\mathbf{j}) \\cr &= (6\\mathbf{i} + 2\\mathbf{j})\\text{ N} \\end{aligned}<br><br>Magnitude of force:\\begin{aligned} |\\mathbf{F}| &= \\sqrt{6^2 + 2^2} \\cr &= \\sqrt{36 + 4} \\cr &= \\sqrt{40} \\cr &= 2\\sqrt{10} \\cr &\\approx 6.32\\text{ N} \\end{aligned}",
        "<strong>(c) Times when parallel to $\\mathbf{j}$:</strong><br><br>Moving parallel to $\\mathbf{j}$ requires the $\\mathbf{i}$ component of velocity to be zero:\\begin{aligned} &3t^2 - 12t + 9 = 0 \\cr &t^2 - 4t + 3 = 0 \\cr &(t - 1)(t - 3) = 0 \\cr &t = 1\\text{ s}, \\quad t = 3\\text{ s} \\end{aligned}",
        "<strong>(d) Direction at each time:</strong><br><br>At $t = 1\\text{ s}$:\\begin{aligned} v_y &= 4(1) - 8 \\cr &= -4\\text{ m s}^{-1} \\end{aligned}Since $v_y < 0$, motion is in the <strong>negative $\\mathbf{j}$ direction</strong>.<br><br>At $t = 3\\text{ s}$:\\begin{aligned} v_y &= 4(3) - 8 \\cr &= 4\\text{ m s}^{-1} \\end{aligned}Since $v_y > 0$, motion is in the <strong>positive $\\mathbf{j}$ direction</strong>.",
        "Final Answer: (b) $6.32\\text{ N}$, (c) $t = 1\\text{ s}, t = 3\\text{ s}$, (d) Negative $\\mathbf{j}$ at $t = 1\\text{ s}$, Positive $\\mathbf{j}$ at $t = 3\\text{ s}$"
    ],
    "pi_options": [
        {
            "ans": "(b) $12.6\\text{ N}$, (c) $t = 1\\text{ s}, t = 3\\text{ s}$, (d) Negative $\\mathbf{j}$ at $t = 1\\text{ s}$, Positive $\\mathbf{j}$ at $t = 3\\text{ s}$",
            "feedback": "You forgot to multiply acceleration by the mass ($m = 0.5\\text{ kg}$). At $t = 4$, $|\\mathbf{a}| = \\sqrt{160} \\approx 12.65\\text{ m s}^{-2}$, so the force magnitude is $0.5 \\times 12.65 \\approx 6.32\\text{ N}$."
        },
        {
            "ans": "(b) $6.32\\text{ N}$, (c) $t = 2\\text{ s}$, (d) Positive $\\mathbf{j}$ at $t = 2\\text{ s}$",
            "feedback": "You set the $\\mathbf{j}$ component of velocity to zero instead of the $\\mathbf{i}$ component. Moving parallel to $\\mathbf{j}$ requires $v_x = 0$, which gives $3t^2 - 12t + 9 = 0 \\implies t = 1\\text{ s}$ and $t = 3\\text{ s}$."
        },
        {
            "ans": "(b) $6.32\\text{ N}$, (c) $t = 1\\text{ s}, t = 3\\text{ s}$, (d) Positive $\\mathbf{j}$ at $t = 1\\text{ s}$, Negative $\\mathbf{j}$ at $t = 3\\text{ s}$",
            "feedback": "You reversed the directions. At $t = 1$, $v_y = 4(1) - 8 = -4$, so the direction is negative $\\mathbf{j}$. At $t = 3$, $v_y = 4(3) - 8 = +4$, so the direction is positive $\\mathbf{j}$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Parallel vs Direction",
        "content": "Moving <em>parallel</em> to a vector allows motion in either the positive or negative sense. When moving parallel to $\\mathbf{j}$, the velocity vector has the form $k\\mathbf{j}$. If $k > 0$, the motion is in the positive direction; if $k < 0$, it is in the negative direction."
    }
},
{
    "id": "012159",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Vectors in Kinematics",
    "subtopic": [
        "2D Vector Integration",
        "Constants of Integration",
        "Position from Origin"
    ],
    "img": false,
    "question": "A particle of mass $3\\text{ kg}$ moves in a horizontal plane. At time $t\\text{ seconds}$ ($t \\ge 0$), the acceleration $\\mathbf{a}\\text{ m s}^{-2}$ of the particle is given by:$$\\mathbf{a} = (6t - 4)\\mathbf{i} + 2\\mathbf{j}$$When $t = 0$, the particle has velocity $\\mathbf{v} = (3\\mathbf{i} - 6\\mathbf{j})\\text{ m s}^{-1}$ and position vector $\\mathbf{r} = (2\\mathbf{i} + 5\\mathbf{j})\\text{ m}$ relative to a fixed origin.<br><br><strong>(a)</strong> Find an expression for the velocity vector $\\mathbf{v}$ of the particle at time $t$.<br><br><strong>(b)</strong> Find the time at which the particle is moving parallel to the unit vector $\\mathbf{i}$, and state its velocity at this instant.<br><br><strong>(c)</strong> Calculate the speed of the particle when $t = 2\\text{ seconds}$.<br><br><strong>(d)</strong> Find an expression for the position vector $\\mathbf{r}$ of the particle at time $t$.<br><br><strong>(e)</strong> Calculate the distance of the particle from the origin when $t = 3\\text{ seconds}$, giving your answer correct to 3 significant figures.",
    "steps": [
        "<strong>(a) Velocity vector $\\mathbf{v}$:</strong><br><br>Integrating $\\mathbf{a}$ with respect to $t$:\\begin{aligned} \\mathbf{v} &= \\int \\big((6t - 4)\\mathbf{i} + 2\\mathbf{j}\\big)\\text{d}t \\cr &= (3t^2 - 4t + c_1)\\mathbf{i} + (2t + c_2)\\mathbf{j} \\end{aligned}<br><br>Using $\\mathbf{v}(0) = 3\\mathbf{i} - 6\\mathbf{j}$:\\begin{aligned} c_1 = 3, \\quad c_2 = -6 \\end{aligned}<br><br>Therefore:\\begin{aligned} \\mathbf{v} = (3t^2 - 4t + 3)\\mathbf{i} + (2t - 6)\\mathbf{j} \\end{aligned}",
        "<strong>(b) Moving parallel to $\\mathbf{i}$:</strong><br><br>Moving parallel to $\\mathbf{i}$ requires the $\\mathbf{j}$ component to be zero:\\begin{aligned} &2t - 6 = 0 \\cr &t = 3\\text{ s} \\end{aligned}<br><br>At $t = 3\\text{ s}$:\\begin{aligned} v_x &= 3(3^2) - 4(3) + 3 \\cr &= 27 - 12 + 3 \\cr &= 18\\text{ m s}^{-1} \\end{aligned}<br><br>The velocity is $18\\mathbf{i}\\text{ m s}^{-1}$.",
        "<strong>(c) Speed at $t = 2\\text{ s}$:</strong><br><br>Evaluating components at $t = 2\\text{ s}$:\\begin{aligned} v_x &= 3(2^2) - 4(2) + 3 \\cr &= 12 - 8 + 3 \\cr &= 7\\text{ m s}^{-1} \\cr v_y &= 2(2) - 6 \\cr &= -2\\text{ m s}^{-1} \\end{aligned}<br><br>Speed is:\\begin{aligned} |\\mathbf{v}| &= \\sqrt{7^2 + (-2)^2} \\cr &= \\sqrt{49 + 4} \\cr &= \\sqrt{53} \\cr &\\approx 7.28\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(d) Position vector $\\mathbf{r}$:</strong><br><br>Integrating $\\mathbf{v}$ with respect to $t$:\\begin{aligned} \\mathbf{r} &= \\int \\big((3t^2 - 4t + 3)\\mathbf{i} + (2t - 6)\\mathbf{j}\\big)\\text{d}t \\cr &= (t^3 - 2t^2 + 3t + k_1)\\mathbf{i} \\cr &\\quad + (t^2 - 6t + k_2)\\mathbf{j} \\end{aligned}<br><br>Using $\\mathbf{r}(0) = 2\\mathbf{i} + 5\\mathbf{j}$ gives $k_1 = 2$ and $k_2 = 5$:\\begin{aligned} \\mathbf{r} &= (t^3 - 2t^2 + 3t + 2)\\mathbf{i} \\cr &\\quad + (t^2 - 6t + 5)\\mathbf{j} \\end{aligned}",
        "<strong>(e) Distance from origin at $t = 3\\text{ s}$:</strong><br><br>Evaluating position components at $t = 3$:\\begin{aligned} r_x &= 3^3 - 2(3^2) + 3(3) + 2 \\cr &= 27 - 18 + 9 + 2 \\cr &= 20\\text{ m} \\cr r_y &= 3^2 - 6(3) + 5 \\cr &= 9 - 18 + 5 \\cr &= -4\\text{ m} \\end{aligned}<br><br>Distance from origin:\\begin{aligned} d &= \\sqrt{20^2 + (-4)^2} \\cr &= \\sqrt{400 + 16} \\cr &= \\sqrt{416} \\cr &\\approx 20.4\\text{ m} \\end{aligned}",
        "Final Answer: (b) $t = 3\\text{ s}, 18\\mathbf{i}\\text{ m s}^{-1}$, (c) $7.28\\text{ m s}^{-1}$, (e) $20.4\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(b) $t = 3\\text{ s}, 18\\mathbf{i}\\text{ m s}^{-1}$, (c) $7.28\\text{ m s}^{-1}$, (e) $24.0\\text{ m}$",
            "feedback": "You added the coordinates ($20 + 4 = 24$) instead of using Pythagoras' theorem to find distance from the origin:\\begin{aligned} d &= \\sqrt{20^2 + (-4)^2} \\cr &= \\sqrt{416} \\cr &\\approx 20.4\\text{ m} \\end{aligned}"
        },
        {
            "ans": "(b) $t = 3\\text{ s}, 18\\mathbf{i}\\text{ m s}^{-1}$, (c) $5.00\\text{ m s}^{-1}$, (e) $20.4\\text{ m}$",
            "feedback": "You forgot the constant of integration in the $\\mathbf{i}$ component of velocity. At $t = 2$, $v_x = 3(4) - 4(2) + 3 = 7\\text{ m s}^{-1}$, giving speed $\\sqrt{7^2 + (-2)^2} = \\sqrt{53} \\approx 7.28\\text{ m s}^{-1}$."
        },
        {
            "ans": "(b) $t = 1\\text{ s}, 2\\mathbf{i}\\text{ m s}^{-1}$, (c) $7.28\\text{ m s}^{-1}$, (e) $20.4\\text{ m}$",
            "feedback": "You solved $2t - 6 = 0$ incorrectly as $t = 1\\text{ s}$. Solving gives $2t = 6 \\implies t = 3\\text{ s}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Vector Constants of Integration",
        "content": "When integrating vector acceleration twice to obtain position, each component acquires its own independent constant of integration: $\\mathbf{c} = c_1\\mathbf{i} + c_2\\mathbf{j}$ for velocity, and $\\mathbf{k} = k_1\\mathbf{i} + k_2\\mathbf{j}$ for position. Never assume these constants are zero unless the question explicitly states that the particle starts from rest at the origin."
    }
},
{
    "id": "012160",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Vectors in Kinematics",
    "subtopic": [
        "Trigonometric Vectors",
        "Speed Extrema",
        "Central Acceleration"
    ],
    "img": false,
    "question": "A particle moves in a horizontal plane such that its position vector $\\mathbf{r}\\text{ metres}$ at time $t\\text{ seconds}$ ($t \\ge 0$) is given by:\\begin{aligned} \\mathbf{r} &= (4\\cos 2t)\\mathbf{i} \\cr &\\qquad + (3\\sin 2t)\\mathbf{j} \\end{aligned}where $\\mathbf{i}$ and $\\mathbf{j}$ are perpendicular unit vectors.<br><br><strong>(a)</strong> Find expressions for the velocity vector $\\mathbf{v}$ and the acceleration vector $\\mathbf{a}$ of the particle at time $t$.<br><br><strong>(b)</strong> Show that the acceleration vector satisfies $\\mathbf{a} = -4\\mathbf{r}$ for all $t$.<br><br><strong>(c)</strong> Calculate the speed of the particle when $t = \\dfrac{\\pi}{4}\\text{ seconds}$.<br><br><strong>(d)</strong> Show that the speed $v$ of the particle satisfies $v = \\sqrt{36 + 28\\sin^2 2t}$, and hence:<br><strong>(i)</strong> find the maximum speed of the particle,<br><strong>(ii)</strong> find the coordinates of the points where this maximum speed occurs.<br><br><strong>(e)</strong> Explain why the particle is never stationary.",
    "steps": [
        "<strong>(a) Velocity and acceleration vectors:</strong><br><br>Differentiating $\\mathbf{r}$ using the chain rule:\\begin{aligned} \\mathbf{v} &= \\dfrac{\\text{d}\\mathbf{r}}{\\text{d}t} \\cr &= (-8\\sin 2t)\\mathbf{i} \\cr &\\qquad + (6\\cos 2t)\\mathbf{j} \\end{aligned}<br><br>Differentiating $\\mathbf{v}$ with respect to $t$:\\begin{aligned} \\mathbf{a} &= \\dfrac{\\text{d}\\mathbf{v}}{\\text{d}t} \\cr &= (-16\\cos 2t)\\mathbf{i} \\cr &\\qquad - (12\\sin 2t)\\mathbf{j} \\end{aligned}",
        "<strong>(b) Showing $\\mathbf{a} = -4\\mathbf{r}$:</strong><br><br>Factoring $-4$ out of the acceleration vector:\\begin{aligned} \\mathbf{a} &= -4\\big((4\\cos 2t)\\mathbf{i} + (3\\sin 2t)\\mathbf{j}\\big) \\cr &= -4\\mathbf{r} \\end{aligned}",
        "<strong>(c) Speed at $t = \\dfrac{\\pi}{4}\\text{ s}$:</strong><br><br>When $t = \\dfrac{\\pi}{4}$, $2t = \\dfrac{\\pi}{2}$:\\begin{aligned} \\sin\\left(\\dfrac{\\pi}{2}\\right) = 1, \\quad \\cos\\left(\\dfrac{\\pi}{2}\\right) = 0 \\end{aligned}<br><br>Velocity vector:\\begin{aligned} \\mathbf{v}\\left(\\dfrac{\\pi}{4}\\right) &= -8(1)\\mathbf{i} + 6(0)\\mathbf{j} \\cr &= -8\\mathbf{i}\\text{ m s}^{-1} \\end{aligned}<br><br>Speed is $|\\mathbf{v}| = 8\\text{ m s}^{-1}$.",
        "<strong>(d) Speed expression and maximum:</strong><br><br>Evaluating $v^2$:\\begin{aligned} v^2 &= (-8\\sin 2t)^2 + (6\\cos 2t)^2 \\cr &= 64\\sin^2 2t + 36\\cos^2 2t \\cr &= 64\\sin^2 2t + 36(1 - \\sin^2 2t) \\cr &= 36 + 28\\sin^2 2t \\end{aligned}<br><br>Therefore $v = \\sqrt{36 + 28\\sin^2 2t}$.<br><br><strong>(d)(i) Maximum speed:</strong><br>Since $0 \\le \\sin^2 2t \\le 1$, the maximum occurs when $\\sin^2 2t = 1$:\\begin{aligned} v_{\\text{max}} &= \\sqrt{36 + 28(1)} \\cr &= \\sqrt{64} \\cr &= 8\\text{ m s}^{-1} \\end{aligned}<br><br><strong>(d)(ii) Coordinates:</strong><br>When $\\sin^2 2t = 1$, $\\cos 2t = 0$. Substituting into $\\mathbf{r}$ gives coordinates $(0, 3)$ and $(0, -3)$.",
        "<strong>(e) Explaining why never stationary:</strong><br><br>The minimum value of $\\sin^2 2t$ is $0$, which gives a minimum speed of:\\begin{aligned} v_{\\text{min}} &= \\sqrt{36 + 28(0)} \\cr &= 6\\text{ m s}^{-1} \\end{aligned}<br><br>Because the speed is always at least $6\\text{ m s}^{-1} > 0$, the particle is never stationary.",
        "Final Answer: (c) $8\\text{ m s}^{-1}$, (d)(i) $8\\text{ m s}^{-1}$, (d)(ii) $(0, 3)\\text{ and }(0, -3)$, (e) Never stationary"
    ],
    "pi_options": [
        {
            "ans": "(c) $8\\text{ m s}^{-1}$, (d)(i) $10\\text{ m s}^{-1}$, (d)(ii) $(4, 0)\\text{ and }(-4, 0)$, (e) Never stationary",
            "feedback": "You added the coefficients directly to find maximum speed. From the identity $v = \\sqrt{36 + 28\\sin^2 2t}$, the maximum occurs when $\\sin^2 2t = 1$, giving $v_{\\text{max}} = \\sqrt{36 + 28} = \\sqrt{64} = 8\\text{ m s}^{-1}$."
        },
        {
            "ans": "(c) $8\\text{ m s}^{-1}$, (d)(i) $8\\text{ m s}^{-1}$, (d)(ii) $(4, 0)\\text{ and }(-4, 0)$, (e) Never stationary",
            "feedback": "You identified the coordinates where $\\cos 2t = 1$ rather than $\\cos 2t = 0$. When $\\sin^2 2t = 1$, $\\cos 2t = 0$, so $\\mathbf{r} = 4(0)\\mathbf{i} \\pm 3(1)\\mathbf{j} = \\pm 3\\mathbf{j}$, giving coordinates $(0, 3)$ and $(0, -3)$."
        },
        {
            "ans": "(c) $6\\text{ m s}^{-1}$, (d)(i) $8\\text{ m s}^{-1}$, (d)(ii) $(0, 3)\\text{ and }(0, -3)$, (e) Stationary at $t = 0$",
            "feedback": "You evaluated speed at $t = \\frac{\\pi}{4}$ using $\\sin(\\pi/2) = 0$ instead of $1$. At $t = \\frac{\\pi}{4}$, $\\mathbf{v} = -8(1)\\mathbf{i} + 6(0)\\mathbf{j} = -8\\mathbf{i}$, so the speed is $8\\text{ m s}^{-1}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Trigonometric Speed Bounds",
        "content": "Avoid using calculus quotient or chain rules to find maximum and minimum speeds of trigonometric vectors. Once you write $v^2$ in terms of $\\sin^2 2t$ alone ($v^2 = 36 + 28\\sin^2 2t$), use the natural bounds $0 \\le \\sin^2 2t \\le 1$. The minimum speed is $\\sqrt{36} = 6\\text{ m s}^{-1}$ and the maximum speed is $\\sqrt{36 + 28} = 8\\text{ m s}^{-1}$, solved in seconds."
    }
},
{
    "id": "012161",
    "branch": "Mechanics",
    "board": "OCR B (MEI)",
    "level": "A",
    "major_area": "Statics & Equilibrium",
    "topic": "Moments and Rigid Bodies",
    "subtopic": [
        "Parallel forces",
        "Equilibrium of a rigid rod",
        "Principle of moments"
    ],
    "img": "images/Mechanics_pngs/012161.png",
    "question": "The diagram shows a light rod $AB$ of length $3\\text{ m}$ hanging vertically in equilibrium.<br><br>Parallel horizontal forces of $24\\text{ N}$ and $36\\text{ N}$ act to the left at the top end $A$ and bottom end $B$ respectively. The rod is held in equilibrium by a single horizontal force of magnitude $F\\text{ N}$ acting to the right at a point $C$, located a distance of $x\\text{ m}$ below $A$.<br><br><strong>(a)</strong> Find the value of $F$.<br><br><strong>(b)</strong> Find the value of $x$.",
    "steps": [
        "<strong>(a) Resolve horizontal forces:</strong><br><br>For translational equilibrium, the resultant horizontal force must be zero:\\begin{aligned} &F - 24 - 36 = 0 \\cr &F = 24 + 36 \\cr &F = 60\\text{ N} \\end{aligned}",
        "<strong>(b) Take moments about $A$:</strong><br><br>Taking moments about end $A$ for rotational equilibrium:\\begin{aligned} &(F \\times x) - (36 \\times 3) = 0 \\cr &60x - 108 = 0 \\cr &60x = 108 \\cr &x = \\dfrac{108}{60} \\cr &x = 1.8\\text{ m} \\end{aligned}",
        "Final Answer: (a) $F = 60\\text{ N}$, (b) $x = 1.8\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $F = 60\\text{ N}$, (b) $x = 1.2\\text{ m}$",
            "feedback": "Check the point from which $x$ is measured. A value of $1.2\\text{ m}$ is the distance from $B$ ($3 - 1.8 = 1.2\\text{ m}$), but $x$ is defined as the distance below $A$."
        },
        {
            "ans": "(a) $F = 12\\text{ N}$, (b) $x = 1.8\\text{ m}$",
            "feedback": "The forces at $A$ and $B$ both act to the left, so their magnitudes must be added ($24 + 36 = 60\\text{ N}$), not subtracted."
        },
        {
            "ans": "(a) $F = 60\\text{ N}$, (b) $x = 0.67\\text{ m}$",
            "feedback": "In the moment equation $60x = 108$, divide $108$ by $60$. Do not invert the division as $60 / 108$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Choosing Pivot Points Wisely",
        "content": "Taking moments about point $A$ immediately eliminates the $24\\text{ N}$ force because its line of action passes directly through the pivot. You could take moments about any point along the rod, but pivoting at an unknown or unwanted force eliminates it from your algebra."
    }
},
{
    "id": "012162",
    "branch": "Mechanics",
    "board": "OCR B (MEI)",
    "level": "A",
    "major_area": "Statics & Equilibrium",
    "topic": "Moments and Rigid Bodies",
    "subtopic": [
        "Uniform beams",
        "Knife-edge supports",
        "Parallel vertical forces"
    ],
    "img": "images/Mechanics_pngs/012162.png",
    "question": "The diagram shows a uniform beam $AB$ of length $5.0\\text{ m}$ and weight $120\\text{ N}$ resting horizontally in equilibrium on two smooth knife-edge supports at $C$ and $D$.<br><br>The support at $C$ is $1.0\\text{ m}$ from $A$, and the support at $D$ is $1.0\\text{ m}$ from $B$. A vertical downward load of $80\\text{ N}$ is placed at a point $P$ on the beam, where $AP = 3.5\\text{ m}$.<br><br><strong>(a)</strong> Calculate the normal reaction force exerted on the beam by the support at $C$.<br><br><strong>(b)</strong> Calculate the normal reaction force exerted on the beam by the support at $D$.",
    "steps": [
        "<strong>(a) Take moments about support $D$:</strong><br><br>The beam is uniform, so its weight of $120\\text{ N}$ acts at its midpoint, $2.5\\text{ m}$ from $A$.<br><br>Distance from $A$ to support $D$ is $5.0 - 1.0 = 4.0\\text{ m}$.<br><br>Distances from pivot $D$:<br>• Support $C$: $4.0 - 1.0 = 3.0\\text{ m}$<br>• Midpoint (weight): $4.0 - 2.5 = 1.5\\text{ m}$<br>• Load $P$: $4.0 - 3.5 = 0.5\\text{ m}$<br><br>Taking moments about $D$:\\begin{aligned} &3.0 R_C - 120(1.5) \\cr &\\quad - 80(0.5) = 0 \\cr &3.0 R_C - 180 - 40 = 0 \\cr &3.0 R_C = 220 \\cr &R_C = \\dfrac{220}{3} \\approx 73.3\\text{ N} \\end{aligned}",
        "<strong>(b) Resolve forces vertically:</strong><br><br>Equating total upward forces to total downward forces:\\begin{aligned} &R_C + R_D = 120 + 80 \\cr &\\dfrac{220}{3} + R_D = 200 \\cr &R_D = 200 - \\dfrac{220}{3} \\cr &R_D = \\dfrac{380}{3} \\approx 127\\text{ N} \\end{aligned}",
        "Final Answer: (a) $R_C = 73.3\\text{ N}$, (b) $R_D = 127\\text{ N}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $R_C = 127\\text{ N}$, (b) $R_D = 73.3\\text{ N}$",
            "feedback": "The reaction forces at $C$ and $D$ have been reversed. Notice that the $80\\text{ N}$ load is closer to $D$, meaning support $D$ must take the larger portion of the total load."
        },
        {
            "ans": "(a) $R_C = 80.0\\text{ N}$, (b) $R_D = 120\\text{ N}$",
            "feedback": "You cannot allocate the point load directly to one support and the beam weight to the other. Both supports share both downward forces according to the principle of moments."
        },
        {
            "ans": "(a) $R_C = 66.7\\text{ N}$, (b) $R_D = 133\\text{ N}$",
            "feedback": "Remember to account for the $1.0\\text{ m}$ overhangs at either end. The distance between supports $C$ and $D$ is $3.0\\text{ m}$, not the total beam length of $5.0\\text{ m}$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Mind the Overhangs",
        "content": "A frequent source of lost marks on beam problems is taking moment arms from the ends of the beam rather than from the chosen pivot point. Always mark the position of each force relative to the pivot before setting up your equation."
    }
},
{
    "id": "012163",
    "branch": "Mechanics",
    "board": "OCR B (MEI)",
    "level": "A",
    "major_area": "Statics & Equilibrium",
    "topic": "Moments and Rigid Bodies",
    "subtopic": [
        "Non-uniform rod",
        "Centre of mass",
        "Suspended bodies"
    ],
    "img": "images/Mechanics_pngs/012163.png",
    "question": "The diagram shows a non-uniform rod $AB$ of length $4\\text{ m}$ and weight $150\\text{ N}$ suspended horizontally in equilibrium by two light vertical strings attached to its ends $A$ and $B$.<br><br>A load of weight $50\\text{ N}$ is attached to the rod at a point $C$, where $AC = 1\\text{ m}$. The tension in the vertical string attached at $B$ is measured to be $110\\text{ N}$.<br><br><strong>(a)</strong> Find the tension in the vertical string attached at $A$.<br><br><strong>(b)</strong> Find the distance of the centre of mass of the rod from end $A$.",
    "steps": [
        "<strong>(a) Resolve vertical forces:</strong><br><br>For vertical equilibrium, the sum of upward tensions equals the sum of downward weights:\\begin{aligned} &T_A + T_B = 150 + 50 \\cr &T_A + 110 = 200 \\cr &T_A = 90\\text{ N} \\end{aligned}",
        "<strong>(b) Take moments about end $A$:</strong><br><br>Let $\\bar{x}$ be the distance of the centre of mass from $A$:\\begin{aligned} &50(1) + 150\\bar{x} - 110(4) = 0 \\cr &50 + 150\\bar{x} = 440 \\cr &150\\bar{x} = 390 \\cr &\\bar{x} = \\dfrac{390}{150} \\cr &\\bar{x} = 2.6\\text{ m} \\end{aligned}",
        "Final Answer: (a) $T_A = 90\\text{ N}$, (b) $\\bar{x} = 2.6\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $T_A = 90\\text{ N}$, (b) $\\bar{x} = 1.4\\text{ m}$",
            "feedback": "This value gives the distance from end $B$ ($4 - 2.6 = 1.4\\text{ m}$). The question explicitly asks for the distance of the centre of mass from end $A$."
        },
        {
            "ans": "(a) $T_A = 110\\text{ N}$, (b) $\\bar{x} = 2.0\\text{ m}$",
            "feedback": "The rod is non-uniform, so its centre of mass is not at the midpoint ($2.0\\text{ m}$). This also means the tensions at $A$ and $B$ are not equal."
        },
        {
            "ans": "(a) $T_A = 90\\text{ N}$, (b) $\\bar{x} = 2.93\\text{ m}$",
            "feedback": "Make sure to include the moment of the $50\\text{ N}$ point load at $C$. Omitting it yields $150\\bar{x} = 440 \\implies \\bar{x} \\approx 2.93\\text{ m}$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Interpreting the Result",
        "content": "For a uniform rod, the centre of mass would be at the midpoint ($2.0\\text{ m}$). Our calculated value of $\\bar{x} = 2.6\\text{ m}$ tells us that the rod is denser towards end $B$, which explains why string $B$ carries more tension ($110\\text{ N}$) than string $A$ ($90\\text{ N}$)."
    }
},
{
    "id": "012164",
    "branch": "Mechanics",
    "board": "OCR B (MEI)",
    "level": "A",
    "major_area": "Statics & Equilibrium",
    "topic": "Moments and Rigid Bodies",
    "subtopic": [
        "Hinged rods",
        "Resolving forces at an angle",
        "Equilibrium of non-parallel forces"
    ],
    "img": "images/Mechanics_pngs/012164.png",
    "question": "The diagram shows a uniform horizontal beam $AB$ of mass $8\\text{ kg}$ and length $2\\text{ m}$, smoothly hinged to a vertical wall at end $A$. The beam is held in a horizontal position in equilibrium by a light wire attached to $B$ and to a point $C$ on the wall vertically above $A$. The wire is inclined at an angle of $30^\\circ$ to the beam.<br><br>A load of mass $12\\text{ kg}$ is suspended from a point $D$ on the beam, where $AD = 1.5\\text{ m}$.<br><em>[Take $g = 9.8\\text{ m s}^{-2}$.]</em><br><br><strong>(a)</strong> Find the tension in the wire.<br><br><strong>(b)</strong> Find the magnitude of the resultant force exerted on the beam by the hinge at $A$, giving your answer to $3$ significant figures.",
    "steps": [
        "<strong>(a) Find the tension in the wire:</strong><br><br>Calculate the weights acting on the beam:<br>• Beam weight: $W_B = 8(9.8) = 78.4\\text{ N}$ at midpoint ($1.0\\text{ m}$ from $A$)<br>• Load weight: $W_L = 12(9.8) = 117.6\\text{ N}$ at $1.5\\text{ m}$ from $A$<br><br>Taking moments about hinge $A$:\\begin{aligned} &(T\\sin 30^\\circ) \\times 2 \\cr &\\quad - 78.4(1.0) \\cr &\\quad - 117.6(1.5) = 0 \\cr &T(2 \\times 0.5) - 78.4 - 176.4 = 0 \\cr &T = 254.8\\text{ N} \\cr &T \\approx 255\\text{ N} \\end{aligned}",
        "<strong>(b) Resultant force at the hinge:</strong><br><br>Let $H_A$ and $V_A$ be the horizontal and vertical components of the hinge reaction at $A$.<br><br>Resolving horizontally:\\begin{aligned} H_A &= T\\cos 30^\\circ \\cr &= 254.8 \\times \\dfrac{\\sqrt{3}}{2} \\cr &\\approx 220.66\\text{ N} \\end{aligned}<br>Resolving vertically:\\begin{aligned} &V_A + T\\sin 30^\\circ = 78.4 + 117.6 \\cr &V_A + 254.8(0.5) = 196 \\cr &V_A = 196 - 127.4 \\cr &V_A = 68.6\\text{ N} \\end{aligned}<br>Calculating the resultant magnitude $R_A$:\\begin{aligned} R_A &= \\sqrt{H_A^2 + V_A^2} \\cr &= \\sqrt{220.66^2 + 68.6^2} \\cr &= \\sqrt{48690.8 + 4705.96} \\cr &\\approx 231\\text{ N} \\end{aligned}",
        "Final Answer: (a) $T = 255\\text{ N}$, (b) $R_A = 231\\text{ N}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $T = 255\\text{ N}$, (b) $R_A = 221\\text{ N}$",
            "feedback": "This distractor accounts only for the horizontal component of the hinge reaction ($H_A \\approx 221\\text{ N}$). You must also include the vertical component ($V_A = 68.6\\text{ N}$) and find the resultant using Pythagoras."
        },
        {
            "ans": "(a) $T = 127\\text{ N}$, (b) $R_A = 231\\text{ N}$",
            "feedback": "When taking moments about $A$, resolve the tension perpendicular to the beam using $T\\sin 30^\\circ$. Using $T$ without the trigonometric factor halves the required tension."
        },
        {
            "ans": "(a) $T = 255\\text{ N}$, (b) $R_A = 289\\text{ N}$",
            "feedback": "To find the magnitude of perpendicular force components, combine them using Pythagoras ($R_A = \\sqrt{H_A^2 + V_A^2}$). Do not add the components linearly ($220.7 + 68.6 = 289.3$)."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Hinge Reactions Have Two Components",
        "content": "A smooth hinge can exert a force in any direction within the vertical plane. Never assume the hinge force is purely vertical or acts along the beam. Always define unknown horizontal ($H_A$) and vertical ($V_A$) components, solve for each by resolving, and combine them using $R = \\sqrt{H_A^2 + V_A^2}$."
    }
},
{
    "id": "012165",
    "branch": "Mechanics",
    "board": "OCR B (MEI)",
    "level": "A",
    "major_area": "Statics & Equilibrium",
    "topic": "Moments and Rigid Bodies",
    "subtopic": [
        "Ladder problems",
        "Limiting equilibrium",
        "Friction and normal reaction"
    ],
    "img": "images/Mechanics_pngs/012165.png",
    "question": "The diagram shows a uniform ladder $AB$ of mass $20\\text{ kg}$ and length $4\\text{ m}$ resting in equilibrium with its upper end $B$ against a smooth vertical wall and its lower end $A$ on rough horizontal ground. The ladder is inclined at an angle of $60^\\circ$ to the horizontal ground.<br><br>A person of mass $60\\text{ kg}$ stands on the ladder at a point $P$, where $AP = 3\\text{ m}$. The ladder is in limiting equilibrium.<br><em>[Take $g = 9.8\\text{ m s}^{-2}$.]</em><br><br><strong>(a)</strong> Find the magnitude of the normal reaction force exerted on the ladder by the vertical wall at $B$, giving your answer to $3$ significant figures.<br><br><strong>(b)</strong> Find the coefficient of friction $\\mu$ between the ladder and the ground, giving your answer to $3$ significant figures.",
    "steps": [
        "<strong>(a) Take moments about base $A$:</strong><br><br>The wall is smooth, so the reaction at $B$ is entirely horizontal, $N_B$.<br><br>Weights acting on the ladder:<br>• Ladder weight: $20g = 196\\text{ N}$ at midpoint ($2\\text{ m}$ from $A$)<br>• Person weight: $60g = 588\\text{ N}$ at $3\\text{ m}$ from $A$<br><br>Taking moments about $A$:\\begin{aligned} &N_B(4\\sin 60^\\circ) \\cr &\\quad - 20g(2\\cos 60^\\circ) \\cr &\\quad - 60g(3\\cos 60^\\circ) = 0 \\cr &N_B\\left(4 \\times \\dfrac{\\sqrt{3}}{2}\\right) \\cr &\\quad = (40g + 180g)(0.5) \\cr &2\\sqrt{3} N_B = 110g \\cr &N_B = \\dfrac{110(9.8)}{2\\sqrt{3}} \\cr &N_B \\approx 311\\text{ N} \\end{aligned}",
        "<strong>(b) Resolve forces and apply limiting friction:</strong><br><br>Resolving vertically:\\begin{aligned} R_A &= 20g + 60g \\cr &= 80(9.8) \\cr &= 784\\text{ N} \\end{aligned}<br>Resolving horizontally:\\begin{aligned} F_A &= N_B \\cr &\\approx 311.19\\text{ N} \\end{aligned}<br>In limiting equilibrium ($F_A = \\mu R_A$):\\begin{aligned} \\mu &= \\dfrac{F_A}{R_A} \\cr &= \\dfrac{311.19}{784} \\cr &\\approx 0.397 \\end{aligned}",
        "Final Answer: (a) $N_B = 311\\text{ N}$, (b) $\\mu = 0.397$"
    ],
    "pi_options": [
        {
            "ans": "(a) $N_B = 311\\text{ N}$, (b) $\\mu = 0.529$",
            "feedback": "Check your vertical resolution. You must include the mass of the ladder ($20\\text{ kg}$) alongside the mass of the person ($60\\text{ kg}$), giving total normal reaction $R_A = 80g\\text{ N}$, not $60g\\text{ N}$."
        },
        {
            "ans": "(a) $N_B = 180\\text{ N}$, (b) $\\mu = 0.397$",
            "feedback": "Take care with trigonometric functions when calculating perpendicular distances. The wall reaction is horizontal, so its perpendicular moment arm is $4\\sin 60^\\circ$, not $4\\cos 60^\\circ$."
        },
        {
            "ans": "(a) $N_B = 311\\text{ N}$, (b) $\\mu = 0.456$",
            "feedback": "Ensure the person's distance along the ladder is correctly entered as $3\\text{ m}$ rather than placed at the midpoint with the ladder's centre of mass."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Notice that $g$ Cancels",
        "content": "When solving for the coefficient of friction $\\mu$, you can express both forces in terms of $g$ before dividing:\\begin{aligned} \\mu &= \\dfrac{N_B}{R_A} \\cr &= \\dfrac{110g / (2\\sqrt{3})}{80g} \\cr &= \\dfrac{11}{16\\sqrt{3}} \\cr &\\approx 0.397 \\end{aligned}Notice that $g$ cancels out entirely, which protects you from premature rounding errors."
    }
},
{
    "id": "012166",
    "branch": "Mechanics",
    "board": "OCR B (MEI)",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Projectiles",
    "subtopic": [
        "Horizontal projection",
        "Trajectory equation",
        "Range and clearance"
    ],
    "img": "images/Mechanics_pngs/012166.png",
    "question": "The diagram shows Peter throwing a tennis ball horizontally with speed $15\\text{ m s}^{-1}$ from the flat roof of a building, at a height of $6.0\\text{ m}$ above horizontal ground. The ball flies over a vertical perimeter wall of height $2.5\\text{ m}$ situated a horizontal distance of $d\\text{ m}$ from the building.<br><br>The origin $O$ is taken on the ground directly beneath the point of projection, with the positive $x$-axis horizontal in the direction of the throw and the positive $y$-axis vertically upwards.<br><em>[Take $g = 9.8\\text{ m s}^{-2}$.]</em><br><br><strong>(a)</strong> Find the time taken for the ball to reach the ground.<br><br><strong>(b)</strong> Find the Cartesian equation of the trajectory of the ball in the form $y = a - bx^2$, where $a$ and $b$ are constants to be determined.<br><br><strong>(c)</strong> Find the range of possible values of $d$ for which the ball clears the perimeter wall.",
    "steps": [
        "<strong>(a) Time to reach the ground:</strong><br><br>Considering vertical motion downwards from the roof ($s_y = 6.0\\text{ m}$, $u_y = 0$, $a_y = 9.8\\text{ m s}^{-2}$):\\begin{aligned} &s_y = u_y t + \\dfrac{1}{2}gt^2 \\cr &6.0 = 4.9t^2 \\cr &t^2 = \\dfrac{6.0}{4.9} \\cr &t = \\sqrt{\\dfrac{60}{49}} \\cr &t \\approx 1.11\\text{ s} \\end{aligned}",
        "<strong>(b) Cartesian equation of the trajectory:</strong><br><br>Horizontally:\\begin{aligned} x &= 15t \\cr t &= \\dfrac{x}{15} \\end{aligned}<br>Vertically, with origin on the ground:\\begin{aligned} y &= 6.0 - \\dfrac{1}{2}gt^2 \\cr &= 6.0 - 4.9\\left(\\dfrac{x}{15}\\right)^2 \\cr &= 6.0 - \\dfrac{49}{2250}x^2 \\end{aligned}",
        "<strong>(c) Range of values of $d$:</strong><br><br>To clear the perimeter wall of height $2.5\\text{ m}$, we require $y > 2.5$ when $x = d$:\\begin{aligned} &6.0 - \\dfrac{49}{2250}d^2 > 2.5 \\cr &3.5 > \\dfrac{49}{2250}d^2 \\cr &d^2 < \\dfrac{3.5 \\times 2250}{49} \\cr &d^2 < \\dfrac{1125}{7} \\cr &d < 12.7\\text{ m} \\end{aligned}<br>Since distance must be strictly positive, $0 < d < 12.7\\text{ m}$.",
        "Final Answer: (a) $1.11\\text{ s}$, (b) $y = 6 - \\dfrac{49}{2250}x^2$, (c) $0 < d < 12.7\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $1.11\\text{ s}$, (b) $y = 6 - \\dfrac{49}{2250}x^2$, (c) $d < 12.7\\text{ m}$",
            "feedback": "A physical distance cannot take negative values. You must specify the lower bound $d > 0$ alongside the upper bound to define the complete valid range."
        },
        {
            "ans": "(a) $1.11\\text{ s}$, (b) $y = 6 - \\dfrac{4.9}{15}x^2$, (c) $0 < d < 12.7\\text{ m}$",
            "feedback": "Remember to square the horizontal speed in the denominator: $t^2 = (x/15)^2 = x^2 / 225$, which gives coefficient $4.9 / 225 = 49 / 2250$."
        },
        {
            "ans": "(a) $0.61\\text{ s}$, (b) $y = 6 - \\dfrac{49}{2250}x^2$, (c) $0 < d < 12.7\\text{ m}$",
            "feedback": "Check the vertical motion formula. You must divide by $0.5g = 4.9$, not $g = 9.8$, when solving $s = \\frac{1}{2}gt^2$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Include Physical Lower Bounds",
        "content": "Whenever an exam question asks for a 'range of values' for a physical length or distance like $d$, state the lower bound $d > 0$ alongside the upper bound $d < 12.7\\text{ m}$. Writing simply $d < 12.7\\text{ m}$ forfeits the final accuracy mark because lengths cannot be negative."
    }
},
{
    "id": "012167",
    "branch": "Mechanics",
    "board": "OCR B (MEI)",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Projectiles",
    "subtopic": [
        "Projection from a cliff",
        "Impact velocity",
        "Direction of motion"
    ],
    "img": "images/Mechanics_pngs/012167.png",
    "question": "The diagram shows a pebble projected horizontally with an initial speed of $16\\text{ m s}^{-1}$ from a point $P$ at the top of a vertical cliff of height $45\\text{ m}$ above the sea. The pebble travels under gravity and strikes the sea at point $S$.<br><em>[Take $g = 9.8\\text{ m s}^{-2}$.]</em><br><br><strong>(a)</strong> Calculate the time taken for the pebble to travel from $P$ to the sea surface at $S$.<br><br><strong>(b)</strong> Calculate the horizontal distance from the base of the cliff to the impact point $S$.<br><br><strong>(c)</strong> Calculate the speed and the acute angle $\\theta$ below the horizontal at which the pebble strikes the sea, giving both values to $3$ significant figures.",
    "steps": [
        "<strong>(a) Time of flight:</strong><br><br>Considering vertical motion downwards ($s_y = 45\\text{ m}$, $u_y = 0$, $a_y = 9.8\\text{ m s}^{-2}$):\\begin{aligned} &s_y = \\dfrac{1}{2}gt^2 \\cr &45 = 4.9t^2 \\cr &t^2 = \\dfrac{45}{4.9} \\cr &t = \\sqrt{\\dfrac{450}{49}} \\cr &t \\approx 3.03\\text{ s} \\end{aligned}",
        "<strong>(b) Horizontal distance:</strong><br><br>The horizontal component of velocity remains constant:\\begin{aligned} x &= u_x t \\cr &= 16 \\times 3.0305 \\cr &\\approx 48.5\\text{ m} \\end{aligned}",
        "<strong>(c) Speed and angle of entry:</strong><br><br>Velocity components at impact:\\begin{aligned} v_x &= 16\\text{ m s}^{-1} \\cr v_y &= gt \\cr &= 9.8 \\times 3.0305 \\cr &\\approx 29.70\\text{ m s}^{-1} \\end{aligned}<br>Magnitude of velocity (speed):\\begin{aligned} v &= \\sqrt{v_x^2 + v_y^2} \\cr &= \\sqrt{16^2 + 29.70^2} \\cr &= \\sqrt{256 + 882} \\cr &= \\sqrt{1138} \\cr &\\approx 33.7\\text{ m s}^{-1} \\end{aligned}<br>Acute angle below the horizontal:\\begin{aligned} \\tan\\theta &= \\dfrac{v_y}{v_x} \\cr &= \\dfrac{29.70}{16} \\cr &\\approx 1.856 \\cr \\theta &= \\arctan(1.856) \\cr &\\approx 61.7^\\circ \\end{aligned}",
        "Final Answer: (a) $3.03\\text{ s}$, (b) $48.5\\text{ m}$, (c) $v = 33.7\\text{ m s}^{-1}$, $\\theta = 61.7^\\circ$"
    ],
    "pi_options": [
        {
            "ans": "(a) $3.03\\text{ s}$, (b) $48.5\\text{ m}$, (c) $v = 33.7\\text{ m s}^{-1}$, $\\theta = 28.3^\\circ$",
            "feedback": "This angle is measured relative to the vertical ($\\arctan(16/29.70) \\approx 28.3^\\circ$). The question asks for the angle below the horizontal, so you need $\\arctan(v_y / v_x)$."
        },
        {
            "ans": "(a) $3.03\\text{ s}$, (b) $48.5\\text{ m}$, (c) $v = 29.7\\text{ m s}^{-1}$, $\\theta = 61.7^\\circ$",
            "feedback": "Speed is the scalar magnitude of the total velocity vector. You must combine the horizontal and vertical components using Pythagoras, rather than quoting the vertical velocity component alone."
        },
        {
            "ans": "(a) $2.14\\text{ s}$, (b) $34.2\\text{ m}$, (c) $v = 33.7\\text{ m s}^{-1}$, $\\theta = 61.7^\\circ$",
            "feedback": "Remember the factor of $\\frac{1}{2}$ in the kinematic equation $s = \\frac{1}{2}gt^2$. Dividing $45$ by $9.8$ instead of $4.9$ leads to an incorrect time of flight."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Conservation of Energy for Speed",
        "content": "You can verify your final speed independently using conservation of mechanical energy: $\\frac{1}{2}m v^2 = \\frac{1}{2}m u^2 + mgh \\implies v = \\sqrt{u^2 + 2gh}$. Here, $v = \\sqrt{16^2 + 2(9.8)(45)} = \\sqrt{256 + 882} = \\sqrt{1138} \\approx 33.7\\text{ m s}^{-1}$."
    }
},
{
    "id": "012168",
    "branch": "Mechanics",
    "board": "OCR B (MEI)",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Projectiles",
    "subtopic": [
        "Angled projection from elevation",
        "Trajectory equation",
        "Barrier clearance"
    ],
    "img": "images/Mechanics_pngs/012168.png",
    "question": "The diagram shows a ball projected with initial speed $20\\text{ m s}^{-1}$ at an angle $\\alpha$ above the horizontal from a point $A$, which is $3.0\\text{ m}$ above horizontal ground. The ball passes over a vertical wall of height $4.0\\text{ m}$ situated a horizontal distance of $12\\text{ m}$ from $A$.<br><br>Given that $\\tan\\alpha = \\dfrac{3}{4}$:<br><em>[Take $g = 9.8\\text{ m s}^{-2}$.]</em><br><br><strong>(a)</strong> Show that the Cartesian equation of the trajectory of the ball, taking the origin on the ground directly below the launch point, is:<br>$$y = 3 + \\dfrac{3}{4}x - \\dfrac{49}{2560}x^2$$<br><strong>(b)</strong> Calculate the clearance height of the ball above the top of the wall as it passes over it.<br><br><strong>(c)</strong> Determine whether the ball is ascending or descending as it passes over the wall.",
    "steps": [
        "<strong>(a) Derive trajectory equation:</strong><br><br>From $\\tan\\alpha = \\dfrac{3}{4}$, a right-angled triangle gives $\\cos\\alpha = \\dfrac{4}{5} = 0.8$ and $\\sin\\alpha = \\dfrac{3}{5} = 0.6$.<br><br>Initial velocity components:\\begin{aligned} u_x &= 20\\cos\\alpha \\cr &= 16\\text{ m s}^{-1} \\cr u_y &= 20\\sin\\alpha \\cr &= 12\\text{ m s}^{-1} \\end{aligned}<br>Horizontal displacement: $x = 16t \\implies t = \\dfrac{x}{16}$.<br><br>Vertical displacement with initial height $y_0 = 3.0\\text{ m}$:\\begin{aligned} y &= 3 + u_y t - \\dfrac{1}{2}gt^2 \\cr &= 3 + 12\\left(\\dfrac{x}{16}\\right) \\cr &\\quad - 4.9\\left(\\dfrac{x}{16}\\right)^2 \\cr &= 3 + \\dfrac{3}{4}x - \\dfrac{4.9}{256}x^2 \\cr &= 3 + \\dfrac{3}{4}x - \\dfrac{49}{2560}x^2 \\end{aligned}",
        "<strong>(b) Clearance height above the wall:</strong><br><br>Substitute $x = 12\\text{ m}$ into the trajectory equation:\\begin{aligned} y(12) &= 3 + \\dfrac{3}{4}(12) - \\dfrac{49}{2560}(144) \\cr &= 3 + 9 - 2.75625 \\cr &= 9.24375\\text{ m} \\end{aligned}<br>The wall is $4.0\\text{ m}$ high, so the clearance is:\\begin{aligned} \\text{Clearance} &= 9.24375 - 4.0 \\cr &\\approx 5.24\\text{ m} \\end{aligned}",
        "<strong>(c) Ascending or descending:</strong><br><br>Find the vertical velocity component $v_y$ at $x = 12\\text{ m}$:\\begin{aligned} t &= \\dfrac{12}{16} \\cr &= 0.75\\text{ s} \\cr v_y &= u_y - gt \\cr &= 12 - 9.8(0.75) \\cr &= 12 - 7.35 \\cr &= 4.65\\text{ m s}^{-1} \\end{aligned}<br>Since $v_y > 0$, the ball is ascending.",
        "Final Answer: (a) $y = 3 + \\dfrac{3}{4}x - \\dfrac{49}{2560}x^2$, (b) $5.24\\text{ m}$, (c) Ascending"
    ],
    "pi_options": [
        {
            "ans": "(a) $y = 3 + \\dfrac{3}{4}x - \\dfrac{49}{2560}x^2$, (b) $5.24\\text{ m}$, (c) Descending",
            "feedback": "Check the sign of the vertical velocity $v_y = u_y - gt$. At $t = 0.75\\text{ s}$, $v_y = 12 - 7.35 = +4.65\\text{ m s}^{-1} > 0$, which proves the ball is still climbing."
        },
        {
            "ans": "(a) $y = 3 + \\dfrac{3}{4}x - \\dfrac{49}{2560}x^2$, (b) $9.24\\text{ m}$, (c) Ascending",
            "feedback": "The value $9.24\\text{ m}$ is the height of the ball above the ground. You must subtract the wall's height ($4.0\\text{ m}$) to obtain the clearance above the top of the wall."
        },
        {
            "ans": "(a) $y = 3 + \\dfrac{3}{4}x - \\dfrac{49}{2560}x^2$, (b) $2.24\\text{ m}$, (c) Ascending",
            "feedback": "Remember to include the initial launch height $y_0 = 3.0\\text{ m}$ when calculating the total height of the ball above ground level."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Two Ways to Check Direction",
        "content": "To check if a projectile is ascending or descending, you can calculate the vertical velocity $v_y = u_y - gt$, or differentiate the Cartesian path directly: $\\frac{\\text{d}y}{\\text{d}x} = \\frac{3}{4} - \\frac{49}{1280}x$. At $x = 12$, $\\frac{\\text{d}y}{\\text{d}x} = +0.291 > 0$, confirming the trajectory is still rising."
    }
},
{
    "id": "012169",
    "branch": "Mechanics",
    "board": "OCR B (MEI)",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Projectiles",
    "subtopic": [
        "Vector formulation",
        "2D kinematics",
        "Passing through a fixed coordinate"
    ],
    "img": "images/Mechanics_pngs/012169.png",
    "question": "The diagram shows a small ball projected from the origin $O$ on horizontal ground with initial velocity $\\mathbf{u} = (u_x\\mathbf{i} + u_y\\mathbf{j})\\text{ m s}^{-1}$. The ball moves freely under gravity and passes cleanly through the centre of a target hoop located at position $(12\\mathbf{i} + 5\\mathbf{j})\\text{ m}$ after $0.8\\text{ s}$.<br><br>The unit vectors $\\mathbf{i}$ and $\\mathbf{j}$ are directed horizontally and vertically upwards respectively.<br><em>[Take $g = 9.8\\text{ m s}^{-2}$, so acceleration $\\mathbf{a} = -9.8\\mathbf{j}\\text{ m s}^{-2}$.]</em><br><br><strong>(a)</strong> Find the initial velocity vector $\\mathbf{u}$ of the ball.<br><br><strong>(b)</strong> Find the speed of the ball as it passes through the hoop, giving your answer to $3$ significant figures.",
    "steps": [
        "<strong>(a) Initial velocity vector $\\mathbf{u}$:</strong><br><br>Using $\\mathbf{r}(t) = \\mathbf{u}t + \\dfrac{1}{2}\\mathbf{a}t^2$ with $\\mathbf{a} = -9.8\\mathbf{j}\\text{ m s}^{-2}$:<br><br>Horizontal component at $t = 0.8\\text{ s}$:\\begin{aligned} &u_x(0.8) = 12 \\cr &u_x = \\dfrac{12}{0.8} \\cr &u_x = 15\\text{ m s}^{-1} \\end{aligned}<br>Vertical component at $t = 0.8\\text{ s}$:\\begin{aligned} &u_y(0.8) - 4.9(0.8^2) = 5 \\cr &0.8u_y - 3.136 = 5 \\cr &0.8u_y = 8.136 \\cr &u_y = \\dfrac{8.136}{0.8} \\cr &u_y = 10.17\\text{ m s}^{-1} \\end{aligned}<br>Therefore:\\begin{aligned} \\mathbf{u} = (15\\mathbf{i} + 10.17\\mathbf{j})\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(b) Speed at the hoop:</strong><br><br>Velocity vector at $t = 0.8\\text{ s}$:\\begin{aligned} v_x &= 15\\text{ m s}^{-1} \\cr v_y &= u_y - gt \\cr &= 10.17 - 9.8(0.8) \\cr &= 10.17 - 7.84 \\cr &= 2.33\\text{ m s}^{-1} \\end{aligned}<br>Calculating speed $v$:\\begin{aligned} v &= \\sqrt{v_x^2 + v_y^2} \\cr &= \\sqrt{15^2 + 2.33^2} \\cr &= \\sqrt{225 + 5.4289} \\cr &= \\sqrt{230.4289} \\cr &\\approx 15.2\\text{ m s}^{-1} \\end{aligned}",
        "Final Answer: (a) $\\mathbf{u} = (15\\mathbf{i} + 10.17\\mathbf{j})\\text{ m s}^{-1}$, (b) $15.2\\text{ m s}^{-1}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $\\mathbf{u} = (15\\mathbf{i} + 6.25\\mathbf{j})\\text{ m s}^{-1}$, (b) $15.2\\text{ m s}^{-1}$",
            "feedback": "You must include the downward acceleration due to gravity in the vertical equation. Neglecting gravity gives $u_y = 5 / 0.8 = 6.25\\text{ m s}^{-1}$."
        },
        {
            "ans": "(a) $\\mathbf{u} = (15\\mathbf{i} + 10.17\\mathbf{j})\\text{ m s}^{-1}$, (b) $17.3\\text{ m s}^{-1}$",
            "feedback": "To calculate speed from velocity components, combine them with Pythagoras ($v = \\sqrt{v_x^2 + v_y^2}$). Do not add the magnitudes linearly ($15 + 2.33 = 17.33$)."
        },
        {
            "ans": "(a) $\\mathbf{u} = (15\\mathbf{i} + 10.17\\mathbf{j})\\text{ m s}^{-1}$, (b) $2.33\\text{ m s}^{-1}$",
            "feedback": "The value $2.33\\text{ m s}^{-1}$ is only the vertical component of velocity. You must combine it with the constant horizontal component $v_x = 15\\text{ m s}^{-1}$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Vector Component Independence",
        "content": "Because gravity acts purely in the vertical direction ($-9.8\\mathbf{j}$), the horizontal component experiences zero acceleration. This fundamental independence allows you to solve the horizontal equation instantly for $u_x$ before tackling the vertical motion."
    }
},
{
    "id": "012170",
    "branch": "Mechanics",
    "board": "OCR B (MEI)",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Projectiles",
    "subtopic": [
        "Projection onto an inclined plane",
        "Intersection of paths",
        "Distance along slope"
    ],
    "img": "images/Mechanics_pngs/012170.png",
    "question": "The diagram shows a particle projected horizontally with speed $14\\text{ m s}^{-1}$ from the brow of a hill at point $O$. The profile of the hill is modelled as a uniform plane sloping downwards at an angle $\\beta$ below the horizontal, where $\\tan\\beta = \\dfrac{1}{3}$.<br><br>The particle travels freely under gravity and lands on the slope at point $P$.<br><em>[Take $g = 9.8\\text{ m s}^{-2}$.]</em><br><br><strong>(a)</strong> Find the time of flight of the particle from $O$ to $P$.<br><br><strong>(b)</strong> Find the straight-line distance $OP$ along the slope, giving your answer to $3$ significant figures.",
    "steps": [
        "<strong>(a) Time of flight:</strong><br><br>Taking $O$ as the origin with positive $x$ horizontally and positive $y$ vertically upwards:\\begin{aligned} x &= 14t \\cr y &= -\\dfrac{1}{2}gt^2 \\cr &= -4.9t^2 \\end{aligned}<br>The slope falls with gradient $-\\tan\\beta = -\\dfrac{1}{3}$, giving line equation:\\begin{aligned} y = -\\dfrac{1}{3}x \\end{aligned}<br>At landing point $P$:\\begin{aligned} &-4.9t^2 = -\\dfrac{1}{3}(14t) \\cr &4.9t = \\dfrac{14}{3} \\cr &t = \\dfrac{14}{3 \\times 4.9} \\cr &t = \\dfrac{140}{147} \\cr &t = \\dfrac{20}{21} \\approx 0.952\\text{ s} \\end{aligned}",
        "<strong>(b) Distance along the slope:</strong><br><br>Substitute $t = \\dfrac{20}{21}\\text{ s}$ into the displacement equations:\\begin{aligned} x &= 14\\left(\\dfrac{20}{21}\\right) \\cr &= \\dfrac{40}{3}\\text{ m} \\cr y &= -\\dfrac{1}{3}\\left(\\dfrac{40}{3}\\right) \\cr &= -\\dfrac{40}{9}\\text{ m} \\end{aligned}<br>Straight-line distance along the incline $OP = \\sqrt{x^2 + y^2}$:\\begin{aligned} OP &= \\sqrt{\\left(\\dfrac{40}{3}\\right)^2 + \\left(-\\dfrac{40}{9}\\right)^2} \\cr &= \\sqrt{\\dfrac{1600}{9} + \\dfrac{1600}{81}} \\cr &= \\sqrt{\\dfrac{16000}{81}} \\cr &= \\dfrac{40\\sqrt{10}}{9} \\cr &\\approx 14.1\\text{ m} \\end{aligned}",
        "Final Answer: (a) $0.952\\text{ s}$, (b) $14.1\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $0.952\\text{ s}$, (b) $13.3\\text{ m}$",
            "feedback": "The value $13.3\\text{ m}$ ($40/3$) is the horizontal distance travelled. The question asks for the straight-line distance $OP$ measured along the slope."
        },
        {
            "ans": "(a) $2.86\\text{ s}$, (b) $14.1\\text{ m}$",
            "feedback": "Check the slope gradient equation. Because $\\tan\\beta = 1/3$, $y = -(1/3)x$. Multiplying by $3$ instead of dividing leads to $4.9t = 14 \\times 3$, giving an incorrect flight time."
        },
        {
            "ans": "(a) $0.952\\text{ s}$, (b) $17.8\\text{ m}$",
            "feedback": "To find the distance along the incline, use Pythagoras ($OP = \\sqrt{x^2 + y^2}$). Do not add the horizontal and vertical distances linearly ($13.33 + 4.44 = 17.77$)."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Coordinate Geometry on Inclines",
        "content": "When a projectile lands on an inclined slope, treating the ground as a linear equation $y = mx$ is often far faster than resolving along and perpendicular to the inclined plane. Finding the intersection between the parabola and the line yields the flight time in one simple step."
    }
},
{
    "id": "012171",
    "branch": "Mechanics",
    "board": "OCR B (MEI)",
    "level": "A",
    "major_area": "Statics & Equilibrium",
    "topic": "Connected Particles",
    "subtopic": [
        "Double inclined plane",
        "Limiting equilibrium",
        "Friction"
    ],
    "img": "images/Mechanics_pngs/012171.png",
    "question": "The diagram shows a fixed triangular wedge resting on horizontal ground. Block $A$ of mass $5.0\\text{ kg}$ rests on the left face, which is inclined at $30^\\circ$ to the horizontal. Block $B$ of mass $6.0\\text{ kg}$ rests on the right face, which is inclined at $45^\\circ$ to the horizontal.<br><br>The two blocks are connected by a light inextensible string that passes over a small, smooth pulley fixed at the apex of the wedge. The parts of the string on either side of the pulley lie parallel to the lines of greatest slope of the respective faces.<br><br>The right face is smooth, while the left face is rough. Block $A$ is in limiting equilibrium and is on the point of sliding up the plane.<br><em>[Take $g = 9.8\\text{ m s}^{-2}$.]</em><br><br><strong>(a)</strong> Find the tension in the string, giving your answer to $3$ significant figures.<br><br><strong>(b)</strong> Find the coefficient of friction $\\mu$ between Block $A$ and the left face of the wedge, giving your answer to $3$ significant figures.",
    "steps": [
        "<strong>(a) Tension in the string:</strong><br><br>Consider Block $B$ ($6.0\\text{ kg}$) resting in equilibrium on the smooth $45^\\circ$ slope.<br><br>Resolving parallel to the slope for Block $B$:\\begin{aligned} T &= m_B g\\sin 45^\\circ \\cr &= 6.0(9.8)\\left(\\dfrac{\\sqrt{2}}{2}\\right) \\cr &\\approx 41.6\\text{ N} \\end{aligned}",
        "<strong>(b) Coefficient of friction $\\mu$:</strong><br><br>Block $A$ ($5.0\\text{ kg}$) is on the point of sliding up the $30^\\circ$ plane, so maximum friction $F_{\\text{max}} = \\mu R_A$ acts down the plane.<br><br>Resolving perpendicular to the slope for Block $A$:\\begin{aligned} R_A &= m_A g\\cos 30^\\circ \\cr &= 5.0(9.8)\\left(\\dfrac{\\sqrt{3}}{2}\\right) \\cr &\\approx 42.435\\text{ N} \\end{aligned}<br>Resolving parallel to the slope for Block $A$:\\begin{aligned} &T = m_A g\\sin 30^\\circ + F_{\\text{max}} \\cr &41.577 = 5.0(9.8)(0.5) + \\mu(42.435) \\cr &41.577 = 24.5 + 42.435\\mu \\cr &17.077 = 42.435\\mu \\cr &\\mu = \\dfrac{17.077}{42.435} \\cr &\\mu \\approx 0.402 \\end{aligned}",
        "Final Answer: (a) $T = 41.6\\text{ N}$, (b) $\\mu = 0.402$"
    ],
    "pi_options": [
        {
            "ans": "(a) $T = 41.6\\text{ N}$, (b) $\\mu = 1.56$",
            "feedback": "Check the direction of friction. Because Block $A$ is on the point of sliding up the plane, friction must oppose this motion and act down the plane, adding to the weight component."
        },
        {
            "ans": "(a) $T = 58.8\\text{ N}$, (b) $\\mu = 0.402$",
            "feedback": "Remember to resolve the weight of Block $B$ parallel to the slope by multiplying by $\\sin 45^\\circ$. Using $T = m_B g = 58.8\\text{ N}$ assumes a vertical drop."
        },
        {
            "ans": "(a) $T = 41.6\\text{ N}$, (b) $\\mu = 0.697$",
            "feedback": "Take care not to transpose sine and cosine. Resolving perpendicular to the incline uses $\\cos 30^\\circ$, whereas parallel to the incline uses $\\sin 30^\\circ$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Direction of Friction",
        "content": "Friction always opposes impending relative motion. Because Block $A$ is on the point of sliding up the slope under the pull of the string, limiting friction $F_{\\text{max}}$ must act down the slope, acting alongside the component of weight."
    }
},
{
    "id": "012172",
    "branch": "Mechanics",
    "board": "OCR B (MEI)",
    "level": "A",
    "major_area": "Dynamics",
    "topic": "Connected Particles",
    "subtopic": [
        "Newton's second law",
        "Double inclined plane",
        "Acceleration and tension"
    ],
    "img": "images/Mechanics_pngs/012172.png",
    "question": "The diagram shows a fixed triangular wedge with faces inclined at $30^\\circ$ and $60^\\circ$ to the horizontal. Particle $P$ of mass $3.0\\text{ kg}$ rests on the left face ($30^\\circ$), which is smooth. Particle $Q$ of mass $5.0\\text{ kg}$ rests on the right face ($60^\\circ$), which is rough with a coefficient of friction $\\mu = 0.25$.<br><br>The particles are connected by a light inextensible string passing over a small, smooth pulley at the apex. The string lies in a vertical plane containing the lines of greatest slope of both faces. The system is released from rest with the string taut.<br><em>[Take $g = 9.8\\text{ m s}^{-2}$.]</em><br><br><strong>(a)</strong> Show that particle $Q$ accelerates down the right face and find the magnitude of the acceleration $a$, giving your answer to $3$ significant figures.<br><br><strong>(b)</strong> Find the tension in the string during the motion, giving your answer to $3$ significant figures.",
    "steps": [
        "<strong>(a) Find system acceleration $a$:</strong><br><br>Forces on $Q$ ($5.0\\text{ kg}$) down the $60^\\circ$ slope:<br>• Downward weight component: $5.0(9.8)\\sin 60^\\circ \\approx 42.435\\text{ N}$<br>• Normal reaction: $R_Q = 5.0(9.8)\\cos 60^\\circ = 24.5\\text{ N}$<br>• Friction opposing motion: $F_Q = 0.25(24.5) = 6.125\\text{ N}$<br><br>Force on $P$ ($3.0\\text{ kg}$) down the smooth $30^\\circ$ slope:<br>• Downward weight component: $3.0(9.8)\\sin 30^\\circ = 14.7\\text{ N}$<br><br>Net driving force along the string:\\begin{aligned} F_{\\text{net}} &= 42.435 - 6.125 - 14.7 \\cr &= 21.61\\text{ N} > 0 \\end{aligned}<br>Since $F_{\\text{net}} > 0$, particle $Q$ accelerates down the right face.<br><br>Applying Newton's second law to the whole system:\\begin{aligned} &(m_P + m_Q)a = F_{\\text{net}} \\cr &(3.0 + 5.0)a = 21.61 \\cr &8.0a = 21.61 \\cr &a = \\dfrac{21.61}{8.0} \\cr &a \\approx 2.70\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Tension in the string:</strong><br><br>Applying $F = ma$ to particle $P$ up the smooth slope:\\begin{aligned} &T - 14.7 = 3.0a \\cr &T - 14.7 = 3.0(2.701) \\cr &T - 14.7 = 8.103 \\cr &T = 14.7 + 8.103 \\cr &T \\approx 22.8\\text{ N} \\end{aligned}",
        "Final Answer: (a) $a = 2.70\\text{ m s}^{-2}$, (b) $T = 22.8\\text{ N}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $a = 3.47\\text{ m s}^{-2}$, (b) $T = 25.1\\text{ N}$",
            "feedback": "Remember to include the friction force on particle $Q$. Omitting friction gives $F_{\\text{net}} = 42.44 - 14.70 = 27.74\\text{ N}$, overestimating the acceleration."
        },
        {
            "ans": "(a) $a = 2.70\\text{ m s}^{-2}$, (b) $T = 14.7\\text{ N}$",
            "feedback": "The tension is not equal to the static component of weight ($14.7\\text{ N}$). Because particle $P$ is accelerating, $T - 14.7 = m_P a$ must be used."
        },
        {
            "ans": "(a) $a = 1.94\\text{ m s}^{-2}$, (b) $T = 22.8\\text{ N}$",
            "feedback": "Check the signs in the net force equation. Friction opposes the motion of particle $Q$, so it must be subtracted from the driving force, not added twice."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Whole System vs Individual Equations",
        "content": "Adding the individual equations of motion for both particles eliminates the internal tension $T$ immediately, giving $(m_1 + m_2)a = F_{\\text{net}}$. Once you determine the system acceleration $a$, substitute it back into the simpler equation (here, smooth particle $P$) to find $T$ with minimal algebra."
    }
},
{
    "id": "012173",
    "branch": "Mechanics",
    "board": "OCR B (MEI)",
    "level": "A",
    "major_area": "Statics & Equilibrium",
    "topic": "Connected Particles",
    "subtopic": [
        "Inclined plane with hanging mass",
        "Range of equilibrium",
        "Limiting friction"
    ],
    "img": "images/Mechanics_pngs/012173.png",
    "question": "The diagram shows a block $A$ of mass $8.0\\text{ kg}$ resting on a rough plane inclined at $30^\\circ$ to the horizontal. Block $A$ is connected to a block $B$ of mass $M\\text{ kg}$ by a light inextensible string passing over a small, smooth pulley fixed at the top of the incline. Block $B$ hangs freely vertically downwards.<br><br>The coefficient of friction between Block $A$ and the inclined plane is $\\mu = 0.40$. The system is in equilibrium with the string taut.<br><em>[Take $g = 9.8\\text{ m s}^{-2}$.]</em><br><br><strong>(a)</strong> Find the minimum value of $M$ for which Block $A$ does not slip down the plane.<br><br><strong>(b)</strong> Find the maximum value of $M$ for which Block $A$ does not slip up the plane.",
    "steps": [
        "<strong>(a) Minimum mass $M$ (impending slip down):</strong><br><br>Normal reaction on Block $A$:\\begin{aligned} R &= 8.0(9.8)\\cos 30^\\circ \\cr &= 78.4\\left(\\dfrac{\\sqrt{3}}{2}\\right) \\cr &\\approx 67.896\\text{ N} \\end{aligned}<br>Maximum available friction:\\begin{aligned} F_{\\text{max}} &= \\mu R \\cr &= 0.40(67.896) \\cr &\\approx 27.158\\text{ N} \\end{aligned}<br>Component of weight down the plane:\\begin{aligned} W_\\parallel &= 8.0(9.8)\\sin 30^\\circ \\cr &= 39.2\\text{ N} \\end{aligned}<br>For minimum $M$, Block $A$ is on the point of slipping down, so friction acts up the plane:\\begin{aligned} &T_{\\text{min}} + F_{\\text{max}} = W_\\parallel \\cr &T_{\\text{min}} = 39.2 - 27.158 \\cr &T_{\\text{min}} = 12.042\\text{ N} \\end{aligned}<br>Since $T = Mg$:\\begin{aligned} &9.8M_{\\text{min}} = 12.042 \\cr &M_{\\text{min}} = \\dfrac{12.042}{9.8} \\cr &M_{\\text{min}} \\approx 1.23\\text{ kg} \\end{aligned}",
        "<strong>(b) Maximum mass $M$ (impending slip up):</strong><br><br>For maximum $M$, Block $A$ is on the point of slipping up, so friction acts down the plane:\\begin{aligned} &T_{\\text{max}} = W_\\parallel + F_{\\text{max}} \\cr &T_{\\text{max}} = 39.2 + 27.158 \\cr &T_{\\text{max}} = 66.358\\text{ N} \\end{aligned}<br>Since $T = Mg$:\\begin{aligned} &9.8M_{\\text{max}} = 66.358 \\cr &M_{\\text{max}} = \\dfrac{66.358}{9.8} \\cr &M_{\\text{max}} \\approx 6.77\\text{ kg} \\end{aligned}",
        "Final Answer: (a) $M_{\\text{min}} = 1.23\\text{ kg}$, (b) $M_{\\text{max}} = 6.77\\text{ kg}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $M_{\\text{min}} = 4.00\\text{ kg}$, (b) $M_{\\text{max}} = 6.77\\text{ kg}$",
            "feedback": "A value of $4.00\\text{ kg}$ neglects friction entirely ($8\\sin 30^\\circ = 4.00\\text{ kg}$). Friction assists the tension to prevent Block $A$ from slipping down, allowing a smaller hanging mass."
        },
        {
            "ans": "(a) $M_{\\text{min}} = 1.23\\text{ kg}$, (b) $M_{\\text{max}} = 9.54\\text{ kg}$",
            "feedback": "Check the normal reaction calculation. You must multiply by $\\cos 30^\\circ$ when resolving perpendicular to the incline; using $R = mg$ overestimates the maximum friction."
        },
        {
            "ans": "(a) $M_{\\text{min}} = 2.77\\text{ kg}$, (b) $M_{\\text{max}} = 6.77\\text{ kg}$",
            "feedback": "Remember to divide by $g = 9.8\\text{ m s}^{-2}$ to find mass $M$ from tension $T$. Dividing by an incorrect resolved component alters the minimum mass."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: The Cone of Equilibrium",
        "content": "Friction is a responsive, self-adjusting force. It only reaches its maximum magnitude $F_{\\text{max}} = \\mu R$ when slipping is imminent. For any hanging mass in the range $1.23\\text{ kg} \\le M \\le 6.77\\text{ kg}$, friction takes on intermediate values to maintain stationary equilibrium."
    }
},
{
    "id": "012174",
    "branch": "Mechanics",
    "board": "OCR B (MEI)",
    "level": "A",
    "major_area": "Statics & Equilibrium",
    "topic": "Connected Particles",
    "subtopic": [
        "Resultant force on a pulley",
        "Symmetrical wedge",
        "Vector resolution"
    ],
    "img": "images/Mechanics_pngs/012174.png",
    "question": "The diagram shows a symmetrical triangular wedge fixed to horizontal ground, with both faces inclined at $40^\\circ$ to the horizontal. Two blocks, $M_1$ and $M_2$, each of mass $4.0\\text{ kg}$, rest on the smooth faces of the wedge.<br><br>The blocks are connected by a light inextensible string passing over a small, smooth pulley fixed at the apex. The string lies parallel to the lines of greatest slope on both sides, and the system is in equilibrium.<br><em>[Take $g = 9.8\\text{ m s}^{-2}$.]</em><br><br><strong>(a)</strong> Find the tension $T$ in the string.<br><br><strong>(b)</strong> State the direction and calculate the magnitude of the resultant force exerted by the string on the pulley, giving your answer to $3$ significant figures.",
    "steps": [
        "<strong>(a) Tension in the string:</strong><br><br>Considering either block resting in equilibrium on a smooth $40^\\circ$ slope:\\begin{aligned} T &= mg\\sin 40^\\circ \\cr &= 4.0(9.8)\\sin 40^\\circ \\cr &= 39.2\\sin 40^\\circ \\cr &\\approx 25.2\\text{ N} \\end{aligned}",
        "<strong>(b) Resultant force on the pulley:</strong><br><br>The two string segments pull along the slopes, each at an angle of $40^\\circ$ below the horizontal.<br><br>By symmetry, the horizontal components cancel out:\\begin{aligned} R_x &= T\\cos 40^\\circ - T\\cos 40^\\circ \\cr &= 0 \\end{aligned}<br>The vertical components both act downwards:\\begin{aligned} R_y &= 2T\\sin 40^\\circ \\cr &= 2(25.197)\\sin 40^\\circ \\cr &\\approx 32.4\\text{ N} \\end{aligned}<br>Therefore, the resultant force has magnitude $32.4\\text{ N}$ acting vertically downwards.",
        "Final Answer: (a) $T = 25.2\\text{ N}$, (b) $32.4\\text{ N}$ vertically downwards"
    ],
    "pi_options": [
        {
            "ans": "(a) $T = 25.2\\text{ N}$, (b) $50.4\\text{ N}$ vertically downwards",
            "feedback": "Forces are vector quantities. You cannot add the two tension magnitudes linearly ($25.2 + 25.2 = 50.4\\text{ N}$); you must account for the angle between them using vector resolution."
        },
        {
            "ans": "(a) $T = 39.2\\text{ N}$, (b) $32.4\\text{ N}$ vertically downwards",
            "feedback": "Remember that the blocks rest on an inclined plane. The tension balances the component of weight parallel to the slope ($mg\\sin 40^\\circ$), not the full weight $mg$."
        },
        {
            "ans": "(a) $T = 25.2\\text{ N}$, (b) $38.6\\text{ N}$ vertically downwards",
            "feedback": "Check the trigonometric component used for the vertical direction. Because each slope is inclined at $40^\\circ$ to the horizontal, the downward component is $T\\sin 40^\\circ$, not $T\\cos 40^\\circ$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Resultant Pulley Forces",
        "content": "A pulley experiences a pull along both segments of the string. When finding the force on the pulley, use vector resolution or the angle bisector formula $R = 2T\\cos(\\theta / 2)$, where $\\theta = 100^\\circ$ is the angle between the two strings: $R = 2(25.197)\\cos 50^\\circ \\approx 32.4\\text{ N}$."
    }
},
{
    "id": "012175",
    "branch": "Mechanics",
    "board": "OCR B (MEI)",
    "level": "A",
    "major_area": "Dynamics",
    "topic": "Connected Particles",
    "subtopic": [
        "Motion under gravity",
        "String becoming slack",
        "Multi-stage motion"
    ],
    "img": "images/Mechanics_pngs/012175.png",
    "question": "The diagram shows a block $P$ of mass $2.0\\text{ kg}$ resting on a rough plane inclined at $30^\\circ$ to the horizontal, with coefficient of friction $\\mu = 0.20$. Block $P$ is connected to a block $Q$ of mass $4.0\\text{ kg}$ by a light inextensible string passing over a small, smooth pulley at the top of the incline.<br><br>Block $Q$ hangs vertically at a height of $1.2\\text{ m}$ above horizontal ground. The system is released from rest from this position with the string taut. Block $Q$ descends and hits the ground without rebounding.<br><em>[Take $g = 9.8\\text{ m s}^{-2}$. Assume block $P$ does not reach the pulley.]</em><br><br><strong>(a)</strong> Find the speed of block $Q$ immediately before it strikes the ground.<br><br><strong>(b)</strong> Find the further distance block $P$ travels up the plane after block $Q$ hits the ground before coming momentarily to rest, giving your answer to $3$ significant figures.",
    "steps": [
        "<strong>(a) Speed before impact:</strong><br><br>Frictional force on Block $P$:\\begin{aligned} R_P &= 2.0(9.8)\\cos 30^\\circ \\cr &\\approx 16.974\\text{ N} \\cr F_P &= 0.20(16.974) \\cr &\\approx 3.395\\text{ N} \\end{aligned}<br>Applying Newton's second law to the connected system before impact:\\begin{aligned} &m_Q g - (m_P g\\sin 30^\\circ + F_P) \\cr & \\qquad \\qquad= (m_P + m_Q)a_1 \\cr &4.0(9.8) - (2.0(9.8)(0.5) + 3.395) \\cr & \\qquad \\qquad = 6.0a_1 \\cr &39.2 - (9.8 + 3.395) = 6.0a_1 \\cr &26.005 = 6.0a_1 \\cr &a_1 \\approx 4.334\\text{ m s}^{-2} \\end{aligned}<br>Speed when Block $Q$ strikes the ground ($s = 1.2\\text{ m}$):\\begin{aligned} v^2 &= u^2 + 2a_1 s \\cr &= 0 + 2(4.334)(1.2) \\cr &\\approx 10.402 \\cr v &\\approx 3.23\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(b) Further distance travelled by $P$:</strong><br><br>When Block $Q$ hits the ground, the string goes slack. Block $P$ decelerates under gravity and friction:\\begin{aligned} &-(m_P g\\sin 30^\\circ + F_P) = m_P a_2 \\cr &-(9.8 + 3.395) = 2.0a_2 \\cr &-13.195 = 2.0a_2 \\cr &a_2 \\approx -6.598\\text{ m s}^{-2} \\end{aligned}<br>Using $v^2 = u^2 + 2as$ with final velocity $0$ and initial speed $3.225\\text{ m s}^{-1}$:\\begin{aligned} &0 = 10.402 + 2(-6.598)s_2 \\cr &13.195s_2 = 10.402 \\cr &s_2 = \\dfrac{10.402}{13.195} \\cr &s_2 \\approx 0.788\\text{ m} \\end{aligned}",
        "Final Answer: (a) $3.23\\text{ m s}^{-1}$, (b) $0.788\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $3.23\\text{ m s}^{-1}$, (b) $1.06\\text{ m}$",
            "feedback": "Remember to include friction during the second stage. While Block $P$ continues up the slope, both friction and gravity decelerate it ($a_2 = -(g\\sin 30^\\circ + \\mu g\\cos 30^\\circ)$)."
        },
        {
            "ans": "(a) $3.63\\text{ m s}^{-1}$, (b) $0.788\\text{ m}$",
            "feedback": "Friction must be accounted for during the first stage as well. Neglecting friction when Block $Q$ descends yields an overestimated impact speed of $3.63\\text{ m s}^{-1}$."
        },
        {
            "ans": "(a) $3.23\\text{ m s}^{-1}$, (b) $1.99\\text{ m}$",
            "feedback": "The question asks for the further distance travelled after Block $Q$ strikes the ground ($0.788\\text{ m}$), not the total distance from the initial position ($1.2 + 0.788 = 1.99\\text{ m}$)."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Multi-Stage Mechanics Problems",
        "content": "A classic two-stage problem requires a two-stage acceleration analysis. When the hanging mass strikes the ground, tension drops to zero and the string becomes slack. The final velocity of stage 1 becomes the initial velocity of stage 2, but the acceleration changes abruptly from $+4.33\\text{ m s}^{-2}$ to $-6.60\\text{ m s}^{-2}$."
    }
},
{
    "id": "012176",
    "branch": "Mechanics",
    "board": "OCR B (MEI)",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Variable Acceleration",
    "subtopic": [
        "Piecewise velocity models",
        "Calculus in kinematics",
        "Modelling evaluation"
    ],
    "img": false,
    "question": "The velocity of an electric car, $v\\text{ m s}^{-1}$ at time $t$ seconds, is being modelled for the interval $0 \\le t \\le 20$. Initially the car has velocity $4\\text{ m s}^{-1}$ and it accelerates to $10\\text{ m s}^{-1}$ in $4$ seconds.<br><br>In <strong>Model A</strong>, the acceleration is assumed to be uniform throughout the motion.<br><br><strong>(a)</strong> Find an expression for the velocity of the car at time $t$ using Model A, and explain briefly why this model is unrealistic in the long term.<br><br>Model A is refined so that the acceleration remains constant until the car reaches a top speed of $16\\text{ m s}^{-1}$, after which the velocity remains constant.<br><br><strong>(b)</strong> Find the time at which the acceleration changes, and sketch a velocity-time graph for the car over the interval $0 \\le t \\le 20$, showing clearly the coordinates of all key points.<br><br><strong>(c)</strong> Calculate the displacement of the car in the first $20$ seconds according to this refined Model A.<br><br>In <strong>Model B</strong>, the velocity of the car is given by:<br>\\begin{aligned} v(t) &= 4 + 0.5625t^2 \\cr &\\quad - 0.046875t^3,\\text{ }(0 \\le t \\le 8) \\cr v(t) &= 16,\\text{ }(8 < t \\le 20) \\end{aligned}<br><br><strong>(d)</strong> Show that Model B gives consistent values with Model A for the velocity at $t = 4\\text{ s}$ and $t = 8\\text{ s}$.<br><br><strong>(e)</strong> Explain, by considering the acceleration immediately before $t = 8\\text{ s}$, why Model B is a more realistic physical model than refined Model A.<br><br><strong>(f)</strong> Show that Model B gives the same displacement as refined Model A over the first $20$ seconds.",
    "steps": [
        "<strong>(a) Model A:</strong><br><br>Constant acceleration:\\begin{aligned} a &= \\dfrac{10 - 4}{4} \\cr &= 1.5\\text{ m s}^{-2} \\end{aligned}<br>Velocity expression:\\begin{aligned} v(t) &= u + at \\cr &= 4 + 1.5t \\end{aligned}<br>This model is unrealistic in the long term because the velocity increases without limit, which is physically impossible for a motor vehicle.",
        "<strong>(b) Refined Model A:</strong><br><br>Time to reach $16\\text{ m s}^{-1}$:\\begin{aligned} 4 + 1.5t &= 16 \\cr 1.5t &= 12 \\cr t &= 8\\text{ s} \\end{aligned}<br>The acceleration changes at $t = 8\\text{ s}$.<br><br><img src='images/Mechanics_pngs/012176_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
        "<strong>(c) Displacement for refined Model A:</strong><br><br>The area under the $v$-$t$ graph consists of a trapezium from $t = 0$ to $8$ and a rectangle from $t = 8$ to $20$:\\begin{aligned} s_1 &= \\dfrac{4 + 16}{2} \\times 8 \\cr &= 80\\text{ m} \\cr s_2 &= 16 \\times (20 - 8) \\cr &= 192\\text{ m} \\cr s &= 80 + 192 \\cr &= 272\\text{ m} \\end{aligned}",
        "<strong>(d) Model B consistency:</strong><br><br>At $t = 4\\text{ s}$:\\begin{aligned} v(4) &= 4 + 0.5625(16) \\cr &\\quad - 0.046875(64) \\cr &= 4 + 9 - 3 \\cr &= 10\\text{ m s}^{-1} \\end{aligned}<br>At $t = 8\\text{ s}$:\\begin{aligned} v(8) &= 4 + 0.5625(64) \\cr &\\quad - 0.046875(512) \\cr &= 4 + 36 - 24 \\cr &= 16\\text{ m s}^{-1} \\end{aligned}<br>Both values match Model A exactly.",
        "<strong>(e) Acceleration at $t = 8\\text{ s}$:</strong><br><br>Differentiating Model B for $0 \\le t \\le 8$:\\begin{aligned} a(t) &= \\dfrac{\\text{d}v}{\\text{d}t} \\cr &= 1.125t - 0.140625t^2 \\end{aligned}<br>At $t = 8\\text{ s}$:\\begin{aligned} a(8) &= 1.125(8) - 0.140625(64) \\cr &= 9 - 9 \\cr &= 0\\text{ m s}^{-2} \\end{aligned}<br>Model B is more realistic because the acceleration transitions smoothly to zero at the cruising speed, whereas refined Model A has an instantaneous drop from $1.5\\text{ m s}^{-2}$ to $0$.",
        "<strong>(f) Model B displacement:</strong><br><br>Integrating $v(t)$ over $0 \\le t \\le 8$:\\begin{aligned} s_1 &= \\int_0^8 (4 + 0.5625t^2 \\cr &\\qquad - 0.046875t^3)\\,\\text{d}t \\cr &= \\Big[4t + 0.1875t^3 \\cr &\\qquad - 0.01171875t^4\\Big]_0^8 \\cr &= 32 + 96 - 48 \\cr &= 80\\text{ m} \\end{aligned}<br>For $8 < t \\le 20$, velocity is constant at $16\\text{ m s}^{-1}$, giving $s_2 = 16 \\times 12 = 192\\text{ m}$.<br><br>Total displacement $s = 80 + 192 = 272\\text{ m}$, which matches refined Model A.",
        "Final Answer: $v(t) = 4 + 1.5t$, $t = 8\\text{ s}$, $s = 272\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "$v(t) = 4 + 1.5t$, $t = 8\\text{ s}$, $s = 240\\text{ m}$",
            "feedback": "Check the area of the rectangle for the constant-speed phase. From $t = 8$ to $t = 20$ is an interval of $12\\text{ s}$, giving $s_2 = 16 \\times 12 = 192\\text{ m}$, not $160\\text{ m}$."
        },
        {
            "ans": "$v(t) = 4 + 2.5t$, $t = 4.8\\text{ s}$, $s = 272\\text{ m}$",
            "feedback": "Check the initial acceleration calculation: $a = (10 - 4)/4 = 6/4 = 1.5\\text{ m s}^{-2}$, not $10/4 = 2.5\\text{ m s}^{-2}$."
        },
        {
            "ans": "$v(t) = 4 + 1.5t$, $t = 10.7\\text{ s}$, $s = 272\\text{ m}$",
            "feedback": "To find the transition time, solve $4 + 1.5t = 16$, which gives $1.5t = 12 \\implies t = 8\\text{ s}$. Do not divide $16$ directly by $1.5$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Continuity of Acceleration",
        "content": "In real-world dynamics, a smooth derivative ($\\frac{\\text{d}v}{\\text{d}t} \\to 0$ as $t \\to 8$) avoids infinite 'jerk' (rate of change of acceleration). In refined Model A, acceleration drops discontinuously from $1.5\\text{ m s}^{-2}$ to $0$, which in reality would require an instantaneous drop in engine tractive force."
    }
},
{
    "id": "012177",
    "branch": "Mechanics",
    "board": "OCR B (MEI)",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Variable Acceleration",
    "subtopic": [
        "Multi-stage motion",
        "Quadratic deceleration",
        "Area under v-t graph"
    ],
    "img": false,
    "question": "The motion of a high-speed train over a $40$-second test run is modelled in three successive stages:<br>\\begin{aligned} v(t) &= 2t,\\text{ }(0 \\le t \\le 12) \\cr v(t) &= 24,\\text{ }(12 < t \\le 30) \\cr v(t) &= 24 - 0.24(t - 30)^2,\\text{ }(30 < t \\le 40) \\end{aligned}<br>where $v\\text{ m s}^{-1}$ is the velocity of the train at time $t$ seconds.<br><br><strong>(a)</strong> Sketch the velocity-time graph for the train for $0 \\le t \\le 40$, showing the coordinates of the vertices between the stages and the final state at $t = 40\\text{ s}$.<br><br><strong>(b)</strong> Show that the acceleration of the train is continuous at $t = 30\\text{ s}$.<br><br><strong>(c)</strong> Calculate the total distance travelled by the train during the $40$-second run.",
    "steps": [
        "<strong>(a) Velocity-time graph:</strong><br><br>Vertices between stages:<br>• Start: $(0, 0)$<br>• End of stage 1: $(12, 24)$<br>• End of stage 2: $(30, 24)$<br>• End of stage 3: $v(40) = 24 - 0.24(100) = 0$, giving $(40, 0)$<br><br><img src='images/Mechanics_pngs/012177_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
        "<strong>(b) Continuity of acceleration at $t = 30\\text{ s}$:</strong><br><br>For $12 < t \\le 30$, velocity is constant, so:\\begin{aligned} a_1(t) = 0\\text{ m s}^{-2} \\end{aligned}<br>For $30 < t \\le 40$, differentiating with respect to $t$:\\begin{aligned} a_2(t) &= \\dfrac{\\text{d}}{\\text{d}t}\\big[24 - 0.24(t - 30)^2\\big] \\cr &= -0.48(t - 30) \\end{aligned}<br>Evaluating at $t = 30\\text{ s}$:\\begin{aligned} a_2(30) &= -0.48(0) \\cr &= 0\\text{ m s}^{-2} \\end{aligned}<br>Since $\\lim_{t \\to 30^-} a(t) = \\lim_{t \\to 30^+} a(t) = 0$, the acceleration is continuous at $t = 30\\text{ s}$.",
        "<strong>(c) Total distance travelled:</strong><br><br>Stage 1 (triangle):\\begin{aligned} s_1 &= \\dfrac{1}{2}(12)(24) \\cr &= 144\\text{ m} \\end{aligned}<br>Stage 2 (rectangle):\\begin{aligned} s_2 &= (30 - 12) \\times 24 \\cr &= 432\\text{ m} \\end{aligned}<br>Stage 3 (calculus):\\begin{aligned} s_3 &= \\int_{30}^{40} \\big[24 - 0.24(t - 30)^2\\big]\\,\\text{d}t \\cr &= \\Big[24(t - 30) - 0.08(t - 30)^3\\Big]_{30}^{40} \\cr &= 24(10) - 0.08(1000) \\cr &= 240 - 80 \\cr &= 160\\text{ m} \\end{aligned}<br>Total distance:\\begin{aligned} s_{\\text{total}} &= 144 + 432 + 160 \\cr &= 736\\text{ m} \\end{aligned}",
        "Final Answer: (a) $(0,0)$, $(12,24)$, $(30,24)$, $(40,0)$, (b) $a(30) = 0\\text{ m s}^{-2}$, (c) $736\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $(0,0)$, $(12,24)$, $(30,24)$, $(40,0)$, (b) $a(30) = 0\\text{ m s}^{-2}$, (c) $696\\text{ m}$",
            "feedback": "Check the integration for Stage 3. Integrating $-0.24(t - 30)^2$ yields $-0.08(t - 30)^3$. Be careful not to divide by $2$ instead of $3$."
        },
        {
            "ans": "(a) $(0,0)$, $(12,24)$, $(30,24)$, $(40,0)$, (b) $a(30) = -0.48\\text{ m s}^{-2}$, (c) $736\\text{ m}$",
            "feedback": "At the boundary $t = 30\\text{ s}$, the term $(t - 30)$ equals zero, giving acceleration $a(30) = -0.48(0) = 0\\text{ m s}^{-2}$, not $-0.48\\text{ m s}^{-2}$."
        },
        {
            "ans": "(a) $(0,0)$, $(12,24)$, $(30,24)$, $(40,0)$, (b) $a(30) = 0\\text{ m s}^{-2}$, (c) $576\\text{ m}$",
            "feedback": "Remember to include Stage 3. Omitting the deceleration phase omits the final $160\\text{ m}$ of travel."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Shifted Variables in Integration",
        "content": "When integrating terms like $(t - 30)^2$, use the linear substitution rule $\\int (t - c)^n\\,\\text{d}t = \\frac{(t - c)^{n+1}}{n+1}$. Evaluating from $t = 30$ to $40$ simply means plugging in $u = 0$ and $u = 10$, which avoids expanding the quadratic polynomial."
    }
},
{
    "id": "012178",
    "branch": "Mechanics",
    "board": "OCR B (MEI)",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Variable Acceleration",
    "subtopic": [
        "Exponential resistance model",
        "Asymptotic terminal velocity",
        "Definite integration"
    ],
    "img": "images/Mechanics_pngs/012178.png",
    "question": "The diagram shows two mathematical models proposed for the velocity $v\\text{ m s}^{-1}$ of a skydiver in a wind tunnel over the first $20$ seconds of flight.<br><br>In <strong>Model A</strong>, the skydiver accelerates uniformly from rest to a terminal velocity $V_{\\max} = 28\\text{ m s}^{-1}$ in $10\\text{ s}$, after which the velocity remains constant.<br><br>In <strong>Model B</strong>, atmospheric drag is taken into account and the velocity is modelled by:<br>$$v(t) = 28(1 - \\text{e}^{-0.1t}),\\text{ for } t \\ge 0$$<br><strong>(a)</strong> State the initial acceleration predicted by Model B at $t = 0$.<br><br><strong>(b)</strong> Find the time taken under Model B for the skydiver to reach a velocity of $20\\text{ m s}^{-1}$, giving your answer to $3$ significant figures.<br><br><strong>(c)</strong> Calculate the displacement of the skydiver during the first $20$ seconds according to Model B, giving your answer to $3$ significant figures.",
    "steps": [
        "<strong>(a) Initial acceleration under Model B:</strong><br><br>Differentiating $v(t) = 28 - 28\\text{e}^{-0.1t}$ with respect to $t$:\\begin{aligned} a(t) &= \\dfrac{\\text{d}v}{\\text{d}t} \\cr &= 28(0.1\\text{e}^{-0.1t}) \\cr &= 2.8\\text{e}^{-0.1t} \\end{aligned}<br>At $t = 0$:\\begin{aligned} a(0) &= 2.8\\text{e}^{0} \\cr &= 2.8\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Time to reach $20\\text{ m s}^{-1}$:</strong><br><br>Set $v(t) = 20$:\\begin{aligned} &28(1 - \\text{e}^{-0.1t}) = 20 \\cr &1 - \\text{e}^{-0.1t} = \\dfrac{20}{28} \\cr &1 - \\text{e}^{-0.1t} = \\dfrac{5}{7} \\cr &\\text{e}^{-0.1t} = \\dfrac{2}{7} \\cr &-0.1t = \\ln\\left(\\dfrac{2}{7}\\right) \\cr &t = -10\\ln\\left(\\dfrac{2}{7}\\right) \\cr &t = 10\\ln(3.5) \\cr &t \\approx 12.5\\text{ s} \\end{aligned}",
        "<strong>(c) Displacement over the first $20$ seconds:</strong><br><br>Integrating $v(t)$ from $t = 0$ to $t = 20$:\\begin{aligned} s &= \\int_0^{20} 28(1 - \\text{e}^{-0.1t})\\,\\text{d}t \\cr &= \\Big[28t + 280\\text{e}^{-0.1t}\\Big]_0^{20} \\cr &= \\big(28(20) + 280\\text{e}^{-2}\\big) \\cr &\\quad - \\big(0 + 280\\text{e}^{0}\\big) \\cr &= 560 + 37.89 - 280 \\cr &= 317.89 \\cr &\\approx 318\\text{ m} \\end{aligned}",
        "Final Answer: (a) $2.8\\text{ m s}^{-2}$, (b) $12.5\\text{ s}$, (c) $318\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $2.8\\text{ m s}^{-2}$, (b) $12.5\\text{ s}$, (c) $598\\text{ m}$",
            "feedback": "Remember to evaluate the lower limit at $t = 0$. Because $\\text{e}^0 = 1$, the lower limit contributes $-280$, which must be subtracted from the upper limit value."
        },
        {
            "ans": "(a) $2.8\\text{ m s}^{-2}$, (b) $7.14\\text{ s}$, (c) $318\\text{ m}$",
            "feedback": "Do not divide $20$ by the initial acceleration $2.8$. Because the acceleration is non-uniform, you must solve the exponential equation using natural logarithms."
        },
        {
            "ans": "(a) $28\\text{ m s}^{-2}$, (b) $12.5\\text{ s}$, (c) $318\\text{ m}$",
            "feedback": "Remember to apply the chain rule when differentiating $\\text{e}^{-0.1t}$, which brings down a factor of $-0.1$. The initial acceleration is $28 \\times 0.1 = 2.8\\text{ m s}^{-2}$, not $28\\text{ m s}^{-2}$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Never Forget the Lower Limit of an Exponential",
        "content": "A very common slip in A-Level definite integration is assuming that evaluating at $t = 0$ gives zero. While polynomial terms $28t$ vanish at $0$, exponential terms like $280\\text{e}^{-0.1t}$ evaluate to $280\\text{e}^0 = 280$. Always write out both limits explicitly."
    }
},
{
    "id": "012179",
    "branch": "Mechanics",
    "board": "OCR B (MEI)",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Variable Acceleration",
    "subtopic": [
        "Acceleration-time graphs",
        "Calculus from a-t to v-t",
        "Definite integration"
    ],
    "img": "images/Mechanics_pngs/012179.png",
    "question": "The diagram shows the acceleration-time ($a$-$t$) graph for a racing car during a $10$-second performance test. The car starts from rest at the origin at time $t = 0$.<br><br>The acceleration $a\\text{ m s}^{-2}$ at time $t$ seconds is defined by:<br>\\begin{aligned} a(t) &= 1.5t,\\text{ }(0 \\le t \\le 2) \\cr a(t) &= 3,\\text{ }(2 < t \\le 7) \\cr a(t) &= 10 - t,\\text{ }(7 < t \\le 10) \\end{aligned}<br><strong>(a)</strong> Using the area under the acceleration-time graph, find the maximum velocity reached by the car during the test.<br><br><strong>(b)</strong> By integration, find an expression for the displacement of the car during the first stage ($0 \\le t \\le 2$), and hence find the distance travelled in the first $2$ seconds.<br><br><strong>(c)</strong> Calculate the total displacement of the car at $t = 10\\text{ s}$, giving your answer to $3$ significant figures.",
    "steps": [
        "<strong>(a) Maximum velocity from area:</strong><br><br>The car starts from rest ($u = 0$), so the maximum velocity at $t = 10\\text{ s}$ equals the total area under the $a$-$t$ graph:<br>• Triangle 1 ($0 \\le t \\le 2$): $\\frac{1}{2}(2)(3) = 3\\text{ m s}^{-1}$<br>• Rectangle ($2 < t \\le 7$): $(7 - 2) \\times 3 = 15\\text{ m s}^{-1}$<br>• Triangle 2 ($7 < t \\le 10$): $\\frac{1}{2}(10 - 7)(3) = 4.5\\text{ m s}^{-1}$<br><br>Total area:\\begin{aligned} v_{\\max} &= 3 + 15 + 4.5 \\cr &= 22.5\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(b) Displacement for $0 \\le t \\le 2$:</strong><br><br>Velocity with $v(0) = 0$:\\begin{aligned} v(t) &= \\int 1.5t\\,\\text{d}t \\cr &= 0.75t^2 \\end{aligned}<br>Displacement with $s(0) = 0$:\\begin{aligned} s(t) &= \\int 0.75t^2\\,\\text{d}t \\cr &= 0.25t^3 \\end{aligned}<br>At $t = 2\\text{ s}$:\\begin{aligned} s(2) &= 0.25(2^3) \\cr &= 2\\text{ m} \\end{aligned}",
        "<strong>(c) Total displacement at $t = 10\\text{ s}$:</strong><br><br>Stage 1 ($0 \\le t \\le 2$): $s_1 = 2\\text{ m}$, $v(2) = 3\\text{ m s}^{-1}$.<br><br>Stage 2 ($2 < t \\le 7$): $a = 3\\text{ m s}^{-2}$, initial velocity $3\\text{ m s}^{-1}$:\\begin{aligned} s_2 &= ut + \\dfrac{1}{2}at^2 \\cr &= 3(5) + \\dfrac{1}{2}(3)(5^2) \\cr &= 15 + 37.5 \\cr &= 52.5\\text{ m} \\end{aligned}<br>Velocity at $t = 7\\text{ s}$ is $v(7) = 3 + 3(5) = 18\\text{ m s}^{-1}$.<br><br>Stage 3 ($7 < t \\le 10$): integrating $a(t) = 10 - t$:\\begin{aligned} v(t) &= 18 + \\int_7^t (10 - u)\\,\\text{d}u \\cr &= 10t - 0.5t^2 - 27.5 \\cr s_3 &= \\int_7^{10} (10t - 0.5t^2 - 27.5)\\,\\text{d}t \\cr &= \\Big[5t^2 - \\dfrac{1}{6}t^3 - 27.5t\\Big]_7^{10} \\cr &= 59.5\\text{ m} \\end{aligned}<br>Total displacement:\\begin{aligned} s_{\\text{total}} &= 2 + 52.5 + 59.5 \\cr &= 114\\text{ m} \\end{aligned}",
        "Final Answer: (a) $22.5\\text{ m s}^{-1}$, (b) $s = 0.25t^3$, $2\\text{ m}$, (c) $114\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $22.5\\text{ m s}^{-1}$, (b) $s = 0.25t^3$, $2\\text{ m}$, (c) $96.5\\text{ m}$",
            "feedback": "Remember to include initial velocities when transitioning between stages. For Stage 2, the car enters with speed $v(2) = 3\\text{ m s}^{-1}$, which contributes to the displacement."
        },
        {
            "ans": "(a) $30.0\\text{ m s}^{-1}$, (b) $s = 0.75t^2$, $3\\text{ m}$, (c) $114\\text{ m}$",
            "feedback": "To find displacement from acceleration, integrate twice. Integrating once gives the velocity expression $v(t) = 0.75t^2$; integrating again yields $s(t) = 0.25t^3$."
        },
        {
            "ans": "(a) $22.5\\text{ m s}^{-1}$, (b) $s = 0.25t^3$, $2\\text{ m}$, (c) $142\\text{ m}$",
            "feedback": "Check the integration limits and boundary constants for Stage 3. Ensure the initial velocity of $18\\text{ m s}^{-1}$ at $t = 7\\text{ s}$ is properly accounted for."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Area Under a-t Gives Change in Velocity",
        "content": "Just as the area under a velocity-time graph gives displacement ($\\Delta s = \\int v\\,\\text{d}t$), the area under an acceleration-time graph gives change in velocity ($\\Delta v = \\int a\\,\\text{d}t$). Since the car starts from rest, calculating the geometric area of the trapezium instantly gives the peak velocity without doing algebraic integration."
    }
},
{
    "id": "012180",
    "branch": "Mechanics",
    "board": "OCR B (MEI)",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Variable Acceleration",
    "subtopic": [
        "Velocity-time graphs",
        "Reversing direction",
        "Distance vs displacement"
    ],
    "img": "images/Mechanics_pngs/012180.png",
    "question": "The diagram shows the velocity-time graph of a remote-controlled drone moving along a straight track for $0 \\le t \\le 10$. The drone begins with velocity $6\\text{ m s}^{-1}$ at $t = 0$, decelerates uniformly to come momentarily to rest at $t = 4\\text{ s}$, continues to accelerate in the opposite direction until $t = 7\\text{ s}$ when its velocity is $-4\\text{ m s}^{-1}$, and then maintains this constant velocity until $t = 10\\text{ s}$.<br><br><strong>(a)</strong> Find the acceleration of the drone during the first $4$ seconds.<br><br><strong>(b)</strong> Find the displacement of the drone from its starting point at $t = 10\\text{ s}$.<br><br><strong>(c)</strong> Find the total distance travelled by the drone during the entire $10$-second journey.",
    "steps": [
        "<strong>(a) Acceleration during the first $4$ seconds:</strong><br><br>Using the gradient of the velocity-time graph:\\begin{aligned} a &= \\dfrac{v(4) - v(0)}{4 - 0} \\cr &= \\dfrac{0 - 6}{4} \\cr &= -1.5\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Displacement at $t = 10\\text{ s}$:</strong><br><br>Displacement equals the signed net area under the $v$-$t$ graph:<br>• Region above $t$-axis ($0 \\le t \\le 4$):\\begin{aligned} A_1 &= \\dfrac{1}{2} \\times 4 \\times 6 \\cr &= +12\\text{ m} \\end{aligned}<br>• Triangle below $t$-axis ($4 < t \\le 7$):\\begin{aligned} A_2 &= \\dfrac{1}{2} \\times (7 - 4) \\times (-4) \\cr &= -6\\text{ m} \\end{aligned}<br>• Rectangle below $t$-axis ($7 < t \\le 10$):\\begin{aligned} A_3 &= (10 - 7) \\times (-4) \\cr &= -12\\text{ m} \\end{aligned}<br>Net displacement:\\begin{aligned} s &= A_1 + A_2 + A_3 \\cr &= 12 - 6 - 12 \\cr &= -6\\text{ m} \\end{aligned}",
        "<strong>(c) Total distance travelled:</strong><br><br>Distance is the sum of the absolute magnitudes of the areas:\\begin{aligned} d &= |A_1| + |A_2| + |A_3| \\cr &= |12| + |-6| + |-12| \\cr &= 12 + 6 + 12 \\cr &= 30\\text{ m} \\end{aligned}",
        "Final Answer: (a) $-1.5\\text{ m s}^{-2}$, (b) $-6\\text{ m}$, (c) $30\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $-1.5\\text{ m s}^{-2}$, (b) $6\\text{ m}$, (c) $30\\text{ m}$",
            "feedback": "Check the sign of the displacement. The area below the time axis ($18\\text{ m}$) is greater than the area above ($12\\text{ m}$), so the final displacement is $12 - 18 = -6\\text{ m}$."
        },
        {
            "ans": "(a) $1.5\\text{ m s}^{-2}$, (b) $-6\\text{ m}$, (c) $30\\text{ m}$",
            "feedback": "Acceleration is the gradient of the velocity-time graph. Because the velocity decreases from $+6\\text{ m s}^{-1}$ to $0$, the gradient is negative: $(0 - 6)/4 = -1.5\\text{ m s}^{-2}$."
        },
        {
            "ans": "(a) $-1.5\\text{ m s}^{-2}$, (b) $-6\\text{ m}$, (c) $6\\text{ m}$",
            "feedback": "Do not confuse total distance with displacement. Distance is a scalar quantity equal to the total path length travelled ($|12| + |-18| = 30\\text{ m}$)."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Distance vs Displacement on v-t Graphs",
        "content": "Always remember: displacement is a vector quantity represented by the signed area (areas below the $t$-axis count as negative), whereas total distance travelled is a scalar quantity represented by the total absolute area (all regions treated as positive)."
    }
}

];