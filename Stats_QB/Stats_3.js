window.ALEVEL_QUESTIONS = [
{
    "id": "050101",
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
}
];