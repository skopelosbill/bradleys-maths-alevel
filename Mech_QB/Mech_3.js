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
            "feedback": "Incorrect acceleration for $Q$. You assumed particle $Q$ started from rest ($u_Q = 0$). With $u_Q = 3\\text{ m s}^{-1}$, $72 = 3(6) + 18a \\implies 18a = 54 \\implies a = 3\\text{ m s}^{-2}$."
        },
        {
            "ans": "(a) $6\\text{ s}, 18\\text{ m s}^{-1}$, (c) $108\\text{ m}$, (d) $5\\text{ m s}^{-2}$, (e) $15\\text{ m s}^{-1}$",
            "feedback": "Incorrect distance in part (c). Evaluating displacement requires subtracting the cubic term: $s_P(6) = 108 - \\frac{1}{6}(216) = 108 - 36 = 72\\text{ m}$, not $108\\text{ m}$."
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
}
];