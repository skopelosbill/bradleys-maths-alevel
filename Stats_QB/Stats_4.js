window.ALEVEL_QUESTIONS = [
{
  "id": "050151",
  "group_id": "050151",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "A",
  "major_area": "Statistics",
  "topic": "Statistical Measures",
  "subtopic": [
    "Mean and Standard Deviation",
    "Discrete Frequency Distributions"
  ],
  "img": false,
  "question": "A local council conducts a survey of the number of domestic pets per household across a residential estate. The results are shown in the table below:<br><br><table style='width:100%; max-width:200px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:5px; border:1px solid #ccc;'>Pets ($x$)</th><th style='padding:5px; border:1px solid #ccc;'>Households ($f$)</th></tr></thead><tbody><tr><td style='padding:5px; border:1px solid #ccc;'>0</td><td style='padding:5px; border:1px solid #ccc;'>12</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>1</td><td style='padding:5px; border:1px solid #ccc;'>28</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>2</td><td style='padding:5px; border:1px solid #ccc;'>35</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>3</td><td style='padding:5px; border:1px solid #ccc;'>19</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>4</td><td style='padding:5px; border:1px solid #ccc;'>6</td></tr></tbody></table><br><strong>(a)</strong> Calculate the mean number of pets per household.<br><br><strong>(b)</strong> Calculate the standard deviation of the number of pets per household, giving your answer to 2 decimal places.",
  "steps": [
    "<strong>(a) Calculating the Mean:</strong><br><br>Find the total number of households:\\begin{aligned} &n = \\sum f \\cr &\\quad = 12 + 28 \\cr &\\qquad + 35 + 19 \\cr &\\qquad + 6 \\cr &\\quad = 100 \\end{aligned}<br>Calculate the sum of the products $\\sum fx$:\\begin{aligned} &\\sum fx \\cr &\\quad = 0(12) \\cr &\\qquad + 1(28) \\cr &\\qquad + 2(35) \\cr &\\qquad + 3(19) \\cr &\\qquad + 4(6) \\cr &\\quad = 0 + 28 \\cr &\\qquad + 70 + 57 \\cr &\\qquad + 24 \\cr &\\quad = 179 \\end{aligned}<br>Calculate the mean:\\begin{aligned} &\\bar{x} \\cr &\\quad = \\dfrac{179}{100} \\cr &\\quad = 1.79 \\end{aligned}",
    "<strong>(b) Calculating the Standard Deviation:</strong><br><br>Calculate the sum of $fx^2$:\\begin{aligned} &\\sum fx^2 \\cr &\\quad = 0^2(12) \\cr &\\qquad + 1^2(28) \\cr &\\qquad + 2^2(35) \\cr &\\qquad + 3^2(19) \\cr &\\qquad + 4^2(6) \\cr &\\quad = 0 + 28 \\cr &\\qquad + 140 \\cr &\\qquad + 171 \\cr &\\qquad + 96 \\cr &\\quad = 435 \\end{aligned}<br>Calculate the variance:\\begin{aligned} &\\sigma^2 \\cr &\\quad = \\dfrac{435}{100} \\cr &\\qquad - 1.79^2 \\cr &\\quad = 4.35 \\cr &\\qquad - 3.2041 \\cr &\\quad = 1.1459 \\end{aligned}<br>Take the square root for the standard deviation:\\begin{aligned} &\\sigma \\cr &\\quad = \\sqrt{1.1459} \\cr &\\quad \\approx 1.07 \\end{aligned}",
    "Final Answer: (a) $1.79$, (b) $1.07$"
  ],
  "pi_options": [
    {
      "ans": "(a) $1.79$, (b) $1.15$",
      "feedback": "Calculating the variance $\\sigma^2 = 1.1459$ and rounding without taking the square root gives $1.15$."
    },
    {
      "ans": "(a) $2.00$, (b) $1.07$",
      "feedback": "Taking the unweighted mean of the outcomes $\\frac{0 + 1 + 2 + 3 + 4}{5} = 2.00$ ignores the household frequencies."
    },
    {
      "ans": "(a) $1.79$, (b) $1.41$",
      "feedback": "Subtracting the mean rather than the square of the mean inside the square root gives $\\sqrt{4.35 - 1.79} = 1.41$."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Zero Value Contributions",
    "content": "When evaluating $\\sum fx$ and $\\sum fx^2$, remember that the $x = 0$ category contributes $0$ to the sum of products, but its frequency still adds to the total count $n = 100$. Omitting the $12$ households with zero pets from $n$ is a classic error."
  }
},
{
  "id": "050152",
  "group_id": "050151",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "A",
  "major_area": "Statistics",
  "topic": "Statistical Measures",
  "subtopic": [
    "Linear Coding",
    "Discrete Frequency Tables",
    "Standard Deviation"
  ],
  "img": false,
  "question": "The table below summarises the number of overtime hours, $x$, worked during a month by $100$ employees at a logistics depot:<br><br><table style='width:100%; max-width:200px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:5px; border:1px solid #ccc;'>Hours ($x$)</th><th style='padding:5px; border:1px solid #ccc;'>Freq ($f$)</th></tr></thead><tbody><tr><td style='padding:5px; border:1px solid #ccc;'>5</td><td style='padding:5px; border:1px solid #ccc;'>14</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>10</td><td style='padding:5px; border:1px solid #ccc;'>26</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>15</td><td style='padding:5px; border:1px solid #ccc;'>32</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>20</td><td style='padding:5px; border:1px solid #ccc;'>18</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>25</td><td style='padding:5px; border:1px solid #ccc;'>10</td></tr></tbody></table><br>To simplify the calculations, the data are coded using:<br>$$y = \\dfrac{x - 15}{5}$$<br><strong>(a)</strong><br><strong>(i)</strong> Calculate the mean of the coded data, $\\bar{y}$.<br><strong>(ii)</strong> Calculate the standard deviation of the coded data, $\\sigma_y$, correct to 2 decimal places.<br><br><strong>(b)</strong> Hence determine:<br><strong>(i)</strong> the mean overtime hours, $\\bar{x}$;<br><strong>(ii)</strong> the standard deviation of the overtime hours, $\\sigma_x$, correct to 2 decimal places.",
  "steps": [
    "<strong>(a)(i) Calculating the Coded Mean $\\bar{y}$:</strong><br><br>The coded values for $x = 5, 10, 15, 20, 25$ are $y = -2, -1, 0, 1, 2$.<br><br>Calculate $\\sum fy$:\\begin{aligned} &\\sum fy \\cr &\\quad = -2(14) \\cr &\\qquad - 1(26) \\cr &\\qquad + 0(32) \\cr &\\qquad + 1(18) \\cr &\\qquad + 2(10) \\cr &\\quad = -28 - 26 \\cr &\\qquad + 18 + 20 \\cr &\\quad = -16 \\end{aligned}<br>Calculate $\\bar{y}$:\\begin{aligned} &\\bar{y} \\cr &\\quad = \\dfrac{-16}{100} \\cr &\\quad = -0.16 \\end{aligned}",
    "<strong>(a)(ii) Calculating the Coded Standard Deviation $\\sigma_y$:</strong><br><br>Calculate $\\sum fy^2$:\\begin{aligned} &\\sum fy^2 \\cr &\\quad = 4(14) \\cr &\\qquad + 1(26) \\cr &\\qquad + 0(32) \\cr &\\qquad + 1(18) \\cr &\\qquad + 4(10) \\cr &\\quad = 56 + 26 \\cr &\\qquad + 18 + 40 \\cr &\\quad = 140 \\end{aligned}<br>Calculate the coded variance:\\begin{aligned} &\\sigma_y^2 \\cr &\\quad = \\dfrac{140}{100} \\cr &\\qquad - (-0.16)^2 \\cr &\\quad = 1.40 \\cr &\\qquad - 0.0256 \\cr &\\quad = 1.3744 \\end{aligned}<br>Take the square root:\\begin{aligned} &\\sigma_y \\cr &\\quad = \\sqrt{1.3744} \\cr &\\quad \\approx 1.17 \\end{aligned}",
    "<strong>(b) Uncoding the Mean and Standard Deviation:</strong><br><br>For the mean, rearrange $\\bar{y} = \\frac{\\bar{x} - 15}{5}$:\\begin{aligned} &\\bar{x} \\cr &\\quad = 5\\bar{y} + 15 \\cr &\\quad = 5(-0.16) \\cr &\\qquad + 15 \\cr &\\quad = -0.80 + 15 \\cr &\\quad = 14.20 \\end{aligned}<br>The standard deviation is affected only by the scale factor $5$ and not the shift of $15$:\\begin{aligned} &\\sigma_x \\cr &\\quad = 5\\sigma_y \\cr &\\quad = 5\\sqrt{1.3744} \\cr &\\quad = 5(1.1723) \\cr &\\quad \\approx 5.86 \\end{aligned}",
    "Final Answer: (a)(i) $-0.16$, (ii) $1.17$, (b)(i) $14.20$, (ii) $5.86$"
  ],
  "pi_options": [
    {
      "ans": "(a)(i) $-0.16$, (ii) $1.17$, (b)(i) $14.20$, (ii) $20.86$",
      "feedback": "Adding $15$ to the standard deviation as well as multiplying by $5$ gives $5(1.17) + 15 = 20.86$; standard deviation is independent of location shifts."
    },
    {
      "ans": "(a)(i) $0.16$, (ii) $1.17$, (b)(i) $15.80$, (ii) $5.86$",
      "feedback": "A sign error in $\\sum fy$ yields $+0.16$, resulting in an incorrect uncoded mean of $15.80$."
    },
    {
      "ans": "(a)(i) $-0.16$, (ii) $1.37$, (b)(i) $14.20$, (ii) $6.87$",
      "feedback": "Using the coded variance $1.37$ directly without taking the square root gives $\\sigma_x = 5(1.3744) = 6.87$."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Shift Invariance of Standard Deviation",
    "content": "For the linear code $y = \\frac{x - a}{b}$, remember the transformation rules:\\begin{aligned} &\\bar{x} = b\\bar{y} + a \\cr &\\sigma_x = b\\sigma_y \\end{aligned}Subtracting $a$ shifts every point equally without altering their spread. Only the scaling factor $b$ affects the standard deviation."
  }
},
{
  "id": "050153",
  "group_id": "050151",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "A",
  "major_area": "Statistics",
  "topic": "Statistical Measures",
  "subtopic": [
    "Frequency Table with Unknown",
    "Median",
    "Interquartile Range"
  ],
  "img": false,
  "question": "A survey of $80$ students in a sixth-form college records the number of siblings, $x$, each student has:<br><br><table style='width:100%; max-width:200px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:5px; border:1px solid #ccc;'>Siblings ($x$)</th><th style='padding:5px; border:1px solid #ccc;'>Freq ($f$)</th></tr></thead><tbody><tr><td style='padding:5px; border:1px solid #ccc;'>0</td><td style='padding:5px; border:1px solid #ccc;'>15</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>1</td><td style='padding:5px; border:1px solid #ccc;'>$k$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>2</td><td style='padding:5px; border:1px solid #ccc;'>24</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>3</td><td style='padding:5px; border:1px solid #ccc;'>12</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>4</td><td style='padding:5px; border:1px solid #ccc;'>5</td></tr></tbody></table><br><strong>(a)</strong> Find the value of $k$.<br><br><strong>(b)</strong> Calculate the mean number of siblings per student.<br><br><strong>(c)</strong><br><strong>(i)</strong> Find the median number of siblings.<br><strong>(ii)</strong> Find the interquartile range (IQR) of the number of siblings.",
  "steps": [
    "<strong>(a) Finding the Missing Frequency $k$:</strong><br><br>The frequencies sum to $80$:\\begin{aligned} &k = 80 - (15 \\cr &\\qquad + 24 + 12 \\cr &\\qquad + 5) \\cr &\\quad = 80 - 56 \\cr &\\quad = 24 \\end{aligned}",
    "<strong>(b) Calculating the Mean:</strong><br><br>Calculate $\\sum fx$:\\begin{aligned} &\\sum fx \\cr &\\quad = 0(15) \\cr &\\qquad + 1(24) \\cr &\\qquad + 2(24) \\cr &\\qquad + 3(12) \\cr &\\qquad + 4(5) \\cr &\\quad = 0 + 24 \\cr &\\qquad + 48 + 36 \\cr &\\qquad + 20 \\cr &\\quad = 128 \\end{aligned}<br>Calculate the mean:\\begin{aligned} &\\bar{x} \\cr &\\quad = \\dfrac{128}{80} \\cr &\\quad = 1.6 \\end{aligned}",
    "<strong>(c)(i) Finding the Median:</strong><br><br>Determine cumulative frequencies:\\begin{aligned} &x = 0: 15 \\cr &x \\le 1: 39 \\cr &x \\le 2: 63 \\cr &x \\le 3: 75 \\cr &x \\le 4: 80 \\end{aligned}<br>For $n = 80$, the median position is $\\frac{80 + 1}{2} = 40.5$ (average of the $40\\text{th}$ and $41\\text{st}$ values).<br><br>Both values lie in the category $x = 2$, so:\\begin{aligned} &\\text{Median} = 2 \\end{aligned}",
    "<strong>(c)(ii) Finding the Interquartile Range:</strong><br><br>Lower quartile position: $\\frac{80 + 1}{4} = 20.25$ (between $20\\text{th}$ and $21\\text{st}$ values). Both lie in $x = 1$:\\begin{aligned} &Q_1 = 1 \\end{aligned}<br>Upper quartile position: $\\frac{3(80 + 1)}{4} = 60.75$ (between $60\\text{th}$ and $61\\text{st}$ values). Both lie in $x = 2$:\\begin{aligned} &Q_3 = 2 \\end{aligned}<br>Evaluate the interquartile range:\\begin{aligned} &\\text{IQR} \\cr &\\quad = Q_3 - Q_1 \\cr &\\quad = 2 - 1 \\cr &\\quad = 1 \\end{aligned}",
    "Final Answer: (a) $24$, (b) $1.6$, (c)(i) $2$, (ii) $1$"
  ],
  "pi_options": [
    {
      "ans": "(a) $24$, (b) $1.6$, (c)(i) $2$, (ii) $2$",
      "feedback": "Incorrectly identifying the upper quartile as $Q_3 = 3$ gives $\\text{IQR} = 3 - 1 = 2$; the cumulative frequency up to $x = 2$ is $63$, so the $61\\text{st}$ value is $2$."
    },
    {
      "ans": "(a) $24$, (b) $2.0$, (c)(i) $2$, (ii) $1$",
      "feedback": "Dividing the sum $128$ by $64$ rather than the total frequency $80$ gives an incorrect mean of $2.0$."
    },
    {
      "ans": "(a) $24$, (b) $1.6$, (c)(i) $1$, (ii) $1$",
      "feedback": "Selecting $x = 1$ for the median ignores that the cumulative frequency reaches only $39$ at $x = 1$, so the $40.5\\text{th}$ item falls in $x = 2$."
    }
  ],
  "bradley_insight": {
    "type": "caution",
    "title": "The Head Teacher's Eye: Locating Discrete Percentiles",
    "content": "For discrete frequency distributions, use the standard ranking formulas $\\frac{n + 1}{2}$ for the median and $\\frac{n + 1}{4}$ for quartiles. Check cumulative frequencies carefully: if the cumulative total before a category is $39$, the $40\\text{th}$ and $41\\text{st}$ values both sit inside the next category."
  }
},
{
  "id": "050154",
  "group_id": "050151",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "A",
  "major_area": "Statistics",
  "topic": "Statistical Measures",
  "subtopic": [
    "Pooled Mean",
    "Combined Standard Deviation",
    "Linear Scaling"
  ],
  "img": false,
  "question": "A manufacturing company tests the assembly times (in minutes) of two separate teams of technicians:<br>• <strong>Team A:</strong> $n_1 = 40$ technicians, with $\\sum x_1 = 1200$ and <br> $\\sum x_1^2 = 36\\,640$.<br>• <strong>Team B:</strong> $n_2 = 60$ technicians, with $\\sum x_2 = 1860$ and <br> $\\sum x_2^2 = 58\\,284$.<br><br><strong>(a)</strong> Calculate:<br><strong>(i)</strong> the mean assembly time for Team A;<br><strong>(ii)</strong> the mean assembly time for Team B.<br><br><strong>(b)</strong> Calculate the combined mean assembly time for all $100$ technicians.<br><br><strong>(c)</strong> Calculate the combined standard deviation for all $100$ technicians, correct to 2 decimal places.<br><br><strong>(d)</strong> A quality auditor discovers that the stopwatch used for all tests ran slow, and every recorded time must be increased by $2\\text{ minutes}$. State, with a reason, what effect this correction has on the combined standard deviation.",
  "steps": [
    "<strong>(a) Calculating Individual Group Means:</strong><br><br>For Team A:\\begin{aligned} &\\bar{x}_A \\cr &\\quad = \\dfrac{1200}{40} \\cr &\\quad = 30\\text{ mins} \\end{aligned}<br>For Team B:\\begin{aligned} &\\bar{x}_B \\cr &\\quad = \\dfrac{1860}{60} \\cr &\\quad = 31\\text{ mins} \\end{aligned}",
    "<strong>(b) Calculating the Combined Mean:</strong><br><br>Sum the totals and divide by the combined sample size:\\begin{aligned} &\\bar{X} \\cr &\\quad = \\dfrac{1200 + 1860}{40 + 60} \\cr &\\quad = \\dfrac{3060}{100} \\cr &\\quad = 30.6\\text{ mins} \\end{aligned}",
    "<strong>(c) Calculating the Combined Standard Deviation:</strong><br><br>Sum the squared values across both teams:\\begin{aligned} &\\sum X^2 \\cr &\\quad = 36\\,640 \\cr &\\qquad + 58\\,284 \\cr &\\quad = 94\\,924 \\end{aligned}<br>Calculate the combined variance:\\begin{aligned} &\\sigma^2 \\cr &\\quad = \\dfrac{94\\,924}{100} \\cr &\\qquad - 30.6^2 \\cr &\\quad = 949.24 \\cr &\\qquad - 936.36 \\cr &\\quad = 12.88 \\end{aligned}<br>Calculate the combined standard deviation:\\begin{aligned} &\\sigma \\cr &\\quad = \\sqrt{12.88} \\cr &\\quad \\approx 3.59\\text{ mins} \\end{aligned}",
    "<strong>(d) Effect of Adding a Constant on Standard Deviation:</strong><br><br>Adding $2\\text{ minutes}$ to every observation has <strong>no effect</strong> on the standard deviation.<br><br>Adding a constant shifts every data value by the same amount, moving the mean by $+2\\text{ mins}$ while leaving the dispersion and differences from the mean unchanged.",
    "Final Answer: (a)(i) $30\\text{ mins}$, (ii) $31\\text{ mins}$, (b) $30.6\\text{ mins}$, (c) $3.59\\text{ mins}$, (d) No effect"
  ],
  "pi_options": [
    {
      "ans": "(a)(i) $30\\text{ mins}$, (ii) $31\\text{ mins}$, (b) $30.5\\text{ mins}$, (c) $3.59\\text{ mins}$, (d) No effect",
      "feedback": "Averaging the two group means directly as $\\frac{30 + 31}{2} = 30.5$ ignores the unequal group sizes ($40$ vs $60$)."
    },
    {
      "ans": "(a)(i) $30\\text{ mins}$, (ii) $31\\text{ mins}$, (b) $30.6\\text{ mins}$, (c) $3.59\\text{ mins}$, (d) Increases by $2\\text{ mins}$",
      "feedback": "Adding a constant to all scores shifts the mean, but has no effect on the standard deviation."
    },
    {
      "ans": "(a)(i) $30\\text{ mins}$, (ii) $31\\text{ mins}$, (b) $30.6\\text{ mins}$, (c) $12.88\\text{ mins}$, (d) No effect",
      "feedback": "Leaving the combined variance $\\sigma^2 = 12.88$ without taking the square root gives $12.88$."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Pooling Variance via Sums of Squares",
    "content": "You cannot simply average the standard deviations of two groups. To find combined standard deviation, you must combine their sums of raw scores $\\sum X = \\sum x_1 + \\sum x_2$ and sums of squared scores $\\sum X^2 = \\sum x_1^2 + \\sum x_2^2$ before recalculating the variance."
  }
},
{
  "id": "050155",
  "group_id": "050151",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "A",
  "major_area": "Statistics",
  "topic": "Statistical Measures",
  "subtopic": [
    "Expected Value",
    "Variance",
    "Linear Transformations of Random Variables"
  ],
  "img": false,
  "question": "An arcade game awards players a number of tokens, $T$, per game according to the probability distribution shown below:<br><br><table style='width:100%; max-width:200px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:5px; border:1px solid #ccc;'>Tokens ($t$)</th><th style='padding:5px; border:1px solid #ccc;'>$\\text{P}(T = t)$</th></tr></thead><tbody><tr><td style='padding:5px; border:1px solid #ccc;'>0</td><td style='padding:5px; border:1px solid #ccc;'>$0.50$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>1</td><td style='padding:5px; border:1px solid #ccc;'>$0.30$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>2</td><td style='padding:5px; border:1px solid #ccc;'>$0.15$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>5</td><td style='padding:5px; border:1px solid #ccc;'>$0.05$</td></tr></tbody></table><br><strong>(a)</strong> Calculate:<br><strong>(i)</strong> $\\text{E}(T)$;<br><strong>(ii)</strong> $\\text{Var}(T)$.<br><br>It costs $£1.00$ to play the game once. Each token won can be redeemed for prizes worth $40\\text{p}$ ($£0.40$). A player's net profit in pounds from a single game is given by $Y = 0.40T - 1.00$.<br><br><strong>(b)</strong> Calculate:<br><strong>(i)</strong> the expected net profit, $\\text{E}(Y)$;<br><strong>(ii)</strong> the standard deviation of the net profit, $\\sigma_Y$, in pounds, correct to 2 decimal places.",
  "steps": [
    "<strong>(a)(i) Calculating Expected Value $\\text{E}(T)$:</strong><br><br>\\begin{aligned} &\\text{E}(T) \\cr &\\quad = 0(0.50) \\cr &\\qquad + 1(0.30) \\cr &\\qquad + 2(0.15) \\cr &\\qquad + 5(0.05) \\cr &\\quad = 0 + 0.30 \\cr &\\qquad + 0.30 \\cr &\\qquad + 0.25 \\cr &\\quad = 0.85 \\end{aligned}",
    "<strong>(a)(ii) Calculating Variance $\\text{Var}(T)$:</strong><br><br>Find $\\text{E}(T^2)$:\\begin{aligned} &\\text{E}(T^2) \\cr &\\quad = 0^2(0.50) \\cr &\\qquad + 1^2(0.30) \\cr &\\qquad + 2^2(0.15) \\cr &\\qquad + 5^2(0.05) \\cr &\\quad = 0 + 0.30 \\cr &\\qquad + 0.60 \\cr &\\qquad + 1.25 \\cr &\\quad = 2.15 \\end{aligned}<br>Calculate the variance:\\begin{aligned} &\\text{Var}(T) \\cr &\\quad = \\text{E}(T^2) \\cr &\\qquad - [\\text{E}(T)]^2 \\cr &\\quad = 2.15 \\cr &\\qquad - 0.85^2 \\cr &\\quad = 2.15 \\cr &\\qquad - 0.7225 \\cr &\\quad = 1.4275 \\end{aligned}",
    "<strong>(b)(i) Calculating Expected Net Profit $\\text{E}(Y)$:</strong><br><br>Using expectation rules for linear transformations:\\begin{aligned} &\\text{E}(Y) \\cr &\\quad = 0.40\\text{E}(T) \\cr &\\qquad - 1.00 \\cr &\\quad = 0.40(0.85) \\cr &\\qquad - 1.00 \\cr &\\quad = 0.34 - 1.00 \\cr &\\quad = -£0.66 \\end{aligned}",
    "<strong>(b)(ii) Calculating Standard Deviation of Net Profit:</strong><br><br>Using variance transformation rules for $Y = aT + b$:\\begin{aligned} &\\text{Var}(Y) \\cr &\\quad = a^2 \\text{Var}(T) \\cr &\\quad = 0.40^2(1.4275) \\cr &\\quad = 0.16(1.4275) \\cr &\\quad = 0.2284 \\end{aligned}<br>Take the square root for standard deviation:\\begin{aligned} &\\sigma_Y \\cr &\\quad = 0.40\\sigma_T \\cr &\\quad = 0.40\\sqrt{1.4275} \\cr &\\quad = 0.40(1.1948) \\cr &\\quad \\approx £0.48 \\end{aligned}",
    "Final Answer: (a)(i) $0.85$, (ii) $1.4275$, (b)(i) $-£0.66$, (ii) $£0.48$"
  ],
  "pi_options": [
    {
      "ans": "(a)(i) $0.85$, (ii) $1.4275$, (b)(i) $-£0.66$, (ii) $£0.23$",
      "feedback": "Evaluating the variance $\\text{Var}(Y) = 0.2284$ without taking the square root gives $£0.23$ rather than the standard deviation."
    },
    {
      "ans": "(a)(i) $0.85$, (ii) $2.15$, (b)(i) $-£0.66$, (ii) $£0.59$",
      "feedback": "Using $\\text{E}(T^2) = 2.15$ directly as the variance forgets to subtract $[\\text{E}(T)]^2$."
    },
    {
      "ans": "(a)(i) $0.85$, (ii) $1.4275$, (b)(i) $£0.66$, (ii) $£0.48$",
      "feedback": "Losing the negative sign on expected profit ignores that $0.34 - 1.00 = -0.66$ (representing an expected loss of $66\\text{p}$ per game)."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Variance Scaling Property",
    "content": "For a linear transformation $Y = aX + b$, the constant shift $b$ disappears in variance and standard deviation: $\\text{Var}(Y) = a^2\\text{Var}(X)$ and $\\sigma_Y = |a|\\sigma_X$. The fixed entry fee of $£1.00$ affects expected earnings but has zero impact on volatility."
  }
},
{
  "id": "050156",
  "group_id": "050156",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "A",
  "major_area": "Statistics",
  "topic": "Binomial Distribution",
  "subtopic": [
    "Binomial Probability Formula",
    "Cumulative Binomial Probabilities"
  ],
  "img": false,
  "question": "Chloe and Sam regularly play games of table tennis during their lunch break. The probability that Chloe wins any given game is $0.65$. The outcome of any particular game is independent of the outcome of other games.<br><br>Calculate the probability that, in their next $15$ games:<br><strong>(a)</strong> Chloe wins exactly $10$ games;<br><strong>(b)</strong> Chloe wins at least $10$ games.<br><br>Give your answers to 4 decimal places.",
  "steps": [
    "<strong>(a) Calculating $\\text{P}(X = 10)$:</strong><br><br>Let $X$ be the number of games won by Chloe in $15$ games.<br><br>State the distribution:\\begin{aligned} X \\sim \\text{B}(15, 0.65) \\end{aligned}<br>Using the binomial probability formula:\\begin{aligned} &\\text{P}(X = 10) \\cr &\\quad = \\binom{15}{10} (0.65)^{10} \\cr &\\qquad \\times (0.35)^5 \\cr &\\quad = 3003 \\cr &\\qquad \\times 0.013463 \\cr &\\qquad \\times 0.005252 \\cr &\\quad \\approx 0.2123 \\end{aligned}",
    "<strong>(b) Calculating $\\text{P}(X \\ge 10)$:</strong><br><br>Using the complement rule with cumulative probabilities:\\begin{aligned} &\\text{P}(X \\ge 10) \\cr &\\quad = 1 - \\text{P}(X \\le 9) \\cr &\\quad = 1 - 0.4357 \\cr &\\quad = 0.5643 \\end{aligned}",
    "Final Answer: (a) $0.2123$, (b) $0.5643$"
  ],
  "pi_options": [
    {
      "ans": "(a) $0.2123$, (b) $0.4357$",
      "feedback": "Giving $\\text{P}(X \\le 9) = 0.4357$ evaluates at most $9$ wins rather than subtracting it from $1$ for at least $10$ wins."
    },
    {
      "ans": "(a) $0.1848$, (b) $0.5643$",
      "feedback": "Calculating $\\text{P}(X = 9)$ instead of $\\text{P}(X = 10)$ yields $0.1848$."
    },
    {
      "ans": "(a) $0.2123$, (b) $0.7766$",
      "feedback": "Subtracting $\\text{P}(X \\le 10)$ instead of $\\text{P}(X \\le 9)$ incorrectly calculates $\\text{P}(X \\ge 11)$ as $1 - 0.6480 = 0.3520$ or subtracts the point probability."
    }
  ],
  "bradley_insight": {
    "type": "caution",
    "title": "The Head Teacher's Eye: Complement Index for Greater-Than-Or-Equal",
    "content": "To evaluate $\\text{P}(X \\ge k)$ using cumulative tables or functions, the complement is always strictly less than $k$, which for integers means $X \\le k - 1$:\\begin{aligned} &\\text{P}(X \\ge 10) \\cr &\\quad = 1 - \\text{P}(X \\le 9) \\end{aligned}Subtracting $\\text{P}(X \\le 10)$ excludes $10$ and loses marks."
  }
},
{
  "id": "050157",
  "group_id": "050156",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "A",
  "major_area": "Statistics",
  "topic": "Binomial Distribution",
  "subtopic": [
    "Interval Probabilities",
    "Expectation and Variance of Binomial"
  ],
  "img": false,
  "question": "A manufacturer of precision temperature sensors knows from long-term testing that $8\\%$ of sensors produced have minor calibration defects, independently of other sensors.<br><br>A quality control technician inspects a random sample of $25$ sensors.<br><br><strong>(a)</strong> State the probability distribution of the number of defective sensors, $X$, stating the values of any parameters.<br><br><strong>(b)</strong> Calculate:<br><strong>(i)</strong> the probability that fewer than $3$ sensors are defective;<br><strong>(ii)</strong> the probability that between $2$ and $5$ sensors (inclusive) are defective.<br>Give your answers to 4 decimal places.<br><br><strong>(c)</strong> Calculate:<br><strong>(i)</strong> the expected number of defective sensors in the sample;<br><strong>(ii)</strong> the standard deviation of the number of defective sensors in the sample, giving your answer to 2 decimal places.",
  "steps": [
    "<strong>(a) Stating the Probability Distribution:</strong><br><br>The number of defective sensors $X$ follows a binomial distribution:\\begin{aligned} X \\sim \\text{B}(25, 0.08) \\end{aligned}<br>with parameters $n = 25$ and $p = 0.08$.",
    "<strong>(b)(i) Probability of Fewer Than 3 Defective Sensors:</strong><br><br>Because $X$ is discrete, fewer than $3$ means $X \\le 2$:\\begin{aligned} &\\text{P}(X < 3) \\cr &\\quad = \\text{P}(X \\le 2) \\cr &\\quad = 0.6768 \\end{aligned}",
    "<strong>(b)(ii) Probability of Between 2 and 5 Defective Sensors:</strong><br><br>Express the compound interval as a difference of cumulative probabilities:\\begin{aligned} &\\text{P}(2 \\le X \\le 5) \\cr &\\quad = \\text{P}(X \\le 5) \\cr &\\qquad - \\text{P}(X \\le 1) \\cr &\\quad = 0.9877 \\cr &\\qquad - 0.3979 \\cr &\\quad = 0.5898 \\end{aligned}",
    "<strong>(c)(i) Expected Number of Defective Sensors:</strong><br><br>Using the binomial expectation formula:\\begin{aligned} &\\text{E}(X) \\cr &\\quad = np \\cr &\\quad = 25 \\times 0.08 \\cr &\\quad = 2 \\end{aligned}",
    "<strong>(c)(ii) Standard Deviation of Defective Sensors:</strong><br><br>Calculate the variance:\\begin{aligned} &\\text{Var}(X) \\cr &\\quad = np(1 - p) \\cr &\\quad = 25(0.08)(0.92) \\cr &\\quad = 1.84 \\end{aligned}<br>Take the square root for the standard deviation:\\begin{aligned} &\\sigma \\cr &\\quad = \\sqrt{1.84} \\cr &\\quad \\approx 1.36 \\end{aligned}",
    "Final Answer: (a) $X \\sim \\text{B}(25, 0.08)$, (b)(i) $0.6768$, (ii) $0.5898$, (c)(i) $2$, (ii) $1.36$"
  ],
  "pi_options": [
    {
      "ans": "(a) $X \\sim \\text{B}(25, 0.08)$, (b)(i) $0.6768$, (ii) $0.5898$, (c)(i) $2$, (ii) $1.84$",
      "feedback": "Giving the variance $np(1 - p) = 1.84$ forgets to take the square root to obtain the standard deviation."
    },
    {
      "ans": "(a) $X \\sim \\text{B}(25, 0.08)$, (b)(i) $0.8573$, (ii) $0.5898$, (c)(i) $2$, (ii) $1.36$",
      "feedback": "Evaluating $\\text{P}(X \\le 3) = 0.8573$ includes $3$, which contradicts the strict inequality 'fewer than 3'."
    },
    {
      "ans": "(a) $X \\sim \\text{B}(25, 0.08)$, (b)(i) $0.6768$, (ii) $0.7061$, (c)(i) $2$, (ii) $1.36$",
      "feedback": "Subtracting $\\text{P}(X \\le 2)$ rather than $\\text{P}(X \\le 1)$ excludes $2$ from the inclusive interval $2 \\le X \\le 5$."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Inclusive Interval Boundaries",
    "content": "For discrete binomial distributions, the inclusive interval $\\text{P}(a \\le X \\le b)$ requires subtracting the cumulative probability up to $a - 1$:\\begin{aligned} &\\text{P}(2 \\le X \\le 5) \\cr &\\quad = \\text{P}(X \\le 5) - \\text{P}(X \\le 1) \\end{aligned}Subtracting $\\text{P}(X \\le 2)$ would mistakenly remove $X = 2$."
  }
},
{
  "id": "050158",
  "group_id": "050156",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "A",
  "major_area": "Statistics",
  "topic": "Binomial Distribution",
  "subtopic": [
    "Conditional Binomial Probability",
    "Informal Evidence Evaluation"
  ],
  "img": false,
  "question": "The probability that a customer browsing an online sporting goods store makes a purchase is $0.25$. Browsing sessions are assumed to be independent.<br><br>A digital marketing team tracks a cohort of $16$ randomly selected customers.<br><br><strong>(a)</strong> Calculate the probability that at least $4$ customers make a purchase, giving your answer to 4 decimal places.<br><br><strong>(b)</strong> Given that at least $2$ customers make a purchase, calculate the probability that exactly $4$ customers make a purchase. Give your answer to 3 significant figures.<br><br><strong>(c)</strong> The website developers introduce a redesigned checkout layout. In a new random sample of $16$ browsing customers, exactly $8$ make a purchase.<br>Without performing a formal hypothesis test, comment on whether this result provides informal evidence that the redesigned layout has increased the conversion rate.",
  "steps": [
    "<strong>(a) Calculating $\\text{P}(X \\ge 4)$:</strong><br><br>Let $X$ be the number of purchases in $16$ sessions:\\begin{aligned} X \\sim \\text{B}(16, 0.25) \\end{aligned}<br>Calculate the tail probability:\\begin{aligned} &\\text{P}(X \\ge 4) \\cr &\\quad = 1 - \\text{P}(X \\le 3) \\cr &\\quad = 1 - 0.4050 \\cr &\\quad = 0.5950 \\end{aligned}",
    "<strong>(b) Conditional Probability $\\text{P}(X = 4 \\mid X \\ge 2)$:</strong><br><br>By the definition of conditional probability:\\begin{aligned} &\\text{P}(X = 4 \\mid X \\ge 2) \\cr &\\quad = \\dfrac{\\text{P}((X = 4) \\cap (X \\ge 2))}{\\text{P}(X \\ge 2)} \\cr &\\quad = \\dfrac{\\text{P}(X = 4)}{\\text{P}(X \\ge 2)} \\end{aligned}<br>Calculate the denominator:\\begin{aligned} &\\text{P}(X \\ge 2) \\cr &\\quad = 1 - \\text{P}(X \\le 1) \\cr &\\quad = 1 - 0.0635 \\cr &\\quad = 0.9365 \\end{aligned}<br>Calculate the numerator:\\begin{aligned} &\\text{P}(X = 4) \\cr &\\quad = \\binom{16}{4}(0.25)^4(0.75)^{12} \\cr &\\quad = 0.2252 \\end{aligned}<br>Evaluate the quotient:\\begin{aligned} &\\text{Prob} \\cr &\\quad = \\dfrac{0.2252}{0.9365} \\cr &\\quad \\approx 0.240 \\end{aligned}",
    "<strong>(c) Informal Evidence Evaluation:</strong><br><br>Under the original conversion rate of $0.25$, the expected number of purchases is:\\begin{aligned} &\\text{E}(X) \\cr &\\quad = 16 \\times 0.25 \\cr &\\quad = 4 \\end{aligned}<br>Observing $8$ purchases is double the expected mean and represents a high conversion rate of $50\\%$.<br><br>The probability of observing $8$ or more purchases under the original rate is very small ($\\text{P}(X \\ge 8) \\approx 0.0271$). Therefore, this provides strong informal evidence that the redesign increased conversion.",
    "Final Answer: (a) $0.5950$, (b) $0.240$, (c) Provides evidence as $8$ is twice expected mean"
  ],
  "pi_options": [
    {
      "ans": "(a) $0.5950$, (b) $0.225$, (c) Provides evidence as $8$ is twice expected mean",
      "feedback": "Using the unconditional probability $\\text{P}(X = 4) = 0.225$ forgets to divide by the reduced sample space $\\text{P}(X \\ge 2) = 0.9365$."
    },
    {
      "ans": "(a) $0.4050$, (b) $0.240$, (c) Provides evidence as $8$ is twice expected mean",
      "feedback": "Calculating $\\text{P}(X \\le 3) = 0.4050$ finds the probability of at most $3$ purchases rather than at least $4$."
    },
    {
      "ans": "(a) $0.5950$, (b) $0.240$, (c) No evidence as formal test was not conducted",
      "feedback": "Informal evidence can be deduced by comparing the observed outcome to the expected value and tail probability without running a full test."
    }
  ],
  "bradley_insight": {
    "type": "deeper",
    "title": "The Head Teacher's Eye: Reduced Sample Space in Binomial Conditioning",
    "content": "When conditioning on $X \\ge 2$, the intersection with $X = 4$ is simply $X = 4$, because $4$ already satisfies $\\ge 2$. Your calculation simply rescales the probability mass of $X = 4$ by dividing by $\\text{P}(X \\ge 2) = 1 - \\text{P}(X \\le 1)$."
  }
},
{
  "id": "050159",
  "group_id": "050156",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "A",
  "major_area": "Statistics",
  "topic": "Binomial Distribution",
  "subtopic": [
    "Finding Minimum Sample Size n",
    "Logarithms",
    "Cumulative Inequalities"
  ],
  "img": false,
  "question": "In a certain breed of sheep, the probability that an individual lamb inherits a specific rare coat pattern is $0.04$, independently of other lambs.<br><br><strong>(a)</strong> In a flock of $30$ randomly selected lambs, calculate the probability that:<br><strong>(i)</strong> exactly $2$ lambs have the coat pattern;<br><strong>(ii)</strong> more than $3$ lambs have the coat pattern.<br>Give your answers to 4 decimal places.<br><br><strong>(b)</strong> A geneticist visits a regional livestock market and needs to be at least $95\\%$ certain of finding at least one lamb with this coat pattern among the lambs examined.<br><br>Find the minimum number of lambs, $n$, that the geneticist must examine.",
  "steps": [
    "<strong>(a)(i) Calculating $\\text{P}(X = 2)$:</strong><br><br>Let $X \\sim \\text{B}(30, 0.04)$.<br><br>Using the binomial formula:\\begin{aligned} &\\text{P}(X = 2) \\cr &\\quad = \\binom{30}{2} (0.04)^2 \\cr &\\qquad \\times (0.96)^{28} \\cr &\\quad = 435 \\times 0.0016 \\cr &\\qquad \\times 0.32244 \\cr &\\quad \\approx 0.2245 \\end{aligned}",
    "<strong>(a)(ii) Calculating $\\text{P}(X > 3)$:</strong><br><br>More than $3$ means $X \\ge 4$:\\begin{aligned} &\\text{P}(X > 3) \\cr &\\quad = 1 - \\text{P}(X \\le 3) \\cr &\\quad = 1 - 0.9688 \\cr &\\quad = 0.0312 \\end{aligned}",
    "<strong>(b) Finding the Minimum Sample Size $n$:</strong><br><br>Let $Y \\sim \\text{B}(n, 0.04)$. We require:\\begin{aligned} &\\text{P}(Y \\ge 1) \\ge 0.95 \\cr &1 - \\text{P}(Y = 0) \\ge 0.95 \\cr &1 - (0.96)^n \\ge 0.95 \\cr &(0.96)^n \\le 0.05 \\end{aligned}<br>Take the natural logarithm of both sides:\\begin{aligned} n \\ln(0.96) \\le \\ln(0.05) \\end{aligned}<br>Because $\\ln(0.96) < 0$, dividing by $\\ln(0.96)$ reverses the inequality sign:\\begin{aligned} &n \\ge \\dfrac{\\ln(0.05)}{\\ln(0.96)} \\cr &n \\ge \\dfrac{-2.99573}{-0.04082} \\cr &n \\ge 73.38 \\end{aligned}<br>Because $n$ must be an integer, round up to the next whole number:\\begin{aligned} n = 74 \\end{aligned}",
    "Final Answer: (a)(i) $0.2245$, (ii) $0.0312$, (b) $74$"
  ],
  "pi_options": [
    {
      "ans": "(a)(i) $0.2245$, (ii) $0.0312$, (b) $73$",
      "feedback": "Truncating or rounding down to $73$ yields $(0.96)^{73} \\approx 0.0508 > 0.05$, which falls short of the $95\\%$ certainty threshold."
    },
    {
      "ans": "(a)(i) $0.2245$, (ii) $0.0312$, (b) $59$",
      "feedback": "Solving $(0.95)^n \\le 0.05$ instead of $(0.96)^n \\le 0.05$ uses the wrong base probability and gives $n = 59$."
    },
    {
      "ans": "(a)(i) $0.2245$, (ii) $0.0821$, (b) $74$",
      "feedback": "Subtracting $\\text{P}(X \\le 2)$ instead of $\\text{P}(X \\le 3)$ incorrectly calculates $\\text{P}(X \\ge 3)$ as $1 - 0.9179 = 0.0821$."
    }
  ],
  "bradley_insight": {
    "type": "caution",
    "title": "The Head Teacher's Eye: Dividing by Negative Logarithms",
    "content": "When solving $(0.96)^n \\le 0.05$, remember that the logarithm of any number between $0$ and $1$ is negative: $\\ln(0.96) \\approx -0.0408$. When dividing both sides by $\\ln(0.96)$, you must flip the inequality from $\\le$ to $\\ge$."
  }
},
{
  "id": "050160",
  "group_id": "050156",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "A",
  "major_area": "Statistics",
  "topic": "Binomial Distribution",
  "subtopic": [
    "Nested Binomial Models",
    "Batch Quality Control",
    "Modelling Assumptions"
  ],
  "img": false,
  "question": "An automated packaging line packs lightbulbs into boxes of $10$. The probability that any individual lightbulb is defective is $0.05$, independently of all other lightbulbs.<br><br>A box of lightbulbs is accepted for shipment if it contains at most $1$ defective lightbulb.<br><br><strong>(a)</strong> Show that the probability that a randomly chosen box is accepted for shipment is $0.9139$, correct to 4 decimal places.<br><br><strong>(b)</strong> A hardware store receives a consignment of $5$ randomly selected boxes. The acceptance status of each box is independent.<br>Calculate the probability that:<br><strong>(i)</strong> all $5$ boxes are accepted for shipment;<br><strong>(ii)</strong> exactly $4$ of the $5$ boxes are accepted for shipment.<br>Give your answers to 3 significant figures.<br><br><strong>(c)</strong> State one assumption about the manufacturing process required for the number of defective lightbulbs in a box to be modelled by a binomial distribution.",
  "steps": [
    "<strong>(a) Showing Box Acceptance Probability:</strong><br><br>Let $X$ be the number of defective lightbulbs in a box of $10$:\\begin{aligned} X \\sim \\text{B}(10, 0.05) \\end{aligned}<br>A box is accepted if $X \\le 1$:\\begin{aligned} &\\text{P}(X \\le 1) \\cr &\\quad = \\text{P}(X = 0) \\cr &\\qquad + \\text{P}(X = 1) \\end{aligned}<br>Evaluate each term:\\begin{aligned} &\\text{P}(X = 0) \\cr &\\quad = (0.95)^{10} \\cr &\\quad = 0.598737 \\cr &\\text{P}(X = 1) \\cr &\\quad = 10(0.05)(0.95)^9 \\cr &\\quad = 0.315125 \\end{aligned}<br>Sum the probabilities:\\begin{aligned} &\\text{P}(X \\le 1) \\cr &\\quad = 0.598737 \\cr &\\qquad + 0.315125 \\cr &\\quad = 0.913862 \\cr &\\quad \\approx 0.9139 \\end{aligned}",
    "<strong>(b)(i) All 5 Boxes Accepted:</strong><br><br>Let $Y$ be the number of accepted boxes in $5$:\\begin{aligned} Y \\sim \\text{B}(5, 0.91386) \\end{aligned}<br>Calculate the probability that all $5$ are accepted:\\begin{aligned} &\\text{P}(Y = 5) \\cr &\\quad = (0.91386)^5 \\cr &\\quad \\approx 0.641 \\end{aligned}",
    "<strong>(b)(ii) Exactly 4 of the 5 Boxes Accepted:</strong><br><br>Calculate $\\text{P}(Y = 4)$ using the binomial formula:\\begin{aligned} &\\text{P}(Y = 4) \\cr &\\quad = \\binom{5}{4} (0.91386)^4 \\cr &\\qquad \\times (1 - 0.91386) \\cr &\\quad = 5(0.69986) \\cr &\\qquad \\times (0.08614) \\cr &\\quad \\approx 0.302 \\end{aligned}",
    "<strong>(c) Modelling Assumption:</strong><br><br>The probability of an individual lightbulb being defective must remain constant throughout the production run (or the defect status of any bulb is independent of any other bulb).",
    "Final Answer: (a) $0.9139$, (b)(i) $0.641$, (ii) $0.302$, (c) Independent defects and constant probability"
  ],
  "pi_options": [
    {
      "ans": "(a) $0.9139$, (b)(i) $0.641$, (ii) $0.060$, (c) Independent defects and constant probability",
      "feedback": "Calculating $(0.9139)^4 \\times 0.0861 = 0.060$ omits the binomial coefficient $\\binom{5}{4} = 5$ for the arrangements."
    },
    {
      "ans": "(a) $0.9139$, (b)(i) $0.599$, (ii) $0.302$, (c) Independent defects and constant probability",
      "feedback": "Using the single-item non-defect probability $(0.95)^5 = 0.599$ confuses individual bulb quality with box acceptance probability."
    },
    {
      "ans": "(a) $0.9139$, (b)(i) $0.641$, (ii) $0.302$, (c) Sample size must exceed 30",
      "feedback": "A sample size exceeding $30$ is a guideline for the Central Limit Theorem, not an assumption for a Binomial model."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Two-Stage Nested Binomial Models",
    "content": "This is a classic 'binomial within a binomial' exam structure. Stage 1 finds the probability of an individual box meeting quality control ($p = 0.9139$). Stage 2 treats that probability as the parameter for a new binomial distribution of boxes: $Y \\sim \\text{B}(5, 0.9139)$."
  }
}  
];