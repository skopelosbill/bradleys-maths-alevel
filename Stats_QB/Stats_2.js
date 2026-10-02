window.ALEVEL_QUESTIONS = [
{
    "id": "050051",
    "group_id": "050051",
    "branch": "Statistics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Statistical Distributions",
    "topic": "Binomial and Discrete Series Modeling",
    "subtopic": [
        "Binomial Assumptions",
        "Geometric First Success",
        "Arithmetic Series Probabilities"
    ],
    "img": false,
    "question": "In a school sports trial, students repeatedly throw a beanbag into a target hoop.<br><br>For each student, the random variable $H$ represents the number of hits in the first $10$ throws. Coach Adams models $H$ as $B(10, 0.2)$.<br><br><strong>(a)</strong> State two assumptions Coach Adams makes.<br><strong>(b)</strong> Calculate $\\text{P}(H \\ge 3)$.<br><br>Let $F$ be the throw number of the first hit. Using Coach Adams' model:<br><strong>(c)</strong> Find $\\text{P}(F = 4)$.<br><br>Coach Baker models $\\text{P}(F = n) = 0.02 + (n - 1)\\beta$ for $n \\in \\{1, 2, \\dots, 8\\}$.<br><br><strong>(d)</strong> Find the value of $\\beta$.<br><strong>(e)</strong> Find $\\text{P}(F = 4)$ using Coach Baker's model.<br><strong>(f)</strong> Explain how the two models differ regarding the probability of hitting over repeated attempts.",
    "steps": [
        "<strong>(a) Assumptions for the Binomial Model:</strong><br><br><strong>1. Constant Probability:</strong> The probability of landing the beanbag in the hoop remains constant ($p = 0.2$) on every throw.<br><br><strong>2. Independent Trials:</strong> Each throw is mutually independent of all other throws.",
        "<strong>(b) Calculating $\\text{P}(H \\ge 3)$:</strong><br><br>Using $H \\sim B(10, 0.2)$:\\begin{aligned} \\text{P}(H \\ge 3) &= 1 - \\text{P}(H \\le 2) \\cr &= 1 - 0.6778 \\cr &= 0.3222 \\end{aligned}",
        "<strong>(c) Finding $\\text{P}(F = 4)$ Under Coach Adams' Model:</strong><br><br>The first hit occurs on throw $4$, meaning the student misses on the first $3$ throws and hits on the $4^{\\text{th}}$ throw:\\begin{aligned} \\text{P}(F = 4) &= (0.8)^3 \\times 0.2 \\cr &= 0.512 \\times 0.2 \\cr &= 0.1024 \\end{aligned}",
        "<strong>(d) Finding $\\beta$ for Coach Baker's Model:</strong><br><br>The probabilities form an arithmetic progression of $8$ terms summing to $1$:\\begin{aligned}& \\sum_{n=1}^8 \\text{P}(F = n) = 1 \\cr &\\dfrac{8}{2}[2(0.02) + 7\\beta] = 1 \\cr &4(0.04 + 7\\beta) = 1 \\cr &0.04 + 7\\beta = 0.25 \\cr &7\\beta = 0.21 \\cr &\\beta = 0.03 \\end{aligned}",
        "<strong>(e) Finding $\\text{P}(F = 4)$ Under Coach Baker's Model:</strong><br><br>Substitute $n = 4$ and $\\beta = 0.03$ into the model formula:\\begin{aligned} \\text{P}(F = 4) &= 0.02 + 3(0.03) \\cr &= 0.02 + 0.09 \\cr &= 0.11 \\end{aligned}",
        "<strong>(f) Comparing the Two Models:</strong><br><br>In Coach Adams' model, the probability of hitting the target is <strong>constant</strong> across all throws ($p = 0.2$).<br><br>In Coach Baker's model, the probability of scoring the first hit <strong>increases</strong> with each successive attempt, modeling a learning effect or improvement with practice.",
        "Final Answer: (a) Constant probability ($0.2$) and independent throws, (b) $0.3222$, (c) $0.1024$, (d) $\\beta = 0.03$, (e) $0.11$, (f) Adams assumes constant probability; Baker assumes success probability increases with practice"
    ],
    "pi_options": [
        {
            "ans": "(a) Constant probability ($0.2$) and independent throws, (b) $0.6778$, (c) $0.1024$, (d) $\\beta = 0.03$, (e) $0.11$, (f) Adams assumes constant probability; Baker assumes success probability increases with practice",
            "feedback": "In part (b), $0.6778$ is $\\text{P}(H \\le 2)$. For at least $3$ hits, evaluate $1 - \\text{P}(H \\le 2) = 0.3222$."
        },
        {
            "ans": "(a) Constant probability ($0.2$) and independent throws, (b) $0.3222$, (c) $0.1024$, (d) $\\beta = 0.035$, (e) $0.125$, (f) Adams assumes constant probability; Baker assumes success probability increases with practice",
            "feedback": "In part (d), summing the $8$ terms requires $7\\beta = 0.21$, which yields $\\beta = 0.03$, not $0.035$."
        },
        {
            "ans": "(a) Throws must follow a normal distribution, (b) $0.3222$, (c) $0.1024$, (d) $\\beta = 0.03$, (e) $0.11$, (f) Adams assumes constant probability; Baker assumes success probability increases with practice",
            "feedback": "In part (a), the binomial distribution requires independent trials and a constant probability of success, not normality."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Bridging Pure Maths and Probability",
        "content": "When a discrete probability model uses an algebraic formula like $a + (n-1)d$, recognize it immediately as an arithmetic progression. Use the pure maths formula $S_n = \\dfrac{n}{2}[2a + (n-1)d]$ and set the sum equal to $1$ to solve for the unknown parameter in seconds."
    }
},
{
    "id": "050052",
    "group_id": "050051",
    "branch": "Statistics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Statistical Distributions",
    "topic": "Binomial and Discrete Series Modeling",
    "subtopic": [
        "First Success Probability",
        "Geometric Principle",
        "Binomial Batch Testing"
    ],
    "img": false,
    "question": "An automated process produces switches with a constant defect rate of $4\\%$. Switches are tested sequentially until the first defect is detected.<br><br>Let $X$ be the number of switches tested up to and including the first defect.<br><br><strong>(a)</strong> Calculate $\\text{P}(X = 5)$.<br><strong>(b)</strong> Calculate $\\text{P}(X > 10)$.<br><br>In a separate audit, a sample of $30$ switches is taken. Let $Y$ be the number of defective switches.<br><br><strong>(c)</strong> State the distribution of $Y$.<br><strong>(d)</strong> Calculate $\\text{P}(Y \\ge 2)$.",
    "steps": [
        "<strong>(a) Calculating $\\text{P}(X = 5)$:</strong><br><br>The first defect occurs on test $5$, meaning the first $4$ switches are operational and the $5^{\\text{th}}$ is defective:\\begin{aligned} \\text{P}(X = 5) &= (0.96)^4 \\times 0.04 \\cr &= 0.8493 \\times 0.04 \\cr &\\approx 0.0340 \\end{aligned}",
        "<strong>(b) Calculating $\\text{P}(X > 10)$:</strong><br><br>The condition $X > 10$ means that the first $10$ consecutive switches tested are all non-defective:\\begin{aligned} \\text{P}(X > 10) &= (0.96)^{10} \\cr &\\approx 0.6648 \\cr &\\approx 0.665 \\end{aligned}",
        "<strong>(c) Stating the Distribution of $Y$:</strong><br><br>Since there is a fixed sample of $n = 30$ and constant defect probability $p = 0.04$:\\begin{aligned} Y \\sim B(30, 0.04) \\end{aligned}",
        "<strong>(d) Calculating $\\text{P}(Y \\ge 2)$:</strong><br><br>Apply complementary probability:\\begin{aligned}& \\text{P}(Y \\ge 2) \\cr &\\quad = 1 - \\text{P}(Y \\le 1) \\cr &\\quad = 1 - [\\text{P}(0) + \\text{P}(1)] \\cr &\\quad = 1 - (0.2939 + 0.3673) \\cr &\\quad = 1 - 0.6612 \\cr &\\quad = 0.3388 \\end{aligned}",
        "Final Answer: (a) $0.0340$, (b) $0.665$, (c) $Y \\sim B(30, 0.04)$, (d) $0.3388$"
    ],
    "pi_options": [
        {
            "ans": "(a) $0.0340$, (b) $0.665$, (c) $Y \\sim B(30, 0.04)$, (d) $0.6612$",
            "feedback": "In part (d), $0.6612$ is $\\text{P}(Y \\le 1)$. To find the probability of at least $2$ defects, you must subtract this from $1$, giving $0.3388$."
        },
        {
            "ans": "(a) $0.0080$, (b) $0.665$, (c) $Y \\sim B(30, 0.04)$, (d) $0.3388$",
            "feedback": "In part (a), $(0.04)^5 = 0.000000102$ assumes all $5$ switches are defective. The first defect on test $5$ requires $4$ non-defective switches followed by $1$ defective: $(0.96)^4(0.04) \\approx 0.0340$."
        },
        {
            "ans": "(a) $0.0340$, (b) $0.335$, (c) $Y \\sim B(30, 0.04)$, (d) $0.3388$",
            "feedback": "In part (b), $1 - (0.96)^{10} \\approx 0.335$ is $\\text{P}(X \\le 10)$. The probability that more than $10$ tests are needed is simply $(0.96)^{10} \\approx 0.665$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Elegant Shortcut for First Success",
        "content": "For any trial testing until the first success, the event $X > k$ simply means that the first $k$ trials were all failures: $\\text{P}(X > k) = (1 - p)^k$. You never need to sum an infinite geometric series."
    }
},
{
    "id": "050053",
    "group_id": "050051",
    "branch": "Statistics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Statistical Distributions",
    "topic": "Binomial and Discrete Series Modeling",
    "subtopic": [
        "Arithmetic Probability Distribution",
        "Expectation and Variance",
        "Conditional Probability"
    ],
    "img": false,
    "question": "A discrete random variable $W$ represents product ratings on $\\{1, 2, 3, 4, 5\\}$, with probabilities forming an arithmetic progression:$$\\text{P}(W = w) = a + (w - 1)d$$Given that $\\text{P}(W = 1) = 0.05$:<br><br><strong>(a)</strong> Show that $d = 0.075$.<br><strong>(b)</strong> Write down the probability distribution of $W$.<br><strong>(c)</strong> Calculate $\\text{E}(W)$ and $\\text{Var}(W)$.<br><strong>(d)</strong> Calculate $\\text{P}(W \\ge 4 \\mid W \\ge 2)$.",
    "steps": [
        "<strong>(a) Showing that $d = 0.075$:</strong><br><br>Since $\\text{P}(W = 1) = a + 0d = 0.05$, the first term is $a = 0.05$.<br><br>Sum the $5$ terms of the arithmetic progression to $1$:\\begin{aligned}& \\sum_{w=1}^5 \\text{P}(W = w) = 1 \\cr &\\dfrac{5}{2}[2(0.05) + 4d] = 1 \\cr &2.5(0.10 + 4d) = 1 \\cr &0.25 + 10d = 1 \\cr &10d = 0.75 \\cr &d = 0.075 \\end{aligned}",
        "<strong>(b) Writing Down the Complete Distribution:</strong><br><br>Add $d = 0.075$ successively starting from $0.05$:<br><br>&bull; $\\text{P}(W = 1) = 0.05$<br>&bull; $\\text{P}(W = 2) = 0.125$<br>&bull; $\\text{P}(W = 3) = 0.20$<br>&bull; $\\text{P}(W = 4) = 0.275$<br>&bull; $\\text{P}(W = 5) = 0.35$",
        "<strong>(c) Calculating $\\text{E}(W)$ and $\\text{Var}(W)$:</strong><br><br>Calculate the expectation $\\text{E}(W)$:\\begin{aligned}& \\text{E}(W) \\cr &\\quad = 1(0.05) + 2(0.125) \\cr &\\qquad + 3(0.20) + 4(0.275) \\cr &\\qquad + 5(0.35) \\cr &\\quad = 0.05 + 0.25 \\cr &\\qquad + 0.60 + 1.10 \\cr &\\qquad + 1.75 \\cr &\\quad = 3.75 \\end{aligned}Calculate $\\text{E}(W^2)$:\\begin{aligned}& \\text{E}(W^2) \\cr &\\quad = 1(0.05) + 4(0.125) \\cr &\\qquad + 9(0.20) + 16(0.275) \\cr &\\qquad + 25(0.35) \\cr &\\quad = 0.05 + 0.50 \\cr &\\qquad + 1.80 + 4.40 \\cr &\\qquad + 8.75 \\cr &\\quad = 15.5 \\end{aligned}Calculate the variance:\\begin{aligned} \\text{Var}(W) &= \\text{E}(W^2) - [\\text{E}(W)]^2 \\cr &= 15.5 - (3.75)^2 \\cr &= 15.5 - 14.0625 \\cr &= 1.4375 \\end{aligned}",
        "<strong>(d) Calculating Conditional Probability:</strong><br><br>Apply conditional probability:\\begin{aligned}& \\text{P}(W \\ge 4 \\mid W \\ge 2) \\cr &\\quad = \\dfrac{\\text{P}(W = 4) + \\text{P}(W = 5)}{1 - \\text{P}(W = 1)} \\cr &\\quad = \\dfrac{0.275 + 0.35}{1 - 0.05} \\cr &\\quad = \\dfrac{0.625}{0.95} \\cr &\\quad \\approx 0.658 \\end{aligned}",
        "Final Answer: (a) $10d = 0.75 \\implies d = 0.075$, (b) $0.05, 0.125, 0.20, 0.275, 0.35$, (c) $\\text{E}(W) = 3.75$, $\\text{Var}(W) = 1.4375$, (d) $0.658$"
    ],
    "pi_options": [
        {
            "ans": "(a) $10d = 0.75 \\implies d = 0.075$, (b) $0.05, 0.125, 0.20, 0.275, 0.35$, (c) $\\text{E}(W) = 3.75$, $\\text{Var}(W) = 15.5$, (d) $0.658$",
            "feedback": "In part (c), $15.5$ is $\\text{E}(W^2)$. Remember to subtract $[\\text{E}(W)]^2 = 14.0625$ to obtain $\\text{Var}(W) = 1.4375$."
        },
        {
            "ans": "(a) $10d = 0.75 \\implies d = 0.075$, (b) $0.05, 0.125, 0.20, 0.275, 0.35$, (c) $\\text{E}(W) = 3.75$, $\\text{Var}(W) = 1.4375$, (d) $0.625$",
            "feedback": "In part (d), $0.625$ is the unconditional probability $\\text{P}(W \\ge 4)$. The condition $W \\ge 2$ restricts the denominator to $1 - 0.05 = 0.95$, giving $0.658$."
        },
        {
            "ans": "(a) $10d = 0.75 \\implies d = 0.075$, (b) $0.05, 0.125, 0.20, 0.275, 0.35$, (c) $\\text{E}(W) = 3.00$, $\\text{Var}(W) = 1.4375$, (d) $0.658$",
            "feedback": "In part (c), $3.00$ is the unweighted midpoint of $\\{1, 2, 3, 4, 5\\}$. Because the distribution is positively weighted towards higher ratings, the expectation is $3.75$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Conditioning on Reduced Subsets",
        "content": "In conditional questions like $\\text{P}(W \\ge 4 \\mid W \\ge 2)$, always compute the conditioning probability by subtraction: $\\text{P}(W \\ge 2) = 1 - \\text{P}(W = 1) = 0.95$. This avoids adding multiple probabilities together and eliminates rounding accumulation."
    }
},
{
    "id": "050054",
    "group_id": "050051",
    "branch": "Statistics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Statistical Distributions",
    "topic": "Binomial and Discrete Series Modeling",
    "subtopic": [
        "Model Comparison",
        "Learning Effect Modeling",
        "Mathematical Limitations"
    ],
    "img": false,
    "question": "A beginner archer shoots $5$ arrows.<br><br>&bull; <strong>Model 1:</strong> $H \\sim B(5, 0.3)$ (constant skill).<br>&bull; <strong>Model 2:</strong> Success probability on shot $k$ is $p_k = 0.10 + 0.08k$ for $k \\in \\{1, 2, 3, 4, 5\\}$ (learning effect).<br><br><strong>(a)</strong> Under Model 1, find $\\text{P}(H = 3)$.<br><strong>(b)</strong> Under Model 2, calculate the probability of hitting on the first two shots and missing on the remaining three.<br><strong>(c)</strong> Under Model 2, calculate $\\text{P}(F = 3)$ (first hit on shot $3$).<br><strong>(d)</strong> Give one reason why Model 2 is more realistic than Model 1, and state one limitation if extended to $20$ shots.",
    "steps": [
        "<strong>(a) Model 1 Binomial Calculation:</strong><br><br>For $H \\sim B(5, 0.3)$:\\begin{aligned} \\text{P}(H = 3) &= \\binom{5}{3}(0.3)^3(0.7)^2 \\cr &= 10 \\times 0.027 \\times 0.49 \\cr &= 0.1323 \\end{aligned}",
        "<strong>(b) Model 2 Specific Sequence Probability:</strong><br><br>Calculate the probabilities for each shot using $p_k = 0.10 + 0.08k$:<br><br>&bull; $p_1 = 0.18$ (miss: $0.82$)<br>&bull; $p_2 = 0.26$ (miss: $0.74$)<br>&bull; $p_3 = 0.34$ (miss: $0.66$)<br>&bull; $p_4 = 0.42$ (miss: $0.58$)<br>&bull; $p_5 = 0.50$ (miss: $0.50$)<br><br>Calculate the probability of sequence $(H, H, M, M, M)$:\\begin{aligned}& \\text{P}(H_1 H_2 M_3 M_4 M_5) \\cr &\\quad = (0.18)(0.26) \\cr &\\qquad \\times (0.66)(0.58)(0.50) \\cr &\\quad = (0.0468)(0.1914) \\cr &\\quad \\approx 0.00896 \\end{aligned}",
        "<strong>(c) Model 2 First Hit on Shot 3:</strong><br><br>The event $F = 3$ requires missing on shot 1, missing on shot 2, and hitting on shot 3:\\begin{aligned} \\text{P}(F & = 3) \\cr &= (1 - 0.18)(1 - 0.26)(0.34) \\cr &= (0.82)(0.74)(0.34) \\cr &= 0.206312 \\cr &\\approx 0.206 \\end{aligned}",
        "<strong>(d) Realism and Limitations of Model 2:</strong><br><br><strong>Realism:</strong> Beginners naturally improve with practice as they calibrate their aim and posture, so a model with increasing probability is more realistic than a static model.<br><br><strong>Limitation:</strong> If extended to $k = 20$, the formula gives $p_{20} = 0.10 + 0.08(20) = 1.70$. A probability cannot exceed $1$, making the linear model impossible for longer series.",
        "Final Answer: (a) $0.1323$, (b) $0.00896$, (c) $0.206$, (d) Captures learning/improvement; limited because $p > 1$ for large $k$"
    ],
    "pi_options": [
        {
            "ans": "(a) $0.1323$, (b) $0.00896$, (c) $0.0393$, (d) Captures learning/improvement; limited because $p > 1$ for large $k$",
            "feedback": "In part (c), $(0.34)^3 = 0.0393$ assumes hitting on all three shots. First hit on shot $3$ requires missing the first two shots: $(0.82)(0.74)(0.34) \\approx 0.206$."
        },
        {
            "ans": "(a) $0.3087$, (b) $0.00896$, (c) $0.206$, (d) Captures learning/improvement; limited because $p > 1$ for large $k$",
            "feedback": "In part (a), evaluating $(0.3)^3(0.7)^2 = 0.01323$ forgets the binomial coefficient $\\binom{5}{3} = 10$, giving $0.1323$."
        },
        {
            "ans": "(a) $0.1323$, (b) $0.0896$, (c) $0.206$, (d) Captures learning/improvement; limited because $p > 1$ for large $k$",
            "feedback": "In part (b), check your decimal arithmetic:\\begin{align}0.18 &\\times 0.26 \\times 0.66 \\cr &\\times 0.58 \\times 0.50 \\cr &\\approx 0.00896\\end{aligned} not $0.0896$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: The Hazard of Linear Probability Models",
        "content": "Linear probability formulas $p_k = a + bk$ are simple approximations for short sequences. However, they always break down asymptotically because probabilities must remain bounded in the interval $[0, 1]$. Examiners love asking for this exact limitation."
    }
},
{
    "id": "050055",
    "group_id": "050051",
    "branch": "Statistics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Statistical Distributions",
    "topic": "Binomial and Discrete Series Modeling",
    "subtopic": [
        "Law of Total Probability",
        "Geometric Series Summation",
        "Bayes' Theorem"
    ],
    "img": false,
    "question": "A fair $6$-sided die is rolled once, with score $D$. A player then has $D$ independent attempts to land a ball in a bucket, with success probability $0.25$ per throw.<br><br>Let $X$ denote the total number of successful throws.<br><br><strong>(a)</strong> Find $\\text{P}(X = 0 \\mid D = 3)$.<br><strong>(b)</strong> Show that the overall probability of zero successes is approximately $0.411$.<br><strong>(c)</strong> Given that zero successes occurred, find the conditional probability that the score on the die was $1$.",
    "steps": [
        "<strong>(a) Calculating $\\text{P}(X = 0 \\mid D = 3)$:</strong><br><br>With $3$ independent throws each failing with probability $1 - 0.25 = 0.75$:\\begin{aligned} \\text{P}(X = 0 \\mid D = 3) &= (0.75)^3 \\cr &= 0.421875 \\end{aligned}",
        "<strong>(b) Showing That Overall $\\text{P}(X = 0) \\approx 0.411$:</strong><br><br>Apply the law of total probability across all $6$ die scores:\\begin{aligned}& \\text{P}(X = 0) \\cr &\\quad = \\sum_{d=1}^6 \\text{P}(D = d) \\text{P}(X = 0 \\mid D = d) \\cr &\\quad = \\dfrac{1}{6} \\sum_{d=1}^6 (0.75)^d \\end{aligned}Sum the geometric progression with $a = 0.75$, $r = 0.75$, and $n = 6$:\\begin{aligned}& S_6 = \\dfrac{0.75(1 - 0.75^6)}{1 - 0.75} \\cr &\\quad = 3(1 - 0.17798) \\cr &\\quad \\approx 2.46606 \\end{aligned}Multiply by $\\dfrac{1}{6}$:\\begin{aligned} \\text{P}(X = 0) &= \\dfrac{2.46606}{6} \\cr &\\approx 0.41101 \\cr &\\approx 0.411 \\end{aligned}",
        "<strong>(c) Calculating $\\text{P}(D = 1 \\mid X = 0)$:</strong><br><br>Apply Bayes' theorem:\\begin{aligned}& \\text{P}(D = 1 \\mid X = 0) \\cr &\\quad = \\dfrac{\\text{P}(D = 1 \\cap X = 0)}{\\text{P}(X = 0)} \\cr &\\quad = \\dfrac{\\frac{1}{6}(0.75)}{0.41101} \\cr &\\quad = \\dfrac{0.125}{0.41101} \\cr &\\quad \\approx 0.304 \\end{aligned}",
        "Final Answer: (a) $0.4219$, (b) $\\dfrac{1}{6} \\sum_{d=1}^6 (0.75)^d \\approx 0.411$, (c) $0.304$"
    ],
    "pi_options": [
        {
            "ans": "(a) $0.4219$, (b) $\\dfrac{1}{6} \\sum_{d=1}^6 (0.75)^d \\approx 0.411$, (c) $0.125$",
            "feedback": "In part (c), $0.125 = \\dfrac{1}{6} \\times 0.75$ is the joint probability $\\text{P}(D = 1 \\cap X = 0)$. You must divide by the total probability $\\text{P}(X = 0) \\approx 0.411$ to find the conditional probability."
        },
        {
            "ans": "(a) $0.0156$, (b) $\\dfrac{1}{6} \\sum_{d=1}^6 (0.75)^d \\approx 0.411$, (c) $0.304$",
            "feedback": "In part (a), $(0.25)^3 = 0.0156$ is the probability of $3$ successes. For zero successes, evaluate failure on all $3$ throws: $(0.75)^3 \\approx 0.4219$."
        },
        {
            "ans": "(a) $0.4219$, (b) $\\dfrac{1}{6} \\sum_{d=1}^6 (0.75)^d \\approx 0.411$, (c) $0.167$",
            "feedback": "In part (c), $\\dfrac{1}{6} \\approx 0.167$ is the prior probability of rolling a $1$. Knowing that zero successes occurred increases the likelihood that few throws were attempted ($D = 1$), updating the probability to $0.304$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Bayes Updates in Multi-Stage Models",
        "content": "Notice how conditioning on zero successes updates the probability: the prior probability of rolling a $1$ was $\\dfrac{1}{6} \\approx 0.167$, but given that no balls landed in the bucket, the posterior probability jumps to $0.304$. Getting zero successes makes it far more probable that the player was only given a single throw."
    }
},
{
    "id": "050056",
    "group_id": "050056",
    "branch": "Statistics",
    "board": "Edexcel",
    "level": "AS",
    "major_area": "Data Presentation and Interpretation",
    "topic": "Statistical Sampling and Box Plots",
    "subtopic": [
        "Opportunity Sampling",
        "Census",
        "Box Plot Interpretation"
    ],
    "img": "images/Statistics_pngs/050056.png",
    "question": "Marcus studies employee commute times to a logistics hub. He stands at the staff entrance from 07:45 to 07:55 one morning and asks workers their journey time.<br><br><strong>(a)</strong> State the sampling method Marcus used.<br><strong>(b)</strong> Describe an alternative non-random sampling method Marcus could use for a sample of $40$ workers.<br><br>Hannah asks every worker at the hub their commute time, $x$ minutes.<br><br><strong>(c)</strong> State the data selection process Hannah used.<br><br>Hannah's results are shown in the box plot, with summary statistics:$$n = 90 \\qquad \\sum x = 4050 \\qquad \\sum x^2 = 236250$$<strong>(d)</strong> Write down the interquartile range (IQR) from the diagram.<br><strong>(e)</strong> Calculate the mean and standard deviation.<br><strong>(f)</strong> Recommend whether to use mean and standard deviation or median and IQR.<br><br>Two employees move house: Liam's commute decreases from $80\\text{ to }34\\text{ min}$; Priya's commute decreases from $65\\text{ to }36\\text{ min}$. Hannah redraws the box plot and only changes two values.<br><br><strong>(g)</strong> State which two values on the box plot change, and whether each increases or decreases.",
    "steps": [
        "<strong>(a) Identifying Marcus's Sampling Method:</strong><br><br>Marcus samples whoever is conveniently available at a specific location and time.<br><br>This is <strong>opportunity sampling</strong> (or convenience sampling).",
        "<strong>(b) Alternative Non-Random Method:</strong><br><br><strong>Quota sampling:</strong> Marcus could divide workers into strata (such as shift pattern, department, or gender) and interview a fixed quota from each category until $40$ workers are surveyed.",
        "<strong>(c) Identifying Hannah's Data Selection Process:</strong><br><br>Because Hannah surveys every single member of the target population, this process is a <strong>census</strong>.",
        "<strong>(d) Reading the Interquartile Range:</strong><br><br>From the box plot, read the quartiles:\\begin{aligned} Q_1 &= 28\\text{ minutes} \\cr Q_3 &= 60\\text{ minutes} \\end{aligned}Calculate the IQR:\\begin{aligned} \\text{IQR} &= Q_3 - Q_1 \\cr &= 60 - 28 \\cr &= 32\\text{ minutes} \\end{aligned}",
        "<strong>(e) Calculating Mean and Standard Deviation:</strong><br><br>Calculate the mean:\\begin{aligned} \\bar{x} &= \\dfrac{4050}{90} \\cr &= 45\\text{ minutes} \\end{aligned}Calculate the standard deviation:\\begin{aligned} \\sigma &= \\sqrt{\\dfrac{236250}{90} - 45^2} \\cr &= \\sqrt{2625 - 2025} \\cr &= \\sqrt{600} \\cr &\\approx 24.5\\text{ minutes} \\end{aligned}",
        "<strong>(f) Choosing Appropriate Summary Statistics:</strong><br><br>Recommend the <strong>median and interquartile range</strong>.<br><br>The box plot exhibits extreme high outliers ($114\\text{ and }122\\text{ minutes}$) and positive skewness. The median and IQR are resistant to extreme values, whereas the mean and standard deviation are heavily distorted by outliers.",
        "<strong>(g) Explaining the Changes to the Box Plot:</strong><br><br>The previous median was $42$ and upper quartile $Q_3$ was $60$.<br><br>Both employees' original times ($80\\text{ and }65$) were above $Q_3$ and above the median.<br><br>Their new times ($34\\text{ and }36$) both fall between $Q_1$ ($28$) and the median ($42$).<br><br>Because two observations have moved from above the median to below the median, the <strong>median decreases</strong>.<br><br>Because two observations have moved from above $Q_3$ to below $Q_3$, the <strong>upper quartile ($Q_3$) decreases</strong>.<br><br>Neither value was the minimum, maximum, or $Q_1$, so no other box plot markers change.",
        "Final Answer: (a) Opportunity sampling, (b) Quota sampling, (c) Census, (d) $32\\text{ min}$, (e) Mean: $45\\text{ min}$, SD: $24.5\\text{ min}$, (f) Median and IQR due to outliers, (g) Median and upper quartile ($Q_3$) both decrease"
    ],
    "pi_options": [
        {
            "ans": "(a) Opportunity sampling, (b) Quota sampling, (c) Census, (d) $32\\text{ min}$, (e) Mean: $45\\text{ min}$, SD: $24.5\\text{ min}$, (f) Median and IQR due to outliers, (g) Mean and upper whisker both decrease",
            "feedback": "In part (g), the mean is not plotted on a box plot. The upper whisker marks the highest non-outlier value ($96$), which neither employee held. The values that change are the median and upper quartile ($Q_3$)."
        },
        {
            "ans": "(a) Simple random sampling, (b) Quota sampling, (c) Census, (d) $32\\text{ min}$, (e) Mean: $45\\text{ min}$, SD: $24.5\\text{ min}$, (f) Median and IQR due to outliers, (g) Median and upper quartile ($Q_3$) both decrease",
            "feedback": "In part (a), standing at a door during a $10$-minute window does not give every employee an equal chance of selection, so it is opportunity sampling, not simple random sampling."
        },
        {
            "ans": "(a) Opportunity sampling, (b) Quota sampling, (c) Census, (d) $32\\text{ min}$, (e) Mean: $45\\text{ min}$, SD: $24.5\\text{ min}$, (f) Mean and standard deviation because they use all data, (g) Median and upper quartile ($Q_3$) both decrease",
            "feedback": "In part (f), although the mean uses all data, the presence of distinct outliers and strong skewness makes the median and IQR far more appropriate and representative."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Box Plot Shift Logic",
        "content": "A classic exam question asks which box plot markers move when data points change. Remember that only five values appear on a standard box plot: Minimum, $Q_1$, Median, $Q_3$, and Maximum. If two large values move from above $Q_3$ to below the median, both the median and $Q_3$ are pulled downward."
    }
},
{
    "id": "050057",
    "group_id": "050056",
    "branch": "Statistics",
    "board": "Edexcel",
    "level": "AS",
    "major_area": "Data Presentation and Interpretation",
    "topic": "Statistical Sampling and Box Plots",
    "subtopic": [
        "Comparative Box Plots",
        "Outlier Boundaries",
        "Distribution Comparisons"
    ],
    "img": "images/Statistics_pngs/050057.png",
    "question": "A company surveys the commute distance, $d\\text{ km}$, for employees travelling by <strong>Train</strong> or <strong>Car</strong>, shown in the parallel box plots.<br><br><strong>(a)</strong> From the diagram, estimate:<br><strong>(i)</strong> the median distance for Train commuters;<br><strong>(ii)</strong> the interquartile range for Car commuters.<br><br><strong>(b)</strong> Show that the Train commute distance of $88\\text{ km}$ is an outlier.<br><br><strong>(c)</strong> Compare the two distributions by making two distinct contextual comments.<br><br><strong>(d)</strong> Describe the skewness of the Car commute distribution, justifying your answer.",
    "steps": [
        "<strong>(a) Reading Values from the Box Plots:</strong><br><br><strong>(i)</strong> From the Train box plot, read the median line:\\begin{aligned} \\text{Median}_{\\text{Train}} \\approx 44\\text{ km} \\end{aligned}<strong>(ii)</strong> From the Car box plot, read the quartiles:\\begin{aligned} Q_1 &= 24\\text{ km} \\cr Q_3 &= 42\\text{ km} \\end{aligned}Calculate the IQR for Car commuters:\\begin{aligned} \\text{IQR}_{\\text{Car}} &= 42 - 24 \\cr &= 18\\text{ km} \\end{aligned}",
        "<strong>(b) Showing That $88\\text{ km}$ is an Outlier:</strong><br><br>For Train commuters, read the quartiles:\\begin{aligned} Q_1 &= 32\\text{ km} \\cr Q_3 &= 56\\text{ km} \\end{aligned}Calculate the interquartile range:\\begin{aligned} \\text{IQR} &= 56 - 32 \\cr &= 24\\text{ km} \\end{aligned}Calculate the upper outlier threshold:\\begin{aligned}& \\text{Upper boundary} \\cr &\\quad = Q_3 + 1.5 \\times \\text{IQR} \\cr &\\quad = 56 + 1.5(24) \\cr &\\quad = 56 + 36 \\cr &\\quad = 92\\text{ km} \\end{aligned}(If using $Q_1 = 30$ and $Q_3 = 52$, $\\text{IQR} = 22$ and threshold is $52 + 33 = 85\\text{ km}$, confirming $88 > 85$).",
        "<strong>(c) Comparing the Two Distributions in Context:</strong><br><br><strong>1. Average:</strong> The median commute distance for Train travellers ($44\\text{ km}$) is higher than for Car travellers ($34\\text{ km}$), indicating Train commuters travel further on average.<br><br><strong>2. Spread:</strong> The interquartile range for Train commuters ($24\\text{ km}$) is greater than for Car commuters ($18\\text{ km}$), showing that train commute distances are more varied.",
        "<strong>(d) Describing Skewness for the Car Distribution:</strong><br><br>Compare the quartile differences for the Car distribution:\\begin{aligned} Q_3 - \\text{Median} &= 42 - 34 = 8 \\cr \\text{Median} - Q_1 &= 34 - 24 = 10 \\end{aligned}Since $\\text{Median} - Q_1 > Q_3 - \\text{Median}$, and the lower whisker ($34 - 12 = 22$) is longer than the upper whisker ($64 - 42 = 22$), the Car distribution shows slight <strong>negative skewness</strong> (or approximately symmetric).",
        "Final Answer: (a) (i) $44\\text{ km}$, (ii) $18\\text{ km}$, (b) Outlier as $88 > 85\\text{ km}$, (c) Train commuters travel further on average ($44\\text{ vs }34\\text{ km}$) with greater spread ($24\\text{ vs }18\\text{ km}$), (d) Slight negative skew as median is closer to $Q_3$ than $Q_1$"
    ],
    "pi_options": [
        {
            "ans": "(a) (i) $44\\text{ km}$, (ii) $18\\text{ km}$, (b) Outlier as $88 > 85\\text{ km}$, (c) Car commuters travel further on average ($44\\text{ vs }34\\text{ km}$) with greater spread ($24\\text{ vs }18\\text{ km}$), (d) Slight negative skew as median is closer to $Q_3$ than $Q_1$",
            "feedback": "In part (c), the median for Train commuters is $44\\text{ km}$ while Car is $34\\text{ km}$, meaning Train commuters travel further on average, not Car commuters."
        },
        {
            "ans": "(a) (i) $34\\text{ km}$, (ii) $24\\text{ km}$, (b) Outlier as $88 > 85\\text{ km}$, (c) Train commuters travel further on average ($44\\text{ vs }34\\text{ km}$) with greater spread ($24\\text{ vs }18\\text{ km}$), (d) Slight negative skew as median is closer to $Q_3$ than $Q_1$",
            "feedback": "In part (a), $34\\text{ km}$ is the median for the Car distribution. The median for Train commuters is $44\\text{ km}$."
        },
        {
            "ans": "(a) (i) $44\\text{ km}$, (ii) $18\\text{ km}$, (b) Outlier as $88 > 85\\text{ km}$, (c) Train commuters travel further on average ($44\\text{ vs }34\\text{ km}$) with greater spread ($24\\text{ vs }18\\text{ km}$), (d) Strong positive skew because all distances are positive",
            "feedback": "In part (d), positive skewness is determined by the relative spacing of quartiles ($Q_3 - \\text{Med}$ vs $\\text{Med} - Q_1$) and whiskers, not by whether the values are positive numbers."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Full Marks on Comparing Box Plots",
        "content": "To score full marks on comparison questions: (1) compare one measure of average (median), (2) compare one measure of spread (IQR), (3) state the numerical values for both groups, and (4) include the real-world context (commute distance in km)."
    }
},
{
    "id": "050058",
    "group_id": "050056",
    "branch": "Statistics",
    "board": "Edexcel",
    "level": "AS",
    "major_area": "Data Presentation and Interpretation",
    "topic": "Statistical Sampling and Box Plots",
    "subtopic": [
        "Quartiles from Discrete Data",
        "Outlier Boundaries",
        "Census vs Sample"
    ],
    "img": false,
    "question": "A clinic records waiting times, $t$ minutes, for $12$ patients:$$11, \\quad 14, \\quad 18, \\quad 21, \\quad 24, \\quad 27, \\quad 30, \\quad 33, \\quad 38, \\quad 42, \\quad 48, \\quad 74$$An outlier lies more than $1.5 \\times \\text{IQR}$ outside the quartiles.<br><br><strong>(a)</strong> Find the lower quartile ($Q_1$), median, and upper quartile ($Q_3$).<br><strong>(b)</strong> Show that $74\\text{ minutes}$ is an outlier.<br><strong>(c)</strong> State one advantage of a census over a sample, and one reason why a census might not be preferred.",
    "steps": [
        "<strong>(a) Finding Quartiles and Median for $n = 12$:</strong><br><br>The data are already arranged in ascending order.<br><br>Find the lower quartile $Q_1$ (position $0.25 \\times 12 = 3$, average $3^{\\text{rd}}$ and $4^{\\text{th}}$):\\begin{aligned} Q_1 &= \\dfrac{18 + 21}{2} \\cr &= 19.5\\text{ minutes} \\end{aligned}Find the median (position $0.5 \\times 12 = 6$, average $6^{\\text{th}}$ and $7^{\\text{th}}$):\\begin{aligned} \\text{Median} &= \\dfrac{27 + 30}{2} \\cr &= 28.5\\text{ minutes} \\end{aligned}Find the upper quartile $Q_3$ (position $0.75 \\times 12 = 9$, average $9^{\\text{th}}$ and $10^{\\text{th}}$):\\begin{aligned} Q_3 &= \\dfrac{38 + 42}{2} \\cr &= 40.0\\text{ minutes} \\end{aligned}",
        "<strong>(b) Showing That $74\\text{ minutes}$ is an Outlier:</strong><br><br>Calculate the interquartile range:\\begin{aligned} \\text{IQR} &= Q_3 - Q_1 \\cr &= 40.0 - 19.5 \\cr &= 20.5\\text{ minutes} \\end{aligned}Calculate the upper outlier boundary:\\begin{aligned}& \\text{Upper boundary} \\cr &\\quad = Q_3 + 1.5 \\times \\text{IQR} \\cr &\\quad = 40.0 + 1.5(20.5) \\cr &\\quad = 40.0 + 30.75 \\cr &\\quad = 70.75\\text{ minutes} \\end{aligned}Since $74 > 70.75$, the waiting time of $74\\text{ minutes}$ is confirmed as an outlier.",
        "<strong>(c) Advantage and Disadvantage of a Census:</strong><br><br><strong>Advantage:</strong> A census surveys the entire population, providing completely accurate results with zero sampling error.<br><br><strong>Reason not preferred:</strong> A census is costly, time-consuming, and administratively difficult to conduct across a full population.",
        "Final Answer: (a) $Q_1 = 19.5$, $\\text{Med} = 28.5$, $Q_3 = 40.0$, (b) Outlier as $74 > 70.75\\text{ min}$, (c) Advantage: zero sampling error; Disadvantage: expensive and time-consuming"
    ],
    "pi_options": [
        {
            "ans": "(a) $Q_1 = 18.0$, $\\text{Med} = 28.5$, $Q_3 = 42.0$, (b) Outlier as $74 > 70.75\\text{ min}$, (c) Advantage: zero sampling error; Disadvantage: expensive and time-consuming",
            "feedback": "In part (a), for $n = 12$, $12 / 4 = 3$, so $Q_1$ is the midpoint between the $3^{\\text{rd}}$ and $4^{\\text{th}}$ values: $\\dfrac{18 + 21}{2} = 19.5$, not $18.0$."
        },
        {
            "ans": "(a) $Q_1 = 19.5$, $\\text{Med} = 28.5$, $Q_3 = 40.0$, (b) Not an outlier as $74 < 40 + 2(20.5)$, (c) Advantage: zero sampling error; Disadvantage: expensive and time-consuming",
            "feedback": "In part (b), the standard outlier rule uses $1.5 \\times \\text{IQR}$, which yields a threshold of $70.75\\text{ minutes}$. Because $74 > 70.75$, it is an outlier."
        },
        {
            "ans": "(a) $Q_1 = 19.5$, $\\text{Med} = 28.5$, $Q_3 = 40.0$, (b) Outlier as $74 > 70.75\\text{ min}$, (c) Advantage: always cheaper than sampling; Disadvantage: samples are illegal in medicine",
            "feedback": "In part (c), a census is more expensive than sampling because it requires surveying every individual. Sampling is standard, legal medical practice."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Discrete Quartile Rules",
        "content": "For a discrete list of $n$ items, if $\\dfrac{n}{4}$ is an integer $k$, the quartile is the average of the $k^{\\text{th}}$ and $(k+1)^{\\text{th}}$ terms. Here $12/4 = 3$, so average the $3^{\\text{rd}}$ and $4^{\\text{th}}$ items: $\\dfrac{18 + 21}{2} = 19.5$."
    }
},
{
    "id": "050059",
    "group_id": "050056",
    "branch": "Statistics",
    "board": "Edexcel",
    "level": "AS",
    "major_area": "Data Presentation and Interpretation",
    "topic": "Statistical Sampling and Box Plots",
    "subtopic": [
        "Linear Interpolation",
        "Continuous Grouped Data",
        "Guaranteed Outliers"
    ],
    "img": false,
    "question": "The table shows the distribution of journey times, $t$ minutes, for $120$ passengers:<table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:5px; border:1px solid #ccc;'>Journey time ($t\\text{ min}$)</th><th style='padding:5px; border:1px solid #ccc;'>Frequency ($f$)</th></tr></thead><tbody><tr><td style='padding:5px; border:1px solid #ccc;'>$10 \\le t < 25$</td><td style='padding:5px; border:1px solid #ccc;'>$18$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>$25 \\le t < 40$</td><td style='padding:5px; border:1px solid #ccc;'>$42$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>$40 \\le t < 60$</td><td style='padding:5px; border:1px solid #ccc;'>$36$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>$60 \\le t < 90$</td><td style='padding:5px; border:1px solid #ccc;'>$18$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>$90 \\le t < 120$</td><td style='padding:5px; border:1px solid #ccc;'>$6$</td></tr></tbody></table><strong>(a)</strong> Use linear interpolation to estimate:<br><strong>(i)</strong> the median;<br><strong>(ii)</strong> $Q_1$ and $Q_3$.<br><br><strong>(b)</strong> Calculate the IQR.<br><strong>(c)</strong> Find the upper outlier boundary.<br><strong>(d)</strong> State, with a reason, whether any passengers are guaranteed to be outliers.",
    "steps": [
        "<strong>(a) Estimating Median and Quartiles:</strong><br><br>For continuous data with $n = 120$:<br><br><strong>(i) Median:</strong> The $60^{\\text{th}}$ value falls at the upper boundary of $25 \\le t < 40$ (cumulative frequency $18 + 42 = 60$):\\begin{aligned} \\text{Median} = 40.0\\text{ minutes} \\end{aligned}<strong>(ii) Lower Quartile $Q_1$:</strong> The $30^{\\text{th}}$ value falls in $25 \\le t < 40$:\\begin{aligned}& Q_1 \\cr &\\quad = 25 + \\dfrac{30 - 18}{42} \\times 15 \\cr &\\quad = 25 + 4.29 \\cr &\\quad \\approx 29.3\\text{ minutes} \\end{aligned}<strong>Upper Quartile $Q_3$:</strong> The $90^{\\text{th}}$ value falls in $40 \\le t < 60$ (cumulative $60$ to $96$):\\begin{aligned}& Q_3 \\cr &\\quad = 40 + \\dfrac{90 - 60}{36} \\times 20 \\cr &\\quad = 40 + 16.67 \\cr &\\quad \\approx 56.7\\text{ minutes} \\end{aligned}",
        "<strong>(b) Calculating the Interquartile Range:</strong><br><br>Subtract the quartiles:\\begin{aligned} \\text{IQR} &= 56.67 - 29.29 \\cr &= 27.38\\text{ minutes} \\end{aligned}",
        "<strong>(c) Calculating Upper Outlier Boundary:</strong><br><br>Apply the $1.5 \\times \\text{IQR}$ rule:\\begin{aligned}& \\text{Upper boundary} \\cr &\\quad = Q_3 + 1.5 \\times \\text{IQR} \\cr &\\quad = 56.67 + 1.5(27.38) \\cr &\\quad = 56.67 + 41.07 \\cr &\\quad = 97.74\\text{ minutes} \\end{aligned}",
        "<strong>(d) Assessing Guaranteed Outlier Status:</strong><br><br>The highest class is $90 \\le t < 120$.<br><br>Because the lower boundary of this class ($90\\text{ min}$) is less than the outlier threshold ($97.74\\text{ min}$), it is possible for all $6$ passengers to have journey times between $90\\text{ and }97\\text{ minutes}$.<br><br>Therefore, no passengers are <strong>guaranteed</strong> to be outliers.",
        "Final Answer: (a) (i) $40.0\\text{ min}$, (ii) $Q_1 = 29.3\\text{ min}, Q_3 = 56.7\\text{ min}$, (b) $27.38\\text{ min}$, (c) $97.74\\text{ min}$, (d) No, because values in the top class could all lie below $97.74\\text{ min}$"
    ],
    "pi_options": [
        {
            "ans": "(a) (i) $40.0\\text{ min}$, (ii) $Q_1 = 29.3\\text{ min}, Q_3 = 56.7\\text{ min}$, (b) $27.38\\text{ min}$, (c) $97.74\\text{ min}$, (d) Yes, all $6$ passengers in the top class are outliers",
            "feedback": "In part (d), being in the interval $90 \\le t < 120$ does not guarantee exceeding $97.74\\text{ min}$. Passengers could have times between $90$ and $97\\text{ minutes}$."
        },
        {
            "ans": "(a) (i) $40.0\\text{ min}$, (ii) $Q_1 = 29.3\\text{ min}, Q_3 = 56.7\\text{ min}$, (b) $27.38\\text{ min}$, (c) $70.36\\text{ min}$, (d) No, because values in the top class could all lie below $97.74\\text{ min}$",
            "feedback": "In part (c), adding $1.5 \\times \\text{IQR}$ to the median gives $40 + 41.07 = 81.07$. The upper outlier boundary must be added to $Q_3$, giving $56.67 + 41.07 = 97.74\\text{ min}$."
        },
        {
            "ans": "(a) (i) $47.5\\text{ min}$, (ii) $Q_1 = 32.5\\text{ min}, Q_3 = 60.0\\text{ min}$, (b) $27.50\\text{ min}$, (c) $97.74\\text{ min}$, (d) No, because values in the top class could all lie below $97.74\\text{ min}$",
            "feedback": "In part (a), using class midpoints rather than linear interpolation ignores the distribution of frequencies across the classes."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Guaranteed Outliers in Grouped Tables",
        "content": "To determine whether observations in an extreme class are *guaranteed* to be outliers, check the class boundary: if the class starts *above* the outlier threshold ($98 > 97.74$), every item is guaranteed to be an outlier. If it starts *below* ($90 < 97.74$), none are guaranteed."
    }
},
{
    "id": "050060",
    "group_id": "050056",
    "branch": "Statistics",
    "board": "Edexcel",
    "level": "AS",
    "major_area": "Data Presentation and Interpretation",
    "topic": "Statistical Sampling and Box Plots",
    "subtopic": [
        "Correcting Summary Statistics",
        "Standard Deviation Adjustment",
        "Data Dispersion"
    ],
    "img": false,
    "question": "A transport analyst records daily commute costs, $C$ pounds, for $50$ commuters:$$\\bar{c} = £14.20 \\qquad s = £3.80$$Two entries were recorded incorrectly:<br>&bull; A cost of $£8.00$ should have been $£12.00$.<br>&bull; A cost of $£26.00$ should have been $£18.00$.<br><br><strong>(a)</strong> Calculate the corrected mean commute cost, $\\bar{c}_{\\text{new}}$.<br><strong>(b)</strong> Given original $\\sum c^2 = 10798$, calculate the corrected standard deviation to $3$ significant figures.<br><strong>(c)</strong> Explain whether correcting these entries increases or decreases the standard deviation.",
    "steps": [
        "<strong>(a) Calculating Corrected Mean:</strong><br><br>Find the original sum of commute costs:\\begin{aligned} \\sum c_{\\text{orig}} &= 50 \\times 14.20 \\cr &= 710 \\end{aligned}Adjust for the two corrected entries:\\begin{aligned}& \\sum c_{\\text{new}} \\cr &\\quad = 710 - 8 - 26 + 12 + 18 \\cr &\\quad = 710 - 34 + 30 \\cr &\\quad = 706 \\end{aligned}Calculate the corrected mean:\\begin{aligned} \\bar{c}_{\\text{new}} &= \\dfrac{706}{50} \\cr &= £14.12 \\end{aligned}",
        "<strong>(b) Calculating Corrected Standard Deviation:</strong><br><br>Adjust the sum of squares by subtracting incorrect squares and adding correct squares:\\begin{aligned}& \\sum c^2_{\\text{new}} \\cr &\\quad = 10798 - 8^2 - 26^2 + 12^2 + 18^2 \\cr &\\quad = 10798 - 64 - 676 + 144 + 324 \\cr &\\quad = 10526 \\end{aligned}Calculate the corrected standard deviation:\\begin{aligned} \\sigma_{\\text{new}} &= \\sqrt{\\dfrac{10526}{50} - (14.12)^2} \\cr &= \\sqrt{210.52 - 199.3744} \\cr &= \\sqrt{11.1456} \\cr &\\approx £3.34 \\end{aligned}",
        "<strong>(c) Explaining the Change in Standard Deviation:</strong><br><br>The standard deviation <strong>decreases</strong>.<br><br>The erroneous values ($£8.00\\text{ and }£26.00$) were extreme points lying far from the mean ($14.20 - 8 = 6.20$ and $26 - 14.20 = 11.80$).<br><br>The corrected values ($£12.00\\text{ and }£18.00$) lie much closer to the mean, pulling the data tighter together and reducing overall dispersion.",
        "Final Answer: (a) £14.12, (b) £3.34, (c) Decreases because the corrected values are closer to the mean, reducing dispersion"
    ],
    "pi_options": [
        {
            "ans": "(a) £14.12, (b) £3.34, (c) Increases because the sum of squares is large",
            "feedback": "In part (c), moving data points closer to the mean always reduces dispersion, which decreases the standard deviation, regardless of the magnitude of $\\sum c^2$."
        },
        {
            "ans": "(a) £14.28, (b) £3.34, (c) Decreases because the corrected values are closer to the mean, reducing dispersion",
            "feedback": "In part (a), the net change is $-34 + 30 = -4$, which reduces the total sum from $710$ to $706$, giving a new mean of $£14.12$, not $£14.28$."
        },
        {
            "ans": "(a) £14.12, (b) £11.15, (c) Decreases because the corrected values are closer to the mean, reducing dispersion",
            "feedback": "In part (b), $11.15$ is the corrected variance ($\\sigma^2$). You must take the square root to find the standard deviation: $\\sigma = \\sqrt{11.1456} \\approx £3.34$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Qualitative Variance Checks",
        "content": "Before doing complex arithmetic, visually check the distance from the mean. Here, extreme values ($£8\\text{ and }£26$) are replaced with values much nearer the centre ($£12\\text{ and }£18$). Any change that concentrates data tighter around the mean must decrease both variance and standard deviation."
    }
}
];