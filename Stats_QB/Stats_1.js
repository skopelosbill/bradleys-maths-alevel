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
        "content": "Whenever an exam question asks for a disadvantage of systematic sampling in a manufacturing or sequential context, the gold-standard answer is *periodicity*. If the sampling interval matches a repeating physical cycle in the machinery, the sample will be completely unrepresentative."
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
        "content": "Exam questions asking *'how to select the sample'* require three specific mark-scheme steps: (1) create a numbered list (the sampling frame), (2) generate random numbers within that range, and (3) explicitly state that duplicate numbers must be discarded."
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
        "content": "Students frequently define a sampling frame as *'the population'* or *'the area where you take data'*. It is neither. A sampling frame is strictly a physical or digital list of individually identifiable sampling units (e.g. an electoral register, a patient database, or a school roll). If you cannot produce a list, a sampling frame does not exist."
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
        "content": "In an exam, remember that quota sampling does not suffer from *'non-response bias'* in the conventional survey sense (if someone declines, the interviewer simply asks the next passer-by). Instead, its primary weaknesses are *interviewer selection bias* and *systematic exclusion* of demographics unavailable during the survey window."
    }
}
];