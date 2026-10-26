window.ALEVEL_QUESTIONS = [
{
    "id": "050251",
    "group_id": "050251",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Data Presentation and Interpretation",
    "topic": "Measures of Location and Spread",
    "subtopic": [
        "Mean and Standard Deviation",
        "Outlier Boundaries",
        "Histograms"
    ],
    "img": false,
    "question": "<strong>(a)</strong> The daily one-way commuting distances, in kilometres to the nearest kilometre, for $11$ staff members at an engineering firm are recorded below:$$14, \\quad 18, \\quad 20, \\quad 24,$$ $$ 27, \\quad 28, \\quad 30, \\quad 32,$$ $$34, \\quad 38, \\quad 65$$<strong>(i)</strong> Calculate the mean and standard deviation of these commuting distances.<br><br>Outliers are defined to be values greater than $Q_3 + 1.5 \\times (Q_3 - Q_1)$ or less than $Q_1 - 1.5 \\times (Q_3 - Q_1)$.<br><br>&emsp;<strong>(ii)</strong> Show that $65\\text{ km}$ is an outlier.<br><br>A subsequent audit revealed that the distance recorded as $65\\text{ km}$ was entered erroneously and should in fact have been $56\\text{ km}$. Without performing any further numerical calculations, state what effect, if any, this correction will have on:<br>&emsp;<strong>(iii)</strong> the standard deviation,<br>&emsp;<strong>(iv)</strong> the interquartile range.<br><br><strong>(b)</strong> The histogram below illustrates the daily commuting distances of a random sample of $188$ office workers from a neighbouring business park:<img src='images/Statistics_SVGs/050251.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'><table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><tr style='border-bottom:1px solid #ccc;'><th style='padding:6px; text-align:left;'>Distance ($d$, km)</th><th style='padding:6px;'>Workers</th></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>$0 \\le d < 10$</td><td style='padding:6px;'>30</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>$10 \\le d < 20$</td><td style='padding:6px;'>50</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>$20 \\le d < 35$</td><td style='padding:6px;'>60</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>$35 \\le d < 50$</td><td style='padding:6px;'></td></tr><tr><td style='padding:6px; text-align:left;'>$50 \\le d < 80$</td><td style='padding:6px;'>18</td></tr></table>&emsp;<strong>(i)</strong> Use the histogram to complete the entry for the class $35 \\le d < 50$ in the table.<br>&emsp;<strong>(ii)</strong> Estimate the probability that an office worker chosen at random from this sample has a daily commuting distance of more than $25\\text{ km}$.",
    "steps": [
        "<strong>(a)(i) Mean and standard deviation:</strong><br><br>Sum of the $n = 11$ values:\\begin{aligned} \\sum x &= 330 \\cr \\bar{x} &= \\dfrac{330}{11} \\cr &= 30\\text{ km} \\end{aligned}Sum of squares:\\begin{aligned} \\sum x^2 &= 11758 \\end{aligned}Calculating the population standard deviation:\\begin{aligned} \\sigma &= \\sqrt{\\dfrac{11758}{11} - 30^2} \\cr &= \\sqrt{1068.91 - 900} \\cr &= \\sqrt{168.91} \\cr &\\approx 13.0\\text{ km} \\end{aligned}(Sample standard deviation $s = 13.6\\text{ km}$).",
        "<strong>(a)(ii) Showing $65\\text{ km}$ is an outlier:</strong><br><br>For $n = 11$ ordered values:<br>• $Q_1 = 3^{\\text{rd}} \\text{ value} = 20\\text{ km}$<br>• $Q_3 = 9^{\\text{th}} \\text{ value} = 34\\text{ km}$<br><br>The interquartile range is:\\begin{aligned} \\text{IQR} &= 34 - 20 \\cr &= 14\\text{ km} \\end{aligned}The upper outlier threshold is:\\begin{aligned} Q_3 + 1.5(\\text{IQR}) &= 34 + 1.5(14) \\cr &= 34 + 21 \\cr &= 55\\text{ km} \\end{aligned}Since $65 > 55$, $65\\text{ km}$ is an outlier.",
        "<strong>(a)(iii) Effect on standard deviation:</strong><br><br>The corrected value $56\\text{ km}$ is closer to the mean ($30\\text{ km}$) than $65\\text{ km}$, so the dispersion decreases. Therefore, the standard deviation will **decrease**.",
        "<strong>(a)(iv) Effect on interquartile range:</strong><br><br>Both $65$ and $56$ lie above $Q_3 = 34$, so the rank positions of the lower quartile ($3^{\\text{rd}}$) and upper quartile ($9^{\\text{th}}$) remain unchanged. Therefore, the interquartile range has **no effect (remains unchanged)**.",
        "<strong>(b)(i) Frequency for $35 \\le d < 50$:</strong><br><br>From the histogram, the bar height (frequency density) on $[35, 50]$ is $2.0$:\\begin{aligned} \\text{Frequency} &= \\text{width} \\times \\text{FD} \\cr &= (50 - 35) \\times 2.0 \\cr &= 15 \\times 2.0 \\cr &= 30 \\end{aligned}(Alternatively, $188 - (30 + 50 + 60 + 18) = 30$).",
        "<strong>(b)(ii) Probability of distance $> 25\\text{ km}$:</strong><br><br>For the class $20 \\le d < 35$, assuming a uniform distribution:\\begin{aligned} \\text{Workers } > 25 &= \\dfrac{35 - 25}{35 - 20} \\times 60 \\cr &= \\dfrac{10}{15} \\times 60 \\cr &= 40 \\end{aligned}Adding the workers in all subsequent classes:\\begin{aligned} \\text{Total } > 25 &= 40 + 30 + 18 \\cr &= 88 \\end{aligned}The probability is:\\begin{aligned} P(d > 25) &= \\dfrac{88}{188} \\cr &= \\dfrac{22}{47} \\quad (\\approx 0.468) \\end{aligned}",
        "Final Answer: (a)(i) $30\\text{ km}$ and $13.0\\text{ km}$, (ii) $65 > 55$, (iii) Decreases, (iv) Unchanged, (b)(i) $30$, (ii) $\\dfrac{22}{47}$"
    ],
    "pi_options": [
        {
            "ans": "(a)(i) $30\\text{ km}$ and $13.0\\text{ km}$, (ii) $65 > 55$, (iii) Increases, (iv) Unchanged, (b)(i) $30$, (ii) $\\dfrac{22}{47}$",
            "feedback": "In part (a)(iii), moving the largest data value closer to the mean reduces the spread of the data, which decreases the standard deviation rather than increasing it."
        },
        {
            "ans": "(a)(i) $30\\text{ km}$ and $13.0\\text{ km}$, (ii) $65 > 55$, (iii) Decreases, (iv) Decreases, (b)(i) $30$, (ii) $\\dfrac{22}{47}$",
            "feedback": "In part (a)(iv), changing the extreme value from $65$ to $56$ does not alter $Q_1$ or $Q_3$, because both values remain strictly above the $9^{\\text{th}}$ position. The IQR is completely unchanged."
        },
        {
            "ans": "(a)(i) $30\\text{ km}$ and $13.0\\text{ km}$, (ii) $65 > 55$, (iii) Decreases, (iv) Unchanged, (b)(i) $30$, (ii) $\\dfrac{78}{188}$",
            "feedback": "In part (b)(ii), you only included half of the $[20, 35)$ class ($30$ workers) rather than using linear interpolation: $\\dfrac{35 - 25}{15} \\times 60 = 40$ workers."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Robustness of Quartiles",
        "content": "This question tests the fundamental property of quartiles: unlike the mean and standard deviation, the median and IQR are resistant (robust) to changes in extreme values. Altering an outlier from $65$ to $56$ has zero effect on the quartiles as long as its relative rank position does not cross $Q_3$."
    }
},
{
    "id": "050252",
    "group_id": "050251",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Data Presentation and Interpretation",
    "topic": "Measures of Location and Spread",
    "subtopic": [
        "Box Plots",
        "Outlier Calculations",
        "Skewness"
    ],
    "img": false,
    "question": "A telecommunications call centre records the duration of $80$ technical support calls. The distribution of call durations, $t$ minutes, is summarised by the box plot shown below:<img src='images/Statistics_SVGs/050252.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'><strong>(a)</strong> State the interquartile range of the call durations.<br><br><strong>(b)</strong> An outlier is defined as any value that lies more than $1.5 \\times \\text{IQR}$ above the upper quartile or more than $1.5 \\times \\text{IQR}$ below the lower quartile. Show that the value $64\\text{ minutes}$ is an outlier according to this rule.<br><br><strong>(c)</strong> Describe the skewness of the distribution of call durations, giving two distinct justifications based on the box plot.<br><br><strong>(d)</strong> The supervisor discovers that the call recorded as $64\\text{ minutes}$ was actually $44\\text{ minutes}$. Without recalculating, state what effect, if any, this correction will have on:<br>&emsp;<strong>(i)</strong> the median,<br>&emsp;<strong>(ii)</strong> the mean,<br>&emsp;<strong>(iii)</strong> the standard deviation.",
    "steps": [
        "<strong>(a) Finding the interquartile range:</strong><br><br>Reading the quartiles from the box plot:<br>• Lower quartile $Q_1 = 16\\text{ minutes}$<br>• Upper quartile $Q_3 = 34\\text{ minutes}$<br><br>The interquartile range is:\\begin{aligned} \\text{IQR} &= Q_3 - Q_1 \\cr &= 34 - 16 \\cr &= 18\\text{ minutes} \\end{aligned}",
        "<strong>(b) Showing $64$ is an outlier:</strong><br><br>Calculating the upper outlier boundary:\\begin{aligned} Q_3 + 1.5(\\text{IQR}) &= 34 + 1.5(18) \\cr &= 34 + 27 \\cr &= 61\\text{ minutes} \\end{aligned}Since $64 > 61$, the call duration of $64\\text{ minutes}$ is an outlier.",
        "<strong>(c) Describing skewness:</strong><br><br>The distribution exhibits <strong>positive skewness</strong> (skewed to the right).<br><br><strong>Justification 1:</strong> The right-hand whisker and outlier extend considerably further from the box than the left-hand whisker ($64 - 34 = 30$ vs $16 - 8 = 8$).<br><br><strong>Justification 2:</strong> The upper half of the box is wider than the lower half:\\begin{aligned} Q_3 - Q_2 &= 34 - 24 = 10 \\cr Q_2 - Q_1 &= 24 - 16 = 8 \\end{aligned}Since $(Q_3 - Q_2) > (Q_2 - Q_1)$, the data is positively skewed.",
        "<strong>(d) Effect of correcting $64\\text{ min}$ to $44\\text{ min}$:</strong><br><br>• <strong>(i) Median:</strong> <strong>No effect (unchanged)</strong>, because $44$ remains strictly above the median ($24\\text{ min}$), preserving the middle ranking.<br>• <strong>(ii) Mean:</strong> <strong>Decreases</strong>, because the total sum of the values $\\sum t$ is reduced by $20\\text{ minutes}$.<br>• <strong>(iii) Standard deviation:</strong> <strong>Decreases</strong>, because the extreme point moves closer to the mean, reducing overall spread.",
        "Final Answer: (a) $18\\text{ min}$, (b) $64 > 61$, (c) Positive skew, (d)(i) Unchanged, (ii) Decreases, (iii) Decreases"
    ],
    "pi_options": [
        {
            "ans": "(a) $18\\text{ min}$, (b) $64 > 61$, (c) Negative skew, (d)(i) Unchanged, (ii) Decreases, (iii) Decreases",
            "feedback": "In part (c), the longer right whisker and $(Q_3 - Q_2) > (Q_2 - Q_1)$ indicate positive (right) skewness, not negative skewness."
        },
        {
            "ans": "(a) $20\\text{ min}$, (b) $64 > 61$, (c) Positive skew, (d)(i) Unchanged, (ii) Decreases, (iii) Decreases",
            "feedback": "In part (a), you read $Q_1$ as $14$ or $Q_3$ as $36$. From the box plot, $Q_1 = 16$ and $Q_3 = 34$, giving $\\text{IQR} = 18\\text{ minutes}$."
        },
        {
            "ans": "(a) $18\\text{ min}$, (b) $64 > 61$, (c) Positive skew, (d)(i) Decreases, (ii) Decreases, (iii) Decreases",
            "feedback": "In part (d)(i), the median is determined by the central values ($40^{\\text{th}}$ and $41^{\\text{st}}$). Changing a value from $64$ to $44$ leaves both numbers above the median ($24$), so the median is unaffected."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Skewness from a Box Plot",
        "content": "When asked to justify skewness from a box plot, always cite two clear mathematical comparisons: (1) compare the distances $(Q_3 - Q_2)$ versus $(Q_2 - Q_1)$, and (2) compare the lengths of the whiskers. For positive skew, both the upper half of the box and the upper whisker are longer."
    }
},
{
    "id": "050253",
    "group_id": "050251",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Data Presentation and Interpretation",
    "topic": "Measures of Location and Spread",
    "subtopic": [
        "Histograms with Unequal Widths",
        "Linear Interpolation",
        "Percentiles"
    ],
    "img": false,
    "question": "The weights of $53$ parcels processed at an automated distribution depot are illustrated in the histogram below:<img src='images/Statistics_SVGs/050253.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'><strong>(a)</strong> Construct a grouped frequency table for the weights of the $53$ parcels.<br><br><strong>(b)</strong> Use linear interpolation to estimate:<br>&emsp;<strong>(i)</strong> the median parcel weight,<br>&emsp;<strong>(ii)</strong> the $80^{\\text{th}}$ percentile of parcel weights.<br><br><strong>(c)</strong> Estimate the number of parcels in this sample that weigh between $3\\text{ kg}$ and $8\\text{ kg}$.",
    "steps": [
        "<strong>(a) Constructing the frequency table:</strong><br><br>Frequency equals class width multiplied by frequency density:\\begin{aligned} 0 \\le w < 2: &\\quad 2 \\times 4.0 = 8 \\cr 2 \\le w < 5: &\\quad 3 \\times 6.0 = 18 \\cr 5 \\le w < 10: &\\quad 5 \\times 3.0 = 15 \\cr 10 \\le w < 20: &\\quad 10 \\times 1.2 = 12 \\end{aligned}Sum of frequencies: $8 + 18 + 15 + 12 = 53$.",
        "<strong>(b)(i) Linear interpolation for the median:</strong><br><br>The median position is $\\dfrac{53}{2} = 26.5$. Cumulative frequencies are $8, 26, 41, 53$.<br><br>The $26.5^{\\text{th}}$ parcel lies in the class $5 \\le w < 10$:\\begin{aligned} \\text{Median} &= 5 + \\dfrac{26.5 - 26}{15}\\cr & \\qquad \\times (10 - 5) \\cr &= 5 + \\dfrac{0.5}{15} \\times 5 \\cr &= 5 + 0.167 \\cr &\\approx 5.17\\text{ kg} \\end{aligned}",
        "<strong>(b)(ii) Linear interpolation for the $80^{\\text{th}}$ percentile:</strong><br><br>The position is $0.80 \\times 53 = 42.4$. This falls in the class $10 \\le w < 20$:\\begin{aligned} P_{80} &= 10 + \\dfrac{42.4 - 41}{12} \\times (20 - 10) \\cr &= 10 + \\dfrac{1.4}{12} \\times 10 \\cr &= 10 + 1.167 \\cr &\\approx 11.2\\text{ kg} \\end{aligned}",
        "<strong>(c) Number of parcels between $3\\text{ kg}$ and $8\\text{ kg}$:</strong><br><br>• For $3 \\le w < 5$ (width $2$ with $\\text{FD} = 6.0$): $2 \\times 6.0 = 12$<br>• For $5 \\le w < 8$ (width $3$ with $\\text{FD} = 3.0$): $3 \\times 3.0 = 9$<br><br>Total parcels:\\begin{aligned} \\text{Parcels} &= 12 + 9 \\cr &= 21 \\end{aligned}",
        "Final Answer: (b)(i) $5.17\\text{ kg}$, (ii) $11.2\\text{ kg}$, (c) $21$"
    ],
    "pi_options": [
        {
            "ans": "(b)(i) $5.17\\text{ kg}$, (ii) $11.2\\text{ kg}$, (c) $33$",
            "feedback": "In part (c), you summed the entire classes $[2, 5)$ and $[5, 10)$ ($18 + 15 = 33$) without interpolating between $3\\text{ kg}$ and $8\\text{ kg}$."
        },
        {
            "ans": "(b)(i) $4.07\\text{ kg}$, (ii) $11.2\\text{ kg}$, (c) $21$",
            "feedback": "In part (b)(i), you placed the median in the class $[2, 5)$. The cumulative frequency up to $5\\text{ kg}$ is $26$, so the $26.5^{\\text{th}}$ value lies just inside the next class $[5, 10)$."
        },
        {
            "ans": "(b)(i) $5.17\\text{ kg}$, (ii) $8.13\\text{ kg}$, (c) $21$",
            "feedback": "In part (b)(ii), you interpolated in the $[5, 10)$ class instead of $[10, 20)$. The cumulative frequency reaches $41$ at $10\\text{ kg}$, so the $42.4^{\\text{th}}$ value lies in $[10, 20)$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Identifying the Median Class",
        "content": "Take extra care when identifying which class contains the median. Here, the cumulative frequency at the end of the second class is exactly $8 + 18 = 26$. Because the median position is $\\dfrac{53}{2} = 26.5$, it has crossed the boundary into the third class $[5, 10)$."
    }
},
{
    "id": "050254",
    "group_id": "050251",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Data Presentation and Interpretation",
    "topic": "Measures of Location and Spread",
    "subtopic": [
        "Cumulative Frequency Curves",
        "Median and Quartiles",
        "Percentiles"
    ],
    "img": false,
    "question": "A cohort of $120$ candidates sat an entrance examination. The marks attained, $m$, are shown in the cumulative frequency curve below:<img src='images/Statistics_SVGs/050254.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'><strong>(a)</strong> Use the cumulative frequency curve to estimate:<br>&emsp;<strong>(i)</strong> the median mark,<br>&emsp;<strong>(ii)</strong> the interquartile range.<br><br><strong>(b)</strong> The top $15\\%$ of candidates are awarded a Certificate of Distinction. Estimate the minimum mark required to receive a Certificate of Distinction.<br><br><strong>(c)</strong> Candidates who score less than $40$ marks fail the examination. Estimate the percentage of candidates who failed.",
    "steps": [
        "<strong>(a)(i) Estimating the median mark:</strong><br><br>The median corresponds to $\\dfrac{120}{2} = 60^{\\text{th}}$ candidate. Reading across at cumulative frequency $60$ and down to the horizontal axis:\\begin{aligned} \\text{Median} &= 60\\text{ marks} \\end{aligned}",
        "<strong>(a)(ii) Estimating the interquartile range:</strong><br><br>• Lower quartile $Q_1$ corresponds to the $30^{\\text{th}}$ candidate: $Q_1 = 50\\text{ marks}$<br>• Upper quartile $Q_3$ corresponds to the $90^{\\text{th}}$ candidate: $Q_3 = 70\\text{ marks}$<br><br>The interquartile range is:\\begin{aligned} \\text{IQR} &= Q_3 - Q_1 \\cr &= 70 - 50 \\cr &= 20\\text{ marks} \\end{aligned}",
        "<strong>(b) Distinction mark threshold:</strong><br><br>The top $15\\%$ corresponds to $120 \\times 0.15 = 18$ candidates. The rank from the bottom is:\\begin{aligned} 120 - 18 &= 102^{\\text{nd}} \\text{ candidate} \\end{aligned}Reading from the curve at cumulative frequency $102$ gives:\\begin{aligned} \\text{Distinction mark} &= 75\\text{ marks} \\end{aligned}",
        "<strong>(c) Failure percentage:</strong><br><br>Reading up at mark $40$ gives a cumulative frequency of $12$ candidates. The percentage who failed is:\\begin{aligned} \\text{Failure rate} &= \\dfrac{12}{120} \\times 100\\% \\cr &= 10\\% \\end{aligned}",
        "Final Answer: (a)(i) $60$, (ii) $20$, (b) $75$, (c) $10\\%$"
    ],
    "pi_options": [
        {
            "ans": "(a)(i) $60$, (ii) $20$, (b) $85$, (c) $10\\%",
            "feedback": "In part (b), you read at cumulative frequency $18$ from the bottom ($15\\%$) rather than the top $15\\%$ ($102^{\\text{nd}}$ candidate), which corresponds to the mark $75$."
        },
        {
            "ans": "(a)(i) $60$, (ii) $20$, (b) $75$, (c) $12\\%",
            "feedback": "In part (c), $12$ is the number of candidates scoring under $40$. You must divide by the total cohort of $120$ to find the percentage: $\\dfrac{12}{120} \\times 100\\% = 10\\%$."
        },
        {
            "ans": "(a)(i) $60$, (ii) $25$, (b) $75$, (c) $10\\%",
            "feedback": "In part (a)(ii), you misread $Q_1$ or $Q_3$. Reading accurately from the curve gives $Q_1 = 50$ and $Q_3 = 70$, so $\\text{IQR} = 70 - 50 = 20$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Reading from the Top of the Curve",
        "content": "When questions refer to the 'top $15\\%$', remember that cumulative frequency always counts upwards from zero. The top $15\\%$ corresponds to the $85^{\\text{th}}$ percentile ($102^{\\text{nd}}$ candidate out of $120$). Never read at $18$ on the vertical axis for an upper threshold."
    }
},
{
    "id": "050255",
    "group_id": "050251",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Data Presentation and Interpretation",
    "topic": "Measures of Location and Spread",
    "subtopic": [
        "Comparative Box Plots",
        "Skewness",
        "Distribution Comparison"
    ],
    "img": false,
    "question": "A consumer laboratory tests the continuous battery lifetimes, in hours, of two leading brands of rechargeable headlamps: Brand A and Brand B. The results from independent random samples of each brand are shown in the parallel box plots below:<img src='images/Statistics_SVGs/050255.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'><strong>(a)</strong> Compare the battery lifetimes of Brand A and Brand B by referring to:<br>&emsp;<strong>(i)</strong> an appropriate measure of average,<br>&emsp;<strong>(ii)</strong> an appropriate measure of spread.<br><br><strong>(b)</strong> Determine, with mathematical justification from the quartiles, whether the distribution of battery lifetimes for Brand A exhibits skewness.<br><br><strong>(c)</strong> A rescue team requires headlamps that provide consistent and reliable illumination times. State, with a reason, which brand you would recommend to the rescue team.",
    "steps": [
        "<strong>(a)(i) Comparing average lifetimes:</strong><br><br>Brand B has a higher median battery lifetime ($58\\text{ hours}$) than Brand A ($45\\text{ hours}$), indicating that Brand B headlamps typically last longer on average.",
        "<strong>(a)(ii) Comparing spread of lifetimes:</strong><br><br>Brand B has a smaller interquartile range:\\begin{aligned} \\text{IQR}_B &= 64 - 48 = 16\\text{ hours} \\cr \\text{IQR}_A &= 55 - 35 = 20\\text{ hours} \\end{aligned}Brand B also has a smaller overall range ($75 - 30 = 45\\text{ h}$ vs $72 - 20 = 52\\text{ h}$), showing that Brand B has less variation in battery life.",
        "<strong>(b) Assessing skewness of Brand A:</strong><br><br>Examine the distances from the median to the quartiles for Brand A:\\begin{aligned} Q_3 - Q_2 &= 55 - 45 = 10\\text{ hours} \\cr Q_2 - Q_1 &= 45 - 35 = 10\\text{ hours} \\end{aligned}Since $Q_3 - Q_2 = Q_2 - Q_1 = 10$, the central $50\\%$ of the data is completely symmetric. The whiskers ($35 - 20 = 15$ and $72 - 55 = 17$) are also approximately equal, so Brand A shows no skewness (approximately symmetric).",
        "<strong>(c) Recommendation for consistency:</strong><br><br>Recommend <strong>Brand B</strong>. Brand B has a smaller interquartile range ($16\\text{ h}$ compared to $20\\text{ h}$) and smaller range ($45\\text{ h}$ compared to $52\\text{ h}$), providing more consistent and predictable illumination times (as well as a higher average lifetime).",
        "Final Answer: (a)(i) Brand B higher median ($58$ vs $45$), (ii) Brand B lower IQR ($16$ vs $20$), (b) Symmetrical as $Q_3 - Q_2 = Q_2 - Q_1 = 10$, (c) Brand B due to lower spread"
    ],
    "pi_options": [
        {
            "ans": "(a)(i) Brand A higher median ($58$ vs $45$), (ii) Brand B lower IQR ($16$ vs $20$), (b) Symmetrical as $Q_3 - Q_2 = Q_2 - Q_1 = 10$, (c) Brand B due to lower spread",
            "feedback": "In part (a)(i), you reversed the brands. The box plot shows Brand B has the higher median at $58\\text{ hours}$, while Brand A is at $45\\text{ hours}$."
        },
        {
            "ans": "(a)(i) Brand B higher median ($58$ vs $45$), (ii) Brand A lower IQR ($16$ vs $20$), (b) Symmetrical as $Q_3 - Q_2 = Q_2 - Q_1 = 10$, (c) Brand B due to lower spread",
            "feedback": "In part (a)(ii), Brand B has the lower IQR ($64 - 48 = 16\\text{ h}$) compared to Brand A ($55 - 35 = 20\\text{ h}$)."
        },
        {
            "ans": "(a)(i) Brand B higher median ($58$ vs $45$), (ii) Brand B lower IQR ($16$ vs $20$), (b) Positively skewed as mean exceeds median, (c) Brand A due to higher spread",
            "feedback": "In part (b), Brand A is symmetrical because $Q_3 - Q_2 = Q_2 - Q_1 = 10$. In part (c), consistency is measured by smaller spread, so Brand B is recommended."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Pairing Location and Spread",
        "content": "When comparing two distributions from box plots, always structure your answer in two distinct sentences: one comparing the medians (averages) with context and numbers, and one comparing the interquartile ranges (spread/consistency) with context and numbers."
    }
},
{
    "id": "050256",
    "group_id": "050256",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Correlation and Regression",
    "topic": "Product Moment Correlation",
    "subtopic": [
        "Calculation of PMCC",
        "Interpretation of Correlation",
        "Bivariate Summary Statistics"
    ],
    "img": false,
    "question": "An environmental engineer monitors the relationship between daily ambient temperature, $T$ ($^\\circ\\text{C}$), and the daily heating energy consumption, $E$ (kWh), for an office building.<br><br>Measurements taken across $10$ randomly selected winter days are shown in the table below:<table style='width:100%; max-width:260px; margin:15px auto; border-collapse:collapse; text-align:center;'><tr style='border-bottom:1px solid #ccc;'><th style='padding:6px; text-align:left;'>Temp, $T$ ($^\\circ\\text{C}$)</th><th style='padding:6px;'>Energy, $E$ (kWh)</th></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>2.4</td><td style='padding:6px;'>58</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>3.1</td><td style='padding:6px;'>52</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>4.0</td><td style='padding:6px;'>49</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>4.8</td><td style='padding:6px;'>46</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>5.5</td><td style='padding:6px;'>44</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>6.2</td><td style='padding:6px;'>39</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>7.0</td><td style='padding:6px;'>38</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>7.6</td><td style='padding:6px;'>33</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>8.5</td><td style='padding:6px;'>31</td></tr><tr><td style='padding:6px; text-align:left;'>9.4</td><td style='padding:6px;'>26</td></tr></table><strong>(a)</strong> Calculate the product moment correlation coefficient between $T$ and $E$.<br><br><strong>(b)</strong> Comment on the value obtained in part <strong>(a)</strong> in the context of the engineer's investigation.",
    "steps": [
        "<strong>(a) Calculating the summary sums:</strong><br><br>For the sample of size $n = 10$, the summary totals are:\\begin{aligned} \\sum T &= 58.5 \\cr \\sum E &= 416 \\cr \\sum T^2 &= 390.47 \\cr \\sum E^2 &= 18212 \\cr \\sum TE &= 2225.7 \\end{aligned}Calculating the sums of squares and cross-products:\\begin{aligned} S_{TT} &= \\sum T^2 - \\dfrac{(\\sum T)^2}{n} \\cr &= 390.47 - \\dfrac{58.5^2}{10} \\cr &= 390.47 - 342.225 \\cr &= 48.245 \\end{aligned}\\begin{aligned} S_{EE} &= \\sum E^2 - \\dfrac{(\\sum E)^2}{n} \\cr &= 18212 - \\dfrac{416^2}{10} \\cr &= 18212 - 17305.6 \\cr &= 906.4 \\end{aligned}\\begin{aligned} S_{TE} &= \\sum TE - \\dfrac{(\\sum T)(\\sum E)}{n} \\cr &= 2225.7 - \\dfrac{58.5 \\times 416}{10} \\cr &= 2225.7 - 2433.6 \\cr &= -207.9 \\end{aligned}Calculating the correlation coefficient:\\begin{aligned} r &= \\dfrac{S_{TE}}{\\sqrt{S_{TT} S_{EE}}} \\cr &= \\dfrac{-207.9}{\\sqrt{48.245 \\times 906.4}} \\cr &= \\dfrac{-207.9}{\\sqrt{43729.3}} \\cr &= \\dfrac{-207.9}{209.12} \\cr &\\approx -0.994 \\end{aligned}",
        "<strong>(b) Contextual interpretation:</strong><br><br>There is a <strong>very strong negative linear correlation</strong> between ambient temperature and heating energy consumption. As ambient temperature increases, the energy required to heat the building decreases substantially in an almost perfectly linear fashion.",
        "Final Answer: (a) $-0.994$, (b) Very strong negative linear correlation"
    ],
    "pi_options": [
        {
            "ans": "(a) $0.994$, (b) Very strong positive linear correlation",
            "feedback": "In part (a), you dropped the negative sign from $S_{TE} = -207.9$. As temperature rises, heating energy drops, so the correlation coefficient must be negative."
        },
        {
            "ans": "(a) $-0.994$, (b) Weak negative linear correlation",
            "feedback": "In part (b), an $r$ value of $-0.994$ is extremely close to $-1$, indicating very strong linear correlation, not weak correlation."
        },
        {
            "ans": "(a) $-0.852$, (b) Moderate negative linear correlation",
            "feedback": "In part (a), check your cross-product sum $\\sum TE = 2225.7$. An arithmetic error in computing cross products produced an underestimated correlation value."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Checking the Sign of Covariance",
        "content": "Before reaching for your calculator, scan the table. Here, as $T$ increases from $2.4$ to $9.4$, $E$ steadily falls from $58$ to $26$. This means the numerator $S_{TE}$ must be negative, guaranteeing a negative value of $r$."
    }
},
{
    "id": "050257",
    "group_id": "050256",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Correlation and Regression",
    "topic": "Product Moment Correlation",
    "subtopic": [
        "Coded Summary Statistics",
        "Coding Invariance",
        "Contextual Interpretation"
    ],
    "img": false,
    "question": "An agronomist investigates the relationship between nitrogen fertiliser applied, $x\\text{ kg/ha}$, and wheat yield, $y\\text{ tonnes/ha}$, across $8$ experimental plots.<br><br>To simplify the calculations, the data are coded using the linear transformations:$$u = \\dfrac{x - 100}{10}, \\quad v = y - 5$$The summary statistics for the coded data are:\\begin{aligned} \\sum u &= 24 \\cr \\sum v &= 18.4 \\cr \\sum u^2 &= 116 \\cr \\sum v^2 &= 54.8 \\cr \\sum uv &= 76.2 \\end{aligned}<strong>(a)</strong> Calculate the product moment correlation coefficient, $r_{uv}$, between the coded variables $u$ and $v$.<br><br><strong>(b)</strong> State, with a reason, the value of the product moment correlation coefficient, $r_{xy}$, between the original variables $x$ and $y$.<br><br><strong>(c)</strong> Interpret the value of $r_{xy}$ in the context of fertiliser application and crop yield.",
    "steps": [
        "<strong>(a) Calculating $r_{uv}$:</strong><br><br>With $n = 8$, calculate the sums of squares and cross-products for the coded variables:\\begin{aligned} S_{uu} &= \\sum u^2 - \\dfrac{(\\sum u)^2}{n} \\cr &= 116 - \\dfrac{24^2}{8} \\cr &= 116 - 72 \\cr &= 44 \\end{aligned}\\begin{aligned} S_{vv} &= \\sum v^2 - \\dfrac{(\\sum v)^2}{n} \\cr &= 54.8 - \\dfrac{18.4^2}{8} \\cr &= 54.8 - 42.32 \\cr &= 12.48 \\end{aligned}\\begin{aligned} S_{uv} &= \\sum uv - \\dfrac{(\\sum u)(\\sum v)}{n} \\cr &= 76.2 - \\dfrac{24 \\times 18.4}{8} \\cr &= 76.2 - 55.2 \\cr &= 21.0 \\end{aligned}Evaluating the correlation coefficient:\\begin{aligned} r_{uv} &= \\dfrac{S_{uv}}{\\sqrt{S_{uu} S_{vv}}} \\cr &= \\dfrac{21.0}{\\sqrt{44 \\times 12.48}} \\cr &= \\dfrac{21.0}{\\sqrt{549.12}} \\cr &= \\dfrac{21.0}{23.433} \\cr &\\approx 0.896 \\end{aligned}",
        "<strong>(b) Value of $r_{xy}$:</strong><br><br>$r_{xy} = 0.896$.<br><br><strong>Reason:</strong> The product moment correlation coefficient is invariant under linear transformations of the form $u = ax + b$ and $v = cy + d$ provided the scaling factors $a$ and $c$ are both positive ($a = 0.1 > 0$ and $c = 1 > 0$).",
        "<strong>(c) Contextual interpretation:</strong><br><br>There is a strong positive linear correlation between nitrogen fertiliser applied and wheat yield; higher applications of fertiliser are strongly associated with higher crop yields.",
        "Final Answer: (a) $0.896$, (b) $0.896$, (c) Strong positive linear correlation"
    ],
    "pi_options": [
        {
            "ans": "(a) $0.896$, (b) $0.0896$, (c) Strong positive linear correlation",
            "feedback": "In part (b), you divided by $10$ because $u = \\dfrac{x - 100}{10}$. The correlation coefficient $r$ is dimensionless and unaffected by linear scaling, so $r_{xy} = r_{uv} = 0.896$."
        },
        {
            "ans": "(a) $0.803$, (b) $0.803$, (c) Strong positive linear correlation",
            "feedback": "In part (a), you computed $S_{vv} = 54.8 - 18.4^2$ without dividing by $n = 8$, leading to an incorrect denominator."
        },
        {
            "ans": "(a) $0.896$, (b) $0.896$, (c) Nitrogen causes wheat yield to increase",
            "feedback": "In part (c), correlation indicates association, not direct causation. A statement of correlation must refer to the observed association rather than asserting proof of cause and effect."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Invariance of Correlation",
        "content": "Coding preserves correlation completely: $r_{xy} = r_{uv}$. Because $r$ is a normalised, dimensionless ratio, subtracting a constant shifts the origin and dividing by a positive constant scales the axes, but both operations cancel out entirely in $\\dfrac{S_{uv}}{\\sqrt{S_{uu} S_{vv}}}$."
    }
},
{
    "id": "050258",
    "group_id": "050256",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Correlation and Regression",
    "topic": "Product Moment Correlation",
    "subtopic": [
        "Hypothesis Testing for Correlation",
        "Degrees of Freedom",
        "Correlation vs Causation"
    ],
    "img": false,
    "question": "A psychologist investigates whether there is an association between reaction time, $x$ milliseconds, and age, $y$ years.<br><br>A random sample of $15$ adults is tested. The product moment correlation coefficient between reaction time and age is calculated as $r = 0.542$.<br><br><strong>(a)</strong> State the null and alternative hypotheses required to test whether there is a linear correlation between reaction time and age in the population.<br><br><strong>(b)</strong> State the number of degrees of freedom for this hypothesis test.<br><br><strong>(c)</strong> Test, at the $5\\%$ level of significance, whether there is evidence of linear correlation between reaction time and age.<br><br><strong>(d)</strong> Explain why establishing a statistically significant linear correlation does not prove that increasing age causes slower reaction times.",
    "steps": [
        "<strong>(a) Hypotheses:</strong><br><br>Where $\\rho$ denotes the population correlation coefficient:\\begin{aligned} &H_0: \\rho = 0 \\cr &H_1: \\rho \\neq 0 \\end{aligned}",
        "<strong>(b) Degrees of freedom:</strong><br><br>For testing correlation with sample size $n = 15$:\\begin{aligned} \\nu &= n - 2 \\cr &= 15 - 2 \\cr &= 13 \\end{aligned}",
        "<strong>(c) Hypothesis test at $5\\%$ level:</strong><br><br>For a two-tailed test with $\\nu = 13$ degrees of freedom at the $5\\%$ significance level, the critical value from statistical tables is:\\begin{aligned} r_{\\text{crit}} = \\pm 0.5140 \\end{aligned}Comparing the test statistic:\\begin{aligned} 0.542 > 0.5140 \\end{aligned}Since $r$ exceeds the critical value, we reject $H_0$.<br><br>There is significant evidence at the $5\\%$ level of a linear correlation between reaction time and age.",
        "<strong>(d) Correlation versus causation:</strong><br><br>A statistically significant correlation establishes an association between the two variables, but it does not establish cause and effect. The observed relationship could be influenced by confounding variables (such as reduced physical activity, visual acuity changes, or fatigue) rather than age itself acting as the direct cause.",
        "Final Answer: (a) $H_0: \\rho = 0$, $H_1: \\rho \\neq 0$, (b) $13$, (c) Reject $H_0$ as $0.542 > 0.5140$"
    ],
    "pi_options": [
        {
            "ans": "(a) $H_0: \\rho = 0$, $H_1: \\rho > 0$, (b) $13$, (c) Reject $H_0$ as $0.542 > 0.5140$",
            "feedback": "In part (a), the question asks whether there is 'a linear correlation', which requires a two-tailed alternative hypothesis $H_1: \\rho \\neq 0$, not a one-tailed hypothesis."
        },
        {
            "ans": "(a) $H_0: \\rho = 0$, $H_1: \\rho \\neq 0$, (b) $14$, (c) Reject $H_0$ as $0.542 > 0.5140$",
            "feedback": "In part (b), the degrees of freedom for a PMCC test is $n - 2$. With $n = 15$, $\\nu = 15 - 2 = 13$, not $n - 1 = 14$."
        },
        {
            "ans": "(a) $H_0: \\rho = 0$, $H_1: \\rho \\neq 0$, (b) $13$, (c) Do not reject $H_0$ as $0.542 < 0.6411$",
            "feedback": "In part (c), $0.6411$ is the critical value for a $1\\%$ significance level. At the $5\\%$ two-tailed level, the critical value is $0.5140$, leading to a rejection of $H_0$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Degrees of Freedom for PMCC",
        "content": "Remember that testing a population correlation coefficient uses $n - 2$ degrees of freedom, not $n - 1$. Two degrees of freedom are lost because the regression line requires estimating both a gradient and an intercept."
    }
},
{
    "id": "050259",
    "group_id": "050256",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Correlation and Regression",
    "topic": "Spearman's Rank Correlation",
    "subtopic": [
        "Ranking Data",
        "Spearman's Rank Formula",
        "Assumptions"
    ],
    "img": false,
    "question": "Two culinary critics independently assess and score $8$ competitors at a regional cooking competition. The scores awarded by Critic A ($x$) and Critic B ($y$) are shown in the table below:<table style='width:100%; max-width:260px; margin:15px auto; border-collapse:collapse; text-align:center;'><tr style='border-bottom:1px solid #ccc;'><th style='padding:6px; text-align:left;'>Chef</th><th style='padding:6px;'>Critic A ($x$)</th><th style='padding:6px;'>Critic B ($y$)</th></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>A</td><td style='padding:6px;'>65</td><td style='padding:6px;'>70</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>B</td><td style='padding:6px;'>78</td><td style='padding:6px;'>75</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>C</td><td style='padding:6px;'>82</td><td style='padding:6px;'>80</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>D</td><td style='padding:6px;'>54</td><td style='padding:6px;'>58</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>E</td><td style='padding:6px;'>91</td><td style='padding:6px;'>88</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>F</td><td style='padding:6px;'>70</td><td style='padding:6px;'>66</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>G</td><td style='padding:6px;'>85</td><td style='padding:6px;'>86</td></tr><tr><td style='padding:6px; text-align:left;'>H</td><td style='padding:6px;'>60</td><td style='padding:6px;'>62</td></tr></table><strong>(a)</strong> Calculate Spearman's rank correlation coefficient between the scores awarded by the two critics.<br><br><strong>(b)</strong> State two conditions under which Spearman's rank correlation coefficient is preferred over the product moment correlation coefficient.<br><br><strong>(c)</strong> Comment on the level of agreement between the two critics.",
    "steps": [
        "<strong>(a) Ranking the scores and calculating $r_s$:</strong><br><br>Assign ranks from $1$ (lowest) to $8$ (highest):<br><br>• <strong>Chef A:</strong> Rank A $= 3$, Rank B $= 4 \\implies d = -1 \\implies d^2 = 1$<br>• <strong>Chef B:</strong> Rank A $= 5$, Rank B $= 5 \\implies d = 0 \\implies d^2 = 0$<br>• <strong>Chef C:</strong> Rank A $= 6$, Rank B $= 6 \\implies d = 0 \\implies d^2 = 0$<br>• <strong>Chef D:</strong> Rank A $= 1$, Rank B $= 1 \\implies d = 0 \\implies d^2 = 0$<br>• <strong>Chef E:</strong> Rank A $= 8$, Rank B $= 8 \\implies d = 0 \\implies d^2 = 0$<br>• <strong>Chef F:</strong> Rank A $= 4$, Rank B $= 3 \\implies d = 1 \\implies d^2 = 1$<br>• <strong>Chef G:</strong> Rank A $= 7$, Rank B $= 7 \\implies d = 0 \\implies d^2 = 0$<br>• <strong>Chef H:</strong> Rank A $= 2$, Rank B $= 2 \\implies d = 0 \\implies d^2 = 0$<br><br>Summing the squared rank differences:\\begin{aligned} &\\sum d^2\\cr & = 1 + 0 + 0 + 0 + 0 + 1 + 0 + 0 \\cr &= 2 \\end{aligned}Applying Spearman's formula with $n = 8$:\\begin{aligned} r_s &= 1 - \\dfrac{6\\sum d^2}{n(n^2 - 1)} \\cr &= 1 - \\dfrac{6(2)}{8(64 - 1)} \\cr &= 1 - \\dfrac{12}{8(63)} \\cr &= 1 - \\dfrac{12}{504} \\cr &= 1 - \\dfrac{1}{42} \\cr &= \\dfrac{41}{42} \\cr &\\approx 0.976 \\end{aligned}",
        "<strong>(b) Conditions favouring Spearman's rank:</strong><br><br>1. When the data is non-linear but monotonic.<br>2. When the data is qualitative or ordinal (already ranked or based on subjective scores).<br>3. When the dataset contains extreme outliers or does not follow a bivariate normal distribution.",
        "<strong>(c) Commenting on agreement:</strong><br><br>There is an exceptionally high level of agreement between the rankings given by the two culinary critics ($r_s = 0.976$).",
        "Final Answer: (a) $0.976$, (c) Very high level of agreement"
    ],
    "pi_options": [
        {
            "ans": "(a) $0.024$, (c) Very high level of agreement",
            "feedback": "In part (a), you calculated $\\dfrac{6\\sum d^2}{n(n^2 - 1)} = \\dfrac{12}{504} \\approx 0.024$ and forgot to subtract this value from $1$."
        },
        {
            "ans": "(a) $0.976$, (c) Very low level of agreement",
            "feedback": "In part (c), an $r_s$ value of $0.976$ is almost $+1$, which indicates near-perfect positive agreement, not low agreement."
        },
        {
            "ans": "(a) $0.952$, (c) Very high level of agreement",
            "feedback": "In part (a), check your ranking table. The squared differences are $d^2 = 1$ for Chef A and Chef F only, giving $\\sum d^2 = 2$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Monotonicity vs Linearity",
        "content": "Spearman's rank correlation coefficient measures *monotonicity* (whether one variable increases as the other increases, regardless of shape), whereas the product moment correlation coefficient measures strict *linearity*. That is why Spearman's rank is preferred when curves or non-normal ratings are involved."
    }
},
{
    "id": "050260",
    "group_id": "050256",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Correlation and Regression",
    "topic": "Linear Regression and Correlation",
    "subtopic": [
        "Regression Slope",
        "PMCC Calculation",
        "Shared Sign Property"
    ],
    "img": false,
    "question": "A sports science researcher records the body mass, $x\\text{ kg}$, and the maximum bench press, $y\\text{ kg}$, for $7$ competitive weightlifters:<table style='width:100%; max-width:260px; margin:15px auto; border-collapse:collapse; text-align:center;'><tr style='border-bottom:1px solid #ccc;'><th style='padding:6px; text-align:left;'>Lifter</th><th style='padding:6px;'>Mass, $x$ (kg)</th><th style='padding:6px;'>Bench, $y$ (kg)</th></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>1</td><td style='padding:6px;'>70</td><td style='padding:6px;'>110</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>2</td><td style='padding:6px;'>75</td><td style='padding:6px;'>125</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>3</td><td style='padding:6px;'>80</td><td style='padding:6px;'>130</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>4</td><td style='padding:6px;'>85</td><td style='padding:6px;'>145</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>5</td><td style='padding:6px;'>90</td><td style='padding:6px;'>150</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>6</td><td style='padding:6px;'>95</td><td style='padding:6px;'>165</td></tr><tr><td style='padding:6px; text-align:left;'>7</td><td style='padding:6px;'>105</td><td style='padding:6px;'>175</td></tr></table><strong>(a)</strong> Calculate the product moment correlation coefficient, $r$, between body mass and bench press.<br><br><strong>(b)</strong> Calculate the gradient, $b$, of the least-squares regression line of bench press ($y$) on body mass ($x$), and interpret its physical meaning.<br><br><strong>(c)</strong> Explain why the gradient of a linear regression line, $b$, must always have the same sign as the product moment correlation coefficient, $r$.",
    "steps": [
        "<strong>(a) Calculating the correlation coefficient $r$:</strong><br><br>For $n = 7$ pairs, the totals are:\\begin{aligned} \\sum x &= 600 \\cr \\sum y &= 1000 \\cr \\sum x^2 &= 52300 \\cr \\sum y^2 &= 146000 \\cr \\sum xy &= 87350 \\end{aligned}Calculating the sums of squares and cross-products:\\begin{aligned} S_{xx} &= 52300 - \\dfrac{600^2}{7} \\cr &= 52300 - 51428.57 \\cr &= 871.43 \\end{aligned}\\begin{aligned} S_{yy} &= 146000 - \\dfrac{1000^2}{7} \\cr &= 146000 - 142857.14 \\cr &= 3142.86 \\end{aligned}\\begin{aligned} S_{xy} &= 87350 - \\dfrac{600 \\times 1000}{7} \\cr &= 87350 - 85714.29 \\cr &= 1635.71 \\end{aligned}Calculating $r$:\\begin{aligned} r &= \\dfrac{S_{xy}}{\\sqrt{S_{xx} S_{yy}}} \\cr &= \\dfrac{1635.71}{\\sqrt{871.43 \\times 3142.86}} \\cr &= \\dfrac{1635.71}{\\sqrt{2738781}} \\cr &= \\dfrac{1635.71}{1654.93} \\cr &\\approx 0.988 \\end{aligned}",
        "<strong>(b) Calculating the regression gradient $b$:</strong><br><br>Using the formula for the slope of the regression line of $y$ on $x$:\\begin{aligned} b &= \\dfrac{S_{xy}}{S_{xx}} \\cr &= \\dfrac{1635.71}{871.43} \\cr &\\approx 1.88 \\end{aligned}<strong>Interpretation:</strong> For each additional $1\\text{ kg}$ increase in body mass, the maximum bench press is estimated to increase by approximately $1.88\\text{ kg}$.",
        "<strong>(c) Explaining why $b$ and $r$ share the same sign:</strong><br><br>The formulas for $b$ and $r$ are:\\begin{aligned} b &= \\dfrac{S_{xy}}{S_{xx}} \\cr r &= \\dfrac{S_{xy}}{\\sqrt{S_{xx} S_{yy}}} \\end{aligned}Because $S_{xx} > 0$ and $\\sqrt{S_{xx} S_{yy}} > 0$, both denominators are strictly positive. Therefore, the signs of both $b$ and $r$ are dictated solely by the sign of the covariance numerator $S_{xy}$.",
        "Final Answer: (a) $0.988$, (b) $1.88\\text{ kg per kg}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $0.988$, (b) $0.53\\text{ kg per kg}$",
            "feedback": "In part (b), you evaluated $\\dfrac{S_{xx}}{S_{xy}}$ instead of $\\dfrac{S_{xy}}{S_{xx}}$. The gradient of $y$ on $x$ requires $S_{xx}$ in the denominator, yielding $b = \\dfrac{1635.71}{871.43} \\approx 1.88$."
        },
        {
            "ans": "(a) $0.854$, (b) $1.88\\text{ kg per kg}$",
            "feedback": "In part (a), you made an arithmetic error when evaluating the denominator $\\sqrt{S_{xx} S_{yy}}$. The correct correlation value is $r = 0.988$."
        },
        {
            "ans": "(a) $0.988$, (b) $1.88\\text{ kg per kg}$",
            "feedback": "In part (c), remember that both formulas share the numerator $S_{xy}$, ensuring that whenever the slope is positive, the correlation coefficient must also be positive."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Connecting Slope and Correlation",
        "content": "A neat connection to remember is $b = r\\left(\\dfrac{s_y}{s_x}\\right)$. Because standard deviations $s_y$ and $s_x$ are always positive, the regression slope $b$ and correlation coefficient $r$ must always share identical signs."
    }
},
{
    "id": "050261",
    "group_id": "050261",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Probability Distributions",
    "topic": "Binomial Distribution",
    "subtopic": [
        "Algebraic Binomial Ratios",
        "Proof of Parameter",
        "Cumulative Probability"
    ],
    "img": false,
    "question": "A robotics laboratory conducts a series of $10$ autonomous test flights with a prototype delivery drone. The probability of any individual test flight encountering a navigation sensor error is $p$, where errors occur independently from flight to flight.<br><br>Let $X$ denote the random variable \"the number of test flights that encounter a navigation sensor error\".<br><br><strong>(a)</strong> Find an expression, in terms of $p$, for $\\text{P}(X = 1)$.<br><br>It is known that $\\text{P}(X = 2) = 3\\text{P}(X = 1)$.<br><br><strong>(b)</strong> Prove that $p = 0.4$.<br><br><strong>(c)</strong> Hence find the probability that at least three test flights encounter a navigation sensor error.",
    "steps": [
        "<strong>(a) Expression for $\\text{P}(X = 1)$:</strong><br><br>Since $X \\sim \\text{B}(10, p)$, using the binomial probability formula:\\begin{aligned} P(X = 1) &= \\binom{10}{1} p^1 (1 - p)^{10 - 1} \\cr &= 10p(1 - p)^9 \\end{aligned}",
        "<strong>(b) Proving that $p = 0.4$:</strong><br><br>First, write the expression for $\\text{P}(X = 2)$:\\begin{aligned} P(X = 2) &= \\binom{10}{2} p^2 (1 - p)^8 \\cr &= 45p^2(1 - p)^8 \\end{aligned}Using the given relationship $\\text{P}(X = 2) = 3\\text{P}(X = 1)$:\\begin{aligned} 45p^2(1 - p)^8 &= 3[10p(1 - p)^9] \\cr 45p^2(1 - p)^8 &= 30p(1 - p)^9 \\end{aligned}Since $0 < p < 1$, divide both sides by $15p(1 - p)^8$:\\begin{aligned} 3p &= 2(1 - p) \\cr 3p &= 2 - 2p \\cr 5p &= 2 \\cr p &= \\dfrac{2}{5} \\cr p &= 0.4 \\end{aligned}",
        "<strong>(c) Finding $\\text{P}(X \\ge 3)$:</strong><br><br>With $X \\sim \\text{B}(10, 0.4)$, use the complement rule:\\begin{aligned}& P(X \\ge 3)\\cr & \\qquad= 1 - P(X \\le 2) \\cr & \\qquad= 1 - [P(X = 0) + P(X = 1)\\cr & \\qquad + P(X = 2)] \\end{aligned}Evaluating each term:\\begin{aligned} P(X = 0) &= (0.6)^{10} \\cr &\\approx 0.006047 \\cr P(X = 1) &= 10(0.4)(0.6)^9 \\cr &\\approx 0.040311 \\cr P(X = 2) &= 3 \\times 0.040311 \\cr &\\approx 0.120932 \\end{aligned}Summing the terms:\\begin{aligned} & P(X \\le 2) \\cr &= 0.006047 + 0.040311 + 0.120932 \\cr &= 0.167290 \\end{aligned}Subtracting from $1$:\\begin{aligned} P(X \\ge 3) &= 1 - 0.167290 \\cr &= 0.8327 \\end{aligned}",
        "Final Answer: (a) $10p(1 - p)^9$, (b) $p = 0.4$, (c) $0.8327$"
    ],
    "pi_options": [
        {
            "ans": "(a) $10p(1 - p)^9$, (b) $p = 0.4$, (c) $0.1673$",
            "feedback": "In part (c), $0.1673$ is $P(X \\le 2)$. The question asks for the probability of *at least three* flights, so you must evaluate $1 - P(X \\le 2) = 0.8327$."
        },
        {
            "ans": "(a) $p(1 - p)^9$, (b) $p = 0.4$, (c) $0.8327$",
            "feedback": "In part (a), you omitted the binomial coefficient $\\binom{10}{1} = 10$. The formula requires $\\binom{n}{x} p^x (1 - p)^{n - x}$."
        },
        {
            "ans": "(a) $10p(1 - p)^9$, (b) $p = 0.25$, (c) $0.8327$",
            "feedback": "In part (b), check your algebraic division: $45p = 30(1 - p)$ expands to $45p = 30 - 30p$, giving $75p = 30 \\implies p = 0.4$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Dividing Common Powers in Binomial Ratios",
        "content": "When solving equations of the form $P(X = r+1) = k P(X = r)$, do not expand the brackets. Dividing both sides by $p^r (1 - p)^{n - r - 1}$ instantly reduces the equation to a simple linear equation in $p$."
    }
},
{
    "id": "050262",
    "group_id": "050261",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Probability Distributions",
    "topic": "Binomial Distribution",
    "subtopic": [
        "Algebraic Parameter Derivation",
        "Binomial Probabilities",
        "Repeated Binomial Trials"
    ],
    "img": false,
    "question": "A quality assurance inspector inspects batches of $8$ micro-controllers manufactured on an assembly line. The probability that any micro-controller is defective is a constant value $p$, independently of all other micro-controllers.<br><br>Let $Y$ denote the number of defective micro-controllers in a randomly selected batch.<br><br><strong>(a)</strong> Given that $\\text{P}(Y = 1) = 4\\text{P}(Y = 0)$, show that $p = \\dfrac{1}{3}$.<br><br><strong>(b)</strong> Using $p = \\dfrac{1}{3}$, find the probability that a randomly chosen batch contains:<br>&emsp;<strong>(i)</strong> exactly $2$ defective micro-controllers,<br>&emsp;<strong>(ii)</strong> more than $3$ defective micro-controllers.<br><br><strong>(c)</strong> The inspector checks $5$ independent batches. Find the probability that exactly $4$ of these batches contain no defective micro-controllers.",
    "steps": [
        "<strong>(a) Showing $p = \\dfrac{1}{3}$:</strong><br><br>Since $Y \\sim \\text{B}(8, p)$, write the expressions for $Y = 1$ and $Y = 0$:\\begin{aligned} P(Y = 1) &= \\binom{8}{1} p^1 (1 - p)^7 \\cr &= 8p(1 - p)^7 \\cr P(Y = 0) &= (1 - p)^8 \\end{aligned}Equating using $\\text{P}(Y = 1) = 4\\text{P}(Y = 0)$:\\begin{aligned} 8p(1 - p)^7 &= 4(1 - p)^8 \\cr 8p &= 4(1 - p) \\cr 8p &= 4 - 4p \\cr 12p &= 4 \\cr p &= \\dfrac{4}{12} \\cr p &= \\dfrac{1}{3} \\end{aligned}",
        "<strong>(b)(i) Probability of exactly $2$ defectives:</strong><br><br>With $Y \\sim \\text{B}\\left(8, \\dfrac{1}{3}\\right)$:\\begin{aligned} P(Y = 2) &= \\binom{8}{2} \\left(\\dfrac{1}{3}\\right)^2 \\left(\\dfrac{2}{3}\\right)^6 \\cr &= 28 \\times \\dfrac{1}{9} \\times \\dfrac{64}{729} \\cr &= \\dfrac{1792}{6561} \\cr &\\approx 0.2731 \\end{aligned}",
        "<strong>(b)(ii) Probability of more than $3$ defectives:</strong><br><br>Using the complement rule:\\begin{aligned} P(Y > 3) &= 1 - P(Y \\le 3) \\cr &= 1 - [P(0) + P(1)\\cr & \\quad + P(2) + P(3)] \\end{aligned}Summing the terms:\\begin{aligned}& P(Y \\le 3) \\cr & \\qquad\\approx 0.0390 + 0.1561 \\cr & \\qquad \\quad+ 0.2731 + 0.2731 \\cr &\\qquad= 0.7415 \\end{aligned}Subtracting from $1$:\\begin{aligned} P(Y > 3) &= 1 - 0.7415 \\cr &= 0.2585 \\end{aligned}",
        "<strong>(c) Repeated batches:</strong><br><br>The probability that a single batch contains no defectives is:\\begin{aligned} P(\\text{no defectives}) &= \\left(\\dfrac{2}{3}\\right)^8 \\cr &\\approx 0.039018 \\end{aligned}Let $W$ be the number of batches out of $5$ with zero defectives, so $W \\sim \\text{B}(5, 0.039018)$:\\begin{aligned} &P(W = 4) \\cr & = \\binom{5}{4} (0.039018)^4 (1 - 0.039018)^1 \\cr &= 5 \\times (2.318 \\times 10^{-6}) \\times 0.96098 \\cr &\\approx 0.000011 \\end{aligned}",
        "Final Answer: (a) $p = \\dfrac{1}{3}$, (b)(i) $0.2731$, (ii) $0.2585$, (c) $0.000011$"
    ],
    "pi_options": [
        {
            "ans": "(a) $p = \\dfrac{1}{3}$, (b)(i) $0.2731$, (ii) $0.7415$, (c) $0.000011$",
            "feedback": "In part (b)(ii), $0.7415$ is $P(Y \\le 3)$. For 'more than $3$', you must calculate $1 - P(Y \\le 3) = 0.2585$."
        },
        {
            "ans": "(a) $p = \\dfrac{1}{2}$, (b)(i) $0.2731$, (ii) $0.2585$, (c) $0.000011$",
            "feedback": "In part (a), check your algebra: $8p = 4 - 4p$ gives $12p = 4 \\implies p = \\dfrac{1}{3}$, not $\\dfrac{1}{2}$."
        },
        {
            "ans": "(a) $p = \\dfrac{1}{3}$, (b)(i) $0.2731$, (ii) $0.2585$, (c) $0.000055$",
            "feedback": "In part (c), you forgot to multiply by $(1 - p) = 0.961$, evaluating $5 \\times (0.0390)^4$ directly."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Binomial Within Binomial",
        "content": "Part (c) is a classic two-tier examination question. First, use the primary binomial model to find the probability of a single event (here, a batch with zero defectives). Then treat that result as the success probability parameter for a second, separate binomial trial of size $5$."
    }
},
{
    "id": "050263",
    "group_id": "050261",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Probability Distributions",
    "topic": "Binomial Distribution",
    "subtopic": [
        "One-Tailed Hypothesis Testing",
        "Critical Region",
        "Actual Significance Level"
    ],
    "img": false,
    "question": "An artisan bakery claims that at least $80\\%$ of its regular customers prefer its traditional sourdough loaf to standard sliced bread. A local consumer watchdog suspects that the true proportion is lower than $80\\%$.<br><br>The watchdog surveys a random sample of $20$ regular customers. Let $X$ denote the number of customers in the sample who prefer the sourdough loaf.<br><br><strong>(a)</strong> Stating your hypotheses clearly, set up a suitable one-tailed hypothesis test to investigate the watchdog's suspicion.<br><br><strong>(b)</strong> State the distribution of $X$ assuming that the bakery's claim is true.<br><br><strong>(c)</strong> In the survey, $12$ of the $20$ customers state a preference for the sourdough loaf. Test, at the $5\\%$ level of significance, whether there is evidence to support the watchdog's suspicion.<br><br><strong>(d)</strong> Determine the critical region for this test at the $5\\%$ significance level, and state the actual significance level of the test.",
    "steps": [
        "<strong>(a) Setting up hypotheses:</strong><br><br>Where $p$ represents the population proportion of customers preferring the sourdough loaf:\\begin{aligned} &H_0: p = 0.8 \\cr &H_1: p < 0.8 \\end{aligned}",
        "<strong>(b) Null distribution:</strong><br><br>Under $H_0$, the number of preferring customers follows:\\begin{aligned} X \\sim \\text{B}(20, 0.8) \\end{aligned}",
        "<strong>(c) Calculating test probability and conclusion:</strong><br><br>We calculate the lower-tail probability of observing $12$ or fewer successes under $X \\sim \\text{B}(20, 0.8)$:\\begin{aligned} & P(X \\le 12) \\cr & \\quad= \\sum_{k=0}^{12} \\binom{20}{k} (0.8)^k (0.2)^{20 - k} \\end{aligned}Alternatively, let $Y = 20 - X \\sim \\text{B}(20, 0.2)$ be the number who do not prefer sourdough:\\begin{aligned} P(X \\le 12) &= P(Y \\ge 8) \\cr &= 1 - P(Y \\le 7) \\cr &= 1 - 0.9679 \\cr &= 0.0321 \\end{aligned}Comparing to the significance level $\\alpha = 0.05$:\\begin{aligned} 0.0321 < 0.05 \\end{aligned}Since the $p$-value is less than $0.05$, we reject $H_0$.<br><br>There is significant evidence at the $5\\%$ level to support the watchdog's suspicion that the proportion preferring sourdough is less than $80\\%$.",
        "<strong>(d) Determining critical region and actual significance level:</strong><br><br>We find the largest integer $c$ such that $P(X \\le c) \\le 0.05$:\\begin{aligned} P(X \\le 11) &= 0.0100 \\le 0.05 \\cr P(X \\le 12) &= 0.0321 \\le 0.05 \\cr P(X \\le 13) &= 0.0867 > 0.05 \\end{aligned}Therefore, the critical region is:\\begin{aligned} X \\le 12 \\end{aligned}The actual significance level is the probability of rejecting $H_0$ when it is true:\\begin{aligned} P(X \\le 12) &= 0.0321 \\quad (3.21\\%) \\end{aligned}",
        "Final Answer: (a) $H_0: p = 0.8$, $H_1: p < 0.8$, (b) $B(20, 0.8)$, (c) Reject $H_0$, (d) $X \\le 12$ and $0.0321$"
    ],
    "pi_options": [
        {
            "ans": "(a) $H_0: p = 0.8$, $H_1: p < 0.8$, (b) $B(20, 0.8)$, (c) Do not reject $H_0$, (d) $X \\le 12$ and $0.0321$",
            "feedback": "In part (c), because $p = 0.0321$ is strictly less than $0.05$, the result falls in the critical region, so $H_0$ must be rejected."
        },
        {
            "ans": "(a) $H_0: p = 0.8$, $H_1: p < 0.8$, (b) $B(20, 0.8)$, (c) Reject $H_0$, (d) $X \\le 11$ and $0.0100$",
            "feedback": "In part (d), $P(X \\le 12) = 0.0321$ is also less than or equal to $0.05$. The critical region includes all values with cumulative probability $\\le 0.05$, so $c = 12$."
        },
        {
            "ans": "(a) $H_0: p = 0.8$, $H_1: p \\neq 0.8$, (b) $B(20, 0.8)$, (c) Reject $H_0$, (d) $X \\le 12$ and $0.0500$",
            "feedback": "In part (a), the watchdog suspects the proportion is *lower*, which requires a one-tailed test $H_1: p < 0.8$. In part (d), the actual significance level is $0.0321$, not $0.05$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Actual vs Nominal Significance Level",
        "content": "Because the binomial distribution is discrete, you cannot usually achieve an exact $5\\%$ significance level. The nominal level is $5\\%$, but the <em>actual significance level</em> is the exact probability of landing in the critical region ($P(X \\le 12) = 0.0321$ or $3.21\\%$)."
    }
},
{
    "id": "050264",
    "group_id": "050261",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Probability Distributions",
    "topic": "Binomial Distribution",
    "subtopic": [
        "Two-Tailed Hypothesis Testing",
        "Symmetric Critical Regions",
        "Significance Levels"
    ],
    "img": false,
    "question": "A coin is suspected of being biased. To investigate this, an experimenter tosses the coin $25$ times and records $X$, the number of heads obtained.<br><br><strong>(a)</strong> State suitable null and alternative hypotheses to test whether the coin is biased.<br><br><strong>(b)</strong> The experimenter conducts a two-tailed test at the $5\\%$ level of significance, allocating as close to $2.5\\%$ as possible to each tail. Determine the critical region for this test.<br><br><strong>(c)</strong> State the actual significance level of the test.<br><br><strong>(d)</strong> In the experiment, the coin lands on heads $19$ times. State, with justification, the conclusion of the test in context.",
    "steps": [
        "<strong>(a) Hypotheses:</strong><br><br>Where $p$ is the probability of landing on heads:\\begin{aligned} &H_0: p = 0.5 \\cr &H_1: p \\neq 0.5 \\end{aligned}",
        "<strong>(b) Determining the critical region:</strong><br><br>Under $H_0$, $X \\sim \\text{B}(25, 0.5)$. We seek critical values in each tail with probability $\\le 0.025$.<br><br>For the lower tail:\\begin{aligned} P(X \\le 6) &= 0.0073 \\le 0.025 \\cr P(X \\le 7) &= 0.0216 \\le 0.025 \\cr P(X \\le 8) &= 0.0539 > 0.025 \\end{aligned}Thus the lower critical region is $X \\le 7$.<br><br>By symmetry of $\\text{B}(25, 0.5)$, the upper critical value is $25 - 7 = 18$:\\begin{aligned} P(X \\ge 18) &= P(X \\le 7) \\cr &= 0.0216 \\end{aligned}Combining both tails, the critical region is:\\begin{aligned} X \\le 7 \\quad \\text{or} \\quad X \\ge 18 \\end{aligned}",
        "<strong>(c) Actual significance level:</strong><br><br>Summing the probabilities of both tails:\\begin{aligned} &\\text{Actual level} \\cr &= P(X \\le 7) + P(X \\ge 18) \\cr &= 0.0216 + 0.0216 \\cr &= 0.0432 \\quad (4.32\\%) \\end{aligned}",
        "<strong>(d) Conclusion for $19$ heads:</strong><br><br>The observed value $x = 19$ satisfies $19 \\ge 18$, which falls inside the upper critical region.<br><br>Therefore, we <strong>reject $H_0$</strong>.<br><br>There is significant evidence at the $5\\%$ level that the coin is biased.",
        "Final Answer: (a) $H_0: p = 0.5$, $H_1: p \\neq 0.5$, (b) $X \\le 7$ or $X \\ge 18$, (c) $0.0432$, (d) Reject $H_0$"
    ],
    "pi_options": [
        {
            "ans": "(a) $H_0: p = 0.5$, $H_1: p \\neq 0.5$, (b) $X \\le 8$ or $X \\ge 17$, (c) $0.0432$, (d) Reject $H_0$",
            "feedback": "In part (b), $P(X \\le 8) = 0.0539 > 0.025$, which exceeds the allocated $2.5\\%$ tail probability. The lower critical value must be $7$."
        },
        {
            "ans": "(a) $H_0: p = 0.5$, $H_1: p > 0.5$, (b) $X \\le 7$ or $X \\ge 18$, (c) $0.0432$, (d) Reject $H_0$",
            "feedback": "In part (a), testing whether a coin is 'biased' can mean biased towards heads or tails, requiring a two-tailed test $H_1: p \\neq 0.5$."
        },
        {
            "ans": "(a) $H_0: p = 0.5$, $H_1: p \\neq 0.5$, (b) $X \\le 7$ or $X \\ge 18$, (c) $0.0216$, (d) Accept $H_0$",
            "feedback": "In part (c), $0.0216$ is the probability of a single tail. For a two-tailed test, the actual significance level is the sum of both tails: $0.0216 + 0.0216 = 0.0432$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Symmetry in Two-Tailed Binomials",
        "content": "Whenever $p = 0.5$, the binomial distribution is perfectly symmetric. Once you calculate the lower critical boundary $c_1 = 7$, the upper boundary is immediately $c_2 = n - c_1 = 25 - 7 = 18$, and the total significance level is simply double the lower-tail probability."
    }
},
{
    "id": "050265",
    "group_id": "050261",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "AS",
    "major_area": "Probability Distributions",
    "topic": "Binomial Distribution",
    "subtopic": [
        "Mean and Variance Formulas",
        "Simultaneous Equations",
        "Mode of Binomial Distribution"
    ],
    "img": false,
    "question": "A discrete random variable $X$ follows a binomial distribution:$$X \\sim \\text{B}(n, p)$$The expected value of $X$ is $7.2$ and the variance of $X$ is $2.88$.<br><br><strong>(a)</strong> Determine the value of $n$ and the value of $p$.<br><br><strong>(b)</strong> Find:<br>&emsp;<strong>(i)</strong> $\\text{P}(X = 8)$,<br>&emsp;<strong>(ii)</strong> $\\text{P}(X \\le 2)$.<br><br><strong>(c)</strong> State the most likely value (the mode) of $X$, justifying your answer.",
    "steps": [
        "<strong>(a) Finding $n$ and $p$:</strong><br><br>Using the standard formulas for expectation and variance:\\begin{aligned} \\text{E}(X) &= np = 7.2 \\cr \\text{Var}(X) &= np(1 - p) = 2.88 \\end{aligned}Dividing the variance by the expectation:\\begin{aligned} \\dfrac{np(1 - p)}{np} &= \\dfrac{2.88}{7.2} \\cr 1 - p &= 0.4 \\cr p &= 1 - 0.4 \\cr p &= 0.6 \\end{aligned}Substituting $p = 0.6$ into the expectation equation:\\begin{aligned} n(0.6) &= 7.2 \\cr n &= \\dfrac{7.2}{0.6} \\cr n &= 12 \\end{aligned}Hence $X \\sim \\text{B}(12, 0.6)$.",
        "<strong>(b)(i) Finding $\\text{P}(X = 8)$:</strong><br><br>Using the binomial probability formula:\\begin{aligned} &P(X = 8)\\cr &= \\binom{12}{8} (0.6)^8 (0.4)^4 \\cr &= 495 \\times 0.016796 \\times 0.0256 \\cr &= 495 \\times 0.000430 \\cr &\\approx 0.2128 \\end{aligned}",
        "<strong>(b)(ii) Finding $\\text{P}(X \\le 2)$:</strong><br><br>Summing the probabilities for $X = 0, 1, 2$:\\begin{aligned} & P(X = 0)\\cr &= (0.4)^{12} \\approx 0.000002 \\cr & P(X = 1)\\cr &= 12(0.6)(0.4)^{11} \\approx 0.000252 \\cr & P(X = 2)\\cr &= 66(0.6)^2(0.4)^{10} \\approx 0.002491 \\end{aligned}Adding these values:\\begin{aligned} & P(X \\le 2)\\cr &= 0.000002 + 0.000252 + 0.002491 \\cr &= 0.0028 \\end{aligned}",
        "<strong>(c) Finding the mode:</strong><br><br>For a binomial distribution, the mode is the integer $m$ satisfying $(n + 1)p - 1 \\le m \\le (n + 1)p$:\\begin{aligned} (n + 1)p &= (12 + 1)(0.6) \\cr &= 13 \\times 0.6 \\cr &= 7.8 \\end{aligned}Because $(n + 1)p = 7.8$ is not an integer, the unique mode is the floor integer:\\begin{aligned} \\text{Mode} = 7 \\end{aligned}(Confirming probabilities: $P(X = 7) \\approx 0.2270$ and $P(X = 8) \\approx 0.2128$, so $7$ is the most likely value).",
        "Final Answer: (a) $n = 12$, $p = 0.6$, (b)(i) $0.2128$, (ii) $0.0028$, (c) $\\text{Mode} = 7$"
    ],
    "pi_options": [
        {
            "ans": "(a) $n = 12$, $p = 0.4$, (b)(i) $0.2128$, (ii) $0.0028$, (c) $\\text{Mode} = 7$",
            "feedback": "In part (a), $\\dfrac{2.88}{7.2} = 0.4$ equals $1 - p$ (the failure probability). Therefore, $p = 1 - 0.4 = 0.6$."
        },
        {
            "ans": "(a) $n = 12$, $p = 0.6$, (b)(i) $0.2128$, (ii) $0.0028$, (c) $\\text{Mode} = 8$",
            "feedback": "In part (c), students often round the mean $7.2$ to $7$ or $8$. The exact formula $(n + 1)p = 13 \\times 0.6 = 7.8$ indicates the mode is $7$ ($P(7) \\approx 0.227$ vs $P(8) \\approx 0.213$)."
        },
        {
            "ans": "(a) $n = 10$, $p = 0.72$, (b)(i) $0.2128$, (ii) $0.0028$, (c) $\\text{Mode} = 7$",
            "feedback": "In part (a), you assumed $n = 10$. Solving $\\text{Var} / \\text{Mean} = 1 - p$ yields $p = 0.6$, from which $n = 7.2 / 0.6 = 12$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Finding the Mode of a Binomial",
        "content": "To find the mode of a binomial distribution without calculating every probability, evaluate $(n + 1)p$. If this is not an integer, the mode is simply the integer part $\\lfloor (n + 1)p \\rfloor$. Here $13 \\times 0.6 = 7.8$, so the mode is $7$."
    }
},
{
    "id": "050266",
    "group_id": "050266",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Probability",
    "topic": "Probability of Events",
    "subtopic": [
        "Venn Diagrams",
        "Conditional Probability",
        "Testing Independence"
    ],
    "img": false,
    "question": "A theatre manager analyses the purchasing habits of audience members during an evening performance. She records that $45\\%$ of audience members purchase a souvenir programme, $30\\%$ purchase an interval refreshment, and $40\\%$ purchase neither.<br><br>An audience member is selected at random from the performance.<br><br><strong>(a)</strong> Calculate the probability that the selected audience member purchases an interval refreshment and no souvenir programme.<br><br><strong>(b)</strong> Calculate the probability that the selected audience member purchases an interval refreshment given that they purchased a souvenir programme.<br><br><strong>(c)</strong> Determine whether the event \"purchasing a souvenir programme\" is statistically independent of the event \"purchasing an interval refreshment\".",
    "steps": [
        "<strong>(a) Probability of refreshment and no programme:</strong><br><br>Let $S$ be the event of purchasing a souvenir programme and $R$ be the event of purchasing an interval refreshment. From the data:\\begin{aligned} P(S) &= 0.45 \\cr P(R) &= 0.30 \\cr P(S' \\cap R') &= 0.40 \\end{aligned}The probability of purchasing at least one item is the complement:\\begin{aligned} P(S \\cup R) &= 1 - P(S' \\cap R') \\cr &= 1 - 0.40 \\cr &= 0.60 \\end{aligned}Using the addition rule to find the intersection:\\begin{aligned} &P(S \\cap R) \\cr &= P(S) + P(R) - P(S \\cup R) \\cr &= 0.45 + 0.30 - 0.60 \\cr &= 0.15 \\end{aligned}The probability of purchasing an interval refreshment and no programme is:\\begin{aligned} P(R \\cap S') &= P(R) - P(S \\cap R) \\cr &= 0.30 - 0.15 \\cr &= 0.15 \\end{aligned}",
        "<strong>(b) Conditional probability:</strong><br><br>Applying the definition of conditional probability:\\begin{aligned} P(R \\mid S) &= \\dfrac{P(R \\cap S)}{P(S)} \\cr &= \\dfrac{0.15}{0.45} \\cr &= \\dfrac{1}{3} \\quad (\\approx 0.333) \\end{aligned}",
        "<strong>(c) Testing statistical independence:</strong><br><br>Two events are independent if and only if $P(S \\cap R) = P(S) \\times P(R)$.<br><br>Evaluating the product of the individual probabilities:\\begin{aligned} P(S) \\times P(R) &= 0.45 \\times 0.30 \\cr &= 0.135 \\end{aligned}Comparing with the intersection:\\begin{aligned} P(S \\cap R) &= 0.15 \\end{aligned}Since $0.15 \\neq 0.135$, the events are <strong>not statistically independent</strong>.",
        "Final Answer: (a) $0.15$, (b) $\\dfrac{1}{3}$, (c) Not independent"
    ],
    "pi_options": [
        {
            "ans": "(a) $0.15$, (b) $0.50$, (c) Not independent",
            "feedback": "In part (b), you evaluated $P(S \\mid R) = \\dfrac{0.15}{0.30} = 0.50$. The condition is that they purchased a programme, so you must divide by $P(S) = 0.45$, giving $\\dfrac{1}{3}$."
        },
        {
            "ans": "(a) $0.30$, (b) $\\dfrac{1}{3}$, (c) Not independent",
            "feedback": "In part (a), $0.30$ is the total probability $P(R)$. You must subtract the intersection $P(S \\cap R) = 0.15$ to find those who bought a refreshment *only* ($0.15$)."
        },
        {
            "ans": "(a) $0.15$, (b) $\\dfrac{1}{3}$, (c) Independent",
            "feedback": "In part (c), independence requires strict equality $P(S \\cap R) = P(S) \\times P(R)$. Since $0.15 \\neq 0.135$, the events are not independent."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Testing Independence Two Ways",
        "content": "You can test independence using either $P(A \\cap B) = P(A)P(B)$ or by checking whether the condition alters the baseline probability: $P(R \\mid S) = P(R)$. Here, $P(R \\mid S) = \\dfrac{1}{3} \\approx 0.333$ while $P(R) = 0.30$. Because buying a programme increases the chance of buying a refreshment, they cannot be independent."
    }
},
{
    "id": "050267",
    "group_id": "050266",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Probability",
    "topic": "Probability of Events",
    "subtopic": [
        "Independent Events",
        "Mutually Exclusive Events",
        "Conditional Probability"
    ],
    "img": false,
    "question": "Two events $E$ and $F$ are defined on a sample space such that:$$\\text{P}(E) = 0.60 \\quad \\text{and}$$ $$\\text{P}(E \\cup F) = 0.84$$<strong>(a)</strong> Given that $E$ and $F$ are statistically independent events:<br>&emsp;<strong>(i)</strong> find $\\text{P}(F)$,<br>&emsp;<strong>(ii)</strong> find $\\text{P}(E' \\cap F)$.<br><br><strong>(b)</strong> Given instead that $E$ and $F$ are mutually exclusive events:<br>&emsp;<strong>(i)</strong> determine the value of $\\text{P}(F)$,<br>&emsp;<strong>(ii)</strong> explain why two non-empty events with non-zero probabilities cannot be simultaneously mutually exclusive and statistically independent.<br><br><strong>(c)</strong> Given instead that $\\text{P}(E \\mid F) = 0.40$, calculate $\\text{P}(F \\mid E)$.",
    "steps": [
        "<strong>(a)(i) Finding $P(F)$ under independence:</strong><br><br>If $E$ and $F$ are independent, $P(E \\cap F) = P(E) \\times P(F)$.<br> Applying the addition rule:\\begin{aligned} &P(E \\cup F) = P(E) + P(F) \\cr &\\qquad \\qquad \\quad- P(E)P(F) \\cr &0.84 = 0.60 + P(F) - 0.60P(F) \\cr &0.84 - 0.60 = 0.40P(F) \\cr &0.24 = 0.40P(F) \\cr &P(F) = \\dfrac{0.24}{0.40} \\cr &P(F) = 0.60 \\end{aligned}",
        "<strong>(a)(ii) Finding $P(E' \\cap F)$:</strong><br><br>Since $E$ and $F$ are independent, their complements are also independent:\\begin{aligned} P(E' \\cap F) &= P(E') \\times P(F) \\cr &= (1 - 0.60) \\times 0.60 \\cr &= 0.40 \\times 0.60 \\cr &= 0.24 \\end{aligned}",
        "<strong>(b)(i) Value of $P(F)$ under mutual exclusivity:</strong><br><br>If $E$ and $F$ are mutually exclusive, $P(E \\cap F) = 0$:\\begin{aligned} P(E \\cup F) &= P(E) + P(F) \\cr 0.84 &= 0.60 + P(F) \\cr P(F) &= 0.24 \\end{aligned}",
        "<strong>(b)(ii) Why events cannot be both mutually exclusive and independent:</strong><br><br>For mutually exclusive events, $P(E \\cap F) = 0$. For independent events with non-zero probabilities, $P(E \\cap F) = P(E) \\times P(F) > 0$. Because a probability cannot simultaneously be zero and strictly positive, two non-empty events cannot be both mutually exclusive and independent.",
        "<strong>(c) Finding $P(F \\mid E)$ when $P(E \\mid F) = 0.40$:</strong><br><br>From the definition of conditional probability, $P(E \\cap F) = 0.40P(F)$. Substituting into the addition rule:\\begin{aligned} &0.84 = 0.60 + P(F) - 0.40P(F) \\cr &0.24 = 0.60P(F) \\cr &P(F) = \\dfrac{0.24}{0.60} \\cr &P(F) = 0.40 \\end{aligned}The intersection is:\\begin{aligned} P(E \\cap F) &= 0.40 \\times 0.40 \\cr &= 0.16 \\end{aligned}Now calculate the reverse conditional probability:\\begin{aligned} P(F \\mid E) &= \\dfrac{P(E \\cap F)}{P(E)} \\cr &= \\dfrac{0.16}{0.60} \\cr &= \\dfrac{4}{15} \\quad (\\approx 0.267) \\end{aligned}",
        "Final Answer: (a)(i) $0.60$, (ii) $0.24$, (b)(i) $0.24$, (c) $\\dfrac{4}{15}$"
    ],
    "pi_options": [
        {
            "ans": "(a)(i) $0.40$, (ii) $0.24$, (b)(i) $0.24$, (c) $\\dfrac{4}{15}$",
            "feedback": "In part (a)(i), solving $0.24 = 0.40P(F)$ gives $P(F) = \\dfrac{0.24}{0.40} = 0.60$, not $0.40$."
        },
        {
            "ans": "(a)(i) $0.60$, (ii) $0.24$, (b)(i) $0.24$, (c) $0.40$",
            "feedback": "In part (c), $0.40$ is the given value $P(E \\mid F)$ and $P(F)$. The question asks for the reverse conditional probability $P(F \\mid E) = \\dfrac{0.16}{0.60} = \\dfrac{4}{15}$."
        },
        {
            "ans": "(a)(i) $0.60$, (ii) $0.36$, (b)(i) $0.24$, (c) $\\dfrac{4}{15}$",
            "feedback": "In part (a)(ii), you computed $P(E \\cap F) = 0.36$ instead of $P(E' \\cap F) = (1 - 0.60)(0.60) = 0.24$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Mutually Exclusive vs Independent",
        "content": "Never confuse mutually exclusive with independent! Mutually exclusive means the events <em>cannot happen together</em> ($P(A \\cap B) = 0$). Independent means one event happening <em>does not change the chance of the other</em>. If two events cannot happen together, knowing one occurred means the other definitely didn't—so they are strongly dependent!"
    }
},
{
    "id": "050268",
    "group_id": "050266",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Probability",
    "topic": "Probability of Events",
    "subtopic": [
        "Three Independent Events",
        "System Reliability",
        "Conditional Probability"
    ],
    "img": false,
    "question": "A high-security database server employs three separate automated threat-detection modules: Firewall ($F$), Antivirus ($A$), and Intrusion Detection ($D$).<br><br>When a cyber attack occurs, the probabilities that each module successfully detects the threat are:$$\\text{P}(F) = 0.90$$ $$\\text{P}(A) = 0.85$$ $$\\text{P}(D) = 0.70$$Because the three modules operate on completely independent hardware layers, detection by any module is statistically independent of detection by the others.<br><br>A cyber attack is launched against the server.<br><br><strong>(a)</strong> Find the probability that the attack is detected by all three modules.<br><br><strong>(b)</strong> Find the probability that the attack is detected by at least one of the three modules.<br><br><strong>(c)</strong> Find the probability that the attack is detected by exactly two of the three modules.<br><br><strong>(d)</strong> Given that the attack was detected by exactly two modules, find the probability that the Firewall ($F$) was one of the detecting modules.",
    "steps": [
        "<strong>(a) Detected by all three modules:</strong><br><br>Using the multiplication rule for independent events:\\begin{aligned} & P(F \\cap A \\cap D)\\cr &= P(F) \\times P(A) \\times P(D) \\cr &= 0.90 \\times 0.85 \\times 0.70 \\cr &= 0.5355 \\end{aligned}",
        "<strong>(b) Detected by at least one module:</strong><br><br>Using the complement rule with failure probabilities:\\begin{aligned} P(F') &= 1 - 0.90 = 0.10 \\cr P(A') &= 1 - 0.85 = 0.15 \\cr P(D') &= 1 - 0.70 = 0.30 \\end{aligned}The probability of complete failure is:\\begin{aligned} & P(F' \\cap A' \\cap D')\\cr &= 0.10 \\times 0.15 \\times 0.30 \\cr &= 0.0045 \\end{aligned}Subtracting from $1$:\\begin{aligned} P(\\text{at least one}) &= 1 - 0.0045 \\cr &= 0.9955 \\end{aligned}",
        "<strong>(c) Detected by exactly two modules:</strong><br><br>Summing the three mutually exclusive pairs where two modules succeed and one fails:\\begin{aligned} & P(F \\cap A \\cap D')\\cr &= 0.90 \\times 0.85 \\times 0.30 \\cr &= 0.2295 \\cr & P(F \\cap A' \\cap D)\\cr &= 0.90 \\times 0.15 \\times 0.70 \\cr &= 0.0945 \\cr & P(F' \\cap A \\cap D)\\cr &= 0.10 \\times 0.85 \\times 0.70 \\cr &= 0.0595 \\end{aligned}Summing these probabilities:\\begin{aligned} & P(\\text{exactly two}) \\cr &= 0.2295 + 0.0945 + 0.0595 \\cr &= 0.3835 \\end{aligned}",
        "<strong>(d) Conditional probability that Firewall was involved:</strong><br><br>We restrict to the outcomes where exactly two modules detected the threat and $F$ succeeded:\\begin{aligned} &P(F \\text{ detected} \\cap \\text{exactly two}) \\cr &\\quad = P(F \\cap A \\cap D')\\cr  & \\qquad + P(F \\cap A' \\cap D) \\cr &\\quad = 0.2295 + 0.0945 \\cr &\\quad = 0.3240 \\end{aligned}Dividing by the probability of exactly two modules detecting:\\begin{aligned} P(F \\mid \\text{exactly two}) &= \\dfrac{0.3240}{0.3835} \\cr &= \\dfrac{3240}{3835} \\cr &= \\dfrac{648}{767} \\cr &\\approx 0.845 \\end{aligned}",
        "Final Answer: (a) $0.5355$, (b) $0.9955$, (c) $0.3835$, (d) $\\dfrac{648}{767}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $0.5355$, (b) $0.9955$, (c) $0.3835$, (d) $0.3240$",
            "feedback": "In part (d), $0.3240$ is the joint probability. To find the conditional probability, you must divide by $P(\\text{exactly two}) = 0.3835$."
        },
        {
            "ans": "(a) $0.5355$, (b) $0.9955$, (c) $0.2295$, (d) $\\dfrac{648}{767}$",
            "feedback": "In part (c), you calculated only one specific combination ($F$ and $A$ succeed, $D$ fails). You must sum all three ways exactly two modules can succeed."
        },
        {
            "ans": "(a) $0.5355$, (b) $0.8150$, (c) $0.3835$, (d) $\\dfrac{648}{767}$",
            "feedback": "In part (b), you added the probabilities directly without accounting for overlap. Use $$1 - P(\\text{none detected})$$ $$= 1 - (0.10 \\times 0.15 \\times 0.30)$$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: The 'At Least One' Complement Trick",
        "content": "For three or more independent events, never calculate 'at least one' by adding together all single, double, and triple unions. Always use $1 - P(\\text{all fail})$. Multiplying the failure probabilities $(0.10 \\times 0.15 \\times 0.30 = 0.0045)$ and subtracting from $1$ takes two lines of working."
    }
},
{
    "id": "050269",
    "group_id": "050266",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Probability",
    "topic": "Probability of Events",
    "subtopic": [
        "Algebraic Probability",
        "Range Constraints",
        "Independence Constraints"
    ],
    "img": false,
    "question": "Two events $A$ and $B$ are such that:$$\\text{P}(A) = 0.50$$  $$\\text{P}(B) = p$$ $$\\text{P}(A \\cap B) = q$$ $$\\text{P}(A' \\cap B') = 0.20$$<strong>(a)</strong> Express $q$ in terms of $p$.<br><br><strong>(b)</strong> Determine the allowable range of possible values of $p$.<br><br><strong>(c)</strong> Given that the events $A$ and $B$ are statistically independent:<br>&emsp;<strong>(i)</strong> show that $p = 0.60$ and state the value of $q$,<br>&emsp;<strong>(ii)</strong> find the value of $\\text{P}(A \\cup B')$.<br><br><strong>(d)</strong> Given instead that $\\text{P}(A \\mid B) = 0.40$, find the value of $p$.",
    "steps": [
        "<strong>(a) Expressing $q$ in terms of $p$:</strong><br><br>The probability of the union is the complement of neither event occurring:\\begin{aligned} P(A \\cup B) &= 1 - P(A' \\cap B') \\cr &= 1 - 0.20 \\cr &= 0.80 \\end{aligned}Applying the addition rule of probability:\\begin{aligned} &P(A \\cup B) \\cr &= P(A) + P(B) - P(A \\cap B) \\cr &0.80 = 0.50 + p - q \\cr &q = p + 0.50 - 0.80 \\cr &q = p - 0.30 \\end{aligned}",
        "<strong>(b) Range of possible values for $p$:</strong><br><br>Because all probabilities must be non-negative, the intersection cannot be negative:\\begin{aligned} q \\ge 0 &\\implies p - 0.30 \\ge 0 \\cr &\\implies p \\ge 0.30 \\end{aligned}Furthermore, since $B \\subseteq (A \\cup B)$, the probability of $B$ cannot exceed the union:\\begin{aligned} P(B) \\le P(A \\cup B) &\\implies p \\le 0.80 \\end{aligned}Therefore, the allowable range for $p$ is:\\begin{aligned} 0.30 \\le p \\le 0.80 \\end{aligned}",
        "<strong>(c)(i) Showing $p = 0.60$ under independence:</strong><br><br>If $A$ and $B$ are independent, $P(A \\cap B) = P(A) \\times P(B)$:\\begin{aligned} &q = 0.50p \\cr &p - 0.30 = 0.50p \\cr &p - 0.50p = 0.30 \\cr &0.50p = 0.30 \\cr &p = \\dfrac{0.30}{0.50} \\cr &p = 0.60 \\end{aligned}Then $q = 0.60 - 0.30 = 0.30$.",
        "<strong>(c)(ii) Evaluating $P(A \\cup B')$:</strong><br><br>Using set identities:\\begin{aligned} P(B') &= 1 - p \\cr &= 1 - 0.60 \\cr &= 0.40 \\cr P(A \\cap B') &= P(A) - P(A \\cap B) \\cr &= 0.50 - 0.30 \\cr &= 0.20 \\end{aligned}Applying the addition rule:\\begin{aligned} &P(A \\cup B')\\cr &= P(A) + P(B') - P(A \\cap B') \\cr &= 0.50 + 0.40 - 0.20 \\cr &= 0.70 \\end{aligned}",
        "<strong>(d) Finding $p$ when $P(A \\mid B) = 0.40$:</strong><br><br>Using the definition of conditional probability:\\begin{aligned} P(A \\mid B) &= \\dfrac{P(A \\cap B)}{P(B)} \\cr 0.40 &= \\dfrac{q}{p} \\cr 0.40 &= \\dfrac{p - 0.30}{p} \\cr 0.40p &= p - 0.30 \\cr 0.30 &= p - 0.40p \\cr 0.60p &= 0.30 \\cr p &= \\dfrac{0.30}{0.60} \\cr p &= 0.50 \\end{aligned}",
        "Final Answer: (a) $q = p - 0.30$, (b) $0.30 \\le p \\le 0.80$, (c)(i) $p = 0.60$, $q = 0.30$, (ii) $0.70$, (d) $0.50$"
    ],
    "pi_options": [
        {
            "ans": "(a) $q = p - 0.30$, (b) $0 \\le p \\le 1$, (c)(i) $p = 0.60$, $q = 0.30$, (ii) $0.70$, (d) $0.50$",
            "feedback": "In part (b), stating $0 \\le p \\le 1$ fails to account for the constraints $P(A) = 0.50$ and $P(A \\cup B) = 0.80$. If $p < 0.30$, the intersection $q$ would be negative; if $p > 0.80$, $P(B)$ would exceed the union."
        },
        {
            "ans": "(a) $q = p - 0.30$, (b) $0.30 \\le p \\le 0.80$, (c)(i) $p = 0.60$, $q = 0.30$, (ii) $0.90$, (d) $0.50$",
            "feedback": "In part (c)(ii), you added $P(A) + P(B') = 0.50 + 0.40 = 0.90$ without subtracting the intersection $P(A \\cap B') = 0.20$."
        },
        {
            "ans": "(a) $q = p - 0.30$, (b) $0.30 \\le p \\le 0.80$, (c)(i) $p = 0.60$, $q = 0.30$, (ii) $0.70$, (d) $0.75$",
            "feedback": "In part (d), you solved $0.40p = 0.30$, forgetting that \\begin{aligned}0.40p &= p - 0.30 \\cr\\implies 0.60p &= 0.30 \\cr\\implies p &= 0.50\\end{aligned}"
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Bounding Probability Parameters",
        "content": "Whenever an algebraic probability variable appears, always test its physical boundaries. The lower bound comes from ensuring the intersection $q \\ge 0$, and the upper bound comes from ensuring $P(B) \\le P(A \\cup B)$. This immediately confines $p$ to $[0.30, 0.80]$."
    }
},
{
    "id": "050270",
    "group_id": "050266",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Probability",
    "topic": "Probability of Events",
    "subtopic": [
        "Three-Set Disjoint Events",
        "Conditional Probability",
        "Independence Test"
    ],
    "img": false,
    "question": "A survey of $150$ sports club members records participation in three activities: Tennis ($T$), Squash ($S$), and Badminton ($B$).<br><br>It is known that no member plays both Squash and Badminton ($S \\cap B = \\emptyset$). The remaining participation numbers are:<br>• $20$ members play Tennis only.<br>• $15$ members play Squash only.<br>• $25$ members play Badminton only.<br>• $30$ members play Tennis and Squash.<br>• $20$ members play Tennis and Badminton.<br>• $40$ members play none of these three sports.<br><br>A club member is selected at random from the survey.<br><br><strong>(a)</strong> State the probability that the selected member plays both Squash and Badminton, and write down the formal statistical term for this relationship.<br><br><strong>(b)</strong> Find the probability that the selected member:<br>&emsp;<strong>(i)</strong> plays Tennis,<br>&emsp;<strong>(ii)</strong> plays Tennis, given that they play Squash,<br>&emsp;<strong>(iii)</strong> plays at least one of Squash or Badminton.<br><br><strong>(c)</strong> Determine, with mathematical justification, whether the events \"plays Tennis\" and \"plays Squash\" are statistically independent.",
    "steps": [
        "<strong>(a) Mutual exclusivity of Squash and Badminton:</strong><br><br>Since no member plays both Squash and Badminton:\\begin{aligned} P(S \\cap B) &= 0 \\end{aligned}The formal statistical term is <strong>mutually exclusive</strong>.",
        "<strong>(b)(i) Probability of playing Tennis:</strong><br><br>Summing the Tennis regions:\\begin{aligned} &n(T) \\cr &= n(T \\text{ only}) + n(T \\cap S)\\cr & \\qquad \\quad + n(T \\cap B) \\cr &= 20 + 30 + 20 \\cr &= 70 \\end{aligned}The probability is:\\begin{aligned} P(T) &= \\dfrac{70}{150} \\cr &= \\dfrac{7}{15} \\quad (\\approx 0.467) \\end{aligned}",
        "<strong>(b)(ii) Conditional probability of Tennis given Squash:</strong><br><br>The total number of members who play Squash is:\\begin{aligned} n(S) &= n(S \\text{ only}) + n(T \\cap S) \\cr &= 15 + 30 \\cr &= 45 \\end{aligned}Using the conditional probability definition:\\begin{aligned} P(T \\mid S) &= \\dfrac{n(T \\cap S)}{n(S)} \\cr &= \\dfrac{30}{45} \\cr &= \\dfrac{2}{3} \\quad (\\approx 0.667) \\end{aligned}",
        "<strong>(b)(iii) Probability of playing Squash or Badminton:</strong><br><br>Because $S$ and $B$ are mutually exclusive, there is no overlap:\\begin{aligned} n(S \\cup B) &= n(S) + n(B) \\cr &= 45 + (25 + 20) \\cr &= 45 + 45 \\cr &= 90 \\end{aligned}The probability is:\\begin{aligned} P(S \\cup B) &= \\dfrac{90}{150} \\cr &= \\dfrac{3}{5} \\cr &= 0.60 \\end{aligned}",
        "<strong>(c) Testing statistical independence of $T$ and $S$:</strong><br><br>Two events are independent if and only if $P(T \\cap S) = P(T) \\times P(S)$.<br><br>Evaluating the product of the marginal probabilities:\\begin{aligned} P(T) \\times P(S) &= \\dfrac{7}{15} \\times \\dfrac{3}{10} \\cr &= \\dfrac{21}{150} \\cr &= 0.14 \\end{aligned}The joint probability from the survey is:\\begin{aligned} P(T \\cap S) &= \\dfrac{30}{150} \\cr &= 0.20 \\end{aligned}Since $0.20 \\neq 0.14$ (equivalently $P(T \\mid S) = \\dfrac{2}{3} \\neq P(T) = \\dfrac{7}{15}$), the events are <strong>not statistically independent</strong>.",
        "Final Answer: (a) $0$, mutually exclusive, (b)(i) $\\dfrac{7}{15}$, (ii) $\\dfrac{2}{3}$, (iii) $0.60$, (c) Not independent"
    ],
    "pi_options": [
        {
            "ans": "(a) $0$, mutually exclusive, (b)(i) $\\dfrac{7}{15}$, (ii) $\\dfrac{1}{5}$, (iii) $0.60$, (c) Not independent",
            "feedback": "In part (b)(ii), you divided the joint count $30$ by the total club membership $150$ rather than conditioning on Squash players: $\\dfrac{30}{45} = \\dfrac{2}{3}$."
        },
        {
            "ans": "(a) $0$, independent, (b)(i) $\\dfrac{7}{15}$, (ii) $\\dfrac{2}{3}$, (iii) $0.60$, (c) Not independent",
            "feedback": "In part (a), two events that cannot occur together ($P = 0$) are termed 'mutually exclusive', not independent."
        },
        {
            "ans": "(a) $0$, mutually exclusive, (b)(i) $\\dfrac{2}{15}$, (ii) $\\dfrac{2}{3}$, (iii) $0.60$, (c) Independent",
            "feedback": "In part (b)(i), you only counted the $20$ members playing Tennis *only*. The total playing Tennis includes those who also play Squash and Badminton: $20 + 30 + 20 = 70$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Disjoint Sub-regions in 3-Set Venns",
        "content": "When an examination specifies that two sets are disjoint ($S \\cap B = \\emptyset$), the three-set Venn diagram simplifies nicely: the central three-way intersection and the $S \\cap B$ football-shaped overlap are both zero. Tennis acts as the bridge connecting two mutually exclusive sports."
    }
},
{
    "id": "050271",
    "group_id": "050271",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Probability",
    "topic": "Sequential Events",
    "subtopic": [
        "Transfer Problems",
        "Total Probability",
        "Bayes' Theorem"
    ],
    "img": false,
    "question": "A quality technician inspects batches of precision electronic fuses stored in two containers: Container X and Container Y.<br><br>Container X contains $4$ gold-tipped fuses and $3$ silver-tipped fuses.<br>Container Y contains $3$ gold-tipped fuses and $5$ silver-tipped fuses.<br><br>One fuse is selected at random from Container X and placed into Container Y. One fuse is then selected at random from Container Y.<br><br><strong>(a)</strong> Find the probability that the selected fuses are both gold-tipped.<br><br><strong>(b)</strong> Find the probability that the second fuse selected is gold-tipped.<br><br><strong>(c)</strong> Find the probability that the first fuse selected was silver-tipped, given that the second fuse selected is gold-tipped.",
    "steps": [
        "<strong>(a) Probability both are gold-tipped:</strong><br><br>Container X has $4 + 3 = 7$ fuses. Container Y initially has $3 + 5 = 8$ fuses, and receives $1$ transferred fuse, giving $9$ fuses total.<br><br>Using the multiplication rule:\\begin{aligned} &P(G_1 \\cap G_2) \\cr &\\quad = P(G_1) P(G_2 \\mid G_1) \\cr &\\quad = \\dfrac{4}{7} \\times \\dfrac{4}{9} \\cr &\\quad = \\dfrac{16}{63} \\end{aligned}",
        "<strong>(b) Total probability second fuse is gold-tipped:</strong><br><br>The first fuse transferred can be either gold-tipped ($G_1$) or silver-tipped ($S_1$):\\begin{aligned} &P(G_2) \\cr &\\quad = P(G_1 \\cap G_2) \\cr &\\qquad + P(S_1 \\cap G_2) \\cr &\\quad = \\dfrac{16}{63} \\cr &\\qquad + \\left(\\dfrac{3}{7} \\times \\dfrac{3}{9}\\right) \\cr &\\quad = \\dfrac{16}{63} + \\dfrac{9}{63} \\cr &\\quad = \\dfrac{25}{63} \\end{aligned}",
        "<strong>(c) Conditional probability (Bayes' theorem):</strong><br><br>Applying the definition of conditional probability:\\begin{aligned} &P(S_1 \\mid G_2) \\cr &\\quad = \\dfrac{P(S_1 \\cap G_2)}{P(G_2)} \\cr &\\quad = \\dfrac{9 / 63}{25 / 63} \\cr &\\quad = \\dfrac{9}{25} \\cr &\\quad = 0.36 \\end{aligned}",
        "Final Answer: (a) $\\dfrac{16}{63}$, (b) $\\dfrac{25}{63}$, (c) $\\dfrac{9}{25}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $\\dfrac{16}{63}$, (b) $\\dfrac{25}{63}$, (c) $\\dfrac{9}{63}$",
            "feedback": "In part (c), $\\dfrac{9}{63}$ is the joint probability $P(S_1 \\cap G_2)$. To find the conditional probability, you must divide by the total probability $P(G_2) = \\dfrac{25}{63}$."
        },
        {
            "ans": "(a) $\\dfrac{12}{63}$, (b) $\\dfrac{25}{63}$, (c) $\\dfrac{9}{25}$",
            "feedback": "In part (a), you did not add the transferred gold fuse to Container Y's gold count. When a gold fuse is transferred, Container Y contains $3 + 1 = 4$ gold fuses out of $9$, so $P(G_2 \\mid G_1) = \\dfrac{4}{9}$."
        },
        {
            "ans": "(a) $\\dfrac{16}{63}$, (b) $\\dfrac{19}{63}$, (c) $\\dfrac{9}{25}$",
            "feedback": "In part (b), check your evaluation of the second branch. If a silver fuse is transferred, Container Y has $3$ gold fuses out of $9$, giving $\\dfrac{3}{7} \\times \\dfrac{3}{9} = \\dfrac{9}{63}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Updating the Transferred Count",
        "content": "In transfer problems, always track how the transferred item alters both the total count and the specific color count of the receiving container. When a gold fuse moves to Container Y, the total increases to $9$ and the gold count increases to $4$."
    }
},
{
    "id": "050272",
    "group_id": "050271",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Probability",
    "topic": "Sequential Events",
    "subtopic": [
        "Multi-Item Transfers",
        "Tree Diagrams",
        "Bayes' Theorem"
    ],
    "img": false,
    "question": "Two storage boxes contain coloured tokens:<br>• Box A contains $6$ red tokens and $4$ blue tokens.<br>• Box B contains $3$ red tokens and $7$ blue tokens.<br><br>Two tokens are selected at random without replacement from Box A and placed into Box B. A single token is then selected at random from Box B.<br><br><strong>(a)</strong> Find the probability that:<br>&emsp;<strong>(i)</strong> both tokens transferred from Box A to Box B are red,<br>&emsp;<strong>(ii)</strong> one red and one blue token are transferred from Box A to Box B.<br><br><strong>(b)</strong> Find the probability that the token selected from Box B is red.<br><br><strong>(c)</strong> Given that the token selected from Box B is red, find the probability that two red tokens were transferred from Box A.",
    "steps": [
        "<strong>(a)(i) Both tokens transferred are red:</strong><br><br>Box A has $10$ tokens total:\\begin{aligned} P(RR) &= \\dfrac{6}{10} \\times \\dfrac{5}{9} \\cr &= \\dfrac{30}{90} \\cr &= \\dfrac{1}{3} \\end{aligned}",
        "<strong>(a)(ii) One red and one blue token transferred:</strong><br><br>Accounting for both selection orders ($RB$ or $BR$):\\begin{aligned} &P(\\text{one } R, \\text{one } B) \\cr &\\quad = \\left(\\dfrac{6}{10} \\times \\dfrac{4}{9}\\right) \\cr &\\qquad + \\left(\\dfrac{4}{10} \\times \\dfrac{6}{9}\\right) \\cr &\\quad = \\dfrac{24}{90} + \\dfrac{24}{90} \\cr &\\quad = \\dfrac{48}{90} \\cr &\\quad = \\dfrac{8}{15} \\end{aligned}",
        "<strong>(b) Total probability of drawing red from Box B:</strong><br><br>Box B receives $2$ tokens, increasing its total from $10$ to $12$ tokens.<br><br>Also, $P(BB) = \\dfrac{4}{10} \\times \\dfrac{3}{9} = \\dfrac{12}{90} = \\dfrac{2}{15}$.<br><br>By the law of total probability:\\begin{aligned} &P(R_B) \\cr &\\quad = P(RR) P(R \\mid RR) \\cr &\\qquad + P(RB) P(R \\mid RB) \\cr &\\qquad + P(BB) P(R \\mid BB) \\cr &\\quad = \\left(\\dfrac{1}{3} \\times \\dfrac{5}{12}\\right) \\cr &\\qquad + \\left(\\dfrac{8}{15} \\times \\dfrac{4}{12}\\right) \\cr &\\qquad + \\left(\\dfrac{2}{15} \\times \\dfrac{3}{12}\\right) \\cr &\\quad = \\dfrac{25}{180} + \\dfrac{32}{180} \\cr &\\qquad + \\dfrac{3}{180} \\cr &\\quad = \\dfrac{60}{180} \\cr &\\quad = \\dfrac{1}{3} \\end{aligned}",
        "<strong>(c) Conditional probability (Bayes' theorem):</strong><br><br>Applying Bayes' formula:\\begin{aligned} &P(RR \\mid R_B) \\cr &\\quad = \\dfrac{P(RR \\cap R_B)}{P(R_B)} \\cr &\\quad = \\dfrac{25 / 180}{60 / 180} \\cr &\\quad = \\dfrac{25}{60} \\cr &\\quad = \\dfrac{5}{12} \\end{aligned}",
        "Final Answer: (a)(i) $\\dfrac{1}{3}$, (ii) $\\dfrac{8}{15}$, (b) $\\dfrac{1}{3}$, (c) $\\dfrac{5}{12}$"
    ],
    "pi_options": [
        {
            "ans": "(a)(i) $\\dfrac{1}{3}$, (ii) $\\dfrac{4}{15}$, (b) $\\dfrac{1}{3}$, (c) $\\dfrac{5}{12}$",
            "feedback": "In part (a)(ii), you forgot to multiply by $2$. One red and one blue token can be drawn in two mutually exclusive orders: $RB$ or $BR$."
        },
        {
            "ans": "(a)(i) $\\dfrac{1}{3}$, (ii) $\\dfrac{8}{15}$, (b) $\\dfrac{1}{3}$, (c) $\\dfrac{25}{180}$",
            "feedback": "In part (c), $\\dfrac{25}{180}$ is the joint probability $P(RR \\cap R_B)$. To find the conditional probability, you must divide by $P(R_B) = \\dfrac{60}{180}$."
        },
        {
            "ans": "(a)(i) $\\dfrac{1}{3}$, (ii) $\\dfrac{8}{15}$, (b) $\\dfrac{7}{20}$, (c) $\\dfrac{5}{12}$",
            "feedback": "In part (b), check the conditional fractions for Box B: with $2$ tokens transferred, the new total is $12$ tokens, giving branches $\\dfrac{5}{12}$, $\\dfrac{4}{12}$, and $\\dfrac{3}{12}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Order in Multi-Token Transfers",
        "content": "When transferring two items of different colours, remember that the transfer can happen in either order ($RB$ or $BR$). Always include the permutation factor of $2$: $\\dfrac{6}{10} \\times \\dfrac{4}{9} \\times 2 = \\dfrac{48}{90} = \\dfrac{8}{15}$."
    }
},
{
    "id": "050273",
    "group_id": "050271",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Probability",
    "topic": "Sequential Events",
    "subtopic": [
        "Diagnostic Screening",
        "Bayes' Theorem",
        "Repeated Testing"
    ],
    "img": false,
    "question": "An aircraft engine component is inspected using an automated ultrasound scanner to detect microscopic fatigue cracks.<br><br>From extensive historical testing, $3\\%$ of components entering the inspection bay possess a fatigue crack.<br>• For a component with a fatigue crack, the scanner correctly triggers an alarm with probability $0.98$.<br>• For a component with no fatigue crack, the scanner incorrectly triggers a false alarm with probability $0.04$.<br><br>A component is selected at random and scanned.<br><br><strong>(a)</strong> Find the probability that the scanner triggers an alarm.<br><br><strong>(b)</strong> Given that the scanner triggers an alarm, find the probability that the component actually possesses a fatigue crack. Give your answer to three significant figures.<br><br><strong>(c)</strong> Any component that triggers an alarm is immediately re-tested with a second, independent ultrasound scan. Assuming the scans are statistically independent, find the probability that the second scan also triggers an alarm.",
    "steps": [
        "<strong>(a) Probability scanner triggers an alarm:</strong><br><br>Let $C$ denote the event that a component has a crack, and $A_1$ denote an alarm on the first scan:\\begin{aligned} P(C) &= 0.03 \\cr P(C') &= 0.97 \\end{aligned}Using the law of total probability:\\begin{aligned} &P(A_1) \\cr &\\quad = P(C) P(A_1 \\mid C) \\cr &\\qquad + P(C') P(A_1 \\mid C') \\cr &\\quad = (0.03)(0.98) \\cr &\\qquad + (0.97)(0.04) \\cr &\\quad = 0.0294 + 0.0388 \\cr &\\quad = 0.0682 \\end{aligned}",
        "<strong>(b) Probability component actually has a crack:</strong><br><br>Applying Bayes' theorem:\\begin{aligned} P(C \\mid A_1) &= \\dfrac{P(C \\cap A_1)}{P(A_1)} \\cr &= \\dfrac{0.0294}{0.0682} \\cr &= \\dfrac{294}{682} \\cr &= \\dfrac{147}{341} \\cr &\\approx 0.431 \\end{aligned}",
        "<strong>(c) Probability of alarm on second scan:</strong><br><br>Conditioning on the updated probabilities from the first scan:\\begin{aligned} P(C \\mid A_1) &= \\dfrac{147}{341} \\cr P(C' \\mid A_1) &= \\dfrac{194}{341} \\end{aligned}Applying total probability for the second scan $A_2$:\\begin{aligned} &P(A_2 \\mid A_1) \\cr &\\quad = P(C \\mid A_1) P(A_2 \\mid C) \\cr &\\qquad + P(C' \\mid A_1) P(A_2 \\mid C') \\cr &\\quad = \\left(\\dfrac{147}{341}\\right)(0.98) \\cr &\\qquad + \\left(\\dfrac{194}{341}\\right)(0.04) \\cr &\\quad = \\dfrac{144.06 + 7.76}{341} \\cr &\\quad = \\dfrac{151.82}{341} \\cr &\\approx 0.445 \\end{aligned}",
        "Final Answer: (a) $0.0682$, (b) $0.431$, (c) $0.445$"
    ],
    "pi_options": [
        {
            "ans": "(a) $0.0682$, (b) $0.980$, (c) $0.445$",
            "feedback": "In part (b), $0.98$ is $P(A_1 \\mid C)$, the sensitivity of the scanner. You must evaluate the reverse conditional probability $P(C \\mid A_1) = \\dfrac{0.0294}{0.0682} \\approx 0.431$."
        },
        {
            "ans": "(a) $0.0682$, (b) $0.431$, (c) $0.0682$",
            "feedback": "In part (c), the component is already known to have triggered an alarm on scan 1. Its probability of being defective has jumped from $0.03$ to $0.431$, so the chance of a second alarm increases significantly."
        },
        {
            "ans": "(a) $0.0294$, (b) $0.431$, (c) $0.445$",
            "feedback": "In part (a), $0.0294$ only accounts for true alarms. You must also include false alarms: $0.0294 + (0.97 \\times 0.04) = 0.0682$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: The False Positive Paradox",
        "content": "Even with $98\\%$ sensitivity and a low $4\\%$ false-alarm rate, only $43.1\\%$ of components triggering an alarm are genuinely defective. Because defects are rare ($3\\%$), the absolute number of false alarms exceeds true alarms."
    }
},
{
    "id": "050274",
    "group_id": "050271",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Probability",
    "topic": "Sequential Events",
    "subtopic": [
        "Two-Stage Tree Diagrams",
        "Total Probability",
        "Inverse Probability"
    ],
    "img": false,
    "question": "At a charity fete, a game involves rolling a fair six-sided die to determine which prize box a player draws from:<br>• If the die lands on a $6$, the player draws one token from the Gold Box.<br>• If the die lands on any other number ($1$ to $5$), the player draws one token from the Silver Box.<br><br>The Gold Box contains $8$ winning tokens and $2$ losing tokens.<br>The Silver Box contains $3$ winning tokens and $7$ losing tokens.<br><br>A player rolls the die and draws a token from the designated box.<br><br><strong>(a)</strong> Find the probability that the player wins a prize.<br><br><strong>(b)</strong> Given that the player won a prize:<br>&emsp;<strong>(i)</strong> find the probability that the die landed on a $6$,<br>&emsp;<strong>(ii)</strong> find the probability that the die landed on a number less than $6$.",
    "steps": [
        "<strong>(a) Probability of winning a prize:</strong><br><br>The probabilities of choosing each box are:\\begin{aligned} P(G) &= \\dfrac{1}{6} \\cr P(S) &= \\dfrac{5}{6} \\end{aligned}By the law of total probability:\\begin{aligned} &P(W) \\cr &\\quad = P(G) P(W \\mid G) \\cr &\\qquad + P(S) P(W \\mid S) \\cr &\\quad = \\left(\\dfrac{1}{6} \\times \\dfrac{8}{10}\\right) \\cr &\\qquad + \\left(\\dfrac{5}{6} \\times \\dfrac{3}{10}\\right) \\cr &\\quad = \\dfrac{8}{60} + \\dfrac{15}{60} \\cr &\\quad = \\dfrac{23}{60} \\end{aligned}",
        "<strong>(b)(i) Probability die was a $6$ given a win:</strong><br><br>Applying Bayes' theorem:\\begin{aligned} P(G \\mid W) &= \\dfrac{P(G \\cap W)}{P(W)} \\cr &= \\dfrac{8 / 60}{23 / 60} \\cr &= \\dfrac{8}{23} \\end{aligned}",
        "<strong>(b)(ii) Probability die was less than $6$ given a win:</strong><br><br>Using the complement of landing on a $6$ given a win:\\begin{aligned} P(S \\mid W) &= 1 - P(G \\mid W) \\cr &= 1 - \\dfrac{8}{23} \\cr &= \\dfrac{15}{23} \\end{aligned}",
        "Final Answer: (a) $\\dfrac{23}{60}$, (b)(i) $\\dfrac{8}{23}$, (ii) $\\dfrac{15}{23}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $\\dfrac{23}{60}$, (b)(i) $\\dfrac{8}{60}$, (ii) $\\dfrac{15}{23}$",
            "feedback": "In part (b)(i), $\\dfrac{8}{60}$ is the joint probability $P(G \\cap W)$. The conditional probability requires dividing by the winning probability $P(W) = \\dfrac{23}{60}$."
        },
        {
            "ans": "(a) $\\dfrac{11}{20}$, (b)(i) $\\dfrac{8}{23}$, (ii) $\\dfrac{15}{23}$",
            "feedback": "In part (a), you weighted the two boxes equally ($\\dfrac{1}{2}$ each). The die roll gives probability $\\dfrac{1}{6}$ for the Gold Box and $\\dfrac{5}{6}$ for the Silver Box."
        },
        {
            "ans": "(a) $\\dfrac{23}{60}$, (b)(i) $\\dfrac{8}{23}$, (ii) $\\dfrac{5}{6}$",
            "feedback": "In part (b)(ii), $\\dfrac{5}{6}$ is the unconditioned prior probability $P(S)$. Knowing that the player won alters the probability to $P(S \\mid W) = \\dfrac{15}{23}$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Complementary Posteriors",
        "content": "In part (b)(ii), do not recalculate Bayes' formula from scratch. Because the game only uses two boxes (Gold and Silver), the posterior probabilities must sum to $1$: \\begin{aligned}P(S \\mid W) &= 1 - P(G \\mid W)\\cr &= 1 - \\dfrac{8}{23}\\cr & = \\dfrac{15}{23}\\end{aligned}"
    }
},
{
    "id": "050275",
    "group_id": "050271",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Probability",
    "topic": "Sequential Events",
    "subtopic": [
        "Algebraic Probability",
        "Sampling Without Replacement",
        "Conditional Selection"
    ],
    "img": false,
    "question": "A bag contains $n$ counters, of which $4$ are red and the remainder are yellow.<br>Two counters are drawn at random from the bag, one after the other, without replacement.<br><br><strong>(a)</strong> Show that the probability that both counters drawn are red is $\\dfrac{12}{n(n - 1)}$.<br><br><strong>(b)</strong> Given that the probability that both counters drawn are red is $\\dfrac{2}{15}$:<br>&emsp;<strong>(i)</strong> show that $n^2 - n - 90 = 0$,<br>&emsp;<strong>(ii)</strong> hence deduce the total number of counters in the bag, and state the number of yellow counters.<br><br><strong>(c)</strong> Using the total number of counters found in part <strong>(b)</strong>, three counters are now drawn at random one after the other without replacement.<br>Find the probability that:<br>&emsp;<strong>(i)</strong> the third counter drawn is red, given that the first two counters drawn were yellow,<br>&emsp;<strong>(ii)</strong> exactly one red counter is drawn in the three selections.",
    "steps": [
        "<strong>(a) Showing $P(RR) = \\dfrac{12}{n(n - 1)}$:</strong><br><br>Sampling without replacement:\\begin{aligned} P(RR) &= \\dfrac{4}{n} \\times \\dfrac{3}{n - 1} \\cr &= \\dfrac{12}{n(n - 1)} \\end{aligned}",
        "<strong>(b)(i) Forming the quadratic equation:</strong><br><br>Setting the probability equal to $\\dfrac{2}{15}$:\\begin{aligned} &\\dfrac{12}{n^2 - n} = \\dfrac{2}{15} \\cr &12 \\times 15 = 2(n^2 - n) \\cr &180 = 2n^2 - 2n \\cr &2n^2 - 2n - 180 = 0 \\cr &n^2 - n - 90 = 0 \\end{aligned}",
        "<strong>(b)(ii) Finding $n$ and yellow counters:</strong><br><br>Factorising the quadratic:\\begin{aligned} (n - 10)(n + 9) = 0 \\end{aligned}Since $n > 0$, we reject $n = -9$:\\begin{aligned} n = 10 \\end{aligned}The number of yellow counters is:\\begin{aligned} 10 - 4 = 6 \\end{aligned}",
        "<strong>(c)(i) Conditional probability for third counter:</strong><br><br>Given that the first two counters drawn were yellow, $4$ red and $4$ yellow counters remain out of $8$ counters:\\begin{aligned} &P(R_3 \\mid Y_1 \\cap Y_2) \\cr &\\quad = \\dfrac{4}{8} \\cr &\\quad = \\dfrac{1}{2} \\cr &\\quad = 0.5 \\end{aligned}",
        "<strong>(c)(ii) Exactly one red counter in three draws:</strong><br><br>The single red counter can be drawn in three mutually exclusive positions ($RYY$, $YRY$, or $YYR$):\\begin{aligned} &P(RYY) \\cr &\\quad = \\dfrac{4}{10} \\times \\dfrac{6}{9} \\times \\dfrac{5}{8} \\cr &\\quad = \\dfrac{120}{720} \\cr &\\quad = \\dfrac{1}{6} \\end{aligned}Since all three orders have equal probability:\\begin{aligned} &P(\\text{exactly } 1R) \\cr &\\quad = 3 \\times \\dfrac{1}{6} \\cr &\\quad = \\dfrac{1}{2} \\cr &\\quad = 0.5 \\end{aligned}",
        "Final Answer: (a) $\\dfrac{12}{n(n - 1)}$, (b)(i) $n^2 - n - 90 = 0$, (ii) $10$ counters ($6$ yellow), (c)(i) $0.5$, (ii) $0.5$"
    ],
    "pi_options": [
        {
            "ans": "(a) $\\dfrac{12}{n(n - 1)}$, (b)(i) $n^2 - n - 90 = 0$, (ii) $10$ counters ($6$ yellow), (c)(i) $0.5$, (ii) $\\dfrac{1}{6}$",
            "feedback": "In part (c)(ii), $\\dfrac{1}{6}$ accounts for only one specific sequence ($RYY$). The red counter can be first, second, or third, so you must multiply by $3$ to give $\\dfrac{3}{6} = 0.5$."
        },
        {
            "ans": "(a) $\\dfrac{12}{n(n - 1)}$, (b)(i) $n^2 - n - 90 = 0$, (ii) $9$ counters ($5$ yellow), (c)(i) $0.5$, (ii) $0.5$",
            "feedback": "In part (b)(ii), solving $(n - 10)(n + 9) = 0$ gives $n = 10$. The total number of counters must be positive, so $n = 10$, leaving $6$ yellow counters."
        },
        {
            "ans": "(a) $\\dfrac{12}{n(n - 1)}$, (b)(i) $n^2 - n - 90 = 0$, (ii) $10$ counters ($6$ yellow), (c)(i) $0.4$, (ii) $0.5$",
            "feedback": "In part (c)(i), knowing that two yellow counters were removed leaves $8$ counters in total, of which $4$ are red: $\\dfrac{4}{8} = 0.5$, not $\\dfrac{4}{10} = 0.4$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Direct Sub-population Conditioning",
        "content": "For part (c)(i), never set up a complicated Bayes formula when the history is already completely known. If the first two draws were yellow, simply remove two yellow counters from the bag. You are left with $4$ red and $4$ yellow, making the probability $\\dfrac{4}{8} = 0.5$ immediately."
    }
},
{
    "id": "050276",
    "group_id": "050276",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Continuous Distributions",
    "topic": "Normal Distribution",
    "subtopic": [
        "Finding Unknown Parameters",
        "Simultaneous Equations",
        "Modelling Justification"
    ],
    "img": false,
    "question": "<strong>(a)</strong> A precision manufacturing firm produces structural steel rods. The length of a rod, $X\\text{ cm}$, is modelled by a normal distribution with mean $\\mu$ and variance $\\sigma^2$.<br><br>Quality control testing reveals that $10\\%$ of the rods exceed $25.4\\text{ cm}$ in length and that $20\\%$ of the rods are shorter than $24.2\\text{ cm}$.<br><br>&emsp;<strong>(i)</strong> Find the values of $\\mu$ and $\\sigma^2$.<br><br>A specialised modular assembly requires rods that are less than $25.0\\text{ cm}$ in length.<br><br>&emsp;<strong>(ii)</strong> Calculate the percentage of steel rods that will be too long for this assembly.<br><br><strong>(b)</strong> Give one reason why the normal distribution is widely used in statistical modelling.",
    "steps": [
        "<strong>(a)(i) Finding $\\mu$ and $\\sigma^2$:</strong><br><br>For the upper tail where $10\\%$ exceed $25.4\\text{ cm}$:\\begin{aligned} P(X > 25.4) &= 0.10 \\cr \\dfrac{25.4 - \\mu}{\\sigma} &= 1.2816 \\cr 25.4 &= \\mu + 1.2816\\sigma \\end{aligned}For the lower tail where $20\\%$ are below $24.2\\text{ cm}$:\\begin{aligned} P(X < 24.2) &= 0.20 \\cr \\dfrac{24.2 - \\mu}{\\sigma} &= -0.8416 \\cr 24.2 &= \\mu - 0.8416\\sigma \\end{aligned}Subtracting the two equations:\\begin{aligned} 1.2 &= 2.1232\\sigma \\cr \\sigma &= \\dfrac{1.2}{2.1232} \\cr &\\approx 0.5652 \\cr \\sigma^2 &\\approx 0.319 \\end{aligned}Substituting $\\sigma$ to find $\\mu$:\\begin{aligned} \\mu &= 24.2 \\cr &\\quad + 0.8416(0.5652) \\cr &\\approx 24.676 \\cr &\\approx 24.7\\text{ cm} \\end{aligned}",
        "<strong>(a)(ii) Percentage too long for assembly:</strong><br><br>Too long means length $X > 25.0\\text{ cm}$:\\begin{aligned} z &= \\dfrac{25.0 - 24.676}{0.5652} \\cr &\\approx 0.573 \\end{aligned}Evaluating the upper-tail probability:\\begin{aligned} P(X > 25.0) &= 1 - \\Phi(0.573) \\cr &= 1 - 0.7167 \\cr &= 0.2833 \\cr &= 28.3\\% \\end{aligned}",
        "<strong>(b) Importance of the normal distribution:</strong><br><br>By the Central Limit Theorem, the distribution of the sample mean (or the sum of many independent random effects) tends towards a normal distribution as the sample size increases, regardless of the underlying population shape.",
        "Final Answer: (a)(i) $\\mu = 24.7\\text{ cm}$, $\\sigma^2 = 0.319$, (ii) $28.3\\%$, (b) Central Limit Theorem"
    ],
    "pi_options": [
        {
            "ans": "(a)(i) $\\mu = 24.7\\text{ cm}$, $\\sigma^2 = 0.565$, (ii) $28.3\\%$, (b) Central Limit Theorem",
            "feedback": "In part (a)(i), $0.565$ is the standard deviation $\\sigma$. The question asks for the variance $\\sigma^2$, which is $0.5652^2 \\approx 0.319$."
        },
        {
            "ans": "(a)(i) $\\mu = 24.7\\text{ cm}$, $\\sigma^2 = 0.319$, (ii) $71.7\\%$, (b) Central Limit Theorem",
            "feedback": "In part (a)(ii), $71.7\\%$ is the percentage that are acceptable ($X < 25.0$). The question asks for the percentage that are too long ($X > 25.0$), which is $100\\% - 71.7\\% = 28.3\\%$."
        },
        {
            "ans": "(a)(i) $\\mu = 25.1\\text{ cm}$, $\\sigma^2 = 0.319$, (ii) $28.3\\%$, (b) Data is always symmetrical",
            "feedback": "In part (a)(i), you used a positive $z$-value for the lower tail ($20\\%$). Because $24.2$ lies below the mean, $z = -0.8416$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: State Variance When Asked for Variance",
        "content": "A frequent lost mark in part (a)(i) is providing $\\sigma = 0.565$ and forgetting to square it. When an exam question specifies $\\sigma^2$, always compute both: $\\sigma = 0.565\\text{ cm}$ and $\\sigma^2 = 0.319\\text{ cm}^2$."
    }
},
{
    "id": "050277",
    "group_id": "050276",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Continuous Distributions",
    "topic": "Normal Distribution",
    "subtopic": [
        "Linear Combinations of Normal Variables",
        "Sums of Independent Variables",
        "Differences of Variables"
    ],
    "img": false,
    "question": "An engineering factory manufactures steel bolts and matching nuts.<br>The mass of a bolt, $B\\text{ g}$, is modelled by $B \\sim \\text{N}(45.0, 1.8^2)$.<br>The mass of a nut, $N\\text{ g}$, is modelled by $N \\sim \\text{N}(22.0, 1.2^2)$.<br>Bolts and nuts are manufactured independently.<br><br><strong>(a)</strong> A single bolt and a single nut are fastened together. Find the probability that their combined mass exceeds $70.0\\text{ g}$.<br><br><strong>(b)</strong> A standard trade pack contains $10$ bolts and $10$ nuts packed into an empty container. The mass of the empty container, $C\\text{ g}$, is modelled by $C \\sim \\text{N}(60.0, 4.0^2)$ independently of the contents.<br>Find the probability that the total mass of a randomly chosen trade pack exceeds $740\\text{ g}$.<br><br><strong>(c)</strong> Find the probability that the mass of a randomly chosen bolt is more than twice the mass of a randomly chosen nut.",
    "steps": [
        "<strong>(a) Combined mass of one bolt and one nut:</strong><br><br>Let $T = B + N$:\\begin{aligned} \\text{E}(T) &= 45.0 + 22.0 \\cr &= 67.0\\text{ g} \\end{aligned}Since $B$ and $N$ are independent, add their variances:\\begin{aligned} \\text{Var}(T) &= 1.8^2 + 1.2^2 \\cr &= 3.24 + 1.44 \\cr &= 4.68 \\end{aligned}So $T \\sim \\text{N}(67.0, 4.68)$. Standardising for $T > 70.0$:\\begin{aligned} P(T > 70.0) &= 1 - \\Phi\\left(\\dfrac{70 - 67}{\\sqrt{4.68}}\\right) \\cr &= 1 - \\Phi(1.387) \\cr &= 1 - 0.9173 \\cr &= 0.0827 \\end{aligned}",
        "<strong>(b) Total mass of a trade pack:</strong><br><br>Let $W = \\sum_{i=1}^{10} B_i + \\sum_{i=1}^{10} N_i + C$:\\begin{aligned} \\text{E}(W) &= 10(45) + 10(22) \\cr &\\quad + 60 \\cr &= 730\\text{ g} \\end{aligned}For the variance, sum the individual variances:\\begin{aligned} \\text{Var}(W) &= 10(1.8^2) \\cr &\\quad + 10(1.2^2) \\cr &\\quad + 4.0^2 \\cr &= 32.4 + 14.4 \\cr &\\quad + 16.0 \\cr &= 62.8 \\end{aligned}Standardising for $W > 740$:\\begin{aligned} P(W > 740) &= 1 - \\Phi\\left(\\dfrac{740 - 730}{\\sqrt{62.8}}\\right) \\cr &= 1 - \\Phi(1.262) \\cr &= 1 - 0.8965 \\cr &= 0.1035 \\end{aligned}",
        "<strong>(c) Bolt mass more than twice nut mass:</strong><br><br>We require $P(B > 2N)$, which rearranges to $P(B - 2N > 0)$.<br><br>Let $D = B - 2N$:\\begin{aligned} \\text{E}(D) &= 45 - 2(22) \\cr &= 1\\text{ g} \\end{aligned}Applying the linear variance rule $$\\text{Var}(aX + bY)$$ $$= a^2\\text{Var}(X) + b^2\\text{Var}(Y)$$:\\begin{aligned} \\text{Var}(D) &= 1.8^2 + (-2)^2(1.2^2) \\cr &= 3.24 + 4(1.44) \\cr &= 3.24 + 5.76 \\cr &= 9.0 \\end{aligned}So $\\sigma_D = \\sqrt{9.0} = 3.0$. Standardising for $D > 0$:\\begin{aligned} P(D > 0) &= P\\left(Z > \\dfrac{0 - 1}{3.0}\\right) \\cr &= P(Z > -0.333) \\cr &= \\Phi(0.333) \\cr &= 0.6305 \\end{aligned}",
        "Final Answer: (a) $0.0827$, (b) $0.1035$, (c) $0.6305$"
    ],
    "pi_options": [
        {
            "ans": "(a) $0.0827$, (b) $0.1035$, (c) $0.3695$",
            "feedback": "In part (c), you calculated $1 - \\Phi(0.333) = 0.3695$. Because $z = -0.333$ is negative, $P(Z > -0.333) = \\Phi(0.333) = 0.6305$."
        },
        {
            "ans": "(a) $0.0827$, (b) $0.0031$, (c) $0.6305$",
            "feedback": "In part (b), you evaluated $\\text{Var}(10B) = 10^2(1.8^2) = 324$. Because the pack contains $10$ independent bolts, you must add $10$ separate variances: $10 \\times 1.8^2 = 32.4$."
        },
        {
            "ans": "(a) $0.1587$, (b) $0.1035$, (c) $0.6305$",
            "feedback": "In part (a), you added the standard deviations directly ($1.8 + 1.2 = 3.0$). For independent variables, variances add: $\\sigma^2 = 1.8^2 + 1.2^2 = 4.68$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Sum of 10 Items vs 10 Times One Item",
        "content": "A classic trap is confusing the sum of $10$ independent items with scaling one item by $10$. When packing $10$ independent bolts, $\\text{Var}(B_1 + \\dots + B_{10}) = 10\\text{Var}(B) = 32.4$. In contrast, multiplying a single bolt by $10$ gives $\\text{Var}(10B) = 10^2\\text{Var}(B) = 324$."
    }
},
{
    "id": "050278",
    "group_id": "050276",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Continuous Distributions",
    "topic": "Normal Distribution",
    "subtopic": [
        "Sample Mean Hypothesis Testing",
        "Critical Values",
        "Type I Error"
    ],
    "img": false,
    "question": "A regional dairy fills cartons of fresh milk. The volume dispensed, $X\\text{ ml}$, is normally distributed with a known population standard deviation of $\\sigma = 12.0\\text{ ml}$ and a nominal target mean of $\\mu = 1000\\text{ ml}$.<br><br>Following maintenance work, the production manager suspects that the machine is underfilling cartons. A random sample of $25$ cartons is taken, yielding a sample mean volume of $\\bar{x} = 995.2\\text{ ml}$.<br><br><strong>(a)</strong> State suitable null and alternative hypotheses to test the manager's suspicion.<br><br><strong>(b)</strong> State the distribution of the sample mean, $\\bar{X}$, assuming the null hypothesis is true.<br><br><strong>(c)</strong> Test, at the $2.5\\%$ level of significance, whether there is evidence that the machine is underfilling cartons.<br><br><strong>(d)</strong> Determine the critical value of the sample mean, $\\bar{x}$, for this test at the $2.5\\%$ level of significance.<br><br><strong>(e)</strong> State the probability of making a Type I error in this test.",
    "steps": [
        "<strong>(a) Hypotheses:</strong><br><br>The manager specifically suspects underfilling, so the test is one-tailed:\\begin{aligned} &H_0: \\mu = 1000 \\cr &H_1: \\mu < 1000 \\end{aligned}",
        "<strong>(b) Distribution of $\\bar{X}$ under $H_0$:</strong><br><br>For sample size $n = 25$:\\begin{aligned} \\bar{X} \\sim \\text{N}\\left(1000, \\dfrac{12.0^2}{25}\\right) \\end{aligned}The standard error is:\\begin{aligned} \\sigma_{\\bar{x}} &= \\dfrac{12.0}{\\sqrt{25}} \\cr &= \\dfrac{12.0}{5} \\cr &= 2.4\\text{ ml} \\end{aligned}So $\\bar{X} \\sim \\text{N}(1000, 2.4^2)$.",
        "<strong>(c) Test statistic and conclusion:</strong><br><br>Standardising the observed sample mean:\\begin{aligned} z &= \\dfrac{995.2 - 1000}{2.4} \\cr &= \\dfrac{-4.8}{2.4} \\cr &= -2.0 \\end{aligned}For a lower-tail test at the $2.5\\%$ significance level, the critical value is:\\begin{aligned} z_{\\text{crit}} = -1.96 \\end{aligned}Comparing the test statistic:\\begin{aligned} -2.0 < -1.96 \\end{aligned}Because $-2.0$ falls inside the critical region, we reject $H_0$.<br><br>There is significant evidence at the $2.5\\%$ level that the machine is underfilling cartons.",
        "<strong>(d) Critical value of $\\bar{x}$:</strong><br><br>Using the critical $z$-value:\\begin{aligned} \\bar{x}_{\\text{crit}} &= 1000 - 1.96(2.4) \\cr &= 1000 - 4.704 \\cr &= 995.3\\text{ ml} \\end{aligned}",
        "<strong>(e) Probability of a Type I error:</strong><br><br>The probability of a Type I error (rejecting $H_0$ when it is actually true) is precisely the significance level of the test: $0.025$ (or $2.5\\%$).",
        "Final Answer: (a) $H_0: \\mu = 1000$, $H_1: \\mu < 1000$, (b) $\\bar{X} \\sim N(1000, 2.4^2)$, (c) Reject $H_0$, (d) $995.3\\text{ ml}$, (e) $0.025$"
    ],
    "pi_options": [
        {
            "ans": "(a) $H_0: \\mu = 1000$, $H_1: \\mu \\neq 1000$, (b) $\\bar{X} \\sim N(1000, 2.4^2)$, (c) Reject $H_0$, (d) $995.3\\text{ ml}$, (e) $0.025$",
            "feedback": "In part (a), the manager suspects underfilling, requiring a one-tailed test $H_1: \\mu < 1000$. A two-tailed test $H_1: \\mu \\neq 1000$ would only be used if testing for any change in fill volume."
        },
        {
            "ans": "(a) $H_0: \\mu = 1000$, $H_1: \\mu < 1000$, (b) $\\bar{X} \\sim N(1000, 12^2)$, (c) Reject $H_0$, (d) $995.3\\text{ ml}$, (e) $0.025$",
            "feedback": "In part (b), you used the population variance $\\sigma^2 = 12^2$ instead of the sample mean variance $\\dfrac{\\sigma^2}{n} = \\dfrac{12^2}{25} = 2.4^2$."
        },
        {
            "ans": "(a) $H_0: \\mu = 1000$, $H_1: \\mu < 1000$, (b) $\\bar{X} \\sim N(1000, 2.4^2)$, (c) Do not reject $H_0$, (d) $976.5\\text{ ml}$, (e) $0.050$",
            "feedback": "In part (c), $-2.0$ is more extreme than $-1.96$, so $H_0$ must be rejected. In part (e), the probability of a Type I error equals the chosen significance level of $0.025$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Type I Error Equals Significance Level",
        "content": "A Type I error is defined as rejecting the null hypothesis when it is true. The probability of this happening is simply the size of the critical region, which is always equal to the significance level $\\alpha$ (here, $0.025$)."
    }
},
{
    "id": "050279",
    "group_id": "050276",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Continuous Distributions",
    "topic": "Normal Distribution",
    "subtopic": [
        "Normal Approximation to Poisson",
        "Continuity Correction",
        "Interval Probabilities"
    ],
    "img": false,
    "question": "The number of incoming emergency calls received per hour by an emergency dispatch switchboard follows a Poisson distribution with mean $\\lambda = 36$.<br><br>Let $Y$ denote the total number of emergency calls received during a $2$-hour shift.<br><br><strong>(a)</strong> State the exact distribution of $Y$, including its parameter.<br><br><strong>(b)</strong> Explain why a normal distribution provides an appropriate approximation for the distribution of $Y$.<br><br><strong>(c)</strong> State the mean and the variance of the approximating normal distribution.<br><br><strong>(d)</strong> Using the normal approximation with a continuity correction, find the probability that the dispatch switchboard receives:<br>&emsp;<strong>(i)</strong> at least $80$ calls during a $2$-hour shift,<br>&emsp;<strong>(ii)</strong> between $65$ and $75$ calls inclusive during a $2$-hour shift.",
    "steps": [
        "<strong>(a) Exact distribution of $Y$:</strong><br><br>For a $2$-hour interval, the mean scales proportionally: $\\lambda = 36 \\times 2 = 72$:\\begin{aligned} Y \\sim \\text{Po}(72) \\end{aligned}",
        "<strong>(b) Justifying normal approximation:</strong><br><br>A normal approximation is appropriate because the Poisson parameter $\\lambda = 72$ is large (typically $\\lambda > 15$).",
        "<strong>(c) Parameters of approximating distribution:</strong><br><br>For a Poisson distribution, the mean and variance are both equal to $\\lambda$:\\begin{aligned} \\mu &= 72 \\cr \\sigma^2 &= 72 \\end{aligned}So the approximating distribution is $X \\sim \\text{N}(72, 72)$, with $\\sigma = \\sqrt{72} \\approx 8.485$.",
        "<strong>(d)(i) Probability of at least $80$ calls:</strong><br><br>Applying the continuity correction for $Y \\ge 80$ gives $X > 79.5$:\\begin{aligned} z &= \\dfrac{79.5 - 72}{\\sqrt{72}} \\cr &= \\dfrac{7.5}{8.485} \\cr &\\approx 0.884 \\end{aligned}Evaluating the upper-tail probability:\\begin{aligned} P(Y \\ge 80) &\\approx 1 - \\Phi(0.884) \\cr &= 1 - 0.8117 \\cr &= 0.1883 \\cr &\\approx 0.188 \\end{aligned}",
        "<strong>(d)(ii) Probability between $65$ and $75$ calls inclusive:</strong><br><br>Applying continuity corrections for $65 \\le Y \\le 75$ gives $64.5 < X < 75.5$:\\begin{aligned} z_1 &= \\dfrac{64.5 - 72}{8.485} \\cr &= \\dfrac{-7.5}{8.485} \\cr &\\approx -0.884 \\cr z_2 &= \\dfrac{75.5 - 72}{8.485} \\cr &= \\dfrac{3.5}{8.485} \\cr &\\approx 0.412 \\end{aligned}Evaluating the interval probability:\\begin{aligned} &P(-0.884 < Z < 0.412) \\cr &\\quad = \\Phi(0.412) - \\Phi(-0.884) \\cr &\\quad = 0.6599 - (1 - 0.8117) \\cr &\\quad = 0.6599 - 0.1883 \\cr &\\quad = 0.4716 \\cr &\\quad \\approx 0.472 \\end{aligned}",
        "Final Answer: (a) $Y \\sim \\text{Po}(72)$, (c) $\\mu = 72$, $\\sigma^2 = 72$, (d)(i) $0.188$, (ii) $0.472$"
    ],
    "pi_options": [
        {
            "ans": "(a) $Y \\sim \\text{Po}(72)$, (c) $\\mu = 72$, $\\sigma^2 = 72$, (d)(i) $0.161$, (ii) $0.472$",
            "feedback": "In part (d)(i), you used $80.5$ for the continuity correction. 'At least $80$' includes $80$, so the continuous interval starts at $79.5$, giving $z = 0.884$ and probability $0.188$."
        },
        {
            "ans": "(a) $Y \\sim \\text{Po}(72)$, (c) $\\mu = 72$, $\\sigma^2 = 72$, (d)(i) $0.188$, (ii) $0.428$",
            "feedback": "In part (d)(ii), you shrunk the interval to $[65.5, 74.5]$. Because the bounds are inclusive, the continuous region expands to $[64.5, 75.5]$."
        },
        {
            "ans": "(a) $Y \\sim \\text{Po}(36)$, (c) $\\mu = 36$, $\\sigma^2 = 36$, (d)(i) $0.188$, (ii) $0.472$",
            "feedback": "In part (a), you did not adjust the rate parameter for a $2$-hour period. The hourly rate is $36$, so for $2$ hours the parameter is $\\lambda = 36 \\times 2 = 72$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Poisson Mean and Variance Equality",
        "content": "A key feature of the Poisson distribution is that its mean and variance are identical: $\\text{E}(Y) = \\text{Var}(Y) = \\lambda$. When approximating $\\text{Po}(72)$ with a normal distribution, the standard deviation is always $\\sqrt{\\lambda} = \\sqrt{72}$."
    }
},
{
    "id": "050280",
    "group_id": "050276",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Continuous Distributions",
    "topic": "Normal Distribution",
    "subtopic": [
        "Symmetric Tolerance Intervals",
        "Standard Error",
        "Sample Size Determination"
    ],
    "img": false,
    "question": "The external diameter, $D\\text{ mm}$, of precision ball bearings produced by an automated lathe is modelled by a normal distribution with mean $\\mu = 15.00\\text{ mm}$ and standard deviation $\\sigma = 0.08\\text{ mm}$.<br><br><strong>(a)</strong> Find the probability that a randomly selected ball bearing has a diameter within $0.10\\text{ mm}$ of the target mean.<br><br><strong>(b)</strong> Bearings are considered acceptable for aerospace use if their diameter lies within the symmetric tolerance interval $[15.00 - k, 15.00 + k]$. Given that $98\\%$ of the manufactured bearings are acceptable, determine the value of $k$ to three significant figures.<br><br><strong>(c)</strong> A random sample of $n$ ball bearings is selected from the production line. Find the minimum sample size, $n$, required such that the probability that the sample mean diameter $\\bar{D}$ lies within $0.02\\text{ mm}$ of the true population mean is at least $0.95$.",
    "steps": [
        "<strong>(a) Probability within $0.10\\text{ mm}$ of the mean:</strong><br><br>We require $P(14.90 < D < 15.10)$:\\begin{aligned} z &= \\dfrac{0.10}{0.08} \\cr &= 1.25 \\end{aligned}Using the symmetry of the standard normal distribution:\\begin{aligned} & P(-1.25 < Z < 1.25) \\cr & \\qquad= 2\\Phi(1.25) - 1 \\cr & \\qquad= 2(0.8944) - 1 \\cr & \\qquad= 1.7888 - 1 \\cr & \\qquad= 0.7888 \\end{aligned}",
        "<strong>(b) Finding tolerance limit $k$ for $98\\%$ acceptability:</strong><br><br>A central area of $0.98$ leaves $0.01$ in each tail, so $\\Phi(z) = 0.99$:\\begin{aligned} z = 2.326 \\end{aligned}Relating $z$ to $k$:\\begin{aligned} \\dfrac{k}{0.08} &= 2.326 \\cr k &= 2.326 \\times 0.08 \\cr &= 0.18608 \\cr &\\approx 0.186\\text{ mm} \\end{aligned}",
        "<strong>(c) Determining minimum sample size $n$:</strong><br><br>The sample mean follows $\\bar{D} \\sim \\text{N}\\left(15.00, \\dfrac{0.08^2}{n}\\right)$. We require:\\begin{aligned} P(|\\bar{D} - 15.00| < 0.02) \\ge 0.95 \\end{aligned}Standardising the boundary:\\begin{aligned} z = \\dfrac{0.02}{0.08 / \\sqrt{n}} \\end{aligned}For a central probability of $0.95$, the critical $z$-value is $1.96$:\\begin{aligned} \\dfrac{0.02}{0.08 / \\sqrt{n}} &\\ge 1.96 \\cr 0.25\\sqrt{n} &\\ge 1.96 \\cr \\sqrt{n} &\\ge \\dfrac{1.96}{0.25} \\cr \\sqrt{n} &\\ge 7.84 \\cr n &\\ge 7.84^2 \\cr n &\\ge 61.4656 \\end{aligned}Since $n$ must be an integer, the minimum sample size is:\\begin{aligned} n = 62 \\end{aligned}",
        "Final Answer: (a) $0.7888$, (b) $k = 0.186\\text{ mm}$, (c) $n = 62$"
    ],
    "pi_options": [
        {
            "ans": "(a) $0.7888$, (b) $k = 0.164\\text{ mm}$, (c) $n = 62$",
            "feedback": "In part (b), you used $z = 2.054$ (from a one-tailed $98\\%$ value). For a symmetric central interval of $98\\%$, the upper tail contains $1\\%$, which gives $z = 2.326$ and $k = 0.186\\text{ mm}$."
        },
        {
            "ans": "(a) $0.7888$, (b) $k = 0.186\\text{ mm}$, (c) $n = 61$",
            "feedback": "In part (c), rounding down to $61$ gives a probability strictly below $0.95$. Because $n \\ge 61.47$, you must round up to the next integer: $n = 62$."
        },
        {
            "ans": "(a) $0.8944$, (b) $k = 0.186\\text{ mm}$, (c) $n = 62$",
            "feedback": "In part (a), $0.8944$ is $\\Phi(1.25)$. For the interval between $-1.25$ and $1.25$, you must calculate $2\\Phi(1.25) - 1 = 0.7888$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Always Round Sample Sizes Up",
        "content": "Whenever solving an inequality for sample size ($n \\ge 61.47$), you must always round up to the next integer, regardless of decimal size. Choosing $n = 61$ would fail the specification, making $n = 62$ the true minimum required sample."
    }
},
{
    "id": "050281",
    "group_id": "050281",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Probability Distributions",
    "topic": "Binomial Distribution",
    "subtopic": [
        "At Least One Probability",
        "One-Tailed Hypothesis Testing",
        "Test Improvement"
    ],
    "img": false,
    "question": "A software company has established that $30\\%$ of users who register for a free trial of an application upgrade to a paid subscription within their first month.<br><br>A random sample of $12$ new trial users is selected.<br><br><strong>(a)</strong> Calculate the probability that at least one of these $12$ users upgrades to a paid subscription within their first month.<br><br>Following the introduction of an interactive onboarding tutorial, the head of product believes that the proportion of users upgrading to a paid subscription has increased.<br><br>A random sample of $12$ new trial users who completed the interactive tutorial is selected. It is found that $7$ of them upgraded to a paid subscription within their first month.<br><br><strong>(b)</strong> Stating your hypotheses clearly, carry out a hypothesis test at the $5\\%$ level of significance to determine whether there is evidence to support the head of product's belief.<br><br><strong>(c)</strong> Suggest one way in which the design of this statistical test could be improved.",
    "steps": [
        "<strong>(a) Probability of at least one upgrade:</strong><br><br>Let $X \\sim \\text{B}(12, 0.30)$ denote the number of users upgrading. Using the complement of zero upgrades:\\begin{aligned} P(X \\ge 1) &= 1 - P(X = 0) \\cr &= 1 - (1 - 0.30)^{12} \\cr &= 1 - (0.70)^{12} \\cr &= 1 - 0.01384 \\cr &= 0.9862 \\end{aligned}",
        "<strong>(b) Hypothesis test:</strong><br><br>State the null and alternative hypotheses, where $p$ is the true population upgrade proportion:\\begin{aligned} &H_0: p = 0.30 \\cr &H_1: p > 0.30 \\end{aligned}Under $H_0$, the test distribution is $X \\sim \\text{B}(12, 0.30)$.<br><br>Calculate the probability of observing $7$ or more upgrades (the upper tail):\\begin{aligned} P(X \\ge 7) &= 1 - P(X \\le 6) \\cr &= 1 - 0.9614 \\cr &= 0.0386 \\end{aligned}Comparing to the significance level $\\alpha = 0.05$:\\begin{aligned} 0.0386 < 0.05 \\end{aligned}Because the $p$-value is less than $0.05$, we reject $H_0$.<br><br>There is significant evidence at the $5\\%$ level to support the head of product's belief that the upgrade proportion has increased.",
        "<strong>(c) Improving the test design:</strong><br><br>Use a larger sample size ($n > 12$). A larger sample increases the statistical power of the test, reduces the probability of a Type II error, and decreases the granularity of the discrete binomial distribution.",
        "Final Answer: (a) $0.9862$, (b) Reject $H_0$ as $0.0386 < 0.05$, (c) Increase sample size"
    ],
    "pi_options": [
        {
            "ans": "(a) $0.9862$, (b) Do not reject $H_0$ as $0.0386 < 0.05$, (c) Increase sample size",
            "feedback": "In part (b), when the $p$-value ($0.0386$) is less than the significance level ($0.05$), the decision rule is to reject $H_0$, not accept it."
        },
        {
            "ans": "(a) $0.0138$, (b) Reject $H_0$ as $0.0386 < 0.05$, (c) Increase sample size",
            "feedback": "In part (a), $0.0138$ is $P(X = 0)$. To find the probability of at least one upgrade, you must subtract this from $1$."
        },
        {
            "ans": "(a) $0.9862$, (b) Do not reject $H_0$ as $0.0792 > 0.05$, (c) Decrease sample size",
            "feedback": "In part (b), $P(X \\ge 7) = 1 - P(X \\le 6) = 0.0386$. In part (c), decreasing the sample size would increase error rates rather than improving the test."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: P-Value vs Critical Region Decision",
        "content": "In a one-tailed upper test, you reject $H_0$ if $P(X \\ge x) \\le \\alpha$. Here, $P(X \\ge 7) = 0.0386$, which is strictly less than $0.05$, placing the observation $7$ firmly inside the critical region."
    }
},
{
    "id": "050282",
    "group_id": "050281",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Probability Distributions",
    "topic": "Binomial Distribution",
    "subtopic": [
        "Lower-Tail Hypothesis Testing",
        "Critical Region",
        "Type I Error"
    ],
    "img": false,
    "question": "A manufacturing process produces microchips, of which historically $15\\%$ have minor cosmetic defects.<br><br>An engineering team introduces an upgraded laser-cutting tool intended to reduce the proportion of defective microchips. A random sample of $20$ microchips produced using the new tool is inspected, and exactly $1$ microchip is found to have a defect.<br><br><strong>(a)</strong> Stating your hypotheses clearly, test at the $5\\%$ significance level whether there is evidence that the new tool has reduced the defect rate.<br><br><strong>(b)</strong> Determine the critical region for this test at the $5\\%$ level of significance.<br><br><strong>(c)</strong> State the probability of committing a Type I error in this test.",
    "steps": [
        "<strong>(a) Lower-tail hypothesis test:</strong><br><br>State the hypotheses, where $p$ represents the true defect rate:\\begin{aligned} &H_0: p = 0.15 \\cr &H_1: p < 0.15 \\end{aligned}Under $H_0$, $X \\sim \\text{B}(20, 0.15)$, where $X$ is the number of defective microchips.<br><br>Calculate the probability of observing $1$ or fewer defects:\\begin{aligned} P(X = 0) &= (0.85)^{20} \\cr &\\approx 0.0388 \\end{aligned}\\begin{aligned} P(X = 1) &= 20(0.15)(0.85)^{19} \\cr &\\approx 0.1368 \\end{aligned}Summing these probabilities:\\begin{aligned} P(X \\le 1) &= 0.0388 + 0.1368 \\cr &= 0.1756 \\end{aligned}Comparing to the significance level $\\alpha = 0.05$:\\begin{aligned} 0.1756 > 0.05 \\end{aligned}Because $0.1756 > 0.05$, we do not reject $H_0$.<br><br>There is insufficient evidence at the $5\\%$ level to conclude that the new tool has reduced the defect rate.",
        "<strong>(b) Determining the critical region:</strong><br><br>We find the values in the lower tail where the cumulative probability is less than or equal to $0.05$:\\begin{aligned} P(X = 0) &= 0.0388 \\le 0.05 \\cr P(X \\le 1) &= 0.1756 > 0.05 \\end{aligned}Therefore, the critical region is:\\begin{aligned} X = 0 \\end{aligned}",
        "<strong>(c) Probability of a Type I error:</strong><br><br>A Type I error occurs when $H_0$ is rejected despite being true. This equals the probability of falling into the critical region under $H_0$:\\begin{aligned} P(X = 0) = 0.0388 \\quad (3.88\\%) \\end{aligned}",
        "Final Answer: (a) Do not reject $H_0$ as $0.1756 > 0.05$, (b) $X = 0$, (c) $0.0388$"
    ],
    "pi_options": [
        {
            "ans": "(a) Reject $H_0$ as $0.1756 > 0.05$, (b) $X = 0$, (c) $0.0388$",
            "feedback": "In part (a), when the $p$-value ($0.1756$) is greater than the significance level ($0.05$), the evidence is not strong enough to reject $H_0$."
        },
        {
            "ans": "(a) Do not reject $H_0$ as $0.1756 > 0.05$, (b) $X \\le 1$, (c) $0.0388$",
            "feedback": "In part (b), $P(X \\le 1) = 0.1756$, which is greater than $0.05$. Therefore, $X = 1$ cannot be part of the critical region at the $5\\%$ level."
        },
        {
            "ans": "(a) Do not reject $H_0$ as $0.1756 > 0.05$, (b) $X = 0$, (c) $0.0500$",
            "feedback": "In part (c), for a discrete distribution the probability of a Type I error is the actual significance level ($P(X = 0) = 0.0388$), not the nominal $0.05$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Critical Regions in Small Discrete Samples",
        "content": "Notice how strict the critical region becomes with $n = 20$ and $p = 0.15$. Only $X = 0$ achieves a cumulative probability below $0.05$. Observing even a single defect ($X = 1$) pushes the cumulative probability to $0.1756$, falling well outside the rejection zone."
    }
},
{
    "id": "050283",
    "group_id": "050281",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Probability Distributions",
    "topic": "Binomial Distribution",
    "subtopic": [
        "Two-Tailed Hypothesis Testing",
        "Asymmetric Critical Regions",
        "Actual Significance Level"
    ],
    "img": false,
    "question": "A plant geneticist investigates the inheritance of flower colour in a hybrid cross of sweet peas. Under standard genetic theory, the expected proportion of plants bearing purple flowers is $0.75$.<br><br>The geneticist suspects that environmental factors in a new greenhouse may be altering this inheritance ratio. A random sample of $20$ plants is grown in the greenhouse, and $11$ of them produce purple flowers.<br><br><strong>(a)</strong> State suitable null and alternative hypotheses to test whether the true proportion of plants producing purple flowers differs from $0.75$.<br><br><strong>(b)</strong> Test, at the $5\\%$ level of significance, whether there is evidence that the proportion of purple-flowered plants differs from $0.75$.<br><br><strong>(c)</strong> Determine the critical region for this two-tailed test, allocating as close to $2.5\\%$ as possible to each tail, and state the actual significance level of the test.",
    "steps": [
        "<strong>(a) Hypotheses:</strong><br><br>Where $p$ is the true proportion of plants with purple flowers:\\begin{aligned} &H_0: p = 0.75 \\cr &H_1: p \\neq 0.75 \\end{aligned}",
        "<strong>(b) Two-tailed hypothesis test:</strong><br><br>Under $H_0$, $X \\sim \\text{B}(20, 0.75)$, where $X$ is the number of purple-flowered plants.<br><br>Because the observed value $x = 11$ is less than the expected mean $\\text{E}(X) = 20(0.75) = 15$, we evaluate the lower tail:\\begin{aligned} P(X \\le 11) \\end{aligned}Letting $Y = 20 - X \\sim \\text{B}(20, 0.25)$ denote non-purple plants:\\begin{aligned} P(X \\le 11) &= P(Y \\ge 9) \\cr &= 1 - P(Y \\le 8) \\cr &= 1 - 0.9591 \\cr &= 0.0409 \\end{aligned}For a two-tailed test, double the one-tailed probability to find the $p$-value:\\begin{aligned} p\\text{-value} &= 2 \\times 0.0409 \\cr &= 0.0818 \\end{aligned}Comparing to $\\alpha = 0.05$:\\begin{aligned} 0.0818 > 0.05 \\end{aligned}Because the $p$-value exceeds $0.05$, we do not reject $H_0$.<br><br>There is insufficient evidence at the $5\\%$ level to suggest that the proportion differs from $0.75$.",
        "<strong>(c) Determining the critical region:</strong><br><br>We allocate up to $0.025$ to each tail.<br><br>For the lower tail:\\begin{aligned} P(X \\le 10) &= P(Y \\ge 10) \\cr &= 1 - 0.9861 \\cr &= 0.0139 \\le 0.025 \\cr P(X \\le 11) &= 0.0409 > 0.025 \\end{aligned}So the lower critical region is $X \\le 10$.<br><br>For the upper tail:\\begin{aligned} P(X \\ge 19) &= P(Y \\le 1) \\cr &= 0.0243 \\le 0.025 \\cr P(X \\ge 18) &= P(Y \\le 2) \\cr &= 0.0913 > 0.025 \\end{aligned}So the upper critical region is $X \\ge 19$.<br><br>The combined critical region is:\\begin{aligned} X \\le 10 \\quad \\text{or} \\quad X \\ge 19 \\end{aligned}Summing the two tails gives the actual significance level:\\begin{aligned} \\text{Actual level} &= 0.0139 + 0.0243 \\cr &= 0.0382 \\quad (3.82\\%) \\end{aligned}",
        "Final Answer: (a) $H_0: p = 0.75$, $H_1: p \\neq 0.75$, (b) Do not reject $H_0$, (c) $X \\le 10$ or $X \\ge 19$, and $0.0382$"
    ],
    "pi_options": [
        {
            "ans": "(a) $H_0: p = 0.75$, $H_1: p \\neq 0.75$, (b) Reject $H_0$, (c) $X \\le 10$ or $X \\ge 19$, and $0.0382$",
            "feedback": "In part (b), you compared the single-tail probability $0.0409$ to $0.05$ instead of doubling it for a two-tailed test ($2 \\times 0.0409 = 0.0818 > 0.05$)."
        },
        {
            "ans": "(a) $H_0: p = 0.75$, $H_1: p < 0.75$, (b) Do not reject $H_0$, (c) $X \\le 10$ or $X \\ge 19$, and $0.0382$",
            "feedback": "In part (a), the question asks whether the proportion *differs* from $0.75$, which specifies a two-tailed alternative hypothesis $H_1: p \\neq 0.75$."
        },
        {
            "ans": "(a) $H_0: p = 0.75$, $H_1: p \\neq 0.75$, (b) Do not reject $H_0$, (c) $X \\le 11$ or $X \\ge 18$, and $0.0500$",
            "feedback": "In part (c), $P(X \\le 11) = 0.0409 > 0.025$, so $11$ cannot be in the lower critical region. The actual significance level is $0.0139 + 0.0243 = 0.0382$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Doubling P-Values for Two-Tailed Tests",
        "content": "When evaluating a two-tailed binomial hypothesis using the $p$-value method, you must double the single tail probability: $$p\\text{-value}$$ &&= 2 \\times P(X \\le 11)$$ $$= 0.0818$$ Alternatively, compare the single-tail probability directly to half the significance level: $0.0409 > 0.025$."
    }
},
{
    "id": "050284",
    "group_id": "050281",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Probability Distributions",
    "topic": "Binomial Distribution",
    "subtopic": [
        "Sample Size Inequalities",
        "Logarithmic Solving",
        "High-Significance Testing"
    ],
    "img": false,
    "question": "The probability that an automated smoke detector triggers an audible alarm during a fire incident is $0.85$.<br><br><strong>(a)</strong> Find the minimum number of independent detectors, $n$, that must be installed in an auditorium to ensure that the probability that at least one detector triggers an alarm during an incident is greater than $0.999$.<br><br><strong>(b)</strong> A safety equipment manufacturer claims that an upgraded optical sensor has an alarm activation rate greater than $0.85$. In a trial of $25$ simulated fire incidents, the upgraded sensor successfully triggers an alarm on $24$ occasions.<br><br>Stating your hypotheses clearly, test the manufacturer's claim at the $1\\%$ level of significance.",
    "steps": [
        "<strong>(a) Finding minimum number of detectors $n$:</strong><br><br>Let $X \\sim \\text{B}(n, 0.85)$ denote the number of sounding detectors:\\begin{aligned} P(X \\ge 1) &> 0.999 \\cr 1 - P(X = 0) &> 0.999 \\cr 1 - (0.15)^n &> 0.999 \\cr (0.15)^n &< 0.001 \\end{aligned}Taking logarithms of both sides (reversing the inequality as $\\log(0.15) < 0$):\\begin{aligned} n\\log(0.15) &< \\log(0.001) \\cr n &> \\dfrac{\\log(0.001)}{\\log(0.15)} \\cr n &> \\dfrac{-3}{-0.8239} \\cr n &> 3.64 \\end{aligned}Since $n$ must be an integer, the minimum number is:\\begin{aligned} n = 4 \\end{aligned}",
        "<strong>(b) Testing the manufacturer's claim:</strong><br><br>State the hypotheses, where $p$ is the true activation probability:\\begin{aligned} &H_0: p = 0.85 \\cr &H_1: p > 0.85 \\end{aligned}Under $H_0$, $X \\sim \\text{B}(25, 0.85)$.<br><br>Calculate the upper tail probability for $x \\ge 24$:\\begin{aligned} &P(X \\ge 24)\\cr&= P(X = 24) + P(X = 25) \\end{aligned}Evaluating each term:\\begin{aligned} P(X = 24) &= 25(0.85)^{24}(0.15) \\cr &\\approx 0.0759 \\cr P(X = 25) &= (0.85)^{25} \\cr &\\approx 0.0172 \\end{aligned}Summing these values:\\begin{aligned} P(X \\ge 24) &= 0.0759 + 0.0172 \\cr &= 0.0931 \\end{aligned}Comparing to the significance level $\\alpha = 0.01$:\\begin{aligned} 0.0931 > 0.01 \\end{aligned}Because $0.0931 > 0.01$, we do not reject $H_0$.<br><br>There is insufficient evidence at the $1\\%$ level to support the manufacturer's claim that the activation rate exceeds $0.85$.",
        "Final Answer: (a) $n = 4$, (b) Do not reject $H_0$ as $0.0931 > 0.01$"
    ],
    "pi_options": [
        {
            "ans": "(a) $n = 3$, (b) Do not reject $H_0$ as $0.0931 > 0.01$",
            "feedback": "In part (a), with $n = 3$, $$1 - 0.15^3 = 1 - 0.003375$$ $$= 0.996625 < 0.999$$ You must round up from $3.64$ to $n = 4$."
        },
        {
            "ans": "(a) $n = 4$, (b) Reject $H_0$ as $0.0931 > 0.01$",
            "feedback": "In part (b), because the $p$-value ($0.0931$) is greater than the significance level ($0.01$), the null hypothesis must not be rejected."
        },
        {
            "ans": "(a) $n = 4$, (b) Reject $H_0$ as $0.0172 > 0.01$",
            "feedback": "In part (b), you evaluated $P(X = 25)$ only. The test statistic requires the cumulative tail $$P(X \\ge 24)$$ $$ = 0.0759 + 0.0172$$ $$ = 0.0931$$"
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Inequality Reversal with Logarithms",
        "content": "When solving $(0.15)^n < 0.001$, remember that the logarithm of any number strictly between $0$ and $1$ is negative. Dividing by $\\log(0.15)$ flips the inequality sign from $<$ to $>$, giving $n > 3.64$, so $n = 4$."
    }
},
{
    "id": "050285",
    "group_id": "050281",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Probability Distributions",
    "topic": "Binomial Distribution",
    "subtopic": [
        "Acceptance Sampling",
        "Type I and Type II Errors",
        "Statistical Power"
    ],
    "img": false,
    "question": "A component manufacturer supplies batches of precision resistors. A client applies an acceptance sampling plan to decide whether to accept or reject a large consignment:<br>• A random sample of $15$ resistors is tested from the consignment.<br>• The consignment is accepted if at most $1$ resistor is defective ($X \\le 1$).<br>• The consignment is rejected if $2$ or more resistors are defective ($X \\ge 2$).<br><br>The client tests the null hypothesis $H_0: p = 0.05$ against the alternative hypothesis $H_1: p > 0.05$, where $p$ is the true proportion of defective resistors in the consignment.<br><br><strong>(a)</strong> State the critical region for rejecting the consignment.<br><br><strong>(b)</strong> Calculate the probability of a Type I error (the producer's risk of having an acceptable consignment rejected).<br><br><strong>(c)</strong> If a substandard consignment with a true defect rate of $p = 0.20$ is delivered, calculate the probability of a Type II error (the consumer's risk of accepting a substandard consignment).<br><br><strong>(d)</strong> Calculate the statistical power of the test against the specific alternative $p = 0.20$.",
    "steps": [
        "<strong>(a) Critical region:</strong><br><br>The consignment is rejected when $2$ or more defective resistors are found:\\begin{aligned} X \\ge 2 \\end{aligned}",
        "<strong>(b) Probability of a Type I error:</strong><br><br>A Type I error is rejecting $H_0$ when $H_0$ is true ($p = 0.05$):\\begin{aligned} &P(\\text{Type I})\\cr &= P(X \\ge 2 \\mid p = 0.05) \\cr &= 1 - P(X \\le 1 \\mid p = 0.05) \\end{aligned}Under $X \\sim \\text{B}(15, 0.05)$:\\begin{aligned} P(X = 0) &= (0.95)^{15} \\cr &\\approx 0.4633 \\cr P(X = 1) &= 15(0.05)(0.95)^{14} \\cr &\\approx 0.3658 \\end{aligned}Summing these values:\\begin{aligned} P(X \\le 1) &= 0.4633 + 0.3658 \\cr &= 0.8291 \\end{aligned}Subtracting from $1$:\\begin{aligned} P(\\text{Type I}) &= 1 - 0.8291 \\cr &= 0.1709 \\quad (17.09\\%) \\end{aligned}",
        "<strong>(c) Probability of a Type II error:</strong><br><br>A Type II error is accepting $H_0$ when $H_1$ is true ($p = 0.20$):\\begin{aligned} P(\\text{Type II}) &= P(X \\le 1 \\mid p = 0.20) \\end{aligned}Under $X \\sim \\text{B}(15, 0.20)$:\\begin{aligned} P(X = 0) &= (0.80)^{15} \\cr &\\approx 0.0352 \\cr P(X = 1) &= 15(0.20)(0.80)^{14} \\cr &\\approx 0.1319 \\end{aligned}Adding these values:\\begin{aligned} P(\\text{Type II}) &= 0.0352 + 0.1319 \\cr &= 0.1671 \\quad (16.71\\%) \\end{aligned}",
        "<strong>(d) Statistical power of the test:</strong><br><br>The power is the probability of correctly rejecting a false null hypothesis:\\begin{aligned} \\text{Power} &= 1 - P(\\text{Type II}) \\cr &= 1 - 0.1671 \\cr &= 0.8329 \\quad (83.29\\%) \\end{aligned}",
        "Final Answer: (a) $X \\ge 2$, (b) $0.1709$, (c) $0.1671$, (d) $0.8329$"
    ],
    "pi_options": [
        {
            "ans": "(a) $X \\ge 2$, (b) $0.8291$, (c) $0.1671$, (d) $0.8329$",
            "feedback": "In part (b), $0.8291$ is the probability of accepting $H_0$. A Type I error is rejecting $H_0$ when it is true, which equals $1 - 0.8291 = 0.1709$."
        },
        {
            "ans": "(a) $X \\ge 2$, (b) $0.1709$, (c) $0.8329$, (d) $0.1671$",
            "feedback": "In parts (c) and (d), you reversed the Type II error and the power. The Type II error is accepting $H_0$ ($0.1671$), and the power is rejecting $H_0$ ($1 - 0.1671 = 0.8329$)."
        },
        {
            "ans": "(a) $X \\le 1$, (b) $0.1709$, (c) $0.1671$, (d) $0.8329$",
            "feedback": "In part (a), the critical region is the set of values that lead to the *rejection* of $H_0$, which is $X \\ge 2$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Power and Error Duality",
        "content": "Always remember the relationship $\\text{Power} = 1 - \\beta$, where $\\beta$ is the probability of a Type II error. Power measures the test's ability to detect a defect when one actually exists—here, an $83.29\\%$ chance of intercepting a substandard consignment."
    }
},
{
    "id": "050286",
    "group_id": "050286",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Continuous Distributions",
    "topic": "Normal Distribution",
    "subtopic": [
        "Hypothesis Testing for the Mean",
        "Two-Tailed Test",
        "Contextual Explanation"
    ],
    "img": false,
    "question": "A long-serving fleet operations manager at a logistics company informs the newly appointed manager that the daily delivery mileage of company vans is normally distributed with a mean of $145.0\\text{ km}$ and a standard deviation of $18.0\\text{ km}$.<br><br>The new manager believes that the daily delivery mileage during the peak holiday season will have a different mean. Subsequently, she randomly selects $36$ daily delivery mileage records from the holiday season. The sample mean for this sample is $150.8\\text{ km}$.<br><br><strong>(a)</strong> Stating your hypotheses clearly, carry out a hypothesis test to show that the new manager's belief can be supported at the $10\\%$ level of significance.<br><br><strong>(b)</strong> In this context, give one practical reason why the new manager's belief could be true.",
    "steps": [
        "<strong>(a) Hypothesis test for a difference in mean mileage:</strong><br><br>State the null and alternative hypotheses, where $\\mu$ is the population mean daily mileage during the holiday season:\\begin{aligned} &H_0: \\mu = 145.0 \\cr &H_1: \\mu \\neq 145.0 \\end{aligned}Under $H_0$, the sample mean follows:\\begin{aligned} \\bar{X} \\sim \\text{N}\\left(145.0, \\dfrac{18.0^2}{36}\\right) \\end{aligned}Calculate the standard error:\\begin{aligned} \\sigma_{\\bar{x}} &= \\dfrac{18.0}{\\sqrt{36}} \\cr &= \\dfrac{18.0}{6} \\cr &= 3.0\\text{ km} \\end{aligned}Calculate the test statistic:\\begin{aligned} z &= \\dfrac{150.8 - 145.0}{3.0} \\cr &= \\dfrac{5.8}{3.0} \\cr &\\approx 1.933 \\end{aligned}For a two-tailed test at the $10\\%$ significance level, the critical values are:\\begin{aligned} z_{\\text{crit}} = \\pm 1.645 \\end{aligned}Comparing the test statistic:\\begin{aligned} 1.933 > 1.645 \\end{aligned}Because the test statistic exceeds the critical value, we reject $H_0$.<br><br>There is significant evidence at the $10\\%$ level to support the new manager's belief that the mean daily mileage differs during the peak holiday season.",
        "<strong>(b) Practical context:</strong><br><br>During the peak holiday season, increased consumer demand requires vans to make more deliveries and complete longer routes, leading to a higher average daily mileage.",
        "Final Answer: (a) Reject $H_0$ as $1.933 > 1.645$, (b) Increased seasonal delivery volume"
    ],
    "pi_options": [
        {
            "ans": "(a) Do not reject $H_0$ as $1.933 < 1.960$, (b) Increased seasonal delivery volume",
            "feedback": "In part (a), $1.960$ is the critical value for a $5\\%$ two-tailed test. The question specifies a $10\\%$ significance level, which has critical values $z = \\pm 1.645$, leading to the rejection of $H_0$."
        },
        {
            "ans": "(a) Reject $H_0$ as $1.933 > 1.282$, (b) Increased seasonal delivery volume",
            "feedback": "In part (a), $1.282$ is the critical value for a $10\\%$ one-tailed test. The belief states that the mean is 'different', requiring a two-tailed test with critical values $\\pm 1.645$."
        },
        {
            "ans": "(a) Reject $H_0$ as $1.933 > 1.645$, (b) Vans require more frequent servicing",
            "feedback": "In part (b), more frequent servicing does not explain why delivery mileage changes; the change in mileage is driven by higher delivery volume and extended delivery routes."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Matching Alpha to Tail Structure",
        "content": "Notice that at the $5\\%$ two-tailed level ($z_{\\text{crit}} = 1.960$), we would fail to reject $H_0$ because $1.933 < 1.960$. Specifying a $10\\%$ two-tailed level puts $5\\%$ into each tail ($z_{\\text{crit}} = 1.645$), allowing the manager's claim to be accepted."
    }
},
{
    "id": "050287",
    "group_id": "050286",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Continuous Distributions",
    "topic": "Normal Distribution",
    "subtopic": [
        "One-Tailed Test for the Mean",
        "P-Value Calculation",
        "Critical Value of Sample Mean"
    ],
    "img": false,
    "question": "A bottling plant fills bottles of sparkling mineral water. The volume of water dispensed per bottle, $V\\text{ ml}$, is normally distributed with mean $750.0\\text{ ml}$ and standard deviation $8.0\\text{ ml}$.<br><br>Following the installation of a new dispensing valve, the quality assurance manager suspects that the machine is overfilling the bottles.<br><br>A random sample of $16$ bottles is tested, yielding a sample mean volume of $754.2\\text{ ml}$.<br><br><strong>(a)</strong> State suitable null and alternative hypotheses to test the manager's suspicion.<br><br><strong>(b)</strong> Stating the distribution of the sample mean under the null hypothesis, test the manager's suspicion at the $5\\%$ level of significance.<br><br><strong>(c)</strong> Calculate the $p$-value for this test.<br><br><strong>(d)</strong> Determine the critical value of the sample mean, $\\bar{v}$, for this test at the $5\\%$ level of significance.",
    "steps": [
        "<strong>(a) Hypotheses:</strong><br><br>The manager suspects overfilling, which specifies an upper-tail test:\\begin{aligned} &H_0: \\mu = 750.0 \\cr &H_1: \\mu > 750.0 \\end{aligned}",
        "<strong>(b) Test of the manager's suspicion:</strong><br><br>Under $H_0$, the sample mean follows:\\begin{aligned} \\bar{V} \\sim \\text{N}\\left(750.0, \\dfrac{8.0^2}{16}\\right) \\end{aligned}The standard error is:\\begin{aligned} \\sigma_{\\bar{v}} &= \\dfrac{8.0}{\\sqrt{16}} \\cr &= \\dfrac{8.0}{4} \\cr &= 2.0\\text{ ml} \\end{aligned}Calculate the test statistic:\\begin{aligned} z &= \\dfrac{754.2 - 750.0}{2.0} \\cr &= \\dfrac{4.2}{2.0} \\cr &= 2.10 \\end{aligned}For an upper-tail test at the $5\\%$ significance level, the critical value is:\\begin{aligned} z_{\\text{crit}} = 1.645 \\end{aligned}Comparing the test statistic:\\begin{aligned} 2.10 > 1.645 \\end{aligned}Because $z > z_{\\text{crit}}$, we reject $H_0$.<br><br>There is significant evidence at the $5\\%$ level that the machine is overfilling bottles.",
        "<strong>(c) Calculating the $p$-value:</strong><br><br>Evaluating the upper-tail probability for $z = 2.10$:\\begin{aligned} p\\text{-value} &= P(Z > 2.10) \\cr &= 1 - \\Phi(2.10) \\cr &= 1 - 0.9821 \\cr &= 0.0179 \\end{aligned}",
        "<strong>(d) Critical value of $\\bar{v}$:</strong><br><br>Using the critical value $z_{\\text{crit}} = 1.645$:\\begin{aligned} \\bar{v}_{\\text{crit}} &= 750.0 + 1.645(2.0) \\cr &= 750.0 + 3.29 \\cr &= 753.29 \\cr &\\approx 753.3\\text{ ml} \\end{aligned}",
        "Final Answer: (a) $H_0: \\mu = 750$, $H_1: \\mu > 750$, (b) Reject $H_0$, (c) $0.0179$, (d) $753.3\\text{ ml}$"
    ],
    "pi_options": [
        {
            "ans": "(a) $H_0: \\mu = 750$, $H_1: \\mu \\neq 750$, (b) Reject $H_0$, (c) $0.0179$, (d) $753.3\\text{ ml}$",
            "feedback": "In part (a), the manager specifically suspects overfilling, which requires a one-tailed test $H_1: \\mu > 750$, not a two-tailed test."
        },
        {
            "ans": "(a) $H_0: \\mu = 750$, $H_1: \\mu > 750$, (b) Reject $H_0$, (c) $0.0358$, (d) $753.3\\text{ ml}$",
            "feedback": "In part (c), you doubled the tail probability ($2 \\times 0.0179 = 0.0358$). For a one-tailed test, the $p$-value is simply the single tail probability $P(Z > 2.10) = 0.0179$."
        },
        {
            "ans": "(a) $H_0: \\mu = 750$, $H_1: \\mu > 750$, (b) Do not reject $H_0$, (c) $0.0179$, (d) $763.2\\text{ ml}$",
            "feedback": "In part (b), you standardised using $\\sigma = 8.0$ instead of the standard error $\\dfrac{\\sigma}{\\sqrt{n}} = 2.0$, producing an incorrect $z$-score of $0.525$."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Critical Value vs Test Statistic Equivalence",
        "content": "Notice how parts (b) and (d) confirm each other: the observed sample mean of $754.2\\text{ ml}$ exceeds the critical boundary of $753.3\\text{ ml}$, which corresponds directly to the test statistic $z = 2.10$ exceeding $z_{\\text{crit}} = 1.645$."
    }
},
{
    "id": "050288",
    "group_id": "050286",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Continuous Distributions",
    "topic": "Normal Distribution",
    "subtopic": [
        "Central Limit Theorem",
        "Two-Tailed Hypothesis Testing",
        "Confidence Intervals"
    ],
    "img": false,
    "question": "The duration of service transactions, $T$ seconds, at an automated banking kiosk has an unknown distribution with mean $\\mu = 85.0\\text{ seconds}$ and standard deviation $\\sigma = 24.0\\text{ seconds}$.<br><br>A branch manager suspects that the introduction of a redesigned touch-screen interface has altered the population mean transaction time.<br><br>She records the transaction times for a random sample of $64$ customers using the redesigned interface, obtaining a sample mean of $\\bar{t} = 79.5\\text{ seconds}$.<br><br><strong>(a)</strong> Explain how the Central Limit Theorem enables a hypothesis test to be carried out even though the population distribution of $T$ is unknown.<br><br><strong>(b)</strong> Stating your hypotheses clearly, test at the $5\\%$ level of significance whether there is evidence that the mean transaction time has changed.<br><br><strong>(c)</strong> Calculate a $95\\%$ confidence interval for the new population mean transaction time, $\\mu$.",
    "steps": [
        "<strong>(a) Application of the Central Limit Theorem:</strong><br><br>The Central Limit Theorem states that for a large sample size ($n \\ge 30$), the distribution of the sample mean $\\bar{T}$ is approximately normal regardless of the underlying population distribution. Because $n = 64$ is large, we can model $\\bar{T}$ as normally distributed.",
        "<strong>(b) Hypothesis test:</strong><br><br>State the hypotheses for a two-tailed test:\\begin{aligned} &H_0: \\mu = 85.0 \\cr &H_1: \\mu \\neq 85.0 \\end{aligned}Calculate the standard error:\\begin{aligned} \\sigma_{\\bar{t}} &= \\dfrac{24.0}{\\sqrt{64}} \\cr &= \\dfrac{24.0}{8} \\cr &= 3.0\\text{ s} \\end{aligned}Calculate the test statistic:\\begin{aligned} z &= \\dfrac{79.5 - 85.0}{3.0} \\cr &= \\dfrac{-5.5}{3.0} \\cr &\\approx -1.833 \\end{aligned}For a two-tailed test at the $5\\%$ significance level, the critical values are:\\begin{aligned} z_{\\text{crit}} = \\pm 1.960 \\end{aligned}Comparing the test statistic:\\begin{aligned} -1.833 > -1.960 \\end{aligned}Because $-1.833$ does not fall into the critical region, we do not reject $H_0$.<br><br>There is insufficient evidence at the $5\\%$ level to suggest that the mean transaction time has changed.",
        "<strong>(c) $95\\%$ confidence interval:</strong><br><br>Using the formula $\\bar{t} \\pm 1.960\\sigma_{\\bar{t}}$:\\begin{aligned} \\bar{t} \\pm 1.960(3.0) &= 79.5 \\pm 5.88 \\end{aligned}Evaluating the limits:\\begin{aligned} [79.5 - 5.88, 79.5 + 5.88] &= [73.62, 85.38] \\cr &\\approx [73.6, 85.4]\\text{ s} \\end{aligned}",
        "Final Answer: (a) CLT guarantees normal sample mean for large $n$, (b) Do not reject $H_0$, (c) $[73.6, 85.4]\\text{ s}$"
    ],
    "pi_options": [
        {
            "ans": "(a) CLT guarantees normal sample mean for large $n$, (b) Reject $H_0$, (c) $[73.6, 85.4]\\text{ s}$",
            "feedback": "In part (b), $|-1.833| = 1.833 < 1.960$, so the test statistic falls outside the critical region. $H_0$ must not be rejected."
        },
        {
            "ans": "(a) CLT guarantees the population is normal, (b) Do not reject $H_0$, (c) $[73.6, 85.4]\\text{ s}$",
            "feedback": "In part (a), the Central Limit Theorem applies to the distribution of the *sample mean*, not the population itself. The population distribution remains non-normal."
        },
        {
            "ans": "(a) CLT guarantees normal sample mean for large $n$, (b) Do not reject $H_0$, (c) $[76.5, 82.5]\\text{ s}$",
            "feedback": "In part (c), you used a critical value of $1.0$ instead of $1.960$. The margin of error is $1.960 \\times 3.0 = 5.88\\text{ s}$."
        }
    ],
    "bradley_insight": {
        "type": "deeper",
        "title": "The Head Teacher's Eye: Duality of Tests and Confidence Intervals",
        "content": "Notice how the $95\\%$ confidence interval $[73.6, 85.4]\\text{ s}$ contains the baseline value $85.0\\text{ s}$. When a $95\\%$ confidence interval contains the hypothesized null parameter, a two-tailed test at the $5\\%$ level will always fail to reject $H_0$."
    }
},
{
    "id": "050289",
    "group_id": "050286",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Continuous Distributions",
    "topic": "Normal Distribution",
    "subtopic": [
        "Critical Regions",
        "Type II Error",
        "Sample Size Determination"
    ],
    "img": false,
    "question": "A food packaging facility produces packets of breakfast cereal with a stated nominal net mass of $500.0\\text{ g}$. The mass of a packet, $W\\text{ g}$, is normally distributed with standard deviation $\\sigma = 15.0\\text{ g}$.<br><br>The quality control team tests the null hypothesis $H_0: \\mu = 500.0\\text{ g}$ against the alternative hypothesis $H_1: \\mu < 500.0\\text{ g}$ at the $2.5\\%$ level of significance using a random sample of size $n$.<br><br><strong>(a)</strong> If a sample of size $n = 25$ packets is taken:<br>&emsp;<strong>(i)</strong> find the critical region for the sample mean $\\bar{w}$,<br>&emsp;<strong>(ii)</strong> find the probability of committing a Type II error if the true population mean mass has slipped to $\\mu = 490.0\\text{ g}$.<br><br><strong>(b)</strong> The quality control team wishes to adjust the sample size so that the lower boundary of the critical region is exactly $\\bar{w} = 494.0\\text{ g}$ at the $2.5\\%$ significance level ($z = -1.960$). Determine the required sample size, $n$.",
    "steps": [
        "<strong>(a)(i) Finding the critical region for $n = 25$:</strong><br><br>Calculate the standard error:\\begin{aligned} \\sigma_{\\bar{w}} &= \\dfrac{15.0}{\\sqrt{25}} \\cr &= \\dfrac{15.0}{5} \\cr &= 3.0\\text{ g} \\end{aligned}For a lower-tail test at the $2.5\\%$ significance level, $z_{\\text{crit}} = -1.960$:\\begin{aligned} \\bar{w}_{\\text{crit}} &= 500.0 - 1.960(3.0) \\cr &= 500.0 - 5.88 \\cr &= 494.12\\text{ g} \\end{aligned}The critical region is:\\begin{aligned} \\bar{w} \\le 494.12\\text{ g} \\end{aligned}",
        "<strong>(a)(ii) Probability of a Type II error when $\\mu = 490.0$:</strong><br><br>A Type II error occurs when $H_0$ is accepted despite being false. We accept $H_0$ when $\\bar{w} > 494.12\\text{ g}$:\\begin{aligned}& P(\\text{Type II})\\cr &= P(\\bar{W} > 494.12 \\mid \\mu = 490.0) \\end{aligned}Standardising under the true mean $\\mu = 490.0\\text{ g}$:\\begin{aligned} z &= \\dfrac{494.12 - 490.0}{3.0} \\cr &= \\dfrac{4.12}{3.0} \\cr &\\approx 1.373 \\end{aligned}Evaluating the upper-tail probability:\\begin{aligned} P(Z > 1.373) &= 1 - \\Phi(1.373) \\cr &= 1 - 0.9151 \\cr &= 0.0849 \\quad (8.49\\%) \\end{aligned}",
        "<strong>(b) Finding required sample size $n$:</strong><br><br>Setting the critical boundary equal to $494.0\\text{ g}$:\\begin{aligned} 500.0 - 1.960\\left(\\dfrac{15.0}{\\sqrt{n}}\\right) &= 494.0 \\cr 6.0 &= \\dfrac{29.4}{\\sqrt{n}} \\cr \\sqrt{n} &= \\dfrac{29.4}{6.0} \\cr &= 4.9 \\cr n &= 4.9^2 \\cr &= 24.01 \\end{aligned}Rounding to the nearest integer gives:\\begin{aligned} n = 24 \\end{aligned}",
        "Final Answer: (a)(i) $\\bar{w} \\le 494.12\\text{ g}$, (ii) $0.0849$, (b) $n = 24$"
    ],
    "pi_options": [
        {
            "ans": "(a)(i) $\\bar{w} \\le 494.12\\text{ g}$, (ii) $0.9151$, (b) $n = 24$",
            "feedback": "In part (a)(ii), $0.9151$ is $\\Phi(1.373)$, the probability of rejecting $H_0$. A Type II error is accepting $H_0$, which is the upper tail: $1 - 0.9151 = 0.0849$."
        },
        {
            "ans": "(a)(i) $\\bar{w} \\ge 494.12\\text{ g}$, (ii) $0.0849$, (b) $n = 24$",
            "feedback": "In part (a)(i), the test is for underfilling ($H_1: \\mu < 500$), so the critical region lies in the lower tail: $\\bar{w} \\le 494.12\\text{ g}$."
        },
        {
            "ans": "(a)(i) $\\bar{w} \\le 494.12\\text{ g}$, (ii) $0.0849$, (b) $n = 5$",
            "feedback": "In part (b), $\\sqrt{n} = 4.9$, so $n = 4.9^2 = 24.01 \\approx 24$. You must square $4.9$ rather than leaving it unsquared."
        }
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Shifting Distributions for Type II Error",
        "content": "To calculate the probability of a Type II error, keep the acceptance boundary fixed from the original test ($\\bar{w} > 494.12$) and re-standardise using the new, true mean ($\\mu = 490.0$). The standard error $\\sigma_{\\bar{w}} = 3.0$ remains unchanged."
    }
},
{
    "id": "050290",
    "group_id": "050286",
    "branch": "Statistics",
    "board": "CCEA",
    "level": "A",
    "major_area": "Continuous Distributions",
    "topic": "Normal Distribution",
    "subtopic": [
        "Difference of Two Sample Means",
        "Two-Sample Hypothesis Testing",
        "Variance Addition Rule"
    ],
    "img": false,
    "question": "An agricultural research station investigates the efficacy of two distinct soil conditioning treatments, Treatment A and Treatment B, on the yield of commercial tomato crops.<br><br>• The yield per plot using Treatment A follows a normal distribution with mean $\\mu_A$ and standard deviation $\\sigma_A = 4.2\\text{ kg}$.<br>• The yield per plot using Treatment B follows a normal distribution with mean $\\mu_B$ and standard deviation $\\sigma_B = 3.6\\text{ kg}$.<br><br>A random sample of $36$ plots given Treatment A produces a sample mean yield of $\\bar{x}_A = 48.5\\text{ kg}$.<br>An independent random sample of $49$ plots given Treatment B produces a sample mean yield of $\\bar{x}_B = 46.2\\text{ kg}$.<br><br><strong>(a)</strong> State suitable null and alternative hypotheses to test whether Treatment A produces a higher mean yield than Treatment B.<br><br><strong>(b)</strong> State the distribution of the difference in sample means, $\\bar{X}_A - \\bar{X}_B$, assuming the null hypothesis is true.<br><br><strong>(c)</strong> Test, at the $1\\%$ level of significance, whether there is evidence that Treatment A produces a higher mean yield than Treatment B.<br><br><strong>(d)</strong> State an essential statistical assumption regarding the two samples required for this test to be valid.",
    "steps": [
        "<strong>(a) Hypotheses:</strong><br><br>Testing whether Treatment A produces a higher mean yield than Treatment B:\\begin{aligned} &H_0: \\mu_A = \\mu_B \\cr &H_1: \\mu_A > \\mu_B \\end{aligned}(Equivalently, $H_0: \\mu_A - \\mu_B = 0$ versus $H_1: \\mu_A - \\mu_B > 0$).",
        "<strong>(b) Distribution of $\\bar{X}_A - \\bar{X}_B$ under $H_0$:</strong><br><br>Under $H_0$, the mean difference is $0$. Summing the independent variances of the sample means:\\begin{aligned} \\text{Var}(\\bar{X}_A - \\bar{X}_B) &= \\dfrac{\\sigma_A^2}{n_A} + \\dfrac{\\sigma_B^2}{n_B} \\cr &= \\dfrac{4.2^2}{36} + \\dfrac{3.6^2}{49} \\cr &= \\dfrac{17.64}{36} + \\dfrac{12.96}{49} \\cr &= 0.49 + 0.2645 \\cr &= 0.7545 \\end{aligned}Therefore:\\begin{aligned} \\bar{X}_A - \\bar{X}_B \\sim \\text{N}(0, 0.7545) \\end{aligned}",
        "<strong>(c) Hypothesis test at $1\\%$ significance level:</strong><br><br>Calculate the standard error:\\begin{aligned} \\text{SE} &= \\sqrt{0.7545} \\cr &\\approx 0.8686\\text{ kg} \\end{aligned}Observed difference in sample means:\\begin{aligned} \\bar{x}_A - \\bar{x}_B &= 48.5 - 46.2 \\cr &= 2.3\\text{ kg} \\end{aligned}Calculate the test statistic:\\begin{aligned} z &= \\dfrac{2.3 - 0}{0.8686} \\cr &\\approx 2.648 \\end{aligned}For an upper-tail test at the $1\\%$ level, the critical value is:\\begin{aligned} z_{\\text{crit}} = 2.326 \\end{aligned}Comparing the test statistic:\\begin{aligned} 2.648 > 2.326 \\end{aligned}Because $z > z_{\\text{crit}}$, we reject $H_0$.<br><br>There is significant evidence at the $1\\%$ level that Treatment A produces a higher mean yield than Treatment B.",
        "<strong>(d) Essential statistical assumption:</strong><br><br>The two samples must be completely independent of each other.",
        "Final Answer: (a) $H_0: \\mu_A = \\mu_B$, $H_1: \\mu_A > \\mu_B$, (b) $N(0, 0.7545)$, (c) Reject $H_0$, (d) Independent samples"
    ],
    "pi_options": [
        {
            "ans": "(a) $H_0: \\mu_A = \\mu_B$, $H_1: \\mu_A > \\mu_B$, (b) $N(0, 0.7545)$, (c) Do not reject $H_0$, (d) Independent samples",
            "feedback": "In part (c), because the test statistic $z = 2.648$ is strictly greater than the critical value $2.326$, $H_0$ must be rejected."
        },
        {
            "ans": "(a) $H_0: \\mu_A = \\mu_B$, $H_1: \\mu_A \\neq \\mu_B$, (b) $N(0, 0.7545)$, (c) Reject $H_0$, (d) Independent samples",
            "feedback": "In part (a), the research question asks whether Treatment A produces a *higher* yield, which requires a one-tailed test $H_1: \\mu_A > \\mu_B$."
        },
        {
            "ans": "(a) $H_0: \\mu_A = \\mu_B$, $H_1: \\mu_A > \\mu_B$, (b) $N(0, 0.2255)$, (c) Reject $H_0$, (d) Samples must have equal variance",
            "feedback": "In part (b), variances always add: $$\\text{Var}(\\bar{X}_A - \\bar{X}_B)$$ $$= 0.49 + 0.2645 = 0.7545$$ You must never subtract the variances."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Variances Always Add in Differences",
        "content": "A perennial error in two-sample normal tests is subtracting the variances because of the minus sign in $\\bar{X}_A - \\bar{X}_B$. Differences in independent random variables always increase total uncertainty, so variances must always be added: $\\dfrac{\\sigma_A^2}{n_A} + \\dfrac{\\sigma_B^2}{n_B}$."
    }
}
];