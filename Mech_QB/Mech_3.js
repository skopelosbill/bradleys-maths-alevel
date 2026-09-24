window.ALEVEL_QUESTIONS = [
{
    "id": "012101",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "A",
    "major_area": "Forces and Newton's laws",
    "topic": "Vectors in kinematics",
    "subtopic": [
        "Newton's second law with vectors",
        "Constant acceleration in 2D"
    ],
    "img": false,
    "question": "In this question, the unit vectors $\\mathbf{i}$ and $\\mathbf{j}$ are directed horizontally due east and vertically upwards respectively.<br><br>A particle $P$ of mass $5\\text{ kg}$ is initially at rest at the point with position vector $(3\\mathbf{i} + 40\\mathbf{j})\\text{ m}$ relative to a fixed origin $O$. The particle moves under the action of its weight (taking $g = 9.8\\text{ m s}^{-2}$) and two constant applied forces:$$\\mathbf{F}_1 = (18\\mathbf{i} - 6\\mathbf{j})\\text{ N}$$$$\\mathbf{F}_2 = (-8\\mathbf{i} + 10\\mathbf{j})\\text{ N}$$<strong>(a)</strong> Find the acceleration vector of the particle.<br><br><strong>(b)</strong> Find the position vector of the particle at time $t = 6\\text{ s}$.<br><br><strong>(c)</strong> Find the speed of the particle at the instant it reaches the horizontal level of the origin.",
    "steps": [
        "<strong>(a) Find the acceleration vector:</strong><br><br>The weight acts vertically downwards ($W = mg$):\\begin{aligned} \\mathbf{W} &= -5(9.8)\\mathbf{j} \\cr &= -49\\mathbf{j}\\text{ N} \\end{aligned}Sum all forces acting on $P$:\\begin{aligned} \\Sigma\\mathbf{F} &= \\mathbf{F}_1 + \\mathbf{F}_2 + \\mathbf{W} \\cr &= (18 - 8)\\mathbf{i} \\cr &\\qquad + (-6 + 10 - 49)\\mathbf{j} \\cr &= (10\\mathbf{i} - 45\\mathbf{j})\\text{ N} \\end{aligned}Using $\\mathbf{F} = m\\mathbf{a}$ with $m = 5\\text{ kg}$:\\begin{aligned} \\mathbf{a} &= \\dfrac{10\\mathbf{i} - 45\\mathbf{j}}{5} \\cr &= (2\\mathbf{i} - 9\\mathbf{j})\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Find position vector at $t = 6\\text{ s}$:</strong><br><br>Using $\\mathbf{r} = \\mathbf{r}_0 + \\mathbf{u}t + \\dfrac{1}{2}\\mathbf{a}t^2$ with $\\mathbf{u} = \\mathbf{0}$:\\begin{aligned} \\mathbf{r}(6) &= (3\\mathbf{i} + 40\\mathbf{j}) \\cr &\\qquad + \\dfrac{1}{2}(2\\mathbf{i} - 9\\mathbf{j})(6^2) \\cr &= (3\\mathbf{i} + 40\\mathbf{j}) \\cr &\\qquad + 18(2\\mathbf{i} - 9\\mathbf{j}) \\cr &= (3 + 36)\\mathbf{i} \\cr &\\qquad + (40 - 162)\\mathbf{j} \\cr &= (39\\mathbf{i} - 122\\mathbf{j})\\text{ m} \\end{aligned}",
        "<strong>(c) Find speed at horizontal level of the origin:</strong><br><br>The particle reaches the level of the origin when the vertical displacement is zero ($y = 0$):\\begin{aligned} &40 - 4.5t^2 = 0 \\cr &4.5t^2 = 40 \\cr &t^2 = \\dfrac{80}{9} \\cr &t = \\dfrac{\\sqrt{80}}{3}\\text{ s} \\end{aligned}The velocity vector at this time is $\\mathbf{v} = \\mathbf{a}t$:\\begin{aligned} \\mathbf{v} &= t(2\\mathbf{i} - 9\\mathbf{j}) \\end{aligned}Calculate speed $|\\mathbf{v}|$:\\begin{aligned} |\\mathbf{v}| &= t\\sqrt{2^2 + (-9)^2} \\cr &= \\dfrac{\\sqrt{80}}{3}\\sqrt{85} \\cr &= \\dfrac{\\sqrt{6800}}{3} \\cr &= \\dfrac{20\\sqrt{17}}{3} \\cr &\\approx 27.5\\text{ m s}^{-1} \\end{aligned}",
        "Final Answer: (a) $(2\\mathbf{i} - 9\\mathbf{j})\\text{ m s}^{-2}$, (b) $(39\\mathbf{i} - 122\\mathbf{j})\\text{ m}$, (c) $27.5\\text{ m s}^{-1}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $(2\\mathbf{i} + 0.8\\mathbf{j})\\text{ m s}^{-2}$, (b) $(39\\mathbf{i} + 54.4\\mathbf{j})\\text{ m}$, (c) $27.5\\text{ m s}^{-1}$",
            "feedback": "This error occurs if you forget to include the weight of the particle ($-mg\\mathbf{j}$) when resolving vertical forces. Always include gravity when motion takes place in a vertical plane."
        },
        {
            "ans": "(a) $(2\\mathbf{i} - 9\\mathbf{j})\\text{ m s}^{-2}$, (b) $(39\\mathbf{i} - 122\\mathbf{j})\\text{ m}$, (c) $18.4\\text{ m s}^{-1}$",
            "feedback": "This speed error occurs if you only evaluate the vertical velocity component ($v_y$) instead of finding the full magnitude $\\sqrt{v_x^2 + v_y^2}$ using both components."
        },
        {
            "ans": "(a) $(2\\mathbf{i} - 10.8\\mathbf{j})\\text{ m s}^{-2}$, (b) $(39\\mathbf{i} - 154.4\\mathbf{j})\\text{ m}$, (c) $30.2\\text{ m s}^{-1}$",
            "feedback": "This acceleration error arises from subtracting $54$ instead of $49$ when combining vertical force components. Ensure you compute $mg = 5(9.8) = 49\\text{ N}$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Vertical Planes and Weight",
        "content": "When a question specifies that unit vector $\\mathbf{j}$ is directed 'vertically upwards', gravity acts in the negative $\\mathbf{j}$ direction as $-mg\\mathbf{j}$. Forgetting to include this weight vector in the resultant force $\\Sigma\\mathbf{F}$ is one of the most common pitfalls in 2D mechanics."
    }
},
{
    "id": "012102",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Motion in 2 dimensions",
    "subtopic": [
        "2D vector kinematics",
        "Directional motion and bearings"
    ],
    "img": false,
    "question": "In this question, the unit vectors $\\mathbf{i}$ and $\\mathbf{j}$ are directed horizontally due east and vertically upwards respectively.<br><br>A small drone of mass $2\\text{ kg}$ is launched from the origin $O$ with an initial velocity $\\mathbf{u} = (4\\mathbf{i} + 25\\mathbf{j})\\text{ m s}^{-1}$. The drone moves under the action of gravity (taking $g = 9.8\\text{ m s}^{-2}$) and a constant engine thrust force $\\mathbf{F} = (6\\mathbf{i} + 9.6\\mathbf{j})\\text{ N}$.<br><br><strong>(a)</strong> Show that the acceleration vector of the drone is $(3\\mathbf{i} - 5\\mathbf{j})\\text{ m s}^{-2}$.<br><br><strong>(b)</strong> Find the time $T$ seconds at which the drone is momentarily travelling in a purely horizontal direction.<br><br><strong>(c)</strong> Find the position vector of the drone at time $t = T\\text{ s}$.<br><br><strong>(d)</strong> Calculate the bearing on which the drone is travelling at time $t = 7\\text{ s}$, giving your answer to the nearest degree.",
    "steps": [
        "<strong>(a) Show acceleration is $(3\\mathbf{i} - 5\\mathbf{j})\\text{ m s}^{-2}$:</strong><br><br>The forces acting on the drone are thrust $\\mathbf{F}$ and weight $\\mathbf{W} = -mg\\mathbf{j}$:\\begin{aligned} \\mathbf{W} &= -2(9.8)\\mathbf{j} \\cr &= -19.6\\mathbf{j}\\text{ N} \\end{aligned}Sum of forces:\\begin{aligned} \\Sigma\\mathbf{F} &= (6\\mathbf{i} + 9.6\\mathbf{j}) - 19.6\\mathbf{j} \\cr &= (6\\mathbf{i} - 10\\mathbf{j})\\text{ N} \\end{aligned}Using $\\mathbf{a} = \\dfrac{\\Sigma\\mathbf{F}}{m}$ with $m = 2\\text{ kg}$:\\begin{aligned} \\mathbf{a} &= \\dfrac{6\\mathbf{i} - 10\\mathbf{j}}{2} \\cr &= (3\\mathbf{i} - 5\\mathbf{j})\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Find time $T$ when travelling horizontally:</strong><br><br>Purely horizontal motion requires vertical velocity $v_y = 0$:\\begin{aligned} &25 - 5T = 0 \\cr &5T = 25 \\cr &T = 5\\text{ s} \\end{aligned}",
        "<strong>(c) Find position vector at $t = 5\\text{ s}$:</strong><br><br>Using $\\mathbf{r} = \\mathbf{u}t + \\dfrac{1}{2}\\mathbf{a}t^2$ with $t = 5\\text{ s}$:\\begin{aligned} \\mathbf{r}(5) &= (4\\mathbf{i} + 25\\mathbf{j})(5) \\cr &\\qquad + \\dfrac{1}{2}(3\\mathbf{i} - 5\\mathbf{j})(5^2) \\cr &= (20\\mathbf{i} + 125\\mathbf{j}) \\cr &\\qquad + 12.5(3\\mathbf{i} - 5\\mathbf{j}) \\cr &= (20 + 37.5)\\mathbf{i} \\cr &\\qquad + (125 - 62.5)\\mathbf{j} \\cr &= (57.5\\mathbf{i} + 62.5\\mathbf{j})\\text{ m} \\end{aligned}",
        "<strong>(d) Calculate bearing at $t = 7\\text{ s}$:</strong><br><br>Find the velocity vector at $t = 7\\text{ s}$ using $\\mathbf{v} = \\mathbf{u} + \\mathbf{a}t$:\\begin{aligned} \\mathbf{v}(7) &= (4\\mathbf{i} + 25\\mathbf{j}) + 7(3\\mathbf{i} - 5\\mathbf{j}) \\cr &= (4 + 21)\\mathbf{i} + (25 - 35)\\mathbf{j} \\cr &= (25\\mathbf{i} - 10\\mathbf{j})\\text{ m s}^{-1} \\end{aligned}The velocity vector has positive East component ($25$) and negative North component (South component $10$).<br><br>Find angle $\\alpha$ East of South:\\begin{aligned} \\tan\\alpha &= \\dfrac{25}{10} \\cr &= 2.5 \\cr \\alpha &= \\arctan(2.5) \\cr &\\approx 68.2^{\\circ} \\end{aligned}Calculate bearing clockwise from North:\\begin{aligned} \\text{Bearing} &= 180^{\\circ} - 68.2^{\\circ} \\cr &= 111.8^{\\circ} \\cr &\\approx 112^{\\circ} \\end{aligned}",
        "Final Answer: (b) $T = 5\\text{ s}$, (c) $(57.5\\mathbf{i} + 62.5\\mathbf{j})\\text{ m}$, (d) $112^{\\circ}$"
    ],
    "pi_options": [
        {
            "ans": "(b) $T = 5\\text{ s}$, (c) $(57.5\\mathbf{i} + 62.5\\mathbf{j})\\text{ m}$, (d) $068^{\\circ}$",
            "feedback": "This bearing error occurs if you measure the angle directly from North rather than identifying that the velocity vector points into the south-east quadrant (East $25$, South $10$)."
        },
        {
            "ans": "(b) $T = 2.5\\text{ s}$, (c) $(19.4\\mathbf{i} + 46.9\\mathbf{j})\\text{ m}$, (d) $112^{\\circ}$",
            "feedback": "This time error occurs if you set the horizontal velocity component to zero ($4 - 3t = 0$) instead of the vertical component ($25 - 5t = 0$). Purely horizontal motion means the vertical velocity is zero."
        },
        {
            "ans": "(b) $T = 5\\text{ s}$, (c) $(20\\mathbf{i} + 125\\mathbf{j})\\text{ m}$, (d) $112^{\\circ}$",
            "feedback": "This position vector is missing the acceleration displacement term $\\dfrac{1}{2}\\mathbf{a}t^2$, calculating only the linear motion $\\mathbf{u}t$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Bearings from Vector Components",
        "content": "Always sketch the velocity components before calculating a bearing. With velocity $\\mathbf{v} = 25\\mathbf{i} - 10\\mathbf{j}$, the motion is East and South (4th quadrant). Calculating $\\arctan(25/10) \\approx 68.2^{\\circ}$ gives the angle measured East from the South axis, meaning the true bearing from North is $180^{\\circ} - 68.2^{\\circ} = 111.8^{\\circ} \\approx 112^{\\circ}$."
    }
},
{
    "id": "012103",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "A",
    "major_area": "Forces and Newton's laws",
    "topic": "Forces in 2 dimensions",
    "subtopic": [
        "Newton's second law with vectors",
        "Unknown force components",
        "Constant acceleration"
    ],
    "img": false,
    "question": "In this question, the horizontal unit vectors $\\mathbf{i}$ and $\\mathbf{j}$ are directed due east and due north respectively.<br><br>A sledge of mass $8\\text{ kg}$ moves on a smooth horizontal sheet of ice. The sledge is acted on by three horizontal forces:$$\\mathbf{F}_1 = (p\\mathbf{i} + 14\\mathbf{j})\\text{ N}$$$$\\mathbf{F}_2 = (6\\mathbf{i} + q\\mathbf{j})\\text{ N}$$$$\\mathbf{F}_3 = (-2\\mathbf{i} - 5\\mathbf{j})\\text{ N}$$where $p$ and $q$ are constants.<br><br>The resultant force acting on the sledge causes it to accelerate from rest in the direction of the vector $3\\mathbf{i} + 4\\mathbf{j}$ with an acceleration of magnitude $2.5\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Find the resultant force vector acting on the sledge.<br><br><strong>(b)</strong> Hence, determine the value of $p$ and the value of $q$.<br><br><strong>(c)</strong> Find the exact distance travelled by the sledge during the first $6\\text{ seconds}$ of motion.",
    "steps": [
        "<strong>(a) Find the resultant force vector:</strong><br><br>Find the unit vector in the direction of $3\\mathbf{i} + 4\\mathbf{j}$:\\begin{aligned} |3\\mathbf{i} + 4\\mathbf{j}| &= \\sqrt{3^2 + 4^2} \\cr &= 5 \\cr \\hat{\\mathbf{a}} &= \\dfrac{3\\mathbf{i} + 4\\mathbf{j}}{5} \\cr &= 0.6\\mathbf{i} + 0.8\\mathbf{j} \\end{aligned}Acceleration vector has magnitude $2.5\\text{ m s}^{-2}$:\\begin{aligned} \\mathbf{a} &= 2.5(0.6\\mathbf{i} + 0.8\\mathbf{j}) \\cr &= (1.5\\mathbf{i} + 2\\mathbf{j})\\text{ m s}^{-2} \\end{aligned}Resultant force $\\mathbf{R} = m\\mathbf{a}$ with $m = 8\\text{ kg}$:\\begin{aligned} \\mathbf{R} &= 8(1.5\\mathbf{i} + 2\\mathbf{j}) \\cr &= (12\\mathbf{i} + 16\\mathbf{j})\\text{ N} \\end{aligned}",
        "<strong>(b) Determine the values of $p$ and $q$:</strong><br><br>Sum the three applied forces:\\begin{aligned} \\Sigma\\mathbf{F} &= \\mathbf{F}_1 + \\mathbf{F}_2 + \\mathbf{F}_3 \\cr &= (p + 6 - 2)\\mathbf{i} \\cr &\\qquad + (14 + q - 5)\\mathbf{j} \\cr &= (p + 4)\\mathbf{i} + (q + 9)\\mathbf{j} \\end{aligned}Equate components to resultant $\\mathbf{R} = 12\\mathbf{i} + 16\\mathbf{j}$:\\begin{aligned} &p + 4 = 12 \\cr &p = 8 \\end{aligned}For vertical components:\\begin{aligned} &q + 9 = 16 \\cr &q = 7 \\end{aligned}",
        "<strong>(c) Find the distance travelled in $6\\text{ s}$:</strong><br><br>Since the sledge accelerates from rest ($u = 0$) with constant acceleration magnitude $a = 2.5\\text{ m s}^{-2}$:\\begin{aligned} s &= ut + \\dfrac{1}{2}at^2 \\cr &= 0 + \\dfrac{1}{2}(2.5)(6^2) \\cr &= 1.25 \\times 36 \\cr &= 45\\text{ m} \\end{aligned}",
        "Final Answer: (a) $(12\\mathbf{i} + 16\\mathbf{j})\\text{ N}$, (b) $p = 8, q = 7$, (c) $45\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $(12\\mathbf{i} + 16\\mathbf{j})\\text{ N}$, (b) $p = 10, q = 12$, (c) $45\\text{ m}$",
            "feedback": "This error occurs if you make an algebraic sign slip when combining the component forces, adding rather than subtracting the components of $\\mathbf{F}_3 = -2\\mathbf{i} - 5\\mathbf{j}$."
        },
        {
            "ans": "(a) $(1.5\\mathbf{i} + 2\\mathbf{j})\\text{ N}$, (b) $p = -2.5, q = -7$, (c) $45\\text{ m}$",
            "feedback": "This mistake occurs if you forget to multiply the acceleration vector by the mass ($m = 8\\text{ kg}$), equating the force vector directly to the acceleration vector."
        },
        {
            "ans": "(a) $(12\\mathbf{i} + 16\\mathbf{j})\\text{ N}$, (b) $p = 8, q = 7$, (c) $90\\text{ m}$",
            "feedback": "This distance error arises from omitting the factor of $\\dfrac{1}{2}$ in the SUVAT distance formula, calculating $at^2$ instead of $\\dfrac{1}{2}at^2$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Direction Vectors and Unit Scaling",
        "content": "When given a direction as an un-normalized vector like $3\\mathbf{i} + 4\\mathbf{j}$ along with a magnitude ($2.5\\text{ m s}^{-2}$), you must convert the direction vector into a unit vector first by dividing by its magnitude ($\\sqrt{3^2+4^2}=5$). Multiplying the magnitude directly by the raw direction vector would scale your acceleration by a factor of 5."
    }
},
{
    "id": "012104",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Variable acceleration",
    "subtopic": [
        "Variable force with vectors",
        "Integration in kinematics",
        "Kinetic energy"
    ],
    "img": false,
    "question": "A particle of mass $0.5\\text{ kg}$ moves in a horizontal plane. At time $t$ seconds ($t \\ge 0$), the particle is acted upon by a single resultant horizontal force $\\mathbf{F}\\text{ N}$ given by:$$\\mathbf{F} = (6t - 4)\\mathbf{i} + (12 - 9t^2)\\mathbf{j}$$At time $t = 0$, the particle has velocity $\\mathbf{u} = (2\\mathbf{i} - 6\\mathbf{j})\\text{ m s}^{-1}$ and is located at the origin $O$.<br><br><strong>(a)</strong> Find the acceleration vector of the particle at time $t$ seconds.<br><br><strong>(b)</strong> Find an expression for the velocity vector $\\mathbf{v}\\text{ m s}^{-1}$ of the particle at time $t$ seconds.<br><br><strong>(c)</strong> Find the kinetic energy of the particle at the instant $t = 2\\text{ s}$.<br><br><strong>(d)</strong> Find the position vector of the particle when $t = 3\\text{ s}$."
    ,
    "steps": [
        "<strong>(a) Find the acceleration vector:</strong><br><br>Using Newton's second law $\\mathbf{a} = \\dfrac{\\mathbf{F}}{m}$ with $m = 0.5\\text{ kg}$:\\begin{aligned} \\mathbf{a}(t) &= \\dfrac{(6t - 4)\\mathbf{i} + (12 - 9t^2)\\mathbf{j}}{0.5} \\cr &= (12t - 8)\\mathbf{i} \\cr &\\qquad + (24 - 18t^2)\\mathbf{j}\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Find the velocity vector $\\mathbf{v}(t)$:</strong><br><br>Integrate acceleration with respect to time $t$:\\begin{aligned} \\mathbf{v}(t) &= \\int \\mathbf{a}\\text{d}t \\cr &= (6t^2 - 8t)\\mathbf{i} \\cr &\\qquad + (24t - 6t^3)\\mathbf{j} + \\mathbf{C} \\end{aligned}Since $\\mathbf{v}(0) = 2\\mathbf{i} - 6\\mathbf{j}$, we have $\\mathbf{C} = 2\\mathbf{i} - 6\\mathbf{j}$:\\begin{aligned} \\mathbf{v}(t) &= (6t^2 - 8t + 2)\\mathbf{i} \\cr &\\qquad + (24t - 6t^3 - 6)\\mathbf{j}\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(c) Find kinetic energy at $t = 2\\text{ s}$:</strong><br><br>Evaluate velocity at $t = 2\\text{ s}$:\\begin{aligned} \\mathbf{v}(2) &= (6(2^2) - 8(2) + 2)\\mathbf{i} \\cr &\\qquad + (24(2) - 6(2^3) - 6)\\mathbf{j} \\cr &= (10\\mathbf{i} - 6\\mathbf{j})\\text{ m s}^{-1} \\end{aligned}Calculate speed squared $v^2$:\\begin{aligned} v^2 &= 10^2 + (-6)^2 \\cr &= 100 + 36 \\cr &= 136 \\end{aligned}Calculate kinetic energy ($\\text{KE} = \\dfrac{1}{2}mv^2$):\\begin{aligned} \\text{KE} &= \\dfrac{1}{2}(0.5)(136) \\cr &= 34\\text{ J} \\end{aligned}",
        "<strong>(d) Find position vector at $t = 3\\text{ s}$:</strong><br><br>Integrate velocity to find position $\\mathbf{r}(t)$:\\begin{aligned} \\mathbf{r}(t) &= \\int \\mathbf{v}\\text{d}t \\cr &= (2t^3 - 4t^2 + 2t)\\mathbf{i} \\cr &\\qquad + (12t^2 - 1.5t^4 - 6t)\\mathbf{j} + \\mathbf{D} \\end{aligned}Since $P$ starts at the origin $O$, $\\mathbf{r}(0) = \\mathbf{0}$, giving $\\mathbf{D} = \\mathbf{0}$.<br><br>At $t = 3\\text{ s}$:\\begin{aligned} \\mathbf{r}(3) &= (2(27) - 4(9) + 2(3))\\mathbf{i} \\cr &\\qquad + (12(9) - 1.5(81) - 6(3))\\mathbf{j} \\cr &= (54 - 36 + 6)\\mathbf{i} \\cr &\\qquad + (108 - 121.5 - 18)\\mathbf{j} \\cr &= (24\\mathbf{i} - 31.5\\mathbf{j})\\text{ m} \\end{aligned}",
        "Final Answer: (a) $(12t - 8)\\mathbf{i} + (24 - 18t^2)\\mathbf{j}$, (b) $(6t^2 - 8t + 2)\\mathbf{i} + (24t - 6t^3 - 6)\\mathbf{j}$, (c) $34\\text{ J}$, (d) $(24\\mathbf{i} - 31.5\\mathbf{j})\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $(12t - 8)\\mathbf{i} + (24 - 18t^2)\\mathbf{j}$, (b) $(6t^2 - 8t + 2)\\mathbf{i} + (24t - 6t^3 - 6)\\mathbf{j}$, (c) $68\\text{ J}$, (d) $(24\\mathbf{i} - 31.5\\mathbf{j})\\text{ m}$",
            "feedback": "This kinetic energy error occurs if you forget the factor of $\\dfrac{1}{2}$ in $\\text{KE} = \\dfrac{1}{2}mv^2$, calculating $mv^2$ instead."
        },
        {
            "ans": "(a) $(3t - 2)\\mathbf{i} + (6 - 4.5t^2)\\mathbf{j}$, (b) $(1.5t^2 - 2t + 2)\\mathbf{i} + (6t - 1.5t^3 - 6)\\mathbf{j}$, (c) $8.5\\text{ J}$, (d) $(6\\mathbf{i} - 7.875\\mathbf{j})\\text{ m}$",
            "feedback": "This error occurs if you multiply by the mass $0.5\\text{ kg}$ instead of dividing by it when calculating acceleration from force, using $\\mathbf{a} = m\\mathbf{F}$ instead of $\\mathbf{a} = \\dfrac{\\mathbf{F}}{m}$."
        },
        {
            "ans": "(a) $(12t - 8)\\mathbf{i} + (24 - 18t^2)\\mathbf{j}$, (b) $(6t^2 - 8t)\\mathbf{i} + (24t - 6t^3)\\mathbf{j}$, (c) $25\\text{ J}$, (d) $(18\\mathbf{i} - 13.5\\mathbf{j})\\text{ m}$",
            "feedback": "This occurs if you omit the constant of integration $\\mathbf{u} = 2\\mathbf{i} - 6\\mathbf{j}$ when integrating acceleration to find velocity, neglecting the initial velocity condition at $t = 0$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Tracking Constants of Integration",
        "content": "When integrating vector acceleration $\\mathbf{a}(t)$ to find velocity, never omit the constant vector $\\mathbf{C}$. The initial velocity condition at $t = 0$ provides this constant: $\\mathbf{C} = \\mathbf{u} = 2\\mathbf{i} - 6\\mathbf{j}$. Dropping this term will propagate errors into both the kinetic energy and displacement evaluations."
    }
},
{
    "id": "012105",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Motion in 2 dimensions",
    "subtopic": [
        "Relative motion",
        "Vector kinematics",
        "Interception and collision"
    ],
    "img": false,
    "question": "In this question, the horizontal unit vectors $\\mathbf{i}$ and $\\mathbf{j}$ represent displacements of $1\\text{ m}$ due east and $1\\text{ m}$ due north respectively.<br><br>Two radio-controlled cars, $A$ and $B$, move on a flat horizontal playground:<br><br>• Car $A$ has a mass of $2\\text{ kg}$ and starts from the point with position vector $(15\\mathbf{i} + 5\\mathbf{j})\\text{ m}$ at $t = 0$. It moves with a constant velocity $(2\\mathbf{i} + 4\\mathbf{j})\\text{ m s}^{-1}$.<br><br>• Car $B$ has a mass of $3\\text{ kg}$ and starts from rest at the origin $O$ at $t = 0$. It is propelled by a constant horizontal resultant force $\\mathbf{F} = (6\\mathbf{i} + 6\\mathbf{j})\\text{ N}$.<br><br><strong>(a)</strong> Show that the acceleration vector of car $B$ is $(2\\mathbf{i} + 2\\mathbf{j})\\text{ m s}^{-2}$.<br><br><strong>(b)</strong> Find expressions for the position vectors $\\mathbf{r}_A$ and $\\mathbf{r}_B$ of each car at time $t$ seconds.<br><br><strong>(c)</strong> Show that the displacement vector from $B$ to $A$ at time $t$ seconds is:$$\\mathbf{r}_{BA} = (15 + 2t - t^2)\\mathbf{i} + (5 + 4t - t^2)\\mathbf{j}$$<strong>(d)</strong> Show that the two cars collide, and find the coordinates of the collision point.",
    "steps": [
        "<strong>(a) Show acceleration of $B$ is $(2\\mathbf{i} + 2\\mathbf{j})\\text{ m s}^{-2}$:</strong><br><br>Using $\\mathbf{a} = \\dfrac{\\mathbf{F}}{m}$ with $\\mathbf{F} = 6\\mathbf{i} + 6\\mathbf{j}$ and $m = 3\\text{ kg}$:\\begin{aligned} \\mathbf{a}_B &= \\dfrac{6\\mathbf{i} + 6\\mathbf{j}}{3} \\cr &= (2\\mathbf{i} + 2\\mathbf{j})\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Find position vectors $\\mathbf{r}_A$ and $\\mathbf{r}_B$:</strong><br><br>Car $A$ moves with constant velocity from $(15\\mathbf{i} + 5\\mathbf{j})\\text{ m}$:\\begin{aligned} \\mathbf{r}_A &= (15\\mathbf{i} + 5\\mathbf{j}) + t(2\\mathbf{i} + 4\\mathbf{j}) \\cr &= (15 + 2t)\\mathbf{i} + (5 + 4t)\\mathbf{j} \\end{aligned}Car $B$ starts from rest at the origin with constant acceleration:\\begin{aligned} \\mathbf{r}_B &= \\dfrac{1}{2}(2\\mathbf{i} + 2\\mathbf{j})t^2 \\cr &= t^2\\mathbf{i} + t^2\\mathbf{j} \\end{aligned}",
        "<strong>(c) Show displacement vector $\\mathbf{r}_{BA}$:</strong><br><br>Displacement from $B$ to $A$ is $\\mathbf{r}_A - \\mathbf{r}_B$:\\begin{aligned} \\mathbf{r}_{BA} &= \\mathbf{r}_A - \\mathbf{r}_B \\cr &= \\big[(15 + 2t)\\mathbf{i} + (5 + 4t)\\mathbf{j}\\big] \\cr &\\qquad - (t^2\\mathbf{i} + t^2\\mathbf{j}) \\cr &= (15 + 2t - t^2)\\mathbf{i} \\cr &\\qquad + (5 + 4t - t^2)\\mathbf{j} \\end{aligned}",
        "<strong>(d) Show cars collide and find collision coordinates:</strong><br><br>A collision occurs when $\\mathbf{r}_{BA} = \\mathbf{0}$, meaning both components are simultaneously zero.<br><br>For the horizontal component:\\begin{aligned} &15 + 2t - t^2 = 0 \\cr &t^2 - 2t - 15 = 0 \\cr &(t - 5)(t + 3) = 0 \\end{aligned}Since $t \\ge 0$, the valid root is $t = 5\\text{ s}$.<br><br>For the vertical component:\\begin{aligned} &5 + 4t - t^2 = 0 \\cr &t^2 - 4t - 5 = 0 \\cr &(t - 5)(t + 1) = 0 \\end{aligned}Since $t \\ge 0$, the valid root is $t = 5\\text{ s}$.<br><br>Since $t = 5\\text{ s}$ satisfies both equations simultaneously, the cars collide at $t = 5\\text{ s}$.<br><br>Find collision coordinates at $t = 5\\text{ s}$:\\begin{aligned} \\mathbf{r}(5) &= 5^2\\mathbf{i} + 5^2\\mathbf{j} \\cr &= (25\\mathbf{i} + 25\\mathbf{j})\\text{ m} \\end{aligned}The coordinates of the collision point are $(25, 25)$.",
        "Final Answer: (d) $t = 5\\text{ s}$, coordinates $(25, 25)$"
    ],
    "pi_options": [
        {
            "ans": "(d) $t = 5\\text{ s}$, coordinates $(20, 25)$",
            "feedback": "This coordinates error arises if you evaluate the position vector of Car $A$ using the wrong initial position or miscalculating $15 + 2(5) = 25$ as $20$."
        },
        {
            "ans": "(d) $t = 3\\text{ s}$, coordinates $(21, 17)$",
            "feedback": "This occurs if you take the extraneous root from the horizontal equation ($t = -3$) and treat it as positive $3\\text{ s}$, which does not satisfy the vertical position equation."
        },
        {
            "ans": "(d) $t = 1\\text{ s}$, coordinates $(17, 9)$",
            "feedback": "This mistake occurs if you take the negative root from the vertical quadratic factor $(t + 1)$ and treat it as $t = 1\\text{ s}$, where the positions of the two cars are not equal."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: True Collisions Require Simultaneous Equivalence",
        "content": "To prove that two moving bodies collide in 2D, finding a value of $t$ that makes the horizontal distance zero is not enough. You must show that the exact same value of $t$ also reduces the vertical separation to zero simultaneously. If they match at different times, their paths cross, but they do not collide."
    }
},
{
    "id": "012106",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "A",
    "major_area": "Statics and Moments",
    "topic": "Rigid Bodies in Equilibrium",
    "subtopic": [
        "Parallel Forces",
        "Tilting",
        "Modelling Assumptions"
    ],
    "img": "images/Mechanics_pngs/012106.png",
    "question": "The diagram shows a uniform wooden plank $AB$ of weight $120\\text{ N}$ and length $6\\text{ m}$. The plank rests horizontally in equilibrium on two smooth supports at $C$ and $D$, where $AC = x\\text{ m}$ and $CD = 1.5\\text{ m}$. The support at $C$ lies between $A$ and the centre of the plank, and the support at $D$ lies between the centre of the plank and $B$.<br><br>The magnitude of the normal reaction exerted by the support on the plank at $C$ is $80\\text{ N}$.<br><br>The plank is modelled as a uniform rigid rod.<br><br><strong>(a)</strong> Find the magnitude of the normal reaction exerted by the support on the plank at $D$.<br><br><strong>(b)</strong> Find the value of $x$.<br><br>A concrete block, modelled as a particle, is now placed on the plank at end $B$. The plank is on the point of tilting about $D$.<br><br><strong>(c)</strong> Calculate the weight of the concrete block.<br><br><strong>(d)(i)</strong> State one assumption made when modelling the concrete block as a particle.<br><strong>(ii)</strong> Explain how this assumption was used in your calculation in part <strong>(c)</strong>.",
    "steps": [
        "<strong>(a) Reaction at $D$:</strong><br><br>Since the plank is in vertical equilibrium, the sum of the upward normal reactions equals the total downward weight:\\begin{aligned} &R_C + R_D = 120 \\cr &80 + R_D = 120 \\cr &R_D = 40\\text{ N} \\end{aligned}",
        "<strong>(b) Finding the distance $x$:</strong><br><br>The plank is uniform, so its weight of $120\\text{ N}$ acts at its midpoint, $3\\text{ m}$ from $A$.<br><br>Support $C$ is at distance $x$ from $A$, and support $D$ is at distance $(x + 1.5)\\text{ m}$ from $A$.<br><br>Taking moments about $A$:\\begin{aligned} &R_C(x) + R_D(x + 1.5) = 120(3) \\cr &80x + 40(x + 1.5) = 360 \\cr &80x + 40x + 60 = 360 \\cr &120x + 60 = 360 \\cr &120x = 300 \\cr &x = 2.5\\text{ m} \\end{aligned}",
        "<strong>(c) Tilting about support $D$:</strong><br><br>When the plank is on the point of tilting about $D$, it begins to lift off support $C$. Therefore, the normal reaction at $C$ is zero:\\begin{aligned} R_C = 0\\text{ N} \\end{aligned}<br><br>Support $D$ is at distance $x + 1.5 = 2.5 + 1.5 = 4\\text{ m}$ from $A$.<br><br>The distance from $D$ to the midpoint is:\\begin{aligned} 4 - 3 = 1\\text{ m} \\end{aligned}<br><br>The distance from $D$ to end $B$ is:\\begin{aligned} 6 - 4 = 2\\text{ m} \\end{aligned}<br><br>Taking moments about $D$ for rotational equilibrium:\\begin{aligned} &120(1) = W_{\\text{block}}(2) \\cr &2W_{\\text{block}} = 120 \\cr &W_{\\text{block}} = 60\\text{ N} \\end{aligned}",
        "<strong>(d) Modelling assumption and application:</strong><br><br><strong>(i)</strong> Modelling the concrete block as a particle assumes that its dimensions are negligible and that its entire weight acts at a single point exactly at end $B$.<br><br><strong>(ii)</strong> In the calculation in part <strong>(c)</strong>, this allowed the perpendicular distance from the pivot $D$ to the line of action of the block's weight to be taken as exactly $6 - 4 = 2\\text{ m}$.",
        "Final Answer: (a) $40\\text{ N}$, (b) $x = 2.5$, (c) $60\\text{ N}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $40\\text{ N}$, (b) $x = 2.0$, (c) $60\\text{ N}$",
            "feedback": "Incorrect value for $x$. Check the moment equation about $A$; remember that support $D$ is at $(x + 1.5)\\text{ m}$ from $A$, so $40(x + 1.5)$ expands to $40x + 60$."
        },
        {
            "ans": "(a) $40\\text{ N}$, (b) $x = 2.5$, (c) $120\\text{ N}$",
            "feedback": "Incorrect weight for the block. In part (c), the pivot is at $D$ ($4\\text{ m}$ from $A$). The distance to the midpoint is $1\\text{ m}$ and the distance to $B$ is $2\\text{ m}$, giving $2W = 120(1)$."
        },
        {
            "ans": "(a) $80\\text{ N}$, (b) $x = 2.5$, (c) $30\\text{ N}$",
            "feedback": "Incorrect reaction at $D$. Total weight is $120\\text{ N}$, so $R_D = 120 - 80 = 40\\text{ N}$, not $80\\text{ N}$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Identifying the Tilting Pivot",
        "content": "When a rigid body is on the point of tilting about a support, always immediately set the reaction at every other support to zero. A common exam error is continuing to include $R_C = 80\\text{ N}$ in the moment equation for part <strong>(c)</strong>, which causes an algebraic contradiction. Also, remember that modelling a mass as a particle means its weight acts at a single point, fixing the moment arm without having to consider the block's width."
    }
},
{
    "id": "012107",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "A",
    "major_area": "Statics and Moments",
    "topic": "Rigid Bodies in Equilibrium",
    "subtopic": [
        "Non-Uniform Rods",
        "Centre of Mass",
        "Dual Tilting"
    ],
    "img": "images/Mechanics_pngs/012107.png",
    "question": "The diagram shows a non-uniform metal girder $AB$ of length $6\\text{ m}$ and weight $W\\text{ N}$. The girder rests horizontally in equilibrium on two smooth supports at $C$ and $D$, where $AC = 1\\text{ m}$ and $DB = 1\\text{ m}$.<br><br>When a vertical load of $90\\text{ N}$ is suspended from end $A$, the girder is on the point of tilting about $C$.<br><br>When instead the load of $90\\text{ N}$ is removed and a vertical load of $150\\text{ N}$ is suspended from end $B$, the girder is on the point of tilting about $D$.<br><br>The girder is modelled as a rigid rod.<br><br><strong>(a)</strong> Find the weight $W$ of the girder.<br><br><strong>(b)</strong> Find the distance of the centre of mass of the girder from end $A$.<br><br><strong>(c)</strong> When no additional loads are attached, find the magnitude of the normal reaction exerted by support $C$ on the girder.",
    "steps": [
        "<strong>(a) & (b) Setting up dual tilting equations:</strong><br><br>Let the centre of mass of the girder be at distance $\\bar{x}\\text{ m}$ from $A$.<br><br>The supports are located at $C$ ($1\\text{ m}$ from $A$) and $D$ ($6 - 1 = 5\\text{ m}$ from $A$).<br><br><strong>Condition 1:</strong> When $90\\text{ N}$ is at $A$, the girder tilts about $C$, so $R_D = 0$. Taking moments about $C$:\\begin{aligned} &90(1) = W(\\bar{x} - 1) \\cr &W\\bar{x} - W = 90 \\quad \\text{--- [Eq 1]} \\end{aligned}",
        "<strong>Condition 2 and solving simultaneously:</strong><br><br>When $150\\text{ N}$ is at $B$, the girder tilts about $D$, so $R_C = 0$. Taking moments about $D$:\\begin{aligned} &W(5 - \\bar{x}) = 150(1) \\cr &5W - W\\bar{x} = 150 \\quad \\text{--- [Eq 2]} \\end{aligned}<br><br>Adding [Eq 1] and [Eq 2] eliminates the non-linear product $W\\bar{x}$:\\begin{aligned} &(W\\bar{x} - W) + (5W - W\\bar{x}) \\cr &\\qquad = 90 + 150 \\cr &4W = 240 \\cr &W = 60\\text{ N} \\end{aligned}<br><br>Substituting $W = 60$ into [Eq 1]:\\begin{aligned} &60(\\bar{x} - 1) = 90 \\cr &\\bar{x} - 1 = 1.5 \\cr &\\bar{x} = 2.5\\text{ m} \\end{aligned}",
        "<strong>(c) Reaction at $C$ with no additional loads:</strong><br><br>With no extra loads, the girder of weight $60\\text{ N}$ acts at $\\bar{x} = 2.5\\text{ m}$.<br><br>Taking moments about $D$ ($5\\text{ m}$ from $A$):\\begin{aligned} &R_C(5 - 1) = W(5 - 2.5) \\cr &4R_C = 60(2.5) \\cr &4R_C = 150 \\cr &R_C = 37.5\\text{ N} \\end{aligned}",
        "Final Answer: (a) $60\\text{ N}$, (b) $2.5\\text{ m}$, (c) $37.5\\text{ N}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $60\\text{ N}$, (b) $3.0\\text{ m}$, (c) $30\\text{ N}$",
            "feedback": "Incorrect centre of mass. You have assumed the girder is uniform with centre of mass at $3.0\\text{ m}$, but the question explicitly states it is non-uniform."
        },
        {
            "ans": "(a) $80\\text{ N}$, (b) $2.5\\text{ m}$, (c) $40\\text{ N}$",
            "feedback": "Incorrect girder weight. Check the elimination step when adding the two moment equations: $5W - W = 4W$, giving $4W = 240 \\implies W = 60\\text{ N}$."
        },
        {
            "ans": "(a) $60\\text{ N}$, (b) $3.5\\text{ m}$, (c) $22.5\\text{ N}$",
            "feedback": "Incorrect centre of mass position. $\\bar{x} = 3.5\\text{ m}$ would mean the centre of mass is closer to $B$ than $A$, but the smaller tipping force at $A$ ($90\\text{ N}$ vs $150\\text{ N}$) indicates it must lie closer to $A$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Eliminating Non-Linear Products",
        "content": "In non-uniform beam problems with unknown weight $W$ and unknown centre of mass $\\bar{x}$, the moment equations contain the product $W\\bar{x}$. Rather than dividing equations or substituting messy fractions, notice that taking moments about the two supports yields $+W\\bar{x}$ in one equation and $-W\\bar{x}$ in the other. Adding the two equations immediately eliminates the product term, giving $W$ directly in one clean step."
    }
},
{
    "id": "012108",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "A",
    "major_area": "Statics and Moments",
    "topic": "Rigid Bodies in Equilibrium",
    "subtopic": [
        "Moving Loads",
        "Overhangs",
        "Range of Equilibrium"
    ],
    "img": "images/Mechanics_pngs/012108.png",
    "question": "The diagram shows a uniform scaffolding plank $AB$ of mass $50\\text{ kg}$ and length $10\\text{ m}$. The plank rests horizontally on two smooth trestles at $C$ and $D$, where $AC = 2\\text{ m}$ and $DB = 3\\text{ m}$.<br><br>A construction worker of mass $80\\text{ kg}$ stands on the plank at a distance of $x\\text{ metres}$ from end $A$. The plank is modelled as a uniform rigid rod and the worker is modelled as a particle.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Calculate the normal reaction at each trestle when the worker stands at the midpoint of the plank.<br><br><strong>(b)</strong> Find the minimum distance from $A$ to which the worker can walk towards end $A$ without the plank tilting.<br><br><strong>(c)</strong> Find the maximum distance from $A$ to which the worker can walk towards end $B$ without the plank tilting.<br><br><strong>(d)</strong> Hence state the complete range of values of $x$ for which the plank remains in horizontal equilibrium.",
    "steps": [
        "<strong>(a) Worker at the midpoint ($x = 5\\text{ m}$):</strong><br><br>The weight of the plank acts at its midpoint, $5\\text{ m}$ from $A$. When the worker is also at $x = 5\\text{ m}$, both weights act at the same point:<br><br>Total downward weight:\\begin{aligned} W_{\\text{tot}} &= (50 + 80)g \\cr &= 130(9.8) \\cr &= 1274\\text{ N} \\end{aligned}<br><br>The distance between the trestles is $CD = (10 - 3) - 2 = 5\\text{ m}$.<br><br>Taking moments about $C$:\\begin{aligned} &R_D(5) = 1274(5 - 2) \\cr &5R_D = 1274(3) \\cr &5R_D = 3822 \\cr &R_D = 764.4\\text{ N} \\end{aligned}<br><br>Resolving vertically:\\begin{aligned} R_C &= 1274 - 764.4 \\cr &= 509.6\\text{ N} \\end{aligned}<br><br>To 3 significant figures, $R_C = 510\\text{ N}$ and $R_D = 764\\text{ N}$.",
        "<strong>(b) Tilting about trestle $C$:</strong><br><br>As the worker walks towards end $A$ ($x < 2$), the plank tends to tilt about $C$, so $R_D = 0$.<br><br>Taking moments about $C$:\\begin{aligned} &80g(2 - x) = 50g(5 - 2) \\cr &80(2 - x) = 50(3) \\cr &80(2 - x) = 150 \\cr &2 - x = 1.875 \\cr &x = 0.125\\text{ m} \\end{aligned}",
        "<strong>(c) Tilting about trestle $D$:</strong><br><br>As the worker walks past trestle $D$ towards end $B$ ($x > 7$), the plank tends to tilt about $D$, so $R_C = 0$.<br><br>Taking moments about $D$ ($7\\text{ m}$ from $A$):\\begin{aligned} &80g(x - 7) = 50g(7 - 5) \\cr &80(x - 7) = 50(2) \\cr &80(x - 7) = 100 \\cr &x - 7 = 1.25 \\cr &x = 8.25\\text{ m} \\end{aligned}",
        "<strong>(d) Range of equilibrium:</strong><br><br>For the plank to remain in horizontal equilibrium without tilting about either support, $x$ must satisfy:\\begin{aligned} 0.125 \\le x \\le 8.25 \\end{aligned}",
        "Final Answer: (a) $R_C = 510\\text{ N}, R_D = 764\\text{ N}$, (b) $0.125\\text{ m}$, (c) $8.25\\text{ m}$, (d) $0.125 \\le x \\le 8.25$"
    ],
    "pi_options": [
        {
            "ans": "(a) $R_C = 764\\text{ N}, R_D = 510\\text{ N}$, (b) $0.125\\text{ m}$, (c) $8.25\\text{ m}$, (d) $0.125 \\le x \\le 8.25$",
            "feedback": "Incorrect reactions in part (a). The midpoint ($5\\text{ m}$) is closer to $D$ ($7\\text{ m}$) than to $C$ ($2\\text{ m}$), so the reaction at $D$ must be larger than at $C$ ($R_D = 764\\text{ N}, R_C = 510\\text{ N}$)."
        },
        {
            "ans": "(a) $R_C = 510\\text{ N}, R_D = 764\\text{ N}$, (b) $0.250\\text{ m}$, (c) $8.50\\text{ m}$, (d) $0.250 \\le x \\le 8.50$",
            "feedback": "Incorrect limits of motion. In parts (b) and (c), remember that the midpoint of the plank is at $5\\text{ m}$, so the distance from $C$ to the centre is $3\\text{ m}$ (giving moment $150g$) and from $D$ to the centre is $2\\text{ m}$ (giving moment $100g$)."
        },
        {
            "ans": "(a) $R_C = 510\\text{ N}, R_D = 764\\text{ N}$, (b) $0.125\\text{ m}$, (c) $8.25\\text{ m}$, (d) $0 \\le x \\le 10$",
            "feedback": "Incorrect range of equilibrium. The worker cannot walk the entire length of the plank ($0 \\le x \\le 10$) without it tilting because of the overhangs beyond both trestles."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Dividing Through by Gravity",
        "content": "Notice that in parts <strong>(b)</strong> and <strong>(c)</strong>, the factor of $g$ appears on both sides of the moment equations. Always divide through by $g$ immediately rather than multiplying out $80 \\times 9.8 = 784$ and $50 \\times 9.8 = 490$. This keeps the arithmetic simple, exact, and completely free from premature rounding errors."
    }
},
{
    "id": "012109",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "A",
    "major_area": "Statics and Moments",
    "topic": "Rigid Bodies in Equilibrium",
    "subtopic": [
        "Cables",
        "Breaking Tension",
        "Slackness Condition"
    ],
    "img": "images/Mechanics_pngs/012109.png",
    "question": "The diagram shows a uniform steel girder $AB$ of length $6\\text{ m}$ and mass $120\\text{ kg}$. The girder is suspended horizontally by two vertical, light, inextensible cables. One cable is attached to the girder at end $A$ and the second cable is attached at a point $C$, where $AC = 4\\text{ m}$.<br><br>A machine of mass $M\\text{ kg}$, modelled as a particle, is placed on the girder at end $B$.<br><br>Each cable has a maximum safe working tension of $1800\\text{ N}$ without snapping. The cables cannot support compressive forces (they become slack if tension reaches zero).<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> When $M = 0$, calculate the tension in the cable at $A$ and the tension in the cable at $C$.<br><br><strong>(b)</strong> Find the tension in the cable at $C$ at the instant when the cable at $A$ becomes slack.<br><br><strong>(c)</strong> Determine the greatest mass $M$ that can be placed at $B$ such that the girder remains in horizontal equilibrium with neither cable breaking nor becoming slack.",
    "steps": [
        "<strong>(a) Tensions when $M = 0$:</strong><br><br>Weight of the girder acts at its midpoint ($3\\text{ m}$ from $A$):\\begin{aligned} W &= 120(9.8) \\cr &= 1176\\text{ N} \\end{aligned}<br><br>Taking moments about $A$:\\begin{aligned} &T_C(4) = 1176(3) \\cr &4T_C = 3528 \\cr &T_C = 882\\text{ N} \\end{aligned}<br><br>Resolving vertically:\\begin{aligned} T_A &= 1176 - 882 \\cr &= 294\\text{ N} \\end{aligned}",
        "<strong>(b) Tension in cable $C$ when cable $A$ is slack:</strong><br><br>When cable $A$ becomes slack, $T_A = 0\\text{ N}$. The girder is on the point of tilting about $C$.<br><br>Taking moments about $C$:\\begin{aligned} &120g(4 - 3) = Mg(6 - 4) \\cr &120(1) = 2M \\cr &M = 60\\text{ kg} \\end{aligned}<br><br>Resolving vertically to find $T_C$ at this instant:\\begin{aligned} T_C &= (120 + M)g \\cr &= (120 + 60)(9.8) \\cr &= 180(9.8) \\cr &= 1764\\text{ N} \\end{aligned}",
        "<strong>(c) Greatest safe mass $M$:</strong><br><br>There are two physical constraints on the system:<br><br><strong>1. Breaking constraint:</strong> Cable $C$ snaps if $T_C > 1800\\text{ N}$:\\begin{aligned} &(120 + M)(9.8) \\le 1800 \\cr &120 + M \\le 183.67 \\cr &M \\le 63.7\\text{ kg} \\end{aligned}<br><br><strong>2. Slackness constraint:</strong> Cable $A$ goes slack if $T_A < 0\\text{ N}$, causing the girder to tilt:\\begin{aligned} M \\le 60\\text{ kg} \\end{aligned}<br><br>At $M = 60\\text{ kg}$, $T_C = 1764\\text{ N} < 1800\\text{ N}$, so cable $C$ has not snapped. If $M > 60\\text{ kg}$, cable $A$ goes slack and equilibrium is broken before cable $C$ reaches its $1800\\text{ N}$ limit.<br><br>Therefore, the greatest allowable mass is $M = 60\\text{ kg}$.",
        "Final Answer: (a) $T_A = 294\\text{ N}, T_C = 882\\text{ N}$, (b) $1764\\text{ N}$, (c) $60\\text{ kg}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $T_A = 294\\text{ N}, T_C = 882\\text{ N}$, (b) $1800\\text{ N}$, (c) $63.7\\text{ kg}$",
            "feedback": "Incorrect limiting factor in part (c). Equating $T_C = 1800\\text{ N}$ gives $M = 63.7\\text{ kg}$, but at that mass $T_A$ would be negative. Cable $A$ becomes slack at $M = 60\\text{ kg}$, which breaks equilibrium first."
        },
        {
            "ans": "(a) $T_A = 882\\text{ N}, T_C = 294\\text{ N}$, (b) $1764\\text{ N}$, (c) $60\\text{ kg}$",
            "feedback": "Incorrect initial tensions in part (a). The centre of mass ($3\\text{ m}$) is closer to $C$ ($4\\text{ m}$) than to $A$ ($0\\text{ m}$), so cable $C$ carries the larger tension ($882\\text{ N}$)."
        },
        {
            "ans": "(a) $T_A = 294\\text{ N}, T_C = 882\\text{ N}$, (b) $1176\\text{ N}$, (c) $60\\text{ kg}$",
            "feedback": "Incorrect tension in part (b). At the instant cable $A$ becomes slack, cable $C$ must support both the weight of the girder ($120g$) and the machine ($60g$), so $T_C = 180g = 1764\\text{ N}$, not $1176\\text{ N}$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Cables Cannot Push",
        "content": "A very frequent trap in suspended beam questions is assuming a cable breaks first. Many students simply equate $T_C = 1800\\text{ N}$ to find $M \\approx 63.7\\text{ kg}$. However, a cable is not a rigid strut; it cannot support a compressive (downward) thrust. Once $M$ exceeds $60\\text{ kg}$, $T_A$ would need to be negative to maintain balance, meaning cable $A$ goes slack and the girder tilts about $C$ immediately."
    }
},
{
    "id": "012110",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "A",
    "major_area": "Statics and Moments",
    "topic": "Rigid Bodies in Equilibrium",
    "subtopic": [
        "Smooth Hinge",
        "Non-Concurrent Forces",
        "Inclined Tension"
    ],
    "img": "images/Mechanics_pngs/012110.png",
    "question": "The diagram shows a uniform beam $AB$ of length $3\\text{ m}$ and mass $20\\text{ kg}$. End $A$ is attached to a vertical wall by a smooth hinge. The beam is held horizontally in equilibrium by a light inextensible wire attached to end $B$ and to a point $C$ on the wall vertically above $A$. The wire makes an angle of $30^\\circ$ with the horizontal beam.<br><br>A load of mass $15\\text{ kg}$, modelled as a particle, is suspended from the beam at a point $D$, where $AD = 2\\text{ m}$.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> By taking moments about $A$, calculate the tension in the wire.<br><br><strong>(b)</strong> Find the horizontal and vertical components of the reaction force exerted by the hinge on the beam at $A$.<br><br><strong>(c)</strong> Calculate the magnitude of the resultant reaction force exerted by the hinge at $A$, giving your answer correct to 3 significant figures.<br><br><strong>(d)</strong> Find the angle that the resultant reaction force at $A$ makes with the horizontal, giving your answer correct to the nearest $0.1^\\circ$.",
    "steps": [
        "<strong>(a) Calculating the tension in the wire:</strong><br><br>The weight of the beam is $20g = 196\\text{ N}$ acting at its midpoint ($1.5\\text{ m}$ from $A$).<br><br>The load has weight $15g = 147\\text{ N}$ acting at $D$ ($2\\text{ m}$ from $A$).<br><br>The tension $T$ acts at $B$ ($3\\text{ m}$ from $A$) at $30^\\circ$ above the horizontal. The perpendicular component of tension is $T\\sin 30^\\circ$.<br><br>Taking moments about hinge $A$:\\begin{aligned} &T\\sin 30^\\circ(3) = 20g(1.5) + 15g(2) \\cr &1.5T = 30g + 30g \\cr &1.5T = 60g \\cr &1.5T = 60(9.8) \\cr &1.5T = 588 \\cr &T = 392\\text{ N} \\end{aligned}",
        "<strong>(b) Resolving forces at hinge $A$:</strong><br><br>Let $H_A$ be the horizontal component of the reaction at $A$ (acting away from the wall) and $V_A$ be the vertical component (acting upwards).<br><br>Resolving horizontally ($\\rightarrow$):\\begin{aligned} H_A - T\\cos 30^\\circ &= 0 \\cr H_A &= 392\\cos 30^\\circ \\cr &= 392\\left(\\dfrac{\\sqrt{3}}{2}\\right) \\cr &= 196\\sqrt{3} \\cr &\\approx 339.48\\text{ N} \\end{aligned}<br><br>Resolving vertically ($\\uparrow$):\\begin{aligned} &V_A + T\\sin 30^\\circ - (20 + 15)g = 0 \\cr &V_A + 392(0.5) - 35(9.8) = 0 \\cr &V_A + 196 - 343 = 0 \\cr &V_A = 147\\text{ N} \\end{aligned}<br><br>To 3 significant figures, $H_A = 339\\text{ N}$ and $V_A = 147\\text{ N}$.",
        "<strong>(c) Magnitude of resultant reaction force:</strong><br><br>Using Pythagoras' theorem:\\begin{aligned} R_A &= \\sqrt{H_A^2 + V_A^2} \\cr &= \\sqrt{(196\\sqrt{3})^2 + 147^2} \\cr &= \\sqrt{115248 + 21609} \\cr &= \\sqrt{136857} \\cr &\\approx 370\\text{ N} \\end{aligned}",
        "<strong>(d) Direction of resultant reaction force:</strong><br><br>Let $\\phi$ be the angle the resultant makes above the horizontal:\\begin{aligned} \\tan\\phi &= \\dfrac{V_A}{H_A} \\cr &= \\dfrac{147}{339.48} \\cr &\\approx 0.4330 \\cr \\phi &= \\arctan(0.4330) \\cr &\\approx 23.4^\\circ \\end{aligned}",
        "Final Answer: (a) $392\\text{ N}$, (b) $H_A = 339\\text{ N}, V_A = 147\\text{ N}$, (c) $370\\text{ N}$, (d) $23.4^\\circ$"
    ],
    "pi_options": [
        {
            "ans": "(a) $392\\text{ N}$, (b) $H_A = 196\\text{ N}, V_A = 339\\text{ N}$, (c) $370\\text{ N}$, (d) $60.0^\\circ$",
            "feedback": "Incorrect components at the hinge. You have swapped sine and cosine when resolving: the horizontal component is $T\\cos 30^\\circ \\approx 339\\text{ N}$ and the vertical component of tension is $T\\sin 30^\\circ = 196\\text{ N}$, giving $V_A = 147\\text{ N}$."
        },
        {
            "ans": "(a) $392\\text{ N}$, (b) $H_A = 339\\text{ N}, V_A = 147\\text{ N}$, (c) $486\\text{ N}$, (d) $23.4^\\circ$",
            "feedback": "Incorrect resultant magnitude. Check your Pythagoras calculation: \\begin{aligned}R_A &= \\sqrt{339.48^2 + 147^2}\\cr & = \\sqrt{136857} \\approx 370\\text{ N}\\end{aligned} not $339.48 + 147$."
        },
        {
            "ans": "(a) $452\\text{ N}$, (b) $H_A = 392\\text{ N}, V_A = 147\\text{ N}$, (c) $419\\text{ N}$, (d) $20.6^\\circ$",
            "feedback": "Incorrect tension calculation in part (a). Remember that the perpendicular component of the tension to the beam is $T\\sin 30^\\circ$, not $T\\cos 30^\\circ$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Pivot at the Unknown Hinge",
        "content": "A smooth hinge can exert a reaction force in any direction within the vertical plane, meaning it introduces two unknowns ($H_A$ and $V_A$). By taking moments about the hinge $A$ first, both of these unknown forces have zero moment arm, allowing you to find the tension $T$ in a single equation without having to set up simultaneous equations."
    }
},
{
    "id": "012111",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "A",
    "major_area": "Statics and Moments",
    "topic": "Forces and Equilibrium",
    "subtopic": [
        "Coplanar Forces",
        "Resolving Forces",
        "Trigonometric Equilibrium"
    ],
    "img": "images/Mechanics_pngs/012111.png",
    "question": "The diagram shows three coplanar forces of magnitudes $5\\text{ N}$, $8\\text{ N}$, and $Q\\text{ N}$ acting at a point. The force of magnitude $Q\\text{ N}$ acts vertically downwards. The forces of magnitude $5\\text{ N}$ and $8\\text{ N}$ act upwards at angles of $2\\theta$ and $\\theta$ to the upward vertical, respectively.<br><br>The forces are in equilibrium.<br><br><strong>(a)</strong> Show that $\\theta = 36.9^\\circ$, correct to 3 significant figures.<br><br><strong>(b)</strong> Hence find the value of $Q$.<br><br>The force of magnitude $5\\text{ N}$ is now removed, and the force of magnitude $8\\text{ N}$ is replaced by a force of magnitude $5\\text{ N}$ acting in the same direction.<br><br><strong>(c)</strong> Find:<br><strong>(i)</strong> the magnitude of the resultant of the two remaining forces, giving your answer correct to 3 significant figures,<br><strong>(ii)</strong> the direction of the resultant of the two remaining forces, giving the angle correct to the nearest $0.1^\\circ$ below the horizontal.",
    "steps": [
        "<strong>(a) Finding the angle $\\theta$:</strong><br><br>Resolving horizontally ($\\rightarrow$):\\begin{aligned} &5\\sin 2\\theta = 8\\sin\\theta \\cr &5(2\\sin\\theta\\cos\\theta) = 8\\sin\\theta \\cr &10\\sin\\theta\\cos\\theta = 8\\sin\\theta \\end{aligned}<br><br>Since $\\theta \\ne 0^\\circ$, we divide by $\\sin\\theta$:\\begin{aligned} 10\\cos\\theta &= 8 \\cr \\cos\\theta &= 0.8 \\cr \\theta &= \\arccos(0.8) \\cr &\\approx 36.87^\\circ \\cr &= 36.9^\\circ\\text{ (3 s.f.)} \\end{aligned}",
        "<strong>(b) Finding the vertical force $Q$:</strong><br><br>Using the double angle identity for cosine:\\begin{aligned} \\cos 2\\theta &= 2\\cos^2\\theta - 1 \\cr &= 2(0.8)^2 - 1 \\cr &= 2(0.64) - 1 \\cr &= 0.28 \\end{aligned}<br><br>Resolving vertically for equilibrium ($\\uparrow$):\\begin{aligned} Q &= 5\\cos 2\\theta + 8\\cos\\theta \\cr &= 5(0.28) + 8(0.8) \\cr &= 1.4 + 6.4 \\cr &= 7.8\\text{ N} \\end{aligned}",
        "<strong>(c) Resultant of remaining forces:</strong><br><br>The $5\\text{ N}$ force is removed and the $8\\text{ N}$ force is replaced by a $5\\text{ N}$ force acting at $\\theta = 36.87^\\circ$ to the upward vertical.<br><br>Horizontal component of resultant ($\\rightarrow$):\\begin{aligned} R_x &= 5\\sin\\theta \\cr &= 5(0.6) \\cr &= 3\\text{ N} \\end{aligned}<br><br>Vertical component of resultant ($\\downarrow$):\\begin{aligned} R_y &= Q - 5\\cos\\theta \\cr &= 7.8 - 5(0.8) \\cr &= 7.8 - 4 \\cr &= 3.8\\text{ N} \\end{aligned}",
        "<strong>Magnitude and direction:</strong><br><br><strong>(i) Magnitude:</strong>\\begin{aligned} R &= \\sqrt{R_x^2 + R_y^2} \\cr &= \\sqrt{3^2 + 3.8^2} \\cr &= \\sqrt{9 + 14.44} \\cr &= \\sqrt{23.44} \\cr &\\approx 4.84\\text{ N} \\end{aligned}<br><br><strong>(ii) Direction:</strong><br><br>Let $\\phi$ be the angle below the horizontal:\\begin{aligned} \\tan\\phi &= \\dfrac{R_y}{R_x} \\cr &= \\dfrac{3.8}{3} \\cr &\\approx 1.2667 \\cr \\phi &= \\arctan(1.2667) \\cr &\\approx 51.7^\\circ \\end{aligned}",
        "Final Answer: (b) $Q = 7.8\\text{ N}$, (c)(i) $4.84\\text{ N}$, (c)(ii) $51.7^\\circ$"
    ],
    "pi_options": [
        {
            "ans": "(b) $Q = 7.8\\text{ N}$, (c)(i) $4.84\\text{ N}$, (c)(ii) $38.3^\\circ$",
            "feedback": "Incorrect direction in part (c)(ii). The angle was calculated with respect to the vertical ($90^\\circ - 51.7^\\circ = 38.3^\\circ$) rather than below the horizontal ($\tan\\phi = R_y / R_x = 3.8 / 3$)."
        },
        {
            "ans": "(b) $Q = 9.4\\text{ N}$, (c)(i) $4.84\\text{ N}$, (c)(ii) $51.7^\\circ$",
           "feedback": "Incorrect value for $Q$. Check the double angle expansion for $\\cos 2\\theta$:\\begin{aligned} \\cos 2\\theta &= 2\\cos^2\\theta - 1 \\cr &= 2(0.64) - 1 \\cr &= 0.28 \\end{aligned}giving $Q = 5(0.28) + 8(0.8) = 7.8\\text{ N}$."        },
        {
            "ans": "(b) $Q = 7.8\\text{ N}$, (c)(i) $6.80\\text{ N}$, (c)(ii) $51.7^\\circ$",
            "feedback": "Incorrect resultant magnitude. In part (c), the remaining $5\\text{ N}$ force has an upward component of $4\\text{ N}$ while $Q$ acts downwards, so the net vertical component is $7.8 - 4 = 3.8\\text{ N}$, not $7.8 + 4$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Exact Pythagorean Ratios",
        "content": "When resolving forces involving $\\theta$ where $\\cos\\theta = 0.8 = \\dfrac{4}{5}$, recognise immediately that $\\sin\\theta = \\dfrac{3}{5} = 0.6$. Using these exact rational values avoids rounding discrepancies entirely when finding $\\cos 2\\theta = 2(0.8)^2 - 1 = 0.28$ and calculating the horizontal and vertical components of the resultant."
    }
},
{
    "id": "012112",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "A",
    "major_area": "Statics and Moments",
    "topic": "Forces and Equilibrium",
    "subtopic": [
        "Non-Perpendicular Forces",
        "Vector Resolution",
        "Resultant Forces"
    ],
    "img": "images/Mechanics_pngs/012112.png",
    "question": "The diagram shows three coplanar forces acting at a point $O$:<br>A force of magnitude $10\\text{ N}$ acting along the positive $x$-axis.<br>A force of magnitude $12\\text{ N}$ acting at an angle of $60^\\circ$ above the negative $x$-axis.<br>A force of magnitude $P\\text{ N}$ acting at an angle of $\\theta$ below the negative $x$-axis.<br><br>The forces are in equilibrium.<br><br><strong>(a)</strong> Show that $\\tan\\theta = \\dfrac{3\\sqrt{3}}{2}$, and hence find the value of $\\theta$ correct to 3 significant figures.<br><br><strong>(b)</strong> Find the exact value of $P$ in the form $k\\sqrt{m}$, where $k$ and $m$ are integers.<br><br>The force of magnitude $10\\text{ N}$ is now removed, and the force of magnitude $12\\text{ N}$ is replaced by a force of magnitude $24\\text{ N}$ acting in the same direction.<br><br><strong>(c)</strong> Find:<br><strong>(i)</strong> the magnitude of the resultant of the two remaining forces, giving your answer correct to 3 significant figures,<br><strong>(ii)</strong> the acute angle that this resultant makes with the negative $x$-axis, giving your answer correct to the nearest $0.1^\\circ$.",
    "steps": [
        "<strong>(a) Resolving for equilibrium:</strong><br><br>Resolving vertically ($\\uparrow$):\\begin{aligned} &12\\sin 60^\\circ \\cr & \\qquad- P\\sin\\theta = 0 \\cr& \\qquad P\\sin\\theta = 12\\left(\\dfrac{\\sqrt{3}}{2}\\right) \\cr & \\qquad P\\sin\\theta = 6\\sqrt{3} \\quad \\text{--- [Eq 1]} \\end{aligned}<br><br>Resolving horizontally ($\\rightarrow$):\\begin{aligned} &10 - 12\\cos 60^\\circ - P\\cos\\theta = 0 \\cr & 10 - 12(0.5) = P\\cos\\theta \\cr & P\\cos\\theta = 4 \\quad \\text{--- [Eq 2]} \\end{aligned}<br><br>Dividing [Eq 1] by [Eq 2]:\\begin{aligned} \\tan\\theta &= \\dfrac{6\\sqrt{3}}{4} \\cr &= \\dfrac{3\\sqrt{3}}{2} \\cr \\theta &= \\arctan\\left(\\dfrac{3\\sqrt{3}}{2}\\right) \\cr &\\approx 68.9^\\circ \\end{aligned}",
        "<strong>(b) Finding the exact value of $P$:</strong><br><br>Squaring and adding [Eq 1] and [Eq 2]:\\begin{aligned} P^2 &= (P\\cos\\theta)^2 + (P\\sin\\theta)^2 \\cr &= 4^2 + (6\\sqrt{3})^2 \\cr &= 16 + 108 \\cr &= 124 \\cr P &= \\sqrt{124} \\cr &= 2\\sqrt{31}\\text{ N} \\end{aligned}",
        "<strong>(c) New resultant force:</strong><br><br>The $10\\text{ N}$ force is removed and the $12\\text{ N}$ force is replaced by $24\\text{ N}$.<br><br>Resolving in the $x$-direction ($\\rightarrow$):\\begin{aligned} R_x &= -24\\cos 60^\\circ - P\\cos\\theta \\cr &= -24(0.5) - 4 \\cr &= -12 - 4 \\cr &= -16\\text{ N} \\end{aligned}<br><br>Resolving in the $y$-direction ($\\uparrow$):\\begin{aligned} R_y &= 24\\sin 60^\\circ - P\\sin\\theta \\cr &= 24\\left(\\dfrac{\\sqrt{3}}{2}\\right) - 6\\sqrt{3} \\cr &= 12\\sqrt{3} - 6\\sqrt{3} \\cr &= 6\\sqrt{3}\\text{ N} \\end{aligned}",
        "<strong>Magnitude and angle:</strong><br><br><strong>(i) Magnitude:</strong>\\begin{aligned} R &= \\sqrt{R_x^2 + R_y^2} \\cr &= \\sqrt{(-16)^2 + (6\\sqrt{3})^2} \\cr &= \\sqrt{256 + 108} \\cr &= \\sqrt{364} \\cr &\\approx 19.1\\text{ N} \\end{aligned}<br><br><strong>(ii) Direction:</strong><br><br>Let $\\alpha$ be the angle above the negative $x$-axis:\\begin{aligned} \\tan\\alpha &= \\dfrac{|R_y|}{|R_x|} \\cr &= \\dfrac{6\\sqrt{3}}{16} \\cr &= \\dfrac{3\\sqrt{3}}{8} \\cr &\\approx 0.6495 \\cr \\alpha &= \\arctan(0.6495) \\cr &\\approx 33.0^\\circ \\end{aligned}",
        "Final Answer: (a) $68.9^\\circ$, (b) $2\\sqrt{31}\\text{ N}$, (c)(i) $19.1\\text{ N}$, (c)(ii) $33.0^\\circ$"
    ],
    "pi_options": [
        {
            "ans": "(a) $68.9^\\circ$, (b) $2\\sqrt{31}\\text{ N}$, (c)(i) $19.1\\text{ N}$, (c)(ii) $57.0^\\circ$",
            "feedback": "Incorrect angle in part (c)(ii). The angle was measured to the vertical rather than the negative $x$-axis ($90^\\circ - 33.0^\\circ = 57.0^\\circ$). The required angle satisfies $\\tan\\alpha = 6\\sqrt{3} / 16$."
        },
        {
            "ans": "(a) $68.9^\\circ$, (b) $4\\sqrt{31}\\text{ N}$, (c)(i) $19.1\\text{ N}$, (c)(ii) $33.0^\\circ$",
            "feedback": "Incorrect surd simplification in part (b). $\\sqrt{124} = \\sqrt{4 \\times 31} = 2\\sqrt{31}\\text{ N}$, not $4\\sqrt{31}\\text{ N}$."
        },
        {
            "ans": "(a) $52.4^\\circ$, (b) $2\\sqrt{31}\\text{ N}$, (c)(i) $22.4\\text{ N}$, (c)(ii) $33.0^\\circ$",
            "feedback": "Incorrect angle in part (a). The tangent ratio was inverted as $4 / (6\\sqrt{3})$ instead of $P\\sin\\theta / P\\cos\\theta = 6\\sqrt{3} / 4$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Vector Linearity in Resultants",
        "content": "In part <strong>(c)</strong>, recognise that the original forces satisfied $\\mathbf{F}_{10} + \\mathbf{F}_{12} + \\mathbf{F}_P = \\mathbf{0}$, meaning $\\mathbf{F}_{12} + \\mathbf{F}_P = -\\mathbf{F}_{10}$. When $\\mathbf{F}_{10}$ is removed and $\\mathbf{F}_{12}$ is doubled to $2\\mathbf{F}_{12}$, the new resultant is simply $2\\mathbf{F}_{12} + \\mathbf{F}_P = \\mathbf{F}_{12} + (\\mathbf{F}_{12} + \\mathbf{F}_P) = \\mathbf{F}_{12} - \\mathbf{F}_{10}$. This vector insight verifies your resolved components immediately."
    }
},
{
    "id": "012113",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "A",
    "major_area": "Statics and Moments",
    "topic": "Forces and Equilibrium",
    "subtopic": [
        "Inclined Planes",
        "Limiting Friction",
        "Horizontal Pushing Force"
    ],
    "img": "images/Mechanics_pngs/012113.png",
    "question": "The diagram shows a parcel of weight $65\\text{ N}$ resting in equilibrium on a rough plane inclined at an angle $\\alpha$ to the horizontal, where $\\tan\\alpha = \\dfrac{3}{4}$.<br><br>A horizontal pushing force of magnitude $P\\text{ N}$ is applied to the parcel. The force acts towards the plane in a vertical plane containing a line of greatest slope. The coefficient of friction between the parcel and the plane is $\\mu = 0.25$.<br><br><strong>(a)</strong> When the parcel is on the point of sliding up the plane:<br><strong>(i)</strong> show that the normal reaction $R\\text{ N}$ between the plane and the parcel satisfies $R = 52 + 0.6P$,<br><strong>(ii)</strong> calculate the value of $P$.<br><br><strong>(b)</strong> The magnitude of $P$ is now gradually reduced until the parcel is on the point of sliding down the plane. Calculate this minimum value of $P$, giving your answer correct to 3 significant figures.",
    "steps": [
        "<strong>(a)(i) Normal reaction $R$:</strong><br><br>Since $\\tan\\alpha = \\dfrac{3}{4}$, by trigonometry:\\begin{aligned} \\sin\\alpha &= 0.6 \\cr \\cos\\alpha &= 0.8 \\end{aligned}<br><br>Resolving perpendicular to the plane ($\\nwarrow$):\\begin{aligned} R &= 65\\cos\\alpha + P\\sin\\alpha \\cr &= 65(0.8) + P(0.6) \\cr &= 52 + 0.6P \\end{aligned}",
        "<strong>(a)(ii) On the point of sliding up the plane:</strong><br><br>When sliding up the plane is impending, friction $F$ acts down the plane at its maximum value:\\begin{aligned} F &= \\mu R \\cr &= 0.25(52 + 0.6P) \\cr &= 13 + 0.15P \\end{aligned}<br><br>Resolving parallel to the plane ($\\nearrow$):\\begin{aligned} &P\\cos\\alpha = 65\\sin\\alpha + F \\cr &0.8P = 65(0.6) + (13 + 0.15P) \\cr &0.8P = 39 + 13 + 0.15P \\cr &0.8P = 52 + 0.15P \\cr &0.65P = 52 \\cr &P = \\dfrac{52}{0.65} \\cr &P = 80\\text{ N} \\end{aligned}",
        "<strong>(b) On the point of sliding down the plane:</strong><br><br>When sliding down the plane is impending, friction $F$ acts up the plane:\\begin{aligned} F = \\mu R = 13 + 0.15P \\end{aligned}<br><br>Resolving parallel to the plane ($\\nearrow$):\\begin{aligned} &P\\cos\\alpha + F = 65\\sin\\alpha \\cr &0.8P + (13 + 0.15P) = 65(0.6) \\cr &0.95P + 13 = 39 \\cr &0.95P = 26 \\cr &P = \\dfrac{26}{0.95} \\cr &P \\approx 27.4\\text{ N} \\end{aligned}",
        "Final Answer: (a)(ii) $80\\text{ N}$, (b) $27.4\\text{ N}$"
    ],
    "pi_options": [
        {
            "ans": "(a)(ii) $80\\text{ N}$, (b) $32.5\\text{ N}$",
            "feedback": "Incorrect value in part (b). You likely assumed $R = 65\\cos\\alpha = 52\\text{ N}$, forgetting that the horizontal force $P$ contributes a component $P\\sin\\alpha = 0.6P$ pressing the parcel into the plane."
        },
        {
            "ans": "(a)(ii) $65\\text{ N}$, (b) $27.4\\text{ N}$",
            "feedback": "Incorrect value for $P$ in part (a)(ii). Check the resolution parallel to the slope: $P\\cos\\alpha = 65\\sin\\alpha + \\mu R$, which gives $0.65P = 52 \\implies P = 80\\text{ N}$."
        },
        {
            "ans": "(a)(ii) $80\\text{ N}$, (b) $41.1\\text{ N}$",
            "feedback": "Incorrect direction of friction in part (b). When impending motion is down the plane, friction acts up the plane, so $P\\cos\\alpha + F = 65\\sin\\alpha$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Horizontal Force Normal Component",
        "content": "A horizontal force $P$ acting on an inclined plane has two perpendicular components: $P\\cos\\alpha$ parallel to the slope, and $P\\sin\\alpha$ perpendicular to the slope. Students frequently forget the perpendicular component and write $R = mg\\cos\\alpha$. Because $P$ presses into the slope, it increases $R$ to $mg\\cos\\alpha + P\\sin\\alpha$, which directly increases the maximum frictional force."
    }
},
{
    "id": "012114",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "A",
    "major_area": "Statics and Moments",
    "topic": "Forces and Equilibrium",
    "subtopic": [
        "Suspended Particles",
        "Light Strings",
        "Tension Ratios"
    ],
    "img": "images/Mechanics_pngs/012114.png",
    "question": "The diagram shows a particle $P$ of weight $50\\text{ N}$ suspended in equilibrium by two light inextensible strings $PA$ and $PB$. The ends $A$ and $B$ are attached to a horizontal ceiling.<br><br>The string $PA$ is inclined at an angle $\\alpha$ to the vertical, where $\\tan\\alpha = \\dfrac{3}{4}$.<br>The string $PB$ is inclined at an angle $\\beta$ to the vertical.<br><br>The tension in string $PB$ is twice the tension in string $PA$.<br><br><strong>(a)</strong> By resolving horizontally, show that $\\sin\\beta = \\dfrac{3}{10}$.<br><br><strong>(b)</strong> Find the value of $\\beta$ in degrees, correct to 1 decimal place.<br><br><strong>(c)</strong> Calculate:<br><strong>(i)</strong> the tension in string $PA$, correct to 3 significant figures,<br><strong>(ii)</strong> the tension in string $PB$, correct to 3 significant figures.",
    "steps": [
        "<strong>(a) Resolving horizontally:</strong><br><br>From $\\tan\\alpha = \\dfrac{3}{4}$, we have $\\sin\\alpha = 0.6$ and $\\cos\\alpha = 0.8$.<br><br>Given that $T_B = 2T_A$, resolving horizontally ($\\rightarrow$):\\begin{aligned} &T_B\\sin\\beta = T_A\\sin\\alpha \\cr &2T_A\\sin\\beta = T_A(0.6) \\cr &2\\sin\\beta = 0.6 \\cr &\\sin\\beta = 0.3 \\cr &\\sin\\beta = \\dfrac{3}{10} \\end{aligned}",
        "<strong>(b) Finding angle $\\beta$:</strong><br><br>Evaluating $\\beta$:\\begin{aligned} \\beta &= \\arcsin(0.3) \\cr &\\approx 17.4576^\\circ \\cr &= 17.5^\\circ\\text{ (1 d.p.)} \\end{aligned}",
        "<strong>(c) Resolving vertically for tensions:</strong><br><br>Using $\\cos\\beta = \\sqrt{1 - \\sin^2\\beta}$:\\begin{aligned} \\cos\\beta &= \\sqrt{1 - (0.3)^2} \\cr &= \\sqrt{0.91} \\cr &\\approx 0.95394 \\end{aligned}<br><br>Resolving vertically for equilibrium ($\\uparrow$):\\begin{aligned} &T_A\\cos\\alpha + T_B\\cos\\beta = 50 \\cr &T_A(0.8) + 2T_A(\\sqrt{0.91}) = 50 \\cr &T_A(0.8 + 2\\times 0.95394) = 50 \\cr &T_A(0.8 + 1.90788) = 50 \\cr &2.70788 T_A = 50 \\cr &T_A = \\dfrac{50}{2.70788} \\cr &T_A \\approx 18.5\\text{ N} \\end{aligned}<br><br>For string $PB$:\\begin{aligned} T_B &= 2T_A \\cr &= 2(18.4647) \\cr &\\approx 36.9\\text{ N} \\end{aligned}",
        "Final Answer: (b) $17.5^\\circ$, (c)(i) $18.5\\text{ N}$, (c)(ii) $36.9\\text{ N}$"
    ],
    "pi_options": [
        {
            "ans": "(b) $17.5^\\circ$, (c)(i) $36.9\\text{ N}$, (c)(ii) $18.5\\text{ N}$",
            "feedback": "Incorrect assignment of tensions. The tension in string $PB$ is twice the tension in string $PA$, so $T_B = 36.9\\text{ N}$ and $T_A = 18.5\\text{ N}$."
        },
        {
            "ans": "(b) $30.0^\\circ$, (c)(i) $18.5\\text{ N}$, (c)(ii) $36.9\\text{ N}$",
            "feedback": "Incorrect angle $\\beta$. Check part (a): $2\\sin\\beta = 0.6 \\implies \\sin\\beta = 0.3$. $\\arcsin(0.3) \\approx 17.5^\\circ$, whereas $\\arcsin(0.5) = 30.0^\\circ$."
        },
        {
            "ans": "(b) $17.5^\\circ$, (c)(i) $19.2\\text{ N}$, (c)(ii) $38.5\\text{ N}$",
            "feedback": "Premature rounding error. When evaluating $\\cos\\beta$, use $\\sqrt{0.91} \\approx 0.9539$ rather than approximating it to $1$, which significantly distorts the tension."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: String Inclination Angles",
        "content": "Be vigilant about how angles are defined in suspended particle questions. Here, both $\\alpha$ and $\\beta$ are given with respect to the vertical. This means the horizontal components use $\\sin$ and the vertical components use $\\cos$. If angles are defined with respect to the ceiling, the roles of sine and cosine are reversed."
    }
},
{
    "id": "012115",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "A",
    "major_area": "Dynamics and Equilibrium",
    "topic": "Forces and Newton's Second Law",
    "subtopic": [
        "Coplanar Forces",
        "Newton's Second Law",
        "Kinematic Consequences"
    ],
    "img": "images/Mechanics_pngs/012115.png",
    "question": "The diagram shows a particle $P$ of mass $3\\text{ kg}$ held in equilibrium on a smooth horizontal surface by three horizontal coplanar forces:<br>A force $\\mathbf{F}_1$ of magnitude $25\\text{ N}$ acting at an acute angle $\\theta$ to the positive $x$-axis.<br>A force $\\mathbf{F}_2$ of magnitude $15\\text{ N}$ acting along the negative $y$-axis.<br>A force $\\mathbf{F}_3$ of magnitude $H\\text{ N}$ acting along the negative $x$-axis.<br><br><strong>(a)</strong> Find:<br><strong>(i)</strong> the value of $\\theta$, correct to 3 significant figures,<br><strong>(ii)</strong> the value of $H$.<br><br>The force $\\mathbf{F}_3$ is suddenly removed while $\\mathbf{F}_1$ and $\\mathbf{F}_2$ remain unchanged. The particle starts from rest at the origin.<br><br><strong>(b)</strong><br><strong>(i)</strong> Write down the magnitude and direction of the resultant force acting on the particle immediately after $\\mathbf{F}_3$ is removed.<br><strong>(ii)</strong> Calculate the magnitude of the acceleration of the particle.<br><strong>(iii)</strong> Calculate the distance travelled by the particle in the first $3\\text{ seconds}$ of its motion.<br><br><strong>(c)</strong> In a different scenario starting from the original three-force equilibrium state, instead of removing $\\mathbf{F}_3$, the force $\\mathbf{F}_2$ is reversed in direction. State the magnitude and direction of the resulting net force acting on the particle.",
    "steps": [
        "<strong>(a) Equilibrium conditions:</strong><br><br>Resolving along the $y$-axis ($\\uparrow$):\\begin{aligned} 25\\sin\\theta - 15 &= 0 \\cr 25\\sin\\theta &= 15 \\cr \\sin\\theta &= 0.6 \\cr \\theta &= \\arcsin(0.6) \\cr &\\approx 36.9^\\circ \\end{aligned}<br><br>Since $\\sin\\theta = 0.6$, $\\cos\\theta = 0.8$.<br><br>Resolving along the $x$-axis ($\\rightarrow$):\\begin{aligned} 25\\cos\\theta - H &= 0 \\cr H &= 25(0.8) \\cr &= 20\\text{ N} \\end{aligned}",
        "<strong>(b)(i) Resultant when $\\mathbf{F}_3$ is removed:</strong><br><br>In the original equilibrium state:\\begin{aligned} \\mathbf{F}_1 + \\mathbf{F}_2 + \\mathbf{F}_3 = \\mathbf{0} \\end{aligned}<br><br>Therefore, the resultant of $\\mathbf{F}_1$ and $\\mathbf{F}_2$ is equal and opposite to $\\mathbf{F}_3$:\\begin{aligned} \\mathbf{F}_1 + \\mathbf{F}_2 &= -\\mathbf{F}_3 \\cr &= -(-20\\mathbf{i}) \\cr &= 20\\mathbf{i}\\text{ N} \\end{aligned}<br><br>The resultant force has magnitude $20\\text{ N}$ directed in the positive $x$-direction (due East).",
        "<strong>(b)(ii) & (b)(iii) Acceleration and displacement:</strong><br><br>Using Newton's second law ($F = ma$):\\begin{aligned} a &= \\dfrac{F}{m} \\cr &= \\dfrac{20}{3} \\cr &\\approx 6.67\\text{ m s}^{-2} \\end{aligned}<br><br>Since the particle starts from rest ($u = 0\\text{ m s}^{-1}$), using $s = ut + \\dfrac{1}{2}at^2$:\\begin{aligned} s &= 0(3) + \\dfrac{1}{2}\\left(\\dfrac{20}{3}\\right)(3)^2 \\cr &= \\dfrac{1}{2}\\left(\\dfrac{20}{3}\\right)(9) \\cr &= \\dfrac{1}{2}(60) \\cr &= 30\\text{ m} \\end{aligned}",
        "<strong>(c) Reversing the direction of $\\mathbf{F}_2$:</strong><br><br>Reversing $\\mathbf{F}_2$ replaces $-\\mathbf{F}_2$ with $+\\mathbf{F}_2$. The new net force is:\\begin{aligned} \\mathbf{F}_{\\text{net}} &= \\mathbf{F}_1 + (-\\mathbf{F}_2) + \\mathbf{F}_3 \\cr &= (\\mathbf{F}_1 + \\mathbf{F}_2 + \\mathbf{F}_3) - 2\\mathbf{F}_2 \\cr &= \\mathbf{0} - 2(-15\\mathbf{j}) \\cr &= 30\\mathbf{j}\\text{ N} \\end{aligned}<br><br>The resulting net force has magnitude $30\\text{ N}$ directed in the positive $y$-direction (due North).",
        "Final Answer: (a)(i) $36.9^\\circ$, (a)(ii) $H = 20\\text{ N}$, (b)(i) $20\\text{ N}$ due East, (b)(ii) $6.67\\text{ m s}^{-2}$, (b)(iii) $30\\text{ m}$, (c) $30\\text{ N}$ due North"
    ],
    "pi_options": [
        {
            "ans": "(a)(i) $36.9^\\circ$, (a)(ii) $H = 20\\text{ N}$, (b)(i) $20\\text{ N}$ due West, (b)(ii) $6.67\\text{ m s}^{-2}$, (b)(iii) $30\\text{ m}$, (c) $30\\text{ N}$ due North",
            "feedback": "Incorrect direction in part (b)(i). Since $\\mathbf{F}_3$ acted to the West (negative $x$-direction) to maintain balance, the resultant of the remaining forces must act to the East (positive $x$-direction)."
        },
        {
            "ans": "(a)(i) $36.9^\\circ$, (a)(ii) $H = 20\\text{ N}$, (b)(i) $20\\text{ N}$ due East, (b)(ii) $6.67\\text{ m s}^{-2}$, (b)(iii) $60\\text{ m}$, (c) $30\\text{ N}$ due North",
            "feedback": "Incorrect displacement in part (b)(iii). You omitted the factor of $\\frac{1}{2}$ in the constant acceleration formula $s = ut + \\frac{1}{2}at^2$, giving $60\\text{ m}$ instead of $30\\text{ m}$."
        },
        {
            "ans": "(a)(i) $53.1^\\circ$, (a)(ii) $H = 15\\text{ N}$, (b)(i) $20\\text{ N}$ due East, (b)(ii) $6.67\\text{ m s}^{-2}$, (b)(iii) $30\\text{ m}$, (c) $15\\text{ N}$ due North",
            "feedback": "Incorrect angle $\\theta$ and value of $H$. Resolving vertically gives \\begin{aligned}25\\sin\\theta &= 15 \\cr\\implies \\sin\\theta &= 0.6 \\cr\\implies \\theta &= 36.9^\\circ\\end{aligned} Confusing sine and cosine results in $\\theta = 53.1^\\circ$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: The Removal Equilibrium Principle",
        "content": "Whenever a system of forces is in equilibrium ($\\Sigma \\mathbf{F} = \\mathbf{0}$) and one force is suddenly removed, the resultant of all remaining forces is always exactly equal in magnitude and opposite in direction to the removed force ($-\\mathbf{F}_{\\text{removed}}$). Recognising this vector identity saves minutes of unnecessary trigonometry in exam conditions."
    }
},
{
    "id": "012116",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Variable Acceleration",
    "subtopic": [
        "Calculus in Kinematics",
        "Piecewise Motion",
        "Constant Acceleration"
    ],
    "img": false,
    "question": "A motorcycle moves along a straight horizontal road. The velocity $v\\text{ m s}^{-1}$ of the motorcycle at time $t\\text{ s}$, during the first $10\\text{ s}$ of its journey ($0 \\le t \\le 10$), is modelled by:$$v = ct + 0.06t^2$$where $c$ is a constant.<br><br>When $t = 10$, the acceleration of the motorcycle is $1.8\\text{ m s}^{-2}$.<br><br>For $t \\ge 10$, the motorcycle continues its journey with constant acceleration $1.8\\text{ m s}^{-2}$ until its speed reaches $30\\text{ m s}^{-1}$.<br><br><strong>(a)</strong> Find the value of $c$.<br><br><strong>(b)</strong> Find the speed of the motorcycle when $t = 10$.<br><br><strong>(c)</strong> Find the total distance the motorcycle has travelled from $t = 0$ until its speed reaches $30\\text{ m s}^{-1}$.",
    "steps": [
        "<strong>(a) Finding the constant $c$:</strong><br><br>Acceleration is the derivative of velocity with respect to time:\\begin{aligned} a &= \\dfrac{\\text{d}v}{\\text{d}t} \\cr &= c + 0.12t \\end{aligned}<br><br>Given that $a = 1.8\\text{ m s}^{-2}$ when $t = 10$:\\begin{aligned} &c + 0.12(10) = 1.8 \\cr &c + 1.2 = 1.8 \\cr &c = 0.6 \\end{aligned}",
        "<strong>(b) Speed at $t = 10$:</strong><br><br>Substitute $c = 0.6$ and $t = 10$ into the velocity model:\\begin{aligned} v(10) &= 0.6(10) + 0.06(10)^2 \\cr &= 6 + 0.06(100) \\cr &= 6 + 6 \\cr &= 12\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(c) Stage 1 distance ($0 \\le t \\le 10$):</strong><br><br>Integrating velocity gives displacement:\\begin{aligned} s_1 &= \\int_0^{10} (0.6t + 0.06t^2)\\text{d}t \\cr &= \\left[ 0.3t^2 + 0.02t^3 \\right]_0^{10} \\cr &= 0.3(100) + 0.02(1000) \\cr &= 30 + 20 \\cr &= 50\\text{ m} \\end{aligned}",
        "<strong>Stage 2 distance ($t \\ge 10$):</strong><br><br>The motorcycle moves with constant acceleration $a = 1.8\\text{ m s}^{-2}$ from initial speed $u = 12\\text{ m s}^{-1}$ to final speed $v = 30\\text{ m s}^{-1}$.<br><br>Using $v^2 = u^2 + 2as$:\\begin{aligned} &30^2 = 12^2 + 2(1.8)s_2 \\cr &900 = 144 + 3.6s_2 \\cr &3.6s_2 = 756 \\cr &s_2 = 210\\text{ m} \\end{aligned}<br><br>Total distance travelled:\\begin{aligned} s &= s_1 + s_2 \\cr &= 50 + 210 \\cr &= 260\\text{ m} \\end{aligned}",
        "Final Answer: (a) $c = 0.6$, (b) $12\\text{ m s}^{-1}$, (c) $260\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $c = 0.6$, (b) $12\\text{ m s}^{-1}$, (c) $210\\text{ m}$",
            "feedback": "Incorrect total distance in part (c). $210\\text{ m}$ is only the distance travelled during Stage 2 under constant acceleration. You must add the $50\\text{ m}$ covered during Stage 1 ($50 + 210 = 260\\text{ m}$)."
        },
        {
            "ans": "(a) $c = 1.2$, (b) $18\\text{ m s}^{-1}$, (c) $310\\text{ m}$",
            "feedback": "Incorrect derivative in part (a). Differentiating $0.06t^2$ yields $2(0.06)t = 0.12t$, not $0.06t$."
        },
        {
            "ans": "(a) $c = 0.6$, (b) $12\\text{ m s}^{-1}$, (c) $300\\text{ m}$",
            "feedback": "Incorrect integration in part (c). When integrating $0.6t$, remember to divide by the new power: $\\int 0.6t\\text{d}t = 0.3t^2$, not $0.6t^2$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Blending Calculus and SUVAT",
        "content": "Never apply constant acceleration formulae ($v^2 = u^2 + 2as$) during Stage 1 where acceleration depends on time ($a = 0.6 + 0.12t$). Conversely, do not attempt to integrate the Stage 1 velocity model beyond $t = 10$, as the model changes explicitly to constant acceleration. Always treat piecewise journeys in distinct phases and sum the distances."
    }
},
{
    "id": "012117",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Variable Acceleration",
    "subtopic": [
        "Integrating Acceleration",
        "Braking Distance",
        "Uniform Deceleration"
    ],
    "img": false,
    "question": "A train departs from rest at station $A$ along a straight horizontal track. For the first $20\\text{ s}$ of its journey ($0 \\le t \\le 20$), its acceleration $a\\text{ m s}^{-2}$ at time $t\\text{ s}$ is modelled by:$$a = 1.8 - 0.06t$$At $t = 20$, the power is cut and the brakes are applied, producing a constant deceleration of $0.5\\text{ m s}^{-2}$ until the train comes to rest at a signal.<br><br><strong>(a)</strong> Find the speed of the train when $t = 20$.<br><br><strong>(b)</strong> Find the distance travelled by the train during the first $20\\text{ seconds}$.<br><br><strong>(c)</strong> Find the total time taken from the start of the journey until the train comes to rest at the signal.<br><br><strong>(d)</strong> Find the total distance travelled by the train from station $A$ to the signal.",
    "steps": [
        "<strong>(a) Speed at $t = 20$:</strong><br><br>Since the train starts from rest, $v = 0$ when $t = 0$:\\begin{aligned} v &= \\int (1.8 - 0.06t)\\text{d}t \\cr &= 1.8t - 0.03t^2 \\end{aligned}<br><br>At $t = 20$:\\begin{aligned} v(20) &= 1.8(20) - 0.03(20)^2 \\cr &= 36 - 0.03(400) \\cr &= 36 - 12 \\cr &= 24\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(b) Distance during the first $20\\text{ seconds}$:</strong><br><br>Integrating velocity gives displacement:\\begin{aligned} s_1 &= \\int_0^{20} (1.8t - 0.03t^2)\\text{d}t \\cr &= \\left[ 0.9t^2 - 0.01t^3 \\right]_0^{20} \\cr &= 0.9(400) - 0.01(8000) \\cr &= 360 - 80 \\cr &= 280\\text{ m} \\end{aligned}",
        "<strong>(c) Total time to come to rest:</strong><br><br>For the braking phase, $u = 24\\text{ m s}^{-1}$, $v = 0\\text{ m s}^{-1}$, and $a = -0.5\\text{ m s}^{-2}$.<br><br>Using $v = u + at$:\\begin{aligned} &0 = 24 - 0.5t_2 \\cr &0.5t_2 = 24 \\cr &t_2 = 48\\text{ s} \\end{aligned}<br><br>Total time from departure:\\begin{aligned} T &= 20 + t_2 \\cr &= 20 + 48 \\cr &= 68\\text{ s} \\end{aligned}",
        "<strong>(d) Total distance to the signal:</strong><br><br>Braking distance using $s = \\left(\\dfrac{u + v}{2}\\right)t$:\\begin{aligned} s_2 &= \\left(\\dfrac{24 + 0}{2}\\right)(48) \\cr &= 12(48) \\cr &= 576\\text{ m} \\end{aligned}<br><br>Total distance:\\begin{aligned} s &= s_1 + s_2 \\cr &= 280 + 576 \\cr &= 856\\text{ m} \\end{aligned}",
        "Final Answer: (a) $24\\text{ m s}^{-1}$, (b) $280\\text{ m}$, (c) $68\\text{ s}$, (d) $856\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $24\\text{ m s}^{-1}$, (b) $280\\text{ m}$, (c) $48\\text{ s}$, (d) $856\\text{ m}$",
            "feedback": "Incorrect total time in part (c). $48\\text{ s}$ is solely the duration of the braking stage; the total journey time is $20 + 48 = 68\\text{ s}$."
        },
        {
            "ans": "(a) $24\\text{ m s}^{-1}$, (b) $280\\text{ m}$, (c) $68\\text{ s}$, (d) $576\\text{ m}$",
            "feedback": "Incorrect total distance in part (d). $576\\text{ m}$ is the braking distance alone. You must add the $280\\text{ m}$ travelled during the first $20\\text{ s}$ to obtain $856\\text{ m}$."
        },
        {
            "ans": "(a) $36\\text{ m s}^{-1}$, (b) $360\\text{ m}$, (c) $92\\text{ s}$, (d) $1656\\text{ m}$",
            "feedback": "Incorrect velocity in part (a). Integrating $a = 1.8 - 0.06t$ gives $v = 1.8t - 0.03t^2$. Omitting the quadratic term leads to an incorrect speed of $36\\text{ m s}^{-1}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Choosing the Quickest SUVAT Formula",
        "content": "In part <strong>(d)</strong>, once you have found the braking time $t_2 = 48\\text{ s}$, using $s = \\left(\\dfrac{u + v}{2}\\right)t$ calculates the braking distance in a single mental multiplication ($12 \\times 48 = 576$). This avoids squaring $24$ and dividing by $2a$, keeping the arithmetic fast and error-free."
    }
},
{
    "id": "012118",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Variable Acceleration",
    "subtopic": [
        "Maximum Velocity",
        "Three-Stage Motion",
        "Uniform Deceleration"
    ],
    "img": false,
    "question": "A test car moves from rest along a straight horizontal track. Between $t = 0$ and $t = 10\\text{ s}$, the velocity $v\\text{ m s}^{-1}$ of the car is given by:$$v = 0.75t^2 - 0.05t^3$$<strong>(a)</strong> Using calculus, show that the car attains its maximum velocity when $t = 10$, and find this maximum velocity.<br><br><strong>(b)</strong> Calculate the distance travelled by the car during the first $10\\text{ seconds}$.<br><br>For the next $15\\text{ seconds}$ (from $t = 10$ to $t = 25$), the car continues at this constant maximum speed.<br>At $t = 25$, the car decelerates uniformly to rest in a distance of $100\\text{ m}$.<br><br><strong>(c)</strong> Find the distance travelled by the car while travelling at constant speed.<br><br><strong>(d)</strong> Find the magnitude of the deceleration in the final stage.<br><br><strong>(e)</strong> Calculate the total time taken for the entire journey from start to rest.",
    "steps": [
        "<strong>(a) Maximum velocity:</strong><br><br>Differentiating velocity gives acceleration:\\begin{aligned} a &= \\dfrac{\\text{d}v}{\\text{d}t} \\cr &= 1.5t - 0.15t^2 \\cr &= 0.15t(10 - t) \\end{aligned}<br><br>Setting $a = 0$ for $t > 0$:\\begin{aligned} &10 - t = 0 \\cr &t = 10\\text{ s} \\end{aligned}<br><br>Confirming maximum using the second derivative:\\begin{aligned} \\dfrac{\\text{d}^2v}{\\text{d}t^2} &= 1.5 - 0.3t \\cr &= 1.5 - 0.3(10) \\cr &= -1.5 < 0 \\end{aligned}<br><br>Evaluating maximum velocity:\\begin{aligned} v_{\\text{max}} &= 0.75(10)^2 - 0.05(10)^3 \\cr &= 75 - 50 \\cr &= 25\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(b) Distance during first $10\\text{ seconds}$:</strong><br><br>Integrating velocity:\\begin{aligned} s_1 &= \\int_0^{10} (0.75t^2 - 0.05t^3)\\text{d}t \\cr &= \\left[ 0.25t^3 - 0.0125t^4 \\right]_0^{10} \\cr &= 0.25(1000) - 0.0125(10000) \\cr &= 250 - 125 \\cr &= 125\\text{ m} \\end{aligned}",
        "<strong>(c) Constant speed distance:</strong><br><br>Cruising at $25\\text{ m s}^{-1}$ for $15\\text{ seconds}$:\\begin{aligned} s_2 &= 25 \\times 15 \\cr &= 375\\text{ m} \\end{aligned}",
        "<strong>(d) & (e) Final braking stage:</strong><br><br>For the final stage, $u = 25\\text{ m s}^{-1}$, $v = 0\\text{ m s}^{-1}$, and $s_3 = 100\\text{ m}$.<br><br>Using $v^2 = u^2 + 2as$ with deceleration $d$:\\begin{aligned} &0 = 25^2 - 2d(100) \\cr &200d = 625 \\cr &d = 3.125\\text{ m s}^{-2} \\end{aligned}<br><br>Finding braking duration using $s_3 = \\left(\\dfrac{u + v}{2}\\right)t_3$:\\begin{aligned} &100 = \\left(\\dfrac{25 + 0}{2}\\right)t_3 \\cr &12.5t_3 = 100 \\cr &t_3 = 8\\text{ s} \\end{aligned}<br><br>Total journey time:\\begin{aligned} T &= 10 + 15 + 8 \\cr &= 33\\text{ s} \\end{aligned}",
        "Final Answer: (a) $25\\text{ m s}^{-1}$, (b) $125\\text{ m}$, (c) $375\\text{ m}$, (d) $3.125\\text{ m s}^{-2}$, (e) $33\\text{ s}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $25\\text{ m s}^{-1}$, (b) $125\\text{ m}$, (c) $375\\text{ m}$, (d) $3.125\\text{ m s}^{-2}$, (e) $23\\text{ s}$",
            "feedback": "Incorrect total time in part (e). You omitted the initial $10\\text{ s}$ acceleration stage: $10 + 15 + 8 = 33\\text{ s}$, not $15 + 8 = 23\\text{ s}$."
        },
        {
            "ans": "(a) $25\\text{ m s}^{-1}$, (b) $125\\text{ m}$, (c) $375\\text{ m}$, (d) $6.25\\text{ m s}^{-2}$, (e) $33\\text{ s}$",
            "feedback": "Incorrect deceleration in part (d). In $v^2 = u^2 + 2as$, the denominator is $2s = 200$, giving $d = 625 / 200 = 3.125\\text{ m s}^{-2}$, not $625 / 100$."
        },
        {
            "ans": "(a) $25\\text{ m s}^{-1}$, (b) $250\\text{ m}$, (c) $375\\text{ m}$, (d) $3.125\\text{ m s}^{-2}$, (e) $33\\text{ s}$",
            "feedback": "Incorrect integration in part (b). Integrating $0.75t^2$ gives $\\dfrac{0.75}{3}t^3 = 0.25t^3$, which evaluates to $250 - 125 = 125\\text{ m}$, not $250\\text{ m}$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Justifying the Maximum",
        "content": "In questions asking you to 'show that velocity attains its maximum', setting $\\dfrac{\\text{d}v}{\\text{d}t} = 0$ is only half the proof. You must explicitly verify that it is a maximum, either by evaluating the second derivative $\\dfrac{\\text{d}^2v}{\\text{d}t^2} = -1.5 < 0$ or by demonstrating that acceleration changes sign from positive to negative through $t = 10$."
    }
},
{
    "id": "012119",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Variable Acceleration",
    "subtopic": [
        "Piecewise Functions",
        "Continuity",
        "Average Speed"
    ],
    "img": false,
    "question": "A particle moves in a straight line such that its velocity $v\\text{ m s}^{-1}$ at time $t\\text{ s}$ is given by:$$v(t) = \\begin{cases} kt^2 & 0 \\le t \\le 4 \\\\ A - 2t & 4 < t \\le 10 \\end{cases}$$where $k$ and $A$ are constants.<br><br>The velocity function $v(t)$ is continuous at $t = 4$, and the particle comes to instantaneous rest at $t = 10$.<br><br><strong>(a)</strong> Find the values of the constants $A$ and $k$.<br><br><strong>(b)</strong> By finding the acceleration of the particle immediately before and immediately after $t = 4$, explain why the acceleration is discontinuous at $t = 4$.<br><br><strong>(c)</strong> Calculate the total distance travelled by the particle over the interval $0 \\le t \\le 10$.<br><br><strong>(d)</strong> Hence calculate the average speed of the particle during the $10\\text{ seconds}$.",
    "steps": [
        "<strong>(a) Finding constants $A$ and $k$:</strong><br><br>At $t = 10$, the particle is at instantaneous rest ($v = 0$):\\begin{aligned} &A - 2(10) = 0 \\cr &A - 20 = 0 \\cr &A = 20 \\end{aligned}<br><br>Since $v(t)$ is continuous at $t = 4$:\\begin{aligned} &k(4^2) = A - 2(4) \\cr &16k = 20 - 8 \\cr &16k = 12 \\cr &k = 0.75 \\end{aligned}",
        "<strong>(b) Acceleration discontinuity:</strong><br><br>For $0 \\le t < 4$:\\begin{aligned} a(t) &= \\dfrac{\\text{d}}{\\text{d}t}(0.75t^2) \\cr &= 1.5t \\end{aligned}<br><br>Immediately before $t = 4$:\\begin{aligned} a(4^-) &= 1.5(4) \\cr &= 6\\text{ m s}^{-2} \\end{aligned}<br><br>For $4 < t \\le 10$:\\begin{aligned} a(t) &= \\dfrac{\\text{d}}{\\text{d}t}(20 - 2t) \\cr &= -2\\text{ m s}^{-2} \\end{aligned}<br><br>Since $a(4^-) = 6 \\ne a(4^+) = -2$, the acceleration has an abrupt jump discontinuity of $8\\text{ m s}^{-2}$ at $t = 4$.",
        "<strong>(c) Total distance travelled:</strong><br><br>Stage 1 distance ($0 \\le t \\le 4$):\\begin{aligned} s_1 &= \\int_0^4 0.75t^2\\text{d}t \\cr &= \\left[ 0.25t^3 \\right]_0^4 \\cr &= 0.25(64) \\cr &= 16\\text{ m} \\end{aligned}<br><br>Stage 2 distance ($4 < t \\le 10$):\\begin{aligned} s_2 &= \\int_4^{10} (20 - 2t)\\text{d}t \\cr &= \\left[ 20t - t^2 \\right]_4^{10} \\cr &= (200 - 100) - (80 - 16) \\cr &= 100 - 64 \\cr &= 36\\text{ m} \\end{aligned}<br><br>Total distance:\\begin{aligned} s &= s_1 + s_2 \\cr &= 16 + 36 \\cr &= 52\\text{ m} \\end{aligned}",
        "<strong>(d) Average speed:</strong><br><br>Average speed is total distance divided by total time:\\begin{aligned} \\text{Average speed} &= \\dfrac{s_{\\text{total}}}{t_{\\text{total}}} \\cr &= \\dfrac{52}{10} \\cr &= 5.2\\text{ m s}^{-1} \\end{aligned}",
        "Final Answer: (a) $A = 20, k = 0.75$, (c) $52\\text{ m}$, (d) $5.2\\text{ m s}^{-1}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $A = 20, k = 0.75$, (c) $52\\text{ m}$, (d) $6.0\\text{ m s}^{-1}$",
            "feedback": "Incorrect average speed in part (d). You averaged the peak speed ($12\\text{ m s}^{-1}$) and initial speed ($0\\text{ m s}^{-1}$). Average speed is defined strictly as total distance divided by total time ($52 / 10 = 5.2\\text{ m s}^{-1}$)."
        },
        {
            "ans": "(a) $A = 20, k = 1.25$, (c) $62\\text{ m}$, (d) $6.2\\text{ m s}^{-1}$",
            "feedback": "Incorrect value for $k$ in part (a). Setting $16k = 20 - 2(4)$ gives $16k = 12 \\implies k = 0.75$, not $1.25$."
        },
        {
            "ans": "(a) $A = 20, k = 0.75$, (c) $36\\text{ m}$, (d) $3.6\\text{ m s}^{-1}$",
            "feedback": "Incorrect distance in part (c). $36\\text{ m}$ accounts only for Stage 2. You must include the $16\\text{ m}$ covered during Stage 1 to obtain $52\\text{ m}$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Continuity vs Differentiability",
        "content": "A common theoretical misconception is believing that if velocity is continuous, acceleration must also be continuous. As shown here, a piecewise velocity function can join without gaps, yet have a sharp corner where the gradient jumps abruptly ($a$ jumps from $+6\\text{ m s}^{-2}$ to $-2\\text{ m s}^{-2}$). Velocity is continuous, but not differentiable at $t = 4$."
    }
},
{
    "id": "012120",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "A",
    "major_area": "Kinematics",
    "topic": "Variable and Constant Acceleration",
    "subtopic": [
        "Relative Motion",
        "Multi-Body Kinematics",
        "Overtaking"
    ],
    "img": false,
    "question": "Two particles $P$ and $Q$ move along the same straight horizontal line. At time $t = 0$, both particles pass through a fixed point $O$ on the line, travelling in the same direction.<br><br>The velocity $v_P\\text{ m s}^{-1}$ of particle $P$ at time $t\\text{ s}$ ($t \\ge 0$) is given by:$$v_P = 6t - 0.5t^2$$Particle $Q$ starts from $O$ at $t = 0$ with an initial velocity of $3\\text{ m s}^{-1}$ and moves with constant acceleration $a\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Find the time at which particle $P$ attains its maximum velocity, and calculate this maximum velocity.<br><br><strong>(b)</strong> Find an expression in terms of $t$ for the displacement $s_P$ of particle $P$ from $O$.<br><br>Particle $Q$ catches up with particle $P$ at the exact instant when particle $P$ attains its maximum velocity.<br><br><strong>(c)</strong> Find the distance of both particles from $O$ at this instant.<br><br><strong>(d)</strong> Calculate the value of the constant acceleration $a$ of particle $Q$.<br><br><strong>(e)</strong> Find the difference in speeds between particle $Q$ and particle $P$ at the moment they collide.",
    "steps": [
        "<strong>(a) Maximum velocity of $P$:</strong><br><br>Differentiating $v_P$ with respect to time:\\begin{aligned} a_P &= \\dfrac{\\text{d}v_P}{\\text{d}t} \\cr &= 6 - t \\end{aligned}<br><br>Maximum velocity occurs when $a_P = 0$:\\begin{aligned} &6 - t = 0 \\cr &t = 6\\text{ s} \\end{aligned}<br><br>Maximum velocity value:\\begin{aligned} v_P(6) &= 6(6) - 0.5(6)^2 \\cr &= 36 - 0.5(36) \\cr &= 36 - 18 \\cr &= 18\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(b) Displacement expression for $P$:</strong><br><br>Since $s_P = 0$ when $t = 0$:\\begin{aligned} s_P &= \\int (6t - 0.5t^2)\\text{d}t \\cr &= 3t^2 - \\dfrac{1}{6}t^3 \\end{aligned}",
        "<strong>(c) Distance at collision ($t = 6\\text{ s}$):</strong><br><br>Substitute $t = 6$ into the displacement expression for $P$:\\begin{aligned} s_P(6) &= 3(6)^2 - \\dfrac{1}{6}(6)^3 \\cr &= 3(36) - 36 \\cr &= 108 - 36 \\cr &= 72\\text{ m} \\end{aligned}",
        "<strong>(d) & (e) Acceleration of $Q$ and speed difference:</strong><br><br>For particle $Q$, $u_Q = 3\\text{ m s}^{-1}$ and $s_Q = 72\\text{ m}$ at $t = 6\\text{ s}$.<br><br>Using $s = ut + \\dfrac{1}{2}at^2$:\\begin{aligned} &72 = 3(6) + \\dfrac{1}{2}a(6)^2 \\cr &72 = 18 + 18a \\cr &18a = 54 \\cr &a = 3\\text{ m s}^{-2} \\end{aligned}<br><br>Speed of $Q$ at $t = 6\\text{ s}$:\\begin{aligned} v_Q &= u + at \\cr &= 3 + 3(6) \\cr &= 21\\text{ m s}^{-1} \\end{aligned}<br><br>Difference in speeds:\\begin{aligned} |v_Q - v_P| &= 21 - 18 \\cr &= 3\\text{ m s}^{-1} \\end{aligned}",
        "Final Answer: (a) $6\\text{ s}, 18\\text{ m s}^{-1}$, (c) $72\\text{ m}$, (d) $3\\text{ m s}^{-2}$, (e) $3\\text{ m s}^{-1}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $6\\text{ s}, 18\\text{ m s}^{-1}$, (c) $72\\text{ m}$, (d) $4\\text{ m s}^{-2}$, (e) $9\\text{ m s}^{-1}$",
            "feedback": "Incorrect acceleration for $Q$. You assumed particle $Q$ started from rest ($u_Q = 0$). With $u_Q = 3\\text{ m s}^{-1}$, \\begin{aligned}72 &= 3(6) + 18a \\cr \\implies 18a & = 54 \\cr \\implies a & = 3\\text{ m s}^{-2}\\end{aligned}"
        },
        {
            "ans": "(a) $6\\text{ s}, 18\\text{ m s}^{-1}$, (c) $108\\text{ m}$, (d) $5\\text{ m s}^{-2}$, (e) $15\\text{ m s}^{-1}$",
            "feedback": "Incorrect distance in part (c). Evaluating displacement requires subtracting the cubic term: \\begin{aligned}s_P(6) & = 108 - \\frac{1}{6}(216)\\cr & = 108 - 36 \\cr &= 72\\text{ m}\\end{aligned} not $108\\text{ m}."
        },
        {
            "ans": "(a) $12\\text{ s}, 18\\text{ m s}^{-1}$, (c) $72\\text{ m}$, (d) $3\\text{ m s}^{-2}$, (e) $3\\text{ m s}^{-1}$",
            "feedback": "Incorrect time for maximum velocity. Setting $v_P = 0$ gives $t = 12\\text{ s}$ (instantaneous rest), whereas maximum velocity occurs when acceleration $a_P = 0$, giving $t = 6\\text{ s}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Dual Particle Collision Conditions",
        "content": "When two particles collide or one catches up with another, their displacements from the origin must be identical ($s_P = s_Q$). However, their speeds are rarely the same. For one particle to catch up with another from behind, its speed must actually exceed the other particle's speed at that instant ($v_Q > v_P$), which is why $Q$ is travelling at $21\\text{ m s}^{-1}$ while $P$ is travelling at $18\\text{ m s}^{-1}$."
    }
},
{
    "id": "012121",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "A",
    "major_area": "Dynamics and Statics",
    "topic": "Connected Particles and Friction",
    "subtopic": [
        "Inclined Plane",
        "Limiting Friction",
        "Pulleys"
    ],
    "img": "images/Mechanics_pngs/012121.png",
    "question": "The diagram shows a particle $A$ of mass $m\\text{ kg}$ held in contact with a rough plane inclined at $30^\\circ$ to the horizontal. One end of a light inextensible string is attached to particle $A$. The string passes over a small smooth pulley fixed at the top of the plane. The section of string from $A$ to the pulley is parallel to a line of greatest slope of the plane. A second particle $B$, of mass $M\\text{ kg}$, is attached to the other end of the string and hangs freely vertically below the pulley.<br><br>The coefficient of friction between particle $A$ and the plane is $\\mu$.<br><br><strong>(a)</strong> When $M = \\dfrac{1}{5}m$, particle $A$ is on the point of slipping down the plane. Find the exact value of $\\mu$, giving your answer in the form $\\dfrac{\\sqrt{3}}{k}$, where $k$ is an integer.<br><br>Particle $B$ is now removed and replaced by a particle of mass $\\dfrac{3}{2}m\\text{ kg}$. The system is released from rest with the string taut.<br><br><strong>(b)</strong> Find the acceleration of the particles in terms of $g$.<br><br><strong>(c)</strong> State two modelling assumptions made about the string, and explain how each assumption is used in your calculations.",
    "steps": [
        "<strong>(a) Finding the coefficient of friction $\\mu$:</strong><br><br>For particle $B$, vertical equilibrium gives:\\begin{aligned} T &= Mg \\cr &= \\dfrac{1}{5}mg \\end{aligned}<br><br>For particle $A$, resolving perpendicular to the plane ($\\nwarrow$):\\begin{aligned} R &= mg\\cos 30^\\circ \\cr &= mg\\left(\\dfrac{\\sqrt{3}}{2}\\right) \\end{aligned}<br><br>When $A$ is on the point of slipping down the plane, friction $F$ acts up the plane at maximum value $F = \\mu R$. Resolving parallel to the plane ($\\nearrow$):\\begin{aligned} &T + F - mg\\sin 30^\\circ = 0 \\cr &\\dfrac{1}{5}mg + \\mu mg\\left(\\dfrac{\\sqrt{3}}{2}\\right) - \\dfrac{1}{2}mg = 0 \\end{aligned}<br><br>Dividing through by $mg$:\\begin{aligned} &\\dfrac{1}{5} + \\dfrac{\\sqrt{3}}{2}\\mu = \\dfrac{1}{2} \\cr &\\dfrac{\\sqrt{3}}{2}\\mu = \\dfrac{3}{10} \\cr &\\mu = \\dfrac{6}{10\\sqrt{3}} \\cr &\\mu = \\dfrac{\\sqrt{3}}{5} \\end{aligned}<br><br>Thus $k = 5$.",
        "<strong>(b) Acceleration when $M = \\dfrac{3}{2}m$:</strong><br><br>Since $1.5m > m$, particle $B$ accelerates downwards and particle $A$ moves up the plane. Friction on $A$ now acts down the plane:\\begin{aligned} F &= \\mu R \\cr &= \\left(\\dfrac{\\sqrt{3}}{5}\\right)mg\\left(\\dfrac{\\sqrt{3}}{2}\\right) \\cr &= \\dfrac{3}{10}mg \\cr &= 0.3mg \\end{aligned}<br><br>Equation of motion for $B$ (downwards):\\begin{aligned} 1.5mg - T = 1.5ma \\quad \\text{--- [Eq 1]} \\end{aligned}<br><br>Equation of motion for $A$ (up the slope):\\begin{aligned} &T - mg\\sin 30^\\circ - F = ma \\cr &T - 0.5mg - 0.3mg = ma \\cr &T - 0.8mg = ma \\quad \\text{--- [Eq 2]} \\end{aligned}<br><br>Adding [Eq 1] and [Eq 2]:\\begin{aligned} &1.5mg - 0.8mg = 1.5ma + ma \\cr &0.7mg = 2.5ma \\cr &a = \\dfrac{0.7}{2.5}g \\cr &a = 0.28g \\text{ (or } \\dfrac{7}{25}g\\text{)} \\end{aligned}",
        "<strong>(c) Modelling assumptions about the string:</strong><br><br><strong>1. Light string:</strong> The string has negligible mass, meaning the tension $T$ is uniform throughout the entire length of the string.<br><br><strong>2. Inextensible string:</strong> The string does not stretch, meaning particle $A$ and particle $B$ have the same magnitude of acceleration $a$.",
        "Final Answer: (a) $k = 5$, (b) $0.28g$"
    ],
    "pi_options": [
        {
            "ans": "(a) $k = 5$, (b) $0.40g$",
            "feedback": "Incorrect acceleration in part (b). Remember that friction opposes motion up the slope: $T - 0.5mg - 0.3mg = ma$. Omitting the friction term gives $a = 0.40g$."
        },
        {
            "ans": "(a) $k = 3$, (b) $0.28g$",
            "feedback": "Incorrect value for $k$. Solving the equation gives $\\mu = \\dfrac{6}{10\\sqrt{3}} = \\dfrac{\\sqrt{3}}{5}$, so $k = 5$, not $3$."
        },
        {
            "ans": "(a) $k = 5$, (b) $0.16g$",
            "feedback": "Incorrect direction of friction in part (b). When particle $A$ accelerates up the plane, friction acts down the plane, so the total opposing force is $0.8mg$, not $0.2mg$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Friction Reversal",
        "content": "In connected particle problems on an incline, always re-evaluate the direction of friction whenever the masses change. In part <strong>(a)</strong>, impending motion was down the slope, so friction acted up the slope. In part <strong>(b)</strong>, the heavier hanging mass pulled $A$ up the slope, reversing friction so that it acted down the slope. Forgetting this reversal is one of the most frequent errors on exam scripts."
    }
},
{
    "id": "012122",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "A",
    "major_area": "Dynamics",
    "topic": "Connected Particles",
    "subtopic": [
        "Inclined Plane",
        "Friction",
        "Pulley Resultant Force"
    ],
    "img": "images/Mechanics_pngs/012122.png",
    "question": "The diagram shows a block $A$ of mass $4\\text{ kg}$ on a rough plane inclined at an angle $\\alpha$ to the horizontal, where $\\tan\\alpha = \\dfrac{3}{4}$. Block $A$ is connected to a particle $B$ of mass $6\\text{ kg}$ by a light inextensible string. The string passes over a small smooth pulley fixed at the top of the plane, and particle $B$ hangs freely vertically below the pulley. The part of the string between $A$ and the pulley lies along a line of greatest slope of the plane.<br><br>The coefficient of friction between block $A$ and the plane is $\\mu = 0.25$.<br><br>The system is released from rest with the string taut.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Show that particle $B$ accelerates downwards, and calculate the magnitude of this acceleration.<br><br><strong>(b)</strong> Calculate the tension in the string during the motion, giving your answer correct to 3 significant figures.<br><br><strong>(c)</strong> Calculate the magnitude of the resultant force exerted by the string on the pulley, giving your answer correct to 3 significant figures.",
    "steps": [
        "<strong>(a) Direction of motion and acceleration:</strong><br><br>From $\\tan\\alpha = \\dfrac{3}{4}$, we have $\\sin\\alpha = 0.6$ and $\\cos\\alpha = 0.8$.<br><br>For block $A$, resolving perpendicular to the plane ($\\nwarrow$):\\begin{aligned} R &= 4g\\cos\\alpha \\cr &= 4(9.8)(0.8) \\cr &= 31.36\\text{ N} \\end{aligned}<br><br>Maximum friction:\\begin{aligned} F &= \\mu R \\cr &= 0.25(31.36) \\cr &= 7.84\\text{ N} \\cr &= 0.8g\\text{ N} \\end{aligned}<br><br>Component of weight down the plane:\\begin{aligned} W_{\\parallel} &= 4g\\sin\\alpha \\cr &= 4g(0.6) \\cr &= 2.4g\\text{ N} \\end{aligned}<br><br>Total resistance for $A$ moving up the slope is $2.4g + 0.8g = 3.2g\\text{ N}$. Since the downward weight of $B$ is $6g\\text{ N} > 3.2g\\text{ N}$, particle $B$ accelerates downwards.<br><br>Equations of motion:\\begin{aligned} &6g - T = 6a \\cr &T - 3.2g = 4a \\end{aligned}<br><br>Adding equations:\\begin{aligned} &2.8g = 10a \\cr &a = 0.28g \\cr &a = 0.28(9.8) \\cr &a = 2.744\\text{ m s}^{-2} \\cr &a \\approx 2.74\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Tension in the string:</strong><br><br>Using the equation for $B$:\\begin{aligned} T &= 6(g - a) \\cr &= 6(9.8 - 2.744) \\cr &= 6(7.056) \\cr &= 42.336\\text{ N} \\cr &\\approx 42.3\\text{ N} \\end{aligned}",
        "<strong>(c) Resultant force on the pulley:</strong><br><br>The string exerts two forces of magnitude $T = 42.336\\text{ N}$ on the pulley: one directed down the incline at angle $\\alpha$ below horizontal, and one directed vertically downwards.<br><br>Resolving horizontally ($\\leftarrow$):\\begin{aligned} F_x &= T\\cos\\alpha \\cr &= 42.336(0.8) \\cr &= 33.869\\text{ N} \\end{aligned}<br><br>Resolving vertically ($\\downarrow$):\\begin{aligned} F_y &= T + T\\sin\\alpha \\cr &= 42.336(1 + 0.6) \\cr &= 42.336(1.6) \\cr &= 67.738\\text{ N} \\end{aligned}<br><br>Resultant force:\\begin{aligned} R_{\\text{pulley}} &= \\sqrt{F_x^2 + F_y^2} \\cr &= \\sqrt{33.869^2 + 67.738^2} \\cr &= \\sqrt{1147.1 + 4588.4} \\cr &= \\sqrt{5735.5} \\cr &\\approx 75.7\\text{ N} \\end{aligned}",
        "Final Answer: (a) $2.74\\text{ m s}^{-2}$, (b) $42.3\\text{ N}$, (c) $75.7\\text{ N}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $2.74\\text{ m s}^{-2}$, (b) $42.3\\text{ N}$, (c) $84.7\\text{ N}$",
            "feedback": "Incorrect pulley force in part (c). The two tensions are not parallel; you cannot simply add them as $2T = 84.7\\text{ N}$. You must resolve vectorially or use $R = \\sqrt{2T^2(1 + \\sin\\alpha)}$."
        },
        {
            "ans": "(a) $3.53\\text{ m s}^{-2}$, (b) $37.6\\text{ N}$, (c) $75.7\\text{ N}$",
            "feedback": "Incorrect acceleration in part (a). The friction force on block $A$ was neglected, giving $6g - 2.4g = 10a$ which leads to $a = 0.36g = 3.53\\text{ m s}^{-2}$."
        },
        {
            "ans": "(a) $2.74\\text{ m s}^{-2}$, (b) $58.8\\text{ N}$, (c) $105\\text{ N}$",
            "feedback": "Incorrect tension in part (b). $T = 58.8\\text{ N}$ assumes static equilibrium ($T = 6g$). Because $B$ is accelerating downwards, $T = 6(g - a) \\approx 42.3\\text{ N}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Resultant Force on a Pulley",
        "content": "To find the force on a pulley without resolving into $x$ and $y$ components, note that the angle between the two string segments is $90^\\circ - \\alpha$. The angle between the tension vectors is $180^\\circ - (90^\\circ - \\alpha) = 90^\\circ + \\alpha$. Using the cosine rule of vectors gives \\begin{aligned}R &= \\sqrt{2T^2(1 + \\sin\\alpha)}\\cr & = T\\sqrt{3.2}\\cr & \\approx 1.789T\\end{aligned}."
    }
},
{
    "id": "012123",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "A",
    "major_area": "Dynamics",
    "topic": "Connected Particles and Multi-Stage Motion",
    "subtopic": [
        "Horizontal Surface",
        "Impact with Ground",
        "Coasting under Friction"
    ],
    "img": "images/Mechanics_pngs/012123.png",
    "question": "The diagram shows a block $A$ of mass $3\\text{ kg}$ resting on a rough horizontal table. Block $A$ is connected to a particle $B$ of mass $2\\text{ kg}$ by a light inextensible string that passes over a small smooth pulley fixed at the edge of the table. Particle $B$ hangs freely vertically below the pulley. The coefficient of friction between block $A$ and the table is $0.4$.<br><br>The system is released from rest from a position where block $A$ is a sufficient distance from the pulley.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Calculate the acceleration of the system and the tension in the string.<br><br>After the system has been moving for $1.5\\text{ seconds}$, particle $B$ reaches the floor and does not rebound.<br><br><strong>(b)</strong><br><strong>(i)</strong> Find the speed of block $A$ at the instant particle $B$ hits the floor.<br><strong>(ii)</strong> Calculate the further distance block $A$ travels along the table before coming to rest, assuming it does not reach the pulley.",
    "steps": [
        "<strong>(a) Acceleration and tension:</strong><br><br>For block $A$, vertical equilibrium gives $R = 3g = 29.4\\text{ N}$.<br><br>Frictional force:\\begin{aligned} F &= \\mu R \\cr &= 0.4(29.4) \\cr &= 11.76\\text{ N} \\cr &= 1.2g\\text{ N} \\end{aligned}<br><br>Equations of motion for $A$ and $B$:\\begin{aligned} &T - 1.2g = 3a \\cr &2g - T = 2a \\end{aligned}<br><br>Adding the equations:\\begin{aligned} &0.8g = 5a \\cr &a = 0.16g \\cr &a = 0.16(9.8) \\cr &a = 1.568\\text{ m s}^{-2} \\cr &a \\approx 1.57\\text{ m s}^{-2} \\end{aligned}<br><br>Finding tension:\\begin{aligned} T &= 2(g - a) \\cr &= 2(9.8 - 1.568) \\cr &= 2(8.232) \\cr &= 16.464\\text{ N} \\cr &\\approx 16.5\\text{ N} \\end{aligned}",
        "<strong>(b)(i) Speed when $B$ hits the floor:</strong><br><br>Using $v = u + at$ with $u = 0$ and $t = 1.5\\text{ s}$:\\begin{aligned} v &= 0 + 1.568(1.5) \\cr &= 2.352\\text{ m s}^{-1} \\cr &\\approx 2.35\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(b)(ii) Further distance travelled by $A$:</strong><br><br>After $B$ hits the floor, the string becomes slack ($T = 0$).<br><br>Block $A$ decelerates under friction alone:\\begin{aligned} -F &= m_A a' \\cr -11.76 &= 3a' \\cr a' &= -3.92\\text{ m s}^{-2} \\end{aligned}<br><br>Using $v^2 = u^2 + 2a's$ to find distance to rest ($v = 0$):\\begin{aligned} &0 = (2.352)^2 + 2(-3.92)s \\cr &7.84s = 5.5319 \\cr &s = \\dfrac{5.5319}{7.84} \\cr &s = 0.7056\\text{ m} \\cr &s \\approx 0.706\\text{ m} \\end{aligned}",
        "Final Answer: (a) $a = 1.57\\text{ m s}^{-2}, T = 16.5\\text{ N}$, (b)(i) $2.35\\text{ m s}^{-1}$, (b)(ii) $0.706\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $a = 1.57\\text{ m s}^{-2}, T = 16.5\\text{ N}$, (b)(i) $2.35\\text{ m s}^{-1}$, (b)(ii) $1.76\\text{ m}$",
            "feedback": "Incorrect deceleration in part (b)(ii). Once $B$ hits the floor, the mass being decelerated is only block $A$ ($3\\text{ kg}$), so $a' = -\\mu g = -3.92\\text{ m s}^{-2}$, not the original system acceleration."
        },
        {
            "ans": "(a) $a = 3.92\\text{ m s}^{-2}, T = 11.8\\text{ N}$, (b)(i) $5.88\\text{ m s}^{-1}$, (b)(ii) $0.706\\text{ m}$",
            "feedback": "Incorrect system acceleration in part (a). The mass term in Newton's second law is the total mass $m_A + m_B = 5\\text{ kg}$, not $2\\text{ kg}$."
        },
        {
            "ans": "(a) $a = 1.57\\text{ m s}^{-2}, T = 16.5\\text{ N}$, (b)(i) $2.35\\text{ m s}^{-1}$, (b)(ii) $1.41\\text{ m}$",
            "feedback": "Calculation slip in part (b)(ii). In $v^2 = u^2 + 2as$, the denominator is $2a' = 7.84$, giving $s = 5.5319 / 7.84 \\approx 0.706\\text{ m}$, not $5.5319 / 3.92$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: String Slackness Post-Impact",
        "content": "When a hanging particle hits the ground, students frequently make the error of using the connected system's acceleration to model the subsequent motion. The moment $B$ hits the floor, the string goes slack and tension vanishes ($T = 0$). Block $A$ becomes an independent particle moving solely under its own friction, so its deceleration changes immediately from $a = 1.57\\text{ m s}^{-2}$ to $a' = \\mu g = 3.92\\text{ m s}^{-2}$."
    }
},
{
    "id": "012124",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "A",
    "major_area": "Dynamics",
    "topic": "Connected Particles",
    "subtopic": [
        "Double Inclined Plane",
        "Friction",
        "Direction of Motion"
    ],
    "img": "images/Mechanics_pngs/012124.png",
    "question": "The diagram shows two particles $A$ and $B$, of masses $5\\text{ kg}$ and $3\\text{ kg}$ respectively, connected by a light inextensible string that passes over a small smooth pulley fixed at the apex of a fixed wedge.<br><br>Particle $A$ rests on a smooth face of the wedge inclined at an angle $\\alpha$ to the horizontal, where $\\sin\\alpha = 0.6$.<br>Particle $B$ rests on a rough face of the wedge inclined at an angle $\\beta$ to the horizontal, where $\\sin\\beta = 0.8$.<br>The coefficient of friction between particle $B$ and its face is $\\mu = 0.2$.<br><br>Both sections of the string are taut and parallel to the lines of greatest slope of their respective faces. The system is released from rest.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Determine whether the system moves, and if so, state whether particle $A$ moves up or down its slope, fully justifying your answer.<br><br><strong>(b)</strong> Calculate the magnitude of the acceleration of the particles.<br><br><strong>(c)</strong> Calculate the tension in the string during the motion.",
    "steps": [
        "<strong>(a) Determining the direction of motion:</strong><br><br>From the given values, $\\cos\\beta = \\sqrt{1 - 0.8^2} = 0.6$.<br><br>Gravitational driving force of $A$ down the left face:\\begin{aligned} W_{A\\parallel} &= 5g\\sin\\alpha \\cr &= 5g(0.6) \\cr &= 3g\\text{ N} \\end{aligned}<br><br>Gravitational force of $B$ down the right face:\\begin{aligned} W_{B\\parallel} &= 3g\\sin\\beta \\cr &= 3g(0.8) \\cr &= 2.4g\\text{ N} \\end{aligned}<br><br>Normal reaction on $B$:\\begin{aligned} R_B &= 3g\\cos\\beta \\cr &= 3g(0.6) \\cr &= 1.8g\\text{ N} \\end{aligned}<br><br>Maximum friction on $B$:\\begin{aligned} F_{\\text{max}} &= \\mu R_B \\cr &= 0.2(1.8g) \\cr &= 0.36g\\text{ N} \\end{aligned}<br><br>If $A$ moves down its slope, $B$ must move up its slope, so friction opposes motion up the right face. The net driving force is:\\begin{aligned} W_{A\\parallel} - W_{B\\parallel} &= 3g - 2.4g \\cr &= 0.6g\\text{ N} \\end{aligned}<br><br>Since $0.6g > F_{\\text{max}} = 0.36g$, the driving force overcomes friction. The system moves, and particle $A$ moves down its slope.",
        "<strong>(b) Acceleration of the particles:</strong><br><br>Equations of motion for $A$ and $B$:\\begin{aligned} &5g\\sin\\alpha - T = 5a \\cr &3g - T = 5a \\quad \\text{--- [Eq 1]} \\end{aligned}\\begin{aligned} &T - 3g\\sin\\beta - F = 3a \\cr &T - 2.4g - 0.36g = 3a \\cr &T - 2.76g = 3a \\quad \\text{--- [Eq 2]} \\end{aligned}<br><br>Adding [Eq 1] and [Eq 2]:\\begin{aligned} &3g - 2.76g = 8a \\cr &0.24g = 8a \\cr &a = 0.03g \\cr &a = 0.03(9.8) \\cr &a = 0.294\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(c) Tension in the string:</strong><br><br>Using [Eq 1]:\\begin{aligned} T &= 3g - 5a \\cr &= 3(9.8) - 5(0.294) \\cr &= 29.4 - 1.47 \\cr &= 27.93\\text{ N} \\cr &\\approx 27.9\\text{ N} \\end{aligned}",
        "Final Answer: (a) Moves, $A$ moves down, (b) $0.294\\text{ m s}^{-2}$, (c) $27.9\\text{ N}$"
    ],
    "pi_options": [
        {
            "ans": "(a) Moves, $A$ moves down, (b) $0.294\\text{ m s}^{-2}$, (c) $47.5\\text{ N}$",
            "feedback": "Incorrect tension in part (c). In the equation of motion for particle $A$, the gravitational component is $5g\\sin\\alpha = 3g = 29.4\\text{ N}$, not $5g$. This gives $T = 3g - 5a = 27.9\\text{ N}$."
        },
        {
            "ans": "(a) Remains at rest, (b) $0\\text{ m s}^{-2}$, (c) $23.5\\text{ N}$",
            "feedback": "Incorrect conclusion in part (a). The gravitational difference between the two slopes is $3g - 2.4g = 0.6g = 5.88\\text{ N}$, which strictly exceeds the maximum friction $F_{\\text{max}} = 0.36g = 3.53\\text{ N}$, so motion does occur."
        },
        {
            "ans": "(a) Moves, $A$ moves down, (b) $0.735\\text{ m s}^{-2}$, (c) $27.9\\text{ N}$",
            "feedback": "Incorrect acceleration in part (b). The total mass in Newton's second law is $m_A + m_B = 8\\text{ kg}$, not $5 - 3 = 2\\text{ kg}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Testing Equilibrium on Double Wedges",
        "content": "To determine whether a system on a double wedge moves, never guess the direction. First, calculate the gravitational pull along the slope for each particle: $m_A g\\sin\\alpha$ and $m_B g\\sin\\beta$. The larger pull determines the potential direction of motion. Motion only occurs if the difference between these two pulls strictly exceeds the maximum available friction force on the rough plane ($|m_A g\\sin\\alpha - m_B g\\sin\\beta| > \\mu R$)."
    }
},
{
    "id": "012125",
    "branch": "Mechanics",
    "board": "OCR",
    "level": "A",
    "major_area": "Dynamics and Kinematics",
    "topic": "Connected Particles",
    "subtopic": [
        "Smooth Inclined Plane",
        "Ground Impact",
        "Subsequent Motion"
    ],
    "img": "images/Mechanics_pngs/012125.png",
    "question": "The diagram shows a particle $A$ of mass $2\\text{ kg}$ held at rest on a smooth plane inclined at $30^\\circ$ to the horizontal. Particle $A$ is connected to a particle $B$ of mass $3\\text{ kg}$ by a light inextensible string that passes over a small smooth pulley fixed at the top of the plane. The section of string between $A$ and the pulley lies along a line of greatest slope of the plane.<br><br>Particle $B$ hangs freely vertically below the pulley at a height of $h = 1.0\\text{ m}$ above horizontal ground.<br><br>The system is released from rest with the string taut. When particle $B$ hits the ground, it does not rebound, and the string immediately becomes slack.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Calculate the acceleration of the system while particle $B$ is descending.<br><br><strong>(b)</strong> Find the speed of particle $B$ at the instant it hits the ground.<br><br><strong>(c)</strong> Calculate the further distance particle $A$ travels up the plane before coming to instantaneous rest, assuming $A$ does not reach the pulley.<br><br><strong>(d)</strong> Find the total time elapsed from the release of the system until particle $A$ first comes to instantaneous rest.",
    "steps": [
        "<strong>(a) Acceleration while $B$ descends:</strong><br><br>Component of weight of $A$ down the smooth plane:\\begin{aligned} W_{A\\parallel} &= 2g\\sin 30^\\circ \\cr &= 2(9.8)(0.5) \\cr &= 9.8\\text{ N} \\cr &= 1g\\text{ N} \\end{aligned}<br><br>Equations of motion for $B$ (downwards) and $A$ (upwards):\\begin{aligned} &3g - T = 3a \\cr &T - 1g = 2a \\end{aligned}<br><br>Adding the equations:\\begin{aligned} &2g = 5a \\cr &a = 0.4g \\cr &a = 0.4(9.8) \\cr &a = 3.92\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Speed at impact:</strong><br><br>Particle $B$ descends from rest ($u = 0$) through $h = 1.0\\text{ m}$ under acceleration $a = 3.92\\text{ m s}^{-2}$.<br><br>Using $v^2 = u^2 + 2ah$:\\begin{aligned} v^2 &= 0 + 2(3.92)(1.0) \\cr &= 7.84 \\cr v &= \\sqrt{7.84} \\cr &= 2.8\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(c) Further distance travelled by $A$:</strong><br><br>When $B$ hits the ground, the string goes slack ($T = 0$).<br><br>Particle $A$ moves up the smooth plane with initial speed $u = 2.8\\text{ m s}^{-1}$, retarded only by gravity:\\begin{aligned} -2g\\sin 30^\\circ &= 2a' \\cr a' &= -g\\sin 30^\\circ \\cr &= -4.9\\text{ m s}^{-2} \\end{aligned}<br><br>Using $v^2 = u^2 + 2a's$ to find distance until instantaneous rest ($v = 0$):\\begin{aligned} &0 = (2.8)^2 + 2(-4.9)s \\cr &9.8s = 7.84 \\cr &s = \\dfrac{7.84}{9.8} \\cr &s = 0.8\\text{ m} \\end{aligned}",
        "<strong>(d) Total time to rest:</strong><br><br>Time for Stage 1 ($B$ descending):\\begin{aligned} v &= at_1 \\cr 2.8 &= 3.92t_1 \\cr t_1 &= \\dfrac{2.8}{3.92} \\cr &= \\dfrac{5}{7}\\text{ s} \\cr &\\approx 0.714\\text{ s} \\end{aligned}<br><br>Time for Stage 2 ($A$ coasting to rest):\\begin{aligned} 0 &= 2.8 - 4.9t_2 \\cr 4.9t_2 &= 2.8 \\cr t_2 &= \\dfrac{2.8}{4.9} \\cr &= \\dfrac{4}{7}\\text{ s} \\cr &\\approx 0.571\\text{ s} \\end{aligned}<br><br>Total time:\\begin{aligned} T &= t_1 + t_2 \\cr &= \\dfrac{5}{7} + \\dfrac{4}{7} \\cr &= \\dfrac{9}{7}\\text{ s} \\cr &\\approx 1.29\\text{ s} \\end{aligned}",
        "Final Answer: (a) $3.92\\text{ m s}^{-2}$, (b) $2.8\\text{ m s}^{-1}$, (c) $0.8\\text{ m}$, (d) $1.29\\text{ s}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $3.92\\text{ m s}^{-2}$, (b) $2.8\\text{ m s}^{-1}$, (c) $0.8\\text{ m}$, (d) $0.714\\text{ s}$",
            "feedback": "Incorrect total time in part (d). $0.714\\text{ s}$ is only the duration of the first stage while $B$ descends. You must add the second stage coasting duration ($t_2 = 0.571\\text{ s}$) to obtain $1.29\\text{ s}$."
        },
        {
            "ans": "(a) $5.88\\text{ m s}^{-2}$, (b) $3.43\\text{ m s}^{-1}$, (c) $1.20\\text{ m}$, (d) $1.29\\text{ s}$",
            "feedback": "Incorrect acceleration in part (a). The total mass accelerating is $m_A + m_B = 5\\text{ kg}$, not $3\\text{ kg}$, giving $a = 2g / 5 = 3.92\\text{ m s}^{-2}$."
        },
        {
            "ans": "(a) $3.92\\text{ m s}^{-2}$, (b) $2.8\\text{ m s}^{-1}$, (c) $1.8\\text{ m}$, (d) $1.29\\text{ s}$",
            "feedback": "Incorrect distance in part (c). $1.8\\text{ m}$ is the total distance travelled by $A$ from release ($1.0 + 0.8\\text{ m}$); the question specifically asks for the further distance travelled after $B$ hits the ground ($0.8\\text{ m}$)."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Energy Conservation for Coasting",
        "content": "In part <strong>(c)</strong>, because the plane is smooth, energy is conserved during the coasting phase after $B$ hits the ground. All kinetic energy of particle $A$ converts directly into gravitational potential energy: \\begin{aligned}\\dfrac{1}{2}m v^2 &= m g \\Delta h\\cr & = m g (s \\sin 30^\\circ)\\end{aligned} Thus \\begin{aligned}s &= \\dfrac{v^2}{2g\\sin 30^\\circ}\\cr & = \\dfrac{7.84}{9.8} \\cr & = 0.8\\text{ m}\\end{aligned} avoiding kinematic equations entirely."
    }
},
{
    "id": "012126",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "AS",
    "major_area": "Forces and Newton's Laws",
    "topic": "Equilibrium of a Particle",
    "subtopic": [
        "Coplanar Forces",
        "Column Vectors",
        "Equilibrium Conditions"
    ],
    "img": false,
    "question": "A particle is in equilibrium under the action of three coplanar forces, given in newtons by:$$\\mathbf{F}_1 = \\begin{pmatrix} 12 \\\\ 0 \\end{pmatrix}, \\quad \\mathbf{F}_2 = \\begin{pmatrix} 3p \\\\ -4p \\end{pmatrix}, \\quad \\text{and} \\quad \\mathbf{F}_3 = \\begin{pmatrix} 0 \\\\ q \\end{pmatrix}$$where $p$ and $q$ are constants.<br><br><strong>(a)</strong> Find the values of $p$ and $q$.<br><br><strong>(b)</strong> The force $\\mathbf{F}_1$ is suddenly removed. State the magnitude and direction of the resultant of the two remaining forces.<br><br><strong>(c)</strong> Calculate the magnitude of $\\mathbf{F}_2$ and the acute angle it makes with the positive $x$-axis, giving the angle correct to the nearest $0.1^\\circ$.",
    "steps": [
        "<strong>(a) Equilibrium conditions:</strong><br><br>Since the particle is in equilibrium, the vector sum of all forces is zero:\\begin{aligned} &\\mathbf{F}_1 + \\mathbf{F}_2 + \\mathbf{F}_3 = \\mathbf{0} \\cr &\\begin{pmatrix} 12 \\\\ 0 \\end{pmatrix} + \\begin{pmatrix} 3p \\\\ -4p \\end{pmatrix} + \\begin{pmatrix} 0 \\\\ q \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix} \\end{aligned}<br><br>Equating top ($x$) components:\\begin{aligned} &12 + 3p = 0 \\cr &3p = -12 \\cr &p = -4 \\end{aligned}<br><br>Equating bottom ($y$) components:\\begin{aligned} &0 - 4p + q = 0 \\cr &-4(-4) + q = 0 \\cr &16 + q = 0 \\cr &q = -16 \\end{aligned}",
        "<strong>(b) Resultant of remaining forces:</strong><br><br>From the equilibrium condition:\\begin{aligned} \\mathbf{F}_2 + \\mathbf{F}_3 = -\\mathbf{F}_1 \\end{aligned}<br><br>Therefore, the resultant force $\\mathbf{R}$ is:\\begin{aligned} \\mathbf{R} &= -\\begin{pmatrix} 12 \\\\ 0 \\end{pmatrix} \\cr &= \\begin{pmatrix} -12 \\\\ 0 \\end{pmatrix}\\text{ N} \\end{aligned}<br><br>The resultant has magnitude $12\\text{ N}$ and acts in the negative $x$-direction (due West / bearing $270^\\circ$).",
        "<strong>(c) Magnitude and angle of $\\mathbf{F}_2$:</strong><br><br>Substituting $p = -4$ into $\\mathbf{F}_2$:\\begin{aligned} \\mathbf{F}_2 &= \\begin{pmatrix} 3(-4) \\\\ -4(-4) \\end{pmatrix} \\cr &= \\begin{pmatrix} -12 \\\\ 16 \\end{pmatrix}\\text{ N} \\end{aligned}<br><br>Calculating magnitude:\\begin{aligned} |\\mathbf{F}_2| &= \\sqrt{(-12)^2 + 16^2} \\cr &= \\sqrt{144 + 256} \\cr &= \\sqrt{400} \\cr &= 20\\text{ N} \\end{aligned}<br><br>Let $\\alpha$ be the acute angle with the positive $x$-axis:\\begin{aligned} \\tan\\alpha &= \\left|\\dfrac{16}{-12}\\right| \\cr &= \\dfrac{4}{3} \\cr &\\approx 1.3333 \\cr \\alpha &= \\arctan(1.3333) \\cr &\\approx 53.1^\\circ \\end{aligned}",
        "Final Answer: (a) $p = -4, q = -16$, (b) $12\\text{ N}$ due West, (c) $20\\text{ N}, 53.1^\\circ$"
    ],
    "pi_options": [
        {
            "ans": "(a) $p = -4, q = 16$, (b) $12\\text{ N}$ due West, (c) $20\\text{ N}, 53.1^\\circ$",
            "feedback": "Incorrect sign for $q$. In vertical equilibrium, $-4(-4) + q = 0$ gives $16 + q = 0$, so $q = -16$."
        },
        {
            "ans": "(a) $p = -4, q = -16$, (b) $12\\text{ N}$ due East, (c) $20\\text{ N}, 53.1^\\circ$",
            "feedback": "Incorrect direction in part (b). The resultant of the remaining forces is equal and opposite to $\\mathbf{F}_1$. Since $\\mathbf{F}_1$ acts due East, the resultant must act due West."
        },
        {
            "ans": "(a) $p = -4, q = -16$, (b) $12\\text{ N}$ due West, (c) $20\\text{ N}, 36.9^\\circ$",
            "feedback": "Incorrect angle in part (c). The angle with the horizontal satisfies $\\tan\\alpha = \\frac{16}{12} = \\frac{4}{3}$, giving $\\alpha \\approx 53.1^\\circ$. The value $36.9^\\circ$ is measured from the vertical."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Equilibrium Removal Trick",
        "content": "When a particle is in equilibrium under three forces, the resultant of any two forces is always exactly equal in magnitude and opposite in direction to the third force: $\\mathbf{F}_2 + \\mathbf{F}_3 = -\\mathbf{F}_1$. Recognising this means part <strong>(b)</strong> requires zero calculation."
    }
},
{
    "id": "012127",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "AS",
    "major_area": "Forces and Newton's Laws",
    "topic": "Equilibrium and Newton's Second Law",
    "subtopic": [
        "Unit Vectors",
        "Linear Equations",
        "Acceleration Vector"
    ],
    "img": false,
    "question": "A particle of mass $2\\text{ kg}$ is initially in equilibrium under the action of three coplanar forces:$$\\mathbf{F}_1 = (p\\mathbf{i} + 2q\\mathbf{j})\\text{ N}$$$$\\mathbf{F}_2 = \\big((2p - 1)\\mathbf{i} - 5\\mathbf{j}\\big)\\text{ N}$$$$\\mathbf{F}_3 = \\big(-8\\mathbf{i} + (q - 7)\\mathbf{j}\\big)\\text{ N}$$where $p$ and $q$ are constants, and $\\mathbf{i}$ and $\\mathbf{j}$ are perpendicular horizontal unit vectors.<br><br><strong>(a)</strong> By considering components in the $\\mathbf{i}$ and $\\mathbf{j}$ directions, find the values of $p$ and $q$.<br><br>The force $\\mathbf{F}_3$ is now removed, while $\\mathbf{F}_1$ and $\\mathbf{F}_2$ continue to act unchanged.<br><br><strong>(b)</strong> Find the acceleration vector of the particle.<br><br><strong>(c)</strong> Calculate the magnitude of this acceleration and the angle its direction makes with the unit vector $\\mathbf{i}$, giving your answers correct to 3 significant figures.",
    "steps": [
        "<strong>(a) Finding $p$ and $q$:</strong><br><br>In equilibrium, $\\Sigma \\mathbf{F} = \\mathbf{0}$.<br><br>Summing components in the $\\mathbf{i}$ direction:\\begin{aligned} &p + (2p - 1) - 8 = 0 \\cr &3p - 9 = 0 \\cr &3p = 9 \\cr &p = 3 \\end{aligned}<br><br>Summing components in the $\\mathbf{j}$ direction:\\begin{aligned} &2q - 5 + (q - 7) = 0 \\cr &3q - 12 = 0 \\cr &3q = 12 \\cr &q = 4 \\end{aligned}",
        "<strong>(b) Acceleration vector:</strong><br><br>When $\\mathbf{F}_3$ is removed, the resultant force $\\mathbf{R}$ is:\\begin{aligned} \\mathbf{R} &= -\\mathbf{F}_3 \\cr &= -\\big(-8\\mathbf{i} + (4 - 7)\\mathbf{j}\\big) \\cr &= -(-8\\mathbf{i} - 3\\mathbf{j}) \\cr &= (8\\mathbf{i} + 3\\mathbf{j})\\text{ N} \\end{aligned}<br><br>Using Newton's second law ($\\mathbf{F} = m\\mathbf{a}$):\\begin{aligned} \\mathbf{a} &= \\dfrac{\\mathbf{R}}{m} \\cr &= \\dfrac{8\\mathbf{i} + 3\\mathbf{j}}{2} \\cr &= (4\\mathbf{i} + 1.5\\mathbf{j})\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(c) Magnitude and angle of acceleration:</strong><br><br>Calculating magnitude:\\begin{aligned} |\\mathbf{a}| &= \\sqrt{4^2 + 1.5^2} \\cr &= \\sqrt{16 + 2.25} \\cr &= \\sqrt{18.25} \\cr &\\approx 4.27\\text{ m s}^{-2} \\end{aligned}<br><br>Let $\\theta$ be the angle with $\\mathbf{i}$:\\begin{aligned} \\tan\\theta &= \\dfrac{1.5}{4} \\cr &= 0.375 \\cr \\theta &= \\arctan(0.375) \\cr &\\approx 20.6^\\circ \\end{aligned}",
        "Final Answer: (a) $p = 3, q = 4$, (b) $(4\\mathbf{i} + 1.5\\mathbf{j})\\text{ m s}^{-2}$, (c) $4.27\\text{ m s}^{-2}, 20.6^\\circ$"
    ],
    "pi_options": [
        {
            "ans": "(a) $p = 3, q = 4$, (b) $(8\\mathbf{i} + 3\\mathbf{j})\\text{ m s}^{-2}$, (c) $8.54\\text{ m s}^{-2}, 20.6^\\circ$",
            "feedback": "Forgot to divide by mass in part (b). Newton's second law is $\\mathbf{a} = \\frac{\\mathbf{F}}{m}$. With $m = 2\\text{ kg}$, the resultant force must be divided by $2$."
        },
        {
            "ans": "(a) $p = 3, q = 4$, (b) $(4\\mathbf{i} + 1.5\\mathbf{j})\\text{ m s}^{-2}$, (c) $4.27\\text{ m s}^{-2}, 69.4^\\circ$",
            "feedback": "Incorrect angle reference in part (c). The angle with $\\mathbf{i}$ satisfies $\\tan\\theta = 1.5 / 4$, giving $20.6^\\circ$. The value $69.4^\\circ$ is measured from $\\mathbf{j}$."
        },
        {
            "ans": "(a) $p = 2, q = 5$, (b) $(4\\mathbf{i} + 1.5\\mathbf{j})\\text{ m s}^{-2}$, (c) $4.27\\text{ m s}^{-2}, 20.6^\\circ$",
            "feedback": "Algebraic slip in part (a). Summing $\\mathbf{i}$ components gives $p + 2p - 1 - 8 = 0$, which leads to $3p = 9$ and $p = 3$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Component Independence",
        "content": "In Cartesian vector mechanics, motion in the $\\mathbf{i}$ and $\\mathbf{j}$ directions is completely independent. Equilibrium must hold separately in both axes. Never attempt to combine coefficients from $\\mathbf{i}$ and $\\mathbf{j}$ into a single equation."
    }
},
{
    "id": "012128",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "AS",
    "major_area": "Dynamics and Kinematics",
    "topic": "Newton's Second Law and Vector Kinematics",
    "subtopic": [
        "Column Vectors",
        "Parameter for Equilibrium",
        "2D Kinematics"
    ],
    "img": false,
    "question": "A particle of mass $1.5\\text{ kg}$ is initially at rest at the origin. It is acted upon by three constant coplanar forces:$$\\mathbf{F}_1 = \\begin{pmatrix} 5 \\\\ -1 \\end{pmatrix}\\text{ N}$$ $$ \\mathbf{F}_2 = \\begin{pmatrix} -3 \\\\ 5 \\end{pmatrix}\\text{ N}$$ $$\\text{and} \\quad \\mathbf{F}_3 = \\begin{pmatrix} k \\\\ -4 \\end{pmatrix}\\text{ N}$$ where $k$ is a constant.<br><br><strong>(a)</strong> Given that the particle remains at rest in equilibrium, find the value of $k$.<br><br>In a different scenario, the force $\\mathbf{F}_3$ is replaced by a force $\\mathbf{F}_4 = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}\\text{ N}$, while $\\mathbf{F}_1$ and $\\mathbf{F}_2$ remain unchanged. The particle starts from rest at $t = 0$.<br><br><strong>(b)</strong> Find the acceleration vector of the particle.<br><br><strong>(c)</strong> Find the speed of the particle at time $t = 3\\text{ seconds}$, giving your answer in exact surd form.<br><br><strong>(d)</strong> Find the position vector of the particle at time $t = 3\\text{ seconds}$, and calculate its distance from the origin.",
    "steps": [
        "<strong>(a) Finding $k$ for equilibrium:</strong><br><br>Equating the sum of $x$-components to zero:\\begin{aligned} &5 + (-3) + k = 0 \\cr &2 + k = 0 \\cr &k = -2 \\end{aligned}<br><br>(Checking $y$-components: $-1 + 5 - 4 = 0$, which is consistent).",
        "<strong>(b) Acceleration vector with $\\mathbf{F}_4$:</strong><br><br>The new resultant force $\\mathbf{R}$ is:\\begin{aligned} \\mathbf{R} &= \\begin{pmatrix} 5 \\\\ -1 \\end{pmatrix} + \\begin{pmatrix} -3 \\\\ 5 \\end{pmatrix} + \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} \\cr &= \\begin{pmatrix} 5 - 3 + 1 \\\\ -1 + 5 + 2 \\end{pmatrix} \\cr &= \\begin{pmatrix} 3 \\\\ 6 \\end{pmatrix}\\text{ N} \\end{aligned}<br><br>Using $\\mathbf{F} = m\\mathbf{a}$ with $m = 1.5\\text{ kg}$:\\begin{aligned} \\mathbf{a} &= \\dfrac{1}{1.5}\\begin{pmatrix} 3 \\\\ 6 \\end{pmatrix} \\cr &= \\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(c) Speed at $t = 3\\text{ seconds}$:</strong><br><br>Using $\\mathbf{v} = \\mathbf{u} + \\mathbf{a}t$ with $\\mathbf{u} = \\mathbf{0}$:\\begin{aligned} \\mathbf{v} &= \\mathbf{0} + 3\\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix} \\cr &= \\begin{pmatrix} 6 \\\\ 12 \\end{pmatrix}\\text{ m s}^{-1} \\end{aligned}<br><br>Calculating speed:\\begin{aligned} |\\mathbf{v}| &= \\sqrt{6^2 + 12^2} \\cr &= \\sqrt{36 + 144} \\cr &= \\sqrt{180} \\cr &= 6\\sqrt{5}\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(d) Position vector and distance:</strong><br><br>Using $\\mathbf{s} = \\mathbf{u}t + \\dfrac{1}{2}\\mathbf{a}t^2$ with $\\mathbf{u} = \\mathbf{0}$:\\begin{aligned} \\mathbf{r} &= \\dfrac{1}{2}\\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}(3^2) \\cr &= \\dfrac{1}{2}\\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}(9) \\cr &= \\begin{pmatrix} 9 \\\\ 18 \\end{pmatrix}\\text{ m} \\end{aligned}<br><br>Distance from origin:\\begin{aligned} |\\mathbf{r}| &= \\sqrt{9^2 + 18^2} \\cr &= \\sqrt{81 + 324} \\cr &= \\sqrt{405} \\cr &= 9\\sqrt{5}\\text{ m} \\cr &\\approx 20.1\\text{ m} \\end{aligned}",
        "Final Answer: (a) $k = -2$, (b) $\\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}\\text{ m s}^{-2}$, (c) $6\\sqrt{5}\\text{ m s}^{-1}$, (d) $\\begin{pmatrix} 9 \\\\ 18 \\end{pmatrix}\\text{ m}, 9\\sqrt{5}\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $k = -2$, (b) $\\begin{pmatrix} 3 \\\\ 6 \\end{pmatrix}\\text{ m s}^{-2}$, (c) $9\\sqrt{5}\\text{ m s}^{-1}$, (d) $\\begin{pmatrix} 13.5 \\\\ 27 \\end{pmatrix}\\text{ m}, 13.5\\sqrt{5}\\text{ m}$",
            "feedback": "Forgot to divide by mass $m = 1.5\\text{ kg}$ in part (b). Acceleration is $\\mathbf{a} = \\mathbf{F} / m$, so each component of the resultant force must be divided by $1.5$."
        },
        {
            "ans": "(a) $k = 2$, (b) $\\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}\\text{ m s}^{-2}$, (c) $6\\sqrt{5}\\text{ m s}^{-1}$, (d) $\\begin{pmatrix} 9 \\\\ 18 \\end{pmatrix}\\text{ m}, 9\\sqrt{5}\\text{ m}$",
            "feedback": "Sign error in part (a). Setting $5 - 3 + k = 0$ gives $2 + k = 0$, so $k = -2$."
        },
        {
            "ans": "(a) $k = -2$, (b) $\\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}\\text{ m s}^{-2}$, (c) $6\\sqrt{5}\\text{ m s}^{-1}$, (d) $\\begin{pmatrix} 18 \\\\ 36 \\end{pmatrix}\\text{ m}, 18\\sqrt{5}\\text{ m}$",
            "feedback": "Omitted the factor of $\\frac{1}{2}$ in the displacement formula $\\mathbf{s} = \\frac{1}{2}\\mathbf{a}t^2$, which doubled the correct position vector."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Collinear Vectors in Kinematics",
        "content": "When a particle starts from rest under a constant resultant force, its acceleration, velocity, and displacement vectors are always collinear. Notice that $\\mathbf{a}$, $\\mathbf{v}$, and $\\mathbf{r}$ are all positive multiples of the base vector $\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$."
    }
},
{
    "id": "012129",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "AS",
    "major_area": "Forces and Newton's Laws",
    "topic": "Equilibrium of a Particle",
    "subtopic": [
        "Bearings",
        "Vector Resolution",
        "Geometric Equilibrium"
    ],
    "img": false,
    "question": "A particle $P$ is held in equilibrium by three coplanar horizontal forces $\\mathbf{F}_1$, $\\mathbf{F}_2$, and $\\mathbf{F}_3$:<br>$\\mathbf{F}_1$ has magnitude $12\\text{ N}$ and acts on a bearing of $090^\\circ$ (due East).<br>$\\mathbf{F}_2$ has magnitude $F\\text{ N}$ and acts on a bearing of $330^\\circ$.<br>$\\mathbf{F}_3$ has magnitude $G\\text{ N}$ and acts on a bearing of $210^\\circ$.<br><br>Let $\\mathbf{i}$ and $\\mathbf{j}$ denote unit vectors directed due East and due North, respectively.<br><br><strong>(a)</strong> Express each of the three forces in terms of $\\mathbf{i}$ and $\\mathbf{j}$, using exact trigonometric values.<br><br><strong>(b)</strong> By setting up and solving two linear equations for equilibrium, find the exact values of $F$ and $G$.<br><br><strong>(c)</strong> State the geometrical name of the vector polygon formed by these three forces, fully justifying your answer.",
    "steps": [
        "<strong>(a) Resolving into unit vectors:</strong><br><br>For $\\mathbf{F}_1$ (bearing $090^\\circ$, due East):\\begin{aligned} \\mathbf{F}_1 = 12\\mathbf{i} \\end{aligned}<br><br>For $\\mathbf{F}_2$ (bearing $330^\\circ$, which is $30^\\circ$ West of North):\\begin{aligned} \\mathbf{F}_2 &= -F\\sin 30^\\circ\\mathbf{i} + F\\cos 30^\\circ\\mathbf{j} \\cr &= -\\dfrac{1}{2}F\\mathbf{i} + \\dfrac{\\sqrt{3}}{2}F\\mathbf{j} \\end{aligned}<br><br>For $\\mathbf{F}_3$ (bearing $210^\\circ$, which is $30^\\circ$ West of South):\\begin{aligned} \\mathbf{F}_3 &= -G\\sin 30^\\circ\\mathbf{i} - G\\cos 30^\\circ\\mathbf{j} \\cr &= -\\dfrac{1}{2}G\\mathbf{i} - \\dfrac{\\sqrt{3}}{2}G\\mathbf{j} \\end{aligned}",
        "<strong>(b) Solving equilibrium equations:</strong><br><br>In equilibrium, $\\Sigma \\mathbf{F} = \\mathbf{0}$.<br><br>Summing North-South components ($\\mathbf{j}$ direction):\\begin{aligned} &\\dfrac{\\sqrt{3}}{2}F - \\dfrac{\\sqrt{3}}{2}G = 0 \\cr &\\dfrac{\\sqrt{3}}{2}F = \\dfrac{\\sqrt{3}}{2}G \\cr &F = G \\end{aligned}<br><br>Summing East-West components ($\\mathbf{i}$ direction):\\begin{aligned} &12 - \\dfrac{1}{2}F - \\dfrac{1}{2}G = 0 \\end{aligned}<br><br>Substituting $G = F$:\\begin{aligned} &12 - \\dfrac{1}{2}F - \\dfrac{1}{2}F = 0 \\cr &12 - F = 0 \\cr &F = 12\\text{ N} \\end{aligned}<br><br>Since $G = F$, $G = 12\\text{ N}$.",
        "<strong>(c) Vector polygon:</strong><br><br>The forces form a closed </strong>equilateral triangle<strong>.<br><br><strong>Justification:</strong> The three forces are in equilibrium, so they form a closed triangle of vectors. Since all three forces have equal magnitude ($12\\text{ N}$), the triangle has three sides of equal length.",
        "Final Answer: (b) $F = 12\\text{ N}, G = 12\\text{ N}$, (c) Equilateral triangle"
    ],
    "pi_options": [
        {
            "ans": "(b) $F = 12\\text{ N}, G = 12\\text{ N}$, (c) Right-angled triangle",
            "feedback": "Incorrect polygon classification in part (c). All three forces have identical magnitude ($12\\text{ N}$), so the closed vector triangle has three equal sides, making it an equilateral triangle."
        },
        {
            "ans": "(b) $F = 6\\text{ N}, G = 6\\text{ N}$, (c) Equilateral triangle",
            "feedback": "Incorrect force magnitudes in part (b). In horizontal equilibrium, $12 - 0.5F - 0.5G = 0$ simplifies with $F = G$ to $12 - F = 0$, giving $F = 12\\text{ N}$, not $6\\text{ N}$."
        },
        {
            "ans": "(b) $F = 12\\text{ N}, G = 8\\text{ N}$, (c) Scalene triangle",
            "feedback": "Incorrect values in part (b). Resolving in the $\\mathbf{j}$ direction gives $\\frac{\\sqrt{3}}{2}F - \\frac{\\sqrt{3}}{2}G = 0$, which strictly requires $F = G$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Symmetry in Three-Force Equilibrium",
        "content": "The three bearings are $090^\\circ$, $210^\\circ$, and $330^\\circ$. The angular separation between consecutive vectors is exactly $120^\\circ$. By symmetry, three coplanar forces separated by $120^\\circ$ must have equal magnitudes to remain in equilibrium."
    }
},
{
    "id": "012130",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "AS",
    "major_area": "Dynamics and Kinematics",
    "topic": "Newton's Second Law and 2D Motion",
    "subtopic": [
        "Resultant Force",
        "Displacement with Initial Position",
        "Direction of Motion"
    ],
    "img": false,
    "question": "A particle of mass $2.5\\text{ kg}$ is acted upon by three constant coplanar forces:$$\\mathbf{F}_1 = (5\\mathbf{i} + 3\\mathbf{j})\\text{ N}$$$$\\mathbf{F}_2 = (-2\\mathbf{i} + 7\\mathbf{j})\\text{ N}$$$$\\mathbf{F}_3 = (p\\mathbf{i} + q\\mathbf{j})\\text{ N}$$where $p$ and $q$ are constants.<br><br><strong>(a)</strong> Find the values of $p$ and $q$ for which the particle is in equilibrium.<br><br>In a second situation, $\\mathbf{F}_1$ and $\\mathbf{F}_2$ act as before, but $\\mathbf{F}_3$ is replaced by $\\mathbf{F}_4 = (7\\mathbf{i} - 5\\mathbf{j})\\text{ N}$.<br>At time $t = 0$, the particle is released from rest at the point with position vector $\\mathbf{r}_0 = (4\\mathbf{i} - 2\\mathbf{j})\\text{ m}$.<br><br><strong>(b)</strong> Find the resultant force acting on the particle, and hence determine its acceleration vector.<br><br><strong>(c)</strong> Calculate the magnitude of the acceleration and the angle its direction makes with the unit vector $\\mathbf{i}$, correct to the nearest $0.1^\\circ$.<br><br><strong>(d)</strong> Find the velocity vector and speed of the particle when $t = 4\\text{ seconds}$.<br><br><strong>(e)</strong> Find the position vector of the particle when $t = 4\\text{ seconds}$.",
    "steps": [
        "<strong>(a) Values for equilibrium:</strong><br><br>In equilibrium, $\\Sigma \\mathbf{F} = \\mathbf{0}$.<br><br>Equating $\\mathbf{i}$ components:\\begin{aligned} &5 - 2 + p = 0 \\cr &3 + p = 0 \\cr &p = -3 \\end{aligned}<br><br>Equating $\\mathbf{j}$ components:\\begin{aligned} &3 + 7 + q = 0 \\cr &10 + q = 0 \\cr &q = -10 \\end{aligned}",
        "<strong>(b) Resultant force and acceleration:</strong><br><br>Summing the three forces with $\\mathbf{F}_4$:\\begin{aligned} \\mathbf{R} &= (5 - 2 + 7)\\mathbf{i} + (3 + 7 - 5)\\mathbf{j} \\cr &= (10\\mathbf{i} + 5\\mathbf{j})\\text{ N} \\end{aligned}<br><br>Using Newton's second law with $m = 2.5\\text{ kg}$:\\begin{aligned} \\mathbf{a} &= \\dfrac{\\mathbf{R}}{m} \\cr &= \\dfrac{10\\mathbf{i} + 5\\mathbf{j}}{2.5} \\cr &= (4\\mathbf{i} + 2\\mathbf{j})\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(c) Magnitude and angle of acceleration:</strong><br><br>Calculating magnitude:\\begin{aligned} |\\mathbf{a}| &= \\sqrt{4^2 + 2^2} \\cr &= \\sqrt{16 + 4} \\cr &= \\sqrt{20} \\cr &= 2\\sqrt{5} \\cr &\\approx 4.47\\text{ m s}^{-2} \\end{aligned}<br><br>Angle $\\theta$ with unit vector $\\mathbf{i}$:\\begin{aligned} \\tan\\theta &= \\dfrac{2}{4} \\cr &= 0.5 \\cr \\theta &= \\arctan(0.5) \\cr &\\approx 26.6^\\circ \\end{aligned}",
        "<strong>(d) Velocity and speed at $t = 4\\text{ seconds}$:</strong><br><br>Using $\\mathbf{v} = \\mathbf{u} + \\mathbf{a}t$ with $\\mathbf{u} = \\mathbf{0}$:\\begin{aligned} \\mathbf{v} &= 4(4\\mathbf{i} + 2\\mathbf{j}) \\cr &= (16\\mathbf{i} + 8\\mathbf{j})\\text{ m s}^{-1} \\end{aligned}<br><br>Calculating speed:\\begin{aligned} |\\mathbf{v}| &= \\sqrt{16^2 + 8^2} \\cr &= \\sqrt{256 + 64} \\cr &= \\sqrt{320} \\cr &= 8\\sqrt{5} \\cr &\\approx 17.9\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(e) Position vector at $t = 4\\text{ seconds}$:</strong><br><br>Using $\\mathbf{r} = \\mathbf{r}_0 + \\mathbf{u}t + \\dfrac{1}{2}\\mathbf{a}t^2$:\\begin{aligned} \\mathbf{r} &= (4\\mathbf{i} - 2\\mathbf{j}) + \\mathbf{0} + \\dfrac{1}{2}(4\\mathbf{i} + 2\\mathbf{j})(4^2) \\cr &= (4\\mathbf{i} - 2\\mathbf{j}) + 8(4\\mathbf{i} + 2\\mathbf{j}) \\cr &= (4\\mathbf{i} - 2\\mathbf{j}) + (32\\mathbf{i} + 16\\mathbf{j}) \\cr &= (36\\mathbf{i} + 14\\mathbf{j})\\text{ m} \\end{aligned}",
        "Final Answer: (a) $p = -3, q = -10$, (b) $\\mathbf{a} = (4\\mathbf{i} + 2\\mathbf{j})\\text{ m s}^{-2}$, (c) $4.47\\text{ m s}^{-2}, 26.6^\\circ$, (d) $17.9\\text{ m s}^{-1}$, (e) $(36\\mathbf{i} + 14\\mathbf{j})\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $p = -3, q = -10$, (b) $\\mathbf{a} = (4\\mathbf{i} + 2\\mathbf{j})\\text{ m s}^{-2}$, (c) $4.47\\text{ m s}^{-2}, 26.6^\\circ$, (d) $17.9\\text{ m s}^{-1}$, (e) $(32\\mathbf{i} + 16\\mathbf{j})\\text{ m}$",
            "feedback": "Forgot the initial position vector $\\mathbf{r}_0 = (4\\mathbf{i} - 2\\mathbf{j})\\text{ m}$. Position is $\\mathbf{r} = \\mathbf{r}_0 + \\mathbf{s}$, which gives $(4\\mathbf{i} - 2\\mathbf{j}) + (32\\mathbf{i} + 16\\mathbf{j}) = (36\\mathbf{i} + 14\\mathbf{j})\\text{ m}$."
        },
        {
            "ans": "(a) $p = 3, q = 10$, (b) $\\mathbf{a} = (4\\mathbf{i} + 2\\mathbf{j})\\text{ m s}^{-2}$, (c) $4.47\\text{ m s}^{-2}, 26.6^\\circ$, (d) $17.9\\text{ m s}^{-1}$, (e) $(36\\mathbf{i} + 14\\mathbf{j})\\text{ m}$",
            "feedback": "Sign errors in part (a). In equilibrium, $5 - 2 + p = 0$ gives $p = -3$, and $3 + 7 + q = 0$ gives $q = -10$."
        },
        {
            "ans": "(a) $p = -3, q = -10$, (b) $\\mathbf{a} = (4\\mathbf{i} + 2\\mathbf{j})\\text{ m s}^{-2}$, (c) $4.47\\text{ m s}^{-2}, 63.4^\\circ$, (d) $17.9\\text{ m s}^{-1}$, (e) $(36\\mathbf{i} + 14\\mathbf{j})\\text{ m}$",
            "feedback": "Angle measured from $\\mathbf{j}$ instead of $\\mathbf{i}$ in part (c). The angle with $\\mathbf{i}$ satisfies $\\tan\\theta = 2 / 4 = 0.5$, which yields $\\theta \\approx 26.6^\\circ$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Displacement vs Position Vector",
        "content": "Remember the distinction between displacement $\\mathbf{s}$ and position vector $\\mathbf{r}$. The SUVAT formula evaluates displacement from the starting point: $\\mathbf{s} = \\dfrac{1}{2}\\mathbf{a}t^2$. When the particle does not start at the origin, you must add the initial position vector: $\\mathbf{r} = \\mathbf{r}_0 + \\mathbf{s}$."
    }
},
{
    "id": "012131",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "AS",
    "major_area": "Forces and Newton's Laws",
    "topic": "Connected Particles",
    "subtopic": [
        "Horizontal Table",
        "Pulleys",
        "Algebraic Friction"
    ],
    "img": "images/Mechanics_pngs/012131.png",
    "question": "The diagram shows a block of mass $3m\\text{ kg}$ resting on a rough horizontal table and a particle of mass $m\\text{ kg}$ hanging freely. The two bodies are connected by a light inextensible string which passes over a small smooth pulley fixed at the edge of the table. The section of string between the block and the pulley is horizontal.<br><br>The system is released from rest with the string taut. During the subsequent motion, the friction force between the table and the block has magnitude $\\dfrac{1}{4}mg\\text{ N}$.<br><br><strong>(a)</strong> Find an expression in terms of $g$ for the acceleration of the system.<br><br><strong>(b)</strong> Find an expression in terms of $m$ and $g$ for the tension in the string.<br><br><strong>(c)</strong> State how the assumption that the pulley is smooth has been used in your calculations.",
    "steps": [
        "<strong>(a) Finding acceleration $a$:</strong><br><br>Let $a$ be the acceleration of the system and $T$ be the tension in the string.<br><br>Equation of motion for the hanging particle (downwards):\\begin{aligned} mg - T = ma \\quad \\text{--- [Eq 1]} \\end{aligned}<br><br>Equation of motion for the block on the table (towards pulley):\\begin{aligned} &T - F = 3ma \\cr &T - \\dfrac{1}{4}mg = 3ma \\quad \\text{--- [Eq 2]} \\end{aligned}<br><br>Adding [Eq 1] and [Eq 2]:\\begin{aligned} &mg - \\dfrac{1}{4}mg = 4ma \\cr &\\dfrac{3}{4}mg = 4ma \\cr &a = \\dfrac{3}{16}g \\end{aligned}",
        "<strong>(b) Finding tension $T$:</strong><br><br>Substituting $a = \\dfrac{3}{16}g$ into [Eq 1]:\\begin{aligned} T &= mg - ma \\cr &= mg - m\\left(\\dfrac{3}{16}g\\right) \\cr &= mg\\left(1 - \\dfrac{3}{16}\\right) \\cr &= \\dfrac{13}{16}mg \\end{aligned}",
        "<strong>(c) Assumption about the pulley:</strong><br><br>The assumption that the pulley is smooth means there is no friction at the pulley axle. Consequently, the tension $T$ is uniform throughout both sections of the string (the horizontal part and the vertical part).",
        "Final Answer: (a) $\\dfrac{3}{16}g$, (b) $\\dfrac{13}{16}mg$"
    ],
    "pi_options": [
        {
            "ans": "(a) $\\dfrac{3}{16}g$, (b) $\\dfrac{9}{16}mg$",
            "feedback": "Forgot the friction term when finding tension. From the block's equation, \\begin{aligned}T &= 3ma + F \\cr &= 3m\\left(\\frac{3}{16}g\\right) + \\frac{1}{4}mg \\cr &= \\frac{13}{16}mg\\end{aligned}, not just $3ma$."
        },
        {
            "ans": "(a) $\\dfrac{1}{4}g$, (b) $\\dfrac{3}{4}mg$",
            "feedback": "Forgot to include the hanging particle's mass in the total system mass. The total accelerating mass is $3m + m = 4m$, giving $\\frac{3}{4}mg = 4ma$ and $a = \\frac{3}{16}g$."
        },
        {
            "ans": "(a) $\\dfrac{3}{16}g$, (b) $\\dfrac{15}{16}mg$",
            "feedback": "Incorrect sign in Newton's second law for the hanging mass. Since the particle accelerates downwards, $mg - T = ma$, so $T = m(g - a) = \\frac{13}{16}mg$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Modelling Assumptions",
        "content": "Exam boards frequently test modelling assumptions. Remember the distinct roles: a <em>light</em> string means tension is uniform along its length; an <em>inextensible</em> string means both particles share the same magnitude of acceleration; a <em>smooth</em> pulley ensures tension does not change across the pulley."
    }
},
{
    "id": "012132",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "AS",
    "major_area": "Forces and Newton's Laws",
    "topic": "Connected Particles",
    "subtopic": [
        "Static Equilibrium Limits",
        "Friction",
        "External Pulling Force"
    ],
    "img": "images/Mechanics_pngs/012132.png",
    "question": "The diagram shows a block $A$ of mass $M_1 = 5\\text{ kg}$ resting on a rough horizontal table. Block $A$ is connected by a light inextensible string passing over a small smooth pulley at the edge of the table to a hanging particle $B$ of mass $M_2 = 3\\text{ kg}$. The string from $A$ to the pulley is horizontal. The coefficient of friction between block $A$ and the table is $\\mu = 0.2$.<br><br>An external horizontal force of magnitude $P\\text{ N}$ acts on block $A$, directed away from the pulley.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Find the range of values of $P$ for which the system remains in static equilibrium with the string taut.<br><br>In a second scenario, the force $P$ is set to $10\\text{ N}$ and the system is released from rest.<br><br><strong>(b)</strong> Explain why block $A$ accelerates towards the pulley.<br><br><strong>(c)</strong> Calculate:<br><strong>(i)</strong> the magnitude of the acceleration of the system,<br><strong>(ii)</strong> the tension in the string during this motion.",
    "steps": [
        "<strong>(a) Range of $P$ for static equilibrium:</strong><br><br>For particle $B$ in equilibrium:\\begin{aligned} T &= M_2 g \\cr &= 3(9.8) \\cr &= 29.4\\text{ N} \\end{aligned}<br><br>Normal reaction on block $A$:\\begin{aligned} R &= 5g \\cr &= 5(9.8) \\cr &= 49\\text{ N} \\end{aligned}<br><br>Maximum frictional force:\\begin{aligned} F_{\\text{max}} &= \\mu R \\cr &= 0.2(49) \\cr &= 9.8\\text{ N} \\end{aligned}<br><br><strong>Case 1 (impending motion towards pulley):</strong> Friction acts away from the pulley:\\begin{aligned} &P + F_{\\text{max}} \\ge T \\cr &P + 9.8 \\ge 29.4 \\cr &P \\ge 19.6\\text{ N} \\end{aligned}<br><br><strong>Case 2 (impending motion away from pulley):</strong> Friction acts towards the pulley:\\begin{aligned} &P \\le T + F_{\\text{max}} \\cr &P \\le 29.4 + 9.8 \\cr &P \\le 39.2\\text{ N} \\end{aligned}<br><br>Range for equilibrium: $19.6 \\le P \\le 39.2$.",
        "<strong>(b) Justifying acceleration towards pulley:</strong><br><br>When $P = 10\\text{ N}$, the net force pulling away from the pulley (excluding friction) is $P = 10\\text{ N}$.<br><br>The string tension attempting to pull $A$ towards the pulley is $29.4\\text{ N}$.<br><br>The net driving force towards the pulley is:\\begin{aligned} 29.4 - 10 = 19.4\\text{ N} \\end{aligned}<br><br>Since $19.4\\text{ N} > F_{\\text{max}} = 9.8\\text{ N}$, friction is completely overcome, and block $A$ accelerates towards the pulley.",
        "<strong>(c)(i) Magnitude of acceleration:</strong><br><br>Since motion is towards the pulley, friction $F = 9.8\\text{ N}$ acts away from the pulley.<br><br>Equations of motion:\\begin{aligned} &B: 29.4 - T = 3a \\cr &A: T - 10 - 9.8 = 5a \\cr &A: T - 19.8 = 5a \\end{aligned}<br><br>Adding the equations:\\begin{aligned} &29.4 - 19.8 = 8a \\cr &9.6 = 8a \\cr &a = 1.2\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(c)(ii) Tension in the string:</strong><br><br>Using the equation for $B$:\\begin{aligned} T &= 29.4 - 3a \\cr &= 29.4 - 3(1.2) \\cr &= 29.4 - 3.6 \\cr &= 25.8\\text{ N} \\end{aligned}",
        "Final Answer: (a) $19.6 \\le P \\le 39.2$, (c)(i) $1.2\\text{ m s}^{-2}$, (c)(ii) $25.8\\text{ N}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $0 \\le P \\le 19.6$, (c)(i) $1.2\\text{ m s}^{-2}$, (c)(ii) $25.8\\text{ N}$",
            "feedback": "Incorrect equilibrium range in part (a). The tension is $29.4\\text{ N}$ and maximum friction is $9.8\\text{ N}$, so equilibrium requires $29.4 - 9.8 \\le P \\le 29.4 + 9.8$, giving $19.6 \\le P \\le 39.2$."
        },
        {
            "ans": "(a) $19.6 \\le P \\le 39.2$, (c)(i) $1.2\\text{ m s}^{-2}$, (c)(ii) $29.4\\text{ N}$",
            "feedback": "Assumed static tension in part (c)(ii). Because the system accelerates downwards, $T = 3(g - a) = 25.8\\text{ N}$, not $3g = 29.4\\text{ N}$."
        },
        {
            "ans": "(a) $19.6 \\le P \\le 39.2$, (c)(i) $2.4\\text{ m s}^{-2}$, (c)(ii) $22.2\\text{ N}$",
            "feedback": "Divided the net force by the mass of block $A$ alone ($5\\text{ kg}$) instead of the total system mass ($5 + 3 = 8\\text{ kg}$)."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Dual Direction Friction Limits",
        "content": "Whenever an external force can vary, friction can act in either direction depending on which way motion impends. If $P$ is small, the hanging weight pulls the block right, so friction acts left ($P \\ge T - F_{\\text{max}}$). If $P$ is large, it pulls the block left, so friction acts right ($P \\le T + F_{\\text{max}}$)."
    }
},
{
    "id": "012133",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "AS",
    "major_area": "Forces and Newton's Laws",
    "topic": "Connected Particles",
    "subtopic": [
        "Three-Body System",
        "Dual Pulleys",
        "Differing Tensions"
    ],
    "img": "images/Mechanics_pngs/012133.png",
    "question": "The diagram shows a block $B$ of mass $6\\text{ kg}$ resting on a rough horizontal table. Light inextensible strings are attached to each side of block $B$:<br>One string passes over a small smooth pulley at the left edge of the table and supports a hanging particle $A$ of mass $1\\text{ kg}$.<br>The second string passes over a small smooth pulley at the right edge of the table and supports a hanging particle $C$ of mass $3\\text{ kg}$.<br><br>Both sections of string on the table are horizontal. The coefficient of friction between block $B$ and the table is $\\mu = 0.2$. The system is released from rest with all sections of string taut.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Determine whether the system moves, and if so, state the direction of motion of block $B$, fully justifying your answer.<br><br><strong>(b)</strong> Calculate the acceleration of the system.<br><br><strong>(c)</strong> Calculate:<br><strong>(i)</strong> the tension in the string connected to particle $A$,<br><strong>(ii)</strong> the tension in the string connected to particle $C$.",
    "steps": [
        "<strong>(a) Determining motion and direction:</strong><br><br>Normal reaction on block $B$:\\begin{aligned} R_B &= 6g \\cr &= 6(9.8) \\cr &= 58.8\\text{ N} \\end{aligned}<br><br>Maximum friction on $B$:\\begin{aligned} F_{\\text{max}} &= \\mu R_B \\cr &= 0.2(58.8) \\cr &= 11.76\\text{ N} \\end{aligned}<br><br>Pull to the right from $C$ is $3g = 29.4\\text{ N}$.<br>Pull to the left from $A$ is $1g = 9.8\\text{ N}$.<br><br>Net external driving force to the right:\\begin{aligned} 29.4 - 9.8 = 19.6\\text{ N} \\end{aligned}<br><br>Since $19.6\\text{ N} > F_{\\text{max}} = 11.76\\text{ N}$, the system moves. Block $B$ accelerates to the right (towards pulley $C$).",
        "<strong>(b) Calculating acceleration:</strong><br><br>Total mass of the system:\\begin{aligned} m_{\\text{tot}} &= 1 + 6 + 3 \\cr &= 10\\text{ kg} \\end{aligned}<br><br>Net resultant force driving the system:\\begin{aligned} F_{\\text{net}} &= 29.4 - 9.8 - 11.76 \\cr &= 7.84\\text{ N} \\end{aligned}<br><br>Using Newton's second law:\\begin{aligned} a &= \\dfrac{F_{\\text{net}}}{m_{\\text{tot}}} \\cr &= \\dfrac{7.84}{10} \\cr &= 0.784\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(c) Calculating tensions:</strong><br><br><strong>(i) Tension $T_A$:</strong> Particle $A$ accelerates upwards at $a = 0.784\\text{ m s}^{-2}$:\\begin{aligned} T_A - 1g &= 1a \\cr T_A &= 9.8 + 1(0.784) \\cr &= 10.584\\text{ N} \\cr &\\approx 10.6\\text{ N} \\end{aligned}<br><br><strong>(ii) Tension $T_C$:</strong> Particle $C$ accelerates downwards at $a = 0.784\\text{ m s}^{-2}$:\\begin{aligned} 3g - T_C &= 3a \\cr T_C &= 3(9.8) - 3(0.784) \\cr &= 29.4 - 2.352 \\cr &= 27.048\\text{ N} \\cr &\\approx 27.0\\text{ N} \\end{aligned}",
        "Final Answer: (a) Moves to the right, (b) $0.784\\text{ m s}^{-2}$, (c)(i) $10.6\\text{ N}$, (c)(ii) $27.0\\text{ N}$"
    ],
    "pi_options": [
        {
            "ans": "(a) Remains at rest, (b) $0\\text{ m s}^{-2}$, (c)(i) $9.8\\text{ N}$, (c)(ii) $29.4\\text{ N}$",
            "feedback": "Incorrect conclusion in part (a). The difference between the hanging weights is $29.4 - 9.8 = 19.6\\text{ N}$, which strictly exceeds the maximum friction $11.76\\text{ N}$, so motion must occur."
        },
        {
            "ans": "(a) Moves to the right, (b) $0.784\\text{ m s}^{-2}$, (c)(i) $27.0\\text{ N}$, (c)(ii) $10.6\\text{ N}$",
            "feedback": "Swapped the two tensions in part (c). $T_C$ must exceed $T_A$ to accelerate block $B$ to the right, so $T_C \\approx 27.0\\text{ N}$ and $T_A \\approx 10.6\\text{ N}$."
        },
        {
            "ans": "(a) Moves to the right, (b) $1.31\\text{ m s}^{-2}$, (c)(i) $11.1\\text{ N}$, (c)(ii) $25.5\\text{ N}$",
            "feedback": "Omitted the friction force on block $B$ when applying Newton's second law, dividing $19.6\\text{ N}$ by $10\\text{ kg}$ instead of $7.84\\text{ N}$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Two Separate Strings",
        "content": "Never assume tension is equal across two separate strings. The string on the left has tension $T_A = 10.6\\text{ N}$, while the string on the right has tension $T_C = 27.0\\text{ N}$. They are completely distinct physical entities connected to opposite sides of block $B$."
    }
},
{
    "id": "012134",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "AS",
    "major_area": "Dynamics and Kinematics",
    "topic": "Connected Particles",
    "subtopic": [
        "Multi-Stage Motion",
        "Floor Impact",
        "Slack String",
        "Stopping Distance"
    ],
    "img": "images/Mechanics_pngs/012134.png",
    "question": "The diagram shows a block $A$ of mass $3\\text{ kg}$ on a rough horizontal table connected by a light inextensible string to a particle $B$ of mass $2\\text{ kg}$. The string passes over a small smooth pulley fixed at the edge of the table. The coefficient of friction between block $A$ and the table is $\\mu = 0.25$.<br><br>Particle $B$ is initially held at a height of $h = 0.9\\text{ m}$ above horizontal ground.<br><br>The system is released from rest with the string taut. When particle $B$ hits the ground, it does not rebound, and the string immediately becomes slack. Block $A$ continues to slide along the table without reaching the pulley.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Calculate the acceleration of the system while particle $B$ is descending.<br><br><strong>(b)</strong> Find the speed of particle $B$ at the instant it hits the ground.<br><br><strong>(c)</strong> Calculate the deceleration of block $A$ after the string becomes slack.<br><br><strong>(d)</strong> Calculate the total distance travelled by block $A$ from the instant of release until it first comes to rest.",
    "steps": [
        "<strong>(a) Acceleration during Stage 1:</strong><br><br>Normal reaction on block $A$ is $R = 3g = 29.4\\text{ N}$.<br><br>Frictional force on block $A$:\\begin{aligned} F &= \\mu R \\cr &= 0.25(29.4) \\cr &= 7.35\\text{ N} \\end{aligned}<br><br>Equations of motion for $B$ (downwards) and $A$ (towards pulley):\\begin{aligned} &2g - T = 2a \\cr &T - 7.35 = 3a \\end{aligned}<br><br>Adding the equations:\\begin{aligned} &2(9.8) - 7.35 = 5a \\cr &19.6 - 7.35 = 5a \\cr &12.25 = 5a \\cr &a = 2.45\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Speed at impact:</strong><br><br>Using $v^2 = u^2 + 2as$ with $u = 0$ and $s = 0.9\\text{ m}$:\\begin{aligned} v^2 &= 0 + 2(2.45)(0.9) \\cr &= 4.41 \\cr v &= \\sqrt{4.41} \\cr &= 2.1\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(c) Deceleration during Stage 2:</strong><br><br>When $B$ hits the floor, the string goes slack ($T = 0$).<br><br>Block $A$ is retarded solely by its own friction:\\begin{aligned} -F &= m_A a' \\cr -7.35 &= 3a' \\cr a' &= -2.45\\text{ m s}^{-2} \\end{aligned}<br><br>The deceleration is $2.45\\text{ m s}^{-2}$.",
        "<strong>(d) Total distance travelled by $A$:</strong><br><br>Distance in Stage 1 is $s_1 = 0.9\\text{ m}$.<br><br>For Stage 2, $u = 2.1\\text{ m s}^{-1}$, $v = 0$, and $a' = -2.45\\text{ m s}^{-2}$:\\begin{aligned} v^2 &= u^2 + 2a's_2 \\cr 0 &= (2.1)^2 + 2(-2.45)s_2 \\cr 4.9s_2 &= 4.41 \\cr s_2 &= \\dfrac{4.41}{4.9} \\cr &= 0.9\\text{ m} \\end{aligned}<br><br>Total distance travelled:\\begin{aligned} s_{\\text{tot}} &= s_1 + s_2 \\cr &= 0.9 + 0.9 \\cr &= 1.8\\text{ m} \\end{aligned}",
        "Final Answer: (a) $2.45\\text{ m s}^{-2}$, (b) $2.1\\text{ m s}^{-1}$, (c) $2.45\\text{ m s}^{-2}$, (d) $1.8\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $2.45\\text{ m s}^{-2}$, (b) $2.1\\text{ m s}^{-1}$, (c) $2.45\\text{ m s}^{-2}$, (d) $0.9\\text{ m}$",
            "feedback": "Gave only the second stage coasting distance in part (d). The question asks for the total distance travelled from the moment of release: $s_{\\text{tot}} = 0.9 + 0.9 = 1.8\\text{ m}$."
        },
        {
            "ans": "(a) $3.92\\text{ m s}^{-2}$, (b) $2.66\\text{ m s}^{-1}$, (c) $2.45\\text{ m s}^{-2}$, (d) $2.34\\text{ m}$",
            "feedback": "Omitted the mass of block $A$ when finding acceleration in part (a), using mass $2\\text{ kg}$ instead of total system mass $5\\text{ kg}$."
        },
        {
            "ans": "(a) $2.45\\text{ m s}^{-2}$, (b) $2.1\\text{ m s}^{-1}$, (c) $1.47\\text{ m s}^{-2}$, (d) $2.4\\text{ m}$",
            "feedback": "Incorrect mass in Stage 2. Once $B$ hits the floor, only block $A$ ($3\\text{ kg}$) is decelerated by friction, so $a' = -7.35 / 3 = -2.45\\text{ m s}^{-2}$, not $-7.35 / 5$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Work-Energy Check on Flat Surfaces",
        "content": "For this entire journey, the work done by gravity on particle $B$ must equal the total work done against friction by block $A$: $m_B g h = F s_{\\text{tot}}$. Rearranging gives $s_{\\text{tot}} = \\dfrac{m_B g h}{\\mu m_A g} = \\dfrac{2(0.9)}{0.25(3)} = 1.8\\text{ m}$, verifying your multi-stage kinematics in a single line."
    }
},
{
    "id": "012135",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "AS",
    "major_area": "Forces and Newton's Laws",
    "topic": "Connected Particles",
    "subtopic": [
        "Internal Normal Reaction",
        "Scale Pan",
        "Multi-Body Vertical Acceleration"
    ],
    "img": "images/Mechanics_pngs/012135.png",
    "question": "The diagram shows a block $P$ of mass $5\\text{ kg}$ resting on a rough horizontal table where the coefficient of friction is $\\mu = 0.3$. Block $P$ is connected by a light inextensible string passing over a small smooth pulley fixed at the edge of the table to a scale pan $Q$ of mass $0.5\\text{ kg}$. A block $R$ of mass $2.5\\text{ kg}$ rests on top of the scale pan $Q$.<br><br>The section of string between block $P$ and the pulley is horizontal. The system is released from rest with the string taut.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Find the acceleration of the system.<br><br><strong>(b)</strong> Find the tension in the string during the motion.<br><br><strong>(c)</strong> By considering the vertical forces acting on block $R$ alone, calculate the magnitude of the normal reaction force exerted by the scale pan $Q$ on block $R$.<br><br><strong>(d)</strong> Explain physically why the normal reaction force found in part <strong>(c)</strong> is strictly less than the weight of block $R$.",
    "steps": [
        "<strong>(a) Finding system acceleration:</strong><br><br>Normal reaction on block $P$ is $R_P = 5g = 49\\text{ N}$.<br><br>Frictional force on block $P$:\\begin{aligned} F &= \\mu R_P \\cr &= 0.3(49) \\cr &= 14.7\\text{ N} \\end{aligned}<br><br>Total mass hanging vertically:\\begin{aligned} m_{\\text{hang}} &= m_Q + m_R \\cr &= 0.5 + 2.5 \\cr &= 3.0\\text{ kg} \\end{aligned}<br><br>Equations of motion for hanging system and block $P$:\\begin{aligned} &3g - T = 3a \\cr &T - 14.7 = 5a \\end{aligned}<br><br>Adding the equations:\\begin{aligned} &3(9.8) - 14.7 = 8a \\cr &29.4 - 14.7 = 8a \\cr &14.7 = 8a \\cr &a = 1.8375\\text{ m s}^{-2} \\cr &\\approx 1.84\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Finding tension $T$:</strong><br><br>Using the equation for block $P$:\\begin{aligned} T &= 14.7 + 5a \\cr &= 14.7 + 5(1.8375) \\cr &= 14.7 + 9.1875 \\cr &= 23.8875\\text{ N} \\cr &\\approx 23.9\\text{ N} \\end{aligned}",
        "<strong>(c) Normal reaction on block $R$:</strong><br><br>Consider vertical forces on block $R$ ($m_R = 2.5\\text{ kg}$) accelerating downwards at $a = 1.8375\\text{ m s}^{-2}$:\\begin{aligned} &m_R g - R_N = m_R a \\cr &2.5(9.8) - R_N = 2.5(1.8375) \\cr &24.5 - R_N = 4.59375 \\cr &R_N = 24.5 - 4.59375 \\cr &R_N = 19.90625\\text{ N} \\cr &R_N \\approx 19.9\\text{ N} \\end{aligned}",
        "<strong>(d) Physical explanation:</strong><br><br>The scale pan $Q$ is accelerating downwards. For block $R$ to accelerate downwards at the same rate, there must be a non-zero resultant force downwards. Therefore, the downward gravitational force (its weight) must be strictly greater than the upward contact force exerted by the scale pan ($W_R - R_N = m_R a > 0$).",
        "Final Answer: (a) $1.84\\text{ m s}^{-2}$, (b) $23.9\\text{ N}$, (c) $19.9\\text{ N}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $1.84\\text{ m s}^{-2}$, (b) $23.9\\text{ N}$, (c) $24.5\\text{ N}$",
            "feedback": "Assumed the normal reaction equals the static weight of $R$ ($2.5g = 24.5\\text{ N}$). Because the scale pan is accelerating downwards, the contact force is reduced: $R_N = m_R(g - a) \\approx 19.9\\text{ N}$."
        },
        {
            "ans": "(a) $1.84\\text{ m s}^{-2}$, (b) $23.9\\text{ N}$, (c) $29.1\\text{ N}$",
            "feedback": "Added the acceleration term instead of subtracting it. Downward acceleration requires $m_R g - R_N = m_R a$, which gives $R_N = m_R(g - a)$, not $m_R(g + a)$."
        },
        {
            "ans": "(a) $2.94\\text{ m s}^{-2}$, (b) $20.6\\text{ N}$, (c) $17.2\\text{ N}$",
            "feedback": "Omitted the mass of the scale pan $Q$ ($0.5\\text{ kg}$) from the hanging system, using $2.5\\text{ kg}$ instead of $3.0\\text{ kg}$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Contact Forces in Accelerating Frames",
        "content": "Always isolate the body when finding internal contact forces. A common exam mistake is trying to evaluate $R_N$ from the tension $T$. By drawing a separate free-body diagram for block $R$ alone, you see only two vertical forces: downward gravity $m_R g$ and upward normal reaction $R_N$, giving $m_R g - R_N = m_R a$ directly."
    }
},
{
    "id": "012136",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "AS",
    "major_area": "Dynamics and Kinematics",
    "topic": "Newton's Second Law and Motion in a Straight Line",
    "subtopic": [
        "Multi-Stage Motion",
        "Constant Acceleration",
        "Resistance to Motion"
    ],
    "img": false,
    "question": "A model boat of mass $2\\text{ kg}$ is propelled across a pond, starting from rest, for $3\\text{ seconds}$. During this time, the boat moves in a straight line with a constant acceleration of $2\\text{ m s}^{-2}$.<br><br>Subsequently, the propeller stops, and the only horizontal force acting on the boat is a constant resistance to motion. The boat travels a further $12\\text{ m}$ before coming to rest.<br><br><strong>(a)</strong> Find the speed of the boat at the instant the propeller stops.<br><br><strong>(b)</strong> Find the distance travelled by the boat during the $3\\text{ seconds}$ of propulsion.<br><br><strong>(c)</strong> Calculate the magnitude of the constant resistance to motion.<br><br><strong>(d)</strong> Find the total distance travelled by the boat from rest until it comes to rest again.",
    "steps": [
        "<strong>(a) Speed at end of propulsion phase:</strong><br><br>Using $v = u + at$ with $u = 0$, $a = 2\\text{ m s}^{-2}$, and $t = 3\\text{ s}$:\\begin{aligned} v &= 0 + 2(3) \\cr &= 6\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(b) Distance during propulsion phase:</strong><br><br>Using $s = ut + \\dfrac{1}{2}at^2$:\\begin{aligned} s_1 &= 0(3) + \\dfrac{1}{2}(2)(3^2) \\cr &= \\dfrac{1}{2}(2)(9) \\cr &= 9\\text{ m} \\end{aligned}",
        "<strong>(c) Magnitude of resistance to motion:</strong><br><br>For the second phase, $u = 6\\text{ m s}^{-1}$, $v = 0\\text{ m s}^{-1}$, and $s_2 = 12\\text{ m}$.<br><br>Using $v^2 = u^2 + 2as$:\\begin{aligned} &0 = 6^2 + 2a(12) \\cr &0 = 36 + 24a \\cr &24a = -36 \\cr &a = -1.5\\text{ m s}^{-2} \\end{aligned}<br><br>Using Newton's second law ($F = ma$) with $m = 2\\text{ kg}$:\\begin{aligned} -R &= 2(-1.5) \\cr -R &= -3 \\cr R &= 3\\text{ N} \\end{aligned}<br><br>The magnitude of the resistance is $3\\text{ N}$.",
        "<strong>(d) Total distance travelled:</strong><br><br>Adding the distances from both phases:\\begin{aligned} s_{\\text{tot}} &= s_1 + s_2 \\cr &= 9 + 12 \\cr &= 21\\text{ m} \\end{aligned}",
        "Final Answer: (a) $6\\text{ m s}^{-1}$, (b) $9\\text{ m}$, (c) $3\\text{ N}$, (d) $21\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $6\\text{ m s}^{-1}$, (b) $9\\text{ m}$, (c) $3\\text{ N}$, (d) $12\\text{ m}$",
            "feedback": "You gave only the distance travelled during the coasting phase. The question asks for the total distance from rest until the boat stops again, which is $9 + 12 = 21\\text{ m}$."
        },
        {
            "ans": "(a) $6\\text{ m s}^{-1}$, (b) $9\\text{ m}$, (c) $6\\text{ N}$, (d) $21\\text{ m}$",
            "feedback": "You forgot the factor of $2$ in the denominator of $v^2 = u^2 + 2as$. The deceleration is\\begin{aligned} a &= \\dfrac{6^2}{2(12)} \\cr &= 1.5\\text{ m s}^{-2} \\end{aligned}giving $R = 2(1.5) = 3\\text{ N}$, not $6\\text{ N}$."
        },
        {
            "ans": "(a) $3\\text{ m s}^{-1}$, (b) $4.5\\text{ m}$, (c) $0.75\\text{ N}$, (d) $16.5\\text{ m}$",
            "feedback": "You halved the acceleration during the propulsion phase. The acceleration is $2\\text{ m s}^{-2}$ for $3\\text{ seconds}$, so the speed reached is $v = 2(3) = 6\\text{ m s}^{-1}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Work-Energy Alternative",
        "content": "In part <strong>(c)</strong>, you can bypass calculating acceleration by applying the work-energy principle. The kinetic energy lost during the second phase equals the work done against the resistance force:\\begin{aligned} \\dfrac{1}{2}m v^2 &= R s_2 \\cr \\dfrac{1}{2}(2)(6^2) &= R(12) \\cr 36 &= 12R \\cr R &= 3\\text{ N} \\end{aligned}This method is fast, clean, and avoids sign errors entirely."
    }
},
{
    "id": "012137",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "AS",
    "major_area": "Dynamics and Kinematics",
    "topic": "Newton's Second Law and Motion in a Straight Line",
    "subtopic": [
        "Driving Force",
        "Constant Resistance",
        "Stopping Time and Distance"
    ],
    "img": false,
    "question": "A sledge of mass $20\\text{ kg}$ is pushed from rest along a horizontal surface by a constant horizontal driving force of magnitude $48\\text{ N}$. A constant frictional resistance of $12\\text{ N}$ opposes the motion.<br><br>The sledge is pushed for $4\\text{ seconds}$, after which the driving force is removed. The sledge continues to slide in the same straight line against the same constant resistance of $12\\text{ N}$ until it comes to rest.<br><br><strong>(a)</strong> Calculate the acceleration of the sledge during the first $4\\text{ seconds}$.<br><br><strong>(b)</strong> Find the speed of the sledge at the instant the driving force is removed.<br><br><strong>(c)</strong> Calculate the deceleration of the sledge after the driving force is removed.<br><br><strong>(d)</strong> Calculate the total distance travelled by the sledge from rest to rest.<br><br><strong>(e)</strong> Find the total time elapsed for the entire motion.",
    "steps": [
        "<strong>(a) Acceleration during Phase 1:</strong><br><br>Net driving force acting on the sledge:\\begin{aligned} F_{\\text{net}} &= 48 - 12 \\cr &= 36\\text{ N} \\end{aligned}<br><br>Using $F = ma$ with $m = 20\\text{ kg}$:\\begin{aligned} a_1 &= \\dfrac{36}{20} \\cr &= 1.8\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Speed when driving force is removed:</strong><br><br>Using $v = u + at$ with $u = 0$:\\begin{aligned} v &= 0 + 1.8(4) \\cr &= 7.2\\text{ m s}^{-1} \\end{aligned}",
        "<strong>(c) Deceleration during Phase 2:</strong><br><br>When the driving force is removed, the only horizontal force is the $12\\text{ N}$ resistance opposing motion:\\begin{aligned} -12 &= 20a_2 \\cr a_2 &= -0.6\\text{ m s}^{-2} \\end{aligned}<br><br>The deceleration is $0.6\\text{ m s}^{-2}$.",
        "<strong>(d) Total distance travelled:</strong><br><br>Distance for Phase 1 ($0 \\le t \\le 4$):\\begin{aligned} s_1 &= \\dfrac{1}{2}(1.8)(4^2) \\cr &= \\dfrac{1}{2}(1.8)(16) \\cr &= 14.4\\text{ m} \\end{aligned}<br><br>Distance for Phase 2 using $v^2 = u^2 + 2as$ with $v = 0$:\\begin{aligned} &0 = 7.2^2 + 2(-0.6)s_2 \\cr &0 = 51.84 - 1.2s_2 \\cr &1.2s_2 = 51.84 \\cr &s_2 = 43.2\\text{ m} \\end{aligned}<br><br>Total distance:\\begin{aligned} s_{\\text{tot}} &= s_1 + s_2 \\cr &= 14.4 + 43.2 \\cr &= 57.6\\text{ m} \\end{aligned}",
        "<strong>(e) Total time elapsed:</strong><br><br>Duration of Phase 1 is $t_1 = 4\\text{ s}$.<br><br>For Phase 2, using $v = u + at$:\\begin{aligned} &0 = 7.2 - 0.6t_2 \\cr &0.6t_2 = 7.2 \\cr &t_2 = 12\\text{ s} \\end{aligned}<br><br>Total time:\\begin{aligned} T &= t_1 + t_2 \\cr &= 4 + 12 \\cr &= 16\\text{ s} \\end{aligned}",
        "Final Answer: (a) $1.8\\text{ m s}^{-2}$, (b) $7.2\\text{ m s}^{-1}$, (c) $0.6\\text{ m s}^{-2}$, (d) $57.6\\text{ m}$, (e) $16\\text{ s}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $1.8\\text{ m s}^{-2}$, (b) $7.2\\text{ m s}^{-1}$, (c) $0.6\\text{ m s}^{-2}$, (d) $43.2\\text{ m}$, (e) $12\\text{ s}$",
            "feedback": "You calculated the distance and time for the coasting phase only. You must include the first phase ($14.4\\text{ m}$ and $4\\text{ s}$) to give $57.6\\text{ m}$ and $16\\text{ s}$."
        },
        {
            "ans": "(a) $2.4\\text{ m s}^{-2}$, (b) $9.6\\text{ m s}^{-1}$, (c) $0.6\\text{ m s}^{-2}$, (d) $96.0\\text{ m}$, (e) $20\\text{ s}$",
            "feedback": "You forgot to subtract the friction force when finding the acceleration in part (a). The resultant driving force is $48 - 12 = 36\\text{ N}$, giving $a = 36 / 20 = 1.8\\text{ m s}^{-2}$."
        },
        {
            "ans": "(a) $1.8\\text{ m s}^{-2}$, (b) $7.2\\text{ m s}^{-1}$, (c) $0.6\\text{ m s}^{-2}$, (d) $57.6\\text{ m}$, (e) $12\\text{ s}$",
            "feedback": "You found the time for the second stage ($12\\text{ s}$) but forgot to add the $4\\text{ seconds}$ from the first stage, giving a total time of $16\\text{ s}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Acceleration Ratio and Time",
        "content": "Notice the relationship between the accelerations and times in the two phases. The acceleration in Phase 1 is $1.8\\text{ m s}^{-2}$, which is exactly $3$ times the deceleration in Phase 2 ($0.6\\text{ m s}^{-2}$). Because the change in speed is identical, the time taken to stop must be exactly $3$ times the accelerating time: $t_2 = 3 \\times 4 = 12\\text{ s}$."
    }
},
{
    "id": "012138",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "AS",
    "major_area": "Dynamics and Kinematics",
    "topic": "Newton's Second Law and Motion in a Straight Line",
    "subtopic": [
        "Multi-Stage Kinematics",
        "Braking Force",
        "Velocity-Time Interpretation"
    ],
    "img": false,
    "question": "A small electric car of mass $1200\\text{ kg}$ moves along a straight horizontal test track in three stages:<br>Stage 1: It accelerates uniformly from rest to a speed of $15\\text{ m s}^{-1}$ over a distance of $75\\text{ m}$.<br>Stage 2: It continues at this constant speed of $15\\text{ m s}^{-1}$ for a distance of $225\\text{ m}$.<br>Stage 3: The brakes are applied, providing a constant total retarding force of $3600\\text{ N}$ until the car comes to rest.<br><br><strong>(a)</strong> Find the acceleration of the car and the net driving force acting on it during Stage 1.<br><br><strong>(b)</strong> Find the time taken to complete Stage 2.<br><br><strong>(c)</strong> Calculate the distance travelled by the car during Stage 3 while braking to rest.<br><br><strong>(d)</strong> Calculate the total time taken for the car to complete the entire journey from start to rest.",
    "steps": [
        "<strong>(a) Stage 1 acceleration and driving force:</strong><br><br>Using $v^2 = u^2 + 2as$ with $u = 0$, $v = 15\\text{ m s}^{-1}$, and $s_1 = 75\\text{ m}$:\\begin{aligned} &15^2 = 0 + 2a_1(75) \\cr &225 = 150a_1 \\cr &a_1 = 1.5\\text{ m s}^{-2} \\end{aligned}<br><br>Net driving force using $F = ma$:\\begin{aligned} F_{\\text{net}} &= 1200(1.5) \\cr &= 1800\\text{ N} \\end{aligned}",
        "<strong>(b) Time for Stage 2:</strong><br><br>Travelling at constant speed $v = 15\\text{ m s}^{-1}$ for $s_2 = 225\\text{ m}$:\\begin{aligned} t_2 &= \\dfrac{s_2}{v} \\cr &= \\dfrac{225}{15} \\cr &= 15\\text{ s} \\end{aligned}",
        "<strong>(c) Distance travelled during Stage 3:</strong><br><br>Using Newton's second law for braking with $F = -3600\\text{ N}$:\\begin{aligned} a_3 &= \\dfrac{-3600}{1200} \\cr &= -3\\text{ m s}^{-2} \\end{aligned}<br><br>Using $v^2 = u^2 + 2as$ with $u = 15\\text{ m s}^{-1}$ and $v = 0$:\\begin{aligned} &0 = 15^2 + 2(-3)s_3 \\cr &0 = 225 - 6s_3 \\cr &6s_3 = 225 \\cr &s_3 = 37.5\\text{ m} \\end{aligned}",
        "<strong>(d) Total journey time:</strong><br><br>Time for Stage 1:\\begin{aligned} t_1 &= \\dfrac{v - u}{a_1} \\cr &= \\dfrac{15 - 0}{1.5} \\cr &= 10\\text{ s} \\end{aligned}<br><br>Time for Stage 3:\\begin{aligned} t_3 &= \\dfrac{0 - 15}{-3} \\cr &= 5\\text{ s} \\end{aligned}<br><br>Total time:\\begin{aligned} T &= t_1 + t_2 + t_3 \\cr &= 10 + 15 + 5 \\cr &= 30\\text{ s} \\end{aligned}",
        "Final Answer: (a) $1.5\\text{ m s}^{-2}, 1800\\text{ N}$, (b) $15\\text{ s}$, (c) $37.5\\text{ m}$, (d) $30\\text{ s}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $1.5\\text{ m s}^{-2}, 1800\text{ N}$, (b) $15\text{ s}$, (c) $37.5\text{ m}$, (d) $20\\text{ s}$",
            "feedback": "You omitted the $10\\text{ seconds}$ from Stage 1 when calculating the total journey time. The total time is $10 + 15 + 5 = 30\\text{ s}$."
        },
        {
            "ans": "(a) $1.5\\text{ m s}^{-2}, 1800\text{ N}$, (b) $15\text{ s}$, (c) $75.0\text{ m}$, (d) $35\text{ s}$",
            "feedback": "You omitted the factor of $2$ in $v^2 = u^2 + 2as$ during Stage 3. The braking distance is\\begin{aligned} s_3 &= \\dfrac{15^2}{2(3)} \\cr &= 37.5\\text{ m} \\end{aligned}"
        },
        {
            "ans": "(a) $3.0\text{ m s}^{-2}, 3600\text{ N}$, (b) $15\text{ s}$, (c) $37.5\text{ m}$, (d) $25\text{ s}$",
            "feedback": "You calculated acceleration in Stage 1 as $v^2 / s$ instead of $v^2 / (2s)$. The acceleration is $225 / 150 = 1.5\\text{ m s}^{-2}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Checking via Area under the Graph",
        "content": "A velocity-time graph for this journey forms a trapezium with parallel sides of length $30\\text{ s}$ and $15\\text{ s}$ and height $15\\text{ m s}^{-1}$. You can check the total distance in a single step using the trapezium area formula:\\begin{aligned} s_{\\text{tot}} &= \\dfrac{1}{2}(30 + 15)(15) \\cr &= \\dfrac{1}{2}(45)(15) \\cr &= 337.5\\text{ m} \\end{aligned}This matches $75 + 225 + 37.5 = 337.5\\text{ m}$."
    }
},
{
    "id": "012139",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "AS",
    "major_area": "Dynamics and Kinematics",
    "topic": "Motion under Gravity and Newton's Second Law",
    "subtopic": [
        "Powered Vertical Ascent",
        "Engine Burnout",
        "Free Projectile Motion"
    ],
    "img": false,
    "question": "A model rocket of mass $0.5\\text{ kg}$ is launched vertically upwards from rest from the ground. Its engine produces a constant upward thrust of $9.8\\text{ N}$. The engine burns for $2\\text{ seconds}$ and then cuts out. Air resistance is assumed to be negligible throughout the flight.<br><br>Take $g = 9.8\\text{ m s}^{-2}$.<br><br><strong>(a)</strong> Calculate the acceleration of the rocket while the engine is burning.<br><br><strong>(b)</strong> Find the height of the rocket above the ground and its speed at the instant of engine burnout.<br><br><strong>(c)</strong> Calculate the maximum height above the ground reached by the rocket.<br><br><strong>(d)</strong> Find the total time elapsed from launch until the rocket returns to the ground, giving your answer correct to 3 significant figures.",
    "steps": [
        "<strong>(a) Acceleration during powered ascent:</strong><br><br>Weight of the rocket:\\begin{aligned} W &= mg \\cr &= 0.5(9.8) \\cr &= 4.9\\text{ N} \\end{aligned}<br><br>Net upward force while engine fires:\\begin{aligned} F_{\\text{net}} &= T - mg \\cr &= 9.8 - 4.9 \\cr &= 4.9\\text{ N} \\end{aligned}<br><br>Using $F = ma$:\\begin{aligned} a_1 &= \\dfrac{4.9}{0.5} \\cr &= 9.8\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(b) Height and speed at burnout:</strong><br><br>Burnout occurs at $t = 2\\text{ s}$. Speed attained:\\begin{aligned} v_1 &= 0 + 9.8(2) \\cr &= 19.6\\text{ m s}^{-1} \\end{aligned}<br><br>Height reached during powered burn:\\begin{aligned} h_1 &= \\dfrac{1}{2}(9.8)(2^2) \\cr &= \\dfrac{1}{2}(9.8)(4) \\cr &= 19.6\\text{ m} \\end{aligned}",
        "<strong>(c) Maximum height reached:</strong><br><br>After burnout, the rocket moves freely under gravity with acceleration $a = -g = -9.8\\text{ m s}^{-2}$.<br><br>Using $v^2 = u^2 + 2as$ with $v = 0$:\\begin{aligned} &0 = 19.6^2 + 2(-9.8)h_2 \\cr &0 = 384.16 - 19.6h_2 \\cr &19.6h_2 = 384.16 \\cr &h_2 = 19.6\\text{ m} \\end{aligned}<br><br>Maximum height above the ground:\\begin{aligned} H_{\\text{max}} &= h_1 + h_2 \\cr &= 19.6 + 19.6 \\cr &= 39.2\\text{ m} \\end{aligned}",
        "<strong>(d) Total flight time:</strong><br><br>Time for powered phase is $t_1 = 2\\text{ s}$.<br><br>For free flight after burnout, the rocket starts at height $19.6\\text{ m}$ with upward velocity $u = 19.6\\text{ m s}^{-1}$ and returns to the ground ($s = -19.6\\text{ m}$):\\begin{aligned} &s = ut + \\dfrac{1}{2}at^2 \\cr &-19.6 = 19.6t_2 - 4.9t_2^2 \\cr &4.9t_2^2 - 19.6t_2 - 19.6 = 0 \\end{aligned}<br><br>Dividing through by $4.9$:\\begin{aligned} &t_2^2 - 4t_2 - 4 = 0 \\cr &t_2 = \\dfrac{4 + \\sqrt{(-4)^2 - 4(1)(-4)}}{2} \\cr &t_2 = \\dfrac{4 + \\sqrt{32}}{2} \\cr &t_2 = 2 + 2\\sqrt{2} \\cr &t_2 \\approx 4.828\\text{ s} \\end{aligned}<br><br>Total flight time:\\begin{aligned} T &= t_1 + t_2 \\cr &= 2 + 4.828 \\cr &\\approx 6.83\\text{ s} \\end{aligned}",
        "Final Answer: (a) $9.8\\text{ m s}^{-2}$, (b) $19.6\\text{ m}, 19.6\\text{ m s}^{-1}$, (c) $39.2\\text{ m}$, (d) $6.83\\text{ s}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $19.6\\text{ m s}^{-2}$, (b) $39.2\\text{ m}, 39.2\\text{ m s}^{-1}$, (c) $78.4\\text{ m}$, (d) $6.83\\text{ s}$",
            "feedback": "You forgot to subtract the rocket's weight from the upward thrust. The resultant upward force during the burn is $9.8 - 4.9 = 4.9\\text{ N}$, giving $a = 4.9 / 0.5 = 9.8\\text{ m s}^{-2}$."
        },
        {
            "ans": "(a) $9.8\\text{ m s}^{-2}$, (b) $19.6\\text{ m}, 19.6\\text{ m s}^{-1}$, (c) $19.6\\text{ m}$, (d) $4.00\\text{ s}$",
            "feedback": "You assumed the rocket reaches its maximum height at the instant of engine burnout. The rocket is still travelling upwards at $19.6\\text{ m s}^{-1}$ when the engine cuts out, gaining a further $19.6\\text{ m}$ to reach $39.2\\text{ m}$."
        },
        {
            "ans": "(a) $9.8\\text{ m s}^{-2}$, (b) $19.6\\text{ m}, 19.6\\text{ m s}^{-1}$, (c) $39.2\\text{ m}$, (d) $4.83\\text{ s}$",
            "feedback": "You omitted the initial $2\\text{ seconds}$ of powered flight from your total time calculation: the total elapsed time from launch is $2 + 4.83 = 6.83\\text{ s}$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Thrust vs Resultant Force",
        "content": "A very common error in vertical rocket problems is equating thrust directly to mass times acceleration ($T = ma$). Gravity never turns off: the upward thrust must both overcome the downward weight and provide the net force to accelerate the rocket ($T - mg = ma$)."
    }
},
{
    "id": "012140",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "AS",
    "major_area": "Dynamics and Kinematics",
    "topic": "Newton's Second Law and Stopping Distances",
    "subtopic": [
        "Reaction Time",
        "Constant Retarding Force",
        "Speed Variation"
    ],
    "img": false,
    "question": "A car of mass $1000\\text{ kg}$ is travelling along a straight horizontal road at a constant speed of $24\\text{ m s}^{-1}$. The driver suddenly sees a hazard ahead and, after a reaction time of $0.6\\text{ seconds}$, applies the brakes firmly. The brakes produce a constant retarding force of $4800\\text{ N}$ until the car comes to rest.<br><br><strong>(a)</strong> Calculate the thinking distance (the distance travelled during the driver's reaction time).<br><br><strong>(b)</strong> Calculate the deceleration of the car while braking.<br><br><strong>(c)</strong> Calculate the braking distance.<br><br><strong>(d)</strong> State the total stopping distance of the car.<br><br>In an alternative scenario, the same car with the same driver is travelling at $30\\text{ m s}^{-1}$. Assuming the driver's reaction time and the braking force remain unchanged:<br><br><strong>(e)</strong> Calculate the new total stopping distance, and find the percentage increase in the stopping distance compared with your answer to part <strong>(d)</strong>, correct to 3 significant figures.",
    "steps": [
        "<strong>(a) Thinking distance:</strong><br><br>During the reaction time, the car continues at constant speed $u = 24\\text{ m s}^{-1}$:\\begin{aligned} s_{\\text{think}} &= u \\times t_{\\text{react}} \\cr &= 24(0.6) \\cr &= 14.4\\text{ m} \\end{aligned}",
        "<strong>(b) Deceleration while braking:</strong><br><br>Using Newton's second law with retarding force $F = -4800\\text{ N}$ and $m = 1000\\text{ kg}$:\\begin{aligned} a &= \\dfrac{-4800}{1000} \\cr &= -4.8\\text{ m s}^{-2} \\end{aligned}<br><br>The deceleration is $4.8\\text{ m s}^{-2}$.",
        "<strong>(c) Braking distance:</strong><br><br>Using $v^2 = u^2 + 2as$ with $u = 24\\text{ m s}^{-1}$ and $v = 0$:\\begin{aligned} &0 = 24^2 + 2(-4.8)s_{\\text{brake}} \\cr &0 = 576 - 9.6s_{\\text{brake}} \\cr &9.6s_{\\text{brake}} = 576 \\cr &s_{\\text{brake}} = 60\\text{ m} \\end{aligned}",
        "<strong>(d) Total stopping distance:</strong><br><br>Adding thinking and braking distances:\\begin{aligned} s_{\\text{stop}} &= s_{\\text{think}} + s_{\\text{brake}} \\cr &= 14.4 + 60 \\cr &= 74.4\\text{ m} \\end{aligned}",
        "<strong>(e) New stopping distance and percentage increase:</strong><br><br>At initial speed $u = 30\\text{ m s}^{-1}$:\\begin{aligned} s'_{\\text{think}} &= 30(0.6) \\cr &= 18\\text{ m} \\end{aligned}<br><br>New braking distance:\\begin{aligned} s'_{\\text{brake}} &= \\dfrac{30^2}{2(4.8)} \\cr &= \\dfrac{900}{9.6} \\cr &= 93.75\\text{ m} \\end{aligned}<br><br>New total stopping distance:\\begin{aligned} s'_{\\text{stop}} &= 18 + 93.75 \\cr &= 111.75\\text{ m} \\cr &\\approx 112\\text{ m} \\end{aligned}<br><br>Percentage increase:\\begin{aligned} \\text{\\PI} &= \\dfrac{111.75 - 74.4}{74.4} \\times 100 \\cr &= \\dfrac{37.35}{74.4} \\times 100 \\cr &\\approx 50.2\\% \\end{aligned}",
        "Final Answer: (a) $14.4\\text{ m}$, (b) $4.8\\text{ m s}^{-2}$, (c) $60\\text{ m}$, (d) $74.4\\text{ m}$, (e) $112\\text{ m}, 50.2\\%$"
    ],
    "pi_options": [
        {
            "ans": "(a) $14.4\\text{ m}$, (b) $4.8\\text{ m s}^{-2}$, (c) $60\\text{ m}$, (d) $74.4\\text{ m}$, (e) $93.8\\text{ m}, 26.1\\%$",
            "feedback": "You forgot to include the thinking distance for the second scenario. At $30\\text{ m s}^{-1}$, the thinking distance is $30(0.6) = 18\\text{ m}$, giving a total stopping distance of $18 + 93.75 = 111.75\\text{ m}$."
        },
        {
            "ans": "(a) $14.4\\text{ m}$, (b) $4.8\\text{ m s}^{-2}$, (c) $60\\text{ m}$, (d) $60\\text{ m}$, (e) $112\\text{ m}, 50.2\\%$",
            "feedback": "You omitted the thinking distance when finding total stopping distance in part (d). Stopping distance is thinking distance plus braking distance: $14.4 + 60 = 74.4\\text{ m}$."
        },
        {
            "ans": "(a) $14.4\\text{ m}$, (b) $4.8\\text{ m s}^{-2}$, (c) $60\\text{ m}$, (d) $74.4\\text{ m}$, (e) $112\\text{ m}, 25.0\\%$",
            "feedback": "You assumed stopping distance scales directly with speed ($30 / 24 = 1.25$). While thinking distance is proportional to speed, braking distance is proportional to speed squared, resulting in a $50.2\\%$ increase."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Non-Linear Stopping Scaling",
        "content": "Notice why a modest $25\\%$ speed increase (from $24\\text{ m s}^{-1}$ to $30\\text{ m s}^{-1}$) causes a dramatic $50.2\\%$ increase in stopping distance. Thinking distance scales linearly with speed ($s \\propto u$), but braking distance scales quadratically ($s \\propto u^2$) because braking distance depends on dissipating kinetic energy: $\\dfrac{1}{2}m u^2 = F s$."
    }
},
{
    "id": "012141",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Motion in a Straight Line",
    "subtopic": [
        "Velocity-Time Graphs",
        "Modelling Acceleration",
        "Graphical Comparison"
    ],
    "img": false,
    "question": "Callum runs a distance of $60\\text{ m}$ in $15\\text{ s}$. He starts from rest and accelerates to a speed of $5\\text{ m s}^{-1}$. He runs the remaining distance at a constant speed of $5\\text{ m s}^{-1}$.<br><br>Callum proposes a model in which his acceleration is constant until time $T\\text{ seconds}$.<br><br><strong>(a)</strong> Sketch the velocity-time graph for Callum's run using this model.<br><br><strong>(b)</strong> Calculate the value of $T$.<br><br><strong>(c)</strong> Find an expression for Callum's displacement $s\\text{ metres}$ at time $t\\text{ seconds}$ for $0 \\le t \\le T$.<br><br><strong>(d)</strong> Use this model to find the time taken for Callum to run the first $15\\text{ m}$.<br><br>Callum proposes a refined model in which his velocity during the acceleration phase is a quadratic function of $t$. The graph of this quadratic goes through $(0, 0)$ and has its maximum point (vertex) at $(S, 5)$. In this model, the acceleration phase lasts until time $S\\text{ seconds}$, after which the velocity remains constant at $5\\text{ m s}^{-1}$.<br><br><strong>(e)</strong> Sketch a velocity-time graph that represents Callum's run using this refined model.<br><br><strong>(f)</strong> State, with a clear reason, whether $S$ is greater than $T$ or less than $T$.",
    "steps": [
        "<strong>(a) Velocity-time graph (Linear Model):</strong><br><br>The graph increases linearly from $(0, 0)$ to $(T, 5)$ and then remains horizontal at $v = 5\\text{ m s}^{-1}$ until $t = 15\\text{ s}$.<img src='images/Mechanics_pngs/012141_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "<strong>(b) Calculating $T$:</strong><br><br>The total distance of $60\\text{ m}$ equals the area of the trapezium under the graph:\\begin{aligned} &\\dfrac{1}{2}\\big(15 + (15 - T)\\big)(5) = 60 \\cr &\\dfrac{1}{2}(30 - T)(5) = 60 \\cr &(30 - T)(2.5) = 60 \\cr &30 - T = 24 \\cr &T = 6\\text{ s} \\end{aligned}",
        "<strong>(c) Expression for displacement $s(t)$:</strong><br><br>The constant acceleration during the first $6\\text{ seconds}$ is:\\begin{aligned} a &= \\dfrac{5 - 0}{6} \\cr &= \\dfrac{5}{6}\\text{ m s}^{-2} \\end{aligned}<br><br>Using $s = ut + \\dfrac{1}{2}at^2$ with $u = 0$:\\begin{aligned} s &= \\dfrac{1}{2}\\left(\\dfrac{5}{6}\\right)t^2 \\cr &= \\dfrac{5}{12}t^2 \\end{aligned}",
        "<strong>(d) Time to run the first $15\\text{ m}$:</strong><br><br>Setting $s = 15$:\\begin{aligned} &\\dfrac{5}{12}t^2 = 15 \\cr &5t^2 = 180 \\cr &t^2 = 36 \\cr &t = 6\\text{ s} \\end{aligned}<br><br>This occurs exactly at the end of the acceleration phase.",
        "<strong>(e) & (f) Refined model and comparison:</strong><br><br>The refined quadratic graph starts at the origin and curves smoothly with decreasing gradient, reaching a horizontal tangent at $(S, 5)$ before continuing horizontally.<br><br>In the linear model, the average speed while accelerating is $\\dfrac{0 + 5}{2} = 2.5\\text{ m s}^{-1}$. In the quadratic model, the curve bulges upwards towards the top speed, giving a higher average speed during acceleration (specifically $\\dfrac{2}{3} \\times 5 \\approx 3.33\\text{ m s}^{-1}$).<br><br>However, replacing constant-speed running ($5\\text{ m s}^{-1}$) with an accelerating phase lowers the distance covered per second. To maintain the same total area of $60\\text{ m}$ over $15\\text{ s}$, the duration of the acceleration phase must be longer. Therefore, $S > T$.",
        "Final Answer: (b) $T = 6\\text{ s}$, (c) $s = \\dfrac{5}{12}t^2$, (d) $6\\text{ s}$, (f) $S > T$"
    ],
    "pi_options": [
        {
            "ans": "(b) $T = 6\\text{ s}$, (c) $s = \\dfrac{5}{12}t^2$, (d) $6\\text{ s}$, (f) $S < T$",
            "feedback": "You concluded that $S < T$. Because the average speed while accelerating ($\\frac{10}{3}\\text{ m s}^{-1}$) is less than the cruising speed ($5\\text{ m s}^{-1}$), having a fuller quadratic acceleration curve means the acceleration phase must last longer ($S > T$) to balance the total area at $60\\text{ m}$."
        },
        {
            "ans": "(b) $T = 3\\text{ s}$, (c) $s = \\dfrac{5}{6}t^2$, (d) $4.24\\text{ s}$, (f) $S > T$",
            "feedback": "You made an error setting up the trapezium area. The parallel sides have lengths $15$ and $15 - T$, giving\\begin{aligned} \\dfrac{1}{2}(30 - T)(5) = 60 \\end{aligned}which solves to $30 - T = 24$, so $T = 6\\text{ s}$, not $3\\text{ s}$."
        },
        {
            "ans": "(b) $T = 6\\text{ s}$, (c) $s = \\dfrac{5}{6}t^2$, (d) $4.24\\text{ s}$, (f) $S > T$",
            "feedback": "You omitted the factor of $\\frac{1}{2}$ in the displacement formula $s = \\frac{1}{2}at^2$. With $a = \\frac{5}{6}\\text{ m s}^{-2}$, the displacement expression is $s = \\frac{5}{12}t^2$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Area Under Parabolic Profiles",
        "content": "For a quadratic velocity curve that starts at the origin and levels off with zero gradient at its vertex $(S, v_{\\text{max}})$, the area underneath is always exactly two-thirds of the enclosing rectangle:\\begin{aligned} \\text{Area} = \\dfrac{2}{3} S v_{\\text{max}} \\end{aligned}Comparing this to the triangle area $\\dfrac{1}{2} T v_{\\text{max}}$ for constant acceleration confirms algebraically that $S$ must exceed $T$ to maintain the same total distance."
    }
},
{
    "id": "012142",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Motion in a Straight Line",
    "subtopic": [
        "Velocity-Time Graphs",
        "Non-Linear Acceleration",
        "Area Comparison"
    ],
    "img": false,
    "question": "A cyclist travels along a straight cycle path, covering a total distance of $102\\text{ m}$ in $20\\text{ s}$. The cyclist starts from rest, accelerates to a cruising speed of $6\\text{ m s}^{-1}$, and maintains this speed for the remainder of the journey.<br><br><strong>Model A:</strong> The acceleration is assumed to be constant from $t = 0$ to $t = T\\text{ seconds}$.<br><br><strong>(a)</strong> Calculate the value of $T$.<br><br><strong>(b)</strong> Calculate the acceleration of the cyclist during this initial phase.<br><br><strong>(c)</strong> Calculate the distance travelled by the cyclist during the first $4\\text{ seconds}$.<br><br><strong>Model B:</strong> A sports scientist proposes that the acceleration decreases continuously as speed builds. In this refined model, the acceleration phase lasts until time $S\\text{ seconds}$, during which the velocity curve passes through $(0, 0)$ and has a horizontal tangent at $(S, 6)$, followed by constant velocity of $6\\text{ m s}^{-1}$.<br><br><strong>(d)</strong> Sketch the velocity-time graph representing Model B.<br><br><strong>(e)</strong> Given that the area under the velocity curve during the acceleration phase ($0 \\le t \\le S$) is $\\dfrac{2}{3}(6S)$, determine whether $S > T$ or $S < T$, giving a full mathematical justification.",
    "steps": [
        "<strong>(a) Calculating $T$ in Model A:</strong><br><br>The total area under the trapezium is $102\\text{ m}$:\\begin{aligned} &\\dfrac{1}{2}\\big(20 + (20 - T)\\big)(6) = 102 \\cr &3(40 - T) = 102 \\cr &40 - T = 34 \\cr &T = 6\\text{ s} \\end{aligned}",
        "<strong>(b) Initial acceleration:</strong><br><br>Using $a = \\dfrac{v - u}{t}$:\\begin{aligned} a &= \\dfrac{6 - 0}{6} \\cr &= 1\\text{ m s}^{-2} \\end{aligned}",
        "<strong>(c) Distance during first $4\\text{ seconds}$:</strong><br><br>Since $4 < T$, the cyclist is still accelerating uniformly:\\begin{aligned} s &= \\dfrac{1}{2}at^2 \\cr &= \\dfrac{1}{2}(1)(4^2) \\cr &= 8\\text{ m} \\end{aligned}",
        "<strong>(d) Velocity-time graph for Model B:</strong><br><br>The graph starts at the origin, curves upwards with decreasing gradient to a horizontal tangent at $(S, 6)$, and continues horizontally at $v = 6\\text{ m s}^{-1}$ until $t = 20\\text{ s}$.<img src='images/Mechanics_pngs/012142_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "<strong>(e) Comparing $S$ and $T$:</strong><br><br>In Model B, the total distance is the sum of the acceleration area and the cruising area:\\begin{aligned} &102 = \\dfrac{2}{3}(6S) + 6(20 - S) \\cr &102 = 4S + 120 - 6S \\cr &102 = 120 - 2S \\cr &2S = 18 \\cr &S = 9\\text{ s} \\end{aligned}<br><br>Comparing the two values:\\begin{aligned} 9 > 6 \\implies S > T \\end{aligned}",
        "Final Answer: (a) $T = 6\\text{ s}$, (b) $1\\text{ m s}^{-2}$, (c) $8\\text{ m}$, (e) $S > T$"
    ],
    "pi_options": [
        {
            "ans": "(a) $T = 6\\text{ s}$, (b) $1\\text{ m s}^{-2}$, (c) $8\\text{ m}$, (e) $S < T$",
            "feedback": "You concluded $S < T$. Solving the area equation for Model B gives\\begin{aligned} 4S + 6(20 - S) = 102 \\end{aligned}which yields $2S = 18$, so $S = 9\\text{ s}$. Since $9 > 6$, $S$ is strictly greater than $T$."
        },
        {
            "ans": "(a) $T = 8\\text{ s}$, (b) $0.75\\text{ m s}^{-2}$, (c) $6\\text{ m}$, (e) $S > T$",
            "feedback": "You miscalculated the trapezium equation in part (a). The parallel sides are $20$ and $20 - T$, which gives \\begin{aligned}3(40 - T) &= 102 \\cr \\implies 40 - T & = 34 \\cr\\implies T & = 6\\text{ s}\\end{aligned}"
        },
        {
            "ans": "(a) $T = 6\\text{ s}$, (b) $1\\text{ m s}^{-2}$, (c) $12\\text{ m}$, (e) $S > T$",
            "feedback": "You calculated the distance using constant speed $s = vt = 6(2)$ or omitted the factor of $\\frac{1}{2}$ in part (c). Under constant acceleration from rest, $s = \\frac{1}{2}(1)(4^2) = 8\\text{ m}$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: The Area Deficit Principle",
        "content": "Notice why $S$ must exceed $T$. Every second spent accelerating rather than cruising at $6\\text{ m s}^{-1}$ creates a distance deficit. In Model B, the average speed during acceleration is $4\\text{ m s}^{-1}$, which is closer to $6\\text{ m s}^{-1}$ than the linear average of $3\\text{ m s}^{-1}$. To accumulate the required total distance, the curved phase must persist longer."
    }
},
{
    "id": "012143",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Motion in a Straight Line",
    "subtopic": [
        "Velocity-Time Graphs",
        "Terminal Speed",
        "Model Comparison"
    ],
    "img": false,
    "question": "A sprinter runs a $100\\text{ m}$ race in $12\\text{ s}$. The sprinter starts from rest, accelerates to a top speed of $10\\text{ m s}^{-1}$, and maintains this top speed until crossing the finish line.<br><br><strong>Model 1:</strong> The sprinter's acceleration is assumed to be constant until time $T\\text{ seconds}$.<br><br><strong>(a)</strong> Sketch the velocity-time graph for Model 1.<br><br><strong>(b)</strong> Calculate the value of $T$.<br><br><strong>(c)</strong> Calculate the distance run by the sprinter during the acceleration phase.<br><br><strong>Model 2:</strong> A coach suggests that the sprinter's velocity during the acceleration phase $0 \\le t \\le S$ is better represented by a parabolic curve passing through $(0, 0)$ with vertex at $(S, 10)$, after which the speed remains constant at $10\\text{ m s}^{-1}$.<br><br><strong>(d)</strong> Sketch the velocity-time graph for Model 2 on a separate set of axes.<br><br><strong>(e)</strong> Explain, by considering the average speed during the acceleration phase or the area under the graph, whether $S$ must be greater than or less than $T$.",
    "steps": [
        "<strong>(a) Velocity-time graph for Model 1:</strong><br><br>A straight line from $(0, 0)$ to $(T, 10)$, followed by a horizontal line from $(T, 10)$ to $(12, 10)$.<img src='images/Mechanics_pngs/012143_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "<strong>(b) Calculating $T$:</strong><br><br>Using the trapezium area formula for total distance of $100\\text{ m}$:\\begin{aligned} &\\dfrac{1}{2}\\big(12 + (12 - T)\\big)(10) = 100 \\cr &5(24 - T) = 100 \\cr &24 - T = 20 \\cr &T = 4\\text{ s} \\end{aligned}",
        "<strong>(c) Distance during acceleration:</strong><br><br>The distance is the area of the initial triangle:\\begin{aligned} s_1 &= \\dfrac{1}{2}(4)(10) \\cr &= 20\\text{ m} \\end{aligned}",
        "<strong>(d) Velocity-time graph for Model 2:</strong><br><br>A concave-down curve from $(0, 0)$ reaching $(S, 10)$ with zero gradient, followed by a horizontal line at $v = 10\\text{ m s}^{-1}$ until $t = 12\\text{ s}$.",
        "<strong>(e) Comparing $S$ and $T$:</strong><br><br>In Model 1, the average speed during acceleration is $5\\text{ m s}^{-1}$. In Model 2, the parabolic curve gives an average speed of $\\dfrac{2}{3}(10) \\approx 6.67\\text{ m s}^{-1}$.<br><br>Because the sprinter accelerates more efficiently under Model 2, running at this higher average speed rather than the constant top speed ($10\\text{ m s}^{-1}$) reduces the total distance by $3.33\\text{ m}$ for every second of acceleration.<br><br>Equating total distance to $100\\text{ m}$:\\begin{aligned} &\\dfrac{20}{3}S + 10(12 - S) = 100 \\cr &120 - \\dfrac{10}{3}S = 100 \\cr &\\dfrac{10}{3}S = 20 \\cr &S = 6\\text{ s} \\end{aligned}<br><br>Since $6 > 4$, $S > T$.",
        "Final Answer: (b) $T = 4\\text{ s}$, (c) $20\\text{ m}$, (e) $S > T$"
    ],
    "pi_options": [
        {
            "ans": "(b) $T = 4\\text{ s}$, (c) $20\\text{ m}$, (e) $S < T$",
            "feedback": "You reasoned that because Model 2 is faster initially, the phase must be shorter. However, cruising at $10\\text{ m s}^{-1}$ covers more distance per second than accelerating. Setting up the area equation yields\\begin{aligned} 120 - \\dfrac{10}{3}S = 100 \\end{aligned}which gives $S = 6\\text{ s}$, meaning $S > T$."
        },
        {
            "ans": "(b) $T = 2\\text{ s}$, (c) $10\\text{ m}$, (e) $S > T$",
            "feedback": "You miscalculated the trapezium equation in part (b). The parallel sides are $12$ and $12 - T$, which gives \\begin{aligned}5(24 - T) &= 100 \\cr \\implies 24 - T &= 20 \\cr\\implies T &= 4\\text{ s}\\ebd{aligned"
        },
        {
            "ans": "(b) $T = 4\\text{ s}$, (c) $40\\text{ m}$, (e) $S > T$",
            "feedback": "You omitted the factor of $\\frac{1}{2}$ when finding the area of the acceleration triangle in part (c): $s_1 = \\frac{1}{2}(4)(10) = 20\\text{ m}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Qualitative Comparison Traps",
        "content": "Students often intuitively guess that a more rapid acceleration curve should lead to a shorter duration ($S < T$). Always test your intuition against the total area constraint: replacing top speed ($10\\text{ m s}^{-1}$) with acceleration always creates an area deficit. A higher average acceleration speed means each second loses less area, so more seconds are required to balance the equation."
    }
},
{
    "id": "012144",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Motion in a Straight Line",
    "subtopic": [
        "Piecewise Linear Motion",
        "Displacement Function",
        "Quadratic Transition"
    ],
    "img": false,
    "question": "A rowing boat travels a distance of $78.75\\text{ m}$ across a calm lake in $20\\text{ s}$. Starting from rest, the boat accelerates to its top cruising speed of $4.5\\text{ m s}^{-1}$ and covers the remainder of the distance at this steady speed.<br><br>An initial model assumes the acceleration is constant until time $T\\text{ seconds}$.<br><br><strong>(a)</strong> Sketch the velocity-time graph for the boat using this model.<br><br><strong>(b)</strong> Calculate the value of $T$.<br><br><strong>(c)</strong> Find an expression in terms of $t$ for the displacement $s\\text{ metres}$ of the boat for $0 \\le t \\le T$.<br><br><strong>(d)</strong> Find the time taken for the boat to travel the first $11.25\\text{ m}$.<br><br>An alternative model assumes the velocity during the acceleration phase ($0 \\le t \\le S$) is quadratic, passing through the origin and joining smoothly to the horizontal line $v = 4.5$ at $t = S$ with zero gradient.<br><br><strong>(e)</strong> Sketch the velocity-time graph for this alternative model.<br><br><strong>(f)</strong> State, with clear mathematical reasoning, whether $S$ is greater than or less than $T$.",
    "steps": [
        "<strong>(a) Velocity-time graph for initial model:</strong><br><br>The graph increases linearly from $(0, 0)$ to $(T, 4.5)$, then remains horizontal at $v = 4.5\\text{ m s}^{-1}$ until $t = 20\\text{ s}$.<img src='images/Mechanics_pngs/012144_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "<strong>(b) Calculating $T$:</strong><br><br>Equating the area of the trapezium to $78.75\\text{ m}$:\\begin{aligned} &\\dfrac{1}{2}\\big(20 + (20 - T)\\big)(4.5) = 78.75 \\cr &2.25(40 - T) = 78.75 \\cr &40 - T = 35 \\cr &T = 5\\text{ s} \\end{aligned}",
        "<strong>(c) Expression for displacement $s(t)$:</strong><br><br>The constant acceleration is:\\begin{aligned} a &= \\dfrac{4.5}{5} \\cr &= 0.9\\text{ m s}^{-2} \\end{aligned}<br><br>Using $s = \\dfrac{1}{2}at^2$:\\begin{aligned} s &= \\dfrac{1}{2}(0.9)t^2 \\cr &= 0.45t^2 \\end{aligned}",
        "<strong>(d) Time to travel the first $11.25\\text{ m}$:</strong><br><br>Setting $s = 11.25$:\\begin{aligned} &0.45t^2 = 11.25 \\cr &t^2 = \\dfrac{11.25}{0.45} \\cr &t^2 = 25 \\cr &t = 5\\text{ s} \\end{aligned}",
        "<strong>(e) & (f) Alternative model and comparison:</strong><br><br>The alternative graph curves smoothly from $(0, 0)$ to a vertex at $(S, 4.5)$, followed by a horizontal line.<br><br>In the quadratic model, the area under the acceleration curve is $\\dfrac{2}{3}(4.5S) = 3S$.<br><br>Equating total distance to $78.75\\text{ m}$:\\begin{aligned} &3S + 4.5(20 - S) = 78.75 \\cr &3S + 90 - 4.5S = 78.75 \\cr &90 - 1.5S = 78.75 \\cr &1.5S = 11.25 \\cr &S = 7.5\\text{ s} \\end{aligned}<br><br>Comparing values:\\begin{aligned} 7.5 > 5 \\implies S > T \\end{aligned}",
        "Final Answer: (b) $T = 5\\text{ s}$, (c) $s = 0.45t^2$, (d) $5\\text{ s}$, (f) $S > T$"
    ],
    "pi_options": [
        {
            "ans": "(b) $T = 5\\text{ s}$, (c) $s = 0.45t^2$, (d) $5\\text{ s}$, (f) $S < T$",
            "feedback": "You concluded $S < T$. Solving the area equation for the quadratic model gives\\begin{aligned} 90 - 1.5S = 78.75 \\end{aligned}which yields $S = 7.5\\text{ s}$. Since $7.5 > 5$, $S$ is strictly greater than $T$."
        },
        {
            "ans": "(b) $T = 4\\text{ s}$, (c) $s = 0.56t^2$, (d) $4.48\\text{ s}$, (f) $S > T$",
            "feedback": "You miscalculated the trapezium equation in part (b). Setting $2.25(40 - T) = 78.75$ gives $40 - T = 35$, so $T = 5\\text{ s}$."
        },
        {
            "ans": "(b) $T = 5\\text{ s}$, (c) $s = 0.9t^2$, (d) $3.54\\text{ s}$, (f) $S > T$",
            "feedback": "You omitted the factor of $\\frac{1}{2}$ in the displacement formula $s = \\frac{1}{2}at^2$. With $a = 0.9\\text{ m s}^{-2}$, the displacement expression is $s = 0.45t^2$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Boundary Point Verification",
        "content": "Notice in part <strong>(d)</strong> that the time to reach $11.25\\text{ m}$ is exactly $t = 5\\text{ s}$. This is the exact boundary where the acceleration phase ends ($T = 5\\text{ s}$). If the question had asked for the time to reach $20\\text{ m}$, using $s = 0.45t^2$ would be mathematically invalid because the model transitions to constant speed after $t = 5\\text{ s}$."
    }
},
{
    "id": "012145",
    "branch": "Mechanics",
    "board": "OCR MEI",
    "level": "AS",
    "major_area": "Kinematics",
    "topic": "Motion in a Straight Line",
    "subtopic": [
        "Trapezium Velocity-Time Profile",
        "Multi-Stage Kinematics",
        "Transition Points"
    ],
    "img": false,
    "question": "An ice skater travels along a straight track, covering a total distance of $120\\text{ m}$ in $20\\text{ s}$. The skater starts from rest, accelerates uniformly at $2\\text{ m s}^{-2}$ to a maximum speed of $8\\text{ m s}^{-1}$, glides at this constant speed for a period of time, and finally decelerates uniformly to rest. The deceleration phase takes $6\\text{ seconds}$.<br><br><strong>(a)</strong> Calculate the duration of the acceleration phase.<br><br><strong>(b)</strong> Calculate the distance travelled by the skater during the acceleration phase.<br><br><strong>(c)</strong> Calculate the magnitude of the deceleration during the final phase, and find the distance travelled while decelerating.<br><br><strong>(d)</strong> Find the time spent gliding at constant speed, and calculate the distance covered during this phase.<br><br><strong>(e)</strong> Sketch the velocity-time graph for the skater's entire $20\\text{ second}$ journey, clearly indicating the values of $t$ and $v$ at all transition points.",
    "steps": [
        "<strong>(a) Duration of acceleration phase:</strong><br><br>Using $v = u + at$ with $u = 0$, $v = 8\\text{ m s}^{-1}$, and $a = 2\\text{ m s}^{-2}$:\\begin{aligned} 8 &= 0 + 2t_1 \\cr t_1 &= 4\\text{ s} \\end{aligned}",
        "<strong>(b) Distance during acceleration:</strong><br><br>Using $s_1 = \\dfrac{u + v}{2}t_1$:\\begin{aligned} s_1 &= \\left(\\dfrac{0 + 8}{2}\\right)(4) \\cr &= 4(4) \\cr &= 16\\text{ m} \\end{aligned}",
        "<strong>(c) Deceleration and distance during final phase:</strong><br><br>For the final phase, $u = 8\\text{ m s}^{-1}$, $v = 0\\text{ m s}^{-1}$, and $t_3 = 6\\text{ s}$:\\begin{aligned} a_3 &= \\dfrac{0 - 8}{6} \\cr &= -\\dfrac{4}{3}\\text{ m s}^{-2} \\cr &\\approx -1.33\\text{ m s}^{-2} \\end{aligned}<br><br>The magnitude of the deceleration is $1.33\\text{ m s}^{-2}$.<br><br>Distance decelerating:\\begin{aligned} s_3 &= \\left(\\dfrac{8 + 0}{2}\\right)(6) \\cr &= 4(6) \\cr &= 24\\text{ m} \\end{aligned}",
        "<strong>(d) Gliding phase:</strong><br><br>The distance covered during the gliding phase is:\\begin{aligned} s_2 &= 120 - (s_1 + s_3) \\cr &= 120 - (16 + 24) \\cr &= 120 - 40 \\cr &= 80\\text{ m} \\end{aligned}<br><br>Time spent gliding at constant speed $v = 8\\text{ m s}^{-1}$:\\begin{aligned} t_2 &= \\dfrac{s_2}{v} \\cr &= \\dfrac{80}{8} \\cr &= 10\\text{ s} \\end{aligned}<br><br>(Checking total time: $t_1 + t_2 + t_3 = 4 + 10 + 6 = 20\\text{ s}$).",
        "<strong>(e) Velocity-time graph:</strong><br><br>The graph consists of three line segments with transition coordinates $(0, 0)$, $(4, 8)$, $(14, 8)$, and $(20, 0)$.<img src='images/Mechanics_pngs/012145_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "Final Answer: (a) $4\\text{ s}$, (b) $16\\text{ m}$, (c) $1.33\\text{ m s}^{-2}, 24\\text{ m}$, (d) $10\\text{ s}, 80\\text{ m}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $4\\text{ s}$, (b) $16\\text{ m}$, (c) $1.33\\text{ m s}^{-2}, 24\\text{ m}$, (d) $10\\text{ s}, 40\\text{ m}$",
            "feedback": "You subtracted the acceleration and deceleration distances incorrectly in part (d). The distance while gliding is $120 - (16 + 24) = 80\\text{ m}$, not $40\\text{ m}$."
        },
        {
            "ans": "(a) $4\\text{ s}$, (b) $32\\text{ m}$, (c) $1.33\\text{ m s}^{-2}, 48\\text{ m}$, (d) $5\\text{ s}, 40\\text{ m}$",
            "feedback": "You omitted the factor of $\\frac{1}{2}$ when evaluating the distances for the acceleration and deceleration stages, using $s = vt$ instead of $s = \\frac{u + v}{2}t$."
        },
        {
            "ans": "(a) $4\\text{ s}$, (b) $16\\text{ m}$, (c) $0.75\\text{ m s}^{-2}, 24\\text{ m}$, (d) $10\\text{ s}, 80\\text{ m}$",
            "feedback": "You inverted the division when finding deceleration in part (c). The deceleration is\\begin{aligned} a = \\dfrac{8 - 0}{6} = 1.33\\text{ m s}^{-2} \\end{aligned}not $6 / 8 = 0.75\\text{ m s}^{-2}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Total Time Self-Consistency",
        "content": "In multi-stage kinematics questions, always perform a self-consistency check on the times. Here, the three distinct stages take $4\\text{ s}$, $10\\text{ s}$, and $6\\text{ s}$. Adding them confirms $4 + 10 + 6 = 20\\text{ s}$, verifying your gliding calculations before you move on."
    }
},
{
    "id": "012146",
    "branch": "Pure",
    "board": "OCR MEI",
    "level": "AS",
    "major_area": "Exponentials and Logarithms",
    "topic": "Modelling with Logarithms",
    "subtopic": [
        "Power Law Models",
        "Log-Log Linearization",
        "Solar Radiation"
    ],
    "img": false,
    "question": "The intensity of solar radiation, $y\\text{ watts per square metre}$, and the average distance from the Sun, $x\\text{ astronomical units (AU)}$, are given in the table below for the planets Mercury and Jupiter:<table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:6px; text-align:left;'>Quantity</th><th style='padding:6px;'>Mercury</th><th style='padding:6px;'>Jupiter</th></tr></thead><tbody><tr style='border-bottom:1px solid #ddd;'><td style='padding:6px; text-align:left;'>$x\\text{ (AU)}$</td><td style='padding:6px;'>$0.3075$</td><td style='padding:6px;'>$4.950$</td></tr><tr style='border-bottom:1px solid #ddd;'><td style='padding:6px; text-align:left;'>$y\\text{ (W m}^{-2}\\text{)}$</td><td style='padding:6px;'>$14\\,400$</td><td style='padding:6px;'>$55.8$</td></tr><tr style='border-bottom:1px solid #ddd;'><td style='padding:6px; text-align:left;'>$\\ln x$</td><td style='padding:6px;'></td><td style='padding:6px;'></td></tr><tr><td style='padding:6px; text-align:left;'>$\\ln y$</td><td style='padding:6px;'></td><td style='padding:6px;'></td></tr></tbody></table>The intensity $y$ is modelled as being proportional to a power of the distance $x$.<br><br><strong>(a)</strong> Write down an equation for $y$ in terms of $x$ and two constants, $k$ and $n$.<br><br><strong>(b)</strong> Show that this equation can be written in the form $\\ln y = a + b \\ln x$, stating $a$ and $b$ in terms of $k$ and $n$.<br><br><strong>(c)</strong> Calculate the values of $\\ln x$ and $\\ln y$ to complete the table, giving each value correct to 4 significant figures.<br><br><strong>(d)</strong> Use your values from part <strong>(c)</strong> to calculate the values of the constants $a$ and $b$, giving each correct to 3 significant figures.<br><br><strong>(e)</strong> Hence rewrite your equation from part <strong>(a)</strong> for $y$ in terms of $x$, using appropriate numerical values for the constants.<br><br><strong>(f)</strong> Sketch a graph of the equation found in part <strong>(e)</strong> for $x > 0$.<br><br><strong>(g)</strong> Earth is at an average distance of $1.0\\text{ AU}$ from the Sun. Use your model to estimate the intensity of solar radiation reaching Earth.",
    "steps": [
        "<strong>(a) Power law equation:</strong><br><br>Since $y$ is proportional to a power of $x$:\\begin{aligned} y = kx^n \\end{aligned}",
        "<strong>(b) Showing linear form:</strong><br><br>Taking natural logarithms of both sides:\\begin{aligned} \\ln y &= \\ln(kx^n) \\cr &= \\ln k + \\ln(x^n) \\cr &= \\ln k + n\\ln x \\end{aligned}<br><br>This is in the linear form $\\ln y = a + b\\ln x$, where $a = \\ln k$ and $b = n$.",
        "<strong>(c) Completing the table:</strong><br><br>For Mercury ($x = 0.3075$, $y = 14\\,400$):\\begin{aligned} \\ln x &= \\ln(0.3075) \\cr &\\approx -1.179 \\cr \\ln y &= \\ln(14\\,400) \\cr &\\approx 9.575 \\end{aligned}<br><br>For Jupiter ($x = 4.950$, $y = 55.8$):\\begin{aligned} \\ln x &= \\ln(4.950) \\cr &\\approx 1.599 \\cr \\ln y &= \\ln(55.8) \\cr &\\approx 4.022 \\end{aligned}",
        "<strong>(d) Calculating $a$ and $b$:</strong><br><br>Finding gradient $b$ using unrounded values:\\begin{aligned} b &= \\dfrac{4.0218 - 9.5750}{1.5994 - (-1.1793)} \\cr &= \\dfrac{-5.5532}{2.7787} \\cr &\\approx -1.998 \\cr &\\approx -2.00\\text{ (3 s.f.)} \\end{aligned}<br><br>Finding intercept $a$:\\begin{aligned} a &= \\ln y - b\\ln x \\cr &= 9.5750 - (-1.998)(-1.1793) \\cr &= 9.5750 - 2.3562 \\cr &\\approx 7.22\\text{ (3 s.f.)} \\end{aligned}",
        "<strong>(e) Rewriting the power equation:</strong><br><br>Finding $k$ from $a = \\ln k$:\\begin{aligned} k &= \\text{e}^{7.2188} \\cr &\\approx 1360 \\end{aligned}<br><br>Since $n = b = -2$, the equation is:\\begin{aligned} y = 1360x^{-2} \\quad \\text{or} \\quad y = \\dfrac{1360}{x^2} \\end{aligned}",
        "<strong>(f) Sketching the curve:</strong><br><br>The graph of $y = \\dfrac{1360}{x^2}$ is an inverse-square curve in the first quadrant, decreasing smoothly with both axes as asymptotes.<img src='images/Pure_pngs/012146_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "<strong>(g) Solar intensity for Earth:</strong><br><br>Substituting $x = 1.0\\text{ AU}$ into the model:\\begin{aligned} y &= 1360(1.0)^{-2} \\cr &= 1360\\text{ W m}^{-2} \\end{aligned}",
        "Final Answer: (d) $a = 7.22, b = -2.00$, (e) $y = 1360x^{-2}$, (g) $1360\\text{ W m}^{-2}$"
    ],
    "pi_options": [
        {
            "ans": "(d) $a = 7.22, b = 2.00$, (e) $y = 1360x^2$, (g) $1360\\text{ W m}^{-2}$",
            "feedback": "You made a sign error when finding the gradient $b$. Since $y$ decreases as $x$ increases, the gradient is negative:\\begin{aligned} b &= \\dfrac{4.022 - 9.575}{1.599 - (-1.179)} \\cr &= -2.00 \\end{aligned}"
        },
        {
            "ans": "(d) $a = 7.22, b = -2.00$, (e) $y = 7.22x^{-2}$, (g) $7.22\\text{ W m}^{-2}$",
            "feedback": "You forgot to take the exponential of $a$ to find $k$. In the linearised equation, $a = \\ln k$, so\\begin{aligned} k &= \\text{e}^{7.2188} \\cr &\\approx 1360 \\end{aligned}"
        },
        {
            "ans": "(d) $a = 9.58, b = -2.00$, (e) $y = 14400x^{-2}$, (g) $14400\\text{ W m}^{-2}$",
            "feedback": "You assumed $a$ was the value of $\\ln y$ at Mercury. To find the intercept $a$, you must evaluate $a = \\ln y - b\\ln x$, which gives $a \\approx 7.22$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: The Physics Sanity Check",
        "content": "This question models the inverse-square law of radiation. When your gradient evaluates to $b \\approx -1.998$, recognise immediately that the underlying physical exponent is exactly $-2$ ($y \\propto \\dfrac{1}{x^2}$). Furthermore, $k \\approx 1360\\text{ W m}^{-2}$ represents the solar constant reaching Earth at $x = 1\\text{ AU}$."
    }
},
{
    "id": "012147",
    "branch": "Pure",
    "board": "OCR MEI",
    "level": "AS",
    "major_area": "Exponentials and Logarithms",
    "topic": "Modelling with Logarithms",
    "subtopic": [
        "Power Law Models",
        "Planetary Periods",
        "Log-Log Transformation"
    ],
    "img": false,
    "question": "The orbital period of a planet, $T\\text{ years}$, and its mean distance from the Sun, $R\\text{ astronomical units (AU)}$, are recorded in the table below for Mars and Saturn:<table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:6px; text-align:left;'>Quantity</th><th style='padding:6px;'>Mars</th><th style='padding:6px;'>Saturn</th></tr></thead><tbody><tr style='border-bottom:1px solid #ddd;'><td style='padding:6px; text-align:left;'>$R\\text{ (AU)}$</td><td style='padding:6px;'>$1.524$</td><td style='padding:6px;'>$9.537$</td></tr><tr style='border-bottom:1px solid #ddd;'><td style='padding:6px; text-align:left;'>$T\\text{ (years)}$</td><td style='padding:6px;'>$1.881$</td><td style='padding:6px;'>$29.46$</td></tr><tr style='border-bottom:1px solid #ddd;'><td style='padding:6px; text-align:left;'>$\\ln R$</td><td style='padding:6px;'></td><td style='padding:6px;'></td></tr><tr><td style='padding:6px; text-align:left;'>$\\ln T$</td><td style='padding:6px;'></td><td style='padding:6px;'></td></tr></tbody></table>It is suggested that $T$ and $R$ are related by a power law of the form $T = k R^n$, where $k$ and $n$ are constants.<br><br><strong>(a)</strong> Express $\\ln T$ in the form $a + b \\ln R$, stating $a$ and $b$ in terms of $k$ and $n$.<br><br><strong>(b)</strong> Complete the table by finding the values of $\\ln R$ and $\\ln T$, giving each value correct to 4 significant figures.<br><br><strong>(c)</strong> Use your values from part <strong>(b)</strong> to find the constants $a$ and $b$, correct to 3 significant figures.<br><br><strong>(d)</strong> Hence express $T$ in terms of $R$, giving the numerical values of $k$ and $n$.<br><br><strong>(e)</strong> Sketch the graph of $T$ against $R$ for $R \\ge 0$.<br><br><strong>(f)</strong> An asteroid orbits the Sun at an average distance of $4.0\\text{ AU}$. Use the model to estimate its orbital period in years.",
    "steps": [
        "<strong>(a) Linearising the power model:</strong><br><br>Taking natural logarithms of $T = kR^n$:\\begin{aligned} \\ln T &= \\ln(kR^n) \\cr &= \\ln k + n\\ln R \\end{aligned}<br><br>In the form $\\ln T = a + b\\ln R$, $a = \\ln k$ and $b = n$.",
        "<strong>(b) Completing the table:</strong><br><br>For Mars ($R = 1.524$, $T = 1.881$):\\begin{aligned} \\ln R &= \\ln(1.524) \\cr &\\approx 0.4213 \\cr \\ln T &= \\ln(1.881) \\cr &\\approx 0.6318 \\end{aligned}<br><br>For Saturn ($R = 9.537$, $T = 29.46$):\\begin{aligned} \\ln R &= \\ln(9.537) \\cr &\\approx 2.255 \\cr \\ln T &= \\ln(29.46) \\cr &\\approx 3.383 \\end{aligned}",
        "<strong>(c) Finding constants $a$ and $b$:</strong><br><br>Gradient $b$:\\begin{aligned} b &= \\dfrac{3.3830 - 0.6318}{2.2552 - 0.4213} \\cr &= \\dfrac{2.7512}{1.8339} \\cr &\\approx 1.5002 \\cr &\\approx 1.50\\text{ (3 s.f.)} \\end{aligned}<br><br>Intercept $a$:\\begin{aligned} a &= \\ln T - b\\ln R \\cr &= 0.6318 - 1.5002(0.4213) \\cr &= 0.6318 - 0.6320 \\cr &\\approx 0.00\\text{ (3 s.f.)} \\end{aligned}",
        "<strong>(d) Final equation for $T$:</strong><br><br>Finding $k$:\\begin{aligned} k &= \\text{e}^a \\cr &= \\text{e}^0 \\cr &= 1.00 \\end{aligned}<br><br>Since $n = 1.5$, the relationship is:\\begin{aligned} T = R^{1.5} \\quad \\text{or} \\quad T = R^{\\frac{3}{2}} \\end{aligned}",
        "<strong>(e) Sketching the graph:</strong><br><br>The graph of $T = R^{1.5}$ passes through the origin $(0, 0)$ and curves upwards with increasing gradient in the first quadrant.<img src='images/Pure_pngs/012147_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "<strong>(f) Estimating period for asteroid:</strong><br><br>Substituting $R = 4.0\\text{ AU}$:\\begin{aligned} T &= (4.0)^{1.5} \\cr &= (\\sqrt{4.0})^3 \\cr &= 2^3 \\cr &= 8\\text{ years} \\end{aligned}",
        "Final Answer: (c) $a = 0.00, b = 1.50$, (d) $T = R^{1.5}$, (f) $8\\text{ years}$"
    ],
    "pi_options": [
        {
            "ans": "(c) $a = 0.00, b = 0.667$, (d) $T = R^{0.67}$, (f) $2.52\\text{ years}$",
            "feedback": "You inverted the gradient formula as $\\Delta \\ln R / \\Delta \\ln T$. The gradient is\\begin{aligned} b &= \\dfrac{\\Delta \\ln T}{\\Delta \\ln R} \\cr &= \\dfrac{3.383 - 0.6318}{2.255 - 0.4213} \\cr &= 1.50 \\end{aligned}"
        },
        {
            "ans": "(c) $a = 1.00, b = 1.50$, (d) $T = 2.72R^{1.5}$, (f) $21.8\\text{ years}$",
            "feedback": "You took $a = 1.00$ instead of $a = 0.00$. The intercept is $a \\approx 0$, which gives $k = \\text{e}^0 = 1$, so $T = R^{1.5}$."
        },
        {
            "ans": "(c) $a = 0.00, b = 1.50$, (d) $T = R^{1.5}$, (f) $6\\text{ years}$",
            "feedback": "You calculated $4 \\times 1.5 = 6$ instead of raising $4$ to the power of $1.5$. Evaluating the power gives\\begin{aligned} 4^{1.5} &= (\\sqrt{4})^3 \\cr &= 2^3 \\cr &= 8\\text{ years} \\end{aligned}"
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Kepler's Harmonic Law",
        "content": "This problem illustrates Kepler's Third Law ($T^2 = R^3$). In logarithmic form, squaring both sides yields $2\\ln T = 3\\ln R$, which leads directly to $\\ln T = 1.5\\ln R$. Finding an intercept of $a = 0$ confirms that $k = 1$ when periods are measured in Earth years and distances in astronomical units."
    }
},
{
    "id": "012148",
    "branch": "Pure",
    "board": "OCR MEI",
    "level": "AS",
    "major_area": "Exponentials and Logarithms",
    "topic": "Modelling with Logarithms",
    "subtopic": [
        "Exponential Growth Models",
        "Semi-Log Transformation",
        "Population Growth"
    ],
    "img": false,
    "question": "A laboratory culture of bacteria is monitored over time. The population, $N\\text{ (in thousands)}$, after $t\\text{ hours}$ is recorded at two intervals in the table below:<table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:6px; text-align:left;'>Quantity</th><th style='padding:6px;'>Observation 1</th><th style='padding:6px;'>Observation 2</th></tr></thead><tbody><tr style='border-bottom:1px solid #ddd;'><td style='padding:6px; text-align:left;'>$t\\text{ (hours)}$</td><td style='padding:6px;'>$2.0$</td><td style='padding:6px;'>$5.0$</td></tr><tr style='border-bottom:1px solid #ddd;'><td style='padding:6px; text-align:left;'>$N\\text{ (thousands)}$</td><td style='padding:6px;'>$45.0$</td><td style='padding:6px;'>$360$</td></tr><tr><td style='padding:6px; text-align:left;'>$\\ln N$</td><td style='padding:6px;'></td><td style='padding:6px;'></td></tr></tbody></table>The population is modelled by the exponential relationship $N = A \\mathrm{e}^{kt}$, where $A$ and $k$ are constants.<br><br><strong>(a)</strong> Show that $\\ln N$ can be written in the form $c + mt$, stating $c$ and $m$ in terms of $A$ and $k$.<br><br><strong>(b)</strong> Complete the table by calculating the missing values of $\\ln N$, giving each value correct to 4 significant figures.<br><br><strong>(c)</strong> Use the completed table to calculate the values of $c$ and $m$, giving each correct to 3 significant figures.<br><br><strong>(d)</strong> Hence determine the values of $A$ and $k$, giving $A$ correct to 3 significant figures and $k$ correct to 3 decimal places.<br><br><strong>(e)</strong> Sketch the graph of $N$ against $t$ for $t \\ge 0$.<br><br><strong>(f)</strong> Use the model to predict the bacterial population after $8.0\\text{ hours}$.",
    "steps": [
        "<strong>(a) Linearising the exponential model:</strong><br><br>Taking natural logarithms of $N = A\\text{e}^{kt}$:\\begin{aligned} \\ln N &= \\ln(A\\text{e}^{kt}) \\cr &= \\ln A + \\ln(\\text{e}^{kt}) \\cr &= \\ln A + kt \\end{aligned}<br><br>In the linear form $\\ln N = c + mt$, $c = \\ln A$ and $m = k$.",
        "<strong>(b) Completing the table:</strong><br><br>For Observation 1 ($N = 45.0$):\\begin{aligned} \\ln N &= \\ln(45.0) \\cr &\\approx 3.807 \\end{aligned}<br><br>For Observation 2 ($N = 360$):\\begin{aligned} \\ln N &= \\ln(360) \\cr &\\approx 5.886 \\end{aligned}",
        "<strong>(c) Calculating $c$ and $m$:</strong><br><br>Gradient $m$:\\begin{aligned} m &= \\dfrac{5.8861 - 3.8067}{5.0 - 2.0} \\cr &= \\dfrac{2.0794}{3} \\cr &\\approx 0.6931 \\cr &\\approx 0.693\\text{ (3 s.f.)} \\end{aligned}<br><br>Intercept $c$:\\begin{aligned} c &= \\ln N - mt \\cr &= 3.8067 - 0.6931(2.0) \\cr &= 3.8067 - 1.3862 \\cr &\\approx 2.42\\text{ (3 s.f.)} \\end{aligned}",
        "<strong>(d) Evaluating $A$ and $k$:</strong><br><br>Since $k = m$:\\begin{aligned} k = 0.693\\text{ (3 d.p.)} \\end{aligned}<br><br>Finding $A = \\text{e}^c$:\\begin{aligned} A &= \\text{e}^{2.4205} \\cr &\\approx 11.25 \\cr &\\approx 11.3\\text{ (3 s.f.)} \\end{aligned}",
        "<strong>(e) Sketching the exponential curve:</strong><br><br>The graph starts at vertical intercept $(0, 11.3)$ and displays exponential growth with increasing gradient as $t$ increases.<img src='images/Pure_pngs/012148_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "<strong>(f) Population after $8.0\\text{ hours}$:</strong><br><br>Evaluating $N$ at $t = 8.0$:\\begin{aligned} N &= 11.25\\text{e}^{0.6931(8.0)} \\cr &= 11.25\\text{e}^{5.5448} \\cr &\\approx 2880\\text{ (thousands)} \\end{aligned}<br><br>This represents approximately $2\\,880\\,000$ bacteria.",
        "Final Answer: (c) $c = 2.42, m = 0.693$, (d) $A = 11.3, k = 0.693$, (f) $2880\\text{ (thousands)}$"
    ],
    "pi_options": [
        {
            "ans": "(c) $c = 2.42, m = 0.693$, (d) $A = 2.42, k = 0.693$, (f) $619\\text{ (thousands)}$",
            "feedback": "You forgot to take the exponential of $c$ to find $A$. In this semi-log model, $c = \\ln A$, so\\begin{aligned} A &= \\text{e}^{2.4205} \\cr &\\approx 11.3 \\end{aligned}"
        },
        {
            "ans": "(c) $c = 3.81, m = 0.693$, (d) $A = 45.0, k = 0.693$, (f) $11500\\text{ (thousands)}$",
            "feedback": "You took $c$ as the value of $\\ln N$ at $t = 2.0$. To find the vertical intercept $c$, you must subtract $mt$:\\begin{aligned} c &= 3.8067 - 0.6931(2.0) \\cr &= 2.42 \\end{aligned}"
        },
        {
            "ans": "(c) $c = 2.42, m = 0.693$, (d) $A = 11.3, k = 0.693$, (f) $1440\\text{ (thousands)}$",
            "feedback": "You calculated the population at $t = 7\\text{ hours}$ rather than $t = 8\\text{ hours}$. At $t = 8$, the population doubles again from $t = 7$, reaching $2880\\text{ thousands}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Doubling Time Shortcut",
        "content": "Notice that between $t = 2$ and $t = 5$, the population increased by a factor of $\\dfrac{360}{45} = 8 = 2^3$. This indicates that the population doubled 3 times in 3 hours, so the doubling time is exactly 1 hour. This confirms that $k = \\ln 2 \\approx 0.693$."
    }
},
{
    "id": "012149",
    "branch": "Pure",
    "board": "OCR MEI",
    "level": "AS",
    "major_area": "Exponentials and Logarithms",
    "topic": "Modelling with Logarithms",
    "subtopic": [
        "Exponential Decay",
        "Semi-Log Linearization",
        "Barometric Formula"
    ],
    "img": false,
    "question": "The atmospheric pressure, $P\\text{ kilopascals (kPa)}$, was measured at sea level and at high altitude on a mountain plateau at height $h\\text{ kilometres (km)}$, as shown in the table:<table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:6px; text-align:left;'>Quantity</th><th style='padding:6px;'>Sea Level</th><th style='padding:6px;'>Plateau</th></tr></thead><tbody><tr style='border-bottom:1px solid #ddd;'><td style='padding:6px; text-align:left;'>$h\\text{ (km)}$</td><td style='padding:6px;'>$0$</td><td style='padding:6px;'>$5.5$</td></tr><tr style='border-bottom:1px solid #ddd;'><td style='padding:6px; text-align:left;'>$P\\text{ (kPa)}$</td><td style='padding:6px;'>$101.3$</td><td style='padding:6px;'>$50.4$</td></tr><tr><td style='padding:6px; text-align:left;'>$\\ln P$</td><td style='padding:6px;'></td><td style='padding:6px;'></td></tr></tbody></table>Pressure is modelled by the formula $P = P_0 \\mathrm{e}^{-kh}$, where $P_0$ and $k$ are constants.<br><br><strong>(a)</strong> Express $\\ln P$ in the form $c - mh$, stating $c$ and $m$ in terms of $P_0$ and $k$.<br><br><strong>(b)</strong> Complete the table by calculating the values of $\\ln P$, giving each value correct to 4 significant figures.<br><br><strong>(c)</strong> State the value of $P_0$, and calculate the value of $k$ correct to 3 significant figures.<br><br><strong>(d)</strong> Rewrite the formula for $P$ in terms of $h$ using these numerical values.<br><br><strong>(e)</strong> Sketch the graph of $P$ against $h$ for $h \\ge 0$, clearly showing the intercept on the vertical axis.<br><br><strong>(f)</strong> A commercial passenger aircraft cruises at an altitude of $11.0\\text{ km}$. Use the model to estimate the atmospheric pressure outside the aircraft at this altitude.",
    "steps": [
        "<strong>(a) Linearising exponential decay:</strong><br><br>Taking natural logarithms of $P = P_0\\text{e}^{-kh}$:\\begin{aligned} \\ln P &= \\ln(P_0\\text{e}^{-kh}) \\cr &= \\ln P_0 - kh \\end{aligned}<br><br>In the form $\\ln P = c - mh$, $c = \\ln P_0$ and $m = k$.",
        "<strong>(b) Completing the table:</strong><br><br>For Sea Level ($P = 101.3$):\\begin{aligned} \\ln P &= \\ln(101.3) \\cr &\\approx 4.618 \\end{aligned}<br><br>For the Plateau ($P = 50.4$):\\begin{aligned} \\ln P &= \\ln(50.4) \\cr &\\approx 3.920 \\end{aligned}",
        "<strong>(c) Finding $P_0$ and $k$:</strong><br><br>At $h = 0$, $P = P_0$ directly:\\begin{aligned} P_0 = 101.3\\text{ kPa} \\end{aligned}<br><br>Finding the decay constant $k$:\\begin{aligned} -k &= \\dfrac{3.9199 - 4.6181}{5.5 - 0} \\cr -k &= \\dfrac{-0.6982}{5.5} \\cr -k &\\approx -0.1269 \\cr k &\\approx 0.127\\text{ km}^{-1}\\text{ (3 s.f.)} \\end{aligned}",
        "<strong>(d) Numerical formula:</strong><br><br>Substituting $P_0$ and $k$:\\begin{aligned} P = 101.3\\text{e}^{-0.127h} \\end{aligned}",
        "<strong>(e) Sketching the decay curve:</strong><br><br>The graph starts at vertical intercept $(0, 101.3)$ and decreases asymptotically towards the horizontal axis $P = 0$ as $h \\to \\infty$.<img src='images/Pure_pngs/012149_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "<strong>(f) Pressure at cruising altitude:</strong><br><br>At $h = 11.0\\text{ km}$:\\begin{aligned} P &= 101.3\\text{e}^{-0.1269(11.0)} \\cr &= 101.3\\text{e}^{-1.3959} \\cr &\\approx 25.1\\text{ kPa} \\end{aligned}",
        "Final Answer: (c) $P_0 = 101.3\\text{ kPa}, k = 0.127\\text{ km}^{-1}$, (d) $P = 101.3\\text{e}^{-0.127h}$, (f) $25.1\\text{ kPa}$"
    ],
    "pi_options": [
        {
            "ans": "(c) $P_0 = 101.3\\text{ kPa}, k = -0.127\\text{ km}^{-1}$, (d) $P = 101.3\\text{e}^{0.127h}$, (f) $409\\text{ kPa}$",
            "feedback": "You included a double negative in the decay formula. The gradient of the line is $-k = -0.127$, so the constant $k$ is positive ($0.127\\text{ km}^{-1}$), and the equation is $P = 101.3\\text{e}^{-0.127h}$."
        },
        {
            "ans": "(c) $P_0 = 4.62\\text{ kPa}, k = 0.127\\text{ km}^{-1}$, (d) $P = 4.62\\text{e}^{-0.127h}$, (f) $1.14\\text{ kPa}$",
            "feedback": "You used $\\ln P_0 = 4.618$ directly as $P_0$. The pressure at sea level is $P_0 = \\text{e}^{4.618} = 101.3\\text{ kPa}$."
        },
        {
            "ans": "(c) $P_0 = 101.3\\text{ kPa}, k = 0.127\\text{ km}^{-1}$, (d) $P = 101.3\\text{e}^{-0.127h}$, (f) $50.4\\text{ kPa}$",
            "feedback": "You evaluated the pressure at $5.5\\text{ km}$ instead of $11.0\\text{ km}$. At $11.0\\text{ km}$, the pressure is approximately $25.1\\text{ kPa}$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Power Law vs Exponential Decay",
        "content": "Pay careful attention to the horizontal variable in logarithmic modelling. When the original equation is $P = P_0\\text{e}^{-kh}$, taking logs yields $\\ln P = \\ln P_0 - kh$. Plotting $\\ln P$ against $h$ produces a straight line. If you mistakenly plot $\\ln P$ against $\\ln h$, you will not get a linear graph."
    }
},
{
    "id": "012150",
    "branch": "Pure",
    "board": "OCR MEI",
    "level": "AS",
    "major_area": "Exponentials and Logarithms",
    "topic": "Modelling with Logarithms",
    "subtopic": [
        "Allometric Scaling",
        "Fractional Power Law",
        "Log-Log Transformation"
    ],
    "img": false,
    "question": "In biology, Kleiber's law states that the basal metabolic rate, $B\\text{ watts}$, of a mammal is related to its body mass, $M\\text{ kilograms}$, by a power law of the form $B = k M^n$, where $k$ and $n$ are constants. Data for a rabbit and a horse are given in the table below:<table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:6px; text-align:left;'>Quantity</th><th style='padding:6px;'>Rabbit</th><th style='padding:6px;'>Horse</th></tr></thead><tbody><tr style='border-bottom:1px solid #ddd;'><td style='padding:6px; text-align:left;'>$M\\text{ (kg)}$</td><td style='padding:6px;'>$2.50$</td><td style='padding:6px;'>$450$</td></tr><tr style='border-bottom:1px solid #ddd;'><td style='padding:6px; text-align:left;'>$B\\text{ (W)}$</td><td style='padding:6px;'>$8.16$</td><td style='padding:6px;'>$405$</td></tr><tr style='border-bottom:1px solid #ddd;'><td style='padding:6px; text-align:left;'>$\\ln M$</td><td style='padding:6px;'></td><td style='padding:6px;'></td></tr><tr><td style='padding:6px; text-align:left;'>$\\ln B$</td><td style='padding:6px;'></td><td style='padding:6px;'></td></tr></tbody></table><strong>(a)</strong> Show that $\\ln B = a + b \\ln M$, stating $a$ and $b$ in terms of $k$ and $n$.<br><br><strong>(b)</strong> Complete the table by finding the values of $\\ln M$ and $\\ln B$, giving each value correct to 4 significant figures.<br><br><strong>(c)</strong> Use the completed table to calculate the values of $a$ and $b$, giving each correct to 3 significant figures.<br><br><strong>(d)</strong> Hence determine the value of $k$ correct to 3 significant figures, and show that $n \\approx 0.75$.<br><br><strong>(e)</strong> Sketch the graph of $B$ against $M$ for $M \\ge 0$.<br><br><strong>(f)</strong> Use the model $B = k M^{0.75}$ to estimate the basal metabolic rate of a human with a body mass of $81.0\\text{ kg}$.",
    "steps": [
        "<strong>(a) Linearising Kleiber's law:</strong><br><br>Taking natural logarithms of $B = kM^n$:\\begin{aligned} \\ln B &= \\ln(kM^n) \\cr &= \\ln k + n\\ln M \\end{aligned}<br><br>In the form $\\ln B = a + b\\ln M$, $a = \\ln k$ and $b = n$.",
        "<strong>(b) Completing the table:</strong><br><br>For the Rabbit ($M = 2.50$, $B = 8.16$):\\begin{aligned} \\ln M &= \\ln(2.50) \\cr &\\approx 0.9163 \\cr \\ln B &= \\ln(8.16) \\cr &\\approx 2.100 \\end{aligned}<br><br>For the Horse ($M = 450$, $B = 405$):\\begin{aligned} \\ln M &= \\ln(450) \\cr &\\approx 6.109 \\cr \\ln B &= \\ln(405) \\cr &\\approx 6.004 \\end{aligned}",
        "<strong>(c) Calculating $a$ and $b$:</strong><br><br>Gradient $b$:\\begin{aligned} b &= \\dfrac{6.0039 - 2.0992}{6.1092 - 0.9163} \\cr &= \\dfrac{3.9047}{5.1929} \\cr &\\approx 0.7519 \\cr &\\approx 0.752\\text{ (3 s.f.)} \\end{aligned}<br><br>Intercept $a$:\\begin{aligned} a &= \\ln B - b\\ln M \\cr &= 2.0992 - 0.7519(0.9163) \\cr &= 2.0992 - 0.6890 \\cr &\\approx 1.41\\text{ (3 s.f.)} \\end{aligned}",
        "<strong>(d) Determining $k$ and verifying $n$:</strong><br><br>Finding constant $k$:\\begin{aligned} k &= \\text{e}^a \\cr &= \\text{e}^{1.4102} \\cr &\\approx 4.097 \\cr &\\approx 4.10\\text{ (3 s.f.)} \\end{aligned}<br><br>Since $b = n$, $n = 0.752 \\approx 0.75 = \\dfrac{3}{4}$.",
        "<strong>(e) Sketching the power curve:</strong><br><br>Since the exponent $n = 0.75$ lies between $0$ and $1$, the graph of $B = 4.10M^{0.75}$ passes through the origin $(0, 0)$ and curves upwards with decreasing gradient (concave down).<img src='images/Pure_pngs/012150_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'></img>",
        "<strong>(f) Metabolic rate of human:</strong><br><br>Substituting $M = 81.0\\text{ kg}$ into $B = 4.097M^{0.75}$:\\begin{aligned} B &= 4.097(81.0)^{0.75} \\cr &= 4.097(\\sqrt[4]{81.0})^3 \\cr &= 4.097(3^3) \\cr &= 4.097(27) \\cr &\\approx 111\\text{ W} \\end{aligned}",
        "Final Answer: (c) $a = 1.41, b = 0.752$, (d) $k = 4.10$, (f) $111\\text{ W}$"
    ],
    "pi_options": [
        {
            "ans": "(c) $a = 1.41, b = 0.752$, (d) $k = 1.41$, (f) $38.1\\text{ W}$",
            "feedback": "You used the intercept $a = 1.41$ directly as $k$. In the linearized equation, $a = \\ln k$, so\\begin{aligned} k &= \\text{e}^{1.4102} \\cr &\\approx 4.10 \\end{aligned}"
        },
        {
            "ans": "(c) $a = 1.41, b = 1.33$, (d) $k = 4.10$, (f) $1410\\text{ W}$",
            "feedback": "You inverted the gradient formula as $\\Delta \\ln M / \\Delta \\ln B$. The gradient is\\begin{aligned} b &= \\dfrac{6.004 - 2.100}{6.109 - 0.9163} \\cr &\\approx 0.752 \\end{aligned}"
        },
        {
            "ans": "(c) $a = 1.41, b = 0.752$, (d) $k = 4.10$, (f) $332\\text{ W}$",
            "feedback": "You calculated $81.0 \\times 0.75 = 60.75$ instead of evaluating the power $81.0^{0.75}$. Notice that\\begin{aligned} 81.0^{0.75} &= (\\sqrt[4]{81})^3 \\cr &= 3^3 \\cr &= 27 \\end{aligned}giving $B = 4.10 \\times 27 \\approx 111\\text{ W}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Fractional Power Mental Maths",
        "content": "When evaluating terms like $81.0^{0.75}$, remember that $0.75 = \\dfrac{3}{4}$. Take the fourth root first before cubing: $(\\sqrt[4]{81})^3 = 3^3 = 27$. This avoids dealing with massive numbers and provides an instant check on your calculation."
    }
}
];