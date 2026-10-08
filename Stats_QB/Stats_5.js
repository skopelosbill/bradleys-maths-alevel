window.ALEVEL_QUESTIONS = [
{
  "id": "050201",
  "group_id": "050201",
  "branch": "Statistics",
  "board": "WJEC",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "The Poisson Distribution",
  "subtopic": [
    "Rate Scaling",
    "Poisson to Binomial Link"
  ],
  "img": false,
  "question": "An artisan manufacturer produces hand-glazed ceramic floor tiles, each of area $2.5\\text{ m}^2$. Surface blemishes on the tiles occur randomly and independently at a constant average rate of $0.6\\text{ per m}^2$.<br><br><strong>(a)</strong> Find the probability that a randomly chosen tile contains at most $2$ blemishes. Give your answer correct to four decimal places.<br><br><strong>(b)</strong> Find the probability that, in a random sample of $6$ tiles, exactly $4$ tiles will contain at most $2$ blemishes each. Give your answer correct to four decimal places.",
  "steps": [
    "<strong>(a) Probability for a Single Tile:</strong><br><br>First scaling the mean rate for a tile of area $2.5\\text{ m}^2$:\\begin{aligned} \\lambda &= 0.6 \\times 2.5 \\cr &= 1.5 \\end{aligned}Let $X$ denote the number of blemishes on a single tile, so $X \\sim \\text{Po}(1.5)$.<br><br>Evaluating the probability of at most $2$ blemishes:\\begin{aligned} &\\text{P}(X \\le 2) \\cr &\\quad = \\text{P}(X = 0) + \\text{P}(X = 1) \\cr &\\qquad + \\text{P}(X = 2) \\cr &\\quad = \\text{e}^{-1.5}\\left(1 + 1.5 + \\dfrac{1.5^2}{2}\\right) \\cr &\\quad = \\text{e}^{-1.5}(1 + 1.5 + 1.125) \\cr &\\quad = \\text{e}^{-1.5}(3.625) \\cr &\\quad = 0.8088 \\end{aligned}",
    "<strong>(b) Sample of $6$ Tiles:</strong><br><br>Let $Y$ denote the number of tiles out of $6$ that contain at most $2$ blemishes.<br><br>Since the tiles are independent, $Y$ follows a binomial distribution:\\begin{aligned} Y \\sim \\text{B}(6, 0.8088) \\end{aligned}Calculating the probability that exactly $4$ tiles meet this criterion:\\begin{aligned} \\text{P}(Y = 4) &= \\dbinom{6}{4}(0.8088)^4 \\cr &\\qquad \\times (0.1912)^2 \\cr &= 15(0.42788) \\cr &\\qquad \\times (0.03656) \\cr &= 0.2346 \\end{aligned}",
    "Final Answer: (a) $0.8088$, (b) $0.2346$"
  ],
  "pi_options": [
    {
      "ans": "(a) $0.8088$, (b) $0.0156$",
      "feedback": "Remember to include the binomial coefficient $\\dbinom{6}{4} = 15$. Multiplying only the powers gives the probability of a single ordered sequence."
    },
    {
      "ans": "(a) $0.5578$, (b) $0.2346$",
      "feedback": "Ensure you scale the rate by the area of the tile: multiplying $0.6$ by $2.5$ gives $\\lambda = 1.5$. Using $\\lambda = 0.6$ evaluates the probability for only $1\\text{ m}^2$."
    },
    {
      "ans": "(a) $0.8088$, (b) $0.3114$",
      "feedback": "Check the power of failure in the binomial formula. For $n = 6$ and $y = 4$, the power of $(1 - p)$ must be $6 - 4 = 2$, not $4$."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Two-Stage Modelling",
    "content": "This is a classic exam structure: stage one uses a Poisson distribution to evaluate the probability of an outcome on a single item, and stage two feeds that probability directly into a Binomial distribution to model a sample of items."
  }
},
{
  "id": "050202",
  "group_id": "050201",
  "branch": "Statistics",
  "board": "WJEC",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "The Poisson Distribution",
  "subtopic": [
    "Modelling Assumptions",
    "Rate Scaling"
  ],
  "img": false,
  "question": "Flaws in rolls of woven silk fabric occur at a constant average rate of $1.6\\text{ flaws per 10 metres}$.<br><br><strong>(a)</strong> State two assumptions necessary for the number of flaws in a length of fabric to be modelled by a Poisson distribution.<br><br><strong>(b)</strong> A standard roll has a length of $25\\text{ metres}$. Find the probability that a randomly chosen standard roll contains:<br><strong>(i)</strong> exactly $3$ flaws,<br><strong>(ii)</strong> at least $2$ flaws.<br><br><strong>(c)</strong> A tailor inspects $5$ independent $25\\text{ metre}$ rolls. Find the probability that none of these $5$ rolls contains more than $4$ flaws.",
  "steps": [
    "<strong>(a) Modelling Assumptions:</strong><br><br>Any two of the following conditions: <br><br>Flaws occur independently of one another. <br><br>Flaws occur at a constant average rate per unit length. <br><br>Flaws occur singly (cannot occur simultaneously at the exact same point).",
    "<strong>(b)(i) Exactly $3$ Flaws in $25\\text{ Metres}$:</strong><br><br>Scaling the mean rate for a $25\\text{ metre}$ roll:\\begin{aligned} \\lambda &= 1.6 \\times \\dfrac{25}{10} \\cr &= 4 \\end{aligned}Let $X$ denote the number of flaws in a $25\\text{ metre}$ roll, so $X \\sim \\text{Po}(4)$.<br><br>Evaluating $\\text{P}(X = 3)$:\\begin{aligned} \\text{P}(X = 3) &= \\dfrac{\\text{e}^{-4}(4^3)}{3!} \\cr &= \\dfrac{\\text{e}^{-4}(64)}{6} \\cr &= 0.1954 \\end{aligned}",
    "<strong>(b)(ii) At Least $2$ Flaws:</strong><br><br>Using the complement rule:\\begin{aligned} \\text{P}(X \\ge 2) &= 1 - \\text{P}(X \\le 1) \\cr &= 1 - [\\text{P}(X = 0)\\cr & + \\quad\\text{P}(X = 1)] \\cr &= 1 - \\text{e}^{-4}(1 + 4) \\cr &= 1 - 5\\text{e}^{-4} \\cr &= 1 - 0.09158 \\cr &= 0.9084 \\end{aligned}",
    "<strong>(c) Inspection of $5$ Independent Rolls:</strong><br><br>For a single roll, the condition of not more than $4$ flaws is $\\text{P}(X \\le 4)$.<br><br>From Poisson tables or calculation for $\\lambda = 4$:\\begin{aligned} \\text{P}(X \\le 4) = 0.6288 \\end{aligned}For all $5$ rolls to independently satisfy this condition:\\begin{aligned} \\text{P}(\\text{All } 5) &= (0.6288)^5 \\cr &= 0.0977 \\end{aligned}",
    "Final Answer: (a) Independent flaws and constant rate, (b)(i) $0.1954$, (ii) $0.9084$, (c) $0.0977$"
  ],
  "pi_options": [
    {
      "ans": "(a) Independent flaws and constant rate, (b)(i) $0.1954$, (ii) $0.7619$, (c) $0.0977$",
      "feedback": "For at least 2 flaws, the complement is at most 1. Subtracting $\\text{P}(X \\le 2)$ removes the outcome $X = 2$ from the desired probability."
    },
    {
      "ans": "(a) Independent flaws and constant rate, (b)(i) $0.1378$, (ii) $0.9084$, (c) $0.0977$",
      "feedback": "Remember to scale the rate to 25 metres: $1.6 \\times 2.5 = 4$. Using $\\lambda = 1.6$ evaluates the probability for only 10 metres of fabric."
    },
    {
      "ans": "(a) Fixed number of trials and two outcomes, (b)(i) $0.1954$, (ii) $0.9084$, (c) $0.0977$",
      "feedback": "A fixed number of trials and binary outcomes are conditions for a Binomial distribution, not a Poisson model."
    }
  ],
  "bradley_insight": {
    "type": "caution",
    "title": "The Head Teacher's Eye: Rate Scaling Proportionality",
    "content": "A defining property of the Poisson process is that the mean rate $\\lambda$ scales strictly in direct proportion to the size of the interval (length, area, or time). Always calculate the new rate $\\lambda$ before writing down probability formulas."
  }
},
{
  "id": "050203",
  "group_id": "050201",
  "branch": "Statistics",
  "board": "WJEC",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "The Poisson Distribution",
  "subtopic": [
    "Sum of Poisson Variables",
    "Time Scaling"
  ],
  "img": false,
  "question": "At an environmental research station, acoustic sensors monitor nocturnal bird calls from two species:<br>$\\bullet$ Calls from Species $A$ occur randomly at an average rate of $1.8\\text{ per hour}$.<br>$\\bullet$ Calls from Species $B$ occur randomly at an average rate of $2.2\\text{ per hour}$, independently of Species $A$.<br><br><strong>(a)</strong> State the distribution of the total number of bird calls recorded in a $2\\text{ hour}$ observation window.<br><br><strong>(b)</strong> Find the probability that exactly $7$ calls in total are recorded during a $2\\text{ hour}$ window.<br><br><strong>(c)</strong> Find the probability that more than $10$ calls in total are recorded during a $2\\text{ hour}$ window.",
  "steps": [
    "<strong>(a) Combined Distribution:</strong><br><br>The sum of two independent Poisson variables is also a Poisson variable whose mean rate is the sum of the individual rates.<br><br>For a $2\\text{ hour}$ window:\\begin{aligned} \\lambda_A &= 1.8 \\times 2 \\cr &= 3.6 \\end{aligned}\\begin{aligned} \\lambda_B &= 2.2 \\times 2 \\cr &= 4.4 \\end{aligned}Let $X$ denote the total number of calls in $2\\text{ hours}$:\\begin{aligned} \\lambda &= 3.6 + 4.4 \\cr &= 8 \\end{aligned}Hence:\\begin{aligned} X \\sim \\text{Po}(8) \\end{aligned}",
    "<strong>(b) Probability of Exactly $7$ Calls:</strong><br><br>Using $X \\sim \\text{Po}(8)$:\\begin{aligned} \\text{P}(X = 7) &= \\dfrac{\\text{e}^{-8}(8^7)}{7!} \\cr &= \\dfrac{\\text{e}^{-8}(2097152)}{5040} \\cr &= 0.1396 \\end{aligned}",
    "<strong>(c) Probability of More Than $10$ Calls:</strong><br><br>Using the complement rule:\\begin{aligned} \\text{P}(X > 10) &= 1 - \\text{P}(X \\le 10) \\end{aligned}From cumulative Poisson tables for $\\lambda = 8$:\\begin{aligned} \\text{P}(X \\le 10) = 0.8159 \\end{aligned}Evaluating the upper tail:\\begin{aligned} \\text{P}(X > 10) &= 1 - 0.8159 \\cr &= 0.1841 \\end{aligned}",
    "Final Answer: (a) $X \\sim \\text{Po}(8)$, (b) $0.1396$, (c) $0.1841$"
  ],
  "pi_options": [
    {
      "ans": "(a) $X \\sim \\text{Po}(4)$, (b) $0.0595$, (c) $0.0028$",
      "feedback": "Remember to scale the rates for a 2-hour window: multiplying the combined rate of 4.0 by 2 gives $\\lambda = 8$. Using $\\lambda = 4$ models only a single hour."
    },
    {
      "ans": "(a) $X \\sim \\text{Po}(8)$, (b) $0.1396$, (c) $0.2834$",
      "feedback": "Because the inequality is strict, $\\text{P}(X > 10)$ equals $1 - \\text{P}(X \\le 10)$. Subtracting $\\text{P}(X \\le 9)$ incorrectly includes 10 in the upper tail."
    },
    {
      "ans": "(a) $X \\sim \\text{Po}(8)$, (b) $0.0996$, (c) $0.1841$",
      "feedback": "Ensure you divide $8^7$ by $7! = 5040$. A factorial slip will distort the evaluated probability."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Additivity of Poisson Variables",
    "content": "If $X \\sim \\text{Po}(\\lambda_1)$ and $Y \\sim \\text{Po}(\\lambda_2)$ are independent, then their sum is strictly Poisson: $X + Y \\sim \\text{Po}(\\lambda_1 + \\lambda_2)$. This additive property holds exclusively when the processes are mutually independent."
  }
},
{
  "id": "050204",
  "group_id": "050201",
  "branch": "Statistics",
  "board": "WJEC",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "The Poisson Distribution",
  "subtopic": [
    "Parameter Determination",
    "Conditional Probability"
  ],
  "img": false,
  "question": "The discrete random variable $X$ follows a Poisson distribution with parameter $\\lambda$, where $\\lambda > 0$.<br><br><strong>(a)</strong> Given that$$\\text{P}(X = 2) = 3\\,\\text{P}(X = 3)$$show that $\\lambda = 1$.<br><br><strong>(b)</strong> Using $\\lambda = 1$, find $\\text{P}(X \\ge 1)$.<br><br><strong>(c)</strong> Find the conditional probability $\\text{P}(X = 1 \\mid X \\le 2)$, giving your answer in exact fractional form in terms of $\\text{e}$.",
  "steps": [
    "<strong>(a) Showing that $\\lambda = 1$:</strong><br><br>Writing the given condition using the Poisson formula:\\begin{aligned} &\\text{P}(X = 2) = 3\\,\\text{P}(X = 3) \\cr &\\dfrac{\\text{e}^{-\\lambda}\\lambda^2}{2!} = 3\\left(\\dfrac{\\text{e}^{-\\lambda}\\lambda^3}{3!}\\right) \\cr &\\dfrac{\\lambda^2}{2} = \\dfrac{3\\lambda^3}{6} \\cr &\\dfrac{\\lambda^2}{2} = \\dfrac{\\lambda^3}{2} \\cr &\\lambda^2 = \\lambda^3 \\end{aligned}Since $\\lambda > 0$, dividing both sides by $\\lambda^2$ gives:\\begin{aligned} \\lambda = 1 \\end{aligned}",
    "<strong>(b) Probability $\\text{P}(X \\ge 1)$:</strong><br><br>Using the complement rule with $\\lambda = 1$:\\begin{aligned} \\text{P}(X \\ge 1) &= 1 - \\text{P}(X = 0) \\cr &= 1 - \\text{e}^{-1} \\cr &= 1 - 0.3679 \\cr &= 0.6321 \\end{aligned}",
    "<strong>(c) Conditional Probability $\\text{P}(X = 1 \\mid X \\le 2)$:</strong><br><br>Using the definition of conditional probability:\\begin{aligned} &\\text{P}(X = 1 \\mid X \\le 2) \\cr &\\quad = \\dfrac{\\text{P}(X = 1)}{\\text{P}(X \\le 2)} \\end{aligned}Evaluating the individual probabilities in terms of $\\text{e}$:\\begin{aligned} \\text{P}(X = 1) &= \\dfrac{\\text{e}^{-1}(1^1)}{1!} \\cr &= \\text{e}^{-1} \\end{aligned}Evaluating the denominator:\\begin{aligned} &\\text{P}(X \\le 2) \\cr &\\quad = \\text{e}^{-1}\\left(1 + 1 + \\dfrac{1}{2}\\right) \\cr &\\quad = 2.5\\text{e}^{-1} \\end{aligned}Evaluating the ratio:\\begin{aligned} \\text{Ratio} &= \\dfrac{\\text{e}^{-1}}{2.5\\text{e}^{-1}} \\cr &= \\dfrac{1}{2.5} \\cr &= \\dfrac{2}{5} \\end{aligned}",
    "Final Answer: (a) $\\lambda = 1$, (b) $0.6321$, (c) $\\dfrac{2}{5}$"
  ],
  "pi_options": [
    {
      "ans": "(a) $\\lambda = 1$, (b) $0.6321$, (c) $\\dfrac{1}{2}$",
      "feedback": "Ensure you include the zero term in the denominator. The outcome $X = 0$ contributes $1\\text{e}^{-1}$, making the denominator $2.5\\text{e}^{-1}$ rather than $2\\text{e}^{-1}$."
    },
    {
      "ans": "(a) $\\lambda = 1$, (b) $0.3679$, (c) $\\dfrac{2}{5}$",
      "feedback": "The value $0.3679$ is $\\text{P}(X = 0)$. To find $\\text{P}(X \\ge 1)$, subtract this value from 1."
    },
    {
      "ans": "(a) $\\lambda = 1$, (b) $0.6321$, (c) $\\dfrac{4}{5}$",
      "feedback": "Check the evaluation of the ratio: dividing $\\text{e}^{-1}$ by $2.5\\text{e}^{-1}$ simplifies to $\\dfrac{1}{2.5} = \\dfrac{2}{5}$."
    }
  ],
  "bradley_insight": {
    "type": "deeper",
    "title": "The Head Teacher's Eye: Cancelling Powers and Factorials",
    "content": "In algebraic Poisson equations, the exponential factor $\\text{e}^{-\\lambda}$ never equals zero and cancels immediately from both sides. Dividing consecutive powers of $\\lambda$ simplifies the expression directly to a linear equation in $\\lambda$."
  }
},
{
  "id": "050205",
  "group_id": "050201",
  "branch": "Statistics",
  "board": "WJEC",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "The Poisson Distribution",
  "subtopic": [
    "Poisson Approximation",
    "Binomial Approximation"
  ],
  "img": false,
  "question": "A rare genetic trait occurs in $0.4\\%$ of a specific breed of sheep. A farmer has a flock of $600$ sheep.<br><br>Let $X$ denote the number of sheep in the flock that carry this genetic trait.<br><br><strong>(a)</strong> Explain why a Poisson distribution is a suitable model to approximate the distribution of $X$.<br><br><strong>(b)</strong> State the parameter $\\lambda$ of the approximating Poisson distribution.<br><br><strong>(c)</strong> Using the Poisson approximation, calculate the probability that:<br><strong>(i)</strong> exactly $3$ sheep in the flock carry the trait,<br><strong>(ii)</strong> between $2$ and $5$ sheep (inclusive) carry the trait.",
  "steps": [
    "<strong>(a) Justification of Poisson Approximation:</strong><br><br>The original distribution is binomial with $n = 600$ and $p = 0.004$.<br><br>The Poisson approximation is appropriate because:<br><br>The number of trials } $n$  is large $(n > 50)$.<br><br>The probability of success $p$ is small $(p < 0.1)$. <br><br>The product $np$ is moderate $(np < 10)$.",
    "<strong>(b) Parameter $\\lambda$:</strong><br><br>Setting the Poisson mean equal to the binomial mean:\\begin{aligned} \\lambda &= np \\cr &= 600 \\times 0.004 \\cr &= 2.4 \\end{aligned}",
    "<strong>(c)(i) Exactly $3$ Sheep Carrying the Trait:</strong><br><br>Using $X \\sim \\text{Po}(2.4)$:\\begin{aligned} \\text{P}(X = 3) &= \\dfrac{\\text{e}^{-2.4}(2.4^3)}{3!} \\cr &= \\dfrac{\\text{e}^{-2.4}(13.824)}{6} \\cr &= 0.2090 \\end{aligned}",
    "<strong>(c)(ii) Between $2$ and $5$ Sheep (Inclusive):</strong><br><br>Expressing the interval in terms of cumulative probabilities:\\begin{aligned} &\\text{P}(2 \\le X \\le 5) \\cr &\\quad = \\text{P}(X \\le 5) \\cr &\\qquad - \\text{P}(X \\le 1) \\end{aligned}Evaluating the lower cumulative term:\\begin{aligned} \\text{P}(X \\le 1) &= \\text{P}(X = 0) + \\text{P}(X = 1) \\cr &= \\text{e}^{-2.4}(1 + 2.4) \\cr &= 3.4\\text{e}^{-2.4} \\cr &= 0.3084 \\end{aligned}From Poisson cumulative tables for $\\lambda = 2.4$, $\\text{P}(X \\le 5) = 0.9643$:\\begin{aligned} &\\text{P}(2 \\le X \\le 5) \\cr &\\quad = 0.9643 - 0.3084 \\cr &\\quad = 0.6559 \\end{aligned}",
    "Final Answer: (a) Large $n$ and small $p$, (b) $\\lambda = 2.4$, (c)(i) $0.2090$, (ii) $0.6559$"
  ],
  "pi_options": [
    {
      "ans": "(a) Large $n$ and small $p$, (b) $\\lambda = 2.4$, (c)(i) $0.2090$, (ii) $0.4632$",
      "feedback": "To include $X = 2$, subtract $\\text{P}(X \\le 1)$. Subtracting $\\text{P}(X \\le 2)$ removes the outcome $X = 2$ from the probability interval."
    },
    {
      "ans": "(a) Large $n$ and small $p$, (b) $\\lambda = 24$, (c)(i) $0.0000$, (ii) $0.6559$",
      "feedback": "Convert the percentage correctly: $0.4\\% = 0.004$. Multiplying by 600 yields $\\lambda = 2.4$, rather than 24."
    },
    {
      "ans": "(a) Symmetric distribution with known variance, (b) $\\lambda = 2.4$, (c)(i) $0.2090$, (ii) $0.6559$",
      "feedback": "Symmetry with known variance describes conditions for a Normal approximation, not a Poisson approximation to a Binomial."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: When to Use Poisson Approximation",
    "content": "Remember the criteria for approximating $\\text{B}(n, p)$ by $\\text{Po}(\\lambda)$: $n$ must be large ($n > 50$) and $p$ must be small ($p < 0.1$), giving a manageable mean $\\lambda = np \\le 10$. If $np$ exceeds $10$, a Normal approximation is generally preferred."
  }
}
];