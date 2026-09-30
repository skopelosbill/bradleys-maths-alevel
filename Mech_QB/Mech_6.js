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
}
];