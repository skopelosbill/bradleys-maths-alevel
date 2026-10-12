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
    "question": "<strong>(a)</strong> The daily one-way commuting distances, in kilometres to the nearest kilometre, for $11$ staff members at an engineering firm are recorded below:$$14, \\quad 18, \\quad 20, \\quad 24,$$ $$ 27, \\quad 28, \\quad 30, \\quad 32,$$ $$34, \\quad 38, \\quad 65$$<strong>(i)</strong> Calculate the mean and standard deviation of these commuting distances.<br><br>Outliers are defined to be values greater than $Q_3 + 1.5 \\times (Q_3 - Q_1)$ or less than $Q_1 - 1.5 \\times (Q_3 - Q_1)$.<br><br>&emsp;<strong>(ii)</strong> Show that $65\\text{ km}$ is an outlier.<br><br>A subsequent audit revealed that the distance recorded as $65\\text{ km}$ was entered erroneously and should in fact have been $56\\text{ km}$. Without performing any further numerical calculations, state what effect, if any, this correction will have on:<br>&emsp;<strong>(iii)</strong> the standard deviation,<br>&emsp;<strong>(iv)</strong> the interquartile range.<br><br><strong>(b)</strong> The histogram below illustrates the daily commuting distances of a random sample of $188$ office workers from a neighbouring business park:<img src='images/Statistics_pngs/050251.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'><table style='width:100%; max-width:280px; margin:15px auto; border-collapse:collapse; text-align:center;'><tr style='border-bottom:1px solid #ccc;'><th style='padding:6px; text-align:left;'>Distance ($d$, km)</th><th style='padding:6px;'>Workers</th></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>$0 \\le d < 10$</td><td style='padding:6px;'>30</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>$10 \\le d < 20$</td><td style='padding:6px;'>50</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>$20 \\le d < 35$</td><td style='padding:6px;'>60</td></tr><tr style='border-bottom:1px solid #eee;'><td style='padding:6px; text-align:left;'>$35 \\le d < 50$</td><td style='padding:6px;'></td></tr><tr><td style='padding:6px; text-align:left;'>$50 \\le d < 80$</td><td style='padding:6px;'>18</td></tr></table>&emsp;<strong>(i)</strong> Use the histogram to complete the entry for the class $35 \\le d < 50$ in the table.<br>&emsp;<strong>(ii)</strong> Estimate the probability that an office worker chosen at random from this sample has a daily commuting distance of more than $25\\text{ km}$.",
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
    "question": "A telecommunications call centre records the duration of $80$ technical support calls. The distribution of call durations, $t$ minutes, is summarised by the box plot shown below:<img src='images/Statistics_pngs/050252.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'><strong>(a)</strong> State the interquartile range of the call durations.<br><br><strong>(b)</strong> An outlier is defined as any value that lies more than $1.5 \\times \\text{IQR}$ above the upper quartile or more than $1.5 \\times \\text{IQR}$ below the lower quartile. Show that the value $64\\text{ minutes}$ is an outlier according to this rule.<br><br><strong>(c)</strong> Describe the skewness of the distribution of call durations, giving two distinct justifications based on the box plot.<br><br><strong>(d)</strong> The supervisor discovers that the call recorded as $64\\text{ minutes}$ was actually $44\\text{ minutes}$. Without recalculating, state what effect, if any, this correction will have on:<br>&emsp;<strong>(i)</strong> the median,<br>&emsp;<strong>(ii)</strong> the mean,<br>&emsp;<strong>(iii)</strong> the standard deviation.",
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
    "question": "The weights of $53$ parcels processed at an automated distribution depot are illustrated in the histogram below:<img src='images/Statistics_pngs/050253.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'><strong>(a)</strong> Construct a grouped frequency table for the weights of the $53$ parcels.<br><br><strong>(b)</strong> Use linear interpolation to estimate:<br>&emsp;<strong>(i)</strong> the median parcel weight,<br>&emsp;<strong>(ii)</strong> the $80^{\\text{th}}$ percentile of parcel weights.<br><br><strong>(c)</strong> Estimate the number of parcels in this sample that weigh between $3\\text{ kg}$ and $8\\text{ kg}$.",
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
    "question": "A cohort of $120$ candidates sat an entrance examination. The marks attained, $m$, are shown in the cumulative frequency curve below:<img src='images/Statistics_pngs/050254.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'><strong>(a)</strong> Use the cumulative frequency curve to estimate:<br>&emsp;<strong>(i)</strong> the median mark,<br>&emsp;<strong>(ii)</strong> the interquartile range.<br><br><strong>(b)</strong> The top $15\\%$ of candidates are awarded a Certificate of Distinction. Estimate the minimum mark required to receive a Certificate of Distinction.<br><br><strong>(c)</strong> Candidates who score less than $40$ marks fail the examination. Estimate the percentage of candidates who failed.",
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
    "question": "A consumer laboratory tests the continuous battery lifetimes, in hours, of two leading brands of rechargeable headlamps: Brand A and Brand B. The results from independent random samples of each brand are shown in the parallel box plots below:<img src='images/Statistics_pngs/050255.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'><strong>(a)</strong> Compare the battery lifetimes of Brand A and Brand B by referring to:<br>&emsp;<strong>(i)</strong> an appropriate measure of average,<br>&emsp;<strong>(ii)</strong> an appropriate measure of spread.<br><br><strong>(b)</strong> Determine, with mathematical justification from the quartiles, whether the distribution of battery lifetimes for Brand A exhibits skewness.<br><br><strong>(c)</strong> A rescue team requires headlamps that provide consistent and reliable illumination times. State, with a reason, which brand you would recommend to the rescue team.",
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
        "<strong>(a)(i) Finding $P(F)$ under independence:</strong><br><br>If $E$ and $F$ are independent, $P(E \\cap F) = P(E) \\times P(F)$.<br> Applying the addition rule:\\begin{aligned} &P(E \\cup F) = P(E) + P(F) \\cr &\\qquad \\qquad- P(E)P(F) \\cr &0.84 = 0.60 + P(F) - 0.60P(F) \\cr &0.84 - 0.60 = 0.40P(F) \\cr &0.24 = 0.40P(F) \\cr &P(F) = \\dfrac{0.24}{0.40} \\cr &P(F) = 0.60 \\end{aligned}",
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
        "<strong>(c) Detected by exactly two modules:</strong><br><br>Summing the three mutually exclusive pairs where two modules succeed and one fails:\\begin{aligned} &P(F \\cap A \\cap D')\\cr &= 0.90 \\times 0.85 \\times 0.30 \\cr &= 0.2295 \\cr P(F \\cap A' \\cap D)\\cr &= 0.90 \\times 0.15 \\times 0.70 \\cr &= 0.0945 \\cr P(F' \\cap A \\cap D)\\cr &= 0.10 \\times 0.85 \\times 0.70 \\cr &= 0.0595 \\end{aligned}Summing these probabilities:\\begin{aligned} & P(\\text{exactly two}) \\cr &= 0.2295 + 0.0945 + 0.0595 \\cr &= 0.3835 \\end{aligned}",
        "<strong>(d) Conditional probability that Firewall was involved:</strong><br><br>We restrict to the outcomes where exactly two modules detected the threat and $F$ succeeded:\\begin{aligned} &P(F \\text{ detected} \\cap \\text{exactly two}) \\cr &\\quad = P(F \\cap A \\cap D')\\cr \\qquad + P(F \\cap A' \\cap D) \\cr &\\quad = 0.2295 + 0.0945 \\cr &\\quad = 0.3240 \\end{aligned}Dividing by the probability of exactly two modules detecting:\\begin{aligned} P(F \\mid \\text{exactly two}) &= \\dfrac{0.3240}{0.3835} \\cr &= \\dfrac{3240}{3835} \\cr &= \\dfrac{648}{767} \\cr &\\approx 0.845 \\end{aligned}",
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
        "<strong>(c)(ii) Evaluating $P(A \\cup B')$:</strong><br><br>Using set identities:\\begin{aligned} P(B') &= 1 - p = 1 - 0.60 = 0.40 \\cr P(A \\cap B') &= P(A) - P(A \\cap B) \\cr &= 0.50 - 0.30 \\cr &= 0.20 \\end{aligned}Applying the addition rule:\\begin{aligned} &P(A \\cup B')\\cr &= P(A) + P(B') - P(A \\cap B') \\cr &= 0.50 + 0.40 - 0.20 \\cr &= 0.70 \\end{aligned}",
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
        "<strong>(b)(i) Probability of playing Tennis:</strong><br><br>Summing the Tennis regions:\\begin{aligned} &n(T) \\cr &= n(T \\text{ only}) + n(T \\cap S) + n(T \\cap B) \\cr &= 20 + 30 + 20 \\cr &= 70 \\end{aligned}The probability is:\\begin{aligned} P(T) &= \\dfrac{70}{150} \\cr &= \\dfrac{7}{15} \\quad (\\approx 0.467) \\end{aligned}",
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
}
];