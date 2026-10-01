window.ALEVEL_QUESTIONS = [
{
    "id": "050001",
    "group_id": "050001",
    "branch": "Statistics",
    "board": "AQA",
    "level": "A",
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
    "level": "A",
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
    "level": "A",
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
        "<strong>(a) Calculating the Total Frequency:</strong><br><br>In a histogram, frequency is given by the area of each bar:\\begin{aligned} \\text{Frequency} &= \\text{Class Width} \\times \\text{Frequency Density} \\end{aligned}Calculate the frequency for each of the four intervals:<br><br>For $10 \\le m < 20$:\\begin{aligned} f_1 &= 10 \\times 1.4 \\cr &= 14 \\end{aligned}For $20 \\le m < 25$:\\begin{aligned} f_2 &= 5 \\times 3.6 \\cr &= 18 \\end{aligned}For $25 \\le m < 35$:\\begin{aligned} f_3 &= 10 \\times 2.4 \\cr &= 24 \\end{aligned}For $35 \\le m \\le 50$:\\begin{aligned} f_4 &= 15 \\times 0.8 \\cr &= 12 \\end{aligned}Summing the frequencies gives the total number of parcels:\\begin{aligned} \\text{Total} &= 14 + 18 + 24 + 12 \\cr &= 68 \\end{aligned}",
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
    "level": "A",
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
    "level": "A",
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
}
];