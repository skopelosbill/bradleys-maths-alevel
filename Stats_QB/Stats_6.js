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
        "<strong>(a) Ranking the scores and calculating $r_s$:</strong><br><br>Assign ranks from $1$ (lowest) to $8$ (highest):<br><br>• <strong>Chef A:</strong> Rank A $= 3$, Rank B $= 4 \\implies d = -1 \\implies d^2 = 1$<br>• <strong>Chef B:</strong> Rank A $= 5$, Rank B $= 5 \\implies d = 0 \\implies d^2 = 0$<br>• <strong>Chef C:</strong> Rank A $= 6$, Rank B $= 6 \\implies d = 0 \\implies d^2 = 0$<br>• <strong>Chef D:</strong> Rank A $= 1$, Rank B $= 1 \\implies d = 0 \\implies d^2 = 0$<br>• <strong>Chef E:</strong> Rank A $= 8$, Rank B $= 8 \\implies d = 0 \\implies d^2 = 0$<br>• <strong>Chef F:</strong> Rank A $= 4$, Rank B $= 3 \\implies d = 1 \\implies d^2 = 1$<br>• <strong>Chef G:</strong> Rank A $= 7$, Rank B $= 7 \\implies d = 0 \\implies d^2 = 0$<br>• <strong>Chef H:</strong> Rank A $= 2$, Rank B $= 2 \\implies d = 0 \\implies d^2 = 0$<br><br>Summing the squared rank differences:\\begin{aligned} \\sum d^2 &= 1 + 0 + 0 + 0 + 0 + 1 + 0 + 0 \\cr &= 2 \\end{aligned}Applying Spearman's formula with $n = 8$:\\begin{aligned} r_s &= 1 - \\dfrac{6\\sum d^2}{n(n^2 - 1)} \\cr &= 1 - \\dfrac{6(2)}{8(64 - 1)} \\cr &= 1 - \\dfrac{12}{8(63)} \\cr &= 1 - \\dfrac{12}{504} \\cr &= 1 - \\dfrac{1}{42} \\cr &= \\dfrac{41}{42} \\cr &\\approx 0.976 \\end{aligned}",
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
}
];