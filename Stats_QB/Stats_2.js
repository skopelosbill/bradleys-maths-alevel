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
        "<strong>(c) Model 2 First Hit on Shot 3:</strong><br><br>The event $F = 3$ requires missing on shot 1, missing on shot 2, and hitting on shot 3:\\begin{aligned} \\text{P}(F = 3) &= (1 - 0.18)(1 - 0.26)(0.34) \\cr &= (0.82)(0.74)(0.34) \\cr &= 0.206312 \\cr &\\approx 0.206 \\end{aligned}",
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
            "feedback": "In part (b), check your decimal arithmetic: $0.18 \\times 0.26 \\times 0.66 \\times 0.58 \\times 0.50 \\approx 0.00896$, not $0.0896$."
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
}
];