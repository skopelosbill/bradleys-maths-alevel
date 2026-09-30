window.ALEVEL_QUESTIONS = [
{
    "id": "012251",
    "group_id": "012251",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Statics",
    "topic": "Moments",
    "subtopic": [
        "Rigid Body Equilibrium",
        "Parallel Vertical Supports",
        "Modelling Assumptions"
    ],
    "img": "images/Mechanics_pngs/012251.png",
    "question": "The diagram shows a uniform rod $AB$ of mass $20\\text{ kg}$ and length $8\\text{ m}$ held horizontally in equilibrium by two light, inextensible vertical strings attached at points $C$ and $D$ on the rod.<br><br>Point $C$ is at a distance of $2\\text{ m}$ from $A$, and point $D$ is at a distance of $1\\text{ m}$ from $B$, so that the distance $CD = 5\\text{ m}$.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> On a sketch of the diagram, show all the external forces acting on the rod.<br><br><strong>(b)</strong> Calculate the tension in the string at $C$ and the tension in the string at $D$.<br><br><strong>(c)</strong> State how you have used the assumption that the rod is uniform in your mathematical model.",
    "steps": [
        "<strong>(a) Complete the force diagram:</strong><br><br>The external forces acting on the rod are shown in the completed diagram below:<br><img src='images/Mechanics_pngs/012251_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img><br>• Tension $T_C$ vertically upwards at point $C$<br>• Tension $T_D$ vertically upwards at point $D$<br>• Weight $20g = 196\\text{ N}$ vertically downwards at the midpoint $M$ ($4\\text{ m}$ from $A$)",
        "<strong>(b) Calculate tensions by moments and vertical resolution:</strong><br><br>The midpoint $M$ is $4\\text{ m}$ from $A$, so its distance from $C$ is $4 - 2 = 2\\text{ m}$.<br><br>Taking moments about $C$ eliminates $T_C$:\\begin{aligned} &\\Sigma M_C = 0 \\cr &(20g)(2) - T_D(5) = 0 \\cr &5T_D = 40g \\cr &T_D = 8g \\cr &T_D = 8(9.8) \\cr &T_D = 78.4\\text{ N} \\end{aligned}Resolving forces vertically for equilibrium:\\begin{aligned} &T_C + T_D = 20g \\cr &T_C + 78.4 = 20(9.8) \\cr &T_C + 78.4 = 196 \\cr &T_C = 196 - 78.4 \\cr &T_C = 117.6\\text{ N} \\cr &\\approx 118\\text{ N} \\end{aligned}",
        "<strong>(c) State use of the uniformity assumption:</strong><br><br>Assuming the rod is uniform means its mass is distributed symmetrically along its length, so its centre of mass is located at its geometric midpoint, exactly $4\\text{ m}$ from end $A$. The entire weight of $20g$ therefore acts through this single point.",
        "Final Answer: (a) Diagram complete, (b) $T_C = 118\\text{ N}$, $T_D = 78.4\\text{ N}$, (c) Weight acts at midpoint"
    ],
    "pi_options": [
        {
            "ans": "(a) Diagram complete, (b) $T_C = 78.4\\text{ N}$, $T_D = 118\\text{ N}$, (c) Weight acts at midpoint",
            "feedback": "You swapped the tensions: point $C$ ($2\\text{ m}$ from $M$) is closer to the centre of mass than point $D$ ($3\\text{ m}$ from $M$), so the string at $C$ must support a greater load than the string at $D$."
        },
        {
            "ans": "(a) Diagram complete, (b) $T_C = 98.0\\text{ N}$, $T_D = 98.0\\text{ N}$, (c) Weight acts at midpoint",
            "feedback": "In part (b), you assumed the load is shared equally between the two strings ($196/2 = 98\\text{ N}$), ignoring the fact that the strings are not symmetrically placed about the centre of mass."
        },
        {
            "ans": "(a) Diagram complete, (b) $T_C = 118\\text{ N}$, $T_D = 78.4\\text{ N}$, (c) Rod has zero thickness",
            "feedback": "In part (c), assuming zero thickness defines the object as a *rod* (one-dimensional model), whereas *uniform* specifically dictates that the centre of mass lies at the midpoint."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Choosing the Ideal Pivot Point",
        "content": "When solving parallel support problems, always take moments about the point of attachment of one of the unknown forces ($C$ or $D$). This eliminates that force immediately, leaving a single linear equation for the second tension. Once one tension is found, vertical resolution $\\Sigma F_y = 0$ delivers the other in a single subtraction."
    }
},
{
    "id": "012252",
    "group_id": "012251",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Statics",
    "topic": "Moments",
    "subtopic": [
        "Rigid Body Equilibrium",
        "Concentrated Loads",
        "Tilting Conditions"
    ],
    "img": "images/Mechanics_pngs/012252.png",
    "question": "The diagram shows a uniform plank $AB$ of mass $18\\text{ kg}$ and length $6\\text{ m}$ held horizontally in equilibrium by two light vertical cables attached at $A$ and at a point $D$ on the plank, where $BD = 1.5\\text{ m}$.<br><br>A heavy load of mass $60\\text{ kg}$ is placed on the plank at a point $M$ situated at a distance of $x\\text{ metres}$ from end $A$.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Find expressions in terms of $x$ and $g$ for the tension $T_A$ in the cable at $A$ and the tension $T_D$ in the cable at $D$.<br><br><strong>(b)</strong> Given that the tension in the cable at $D$ is three times the tension in the cable at $A$, calculate the value of $x$.<br><br><strong>(c)</strong> The load is now removed. Find the maximum mass of an object that could be placed at end $B$ without causing the plank to tilt about $D$.",
    "steps": [
        "<strong>(a) Express tensions in terms of x and g:</strong><br><br>Distance $AD = 6 - 1.5 = 4.5\\text{ m}$. The weight of the uniform plank ($18g$) acts at its midpoint ($3\\text{ m}$ from $A$).<br><br>Taking moments about $A$:\\begin{aligned} &\\Sigma M_A = 0 \\cr &(18g)(3) + (60g)(x) - T_D(4.5) = 0 \\cr &4.5T_D = 54g + 60gx \\cr &T_D = \\dfrac{54g + 60gx}{4.5} \\cr &T_D = 12g + \\dfrac{40}{3}gx \\end{aligned}Resolving vertically ($T_A + T_D = 18g + 60g = 78g$):\\begin{aligned} T_A &= 78g - T_D \\cr &= 78g - \\left(12g + \\dfrac{40}{3}gx\\right) \\cr &= 66g - \\dfrac{40}{3}gx \\end{aligned}",
        "<strong>(b) Find x when T_D = 3T_A:</strong><br><br>Substitute the expressions into $T_D = 3T_A$ (dividing through by $g$):\\begin{aligned} &12 + \\dfrac{40}{3}x = 3\\left(66 - \\dfrac{40}{3}x\\right) \\cr &12 + \\dfrac{40}{3}x = 198 - 40x \\cr &\\dfrac{160}{3}x = 186 \\cr &160x = 558 \\cr &x = \\dfrac{558}{160} = 3.4875\\text{ m} \\cr &\\approx 3.49\\text{ m} \\end{aligned}",
        "<strong>(c) Tilting about D:</strong><br><br>When the plank is on the point of tilting about $D$, cable $A$ goes slack ($T_A = 0$).<br><br>Let $M$ be the mass at end $B$. The distance from $D$ to the midpoint is $4.5 - 3 = 1.5\\text{ m}$, and $DB = 1.5\\text{ m}$.<br><br>Taking moments about $D$:\\begin{aligned} &\\Sigma M_D = 0 \\cr &(18g)(1.5) = (Mg)(1.5) \\cr &18 = M \\cr &M = 18\\text{ kg} \\end{aligned}",
        "Final Answer: (a) $T_A = 66g - \\dfrac{40}{3}gx$, $T_D = 12g + \\dfrac{40}{3}gx$, (b) $3.49\\text{ m}$, (c) $18\\text{ kg}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $T_A = 66g - \\dfrac{40}{3}gx$, $T_D = 12g + \\dfrac{40}{3}gx$, (b) $2.85\\text{ m}$, (c) $18\\text{ kg}$",
            "feedback": "In part (b), an algebraic slip occurred: you set $T_A = 3T_D$ instead of $T_D = 3T_A$, placing the load closer to $A$ than $D$."
        },
        {
            "ans": "(a) $T_A = 66g - \\dfrac{40}{3}gx$, $T_D = 12g + \\dfrac{40}{3}gx$, (b) $3.49\\text{ m}$, (c) $54\\text{ kg}$",
            "feedback": "In part (c), you took moments about $A$ rather than the pivot point $D$, failing to set $T_A = 0$."
        },
        {
            "ans": "(a) $T_A = 18g - 10gx$, $T_D = 60g + 10gx$, (b) $3.49\\text{ m}$, (c) $18\\text{ kg}$",
            "feedback": "In part (a), you divided by the total length $6\\text{ m}$ rather than the distance between cables $AD = 4.5\\text{ m}$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: The Mechanical Signature of Tilting",
        "content": "Whenever a rigid body supported by multiple supports or cables is on the point of *tilting*, the contact force or tension at the opposite support drops to precisely zero ($T_A = 0$). The support about which tilting occurs becomes the natural pivot. Always take moments about this pivot point, as it eliminates the unknown support reaction."
    }
},
{
    "id": "012253",
    "group_id": "012251",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Statics",
    "topic": "Moments",
    "subtopic": [
        "Knife-Edge Supports",
        "Tilting about a Pivot",
        "Reaction Forces"
    ],
    "img": "images/Mechanics_pngs/012253.png",
    "question": "The diagram shows a uniform beam $AB$ of mass $40\\text{ kg}$ and length $6\\text{ m}$ resting horizontally on two smooth knife-edge supports at $C$ and $D$.<br><br>Support $C$ is situated $1\\text{ m}$ from end $A$, and support $D$ is situated $4.5\\text{ m}$ from end $A$, leaving an overhang of $1.5\\text{ m}$ between $D$ and end $B$.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Calculate the normal reaction exerted by support $C$ and by support $D$ on the beam when no additional load is present.<br><br><strong>(b)</strong> A load of mass $W\\text{ kg}$ is attached to end $B$. Find the maximum value of $W$ for which the beam remains in horizontal equilibrium resting on both supports.<br><br><strong>(c)</strong> State the value of the normal reaction at support $C$ when the beam is on the point of tilting.",
    "steps": [
        "<strong>(a) Calculate reactions R_C and R_D:</strong><br><br>Distance $CD = 4.5 - 1.0 = 3.5\\text{ m}$. The weight of the beam ($40g$) acts at the midpoint ($3\\text{ m}$ from $A$), which is $3 - 1 = 2\\text{ m}$ from $C$.<br><br>Taking moments about $C$:\\begin{aligned} &\\Sigma M_C = 0 \\cr &(40g)(2) - R_D(3.5) = 0 \\cr &3.5R_D = 80g \\cr &R_D = \\dfrac{80g}{3.5} = \\dfrac{160}{7}g \\cr &R_D = \\dfrac{160(9.8)}{7} \\cr &R_D = 224\\text{ N} \\end{aligned}Resolving vertically:\\begin{aligned} R_C &= 40g - R_D \\cr &= 40(9.8) - 224 \\cr &= 392 - 224 \\cr &= 168\\text{ N} \\end{aligned}",
        "<strong>(b) Find maximum load W before tilting:</strong><br><br>As load $W$ increases at $B$, the beam tends to tilt clockwise about support $D$. At the point of tilting, the beam loses contact with $C$, so $R_C = 0$.<br><br>The midpoint is $4.5 - 3 = 1.5\\text{ m}$ to the left of $D$, and end $B$ is $1.5\\text{ m}$ to the right of $D$.<br><br>Taking moments about $D$:\\begin{aligned} &\\Sigma M_D = 0 \\cr &(40g)(1.5) = (Wg)(1.5) \\cr &40 = W \\cr &W = 40\\text{ kg} \\end{aligned}",
        "<strong>(c) Reaction at C during tilting:</strong><br><br>At the point of tilting about $D$, contact is broken at $C$, so $R_C = 0\\text{ N}$.",
        "Final Answer: (a) $R_C = 168\\text{ N}$, $R_D = 224\\text{ N}$, (b) $40\\text{ kg}$, (c) $0\\text{ N}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $R_C = 224\\text{ N}$, $R_D = 168\\text{ N}$, (b) $40\\text{ kg}$, (c) $0\\text{ N}$",
            "feedback": "In part (a), you swapped the reactions: support $D$ is $1.5\\text{ m}$ from the centre of mass, whereas $C$ is $2.0\\text{ m}$ from the centre of mass, so $D$ must take the larger portion of the load."
        },
        {
            "ans": "(a) $R_C = 168\\text{ N}$, $R_D = 224\\text{ N}$, (b) $26.7\\text{ kg}$, (c) $0\\text{ N}$",
            "feedback": "In part (b), you used the distance from $A$ to $D$ ($4.5\\text{ m}$) instead of the distance from the pivot $D$ to the centre of mass ($1.5\\text{ m}$)."
        },
        {
            "ans": "(a) $R_C = 168\\text{ N}$, $R_D = 224\\text{ N}$, (b) $40\\text{ kg}$, (c) $168\\text{ N}$",
            "feedback": "In part (c), on the verge of tilting, the beam is no longer pressing against support $C$, so the reaction force at $C$ is zero, not its initial value."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Symmetry of Moments at Tilting",
        "content": "Notice how simple part (b) becomes when taking moments about $D$. The beam's weight acts $1.5\\text{ m}$ to the left of $D$, and the added load acts $1.5\\text{ m}$ to the right of $D$. Because their perpendicular distances to the pivot are identical, the moments balance when the masses are equal: $W = 40\\text{ kg}$."
    }
},
{
    "id": "012254",
    "group_id": "012251",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Statics",
    "topic": "Moments",
    "subtopic": [
        "Smooth Hinges",
        "Non-Parallel Forces",
        "Trigonometric Resolution"
    ],
    "img": "images/Mechanics_pngs/012254.png",
    "question": "The diagram shows a uniform rod $AB$ of mass $8\\text{ kg}$ and length $4\\text{ m}$ smoothly hinged at end $A$ to a vertical wall.<br><br>The rod is held in a horizontal position in equilibrium by a light wire attached to a point $C$ on the rod and to a point $D$ on the vertical wall directly above $A$. Point $C$ is at a distance of $3\\text{ m}$ from $A$, and point $D$ is at a vertical distance of $3\\text{ m}$ above $A$.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Show that the angle between the wire $CD$ and the horizontal rod is $45^\\circ$.<br><br><strong>(b)</strong> By taking moments about $A$, calculate the tension in the wire $CD$, giving your answer in newtons to 3 significant figures.<br><br><strong>(c)</strong> Calculate the magnitude and direction of the reaction force exerted by the hinge on the rod at $A$.",
    "steps": [
        "<strong>(a) Determine angle of inclination:</strong><br><br>In right-angled triangle $\\triangle DAC$, the horizontal side is $AC = 3\\text{ m}$ and the vertical side is $AD = 3\\text{ m}$:\\begin{aligned} \\tan\\alpha &= \\dfrac{AD}{AC} \\cr &= \\dfrac{3}{3} \\cr &= 1 \\cr \\alpha &= 45^\\circ \\end{aligned}",
        "<strong>(b) Calculate tension by taking moments about A:</strong><br><br>The weight of the uniform rod ($8g$) acts at its midpoint ($2\\text{ m}$ from $A$).<br><br>The perpendicular component of tension acting on the rod at $C$ is $T\\sin 45^\\circ$.\\begin{aligned} &\\Sigma M_A = 0 \\cr &(8g)(2) - (T\\sin 45^\\circ)(3) = 0 \\cr &16g = 3T\\left(\\dfrac{\\sqrt{2}}{2}\\right) \\cr &16(9.8) = \\dfrac{3\\sqrt{2}}{2}T \\cr &156.8 = \\dfrac{3\\sqrt{2}}{2}T \\cr &T = \\dfrac{313.6}{3\\sqrt{2}} \\cr &T \\approx 73.9\\text{ N} \\end{aligned}",
        "<strong>(c) Calculate hinge reaction components and magnitude:</strong><br><br>Let the hinge reaction have horizontal component $H_A$ and vertical component $V_A$.<br><br>Horizontal equilibrium ($H_A$ balances the horizontal pull of the wire):\\begin{aligned} H_A &= T\\cos 45^\\circ \\cr &= \\left(\\dfrac{313.6}{3\\sqrt{2}}\\right)\\left(\\dfrac{\\sqrt{2}}{2}\\right) \\cr &= \\dfrac{313.6}{6} = \\dfrac{16g}{3} \\cr &\\approx 52.27\\text{ N} \\end{aligned}Vertical equilibrium ($V_A + T\\sin 45^\\circ = 8g$):\\begin{aligned} V_A &= 8g - T\\sin 45^\\circ \\cr &= 8(9.8) - 52.27 \\cr &= 78.4 - 52.27 \\cr &\\approx 26.13\\text{ N} \\end{aligned}Magnitude of hinge reaction:\\begin{aligned} |R_A| &= \\sqrt{H_A^2 + V_A^2} \\cr &= \\sqrt{52.27^2 + 26.13^2} \\cr &= \\sqrt{2732.15 + 682.78} \\cr &= \\sqrt{3414.93} \\cr &\\approx 58.4\\text{ N} \\end{aligned}Direction above the horizontal:\\begin{aligned} \\theta &= \\arctan\\left(\\dfrac{V_A}{H_A}\\right) \\cr &= \\arctan\\left(\\dfrac{26.13}{52.27}\\right) \\cr &= \\arctan(0.5) \\cr &\\approx 26.6^\\circ \\end{aligned}",
        "Final Answer: (a) Proof complete, (b) $73.9\\text{ N}$, (c) $58.4\\text{ N}$ at $26.6^\\circ$ above horizontal"
    ],
    "pi_options": [
        {
            "ans": "(a) Proof complete, (b) $52.3\\text{ N}$, (c) $58.4\\text{ N}$ at $26.6^\\circ$ above horizontal",
            "feedback": "In part (b), you forgot to divide by $\\sin 45^\\circ$, computing $T = 16g/3$, which is only the vertical component of the tension."
        },
        {
            "ans": "(a) Proof complete, (b) $73.9\\text{ N}$, (c) $52.3\\text{ N}$ horizontally",
            "feedback": "In part (c), you reported only the horizontal component of the hinge reaction, neglecting the vertical upward support $V_A = 26.13\\text{ N}$ provided by the hinge."
        },
        {
            "ans": "(a) Proof complete, (b) $73.9\\text{ N}$, (c) $78.4\\text{ N}$ at $45.0^\\circ$ above horizontal",
            "feedback": "In part (c), you assumed the hinge reaction acts parallel to the wire, which is incorrect because the three forces acting on the rod must concur at a single point."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Direction of Hinge Reactions",
        "content": "Never assume the reaction force at a hinge acts parallel to an attached wire or perpendicular to the wall. A hinge can exert a force in any direction within the vertical plane. Always represent the hinge reaction as two independent orthogonal components ($H_A$ and $V_A$), solve for them using $\\Sigma F_x = 0$ and $\\Sigma F_y = 0$, and find the resultant magnitude and direction using Pythagoras and $\\arctan$."
    }
},
{
    "id": "012255",
    "group_id": "012251",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Statics",
    "topic": "Moments",
    "subtopic": [
        "Ladders",
        "Limiting Friction",
        "Angle of Friction"
    ],
    "img": "images/Mechanics_pngs/012255.png",
    "question": "The diagram shows a uniform ladder $AB$ of mass $20\\text{ kg}$ and length $5\\text{ m}$ resting in equilibrium with its upper end $B$ against a smooth vertical wall and its lower end $A$ on rough horizontal ground.<br><br>The ladder rests in a vertical plane perpendicular to the wall and is inclined at an angle $\\theta$ to the horizontal ground.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Find the normal reaction exerted by the ground on the ladder at $A$.<br><br><strong>(b)</strong> Given that the ladder is on the point of slipping when $\\theta = 60^\\circ$, calculate:<br>(i) the magnitude of the normal reaction exerted by the wall on the ladder at $B$,<br>(ii) the coefficient of friction $\\mu$ between the ladder and the ground, giving your answer to 3 significant figures.",
    "steps": [
        "<strong>(a) Resolve vertically to find normal reaction R_A:</strong><br><br>Because the vertical wall is smooth, there is no vertical friction force at $B$. The only vertical forces are the upward normal reaction $R_A$ and the downward weight $20g$:\\begin{aligned} R_A &= 20g \\cr &= 20(9.8) \\cr &= 196\\text{ N} \\end{aligned}",
        "<strong>(b)(i) Calculate wall reaction R_B by taking moments:</strong><br><br>The weight of the uniform ladder ($20g$) acts at the midpoint ($2.5\\text{ m}$ from $A$).<br><br>Taking moments about $A$ at the base:\\begin{aligned} &\\Sigma M_A = 0 \\cr &(20g)(2.5\\cos 60^\\circ) \\cr &\\qquad - R_B(5\\sin 60^\\circ) = 0 \\cr &20g(2.5)(0.5) - R_B(5)\\left(\\dfrac{\\sqrt{3}}{2}\\right) = 0 \\cr &25g = \\dfrac{5\\sqrt{3}}{2}R_B \\cr &R_B = \\dfrac{10g}{\\sqrt{3}} \\cr &R_B = \\dfrac{10(9.8)}{\\sqrt{3}} \\cr &R_B \\approx 56.6\\text{ N} \\end{aligned}",
        "<strong>(b)(ii) Calculate coefficient of friction μ:</strong><br><br>For horizontal equilibrium, the frictional force $F_A$ at the ground balances $R_B$:\\begin{aligned} F_A &= R_B \\cr &= \\dfrac{10g}{\\sqrt{3}} \\cr &\\approx 56.58\\text{ N} \\end{aligned}Since the ladder is in limiting equilibrium (on the verge of slipping), friction is maximal ($F_A = \\mu R_A$):\\begin{aligned} \\mu &= \\dfrac{F_A}{R_A} \\cr &= \\dfrac{10g/\\sqrt{3}}{20g} \\cr &= \\dfrac{1}{2\\sqrt{3}} \\cr &= \\dfrac{\\sqrt{3}}{6} \\cr &\\approx 0.289 \\end{aligned}",
        "Final Answer: (a) $196\\text{ N}$, (b)(i) $56.6\\text{ N}$, (ii) $0.289$"
    ],
    "pi_options": [
        {
            "ans": "(a) $196\\text{ N}$, (b)(i) $98.0\\text{ N}$, (ii) $0.500$",
            "feedback": "In part (b)(i), you swapped sine and cosine when calculating perpendicular distances, using $\\sin 60^\\circ$ for the weight and $\\cos 60^\\circ$ for the wall reaction."
        },
        {
            "ans": "(a) $196\\text{ N}$, (b)(i) $56.6\\text{ N}$, (ii) $0.577$",
            "feedback": "In part (b)(ii), you forgot the factor of $\\frac{1}{2}$ from the centre of mass position, evaluating $\\mu = 1/\\sqrt{3} = \\tan 30^\\circ \\approx 0.577$ instead of $\\frac{1}{2}\\tan 30^\\circ$."
        },
        {
            "ans": "(a) $98.0\\text{ N}$, (b)(i) $56.6\\text{ N}$, (ii) $0.578$",
            "feedback": "In part (a), you calculated $R_A = 20g\\cos 60^\\circ$, resolving along the ladder rather than resolving vertically."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: The Standard Ladder Limiting Friction Identity",
        "content": "For any uniform ladder resting against a smooth vertical wall on the verge of slipping, taking moments about the base and resolving horizontally and vertically always yields the classic relation: $\\mu = \\frac{1}{2\\tan\\theta} = \\frac{1}{2}\\cot\\theta$. Here, $\\mu = \\frac{1}{2\\tan 60^\\circ} = \\frac{1}{2\\sqrt{3}} \\approx 0.289$. Memorising this identity lets you verify your calculated coefficient in seconds."
    }
},
{
    "id": "012256",
    "group_id": "012256",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Dynamics",
    "topic": "Momentum and Impulse",
    "subtopic": [
        "Conservation of Momentum",
        "Direct Collision",
        "Impulse"
    ],
    "img": false,
    "question": "Two particles, $A$ and $B$, are travelling in the same direction along the same straight horizontal line on a smooth surface.<br><br>Particle $A$ has mass $4\\text{ kg}$ and is moving with a speed of $6\\text{ m s}^{-1}$.<br>Particle $B$ has mass $2\\text{ kg}$ and is moving with a speed of $3\\text{ m s}^{-1}$.<br><br>Particle $A$ collides directly with particle $B$.<br><br><strong>(a)</strong> Given that the two particles coalesce upon impact to form a single combined body $C$, find the speed of $C$ immediately after the collision.<br><br><strong>(b)</strong> Find the magnitude and direction of the impulse exerted on $A$ by $B$ during the collision.",
    "steps": [
        "<strong>(a) Calculate common speed after coalescing:</strong><br><br>By the principle of conservation of linear momentum:\\begin{aligned} &m_A u_A + m_B u_B = (m_A + m_B)v \\cr &(4)(6) + (2)(3) = (4 + 2)v \\cr &24 + 6 = 6v \\cr &30 = 6v \\cr &v = 5\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(b) Calculate impulse exerted on A by B:</strong><br><br>The impulse exerted on $A$ is given by the change in momentum of $A$:\\begin{aligned} I_A &= m_A(v - u_A) \\cr &= 4(5 - 6) \\cr &= 4(-1) \\cr &= -4\\text{ N s} \\end{aligned}The negative sign indicates that the impulse acts in the direction opposing $A$'s initial motion.<br><br>Magnitude: $4\\text{ N s}$.<br>Direction: Opposite to the direction of motion.",
        "Final Answer: (a) $5\\text{ m s}^{-1}$, (b) $4\\text{ N s}$ opposite to motion"
    ],
    "pi_options": [
        {
            "ans": "(a) $5\\text{ m s}^{-1}$, (b) $4\\text{ N s}$ in direction of motion",
            "feedback": "In part (b), you identified the correct magnitude but reversed the direction: body $B$ slows body $A$ down from $6\\text{ m s}^{-1}$ to $5\\text{ m s}^{-1}$, so the impulse on $A$ must oppose its forward motion."
        },
        {
            "ans": "(a) $4.5\\text{ m s}^{-1}$, (b) $6\\text{ N s}$ opposite to motion",
            "feedback": "In part (a), you calculated the average velocity $(6 + 3)/2 = 4.5\\text{ m s}^{-1}$ rather than applying conservation of linear momentum."
        },
        {
            "ans": "(a) $5\\text{ m s}^{-1}$, (b) $20\\text{ N s}$ opposite to motion",
            "feedback": "In part (b), you evaluated the final momentum $m_A v = 4 \\times 5 = 20\\text{ N s}$ instead of the change in momentum $m_A(v - u_A)$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Newton's Third Law in Impulse",
        "content": "To verify the impulse on $A$, calculate the impulse on $B$: \\begin{aligned}I_B &= m_B(v - u_B)\\cr & = 2(5 - 3) \\cr &= +4\\text{ N s}\\end{aligned} By Newton's Third Law, the impulse exerted on $A$ by $B$ must be equal in magnitude and opposite in direction: $I_A = -I_B = -4\\text{ N s}$. This quick check eliminates sign errors."
    }
},
{
    "id": "012257",
    "group_id": "012256",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Dynamics",
    "topic": "Momentum and Impulse",
    "subtopic": [
        "Opposing Collisions",
        "Coalescence",
        "Loss of Kinetic Energy"
    ],
    "img": false,
    "question": "Two railway trucks, $P$ and $Q$, move towards each other along the same straight horizontal track.<br><br>Truck $P$ has a mass of $1200\\text{ kg}$ and is moving at a speed of $4\\text{ m s}^{-1}$.<br>Truck $Q$ has a mass of $800\\text{ kg}$ and is moving at a speed of $3\\text{ m s}^{-1}$.<br><br>The trucks collide directly, and their automatic couplers engage so that they move together as a single unit after the impact.<br><br><strong>(a)</strong> Determine the speed and direction of motion of the coupled trucks immediately after the collision.<br><br><strong>(b)</strong> Calculate the magnitude of the impulse exerted by truck $P$ on truck $Q$ during the impact.<br><br><strong>(c)</strong> Calculate the loss in kinetic energy of the system caused by the collision.",
    "steps": [
        "<strong>(a) Find velocity of the coupled trucks:</strong><br><br>Taking the initial direction of truck $P$ as positive, $u_P = +4\\text{ m s}^{-1}$ and $u_Q = -3\\text{ m s}^{-1}$.<br><br>Applying conservation of linear momentum:\\begin{aligned} &m_P u_P + m_Q u_Q = (m_P + m_Q)v \\cr &1200(4) + 800(-3)\\cr & \\qquad \\quad = (1200 + 800)v \\cr &4800 - 2400 = 2000v \\cr &2400 = 2000v \\cr &v = 1.2\\text{ m s}^{-1} \\end{aligned}Because $v > 0$, the coupled trucks move in the original direction of truck $P$ with speed $1.2\\text{ m s}^{-1}$.",
        "<strong>(b) Calculate magnitude of impulse on truck Q:</strong><br><br>Impulse on $Q$ is its change in momentum:\\begin{aligned} I_Q &= m_Q(v - u_Q) \\cr &= 800(1.2 - (-3)) \\cr &= 800(4.2) \\cr &= 3360\\text{ N s} \\end{aligned}",
        "<strong>(c) Calculate loss in kinetic energy:</strong><br><br>Initial kinetic energy:\\begin{aligned} E_{k1} &= \\dfrac{1}{2}m_P u_P^2 + \\dfrac{1}{2}m_Q u_Q^2 \\cr &= \\dfrac{1}{2}(1200)(4^2) + \\dfrac{1}{2}(800)(3^2) \\cr &= 600(16) + 400(9) \\cr &= 9600 + 3600 \\cr &= 13200\\text{ J} \\end{aligned}Final kinetic energy:\\begin{aligned} E_{k2} &= \\dfrac{1}{2}(m_P + m_Q)v^2 \\cr &= \\dfrac{1}{2}(2000)(1.2^2) \\cr &= 1000(1.44) \\cr &= 1440\\text{ J} \\end{aligned}Loss in kinetic energy:\\begin{aligned} \\Delta E_k &= 13200 - 1440 \\cr &= 11760\\text{ J} \\end{aligned}",
        "Final Answer: (a) $1.2\\text{ m s}^{-1}$ in direction of P, (b) $3360\\text{ N s}$, (c) $11760\\text{ J}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $3.6\\text{ m s}^{-1}$ in direction of P, (b) $3360\\text{ N s}$, (c) $11760\\text{ J}$",
            "feedback": "In part (a), you treated both initial velocities as positive ($4800 + 2400 = 7200$), ignoring that the trucks move in opposite directions."
        },
        {
            "ans": "(a) $1.2\\text{ m s}^{-1}$ in direction of P, (b) $1440\\text{ N s}$, (c) $11760\\text{ J}$",
            "feedback": "In part (b), you evaluated $800(1.2 - 3)$ instead of $800(1.2 - (-3))$, failing to account for the sign change in $Q$'s reversed velocity."
        },
        {
            "ans": "(a) $1.2\\text{ m s}^{-1}$ in direction of P, (b) $3360\\text{ N s}$, (c) $4560\\text{ J}$",
            "feedback": "In part (c), you subtracted $u_Q^2$ in the initial kinetic energy calculation, forgetting that kinetic energy is a scalar quantity ($E_k \\ge 0$)."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Signs in Head-On Collisions",
        "content": "In head-on collisions, establish a positive reference direction immediately. Because velocity is a vector, $u_Q = -3\\text{ m s}^{-1}$. When calculating impulse, subtracting a negative velocity results in addition: \\begin{aligned}v - u_Q &= 1.2 - (-3)\\cr & = 4.2\\text{ m s}^{-1}\\end{aligned} Conversely, kinetic energy $\\frac{1}{2}mv^2$ is a positive scalar—never assign negative kinetic energy to an opposing body."
    }
},
{
    "id": "012258",
    "group_id": "012256",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Dynamics",
    "topic": "Momentum and Impulse",
    "subtopic": [
        "Non-Coalescing Collisions",
        "Impulse Separation",
        "Subsequent Motion"
    ],
    "img": false,
    "question": "Two smooth spheres, $X$ and $Y$, of masses $0.5\\text{ kg}$ and $0.8\\text{ kg}$ respectively, move along the same straight line on a smooth horizontal table.<br><br>Sphere $X$ has an initial velocity of $8\\text{ m s}^{-1}$ and collides directly with sphere $Y$, which is moving in the same direction with an initial velocity of $2\\text{ m s}^{-1}$.<br><br>During the collision, the magnitude of the impulse exerted by sphere $X$ on sphere $Y$ is $2.4\\text{ N s}$.<br><br><strong>(a)</strong> Find the velocity of sphere $Y$ immediately after the collision.<br><br><strong>(b)</strong> Find the velocity of sphere $X$ immediately after the collision.<br><br><strong>(c)</strong> Determine whether sphere $X$ and sphere $Y$ will collide again, giving a clear mathematical reason for your answer.",
    "steps": [
        "<strong>(a) Velocity of sphere Y:</strong><br><br>The impulse exerted by $X$ on $Y$ acts in the positive forward direction ($I = +2.4\\text{ N s}$):\\begin{aligned} &I = m_Y(v_Y - u_Y) \\cr &2.4 = 0.8(v_Y - 2) \\cr &v_Y - 2 = \\dfrac{2.4}{0.8} \\cr &v_Y - 2 = 3 \\cr &v_Y = 5\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(b) Velocity of sphere X:</strong><br><br>By Newton's Third Law, the impulse exerted on $X$ by $Y$ is equal and opposite ($I = -2.4\\text{ N s}$):\\begin{aligned} &-2.4 = m_X(v_X - u_X) \\cr &-2.4 = 0.5(v_X - 8) \\cr &v_X - 8 = -\\dfrac{2.4}{0.5} \\cr &v_X - 8 = -4.8 \\cr &v_X = 3.2\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(c) Check for subsequent collision:</strong><br><br>Immediately after the collision, both spheres continue moving in the positive direction along the same line.<br><br>Because sphere $Y$ is ahead of sphere $X$ and its speed is greater ($v_Y = 5\\text{ m s}^{-1} > v_X = 3.2\\text{ m s}^{-1}$), the distance between them increases continuously. Therefore, they will not collide again.",
        "Final Answer: (a) $5\\text{ m s}^{-1}$, (b) $3.2\\text{ m s}^{-1}$, (c) No ($v_Y > v_X$)"
    ],
    "pi_options": [
        {
            "ans": "(a) $5\\text{ m s}^{-1}$, (b) $12.8\\text{ m s}^{-1}$, (c) Yes ($v_X > v_Y$)",
            "feedback": "In part (b), you added the impulse to sphere $X$ instead of subtracting it ($v_X = 8 + 4.8 = 12.8$), violating Newton's Third Law."
        },
        {
            "ans": "(a) $3\\text{ m s}^{-1}$, (b) $3.2\\text{ m s}^{-1}$, (c) Yes ($v_X > v_Y$)",
            "feedback": "In part (a), you calculated the change in velocity $\\Delta v = 3\\text{ m s}^{-1}$ but forgot to add the initial velocity $u_Y = 2\\text{ m s}^{-1}$."
        },
        {
            "ans": "(a) $5\\text{ m s}^{-1}$, (b) $3.2\\text{ m s}^{-1}$, (c) Yes ($v_Y > v_X$)",
            "feedback": "In part (c), you misidentified the overtaking condition: when the leading sphere travels faster ($v_Y > v_X$), the gap widens, preventing any subsequent collision."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: The Kinematics of Separation",
        "content": "For particles constrained to a line, a second collision occurs only if the trailing body travels faster than the leading body ($v_{\\text{trailing}} > v_{\\text{leading}}$) or rebounds off a fixed boundary. Here, $X$ trails $Y$, and \\begin{aligned}v_X &= 3.2\\text{ m s}^{-1} \\cr < v_Y &= 5.0\\text{ m s}^{-1}\\emd{aligned} meaning the separation speed is $1.8\\text{ m s}^{-1}$ and no further collision can occur."
    }
},
{
    "id": "012259",
    "group_id": "012256",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Dynamics",
    "topic": "Momentum and Impulse",
    "subtopic": [
        "Newton's Law of Restitution",
        "Direct Collision",
        "Percentage Energy Loss"
    ],
    "img": false,
    "question": "A particle $P$ of mass $3\\text{ kg}$ moves across a smooth horizontal floor with a speed of $6\\text{ m s}^{-1}$ towards a stationary particle $Q$ of mass $5\\text{ kg}$.<br><br>The two particles collide directly. The coefficient of restitution between $P$ and $Q$ is $e = 0.6$.<br><br><strong>(a)</strong> Calculate the speed of $P$ and the speed of $Q$ immediately after the collision.<br><br><strong>(b)</strong> Calculate the magnitude of the impulse exerted by $P$ on $Q$.<br><br><strong>(c)</strong> Calculate the percentage of the initial kinetic energy that is lost during the collision.",
    "steps": [
        "<strong>(a) Form equations to find post-collision speeds:</strong><br><br>Let $v_P$ and $v_Q$ be the post-collision velocities in the direction of $P$'s initial motion.<br><br>Conservation of linear momentum:\\begin{aligned} &m_P u_P + m_Q u_Q = m_P v_P + m_Q v_Q \\cr &3(6) + 5(0) = 3v_P + 5v_Q \\cr &3v_P + 5v_Q = 18 \\end{aligned}Newton's Law of Restitution ($v_Q - v_P = e(u_P - u_Q)$):\\begin{aligned} &v_Q - v_P = 0.6(6 - 0) \\cr &v_Q - v_P = 3.6 \\end{aligned}Multiplying by $3$ gives $3v_Q - 3v_P = 10.8$. Adding this to the momentum equation:\\begin{aligned} &8v_Q = 28.8 \\cr &v_Q = 3.6\\text{ m s}^{-1} \\cr &v_P = 3.6 - 3.6 = 0\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(b) Calculate magnitude of impulse on Q:</strong><br><br>The impulse exerted on $Q$ is its change in momentum:\\begin{aligned} I_Q &= m_Q(v_Q - u_Q) \\cr &= 5(3.6 - 0) \\cr &= 18\\text{ N s} \\end{aligned}",
        "<strong>(c) Calculate percentage loss in kinetic energy:</strong><br><br>Initial kinetic energy:\\begin{aligned} E_{k1} &= \\dfrac{1}{2}(3)(6^2) \\cr &= 1.5(36) \\cr &= 54\\text{ J} \\end{aligned}Final kinetic energy ($v_P = 0$):\\begin{aligned} E_{k2} &= \\dfrac{1}{2}(5)(3.6^2) \\cr &= 2.5(12.96) \\cr &= 32.4\\text{ J} \\end{aligned}Percentage loss:\\begin{aligned} \\text{Percentage loss} &= \\dfrac{54 - 32.4}{54} \\times 100 \\cr &= \\dfrac{21.6}{54} \\times 100 \\cr &= 40\\% \\end{aligned}",
        "Final Answer: (a) $v_P = 0\\text{ m s}^{-1}$, $v_Q = 3.6\\text{ m s}^{-1}$, (b) $18\\text{ N s}$, (c) $40\\%$"
    ],
    "pi_options": [
        {
            "ans": "(a) $v_P = 3.6\\text{ m s}^{-1}$, $v_Q = 0\\text{ m s}^{-1}$, (b) $18\\text{ N s}$, (c) $40\\%$",
            "feedback": "In part (a), you swapped the final velocities: the impacting body $P$ is brought to rest, transferring its momentum to the target body $Q$."
        },
        {
            "ans": "(a) $v_P = 0\\text{ m s}^{-1}$, $v_Q = 3.6\\text{ m s}^{-1}$, (b) $18\\text{ N s}$, (c) $60\\%$",
            "feedback": "In part (c), you calculated the percentage of kinetic energy *retained* ($32.4/54 = 60\\%$) rather than the percentage *lost* ($21.6/54 = 40\\%$)."
        },
        {
            "ans": "(a) $v_P = 0.6\\text{ m s}^{-1}$, $v_Q = 4.2\\text{ m s}^{-1}$, (b) $21\\text{ N s}$, (c) $35\\%$",
            "feedback": "In part (a), an algebraic error occurred when setting up Newton's Law of Restitution: you wrote $v_P - v_Q = 3.6$ instead of $v_Q - v_P = 3.6$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Complete Transfer of Momentum",
        "content": "Notice that particle $P$ is brought completely to rest ($v_P = 0$). This occurs whenever $e = \\frac{m_P}{m_Q}$. Here, $\\frac{m_P}{m_Q} = \\frac{3}{5} = 0.6$, exactly matching $e$. Recognizing this relationship allows you to deduce immediately that $v_P = 0$ and $v_Q = e u_P + v_P = 3.6\\text{ m s}^{-1}$."
    }
},
{
    "id": "012260",
    "group_id": "012256",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Dynamics",
    "topic": "Momentum and Impulse",
    "subtopic": [
        "Rebound from Wall",
        "Average Force",
        "Kinetic Energy Loss"
    ],
    "img": false,
    "question": "A tennis ball of mass $0.06\\text{ kg}$ travels horizontally with a speed of $25\\text{ m s}^{-1}$ and strikes a smooth, fixed vertical wall perpendicularly.<br><br>The ball rebounds horizontally along its original line of approach with a speed of $15\\text{ m s}^{-1}$. The duration of the impact between the ball and the wall is $0.008\\text{ seconds}$.<br><br><strong>(a)</strong> Calculate the coefficient of restitution $e$ between the ball and the wall.<br><br><strong>(b)</strong> Calculate the magnitude of the impulse exerted by the wall on the ball during the impact.<br><br><strong>(c)</strong> Calculate the average normal force exerted by the wall on the ball during the collision.<br><br><strong>(d)</strong> Calculate the loss in kinetic energy of the ball during the impact.",
    "steps": [
        "<strong>(a) Calculate coefficient of restitution:</strong><br><br>For impact with a fixed barrier:\\begin{aligned} e &= \\dfrac{\\text{Speed of rebound}}{\\text{Speed of approach}} \\cr &= \\dfrac{15}{25} \\cr &= 0.6 \\end{aligned}",
        "<strong>(b) Calculate magnitude of impulse:</strong><br><br>Taking the direction away from the wall as positive, the initial velocity is $u = -25\\text{ m s}^{-1}$ and the final velocity is $v = +15\\text{ m s}^{-1}$.\\begin{aligned} I &= m(v - u) \\cr &= 0.06(15 - (-25)) \\cr &= 0.06(40) \\cr &= 2.4\\text{ N s} \\end{aligned}",
        "<strong>(c) Calculate average normal force:</strong><br><br>Using the impulse-force relationship $I = F_{\\text{avg}} \\Delta t$:\\begin{aligned} F_{\\text{avg}} &= \\dfrac{I}{\\Delta t} \\cr &= \\dfrac{2.4}{0.008} \\cr &= 300\\text{ N} \\end{aligned}",
        "<strong>(d) Calculate loss in kinetic energy:</strong><br><br>Loss in kinetic energy:\\begin{aligned} \\Delta E_k &= \\dfrac{1}{2}m(u^2 - v^2) \\cr &= \\dfrac{1}{2}(0.06)(25^2 - 15^2) \\cr &= 0.03(625 - 225) \\cr &= 0.03(400) \\cr &= 12\\text{ J} \\end{aligned}",
        "Final Answer: (a) $0.6$, (b) $2.4\\text{ N s}$, (c) $300\\text{ N}$, (d) $12\\text{ J}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $0.6$, (b) $0.6\\text{ N s}$, (c) $75\\text{ N}$, (d) $12\\text{ J}$",
            "feedback": "In part (b), you evaluated $0.06(25 - 15)$ by subtracting speeds rather than velocities, ignoring the sign change on rebound."
        },
        {
            "ans": "(a) $1.67$, (b) $2.4\\text{ N s}$, (c) $300\\text{ N}$, (d) $12\\text{ J}$",
            "feedback": "In part (a), you inverted the restitution ratio, calculating approach speed over separation speed ($25/15$). The coefficient $e$ cannot exceed $1$."
        },
        {
            "ans": "(a) $0.6$, (b) $2.4\\text{ N s}$, (c) $0.0192\\text{ N}$, (d) $12\\text{ J}$",
            "feedback": "In part (c), you multiplied impulse by time ($2.4 \\times 0.008$) instead of dividing impulse by time ($F = I / \\Delta t$)."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Energy Loss via Restitution Formula",
        "content": "For a collision with a fixed barrier, the fractional loss of kinetic energy is always $1 - e^2$. Here, $1 - 0.6^2 = 1 - 0.36 = 0.64$. Since the initial energy is $E_{k1} = \\frac{1}{2}(0.06)(25^2) = 18.75\\text{ J}$, the energy lost is simply $0.64 \\times 18.75 = 12\\text{ J}$."
    }
},
{
    "id": "012261",
    "group_id": "012261",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Variable Acceleration",
    "subtopic": [
        "Calculus in Kinematics",
        "Turning Points",
        "Total Distance"
    ],
    "img": false,
    "question": "The velocity $v\\text{ m s}^{-1}$ of a particle travelling along a straight line at time $t\\text{ seconds}$ ($t \\ge 0$) is given by:$$v = 3t^2 - 12t + 9$$The particle is instantaneously at rest on two different occasions.<br><br><strong>(a)</strong> Find the two times when the particle is instantaneously at rest.<br><br><strong>(b)</strong> Find the acceleration of the particle when $t = 4\\text{ s}$.<br><br><strong>(c)</strong> Find the total distance covered by the particle in the first $5\\text{ seconds}$ of motion.",
    "steps": [
        "<strong>(a) Find the times when the particle is at rest:</strong><br><br>The particle is instantaneously at rest when $v = 0$:\\begin{aligned} &3t^2 - 12t + 9 = 0 \\cr &3(t^2 - 4t + 3) = 0 \\cr &3(t - 1)(t - 3) = 0 \\cr &t = 1\\text{ s},\\ t = 3\\text{ s} \\end{aligned}",
        "<strong>(b) Find the acceleration when t = 4 s:</strong><br><br>Acceleration is the time derivative of velocity:\\begin{aligned} a(t) &= \\dfrac{\\text{d}v}{\\text{d}t} \\cr &= 6t - 12 \\end{aligned}Evaluating at $t = 4\\text{ s}$:\\begin{aligned} a(4) &= 6(4) - 12 \\cr &= 24 - 12 \\cr &= 12\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(c) Calculate the total distance covered in the first 5 s:</strong><br><br>Because the velocity changes sign at $t = 1\\text{ s}$ and $t = 3\\text{ s}$, distance must be evaluated across three separate intervals.<br><br>Indefinite integral for displacement:\\begin{aligned} s(t) &= \\int (3t^2 - 12t + 9)\\text{ d}t \\cr &= t^3 - 6t^2 + 9t + c \\end{aligned}Taking $s(0) = 0$ gives $c = 0$:\\begin{aligned} s(0) &= 0\\text{ m} \\cr s(1) &= 1^3 - 6(1^2) + 9(1) = 4\\text{ m} \\cr s(3) &= 3^3 - 6(3^2) + 9(3) \\cr &= 27 - 54 + 27 = 0\\text{ m} \\cr s(5) &= 5^3 - 6(5^2) + 9(5) \\cr &= 125 - 150 + 45 = 20\\text{ m} \\end{aligned}Summing the absolute displacements over each interval:\\begin{aligned} d_1 &= |s(1) - s(0)|\\cr &= |4 - 0| \\cr &= 4\\text{ m} \\cr d_2 &= |s(3) - s(1)|\\cr & = |0 - 4|\\cr & = 4\\text{ m} \\cr d_3 &= |s(5) - s(3)| \\cr &= |20 - 0|\\cr & = 20\\text{ m} \\cr d_{\\text{total}} &= 4 + 4 + 20 \\cr &= 28\\text{ m} \\end{aligned}",
        "Final Answer: (a) $t = 1\\text{ s},\\ t = 3\\text{ s}$, (b) $12\\text{ m s}^{-2}$, (c) $28\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $t = 1\\text{ s},\\ t = 3\\text{ s}$, (b) $12\\text{ m s}^{-2}$, (c) $20\\text{ m}$",
            "feedback": "In part (c), you evaluated the net displacement $\\int_0^5 v\\text{ d}t = s(5) - s(0) = 20\\text{ m}$ rather than the total distance travelled, ignoring the reversal of motion between $t = 1$ and $t = 3$."
        },
        {
            "ans": "(a) $t = 1\\text{ s},\\ t = 3\\text{ s}$, (b) $9\\text{ m s}^{-2}$, (c) $28\\text{ m}$",
            "feedback": "In part (b), you evaluated the velocity $v(4)$ rather than differentiating to find the acceleration $a(4) = 6(4) - 12$."
        },
        {
            "ans": "(a) $t = 2\\text{ s},\\ t = 6\\text{ s}$, (b) $12\\text{ m s}^{-2}$, (c) $28\\text{ m}$",
            "feedback": "In part (a), you made an algebraic error factorising the quadratic equation $t^2 - 4t + 3 = 0$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Displacement vs Distance with Turning Points",
        "content": "Integrating $\\int_0^5 v\\text{ d}t$ gives net <strong>displacement</strong>> ($20\\text{ m}$), which cancels out opposing motion. Whenever you are asked for <strong>total distance</strong>, you must identify all times where $v = 0$ within the interval, evaluate the position at each boundary, and sum the absolute values of the changes in position: \\begin{aligned}|4 - 0| + |0 - 4| &+ |20 - 0| \\cr &= 28\\text{ m}\\end{aligned}"
    }
},
{
    "id": "012262",
    "group_id": "012261",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Variable Acceleration",
    "subtopic": [
        "Calculus in Kinematics",
        "Velocity Extrema",
        "Total Distance"
    ],
    "img": false,
    "question": "A particle moves in a straight line such that its displacement $s\\text{ metres}$ from a fixed origin $O$ at time $t\\text{ seconds}$ ($t \\ge 0$) is given by:$$s = 2t^3 - 15t^2 + 24t + 10$$<strong>(a)</strong> Find the times when the particle is instantaneously at rest.<br><br><strong>(b)</strong> Find the minimum velocity of the particle and the time at which this minimum occurs.<br><br><strong>(c)</strong> Calculate the total distance travelled by the particle during the first $6\\text{ seconds}$ of motion.",
    "steps": [
        "<strong>(a) Find times when particle is at rest:</strong><br><br>Differentiate displacement to obtain velocity:\\begin{aligned} v(t) &= \\dfrac{\\text{d}s}{\\text{d}t} \\cr &= 6t^2 - 30t + 24 \\end{aligned}Setting $v = 0$ for instantaneous rest:\\begin{aligned} &6(t^2 - 5t + 4) = 0 \\cr &6(t - 1)(t - 4) = 0 \\cr &t = 1\\text{ s},\\ t = 4\\text{ s} \\end{aligned}",
        "<strong>(b) Find minimum velocity:</strong><br><br>To find the stationary value of velocity, differentiate to obtain acceleration and set to zero:\\begin{aligned} a(t) &= \\dfrac{\\text{d}v}{\\text{d}t} \\cr &= 12t - 30 \\end{aligned}Setting $a = 0$:\\begin{aligned} &12t = 30 \\cr &t = 2.5\\text{ s} \\end{aligned}Evaluating the minimum velocity:\\begin{aligned} v(2.5) &= 6(2.5^2) - 30(2.5) + 24 \\cr &= 37.5 - 75 + 24 \\cr &= -13.5\\text{ m s}^{-1} \\end{aligned}Since $\\frac{\\text{d}^2v}{\\text{d}t^2} = 12 > 0$, this is a local minimum.",
        "<strong>(c) Calculate total distance in the first 6 s:</strong><br><br>The particle reverses direction at $t = 1\\text{ s}$ and $t = 4\\text{ s}$.<br><br>Evaluating position at key times:\\begin{aligned} s(0) &= 10\\text{ m} \\cr s(1) &= 21\\text{ m} \\cr s(4) &= -6\\text{ m} \\cr s(6) &= 46\\text{ m} \\end{aligned}<br><br>Calculating path lengths:\\begin{aligned} d_1 &= |21 - 10| \\cr &= 11\\text{ m} \\cr d_2 &= |-6 - 21| \\cr &= 27\\text{ m} \\cr d_3 &= |46 - (-6)| \\cr &= 52\\text{ m} \\end{aligned}<br><br>Total distance:\\begin{aligned} d_{\\text{total}} &= 11 + 27 + 52 \\cr &= 90\\text{ m} \\end{aligned}",
        "Final Answer: (a) $t = 1\\text{ s},\\ t = 4\\text{ s}$, (b) $-13.5\\text{ m s}^{-1}$ at $t = 2.5\\text{ s}$, (c) $90\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $t = 1\\text{ s},\\ t = 4\\text{ s}$, (b) $-13.5\\text{ m s}^{-1}$ at $t = 2.5\\text{ s}$, (c) $36\\text{ m}$",
            "feedback": "In part (c), you calculated the net displacement $s(6) - s(0) = 46 - 10 = 36\\text{ m}$ rather than summing the individual segments between turning points."
        },
        {
            "ans": "(a) $t = 1\\text{ s},\\ t = 4\\text{ s}$, (b) $0\\text{ m s}^{-1}$ at $t = 1\\text{ s}$, (c) $90\\text{ m}$",
            "feedback": "In part (b), you identified instantaneous rest ($v = 0$) as the minimum velocity, overlooking that velocity becomes negative (reaching a minimum of $-13.5\\text{ m s}^{-1}$)."
        },
        {
            "ans": "(a) $t = 2\\text{ s},\\ t = 3\\text{ s}$, (b) $-13.5\\text{ m s}^{-1}$ at $t = 2.5\\text{ s}$, (c) $90\\text{ m}$",
            "feedback": "In part (a), you solved $t^2 - 5t + 6 = 0$ instead of $t^2 - 5t + 4 = 0$, miscalculating the roots."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Tracking the Origin Offset",
        "content": "Notice that at $t = 0$, $s(0) = 10\\text{ m}$, not zero. When finding the first segment length, you must calculate $|s(1) - s(0)| = |21 - 10| = 11\\text{ m}$. A frequent blunder is using the coordinate $s(1) = 21\\text{ m}$ directly as the distance travelled, forgetting that the particle began $10\\text{ m}$ ahead of the origin."
    }
},
{
    "id": "012263",
    "group_id": "012261",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Variable Acceleration",
    "subtopic": [
        "Calculus in Kinematics",
        "Integration Constants",
        "Total Distance"
    ],
    "img": false,
    "question": "A particle moves along a straight line with variable acceleration $a\\text{ m s}^{-2}$ given at time $t\\text{ seconds}$ by:$$a = 6t - 18$$At time $t = 0\\text{ s}$, the particle passes through a fixed origin $O$ with velocity $24\\text{ m s}^{-1}$.<br><br><strong>(a)</strong> Find an expression for the velocity of the particle at time $t$, and determine the values of $t$ for which the particle is instantaneously at rest.<br><br><strong>(b)</strong> Find the maximum speed of the particle while it is travelling in the negative direction.<br><br><strong>(c)</strong> Calculate the total distance travelled by the particle in the time interval $0 \\le t \\le 6\\text{ s}$.",
    "steps": [
        "<strong>(a) Find velocity expression and times at rest:</strong><br><br>Integrating acceleration with respect to time:\\begin{aligned} v(t) &= \\int (6t - 18)\\text{ d}t \\cr &= 3t^2 - 18t + c \\end{aligned}Applying the initial condition $v(0) = 24$ gives $c = 24$:\\begin{aligned} v(t) &= 3t^2 - 18t + 24 \\end{aligned}Setting $v = 0$ for instantaneous rest:\\begin{aligned} &3(t^2 - 6t + 8) = 0 \\cr &3(t - 2)(t - 4) = 0 \\cr &t = 2\\text{ s},\\ t = 4\\text{ s} \\end{aligned}",
        "<strong>(b) Find maximum negative speed:</strong><br><br>The vertex of the parabolic velocity curve occurs when $a = 0$:\\begin{aligned} &6t - 18 = 0 \\cr &t = 3\\text{ s} \\end{aligned}Evaluating velocity at $t = 3\\text{ s}$:\\begin{aligned} v(3) &= 3(3^2) - 18(3) + 24 \\cr &= 27 - 54 + 24 \\cr &= -3\\text{ m s}^{-1} \\end{aligned}The maximum speed in the negative direction is $|-3| = 3\\text{ m s}^{-1}$.",
        "<strong>(c) Calculate total distance in 0 ≤ t ≤ 6 s:</strong><br><br>Integrating velocity for displacement with $s(0) = 0$:\\begin{aligned} s(t) &= \\int (3t^2 - 18t + 24)\\text{ d}t \\cr &= t^3 - 9t^2 + 24t \\end{aligned}<br><br>Evaluating position at key times:\\begin{aligned} s(0) &= 0\\text{ m} \\cr s(2) &= 20\\text{ m} \\cr s(4) &= 16\\text{ m} \\cr s(6) &= 36\\text{ m} \\end{aligned}<br><br>Calculating path lengths:\\begin{aligned} d_1 &= |20 - 0| \\cr &= 20\\text{ m} \\cr d_2 &= |16 - 20| \\cr &= 4\\text{ m} \\cr d_3 &= |36 - 16| \\cr &= 20\\text{ m} \\end{aligned}<br><br>Total distance:\\begin{aligned} d_{\\text{total}} &= 20 + 4 + 20 \\cr &= 44\\text{ m} \\end{aligned}",
        "Final Answer: (a) $v = 3t^2 - 18t + 24$, $t = 2\\text{ s},\\ t = 4\\text{ s}$, (b) $3\\text{ m s}^{-1}$, (c) $44\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $v = 3t^2 - 18t + 24$, $t = 2\\text{ s},\\ t = 4\\text{ s}$, (b) $3\\text{ m s}^{-1}$, (c) $36\\text{ m}$",
            "feedback": "In part (c), you calculated the net displacement $s(6) = 36\\text{ m}$ rather than the total distance $44\\text{ m}$, neglecting the $4\\text{ m}$ of reverse travel between $t = 2$ and $t = 4$."
        },
        {
            "ans": "(a) $v = 3t^2 - 18t$, $t = 0\\text{ s},\\ t = 6\\text{ s}$, (b) $3\\text{ m s}^{-1}$, (c) $44\\text{ m}$",
            "feedback": "In part (a), you omitted the constant of integration $c = 24$ when integrating acceleration, setting $v = 3t^2 - 18t$."
        },
        {
            "ans": "(a) $v = 3t^2 - 18t + 24$, $t = 2\\text{ s},\\ t = 4\\text{ s}$, (b) $-3\\text{ m s}^{-1}$, (c) $44\\text{ m}$",
            "feedback": "In part (b), speed is a scalar magnitude and must be stated as positive ($3\\text{ m s}^{-1}$), not negative."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Velocity vs Speed in Extrema Questions",
        "content": "Always read question wording carefully: <em>velocity</em> has a sign, whereas <em>speed</em> is strictly the magnitude $|v|$. In part (b), the velocity reaches a local minimum of $-3\\text{ m s}^{-1}$. Stating the speed as $-3\\text{ m s}^{-1}$ is a contradictory statement that will be penalised—the speed is simply $3\\text{ m s}^{-1}$."
    }
},
{
    "id": "012264",
    "group_id": "012261",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Variable Acceleration",
    "subtopic": [
        "Trigonometric Functions",
        "Simple Harmonic Motion",
        "Total Distance"
    ],
    "img": false,
    "question": "A particle moves along a straight line. At time $t\\text{ seconds}$ ($t \\ge 0$), its velocity $v\\text{ m s}^{-1}$ is modelled by:$$v = 6\\cos(2t) - 3$$<strong>(a)</strong> Find the two smallest values of $t$ for which the particle is instantaneously at rest, giving your answers in terms of $\\pi$.<br><br><strong>(b)</strong> Calculate the acceleration of the particle at time $t = \\dfrac{\\pi}{4}\\text{ s}$.<br><br><strong>(c)</strong> Given that the particle is at the origin $O$ when $t = 0\\text{ s}$, calculate the total distance travelled by the particle between $t = 0\\text{ s}$ and $t = \\dfrac{\\pi}{2}\\text{ s}$, giving your answer in exact form and to 3 significant figures.",
    "steps": [
        "<strong>(a) Find smallest times at rest:</strong><br><br>Setting $v = 0$:\\begin{aligned} &6\\cos(2t) - 3 = 0 \\cr &\\cos(2t) = \\dfrac{1}{2} \\cr &2t = \\dfrac{\\pi}{3},\\ \\dfrac{5\\pi}{3} \\cr &t = \\dfrac{\\pi}{6}\\text{ s},\\ \\dfrac{5\\pi}{6}\\text{ s} \\end{aligned}",
        "<strong>(b) Calculate acceleration at t = π/4 s:</strong><br><br>Differentiate velocity with respect to time:\\begin{aligned} a(t) &= \\dfrac{\\text{d}v}{\\text{d}t} \\cr &= -12\\sin(2t) \\end{aligned}At $t = \\dfrac{\\pi}{4}\\text{ s}$:\\begin{aligned} a\\left(\\dfrac{\\pi}{4}\\right) &= -12\\sin\\left(\\dfrac{\\pi}{2}\\right) \\cr &= -12(1) \\cr &= -12\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(c) Calculate total distance in 0 ≤ t ≤ π/2:</strong><br><br>Integrate velocity to find displacement with $s(0) = 0$:\\begin{aligned} s(t) &= \\int (6\\cos(2t) - 3)\\text{ d}t \\cr &= 3\\sin(2t) - 3t \\end{aligned}Within the interval $[0, \\frac{\\pi}{2}]$, velocity crosses zero at $t = \\frac{\\pi}{6}$:\\begin{aligned} s(0) &= 0\\text{ m} \\cr s\\left(\\dfrac{\\pi}{6}\\right) &= 3\\sin\\left(\\dfrac{\\pi}{3}\\right) - 3\\left(\\dfrac{\\pi}{6}\\right) \\cr &= \\dfrac{3\\sqrt{3}}{2} - \\dfrac{\\pi}{2} \\approx 1.0262\\text{ m} \\cr s\\left(\\dfrac{\\pi}{2}\\right) &= 3\\sin(\\pi) - 3\\left(\\dfrac{\\pi}{2}\\right) \\cr &= -\\dfrac{3\\pi}{2} \\approx -4.7124\\text{ m} \\end{aligned}Summing the absolute segment lengths:\\begin{aligned} d_1 &= \\left|\\dfrac{3\\sqrt{3}}{2} - \\dfrac{\\pi}{2}\\right| \\approx 1.0262\\text{ m} \\cr d_2 &= \\left|-\\dfrac{3\\pi}{2} - \\left(\\dfrac{3\\sqrt{3}}{2} - \\dfrac{\\pi}{2}\\right)\\right| \\cr &= \\pi + \\dfrac{3\\sqrt{3}}{2} \\approx 5.7397\\text{ m} \\cr d_{\\text{total}} &= 3\\sqrt{3} + \\dfrac{\\pi}{2} \\cr &\\approx 6.77\\text{ m} \\end{aligned}",
        "Final Answer: (a) $t = \\dfrac{\\pi}{6}\\text{ s},\\ \\dfrac{5\\pi}{6}\\text{ s}$, (b) $-12\\text{ m s}^{-2}$, (c) $3\\sqrt{3} + \\dfrac{\\pi}{2} \\approx 6.77\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $t = \\dfrac{\\pi}{6}\\text{ s},\\ \\dfrac{5\\pi}{6}\\text{ s}$, (b) $-12\\text{ m s}^{-2}$, (c) $-\\dfrac{3\\pi}{2} \\approx -4.71\\text{ m}$",
            "feedback": "In part (c), you calculated the net displacement $s(\\pi/2) = -3\\pi/2$ rather than summing the forward and backward paths as positive scalar distances."
        },
        {
            "ans": "(a) $t = \\dfrac{\\pi}{3}\\text{ s},\\ \\dfrac{2\\pi}{3}\\text{ s}$, (b) $-12\\text{ m s}^{-2}$, (c) $3\\sqrt{3} + \\dfrac{\\pi}{2} \\approx 6.77\\text{ m}$",
            "feedback": "In part (a), you forgot to divide the angle by $2$ when solving $\\cos(2t) = 0.5$, giving $t = \\pi/3$ instead of $t = \\pi/6$."
        },
        {
            "ans": "(a) $t = \\dfrac{\\pi}{6}\\text{ s},\\ \\dfrac{5\\pi}{6}\\text{ s}$, (b) $12\\text{ m s}^{-2}$, (c) $3\\sqrt{3} + \\dfrac{\\pi}{2} \\approx 6.77\\text{ m}$",
            "feedback": "In part (b), you lost the negative sign when differentiating cosine: $\\frac{\\text{d}}{\\text{d}t}(\\cos(2t)) = -2\\sin(2t)$, not $+2\\sin(2t)$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Exact Surd Integration in Trigonometric Kinematics",
        "content": "When integrating trigonometric velocities, keep exact values in terms of $\\sqrt{3}$ and $\\pi$ until the final line. Notice that the subtraction $\\frac{-\\pi}{2}$ in the first stage and the $-\\pi$ in the second stage combine with the initial $-\\frac{3\\pi}{2}$ boundary to collapse into the elegant exact closed form $3\\sqrt{3} + \\frac{\\pi}{2} \\approx 6.77\\text{ m}$."
    }
},
{
    "id": "012265",
    "group_id": "012261",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Variable Acceleration",
    "subtopic": [
        "Exponential Decay",
        "Logarithmic Rest Time",
        "Total Distance"
    ],
    "img": false,
    "question": "A particle moves along a straight line through a medium offering resistance. At time $t\\text{ seconds}$ ($t \\ge 0$), its velocity $v\\text{ m s}^{-1}$ is given by:$$v = 16e^{-0.5t} - 4$$<strong>(a)</strong> Find the value of $t$ when the particle comes instantaneously to rest, giving your answer in exact logarithmic form and to 3 significant figures.<br><br><strong>(b)</strong> Find the acceleration of the particle when $t = 0\\text{ s}$, and when the particle is instantaneously at rest.<br><br><strong>(c)</strong> Calculate the total distance travelled by the particle during the time interval from $t = 0\\text{ s}$ to $t = 4\\text{ s}$, giving your answer to 3 significant figures.",
    "steps": [
        "<strong>(a) Find time of instantaneous rest:</strong><br><br>Setting $v = 0$:\\begin{aligned} &16e^{-0.5t} - 4 = 0 \\cr &e^{-0.5t} = \\dfrac{4}{16} = 0.25 \\cr &e^{0.5t} = 4 \\cr &0.5t = \\ln 4 \\cr &t = 2\\ln 4 = \\ln 16 \\cr &\\approx 2.77\\text{ s} \\end{aligned}",
        "<strong>(b) Find acceleration at t = 0 s and at rest:</strong><br><br>Differentiate velocity with respect to time:\\begin{aligned} a(t) &= \\dfrac{\\text{d}v}{\\text{d}t} \\cr &= 16(-0.5)e^{-0.5t} \\cr &= -8e^{-0.5t} \\end{aligned}At $t = 0\\text{ s}$:\\begin{aligned} a(0) &= -8e^0 \\cr &= -8\\text{ m s}^{-2} \\end{aligned}When the particle is at rest ($e^{-0.5t} = 0.25$):\\begin{aligned} a(2.77) &= -8(0.25) \\cr &= -2\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(c) Calculate total distance in 0 ≤ t ≤ 4 s:</strong><br><br>Integrate velocity to obtain displacement:\\begin{aligned} s(t) &= \\int (16e^{-0.5t} - 4)\\text{ d}t \\cr &= -32e^{-0.5t} - 4t \\end{aligned}Evaluating position at boundaries $t = 0$, $t = \\ln 16 \\approx 2.7726$, and $t = 4$:\\begin{aligned} s(0) &= -32\\text{ m} \\cr s(2.7726) &= -32(0.25) - 4(2.7726) \\cr &= -8 - 11.0904 \\cr &= -19.0904\\text{ m} \\cr s(4) &= -32e^{-2} - 4(4) \\cr &= -32(0.135335) - 16 \\cr &= -4.3307 - 16 \\cr &= -20.3307\\text{ m} \\end{aligned}Summing the absolute segment distances:\\begin{aligned} d_1 &= |s(2.7726) - s(0)| \\cr &= |-19.0904 - (-32)| \\cr &= 12.9096\\text{ m} \\cr d_2 &= |s(4) - s(2.7726)| \\cr &= |-20.3307 - (-19.0904)| \\cr &= 1.2403\\text{ m} \\cr d_{\\text{total}} &= 12.9096 + 1.2403 \\cr &= 14.1499\\text{ m} \\cr &\\approx 14.2\\text{ m} \\end{aligned}",
        "Final Answer: (a) $\\ln 16 \\approx 2.77\\text{ s}$, (b) $-8\\text{ m s}^{-2}$, $-2\\text{ m s}^{-2}$, (c) $14.2\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $\\ln 16 \\approx 2.77\\text{ s}$, (b) $-8\\text{ m s}^{-2}$, $-2\\text{ m s}^{-2}$, (c) $11.7\\text{ m}$",
            "feedback": "In part (c), you calculated the net displacement $s(4) - s(0) \\approx 11.7\\text{ m}$ rather than summing the separate path segments before and after the turning point."
        },
        {
            "ans": "(a) $\\ln 4 \\approx 1.39\\text{ s}$, (b) $-8\\text{ m s}^{-2}$, $-2\\text{ m s}^{-2}$, (c) $14.2\\text{ m}$",
            "feedback": "In part (a), you solved $0.5t = \\ln 4$ as $t = \\ln 4$ instead of multiplying by $2$ to give $t = 2\\ln 4 = \\ln 16$."
        },
        {
            "ans": "(a) $\\ln 16 \\approx 2.77\\text{ s}$, (b) $-16\\text{ m s}^{-2}$, $-4\\text{ m s}^{-2}$, (c) $14.2\\text{ m}$",
            "feedback": "In part (b), you forgot to multiply by the derivative of the exponent ($-0.5$) when differentiating $e^{-0.5t}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Natural Logarithms in Exponential Models",
        "content": "When solving $e^{-kt} = c$, taking the reciprocal $e^{kt} = \\frac{1}{c}$ first eliminates negative signs before taking logarithms. For $e^{0.5t} = 4$, taking logs gives $0.5t = \\ln 4$, which simplifies directly to $t = \\ln 16$."
    }
},
{
    "id": "012266",
    "group_id": "012266",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Projectiles",
    "subtopic": [
        "Obstacle Clearance",
        "Velocity Vector at Time t",
        "Ground Projection"
    ],
    "img": "images/Mechanics_pngs/012266.png",
    "question": "The diagram shows a ball struck from a point $O$ on horizontal ground with an initial speed of $30\\text{ m s}^{-1}$ at an angle of $60^\\circ$ above the horizontal.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Calculate the magnitude and direction of the velocity of the ball after $2\\text{ seconds}$ of flight, giving the speed and the angle with the horizontal to 3 significant figures.<br><br><strong>(b)</strong> In the plane of projection, a tree of height $24\\text{ m}$ stands at a horizontal distance of $60\\text{ m}$ from $O$.<br><br>Determine whether the ball will clear the top of the tree, stating clearly its vertical height above the ground at this horizontal distance.",
    "steps": [
        "<strong>(a) Calculate velocity vector after 2 s:</strong><br><br>Resolve initial velocity into components:\\begin{aligned} u_x &= 30\\cos 60^\\circ \cr &= 15\\text{ m s}^{-1} \end{aligned}<br><br>Vertical component:\\begin{aligned} u_y &= 30\\sin 60^\\circ \cr &= 15\\sqrt{3}\text{ m s}^{-1} \cr &\approx 25.981\\text{ m s}^{-1} \end{aligned}<br><br>At $t = 2\\text{ s}$, horizontal velocity remains constant:\\begin{aligned} v_x &= 15\\text{ m s}^{-1} \end{aligned}<br><br>Vertical velocity at $t = 2\\text{ s}$:\\begin{aligned} v_y &= u_y - gt \cr &= 25.981 - 9.8(2) \cr &= 25.981 - 19.6 \cr &= 6.381\\text{ m s}^{-1} \end{aligned}<br><br>Speed is the resultant magnitude:\\begin{aligned} v &= \\sqrt{v_x^2 + v_y^2} \cr &= \\sqrt{15^2 + 6.381^2} \cr &= \\sqrt{225 + 40.717} \cr &= \\sqrt{265.717} \cr &\\approx 16.3\\text{ m s}^{-1} \end{aligned}<br><br>Direction above the horizontal:\\begin{aligned} \\theta &= \\arctan\\left(\\dfrac{6.381}{15}\\right) \cr &\\approx 23.0^\\circ \end{aligned}",
        "<strong>(b) Determine whether the ball clears the tree:</strong><br><br>Time taken to travel $60\\text{ m}$ horizontally:\\begin{aligned} t &= \\dfrac{60}{u_x} \cr &= \\dfrac{60}{15} \cr &= 4\\text{ s} \end{aligned}<br><br>Vertical height at $t = 4\\text{ s}$:\\begin{aligned} y &= u_y t - \\dfrac{1}{2}gt^2 \cr &= (15\\sqrt{3})(4) \cr &\qquad - 4.9(4^2) \cr &= 60\\sqrt{3} - 78.4 \cr &= 103.923 - 78.4 \cr &= 25.52\\text{ m} \end{aligned}<br><br>Because $25.52\\text{ m} > 24\\text{ m}$, the ball clears the tree by $1.52\\text{ m}$.",
        "Final Answer: (a) $16.3\\text{ m s}^{-1}$ at $23.0^\\circ$ above horizontal, (b) Clears (height $25.5\\text{ m} > 24\\text{ m}$)"
    ],
    "pi_options": [
        {
            "ans": "(a) $16.3\\text{ m s}^{-1}$ at $23.0^\\circ$ above horizontal, (b) Does not clear (height $15.5\\text{ m} < 24\\text{ m}$)",
            "feedback": "In part (b), you evaluated $y = u_y t - gt^2$ without the factor of $\\frac{1}{2}$, calculating $103.9 - 9.8(16) = -52.9\\text{ m}$ or an incorrect intermediate drop."
        },
        {
            "ans": "(a) $20.0\\text{ m s}^{-1}$ at $45.0^\\circ$ above horizontal, (b) Clears (height $25.5\\text{ m} > 24\\text{ m}$)",
            "feedback": "In part (a), you calculated vertical velocity using $v_y = u_y - \\frac{1}{2}gt$ instead of $v_y = u_y - gt$."
        },
        {
            "ans": "(a) $16.3\\text{ m s}^{-1}$ at $67.0^\\circ$ above horizontal, (b) Clears (height $25.5\\text{ m} > 24\\text{ m}$)",
            "feedback": "In part (a), you evaluated the angle with the vertical $\\arctan(v_x/v_y)$ rather than the angle with the horizontal $\\arctan(v_y/v_x)$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Horizontal Uniformity Principle",
        "content": "In projectile motion under gravity without air resistance, the horizontal velocity component $u_x = u\\cos\\theta$ is strictly constant. When solving clearance questions, always calculate the flight time to the obstacle position directly using $t = \\frac{x}{u_x}$. Once $t$ is known, vertical height is delivered by $y = u_y t - 4.9t^2$."
    }
},
{
    "id": "012267",
    "group_id": "012266",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Projectiles",
    "subtopic": [
        "Elevated Projection",
        "Velocity Vector at Time t",
        "Obstacle Clearance"
    ],
    "img": "images/Mechanics_pngs/012267.png",
    "question": "The diagram shows a projectile fired from a point $O$ at the edge of a vertical cliff of height $20\\text{ m}$ above horizontal ground. The initial speed of projection is $25\\text{ m s}^{-1}$ at an angle of elevation of $30^\\circ$ above the horizontal.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Calculate the speed and angle of inclination to the horizontal of the projectile after $1.5\\text{ seconds}$ of flight, giving your answers to 3 significant figures.<br><br><strong>(b)</strong> A vertical radio mast of height $12\\text{ m}$ stands on the ground at a horizontal distance of $40\\text{ m}$ from the base of the cliff.<br><br>Determine whether the projectile clears the top of the mast, and calculate its vertical clearance above the top of the mast to 3 significant figures.",
    "steps": [
        "<strong>(a) Calculate velocity after 1.5 s:</strong><br><br>Resolve initial velocity:\\begin{aligned} u_x &= 25\\cos 30^\\circ \cr &= 12.5\\sqrt{3} \cr &\\approx 21.651\\text{ m s}^{-1} \end{aligned}<br><br>Vertical component:\\begin{aligned} u_y &= 25\\sin 30^\\circ \cr &= 12.5\\text{ m s}^{-1} \end{aligned}<br><br>At $t = 1.5\\text{ s}$, horizontal component is unchanged:\\begin{aligned} v_x &= 21.651\\text{ m s}^{-1} \end{aligned}<br><br>Vertical component:\\begin{aligned} v_y &= u_y - gt \cr &= 12.5 - 9.8(1.5) \cr &= 12.5 - 14.7 \cr &= -2.2\\text{ m s}^{-1} \end{aligned}<br><br>Speed is the magnitude:\\begin{aligned} v &= \\sqrt{21.651^2 + (-2.2)^2} \cr &= \\sqrt{468.75 + 4.84} \cr &= \\sqrt{473.59} \cr &\\approx 21.8\\text{ m s}^{-1} \end{aligned}<br><br>Direction below the horizontal:\\begin{aligned} \\theta &= \\arctan\\left(\\dfrac{2.2}{21.651}\\right) \cr &\\approx 5.80^\\circ \end{aligned}",
        "<strong>(b) Determine clearance over the mast:</strong><br><br>Time to reach $x = 40\\text{ m}$ horizontally:\\begin{aligned} t &= \\dfrac{40}{u_x} \cr &= \\dfrac{40}{21.651} \cr &\\approx 1.8475\\text{ s} \end{aligned}<br><br>Height above the ground datum ($y = 0$):\\begin{aligned} y &= 20 + u_y t - \\dfrac{1}{2}gt^2 \cr &= 20 + 12.5(1.8475) \cr &\qquad - 4.9(1.8475^2) \cr &= 20 + 23.094 - 16.726 \cr &= 26.368\\text{ m} \end{aligned}<br><br>Vertical clearance above the $12\\text{ m}$ mast:\\begin{aligned} \\text{Clearance} &= 26.368 - 12 \cr &= 14.368\\text{ m} \cr &\\approx 14.4\\text{ m} \end{aligned}<br><br>Since $26.4\\text{ m} > 12\\text{ m}$, the projectile clears the mast by $14.4\\text{ m}$.",
        "Final Answer: (a) $21.8\\text{ m s}^{-1}$ at $5.80^\\circ$ below horizontal, (b) Clears (clearance $14.4\\text{ m}$)"
    ],
    "pi_options": [
        {
            "ans": "(a) $21.8\\text{ m s}^{-1}$ at $5.80^\\circ$ below horizontal, (b) Does not clear (clearance $-5.63\\text{ m}$)",
            "feedback": "In part (b), you forgot to add the initial cliff height of $20\\text{ m}$, calculating height relative to the launch point ($6.37\\text{ m}$) rather than above ground level."
        },
        {
            "ans": "(a) $21.8\\text{ m s}^{-1}$ at $5.80^\\circ$ above horizontal, (b) Clears (clearance $14.4\\text{ m}$)",
            "feedback": "In part (a), you stated the angle as above horizontal, overlooking that $v_y = 12.5 - 14.7 = -2.2\\text{ m s}^{-1}$ is negative, meaning the projectile has passed its apex and is descending."
        },
        {
            "ans": "(a) $24.7\\text{ m s}^{-1}$ at $5.80^\\circ$ below horizontal, (b) Clears (clearance $14.4\\text{ m}$)",
            "feedback": "In part (a), you calculated speed as $v_x + |v_y|$ rather than using Pythagoras' theorem $\\sqrt{v_x^2 + v_y^2}$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Tracking the Ground Datum",
        "content": "When a projectile is launched from an elevated cliff, always define your vertical origin clearly. If taking the cliff top as $y = 0$, the mast top is at position $y = 12 - 20 = -8\\text{ m}$. If taking the ground as datum, include the $+20\\text{ m}$ initial displacement in your position formula: $y = 20 + u_y t - 4.9t^2$."
    }
},
{
    "id": "012268",
    "group_id": "012266",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Projectiles",
    "subtopic": [
        "Horizontal Projection",
        "Velocity Vector at Time t",
        "Obstacle Clearance"
    ],
    "img": "images/Mechanics_pngs/012268.png",
    "question": "The diagram shows a stone thrown horizontally with an initial speed of $14\\text{ m s}^{-1}$ from a point $O$ at the top of a vertical tower of height $35\\text{ m}$ above horizontal ground.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Calculate the speed and direction of motion of the stone after $1.5\\text{ seconds}$, giving your answers to 3 significant figures.<br><br><strong>(b)</strong> A vertical boundary wall of height $10\\text{ m}$ stands on the ground at a horizontal distance of $28\\text{ m}$ from the base of the tower.<br><br>Determine whether the stone clears the wall, and calculate its height above the top of the wall as it passes directly over it.",
    "steps": [
        "<strong>(a) Calculate velocity after 1.5 s:</strong><br><br>Because the stone is thrown horizontally, $u_x = 14\\text{ m s}^{-1}$ and $u_y = 0$.<br><br>At $t = 1.5\\text{ s}$:\\begin{aligned} v_x &= 14\\text{ m s}^{-1} \end{aligned}<br><br>Vertical velocity:\\begin{aligned} v_y &= 0 - gt \cr &= -9.8(1.5) \cr &= -14.7\\text{ m s}^{-1} \end{aligned}<br><br>Speed is the resultant magnitude:\\begin{aligned} v &= \\sqrt{v_x^2 + v_y^2} \cr &= \\sqrt{14^2 + (-14.7)^2} \cr &= \\sqrt{196 + 216.09} \cr &= \\sqrt{412.09} \cr &\\approx 20.3\\text{ m s}^{-1} \end{aligned}<br><br>Direction below the horizontal:\\begin{aligned} \\theta &= \\arctan\\left(\\dfrac{14.7}{14}\\right) \cr &\\approx 46.4^\\circ \end{aligned}",
        "<strong>(b) Calculate wall clearance:</strong><br><br>Time to travel $28\\text{ m}$ horizontally:\\begin{aligned} t &= \\dfrac{28}{u_x} \cr &= \\dfrac{28}{14} \cr &= 2\\text{ s} \end{aligned}<br><br>Vertical drop during these $2\\text{ seconds}$:\\begin{aligned} h_{\\text{drop}} &= \\dfrac{1}{2}gt^2 \cr &= 4.9(2^2) \cr &= 19.6\\text{ m} \end{aligned}<br><br>Height of the stone above the ground:\\begin{aligned} y &= 35 - 19.6 \cr &= 15.4\\text{ m} \end{aligned}<br><br>Clearance above the $10\\text{ m}$ wall:\\begin{aligned} \\text{Clearance} &= 15.4 - 10 \cr &= 5.4\\text{ m} \end{aligned}<br><br>Since $15.4\\text{ m} > 10\\text{ m}$, the stone clears the wall by $5.4\\text{ m}$.",
        "Final Answer: (a) $20.3\\text{ m s}^{-1}$ at $46.4^\\circ$ below horizontal, (b) Clears (height $15.4\\text{ m}$, clearance $5.4\\text{ m}$)"
    ],
    "pi_options": [
        {
            "ans": "(a) $20.3\\text{ m s}^{-1}$ at $46.4^\\circ$ below horizontal, (b) Does not clear (height $9.6\\text{ m} < 10\\text{ m}$)",
            "feedback": "In part (b), you subtracted the drop from $19.6$ or made an arithmetic error calculating $35 - 19.6$."
        },
        {
            "ans": "(a) $14.7\\text{ m s}^{-1}$ at $46.4^\\circ$ below horizontal, (b) Clears (height $15.4\\text{ m}$, clearance $5.4\\text{ m}$)",
            "feedback": "In part (a), you stated only the vertical component of velocity $|v_y|$ rather than combining both orthogonal components to find the resultant speed."
        },
        {
            "ans": "(a) $20.3\\text{ m s}^{-1}$ at $43.6^\\circ$ below horizontal, (b) Clears (height $15.4\\text{ m}$, clearance $5.4\\text{ m}$)",
            "feedback": "In part (a), you calculated the angle with the vertical $\\arctan(v_x/|v_y|)$ instead of the angle with the horizontal."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Pure Horizontal Launches",
        "content": "A purely horizontal projection ($u_y = 0$) means the horizontal and vertical problems decouple immediately into standard SUVAT formulas. The vertical motion is identical to dropping an object from rest ($h_{\\text{drop}} = 4.9t^2$). Always compute the vertical drop first, then subtract it from the launch elevation to determine ground clearance."
    }
},
{
    "id": "012269",
    "group_id": "012266",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Projectiles",
    "subtopic": [
        "Horizontal Projection",
        "Net Clearance",
        "Boundary Range"
    ],
    "img": "images/Mechanics_pngs/012269.png",
    "question": "The diagram shows a tennis player serving a ball from a height of $2.5\\text{ m}$ above the court with an initial horizontal speed of $30\\text{ m s}^{-1}$.<br><br>The net stands at a horizontal distance of $12\\text{ m}$ from the server and has a height of $0.9\\text{ m}$. The service line marks the boundary of the service box at a horizontal distance of $18\\text{ m}$ from the server.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Determine whether the serve clears the net, and calculate the vertical clearance between the ball and the top of the net.<br><br><strong>(b)</strong> Determine whether the ball lands within the service court (that is, whether it strikes the court surface before reaching the service line at $18\\text{ m}$).",
    "steps": [
        "<strong>(a) Calculate net clearance:</strong><br><br>Time taken to reach the net at $x = 12\\text{ m}$:\\begin{aligned} t_{\\text{net}} &= \\dfrac{12}{30} \cr &= 0.4\\text{ s} \end{aligned}<br><br>Vertical drop during this time:\\begin{aligned} h_{\\text{drop}} &= \\dfrac{1}{2}gt_{\\text{net}}^2 \cr &= 4.9(0.4^2) \cr &= 4.9(0.16) \cr &= 0.784\\text{ m} \end{aligned}<br><br>Height of ball above the court at the net:\\begin{aligned} y_{\\text{net}} &= 2.5 - 0.784 \cr &= 1.716\\text{ m} \end{aligned}<br><br>Vertical clearance above the $0.9\\text{ m}$ net:\\begin{aligned} \\text{Clearance} &= 1.716 - 0.9 \cr &= 0.816\\text{ m} \end{aligned}<br><br>Since $1.716\\text{ m} > 0.9\\text{ m}$, the serve clears the net by $0.816\\text{ m}$.",
        "<strong>(b) Check landing position:</strong><br><br>The ball strikes the ground when $y = 0$, meaning the total drop is $2.5\\text{ m}$:\\begin{aligned} 4.9t^2 &= 2.5 \cr t^2 &= \\dfrac{2.5}{4.9} \cr &= \\dfrac{25}{49} \cr t &= \\dfrac{5}{7}\\text{ s} \cr &\\approx 0.7143\\text{ s} \end{aligned}<br><br>Horizontal distance travelled before striking the court:\\begin{aligned} x &= 30\\left(\\dfrac{5}{7}\\right) \cr &= \\dfrac{150}{7} \cr &\\approx 21.4\\text{ m} \end{aligned}<br><br>Because $21.4\\text{ m} > 18\\text{ m}$, the ball lands beyond the service line (out).",
        "Final Answer: (a) Clears net (clearance $0.816\\text{ m}$), (b) No (lands at $21.4\\text{ m} > 18\\text{ m}$)"
    ],
    "pi_options": [
        {
            "ans": "(a) Clears net (clearance $0.816\\text{ m}$), (b) Yes (lands at $15.3\\text{ m} < 18\\text{ m}$)",
            "feedback": "In part (b), you evaluated $t = \\sqrt{2.5/9.8}$ without the factor of $2$ in the numerator, underestimating the time of flight and horizontal range."
        },
        {
            "ans": "(a) Does not clear net (clearance $-0.084\\text{ m}$), (b) No (lands at $21.4\\text{ m} > 18\\text{ m}$)",
            "feedback": "In part (a), you calculated the height as $0.784\\text{ m}$ above the court, forgetting that $0.784\\text{ m}$ is the *drop* from the initial service height of $2.5\\text{ m}$."
        },
        {
            "ans": "(a) Clears net (clearance $0.816\\text{ m}$), (b) No (lands at $24.5\\text{ m} > 18\\text{ m}$)",
            "feedback": "In part (b), you used the total flight time as $t = 2.5 / 3.0$ rather than using vertical free fall to find impact time."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Exact Fractions in Flight Time",
        "content": "Notice how cleanly the numbers simplify when solving $2.5 = 4.9t^2$. Multiplying top and bottom by $10$ gives $t^2 = \\frac{25}{49}$, leading directly to the exact rational flight time $t = \\frac{5}{7}\\text{ s}$. Using the exact fraction $\\frac{5}{7}$ delivers $x = \\frac{150}{7} \\approx 21.4\\text{ m}$ without any rounding error."
    }
},
{
    "id": "012270",
    "group_id": "012266",
    "branch": "Mechanics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Projectiles",
    "subtopic": [
        "Trajectory Equation",
        "Obstacle Clearance",
        "Angle of Projection"
    ],
    "img": "images/Mechanics_pngs/012270.png",
    "question": "The diagram shows a rugby ball kicked from a point $O$ on horizontal ground with an initial speed of $28\\text{ m s}^{-1}$ at an angle of elevation of $48^\\circ$ towards the goalposts.<br><br>The goalposts are situated at a horizontal distance of $35\\text{ m}$ from $O$, and the horizontal crossbar is at a height of $3\\text{ m}$ above the ground.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Calculate the time taken for the ball to reach the plane of the goalposts, giving your answer to 3 significant figures.<br><br><strong>(b)</strong> Determine whether the kick is successful by passing above the crossbar, calculating the height of the ball as it reaches the posts.<br><br><strong>(c)</strong> For a kick taken from the same point with the same initial speed of $28\\text{ m s}^{-1}$, use the Cartesian equation of the trajectory to find the minimum angle of elevation $\\alpha$ required for the ball to clear the crossbar, giving your answer in degrees to 1 decimal place.",
    "steps": [
        "<strong>(a) Calculate time to reach goalposts:</strong><br><br>Horizontal component of velocity:\\begin{aligned} u_x &= 28\\cos 48^\\circ \cr &\\approx 18.736\\text{ m s}^{-1} \end{aligned}<br><br>Time to travel $35\\text{ m}$ horizontally:\\begin{aligned} t &= \\dfrac{35}{u_x} \cr &= \\dfrac{35}{18.736} \cr &\\approx 1.868\\text{ s} \cr &\\approx 1.87\\text{ s} \end{aligned}",
        "<strong>(b) Determine whether kick is successful:</strong><br><br>Vertical component of velocity:\\begin{aligned} u_y &= 28\\sin 48^\\circ \cr &\\approx 20.808\\text{ m s}^{-1} \end{aligned}<br><br>Vertical height at $t = 1.868\\text{ s}$:\\begin{aligned} y &= u_y t - \\dfrac{1}{2}gt^2 \cr &= 20.808(1.868) \cr &\qquad - 4.9(1.868^2) \cr &= 38.87 - 17.09 \cr &= 21.78\\text{ m} \end{aligned}<br><br>Because $21.78\\text{ m} > 3\\text{ m}$, the ball passes well above the crossbar, so the kick is successful.",
        "<strong>(c) Find minimum angle of elevation using trajectory equation:</strong><br><br>The Cartesian equation of trajectory is:\\begin{aligned} &y = x\\tan\\alpha \cr &\qquad - \\dfrac{gx^2}{2u^2}(1 + \\tan^2\\alpha) \end{aligned}<br><br>Evaluating the coefficient with $x = 35$, $u = 28$, and $g = 9.8$:\\begin{aligned} \\dfrac{gx^2}{2u^2} &= \\dfrac{9.8(35^2)}{2(28^2)} \cr &= \\dfrac{12005}{1568} \cr &= 7.65625 \end{aligned}<br><br>At the crossbar boundary, $y = 3\\text{ m}$. Setting $T = \\tan\\alpha$:\\begin{aligned} &3 = 35T - 7.65625(1 + T^2) \cr &7.65625T^2 - 35T \cr &\qquad + 10.65625 = 0 \end{aligned}<br><br>Evaluating the discriminant:\\begin{aligned} \\Delta &= 35^2 \cr &\qquad - 4(7.65625)(10.65625) \cr &= 1225 - 326.336 \cr &= 898.664 \cr \\sqrt{\\Delta} &\\approx 29.978 \end{aligned}<br><br>Applying the quadratic formula:\\begin{aligned} T &= \\dfrac{35 \\pm 29.978}{2(7.65625)} \cr &= \\dfrac{35 \\pm 29.978}{15.3125} \end{aligned}<br><br>Smaller root for minimum elevation:\\begin{aligned} T &= \\dfrac{5.022}{15.3125} \cr &\\approx 0.3280 \cr \\alpha &= \\arctan(0.3280) \cr &\\approx 18.2^\\circ \end{aligned}",
        "Final Answer: (a) $1.87\\text{ s}$, (b) Successful (height $21.8\\text{ m} > 3\\text{ m}$), (c) $18.2^\\circ$"
    ],
    "pi_options": [
        {
            "ans": "(a) $1.87\\text{ s}$, (b) Successful (height $21.8\\text{ m} > 3\\text{ m}$), (c) $76.7^\\circ$",
            "feedback": "In part (c), you stated the larger angle root $\\arctan(4.243) \\approx 76.7^\\circ$ (the high-lob trajectory) rather than the minimum angle of elevation."
        },
        {
            "ans": "(a) $1.87\\text{ s}$, (b) Unsuccessful (height $2.18\\text{ m} < 3\\text{ m}$), (c) $18.2^\\circ$",
            "feedback": "In part (b), an arithmetic slip in place value occurred: $21.78\\text{ m}$ was miscalculated as $2.18\\text{ m}$."
        },
        {
            "ans": "(a) $1.68\\text{ s}$, (b) Successful (height $21.8\\text{ m} > 3\\text{ m}$), (c) $18.2^\\circ$",
            "feedback": "In part (a), you used $u_y$ instead of $u_x$ to find the horizontal transit time ($35 / 20.808$)."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: The Two-Angle Trajectory Theorem",
        "content": "For any obstacle $(X, Y)$ within maximum range, the trajectory quadratic in $\\tan\\alpha$ yields two distinct angles: a low-angle direct drive (here $18.2^\\circ$) and a high-arching lob (here $76.7^\\circ$). Both paths pass through the exact same point in space. Always verify which angle the question asks for (minimum vs maximum elevation)."
    }
}
];



