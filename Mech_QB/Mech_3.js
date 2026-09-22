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
}
];