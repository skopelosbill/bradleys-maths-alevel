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
},
{
  "id": "050206",
  "group_id": "050206",
  "branch": "Statistics",
  "board": "WJEC",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Statistical Hypothesis Testing",
  "subtopic": [
    "Binomial Test",
    "Critical Region and Type I Error"
  ],
  "img": false,
  "question": "A trainee archer can historically hit the bullseye on $20\\%$ of her attempts. After completing a specialised training course, she wishes to test whether her accuracy has improved. She takes a random sample of $12$ independent shots.<br><br><strong>(a)</strong><br><strong>(i)</strong> Write down suitable null and alternative hypotheses to test whether her accuracy has improved.<br><strong>(ii)</strong> State a suitable test statistic that she could use.<br><br><strong>(b)</strong> Using a $5\\%$ significance level, find the critical region for this test.<br><br><strong>(c)</strong><br><strong>(i)</strong> State the probability of a Type I error for this test.<br><strong>(ii)</strong> Explain what a Type I error means in this context.<br><br><strong>(d)</strong> In her test sample of $12$ shots, the archer hits the bullseye on $5$ occasions. What conclusion should she reach? Justify your answer.",
  "steps": [
    "<strong>(a) Hypotheses and Test Statistic:</strong><br><br>Let $p$ denote the probability that the archer hits the bullseye on any given attempt.\\begin{aligned} &H_0: p = 0.2 \\cr &H_1: p > 0.2 \\end{aligned}The test statistic is $X$, the number of successful bullseye hits achieved in $12$ attempts.",
    "<strong>(b) Critical Region:</strong><br><br>Under $H_0$, $X \\sim \\text{B}(12, 0.2)$.<br><br>Evaluating probabilities in the upper tail for a $5\\%$ test:\\begin{aligned} \\text{P}(X \\ge 5) &= 1 - \\text{P}(X \\le 4) \\cr &= 1 - 0.9274 \\cr &= 0.0726 \\end{aligned}\\begin{aligned} \\text{P}(X \\ge 6) &= 1 - \\text{P}(X \\le 5) \\cr &= 1 - 0.9806 \\cr &= 0.0194 \\end{aligned}Since $0.0194 \\le 0.05$ and $0.0726 > 0.05$, the critical region is $X \\ge 6$.",
    "<strong>(c) Type I Error:</strong><br><br><strong>(i) Probability:</strong> The probability of a Type I error equals the actual significance level:\\begin{aligned} \\text{P}(\\text{Type I Error}) &= \\text{P}(X \\ge 6 \\mid H_0) \\cr &= 0.0194 \\end{aligned}<strong>(ii) Contextual meaning:</strong> Concluding that the archer's accuracy has improved when in reality her underlying success probability has remained unchanged at $0.2$.",
    "<strong>(d) Test Conclusion:</strong><br><br>The observed test statistic is $x = 5$.<br><br>Since $5$ does not lie in the critical region ($5 < 6$), we fail to reject $H_0$.<br><br>There is insufficient evidence at the $5\\%$ significance level to suggest that the archer's accuracy has improved.",
    "Final Answer: (a)(i) $H_0: p = 0.2, H_1: p > 0.2$, (ii) Number of hits in $12$, (b) $X \\ge 6$, (c)(i) $0.0194$, (ii) Concluding improved when unchanged, (d) Insufficient evidence of improvement"
  ],
  "pi_options": [
    {
      "ans": "(a)(i) $H_0: p = 0.2, H_1: p > 0.2$, (ii) Number of hits in $12$, (b) $X \\ge 5$, (c)(i) $0.0726$, (ii) Concluding improved when unchanged, (d) Sufficient evidence of improvement",
      "feedback": "The critical region probability must strictly not exceed the nominal significance level ($0.05$). Because $\\text{P}(X \\ge 5) = 0.0726 > 0.05$, the boundary must be $X \\ge 6$."
    },
    {
      "ans": "(a)(i) $H_0: p = 0.2, H_1: p \\neq 0.2$, (ii) Number of hits in $12$, (b) $X \\ge 6$, (c)(i) $0.0194$, (ii) Concluding improved when unchanged, (d) Insufficient evidence of improvement",
      "feedback": "The question investigates whether accuracy has improved, requiring an upper one-tailed alternative hypothesis ($H_1: p > 0.2$) rather than a two-tailed test."
    },
    {
      "ans": "(a)(i) $H_0: p = 0.2, H_1: p > 0.2$, (ii) Number of hits in $12$, (b) $X \\ge 6$, (c)(i) $0.0194$, (ii) Concluding unchanged when improved, (d) Insufficient evidence of improvement",
      "feedback": "A Type I error is rejecting $H_0$ when $H_0$ is true (concluding an improvement occurred when skill remained unchanged)."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Actual vs Nominal Significance Level",
    "content": "For a discrete distribution like the Binomial, you cannot usually achieve an exact $5\\%$ tail. The nominal level is $5\\%$, but the critical region must contain probability $\\le 0.05$. The actual significance level (here $0.0194$) is the true probability of committing a Type I error."
  }
},
{
  "id": "050207",
  "group_id": "050206",
  "branch": "Statistics",
  "board": "WJEC",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Statistical Hypothesis Testing",
  "subtopic": [
    "Lower-Tail Test",
    "Actual Significance Level"
  ],
  "img": false,
  "question": "A manufacturing process historically produces defective micro-switches at a rate of $25\\%$. Following the installation of new precision tooling, a production engineer claims that the proportion of defective switches has decreased. A random sample of $16$ micro-switches is selected and tested.<br><br>Let $p$ denote the probability that a randomly chosen micro-switch is defective.<br><br><strong>(a)</strong> State the null and alternative hypotheses for this test.<br><br><strong>(b)</strong> Using a $5\\%$ significance level, determine the critical region for this test.<br><br><strong>(c)</strong> Calculate the actual significance level (the probability of a Type I error) of the test.<br><br><strong>(d)</strong> In the sample of $16$ switches, exactly $1$ switch is found to be defective. State the conclusion of the test in context.",
  "steps": [
    "<strong>(a) Hypotheses:</strong><br><br>Testing for a reduction in the defect rate:\\begin{aligned} &H_0: p = 0.25 \\cr &H_1: p < 0.25 \\end{aligned}",
    "<strong>(b) Critical Region:</strong><br><br>Under $H_0$, $X \\sim \\text{B}(16, 0.25)$.<br><br>Evaluating lower tail probabilities:\\begin{aligned} \\text{P}(X \\le 1) &= \\text{P}(X = 0) + \\text{P}(X = 1) \\cr &= 0.0100 + 0.0535 \\cr &= 0.0635 \\end{aligned}\\begin{aligned} \\text{P}(X = 0) &= (0.75)^{16} \\cr &= 0.0100 \\end{aligned}Since $0.0635 > 0.05$ and $0.0100 \\le 0.05$, the critical region is $X = 0$.",
    "<strong>(c) Actual Significance Level:</strong><br><br>The probability of rejecting $H_0$ given that $H_0$ is true is:\\begin{aligned} \\text{P}(X = 0 \\mid H_0) = 0.0100 \\end{aligned}The actual significance level is $0.0100$ (or $1.00\\%$).",
    "<strong>(d) Test Conclusion:</strong><br><br>The observed test statistic is $x = 1$.<br><br>Since $1$ is not in the critical region ($1 > 0$), we fail to reject $H_0$.<br><br>There is insufficient evidence at the $5\\%$ level to support the claim that the proportion of defective micro-switches has decreased.",
    "Final Answer: (a) $H_0: p = 0.25, H_1: p < 0.25$, (b) $X = 0$, (c) $0.0100$, (d) Insufficient evidence defect rate decreased"
  ],
  "pi_options": [
    {
      "ans": "(a) $H_0: p = 0.25, H_1: p < 0.25$, (b) $X \\le 1$, (c) $0.0635$, (d) Sufficient evidence defect rate decreased",
      "feedback": "Because $\\text{P}(X \\le 1) = 0.0635$ exceeds the $0.05$ significance threshold, the outcome $X = 1$ cannot be in the critical region."
    },
    {
      "ans": "(a) $H_0: p = 0.25, H_1: p > 0.25$, (b) $X = 0$, (c) $0.0100$, (d) Insufficient evidence defect rate decreased",
      "feedback": "The claim is that the defect rate has decreased, requiring a lower-tail alternative hypothesis ($H_1: p < 0.25$)."
    },
    {
      "ans": "(a) $H_0: p = 0.25, H_1: p < 0.25$, (b) $X = 0$, (c) $0.0500$, (d) Insufficient evidence defect rate decreased",
      "feedback": "The actual significance level is the exact probability of the critical region under $H_0$, which is $0.0100$, rather than the nominal $0.05$ target."
    }
  ],
  "bradley_insight": {
    "type": "caution",
    "title": "The Head Teacher's Eye: Strict Upper Limits on Tail Probabilities",
    "content": "In a discrete test, never choose a critical value whose cumulative probability exceeds the nominal significance level. Even though $0.0635$ is close to $0.05$, adopting $X \\le 1$ would inflate the Type I error rate beyond the agreed $5\\%$ risk."
  }
},
{
  "id": "050208",
  "group_id": "050206",
  "branch": "Statistics",
  "board": "WJEC",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Statistical Hypothesis Testing",
  "subtopic": [
    "Two-Tailed Binomial Test",
    "Critical Region"
  ],
  "img": false,
  "question": "A board game uses a four-sided spinner. A player suspects that the spinner is biased towards or against the colour blue, which should theoretically have a probability of $0.25$ of occurring on any spin.<br><br>To investigate this suspicion, the player spins the spinner $20$ times in independent trials.<br><br><strong>(a)</strong> State suitable hypotheses for a two-tailed test.<br><br><strong>(b)</strong> Using a $5\\%$ level of significance ($2.5\\%$ in each tail), find the critical region for this test.<br><br><strong>(c)</strong> Calculate the probability of a Type I error for this test.<br><br><strong>(d)</strong> The spinner lands on blue on $9$ of the $20$ spins. State the conclusion of the test in context.",
  "steps": [
    "<strong>(a) Hypotheses:</strong><br><br>Testing for any bias (two-tailed):\\begin{aligned} &H_0: p = 0.25 \\cr &H_1: p \\neq 0.25 \\end{aligned}",
    "<strong>(b) Critical Region:</strong><br><br>Under $H_0$, $X \\sim \\text{B}(20, 0.25)$. The target significance level is $0.025$ in each tail.<br><br>Lower tail:\\begin{aligned} \\text{P}(X \\le 1) &= 0.0243 \\cr \\text{P}(X \\le 2) &= 0.0913 \\end{aligned}Since $0.0243 \\le 0.025$ and $0.0913 > 0.025$, the lower critical region is $X \\le 1$.<br><br>Upper tail:\\begin{aligned} \\text{P}(X \\ge 9) &= 1 - \\text{P}(X \\le 8) \\cr &= 1 - 0.9591 \\cr &= 0.0409 \\end{aligned}\\begin{aligned} \\text{P}(X \\ge 10) &= 1 - \\text{P}(X \\le 9) \\cr &= 1 - 0.9861 \\cr &= 0.0139 \\end{aligned}Since $0.0139 \\le 0.025$ and $0.0409 > 0.025$, the upper critical region is $X \\ge 10$.<br><br>The critical region is $X \\le 1$ or $X \\ge 10$.",
    "<strong>(c) Probability of Type I Error:</strong><br><br>Summing the probabilities of both rejection tails:\\begin{aligned} \\text{P}(\\text{Type I Error}) &= \\text{P}(X \\le 1) + \\text{P}(X \\ge 10) \\cr &= 0.0243 + 0.0139 \\cr &= 0.0382 \\end{aligned}",
    "<strong>(d) Test Conclusion:</strong><br><br>The observed value is $x = 9$.<br><br>Since $9$ does not lie in either tail ($1 < 9 < 10$), we fail to reject $H_0$.<br><br>There is insufficient evidence at the $5\\%$ level to suggest that the spinner is biased.",
    "Final Answer: (a) $H_0: p = 0.25, H_1: p \\neq 0.25$, (b) $X \\le 1\\text{ or }X \\ge 10$, (c) $0.0382$, (d) Insufficient evidence of bias"
  ],
  "pi_options": [
    {
      "ans": "(a) $H_0: p = 0.25, H_1: p \\neq 0.25$, (b) $X \\le 1\\text{ or }X \\ge 9$, (c) $0.0652$, (d) Sufficient evidence of bias",
      "feedback": "Because $\\text{P}(X \\ge 9) = 0.0409$ exceeds the half-level target of $0.025$, the upper critical boundary must begin at $X = 10$."
    },
    {
      "ans": "(a) $H_0: p = 0.25, H_1: p > 0.25$, (b) $X \\le 1\\text{ or }X \\ge 10$, (c) $0.0382$, (d) Insufficient evidence of bias",
      "feedback": "The player suspects bias in either direction (towards or against blue), which requires a two-tailed alternative hypothesis ($H_1: p \\neq 0.25$)."
    },
    {
      "ans": "(a) $H_0: p = 0.25, H_1: p \\neq 0.25$, (b) $X \\le 1\\text{ or }X \\ge 10$, (c) $0.0500$, (d) Insufficient evidence of bias",
      "feedback": "The actual significance level is the sum of the two tail probabilities: $0.0243 + 0.0139 = 0.0382$, rather than the nominal $0.05$."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Splitting Two-Tailed Significance",
    "content": "For a two-tailed test at significance level $\\alpha$, evaluate each tail independently against $\\alpha / 2$. The total probability of a Type I error is then the sum of the actual probabilities in the two separate tails."
  }
},
{
  "id": "050209",
  "group_id": "050206",
  "branch": "Statistics",
  "board": "WJEC",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Statistical Hypothesis Testing",
  "subtopic": [
    "p-value Method",
    "Decision Errors"
  ],
  "img": false,
  "question": "A digital marketing team knows that their current promotional email has a baseline click-through rate of $12\\%$. They redesign the email layout and send it to a random sample of $30$ prospective subscribers to investigate whether the click-through rate has increased.<br><br>Let $X$ denote the number of subscribers in the sample who click the link.<br><br><strong>(a)</strong> State suitable hypotheses to test the marketing team's claim.<br><br><strong>(b)</strong> In the sample of $30$ subscribers, $7$ click the link.<br><strong>(i)</strong> Calculate the $p$-value corresponding to this result.<br><strong>(ii)</strong> Stating your conclusion in context, determine whether the team should adopt the new layout at the $5\\%$ significance level.<br><br><strong>(c)</strong> Explain what a Type I error would represent in this business context, and state whether a Type I error could have occurred based on your conclusion in part <strong>(b)(ii)</strong>.",
  "steps": [
    "<strong>(a) Hypotheses:</strong><br><br>Testing for an increase in the click-through rate:\\begin{aligned} &H_0: p = 0.12 \\cr &H_1: p > 0.12 \\end{aligned}",
    "<strong>(b)(i) Calculation of $p$-value:</strong><br><br>Under $H_0$, $X \\sim \\text{B}(30, 0.12)$.<br><br>The $p$-value is the probability of observing a result at least as extreme as $x = 7$:\\begin{aligned} p\\text{-value} &= \\text{P}(X \\ge 7) \\cr &= 1 - \\text{P}(X \\le 6) \\end{aligned}From the cumulative binomial distribution for $n = 30$ and $p = 0.12$:\\begin{aligned} \\text{P}(X \\le 6) = 0.9416 \\end{aligned}Evaluating the tail probability:\\begin{aligned} p\\text{-value} &= 1 - 0.9416 \\cr &= 0.0584 \\end{aligned}",
    "<strong>(b)(ii) Decision:</strong><br><br>Comparing the $p$-value to the $0.05$ significance level:\\begin{aligned} 0.0584 > 0.05 \\end{aligned}Since the $p$-value is greater than $0.05$, we fail to reject $H_0$.<br><br>There is insufficient evidence at the $5\\%$ level to show that the new layout improves the click-through rate. The team should not adopt the new layout.",
    "<strong>(c) Type I Error Analysis:</strong><br><br>A Type I error would occur if the team concluded that the new layout increased click-through rate when it actually had no effect.<br><br>Because the team did not reject $H_0$, a Type I error <strong>could not have occurred</strong> (only a Type II error was possible).",
    "Final Answer: (a) $H_0: p = 0.12, H_1: p > 0.12$, (b)(i) $0.0584$, (ii) Do not adopt new layout, (c) Adopting when unchanged; could not occur"
  ],
  "pi_options": [
    {
      "ans": "(a) $H_0: p = 0.12, H_1: p > 0.12$, (b)(i) $0.0584$, (ii) Adopt new layout, (c) Adopting when unchanged; could have occurred",
      "feedback": "Because the $p$-value ($0.0584$) is greater than $0.05$, we fail to reject $H_0$. Since $H_0$ was not rejected, a Type I error is impossible."
    },
    {
      "ans": "(a) $H_0: p = 0.12, H_1: p > 0.12$, (b)(i) $0.0218$, (ii) Adopt new layout, (c) Adopting when unchanged; could have occurred",
      "feedback": "Remember to evaluate $\\text{P}(X \\ge 7) = 1 - \\text{P}(X \\le 6)$. Subtracting $\\text{P}(X \\le 7)$ excludes the observed outcome $X = 7$."
    },
    {
      "ans": "(a) $H_0: p = 0.12, H_1: p \\neq 0.12$, (b)(i) $0.0584$, (ii) Do not adopt new layout, (c) Keeping old when improved; could not occur",
      "feedback": "The team specifically suspects an increase in click-through rate, which requires an upper one-tailed alternative hypothesis ($H_1: p > 0.12$)."
    }
  ],
  "bradley_insight": {
    "type": "deeper",
    "title": "The Head Teacher's Eye: Which Error Could Have Occurred?",
    "content": "A classic exam conceptual check asks: Which type of error could have been made? If you fail to reject $H_0$, you could only have made a Type II error (failing to detect a real change). A Type I error can only happen when $H_0$ is rejected."
  }
},
{
  "id": "050210",
  "group_id": "050206",
  "branch": "Statistics",
  "board": "WJEC",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Statistical Hypothesis Testing",
  "subtopic": [
    "Type I and Type II Errors",
    "Statistical Power"
  ],
  "img": false,
  "question": "A clinical diagnostic kit has a known sensitivity of $p = 0.70$ (it correctly detects an antibody in $70\\%$ of infected patients). A biotechnology laboratory develops an enhanced reagent and tests it on a random sample of $20$ verified patient blood samples to see if sensitivity has improved.<br><br>The test is conducted at the $5\\%$ significance level.<br><br><strong>(a)</strong> State suitable hypotheses for this test.<br><br><strong>(b)</strong> Find the critical region for the test.<br><br><strong>(c)</strong> Calculate the probability of a Type I error.<br><br><strong>(d)</strong> Given that the true sensitivity of the enhanced reagent has actually increased to $p = 0.90$, calculate the probability of a Type II error for this test. Give your answer correct to four decimal places.",
  "steps": [
    "<strong>(a) Hypotheses:</strong><br><br>Testing for an increase in sensitivity:\\begin{aligned} &H_0: p = 0.70 \\cr &H_1: p > 0.70 \\end{aligned}",
    "<strong>(b) Critical Region:</strong><br><br>Under $H_0$, $X \\sim \\text{B}(20, 0.70)$.<br><br>Evaluating upper tail probabilities for a $5\\%$ test:\\begin{aligned} \\text{P}(X \\ge 17) &= 1 - \\text{P}(X \\le 16) \\cr &= 1 - 0.8929 \\cr &= 0.1071 \\end{aligned}\\begin{aligned} \\text{P}(X \\ge 18) &= 1 - \\text{P}(X \\le 17) \\cr &= 1 - 0.9645 \\cr &= 0.0355 \\end{aligned}Since $0.0355 \\le 0.05$ and $0.1071 > 0.05$, the critical region is $X \\ge 18$.",
    "<strong>(c) Probability of Type I Error:</strong><br><br>The probability of rejecting $H_0$ when $H_0$ is true is:\\begin{aligned} \\text{P}(\\text{Type I Error}) &= \\text{P}(X \\ge 18 \\mid p = 0.70) \\cr &= 0.0355 \\end{aligned}",
    "<strong>(d) Probability of Type II Error:</strong><br><br>A Type II error occurs when we fail to reject $H_0$ even though $H_1$ is true ($p = 0.90$).<br><br>The non-rejection region is $X \\le 17$. Under the true distribution $X \\sim \\text{B}(20, 0.90)$:\\begin{aligned} \\text{P}(\\text{Type II Error}) &= \\text{P}(X \\le 17 \\mid p = 0.90) \\end{aligned}Let $Y = 20 - X \\sim \\text{B}(20, 0.10)$ denote failures:\\begin{aligned} \\text{P}(X \\le 17) &= \\text{P}(Y \\ge 3) \\cr &= 1 - \\text{P}(Y \\le 2) \\cr &= 1 - 0.6769 \\cr &= 0.3231 \\end{aligned}",
    "Final Answer: (a) $H_0: p = 0.70, H_1: p > 0.70$, (b) $X \\ge 18$, (c) $0.0355$, (d) $0.3231$"
  ],
  "pi_options": [
    {
      "ans": "(a) $H_0: p = 0.70, H_1: p > 0.70$, (b) $X \\ge 18$, (c) $0.0355$, (d) $0.6769$",
      "feedback": "The value $0.6769$ is the statistical power (the probability of rejecting $H_0$ when $p = 0.90$). The Type II error probability is $1 - 0.6769 = 0.3231$."
    },
    {
      "ans": "(a) $H_0: p = 0.70, H_1: p > 0.70$, (b) $X \\ge 17$, (c) $0.1071$, (d) $0.1330$",
      "feedback": "Because $\\text{P}(X \\ge 17) = 0.1071 > 0.05$, adopting $X \\ge 17$ exceeds the allowed significance level. The critical region must be $X \\ge 18$."
    },
    {
      "ans": "(a) $H_0: p = 0.70, H_1: p \\neq 0.70$, (b) $X \\ge 18$, (c) $0.0355$, (d) $0.3231$",
      "feedback": "The research specifically tests whether sensitivity has improved, requiring a one-tailed alternative hypothesis ($H_1: p > 0.70$)."
    }
  ],
  "bradley_insight": {
    "type": "deeper",
    "title": "The Head Teacher's Eye: The Balance Between Type I and Type II Errors",
    "content": "Type I error is the probability of false alarm ($H_0$ rejected when true). Type II error is the probability of missing an effect ($H_0$ accepted when false). Notice how statistical power is strictly $1 - \\text{P}(\\text{Type II Error}) = 1 - 0.3231 = 0.6769$."
  }
}
];