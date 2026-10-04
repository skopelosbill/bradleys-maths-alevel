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
    "question": "Marcus studies employee commute times to a logistics hub. He stands at the staff entrance from 07:45 to 07:55 one morning and asks workers their journey time.<br><br><strong>(a)</strong> State the sampling method Marcus used.<br><strong>(b)</strong> Describe an alternative non-random sampling method Marcus could use for a sample of $40$ workers.<br><br>Hannah asks every worker at the hub their commute time, $x$ minutes.<br><br><strong>(c)</strong> State the data selection process Hannah used.<br><br>Hannah's results are shown in the box plot, with summary statistics:$$n = 90$$ $$ \\sum x = 4050$$  $$\\sum x^2 = 236250$$<strong>(d)</strong> Write down the interquartile range (IQR) from the diagram.<br><strong>(e)</strong> Calculate the mean and standard deviation.<br><strong>(f)</strong> Recommend whether to use mean and standard deviation or median and IQR.<br><br>Two employees move house: Liam's commute decreases from $80\\text{ to }34\\text{ min}$; Priya's commute decreases from $65\\text{ to }36\\text{ min}$. Hannah redraws the box plot and only changes two values.<br><br><strong>(g)</strong> State which two values on the box plot change, and whether each increases or decreases.",
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
    "question": "A clinic records waiting times, $t$ minutes, for $12$ patients:$$11, \\quad 14, \\quad 18, \\quad 21,$$ $$24, \\quad 27, \\quad 30, \\quad 33,$$ $$38, \\quad 42, \\quad 48, \\quad 74$$An outlier lies more than $1.5 \\times \\text{IQR}$ outside the quartiles.<br><br><strong>(a)</strong> Find the lower quartile ($Q_1$), median, and upper quartile ($Q_3$).<br><strong>(b)</strong> Show that $74\\text{ minutes}$ is an outlier.<br><strong>(c)</strong> State one advantage of a census over a sample, and one reason why a census might not be preferred.",
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
        "content": "To determine whether observations in an extreme class are <em>guaranteed</em> to be outliers, check the class boundary: if the class starts <em>above</em> the outlier threshold ($98 > 97.74$), every item is guaranteed to be an outlier. If it starts <em>below</em> ($90 < 97.74$), none are guaranteed."
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
},
{
    "id": "050061",
    "group_id": "050061",
    "branch": "Statistics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Statistical Distributions",
    "topic": "The Normal Distribution and Hypothesis Testing",
    "subtopic": [
        "Conditional Normal Probability",
        "Series Reliability",
        "Normal Hypothesis Testing"
    ],
    "img": false,
    "question": "The operating lifetime, $L$ hours, of a battery is distributed as $N(24, 6^2)$. A surveying drone requires $4$ of these batteries and shuts down if any one battery fails.<br><br><strong>(a)</strong> Find the probability that a random battery lasts longer than $21\\text{ hours}$.<br><br>An engineer fits $4$ new batteries and flies for $21\\text{ hours}$. The drone needs to fly for a further $6\\text{ hours}$.<br><br><strong>(b)</strong> Find the probability that the drone operates without shutting down for the remaining $6\\text{ hours}$.<br><br>The engineer has only $2$ new spare batteries. After the first $21\\text{ hours}$, while the drone is still working, she replaces $2$ batteries with the $2$ new batteries.<br><br><strong>(c)</strong> Show that the probability the drone operates for the remaining $6\\text{ hours}$ is approximately $0.199$.<br><br>After the expedition, the engineer tests a random sample of batteries:$$n = 25$$$$\\bar{l} = 26.1\\text{ hours}$$$$\\sigma = 6\\text{ hours}$$<strong>(d)</strong> Test at the $5\\%$ level whether the mean battery lifetime is greater than $24\\text{ hours}$.",
    "steps": [
        "<strong>(a) Calculating $\\text{P}(L > 21)$:</strong><br><br>Standardise $L = 21$ using $\\mu = 24$ and $\\sigma = 6$:\\begin{aligned} z &= \\dfrac{21 - 24}{6} \\cr &= -0.5 \\end{aligned}Calculate the upper tail probability:\\begin{aligned} \\text{P}(L > 21) &= \\Phi(0.5) \\cr &= 0.6915 \\end{aligned}",
        "<strong>(b) Calculating Probability All $4$ Original Batteries Survive:</strong><br><br>For the drone to fly a further $6\\text{ hours}$, each battery must last at least $21 + 6 = 27\\text{ hours}$, given it has already lasted $21\\text{ hours}$.<br><br>Calculate the unconditional probability $\\text{P}(L > 27)$:\\begin{aligned} z &= \\dfrac{27 - 24}{6} \\cr &= 0.5 \\cr \\text{P}(L > 27) &= 1 - 0.6915 \\cr &= 0.3085 \\end{aligned}Calculate the conditional probability for one battery:\\begin{aligned}& \\text{P}(L > 27 \\mid L > 21) \\cr &\\quad = \\dfrac{0.3085}{0.6915} \\cr &\\quad \\approx 0.44613 \\end{aligned}All $4$ batteries must survive independently:\\begin{aligned} \\text{P}(\\text{all 4 survive}) &= (0.44613)^4 \\cr &\\approx 0.0396 \\end{aligned}",
        "<strong>(c) Calculating Probability with $2$ New Batteries:</strong><br><br>For the $2$ new batteries, each must last at least $6\\text{ hours}$ from new:\\begin{aligned} z &= \\dfrac{6 - 24}{6} \\cr &= -3.0 \\cr \\text{P}(L > 6) &= \\Phi(3.0) \\cr &\\approx 0.99865 \\end{aligned}The $2$ retained batteries must survive another $6\\text{ hours}$ (probability $0.44613$ each):\\begin{aligned}& \\text{P}(\\text{drone operates}) \\cr &\\quad = (0.99865)^2 \\cr &\\qquad \\times (0.44613)^2 \\cr &\\quad \\approx (0.9973)(0.1990) \\cr &\\quad \\approx 0.199 \\end{aligned}",
        "<strong>(d) Conducting the Hypothesis Test:</strong><br><br>State the one-tailed hypotheses:\\begin{aligned} H_0&: \\mu = 24 \\cr H_1&: \\mu > 24 \\end{aligned}Calculate the standard error for $n = 25$:\\begin{aligned} \\text{SE} &= \\dfrac{6}{\\sqrt{25}} \\cr &= 1.2 \\end{aligned}Calculate the test statistic $z$:\\begin{aligned} z &= \\dfrac{26.1 - 24}{1.2} \\cr &= \\dfrac{2.1}{1.2} \\cr &= 1.75 \\end{aligned}For a one-tailed test at the $5\\%$ level, the critical value is $1.6449$.<br><br>Since $1.75 > 1.6449$, reject $H_0$.<br><br>There is significant evidence at the $5\\%$ level that the mean battery lifetime is greater than $24\\text{ hours}$.",
        "Final Answer: (a) $0.6915$, (b) $0.0396$, (c) $(0.99865)^2(0.44613)^2 \\approx 0.199$, (d) Reject $H_0$ as $1.75 > 1.6449$"
    ],
    "pi_options": [
        {
            "ans": "(a) $0.6915$, (b) $0.0396$, (c) $(0.99865)^2(0.44613)^2 \\approx 0.199$, (d) Do not reject $H_0$ as $1.75 < 1.9600$",
            "feedback": "In part (d), comparing against $1.9600$ applies a two-tailed critical value. The engineer's belief specifies that the mean is greater than $24$, requiring a one-tailed critical value of $1.6449$."
        },
        {
            "ans": "(a) $0.3085$, (b) $0.0396$, (c) $(0.99865)^2(0.44613)^2 \\approx 0.199$, (d) Reject $H_0$ as $1.75 > 1.6449$",
            "feedback": "In part (a), $0.3085$ is $\\text{P}(L < 21)$. For a battery lasting longer than $21\\text{ hours}$, evaluate the upper tail $\\text{P}(L > 21) = 0.6915$."
        },
        {
            "ans": "(a) $0.6915$, (b) $0.0091$, (c) $(0.99865)^2(0.44613)^2 \\approx 0.199$, (d) Reject $H_0$ as $1.75 > 1.6449$",
            "feedback": "In part (b), evaluating $(0.3085)^4 = 0.0091$ ignores the conditioning. The batteries have already operated for $21\\text{ hours}$, requiring the conditional probability $\\text{P}(L > 27 \\mid L > 21) = 0.44613$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Series Systems and Memoryless Traps",
        "content": "For a series system requiring all $k$ components to survive, the overall probability is $p^k$. Crucially, normal distributions are not memoryless: you cannot assume a battery used for $21\\text{ hours}$ behaves like a new battery. You must evaluate the conditional probability $\\text{P}(L > t_1 + t_2 \\mid L > t_1)$."
    }
},
{
    "id": "050062",
    "group_id": "050061",
    "branch": "Statistics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Statistical Distributions",
    "topic": "The Normal Distribution and Hypothesis Testing",
    "subtopic": [
        "Parallel System Reliability",
        "Conditional Probability",
        "One-Tailed Test"
    ],
    "img": false,
    "question": "An emergency beacon is powered by two independent battery cells, each with lifespan $T \\sim N(1200, 150^2)\\text{ hours}$. The beacon operates as long as at least one cell functions.<br><br><strong>(a)</strong> Calculate the probability that a single cell lasts longer than $1350\\text{ hours}$.<br><strong>(b)</strong> If a cell has functioned for $1050\\text{ hours}$, find the conditional probability that it reaches at least $1350\\text{ hours}$.<br><strong>(c)</strong> Calculate the probability that the beacon functions for another $300\\text{ hours}$, given that both cells were operational at $1050\\text{ hours}$.<br><br>A safety test on these cells yields:$$n = 36$$$$\\bar{t} = 1155\\text{ hours}$$$$\\sigma = 150\\text{ hours}$$<strong>(d)</strong> Test at the $2.5\\%$ level whether the mean cell lifespan is less than $1200\\text{ hours}$.",
    "steps": [
        "<strong>(a) Calculating $\\text{P}(T > 1350)$:</strong><br><br>Standardise $T = 1350$:\\begin{aligned} z &= \\dfrac{1350 - 1200}{150} \\cr &= 1.0 \\end{aligned}Calculate the upper tail probability:\\begin{aligned} \\text{P}(T > 1350) &= 1 - \\Phi(1.0) \\cr &= 1 - 0.8413 \\cr &= 0.1587 \\end{aligned}",
        "<strong>(b) Calculating Conditional Probability:</strong><br><br>Standardise $T = 1050$:\\begin{aligned} z &= \\dfrac{1050 - 1200}{150} \\cr &= -1.0 \\cr \\text{P}(T > 1050) &= \\Phi(1.0) \\cr &= 0.8413 \\end{aligned}Apply conditional probability:\\begin{aligned}& \\text{P}(T > 1350 \\mid T > 1050) \\cr &\\quad = \\dfrac{0.1587}{0.8413} \\cr &\\quad \\approx 0.1886 \\end{aligned}",
        "<strong>(c) Calculating Parallel System Reliability:</strong><br><br>Each cell fails before $1350\\text{ hours}$ with probability:\\begin{aligned} \\text{P}(\\text{fails}) &= 1 - 0.1886 \\cr &= 0.8114 \\end{aligned}Because the cells are in parallel, the beacon fails only if both cells fail:\\begin{aligned}& \\text{P}(\\text{beacon functions}) \\cr &\\quad = 1 - (0.8114)^2 \\cr &\\quad = 1 - 0.6584 \\cr &\\quad \\approx 0.342 \\end{aligned}",
        "<strong>(d) Conducting the Hypothesis Test:</strong><br><br>State the one-tailed hypotheses:\\begin{aligned} H_0&: \\mu = 1200 \\cr H_1&: \\mu < 1200 \\end{aligned}Calculate the standard error for $n = 36$:\\begin{aligned} \\text{SE} &= \\dfrac{150}{\\sqrt{36}} \\cr &= \\dfrac{150}{6} \\cr &= 25 \\end{aligned}Calculate the test statistic $z$:\\begin{aligned} z &= \\dfrac{1155 - 1200}{25} \\cr &= \\dfrac{-45}{25} \\cr &= -1.8 \\end{aligned}For a one-tailed test at the $2.5\\%$ level, the critical value is $-1.96$.<br><br>Since $-1.8 > -1.96$, the test statistic is not in the critical region. Do not reject $H_0$.<br><br>There is insufficient evidence at the $2.5\\%$ level to suggest that the mean cell lifespan is less than $1200\\text{ hours}$.",
        "Final Answer: (a) $0.1587$, (b) $0.1886$, (c) $0.342$, (d) Do not reject $H_0$ as $-1.8 > -1.96$"
    ],
    "pi_options": [
        {
            "ans": "(a) $0.1587$, (b) $0.1886$, (c) $0.342$, (d) Reject $H_0$ as $-1.8 < -1.6449$",
            "feedback": "In part (d), comparing against $-1.6449$ tests at the $5\\%$ level. At the specified $2.5\\%$ level, the critical value is $-1.96$, so $H_0$ is not rejected."
        },
        {
            "ans": "(a) $0.1587$, (b) $0.1886$, (c) $0.0356$, (d) Do not reject $H_0$ as $-1.8 > -1.96$",
            "feedback": "In part (c), evaluating $(0.1886)^2 = 0.0356$ assumes both cells must survive (a series system). For a parallel system where at least one cell suffices, evaluate $1 - (0.8114)^2 = 0.342$."
        },
        {
            "ans": "(a) $0.8413$, (b) $0.1886$, (c) $0.342$, (d) Do not reject $H_0$ as $-1.8 > -1.96$",
            "feedback": "In part (a), $0.8413$ is $\\text{P}(T < 1350)$. For lifespan exceeding $1350\\text{ hours}$, evaluate $1 - 0.8413 = 0.1587$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Series vs Parallel Reliability",
        "content": "Make sure you distinguish between series and parallel systems. In a series system, all components must work: $\\text{P}(\\text{System}) = p^k$. In a parallel backup system, only one component needs to work: $\\text{P}(\\text{System}) = 1 - (1 - p)^k$."
    }
},
{
    "id": "050063",
    "group_id": "050061",
    "branch": "Statistics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Statistical Hypothesis Testing",
    "topic": "The Normal Distribution and Hypothesis Testing",
    "subtopic": [
        "Normal Mean Test",
        "Critical Value Calculation",
        "Type I Error Definition"
    ],
    "img": false,
    "question": "A car maker claims its battery provides a mean range of $320\\text{ km}$ with $\\sigma = 24\\text{ km}$. A tester suspects the range is less, testing a random sample:$$n = 16$$$$\\bar{x} = 307.5\\text{ km}$$$$\\sigma = 24\\text{ km}$$Assume range follows a normal distribution.<br><br><strong>(a)</strong> State suitable hypotheses to test the tester's suspicion.<br><strong>(b)</strong> Conduct the test at the $1\\%$ level, stating your conclusion in context.<br><strong>(c)</strong> Determine the critical value of the sample mean $\\bar{x}$.<br><strong>(d)</strong> Calculate the $p$-value.<br><strong>(e)</strong> Define a Type I error in the context of this test.",
    "steps": [
        "<strong>(a) Stating the Hypotheses:</strong><br><br>State the one-tailed hypotheses:\\begin{aligned} H_0&: \\mu = 320 \\cr H_1&: \\mu < 320 \\end{aligned}",
        "<strong>(b) Conducting the Hypothesis Test:</strong><br><br>Calculate the standard error for $n = 16$:\\begin{aligned} \\text{SE} &= \\dfrac{24}{\\sqrt{16}} \\cr &= \\dfrac{24}{4} \\cr &= 6 \\end{aligned}Calculate the test statistic $z$:\\begin{aligned} z &= \\dfrac{307.5 - 320}{6} \\cr &= \\dfrac{-12.5}{6} \\cr &\\approx -2.083 \\end{aligned}For a one-tailed test at the $1\\%$ level, the critical value is $-2.326$.<br><br>Since $-2.083 > -2.326$, the test statistic does not lie in the critical region. Do not reject $H_0$.<br><br>There is insufficient evidence at the $1\\%$ level to support the suspicion that the mean driving range is less than $320\\text{ km}$.",
        "<strong>(c) Calculating the Critical Value of $\\bar{x}$:</strong><br><br>Find the boundary value for $\\bar{x}$ using $z = -2.326$:\\begin{aligned} \\bar{x}_{\\text{crit}} &= 320 - 2.326(6) \\cr &= 320 - 13.956 \\cr &= 306.044 \\cr &\\approx 306.0\\text{ km} \\end{aligned}",
        "<strong>(d) Calculating the $p$-Value:</strong><br><br>Evaluate the lower tail probability for $z = -2.083$:\\begin{aligned} p\\text{-value} &= \\text{P}(Z < -2.083) \\cr &= 1 - \\Phi(2.083) \\cr &= 1 - 0.9814 \\cr &= 0.0186 \\end{aligned}",
        "<strong>(e) Contextualising Type I Error:</strong><br><br>A Type I error occurs when the null hypothesis is rejected when it is actually true.<br><br>In context: concluding that the mean range is less than $320\\text{ km}$ when the true mean range is genuinely $320\\text{ km}$.",
        "Final Answer: (a) $H_0: \\mu = 320, H_1: \\mu < 320$, (b) Do not reject $H_0$ as $-2.083 > -2.326$, (c) $306.0\\text{ km}$, (d) $0.0186$, (e) Concluding mean range is under $320\\text{ km}$ when it is genuinely $320\\text{ km}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $H_0: \\mu = 320, H_1: \\mu < 320$, (b) Reject $H_0$ as $-2.083 < -1.960$, (c) $306.0\\text{ km}$, (d) $0.0186$, (e) Concluding mean range is under $320\\text{ km}$ when it is genuinely $320\\text{ km}$",
            "feedback": "In part (b), comparing against $-1.960$ tests at the $2.5\\%$ level. At the specified $1\\%$ level, the critical value is $-2.326$, so $H_0$ is not rejected."
        },
        {
            "ans": "(a) $H_0: \\mu = 320, H_1: \\mu < 320$, (b) Do not reject $H_0$ as $-2.083 > -2.326$, (c) $264.2\\text{ km}$, (d) $0.0186$, (e) Concluding mean range is under $320\\text{ km}$ when it is genuinely $320\\text{ km}$",
            "feedback": "In part (c), subtracting $2.326 \\times 24$ forgets to divide $\\sigma$ by $\\sqrt{n} = 4$. The standard error is $6$, giving $\\bar{x}_{\\text{crit}} = 306.0\\text{ km}$."
        },
        {
            "ans": "(a) $H_0: \\mu = 320, H_1: \\mu < 320$, (b) Do not reject $H_0$ as $-2.083 > -2.326$, (c) $306.0\\text{ km}$, (d) $0.0372$, (e) Concluding mean range is under $320\\text{ km}$ when it is genuinely $320\\text{ km}$",
            "feedback": "In part (d), $0.0372 = 2 \\times 0.0186$ is the two-tailed $p$-value. For a one-tailed test, the $p$-value is $0.0186$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: P-Values vs Significance Levels",
        "content": "Notice how the $p$-value ($0.0186$) directly confirms the test decision: because $0.0186 > 0.01$, the sample is not quite extreme enough to reject $H_0$ at the $1\\%$ level (though it would have been rejected at a $5\\%$ level)."
    }
},
{
    "id": "050064",
    "group_id": "050061",
    "branch": "Statistics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Statistical Distributions",
    "topic": "The Normal Distribution and Hypothesis Testing",
    "subtopic": [
        "Sum of Normal Variables",
        "Scaling vs Summing",
        "Payload Capacity"
    ],
    "img": false,
    "question": "Passenger mass on a commuter ferry is distributed as $X \\sim N(74.0, 12.0^2)\\text{ kg}$. A tender boat carries $6$ independent passengers, with a safe capacity of $480\\text{ kg}$.<br><br><strong>(a)</strong> State the distribution of total mass $T = X_1 + \\dots + X_6$, giving its mean and variance.<br><strong>(b)</strong> Calculate the probability that total passenger mass exceeds the safe capacity.<br><strong>(c)</strong> Explain why $T$ is mathematically different from $W = 6X_1$, and state which variable has greater variance.<br><br>A sample of passengers is weighed during an audit:$$n = 36$$$$\\bar{x} = 77.5\\text{ kg}$$$$\\sigma = 12.0\\text{ kg}$$<strong>(d)</strong> Test at the $5\\%$ level whether the mean mass has increased from $74.0\\text{ kg}$.",
    "steps": [
        "<strong>(a) Distribution of Total Mass $T$:</strong><br><br>For the sum of $6$ independent normal variables:\\begin{aligned} \\text{E}(T) &= 6 \\times 74.0 \\cr &= 444.0\\text{ kg} \\end{aligned}Variances add for independent variables:\\begin{aligned} \\text{Var}(T) &= 6 \\times 12.0^2 \\cr &= 6 \\times 144 \\cr &= 864\\text{ kg}^2 \\end{aligned}Therefore:\\begin{aligned} T \\sim N(444, 864) \\end{aligned}",
        "<strong>(b) Calculating Probability of Exceeding Capacity:</strong><br><br>Standardise $T = 480$ using $\\text{SD} = \\sqrt{864} \\approx 29.394$:\\begin{aligned} z &= \\dfrac{480 - 444}{29.394} \\cr &= \\dfrac{36}{29.394} \\cr &\\approx 1.225 \\end{aligned}Calculate the upper tail probability:\\begin{aligned} \\text{P}(T > 480) &= 1 - \\Phi(1.225) \\cr &= 1 - 0.8897 \\cr &= 0.1103 \\end{aligned}",
        "<strong>(c) Comparing $T$ and $W = 6X_1$:</strong><br><br>$T$ is the sum of $6$ distinct independent passengers, so random variations partially cancel out ($\\text{Var}(T) = 6\\sigma^2 = 864$).<br><br>$W = 6X_1$ represents taking a single passenger's mass and multiplying it by $6$, amplifying extreme values ($\\text{Var}(W) = 6^2 \\sigma^2 = 36 \\times 144 = 5184$).<br><br>Therefore, <strong>$W$ has a much greater variance</strong> than $T$.",
        "<strong>(d) Conducting the Hypothesis Test:</strong><br><br>State the one-tailed hypotheses:\\begin{aligned} H_0&: \\mu = 74.0 \\cr H_1&: \\mu > 74.0 \\end{aligned}Calculate the standard error for $n = 36$:\\begin{aligned} \\text{SE} &= \\dfrac{12.0}{\\sqrt{36}} \\cr &= \\dfrac{12.0}{6} \\cr &= 2.0 \\end{aligned}Calculate the test statistic $z$:\\begin{aligned} z &= \\dfrac{77.5 - 74.0}{2.0} \\cr &= \\dfrac{3.5}{2.0} \\cr &= 1.75 \\end{aligned}For a one-tailed test at the $5\\%$ level, the critical value is $1.6449$.<br><br>Since $1.75 > 1.6449$, reject $H_0$.<br><br>There is significant evidence at the $5\\%$ level that the population mean passenger mass has increased.",
        "Final Answer: (a) $T \\sim N(444, 864)$, (b) $0.1103$, (c) $T$ sums $6$ independent variables while $W$ scales one; $W$ has greater variance ($5184$ vs $864$), (d) Reject $H_0$ as $1.75 > 1.6449$"
    ],
    "pi_options": [
        {
            "ans": "(a) $T \\sim N(444, 5184)$, (b) $0.1103$, (c) $T$ sums $6$ independent variables while $W$ scales one; $W$ has greater variance ($5184$ vs $864$), (d) Reject $H_0$ as $1.75 > 1.6449$",
            "feedback": "In part (a), the variance of the sum of $6$ independent variables is $6 \\times 12^2 = 864$. Evaluating $6^2 \\times 12^2 = 5184$ calculates the variance of scaling a single variable ($6X$)."
        },
        {
            "ans": "(a) $T \\sim N(444, 864)$, (b) $0.8897$, (c) $T$ sums $6$ independent variables while $W$ scales one; $W$ has greater variance ($5184$ vs $864$), (d) Reject $H_0$ as $1.75 > 1.6449$",
            "feedback": "In part (b), $0.8897$ is $\\text{P}(T \\le 480)$. For the total mass exceeding safe payload capacity, evaluate the upper tail: $1 - 0.8897 = 0.1103$."
        },
        {
            "ans": "(a) $T \\sim N(444, 864)$, (b) $0.1103$, (c) $T$ sums $6$ independent variables while $W$ scales one; $W$ has greater variance ($5184$ vs $864$), (d) Do not reject $H_0$ as $1.75 < 1.9600$",
            "feedback": "In part (d), comparing against $1.9600$ applies a two-tailed test. Testing whether the mean has increased specifies a one-tailed test with critical value $1.6449$, so $H_0$ is rejected."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Summing vs Scaling Random Variables",
        "content": "Never confuse $\\sum_{i=1}^n X_i$ with $nX$. When you sum $n$ independent people, their deviations cancel each other out, giving variance $n\\sigma^2$. When you multiply one person by $n$, extreme weights are multiplied by $n$, giving variance $n^2\\sigma^2$ (which is $n$ times larger)."
    }
},
{
    "id": "050065",
    "group_id": "050061",
    "branch": "Statistics",
    "board": "Edexcel",
    "level": "A",
    "major_area": "Statistical Hypothesis Testing",
    "topic": "The Normal Distribution and Hypothesis Testing",
    "subtopic": [
        "Sample Size Determination",
        "Test Power Specification",
        "Two-Tailed Decision"
    ],
    "img": false,
    "question": "A machine dispenses water with volume $V \\sim N(\\mu, 8.0^2)\\text{ ml}$, calibrated to $\\mu = 500\\text{ ml}$.<br><br>A supervisor samples $n$ bottles daily to test:$$H_0: \\mu = 500 \\qquad H_1: \\mu \\neq 500$$at the $5\\%$ significance level.<br><br><strong>(a)</strong> Find the critical region for the sample mean $\\bar{V}$ in terms of $n$.<br><strong>(b)</strong> If the true mean drifts to $\\mu = 504\\text{ ml}$, the probability of rejecting $H_0$ must be at least $0.95$. Determine the minimum sample size $n$.<br><br>On a day when $n = 25$ bottles were sampled:$$\\bar{v} = 496.4\\text{ ml}$$<strong>(c)</strong> Determine whether $H_0$ should be rejected at the $5\\%$ level.",
    "steps": [
        "<strong>(a) Expressing the Critical Region in Terms of $n$:</strong><br><br>Under $H_0$, $\\bar{V} \\sim N\\left(500, \\dfrac{64}{n}\\right)$, so $\\text{SE} = \\dfrac{8.0}{\\sqrt{n}}$.<br><br>For a two-tailed test at the $5\\%$ level, the critical $z$-values are $\\pm 1.96$:\\begin{aligned} \\text{Margin} &= 1.96 \\times \\dfrac{8.0}{\\sqrt{n}} \\cr &= \\dfrac{15.68}{\\sqrt{n}} \\end{aligned}The critical region is:\\begin{aligned} \\bar{V} &< 500 - \\dfrac{15.68}{\\sqrt{n}} \\cr \\bar{V} &> 500 + \\dfrac{15.68}{\\sqrt{n}} \\end{aligned}",
        "<strong>(b) Determining Minimum Sample Size $n$:</strong><br><br>When $\\mu = 504$, the distribution of $\\bar{V}$ shifts to $N\\left(504, \\dfrac{64}{n}\\right)$.<br><br>For the probability of rejecting $H_0$ to be at least $0.95$, the upper critical boundary of $H_0$ must lie at least $1.6449$ standard errors below $504$:\\begin{aligned}& 500 + \\dfrac{15.68}{\\sqrt{n}} \\le 504 - 1.6449\\left(\\dfrac{8.0}{\\sqrt{n}}\\right) \\cr &\\dfrac{15.68}{\\sqrt{n}} + \\dfrac{13.1592}{\\sqrt{n}} \\le 4 \\cr &\\dfrac{28.8392}{\\sqrt{n}} \\le 4 \\cr &\\sqrt{n} \\ge \\dfrac{28.8392}{4} \\cr &\\sqrt{n} \\ge 7.2098 \\cr &n \\ge (7.2098)^2 \\approx 51.98 \\end{aligned}Therefore, the minimum integer sample size is $n = 52$.",
        "<strong>(c) Testing with $n = 25$ and $\\bar{v} = 496.4\\text{ ml}$:</strong><br><br>Calculate the standard error for $n = 25$:\\begin{aligned} \\text{SE} &= \\dfrac{8.0}{\\sqrt{25}} \\cr &= 1.6 \\end{aligned}Calculate the test statistic $z$:\\begin{aligned} z &= \\dfrac{496.4 - 500}{1.6} \\cr &= \\dfrac{-3.6}{1.6} \\cr &= -2.25 \\end{aligned}Compare with the two-tailed $5\\%$ critical thresholds ($\\pm 1.96$):\\begin{aligned} |-2.25| > 1.96 \\end{aligned}Since $-2.25 < -1.96$, the sample mean falls into the critical region. Reject $H_0$.<br><br>There is significant evidence at the $5\\%$ level that the mean volume dispensed differs from $500\\text{ ml}$.",
        "Final Answer: (a) $\\bar{V} < 500 - \\dfrac{15.68}{\\sqrt{n}}$ or $\\bar{V} > 500 + \\dfrac{15.68}{\\sqrt{n}}$, (b) $n = 52$, (c) Reject $H_0$ as $|-2.25| > 1.96$"
    ],
    "pi_options": [
        {
            "ans": "(a) $\\bar{V} < 500 - \\dfrac{15.68}{\\sqrt{n}}$ or $\\bar{V} > 500 + \\dfrac{15.68}{\\sqrt{n}}$, (b) $n = 52$, (c) Do not reject $H_0$ as $|-2.25| < 2.576$",
            "feedback": "In part (c), comparing against $2.576$ applies a $1\\%$ significance level. At the specified $5\\%$ level, the critical value is $1.96$, so $H_0$ is rejected."
        },
        {
            "ans": "(a) $\\bar{V} < 500 - \\dfrac{13.16}{\\sqrt{n}}$ or $\\bar{V} > 500 + \\dfrac{13.16}{\\sqrt{n}}$, (b) $n = 52$, (c) Reject $H_0$ as $|-2.25| > 1.96$",
            "feedback": "In part (a), $13.16 / \\sqrt{n}$ uses the one-tailed $5\\%$ critical value ($1.6449$). A two-tailed test at $5\\%$ requires $z = 1.96$, giving $1.96 \\times 8.0 = 15.68$."
        },
        {
            "ans": "(a) $\\bar{V} < 500 - \\dfrac{15.68}{\\sqrt{n}}$ or $\\bar{V} > 500 + \\dfrac{15.68}{\\sqrt{n}}$, (b) $n = 26$, (c) Reject $H_0$ as $|-2.25| > 1.96$",
            "feedback": "In part (b), $n = 26$ results from forgetting that $\\sigma / \\sqrt{n}$ applies to both the critical threshold and the power offset. Both terms combine to require $\\sqrt{n} \\ge 7.21$, giving $n = 52$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Finding Minimum Sample Sizes for Test Power",
        "content": "To find sample size $n$ for a specified power: set the distance between the null mean and the alternative mean ($504 - 500 = 4$) equal to $(z_{\\alpha/2} + z_{\\beta})\\dfrac{\\sigma}{\\sqrt{n}}$. Here $(1.96 + 1.6449)\\dfrac{8}{\\sqrt{n}} \\le 4$ yields $n \\ge 51.98$, so $n = 52$."
    }
},
{
    "id": "050066",
    "branch": "Statistics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Statistical Sampling",
    "topic": "Sampling Methods",
    "subtopic": [
        "Stratified Sampling",
        "Representativeness"
    ],
    "img": false,
    "question": "Marcus is investigating reading habits among students at his sixth form college. He plans to survey a sample of 120 students.<br><br><strong>(a)</strong> State one advantage of using a stratified sample based on year group rather than a simple random sample.<br><br><strong>(b)</strong> Explain whether it would be reasonable for Marcus to use his results to draw conclusions about the reading habits of all sixth form students in England.",
    "steps": [
        "<strong>(a) Advantage of Stratified Sampling:</strong><br><br>A stratified sample guarantees that each year group is represented in the exact proportion that it occurs in the college population.<br><br>This ensures key subgroups are not under-represented and reduces sampling variation compared to a simple random sample.",
        "<strong>(b) Generalisability to Wider Population:</strong><br><br>No, it would not be reasonable.<br><br>A sample drawn from a single college is unrepresentative of the national population, as reading habits may vary substantially due to regional, demographic, or socio-economic differences.",
        "Final Answer: (a) Guarantees proportional representation of each year group, (b) No, a single college cannot represent national demographics"
    ],
    "pi_options": [
        {
            "ans": "(a) Guarantees proportional representation of each year group, (b) Yes, 120 students is a large enough sample to generalise nationally",
            "feedback": "Sample size alone does not overcome selection bias. Surveying only one institution means the sample cannot capture national socio-economic and regional variations."
        },
        {
            "ans": "(a) It is quicker and cheaper than simple random sampling, (b) No, a single college cannot represent national demographics",
            "feedback": "Stratified sampling is generally more time-consuming and expensive than simple random sampling because a complete sampling frame with subgroup classifications is required."
        },
        {
            "ans": "(a) It completely eliminates all sampling errors and bias, (b) Yes, 120 students is a large enough sample to generalise nationally",
            "feedback": "No sampling method eliminates all sampling error, as random variation between sample and population always remains. Generalising to a national population from one location is also invalid."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Representativeness vs Method",
        "content": "Even if your sampling method is mathematically sound, if your sampling frame is restricted to a single school or college, your target population is only that college. You cannot generalise conclusions to all students in England without introducing geographical and socio-economic bias."
    }
},
{
    "id": "050067",
    "branch": "Statistics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Statistical Sampling",
    "topic": "Sampling Methods",
    "subtopic": [
        "Sampling Frame",
        "Stratified Calculations"
    ],
    "img": false,
    "question": "The manager of a leisure centre wishes to survey member satisfaction. The centre has $1\\,200$ adult members, $450$ junior members, and $350$ senior members. The manager decides to take a stratified sample of $80$ members.<br><br><strong>(a)</strong> Calculate the number of junior members that should be included in the sample.<br><br><strong>(b)</strong> State what is meant by a <em>sampling frame</em> in this context, and explain why taking a stratified sample would not be possible if a complete register of members was unavailable.",
    "steps": [
        "<strong>(a) Junior Members in Stratified Sample:</strong><br><br>First calculate the total membership of the centre:egin{aligned} N &= 1200 + 450 + 350 \\cr &= 2000 nd{aligned}Now calculate the proportional number of junior members for a sample of $n = 80$:egin{aligned} ext{Junior sample} &= frac{450}{2000} imes 80 \\cr &= frac{9}{40} imes 80 \\cr &= 18 nd{aligned}",
        "<strong>(b) Sampling Frame and Stratification:</strong><br><br>A sampling frame in this context is a complete, unique list or register of all $2\\,000$ members of the leisure centre.<br><br>Without a complete register, members cannot be uniquely identified, categorised accurately into their respective age strata, or selected at random from within each stratum.",
        "Final Answer: (a) 18, (b) Complete list of all 2000 members; required to identify and randomly select individuals from each stratum"
    ],
    "pi_options": [
        {
            "ans": "(a) 27, (b) Complete list of all 2000 members; required to identify and randomly select individuals from each stratum",
            "feedback": "This incorrect calculation divides 80 equally among the three strata ($80 / 3 \\approx 27$) rather than weighting proportionally by group size."
        },
        {
            "ans": "(a) 18, (b) The total number of members (2000); required to determine the percentage of each age group",
            "feedback": "A sampling frame is not merely a single aggregate number. It must be an actual list, database, or register of identifiable members from which random selections can be made."
        },
        {
            "ans": "(a) 14, (b) Complete list of all 2000 members; required to identify and randomly select individuals from each stratum",
            "feedback": "14 is the number of senior members ($\\frac{350}{2000} \\times 80 = 14$), not junior members."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Sampling Frame vs Population",
        "content": "Students often confuse the population size with the sampling frame. The population size is the number $N = 2000$, whereas the sampling frame is the physical or electronic list from which individuals are selected. Without an accurate list, true random or stratified sampling cannot take place."
    }
},
{
    "id": "050068",
    "branch": "Statistics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Statistical Sampling",
    "topic": "Sampling Methods",
    "subtopic": [
        "Systematic Sampling",
        "Periodic Bias"
    ],
    "img": false,
    "question": "A food processing factory produces packets of crisps. A quality-control inspector wishes to check packet weights. During a single morning shift, $2\\,400$ packets are produced, numbered sequentially from $1$ to $2\\,400$ along a conveyor belt. The inspector decides to select a systematic sample of $60$ packets.<br><br><strong>(a)</strong> Describe clearly how the inspector should select this systematic sample.<br><br><strong>(b)</strong> State one potential hazard or disadvantage of using systematic sampling in this production environment.",
    "steps": [
        "<strong>(a) Selecting the Systematic Sample:</strong><br><br>1. Determine the sampling interval $k$:egin{aligned} k &= frac{2400}{60} \\cr &= 40 nd{aligned}2. Select a random starting number $r$ from $1$ to $40$ inclusive.<br><br>3. Select packet $r$, followed by every $40\\text{th}$ packet thereafter:egin{aligned} ext{Packets: } r, r+40, r+80, ots, r+2360 nd{aligned}",
        "<strong>(b) Potential Hazard:</strong><br><br>If the production process has an underlying periodic pattern or cyclic fault that coincides with the sampling interval (every $40\\text{th}$ packet), the sample will be severely biased (e.g. consistently picking packets from a faulty machine nozzle or missing periodic dips).",
        "Final Answer: (a) Choose random start $r n [1, 40]$, then take every $40ext{th}$ packet ($r, r+40, ots$), (b) Periodic machine cycles matching the sampling interval introduce severe bias"
    ],
    "pi_options": [
        {
            "ans": "(a) Simply select packets 40, 80, 120, ..., 2400, (b) Periodic machine cycles matching the sampling interval introduce severe bias",
            "feedback": "Starting deterministically at packet 40 eliminates randomness. Systematic sampling requires a random starting integer between 1 and $k$ to give each packet an equal chance of selection."
        },
        {
            "ans": "(a) Choose random start $r n [1, 40]$, then take every $40ext{th}$ packet ($r, r+40, ots$), (b) It is impossible to use if items are already sequentially numbered",
            "feedback": "Sequential numbering makes systematic sampling exceptionally easy to implement. The principal danger is hidden periodic or cyclic behaviour in the production line."
        },
        {
            "ans": "(a) Choose random start $r n [1, 60]$, then take every $60ext{th}$ packet ($r, r+60, ots$), (b) A sampling frame is not required, leading to interviewer bias",
            "feedback": "The sampling interval is $k = 2400 / 60 = 40$, not $60$. Selecting every $60\\text{th}$ packet would yield only $40$ items, failing the required sample size of $60$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Always State the Random Start",
        "content": "In exam marking schemes for systematic sampling, mentioning the random starting point is almost always worth an independent mark. If you only write 'pick every $40\\text{th}$ item', you lose the mark because the method is not random without a randomised starting index between $1$ and $k$."
    }
},
{
    "id": "050069",
    "branch": "Statistics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Statistical Sampling",
    "topic": "Sampling Methods",
    "subtopic": [
        "Quota Sampling",
        "Non-random Methods"
    ],
    "img": false,
    "question": "A market researcher is investigating consumer attitudes towards electric vehicles in a market town. She stands in the high street on a Tuesday morning and interviews individuals until she has surveyed exactly $40$ car owners and $40$ non-car owners.<br><br><strong>(a)</strong> Identify this method of sampling.<br><br><strong>(b)</strong> State one advantage and one disadvantage of this method compared to stratified random sampling.",
    "steps": [
        "<strong>(a) Identification of Sampling Method:</strong><br><br>The method is <strong>quota sampling</strong>.<br><br>The researcher partitions the population into groups (car owners and non-car owners) and fills pre-set quotas opportunistically without a sampling frame.",
        "<strong>(b) Advantage and Disadvantage vs Stratified Sampling:</strong><br><br><strong>Advantage:</strong><br>Quota sampling does not require a sampling frame (complete list of residents). It is faster, cheaper, and easy to administer since non-respondents can be replaced immediately.<br><br><strong>Disadvantage:</strong><br>It is a non-random method subject to interviewer selection bias. The sample is not representative of the wider population (e.g. individuals on a high street on a Tuesday morning are unlikely to represent full-time workers).",
        "Final Answer: (a) Quota sampling, (b) Advantage: No sampling frame required; Disadvantage: Non-random and introduces interviewer/time bias"
    ],
    "pi_options": [
        {
            "ans": "(a) Stratified sampling, (b) Advantage: Completely random; Disadvantage: Requires a sampling frame",
            "feedback": "Because the interviewer selects participants non-randomly on the street until a target count is reached, this is quota sampling, not stratified sampling."
        },
        {
            "ans": "(a) Systematic sampling, (b) Advantage: Quick and easy to calculate intervals; Disadvantage: Periodic patterns introduce bias",
            "feedback": "Systematic sampling involves choosing every $k\\text{th}$ item from an ordered list. Selecting passers-by to fill categories of 40 is quota sampling."
        },
        {
            "ans": "(a) Quota sampling, (b) Advantage: Guarantees zero sampling error; Disadvantage: Requires a complete electoral register",
            "feedback": "Quota sampling never requires a register or sampling frame (that is its primary practical advantage), and no sampling method eliminates sampling error."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Quota vs Stratified",
        "content": "Both quota and stratified sampling divide the population into mutually exclusive categories. The critical distinction is that stratified sampling chooses participants at random from an exhaustive sampling frame, whereas quota sampling relies on the researcher opportunistically picking participants until each quota is met."
    }
},
{
    "id": "050070",
    "branch": "Statistics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Statistical Sampling",
    "topic": "Sampling Methods",
    "subtopic": [
        "Opportunity Sampling",
        "Bias and Sampling Frames"
    ],
    "img": false,
    "question": "A headteacher wishes to investigate student opinions on a proposed change to school lunchtime arrangements. She surveys the first $50$ students who enter the school canteen at 12:15.<br><br><strong>(a)</strong> Name the sampling method used, and give two distinct reasons why this sample is likely to be biased.<br><br><strong>(b)</strong> Suggest an improved random sampling method that avoids these biases, stating clearly the sampling frame that should be used.",
    "steps": [
        "<strong>(a) Sampling Method and Sources of Bias:</strong><br><br>The method is <strong>opportunity sampling</strong> (or convenience sampling).<br><br>Two distinct reasons for bias:<br>1. <strong>Location bias:</strong> The sample only includes students who eat in the canteen, completely omitting students who bring packed lunches, eat outdoors, attend lunchtime clubs, or go off-site.<br>2. <strong>Time bias:</strong> The sample only captures students arriving earliest at 12:15, whose attitudes, year groups, or hunger levels may differ from those arriving later.",
        "<strong>(b) Improved Random Sampling Method:</strong><br><br>Use a <strong>simple random sample</strong> (or a stratified sample by year group).<br><br><strong>Sampling frame:</strong> The official, comprehensive school register (a complete list of all enrolled students in the school). Each student is assigned a unique number, and $50$ distinct random numbers are generated using a computer or random number table.",
        "Final Answer: (a) Opportunity sampling; canteen-only exclusion and early-arrival bias, (b) Simple random sample using the complete school register as the sampling frame"
    ],
    "pi_options": [
        {
            "ans": "(a) Systematic sampling; canteen-only exclusion and early-arrival bias, (b) Quota sampling using student ID cards as the sampling frame",
            "feedback": "Taking the first 50 people who arrive is opportunity sampling, not systematic sampling. Quota sampling is non-random and does not avoid selection bias."
        },
        {
            "ans": "(a) Opportunity sampling; sample size too small and only girls surveyed, (b) Stratified sampling without using any sampling frame",
            "feedback": "The question does not mention gender, and a sample size of 50 is not inherently biased in itself. Furthermore, stratified sampling strictly requires an accurate sampling frame."
        },
        {
            "ans": "(a) Opportunity sampling; canteen-only exclusion and early-arrival bias, (b) Opportunity sample taken in the school library instead",
            "feedback": "Moving opportunity sampling to the library simply trades one biased, non-random location for another. A true probability sample requires a complete school register."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Opportunity Sampling Pitfalls",
        "content": "Opportunity sampling is the easiest to carry out, but exam boards frequently test why it fails. Whenever an exam scenario involves surveying 'the first $n$ people who walk past', highlight both the physical exclusion of those not present at that specific spot and the temporal bias of sampling at that exact moment."
    }
}
];