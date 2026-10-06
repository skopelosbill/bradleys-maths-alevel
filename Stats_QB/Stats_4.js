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
  "question": "A manufacturing company tests the assembly times (in minutes) of two separate teams of technicians:<br>• <strong>Team A:</strong> $n_1 = 40$ technicians, with $\\sum x_1 = 1200$ and $\\sum x_1^2 = 36\\,640$.<br>• <strong>Team B:</strong> $n_2 = 60$ technicians, with $\\sum x_2 = 1860$ and $\\sum x_2^2 = 58\\,284$.<br><br><strong>(a)</strong> Calculate:<br><strong>(i)</strong> the mean assembly time for Team A;<br><strong>(ii)</strong> the mean assembly time for Team B.<br><br><strong>(b)</strong> Calculate the combined mean assembly time for all $100$ technicians.<br><br><strong>(c)</strong> Calculate the combined standard deviation for all $100$ technicians, correct to 2 decimal places.<br><br><strong>(d)</strong> A quality auditor discovers that the stopwatch used for all tests ran slow, and every recorded time must be increased by $2\\text{ minutes}$. State, with a reason, what effect this correction has on the combined standard deviation.",
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
}   
];