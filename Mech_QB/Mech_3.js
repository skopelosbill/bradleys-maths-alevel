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
            "feedback": "Incorrect resultant magnitude. Check your Pythagoras calculation: $R_A = \\sqrt{339.48^2 + 147^2} = \\sqrt{136857} \\approx 370\\text{ N}$, not $339.48 + 147$."
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
}
];