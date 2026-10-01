window.ALEVEL_QUESTIONS = [
{
    "id": "050001",
    "group_id": "050001",
    "branch": "Statistics",
    "board": "AQA",
    "level": "AS",
    "major_area": "Data Presentation and Interpretation",
    "topic": "Correlation and Regression",
    "subtopic": [
        "Scatter Diagrams",
        "Types of Correlation"
    ],
    "img": "images/Statistics_pngs/050001.png",
    "question": "The diagram shows a scatter diagram plotted for two variables, $x$ and $y$.<br><br>Which of the options below best describes the correlation shown in the diagram?",
    "steps": [
        "<strong>Analysing the Direction of Correlation:</strong><br><br>As the variable $x$ increases, the values of $y$ generally increase from left to right.<br><br>An upward trend from bottom-left to top-right indicates a positive correlation.",
        "<strong>Assessing the Strength of Correlation:</strong><br><br>A strong correlation requires the points to lie very close to a single straight line with minimal dispersion.<br><br>In this diagram, while there is an unmistakable upward linear trend, there is noticeable vertical scatter around any line of best fit.<br><br>Therefore, the relationship is best described as moderate positive.",
        "Final Answer: Moderate positive"
    ],
    "pi_options": [
        {
            "ans": "Strong positive",
            "feedback": "Although the overall trend is positive, the data points exhibit noticeable scatter around the trend line rather than forming a tight, near-perfect line."
        },
        {
            "ans": "Moderate negative",
            "feedback": "The points trend upwards from bottom-left to top-right, which indicates a positive correlation, not a negative one."
        },
        {
            "ans": "Strong negative",
            "feedback": "A negative correlation requires $y$ to decrease as $x$ increases, and strong correlation requires data points to cluster tightly along a line."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Judging Scatter Plot Strength",
        "content": "Do not confuse the sign of the gradient with the strength of the correlation. The sign determines whether the relationship is positive or negative. Strength depends entirely on the scatter of points about the line of best fit: if a broad oval encompasses the points, the correlation is moderate ($r \\approx 0.5\\text{ to }0.7$); if the points collapse onto a narrow band, it is strong ($r > 0.8$)."
    }
},
{
    "id": "050002",
    "group_id": "050001",
    "branch": "Statistics",
    "board": "AQA",
    "level": "AS",
    "major_area": "Data Presentation and Interpretation",
    "topic": "Measures of Location and Spread",
    "subtopic": [
        "Cumulative Frequency",
        "Interquartile Range"
    ],
    "img": "images/Statistics_pngs/050002.png",
    "question": "The cumulative frequency diagram shows the distribution of times, $t$ minutes, taken by a sample of $100$ commuters to travel to work.<br><br><strong>(a)</strong> Use the diagram to estimate the median journey time.<br><br><strong>(b)</strong> Use the diagram to estimate the interquartile range (IQR).<br><br><strong>(c)</strong> A commuter is considered to have had an unusually long journey if their travel time exceeds $45\\text{ minutes}$. Estimate the percentage of commuters in this sample who had an unusually long journey.",
    "steps": [
        "<strong>(a) Estimating the Median:</strong><br><br>For a sample size of $n = 100$, the median corresponds to a cumulative frequency of:\\begin{aligned} \\text{CF} &= \\dfrac{100}{2} \\cr &= 50 \\end{aligned}Reading horizontally from $50$ on the vertical axis across to the curve, and then vertically down to the horizontal axis, gives:\\begin{aligned} \\text{Median} \\approx 29\\text{ minutes} \\end{aligned}",
        "<strong>(b) Estimating the Interquartile Range:</strong><br><br>The lower quartile, $Q_1$, corresponds to a cumulative frequency of $25$:\\begin{aligned} Q_1 \\approx 22\\text{ minutes} \\end{aligned}The upper quartile, $Q_3$, corresponds to a cumulative frequency of $75$:\\begin{aligned} Q_3 \\approx 38\\text{ minutes} \\end{aligned}The interquartile range is the difference between $Q_3$ and $Q_1$:\\begin{aligned} \\text{IQR} &= Q_3 - Q_1 \\cr &= 38 - 22 \\cr &= 16\\text{ minutes} \\end{aligned}",
        "<strong>(c) Estimating Commuters with $t > 45\\text{ minutes}$:</strong><br><br>Locate $t = 45$ on the horizontal axis and read up to the curve.<br><br>The corresponding cumulative frequency is approximately $88$, meaning $88$ commuters took $45\\text{ minutes}$ or less.<br><br>The number taking longer than $45\\text{ minutes}$ is:\\begin{aligned} N &= 100 - 88 \\cr &= 12 \\end{aligned}As a percentage of the $100$ commuters:\\begin{aligned} \\text{Percentage} &= \\dfrac{12}{100} \\times 100\\% \\cr &= 12\\% \\end{aligned}",
        "Final Answer: (a) $29\\text{ min}$, (b) $16\\text{ min}$, (c) $12\\%$"
    ],
    "pi_options": [
        {
            "ans": "(a) $29\\text{ min}$, (b) $16\\text{ min}$, (c) $88\\%$",
            "feedback": "In part (c), reading $88$ directly from the curve gives the number of commuters whose journey was up to $45\\text{ minutes}$. You must subtract this value from $100$ to find those exceeding $45\\text{ minutes}$."
        },
        {
            "ans": "(a) $50\\text{ min}$, (b) $16\\text{ min}$, (c) $12\\%$",
            "feedback": "In part (a), $50$ is the cumulative frequency position on the vertical axis, not the journey time in minutes on the horizontal axis."
        },
        {
            "ans": "(a) $29\\text{ min}$, (b) $26\\text{ min}$, (c) $12\\%$",
            "feedback": "In part (b), check your quartile readings: $Q_1$ is at cumulative frequency $25$ ($t \\approx 22$) and $Q_3$ is at $75$ ($t \\approx 38$). Their difference is $16$, not $26$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Reading Cumulative Frequency Graphs",
        "content": "Always draw clear dashed ruler lines on your examination script when taking readings from cumulative frequency curves. Exam mark schemes allow a small tolerance (usually $\\pm 1\\text{ small square}$), but failing to show your working lines means you lose method marks if your final reading falls just outside the permitted window."
    }
},
{
    "id": "050003",
    "group_id": "050001",
    "branch": "Statistics",
    "board": "AQA",
    "level": "AS",
    "major_area": "Data Presentation and Interpretation",
    "topic": "Statistical Diagrams",
    "subtopic": [
        "Histograms",
        "Frequency Density",
        "Modal Class"
    ],
    "img": "images/Statistics_pngs/050003.png",
    "question": "The histogram displays the distribution of mass, $m$ kilograms, of a sample of parcels processed at a distribution depot.<br><br><strong>(a)</strong> Calculate the total number of parcels in the sample.<br><br><strong>(b)</strong> Estimate the number of parcels in the sample with a mass between $15\\text{ kg}$ and $30\\text{ kg}$.<br><br><strong>(c)</strong> State the modal class for this distribution.",
    "steps": [
        "<strong>(a) Calculating the Total Frequency:</strong><br><br>In a histogram, frequency is given by the area of each bar:\\begin{aligned}& \\text{Frequency}\\cr &\\qquad= \\text{Class Width} \\times \\text{Frequency Density} \\end{aligned}Calculate the frequency for each of the four intervals:<br><br>For $10 \\le m < 20$:\\begin{aligned} f_1 &= 10 \\times 1.4 \\cr &= 14 \\end{aligned}For $20 \\le m < 25$:\\begin{aligned} f_2 &= 5 \\times 3.6 \\cr &= 18 \\end{aligned}For $25 \\le m < 35$:\\begin{aligned} f_3 &= 10 \\times 2.4 \\cr &= 24 \\end{aligned}For $35 \\le m \\le 50$:\\begin{aligned} f_4 &= 15 \\times 0.8 \\cr &= 12 \\end{aligned}Summing the frequencies gives the total number of parcels:\\begin{aligned} \\text{Total} &= 14 + 18 + 24 + 12 \\cr &= 68 \\end{aligned}",
        "<strong>(b) Estimating Frequency Between $15\\text{ kg}$ and $30\\text{ kg}$:</strong><br><br>Split the requested interval into its component sections across the bars:<br><br>From $15\\text{ kg}$ to $20\\text{ kg}$ (width $5$ in the first bar):\\begin{aligned} f_a &= 5 \\times 1.4 \\cr &= 7 \\end{aligned}From $20\\text{ kg}$ to $25\\text{ kg}$ (the entire second bar):\\begin{aligned} f_b &= 5 \\times 3.6 \\cr &= 18 \\end{aligned}From $25\\text{ kg}$ to $30\\text{ kg}$ (width $5$ in the third bar):\\begin{aligned} f_c &= 5 \\times 2.4 \\cr &= 12 \\end{aligned}Summing these portions gives:\\begin{aligned} \\text{Number of parcels} &= 7 + 18 + 12 \\cr &= 37 \\end{aligned}",
        "<strong>(c) Identifying the Modal Class:</strong><br><br>For continuous data presented in a histogram with unequal class widths, the modal class is the interval with the highest frequency density, not the highest total frequency.<br><br>The highest bar has a frequency density of $3.6$, which corresponds to the interval:\\begin{aligned} 20 \\le m < 25 \\end{aligned}",
        "Final Answer: (a) $68$, (b) $37$, (c) $20 \\le m < 25$"
    ],
    "pi_options": [
        {
            "ans": "(a) $68$, (b) $37$, (c) $25 \\le m < 35$",
            "feedback": "In part (c), the interval $25 \\le m < 35$ has the largest total frequency ($24$), but the modal class is strictly defined as the interval with the greatest frequency density, which is $20 \\le m < 25$ (density $3.6$)."
        },
        {
            "ans": "(a) $8.2$, (b) $37$, (c) $20 \\le m < 25$",
            "feedback": "In part (a), summing the heights of the bars ($1.4 + 3.6 + 2.4 + 0.8 = 8.2$) gives the sum of frequency densities, not the frequency. You must multiply each density by its class width."
        },
        {
            "ans": "(a) $68$, (b) $27$, (c) $20 \\le m < 25$",
            "feedback": "In part (b), check the partial bar calculations: the interval $15 \\le m < 20$ has a width of $5$, contributing $5 \\times 1.4 = 7$ parcels, not $5$ parcels."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: The Modal Class Trap in Histograms",
        "content": "A classic examination trap is choosing the interval with the largest area (highest frequency) as the modal class. When class widths are unequal, mode represents the greatest concentration of data per unit width, which is indicated solely by the tallest bar (highest frequency density)."
    }
},
{
    "id": "050004",
    "group_id": "050001",
    "branch": "Statistics",
    "board": "AQA",
    "level": "AS",
    "major_area": "Data Presentation and Interpretation",
    "topic": "Measures of Location and Spread",
    "subtopic": [
        "Box Plots",
        "Outliers",
        "Comparing Distributions"
    ],
    "img": "images/Statistics_pngs/050004.png",
    "question": "The parallel box plots show the test score distributions of two groups of students, Group A and Group B.<br><br>An outlier is defined as any value that lies more than $1.5 \\times \\text{IQR}$ below $Q_1$ or above $Q_3$.<br><br><strong>(a)</strong> State the score of the outlier identified in Group B.<br><br><strong>(b)</strong> Show, by calculation, that this score satisfies the definition of an outlier.<br><br><strong>(c)</strong> Compare the performance of the two groups by making two separate comments in context.",
    "steps": [
        "<strong>(a) Identifying the Outlier:</strong><br><br>In Group B, an isolated cross is plotted at the low end of the scale.<br><br>Reading its position from the score axis gives:\\begin{aligned} \\text{Outlier score} = 12 \\end{aligned}",
        "<strong>(b) Calculating the Lower Outlier Boundary for Group B:</strong><br><br>From the box plot for Group B, read the quartiles:\\begin{aligned} Q_1 &= 36 \\cr Q_3 &= 52 \\end{aligned}Calculate the interquartile range (IQR):\\begin{aligned} \\text{IQR} &= Q_3 - Q_1 \\cr &= 52 - 36 \\cr &= 16 \\end{aligned}Calculate the lower outlier boundary:\\begin{aligned} \\text{Lower boundary} &= Q_1 - 1.5 \\times \\text{IQR} \\cr &= 36 - 1.5(16) \\cr &= 36 - 24 \\cr &= 12 \\end{aligned}Since the score of $12$ lies on or beyond the lower threshold ($12 \\le 12$), it is confirmed as an outlier.",
        "<strong>(c) Comparing the Two Distributions in Context:</strong><br><br>To compare distributions, compare one measure of average and one measure of spread in context:<br><br><strong>1. Average:</strong> The median score of Group B ($46$) is higher than the median score of Group A ($34$), showing that Group B generally performed better on the test.<br><br><strong>2. Spread:</strong> The interquartile range of Group A ($\\text{IQR}_A = 44 - 26 = 18$) is larger than that of Group B ($\\text{IQR}_B = 16$), indicating that test scores were more varied in Group A than in Group B.",
        "Final Answer: (a) $12$, (b) $Q_1 - 1.5 \\times \\text{IQR} = 12$, (c) Group B had a higher median ($46$ vs $34$) and lower spread ($16$ vs $18$)"
    ],
    "pi_options": [
        {
            "ans": "(a) $24$, (b) $Q_1 - 1.5 \\times \\text{IQR} = 12$, (c) Group B had a higher median ($46$ vs $34$) and lower spread ($16$ vs $18$)",
            "feedback": "In part (a), $24$ is the lower whisker (minimum non-outlier value) of Group B, not the outlier marked by the isolated cross at $12$."
        },
        {
            "ans": "(a) $12$, (b) $Q_1 - 1.5 \\times \\text{IQR} = 20$, (c) Group B had a higher median ($46$ vs $34$) and lower spread ($16$ vs $18$)",
            "feedback": "In part (b), check your arithmetic: $1.5 \\times 16 = 24$, so the lower boundary is $36 - 24 = 12$, not $20$."
        },
        {
            "ans": "(a) $12$, (b) $Q_1 - 1.5 \\times \\text{IQR} = 12$, (c) Group A had a higher median ($44$ vs $36$) and higher spread ($18$ vs $16$)",
            "feedback": "In part (c), the median for Group A is $34$ (not $44$, which is its upper quartile), and the median for Group B is $46$, meaning Group B achieved the higher average."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Examination Rules for Comparing Distributions",
        "content": "Whenever you are asked to compare two distributions, you must always provide exactly two statements: one comparing an average (median) and one comparing spread (interquartile range). Crucially, you must quote numerical values and include the real-world context (e.g., *'test scores of students'*); stating abstract mathematical values alone will lose the contextual mark."
    }
},
{
    "id": "050005",
    "group_id": "050001",
    "branch": "Statistics",
    "board": "AQA",
    "level": "AS",
    "major_area": "Probability",
    "topic": "Probability",
    "subtopic": [
        "Venn Diagrams",
        "Independence",
        "Conditional Probability"
    ],
    "img": "images/Statistics_pngs/050005.png",
    "question": "The Venn diagram shows the probabilities associated with two events, $A$ and $B$, within a sample space $\\mathscr{E}$.<br><br><strong>(a)</strong> Find $\\text{P}(A \\cup B)$.<br><br><strong>(b)</strong> Determine, with full mathematical justification, whether events $A$ and $B$ are independent.<br><br><strong>(c)</strong> Calculate the conditional probability $\\text{P}(A \\mid B')$, giving your answer as a simplified fraction.",
    "steps": [
        "<strong>(a) Finding $\\text{P}(A \\cup B)$:</strong><br><br>Sum the probabilities across the three mutually exclusive regions comprising $A \\cup B$:\\begin{aligned} \\text{P}(A \\cup B) &= 0.32 + 0.18 + 0.26 \\cr &= 0.76 \\end{aligned}Alternatively, subtract the exterior probability from $1$:\\begin{aligned} \\text{P}(A \\cup B) &= 1 - 0.24 \\cr &= 0.76 \\end{aligned}",
        "<strong>(b) Testing for Independence:</strong><br><br>Two events $A$ and $B$ are independent if and only if:\\begin{aligned} \\text{P}(A \\cap B) = \\text{P}(A) \\times \\text{P}(B) \\end{aligned}Find the individual probabilities from the diagram:<br><br>For event $A$:\\begin{aligned} \\text{P}(A) &= 0.32 + 0.18 \\cr &= 0.50 \\end{aligned}For event $B$:\\begin{aligned} \\text{P}(B) &= 0.18 + 0.26 \\cr &= 0.44 \\end{aligned}Calculate their product:\\begin{aligned} \\text{P}(A) \\times \\text{P}(B) &= 0.50 \\times 0.44 \\cr &= 0.22 \\end{aligned}From the diagram, the intersection probability is:\\begin{aligned} \\text{P}(A \\cap B) = 0.18 \\end{aligned}Since $0.18 \\neq 0.22$, the events $A$ and $B$ are not independent.",
        "<strong>(c) Calculating $\\text{P}(A \\mid B')$:</strong><br><br>Apply the definition of conditional probability:\\begin{aligned} \\text{P}(A \\mid B') &= \\dfrac{\\text{P}(A \\cap B')}{\\text{P}(B')} \\end{aligned}From the diagram, identify the required probabilities:<br><br>The probability of being in $A$ and outside $B$ is:\\begin{aligned} \\text{P}(A \\cap B') = 0.32 \\end{aligned}The probability of the complement $B'$ is:\\begin{aligned} \\text{P}(B') &= 1 - \\text{P}(B) \\cr &= 1 - 0.44 \\cr &= 0.56 \\end{aligned}Substitute these values into the conditional formula:\\begin{aligned} \\text{P}(A \\mid B') &= \\dfrac{0.32}{0.56} \\cr &= \\dfrac{32}{56} \\cr &= \\dfrac{4}{7} \\end{aligned}",
        "Final Answer: (a) $0.76$, (b) Not independent as $\\text{P}(A \\cap B) \\neq \\text{P}(A)\\text{P}(B)$, (c) $\\dfrac{4}{7}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $0.76$, (b) Independent as $\\text{P}(A \\cap B) = \\text{P}(A)\\text{P}(B)$, (c) $\\dfrac{4}{7}$",
            "feedback": "In part (b), $\\text{P}(A) \\times \\text{P}(B) = 0.50 \\times 0.44 = 0.22$. Since this does not equal $\\text{P}(A \\cap B) = 0.18$, the events cannot be independent."
        },
        {
            "ans": "(a) $0.76$, (b) Not independent as $\\text{P}(A \\cap B) \\neq \\text{P}(A)\\text{P}(B)$, (c) $\\dfrac{8}{25}$",
            "feedback": "In part (c), $\\dfrac{8}{25} = 0.32$, which is $\\text{P}(A \\cap B')$. Conditional probability requires dividing this by $\\text{P}(B') = 0.56$, yielding $\\dfrac{0.32}{0.56} = \\dfrac{4}{7}$."
        },
        {
            "ans": "(a) $0.94$, (b) Not independent as $\\text{P}(A \\cap B) \\neq \\text{P}(A)\\text{P}(B)$, (c) $\\dfrac{4}{7}$",
            "feedback": "In part (a), adding all numbers in the circles without adjusting for regions results in double-counting or including the intersection twice. $\\text{P}(A \\cup B) = 0.32 + 0.18 + 0.26 = 0.76$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Intuition Behind Conditional Probability",
        "content": "When evaluating $\\text{P}(A \\mid B')$, the given condition $B'$ restricts the entire universe to everything outside circle $B$. In our diagram, that restricted universe consists of only two regions: the $A$-only region ($0.32$) and the exterior region ($0.24$), which together sum to $0.56$. The probability of being in $A$ given that you are inside this restricted universe is simply $\\dfrac{0.32}{0.56} = \\dfrac{4}{7}$."
    }
},
{
    "id": "050006",
    "group_id": "050006",
    "branch": "Statistics",
    "board": "AQA",
    "level": "AS",
    "major_area": "Statistical Sampling",
    "topic": "Sampling Methods",
    "subtopic": [
        "Quota Sampling",
        "Non-Random Sampling"
    ],
    "img": false,
    "question": "A researcher is standing outside a busy railway station conducting a commuter survey.<br><br>She is instructed to interview $40$ commuters who travel by train at least three days per week. Once she has interviewed $40$ people meeting this criterion, she stops surveying.<br><br>Which of the options below best describes this sampling method?",
    "steps": [
        "<strong>Analysing the Sampling Process:</strong><br><br>The researcher is assigned a target quota of $40$ individuals belonging to a specific category (frequent commuters).<br><br>The researcher chooses whom to approach rather than selecting names at random from an official list.<br><br>Once the target quota is achieved, the sampling ends immediately.<br><br>This is the definition of quota sampling.",
        "Final Answer: Quota"
    ],
    "pi_options": [
        {
            "ans": "Stratified",
            "feedback": "Stratified sampling requires a full sampling frame and selects participants at random from distinct strata in proportion to their population sizes, whereas this researcher approached people without a frame or random selection."
        },
        {
            "ans": "Simple random",
            "feedback": "Simple random sampling requires every member of the population to have an equal chance of being selected, which requires an exhaustive sampling frame and a random selection tool."
        },
        {
            "ans": "Systematic",
            "feedback": "Systematic sampling selects individuals at regular fixed intervals (such as every $k^{\\text{th}}$ person) from an ordered list, which was not the method used here."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Quota vs Stratified Sampling",
        "content": "A classic exam pitfall is confusing quota sampling with stratified sampling because both divide the population into categories. The key test is randomness: stratified sampling is a probability method requiring a formal sampling frame where subjects are chosen randomly; quota sampling is non-random, requires no list, and leaves the selection of individuals to the interviewer."
    }
},
{
    "id": "050007",
    "group_id": "050006",
    "branch": "Statistics",
    "board": "AQA",
    "level": "AS",
    "major_area": "Statistical Sampling",
    "topic": "Sampling Methods",
    "subtopic": [
        "Systematic Sampling",
        "Sampling Interval"
    ],
    "img": false,
    "question": "A quality-control manager at an electronics manufacturing plant wishes to test the battery life of smartphones produced on a continuous production line.<br><br>During a standard shift, $2400$ phones are produced. The manager decides to inspect a sample of $60$ phones. A number between $1$ and $40$ is chosen at random as the starting point, and every $40^{\\text{th}}$ phone coming off the line thereafter is selected.<br><br><strong>(a)</strong> State the specific sampling technique being employed.<br><br><strong>(b)</strong> State one practical advantage of using this method rather than simple random sampling in this factory setting.<br><br><strong>(c)</strong> State one potential hazard or disadvantage of using this sampling technique on a manufacturing line.",
    "steps": [
        "<strong>(a) Identifying the Sampling Technique:</strong><br><br>Items are selected at regular, equal intervals from an ordered sequence following a random starting value.<br><br>The sampling interval is:\\begin{aligned} k &= \\dfrac{2400}{60} \\cr &= 40 \\end{aligned}This technique is systematic sampling.",
        "<strong>(b) Stating a Practical Advantage:</strong><br><br>In a continuous manufacturing setting, systematic sampling is much faster and simpler to administer than simple random sampling.<br><br>Line workers do not need to pause production or cross-reference a table of $60$ separate random numbers; they simply pull every $40^{\\text{th}}$ unit.",
        "<strong>(c) Stating a Disadvantage or Hazard:</strong><br><br>If the production line has a cyclic or periodic fault (such as a machine component slipping every $40$ cycles), the sample will either capture all defective items or miss the defect entirely, resulting in severe bias.",
        "Final Answer: (a) Systematic sampling, (b) Quick and simple to implement on a moving production line, (c) Vulnerable to bias if the production line has a periodic or cyclic pattern"
    ],
    "pi_options": [
        {
            "ans": "(a) Stratified sampling, (b) Quick and simple to implement on a moving production line, (c) Vulnerable to bias if the production line has a periodic or cyclic pattern",
            "feedback": "Stratified sampling requires dividing a population into distinct non-overlapping strata and sampling proportionally from each, whereas choosing every $40^{\\text{th}}$ item is systematic sampling."
        },
        {
            "ans": "(a) Systematic sampling, (b) It completely eliminates all possible sampling bias, (c) Vulnerable to bias if the production line has a periodic or cyclic pattern",
            "feedback": "Systematic sampling does not eliminate sampling bias; it is particularly vulnerable to bias if there is any periodicity in the data."
        },
        {
            "ans": "(a) Systematic sampling, (b) Quick and simple to implement on a moving production line, (c) It requires an expensive sampling frame before production starts",
            "feedback": "Systematic sampling does not require an expensive pre-existing sampling frame in a factory setting; items are simply counted as they come off the line."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: The Periodicity Trap",
        "content": "Whenever an exam question asks for a disadvantage of systematic sampling in a manufacturing or sequential context, the gold-standard answer is <em>periodicity</em>. If the sampling interval matches a repeating physical cycle in the machinery, the sample will be completely unrepresentative."
    }
},
{
    "id": "050008",
    "group_id": "050006",
    "branch": "Statistics",
    "board": "AQA",
    "level": "AS",
    "major_area": "Statistical Sampling",
    "topic": "Sampling Methods",
    "subtopic": [
        "Stratified Sampling",
        "Sampling Frame",
        "Random Allocation"
    ],
    "img": false,
    "question": "A secondary school has a total of $1200$ pupils divided across three distinct year bands:<br><br>&bull; Key Stage 3 (Years 7&ndash;9): $550$ pupils<br>&bull; Key Stage 4 (Years 10&ndash;11): $410$ pupils<br>&bull; Sixth Form (Years 12&ndash;13): $240$ pupils<br><br>The headteacher wishes to survey a representative stratified sample of $60$ pupils regarding the school canteen facilities.<br><br><strong>(a)</strong> Calculate the number of pupils that should be selected from each of the three year bands to form this stratified sample.<br><br><strong>(b)</strong> Explain in detail the process the headteacher should use to select the required individual pupils from Key Stage 4 to ensure the sample remains a probability sample.",
    "steps": [
        "<strong>(a) Calculating the Stratum Sizes:</strong><br><br>Calculate the sampling fraction for the survey:\\begin{aligned}& \\text{Sampling fraction} \\cr &\\qquad = \\dfrac{60}{1200} \\cr &\\qquad = \\dfrac{1}{20} \\end{aligned}Multiply each stratum population by this fraction:<br><br>For Key Stage 3:\\begin{aligned} n_{\\text{KS3}} &= \\dfrac{550}{20} \\cr &= 27.5 \\approx 28 \\end{aligned}For Key Stage 4:\\begin{aligned} n_{\\text{KS4}} &= \\dfrac{410}{20} \\cr &= 20.5 \\approx 20 \\end{aligned}For Sixth Form:\\begin{aligned} n_{\\text{SF}} &= \\dfrac{240}{20} \\cr &= 12 \\end{aligned}Check the sample sum:\\begin{aligned} 28 + 20 + 12 = 60 \\end{aligned}(Rounding KS3 to $27$ and KS4 to $21$ also gives a valid total of $60$).",
        "<strong>(b) Selecting Individual Pupils from Key Stage 4:</strong><br><br>To ensure a true random (probability) selection:<br><br>1. Obtain the full official register of all $410$ Key Stage 4 pupils to act as the sampling frame.<br><br>2. Assign each pupil a unique integer from $1$ to $410$.<br><br>3. Use a random number generator to generate integers between $1$ and $410$, ignoring duplicates, until $20$ distinct pupils are selected.",
        "Final Answer: (a) KS3: $28$, KS4: $20$, Sixth Form: $12$, (b) Assign numbers $1$ to $410$ from the register and select using a random number generator, ignoring duplicates"
    ],
    "pi_options": [
        {
            "ans": "(a) KS3: $20$, KS4: $20$, Sixth Form: $20$, (b) Assign numbers $1$ to $410$ from the register and select using a random number generator, ignoring duplicates",
            "feedback": "In part (a), choosing an equal number of pupils ($20$) from each year band ignores their population sizes. In stratified sampling, sample sizes must be strictly proportional to stratum sizes."
        },
        {
            "ans": "(a) KS3: $28$, KS4: $20$, Sixth Form: $12$, (b) Ask the KS4 head of year to pick the first $20$ pupils they meet in the corridor",
            "feedback": "In part (b), selecting pupils from a corridor is opportunity sampling, not a probability sample. A probability sample requires a sampling frame and random number generation."
        },
        {
            "ans": "(a) KS3: $27.5$, KS4: $20.5$, Sixth Form: $12$, (b) Assign numbers $1$ to $410$ from the register and select using a random number generator, ignoring duplicates",
            "feedback": "In part (a), sample sizes must be whole numbers of pupils; you cannot interview $27.5$ or $20.5$ people."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Full Marks on Sampling Selection Questions",
        "content": "Exam questions asking <em>'how to select the sample'</em> require three specific mark-scheme steps: (1) create a numbered list (the sampling frame), (2) generate random numbers within that range, and (3) explicitly state that duplicate numbers must be discarded."
    }
},
{
    "id": "050009",
    "group_id": "050006",
    "branch": "Statistics",
    "board": "AQA",
    "level": "AS",
    "major_area": "Statistical Sampling",
    "topic": "Sampling Methods",
    "subtopic": [
        "Opportunity Sampling",
        "Sampling Frame",
        "Sampling Bias"
    ],
    "img": false,
    "question": "An ecologist is investigating the proportion of adult field mice carrying a specific parasite in a large nature reserve. She sets three live-capture traps near the entrance of the reserve on a single Saturday morning and collects data from the first $20$ mice captured.<br><br><strong>(a)</strong> State the sampling method used by the ecologist.<br><br><strong>(b)</strong> Define the term <em>sampling frame</em> and explain whether a sampling frame exists for the ecologist in this scenario.<br><br><strong>(c)</strong> Give two distinct reasons why this sample may introduce bias and fail to represent the population of field mice in the nature reserve.",
    "steps": [
        "<strong>(a) Identifying the Sampling Method:</strong><br><br>The ecologist tests subjects that are readily accessible at a single time and place until the target total is reached.<br><br>This is opportunity sampling (or convenience sampling).",
        "<strong>(b) Defining Sampling Frame:</strong><br><br>A sampling frame is a complete list of all individual members or sampling units in the population from which a sample can be drawn.<br><br>In this investigation, no sampling frame exists because it is impossible to uniquely list or register every wild field mouse living in the nature reserve.",
        "<strong>(c) Identifying Two Sources of Bias:</strong><br><br><strong>1. Location Bias:</strong> Traps were placed only near the entrance. Mice living near human footpaths may have different diets, behaviours, or parasite exposures compared to mice inhabiting deep woodland.<br><br><strong>2. Temporal Bias:</strong> Trapping for just two hours on a single Saturday morning only captures mice active at that specific time and under those weather conditions, excluding mice that forage at night or during different periods.",
        "Final Answer: (a) Opportunity sampling, (b) A sampling frame is a list of all population units; none exists for wild mice, (c) Location bias (entrance only) and temporal bias (single morning)"
    ],
    "pi_options": [
        {
            "ans": "(a) Simple random sampling, (b) A sampling frame is a list of all population units; none exists for wild mice, (c) Location bias (entrance only) and temporal bias (single morning)",
            "feedback": "In part (a), the method cannot be simple random sampling because the ecologist has no list of the mice and does not give every mouse an equal chance of capture."
        },
        {
            "ans": "(a) Opportunity sampling, (b) A sampling frame is the geographical boundary of the reserve; it does exist, (c) Location bias (entrance only) and temporal bias (single morning)",
            "feedback": "In part (b), a sampling frame is not a physical or geographical area; it is strictly defined as an indexed list or register of all individual sampling units."
        },
        {
            "ans": "(a) Opportunity sampling, (b) A sampling frame is a list of all population units; none exists for wild mice, (c) Sample size is too large and the mice were trapped humanely",
            "feedback": "In part (c), neither of these points explains bias; ethical handling does not introduce statistical bias, nor is $n = 20$ an excessively large sample."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: What Exactly Is a Sampling Frame?",
        "content": "Students frequently define a sampling frame as <em>'the population'</em> or <em>'the area where you take data'</em>. It is neither. A sampling frame is strictly a physical or digital list of individually identifiable sampling units (e.g. an electoral register, a patient database, or a school roll). If you cannot produce a list, a sampling frame does not exist."
    }
},
{
    "id": "050010",
    "group_id": "050006",
    "branch": "Statistics",
    "board": "AQA",
    "level": "AS",
    "major_area": "Statistical Sampling",
    "topic": "Sampling Methods",
    "subtopic": [
        "Quota vs Stratified",
        "Sources of Bias",
        "Electoral Roll"
    ],
    "img": false,
    "question": "A town council wishes to consult residents about a proposed bypass road. Two councillors propose different sampling approaches to obtain a sample of $200$ residents:<br><br>&bull; <strong>Councillor Evans</strong> proposes taking a stratified sample of $200$ residents using the local electoral roll, stratifying by four geographic council wards.<br>&bull; <strong>Councillor Green</strong> proposes sending interviewers to the town centre on a Tuesday morning to interview $50$ people from each of four age categories (18&ndash;30, 31&ndash;50, 51&ndash;65, and over 65).<br><br><strong>(a)</strong> State the sampling technique proposed by Councillor Green.<br><br><strong>(b)</strong> State one advantage of Councillor Green’s proposed method compared to Councillor Evans’s method.<br><br><strong>(c)</strong> Give two distinct reasons why Councillor Green’s method may result in a biased or unrepresentative sample compared to Councillor Evans’s method.",
    "steps": [
        "<strong>(a) Identifying Councillor Green's Sampling Technique:</strong><br><br>Interviewers are directed to fill predetermined quotas ($50$ people) across specified demographic groups without using a random list.<br><br>This technique is quota sampling.",
        "<strong>(b) Stating an Advantage of Quota Sampling:</strong><br><br>Councillor Green's method does not require a sampling frame (such as the electoral roll), making the survey quicker, cheaper, and simpler to execute.<br><br>Additionally, there is no issue of non-response tracking, as interviewers replace people who refuse simply by asking someone else.",
        "<strong>(c) Identifying Two Sources of Bias in Councillor Green's Method:</strong><br><br><strong>1. Exclusion / Time Bias:</strong> Surveying in the town centre on a Tuesday morning excludes people who work full-time, attend school or college, or have restricted mobility, over-representing retired or non-working individuals.<br><br><strong>2. Interviewer Selection Bias:</strong> The interviewers have complete discretion over whom to approach, naturally tending towards people who appear approachable, friendly, or unhurried, which destroys randomness.",
        "Final Answer: (a) Quota sampling, (b) Quicker and cheaper as no sampling frame is needed, (c) Excludes residents at work on Tuesday morning, and interviewer bias in selecting participants"
    ],
    "pi_options": [
        {
            "ans": "(a) Systematic sampling, (b) Quicker and cheaper as no sampling frame is needed, (c) Excludes residents at work on Tuesday morning, and interviewer bias in selecting participants",
            "feedback": "Councillor Green's method is quota sampling, not systematic sampling. Systematic sampling involves selecting every $k^{\\text{th}}$ individual from an ordered list."
        },
        {
            "ans": "(a) Quota sampling, (b) Every resident has an equal chance of selection, (c) Excludes residents at work on Tuesday morning, and interviewer bias in selecting participants",
            "feedback": "In quota sampling, residents do not have an equal chance of selection. Only those walking past the interviewer on Tuesday morning have any chance of being asked."
        },
        {
            "ans": "(a) Quota sampling, (b) Quicker and cheaper as no sampling frame is needed, (c) Electoral rolls are illegal to consult and too few age categories were chosen",
            "feedback": "Electoral rolls are legitimate, standard public registers for civic surveys; the bias arises from excluding working residents and interviewer discretion."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Non-Response vs Non-Randomness",
        "content": "In an exam, remember that quota sampling does not suffer from <em>'non-response bias'</em> in the conventional survey sense (if someone declines, the interviewer simply asks the next passer-by). Instead, its primary weaknesses are <em>interviewer selection bias</em> and <em>systematic exclusion</em> of demographics unavailable during the survey window."
    }
},
{
    "id": "050011",
    "group_id": "050011",
    "branch": "Statistics",
    "board": "AQA",
    "level": "AS",
    "major_area": "Data Presentation and Interpretation",
    "topic": "Measures of Location and Spread",
    "subtopic": [
        "Mean and Standard Deviation",
        "Outliers",
        "Data Cleaning"
    ],
    "img": false,
    "question": "A track coach records the $100\\text{ m}$ sprint times, $t$ seconds, for a random sample of $8$ athletes:<table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:4px; border:1px solid #ccc;'>Athlete</th><th style='padding:4px; border:1px solid #ccc;'>Time (s)</th><th style='padding:4px; border:1px solid #ccc;'>Athlete</th><th style='padding:4px; border:1px solid #ccc;'>Time (s)</th></tr></thead><tbody><tr><td style='padding:4px; border:1px solid #ccc;'>Ben</td><td style='padding:4px; border:1px solid #ccc;'>$12.2$</td><td style='padding:4px; border:1px solid #ccc;'>Zac</td><td style='padding:4px; border:1px solid #ccc;'>$14.1$</td></tr><tr><td style='padding:4px; border:1px solid #ccc;'>Sam</td><td style='padding:4px; border:1px solid #ccc;'>$11.8$</td><td style='padding:4px; border:1px solid #ccc;'>Max</td><td style='padding:4px; border:1px solid #ccc;'>$12.3$</td></tr><tr><td style='padding:4px; border:1px solid #ccc;'>Dan</td><td style='padding:4px; border:1px solid #ccc;'>$12.0$</td><td style='padding:4px; border:1px solid #ccc;'>Tom</td><td style='padding:4px; border:1px solid #ccc;'>$11.7$</td></tr><tr><td style='padding:4px; border:1px solid #ccc;'>Leo</td><td style='padding:4px; border:1px solid #ccc;'>$11.9$</td><td style='padding:4px; border:1px solid #ccc;'>Kai</td><td style='padding:4px; border:1px solid #ccc;'>$12.0$</td></tr></tbody></table>An outlier is defined as any value that lies more than $2$ standard deviations from the mean.<br><br><strong>(a)</strong> Calculate the mean and the standard deviation of these $8$ sprint times.<br><br><strong>(b)</strong> Verify that Zac’s time of $14.1\\text{ s}$ is an outlier, fully justifying your answer.<br><br><strong>(c)</strong> State, with a reason, the effect that discarding Zac’s time would have on the mean and the standard deviation.",
    "steps": [
        "<strong>(a) Calculating the Mean and Standard Deviation:</strong><br><br>Calculate the sum of times:\\begin{aligned} \\sum t &= 98.0 \\end{aligned}Calculate the sample mean:\\begin{aligned} \\bar{t} &= \\dfrac{98.0}{8} \\cr &= 12.25\\text{ s} \\end{aligned}Calculate the sum of squares:\\begin{aligned} \\sum t^2 &= 1204.68 \\end{aligned}Calculate the standard deviation:\\begin{aligned} \\sigma &= \\sqrt{\\dfrac{1204.68}{8} - 12.25^2} \\cr &= \\sqrt{150.585 - 150.0625} \\cr &= \\sqrt{0.5225} \\cr &\\approx 0.723\\text{ s} \\end{aligned}",
        "<strong>(b) Verifying the Outlier:</strong><br><br>Determine the upper outlier boundary:\\begin{aligned}& \\text{Upper boundary} \\cr &\\qquad = \\bar{t} + 2\\sigma \\cr &\\qquad = 12.25 + 2(0.723) \\cr &\\qquad = 13.70\\text{ s} \\end{aligned}Compare Zac's time with the boundary:<br><br>Since $14.1 > 13.70$, Zac’s time is more than $2$ standard deviations above the mean and is confirmed as an outlier.",
        "<strong>(c) Effect of Discarding Zac's Time:</strong><br><br><strong>1. Mean:</strong> The mean will <strong>decrease</strong> because the discarded value ($14.1\\text{ s}$) is significantly larger than the original mean ($12.25\\text{ s}$).<br><br><strong>2. Standard Deviation:</strong> The standard deviation will <strong>decrease</strong> because removing the most extreme value reduces the overall spread of the remaining data.",
        "Final Answer: (a) Mean: $12.25\\text{ s}$, SD: $0.723\\text{ s}$, (b) $14.1 > 13.70\\text{ s}$, so it is an outlier, (c) Both the mean and standard deviation will decrease"
    ],
    "pi_options": [
        {
            "ans": "(a) Mean: $12.25\\text{ s}$, SD: $0.723\\text{ s}$, (b) $14.1 > 13.70\\text{ s}$, so it is an outlier, (c) Mean decreases, but standard deviation increases",
            "feedback": "Discarding an extreme outlier always reduces dispersion around the centre, so the standard deviation must decrease, not increase."
        },
        {
            "ans": "(a) Mean: $12.25\\text{ s}$, SD: $0.523\\text{ s}$, (b) $14.1 > 13.70\\text{ s}$, so it is an outlier, (c) Both the mean and standard deviation will decrease",
            "feedback": "In part (a), $0.5225$ is the variance ($\\sigma^2$). You must take the square root to obtain the standard deviation: $\\sigma = \\sqrt{0.5225} \\approx 0.723\\text{ s}$."
        },
        {
            "ans": "(a) Mean: $12.25\\text{ s}$, SD: $0.723\\text{ s}$, (b) $14.1 < 14.25\\text{ s}$, so not an outlier, (c) Both the mean and standard deviation will decrease",
            "feedback": "In part (b), check your boundary calculation: $12.25 + 2(0.723) = 13.70\\text{ s}$. Zac's time of $14.1\\text{ s}$ exceeds this threshold, making it an outlier."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Qualitative Effects of Removing Outliers",
        "content": "You never need to re-calculate values to explain the effect of removing an outlier. If the discarded value is greater than the mean, the mean falls; if smaller, the mean rises. Removing any genuine outlier pulls the data tighter together, so the standard deviation and variance will always decrease."
    }
},
{
    "id": "050012",
    "group_id": "050011",
    "branch": "Statistics",
    "board": "AQA",
    "level": "AS",
    "major_area": "Data Presentation and Interpretation",
    "topic": "Measures of Location and Spread",
    "subtopic": [
        "Coding",
        "Linear Transformations",
        "Outliers"
    ],
    "img": false,
    "question": "A quality auditor measures the resistance, $R$ ohms, of a sample of $20$ components. The data is coded using:$$y = \\dfrac{R - 100}{10}$$Summary statistics for the coded variable $y$ are:$$\\sum y = 36.0,\\text{ } \\sum y^2 = 114.8$$<strong>(a)</strong> Calculate the mean and the standard deviation of $y$.<br><br><strong>(b)</strong> Hence determine the mean and the standard deviation of the original resistance measurements, $R$.<br><br><strong>(c)</strong> An outlier is defined as any value lying more than $2.5$ standard deviations from the mean. Determine whether a component with $R = 152\\text{ ohms}$ is an outlier.",
    "steps": [
        "<strong>(a) Calculating Mean and Standard Deviation of $y$:</strong><br><br>Calculate the coded mean:\\begin{aligned} \\bar{y} &= \\dfrac{36.0}{20} \\cr &= 1.8 \\end{aligned}Calculate the coded standard deviation:\\begin{aligned} \\sigma_y &= \\sqrt{\\dfrac{114.8}{20} - 1.8^2} \\cr &= \\sqrt{5.74 - 3.24} \\cr &= \\sqrt{2.5} \\cr &\\approx 1.581 \\end{aligned}",
        "<strong>(b) Decoding Mean and Standard Deviation for $R$:</strong><br><br>Rearrange the coding equation for $R$:\\begin{aligned} R = 10y + 100 \\end{aligned}The mean is affected by both addition and multiplication:\\begin{aligned} \\bar{R} &= 10\\bar{y} + 100 \\cr &= 10(1.8) + 100 \\cr &= 118\\text{ ohms} \\end{aligned}The standard deviation is affected only by scale (multiplication), not by adding constants:\\begin{aligned} \\sigma_R &= 10\\sigma_y \\cr &= 10(1.581) \\cr &= 15.81\\text{ ohms} \\end{aligned}",
        "<strong>(c) Determining Outlier Status for $R = 152\\text{ ohms}$:</strong><br><br>Calculate the upper outlier boundary:\\begin{aligned}& \\text{Upper boundary} \\cr &\\qquad = \\bar{R} + 2.5\\sigma_R \\cr &\\qquad = 118 + 2.5(15.81) \\cr &\\qquad = 118 + 39.53 \\cr &\\qquad = 157.53\\text{ ohms} \\end{aligned}Since $152 < 157.53$, the resistance of $152\\text{ ohms}$ does not exceed the threshold and is therefore not classified as an outlier.",
        "Final Answer: (a) $\\bar{y} = 1.8$, $\\sigma_y = 1.58$, (b) $\\bar{R} = 118\\text{ ohms}$, $\\sigma_R = 15.8\\text{ ohms}$, (c) Not an outlier as $152 < 157.5\\text{ ohms}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $\\bar{y} = 1.8$, $\\sigma_y = 1.58$, (b) $\\bar{R} = 118\\text{ ohms}$, $\\sigma_R = 115.8\\text{ ohms}$, (c) Not an outlier as $152 < 157.5\\text{ ohms}$",
            "feedback": "In part (b), adding $100$ to the standard deviation is incorrect. Adding a constant shifts all data points equally and has no effect on spread; only the scale factor of $10$ multiplies the standard deviation."
        },
        {
            "ans": "(a) $\\bar{y} = 1.8$, $\\sigma_y = 1.58$, (b) $\\bar{R} = 118\\text{ ohms}$, $\\sigma_R = 15.8\\text{ ohms}$, (c) An outlier as $152 > 118 + 2(15.8)$",
            "feedback": "In part (c), the question specified an outlier threshold of $2.5$ standard deviations, not $2.0$ standard deviations. With $2.5\\sigma$, the boundary is $157.53\\text{ ohms}$."
        },
        {
            "ans": "(a) $\\bar{y} = 1.8$, $\\sigma_y = 2.50$, (b) $\\bar{R} = 118\\text{ ohms}$, $\\sigma_R = 25.0\\text{ ohms}$, (c) Not an outlier as $152 < 157.5\\text{ ohms}$",
            "feedback": "In part (a), $2.5$ is the variance ($\\sigma_y^2$). You forgot to take the square root to find $\\sigma_y = \\sqrt{2.5} \\approx 1.581$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: The Golden Rule of Coding",
        "content": "For any linear coding $y = \\dfrac{x - a}{b}$, remember: location measures (mean, median, mode, quartiles) are affected by both shift $a$ and scale $b$. Spread measures (standard deviation, variance, IQR, range) are completely invariant to shift $a$ and are scaled purely by factor $b$."
    }
},
{
    "id": "050013",
    "group_id": "050011",
    "branch": "Statistics",
    "board": "AQA",
    "level": "AS",
    "major_area": "Data Presentation and Interpretation",
    "topic": "Measures of Location and Spread",
    "subtopic": [
        "Linear Interpolation",
        "Interquartile Range",
        "Outlier Boundaries"
    ],
    "img": false,
    "question": "The table shows the distribution of daily rainfall, $x\\text{ mm}$, recorded at an environmental monitoring station over a period of $50$ days:<table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:5px; border:1px solid #ccc;'>Daily rainfall ($x\\text{ mm}$)</th><th style='padding:5px; border:1px solid #ccc;'>Frequency ($f$)</th></tr></thead><tbody><tr><td style='padding:5px; border:1px solid #ccc;'>$0 \\le x < 5$</td><td style='padding:5px; border:1px solid #ccc;'>$18$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>$5 \\le x < 10$</td><td style='padding:5px; border:1px solid #ccc;'>$14$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>$10 \\le x < 20$</td><td style='padding:5px; border:1px solid #ccc;'>$10$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>$20 \\le x < 40$</td><td style='padding:5px; border:1px solid #ccc;'>$6$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>$40 \\le x < 70$</td><td style='padding:5px; border:1px solid #ccc;'>$2$</td></tr></tbody></table><strong>(a)</strong> Use linear interpolation to estimate the lower quartile, $Q_1$, and the upper quartile, $Q_3$.<br><br><strong>(b)</strong> Calculate the interquartile range (IQR).<br><br><strong>(c)</strong> An outlier is defined as any value lying more than $1.5 \\times \\text{IQR}$ above $Q_3$. Find the minimum daily rainfall required to be an outlier.<br><br><strong>(d)</strong> State, with a reason, whether the two days recorded in the interval $40 \\le x < 70$ are guaranteed to be outliers.",
    "steps": [
        "<strong>(a) Estimating Quartiles Using Linear Interpolation:</strong><br><br>For continuous grouped data with $n = 50$:<br><br>The position for $Q_1$ is:\\begin{aligned} \\dfrac{50}{4} = 12.5 \\end{aligned}This falls in the class $0 \\le x < 5$ (cumulative frequency $18$):\\begin{aligned} Q_1 &= 0 + \\dfrac{12.5}{18} \\times 5 \\cr &\\approx 3.47\\text{ mm} \\end{aligned}The position for $Q_3$ is:\\begin{aligned} \\dfrac{3 \\times 50}{4} = 37.5 \\end{aligned}Cumulative frequency before $10\\text{ mm}$ is $18 + 14 = 32$.<br><br>Thus $37.5$ lies in $10 \\le x < 20$ (width $10$, frequency $10$):\\begin{aligned} Q_3 &= 10 + \\dfrac{37.5 - 32}{10} \\times 10 \\cr &= 10 + 5.5 \\cr &= 15.50\\text{ mm} \\end{aligned}",
        "<strong>(b) Calculating the Interquartile Range:</strong><br><br>Calculate the difference between the quartiles:\\begin{aligned} \\text{IQR} &= Q_3 - Q_1 \\cr &= 15.50 - 3.47 \\cr &= 12.03\\text{ mm} \\end{aligned}",
        "<strong>(c) Calculating the Upper Outlier Boundary:</strong><br><br>Calculate the threshold for outliers:\\begin{aligned}& \\text{Upper boundary} \\cr &\\qquad = Q_3 + 1.5 \\times \\text{IQR} \\cr &\\qquad = 15.50 + 1.5(12.03) \\cr &\\qquad = 15.50 + 18.045 \\cr &\\qquad = 33.55\\text{ mm} \\end{aligned}The minimum rainfall required for a day to be classified as an outlier is $33.55\\text{ mm}$.",
        "<strong>(d) Assessing the Interval $40 \\le x < 70$:</strong><br><br>Every observation in the class $40 \\le x < 70$ has a rainfall of at least $40\\text{ mm}$.<br><br>Since the minimum possible value in this interval ($40\\text{ mm}$) is strictly greater than the outlier boundary of $33.55\\text{ mm}$, both days are guaranteed to be outliers.",
        "Final Answer: (a) $Q_1 = 3.47\\text{ mm}$, $Q_3 = 15.50\\text{ mm}$, (b) $\\text{IQR} = 12.03\\text{ mm}$, (c) $33.55\\text{ mm}$, (d) Yes, guaranteed because the minimum class value ($40\\text{ mm}$) exceeds the outlier threshold ($33.55\\text{ mm}$)"
    ],
    "pi_options": [
        {
            "ans": "(a) $Q_1 = 3.47\\text{ mm}$, $Q_3 = 15.50\\text{ mm}$, (b) $\\text{IQR} = 12.03\\text{ mm}$, (c) $33.55\\text{ mm}$, (d) No, because the exact values within the class are unknown",
            "feedback": "In part (d), although exact values are unknown, every value in $40 \\le x < 70$ is at least $40\\text{ mm}$. Since $40 > 33.55$, every observation in this interval must exceed the outlier threshold."
        },
        {
            "ans": "(a) $Q_1 = 3.75\\text{ mm}$, $Q_3 = 16.25\\text{ mm}$, (b) $\\text{IQR} = 12.50\\text{ mm}$, (c) $35.00\\text{ mm}$, (d) Yes, guaranteed because the minimum class value ($40\\text{ mm}$) exceeds the outlier threshold ($33.55\\text{ mm}$)",
            "feedback": "In part (a), ensure you use the exact cumulative frequencies from the table rather than interpolating between class midpoints."
        },
        {
            "ans": "(a) $Q_1 = 3.47\\text{ mm}$, $Q_3 = 15.50\\text{ mm}$, (b) $\\text{IQR} = 12.03\\text{ mm}$, (c) $27.53\\text{ mm}$, (d) Yes, guaranteed because the minimum class value ($40\\text{ mm}$) exceeds the outlier threshold ($33.55\\text{ mm}$)",
            "feedback": "In part (c), check your formula: upper boundary requires adding $1.5 \\times \\text{IQR}$ to $Q_3$ ($15.50 + 18.05 = 33.55$), not to $Q_1$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Guaranteed Outliers in Grouped Data",
        "content": "When dealing with continuous grouped data, we rarely know the exact raw values. However, if the lower class boundary of an extreme interval is already greater than the calculated outlier threshold ($40 > 33.55$), every single entry in that interval is mathematically guaranteed to be an outlier."
    }
},
{
    "id": "050014",
    "group_id": "050011",
    "branch": "Statistics",
    "board": "AQA",
    "level": "AS",
    "major_area": "Data Presentation and Interpretation",
    "topic": "Measures of Location and Spread",
    "subtopic": [
        "Correcting Summary Statistics",
        "Mean and Variance",
        "Data Cleaning"
    ],
    "img": false,
    "question": "A tutor records the test marks, $x$, of a group of $25$ students. The mean mark is $\\bar{x} = 62.0$ and the standard deviation is $\\sigma = 8.0$.<br><br>Two recording errors are subsequently identified:<br>&bull; A score of $38$ was incorrectly entered and should have been $58$.<br>&bull; A score of $72$ was incorrectly entered and should have been $77$.<br><br><strong>(a)</strong> Calculate the correct sum of marks, $\\sum x_{\\text{new}}$.<br><br><strong>(b)</strong> Calculate the corrected mean mark.<br><br><strong>(c)</strong> Given that the original sum of squares was $\\sum x^2 = 97600$, calculate the corrected standard deviation to $3$ significant figures.",
    "steps": [
        "<strong>(a) Calculating the Corrected Sum:</strong><br><br>Find the original sum of scores:\\begin{aligned} \\sum x_{\\text{orig}} &= 25 \\times 62.0 \\cr &= 1550 \\end{aligned}Subtract the incorrect values and add the correct values:\\begin{aligned} &\\sum x_{\\text{new}}\\cr & \\qquad= 1550 - 38 + 58 - 72 + 77 \\cr &\\qquad= 1550 + 20 + 5 \\cr &\\qquad= 1575 \\end{aligned}",
        "<strong>(b) Calculating the Corrected Mean:</strong><br><br>Divide the corrected sum by the number of students:\\begin{aligned} \\bar{x}_{\\text{new}} &= \\dfrac{1575}{25} \\cr &= 63.0 \\end{aligned}",
        "<strong>(c) Calculating the Corrected Standard Deviation:</strong><br><br>Adjust the sum of squares by subtracting the squares of incorrect values and adding the squares of correct values:\\begin{aligned} \\sum x^2_{\\text{new}} &= 97600 - 38^2 + 58^2 \\cr & \\qquad - 72^2 + 77^2 \\cr &= 97600 - 1444 + 3364 \\cr & \\qquad - 5184 + 5929 \\cr &= 100265 \\end{aligned}Calculate the corrected standard deviation:\\begin{aligned} \\sigma_{\\text{new}} &= \\sqrt{\\dfrac{100265}{25} - 63.0^2} \\cr &= \\sqrt{4010.6 - 3969.0} \\cr &= \\sqrt{41.6} \\cr &\\approx 6.45 \\end{aligned}",
        "Final Answer: (a) $\\sum x_{\\text{new}} = 1575$, (b) $\\bar{x}_{\\text{new}} = 63.0$, (c) $\\sigma_{\\text{new}} = 6.45$"
    ],
    "pi_options": [
        {
            "ans": "(a) $\\sum x_{\\text{new}} = 1575$, (b) $\\bar{x}_{\\text{new}} = 63.0$, (c) $\\sigma_{\\text{new}} = 41.6$",
            "feedback": "In part (c), $41.6$ is the corrected variance ($\\sigma^2$). You must take the square root to obtain the standard deviation: $\\sigma = \\sqrt{41.6} \\approx 6.45$."
        },
        {
            "ans": "(a) $\\sum x_{\\text{new}} = 1525$, (b) $\\bar{x}_{\\text{new}} = 61.0$, (c) $\\sigma_{\\text{new}} = 6.45$",
            "feedback": "In part (a), the net adjustment is $(-38 + 58) + (-72 + 77) = +25$, which increases the total to $1550 + 25 = 1575$, rather than decreasing it."
        },
        {
            "ans": "(a) $\\sum x_{\\text{new}} = 1575$, (b) $\\bar{x}_{\\text{new}} = 63.0$, (c) $\\sigma_{\\text{new}} = 7.82$",
            "feedback": "In part (c), ensure you update the mean to $63.0$ when subtracting $\\bar{x}^2$ in the variance formula; using the old mean of $62.0$ will lead to an incorrect standard deviation."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Updating Sums of Squares",
        "content": "When updating $\\sum x^2$, never make the rookie mistake of squaring the difference: $(58 - 38)^2 = 400$. You must add the difference of the squares:\\begin{aligned}58^2 - 38^2 &= 3364 - 1444 \\cr &= 1920\\end{aligned} Also remember to substitute the *new* mean ($63.0$) into $\\sigma = \\sqrt{\\dfrac{\\sum x^2}{n} - \\bar{x}^2}$."
    }
},
{
    "id": "050015",
    "group_id": "050011",
    "branch": "Statistics",
    "board": "AQA",
    "level": "AS",
    "major_area": "Data Presentation and Interpretation",
    "topic": "Measures of Location and Spread",
    "subtopic": [
        "Combined Sets of Data",
        "Pooled Standard Deviation",
        "Outliers"
    ],
    "img": false,
    "question": "A clinical trial tests the recovery time, $t$ days, of patients receiving one of two treatments:<br><br>&bull; <strong>Treatment Group A:</strong> $15$ patients had a mean recovery time of $18.0\\text{ days}$ and a standard deviation of $2.4\\text{ days}$.<br>&bull; <strong>Treatment Group B:</strong> $10$ patients had a mean recovery time of $23.0\\text{ days}$ and a standard deviation of $3.0\\text{ days}$.<br><br>The data from both groups are combined into a single cohort of $25$ patients.<br><br><strong>(a)</strong> Calculate the combined mean recovery time.<br><br><strong>(b)</strong> Calculate the combined standard deviation for the cohort, giving your answer to $3$ significant figures.<br><br><strong>(c)</strong> Using the criterion $\\bar{t} \\pm 2\\sigma$, determine whether a patient in the cohort with a recovery time of $29\\text{ days}$ is an outlier.",
    "steps": [
        "<strong>(a) Calculating the Combined Mean:</strong><br><br>Find the total sum of recovery times for each group:\\begin{aligned} \\sum t_A &= 15 \\times 18.0 \\cr &= 270 \\cr \\sum t_B &= 10 \\times 23.0 \\cr &= 230 \\end{aligned}Calculate the combined mean for the $25$ patients:\\begin{aligned} \\bar{t}_{\\text{comb}} &= \\dfrac{270 + 230}{25} \\cr &= \\dfrac{500}{25} \\cr &= 20.0\\text{ days} \\end{aligned}",
        "<strong>(b) Calculating the Combined Standard Deviation:</strong><br><br>Rearrange the variance formula $\\sigma^2 = \\dfrac{\\sum t^2}{n} - \\bar{t}^2$ to find the sum of squares for each group:\\begin{aligned} \\sum t^2 = n(\\sigma^2 + \\bar{t}^2) \\end{aligned}For Group A:\\begin{aligned} \\sum t_A^2 &= 15(2.4^2 + 18.0^2) \\cr &= 15(5.76 + 324) \\cr &= 15(329.76) \\cr &= 4946.4 \\end{aligned}For Group B:\\begin{aligned} \\sum t_B^2 &= 10(3.0^2 + 23.0^2) \\cr &= 10(9 + 529) \\cr &= 10(538) \\cr &= 5380 \\end{aligned}Combine the sums of squares for the entire cohort:\\begin{aligned} \\sum t_{\\text{comb}}^2 &= 4946.4 + 5380 \\cr &= 10326.4 \\end{aligned}Calculate the combined standard deviation:\\begin{aligned} \\sigma_{\\text{comb}} &= \\sqrt{\\dfrac{10326.4}{25} - 20.0^2} \\cr &= \\sqrt{413.056 - 400} \\cr &= \\sqrt{13.056} \\cr &\\approx 3.61\\text{ days} \\end{aligned}",
        "<strong>(c) Testing Outlier Criterion $\\bar{t} \\pm 2\\sigma$:</strong><br><br>Calculate the upper outlier threshold:\\begin{aligned}& \\text{Upper boundary} \\cr &\\qquad = \\bar{t}_{\\text{comb}} + 2\\sigma_{\\text{comb}} \\cr &\\qquad = 20.0 + 2(3.613) \\cr &\\qquad = 20.0 + 7.23 \\cr &\\qquad = 27.23\\text{ days} \\end{aligned}Since $29 > 27.23$, the patient's recovery time of $29\\text{ days}$ exceeds $2$ standard deviations from the combined mean and is classified as an outlier.",
        "Final Answer: (a) $20.0\\text{ days}$, (b) $3.61\\text{ days}$, (c) Outlier as $29 > 27.23\\text{ days}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $20.5\\text{ days}$, (b) $3.61\\text{ days}$, (c) Outlier as $29 > 27.23\\text{ days}$",
            "feedback": "In part (a), the unweighted average $\\dfrac{18.0 + 23.0}{2} = 20.5$ is incorrect because the two groups have different sizes ($15$ and $10$). The mean must be weighted: $\\dfrac{270 + 230}{25} = 20.0$."
        },
        {
            "ans": "(a) $20.0\\text{ days}$, (b) $2.64\\text{ days}$, (c) Outlier as $29 > 27.23\\text{ days}$",
            "feedback": "In part (b), combining standard deviations by simply averaging them ($\\dfrac{15(2.4) + 10(3.0)}{25} = 2.64$) is mathematically invalid because it completely ignores the variation between the two group means."
        },
        {
            "ans": "(a) $20.0\\text{ days}$, (b) $3.61\\text{ days}$, (c) Not an outlier as $29 < 20 + 3(3.61)$",
            "feedback": "In part (c), the question specified the outlier threshold as $2$ standard deviations ($\\bar{t} \\pm 2\\sigma$), not $3$ standard deviations. Since $29 > 27.23$, it is an outlier."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Never Average Standard Deviations!",
        "content": "You can never combine standard deviations by calculating a weighted average of $\\sigma_A$ and $\\sigma_B$. Notice that the combined standard deviation ($3.61$) is actually larger than both individual standard deviations ($2.4$ and $3.0$). This happens because the difference between the two group means ($18$ vs $23$) introduces substantial additional spread into the combined distribution."
    }
},
{
    "id": "050016",
    "group_id": "050016",
    "branch": "Statistics",
    "board": "AQA",
    "level": "A",
    "major_area": "Statistical Distributions",
    "topic": "The Binomial Distribution",
    "subtopic": [
        "Expectation and Variance",
        "Cumulative Binomial",
        "Modelling Assumptions"
    ],
    "img": false,
    "question": "A basketball player is practising free throws. On each training day, she takes $25$ independent shots at the basket.<br><br>Every time she attempts a shot, the probability that she misses is $0.25$.<br><br>Assume that the number of misses on any given day may be modelled by a binomial distribution, $X \\sim B(25, 0.25)$.<br><br><strong>(a) (i)</strong> Find the mean number of misses in a day.<br><strong>(a) (ii)</strong> Find the variance of the number of misses in a day.<br><br><strong>(b) (i)</strong> Find the probability that, on a particular day, she misses exactly $8$ shots.<br><strong>(b) (ii)</strong> Find the probability that, on a particular day, she misses $6$ or more shots.<br><br><strong>(c) (i)</strong> The player trains for $4$ consecutive days. Calculate the probability that she misses at least $6$ shots on each of the $4$ days.<br><strong>(c) (ii)</strong> Explain why it may be unrealistic to assume a constant probability of $0.25$ of missing across all attempts over the $4$ days.",
    "steps": [
        "<strong>(a) Mean and Variance of $X$:</strong><br><br>For $X \\sim B(n, p)$ where $n = 25$ and $p = 0.25$:<br><br>Calculate the mean:\\begin{aligned} \\mu &= np \\cr &= 25 \\times 0.25 \\cr &= 6.25 \\end{aligned}Calculate the variance:\\begin{aligned} \\sigma^2 &= np(1 - p) \\cr &= 6.25 \\times 0.75 \\cr &= 4.6875 \\end{aligned}",
        "<strong>(b) Calculating Single-Day Probabilities:</strong><br><br><strong>(i)</strong> Calculate the probability of exactly $8$ misses:\\begin{aligned} \\text{P}(X = 8) &= \\binom{25}{8}(0.25)^8(0.75)^{17} \\cr &\\approx 0.1173 \\cr &\\approx 0.117 \\end{aligned}<strong>(ii)</strong> Calculate the probability of $6$ or more misses using cumulative probabilities:\\begin{aligned} \\text{P}(X \\ge 6) &= 1 - \\text{P}(X \\le 5) \\cr &= 1 - 0.3783 \\cr &= 0.6217 \\end{aligned}",
        "<strong>(c) Multi-Day Performance and Modelling Critique:</strong><br><br><strong>(i)</strong> Let $Y$ be the number of days she misses at least $6$ shots. Assuming independence between days, $Y \\sim B(4, 0.6217)$:<br><br>Calculate the probability that this occurs on all $4$ days:\\begin{aligned} \\text{P}(Y = 4) &= (0.6217)^4 \\cr &\\approx 0.1494 \\cr &\\approx 0.149 \\end{aligned}<strong>(ii)</strong> In reality, the probability of missing may change: physical fatigue towards the end of a session or over consecutive days could increase $p$, whereas practice and muscle memory could decrease $p$.",
        "Final Answer: (a) $\\mu = 6.25$, $\\sigma^2 = 4.69$, (b) $0.117$ and $0.622$, (c) $0.149$"
    ],
    "pi_options": [
        {
            "ans": "(a) $\\mu = 6.25$, $\\sigma^2 = 2.16$, (b) $0.117$ and $0.622$, (c) $0.149$",
            "feedback": "In part (a)(ii), $2.165$ is the standard deviation ($\\sqrt{4.6875}$). The variance is $\\sigma^2 = np(1 - p) = 4.6875$."
        },
        {
            "ans": "(a) $\\mu = 6.25$, $\\sigma^2 = 4.69$, (b) $0.117$ and $0.378$, (c) $0.020$",
            "feedback": "In part (b)(ii), $0.3783$ is $\\text{P}(X \\le 5)$. For $6$ or more misses, you must evaluate $1 - \\text{P}(X \\le 5) = 0.6217$."
        },
        {
            "ans": "(a) $\\mu = 6.25$, $\\sigma^2 = 4.69$, (b) $0.117$ and $0.622$, (c) $0.598$",
            "feedback": "In part (c)(i), multiplying by $4$ ($4 \\times 0.1494$) is incorrect. The events on separate days are independent, so probabilities multiply: $(0.6217)^4 \\approx 0.149$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Critiquing Binomial Models",
        "content": "When asked why a binomial assumption may fail in sports contexts, focus on the parameters $n$ and $p$. The probability $p$ is rarely constant: fatigue causes success rates to decline, while warm-up or learning increases success. Additionally, consecutive shots may not be independent if confidence affects subsequent performance."
    }
},
{
    "id": "050017",
    "group_id": "050016",
    "branch": "Statistics",
    "board": "AQA",
    "level": "A",
    "major_area": "Statistical Distributions",
    "topic": "The Binomial Distribution",
    "subtopic": [
        "Parameter Estimation",
        "Binomial Formula",
        "Interval Probabilities"
    ],
    "img": false,
    "question": "A discrete random variable $X$ follows a binomial distribution $X \\sim B(n, p)$.<br><br>The mean of $X$ is $7.2$ and the variance of $X$ is $4.32$.<br><br><strong>(a)</strong> Determine the values of the parameters $n$ and $p$.<br><br><strong>(b)</strong> Calculate $\\text{P}(X = 8)$, giving your answer to $4$ decimal places.<br><br><strong>(c)</strong> Calculate the probability that $X$ lies within one standard deviation of the mean, i.e. find $\\text{P}(\\mu - \\sigma < X < \\mu + \\sigma)$.",
    "steps": [
        "<strong>(a) Finding the Parameters $n$ and $p$:</strong><br><br>Set up the standard formulas for mean and variance:\\begin{aligned} np &= 7.2 \\cr np(1 - p) &= 4.32 \\end{aligned}Substitute $np = 7.2$ into the variance formula:\\begin{aligned} 7.2(1 - p) &= 4.32 \\cr 1 - p &= 0.6 \\cr p &= 0.4 \\end{aligned}Substitute $p = 0.4$ back to solve for $n$:\\begin{aligned} n(0.4) &= 7.2 \\cr n &= 18 \\end{aligned}",
        "<strong>(b) Calculating $\\text{P}(X = 8)$:</strong><br><br>Using $X \\sim B(18, 0.4)$:\\begin{aligned} \\text{P}(X = 8) &= \\binom{18}{8}(0.4)^8(0.6)^{10} \\cr &= 43758 \\times (0.00065536) \\cr &\\qquad \\times (0.0060466) \\cr &\\approx 0.1734 \\end{aligned}",
        "<strong>(c) Calculating $\\text{P}(\\mu - \\sigma < X < \\mu + \\sigma)$:</strong><br><br>Calculate the standard deviation:\\begin{aligned} \\sigma &= \\sqrt{4.32} \\cr &\\approx 2.078 \\end{aligned}Find the interval limits:\\begin{aligned} \\mu - \\sigma &= 7.2 - 2.078 \\cr &= 5.122 \\cr \\mu + \\sigma &= 7.2 + 2.078 \\cr &= 9.278 \\end{aligned}Since $X$ is a discrete integer variable, $5.122 < X < 9.278$ corresponds to $6 \\le X \\le 9$:\\begin{aligned}& \\text{P}(6 \\le X \\le 9) \\cr &\\quad = \\text{P}(X \\le 9) - \\text{P}(X \\le 5) \\cr &\\quad = 0.8653 - 0.2088 \\cr &\\quad = 0.6565 \\end{aligned}",
        "Final Answer: (a) $n = 18$, $p = 0.4$, (b) $0.1734$, (c) $0.6565$"
    ],
    "pi_options": [
        {
            "ans": "(a) $n = 18$, $p = 0.6$, (b) $0.1734$, (c) $0.6565$",
            "feedback": "In part (a), $1 - p = 0.6$, which means $p = 1 - 0.6 = 0.4$, not $0.6$."
        },
        {
            "ans": "(a) $n = 18$, $p = 0.4$, (b) $0.1734$, (c) $0.7845$",
            "feedback": "In part (c), the discrete interval strictly between $5.122$ and $9.278$ includes integers $6, 7, 8, 9$. Including $X = 5$ is incorrect because $5 < 5.122$."
        },
        {
            "ans": "(a) $n = 12$, $p = 0.6$, (b) $0.2131$, (c) $0.6565$",
            "feedback": "In part (a), solving $n(0.6) = 7.2$ resulted from confusing $p$ with $1 - p$. The correct parameters are $p = 0.4$ and $n = 18$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Dividing Variance by Mean",
        "content": "To solve for $n$ and $p$ from the mean and variance, divide the variance by the mean: $\\dfrac{np(1-p)}{np} = 1 - p$. This eliminates $n$ immediately and yields $1 - p$, avoiding algebraic substitution."
    }
},
{
    "id": "050018",
    "group_id": "050016",
    "branch": "Statistics",
    "board": "AQA",
    "level": "A",
    "major_area": "Statistical Distributions",
    "topic": "The Binomial Distribution",
    "subtopic": [
        "Two-Stage Testing",
        "Quality Control",
        "Conditional Probability"
    ],
    "img": false,
    "question": "A manufacturing process produces light sensors, of which $8\\%$ are defective. A quality-control inspector tests a random sample of $20$ sensors from a large batch.<br><br>Let $X$ denote the number of defective sensors in the sample.<br><br><strong>(a)</strong> State the distribution of $X$, specifying any necessary parameters.<br><br><strong>(b)</strong> Find the probability that the sample contains:<br>&bull; no defective sensors,<br>&bull; at least $3$ defective sensors.<br><br><strong>(c)</strong> A two-stage inspection protocol is used:<br>&bull; The batch is accepted immediately if there is at most $1$ defective sensor in the first sample of $20$.<br>&bull; The batch is rejected immediately if there are $4$ or more defective sensors in the first sample of $20$.<br>&bull; If there are $2$ or $3$ defective sensors, a second sample of $20$ sensors is tested. The batch is accepted if and only if the second sample contains at most $1$ defective sensor.<br><br>Calculate the probability that the batch is accepted.",
    "steps": [
        "<strong>(a) Identifying the Distribution:</strong><br><br>Each sensor has a fixed probability of defect $p = 0.08$, sensors are independent, and there is a fixed sample size $n = 20$:\\begin{aligned} X \\sim B(20, 0.08) \\end{aligned}",
        "<strong>(b) Calculating Basic Probabilities:</strong><br><br>Calculate the probability of zero defects:\\begin{aligned} \\text{P}(X = 0) &= (0.92)^{20} \\cr &\\approx 0.1887 \\end{aligned}Calculate the probability of at least $3$ defects:\\begin{aligned} \\text{P}(X \\ge 3) &= 1 - \\text{P}(X \\le 2) \\cr &= 1 - 0.7879 \\cr &= 0.2121 \\end{aligned}",
        "<strong>(c) Calculating Overall Acceptance Probability:</strong><br><br>Find the probability of immediate acceptance in sample 1 ($X \\le 1$):\\begin{aligned} \\text{P}(X \\le 1) &= \\text{P}(X = 0) + \\text{P}(X = 1) \\cr &= 0.1887 + 0.3282 \\cr &= 0.5169 \\end{aligned}Find the probability of requiring a second sample ($X = 2$ or $X = 3$):\\begin{aligned} \\text{P}(2 \\le X \\le 3) &= \\text{P}(X \\le 3) \\cr & \\quad - \\text{P}(X \\le 1) \\cr &= 0.9294 - 0.5169 \\cr &= 0.4125 \\end{aligned}A second sample is tested independently with identical acceptance probability $\\text{P}(Y \\le 1) = 0.5169$.<br><br>Combine the probabilities of both paths to acceptance:\\begin{aligned}& \\text{P}(\\text{Accepted}) \\cr &\\quad = 0.5169 + (0.4125 \\times 0.5169) \\cr &\\quad = 0.5169 + 0.2132 \\cr &\\quad = 0.7301 \\end{aligned}",
        "Final Answer: (a) $X \\sim B(20, 0.08)$, (b) $0.1887$ and $0.2121$, (c) $0.7301$"
    ],
    "pi_options": [
        {
            "ans": "(a) $X \\sim B(20, 0.08)$, (b) $0.1887$ and $0.2121$, (c) $0.5169$",
            "feedback": "In part (c), $0.5169$ is only the probability of accepting at the first stage. You must also include the probability of re-testing and then passing the second inspection."
        },
        {
            "ans": "(a) $X \\sim B(20, 0.08)$, (b) $0.1887$ and $0.7879$, (c) $0.7301$",
            "feedback": "In part (b), $0.7879$ is $\\text{P}(X \\le 2)$. For at least $3$ defects, you must subtract this from $1$, giving $1 - 0.7879 = 0.2121$."
        },
        {
            "ans": "(a) $X \\sim B(20, 0.08)$, (b) $0.1887$ and $0.2121$, (c) $0.9294$",
            "feedback": "In part (c), $0.9294$ is $\\text{P}(X \\le 3)$ from the first stage, which assumes that all batches requiring a re-test are automatically accepted."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Structuring Multi-Stage Acceptance Models",
        "content": "In multi-stage quality control, visualize the process as a probability tree with two distinct branches to success: $\\text{P}(\\text{Accept Stage 1}) + \\text{P}(\\text{Stage 1 Retest}) \\times \\text{P}(\\text{Accept Stage 2})$. Remember that each stage uses an independent sample drawn from the same overall population."
    }
},
{
    "id": "050019",
    "group_id": "050016",
    "branch": "Statistics",
    "board": "AQA",
    "level": "A",
    "major_area": "Statistical Distributions",
    "topic": "The Binomial Distribution",
    "subtopic": [
        "Hypothesis Testing",
        "Critical Values",
        "Actual Significance Level"
    ],
    "img": false,
    "question": "A seed supplier claims that $80\\%$ of its wildflower seeds germinate. A horticulturalist suspects that the supplier's germination rate is lower than claimed.<br><br>The horticulturalist plants a random sample of $30$ seeds and observes that $19$ germinate.<br><br><strong>(a)</strong> Stating your hypotheses clearly, carry out a hypothesis test at the $5\\%$ significance level.<br><br><strong>(b)</strong> State the critical value for this test.<br><br><strong>(c)</strong> State the actual significance level of the test.",
    "steps": [
        "<strong>(a) Conducting the Hypothesis Test:</strong><br><br>Let $p$ be the population proportion of seeds that germinate, and let $X$ be the number that germinate in a sample of $30$:\\begin{aligned} H_0&: p = 0.8 \\cr H_1&: p < 0.8 \\end{aligned}Under the null hypothesis, $X \\sim B(30, 0.8)$.<br><br>Calculate the $p$-value for the observed result $x = 19$:\\begin{aligned} \\text{P}(X \\le 19) &= 0.0341 \\end{aligned}Compare the $p$-value to the $5\\%$ significance level:<br><br>Since $0.0341 < 0.05$, there is sufficient evidence to reject $H_0$.<br><br>There is significant evidence at the $5\\%$ level to support the horticulturalist's suspicion that the true germination rate is less than $80\\%$.",
        "<strong>(b) Finding the Critical Value:</strong><br><br>Find the largest integer $c$ such that $\\text{P}(X \\le c) \\le 0.05$ under $H_0$:\\begin{aligned} \\text{P}(X \\le 19) &= 0.0341 \\cr \\text{P}(X \\le 20) &= 0.0671 \\end{aligned}Since $\\text{P}(X \\le 19) \\le 0.05$ while $\\text{P}(X \\le 20) > 0.05$, the critical region is $X \\le 19$.<br><br>The critical value is $19$.",
        "<strong>(c) Finding the Actual Significance Level:</strong><br><br>The actual significance level is the probability of incorrectly rejecting $H_0$, which is the probability of landing in the critical region when $H_0$ is true:\\begin{aligned} \\text{Actual significance} &= \\text{P}(X \\le 19) \\cr &= 0.0341 \\text{ (or } 3.41\\%\\text{)} \\end{aligned}",
        "Final Answer: (a) Reject $H_0$ as $0.0341 < 0.05$, (b) $19$, (c) $0.0341$"
    ],
    "pi_options": [
        {
            "ans": "(a) Accept $H_0$ as $0.0341 < 0.05$, (b) $19$, (c) $0.0341$",
            "feedback": "When the calculated probability ($0.0341$) is strictly less than the significance level ($0.05$), the observed result is statistically significant and $H_0$ must be rejected, not accepted."
        },
        {
            "ans": "(a) Reject $H_0$ as $0.0341 < 0.05$, (b) $20$, (c) $0.0671$",
            "feedback": "In part (b), $X = 20$ has a cumulative probability of $0.0671$, which exceeds the $5\\%$ threshold. The critical value must stay at or below $5\\%$, so it is $19$."
        },
        {
            "ans": "(a) Reject $H_0$ as $0.0341 < 0.05$, (b) $19$, (c) $0.0500$",
            "feedback": "In part (c), $0.05$ is the nominal significance level. Because the binomial distribution is discrete, the actual probability of falling into the critical region is $0.0341$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Nominal vs Actual Significance Level",
        "content": "Because the binomial distribution is discrete, it is usually impossible to find a critical region whose probability equals exactly $5\\%$. The nominal significance level is the target ceiling ($5\\%$), whereas the actual significance level is the true probability of landing in the critical region under $H_0$ ($3.41\\%$)."
    }
},
{
    "id": "050020",
    "group_id": "050016",
    "branch": "Statistics",
    "board": "AQA",
    "level": "A",
    "major_area": "Statistical Distributions",
    "topic": "The Binomial Distribution",
    "subtopic": [
        "Normal Approximation",
        "Continuity Correction",
        "Standardisation"
    ],
    "img": false,
    "question": "A postal depot inspects a random sample of $400$ parcels. Historical data indicates that $6\\%$ of parcels have unreadable barcodes.<br><br>Let $X$ denote the number of parcels in the sample with unreadable barcodes.<br><br><strong>(a)</strong> State the exact distribution of $X$, and calculate its mean and variance.<br><br><strong>(b)</strong> Explain why a Normal distribution, $Y \\sim N(\\mu, \\sigma^2)$, can approximate $X$, and state the parameters $\\mu$ and $\\sigma^2$.<br><br><strong>(c)</strong> Using the Normal approximation with a continuity correction, calculate an estimate for $\\text{P}(20 \\le X \\le 30)$.",
    "steps": [
        "<strong>(a) Exact Distribution, Mean, and Variance:</strong><br><br>The exact model is binomial with $n = 400$ and $p = 0.06$:\\begin{aligned} X \\sim B(400, 0.06) \\end{aligned}Calculate the mean:\\begin{aligned} \\mu &= np \\cr &= 400 \\times 0.06 \\cr &= 24 \\end{aligned}Calculate the variance:\\begin{aligned} \\sigma^2 &= np(1 - p) \\cr &= 24 \\times 0.94 \\cr &= 22.56 \\end{aligned}",
        "<strong>(b) Justifying the Normal Approximation:</strong><br><br>A Normal approximation is valid because $n$ is large ($n = 400$) and neither $np$ nor $nq$ is too small:\\begin{aligned} np &= 24 > 5 \\cr n(1 - p) &= 376 > 5 \\end{aligned}Therefore, $X$ is approximated by $Y \\sim N(24, 22.56)$.",
        "<strong>(c) Applying Continuity Correction and Standardising:</strong><br><br>Applying a continuity correction to the inclusive discrete interval $20 \\le X \\le 30$ gives the continuous interval $19.5 \\le Y \\le 30.5$.<br><br>Standardise both endpoints using $\\mu = 24$ and $\\sigma = \\sqrt{22.56} \\approx 4.7497$:\\begin{aligned} z_1 &= \\dfrac{19.5 - 24}{4.7497} \\cr &\\approx -0.947 \\end{aligned}\\begin{aligned} z_2 &= \\dfrac{30.5 - 24}{4.7497} \\cr &\\approx 1.368 \\end{aligned}Evaluate the probability using standard Normal tables:\\begin{aligned}& \\text{P}(19.5 \\le Y \\le 30.5) \\cr &\\quad = \\Phi(1.368) - \\Phi(-0.947) \\cr &\\quad = 0.9143 - (1 - 0.8282) \\cr &\\quad = 0.9143 - 0.1718 \\cr &\\quad = 0.7425 \\end{aligned}",
        "Final Answer: (a) $\\mu = 24$, $\\sigma^2 = 22.56$, (b) $Y \\sim N(24, 22.56)$, (c) $0.7425$"
    ],
    "pi_options": [
        {
            "ans": "(a) $\\mu = 24$, $\\sigma^2 = 22.56$, (b) $Y \\sim N(24, 22.56)$, (c) $0.6974$",
            "feedback": "In part (c), forgetting the continuity correction and standardising $20$ and $30$ directly gives $z = -0.842$ and $z = 1.263$, which results in $0.6974$. You must widen the boundaries to $19.5$ and $30.5$."
        },
        {
            "ans": "(a) $\\mu = 24$, $\\sigma^2 = 4.75$, (b) $Y \\sim N(24, 4.75)$, (c) $0.7425$",
            "feedback": "In part (a), $4.75$ is the standard deviation ($\\sqrt{22.56}$). The variance is $\\sigma^2 = 22.56$."
        },
        {
            "ans": "(a) $\\mu = 24$, $\\sigma^2 = 22.56$, (b) $Y \\sim N(24, 22.56)$, (c) $0.7877$",
            "feedback": "In part (c), applying the continuity correction in the wrong direction (narrowing the interval to $20.5 \\le Y \\le 29.5$) gives an incorrect probability."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Continuity Correction Rule",
        "content": "When moving from discrete $X$ to continuous $Y$, each integer $k$ is represented by the interval $[k - 0.5, k + 0.5]$. For an inclusive range $a \\le X \\le b$, always expand both ends outward to cover the full blocks: $a - 0.5 \\le Y \\le b + 0.5$."
    }
},
{
    "id": "050021",
    "group_id": "050021",
    "branch": "Statistics",
    "board": "AQA",
    "level": "AS",
    "major_area": "Probability",
    "topic": "Conditional Probability",
    "subtopic": [
        "Contingency Tables",
        "Mutually Exclusive Events",
        "Pigeonhole Principle"
    ],
    "img": false,
    "question": "A survey records symptoms reported by $150$ undergraduate students across three faculties:<table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:4px; border:1px solid #ccc;'>Symptom</th><th style='padding:4px; border:1px solid #ccc;'>Arts</th><th style='padding:4px; border:1px solid #ccc;'>Sci</th><th style='padding:4px; border:1px solid #ccc;'>Eng</th></tr></thead><tbody><tr><td style='padding:4px; border:1px solid #ccc;'>Eye strain</td><td style='padding:4px; border:1px solid #ccc;'>$22$</td><td style='padding:4px; border:1px solid #ccc;'>$18$</td><td style='padding:4px; border:1px solid #ccc;'>$15$</td></tr><tr><td style='padding:4px; border:1px solid #ccc;'>Neck pain</td><td style='padding:4px; border:1px solid #ccc;'>$42$</td><td style='padding:4px; border:1px solid #ccc;'>$24$</td><td style='padding:4px; border:1px solid #ccc;'>$16$</td></tr><tr><td style='padding:4px; border:1px solid #ccc;'>Sleep disruption</td><td style='padding:4px; border:1px solid #ccc;'>$35$</td><td style='padding:4px; border:1px solid #ccc;'>$25$</td><td style='padding:4px; border:1px solid #ccc;'>$12$</td></tr><tr><td style='padding:4px; border:1px solid #ccc;'>Wrist fatigue</td><td style='padding:4px; border:1px solid #ccc;'>$15$</td><td style='padding:4px; border:1px solid #ccc;'>$10$</td><td style='padding:4px; border:1px solid #ccc;'>$8$</td></tr></tbody></table>There are $60$ Arts, $50$ Science, and $40$ Engineering students.<br><br><strong>(a)</strong> Find the probability that a randomly chosen student:<br><strong>(i)</strong> experiences eye strain and studies Engineering;<br><strong>(ii)</strong> experiences wrist fatigue;<br><strong>(iii)</strong> experiences neck pain, given that they study Arts.<br><br><strong>(b)</strong> For Arts students, explain why eye strain and neck pain are <strong>not</strong> mutually exclusive.",
    "steps": [
        "<strong>(a) (i) Probability of Eye Strain and Engineering:</strong><br><br>From the table, $15$ Engineering students reported eye strain out of the total $150$ students:\\begin{aligned} \\text{P}(E \\cap \\text{Eng}) &= \\dfrac{15}{150} \\cr &= 0.1 \\end{aligned}",
        "<strong>(a) (ii) Probability of Wrist Fatigue:</strong><br><br>Sum the students reporting wrist fatigue across all three faculties:\\begin{aligned} \\text{Total} &= 15 + 10 + 8 \\cr &= 33 \\end{aligned}Calculate the probability across the entire cohort:\\begin{aligned} \\text{P}(W) &= \\dfrac{33}{150} \\cr &= 0.22 \\end{aligned}",
        "<strong>(a) (iii) Conditional Probability for Arts Students:</strong><br><br>Restrict the sample space to the $60$ Arts students.<br><br>Of these $60$ students, $42$ reported neck pain:\\begin{aligned} \\text{P}(N \\mid A) &= \\dfrac{42}{60} \\cr &= 0.7 \\end{aligned}",
        "<strong>(b) Explaining Non-Mutual Exclusivity:</strong><br><br>Consider the $60$ Arts students:<br><br>Number reporting eye strain: $22$<br><br>Number reporting neck pain: $42$<br><br>Sum of the two symptom counts:\\begin{aligned} 22 + 42 = 64 \\end{aligned}Since $64 > 60$, by the pigeonhole principle at least $4$ Arts students must have experienced both symptoms.<br><br>Because $\\text{P}(E \\cap N \\mid A) \\neq 0$, the two events cannot be mutually exclusive.",
        "Final Answer: (a) (i) $0.1$, (ii) $0.22$, (iii) $0.7$, (b) Not mutually exclusive because $22 + 42 = 64 > 60$, so at least $4$ students have both"
    ],
    "pi_options": [
        {
            "ans": "(a) (i) $0.375$, (ii) $0.22$, (iii) $0.7$, (b) Not mutually exclusive because $22 + 42 = 64 > 60$, so at least $4$ students have both",
            "feedback": "In part (a)(i), dividing $15$ by the $40$ Engineering students evaluates the conditional probability $\\text{P}(E \\mid \\text{Eng})$. The joint probability requires dividing by the entire sample of $150$ students."
        },
        {
            "ans": "(a) (i) $0.1$, (ii) $0.22$, (iii) $0.28$, (b) Not mutually exclusive because $22 + 42 = 64 > 60$, so at least $4$ students have both",
            "feedback": "In part (a)(iii), dividing $42$ by $150$ finds the joint probability $\\text{P}(N \\cap A)$. The condition *'given that they study Arts'* restricts the denominator to the $60$ Arts students."
        },
        {
            "ans": "(a) (i) $0.1$, (ii) $0.22$, (iii) $0.7$, (b) Mutually exclusive because they are two completely separate medical symptoms",
            "feedback": "In part (b), medical distinction does not imply mathematical mutual exclusivity. A student can suffer from multiple symptoms simultaneously, and the numbers ($22 + 42 = 64 > 60$) prove overlap exists."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Sum Exceeding the Total",
        "content": "Whenever you need to prove two conditions in a category are not mutually exclusive, simply add their counts. If the sum ($22 + 42 = 64$) exceeds the group total ($60$), their intersection cannot be empty. At least $4$ people must experience both."
    }
},
{
    "id": "050022",
    "group_id": "050021",
    "branch": "Statistics",
    "board": "AQA",
    "level": "AS",
    "major_area": "Probability",
    "topic": "Conditional Probability",
    "subtopic": [
        "Two-Way Tables",
        "Statistical Independence",
        "Multiplication Rule"
    ],
    "img": false,
    "question": "A logistics firm monitors the arrival punctuality of $200$ weekday deliveries:<table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:5px; border:1px solid #ccc;'>Zone</th><th style='padding:5px; border:1px solid #ccc;'>On time</th><th style='padding:5px; border:1px solid #ccc;'>Late</th><th style='padding:5px; border:1px solid #ccc;'>Total</th></tr></thead><tbody><tr><td style='padding:5px; border:1px solid #ccc;'>Urban</td><td style='padding:5px; border:1px solid #ccc;'>$84$</td><td style='padding:5px; border:1px solid #ccc;'>$36$</td><td style='padding:5px; border:1px solid #ccc;'>$120$</td></tr><tr><td style='padding:5px; border:1px solid #ccc;'>Rural</td><td style='padding:5px; border:1px solid #ccc;'>$56$</td><td style='padding:5px; border:1px solid #ccc;'>$24$</td><td style='padding:5px; border:1px solid #ccc;'>$80$</td></tr><tr style='border-top:2px solid #333;'><td style='padding:5px; border:1px solid #ccc;'>Total</td><td style='padding:5px; border:1px solid #ccc;'>$140$</td><td style='padding:5px; border:1px solid #ccc;'>$60$</td><td style='padding:5px; border:1px solid #ccc;'>$200$</td></tr></tbody></table><strong>(a)</strong> Find the probability that a randomly selected delivery:<br><strong>(i)</strong> was in an urban zone and was late;<br><strong>(ii)</strong> was on time, given that it was in a rural zone.<br><br><strong>(b)</strong> Determine, with mathematical justification, whether arriving on time is statistically independent of being in an urban zone.",
    "steps": [
        "<strong>(a) (i) Joint Probability of Urban and Late:</strong><br><br>Read the intersection of Urban and Late from the table:\\begin{aligned} \\text{P}(U \\cap L) &= \\dfrac{36}{200} \\cr &= 0.18 \\end{aligned}",
        "<strong>(a) (ii) Conditional Probability of On Time Given Rural:</strong><br><br>Restrict the sample space to the $80$ Rural deliveries:\\begin{aligned} \\text{P}(T \\mid R) &= \\dfrac{56}{80} \\cr &= 0.7 \\end{aligned}",
        "<strong>(b) Testing for Statistical Independence:</strong><br><br>Two events $T$ and $U$ are independent if and only if $\\text{P}(T \\cap U) = \\text{P}(T) \\times \\text{P}(U)$ (or equivalently $\\text{P}(T \\mid U) = \\text{P}(T)$).<br><br>Calculate the overall probability of being on time:\\begin{aligned} \\text{P}(T) &= \\dfrac{140}{200} \\cr &= 0.7 \\end{aligned}Calculate the conditional probability of being on time given an urban zone:\\begin{aligned} \\text{P}(T \\mid U) &= \\dfrac{84}{120} \\cr &= 0.7 \\end{aligned}Alternatively, compare the joint product:\\begin{aligned} \\text{P}(T) \\times \\text{P}(U) &= 0.7 \\times 0.6 \\cr &= 0.42 \\end{aligned}From the table, the actual joint probability is:\\begin{aligned} \\text{P}(T \\cap U) &= \\dfrac{84}{200} \\cr &= 0.42 \\end{aligned}Since $\\text{P}(T \\cap U) = \\text{P}(T) \\times \\text{P}(U)$, the events are statistically independent.",
        "Final Answer: (a) (i) $0.18$, (ii) $0.7$, (b) Statistically independent as $\\text{P}(T \\cap U) = \\text{P}(T)\\text{P}(U) = 0.42$"
    ],
    "pi_options": [
        {
            "ans": "(a) (i) $0.18$, (ii) $0.7$, (b) Not independent because $84 \\neq 56$",
            "feedback": "In part (b), comparing absolute frequencies ($84$ vs $56$) is incorrect. Independence depends on proportions: both groups achieve identical on-time rates of $70\\%$."
        },
        {
            "ans": "(a) (i) $0.30$, (ii) $0.7$, (b) Statistically independent as $\\text{P}(T \\cap U) = \\text{P}(T)\\text{P}(U) = 0.42$",
            "feedback": "In part (a)(i), $36 / 120 = 0.30$ is the conditional probability $\\text{P}(L \\mid U)$. The question asks for the joint probability $\\text{P}(U \\cap L) = 36 / 200 = 0.18$."
        },
        {
            "ans": "(a) (i) $0.18$, (ii) $0.28$, (b) Statistically independent as $\\text{P}(T \\cap U) = \\text{P}(T)\\text{P}(U) = 0.42$",
            "feedback": "In part (a)(ii), dividing $56$ by the total $200$ gives $\\text{P}(T \\cap R)$. The condition *'given that it was in a rural zone'* requires dividing by the $80$ rural deliveries."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: The Fastest Independence Check",
        "content": "The quickest test for independence in a two-way table is checking whether conditional probabilities match the marginal probability: $\\text{P}(T \\mid U) = \\text{P}(T)$. Here, $84/120 = 0.7$ and $140/200 = 0.7$. If the success rate is identical across rows, independence holds instantly."
    }
},
{
    "id": "050023",
    "group_id": "050021",
    "branch": "Statistics",
    "board": "AQA",
    "level": "AS",
    "major_area": "Probability",
    "topic": "Conditional Probability",
    "subtopic": [
        "Addition Rule",
        "Complementary Events",
        "Conditional Formula"
    ],
    "img": false,
    "question": "Two events, $A$ and $B$, in a sample space satisfy:$$\\text{P}(A) = 0.55 \\qquad \\text{P}(B) = 0.40 \\qquad \\text{P}(A \\cup B) = 0.73$$<strong>(a)</strong> Calculate $\\text{P}(A \\cap B)$.<br><br><strong>(b)</strong> Calculate $\\text{P}(A' \\cap B')$.<br><br><strong>(c)</strong> Calculate the conditional probability $\\text{P}(B \\mid A')$.<br><br><strong>(d)</strong> State, with a reason, whether events $A$ and $B$ are mutually exclusive.",
    "steps": [
        "<strong>(a) Calculating $\\text{P}(A \\cap B)$:</strong><br><br>Rearrange the addition rule for probability:\\begin{aligned}& \\text{P}(A \\cap B) \\cr &\\quad = \\text{P}(A) + \\text{P}(B) - \\text{P}(A \\cup B) \\cr &\\quad = 0.55 + 0.40 - 0.73 \\cr &\\quad = 0.22 \\end{aligned}",
        "<strong>(b) Calculating $\\text{P}(A' \\cap B')$:</strong><br><br>By De Morgan's laws, $A' \\cap B' = (A \\cup B)'$:\\begin{aligned} \\text{P}(A' \\cap B') &= 1 - \\text{P}(A \\cup B) \\cr &= 1 - 0.73 \\cr &= 0.27 \\end{aligned}",
        "<strong>(c) Calculating $\\text{P}(B \\mid A')$:</strong><br><br>Apply the definition of conditional probability:\\begin{aligned} \\text{P}(B \\mid A') &= \\dfrac{\\text{P}(B \\cap A')}{\\text{P}(A')} \\end{aligned}Calculate the numerator and denominator separately:\\begin{aligned} \\text{P}(B \\cap A') &= \\text{P}(B) - \\text{P}(A \\cap B) \\cr &= 0.40 - 0.22 \\cr &= 0.18 \\end{aligned}Calculate the probability of $A'$:\\begin{aligned} \\text{P}(A') &= 1 - \\text{P}(A) \\cr &= 1 - 0.55 \\cr &= 0.45 \\end{aligned}Substitute these values into the conditional formula:\\begin{aligned} \\text{P}(B \\mid A') &= \\dfrac{0.18}{0.45} \\cr &= 0.4 \\end{aligned}",
        "<strong>(d) Assessing Mutual Exclusivity:</strong><br><br>Two events are mutually exclusive if and only if they cannot occur at the same time, meaning $\\text{P}(A \\cap B) = 0$.<br><br>Since $\\text{P}(A \\cap B) = 0.22 \\neq 0$, events $A$ and $B$ are not mutually exclusive.",
        "Final Answer: (a) $0.22$, (b) $0.27$, (c) $0.4$, (d) Not mutually exclusive as $\\text{P}(A \\cap B) = 0.22 \\neq 0$"
    ],
    "pi_options": [
        {
            "ans": "(a) $0.22$, (b) $0.27$, (c) $0.18$, (d) Not mutually exclusive as $\\text{P}(A \\cap B) = 0.22 \\neq 0$",
            "feedback": "In part (c), $0.18$ is $\\text{P}(B \\cap A')$. To find conditional probability, you must divide this by $\\text{P}(A') = 0.45$, which gives $0.4$."
        },
        {
            "ans": "(a) $0.22$, (b) $0.27$, (c) $0.4$, (d) Mutually exclusive because $\\text{P}(A \\cup B) < 1$",
            "feedback": "In part (d), $\\text{P}(A \\cup B) < 1$ simply means the events do not exhaust the sample space. Mutual exclusivity strictly requires $\\text{P}(A \\cap B) = 0$."
        },
        {
            "ans": "(a) $0.05$, (b) $0.27$, (c) $0.4$, (d) Not mutually exclusive as $\\text{P}(A \\cap B) = 0.22 \\neq 0$",
            "feedback": "In part (a), check your arithmetic: \\begin{aligned}0.55 + 0.40 &- 0.73\\cr &= 0.95 - 0.73\\cr & = 0.22\\end{aligned} not $0.05$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Finding Set Differences",
        "content": "To evaluate $\\text{P}(B \\cap A')$, think of circle $B$ with the intersection sliced away: $\\text{P}(B) - \\text{P}(A \\cap B)$. Never try to multiply $\\text{P}(B)$ by $\\text{P}(A')$ unless you have already proved that the events are independent."
    }
},
{
    "id": "050024",
    "group_id": "050021",
    "branch": "Statistics",
    "board": "AQA",
    "level": "AS",
    "major_area": "Probability",
    "topic": "Conditional Probability",
    "subtopic": [
        "Tree Diagrams",
        "Bayes' Theorem",
        "Medical Screening Paradox"
    ],
    "img": false,
    "question": "A diagnostic screening test detects a virus in orchards. Historical records show that $4\\%$ of trees are infected.<br><br>Field trials for the test show that:<br>&bull; An infected tree tests positive with probability $0.95$.<br>&bull; An uninfected tree tests positive (false positive) with probability $0.05$.<br><br><strong>(a)</strong> Calculate the probability that a randomly chosen tree tests positive.<br><br><strong>(b)</strong> Given that a tree tests positive, calculate the probability that it is infected, giving your answer to $3$ significant figures.<br><br><strong>(c)</strong> Comment on the reliability of a positive test result in this context.",
    "steps": [
        "<strong>(a) Total Probability of a Positive Test:</strong><br><br>Let $V$ be the event that a tree is infected, and let $\\text{Pos}$ be a positive result:<br><br>Given parameters:\\begin{aligned} \\text{P}(V) &= 0.04 \\cr \\text{P}(V') &= 0.96 \\cr \\text{P}(\\text{Pos} \\mid V) &= 0.95 \\cr \\text{P}(\\text{Pos} \\mid V') &= 0.05 \\end{aligned}Apply the law of total probability:\\begin{aligned}& \\text{P}(\\text{Pos}) \\cr &\\quad = \\text{P}(V \\cap \\text{Pos}) + \\text{P}(V' \\cap \\text{Pos}) \\cr &\\quad = (0.04)(0.95) + (0.96)(0.05) \\cr &\\quad = 0.038 + 0.048 \\cr &\\quad = 0.086 \\end{aligned}",
        "<strong>(b) Conditional Probability of Infection Given Positive:</strong><br><br>Apply Bayes' theorem:\\begin{aligned} \\text{P}(V \\mid \\text{Pos}) &= \\dfrac{\\text{P}(V \\cap \\text{Pos})}{\\text{P}(\\text{Pos})} \\cr &= \\dfrac{0.038}{0.086} \\cr &\\approx 0.44186 \\cr &\\approx 0.442 \\end{aligned}",
        "<strong>(c) Commenting on Reliability:</strong><br><br>A positive test is surprisingly unreliable: there is only a $44.2\\%$ chance that a tree testing positive is genuinely infected.<br><br>Because the virus is rare ($4\\%$), false positives ($0.048$) outnumber true positives ($0.038$) in the overall population.",
        "Final Answer: (a) $0.086$, (b) $0.442$, (c) Unreliable as a positive tree has only a $44.2\\%$ chance of being infected due to false positives outnumbering true positives"
    ],
    "pi_options": [
        {
            "ans": "(a) $0.086$, (b) $0.950$, (c) Unreliable as a positive tree has only a $44.2\\%$ chance of being infected due to false positives outnumbering true positives",
            "feedback": "In part (b), $0.95$ is the sensitivity $\\text{P}(\\text{Pos} \\mid V)$. The reversed conditional probability $\\text{P}(V \\mid \\text{Pos})$ must be evaluated using Bayes' theorem, giving $0.442$."
        },
        {
            "ans": "(a) $0.038$, (b) $0.442$, (c) Unreliable as a positive tree has only a $44.2\\%$ chance of being infected due to false positives outnumbering true positives",
            "feedback": "In part (a), $0.038$ accounts only for true positives. You must add the false positive rate: $0.038 + 0.048 = 0.086$."
        },
        {
            "ans": "(a) $0.086$, (b) $0.442$, (c) Highly reliable because the test has a $95\\%$ detection accuracy",
            "feedback": "In part (c), high accuracy does not prevent the screening paradox. Because uninfected trees make up $96\\%$ of the population, false positives outnumber true positives."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: The False Positive Paradox",
        "content": "This is the classic screening paradox. When a condition is rare in a population, even a small false-positive rate produces more uninfected people testing positive than genuine sufferers. Never confuse $\\text{P}(\\text{Pos} \\mid V)$ with $\\text{P}(V \\mid \\text{Pos})$."
    }
},
{
    "id": "050025",
    "group_id": "050021",
    "branch": "Statistics",
    "board": "AQA",
    "level": "AS",
    "major_area": "Probability",
    "topic": "Conditional Probability",
    "subtopic": [
        "Sampling Without Replacement",
        "Complementary Probability",
        "Sequential Events"
    ],
    "img": false,
    "question": "A committee consists of $12$ members: $5$ teachers, $4$ parents, and $3$ school governors.<br><br>Two different members are chosen at random without replacement.<br><br><strong>(a)</strong> Find the probability that both selected members are teachers.<br><br><strong>(b)</strong> Find the probability that at least one selected member is a governor.<br><br><strong>(c)</strong> Find the probability that the second member chosen is a parent, given that the first member chosen was not a parent.",
    "steps": [
        "<strong>(a) Probability Both Are Teachers:</strong><br><br>For selection without replacement from $12$ members:\\begin{aligned} \\text{P}(T_1 \\cap T_2) &= \\dfrac{5}{12} \\times \\dfrac{4}{11} \\cr &= \\dfrac{20}{132} \\cr &= \\dfrac{5}{33} \\end{aligned}",
        "<strong>(b) Probability of at Least One Governor:</strong><br><br>There are $12 - 3 = 9$ non-governors.<br><br>Apply complementary probability:\\begin{aligned}& \\text{P}(\\text{At least 1 } G) \\cr &\\quad = 1 - \\text{P}(\\text{No } G) \\cr &\\quad = 1 - \\left(\\dfrac{9}{12} \\times \\dfrac{8}{11}\\right) \\cr &\\quad = 1 - \\dfrac{72}{132} \\cr &\\quad = 1 - \\dfrac{6}{11} \\cr &\\quad = \\dfrac{5}{11} \\end{aligned}",
        "<strong>(c) Conditional Probability for the Second Member:</strong><br><br>Given that the first person chosen was not a parent, the committee now contains $11$ members remaining.<br><br>Because the first selection was not a parent, all $4$ parents remain available in the pool.<br><br>Therefore, the conditional probability is:\\begin{aligned} \\text{P}(P_2 \\mid P_1') &= \\dfrac{4}{11} \\end{aligned}",
        "Final Answer: (a) $\\dfrac{5}{33}$, (b) $\\dfrac{5}{11}$, (c) $\\dfrac{4}{11}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $\\dfrac{25}{144}$, (b) $\\dfrac{5}{11}$, (c) $\\dfrac{4}{11}$",
            "feedback": "In part (a), $\\dfrac{25}{144} = \\left(\\dfrac{5}{12}\\right)^2$ assumes sampling with replacement. When two different members are chosen, the denominator decreases: $\\dfrac{5}{12} \\times \\dfrac{4}{11} = \\dfrac{5}{33}$."
        },
        {
            "ans": "(a) $\\dfrac{5}{33}$, (b) $\\dfrac{6}{11}$, (c) $\\dfrac{4}{11}$",
            "feedback": "In part (b), $\\dfrac{6}{11}$ is the probability of selecting no governors. For at least one governor, subtract this from $1$, giving $1 - \\dfrac{6}{11} = \\dfrac{5}{11}$."
        },
        {
            "ans": "(a) $\\dfrac{5}{33}$, (b) $\\dfrac{5}{11}$, (c) $\\dfrac{1}{3}$",
            "feedback": "In part (c), $\\dfrac{4}{12} = \\dfrac{1}{3}$ uses the original pool of $12$ members. After one member is chosen, only $11$ members remain, giving $\\dfrac{4}{11}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Shortcut for Updated Pools",
        "content": "Do not overcomplicate conditional questions like part (c) with algebraic formulas. Simply update the physical contents of the bag or room: if one non-parent leaves, there are now $11$ people left and all $4$ parents remain, making the probability $\\dfrac{4}{11}$ immediately."
    }
},
{
    "id": "050026",
    "group_id": "050026",
    "branch": "Statistics",
    "board": "AQA",
    "level": "A",
    "major_area": "Statistical Hypothesis Testing",
    "topic": "Correlation Hypothesis Testing",
    "subtopic": [
        "Product Moment Correlation",
        "One-Tailed Test",
        "Critical Value Comparison"
    ],
    "img": false,
    "question": "A marine biologist investigates whether higher sea surface temperatures lead to higher coral growth rates. She measures mean summer sea surface temperature, $T\\text{ }^\\circ\\text{C}$, and annual skeletal growth, $G\\text{ mm}$, for a random sample of $10$ colonies.<br><br>The sample correlation coefficient is $r = 0.582$.<br><br>Critical values for $n = 10$ are:<table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:4px; border:1px solid #ccc;'>1-tail</th><th style='padding:4px; border:1px solid #ccc;'>$5\\%$</th><th style='padding:4px; border:1px solid #ccc;'>$2.5\\%$</th><th style='padding:4px; border:1px solid #ccc;'>$1\\%$</th></tr><tr style='border-bottom:2px solid #333;'><th style='padding:4px; border:1px solid #ccc;'>2-tail</th><th style='padding:4px; border:1px solid #ccc;'>$10\\%$</th><th style='padding:4px; border:1px solid #ccc;'>$5\\%$</th><th style='padding:4px; border:1px solid #ccc;'>$2\\%$</th></tr></thead><tbody><tr><td style='padding:4px; border:1px solid #ccc;'>$r_{\\text{crit}}$</td><td style='padding:4px; border:1px solid #ccc;'>$0.5494$</td><td style='padding:4px; border:1px solid #ccc;'>$0.6319$</td><td style='padding:4px; border:1px solid #ccc;'>$0.7155$</td></tr></tbody></table>Determine the conclusion of the test at the $5\\%$ significance level.",
    "steps": [
        "<strong>Stating the Hypotheses:</strong><br><br>Let $\\rho$ represent the population correlation coefficient between temperature and growth rate.<br><br>The claim specifies that higher temperatures lead to higher growth rates, requiring a one-tailed test:\\begin{aligned} H_0&: \\rho = 0 \\cr H_1&: \\rho > 0 \\end{aligned}",
        "<strong>Identifying the Critical Value:</strong><br><br>For a sample size of $n = 10$ at the $5\\%$ level for a one-tailed test, read the critical value directly from the table:\\begin{aligned} r_{\\text{crit}} = 0.5494 \\end{aligned}The critical region is:\\begin{aligned} r > 0.5494 \\end{aligned}",
        "<strong>Comparing and Concluding in Context:</strong><br><br>The sample correlation coefficient is $r = 0.582$.<br><br>Compare $r$ with the critical threshold:\\begin{aligned} 0.582 > 0.5494 \\end{aligned}Since $r$ lies inside the critical region, reject $H_0$.<br><br>There is sufficient evidence at the $5\\%$ significance level to support the claim that higher sea temperatures are associated with higher coral growth rates.",
        "Final Answer: Reject $H_0$ as $0.582 > 0.5494$; significant evidence of positive correlation"
    ],
    "pi_options": [
        {
            "ans": "Do not reject $H_0$ as $0.582 < 0.6319$; insufficient evidence of positive correlation",
            "feedback": "Using $0.6319$ compares the test statistic against the two-tailed $5\\%$ threshold (or one-tailed $2.5\\%$) rather than the one-tailed $5\\%$ threshold ($0.5494$)."
        },
        {
            "ans": "Reject $H_0$ as $0.582 > 0.5494$; proves that warmer water causes corals to grow faster",
            "feedback": "Correlation does not imply direct causation. A hypothesis test establishes statistical association, not absolute biological proof of causation."
        },
        {
            "ans": "Do not reject $H_0$ as $0.582 < 0.7155$; insufficient evidence of positive correlation",
            "feedback": "The value $0.7155$ corresponds to the $1\\%$ significance level. The question explicitly specifies testing at the $5\\%$ significance level."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Greek Letters for Population Hypotheses",
        "content": "Always state hypotheses for correlation tests using the Greek letter $\\rho$ (rho), representing the population parameter: $H_0: \\rho = 0$. Writing $H_0: r = 0$ will immediately lose marks on exam scripts, because $r$ represents the known sample statistic."
    }
},
{
    "id": "050027",
    "group_id": "050026",
    "branch": "Statistics",
    "board": "AQA",
    "level": "A",
    "major_area": "Statistical Hypothesis Testing",
    "topic": "Correlation Hypothesis Testing",
    "subtopic": [
        "Two-Tailed Test",
        "Negative Correlation",
        "Critical Regions"
    ],
    "img": false,
    "question": "An engineer tests $12$ industrial pumps to investigate whether there is an association between age, $t$ years, and efficiency, $E\\%$.<br><br>The sample correlation coefficient is $r = -0.528$.<br><br>Critical values for $n = 12$ are:<table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:4px; border:1px solid #ccc;'>1-tail</th><th style='padding:4px; border:1px solid #ccc;'>$5\\%$</th><th style='padding:4px; border:1px solid #ccc;'>$2.5\\%$</th><th style='padding:4px; border:1px solid #ccc;'>$1\\%$</th></tr><tr style='border-bottom:2px solid #333;'><th style='padding:4px; border:1px solid #ccc;'>2-tail</th><th style='padding:4px; border:1px solid #ccc;'>$10\\%$</th><th style='padding:4px; border:1px solid #ccc;'>$5\\%$</th><th style='padding:4px; border:1px solid #ccc;'>$2\\%$</th></tr></thead><tbody><tr><td style='padding:4px; border:1px solid #ccc;'>$r_{\\text{crit}}$</td><td style='padding:4px; border:1px solid #ccc;'>$0.4973$</td><td style='padding:4px; border:1px solid #ccc;'>$0.5760$</td><td style='padding:4px; border:1px solid #ccc;'>$0.6581$</td></tr></tbody></table><strong>(a)</strong> State hypotheses to test for an association at the $5\\%$ significance level.<br><br><strong>(b)</strong> State the critical region.<br><br><strong>(c)</strong> State the conclusion of the test in context.",
    "steps": [
        "<strong>(a) Stating the Hypotheses:</strong><br><br>Testing for *'an association'* without specifying direction requires a two-tailed test:\\begin{aligned} H_0&: \\rho = 0 \\cr H_1&: \\rho \\neq 0 \\end{aligned}where $\\rho$ is the population correlation coefficient between pump age and efficiency.",
        "<strong>(b) Identifying the Critical Region:</strong><br><br>For $n = 12$ and a two-tailed test at the $5\\%$ level, the critical value from the table is $0.5760$.<br><br>Because the test is two-tailed, the critical region covers both tails:\\begin{aligned} r &> 0.5760 \\cr r &< -0.5760 \\end{aligned}This can also be expressed as $|r| > 0.5760$.",
        "<strong>(c) Comparing and Concluding in Context:</strong><br><br>Compare the sample value $r = -0.528$ with the lower critical boundary:\\begin{aligned} -0.528 > -0.5760 \\end{aligned}Because $-0.528$ does not fall into the critical region, do not reject $H_0$.<br><br>There is insufficient evidence at the $5\\%$ significance level to suggest an association between the age and efficiency of the industrial pumps.",
        "Final Answer: (a) $H_0: \\rho = 0, H_1: \\rho \\neq 0$, (b) $r > 0.5760$ or $r < -0.5760$, (c) Do not reject $H_0$; insufficient evidence of an association"
    ],
    "pi_options": [
        {
            "ans": "(a) $H_0: \\rho = 0, H_1: \\rho < 0$, (b) $r < -0.4973$, (c) Reject $H_0$; significant evidence that older pumps have lower efficiency",
            "feedback": "The question asks to test for *'an association'*, which requires a two-tailed test ($H_1: \\rho \\neq 0$), not a one-tailed test. Setting up a one-tailed test erroneously leads to rejecting $H_0$."
        },
        {
            "ans": "(a) $H_0: \\rho = 0, H_1: \\rho \\neq 0$, (b) $r > 0.5760$ or $r < -0.5760$, (c) Reject $H_0$ as $|-0.528| > 0.4973$; significant evidence of an association",
            "feedback": "Comparing against $0.4973$ uses the two-tailed $10\\%$ critical value. For a two-tailed test at $5\\%$, the critical value is $0.5760$."
        },
        {
            "ans": "(a) $H_0: \\rho = 0, H_1: \\rho \\neq 0$, (b) $r > 0.5760$, (c) Do not reject $H_0$; insufficient evidence of an association",
            "feedback": "In part (b), a two-tailed test must include both positive and negative tails ($r > 0.5760$ or $r < -0.5760$). Omitting the negative tail prevents testing negative sample values."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Handling Negative Critical Regions",
        "content": "Formula booklets and exam tables only display positive critical values. When testing a negative sample correlation $r$, remember to insert the negative sign: for a lower tail, the critical region is $r < -r_{\\text{crit}}$. Remember that $-0.528$ is *greater* (less extreme) than $-0.5760$."
    }
},
{
    "id": "050028",
    "group_id": "050026",
    "branch": "Statistics",
    "board": "AQA",
    "level": "A",
    "major_area": "Statistical Hypothesis Testing",
    "topic": "Correlation Hypothesis Testing",
    "subtopic": [
        "Calculation of PMCC",
        "Summary Statistics",
        "One-Tailed Test"
    ],
    "img": false,
    "question": "A researcher records revision time, $x$ hours, and exam mark, $y\\%$, for $8$ students. Summary statistics are:$$S_{xx} = 128.5 \\qquad S_{yy} = 312.0 \\qquad S_{xy} = 168.4$$Critical values for $n = 8$ are:<table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:4px; border:1px solid #ccc;'>1-tail</th><th style='padding:4px; border:1px solid #ccc;'>$5\\%$</th><th style='padding:4px; border:1px solid #ccc;'>$2.5\\%$</th><th style='padding:4px; border:1px solid #ccc;'>$1\\%$</th></tr><tr style='border-bottom:2px solid #333;'><th style='padding:4px; border:1px solid #ccc;'>2-tail</th><th style='padding:4px; border:1px solid #ccc;'>$10\\%$</th><th style='padding:4px; border:1px solid #ccc;'>$5\\%$</th><th style='padding:4px; border:1px solid #ccc;'>$2\\%$</th></tr></thead><tbody><tr><td style='padding:4px; border:1px solid #ccc;'>$r_{\\text{crit}}$</td><td style='padding:4px; border:1px solid #ccc;'>$0.6215$</td><td style='padding:4px; border:1px solid #ccc;'>$0.7067$</td><td style='padding:4px; border:1px solid #ccc;'>$0.7887$</td></tr></tbody></table><strong>(a)</strong> Calculate the product moment correlation coefficient, $r$.<br><br><strong>(b)</strong> Test at the $2.5\\%$ level whether increased revision improves marks.",
    "steps": [
        "<strong>(a) Calculating the Correlation Coefficient $r$:</strong><br><br>Apply the formula for PMCC using summary statistics:\\begin{aligned} r &= \\dfrac{S_{xy}}{\\sqrt{S_{xx} S_{yy}}} \\cr &= \\dfrac{168.4}{\\sqrt{128.5 \\times 312.0}} \\cr &= \\dfrac{168.4}{\\sqrt{40092}} \\cr &= \\dfrac{168.4}{200.23} \\cr &\\approx 0.8410 \\cr &\\approx 0.841 \\end{aligned}",
        "<strong>(b) Conducting the Hypothesis Test:</strong><br><br>State the one-tailed hypotheses:\\begin{aligned} H_0&: \\rho = 0 \\cr H_1&: \\rho > 0 \\end{aligned}From the table for $n = 8$, the critical value for a one-tailed test at the $2.5\\%$ level is $0.7067$.<br><br>Compare the sample coefficient with the threshold:\\begin{aligned} 0.841 > 0.7067 \\end{aligned}Since $r$ is greater than the critical value, reject $H_0$.<br><br>There is significant evidence at the $2.5\\%$ level that increased revision time is associated with improved examination marks.",
        "Final Answer: (a) $r = 0.841$, (b) Reject $H_0$ as $0.841 > 0.7067$; significant evidence that revision improves marks"
    ],
    "pi_options": [
        {
            "ans": "(a) $r = 0.841$, (b) Do not reject $H_0$ as $0.841 > 0.7067$; significant evidence that revision improves marks",
            "feedback": "When the test statistic ($0.841$) exceeds the critical value ($0.7067$), it falls into the critical region, which means $H_0$ must be rejected, not retained."
        },
        {
            "ans": "(a) $r = 0.707$, (b) Reject $H_0$ as $0.707 > 0.6215$; significant evidence that revision improves marks",
            "feedback": "In part (a), dividing $168.4$ by $\\dfrac{128.5 + 312.0}{2}$ is an error. The denominator requires the geometric mean $\\sqrt{S_{xx} S_{yy}}$, giving $r \\approx 0.841$."
        },
        {
            "ans": "(a) $r = 0.841$, (b) Do not reject $H_0$ as $0.841 < 0.8872$; insufficient evidence that revision improves marks",
            "feedback": "In part (b), the critical value for a one-tailed test at $2.5\\%$ is $0.7067$, not $0.8872$. Because $0.841 > 0.7067$, $H_0$ is rejected."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Full Marks in Hypothesis Conclusions",
        "content": "To score full marks on hypothesis testing questions, your conclusion must include: (1) an explicit mathematical comparison ($0.841 > 0.7067$), (2) a clear decision regarding $H_0$ (*'reject $H_0$'*), and (3) an interpretation in context (*'increased revision improves marks'*) stating the significance level."
    }
},
{
    "id": "050029",
    "group_id": "050026",
    "branch": "Statistics",
    "board": "AQA",
    "level": "A",
    "major_area": "Statistical Hypothesis Testing",
    "topic": "Correlation Hypothesis Testing",
    "subtopic": [
        "Invariance Under Coding",
        "Bivariate Normality",
        "Hypothesis Testing"
    ],
    "img": false,
    "question": "A meteorologist measures daily maximum temperature, $x\\text{ }^\\circ\\text{C}$, and sunshine, $y\\text{ hours}$, for $15$ days. Data are coded using:$$u = \\dfrac{x - 10}{2} \\qquad v = 10y - 25$$The correlation for the coded data is $r_{uv} = 0.468$.<br><br>Critical values for $n = 15$ are:<table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:4px; border:1px solid #ccc;'>1-tail</th><th style='padding:4px; border:1px solid #ccc;'>$5\\%$</th><th style='padding:4px; border:1px solid #ccc;'>$2.5\\%$</th><th style='padding:4px; border:1px solid #ccc;'>$1\\%$</th></tr><tr style='border-bottom:2px solid #333;'><th style='padding:4px; border:1px solid #ccc;'>2-tail</th><th style='padding:4px; border:1px solid #ccc;'>$10\\%$</th><th style='padding:4px; border:1px solid #ccc;'>$5\\%$</th><th style='padding:4px; border:1px solid #ccc;'>$2\\%$</th></tr></thead><tbody><tr><td style='padding:4px; border:1px solid #ccc;'>$r_{\\text{crit}}$</td><td style='padding:4px; border:1px solid #ccc;'>$0.4409$</td><td style='padding:4px; border:1px solid #ccc;'>$0.5140$</td><td style='padding:4px; border:1px solid #ccc;'>$0.5923$</td></tr></tbody></table><strong>(a)</strong> State the value of $r_{xy}$, giving a reason.<br><br><strong>(b)</strong> Test at the $5\\%$ level for positive correlation.<br><br><strong>(c)</strong> State the distributional assumption required for this test.",
    "steps": [
        "<strong>(a) Finding $r_{xy}$ Using Invariance Under Linear Coding:</strong><br><br>The product moment correlation coefficient measures linear association and is completely invariant under linear transformations of the form $u = ax + b$ and $v = cy + d$ (provided $a > 0$ and $c > 0$).<br><br>Therefore:\\begin{aligned} r_{xy} = r_{uv} = 0.468 \\end{aligned}",
        "<strong>(b) Conducting the Hypothesis Test:</strong><br><br>State the one-tailed hypotheses:\\begin{aligned} H_0&: \\rho = 0 \\cr H_1&: \\rho > 0 \\end{aligned}From the table for $n = 15$, the critical value for a one-tailed test at the $5\\%$ level is $0.4409$.<br><br>Compare the sample coefficient with the critical threshold:\\begin{aligned} 0.468 > 0.4409 \\end{aligned}Since $0.468 > 0.4409$, reject $H_0$.<br><br>There is significant evidence at the $5\\%$ level to support the claim of a positive correlation between maximum temperature and sunshine.",
        "<strong>(c) Stating the Required Distributional Assumption:</strong><br><br>For hypothesis testing of the product moment correlation coefficient to be valid, the two variables $(X, Y)$ must follow a <strong>bivariate normal distribution</strong>.",
        "Final Answer: (a) $r_{xy} = 0.468$ as PMCC is invariant under linear coding, (b) Reject $H_0$ as $0.468 > 0.4409$, (c) Variables must follow a bivariate normal distribution"
    ],
    "pi_options": [
        {
            "ans": "(a) $r_{xy} = 0.094$ as PMCC is scaled by coding factors, (b) Reject $H_0$ as $0.468 > 0.4409$, (c) Variables must follow a bivariate normal distribution",
            "feedback": "In part (a), correlation is scale-invariant. You do not divide or multiply by the coding coefficients: $r_{xy}$ remains exactly equal to $r_{uv} = 0.468$."
        },
        {
            "ans": "(a) $r_{xy} = 0.468$ as PMCC is invariant under linear coding, (b) Do not reject $H_0$ as $0.468 < 0.5140$, (c) Variables must follow a bivariate normal distribution",
            "feedback": "In part (b), comparing against $0.5140$ applies a $2.5\\%$ one-tailed test (or $5\\%$ two-tailed). For a one-tailed test at $5\\%$, the critical value is $0.4409$."
        },
        {
            "ans": "(a) $r_{xy} = 0.468$ as PMCC is invariant under linear coding, (b) Reject $H_0$ as $0.468 > 0.4409$, (c) Sample size must exceed $30$",
            "feedback": "In part (c), sample size $n > 30$ is not the underlying assumption. The PMCC test strictly requires the population to follow a bivariate normal distribution."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Bivariate Normality",
        "content": "Whenever an exam asks *'what assumption is needed to test $\\rho = 0$'*, the required response is *bivariate normality*. Both variables must be normally distributed, and their joint distribution must form a 3D bell shape whose scatter plot produces an elliptical contour."
    }
},
{
    "id": "050030",
    "group_id": "050026",
    "branch": "Statistics",
    "board": "AQA",
    "level": "A",
    "major_area": "Statistical Hypothesis Testing",
    "topic": "Correlation Hypothesis Testing",
    "subtopic": [
        "Negative Correlation",
        "Impact of Outliers",
        "Evaluation of Evidence"
    ],
    "img": false,
    "question": "An economist investigates unemployment rate, $u\\%$, and wage growth, $w\\%$, across $10$ regions. The sample correlation coefficient is $r = -0.584$.<br><br>Critical values for $n = 10$ are:<table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><thead><tr style='border-bottom:2px solid #333;'><th style='padding:4px; border:1px solid #ccc;'>1-tail</th><th style='padding:4px; border:1px solid #ccc;'>$5\\%$</th><th style='padding:4px; border:1px solid #ccc;'>$2.5\\%$</th><th style='padding:4px; border:1px solid #ccc;'>$1\\%$</th></tr><tr style='border-bottom:2px solid #333;'><th style='padding:4px; border:1px solid #ccc;'>2-tail</th><th style='padding:4px; border:1px solid #ccc;'>$10\\%$</th><th style='padding:4px; border:1px solid #ccc;'>$5\\%$</th><th style='padding:4px; border:1px solid #ccc;'>$2\\%$</th></tr></thead><tbody><tr><td style='padding:4px; border:1px solid #ccc;'>$r_{\\text{crit}}$</td><td style='padding:4px; border:1px solid #ccc;'>$0.5494$</td><td style='padding:4px; border:1px solid #ccc;'>$0.6319$</td><td style='padding:4px; border:1px solid #ccc;'>$0.7155$</td></tr></tbody></table><strong>(a)</strong> Test at the $5\\%$ level for negative correlation.<br><br><strong>(b)</strong> Removing an extreme outlier changes $r$ to $-0.210$ for the remaining $9$ regions (critical value $-0.5822$). Explain the effect on the conclusion.",
    "steps": [
        "<strong>(a) Conducting the One-Tailed Negative Test:</strong><br><br>State the hypotheses for a negative correlation:\\begin{aligned} H_0&: \\rho = 0 \\cr H_1&: \\rho < 0 \\end{aligned}For $n = 10$ at the $5\\%$ level (one-tailed), the lower critical value is $-0.5494$.<br><br>Compare the sample value $r = -0.584$ with the critical value:\\begin{aligned} -0.584 < -0.5494 \\end{aligned}Because $-0.584$ is in the critical region, reject $H_0$.<br><br>There is significant evidence at the $5\\%$ level of a negative correlation between unemployment rate and wage growth.",
        "<strong>(b) Evaluating the Effect of Removing the Outlier:</strong><br><br>When the single extreme point is removed, the correlation coefficient for $n = 9$ weakens to $r = -0.210$.<br><br>Compare this new value with the $n = 9$ critical threshold ($-0.5822$):\\begin{aligned} -0.210 > -0.5822 \\end{aligned}Because $-0.210$ lies outside the critical region, $H_0$ would no longer be rejected.<br><br>This demonstrates that the original conclusion of a significant negative correlation was entirely dependent on a single outlier, rather than a genuine trend across the regions.",
        "Final Answer: (a) Reject $H_0$ as $-0.584 < -0.5494$; significant negative correlation, (b) Conclusion reverses to do not reject $H_0$ as $-0.210 > -0.5822$, showing the result depended entirely on the outlier"
    ],
    "pi_options": [
        {
            "ans": "(a) Do not reject $H_0$ as $-0.584 > -0.5494$; insufficient evidence, (b) Conclusion reverses to do not reject $H_0$ as $-0.210 > -0.5822$, showing the result depended entirely on the outlier",
            "feedback": "In part (a), $-0.584$ is more negative (smaller) than $-0.5494$, meaning it falls into the critical region and $H_0$ is rejected."
        },
        {
            "ans": "(a) Reject $H_0$ as $-0.584 < -0.5494$; significant negative correlation, (b) The conclusion remains unchanged because removing data points is invalid",
            "feedback": "In part (b), removing an extreme outlier is standard diagnostic practice in statistics. Since $-0.210 > -0.5822$, the conclusion reverses to retaining $H_0$."
        },
        {
            "ans": "(a) Reject $H_0$ as $-0.584 < -0.5494$; significant negative correlation, (b) The evidence for negative correlation becomes stronger without the outlier",
            "feedback": "In part (b), $r$ changes from $-0.584$ to $-0.210$, which represents a substantial weakening towards zero, completely eliminating statistical significance."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Fragility of PMCC to Outliers",
        "content": "The product moment correlation coefficient is not a resistant statistic. A single extreme leverage point can produce a statistically significant correlation where none exists in the rest of the sample. Always inspect a scatter plot alongside $r$."
    }
}
];