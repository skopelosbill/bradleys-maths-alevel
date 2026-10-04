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
    "question": "The manager of a leisure centre wishes to survey member satisfaction. The centre has $1200$ adult members, $450$ junior members, and $350$ senior members. The manager decides to take a stratified sample of $80$ members.<br><br><strong>(a)</strong> Calculate the number of junior members that should be included in the sample.<br><br><strong>(b)</strong> State what is meant by a <em>sampling frame</em> in this context, and explain why taking a stratified sample would not be possible if a complete register of members was unavailable.",
    "steps": [
        "<strong>(a) Junior Members in Stratified Sample:</strong><br><br>First calculate the total membership of the centre:\\begin{aligned} N &= 1200 + 450 + 350 \\cr &= 2000 \\end{aligned}Now calculate the proportional number of junior members for a sample of $n = 80$:\\begin{aligned} \\text{Junior sample} &= \\dfrac{450}{2000} \\times 80 \\cr &= \\dfrac{9}{40} \\times 80 \\cr &= 18 \\end{aligned}",
        "<strong>(b) Sampling Frame and Stratification:</strong><br><br>A sampling frame in this context is a complete, unique list or register of all $2000$ members of the leisure centre.<br><br>Without a complete register, members cannot be uniquely identified, categorised accurately into their respective age strata, or selected at random from within each stratum.",
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
            "feedback": "14 is the number of senior members ($\\dfrac{350}{2000} \\times 80 = 14$), not junior members."
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
    "question": "A food processing factory produces packets of crisps. A quality-control inspector wishes to check packet weights. During a single morning shift, $2400$ packets are produced, numbered sequentially from $1$ to $2400$ along a conveyor belt. The inspector decides to select a systematic sample of $60$ packets.<br><br><strong>(a)</strong> Describe clearly how the inspector should select this systematic sample.<br><br><strong>(b)</strong> State one potential hazard or disadvantage of using systematic sampling in this production environment.",
    "steps": [
        "<strong>(a) Selecting the Systematic Sample:</strong><br><br>1. Determine the sampling interval $k$:\\begin{aligned} k &= \\dfrac{2400}{60} \\cr &= 40 \\end{aligned}2. Select a random starting number $r$ from $1$ to $40$ inclusive.<br><br>3. Select packet $r$, followed by every $40$th packet thereafter:\\begin{aligned} &\\text{Packets: } r, r+40, r+80,\\cr & \\qquad \\quad \\dots, r+2360 \\end{aligned}",
        "<strong>(b) Potential Hazard:</strong><br><br>If the production process has an underlying periodic pattern or cyclic fault that coincides with the sampling interval (every $40$th packet), the sample will be severely biased (e.g. consistently picking packets from a faulty machine nozzle or missing periodic dips).",
        "Final Answer: (a) Choose random start $r$ from 1 to 40, then take every 40th packet ($r, r+40, \\dots$), (b) Periodic machine cycles matching the sampling interval introduce severe bias"
    ],
    "pi_options": [
        {
            "ans": "(a) Simply select packets 40, 80, 120, ..., 2400, (b) Periodic machine cycles matching the sampling interval introduce severe bias",
            "feedback": "Starting deterministically at packet 40 eliminates randomness. Systematic sampling requires a random starting integer between 1 and $k$ to give each packet an equal chance of selection."
        },
        {
            "ans": "(a) Choose random start $r$ from 1 to 40, then take every 40th packet ($r, r+40, \\dots$), (b) It is impossible to use if items are already sequentially numbered",
            "feedback": "Sequential numbering makes systematic sampling exceptionally easy to implement. The principal danger is hidden periodic or cyclic behaviour in the production line."
        },
        {
            "ans": "(a) Choose random start $r$ from 1 to 60, then take every 60th packet ($r, r+60, \\dots$), (b) A sampling frame is not required, leading to interviewer bias",
            "feedback": "The sampling interval is $k = 2400 / 60 = 40$, not $60$. Selecting every $60$th packet would yield only $40$ items, failing the required sample size of $60$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Always State the Random Start",
        "content": "In exam marking schemes for systematic sampling, mentioning the random starting point is almost always worth an independent mark. If you only write 'pick every $40$th item', you lose the mark because the method is not random without a randomised starting index between $1$ and $k$."
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
            "feedback": "Systematic sampling involves choosing every $k$th item from an ordered list. Selecting passers-by to fill categories of 40 is quota sampling."
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
},
{
    "id": "050071",
    "branch": "Statistics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Probability",
    "topic": "Discrete Random Variables",
    "subtopic": [
        "Probability Distributions",
        "Independent Observations"
    ],
    "img": false,
    "question": "The probability distribution of a discrete random variable $X$ is given in the table below:<table style='width:100%; max-width:260px; margin:15px auto; border-collapse:collapse; text-align:center;'><tr><td style='border:1px solid #999; padding:5px;'>$x$</td><td style='border:1px solid #999; padding:5px;'>$0$</td><td style='border:1px solid #999; padding:5px;'>$1$</td><td style='border:1px solid #999; padding:5px;'>$2$</td><td style='border:1px solid #999; padding:5px;'>$4$</td></tr><tr><td style='border:1px solid #999; padding:5px;'>$\\text{P}(X = x)$</td><td style='border:1px solid #999; padding:5px;'>$\\dfrac{1}{4}$</td><td style='border:1px solid #999; padding:5px;'>$\\dfrac{3}{8}$</td><td style='border:1px solid #999; padding:5px;'>$3p$</td><td style='border:1px solid #999; padding:5px;'>$p$</td></tr></table><strong>(a)</strong> Find the value of the constant $p$.<br><br><strong>(b)</strong> Two independent observations of $X$ are taken at random. Find the probability that the product of these two values is $0$.",
    "steps": [
        "<strong>(a) Finding the Value of $p$:</strong><br><br>The sum of all probabilities in a discrete probability distribution must equal $1$:\\begin{aligned} &\\sum \\text{P}(X = x) = 1 \\cr &\\dfrac{1}{4} + \\dfrac{3}{8} + 3p + p = 1 \\cr &\\dfrac{5}{8} + 4p = 1 \\cr &4p = \\dfrac{3}{8} \\cr &p = \\dfrac{3}{32} \\end{aligned}",
        "<strong>(b) Finding the Probability that the Product is $0$:</strong><br><br>The product of two values is $0$ if at least one observation is $0$:\\begin{aligned} \\text{P}(X = 0) &= \\dfrac{1}{4} \\cr \\text{P}(X \\neq 0) &= \\dfrac{3}{4} \\end{aligned}Using the complement rule:\\begin{aligned} &\\text{P}(\\text{Product } = 0) \\cr &\\quad = 1 - \\text{P}(\\text{neither is } 0) \\cr &\\quad = 1 - \\left(\\dfrac{3}{4}\\right)^2 \\cr &\\quad = 1 - \\dfrac{9}{16} \\cr &\\quad = \\dfrac{7}{16} \\end{aligned}",
        "Final Answer: (a) $p = \\dfrac{3}{32}$, (b) $\\dfrac{7}{16}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $p = \\dfrac{3}{32}$, (b) $\\dfrac{1}{16}$",
            "feedback": "This only considers the single outcome $(0,0)$. The product is also $0$ if one observation is $0$ and the other is non-zero, giving $\\frac{1}{16} + \\frac{6}{16} = \\frac{7}{16}$."
        },
        {
            "ans": "(a) $p = \\dfrac{1}{8}$, (b) $\\dfrac{7}{16}$",
            "feedback": "In part (a), the probabilities sum to $1$. Having $\\frac{5}{8} + 4p = 1$ leads to $4p = \\frac{3}{8}$, so $p = \\frac{3}{32}$, not $\\frac{3}{8} \\div 3 = \\frac{1}{8}$."
        },
        {
            "ans": "(a) $p = \\dfrac{3}{32}$, (b) $\\dfrac{9}{16}$",
            "feedback": "$\\frac{9}{16}$ is the probability that neither observation is $0$ (i.e. the product is non-zero). Subtract this from $1$ to find the probability that the product is $0$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Product Equals Zero Shortcut",
        "content": "For questions asking for the probability that a product is $0$, working directly requires adding three mutually exclusive cases: $(0,0)$, $(0, \\text{non-zero})$, and $(\\text{non-zero}, 0)$. It is almost always quicker to use the complement: $1 - \\text{P}(\\text{neither is } 0) = 1 - (\\frac{3}{4})^2 = \\frac{7}{16}$."
    }
},
{
    "id": "050072",
    "branch": "Statistics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Probability",
    "topic": "Discrete Random Variables",
    "subtopic": [
        "Sum of Variables",
        "Sample Space Combinations"
    ],
    "img": false,
    "question": "The discrete random variable $Y$ has the probability distribution shown in the table below:<table style='width:100%; max-width:260px; margin:15px auto; border-collapse:collapse; text-align:center;'><tr><td style='border:1px solid #999; padding:5px;'>$y$</td><td style='border:1px solid #999; padding:5px;'>$-2$</td><td style='border:1px solid #999; padding:5px;'>$0$</td><td style='border:1px solid #999; padding:5px;'>$1$</td><td style='border:1px solid #999; padding:5px;'>$3$</td></tr><tr><td style='border:1px solid #999; padding:5px;'>$\\text{P}(Y = y)$</td><td style='border:1px solid #999; padding:5px;'>$0.15$</td><td style='border:1px solid #999; padding:5px;'>$0.25$</td><td style='border:1px solid #999; padding:5px;'>$2k$</td><td style='border:1px solid #999; padding:5px;'>$3k$</td></tr></table><strong>(a)</strong> Find the value of the constant $k$.<br><br><strong>(b)</strong> Two independent observations of $Y$, denoted by $Y_1$ and $Y_2$, are taken. Find the probability that the sum $Y_1 + Y_2 > 0$.",
    "steps": [
        "<strong>(a) Finding the Value of $k$:</strong><br><br>Total probability must equal $1$:\\begin{aligned} &\\sum \\text{P}(Y = y) = 1 \\cr &0.15 + 0.25 + 2k + 3k = 1 \\cr &0.40 + 5k = 1 \\cr &5k = 0.60 \\cr &k = 0.12 \\end{aligned}This gives $\\text{P}(Y = 1) = 0.24$ and $\\text{P}(Y = 3) = 0.36$.",
        "<strong>(b) Finding $\\text{P}(Y_1 + Y_2 > 0)$:</strong><br><br>The complement is the event $Y_1 + Y_2 \\le 0$. The pairs yielding a sum $\\le 0$ are:\\begin{aligned} &(-2, -2) \\implies -4 \\cr &(-2, 0), (0, -2) \\implies -2 \\cr &(-2, 1), (1, -2) \\implies -1 \\cr &(0, 0) \\implies 0 \\end{aligned}Summing these probabilities vertically:\\begin{aligned} &\\text{P}(Y_1 + Y_2 \\le 0) \\cr &\\quad = 0.15^2 \\cr &\\quad\\quad + 2(0.15)(0.25) \\cr &\\quad\\quad + 2(0.15)(0.24) \\cr &\\quad\\quad + 0.25^2 \\cr &\\quad = 0.0225 + 0.0750 \\cr &\\quad\\quad + 0.0720 + 0.0625 \\cr &\\quad = 0.232 \\end{aligned}Therefore:\\begin{aligned} &\\text{P}(Y_1 + Y_2 > 0) \\cr &\\quad = 1 - 0.232 \\cr &\\quad = 0.768 \\end{aligned}",
        "Final Answer: (a) $k = 0.12$, (b) $0.768$"
    ],
    "pi_options": [
        {
            "ans": "(a) $k = 0.12$, (b) $0.660$",
            "feedback": "This common error misses the pairs $(3, -2)$ and $(-2, 3)$, which sum to $1 > 0$, omitting $2(0.36 \\times 0.15) = 0.108$ from the probability."
        },
        {
            "ans": "(a) $k = 0.20$, (b) $0.768$",
            "feedback": "In part (a), $0.15 + 0.25 = 0.40$, leaving $0.60$ for $5k$. Dividing $0.60$ by $5$ gives $k = 0.12$, not $0.20$."
        },
        {
            "ans": "(a) $k = 0.12$, (b) $0.232$",
            "feedback": "$0.232$ is the probability that $Y_1 + Y_2 \\le 0$. You must subtract this from $1$ to find $\\text{P}(Y_1 + Y_2 > 0)$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Complement Grid Strategy",
        "content": "When finding probabilities of sums exceeding a threshold, counting the complement $\\text{P}(Y_1 + Y_2 \\le 0)$ involves only $6$ outcome cells instead of $10$. Watch out especially for negative pairings like $(3, -2)$: since $3 + (-2) = 1 > 0$, this pair must be included in the $>0$ total."
    }
},
{
    "id": "050073",
    "branch": "Statistics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Probability",
    "topic": "Discrete Random Variables",
    "subtopic": [
        "Piecewise Probability Functions",
        "Compound Events"
    ],
    "img": false,
    "question": "A discrete random variable $X$ has the probability distribution defined by:\\begin{aligned} &\\text{P}(X = x) = \\cr &\\quad c(4 - x) \\quad \\text{for } x = 1, 2, 3 \\cr &\\quad c \\qquad\\quad \\text{for } x = 4 \\cr &\\quad 0 \\qquad\\quad \\text{otherwise} \\end{aligned}where $c$ is a positive constant.<br><br><strong>(a)</strong> Show that $c = \\dfrac{1}{7}$.<br><br><strong>(b)</strong> Two independent observations of $X$, denoted by $X_1$ and $X_2$, are made. Find the probability that:<br><strong>(i)</strong> $X_1 = X_2$<br><strong>(ii)</strong> $X_1 + X_2 = 5$",
    "steps": [
        "<strong>(a) Showing that $c = \\dfrac{1}{7}$:</strong><br><br>Evaluate the probability for each outcome:\\begin{aligned} &x = 1: \\quad c(4 - 1) = 3c \\cr &x = 2: \\quad c(4 - 2) = 2c \\cr &x = 3: \\quad c(4 - 3) = c \\cr &x = 4: \\quad c \\end{aligned}Since the total probability must equal $1$:\\begin{aligned} 3c + 2c + c + c &= 1 \\cr 7c &= 1 \\cr c &= \\dfrac{1}{7} \\end{aligned}",
        "<strong>(b)(i) Probability that $X_1 = X_2$:</strong><br><br>Sum the squared probabilities for identical pairs:\\begin{aligned} &\\text{P}(X_1 = X_2) \\cr &\\quad = \\left(\\dfrac{3}{7}\\right)^2 + \\left(\\dfrac{2}{7}\\right)^2 \\cr &\\quad\\quad + \\left(\\dfrac{1}{7}\\right)^2 + \\left(\\dfrac{1}{7}\\right)^2 \\cr &\\quad = \\dfrac{9 + 4 + 1 + 1}{49} \\cr &\\quad = \\dfrac{15}{49} \\end{aligned}",
        "<strong>(b)(ii) Probability that $X_1 + X_2 = 5$:</strong><br><br>The pairs $(X_1, X_2)$ that sum to $5$ are $(1,4), (4,1), (2,3), (3,2)$:\\begin{aligned} &\\text{P}(X_1 + X_2 = 5) \\cr &\\quad = 2\\,\\text{P}(1,4) + 2\\,\\text{P}(2,3) \\cr &\\quad = 2\\left(\\dfrac{3}{7} \\times \\dfrac{1}{7}\\right) \\cr &\\quad\\quad + 2\\left(\\dfrac{2}{7} \\times \\dfrac{1}{7}\\right) \\cr &\\quad = \\dfrac{6}{49} + \\dfrac{4}{49} \\cr &\\quad = \\dfrac{10}{49} \\end{aligned}",
        "Final Answer: (a) $c = \\dfrac{1}{7}$, (b)(i) $\\dfrac{15}{49}$, (ii) $\\dfrac{10}{49}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $c = \\dfrac{1}{7}$, (b)(i) $\\dfrac{14}{49}$, (ii) $\\dfrac{10}{49}$",
            "feedback": "In (b)(i), remember that $X=4$ has probability $c = \\frac{1}{7}$, so the pair $(4,4)$ contributes $(\\frac{1}{7})^2 = \\frac{1}{49}$. Omitting $(4,4)$ gives $\\frac{14}{49}$ instead of $\\frac{15}{49}$."
        },
        {
            "ans": "(a) $c = \\dfrac{1}{7}$, (b)(i) $\\dfrac{15}{49}$, (ii) $\\dfrac{5}{49}$",
            "feedback": "In (b)(ii), pairs must be counted in both orders: $(1,4)$ and $(4,1)$, as well as $(2,3)$ and $(3,2)$. Forgetting the reversed order halves the result to $\\frac{5}{49}$."
        },
        {
            "ans": "(a) $c = \\dfrac{1}{6}$, (b)(i) $\\dfrac{15}{49}$, (ii) $\\dfrac{10}{49}$",
            "feedback": "In part (a), students often forget the separate line for $x=4$, calculating $3c + 2c + c = 6c = 1$. The sum includes all 4 outcomes, so $7c = 1$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Piecewise Conditions",
        "content": "Read piecewise probability definitions with extreme care. Here $c(4 - x)$ only applies to $x = 1, 2, 3$. If you apply that formula to $x = 4$, you would get $c(4 - 4) = 0$, completely ignoring the actual definition $\\text{P}(X = 4) = c$."
    }
},
{
    "id": "050074",
    "branch": "Statistics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Probability",
    "topic": "Discrete Random Variables",
    "subtopic": [
        "Simultaneous Equations",
        "Independent Trials"
    ],
    "img": false,
    "question": "A discrete random variable $S$ represents the score obtained when a biased four-sided spinner is spun once. The probability distribution of $S$ is shown in the table below:<table style='width:100%; max-width:260px; margin:15px auto; border-collapse:collapse; text-align:center;'><tr><td style='border:1px solid #999; padding:5px;'>$s$</td><td style='border:1px solid #999; padding:5px;'>$1$</td><td style='border:1px solid #999; padding:5px;'>$2$</td><td style='border:1px solid #999; padding:5px;'>$3$</td><td style='border:1px solid #999; padding:5px;'>$4$</td></tr><tr><td style='border:1px solid #999; padding:5px;'>$\\text{P}(S = s)$</td><td style='border:1px solid #999; padding:5px;'>$0.40$</td><td style='border:1px solid #999; padding:5px;'>$a$</td><td style='border:1px solid #999; padding:5px;'>$b$</td><td style='border:1px solid #999; padding:5px;'>$0.15$</td></tr></table>It is given that $\\text{P}(S \\ge 3) = 3 \\times \\text{P}(S = 2)$.<br><br><strong>(a)</strong> By forming a pair of simultaneous equations, find the values of the constants $a$ and $b$.<br><br><strong>(b)</strong> The spinner is spun twice independently. Find the probability that the score on the second spin is strictly greater than the score on the first spin.",
    "steps": [
        "<strong>(a) Simultaneous Equations for $a$ and $b$:</strong><br><br>Total probability equals $1$:\\begin{aligned} &0.40 + a + b + 0.15 = 1 \\cr &a + b = 0.45 \\quad \\text{--- (1)} \\end{aligned}Using $\\text{P}(S \\ge 3) = 3 \\times \\text{P}(S = 2)$:\\begin{aligned} &b + 0.15 = 3a \\cr &3a - b = 0.15 \\quad \\text{--- (2)} \\end{aligned}Adding (1) and (2):\\begin{aligned} 4a &= 0.60 \\cr a &= 0.15 \\end{aligned}Substituting into (1):\\begin{aligned} 0.15 + b &= 0.45 \\cr b &= 0.30 \\end{aligned}",
        "<strong>(b) Probability that $S_2 > S_1$:</strong><br><br>Calculate the probability for each outcome of the first spin:\\begin{aligned} &\\text{P}(s_1 = 1, s_2 > 1) \\cr &\\quad = 0.40(0.15 + 0.30 + 0.15) \\cr &\\quad = 0.40(0.60) \\cr &\\quad = 0.24 \\cr &\\text{P}(s_1 = 2, s_2 > 2) \\cr &\\quad = 0.15(0.30 + 0.15) \\cr &\\quad = 0.15(0.45) \\cr &\\quad = 0.0675 \\cr &\\text{P}(s_1 = 3, s_2 > 3) \\cr &\\quad = 0.30(0.15) \\cr &\\quad = 0.045 \\end{aligned}Summing these values vertically:\\begin{aligned} &\\text{P}(S_2 > S_1) \\cr &\\quad = 0.24 + 0.0675 + 0.045 \\cr &\\quad = 0.3525 \\end{aligned}",
        "Final Answer: (a) $a = 0.15$, $b = 0.30$, (b) $0.3525$"
    ],
    "pi_options": [
        {
            "ans": "(a) $a = 0.15$, $b = 0.30$, (b) $0.4675$",
            "feedback": "This distractor mistakenly includes the cases where the two spins are equal ($S_2 = S_1$). For 'strictly greater than', equal scores must be excluded."
        },
        {
            "ans": "(a) $a = 0.10$, $b = 0.35$, (b) $0.3525$",
            "feedback": "In part (a), the equation is $3a - b = 0.15$ and $a + b = 0.45$. Adding them gives $4a = 0.60$, so $a = 0.15$ (not $0.10$) and $b = 0.30$."
        },
        {
            "ans": "(a) $a = 0.15$, $b = 0.30$, (b) $0.2925$",
            "feedback": "This omits the pair $(3,4)$, forgetting that a first spin of $3$ can still be followed by a second spin of $4$ with probability $0.30 \\times 0.15 = 0.045$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Strictly Greater Than",
        "content": "When a question specifies 'strictly greater than' ($S_2 > S_1$), never include diagonal pairs where both outcomes are identical ($S_1 = S_2$). Notice how factoring the second spin probabilities $\\text{P}(s_1 = 1)(0.60)$ makes calculations much faster than computing six separate terms individually."
    }
},
{
    "id": "050075",
    "branch": "Statistics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Probability",
    "topic": "Discrete Random Variables",
    "subtopic": [
        "Quadratic Probability Equations",
        "Independent Observations"
    ],
    "img": false,
    "question": "The discrete random variable $T$ has the probability distribution shown in the table below:<table style='width:100%; max-width:260px; margin:15px auto; border-collapse:collapse; text-align:center;'><tr><td style='border:1px solid #999; padding:5px;'>$t$</td><td style='border:1px solid #999; padding:5px;'>$-1$</td><td style='border:1px solid #999; padding:5px;'>$0$</td><td style='border:1px solid #999; padding:5px;'>$1$</td><td style='border:1px solid #999; padding:5px;'>$2$</td></tr><tr><td style='border:1px solid #999; padding:5px;'>$\\text{P}(T = t)$</td><td style='border:1px solid #999; padding:5px;'>$6k^2$</td><td style='border:1px solid #999; padding:5px;'>$\\dfrac{1}{4}$</td><td style='border:1px solid #999; padding:5px;'>$k$</td><td style='border:1px solid #999; padding:5px;'>$\\dfrac{5}{12}$</td></tr></table>where $k$ is a constant.<br><br><strong>(a)</strong> Show that $18k^2 + 3k - 1 = 0$, and hence determine the valid value of $k$, fully justifying why the other root must be rejected.<br><br><strong>(b)</strong> Three independent observations of $T$, denoted by $T_1, T_2,$ and $T_3$, are recorded. Find the probability that the product $T_1 T_2 T_3$ is negative.",
    "steps": [
        "<strong>(a) Quadratic Equation for $k$:</strong><br><br>The probabilities must sum to $1$:\\begin{aligned} &6k^2 + \\dfrac{1}{4} + k + \\dfrac{5}{12} = 1 \\cr &6k^2 + k + \\dfrac{8}{12} = 1 \\cr &6k^2 + k - \\dfrac{1}{3} = 0 \\end{aligned}Multiplying through by $3$:\\begin{aligned} &18k^2 + 3k - 1 = 0 \\cr &(6k - 1)(3k + 1) = 0 \\cr &k = \\dfrac{1}{6} \\quad \\text{or} \\quad k = -\\dfrac{1}{3} \\end{aligned}Since $\\text{P}(T = 1) = k$, we must have $k \\ge 0$. Reject $k = -\\dfrac{1}{3}$, leaving $k = \\dfrac{1}{6}$.",
        "<strong>(b) Finding the Probability that $T_1 T_2 T_3 < 0$:</strong><br><br>With $k = \\dfrac{1}{6}$, the probabilities are:\\begin{aligned} \\text{P}(T = -1) &= \\dfrac{1}{6} \\cr \\text{P}(T = 0) &= \\dfrac{1}{4} \\cr \\text{P}(T > 0) &= \\dfrac{1}{6} + \\dfrac{5}{12} \\cr &= \\dfrac{7}{12} \\end{aligned}Any factor of $0$ gives a product of $0$. A negative product requires either one negative and two positive observations, or three negative observations.<br><br><strong>Case 1: One negative and two positives</strong>\\begin{aligned} &3 \\times \\text{P}(-1) \\times [\\text{P}(T > 0)]^2 \\cr &\\quad = 3 \\times \\dfrac{1}{6} \\times \\left(\\dfrac{7}{12}\\right)^2 \\cr &\\quad = \\dfrac{1}{2} \\times \\dfrac{49}{144} \\cr &\\quad = \\dfrac{49}{288} \\end{aligned}<strong>Case 2: Three negatives</strong>\\begin{aligned} \\left(\\dfrac{1}{6}\\right)^3 &= \\dfrac{1}{216} \\end{aligned}Summing both cases vertically:\\begin{aligned} &\\text{P}(\\text{Product } < 0) \\cr &\\quad = \\dfrac{49}{288} + \\dfrac{1}{216} \\cr &\\quad = \\dfrac{147}{864} + \\dfrac{4}{864} \\cr &\\quad = \\dfrac{151}{864} \\end{aligned}",
        "Final Answer: (a) $k = \\dfrac{1}{6}$; reject $k = -\\dfrac{1}{3}$ since probabilities must be non-negative, (b) $\\dfrac{151}{864}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $k = \\dfrac{1}{6}$; reject $k = -\\dfrac{1}{3}$ since probabilities must be non-negative, (b) $\\dfrac{49}{288}$",
            "feedback": "$\\frac{49}{288}$ only accounts for Case 1 (one negative and two positives). You must also add the possibility that all three observations are negative: $(-1)^3 = -1$, adding $\\frac{1}{216}$ to give $\\frac{151}{864}$."
        },
        {
            "ans": "(a) $k = -\\dfrac{1}{3}$; valid because $(-1/3)^2 > 0$, (b) $\\dfrac{151}{864}$",
            "feedback": "While $6k^2$ would be positive for $k = -1/3$, $\\text{P}(T = 1) = k$, which would make that probability negative ($-1/3$). A probability can never be negative, so this root must be rejected."
        },
        {
            "ans": "(a) $k = \\dfrac{1}{6}$; reject $k = -\\dfrac{1}{3}$ since probabilities must be non-negative, (b) $\\dfrac{53}{864}$",
            "feedback": "This error forgets the factor of 3 for the different arrangements of one negative and two positive values (e.g. $(-,+,+), (+,-,+), (+,+,-)$), computing $\\frac{49}{864} + \\frac{4}{864} = \\frac{53}{864}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Product of Three Signs",
        "content": "When determining the sign of a product of three independent observations, first eliminate zero: any factor of $0$ gives a product of $0$, which is neither positive nor negative. Then remember that a negative product requires an odd number of negative factors: either exactly one negative (with two positives, in $3$ orders) or three negatives (in $1$ order)."
    }
},
{
    "id": "050076",
    "branch": "Statistics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Statistical Distributions",
    "topic": "Binomial Distribution",
    "subtopic": [
        "Modelling Assumptions",
        "Two-Stage Binomial"
    ],
    "img": false,
    "question": "The probability that Liam spots a red squirrel during a walk in a local woodland on any particular day is $0.25$. He records the number, $X$, of days in a $7$-day week on which he spots a red squirrel.<br><br><strong>(a)</strong> State one assumption necessary for $X$ to be modelled by a binomial distribution.<br><br>Assume now that $X \\sim B(7, 0.25)$.<br><br><strong>(b)</strong> Find the probability that, in a randomly chosen week, Liam spots a red squirrel on exactly $3$ days.<br><br>Each week, Liam notes whether he spots a red squirrel on exactly $3$ days.<br><br><strong>(c)</strong> Find the probability that Liam spots a red squirrel on exactly $3$ days in a week during at least $2$ of $5$ randomly chosen weeks.",
    "steps": [
        "<strong>(a) Modelling Assumption:</strong><br><br>Sightings on different days must be independent (e.g. spotting a squirrel on one day does not affect the probability of spotting one the next day), OR the probability of spotting a squirrel remains constant at $0.25$ throughout the week.",
        "<strong>(b) Probability of Exactly 3 Days:</strong><br><br>With $X \\sim B(7, 0.25)$:\\begin{aligned} &\\text{P}(X = 3) \\cr &\\quad = \\dbinom{7}{3}(0.25)^3(0.75)^4 \\cr &\\quad = 35(0.015625)(0.3164) \\cr &\\quad = 0.17304 \\cr &\\quad \\approx 0.173\\text{ (3 s.f.)} \\end{aligned}",
        "<strong>(c) Multi-Week Binomial:</strong><br><br>Let $Y$ be the number of weeks where a squirrel is spotted on exactly $3$ days. Then $Y \\sim B(5, 0.17304)$.<br><br>Using the complement rule:\\begin{aligned} &\\text{P}(Y \\ge 2) \\cr &\\quad = 1 - [\\text{P}(Y = 0) + \\text{P}(Y = 1)] \\cr &\\text{P}(Y = 0) = (0.82696)^5 \\cr &\\quad = 0.39074 \\cr &\\text{P}(Y = 1) \\cr &\\quad = 5(0.17304)(0.82696)^4 \\cr &\\quad = 0.40871 \\cr &\\text{P}(Y \\ge 2) \\cr &\\quad = 1 - (0.39074 + 0.40871) \\cr &\\quad = 1 - 0.79945 \\cr &\\quad = 0.20055 \\cr &\\quad \\approx 0.201\\text{ (3 s.f.)} \\end{aligned}",
        "Final Answer: (a) Daily sightings are independent, (b) $0.173$, (c) $0.201$"
    ],
    "pi_options": [
        {
            "ans": "(a) Daily sightings are independent, (b) $0.173$, (c) $0.799$",
            "feedback": "$0.799$ is $\\text{P}(Y \\le 1)$. To find $\\text{P}(Y \\ge 2)$, subtract this cumulative probability from $1$."
        },
        {
            "ans": "(a) Exactly two outcomes per walk, (b) $0.173$, (c) $0.218$",
            "feedback": "Rounding $p$ to $0.173$ too early in part (b) causes compounding rounding errors in part (c). Keep at least $4$ significant figures ($0.17304$) during intermediate steps."
        },
        {
            "ans": "(a) Daily sightings are independent, (b) $0.0577$, (c) $0.201$",
            "feedback": "In part (b), forgetting the binomial coefficient $\\binom{7}{3} = 35$ gives $(0.25)^3(0.75)^4 = 0.00494$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Intermediate Rounding Drift",
        "content": "When carrying a calculated probability into a secondary binomial model, never use your 3-significant-figure rounded value. Using $0.173$ instead of $0.17304$ alters higher powers like $0.173^2$ and produces inaccurate final answers that lose accuracy marks."
    }
},
{
    "id": "050077",
    "branch": "Statistics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Statistical Distributions",
    "topic": "Binomial Distribution",
    "subtopic": [
        "Modelling Conditions",
        "Cumulative Probabilities"
    ],
    "img": false,
    "question": "A commuter catches a morning train on each of the $5$ working days in a week. The probability that the train arrives on time on any morning is $0.85$, independently of all other mornings. Let $T$ be the number of days in a $5$-day working week that the train arrives on time.<br><br><strong>(a)</strong> State two conditions required for $T$ to follow a binomial distribution $B(5, 0.85)$.<br><br><strong>(b)</strong> Calculate the probability that, in a given working week, the train is on time on at least $4$ days.<br><br><strong>(c)</strong> Over an $8$-week period, find the probability that the train is on time on at least $4$ days in more than $6$ of the weeks.",
    "steps": [
        "<strong>(a) Binomial Conditions:</strong><br><br>1. The probability of the train being on time must be constant ($p = 0.85$) for every journey.<br><br>2. Punctuality on each day must be independent of all other days.",
        "<strong>(b) Single-Week Probability:</strong><br><br>With $T \\sim B(5, 0.85)$, we find $\\text{P}(T \\ge 4) = \\text{P}(T = 4) + \\text{P}(T = 5)$:\\begin{aligned} &\\text{P}(T = 4) \\cr &\\quad = \\dbinom{5}{4}(0.85)^4(0.15) \\cr &\\quad = 5(0.522006)(0.15) \\cr &\\quad = 0.39150 \\cr &\\text{P}(T = 5) \\cr &\\quad = (0.85)^5 \\cr &\\quad = 0.44371 \\cr &\\text{P}(T \\ge 4) \\cr &\\quad = 0.39150 + 0.44371 \\cr &\\quad = 0.83521 \\cr &\\quad \\approx 0.835\\text{ (3 s.f.)} \\end{aligned}",
        "<strong>(c) 8-Week Term Probability:</strong><br><br>Let $W$ be the number of weeks where the train is on time on at least $4$ days. Then $W \\sim B(8, 0.83521)$.<br><br>'More than 6 weeks' means $W = 7$ or $W = 8$:\\begin{aligned} &\\text{P}(W > 6) \\cr &\\quad = \\text{P}(W = 7) + \\text{P}(W = 8) \\cr &\\text{P}(W = 7) \\cr &\\quad = \\dbinom{8}{7}(0.83521)^7(0.16479) \\cr &\\quad = 8(0.27814)(0.16479) \\cr &\\quad = 0.36668 \\cr &\\text{P}(W = 8) \\cr &\\quad = (0.83521)^8 \\cr &\\quad = 0.23231 \\cr &\\text{P}(W > 6) \\cr &\\quad = 0.36668 + 0.23231 \\cr &\\quad = 0.59899 \\cr &\\quad \\approx 0.599\\text{ (3 s.f.)} \\end{aligned}",
        "Final Answer: (a) Constant probability and independence of trials, (b) $0.835$, (c) $0.599$"
    ],
    "pi_options": [
        {
            "ans": "(a) Constant probability and independence of trials, (b) $0.835$, (c) $0.877$",
            "feedback": "'More than 6' does not include 6. Including $\\text{P}(W = 6) = 0.278$ computes $\\text{P}(W \\ge 6) = 0.877$ instead of $\\text{P}(W > 6) = 0.599$."
        },
        {
            "ans": "(a) Constant probability and independence of trials, (b) $0.392$, (c) $0.599$",
            "feedback": "In part (b), 'at least 4 days' means $T = 4$ or $T = 5$. Omitting $T = 5$ gives only $\\text{P}(T = 4) = 0.392$."
        },
        {
            "ans": "(a) Large sample size and normal data, (b) $0.835$, (c) $0.232$",
            "feedback": "In part (a), sample size and normality are not requirements for a binomial model. In part (c), $0.232$ is only $\\text{P}(W = 8)$, omitting $W = 7$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Translating Inequality Words",
        "content": "In discrete distributions, always write out the exact integer outcomes before calculating: 'more than $6$' means strictly $7$ or $8$, whereas 'at least $6$' would mean $6, 7,$ or $8$. Translating the wording into list form prevents costly boundary errors."
    }
},
{
    "id": "050078",
    "branch": "Statistics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Statistical Distributions",
    "topic": "Binomial Distribution",
    "subtopic": [
        "Model Limitations",
        "Logarithmic Inequalities"
    ],
    "img": false,
    "question": "An archer is practising at a target. The probability that she hits the gold bullseye on any single shot is $0.6$.<br><br><strong>(a)</strong> Explain why a binomial distribution may not be a suitable model for the number of bullseyes hit in a series of $10$ consecutive shots taken by the archer.<br><br>Assume now that the archer's shots can be modelled as independent trials with a constant probability of $0.6$ of hitting the bullseye.<br><br><strong>(b)</strong> The archer takes $10$ shots. Find the probability that she hits the bullseye between $4$ and $7$ times inclusive.<br><br><strong>(c)</strong> Find the minimum number of shots the archer must take so that the probability of hitting the bullseye at least once is greater than $0.999$.",
    "steps": [
        "<strong>(a) Limitations of the Binomial Model:</strong><br><br>The assumption of independence may not hold: successive shots could be affected by physical fatigue, changing weather/wind conditions, or psychological factors (e.g. confidence after a hit or discouragement after a miss).",
        "<strong>(b) Cumulative Probability Calculation:</strong><br><br>With $X \\sim B(10, 0.6)$, we find $\\text{P}(4 \\le X \\le 7)$:\\begin{aligned} &\\text{P}(4 \\le X \\le 7) \\cr &\\quad = \\text{P}(X \\le 7) - \\text{P}(X \\le 3) \\cr &\\quad = 0.83271 - 0.05476 \\cr &\\quad = 0.77795 \\cr &\\quad \\approx 0.778\\text{ (3 s.f.)} \\end{aligned}",
        "<strong>(c) Finding the Minimum Number of Shots $n$:</strong><br><br>We require $\\text{P}(X \\ge 1) > 0.999$:\\begin{aligned} &1 - \\text{P}(X = 0) > 0.999 \\cr &1 - 0.4^n > 0.999 \\cr &0.4^n < 0.001 \\end{aligned}Taking natural logarithms of both sides:\\begin{aligned} &\\ln(0.4^n) < \\ln(0.001) \\cr &n\\ln(0.4) < \\ln(0.001) \\end{aligned}Since $\\ln(0.4) \\approx -0.9163 < 0$, dividing by $\\ln(0.4)$ reverses the inequality:\\begin{aligned} n &> \\dfrac{\\ln(0.001)}{\\ln(0.4)} \\cr n &> \\dfrac{-6.90776}{-0.91629} \\cr n &> 7.539 \\end{aligned}Since $n$ must be an integer, the minimum number of shots is $n = 8$.",
        "Final Answer: (a) Independence may fail due to fatigue or confidence, (b) $0.778$, (c) $8$"
    ],
    "pi_options": [
        {
            "ans": "(a) Independence may fail due to fatigue or confidence, (b) $0.778$, (c) $7$",
            "feedback": "Because $n > 7.54$, rounding down to $7$ gives a probability of only $1 - 0.4^7 = 0.99836 < 0.999$. You must round up to the next integer, $n = 8$."
        },
        {
            "ans": "(a) Number of shots is not fixed, (b) $0.666$, (c) $8$",
            "feedback": "In part (b), subtracting $\\text{P}(X \\le 4)$ gives $\\text{P}(5 \\le X \\le 7) = 0.666$. To include $4$ in the interval, subtract $\\text{P}(X \\le 3)$."
        },
        {
            "ans": "(a) Independence may fail due to fatigue or confidence, (b) $0.778$, (c) $6$",
            "feedback": "In part (c), forgetting to reverse the inequality sign when dividing by the negative value $\\ln(0.4)$ leads to $n < 7.54$ and incorrect rounding."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Inequality Reversal with Logarithms",
        "content": "When solving $a^n < b$ where $a < 1$, remember that $\\ln(a)$ is negative (since $\\ln(0.4) \\approx -0.916$). Dividing both sides by a negative quantity always flips the inequality from $<$ to $>$. Always double-check your final integer: $1 - 0.4^7 = 0.9984$ (too small), while $1 - 0.4^8 = 0.9993 > 0.999$."
    }
},
{
    "id": "050079",
    "branch": "Statistics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Statistical Distributions",
    "topic": "Binomial Distribution",
    "subtopic": [
        "Notation and Parameters",
        "Conditional Probability"
    ],
    "img": false,
    "question": "In a large dental practice, the probability that a randomly selected child has at least one cavity is $0.2$. A random sample of $12$ children is selected for a dental health study. Let $C$ represent the number of children in the sample who have at least one cavity.<br><br><strong>(a)</strong> State the probability distribution of $C$, including the values of any parameters.<br><br><strong>(b)</strong> Find the probability that $2 \\le C < 6$.<br><br><strong>(c)</strong> Given that at least one child in the sample has a cavity, find the conditional probability that fewer than $4$ children have a cavity. Give your answer to $3$ significant figures.",
    "steps": [
        "<strong>(a) Distribution of $C$:</strong><br><br>$$C \\sim B(12, 0.2)$$where $n = 12$ and $p = 0.2$.",
        "<strong>(b) Interval Probability $2 \\le C < 6$:</strong><br><br>Since $C$ is a discrete variable, $2 \\le C < 6$ corresponds to $2 \\le C \\le 5$:\\begin{aligned} &\\text{P}(2 \\le C \\le 5) \\cr &\\quad = \\text{P}(C \\le 5) - \\text{P}(C \\le 1) \\cr &\\quad = 0.98059 - 0.27488 \\cr &\\quad = 0.70571 \\cr &\\quad \\approx 0.706\\text{ (3 s.f.)} \\end{aligned}",
        "<strong>(c) Conditional Probability $\\text{P}(C < 4 \\mid C \\ge 1)$:</strong><br><br>Using the conditional probability definition:\\begin{aligned} &\\text{P}(C < 4 \\mid C \\ge 1) \\cr &\\quad = \\dfrac{\\text{P}(1 \\le C \\le 3)}{\\text{P}(C \\ge 1)} \\end{aligned}Denominator:\\begin{aligned} \\text{P}(C \\ge 1) &= 1 - \\text{P}(C = 0) \\cr &= 1 - 0.8^{12} \\cr &= 1 - 0.06872 \\cr &= 0.93128 \\end{aligned}Numerator:\\begin{aligned} &\\text{P}(1 \\le C \\le 3) \\cr &\\quad = \\text{P}(C \\le 3) - \\text{P}(C = 0) \\cr &\\quad = 0.79457 - 0.06872 \\cr &\\quad = 0.72585 \\end{aligned}Quotient:\\begin{aligned} &\\text{P}(C < 4 \\mid C \\ge 1) \\cr &\\quad = \\dfrac{0.72585}{0.93128} \\cr &\\quad = 0.77941 \\cr &\\quad \\approx 0.779\\text{ (3 s.f.)} \\end{aligned}",
        "Final Answer: (a) $C \\sim B(12, 0.2)$, (b) $0.706$, (c) $0.779$"
    ],
    "pi_options": [
        {
            "ans": "(a) $C \\sim B(12, 0.2)$, (b) $0.706$, (c) $0.853$",
            "feedback": "In part (c), dividing $\\text{P}(C \\le 3) = 0.795$ directly by $\\text{P}(C \\ge 1) = 0.931$ fails to restrict the numerator to the intersection: the outcome $C = 0$ is not part of $C \\ge 1$ and must be subtracted."
        },
        {
            "ans": "(a) $C \\sim B(12, 0.2)$, (b) $0.723$, (c) $0.779$",
            "feedback": "In part (b), $2 \\le C < 6$ strictly excludes $6$. Including $C = 6$ by computing $\\text{P}(C \\le 6) - \\text{P}(C \\le 1)$ gives $0.723$."
        },
        {
            "ans": "(a) $C \\sim B(2, 0.12)$, (b) $0.706$, (c) $0.726$",
            "feedback": "In part (c), $0.726$ is simply the numerator $\\text{P}(1 \\le C \\le 3)$. It must be divided by the conditioning probability $\\text{P}(C \\ge 1) = 0.931$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Conditional Binomial Intersections",
        "content": "Remember the formula $\\text{P}(A \\mid B) = \\frac{\\text{P}(A \\cap B)}{\\text{P}(B)}$. When evaluating the intersection of 'fewer than $4$' ($C \\le 3$) and 'at least $1$' ($C \\ge 1$), the possible values are strictly $1, 2,$ and $3$. You must exclude $C = 0$ from the numerator!"
    }
},
{
    "id": "050080",
    "branch": "Statistics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Statistical Distributions",
    "topic": "Binomial Distribution",
    "subtopic": [
        "Modelling Assumptions",
        "Geometric Sequences of Trials"
    ],
    "img": false,
    "question": "A board game uses a special biased eight-sided die with faces numbered $1$ to $8$. The probability of rolling an $8$ on any single roll is $0.2$. In a turn, a player rolls the die $15$ times. Let $R$ be the number of times an $8$ is rolled in a turn.<br><br><strong>(a)</strong> State two assumptions necessary to model $R$ with a binomial distribution.<br><br><strong>(b)</strong> Find the probability that a player rolls an $8$ on at least $5$ occasions in a turn.<br><br><strong>(c)</strong> To earn a bonus card, a player must roll an $8$ on at least $5$ occasions in a turn. During a game, Sophie takes $4$ turns.<br><br>Find the probability that Sophie earns her first bonus card on her fourth turn.",
    "steps": [
        "<strong>(a) Modelling Assumptions:</strong><br><br>1. The outcome of each roll must be independent of all other rolls.<br><br>2. The probability of rolling an $8$ remains constant ($p = 0.2$) on every roll.",
        "<strong>(b) Probability of at Least 5 Occasions:</strong><br><br>With $R \\sim B(15, 0.2)$:\\begin{aligned} &\\text{P}(R \\ge 5) \\cr &\\quad = 1 - \\text{P}(R \\le 4) \\cr &\\quad = 1 - 0.83577 \\cr &\\quad = 0.16423 \\cr &\\quad \\approx 0.164\\text{ (3 s.f.)} \\end{aligned}",
        "<strong>(c) First Bonus on Fourth Turn:</strong><br><br>Let $p = 0.1642$ be the probability of earning a bonus on a single turn, and $q = 1 - p = 0.8358$ be the probability of not earning a bonus.<br><br>The first bonus occurs on turn $4$ only with the specific sequence: Failure, Failure, Failure, Success:\\begin{aligned} &\\text{P}(\\text{first bonus on turn 4}) \\cr &\\quad = q^3 \\times p \\cr &\\quad = (0.8358)^3 \\times 0.1642 \\cr &\\quad = 0.5833 \\times 0.1642 \\cr &\\quad = 0.09578 \\cr &\\quad \\approx 0.0958\\text{ (3 s.f.)} \\end{aligned}",
        "Final Answer: (a) Constant probability and independent rolls, (b) $0.164$, (c) $0.0958$"
    ],
    "pi_options": [
        {
            "ans": "(a) Constant probability and independent rolls, (b) $0.164$, (c) $0.383$",
            "feedback": "This multiplies by $\\binom{4}{1} = 4$, which computes the probability of earning a bonus on *any* one of the 4 turns ($4 \\times 0.0958 = 0.383$). The question asks specifically for the *first* bonus to occur on the fourth turn (order $F, F, F, S$), so no combination coefficient is used."
        },
        {
            "ans": "(a) Constant probability and independent rolls, (b) $0.836$, (c) $0.0958$",
            "feedback": "In part (b), $0.836$ is $\\text{P}(R \\le 4)$. For 'at least $5$', subtract this cumulative probability from $1$ to get $0.164$."
        },
        {
            "ans": "(a) Equal outcomes on all faces, (b) $0.164$, (c) $0.0221$",
            "feedback": "In part (c), $(0.1642)^3 \\times 0.8358 = 0.0221$ calculates three successes followed by a failure, rather than three failures followed by a success."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: First Success vs Any Success",
        "content": "Be careful not to confuse a binomial trial with a geometric first-success sequence. If a question asks for 'the first success on the $4\\text{th}$ turn', there is only one specific sequence: Failure, Failure, Failure, Success ($q^3 p$). You must NOT multiply by $\\binom{4}{1} = 4$, which would give the probability of a single success anywhere in $4$ turns."
    }
},
{
    "id": "050081",
    "branch": "Statistics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Hypothesis Testing",
    "topic": "Binomial Hypothesis Testing",
    "subtopic": [
        "One-Tailed Test",
        "P-Value Method"
    ],
    "img": false,
    "question": "It is known that $15\\%$ of precision components produced by a standard manufacturing line are defective. An engineer introduces a modified machine calibration designed to reduce the proportion of defective components. In a random sample of $200$ components produced using this modified calibration, $18$ are found to be defective.<br><br>Test, at the $2\\%$ significance level, whether there is evidence that the modified calibration reduces the proportion of defective components.",
    "steps": [
        "<strong>Hypotheses and Model:</strong><br><br>Let $p$ be the population proportion of defective components under the modified calibration.\\begin{aligned} &H_0: p = 0.15 \\cr &H_1: p < 0.15 \\end{aligned}Under $H_0$, let $X$ be the number of defective components in a sample of $200$:\\begin{aligned} X \\sim B(200, 0.15) \\end{aligned}",
        "<strong>Test Statistic and $p$-Value:</strong><br><br>The observed test statistic is $X = 18$.<br><br>Since $H_1$ specifies $p < 0.15$, calculate the lower-tail probability:\\begin{aligned} &\\text{P}(X \\le 18) \\cr &\\quad = 0.0108\\text{ (or } 1.08\\%\\text{)} \\end{aligned}",
        "<strong>Comparison and Conclusion:</strong><br><br>Compare the $p$-value with the significance level $\\alpha = 0.02$:\\begin{aligned} &0.0108 < 0.02 \\end{aligned}Since $0.0108 < 0.02$, the result is statistically significant at the $2\\%$ level.<br><br>Reject $H_0$. There is sufficient evidence to suggest that the modified calibration reduces the proportion of defective components.",
        "Final Answer: Reject $H_0$ ($p = 0.0108 < 0.02$); sufficient evidence that the proportion of defectives has reduced"
    ],
    "pi_options": [
        {
            "ans": "Do not reject $H_0$ ($p = 0.0108 > 0.01$); insufficient evidence that the proportion of defectives has reduced",
            "feedback": "The test is conducted at the $2\\%$ level ($0.02$), not the $1\\%$ level ($0.01$). Since $0.0108 < 0.02$, the result is significant and $H_0$ must be rejected."
        },
        {
            "ans": "Do not reject $H_0$ ($p = 0.9892 > 0.02$); insufficient evidence that the proportion of defectives has reduced",
            "feedback": "This error calculates $\\text{P}(X \\ge 18) = 1 - \\text{P}(X \\le 17) = 0.9892$. Because $H_1$ tests for a reduction ($p < 0.15$), the lower-tail probability $\\text{P}(X \\le 18)$ must be used."
        },
        {
            "ans": "Reject $H_0$ ($p = 0.0108 < 0.02$); proves conclusively that the modified calibration eliminates all defectives",
            "feedback": "Hypothesis testing evaluates population proportions probabilistically; it never 'proves conclusively' that defectives are eliminated, but rather provides evidence of a reduction."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Writing Exam-Standard Conclusions",
        "content": "A complete conclusion in a binomial hypothesis test always requires two distinct components: a mathematical comparison (e.g. $0.0108 < 0.02$, reject $H_0$) and a non-definitive contextual conclusion (e.g. 'There is sufficient evidence to suggest...'). Never write absolute statements like 'this proves the calibration works'."
    }
},
{
    "id": "050082",
    "branch": "Statistics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Hypothesis Testing",
    "topic": "Binomial Hypothesis Testing",
    "subtopic": [
        "Upper-Tailed Test",
        "P-Value Method"
    ],
    "img": false,
    "question": "A local council claims that $25\\%$ of households in a borough regularly recycle their food waste. Following an environmental awareness campaign, an officer suspects that the proportion of households recycling food waste has increased. In a random sample of $60$ households, $22$ are found to regularly recycle food waste.<br><br><strong>(a)</strong> State suitable null and alternative hypotheses to test the officer's suspicion.<br><br><strong>(b)</strong> Stating clearly the statistical distribution used, carry out the hypothesis test at the $5\\%$ significance level. State your conclusion in context.",
    "steps": [
        "<strong>(a) Null and Alternative Hypotheses:</strong><br><br>Let $p$ represent the true proportion of households in the borough that regularly recycle food waste.\\begin{aligned} &H_0: p = 0.25 \\cr &H_1: p > 0.25 \\end{aligned}",
        "<strong>(b) Distribution and Test Statistic:</strong><br><br>Under $H_0$, let $X$ be the number of households recycling food waste in a sample of $60$:\\begin{aligned} X \\sim B(60, 0.25) \\end{aligned}The observed test statistic is $X = 22$.<br><br>Since $H_1$ tests for an increase ($p > 0.25$), calculate the upper-tail probability:\\begin{aligned} &\\text{P}(X \\ge 22) \\cr &\\quad = 1 - \\text{P}(X \\le 21) \\cr &\\quad = 1 - 0.9673 \\cr &\\quad = 0.0327\\text{ (or } 3.27\\%\\text{)} \\end{aligned}",
        "<strong>Conclusion in Context:</strong><br><br>Compare the $p$-value with the significance level $\\alpha = 0.05$:\\begin{aligned} &0.0327 < 0.05 \\end{aligned}Since $0.0327 < 0.05$, the result is significant at the $5\\%$ level.<br><br>Reject $H_0$. There is sufficient evidence at the $5\\%$ significance level to support the officer's suspicion that the proportion of households recycling food waste has increased.",
        "Final Answer: (a) $H_0: p = 0.25, \\ H_1: p > 0.25$, (b) Reject $H_0$ ($p = 0.0327 < 0.05$); sufficient evidence that the recycling proportion has increased"
    ],
    "pi_options": [
        {
            "ans": "(a) $H_0: p = 0.25, \\ H_1: p > 0.25$, (b) Do not reject $H_0$ ($p = 0.0327 > 0.025$); insufficient evidence that the recycling proportion has increased",
            "feedback": "This is a one-tailed test ($p > 0.25$) at the $5\\%$ level, so the full significance level $0.05$ is used, not $0.025$. Halving the significance level only applies to two-tailed tests."
        },
        {
            "ans": "(a) $H_0: p = 0.25, \\ H_1: p > 0.25$, (b) Do not reject $H_0$ ($p = 0.9673 > 0.05$); insufficient evidence that the recycling proportion has increased",
            "feedback": "$0.9673$ is $\\text{P}(X \\le 21)$. Because the alternative hypothesis is $p > 0.25$, you must calculate the upper-tail probability $\\text{P}(X \\ge 22) = 1 - 0.9673 = 0.0327$."
        },
        {
            "ans": "(a) $H_0: p = 0.22, \\ H_1: p > 0.22$, (b) Reject $H_0$ ($p = 0.0327 < 0.05$); sufficient evidence that the recycling proportion has increased",
            "feedback": "Hypotheses are always stated about the underlying population parameter ($p = 0.25$), never about the sample proportion ($22/60 \\approx 0.367$ or $0.22$)."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Upper-Tail Cumulative Logic",
        "content": "For upper-tail binomial tests ($\\text{P}(X \\ge x)$), remember that standard tables and calculators give $\\text{P}(X \\le k)$. To calculate $\\text{P}(X \\ge 22)$, you must subtract the cumulative probability up to $21$: $1 - \\text{P}(X \\le 21)$. Subtracting up to $22$ ($1 - \\text{P}(X \\le 22)$) would mistakenly omit $X = 22$ from your tail."
    }
},
{
    "id": "050083",
    "branch": "Statistics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Hypothesis Testing",
    "topic": "Binomial Hypothesis Testing",
    "subtopic": [
        "Critical Region",
        "Actual Significance Level"
    ],
    "img": false,
    "question": "A pharmaceutical company produces an established painkiller. Historically, $8\\%$ of patients who take this painkiller experience a mild side effect. A researcher reformulates the painkiller and claims that the new formulation reduces the proportion of patients who experience the side effect. A clinical trial is conducted on a random sample of $50$ patients taking the new formulation.<br><br>Let $X$ denote the number of patients in the trial who experience the side effect. A hypothesis test is to be carried out at the $5\\%$ significance level.<br><br><strong>(a)</strong> State the null and alternative hypotheses for this test.<br><br><strong>(b)</strong> Find the critical region for the test.<br><br><strong>(c)</strong> State the actual significance level of the test.<br><br><strong>(d)</strong> In the trial, exactly $1$ patient experiences the side effect. State, with a reason, the conclusion of the test in context.",
    "steps": [
        "<strong>(a) Hypotheses:</strong><br><br>Let $p$ be the proportion of patients taking the new formulation who experience the side effect.\\begin{aligned} &H_0: p = 0.08 \\cr &H_1: p < 0.08 \\end{aligned}",
        "<strong>(b) Finding the Critical Region:</strong><br><br>Under $H_0$, let $X$ be the number of patients experiencing the side effect in a sample of $50$:\\begin{aligned} X \\sim B(50, 0.08) \\end{aligned}Calculate lower-tail cumulative probabilities:\\begin{aligned} &\\text{P}(X \\le 0) \\cr &\\quad = (0.92)^{50} \\cr &\\quad = 0.0155 \\cr &\\text{P}(X \\le 1) \\cr &\\quad = 0.0155 + 50(0.08)(0.92)^{49} \\cr &\\quad = 0.0155 + 0.0673 \\cr &\\quad = 0.0828 \\end{aligned}Since $\\text{P}(X \\le 0) = 0.0155 \\le 0.05$ and $\\text{P}(X \\le 1) = 0.0828 > 0.05$, the critical region is:\\begin{aligned} X = 0 \\end{aligned}",
        "<strong>(c) Actual Significance Level:</strong><br><br>The actual significance level is the probability of rejecting $H_0$ when $H_0$ is true (the probability of falling in the critical region):\\begin{aligned} &\\text{Actual Level} \\cr &\\quad = \\text{P}(X \\le 0) \\cr &\\quad = 0.0155\\text{ (or } 1.55\\%\\text{)} \\end{aligned}",
        "<strong>(d) Test Conclusion:</strong><br><br>The observed value is $X = 1$.<br><br>Since $1$ does not lie in the critical region ($1 \\notin \\{0\\}$, or $p = 0.0828 > 0.05$), do not reject $H_0$.<br><br>There is insufficient evidence at the $5\\%$ significance level to suggest that the new formulation reduces the proportion of patients who experience the side effect.",
        "Final Answer: (a) $H_0: p = 0.08, \\ H_1: p < 0.08$, (b) $X = 0$, (c) $0.0155$, (d) Do not reject $H_0$; $1$ is not in the critical region"
    ],
    "pi_options": [
        {
            "ans": "(a) $H_0: p = 0.08, \\ H_1: p < 0.08$, (b) $X \\le 1$, (c) $0.0828$, (d) Reject $H_0$; $1$ is in the critical region",
            "feedback": "Including $X = 1$ in the critical region gives a tail probability of $0.0828$ ($8.28\\%$), which exceeds the allowable $5\\%$ significance level. Therefore, the critical region must strictly be $X = 0$."
        },
        {
            "ans": "(a) $H_0: p = 0.08, \\ H_1: p < 0.08$, (b) $X = 0$, (c) $0.0500$, (d) Do not reject $H_0$; $1$ is not in the critical region",
            "feedback": "The actual significance level of a discrete test is rarely equal to the nominal $5\\%$ level. It is the exact probability of the critical region occurring under $H_0$, which is $0.0155$ ($1.55\\%$)."
        },
        {
            "ans": "(a) $H_0: p = 0.08, \\ H_1: p \\neq 0.08$, (b) $X = 0$, (c) $0.0155$, (d) Reject $H_0$; $1$ indicates fewer side effects than expected",
            "feedback": "The researcher specifically claims that the formulation *reduces* side effects, requiring a one-tailed test ($H_1: p < 0.08$). Furthermore, observing a value lower than the expected value ($50 \\times 0.08 = 4$) is not enough to reject $H_0$ unless it falls inside the critical region."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Nominal vs Actual Significance Level",
        "content": "Because the binomial distribution is discrete, you cannot generally find an integer cutoff whose tail probability equals exactly $5\\%$. The nominal level ($5\\%$) is the maximum risk of a Type I error you are willing to tolerate; the actual significance level is the exact cumulative probability of the critical region ($1.55\\%$), which is strictly $\\le 5\\%$."
    }
},
{
    "id": "050084",
    "branch": "Statistics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Hypothesis Testing",
    "topic": "Binomial Hypothesis Testing",
    "subtopic": [
        "Two-Tailed Test",
        "P-Value Method"
    ],
    "img": false,
    "question": "A seed merchant claims that $70\\%$ of sunflower seeds of a particular variety germinate successfully when planted under standard conditions. A commercial grower suspects that the true germination rate differs from $70\\%$. The grower plants a random sample of $30$ seeds and observes that $16$ germinate successfully.<br><br>Test the merchant's claim at the $5\\%$ significance level.",
    "steps": [
        "<strong>Hypotheses and Distribution:</strong><br><br>Let $p$ be the true probability that a sunflower seed germinates successfully.\\begin{aligned} &H_0: p = 0.70 \\cr &H_1: p \\neq 0.70 \\end{aligned}Under $H_0$, let $X$ be the number of germinating seeds in a sample of $30$:\\begin{aligned} X \\sim B(30, 0.70) \\end{aligned}",
        "<strong>Expected Value and Tail Selection:</strong><br><br>The expected number of germinating seeds under $H_0$ is:\\begin{aligned} \\text{E}(X) &= 30 \\times 0.70 \\cr &= 21 \\end{aligned}The observed value is $X = 16$.<br><br>Since $16 < 21$, test the lower tail at half the significance level ($\\alpha / 2 = 0.05 / 2 = 0.025$).",
        "<strong>$p$-Value and Comparison:</strong><br><br>Calculate the lower-tail probability:\\begin{aligned} &\\text{P}(X \\le 16) \\cr &\\quad = 0.0401\\text{ (or } 4.01\\%\\text{)} \\end{aligned}Compare with the two-tailed comparison level $0.025$:\\begin{aligned} &0.0401 > 0.025 \\end{aligned}Alternatively, double the one-tailed $p$-value: $2 \\times 0.0401 = 0.0802 > 0.05$.",
        "<strong>Conclusion in Context:</strong><br><br>Since $0.0401 > 0.025$, the result is not statistically significant at the $5\\%$ level.<br><br>Do not reject $H_0$. There is insufficient evidence at the $5\\%$ significance level to suggest that the germination rate differs from $70\\%$.",
        "Final Answer: Do not reject $H_0$ ($p = 0.0401 > 0.025$); insufficient evidence that the germination rate differs from $70\\%$"
    ],
    "pi_options": [
        {
            "ans": "Reject $H_0$ ($p = 0.0401 < 0.05$); sufficient evidence that the germination rate differs from $70\\%$",
            "feedback": "Because the test is two-tailed ($H_1: p \\neq 0.70$), the single-tail probability must be compared to half the significance level ($0.05 / 2 = 0.025$). Since $0.0401 > 0.025$, the result is not significant."
        },
        {
            "ans": "Reject $H_0$ ($p = 0.0401 > 0.025$); sufficient evidence that the germination rate differs from $70\\%$",
            "feedback": "When the tail probability ($0.0401$) exceeds the significance threshold ($0.025$), the observed result is consistent with $H_0$. Therefore, you must *not* reject $H_0$."
        },
        {
            "ans": "Do not reject $H_0$ ($p = 0.9599 > 0.025$); insufficient evidence that the germination rate differs from $70\\%$",
            "feedback": "Because the observed count ($16$) is below the expected value ($21$), the lower-tail probability $\\text{P}(X \\le 16) = 0.0401$ must be evaluated, rather than the upper-tail probability $\\text{P}(X \\ge 16) = 0.9599$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Two-Tailed Decision Rules",
        "content": "In a two-tailed test, you have two mathematically equivalent methods to decide whether to reject $H_0$: either compare the single-tail probability to $\\alpha / 2$ ($0.0401$ vs $0.025$) OR double the tail probability to obtain the two-tailed $p$-value and compare to $\\alpha$ ($2 \\times 0.0401 = 0.0802$ vs $0.05$). Both yield the identical non-significant conclusion."
    }
},
{
    "id": "050085",
    "branch": "Statistics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Hypothesis Testing",
    "topic": "Binomial Hypothesis Testing",
    "subtopic": [
        "Two-Tailed Critical Region",
        "Actual Significance Level"
    ],
    "img": false,
    "question": "An online clothing retailer knows from past data that $40\\%$ of customers apply a discount code at checkout. Following a redesign of the checkout webpage, the marketing director wishes to investigate whether the proportion of customers applying a discount code has changed. A random sample of $25$ checkout transactions is monitored.<br><br>Let $Y$ represent the number of customers in the sample who apply a discount code. A two-tailed hypothesis test is to be conducted at the $10\\%$ significance level.<br><br><strong>(a)</strong> State the null and alternative hypotheses.<br><br><strong>(b)</strong> Determine the critical region for this test, allocating a probability of at most $5\\%$ to each tail.<br><br><strong>(c)</strong> Calculate the actual significance level of the test.",
    "steps": [
        "<strong>(a) Hypotheses:</strong><br><br>Let $p$ be the proportion of customers using a discount code under the new design.\\begin{aligned} &H_0: p = 0.40 \\cr &H_1: p \\neq 0.40 \\end{aligned}",
        "<strong>(b) Critical Region (at most $5\\%$ per tail):</strong><br><br>Under $H_0$, let $Y \\sim B(25, 0.40)$.<br><br><strong>Lower tail:</strong> Find the largest $c_1$ such that $\\text{P}(Y \\le c_1) \\le 0.05$:\\begin{aligned} &\\text{P}(Y \\le 4) = 0.0095 \\cr &\\text{P}(Y \\le 5) = 0.0294 \\cr &\\text{P}(Y \\le 6) = 0.0736 \\end{aligned}Since $0.0294 \\le 0.05$ and $0.0736 > 0.05$, the lower critical region is $Y \\le 5$.<br><br><strong>Upper tail:</strong> Find the smallest $c_2$ such that $\\text{P}(Y \\ge c_2) \\le 0.05$:\\begin{aligned} &\\text{P}(Y \\ge 15) \\cr &\\quad = 1 - \\text{P}(Y \\le 14) \\cr &\\quad = 1 - 0.9656 = 0.0344 \\cr &\\text{P}(Y \\ge 14) \\cr &\\quad = 1 - \\text{P}(Y \\le 13) \\cr &\\quad = 1 - 0.9222 = 0.0778 \\end{aligned}Since $0.0344 \\le 0.05$ and $0.0778 > 0.05$, the upper critical region is $Y \\ge 15$.<br><br>Therefore, the complete critical region is:\\begin{aligned} \\{Y \\le 5\\} \\cup \\{Y \\ge 15\\} \\end{aligned}",
        "<strong>(c) Actual Significance Level:</strong><br><br>The actual significance level is the sum of the probabilities in both critical tails:\\begin{aligned} &\\text{Actual Level} \\cr &\\quad = \\text{P}(Y \\le 5) + \\text{P}(Y \\ge 15) \\cr &\\quad = 0.0294 + 0.0344 \\cr &\\quad = 0.0638\\text{ (or } 6.38\\%\\text{)} \\end{aligned}",
        "Final Answer: (a) $H_0: p = 0.40, \\ H_1: p \\neq 0.40$, (b) $\\{Y \\le 5\\} \\cup \\{Y \\ge 15\\}$, (c) $0.0638$"
    ],
    "pi_options": [
        {
            "ans": "(a) $H_0: p = 0.40, \\ H_1: p \\neq 0.40$, (b) $\\{Y \\le 6\\} \\cup \\{Y \\ge 14\\}$, (c) $0.1514$",
            "feedback": "Choosing $Y \\le 6$ and $Y \\ge 14$ exceeds the required 'at most $5\\%$' constraint for each tail, since $\\text{P}(Y \\le 6) = 0.0736 > 0.05$ and $\\text{P}(Y \\ge 14) = 0.0778 > 0.05$."
        },
        {
            "ans": "(a) $H_0: p = 0.40, \\ H_1: p \\neq 0.40$, (b) $\\{Y \\le 5\\} \\cup \\{Y \\ge 15\\}$, (c) $0.1000$",
            "feedback": "$10\\%$ is the nominal significance level stated in the question. The actual significance level must be calculated by summing the exact binomial probabilities of the two tails: $0.0294 + 0.0344 = 0.0638$."
        },
        {
            "ans": "(a) $H_0: p = 0.40, \\ H_1: p \\neq 0.40$, (b) $\\{Y \\le 4\\} \\cup \\{Y \\ge 16\\}$, (c) $0.0190$",
            "feedback": "$Y \\le 4$ and $Y \\ge 16$ are overly conservative; $Y \\le 5$ and $Y \\ge 15$ are the largest sets that still satisfy the $\\le 0.05$ constraint for each tail."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: The 'At Most' Critical Region Rule",
        "content": "When an exam question instructs you to allocate 'at most $5\%$ to each tail', you must ensure neither tail probability exceeds $0.05$. In this case, while $0.0736$ and $0.0778$ are closer to $0.05$ than $0.0294$ and $0.0344$, they exceed the strict $5\%$ cap and must be rejected."
    }
},
{
    "id": "050086",
    "branch": "Statistics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Data Presentation and Interpretation",
    "topic": "Statistical Diagrams",
    "subtopic": [
        "Radar Diagrams",
        "Comparative Demographics"
    ],
    "img": "images/Statistics_pngs/050086.png",
    "question": "The radar diagrams illustrate census population figures for two Local Authorities: Camden (an urban London borough) and North Norfolk (a rural district).<br><br>Each radius represents an age group:<br>Radius 1: 0–17<br>Radius 2: 18–29<br>Radius 3: 30–44<br>Radius 4: 45–59<br>Radius 5: 60–74<br>Radius 6: 75+<br><br>The distance of each dot from the centre represents the number of people in the relevant age group.<br><br><strong>(a)</strong> The scales on the two diagrams are different. State an advantage and a disadvantage of using different scales in order to make comparisons between the ages of people in these two Local Authorities.<br><br><strong>(b)</strong> Approximately how many people aged 45 to 59 were there in Camden?<br><br><strong>(c)</strong> State the two main differences between the age profiles of the two Local Authorities.<br><br><strong>(d)</strong> A demographer claims that, assuming minimal migration into or out of the regions, future census results are likely to show an increase in the number of primary school-age children in Camden and a decrease in North Norfolk. Use the radar diagrams to give a demographic justification for this claim.",
    "steps": [
        "<strong>(a) Advantage and Disadvantage of Different Scales:</strong><br><br><strong>Advantage:</strong> It allows the overall shape and relative age distribution of each population to be clearly seen, preventing the smaller population (North Norfolk) from being compressed into an unreadable dot at the centre.<br><br><strong>Disadvantage:</strong> It can be visually misleading: Camden's polygon may look similar in size to North Norfolk's despite Camden having a vastly larger population, making direct comparisons of absolute population numbers difficult.",
        "<strong>(b) Reading Camden Population (Aged 45 to 59):</strong><br><br>Age group 45–59 is represented by Radius 4.<br><br>On the Camden diagram, the grid rings increment by $40\\,000$. The plotted point on Radius 4 lies at approximately $1.8$ grid units:\\begin{aligned} \\text{Population} &\\approx 1.8 \\times 40\\,000 \\cr &\\approx 72\\,000 \\end{aligned}(Accept values between $68\\,000$ and $76\\,000$.)",
        "<strong>(c) Differences in Age Profiles:</strong><br><br>1. <strong>Younger adults:</strong> Camden has a much higher proportion and concentration of young working-age adults (ages 18–44, Radii 2 and 3).<br><br>2. <strong>Older residents:</strong> North Norfolk has a much higher proportion of older adults and retirees (ages 60+, Radii 5 and 6).",
        "<strong>(d) Demographic Justification:</strong><br><br>Camden has a large population in the primary childbearing age bands (18–44), which is likely to result in a higher birth rate and an increase in primary school children.<br><br>Conversely, North Norfolk has very few residents of childbearing age and a large elderly population, resulting in a low birth rate and a decreasing child population.",
        "Final Answer: (a) Advantage: reveals relative shape; Disadvantage: obscures absolute population size, (b) Approximately 72 000, (c) Camden has more young adults; North Norfolk has more older residents, (d) Camden has many adults of childbearing age; North Norfolk has few"
    ],
    "pi_options": [
        {
            "ans": "(a) Advantage: reveals relative shape; Disadvantage: obscures absolute population size, (b) Approximately 21 000, (c) Camden has more young adults; North Norfolk has more older residents, (d) Camden has many adults of childbearing age; North Norfolk has few",
            "feedback": "Reading 21 000 mistakes Camden's grid scale for North Norfolk's scale ($8\\,000$ per ring). Camden's rings represent increments of $40\\,000$, giving $1.8 \\times 40\\,000 \\approx 72\\,000$."
        },
        {
            "ans": "(a) Advantage: eliminates all reading errors; Disadvantage: requires complex calculations, (b) Approximately 72 000, (c) Camden has more young adults; North Norfolk has more older residents, (d) Camden has many adults of childbearing age; North Norfolk has few",
            "feedback": "Different scales do not eliminate reading errors; in fact, having different scales increases the risk of misreading absolute figures."
        },
        {
            "ans": "(a) Advantage: reveals relative shape; Disadvantage: obscures absolute population size, (b) Approximately 72 000, (c) Both populations have identical shapes and median ages, (d) Camden has many adults of childbearing age; North Norfolk has few",
            "feedback": "The two age profiles are starkly different: Camden's radar polygon bulges strongly at Radii 2 and 3 (young working adults), while North Norfolk bulges at Radii 5 and 6 (older/retirees)."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Radar Diagrams and Bulge Direction",
        "content": "When interpreting population radar diagrams, look at the direction of the 'bulge'. A bulge towards the right and top (Radii 2 and 3) indicates a young urban population with university students and young professionals. A bulge towards the left and bottom (Radii 5 and 6) reflects an aging rural or coastal retirement population. Always check the ring units first before reading values!"
    }
},
{
    "id": "050087",
    "branch": "Statistics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Data Presentation and Interpretation",
    "topic": "Statistical Diagrams",
    "subtopic": [
        "Comparative Box Plots",
        "Outlier Boundaries"
    ],
    "img": "images/Statistics_pngs/050087.png",
    "question": "The comparative box plots show the distributions of daily maximum gust (measured in knots) recorded at two meteorological weather stations, Camborne (a coastal station) and Leeming (an inland station), over a sample period.<br><br>The key summary statistics for Camborne are $Q_1 = 14$, $\\text{Median} = 18$, and $Q_3 = 22$, with an extreme value plotted at $35\\text{ knots}$. For Leeming, $Q_1 = 8$, $\\text{Median} = 11$, and $Q_3 = 15$.<br><br><strong>(a)</strong> An outlier is defined as any value that lies more than $1.5 \\times \\text{IQR}$ above the upper quartile ($Q_3$) or below the lower quartile ($Q_1$). Show that the recorded gust of $35\\text{ knots}$ at Camborne is an outlier.<br><br><strong>(b)</strong> Compare the wind speed distributions of Camborne and Leeming by making two distinct comparisons in context (one regarding location and one regarding spread).<br><br><strong>(c)</strong> State, with a reason, whether the distribution of daily maximum gust at Leeming is positively skewed, negatively skewed, or approximately symmetric.",
    "steps": [
        "<strong>(a) Outlier Calculation for Camborne:</strong><br><br>First calculate the interquartile range for Camborne:\\begin{aligned} \\text{IQR} &= Q_3 - Q_1 \\cr &= 22 - 14 \\cr &= 8 \\end{aligned}Calculate the upper outlier boundary:\\begin{aligned} \\text{Upper limit} &= Q_3 + 1.5 \\times \\text{IQR} \\cr &= 22 + 1.5(8) \\cr &= 22 + 12 \\cr &= 34\\text{ knots} \\end{aligned}Since $35 > 34$, the observation at $35\\text{ knots}$ lies above the upper outlier boundary and is confirmed as an outlier.",
        "<strong>(b) Contextual Comparison:</strong><br><br>1. <strong>Location (Average):</strong> The median daily maximum gust at Camborne ($18\\text{ knots}$) is higher than at Leeming ($11\\text{ knots}$), showing that wind speeds are on average higher at the coastal station than the inland station.<br><br>2. <strong>Spread (Dispersion):</strong> The interquartile range at Camborne ($8\\text{ knots}$) is larger than at Leeming ($15 - 8 = 7\\text{ knots}$), indicating that daily wind speeds are more variable at Camborne than at Leeming.",
        "<strong>(c) Skewness of Leeming:</strong><br><br>Compare the quartile differences:\\begin{aligned} Q_3 - \\text{Median} &= 15 - 11 \\cr &= 4 \\cr \\text{Median} - Q_1 &= 11 - 8 \\cr &= 3 \\end{aligned}Since $Q_3 - \\text{Median} > \\text{Median} - Q_1$ (and the upper whisker is longer than the lower whisker), the distribution is <strong>positively skewed</strong>.",
        "Final Answer: (a) Upper limit is 34; 35 > 34, so it is an outlier, (b) Median is higher at Camborne (18 vs 11 knots); IQR is larger at Camborne (8 vs 7 knots), (c) Positively skewed since Q3 - Median > Median - Q1"
    ],
    "pi_options": [
        {
            "ans": "(a) Upper limit is 34; 35 > 34, so it is an outlier, (b) Median is higher at Camborne (18 vs 11 knots); IQR is larger at Camborne (8 vs 7 knots), (c) Negatively skewed since the lower whisker is shorter",
            "feedback": "When the upper whisker is longer and $Q_3 - \\text{Median} > \\text{Median} - Q_1$, the long tail extends to the right, indicating positive skew, not negative skew."
        },
        {
            "ans": "(a) Upper limit is 38; 35 < 38, so it is not an outlier, (b) Median is higher at Camborne (18 vs 11 knots); IQR is larger at Camborne (8 vs 7 knots), (c) Positively skewed since Q3 - Median > Median - Q1",
            "feedback": "Calculating the limit using $Q_3 + 2 \\times \\text{IQR} = 22 + 16 = 38$ is incorrect. The standard 1.5 multiplier gives an upper boundary of $22 + 1.5(8) = 34$, making 35 an outlier."
        },
        {
            "ans": "(a) Upper limit is 34; 35 > 34, so it is an outlier, (b) Camborne has higher numbers and Leeming has lower numbers, (c) Approximately symmetric because the box is centered",
            "feedback": "In part (b), comparisons must be stated in context quoting statistical measures (median and IQR) and naming the variable (wind speed or knots). Vague statements like 'higher numbers' earn zero marks."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Box Plot Comparisons In Context",
        "content": "When an exam question asks you to 'compare the distributions', you must give two distinct statements: one comparing location (quote both medians with units) and one comparing spread (quote both IQRs or ranges with units). Always name the context ($knots$ or wind speed); never just write 'the average is higher'."
    }
},
{
    "id": "050088",
    "branch": "Statistics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Data Presentation and Interpretation",
    "topic": "Statistical Diagrams",
    "subtopic": [
        "Cumulative Frequency",
        "Interquartile Range"
    ],
    "img": "images/Statistics_pngs/050088.png",
    "question": "The diagram shows cumulative frequency curves representing the daily commute times (in minutes) for representative samples of workers in Town A (an outer suburban town) and Town B (a compact urban town).<br><br><strong>(a)</strong> Estimate the median daily commute time for workers in:<br><strong>(i)</strong> Town A<br><strong>(ii)</strong> Town B<br><br><strong>(b)</strong> Estimate the interquartile range (IQR) of commute times for workers in Town A.<br><br><strong>(c)</strong> A transport planner claims that workers in Town B generally experience shorter and more consistent commute times than workers in Town A. State whether the data support this claim, justifying your response using your answers from parts <strong>(a)</strong> and <strong>(b)</strong>.<br><br><strong>(d)</strong> Estimate the percentage of workers in Town A whose daily commute exceeds $45\\text{ minutes}$.",
    "steps": [
        "<strong>(a) Estimating Median Commute Times:</strong><br><br>The median corresponds to a cumulative frequency of $50\\%$.<br><br><strong>(i) Town A:</strong> Reading across from $50\\%$ to the blue curve and down to the horizontal axis gives approximately $37\\text{ minutes}$ (accept $36$ to $38\\text{ minutes}$).<br><br><strong>(ii) Town B:</strong> Reading across from $50\\%$ to the red curve gives approximately $20\\text{ minutes}$ (accept $19$ to $21\\text{ minutes}$).",
        "<strong>(b) Estimating IQR for Town A:</strong><br><br>Read the quartiles for Town A from the vertical axis:<br>Lower quartile ($Q_1$) at $25\\%$: approx $27\\text{ minutes}$ (accept $26$ to $28$).<br>Upper quartile ($Q_3$) at $75\\%$: approx $45\\text{ minutes}$.\\begin{aligned} \\text{IQR} &= Q_3 - Q_1 \\cr &= 45 - 27 \\cr &= 18\\text{ minutes} \\end{aligned}(Accept values between $17$ and $19\\text{ minutes}$.)",
        "<strong>(c) Evaluating the Planner's Claim:</strong><br><br>Yes, the data support the claim.<br><br>1. <strong>Shorter commutes:</strong> The median commute time in Town B ($20\\text{ min}$) is significantly lower than in Town A ($37\\text{ min}$).<br><br>2. <strong>More consistent:</strong> The curve for Town B is steeper between $10$ and $30\\text{ minutes}$, indicating a narrower spread of data (a smaller IQR of approximately $12\\text{ min}$ vs $18\\text{ min}$), meaning commute times in Town B are more consistent.",
        "<strong>(d) Percentage Exceeding 45 Minutes in Town A:</strong><br><br>At a commute time of $45\\text{ minutes}$, the cumulative frequency on Town A's curve is $75\\%$.\\begin{aligned} \\text{Percentage} &= 100\\% - 75\\% \\cr &= 25\\% \\end{aligned}",
        "Final Answer: (a)(i) 37 mins, (ii) 20 mins, (b) 18 mins, (c) Supported; lower median (20 vs 37 mins) and smaller IQR, (d) 25%"
    ],
    "pi_options": [
        {
            "ans": "(a)(i) 37 mins, (ii) 20 mins, (b) 18 mins, (c) Supported; lower median (20 vs 37 mins) and smaller IQR, (d) 75%",
            "feedback": "75% is the cumulative percentage of workers whose commute is *up to* 45 minutes. To find the percentage who commute for *more* than 45 minutes, subtract from 100%: $100\\% - 75\\% = 25\\%$."
        },
        {
            "ans": "(a)(i) 45 mins, (ii) 28 mins, (b) 28 mins, (c) Supported; lower median (20 vs 37 mins) and smaller IQR, (d) 25%",
            "feedback": "Reading medians at a cumulative frequency of $50\\%$ yields approximately 37 minutes for Town A and 20 minutes for Town B. 45 minutes is the upper quartile ($Q_3$) for Town A, not the median."
        },
        {
            "ans": "(a)(i) 37 mins, (ii) 20 mins, (b) 18 mins, (c) Not supported; Town A has a higher maximum commute time, (d) 25%",
            "feedback": "The transport planner claimed that Town B has shorter and more consistent times. Because Town B has a lower median and a smaller IQR (steeper curve), the claim is fully supported by the data."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Steepness and Consistency",
        "content": "On a cumulative frequency graph, steepness directly reflects consistency. A steep curve means a large proportion of the population is concentrated within a very narrow interval of the horizontal axis, resulting in a small $\\text{IQR}$ and high consistency. A shallow, stretched-out curve indicates high variability."
    }
},
{
    "id": "050089",
    "branch": "Statistics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Data Presentation and Interpretation",
    "topic": "Statistical Diagrams",
    "subtopic": [
        "Population Pyramids",
        "Demographic Comparison"
    ],
    "img": "images/Statistics_pngs/050089.png",
    "question": "The back-to-back horizontal bar chart (population pyramid) displays the percentage age distributions of residents living in two distinct electoral wards: University Ward and Coastal Ward.<br><br><strong>(a)</strong> State the modal age category for:<br><strong>(i)</strong> University Ward<br><strong>(ii)</strong> Coastal Ward<br><br><strong>(b)</strong> Determine the total percentage of residents aged 60 and over in:<br><strong>(i)</strong> University Ward<br><strong>(ii)</strong> Coastal Ward<br><br><strong>(c)</strong> Give one distinct planning implication for local public service providers (such as healthcare, transport, or education) that arises directly from the demographic differences between these two wards.",
    "steps": [
        "<strong>(a) Modal Age Categories:</strong><br><br>The modal category is represented by the longest horizontal bar for each ward:<br><strong>(i) University Ward:</strong> The longest bar is in the <strong>18–29</strong> age category ($36\\%$).<br><br><strong>(ii) Coastal Ward:</strong> The longest bar is in the <strong>60–74</strong> age category ($25\\%$).",
        "<strong>(b) Percentage Aged 60 and Over:</strong><br><br>Sum the percentages in the 60–74 and 75+ categories:<br><br><strong>(i) University Ward:</strong>\\begin{aligned} 9\\% + 5\\% = 14\\% \\end{aligned}<strong>(ii) Coastal Ward:</strong>\\begin{aligned} 25\\% + 15\\% = 40\\% \\end{aligned}",
        "<strong>(c) Planning Implications:</strong><br><br>Any sensible, contextual public service implication:<br><br>1. <strong>Healthcare / Social Care:</strong> Coastal Ward has a much higher elderly population ($40\\%$ aged 60+ vs $14\\%$), requiring greater investment in geriatric healthcare, chronic care facilities, and mobility support services.<br><br>2. <strong>Housing / Education / Night Economy:</strong> University Ward has $36\\%$ of residents aged 18–29, requiring student accommodation, vocational and higher education infrastructure, and late-night public transport services.",
        "Final Answer: (a)(i) 18–29, (ii) 60–74, (b)(i) 14%, (ii) 40%, (c) Coastal Ward needs more elderly care; University Ward needs young adult housing/education"
    ],
    "pi_options": [
        {
            "ans": "(a)(i) 18–29, (ii) 60–74, (b)(i) 9%, (ii) 25%, (c) Coastal Ward needs more elderly care; University Ward needs young adult housing/education",
            "feedback": "In part (b), 'aged 60 and over' includes both the 60–74 category and the 75+ category. Forgetting the 75+ bar gives 9% and 25% instead of 14% and 40%."
        },
        {
            "ans": "(a)(i) 30–44, (ii) 45–59, (b)(i) 14%, (ii) 40%, (c) Coastal Ward needs more elderly care; University Ward needs young adult housing/education",
            "feedback": "The modal group is the single category with the highest frequency (longest bar). For University Ward this is 18–29 (36%), and for Coastal Ward it is 60–74 (25%)."
        },
        {
            "ans": "(a)(i) 18–29, (ii) 60–74, (b)(i) 14%, (ii) 40%, (c) Both wards have identical demographics and require the same school funding",
            "feedback": "The demographic structures are strongly polarised: University Ward is heavily skewed towards young working adults and students, while Coastal Ward is an older retirement area."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Interpreting Population Pyramids",
        "content": "Population pyramids provide an immediate visual diagnostic of a community. An expansive base or middle (wide at 18–29) indicates a university or thriving urban economic centre. A top-heavy pyramid (wide at 60+) indicates a coastal retirement community with high dependency ratios that place heavy demands on health and social services."
    }
},
{
    "id": "050090",
    "branch": "Statistics",
    "board": "OCR",
    "level": "AS",
    "major_area": "Data Presentation and Interpretation",
    "topic": "Statistical Diagrams",
    "subtopic": [
        "Comparative Histograms",
        "Linear Interpolation"
    ],
    "img": "images/Statistics_pngs/050090.png",
    "question": "The histograms illustrate the weekly supermarket expenditure per person (in £) for random samples of $100$ residents each from District A and District B.<br><br><strong>(a)</strong> Using the frequency densities shown in the diagram for District A:<br><strong>(i)</strong> Show that the total frequency of District A is $100$.<br><strong>(ii)</strong> Calculate an estimate for the mean weekly expenditure per person in District A.<br><br><strong>(b)</strong> For District B, use linear interpolation on the histogram data to calculate an estimate of the median weekly expenditure per person. Give your answer to 3 significant figures.<br><br><strong>(c)</strong> State, with reference to the shapes of the distributions, why the median and interquartile range are generally preferred over the mean and standard deviation for comparing household expenditures.",
    "steps": [
        "<strong>(a)(i) Total Frequency for District A:</strong><br><br>Calculate the frequency of each bar as $\\text{Frequency} = \\text{Class width} \\times \\text{Frequency density}$:\\begin{aligned} &\\text{Class } [0, 10): \\quad 10 \\times 2.4 = 24 \\cr &\\text{Class } [10, 20): \\quad 10 \\times 4.8 = 48 \\cr &\\text{Class } [20, 30): \\quad 10 \\times 2.0 = 20 \\cr &\\text{Class } [30, 50): \\quad 20 \\times 0.4 = 8 \\end{aligned}Summing the frequencies:\\begin{aligned} 24 + 48 + 20 + 8 = 100 \\end{aligned}",
        "<strong>(a)(ii) Estimate of the Mean for District A:</strong><br><br>Use the midpoints of each interval ($5, 15, 25, 40$):\\begin{aligned} &\\sum fx \\cr &\\quad = (24 \\times 5) + (48 \\times 15) \\cr &\\quad\\quad + (20 \\times 25) + (8 \\times 40) \\cr &\\quad = 120 + 720 + 500 + 320 \\cr &\\quad = 1660 \\end{aligned}Calculate the mean:\\begin{aligned} \\bar{x} &= \\dfrac{1660}{100} \\cr &= £16.60 \\end{aligned}",
        "<strong>(b) Median for District B via Linear Interpolation:</strong><br><br>Calculate the frequencies for District B:\\begin{aligned} &\\text{Class } [0, 10): \\quad 10 \\times 0.8 = 8 \\cr &\\text{Class } [10, 20): \\quad 10 \\times 2.2 = 22 \\cr &\\text{Class } [20, 30): \\quad 10 \\times 4.5 = 45 \\cr &\\text{Class } [30, 50): \\quad 20 \\times 1.25 = 25 \\end{aligned}The cumulative frequencies are: $8, 30, 75, 100$.<br><br>The median is the $50\\text{th}$ value, which falls in the class $[20, 30)$ where lower boundary $L = 20$, width $w = 10$, frequency $f = 45$, and cumulative frequency before this class $F = 30$:\\begin{aligned} \\text{Median} &= L + \\dfrac{50 - F}{f} \\times w \\cr &= 20 + \\dfrac{50 - 30}{45} \\times 10 \\cr &= 20 + \\dfrac{200}{45} \\cr &= 20 + 4.444 \\cr &= £24.44 \\cr &\\approx £24.40\\text{ (3 s.f.)} \\end{aligned}",
        "<strong>(c) Preference for Median and IQR:</strong><br><br>Expenditure data is positively skewed and often contains high-value outliers (e.g. affluent households spending large amounts).<br><br>The median and interquartile range are resistant (non-parametric) statistics that are not distorted by extreme outliers, whereas the mean and standard deviation are pulled upwards by extreme high values.",
        "Final Answer: (a)(i) 24 + 48 + 20 + 8 = 100, (ii) £16.60, (b) £24.40, (c) Median and IQR are resistant to positive skew and extreme high outliers"
    ],
    "pi_options": [
        {
            "ans": "(a)(i) 24 + 48 + 20 + 8 = 100, (ii) £16.60, (b) £25.00, (c) Median and IQR are resistant to positive skew and extreme high outliers",
            "feedback": "£25.00 is simply the midpoint of the median class $[20, 30)$. Linear interpolation uses the frequency distribution within the class: $20 + \\frac{20}{45} \\times 10 = £24.44 \\approx £24.40$."
        },
        {
            "ans": "(a)(i) 24 + 48 + 20 + 8 = 100, (ii) £19.50, (b) £24.40, (c) Median and IQR are resistant to positive skew and extreme high outliers",
            "feedback": "In part (a)(ii), £19.50 is the unweighted average of the four midpoints: $(5 + 15 + 25 + 40) / 4$. You must multiply each midpoint by its respective frequency and divide by the total frequency ($100$)."
        },
        {
            "ans": "(a)(i) 24 + 48 + 20 + 8 = 100, (ii) £16.60, (b) £24.40, (c) The mean is always larger than the median in symmetric distributions",
            "feedback": "In symmetric distributions, the mean and median are equal. The reason the median is preferred for financial data is that expenditure distributions are positively skewed with extreme high values that inflate the mean."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Linear Interpolation Formula",
        "content": "For linear interpolation from grouped frequency data or histograms, memorize the formula: $\\text{Median} = L + \\frac{\\frac{n}{2} - F}{f} \\times w$, where $L$ is the lower class boundary, $F$ is the cumulative frequency up to that boundary, $f$ is the frequency of the median class, and $w$ is the class width. Setting up these four parameters first prevents algebraic slips."
    }
},
{
    "id": "050091",
    "branch": "Statistics",
    "board": "OCR",
    "level": "A",
    "major_area": "Statistical Distributions",
    "topic": "The Normal Distribution",
    "subtopic": [
        "Standardisation",
        "Inverse Normal",
        "Parameterised Distribution"
    ],
    "img": false,
    "question": "<strong>(a)</strong> The continuous random variable $X$ is normally distributed with $X \\sim N(30, 16)$.<br><br><strong>(i)</strong> Find $\\text{P}(X > 35)$.<br><br><strong>(ii)</strong> Given that $\\text{P}(X < c) = 0.15$, find the value of the constant $c$.<br><br><strong>(iii)</strong> Find the value of $d$ such that $\\text{P}(30 - d < X < 30 + d) = 0.8$.<br><br><strong>(b)</strong> The continuous random variable $Y$ has the distribution $N\\left(\\mu, \\dfrac{\\mu^2}{16}\\right)$, where $\\mu > 0$.<br><br>Find $\\text{P}(Y < 0.6\\mu)$.",
    "steps": [
        "<strong>(a)(i) Finding $\\text{P}(X > 35)$:</strong><br><br>With $\\mu = 30$ and $\\sigma = \\sqrt{16} = 4$:\\begin{aligned} Z &= \\dfrac{35 - 30}{4} \\cr &= 1.25 \\end{aligned}Using the standard normal distribution:\\begin{aligned} \\text{P}(X > 35) &= \\text{P}(Z > 1.25) \\cr &= 1 - 0.8944 \\cr &= 0.1056 \\end{aligned}",
        "<strong>(a)(ii) Finding the Value of $c$:</strong><br><br>We are given $\\text{P}(X < c) = 0.15$. The corresponding $z$-score is negative:\\begin{aligned} Z &= -1.0364 \\end{aligned}Using the standardisation formula:\\begin{aligned} \\dfrac{c - 30}{4} &= -1.0364 \\cr c - 30 &= -4.1456 \\cr c &= 25.85\\text{ (2 d.p.)} \\end{aligned}",
        "<strong>(a)(iii) Finding the Value of $d$:</strong><br><br>The interval $(30 - d, 30 + d)$ is symmetrical about the mean $\\mu = 30$, containing $80\\%$ of the distribution.<br><br>The two tails contain $10\\%$ each:\\begin{aligned} &\\text{P}(X < 30 + d) = 0.90 \\end{aligned}Find the upper critical value:\\begin{aligned} Z &= 1.2816 \\end{aligned}Standardising the upper boundary:\\begin{aligned} \\dfrac{d}{4} &= 1.2816 \\cr d &= 5.13\\text{ (2 d.p.)} \\end{aligned}",
        "<strong>(b) Finding $\\text{P}(Y < 0.6\\mu)$:</strong><br><br>For $Y \\sim N\\left(\\mu, \\dfrac{\\mu^2}{16}\\right)$, the standard deviation is:\\begin{aligned} \\sigma &= \\sqrt{\\dfrac{\\mu^2}{16}} \\cr &= 0.25\\mu \\end{aligned}Standardise $Y = 0.6\\mu$:\\begin{aligned} Z &= \\dfrac{0.6\\mu - \\mu}{0.25\\mu} \\cr &= \\dfrac{-0.4\\mu}{0.25\\mu} \\cr &= -1.6 \\end{aligned}Notice that $\\mu$ cancels completely:\\begin{aligned} \\text{P}(Y < 0.6\\mu) &= \\text{P}(Z < -1.6) \\cr &= 1 - 0.9452 \\cr &= 0.0548 \\end{aligned}",
        "Final Answer: (a)(i) 0.1056, (ii) 25.85, (iii) 5.13, (b) 0.0548"
    ],
    "pi_options": [
        {
            "ans": "(a)(i) 0.1056, (ii) 34.15, (iii) 5.13, (b) 0.0548",
            "feedback": "In (a)(ii), because $\\text{P}(X < c) = 0.15 < 0.5$, $c$ must be below the mean ($30$). Using a positive $z$-score ($+1.0364$) erroneously yields $34.15$."
        },
        {
            "ans": "(a)(i) 0.8944, (ii) 25.85, (iii) 3.38, (b) 0.0548",
            "feedback": "In (a)(i), $0.8944$ is $\\text{P}(X < 35)$, rather than $\\text{P}(X > 35)$. In (a)(iii), using $Z = 0.8416$ corresponds to an upper tail of $0.20$ rather than $0.10$."
        },
        {
            "ans": "(a)(i) 0.1056, (ii) 25.85, (iii) 5.13, (b) Cannot be determined without knowing the numerical value of \\mu",
            "feedback": "In part (b), both the numerator $(-0.4\\mu)$ and denominator $(0.25\\mu)$ are linear in $\\mu$. When dividing to find $Z$, the parameter $\\mu$ cancels out completely, yielding an exact numerical probability of $0.0548$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Parameter Cancellation",
        "content": "When an A Level question defines standard deviation as a constant multiple of $\\mu$ (e.g. $\\sigma = 0.25\\mu$), the $z$-score calculation will always cancel out $\\mu$ algebraically: $\\frac{k\\mu - \\mu}{c\\mu} = \\frac{k - 1}{c}$. Never assume an answer cannot be found just because $\\mu$ is not numerically specified!"
    }
},
{
    "id": "050092",
    "branch": "Statistics",
    "board": "OCR",
    "level": "A",
    "major_area": "Statistical Distributions",
    "topic": "The Normal Distribution",
    "subtopic": [
        "Simultaneous Equations",
        "Symmetric Tolerance"
    ],
    "img": false,
    "question": "The mass of granulated sugar bags filled by an automated packaging line is modelled by a normal distribution with mean $\\mu\\text{ grams}$ and standard deviation $\\sigma\\text{ grams}$.<br><br>A bag is classified as underweight if its mass is less than $990\\text{ g}$, and overweight if its mass exceeds $1015\\text{ g}$.<br><br>Quality control inspections show that $4\\%$ of bags are underweight and $2.5\\%$ of bags are overweight.<br><br><strong>(a)</strong> By forming and solving a pair of simultaneous equations, calculate the values of $\\mu$ and $\\sigma$, giving each value to $1$ decimal place.<br><br><strong>(b)</strong> A retailer decides to reject any bag whose mass differs from the mean by more than $12\\text{ g}$. Using your values from part <strong>(a)</strong>, find the proportion of bags that are accepted by the retailer.",
    "steps": [
        "<strong>(a) Forming Simultaneous Equations:</strong><br><br>For underweight bags, $\\text{P}(X < 990) = 0.04$:\\begin{aligned} \\dfrac{990 - \\mu}{\\sigma} &= -1.7507 \\cr 990 - \\mu &= -1.7507\\sigma \\quad \\text{--- (1)} \\end{aligned}For overweight bags, $\\text{P}(X > 1015) = 0.025$:\\begin{aligned} \\dfrac{1015 - \\mu}{\\sigma} &= 1.9600 \\cr 1015 - \\mu &= 1.9600\\sigma \\quad \\text{--- (2)} \\end{aligned}",
        "<strong>Solving for $\\mu$ and $\\sigma$:</strong><br><br>Subtract equation (1) from equation (2):\\begin{aligned} 25 &= 3.7107\\sigma \\cr \\sigma &= \\dfrac{25}{3.7107} \\cr &= 6.7373\\text{ g} \\cr &\\approx 6.7\\text{ g (1 d.p.)} \\end{aligned}Substitute $\\sigma = 6.7373$ into equation (2):\\begin{aligned} \\mu &= 1015 - 1.9600(6.7373) \\cr &= 1015 - 13.2051 \\cr &= 1001.79\\text{ g} \\cr &\\approx 1001.8\\text{ g (1 d.p.)} \\end{aligned}",
        "<strong>(b) Proportion of Bags Accepted:</strong><br><br>A bag is accepted if its mass deviates by at most $12\\text{ g}$ from the mean:\\begin{aligned} &\\text{P}(|X - \\mu| \\le 12) \\cr &\\quad = \\text{P}(-12 \\le X - \\mu \\le 12) \\end{aligned}Standardise using $\\sigma = 6.7373$:\\begin{aligned} Z &= \\dfrac{12}{6.7373} \\cr &= 1.7811 \\end{aligned}Calculate the central probability:\\begin{aligned} &\\text{P}(-1.7811 \\le Z \\le 1.7811) \\cr &\\quad = 2\\,\\Phi(1.7811) - 1 \\cr &\\quad = 2(0.9625) - 1 \\cr &\\quad = 0.925\\text{ (3 s.f.)} \\end{aligned}",
        "Final Answer: (a) $\\mu = 1001.8\\text{ g}, \\ \\sigma = 6.7\\text{ g}$, (b) $0.925$"
    ],
    "pi_options": [
        {
            "ans": "(a) $\\mu = 1001.8\\text{ g}, \\ \\sigma = 6.7\\text{ g}$, (b) $0.963$",
            "feedback": "$0.963$ is $\\Phi(1.78)$, which includes only the lower tail subtracted from 1. You must subtract both symmetrical tails: $2\\Phi(1.78) - 1 = 0.925$."
        },
        {
            "ans": "(a) $\\mu = 1002.5\\text{ g}, \\ \\sigma = 6.4\\text{ g}$, (b) $0.925$",
            "feedback": "In part (a), rounding $Z = 1.75$ and $Z = 1.96$ to two decimal places prematurely introduces rounding errors into the simultaneous solution, altering the final values."
        },
        {
            "ans": "(a) $\\mu = 1001.8\\text{ g}, \\ \\sigma = 6.7\\text{ g}$, (b) $0.075$",
            "feedback": "$0.075$ is the proportion of bags *rejected* ($1 - 0.925 = 0.075$). The question asks for the proportion *accepted* by the retailer."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Full Precision in Simultaneous Steps",
        "content": "When solving for $\\mu$ and $\\sigma$ simultaneously from normal probabilities, never round $\\sigma$ to $1$ decimal place before calculating $\\mu$. Retain at least $4$ decimal places ($6.7373$) in your calculator memory; otherwise, premature rounding drift will corrupt your value of $\\mu$."
    }
},
{
    "id": "050093",
    "branch": "Statistics",
    "board": "OCR",
    "level": "A",
    "major_area": "Statistical Distributions",
    "topic": "The Normal Distribution",
    "subtopic": [
        "Conditional Probability",
        "Binomial Sampling"
    ],
    "img": false,
    "question": "The lifespan, $T\\text{ hours}$, of an industrial LED bulb is normally distributed with mean $12000\\text{ hours}$ and standard deviation $800\\text{ hours}$.<br><br><strong>(a)</strong> Find the probability that a randomly chosen bulb has a lifespan exceeding $13000\\text{ hours}$.<br><br><strong>(b)</strong> Given that a particular bulb has already functioned for $11500\\text{ hours}$, find the conditional probability that its total lifespan exceeds $13000\\text{ hours}$. Give your answer to $3$ significant figures.<br><br><strong>(c)</strong> A cluster of $8$ such bulbs is installed in an operating theatre. Assuming the lifespans of the bulbs are mutually independent, find the probability that at least $2$ of the bulbs last for more than $13000\\text{ hours}$.",
    "steps": [
        "<strong>(a) Probability Lifespan Exceeds 13000 Hours:</strong><br><br>With $T \\sim N(12000, 800^2)$:\\begin{aligned} Z &= \\dfrac{13000 - 12000}{800} \\cr &= 1.25 \\end{aligned}Calculate the upper-tail probability:\\begin{aligned} \\text{P}(T > 13000) &= \\text{P}(Z > 1.25) \\cr &= 1 - 0.8944 \\cr &= 0.1056 \\end{aligned}",
        "<strong>(b) Conditional Probability:</strong><br><br>Using the definition of conditional probability:\\begin{aligned} &\\text{P}(T > 13000 \\mid T > 11500) \\cr &\\quad = \\dfrac{\\text{P}(T > 13000)}{\\text{P}(T > 11500)} \\end{aligned}Standardise $T = 11500$:\\begin{aligned} Z &= \\dfrac{11500 - 12000}{800} \\cr &= -0.625 \\end{aligned}Evaluate the denominator:\\begin{aligned} \\text{P}(T > 11500) &= \\text{P}(Z > -0.625) \\cr &= 0.73401 \\end{aligned}Compute the conditional quotient:\\begin{aligned} &\\text{P}(T > 13000 \\mid T > 11500) \\cr &\\quad = \\dfrac{0.10565}{0.73401} \\cr &\\quad = 0.14394 \\cr &\\quad \\approx 0.144\\text{ (3 s.f.)} \\end{aligned}",
        "<strong>(c) Binomial Probability for 8 Bulbs:</strong><br><br>Let $X$ be the number of bulbs lasting over $13000\\text{ hours}$. Then $X \\sim B(8, 0.10565)$.<br><br>Calculate $\\text{P}(X \\ge 2)$ using the complement rule:\\begin{aligned} &\\text{P}(X \\ge 2) \\cr &\\quad = 1 - [\\text{P}(X = 0) + \\text{P}(X = 1)] \\cr &\\text{P}(X = 0) = (0.89435)^8 \\cr &\\quad = 0.41324 \\cr &\\text{P}(X = 1) \\cr &\\quad = 8(0.10565)(0.89435)^7 \\cr &\\quad = 0.38993 \\cr &\\text{P}(X \\ge 2) \\cr &\\quad = 1 - (0.41324 + 0.38993) \\cr &\\quad = 1 - 0.80317 \\cr &\\quad = 0.19683 \\cr &\\quad \\approx 0.197\\text{ (3 s.f.)} \\end{aligned}",
        "Final Answer: (a) $0.1056$, (b) $0.144$, (c) $0.197$"
    ],
    "pi_options": [
        {
            "ans": "(a) $0.1056$, (b) $0.1056$, (c) $0.197$",
            "feedback": "In part (b), the bulb has already survived 11500 hours, which strictly reduces the sample space. The conditional probability must be divided by $\\text{P}(T > 11500) = 0.7340$, yielding $0.144$, not $0.1056$."
        },
        {
            "ans": "(a) $0.1056$, (b) $0.144$, (c) $0.803$",
            "feedback": "In part (c), $0.803$ is $\\text{P}(X \\le 1)$. To find the probability of 'at least $2$', you must subtract this from 1: $1 - 0.803 = 0.197$."
        },
        {
            "ans": "(a) $0.8944$, (b) $0.144$, (c) $0.197$",
            "feedback": "In part (a), $0.8944$ is $\\text{P}(T < 13000)$. For bulbs lasting *more* than 13000 hours, evaluate the upper tail: $1 - 0.8944 = 0.1056$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Conditional Normal Probabilities",
        "content": "When computing conditional probabilities with continuous distributions like $\\text{P}(T > b \\mid T > a)$ where $b > a$, the intersection $(T > b) \\cap (T > a)$ is simply $T > b$. The formula simplifies to $\\frac{\\text{P}(T > b)}{\\text{P}(T > a)}$. Because the denominator is strictly $< 1$, the conditional probability is always greater than the unconditional probability."
    }
},
{
    "id": "050094",
    "branch": "Statistics",
    "board": "OCR",
    "level": "A",
    "major_area": "Statistical Distributions",
    "topic": "The Normal Distribution",
    "subtopic": [
        "Normal Approximation to Binomial",
        "Continuity Correction"
    ],
    "img": false,
    "question": "In a large metropolitan area, $35\\%$ of morning commuters use a public bicycle-sharing scheme. A random sample of $300$ morning commuters is surveyed.<br><br>Let $B$ represent the number of commuters in the sample who use the public bicycle-sharing scheme.<br><br><strong>(a)</strong> State the exact distribution of $B$, and explain why a normal distribution may be used to approximate it.<br><br><strong>(b)</strong> Specify the parameters of the approximating normal distribution.<br><br><strong>(c)</strong> Using the normal approximation with an appropriate continuity correction, calculate the probability that:<br><strong>(i)</strong> between $95$ and $115$ commuters inclusive use the bicycle scheme,<br><strong>(ii)</strong> strictly fewer than $90$ commuters use the bicycle scheme.",
    "steps": [
        "<strong>(a) Exact Distribution and Normal Validity:</strong><br><br>The exact distribution is:\\begin{aligned} B \\sim B(300, 0.35) \\end{aligned}A normal approximation is valid because $n$ is large ($n = 300$) and both expected counts exceed $5$:\\begin{aligned} np &= 300 \\times 0.35 = 105 > 5 \\cr n(1 - p) &= 300 \\times 0.65 = 195 > 5 \\end{aligned}",
        "<strong>(b) Parameters of Approximating Distribution:</strong><br><br>Calculate the mean and variance:\\begin{aligned} \\mu &= np = 105 \\cr \\sigma^2 &= np(1 - p) \\cr &= 300 \\times 0.35 \\times 0.65 \\cr &= 68.25 \\end{aligned}Standard deviation:\\begin{aligned} \\sigma &= \\sqrt{68.25} \\cr &= 8.26135 \\end{aligned}Approximating distribution: $Y \\sim N(105, 68.25)$.",
        "<strong>(c)(i) Between 95 and 115 Inclusive:</strong><br><br>Apply the continuity correction to include discrete values $95$ to $115$:\\begin{aligned} &\\text{P}(95 \\le B \\le 115) \\cr &\\quad \\approx \\text{P}(94.5 < Y < 115.5) \\end{aligned}Standardise both endpoints:\\begin{aligned} Z_1 &= \\dfrac{94.5 - 105}{8.26135} = -1.271 \\cr Z_2 &= \\dfrac{115.5 - 105}{8.26135} = 1.271 \\end{aligned}Calculate the probability:\\begin{aligned} &\\text{P}(-1.271 < Z < 1.271) \\cr &\\quad = 2\\,\\Phi(1.271) - 1 \\cr &\\quad = 2(0.8981) - 1 \\cr &\\quad = 0.7962 \\cr &\\quad \\approx 0.796\\text{ (3 s.f.)} \\end{aligned}",
        "<strong>(c)(ii) Strictly Fewer Than 90:</strong><br><br>Because $B$ is discrete, strictly fewer than $90$ means $B \\le 89$.<br><br>Apply the continuity correction:\\begin{aligned} &\\text{P}(B < 90) \\cr &\\quad = \\text{P}(B \\le 89) \\cr &\\quad \\approx \\text{P}(Y < 89.5) \\end{aligned}Standardise $Y = 89.5$:\\begin{aligned} Z &= \\dfrac{89.5 - 105}{8.26135} \\cr &= \\dfrac{-15.5}{8.26135} \\cr &= -1.876 \\end{aligned}Calculate the lower-tail probability:\\begin{aligned} \\text{P}(Z < -1.876) &= 1 - \\Phi(1.876) \\cr &= 1 - 0.9697 \\cr &= 0.0303\\text{ (3 s.f.)} \\end{aligned}",
        "Final Answer: (a) $B \\sim B(300, 0.35)$; valid since $np = 105 > 5$ and $nq = 195 > 5$, (b) $\\mu = 105, \\ \\sigma^2 = 68.25$, (c)(i) $0.796$, (ii) $0.0303$"
    ],
    "pi_options": [
        {
            "ans": "(a) $B \\sim B(300, 0.35)$; valid since $np = 105 > 5$ and $nq = 195 > 5$, (b) $\\mu = 105, \\ \\sigma^2 = 68.25$, (c)(i) $0.774$, (ii) $0.0345$",
            "feedback": "This error omits the continuity correction completely, evaluating $\\text{P}(95 < Y < 115)$ with $Z = \\pm 1.21$ and $\\text{P}(Y < 90)$ with $Z = -1.82$. When approximating a discrete distribution with a continuous curve, you must adjust boundaries by $\\pm 0.5$."
        },
        {
            "ans": "(a) $B \\sim B(300, 0.35)$; valid since $np = 105 > 5$ and $nq = 195 > 5$, (b) $\\mu = 105, \\ \\sigma^2 = 68.25$, (c)(i) $0.796$, (ii) $0.0396$",
            "feedback": "In (c)(ii), 'strictly fewer than 90' means $B \\le 89$, which continuity-corrects to $Y < 89.5$. Using $Y < 90.5$ mistakenly includes 90 in the probability."
        },
        {
            "ans": "(a) $B \\sim N(300, 0.35)$; valid since sample is random, (b) $\\mu = 105, \\ \\sigma^2 = 8.26$, (c)(i) $0.796$, (ii) $0.0303$",
            "feedback": "In part (a), the exact distribution is Binomial ($B(300, 0.35)$), not Normal. In part (b), $8.26$ is the standard deviation $\\sigma$, not the variance $\\sigma^2 = 68.25$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Continuity Correction Visualization",
        "content": "Visualize the discrete binomial probabilities as bars of width $1$ centered on whole integers: the bar for $95$ spans $[94.5, 95.5]$ and the bar for $115$ spans $[114.5, 115.5]$. To capture all bars between $95$ and $115$ inclusive, stretch your continuous normal interval to $[94.5, 115.5]$. For 'strictly fewer than $90$', the highest included discrete bar is $89$, giving continuous upper limit $89.5$."
    }
},
{
    "id": "050095",
    "branch": "Statistics",
    "board": "OCR",
    "level": "A",
    "major_area": "Hypothesis Testing",
    "topic": "The Normal Distribution",
    "subtopic": [
        "Sample Mean Distribution",
        "Hypothesis Test for Mean",
        "Critical Region"
    ],
    "img": false,
    "question": "A machine is calibrated to produce cylindrical steel pins with a nominal mean length of $50.0\\text{ mm}$. The lengths of the pins are normally distributed with a known standard deviation of $0.8\\text{ mm}$. Following maintenance, an engineer suspects that the machine is out of adjustment and that the mean length has changed.<br><br>A random sample of $16$ pins is measured, and their sample mean length is found to be $50.45\\text{ mm}$.<br><br><strong>(a)</strong> State suitable null and alternative hypotheses to test the engineer's suspicion.<br><br><strong>(b)</strong> State the distribution of the sample mean pin length, $\\bar{X}$, under the null hypothesis, specifying its parameters.<br><br><strong>(c)</strong> Carry out the hypothesis test at the $5\\%$ significance level, stating your conclusion clearly in context.<br><br><strong>(d)</strong> Determine the critical region for $\\bar{X}$ for this test at the $5\\%$ significance level.",
    "steps": [
        "<strong>(a) Null and Alternative Hypotheses:</strong><br><br>Let $\\mu$ represent the true population mean length of the pins (in mm).\\begin{aligned} &H_0: \\mu = 50.0 \\cr &H_1: \\mu \\neq 50.0 \\end{aligned}",
        "<strong>(b) Distribution of Sample Mean:</strong><br><br>Under $H_0$, the sample mean $\\bar{X}$ of $n = 16$ observations is normally distributed:\\begin{aligned} \\bar{X} &\\sim N\\left(\\mu, \\dfrac{\\sigma^2}{n}\\right) \\cr &\\sim N\\left(50.0, \\dfrac{0.8^2}{16}\\right) \\cr &\\sim N(50.0, 0.04) \\end{aligned}The standard error of the mean is:\\begin{aligned} \\sigma_{\\bar{X}} &= \\dfrac{0.8}{\\sqrt{16}} \\cr &= 0.2\\text{ mm} \\end{aligned}",
        "<strong>(c) Hypothesis Test:</strong><br><br>Calculate the test statistic $z$ for $\\bar{x} = 50.45\\text{ mm}$:\\begin{aligned} z &= \\dfrac{50.45 - 50.0}{0.2} \\cr &= \\dfrac{0.45}{0.2} \\cr &= 2.25 \\end{aligned}For a two-tailed test at the $5\\%$ significance level, the critical value is $z = \\pm 1.960$.<br><br>Since $2.25 > 1.960$, the result is significant at the $5\\%$ level.<br><br>Reject $H_0$. There is sufficient evidence at the $5\\%$ significance level to conclude that the mean length of the pins has changed.",
        "<strong>(d) Critical Region for $\\bar{X}$:</strong><br><br>The critical region corresponds to $|Z| \\ge 1.960$:\\begin{aligned} \\bar{X} &> 50.0 + 1.960(0.2) \\cr \\bar{X} &> 50.0 + 0.392 \\cr \\bar{X} &> 50.392\\text{ mm} \\cr \\bar{X} &< 50.0 - 1.960(0.2) \\cr \\bar{X} &< 50.0 - 0.392 \\cr \\bar{X} &< 49.608\\text{ mm} \\end{aligned}Therefore, the critical region is:\\begin{aligned} \\bar{X} \\le 49.6\\text{ mm} \\quad \\text{or} \\quad \\bar{X} \\ge 50.4\\text{ mm} \\end{aligned}",
        "Final Answer: (a) $H_0: \\mu = 50.0, \\ H_1: \\mu \\neq 50.0$, (b) $\\bar{X} \\sim N(50.0, 0.04)$, (c) Reject $H_0$ ($z = 2.25 > 1.960$); significant evidence that mean length has changed, (d) $\\bar{X} \\le 49.6\\text{ mm}$ or $\\bar{X} \\ge 50.4\\text{ mm}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $H_0: \\mu = 50.0, \\ H_1: \\mu \\neq 50.0$, (b) $\\bar{X} \\sim N(50.0, 0.04)$, (c) Do not reject $H_0$ ($z = 0.5625 < 1.960$); insufficient evidence that mean length has changed, (d) $\\bar{X} \\le 49.6\\text{ mm}$ or $\\bar{X} \\ge 50.4\\text{ mm}$",
            "feedback": "This error forgets to divide $\\sigma$ by $\\sqrt{n}$, dividing $0.45$ directly by $0.8$ to get $z = 0.5625$. The sample mean variance is $\\sigma^2 / n$, so you must divide by $\\sigma / \\sqrt{n} = 0.2$, giving $z = 2.25$."
        },
        {
            "ans": "(a) $H_0: \\mu = 50.0, \\ H_1: \\mu \\neq 50.0$, (b) $\\bar{X} \\sim N(50.0, 0.64)$, (c) Reject $H_0$ ($z = 2.25 > 1.960$); significant evidence that mean length has changed, (d) $\\bar{X} \\le 48.4\\text{ mm}$ or $\\bar{X} \\ge 51.6\\text{ mm}$",
            "feedback": "In part (b), $0.64$ is the population variance $\\sigma^2$. The variance of the sample mean is $\\sigma^2 / n = 0.64 / 16 = 0.04$. Using $0.8$ instead of $0.2$ in part (d) produces an overly wide critical region."
        },
        {
            "ans": "(a) $H_0: \\mu = 50.0, \\ H_1: \\mu > 50.0$, (b) $\\bar{X} \\sim N(50.0, 0.04)$, (c) Reject $H_0$ ($z = 2.25 > 1.645$); significant evidence that mean length has changed, (d) $\\bar{X} \\ge 50.3\\text{ mm}$",
            "feedback": "The engineer suspects that the mean has *changed* (not specifically increased), which strictly requires a two-tailed test ($H_1: \\mu \\neq 50.0$) with critical values $\\pm 1.960$ rather than a one-tailed test with $1.645$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Dividing by the Square Root of n",
        "content": "The most common error in sample mean hypothesis testing is testing individual variance instead of sample mean variance. Individual pin lengths vary with standard deviation $\\sigma = 0.8$, but the average of $16$ pins is far more clustered around the mean, varying with standard error $\\frac{\\sigma}{\\sqrt{n}} = \\frac{0.8}{4} = 0.2$."
    }
}
];