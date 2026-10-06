window.ALEVEL_QUESTIONS = [
{
    "id": "050101",
    "group_id": "050101",
    "branch": "Statistics",
    "board": "OCR",
    "level": "A",
    "major_area": "Hypothesis Testing",
    "topic": "Hypothesis Testing for Mean",
    "subtopic": [
        "Central Limit Theorem",
        "Sampling Critique"
    ],
    "img": false,
    "question": "An ecologist wishes to select a random sample of $5$ mature oak trees from a conservation woodland containing $650$ oak trees. She numbers the trees from $1$ to $650$. Using a random digit generator, she produces the sequence:$$25873914$$She forms $5$ three-digit numbers by taking the first, second, and third digits, followed by the second, third, and fourth digits, and so on, obtaining:$$258 \\quad 587 \\quad 873 \\quad 391 \\quad 914$$<strong>(a)</strong> Explain why the ecologist should reject the numbers $873$ and $914$ from her sample.<br><br><strong>(b)</strong> Explain why this overlapping method does not produce a simple random sample of trees.<br><br>The mean trunk diameter of all oak trees of this species in the UK is known to be $85.0\\text{ cm}$. The ecologist suspects that the mean trunk diameter of oak trees in this woodland is greater than $85.0\\text{ cm}$. She now uses a correct random sampling method to select $40$ oak trees and finds that their sample mean trunk diameter is $87.2\\text{ cm}$. The standard deviation of trunk diameters in the woodland is known to be $6.4\\text{ cm}$.<br><br><strong>(c)</strong> State where the Central Limit Theorem is used in carrying out a test on the sample mean.<br><br><strong>(d)</strong> Carry out the hypothesis test at the $2.5\\%$ significance level, stating your conclusion clearly in context.",
    "steps": [
        "<strong>(a) Rejection of Out-of-Range Numbers:</strong><br><br>The woodland contains only $650$ trees, numbered from $1$ to $650$. The numbers $873$ and $914$ exceed $650$ and therefore do not correspond to any tree in the population.",
        "<strong>(b) Critique of Overlapping Digits:</strong><br><br>In a simple random sample, all possible combinations of $5$ trees must have an equal chance of selection, and selections must be independent.<br><br>Overlapping digits create direct dependence between consecutive numbers (e.g. following $258$, the next number is forced to begin with $58$), meaning not every combination is possible.",
        "<strong>(c) Role of the Central Limit Theorem:</strong><br><br>The CLT ensures that the sample mean $\\bar{X}$ is approximately normally distributed because the sample size is large ($n = 40 > 30$), even though the underlying distribution of individual tree trunk diameters is not stated to be normal.",
        "<strong>(d) Hypothesis Test:</strong><br><br>State the hypotheses for the population mean trunk diameter $\\mu$ (in cm):\\begin{aligned} &H_0: \\mu = 85.0 \\cr &H_1: \\mu > 85.0 \\end{aligned}Under $H_0$, by the CLT:\\begin{aligned} \\bar{X} &\\sim N\\left(85.0, \\dfrac{6.4^2}{40}\\right) \\cr &\\sim N(85.0, 1.024) \\end{aligned}Standard error:\\begin{aligned} \\sigma_{\\bar{X}} &= \\dfrac{6.4}{\\sqrt{40}} \\cr &= 1.01193\\text{ cm} \\end{aligned}Calculate the test statistic $z$ for $\\bar{x} = 87.2\\text{ cm}$:\\begin{aligned} z &= \\dfrac{87.2 - 85.0}{1.01193} \\cr &= \\dfrac{2.2}{1.01193} \\cr &= 2.174 \\end{aligned}Critical value for a one-tailed test at the $2.5\\%$ level is $z = 1.960$.<br><br>Since $2.174 > 1.960$ (or $p = 0.0149 < 0.025$), the result is significant at the $2.5\\%$ level.<br><br>Reject $H_0$. There is sufficient evidence at the $2.5\\%$ significance level to suggest that the mean trunk diameter of oak trees in this woodland is greater than $85.0\\text{ cm}$.",
        "Final Answer: (a) Numbers exceed population size 650, (b) Overlapping digits introduce dependence between selections, (c) Justifies normal distribution of sample mean since n = 40, (d) Reject $H_0$ ($z = 2.174 > 1.960$); significant evidence that mean diameter exceeds 85.0 cm"
    ],
    "pi_options": [
        {
            "ans": "(a) Numbers exceed population size 650, (b) Overlapping digits introduce dependence between selections, (c) Justifies normal distribution of sample mean since n = 40, (d) Do not reject $H_0$ ($z = 0.344 < 1.960$); insufficient evidence that mean diameter exceeds 85.0 cm",
            "feedback": "In part (d), dividing by the population standard deviation $\\sigma = 6.4$ instead of the standard error $\\sigma / \\sqrt{n} = 1.012$ yields $z = 0.344$. You must divide by the standard error of the mean."
        },
        {
            "ans": "(a) Numbers exceed population size 650, (b) Overlapping digits introduce dependence between selections, (c) Proves individual tree diameters are exactly normally distributed, (d) Reject $H_0$ ($z = 2.174 > 1.960$); significant evidence that mean diameter exceeds 85.0 cm",
            "feedback": "In part (c), the Central Limit Theorem applies strictly to the distribution of the *sample mean* $\\bar{X}$, not to individual observations. Individual tree diameters do not become normal."
        },
        {
            "ans": "(a) Numbers are not prime, (b) Sample size is too small, (c) Justifies normal distribution of sample mean since n = 40, (d) Reject $H_0$ ($z = 2.174 > 1.960$); significant evidence that mean diameter exceeds 85.0 cm",
            "feedback": "In part (a), numbers are rejected because they exceed the maximum index $650$, not because of primality. In (b), the flaw is that consecutive selections are dependent due to overlapping digits."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Overlapping Digit Bias",
        "content": "When generating random samples from a random digit sequence, selections must be disjoint. If you create overlapping numbers like $258$ and $587$, the second number is conditioned by the digits of the first, completely violating the independence condition required for a simple random sample."
    }
},
{
    "id": "050102",
    "group_id": "050101",
    "branch": "Statistics",
    "board": "OCR",
    "level": "A",
    "major_area": "Hypothesis Testing",
    "topic": "Hypothesis Testing for Mean",
    "subtopic": [
        "Systematic vs Random Sampling",
        "Two-Tailed Mean Test"
    ],
    "img": false,
    "question": "A quality controller at a flour packaging mill wishes to select a sample of $10$ bags from a production run of $800$ bags. The bags are numbered consecutively from $1$ to $800$ as they leave the conveyor.<br><br><strong>(a)</strong> Describe how the controller could use a random number generator to select a simple random sample of $10$ bags, explaining what should be done if a repeated number or a number greater than $800$ is generated.<br><br><strong>(b)</strong> The controller instead decides to select every $80\\text{th}$ bag starting from bag $8$. State the name of this sampling technique, and give one practical reason why this sample might not be representative if the packaging machinery experiences a cyclic fault.<br><br>Historically, the mean mass of a bag is $1500\\text{ g}$. Following machine maintenance, the controller wishes to test whether the mean mass of the bags has changed. A random sample of $64$ bags is weighed and found to have a sample mean mass of $1506\\text{ g}$. The standard deviation of bag masses is known to be $24\\text{ g}$.<br><br><strong>(c)</strong> Test, at the $5\\%$ significance level, whether there is evidence that the mean mass of the bags has changed.",
    "steps": [
        "<strong>(a) Simple Random Sampling Method:</strong><br><br>Assign each bag an integer from $1$ to $800$. Generate three-digit random numbers using a calculator or computer.<br><br>If a number generated exceeds $800$ or is $000$, ignore it. If a number is a duplicate of a previously selected bag, discard it without replacement. Continue until $10$ distinct bags are chosen.",
        "<strong>(b) Systematic Sampling and Cyclic Bias:</strong><br><br>The method is <strong>systematic sampling</strong>.<br><br>If the packaging machinery experiences a periodic or cyclic fault that coincides with the sampling interval of $80$ (e.g. every $80\\text{th}$ bag is under-filled by a rotating filling head), the sample will systematically capture bags from the same point in the cycle, introducing severe bias.",
        "<strong>(c) Two-Tailed Hypothesis Test:</strong><br><br>State the hypotheses for the population mean mass $\\mu$ (in g):\\begin{aligned} &H_0: \\mu = 1500 \\cr &H_1: \\mu \\neq 1500 \\end{aligned}Under $H_0$, by the Central Limit Theorem ($n = 64 > 30$):\\begin{aligned} \\bar{X} &\\sim N\\left(1500, \\dfrac{24^2}{64}\\right) \\cr &\\sim N(1500, 9) \\end{aligned}Standard error:\\begin{aligned} \\sigma_{\\bar{X}} &= \\dfrac{24}{\\sqrt{64}} \\cr &= 3\\text{ g} \\end{aligned}Calculate the test statistic $z$ for $\\bar{x} = 1506\\text{ g}$:\\begin{aligned} z &= \\dfrac{1506 - 1500}{3} \\cr &= \\dfrac{6}{3} \\cr &= 2.000 \\end{aligned}For a two-tailed test at the $5\\%$ level, the critical values are $z = \\pm 1.960$.<br><br>Since $2.000 > 1.960$, the result is significant at the $5\\%$ level.<br><br>Reject $H_0$. There is sufficient evidence at the $5\\%$ significance level to suggest that the mean mass of the flour bags has changed.",
        "Final Answer: (a) Generate 3-digit random numbers, discard duplicates and numbers > 800, (b) Systematic sampling; cyclic machine faults introduce periodic bias, (c) Reject $H_0$ ($z = 2.000 > 1.960$); significant evidence that mean mass has changed"
    ],
    "pi_options": [
        {
            "ans": "(a) Generate 3-digit random numbers, discard duplicates and numbers > 800, (b) Systematic sampling; cyclic machine faults introduce periodic bias, (c) Do not reject $H_0$ ($z = 2.000 < 2.576$); insufficient evidence that mean mass has changed",
            "feedback": "In part (c), $2.576$ is the critical value for a $1\\%$ two-tailed test. For a $5\\%$ two-tailed test, the critical value is $1.960$. Since $2.000 > 1.960$, $H_0$ must be rejected."
        },
        {
            "ans": "(a) Select bags by weight category, (b) Quota sampling; interviewer bias distorts results, (c) Reject $H_0$ ($z = 2.000 > 1.960$); significant evidence that mean mass has changed",
            "feedback": "In part (b), selecting every 80th bag from an ordered production line is systematic sampling, not quota sampling."
        },
        {
            "ans": "(a) Generate 3-digit random numbers, discard duplicates and numbers > 800, (b) Systematic sampling; cyclic machine faults introduce periodic bias, (c) Do not reject $H_0$ ($z = 0.250 < 1.960$); insufficient evidence that mean mass has changed",
            "feedback": "In part (c), dividing by the population variance $\\sigma = 24$ instead of the standard error $\\sigma / \\sqrt{n} = 3$ gives $z = 6/24 = 0.25$. You must divide by the standard error of the sample mean."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Two-Tailed Critical Boundaries",
        "content": "When testing $H_1: \\mu \\neq \\mu_0$, always write down the two-tailed critical values ($\pm 1.960$ at $5\\%$, or $\pm 2.576$ at $1\\%$). State explicitly that the test statistic lies in the upper critical tail ($z = 2.000 > 1.960$) to secure all method and communication marks."
    }
},
{
    "id": "050103",
    "group_id": "050101",
    "branch": "Statistics",
    "board": "OCR",
    "level": "A",
    "major_area": "Hypothesis Testing",
    "topic": "Hypothesis Testing for Mean",
    "subtopic": [
        "Stratified Sampling",
        "Critical Value Calculation"
    ],
    "img": false,
    "question": "An environmental agency monitors water nitrate levels across a river catchment containing $1000$ monitoring sites. The catchment is divided into three geographical zones:<br>Upper Zone: $200$ sites<br>Middle Zone: $500$ sites<br>Lower Zone: $300$ sites<br><br>An inspector wishes to select a sample of $50$ sites.<br><br><strong>(a)</strong> Calculate the number of sites that should be sampled from each zone to form a stratified sample.<br><br><strong>(b)</strong> State one reason why stratified sampling is preferable to simple random sampling in this context.<br><br>The historical mean nitrate concentration across the catchment is $28.0\\text{ mg/L}$. After the introduction of new farming guidelines, the inspector wishes to test whether the mean nitrate concentration has decreased. A random sample of $50$ sites yields a sample mean concentration of $26.8\\text{ mg/L}$. The standard deviation of nitrate concentrations across the catchment is assumed to be $4.5\\text{ mg/L}$.<br><br><strong>(c)</strong> Carry out the hypothesis test at the $1\\%$ significance level.<br><br><strong>(d)</strong> Calculate the critical value for the sample mean $\\bar{X}$ for this test at the $1\\%$ significance level.",
    "steps": [
        "<strong>(a) Stratified Sample Calculations:</strong><br><br>For total $N = 1000$ and sample size $n = 50$, calculate each stratum size:\\begin{aligned} \\text{Upper} &= \\dfrac{200}{1000} \\times 50 = 10 \\cr \\text{Middle} &= \\dfrac{500}{1000} \\times 50 = 25 \\cr \\text{Lower} &= \\dfrac{300}{1000} \\times 50 = 15 \\end{aligned}",
        "<strong>(b) Advantage of Stratified Sampling:</strong><br><br>Stratified sampling guarantees that all three geographical zones are represented in exact proportion to their presence in the catchment.<br><br>This is crucial because agricultural runoff and nitrate levels vary substantially between upper, middle, and lower river reaches, which a simple random sample might unbalance by chance.",
        "<strong>(c) Hypothesis Test:</strong><br><br>State the hypotheses for the population mean nitrate level $\\mu$ (in mg/L):\\begin{aligned} &H_0: \\mu = 28.0 \\cr &H_1: \\mu < 28.0 \\end{aligned}Under $H_0$, by the Central Limit Theorem ($n = 50 > 30$):\\begin{aligned} \\bar{X} &\\sim N\\left(28.0, \\dfrac{4.5^2}{50}\\right) \\end{aligned}Standard error:\\begin{aligned} \\sigma_{\\bar{X}} &= \\dfrac{4.5}{\\sqrt{50}} \\cr &= 0.63640\\text{ mg/L} \\end{aligned}Calculate the test statistic $z$ for $\\bar{x} = 26.8\\text{ mg/L}$:\\begin{aligned} z &= \\dfrac{26.8 - 28.0}{0.63640} \\cr &= \\dfrac{-1.2}{0.63640} \\cr &= -1.886 \\end{aligned}For a one-tailed test at the $1\\%$ level, the critical value is $z = -2.326$.<br><br>Since $-1.886 > -2.326$ (or $p = 0.0297 > 0.01$), the result is not significant at the $1\\%$ level.<br><br>Do not reject $H_0$. There is insufficient evidence at the $1\\%$ significance level to conclude that the mean nitrate concentration has decreased.",
        "<strong>(d) Critical Value for $\\bar{X}$:</strong><br><br>Set the standardised statistic equal to the critical $z$-value $-2.326$:\\begin{aligned} \\dfrac{\\bar{x}_{\\text{crit}} - 28.0}{0.63640} &= -2.326 \\cr \\bar{x}_{\\text{crit}} &= 28.0 - 2.326(0.63640) \\cr &= 28.0 - 1.480 \\cr &= 26.52\\text{ mg/L} \\end{aligned}",
        "Final Answer: (a) Upper: 10, Middle: 25, Lower: 15, (b) Guarantees proportional representation across distinct river zones, (c) Do not reject $H_0$ ($z = -1.886 > -2.326$); insufficient evidence of decrease, (d) 26.52 mg/L"
    ],
    "pi_options": [
        {
            "ans": "(a) Upper: 10, Middle: 25, Lower: 15, (b) Guarantees proportional representation across distinct river zones, (c) Reject $H_0$ ($z = -1.886 < -1.645$); significant evidence of decrease, (d) 26.95 mg/L",
            "feedback": "In part (c), $-1.645$ is the critical value for a $5\\%$ one-tailed test. At the specified $1\\%$ significance level, the critical value is $-2.326$. Because $-1.886 > -2.326$, $H_0$ must not be rejected."
        },
        {
            "ans": "(a) Upper: 17, Middle: 17, Lower: 16, (b) Quicker and cheaper than simple random sampling, (c) Do not reject $H_0$ ($z = -1.886 > -2.326$); insufficient evidence of decrease, (d) 26.52 mg/L",
            "feedback": "In part (a), dividing the 50 sites equally ($50 / 3 \\approx 17$) ignores the stratum sizes. Stratified sampling must allocate sample sizes proportionally: $10, 25,$ and $15$."
        },
        {
            "ans": "(a) Upper: 10, Middle: 25, Lower: 15, (b) Guarantees proportional representation across distinct river zones, (c) Do not reject $H_0$ ($z = -1.886 > -2.576$); insufficient evidence of decrease, (d) 26.36 mg/L",
            "feedback": "In parts (c) and (d), $-2.576$ is the critical value for a *two-tailed* $1\\%$ test. Because the inspector specifically tests whether nitrate levels have *decreased*, this is a one-tailed test with critical value $-2.326$, giving cutoff $26.52\\text{ mg/L}$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: 1% One-Tail vs Two-Tail Z-Scores",
        "content": "Be alert to the difference between one-tailed and two-tailed critical values at the $1\\%$ level: a one-tailed test uses $z = 2.326$ (or $-2.326$), whereas a two-tailed test splits $0.005$ into each tail and uses $z = 2.576$. Using the wrong critical value changes both your hypothesis decision and your critical value calculation."
    }
},
{
    "id": "050104",
    "group_id": "050101",
    "branch": "Statistics",
    "board": "OCR",
    "level": "A",
    "major_area": "Hypothesis Testing",
    "topic": "Hypothesis Testing for Mean",
    "subtopic": [
        "Sample Size Determination",
        "Central Limit Theorem"
    ],
    "img": false,
    "question": "The battery operating life of a wireless sensor is modelled as having a known standard deviation of $15\\text{ hours}$. A manufacturer claims that the mean operating life of the sensors is $180\\text{ hours}$.<br><br>A research team suspects that the true mean operating life is less than $180\\text{ hours}$ and plans to test $H_0: \\mu = 180$ against $H_1: \\mu < 180$ at the $5\\%$ significance level.<br><br><strong>(a)</strong> Explain why the Central Limit Theorem allows the sample mean $\\bar{X}$ to be modelled as approximately normal even if individual sensor lifespans are not normally distributed.<br><br><strong>(b)</strong> The researchers test a random sample of $36$ sensors and find that their sample mean operating life is $174.5\\text{ hours}$. Carry out the hypothesis test at the $5\\%$ significance level.<br><br><strong>(c)</strong> In a follow-up quality review, the researchers decide that the critical value for the sample mean should be $176\\text{ hours}$ at the $5\\%$ significance level. Find the minimum sample size $n$ required to achieve this.",
    "steps": [
        "<strong>(a) Central Limit Theorem Explanation:</strong><br><br>The Central Limit Theorem states that for any population with finite mean $\\mu$ and finite variance $\\sigma^2$, the distribution of the sample mean $\\bar{X}$ approaches a normal distribution as the sample size $n$ becomes large (generally $n \\ge 30$), regardless of the shape of the underlying population distribution.",
        "<strong>(b) Hypothesis Test for $n = 36$:</strong><br><br>State the hypotheses:\\begin{aligned} &H_0: \\mu = 180 \\cr &H_1: \\mu < 180 \\end{aligned}Under $H_0$, by the CLT ($n = 36$):\\begin{aligned} \\bar{X} &\\sim N\\left(180, \\dfrac{15^2}{36}\\right) \\end{aligned}Standard error:\\begin{aligned} \\sigma_{\\bar{X}} &= \\dfrac{15}{\\sqrt{36}} \\cr &= 2.5\\text{ hours} \\end{aligned}Calculate the test statistic $z$ for $\\bar{x} = 174.5\\text{ hours}$:\\begin{aligned} z &= \\dfrac{174.5 - 180}{2.5} \\cr &= \\dfrac{-5.5}{2.5} \\cr &= -2.200 \\end{aligned}For a one-tailed test at the $5\\%$ level, the critical value is $z = -1.645$.<br><br>Since $-2.200 < -1.645$, the result is significant at the $5\\%$ level.<br><br>Reject $H_0$. There is sufficient evidence at the $5\\%$ significance level to suggest that the mean sensor operating life is less than $180\\text{ hours}$.",
        "<strong>(c) Minimum Sample Size $n$ for Critical Value $176\\text{ hours}$:</strong><br><br>At the $5\\%$ level, the critical $z$-value is $-1.6449$. Set the standardised critical value equation:\\begin{aligned} \\dfrac{176 - 180}{15 / \\sqrt{n}} &= -1.6449 \\cr \\dfrac{-4 \\sqrt{n}}{15} &= -1.6449 \\cr 4\\sqrt{n} &= 15 \\times 1.6449 \\cr 4\\sqrt{n} &= 24.6735 \\cr \\sqrt{n} &= 6.16838 \\cr n &= (6.16838)^2 \\cr n &= 38.049 \\end{aligned}To ensure the critical value is at least $176\\text{ hours}$ and the significance level is strictly preserved, round up to the next integer:\\begin{aligned} \\text{Minimum } n = 39 \\end{aligned}",
        "Final Answer: (a) CLT guarantees sample mean approaches normality for large n regardless of population shape, (b) Reject $H_0$ ($z = -2.200 < -1.645$); significant evidence mean is less than 180 hours, (c) 39"
    ],
    "pi_options": [
        {
            "ans": "(a) CLT guarantees sample mean approaches normality for large n regardless of population shape, (b) Reject $H_0$ ($z = -2.200 < -1.645$); significant evidence mean is less than 180 hours, (c) 38",
            "feedback": "In part (c), rounding down to $n = 38$ would give a critical value of $180 - 1.6449(15 / \\sqrt{38}) = 175.99 < 176$, failing the required threshold. Sample size calculations must always round up to the next whole integer."
        },
        {
            "ans": "(a) CLT guarantees sample mean approaches normality for large n regardless of population shape, (b) Do not reject $H_0$ ($z = -0.367 > -1.645$); insufficient evidence mean is less than 180 hours, (c) 39",
            "feedback": "In part (b), dividing by $\\sigma = 15$ instead of $\\sigma / \\sqrt{36} = 2.5$ gives $z = -0.367$. The hypothesis test must use the standard error of the sample mean."
        },
        {
            "ans": "(a) CLT applies only when individual sensors follow a uniform distribution, (b) Reject $H_0$ ($z = -2.200 < -1.645$); significant evidence mean is less than 180 hours, (c) 54",
            "feedback": "In part (a), the Central Limit Theorem applies to any population with finite mean and variance, not just uniform distributions. In (c), using a two-tailed $z$-score ($1.96$) erroneously yields $n = 54$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Always Round Up for Sample Size",
        "content": "When determining sample size $n$ from an inequality or boundary condition, any fractional decimal must strictly be rounded UP to the nearest integer. If $n = 38.05$, rounding down to $38$ leaves the sample size slightly too small, meaning your critical boundary or power requirement is not met. Always round up to $39$."
    }
},
{
    "id": "050105",
    "group_id": "050101",
    "branch": "Statistics",
    "board": "OCR",
    "level": "A",
    "major_area": "Hypothesis Testing",
    "topic": "Hypothesis Testing for Mean",
    "subtopic": [
        "Summary Statistics",
        "Central Limit Theorem Justification"
    ],
    "img": false,
    "question": "An agricultural research station investigates the grain yield of a new wheat cultivar. Across a vast agricultural trial area, the population standard deviation of yield per plot is known to be $\\sigma = 1.8\\text{ tonnes/hectare}$.<br><br>The historical mean yield of standard wheat is $7.5\\text{ tonnes/hectare}$. The agronomist tests the new cultivar on a random sample of $45$ plots.<br><br>The recorded yields, $x\\text{ tonnes/hectare}$, are summarised by:$$n = 45$$$$\\sum x = 346.5$$<strong>(a)</strong> State what constitutes the sampling frame required to choose a simple random sample of plots.<br><br><strong>(b)</strong> Calculate the sample mean yield $\\bar{x}$.<br><br><strong>(c)</strong> The agronomist wishes to test whether the new cultivar produces a higher mean yield than standard wheat:<br><strong>(i)</strong> State suitable null and alternative hypotheses.<br><strong>(ii)</strong> Carry out the hypothesis test at the $1\\%$ significance level, stating your conclusion clearly in context.<br><br><strong>(d)</strong> State whether it was necessary to assume that the yield per plot was normally distributed in order to carry out the test in part <strong>(c)</strong>, fully justifying your answer.",
    "steps": [
        "<strong>(a) Sampling Frame:</strong><br><br>A complete, numbered list or register of all agricultural plots available in the trial area from which the sample is drawn.",
        "<strong>(b) Calculating the Sample Mean $\\bar{x}$:</strong><br><br>\\begin{aligned} \\bar{x} &= \\dfrac{\\sum x}{n} \\cr &= \\dfrac{346.5}{45} \\cr &= 7.7\\text{ tonnes/hectare} \\end{aligned}",
        "<strong>(c)(i) Hypotheses:</strong><br><br>Let $\\mu$ represent the true population mean yield of the new cultivar (in tonnes/ha):\\begin{aligned} &H_0: \\mu = 7.5 \\cr &H_1: \\mu > 7.5 \\end{aligned}",
        "<strong>(c)(ii) Hypothesis Test at the $1\\%$ Significance Level:</strong><br><br>Under $H_0$, by the Central Limit Theorem ($n = 45 > 30$):\\begin{aligned} \\bar{X} &\\sim N\\left(7.5, \\dfrac{1.8^2}{45}\\right) \\end{aligned}Standard error:\\begin{aligned} \\sigma_{\\bar{X}} &= \\dfrac{1.8}{\\sqrt{45}} \\cr &= 0.26833\\text{ tonnes/ha} \\end{aligned}Calculate the test statistic $z$ for $\\bar{x} = 7.7\\text{ tonnes/ha}$:\\begin{aligned} z &= \\dfrac{7.7 - 7.5}{0.26833} \\cr &= \\dfrac{0.2}{0.26833} \\cr &= 0.745 \\end{aligned}For a one-tailed test at the $1\\%$ level, the critical value is $z = 2.326$.<br><br>Since $0.745 < 2.326$ (or $p = 0.228 > 0.01$), the result is not significant at the $1\\%$ level.<br><br>Do not reject $H_0$. There is insufficient evidence at the $1\\%$ significance level to suggest that the new cultivar produces a higher mean yield than standard wheat.",
        "<strong>(d) Necessity of Normal Assumption:</strong><br><br>No, it was not necessary.<br><br>Because the sample size is large ($n = 45 > 30$), the Central Limit Theorem guarantees that the distribution of the sample mean $\\bar{X}$ is approximately normal, regardless of the underlying distribution of individual plot yields.",
        "Final Answer: (a) A complete list of all available trial plots, (b) 7.7 tonnes/hectare, (c)(i) $H_0: \\mu = 7.5, \\ H_1: \\mu > 7.5$, (ii) Do not reject $H_0$ ($z = 0.745 < 2.326$); insufficient evidence of higher yield, (d) No; CLT ensures sample mean is approximately normal for large n"
    ],
    "pi_options": [
        {
            "ans": "(a) A complete list of all available trial plots, (b) 7.7 tonnes/hectare, (c)(i) $H_0: \\mu = 7.5, \\ H_1: \\mu > 7.5$, (ii) Reject $H_0$ ($z = 0.745 < 2.326$); significant evidence of higher yield, (d) No; CLT ensures sample mean is approximately normal for large n",
            "feedback": "In part (c)(ii), when the test statistic ($0.745$) is less than the critical value ($2.326$), the result is *not* statistically significant. You must not reject $H_0$."
        },
        {
            "ans": "(a) The total number of plots (45), (b) 7.7 tonnes/hectare, (c)(i) $H_0: \\mu = 7.5, \\ H_1: \\mu > 7.5$, (ii) Do not reject $H_0$ ($z = 0.745 < 2.326$); insufficient evidence of higher yield, (d) Yes; hypothesis tests on means strictly require normal populations",
            "feedback": "In part (a), the sampling frame is an exhaustive list or register of all individual sampling units, not just the sample size number 45. In (d), the Central Limit Theorem explicitly removes the need for population normality when $n$ is large."
        },
        {
            "ans": "(a) A complete list of all available trial plots, (b) 7.7 tonnes/hectare, (c)(i) $H_0: \\mu = 7.5, \\ H_1: \\mu > 7.5$, (ii) Do not reject $H_0$ ($z = 0.111 < 2.326$); insufficient evidence of higher yield, (d) No; CLT ensures sample mean is approximately normal for large n",
            "feedback": "In part (c)(ii), dividing $0.2$ by the population standard deviation $1.8$ gives $z = 0.111$. You must divide by the standard error $\\sigma / \\sqrt{n} = 1.8 / \\sqrt{45} = 0.268$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Why the CLT is So Powerful",
        "content": "Exam questions frequently ask: 'Was it necessary to assume the population was normally distributed?' If $n \\ge 30$, the answer is always NO, because the Central Limit Theorem ensures the sample mean $\\bar{X}$ is approximately normal regardless of the population distribution. If $n < 30$, the answer would be YES."
    }
},
{
    "id": "050106",
    "group_id": "050106",
    "branch": "Statistics",
    "board": "OCR",
    "level": "A",
    "major_area": "Bivariate Data",
    "topic": "Correlation and Regression",
    "subtopic": [
        "PMCC Interpretation",
        "Large Data Set Context"
    ],
    "img": "images/Statistics_pngs/050106.png",
    "question": "A researcher uses Pearson's product-moment correlation coefficient, $r$, to investigate the travel-to-work patterns of employees across the UK.<br><br>Using census data for all $348$ UK Local Authorities, she considers the following four variables:<br>$x$: Number of employees using public transport<br>$y$: Number of employees driving a private vehicle<br>$a$: Proportion of employees using public transport<br>$b$: Proportion of employees driving a private vehicle<br><br><strong>(a)(i)</strong> Explain, in context, why you would expect a strong positive correlation between $x$ and $y$ across all UK Local Authorities.<br><br><strong>(a)(ii)</strong> Explain, in context, what type of correlation you would expect between the proportions $a$ and $b$.<br><br><strong>(b)</strong> The researcher examines the data for the $33$ London Boroughs alone and plots the scatter diagram shown, plotting the proportion driving against the proportion using public transport.<br><br>One London Borough is represented by a distinct outlier located near the bottom left at $(0.29, 0.025)$.<br><br><strong>(b)(i)</strong> Suggest what effect removing this outlier is likely to have on the value of $r$ for the remaining $32$ London Boroughs.<br><br><strong>(b)(ii)</strong> What does the position of this outlier suggest about the typical mode of travel to work used by residents in this specific borough?<br><br><strong>(b)(iii)</strong> What can you deduce about the physical size (area) and geographical nature of the borough represented by this outlier? Explain your answer.",
    "steps": [
        "<strong>(a)(i) Reason for Positive Correlation Between Raw Counts:</strong><br><br>Both $x$ and $y$ are raw headcounts driven primarily by the total population size of the Local Authority.<br><br>Heavily populated authorities (e.g. large cities) have high numbers of both public transport users and car drivers, whereas sparsely populated rural districts have low numbers of both, creating a strong positive correlation.",
        "<strong>(a)(ii) Expected Correlation Between Proportions $a$ and $b$:</strong><br><br>You would expect a <strong>negative correlation</strong>.<br><br>Proportions remove the effect of population size. Because commuters generally choose one primary mode of travel to work, a higher proportion choosing public transport leaves a smaller remaining proportion driving private vehicles.",
        "<strong>(b)(i) Effect of Removing the Outlier:</strong><br><br>Removing the outlier will make $r$ <strong>more negative</strong> (i.e. strengthen the negative correlation, decreasing its numerical value further from $0$ towards $-1$), because the outlier $(0.29, 0.025)$ lies well below the general downward linear trend.",
        "<strong>(b)(ii) Travel Mode Inferred from Outlier:</strong><br><br>The outlier exhibits a low proportion using public transport ($0.29$) and an extremely low proportion driving ($0.025$).<br><br>This indicates that the vast majority of residents use active travel methods (walking or cycling) to commute to work.",
        "<strong>(b)(iii) Deduction About the Area of the Borough:</strong><br><br>The borough has a <strong>very small, compact geographical area</strong> (such as the City of London or central commercial districts like Westminster).<br><br>Because the area is so small and densely developed, commute distances are very short, meaning residents live close enough to their workplaces to walk rather than drive or take public transport.",
        "Final Answer: (a)(i) Driven by total population size, (ii) Negative correlation, (b)(i) Makes r more negative (strengthens negative correlation), (ii) Most residents walk or cycle, (iii) Very small, compact area with short commute distances"
    ],
    "pi_options": [
        {
            "ans": "(a)(i) Driven by total population size, (ii) Negative correlation, (b)(i) Makes r positive, (ii) Most residents walk or cycle, (iii) Very small, compact area with short commute distances",
            "feedback": "Removing an outlier that lies below a negative trend makes the negative trend cleaner and stronger (more negative); it cannot flip r to positive."
        },
        {
            "ans": "(a)(i) Driven by total population size, (ii) Negative correlation, (b)(i) Makes r more negative (strengthens negative correlation), (ii) Most residents drive, (iii) Large rural area with low population density",
            "feedback": "A large rural area would have high driving rates due to long travel distances. Very low driving and low public transport indicates a compact, highly walkable urban area."
        },
        {
            "ans": "(a)(i) Better public transport encourages more driving, (ii) Positive correlation, (b)(i) Makes r more negative (strengthens negative correlation), (ii) Most residents work from home, (iii) Medium-sized suburban borough",
            "feedback": "In (a)(i), the positive correlation is driven by population size. In (b)(iii), the outlier reflects an extraordinarily small, compact area where driving is unnecessary."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Geographical Deductions from Outliers",
        "content": "Exam boards do not expect students outside London to memorize local government names. When a question asks what you can deduce about the 'area', look at the transport modes: if both driving ($2.5\\%$) and public transport ($29\\%$) are exceptionally low, distances must be tiny, indicating a very small, densely packed urban footprint where people walk to work."
    }
},
{
    "id": "050107",
    "group_id": "050106",
    "branch": "Statistics",
    "board": "OCR",
    "level": "A",
    "major_area": "Bivariate Data",
    "topic": "Correlation and Regression",
    "subtopic": [
        "PMCC Calculation",
        "Correlation Hypothesis Test"
    ],
    "img": "images/Statistics_pngs/050107.png",
    "question": "An automotive engineer investigates the relationship between engine capacity, $x\\text{ litres}$, and tailpipe carbon dioxide emissions, $y\\text{ g/km}$, for new passenger vehicles.<br><br>The scatter diagram shows the data for a sample of $21$ vehicles, including a fitted linear regression line for standard internal combustion engine (ICE) vehicles and a distinct outlier, labelled Vehicle P, at $(3.5, 88)$.<br><br><strong>(a)</strong> For the $20$ standard vehicles (excluding Vehicle P), summary statistics are given below:$$n = 20$$$$\\sum x = 44.0$$$$\\sum y = 3280$$$$S_{xx} = 17.6$$$$S_{yy} = 45800$$$$S_{xy} = 880$$<strong>(a)(i)</strong> Calculate the value of Pearson's product-moment correlation coefficient, $r$, for the $20$ standard vehicles.<br><br><strong>(a)(ii)</strong> Test, at the $1\\%$ significance level, whether there is evidence of positive linear correlation between engine capacity and $\\text{CO}_2$ emissions for standard vehicles. State your hypotheses and conclusion clearly.<br><br><strong>(b)(i)</strong> State the effect on the value of $r$ if Vehicle P is included in the calculation.<br><br><strong>(b)(ii)</strong> Suggest a plausible technological reason why Vehicle P exhibits such low $\\text{CO}_2$ emissions despite having a large $3.5\\text{-litre}$ engine.",
    "steps": [
        "<strong>(a)(i) Calculating the PMCC $r$:</strong><br><br>Using the summary statistics for the $20$ standard vehicles:\\begin{aligned} r &= \\dfrac{S_{xy}}{\\sqrt{S_{xx} S_{yy}}} \\cr &= \\dfrac{880}{\\sqrt{17.6 \\times 45800}} \\cr &= \\dfrac{880}{\\sqrt{806080}} \\cr &= \\dfrac{880}{897.8196} \\cr &= 0.98015 \\cr &\\approx 0.980\\text{ (3 s.f.)} \\end{aligned}",
        "<strong>(a)(ii) Hypothesis Test for Positive Correlation:</strong><br><br>State the hypotheses for the population correlation coefficient $\\rho$:\\begin{aligned} &H_0: \\rho = 0 \\cr &H_1: \\rho > 0 \\end{aligned}Sample size $n = 20$, one-tailed test at the $1\\%$ significance level.<br><br>The critical value from tables for $n = 20$ at the $1\\%$ level is $0.5155$.<br><br>Since $r = 0.980 > 0.5155$, the result is significant at the $1\\%$ level.<br><br>Reject $H_0$. There is significant evidence at the $1\\%$ level of a positive linear correlation between engine capacity and $\\text{CO}_2$ emissions for standard vehicles.",
        "<strong>(b)(i) Effect of Vehicle P on $r$:</strong><br><br>Vehicle P has a high engine capacity ($x = 3.5$) but very low emissions ($y = 88$), lying far below the positive trend line.<br><br>Including Vehicle P will <strong>decrease the value of $r$</strong> (weakening the positive linear correlation).",
        "<strong>(b)(ii) Technological Reason:</strong><br><br>Vehicle P is a <strong>plug-in hybrid (PHEV)</strong> or hybrid electric vehicle.<br><br>The vehicle combines a large displacement combustion engine with a high-capacity electric battery and motor, allowing electric-only propulsion that dramatically lowers test-cycle tailpipe $\\text{CO}_2$ emissions.",
        "Final Answer: (a)(i) 0.980, (ii) Reject $H_0$ ($0.980 > 0.5155$); significant evidence of positive correlation, (b)(i) Decreases the value of r, (ii) Plug-in hybrid technology / electric motor assistance"
    ],
    "pi_options": [
        {
            "ans": "(a)(i) 0.980, (ii) Reject $H_0$ ($0.980 > 0.5155$); significant evidence of positive correlation, (b)(i) Increases the value of r, (ii) Plug-in hybrid technology / electric motor assistance",
            "feedback": "In (b)(i), Vehicle P lies far away from the positive regression line. An outlier that contradicts the upward trend always weakens the relationship and decreases $r$."
        },
        {
            "ans": "(a)(i) 0.00109, (ii) Do not reject $H_0$ ($0.00109 < 0.5155$); insufficient evidence of positive correlation, (b)(i) Decreases the value of r, (ii) Plug-in hybrid technology / electric motor assistance",
            "feedback": "In (a)(i), forgetting the square root over the denominator gives $880 / (17.6 \\times 45800) = 0.00109$. The denominator must be $\\sqrt{S_{xx} S_{yy}}$."
        },
        {
            "ans": "(a)(i) 0.980, (ii) Do not reject $H_0$ ($0.980 < 0.990$); insufficient evidence of positive correlation, (b)(i) Decreases the value of r, (ii) Smaller catalytic converter fitted",
            "feedback": "In (a)(ii), $0.990$ is not the critical value. For $n = 20$ at the $1\\%$ one-tailed level, the critical value from the formula booklet is $0.5155$. Since $0.980 > 0.5155$, $H_0$ is rejected."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Denominator Square Root Trap",
        "content": "When computing $r = \\frac{S_{xy}}{\\sqrt{S_{xx} S_{yy}}}$, students frequently forget to take the square root of the denominator product, obtaining an absurdly tiny value like $0.001$. Always check that your calculated $r$ is dimensionless and lies within $[-1, 1]$."
    }
},
{
    "id": "050108",
    "group_id": "050106",
    "branch": "Statistics",
    "board": "OCR",
    "level": "A",
    "major_area": "Bivariate Data",
    "topic": "Correlation and Regression",
    "subtopic": [
        "Non-Linear Correlation",
        "PMCC Limitations"
    ],
    "img": "images/Statistics_pngs/050108.png",
    "question": "An energy analyst studies the relationship between daily mean ambient temperature, $x\\text{ }^\\circ\\text{C}$, and daily electricity demand, $y\\text{ GWh}$, in a region over a $20$-day period.<br><br>The scatter diagram shows the recorded data points.<br><br>A junior analyst calculates Pearson's product-moment correlation coefficient for the $20$ observations and finds $r = -0.04$. The junior analyst states:<br><em>'Because $r$ is close to $0$, there is no relationship between temperature and electricity demand.'</em><br><br><strong>(a)</strong> Explain why the junior analyst's conclusion is misleading, stating clearly what a value of $r \\approx 0$ indicates.<br><br><strong>(b)</strong> Referring to the shape of the data in the scatter diagram, give real-world reasons why electricity demand is high at both low temperatures ($0^\\circ\\text{C}$–$5^\\circ\\text{C}$) and high temperatures ($25^\\circ\\text{C}$–$30^\\circ\\text{C}$), but reaches a minimum around $15^\\circ\\text{C}$–$18^\\circ\\text{C}$.<br><br><strong>(c)</strong> Suggest a non-linear mathematical model that would be more appropriate than a linear model for describing the relationship between $y$ and $x$.",
    "steps": [
        "<strong>(a) Critique of the Junior Analyst's Conclusion:</strong><br><br>The conclusion is misleading because Pearson's $r$ measures only the strength and direction of a <strong>linear</strong> relationship.<br><br>A value of $r \\approx 0$ indicates only that there is no linear association. It does not imply that there is no relationship: here, the data shows an extremely strong, clear non-linear (U-shaped) relationship.",
        "<strong>(b) Real-World Explanation of the U-Shape:</strong><br><br>1. <strong>Low temperatures ($0^\\circ\\text{C}$–$5^\\circ\\text{C}$):</strong> Electricity demand is high because households and commercial buildings require substantial electric heating and lighting.<br><br>2. <strong>High temperatures ($25^\\circ\\text{C}$–$30^\\circ\\text{C}$):</strong> Demand rises sharply again due to the widespread use of air conditioning, fans, and refrigeration units.<br><br>3. <strong>Moderate temperatures ($15^\\circ\\text{C}$–$18^\\circ\\text{C}$):</strong> The climate is comfortable, so neither heating nor air conditioning is heavily used, resulting in minimum baseline electricity consumption.",
        "<strong>(c) Appropriate Non-Linear Model:</strong><br><br>A <strong>quadratic model</strong> of the form:\\begin{aligned} y &= ax^2 + bx + c \\quad (a > 0) \\end{aligned}A parabola with a positive coefficient of $x^2$ accurately captures the U-shaped curve with a minimum turning point near $16^\\circ\\text{C}$–$17^\\circ\\text{C}$.",
        "Final Answer: (a) r measures only linear relationship; strong non-linear relationship exists, (b) High heating demand in cold weather, high air conditioning demand in hot weather, (c) Quadratic model: $y = ax^2 + bx + c$ with $a > 0$"
    ],
    "pi_options": [
        {
            "ans": "(a) r measures only linear relationship; strong non-linear relationship exists, (b) High heating demand in cold weather, high air conditioning demand in hot weather, (c) Exponential model: $y = ae^{bx}$",
            "feedback": "An exponential model ($ae^{bx}$) is monotonic (strictly increasing or strictly decreasing) and cannot model a U-shaped turning point. A quadratic model ($ax^2 + bx + c$) is required."
        },
        {
            "ans": "(a) The calculation of r was mathematically incorrect; r should be 1, (b) High heating demand in cold weather, high air conditioning demand in hot weather, (c) Quadratic model: $y = ax^2 + bx + c$ with $a > 0$",
            "feedback": "The calculation of $r \\approx 0$ is mathematically correct because the downward slope on the left cancels with the upward slope on the right. The error is interpreting $r \\approx 0$ as 'no relationship'."
        },
        {
            "ans": "(a) r measures only linear relationship; strong non-linear relationship exists, (b) Electricity production costs rise with temperature, (c) Inverse model: $y = a/x$",
            "feedback": "In (b), demand is driven by consumer consumption (heating and air conditioning), not production costs. In (c), an inverse model ($y = a/x$) does not produce a U-shape."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: PMCC Measures Straightness Only",
        "content": "Never write '$r = 0$ means no relationship'. Always write '$r = 0$ means no LINEAR relationship'. A dataset can follow a perfect parabola $y = x^2$ symmetric about zero, and its PMCC will be exactly $0$. Always inspect the scatter diagram before computing or interpreting $r$."
    }
},
{
    "id": "050109",
    "group_id": "050106",
    "branch": "Statistics",
    "board": "OCR",
    "level": "A",
    "major_area": "Bivariate Data",
    "topic": "Correlation and Regression",
    "subtopic": [
        "Residual Plots",
        "Coefficient of Determination"
    ],
    "img": "images/Statistics_pngs/050109.png",
    "question": "A linear regression model of the form $y = a + bx$ is fitted to a bivariate dataset of $20$ paired observations $(x_i, y_i)$.<br><br>The scatter diagram shows the residual plot, where the residuals $e_i = y_i - \\hat{y}_i$ are plotted against the fitted values $\\hat{y}_i$.<br><br><strong>(a)</strong> Define what is meant by a <em>residual</em> in the context of linear regression.<br><br><strong>(b)</strong> State two features of the residual plot that confirm that a linear model is appropriate for this data.<br><br><strong>(c)</strong> The sum of the squares of the residuals is $\\sum e_i^2 = 84.5$, and the total sum of squares of $y$ is $S_{yy} = 560.0$.<br><strong>(i)</strong> Calculate the coefficient of determination, $r^2$.<br><strong>(ii)</strong> Given that the gradient of the regression line is positive ($b > 0$), state the value of Pearson's product-moment correlation coefficient, $r$.<br><strong>(iii)</strong> Interpret the value of $r^2$ in the context of the regression model.",
    "steps": [
        "<strong>(a) Definition of Residual:</strong><br><br>A residual is the vertical difference between an observed data value $y_i$ and the corresponding fitted value $\\hat{y}_i$ predicted by the regression line:\\begin{aligned} e_i &= y_i - \\hat{y}_i \\end{aligned}",
        "<strong>(b) Features Confirming Linearity:</strong><br><br>1. <strong>Random scatter:</strong> The residuals are randomly dispersed above and below the zero line with no systematic curved or cyclic pattern.<br><br>2. <strong>Homoscedasticity (constant variance):</strong> The vertical spread of the residuals remains approximately constant across all fitted values $\\hat{y}$, with no 'fan' or 'funnel' shape.",
        "<strong>(c)(i) Coefficient of Determination $r^2$:</strong><br><br>\\begin{aligned} r^2 &= 1 - \\dfrac{\\sum e_i^2}{S_{yy}} \\cr &= 1 - \\dfrac{84.5}{560.0} \\cr &= 1 - 0.15089 \\cr &= 0.84911 \\cr &\\approx 0.849\\text{ (or } 84.9\\%\\text{)} \\end{aligned}",
        "<strong>(c)(ii) Value of PMCC $r$:</strong><br><br>Since the gradient $b > 0$, $r$ must be positive:\\begin{aligned} r &= +\\sqrt{0.84911} \\cr &= 0.92147 \\cr &\\approx 0.921\\text{ (3 s.f.)} \\end{aligned}",
        "<strong>(c)(iii) Interpretation of $r^2$:</strong><br><br>$84.9\\%$ of the total variation in the dependent variable $y$ can be explained by the linear relationship with $x$.",
        "Final Answer: (a) Difference between observed and predicted value ($y_i - \\hat{y}_i$), (b) Random scatter around zero and constant variance (no curve/fan), (c)(i) 0.849, (ii) 0.921, (iii) 84.9% of variation in y is explained by linear model with x"
    ],
    "pi_options": [
        {
            "ans": "(a) Difference between observed and predicted value ($y_i - \\hat{y}_i$), (b) Random scatter around zero and constant variance (no curve/fan), (c)(i) 0.151, (ii) 0.388, (iii) 84.9% of variation in y is explained by linear model with x",
            "feedback": "In (c)(i), $84.5 / 560.0 = 0.151$ is the proportion of *unexplained* variation. The coefficient of determination is the proportion of *explained* variation: $r^2 = 1 - 0.151 = 0.849$."
        },
        {
            "ans": "(a) The perpendicular distance from a point to the line, (b) All residuals are positive and close to zero, (c)(i) 0.849, (ii) 0.921, (iii) 84.9% of variation in y is explained by linear model with x",
            "feedback": "In (a), least-squares regression minimizes *vertical* distances ($y - \\hat{y}$), not perpendicular distances. In (b), residuals must be both positive and negative, summing to zero."
        },
        {
            "ans": "(a) Difference between observed and predicted value ($y_i - \\hat{y}_i$), (b) Random scatter around zero and constant variance (no curve/fan), (c)(i) 0.849, (ii) -0.921, (iii) 84.9% of data points lie exactly on the regression line",
            "feedback": "In (c)(ii), because the gradient $b > 0$, the correlation coefficient must be positive ($+0.921$). In (c)(iii), $r^2 = 0.849$ measures explained variance, not the proportion of points lying on the line."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: What Makes a Residual Plot 'Good'",
        "content": "A good residual plot should look completely boring: an unstructured, random horizontal band of points centered on $0$. If you see a curve, your linear model is missing a non-linear term. If you see a funnel shape widening to the right, the variance is not constant (heteroscedasticity)."
    }
},
{
    "id": "050110",
    "group_id": "050106",
    "branch": "Statistics",
    "board": "OCR",
    "level": "A",
    "major_area": "Bivariate Data",
    "topic": "Correlation and Regression",
    "subtopic": [
        "Influential Outliers",
        "Regression Line Sensitivity"
    ],
    "img": "images/Statistics_pngs/050110.png",
    "question": "A teacher investigates the relationship between weekly independent revision time, $x\\text{ hours}$, and mock examination score, $y\\%$, for a class of $20$ students.<br><br>The scatter diagram shows the cohort data and highlights an anomaly, Student A, plotted at $(32, 28)$.<br><br><strong>(a)</strong> For the $19$ students in the cohort (excluding Student A), the value of Pearson's product-moment correlation coefficient is $r = 0.942$.<br><br>Test, at the $0.5\\%$ ($0.005$) significance level, whether there is evidence of positive linear correlation between weekly revision time and mock examination score for these $19$ students.<br><br><strong>(b)(i)</strong> State the effect that including Student A will have on the calculated value of $r$.<br><br><strong>(b)(ii)</strong> State the effect that including Student A will have on the gradient and the $y$-intercept of the least-squares regression line of $y$ on $x$.<br><br><strong>(b)(iii)</strong> Suggest one plausible non-academic explanation for Student A's outlying score.",
    "steps": [
        "<strong>(a) Hypothesis Test for Positive Correlation:</strong><br><br>State the hypotheses for the population correlation coefficient $\\rho$:\\begin{aligned} &H_0: \\rho = 0 \\cr &H_1: \\rho > 0 \\end{aligned}Sample size $n = 19$, one-tailed test at the $0.5\\%$ ($0.005$) significance level.<br><br>The critical value from tables for $n = 19$ at $\\alpha = 0.005$ is $0.5833$.<br><br>Since $r = 0.942 > 0.5833$, the result is highly significant.<br><br>Reject $H_0$. There is overwhelming evidence at the $0.5\\%$ significance level of a positive linear correlation between revision time and mock examination score for these $19$ students.",
        "<strong>(b)(i) Effect on $r$:</strong><br><br>Student A has an unusually high revision time ($32\\text{ hours}$) paired with an exceptionally low score ($28\\%$), lying far to the right and well below the positive trend.<br><br>Including Student A will <strong>decrease the value of $r$</strong> significantly.",
        "<strong>(b)(ii) Effect on Regression Parameters:</strong><br><br>1. <strong>Gradient ($b$):</strong> <strong>Decreases</strong>. The extreme point at the bottom right acts as a leverage point, pulling the right side of the regression line downwards and flattening the slope.<br><br>2. <strong>$y$-Intercept ($a$):</strong> <strong>Increases</strong>. Because the line of best fit must pass through the mean point $(\\bar{x}, \\bar{y})$, flattening the gradient pivots the line upwards on the left, raising the vertical intercept.",
        "<strong>(b)(iii) Plausible Explanation for Student A:</strong><br><br>Any sensible non-academic factor: the student may have been taken ill during the exam, arrived late, suffered severe test anxiety, misread the exam instructions/clock, or recorded unproductive 'passive' revision time (e.g. multitasking).",
        "Final Answer: (a) Reject $H_0$ ($0.942 > 0.5833$); significant evidence of positive correlation, (b)(i) Decreases r, (ii) Gradient decreases; y-intercept increases, (iii) Illness during exam / test anxiety / misread time"
    ],
    "pi_options": [
        {
            "ans": "(a) Reject $H_0$ ($0.942 > 0.5833$); significant evidence of positive correlation, (b)(i) Decreases r, (ii) Gradient increases; y-intercept decreases, (iii) Illness during exam / test anxiety / misread time",
            "feedback": "In (b)(ii), a point with high $x$ and low $y$ pulls the right side of the line downwards, which *flattens* the slope (gradient decreases). Because the line must pass through $(\\bar{x}, \\bar{y})$, flattening the slope rotates the line to raise the $y$-intercept."
        },
        {
            "ans": "(a) Do not reject $H_0$ ($0.942 < 0.950$); insufficient evidence of positive correlation, (b)(i) Increases r, (ii) Gradient decreases; y-intercept increases, (iii) Student revision was completely ineffective",
            "feedback": "In part (a), $0.950$ is not a critical value; for $n = 19$ at the $0.5\\%$ level, the critical value is $0.5833$. Since $0.942 > 0.5833$, $H_0$ is decisively rejected."
        },
        {
            "ans": "(a) Reject $H_0$ ($0.942 > 0.5833$); significant evidence of positive correlation, (b)(i) Decreases r, (ii) Both gradient and y-intercept decrease, (iii) Student cheated on the revision log",
            "feedback": "In (b)(ii), the line of best fit always passes through the centroid $(\\bar{x}, \\bar{y})$. When a point at large $x$ pulls the line down, the line pivots about the centroid, which raises the intercept at $x = 0$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Leverage Points and the See-Saw Effect",
        "content": "Think of a regression line as a see-saw balanced at the centroid $(\\bar{x}, \\bar{y})$. An outlier with high $x$ but low $y$ pushes down on the far right end of the plank. This flattens the gradient (making it less positive) and forces the opposite left end (the $y$-intercept) to tilt upwards!"
    }
},
{
    "id": "050111",
    "group_id": "050111",
    "branch": "Statistics",
    "board": "OCR",
    "level": "A",
    "major_area": "Probability",
    "topic": "Discrete Random Variables",
    "subtopic": [
        "Recurrence Relations",
        "Compound Sums"
    ],
    "img": false,
    "question": "The discrete random variable $X$ takes values $1, 2, 3, 4,$ and $5$, and its probability distribution is defined by:\\begin{aligned} &\\text{P}(X = 1) = a \\cr &\\text{P}(X = x) = \\dfrac{1}{3}\\text{P}(X = x - 1) \\cr &\\quad \\text{for } x = 2, 3, 4, 5 \\end{aligned}where $a$ is a constant.<br><br><strong>(a)</strong> Show that $a = \\dfrac{81}{121}$.<br><br>The probability distribution for $X$ is shown in the table below:<table style='width:100%; max-width:180px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='background-color:#f2f2f2;'><th style='border:1px solid #999; padding:5px;'>$x$</th><th style='border:1px solid #999; padding:5px;'>$\\text{P}(X = x)$</th></tr></thead><tbody><tr><td style='border:1px solid #999; padding:5px;'>$1$</td><td style='border:1px solid #999; padding:5px;'>$\\dfrac{81}{121}$</td></tr><tr><td style='border:1px solid #999; padding:5px;'>$2$</td><td style='border:1px solid #999; padding:5px;'>$\\dfrac{27}{121}$</td></tr><tr><td style='border:1px solid #999; padding:5px;'>$3$</td><td style='border:1px solid #999; padding:5px;'>$\\dfrac{9}{121}$</td></tr><tr><td style='border:1px solid #999; padding:5px;'>$4$</td><td style='border:1px solid #999; padding:5px;'>$\\dfrac{3}{121}$</td></tr><tr><td style='border:1px solid #999; padding:5px;'>$5$</td><td style='border:1px solid #999; padding:5px;'>$\\dfrac{1}{121}$</td></tr></tbody></table><strong>(b)</strong> Find the probability that $X$ is even.<br><br>Two independent values of $X$, denoted by $X_1$ and $X_2$, are chosen and their sum $S = X_1 + X_2$ is found.<br><br><strong>(c)</strong> Find the probability that $S$ is even.<br><br><strong>(d)</strong> Find the probability that $S \\le 3$, given that $S$ is even.<br><br>A basketball player models the number of attempts, $Y$, needed to score her first three-pointer as follows:\\begin{aligned} \\text{P}(Y = y + 1) &= \\dfrac{1}{3}\\text{P}(Y = y) \\cr &\\quad \\text{for } y \\ge 1 \\end{aligned}<strong>(e)</strong> Find $\\text{P}(Y = 1)$.<br><br><strong>(f)</strong> Give one reason why $Y$ might be more realistic than $X$ as a model for the number of attempts, and one reason why $X$ might be preferred.",
    "steps": [
        "<strong>(a) Showing $a = \\dfrac{81}{121}$:</strong><br><br>Express each outcome in terms of $a$:\\begin{aligned} &\\text{P}(X = 1) = a \\cr &\\text{P}(X = 2) = \\dfrac{a}{3} \\cr &\\text{P}(X = 3) = \\dfrac{a}{9} \\cr &\\text{P}(X = 4) = \\dfrac{a}{27} \\cr &\\text{P}(X = 5) = \\dfrac{a}{81} \\end{aligned}Summing the geometric terms:\\begin{aligned} &1 + \\dfrac{1}{3} + \\dfrac{1}{9} + \\dfrac{1}{27} + \\dfrac{1}{81} \\cr &\\quad = \\dfrac{81 + 27 + 9 + 3 + 1}{81} \\cr &\\quad = \\dfrac{121}{81} \\end{aligned}Since the total probability must equal $1$:\\begin{aligned} a\\left(\\dfrac{121}{81}\\right) &= 1 \\cr a &= \\dfrac{81}{121} \\end{aligned}",
        "<strong>(b) Probability that $X$ is Even:</strong><br><br>\\begin{aligned} &\\text{P}(X \\text{ is even}) \\cr & \\qquad = \\text{P}(X = 2) + \\text{P}(X = 4) \\cr & \\qquad = \\dfrac{27}{121} + \\dfrac{3}{121} \\cr & \\qquad = \\dfrac{30}{121} \\end{aligned}",
        "<strong>(c) Probability that the Sum $S$ is Even:</strong><br><br>The sum is even if both numbers are even or both are odd:\\begin{aligned} \\text{P}(\\text{Odd}) &= 1 - \\dfrac{30}{121} \\cr &= \\dfrac{91}{121} \\end{aligned}Summing both cases:\\begin{aligned} &\\text{P}(S \\text{ is even}) \\cr &\\quad = [\\text{P}(\\text{Even})]^2 + [\\text{P}(\\text{Odd})]^2 \\cr &\\quad = \\left(\\dfrac{30}{121}\\right)^2 + \\left(\\dfrac{91}{121}\\right)^2 \\cr &\\quad = \\dfrac{900 + 8281}{14641} \\cr &\\quad = \\dfrac{9181}{14641} \\end{aligned}",
        "<strong>(d) Conditional Probability $\\text{P}(S \\le 3 \\mid S \\text{ is even})$:</strong><br><br>The minimum possible sum of two values is $1 + 1 = 2$.<br><br>The only even sum satisfying $S \\le 3$ is $S = 2$, which requires $(X_1 = 1, X_2 = 1)$:\\begin{aligned} \\text{P}(S = 2) &= \\left(\\dfrac{81}{121}\\right)^2 \\cr &= \\dfrac{6561}{14641} \\end{aligned}Using the conditional formula:\\begin{aligned} &\\text{P}(S \\le 3 \\mid S \\text{ is even}) \\cr &\\quad = \\dfrac{\\text{P}(S = 2)}{\\text{P}(S \\text{ is even})} \\cr &\\quad = \\dfrac{6561 / 14641}{9181 / 14641} \\cr &\\quad = \\dfrac{6561}{9181} \\cr &\\quad \\approx 0.715\\text{ (3 s.f.)} \\end{aligned}",
        "<strong>(e) Finding $\\text{P}(Y = 1)$:</strong><br><br>Let $p = \\text{P}(Y = 1)$. The probabilities form an infinite geometric series with $r = \\frac{1}{3}$:\\begin{aligned} &\\sum_{y=1}^\\infty \\text{P}(Y = y) = 1 \\cr &\\dfrac{p}{1 - 1/3} = 1 \\cr &\\dfrac{3p}{2} = 1 \\cr &p = \\dfrac{2}{3} \\end{aligned}",
        "<strong>(f) Model Comparison:</strong><br><br>1. <strong>Why $Y$ is more realistic:</strong> In reality, a player could take $6$ or more shots before scoring; $Y$ does not impose an artificial upper limit.<br><br>2. <strong>Why $X$ might be preferred:</strong> A practice drill might enforce a strict maximum cap of $5$ attempts before moving on.",
        "Final Answer: (a) Show that completed, (b) 30/121, (c) 9181/14641, (d) 6561/9181, (e) 2/3, (f) Y allows unlimited attempts; X allows for a drill cutoff or fatigue"
    ],
    "pi_options": [
        {
            "ans": "(a) Show that completed, (b) 30/121, (c) 5460/14641, (d) 6561/9181, (e) 2/3, (f) Y allows unlimited attempts; X allows for a drill cutoff or fatigue",
            "feedback": "In part (c), $5460 / 14641$ is the probability that $S$ is *odd*. For an even sum, both must be even or both must be odd: $(30^2 + 91^2)/121^2 = 9181/14641$."
        },
        {
            "ans": "(a) Show that completed, (b) 30/121, (c) 9181/14641, (d) 6561/14641, (e) 1/3, (f) Y allows unlimited attempts; X allows for a drill cutoff or fatigue",
            "feedback": "In part (d), $6561 / 14641$ is the unconditional probability $\\text{P}(S = 2)$. You must divide by the conditioning probability $\\text{P}(S \\text{ is even}) = 9181 / 14641$. In (e), the sum of the geometric series gives $p / (2/3) = 1 \\implies p = 2/3$, not $1/3$."
        },
        {
            "ans": "(a) Show that completed, (b) 91/121, (c) 9181/14641, (d) 6561/9181, (e) 2/3, (f) Y assumes success is impossible; X assumes success is guaranteed",
            "feedback": "In part (b), $91 / 121$ is the probability that $X$ is *odd*. Even outcomes are $x \\in \\{2, 4\\}$, giving $(27 + 3) / 121 = 30 / 121$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Parity Rules in Sums",
        "content": "Remember the basic arithmetic parity rules when finding the distribution of sums: $\\text{Even} + \\text{Even} = \\text{Even}$ and $\\text{Odd} + \\text{Odd} = \\text{Even}$, while $\\text{Even} + \\text{Odd} = \\text{Odd}$. For conditional probability with discrete sums like $\\text{P}(S \\le 3 \\mid S \\text{ is even})$, always list the allowed sample space: since the minimum sum of two positive integers is $1 + 1 = 2$, the only even sum $\\le 3$ is $S = 2$."
    }
},
{
    "id": "050112",
    "group_id": "050111",
    "branch": "Statistics",
    "board": "OCR",
    "level": "A",
    "major_area": "Probability",
    "topic": "Discrete Random Variables",
    "subtopic": [
        "Exponential Weighting",
        "Conditional Independence"
    ],
    "img": false,
    "question": "The discrete random variable $T$ takes values $0, 1, 2, 3,$ and $4$ with probability distribution given by:\\begin{aligned} \\text{P}(T = t) &= k \\times 2^t \\cr &\\quad \\text{for } t = 0, 1, 2, 3, 4 \\end{aligned}where $k$ is a constant.<br><br><strong>(a)</strong> Show that $k = \\dfrac{1}{31}$.<br><br><strong>(b)</strong> Find $\\text{P}(T \\ge 2)$.<br><br>Two independent observations of $T$, denoted by $T_1$ and $T_2$, are recorded.<br><br><strong>(c)</strong> Find the probability that the product $T_1 T_2 = 0$.<br><br><strong>(d)</strong> Find the probability that $T_1 + T_2 = 4$, given that the product $T_1 T_2 > 0$.",
    "steps": [
        "<strong>(a) Showing $k = \\dfrac{1}{31}$:</strong><br><br>The probabilities must sum to $1$:\\begin{aligned} &\\sum_{t=0}^4 \\text{P}(T = t) = 1 \\cr &k(2^0 + 2^1 + 2^2 + 2^3 + 2^4) = 1 \\cr &k(1 + 2 + 4 + 8 + 16) = 1 \\cr &31k = 1 \\cr &k = \\dfrac{1}{31} \\end{aligned}",
        "<strong>(b) Finding $\\text{P}(T \\ge 2)$:</strong><br><br>Using the complement rule:\\begin{aligned} &\\text{P}(T \\ge 2)  \\cr & \\quad = 1 - [\\text{P}(T = 0) + \\text{P}(T = 1)]   \\cr & \\quad = 1 - \\left(\\dfrac{1}{31} + \\dfrac{2}{31}\\right)  \\cr & \\quad = 1 - \\dfrac{3}{31}  \\cr & \\quad = \\dfrac{28}{31} \\end{aligned}",
        "<strong>(c) Finding $\\text{P}(T_1 T_2 = 0)$:</strong><br><br>The product is $0$ if at least one observation is $0$:\\begin{aligned} \\text{P}(T = 0) &= \\dfrac{1}{31} \\cr \\text{P}(T > 0) &= \\dfrac{30}{31} \\end{aligned}Using the complement rule:\\begin{aligned} \\text{P}(T_1 T_2 = 0) &= 1 - [\\text{P}(T > 0)]^2 \\cr &= 1 - \\left(\\dfrac{30}{31}\\right)^2 \\cr &= 1 - \\dfrac{900}{961} \\cr &= \\dfrac{61}{961} \\end{aligned}",
        "<strong>(d) Conditional Probability $\\text{P}(T_1 + T_2 = 4 \\mid T_1 T_2 > 0)$:</strong><br><br>The condition $T_1 T_2 > 0$ restricts both observations to $\\{1, 2, 3, 4\\}$:\\begin{aligned} \\text{P}(T_1 T_2 > 0) &= \\left(\\dfrac{30}{31}\\right)^2 \\cr &= \\dfrac{900}{961} \\end{aligned}The non-zero pairs summing to $4$ are $(1, 3), (2, 2), (3, 1)$:\\begin{aligned} &\\text{P}(1, 3) = \\dfrac{2}{31} \\times \\dfrac{8}{31} = \\dfrac{16}{961} \\cr &\\text{P}(2, 2) = \\left(\\dfrac{4}{31}\\right)^2 = \\dfrac{16}{961} \\cr &\\text{P}(3, 1) = \\dfrac{8}{31} \\times \\dfrac{2}{31} = \\dfrac{16}{961} \\end{aligned}Summing the pairs:\\begin{aligned} \\text{Numerator} &= \\dfrac{16 + 16 + 16}{961} \\cr &= \\dfrac{48}{961} \\end{aligned}Calculate the conditional quotient:\\begin{aligned} &\\text{P}(T_1 + T_2 = 4 \\mid T_1 T_2 > 0) \\cr &\\quad = \\dfrac{48 / 961}{900 / 961} \\cr &\\quad = \\dfrac{48}{900} \\cr &\\quad = \\dfrac{4}{75} \\cr &\\quad \\approx 0.0533\\text{ (3 s.f.)} \\end{aligned}",
        "Final Answer: (a) Show that completed, (b) 28/31, (c) 61/961, (d) 4/75"
    ],
    "pi_options": [
        {
            "ans": "(a) Show that completed, (b) 28/31, (c) 1/961, (d) 4/75",
            "feedback": "In part (c), $1/961 = (1/31)^2$ only considers the single outcome $(0, 0)$. The product is also zero when one observation is 0 and the other is non-zero, giving $1 - (30/31)^2 = 61/961$."
        },
        {
            "ans": "(a) Show that completed, (b) 28/31, (c) 61/961, (d) 48/961",
            "feedback": "In part (d), $48/961$ is the unconditional probability $\\text{P}(T_1 + T_2 = 4 \\cap T_1 T_2 > 0)$. You must divide by the conditioning probability $\\text{P}(T_1 T_2 > 0) = 900/961$, simplifying to $48/900 = 4/75$."
        },
        {
            "ans": "(a) Show that completed, (b) 3/31, (c) 61/961, (d) 32/900",
            "feedback": "In part (b), $3/31$ is $\\text{P}(T \\le 1)$. For $\\text{P}(T \\ge 2)$, subtract this from 1 to obtain $28/31$. In (d), forgetting the pair $(2, 2)$ omits $16/961$ from the numerator."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Product Greater Than Zero as a Condition",
        "content": "When given that $T_1 T_2 > 0$, notice how this immediately simplifies the problem: it simply means that zero is excluded from both observations! The conditioning denominator is $[\\text{P}(T > 0)]^2 = (30/31)^2$. When finding pairs that sum to $4$, you only need to check combinations of $\\{1, 2, 3, 4\\}$, which prevents you from accidentally including $(0, 4)$ or $(4, 0)$."
    }
},
{
    "id": "050113",
    "group_id": "050111",
    "branch": "Statistics",
    "board": "OCR",
    "level": "A",
    "major_area": "Probability",
    "topic": "Discrete Random Variables",
    "subtopic": [
        "Geometric Distribution",
        "Memoryless Property"
    ],
    "img": false,
    "question": "A software testing team models the number of test cycles, $N$, until a critical software bug is triggered as a geometric distribution with probability mass function:\\begin{aligned} \\text{P}(N = n) &= (0.85)^{n-1}(0.15) \\cr &\\quad \\text{for } n = 1, 2, 3, \\dots \\end{aligned}<strong>(a)</strong> By considering an infinite geometric series, show that $\\sum_{n=1}^\\infty \\text{P}(N = n) = 1$.<br><br><strong>(b)</strong> Find the probability that the bug is triggered within the first $4$ test cycles ($\text{P}(N \\le 4)$).<br><br><strong>(c)</strong> Show that for any positive integers $k$ and $m$:\\begin{aligned} &\\text{P}(N > k + m \\mid N > k) \\cr &\\quad = \\text{P}(N > m) \\end{aligned}and evaluate this probability when $k = 5$ and $m = 3$.<br><br><strong>(d)</strong> State the name of this probability property, and explain why this model may be inappropriate for physical machinery subject to mechanical wear and tear.",
    "steps": [
        "<strong>(a) Showing the Probabilities Sum to 1:</strong><br><br>The probabilities form an infinite geometric series with $a = 0.15$ and $r = 0.85$:\\begin{aligned} \\sum_{n=1}^\\infty \\text{P}(N = n) &= \\sum_{n=1}^\\infty 0.15(0.85)^{n-1} \\cr &= \\dfrac{a}{1 - r} \\cr &= \\dfrac{0.15}{1 - 0.85} \\cr &= \\dfrac{0.15}{0.15} \\cr &= 1 \\end{aligned}",
        "<strong>(b) Finding $\\text{P}(N \\le 4)$:</strong><br><br>The bug occurs on or before cycle $4$ if the first $4$ cycles are not all bug-free:\\begin{aligned} \\text{P}(N \\le 4) &= 1 - \\text{P}(N > 4) \\cr &= 1 - (0.85)^4 \\cr &= 1 - 0.522006 \\cr &= 0.47799 \\cr &\\approx 0.478\\text{ (3 s.f.)} \\end{aligned}",
        "<strong>(c) Deriving the Memoryless Property:</strong><br><br>For any positive integer $t$, $\\text{P}(N > t) = (0.85)^t$.<br><br>Using the definition of conditional probability:\\begin{aligned} &\\text{P}(N > k + m \\mid N > k) \\cr &\\quad = \\dfrac{\\text{P}(N > k + m)}{\\text{P}(N > k)} \\cr &\\quad = \\dfrac{(0.85)^{k+m}}{(0.85)^k} \\cr &\\quad = (0.85)^m \\cr &\\quad = \\text{P}(N > m) \\end{aligned}Evaluating for $k = 5$ and $m = 3$:\\begin{aligned} \\text{P}(N > 8 \\mid N > 5) &= (0.85)^3 \\cr &= 0.614125 \\cr &\\approx 0.614\\text{ (3 s.f.)} \\end{aligned}",
        "<strong>(d) Name of Property and Physical Limitation:</strong><br><br>This is the <strong>memoryless property</strong>.<br><br>It is inappropriate for physical machinery because physical components suffer from mechanical wear, friction, and thermal fatigue over time.<br><br>In reality, the probability of failure increases as a component ages, rather than remaining constant independently of its past operating history.",
        "Final Answer: (a) Show that completed, (b) 0.478, (c) 0.614, (d) Memoryless property; machinery wears out so failure probability increases with age"
    ],
    "pi_options": [
        {
            "ans": "(a) Show that completed, (b) 0.522, (c) 0.614, (d) Memoryless property; machinery wears out so failure probability increases with age",
            "feedback": "In part (b), $0.522$ is $\\text{P}(N > 4) = 0.85^4$, the probability that the bug is *not* triggered in the first 4 cycles. For $\\text{P}(N \\le 4)$, subtract this from 1 to obtain $0.478$."
        },
        {
            "ans": "(a) Show that completed, (b) 0.478, (c) 0.272, (d) Central Limit Theorem; sample size is too small",
            "feedback": "In part (c), evaluating $(0.85)^8 = 0.272$ calculates the unconditional probability $\\text{P}(N > 8)$. The conditional probability simplifies by index laws to $(0.85)^3 = 0.614$."
        },
        {
            "ans": "(a) Show that completed, (b) 0.478, (c) 0.614, (d) Law of large numbers; software code does not degrade over time",
            "feedback": "The mathematical property shown in part (c) is the memoryless property of the geometric distribution, not the law of large numbers."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: The Memoryless Property",
        "content": "The geometric distribution is the ONLY discrete distribution that possesses the memoryless property: \\begin{aligned}&\\text{P}(N > k + m \\mid N > k)  \\cr & \\qquad \\quad = \\text{P}(N > m)\\end{aligned} This means the system 'forgets' that it has already survived $k$ steps. It is a fantastic model for random electronic glitches or coin tosses, but highly unrealistic for mechanical engines, car batteries, or light bulbs that experience physical wear and tear."
    }
},
{
    "id": "050114",
    "group_id": "050111",
    "branch": "Statistics",
    "board": "OCR",
    "level": "A",
    "major_area": "Probability",
    "topic": "Discrete Random Variables",
    "subtopic": [
        "Bivariate Dice Game",
        "Score Differences"
    ],
    "img": false,
    "question": "Two players, Alice and Bob, each roll an independent four-sided die with faces numbered $1, 2, 3,$ and $4$.<br><br>Bob's die is fair, so each score has a probability of $0.25$.<br><br>Alice's die has the probability distribution shown in the table below:<table style='width:100%; max-width:160px; margin:10px auto; border-collapse:collapse; text-align:center;'><thead><tr style='background-color:#f2f2f2;'><th style='border:1px solid #999; padding:4px;'>$a$</th><th style='border:1px solid #999; padding:4px;'>$\\text{P}(A = a)$</th></tr></thead><tbody><tr><td style='border:1px solid #999; padding:4px;'>$1$</td><td style='border:1px solid #999; padding:4px;'>$0.1$</td></tr><tr><td style='border:1px solid #999; padding:4px;'>$2$</td><td style='border:1px solid #999; padding:4px;'>$0.2$</td></tr><tr><td style='border:1px solid #999; padding:4px;'>$3$</td><td style='border:1px solid #999; padding:4px;'>$0.3$</td></tr><tr><td style='border:1px solid #999; padding:4px;'>$4$</td><td style='border:1px solid #999; padding:4px;'>$0.4$</td></tr></tbody></table>Let $A$ be Alice's score and $B$ be Bob's score.<br><br><strong>(a)</strong> Find the probability that Alice and Bob roll the same score ($\\text{P}(A = B)$).<br><br><strong>(b)</strong> Find the probability that Alice's score is strictly greater than Bob's score ($\\text{P}(A > B)$).<br><br><strong>(c)</strong> Given that Alice's score is strictly greater than Bob's score, find the probability that the difference between their scores is at least $2$ ($\\text{P}(A - B \\ge 2 \\mid A > B)$).",
    "steps": [
        "<strong>(a) Probability of Equal Scores $\\text{P}(A = B)$:</strong><br><br>Factoring out Bob's constant probability of $0.25$:\\begin{aligned} \\text{P}(A = B) &= 0.25(0.1 + 0.2  \\cr & \\quad + 0.3 + 0.4) \\cr &= 0.25(1.0) \\cr &= 0.25 \\end{aligned}",
        "<strong>(b) Probability that $A > B$:</strong><br><br>Calculate the probabilities for each value of $A$:\\begin{aligned} &\\text{P}(A = 2, B = 1) \\cr &\\quad = 0.2(0.25) = 0.05 \\cr &\\text{P}(A = 3, B \\le 2) \\cr &\\quad = 0.3(0.50) = 0.15 \\cr &\\text{P}(A = 4, B \\le 3) \\cr &\\quad = 0.4(0.75) = 0.30 \\end{aligned}Summing the probabilities:\\begin{aligned} \\text{P}(A > B) &= 0.05 + 0.15 + 0.30 \\cr &= 0.50 \\end{aligned}",
        "<strong>(c) Conditional Probability $\\text{P}(A - B \\ge 2 \\mid A > B)$:</strong><br><br>The pairs where $A - B \\ge 2$ and $A > B$ are $(3, 1), (4, 1), (4, 2)$:\\begin{aligned} &\\text{P}(A = 3, B = 1):\\cr 0.3(0.25) & \\qquad= 0.075 \\cr &\\text{P}(A = 4, B = 1):\\cr 0.4(0.25)& \\qquad = 0.100 \\cr &\\text{P}(A = 4, B = 2):\\cr 0.4(0.25) & \\qquad= 0.100 \\end{aligned}Summing the pairs:\\begin{aligned} &\\text{Numerator}\\cr &= 0.075 + 0.100 + 0.100 = 0.275 \\end{aligned}Using $\\text{P}(A > B) = 0.50$:\\begin{aligned} \\text{P}(A - B \\ge 2 \\mid A > B) &= \\dfrac{0.275}{0.50} \\cr &= 0.55 \\end{aligned}",
        "Final Answer: (a) 0.25, (b) 0.50, (c) 0.55"
    ],
    "pi_options": [
        {
            "ans": "(a) 0.25, (b) 0.50, (c) 0.275",
            "feedback": "In part (c), $0.275$ is the unconditional probability $\\text{P}(A - B \\ge 2)$. You must divide by the conditioning probability $\\text{P}(A > B) = 0.50$, yielding $0.275 / 0.50 = 0.55$."
        },
        {
            "ans": "(a) 0.25, (b) 0.375, (c) 0.55",
            "feedback": "In part (b), $0.375$ would be the result if both dice were fair ($6/16$). Because Alice's die is biased towards higher numbers ($3$ and $4$), her probability of beating Bob is $0.50$."
        },
        {
            "ans": "(a) 0.10, (b) 0.50, (c) 0.35",
            "feedback": "In part (a), factoring out $0.25$ reveals that \\begin{aligned}\\text{P}(A = B) & = 0.25 \\sum \\text{P}(A = k) \\cr & = 0.25(1)\\cr & = 0.25\\end{aligned} not $0.10$. In (c), forgetting the pair $(3, 1)$ underestimates the conditional probability."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Factoring Uniform Variables",
        "content": "When one random variable is discrete uniform (like Bob's fair die with $\\text{P}(B = b) = 0.25$), notice the elegant algebraic simplification in part (a): \\begin{aligned}\\sum \\text{P}(A = k)\\text{P}(B = k)& \\qquad = 0.25 \\sum \\text{P}(A = k)& \\qquad= 0.25(1) & \\qquad= 0.25\\end{aligned} No matter how wildly Alice's die is biased, the probability of rolling the same score against a fair $4$-sided die is ALWAYS $\\frac{1}{4}$!"
    }
},
{
    "id": "050115",
    "group_id": "050111",
    "branch": "Statistics",
    "board": "OCR",
    "level": "A",
    "major_area": "Probability",
    "topic": "Discrete Random Variables",
    "subtopic": [
        "Expectation and Variance",
        "Fair Game"
    ],
    "img": false,
    "question": "A fairground attraction features a prize wheel that awards a prize multiplier $M \\in \\{1, 2, 4, 8\\}$ with probabilities defined by the recurrence relation:\\begin{aligned} \\text{P}(M = 2m) &= \\dfrac{1}{2}\\text{P}(M = m) \\cr &\\quad \\text{for } m \\in \\{1, 2, 4\\} \\end{aligned}Let $\\text{P}(M = 1) = k$.<br><br><strong>(a)</strong> Show that $k = \\dfrac{8}{15}$, and write down the complete probability distribution of $M$.<br><br><strong>(b)</strong> Calculate the expected value, $\\text{E}(M)$.<br><br><strong>(c)</strong> Calculate the variance, $\\text{Var}(M)$.<br><br><strong>(d)</strong> It costs $£2.50$ to play the game once, and the prize awarded is $£1.00 \\times M$.<br><strong>(i)</strong> Determine the expected financial loss per game for a player.<br><strong>(ii)</strong> State the stake price that the fairground operator should charge to make the game mathematically fair.",
    "steps": [
        "<strong>(a) Showing $k = \\dfrac{8}{15}$ and Distribution:</strong><br><br>Express each outcome in terms of $k$:\\begin{aligned} &\\text{P}(M = 1) = k \\cr &\\text{P}(M = 2) = \\dfrac{k}{2} \\cr &\\text{P}(M = 4) = \\dfrac{k}{4} \\cr &\\text{P}(M = 8) = \\dfrac{k}{8} \\end{aligned}Summing the terms:\\begin{aligned} k\\left(1 + \\dfrac{1}{2} + \\dfrac{1}{4} + \\dfrac{1}{8}\\right) &= 1 \\cr k\\left(\\dfrac{15}{8}\\right) &= 1 \\cr k &= \\dfrac{8}{15} \\end{aligned}The complete probability distribution is:<table style='width:100%; max-width:160px; margin:10px auto; border-collapse:collapse; text-align:center;'><thead><tr style='background-color:#f2f2f2;'><th style='border:1px solid #999; padding:4px;'>$m$</th><th style='border:1px solid #999; padding:4px;'>$\\text{P}(M = m)$</th></tr></thead><tbody><tr><td style='border:1px solid #999; padding:4px;'>$1$</td><td style='border:1px solid #999; padding:4px;'>$\\dfrac{8}{15}$</td></tr><tr><td style='border:1px solid #999; padding:4px;'>$2$</td><td style='border:1px solid #999; padding:4px;'>$\\dfrac{4}{15}$</td></tr><tr><td style='border:1px solid #999; padding:4px;'>$4$</td><td style='border:1px solid #999; padding:4px;'>$\\dfrac{2}{15}$</td></tr><tr><td style='border:1px solid #999; padding:4px;'>$8$</td><td style='border:1px solid #999; padding:4px;'>$\\dfrac{1}{15}$</td></tr></tbody></table>",
        "<strong>(b) Expected Value $\\text{E}(M)$:</strong><br><br>\\begin{aligned} \\text{E}(M) &= \\sum m\\,\\text{P}(M = m) \\cr &= 1\\left(\\dfrac{8}{15}\\right) + 2\\left(\\dfrac{4}{15}\\right) \\cr &\\quad + 4\\left(\\dfrac{2}{15}\\right) + 8\\left(\\dfrac{1}{15}\\right) \\cr &= \\dfrac{8 + 8 + 8 + 8}{15} \\cr &= \\dfrac{32}{15} \\cr &\\approx 2.133 \\end{aligned}",
        "<strong>(c) Variance $\\text{Var}(M)$:</strong><br><br>First calculate $\\text{E}(M^2)$:\\begin{aligned} \\text{E}(M^2) &= \\sum m^2\\,\\text{P}(M = m) \\cr &= 1(8/15) + 4(4/15) \\cr &\\quad + 16(2/15) + 64(1/15) \\cr &= \\dfrac{8 + 16 + 32 + 64}{15} \\cr &= \\dfrac{120}{15} \\cr &= 8 \\end{aligned}Now compute $\\text{Var}(M)$:\\begin{aligned} \\text{Var}(M) &= 8 - \\left(\\dfrac{32}{15}\\right)^2 \\cr &= 8 - \\dfrac{1024}{225} \\cr &= \\dfrac{1800 - 1024}{225} \\cr &= \\dfrac{776}{225} \\cr &\\approx 3.449\\text{ (or } 3.45\\text{)} \\end{aligned}",
        "<strong>(d)(i) Expected Financial Loss:</strong><br><br>The expected payout is $£1.00 \\times \\frac{32}{15} \\approx £2.1333$.\\begin{aligned} \\text{Expected Loss} &= £2.50 - £2.1333 \\cr &= £0.3667 \\cr &\\approx £0.37 \\end{aligned}",
        "<strong>(d)(ii) Stake for a Mathematically Fair Game:</strong><br><br>A fair game requires expected profit to be zero, so the stake equals the expected payout:\\begin{aligned} \\text{Fair Stake} &= £\\dfrac{32}{15} \\cr &\\approx £2.13 \\end{aligned}",
        "Final Answer: (a) k = 8/15; distribution is 8/15, 4/15, 2/15, 1/15, (b) 32/15, (c) 776/225, (d)(i) £0.37, (ii) £2.13"
    ],
    "pi_options": [
        {
            "ans": "(a) k = 8/15; distribution is 8/15, 4/15, 2/15, 1/15, (b) 32/15, (c) 8, (d)(i) £0.37, (ii) £2.13",
            "feedback": "In part (c), $8$ is $\\text{E}(M^2)$. You must subtract $[\\text{E}(M)]^2 = (32/15)^2 = 1024/225$ to obtain $\\text{Var}(M) = 776/225 \\approx 3.45$."
        },
        {
            "ans": "(a) k = 8/15; distribution is 8/15, 4/15, 2/15, 1/15, (b) 32/15, (c) 776/225, (d)(i) £0.50, (ii) £2.00",
            "feedback": "In part (d), rounding the expected payout down to £2.00 is incorrect. The expected payout is $£32/15 \\approx £2.133$, leaving an expected loss of $£2.50 - £2.133 = £0.37$ and a fair stake of $£2.13$."
        },
        {
            "ans": "(a) k = 1/15; distribution is 1/15, 2/15, 4/15, 8/15, (b) 49/15, (c) 776/225, (d)(i) £0.37, (ii) £2.13",
            "feedback": "In part (a), the recurrence relation states that $\\text{P}(M = 2m) = \\frac{1}{2}\\text{P}(M = m)$, meaning probabilities *halve* as the multiplier doubles. Setting $\\text{P}(M = 1) = 1/15$ reverses the powers."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: What 'Fair Game' Actually Means",
        "content": "In probability and financial mathematics, a 'fair game' does NOT mean equal probability of winning and losing. It means that the expected financial return is zero: $\\text{E}(\\text{Profit}) = 0$, which requires that $\\text{Stake} = \\text{Expected Payout}$. If a game pays out an expected $£2.13$, charging a stake of $£2.13$ makes it mathematically fair."
    }
},
{
  "id": "050116",
  "group_id": "050116",
  "branch": "Statistics",
  "board": "OCR",
  "level": "A",
  "major_area": "Statistics",
  "topic": "Binomial Distribution & Normal Approximation",
  "subtopic": [
    "Normal Approximation to Binomial",
    "Successive Probability Ratios",
    "Mode of a Binomial Distribution"
  ],
  "img": false,
  "question": "<em>In this question you must show detailed reasoning.</em><br><br>The probability that an electronic component manufactured on a production line is defective is $0.2$, independently of other components.<br><br><strong>(a)</strong> A large batch of $500$ components is inspected. The random variable $Y$ denotes the number of defective components in the batch.<br><br>Using a suitable Normal approximation, find the integer value of $a$ such that $\\text{P}(Y \\le a) \\approx 0.95$.<br><br>In the expansion of $(0.2 + 0.8)^{60}$, the terms involving $0.2^r$ and $0.2^{r+1}$ are denoted by $T_r$ and $T_{r+1}$ respectively.<br><br><strong>(b)</strong> Show that:<br>$$\\dfrac{T_r}{T_{r+1}} = \\dfrac{4(r + 1)}{60 - r}$$<br><strong>(c)</strong> The number of defective components in a random sample of $60$ components is modelled by the random variable $X$.<br><br><strong>(i)</strong> Find the set of integer values of $r$ for which $\\text{P}(X = r) \\le \\text{P}(X = r + 1)$.<br><br><strong>(ii)</strong> Hence determine the most likely number of defective components in the sample of $60$.",
  "steps": [
    "<strong>(a) Normal Approximation to the Binomial:</strong><br><br>For $Y \\sim \\text{B}(500, 0.2)$, calculate the mean and variance:\\begin{aligned} \\mu &= 500(0.2) \\cr &= 100 \\cr \\sigma^2 &= 100(0.8) \\cr &= 80 \\end{aligned}<br>Approximate $Y$ by $Y_{\\text{norm}} \\sim \\text{N}(100, 80)$.<br><br>Applying a continuity correction gives $\\text{P}(Y_{\\text{norm}} \\le a + 0.5) = 0.95$.<br><br>Standardising and solving for $a$:\\begin{aligned} &\\dfrac{a + 0.5 - 100}{\\sqrt{80}} = 1.6449 \\cr &a - 99.5 = 14.712 \\cr &a = 114.212 \\end{aligned}<br>Hence, to the nearest integer, $a = 114$.",
    "<strong>(b) Successive Binomial Term Ratio:</strong><br><br>The general terms are defined as:<br>$$T_r = \\binom{60}{r}(0.2)^r (0.8)^{60-r}$$<br>$$T_{r+1} = \\binom{60}{r+1}(0.2)^{r+1} (0.8)^{59-r}$$<br>Simplifying the combination ratio:\\begin{aligned} \\dfrac{\\binom{60}{r}}{\\binom{60}{r+1}} &= \\dfrac{(r+1)!}{r!} \\times \\dfrac{(59-r)!}{(60-r)!} \\cr &= (r + 1) \\times \\dfrac{1}{60 - r} \\cr &= \\dfrac{r + 1}{60 - r} \\end{aligned}<br>Simplifying the powers of probabilities:\\begin{aligned} \\dfrac{0.8^{60-r} (0.2)^r}{0.8^{59-r} (0.2)^{r+1}} &= \\dfrac{0.8}{0.2} \\cr &= 4 \\end{aligned}<br>Multiplying the two results gives:\\begin{aligned} \\dfrac{T_r}{T_{r+1}} &= \\left(\\dfrac{r+1}{60-r}\\right) \\times 4 \\cr &= \\dfrac{4(r+1)}{60-r} \\end{aligned}",
    "<strong>(c)(i) Solving the Probability Inequality:</strong><br><br>We require $\\frac{T_r}{T_{r+1}} \\le 1$:\\begin{aligned} &\\dfrac{4(r+1)}{60-r} \\le 1 \\cr &4r + 4 \\le 60 - r \\cr &5r \\le 56 \\cr &r \\le 11.2 \\end{aligned}<br>Since $r$ is an integer in $0 \\le r \\le 59$:<br>$$r \\in \\{0, 1, 2, \\dots, 11\\}$$",
    "<strong>(c)(ii) Determining the Mode:</strong><br><br>Probabilities increase for all integers up to $r = 11$:\\begin{aligned} &\\text{P}(X = 11) \\le \\text{P}(X = 12) \\end{aligned}<br>For $r \\ge 12$, the ratio exceeds $1$, meaning:\\begin{aligned} &\\text{P}(X = 12) > \\text{P}(X = 13) \\end{aligned}<br>Probabilities decrease strictly thereafter.<br><br>Therefore, the most likely number of defective components is $12$.",
    "Final Answer: (a) $a = 114$, (c)(i) $r \\in \\{0, 1, \\dots, 11\\}$, (ii) $12$"
  ],
  "pi_options": [
    {
      "ans": "(a) $a = 115$, (c)(i) $r \\in \\{0, 1, \\dots, 11\\}$, (ii) $12$",
      "feedback": "Omission of the continuity correction $+0.5$ leads to $\\frac{a - 100}{\\sqrt{80}} = 1.6449$, giving $a \\approx 114.71 \\approx 115$."
    },
    {
      "ans": "(a) $a = 114$, (c)(i) $r \\in \\{0, 1, \\dots, 11\\}$, (ii) $11$",
      "feedback": "Confusing the upper bound index where growth stops ($r = 11$) with the resulting peak outcome gives $11$ instead of $r + 1 = 12$."
    },
    {
      "ans": "(a) $a = 114$, (c)(i) $r \\in \\{0, 1, \\dots, 12\\}$, (ii) $12$",
      "feedback": "Incorrectly rounding $11.2$ up to include $12$ in the increasing phase violates the inequality, since at $r = 12$ the ratio exceeds $1$."
    }
  ],
  "bradley_insight": {
    "type": "caution",
    "title": "The Head Teacher's Eye: The Off-By-One Mode Trap",
    "content": "When solving $\\text{P}(X = r) \\le \\text{P}(X = r + 1)$, remember what the final inequality means. If the inequality holds for $r \\le 11$, setting $r = 11$ gives $\\text{P}(X = 11) \\le \\text{P}(X = 12)$. The chain of probabilities climbs all the way up to $X = 12$. A common slip is writing down $11$ as the mode because $11$ was the largest integer in your solution set for $r$. Always write out the final step $\\text{P}(11) \\le \\text{P}(12)$ to avoid losing the final accuracy mark."
  }
},
{
  "id": "050117",
  "group_id": "050116",
  "branch": "Statistics",
  "board": "OCR",
  "level": "A",
  "major_area": "Statistics",
  "topic": "Binomial Distribution & Normal Approximation",
  "subtopic": [
    "Normal Approximation to Binomial",
    "Successive Probability Ratios",
    "Bimodal Binomial Distributions"
  ],
  "img": false,
  "question": "<em>In this question you must show detailed reasoning.</em><br><br>The probability that an unsolicited telephone call made by a contact centre results in an appointment is $0.25$, independently of all other calls.<br><br><strong>(a)</strong> An agent makes $480$ calls over the course of a month. The random variable $Y$ denotes the total number of appointments made.<br><br>Using a suitable Normal approximation with a continuity correction, calculate the probability that the agent makes at least $130$ appointments. Give your answer to 3 significant figures.<br><br><strong>(b)</strong> In a focused morning session, an agent makes a smaller sample of $39$ calls. The random variable $X$ denotes the number of appointments secured, so that $X \\sim \\text{B}(39, 0.25)$.<br><br>By considering the ratio of consecutive probabilities, show that:<br>$$\\dfrac{\\text{P}(X = r + 1)}{\\text{P}(X = r)} = \\dfrac{39 - r}{3(r + 1)}$$<br><strong>(c)</strong><br><strong>(i)</strong> Determine the integer value of $r$ for which $\\text{P}(X = r + 1) = \\text{P}(X = r)$.<br><br><strong>(ii)</strong> Hence identify all values of $X$ that are most likely to occur, and explain why this distribution is bimodal.",
  "steps": [
    "<strong>(a) Normal Approximation with Continuity Correction:</strong><br><br>For $Y \\sim \\text{B}(480, 0.25)$, find parameters:\\begin{aligned} \\mu &= 480(0.25) \\cr &= 120 \\cr \\sigma^2 &= 120(0.75) \\cr &= 90 \\end{aligned}<br>Approximate $Y$ by $Y_{\\text{norm}} \\sim \\text{N}(120, 90)$.<br><br>Applying a continuity correction for $\\text{P}(Y \\ge 130)$ gives $\\text{P}(Y_{\\text{norm}} \\ge 129.5)$.<br><br>Standardising:\\begin{aligned} z &= \\dfrac{129.5 - 120}{\\sqrt{90}} \\cr &= \\dfrac{9.5}{9.4868} \\cr &\\approx 1.0014 \\end{aligned}<br>Evaluating the tail probability:\\begin{aligned} &\\text{P}(Z \\ge 1.0014) \\cr &\\quad = 1 - \\Phi(1.0014) \\cr &\\quad = 1 - 0.8417 \\cr &\\quad = 0.158 \\end{aligned}",
    "<strong>(b) Consecutive Probability Ratio Derivation:</strong><br><br>For $X \\sim \\text{B}(39, 0.25)$, take the ratio of consecutive terms:\\begin{aligned} &\\dfrac{\\text{P}(X = r + 1)}{\\text{P}(X = r)} \\cr &\\quad = \\dfrac{\\binom{39}{r+1}}{\\binom{39}{r}} \\times \\dfrac{0.25}{0.75} \\cr &\\quad = \\dfrac{39 - r}{r + 1} \\times \\dfrac{1}{3} \\cr &\\quad = \\dfrac{39 - r}{3(r + 1)} \\end{aligned}",
    "<strong>(c)(i) Finding Equality of Consecutive Terms:</strong><br><br>Set the consecutive ratio equal to $1$:\\begin{aligned} &\\dfrac{39 - r}{3(r + 1)} = 1 \\cr &39 - r = 3r + 3 \\cr &4r = 36 \\cr &r = 9 \\end{aligned}",
    "<strong>(c)(ii) Identification of the Two Modes:</strong><br><br>At $r = 9$, the ratio equals $1$, which gives:<br>$$\\text{P}(X = 10) = \\text{P}(X = 9)$$<br>For $r < 9$, the ratio exceeds $1$, so $\\text{P}(X = r + 1) > \\text{P}(X = r)$.<br><br>For $r > 9$, the ratio is less than $1$, so $\\text{P}(X = r + 1) < \\text{P}(X = r)$.<br><br>Therefore, the maximum probability occurs equally at $X = 9$ and $X = 10$, making the distribution bimodal.",
    "Final Answer: (a) $0.158$, (c)(i) $r = 9$, (ii) $9$ and $10$"
  ],
  "pi_options": [
    {
      "ans": "(a) $0.146$, (c)(i) $r = 9$, (ii) $9$ and $10$",
      "feedback": "Using an incorrect continuity correction of $130.5$ instead of $129.5$ gives $z = 1.054$ and probability $0.146$."
    },
    {
      "ans": "(a) $0.158$, (c)(i) $r = 9$, (ii) $10$ only",
      "feedback": "Overlooking that the ratio equals $1$ at $r = 9$ neglects the exact equality $\\text{P}(X = 9) = \\text{P}(X = 10)$, missing the bimodal nature."
    },
    {
      "ans": "(a) $0.158$, (c)(i) $r = 10$, (ii) $9$ and $10$",
      "feedback": "An algebraic error when expanding $3(r + 1)$ as $3r - 3$ incorrectly yields $4r = 42$ and an incorrect index."
    }
  ],
  "bradley_insight": {
    "type": "deeper",
    "title": "The Head Teacher's Eye: Integer Products and Bimodality",
    "content": "A Binomial distribution $\\text{B}(n, p)$ is bimodal if and only if $(n + 1)p$ is an integer. When $(n + 1)p = k \\in \\mathbb{Z}^+$, the ratio $\\frac{\\text{P}(X = k)}{\\text{P}(X = k - 1)} = 1$, which produces two equal modal peaks at $X = k - 1$ and $X = k$. Here, $(39 + 1)(0.25) = 10$, creating identical peaks at $X = 9$ and $X = 10$."
  }
},
{
  "id": "050118",
  "group_id": "050116",
  "branch": "Statistics",
  "board": "OCR",
  "level": "A",
  "major_area": "Statistics",
  "topic": "Binomial Distribution & Normal Approximation",
  "subtopic": [
    "Normal Approximation to Binomial",
    "Probability Ratios",
    "Mode and Ratio Evaluation"
  ],
  "img": false,
  "question": "<em>In this question you must show detailed reasoning.</em><br><br>A wildlife sanctuary monitors a colony of a rare bird species. The probability that an egg in a nest hatches successfully is $\\dfrac{2}{3}$, independently of all other eggs.<br><br><strong>(a)</strong> During a breeding season, the sanctuary monitors $270$ separate nests, each containing a single egg. The random variable $Y$ denotes the total number of successfully hatched eggs.<br><br>Using a suitable Normal approximation with a continuity correction, find the integer value of $k$ such that $\\text{P}(Y < k) \\approx 0.025$.<br><br><strong>(b)</strong> For a smaller isolated group of $40$ nests, each containing a single egg, the random variable $X$ models the number of eggs that hatch successfully, so that $X \\sim \\text{B}\\left(40, \\dfrac{2}{3}\\right)$.<br><br>Show that:<br>$$\\dfrac{\\text{P}(X = r + 1)}{\\text{P}(X = r)} = \\dfrac{2(40 - r)}{r + 1}$$<br><strong>(c)</strong><br><strong>(i)</strong> Find all integer values of $r$ for which $\\text{P}(X = r + 1) \\ge \\text{P}(X = r)$.<br><br><strong>(ii)</strong> Hence find the most likely number of eggs to hatch in this group of $40$ nests, and find the exact value of the ratio $\\dfrac{\\text{P}(X = \\text{mode})}{\\text{P}(X = \\text{mode} - 1)}$ as an irreducible fraction.",
  "steps": [
    "<strong>(a) Normal Approximation Threshold:</strong><br><br>For $Y \\sim \\text{B}\\left(270, \\frac{2}{3}\\right)$, calculate parameters:\\begin{aligned} \\mu &= 270\\left(\\dfrac{2}{3}\\right) \\cr &= 180 \\cr \\sigma^2 &= 180\\left(\\dfrac{1}{3}\\right) \\cr &= 60 \\end{aligned}<br>Note that $Y < k \\iff Y \\le k - 1$.<br><br>Applying a continuity correction gives $\\text{P}(Y_{\\text{norm}} \\le k - 0.5) = 0.025$.<br><br>Standardising and solving for $k$:\\begin{aligned} &\\dfrac{k - 0.5 - 180}{\\sqrt{60}} = -1.960 \\cr &k - 180.5 = -15.182 \\cr &k = 165.318 \\end{aligned}<br>To the nearest integer, $k = 165$.",
    "<strong>(b) Consecutive Probability Ratio:</strong><br><br>For $X \\sim \\text{B}\\left(40, \\frac{2}{3}\\right)$, take consecutive terms:\\begin{aligned} &\\dfrac{\\text{P}(X = r + 1)}{\\text{P}(X = r)} \\cr &\\quad = \\dfrac{\\binom{40}{r+1}}{\\binom{40}{r}} \\times \\dfrac{2/3}{1/3} \\cr &\\quad = \\dfrac{40 - r}{r + 1} \\times 2 \\cr &\\quad = \\dfrac{2(40 - r)}{r + 1} \\end{aligned}",
    "<strong>(c)(i) Solving the Probability Inequality:</strong><br><br>Solve $\\text{P}(X = r + 1) \\ge \\text{P}(X = r)$:\\begin{aligned} &\\dfrac{2(40 - r)}{r + 1} \\ge 1 \\cr &80 - 2r \\ge r + 1 \\cr &3r \\le 79 \\cr &r \\le 26.33 \\end{aligned}<br>For integer $r$, $r \\in \\{0, 1, 2, \\dots, 26\\}$.",
    "<strong>(c)(ii) Finding the Mode and Probability Ratio:</strong><br><br>Probabilities increase strictly up to $r = 26$, so $\\text{P}(X = 26) < \\text{P}(X = 27)$.<br><br>For $r \\ge 27$, probabilities decrease, so the mode is $27$.<br><br>Evaluating the ratio at the modal peak:\\begin{aligned} \\dfrac{\\text{P}(X = 27)}{\\text{P}(X = 26)} &= \\dfrac{2(40 - 26)}{26 + 1} \\cr &= \\dfrac{2(14)}{27} \\cr &= \\dfrac{28}{27} \\end{aligned}",
    "Final Answer: (a) $k = 165$, (c)(i) $r \\in \\{0, 1, \\dots, 26\\}$, (ii) Mode $= 27$, ratio $= \\dfrac{28}{27}$"
  ],
  "pi_options": [
    {
      "ans": "(a) $k = 164$, (c)(i) $r \\in \\{0, 1, \\dots, 26\\}$, (ii) Mode $= 27$, ratio $= \\dfrac{28}{27}$",
      "feedback": "Using an incorrect continuity correction of $k + 0.5$ instead of $k - 0.5$ for $Y < k$ leads to $k = 164$."
    },
    {
      "ans": "(a) $k = 165$, (c)(i) $r \\in \\{0, 1, \\dots, 26\\}$, (ii) Mode $= 26$, ratio $= \\dfrac{27}{28}$",
      "feedback": "Confusing the upper index of increase ($r = 26$) with the mode selects $26$ and inverts the required probability ratio."
    },
    {
      "ans": "(a) $k = 165$, (c)(i) $r \\in \\{0, 1, \\dots, 27\\}$, (ii) Mode $= 27$, ratio $= \\dfrac{28}{27}$",
      "feedback": "Rounding $79/3 \\approx 26.33$ up to $27$ erroneously includes $r = 27$ in the set where probabilities are still increasing."
    }
  ],
  "bradley_insight": {
    "type": "caution",
    "title": "The Head Teacher's Eye: Continuity Corrections on Strict Inequalities",
    "content": "For a discrete variable $Y$, the strict inequality $Y < k$ translates to $Y \\le k - 1$. The upper boundary of the discrete bar at $k - 1$ is $(k - 1) + 0.5 = k - 0.5$. Writing $k + 0.5$ is a standard mistake that treats the strict inequality as a non-strict inequality and shifts your critical threshold by an entire unit."
  }
},
{
  "id": "050119",
  "group_id": "050116",
  "branch": "Statistics",
  "board": "OCR",
  "level": "A",
  "major_area": "Statistics",
  "topic": "Binomial Distribution & Normal Approximation",
  "subtopic": [
    "General Modal Condition Proof",
    "Binomial Successive Ratios",
    "Normal Interval Estimation"
  ],
  "img": false,
  "question": "<em>In this question you must show detailed reasoning.</em><br><br>A clinical trial investigates the efficacy of a treatment for a specific condition. The probability that an administered patient experiences complete recovery without side effects is $p = 0.4$, independently of other patients.<br><br><strong>(a)</strong> In an extensive multicentre trial involving $300$ patients, the number of patients who recover completely without side effects is denoted by $Y \\sim \\text{B}(300, 0.4)$.<br><br>Using a suitable Normal approximation, calculate an estimate for the probability that between $110$ and $135$ patients (inclusive) achieve complete recovery without side effects. Give your answer to 3 significant figures.<br><br><strong>(b)</strong> For a general binomial random variable $X \\sim \\text{B}(n, p)$, where $0 < p < 1$ and $q = 1 - p$:<br>Show from the definition of the binomial probability mass function that:\\begin{aligned) &\\dfrac{\\text{P}(X = r + 1)}{\\text{P}(X = r)} \\cr & \\qquad \\quad = \\left(\\dfrac{n - r}{r + 1}\\right)\\left(\\dfrac{p}{q}\\right)\\end{aligned}<strong>(c)</strong><br><strong>(i)</strong> Deduce that $\\text{P}(X = r + 1) > \\text{P}(X = r)$ if and only if $r < (n + 1)p - 1$.<br><br><strong>(ii)</strong> A secondary trial is conducted with $n = 74$ patients and $p = 0.4$. Use the condition in part <strong>(c)(i)</strong> to determine the most likely number(s) of complete recoveries.",
  "steps": [
    "<strong>(a) Normal Approximation for an Interval:</strong><br><br>For $Y \\sim \\text{B}(300, 0.4)$, calculate parameters:\\begin{aligned} \\mu &= 300(0.4) \\cr &= 120 \\cr \\sigma^2 &= 120(0.6) \\cr &= 72 \\end{aligned}<br>Applying continuity corrections for $110 \\le Y \\le 135$ gives $\\text{P}(109.5 \\le Y_{\\text{norm}} \\le 135.5)$.<br><br>Standardising both endpoints:\\begin{aligned} z_1 &= \\dfrac{109.5 - 120}{\\sqrt{72}} \\cr &\\approx -1.237 \\cr z_2 &= \\dfrac{135.5 - 120}{\\sqrt{72}} \\cr &\\approx 1.827 \\end{aligned}<br>Evaluating the interval probability:\\begin{aligned} &\\text{P}(-1.237 \\le Z \\le 1.827) \\cr &\\quad = \\Phi(1.827) - \\Phi(-1.237) \\cr &\\quad = 0.9661 - 0.1080 \\cr &\\quad = 0.858 \\end{aligned}",
    "<strong>(b) General Successive Ratio Proof:</strong><br><br>Evaluate the combination ratio and probability ratio separately:\\begin{aligned} \\dfrac{\\binom{n}{r+1}}{\\binom{n}{r}} &= \\dfrac{n - r}{r + 1} \\cr \\dfrac{p^{r+1} q^{n-r-1}}{p^r q^{n-r}} &= \\dfrac{p}{q} \\end{aligned}<br>Multiplying these components directly gives:\\begin{aligned} \\dfrac{\\text{P}(X = r + 1)}{\\text{P}(X = r)} &= \\left(\\dfrac{n - r}{r + 1}\\right)\\left(\\dfrac{p}{q}\\right) \\end{aligned}",
    "<strong>(c)(i) Inequality Deduction:</strong><br><br>Set the consecutive ratio strictly greater than $1$:\\begin{aligned} &\\left(\\dfrac{n - r}{r + 1}\\right)\\left(\\dfrac{p}{q}\\right) > 1 \\cr &(n - r)p > (r + 1)q \\cr &np - rp > rq + q \\cr &np - q > r(p + q) \\cr &np - (1 - p) > r(1) \\cr &r < (n + 1)p - 1 \\end{aligned}",
    "<strong>(c)(ii) Determining the Mode(s):</strong><br><br>For $n = 74$ and $p = 0.4$:\\begin{aligned} (n + 1)p - 1 &= 75(0.4) - 1 \\cr &= 30 - 1 \\cr &= 29 \\end{aligned}<br>For $r < 29$ (integers $r \\le 28$), probabilities increase strictly up to $X = 29$.<br><br>At $r = 29$, the ratio equals $1$, which gives:<br>$$\\text{P}(X = 30) = \\text{P}(X = 29)$$<br>For $r \\ge 30$, the ratio is strictly less than $1$, so probabilities decrease thereafter.<br><br>Therefore, the distribution is bimodal with joint modes at $29$ and $30$.",
    "Final Answer: (a) $0.858$, (c)(ii) $29$ and $30$"
  ],
  "pi_options": [
    {
      "ans": "(a) $0.858$, (c)(ii) $30$ only",
      "feedback": "Assuming that $r < 29$ strictly isolates $X = 30$ overlooks that when $r = 29$ the ratio equals $1$, making $29$ and $30$ equal modes."
    },
    {
      "ans": "(a) $0.835$, (c)(ii) $29$ and $30$",
      "feedback": "Neglecting the continuity corrections entirely and evaluating between $110$ and $135$ gives $z_1 = -1.179$ and $z_2 = 1.768$, yielding $0.835$."
    },
    {
      "ans": "(a) $0.858$, (c)(ii) $29$ only",
      "feedback": "Selecting $29$ alone fails to observe that $r = 29$ yields $\\text{P}(X = 30) = \\text{P}(X = 29)$, so $30$ is also a modal peak."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Deriving the Binomial Mode Rule",
    "content": "The relation $r < (n + 1)p - 1$ is a powerful result. If $(n + 1)p$ is not an integer, the floor $\\lfloor (n + 1)p \\rfloor$ gives the unique mode. If $(n + 1)p$ is an integer $m$, the probabilities at $m - 1$ and $m$ are identical, creating two modes. Keeping $p + q = 1$ in mind when rearranging $(n - r)p > (r + 1)q$ avoids messy fraction algebra."
  }
},
{
  "id": "050120",
  "group_id": "050116",
  "branch": "Statistics",
  "board": "OCR",
  "level": "A",
  "major_area": "Statistics",
  "topic": "Binomial Distribution & Normal Approximation",
  "subtopic": [
    "Normal Approximation to Binomial",
    "Ratio Monotonicity",
    "Exact Mode Probability"
  ],
  "img": false,
  "question": "<em>In this question you must show detailed reasoning.</em><br><br>A manufacturing process produces high-precision ceramic tiles. The probability that any tile has a surface flaw is $0.08$, independently of all other tiles.<br><br><strong>(a)</strong> In a production run of $800$ tiles, the random variable $Y$ denotes the number of flawed tiles.<br><br>Using a suitable Normal approximation with a continuity correction, calculate the probability that the number of flawed tiles lies strictly within $1$ standard deviation of the mean. Give your answer to 3 significant figures.<br><br><strong>(b)</strong> A quality control technician takes a smaller random sample of $50$ tiles. The random variable $X$ denotes the number of flawed tiles in this sample, so that $X \\sim \\text{B}(50, 0.08)$.<br><br><strong>(i)</strong> Show that $\\dfrac{\\text{P}(X = r + 1)}{\\text{P}(X = r)} = \\dfrac{2(50 - r)}{23(r + 1)}$.<br><br><strong>(ii)</strong> Prove that $\\text{P}(X = r)$ is strictly decreasing for all integers $r \\ge 4$.<br><br><strong>(iii)</strong> Hence determine the mode of $X$, and calculate $\\text{P}(X = \\text{mode})$ correct to 4 decimal places.",
  "steps": [
    "<strong>(a) Normal Approximation within 1 Standard Deviation:</strong><br><br>For $Y \\sim \\text{B}(800, 0.08)$, calculate parameters:\\begin{aligned} \\mu &= 800(0.08) \\cr &= 64 \\cr \\sigma^2 &= 64(0.92) \\cr &= 58.88 \\cr \\sigma &= \\sqrt{58.88} \\cr &\\approx 7.673 \\end{aligned}<br>The interval within $1$ standard deviation is:\\begin{aligned} \\mu - \\sigma &= 64 - 7.673 \\cr &= 56.327 \\cr \\mu + \\sigma &= 64 + 7.673 \\cr &= 71.673 \\end{aligned}<br>The discrete integers in this range are $57 \\le Y \\le 71$.<br><br>Applying continuity corrections gives $\\text{P}(56.5 \\le Y_{\\text{norm}} \\le 71.5)$.<br><br>Standardising:\\begin{aligned} z &= \\dfrac{71.5 - 64}{7.673} \\cr &\\approx 0.9775 \\end{aligned}<br>Evaluating the symmetric tail probability:\\begin{aligned} &\\text{P}(-0.9775 \\le Z \\le 0.9775) \\cr &\\quad = 2\\Phi(0.9775) - 1 \\cr &\\quad = 2(0.8358) - 1 \\cr &\\quad = 0.672 \\end{aligned}",
    "<strong>(b)(i) Consecutive Probability Ratio:</strong><br><br>With $p = 0.08$ and $q = 0.92$, the parameter ratio is $\\frac{p}{q} = \\frac{0.08}{0.92} = \\frac{2}{23}$.<br><br>Taking consecutive terms:\\begin{aligned} &\\dfrac{\\text{P}(X = r + 1)}{\\text{P}(X = r)} \\cr &\\quad = \\dfrac{50 - r}{r + 1} \\times \\dfrac{2}{23} \\cr &\\quad = \\dfrac{2(50 - r)}{23(r + 1)} \\end{aligned}",
    "<strong>(b)(ii) Proof of Strictly Decreasing Sequence for $r \\ge 4$:</strong><br><br>Probabilities strictly decrease when the ratio is less than $1$:\\begin{aligned} &\\dfrac{2(50 - r)}{23(r + 1)} < 1 \\cr &100 - 2r < 23r + 23 \\cr &25r > 77 \\cr &r > 3.08 \\end{aligned}<br>For integer $r$, $r > 3.08$ holds for all $r \\ge 4$. Therefore, $\\text{P}(X = r + 1) < \\text{P}(X = r)$ for all $r \\ge 4$.",
    "<strong>(b)(iii) Mode and Exact Probability:</strong><br><br>Evaluating the ratio at $r = 3$:\\begin{aligned} \\dfrac{\\text{P}(X = 4)}{\\text{P}(X = 3)} &= \\dfrac{2(50 - 3)}{23(3 + 1)} \\cr &= \\dfrac{94}{92} \\cr &> 1 \\end{aligned}<br>Since $\\text{P}(X = 4) > \\text{P}(X = 3)$ and probabilities decrease strictly for all $r \\ge 4$, the mode is $4$.<br><br>Calculating the exact binomial probability at the mode:\\begin{aligned} &\\text{P}(X = 4) \\cr &\\quad = \\binom{50}{4}(0.08)^4 (0.92)^{46} \\cr &\\quad \\approx 0.2037 \\end{aligned}",
    "Final Answer: (a) $0.672$, (b)(iii) Mode $= 4$, $\\text{P}(X = 4) = 0.2037$"
  ],
  "pi_options": [
    {
      "ans": "(a) $0.683$, (b)(iii) Mode $= 4$, $\\text{P}(X = 4) = 0.2037$",
      "feedback": "Using the continuous standard Normal empirical rule $\\text{P}(-1 < Z < 1) \\approx 0.683$ ignores the discrete integer range and continuity correction."
    },
    {
      "ans": "(a) $0.672$, (b)(iii) Mode $= 3$, $\\text{P}(X = 4) = 0.2037$",
      "feedback": "Selecting $r = 3$ as the mode confuses the last index of the comparison step with the peak outcome at $r + 1 = 4$."
    },
    {
      "ans": "(a) $0.672$, (b)(iii) Mode $= 4$, $\\text{P}(X = 4) = 0.1954$",
      "feedback": "Using a Poisson approximation $\\text{Po}(4)$ gives $\\frac{4^4 e^{-4}}{4!} \\approx 0.1954$ rather than computing the exact binomial probability."
    }
  ],
  "bradley_insight": {
    "type": "caution",
    "title": "The Head Teacher's Eye: Discreteness in Standard Deviation Intervals",
    "content": "When asked for the probability of being within $1$ standard deviation of the mean for an approximated Binomial distribution, do not simply write down $0.683$. The random variable $Y$ is discrete. First calculate $(\\mu - \\sigma, \\mu + \\sigma) = (56.33, 71.67)$, identify the exact integer bounds $57 \\le Y \\le 71$, and only then apply continuity corrections to get $56.5$ and $71.5$."
  }
},
{
  "id": "050121",
  "group_id": "050121",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Data Presentation & Interpretation",
  "subtopic": [
    "Histograms",
    "Frequency Density",
    "Grouped Continuous Data"
  ],
  "img": false,
  "question": "A local council monitors the journey times, $t$ in minutes, of cyclists using a cycle superhighway during the morning commute. The data have been grouped, and the frequency densities have been calculated to draw a histogram. Some of the data are presented in the table below:<br><br><table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:6px; border:1px solid #ccc;'>Time, $t$ (mins)</th><th style='padding:6px; border:1px solid #ccc;'>Cyclists</th><th style='padding:6px; border:1px solid #ccc;'>FD</th></tr></thead><tbody><tr><td style='padding:6px; border:1px solid #ccc;'>$10 \\le t < 15$</td><td style='padding:6px; border:1px solid #ccc;'>$18$</td><td style='padding:6px; border:1px solid #ccc;'>$3.6$</td></tr><tr><td style='padding:6px; border:1px solid #ccc;'>$15 \\le t < 20$</td><td style='padding:6px; border:1px solid #ccc;'>$31$</td><td style='padding:6px; border:1px solid #ccc;'>$A$</td></tr><tr><td style='padding:6px; border:1px solid #ccc;'>$20 \\le t < 30$</td><td style='padding:6px; border:1px solid #ccc;'>$74$</td><td style='padding:6px; border:1px solid #ccc;'>$7.4$</td></tr><tr><td style='padding:6px; border:1px solid #ccc;'>$30 \\le t < 40$</td><td style='padding:6px; border:1px solid #ccc;'>$62$</td><td style='padding:6px; border:1px solid #ccc;'>$6.2$</td></tr><tr><td style='padding:6px; border:1px solid #ccc;'>$40 \\le t < 60$</td><td style='padding:6px; border:1px solid #ccc;'>$B$</td><td style='padding:6px; border:1px solid #ccc;'>$1.6$</td></tr></tbody></table><br><strong>(a)</strong> Calculate the missing values $A$ and $B$.<br><br><strong>(b)</strong> An analyst labels the horizontal axis of the histogram 'Journey time in minutes' and the vertical axis 'Number of minutes per cyclist'.<br><br>State which one of these axis labels is incorrect and write down a correct version.",
  "steps": [
    "<strong>(a) Calculating the Missing Values $A$ and $B$:</strong><br><br>Frequency density is defined as:\\begin{aligned} \\text{FD} &= \\dfrac{\\text{Frequency}}{\\text{Class width}} \\end{aligned}<br>For the class $15 \\le t < 20$:\\begin{aligned} \\text{Width} &= 20 - 15 \\cr &= 5 \\cr A &= \\dfrac{31}{5} \\cr &= 6.2 \\end{aligned}<br>For the class $40 \\le t < 60$:\\begin{aligned} \\text{Width} &= 60 - 40 \\cr &= 20 \\cr B &= 20 \\times 1.6 \\cr &= 32 \\end{aligned}",
    "<strong>(b) Correcting the Axis Nomenclature:</strong><br><br>The vertical axis label 'Number of minutes per cyclist' is incorrect.<br><br>The vertical axis represents frequency density, which has dimensions of frequency per unit of the continuous variable.<br><br>A correct label is <strong>Frequency density</strong> (or <strong>Number of cyclists per minute</strong>).",
    "Final Answer: (a) $A = 6.2$, $B = 32$, (b) Vertical axis: Frequency density"
  ],
  "pi_options": [
    {
      "ans": "(a) $A = 1.55$, $B = 32$, (b) Vertical axis: Frequency density",
      "feedback": "Dividing the frequency $31$ by the upper class boundary $20$ rather than the class width of $5$ gives $A = 1.55$."
    },
    {
      "ans": "(a) $A = 6.2$, $B = 0.08$, (b) Vertical axis: Frequency density",
      "feedback": "Dividing the frequency density $1.6$ by the class width of $20$ rather than multiplying gives $B = 0.08$ instead of $32$."
    },
    {
      "ans": "(a) $A = 6.2$, $B = 32$, (b) Horizontal axis: Frequency",
      "feedback": "The horizontal axis correctly represents the continuous variable (time in minutes); it is the vertical axis that was incorrectly labelled."
    }
  ],
  "bradley_insight": {
    "type": "caution",
    "title": "The Head Teacher's Eye: Units of Frequency Density",
    "content": "Frequency density is calculated as $\\frac{\\text{Frequency}}{\\text{Class width}}$. Its units are always frequency units per continuous variable unit, such as cyclists per minute. Writing minutes per cyclist inverts the ratio, which is a common conceptual slip on exam papers."
  }
},
{
  "id": "050122",
  "group_id": "050121",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Data Presentation & Interpretation",
  "subtopic": [
    "Unequal Class Widths",
    "Frequency Density",
    "Estimation from Grouped Data"
  ],
  "img": false,
  "question": "The times taken, $t$ in minutes, for electric vehicles to recharge at a motorway service station are recorded. The grouped data and corresponding frequency densities are partially recorded in the table below:<br><br><table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:6px; border:1px solid #ccc;'>Time, $t$ (mins)</th><th style='padding:6px; border:1px solid #ccc;'>Vehicles</th><th style='padding:6px; border:1px solid #ccc;'>FD</th></tr></thead><tbody><tr><td style='padding:6px; border:1px solid #ccc;'>$0 \\le t < 20$</td><td style='padding:6px; border:1px solid #ccc;'>$28$</td><td style='padding:6px; border:1px solid #ccc;'>$1.4$</td></tr><tr><td style='padding:6px; border:1px solid #ccc;'>$20 \\le t < 30$</td><td style='padding:6px; border:1px solid #ccc;'>$45$</td><td style='padding:6px; border:1px solid #ccc;'>$P$</td></tr><tr><td style='padding:6px; border:1px solid #ccc;'>$30 \\le t < 45$</td><td style='padding:6px; border:1px solid #ccc;'>$Q$</td><td style='padding:6px; border:1px solid #ccc;'>$4.8$</td></tr><tr><td style='padding:6px; border:1px solid #ccc;'>$45 \\le t < 60$</td><td style='padding:6px; border:1px solid #ccc;'>$51$</td><td style='padding:6px; border:1px solid #ccc;'>$3.4$</td></tr><tr><td style='padding:6px; border:1px solid #ccc;'>$60 \\le t < 90$</td><td style='padding:6px; border:1px solid #ccc;'>$36$</td><td style='padding:6px; border:1px solid #ccc;'>$1.2$</td></tr></tbody></table><br><strong>(a)</strong> Calculate the values of $P$ and $Q$.<br><br><strong>(b)</strong> Use the data in the table to estimate the number of vehicles that had a charging time of at least $35$ minutes.<br><br><strong>(c)</strong> State the modelling assumption about the distribution of charging times that you made in order to calculate your estimate in part <strong>(b)</strong>.",
  "steps": [
    "<strong>(a) Calculating $P$ and $Q$:</strong><br><br>For the class $20 \\le t < 30$:\\begin{aligned} \\text{Width} &= 30 - 20 \\cr &= 10 \\cr P &= \\dfrac{45}{10} \\cr &= 4.5 \\end{aligned}<br>For the class $30 \\le t < 45$:\\begin{aligned} \\text{Width} &= 45 - 30 \\cr &= 15 \\cr Q &= 15 \\times 4.8 \\cr &= 72 \\end{aligned}",
    "<strong>(b) Estimating Vehicles Charging for at Least 35 Minutes:</strong><br><br>The condition $t \\ge 35$ spans part of the interval $30 \\le t < 45$, and the entirety of the subsequent two intervals.<br><br>For the sub-interval $35 \\le t < 45$:\\begin{aligned} \\text{Sub-width} &= 45 - 35 \\cr &= 10 \\cr f_{[35, 45)} &= 10 \\times 4.8 \\cr &= 48 \\end{aligned}<br>Summing with the remaining complete classes:\\begin{aligned} \\text{Total} &= 48 + 51 + 36 \\cr &= 135 \\end{aligned}",
    "<strong>(c) Identifying the Modelling Assumption:</strong><br><br>To calculate the proportion of vehicles in $35 \\le t < 45$, it is assumed that the charging times are distributed <strong>uniformly</strong> (evenly) across the class interval.",
    "Final Answer: (a) $P = 4.5$, $Q = 72$, (b) $135$, (c) Uniform distribution across interval"
  ],
  "pi_options": [
    {
      "ans": "(a) $P = 4.5$, $Q = 72$, (b) $111$, (c) Uniform distribution across interval",
      "feedback": "Calculating the lower sub-interval $35 - 30 = 5$ minutes gives $5 \\times 4.8 = 24$, which incorrectly sums to $24 + 51 + 36 = 111$."
    },
    {
      "ans": "(a) $P = 4.5$, $Q = 72$, (b) $135$, (c) Normal distribution across interval",
      "feedback": "Linear interpolation within grouped continuous frequency classes assumes a uniform distribution, not a normal distribution."
    },
    {
      "ans": "(a) $P = 1.5$, $Q = 72$, (b) $135$, (c) Uniform distribution across interval",
      "feedback": "Dividing the frequency $45$ by the upper class boundary $30$ rather than the class width $10$ incorrectly yields $P = 1.5$."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Sub-Interval Frequency Estimation",
    "content": "When estimating frequency for a partial class interval like $t \\ge 35$ in $[30, 45)$, multiply the sub-interval width directly by the frequency density: $(45 - 35) \\times 4.8 = 48$. This method avoids converting back and forth through total frequencies."
  }
},
{
  "id": "050123",
  "group_id": "050121",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Data Presentation & Interpretation",
  "subtopic": [
    "Histogram Scaling on Graph Paper",
    "Area Proportional to Frequency"
  ],
  "img": false,
  "question": "The masses, $m$ in grams, of a harvest of fruit are summarised in the frequency table below:<br><br><table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:6px; border:1px solid #ccc;'>Mass, $m$ (g)</th><th style='padding:6px; border:1px solid #ccc;'>Freq</th><th style='padding:6px; border:1px solid #ccc;'>FD</th></tr></thead><tbody><tr><td style='padding:6px; border:1px solid #ccc;'>$80 \\le m < 100$</td><td style='padding:6px; border:1px solid #ccc;'>$30$</td><td style='padding:6px; border:1px solid #ccc;'>$1.5$</td></tr><tr><td style='padding:6px; border:1px solid #ccc;'>$100 \\le m < 110$</td><td style='padding:6px; border:1px solid #ccc;'>$42$</td><td style='padding:6px; border:1px solid #ccc;'>$4.2$</td></tr><tr><td style='padding:6px; border:1px solid #ccc;'>$110 \\le m < 125$</td><td style='padding:6px; border:1px solid #ccc;'>$63$</td><td style='padding:6px; border:1px solid #ccc;'>$4.2$</td></tr><tr><td style='padding:6px; border:1px solid #ccc;'>$125 \\le m < 150$</td><td style='padding:6px; border:1px solid #ccc;'>$55$</td><td style='padding:6px; border:1px solid #ccc;'>$2.2$</td></tr><tr><td style='padding:6px; border:1px solid #ccc;'>$150 \\le m < 200$</td><td style='padding:6px; border:1px solid #ccc;'>$40$</td><td style='padding:6px; border:1px solid #ccc;'>$0.8$</td></tr></tbody></table><br>A histogram is drawn on graph paper to represent these data. In this histogram, the bar representing the class $80 \\le m < 100$ has a width of $4\\text{ cm}$ and a height of $3\\text{ cm}$.<br><br><strong>(a)</strong> Find the width and the height, in cm, of the bar representing the class $110 \\le m < 125$.<br><br><strong>(b)</strong> Determine the number of pieces of fruit represented by an area of $1\\text{ cm}^2$ on this histogram.<br><br><strong>(c)</strong> On the same histogram, an additional class of fruit is drawn. The bar has a width of $5\\text{ cm}$ and an area of $16\\text{ cm}^2$. Determine the frequency of this class.",
  "steps": [
    "<strong>(a) Calculating Dimensions of the Bar:</strong><br><br>For the reference class $80 \\le m < 100$:\\begin{aligned} \\text{Class width} &= 100 - 80 \\cr &= 20\\text{ g} \\end{aligned}<br>A class width of $20\\text{ g}$ corresponds to $4\\text{ cm}$:\\begin{aligned} \\text{Width scale} &= \\dfrac{4\\text{ cm}}{20\\text{ g}} \\cr &= 0.2\\text{ cm per g} \\end{aligned}<br>For $110 \\le m < 125$, the class width is $15\\text{ g}$:\\begin{aligned} \\text{Bar width} &= 15 \\times 0.2 \\cr &= 3\\text{ cm} \\end{aligned}<br>The frequency density of $1.5$ corresponds to $3\\text{ cm}$:\\begin{aligned} \\text{Height scale} &= \\dfrac{3\\text{ cm}}{1.5} \\cr &= 2\\text{ cm per unit} \\end{aligned}<br>For $110 \\le m < 125$, the frequency density is $4.2$:\\begin{aligned} \\text{Bar height} &= 4.2 \\times 2 \\cr &= 8.4\\text{ cm} \\end{aligned}",
    "<strong>(b) Frequency Represented by an Area of 1 cm²:</strong><br><br>For the reference bar $80 \\le m < 100$:\\begin{aligned} \\text{Area} &= 4\\text{ cm} \\times 3\\text{ cm} \\cr &= 12\\text{ cm}^2 \\end{aligned}<br>This area represents a frequency of $30$ fruits:\\begin{aligned} \\text{Frequency per cm}^2 &= \\dfrac{30}{12} \\cr &= 2.5 \\end{aligned}",
    "<strong>(c) Finding Frequency from Given Area:</strong><br><br>Using the established scaling factor of $2.5$ fruits per $\\text{cm}^2$:\\begin{aligned} \\text{Frequency} &= 16 \\times 2.5 \\cr &= 40 \\end{aligned}",
    "Final Answer: (a) Width $= 3\\text{ cm}$, Height $= 8.4\\text{ cm}$, (b) $2.5$, (c) $40$"
  ],
  "pi_options": [
    {
      "ans": "(a) Width $= 3\\text{ cm}$, Height $= 8.4\\text{ cm}$, (b) $0.4$, (c) $6.4$",
      "feedback": "Inverting the area-to-frequency ratio as $\\frac{12}{30} = 0.4$ leads to $16 \\times 0.4 = 6.4$ fruits."
    },
    {
      "ans": "(a) Width $= 3\\text{ cm}$, Height $= 4.2\\text{ cm}$, (b) $2.5$, (c) $40$",
      "feedback": "Using the frequency density of $4.2$ directly as the bar height in cm ignores the vertical scale factor of $2\\text{ cm}$ per unit."
    },
    {
      "ans": "(a) Width $= 15\\text{ cm}$, Height $= 8.4\\text{ cm}$, (b) $2.5$, (c) $40$",
      "feedback": "Setting the bar width equal to the class width of $15$ ignores the horizontal scale factor of $0.2\\text{ cm}$ per gram."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Area Proportionality Constant",
    "content": "In histograms, $\\text{Frequency} = k \\times \\text{Area}$. Find $k$ immediately from the given bar: $k = \\frac{30}{12\\text{ cm}^2} = 2.5\\text{ items per cm}^2$. Once you have $k$, you can determine the frequency of any region directly from its area without calculating class boundaries."
  }
},
{
  "id": "050124",
  "group_id": "050121",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Data Presentation & Interpretation",
  "subtopic": [
    "Linear Interpolation",
    "Median",
    "Interquartile Range",
    "Grouped Data"
  ],
  "img": false,
  "question": "The speeds, $v$ in miles per hour (mph), of $160$ vehicles passing a speed camera on an urban road are summarised in the table below:<br><br><table style='width:100%; max-width:240px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:6px; border:1px solid #ccc;'>Speed, $v$ (mph)</th><th style='padding:6px; border:1px solid #ccc;'>Frequency</th></tr></thead><tbody><tr><td style='padding:6px; border:1px solid #ccc;'>$20 \\le v < 30$</td><td style='padding:6px; border:1px solid #ccc;'>$14$</td></tr><tr><td style='padding:6px; border:1px solid #ccc;'>$30 \\le v < 36$</td><td style='padding:6px; border:1px solid #ccc;'>$36$</td></tr><tr><td style='padding:6px; border:1px solid #ccc;'>$36 \\le v < 40$</td><td style='padding:6px; border:1px solid #ccc;'>$48$</td></tr><tr><td style='padding:6px; border:1px solid #ccc;'>$40 \\le v < 48$</td><td style='padding:6px; border:1px solid #ccc;'>$44$</td></tr><tr><td style='padding:6px; border:1px solid #ccc;'>$48 \\le v < 60$</td><td style='padding:6px; border:1px solid #ccc;'>$18$</td></tr></tbody></table><br><strong>(a)</strong> Write down the class interval that contains the median speed.<br><br><strong>(b)</strong> Use linear interpolation to calculate an estimate of:<br><strong>(i)</strong> the median speed;<br><strong>(ii)</strong> the interquartile range (IQR) of the speeds.<br>Give your answers to 1 decimal place.<br><br><strong>(c)</strong> The speed limit on this section of road is $40\\text{ mph}$. Estimate the percentage of drivers who were exceeding the speed limit.",
  "steps": [
    "<strong>(a) Identifying the Median Class:</strong><br><br>Find the cumulative frequencies:\\begin{aligned} v &< 30: 14 \\cr v &< 36: 14 + 36 = 50 \\cr v &< 40: 50 + 48 = 98 \\cr v &< 48: 98 + 44 = 142 \\cr v &< 60: 142 + 18 = 160 \\end{aligned}<br>The median position for $n = 160$ continuous values is $\\frac{160}{2} = 80$.<br><br>Since $50 < 80 \\le 98$, the median lies in $36 \\le v < 40$.",
    "<strong>(b)(i) Linear Interpolation for the Median:</strong><br><br>Interpolating within $36 \\le v < 40$:\\begin{aligned} Q_2 &= 36 + \\left(\\dfrac{80 - 50}{48}\\right) \\times 4 \\cr &= 36 + \\left(\\dfrac{30}{48}\\right) \\times 4 \\cr &= 36 + 2.5 \\cr &= 38.5\\text{ mph} \\end{aligned}",
    "<strong>(b)(ii) Linear Interpolation for Quartiles and IQR:</strong><br><br>Lower quartile position: $\\frac{160}{4} = 40$ (in $30 \\le v < 36$):\\begin{aligned} Q_1 &= 30 + \\left(\\dfrac{40 - 14}{36}\\right) \\times 6 \\cr &= 30 + \\left(\\dfrac{26}{36}\\right) \\times 6 \\cr &= 30 + 4.333 \\cr &= 34.333\\text{ mph} \\end{aligned}<br>Upper quartile position: $\\frac{3(160)}{4} = 120$ (in $40 \\le v < 48$):\\begin{aligned} Q_3 &= 40 + \\left(\\dfrac{120 - 98}{44}\\right) \\times 8 \\cr &= 40 + \\left(\\dfrac{22}{44}\\right) \\times 8 \\cr &= 40 + 4 \\cr &= 44.0\\text{ mph} \\end{aligned}<br>Evaluating the interquartile range:\\begin{aligned} \\text{IQR} &= 44.0 - 34.333 \\cr &= 9.667 \\cr &\\approx 9.7\\text{ mph} \\end{aligned}",
    "<strong>(c) Estimating Percentage Exceeding the Speed Limit:</strong><br><br>The number of drivers exceeding $40\\text{ mph}$ is:\\begin{aligned} \\text{Exceeding} &= 44 + 18 \\cr &= 62 \\end{aligned}<br>Calculating the percentage of $160$ drivers:\\begin{aligned} \\text{Percentage} &= \\left(\\dfrac{62}{160}\\right) \\times 100\\% \\cr &= 38.75\\% \\cr &\\approx 38.8\\% \\end{aligned}",
    "Final Answer: (a) $36 \\le v < 40$, (b)(i) $38.5\\text{ mph}$, (ii) $9.7\\text{ mph}$, (c) $38.8\\%"
  ],
  "pi_options": [
    {
      "ans": "(a) $36 \\le v < 40$, (b)(i) $38.5\\text{ mph}$, (ii) $9.7\\text{ mph}$, (c) $61.3\\%",
      "feedback": "Calculating the percentage of drivers obeying the limit ($\\frac{98}{160} \\times 100\\% = 61.25\\%$) rather than those exceeding it gives $61.3\\%$."
    },
    {
      "ans": "(a) $36 \\le v < 40$, (b)(i) $38.0\\text{ mph}$, (ii) $9.7\\text{ mph}$, (c) $38.8\\%",
      "feedback": "Taking the midpoint of the median class $\\frac{36 + 40}{2} = 38.0$ ignores linear interpolation within the frequency group."
    },
    {
      "ans": "(a) $36 \\le v < 40$, (b)(i) $38.5\\text{ mph}$, (ii) $10.0\\text{ mph}$, (c) $38.8\\%",
      "feedback": "Subtracting class midpoints ($44 - 33$) rather than interpolated quartiles gives $10.0$ instead of $9.7$."
    }
  ],
  "bradley_insight": {
    "type": "caution",
    "title": "The Head Teacher's Eye: Continuous Data Quartile Positions",
    "content": "For grouped continuous data, use exact fractional positions: $\\frac{n}{2} = 80$, $\\frac{n}{4} = 40$, and $\\frac{3n}{4} = 120$. Do not use the discrete formulas $\\frac{n + 1}{2}$ or $\\frac{n + 1}{4}$ when carrying out linear interpolation on grouped continuous tables."
  }
},
{
  "id": "050125",
  "group_id": "050121",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Data Presentation & Interpretation",
  "subtopic": [
    "Outliers",
    "Interquartile Range",
    "Skewness",
    "Linear Interpolation"
  ],
  "img": false,
  "question": "The daily rainfall, $r$ in millimetres, was recorded at an environmental monitoring station over a period of $120$ days during autumn. The results are shown in the table below:<br><br><table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:6px; border:1px solid #ccc;'>Rainfall, $r$ (mm)</th><th style='padding:6px; border:1px solid #ccc;'>Days</th><th style='padding:6px; border:1px solid #ccc;'>FD</th></tr></thead><tbody><tr><td style='padding:6px; border:1px solid #ccc;'>$0 \\le r < 5$</td><td style='padding:6px; border:1px solid #ccc;'>$45$</td><td style='padding:6px; border:1px solid #ccc;'>$9.0$</td></tr><tr><td style='padding:6px; border:1px solid #ccc;'>$5 \\le r < 10$</td><td style='padding:6px; border:1px solid #ccc;'>$35$</td><td style='padding:6px; border:1px solid #ccc;'>$7.0$</td></tr><tr><td style='padding:6px; border:1px solid #ccc;'>$10 \\le r < 20$</td><td style='padding:6px; border:1px solid #ccc;'>$24$</td><td style='padding:6px; border:1px solid #ccc;'>$2.4$</td></tr><tr><td style='padding:6px; border:1px solid #ccc;'>$20 \\le r < 35$</td><td style='padding:6px; border:1px solid #ccc;'>$12$</td><td style='padding:6px; border:1px solid #ccc;'>$0.8$</td></tr><tr><td style='padding:6px; border:1px solid #ccc;'>$35 \\le r < 60$</td><td style='padding:6px; border:1px solid #ccc;'>$4$</td><td style='padding:6px; border:1px solid #ccc;'>$0.16$</td></tr></tbody></table><br>For these data, linear interpolation gives the lower quartile as $Q_1 = 3.3\\text{ mm}$ and the upper quartile as $Q_3 = 14.2\\text{ mm}$.<br><br><strong>(a)</strong><br><strong>(i)</strong> Calculate the interquartile range (IQR) of the daily rainfall.<br><strong>(ii)</strong> An outlier is defined as any value that exceeds $Q_3 + 1.5 \\times \\text{IQR}$. Calculate the outlier boundary and explain whether any of the recorded days are definitely outliers.<br><br><strong>(b)</strong> Use linear interpolation to calculate an estimate of the median daily rainfall, giving your answer to 1 decimal place.<br><br><strong>(c)</strong> The mean daily rainfall for these $120$ days is $8.7\\text{ mm}$. By comparing the mean and your estimated median, describe the skewness of the distribution, giving a reason for your answer.",
  "steps": [
    "<strong>(a)(i) Calculating the Interquartile Range:</strong><br><br>Using the provided quartiles:\\begin{aligned} \\text{IQR} &= Q_3 - Q_1 \\cr &= 14.2 - 3.3 \\cr &= 10.9\\text{ mm} \\end{aligned}",
    "<strong>(a)(ii) Outlier Boundary and Identification:</strong><br><br>Evaluating the upper outlier threshold:\\begin{aligned} \\text{Boundary} &= Q_3 + 1.5 \\times \\text{IQR} \\cr &= 14.2 + 1.5(10.9) \\cr &= 14.2 + 16.35 \\cr &= 30.55\\text{ mm} \\end{aligned}<br>The highest class interval $35 \\le r < 60$ contains $4$ days. Because every observation in this class satisfies $r \\ge 35 > 30.55\\text{ mm}$, all $4$ of these days are definitely outliers.",
    "<strong>(b) Linear Interpolation for the Median:</strong><br><br>The median position for $n = 120$ observations is $\\frac{120}{2} = 60$.<br><br>Cumulative frequency up to $r = 5$ is $45$, so the median lies in $5 \\le r < 10$:\\begin{aligned} \\text{Median} &= 5 + \\left(\\dfrac{60 - 45}{35}\\right) \\times 5 \\cr &= 5 + \\left(\\dfrac{15}{35}\\right) \\times 5 \\cr &= 5 + \\dfrac{15}{7} \\cr &= 5 + 2.143 \\cr &= 7.1\\text{ mm} \\end{aligned}",
    "<strong>(c) Skewness Analysis:</strong><br><br>Comparing the measures of central tendency:\\begin{aligned} \\text{Mean} &= 8.7\\text{ mm} \\cr \\text{Median} &= 7.1\\text{ mm} \\cr \\text{Mean} &> \\text{Median} \\end{aligned}<br>Because $\\text{Mean} > \\text{Median}$, the distribution is <strong>positively skewed</strong> (skewed to the right). The extreme high-rainfall outliers pull the mean above the median.",
    "Final Answer: (a)(i) $10.9\\text{ mm}$, (ii) $30.55\\text{ mm}$, outliers exist, (b) $7.1\\text{ mm}$, (c) Positively skewed"
  ],
  "pi_options": [
    {
      "ans": "(a)(i) $10.9\\text{ mm}$, (ii) $30.55\\text{ mm}$, outliers exist, (b) $7.1\\text{ mm}$, (c) Negatively skewed",
      "feedback": "When the mean is strictly greater than the median, the distribution is positively skewed, not negatively skewed."
    },
    {
      "ans": "(a)(i) $10.9\\text{ mm}$, (ii) $25.1\\text{ mm}$, outliers exist, (b) $7.1\\text{ mm}$, (c) Positively skewed",
      "feedback": "Using the lower quartile in the upper outlier formula as $Q_1 + 1.5 \\times \\text{IQR} = 3.3 + 16.35$ incorrectly yields $19.65$ or $25.1$."
    },
    {
      "ans": "(a)(i) $10.9\\text{ mm}$, (ii) $30.55\\text{ mm}$, no outliers, (b) $7.5\\text{ mm}$, (c) Positively skewed",
      "feedback": "Taking the midpoint $\\frac{5 + 10}{2} = 7.5$ ignores linear interpolation, and concluding no outliers ignores the interval $35 \\le r < 60$."
    }
  ],
  "bradley_insight": {
    "type": "deeper",
    "title": "The Head Teacher's Eye: Skewness and Measures of Location",
    "content": "In a positively skewed distribution, the tail stretches to the right. The mode sits under the main peak, the median is pulled slightly right, and the mean is pulled farthest by extreme high values: $\\text{Mode} < \\text{Median} < \\text{Mean}$. Verifying that $\\text{Mean} > \\text{Median}$ confirms positive skew."
  }
},
{
  "id": "050126",
  "group_id": "050126",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Discrete Random Variables",
  "subtopic": [
    "Probability Distributions",
    "Total Probability",
    "Independent Observations"
  ],
  "img": false,
  "question": "The probability distribution of the discrete random variable $Y$ is given in the table below:<br><br><table style='width:100%; max-width:180px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:5px; border:1px solid #ccc;'>$y$</th><th style='padding:5px; border:1px solid #ccc;'>$\\text{P}(Y = y)$</th></tr></thead><tbody><tr><td style='padding:5px; border:1px solid #ccc;'>$1$</td><td style='padding:5px; border:1px solid #ccc;'>$0.1$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>$2$</td><td style='padding:5px; border:1px solid #ccc;'>$0.25$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>$3$</td><td style='padding:5px; border:1px solid #ccc;'>$k$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>$4$</td><td style='padding:5px; border:1px solid #ccc;'>$0.2$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>$5$</td><td style='padding:5px; border:1px solid #ccc;'>$0.15$</td></tr></tbody></table><br><strong>(a)</strong> Find the value of $k$.<br><br>$Y_1$ and $Y_2$ are two independent observations of $Y$.<br><br><strong>(b)</strong> Find $\\text{P}(Y_1 + Y_2 = 7)$.",
  "steps": [
    "<strong>(a) Finding the Value of $k$:</strong><br><br>The sum of all probabilities in a discrete probability distribution must equal $1$:\\begin{aligned} \\sum \\text{P}(Y = y) &= 1 \\cr 0.1 + 0.25 + k \\cr \\quad + 0.2 + 0.15 &= 1 \\cr 0.7 + k &= 1 \\cr k &= 0.3 \\end{aligned}",
    "<strong>(b) Finding $\\text{P}(Y_1 + Y_2 = 7)$:</strong><br><br>Identify all pairs $(y_1, y_2)$ that sum to $7$ from the support $\\{1, 2, 3, 4, 5\\}$:<br>$$(2, 5), (3, 4), (4, 3), (5, 2)$$<br>Since $Y_1$ and $Y_2$ are independent, multiply the respective probabilities:\\begin{aligned} \\text{P}(2, 5) &= 0.25 \\times 0.15 \\cr &= 0.0375 \\cr \\text{P}(3, 4) &= 0.3 \\times 0.2 \\cr &= 0.06 \\cr \\text{P}(4, 3) &= 0.2 \\times 0.3 \\cr &= 0.06 \\cr \\text{P}(5, 2) &= 0.15 \\times 0.25 \\cr &= 0.0375 \\end{aligned}<br>Summing these mutually exclusive events:\\begin{aligned} &\\text{P}(Y_1 + Y_2 = 7) \\cr &\\quad = 2(0.0375) + 2(0.06) \\cr &\\quad = 0.075 + 0.12 \\cr &\\quad = 0.195 \\end{aligned}",
    "Final Answer: (a) $k = 0.3$, (b) $0.195$"
  ],
  "pi_options": [
    {
      "ans": "(a) $k = 0.3$, (b) $0.0975$",
      "feedback": "Failing to account for the order of observations by calculating only $(2, 5)$ and $(3, 4)$ halves the correct probability."
    },
    {
      "ans": "(a) $k = 0.4$, (b) $0.195$",
      "feedback": "An arithmetic error when summing the known probabilities to $0.6$ rather than $0.7$ gives $k = 0.4$."
    },
    {
      "ans": "(a) $k = 0.3$, (b) $0.1575$",
      "feedback": "Omitting one pair such as $(4, 3)$ from the sum of mutually exclusive outcomes gives $0.1575$."
    }
  ],
  "bradley_insight": {
    "type": "caution",
    "title": "The Head Teacher's Eye: Order Matters in Independent Pairs",
    "content": "When evaluating the sum of two independent observations, $(2, 5)$ and $(5, 2)$ represent distinct events: $Y_1 = 2, Y_2 = 5$ versus $Y_1 = 5, Y_2 = 2$. Always check whether pairs with distinct values need to be counted twice to avoid losing half your probability."
  }
},
{
  "id": "050127",
  "group_id": "050126",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Discrete Random Variables",
  "subtopic": [
    "Two Unknown Probabilities",
    "Cumulative Probability",
    "Identical Independent Outcomes"
  ],
  "img": false,
  "question": "The discrete random variable $X$ has the probability distribution shown in the table below, where $p$ and $q$ are constants:<br><br><table style='width:100%; max-width:180px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:5px; border:1px solid #ccc;'>$x$</th><th style='padding:5px; border:1px solid #ccc;'>$\\text{P}(X = x)$</th></tr></thead><tbody><tr><td style='padding:5px; border:1px solid #ccc;'>$0$</td><td style='padding:5px; border:1px solid #ccc;'>$0.15$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>$1$</td><td style='padding:5px; border:1px solid #ccc;'>$p$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>$2$</td><td style='padding:5px; border:1px solid #ccc;'>$0.2$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>$3$</td><td style='padding:5px; border:1px solid #ccc;'>$q$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>$4$</td><td style='padding:5px; border:1px solid #ccc;'>$0.1$</td></tr></tbody></table><br>It is given that $\\text{P}(X \\le 1) = 0.35$.<br><br><strong>(a)</strong> Find the values of $p$ and $q$.<br><br>$X_1$ and $X_2$ are two independent observations of $X$.<br><br><strong>(b)</strong> Find the probability that $X_1 = X_2$.",
  "steps": [
    "<strong>(a) Determining the Unknowns $p$ and $q$:</strong><br><br>Using the given cumulative probability $\\text{P}(X \\le 1) = 0.35$:\\begin{aligned} \\text{P}(X = 0) + \\text{P}(X = 1) &= 0.35 \\cr 0.15 + p &= 0.35 \\cr p &= 0.2 \\end{aligned}<br>Using the fact that all probabilities sum to $1$:\\begin{aligned} \\sum \\text{P}(X = x) &= 1 \\cr 0.15 + 0.2 + 0.2 \\cr \\quad + q + 0.1 &= 1 \\cr 0.65 + q &= 1 \\cr q &= 0.35 \\end{aligned}",
    "<strong>(b) Finding the Probability $\\text{P}(X_1 = X_2)$:</strong><br><br>Because $X_1$ and $X_2$ are independent, the probability that both observations are equal is:\\begin{aligned} &\\text{P}(X_1 = X_2) \\cr &\\quad = \\sum [\\text{P}(X = x)]^2 \\end{aligned}<br>Squaring the individual probabilities:\\begin{aligned} 0.15^2 &= 0.0225 \\cr 0.2^2 &= 0.04 \\cr 0.2^2 &= 0.04 \\cr 0.35^2 &= 0.1225 \\cr 0.1^2 &= 0.01 \\end{aligned}<br>Summing these values:\\begin{aligned} &\\text{P}(X_1 = X_2) \\cr &\\quad = 0.0225 + 0.04 \\cr &\\qquad + 0.04 + 0.1225 \\cr &\\qquad + 0.01 \\cr &\\quad = 0.235 \\end{aligned}",
    "Final Answer: (a) $p = 0.2$, $q = 0.35$, (b) $0.235$"
  ],
  "pi_options": [
    {
      "ans": "(a) $p = 0.2$, $q = 0.35$, (b) $0.470$",
      "feedback": "Doubling the squared terms inappropriately assumes that identical pairs like $(1, 1)$ must be counted twice."
    },
    {
      "ans": "(a) $p = 0.35$, $q = 0.2$, (b) $0.235$",
      "feedback": "Swapping the values of $p$ and $q$ ignores the equation $\\text{P}(X = 0) + p = 0.35$."
    },
    {
      "ans": "(a) $p = 0.2$, $q = 0.35$, (b) $0.200$",
      "feedback": "Omitting the boundary terms $X = 0$ and $X = 4$ when calculating the sum of squares yields $0.200$."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Sum of Squared Probabilities",
    "content": "For two independent observations from the same discrete distribution, the event $X_1 = X_2$ corresponds to the main diagonal of the sample space table. It is always evaluated as $\\sum [\\text{P}(X = x)]^2$. Each diagonal entry appears exactly once."
  }
},
{
  "id": "050128",
  "group_id": "050126",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Discrete Random Variables",
  "subtopic": [
    "Algebraic PMF",
    "Products of Independent Variables",
    "Probability Inequalities"
  ],
  "img": false,
  "question": "The discrete random variable $X$ has probability mass function defined by:<br>$$\\text{P}(X = x) = cx$$ $$\\text{for } x \\in \\{1, 2, 3, 4\\}$$<br>where $c$ is a positive constant.<br><br><strong>(a)</strong> Show that $c = 0.1$.<br><br>$X_1$ and $X_2$ are two independent observations of $X$.<br><br><strong>(b)</strong> Find:<br><strong>(i)</strong> $\\text{P}(X_1 X_2 = 6)$<br><strong>(ii)</strong> $\\text{P}(X_1 > X_2)$",
  "steps": [
    "<strong>(a) Showing that $c = 0.1$:</strong><br><br>The probabilities must sum to $1$ over the support $\\{1, 2, 3, 4\\}$:\\begin{aligned} \\sum_{x=1}^4 \\text{P}(X = x) &= 1 \\cr c(1 + 2 + 3 + 4) &= 1 \\cr 10c &= 1 \\cr c &= 0.1 \\end{aligned}<br>The distribution of $X$ is therefore:\\begin{aligned} \\text{P}(X = 1) &= 0.1 \\cr \\text{P}(X = 2) &= 0.2 \\cr \\text{P}(X = 3) &= 0.3 \\cr \\text{P}(X = 4) &= 0.4 \\end{aligned}",
    "<strong>(b)(i) Evaluating $\\text{P}(X_1 X_2 = 6)$:</strong><br><br>Pairs with a product of $6$ are $(2, 3)$ and $(3, 2)$:\\begin{aligned} \\text{P}(2, 3) &= 0.2 \\times 0.3 \\cr &= 0.06 \\cr \\text{P}(3, 2) &= 0.3 \\times 0.2 \\cr &= 0.06 \\end{aligned}<br>Summing these outcomes:\\begin{aligned} \\text{P}(X_1 X_2 = 6) &= 0.06 + 0.06 \\cr &= 0.12 \\end{aligned}",
    "<strong>(b)(ii) Evaluating $\\text{P}(X_1 > X_2)$:</strong><br><br>List the pairs where $X_1 > X_2$ by conditioning on $X_1$:\\begin{aligned} X_1 = 2&: (2, 1) \\cr X_1 = 3&: (3, 1), (3, 2) \\cr X_1 = 4&: (4, 1), (4, 2), (4, 3) \\end{aligned}<br>Calculate the probability for each value of $X_1$:\\begin{aligned} \\text{P}(X_1 = 2, X_2 < 2) &= 0.2(0.1) \\cr &= 0.02 \\cr \\text{P}(X_1 = 3, X_2 < 3) &= 0.3(0.1 + 0.2) \\cr &= 0.09 \\cr \\text{P}(X_1 = 4, X_2 < 4) &= 0.4(0.1 \\cr & \\quad + 0.2 + 0.3) \\cr &= 0.24 \\end{aligned}<br>Summing these mutually exclusive cases:\\begin{aligned} \\text{P}(X_1 > X_2) &= 0.02 + 0.09 \\cr &\\quad + 0.24 \\cr &= 0.35 \\end{aligned}",
    "Final Answer: (b)(i) $0.12$, (ii) $0.35$"
  ],
  "pi_options": [
    {
      "ans": "(b)(i) $0.06$, (ii) $0.35$",
      "feedback": "Counting only the pair $(2, 3)$ and omitting $(3, 2)$ overlooks that $X_1$ and $X_2$ are distinct independent observations."
    },
    {
      "ans": "(b)(i) $0.12$, (ii) $0.70$",
      "feedback": "Calculating $1 - \\text{P}(X_1 = X_2) = 0.70$ gives $\\text{P}(X_1 \\neq X_2)$ rather than dividing by $2$ for $\\text{P}(X_1 > X_2)$."
    },
    {
      "ans": "(b)(i) $0.12$, (ii) $0.30$",
      "feedback": "Evaluating the probability of identical pairs $\\text{P}(X_1 = X_2) = 0.30$ confuses the equality event with the strict inequality event."
    }
  ],
 "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Symmetry Shortcuts for Inequalities",
    "content": "For two independent observations from an identical distribution, symmetry dictates that $\\text{P}(X_1 > X_2) = \\text{P}(X_2 > X_1)$.<br><br>Since:\\begin{aligned} &\\text{P}(X_1 > X_2) \\cr &\\quad + \\text{P}(X_1 < X_2) \\cr &\\quad + \\text{P}(X_1 = X_2) = 1 \\end{aligned}you can quickly calculate $\\text{P}(X_1 > X_2) = \\dfrac{1 - \\text{P}(X_1 = X_2)}{2}$.<br><br>With:\\begin{aligned} &\\text{P}(X_1 = X_2) \\cr &\\quad = 0.01 + 0.04 \\cr &\\qquad + 0.09 + 0.16 \\cr &\\quad = 0.30 \\end{aligned}we get $\\dfrac{1 - 0.30}{2} = 0.35$."
  }
},
{
  "id": "050129",
  "group_id": "050126",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Discrete Random Variables",
  "subtopic": [
    "Negative Supports",
    "Sums of Independent Variables",
    "Conditional Probability"
  ],
  "img": false,
  "question": "The discrete random variable $W$ takes integer values from $-2$ to $2$. Its probability distribution is shown in the table below:<br><br><table style='width:100%; max-width:180px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:5px; border:1px solid #ccc;'>$w$</th><th style='padding:5px; border:1px solid #ccc;'>$\\text{P}(W = w)$</th></tr></thead><tbody><tr><td style='padding:5px; border:1px solid #ccc;'>$-2$</td><td style='padding:5px; border:1px solid #ccc;'>$0.1$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>$-1$</td><td style='padding:5px; border:1px solid #ccc;'>$0.25$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>$0$</td><td style='padding:5px; border:1px solid #ccc;'>$0.3$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>$1$</td><td style='padding:5px; border:1px solid #ccc;'>$a$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>$2$</td><td style='padding:5px; border:1px solid #ccc;'>$0.15$</td></tr></tbody></table><br><strong>(a)</strong> Find the value of $a$.<br><br>$W_1$ and $W_2$ are two independent observations of $W$.<br><br><strong>(b)</strong> Find $\\text{P}(W_1 + W_2 = 0)$.<br><br><strong>(c)</strong> Find the conditional probability $\\text{P}(W_1 + W_2 = 0 \\mid W_1 > 0)$, giving your answer as an exact fraction in simplest form.",
  "steps": [
    "<strong>(a) Finding the Value of $a$:</strong><br><br>Sum of probabilities must equal $1$:\\begin{aligned} \\sum \\text{P}(W = w) &= 1 \\cr 0.1 + 0.25 + 0.3 \\cr \\quad + a + 0.15 &= 1 \\cr 0.8 + a &= 1 \\cr a &= 0.2 \\end{aligned}",
    "<strong>(b) Evaluating $\\text{P}(W_1 + W_2 = 0)$:</strong><br><br>Identify pairs $(w_1, w_2)$ summing to $0$:<br>$$(-2, 2), (-1, 1), (0, 0),$$ $$(1, -1), (2, -2)$$<br>Calculate probabilities for each pair:\\begin{aligned} \\text{P}(-2, 2) &= 0.1 \\times 0.15 \\cr &= 0.015 \\cr \\text{P}(-1, 1) &= 0.25 \\times 0.2 \\cr &= 0.05 \\cr \\text{P}(0, 0) &= 0.3 \\times 0.3 \\cr &= 0.09 \\cr \\text{P}(1, -1) &= 0.2 \\times 0.25 \\cr &= 0.05 \\cr \\text{P}(2, -2) &= 0.15 \\times 0.1 \\cr &= 0.015 \\end{aligned}<br>Summing these mutually exclusive events:\\begin{aligned} &\\text{P}(W_1 + W_2 = 0) \\cr &\\quad = 2(0.015) + 2(0.05) \\cr &\\qquad + 0.09 \\cr &\\quad = 0.03 + 0.1 + 0.09 \\cr &\\quad = 0.22 \\end{aligned}",
    "<strong>(c) Finding the Conditional Probability:</strong><br><br>By definition of conditional probability:\\begin{aligned} &\\text{P}(W_1 + W_2 = 0 \\mid W_1 > 0) \\cr & = \\dfrac{\\text{P}((W_1 + W_2 = 0) \\cap (W_1 > 0))}{\\text{P}(W_1 > 0)} \\end{aligned}<br>The condition $W_1 > 0$ means $W_1 \\in \\{1, 2\\}$:\\begin{aligned} &\\text{P}(W_1 > 0)\\cr & \\quad= \\text{P}(W = 1) + \\text{P}(W = 2) \\cr &\\quad= 0.2 + 0.15 \\cr & \\quad= 0.35 \\end{aligned}<br>The intersection contains pairs where $w_1 + w_2 = 0$ and $w_1 > 0$:\\begin{aligned} (1, -1)&: 0.2 \\times 0.25 = 0.05 \\cr (2, -2)&: 0.15 \\times 0.1 = 0.015 \\cr \\text{Intersection} &= 0.05 + 0.015 \\cr &= 0.065 \\end{aligned}<br>Evaluating the ratio:\\begin{aligned} \\text{P} &= \\dfrac{0.065}{0.35} \\cr &= \\dfrac{65}{350} \\cr &= \\dfrac{13}{70} \\end{aligned}",
    "Final Answer: (a) $a = 0.2$, (b) $0.22$, (c) $\\dfrac{13}{70}$"
  ],
  "pi_options": [
    {
      "ans": "(a) $a = 0.2$, (b) $0.22$, (c) $\\dfrac{13}{44}$",
      "feedback": "Conditioning on the sum being zero rather than $W_1 > 0$ evaluates $\\frac{0.065}{0.22} = \\frac{13}{44}$."
    },
    {
      "ans": "(a) $a = 0.2$, (b) $0.13$, (c) $\\dfrac{13}{70}$",
      "feedback": "Forgetting the pair $(0, 0)$ when calculating the sum gives $0.22 - 0.09 = 0.13$ in part (b)."
    },
    {
      "ans": "(a) $a = 0.2$, (b) $0.22$, (c) $\\dfrac{1}{7}$",
      "feedback": "Counting only $(1, -1)$ in the intersection gives $\\frac{0.05}{0.35} = \\frac{1}{7}$, missing the pair $(2, -2)$."
    }
  ],
  "bradley_insight": {
    "type": "caution",
    "title": "The Head Teacher's Eye: Zero Sums Include (0, 0)",
    "content": "When finding pairs summing to zero, candidates often pair up positives with negatives like $(-2, 2)$ and $(-1, 1)$, but completely forget $(0, 0)$. When $0$ is in the support, $0 + 0 = 0$ is a valid outcome that must be included."
  }
},
{
  "id": "050130",
  "group_id": "050126",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Discrete Random Variables",
  "subtopic": [
    "Exact Fractions",
    "Absolute Difference of Observations",
    "Compound Inequalities"
  ],
  "img": false,
  "question": "The discrete random variable $T$ has the probability distribution given in the table below:<br><br><table style='width:100%; max-width:180px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:5px; border:1px solid #ccc;'>$t$</th><th style='padding:5px; border:1px solid #ccc;'>$\\text{P}(T = t)$</th></tr></thead><tbody><tr><td style='padding:5px; border:1px solid #ccc;'>$1$</td><td style='padding:5px; border:1px solid #ccc;'>$\\dfrac{1}{6}$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>$2$</td><td style='padding:5px; border:1px solid #ccc;'>$\\dfrac{1}{3}$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>$3$</td><td style='padding:5px; border:1px solid #ccc;'>$\\dfrac{1}{4}$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>$4$</td><td style='padding:5px; border:1px solid #ccc;'>$k$</td></tr></tbody></table><br><strong>(a)</strong> Find the value of $k$ as an exact fraction.<br><br>$T_1$ and $T_2$ are two independent observations of $T$.<br><br><strong>(b)</strong> Find the probability that $|T_1 - T_2| = 1$. Give your answer as an irreducible fraction.<br><br><strong>(c)</strong> Find $\\text{P}(T_1 + T_2 \\ge 6)$, giving your answer as an irreducible fraction.",
  "steps": [
    "<strong>(a) Finding $k$ as an Exact Fraction:</strong><br><br>Total probability equals $1$:\\begin{aligned} \\sum \\text{P}(T = t) &= 1 \\cr \\dfrac{1}{6} + \\dfrac{1}{3} + \\dfrac{1}{4} + k &= 1 \\cr \\dfrac{2 + 4 + 3}{12} + k &= 1 \\cr \\dfrac{9}{12} + k &= 1 \\cr k &= \\dfrac{3}{12} \\cr &= \\dfrac{1}{4} \\end{aligned}",
    "<strong>(b) Finding $\\text{P}(|T_1 - T_2| = 1)$:</strong><br><br>Pairs where the absolute difference is $1$ are:<br>$$(1, 2), (2, 1), (2, 3),$$ $$(3, 2), (3, 4), (4, 3)$$<br>Calculate probabilities for each unordered combination:\\begin{aligned} \\text{P}(1, 2) &= \\dfrac{1}{6} \\times \\dfrac{1}{3} \\cr &= \\dfrac{1}{18} \\cr \\text{P}(2, 3) &= \\dfrac{1}{3} \\times \\dfrac{1}{4} \\cr &= \\dfrac{1}{12} \\cr \\text{P}(3, 4) &= \\dfrac{1}{4} \\times \\dfrac{1}{4} \\cr &= \\dfrac{1}{16} \\end{aligned}<br>Summing all ordered pairs:\\begin{aligned} &\\text{P}(|T_1 - T_2| = 1) \\cr &\\quad = 2\\left(\\dfrac{1}{18}\\right) + 2\\left(\\dfrac{1}{12}\\right) \\cr &\\qquad + 2\\left(\\dfrac{1}{16}\\right) \\cr &\\quad = \\dfrac{1}{9} + \\dfrac{1}{6} + \\dfrac{1}{8} \\cr &\\quad = \\dfrac{8 + 12 + 9}{72} \\cr &\\quad = \\dfrac{29}{72} \\end{aligned}",
    "<strong>(c) Finding $\\text{P}(T_1 + T_2 \\ge 6)$:</strong><br><br>Outcomes with sums $6$, $7$, or $8$:\\begin{aligned} \\text{Sum } 6&: (2, 4), (3, 3), (4, 2) \\cr \\text{Sum } 7&: (3, 4), (4, 3) \\cr \\text{Sum } 8&: (4, 4) \\end{aligned}<br>Evaluating the probabilities:\\begin{aligned} \\text{P}(2, 4) + \\text{P}(4, 2) &= 2\\left(\\dfrac{1}{3} \\times \\dfrac{1}{4}\\right) \\cr &= \\dfrac{1}{6} \\cr \\text{P}(3, 3) &= \\left(\\dfrac{1}{4}\\right)^2 \\cr &= \\dfrac{1}{16} \\cr \\text{P}(3, 4) + \\text{P}(4, 3) &= 2\\left(\\dfrac{1}{4} \\times \\dfrac{1}{4}\\right) \\cr &= \\dfrac{1}{8} \\cr \\text{P}(4, 4) &= \\left(\\dfrac{1}{4}\\right)^2 \\cr &= \\dfrac{1}{16} \\end{aligned}<br>Summing these components:\\begin{aligned} &\\text{P}(T_1 + T_2 \\ge 6) \\cr &\\quad = \\dfrac{1}{6} + \\dfrac{1}{16} + \\dfrac{1}{8} + \\dfrac{1}{16} \\cr &\\quad = \\dfrac{1}{6} + \\dfrac{1}{4} \\cr &\\quad = \\dfrac{2 + 3}{12} \\cr &\\quad = \\dfrac{5}{12} \\end{aligned}",
    "Final Answer: (a) $k = \\dfrac{1}{4}$, (b) $\\dfrac{29}{72}$, (c) $\\dfrac{5}{12}$"
  ],
  "pi_options": [
    {
      "ans": "(a) $k = \\dfrac{1}{4}$, (b) $\\dfrac{29}{144}$, (c) $\\dfrac{5}{12}$",
      "feedback": "Omitting the factor of $2$ for ordered pairs in part (b) results in $\\frac{1}{18} + \\frac{1}{12} + \\frac{1}{16} = \\frac{29}{144}$."
    },
    {
      "ans": "(a) $k = \\dfrac{1}{4}$, (b) $\\dfrac{29}{72}$, (c) $\\dfrac{3}{8}$",
      "feedback": "Forgetting the maximum outcome $(4, 4)$ when summing to at least $6$ yields $\\frac{5}{12} - \\frac{1}{16} = \\frac{17}{48}$ or $\\frac{3}{8}$."
    },
    {
      "ans": "(a) $k = \\dfrac{1}{3}$, (b) $\\dfrac{29}{72}$, (c) $\\dfrac{5}{12}$",
      "feedback": "An arithmetic error when adding the fractions leads to $1 - \\frac{2}{3} = \\frac{1}{3}$ instead of $\\frac{1}{4}$ for $k$."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Systematic Summation of Fractions",
    "content": "When evaluating sums of independent observations with fractional probabilities, group identical terms before converting to a common denominator: $2\\left(\\frac{1}{16}\\right) + \\frac{1}{8} = \\frac{1}{8} + \\frac{1}{8} = \\frac{1}{4}$. Grouping powers of $2$ reduces large denominators and prevents arithmetic errors."
  }
},
{
  "id": "050131",
  "group_id": "050131",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Statistical Measures",
  "subtopic": [
    "Mean",
    "Rolling Means",
    "Outlier Identification"
  ],
  "img": false,
  "question": "Jack and Oliver each wear a fitness tracker that records the number of steps they take per day. The daily results for a 7-day period are shown in the table below:<br><br><table style='width:100%; max-width:240px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:5px; border:1px solid #ccc;'>Day</th><th style='padding:5px; border:1px solid #ccc;'>Jack</th><th style='padding:5px; border:1px solid #ccc;'>Oliver</th></tr></thead><tbody><tr><td style='padding:5px; border:1px solid #ccc;'>1</td><td style='padding:5px; border:1px solid #ccc;'>$8450$</td><td style='padding:5px; border:1px solid #ccc;'>$7850$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>2</td><td style='padding:5px; border:1px solid #ccc;'>$9210$</td><td style='padding:5px; border:1px solid #ccc;'>$8420$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>3</td><td style='padding:5px; border:1px solid #ccc;'>$8860$</td><td style='padding:5px; border:1px solid #ccc;'>$8190$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>4</td><td style='padding:5px; border:1px solid #ccc;'>$9580$</td><td style='padding:5px; border:1px solid #ccc;'>$8760$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>5</td><td style='padding:5px; border:1px solid #ccc;'>$8940$</td><td style='padding:5px; border:1px solid #ccc;'>$8950$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>6</td><td style='padding:5px; border:1px solid #ccc;'>$9340$</td><td style='padding:5px; border:1px solid #ccc;'>$7630$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>7</td><td style='padding:5px; border:1px solid #ccc;'>$9320$</td><td style='padding:5px; border:1px solid #ccc;'>$9350$</td></tr></tbody></table><br>The 7-day mean is defined as the mean number of steps taken over the last 7 days. The 7-day mean for Jack is $9100$.<br><br><strong>(a)</strong> Calculate the 7-day mean for Oliver.<br><br>At the end of day 8, a new 7-day mean is calculated for each person by including the number of steps taken on day 8 and omitting the number of steps taken on day 1. On day 8, Jack takes $9500$ steps.<br><br><strong>(b)</strong> Determine the number of steps Oliver must take on day 8 so that his new 7-day mean at the end of day 8 is identical to Jack's new 7-day mean.<br><br>Over a long period of monitoring, Oliver's daily step count has a mean of $8800$ and a standard deviation of $920$.<br><br><strong>(c)</strong> Determine whether the number of steps Oliver needs to take on day 8 found in part <strong>(b)</strong> is unusually high, using the criterion of being more than $2$ standard deviations above his long-term mean.",
  "steps": [
    "<strong>(a) Calculating Oliver's 7-Day Mean:</strong><br><br>Sum Oliver's step counts for the 7 days:\\begin{aligned} &\\text{Total} \\cr &\\quad = 7850 \\cr &\\qquad + 8420 \\cr &\\qquad + 8190 \\cr &\\qquad + 8760 \\cr &\\qquad + 8950 \\cr &\\qquad + 7630 \\cr &\\qquad + 9350 \\cr &\\quad = 59\\,150 \\end{aligned}<br>Calculate the mean:\\begin{aligned} &\\text{Mean} \\cr &\\quad = \\dfrac{59\\,150}{7} \\cr &\\quad = 8450 \\end{aligned}",
    "<strong>(b) Updating Rolling Means for Day 8:</strong><br><br>Find Jack's initial total steps:\\begin{aligned} &\\text{Jack Total} \\cr &\\quad = 7 \\times 9100 \\cr &\\quad = 63\\,700 \\end{aligned}<br>Calculate Jack's new total for days 2 to 8:\\begin{aligned} &\\text{New Total} \\cr &\\quad = 63\\,700 \\cr &\\qquad - 8450 \\cr &\\qquad + 9500 \\cr &\\quad = 64\\,750 \\end{aligned}<br>For Oliver to have the same 7-day mean, his total for days 2 to 8 must also equal $64\\,750$.<br><br>Calculate Oliver's sum for days 2 to 7:\\begin{aligned} &\\text{Days 2 to 7} \\cr &\\quad = 59\\,150 \\cr &\\qquad - 7850 \\cr &\\quad = 51\\,300 \\end{aligned}<br>Find Oliver's required steps on day 8:\\begin{aligned} &\\text{Day 8 Steps} \\cr &\\quad = 64\\,750 \\cr &\\qquad - 51\\,300 \\cr &\\quad = 13\\,450 \\end{aligned}",
    "<strong>(c) Testing for an Unusually High Value:</strong><br><br>Calculate the threshold of $2$ standard deviations above Oliver's long-term mean:\\begin{aligned} &\\text{Threshold} \\cr &\\quad = 8800 \\cr &\\qquad + 2(920) \\cr &\\quad = 8800 \\cr &\\qquad + 1840 \\cr &\\quad = 10\\,640 \\end{aligned}<br>Compare the required day 8 step count:\\begin{aligned} 13\\,450 > 10\\,640 \\end{aligned}<br>Because $13\\,450$ exceeds this threshold, the number of steps is unusually high.",
    "Final Answer: (a) $8450$, (b) $13\\,450$, (c) Unusually high"
  ],
  "pi_options": [
    {
      "ans": "(a) $8450$, (b) $12\\,650$, (c) Unusually high",
      "feedback": "Subtracting Jack's day 1 value rather than Oliver's day 1 value of $7850$ gives $12\\,650$."
    },
    {
      "ans": "(a) $8450$, (b) $13\\,450$, (c) Not unusually high",
      "feedback": "Comparing against $3$ standard deviations ($8800 + 2760 = 11\\,560$) or inverting the comparison incorrectly concludes it is not unusually high."
    },
    {
      "ans": "(a) $8450$, (b) $14\\,250$, (c) Unusually high",
      "feedback": "Adding day 1 rather than subtracting it when updating the 7-day window gives $14\\,250$."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Updating Moving Totals Efficiently",
    "content": "When updating a moving average, you do not need to re-add all the intermediate days. The new total is always:\\begin{aligned} &\\text{New Total} \\cr &\\quad = \\text{Old Total} \\cr &\\qquad - \\text{Oldest Day} \\cr &\\qquad + \\text{Newest Day} \\end{aligned}Working with totals rather than means eliminates rounding errors."
  }
},
{
  "id": "050132",
  "group_id": "050131",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Statistical Measures",
  "subtopic": [
    "Moving Averages",
    "Percentage Increase in Mean",
    "Outlier Testing"
  ],
  "img": false,
  "question": "A local coffee shop records the number of customers served each weekday during a 5-day working week (Monday to Friday):<br><br><table style='width:100%; max-width:180px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:5px; border:1px solid #ccc;'>Day</th><th style='padding:5px; border:1px solid #ccc;'>Customers</th></tr></thead><tbody><tr><td style='padding:5px; border:1px solid #ccc;'>Mon</td><td style='padding:5px; border:1px solid #ccc;'>$142$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>Tue</td><td style='padding:5px; border:1px solid #ccc;'>$158$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>Wed</td><td style='padding:5px; border:1px solid #ccc;'>$165$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>Thu</td><td style='padding:5px; border:1px solid #ccc;'>$149$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>Fri</td><td style='padding:5px; border:1px solid #ccc;'>$186$</td></tr></tbody></table><br><strong>(a)</strong> Calculate the 5-day mean number of customers for this working week.<br><br>At the end of Saturday (Day 6), a new 5-day rolling mean is calculated by including Saturday's customer count and omitting Monday's count. The manager wishes the new 5-day rolling mean to represent a $5\\%$ increase compared to the Monday–Friday mean.<br><br><strong>(b)</strong> Determine the number of customers that must be served on Saturday to achieve this target.<br><br>Historic records show that Saturday customer numbers have a mean of $155$ and a standard deviation of $12$.<br><br><strong>(c)</strong> Determine whether the required number of customers on Saturday found in part <strong>(b)</strong> is an outlier, defined as any value lying more than $2$ standard deviations from the historic Saturday mean.",
  "steps": [
    "<strong>(a) Calculating the Initial 5-Day Mean:</strong><br><br>Sum the customer counts from Monday to Friday:\\begin{aligned} &\\text{Total} \\cr &\\quad = 142 \\cr &\\qquad + 158 \\cr &\\qquad + 165 \\cr &\\qquad + 149 \\cr &\\qquad + 186 \\cr &\\quad = 800 \\end{aligned}<br>Calculate the mean:\\begin{aligned} &\\text{Mean} \\cr &\\quad = \\dfrac{800}{5} \\cr &\\quad = 160 \\end{aligned}",
    "<strong>(b) Finding the Required Saturday Count:</strong><br><br>Calculate the target 5-day mean with a $5\\%$ increase:\\begin{aligned} &\\text{Target Mean} \\cr &\\quad = 160 \\times 1.05 \\cr &\\quad = 168 \\end{aligned}<br>Find the required total for the new 5-day window:\\begin{aligned} &\\text{New Total} \\cr &\\quad = 168 \\times 5 \\cr &\\quad = 840 \\end{aligned}<br>Calculate the sum for Tuesday to Friday:\\begin{aligned} &\\text{Tue to Fri} \\cr &\\quad = 800 - 142 \\cr &\\quad = 658 \\end{aligned}<br>Determine Saturday's required count:\\begin{aligned} &\\text{Saturday} \\cr &\\quad = 840 - 658 \\cr &\\quad = 182 \\end{aligned}",
    "<strong>(c) Testing Saturday for Outlier Status:</strong><br><br>Calculate the upper outlier boundary for historic Saturday counts:\\begin{aligned} &\\text{Upper Bound} \\cr &\\quad = 155 \\cr &\\qquad + 2(12) \\cr &\\quad = 155 + 24 \\cr &\\quad = 179 \\end{aligned}<br>Compare Saturday's count:\\begin{aligned} 182 > 179 \\end{aligned}<br>Because $182$ exceeds the upper limit of $179$, it is classified as an outlier.",
    "Final Answer: (a) $160$, (b) $182$, (c) Outlier"
  ],
  "pi_options": [
    {
      "ans": "(a) $160$, (b) $174$, (c) Not an outlier",
      "feedback": "Applying the $5\\%$ increase directly to Saturday's historic mean rather than the rolling weekday mean gives $174$."
    },
    {
      "ans": "(a) $160$, (b) $182$, (c) Not an outlier",
      "feedback": "Testing against $3$ standard deviations ($155 + 36 = 191$) rather than the specified $2$ standard deviations incorrectly concludes it is not an outlier."
    },
    {
      "ans": "(a) $160$, (b) $196$, (c) Outlier",
      "feedback": "Forgetting to omit Monday's count from the total window calculation yields $840 - 644 = 196$."
    }
  ],
  "bradley_insight": {
    "type": "caution",
    "title": "The Head Teacher's Eye: Percentage Change on Rolling Means",
    "content": "A $5\\%$ increase on a 5-day mean increases the total sum by $5 \\times (160 \\times 0.05) = 40$. Since the new day replaces an old day, the change in the total is simply:\\begin{aligned} &\\text{New Day} - \\text{Old Day} \\cr &\\quad = 40 \\end{aligned}Hence Saturday must be $142 + 40 = 182$."
  }
},
{
  "id": "050133",
  "group_id": "050131",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Statistical Measures",
  "subtopic": [
    "Linear Coding",
    "Rolling Means",
    "Standardised Scores"
  ],
  "img": false,
  "question": "A manufacturing facility records its peak daily electrical power demand, $x$ in megawatts (MW), over a 7-day period. To simplify calculations, the data are coded using $y = x - 400$. The recorded values are given below:<br><br><table style='width:100%; max-width:220px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:5px; border:1px solid #ccc;'>Day</th><th style='padding:5px; border:1px solid #ccc;'>$x$ (MW)</th><th style='padding:5px; border:1px solid #ccc;'>$y$</th></tr></thead><tbody><tr><td style='padding:5px; border:1px solid #ccc;'>1</td><td style='padding:5px; border:1px solid #ccc;'>$412$</td><td style='padding:5px; border:1px solid #ccc;'>$12$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>2</td><td style='padding:5px; border:1px solid #ccc;'>$408$</td><td style='padding:5px; border:1px solid #ccc;'>$8$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>3</td><td style='padding:5px; border:1px solid #ccc;'>$415$</td><td style='padding:5px; border:1px solid #ccc;'>$15$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>4</td><td style='padding:5px; border:1px solid #ccc;'>$395$</td><td style='padding:5px; border:1px solid #ccc;'>$-5$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>5</td><td style='padding:5px; border:1px solid #ccc;'>$402$</td><td style='padding:5px; border:1px solid #ccc;'>$2$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>6</td><td style='padding:5px; border:1px solid #ccc;'>$410$</td><td style='padding:5px; border:1px solid #ccc;'>$10$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>7</td><td style='padding:5px; border:1px solid #ccc;'>$407$</td><td style='padding:5px; border:1px solid #ccc;'>$7$</td></tr></tbody></table><br><strong>(a)</strong><br><strong>(i)</strong> Calculate the mean of the coded values, $\\bar{y}$.<br><strong>(ii)</strong> Hence find the mean peak power demand, $\\bar{x}$, for the 7-day period.<br><br>At the end of day 8, a new 7-day rolling mean is calculated by including day 8 and omitting day 1. The factory manager requires the new 7-day mean peak demand to be $410\\text{ MW}$.<br><br><strong>(b)</strong> Calculate the peak power demand required on day 8 to achieve this rolling mean.<br><br>Historical records indicate that the daily peak power demand has a mean of $405\\text{ MW}$ and a standard deviation of $10\\text{ MW}$.<br><br><strong>(c)</strong> Calculate the $z$-score for the day 8 power demand found in part <strong>(b)</strong>, and state whether this demand represents an anomalous reading.",
  "steps": [
    "<strong>(a)(i) Calculating the Coded Mean $\\bar{y}$:</strong><br><br>Sum the coded values:\\begin{aligned} &\\sum y \\cr &\\quad = 12 + 8 \\cr &\\qquad + 15 - 5 \\cr &\\qquad + 2 + 10 \\cr &\\qquad + 7 \\cr &\\quad = 49 \\end{aligned}<br>Calculate $\\bar{y}$:\\begin{aligned} &\\bar{y} \\cr &\\quad = \\dfrac{49}{7} \\cr &\\quad = 7 \\end{aligned}",
    "<strong>(a)(ii) Finding the Uncoded Mean $\\bar{x}$:</strong><br><br>Using the coding relation $\\bar{x} = \\bar{y} + 400$:\\begin{aligned} &\\bar{x} \\cr &\\quad = 7 + 400 \\cr &\\quad = 407\\text{ MW} \\end{aligned}",
    "<strong>(b) Finding the Required Power Demand on Day 8:</strong><br><br>Calculate the initial 7-day total for $x$:\\begin{aligned} &\\text{Initial Total} \\cr &\\quad = 407 \\times 7 \\cr &\\quad = 2849 \\end{aligned}<br>Calculate the target total for the new 7-day window:\\begin{aligned} &\\text{New Total} \\cr &\\quad = 410 \\times 7 \\cr &\\quad = 2870 \\end{aligned}<br>Subtract day 1 demand from the initial total:\\begin{aligned} &\\text{Days 2 to 7} \\cr &\\quad = 2849 - 412 \\cr &\\quad = 2437 \\end{aligned}<br>Determine day 8 demand:\\begin{aligned} &\\text{Day 8 Demand} \\cr &\\quad = 2870 - 2437 \\cr &\\quad = 433\\text{ MW} \\end{aligned}",
    "<strong>(c) Calculating the $z$-Score and Checking for Anomaly:</strong><br><br>Calculate the standardised $z$-score:\\begin{aligned} &z \\cr &\\quad = \\dfrac{x - \\mu}{\\sigma} \\cr &\\quad = \\dfrac{433 - 405}{10} \\cr &\\quad = \\dfrac{28}{10} \\cr &\\quad = 2.8 \\end{aligned}<br>Because $|z| = 2.8 > 2$, the demand lies more than $2$ standard deviations from the historic mean and represents an anomalous reading.",
    "Final Answer: (a)(i) $7$, (ii) $407\\text{ MW}$, (b) $433\\text{ MW}$, (c) $z = 2.8$, anomalous"
  ],
  "pi_options": [
    {
      "ans": "(a)(i) $7$, (ii) $407\\text{ MW}$, (b) $433\\text{ MW}$, (c) $z = 1.4$, not anomalous",
      "feedback": "Using an incorrect standard deviation of $20$ rather than $10$ gives $z = 1.4$."
    },
    {
      "ans": "(a)(i) $7$, (ii) $407\\text{ MW}$, (b) $421\\text{ MW}$, (c) $z = 1.6$, not anomalous",
      "feedback": "Omitting day 7 instead of day 1 when updating the window yields $421\\text{ MW}$ and $z = 1.6$."
    },
    {
      "ans": "(a)(i) $7$, (ii) $393\\text{ MW}$, (b) $433\\text{ MW}$, (c) $z = 2.8$, anomalous",
      "feedback": "Subtracting the coded mean from $400$ instead of adding it incorrectly gives $\\bar{x} = 393\\text{ MW}$."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Linear Coding Rules",
    "content": "For a linear code $y = \\frac{x - a}{b}$, the mean transforms directly according to the formula:\\begin{aligned} &\\bar{y} \\cr &\\quad = \\dfrac{\\bar{x} - a}{b} \\end{aligned}However, the standard deviation is affected only by the scale factor $b$ and is independent of the shift $a$."
  }
},
{
  "id": "050134",
  "group_id": "050131",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Statistical Measures",
  "subtopic": [
    "Updating Mean and Standard Deviation",
    "Summary Statistics"
  ],
  "img": false,
  "question": "A logistics warehouse records the time taken, $t$ in minutes, to dispatch priority parcels across $7$ consecutive shifts. The initial summary statistics for the $7$ shifts are:<br>$$\\sum t = 1400 \\quad \\text{and} \\quad \\sum t^2 = 281\\,400$$<br><strong>(a)</strong> Calculate:<br><strong>(i)</strong> the mean dispatch time, $\\bar{t}$;<br><strong>(ii)</strong> the standard deviation of the dispatch times, correct to 2 decimal places.<br><br>At the end of shift 8, a new 7-shift rolling statistic is computed by omitting shift 1 (where $t = 190\\text{ minutes}$) and including shift 8 (where $t = 211\\text{ minutes}$).<br><br><strong>(b)</strong> Calculate for the new 7-shift period:<br><strong>(i)</strong> the updated mean dispatch time;<br><strong>(ii)</strong> the updated standard deviation, correct to 2 decimal places.<br><br><strong>(c)</strong> State, with a reason, whether the dispatch times in the second 7-shift period were more consistent or less consistent than in the first 7-shift period.",
  "steps": [
    "<strong>(a)(i) Calculating the Initial Mean $\\bar{t}$:</strong><br><br>\\begin{aligned} &\\bar{t} \\cr &\\quad = \\dfrac{\\sum t}{n} \\cr &\\quad = \\dfrac{1400}{7} \\cr &\\quad = 200\\text{ mins} \\end{aligned}",
    "<strong>(a)(ii) Calculating the Initial Standard Deviation:</strong><br><br>Using the summary formula:\\begin{aligned} &\\sigma \\cr &\\quad = \\sqrt{\\dfrac{\\sum t^2}{n} - \\bar{t}^2} \\cr &\\quad = \\sqrt{\\dfrac{281\\,400}{7} - 200^2} \\cr &\\quad = \\sqrt{40\\,200 - 40\\,000} \\cr &\\quad = \\sqrt{200} \\cr &\\quad \\approx 14.14\\text{ mins} \\end{aligned}",
    "<strong>(b)(i) Updating the Mean:</strong><br><br>Update the sum of $t$ by removing shift 1 and adding shift 8:\\begin{aligned} &\\text{New } \\sum t \\cr &\\quad = 1400 - 190 \\cr &\\qquad + 211 \\cr &\\quad = 1421 \\end{aligned}<br>Calculate the updated mean:\\begin{aligned} &\\text{New Mean} \\cr &\\quad = \\dfrac{1421}{7} \\cr &\\quad = 203\\text{ mins} \\end{aligned}",
    "<strong>(b)(ii) Updating the Standard Deviation:</strong><br><br>Update the sum of squares:\\begin{aligned} &190^2 = 36\\,100 \\cr &211^2 = 44\\,521 \\end{aligned}<br>\\begin{aligned} &\\text{New } \\sum t^2 \\cr &\\quad = 281\\,400 \\cr &\\qquad - 36\\,100 \\cr &\\qquad + 44\\,521 \\cr &\\quad = 289\\,821 \\end{aligned}<br>Calculate the new standard deviation:\\begin{aligned} &\\text{New } \\sigma \\cr &\\quad = \\sqrt{\\dfrac{289\\,821}{7} - 203^2} \\cr &\\quad = \\sqrt{41\\,403 - 41\\,209} \\cr &\\quad = \\sqrt{194} \\cr &\\quad \\approx 13.93\\text{ mins} \\end{aligned}",
    "<strong>(c) Evaluating Consistency:</strong><br><br>Consistency is measured by the spread of the data.<br><br>Because the standard deviation decreased from $14.14\\text{ mins}$ to $13.93\\text{ mins}$, the dispatch times in the second 7-shift period were <strong>more consistent</strong>.",
    "Final Answer: (a)(i) $200\\text{ mins}$, (ii) $14.14\\text{ mins}$, (b)(i) $203\\text{ mins}$, (ii) $13.93\\text{ mins}$, (c) More consistent"
  ],
  "pi_options": [
    {
      "ans": "(a)(i) $200\\text{ mins}$, (ii) $14.14\\text{ mins}$, (b)(i) $203\\text{ mins}$, (ii) $13.93\\text{ mins}$, (c) Less consistent",
      "feedback": "Confusing an increase in the mean with an increase in variability incorrectly concludes the process is less consistent."
    },
    {
      "ans": "(a)(i) $200\\text{ mins}$, (ii) $14.14\\text{ mins}$, (b)(i) $203\\text{ mins}$, (ii) $15.28\\text{ mins}$, (c) Less consistent",
      "feedback": "Adding $190^2$ and subtracting $211^2$ reverses the data modification and leads to an incorrect standard deviation of $15.28$."
    },
    {
      "ans": "(a)(i) $200\\text{ mins}$, (ii) $15.28\\text{ mins}$, (b)(i) $203\\text{ mins}$, (ii) $13.93\\text{ mins}$, (c) More consistent",
      "feedback": "Dividing by $n - 1 = 6$ rather than $n = 7$ applies the sample standard deviation formula instead of the population formula."
    }
  ],
  "bradley_insight": {
    "type": "deeper",
    "title": "The Head Teacher's Eye: Consistency Means Smaller Spread",
    "content": "In examination questions, consistency refers strictly to measures of dispersion (standard deviation or interquartile range), never to the mean. A higher mean with a lower standard deviation represents faster or higher output with greater consistency."
  }
},
{
  "id": "050135",
  "group_id": "050131",
  "branch": "Statistics",
  "board": "OCR MEI",
  "level": "AS",
  "major_area": "Statistics",
  "topic": "Statistical Measures",
  "subtopic": [
    "Quartiles",
    "Interquartile Range",
    "Outlier Identification",
    "Comparing Distributions"
  ],
  "img": false,
  "question": "Two courier drivers, Driver A and Driver B, each record their delivery times (in minutes) for a standard delivery route on $7$ consecutive days. The times are shown below in ascending order:<br><br>Driver A:<br>$$38, \\; 41, \\; 42, \\; 45,$$<br>$$46, \\; 48, \\; 62$$<br><br>Driver B:<br>$$40, \\; 42, \\; 43, \\; 44,$$<br>$$45, \\; 47, \\; 49$$<br><br><strong>(a)</strong> For Driver A:<br><strong>(i)</strong> Find the median delivery time.<br><strong>(ii)</strong> Find the lower quartile ($Q_1$) and upper quartile ($Q_3$).<br><strong>(iii)</strong> Using the rule that an outlier is any value greater than $Q_3 + 1.5 \\times \\text{IQR}$, show that the delivery time of $62\\text{ minutes}$ is an outlier.<br><br><strong>(b)</strong> For Driver B, the median is $44\\text{ minutes}$ and the interquartile range is $5\\text{ minutes}$.<br><br>Compare the delivery times of Driver A and Driver B in context, referencing both an appropriate measure of central tendency and an appropriate measure of spread.",
  "steps": [
    "<strong>(a)(i) Finding the Median for Driver A:</strong><br><br>For $n = 7$ ordered items, the median position is $\\frac{7 + 1}{2} = 4$th value:\\begin{aligned} &\\text{Median} \\cr &\\quad = 45\\text{ mins} \\end{aligned}",
    "<strong>(a)(ii) Finding the Quartiles for Driver A:</strong><br><br>The lower quartile position is $\\frac{7 + 1}{4} = 2$nd value:\\begin{aligned} &Q_1 \\cr &\\quad = 41\\text{ mins} \\end{aligned}<br>The upper quartile position is $\\frac{3(7 + 1)}{4} = 6$th value:\\begin{aligned} &Q_3 \\cr &\\quad = 48\\text{ mins} \\end{aligned}",
    "<strong>(a)(iii) Demonstrating that 62 is an Outlier:</strong><br><br>Calculate the interquartile range:\\begin{aligned} &\\text{IQR} \\cr &\\quad = Q_3 - Q_1 \\cr &\\quad = 48 - 41 \\cr &\\quad = 7\\text{ mins} \\end{aligned}<br>Calculate the upper outlier boundary:\\begin{aligned} &\\text{Upper Bound} \\cr &\\quad = Q_3 \\cr &\\qquad + 1.5(\\text{IQR}) \\cr &\\quad = 48 \\cr &\\qquad + 1.5(7) \\cr &\\quad = 48 + 10.5 \\cr &\\quad = 58.5\\text{ mins} \\end{aligned}<br>Because $62 > 58.5$, the delivery time of $62\\text{ minutes}$ is confirmed as an outlier.",
    "<strong>(b) Comparative Analysis in Context:</strong><br><br>Comparing central tendency (median):<br>Driver B's median of $44\\text{ mins}$ is lower than Driver A's median of $45\\text{ mins}$, indicating Driver B is generally faster on average.<br><br>Comparing spread (interquartile range):<br>Driver B's IQR of $5\\text{ mins}$ is smaller than Driver A's IQR of $7\\text{ mins}$, indicating Driver B has more consistent delivery times.",
    "Final Answer: (a)(i) $45\\text{ mins}$, (ii) $Q_1 = 41\\text{ mins}$, $Q_3 = 48\\text{ mins}$, (iii) $58.5\\text{ mins}$, outlier, (b) Driver B faster and more consistent"
  ],
  "pi_options": [
    {
      "ans": "(a)(i) $45\\text{ mins}$, (ii) $Q_1 = 41\\text{ mins}$, $Q_3 = 48\\text{ mins}$, (iii) $58.5\\text{ mins}$, outlier, (b) Driver A faster and more consistent",
      "feedback": "Inverting the comparisons incorrectly identifies Driver A as faster despite having a higher median of $45$ compared to $44$."
    },
    {
      "ans": "(a)(i) $45\\text{ mins}$, (ii) $Q_1 = 41.5\\text{ mins}$, $Q_3 = 47.5\\text{ mins}$, (iii) $56.5\\text{ mins}$, outlier, (b) Driver B faster and more consistent",
      "feedback": "Interpolating between values rather than using the exact 2nd and 6th discrete ranks gives $Q_1 = 41.5$ and $Q_3 = 47.5$."
    },
    {
      "ans": "(a)(i) $45\\text{ mins}$, (ii) $Q_1 = 41\\text{ mins}$, $Q_3 = 48\\text{ mins}$, (iii) $55.0\\text{ mins}$, not an outlier, (b) Driver B faster and more consistent",
      "feedback": "Using $1.0 \\times \\text{IQR}$ rather than $1.5 \\times \\text{IQR}$ calculates $48 + 7 = 55$ and incorrectly concludes $62$ is not an outlier."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Two-Part Contextual Comparison",
    "content": "When asked to compare two distributions, you must always provide two separate statements with context and numerical support: one comparing a measure of central tendency (median or mean) and one comparing a measure of dispersion (IQR or standard deviation)."
  }
}
];