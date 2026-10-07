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
},
{
  "id": "050161",
  "group_id": "050161",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "A",
  "major_area": "Statistics",
  "topic": "Statistical Measures",
  "subtopic": [
    "Stem-and-Leaf Diagrams",
    "Skewness",
    "Mode vs Median",
    "Outlier Calculations"
  ],
  "img": false,
  "question": "At the end of the autumn term at Oakridge Academy, the marks out of $100$ achieved by the $29$ students in the top mathematics set are recorded in the ordered stem-and-leaf diagram below:<br><br>\\begin{aligned} &\\begin{array}{r|l} \\text{Stem} & \\text{Leaf} \\cr \\hline 4 & 8 \\cr 5 & 2\\,9 \\cr 6 & 1\\,4\\,7 \\cr 7 & 0\\,2\\,3\\,5\\,8 \\cr 8 & 1\\,3\\,4\\,4 \\cr & 5\\,7\\,8\\,8 \\cr 9 & 0\\,1\\,2\\,2\\,2 \\cr & 4\\,6\\,8\\,8\\,9 \\end{array} \\end{aligned}<br><br>$\\text{Key: } 6 \\mid 4$ <br> $\\text{ represents a mark of } 64$<br><br><strong>(a)</strong> Describe the shape of the distribution.<br><br><strong>(b)</strong> The head of department claims that a typical student in the class achieved a mark of $92$. How did she justify this statement?<br><br><strong>(c)</strong> The class teacher claims that the average mark achieved was $84$. How did he justify this statement?<br><br><strong>(d)</strong> Daniel achieved a mark of $48$ in the test. If any student's mark is an outlier in the lower tail of the distribution, that student must attend compulsory support sessions.<br><br>Determine whether Daniel must attend compulsory support sessions.",
  "steps": [
    "<strong>(a) Shape of the Distribution:</strong><br><br>The distribution is <strong>negatively skewed</strong> (skewed to the left). The bulk of the data clusters at the higher marks, with a longer tail stretching towards the lower marks.",
    "<strong>(b) Justification for Mark 92:</strong><br><br>The head of department used the <strong>mode</strong>.<br><br>The mark $92$ is the most frequent score, appearing three times in the stem of $9$.",
    "<strong>(c) Justification for Mark 84:</strong><br><br>The class teacher used the <strong>median</strong>.<br><br>For $n = 29$ students, the median rank is:\\begin{aligned} &\\text{Median Rank} \\cr &\\quad = \\dfrac{29 + 1}{2} \\cr &\\quad = 15\\text{th} \\end{aligned}<br>Counting to the $15\\text{th}$ value gives $84$.",
    "<strong>(d) Lower Tail Outlier Test:</strong><br><br>Find the quartiles for $n = 29$:\\begin{aligned} &Q_1 \\text{ Rank} \\cr &\\quad = \\dfrac{29 + 1}{4} \\cr &\\quad = 7.5 \\to 8\\text{th} \\cr &Q_1 = 70 \\end{aligned}<br>\\begin{aligned} &Q_3 \\text{ Rank} \\cr &\\quad = \\dfrac{3(30)}{4} \\cr &\\quad = 22.5 \\to 22\\text{nd} \\cr &Q_3 = 92 \\end{aligned}<br>Calculate the interquartile range:\\begin{aligned} &\\text{IQR} \\cr &\\quad = 92 - 70 \\cr &\\quad = 22 \\end{aligned}<br>Calculate the lower outlier boundary:\\begin{aligned} &\\text{Lower Bound} \\cr &\\quad = Q_1 - 1.5(\\text{IQR}) \\cr &\\quad = 70 - 1.5(22) \\cr &\\quad = 70 - 33 \\cr &\\quad = 37 \\end{aligned}<br>Because Daniel's mark of $48$ is strictly greater than $37$, it is <strong>not an outlier</strong>.<br><br>Daniel does not need to attend compulsory support sessions.",
    "Final Answer: (a) Negatively skewed, (b) Mode, (c) Median, (d) Not an outlier, does not attend"
  ],
  "pi_options": [
    {
      "ans": "(a) Positively skewed, (b) Mode, (c) Median, (d) Not an outlier, does not attend",
      "feedback": "Looking at the visual orientation upside-down confuses negative skew with positive skew; the tail points toward the lower values."
    },
    {
      "ans": "(a) Negatively skewed, (b) Mean, (c) Median, (d) Not an outlier, does not attend",
      "feedback": "A mark of $92$ is the most frequent score (the mode); the mean of this data set is lower than $92$."
    },
    {
      "ans": "(a) Negatively skewed, (b) Mode, (c) Median, (d) Outlier, must attend",
      "feedback": "Using an incorrect boundary of $Q_1 - \\text{IQR} = 48$ incorrectly flags Daniel's mark as an outlier."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Identifying Skewness in Stem-and-Leaf",
    "content": "Turn the stem-and-leaf diagram on its side with the stem running horizontally. If the longer tail points left toward lower numbers, it is negatively skewed. If the tail stretches right toward higher numbers, it is positively skewed."
  }
},
{
  "id": "050162",
  "group_id": "050161",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "A",
  "major_area": "Statistics",
  "topic": "Statistical Measures",
  "subtopic": [
    "Back-to-Back Stem-and-Leaf",
    "Comparative Measures",
    "Skewness"
  ],
  "img": false,
  "question": "A physics teacher gives the same test (marked out of $50$) to two different classes, Group A and Group B, each containing $21$ students. The results are shown in the back-to-back stem-and-leaf diagram below:<br><br>\\begin{aligned} &\\begin{array}{r|c|l} \\text{A} & \\text{Stem} & \\text{B} \\cr \\hline & 1 & 4\\,8\\,9 \\cr 8\\,5 & 2 & 1\\,3\\,5\\,7\\,8 \\cr 9\\,7\\,4\\,2 & 3 & 0\\,2\\,4\\,6 \\cr & & 8\\,9 \\cr 8\\,7\\,6\\,5 & 4 & 1\\,3\\,5\\,7 \\cr 3\\,1\\,0 & & \\cr 9\\,8\\,8\\,6 & 5 & 0 \\cr 5\\,4\\,2\\,0 & & \\end{array} \\end{aligned}<br><br>$\\text{Key: } 5 \\mid 2 \\mid 1 $ <br> $\\text{ represents } 25 \\text{ for A and } 21 \\text{ for B}$<br><br><strong>(a)</strong> For Group A:<br><strong>(i)</strong> Find the median mark.<br><strong>(ii)</strong> Find the interquartile range (IQR).<br><br><strong>(b)</strong> For Group B:<br><strong>(i)</strong> Find the median mark.<br><strong>(ii)</strong> Find the interquartile range (IQR).<br><br><strong>(c)</strong> Compare the performance of Group A and Group B in context, referencing both an appropriate measure of average and an appropriate measure of spread.<br><br><strong>(d)</strong> State, with a reason, whether the mean or the median is the more appropriate measure of central tendency to compare these two distributions.",
  "steps": [
    "<strong>(a) Summary Measures for Group A:</strong><br><br>For $n = 21$, the median rank is:\\begin{aligned} &\\text{Rank} \\cr &\\quad = \\dfrac{21 + 1}{2} \\cr &\\quad = 11\\text{th} \\cr &\\text{Median}_A = 45 \\end{aligned}<br>Find the quartiles:\\begin{aligned} &Q_1 \\text{ Rank} \\cr &\\quad = \\dfrac{21 + 1}{4} \\cr &\\quad = 5.5 \\to 6\\text{th} \\cr &Q_1 = 37 \\cr &Q_3 \\text{ Rank} \\cr &\\quad = \\dfrac{3(22)}{4} \\cr &\\quad = 16.5 \\to 16\\text{th} \\cr &Q_3 = 52 \\end{aligned}<br>Calculate the interquartile range:\\begin{aligned} &\\text{IQR}_A \\cr &\\quad = 52 - 37 \\cr &\\quad = 15 \\end{aligned}",
    "<strong>(b) Summary Measures for Group B:</strong><br><br>For Group B ($n = 21$):\\begin{aligned} &\\text{Median}_B = 32 \\cr &Q_1 = 25 \\cr &Q_3 = 39 \\end{aligned}<br>Calculate the interquartile range:\\begin{aligned} &\\text{IQR}_B \\cr &\\quad = 39 - 25 \\cr &\\quad = 14 \\end{aligned}",
    "<strong>(c) Comparison in Context:</strong><br><br><strong>Average:</strong> Group A achieved a higher average mark than Group B, with a median of $45$ compared to $32$.<br><br><strong>Spread:</strong> Both groups exhibited very similar consistency, with an IQR of $15$ for Group A and $14$ for Group B.",
    "<strong>(d) Appropriateness of the Median:</strong><br><br>The <strong>median</strong> is more appropriate because the distribution for Group A is negatively skewed.<br><br>The median is unaffected by skewness or extreme values, whereas the mean would be pulled by the tail.",
    "Final Answer: (a)(i) $45$, (ii) $15$, (b)(i) $32$, (ii) $14$, (c) Group A higher average, similar spread, (d) Median due to skewness"
  ],
  "pi_options": [
    {
      "ans": "(a)(i) $45$, (ii) $15$, (b)(i) $32$, (ii) $14$, (c) Group B higher average, similar spread, (d) Median due to skewness",
      "feedback": "Inverting the average comparison is incorrect; Group A has a higher median of $45$ compared to $32$ for Group B."
    },
    {
      "ans": "(a)(i) $45$, (ii) $15$, (b)(i) $32$, (ii) $14$, (c) Group A higher average, similar spread, (d) Mean due to symmetry",
      "feedback": "Group A is negatively skewed, so the distributions are not symmetric and the mean is not the preferred measure."
    },
    {
      "ans": "(a)(i) $46$, (ii) $15$, (b)(i) $32$, (ii) $14$, (c) Group A higher average, similar spread, (d) Median due to skewness",
      "feedback": "Reading leaves from the stem outward for Group A gives $45$ for the 11th value, not $46$."
    }
  ],
  "bradley_insight": {
    "type": "caution",
    "title": "The Head Teacher's Eye: Reading Back-to-Back Leaves",
    "content": "For the left-hand group in a back-to-back stem-and-leaf diagram, leaves are ordered from the central stem outward to the left: $4 \\mid 0, 1, 3, 5$ means scores are $40, 41, 43, 45$. Do not read them left-to-right from the margin."
  }
},
{
  "id": "050163",
  "group_id": "050161",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "A",
  "major_area": "Statistics",
  "topic": "Statistical Measures",
  "subtopic": [
    "Decimal Stem-and-Leaf",
    "Two-Tailed Outlier Detection",
    "Measures of Spread"
  ],
  "img": false,
  "question": "A sports scientist measures the sprint times (in seconds) of $25$ athletes over a $100\\text{ m}$ track. The recorded times are displayed in the stem-and-leaf diagram below:<br><br>\\begin{aligned} &\\begin{array}{r|l} \\text{Stem} & \\text{Leaf} \\cr \\hline 11 & 8 \\cr 12 & 2\\,5\\,9 \\cr 13 & 1\\,4\\,4\\,6\\,8 \\cr 14 & 0\\,2\\,3\\,5 \\cr & 5\\,7\\,8\\,9 \\cr 15 & 1\\,2\\,4\\,6\\,8 \\cr 16 & 1\\,9 \\end{array} \\end{aligned}<br><br>$\\text{Key: } 13 \\mid 4$<br> $\\text{ represents a time of } 13.4\\text{ seconds}$<br><br><strong>(a)</strong> State the modal sprint time.<br><br><strong>(b)</strong> Calculate:<br><strong>(i)</strong> the median sprint time;<br><strong>(ii)</strong> the interquartile range (IQR) of the sprint times.<br><br><strong>(c)</strong> The fastest athlete recorded a time of $11.8\\text{ seconds}$ and the slowest athlete recorded a time of $16.9\\text{ seconds}$.<br><br>Using the $1.5 \\times \\text{IQR}$ rule, determine whether either of these extreme times is an outlier.",
  "steps": [
    "<strong>(a) Modal Sprint Time:</strong><br><br>The times $13.4\\text{ s}$ and $14.5\\text{ s}$ both occur with the highest frequency of $2$.<br><br>The distribution is <strong>bimodal</strong>, with modes $13.4\\text{ s}$ and $14.5\\text{ s}$.",
    "<strong>(b)(i) Median Sprint Time:</strong><br><br>For $n = 25$, the median rank is:\\begin{aligned} &\\text{Rank} \\cr &\\quad = \\dfrac{25 + 1}{2} \\cr &\\quad = 13\\text{th} \\end{aligned}<br>Counting to the $13\\text{th}$ value gives:\\begin{aligned} &\\text{Median} \\cr &\\quad = 14.3\\text{ s} \\end{aligned}",
    "<strong>(b)(ii) Interquartile Range:</strong><br><br>Find the quartiles:\\begin{aligned} &Q_1 \\text{ Rank} \\cr &\\quad = \\dfrac{25 + 1}{4} \\cr &\\quad = 6.5 \\to 7\\text{th} \\cr &Q_1 = 13.4\\text{ s} \\end{aligned}<br>\\begin{aligned} &Q_3 \\text{ Rank} \\cr &\\quad = \\dfrac{3(26)}{4} \\cr &\\quad = 19.5 \\to 19\\text{th} \\cr &Q_3 = 15.1\\text{ s} \\end{aligned}<br>Calculate the interquartile range:\\begin{aligned} &\\text{IQR} \\cr &\\quad = 15.1 - 13.4 \\cr &\\quad = 1.7\\text{ s} \\end{aligned}",
    "<strong>(c) Outlier Checks on Both Tails:</strong><br><br>Calculate the lower outlier boundary:\\begin{aligned} &\\text{Lower Bound} \\cr &\\quad = Q_1 - 1.5(\\text{IQR}) \\cr &\\quad = 13.4 - 1.5(1.7) \\cr &\\quad = 13.4 - 2.55 \\cr &\\quad = 10.85\\text{ s} \\end{aligned}<br>Calculate the upper outlier boundary:\\begin{aligned} &\\text{Upper Bound} \\cr &\\quad = Q_3 + 1.5(\\text{IQR}) \\cr &\\quad = 15.1 + 1.5(1.7) \\cr &\\quad = 15.1 + 2.55 \\cr &\\quad = 17.65\\text{ s} \\end{aligned}<br>Because $11.8 > 10.85$ and $16.9 < 17.65$, <strong>neither</strong> time is classified as an outlier.",
    "Final Answer: (a) Bimodal ($13.4\\text{ s}$ and $14.5\\text{ s}$), (b)(i) $14.3\\text{ s}$, (ii) $1.7\\text{ s}$, (c) Neither is an outlier"
  ],
  "pi_options": [
    {
      "ans": "(a) $14.5\\text{ s}$, (b)(i) $14.3\\text{ s}$, (ii) $1.7\\text{ s}$, (c) Neither is an outlier",
      "feedback": "The time $13.4\\text{ s}$ also appears twice, making the distribution bimodal rather than having $14.5\\text{ s}$ as a unique mode."
    },
    {
      "ans": "(a) Bimodal ($13.4\\text{ s}$ and $14.5\\text{ s}$), (b)(i) $14.3\\text{ s}$, (ii) $1.7\\text{ s}$, (c) $16.9\\text{ s}$ is an outlier",
      "feedback": "Using an upper boundary of $Q_3 + \\text{IQR} = 16.8$ ignores the $1.5$ multiplier and incorrectly flags $16.9\\text{ s}$ as an outlier."
    },
    {
      "ans": "(a) Bimodal ($13.4\\text{ s}$ and $14.5\\text{ s}$), (b)(i) $14.2\\text{ s}$, (ii) $1.7\\text{ s}$, (c) Neither is an outlier",
      "feedback": "Counting error on the 13th value gives $14.2$ instead of $14.3$ for the median."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Tied Modes in Stem-and-Leaf",
    "content": "Always check for repeated leaves across all stems. When two different leaves appear with the exact same maximum frequency, state that the distribution is bimodal and give both values."
  }
},
{
  "id": "050164",
  "group_id": "050161",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "A",
  "major_area": "Statistics",
  "topic": "Statistical Measures",
  "subtopic": [
    "Measures of Central Tendency",
    "Skewness Comparison",
    "2-Sigma Outlier Rule"
  ],
  "img": false,
  "question": "A sample of $50$ participants in a cognitive reaction trial completed a puzzle. The number of errors made by each participant, $x$, is summarised in the frequency table below:<br><br><table style='width:100%; max-width:200px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:5px; border:1px solid #ccc;'>Errors ($x$)</th><th style='padding:5px; border:1px solid #ccc;'>Freq ($f$)</th></tr></thead><tbody><tr><td style='padding:5px; border:1px solid #ccc;'>1</td><td style='padding:5px; border:1px solid #ccc;'>2</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>2</td><td style='padding:5px; border:1px solid #ccc;'>5</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>3</td><td style='padding:5px; border:1px solid #ccc;'>8</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>4</td><td style='padding:5px; border:1px solid #ccc;'>14</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>5</td><td style='padding:5px; border:1px solid #ccc;'>12</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>6</td><td style='padding:5px; border:1px solid #ccc;'>9</td></tr></tbody></table><br><strong>(a)</strong> Calculate:<br><strong>(i)</strong> the mode;<br><strong>(ii)</strong> the median;<br><strong>(iii)</strong> the mean, $\\bar{x}$, of the number of errors.<br><br><strong>(b)</strong> State the type of skewness exhibited by this distribution. Justify your answer by comparing your calculated measures of central tendency.<br><br><strong>(c)</strong> For these data, the standard deviation is $s = 1.34$.<br>Using the criterion that an outlier is any value lying more than $2$ standard deviations from the mean, determine whether any participants who made exactly $1$ error are classified as outliers.",
  "steps": [
    "<strong>(a)(i) Mode:</strong><br><br>The highest frequency is $14$, which corresponds to:\\begin{aligned} &\\text{Mode} = 4 \\end{aligned}",
    "<strong>(a)(ii) Median:</strong><br><br>Cumulative frequencies are $2, 7, 15, 29, 41, 50$.<br><br>For $n = 50$, the median rank is $\\frac{50 + 1}{2} = 25.5$. Both the $25\\text{th}$ and $26\\text{th}$ values fall in the category $x = 4$:\\begin{aligned} &\\text{Median} = 4 \\end{aligned}",
    "<strong>(a)(iii) Mean:</strong><br><br>Calculate $\\sum fx$:\\begin{aligned} &\\sum fx \\cr &\\quad = 1(2) + 2(5) \\cr &\\qquad + 3(8) \\cr &\\qquad + 4(14) \\cr &\\qquad + 5(12) \\cr &\\qquad + 6(9) \\cr &\\quad = 2 + 10 + 24 \\cr &\\qquad + 56 + 60 + 54 \\cr &\\quad = 206 \\end{aligned}<br>Calculate the mean:\\begin{aligned} &\\bar{x} \\cr &\\quad = \\dfrac{206}{50} \\cr &\\quad = 4.12 \\end{aligned}",
    "<strong>(b) Skewness Justification:</strong><br><br>Compare the measures of location:\\begin{aligned} &\\bar{x} = 4.12 \\cr &\\text{Median} = 4 \\cr &\\bar{x} > \\text{Median} \\end{aligned}<br>Because the mean is strictly greater than the median, the distribution exhibits <strong>positive skew</strong>.",
    "<strong>(c) 2-Sigma Outlier Test:</strong><br><br>Calculate the lower $2$-sigma threshold:\\begin{aligned} &\\text{Lower Bound} \\cr &\\quad = \\bar{x} - 2s \\cr &\\quad = 4.12 - 2(1.34) \\cr &\\quad = 4.12 - 2.68 \\cr &\\quad = 1.44 \\end{aligned}<br>Because $1 < 1.44$, participants who made exactly $1$ error <strong>are classified as outliers</strong>.",
    "Final Answer: (a)(i) $4$, (ii) $4$, (iii) $4.12$, (b) Positively skewed ($\text{Mean} > \text{Median}$), (c) Exactly $1$ error is an outlier"
  ],
  "pi_options": [
    {
      "ans": "(a)(i) $4$, (ii) $4$, (iii) $4.12$, (b) Negatively skewed ($\text{Mean} < \text{Median}$), (c) Exactly $1$ error is an outlier",
      "feedback": "Since the mean of $4.12$ exceeds the median of $4.00$, the distribution has positive skew, not negative skew."
    },
    {
      "ans": "(a)(i) $4$, (ii) $4$, (iii) $4.12$, (b) Positively skewed ($\text{Mean} > \text{Median}$), (c) No outliers",
      "feedback": "A score of $1$ falls below the lower boundary of $1.44$, so it is an outlier."
    },
    {
      "ans": "(a)(i) $4$, (ii) $3.5$, (iii) $4.12$, (b) Positively skewed ($\text{Mean} > \text{Median}$), (c) Exactly $1$ error is an outlier",
      "feedback": "The 25th and 26th values are both 4, so the median is 4, not 3.5."
    }
  ],
  "bradley_insight": {
    "type": "deeper",
    "title": "The Head Teacher's Eye: Skewness Direction Rule",
    "content": "The mean is pulled in the direction of the long tail. Therefore:\\begin{aligned} &\\text{Mean} > \\text{Median} \\implies \\text{Positive skew} \\cr &\\text{Mean} < \\text{Median} \\implies \\text{Negative skew} \\end{aligned}Always state this explicit comparison when justifying skewness."
  }
},
{
  "id": "050165",
  "group_id": "050161",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "A",
  "major_area": "Statistics",
  "topic": "Statistical Measures",
  "subtopic": [
    "Five-Number Summary",
    "Outlier Identification",
    "Effect of Cleaning Data"
  ],
  "img": false,
  "question": "An estate agency compiles a five-number summary of the selling prices of a sample of $40$ houses in a market town. The values (in thousands of pounds, $£1000\\text{s}$) are:<br><br>$$\\text{Minimum} = 180$$<br>$$Q_1 = 240$$<br>$$\\text{Median} = 285$$<br>$$Q_3 = 340$$<br>$$\\text{Maximum} = 580$$<br><br>The mean house price for this sample of $40$ houses is $£305\\,000$.<br><br><strong>(a)</strong> Show that the maximum price of $£580\\,000$ is an outlier using the $1.5 \\times \\text{IQR}$ criterion.<br><br><strong>(b)</strong> Show that the minimum price of $£180\\,000$ is not an outlier.<br><br><strong>(c)</strong> If the outlier of $£580\\,000$ is removed from the data set, describe the effect this removal will have on:<br><strong>(i)</strong> the median;<br><strong>(ii)</strong> the mean;<br><strong>(iii)</strong> the standard deviation.",
  "steps": [
    "<strong>(a) Upper Outlier Test on £580,000:</strong><br><br>Calculate the interquartile range:\\begin{aligned} &\\text{IQR} \\cr &\\quad = Q_3 - Q_1 \\cr &\\quad = 340 - 240 \\cr &\\quad = 100 \\end{aligned}<br>Calculate the upper outlier boundary:\\begin{aligned} &\\text{Upper Bound} \\cr &\\quad = Q_3 + 1.5(\\text{IQR}) \\cr &\\quad = 340 + 1.5(100) \\cr &\\quad = 340 + 150 \\cr &\\quad = 490 \\end{aligned}<br>Because $580 > 490$, the maximum price of $£580\\,000$ is confirmed as an <strong>outlier</strong>.",
    "<strong>(b) Lower Outlier Test on £180,000:</strong><br><br>Calculate the lower outlier boundary:\\begin{aligned} &\\text{Lower Bound} \\cr &\\quad = Q_1 - 1.5(\\text{IQR}) \\cr &\\quad = 240 - 1.5(100) \\cr &\\quad = 240 - 150 \\cr &\\quad = 90 \\end{aligned}<br>Because $180 > 90$, the minimum price of $£180\\,000$ is <strong>not an outlier</strong>.",
    "<strong>(c)(i) Effect on the Median:</strong><br><br>The median is a resistant measure of location. Removing a single extreme high value will have <strong>negligible effect</strong> (it may stay the same or decrease slightly to the new central value).",
    "<strong>(c)(ii) Effect on the Mean:</strong><br><br>The mean will <strong>decrease</strong>, because removing an unusually high value reduces the overall total sum of the data.",
    "<strong>(c)(iii) Effect on the Standard Deviation:</strong><br><br>The standard deviation will <strong>decrease</strong>, because removing the most extreme value reduces the overall spread and dispersion around the mean.",
    "Final Answer: (a) $580 > 490$, outlier, (b) $180 > 90$, not an outlier, (c)(i) Negligible effect, (ii) Decreases, (iii) Decreases"
  ],
  "pi_options": [
    {
      "ans": "(a) $580 > 490$, outlier, (b) $180 > 90$, not an outlier, (c)(i) Decreases significantly, (ii) Decreases, (iii) Decreases",
      "feedback": "The median is resistant to outliers; removing a single extreme value causes negligible or no change, not a significant drop."
    },
    {
      "ans": "(a) $580 > 490$, outlier, (b) $180 > 90$, not an outlier, (c)(i) Negligible effect, (ii) Increases, (iii) Decreases",
      "feedback": "Removing an extremely high score removes mass from the upper end, causing the mean to decrease, not increase."
    },
    {
      "ans": "(a) $580 > 490$, outlier, (b) $180 < 90$, outlier, (c)(i) Negligible effect, (ii) Decreases, (iii) Decreases",
      "feedback": "A value of $180$ is strictly greater than the lower boundary of $90$, so the minimum price is not an outlier."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Resistance of Median vs Sensitivity of Mean",
    "content": "The mean and standard deviation are non-resistant statistics: removing a single high outlier causes both to drop sharply. In contrast, the median and IQR are resistant statistics that remain virtually unchanged."
  }
},
{
  "id": "050166",
  "group_id": "050166",
  "branch": "Statistics",
  "board": "OCR",
  "level": "A",
  "major_area": "Statistics",
  "topic": "The Normal Distribution",
  "subtopic": [
    "Distribution Parameters",
    "Linear Transformations"
  ],
  "img": "images/Statistics_pngs/050166.png",
  "question": "The screenshot in the diagram shows the probability distribution for the continuous random variable $X$, where $X \\sim \\text{N}(\\mu, \\sigma^2)$.<br><br>The area of each of the unshaded regions under the curve is $0.025$. The lower boundary of the shaded region is at $46.080$ and the upper boundary of the shaded region is at $53.920$.<br><br><strong>(a)</strong> Calculate the value of $\\mu$.<br><br><strong>(b)</strong> Calculate the value of $\\sigma^2$.<br><br><strong>(c)</strong> The random variable $Y$ is given by $Y = 3X + 10$.<br><br><strong>(i)</strong> State the distribution of $Y$.<br><br><strong>(ii)</strong> Find $\\text{P}(Y > 172)$.",
  "steps": [
    "<strong>(a) Mean $\\mu$:</strong><br><br>By symmetry of the normal distribution, the population mean $\\mu$ is located at the exact midpoint of the central shaded region:\\begin{aligned} \\mu &= \\dfrac{46.080 + 53.920}{2} \\cr &= 50 \\end{aligned}",
    "<strong>(b) Variance $\\sigma^2$:</strong><br><br>The unshaded tails each have an area of $0.025$, meaning the central shaded area is $0.95$.<br><br>From standard normal percentage points tables, the upper critical value is $z = 1.960$.<br><br>Standardising the upper boundary $x = 53.920$:\\begin{aligned} &\\dfrac{53.920 - 50}{\\sigma} = 1.960 \\cr &3.920 = 1.960\\sigma \\cr &\\sigma = 2 \\end{aligned}<br>Squaring gives the population variance:\\begin{aligned} \\sigma^2 &= 2^2 \\cr &= 4 \\end{aligned}",
    "<strong>(c)(i) Distribution of $Y$:</strong><br><br>For the linear transformation $Y = 3X + 10$:\\begin{aligned} \\text{E}(Y) &= 3\\text{E}(X) + 10 \\cr &= 3(50) + 10 \\cr &= 160 \\end{aligned}<br>The variance scales quadratically:\\begin{aligned} \\text{Var}(Y) &= 3^2\\text{Var}(X) \\cr &= 9(4) \\cr &= 36 \\end{aligned}<br>Hence:\\begin{aligned} Y \\sim \\text{N}(160, 36) \\end{aligned}",
    "<strong>(c)(ii) Probability $\\text{P}(Y > 172)$:</strong><br><br>Standardising with mean $160$ and standard deviation $\\sqrt{36} = 6$:\\begin{aligned} \\text{P}(Y > 172) &= \\text{P}\\left(Z > \\dfrac{172 - 160}{6}\\right) \\cr &= \\text{P}\\left(Z > \\dfrac{12}{6}\\right) \\cr &= \\text{P}(Z > 2) \\cr &= 1 - \\Phi(2) \\cr &= 1 - 0.9772 \\cr &= 0.0228 \\end{aligned}",
    "Final Answer: (a) $\\mu = 50$, (b) $\\sigma^2 = 4$, (c)(i) $Y \\sim \\text{N}(160, 36)$, (ii) $0.0228$"
  ],
  "pi_options": [
    {
      "ans": "(a) $\\mu = 50$, (b) $\\sigma^2 = 4$, (c)(i) $Y \\sim \\text{N}(160, 12)$, (ii) $0.0003$",
      "feedback": "Remember that for a linear transformation $Y = aX + b$, the variance scales quadratically: $\\text{Var}(Y) = a^2\\text{Var}(X) = 3^2(4) = 36$, rather than $3(4)$."
    },
    {
      "ans": "(a) $\\mu = 50$, (b) $\\sigma^2 = 2$, (c)(i) $Y \\sim \\text{N}(160, 18)$, (ii) $0.0023$",
      "feedback": "In part (b), solving the standardized equation yields the standard deviation $\\sigma = 2$. You must square this to find the population variance $\\sigma^2 = 4$."
    },
    {
      "ans": "(a) $\\mu = 50$, (b) $\\sigma^2 = 5.68$, (c)(i) $Y \\sim \\text{N}(160, 51.1)$, (ii) $0.0465$",
      "feedback": "With $0.025$ in each unshaded tail, the critical $z$-value is $1.960$, not $1.645$ (which leaves $0.05$ in a single tail)."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Symmetry and Scale",
    "content": "Always exploit symmetry first: the mean of a symmetric normal distribution is strictly halfway between equal tail boundaries. When evaluating $Y = aX + b$, remember that adding a constant shifts the mean but does not affect spread, while multiplying scales the standard deviation by $|a|$ and the variance by $a^2$."
  }
},
{
  "id": "050167",
  "group_id": "050166",
  "branch": "Statistics",
  "board": "OCR",
  "level": "A",
  "major_area": "Statistics",
  "topic": "The Normal Distribution",
  "subtopic": [
    "Inverse Normal",
    "Simultaneous Equations"
  ],
  "img": "images/Statistics_pngs/050167.png",
  "question": "A precision manufacturing process produces metal shafts whose lengths, $W\\text{ cm}$, are modelled by the continuous random variable $W \\sim \\text{N}(\\mu, \\sigma^2)$.<br><br>The screenshot in the diagram shows the distribution with two rejection tails shaded. The lower shaded region has an area of $0.0228$ with an upper boundary at $42.0$. The upper shaded region has an area of $0.0668$ with a lower boundary at $63.0$.<br><br><strong>(a)</strong> Write down two simultaneous equations connecting $\\mu$ and $\\sigma$.<br><br><strong>(b)</strong> Hence determine the value of $\\mu$ and the value of $\\sigma$.<br><br><strong>(c)</strong> A shaft is accepted if its length lies between $45.0\\text{ cm}$ and $60.0\\text{ cm}$. Find the probability that a randomly chosen shaft is accepted.",
  "steps": [
    "<strong>(a) Simultaneous Equations:</strong><br><br>For the lower tail:\\begin{aligned} &\\text{P}(W < 42.0) = 0.0228 \\cr &\\Phi(-2.00) = 0.0228 \\cr &\\dfrac{42.0 - \\mu}{\\sigma} = -2.00 \\cr &42.0 = \\mu - 2\\sigma \\end{aligned}<br>For the upper tail:\\begin{aligned} &\\text{P}(W > 63.0) = 0.0668 \\cr &\\text{P}(W < 63.0) = 0.9332 \\cr &\\Phi(1.50) = 0.9332 \\cr &\\dfrac{63.0 - \\mu}{\\sigma} = 1.50 \\cr &63.0 = \\mu + 1.5\\sigma \\end{aligned}",
    "<strong>(b) Values of $\\mu$ and $\\sigma$:</strong><br><br>Subtracting the first equation from the second:\\begin{aligned} &63.0 - 42.0 = 1.5\\sigma - (-2\\sigma) \\cr &21.0 = 3.5\\sigma \\cr &\\sigma = \\dfrac{21.0}{3.5} \\cr &\\sigma = 6 \\end{aligned}<br>Substituting $\\sigma = 6$ into the first equation:\\begin{aligned} \\mu &= 42.0 + 2(6) \\cr &= 42.0 + 12 \\cr &= 54 \\end{aligned}",
    "<strong>(c) Acceptance Probability:</strong><br><br>Standardising both limits for $W \\sim \\text{N}(54, 6^2)$:\\begin{aligned} z_1 &= \\dfrac{45.0 - 54}{6} \\cr &= -1.5 \\end{aligned}\\begin{aligned} z_2 &= \\dfrac{60.0 - 54}{6} \\cr &= 1.0 \\end{aligned}<br>Calculating the probability between these values:\\begin{aligned} &\\text{P}(45.0 < W < 60.0) \\cr &\\quad = \\text{P}(-1.5 < Z < 1.0) \\cr &\\quad = \\Phi(1.0) - \\Phi(-1.5) \\cr &\\quad = 0.8413 - (1 - 0.9332) \\cr &\\quad = 0.8413 - 0.0668 \\cr &\\quad = 0.7745 \\end{aligned}",
    "Final Answer: (a) $42.0 = \\mu - 2\\sigma$ and $63.0 = \\mu + 1.5\\sigma$, (b) $\\mu = 54, \\sigma = 6$, (c) $0.7745$"
  ],
  "pi_options": [
    {
      "ans": "(a) $42.0 = \\mu + 2\\sigma$ and $63.0 = \\mu + 1.5\\sigma$, (b) $\\mu = 126, \\sigma = -42$, (c) $0.7745$",
      "feedback": "A boundary below the mean has a negative $z$-score. The standardized equation must be $z = -2.0$, producing $42.0 = \\mu - 2\\sigma$, not $\\mu + 2\\sigma$."
    },
    {
      "ans": "(a) $42.0 = \\mu - 2\\sigma$ and $63.0 = \\mu + 1.5\\sigma$, (b) $\\mu = 54, \\sigma = 6$, (c) $0.0919$",
      "feedback": "To calculate $\\text{P}(-1.5 < Z < 1.0)$, compute \\begin{aligned}\\Phi(1.0) - \\Phi(-1.5) &= 0.8413 - 0.0668 \\cr &= 0.7745\\end{aligned} Do not subtract both cumulative values from 1."
    },
    {
      "ans": "(a) $42.0 = \\mu - 2\\sigma$ and $63.0 = \\mu + 1.5\\sigma$, (b) $\\mu = 48, \\sigma = 6$, (c) $0.6687$",
      "feedback": "When substituting $\\sigma = 6$ into $42.0 = \\mu - 2\\sigma$, rearranging gives $\\mu = 42.0 + 2(6) = 54$, not $42.0 - 12$."
    }
  ],
  "bradley_insight": {
    "type": "caution",
    "title": "The Head Teacher's Eye: Beware the Negative Sign",
    "content": "The most frequent mistake in inverse normal problems is forgetting the negative sign on lower-tail $z$-scores. Because the tail area ($0.0228$) is well below $0.5$, the observation lies to the left of the mean, meaning $z = -2.00$ must be strictly negative."
  }
},
{
  "id": "050168",
  "group_id": "050166",
  "branch": "Statistics",
  "board": "OCR",
  "level": "A",
  "major_area": "Statistics",
  "topic": "The Normal Distribution",
  "subtopic": [
    "Sampling Distributions",
    "Hypothesis Testing"
  ],
  "img": "images/Statistics_pngs/050168.png",
  "question": "The diagram shows the sampling distribution of the sample mean $\\bar{X}$ for random samples of size $n = 25$ taken from a normal population $X \\sim \\text{N}(\\mu, \\sigma^2)$ under the null hypothesis $H_0: \\mu = 120$, where the population standard deviation is known to be $\\sigma = 15$.<br><br>A one-tailed hypothesis test is conducted at the $5\\%$ significance level with alternative hypothesis $H_1: \\mu > 120$.<br><br><strong>(a)</strong> State the sampling distribution of $\\bar{X}$ under $H_0$, giving its mean and standard error.<br><br><strong>(b)</strong> Show that the critical value for this test, rounded to two decimal places, is $c = 124.94$.<br><br><strong>(c)</strong> A quality assurance manager draws a sample of $25$ items and observes a sample mean of $\\bar{x} = 126.2$, as indicated by the arrow in the diagram.<br><br><strong>(i)</strong> State the conclusion of the test in context.<br><br><strong>(ii)</strong> Calculate the $p$-value for this test, giving your answer to four decimal places.",
  "steps": [
    "<strong>(a) Sampling Distribution of $\\bar{X}$:</strong><br><br>Under $H_0$, the sample mean is distributed as:\\begin{aligned} \\bar{X} &\\sim \\text{N}\\left(\\mu, \\dfrac{\\sigma^2}{n}\\right) \\cr &\\sim \\text{N}\\left(120, \\dfrac{15^2}{25}\\right) \\cr &\\sim \\text{N}(120, 9) \\end{aligned}<br>The mean is $120$ and the standard error is:\\begin{aligned} \\text{SE} &= \\dfrac{15}{\\sqrt{25}} \\cr &= 3 \\end{aligned}",
    "<strong>(b) Critical Value $c$:</strong><br><br>For a one-tailed test at the $5\\%$ significance level, the upper percentage point of the standard normal distribution is:\\begin{aligned} z_{0.95} = 1.6449 \\end{aligned}<br>Calculating the critical value on the scale of $\\bar{X}$:\\begin{aligned} c &= 120 + 1.6449(3) \\cr &= 120 + 4.9347 \\cr &= 124.9347... \\cr &\\approx 124.94 \\end{aligned}",
    "<strong>(c)(i) Test Conclusion:</strong><br><br>The critical region is $\\bar{X} \\ge 124.94$.<br><br>Since the observed sample mean $\\bar{x} = 126.2 > 124.94$, it lies inside the critical region.<br><br>Reject $H_0$. There is significant evidence at the $5\\%$ level to suggest that the population mean is greater than $120$.",
    "<strong>(c)(ii) Calculation of $p$-value:</strong><br><br>Standardising the observed sample mean:\\begin{aligned} z &= \\dfrac{126.2 - 120}{3} \\cr &= \\dfrac{6.2}{3} \\cr &\\approx 2.0667 \\end{aligned}<br>Finding the upper tail probability:\\begin{aligned} p\\text{-value} &= \\text{P}(\\bar{X} \\ge 126.2) \\cr &= 1 - \\Phi(2.067) \\cr &= 1 - 0.9806 \\cr &= 0.0194 \\end{aligned}",
    "Final Answer: (a) $\\bar{X} \\sim \\text{N}(120, 9)$, mean $120$, $\\text{SE} = 3$, (b) $c = 124.94$, (c)(i) Reject $H_0$, (ii) $p = 0.0194$"
  ],
  "pi_options": [
    {
      "ans": "(a) $\\bar{X} \\sim \\text{N}(120, 225)$, mean $120$, $\\text{SE} = 15$, (b) $c = 144.67$, (c)(i) Accept $H_0$, (ii) $p = 0.3409$",
      "feedback": "When evaluating the distribution of a sample mean, the standard error is $\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{15}{\\sqrt{25}} = 3$, not the individual population standard deviation $15$."
    },
    {
      "ans": "(a) $\\bar{X} \\sim \\text{N}(120, 9)$, mean $120$, $\\text{SE} = 3$, (b) $c = 125.88$, (c)(i) Reject $H_0$, (ii) $p = 0.0388$",
      "feedback": "The test is one-tailed at the $5\\%$ level, so the critical value is $z = 1.6449$. The value $z = 1.960$ applies to a two-tailed test at the $5\\%$ level."
    },
    {
      "ans": "(a) $\\bar{X} \\sim \\text{N}(120, 9)$, mean $120$, $\\text{SE} = 3$, (b) $c = 124.94$, (c)(i) Accept $H_0$, (ii) $p = 0.0194$",
      "feedback": "Because the observed sample mean $\\bar{x} = 126.2$ is greater than the critical value $124.94$, it falls inside the rejection region, so $H_0$ must be rejected."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Dual Routes to Decision",
    "content": "Notice how the critical value approach and the $p$-value approach arrive at the identical conclusion: $\\bar{x} = 126.2 > 124.94$ (inside the critical region), which matches the fact that the $p$-value ($0.0194$) is strictly less than $\\alpha = 0.05$. Both methods will always be entirely consistent."
  }
},
{
  "id": "050169",
  "group_id": "050166",
  "branch": "Statistics",
  "board": "OCR",
  "level": "A",
  "major_area": "Statistics",
  "topic": "The Normal Distribution",
  "subtopic": [
    "Sampling Distributions",
    "Central Limit Effect"
  ],
  "img": "images/Statistics_pngs/050169.png",
  "question": "The diagram shows the probability density functions of two normally distributed random variables plotted on the same horizontal axis. Curve $A$ represents the population variable $X \\sim \\text{N}(\\mu_A, \\sigma_A^2)$ and Curve $B$ represents the sample mean $\\bar{X}$ of a random sample of size $n$ drawn from the same population.<br><br>Curve $A$ is given by $X \\sim \\text{N}(50, 16)$.<br><br><strong>(a)</strong> State the mean of each distribution, $\\mu_A$ and $\\mu_B$.<br><br><strong>(b)</strong> The standard deviation of the distribution shown by Curve $B$ is $\\sigma_B = 2$.<br><br><strong>(i)</strong> Calculate the sample size $n$.<br><br><strong>(ii)</strong> Explain why the peak of Curve $B$ is higher than the peak of Curve $A$.<br><br><strong>(c)</strong> Using the properties of the normal distribution, determine whether $\\text{P}(46 \\le X \\le 54)$ is greater than, equal to, or less than $\\text{P}(46 \\le \\bar{X} \\le 54)$, justifying your answer clearly.",
  "steps": [
    "<strong>(a) Means of the Distributions:</strong><br><br>The sample mean is an unbiased estimator of the population mean, so both curves are centered at the same value:\\begin{aligned} \\mu_A &= 50 \\cr \\mu_B &= 50 \\end{aligned}",
    "<strong>(b)(i) Sample Size $n$:</strong><br><br>For Curve $A$, the population standard deviation is $\\sigma_A = \\sqrt{16} = 4$.<br><br>Using the standard error formula for Curve $B$:\\begin{aligned} \\sigma_B &= \\dfrac{\\sigma_A}{\\sqrt{n}} \\cr 2 &= \\dfrac{4}{\\sqrt{n}} \\cr \\sqrt{n} &= 2 \\cr n &= 4 \\end{aligned}",
    "<strong>(b)(ii) Explanation of Peak Height:</strong><br><br>The total area under any probability density function must equal $1$.<br><br>Because Curve $B$ has a smaller standard deviation ($\\\\sigma_B = 2$ compared to $\\sigma_A = 4$), its values are less spread out.<br><br>To preserve a total area of $1$, the curve must be taller around the mean.",
    "<strong>(c) Probability Comparison:</strong><br><br>Both intervals are centered on $\\mu = 50$:\\begin{aligned} &\\text{For } X: \\cr &[46, 54] = [\\mu - \\sigma, \\mu + \\sigma] \\cr &\\text{P}(46 \\le X \\le 54) \\approx 0.6827 \\end{aligned}\\begin{aligned} &\\text{For } \\bar{X}: \\cr &[46, 54] = [\\mu - 2\\sigma_B, \\mu + 2\\sigma_B] \\cr &\\text{P}(46 \\le \\bar{X} \\le 54) \\approx 0.9545 \\end{aligned}<br>Since $0.6827 < 0.9545$, $\\text{P}(46 \\le X \\le 54)$ is <strong>less than</strong> $\\text{P}(46 \\le \\bar{X} \\le 54)$.",
    "Final Answer: (a) $\\mu_A = 50, \\mu_B = 50$, (b)(i) $n = 4$, (ii) Total area is $1$, (c) Less than"
  ],
  "pi_options": [
    {
      "ans": "(a) $\\mu_A = 50, \\mu_B = 50$, (b)(i) $n = 2$, (ii) Total area is $1$, (c) Less than",
      "feedback": "The standard error formula is $\\dfrac{\\sigma}{\\sqrt{n}}$. If $\\dfrac{4}{\\sqrt{n}} = 2$, then $\\sqrt{n} = 2$, which gives $n = 2^2 = 4$, not $n = 2$."
    },
    {
      "ans": "(a) $\\mu_A = 50, \\mu_B = 50$, (b)(i) $n = 4$, (ii) Total area is $1$, (c) Greater than",
      "feedback": "Because the distribution of $\\bar{X}$ is more tightly clustered around the mean, a greater proportion of its area lies within $\\pm 4$ units of the mean ($95.4\\%$ compared to $68.3\\%$)."
    },
    {
      "ans": "(a) $\\mu_A = 50, \\mu_B = 12.5$, (b)(i) $n = 4$, (ii) Total area is $1$, (c) Less than",
      "feedback": "The expected value of the sample mean equals the population mean: $\\text{E}(\\bar{X}) = \\mu = 50$. The sample size $n$ divides the variance, never the mean."
    }
  ],
  "bradley_insight": {
    "type": "deeper",
    "title": "The Head Teacher's Eye: Preserving Unit Area",
    "content": "The maximum height of a normal density curve is given by $\\dfrac{1}{\\sigma\\sqrt{2\\pi}}$. Because $\\sigma$ appears in the denominator, halving the standard deviation from $4$ to $2$ doubles the peak height. This inverse relationship ensures the area under the curve remains strictly equal to $1$."
  }
},
{
  "id": "050170",
  "group_id": "050166",
  "branch": "Statistics",
  "board": "OCR",
  "level": "A",
  "major_area": "Statistics",
  "topic": "The Normal Distribution",
  "subtopic": [
    "Normal Approximation",
    "Continuity Correction"
  ],
  "img": "images/Statistics_pngs/050170.png",
  "question": "A fair coin is spun $24$ times. The discrete random variable $X$ represents the number of heads obtained, so that $X \\sim \\text{B}(24, 0.5)$.<br><br>The diagram shows the discrete probability bars for $X$ overlaid with the continuous curve of the approximating normal distribution $Y \\sim \\text{N}(\\mu, \\sigma^2)$.<br><br><strong>(a)</strong> State the mean $\\mu$ and variance $\\sigma^2$ of the approximating normal distribution $Y$.<br><br><strong>(b)</strong> Explain why a continuity correction is required when approximating a discrete distribution using a continuous curve.<br><br><strong>(c)</strong> With reference to the dashed boundary line at $x = 14.5$ shown in the diagram, write down the probability statement in terms of $Y$ that approximates $\\text{P}(X \\ge 15)$.<br><br><strong>(d)</strong> Hence calculate an approximation for $\\text{P}(X \\ge 15)$, giving your answer to four decimal places.",
  "steps": [
    "<strong>(a) Mean and Variance:</strong><br><br>For $X \\sim \\text{B}(n, p)$ with $n = 24$ and $p = 0.5$:\\begin{aligned} \\mu &= np \\cr &= 24(0.5) \\cr &= 12 \\end{aligned}\\begin{aligned} \\sigma^2 &= np(1 - p) \\cr &= 24(0.5)(0.5) \\cr &= 6 \\end{aligned}",
    "<strong>(b) Explanation of Continuity Correction:</strong><br><br>A discrete distribution concentrates probability at individual integer values, with each outcome $k$ represented by a bar of width $1$ over the interval $[k - 0.5, k + 0.5]$.<br><br>For a continuous distribution, the probability at any single point is zero:\\begin{aligned} \\text{P}(Y = k) = 0 \\end{aligned}<br>A continuity correction shifts the boundary by $0.5$ so that the area under the continuous curve covers the corresponding discrete bar.",
    "<strong>(c) Approximating Probability Statement:</strong><br><br>The discrete event $X \\ge 15$ includes the bars for $X = 15, 16, \\dots, 24$.<br><br>The bar for $15$ starts at the lower boundary $14.5$.<br><br>Therefore, the approximating statement is:\\begin{aligned} \\text{P}(Y \\ge 14.5) \\end{aligned}",
    "<strong>(d) Calculation of $\\text{P}(X \\ge 15)$:</strong><br><br>Standardising $Y \\sim \\text{N}(12, 6)$ with standard deviation $\\sqrt{6} \\approx 2.4495$:\\begin{aligned} z &= \\dfrac{14.5 - 12}{\\sqrt{6}} \\cr &= \\dfrac{2.5}{2.4495} \\cr &\\approx 1.0206 \\end{aligned}<br>Evaluating the probability:\\begin{aligned} \\text{P}(Y \\ge 14.5) &= \\text{P}(Z \\ge 1.0206) \\cr &= 1 - \\Phi(1.0206) \\cr &= 1 - 0.8463 \\cr &= 0.1537 \\end{aligned}",
    "Final Answer: (a) $\\mu = 12, \\sigma^2 = 6$, (b) Adjusts width of discrete bars, (c) $\\text{P}(Y \\ge 14.5)$, (d) $0.1537$"
  ],
  "pi_options": [
    {
      "ans": "(a) $\\mu = 12, \\sigma^2 = 6$, (b) Adjusts width of discrete bars, (c) $\\text{P}(Y \\ge 15.5)$, (d) $0.0765$",
      "feedback": "For $\\text{P}(X \\ge 15)$, the discrete bar for $15$ must be included. Its bar starts at $14.5$, so the integration boundary must be $14.5$, not $15.5$."
    },
    {
      "ans": "(a) $\\mu = 12, \\sigma^2 = 6$, (b) Adjusts width of discrete bars, (c) $\\text{P}(Y \\ge 15.0)$, (d) $0.1103$",
      "feedback": "Omitting the continuity correction evaluates $\\text{P}(Y \\ge 15.0)$, which cuts through the centre of the bar for $15$ and understates the probability."
    },
    {
      "ans": "(a) $\\mu = 12, \\sigma^2 = 6$, (b) Adjusts width of discrete bars, (c) $\\text{P}(Y \\ge 14.5)$, (d) $0.3385$",
      "feedback": "When standardising, the denominator is the standard deviation $\\sigma = \\sqrt{6} \\approx 2.4495$, not the variance $\\sigma^2 = 6$."
    }
  ],
  "bradley_insight": {
    "type": "caution",
    "title": "The Head Teacher's Eye: The Continuity Correction Rule of Thumb",
    "content": "Always picture the discrete bar. For $X = 15$, the bar extends from $14.5$ to $15.5$. If the discrete inequality includes $15$ ($X \\ge 15$), your continuous region must include that entire bar, starting at $14.5$. If the inequality is strict ($X > 15$), the bar for $15$ is excluded, meaning the region begins at $15.5$."
  }
},
{
  "id": "050171",
  "group_id": "050171",
  "branch": "Statistics",
  "board": "OCR",
  "level": "A",
  "major_area": "Statistics",
  "topic": "Discrete Random Variables",
  "subtopic": [
    "Probability Mass Functions",
    "Independent Events"
  ],
  "img": false,
  "question": "The discrete random variable $X$ takes the values $0, 1, 2, 3, 4$ and $5$ with probabilities given by the formula<br><br>$$\\text{P}(X = x) = c(x + 2)(6 - x)$$<br>where $c$ is a constant.<br><br><strong>(a)</strong> Show that $c = \\dfrac{1}{77}$.<br><br><strong>(b)</strong> Over a work placement, an apprentice technician attends a workshop on $77$ shifts. The random variable $X$ is used to model the number of faulty circuit boards repaired by the technician on a given shift. Assuming shifts are independent:<br><br><strong>(i)</strong> Find the probability that the technician repairs no faulty boards on each of the first $2$ shifts of the placement and repairs exactly $2$ faulty boards on each of the next $2$ shifts. Give your answer in exact fractional form.<br><br><strong>(ii)</strong> Find the expected number of shifts during the placement on which the technician repairs no faulty boards.",
  "steps": [
    "<strong>(a) Value of $c$:</strong><br><br>Summing all probabilities to $1$ over $x \\in \\{0, 1, 2, 3, 4, 5\\}$:\\begin{aligned} &\\sum_{x=0}^{5} \\text{P}(X = x) = 1 \\cr &c[(2)(6) + (3)(5) + (4)(4) \\cr &\\quad + (5)(3) + (6)(2) + (7)(1)] = 1 \\cr &c(12 + 15 + 16 + 15 + 12 + 7) = 1 \\cr &77c = 1 \\cr &c = \\dfrac{1}{77} \\end{aligned}",
    "<strong>(b)(i) Combined Probability:</strong><br><br>Calculating individual shift probabilities:\\begin{aligned} \\text{P}(X = 0) &= \\dfrac{(2)(6)}{77} \\cr &= \\dfrac{12}{77} \\end{aligned}\\begin{aligned} \\text{P}(X = 2) &= \\dfrac{(4)(4)}{77} \\cr &= \\dfrac{16}{77} \\end{aligned}<br>For independent shifts, the required combined probability is:\\begin{aligned} \\text{P} &= [\\text{P}(X = 0)]^2 \\times [\\text{P}(X = 2)]^2 \\cr &= \\left(\\dfrac{12}{77}\\right)^2 \\times \\left(\\dfrac{16}{77}\\right)^2 \\cr &= \\dfrac{144}{5929} \\times \\dfrac{256}{5929} \\cr &= \\dfrac{36864}{35153041} \\end{aligned}",
    "<strong>(b)(ii) Expected Number of Shifts:</strong><br><br>With $N = 77$ shifts and $p = \\text{P}(X = 0) = \\dfrac{12}{77}$:\\begin{aligned} \\text{E}(\\text{shifts}) &= Np \\cr &= 77 \\times \\dfrac{12}{77} \\cr &= 12 \\end{aligned}",
    "Final Answer: (a) $c = \\dfrac{1}{77}$, (b)(i) $\\dfrac{36864}{35153041}$, (ii) $12$"
  ],
  "pi_options": [
    {
      "ans": "(a) $c = \\dfrac{1}{77}$, (b)(i) $\\dfrac{192}{5929}$, (ii) $12$",
      "feedback": "The question requires no repairs on each of the first 2 shifts and 2 repairs on each of the next 2 shifts. Each probability must be squared rather than multiplied once."
    },
    {
      "ans": "(a) $c = \\dfrac{1}{77}$, (b)(i) $\\dfrac{36864}{35153041}$, (ii) $6.23$",
      "feedback": "The total number of shifts in this placement is 77. Evaluating the expected frequency gives $77 \\times \\frac{12}{77} = 12$."
    },
    {
      "ans": "(a) $c = \\dfrac{1}{75}$, (b)(i) $\\dfrac{36864}{31640625}$, (ii) $12.3$",
      "feedback": "Carefully sum each term: $12 + 15 + 16 + 15 + 12 + 7 = 77$. An addition slip results in an incorrect constant $c$."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Symmetry Simplifies the Sum",
    "content": "Notice the symmetry in the terms: $(2)(6) = (6)(2) = 12$, and $(3)(5) = (5)(3) = 15$. Pairing these equal terms cuts your calculation time in half and minimizes mental arithmetic slips."
  }
},
{
  "id": "050172",
  "group_id": "050171",
  "branch": "Statistics",
  "board": "OCR",
  "level": "A",
  "major_area": "Statistics",
  "topic": "Discrete Random Variables",
  "subtopic": [
    "Expectation",
    "Variance"
  ],
  "img": false,
  "question": "The discrete random variable $X$ takes the values $1, 2, 3, 4$ and $5$ with probabilities given by<br><br>$$\\text{P}(X = x) = k(6 - x)$$<br>where $k$ is a positive constant.<br><br><strong>(a)</strong> Determine the value of $k$.<br><br><strong>(b)</strong> Calculate:<br><strong>(i)</strong> $\\text{E}(X)$<br><strong>(ii)</strong> $\\text{Var}(X)$<br><br><strong>(c)</strong> Find $\\text{P}(X > \\text{E}(X))$.<br><br><strong>(d)</strong> In a quality audit, $60$ independent observations of $X$ are recorded. Find the expected number of observations in which $X$ exceeds its mean.",
  "steps": [
    "<strong>(a) Value of $k$:</strong><br><br>Summing all probabilities over $x \\in \\{1, 2, 3, 4, 5\\}$:\\begin{aligned} &\\sum_{x=1}^{5} k(6 - x) = 1 \\cr &k(5 + 4 + 3 + 2 + 1) = 1 \\cr &15k = 1 \\cr &k = \\dfrac{1}{15} \\end{aligned}",
    "<strong>(b)(i) Expectation $\\text{E}(X)$:</strong><br><br>Using $\\text{E}(X) = \\sum x \\text{P}(X = x)$:\\begin{aligned} \\text{E}(X) &= \\dfrac{1(5) + 2(4) + 3(3)}{15} \\cr &\\quad + \\dfrac{4(2) + 5(1)}{15} \\cr &= \\dfrac{5 + 8 + 9 + 8 + 5}{15} \\cr &= \\dfrac{35}{15} \\cr &= \\dfrac{7}{3} \\end{aligned}",
    "<strong>(b)(ii) Variance $\\text{Var}(X)$:</strong><br><br>First calculating $\\text{E}(X^2)$:\\begin{aligned} \\text{E}(X^2) &= \\dfrac{1^2(5) + 2^2(4) + 3^2(3)}{15} \\cr &\\quad + \\dfrac{4^2(2) + 5^2(1)}{15} \\cr &= \\dfrac{5 + 16 + 27 + 32 + 25}{15} \\cr &= \\dfrac{105}{15} \\cr &= 7 \\end{aligned}<br>Now applying $\\text{Var}(X) = \\text{E}(X^2) - [\\text{E}(X)]^2$:\\begin{aligned} \\text{Var}(X) &= 7 - \\left(\\dfrac{7}{3}\\right)^2 \\cr &= 7 - \\dfrac{49}{9} \\cr &= \\dfrac{63 - 49}{9} \\cr &= \\dfrac{14}{9} \\end{aligned}",
    "<strong>(c) Probability $\\text{P}(X > \\text{E}(X))$:</strong><br><br>Since $\\text{E}(X) = \\dfrac{7}{3} \\approx 2.33$, the values of $X$ greater than the mean are $3, 4, 5$:\\begin{aligned} \\text{P}\\left(X > \\dfrac{7}{3}\\right) &= \\text{P}(X = 3) + \\text{P}(X = 4) \\cr &\\quad + \\text{P}(X = 5) \\cr &= \\dfrac{3}{15} + \\dfrac{2}{15} + \\dfrac{1}{15} \\cr &= \\dfrac{6}{15} \\cr &= 0.4 \\end{aligned}",
    "<strong>(d) Expected Frequency:</strong><br><br>Over $N = 60$ independent observations:\\begin{aligned} \\text{Expected} &= 60 \\times 0.4 \\cr &= 24 \\end{aligned}",
    "Final Answer: (a) $k = \\dfrac{1}{15}$, (b)(i) $\\dfrac{7}{3}$, (ii) $\\dfrac{14}{9}$, (c) $0.4$, (d) $24$"
  ],
  "pi_options": [
    {
      "ans": "(a) $k = \\dfrac{1}{15}$, (b)(i) $\\dfrac{7}{3}$, (ii) $\\dfrac{14}{3}$, (c) $0.4$, (d) $24$",
      "feedback": "In the variance formula, remember to subtract the square of the mean: subtracting $(\\frac{7}{3})^2 = \\frac{49}{9}$ yields $\\frac{14}{9}$, not $\\frac{14}{3}$."
    },
    {
      "ans": "(a) $k = \\dfrac{1}{15}$, (b)(i) $\\dfrac{7}{3}$, (ii) $\\dfrac{14}{9}$, (c) $0.667$, (d) $40$",
      "feedback": "Because the mean is approximately $2.33$, the condition $X > \\text{E}(X)$ requires $X \\ge 3$. Including $X = 2$ overstates the probability."
    },
    {
      "ans": "(a) $k = \\dfrac{1}{15}$, (b)(i) $3$, (ii) $2$, (c) $0.2$, (d) $12$",
      "feedback": "The probabilities are strictly decreasing across the domain rather than symmetric, which pulls the expected value down to $\\frac{7}{3}$ rather than $3$."
    }
  ],
  "bradley_insight": {
    "type": "caution",
    "title": "The Head Teacher's Eye: Strict Inequalities on Integers",
    "content": "When evaluating probabilities for discrete distributions, list the integers explicitly. Since $\\text{E}(X) \\approx 2.33$, the inequality $X > 2.33$ translates to $X \\in \\{3, 4, 5\\}$. Never round the mean before interpreting the inequality."
  }
},
{
  "id": "050173",
  "group_id": "050171",
  "branch": "Statistics",
  "board": "OCR",
  "level": "A",
  "major_area": "Statistics",
  "topic": "Discrete Random Variables",
  "subtopic": [
    "Sum of Random Variables",
    "Binomial Linkage"
  ],
  "img": false,
  "question": "The discrete random variable $X$ has probability distribution defined by<br><br>$$\\text{P}(X = x) = kx^2 \\quad \\text{for } x \\in \\{1, 2, 3, 4\\}$$<br>where $k$ is a constant.<br><br><strong>(a)</strong> Show that $k = \\dfrac{1}{30}$.<br><br><strong>(b)</strong> Find $\\text{P}(2 \\le X \\le 3)$.<br><br><strong>(c)</strong> Two independent observations of $X$, denoted by $X_1$ and $X_2$, are recorded. Find $\\text{P}(X_1 + X_2 = 5)$.<br><br><strong>(d)</strong> In an experiment, $90$ independent trials of $X$ are performed. Let $Y$ be the number of trials in which $X = 4$. Calculate the mean and variance of $Y$.",
  "steps": [
    "<strong>(a) Value of $k$:</strong><br><br>Summing probabilities over the domain:\\begin{aligned} &\\sum_{x=1}^{4} kx^2 = 1 \\cr &k(1^2 + 2^2 + 3^2 + 4^2) = 1 \\cr &k(1 + 4 + 9 + 16) = 1 \\cr &30k = 1 \\cr &k = \\dfrac{1}{30} \\end{aligned}",
    "<strong>(b) Probability $\\text{P}(2 \\le X \\le 3)$:</strong><br><br>Summing the probabilities for $x = 2$ and $x = 3$:\\begin{aligned} \\text{P}(2 \\le X \\le 3) &= \\text{P}(X = 2) + \\text{P}(X = 3) \\cr &= \\dfrac{2^2}{30} + \\dfrac{3^2}{30} \\cr &= \\dfrac{4}{30} + \\dfrac{9}{30} \\cr &= \\dfrac{13}{30} \\end{aligned}",
    "<strong>(c) Sum $X_1 + X_2 = 5$:</strong><br><br>The mutually exclusive pairs $(X_1, X_2)$ summing to $5$ are $(1, 4)$, $(4, 1)$, $(2, 3)$, and $(3, 2)$:\\begin{aligned} &\\text{P}(1, 4) = \\dfrac{1}{30} \\times \\dfrac{16}{30} = \\dfrac{16}{900} \\cr &\\text{P}(2, 3) = \\dfrac{4}{30} \\times \\dfrac{9}{30} = \\dfrac{36}{900} \\end{aligned}<br>Summing all ordered pairs:\\begin{aligned} \\text{P}(X_1 + X_2 = 5) &= 2\\left(\\dfrac{16}{900}\\right) + 2\\left(\\dfrac{36}{900}\\right) \\cr &= \\dfrac{32 + 72}{900} \\cr &= \\dfrac{104}{900} \\cr &= \\dfrac{26}{225} \\end{aligned}",
    "<strong>(d) Mean and Variance of $Y$:</strong><br><br>The probability of observing $X = 4$ is:\\begin{aligned} p &= \\dfrac{4^2}{30} \\cr &= \\dfrac{16}{30} \\cr &= \\dfrac{8}{15} \\end{aligned}<br>Thus $Y \\sim \\text{B}\\left(90, \\dfrac{8}{15}\\right)$.<br><br>Mean:\\begin{aligned} \\text{E}(Y) &= 90 \\times \\dfrac{8}{15} \\cr &= 48 \\end{aligned}<br>Variance:\\begin{aligned} \\text{Var}(Y) &= 90 \\times \\dfrac{8}{15} \\times \\left(1 - \\dfrac{8}{15}\\right) \\cr &= 48 \\times \\dfrac{7}{15} \\cr &= 22.4 \\end{aligned}",
    "Final Answer: (a) $k = \\dfrac{1}{30}$, (b) $\\dfrac{13}{30}$, (c) $\\dfrac{26}{225}$, (d) $\\text{E}(Y) = 48, \\text{Var}(Y) = 22.4$"
  ],
  "pi_options": [
    {
      "ans": "(a) $k = \\dfrac{1}{30}$, (b) $\\dfrac{13}{30}$, (c) $\\dfrac{13}{225}$, (d) $\\text{E}(Y) = 48, \\text{Var}(Y) = 22.4$",
      "feedback": "The sum $X_1 + X_2 = 5$ can occur via the distinct ordered pairs $(1, 4)$, $(4, 1)$, $(2, 3)$, and $(3, 2)$. Omitting the reversed pairs halves the probability."
    },
    {
      "ans": "(a) $k = \\dfrac{1}{30}$, (b) $\\dfrac{13}{30}$, (c) $\\dfrac{26}{225}$, (d) $\\text{E}(Y) = 48, \\text{Var}(Y) = 48$",
      "feedback": "For a binomial distribution, the variance is given by $np(1 - p)$. Remember to multiply by $(1 - p) = \\frac{7}{15}$ rather than stopping at $np$."
    },
    {
      "ans": "(a) $k = \\dfrac{1}{20}$, (b) $\\dfrac{13}{20}$, (c) $\\dfrac{13}{100}$, (d) $\\text{E}(Y) = 72, \\text{Var}(Y) = 14.4$",
      "feedback": "The domain includes $x = 4$, so the sum of squares is $1 + 4 + 9 + 16 = 30$, which gives $k = \\frac{1}{30}$."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Ordered Pairs for Independent Sums",
    "content": "When calculating the distribution of the sum of two independent variables, always list the outcomes as ordered coordinate pairs $(x_1, x_2)$. Because the observations are distinct, $(1, 4)$ and $(4, 1)$ are distinct mutually exclusive outcomes."
  }
},
{
  "id": "050174",
  "group_id": "050171",
  "branch": "Statistics",
  "board": "OCR",
  "level": "A",
  "major_area": "Statistics",
  "topic": "Discrete Random Variables",
  "subtopic": [
    "Expectation",
    "Linear Coding"
  ],
  "img": false,
  "question": "The discrete random variable $X$ takes values in $\\{-1, 0, 1, 2, 3\\}$. Its probability distribution is shown in the table below, where $a$ and $b$ are probabilities:<br><br><table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:6px; border:1px solid #ccc;'>$x$</th><th style='padding:6px; border:1px solid #ccc;'>$-1$</th><th style='padding:6px; border:1px solid #ccc;'>$0$</th><th style='padding:6px; border:1px solid #ccc;'>$1$</th><th style='padding:6px; border:1px solid #ccc;'>$2$</th><th style='padding:6px; border:1px solid #ccc;'>$3$</th></tr></thead><tbody><tr><td style='padding:6px; border:1px solid #ccc;'>$\\text{P}(X = x)$</td><td style='padding:6px; border:1px solid #ccc;'>$0.1$</td><td style='padding:6px; border:1px solid #ccc;'>$a$</td><td style='padding:6px; border:1px solid #ccc;'>$0.3$</td><td style='padding:6px; border:1px solid #ccc;'>$b$</td><td style='padding:6px; border:1px solid #ccc;'>$0.1$</td></tr></tbody></table><br>The expected value of $X$ is $\\text{E}(X) = 1.1$.<br><br><strong>(a)</strong> Write down two simultaneous equations in $a$ and $b$, and hence show that $a = 0.2$ and $b = 0.3$.<br><br><strong>(b)</strong> Calculate $\\text{Var}(X)$.<br><br><strong>(c)</strong> The random variable $W$ is defined by $W = 4X - 3$. Find $\\text{E}(W)$ and $\\text{Var}(W)$.",
  "steps": [
    "<strong>(a) Simultaneous Equations:</strong><br><br>Total probability equals $1$:\\begin{aligned} &0.1 + a + 0.3 + b + 0.1 = 1 \\cr &a + b + 0.5 = 1 \\cr &a + b = 0.5 \\end{aligned}<br>Using the definition of expectation $\\text{E}(X) = 1.1$:\\begin{aligned} &(-1)(0.1) + 0(a) + 1(0.3) \\cr &\\quad + 2(b) + 3(0.1) = 1.1 \\cr &-0.1 + 0.3 + 2b + 0.3 = 1.1 \\cr &2b + 0.5 = 1.1 \\cr &2b = 0.6 \\cr &b = 0.3 \\end{aligned}<br>Substituting into $a + b = 0.5$ gives:\\begin{aligned} a &= 0.5 - 0.3 \\cr &= 0.2 \\end{aligned}",
    "<strong>(b) Variance $\\text{Var}(X)$:</strong><br><br>First calculating $\\text{E}(X^2)$:\\begin{aligned} \\text{E}(X^2) &= (-1)^2(0.1) + 0^2(0.2) \\cr &\\quad + 1^2(0.3) + 2^2(0.3) + 3^2(0.1) \\cr &= 0.1 + 0 + 0.3 + 1.2 + 0.9 \\cr &= 2.5 \\end{aligned}<br>Applying the variance formula:\\begin{aligned} \\text{Var}(X) &= \\text{E}(X^2) - [\\text{E}(X)]^2 \\cr &= 2.5 - 1.1^2 \\cr &= 2.5 - 1.21 \\cr &= 1.29 \\end{aligned}",
    "<strong>(c) Expectation and Variance of $W = 4X - 3$:</strong><br><br>Expected value:\\begin{aligned} \\text{E}(W) &= 4\\text{E}(X) - 3 \\cr &= 4(1.1) - 3 \\cr &= 4.4 - 3 \\cr &= 1.4 \\end{aligned}<br>Variance scales quadratically:\\begin{aligned} \\text{Var}(W) &= 4^2\\text{Var}(X) \\cr &= 16(1.29) \\cr &= 20.64 \\end{aligned}",
    "Final Answer: (a) $a = 0.2, b = 0.3$, (b) $\\text{Var}(X) = 1.29$, (c) $\\text{E}(W) = 1.4, \\text{Var}(W) = 20.64$"
  ],
  "pi_options": [
    {
      "ans": "(a) $a = 0.2, b = 0.3$, (b) $\\text{Var}(X) = 1.29$, (c) $\\text{E}(W) = 1.4, \\text{Var}(W) = 5.16$",
      "feedback": "For a linear transformation $W = aX + b$, variance scales by $a^2$. Multiply by $4^2 = 16$ to obtain $16(1.29) = 20.64$ rather than $4(1.29)$."
    },
    {
      "ans": "(a) $a = 0.2, b = 0.3$, (b) $\\text{Var}(X) = 1.29$, (c) $\\text{E}(W) = 1.4, \\text{Var}(W) = 17.64$",
      "feedback": "Subtracting a constant shifts the distribution without affecting spread. The constant term $-3$ must not be subtracted from the variance."
    },
    {
      "ans": "(a) $a = 0.2, b = 0.3$, (b) $\\text{Var}(X) = 1.09$, (c) $\\text{E}(W) = 1.4, \\text{Var}(W) = 17.44$",
      "feedback": "Squaring a negative value gives a positive result: $(-1)^2(0.1) = +0.1$. A sign slip here reduces $\\text{E}(X^2)$."
    }
  ],
  "bradley_insight": {
    "type": "caution",
    "title": "The Head Teacher's Eye: Shift Invariance of Spread",
    "content": "Subtracting $3$ shifts the entire distribution along the number line, updating the expected value but leaving the spread completely unchanged. Hence $\\text{Var}(4X - 3) = 16\\text{Var}(X)$."
  }
},
{
  "id": "050175",
  "group_id": "050171",
  "branch": "Statistics",
  "board": "OCR",
  "level": "A",
  "major_area": "Statistics",
  "topic": "Discrete Random Variables",
  "subtopic": [
    "Reciprocal Distribution",
    "Functions of Random Variables"
  ],
  "img": false,
  "question": "The discrete random variable $X$ takes values in $\\{1, 2, 3, 6\\}$ with probabilities given by<br><br>$$\\text{P}(X = x) = \\dfrac{k}{x}$$<br>where $k$ is a constant.<br><br><strong>(a)</strong> Find the value of $k$.<br><br><strong>(b)</strong> The random variable $Y$ is defined by $Y = (X - 2)^2$.<br><strong>(i)</strong> List the possible values that $Y$ can take.<br><strong>(ii)</strong> Specify the probability distribution of $Y$ in a table.<br><br><strong>(c)</strong> Calculate $\\text{E}(Y)$.<br><br><strong>(d)</strong> In a simulation of $48$ independent trials of $Y$, find the expected number of trials in which $Y = 1$.",
  "steps": [
    "<strong>(a) Value of $k$:</strong><br><br>Summing probabilities over $x \\in \\{1, 2, 3, 6\\}$:\\begin{aligned} &\\sum \\text{P}(X = x) = 1 \\cr &k\\left(1 + \\dfrac{1}{2} + \\dfrac{1}{3} + \\dfrac{1}{6}\\right) = 1 \\cr &k\\left(\\dfrac{6 + 3 + 2 + 1}{6}\\right) = 1 \\cr &k\\left(\\dfrac{12}{6}\\right) = 1 \\cr &2k = 1 \\cr &k = 0.5 \\end{aligned}",
    "<strong>(b)(i) Distinct Values of $Y$:</strong><br><br>Evaluating $Y = (X - 2)^2$ for each outcome:\\begin{aligned} &x = 1 \\implies y = (1 - 2)^2 = 1 \\cr &x = 2 \\implies y = (2 - 2)^2 = 0 \\cr &x = 3 \\implies y = (3 - 2)^2 = 1 \\cr &x = 6 \\implies y = (6 - 2)^2 = 16 \\end{aligned}<br>Hence the distinct values that $Y$ can take are $0, 1, 16$.",
    "<strong>(b)(ii) Probability Distribution Table:</strong><br><br>Combining probabilities for duplicate outcomes:\\begin{aligned} \\text{P}(Y = 0) &= \\text{P}(X = 2) \\cr &= \\dfrac{0.5}{2} \\cr &= 0.25 \\end{aligned}\\begin{aligned} \\text{P}(Y = 1) &= \\text{P}(X = 1) + \\text{P}(X = 3) \\cr &= \\dfrac{0.5}{1} + \\dfrac{0.5}{3} \\cr &= \\dfrac{1}{2} + \\dfrac{1}{6} \\cr &= \\dfrac{2}{3} \\end{aligned}\\begin{aligned} \\text{P}(Y = 16) &= \\text{P}(X = 6) \\cr &= \\dfrac{0.5}{6} \\cr &= \\dfrac{1}{12} \\end{aligned}<br>The distribution table is:<br><br><table style='width:100%; max-width:220px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:6px; border:1px solid #ccc;'>$y$</th><th style='padding:6px; border:1px solid #ccc;'>$0$</th><th style='padding:6px; border:1px solid #ccc;'>$1$</th><th style='padding:6px; border:1px solid #ccc;'>$16$</th></tr></thead><tbody><tr><td style='padding:6px; border:1px solid #ccc;'>$\\text{P}(Y = y)$</td><td style='padding:6px; border:1px solid #ccc;'>$0.25$</td><td style='padding:6px; border:1px solid #ccc;'>$\\dfrac{2}{3}$</td><td style='padding:6px; border:1px solid #ccc;'>$\\dfrac{1}{12}$</td></tr></tbody></table>",
    "<strong>(c) Expectation $\\text{E}(Y)$:</strong><br><br>Using $\\text{E}(Y) = \\sum y \\text{P}(Y = y)$:\\begin{aligned} \\text{E}(Y) &= 0(0.25) + 1\\left(\\dfrac{2}{3}\\right) + 16\\left(\\dfrac{1}{12}\\right) \\cr &= 0 + \\dfrac{2}{3} + \\dfrac{4}{3} \\cr &= \\dfrac{6}{3} \\cr &= 2 \\end{aligned}",
    "<strong>(d) Expected Frequency:</strong><br><br>For $N = 48$ independent trials and $\\text{P}(Y = 1) = \\dfrac{2}{3}$:\\begin{aligned} \\text{Expected} &= 48 \\times \\dfrac{2}{3} \\cr &= 32 \\end{aligned}",
    "Final Answer: (a) $k = 0.5$, (b)(i) $\\{0, 1, 16\\}$, (c) $\\text{E}(Y) = 2$, (d) $32$"
  ],
  "pi_options": [
    {
      "ans": "(a) $k = 0.5$, (b)(i) $\\{0, 1, 16\\}$, (c) $\\text{E}(Y) = 1.83$, (d) $24$",
      "feedback": "Both $X = 1$ and $X = 3$ map to $Y = 1$. Add their probabilities together: $\\frac{1}{2} + \\frac{1}{6} = \\frac{2}{3}$, giving an expected frequency of $48 \\times \\frac{2}{3} = 32$."
    },
    {
      "ans": "(a) $k = 0.5$, (b)(i) $\\{0, 1, 16\\}$, (c) $\\text{E}(Y) = 0.25$, (d) $32$",
      "feedback": "For non-linear transformations, $\\text{E}[g(X)] \\neq g[\\text{E}(X)]$. You cannot calculate $\\text{E}(Y)$ by evaluating $(\\text{E}(X) - 2)^2$."
    },
    {
      "ans": "(a) $k = 0.545$, (b)(i) $\\{0, 1, 16\\}$, (c) $\\text{E}(Y) = 2.18$, (d) $35$",
      "feedback": "Ensure all four reciprocals are included: $1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6} = 2$. This leads to $k = 0.5$."
    }
  ],
  "bradley_insight": {
    "type": "deeper",
    "title": "The Head Teacher's Eye: Non-Linear Expectations",
    "content": "A fundamental rule in probability is that expectation is linear but not non-linear: $\\text{E}[g(X)] \\neq g[\\text{E}(X)]$. Always derive the probability distribution of $Y = g(X)$ first, combining duplicate values before evaluating $\\sum y \\text{P}(Y = y)$."
  }
} 
];