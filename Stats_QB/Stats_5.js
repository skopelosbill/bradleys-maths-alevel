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
    "<strong>(c) Probability of Type I Error:</strong><br><br>Summing the probabilities of both rejection tails:\\begin{aligned} &\\text{P}(\\text{Type I Error}) \\cr & \\qquad= \\text{P}(X \\le 1) + \\text{P}(X \\ge 10) \\cr &\\qquad= 0.0243 + 0.0139 \\cr & \\qquad= 0.0382 \\end{aligned}",
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
    "<strong>(c) Probability of Type I Error:</strong><br><br>The probability of rejecting $H_0$ when $H_0$ is true is:\\begin{aligned} &\\text{P}(\\text{Type I Error})\\cr & \\qquad= \\text{P}(X \\ge 18 \\mid p = 0.70) \\cr & \\qquad= 0.0355 \\end{aligned}",
    "<strong>(d) Probability of Type II Error:</strong><br><br>A Type II error occurs when we fail to reject $H_0$ even though $H_1$ is true ($p = 0.90$).<br><br>The non-rejection region is $X \\le 17$. Under the true distribution $X \\sim \\text{B}(20, 0.90)$:\\begin{aligned} &\\text{P}(\\text{Type II Error})\\cr & \\qquad= \\text{P}(X \\le 17 \\mid p = 0.90) \\end{aligned}Let $Y = 20 - X \\sim \\text{B}(20, 0.10)$ denote failures:\\begin{aligned} \\text{P}(X \\le 17) &= \\text{P}(Y \\ge 3) \\cr &= 1 - \\text{P}(Y \\le 2) \\cr &= 1 - 0.6769 \\cr &= 0.3231 \\end{aligned}",
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
    "content": "Type I error is the probability of false alarm ($H_0$ rejected when true). Type II error is the probability of missing an effect ($H_0$ accepted when false). Notice how statistical power is strictly $$1 - \\text{P}(\\text{Type II Error})$$ $$= 1 - 0.3231$$ $$= 0.6769$$."
  }
},
{
  "id": "050211",
  "group_id": "050211",
  "branch": "Statistics",
  "board": "WJEC",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Linear Regression and Correlation",
  "subtopic": [
    "Scatter Diagrams",
    "Extrapolation and Reliability"
  ],
  "img": "images/Statistics_pngs/050211.png",
  "question": "A civil engineer conducts quality-control tests on concrete mixes. She investigates how the water-to-cement ratio, $x$ (measured as a percentage, $\\%$), affects the $28\\text{-day}$ compressive strength of the concrete, $y$ (measured in megapascals, $\\text{MPa}$).<br><br>The results of her test batches are shown in the scatter diagram below.<br><br><strong>(a)</strong> Describe the relationship between compressive strength and water-to-cement ratio shown in the diagram.<br><br><strong>(b)</strong> The equation of the regression line of $y$ on $x$ for these data is$$y = 86.0 - 0.95x$$<strong>(i)</strong> Interpret the gradient and the vertical intercept of the regression line in this context.<br><strong>(ii)</strong> Estimate the compressive strength of concrete when the water-to-cement ratio is $18\\%$. Comment on the reliability of this estimate.",
  "steps": [
    "<strong>(a) Description of Relationship:</strong><br><br>The scatter diagram shows a <strong>strong negative linear correlation</strong> (as the water-to-cement ratio increases, the compressive strength decreases).",
    "<strong>(b)(i) Interpretation of Gradient and Intercept:</strong><br><br><strong>Gradient ($-0.95$):</strong> For every $1\\%$ increase in the water-to-cement ratio, the $28\\text{-day}$ compressive strength is estimated to decrease by $0.95\\text{ MPa}$.<br><br><strong>Vertical Intercept ($86.0$):</strong> The theoretical compressive strength of concrete with a water-to-cement ratio of $0\\%$ is $86.0\\text{ MPa}$ (though this is physically unrealistic as concrete requires water to hydrate and set).",
    "<strong>(b)(ii) Estimation and Reliability:</strong><br><br>Substituting $x = 18$ into the regression equation:\\begin{aligned} y &= 86.0 - 0.95(18) \\cr &= 86.0 - 17.1 \\cr &= 68.9\\text{ MPa} \\end{aligned}<strong>Reliability:</strong> This estimate is <strong>unreliable</strong> because $x = 18\\%$ lies well outside the range of the experimental data ($36.5\\%$ to $67.5\\%$)—making this an <strong>extrapolation</strong>.",
    "Final Answer: (a) Strong negative linear correlation, (b)(i) $-0.95\\text{ MPa per }1\\%$ and $86.0\\text{ MPa}$ at $0\\%$, (ii) $68.9\\text{ MPa}$, unreliable extrapolation"
  ],
  "pi_options": [
    {
      "ans": "(a) Strong negative linear correlation, (b)(i) $-0.95\\text{ MPa per }1\\%$ and $86.0\\text{ MPa}$ at $0\\%$, (ii) $68.9\\text{ MPa}$, reliable interpolation",
      "feedback": "Because $x = 18\\%$ lies far below the lowest observed water-to-cement ratio of $36.5\\%$, this prediction is an extrapolation and is statistically unreliable."
    },
    {
      "ans": "(a) Strong negative linear correlation, (b)(i) $+0.95\\text{ MPa per }1\\%$ and $86.0\\text{ MPa}$ at $0\\%$, (ii) $103.1\\text{ MPa}$, unreliable extrapolation",
      "feedback": "The gradient is negative ($-0.95$), meaning compressive strength decreases as water content increases. Adding $0.95(18)$ inverts the physical relationship."
    },
    {
      "ans": "(a) Weak positive linear correlation, (b)(i) $-0.95\\text{ MPa per }1\\%$ and $86.0\\text{ MPa}$ at $0\\%$, (ii) $68.9\\text{ MPa}$, unreliable extrapolation",
      "feedback": "The points in the scatter diagram slope downwards from top-left to bottom-right, demonstrating negative correlation rather than positive."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Interpreting Contextual Gradients",
    "content": "When asked to interpret the gradient of a regression line $y = a + bx$, always state three components: the direction of change (increase or decrease), the numerical amount ($b$), and the specific contextual units for both variables ($y\\text{ per unit }x$)."
  }
},
{
  "id": "050212",
  "group_id": "050211",
  "branch": "Statistics",
  "board": "WJEC",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Linear Regression and Correlation",
  "subtopic": [
    "Interpreting Coefficients",
    "Interpolation"
  ],
  "img": "images/Statistics_pngs/050212.png",
  "question": "An automotive engineer evaluates a diesel engine on a dynamometer. He measures the engine torque output, $x$ (in $\\text{N}\\cdot\\text{m}$), and the corresponding fuel flow rate, $y$ (in litres per hour, $\\text{L/h}$).<br><br>The scatter diagram shows his test results along with the fitted line of best fit.<br><br>The equation of the regression line of $y$ on $x$ is$$y = 2.5 + 0.07x$$<strong>(a)</strong> State the type of correlation shown in the diagram.<br><br><strong>(b)</strong> Give an interpretation in context for:<br><strong>(i)</strong> the gradient value of $0.07$,<br><strong>(ii)</strong> the intercept value of $2.5$.<br><br><strong>(c)</strong> Estimate the fuel flow rate when the engine torque is $210\\,\\text{N}\\cdot\\text{m}$. Comment on the reliability of this estimate.",
  "steps": [
    "<strong>(a) Correlation:</strong><br><br>The scatter diagram shows a <strong>strong positive linear correlation</strong> (as engine torque increases, fuel flow rate increases).",
    "<strong>(b)(i) Gradient ($0.07$):</strong><br><br>For each $1\\text{ N}\\cdot\\text{m}$ increase in engine torque output, the fuel flow rate is estimated to increase by $0.07\\text{ L/h}$.",
    "<strong>(b)(ii) Intercept ($2.5$):</strong><br><br>When the engine produces zero torque (for example, while idling), the baseline fuel flow rate is estimated to be $2.5\\text{ L/h}$.",
    "<strong>(c) Estimation and Reliability:</strong><br><br>Substituting $x = 210$ into the regression equation:\\begin{aligned} y &= 2.5 + 0.07(210) \\cr &= 2.5 + 14.7 \\cr &= 17.2\\text{ L/h} \\end{aligned}<strong>Reliability:</strong> This estimate is <strong>reliable</strong> because $x = 210\\,\\text{N}\\cdot\\text{m}$ lies comfortably within the range of the observed test data ($110$ to $290\\,\\text{N}\\cdot\\text{m}$)—making this an <strong>interpolation</strong>.",
    "Final Answer: (a) Positive linear correlation, (b)(i) $0.07\\text{ L/h per N}\\cdot\\text{m}$, (ii) Idle rate $2.5\\text{ L/h}$, (c) $17.2\\text{ L/h}$, reliable interpolation"
  ],
  "pi_options": [
    {
      "ans": "(a) Positive linear correlation, (b)(i) $0.07\\text{ L/h per N}\\cdot\\text{m}$, (ii) Idle rate $2.5\\text{ L/h}$, (c) $17.2\\text{ L/h}$, unreliable extrapolation",
      "feedback": "Because $x = 210\\,\\text{N}\\cdot\\text{m}$ lies within the range of measured torque values ($110$ to $290\\,\\text{N}\\cdot\\text{m}$), this is interpolation, making the estimate reliable."
    },
    {
      "ans": "(a) Positive linear correlation, (b)(i) $2.5\\text{ L/h per N}\\cdot\\text{m}$, (ii) Idle rate $0.07\\text{ L/h}$, (c) $17.2\\text{ L/h}$, reliable interpolation",
      "feedback": "The gradient is $0.07$ (the coefficient of $x$), while $2.5$ is the constant vertical intercept. Do not confuse the gradient with the intercept."
    },
    {
      "ans": "(a) Negative linear correlation, (b)(i) $0.07\\text{ L/h per N}\\cdot\\text{m}$, (ii) Idle rate $2.5\\text{ L/h}$, (c) $17.2\\text{ L/h}$, reliable interpolation",
      "feedback": "The slope of the line is positive and points rise from left to right, indicating positive correlation."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Interpolation vs Extrapolation",
    "content": "Estimating within the domain of the explanatory variable is interpolation and is generally reliable. Estimating outside that domain is extrapolation and carries substantial risk because the linear trend may not continue."
  }
},
{
  "id": "050213",
  "group_id": "050211",
  "branch": "Statistics",
  "board": "WJEC",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Linear Regression and Correlation",
  "subtopic": [
    "Influential Outliers",
    "Extrapolation"
  ],
  "img": "images/Statistics_pngs/050213.png",
  "question": "A battery technology company monitors the degradation of lithium-ion cells. For a sample of cells, engineers record the number of complete discharge cycles, $x$ (measured in hundreds of cycles), and the internal electrical resistance, $y$ (in milliohms, $\\text{m}\\Omega$).<br><br>The results are plotted in the scatter diagram below. One anomalous cell is identified and labelled as Point $Q$ at $(8.5, 18)$.<br><br><strong>(a)</strong> Describe the correlation shown by the main cluster of cells (excluding Point $Q$).<br><br><strong>(b)</strong> Point $Q$ was found to have a faulty internal sensor that under-reported resistance. State the effect that removing Point $Q$ from the dataset would have on:<br><strong>(i)</strong> the product moment correlation coefficient $r$,<br><strong>(ii)</strong> the gradient of the regression line of $y$ on $x$.<br><br><strong>(c)</strong> The equation of the regression line calculated using all data points is$$y = 11.2 + 3.9x$$Explain why it is not appropriate to use this equation to predict the internal resistance of a cell after $1500$ discharge cycles ($x = 15$).",
  "steps": [
    "<strong>(a) Correlation of Main Cluster:</strong><br><br>The main cluster exhibits a <strong>strong positive linear correlation</strong> (as discharge cycles increase, internal resistance increases).",
    "<strong>(b)(i) Effect on Correlation Coefficient $r$:</strong><br><br>Point $Q$ at $(8.5, 18)$ lies well below the positive linear trend established by the other cells.<br><br>Removing Point $Q$ reduces residual scatter around the line, so $r$ will <strong>increase</strong> (become closer to $+1$).",
    "<strong>(b)(ii) Effect on Regression Gradient:</strong><br><br>Point $Q$ is located at a high $x$-value ($8.5$) and a low $y$-value ($18$), exerting downward leverage on the right-hand end of the regression line.<br><br>Removing Point $Q$ will allow the line to tilt steeper, meaning the gradient will <strong>increase</strong>.",
    "<strong>(c) Inappropriateness of Prediction at $x = 15$:</strong><br><br>The observed data only extend up to approximately $x = 9.2$ ($920$ cycles).<br><br>Predicting at $x = 15$ ($1500$ cycles) is an <strong>extrapolation</strong> beyond the experimental domain. The linear degradation rate may alter or the battery may fail entirely, making the estimate unreliable.",
    "Final Answer: (a) Strong positive linear correlation, (b)(i) Increases, (ii) Increases, (c) Unreliable due to extrapolation"
  ],
  "pi_options": [
    {
      "ans": "(a) Strong positive linear correlation, (b)(i) Decreases, (ii) Increases, (c) Unreliable due to extrapolation",
      "feedback": "Because Point $Q$ contradicts the strong positive linear trend, removing it reduces unexplained variation, which increases $r$ towards $+1$."
    },
    {
      "ans": "(a) Strong positive linear correlation, (b)(i) Increases, (ii) Decreases, (c) Unreliable due to extrapolation",
      "feedback": "Point $Q$ pulls the right-hand end of the line downwards. Removing it allows the line to rotate upwards, increasing the gradient."
    },
    {
      "ans": "(a) Weak negative linear correlation, (b)(i) Increases, (ii) Increases, (c) Reliable because regression equation is known",
      "feedback": "The main cluster clearly rises from left to right, showing positive correlation. Predictions beyond $x = 9.2$ are extrapolations regardless of the equation."
    }
  ],
  "bradley_insight": {
    "type": "deeper",
    "title": "The Head Teacher's Eye: High-Leverage Outliers",
    "content": "An outlier near the extremes of the horizontal axis acts like a weight on a seesaw, exerting high leverage on both the slope and the correlation coefficient. Removing an outlier below the line at high $x$ pulls the gradient up and tightens the fit."
  }
},
{
  "id": "050214",
  "group_id": "050211",
  "branch": "Statistics",
  "board": "WJEC",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Linear Regression and Correlation",
  "subtopic": [
    "Least Squares Principles",
    "Residuals"
  ],
  "img": "images/Statistics_pngs/050214.png",
  "question": "An education researcher investigates the relationship between weekly study time, $x$ (in hours), and performance in a modular test, $y$ (scored as a percentage, $\\%$).<br><br>The scatter diagram shows the data for $10$ students. The line of best fit of $y$ on $x$ is plotted, with vertical dashed lines indicating the residual deviations for three selected students.<br><br>The equation of the regression line of $y$ on $x$ is$$y = 26 + 2x$$<strong>(a)</strong> Explain why the method of least squares minimizes the sum of squares of the <em>vertical</em> deviations rather than the <em>horizontal</em> deviations.<br><br><strong>(b)</strong> A student achieves a score of $80\\%$ in the test. Explain why it is statistically inappropriate to rearrange the equation $y = 26 + 2x$ to estimate this student's weekly study time.<br><br><strong>(c)</strong> Calculate the residual for the student who studied for $12\\text{ hours}$ and scored $58\\%$.",
  "steps": [
    "<strong>(a) Vertical Deviations in Least Squares:</strong><br><br>In the regression model of $y$ on $x$, $y$ is the <strong>dependent (response) variable</strong> and $x$ is the <strong>independent (explanatory) variable</strong>.<br><br>The model assumes that values of $x$ are known or measured with minimal error, while random variation occurs in $y$. Therefore, the line is chosen to minimize the sum of squared vertical errors in the predicted response $y$.",
    "<strong>(b) Inappropriateness of Rearranging the Equation:</strong><br><br>The regression line of $y$ on $x$ is calculated specifically to minimize vertical errors for predicting $y$ from $x$.<br><br>Rearranging this equation does not minimize horizontal errors. To predict $x$ given $y$, a separate regression line of <strong>$x$ on $y$</strong> must be calculated.",
    "<strong>(c) Calculating the Residual:</strong><br><br>For $x = 12\\text{ hours}$, the predicted test score $\\hat{y}$ is:\\begin{aligned} \\hat{y} &= 26 + 2(12) \\cr &= 26 + 24 \\cr &= 50 \\end{aligned}The residual is the actual value minus the predicted value:\\begin{aligned} \\text{Residual} &= y - \\hat{y} \\cr &= 58 - 50 \\cr &= +8 \\end{aligned}",
    "Final Answer: (a) $y$ is response variable containing error, (b) Requires regression of $x$ on $y$, (c) $+8$"
  ],
  "pi_options": [
    {
      "ans": "(a) $x$ is response variable containing error, (b) Requires regression of $x$ on $y$, (c) $+8$",
      "feedback": "The response variable plotted on the vertical axis is $y$ (the test score), not $x$. Least squares minimizes vertical errors in the response variable."
    },
    {
      "ans": "(a) $y$ is response variable containing error, (b) Valid to rearrange the equation, (c) $+8$",
      "feedback": "Rearranging the regression line of $y$ on $x$ to predict $x$ produces biased estimates because it minimizes vertical deviations rather than horizontal deviations."
    },
    {
      "ans": "(a) $y$ is response variable containing error, (b) Requires regression of $x$ on $y$, (c) $-8$",
      "feedback": "Residual is defined as $\\text{Actual } y - \\text{Predicted } \\hat{y}$. Because $58 - 50 = +8$, the point lies above the line, giving a positive residual."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Residual Sign Convention",
    "content": "Always remember the order: $\\text{Residual} = y - \\hat{y}$ (Actual minus Predicted). A point lying above the regression line has a positive residual, while a point below the line has a negative residual."
  }
},
{
  "id": "050215",
  "group_id": "050211",
  "branch": "Statistics",
  "board": "WJEC",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Linear Regression and Correlation",
  "subtopic": [
    "Evaluating Linear Models",
    "Non-Linear Relationships"
  ],
  "img": "images/Statistics_pngs/050215.png",
  "question": "A transport safety agency records the stopping distance, $y$ (in metres), of a test vehicle travelling at various speeds, $x$ (in miles per hour, $\\text{mph}$).<br><br>A technician fits a linear regression line to the data:$$y = 1.74x - 26.3$$The data points and the fitted regression line are displayed in the scatter diagram below.<br><br><strong>(a)</strong> With reference to the distribution of points relative to the line in the diagram, explain why a linear regression model is not suitable for these data.<br><br><strong>(b)</strong> Using the technician's equation, estimate the stopping distance of a vehicle travelling at $15\\text{ mph}$. Explain what this result demonstrates regarding the validity of the linear model.<br><br><strong>(c)</strong> Based on physical principles (such as kinetic energy), suggest a more appropriate mathematical relationship between stopping distance $y$ and vehicle speed $x$.",
  "steps": [
    "<strong>(a) Unsuitability of Linear Model:</strong><br><br>The points form a distinct curved (non-linear) pattern rather than a straight line.<br><br>The data points lie above the line at both ends and below the line in the middle, indicating a systematic pattern in the residuals that violates the assumption of linearity.",
    "<strong>(b) Estimate at $15\\text{ mph}$ and Model Validity:</strong><br><br>Substituting $x = 15$ into the linear equation:\\begin{aligned} y &= 1.74(15) - 26.3 \\cr &= 26.1 - 26.3 \\cr &= -0.2\\text{ m} \\end{aligned}A negative stopping distance is physically impossible, which demonstrates that the linear model breaks down and is invalid at low speeds.",
    "<strong>(c) Appropriate Physical Model:</strong><br><br>Because kinetic energy is proportional to the square of velocity, the work required to stop a vehicle scales with $v^2$.<br><br>A <strong>quadratic model</strong> of the form $y = ax^2 + bx + c$ (or $y = kx^2$) would be much more appropriate.",
    "Final Answer: (a) Distinct curved pattern in residuals, (b) $-0.2\\text{ m}$, physically impossible distance, (c) Quadratic model $y = ax^2 + bx + c$"
  ],
  "pi_options": [
    {
      "ans": "(a) Points are randomly scattered around line, (b) $-0.2\\text{ m}$, physically impossible distance, (c) Quadratic model $y = ax^2 + bx + c$",
      "feedback": "The points are not randomly scattered; they follow a clear upward curve, which demonstrates that the linear assumption is incorrect."
    },
    {
      "ans": "(a) Distinct curved pattern in residuals, (b) $+0.2\\text{ m}$, acceptable prediction, (c) Quadratic model $y = ax^2 + bx + c$",
      "feedback": "Evaluating: \\begin{aligned}1.74(15) - 26.3 &= 26.1 - 26.3\\cr & = -0.2\\text{ m}\\end{aligned} A negative stopping distance is impossible in reality."
    },
    {
      "ans": "(a) Distinct curved pattern in residuals, (b) $-0.2\\text{ m}$, physically impossible distance, (c) Exponential model $y = a\\text{e}^{bx}$",
      "feedback": "Stopping distance physically relates to kinetic energy $\\frac{1}{2}mv^2$, which indicates a quadratic relationship with velocity squared rather than exponential growth."
    }
  ],
  "bradley_insight": {
    "type": "deeper",
    "title": "The Head Teacher's Eye: Residual Patterns Indicate Model Form",
    "content": "A good linear fit produces residuals that are randomly scattered above and below the line. If residuals show a U-shape (positive at ends, negative in the middle), it is definitive visual proof that the underlying relationship is non-linear."
  }
},
{
  "id": "050216",
  "group_id": "050216",
  "branch": "Statistics",
  "board": "WJEC",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Measures of Location, Spread, and Box Plots",
  "subtopic": [
    "Outlier Boundaries",
    "Comparing Distributions"
  ],
  "img": "images/Statistics_pngs/050216.png",
  "question": "Rowan investigates the hourly fees charged by private driving instructors in County A. He collects a random sample of hourly rates, in pounds (£), and computes the following summary statistics:$$\\begin{aligned} &\\text{Min.} &&: 22.0 \\cr &\\text{1st Qu.} &&: 28.0 \\cr &\\text{Median} &&: 31.0 \\cr &\\text{Mean} &&: 33.5 \\cr &\\text{3rd Qu.} &&: 36.0 \\cr &\\text{Max.} &&: 58.0 \\end{aligned}$$<strong>(a)</strong> Showing all calculations, comment on any outliers for the hourly fees in Rowan's sample.<br><br><strong>(b)</strong> Describe the skewness of the data and explain what it means in this context.<br><br>Cerys also investigates driving instructor fees. She collects an independent random sample of hourly fees in County B and produces the box plot shown in the diagram below.<br><br><strong>(c)</strong><br><strong>(i)</strong> What will happen to the mean of Cerys's sample if the outlier is removed?<br><strong>(ii)</strong> What will happen to the median of Cerys's sample if the outlier is removed?<br><br><strong>(d)</strong> Compare and contrast the distributions of driving instructor hourly fees for Cerys's sample and Rowan's sample.",
  "steps": [
    "<strong>(a) Outlier Calculations for Rowan's Sample:</strong><br><br>Finding the interquartile range:\\begin{aligned} \\text{IQR} &= Q_3 - Q_1 \\cr &= 36.0 - 28.0 \\cr &= 8.0 \\end{aligned}Calculating the outlier boundaries:\\begin{aligned} \\text{Lower} &= Q_1 - 1.5(\\text{IQR}) \\cr &= 28.0 - 1.5(8.0) \\cr &= 28.0 - 12.0 \\cr &= 16.0 \\end{aligned}\\begin{aligned} \\text{Upper} &= Q_3 + 1.5(\\text{IQR}) \\cr &= 36.0 + 1.5(8.0) \\cr &= 36.0 + 12.0 \\cr &= 48.0 \\end{aligned}Since the minimum fee ($£22.0$) is greater than $16.0$, there are no lower outliers.<br><br>Since the maximum fee ($£58.0$) is greater than $48.0$, there is at least one outlier at the upper end.",
    "<strong>(b) Skewness of Rowan's Data:</strong><br><br>The mean ($£33.5$) is greater than the median ($£31.0$), and $Q_3 - Q_2 = 5.0$ is greater than $Q_2 - Q_1 = 3.0$.<br><br>This indicates <strong>positive skewness</strong>.<br><br>In context, this means that most driving instructors charge between $£28$ and $£36$, while a small number of instructors charge substantially higher fees.",
    "<strong>(c) Effect of Removing Outlier in Cerys's Sample:</strong><br><br><strong>(i) Mean:</strong> Removing the extreme high outlier at $£55$ will cause the mean to <strong>decrease</strong>.<br><br><strong>(ii) Median:</strong> Because the median is resistant to extreme values, it will <strong>stay the same</strong> (or change very little).",
    "<strong>(d) Comparing Distributions:</strong><br><br><strong>Location:</strong> The median fee in County A ($£31.0$) is higher than in County B ($£29.0$).<br><br><strong>Spread:</strong> The interquartile range in County B ($34 - 25 = 9.0$) is slightly higher than in County A ($8.0$), indicating slightly more varied fees in County B.<br><br><strong>Shape:</strong> Both distributions exhibit positive skewness with high outliers.",
    "Final Answer: (a) Outlier at $£58.0$, (b) Positive skew; majority lower with few high fees, (c)(i) Decreases, (ii) Little to no change, (d) County A has higher median, County B has higher IQR"
  ],
  "pi_options": [
    {
      "ans": "(a) Outlier at $£58.0$, (b) Positive skew; majority lower with few high fees, (c)(i) Increases, (ii) Decreases, (d) County A has higher median, County B has higher IQR",
      "feedback": "Removing an extremely high outlier removes a large value from the total sum, which causes the mean to decrease, while the median remains resistant."
    },
    {
      "ans": "(a) No outliers present, (b) Positive skew; majority lower with few high fees, (c)(i) Decreases, (ii) Little to no change, (d) County A has higher median, County B has higher IQR",
      "feedback": "The upper boundary is $Q_3 + 1.5(\\text{IQR}) = 36.0 + 12.0 = 48.0$. Because the maximum value of $58.0$ exceeds $48.0$, it is an outlier."
    },
    {
      "ans": "(a) Outlier at $£58.0$, (b) Negative skew; majority higher with few low fees, (c)(i) Decreases, (ii) Little to no change, (d) County A has higher median, County B has higher IQR",
      "feedback": "Because the mean ($33.5$) is greater than the median ($31.0$), the tail extends towards higher values, which indicates positive skewness."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Comparing Summary Distributions",
    "content": "When comparing two distributions from summary data, always provide context and state three specific elements: a measure of central tendency (median), a measure of dispersion (IQR), and the presence of skewness or outliers."
  }
},
{
  "id": "050217",
  "group_id": "050216",
  "branch": "Statistics",
  "board": "WJEC",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Measures of Location, Spread, and Box Plots",
  "subtopic": [
    "Parallel Box Plots",
    "Consistency and Spread"
  ],
  "img": "images/Statistics_pngs/050217.png",
  "question": "A logistics manager monitors the delivery times (in minutes) for urgent packages dispatched by two rival courier firms, Courier A and Courier B. Random samples of delivery times are displayed in the parallel box plots below.<br><br><strong>(a)</strong> Using the summary values from the box plot for Courier B, show that the delivery time of $58\\text{ minutes}$ is an outlier according to the standard $1.5 \\times \\text{IQR}$ rule.<br><br><strong>(b)</strong> A medical laboratory requires predictable, consistent delivery times for blood samples. Advise the laboratory on which courier to select, justifying your choice using appropriate statistical measures of location and spread.<br><br><strong>(c)</strong> Describe the skewness of the delivery times for Courier A, justifying your answer using the quartiles.",
  "steps": [
    "<strong>(a) Outlier Calculation for Courier B:</strong><br><br>From the box plot for Courier B, $Q_1 = 28$ and $Q_3 = 38$:\\begin{aligned} \\text{IQR} &= 38 - 28 \\cr &= 10 \\end{aligned}Calculating the upper outlier boundary:\\begin{aligned} \\text{Upper} &= Q_3 + 1.5(\\text{IQR}) \\cr &= 38 + 1.5(10) \\cr &= 38 + 15 \\cr &= 53 \\end{aligned}Since $58 > 53$, the delivery time of $58\\text{ minutes}$ is an <strong>outlier</strong>.",
    "<strong>(b) Courier Recommendation:</strong><br><br>The laboratory should choose <strong>Courier A</strong>.<br><br>Although Courier A has a slightly higher median ($30\\text{ minutes}$ compared to $28\\text{ minutes}$ for Courier B), Courier A has a smaller interquartile range ($34 - 26 = 8\\text{ minutes}$ compared to $10\\text{ minutes}$ for Courier B) and no extreme outliers, indicating more consistent and predictable delivery times.",
    "<strong>(c) Skewness of Courier A:</strong><br><br>Evaluating quartile distances:\\begin{aligned} Q_2 - Q_1 &= 30 - 26 \\cr &= 4 \\end{aligned}\\begin{aligned} Q_3 - Q_2 &= 34 - 30 \\cr &= 4 \\end{aligned}Since $Q_3 - Q_2 = Q_2 - Q_1 = 4$, the distribution of delivery times for Courier A is <strong>approximately symmetrical</strong>.",
    "Final Answer: (a) $58 > 53$, (b) Courier A due to lower IQR and no outliers, (c) Symmetrical as $Q_3 - Q_2 = Q_2 - Q_1 = 4$"
  ],
  "pi_options": [
    {
      "ans": "(a) $58 > 53$, (b) Courier B due to higher median, (c) Symmetrical as $Q_3 - Q_2 = Q_2 - Q_1 = 4$",
      "feedback": "For a laboratory requiring predictability, consistency is measured by spread (IQR). Courier A has a smaller IQR and no outliers, making it more reliable."
    },
    {
      "ans": "(a) $58 \\le 53$, (b) Courier A due to lower IQR and no outliers, (c) Symmetrical as $Q_3 - Q_2 = Q_2 - Q_1 = 4$",
      "feedback": "Calculating the upper limit gives $38 + 1.5(10) = 53$. Because $58$ exceeds $53$, it lies outside the boundary and is an outlier."
    },
    {
      "ans": "(a) $58 > 53$, (b) Courier A due to lower IQR and no outliers, (c) Positive skew as upper whisker is longer",
      "feedback": "Inside the box, the median ($30$) is situated exactly halfway between $Q_1 = 26$ and $Q_3 = 34$, indicating approximate symmetry."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Consistency Means Smaller Spread",
    "content": "In examination questions, the words 'consistent', 'reliable', or 'predictable' always direct you to compare a measure of spread (the IQR or standard deviation). The distribution with the smaller spread is the more consistent one."
  }
},
{
  "id": "050218",
  "group_id": "050216",
  "branch": "Statistics",
  "board": "WJEC",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Measures of Location, Spread, and Box Plots",
  "subtopic": [
    "Two-Sided Outliers",
    "Robust Statistics"
  ],
  "img": "images/Statistics_pngs/050218.png",
  "question": "The box plot in the diagram displays the daily wait times (in minutes) for a random sample of patients attending an urgent care walk-in clinic.<br><br><strong>(a)</strong> Showing your working, calculate the lower and upper outlier boundaries for these wait times.<br><br><strong>(b)</strong> Confirm that both the recorded values of $4\\text{ minutes}$ and $68\\text{ minutes}$ are outliers.<br><br><strong>(c)</strong> A late audit record reveals another patient who waited $12\\text{ minutes}$. State, with a clear reason, whether this wait time would be classified as an outlier.<br><br><strong>(d)</strong> Explain why the median and interquartile range are more appropriate measures for summarising these data than the mean and standard deviation.",
  "steps": [
    "<strong>(a) Outlier Boundaries:</strong><br><br>From the box plot, $Q_1 = 24$ and $Q_3 = 36$:\\begin{aligned} \\text{IQR} &= 36 - 24 \\cr &= 12 \\end{aligned}Calculating the lower boundary:\\begin{aligned} \\text{Lower} &= Q_1 - 1.5(\\text{IQR}) \\cr &= 24 - 1.5(12) \\cr &= 24 - 18 \\cr &= 6 \\end{aligned}Calculating the upper boundary:\\begin{aligned} \\text{Upper} &= Q_3 + 1.5(\\text{IQR}) \\cr &= 36 + 1.5(12) \\cr &= 36 + 18 \\cr &= 54 \\end{aligned}",
    "<strong>(b) Confirming Outliers:</strong><br><br>Comparing the recorded wait times against the boundaries:\\begin{aligned} 4 &< 6 \\cr 68 &> 54 \\end{aligned}Because $4\\text{ minutes}$ is below the lower boundary and $68\\text{ minutes}$ is above the upper boundary, both values are <strong>outliers</strong>.",
    "<strong>(c) Classification of $12\\text{ Minutes}$:</strong><br><br>A wait time of $12\\text{ minutes}$ lies comfortably within the non-outlier interval ($6 \\le 12 \\le 54$). Therefore, it is <strong>not an outlier</strong>.",
    "<strong>(d) Justification of Measures:</strong><br><br>The median and interquartile range are more appropriate because the dataset contains extreme outliers and exhibits skewness.<br><br>The mean and standard deviation are heavily influenced by extreme values, whereas the median and $\\text{IQR}$ are robust measures of location and spread.",
    "Final Answer: (a) Lower $= 6$, Upper $= 54$, (b) Both outside boundaries, (c) Not an outlier as $6 \\le 12 \\le 54$, (d) Median and IQR are robust to outliers"
  ],
  "pi_options": [
    {
      "ans": "(a) Lower $= 12$, Upper $= 48$, (b) Both outside boundaries, (c) Not an outlier as $6 \\le 12 \\le 54$, (d) Median and IQR are robust to outliers",
      "feedback": "Remember to multiply the IQR by $1.5$: $1.5 \\times 12 = 18$. Subtracting $12$ directly without multiplying by $1.5$ gives incorrect boundaries."
    },
    {
      "ans": "(a) Lower $= 6$, Upper $= 54$, (b) Both outside boundaries, (c) Outlier because it lies below the whisker, (d) Median and IQR are robust to outliers",
      "feedback": "A value is an outlier only if it falls beyond the calculated boundaries ($< 6$ or $> 54$). Since $12 \\ge 6$, it is not an outlier."
    },
    {
      "ans": "(a) Lower $= 6$, Upper $= 54$, (b) Both outside boundaries, (c) Not an outlier as $6 \\le 12 \\le 54$, (d) Mean and standard deviation are always preferred",
      "feedback": "When data contain outliers or skewness, the mean and standard deviation are distorted, making the median and IQR far more representative."
    }
  ],
  "bradley_insight": {
    "type": "caution",
    "title": "The Head Teacher's Eye: Non-Symmetric Outlier Boundaries",
    "content": "Notice that lower and upper boundaries are calculated relative to their respective quartiles ($Q_1 - 1.5\\text{IQR}$ and $Q_3 + 1.5\\text{IQR}$), not the median. Always calculate both boundaries independently."
  }
},
{
  "id": "050219",
  "group_id": "050216",
  "branch": "Statistics",
  "board": "WJEC",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Measures of Location, Spread, and Box Plots",
  "subtopic": [
    "Cumulative Frequency and Box Plots",
    "Percentiles"
  ],
  "img": "images/Statistics_pngs/050219.png",
  "question": "A national examining body displays the distribution of scores achieved by candidates in a qualifying examination using both a cumulative frequency curve and a directly aligned box plot, as shown in the diagram.<br><br><strong>(a)</strong> Using the box plot, state the median score and calculate the interquartile range.<br><br><strong>(b)</strong> Determine whether the examination scores exhibit positive skewness, negative skewness, or are approximately symmetrical. Justify your answer using quartile differences.<br><br><strong>(c)</strong> A teacher claims that at least $75\\%$ of candidates scored $38$ marks or more. Explain, with reference to the box plot, whether this claim is correct.<br><br><strong>(d)</strong> A certificate of distinction is awarded to the top $10\\%$ of candidates. Use the cumulative frequency curve to estimate the minimum score required to achieve a distinction.",
  "steps": [
    "<strong>(a) Median and Interquartile Range:</strong><br><br>From the box plot and aligned cumulative frequency curve:\\begin{aligned} \\text{Median} = 50 \\end{aligned}Finding the interquartile range with $Q_1 = 38$ and $Q_3 = 64$:\\begin{aligned} \\text{IQR} &= Q_3 - Q_1 \\cr &= 64 - 38 \\cr &= 26 \\end{aligned}",
    "<strong>(b) Skewness:</strong><br><br>Comparing quartile differences:\\begin{aligned} Q_2 - Q_1 &= 50 - 38 \\cr &= 12 \\end{aligned}\\begin{aligned} Q_3 - Q_2 &= 64 - 50 \\cr &= 14 \\end{aligned}Since $Q_3 - Q_2 > Q_2 - Q_1$ ($14 > 12$), the distribution exhibits <strong>slight positive skewness</strong>.",
    "<strong>(c) Evaluating the Teacher's Claim:</strong><br><br>The claim is <strong>correct</strong>.<br><br>The lower quartile $Q_1 = 38$ marks represents the $25\\text{th}$ percentile, meaning exactly $75\\%$ of candidates achieved a score greater than or equal to $38$.",
    "<strong>(d) Distinction Score (Top $10\\%$):</strong><br><br>The top $10\\%$ corresponds to the $90\\text{th}$ percentile ($90\\%$ cumulative frequency).<br><br>Reading horizontally from $90\\%$ on the cumulative frequency curve and down to the horizontal axis gives an estimated minimum score of approximately $73$ marks.",
    "Final Answer: (a) Median $= 50, \\text{IQR} = 26$, (b) Slight positive skew as $14 > 12$, (c) Correct as $Q_1 = 38$ leaves $75\\%$ above, (d) $73$"
  ],
  "pi_options": [
    {
      "ans": "(a) Median $= 50, \\text{IQR} = 26$, (b) Symmetrical as $14 \\approx 12$, (c) Correct as $Q_1 = 38$ leaves $75\\%$ above, (d) $73$",
      "feedback": "Because $Q_3 - Q_2 = 14$ is strictly greater than $Q_2 - Q_1 = 12$, the upper half of the interquartile box is more stretched, indicating positive skewness."
    },
    {
      "ans": "(a) Median $= 50, \\text{IQR} = 26$, (b) Slight positive skew as $14 > 12$, (c) Incorrect as only $25\\%$ scored above, (d) $73$",
      "feedback": "$Q_1$ marks the bottom $25\\%$. Therefore, the remaining $75\\%$ of candidates scored at or above $Q_1 = 38$, confirming the claim."
    },
    {
      "ans": "(a) Median $= 50, \\text{IQR} = 26$, (b) Slight positive skew as $14 > 12$, (c) Correct as $Q_1 = 38$ leaves $75\\%$ above, (d) $90$",
      "feedback": "The top $10\\%$ requires finding the score at $90\\%$ cumulative frequency on the vertical axis, which reads as $73$ marks, not $90$ marks."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Dual Representation Alignment",
    "content": "Notice how the key landmarks on a box plot align with the cumulative frequency curve: $Q_1$ is at $25\\%$, the median is at $50\\%$, and $Q_3$ is at $75\\%$. Projecting vertically between the two plots provides immediate cross-verification."
  }
},
{
  "id": "050220",
  "group_id": "050216",
  "branch": "Statistics",
  "board": "WJEC",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Measures of Location, Spread, and Box Plots",
  "subtopic": [
    "Linear Coding",
    "Outlier Invariance"
  ],
  "img": "images/Statistics_pngs/050220.png",
  "question": "The weekly overtime hours worked by a random sample of factory technicians are summarised in the box plot shown in the diagram.<br><br><strong>(a)</strong> Show that the value of $35\\text{ hours}$ is an outlier.<br><br><strong>(b)</strong> Factory management introduces a revised overtime pay formula. Each technician receives weekly overtime pay, $P$ (in pounds, £), calculated from their overtime hours, $x$, according to the linear formula:$$P = 25x + 50$$<strong>(i)</strong> Find the median weekly overtime pay.<br><strong>(ii)</strong> Calculate the interquartile range of weekly overtime pay.<br><br><strong>(c)</strong> State, with mathematical justification, whether the technician who worked $35\\text{ hours}$ of overtime will remain an outlier in the distribution of overtime pay $P$.",
  "steps": [
    "<strong>(a) Outlier Verification:</strong><br><br>From the box plot, $Q_1 = 4$ and $Q_3 = 16$:\\begin{aligned} \\text{IQR} &= 16 - 4 \\cr &= 12 \\end{aligned}Calculating the upper outlier boundary:\\begin{aligned} \\text{Upper} &= Q_3 + 1.5(\\text{IQR}) \\cr &= 16 + 1.5(12) \\cr &= 16 + 18 \\cr &= 34 \\end{aligned}Since $35 > 34$, the value of $35\\text{ hours}$ is an <strong>outlier</strong>.",
    "<strong>(b)(i) Median Overtime Pay:</strong><br><br>The median of the original hours is $x = 10$. Applying the linear transformation $P = 25x + 50$:\\begin{aligned} \\text{Median}(P) &= 25(10) + 50 \\cr &= 250 + 50 \\cr &= £300 \\end{aligned}",
    "<strong>(b)(ii) Interquartile Range of Pay:</strong><br><br>The constant addition ($+50$) shifts the position but does not affect spread. The interquartile range scales solely by $25$:\\begin{aligned} \\text{IQR}(P) &= 25 \\times \\text{IQR}(x) \\cr &= 25 \\times 12 \\cr &= £300 \\end{aligned}",
    "<strong>(c) Outlier Status Under Linear Transformation:</strong><br><br><strong>Yes, it remains an outlier.</strong><br><br>Evaluating the pay for $35\\text{ hours}$:\\begin{aligned} P(35) &= 25(35) + 50 \\cr &= 875 + 50 \\cr &= £925 \\end{aligned}Evaluating the transformed upper boundary:\\begin{aligned} \\text{Upper}(P) &= 25(34) + 50 \\cr &= 850 + 50 \\cr &= £900 \\end{aligned}Since $£925 > £900$, the value remains an outlier.<br><br>In general, linear coding ($ax + b$ with $a > 0$) scales all data points and boundaries by the exact same factors, preserving outlier classification.",
    "Final Answer: (a) $35 > 34$, (b)(i) $£300$, (ii) $£300$, (c) Yes, linear coding preserves outlier boundaries"
  ],
  "pi_options": [
    {
      "ans": "(a) $35 > 34$, (b)(i) $£300$, (ii) $£350$, (c) Yes, linear coding preserves outlier boundaries",
      "feedback": "Adding a constant shifts the distribution without affecting spread. The IQR is simply $25 \\times 12 = £300$. Do not add 50 to the IQR."
    },
    {
      "ans": "(a) $35 \\le 34$, (b)(i) $£300$, (ii) $£300$, (c) Yes, linear coding preserves outlier boundaries",
      "feedback": "Calculating the boundary gives $16 + 1.5(12) = 34$. Because $35$ exceeds $34$, it is an outlier."
    },
    {
      "ans": "(a) $35 > 34$, (b)(i) $£300$, (ii) $£300$, (c) No, adding base pay eliminates outlier status",
      "feedback": "Linear coding scales and shifts every observation and boundary identically, so relative outlier status is strictly preserved."
    }
  ],
  "bradley_insight": {
    "type": "deeper",
    "title": "The Head Teacher's Eye: Invariance Under Linear Coding",
    "content": "For any linear coding $y = ax + b$ with $a > 0$, the interquartile range scales by $a$, while the constant $b$ cancels out: $\\text{IQR}(y) = a\\text{IQR}(x)$. Because both the data points and the boundary thresholds shift and scale together, outlier status is invariant under linear transformations."
  }
},
{
    "id": "050221",
    "group_id": "050221",
    "branch": "Statistics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Probability",
    "topic": "Conditional Probability",
    "subtopic": [
        "Venn Diagrams",
        "Addition Rule",
        "Conditional Probability"
    ],
    "img": false,
    "question": "A logistics firm tenders for two separate transport contracts: Contract $R$ (regional) and Contract $N$ (national). The managing director estimates that the probability of winning Contract $R$ is $0.60$, the probability of winning Contract $N$ is $0.45$, and the probability of winning both contracts is $0.25$.<br><br><strong>(a)</strong> Show that the probability that the firm wins neither contract is $0.20$.<br><br><strong>(b)</strong> Find the probability that the firm wins exactly one contract.<br><br><strong>(c)</strong> Given that the firm does not win Contract $R$, find the probability that it wins Contract $N$.",
    "steps": [
        "<strong>(a) Probability of neither contract:</strong><br><br>We first find the probability of winning at least one contract using the addition rule of probability:\\begin{aligned} &P(R \\cup N) \\cr &\\quad = P(R) + P(N) - P(R \\cap N) \\cr &\\quad = 0.60 + 0.45 - 0.25 \\cr &\\quad = 0.80 \\end{aligned}The probability of winning neither contract is the complement of the union:\\begin{aligned} P(R' \\cap N') &= 1 - P(R \\cup N) \\cr &= 1 - 0.80 \\cr &= 0.20 \\end{aligned}",
        "<strong>(b) Probability of exactly one contract:</strong><br><br>Winning exactly one contract corresponds to the union minus the intersection:\\begin{aligned} P(\\text{exactly one}) &= P(R \\cup N) \\cr & \\quad - P(R \\cap N) \\cr &= 0.80 - 0.25 \\cr &= 0.55 \\end{aligned}Alternatively, we can sum the two mutually exclusive exclusive regions directly:\\begin{aligned} &P(R \\cap N') + P(R' \\cap N) \\cr &\\quad = (0.60 - 0.25) + (0.45 - 0.25) \\cr &\\quad = 0.35 + 0.20 \\cr &\\quad = 0.55 \\end{aligned}",
        "<strong>(c) Conditional probability:</strong><br><br>Using the definition of conditional probability:\\begin{aligned} P(N \\mid R') &= \\dfrac{P(N \\cap R')}{P(R')} \\end{aligned}We determine the numerator and denominator separately:\\begin{aligned} P(N \\cap R') &= P(N) - P(R \\cap N) \\cr &= 0.45 - 0.25 \\cr &= 0.20 \\end{aligned}\\begin{aligned} P(R') &= 1 - P(R) \\cr &= 1 - 0.60 \\cr &= 0.40 \\end{aligned}Substituting these values into the ratio gives:\\begin{aligned} P(N \\mid R') &= \\dfrac{0.20}{0.40} \\cr &= 0.5 \\end{aligned}",
        "Final Answer: (a) $0.20$, (b) $0.55$, (c) $0.5$"
    ],
    "pi_options": [
        {
            "ans": "(a) $0.20$, (b) $0.55$, (c) $0.45$",
            "feedback": "In part (c), you evaluated the unconditioned probability $P(N) = 0.45$ rather than the conditional probability $P(N \\mid R') = \\dfrac{P(N \\cap R')}{P(R')}$. The given condition that Contract $R$ is not won restricts the sample space to $R'$, which has probability $0.40$."
        },
        {
            "ans": "(a) $0.20$, (b) $0.80$, (c) $0.5$",
            "feedback": "In part (b), $0.80$ is the probability of winning at least one contract, $P(R \\cup N)$, which includes winning both contracts. To find the probability of winning exactly one contract, you must subtract the intersection $P(R \\cap N) = 0.25$."
        },
        {
            "ans": "(a) $0.20$, (b) $0.55$, (c) $0.25$",
            "feedback": "In part (c), you evaluated the intersection $P(R \\cap N)$ or divided by an incorrect total instead of dividing $P(N \\cap R') = 0.20$ by $P(R') = 0.40$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: The Restricted Sample Space",
        "content": "When calculating a conditional probability such as $P(N \\mid R')$, students often mistakenly divide by the entire sample space or divide by $P(N)$ rather than $P(R')$. Always identify the given condition first—here, the firm has failed to win Contract $R$, which immediately shrinks the total possible outcomes to $R'$ with total probability $1 - 0.60 = 0.40$."
    }
},
{
    "id": "050222",
    "group_id": "050221",
    "branch": "Statistics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Probability",
    "topic": "Conditional Probability",
    "subtopic": [
        "Independent Events",
        "Addition Rule",
        "Conditional Probability"
    ],
    "img": false,
    "question": "A quality-assurance system inspects precision components for two types of defect: electrical defect ($E$) and mechanical defect ($M$). For a randomly selected component from Batch 1, $P(E) = 0.15$ and $P(M) = 0.20$.<br><br><strong>(a)</strong> Given that for Batch 1 the two defects occur independently, find the probability that a randomly selected component:<br>&emsp;<strong>(i)</strong> has both defects,<br>&emsp;<strong>(ii)</strong> has at least one defect,<br>&emsp;<strong>(iii)</strong> has an electrical defect, given that it has at least one defect.<br><br><strong>(b)</strong> For a second batch, Batch 2, the probability of an electrical defect remains $0.15$, but the defects are no longer independent. It is found that $P(E \\cup M) = 0.28$ and $P(E \\mid M) = 0.35$. Find $P(M)$ for Batch 2.",
    "steps": [
        "<strong>(a)(i) Probability of both defects (independent):</strong><br><br>Since defects $E$ and $M$ occur independently in Batch 1, the multiplication rule applies directly:\\begin{aligned} P(E \\cap M) &= P(E) \\times P(M) \\cr &= 0.15 \\times 0.20 \\cr &= 0.03 \\end{aligned}",
        "<strong>(a)(ii) Probability of at least one defect:</strong><br><br>Applying the addition rule of probability:\\begin{aligned} P(E \\cup M) &= P(E) + P(M)\\cr & \\quad - P(E \\cap M) \\cr &= 0.15 + 0.20 - 0.03 \\cr &= 0.32 \\end{aligned}",
        "<strong>(a)(iii) Conditional probability:</strong><br><br>Applying the conditional probability definition:\\begin{aligned} P(E \\mid E \\cup M) &= \\dfrac{P(E \\cap (E \\cup M))}{P(E \\cup M)} \\end{aligned}Because $E \\subseteq (E \\cup M)$, the intersection simplifies to $E$:\\begin{aligned} P(E \\mid E \\cup M) &= \\dfrac{P(E)}{P(E \\cup M)} \\cr &= \\dfrac{0.15}{0.32} \\cr &= \\dfrac{15}{32} \\quad (0.46875) \\end{aligned}",
        "<strong>(b) Finding $P(M)$ for Batch 2:</strong><br><br>From the definition of conditional probability:\\begin{aligned} P(E \\cap M) &= P(E \\mid M) P(M) \\cr &= 0.35 P(M) \\end{aligned}Substituting into the general addition rule:\\begin{aligned} &P(E \\cup M) = P(E) + P(M) \\cr & \\qquad \\qquad \\quad- P(E \\cap M) \\cr &0.28 = 0.15 + P(M) - 0.35 P(M) \\cr &0.28 - 0.15 = 0.65 P(M) \\cr &0.13 = 0.65 P(M) \\cr &P(M) = \\dfrac{0.13}{0.65} \\cr &P(M) = 0.2 \\end{aligned}",
        "Final Answer: (a)(i) $0.03$, (ii) $0.32$, (iii) $\\dfrac{15}{32}$, (b) $0.2$"
    ],
    "pi_options": [
        {
            "ans": "(a)(i) $0.03$, (ii) $0.35$, (iii) $\\dfrac{15}{32}$, (b) $0.2$",
            "feedback": "In part (a)(ii), you computed $P(E) + P(M) = 0.15 + 0.20 = 0.35$ without subtracting the intersection $P(E \\cap M) = 0.03$. The events are independent, not mutually exclusive."
        },
        {
            "ans": "(a)(i) $0.03$, (ii) $0.32$, (iii) $0.15$, (b) $0.2$",
            "feedback": "In part (a)(iii), you stated $P(E) = 0.15$ without conditioning on the restricted sample space $E \\cup M$. The denominator must be $P(E \\cup M) = 0.32$."
        },
        {
            "ans": "(a)(i) $0.03$, (ii) $0.32$, (iii) $\\dfrac{15}{32}$, (b) $0.371$",
            "feedback": "In part (b), you substituted $0.35$ directly for $P(E \\cap M)$ instead of $0.35 P(M)$. Remember that $P(E \\cap M) = P(E \\mid M) P(M)$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Subsets in Conditional Probability",
        "content": "Notice in part (a)(iii) that event $E$ is entirely contained within the union $E \\cup M$. Therefore, $E \\cap (E \\cup M) = E$. Whenever event $A$ is a subset of event $B$, the conditional probability simplifies neatly to $P(A \\mid B) = \\dfrac{P(A)}{P(B)}$."
    }
},
{
    "id": "050223",
    "group_id": "050221",
    "branch": "Statistics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Probability",
    "topic": "Conditional Probability",
    "subtopic": [
        "Venn Diagrams",
        "Inclusion-Exclusion Principle",
        "Statistical Independence"
    ],
    "img": false,
    "question": "A survey of $120$ college students investigated membership in three enrichment societies: Chess ($C$), Debate ($D$), and Robotics ($R$). The findings were as follows:<br>• $15$ students belong to none of the three societies.<br>• $65$ students belong to Chess.<br>• $55$ students belong to Debate.<br>• $48$ students belong to Robotics.<br>• $28$ students belong to both Chess and Debate.<br>• $22$ students belong to both Debate and Robotics.<br>• $25$ students belong to both Chess and Robotics.<br>• $x$ students belong to all three societies.<br><br>A student is chosen at random from the survey.<br><br><strong>(a)</strong> Show that $x = 12$.<br><br><strong>(b)</strong> Find the probability that the student belongs to:<br>&emsp;<strong>(i)</strong> exactly two societies,<br>&emsp;<strong>(ii)</strong> Robotics, given that the student does not belong to Chess.<br><br><strong>(c)</strong> Determine, with mathematical justification, whether the events \"belongs to Chess\" and \"belongs to Robotics\" are statistically independent.",
    "steps": [
        "<strong>(a) Determining $x$:</strong><br><br>The number of students belonging to at least one society is:\\begin{aligned} n(C \\cup D \\cup R) &= 120 - 15 \\cr &= 105 \\end{aligned}Applying the principle of inclusion-exclusion for three sets:\\begin{aligned} &n(C \\cup D \\cup R) \\cr &= n(C) + n(D) + n(R) \\cr &\\quad - n(C \\cap D) - n(D \\cap R)\\cr &\\quad - n(C \\cap R) + n(C \\cap D \\cap R) \\end{aligned}Substituting the known counts:\\begin{aligned} &105 = 65 + 55 + 48 \\cr &\\qquad - (28 + 22 + 25) + x \\cr &105 = 168 - 75 + x \\cr &105 = 93 + x \\cr &x = 105 - 93 \\cr &x = 12 \\end{aligned}",
        "<strong>(b)(i) Probability of exactly two societies:</strong><br><br>We determine the counts belonging to exactly two societies by removing the central intersection $x = 12$ from each two-set overlap:\\begin{aligned} &n(C \\cap D \\text{ only}) = 28 - 12 = 16 \\cr &n(D \\cap R \\text{ only}) = 22 - 12 = 10 \\cr &n(C \\cap R \\text{ only}) = 25 - 12 = 13 \\end{aligned}Summing these counts:\\begin{aligned} n(\\text{exactly two}) &= 16 + 10 + 13 \\cr &= 39 \\end{aligned}Thus the probability is:\\begin{aligned} P(\\text{exactly two}) &= \\dfrac{39}{120} \\cr &= \\dfrac{13}{40} \\quad (0.325) \\end{aligned}",
        "<strong>(b)(ii) Conditional probability $P(R \\mid C')$:</strong><br><br>The total number of students not belonging to Chess is:\\begin{aligned} n(C') &= 120 - 65 \\cr &= 55 \\end{aligned}The number of students in Robotics who do not belong to Chess is:\\begin{aligned} n(R \\cap C') &= n(R) - n(C \\cap R) \\cr &= 48 - 25 \\cr &= 23 \\end{aligned}Hence:\\begin{aligned} P(R \\mid C') &= \\dfrac{n(R \\cap C')}{n(C')} \\cr &= \\dfrac{23}{55} \\end{aligned}",
        "<strong>(c) Testing statistical independence of $C$ and $R$:</strong><br><br>For $C$ and $R$ to be independent, we require $P(C \\cap R) = P(C) \\times P(R)$.<br><br>Evaluating each probability:\\begin{aligned} P(C \\cap R) &= \\dfrac{25}{120} = \\dfrac{5}{24} \\approx 0.2083 \\cr P(C) &= \\dfrac{65}{120} = \\dfrac{13}{24} \\cr P(R) &= \\dfrac{48}{120} = \\dfrac{2}{5} \\end{aligned}Evaluating the product:\\begin{aligned} P(C) \\times P(R) &= \\dfrac{13}{24} \\times \\dfrac{2}{5} \\cr &= \\dfrac{26}{120}\\cr & = \\dfrac{13}{60}\\cr & \\approx 0.2167 \\end{aligned}Since $\\dfrac{5}{24} \\neq \\dfrac{13}{60}$, the events are not independent.",
        "Final Answer: (a) $x = 12$, (b)(i) $\\dfrac{13}{40}$, (ii) $\\dfrac{23}{55}$, (c) Not independent as $P(C \\cap R) \\neq P(C) \\times P(R)$"
    ],
    "pi_options": [
        {
            "ans": "(a) $x = 12$, (b)(i) $\\dfrac{5}{8}$, (ii) $\\dfrac{23}{55}$, (c) Not independent as $P(C \\cap R) \\neq P(C) \\times P(R)$",
            "feedback": "In part (b)(i), you summed the full overlaps $28 + 22 + 25 = 75$ and divided by $120$. This includes the $12$ students belonging to all three societies three times. You must subtract $12$ from each overlap before adding."
        },
        {
            "ans": "(a) $x = 12$, (b)(i) $\\dfrac{13}{40}$, (ii) $\\dfrac{23}{120}$, (c) Not independent as $P(C \\cap R) \\neq P(C) \\times P(R)$",
            "feedback": "In part (b)(ii), you computed the joint probability $P(R \\cap C') = \\dfrac{23}{120}$ over all $120$ students instead of conditioning on $n(C') = 55$."
        },
        {
            "ans": "(a) $x = 12$, (b)(i) $\\dfrac{13}{40}$, (ii) $\\dfrac{23}{55}$, (c) Independent as both probabilities are close to $0.21$",
            "feedback": "In part (c), statistical independence requires exact algebraic equality: $P(C \\cap R) = P(C) \\times P(R)$. Since $\\dfrac{25}{120} \\neq \\dfrac{26}{120}$, they cannot be claimed as independent."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Pairwise Overlaps in 3-Set Venns",
        "content": "A frequent mistake in three-set Venn problems is assuming that 'belongs to Chess and Debate' means <em>only</em> those two. In examination questions, stated intersections include the central three-way region $x$ unless the word 'only' is explicitly included."
    }
},
{
    "id": "050224",
    "group_id": "050221",
    "branch": "Statistics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Probability",
    "topic": "Conditional Probability",
    "subtopic": [
        "Law of Total Probability",
        "Bayes' Theorem",
        "Independent Multi-Stage Events"
    ],
    "img": false,
    "question": "An aerospace manufacturing facility sources microchips from three suppliers: $A$, $B$, and $C$.<br>• Supplier $A$ supplies $50\\%$ of the microchips, and $2\\%$ of these are defective.<br>• Supplier $B$ supplies $30\\%$ of the microchips, and $3\\%$ of these are defective.<br>• Supplier $C$ supplies $20\\%$ of the microchips, and $5\\%$ of these are defective.<br><br><strong>(a)</strong> A microchip is selected at random from the total supply.<br>&emsp;<strong>(i)</strong> Show that the probability that the microchip is defective is $0.029$.<br>&emsp;<strong>(ii)</strong> Given that the microchip is defective, find the probability that it was supplied by Supplier $B$. Give your answer as an exact fraction in simplest form.<br><br><strong>(b)</strong> Two microchips are chosen at random from the total supply, independently of each other. Find the probability that exactly one of the two microchips is defective and that this defective microchip came from Supplier $A$.",
    "steps": [
        "<strong>(a)(i) Overall probability of a defective chip:</strong><br><br>By the law of total probability:\\begin{aligned} &P(D) \\cr &= P(A)P(D \\mid A) + P(B)P(D \\mid B) \\cr &\\quad + P(C)P(D \\mid C) \\end{aligned}Substituting the given values:\\begin{aligned} P(D) &= (0.50)(0.02) + (0.30)(0.03) \\cr &\\quad + (0.20)(0.05) \\cr &= 0.010 + 0.009 + 0.010 \\cr &= 0.029 \\end{aligned}",
        "<strong>(a)(ii) Conditional probability of Supplier $B$:</strong><br><br>Applying Bayes' theorem:\\begin{aligned} P(B \\mid D) &= \\dfrac{P(B \\cap D)}{P(D)} \\cr &= \\dfrac{P(B)P(D \\mid B)}{P(D)} \\cr &= \\dfrac{0.30 \\times 0.03}{0.029} \\cr &= \\dfrac{0.009}{0.029} \\cr &= \\dfrac{9}{29} \\end{aligned}",
        "<strong>(b) Multi-stage probability with two chips:</strong><br><br>Let $D_A$ denote the event that a chip is defective and from Supplier $A$:\\begin{aligned} P(D_A) &= P(A \\cap D) \\cr &= 0.50 \\times 0.02 \\cr &= 0.010 \\end{aligned}Let $D'$ denote the event that a chip is not defective (from any supplier):\\begin{aligned} P(D') &= 1 - P(D) \\cr &= 1 - 0.029 \\cr &= 0.971 \\end{aligned}The event that exactly one chip is defective and comes from Supplier $A$ can happen in two mutually exclusive orders: $(D_A, D')$ or $(D', D_A)$:\\begin{aligned} P &= 2 \\times P(D_A) \\times P(D') \\cr &= 2 \\times 0.010 \\times 0.971 \\cr &= 0.01942 \\end{aligned}",
        "Final Answer: (a)(i) $0.029$, (ii) $\\dfrac{9}{29}$, (b) $0.01942$"
    ],
    "pi_options": [
        {
            "ans": "(a)(i) $0.029$, (ii) $\\dfrac{9}{29}$, (b) $0.00971$",
            "feedback": "In part (b), you evaluated only a single sequence $(D_A, D')$. Because either the first chip or the second chip could be the defective one from Supplier $A$, you must multiply by $2$ to account for both orders."
        },
        {
            "ans": "(a)(i) $0.029$, (ii) $0.03$, (b) $0.01942$",
            "feedback": "In part (a)(ii), you stated $P(D \\mid B) = 0.03$ instead of reversing the condition to find $P(B \\mid D)$. The condition restricts the sample space to defective chips, giving denominator $P(D) = 0.029$."
        },
        {
            "ans": "(a)(i) $0.029$, (ii) $\\dfrac{9}{29}$, (b) $0.00980$",
            "feedback": "In part (b), you paired the defective chip from $A$ with a non-defective chip restricted to Supplier $A$ ($0.49$) rather than any non-defective chip across all suppliers ($0.971$)."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Order in Independent Pair Selections",
        "content": "In multi-stage independent trials, students often calculate the probability of one specific sequence (e.g. chip 1 is defective from $A$, chip 2 is non-defective) and forget the factor of $2$. Unless the question specifies a particular draw order, always account for both permutations."
    }
},
{
    "id": "050225",
    "group_id": "050221",
    "branch": "Statistics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Probability",
    "topic": "Conditional Probability",
    "subtopic": [
        "Addition Rule",
        "Independent Events",
        "Conditional Probability",
        "Probability Inequalities"
    ],
    "img": false,
    "question": "Two events $A$ and $B$ are such that $P(A) = 0.60$, $P(B) = p$, and $P(A \\cup B) = 0.85$.<br><br><strong>(a)</strong> Find an expression for $P(A \\cap B)$ in terms of $p$.<br><br><strong>(b)</strong> Determine the range of possible values of $p$.<br><br><strong>(c)</strong> Given that $A$ and $B$ are independent:<br>&emsp;<strong>(i)</strong> show that $p = 0.625$,<br>&emsp;<strong>(ii)</strong> find the value of $P(A' \\mid B)$.<br><br><strong>(d)</strong> Given instead that $P(A \\mid B) = 0.50$, find the value of $p$.",
    "steps": [
        "<strong>(a) Expression for $P(A \\cap B)$:</strong><br><br>Applying the addition rule of probability:\\begin{aligned} &P(A \\cup B) = P(A) + P(B)\\cr & \\qquad- P(A \\cap B) \\cr &0.85 = 0.60 + p - P(A \\cap B) \\cr &P(A \\cap B) = p + 0.60 - 0.85 \\cr &P(A \\cap B) = p - 0.25 \\end{aligned}",
        "<strong>(b) Range of possible values of $p$:</strong><br><br>Every probability must lie between $0$ and $1$.<br><br>Since the intersection cannot be negative:\\begin{aligned} P(A \\cap B) \\ge 0 &\\implies p - 0.25 \\ge 0 \\cr &\\implies p \\ge 0.25 \\end{aligned}Furthermore, since $B \\subseteq (A \\cup B)$:\\begin{aligned} P(B) \\le P(A \\cup B) &\\implies p \\le 0.85 \\end{aligned}Therefore, the allowable range for $p$ is:\\begin{aligned} 0.25 \\le p \\le 0.85 \\end{aligned}",
        "<strong>(c)(i) Showing $p = 0.625$ under independence:</strong><br><br>If $A$ and $B$ are independent, $P(A \\cap B) = P(A) \\times P(B)$:\\begin{aligned} &p - 0.25 = 0.60p \\cr &p - 0.60p = 0.25 \\cr &0.40p = 0.25 \\cr &p = \\dfrac{0.25}{0.40} \\cr &p = 0.625 \\end{aligned}",
        "<strong>(c)(ii) Value of $P(A' \\mid B)$:</strong><br><br>Because $A$ and $B$ are independent, knowing that $B$ has occurred does not affect the probability of $A$ or its complement $A'$:\\begin{aligned} P(A' \\mid B) &= P(A') \\cr &= 1 - P(A) \\cr &= 1 - 0.60 \\cr &= 0.4 \\end{aligned}",
        "<strong>(d) Finding $p$ when $P(A \\mid B) = 0.50$:</strong><br><br>Using the definition of conditional probability:\\begin{aligned} P(A \\mid B) &= \\dfrac{P(A \\cap B)}{P(B)} \\cr 0.50 &= \\dfrac{p - 0.25}{p} \\end{aligned}Solving for $p$:\\begin{aligned} &0.50p = p - 0.25 \\cr &0.25 = p - 0.50p \\cr &0.25 = 0.50p \\cr &p = \\dfrac{0.25}{0.50} \\cr &p = 0.5 \\end{aligned}",
        "Final Answer: (a) $p - 0.25$, (b) $0.25 \\le p \\le 0.85$, (c)(i) $p = 0.625$, (ii) $0.4$, (d) $0.5$"
    ],
    "pi_options": [
        {
            "ans": "(a) $p - 0.25$, (b) $0 \\le p \\le 1$, (c)(i) $p = 0.625$, (ii) $0.4$, (d) $0.5$",
            "feedback": "In part (b), stating $0 \\le p \\le 1$ ignores the constraints given by $P(A) = 0.60$ and $P(A \\cup B) = 0.85$. If $p < 0.25$, the intersection $p - 0.25$ would be negative; if $p > 0.85$, $P(B)$ would exceed the union $P(A \\cup B)$."
        },
        {
            "ans": "(a) $p - 0.25$, (b) $0.25 \\le p \\le 0.85$, (c)(i) $p = 0.625$, (ii) $0.6$, (d) $0.5$",
            "feedback": "In part (c)(ii), $0.6$ is $P(A \\mid B) = P(A)$, but the question asks for the complement $P(A' \\mid B) = 1 - P(A) = 0.4$."
        },
        {
            "ans": "(a) $p - 0.25$, (b) $0.25 \\le p \\le 0.85$, (c)(i) $p = 0.625$, (ii) $0.4$, (d) $0.25$",
            "feedback": "In part (d), you solved $p - 0.25 = 0$ instead of $p - 0.25 = 0.50p$. Make sure to multiply through by the denominator $P(B) = p$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Independence Simplifies Conditionals",
        "content": "In part (c)(ii), do not waste time setting up Bayes' formula: if $A$ and $B$ are independent, knowing that $B$ has occurred provides zero information about $A$ (or $A'$). Hence \\begin{aligned}P(A' \\mid B) & = P(A')\\cr &= 1 - P(A) \\cr &= 0.40\\end{aligned} immediately."
    }
},
{
    "id": "050226",
    "group_id": "050226",
    "branch": "Statistics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Probability",
    "topic": "Conditional Probability",
    "subtopic": [
        "Sequential Events",
        "Contingency Tables",
        "Conditional Probability"
    ],
    "img": false,
    "question": "<strong>(a)</strong> An autonomous exploration rover is programmed to cross a difficult terrain ditch. In a trial run, it is allowed up to two attempts to cross the ditch, but if it succeeds on its first attempt, it does not attempt the crossing again. The probability that the rover is successful on its first attempt is $p$. If it fails the first attempt, the probability that it is successful on its second attempt is also $p$. The overall probability that the rover successfully clears the ditch within the two attempts is $0.51$.<br>Find the value of $p$.<br><br><strong>(b)</strong> The following table shows the numbers of research officers employed by a wildlife conservation trust, classified by base region and scientific department:<table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><tr style='border-bottom:1px solid #ccc;'><th style='padding:6px; text-align:left;'>Region</th><th style='padding:6px;'>Ecology</th><th style='padding:6px;'>Genetics</th></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'><strong>North</strong></td><td style='padding:6px;'>14</td><td style='padding:6px;'>6</td></tr><tr><td style='padding:6px; text-align:left;'><strong>South</strong></td><td style='padding:6px;'>7</td><td style='padding:6px;'>8</td></tr></table>Two research officers are chosen at random without replacement to attend an international symposium. Given that the first officer chosen is based in the North region, find the probability that both chosen officers are from the Ecology department.",
    "steps": [
        "<strong>(a) Setting up the probability equation for $p$:</strong><br><br>The rover clears the ditch if it succeeds on attempt 1, or fails attempt 1 and succeeds on attempt 2:\\begin{aligned} &P(\\text{clears}) \\cr &\\quad = P(\\text{1st}) + P(\\text{fails 1st})P(\\text{2nd}) \\cr &\\quad = p + (1 - p)p \\cr &\\quad = 2p - p^2 \\end{aligned}Equating this to $0.51$ gives a quadratic equation:\\begin{aligned} &2p - p^2 = 0.51 \\cr &p^2 - 2p + 0.51 = 0 \\cr &(p - 0.3)(p - 1.7) = 0 \\end{aligned}Since $p$ represents a probability, $0 \\le p \\le 1$, we reject $p = 1.7$:\\begin{aligned} p = 0.3 \\end{aligned}",
        "<strong>(b) Conditional probability without replacement:</strong><br><br>First, determine the totals from the table:<br>• Total officers: $14 + 6 + 7 + 8 = 35$<br>• North officers: $14 + 6 = 20$<br>• Ecology officers: $14 + 7 = 21$<br><br>We require $P(\\text{both Ecology} \\mid \\text{1st North})$. Using the conditional definition:\\begin{aligned} &P(\\text{both Eco} \\mid \\text{1st North}) \\cr &\\quad = \\dfrac{P(\\text{1st North Eco} \\cap \\text{2nd Eco})}{P(\\text{1st North})} \\end{aligned}Calculating the joint and marginal probabilities:\\begin{aligned} P(\\text{1st North}) &= \\dfrac{20}{35} \\end{aligned}For the numerator, the first officer must be North Ecology and the second must be any remaining Ecology officer:\\begin{aligned} &P(\\text{1st North Eco} \\cap \\text{2nd Eco}) \\cr &\\quad = \\dfrac{14}{35} \\times \\dfrac{20}{34} \\end{aligned}Substituting these into the conditional probability expression:\\begin{aligned} &P(\\text{both Eco} \\mid \\text{1st North}) \\cr &\\quad = \\dfrac{\\frac{14}{35} \\times \\frac{20}{34}}{\\frac{20}{35}} \\cr &\\quad = \\dfrac{14}{20} \\times \\dfrac{20}{34} \\cr &\\quad = \\dfrac{14}{34} \\cr &\\quad = \\dfrac{7}{17} \\end{aligned}",
        "Final Answer: (a) $p = 0.3$, (b) $\\dfrac{7}{17}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $p = 0.3$, (b) $\\dfrac{14}{35}$",
            "feedback": "In part (b), you evaluated the probability of picking a single North Ecology officer out of the total staff, rather than finding the conditional probability that both chosen officers belong to Ecology given that the first is from the North."
        },
        {
            "ans": "(a) $p = 1.7$, (b) $\\dfrac{7}{17}$",
            "feedback": "In part (a), you solved the quadratic equation correctly but failed to reject the root $p = 1.7$. Probabilities must strictly satisfy $0 \\le p \\le 1$."
        },
        {
            "ans": "(a) $p = 0.3$, (b) $\\dfrac{6}{17}$",
            "feedback": "In part (b), you used with-replacement probabilities or incorrectly reduced the remaining pool of Ecology officers to $19$ instead of $20$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Cancelling the First Pick",
        "content": "Notice how the fraction simplifies directly when applying conditional probability. The condition that the first officer is from the North immediately restricts the first selection to the $20$ North officers, of which $14$ are Ecology: $\\dfrac{14}{20}$. Then, for the second pick, $20$ Ecology officers remain out of $34$ total staff: $\\dfrac{14}{20} \\times \\dfrac{20}{34} = \\dfrac{14}{34} = \\dfrac{7}{17}$."
    }
},
{
    "id": "050227",
    "group_id": "050226",
    "branch": "Statistics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Probability",
    "topic": "Conditional Probability",
    "subtopic": [
        "Sequential Events",
        "Quadratic Probability Models",
        "Sampling Without Replacement"
    ],
    "img": false,
    "question": "<strong>(a)</strong> A candidate takes a professional certification test. She is permitted up to two attempts. The probability that she passes on her first attempt is $p$. If she fails the first attempt, she attends an intensive revision workshop, and the probability that she passes on her second attempt increases to $p + 0.20$. If she passes on her first attempt, she does not take the test again. The probability that she passes the test within the two attempts is $0.76$.<br>Find the value of $p$.<br><br><strong>(b)</strong> A healthcare audit classifies $40$ medical consultants by employment status and specialty:<table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><tr style='border-bottom:1px solid #ccc;'><th style='padding:6px; text-align:left;'>Status</th><th style='padding:6px;'>Surgical</th><th style='padding:6px;'>Medical</th></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'><strong>Full-time</strong></td><td style='padding:6px;'>16</td><td style='padding:6px;'>8</td></tr><tr><td style='padding:6px; text-align:left;'><strong>Part-time</strong></td><td style='padding:6px;'>6</td><td style='padding:6px;'>10</td></tr></table>Two consultants are chosen at random without replacement to serve on an advisory panel. Given that the first consultant chosen is employed Full-time, find the probability that both chosen consultants belong to the Surgical specialty.",
    "steps": [
        "<strong>(a) Setting up and solving the quadratic equation for $p$:</strong><br><br>The candidate passes if she succeeds on attempt 1, or fails attempt 1 and succeeds on attempt 2:\\begin{aligned} &P(\\text{passes}) \\cr &\\quad = p + (1 - p)(p + 0.20) \\cr &\\quad = p + p + 0.20 - p^2 - 0.20p \\cr &\\quad = 1.8p - p^2 + 0.20 \\end{aligned}Equating this expression to $0.76$:\\begin{aligned} &1.8p - p^2 + 0.20 = 0.76 \\cr &p^2 - 1.8p + 0.56 = 0 \\cr &(p - 0.4)(p - 1.4) = 0 \\end{aligned}Since $p$ is a probability, $0 \\le p \\le 1$, we reject $p = 1.4$:\\begin{aligned} p = 0.4 \\end{aligned}",
        "<strong>(b) Calculating the conditional probability:</strong><br><br>Find the group totals from the table:<br>• Total consultants: $16 + 8 + 6 + 10 = 40$<br>• Full-time consultants: $16 + 8 = 24$<br>• Surgical consultants: $16 + 6 = 22$<br><br>For both consultants to be Surgical given that the first is Full-time, the first must be a Full-time Surgical consultant and the second must be any remaining Surgical consultant:\\begin{aligned} &P(\\text{1st FT Surg} \\mid \\text{1st FT}) \\cr &\\quad = \\dfrac{16}{24} = \\dfrac{2}{3} \\end{aligned}Given that the first consultant was Surgical, $21$ Surgical consultants remain out of $39$ total remaining consultants:\\begin{aligned} &P(\\text{2nd Surg} \\mid \\text{1st FT Surg}) \\cr &\\quad = \\dfrac{21}{39} = \\dfrac{7}{13} \\end{aligned}Multiplying these dependent probabilities:\\begin{aligned} &P(\\text{both Surg} \\mid \\text{1st FT}) \\cr &\\quad = \\dfrac{2}{3} \\times \\dfrac{7}{13} \\cr &\\quad = \\dfrac{14}{39} \\end{aligned}",
        "Final Answer: (a) $p = 0.4$, (b) $\\dfrac{14}{39}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $p = 0.4$, (b) $\\dfrac{16}{39}$",
            "feedback": "In part (b), you forgot to reduce the number of Surgical consultants by $1$ for the second pick, using $\\dfrac{22}{39}$ instead of $\\dfrac{21}{39}$."
        },
        {
            "ans": "(a) $p = 1.4$, (b) $\\dfrac{14}{39}$",
            "feedback": "In part (a), you accepted the extraneous root $p = 1.4$. A probability cannot exceed $1$."
        },
        {
            "ans": "(a) $p = 0.4$, (b) $\\dfrac{7}{26}$",
            "feedback": "In part (b), you calculated the unconditional joint probability of selecting two Surgical consultants without conditioning on the first consultant being Full-time."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Check the Boundary Range",
        "content": "Whenever solving quadratic equations in probability problems, always check the physical feasibility of both algebraic solutions. Since any probability must satisfy $0 \\le p \\le 1$, an extraneous root like $p = 1.4$ must be explicitly rejected."
    }
},
{
    "id": "050228",
    "group_id": "050226",
    "branch": "Statistics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Probability",
    "topic": "Conditional Probability",
    "subtopic": [
        "Geometric Trials",
        "Three-Way Contingency Tables",
        "Sampling Without Replacement"
    ],
    "img": false,
    "question": "<strong>(a)</strong> A trainee technician attempts a complex precision calibration task. The probability that he completes the calibration successfully on any single attempt is a constant probability $p$, where $0 < p < 1$. Once he succeeds, no further attempts are made. The probability that he succeeds on his second attempt is $0.24$.<br>Given that $p < 0.50$:<br>&emsp;<strong>(i)</strong> find the value of $p$,<br>&emsp;<strong>(ii)</strong> find the probability that he requires all three attempts and succeeds on the third attempt.<br><br><strong>(b)</strong> A technology firm employs $60$ software engineers classified by primary programming language and working arrangement:<table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><tr style='border-bottom:1px solid #ccc;'><th style='padding:6px; text-align:left;'>Language</th><th style='padding:6px;'>Remote</th><th style='padding:6px;'>Office</th></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'><strong>Python</strong></td><td style='padding:6px;'>18</td><td style='padding:6px;'>10</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'><strong>Java</strong></td><td style='padding:6px;'>12</td><td style='padding:6px;'>8</td></tr><tr><td style='padding:6px; text-align:left;'><strong>C++</strong></td><td style='padding:6px;'>6</td><td style='padding:6px;'>6</td></tr></table>Two software engineers are selected at random without replacement to lead a pilot project. Given that the first engineer selected works Remotely, find the probability that both selected engineers specialise in Python.",
    "steps": [
        "<strong>(a)(i) Finding the value of $p$:</strong><br><br>Success on the second attempt requires failing the first attempt and succeeding on the second:\\begin{aligned} P(\\text{success on 2nd}) &= (1 - p)p \\cr 0.24 &= p - p^2 \\cr p^2 - p + 0.24 &= 0 \\cr (p - 0.4)(p - 0.6) &= 0 \\end{aligned}Since we are given that $p < 0.50$:\\begin{aligned} p = 0.4 \\end{aligned}",
        "<strong>(a)(ii) Probability of succeeding on the third attempt:</strong><br><br>This corresponds to failing the first two attempts and succeeding on the third:\\begin{aligned} P(\\text{fail, fail, pass}) &= (1 - p)^2 p \\cr &= (1 - 0.4)^2 \\times 0.4 \\cr &= (0.6)^2 \\times 0.4 \\cr &= 0.36 \\times 0.4 \\cr &= 0.144 \\end{aligned}",
        "<strong>(b) Conditional probability without replacement:</strong><br><br>Determine the totals from the transposed table:<br>• Total engineers: $60$<br>• Remote engineers: $18 + 12 + 6 = 36$<br>• Python engineers: $18 + 10 = 28$<br><br>Given that the first engineer works Remotely, the probability that this engineer specialises in Python is:\\begin{aligned} P(\\text{1st Python} \\mid \\text{1st Remote}) &= \\dfrac{18}{36}\\cr & = \\dfrac{1}{2} \\end{aligned}For the second selection, $27$ Python engineers remain out of $59$ total remaining engineers:\\begin{aligned} P(\\text{2nd Python} \\mid \\text{1st Python}) &= \\dfrac{27}{59} \\end{aligned}Multiplying these probabilities:\\begin{aligned} &P(\\text{both Python} \\mid \\text{1st Remote}) \\cr &\\quad = \\dfrac{1}{2} \\times \\dfrac{27}{59} \\cr &\\quad = \\dfrac{27}{118} \\end{aligned}",
        "Final Answer: (a)(i) $p = 0.4$, (ii) $0.144$, (b) $\\dfrac{27}{118}$"
    ],
    "pi_options": [
        {
            "ans": "(a)(i) $p = 0.6$, (ii) $0.144$, (b) $\\dfrac{27}{118}$",
            "feedback": "In part (a)(i), you chose the root $p = 0.6$, violating the given condition that $p < 0.50$."
        },
        {
            "ans": "(a)(i) $p = 0.4$, (ii) $0.216$, (b) $\\dfrac{27}{118}$",
            "feedback": "In part (a)(ii), you computed $(1 - p)^3 = (0.6)^3 = 0.216$, which is the probability of failing all three attempts rather than succeeding on the third attempt."
        },
        {
            "ans": "(a)(i) $p = 0.4$, (ii) $0.144$, (b) $\\dfrac{9}{59}$",
            "feedback": "In part (b), you used $\\dfrac{18}{60}$ as the initial probability instead of conditioning on the first engineer being Remote ($\\dfrac{18}{36}$)."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Transposed Contingency Tables",
        "content": "When reading tables where categories are arranged by row rather than column, always sum along the relevant row or column carefully before setting up conditional fractions. Here, summing the Remote column gives $18 + 12 + 6 = 36$, which forms the reduced sample space for the first pick."
    }
},
{
    "id": "050229",
    "group_id": "050226",
    "branch": "Statistics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Probability",
    "topic": "Conditional Probability",
    "subtopic": [
        "Law of Total Probability",
        "Bayes' Theorem",
        "Sampling Without Replacement"
    ],
    "img": false,
    "question": "<strong>(a)</strong> In a tennis tournament, a player is allowed up to two serves on each point. The probability that her first serve is in is $0.65$. If her first serve is in, the probability that she wins the point is $0.70$. If her first serve is out (a fault), she takes a second serve. The probability that her second serve is in is $0.80$. If her second serve is in, the probability that she wins the point is $0.45$. If her second serve is out (a double fault), she loses the point immediately.<br>&emsp;<strong>(i)</strong> Find the probability that the player wins the point on her serve.<br>&emsp;<strong>(ii)</strong> Given that the player won the point, find the probability that she won it on her second serve.<br><br><strong>(b)</strong> A Sixth Form college records the science subject chosen by $80$ students across two year groups:<table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><tr style='border-bottom:1px solid #ccc;'><th style='padding:6px; text-align:left;'>Subject</th><th style='padding:6px;'>Year 12</th><th style='padding:6px;'>Year 13</th></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'><strong>Physics</strong></td><td style='padding:6px;'>15</td><td style='padding:6px;'>10</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'><strong>Chemistry</strong></td><td style='padding:6px;'>12</td><td style='padding:6px;'>14</td></tr><tr><td style='padding:6px; text-align:left;'><strong>Biology</strong></td><td style='padding:6px;'>18</td><td style='padding:6px;'>11</td></tr></table>Two students are chosen at random without replacement to represent the college at a science fair. Given that the first student chosen is from Year 13, find the probability that both chosen students study Physics.",
    "steps": [
        "<strong>(a)(i) Overall probability of winning the point:</strong><br><br>The player can win the point via two mutually exclusive sequences:<br>• First serve in and win: $0.65 \\times 0.70 = 0.455$<br>• First serve out, second serve in and win: $$(1 - 0.65) \\times 0.80 \\times 0.45$$ $$= 0.35 \\times 0.80 \\times 0.45$$ $$= 0.126$$ Summing these probabilities:\\begin{aligned} P(\\text{win}) &= 0.455 + 0.126 \\cr &= 0.581 \\end{aligned}",
        "<strong>(a)(ii) Conditional probability of winning on second serve:</strong><br><br>Applying Bayes' theorem:\\begin{aligned} &P(\\text{2nd serve win} \\mid \\text{win}) \\cr &\\quad = \\dfrac{P(\\text{2nd serve win})}{P(\\text{win})} \\cr &\\quad = \\dfrac{0.126}{0.581} \\cr &\\quad = \\dfrac{126}{581} \\cr &\\quad = \\dfrac{18}{83} \\end{aligned}",
        "<strong>(b) Two selections without replacement:</strong><br><br>Total students: $80$.<br>• Total Year 13: $10 + 14 + 11 = 35$<br>• Total Physics: $15 + 10 = 25$<br><br>Given that the first student is from Year 13, the probability that this student studies Physics is:\\begin{aligned} P(\\text{1st Physics} \\mid \\text{1st Y13}) &= \\dfrac{10}{35} = \\dfrac{2}{7} \\end{aligned}For the second selection, $24$ Physics students remain out of $79$ total remaining students:\\begin{aligned} P(\\text{2nd Physics} \\mid \\text{1st Physics}) &= \\dfrac{24}{79} \\end{aligned}Multiplying these probabilities:\\begin{aligned} &P(\\text{both Physics} \\mid \\text{1st Y13}) \\cr &\\quad = \\dfrac{2}{7} \\times \\dfrac{24}{79} \\cr &\\quad = \\dfrac{48}{553} \\end{aligned}",
        "Final Answer: (a)(i) $0.581$, (ii) $\\dfrac{18}{83}$, (b) $\\dfrac{48}{553}$"
    ],
    "pi_options": [
        {
            "ans": "(a)(i) $0.581$, (ii) $0.126$, (b) $\\dfrac{48}{553}$",
            "feedback": "In part (a)(ii), you stated the joint probability $0.126$ rather than dividing by $P(\\text{win}) = 0.581$ to obtain the conditional probability."
        },
        {
            "ans": "(a)(i) $0.815$, (ii) $\\dfrac{18}{83}$, (b) $\\dfrac{48}{553}$",
            "feedback": "In part (a)(i), you did not account for the probability of faulting the first serve ($0.35$), erroneously adding $(0.65 \\times 0.70) + (0.80 \\times 0.45)$."
        },
        {
            "ans": "(a)(i) $0.581$, (ii) $\\dfrac{18}{83}$, (b) $\\dfrac{5}{56}$",
            "feedback": "In part (b), you sampled with replacement or calculated the joint unconditional probability over the full $80$ students instead of conditioning on Year 13."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Don't Forget the First Fault",
        "content": "In multi-stage service models, a very common error in part (a)(i) is multiplying $0.80 \\times 0.45$ without the preceding factor of $0.35$. The second serve is only taken when the first serve is a fault, so the branch probability must begin with $1 - 0.65 = 0.35$."
    }
},
{
    "id": "050230",
    "group_id": "050226",
    "branch": "Statistics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Probability",
    "topic": "Conditional Probability",
    "subtopic": [
        "Geometric Models",
        "Contingency Tables",
        "Complementary Events"
    ],
    "img": false,
    "question": "<strong>(a)</strong> A board game requires a player to roll a double six with two dice to begin play. With a pair of weighted dice, the probability of rolling a double six on any single throw is $p$. A player is allowed up to two throws to roll a double six, stopping immediately if successful on the first throw. The probability that the player begins play within the two throws is $\\frac{7}{16}$.<br>&emsp;<strong>(i)</strong> Show that $p = \\frac{1}{4}$.<br>&emsp;<strong>(ii)</strong> If the player is instead allowed up to three throws, find the probability that they roll their first double six on the third throw.<br><br><strong>(b)</strong> A veterinary clinic treats $50$ animals over a weekend, categorized by appointment type and species:<table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><tr style='border-bottom:1px solid #ccc;'><th style='padding:6px; text-align:left;'>Appointment</th><th style='padding:6px;'>Dog</th><th style='padding:6px;'>Cat</th></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'><strong>Routine</strong></td><td style='padding:6px;'>16</td><td style='padding:6px;'>14</td></tr><tr><td style='padding:6px; text-align:left;'><strong>Emergency</strong></td><td style='padding:6px;'>8</td><td style='padding:6px;'>12</td></tr></table>Two animal records are chosen at random without replacement.<br>&emsp;<strong>(i)</strong> Given that the first record chosen is an Emergency appointment, find the probability that both records chosen are for Dogs.<br>&emsp;<strong>(ii)</strong> Given that both records chosen are for Cats, find the probability that at least one of the two appointments was an Emergency appointment.",
    "steps": [
        "<strong>(a)(i) Showing $p = \\frac{1}{4}$:</strong><br><br>The probability of rolling a double six within two throws is:\\begin{aligned} &P(\\text{success}) \\cr &\\quad = p + (1 - p)p \\cr &\\quad = 2p - p^2 \\end{aligned}Setting this equal to $\\frac{7}{16}$:\\begin{aligned} &2p - p^2 = \\dfrac{7}{16} \\cr &32p - 16p^2 = 7 \\cr &16p^2 - 32p + 7 = 0 \\cr &(4p - 1)(4p - 7) = 0 \\end{aligned}Since $p$ is a probability, $p \\le 1$, rejecting $p = \\frac{7}{4}$ gives:\\begin{aligned} p = \\dfrac{1}{4} \\end{aligned}",
        "<strong>(a)(ii) Probability of success on the third throw:</strong><br><br>This requires two initial failures followed by a success:\\begin{aligned} P(\\text{fail, fail, pass}) &= (1 - p)^2 p \\cr &= \\left(1 - \\dfrac{1}{4}\\right)^2 \\times \\dfrac{1}{4} \\cr &= \\left(\\dfrac{3}{4}\\right)^2 \\times \\dfrac{1}{4} \\cr &= \\dfrac{9}{16} \\times \\dfrac{1}{4} \\cr &= \\dfrac{9}{64} \\end{aligned}",
        "<strong>(b)(i) Finding $P(\\text{both Dogs} \\mid \\text{1st Emergency})$:</strong><br><br>From the table:<br>• Emergency appointments: $8 + 12 = 20$<br>• Total Dogs: $16 + 8 = 24$<br><br>The first appointment is an Emergency Dog with conditional probability:\\begin{aligned} P(\\text{1st Dog} \\mid \\text{1st Emer}) &= \\dfrac{8}{20} = \\dfrac{2}{5} \\end{aligned}For the second selection, $23$ Dogs remain out of $49$ total remaining records:\\begin{aligned} P(\\text{2nd Dog} \\mid \\text{1st Dog}) &= \\dfrac{23}{49} \\end{aligned}Multiplying these probabilities:\\begin{aligned} &P(\\text{both Dogs} \\mid \\text{1st Emer}) \\cr &\\quad = \\dfrac{2}{5} \\times \\dfrac{23}{49} \\cr &\\quad = \\dfrac{46}{245} \\end{aligned}",
        "<strong>(b)(ii) Finding $P(\\ge 1\\text{ Emer} \\mid \\text{both Cats})$:</strong><br><br>There are $14 + 12 = 26$ Cats in total, of which $14$ are Routine and $12$ are Emergency.<br><br>We use the complementary probability of selecting two Routine appointments given both are Cats:\\begin{aligned} &P(\\text{both Rout} \\mid \\text{both Cats}) \\cr &\\quad = \\dfrac{14}{26} \\times \\dfrac{13}{25} \\cr &\\quad = \\dfrac{7}{13} \\times \\dfrac{13}{25} \\cr &\\quad = \\dfrac{7}{25} \\end{aligned}Subtracting from $1$:\\begin{aligned} &P(\\ge 1\\text{ Emer} \\mid \\text{both Cats}) \\cr &\\quad = 1 - \\dfrac{7}{25} \\cr &\\quad = \\dfrac{18}{25} \\end{aligned}",
        "Final Answer: (a)(i) $p = \\dfrac{1}{4}$, (ii) $\\dfrac{9}{64}$, (b)(i) $\\dfrac{46}{245}$, (ii) $\\dfrac{18}{25}$"
    ],
    "pi_options": [
        {
            "ans": "(a)(i) $p = \\dfrac{1}{4}$, (ii) $\\dfrac{27}{64}$, (b)(i) $\\dfrac{46}{245}$, (ii) $\\dfrac{18}{25}$",
            "feedback": "In part (a)(ii), you calculated $(1 - p)^3 = \\left(\\dfrac{3}{4}\\right)^3 = \\dfrac{27}{64}$, which is the probability of failing all three throws rather than succeeding on the third throw."
        },
        {
            "ans": "(a)(i) $p = \\dfrac{7}{4}$, (ii) $\\dfrac{9}{64}$, (b)(i) $\\dfrac{46}{245}$, (ii) $\\dfrac{18}{25}$",
            "feedback": "In part (a)(i), you selected the root $p = \\dfrac{7}{4} = 1.75$. Probabilities cannot be greater than $1$."
        },
        {
            "ans": "(a)(i) $p = \\dfrac{1}{4}$, (ii) $\\dfrac{9}{64}$, (b)(i) $\\dfrac{46}{245}$, (ii) $\\dfrac{7}{25}$",
            "feedback": "In part (b)(ii), $\\dfrac{7}{25}$ is the probability that both Cat appointments were Routine. To find the probability of at least one Emergency appointment, you must subtract this from $1$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Complementary Shortcut with Two Cats",
        "content": "For 'at least one' conditions within a restricted subpopulation, it is almost always faster to use $1 - P(\\text{none})$. In part (b)(ii), once we restrict to the $26$ Cats, the probability that neither is an Emergency appointment is simply the probability that both are Routine: $\\dfrac{14}{26} \\times \\dfrac{13}{25} = \\dfrac{7}{25}$. Subtracting from $1$ gives $\\dfrac{18}{25}$ immediately."
    }
},
{
    "id": "050231",
    "group_id": "050231",
    "branch": "Statistics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Continuous Distributions",
    "topic": "Continuous Uniform Distribution",
    "subtopic": [
        "Uniform Distribution Parameters",
        "Total Probability",
        "Conditional Probability"
    ],
    "img": false,
    "question": "Elena arrives at a harbour terminal at a random point in time to catch a passenger ferry across an estuary. The ferries are scheduled to depart at regular $15$-minute intervals.<br><br><strong>(a)</strong> Assume that Elena boards the next available ferry.<br>&emsp;<strong>(i)</strong> Suggest an appropriate distribution to model her waiting time, in minutes, and state its parameters.<br>&emsp;<strong>(ii)</strong> State the mean and the variance of this distribution.<br>&emsp;<strong>(iii)</strong> State an assumption you have made in proposing this model.<br><br><strong>(b)</strong> Now assume that the probability that Elena misses the next available ferry because she is purchasing a refreshment is $0.20$. If she misses the next ferry, she is certain to board the one after that.<br>&emsp;<strong>(i)</strong> Find the probability that her total waiting time is between $10$ and $22$ minutes.<br>&emsp;<strong>(ii)</strong> Given that she waits between $10$ and $22$ minutes, find the probability that she boards the first available ferry.",
    "steps": [
        "<strong>(a)(i) Suggesting the distribution:</strong><br><br>Since Elena arrives at a random point in time throughout the $15$-minute cycle, her waiting time $X$ is uniformly spread over the interval $[0, 15]$:<br><br>Continuous Uniform (Rectangular) distribution, $X \\sim U(0, 15)$, with lower parameter $a = 0$ and upper parameter $b = 15$.",
        "<strong>(a)(ii) Mean and variance:</strong><br><br>Using the standard formulas for $U(a, b)$:\\begin{aligned} \\text{E}(X) &= \\dfrac{a + b}{2} \\cr &= \\dfrac{0 + 15}{2} \\cr &= 7.5 \\end{aligned}For the variance:\\begin{aligned} \\text{Var}(X) &= \\dfrac{(b - a)^2}{12} \\cr &= \\dfrac{(15 - 0)^2}{12} \\cr &= \\dfrac{225}{12} \\cr &= 18.75 \\end{aligned}",
        "<strong>(a)(iii) Stating an assumption:</strong><br><br>Ferries depart strictly on schedule and Elena's arrival time is completely independent of the timetable (uniformly distributed over the interval).",
        "<strong>(b)(i) Probability total waiting time is between $10$ and $22$ minutes:</strong><br><br>Let $W \\sim U(0, 15)$ be the initial arrival wait.<br><br>Let $M'$ be the event that she boards the first ferry, with $P(M') = 0.80$, so her waiting time is $T = W$.<br><br>Let $M$ be the event that she misses the first ferry, with $P(M) = 0.20$, so her waiting time is $T = W + 15$.<br><br>Using the law of total probability:\\begin{aligned} &P(10 < T < 22) \\cr &\\quad = P(M') P(10 < W < 15) \\cr &\\qquad + P(M) P(10 < W + 15 < 22) \\cr &\\quad = 0.80 P(10 < W < 15) \\cr &\\qquad + 0.20 P(0 < W < 7) \\end{aligned}Evaluating the uniform probabilities with $f(w) = \\dfrac{1}{15}$:\\begin{aligned} &P(10 < T < 22) \\cr &\\quad = 0.80\\left(\\dfrac{5}{15}\\right) \\cr &\\qquad + 0.20\\left(\\dfrac{7}{15}\\right) \\cr &\\quad = \\dfrac{4}{15} + \\dfrac{1.4}{15} \\cr &\\quad = \\dfrac{5.4}{15} \\cr &\\quad = 0.36 \\end{aligned}",
        "<strong>(b)(ii) Conditional probability of boarding the first ferry:</strong><br><br>Applying the definition of conditional probability:\\begin{aligned} &P(\\text{1st ferry} \\mid 10 < T < 22) \\cr &\\quad = \\dfrac{P(M' \\cap 10 < T < 22)}{P(10 < T < 22)} \\cr &\\quad = \\dfrac{4 / 15}{5.4 / 15} \\cr &\\quad = \\dfrac{4}{5.4} \\cr &\\quad = \\dfrac{40}{54} \\cr &\\quad = \\dfrac{20}{27} \\end{aligned}",
        "Final Answer: (a)(i) $X \\sim U(0, 15)$, (ii) $\\text{E}(X) = 7.5$, $\\text{Var}(X) = 18.75$, (b)(i) $0.36$, (ii) $\\dfrac{20}{27}$"
    ],
    "pi_options": [
        {
            "ans": "(a)(i) $X \\sim U(0, 15)$, (ii) $\\text{E}(X) = 7.5$, $\\text{Var}(X) = 18.75$, (b)(i) $0.48$, (ii) $\\dfrac{20}{27}$",
            "feedback": "In part (b)(i), you evaluated $P(10 < W < 22)$ directly using a single uniform interval rather than conditioning on whether the first ferry was caught or missed."
        },
        {
            "ans": "(a)(i) $X \\sim U(0, 15)$, (ii) $\\text{E}(X) = 7.5$, $\\text{Var}(X) = 18.75$, (b)(i) $0.36$, (ii) $\\dfrac{4}{15}$",
            "feedback": "In part (b)(ii), you gave the joint probability $\\dfrac{4}{15} \\approx 0.267$ instead of dividing by the total probability $P(10 < T < 22) = 0.36$."
        },
        {
            "ans": "(a)(i) $X \\sim U(0, 15)$, (ii) $\\text{E}(X) = 7.5$, $\\text{Var}(X) = 15$, (b)(i) $0.36$, (ii) $\\dfrac{20}{27}$",
            "feedback": "In part (a)(ii), you computed the variance as $\\dfrac{15^2}{15} = 15$ instead of dividing by $12$: $\\text{Var}(X) = \\dfrac{15^2}{12} = 18.75$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Partitioning Waiting Times",
        "content": "Notice how the missing-ferry event creates two disjoint intervals for $T$: if Elena catches the first ferry, her wait is $W \\in [0, 15]$; if she misses it, her wait is $W + 15 \\in [15, 30]$. To find $P(10 < T < 22)$, split the interval into $[10, 15]$ for the first ferry and $[15, 22]$ for the second, weighting each by its respective probability."
    }
},
{
    "id": "050232",
    "group_id": "050231",
    "branch": "Statistics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Continuous Distributions",
    "topic": "Continuous Uniform Distribution",
    "subtopic": [
        "Probability Density Function",
        "Linear Transformations",
        "Conditional Probability"
    ],
    "img": false,
    "question": "The duration of a specialised chemical curing process, $T$ minutes, is modelled by a continuous uniform distribution over the interval $[12, 30]$.<br><br><strong>(a)</strong> Write down the probability density function, $f(t)$, for all values of $t$.<br><br><strong>(b)</strong> Find:<br>&emsp;<strong>(i)</strong> $\\text{E}(T)$ and $\\text{Var}(T)$,<br>&emsp;<strong>(ii)</strong> $\\text{P}(T > 24)$,<br>&emsp;<strong>(iii)</strong> the conditional probability $\\text{P}(T > 24 \\mid T > 18)$.<br><br><strong>(c)</strong> The operational cost of monitoring the curing process is given by $C = 4T + 15$ pounds.<br>Find the expected cost and the standard deviation of the cost.",
    "steps": [
        "<strong>(a) Probability density function $f(t)$:</strong><br><br>The width of the interval is $b - a = 30 - 12 = 18$. The constant density is $\\dfrac{1}{18}$:\\begin{aligned} f(t) = \\begin{cases} \\dfrac{1}{18} & 12 \\le t \\le 30 \\cr 0 & \\text{otherwise} \\end{cases} \\end{aligned}",
        "<strong>(b)(i) Finding $\\text{E}(T)$ and $\\text{Var}(T)$:</strong><br><br>Using the standard formulas for $U(a, b)$:\\begin{aligned} \\text{E}(T) &= \\dfrac{12 + 30}{2} \\cr &= 21 \\end{aligned}For the variance:\\begin{aligned} \\text{Var}(T) &= \\dfrac{(30 - 12)^2}{12} \\cr &= \\dfrac{18^2}{12} \\cr &= \\dfrac{324}{12} \\cr &= 27 \\end{aligned}",
        "<strong>(b)(ii) Finding $\\text{P}(T > 24)$:</strong><br><br>Using the uniform probability formula:\\begin{aligned} P(T > 24) &= \\dfrac{30 - 24}{18} \\cr &= \\dfrac{6}{18} \\cr &= \\dfrac{1}{3} \\end{aligned}",
        "<strong>(b)(iii) Finding $\\text{P}(T > 24 \\mid T > 18)$:</strong><br><br>Using the definition of conditional probability:\\begin{aligned} &P(T > 24 \\mid T > 18) \\cr &\\quad = \\dfrac{P(T > 24)}{P(T > 18)} \\cr &\\quad = \\dfrac{(30 - 24) / 18}{(30 - 18) / 18} \\cr &\\quad = \\dfrac{6 / 18}{12 / 18} \\cr &\\quad = \\dfrac{6}{12} \\cr &\\quad = 0.5 \\end{aligned}",
        "<strong>(c) Finding $\\text{E}(C)$ and $\\text{SD}(C)$:</strong><br><br>For expectation, applying linear properties:\\begin{aligned} \\text{E}(C) &= 4\\text{E}(T) + 15 \\cr &= 4(21) + 15 \\cr &= 84 + 15 \\cr &= 99 \\end{aligned}For the standard deviation:\\begin{aligned} \\text{SD}(C) &= 4\\sqrt{\\text{Var}(T)} \\cr &= 4\\sqrt{27} \\cr &= 4(3\\sqrt{3}) \\cr &= 12\\sqrt{3} \\cr &\\approx 20.78 \\end{aligned}",
        "Final Answer: (a) $f(t) = \\dfrac{1}{18}$, (b)(i) $21$ and $27$, (ii) $\\dfrac{1}{3}$, (iii) $0.5$, (c) $\\text{E}(C) = 99$, $\\text{SD}(C) = 12\\sqrt{3}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $f(t) = \\dfrac{1}{18}$, (b)(i) $21$ and $27$, (ii) $\\dfrac{1}{3}$, (iii) $0.5$, (c) $\\text{E}(C) = 99$, $\\text{SD}(C) = 432$",
            "feedback": "In part (c), $432$ is the variance $\\text{Var}(C) = 16 \\times 27$. The question asks for the standard deviation, so you must take the square root: $\\sqrt{432} = 12\\sqrt{3}$."
        },
        {
            "ans": "(a) $f(t) = \\dfrac{1}{18}$, (b)(i) $21$ and $27$, (ii) $\\dfrac{1}{3}$, (iii) $\\dfrac{1}{3}$, (c) $\\text{E}(C) = 99$, $\\text{SD}(C) = 12\\sqrt{3}$",
            "feedback": "In part (b)(iii), you assumed that the continuous uniform distribution is memoryless. It is not; the condition $T > 18$ truncates the domain to $[18, 30]$, giving $\\dfrac{30 - 24}{30 - 18} = 0.5$."
        },
        {
            "ans": "(a) $f(t) = \\dfrac{1}{18}$, (b)(i) $21$ and $18$, (ii) $\\dfrac{1}{3}$, (iii) $0.5$, (c) $\\text{E}(C) = 99$, $\\text{SD}(C) = 12\\sqrt{3}$",
            "feedback": "In part (b)(i), you divided $18^2$ by $18$ instead of by $12$. The variance formula for a continuous uniform distribution has a fixed denominator of $12$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Uniform Distributions Have Memory",
        "content": "Unlike the exponential distribution, the continuous uniform distribution is not memoryless. When given $T > 18$, the remaining time is uniformly distributed over the shortened interval $[18, 30]$ of width $12$. Hence \\begin{aligned}P(T > 24 \\mid T > 18) &= \\dfrac{30 - 24}{30 - 18}\\cr & = \\dfrac{6}{12} \\cr & = 0.5\\end{aligned}"
    }
},
{
    "id": "050233",
    "group_id": "050231",
    "branch": "Statistics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Continuous Distributions",
    "topic": "Continuous Uniform Distribution",
    "subtopic": [
        "Symmetric Uniform Distributions",
        "Non-linear Functions",
        "Expectation of Squared Variables"
    ],
    "img": false,
    "question": "In a precision engineering workshop, components are cut to nominal lengths. The measurement error, $X\\text{ mm}$, is modelled by a continuous uniform distribution on the interval $[-0.5, 0.5]$.<br><br><strong>(a)</strong> State:<br>&emsp;<strong>(i)</strong> $\\text{E}(X)$,<br>&emsp;<strong>(ii)</strong> $\\text{Var}(X)$.<br><br><strong>(b)</strong> Find the probability that a randomly chosen component has a measurement error:<br>&emsp;<strong>(i)</strong> greater than $0.2\\text{ mm}$,<br>&emsp;<strong>(ii)</strong> with a magnitude (absolute value) greater than $0.35\\text{ mm}$.<br><br><strong>(c)</strong> A square metal plate is designed to have a side length of $20\\text{ mm}$. Due to measurement error, the actual side length is $Y = 20 + X\\text{ mm}$. The recorded area of the plate is $A = Y^2\\text{ mm}^2$.<br>&emsp;<strong>(i)</strong> Expand $(20 + X)^2$ and hence determine the expected area, $\\text{E}(A)$.<br>&emsp;<strong>(ii)</strong> Explain why the expected area is strictly greater than the nominal area of $400\\text{ mm}^2$.",
    "steps": [
        "<strong>(a)(i) Finding $\\text{E}(X)$:</strong><br><br>By symmetry about zero:\\begin{aligned} \\text{E}(X) &= \\dfrac{-0.5 + 0.5}{2} \\cr &= 0 \\end{aligned}",
        "<strong>(a)(ii) Finding $\\text{Var}(X)$:</strong><br><br>The width of the interval is $0.5 - (-0.5) = 1$:\\begin{aligned} \\text{Var}(X) &= \\dfrac{1^2}{12} \\cr &= \\dfrac{1}{12} \\end{aligned}",
        "<strong>(b)(i) Probability error is greater than $0.2$:</strong><br><br>Since the total width is $1$:\\begin{aligned} P(X > 0.2) &= \\dfrac{0.5 - 0.2}{1} \\cr &= 0.3 \\end{aligned}",
        "<strong>(b)(ii) Probability magnitude is greater than $0.35$:</strong><br><br>The event $|X| > 0.35$ means $X > 0.35$ or $X < -0.35$:\\begin{aligned} &P(|X| > 0.35) \\cr &\\quad = P(X > 0.35) \\cr &\\qquad + P(X < -0.35) \\cr &\\quad = (0.5 - 0.35) \\cr &\\qquad + (-0.35 - (-0.5)) \\cr &\\quad = 0.15 + 0.15 \\cr &\\quad = 0.3 \\end{aligned}",
        "<strong>(c)(i) Expanding and finding $\\text{E}(A)$:</strong><br><br>Expanding the area expression:\\begin{aligned} A &= (20 + X)^2 \\cr &= 400 + 40X + X^2 \\end{aligned}Taking expectations:\\begin{aligned} \\text{E}(A) &= \\text{E}(400 + 40X + X^2) \\cr &= 400 + 40\\text{E}(X) + \\text{E}(X^2) \\end{aligned}Since $\\text{E}(X) = 0$, we have $\\text{E}(X^2) = \\text{Var}(X) + [\\text{E}(X)]^2 = \\dfrac{1}{12}$:\\begin{aligned} \\text{E}(A) &= 400 + 0 + \\dfrac{1}{12} \\cr &= 400\\dfrac{1}{12} \\quad (\\approx 400.083) \\end{aligned}",
        "<strong>(c)(ii) Explanation of positive bias:</strong><br><br>Because $\\text{Var}(X) > 0$, the squared error term $X^2$ is strictly positive for all non-zero errors. Therefore, its expectation $\\text{E}(X^2) = \\dfrac{1}{12}$ systematically increases the expected area above the nominal area.",
        "Final Answer: (a)(i) $0$, (ii) $\\dfrac{1}{12}$, (b)(i) $0.3$, (ii) $0.3$, (c)(i) $400\\dfrac{1}{12}$"
    ],
    "pi_options": [
        {
            "ans": "(a)(i) $0$, (ii) $\\dfrac{1}{12}$, (b)(i) $0.3$, (ii) $0.15$, (c)(i) $400\\dfrac{1}{12}$",
            "feedback": "In part (b)(ii), $0.15$ accounts for only the upper tail $X > 0.35$. Because the condition involves magnitude $|X| > 0.35$, you must also include the symmetric lower tail $X < -0.35$."
        },
        {
            "ans": "(a)(i) $0$, (ii) $\\dfrac{1}{12}$, (b)(i) $0.3$, (ii) $0.3$, (c)(i) $400$",
            "feedback": "In part (c)(i), you assumed $\\text{E}(Y^2) = [\\text{E}(Y)]^2 = 20^2 = 400$. In general, $\\text{E}(Y^2) = [\\text{E}(Y)]^2 + \\text{Var}(Y)$, so the non-zero variance adds $\\dfrac{1}{12}$ to the expected area."
        },
        {
            "ans": "(a)(i) $0$, (ii) $\\dfrac{1}{6}$, (b)(i) $0.3$, (ii) $0.3$, (c)(i) $400\\dfrac{1}{6}$",
            "feedback": "In part (a)(ii), you computed the variance with a denominator of $6$ instead of $12$. The variance of $U(-0.5, 0.5)$ is $\\dfrac{1^2}{12} = \\dfrac{1}{12}$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Jensen's Inequality in Area Models",
        "content": "A classic theoretical question asks why $\\text{E}(Y^2) > [\\text{E}(Y)]^2$. Because squaring is a strictly convex function, $\\text{E}(Y^2) = [\\text{E}(Y)]^2 + \\text{Var}(Y)$. Any uncertainty in measuring the side length introduces a positive bias into the expected area."
    }
},
{
    "id": "050234",
    "group_id": "050231",
    "branch": "Statistics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Continuous Distributions",
    "topic": "Continuous Uniform Distribution",
    "subtopic": [
        "Uniform to Binomial Bridge",
        "Binomial Probability Calculations",
        "Complement Rule"
    ],
    "img": false,
    "question": "The duration of customer technical support calls, $T$ minutes, is modelled by a continuous uniform distribution over the interval $[0, 8]$.<br><br><strong>(a)</strong> Write down the probability density function of $T$.<br><br><strong>(b)</strong> Find the probability that a randomly chosen call lasts:<br>&emsp;<strong>(i)</strong> more than $6$ minutes,<br>&emsp;<strong>(ii)</strong> between $2$ and $5$ minutes.<br><br><strong>(c)</strong> A quality auditor monitors a random sample of $10$ independent customer support calls.<br>Let $Y$ denote the number of calls in the sample that last more than $6$ minutes.<br>&emsp;<strong>(i)</strong> State the distribution of $Y$, including its parameters.<br>&emsp;<strong>(ii)</strong> Find the probability that exactly $3$ of the $10$ calls last more than $6$ minutes. Give your answer to four decimal places.<br>&emsp;<strong>(iii)</strong> Find the probability that at least $2$ of the $10$ calls last more than $6$ minutes. Give your answer to four decimal places.",
    "steps": [
        "<strong>(a) Probability density function:</strong><br><br>The constant density on $[0, 8]$ is $\\dfrac{1}{8 - 0} = 0.125$:\\begin{aligned} f(t) = \\begin{cases} 0.125 & 0 \\le t \\le 8 \\cr 0 & \\text{otherwise} \\end{cases} \\end{aligned}",
        "<strong>(b)(i) Probability a call lasts more than $6$ minutes:</strong><br><br>Using the uniform distribution:\\begin{aligned} P(T > 6) &= \\dfrac{8 - 6}{8} \\cr &= \\dfrac{2}{8} \\cr &= 0.25 \\end{aligned}",
        "<strong>(b)(ii) Probability a call lasts between $2$ and $5$ minutes:</strong><br><br>Evaluating the interval probability:\\begin{aligned} P(2 < T < 5) &= \\dfrac{5 - 2}{8} \\cr &= \\dfrac{3}{8} \\cr &= 0.375 \\end{aligned}",
        "<strong>(c)(i) Distribution of $Y$:</strong><br><br>Since there are $n = 10$ independent trials and the probability of success on each trial is $p = 0.25$:\\begin{aligned} Y \\sim B(10, 0.25) \\end{aligned}",
        "<strong>(c)(ii) Probability of exactly $3$ calls:</strong><br><br>Applying the binomial probability formula:\\begin{aligned} P(Y = 3) &= \\binom{10}{3} (0.25)^3 (0.75)^7 \\cr &= 120 \\times 0.015625 \\cr &\\qquad \\times 0.133484 \\cr &\\approx 0.2503 \\end{aligned}",
        "<strong>(c)(iii) Probability of at least $2$ calls:</strong><br><br>Using the complement rule:\\begin{aligned} &P(Y \\ge 2)\\cr &= 1 - [P(Y = 0) + P(Y = 1)] \\end{aligned}Calculating the individual probabilities:\\begin{aligned} P(Y = 0) &= (0.75)^{10} \\cr &\\approx 0.05631 \\end{aligned}\\begin{aligned} P(Y = 1) &= 10(0.25)(0.75)^9 \\cr &\\approx 0.18771 \\end{aligned}Summing and subtracting from $1$:\\begin{aligned} P(Y \\ge 2) &= 1 - [0.05631 + 0.18771] \\cr &= 1 - 0.24402 \\cr &= 0.7560 \\end{aligned}",
        "Final Answer: (a) $f(t) = 0.125$, (b)(i) $0.25$, (ii) $0.375$, (c)(i) $Y \\sim B(10, 0.25)$, (ii) $0.2503$, (iii) $0.7560$"
    ],
    "pi_options": [
        {
            "ans": "(a) $f(t) = 0.125$, (b)(i) $0.25$, (ii) $0.375$, (c)(i) $Y \\sim B(10, 0.25)$, (ii) $0.2503$, (iii) $0.2440$",
            "feedback": "In part (c)(iii), $0.2440$ is $P(Y \\le 1)$. To find the probability of at least $2$ calls, you must subtract this from $1$."
        },
        {
            "ans": "(a) $f(t) = 0.125$, (b)(i) $0.25$, (ii) $0.375$, (c)(i) $Y \\sim B(10, 0.25)$, (ii) $0.0751$, (iii) $0.7560$",
            "feedback": "In part (c)(ii), you omitted the binomial coefficient $\\binom{10}{3} = 120$, evaluating $(0.25)^3 (0.75)^7$ only."
        },
        {
            "ans": "(a) $f(t) = 0.125$, (b)(i) $0.75$, (ii) $0.375$, (c)(i) $Y \\sim B(10, 0.75)$, (ii) $0.2503$, (iii) $0.7560$",
            "feedback": "In part (b)(i), you found $P(T < 6) = \\dfrac{6}{8} = 0.75$ instead of $P(T > 6) = \\dfrac{8 - 6}{8} = 0.25$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Bridging Continuous and Discrete Distributions",
        "content": "Examination boards frequently connect continuous distributions with the Binomial distribution. The continuous uniform distribution provides the single-trial success probability $p = P(T > 6) = 0.25$, which then acts as the parameter for a discrete sample of size $n = 10$."
    }
},
{
    "id": "050235",
    "group_id": "050231",
    "branch": "Statistics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Continuous Distributions",
    "topic": "Continuous Uniform Distribution",
    "subtopic": [
        "Truncated Uniform Distributions",
        "Linear Transformations",
        "Conditional Expectation and Variance"
    ],
    "img": false,
    "question": "An automated sorting facility processes parcel weights, $W\\text{ kg}$, which are uniformly distributed over the interval $[2, 10]$.<br>• Parcels with $W \\le 4$ are routed to Conveyor 1.<br>• Parcels with $4 < W \\le 8$ are routed to Conveyor 2.<br>• Parcels with $W > 8$ are routed to the Heavy Goods Station.<br><br><strong>(a)</strong> Find the probability that a randomly selected parcel:<br>&emsp;<strong>(i)</strong> is routed to Conveyor 1,<br>&emsp;<strong>(ii)</strong> is routed to Conveyor 2,<br>&emsp;<strong>(iii)</strong> is routed to the Heavy Goods Station.<br><br><strong>(b)</strong> Parcels routed to Conveyor 2 undergo an automated scanning check. The time taken to scan a parcel, $S$ seconds, depends linearly on its weight: $S = 3W + 5$.<br>Given that a parcel is routed to Conveyor 2:<br>&emsp;<strong>(i)</strong> state the conditional distribution of its weight, $W$,<br>&emsp;<strong>(ii)</strong> find the expected scanning time, $\\text{E}(S)$,<br>&emsp;<strong>(iii)</strong> find the variance of the scanning time, $\\text{Var}(S)$.",
    "steps": [
        "<strong>(a) Routing probabilities:</strong><br><br>The parcel weight is $W \\sim U(2, 10)$ with interval width $10 - 2 = 8$.<br><br><strong>(i)</strong> Conveyor 1:\\begin{aligned} P(W \\le 4) &= \\dfrac{4 - 2}{8} \\cr &= \\dfrac{2}{8} \\cr &= 0.25 \\end{aligned}<strong>(ii)</strong> Conveyor 2:\\begin{aligned} P(4 < W \\le 8) &= \\dfrac{8 - 4}{8} \\cr &= \\dfrac{4}{8} \\cr &= 0.5 \\end{aligned}<strong>(iii)</strong> Heavy Goods Station:\\begin{aligned} P(W > 8) &= \\dfrac{10 - 8}{8} \\cr &= \\dfrac{2}{8} \\cr &= 0.25 \\end{aligned}",
        "<strong>(b)(i) Conditional distribution of $W$:</strong><br><br>Given that the parcel is on Conveyor 2, its weight is restricted to the interval $[4, 8]$. Since the density was constant over $[2, 10]$, it remains constant over $[4, 8]$:<br><br>$W \\mid \\text{Conveyor 2} \\sim U(4, 8)$.",
        "<strong>(b)(ii) Expected scanning time $\\text{E}(S)$:</strong><br><br>For $W \\sim U(4, 8)$:\\begin{aligned} \\text{E}(W) &= \\dfrac{4 + 8}{2} \\cr &= 6 \\end{aligned}Using linear properties of expectation:\\begin{aligned} \\text{E}(S) &= 3\\text{E}(W) + 5 \\cr &= 3(6) + 5 \\cr &= 18 + 5 \\cr &= 23 \\end{aligned}",
        "<strong>(b)(iii) Variance of the scanning time $\\text{Var}(S)$:</strong><br><br>For $W \\sim U(4, 8)$, the variance is:\\begin{aligned} \\text{Var}(W) &= \\dfrac{(8 - 4)^2}{12} \\cr &= \\dfrac{16}{12} \\cr &= \\dfrac{4}{3} \\end{aligned}Using the variance transformation rule $\\text{Var}(aW + b) = a^2 \\text{Var}(W)$:\\begin{aligned} \\text{Var}(S) &= 3^2 \\text{Var}(W) \\cr &= 9 \\times \\dfrac{4}{3} \\cr &= 12 \\end{aligned}",
        "Final Answer: (a)(i) $0.25$, (ii) $0.5$, (iii) $0.25$, (b)(i) $U(4, 8)$, (ii) $23$, (iii) $12$"
    ],
    "pi_options": [
        {
            "ans": "(a)(i) $0.25$, (ii) $0.5$, (iii) $0.25$, (b)(i) $U(4, 8)$, (ii) $23$, (iii) $4$",
            "feedback": "In part (b)(iii), you multiplied $\\text{Var}(W)$ by $3$ instead of $3^2 = 9$. Remember that $\\text{Var}(aW + b) = a^2 \\text{Var}(W)$."
        },
        {
            "ans": "(a)(i) $0.25$, (ii) $0.5$, (iii) $0.25$, (b)(i) $U(2, 10)$, (ii) $23$, (iii) $12$",
            "feedback": "In part (b)(i), you stated the unconditional distribution $U(2, 10)$. Given that the parcel is on Conveyor 2, its weight is restricted to the interval $[4, 8]$, so the conditional distribution is $U(4, 8)$."
        },
        {
            "ans": "(a)(i) $0.25$, (ii) $0.5$, (iii) $0.25$, (b)(i) $U(4, 8)$, (ii) $23$, (iii) $17$",
            "feedback": "In part (b)(iii), you added the constant $5$ to the variance. Adding a constant shifts the distribution but does not change its spread: $\\text{Var}(aW + b) = a^2 \\text{Var}(W)$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Truncation Preserves Uniformity",
        "content": "A crucial property of the continuous uniform distribution is that conditioning on a sub-interval simply creates a new continuous uniform distribution over that sub-interval. Truncating $W \\sim U(2, 10)$ to $4 < W \\le 8$ directly yields $W \\sim U(4, 8)$."
    }
},
{
    "id": "050236",
    "group_id": "050236",
    "branch": "Statistics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Continuous Distributions",
    "topic": "Normal Distribution",
    "subtopic": [
        "Statistical Modelling",
        "Expected Frequencies",
        "Model Evaluation"
    ],
    "img": false,
    "question": "A transport planner investigates the daily commuting times of office workers in a metropolitan district. She records the daily commuting time, $t$ minutes, for $100$ randomly selected workers:<table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><tr style='border-bottom:1px solid #ccc;'><th style='padding:6px; text-align:left;'>Commuting time, $t$ (min)</th><th style='padding:6px;'>Number of workers</th></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>$t < 20$</td><td style='padding:6px;'>6</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>$20 \\le t < 30$</td><td style='padding:6px;'>14</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>$30 \\le t < 40$</td><td style='padding:6px;'>22</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>$40 \\le t < 50$</td><td style='padding:6px;'>26</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>$50 \\le t < 60$</td><td style='padding:6px;'>18</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>$60 \\le t < 70$</td><td style='padding:6px;'>10</td></tr><tr><td style='padding:6px; text-align:left;'>$t \\ge 70$</td><td style='padding:6px;'>4</td></tr></table><strong>(a)</strong> Explain why a normal distribution may be an appropriate model for the commuting times in this sample.<br><br>The planner uses the distribution $\\text{N}(44, 14^2)$ to model the commuting times.<br><br><strong>(b)</strong> Find the number of workers in the sample that this model would predict to have a daily commuting time in the range:<br>&emsp;<strong>(i)</strong> $40 \\le t < 50$,<br>&emsp;<strong>(ii)</strong> $t \\ge 70$.<br><br><strong>(c)</strong> Use your answers to part <strong>(b)</strong>:<br>&emsp;<strong>(i)</strong> to comment on the suitability of this model,<br>&emsp;<strong>(ii)</strong> to explain how the planner could improve the model by changing one of its parameters.<br><br><strong>(d)</strong> A colleague wishes to use the improved model to predict the commuting times of workers in a remote rural district. Comment on this plan.",
    "steps": [
        "<strong>(a) Justifying the model choice:</strong><br><br>The observed frequencies are unimodal and roughly symmetrical, peaking in the central modal interval $40 \\le t < 50$ ($26$ workers) and decreasing smoothly into both tails.",
        "<strong>(b)(i) Expected frequency for $40 \\le t < 50$:</strong><br><br>Standardising under $T \\sim \\text{N}(44, 14^2)$:\\begin{aligned} &P(40 \\le T < 50) \\cr &\\quad = P\\left(\\dfrac{40 - 44}{14} \\le Z < \\dfrac{50 - 44}{14}\\right) \\cr &\\quad = P(-0.286 \\le Z < 0.429) \\cr &\\quad = \\Phi(0.429) - \\Phi(-0.286) \\cr &\\quad = 0.6659 - (1 - 0.6124) \\cr &\\quad = 0.6659 - 0.3876 \\cr &\\quad = 0.2783 \\end{aligned}Multiplying by the sample size $N = 100$:\\begin{aligned} 100 \\times 0.2783 &= 27.83 \\cr &\\approx 28 \\end{aligned}",
        "<strong>(b)(ii) Expected frequency for $t \\ge 70$:</strong><br><br>Standardising the upper tail:\\begin{aligned} P(T \\ge 70) &= P\\left(Z \\ge \\dfrac{70 - 44}{14}\\right) \\cr &= P(Z \\ge 1.857) \\cr &= 1 - \\Phi(1.857) \\cr &= 1 - 0.9683 \\cr &= 0.0317 \\end{aligned}Multiplying by $N = 100$:\\begin{aligned} 100 \\times 0.0317 &= 3.17 \\cr &\\approx 3 \\end{aligned}",
        "<strong>(c)(i) Comment on model suitability:</strong><br><br>The model is suitable because the predicted frequencies ($28$ and $3$) closely match the observed frequencies ($26$ and $4$).",
        "<strong>(c)(ii) Improving the model:</strong><br><br>The planner could calculate the sample mean and sample standard deviation directly from the grouped frequency table and update $\\mu$ and $\\sigma$ accordingly.",
        "<strong>(d) Comment on transferring the model:</strong><br><br>The model is unsuitable for a rural district because commuting distances, transport modes, and traffic conditions in rural areas differ substantially from metropolitan areas.",
        "Final Answer: (b)(i) $28$, (ii) $3$"
    ],
    "pi_options": [
        {
            "ans": "(b)(i) $26$, (ii) $4$",
            "feedback": "These values are the observed frequencies from the table, not the predicted frequencies generated by the normal model $\\text{N}(44, 14^2)$."
        },
        {
            "ans": "(b)(i) $28$, (ii) $7$",
            "feedback": "In part (b)(ii), you may have used $\\Phi(1.857)$ or an incorrect tail probability calculation rather than $1 - \\Phi(1.857) = 0.0317$."
        },
        {
            "ans": "(b)(i) $35$, (ii) $3$",
            "feedback": "In part (b)(i), you evaluated $\\Phi(0.429) - 0.5 = 0.1659$ or omitted the lower tail below the mean, leading to an incorrect predicted count."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Transposing Wide Tables",
        "content": "Notice how the original frequency table has been transposed so that categories run down rows rather than across columns. When auditing data tables on portrait screens, keeping categories vertical ensures that boundary signs and numbers remain fully legible without horizontal scrolling."
    }
},
{
    "id": "050237",
    "group_id": "050236",
    "branch": "Statistics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Continuous Distributions",
    "topic": "Normal Distribution",
    "subtopic": [
        "Finding Unknown Parameters",
        "Simultaneous Equations",
        "Binomial Combination"
    ],
    "img": false,
    "question": "A manufacturer of electric vehicle batteries models the full-charge driving range, $X\\text{ km}$, as a normal distribution $\\text{N}(\\mu, \\sigma^2)$. Quality control testing reveals that $10\\%$ of the batteries achieve a range of less than $380\\text{ km}$, whilst $5\\%$ of the batteries achieve a range of more than $460\\text{ km}$.<br><br><strong>(a)</strong> Write down two simultaneous equations in $\\mu$ and $\\sigma$.<br><br><strong>(b)</strong> Find the values of $\\mu$ and $\\sigma$, giving each value to three significant figures.<br><br><strong>(c)</strong> Batteries with a range of less than $370\\text{ km}$ are classed as sub-standard and must be recycled. Find the percentage of batteries that must be recycled.<br><br><strong>(d)</strong> A random sample of $5$ batteries is selected independently from the production line. Find the probability that exactly one battery has a range greater than $450\\text{ km}$.",
    "steps": [
        "<strong>(a) Setting up simultaneous equations:</strong><br><br>For the lower tail $P(X < 380) = 0.10$:\\begin{aligned} \\dfrac{380 - \\mu}{\\sigma} &= -1.2816 \\cr 380 &= \\mu - 1.2816\\sigma \\end{aligned}For the upper tail $P(X > 460) = 0.05$:\\begin{aligned} \\dfrac{460 - \\mu}{\\sigma} &= 1.6449 \\cr 460 &= \\mu + 1.6449\\sigma \\end{aligned}",
        "<strong>(b) Solving for $\\mu$ and $\\sigma$:</strong><br><br>Subtracting the first equation from the second:\\begin{aligned} 460 - 380 &= 2.9265\\sigma \\cr 80 &= 2.9265\\sigma \\cr \\sigma &= \\dfrac{80}{2.9265} \\cr &\\approx 27.336 \\cr &\\approx 27.3\\text{ km} \\end{aligned}Substituting $\\sigma$ back to find $\\mu$:\\begin{aligned} \\mu &= 460 - 1.6449(27.336) \\cr &= 460 - 44.965 \\cr &\\approx 415.035 \\cr &\\approx 415\\text{ km} \\end{aligned}",
        "<strong>(c) Percentage of batteries to be recycled:</strong><br><br>Standardising for $X < 370$ using unrounded values:\\begin{aligned} Z &= \\dfrac{370 - 415.035}{27.336} \\cr &\\approx -1.648 \\end{aligned}Evaluating the tail probability:\\begin{aligned} P(Z < -1.648) &= 1 - \\Phi(1.648) \\cr &= 1 - 0.9503 \\cr &= 0.0497 \\cr &= 4.97\\% \\end{aligned}",
        "<strong>(d) Binomial probability for a sample of $5$:</strong><br><br>First, find the probability that a single battery exceeds $450\\text{ km}$:\\begin{aligned} Z &= \\dfrac{450 - 415.035}{27.336} \\cr &\\approx 1.279 \\end{aligned}\\begin{aligned} p &= 1 - \\Phi(1.279) \\cr &= 1 - 0.8995 \\cr &= 0.1005 \\end{aligned}Let $Y \\sim B(5, 0.1005)$ denote the number of such batteries:\\begin{aligned} P(Y = 1) &= \\binom{5}{1} (0.1005)^1 (0.8995)^4 \\cr &= 5 \\times 0.1005 \\times 0.6547 \\cr &\\approx 0.329 \\end{aligned}",
        "Final Answer: (b) $\\mu = 415\\text{ km}$, $\\sigma = 27.3\\text{ km}$, (c) $4.97\\%$, (d) $0.329$"
    ],
    "pi_options": [
        {
            "ans": "(b) $\\mu = 415\\text{ km}$, $\\sigma = 27.3\\text{ km}$, (c) $4.97\\%$, (d) $0.101$",
            "feedback": "In part (d), $0.101$ is the single-battery probability $p = P(X > 450)$. You must evaluate the binomial probability for $1$ battery out of $5$: $\\binom{5}{1} p (1 - p)^4$."
        },
        {
            "ans": "(b) $\\mu = 420\\text{ km}$, $\\sigma = 24.3\\text{ km}$, (c) $4.97\\%$, (d) $0.329$",
            "feedback": "In part (a), you used positive $z$-scores for both tails, forgetting that a lower tail of $10\\%$ requires a negative $z$-value: $z = -1.2816$."
        },
        {
            "ans": "(b) $\\mu = 415\\text{ km}$, $\\sigma = 27.3\\text{ km}$, (c) $9.94\\%$, (d) $0.329$",
            "feedback": "In part (c), you doubled the tail probability, treating the condition as two-tailed rather than strictly $X < 370$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Signs in Inverse Normal Tail Values",
        "content": "A frequent sign error occurs when writing the equation for a lower tail like $P(X < 380) = 0.10$. Because $380$ lies below the mean, the standardised value must be negative: $z = -1.2816$. Forgetting this negative sign will produce an impossible negative or inflated standard deviation."
    }
},
{
    "id": "050238",
    "group_id": "050236",
    "branch": "Statistics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Continuous Distributions",
    "topic": "Normal Distribution",
    "subtopic": [
        "Normal Approximation to Binomial",
        "Continuity Correction",
        "Interval Probabilities"
    ],
    "img": false,
    "question": "A commercial seed merchant claims that $65\\%$ of its heirloom tomato seeds successfully germinate under standard nursery conditions. A grower sows a random sample of $200$ seeds. Let $X$ denote the number of seeds that successfully germinate.<br><br><strong>(a)</strong> State why a normal approximation to the distribution of $X$ is appropriate in this case.<br><br><strong>(b)</strong> Specify the mean and the variance of the approximating normal distribution.<br><br><strong>(c)</strong> Using the normal approximation with a continuity correction, find the probability that:<br>&emsp;<strong>(i)</strong> at least $140$ seeds germinate,<br>&emsp;<strong>(ii)</strong> between $120$ and $135$ seeds germinate (inclusive).",
    "steps": [
        "<strong>(a) Justifying the normal approximation:</strong><br><br>Here $X \\sim B(200, 0.65)$. The sample size $n = 200$ is large, and neither $p = 0.65$ nor $q = 0.35$ is close to $0$ or $1$ ($np = 130 > 5$ and $nq = 70 > 5$).",
        "<strong>(b) Specifying parameters:</strong><br><br>Calculating the mean and variance:\\begin{aligned} \\mu &= np \\cr &= 200 \\times 0.65 \\cr &= 130 \\end{aligned}\\begin{aligned} \\sigma^2 &= np(1 - p) \\cr &= 200 \\times 0.65 \\times 0.35 \\cr &= 45.5 \\end{aligned}Hence $Y \\sim \\text{N}(130, 45.5)$, with $\\sigma = \\sqrt{45.5} \\approx 6.745$.",
        "<strong>(c)(i) Probability of at least $140$ seeds:</strong><br><br>Applying the continuity correction for $X \\ge 140$ gives $Y \\ge 139.5$:\\begin{aligned} P(X \\ge 140) &\\approx P(Y \\ge 139.5) \\cr &= P\\left(Z \\ge \\dfrac{139.5 - 130}{6.745}\\right) \\cr &= P(Z \\ge 1.408) \\cr &= 1 - \\Phi(1.408) \\cr &= 1 - 0.9205 \\cr &= 0.0795 \\end{aligned}",
        "<strong>(c)(ii) Probability between $120$ and $135$ seeds (inclusive):</strong><br><br>Applying continuity corrections for $120 \\le X \\le 135$ gives $119.5 \\le Y \\le 135.5$:\\begin{aligned} Z_1 &= \\dfrac{119.5 - 130}{6.745} \\cr &= -1.557 \\end{aligned}\\begin{aligned} Z_2 &= \\dfrac{135.5 - 130}{6.745} \\cr &= 0.815 \\end{aligned}Evaluating the interval probability:\\begin{aligned} &P(-1.557 \\le Z \\le 0.815) \\cr &\\quad = \\Phi(0.815) - \\Phi(-1.557) \\cr &\\quad = 0.7925 - (1 - 0.9402) \\cr &\\quad = 0.7925 - 0.0598 \\cr &\\quad = 0.7328 \\end{aligned}",
        "Final Answer: (b) $\\mu = 130$, $\\sigma^2 = 45.5$, (c)(i) $0.0795$, (ii) $0.7328$"
    ],
    "pi_options": [
        {
            "ans": "(b) $\\mu = 130$, $\\sigma^2 = 45.5$, (c)(i) $0.0694$, (ii) $0.7328$",
            "feedback": "In part (c)(i), you used $140.5$ instead of $139.5$ for the continuity correction. 'At least $140$' includes $140$, so the continuous interval must start at $139.5$."
        },
        {
            "ans": "(b) $\\mu = 130$, $\\sigma^2 = 45.5$, (c)(i) $0.0795$, (ii) $0.7012$",
            "feedback": "In part (c)(ii), you applied the continuity corrections in the wrong direction ($120.5$ and $134.5$), shrinking the interval rather than expanding it to cover the inclusive integer bounds."
        },
        {
            "ans": "(b) $\\mu = 130$, $\\sigma^2 = 6.75$, (c)(i) $0.0795$, (ii) $0.7328$",
            "feedback": "In part (b), you gave the standard deviation $\\sigma = 6.75$ as the variance. The variance is $\\sigma^2 = npq = 45.5$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Direction of Continuity Corrections",
        "content": "To avoid getting continuity corrections backwards, think of discrete integers as blocks of width $1$ centred on each integer. The integer $140$ occupies the interval $[139.5, 140.5]$. Therefore, 'at least $140$' must include the entire block for $140$, beginning at $139.5$."
    }
},
{
    "id": "050239",
    "group_id": "050236",
    "branch": "Statistics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Continuous Distributions",
    "topic": "Normal Distribution",
    "subtopic": [
        "Hypothesis Testing for the Mean",
        "Sample Mean Distribution",
        "Critical Values"
    ],
    "img": false,
    "question": "A bottling plant fills bottles of cold-pressed olive oil. The volume of oil dispensed, $X\\text{ ml}$, is normally distributed with a known standard deviation of $\\sigma = 4.5\\text{ ml}$. The dispensing machine is calibrated to deliver a population mean volume of $\\mu = 500\\text{ ml}$.<br><br>Following routine maintenance, the quality assurance manager suspects that the machine is underfilling bottles. A random sample of $16$ bottles is inspected, yielding a sample mean volume of $\\bar{x} = 497.8\\text{ ml}$.<br><br><strong>(a)</strong> State suitable null and alternative hypotheses to test the manager's suspicion.<br><br><strong>(b)</strong> State the distribution of the sample mean, $\\bar{X}$, assuming the null hypothesis is true.<br><br><strong>(c)</strong> Test, at the $5\\%$ significance level, whether there is evidence that the machine is underfilling bottles. State your conclusion clearly in context.<br><br><strong>(d)</strong> Determine the critical value of the sample mean, $\\bar{x}$, for this test at the $5\\%$ significance level.",
    "steps": [
        "<strong>(a) Hypotheses:</strong><br><br>The test is one-tailed because the manager suspects underfilling:\\begin{aligned} &H_0: \\mu = 500 \\cr &H_1: \\mu < 500 \\end{aligned}",
        "<strong>(b) Distribution of the sample mean under $H_0$:</strong><br><br>For a sample of size $n = 16$ from a normal population:\\begin{aligned} \\bar{X} \\sim \\text{N}\\left(500, \\dfrac{4.5^2}{16}\\right) \\end{aligned}The standard error is:\\begin{aligned} \\sigma_{\\bar{x}} &= \\dfrac{4.5}{\\sqrt{16}} \\cr &= \\dfrac{4.5}{4} \\cr &= 1.125 \\end{aligned}Hence $\\bar{X} \\sim \\text{N}(500, 1.125^2)$.",
        "<strong>(c) Calculating test statistic and conclusion:</strong><br><br>Standardising the observed sample mean $\\bar{x} = 497.8$:\\begin{aligned} z &= \\dfrac{497.8 - 500}{1.125} \\cr &= \\dfrac{-2.2}{1.125} \\cr &\\approx -1.956 \\end{aligned}At the $5\\%$ significance level for a lower-tail test, the critical value is $z_{\\text{crit}} = -1.645$.<br><br>Since $-1.956 < -1.645$, the test statistic falls into the critical region. We reject $H_0$.<br><br>There is significant evidence at the $5\\%$ level that the dispensing machine is underfilling bottles.",
        "<strong>(d) Determining the critical value of $\\bar{x}$:</strong><br><br>Using the critical $z$-value:\\begin{aligned} \\bar{x}_{\\text{crit}} &= 500 - 1.645(1.125) \\cr &= 500 - 1.851 \\cr &= 498.15\\text{ ml} \\end{aligned}",
        "Final Answer: (a) $H_0: \\mu = 500$, $H_1: \\mu < 500$, (b) $\\bar{X} \\sim N(500, 1.125^2)$, (c) Reject $H_0$, (d) $498.15\\text{ ml}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $H_0: \\mu = 500$, $H_1: \\mu \\neq 500$, (b) $\\bar{X} \\sim N(500, 1.125^2)$, (c) Reject $H_0$, (d) $498.15\\text{ ml}$",
            "feedback": "In part (a), you stated a two-tailed alternative hypothesis $H_1: \\mu \\neq 500$. The question specifies that the manager suspects underfilling, which requires a one-tailed test $H_1: \\mu < 500$."
        },
        {
            "ans": "(a) $H_0: \\mu = 500$, $H_1: \\mu < 500$, (b) $\\bar{X} \\sim N(500, 4.5^2)$, (c) Reject $H_0$, (d) $498.15\\text{ ml}$",
            "feedback": "In part (b), you used the population variance $\\sigma^2 = 4.5^2$ for the sample mean. The variance of the sample mean is $\\dfrac{\\sigma^2}{n} = \\dfrac{4.5^2}{16} = 1.125^2$."
        },
        {
            "ans": "(a) $H_0: \\mu = 500$, $H_1: \\mu < 500$, (b) $\\bar{X} \\sim N(500, 1.125^2)$, (c) Accept $H_0$, (d) $492.60\\text{ ml}$",
            "feedback": "In part (c), you divided by $\\sigma = 4.5$ instead of the standard error $1.125$, leading to an underestimated test statistic and an incorrect non-rejection decision."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Dividing by the Square Root of n",
        "content": "The most common blunder in sample mean hypothesis testing is standardising with $\\sigma$ instead of the standard error $\\dfrac{\\sigma}{\\sqrt{n}}$. Always remember that sample means have much less variability than individual observations: $\\text{Var}(\\bar{X}) = \\dfrac{\\sigma^2}{n}$."
    }
},
{
    "id": "050240",
    "group_id": "050236",
    "branch": "Statistics",
    "board": "WJEC",
    "level": "A",
    "major_area": "Continuous Distributions",
    "topic": "Normal Distribution",
    "subtopic": [
        "Linear Combinations of Normal Variables",
        "Sums and Differences",
        "Independent Variables"
    ],
    "img": false,
    "question": "An airline imposes weight limits on passenger luggage. The weight of an empty hard-shell suitcase, $S\\text{ kg}$, is modelled by $S \\sim \\text{N}(3.2, 0.4^2)$. The weight of the packed contents, $C\\text{ kg}$, is modelled by $C \\sim \\text{N}(18.5, 2.5^2)$. The variables $S$ and $C$ are assumed to be independent.<br><br><strong>(a)</strong> Let $T = S + C$ denote the total weight of a randomly chosen packed suitcase.<br>&emsp;<strong>(i)</strong> Find the mean and the standard deviation of $T$.<br>&emsp;<strong>(ii)</strong> The airline charges an excess baggage fee if $T > 23.0\\text{ kg}$. Find the probability that a randomly chosen packed suitcase incurs this fee.<br><br><strong>(b)</strong> Two independent packed suitcases, $T_1$ and $T_2$, are checked in by two travelling companions. Find the probability that the combined weight of the two suitcases exceeds $45.0\\text{ kg}$.<br><br><strong>(c)</strong> Find the probability that the magnitude of the difference in weight between the two suitcases, $|T_1 - T_2|$, is greater than $3.0\\text{ kg}$.",
    "steps": [
        "<strong>(a)(i) Mean and standard deviation of $T$:</strong><br><br>Using properties of linear combinations of independent normal variables:\\begin{aligned} \\text{E}(T) &= \\text{E}(S) + \\text{E}(C) \\cr &= 3.2 + 18.5 \\cr &= 21.7\\text{ kg} \\end{aligned}For the variance:\\begin{aligned} \\text{Var}(T) &= \\text{Var}(S) + \\text{Var}(C) \\cr &= 0.4^2 + 2.5^2 \\cr &= 0.16 + 6.25 \\cr &= 6.41 \\end{aligned}The standard deviation is:\\begin{aligned} \\text{SD}(T) &= \\sqrt{6.41} \\cr &\\approx 2.532 \\cr &\\approx 2.53\\text{ kg} \\end{aligned}",
        "<strong>(a)(ii) Probability of excess baggage fee:</strong><br><br>Standardising for $T > 23.0$:\\begin{aligned} P(T > 23.0) &= P\\left(Z > \\dfrac{23.0 - 21.7}{2.532}\\right) \\cr &= P(Z > 0.513) \\cr &= 1 - \\Phi(0.513) \\cr &= 1 - 0.6960 \\cr &= 0.304 \\end{aligned}",
        "<strong>(b) Combined weight of two suitcases:</strong><br><br>Let $W = T_1 + T_2$. Since $T_1$ and $T_2$ are independent:\\begin{aligned} \\text{E}(W) &= 21.7 + 21.7 = 43.4\\text{ kg} \\cr \\text{Var}(W) &= 6.41 + 6.41 = 12.82 \\end{aligned}So $W \\sim \\text{N}(43.4, 12.82)$ with $\\text{SD}(W) = \\sqrt{12.82} \\approx 3.581$. Standardising for $W > 45.0$:\\begin{aligned} P(W > 45.0) &= P\\left(Z > \\dfrac{45.0 - 43.4}{3.581}\\right) \\cr &= P(Z > 0.447) \\cr &= 1 - \\Phi(0.447) \\cr &= 1 - 0.6726 \\cr &= 0.3274 \\end{aligned}",
        "<strong>(c) Difference in weight between two suitcases:</strong><br><br>Let $D = T_1 - T_2$. The parameters are:\\begin{aligned} \\text{E}(D) &= 21.7 - 21.7 = 0 \\cr \\text{Var}(D) &= \\text{Var}(T_1) + \\text{Var}(T_2) \\cr &= 6.41 + 6.41 = 12.82 \\end{aligned}So $D \\sim \\text{N}(0, 12.82)$. Because the distribution is symmetric about $0$:\\begin{aligned} P(|D| > 3.0) &= 2P(D > 3.0) \\cr &= 2P\\left(Z > \\dfrac{3.0 - 0}{3.581}\\right) \\cr &= 2P(Z > 0.838) \\cr &= 2(1 - 0.7990) \\cr &= 2(0.2010) \\cr &= 0.402 \\end{aligned}",
        "Final Answer: (a)(i) $21.7\\text{ kg}$ and $2.53\\text{ kg}$, (ii) $0.304$, (b) $0.3274$, (c) $0.402$"
    ],
    "pi_options": [
        {
            "ans": "(a)(i) $21.7\\text{ kg}$ and $2.90\\text{ kg}$, (ii) $0.304$, (b) $0.3274$, (c) $0.402$",
            "feedback": "In part (a)(i), you added the standard deviations directly ($0.4 + 2.5 = 2.9$) rather than adding variances. For independent variables, $\\text{Var}(S + C) = \\text{Var}(S) + \\text{Var}(C)$."
        },
        {
            "ans": "(a)(i) $21.7\\text{ kg}$ and $2.53\\text{ kg}$, (ii) $0.304$, (b) $0.3274$, (c) $0.201$",
            "feedback": "In part (c), you calculated a single tail $P(D > 3.0) = 0.2010$. The condition asks for the magnitude $|T_1 - T_2| > 3.0$, so you must double this to account for both tails."
        },
        {
            "ans": "(a)(i) $21.7\\text{ kg}$ and $2.53\\text{ kg}$, (ii) $0.304$, (b) $0.3274$, (c) $0.000$",
            "feedback": "In part (c), you subtracted the variances, setting $\\text{Var}(T_1 - T_2) = 0$. Variances always add for independent random variables: $\\text{Var}(T_1 - T_2) = \\text{Var}(T_1) + \\text{Var}(T_2)$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Variances Always Add",
        "content": "A perennial trap in A Level Statistics is subtracting variances when finding the distribution of a difference, such as $T_1 - T_2$. Because $\\text{Var}(-X) = (-1)^2 \\text{Var}(X) = \\text{Var}(X)$, uncertainties always compound: $\\text{Var}(T_1 - T_2) = \\text{Var}(T_1) + \\text{Var}(T_2)$."
    }
}
];