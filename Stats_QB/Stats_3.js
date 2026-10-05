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
        "content": "When one random variable is discrete uniform (like Bob's fair die with $\\text{P}(B = b) = 0.25$), notice the elegant algebraic simplification in part (a): \\begin{aligned} $ \\sum \\text{P}(A = k)\\text{P}(B = k)& \\qquad = 0.25 \\sum \\text{P}(A = k)& \\qquad= 0.25(1) & \\qquad= 0.25\\end{aligned} No matter how wildly Alice's die is biased, the probability of rolling the same score against a fair $4$-sided die is ALWAYS $\\frac{1}{4}$!"
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
}
];